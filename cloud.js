// Minna Line accounts, cloud sync, leaderboard and admin data.
// Talks to Supabase when config.js has a project URL and key. With no keys the app stays local-only,
// and adding ?demo=1 to the address swaps in a pretend backend (stored in this browser) so every screen can be tried.
window.CLOUD = (() => {
  'use strict';
  const ML = window.ML, cfg = window.MINNA_CONFIG || {};
  const VERSION = cfg.APP_VERSION || '6.0';
  const hasKeys = !!(cfg.SUPABASE_URL && cfg.SUPABASE_KEY && window.supabase && window.supabase.createClient);
  const onLocalhost = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
  const ls = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* storage unavailable */ } },
  };
  // ?demo=1 swaps in the pretend backend. It works when no real backend is connected, and always on a developer's
  // own machine, so local testing never writes test accounts into the real database.
  let demo = false;
  if ((!hasKeys || onLocalhost) && !window.claude) {
    try {
      if (/[?&]demo=1\b/.test(location.search)) sessionStorage.setItem('minna-demo', '1');
      if (/[?&]demo=0\b/.test(location.search)) sessionStorage.removeItem('minna-demo');
      demo = sessionStorage.getItem('minna-demo') === '1';
    } catch (e) { /* no session storage */ }
  }
  const configured = hasKeys && !demo;
  const enabled = configured || demo;
  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, Math.round(+n || 0)));

  // Turns server errors into something a learner can act on.
  function nice(e) {
    const m = String((e && (e.message || e.error_description || e.msg)) || e || '');
    if (/invalid login credentials|invalid_credentials/i.test(m)) return "That email and password don't match. Check them and try again.";
    if (/already registered|already been registered|user_already_exists/i.test(m)) return 'There is already an account with that email. Log in instead.';
    if (/email not confirmed/i.test(m)) return 'Confirm your email first: open the link we sent to your inbox.';
    if (/password should be|weak_password|at least \d+ characters/i.test(m)) return 'Choose a longer password (8 characters or more).';
    if (/different from the old password|same_password/i.test(m)) return 'Pick a password you have not used here before.';
    if (/rate limit|too many|only request this after/i.test(m)) return 'Too many tries. Wait a minute, then try again.';
    if (/failed to fetch|networkerror|load failed|network request/i.test(m)) return "Can't reach the server. Check your connection and try again.";
    if (/signups? (are )?(not allowed|disabled)/i.test(m)) return 'Sign-ups are closed right now.';
    if (/unable to validate email|invalid format|email address .* is invalid|invalid email/i.test(m)) return "That email address doesn't look right.";
    if (/error sending|smtp/i.test(m)) return "We couldn't send that email. Try again later.";
    return m || 'Something went wrong. Please try again.';
  }

  function device() {
    let tz = '';
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { /* ignore */ }
    let ref = '';
    try {
      const q = new URLSearchParams(location.search);
      ref = q.get('utm_source') || q.get('ref') || (document.referrer && new URL(document.referrer).host !== location.host ? new URL(document.referrer).host : '');
    } catch (e) { /* ignore */ }
    const nav = navigator;
    return {
      timezone: tz, locale: nav.language || '', platform: (nav.userAgentData && nav.userAgentData.platform) || nav.platform || '',
      user_agent: nav.userAgent || '', screen: `${screen.width}x${screen.height}@${window.devicePixelRatio || 1}`,
      referrer: ref || null, app_version: VERSION,
    };
  }

  // ---------------------------------------------------------------- Supabase backend
  function supabaseBackend() {
    const sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, storageKey: 'minna-line-auth' },
    });
    const need = (r) => { if (r.error) throw r.error; return r.data; };
    const U = (u) => (u ? { id: u.id, email: u.email } : null);
    const here = () => location.origin + location.pathname;
    // PostgREST hands back 1,000 rows at a time; this walks the pages.
    async function pages(make, max = 20000) {
      const out = [];
      for (let from = 0; from < max; from += 1000) {
        const rows = need(await make().range(from, from + 999)) || [];
        out.push(...rows);
        if (rows.length < 1000) break;
      }
      return out;
    }
    let uid = null;
    return {
      kind: 'supabase',
      async session() { const { data } = await sb.auth.getSession(); const u = data && data.session ? data.session.user : null; uid = u ? u.id : null; return U(u); },
      onAuth(cb) { sb.auth.onAuthStateChange((ev, s) => { const u = s && s.user ? s.user : null; if (u) uid = u.id; else if (ev === 'SIGNED_OUT') uid = null; cb(ev, U(u)); }); },
      async signUp(email, password, meta) {
        const d = need(await sb.auth.signUp({ email, password, options: { data: meta, emailRedirectTo: here() } }));
        if (d.user && Array.isArray(d.user.identities) && d.user.identities.length === 0) throw new Error('User already registered');
        uid = d.session ? d.user.id : null;
        return { user: d.session ? U(d.user) : null, needsConfirm: !d.session };
      },
      async signIn(email, password) { const d = need(await sb.auth.signInWithPassword({ email, password })); uid = d.user.id; return U(d.user); },
      async signOut() { try { await sb.auth.signOut({ scope: 'local' }); } catch (e) { /* already gone */ } uid = null; },
      async sendReset(email) { need(await sb.auth.resetPasswordForEmail(email, { redirectTo: here() })); },
      async setPassword(password) { need(await sb.auth.updateUser({ password })); },
      async logLogin(event, meta) { return need(await sb.rpc('log_login', { p_event: event, p_meta: meta })); },
      async loadProgress() { return need(await sb.from('progress').select('data, client_ts, updated_at').eq('user_id', uid).maybeSingle()); },
      async saveProgress(data, ts) { need(await sb.from('progress').upsert({ user_id: uid, data, client_ts: ts }, { onConflict: 'user_id' })); },
      async saveProfile(fields) { need(await sb.from('profiles').update(fields).eq('id', uid)); },
      async saveDays(rows) { if (rows.length) need(await sb.from('daily_activity').upsert(rows.map((r) => ({ ...r, user_id: uid })), { onConflict: 'user_id,day' })); },
      async leaderboard(board, limit) { return need(await sb.rpc('leaderboard', { p_board: board, p_limit: limit })) || []; },
      async sendFeedback(row) { need(await sb.from('feedback').insert({ ...row, user_id: uid })); },
      async deleteAccount() { need(await sb.rpc('delete_my_account')); try { await sb.auth.signOut({ scope: 'local' }); } catch (e) { /* session already invalid */ } uid = null; },
      classes: {
        async mine() { return need(await sb.rpc('my_classes')) || { teaching: [], joined: [] }; },
        async create(name, jlpt) { return need(await sb.rpc('class_create', { p_name: name, p_jlpt: jlpt })); },
        async join(code) { return need(await sb.rpc('class_join', { p_code: code })); },
        async leave(id) { need(await sb.rpc('class_leave', { p_class: id })); },
        async roster(id) { return need(await sb.rpc('class_roster', { p_class: id })); },
        async setHomework(id, station, note, due) { return need(await sb.rpc('class_homework_set', { p_class: id, p_station: station, p_note: note || null, p_due: due || null })); },
        async removeHomework(hid) { need(await sb.rpc('class_homework_remove', { p_id: hid })); },
        async removeMember(id, key) { need(await sb.rpc('class_remove_member', { p_class: id, p_member: key })); },
        async remove(id) { need(await sb.rpc('class_delete', { p_class: id })); },
        async view(id) { return need(await sb.rpc('class_view', { p_class: id })); },
        async postAdd(id, body, parent) { return need(await sb.rpc('class_post_add', { p_class: id, p_body: body, p_parent: parent || null })); },
        async postRemove(pid) { need(await sb.rpc('class_post_remove', { p_id: pid })); },
        async postPin(pid, on) { need(await sb.rpc('class_post_pin', { p_id: pid, p_on: !!on })); },
        async noteSet(id, key, note) { need(await sb.rpc('class_note_set', { p_class: id, p_member: key, p_note: note || '' })); },
        async nudge(id, key, message) { need(await sb.rpc('class_nudge_send', { p_class: id, p_member: key, p_message: message })); },
        async nudgeSeen(nid) { need(await sb.rpc('class_nudge_seen', { p_id: nid })); },
        async goalSet(id, title, xp, due) { return need(await sb.rpc('class_goal_set', { p_class: id, p_title: title, p_target_xp: xp, p_due: due || null })); },
        async goalRemove(gid) { need(await sb.rpc('class_goal_remove', { p_id: gid })); },
        async testSave(id, tid, title, questions, due) { return need(await sb.rpc('class_test_save', { p_class: id, p_id: tid || null, p_title: title, p_questions: questions, p_due: due || null })); },
        async testRemove(tid) { need(await sb.rpc('class_test_remove', { p_id: tid })); },
        async testTake(tid) { return need(await sb.rpc('class_test_take', { p_id: tid })); },
        async testSubmit(tid, answers) { return need(await sb.rpc('class_test_submit', { p_id: tid, p_answers: answers })); },
      },
      community: {
        async feed(o) { return need(await sb.rpc('community_feed', { p_category: o.category || null, p_sort: o.sort || 'hot', p_limit: o.limit || 30, p_offset: o.offset || 0, p_jlpt: o.jlpt || null })) || []; },
        async thread(id) { return need(await sb.rpc('community_thread', { p_post: id })); },
        async createPost(r) { return need(await sb.from('community_posts').insert({ author_id: uid, category: r.category, jlpt: r.jlpt || null, title: r.title, body: r.body, images: r.images || [] }).select('id').single()).id; },
        async updatePost(id, r) { need(await sb.from('community_posts').update({ category: r.category, jlpt: r.jlpt || null, title: r.title, body: r.body, images: r.images || [] }).eq('id', id)); },
        // pictures go to Storage under the member's own folder; the post keeps only the path
        async uploadImage(blob, ext) {
          const path = `${uid}/${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}.${ext}`;
          need(await sb.storage.from('community').upload(path, blob, { contentType: blob.type || 'image/jpeg', cacheControl: '31536000', upsert: false }));
          return path;
        },
        imageUrl: (path) => `${cfg.SUPABASE_URL}/storage/v1/object/public/community/${String(path).split('/').map(encodeURIComponent).join('/')}`,
        async notifications() { return need(await sb.rpc('community_notifications', { p_limit: 30 })) || []; },
        async members(sort) { return need(await sb.rpc('community_members', { p_sort: sort || 'kudos', p_limit: 100 })) || []; },
        async member(key) { return need(await sb.rpc('community_member', { p_key: key })); },
        async weeklyPrompt() { return need(await sb.rpc('community_weekly_prompt')); },
        async deletePost(id) { need(await sb.from('community_posts').delete().eq('id', id)); },
        async addComment(r) { need(await sb.from('community_comments').insert({ post_id: r.post_id, parent_id: r.parent_id || null, author_id: uid, body: r.body })); },
        async deleteComment(id) { need(await sb.from('community_comments').delete().eq('id', id)); },
        async like(o) { return need(await sb.rpc('community_like', { p_post: o.post || null, p_comment: o.comment || null })); },
        async report(r) { need(await sb.from('community_reports').insert({ reporter_id: uid, post_id: r.post || null, comment_id: r.comment || null, reason: r.reason })); },
        async moderate(kind, id, action) { need(await sb.rpc('community_moderate', { p_kind: kind, p_id: String(id), p_action: action })); },
        async unread() { return need(await sb.rpc('community_unread')) || 0; },
        async markSeen() { need(await sb.rpc('community_mark_seen')); },
        async reports() { return need(await sb.from('community_reports').select('*').eq('status', 'open').order('created_at', { ascending: false }).limit(100)) || []; },
        async resolveReport(id) { need(await sb.from('community_reports').update({ status: 'done' }).eq('id', id)); },
      },
      admin: {
        async all() {
          const since = new Date(Date.now() - 90 * 864e5).toISOString().slice(0, 10);
          const [profiles, days, logins, feedback] = await Promise.all([
            pages(() => sb.from('profiles').select('*').order('created_at', { ascending: false })),
            pages(() => sb.from('daily_activity').select('user_id, day, answers, correct, xp, secs').gte('day', since).order('day', { ascending: false })),
            sb.from('login_events').select('*').order('created_at', { ascending: false }).limit(500).then(need),
            sb.from('feedback').select('*').order('created_at', { ascending: false }).limit(300).then(need),
          ]);
          return { profiles, days, logins, feedback };
        },
        async user(id) {
          const [days, logins] = await Promise.all([
            sb.from('daily_activity').select('day, answers, correct, xp, secs').eq('user_id', id).order('day', { ascending: false }).limit(400).then(need),
            sb.from('login_events').select('*').eq('user_id', id).order('created_at', { ascending: false }).limit(60).then(need),
          ]);
          return { days, logins };
        },
        async setHidden(id, hidden) { need(await sb.rpc('admin_set_hidden', { p_user: id, p_hidden: hidden })); },
        async setFeedbackStatus(id, status) { need(await sb.from('feedback').update({ status }).eq('id', id)); },
      },
    };
  }

  // ---------------------------------------------------------------- demo backend (this browser only)
  function demoBackend() {
    const KEY = 'minna-demo-db';
    const dayStr = ML.dayStr;
    const iso = (ms) => new Date(ms).toISOString();
    function seed() {
      const r = ML.rng(20261110);
      const names = ['Aiko', 'Kenji', 'Mina', 'Ravi', 'Sofia', 'Hiro', 'Lena', 'Tomás', 'Yuki', 'Priya', 'Noah', 'Emi', 'Arjun', 'Chloe', 'Daichi', 'Sakura91', 'Felix', 'Hana'];
      const hats = ['cap', 'sakura', 'hachimaki', 'straw', 'kitsune', 'crown'], accs = ['none', 'bell', 'bow', 'scarf'];
      const skins = ['skin-sakura', 'skin-matcha', 'skin-sora', 'skin-ajisai', 'skin-yuzu', 'skin-momiji'];
      const jl = ['N5', 'N5', 'N5', 'N4', 'N4', 'N3', 'N2', 'N1'];
      const db = { users: {}, session: null, profiles: {}, progress: {}, days: {}, logins: [], feedback: [], nextId: 1 };
      names.forEach((nm, i) => {
        const id = 'demo-' + (i + 1), xp = Math.round(42000 * Math.pow(0.78, i) * (0.8 + r() * 0.4)), lvl = Math.floor(Math.sqrt(xp / 60)) + 1;
        const joined = Date.now() - (5 + Math.floor(r() * 60)) * 864e5, active = r() > 0.2;
        const answers = Math.round(xp / 9), streak = active ? 1 + Math.floor(r() * 40) : 0;
        db.profiles[id] = {
          id, email: nm.toLowerCase() + '@example.com', display_name: nm, is_public: i !== 4, hidden: false,
          avatar: { hat: hats[Math.floor(r() * hats.length)], acc: accs[Math.floor(r() * accs.length)], skin: skins[Math.floor(r() * skins.length)] },
          start_level: 'new', jlpt: jl[Math.floor(r() * jl.length)], xp, user_level: lvl, rank_name: ML.rank(lvl)[3], streak, best_streak: streak + Math.floor(r() * 10),
          last_study_day: dayStr(new Date(Date.now() - (active ? 0 : 6) * 864e5)), stamps: Math.min(60, Math.floor(lvl * 1.4)), trophies: Math.min(30, Math.floor(lvl / 2)), stickers: Math.floor(r() * 20),
          items_seen: Math.round(answers / 4), words_mastered: Math.round(answers / 14), kanji_mastered: Math.round(answers / 60), grammar_mastered: Math.round(answers / 40),
          answers, correct: Math.round(answers * (0.7 + r() * 0.25)), study_secs: answers * 9, days_studied: 5 + Math.floor(r() * 50), coins: Math.floor(r() * 3000), summary: {},
          timezone: ['Asia/Kolkata', 'America/New_York', 'Europe/Berlin', 'Asia/Tokyo', 'Pacific/Honolulu'][Math.floor(r() * 5)], locale: 'en-US', platform: ['iPhone', 'MacIntel', 'Win32', 'Android'][Math.floor(r() * 4)],
          user_agent: 'Demo browser', screen: '390x844@3', referrer: null, app_version: VERSION, login_count: 3 + Math.floor(r() * 40),
          last_login_at: iso(Date.now() - Math.floor(r() * 5) * 864e5), last_seen_at: iso(Date.now() - (active ? r() * 20 * 36e5 : (3 + r() * 9) * 864e5)), created_at: iso(joined), updated_at: iso(Date.now()),
        };
        db.days[id] = {};
        for (let d = 0; d < 30; d++) {
          if (r() < (active ? 0.75 : 0.25)) { const a = 10 + Math.floor(r() * 120); db.days[id][dayStr(new Date(Date.now() - d * 864e5))] = { answers: a, correct: Math.round(a * 0.8), xp: a * 11, secs: a * 9 }; }
        }
        db.logins.push({ id: db.nextId++, user_id: id, email: db.profiles[id].email, event: 'login', timezone: db.profiles[id].timezone, platform: db.profiles[id].platform, locale: 'en-US', screen: '390x844@3', user_agent: 'Demo browser', app_version: VERSION, created_at: db.profiles[id].last_login_at });
      });
      db.feedback.push({ id: db.nextId++, user_id: 'demo-2', email: 'kenji@example.com', display_name: 'Kenji', kind: 'idea', message: 'Could the sprint have a kanji-only mode?', page: 'home', app_version: VERSION, status: 'new', created_at: iso(Date.now() - 2 * 864e5) });
      db.feedback.push({ id: db.nextId++, user_id: 'demo-3', email: 'mina@example.com', display_name: 'Mina', kind: 'love', message: 'The yokai battles are so cute. Studying every day now!', page: 'station', app_version: VERSION, status: 'new', created_at: iso(Date.now() - 864e5) });
      return db;
    }
    function seedCommunity(db) {
      const ago = (h) => iso(Date.now() - h * 36e5);
      let pid = 1, cid = 1;
      const post = (author, category, jlpt, title, body, h, likes, pinned) => ({ id: pid++, author_id: author, category, jlpt, title, body, like_count: likes, comment_count: 0, pinned: !!pinned, locked: false, hidden: false, created_at: ago(h), updated_at: ago(h), last_activity_at: ago(h) });
      db.cposts = [
        post('demo-1', 'news', null, 'Welcome to the ひろば', 'This is the station plaza: a place to ask questions, share wins and swap study tips.\n\nThree house rules: be kind, stay on Japanese, and no spoilers for the yokai battles.', 70, 14, true),
        post('demo-4', 'question', 'N5', 'When do I use は and when が?', 'I keep mixing them up in the Lesson 9 drills. わたしは すしが すきです makes sense, but why not すしは?\n\nIs there a rule of thumb that works most of the time?', 5, 9),
        post('demo-2', 'win', 'N4', 'Passed the N4 mock exam on my third try', 'Stuck at 58% twice, then spent a week on nothing but the Verb Forge and weak spots. 71% today. The umbrella yokai never stood a chance.', 9, 21),
        post('demo-7', 'tips', null, 'What finally made kanji stick for me', '1. Write each new kanji five times on the handwriting pad before the quiz.\n2. Do the review pile first thing in the morning, before anything new.\n3. Say the reading out loud. Sounds silly, works.\n\nMore here: https://kanjivg.tagaini.net', 26, 17),
        post('demo-9', 'intro', 'N5', 'こんにちは from Berlin', 'Started two weeks ago because I am visiting Osaka in spring. Kana are done, Lesson 3 is next. Anyone else brand new?', 31, 6),
        post('demo-5', 'lounge', null, 'Which hat is your Mochi wearing?', 'Saved up for the fox mask and I have no regrets. Show me your conductors.', 44, 8),
        post('demo-3', 'question', 'N3', 'ようにする vs ことにする', 'The N3 unit 7 drills treat these as different but my textbook explains them almost the same way. Can someone give two example sentences where swapping them changes the meaning?', 50, 4),
      ];
      const com = (post, author, body, h, parent) => ({ id: cid++, post_id: post, parent_id: parent || null, author_id: author, body, like_count: 0, hidden: false, created_at: ago(h) });
      db.ccomments = [
        com(2, 'demo-2', 'は sets the topic, が points at the thing the feeling or ability is about. With すき, わかる, ある the thing you like/understand/have takes が.', 4.5),
        com(2, 'demo-6', 'The Guidebook → Particles page has a table for exactly this. It cleared it up for me.', 4),
        com(2, 'demo-4', 'That helps, thank you! Off to the particle dojo.', 3.5, 1),
        com(3, 'demo-8', 'おめでとう！ Third try for me too.', 8),
        com(4, 'demo-9', 'Number 3 is so true. My neighbours think I am rehearsing a play.', 20),
        com(5, 'demo-1', 'ようこそ！ You will love Osaka. Learn おおきに before you go.', 30),
        com(6, 'demo-7', 'Straw hat forever.', 40),
      ];
      for (const c of db.ccomments) { const p = db.cposts.find((x) => x.id === c.post_id); p.comment_count++; }
      db.clikes = {}; db.creports = [];
      return db;
    }
    const read = () => { let db; try { db = JSON.parse(ls.get(KEY)) || seed(); } catch (e) { db = seed(); } if (!db.cposts) seedCommunity(db); return db; };
    const write = (db) => ls.set(KEY, JSON.stringify(db));
    const sha = async (t) => {
      try { const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('minna:' + t)); return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, '0')).join(''); } catch (e) { return 'h' + ML.hashStr(t); }
    };
    const wait = (ms = 250) => new Promise((res) => setTimeout(res, ms));
    const byId = (db, id) => Object.values(db.users).find((u) => u.id === id);
    let uid = null;
    return {
      kind: 'demo',
      async session() { const db = read(); const u = db.session && byId(db, db.session); uid = u ? u.id : null; return u ? { id: u.id, email: u.email } : null; },
      onAuth() { /* single tab */ },
      async signUp(email, password, meta) {
        await wait();
        const db = read(), key = email.toLowerCase();
        if (db.users[key]) throw new Error('User already registered');
        const id = 'me-' + db.nextId++;
        db.users[key] = { id, email: key, pw: await sha(password) }; db.session = id;
        db.profiles[id] = {
          id, email: key, display_name: (meta.display_name || key.split('@')[0]).slice(0, 24), is_public: meta.is_public !== false, hidden: false, avatar: {}, start_level: meta.start_level || null,
          jlpt: meta.jlpt || 'N5', xp: 0, user_level: 1, rank_name: 'Local', streak: 0, best_streak: 0, last_study_day: null, stamps: 0, trophies: 0, stickers: 0, items_seen: 0, words_mastered: 0, kanji_mastered: 0,
          grammar_mastered: 0, answers: 0, correct: 0, study_secs: 0, days_studied: 0, coins: 0, summary: {}, login_count: 0, last_login_at: null, last_seen_at: iso(Date.now()), created_at: iso(Date.now()), updated_at: iso(Date.now()),
        };
        db.days[id] = {}; write(db); uid = id;
        return { user: { id, email: key }, needsConfirm: false };
      },
      async signIn(email, password) {
        await wait();
        const db = read(), u = db.users[email.toLowerCase()];
        if (!u || u.pw !== await sha(password)) throw new Error('Invalid login credentials');
        db.session = u.id; write(db); uid = u.id;
        return { id: u.id, email: u.email };
      },
      async signOut() { const db = read(); db.session = null; write(db); uid = null; },
      async sendReset() { await wait(); },
      async setPassword(password) { const db = read(); byId(db, uid).pw = await sha(password); write(db); },
      async logLogin(event, meta) {
        const db = read(), p = db.profiles[uid];
        meta = { ...meta }; delete meta.display_name;
        if (event !== 'ping') {
          db.logins.unshift({ id: db.nextId++, user_id: uid, email: p.email, event: p.login_count ? event : 'signup', ...meta, created_at: iso(Date.now()) });
          Object.assign(p, meta, { login_count: p.login_count + 1, last_login_at: iso(Date.now()) });
        }
        p.last_seen_at = iso(Date.now()); write(db);
        return { admin: true, profile: { ...p } };
      },
      async loadProgress() { return read().progress[uid] || null; },
      async saveProgress(data, ts) { const db = read(); db.progress[uid] = { data: JSON.parse(JSON.stringify(data)), client_ts: ts, updated_at: iso(Date.now()) }; write(db); },
      async saveProfile(fields) { const db = read(); Object.assign(db.profiles[uid], fields, { last_seen_at: iso(Date.now()), updated_at: iso(Date.now()) }); write(db); },
      async saveDays(rows) { const db = read(); db.days[uid] = db.days[uid] || {}; for (const r of rows) db.days[uid][r.day] = { answers: r.answers, correct: r.correct, xp: r.xp, secs: r.secs }; write(db); },
      async leaderboard(board, limit) {
        await wait(120);
        const db = read(), monday = new Date(); monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7)); const m = dayStr(monday), today = dayStr();
        const rows = Object.values(db.profiles).filter((p) => (p.is_public && !p.hidden) || p.id === uid).map((p) => {
          const wxp = Object.entries(db.days[p.id] || {}).filter(([d]) => d >= m).reduce((a, [, v]) => a + (v.xp || 0), 0);
          const live = p.last_study_day && ML.DAY * 2 >= new Date(today) - new Date(p.last_study_day) ? p.streak : 0;
          return { display_name: p.display_name, avatar: p.avatar, jlpt: p.jlpt, user_level: p.user_level, rank_name: p.rank_name, streak: live, stamps: p.stamps, xp: p.xp,
            score: board === 'week' ? wxp : board === 'streak' ? live : board === 'words' ? p.words_mastered : p.xp, is_me: p.id === uid };
        }).sort((a, b) => b.score - a.score || b.xp - a.xp);
        rows.forEach((x, i) => { x.pos = i + 1; x.total = rows.length; });
        return rows.filter((x) => x.pos <= limit || x.is_me);
      },
      async sendFeedback(row) { await wait(); const db = read(); db.feedback.unshift({ id: db.nextId++, user_id: uid, status: 'new', created_at: iso(Date.now()), ...row }); write(db); },
      async deleteAccount() { const db = read(), u = byId(db, uid); if (u) delete db.users[u.email]; delete db.profiles[uid]; delete db.progress[uid]; delete db.days[uid]; db.logins = db.logins.filter((l) => l.user_id !== uid); db.session = null; write(db); uid = null; },
      classes: (() => {
        const init = (db) => {
          if (db.classes) return db;
          // one sample class taught by a demo teacher, so a new demo account can join with code MOCHI2
          db.classes = [{ id: 'c-demo', teacher_id: 'demo-1', name: 'Saturday N5 with Aiko', code: 'MOCHI2', jlpt: 'N5', created_at: iso(Date.now() - 20 * 864e5), members: ['demo-4', 'demo-6', 'demo-9'], homework: [{ id: 1, station_id: 'L1', note: 'Beat the yokai before Saturday', due: dayStr(new Date(Date.now() + 3 * 864e5)), created_at: iso(Date.now() - 864e5) }, { id: 2, station_id: 'L2', note: null, due: null, created_at: iso(Date.now()) }] }];
          return db;
        };
        const student = (db, id) => { const p = db.profiles[id] || {}; const week = Object.entries(db.days[id] || {}).filter(([d]) => d >= dayStr(new Date(Date.now() - 6 * 864e5))).reduce((a, [, v]) => ({ answers: a.answers + v.answers, correct: a.correct + v.correct, xp: a.xp + v.xp, secs: a.secs + v.secs, days: a.days + 1 }), { answers: 0, correct: 0, xp: 0, secs: 0, days: 0 });
          const stamps = id === uid ? (db.progress[uid] && db.progress[uid].data.stamps) || {} : Object.fromEntries(['L0', 'L1', 'L2', 'L3'].slice(0, (p.user_level || 1) % 5).map((k) => [k, { date: '2026.11.01', score: 80 + ((p.user_level || 1) % 20) }]));
          return { key: id, name: p.display_name || 'Conductor', avatar: p.avatar || {}, jlpt: p.jlpt, level: p.user_level || 1, rank: p.rank_name, xp: p.xp || 0, streak: p.streak || 0, answers: p.answers || 0, correct: p.correct || 0, study_secs: p.study_secs || 0, words: p.words_mastered || 0, kanji: p.kanji_mastered || 0, last_seen_at: p.last_seen_at, readiness: (p.summary || {}).readiness || null, stamps, week }; };
        return {
          async mine() { await wait(120); const db = init(read()); write(db); return { teaching: db.classes.filter((c) => c.teacher_id === uid).map((c) => ({ id: c.id, name: c.name, code: c.code, jlpt: c.jlpt, students: c.members.length, homework: c.homework.length })), joined: db.classes.filter((c) => c.members.includes(uid)).map((c) => ({ id: c.id, name: c.name, jlpt: c.jlpt, teacher: (db.profiles[c.teacher_id] || {}).display_name, homework: c.homework })) }; },
          async create(name, jlpt) { await wait(); const db = init(read()); const code = Array.from({ length: 6 }, () => 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'[Math.floor(Math.random() * 31)]).join(''); const id = 'c-' + db.nextId++; db.classes.push({ id, teacher_id: uid, name, code, jlpt, created_at: iso(Date.now()), members: ['demo-2', 'demo-5', 'demo-8', 'demo-10'], homework: [] }); write(db); return { id, code }; },
          async join(code) { await wait(); const db = init(read()), c = db.classes.find((x) => x.code === String(code).toUpperCase().replace(/[^A-Z0-9]/g, '')); if (!c) throw new Error('No class has that code. Check it with your teacher.'); if (c.teacher_id === uid) throw new Error('This is your own class.'); if (!c.members.includes(uid)) c.members.push(uid); write(db); return { id: c.id, name: c.name, teacher: (db.profiles[c.teacher_id] || {}).display_name }; },
          async leave(id) { const db = init(read()), c = db.classes.find((x) => x.id === id); if (c) c.members = c.members.filter((m) => m !== uid); write(db); },
          async roster(id) { await wait(150); const db = init(read()), c = db.classes.find((x) => x.id === id && x.teacher_id === uid); if (!c) return null; return { id: c.id, name: c.name, code: c.code, jlpt: c.jlpt, created_at: c.created_at, homework: c.homework, students: c.members.map((m) => student(db, m)) }; },
          async setHomework(id, station, note, due) { const db = init(read()), c = db.classes.find((x) => x.id === id); c.homework.push({ id: db.nextId++, station_id: station, note: note || null, due: due || null, created_at: iso(Date.now()) }); write(db); },
          async removeHomework(hid) { const db = init(read()); for (const c of db.classes) c.homework = c.homework.filter((h) => h.id !== hid); write(db); },
          async removeMember(id, key) { const db = init(read()), c = db.classes.find((x) => x.id === id); c.members = c.members.filter((m) => m !== key); write(db); },
          async remove(id) { const db = init(read()); db.classes = db.classes.filter((c) => c.id !== id); write(db); },
          // ---- class life (demo): board, noticeboard, notes, nudges, goals, tests
          ...(() => {
            const norm = (t) => String(t || '').toLowerCase().replace(/[\s\u3000\u3002\uff0e.\u3001,\uff01!\uff1f?]+/g, '');
            const cls = (db, id) => {
              const c = db.classes.find((x) => x.id === id);
              if (!c) return c;
              const demo = c.id === 'c-demo';
              c.posts = c.posts || (demo ? [{ id: 9001, author_id: 'demo-1', parent_id: null, body: 'Welcome to the class! Saturday\'s test covers stations 01 and 02.', pinned: true, created_at: iso(Date.now() - 2 * 864e5) }, { id: 9002, author_id: 'demo-4', parent_id: 9001, body: 'Thank you, sensei!', pinned: false, created_at: iso(Date.now() - 864e5) }] : []);
              c.notes = c.notes || {}; c.nudges = c.nudges || [];
              c.goals = c.goals || (demo ? [{ id: 9101, title: '5,000 XP together this week', target_xp: 5000, due: dayStr(new Date(Date.now() + 4 * 864e5)), created_at: iso(Date.now() - 2 * 864e5) }] : []);
              c.tests = c.tests || (demo ? [{ id: 9201, title: 'Week 1 class test', due: null, created_at: iso(Date.now()), results: {}, questions: [{ q: 'As a particle, the kana "ha" is read…', answer: 'wa', wrong: ['ha', 'wo'] }, { q: 'Which one means "thank you"?', answer: 'arigatou', wrong: ['sumimasen', 'konnichiwa', 'sayounara'] }, { q: 'Type in romaji: "good morning"', answer: 'ohayou', wrong: [] }] }] : []);
              return c;
            };
            const all = (db) => { db.classes.forEach((c) => cls(db, c.id)); return db.classes; };
            const wxp = (db, m) => Object.entries(db.days[m] || {}).filter(([d]) => d >= dayStr(new Date(Date.now() - 6 * 864e5))).reduce((a, [, v]) => a + (v.xp || 0), 0);
            return {
              async view(id) {
                await wait(150);
                const db = init(read()), c = cls(db, id); if (!c) return null;
                const role = c.teacher_id === uid ? 'teacher' : c.members.includes(uid) ? 'student' : null; if (!role) return null;
                write(db);
                const prof = (x) => db.profiles[x] || {};
                return { role, id: c.id, name: c.name, jlpt: c.jlpt, code: role === 'teacher' ? c.code : null, teacher: prof(c.teacher_id).display_name,
                  board: c.members.map((m) => ({ name: prof(m).display_name || 'Conductor', avatar: prof(m).avatar || {}, level: prof(m).user_level || 1, rank: prof(m).rank_name, streak: prof(m).streak || 0, week_xp: wxp(db, m), is_me: m === uid })).sort((a, b) => b.week_xp - a.week_xp),
                  goals: c.goals.map((g) => ({ ...g, xp: c.members.reduce((a, m) => a + wxp(db, m), 0) })),
                  tests: c.tests.map((t) => ({ id: t.id, title: t.title, due: t.due, n: t.questions.length, mine: t.results[uid] || null, results: role === 'teacher' ? t.results : null })),
                  feed: c.posts.map((p) => ({ ...p, author_id: undefined, author_name: prof(p.author_id).display_name || 'Conductor', author_avatar: prof(p.author_id).avatar || {}, is_teacher: p.author_id === c.teacher_id, is_mine: p.author_id === uid })),
                  nudges: role === 'student' ? c.nudges.filter((n) => n.user_id === uid && !n.seen) : null, notes: role === 'teacher' ? c.notes : null };
              },
              async postAdd(id, body, parent) { const db = init(read()), c = cls(db, id), par = parent ? c.posts.find((p) => p.id === +parent) : null; c.posts.push({ id: db.nextId++, author_id: uid, parent_id: par ? par.parent_id || par.id : null, body, pinned: false, created_at: iso(Date.now()) }); write(db); },
              async postRemove(pid) { const db = init(read()); for (const c of all(db)) c.posts = c.posts.filter((p) => p.id !== +pid && p.parent_id !== +pid); write(db); },
              async postPin(pid, on) { const db = init(read()); for (const c of all(db)) for (const p of c.posts) if (p.id === +pid) p.pinned = !!on; write(db); },
              async noteSet(id, key, note) { const db = init(read()), c = cls(db, id); if (note) c.notes[key] = note; else delete c.notes[key]; write(db); },
              async nudge(id, key, message) { const db = init(read()), c = cls(db, id); c.nudges.push({ id: db.nextId++, user_id: key, message, seen: false, created_at: iso(Date.now()) }); write(db); },
              async nudgeSeen(nid) { const db = init(read()); for (const c of all(db)) for (const n of c.nudges) if (n.id === +nid) n.seen = true; write(db); },
              async goalSet(id, title, xp, due) { const db = init(read()), c = cls(db, id); c.goals.push({ id: db.nextId++, title, target_xp: xp, due: due || null, created_at: iso(Date.now()) }); write(db); },
              async goalRemove(gid) { const db = init(read()); for (const c of all(db)) c.goals = c.goals.filter((g) => g.id !== +gid); write(db); },
              async testSave(id, tid, title, questions, due) { const db = init(read()), c = cls(db, id), clean = questions.map((q) => ({ q: q.q, answer: q.answer, wrong: (q.wrong || []).filter(Boolean).slice(0, 3) })), t = tid && c.tests.find((x) => x.id === +tid); if (t) Object.assign(t, { title, questions: clean, due: due || null }); else c.tests.push({ id: db.nextId++, title, questions: clean, due: due || null, created_at: iso(Date.now()), results: {} }); write(db); },
              async testRemove(tid) { const db = init(read()); for (const c of all(db)) c.tests = c.tests.filter((t) => t.id !== +tid); write(db); },
              async testTake(tid) { const db = init(read()), c = all(db).find((x) => x.tests.some((t) => t.id === +tid)); if (!c) return null; const t = c.tests.find((x) => x.id === +tid), role = c.teacher_id === uid ? 'teacher' : 'student'; return role === 'teacher' ? { id: t.id, title: t.title, due: t.due, role, questions: t.questions } : { id: t.id, title: t.title, due: t.due, role, questions: t.questions.map((q) => ({ q: q.q, options: q.wrong.length ? ML.shuffle([q.answer, ...q.wrong]) : null })) }; },
              async testSubmit(tid, answers) { const db = init(read()), c = all(db).find((x) => x.tests.some((t) => t.id === +tid)), t = c.tests.find((x) => x.id === +tid); const review = t.questions.map((q, i) => ({ q: q.q, correct: q.answer, yours: answers[i] || '', ok: norm(q.answer) === norm(answers[i]) })); const score = review.filter((x) => x.ok).length; t.results[uid] = { score, total: review.length, attempts: ((t.results[uid] || {}).attempts || 0) + 1 }; write(db); return { score, total: review.length, review }; },
            };
          })(),
        };
      })(),
      community: (() => {
        const author = (db, id) => { const p = db.profiles[id] || {}; return { author_key: p.is_public === false ? null : id, author_name: p.display_name || 'Conductor', author_avatar: p.avatar || {}, author_level: p.user_level || 1, author_rank: p.rank_name || null, author_jlpt: p.jlpt || null, author_staff: id === 'demo-1' || id === uid }; };
        const lk = (kind, id) => `${uid}|${kind}|${id}`;
        return {
          async feed(o) {
            await wait(150);
            const db = read(), now = Date.now();
            const hot = (c) => (c.like_count * 2 + c.comment_count * 3 + 1) / Math.pow((now - new Date(c.created_at)) / 36e5 + 2, 1.3);
            let rows = db.cposts.filter((c) => (!c.hidden || c.author_id === uid) && (!o.category || c.category === o.category) && (!o.jlpt || c.jlpt === o.jlpt));
            rows.sort((a, b) => (b.pinned - a.pinned) || (o.sort === 'new' ? new Date(b.created_at) - new Date(a.created_at) : o.sort === 'top' ? b.like_count - a.like_count : hot(b) - hot(a)));
            return rows.slice(0, o.limit || 30).map((c) => ({ ...c, excerpt: c.body.slice(0, 320), body: undefined, author_id: undefined, ...author(db, c.author_id), is_mine: c.author_id === uid, liked: !!db.clikes[lk('p', c.id)] }));
          },
          async thread(id) {
            await wait(150);
            const db = read(), c = db.cposts.find((x) => x.id === +id);
            if (!c) return null;
            return { post: { ...c, ...author(db, c.author_id), is_mine: c.author_id === uid, liked: !!db.clikes[lk('p', c.id)] },
              comments: db.ccomments.filter((m) => m.post_id === c.id).map((m) => ({ ...m, author_id: undefined, ...author(db, m.author_id), is_op: m.author_id === c.author_id, is_mine: m.author_id === uid, liked: !!db.clikes[lk('c', m.id)] })) };
          },
          async uploadImage(blob) { return await new Promise((res, rej) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.onerror = rej; fr.readAsDataURL(blob); }); },
          imageUrl: (path) => path,
          async notifications() { const db = read(); const mine = new Set(db.cposts.filter((c) => c.author_id === uid).map((c) => c.id)); const seen = db.cseen && db.cseen[uid] ? new Date(db.cseen[uid]).getTime() : 0;
            return db.ccomments.filter((m) => mine.has(m.post_id) && m.author_id !== uid).sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 30).map((m) => ({ comment_id: m.id, post_id: m.post_id, post_title: db.cposts.find((c) => c.id === m.post_id).title, excerpt: m.body.slice(0, 160), created_at: m.created_at, ...author(db, m.author_id), is_new: new Date(m.created_at).getTime() > seen })); },
          async members(sort) { await wait(150); const db = read(); return Object.values(db.profiles).filter((p) => p.is_public && !p.hidden).map((p) => ({ member_key: p.id, display_name: p.display_name, avatar: p.avatar, jlpt: p.jlpt, user_level: p.user_level, rank_name: p.rank_name, streak: p.streak, kudos: p.kudos || Math.round((p.xp || 0) / 900), posts: db.cposts.filter((c) => c.author_id === p.id).length, bio: p.bio || null, joined: (p.created_at || '').slice(0, 10), staff: p.id === 'demo-1' || p.id === uid })).sort((a, b) => (sort === 'level' ? b.user_level - a.user_level : sort === 'new' ? (a.joined < b.joined ? 1 : -1) : b.kudos - a.kudos)); },
          async member(key) { await wait(150); const db = read(), p = db.profiles[key]; if (!p) return null; return { member_key: p.id, display_name: p.display_name, avatar: p.avatar, jlpt: p.jlpt, user_level: p.user_level, rank_name: p.rank_name, streak: p.streak, best_streak: p.best_streak, kudos: p.kudos || Math.round((p.xp || 0) / 900), stamps: p.stamps, trophies: p.trophies, words_mastered: p.words_mastered, kanji_mastered: p.kanji_mastered, xp: p.xp, bio: p.bio || null, joined: (p.created_at || '').slice(0, 10), is_me: p.id === uid, staff: p.id === 'demo-1', posts: db.cposts.filter((c) => c.author_id === p.id).map((c) => ({ id: c.id, category: c.category, jlpt: c.jlpt, title: c.title, like_count: c.like_count, comment_count: c.comment_count, created_at: c.created_at })) }; },
          async weeklyPrompt() { const db = read(); if (db.cposts.some((c) => c.category === 'prompt')) return null; const t = iso(Date.now() - 2 * 36e5), id = Math.max(0, ...db.cposts.map((x) => x.id)) + 1; db.cposts.push({ id, author_id: 'demo-1', category: 'prompt', jlpt: null, title: 'This week: What did you eat today?', body: 'Describe one meal in Japanese. Bonus points for a counter word. きょう、なにを たべましたか。', images: [], like_count: 5, comment_count: 0, pinned: true, locked: false, hidden: false, created_at: t, updated_at: t, last_activity_at: t }); write(db); return id; },
          async createPost(r) { await wait(); const db = read(), id = Math.max(0, ...db.cposts.map((x) => x.id)) + 1, t = iso(Date.now()); db.cposts.push({ id, author_id: uid, category: r.category, jlpt: r.jlpt || null, title: r.title, body: r.body, images: r.images || [], like_count: 0, comment_count: 0, pinned: false, locked: false, hidden: false, created_at: t, updated_at: t, last_activity_at: t }); write(db); return id; },
          async updatePost(id, r) { const db = read(), c = db.cposts.find((x) => x.id === +id); Object.assign(c, { category: r.category, jlpt: r.jlpt || null, title: r.title, body: r.body, images: r.images || [], updated_at: iso(Date.now()) }); write(db); },
          async deletePost(id) { const db = read(); db.cposts = db.cposts.filter((x) => x.id !== +id); db.ccomments = db.ccomments.filter((m) => m.post_id !== +id); write(db); },
          async addComment(r) {
            await wait();
            const db = read(), c = db.cposts.find((x) => x.id === +r.post_id), par = r.parent_id ? db.ccomments.find((m) => m.id === +r.parent_id) : null;
            if (c.locked) throw new Error('This post is closed to new comments.');
            db.ccomments.push({ id: Math.max(0, ...db.ccomments.map((x) => x.id)) + 1, post_id: c.id, parent_id: par ? par.parent_id || par.id : null, author_id: uid, body: r.body, like_count: 0, hidden: false, created_at: iso(Date.now()) });
            c.comment_count++; c.last_activity_at = iso(Date.now()); write(db);
          },
          async deleteComment(id) { const db = read(), m = db.ccomments.find((x) => x.id === +id); if (!m) return; const gone = db.ccomments.filter((x) => x.id === m.id || x.parent_id === m.id); db.ccomments = db.ccomments.filter((x) => !gone.includes(x)); const c = db.cposts.find((x) => x.id === m.post_id); if (c) c.comment_count = Math.max(0, c.comment_count - gone.length); write(db); },
          async like(o) {
            const db = read(), kind = o.post ? 'p' : 'c', id = o.post || o.comment, row = (kind === 'p' ? db.cposts : db.ccomments).find((x) => x.id === +id), k = lk(kind, id);
            const liked = !db.clikes[k];
            if (liked) db.clikes[k] = 1; else delete db.clikes[k];
            row.like_count = Math.max(0, row.like_count + (liked ? 1 : -1)); write(db);
            return { liked, count: row.like_count };
          },
          async report(r) { const db = read(); db.creports.push({ id: db.nextId++, reporter_id: uid, post_id: r.post || null, comment_id: r.comment || null, reason: r.reason, status: 'open', created_at: iso(Date.now()) }); write(db); },
          async moderate(kind, id, action) {
            const db = read();
            if (kind === 'post') { if (action === 'delete') { db.cposts = db.cposts.filter((x) => x.id !== +id); db.ccomments = db.ccomments.filter((m) => m.post_id !== +id); } else { const c = db.cposts.find((x) => x.id === +id); if (c) Object.assign(c, { pin: { pinned: true }, unpin: { pinned: false }, lock: { locked: true }, unlock: { locked: false }, hide: { hidden: true }, show: { hidden: false } }[action] || {}); } }
            else if (kind === 'comment') db.ccomments = db.ccomments.filter((x) => x.id !== +id && x.parent_id !== +id);
            write(db);
          },
          async unread() { const db = read(); const mine = new Set(db.cposts.filter((c) => c.author_id === uid).map((c) => c.id)); const seen = db.cseen && db.cseen[uid] ? new Date(db.cseen[uid]).getTime() : 0; return db.ccomments.filter((m) => mine.has(m.post_id) && m.author_id !== uid && new Date(m.created_at).getTime() > seen).length; },
          async markSeen() { const db = read(); db.cseen = db.cseen || {}; db.cseen[uid] = iso(Date.now()); write(db); },
          async reports() { return read().creports.filter((r) => r.status === 'open'); },
          async resolveReport(id) { const db = read(); const r = db.creports.find((x) => x.id === id); if (r) r.status = 'done'; write(db); },
        };
      })(),
      admin: {
        async all() {
          await wait();
          const db = read();
          return { profiles: Object.values(db.profiles), days: Object.entries(db.days).flatMap(([id, ds]) => Object.entries(ds).map(([day, v]) => ({ user_id: id, day, ...v }))), logins: db.logins.slice(0, 500), feedback: db.feedback };
        },
        async user(id) { const db = read(); return { days: Object.entries(db.days[id] || {}).map(([day, v]) => ({ day, ...v })).sort((a, b) => (a.day < b.day ? 1 : -1)), logins: db.logins.filter((l) => l.user_id === id).slice(0, 60) }; },
        async setHidden(id, hidden) { const db = read(); if (db.profiles[id]) db.profiles[id].hidden = hidden; write(db); },
        async setFeedbackStatus(id, status) { const db = read(); const f = db.feedback.find((x) => x.id === id); if (f) f.status = status; write(db); },
      },
    };
  }

  // ---------------------------------------------------------------- session + sync engine
  let be = null, user = null, profile = null, isAdmin = false, status = 'idle';
  let lastPush = 0, lastPull = 0, dirty = false, pushTimer = null, pushing = false, pulling = null, busy = false, pendingRecovery = false;
  // provisional: opened offline with a saved log-in we couldn't re-check yet. Study works from the local copy; sync resumes once online.
  let provisional = false;
  const saveProfileCache = () => { if (user && profile) ls.set('minna-line-profile', JSON.stringify({ id: user.id, email: user.email, display_name: profile.display_name, is_public: profile.is_public, created_at: profile.created_at, admin: isAdmin })); };
  const listeners = new Set();
  const emit = (what, data) => listeners.forEach((f) => { try { f(what, data); } catch (e) { console.error(e); } });
  const setStatus = (s) => { if (status !== s) { status = s; emit('status', s); } };

  // A cheap fingerprint of a saved game, to tell whether two copies differ.
  function sig(s) {
    if (!s) return '';
    let seen = 0, n = 0;
    for (const k in s.items || {}) { n++; seen += (s.items[k].ok || 0) + (s.items[k].bad || 0); }
    return [s.updatedAt || 0, s.xp || 0, s.coins || 0, n, seen, Object.keys(s.stamps || {}).length, Object.keys(s.trophies || {}).length, Object.keys(s.history || {}).length, (s.stats || {}).answers || 0].join('|');
  }
  function profileFields() {
    const S = ML.S, keys = Object.keys(S.items), cnt = (p) => keys.filter((k) => k.startsWith(p) && S.items[k].s >= 4).length, lv = ML.level();
    const f = {
      jlpt: S.settings.level || 'N5', avatar: { hat: S.equip.hat, acc: S.equip.acc, skin: S.equip.skin },
      xp: clamp(S.xp, 0, 1e8), user_level: lv, rank_name: ML.rank(lv)[3], streak: clamp(ML.liveStreak(), 0, 1e5), best_streak: clamp(Math.max(S.stats.bestStreak || 0, S.streak.days || 0), 0, 1e5),
      last_study_day: S.streak.last || null, stamps: Object.keys(S.stamps).length, trophies: Object.keys(S.trophies).length, stickers: Object.keys(S.stickers).length,
      items_seen: keys.length, words_mastered: cnt('v|'), kanji_mastered: cnt('j|'), grammar_mastered: cnt('g|'),
      answers: clamp(S.stats.answers, 0, 2e9), correct: clamp(S.stats.correct, 0, 2e9), study_secs: clamp(S.stats.secs, 0, 2e9), days_studied: Object.keys(S.history).length, coins: clamp(S.coins, -2e9, 2e9),
    };
    try { if (api.summaryFn) f.summary = api.summaryFn(); } catch (e) { /* summary is optional */ }
    return f;
  }
  function dayRows(n) {
    const S = ML.S, out = [];
    for (let i = 0; i < n; i++) {
      const d = ML.dayStr(new Date(Date.now() - i * ML.DAY)), a = S.history[d], x = (S.days || {})[d] || [0, 0, 0];
      if (a || x[1]) out.push({ day: d, answers: clamp(a, 0, 20000), correct: clamp(x[0], 0, 20000), xp: clamp(x[1], 0, 400000), secs: clamp(x[2], 0, 86400) });
    }
    return out;
  }
  function schedulePush() {
    if (!user || !be) return;
    dirty = true;
    if (provisional) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(() => pushNow(), Math.max(4000, 20000 - (Date.now() - lastPush)));
  }
  async function pushNow(allDays) {
    if (!user || !be || provisional) return false;
    if (pushing) { dirty = true; return false; }
    clearTimeout(pushTimer);
    pushing = true; dirty = false; setStatus('syncing');
    let ok = false;
    try {
      const S = ML.S;
      if (S.uid !== user.id) { S.uid = user.id; ML.saveLocal(); }
      const fields = profileFields();
      const res = await Promise.allSettled([be.saveProgress(S, S.updatedAt || Date.now()), be.saveProfile(fields), be.saveDays(dayRows(allDays ? 8 : 2))]);
      if (res[0].status === 'rejected') throw res[0].reason;
      res.slice(1).forEach((x) => { if (x.status === 'rejected') console.warn('Minna Line sync:', x.reason); });
      if (profile) Object.assign(profile, fields);
      lastPush = Date.now(); ok = true; setStatus('synced');
    } catch (e) {
      dirty = true; setStatus('offline');
      clearTimeout(pushTimer); pushTimer = setTimeout(() => pushNow(allDays), 30000);
    }
    pushing = false;
    if (ok && dirty) schedulePush();
    return ok;
  }
  // Fetch the account's saved game and join it with what this browser has.
  function pull(first) {
    if (!user || !be || provisional) return Promise.resolve(false);
    if (pulling) return pulling;
    pulling = (async () => {
      try {
        setStatus('syncing');
        const row = await be.loadProgress();
        lastPull = Date.now();
        if (ML.S.uid && ML.S.uid !== user.id) ML.wipeLocal(); // this browser last held someone else's game
        const before = sig(ML.S);
        let needPush = !row || !row.data;
        if (row && row.data && row.data.v === 1) {
          const merged = ML.mergeStates(ML.S, row.data);
          merged.uid = user.id;
          needPush = sig(merged) !== sig(row.data);
          if (sig(merged) !== before || ML.S.uid !== user.id) { ML.adopt(merged); ML.saveLocal(); if (sig(merged) !== before) emit('progress'); }
        } else if (ML.S.uid !== user.id) { ML.S.uid = user.id; ML.saveLocal(); }
        setStatus('synced');
        if (needPush || first) await pushNow(!!first);
        return true;
      } catch (e) { setStatus('offline'); return false; } finally { pulling = null; }
    })();
    return pulling;
  }
  // Runs after every sign-up, log-in, or return visit: record it, load the profile, sync progress.
  async function enter(event) {
    if (provisional || !user) return;
    let ev = event;
    if (ev === 'resume') {
      const mark = user.id + '|' + ML.dayStr();
      if (ls.get('minna-line-seen') === mark) ev = 'ping'; else ls.set('minna-line-seen', mark);
    } else ls.set('minna-line-seen', user.id + '|' + ML.dayStr());
    try {
      const meta = device();
      if (api.pendingName) meta.display_name = api.pendingName.slice(0, 24);
      const r = await be.logLogin(ev, meta);
      profile = (r && r.profile) || profile; isAdmin = !!(r && r.admin);
      saveProfileCache();
    } catch (e) { console.warn('Minna Line login log:', e); }
    await pull(true);
    emit('ready');
  }
  function cachedProfile() {
    try { const c = JSON.parse(ls.get('minna-line-profile')); if (c && user && c.id === user.id) { profile = profile || { ...c, email: user.email }; isAdmin = isAdmin || !!c.admin; } } catch (e) { /* ignore */ }
  }
  const boards = new Map();

  const api = {
    enabled, configured, demo, version: VERSION, requireLogin: enabled && cfg.REQUIRE_LOGIN !== false, nice, summaryFn: null, pendingName: '',
    get user() { return user; }, get profile() { return profile; }, get isAdmin() { return isAdmin; }, get status() { return status; }, get kind() { return be ? be.kind : 'none'; },
    get admin() { return be && be.admin; }, get recovering() { return pendingRecovery; }, get offlineSession() { return provisional; },
    on(fn) { listeners.add(fn); return () => listeners.delete(fn); },
    async init() {
      if (!enabled) return null;
      be = configured ? supabaseBackend() : demoBackend();
      be.onAuth((ev, u) => setTimeout(() => {
        if (ev === 'PASSWORD_RECOVERY') { pendingRecovery = true; emit('recovery'); }
        else if (u && provisional) { provisional = false; user = u; enter('resume'); }
        else if (ev === 'SIGNED_OUT' && user && !busy) { provisional = false; user = null; profile = null; isAdmin = false; emit('signedout'); }
        else if (ev === 'SIGNED_IN' && u && !user && !busy) { user = u; cachedProfile(); emit('signedin'); }
      }, 0));
      try { user = await be.session(); } catch (e) { user = null; }
      if (!user && configured && ls.get('minna-line-auth')) {
        // A log-in is saved but couldn't be refreshed (most likely no connection): carry on from the local copy.
        try { const c = JSON.parse(ls.get('minna-line-profile')); if (c && c.id && c.id === ML.S.uid) { user = { id: c.id, email: c.email || '' }; provisional = true; } } catch (e) { /* ignore */ }
      }
      if (user) cachedProfile();
      document.addEventListener('visibilitychange', () => {
        if (!user) return;
        if (document.visibilityState === 'hidden') { if (dirty) pushNow(); }
        else if (Date.now() - lastPull > 120000) pull();
      });
      window.addEventListener('online', async () => {
        if (provisional) { try { const u = await be.session(); if (u) { provisional = false; user = u; enter('resume'); } } catch (e) { /* still offline */ } }
        else if (user && dirty) pushNow();
      });
      return user;
    },
    enter,
    async signUp(email, password, meta) {
      busy = true;
      try {
        api.pendingName = meta.display_name || '';
        const r = await be.signUp(email.trim(), password, meta);
        if (r.user) { user = r.user; await enter('signup'); }
        return r;
      } catch (e) { throw new Error(nice(e)); } finally { busy = false; }
    },
    async signIn(email, password) {
      busy = true;
      try { user = await be.signIn(email.trim(), password); await enter('login'); return user; } catch (e) { throw new Error(nice(e)); } finally { busy = false; }
    },
    async signOut() {
      busy = true;
      try { if (dirty || pushing) await pushNow(); } catch (e) { /* offline: local copy is dropped below */ }
      try { await be.signOut(); } finally {
        clearTimeout(pushTimer); user = null; profile = null; isAdmin = false; dirty = false; provisional = false; boards.clear(); ls.del('minna-line-profile');
        ML.wipeLocal(); busy = false; setStatus('idle');
      }
    },
    async sendReset(email) { try { await be.sendReset(email.trim()); } catch (e) { throw new Error(nice(e)); } },
    async setPassword(pw) { try { await be.setPassword(pw); pendingRecovery = false; } catch (e) { throw new Error(nice(e)); } },
    async updateProfile(fields) {
      try { await be.saveProfile(fields); if (profile) Object.assign(profile, fields); boards.clear(); saveProfileCache(); } catch (e) { throw new Error(nice(e)); }
    },
    async leaderboard(board = 'week', limit = 50, fresh) {
      const k = board + '|' + limit + '|' + (user ? user.id : ''), c = boards.get(k);
      if (c && !fresh && Date.now() - c.at < 45000) return c.rows;
      const rows = (await be.leaderboard(board, limit)).map((r) => ({ ...r, pos: +r.pos, score: +r.score, total: +r.total }));
      boards.set(k, { at: Date.now(), rows });
      return rows;
    },
    async sendFeedback(row) {
      try { await be.sendFeedback({ email: user ? user.email : null, display_name: profile ? profile.display_name : null, app_version: VERSION, user_agent: navigator.userAgent.slice(0, 400), ...row }); } catch (e) { throw new Error(nice(e)); }
    },
    async deleteAccount() {
      busy = true;
      try { await be.deleteAccount(); clearTimeout(pushTimer); user = null; profile = null; isAdmin = false; dirty = false; ls.del('minna-line-profile'); ML.wipeLocal(); setStatus('idle'); } catch (e) { throw new Error(nice(e)); } finally { busy = false; }
    },
    schedulePush, pushNow, pull,
    // Community calls. If the tables are not installed yet (supabase/community.sql not run) the error has .missing = true.
    classes: new Proxy({}, {
      get: (_, name) => async (...args) => {
        if (!be || !be.classes || !user) throw new Error('Log in to use classes.');
        try { return await be.classes[name](...args); } catch (e) {
          const raw = String((e && (e.message || e.msg)) || e || ''), err = new Error(nice(e));
          err.missing = (e && (e.code === 'PGRST202' || e.code === 'PGRST205' || e.code === '42P01' || e.code === '42883')) || /could not find the (function|table)|schema cache/i.test(raw);
          throw err;
        }
      },
    }),
    communityImage: (path) => (be && be.community && be.community.imageUrl ? be.community.imageUrl(path) : path),
    community: new Proxy({}, {
      get: (_, name) => async (...args) => {
        if (!be || !be.community || !user) throw new Error('Log in to use the community.');
        try { return await be.community[name](...args); } catch (e) {
          const raw = String((e && (e.message || e.msg)) || e || ''), err = new Error(nice(e));
          err.missing = (e && (e.code === 'PGRST202' || e.code === 'PGRST205' || e.code === '42P01' || e.code === '42883')) || /could not find the (function|table)|does not exist|schema cache/i.test(raw);
          throw err;
        }
      },
    }),
  };
  return api;
})();
