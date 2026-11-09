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
    const read = () => { try { return JSON.parse(ls.get(KEY)) || seed(); } catch (e) { return seed(); } };
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
  };
  return api;
})();
