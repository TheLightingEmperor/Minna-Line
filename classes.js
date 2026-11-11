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
            ${d.joined.length ? d.joined.map((c) => `<div class="card"><div class="row-between"><div><h3>${esc(c.name)}</h3><div class="muted small">Teacher: ${esc(c.teacher || '')} · ${esc(c.jlpt)}</div></div><button class="btn primary sm" data-act="copenclass" data-arg="${esc(c.id)}">Open class</button></div>
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

  // ---------------------------------------------------------------- one class: the page teacher and students share
  let hwLevel = null, board = null, cv = null, cx = null, ctab = 'today';
  const fmt = (n) => Math.round(+n || 0).toLocaleString('en-US');
  const text = (t) => esc(t).replace(/(https?:\/\/[^\s<]+[^\s<.,;:!?)\]])/g, '<a href="$1" target="_blank" rel="noopener nofollow ugc">$1</a>');
  function renderClass(v) {
    if (!CLOUD.user) return go({ name: 'me' });
    const id = v.id, again = () => load(id), run = async (fn, msg) => { try { await fn(); if (msg) toast(msg); again(); } catch (e) { toast(e.message); } };
    render(`<div class="station"><button class="back" data-act="classes">${ICON.back} Classes</button><div id="cboard" class="stack"><div class="card skeleton" style="height:260px"></div></div></div>`, {
      ...(window.TEACH ? window.TEACH.actions(id, again, () => cx) : {}),
      ctab: (t) => { ctab = t; paint(); },
      ccopy: (t) => { (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => toast('Copied')).catch(() => toast(t)); },
      hwlv: (l) => { hwLevel = l; paint(); },
      hwadd: () => run(() => K.setHomework(id, document.getElementById('hwst').value, document.getElementById('hwnote').value.trim(), document.getElementById('hwdue').value || null), 'Homework set'),
      hwdel: (h) => run(() => K.removeHomework(+h)),
      skick: (key) => confirmBox('Remove this student?', 'They can join again with the code.', 'Remove', async () => { await K.removeMember(id, key); again(); }),
      cdelete: () => confirmBox('Delete this class?', 'The class, its homework, tests and noticeboard are removed. Students keep their own progress.', 'Delete class', async () => { await K.remove(id); cache = null; toast('Class deleted'); go({ name: 'classes' }); }),
      cleave: () => confirmBox('Leave this class?', 'Your teacher will no longer see your progress. Your own progress is not affected.', 'Leave', async () => { await K.leave(id); cache = null; toast('You left the class'); go({ name: 'classes' }); }),
      ndone: (n) => run(() => K.nudgeSeen(+n)),
      gadd: () => { const t = document.getElementById('gtitle').value.trim(), x = +document.getElementById('gxp').value; if (t.length < 2 || !(x >= 100)) return toast('Give the goal a name and a target of at least 100 XP.'); run(() => K.goalSet(id, t, Math.round(x), document.getElementById('gdue').value || null), 'Goal set'); },
      gdel: (g) => run(() => K.goalRemove(+g)),
      npost: () => { const b = document.getElementById('npbody').value.trim(); if (b) run(() => K.postAdd(id, b, null)); },
      nreply: (pid) => {
        const box = document.getElementById('nr' + pid);
        if (!box) return;
        if (box.firstChild) { box.innerHTML = ''; return; }
        box.innerHTML = `<form class="ccompose"><textarea class="plain" rows="2" maxlength="4000" placeholder="Write a reply…" required></textarea><div class="row-between"><span></span><button class="btn primary sm" type="submit">Reply</button></div></form>`;
        const f = box.firstChild; f.querySelector('textarea').focus();
        f.addEventListener('submit', (e) => { e.preventDefault(); const b = f.querySelector('textarea').value.trim(); if (b) run(() => K.postAdd(id, b, +pid)); });
      },
      ndel: (pid) => confirmBox('Delete this message?', 'Replies to it are removed too.', 'Delete', async () => { await K.postRemove(+pid); again(); }),
      npin: (arg) => { const [pid, on] = arg.split(':'); run(() => K.postPin(+pid, on === '1')); },
      tnew: () => testEditor(id, null, again),
      tedit: async (t) => { try { testEditor(id, await K.testTake(+t), again); } catch (e) { toast(e.message); } },
      tdel: (t) => confirmBox('Delete this class test?', "Everyone's results for it are removed too.", 'Delete', async () => { await K.testRemove(+t); again(); }),
      ttake: (t) => takeTest(+t, again),
      snote: (key) => studentNote(id, key, again),
      ccsv: () => {
        if (!board || !cv) return;
        const head = ['Student', 'JLPT', 'Level', 'XP', 'Streak', 'Answers (7 days)', 'Days active (7)', 'Accuracy %', 'Words mastered', 'Last seen', ...board.homework.map((h) => 'HW: ' + stName(h.station_id)), ...cv.tests.map((t) => 'Test: ' + t.title), 'Note'];
        const rows = board.students.map((s) => [s.name, s.jlpt, s.level, s.xp, s.streak, (s.week || {}).answers || 0, (s.week || {}).days || 0, pct(s.correct, s.answers), s.words, s.last_seen_at || '', ...board.homework.map((h) => (s.stamps && s.stamps[h.station_id] ? s.stamps[h.station_id].score + '%' : '')), ...cv.tests.map((t) => (t.results && t.results[s.key] ? `${t.results[s.key].score}/${t.results[s.key].total}` : '')), (cv.notes || {})[s.key] || '']);
        const cell = (x) => { const t = String(x ?? ''); return /[",\n]/.test(t) ? '"' + t.replace(/"/g, '""') + '"' : t; };
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([[head, ...rows].map((r) => r.map(cell).join(',')).join('\n')], { type: 'text/csv' })); a.download = `${cv.name.replace(/[^\w]+/g, '-')}.csv`; document.body.appendChild(a); a.click();
        setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
      },
    }, again);
  }
  async function load(id) {
    const el = document.getElementById('cboard');
    try {
      cv = await K.view(id);
      if (cv) cv._id = id;
      board = cv && cv.role === 'teacher' ? await K.roster(id) : null;
      cx = cv ? await K.extras(id).catch(() => null) : null;
      if (cv && cv.role === 'student') await mine().catch(() => {});
      paint();
    } catch (e) { if (el && el.isConnected) el.innerHTML = e.missing ? missing() : `<div class="card"><b>That didn't load.</b><span class="muted">${esc(e.message)}</span></div>`; }
  }
  function paint() {
    const el = document.getElementById('cboard');
    if (!el || !el.isConnected) return;
    if (!cv) { el.innerHTML = `<div class="card center-stack"><h3>You're not in this class</h3><button class="btn" data-act="classes">Back to classes</button></div>`; return; }
    const T = cv.role === 'teacher', c = cv, students = T && board ? board.students : [];
    const hw = T && board ? board.homework : ((cache && cache.joined.find((x) => x.id === c._id)) || { homework: [] }).homework;
    const lv = hwLevel || c.jlpt, link = `${location.origin}${location.pathname}?join=${c.code}`;
    const options = ML.STATIONS.filter((s) => s.level === lv).map((s) => `<option value="${esc(s.id)}">${esc(s.code)} · ${esc(s.name)}</option>`).join('');
    const doneCount = (h) => students.filter((s) => s.stamps && s.stamps[h.station_id]).length;
    const XS = window.TEACH ? window.TEACH.sections(c, T, students, cx) : { meet: '', assign: '' };
    const tab = ctab === 'students' && !T ? 'today' : ctab;
    const waiting = cx ? (T ? cx.assignments.reduce((a, x) => a + (+x.to_review || 0), 0) : cx.assignments.filter((x) => !x.mine).length + hw.filter((h) => !S.stamps[h.station_id]).length + c.tests.filter((t) => !t.mine).length) : 0;
    const tops = c.feed.filter((p) => !p.parent_id).sort((a, b) => (b.pinned - a.pinned) || (new Date(b.created_at) - new Date(a.created_at)));
    const postHTML = (p, reply) => `<div class="npost ${p.pinned ? 'pinned' : ''}"><div class="cmeta">${SOCIAL.avatar(p.author_avatar, reply ? 26 : 32)}<span class="cwho"><b>${esc(p.author_name)}</b>${p.is_teacher ? '<span class="pill stamp">Teacher</span>' : ''}${p.pinned ? '<span class="pill coin">Pinned</span>' : ''}<small>${ago(p.created_at)}</small></span></div><div class="ctext">${text(p.body)}</div>
      <span class="ctools">${reply ? '' : `<button class="linkbtn" data-act="nreply" data-arg="${p.id}">Reply</button>`}${T && !reply ? `<button class="linkbtn" data-act="npin" data-arg="${p.id}:${p.pinned ? 0 : 1}">${p.pinned ? 'Unpin' : 'Pin'}</button>` : ''}${p.is_mine || T ? `<button class="linkbtn" data-act="ndel" data-arg="${p.id}">Delete</button>` : ''}</span>
      ${reply ? '' : `<div class="creplies">${c.feed.filter((x) => x.parent_id === p.id).map((x) => postHTML(x, true)).join('')}</div><div class="creplybox" id="nr${p.id}"></div>`}</div>`;
    const goalsHTML = c.goals.length || T ? `<section class="card"><div class="eyebrow">Class goals · もくひょう</div>
        ${c.goals.map((g) => `<div class="goal"><div class="row-between"><b>${esc(g.title)}</b><span class="small muted">${fmt(Math.min(g.xp, g.target_xp))} / ${fmt(g.target_xp)} XP${g.due ? ' · ' + dueText(g.due) : ''}${T ? ` <button class="linkbtn" data-act="gdel" data-arg="${g.id}">Remove</button>` : ''}</span></div>${meter(g.xp / g.target_xp, g.xp >= g.target_xp ? 'var(--good)' : 'var(--coin)')}${g.xp >= g.target_xp ? '<span class="pill good">Reached! おめでとう</span>' : ''}</div>`).join('') || '<div class="muted small">No goal yet. Set a shared XP target and the whole class fills one bar together.</div>'}
        ${T ? `<div class="hwform g"><input class="input" id="gtitle" maxlength="120" placeholder="Goal, e.g. 5,000 XP together this week" aria-label="Goal"><input class="input" id="gxp" type="number" min="100" step="100" placeholder="Target XP" aria-label="Target XP"><input class="input" id="gdue" type="date" aria-label="Due date"><button class="btn primary" data-act="gadd">Set goal</button></div>` : ''}</section>` : '';
    const hwHTML = `<section class="card"><div class="eyebrow">Homework · しゅくだい</div>
        ${hw.length ? `<div class="hwlist">${hw.map((h) => (T ? `<div class="hwrow"><span class="hwmark">宿</span><span class="hwinfo"><b>${esc(stName(h.station_id))}</b><small>${esc(stSub(h.station_id))}</small>${h.note ? `<small class="hwnote">${esc(h.note)}</small>` : ''}</span><span class="hwside">${h.due ? `<small class="muted">${dueText(h.due)}</small>` : ''}<span class="pill ${doneCount(h) === students.length && students.length ? 'good' : ''}">${doneCount(h)}/${students.length} done</span><button class="linkbtn" data-act="hwdel" data-arg="${h.id}">Remove</button></span></div>` : hwRow(h, true))).join('')}</div>` : `<div class="muted small">${T ? "Nothing set yet. Pick a station below; it counts as done when a student wins that station's stamp." : 'No homework set yet.'}</div>`}
        ${T ? `<div class="hwform"><div class="seg">${JLPTS.map((l) => `<button class="chip" data-act="hwlv" data-arg="${l}" aria-pressed="${l === lv}">${l}</button>`).join('')}</div><select class="input" id="hwst" aria-label="Station">${options}</select><input class="input" id="hwnote" maxlength="200" placeholder="Note for the class (optional)" aria-label="Note"><input class="input" id="hwdue" type="date" aria-label="Due date"><button class="btn primary" data-act="hwadd">Set as homework</button></div>` : ''}</section>`;
    const testRow = (t) => {
      const res = Object.values(t.results || {}), avg = res.length ? Math.round((res.reduce((a, r) => a + r.score / r.total, 0) / res.length) * 100) : 0;
      const side = T ? `<span class="pill">${res.length}/${students.length} taken${res.length ? ' · avg ' + avg + '%' : ''}</span><button class="linkbtn" data-act="tedit" data-arg="${t.id}">Edit</button><button class="linkbtn" data-act="tdel" data-arg="${t.id}">Delete</button>`
        : t.mine ? `<span class="pill good">${t.mine.score}/${t.mine.total}</span><button class="btn sm" data-act="ttake" data-arg="${t.id}">Retake</button>` : `<button class="btn primary sm" data-act="ttake" data-arg="${t.id}">Take the test</button>`;
      return `<div class="hwrow ${!T && t.mine ? 'done' : ''}"><span class="hwmark">${!T && t.mine ? '済' : '試'}</span><span class="hwinfo"><b>${esc(t.title)}</b><small>${t.n} ${t.n === 1 ? 'question' : 'questions'}${t.due ? ' · ' + dueText(t.due) : ''}</small></span><span class="hwside">${side}</span></div>`;
    };
    const testsHTML = `<section class="card"><div class="row-between"><div class="eyebrow">Class tests · テスト</div>${T ? '<button class="btn sm primary" data-act="tnew">Write a class test</button>' : ''}</div>
        ${c.tests.length ? `<div class="hwlist">${c.tests.map(testRow).join('')}</div>` : `<div class="muted small">${T ? 'Write your own questions: multiple choice, or leave the wrong answers empty and students type the answer. Tests are marked automatically.' : 'No class tests yet.'}</div>`}</section>`;
    const feedHTML = `<section class="card"><div class="eyebrow">Noticeboard · けいじばん</div>
        <div class="ccompose"><textarea id="npbody" class="plain" rows="2" maxlength="4000" placeholder="${T ? 'Post an announcement to the class…' : 'Ask your teacher or classmates something…'}"></textarea><div class="row-between"><span class="muted small">Only this class can read it.</span><button class="btn primary sm" data-act="npost">Post</button></div></div>
        ${tops.map((p) => postHTML(p)).join('') || '<div class="muted small">Nothing posted yet.</div>'}</section>`;
    const boardHTML = `<section class="card"><div class="eyebrow">Class leaderboard · this week</div>${c.board.length ? `<ol class="lb mini">${c.board.map((r, i) => `<li class="lbrow ${r.is_me ? 'me' : ''}"><span class="pos num">${i + 1}</span>${SOCIAL.avatar(r.avatar, 30)}<span class="who"><b>${esc(r.name)}${r.is_me ? ' <span class="pill">you</span>' : ''}</b><small>Lv ${r.level || 1} · ${r.streak || 0} day streak</small></span><span class="sc num">${fmt(r.week_xp)}<small>XP</small></span></li>`).join('')}</ol>` : '<div class="muted small">Students appear here as they join.</div>'}<div class="muted small">XP earned since Monday. Resets every week.</div></section>`;
    const tableHTML = !T ? '' : `<section class="stack"><div class="row-between"><h2 class="section-h" style="margin:0">Students</h2><button class="chip" data-act="ccsv">Download CSV</button></div>
        ${students.length ? `<div class="tblwrap"><table class="vocab admin"><thead><tr><th class="l">Student</th><th>Lv</th><th>Streak</th><th>7-day answers</th><th>Days active</th><th>Accuracy</th><th>${esc(c.jlpt)} ready</th><th class="l">Last seen</th>${hw.map((h) => `<th title="Homework: ${esc(stName(h.station_id))}">${esc((st(h.station_id) || {}).code || h.station_id)}</th>`).join('')}${c.tests.map((t, i) => `<th title="${esc(t.title)}">T${i + 1}</th>`).join('')}<th></th></tr></thead>
          <tbody>${students.map((s) => `<tr><td class="l"><div class="who">${SOCIAL.avatar(s.avatar, 30)}<span><b>${esc(s.name)}</b><small>${(c.notes || {})[s.key] ? esc(c.notes[s.key].slice(0, 40)) : esc(s.jlpt || '')}</small></span></div></td><td class="num">${s.level}</td><td class="num">${s.streak}</td><td class="num">${(s.week || {}).answers || 0}</td><td class="num">${(s.week || {}).days || 0}/7</td><td class="num">${s.answers ? pct(s.correct, s.answers) + '%' : ''}</td><td class="num">${s.readiness && s.readiness[c.jlpt] ? s.readiness[c.jlpt].total + '%' : ''}</td><td class="l">${ago(s.last_seen_at)}</td>${hw.map((h) => `<td>${s.stamps && s.stamps[h.station_id] ? `<span class="pill good">${s.stamps[h.station_id].score}%</span>` : '<span class="muted">·</span>'}</td>`).join('')}${c.tests.map((t) => `<td>${t.results && t.results[s.key] ? `<span class="pill good">${t.results[s.key].score}/${t.results[s.key].total}</span>` : '<span class="muted">·</span>'}</td>`).join('')}<td><button class="linkbtn" data-act="snote" data-arg="${esc(s.key)}">Note / nudge</button> <button class="linkbtn" data-act="skick" data-arg="${esc(s.key)}">Remove</button></td></tr>`).join('')}</tbody></table></div>` : `<div class="card center-stack">${mascotSVG('happy', { cls: 'bob' }).replace('<svg', '<svg style="width:90px;height:90px"')}<h3>No students yet</h3><p class="muted" style="margin:0">Share the code <b>${esc(c.code)}</b> and they will appear here as they join.</p></div>`}</section>`;
    el.innerHTML = `
      <div class="row-between"><div><h1>${esc(c.name)}</h1><p class="muted" style="margin:4px 0 0">${T ? `${esc(c.jlpt)} · ${students.length} ${students.length === 1 ? 'student' : 'students'}` : `Teacher: ${esc(c.teacher || '')} · ${esc(c.jlpt)}`}</p></div><button class="linkbtn" data-act="${T ? 'cdelete' : 'cleave'}">${T ? 'Delete class' : 'Leave class'}</button></div>
      ${(c.nudges || []).map((n) => `<div class="tip nudge"><b>From your teacher:</b> ${esc(n.message)} <button class="chip" data-act="ndone" data-arg="${n.id}">Got it</button></div>`).join('')}
      ${T ? `<section class="card codecard"><div><div class="eyebrow">Class code</div><div class="ccode big">${esc(c.code)}</div></div><div class="stack" style="gap:8px"><div class="muted small">Students open Minna Line → Me → Classes → Join with a code. Or send them the link and it fills the code in for them.</div><div class="seg"><button class="chip" data-act="ccopy" data-arg="${esc(c.code)}">Copy code</button><button class="chip" data-act="ccopy" data-arg="${esc(link)}">Copy invite link</button></div></div></section>` : ''}
      <div class="tabs" role="tablist">${[['today', 'Class'], ['work', `Work${waiting ? ` · ${waiting}` : ''}`], ...(T ? [['students', `Students · ${students.length}`]] : [])].map(([k, l]) => `<button role="tab" aria-selected="${tab === k}" data-act="ctab" data-arg="${k}">${l}</button>`).join('')}</div>
      ${tab === 'work' ? `<div class="stack">${XS.assign}${hwHTML}${testsHTML}</div>` : tab === 'students' ? tableHTML : `<div class="cgrid"><div class="stack">${XS.meet}${feedHTML}</div><aside class="stack">${goalsHTML}${boardHTML}</aside></div>`}`;
  }
  // The teacher's private note on a student, and a short nudge the student sees at the top of the class page.
  function studentNote(id, key, done) {
    const s = board && board.students.find((x) => x.key === key);
    if (!s) return;
    const m = modal(`<div class="stack-form"><div class="row-between"><h2>${esc(s.name)}</h2><button class="btn" data-x>Close</button></div>
      <div class="field"><label for="sn">Private note <span class="muted">(only you see this)</span></label><textarea id="sn" class="plain" rows="4" maxlength="1000" placeholder="Strong on vocabulary, needs more particle practice…">${esc((cv.notes || {})[key] || '')}</textarea><div><button class="btn sm" data-save>Save note</button></div></div>
      <div class="field"><label for="sg">Send a nudge <span class="muted">(${esc(s.name)} sees it at the top of the class page)</span></label><input class="input" id="sg" maxlength="300" placeholder="Two days left on the homework. You can do it!"><div><button class="btn primary sm" data-nudge>Send nudge</button></div></div></div>`, async (e) => {
      try {
        if (e.target.closest('[data-save]')) { await K.noteSet(id, key, m.querySelector('#sn').value.trim()); toast('Note saved'); done(); }
        if (e.target.closest('[data-nudge]')) { const v = m.querySelector('#sg').value.trim(); if (!v) return; await K.nudge(id, key, v); m.querySelector('#sg').value = ''; toast('Nudge sent'); }
      } catch (ex) { toast(ex.message); }
    });
  }
  // Writing a class test: each question has a prompt, the correct answer, and up to three wrong answers.
  function testEditor(id, existing, done) {
    const blank = () => ({ q: '', answer: '', wrong: ['', '', ''] });
    let qs = existing ? existing.questions.map((q) => ({ q: q.q, answer: q.answer, wrong: [...(q.wrong || []), '', '', ''].slice(0, 3) })) : [blank()];
    const m = modal(`<form class="stack-form"><div class="row-between"><h2>${existing ? 'Edit class test' : 'Write a class test'}</h2><button class="btn" type="button" data-x>Cancel</button></div>
      <div class="tqhead"><div class="field"><label for="tt">Title</label><input class="input" id="tt" maxlength="120" required placeholder="Week 3: particles" value="${esc(existing ? existing.title : '')}"></div><div class="field"><label for="td">Due (optional)</label><input class="input" id="td" type="date" value="${esc((existing && existing.due) || '')}"></div></div>
      <p class="muted small" style="margin:0">Fill in wrong answers for multiple choice. Leave them empty and students type the answer themselves. Marking ignores spaces, capitals and final punctuation.</p>
      <div id="tqs" class="stack"></div>
      <div class="formerr" role="alert" hidden></div>
      <div class="row-between"><button class="btn" type="button" data-addq>Add a question</button><button class="btn primary" type="submit">Save test</button></div></form>`, (e) => {
      if (e.target.closest('[data-addq]')) { read(); if (qs.length < 40) qs.push(blank()); draw(); const all = m.querySelectorAll('[data-f="q"]'); all[all.length - 1].focus(); }
      const rm = e.target.closest('[data-rmq]');
      if (rm) { read(); qs.splice(+rm.dataset.rmq, 1); if (!qs.length) qs.push(blank()); draw(); }
    });
    m.firstElementChild.classList.add('wide');
    const read = () => { m.querySelectorAll('.tq').forEach((row, i) => { qs[i] = { q: row.querySelector('[data-f="q"]').value, answer: row.querySelector('[data-f="a"]').value, wrong: [...row.querySelectorAll('[data-f="w"]')].map((x) => x.value) }; }); };
    const draw = () => { m.querySelector('#tqs').innerHTML = qs.map((q, i) => `<div class="tq"><div class="row-between"><b>Question ${i + 1}</b><button type="button" class="linkbtn" data-rmq="${i}">Remove</button></div><input class="input" data-f="q" maxlength="500" placeholder="The question" value="${esc(q.q)}"><div class="tqa"><input class="input ok" data-f="a" maxlength="200" placeholder="Correct answer" value="${esc(q.answer)}">${q.wrong.map((w) => `<input class="input" data-f="w" maxlength="200" placeholder="Wrong answer (optional)" value="${esc(w)}">`).join('')}</div></div>`).join(''); };
    draw();
    m.querySelector('form').addEventListener('submit', async (e) => {
      e.preventDefault(); read();
      const err = m.querySelector('.formerr'), title = m.querySelector('#tt').value.trim();
      const clean = qs.map((q) => ({ q: q.q.trim(), answer: q.answer.trim(), wrong: q.wrong.map((w) => w.trim()).filter(Boolean) })).filter((q) => q.q || q.answer);
      if (title.length < 2) { err.textContent = 'Give the test a title.'; err.hidden = false; return; }
      if (!clean.length || clean.some((q) => !q.q || !q.answer)) { err.textContent = 'Every question needs a prompt and a correct answer.'; err.hidden = false; return; }
      try { await K.testSave(id, existing ? existing.id : null, title, clean, m.querySelector('#td').value || null); m.remove(); toast('Class test saved'); done(); } catch (ex) { err.textContent = ex.message; err.hidden = false; }
    });
  }
  // Sitting a class test: one question at a time, marked by the server at the end.
  async function takeTest(tid, done) {
    let t;
    try { t = await K.testTake(tid); } catch (e) { return toast(e.message); }
    if (!t) return toast('That test is no longer available.');
    const answers = []; let i = 0;
    const m = modal('<div id="tk" class="stack-form"></div>', (e) => {
      const o = e.target.closest('[data-o]');
      if (o) { answers[i] = t.questions[i].options[+o.dataset.o]; next(); }
      else if (e.target.closest('[data-next]')) { answers[i] = (m.querySelector('#tka') || {}).value || ''; next(); }
    });
    m.firstElementChild.classList.add('wide');
    const box = m.querySelector('#tk');
    const show = () => {
      const q = t.questions[i];
      box.innerHTML = `<div class="row-between"><div class="eyebrow">${esc(t.title)}</div><span class="small muted num">${i + 1} / ${t.questions.length}</span></div><div class="progress"><i style="width:${Math.round((i / t.questions.length) * 100)}%"></i></div>
        <div class="plprompt" style="font-size:clamp(20px,4vw,28px)">${esc(q.q)}</div>
        ${q.options ? `<div class="opts">${q.options.map((o, k) => `<button class="opt" data-o="${k}"><span class="key">${k + 1}</span><span>${esc(o)}</span></button>`).join('')}</div>` : `<div class="typebox"><input id="tka" autocomplete="off" autocapitalize="off" placeholder="Type your answer"></div><div class="row-between"><span></span><button class="btn primary" data-next>${i === t.questions.length - 1 ? 'Finish' : 'Next'}</button></div>`}`;
      const inp = box.querySelector('#tka');
      if (inp) { inp.focus(); inp.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); answers[i] = inp.value; next(); } }); }
    };
    const next = async () => {
      if (++i < t.questions.length) return show();
      box.innerHTML = '<div class="skeleton" style="height:120px;border-radius:8px"></div>';
      try {
        const r = await K.testSubmit(tid, answers);
        ML.sfx.play(r.score === r.total ? 'stamp' : 'ok'); if (r.score === r.total) UI.petals(24);
        box.innerHTML = `<div class="center-stack">${mascotSVG(r.score === r.total ? 'cheer' : r.score / r.total >= 0.6 ? 'happy' : 'calm', { cls: 'hop' }).replace('<svg', '<svg style="width:100px;height:100px"')}<div class="eyebrow">${esc(t.title)}</div><div class="score">${r.score}/${r.total}</div></div>
          <div class="stack">${r.review.map((x, k) => `<div class="hwrow ${x.ok ? 'done' : ''}"><span class="hwmark" ${x.ok ? '' : 'style="border-color:var(--bad);color:var(--bad)"'}>${x.ok ? '○' : '×'}</span><span class="hwinfo"><b>${k + 1}. ${esc(x.q)}</b><small class="hwnote">${x.ok ? esc(x.correct) : `Your answer: ${esc(x.yours || '(blank)')} · Correct: <b>${esc(x.correct)}</b>`}</small></span><span></span></div>`).join('')}</div>
          <button class="btn primary" data-x>Done</button>`;
        done();
      } catch (ex) { box.innerHTML = `<p class="muted">${esc(ex.message)}</p><button class="btn" data-x>Close</button>`; }
    };
    show();
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
  return { joinDialog, createDialog, openTab: (id, tab) => { ctab = tab || 'today'; go({ name: 'class', id }); } };
})();
