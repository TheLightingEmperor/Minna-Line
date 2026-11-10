// Minna Line classes (クラス): a teacher starts a class and shares its code; students join, see their homework
// on the home page, and the teacher sees who has done what. Builds on MLUI, CLOUD and SOCIAL.
window.CLASSES = (() => {
  'use strict';
  const UI = window.MLUI, CLOUD = window.CLOUD, ML = window.ML, SOCIAL = window.SOCIAL;
  if (!UI || !CLOUD || !SOCIAL) return {};
  const { esc, ICON, render, go, modal, toast, mascotSVG, meter, S } = UI;
  const K = CLOUD.classes;
  const JLPTS = ['N5', 'N4', 'N3', 'N2', 'N1'];
  const st = (id) => ML.SBY.get(id);
  const stName = (id) => { const s = st(id); return s ? s.name : id; };
  const stSub = (id) => { const s = st(id); return s ? `${s.level || ''}${ML.lessonName(s.L) ? ' · ' + ML.lessonName(s.L) : ''} · ${s.jp}` : ''; };
  const dueText = (d) => {
    if (!d) return '';
    const days = Math.round((new Date(d + 'T00:00:00') - new Date(new Date().toDateString())) / ML.DAY);
    return days < 0 ? `was due ${new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}` : days === 0 ? 'due today' : days === 1 ? 'due tomorrow' : `due ${new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}`;
  };
  const ago = (iso) => { if (!iso) return 'never'; const s = (Date.now() - new Date(iso).getTime()) / 1000; return s < 3600 ? 'just now' : s < 86400 ? Math.round(s / 3600) + ' h ago' : Math.round(s / 86400) + ' d ago'; };
  const pct = (a, b) => (b > 0 ? Math.round((a / b) * 100) : 0);
  const missing = () => `<div class="card center-stack">${mascotSVG('calm', { cls: 'bob' }).replace('<svg', '<svg style="width:96px;height:96px"')}<h3>Classes open soon</h3><p class="muted" style="margin:0">${CLOUD.isAdmin ? '<b>Admin:</b> run <code>supabase/classes.sql</code> in the Supabase SQL Editor to switch classes on.' : 'Your teacher will be able to set homework here shortly.'}</p></div>`;
  let cache = null, cacheAt = 0;
  const mine = async (fresh) => { if (!fresh && cache && Date.now() - cacheAt < 60000) return cache; cache = await K.mine(); cacheAt = Date.now(); return cache; };
  const hwRow = (h, withGo) => {
    const done = !!S.stamps[h.station_id];
    return `<div class="hwrow ${done ? 'done' : ''}"><span class="hwmark">${done ? '済' : '宿'}</span><span class="hwinfo"><b>${esc(stName(h.station_id))}</b><small>${esc(stSub(h.station_id))}</small>${h.note ? `<small class="hwnote">${esc(h.note)}</small>` : ''}</span>
      <span class="hwside">${h.due && !done ? `<small class="muted">${dueText(h.due)}</small>` : ''}${done ? '<span class="pill good">Stamp collected</span>' : withGo ? `<button class="btn primary sm" data-act="station" data-arg="${esc(h.station_id)}">Go</button>` : ''}</span></div>`;
  };

  // ---------------------------------------------------------------- the Classes page (students and teachers)
  function renderClasses() {
    if (!CLOUD.user) return go({ name: 'me' });
    render(`<div class="station"><button class="back" data-act="me">${ICON.back} Me</button>
      <div><h1>クラス · Classes</h1><p class="muted" style="margin:4px 0 0">Join your teacher's class to get homework, or start a class of your own.</p></div>
      <div id="clbody" class="stack"><div class="card skeleton" style="height:160px"></div></div></div>`, {
      cjoin: () => joinDialog(), cmake: () => createDialog(), copenclass: (id) => go({ name: 'class', id }),
      cleave: (id) => confirmBox('Leave this class?', 'Your teacher will no longer see your progress. Your own progress is not affected.', 'Leave', async () => { await K.leave(id); toast('You left the class'); cache = null; renderClasses(); }),
    }, async () => {
      const el = document.getElementById('clbody');
      try {
        const d = await mine(true);
        if (!el || !el.isConnected) return;
        el.innerHTML = `
          <section class="stack"><div class="row-between"><h2 class="section-h" style="margin:0">Classes you're in</h2><button class="btn primary" data-act="cjoin">Join with a code</button></div>
            ${d.joined.length ? d.joined.map((c) => `<div class="card"><div class="row-between"><div><h3>${esc(c.name)}</h3><div class="muted small">Teacher: ${esc(c.teacher || '')} · ${esc(c.jlpt)}</div></div><button class="linkbtn" data-act="cleave" data-arg="${esc(c.id)}">Leave</button></div>
              ${c.homework.length ? `<div class="eyebrow">Homework · しゅくだい</div><div class="hwlist">${c.homework.map((h) => hwRow(h, true)).join('')}</div>` : '<div class="muted small">No homework set yet.</div>'}</div>`).join('') : '<div class="card"><div class="muted">You are not in a class yet. Ask your teacher for the six-character code.</div></div>'}</section>
          <section class="stack"><div class="row-between"><h2 class="section-h" style="margin:0">Classes you teach</h2><button class="btn" data-act="cmake">Start a class</button></div>
            ${d.teaching.length ? `<div class="mgrid">${d.teaching.map((c) => `<button class="mcard" data-act="copenclass" data-arg="${esc(c.id)}"><span class="ccode">${esc(c.code)}</span><span class="minfo"><b>${esc(c.name)}</b><small>${esc(c.jlpt)} · ${c.students} ${c.students === 1 ? 'student' : 'students'} · ${c.homework} homework</small><small class="muted">Open the class board</small></span></button>`).join('')}</div>` : '<div class="card"><div class="muted">Teaching a group? Start a class, share the code, set stations as homework and watch everyone\'s progress in one table.</div></div>'}</section>`;
      } catch (e) { if (el && el.isConnected) el.innerHTML = e.missing ? missing() : `<div class="card"><b>That didn't load.</b><span class="muted">${esc(e.message)}</span></div>`; }
    });
  }
  function confirmBox(title, text, okLabel, fn) {
    const m = modal(`<h2>${esc(title)}</h2><p class="muted" style="margin:0">${esc(text)}</p><div class="row-between"><button class="btn" data-x>Cancel</button><button class="btn primary" data-ok>${esc(okLabel)}</button></div>`, async (e) => {
      if (!e.target.closest('[data-ok]')) return;
      m.remove();
      try { await fn(); } catch (ex) { toast(ex.message); }
    });
  }
  function joinDialog(prefill) {
    const m = modal(`<form class="stack-form"><h2>Join a class</h2><p class="muted" style="margin:0">Type the code your teacher gave you. Your teacher will see your name, level, activity and stamps. Never your email.</p>
      <div class="field"><label for="jc">Class code</label><input class="input ccodein" id="jc" maxlength="8" autocomplete="off" autocapitalize="characters" placeholder="ABC234" value="${esc(prefill || '')}" required></div>
      <div class="formerr" role="alert" hidden></div><div class="row-between"><button class="btn" type="button" data-x>Cancel</button><button class="btn primary" type="submit">Join</button></div></form>`);
    m.querySelector('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const err = m.querySelector('.formerr');
      try { const r = await K.join(m.querySelector('#jc').value); m.remove(); cache = null; ML.sfx.play('ok'); toast(`You joined ${r.name}`); go({ name: 'classes' }); }
      catch (ex) { err.textContent = ex.missing ? 'Classes are not switched on yet.' : ex.message; err.hidden = false; }
    });
  }
  function createDialog() {
    let lv = UI.curLevel();
    const m = modal(`<form class="stack-form"><h2>Start a class</h2>
      <div class="field"><label for="cn">Class name</label><input class="input" id="cn" maxlength="60" placeholder="Saturday beginners" required></div>
      <div class="field"><label>Level</label><div class="seg">${JLPTS.map((l) => `<button type="button" class="chip" data-lv="${l}" aria-pressed="${l === lv}">${l}</button>`).join('')}</div></div>
      <div class="formerr" role="alert" hidden></div><div class="row-between"><button class="btn" type="button" data-x>Cancel</button><button class="btn primary" type="submit">Create class</button></div></form>`, (e) => {
      const b = e.target.closest('[data-lv]');
      if (b) { lv = b.dataset.lv; m.querySelectorAll('[data-lv]').forEach((x) => x.setAttribute('aria-pressed', String(x === b))); }
    });
    m.querySelector('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const err = m.querySelector('.formerr'), name = m.querySelector('#cn').value.trim();
      if (name.length < 2) { err.textContent = 'Give the class a name.'; err.hidden = false; return; }
      try { const r = await K.create(name, lv); m.remove(); cache = null; go({ name: 'class', id: r.id }); }
      catch (ex) { err.textContent = ex.missing ? 'Classes are not switched on yet.' : ex.message; err.hidden = false; }
    });
  }

  // ---------------------------------------------------------------- the teacher's class board
  let hwLevel = null;
  function renderClass(v) {
    if (!CLOUD.user) return go({ name: 'me' });
    render(`<div class="station"><button class="back" data-act="classes">${ICON.back} Classes</button><div id="cboard" class="stack"><div class="card skeleton" style="height:260px"></div></div></div>`, {
      ccopy: (text) => { (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(() => toast('Copied')).catch(() => toast(text)); },
      hwlv: (l) => { hwLevel = l; paint(v.id); },
      hwadd: async () => {
        const sel = document.getElementById('hwst'), note = document.getElementById('hwnote').value.trim(), due = document.getElementById('hwdue').value || null;
        try { await K.setHomework(v.id, sel.value, note, due); toast('Homework set'); load(v.id); } catch (e) { toast(e.message); }
      },
      hwdel: async (id) => { try { await K.removeHomework(+id); load(v.id); } catch (e) { toast(e.message); } },
      skick: (key) => confirmBox('Remove this student?', 'They can join again with the code.', 'Remove', async () => { await K.removeMember(v.id, key); load(v.id); }),
      cdelete: () => confirmBox('Delete this class?', 'The class, its homework and its student list are removed. Students keep their own progress.', 'Delete class', async () => { await K.remove(v.id); cache = null; toast('Class deleted'); go({ name: 'classes' }); }),
      ccsv: () => {
        if (!board) return;
        const head = ['Student', 'JLPT', 'Level', 'XP', 'Streak', 'Answers (7 days)', 'Days active (7)', 'Accuracy %', 'Words mastered', 'Last seen', ...board.homework.map((h) => stName(h.station_id))];
        const rows = board.students.map((s) => [s.name, s.jlpt, s.level, s.xp, s.streak, (s.week || {}).answers || 0, (s.week || {}).days || 0, pct(s.correct, s.answers), s.words, s.last_seen_at || '', ...board.homework.map((h) => (s.stamps && s.stamps[h.station_id] ? s.stamps[h.station_id].score + '%' : ''))]);
        const cell = (x) => { const t = String(x ?? ''); return /[",\n]/.test(t) ? '"' + t.replace(/"/g, '""') + '"' : t; };
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([[head, ...rows].map((r) => r.map(cell).join(',')).join('\n')], { type: 'text/csv' })); a.download = `${board.name.replace(/[^\w]+/g, '-')}.csv`; document.body.appendChild(a); a.click();
        setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
      },
    }, () => load(v.id));
  }
  let board = null;
  async function load(id) {
    const el = document.getElementById('cboard');
    try { board = await K.roster(id); paint(id); }
    catch (e) { if (el && el.isConnected) el.innerHTML = e.missing ? missing() : `<div class="card"><b>That didn't load.</b><span class="muted">${esc(e.message)}</span></div>`; }
  }
  function paint(id) {
    const el = document.getElementById('cboard');
    if (!el || !el.isConnected) return;
    if (!board) { el.innerHTML = `<div class="card center-stack"><h3>This class isn't yours</h3><button class="btn" data-act="classes">Back to classes</button></div>`; return; }
    const c = board, lv = hwLevel || c.jlpt, link = `${location.origin}${location.pathname}?join=${c.code}`;
    const options = ML.STATIONS.filter((s) => s.level === lv).map((s) => `<option value="${esc(s.id)}">${esc(s.code)} · ${esc(s.name)}</option>`).join('');
    const doneCount = (h) => c.students.filter((s) => s.stamps && s.stamps[h.station_id]).length;
    el.innerHTML = `
      <div class="row-between"><div><h1>${esc(c.name)}</h1><p class="muted" style="margin:4px 0 0">${esc(c.jlpt)} · ${c.students.length} ${c.students.length === 1 ? 'student' : 'students'}</p></div><button class="linkbtn" data-act="cdelete">Delete class</button></div>
      <section class="card codecard"><div><div class="eyebrow">Class code</div><div class="ccode big">${esc(c.code)}</div></div>
        <div class="stack" style="gap:8px"><div class="muted small">Students open Minna Line → Me → Classes → Join with a code. Or send them the link and it fills the code in for them.</div>
        <div class="seg"><button class="chip" data-act="ccopy" data-arg="${esc(c.code)}">Copy code</button><button class="chip" data-act="ccopy" data-arg="${esc(link)}">Copy invite link</button></div></div></section>
      <section class="card"><div class="eyebrow">Homework · しゅくだい</div>
        ${c.homework.length ? `<div class="hwlist">${c.homework.map((h) => `<div class="hwrow"><span class="hwmark">宿</span><span class="hwinfo"><b>${esc(stName(h.station_id))}</b><small>${esc(stSub(h.station_id))}</small>${h.note ? `<small class="hwnote">${esc(h.note)}</small>` : ''}</span><span class="hwside">${h.due ? `<small class="muted">${dueText(h.due)}</small>` : ''}<span class="pill ${doneCount(h) === c.students.length && c.students.length ? 'good' : ''}">${doneCount(h)}/${c.students.length} done</span><button class="linkbtn" data-act="hwdel" data-arg="${h.id}">Remove</button></span></div>`).join('')}</div>` : '<div class="muted small">Nothing set yet. Pick a station below; it counts as done when a student wins that station\'s stamp.</div>'}
        <div class="hwform"><div class="seg">${JLPTS.map((l) => `<button class="chip" data-act="hwlv" data-arg="${l}" aria-pressed="${l === lv}">${l}</button>`).join('')}</div>
          <select class="input" id="hwst" aria-label="Station">${options}</select><input class="input" id="hwnote" maxlength="200" placeholder="Note for the class (optional)" aria-label="Note"><input class="input" id="hwdue" type="date" aria-label="Due date"><button class="btn primary" data-act="hwadd">Set as homework</button></div></section>
      <section class="stack"><div class="row-between"><h2 class="section-h" style="margin:0">Students</h2><button class="chip" data-act="ccsv">Download CSV</button></div>
        ${c.students.length ? `<div class="tblwrap"><table class="vocab admin"><thead><tr><th class="l">Student</th><th>Lv</th><th>Streak</th><th>7-day answers</th><th>Days active</th><th>Accuracy</th><th>${esc(c.jlpt)} ready</th><th class="l">Last seen</th>${c.homework.map((h) => `<th title="${esc(stName(h.station_id))}">${esc((st(h.station_id) || {}).code || h.station_id)}</th>`).join('')}<th></th></tr></thead>
          <tbody>${c.students.map((s) => `<tr><td class="l"><div class="who">${SOCIAL.avatar(s.avatar, 30)}<span><b>${esc(s.name)}</b><small>${esc(s.jlpt || '')}${s.rank ? ' · ' + esc(s.rank) : ''}</small></span></div></td><td class="num">${s.level}</td><td class="num">${s.streak}</td><td class="num">${(s.week || {}).answers || 0}</td><td class="num">${(s.week || {}).days || 0}/7</td><td class="num">${s.answers ? pct(s.correct, s.answers) + '%' : ''}</td><td class="num">${s.readiness && s.readiness[c.jlpt] ? s.readiness[c.jlpt].total + '%' : ''}</td><td class="l">${ago(s.last_seen_at)}</td>${c.homework.map((h) => `<td>${s.stamps && s.stamps[h.station_id] ? `<span class="pill good" title="Stamp at ${s.stamps[h.station_id].score}%">${s.stamps[h.station_id].score}%</span>` : '<span class="muted">·</span>'}</td>`).join('')}<td><button class="linkbtn" data-act="skick" data-arg="${esc(s.key)}">Remove</button></td></tr>`).join('')}</tbody></table></div>` : `<div class="card center-stack">${mascotSVG('happy', { cls: 'bob' }).replace('<svg', '<svg style="width:90px;height:90px"')}<h3>No students yet</h3><p class="muted" style="margin:0">Share the code <b>${esc(c.code)}</b> and they will appear here as they join.</p></div>`}</section>`;
  }

  // ---------------------------------------------------------------- homework on the home page, join links
  const baseSide = UI.X.homeSide;
  UI.X.homeSide = () => {
    let out = '';
    if (CLOUD.user) {
      out = '<div id="hwcard"></div>';
      setTimeout(() => mine().then((d) => {
        const el = document.getElementById('hwcard'), open = d.joined.flatMap((c) => c.homework.filter((h) => !S.stamps[h.station_id]).map((h) => ({ ...h, cls: c.name })));
        if (!el || !open.length) return;
        el.innerHTML = `<div class="card cta"><div class="row-between"><div class="eyebrow">Homework · しゅくだい</div><span class="pill coin">${open.length} to do</span></div><div class="hwlist">${open.slice(0, 3).map((h) => hwRow(h, true)).join('')}</div><button class="btn" data-act="classes">All classes</button></div>`;
      }).catch(() => {}), 0);
    }
    return out + (baseSide ? baseSide() : '');
  };
  try { const code = new URLSearchParams(location.search).get('join'); if (code) sessionStorage.setItem('minna-join', code.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8)); } catch (e) { /* no storage */ }
  let asked = false;
  function maybeJoin() {
    if (asked || !CLOUD.user || UI.view.name === 'gate') return;
    let code = null;
    try { code = sessionStorage.getItem('minna-join'); sessionStorage.removeItem('minna-join'); } catch (e) { /* ignore */ }
    if (code) { asked = true; joinDialog(code); }
  }
  CLOUD.on((what) => { if (what === 'ready') setTimeout(maybeJoin, 600); });
  Object.assign(UI.ROUTES, { classes: renderClasses, class: renderClass });
  Object.assign(UI.G, { classes: () => go({ name: 'classes' }) });
  return { joinDialog };
})();
