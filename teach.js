// Minna Line for teachers: the teacher's desk, lessons on Google Meet and written assignments.
// A person signs in as a learner or as a teacher. Both keep the full learning hub; teacher mode puts the desk,
// classes and review work first. Builds on MLUI, CLOUD, SOCIAL, CLASSES and COMMUNITY.
window.TEACH = (() => {
  'use strict';
  const UI = window.MLUI, CLOUD = window.CLOUD, ML = window.ML, SOCIAL = window.SOCIAL;
  if (!UI || !CLOUD || !SOCIAL) return {};
  const { esc, ICON, render, go, modal, toast, mascotSVG, S } = UI;
  const K = CLOUD.classes;
  const DESK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9h18M5 9v10M19 9v10M9 13h6M9 9V5h6v4"/></svg>';
  const CLASS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="9" r="3"/><circle cx="17" cy="10" r="2.400"/><path d="M2.500 19c.6-3.400 2.800-5 5.500-5s4.900 1.600 5.500 5M14.500 15c2.800-.6 5.400.8 6.500 4"/></svg>';
  const CAM = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6.500" width="12" height="11" rx="2"/><path d="M15 10.500l6-3.500v10l-6-3.500z"/></svg>';
  const isTeacher = () => S.settings.mode === 'teacher';
  const fmt = (n) => Math.round(+n || 0).toLocaleString('en-US');
  const text = (t) => esc(t).replace(/(https?:\/\/[^\s<]+[^\s<.,;:!?)\]])/g, '<a href="$1" target="_blank" rel="noopener nofollow ugc">$1</a>');
  const img = (path) => esc(CLOUD.communityImage(path));
  const hm = (d) => d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const when = (m) => { const a = new Date(m.starts_at), b = new Date(a.getTime() + m.minutes * 6e4); return `${a.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })} · ${hm(a)}–${hm(b)}`; };
  const isLive = (m) => { const a = new Date(m.starts_at).getTime(), now = Date.now(); return now >= a - 10 * 6e4 && now <= a + m.minutes * 6e4; };
  const isOver = (m) => Date.now() > new Date(m.starts_at).getTime() + m.minutes * 6e4;
  const dueText = (d) => {
    if (!d) return '';
    const days = Math.round((new Date(d + 'T00:00:00') - new Date(new Date().toDateString())) / ML.DAY);
    return days < 0 ? 'past due' : days === 0 ? 'due today' : days === 1 ? 'due tomorrow' : `due ${new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}`;
  };
  // A link that drops the lesson into the student's own Google Calendar, Meet link included.
  const calUrl = (m, cls) => {
    const z = (d) => d.toISOString().replace(/[-:]|\.\d{3}/g, ''), a = new Date(m.starts_at), b = new Date(a.getTime() + m.minutes * 6e4);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(m.title + (cls ? ' · ' + cls : ''))}&dates=${z(a)}/${z(b)}&details=${encodeURIComponent((m.note ? m.note + '\n\n' : '') + 'Join on Google Meet: ' + m.link)}&location=${encodeURIComponent(m.link)}`;
  };
  const meetRow = (m, T, cls, tools) => `<div class="hwrow mrow ${isLive(m) ? 'live' : ''} ${isOver(m) ? 'done' : ''}"><span class="hwmark">${isLive(m) ? '今' : '会'}</span>
    <span class="hwinfo"><b>${esc(m.title)}${isLive(m) ? ' <span class="pill good">Live now</span>' : ''}</b><small>${when(m)}${cls ? ' · ' + esc(cls) : ''}</small>${m.note ? `<small class="hwnote">${esc(m.note)}</small>` : ''}</span>
    <span class="hwside">${isOver(m) ? '<span class="pill">Finished</span>' : `<a class="btn ${isLive(m) ? 'primary' : ''} sm" href="${esc(m.link)}" target="_blank" rel="noopener">${CAM}${T ? 'Start lesson' : isLive(m) ? 'Join now' : 'Join'}</a><a class="linkbtn" href="${esc(calUrl(m, cls))}" target="_blank" rel="noopener">Add to calendar</a>`}${tools || ''}</span></div>`;

  // ---------------------------------------------------------------- sections that slot into the class page
  function sections(c, T, students, cx) {
    if (!cx) return { meet: T ? '<section class="card"><div class="eyebrow">Lessons and assignments</div><div class="muted small">These switch on once the latest <code>supabase/classes.sql</code> has been run in Supabase.</div></section>' : '', assign: '' };
    const up = cx.meetings.filter((m) => !isOver(m)), past = cx.meetings.filter(isOver);
    const meet = `<section class="card"><div class="row-between"><div class="eyebrow">Lessons on Google Meet · じゅぎょう</div>${T ? '<button class="btn sm primary" data-act="mnew">Schedule a lesson</button>' : ''}</div>
      ${up.length ? `<div class="hwlist">${up.map((m) => meetRow(m, T, null, T ? `<button class="linkbtn" data-act="medit" data-arg="${m.id}">Edit</button><button class="linkbtn" data-act="mdel" data-arg="${m.id}">Remove</button>` : '')).join('')}</div>` : `<div class="muted small">${T ? 'No lesson scheduled. Create a Google Meet link, pick a time, and every student gets a Join button.' : 'No lesson scheduled yet.'}</div>`}
      ${past.length ? `<div class="muted small">${past.length} earlier ${past.length === 1 ? 'lesson' : 'lessons'} in the last two weeks.${T ? ' ' + past.map((m) => `<button class="linkbtn" data-act="mdel" data-arg="${m.id}">Remove “${esc(m.title)}”</button>`).join(' ') : ''}</div>` : ''}</section>`;
    const row = (a) => {
      const mine = a.mine, side = T
        ? `<span class="pill ${a.to_review ? 'coin' : ''}">${a.submitted}/${students.length} handed in${a.to_review ? ` · ${a.to_review} to review` : ''}</span><button class="btn sm ${a.to_review ? 'primary' : ''}" data-act="areview" data-arg="${a.id}">Review</button><button class="linkbtn" data-act="aedit" data-arg="${a.id}">Edit</button><button class="linkbtn" data-act="adel" data-arg="${a.id}">Delete</button>`
        : mine ? `${mine.reviewed_at ? `<span class="pill good">Reviewed${mine.grade ? ' · ' + esc(mine.grade) : ''}</span>` : '<span class="pill">Handed in</span>'}<button class="btn sm" data-act="aopen" data-arg="${a.id}">${mine.reviewed_at ? 'See feedback' : 'Open'}</button>` : `<button class="btn primary sm" data-act="aopen" data-arg="${a.id}">Hand in</button>`;
      return `<div class="hwrow ${!T && mine ? 'done' : ''}"><span class="hwmark">${!T && mine ? '済' : '課'}</span><span class="hwinfo"><b>${esc(a.title)}</b><small>${a.due ? dueText(a.due) : 'no due date'}</small></span><span class="hwside">${side}</span></div>`;
    };
    const assign = `<section class="card"><div class="row-between"><div class="eyebrow">Assignments · かだい</div>${T ? '<button class="btn sm primary" data-act="anew">Give an assignment</button>' : ''}</div>
      ${cx.assignments.length ? `<div class="hwlist">${cx.assignments.map(row).join('')}</div>` : `<div class="muted small">${T ? 'Set written work: students hand in text and photos of their handwriting, and you send back a grade and feedback.' : 'No assignments yet.'}</div>`}</section>`;
    return { meet, assign };
  }
  function actions(id, again, getCx) {
    const find = (list, x) => ((getCx() || {})[list] || []).find((r) => String(r.id) === String(x));
    const ask = (title, body, okLabel, fn) => { const m = modal(`<h2>${esc(title)}</h2><p class="muted" style="margin:0">${esc(body)}</p><div class="row-between"><button class="btn" data-x>Cancel</button><button class="btn primary" data-ok>${esc(okLabel)}</button></div>`, async (e) => { if (!e.target.closest('[data-ok]')) return; m.remove(); try { await fn(); again(); } catch (ex) { toast(ex.message); } }); };
    return {
      mnew: () => meetingEditor(id, null, again), medit: (x) => meetingEditor(id, find('meetings', x), again),
      mdel: (x) => ask('Remove this lesson?', 'Students will no longer see it.', 'Remove', () => K.meetingRemove(+x)),
      anew: () => assignmentEditor(id, null, again), aedit: (x) => assignmentEditor(id, find('assignments', x), again),
      adel: (x) => ask('Delete this assignment?', 'Everything students handed in for it is removed too.', 'Delete', () => K.assignmentRemove(+x)),
      aopen: (x) => handIn(find('assignments', x), again), areview: (x) => review(+x, again),
    };
  }

  // ---------------------------------------------------------------- lessons
  function meetingEditor(id, existing, done) {
    const d0 = existing ? new Date(existing.starts_at) : new Date(Date.now() + ML.DAY), pad = (n) => String(n).padStart(2, '0');
    const date = `${d0.getFullYear()}-${pad(d0.getMonth() + 1)}-${pad(d0.getDate())}`, time = existing ? `${pad(d0.getHours())}:${pad(d0.getMinutes())}` : '18:00';
    const m = modal(`<form class="stack-form"><div class="row-between"><h2>${existing ? 'Edit lesson' : 'Schedule a lesson'}</h2><button class="btn" type="button" data-x>Cancel</button></div>
      <div class="field"><label for="mt">Title</label><input class="input" id="mt" maxlength="120" required placeholder="Saturday lesson: particles" value="${esc(existing ? existing.title : '')}"></div>
      <div class="mgrid3"><div class="field"><label for="md">Date</label><input class="input" id="md" type="date" required value="${date}"></div><div class="field"><label for="mh">Starts</label><input class="input" id="mh" type="time" required value="${time}"></div>
        <div class="field"><label for="ml">Length</label><select class="input" id="ml">${[30, 45, 60, 90, 120].map((n) => `<option value="${n}" ${(existing ? existing.minutes : 60) === n ? 'selected' : ''}>${n} minutes</option>`).join('')}</select></div></div>
      <div class="field"><label for="mk">Google Meet link</label><input class="input" id="mk" type="url" required placeholder="https://meet.google.com/abc-defg-hij" value="${esc(existing ? existing.link : '')}">
        <div class="seg"><a class="chip" href="https://meet.google.com/new" target="_blank" rel="noopener">Create a new Meet link</a><span class="muted small">It opens Google Meet in a new tab under your Google account. Copy the link from there and paste it here.</span></div></div>
      <div class="field"><label for="mn">Note for the class <span class="muted">(optional)</span></label><input class="input" id="mn" maxlength="500" placeholder="Bring your notebook" value="${esc((existing && existing.note) || '')}"></div>
      <div class="formerr" role="alert" hidden></div><div class="row-between"><span class="muted small">Times are shown to each student in their own time zone.</span><button class="btn primary" type="submit">Save lesson</button></div></form>`);
    m.firstElementChild.classList.add('wide');
    m.querySelector('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const err = m.querySelector('.formerr'), v = (x) => m.querySelector(x).value.trim(), start = new Date(`${v('#md')}T${v('#mh')}`);
      if (v('#mt').length < 2 || isNaN(start)) { err.textContent = 'Give the lesson a title, a date and a start time.'; err.hidden = false; return; }
      try { await K.meetingSet(id, existing ? existing.id : null, { title: v('#mt'), starts_at: start.toISOString(), minutes: +v('#ml'), link: v('#mk'), note: v('#mn') || null }); m.remove(); toast('Lesson saved'); done(); }
      catch (ex) { err.textContent = ex.message; err.hidden = false; }
    });
  }

  // ---------------------------------------------------------------- assignments
  function assignmentEditor(id, existing, done) {
    const m = modal(`<form class="stack-form"><div class="row-between"><h2>${existing ? 'Edit assignment' : 'Give an assignment'}</h2><button class="btn" type="button" data-x>Cancel</button></div>
      <div class="field"><label for="at">Title</label><input class="input" id="at" maxlength="120" required placeholder="Write your self-introduction" value="${esc(existing ? existing.title : '')}"></div>
      <div class="field"><label for="ab">Instructions</label><textarea id="ab" class="plain" rows="6" maxlength="6000" placeholder="What should students do, and how will you mark it?">${esc((existing && existing.body) || '')}</textarea></div>
      <div class="field" style="max-width:220px"><label for="ad">Due <span class="muted">(optional)</span></label><input class="input" id="ad" type="date" value="${esc((existing && existing.due) || '')}"></div>
      <div class="formerr" role="alert" hidden></div><div class="row-between"><span class="muted small">Students hand in text and up to four pictures.</span><button class="btn primary" type="submit">Save assignment</button></div></form>`);
    m.firstElementChild.classList.add('wide');
    m.querySelector('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const err = m.querySelector('.formerr'), title = m.querySelector('#at').value.trim();
      if (title.length < 2) { err.textContent = 'Give the assignment a title.'; err.hidden = false; return; }
      try { await K.assignmentSet(id, existing ? existing.id : null, { title, body: m.querySelector('#ab').value.trim(), due: m.querySelector('#ad').value || null }); m.remove(); toast('Assignment saved'); done(); }
      catch (ex) { err.textContent = ex.message; err.hidden = false; }
    });
  }
  // the student's side: read the task, write or photograph the work, hand it in; later, read the feedback
  function handIn(a, done) {
    if (!a) return;
    const mine = a.mine || {};
    let pics = (mine.images || []).map((path) => ({ path, preview: CLOUD.communityImage(path) }));
    const m = modal(`<form class="stack-form"><div class="row-between"><h2>${esc(a.title)}</h2><button class="btn" type="button" data-x>Close</button></div>
      ${a.due ? `<div class="muted small">${dueText(a.due)}</div>` : ''}${a.body ? `<div class="ctext tip">${text(a.body)}</div>` : ''}
      ${mine.reviewed_at ? `<div class="card fbk"><div class="eyebrow">From your teacher</div>${mine.grade ? `<div class="big">${esc(mine.grade)}</div>` : ''}${mine.feedback ? `<div class="ctext">${text(mine.feedback)}</div>` : '<div class="muted small">Reviewed.</div>'}</div>` : ''}
      <div class="field"><label for="sb">Your work</label><textarea id="sb" class="plain" rows="7" maxlength="8000" placeholder="Type your answer here, in Japanese or English.">${esc(mine.body || '')}</textarea></div>
      <div class="field"><div class="cpics" id="spics"></div><div class="seg"><label class="chip cpick">Add pictures<input type="file" id="sf" accept="image/*" multiple hidden></label><span class="muted small">Handwritten? Photograph the page. Up to 4 pictures.</span></div></div>
      <div class="formerr" role="alert" hidden></div><div class="row-between"><span class="muted small">${mine.submitted_at ? 'Handing in again replaces your earlier work.' : 'Only your teacher sees this.'}</span><button class="btn primary" type="submit">${mine.submitted_at ? 'Hand in again' : 'Hand in'}</button></div></form>`, (e) => {
      const rm = e.target.closest('[data-rm]');
      if (rm) { pics.splice(+rm.dataset.rm, 1); draw(); }
    });
    m.firstElementChild.classList.add('wide');
    const draw = () => { m.querySelector('#spics').innerHTML = pics.map((x, i) => `<span class="cpic"><img src="${esc(x.preview)}" alt=""><button type="button" data-rm="${i}" aria-label="Remove picture">×</button></span>`).join(''); };
    draw();
    m.querySelector('#sf').addEventListener('change', async (e) => {
      const err = m.querySelector('.formerr'), shrink = window.COMMUNITY && window.COMMUNITY.shrink;
      for (const f of [...e.target.files]) {
        if (pics.length >= 4) { err.textContent = 'Four pictures is the limit.'; err.hidden = false; break; }
        try { if (!shrink) throw new Error('Pictures are not available right now.'); pics.push(await shrink(f)); draw(); } catch (ex) { err.textContent = ex.message; err.hidden = false; }
      }
      e.target.value = '';
    });
    m.querySelector('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const err = m.querySelector('.formerr'), btn = m.querySelector('[type=submit]'), body = m.querySelector('#sb').value.trim();
      if (!body && !pics.length) { err.textContent = 'Write something or add a picture first.'; err.hidden = false; return; }
      btn.disabled = true;
      try {
        if (pics.some((x) => !x.path)) btn.textContent = 'Uploading pictures…';
        for (const x of pics) if (!x.path) x.path = await CLOUD.community.uploadImage(x.blob, x.ext);
        await K.submit(a.id, body, pics.map((x) => x.path));
        m.remove(); ML.sfx.play('ok'); toast('Handed in. おつかれさま！'); done();
      } catch (ex) { err.textContent = ex.message; err.hidden = false; btn.disabled = false; btn.textContent = 'Hand in'; }
    });
  }
  // the teacher's side: everyone's work for one assignment, with a grade and feedback box each
  async function review(aid, done) {
    const m = modal('<div id="rv" class="stack-form"><div class="skeleton" style="height:200px;border-radius:8px"></div></div>', async (e) => {
      const b = e.target.closest('[data-save]');
      if (!b) return;
      const box = b.closest('.rvcard');
      try { await K.review(aid, b.dataset.save, box.querySelector('[data-g]').value.trim(), box.querySelector('[data-f]').value.trim()); b.textContent = 'Saved'; box.classList.add('done'); toast('Feedback sent'); done(); } catch (ex) { toast(ex.message); }
    });
    m.firstElementChild.classList.add('wide');
    try {
      const d = await K.submissions(aid), box = m.querySelector('#rv');
      if (!box) return;
      if (!d) { box.innerHTML = '<p class="muted">That assignment is gone.</p><button class="btn" data-x>Close</button>'; return; }
      const inn = d.students.filter((s) => s.submitted_at), out = d.students.filter((s) => !s.submitted_at);
      box.innerHTML = `<div class="row-between"><div><h2>${esc(d.title)}</h2><div class="muted small">${inn.length} of ${d.students.length} handed in${d.due ? ' · ' + dueText(d.due) : ''}</div></div><button class="btn" data-x>Close</button></div>
        ${inn.map((s) => `<div class="rvcard ${s.reviewed_at ? 'done' : ''}"><div class="who">${SOCIAL.avatar(s.avatar, 34)}<span><b>${esc(s.name)}</b><small class="muted">handed in ${new Date(s.submitted_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} ${hm(new Date(s.submitted_at))}${s.reviewed_at ? ' · reviewed' : ''}</small></span></div>
          ${s.body ? `<div class="ctext">${text(s.body)}</div>` : ''}${(s.images || []).length ? `<div class="cimgs n${s.images.length}">${s.images.map((x) => `<a href="${img(x)}" target="_blank" rel="noopener"><img src="${img(x)}" alt="Picture handed in by ${esc(s.name)}" loading="lazy"></a>`).join('')}</div>` : ''}
          <div class="rvform"><input class="input" data-g maxlength="40" placeholder="Grade (A, 8/10, よくできました…)" value="${esc(s.grade || '')}" aria-label="Grade"><textarea class="plain" data-f rows="2" maxlength="2000" placeholder="Feedback for ${esc(s.name)}" aria-label="Feedback">${esc(s.feedback || '')}</textarea><button class="btn primary sm" data-save="${esc(s.key)}">${s.reviewed_at ? 'Update' : 'Send feedback'}</button></div></div>`).join('') || '<p class="muted" style="margin:0">Nobody has handed anything in yet.</p>'}
        ${out.length ? `<div class="muted small">Not handed in yet: ${out.map((s) => esc(s.name)).join(', ')}</div>` : ''}`;
    } catch (ex) { const box = m.querySelector('#rv'); if (box) box.innerHTML = `<p class="muted">${esc(ex.message)}</p><button class="btn" data-x>Close</button>`; }
  }

  // ---------------------------------------------------------------- the teacher's desk
  function renderDesk() {
    if (!CLOUD.user) return go({ name: 'me' });
    const name = (CLOUD.profile && CLOUD.profile.display_name) || 'Sensei';
    render(`<div class="station desk"><div class="row-between"><div><h1>せんせいの つくえ · Teacher's desk</h1><p class="muted" style="margin:4px 0 0">${esc(name)}先生, here is what needs you today.</p></div><div class="seg"><button class="btn" data-act="home">Open the learning hub</button><button class="btn primary" data-act="dnew">Start a class</button></div></div>
      <div id="deskbody" class="stack"><div class="card skeleton" style="height:240px"></div></div></div>`, {
      dnew: () => window.CLASSES && window.CLASSES.createDialog(), dopen: (arg) => { const [id, tab] = arg.split('|'); window.CLASSES.openTab(id, tab || 'today'); },
    }, async () => {
      const el = document.getElementById('deskbody');
      let d;
      try { d = await K.agenda(); }
      catch (e) { try { const mine = await K.mine(); d = { teaching: mine.teaching.map((c) => ({ ...c, to_review: 0, active_7d: 0 })), meetings: [], assignments: [], old: true }; } catch (e2) { if (el) el.innerHTML = `<div class="card"><b>The desk didn't load.</b><span class="muted">${esc(e2.missing ? 'Classes are not switched on yet: run supabase/classes.sql in Supabase.' : e2.message)}</span></div>`; return; } }
      if (!el || !el.isConnected) return;
      const cls = d.teaching, students = cls.reduce((a, c) => a + (+c.students || 0), 0), toReview = cls.reduce((a, c) => a + (+c.to_review || 0), 0);
      const meets = d.meetings.filter((m) => m.teaching), week = meets.filter((m) => new Date(m.starts_at) - Date.now() < 7 * ML.DAY).length, asg = d.assignments.filter((a) => a.teaching && a.to_review > 0);
      const kpi = (v, l, s) => `<div class="kpi"><b class="num">${v}</b><span>${l}</span>${s ? `<small>${s}</small>` : ''}</div>`;
      if (!cls.length) { el.innerHTML = `<div class="card center-stack">${mascotSVG('happy', { cls: 'bob' }).replace('<svg', '<svg style="width:110px;height:110px"')}<h2>Start your first class</h2>
        <ol class="crules" style="text-align:left;max-width:440px"><li><b>Start a class</b> and you get a six-character code.</li><li><b>Share the code</b> or the invite link. Students join in one tap.</li><li><b>Teach:</b> schedule lessons on Google Meet, set homework and assignments, write class tests, and watch everyone's progress.</li></ol>
        <button class="btn primary" data-act="dnew">Start a class</button></div>`; return; }
      el.innerHTML = `<div class="kpis four">${kpi(cls.length, cls.length === 1 ? 'class' : 'classes')}${kpi(fmt(students), 'students')}${kpi(fmt(toReview), 'to review', toReview ? 'assignments waiting for you' : 'all caught up')}${kpi(week, 'lessons this week')}</div>
        ${d.old ? '<div class="tip">Lessons and assignments switch on once the latest <code>supabase/classes.sql</code> has been run in Supabase.</div>' : ''}
        <div class="cgrid"><div class="stack">
          <section class="card"><div class="eyebrow">Coming up · これから</div>
            ${meets.length || asg.length ? `<div class="hwlist">${meets.slice(0, 5).map((m) => meetRow(m, true, m.class_name, `<button class="linkbtn" data-act="dopen" data-arg="${esc(m.class_id)}|today">Open class</button>`)).join('')}${asg.map((a) => `<div class="hwrow"><span class="hwmark">課</span><span class="hwinfo"><b>${esc(a.title)}</b><small>${esc(a.class_name)}${a.due ? ' · ' + dueText(a.due) : ''}</small></span><span class="hwside"><span class="pill coin">${a.to_review} to review</span><button class="btn primary sm" data-act="dopen" data-arg="${esc(a.class_id)}|work">Review</button></span></div>`).join('')}</div>` : '<div class="muted small">Nothing scheduled and nothing waiting for review. Open a class to schedule a lesson or give an assignment.</div>'}</section>
          <section class="stack"><h2 class="section-h" style="margin:0">Your classes</h2><div class="dgrid">${cls.map((c) => `<div class="card dcard"><div class="row-between"><div><h3>${esc(c.name)}</h3><div class="muted small">${esc(c.jlpt)} · ${c.students} ${+c.students === 1 ? 'student' : 'students'}${c.active_7d != null && !d.old ? ` · ${c.active_7d} active this week` : ''}</div></div><span class="ccode">${esc(c.code)}</span></div>
            ${+c.to_review ? `<span class="pill coin">${c.to_review} to review</span>` : ''}
            <div class="seg"><button class="btn primary sm" data-act="dopen" data-arg="${esc(c.id)}|today">Open</button><button class="chip" data-act="dopen" data-arg="${esc(c.id)}|today">Lessons</button><button class="chip" data-act="dopen" data-arg="${esc(c.id)}|work">Work</button><button class="chip" data-act="dopen" data-arg="${esc(c.id)}|students">Students</button></div></div>`).join('')}</div></section>
        </div><aside class="stack">
          <section class="card"><div class="eyebrow">What you can do</div><ol class="crules"><li><b>Lessons:</b> schedule a Google Meet lesson; students get a Join button and a calendar link.</li><li><b>Homework:</b> set any station; it ticks itself when a student wins the stamp.</li><li><b>Assignments:</b> written work with photos, a grade and feedback.</li><li><b>Class tests:</b> your own questions, marked automatically.</li><li><b>Noticeboard, goals, nudges</b> and a weekly class leaderboard.</li></ol></section>
          <section class="card"><div class="eyebrow">Your own Japanese</div><div class="muted small">The whole learning hub is still yours: all five lines, reviews and the community.</div><button class="btn" data-act="home">Open the learning hub</button></section>
        </aside></div>`;
    });
  }

  // ---------------------------------------------------------------- modes, navigation, home card
  function setMode(mode, quiet) {
    if ((S.settings.mode || 'learner') !== mode) { S.settings = { ...S.settings, mode }; ML.save(); }
    try { localStorage.setItem('minna-line-role', mode); } catch (e) { /* ignore */ }
    if (CLOUD.user) K.setRole(mode).catch(() => {});
    if (!quiet) { go({ name: mode === 'teacher' ? 'desk' : 'home' }); toast(mode === 'teacher' ? 'Teacher view' : 'Learner view'); }
  }
  const baseNav = UI.X.navItems;
  UI.X.navItems = () => {
    const items = baseNav();
    if (!isTeacher() || !CLOUD.user) return items;
    const find = (k) => items.find((n) => n[0] === k), wide = (n) => n && [n[0], n[1], n[2], n[3], 'wide'];
    return [['desk', 'Desk', 'つくえ', DESK], ['classes', 'Classes', 'クラス', CLASS], ['home', 'Learn', 'まなぶ', ICON.home], find('community'), find('me'), wide(find('board')), wide(find('stats')), wide(find('collection'))].filter(Boolean);
  };
  // learners see their next lesson and open assignments on the home page
  const baseSide = UI.X.homeSide;
  UI.X.homeSide = () => {
    let out = '';
    if (CLOUD.user) {
      out = '<div id="agcard"></div>';
      setTimeout(() => K.agenda().then((d) => {
        const el = document.getElementById('agcard');
        if (!el || !d) return;
        const meets = d.meetings.filter((m) => !m.teaching).slice(0, 2), asg = d.assignments.filter((a) => !a.teaching && !a.done).slice(0, 3);
        if (!meets.length && !asg.length) return;
        el.innerHTML = `<div class="card cta"><div class="eyebrow">From your class · クラス</div><div class="hwlist">${meets.map((m) => meetRow(m, false, m.class_name)).join('')}${asg.map((a) => `<div class="hwrow"><span class="hwmark">課</span><span class="hwinfo"><b>${esc(a.title)}</b><small>${esc(a.class_name)}${a.due ? ' · ' + dueText(a.due) : ''}</small></span><span class="hwside"><button class="btn primary sm" data-act="agopen" data-arg="${esc(a.class_id)}">Hand in</button></span></div>`).join('')}</div></div>`;
      }).catch(() => {}), 0);
    }
    return out + (baseSide ? baseSide() : '');
  };
  UI.X.homeActions = { ...(UI.X.homeActions || {}), agopen: (id) => window.CLASSES.openTab(id, 'work') };
  Object.assign(UI.ROUTES, { desk: renderDesk });
  Object.assign(UI.G, { desk: () => go({ name: 'desk' }), switchmode: () => setMode(isTeacher() ? 'learner' : 'teacher') });
  return { sections, actions, setMode, isTeacher };
})();
