// Minna Line accounts and community: the welcome gate (sign up / log in), the Me page, the weekly league,
// the stats report, beta feedback and the admin dashboard. Builds on MLUI (app.js) and CLOUD (cloud.js).
window.SOCIAL = (() => {
  'use strict';
  const UI = window.MLUI, CLOUD = window.CLOUD, ML = window.ML;
  const { esc, ICON, ART, render, go, modal, toast, mascotSVG, meter, S } = UI;
  const fmt = (n) => Math.round(+n || 0).toLocaleString('en-US');
  const pct = (a, b) => (b > 0 ? Math.round((a / b) * 100) : 0);
  const DAY = ML.DAY, dayStr = ML.dayStr;
  const SKIN = Object.fromEntries(ML.SHOP.filter((x) => x.slot === 'skin').map((x) => [x.id, x.color]));
  const JLPTS = ['N5', 'N4', 'N3', 'N2', 'N1'];
  const LV_COLOR = { N5: 'var(--line)', N4: 'var(--n4)', N3: 'var(--n3)', N2: 'var(--n2)', N1: 'var(--n1)' };

  // A learner's Mochi, wearing whatever they have equipped.
  function avatar(av, size = 44, mood = 'happy') {
    const a = av || {}, hat = ML.SHOP_BY.has(a.hat) ? a.hat : 'cap', acc = ML.SHOP_BY.has(a.acc) ? a.acc : 'none';
    return `<span class="ava" style="--sz:${size}px;--skin:${SKIN[a.skin] || SKIN['skin-sakura']}">${ART.mascot(mood, { hat, acc, face: true })}</span>`;
  }
  const myAvatar = (size, mood) => avatar({ hat: S.equip.hat, acc: S.equip.acc, skin: S.equip.skin }, size, mood);
  const myName = () => (CLOUD.profile && CLOUD.profile.display_name) || 'Conductor';
  function ago(iso) {
    if (!iso) return 'never';
    const s = (Date.now() - new Date(iso).getTime()) / 1000;
    if (s < 90) return 'just now';
    if (s < 3600) return Math.round(s / 60) + ' min ago';
    if (s < 86400) return Math.round(s / 3600) + ' h ago';
    if (s < 86400 * 30) return Math.round(s / 86400) + ' d ago';
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }
  const dateShort = (iso) => (iso ? new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '');
  const hm = (secs) => { const m = Math.round((secs || 0) / 60); return m >= 60 ? `${Math.floor(m / 60)}h ${m % 60}m` : `${m}m`; };
  // JLPT is held on the first Sunday of July and of December.
  function nextJLPT() {
    const now = new Date(), today = new Date(now.getFullYear(), now.getMonth(), now.getDate()), c = [];
    for (const y of [now.getFullYear(), now.getFullYear() + 1]) for (const m of [6, 11]) { const d = new Date(y, m, 1); d.setDate(1 + ((7 - d.getDay()) % 7)); c.push(d); }
    const d = c.find((x) => x >= today);
    return { date: d, days: Math.round((d - today) / DAY), label: d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' }) };
  }
  // Simple column chart. rows: [{ label, value, title, cls }]
  function bars(rows, o = {}) {
    const max = Math.max(1, ...rows.map((r) => r.value));
    return `<div class="bars ${o.cls || ''}" role="img" aria-label="${esc(o.label || '')}">${rows.map((r) => `<div class="bar ${r.cls || ''}" title="${esc(r.title || `${r.label}: ${fmt(r.value)}`)}">
      <span class="bv num">${r.value ? compact(r.value) : ''}</span><i style="height:${r.value ? Math.max(4, Math.round((r.value / max) * 100)) : 0}%"></i><span class="bl">${esc(r.label)}</span></div>`).join('')}</div>`;
  }
  const compact = (n) => (n >= 10000 ? Math.round(n / 1000) + 'k' : n >= 1000 ? (n / 1000).toFixed(1) + 'k' : String(n));
  const hbar = (label, value, max, right, color) => `<div class="hrow"><span>${esc(label)}</span>${meter(max ? value / max : 0, color)}<span class="num">${right}</span></div>`;

  // ---------------------------------------------------------------- stats that describe a learner
  function memoryStages(items = S.items) {
    const b = [0, 0, 0, 0, 0];
    for (const k in items) { const s = items[k].s; b[s <= 0 ? 0 : s <= 2 ? 1 : s === 3 ? 2 : s <= 5 ? 3 : 4]++; }
    return b;
  }
  const STAGE_NAMES = ['Just met', 'Learning', 'Familiar', 'Long-term', 'Mastered'];
  const STAGE_COLORS = ['var(--rule)', 'var(--express)', 'var(--coin)', 'var(--line)', 'var(--good)'];
  const SKILLS = { k: 'Kana', v: 'Words', j: 'Kanji', g: 'Grammar', e: 'Sentences', c: 'Verb forms', r: 'Reading', w: 'Handwriting' };
  function skillStats(items = S.items) {
    const out = {};
    for (const k in items) { const t = k[0]; if (!SKILLS[t]) continue; const o = (out[t] = out[t] || [0, 0]); o[0] += items[k].ok || 0; o[1] += items[k].bad || 0; }
    return out;
  }
  let sumCache = null, sumAt = 0;
  // Sent to the account with every save, so the admin dashboard can show rich progress without opening the whole save file.
  function summary() {
    if (sumCache && Date.now() - sumAt < 120000) return sumCache;
    const readiness = {};
    for (const l of JLPTS) { const r = UI.readiness(l); readiness[l] = { total: Math.round(r.total * 100), parts: Object.fromEntries(r.rows.map(([k, m]) => [k, Math.round(m * 100)])) }; }
    const stampsBy = {};
    for (const st of ML.STATIONS) if (S.stamps[st.id]) stampsBy[st.level] = (stampsBy[st.level] || 0) + 1;
    const last14 = [];
    for (let i = 13; i >= 0; i--) last14.push(S.history[dayStr(new Date(Date.now() - i * DAY))] || 0);
    sumCache = {
      readiness, stages: memoryStages(), skills: skillStats(), stampsBy, last14, due: ML.dueKeys().length, weak: ML.weakKeys().length,
      next: (UI.nextStation() || {}).id, stats: S.stats, tickets: S.tickets, omamori: S.omamori, owned: S.owned.length,
      settings: { script: S.settings.script, romaji: S.settings.romaji, theme: S.settings.theme, audio: S.settings.audio }, at: Date.now(),
    };
    sumAt = Date.now();
    return sumCache;
  }

  // ---------------------------------------------------------------- welcome gate
  let gateMode = 'signup';
  const LEVEL_CHOICES = [['new', 'Brand new'], ['N5', 'N5'], ['N4', 'N4'], ['N3', 'N3'], ['N2', 'N2'], ['N1', 'N1']];
  function showGate(mode, info) {
    UI.view = { name: 'gate' };
    gateMode = mode || gateMode;
    const m = gateMode;
    const facts = [[fmt(ML.VOCAB.length), 'words'], [fmt(ML.KANJI.filter((k) => !k.extra).length), 'kanji'], [fmt(ML.GRAMMAR.length), 'grammar points'], [fmt(ML.READING.length), 'readings']];
    const perks = [
      ['Reviews that know when you forget', 'Every word, kanji and grammar point comes back right on time.'],
      ['Write, listen, read, type', 'Stroke-checked handwriting, listening drills, graded reading.'],
      ['Mock exams for all five levels', 'N5 to N1, timed like the real thing.'],
      ['Weekly league and streaks', 'Climb the board with learners around the world.'],
      ['No ads, no hearts, no paywall', 'Everything other apps charge for is simply included.'],
    ];
    const field = (id, label, attrs) => `<div class="field"><label for="${id}">${label}</label><input class="input" id="${id}" name="${id}" ${attrs}></div>`;
    let form = '';
    if (m === 'signup') form = `
      ${field('dname', 'Conductor name', 'type="text" maxlength="24" autocomplete="nickname" placeholder="What should Mochi call you?" required')}
      ${field('email', 'Email', 'type="email" autocomplete="email" inputmode="email" placeholder="you@example.com" required')}
      ${field('password', 'Password', 'type="password" autocomplete="new-password" minlength="8" placeholder="8 characters or more" required')}
      <div class="field"><label id="lvlab">Where are you starting?</label><div class="seg" role="group" aria-labelledby="lvlab">${LEVEL_CHOICES.map(([v, l], i) => `<button type="button" class="chip" data-lvl="${v}" aria-pressed="${i === 0}">${l}</button>`).join('')}</div><input type="hidden" name="lvl" value="new"></div>
      <label class="check"><input type="checkbox" name="pub" checked> <span>Show my name and level on the public leaderboard</span></label>
      <div class="formerr" role="alert" hidden></div>
      <button class="btn primary block" type="submit">しゅっぱつ！ Create my free account</button>
      <p class="fine">We store your email, your study progress and basic device details (browser, time zone) to run the beta. You can delete your account whenever you like.</p>`;
    else if (m === 'login') form = `
      ${field('email', 'Email', 'type="email" autocomplete="email" inputmode="email" placeholder="you@example.com" required')}
      ${field('password', 'Password', 'type="password" autocomplete="current-password" required')}
      <div class="formerr" role="alert" hidden></div>
      <button class="btn primary block" type="submit">ただいま！ Log in</button>
      <button class="linkbtn" type="button" data-act="gatemode" data-arg="reset">Forgot your password?</button>`;
    else if (m === 'reset') form = `
      <p class="muted" style="margin:0">Enter your email and we'll send a link to set a new password.</p>
      ${field('email', 'Email', 'type="email" autocomplete="email" inputmode="email" placeholder="you@example.com" required')}
      <div class="formerr" role="alert" hidden></div>
      <button class="btn primary block" type="submit">Send the link</button>
      <button class="linkbtn" type="button" data-act="gatemode" data-arg="login">Back to log in</button>`;
    else form = `<div class="gate-note">${mascotSVG('happy', { cls: 'bob' })}<h2>${m === 'confirm' ? 'Check your inbox' : 'Link sent'}</h2>
      <p class="muted">${m === 'confirm' ? `We sent a confirmation link to <b>${esc(info || '')}</b>. Open it to finish creating your account.` : `If <b>${esc(info || '')}</b> has an account, a password link is on its way.`}</p>
      <button class="btn block" type="button" data-act="gatemode" data-arg="login">Back to log in</button></div>`;
    const tabs = m === 'signup' || m === 'login' ? `<div class="tabs gate-tabs" role="tablist"><button type="button" role="tab" aria-selected="${m === 'signup'}" data-act="gatemode" data-arg="signup">Create account</button><button type="button" role="tab" aria-selected="${m === 'login'}" data-act="gatemode" data-arg="login">Log in</button></div>` : '';
    UI.root.innerHTML = `<div class="gate"><div class="gate-in">
      <section class="gate-hero">
        <div class="gate-art">${ART.scene('spring')}<div class="gate-mochi">${mascotSVG('happy', { cls: 'bob' })}<div class="bubble left">ようこそ！ <small>Welcome aboard. All stops are free.</small></div></div></div>
        <div class="gate-copy">
          <div class="gate-brand"><b class="pop">Minna Line</b><span class="jp">みんなの せん</span><span class="pill coin">Beta</span></div>
          <h1>All of Japanese, from your first あ to JLPT N1.</h1>
          <p>A study game where every lesson is a station. Collect stamps, battle yokai, and let Mochi the cat conductor keep your streak alive.</p>
          <div class="gate-facts">${facts.map(([n, l]) => `<div><b class="num">${n}</b><span>${l}</span></div>`).join('')}</div>
          <ul class="gate-perks">${perks.map(([t, d]) => `<li><b>${t}</b><span>${d}</span></li>`).join('')}</ul>
        </div>
      </section>
      <section class="gate-side">
        <form class="card gate-card" id="authform" novalidate>${tabs}${form}${CLOUD.demo ? '<p class="fine">Demo mode: accounts live only in this browser. Use any email and password.</p>' : ''}</form>
        <div class="card gate-board" id="gateboard" hidden></div>
      </section>
    </div></div>`;
    UI.setKeys(null);
    UI.setActions({ gatemode: (x) => showGate(x) });
    const f = UI.root.querySelector('#authform');
    f.addEventListener('click', (e) => {
      const c = e.target.closest('[data-lvl]');
      if (!c) return;
      f.elements.lvl.value = c.dataset.lvl;
      f.querySelectorAll('[data-lvl]').forEach((b) => b.setAttribute('aria-pressed', String(b === c)));
    });
    f.addEventListener('submit', onAuthSubmit);
    window.scrollTo(0, 0);
    CLOUD.leaderboard('week', 5).then((rows) => {
      const el = document.getElementById('gateboard'), top = rows.filter((r) => r.score > 0).slice(0, 5);
      if (!el || top.length < 3) return;
      el.hidden = false;
      el.innerHTML = `<div class="eyebrow">This week's top conductors</div><ol class="lb mini">${top.map((r) => lbRow(r, 'week', 30)).join('')}</ol>`;
    }).catch(() => {});
  }
  async function onAuthSubmit(e) {
    e.preventDefault();
    const f = e.target, el = f.elements, btn = f.querySelector('[type=submit]'), err = f.querySelector('.formerr');
    if (!btn) return;
    const fail = (msg, focus) => { err.textContent = msg; err.hidden = false; if (focus) focus.focus(); };
    const email = (el.email.value || '').trim(), pw = el.password ? el.password.value : '';
    err.hidden = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail("That email address doesn't look right.", el.email);
    if (gateMode === 'signup') {
      if ((el.dname.value || '').trim().length < 2) return fail('Pick a conductor name with at least 2 characters.', el.dname);
      if (pw.length < 8) return fail('Choose a password with 8 characters or more.', el.password);
    } else if (gateMode === 'login' && !pw) return fail('Type your password.', el.password);
    const label = btn.textContent;
    btn.disabled = true; btn.textContent = 'One moment…';
    try {
      if (gateMode === 'signup') {
        const lvl = el.lvl.value, jlpt = lvl === 'new' ? 'N5' : lvl, fresh = !S.stats.answers;
        const r = await CLOUD.signUp(email, pw, { display_name: el.dname.value.trim().slice(0, 24), is_public: el.pub.checked, start_level: lvl, jlpt });
        if (r.needsConfirm) return showGate('confirm', email);
        if (fresh && !S.stats.answers) { S.settings = { ...S.settings, level: jlpt }; ML.save(); }
        UI.start();
        welcome(lvl);
      } else if (gateMode === 'login') {
        await CLOUD.signIn(email, pw);
        UI.start();
        toast(`おかえり！ Welcome back, ${myName()}`);
      } else {
        await CLOUD.sendReset(email);
        showGate('sent', email);
      }
    } catch (ex) {
      fail(ex.message || 'Something went wrong. Please try again.');
      btn.disabled = false; btn.textContent = label;
    }
  }
  function welcome(lvl) {
    UI.petals(24);
    const line = lvl === 'new' ? 'Start at station M00 to learn kana and your first greetings.' : `Your map is set to ${lvl}. You can change level any time from the tabs at the top.`;
    modal(`<div class="center-stack">${myAvatar(104, 'cheer')}
      <h2>ようこそ、${esc(myName())}さん！</h2>
      <p class="muted" style="margin:0">Your account is ready and your progress now saves to it, so you can pick up on any device.</p>
      <div class="tip" style="text-align:left">${esc(line)} Answer questions to earn XP and yen, punch three daily tickets, and climb this week's league.</div>
      <button class="btn primary" data-x>しゅっぱつ しんこう！ Let's go</button></div>`);
  }
  function newPassword() {
    if (document.getElementById('newpw')) return;
    const m = modal(`<form id="newpw" class="stack-form"><h2>Set a new password</h2>
      <div class="field"><label for="np1">New password</label><input class="input" id="np1" type="password" autocomplete="new-password" minlength="8" required placeholder="8 characters or more"></div>
      <div class="formerr" role="alert" hidden></div>
      <div class="row-between"><button class="btn" type="button" data-x>Cancel</button><button class="btn primary" type="submit">Save password</button></div></form>`);
    m.querySelector('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const err = m.querySelector('.formerr'), pw = m.querySelector('#np1').value;
      if (pw.length < 8) { err.textContent = 'Choose a password with 8 characters or more.'; err.hidden = false; return; }
      try { await CLOUD.setPassword(pw); m.remove(); toast('Password updated'); } catch (ex) { err.textContent = ex.message; err.hidden = false; }
    });
  }

  // ---------------------------------------------------------------- league
  const BOARDS = [['week', 'This week', 'XP this week'], ['xp', 'All time', 'XP'], ['streak', 'Streaks', 'day streak'], ['words', 'Words', 'words mastered']];
  function lbRow(r, board, size = 38) {
    const unit = board === 'streak' ? 'd' : board === 'words' ? '' : 'XP';
    return `<li class="lbrow ${r.is_me ? 'me' : ''}"><span class="pos num">${r.pos}</span>${avatar(r.avatar, size)}
      <span class="who"><b>${esc(r.display_name)}${r.is_me ? ' <span class="pill">you</span>' : ''}</b><small>${esc(r.jlpt || 'N5')} · Lv ${r.user_level || 1}${r.rank_name ? ' · ' + esc(r.rank_name) : ''}</small></span>
      <span class="sc num">${fmt(r.score)}<small>${unit}</small></span></li>`;
  }
  function podium(top, board) {
    const order = [top[1], top[0], top[2]].filter(Boolean);
    return `<div class="podium">${order.map((r) => `<div class="pod p${r.pos} ${r.is_me ? 'me' : ''}">${avatar(r.avatar, r.pos === 1 ? 84 : 66, r.pos === 1 ? 'cheer' : 'happy')}
      <b>${esc(r.display_name)}</b><span class="num">${fmt(r.score)}${board === 'streak' ? ' d' : board === 'words' ? '' : ' XP'}</span><div class="block"><span class="pop">${r.pos}</span></div></div>`).join('')}</div>`;
  }
  function boardHTML(rows, board) {
    const shown = rows.filter((r) => r.pos <= 50), me = rows.find((r) => r.is_me), top = shown.slice(0, 3);
    if (shown.length < 2) return `<div class="card center-stack">${mascotSVG('happy', { cls: 'bob' }).replace('<svg', '<svg style="width:96px;height:96px"')}<h3>You're the first conductor on the board</h3><p class="muted" style="margin:0">Invite a friend and race them to the top this week.</p><button class="btn primary" data-act="share">Invite a friend</button></div>`;
    return `${top.length === 3 ? podium(top, board) : ''}
      <ol class="lb card">${shown.slice(top.length === 3 ? 3 : 0).map((r) => lbRow(r, board)).join('')}
      ${me && me.pos > 50 ? `<li class="lbgap" aria-hidden="true">···</li>${lbRow(me, board)}` : ''}</ol>
      <p class="muted small" style="margin:0">${rows[0] ? fmt(rows[0].total) : 0} conductors on the board.${me && CLOUD.profile && CLOUD.profile.is_public === false ? ' Your row is private: only you can see it. Go public from the Me page.' : ''}</p>`;
  }
  function share() {
    const data = { title: 'Minna Line', text: 'Learn Japanese from zero to N1 with me on Minna Line. It is free.', url: location.origin + location.pathname };
    if (navigator.share) navigator.share(data).catch(() => {});
    else if (navigator.clipboard) navigator.clipboard.writeText(data.url).then(() => toast('Link copied')).catch(() => toast(data.url));
    else toast(data.url);
  }
  function renderBoard(v) {
    const tab = BOARDS.some((b) => b[0] === v.tab) ? v.tab : 'week';
    if (!CLOUD.enabled || !CLOUD.user) return renderMe();
    const b = BOARDS.find((x) => x[0] === tab);
    const sub = tab === 'week' ? 'XP earned since Monday. The board resets every week.' : tab === 'xp' ? 'Total XP since joining.' : tab === 'streak' ? 'Days studied in a row, still alive today.' : 'Words reviewed out to long-term memory.';
    render(`<div class="station"><button class="back" data-act="home">${ICON.back} Route map</button>
      <div class="row-between"><h1>リーグ · League</h1><button class="btn sm" data-act="share">Invite a friend</button></div>
      <div class="tabs" role="tablist">${BOARDS.map(([id, l]) => `<button role="tab" aria-selected="${id === tab}" data-act="board" data-arg="${id}">${l}</button>`).join('')}</div>
      <p class="muted" style="margin:0">${sub}</p>
      <div id="boardbody" class="stack" aria-live="polite"><div class="card skeleton" style="height:220px"></div></div></div>`, { share }, () => {
      CLOUD.leaderboard(tab, 50).then((rows) => { const el = document.getElementById('boardbody'); if (el && UI.view.name === 'board') el.innerHTML = boardHTML(rows, b[0]); })
        .catch((e) => { const el = document.getElementById('boardbody'); if (el) el.innerHTML = `<div class="card"><b>The board couldn't load.</b><span class="muted">${esc(CLOUD.nice(e))}</span><button class="btn" data-act="board" data-arg="${tab}">Try again</button></div>`; });
    });
  }
  function leagueCard(rows) {
    if (!rows) return `<div class="eyebrow">This week's league · リーグ</div><div class="skeleton" style="height:96px;border-radius:12px"></div>`;
    const me = rows.find((r) => r.is_me), top = rows.filter((r) => r.pos <= 3);
    return `<div class="row-between"><div class="eyebrow">This week's league · リーグ</div>${me ? `<span class="pill coin">#${me.pos} of ${fmt(me.total)}</span>` : ''}</div>
      <ol class="lb mini">${top.map((r) => lbRow(r, 'week', 30)).join('')}${me && me.pos > 3 ? lbRow(me, 'week', 30) : ''}</ol>
      <button class="btn" data-act="board">Open the league</button>`;
  }
  function homeSide() {
    let out = '';
    if (CLOUD.enabled && CLOUD.user) {
      out += `<div class="card league" id="leaguecard">${leagueCard(null)}</div>`;
      setTimeout(() => CLOUD.leaderboard('week', 50).then((rows) => { const el = document.getElementById('leaguecard'); if (el) el.innerHTML = leagueCard(rows); })
        .catch(() => { const el = document.getElementById('leaguecard'); if (el) el.remove(); }), 0);
    } else if (CLOUD.enabled) {
      out += `<div class="card cta"><div class="eyebrow">Save your progress</div><div>Create a free account to sync across devices and join the weekly league.</div><button class="btn primary" data-act="signin">Create account or log in</button></div>`;
    }
    const j = nextJLPT(), r = Math.round(UI.readiness().total * 100);
    out += `<div class="card jlpt"><div class="eyebrow">Next JLPT · しけん</div><div class="row-between"><div><span class="big">${j.days}</span> <span class="muted">days to go</span></div><span class="pill">${esc(UI.curLevel())} · ${r}% ready</span></div><div class="muted small">${esc(j.label)}. Registration opens a few months before.</div></div>`;
    return out;
  }

  // ---------------------------------------------------------------- stats
  function heatmap(weeks = 26) {
    const today = new Date(), start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() - (weeks - 1) * 7);
    let cols = '', months = '', lastM = -1;
    for (let w = 0; w < weeks; w++) {
      let col = '';
      for (let d = 0; d < 7; d++) {
        const dt = new Date(start.getFullYear(), start.getMonth(), start.getDate() + w * 7 + d), ds = dayStr(dt), n = S.history[ds] || 0;
        if (dt > today) { col += '<i class="off"></i>'; continue; }
        const lv = !n ? 0 : n < 20 ? 1 : n < 60 ? 2 : n < 150 ? 3 : 4;
        col += `<i class="h${lv}" title="${ds}: ${n} answers"></i>`;
        if (d === 0 && dt.getMonth() !== lastM) { lastM = dt.getMonth(); months += `<span style="grid-column:${w + 1}">${dt.toLocaleDateString('en-GB', { month: 'short' })}</span>`; }
      }
      cols += `<div>${col}</div>`;
    }
    return `<div class="heat" role="img" aria-label="Answers per day over the last ${weeks} weeks"><div class="heat-m" style="grid-template-columns:repeat(${weeks},1fr)">${months}</div><div class="heat-g" style="grid-template-columns:repeat(${weeks},1fr)">${cols}</div>
      <div class="heat-k muted small">Less <i class="h0"></i><i class="h1"></i><i class="h2"></i><i class="h3"></i><i class="h4"></i> More</div></div>`;
  }
  function renderStats() {
    const st = S.stats, days = Object.keys(S.history).length, j = nextJLPT();
    const kpi = (v, l, s) => `<div class="kpi"><b class="num">${v}</b><span>${l}</span>${s ? `<small>${s}</small>` : ''}</div>`;
    const xp14 = [], fc = Array(14).fill(0), t0 = new Date(); t0.setHours(0, 0, 0, 0);
    for (let i = 13; i >= 0; i--) { const d = new Date(Date.now() - i * DAY), ds = dayStr(d); xp14.push({ label: i === 0 ? 'Today' : String(d.getDate()), value: ((S.days || {})[ds] || [])[1] || 0, title: `${ds}: ${fmt(((S.days || {})[ds] || [])[1] || 0)} XP, ${S.history[ds] || 0} answers`, cls: i === 0 ? 'now' : '' }); }
    for (const k in S.items) { if (!ML.keyValid(k)) continue; const i = Math.floor((S.items[k].due - t0.getTime()) / DAY); if (i < 14) fc[Math.max(0, i)]++; }
    const fcRows = fc.map((n, i) => { const d = new Date(t0.getTime() + i * DAY); return { label: i === 0 ? 'Today' : String(d.getDate()), value: n, title: `${dayStr(d)}: ${n} cards due`, cls: i === 0 ? 'now' : '' }; });
    const stages = memoryStages(), total = stages.reduce((a, b) => a + b, 0), skills = skillStats(), weak = ML.weakKeys().length;
    const skillRows = Object.keys(SKILLS).filter((k) => skills[k] && skills[k][0] + skills[k][1] > 0);
    render(`<div class="station"><button class="back" data-act="home">${ICON.back} Route map</button>
      <h1>きろく · Your stats</h1>
      <div class="kpis">
        ${kpi(fmt(st.answers), 'answers', `${pct(st.correct, st.answers)}% correct`)}
        ${kpi(hm(st.secs), 'studied', days ? `${hm((st.secs || 0) / days)} a day` : '')}
        ${kpi(fmt(days), 'days studied', `streak ${ML.liveStreak()} · best ${Math.max(st.bestStreak || 0, S.streak.days || 0)}`)}
        ${kpi(fmt(total), 'things met', `${fmt(stages[3] + stages[4])} in long-term memory`)}
        ${kpi('×' + fmt(st.bestCombo), 'best combo', `${fmt(st.perfects)} perfect sessions`)}
        ${kpi(String(j.days), 'days to JLPT', esc(j.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })))}
      </div>
      <div class="statgrid">
        <section class="card wide"><div class="row-between"><h3>Study calendar</h3><span class="muted small">answers per day</span></div>${heatmap()}</section>
        <section class="card"><h3>XP, last 14 days</h3>${bars(xp14, { label: 'XP earned per day for the last 14 days' })}</section>
        <section class="card"><div class="row-between"><h3>Reviews coming up</h3><span class="muted small">cards due per day</span></div>${bars(fcRows, { label: 'Review cards due per day for the next 14 days', cls: 'alt' })}</section>
        <section class="card"><h3>Memory</h3>
          ${total ? `<div class="stack-bar" role="img" aria-label="${stages.map((n, i) => `${STAGE_NAMES[i]} ${n}`).join(', ')}">${stages.map((n, i) => (n ? `<i style="flex:${n};background:${STAGE_COLORS[i]}" title="${STAGE_NAMES[i]}: ${n}"></i>` : '')).join('')}</div>
          <div class="legend">${stages.map((n, i) => `<span><i style="background:${STAGE_COLORS[i]}"></i>${STAGE_NAMES[i]} <b class="num">${fmt(n)}</b></span>`).join('')}</div>` : '<p class="muted" style="margin:0">Answer a few questions and your memory map appears here.</p>'}
          <div class="muted small">Each correct review moves a card one step right. Long-term means a gap of a week or more.</div></section>
        <section class="card"><h3>Accuracy by skill</h3>
          ${skillRows.length ? skillRows.map((k) => hbar(SKILLS[k], skills[k][0], skills[k][0] + skills[k][1], `${pct(skills[k][0], skills[k][0] + skills[k][1])}%`)).join('') : '<p class="muted" style="margin:0">Nothing answered yet.</p>'}
          ${weak ? `<button class="btn" data-act="weak">Practise ${Math.min(weak, 15)} weak spots</button>` : ''}</section>
        <section class="card wide"><h3>Readiness for each level</h3>
          <div class="ready5">${JLPTS.map((l) => { const r = UI.readiness(l); return `<div style="--c:${LV_COLOR[l]}"><div class="row-between"><b class="pop">${l}</b><span class="num">${Math.round(r.total * 100)}%</span></div>${meter(r.total, LV_COLOR[l])}<small class="muted">${r.rows.map(([k, m]) => `${k} ${Math.round(m * 100)}`).join(' · ')}</small></div>`; }).join('')}</div></section>
      </div></div>`, {
      weak: () => UI.quizSession({ title: 'Weak spots', keys: ML.weakKeys().slice(0, 15), back: { name: 'stats' } }),
    }, () => { const h = document.querySelector('.heat'); if (h) h.scrollLeft = h.scrollWidth; }); // newest weeks first on a phone
  }

  // ---------------------------------------------------------------- me
  let installPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installPrompt = e; });
  function install() {
    if (installPrompt) { installPrompt.prompt(); installPrompt = null; return; }
    modal(`<h2>Install Minna Line</h2><p class="muted" style="margin:0">Add it to your home screen and it opens like an app, even offline.</p>
      <div class="tip"><b>iPhone or iPad:</b> tap Share, then “Add to Home Screen”.<br><b>Android:</b> open the browser menu, then “Install app” or “Add to Home screen”.<br><b>Computer:</b> use the install icon at the right of the address bar in Chrome or Edge.</div>
      <button class="btn primary" data-x>Got it</button>`);
  }
  const syncText = () => (CLOUD.offlineSession ? 'Offline. Will save when you are back online' : { syncing: 'Saving to your account…', synced: 'Saved to your account', offline: 'Offline. Will save when you are back online', idle: 'Saved to your account' }[CLOUD.status] || '');
  function paintSync() { const el = document.getElementById('syncstate'); if (el) { el.textContent = syncText(); el.dataset.s = CLOUD.status; } }
  function renderMe() {
    const p = CLOUD.profile, u = CLOUD.user, l = ML.level(), rk = ML.rank(), lo = ML.lvlFloor(l), hi = ML.lvlFloor(l + 1);
    const row = (act, title, sub, arg, danger) => `<button class="setrow ${danger ? 'danger' : ''}" data-act="${act}"${arg ? ` data-arg="${arg}"` : ''}><span><b>${title}</b>${sub ? `<small>${sub}</small>` : ''}</span>${ICON.back}</button>`;
    let account;
    if (u) account = `<section class="card"><div class="eyebrow">Account</div>
        <label class="check switch"><input type="checkbox" id="pubtoggle" ${p && p.is_public === false ? '' : 'checked'}> <span><b>Show me on the public leaderboard</b><small>Others see only your name, Mochi, level and score. Never your email.</small></span></label>
        ${row('editname', 'Conductor name', esc(myName()))}
        ${row('changepw', 'Change password', esc(u.email || ''))}
        ${row('logout', 'Log out', 'Your progress stays safe in your account')}
        ${row('deleteacct', 'Delete my account', 'Erases your account and everything stored about you', '', true)}</section>`;
    else if (CLOUD.enabled) account = `<section class="card cta"><div class="eyebrow">Account</div><div>Create a free account to save progress across devices and join the weekly league.</div><button class="btn primary" data-act="signin">Create account or log in</button></section>`;
    else account = `<section class="card"><div class="eyebrow">Saving</div><div>Progress is saved in this browser. Use Settings → Backup to move it to another device.</div></section>`;
    render(`<div class="station"><button class="back" data-act="home">${ICON.back} Route map</button>
      <section class="card mecard">${myAvatar(108, 'happy')}
        <div class="stack" style="gap:6px"><div class="row-between"><h1>${esc(u ? myName() : 'Conductor')}</h1><span class="pill">${rk[1]} ${rk[3]}</span></div>
          <div class="rankline"><b class="pop">Lv ${l}</b>${meter((S.xp - lo) / (hi - lo))}<span class="muted small num">${fmt(S.xp - lo)}/${fmt(hi - lo)} XP</span></div>
          <div class="muted small">${u ? `${esc(u.email || '')}${p && p.created_at ? ` · aboard since ${dateShort(p.created_at)}` : ''}` : 'Guest'}</div>
          ${u ? `<div class="sync small" id="syncstate" data-s="${CLOUD.status}">${syncText()}</div>` : ''}</div></section>
      <div class="kpis four">
        <div class="kpi"><b class="num">${fmt(S.xp)}</b><span>XP</span></div>
        <div class="kpi"><b class="num">${ML.liveStreak()}</b><span>day streak</span></div>
        <div class="kpi"><b class="num">${Object.keys(S.stamps).length}</b><span>stamps</span></div>
        <div class="kpi"><b class="num">${Object.keys(S.trophies).length}</b><span>trophies</span></div>
      </div>
      <div class="megrid">
        ${account}
        <section class="card"><div class="eyebrow">App</div>
          ${CLOUD.isAdmin ? row('admin', 'Admin dashboard', 'Everyone’s progress, logins and feedback') : ''}
          ${row('stats', 'Your stats', 'Calendar, memory, accuracy, review forecast')}
          ${row('collection', 'Collection', 'Stamps, stickers and trophies')}
          ${row('shop', 'Shop', 'Dress up Mochi and change the colours')}
          ${row('settings', 'Settings', 'Script, audio, colours, backup')}
          ${row('install', 'Install the app', 'Home-screen icon, works offline')}
          ${u ? row('feedback', 'Send feedback', 'Bugs, ideas, mistakes in the content') : ''}
          <div class="muted small">Minna Line beta · v${esc(CLOUD.version)}</div></section>
      </div></div>`, {
      install, signin: () => showGate('signup'),
      editname: () => {
        const m = modal(`<form class="stack-form"><h2>Conductor name</h2><div class="field"><label for="nm">Shown on the leaderboard</label><input class="input" id="nm" maxlength="24" value="${esc(myName())}" required></div>
          <div class="formerr" role="alert" hidden></div><div class="row-between"><button class="btn" type="button" data-x>Cancel</button><button class="btn primary" type="submit">Save</button></div></form>`);
        m.querySelector('form').addEventListener('submit', async (e) => {
          e.preventDefault();
          const v = m.querySelector('#nm').value.trim().slice(0, 24), err = m.querySelector('.formerr');
          if (v.length < 2) { err.textContent = 'Use at least 2 characters.'; err.hidden = false; return; }
          try { await CLOUD.updateProfile({ display_name: v }); m.remove(); toast('Name updated'); renderMe(); } catch (ex) { err.textContent = ex.message; err.hidden = false; }
        });
      },
      changepw: newPassword,
      logout: async () => { toast('Saving and logging out…'); await CLOUD.signOut(); UI.applySkin(); if (CLOUD.requireLogin) showGate('login'); else go({ name: 'home' }); },
      deleteacct: () => {
        const m = modal(`<form class="stack-form"><h2>Delete your account?</h2><p class="muted" style="margin:0">This erases your account, saved progress, activity history and leaderboard entry for good. It cannot be undone.</p>
          <div class="field"><label for="del">Type DELETE to confirm</label><input class="input" id="del" autocomplete="off" required></div>
          <div class="formerr" role="alert" hidden></div><div class="row-between"><button class="btn" type="button" data-x>Keep my account</button><button class="btn" type="submit" style="color:var(--bad)">Delete everything</button></div></form>`);
        m.querySelector('form').addEventListener('submit', async (e) => {
          e.preventDefault();
          const err = m.querySelector('.formerr');
          if (m.querySelector('#del').value.trim() !== 'DELETE') { err.textContent = 'Type DELETE in capitals to confirm.'; err.hidden = false; return; }
          try { await CLOUD.deleteAccount(); m.remove(); UI.applySkin(); toast('Account deleted'); if (CLOUD.requireLogin) showGate('signup'); else go({ name: 'home' }); } catch (ex) { err.textContent = ex.message; err.hidden = false; }
        });
      },
    }, () => {
      const t = document.getElementById('pubtoggle');
      if (t) t.addEventListener('change', async () => {
        try { await CLOUD.updateProfile({ is_public: t.checked }); toast(t.checked ? 'You are on the public board' : 'You are hidden from the board'); } catch (ex) { t.checked = !t.checked; toast(ex.message); }
      });
    });
  }
  function feedback() {
    if (!CLOUD.user) return;
    const kinds = [['idea', 'Idea'], ['bug', 'Something broke'], ['content', 'Mistake in the Japanese'], ['love', 'I like this']];
    let kind = 'idea';
    const page = UI.view.name + (UI.view.id ? ':' + UI.view.id : '');
    const m = modal(`<form class="stack-form"><h2>Send feedback</h2><p class="muted" style="margin:0">You're on the beta, so every note shapes the app. Thank you!</p>
      <div class="seg">${kinds.map(([k, l]) => `<button type="button" class="chip" data-kind="${k}" aria-pressed="${k === kind}">${l}</button>`).join('')}</div>
      <div class="field"><label for="fbm">Your message</label><textarea id="fbm" class="plain" rows="5" maxlength="4000" required placeholder="What happened, or what would make this better?"></textarea></div>
      <div class="formerr" role="alert" hidden></div><div class="row-between"><button class="btn" type="button" data-x>Cancel</button><button class="btn primary" type="submit">Send</button></div></form>`, (e) => {
      const c = e.target.closest('[data-kind]');
      if (c) { kind = c.dataset.kind; m.querySelectorAll('[data-kind]').forEach((b) => b.setAttribute('aria-pressed', String(b === c))); }
    });
    m.querySelector('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const msg = m.querySelector('#fbm').value.trim(), err = m.querySelector('.formerr'), btn = m.querySelector('[type=submit]');
      if (msg.length < 3) { err.textContent = 'Write a few words first.'; err.hidden = false; return; }
      btn.disabled = true;
      try { await CLOUD.sendFeedback({ kind, message: msg, page }); m.remove(); toast('ありがとう！ Feedback sent'); } catch (ex) { err.textContent = ex.message; err.hidden = false; btn.disabled = false; }
    });
  }

  // ---------------------------------------------------------------- admin dashboard
  let adminData = null, adminSort = { k: 'last_seen_at', dir: -1 }, adminQ = '';
  const csvCell = (v) => { const s = v == null ? '' : typeof v === 'object' ? JSON.stringify(v) : String(v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  function download(name, rows, cols) {
    const csv = [cols.join(','), ...rows.map((r) => cols.map((c) => csvCell(r[c])).join(','))].join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); a.download = name; document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  function renderAdmin() {
    if (!CLOUD.isAdmin) return renderMe();
    render(`<div class="station"><button class="back" data-act="me">${ICON.back} Me</button>
      <div class="row-between"><h1>Admin · かんり</h1><div class="seg"><button class="chip" data-act="reload">Refresh</button><button class="chip" data-act="csv" data-arg="learners">Learners CSV</button><button class="chip" data-act="csv" data-arg="logins">Logins CSV</button><button class="chip" data-act="csv" data-arg="activity">Activity CSV</button></div></div>
      <div id="adminbody" class="stack"><div class="card skeleton" style="height:300px"></div></div></div>`, {
      reload: () => { adminData = null; renderAdmin(); },
      csv: (what) => {
        if (!adminData) return;
        const P = adminData.profiles, names = Object.fromEntries(P.map((p) => [p.id, p.display_name]));
        if (what === 'learners') download('minna-line-learners.csv', P, ['display_name', 'email', 'jlpt', 'start_level', 'user_level', 'rank_name', 'xp', 'streak', 'best_streak', 'answers', 'correct', 'words_mastered', 'kanji_mastered', 'grammar_mastered', 'items_seen', 'stamps', 'trophies', 'study_secs', 'days_studied', 'coins', 'login_count', 'last_login_at', 'last_seen_at', 'created_at', 'is_public', 'hidden', 'timezone', 'locale', 'platform', 'screen', 'referrer', 'app_version', 'user_agent', 'id']);
        if (what === 'logins') download('minna-line-logins.csv', adminData.logins, ['created_at', 'email', 'event', 'timezone', 'locale', 'platform', 'screen', 'referrer', 'app_version', 'user_agent', 'user_id']);
        if (what === 'activity') download('minna-line-activity.csv', adminData.days.map((d) => ({ ...d, name: names[d.user_id] || '' })), ['day', 'name', 'answers', 'correct', 'xp', 'secs', 'user_id']);
      },
      asort: (k) => { adminSort = { k, dir: adminSort.k === k ? -adminSort.dir : -1 }; paintAdmin(); },
      auser: (id) => adminUser(id),
      fbdone: async (id) => { const f = adminData.feedback.find((x) => String(x.id) === String(id)); if (!f) return; const s = f.status === 'done' ? 'new' : 'done'; try { await CLOUD.admin.setFeedbackStatus(f.id, s); f.status = s; paintAdmin(); } catch (e) { toast(CLOUD.nice(e)); } },
    }, async () => {
      try { adminData = adminData || await CLOUD.admin.all(); paintAdmin(); }
      catch (e) { const el = document.getElementById('adminbody'); if (el) el.innerHTML = `<div class="card"><b>Couldn't load the data.</b><span class="muted">${esc(CLOUD.nice(e))}</span></div>`; }
    });
  }
  function paintAdmin() {
    const el = document.getElementById('adminbody');
    if (!el || !adminData) return;
    const { profiles: P, days: D, logins: L, feedback: F } = adminData;
    const today = dayStr(), d7 = dayStr(new Date(Date.now() - 6 * DAY)), since = (n) => Date.now() - n * DAY;
    const xp7 = {}, act7 = new Set(), actToday = new Set(), perDay = {};
    for (const d of D) {
      (perDay[d.day] = perDay[d.day] || new Set()).add(d.user_id);
      if (d.day >= d7) { xp7[d.user_id] = (xp7[d.user_id] || 0) + (d.xp || 0); act7.add(d.user_id); }
      if (d.day === today) actToday.add(d.user_id);
    }
    for (const p of P) { const t = p.last_seen_at ? new Date(p.last_seen_at).getTime() : 0; if (t > since(7)) act7.add(p.id); if (p.last_seen_at && dayStr(new Date(p.last_seen_at)) === today) actToday.add(p.id); }
    const newWeek = P.filter((p) => new Date(p.created_at).getTime() > since(7)).length;
    const answers = P.reduce((a, p) => a + (p.answers || 0), 0), correct = P.reduce((a, p) => a + (p.correct || 0), 0), secs = P.reduce((a, p) => a + (p.study_secs || 0), 0);
    const kpi = (v, l, s) => `<div class="kpi"><b class="num">${v}</b><span>${l}</span>${s ? `<small>${s}</small>` : ''}</div>`;
    const series = (fn) => { const out = []; for (let i = 29; i >= 0; i--) { const d = new Date(Date.now() - i * DAY), ds = dayStr(d); out.push({ label: i % 5 === 0 ? String(d.getDate()) : '', value: fn(ds), title: `${ds}: ${fn(ds)}`, cls: i === 0 ? 'now' : '' }); } return out; };
    const joined = {};
    for (const p of P) { const ds = dayStr(new Date(p.created_at)); joined[ds] = (joined[ds] || 0) + 1; }
    const byLevel = Object.fromEntries(JLPTS.map((l) => [l, P.filter((p) => (p.jlpt || 'N5') === l).length]));
    const q = adminQ.trim().toLowerCase();
    const rows = P.filter((p) => !q || (p.display_name || '').toLowerCase().includes(q) || (p.email || '').toLowerCase().includes(q)).map((p) => ({ ...p, xp7: xp7[p.id] || 0, acc: pct(p.correct, p.answers) }));
    const { k, dir } = adminSort;
    rows.sort((a, b) => { const x = a[k], y = b[k]; return (x == null ? -1 : y == null ? 1 : typeof x === 'string' ? x.localeCompare(y) : x - y) * dir; });
    const th = (key, label, cls = '') => `<th class="${cls}" aria-sort="${k === key ? (dir > 0 ? 'ascending' : 'descending') : 'none'}"><button data-act="asort" data-arg="${key}">${label}${k === key ? (dir > 0 ? ' ↑' : ' ↓') : ''}</button></th>`;
    const names = Object.fromEntries(P.map((p) => [p.id, p.display_name]));
    el.innerHTML = `
      <div class="kpis">
        ${kpi(fmt(P.length), 'learners', `${newWeek} new this week`)}
        ${kpi(fmt(actToday.size), 'active today', `${pct(actToday.size, P.length)}% of everyone`)}
        ${kpi(fmt(act7.size), 'active in 7 days', `${pct(act7.size, P.length)}% of everyone`)}
        ${kpi(fmt(answers), 'answers', `${pct(correct, answers)}% correct`)}
        ${kpi(hm(secs), 'studied in total', P.length ? `${hm(secs / P.length)} each` : '')}
        ${kpi(fmt(F.filter((f) => f.status !== 'done').length), 'open feedback', `${F.length} in total`)}
      </div>
      <div class="statgrid">
        <section class="card"><div class="row-between"><h3>Learners studying each day</h3><span class="muted small">30 days</span></div>${bars(series((ds) => (perDay[ds] ? perDay[ds].size : 0)), { label: 'Learners who studied on each of the last 30 days', cls: 'thin' })}</section>
        <section class="card"><div class="row-between"><h3>New accounts each day</h3><span class="muted small">30 days</span></div>${bars(series((ds) => joined[ds] || 0), { label: 'New accounts on each of the last 30 days', cls: 'thin alt' })}</section>
        <section class="card"><h3>What they study</h3>${JLPTS.map((l) => hbar(l, byLevel[l], P.length, String(byLevel[l]), LV_COLOR[l])).join('')}</section>
        <section class="card"><h3>Latest feedback</h3>${F.length ? `<div class="fblist">${F.slice(0, 30).map((f) => `<div class="fb ${f.status === 'done' ? 'done' : ''}"><div class="row-between"><b>${esc(f.display_name || f.email || 'Someone')} <span class="pill">${esc(f.kind)}</span></b><button class="chip" data-act="fbdone" data-arg="${f.id}">${f.status === 'done' ? 'Reopen' : 'Mark done'}</button></div><p>${esc(f.message)}</p><small class="muted">${ago(f.created_at)} · ${esc(f.email || '')} · on ${esc(f.page || '?')} · v${esc(f.app_version || '?')}</small></div>`).join('')}</div>` : '<p class="muted" style="margin:0">No feedback yet.</p>'}</section>
      </div>
      <section class="stack"><div class="row-between"><h2 style="font-size:20px">Learners <span class="pill">${rows.length}</span></h2><input class="input" id="adminq" type="search" placeholder="Search name or email" value="${esc(adminQ)}" style="max-width:260px" aria-label="Search learners"></div>
        <div class="tblwrap"><table class="vocab admin"><thead><tr>${th('display_name', 'Learner', 'l')}${th('jlpt', 'JLPT')}${th('user_level', 'Lv')}${th('xp', 'XP')}${th('xp7', 'XP 7d')}${th('streak', 'Streak')}${th('answers', 'Answers')}${th('acc', 'Acc')}${th('words_mastered', 'Words')}${th('kanji_mastered', 'Kanji')}${th('stamps', 'Stamps')}${th('study_secs', 'Time')}${th('login_count', 'Logins')}${th('last_seen_at', 'Last seen')}${th('created_at', 'Joined')}</tr></thead>
        <tbody>${rows.map((p) => `<tr><td class="l"><button class="who" data-act="auser" data-arg="${esc(p.id)}">${avatar(p.avatar, 30)}<span><b>${esc(p.display_name)}${p.hidden ? ' <span class="pill" style="background:var(--bad-soft)">hidden</span>' : p.is_public ? '' : ' <span class="pill">private</span>'}</b><small>${esc(p.email || '')}</small></span></button></td>
          <td>${esc(p.jlpt || '')}</td><td class="num">${p.user_level}</td><td class="num">${fmt(p.xp)}</td><td class="num">${fmt(p.xp7)}</td><td class="num">${p.streak}</td><td class="num">${fmt(p.answers)}</td><td class="num">${p.answers ? p.acc + '%' : ''}</td><td class="num">${fmt(p.words_mastered)}</td><td class="num">${fmt(p.kanji_mastered)}</td><td class="num">${p.stamps}</td><td class="num">${hm(p.study_secs)}</td><td class="num">${p.login_count}</td><td>${ago(p.last_seen_at)}</td><td>${dateShort(p.created_at)}</td></tr>`).join('')}</tbody></table></div></section>
      <section class="stack"><h2 style="font-size:20px">Recent logins <span class="pill">${L.length}</span></h2>
        <div class="tblwrap"><table class="vocab admin"><thead><tr><th class="l">When</th><th class="l">Learner</th><th>Event</th><th class="l">Device</th><th class="l">Time zone</th><th>Language</th><th>Screen</th><th class="l">Came from</th></tr></thead>
        <tbody>${L.slice(0, 80).map((e) => `<tr><td class="l">${ago(e.created_at)}</td><td class="l"><b>${esc(names[e.user_id] || '')}</b> <small class="muted">${esc(e.email || '')}</small></td><td><span class="pill ${e.event === 'signup' ? 'good' : ''}">${esc(e.event)}</span></td><td class="l">${esc(e.platform || '')}</td><td class="l">${esc(e.timezone || '')}</td><td>${esc(e.locale || '')}</td><td>${esc(e.screen || '')}</td><td class="l">${esc(e.referrer || 'direct')}</td></tr>`).join('')}</tbody></table></div></section>`;
    const inp = document.getElementById('adminq');
    inp.addEventListener('input', () => { adminQ = inp.value; const pos = inp.selectionStart; paintAdmin(); const n = document.getElementById('adminq'); n.focus(); n.setSelectionRange(pos, pos); });
  }
  async function adminUser(id) {
    const p = adminData.profiles.find((x) => x.id === id);
    if (!p) return;
    const sm = p.summary || {}, rd = sm.readiness || {}, stages = sm.stages || [], skills = sm.skills || {};
    const fact = (l, v) => (v || v === 0 ? `<div><small class="muted">${l}</small><b>${esc(v)}</b></div>` : '');
    const m = modal(`<div class="row-between"><div class="who">${avatar(p.avatar, 52)}<span><h2>${esc(p.display_name)}</h2><small class="muted">${esc(p.email || '')}</small></span></div><button class="btn" data-x>Close</button></div>
      <div class="facts">
        ${fact('Studying', p.jlpt)}${fact('Started as', p.start_level)}${fact('Level', `Lv ${p.user_level} · ${p.rank_name || ''}`)}${fact('XP', fmt(p.xp))}${fact('Streak', `${p.streak} (best ${p.best_streak})`)}
        ${fact('Answers', `${fmt(p.answers)} · ${pct(p.correct, p.answers)}% right`)}${fact('Study time', hm(p.study_secs))}${fact('Days studied', p.days_studied)}${fact('Things met', fmt(p.items_seen))}
        ${fact('Long-term', `${fmt(p.words_mastered)} words · ${fmt(p.kanji_mastered)} kanji · ${fmt(p.grammar_mastered)} grammar`)}${fact('Stamps · trophies', `${p.stamps} · ${p.trophies}`)}${fact('Yen', fmt(p.coins))}
        ${fact('Joined', dateShort(p.created_at))}${fact('Last seen', ago(p.last_seen_at))}${fact('Logins', p.login_count)}${fact('Time zone', p.timezone)}${fact('Language', p.locale)}${fact('Device', p.platform)}${fact('Screen', p.screen)}${fact('Came from', p.referrer || 'direct')}${fact('App version', p.app_version)}${fact('Due now · weak', sm.due != null ? `${sm.due} · ${sm.weak}` : '')}
      </div>
      ${Object.keys(rd).length ? `<h3>Readiness</h3><div class="ready5">${JLPTS.filter((l) => rd[l]).map((l) => `<div><div class="row-between"><b class="pop">${l}</b><span class="num">${rd[l].total}%</span></div>${meter(rd[l].total / 100, LV_COLOR[l])}<small class="muted">${Object.entries(rd[l].parts || {}).map(([k2, v]) => `${k2} ${v}`).join(' · ')}</small></div>`).join('')}</div>` : ''}
      ${stages.length && stages.some(Boolean) ? `<h3>Memory</h3><div class="stack-bar">${stages.map((n, i) => (n ? `<i style="flex:${n};background:${STAGE_COLORS[i]}" title="${STAGE_NAMES[i]}: ${n}"></i>` : '')).join('')}</div><div class="legend">${stages.map((n, i) => `<span><i style="background:${STAGE_COLORS[i]}"></i>${STAGE_NAMES[i]} <b class="num">${fmt(n)}</b></span>`).join('')}</div>` : ''}
      ${Object.keys(skills).length ? `<h3>Accuracy by skill</h3>${Object.keys(SKILLS).filter((s) => skills[s]).map((s) => hbar(SKILLS[s], skills[s][0], skills[s][0] + skills[s][1], `${pct(skills[s][0], skills[s][0] + skills[s][1])}% of ${fmt(skills[s][0] + skills[s][1])}`)).join('')}` : ''}
      <h3>Last 30 days</h3><div id="auact"><div class="skeleton" style="height:120px;border-radius:12px"></div></div>
      <h3>Logins</h3><div id="aulog" class="muted small">Loading…</div>
      <div class="row-between"><span class="muted small">${p.hidden ? 'Hidden from the leaderboard by an admin.' : p.is_public ? 'Visible on the leaderboard.' : 'Chose to stay private.'}</span><button class="chip" data-hide>${p.hidden ? 'Put back on the leaderboard' : 'Hide from the leaderboard'}</button></div>`, async (e) => {
      if (!e.target.closest('[data-hide]')) return;
      try { await CLOUD.admin.setHidden(p.id, !p.hidden); p.hidden = !p.hidden; m.remove(); toast(p.hidden ? 'Hidden from the leaderboard' : 'Back on the leaderboard'); paintAdmin(); } catch (ex) { toast(CLOUD.nice(ex)); }
    });
    m.firstElementChild.classList.add('wide');
    try {
      const d = await CLOUD.admin.user(id), by = Object.fromEntries(d.days.map((x) => [x.day, x]));
      const rows = [];
      for (let i = 29; i >= 0; i--) { const dt = new Date(Date.now() - i * DAY), ds = dayStr(dt), r = by[ds] || {}; rows.push({ label: i % 5 === 0 ? String(dt.getDate()) : '', value: r.answers || 0, title: `${ds}: ${r.answers || 0} answers, ${r.correct || 0} right, ${r.xp || 0} XP, ${hm(r.secs)}` }); }
      const a = m.querySelector('#auact'), lg = m.querySelector('#aulog');
      if (a) a.innerHTML = bars(rows, { label: 'Answers per day for the last 30 days', cls: 'thin' });
      if (lg) lg.innerHTML = d.logins.length ? d.logins.slice(0, 20).map((x) => `<div>${dateShort(x.created_at)} ${new Date(x.created_at).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })} · <b>${esc(x.event)}</b> · ${esc(x.platform || '')} · ${esc(x.timezone || '')}</div>`).join('') : 'No logins recorded yet.';
    } catch (ex) { /* detail is optional */ }
  }

  // ---------------------------------------------------------------- wiring
  UI.X.navItems = () => [['home', 'Home', 'ホーム', ICON.home], ...(CLOUD.enabled && CLOUD.user ? [['board', 'League', 'リーグ', ICON.rank]] : []), ['stats', 'Stats', 'きろく', ICON.chart], ['collection', 'Collection', 'コレクション', ICON.book], ['me', 'Me', 'わたし', ICON.user]];
  UI.X.homeSide = homeSide;
  UI.X.homeFoot = () => `<footer class="homefoot"><span class="pill coin">Beta</span><span>Minna Line is free at every stop: no ads, no paywall.</span>
    <span class="seg">${CLOUD.user ? '<button class="chip" data-act="feedback">Send feedback</button>' : ''}<button class="chip" data-act="install">Install the app</button><button class="chip" data-act="share">Invite a friend</button></span></footer>`;
  UI.X.homeActions = { signin: () => showGate('signup'), install, share };
  Object.assign(UI.ROUTES, { board: renderBoard, stats: renderStats, me: renderMe, admin: renderAdmin });
  Object.assign(UI.G, { board: (tab) => go({ name: 'board', tab }), stats: () => go({ name: 'stats' }), me: () => go({ name: 'me' }), admin: () => go({ name: 'admin' }), feedback });
  CLOUD.summaryFn = summary;

  function registerSW() {
    if (!('serviceWorker' in navigator) || window.claude || !/^https?:$/.test(location.protocol)) return;
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
  async function boot() {
    registerSW();
    if (!CLOUD.enabled) { UI.start(); return; }
    CLOUD.on((what) => {
      if (what === 'status') paintSync();
      else if (what === 'recovery') newPassword();
      else if (what === 'signedout') showGate('login');
      else if (what === 'signedin') { if (UI.view.name === 'gate') { UI.start(); CLOUD.enter('login'); } }
      else if (UI.view.name === 'gate') return;
      else if (what === 'progress') { UI.applySkin(); UI.refresh(); }
      else if (what === 'ready' && ['home', 'me', 'board'].includes(UI.view.name)) UI.refresh();
    });
    let u = null;
    try { u = await CLOUD.init(); } catch (e) { /* start signed out */ }
    if (u) { UI.start(); CLOUD.enter('resume'); if (CLOUD.recovering) newPassword(); }
    else if (CLOUD.requireLogin) showGate();
    else UI.start();
  }
  return { boot, showGate, avatar, summary };
})();
