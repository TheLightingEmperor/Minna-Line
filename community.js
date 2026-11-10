// Minna Line community (ひろば, the station plaza): a feed of posts with categories, likes and comments.
// A cross between a forum and a club noticeboard: Hot / New / Top sorting and threaded replies on one side,
// friendly categories, member levels and pinned staff posts on the other. Builds on MLUI, CLOUD and SOCIAL.
window.COMMUNITY = (() => {
  'use strict';
  const UI = window.MLUI, CLOUD = window.CLOUD, ML = window.ML, SOCIAL = window.SOCIAL;
  if (!UI || !CLOUD || !SOCIAL) return {};
  const { esc, ICON, render, go, modal, toast, mascotSVG, S } = UI;
  const C = CLOUD.community;
  const CHAT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11h-8l-5 4v-4H4z"/><path d="M8 9h8M8 12.500h5"/></svg>';
  // [id, English, Japanese, colour, what belongs here]
  const CATS = [
    ['news', 'Announcements', 'おしらせ', 'var(--line)', 'News from the Minna Line crew'],
    ['prompt', 'Weekly challenge', 'こんしゅうの おだい', 'var(--good)', 'A new writing prompt every Monday'],
    ['intro', 'Introductions', 'じこしょうかい', 'var(--n4)', 'Say hello and tell us why you are learning'],
    ['question', 'Questions', 'しつもん', 'var(--express)', 'Grammar, words, kanji: ask anything'],
    ['win', 'Wins', 'やった！', 'var(--coin)', 'Stamps, streaks, exams passed'],
    ['tips', 'Study tips', 'べんきょうほう', 'var(--n1)', 'Methods and resources that work'],
    ['lounge', 'Lounge', 'ざつだん', 'var(--n3)', 'Japan, culture and everything else'],
  ];
  const CAT = Object.fromEntries(CATS.map((c) => [c[0], c]));
  const JLPTS = ['N5', 'N4', 'N3', 'N2', 'N1'];
  let view = { cat: null, sort: 'hot', jlpt: null }, unread = 0;

  function ago(iso) {
    const s = (Date.now() - new Date(iso).getTime()) / 1000;
    if (s < 90) return 'just now';
    if (s < 3600) return Math.round(s / 60) + ' min ago';
    if (s < 86400) return Math.round(s / 3600) + ' h ago';
    if (s < 86400 * 30) return Math.round(s / 86400) + ' d ago';
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }
  // Plain text only: escape everything, keep line breaks, and make web addresses clickable.
  const rich = (t) => esc(t).replace(/(https?:\/\/[^\s<]+[^\s<.,;:!?)\]])/g, '<a href="$1" target="_blank" rel="noopener nofollow ugc">$1</a>');
  const catPill = (id) => { const c = CAT[id] || CAT.lounge; return `<span class="pill cat" style="--c:${c[3]}">${esc(c[1])}</span>`; };
  const BELL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 17V11a6 6 0 0 1 12 0v6l2 2H4z"/><path d="M10 21h4M12 3v2"/></svg>';
  const img = (path) => esc(CLOUD.communityImage(path));
  // link = true makes the name open that member's card (not inside feed cards, which are already one big button)
  const who = (r, size = 30, link) => `${SOCIAL.avatar(r.author_avatar, size)}<span class="cwho">${link && r.author_key ? `<button class="cname" data-act="cmember" data-arg="${esc(r.author_key)}">${esc(r.author_name)}</button>` : `<b>${esc(r.author_name)}</b>`}${r.author_staff ? '<span class="pill stamp">Staff</span>' : ''}${r.is_op ? '<span class="pill">OP</span>' : ''}<small>Lv ${r.author_level || 1}${r.author_rank ? ' · ' + esc(r.author_rank) : ''} · ${ago(r.created_at)}</small></span>`;
  // The like button is a red approval seal: 良 means "good".
  const likeBtn = (kind, r) => `<button class="clike ${r.liked ? 'on' : ''}" data-act="clike" data-arg="${kind}:${r.id}" aria-pressed="${!!r.liked}" aria-label="Like" title="${r.liked ? 'Liked' : 'Like'}"><span class="seal">良</span><b class="num">${r.like_count || 0}</b></button>`;
  const missingCard = () => `<div class="card center-stack">${mascotSVG('calm', { cls: 'bob' }).replace('<svg', '<svg style="width:96px;height:96px"')}<h3>The plaza is still being built</h3>
    <p class="muted" style="margin:0">The community opens soon.${CLOUD.isAdmin ? ' <b>Admin:</b> run <code>supabase/community.sql</code> in the Supabase SQL Editor to switch it on.' : ''}</p></div>`;
  const failCard = (e, act) => (e && e.missing ? missingCard() : `<div class="card"><b>That didn't load.</b><span class="muted">${esc((e && e.message) || '')}</span><button class="btn" data-act="${act}">Try again</button></div>`);

  // ---------------------------------------------------------------- feed
  function postCard(r) {
    return `<article class="cpost ${r.pinned ? 'pinned' : ''} ${r.hidden ? 'chidden' : ''}">${likeBtn('p', r)}
      <button class="cmain ${r.images && r.images.length ? 'has-img' : ''}" data-act="copen" data-arg="${r.id}">
        ${r.images && r.images.length ? `<span class="cthumb"><img src="${img(r.images[0])}" alt="" loading="lazy">${r.images.length > 1 ? `<i>+${r.images.length - 1}</i>` : ''}</span>` : ''}
        <span class="cmeta">${who(r)}</span>
        <span class="ctags">${r.pinned ? '<span class="pill coin">Pinned</span>' : ''}${catPill(r.category)}${r.jlpt ? `<span class="pill">${esc(r.jlpt)}</span>` : ''}${r.locked ? '<span class="pill">Closed</span>' : ''}${r.hidden ? '<span class="pill" style="background:var(--bad-soft)">Hidden</span>' : ''}</span>
        <h3>${esc(r.title)}</h3><p>${esc(r.excerpt || '')}${(r.excerpt || '').length >= 320 ? '…' : ''}</p>
        <span class="cfoot">${CHAT}<b class="num">${r.comment_count || 0}</b> ${r.comment_count === 1 ? 'comment' : 'comments'}</span>
      </button></article>`;
  }
  async function toggleLike(arg, el) {
    const [kind, id] = arg.split(':');
    el.disabled = true;
    try {
      const r = await C.like(kind === 'p' ? { post: +id } : { comment: +id });
      el.classList.toggle('on', r.liked); el.setAttribute('aria-pressed', String(r.liked)); el.querySelector('b').textContent = r.count;
      if (r.liked) ML.sfx.play('tap');
    } catch (e) { toast(e.message); }
    el.disabled = false;
  }
  function renderFeed() {
    if (!CLOUD.user) return go({ name: 'me' });
    render(`<div class="station community"><button class="back" data-act="home">${ICON.back} Route map</button>
      <div class="row-between"><div><h1>ひろば · Community</h1><p class="muted" style="margin:4px 0 0">The station plaza. Ask, share, cheer each other on.</p></div>
        <div class="seg"><button class="btn" data-act="cbell" aria-label="Replies to you">${BELL}<span>Replies</span>${unread ? `<span class="pill stamp" id="cbelln">${unread}</span>` : ''}</button><button class="btn" data-act="members">Members</button><button class="btn primary" data-act="cnew">Write a post</button></div></div>
      <div class="chooser" role="group" aria-label="Category"><button class="chip" data-act="ccat" data-arg="" aria-pressed="${!view.cat}">Everything</button>${CATS.map((c) => `<button class="chip" style="--c:${c[3]}" data-act="ccat" data-arg="${c[0]}" aria-pressed="${view.cat === c[0]}">${c[1]}</button>`).join('')}</div>
      <div class="row-between"><div class="tabs" role="tablist">${[['hot', 'Hot'], ['new', 'New'], ['top', 'Top']].map(([k, l]) => `<button role="tab" aria-selected="${view.sort === k}" data-act="csort" data-arg="${k}">${l}</button>`).join('')}</div>
        <div class="seg" role="group" aria-label="Level"><button class="chip" data-act="clv" data-arg="" aria-pressed="${!view.jlpt}">Any level</button>${JLPTS.map((l) => `<button class="chip" data-act="clv" data-arg="${l}" aria-pressed="${view.jlpt === l}">${l}</button>`).join('')}</div></div>
      <div class="cgrid"><div id="cfeed" class="stack" aria-live="polite"><div class="card skeleton" style="height:150px"></div><div class="card skeleton" style="height:150px"></div></div>
        <aside class="stack">
          <div class="card"><div class="eyebrow">House rules · おやくそく</div><ol class="crules"><li><b>Be kind.</b> Everyone here was a beginner once.</li><li><b>Stay on Japanese.</b> Language, study and Japan.</li><li><b>Help, don't just answer.</b> Explain the why.</li><li><b>No ads or spam.</b> Share resources you really use.</li></ol></div>
          <div class="card"><div class="eyebrow">Where to post</div>${CATS.map((c) => `<button class="crow" data-act="ccat" data-arg="${c[0]}"><i style="background:${c[3]}"></i><span><b>${c[1]} <small class="jp">${c[2]}</small></b><small>${c[4]}</small></span></button>`).join('')}</div>
          <div id="creports"></div>
        </aside></div></div>`, actions(), loadFeed);
  }
  async function loadFeed() {
    const el = document.getElementById('cfeed');
    try {
      await C.weeklyPrompt().catch(() => {});   // posts this week's challenge if nobody has triggered it yet
      const rows = await C.feed({ category: view.cat, sort: view.sort, jlpt: view.jlpt, limit: 40 });
      if (!el || !el.isConnected) return;
      el.innerHTML = rows.length ? rows.map(postCard).join('') : `<div class="card center-stack">${mascotSVG('happy', { cls: 'bob' }).replace('<svg', '<svg style="width:96px;height:96px"')}<h3>Nothing here yet</h3><p class="muted" style="margin:0">Be the first to post${view.cat ? ' in ' + CAT[view.cat][1] : ''}.</p><button class="btn primary" data-act="cnew">Write a post</button></div>`;
    } catch (e) { if (el && el.isConnected) el.innerHTML = failCard(e, 'community'); }
    if (CLOUD.isAdmin) loadReports();
  }
  async function loadReports() {
    const box = document.getElementById('creports');
    if (!box) return;
    try {
      const rows = await C.reports();
      if (!box.isConnected || !rows.length) return;
      box.innerHTML = `<div class="card"><div class="row-between"><div class="eyebrow">Reports to review</div><span class="pill coin">${rows.length}</span></div>${rows.slice(0, 8).map((r) => `<div class="creport"><p>${esc(r.reason)}</p><div class="seg">${r.post_id ? `<button class="chip" data-act="copen" data-arg="${r.post_id}">Open post</button>` : ''}<button class="chip" data-act="cresolve" data-arg="${r.id}">Dismiss</button></div></div>`).join('')}</div>`;
    } catch (e) { /* staff extra: fine to skip */ }
  }

  // ---------------------------------------------------------------- one post and its comments
  function commentHTML(m, replies, locked) {
    const tools = `<span class="ctools">${likeBtn('c', m)}${locked ? '' : `<button class="linkbtn" data-act="creply" data-arg="${m.parent_id || m.id}">Reply</button>`}${m.is_mine || CLOUD.isAdmin ? `<button class="linkbtn" data-act="cdelc" data-arg="${m.id}">Delete</button>` : `<button class="linkbtn" data-act="creportc" data-arg="${m.id}">Report</button>`}</span>`;
    return `<div class="ccomment" id="cc${m.id}"><div class="cmeta">${who(m, 28, true)}</div><div class="ctext">${rich(m.body)}</div>${tools}
      ${replies ? `<div class="creplies">${replies.map((x) => commentHTML(x, null, locked)).join('')}</div><div class="creplybox" id="rb${m.id}"></div>` : ''}</div>`;
  }
  function renderPost(v) {
    if (!CLOUD.user) return go({ name: 'me' });
    render(`<div class="station community"><button class="back" data-act="community">${ICON.back} Community</button><div id="cthread" class="stack"><div class="card skeleton" style="height:240px"></div></div></div>`, actions(v.id), () => loadPost(v.id));
  }
  async function loadPost(id) {
    const el = document.getElementById('cthread');
    try {
      const t = await C.thread(+id);
      if (!el || !el.isConnected) return;
      if (!t) { el.innerHTML = `<div class="card center-stack"><h3>This post is gone</h3><p class="muted" style="margin:0">It was deleted or hidden.</p><button class="btn" data-act="community">Back to the community</button></div>`; return; }
      const p = t.post, tops = t.comments.filter((m) => !m.parent_id), kids = (pid) => t.comments.filter((m) => m.parent_id === pid);
      const mod = CLOUD.isAdmin ? `<div class="seg cmod"><span class="eyebrow">Staff</span><button class="chip" data-act="cmod" data-arg="${p.pinned ? 'unpin' : 'pin'}">${p.pinned ? 'Unpin' : 'Pin'}</button><button class="chip" data-act="cmod" data-arg="${p.locked ? 'unlock' : 'lock'}">${p.locked ? 'Reopen' : 'Close comments'}</button><button class="chip" data-act="cmod" data-arg="${p.hidden ? 'show' : 'hide'}">${p.hidden ? 'Unhide' : 'Hide'}</button>${p.author_id && !p.is_mine ? `<button class="chip" data-act="cmute" data-arg="${esc(p.author_id)}">Mute author</button>` : ''}</div>` : '';
      el.innerHTML = `<article class="card cfull">
          <div class="row-between"><span class="cmeta">${who(p, 40, true)}</span><span class="ctags">${p.pinned ? '<span class="pill coin">Pinned</span>' : ''}${catPill(p.category)}${p.jlpt ? `<span class="pill">${esc(p.jlpt)}</span>` : ''}${p.hidden ? '<span class="pill" style="background:var(--bad-soft)">Hidden</span>' : ''}</span></div>
          <h1>${esc(p.title)}</h1><div class="ctext">${rich(p.body)}</div>
          ${p.images && p.images.length ? `<div class="cimgs n${p.images.length}">${p.images.map((x) => `<button data-act="cimg" data-arg="${img(x)}"><img src="${img(x)}" alt="Picture attached to the post" loading="lazy"></button>`).join('')}</div>` : ''}
          <div class="row-between"><span class="ctools">${likeBtn('p', p)}<span class="cfoot">${CHAT}<b class="num">${t.comments.length}</b></span></span>
            <span class="ctools">${p.is_mine ? '<button class="linkbtn" data-act="cedit">Edit</button>' : ''}${p.is_mine || CLOUD.isAdmin ? '<button class="linkbtn" data-act="cdel">Delete</button>' : '<button class="linkbtn" data-act="creportp">Report</button>'}</span></div>
          ${mod}</article>
        ${p.locked ? '<div class="tip">Comments are closed on this post.</div>' : `<form class="card ccompose" id="cform"><label class="eyebrow" for="cbody">Add a comment</label><textarea id="cbody" class="plain" rows="3" maxlength="4000" placeholder="Share what you know, or ask a follow-up…" required></textarea><div class="row-between"><span class="muted small">Posting as ${esc((CLOUD.profile && CLOUD.profile.display_name) || 'you')}</span><button class="btn primary" type="submit">Comment</button></div></form>`}
        <section class="stack"><h2 style="font-size:19px">${t.comments.length ? `${t.comments.length} ${t.comments.length === 1 ? 'comment' : 'comments'}` : 'No comments yet'}</h2>
          ${tops.map((m) => commentHTML(m, kids(m.id), p.locked)).join('') || '<p class="muted" style="margin:0">Start the conversation.</p>'}</section>`;
      el.dataset.post = JSON.stringify({ id: p.id, category: p.category, jlpt: p.jlpt, title: p.title, body: p.body, images: p.images || [] });
      const f = document.getElementById('cform');
      if (f) f.addEventListener('submit', (e) => { e.preventDefault(); sendComment(p.id, null, f.querySelector('textarea'), f.querySelector('[type=submit]')); });
    } catch (e) { if (el && el.isConnected) el.innerHTML = failCard(e, 'community'); }
  }
  async function sendComment(postId, parentId, ta, btn) {
    const body = ta.value.trim();
    if (!body) return;
    btn.disabled = true;
    try { await C.addComment({ post_id: postId, parent_id: parentId, body }); ML.sfx.play('ok'); await loadPost(postId); }
    catch (e) { toast(e.message); btn.disabled = false; }
  }
  function ask(title, text, okLabel, fn) {
    const m = modal(`<h2>${esc(title)}</h2><p class="muted" style="margin:0">${esc(text)}</p><div class="row-between"><button class="btn" data-x>Cancel</button><button class="btn primary" data-ok>${esc(okLabel)}</button></div>`, async (e) => {
      if (!e.target.closest('[data-ok]')) return;
      m.remove();
      try { await fn(); } catch (ex) { toast(ex.message); }
    });
  }
  function report(target) {
    const m = modal(`<form class="stack-form"><h2>Report to staff</h2><p class="muted" style="margin:0">Tell us what's wrong. Only the Minna Line staff see this.</p>
      <div class="field"><label for="rr">Reason</label><textarea id="rr" class="plain" rows="3" maxlength="500" required placeholder="Spam, unkind, off-topic…"></textarea></div>
      <div class="row-between"><button class="btn" type="button" data-x>Cancel</button><button class="btn primary" type="submit">Send report</button></div></form>`);
    m.querySelector('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const reason = m.querySelector('#rr').value.trim();
      if (!reason) return;
      try { await C.report({ ...target, reason }); m.remove(); toast('Thanks. Staff will take a look.'); } catch (ex) { toast(ex.message); }
    });
  }

  // ---------------------------------------------------------------- writing a post
  // Photos are shrunk in the browser before upload: long side 1600px, WebP or JPEG, usually under 300 KB.
  async function shrink(file) {
    const url = URL.createObjectURL(file);
    try {
      const im = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => rej(new Error("That file isn't a picture we can read.")); i.src = url; });
      const k = Math.min(1, 1600 / Math.max(im.naturalWidth, im.naturalHeight)), cv = document.createElement('canvas');
      cv.width = Math.max(1, Math.round(im.naturalWidth * k)); cv.height = Math.max(1, Math.round(im.naturalHeight * k));
      cv.getContext('2d').drawImage(im, 0, 0, cv.width, cv.height);
      let blob = await new Promise((res) => cv.toBlob(res, 'image/webp', 0.82));
      if (!blob || blob.type !== 'image/webp') blob = await new Promise((res) => cv.toBlob(res, 'image/jpeg', 0.84));
      if (!blob) throw new Error("That picture couldn't be prepared.");
      return { blob, ext: blob.type === 'image/webp' ? 'webp' : 'jpg', preview: URL.createObjectURL(blob) };
    } finally { URL.revokeObjectURL(url); }
  }
  function compose(existing, draft) {
    const cats = CATS.filter((c) => (c[0] !== 'news' && c[0] !== 'prompt') || CLOUD.isAdmin);
    const src = existing || draft || {};
    let cat = src.category || (view.cat && cats.some((c) => c[0] === view.cat) ? view.cat : 'question'), lv = src.jlpt || '';
    let pics = ((existing && existing.images) || []).map((path) => ({ path, preview: CLOUD.communityImage(path) }));   // { path } already uploaded, { blob, ext } new
    const m = modal(`<form class="stack-form"><div class="row-between"><h2>${existing ? 'Edit your post' : 'Write a post'}</h2><button class="btn" type="button" data-x>Cancel</button></div>
      <div class="field"><label>Where does it belong?</label><div class="seg">${cats.map((c) => `<button type="button" class="chip" style="--c:${c[3]}" data-cat="${c[0]}" aria-pressed="${c[0] === cat}">${c[1]}</button>`).join('')}</div><div class="muted small" id="cathint">${esc(CAT[cat][4])}</div></div>
      <div class="field"><label>Level <span class="muted">(optional)</span></label><div class="seg"><button type="button" class="chip" data-lv="" aria-pressed="${!lv}">Not level-specific</button>${JLPTS.map((l) => `<button type="button" class="chip" data-lv="${l}" aria-pressed="${l === lv}">${l}</button>`).join('')}</div></div>
      <div class="field"><label for="pt">Title</label><input class="input" id="pt" maxlength="140" required placeholder="A clear, specific title gets better answers" value="${esc(src.title || '')}"></div>
      <div class="field"><label for="pb">Your post</label><textarea id="pb" class="plain" rows="8" maxlength="8000" required placeholder="Write in English or Japanese. Links are fine.">${esc(src.body || '')}</textarea></div>
      <div class="field"><div class="cpics" id="cpics"></div><div class="seg"><label class="chip cpick">Add pictures<input type="file" id="pf" accept="image/*" multiple hidden></label><span id="winfill" ${cat === 'win' && !existing ? '' : 'hidden'}><button type="button" class="chip" data-fill>Fill in my stats</button></span><span class="muted small">Up to 4 pictures. No video yet.</span></div></div>
      <div class="formerr" role="alert" hidden></div>
      <div class="row-between"><span class="muted small">Shown with your conductor name and level.</span><button class="btn primary" type="submit">${existing ? 'Save changes' : 'Post it'}</button></div></form>`, (e) => {
      const c = e.target.closest('[data-cat]'), l = e.target.closest('[data-lv]');
      if (c) { cat = c.dataset.cat; m.querySelectorAll('[data-cat]').forEach((b) => b.setAttribute('aria-pressed', String(b === c))); m.querySelector('#cathint').textContent = CAT[cat][4]; m.querySelector('#winfill').hidden = cat !== 'win' || !!existing; }
      if (l) { lv = l.dataset.lv; m.querySelectorAll('[data-lv]').forEach((b) => b.setAttribute('aria-pressed', String(b === l))); }
      const rm = e.target.closest('[data-rm]');
      if (rm) { pics.splice(+rm.dataset.rm, 1); drawPics(); }
      if (e.target.closest('[data-fill]')) {
        const st = S.stats, days = Object.keys(S.history).length, streak = ML.liveStreak();
        m.querySelector('#pt').value = m.querySelector('#pt').value || `Level ${ML.level()} and a ${streak}-day streak`;
        m.querySelector('#pb').value = `${m.querySelector('#pb').value}${m.querySelector('#pb').value ? '\n\n' : ''}My Minna Line so far:\n· Level ${ML.level()} (${ML.rank()[3]}), ${S.xp.toLocaleString('en-US')} XP\n· ${streak}-day streak, ${days} days studied\n· ${st.answers.toLocaleString('en-US')} answers, ${st.answers ? Math.round((st.correct / st.answers) * 100) : 0}% correct\n· ${Object.keys(S.stamps).length} station stamps\n`;
      }
    });
    m.firstElementChild.classList.add('wide');
    const drawPics = () => { m.querySelector('#cpics').innerHTML = pics.map((x, i) => `<span class="cpic"><img src="${esc(x.preview)}" alt=""><button type="button" data-rm="${i}" aria-label="Remove picture">×</button></span>`).join(''); };
    drawPics();
    m.querySelector('#pf').addEventListener('change', async (e) => {
      const err = m.querySelector('.formerr');
      for (const f of [...e.target.files]) {
        if (pics.length >= 4) { err.textContent = 'Four pictures is the limit.'; err.hidden = false; break; }
        if (!/^image\//.test(f.type)) { err.textContent = 'Pictures only for now.'; err.hidden = false; continue; }
        try { pics.push(await shrink(f)); drawPics(); } catch (ex) { err.textContent = ex.message; err.hidden = false; }
      }
      e.target.value = '';
    });
    m.querySelector('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = m.querySelector('#pt').value.trim(), body = m.querySelector('#pb').value.trim(), err = m.querySelector('.formerr'), btn = m.querySelector('[type=submit]');
      if (title.length < 3) { err.textContent = 'Give it a title of at least 3 characters.'; err.hidden = false; return; }
      if (!body) { err.textContent = 'Write something first.'; err.hidden = false; return; }
      btn.disabled = true;
      try {
        if (pics.some((x) => !x.path)) btn.textContent = 'Uploading pictures…';
        for (const x of pics) if (!x.path) x.path = await C.uploadImage(x.blob, x.ext);
        const row = { category: cat, jlpt: lv || null, title, body, images: pics.map((x) => x.path) };
        let id = existing && existing.id;
        if (existing) await C.updatePost(existing.id, row); else id = await C.createPost(row);
        m.remove(); ML.sfx.play('ok'); toast(existing ? 'Post updated' : 'Posted!');
        go({ name: 'post', id });
      } catch (ex) { err.textContent = ex.missing ? 'The community is not switched on yet.' : ex.message; err.hidden = false; btn.disabled = false; btn.textContent = existing ? 'Save changes' : 'Post it'; }
    });
  }

  // ---------------------------------------------------------------- replies to me
  async function bell() {
    const m = modal(`<div class="row-between"><h2>Replies to you</h2><button class="btn" data-x>Close</button></div><div id="cnotes" class="stack"><div class="skeleton" style="height:120px;border-radius:8px"></div></div>`, (e) => {
      const b = e.target.closest('[data-open]');
      if (b) { m.remove(); go({ name: 'post', id: +b.dataset.open }); }
    });
    try {
      const rows = await C.notifications();
      const box = m.querySelector('#cnotes');
      if (box) box.innerHTML = rows.length ? rows.map((n) => `<button class="cnote ${n.is_new ? 'new' : ''}" data-open="${n.post_id}">${SOCIAL.avatar(n.author_avatar, 30)}<span><b>${esc(n.author_name)}</b> replied on <b>${esc(n.post_title)}</b><small>${esc(n.excerpt)}</small><small class="muted">${ago(n.created_at)}</small></span></button>`).join('') : '<p class="muted" style="margin:0">No replies yet. Post a question and they will show up here.</p>';
      if (unread) { unread = 0; C.markSeen().catch(() => {}); paintDot(); const n = document.getElementById('cbelln'); if (n) n.remove(); }
    } catch (e) { const box = m.querySelector('#cnotes'); if (box) box.innerHTML = `<p class="muted">${esc(e.missing ? 'The community is not switched on yet.' : e.message)}</p>`; }
  }

  // ---------------------------------------------------------------- members
  let memberSort = 'kudos';
  function renderMembers() {
    if (!CLOUD.user) return go({ name: 'me' });
    render(`<div class="station community"><button class="back" data-act="community">${ICON.back} Community</button>
      <div class="row-between"><div><h1>なかま · Members</h1><p class="muted" style="margin:4px 0 0">Everyone who has chosen to be public. Kudos are likes received in the community.</p></div><button class="btn" data-act="cbio">Edit my card</button></div>
      <div class="tabs" role="tablist">${[['kudos', 'Most kudos'], ['level', 'Highest level'], ['new', 'Newest']].map(([k, l]) => `<button role="tab" aria-selected="${memberSort === k}" data-act="msort" data-arg="${k}">${l}</button>`).join('')}</div>
      <div id="cmembers" class="mgrid"><div class="card skeleton" style="height:120px"></div><div class="card skeleton" style="height:120px"></div><div class="card skeleton" style="height:120px"></div></div></div>`, { ...actions(), msort: (k) => { memberSort = k; renderMembers(); } }, async () => {
      const el = document.getElementById('cmembers');
      try {
        const rows = await C.members(memberSort);
        if (!el || !el.isConnected) return;
        el.innerHTML = rows.map((r) => `<button class="mcard" data-act="cmember" data-arg="${esc(r.member_key)}">${SOCIAL.avatar(r.avatar, 52)}<span class="minfo"><b>${esc(r.display_name)}${r.staff ? ' <span class="pill stamp">Staff</span>' : ''}</b><small>${esc(r.jlpt || 'N5')} · Lv ${r.user_level || 1}${r.rank_name ? ' · ' + esc(r.rank_name) : ''}</small>${r.bio ? `<small class="mbio">${esc(r.bio)}</small>` : ''}<small class="mstats"><span><b class="num">${r.kudos || 0}</b> kudos</span><span><b class="num">${r.posts || 0}</b> posts</span><span><b class="num">${r.streak || 0}</b> day streak</span></small></span></button>`).join('') || '<p class="muted">No public members yet.</p>';
      } catch (e) { if (el && el.isConnected) { el.className = 'stack'; el.innerHTML = failCard(e, 'members'); } }
    });
  }
  async function memberCard(key) {
    const m = modal(`<div id="mc" class="stack"><div class="skeleton" style="height:180px;border-radius:8px"></div></div>`, (e) => {
      const b = e.target.closest('[data-open]');
      if (b) { m.remove(); go({ name: 'post', id: +b.dataset.open }); }
    });
    try {
      const r = await C.member(key), box = m.querySelector('#mc');
      if (!box) return;
      if (!r) { box.innerHTML = '<p class="muted">This member keeps their card private.</p><button class="btn" data-x>Close</button>'; return; }
      box.innerHTML = `<div class="row-between"><div class="who">${SOCIAL.avatar(r.avatar, 64, 'happy')}<span><h2>${esc(r.display_name)}${r.staff ? ' <span class="pill stamp">Staff</span>' : ''}</h2><small class="muted">${esc(r.jlpt || 'N5')} · Lv ${r.user_level || 1}${r.rank_name ? ' · ' + esc(r.rank_name) : ''} · aboard since ${new Date(r.joined).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</small></span></div><button class="btn" data-x>Close</button></div>
        ${r.bio ? `<p style="margin:0">${esc(r.bio)}</p>` : ''}
        <div class="facts">${[['XP', (r.xp || 0).toLocaleString('en-US')], ['Streak', `${r.streak || 0} (best ${r.best_streak || 0})`], ['Kudos', r.kudos || 0], ['Stamps', r.stamps || 0], ['Trophies', r.trophies || 0], ['Words mastered', r.words_mastered || 0], ['Kanji mastered', r.kanji_mastered || 0]].map(([l, v]) => `<div><small class="muted">${l}</small><b>${esc(v)}</b></div>`).join('')}</div>
        <h3>Posts</h3>${r.posts.length ? r.posts.map((p) => `<button class="cnote" data-open="${p.id}"><span><b>${esc(p.title)}</b><small class="muted">${esc((CAT[p.category] || CAT.lounge)[1])} · ${p.like_count} likes · ${p.comment_count} comments · ${ago(p.created_at)}</small></span></button>`).join('') : '<p class="muted" style="margin:0">Nothing posted yet.</p>'}`;
    } catch (e) { const box = m.querySelector('#mc'); if (box) box.innerHTML = `<p class="muted">${esc(e.message)}</p><button class="btn" data-x>Close</button>`; }
  }
  function editBio() {
    const cur = (CLOUD.profile && CLOUD.profile.bio) || '';
    const m = modal(`<form class="stack-form"><h2>Your member card</h2><p class="muted" style="margin:0">A line or two about you: why you're learning, where you're from, what you're aiming for.</p>
      <div class="field"><label for="bio">About me</label><textarea id="bio" class="plain" rows="3" maxlength="240" placeholder="Learning for a trip to Osaka next spring.">${esc(cur)}</textarea></div>
      <div class="formerr" role="alert" hidden></div><div class="row-between"><button class="btn" type="button" data-x>Cancel</button><button class="btn primary" type="submit">Save</button></div></form>`);
    m.querySelector('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const err = m.querySelector('.formerr');
      try { await CLOUD.updateProfile({ bio: m.querySelector('#bio').value.trim().slice(0, 240) || null }); m.remove(); toast('Card updated'); if (UI.view.name === 'members') renderMembers(); } catch (ex) { err.textContent = ex.message; err.hidden = false; }
    });
  }

  // ---------------------------------------------------------------- actions shared by both screens
  function actions(postId) {
    const current = () => { try { return JSON.parse(document.getElementById('cthread').dataset.post); } catch (e) { return null; } };
    return {
      cnew: () => compose(), copen: (id) => go({ name: 'post', id: +id }), clike: toggleLike, cbell: bell, cmember: memberCard, cbio: editBio,
      cimg: (src) => { modal(`<div class="clight"><img src="${esc(src)}" alt="Picture attached to the post"></div><button class="btn" data-x>Close</button>`).firstElementChild.classList.add('wide'); },
      ccat: (c) => { view.cat = c || null; renderFeed(); }, csort: (s) => { view.sort = s; renderFeed(); }, clv: (l) => { view.jlpt = l || null; renderFeed(); },
      cresolve: async (id) => { try { await C.resolveReport(+id); loadReports(); const b = document.getElementById('creports'); if (b) b.innerHTML = ''; loadReports(); } catch (e) { toast(e.message); } },
      cedit: () => { const p = current(); if (p) compose(p); },
      cdel: () => ask('Delete this post?', 'The post and all its comments are removed for good.', 'Delete', async () => { if (CLOUD.isAdmin) await C.moderate('post', postId, 'delete'); else await C.deletePost(postId); toast('Post deleted'); go({ name: 'community' }); }),
      cdelc: (id) => ask('Delete this comment?', 'Replies to it are removed too.', 'Delete', async () => { if (CLOUD.isAdmin) await C.moderate('comment', id, 'delete'); else await C.deleteComment(+id); loadPost(postId); }),
      creportp: () => report({ post: postId }), creportc: (id) => report({ post: postId, comment: +id }),
      cmod: async (action) => { try { await C.moderate('post', postId, action); toast('Done'); loadPost(postId); } catch (e) { toast(e.message); } },
      cmute: (uid) => ask('Mute this member?', 'They will not be able to post or comment until you unmute them from Supabase.', 'Mute', async () => { await C.moderate('member', uid, 'mute'); toast('Member muted'); }),
      creply: (id) => {
        const box = document.getElementById('rb' + id);
        if (!box) return;
        if (box.firstChild) { box.innerHTML = ''; return; }
        box.innerHTML = `<form class="ccompose"><textarea class="plain" rows="2" maxlength="4000" placeholder="Write a reply…" required></textarea><div class="row-between"><span></span><button class="btn primary sm" type="submit">Reply</button></div></form>`;
        const f = box.firstChild; f.querySelector('textarea').focus();
        f.addEventListener('submit', (e) => { e.preventDefault(); sendComment(postId, +id, f.querySelector('textarea'), f.querySelector('[type=submit]')); });
      },
    };
  }

  // ---------------------------------------------------------------- wiring: a Community tab with a dot for new replies
  function paintDot() { document.querySelectorAll('[data-act="community"]').forEach((b) => b.classList.toggle('has-dot', unread > 0)); }
  const baseNav = UI.X.navItems;
  UI.X.navItems = () => {
    const items = baseNav().map((n) => (n[0] === 'collection' && CLOUD.user ? [...n.slice(0, 4), 'wide'] : n)); // Collection moves to the Me page on phones
    if (CLOUD.user) items.splice(1, 0, ['community', 'Community', 'ひろば', CHAT + (unread ? '<i class="navdot"></i>' : '')]);
    return items;
  };
  Object.assign(UI.ROUTES, { community: renderFeed, post: renderPost, members: renderMembers });
  Object.assign(UI.G, { community: () => go({ name: 'community' }), members: () => go({ name: 'members' }) });
  CLOUD.on((what) => {
    if (what !== 'ready' || !CLOUD.user) return;
    C.unread().then((n) => { unread = +n || 0; if (unread && UI.view.name !== 'gate') UI.refresh(); }).catch(() => {});
  });
  // "Share this" from elsewhere in the app (a new stamp, a passed exam) opens the composer with a draft ready.
  const share = (draft) => { if (CLOUD.user) compose(null, { category: 'win', ...draft }); };
  return { compose, share, CATS };
})();
