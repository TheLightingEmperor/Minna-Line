// Minna Line UI: views, sessions (quiz, yokai battle, sprint, flashcards, match), shop, capsule machine, collection.
(() => {
  'use strict';
  const ML = window.ML;
  const {
    esc, shuffle, pick, uniqBy, dayStr, hasKanji, DAY, hashStr, rng, toHira, normKana, particleNorm, romajiToKana, typedMatches,
    VOCAB, VBY, KANA, KANJI, KBY, GRAMMAR, GBY, EXAMPLES, EBY, quizzable, posGroup, vKey, exampleFor, STATIONS, SBY, LEVELS, levelOfL, lessonName,
    verbForms, adjForms, FORMS, CONJ_BY_LESSON, conjVerbs, conjAdjs, conjAnswer, canForm, READING, RBY, GUIDE, STROKES, rubyToKana, rubyToKanji, LESSON_GUIDE, GROUPS, groupOf, numKana, timeKana, HOURS, MONTHS, dayKana, COUNTERS, ageKana, D1,
    save, stage, grade, mastery, dueKeys, weakKeys, level, lvlFloor, rank, liveStreak, record, bonus, todaysQuests, claimQuest,
    SHOP, SHOP_BY, buy, STICKERS, GACHA_PRICE, spin, TROPHIES, checkTrophies, speech, sfx,
  } = ML;
  const S = new Proxy({}, { get: (_, k) => ML.S[k], set: (_, k, v) => { ML.S[k] = v; return true; } });
  const rand = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

  // ---------------------------------------------------------------- art
  const INK = 'var(--ink)';
  const ICON = {
    say: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/><path d="M4 19a2 2 0 0 1 2-2h13"/><circle cx="11.5" cy="9.5" r="3"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.5 12 4l8 7.5V20h-5.5v-5.5h-5V20H4z"/></svg>',
    rank: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v1.5A3.5 3.5 0 0 0 7.5 11M17 6h3v1.5a3.5 3.5 0 0 1-3.5 3.5M12 14v4M8 20h8"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M21 20H3"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8.5" r="4"/><path d="M4.5 20.5c1-4 4-5.5 7.5-5.5s6.500 1.500 7.500 5.500"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18.500a4.500 4.500 0 0 1-.6-8.960 6 6 0 0 1 11.500 1.700A3.700 3.700 0 0 1 17.500 18.500Z"/></svg>',
    back: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    coin: '<svg class="coin-i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10.3" fill="var(--coin)" stroke="#1f1b18" stroke-width="1.7"/><circle cx="12" cy="12" r="7.2" fill="none" stroke="#1f1b18" stroke-width=".9" stroke-dasharray="1.2 1.6"/><rect x="9.2" y="9.2" width="5.6" height="5.6" fill="var(--panel)" stroke="#1f1b18" stroke-width="1.5"/></svg>',
    lantern: (on) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1v2" stroke="${INK}" stroke-width="1.6" stroke-linecap="round"/><rect x="8.5" y="2.6" width="7" height="2.6" fill="#1f1b18" stroke="${INK}" stroke-width=".8"/><ellipse cx="12" cy="12.4" rx="7.6" ry="7.4" fill="${on ? '#d7422a' : 'var(--panel)'}" stroke="${INK}" stroke-width="1.6"/><path d="M5.4 9.6h13.2M4.6 12.4h14.8M5.4 15.2h13.2" stroke="${on ? '#f6ecd6' : INK}" stroke-opacity=".45" stroke-width="1"/><rect x="8.5" y="19.4" width="7" height="2.6" fill="#1f1b18" stroke="${INK}" stroke-width=".8"/></svg>`,
    heart: (on) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8.5-5.3-8.5-11.2A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8.5 2.8C20.5 15.7 12 21 12 21z" fill="${on ? '#d7422a' : 'none'}" stroke="${on ? INK : 'var(--muted)'}" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
    medal: (on) => `<svg viewBox="0 0 44 44" aria-hidden="true"><path d="M13 2h8l4 14h-8zM31 2h-8l-4 14h8z" fill="${on ? 'var(--line)' : 'var(--rule)'}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><circle cx="22" cy="28" r="13" fill="${on ? 'var(--coin)' : 'var(--rule)'}" stroke="${INK}" stroke-width="2"/><circle cx="22" cy="28" r="9.6" fill="none" stroke="${INK}" stroke-width=".9" stroke-dasharray="1.4 1.8" opacity=".6"/><path d="M22 21l2.2 4.6 5 .6-3.7 3.4 1 5-4.5-2.5-4.5 2.5 1-5-3.7-3.4 5-.6z" fill="${on ? '#f6ecd6' : 'var(--panel)'}" stroke="${INK}" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
    train: `<svg class="train-here" viewBox="0 0 44 28" aria-hidden="true"><path d="M2 21V7h24q10 1 15 8 2 3 2 6z" fill="#f6ecd6" stroke="#1f1b18" stroke-width="2.2" stroke-linejoin="round"/><path d="M2 10.500h27q6 1.500 9 6H2z" fill="var(--line)"/><path d="M5 12h4v3H5zM11 12h4v3h-4zM17 12h4v3h-4zM24 12h4l4 3h-8z" fill="#f6ecd6"/><path d="M2 21V7h24q10 1 15 8 2 3 2 6z" fill="none" stroke="#1f1b18" stroke-width="2.2" stroke-linejoin="round"/><circle cx="39" cy="18" r="1.800" fill="#d7422a" stroke="#1f1b18" stroke-width="1"/><path d="M9 21v4M18 21v4M30 21v4" stroke="#1f1b18" stroke-width="3" stroke-linecap="round"/></svg>`,
  };

  // Artwork lives in art.js; these wrappers add the player's shop items and station codes.
  const ART = window.ART;
  const mascotSVG = (mood = 'calm', o = {}) => ART.mascot(mood, { hat: S.equip.hat, acc: S.equip.acc, ...o });
  const YOKAI = ART.YOKAI, yokaiSVG = ART.yokai;
  const yokaiFor = (st) => YOKAI[(hashStr(st.id) >>> 3) % YOKAI.length];
  const isLine = (st) => st.kind === 'lesson' || st.kind === 'kana';
  const LINE_C = { M: 'var(--line)', X: 'var(--express)', S: 'var(--n4)', SX: 'var(--n4)', K: 'var(--n3)', KX: 'var(--n3)', W: 'var(--n2)', WX: 'var(--n2)', Y: 'var(--n1)', YX: 'var(--n1)' };
  const lineColor = (st) => LINE_C[st.line];
  const lineLetter = (st) => ({ M: 'M', X: 'X', S: 'S', SX: 'S', K: 'A', KX: 'A', W: 'W', WX: 'W', Y: 'Y', YX: 'Y' }[st.line]);
  const curLevel = () => S.settings.level || 'N5';
  const levelRange = (l = curLevel()) => (l === 'N5' ? [1, 26] : l === 'N4' ? [126, 150] : l === 'N2' ? [301, 324] : l === 'N1' ? [401, 424] : [201, 224]);
  const inLevel = (L, l = curLevel()) => { const [a, b] = levelRange(l); return L >= a && L <= b; };
  const codeOf = (st) => (isLine(st) ? lineLetter(st) + st.code : st.code);
  const badgeHTML = (st) => (isLine(st) ? `<span class="badge"><small>${lineLetter(st)}</small><b>${st.code}</b></span>` : `<span class="badge"><b>${st.code}</b></span>`);
  const stampSVG = (st, date) => ART.stamp(st, codeOf(st), date);
  function clockSVG(h, m) {
    const ha = ((h % 12) + m / 60) * 30, ma = m * 6;
    const ticks = Array.from({ length: 12 }, (_, i) => `<line x1="50" y1="12" x2="50" y2="${i % 3 ? 16 : 19}" transform="rotate(${i * 30} 50 54)" stroke="${INK}" stroke-width="${i % 3 ? 2 : 3}" stroke-linecap="round"/>`).join('');
    return `<svg class="clock" viewBox="0 0 100 104" role="img" aria-label="Clock showing ${h}:${String(m).padStart(2, '0')}">
      <path d="M20 22 24 2l16 12zM80 22 76 2 60 14z" fill="var(--mochi)" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="50" cy="54" r="44" fill="var(--mochi)" stroke="${INK}" stroke-width="3.5"/>${ticks}
      <line x1="50" y1="54" x2="50" y2="30" transform="rotate(${ha} 50 54)" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>
      <line x1="50" y1="54" x2="50" y2="18" transform="rotate(${ma} 50 54)" stroke="var(--line)" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="50" cy="54" r="4" fill="${INK}"/></svg>`;
  }
  const OMAMORI = `<svg viewBox="0 0 60 84" width="52" height="72" aria-hidden="true"><path d="M14 24 30 10l16 14v50a3 3 0 0 1-3 3H17a3 3 0 0 1-3-3z" fill="#d7422a" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/><path d="M32 12l14 12v53H32z" fill="url(#pDots)" opacity=".22"/><path d="M22 6q8 8 16 0" fill="none" stroke="#f6ecd6" stroke-width="3.5" stroke-linecap="round"/><circle cx="30" cy="12" r="4" fill="var(--coin)" stroke="${INK}" stroke-width="2"/><rect x="21" y="34" width="18" height="30" rx="1.5" fill="#f6ecd6" stroke="${INK}" stroke-width="2"/><text x="30" y="55" text-anchor="middle" style="fill:#c4321f;font:15px var(--f-pop)">守</text></svg>`;
  const machineSVG = () => ART.machine();

  // ---------------------------------------------------------------- effects
  const reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function petals(n = 26) {
    if (reduced()) return;
    for (let i = 0; i < n; i++) {
      const p = document.createElement('div');
      p.className = 'petal';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.setProperty('--dx', rand(-80, 80) + 'px');
      p.style.setProperty('--rot', rand(200, 900) + 'deg');
      p.style.animationDuration = 1.8 + Math.random() * 1.8 + 's';
      p.style.animationDelay = Math.random() * 0.6 + 's';
      if (i % 3 === 0) p.style.background = 'var(--coin)';
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 4400);
    }
  }
  function floatCoin(el, text) {
    if (!el || reduced()) return;
    const r = el.getBoundingClientRect();
    const f = document.createElement('div');
    f.className = 'floatcoin'; f.textContent = text;
    f.style.left = r.left + r.width / 2 - 20 + 'px'; f.style.top = r.top - 10 + 'px';
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 950);
  }
  let toastTimer;
  function toast(msg) {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 2400);
  }
  function modal(html, onClick) {
    const m = document.createElement('div');
    m.className = 'modal';
    m.innerHTML = `<div role="dialog" aria-modal="true">${html}</div>`;
    m.addEventListener('click', (e) => {
      if (e.target === m || e.target.closest('[data-x]')) { m.remove(); return; }
      const s = e.target.closest('[data-act="say"]'); if (s) speech.say(s.dataset.arg);
      if (onClick) onClick(e, m);
    });
    document.body.appendChild(m);
    const f = m.querySelector('[data-x]'); if (f) f.focus();
    return m;
  }
  // One popup for everything earned at the end of a session: level ups, trophies.
  function celebrate(levelUp) {
    const trophies = checkTrophies();
    if (!levelUp && !trophies.length) return;
    const cc = document.getElementById('coinct'); if (cc) cc.textContent = S.coins.toLocaleString('en-US');
    const r = rank(), rankUp = levelUp && rank(levelUp - 1)[0] !== r[0];
    sfx.play('level'); petals(30);
    modal(`<div style="display:grid;justify-items:center;gap:10px;text-align:center">
      ${mascotSVG('cheer', { cls: 'hop' }).replace('<svg', '<svg style="width:110px;height:110px"')}
      ${levelUp ? `<h2>Level ${levelUp}!</h2><div class="muted">+100 ${ICON.coin}${rankUp ? ` · You're now riding the <b>${r[1]}</b> ${r[3]}` : ''}</div>` : ''}
      ${trophies.map((t) => `<div class="trophy" style="width:100%;text-align:left">${ICON.medal(true)}<div><b>${esc(t.jp)}</b><span>${esc(t.desc)} · +100 ${ICON.coin}</span></div></div>`).join('')}
      <button class="btn primary" data-x>やったー！ Yay!</button></div>`);
  }

  // ---------------------------------------------------------------- display helpers
  const sayBtn = (text, label = 'Play audio') => (speech.ok ? `<button class="say" data-act="say" data-arg="${esc(text)}" aria-label="${label}" title="${label}">${ICON.say}</button>` : '');
  const KJ = /[一-鿿々]/;
  function rubyHTML(kanji, kana) {
    const K = kanji.replace(/\s/g, ''), R = toHira(kana.replace(/\s/g, ''));
    const segs = K.match(/[一-鿿々]+|[^一-鿿々]+/g) || [];
    const lit = (s) => toHira(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const m = segs.length > 1 ? R.match(new RegExp('^' + segs.map((s) => (KJ.test(s) ? '(.+?)' : '(' + lit(s) + ')')).join('') + '$')) : null;
    if (!m) return `<ruby>${esc(kanji)}<rt>${esc(kana)}</rt></ruby>`;
    return segs.map((s, i) => (KJ.test(s) ? `<ruby>${esc(s)}<rt>${esc(m[i + 1])}</rt></ruby>` : esc(s))).join('');
  }
  function jpHTML(v, mode = S.settings.script) {
    if (v.kanji && hasKanji(v.kanji) && mode !== 'kana') return mode === 'kanji-only' ? esc(v.kanji) : rubyHTML(v.kanji, v.kana);
    return esc(v.kana);
  }
  const roHTML = (ro) => (S.settings.romaji === 'show' ? `<div class="sub">${esc(ro)}</div>` : '');
  const meter = (p, c) => `<div class="meter"${c ? ` style="--c:${c}"` : ''}><i style="width:${Math.round(Math.min(1, p) * 100)}%"></i></div>`;
  const coins = (n) => `${ICON.coin} <span class="num">${n.toLocaleString('en-US')}</span>`;

  // ---------------------------------------------------------------- question builders
  function distractors(item, pool, n, show) {
    const want = show(item), g = posGroup(item);
    const scored = shuffle(pool).filter((x) => x !== item && show(x) !== want && x.en !== item.en)
      .map((x) => ({ x, sc: (posGroup(x) === g ? 0 : 4) + Math.min(Math.abs((x.L || 0) - (item.L || 0)), 6) * 0.5 + Math.random() * 2 }))
      .sort((a, b) => a.sc - b.sc).map((o) => o.x);
    return uniqBy(scored, show).slice(0, n);
  }
  const isKataWord = (v) => quizzable(v) && /^[\u30a0-\u30ff]+$/.test(v.kana) && v.kana.length >= 3;
  const vocabPool = (v) => VOCAB.filter((x) => quizzable(x) && Math.abs(x.L - v.L) <= 6 && x.L <= Math.max(v.L + 2, 4));
  function vocabAfter(v) {
    const ex = exampleFor(v);
    return `<div class="ans jp">${jpHTML(v, 'kanji')}</div><div>${esc(v.kana)} · <i>${esc(v.ro)}</i> · ${esc(v.en)}${v.note ? ` <span class="muted">(${esc(v.note)})</span>` : ''}</div>${v.use ? `<div class="wuse">${rubyLine(v.use)}${v.useEn ? ` <span class="muted">${esc(v.useEn)}</span>` : ''}</div>` : ''}${ex ? `<div class="exs"><span class="jp">${rubyLine(ex.jp)}</span><br><span class="muted">${esc(ex.en)}</span></div>` : ''}`;
  }
  function vocabQ(v, mode) {
    const s = stage(vKey(v));
    const canKanji = v.kanji && hasKanji(v.kanji);
    const canType = !/[a-zA-Z0-9]/.test(v.kana) && normKana(v.kana).length <= 10;
    if (!mode || mode === 'auto') {
      const m = s < 1 ? ['jp2en'] : s < 3 ? ['en2jp', 'jp2en', 'listen'] : ['en2jp', canType ? 'type' : 'jp2en', canKanji ? 'kanji' : 'en2jp', 'listen', canType ? 'dictate' : 'listen'];
      mode = pick(m);
    }
    if ((mode === 'type' || mode === 'dictate') && !canType) mode = 'en2jp';
    if (mode === 'kanji' && !canKanji) mode = 'jp2en';
    if ((mode === 'listen' || mode === 'dictate') && !speech.ok) mode = mode === 'listen' ? 'jp2en' : 'type';
    const pool = vocabPool(v);
    const base = { key: vKey(v), cat: 'vocab', mode, say: v.kana, after: vocabAfter(v), sayAfter: true };
    if (mode === 'kanaread') {
      const opts = shuffle([v, ...distractors(v, VOCAB.filter(isKataWord), 3, (x) => x.ro)]);
      return { ...base, kind: 'mc', label: 'How do you read this?', prompt: `<div class="glyph mid">${esc(v.kana)}</div>`, options: opts.map((x) => ({ html: `<span class="pop" style="font-size:16px">${esc(x.ro)}</span>`, val: x.id })), answer: v.id };
    }
    const playBtn = `<button class="btn primary" data-act="say" data-arg="${esc(v.kana)}">${ICON.say.replace('<svg', '<svg width="20" height="20"')} Play again</button>`;
    if (mode === 'jp2en' || mode === 'listen') {
      const opts = shuffle([v, ...distractors(v, pool, 3, (x) => x.en)]);
      return { ...base, kind: 'mc', label: mode === 'listen' ? 'Listen. What does it mean?' : 'What does this mean?', autoplay: mode === 'listen' || S.settings.audio,
        prompt: mode === 'listen' ? playBtn : `<div class="glyph ${v.kana.length > 6 ? 'mid' : ''}">${jpHTML(v)}</div>${roHTML(v.ro)}`,
        options: opts.map((x) => ({ html: esc(x.en), val: x.id })), answer: v.id };
    }
    if (mode === 'en2jp') {
      const opts = shuffle([v, ...distractors(v, pool, 3, (x) => x.kana)]);
      return { ...base, kind: 'mc', label: 'Pick the Japanese', prompt: `<div class="en-q">${esc(v.en)}</div>`, options: opts.map((x) => ({ html: `<span class="jpo">${jpHTML(x)}</span>`, val: x.id })), answer: v.id };
    }
    if (mode === 'kanji') {
      const kp = pool.filter((x) => x.kanji && hasKanji(x.kanji));
      const opts = shuffle([v, ...distractors(v, kp, 3, (x) => x.kana)]);
      return { ...base, kind: 'mc', label: 'How is this read?', prompt: `<div class="glyph ${v.kanji.length > 4 ? 'mid' : ''}">${esc(v.kanji)}</div>`, options: opts.map((x) => ({ html: `<span class="jpo">${esc(x.kana)}</span>`, val: x.id })), answer: v.id };
    }
    if (mode === 'dictate') return { ...base, kind: 'type', autoplay: true, sayAfter: false, label: 'Type what you hear', prompt: playBtn, check: (inp) => typedMatches(inp, v.kana) };
    return { ...base, kind: 'type', label: 'Type it in Japanese (romaji works)', prompt: `<div class="en-q">${esc(v.en)}</div>${v.note ? `<div class="sub">${esc(v.note)}</div>` : ''}`, check: (inp) => typedMatches(inp, v.kana) };
  }
  const kanaKey = (k) => `k|${k.set}|${k.c}`;
  function kanaQ(k, mode) {
    const pool = KANA.filter((x) => x.set === k.set && x.r !== k.r);
    mode = mode && mode !== 'auto' ? mode : pick(['c2r', 'c2r', 'r2c', 'type']);
    const base = { key: kanaKey(k), cat: 'kana', mode, say: k.c, after: `<div class="ans">${esc(k.c)}</div><div><i>${esc(k.r)}</i></div>`, sayAfter: true };
    if (mode === 'r2c') {
      const opts = shuffle([k, ...uniqBy(shuffle(pool), (x) => x.r).slice(0, 3)]);
      return { ...base, kind: 'mc', label: `Pick the ${k.set === 'h' ? 'hiragana' : 'katakana'}`, prompt: `<div class="glyph pop">${esc(k.r)}</div>`, options: opts.map((x) => ({ html: `<span class="jpo" style="font-size:28px">${esc(x.c)}</span>`, val: x.c })), answer: k.c };
    }
    if (mode === 'type') return { ...base, kind: 'type', label: 'Type the sound in romaji', prompt: `<div class="glyph">${esc(k.c)}</div>`, check: (inp) => normKana(romajiToKana(inp.trim(), true)) === normKana(k.c) || inp.trim().toLowerCase() === k.r };
    const opts = shuffle([k, ...uniqBy(shuffle(pool), (x) => x.r).slice(0, 3)]);
    return { ...base, kind: 'mc', label: 'What sound is this?', prompt: `<div class="glyph">${esc(k.c)}</div>`, options: opts.map((x) => ({ html: `<span class="pop" style="font-size:19px">${esc(x.r)}</span>`, val: x.c })), answer: k.c };
  }
  const kanjiKey = (k) => 'j|' + k.k;
  function kanjiQ(k, mode) {
    const pool = KANJI.filter((x) => x !== k);
    mode = mode && mode !== 'auto' ? mode : pick(['meaning', 'meaning', 'word', 'reading']);
    const w = k.words && k.words.length ? pick(k.words) : null;
    const after = `<div class="ans">${esc(k.k)} <span class="muted small">${esc(k.m)}</span></div><div class="small">音 ${esc((k.on || []).join('、') || '—')} · 訓 ${esc((k.kun || []).join('、') || '—')}</div>${w ? `<div>${esc(w.w)}（${esc(w.r)}）${esc(w.m)}</div>` : ''}`;
    const base = { key: kanjiKey(k), cat: 'kanji', mode, after, say: w ? w.r : '', sayAfter: !!w };
    if ((mode === 'reading' || mode === 'word') && w) {
      const others = shuffle(pool.flatMap((x) => x.words || [])).filter((ww) => ww.r !== w.r && ww.w !== w.w);
      if (mode === 'reading') {
        const opts = shuffle([w, ...uniqBy(others, (x) => x.r).slice(0, 3)]);
        return { ...base, kind: 'mc', label: 'How is this word read?', prompt: `<div class="glyph">${esc(w.w)}</div>`, options: opts.map((x) => ({ html: `<span class="jpo">${esc(x.r)}</span>`, val: x.r })), answer: w.r };
      }
      const opts = shuffle([w, ...uniqBy(others, (x) => x.w).slice(0, 3)]);
      return { ...base, kind: 'mc', label: 'Which word means…', prompt: `<div class="en-q">${esc(w.m)}</div><div class="sub">${esc(w.r)}</div>`, options: opts.map((x) => ({ html: `<span class="jpo">${esc(x.w)}</span>`, val: x.w })), answer: w.w };
    }
    const opts = shuffle([k, ...uniqBy(shuffle(pool), (x) => x.m).slice(0, 3)]);
    return { ...base, kind: 'mc', label: 'What does this kanji mean?', prompt: `<div class="glyph">${esc(k.k)}</div>`, options: opts.map((x) => ({ html: esc(x.m), val: x.k })), answer: k.k };
  }
  const drillKeys = (g) => g.drills.map((_, i) => `g|${g.id}|${i}`);
  function grammarQ(g, i) {
    const d = g.drills[i], r = rubyLine;
    const key = `g|${g.id}|${i}`;
    const after = `<div class="small"><b>${esc(g.title)}</b> · ${esc(g.meaning)}</div>`;
    if (d.type === 'order') {
      const ans = d.tiles.join(' ');
      return { key, cat: 'grammar', kind: 'order', label: 'Put the sentence in order', prompt: `<div class="en-q">${esc(d.en)}</div>`, tiles: d.tiles, answer: ans, say: ans, sayAfter: true, after: `<div class="ans">${r(ans)}。</div>${after}` };
    }
    if (d.type === 'fill') {
      const full = d.jp.replace('＿＿', d.answer);
      return { key, cat: 'grammar', kind: 'mc', label: 'Fill the blank', say: full, sayAfter: true,
        prompt: `<div class="glyph sentence">${r(d.jp).replace('＿＿', '<span style="display:inline-block;border-bottom:3px solid var(--c,var(--line));width:2.4em"></span>')}</div>${d.en ? `<div class="sub">${esc(d.en)}</div>` : ''}`,
        options: shuffle(d.options).map((o) => ({ html: `<span class="jpo">${r(o)}</span>`, val: o })), answer: d.answer, after: `<div class="ans">${r(full)}</div>${after}` };
    }
    const isJp = /[\u3040-\u30ff\u4e00-\u9fff]/.test(d.answer);
    return { key, cat: 'grammar', kind: 'mc', label: 'Choose', prompt: `<div class="en-q" style="font-size:19px">${esc(d.q)}</div>`, options: shuffle(d.options).map((o) => ({ html: isJp ? `<span style="font-size:17px">${r(o)}</span>` : esc(o), val: o })), answer: d.answer, say: isJp ? d.answer : '', sayAfter: isJp, after: `<div class="ans">${r(d.answer)}</div>${after}` };
  }
  // Japanese word order is flexible: phrases marked with を, に, で or へ can swap places, so those
  // reorderings count. Anything else (the topic, the verb, の phrases, adverbs) has to stay put.
  const NOUN_KANA = new Set(VOCAB.filter((v) => v.pos === 'n').map((v) => v.kana));
  function orderOK(got, tiles) {
    if (got.length !== tiles.length) return false;
    const moved = tiles.filter((t, i) => got[i] !== t);
    // で on a noun can move (しんかんせんで), but んで/いで may be a verb's て-form (のんで), which can't.
    return moved.every((t) => /[をにへ]$/.test(t) || (/で$/.test(t) && (!/[んい]で$/.test(t) || NOUN_KANA.has(t.slice(0, -1)))));
  }
  function sentenceQ(e) {
    const pool = EXAMPLES.filter((x) => x !== e && x.en !== e.en && Math.abs(x.L - e.L) <= 3);
    const opts = shuffle([e, ...uniqBy(shuffle(pool), (x) => x.en).slice(0, 3)]);
    return { key: 'e|' + e.id, cat: 'sentence', mode: 'listen', kind: 'mc', label: 'Listen to the sentence. What does it mean?', autoplay: true, say: e.jp, sayAfter: false,
      prompt: `<button class="btn primary" data-act="say" data-arg="${esc(e.jp)}">${ICON.say.replace('<svg', '<svg width="20" height="20"')} Play again</button><button class="btn sm ghost" data-act="reveal">Show the Japanese</button><div id="rv" class="glyph sentence" hidden>${rubyLine(e.jp)}</div>`,
      options: opts.map((x) => ({ html: esc(x.en.replace(/\s*\([^)]*\)\s*$/, '')), val: x.id })), answer: e.id, after: `<div class="ans">${rubyLine(e.jp)}</div><div><i>${esc(e.ro)}</i></div><div>${esc(e.en)}</div><div class="small muted">${esc(e.g.title)} · ${lessonName(e.L)}</div>` };
  }
  const conjKey = (form, v) => `c|${form}|${v.id}`;
  function wrongBases(base, v, ans) {
    const wrong = new Set();
    for (const g of [1, 2, 3]) { try { const f = verbForms(v, g); if (f[base]) wrong.add(f[base]); } catch (e) { /* skip */ } }
    for (const [a, b] of [['って', 'んで'], ['んで', 'いて'], ['いて', 'って'], ['して', 'しって'], ['った', 'んだ'], ['ない', 'らない']]) if (ans.includes(a)) wrong.add(ans.replace(a, b));
    const masu = v.kana.replace(/\s/g, ''), s = masu.slice(0, -2), p = s.slice(0, -1);
    const plainEnd = { te: 'て', nai: 'ない', dict: 'る', ta: 'た', nakatta: 'なかった' }[base];
    if (plainEnd) wrong.add(s + plainEnd);
    const misrules = {
      te: ['って', 'んで', 'いて', 'して'].map((e) => p + e), ta: ['った', 'んだ', 'いた', 'した'].map((e) => p + e),
      nai: [p + 'らない', p + 'わない', s + 'らない', p + 'かない'], dict: [p + 'る', p + 'う', s + 'るう', p + 'く'],
      nakatta: [p + 'らなかった', s + 'なかった', p + 'わなかった', s + 'ないかった'],
    }[base] || [];
    const extra = shuffle(misrules.filter((w) => w !== ans && w.length > 1));
    while (wrong.size < 6 && extra.length) wrong.add(extra.pop());
    wrong.delete(ans);
    return [...wrong];
  }
  function conjQ(form, v, mode) {
    const F = FORMS[form];
    const ans = conjAnswer(form, v);
    const wrong = new Set();
    if (F.verb && F.base === 'stem') {
      const f = verbForms(v);
      for (const k of ['mneg', 'mpast', 'mpastneg', 'mshou', 'mseni', 'mtai', 'nagara', 'sugiru', 'yasui', 'nikui', 'soukan']) if (k !== form) wrong.add(f[k]);
      wrong.add(f.stem + 'ますでした'); wrong.add(f.stem + 'ませんました');
    } else if (F.verb && F.base) {
      const f = verbForms(v), base = f[F.base];
      const wrap = (w) => (F.cut ? w.slice(0, -F.cut) : w) + F.suf;
      for (const w of wrongBases(F.base, v, base)) wrong.add(wrap(w));
      wrong.add(f.stem + F.suf.replace(/^ /, ''));
    } else if (F.verb) {
      for (const w of wrongBases(form, v, ans)) wrong.add(w);
      if (F.fam === 'n4') { const f = verbForms(v); for (const k of ['pot', 'vol', 'pass', 'caus', 'ba', 'imper', 'causpass']) if (k !== form) wrong.add(f[k]); }
    } else {
      wrong.add(adjForms(v, true)[form]);
      for (const f of ['aneg', 'apast', 'apastneg', 'ate']) if (f !== form) wrong.add(adjForms(v)[f]);
      const plain = v.kana.replace(/[（(].*?[）)]/g, '').trim();
      wrong.add({ aneg: plain + (v.pos === 'i-adj' ? 'じゃないです' : 'くないです'), apast: plain + 'でした', apastneg: plain + 'じゃなかったでした', ate: plain + 'て' }[form]);
    }
    wrong.delete(ans);
    const opts = shuffle([ans, ...shuffle([...wrong]).slice(0, 3)]);
    const kind = F.verb ? `Group ${v.pos[1]} verb` : v.pos === 'i-adj' ? 'い-adjective' : 'な-adjective';
    const prompt = `<div class="glyph mid">${jpHTML(v)}</div><div class="sub">${esc(v.en)} · ${kind}</div><div class="pill express" style="justify-self:center">→ ${esc(F.label)}</div>`;
    const base = { key: conjKey(form, v), cat: 'conj', say: ans, sayAfter: true, after: `<div class="ans">${esc(ans)}</div><div class="small">${esc(v.kana)} → ${esc(F.label)} · ${kind} · taught in Lesson ${F.L}</div>` };
    if ((mode && mode !== 'auto' ? mode : pick(['mc', 'type'])) === 'type') return { ...base, kind: 'type', label: 'Type the form', prompt, check: (inp) => particleNorm(normKana(romajiToKana(inp.trim(), true))) === particleNorm(normKana(ans)) };
    return { ...base, kind: 'mc', label: 'Pick the correct form', prompt, options: opts.map((o) => ({ html: `<span class="jpo">${esc(o)}</span>`, val: o })), answer: ans };
  }
  // Reading and conversations
  const rubyLine = (jp) => esc(jp).replace(/\{([^|}]+)\|([^}]+)\}/g, (_, k, r) => (S.settings.script === 'kana' ? r : S.settings.script === 'kanji-only' ? k : `<ruby>${k}<rt>${r}</rt></ruby>`));
  const readingKeys = (r) => r.questions.map((_, i) => `r|${r.id}|${i}`);
  const linesHTML = (r, cls = '') => `<div class="passage ${cls}">${r.lines.map((l) => `<div class="pline">${l.s ? `<b>${esc(l.s)}</b>` : ''}<span>${rubyLine(l.jp)}</span></div>`).join('')}</div>`;
  function readingQ(r, i, mode) {
    const d = r.questions[i], listen = mode === 'listen';
    const isJp = /[\u3040-\u30ff]/.test(d.answer);
    const play = `<button class="btn primary" data-act="playlines">${ICON.say.replace('<svg', '<svg width="20" height="20"')} Play the conversation</button>`;
    return { key: `r|${r.id}|${i}`, cat: 'reading', mode: listen ? 'listen' : undefined, kind: 'mc', label: listen ? 'Listen, then answer' : r.type === 'conversation' ? 'Read the conversation' : 'Read the text', lines: listen ? r.lines : null, autoplay: listen,
      prompt: `${listen ? play : linesHTML(r)}<div class="en-q" style="font-size:18px">${esc(d.qjp || '')}</div><div class="sub">${esc(d.q)}</div>`,
      options: shuffle(d.options).map((o) => ({ html: isJp ? `<span class="jpo">${esc(o)}</span>` : esc(o), val: o })), answer: d.answer,
      after: `<div class="ans">${esc(d.answer)}</div><details><summary>Show the text and translation</summary>${r.lines.map((l) => `<div class="pline"><span>${rubyLine(l.jp)}<br><span class="muted small">${esc(l.en)}</span></span></div>`).join('')}</details>` };
  }
  // Numbers, prices, times, dates, counters, ages: generated, so they never run out.
  const NUM_SWAPS = [['さんびゃく', 'さんひゃく'], ['ろっぴゃく', 'ろくひゃく'], ['はっぴゃく', 'はちひゃく'], ['さんぜん', 'さんせん'], ['はっせん', 'はちせん'], ['よん', 'し'], ['なな', 'しち'], ['きゅう', 'く'],
    ['よじ', 'よんじ'], ['しちじ', 'ななじ'], ['くじ', 'きゅうじ'], ['いっぷん', 'いちふん'], ['さんぷん', 'さんふん'], ['よんぷん', 'よんふん'], ['ろっぷん', 'ろくふん'], ['はっぷん', 'はちふん'], ['じゅっぷん', 'じゅうふん'], ['にふん', 'にぷん'], ['ごふん', 'ごぷん'], ['ななふん', 'ななぷん'], ['はん', 'さんじゅうふん'],
    ['しがつ', 'よんがつ'], ['しちがつ', 'なながつ'], ['くがつ', 'きゅうがつ'], ['ついたち', 'いちにち'], ['ふつか', 'ににち'], ['みっか', 'さんにち'], ['よっか', 'ようか'], ['ようか', 'よっか'], ['いつか', 'ごにち'], ['むいか', 'ろくにち'], ['なのか', 'ななにち'], ['ここのか', 'きゅうにち'], ['とおか', 'じゅうにち'], ['はつか', 'にじゅうにち'], ['しちにち', 'ななにち'], ['くにち', 'きゅうにち'],
    ['いっさい', 'いちさい'], ['はっさい', 'はちさい'], ['じゅっさい', 'じゅうさい'], ['はたち', 'にじゅうさい']];
  function numQ(kind, mode) {
    kind = kind || pick(['number', 'price', 'time', 'time', 'date', 'date', 'counter', 'counter', 'age']);
    let prompt, ans, label, alts = [], extra = [], note = '', more = () => '';
    if (kind === 'number') {
      const n = pick([rand(11, 99), rand(1, 9) * 100 + rand(0, 99), pick([3, 6, 8, 1, 4]) * 100 + rand(0, 99), rand(1, 9) * 1000 + rand(0, 999), pick([3, 8, 1]) * 1000 + rand(0, 999), rand(10000, 99999)]);
      ans = numKana(n); label = 'Read the number'; prompt = `<div class="glyph pop">${n.toLocaleString('en-US')}</div>`;
      extra = [numKana(n + pick([1, 10, 100])), numKana(Math.max(1, n - pick([1, 10, 100])))];
      note = 'Watch for さんびゃく・ろっぴゃく・はっぴゃく and さんぜん・はっせん.';
      more = () => numKana(Math.max(1, n + rand(-50, 50) * pick([1, 10, 100])));
    } else if (kind === 'price') {
      const n = pick([rand(1, 9) * 100 + rand(0, 9) * 10, rand(1, 9) * 1000 + rand(0, 9) * 100, rand(1, 9) * 10000 + rand(0, 9) * 1000]);
      ans = numKana(n) + 'えん'; label = 'いくらですか。 How much is it?'; prompt = `<div class="glyph pop">¥${n.toLocaleString('en-US')}</div>`;
      extra = [numKana(n + 100) + 'えん', numKana(n * 10) + 'えん'];
      more = () => numKana(Math.max(10, n + rand(-9, 9) * 10)) + 'えん';
    } else if (kind === 'time') {
      const h = rand(1, 12), m = pick([0, 0, 5, 10, 15, 20, 30, 30, 40, 45, 50, rand(1, 59)]);
      ans = timeKana(h, m); label = 'いま なんじですか。 What time is it?';
      if (m === 30) alts.push(HOURS[h] + 'さんじゅっぷん');
      if (m % 10 === 0 && m) alts.push(ans.replace('じゅっぷん', 'じっぷん'));
      prompt = `${clockSVG(h, m)}<div class="pop" style="font-size:22px">${h}:${String(m).padStart(2, '0')}</div>`;
      extra = [timeKana(h % 12 + 1, m), timeKana(h, (m + 5) % 60)];
      more = () => timeKana(rand(1, 12), m);
      note = 'Minutes: いっぷん・にふん・さんぷん・よんぷん・ごふん・ろっぷん・ななふん・はっぷん・きゅうふん・じゅっぷん. Hours: よじ・しちじ・くじ.';
    } else if (kind === 'date') {
      const mo = rand(1, 12), d = Math.random() < 0.55 ? pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 20, 24]) : rand(11, 28);
      ans = MONTHS[mo] + ' ' + dayKana(d); label = 'なんがつ なんにちですか。 Read the date';
      prompt = `<div class="glyph">${mo}月${d}日</div><div class="sub">month ${mo}, day ${d}</div>`;
      extra = [MONTHS[mo] + ' ' + dayKana(d === 28 ? 27 : d + 1), MONTHS[mo % 12 + 1] + ' ' + dayKana(d)];
      more = () => MONTHS[rand(1, 12)] + ' ' + dayKana(pick([d, rand(1, 28)]));
      note = 'Days 1–10, 14, 20 and 24 have special readings: ついたち・ふつか・みっか・よっか・いつか・むいか・なのか・ようか・ここのか・とおか・じゅうよっか・はつか・にじゅうよっか.';
    } else if (kind === 'age') {
      const n = pick([rand(1, 10), 20, rand(11, 60), 18, 21, 30, 48]);
      ans = ageKana(n); label = 'なんさいですか。 How old?';
      if (n === 20) alts.push('にじゅっさい');
      prompt = `<div class="glyph">${n}歳</div><div class="sub">${n} years old</div>`;
      extra = [numKana(n) + 'さい', ageKana(n + 1)];
      more = () => ageKana(Math.max(1, n + pick([-2, -1, 2, 10, -10])));
      note = 'Ages ending in 1, 8 and 0 change sound: いっさい・はっさい・じゅっさい. 20 is はたち.';
    } else {
      const ck = pick(Object.keys(COUNTERS)), C = COUNTERS[ck], n = rand(1, 10);
      ans = C.words[n - 1]; label = `Counting ${C.label}`;
      if (ck === 'nin' && n === 7) alts.push('しちにん');
      if (ck === 'kai') prompt = `<div class="glyph pop">${n}×</div><div class="glyph sentence">いっしゅうかんに ＿＿ プールへ いきます。</div><div class="sub">I go to the pool ${n} time${n > 1 ? 's' : ''} a week.</div>`;
      else {
        const [emo, word] = pick(C.items);
        const verb = ck === 'nin' || ck === 'hiki' ? 'います' : 'あります';
        prompt = `<div class="emoji-row" aria-label="${n} ${esc(word)}">${emo.repeat(n)}</div><div class="glyph sentence">${esc(word)}が ＿＿ ${verb}。</div>`;
      }
      const naive = (ck === 'tsu' ? D1[n] + 'つ' : (n === 10 ? 'じゅう' : D1[n]) + C.words[1].slice(1).replace(/^[ぷぼ]/, 'ほ').replace(/^[びぴ]/, 'ひ').replace(/^ぱ/, 'は'));
      extra = [naive, C.words[(n % 10)], C.words[(n + 8) % 10]];
      note = `${C.label}: ${C.words.join('・')}`;
      more = () => pick(C.words);
    }
    const wrong = new Set(extra);
    for (const [a, b] of NUM_SWAPS) if (ans.includes(a)) wrong.add(ans.replace(a, b));
    wrong.delete(ans); alts.forEach((a) => wrong.delete(a));
    for (let i = 0; i < 30 && wrong.size < 3; i++) { const w = more(); if (w && w !== ans && !alts.includes(w)) wrong.add(w); }
    const opts = shuffle([ans, ...shuffle([...wrong]).slice(0, 3)]);
    const after = `<div class="ans">${esc(ans)}</div>${alts.length ? `<div class="small">Also OK: ${esc(alts.join('、'))}</div>` : ''}${note ? `<div class="exs small">${esc(note)}</div>` : ''}`;
    const base = { key: null, cat: 'num', kind: 'mc', label, prompt, after, say: ans, sayAfter: true };
    if (mode === 'type') return { ...base, kind: 'type', label: label + ' · type it', check: (inp) => [ans, ...alts].map((x) => normKana(x)).includes(normKana(romajiToKana(inp.trim(), true))) };
    return { ...base, options: opts.map((o) => ({ html: `<span class="jpo">${esc(o)}</span>`, val: o })), answer: ans };
  }
  function keyToQ(key, mode) {
    const [t, a, b] = key.split('|');
    if (t === 'v') return vocabQ(VBY.get(a), mode);
    if (t === 'j') return kanjiQ(KBY.get(a), mode);
    if (t === 'g') return grammarQ(GBY.get(a), +b);
    if (t === 'e') return sentenceQ(EBY.get(a + '|' + b));
    if (t === 'c') return conjQ(a, VBY.get(b), mode);
    if (t === 'r') return readingQ(RBY.get(a), +b, mode);
    if (t === 'k') return kanaQ(KANA.find((x) => x.set === a && x.c === b), mode);
    return null;
  }
  const prioritize = (keys) => keys.map((k) => ({ k, s: stage(k) + Math.random() * 1.5 })).sort((a, b) => a.s - b.s).map((o) => o.k);

  // ---------------------------------------------------------------- station content
  const stationVocab = (st) => VOCAB.filter((v) => v.L === st.L && quizzable(v));
  const stationGrammar = (st) => GRAMMAR.filter((g) => g.lesson === st.L);
  const stationKanji = (st) => KANJI.filter((k) => k.lesson === st.L && !k.extra);
  const stationExamples = (st) => EXAMPLES.filter((e) => e.L === st.L);
  const stationReading = (st) => READING.filter((r) => r.lesson === st.L);
  function stationConj(st) {
    const out = [];
    for (const f of CONJ_BY_LESSON[st.L] || []) for (const v of FORMS[f].verb ? conjVerbs(st.L) : conjAdjs(st.L)) if (canForm(f, v)) out.push([f, v]);
    return out;
  }
  const keyCache = new Map();
  function stationKeys(st) {
    if (keyCache.has(st.id)) return keyCache.get(st.id);
    let keys = [];
    if (st.kind === 'kana') keys = [...KANA.map(kanaKey), ...stationVocab(st).map(vKey)];
    else if (st.kind === 'lesson') keys = [...stationVocab(st).map(vKey), ...stationGrammar(st).flatMap(drillKeys), ...stationKanji(st).map(kanjiKey), ...stationReading(st).flatMap(readingKeys)];
    else if (st.kind === 'kanji') keys = KANJI.filter((k) => k.level === st.level && !k.extra).map(kanjiKey);
    else if (st.kind === 'academy') keys = READING.filter((r) => r.lesson === ({ N2: 325, N1: 425 }[st.level] || 225)).flatMap(readingKeys);
    else if (st.kind === 'verbs') {
      const fs = st.level === 'N5' ? ['mneg', 'mpast', 'mpastneg', 'te', 'nai', 'dict', 'ta'] : ['pot', 'vol', 'ba', 'pass', 'caus', 'imper'];
      keys = conjVerbs(st.level === 'N5' ? 20 : 150).flatMap((v) => fs.filter((f) => canForm(f, v)).map((f) => conjKey(f, v)));
    }
    keyCache.set(st.id, keys);
    return keys;
  }
  const numMastery = () => Math.min(1, S.numStats.ok / 120);
  const stationMastery = (st) => (st.kind === 'exam' ? (S.stamps.exam ? 1 : 0) : st.kind === 'numbers' ? numMastery() : mastery(stationKeys(st)));
  // The furthest lesson touched at the current level, so practice modes stay on what you've met.
  function myMaxL() {
    const [lo, hi] = levelRange();
    let m = 0;
    for (const k of Object.keys(S.items)) if (k.startsWith('v|')) { const L = parseInt(k.slice(2), 10); if (L > m && L >= lo && L <= hi) m = L; }
    for (const id of Object.keys(S.stamps)) { const st = SBY.get(id); if (st && st.L > m && st.L >= lo && st.L <= hi) m = st.L; }
    return Math.min(hi, Math.max(m, lo + 3));
  }

  // ---------------------------------------------------------------- shell
  const root = document.getElementById('app');
  let A = {}, keyHandler = null, view = { name: 'home' };
  root.addEventListener('click', (e) => {
    const el = e.target.closest('[data-act]');
    if (!el || el.disabled) return;
    const fn = A[el.dataset.act];
    if (fn) { e.preventDefault(); fn(el.dataset.arg, el, e); }
  });
  document.addEventListener('keydown', (e) => { if (keyHandler) keyHandler(e); });
  const G = {
    home: () => go({ name: 'home' }),
    station: (id) => go({ name: 'station', id }),
    say: (t) => speech.say(t),
    settings: () => openSettings(),
    collection: (tab) => go({ name: 'collection', tab }),
    shop: () => go({ name: 'shop' }),
    gacha: () => go({ name: 'gacha' }),
    dict: () => go({ name: 'dict' }),
    mix: () => go({ name: 'mix' }),
    reading: () => go({ name: 'reading' }),
    read: (id) => go({ name: 'read', id }),
    guide: (id) => go({ name: 'guide', id }),
  };
  function applySkin() {
    const el = document.documentElement;
    el.dataset.skin = S.equip.skin;
    el.dataset.theme = 'light'; // dark mode is switched off for now; the dark palette is still in app.css for later
  }
  // Extension points filled in by social.js (accounts, leaderboard, stats). Everything works without them.
  const X = { homeSide: null, homeFoot: null, homeActions: null, navItems: null };
  function topbar() {
    const l = level(), lo = lvlFloor(l), hi = lvlFloor(l + 1), streak = liveStreak();
    return `<header class="topbar"><div class="wrap">
      <button class="brand" data-act="home" aria-label="Home">${mascotSVG('calm', { cls: 'face', face: true })}<span><b>Minna Line</b><span class="brand-sub">みんなの せん · ${curLevel()}</span></span></button>
      <div class="topstats">
        <span class="chipstat" title="Day streak${S.omamori ? ` · ${S.omamori} omamori` : ''}">${ICON.lantern(streak > 0)}${streak}</span>
        <span class="chipstat" title="Yen">${ICON.coin}<span id="coinct">${S.coins.toLocaleString('en-US')}</span></span>
        <span class="chipstat hide-sm" title="${S.xp} XP · ${rank()[3]}">Lv ${l}<span class="lvbar"><i style="width:${Math.round(((S.xp - lo) / (hi - lo)) * 100)}%"></i></span></span>
        ${navItems().filter((n) => n[0] !== 'home').map(([act, label, , icon]) => `<button class="iconbtn nav-d" data-act="${act}" aria-label="${label}" title="${label}"${view.name === act || (act === 'community' && (view.name === 'post' || view.name === 'members')) ? ' aria-current="page"' : ''}>${icon}</button>`).join('')}
        <button class="iconbtn" data-act="shop" aria-label="Shop" title="Shop">${ICON.bag}</button>
        <button class="iconbtn" data-act="settings" aria-label="Settings" title="Settings">${ICON.gear}</button>
      </div></div></header>`;
  }
  // [action, label, Japanese label, icon]: the icon row on wide screens, the tab bar on phones.
  const navItems = () => (X.navItems ? X.navItems() : [['home', 'Home', 'ホーム', ICON.home], ['collection', 'Collection', 'コレクション', ICON.book]]);
  function tabbar() {
    if (view.name === 'session') return '';
    const cur = view.name === 'station' || view.name === 'read' || view.name === 'reading' || view.name === 'guide' || view.name === 'dict' || view.name === 'mix' ? 'home' : view.name === 'post' || view.name === 'members' ? 'community' : view.name;
    return `<nav class="tabbar" aria-label="Main">${navItems().filter((n) => n[4] !== 'wide').map(([act, label, jp, icon]) => `<button data-act="${act}"${cur === act ? ' aria-current="page"' : ''}>${icon}<span>${label}</span></button>`).join('')}</nav>`;
  }
  function render(body, actions = {}, onMount) {
    keyHandler = null;
    A = { ...G, ...actions };
    root.innerHTML = topbar() + `<main class="${view.name === 'session' ? 'in-session' : ''}"><div class="wrap${animateNext ? ' view-in' : ''}">${body}</div></main>` + tabbar();
    animateNext = false;
    if (onMount) onMount();
  }
  let animateNext = false; // fade a screen in only when it's a different screen, not on every re-render
  function go(v) {
    speech.stop();
    animateNext = !view || view.name !== v.name || view.id !== v.id;
    view = v;
    (ROUTES[v.name] || renderHome)(v);
    window.scrollTo(0, 0);
  }
  const ROUTES = { home: () => renderHome(), station: (v) => renderStation(SBY.get(v.id) || STATIONS[1], v.tab), collection: (v) => renderCollection(v.tab), shop: () => renderShop(), gacha: () => renderGacha(), dict: () => renderDict(), mix: () => renderMix(), reading: () => renderReadingRoom(), read: (v) => renderReader(RBY.get(v.id)), guide: (v) => renderGuide(v.id) };
  function refresh() { if (view.name !== 'session' && !document.querySelector('.modal')) go(view); }

  // ---------------------------------------------------------------- home
  function nextStation(l = curLevel()) { return STATIONS.find((s) => s.level === l && isLine(s) && !S.stamps[s.id]) || STATIONS.filter((s) => s.level === l).pop(); }
  function readiness(l = curLevel()) {
    const n5 = l === 'N5';
    const vk = VOCAB.filter((v) => quizzable(v) && levelOfL(v.L) === l).map(vKey);
    const gk = GRAMMAR.filter((g) => levelOfL(g.lesson) === l).flatMap(drillKeys);
    const kk = KANJI.filter((k) => k.level === l && !k.extra).map(kanjiKey);
    const rk = READING.filter((r) => levelOfL(r.lesson) === l).flatMap(readingKeys);
    const forms = STATIONS.find((s) => s.kind === 'verbs' && s.level === l);
    const rows = [...(n5 ? [['Kana', mastery(KANA.map(kanaKey))]] : []), ['Words', mastery(vk)], ['Grammar', mastery(gk)], ['Kanji', mastery(kk)], ...(forms ? [['Verbs', mastery(stationKeys(forms))]] : []), ['Reading', mastery(rk)], ...(n5 ? [['Numbers', numMastery()]] : [])];
    const w = { Kana: 0.08, Words: 0.3, Grammar: 0.25, Kanji: 0.12, Verbs: 0.1, Reading: 0.1, Numbers: 0.05 };
    const tot = rows.reduce((a, [k]) => a + w[k], 0);
    return { rows, total: rows.reduce((a, [k, m]) => a + m * w[k], 0) / tot };
  }
  function greeting() {
    const h = new Date().getHours();
    const hi = h >= 4 && h < 11 ? ['おはよう！', 'Good morning'] : h >= 11 && h < 17 ? ['こんにちは！', 'Hello'] : ['こんばんは！', 'Good evening'];
    const due = dueKeys().length, q = todaysQuests(), left = q.filter((x) => !x.claimed).length, streak = liveStreak();
    const tips = [];
    if (due) tips.push(`${due} card${due > 1 ? 's are' : ' is'} waiting on the platform.`);
    if (left) tips.push(`${left} daily ticket${left > 1 ? 's' : ''} left to punch today.`);
    if (streak > 1) tips.push(`Day ${streak} of your streak. Keep the lantern lit!`);
    if (S.tickets) tips.push(`You have ${S.tickets} free capsule ticket${S.tickets > 1 ? 's' : ''}.`);
    tips.push('Pass a station battle to win its stamp.');
    return `<div class="bubble left">${hi[0]} <small>${hi[1]}! ${esc(tips[0])}</small></div>`;
  }
  function railHTML(list, cls) {
    const nx = nextStation();
    return `<ol class="rail ${cls}">${list.map((s) => {
      const m = stationMastery(s), stp = S.stamps[s.id];
      return `<li class="stop" style="--c:${lineColor(s)}">${s === nx ? ICON.train : ''}<button data-act="station" data-arg="${s.id}">
        ${badgeHTML(s)}
        <span class="stopname"><b>${esc(s.name)}${s === nx ? ' <span class="pill">next stop</span>' : ''}</b><span class="jp">${esc(s.jp)}${lessonName(s.L) ? ` · ${lessonName(s.L)}` : ''}</span>${s.kind !== 'exam' ? meter(m) : ''}</span>
        ${stp ? `<span class="stamp-mini">${stampSVG(s, '')}</span>` : '<span class="stamp-empty" aria-hidden="true"></span>'}
      </button></li>`;
    }).join('')}</ol>`;
  }
  function weekHTML() {
    const out = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * DAY), ds = dayStr(d);
      out.push(`<span><i class="${S.history[ds] ? 'on' : ''} ${i === 0 ? 'today' : ''}" title="${ds}: ${S.history[ds] || 0} answers"></i>${'日月火水木金土'[d.getDay()]}</span>`);
    }
    return `<div class="week" aria-label="This week">${out.join('')}</div>`;
  }
  function wordOfDay() {
    const pool = VOCAB.filter((v) => quizzable(v) && inLevel(v.L) && v.pos !== 'exp' && v.kanji && hasKanji(v.kanji));
    return pool[Math.floor(rng(hashStr('wotd' + curLevel() + dayStr()))() * pool.length)] || VOCAB.find((v) => v.kanji);
  }
  function hubBtn(act, title, jp, sub, arg) { return `<button class="hubbtn" data-act="${act}"${arg ? ` data-arg="${arg}"` : ''}><span class="jp">${jp}</span><b>${title}</b><span>${sub}</span></button>`; }
  function renderHome() {
    const due = dueKeys().length, nx = nextStation(), r = readiness(), l = level(), rk = rank();
    const lo = lvlFloor(l), hi = lvlFloor(l + 1);
    const quests = todaysQuests(), weak = weakKeys().length, w = wordOfDay();
    const lv = LEVELS.find((x) => x.id === curLevel());
    const lines = { N5: [['Minna Line', 'M', 'M00–M25', ''], ['N5 Terminal', 'X', 'numbers, words, kanji, verbs, exam', 'express']], N4: [['Summer Line', 'S', 'S01–S25', 'summer'], ['N4 Terminal', 'SX', 'kanji, verbs, exam', 'summer']], N3: [['Autumn Line', 'K', 'Units 1–24', 'autumn'], ['N3 Terminal', 'KX', 'reading, kanji, exam', 'autumn']], N2: [['Winter Line', 'W', 'Units 1–24', 'winter'], ['N2 Terminal', 'WX', 'reading, kanji, exam', 'winter']], N1: [['Starlight Line', 'Y', 'Units 1–24', 'night'], ['N1 Terminal', 'YX', 'reading, kanji, exam', 'night']] }[lv.id];
    render(`
      <div class="leveltabs" role="tablist" aria-label="JLPT level">${LEVELS.map((x) => `<button role="tab" class="lvtab ${x.season}" aria-selected="${x.id === lv.id}" data-act="level" data-arg="${x.id}"><i class="lvico">${ART.seasonIcon(x.season)}</i><b>${x.name}</b><span>${x.title}</span><small>${Math.round(readiness(x.id).total * 100)}%</small></button>`).join('')}</div>
      <div class="home"><div>
        <section class="vista">${ART.scene(lv.season)}<div class="vista-over">${mascotSVG(due ? 'calm' : 'happy', { cls: 'bob' })}${greeting()}</div></section>
        <div class="herostats"><div class="rankline"><span class="pill">${rk[1]} ${rk[3]}</span><b class="pop">Lv ${l}</b>${meter((S.xp - lo) / (hi - lo))}<span class="muted small num">${S.xp - lo}/${hi - lo} XP</span></div>${weekHTML()}</div>
        <div class="cards">
          <div class="card cta"><div class="eyebrow">Daily review · ふくしゅう</div><div class="big">${due}</div><div class="muted small">${due ? (due === 1 ? 'card due now' : 'cards due now') : 'Nothing due. Time to meet new words.'}</div>
            <button class="btn primary" data-act="review">${due ? 'Start review' : 'Learn new words'}</button></div>
          <div class="card"><div class="row-between"><div class="eyebrow">Today's tickets · きっぷ</div><span class="pill coin">${quests.filter((q) => q.claimed).length}/3</span></div>
            <div class="tickets">${quests.map((q) => `<div class="ticket ${q.have >= q.n ? 'done' : ''} ${q.claimed ? 'claimed' : ''}"><b>${esc(q.label)}</b>
              ${q.claimed ? '<span class="pill good">✓</span>' : q.have >= q.n ? `<button class="btn gold sm" data-act="claim" data-arg="${q.id}">+${q.r} ${ICON.coin}</button>` : `<span class="small num muted">${q.have}/${q.n}</span>`}
              ${meter(q.have / q.n, 'var(--coin)')}</div>`).join('')}</div>
            <div class="muted small">Punch all three for a free capsule ticket.</div></div>
        </div>
        <h2 class="section-h">Practice hub <span class="pill express">れんしゅう</span></h2>
        <div class="hub">
          ${hubBtn('sprint', 'Shinkansen Sprint', 'しんかんせん', '60 seconds, as many as you can')}
          ${weak ? hubBtn('weak', 'Weak spots', 'にがて', `${weak} things you've missed before`) : ''}
          ${hubBtn('particles', 'Particle dojo', 'じょしの どうじょう', 'は・が・を・に・で and friends')}
          ${hubBtn('sentences', 'Sentence listening', 'ききとり', 'Hear real sentences, pick the meaning')}
          ${hubBtn('reading', 'Reading room', 'よむ・はなす', `${READING.length} conversations and texts`)}
          ${hubBtn('guide', 'Guidebook', 'ガイドブック', 'Cheat sheets for particles, verbs and more')}
          ${hubBtn('mix', 'Custom mix', 'ミックス', 'Pick lessons and question types')}
          ${hubBtn('dict', 'Dictionary', 'じしょ', `Search all ${VOCAB.length.toLocaleString('en-US')} words`)}
          ${hubBtn('gacha', 'Capsule machine', 'ガチャ', S.tickets ? `${S.tickets} free ticket${S.tickets > 1 ? 's' : ''}!` : `${GACHA_PRICE} yen a spin`)}
        </div>
        <div class="muted small" style="margin-top:22px">${esc(lv.blurb)}</div>
        ${lines.map(([t, id, sub, cls]) => `<h2 class="section-h" style="margin-top:12px">${t} <span class="pill ${cls === 'express' ? 'express' : ''}">${sub}</span></h2>${railHTML(STATIONS.filter((s) => s.line === id), cls)}`).join('')}
        ${X.homeFoot ? X.homeFoot() : ''}
      </div>
      <aside class="side">
        ${X.homeSide ? X.homeSide() : ''}
        <div class="card" style="--c:${lineColor(nx)}"><div class="eyebrow">Next stop</div>
          <div style="display:flex;gap:12px;align-items:center">${badgeHTML(nx)}<div><h3>${esc(nx.name)}</h3><div class="muted small">${esc(nx.jp)}</div></div></div>
          <button class="btn primary" data-act="station" data-arg="${nx.id}">Go to ${codeOf(nx)}</button></div>
        <div class="card wotd"><div class="row-between"><div class="eyebrow">Word of the day</div>${sayBtn(w.kana)}</div>
          <div class="w">${rubyHTML(w.kanji, w.kana)}</div><div><b>${esc(w.en)}</b> <span class="muted small">· ${esc(w.ro)}${lessonName(w.L) ? ' · ' + lessonName(w.L) : ''}</span></div></div>
        <div class="card readiness"><div class="eyebrow">${lv.id} readiness</div>
          <div class="big">${Math.round(r.total * 100)}<span style="font-size:18px">%</span></div>
          ${r.rows.map(([k, m]) => `<div class="row"><span>${k}</span>${meter(m)}<span>${Math.round(m * 100)}</span></div>`).join('')}
          <div class="muted small">Counts what's in long-term memory (reviewed out to a 7-day interval or more).</div></div>
        <div class="card"><div class="eyebrow">Collection</div>
          <div class="row-between"><span>Stamps</span><b class="num">${Object.keys(S.stamps).length}/${STATIONS.length}</b></div>
          <div class="row-between"><span>Stickers</span><b class="num">${Object.keys(S.stickers).length}/${STICKERS.length}</b></div>
          <div class="row-between"><span>Trophies</span><b class="num">${Object.keys(S.trophies).length}/${TROPHIES.length}</b></div>
          <button class="btn" data-act="collection">Open the collection</button></div>
      </aside></div>`, {
      ...(X.homeActions || {}),
      review: startReview,
      level: (l) => { S.settings = { ...S.settings, level: l }; save(); sfx.play('tap'); renderHome(); },
      claim: (id, el) => {
        const r = claimQuest(id);
        if (!r) return;
        sfx.play('coin'); floatCoin(el, `+${r.coins}円`);
        if (r.allDone) { petals(); toast('All tickets punched! +50 yen and a free capsule ticket'); }
        setTimeout(() => { renderHome(); celebrate(r.levelUp); }, 350);
      },
      sprint: () => sprintSession({ id: 'global', title: 'Shinkansen Sprint', make: () => vocabQ(pick(VOCAB.filter((v) => quizzable(v) && inLevel(v.L) && v.L <= myMaxL() && v.kana.length < 14)), pick(['jp2en', 'en2jp'])), back: { name: 'home' } }),
      weak: () => quizSession({ title: 'Weak spots', keys: weakKeys().slice(0, 15), back: { name: 'home' } }),
      particles: () => {
        const P = new Set(['は', 'が', 'を', 'に', 'で', 'へ', 'と', 'も', 'の', 'か', 'や', 'から', 'まで', 'より', 'ね', 'よ', 'だけ', 'など', 'ごろ', 'ぐらい', 'くらい']);
        const keys = GRAMMAR.filter((g) => inLevel(g.lesson) && g.lesson <= myMaxL() + 1).flatMap((g) => g.drills.map((d, i) => [g, d, i])).filter(([, d]) => d.type === 'fill' && P.has(d.answer)).map(([g, , i]) => `g|${g.id}|${i}`);
        quizSession({ title: 'Particle dojo', keys: prioritize(keys).slice(0, 15), back: { name: 'home' } });
      },
      sentences: () => quizSession({ title: 'Sentence listening', keys: prioritize(EXAMPLES.filter((e) => inLevel(e.L) && e.L <= myMaxL() + 1).map((e) => 'e|' + e.id)).slice(0, 12), back: { name: 'home' } }),
    });
  }
  function startReview() {
    const due = dueKeys().slice(0, 30);
    let qs = due;
    if (qs.length < 10) {
      const fresh = [];
      for (const s of STATIONS) {
        if (!isLine(s) || s.level !== curLevel()) continue;
        for (const k of stationKeys(s)) if (stage(k) < 0 && !k.startsWith('k|')) fresh.push(k);
        if (fresh.length >= 12) break;
      }
      const newOnes = fresh.slice(0, 12 - qs.length);
      if (!qs.length && newOnes.length && newOnes.every((k) => k.startsWith('v|'))) return flashSession({ title: 'New words', keys: newOnes, back: { name: 'home' } });
      qs = [...qs, ...newOnes];
    }
    if (!qs.length) { toast('All caught up. Pick a station to keep going.'); return; }
    quizSession({ title: 'Daily review', keys: shuffle(qs), back: { name: 'home' }, review: true });
  }

  // ---------------------------------------------------------------- station
  function signHTML(st) {
    const same = STATIONS.filter((x) => x.level === st.level), i = same.indexOf(st), prev = same[i - 1], next = same[i + 1];
    return `<button class="back" data-act="home">${ICON.back} Route map</button>
      <div class="sign" style="--c:${lineColor(st)}">
        <div class="sign-main">${badgeHTML(st)}
          <div class="sign-title"><div class="jp">${esc(st.jp)}</div><div class="en">${esc(st.name)}${lessonName(st.L) ? ` · ${lessonName(st.L)}` : ''}</div></div>
          ${S.stamps[st.id] ? `<span class="stamp-mini" style="width:64px;height:64px">${stampSVG(st, S.stamps[st.id].date)}</span>` : ''}
        </div>
        <div class="sign-band"></div>
        <div class="sign-nav">${prev ? `<button data-act="station" data-arg="${prev.id}">← ${esc(prev.jp)}</button>` : '<span></span>'}${next ? `<button data-act="station" data-arg="${next.id}">${esc(next.jp)} →</button>` : '<span></span>'}</div>
      </div>`;
  }
  const act = (name, title, sub) => `<button class="act" data-act="${name}"><b>${title}</b><span>${sub}</span></button>`;
  const group = (en, jp, items) => (items.length ? `<div class="actgroup"><div class="eyebrow"><span class="pop">${jp}</span>${en}</div><div class="acts">${items.join('')}</div></div>` : '');
  function bossCard(st, sub) {
    const y = yokaiFor(st);
    return `<div class="bosscard">${yokaiSVG(y, S.stamps[st.id] ? 'gone' : 'idle')}<div><div class="eyebrow">Station battle</div><h3>${y.jp} · ${y.name} of ${esc(codeOf(st))}</h3><div class="muted small">${sub}</div></div>
      <button class="btn primary" data-act="boss">${S.stamps[st.id] ? 'Rematch' : 'Battle!'}</button></div>`;
  }
  function renderStation(st, tab) {
    if (st.kind === 'kanji') return renderKanjiHall(st);
    if (st.kind === 'verbs') return renderVerbs(st);
    if (st.kind === 'exam') return renderExam(st);
    if (st.kind === 'numbers') return renderNumbers(st);
    if (st.kind === 'academy') return renderAcademy(st);
    const back = { name: 'station', id: st.id, tab };
    const c = lineColor(st);
    const voc = stationVocab(st), gr = stationGrammar(st), kj = stationKanji(st), cj = stationConj(st), exs = stationExamples(st);
    const vk = () => prioritize(voc.map(vKey));
    const actions = {}, learn = [], play = [], gram = [], kana = [];
    if (st.kind === 'kana') {
      kana.push(act('hira', 'Hiragana', 'Sounds and letters'), act('kata', 'Katakana', 'Sounds and letters'), act('ktype', 'Kana typing', 'See it, type the sound'), act('kread', 'Read katakana words', 'コーヒー, テレビ, タクシー…'), act('kwh', 'Write hiragana', 'Stroke order, by hand'), act('kwk', 'Write katakana', 'Stroke order, by hand'), act('ksprint', 'Kana sprint', '60-second rush'));
      actions.kread = () => quizSession({ title: 'Read katakana words', keys: prioritize(VOCAB.filter((v) => isKataWord(v) && v.L <= 20).map(vKey)).slice(0, 15), mode: 'kanaread', back, color: c });
      const writeKana = (set) => writeSession({ title: set === 'h' ? 'Write hiragana' : 'Write katakana', items: shuffle(KANA.filter((k) => k.set === set && k.grp !== 'combo' && S.settings.kanaSets.includes(k.grp))).sort((a, b) => stage(kanaKey(a)) - stage(kanaKey(b))).slice(0, 10).map(kanaWriteItem), back, color: c });
      actions.kwh = () => writeKana('h'); actions.kwk = () => writeKana('k');
      actions.hira = () => quizSession({ title: 'Hiragana', keys: prioritize(kanaSel('h')).slice(0, 20), back, color: c });
      actions.kata = () => quizSession({ title: 'Katakana', keys: prioritize(kanaSel('k')).slice(0, 20), back, color: c });
      actions.ktype = () => quizSession({ title: 'Kana typing', keys: prioritize([...kanaSel('h'), ...kanaSel('k')]).slice(0, 20), mode: 'type', back, color: c });
      actions.ksprint = () => sprintSession({ id: 'kana', title: 'Kana sprint', make: () => { const key = pick([...kanaSel('h'), ...kanaSel('k')]); return kanaQ(KANA.find((x) => kanaKey(x) === key), pick(['c2r', 'r2c'])); }, back });
    }
    if (voc.length) {
      learn.push(act('learn', 'Flashcards', `${voc.length} words`), act('quiz', 'Word quiz', 'Adapts as you improve'), act('listen', 'Listening', 'Hear it, pick the meaning'), act('type', 'Typing', 'English → Japanese'), act('dictate', 'Dictation', 'Hear it, type it'));
      play.push(act('match', 'Match pairs', 'Beat the clock'), act('sprint', 'Shinkansen Sprint', '60 seconds of this lesson'));
      actions.learn = () => flashSession({ title: `${st.name}: flashcards`, keys: vk().slice(0, 15), back, color: c });
      actions.quiz = () => quizSession({ title: `${st.name}: word quiz`, keys: vk().slice(0, 15), back, color: c });
      actions.listen = () => quizSession({ title: `${st.name}: listening`, keys: vk().slice(0, 12), mode: 'listen', back, color: c });
      actions.type = () => quizSession({ title: `${st.name}: typing`, keys: vk().slice(0, 12), mode: 'type', back, color: c });
      actions.dictate = () => quizSession({ title: `${st.name}: dictation`, keys: vk().slice(0, 12), mode: 'dictate', back, color: c });
      actions.match = () => matchSession({ title: `${st.name}: match`, pool: voc.filter((v) => v.kana.length < 14), back, color: c });
      actions.sprint = () => sprintSession({ id: st.id, title: `${st.name}: sprint`, make: () => vocabQ(pick(voc), pick(['jp2en', 'en2jp'])), back });
    }
    if (gr.length) {
      gram.push(act('gram', 'Grammar drills', `${gr.length} patterns · particles, order, forms`));
      actions.gram = () => quizSession({ title: `${st.name}: grammar`, keys: prioritize(gr.flatMap(drillKeys)).slice(0, 15), back, color: c });
    }
    if (exs.length) {
      gram.push(act('sent', 'Sentence listening', `${exs.length} example sentences`));
      actions.sent = () => quizSession({ title: `${st.name}: sentences`, keys: prioritize(exs.map((e) => 'e|' + e.id)).slice(0, 10), back, color: c });
    }
    if (cj.length) {
      gram.push(act('conj', 'Form drills', [...new Set(cj.map(([f]) => FORMS[f].label))].join(', ')));
      actions.conj = () => quizSession({ title: `${st.name}: forms`, keys: prioritize(cj.map(([f, v]) => conjKey(f, v))).slice(0, 12), back, color: c });
    }
    if (kj.length) {
      gram.push(act('kj', 'Kanji', kj.map((k) => k.k).join('')), act('kw', 'Write the kanji', 'Stroke order, by hand'));
      actions.kj = () => quizSession({ title: `${st.name}: kanji`, keys: prioritize(kj.map(kanjiKey)).slice(0, 12), back, color: c });
      actions.kw = () => writeSession({ title: `${st.name}: writing`, items: kj.slice(0, 10).map(kanjiWriteItem), back, color: c });
    }
    const rd = stationReading(st), talk = [];
    for (const r of rd) talk.push(`<button class="act" data-act="read" data-arg="${r.id}"><b>${r.type === 'conversation' ? 'Conversation' : 'Reading'}</b><span>${esc(r.title)}</span></button>`);
    actions.boss = () => {
      let keys;
      if (st.kind === 'kana') keys = [...shuffle(KANA.filter((k) => k.grp !== 'combo').map(kanaKey)).slice(0, 14), ...shuffle(voc.map(vKey)).slice(0, 6)];
      else {
        const gk = shuffle(gr.flatMap(drillKeys)), kk = shuffle(kj.map(kanjiKey)), ck = shuffle(cj.map(([f, v]) => conjKey(f, v)));
        keys = [...gk.slice(0, 7), ...kk.slice(0, 2), ...ck.slice(0, 3)];
        keys = [...keys, ...shuffle(voc.map(vKey)).slice(0, 20 - keys.length)];
      }
      quizSession({ title: `${st.name}: battle`, keys: shuffle(keys), back, battle: st, color: 'var(--stamp)' });
    };
    const tabs = [];
    if (st.kind === 'kana') tabs.push(['hira', 'Hiragana'], ['kata', 'Katakana']);
    if (st.kind === 'lesson' && (LESSON_GUIDE[st.L] || gr.length)) tabs.push(['overview', 'Overview']);
    if (voc.length) tabs.push(['vocab', `Words (${voc.length})`]);
    if (gr.length) tabs.push(['grammar', `Grammar (${gr.length})`]);
    if (kj.length) tabs.push(['kanji', `Kanji (${kj.length})`]);
    tab = tab && tabs.some((t) => t[0] === tab) ? tab : (tabs[0] || [])[0];
    let panel = '';
    if (tab === 'vocab') panel = vocabTable(VOCAB.filter((v) => v.L === st.L));
    if (tab === 'grammar') panel = `${gr.length > 1 ? `<div class="chooser">${gr.map((g) => `<button class="chip" data-act="jump" data-arg="g-${g.id}">${esc(g.title)}</button>`).join('')}</div>` : ''}${gr.map(grammarCard).join('')}`;
    if (tab === 'overview') panel = overviewHTML(st, gr, voc, kj, rd);
    if (tab === 'kanji') panel = kanjiGrid(kj);
    if (tab === 'hira' || tab === 'kata') panel = kanaChart(tab === 'hira' ? 'h' : 'k');
    actions.tab = (t) => { go({ name: 'station', id: st.id, tab: t }); const tb = document.querySelector('.tabs'); if (tb) tb.scrollIntoView({ block: 'start' }); };
    actions.jump = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' }); };
    actions.gojump = (id) => { go({ name: 'station', id: st.id, tab: 'grammar' }); const el = document.getElementById('g-' + id); if (el) el.scrollIntoView({ block: 'start' }); };
    actions.learnfirst = () => { const ks = (LESSON_GUIDE[st.L] || {}).first || []; const keys = ks.map((k) => voc.find((v) => v.kana === k) || VOCAB.find((v) => v.kana === k)).filter(Boolean).map(vKey); flashSession({ title: `${st.name}: first words`, keys, back: { name: 'station', id: st.id, tab: 'overview' }, color: c }); };
    actions.gpoint = (id) => { const g = GBY.get(id); quizSession({ title: g.title, keys: shuffle(drillKeys(g)), back: { name: 'station', id: st.id, tab: 'grammar' }, color: c }); };
    actions.kdetail = (k) => kanjiModal(KBY.get(k));
    actions.kset = (s) => { const set = new Set(S.settings.kanaSets); set.has(s) ? set.delete(s) : set.add(s); if (!set.size) set.add('basic'); S.settings.kanaSets = [...set]; save(); go({ name: 'station', id: st.id, tab }); };
    const mb = [['Words', mastery(voc.map(vKey))], ['Grammar', mastery(gr.flatMap(drillKeys))], ['Kanji', mastery(kj.map(kanjiKey))]].filter((_, i) => [voc, gr, kj][i].length);
    if (st.kind === 'kana') mb.unshift(['Kana', mastery(KANA.map(kanaKey))]);
    render(`<div class="station" style="--c:${c}">
      ${signHTML(st)}
      <div class="mbars">${mb.map(([k, m]) => `<div>${k} · ${Math.round(m * 100)}%${meter(m)}</div>`).join('')}</div>
      ${st.kind === 'kana' ? `<div class="row-between"><span class="muted small">Kana sets in drills:</span><div class="chooser">${['basic', 'voiced', 'combo'].map((s) => `<button class="chip" data-act="kset" data-arg="${s}" aria-pressed="${S.settings.kanaSets.includes(s)}">${{ basic: 'Basic', voiced: 'Dakuten ゛゜', combo: 'Combos きゃ' }[s]}</button>`).join('')}</div></div>` : ''}
      ${group('Kana', 'かな', kana)}${group('Learn', 'まなぶ', learn)}${group('Grammar and more', 'ぶんぽう', gram)}${group('Read and talk', 'よむ・はなす', talk)}${group('Play', 'あそぶ', play)}
      ${bossCard(st, `20 questions. Land ${Math.ceil(20 * 0.8)} hits before you lose 5 hearts to win the stamp.`)}
      <div class="tabs" role="tablist">${tabs.map(([id, l]) => `<button role="tab" aria-selected="${id === tab}" data-act="tab" data-arg="${id}">${l}</button>`).join('')}</div>
      <div class="stack">${panel}</div>
    </div>`, actions);
  }
  const kanaSel = (set) => KANA.filter((k) => k.set === set && S.settings.kanaSets.includes(k.grp)).map(kanaKey);
  const cellHTML = (c, head) => {
    if (/wrong|incorrect|not this/i.test(head || '')) return `<s class="muted">${esc(c)}</s>`;
    return /[\u3040-\u30ff\u4e00-\u9fff]/.test(c) && !/[（＿]/.test(c) && speech.ok ? `<button class="cellsay" data-act="say" data-arg="${esc(c)}">${esc(c)}</button>` : esc(c);
  };
  const tableHTML = (t) => `<div class="stable">${t.title ? `<div class="stitle">${esc(t.title)}</div>` : ''}<div class="tblwrap"><table class="vocab">${t.headers ? `<thead><tr>${t.headers.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>` : ''}<tbody>${t.rows.map((r) => `<tr>${r.map((c, i) => `<td>${cellHTML(c, t.headers && t.headers[i])}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
  const dotHTML = (k) => { const s = stage(k); return `<span class="dot ${s >= 4 ? 'm' : s >= 0 ? 'l' : ''}" title="${s >= 4 ? 'In long-term memory' : s >= 0 ? 'Learning' : 'New'}"></span>`; };
  const wordRow = (v) => `<div class="wrow">${dotHTML(vKey(v))}<div class="wjp"><span class="wk">${esc(v.kana)}</span>${v.kanji ? `<span class="wkj">${esc(v.kanji)}</span>` : ''}</div>
    <div class="wen"><b>${esc(v.en)}</b>${/^v[123]$/.test(v.pos) ? ` <span class="pill">Group ${v.pos[1]}</span>` : ''}<span class="muted small">${esc(v.ro)}</span>${v.use ? `<span class="wuse">${rubyLine(v.use)}${v.useEn ? ` <span class="muted">${esc(v.useEn)}</span>` : ''}</span>` : ''}${v.note ? `<span class="muted small">${esc(v.note)}</span>` : ''}</div>${sayBtn(v.kana)}</div>`;
  function vocabTable(list) {
    const sections = GROUPS.map(([id, en, jp]) => [en, jp, list.filter((v) => groupOf(v) === id)]).filter(([, , l]) => l.length);
    return `<div class="chooser">${sections.map(([en, , l], i) => `<button class="chip" data-act="jump" data-arg="wg${i}">${esc(en)} <span class="muted">${l.length}</span></button>`).join('')}</div>
      ${sections.map(([en, jp, l], i) => `<section class="wgroup" id="wg${i}"><h3>${esc(en)} <span class="muted small">${esc(jp)}</span></h3><div class="wlist">${l.map(wordRow).join('')}</div></section>`).join('')}
      <div class="muted small"><span class="dot"></span> new · <span class="dot l"></span> learning · <span class="dot m"></span> in long-term memory</div>`;
  }
  function grammarCard(g) {
    const s = g.study;
    const head = `<div class="row-between"><h3>${esc(g.title)}</h3><button class="btn sm" data-act="gpoint" data-arg="${g.id}">Drill this (${g.drills.length})</button></div><div class="meaning">${esc(g.meaning)}</div>`;
    const ex = `<div class="stitle">Examples</div><div>${g.examples.map((x) => `<div class="ex">${sayBtn(rubyToKana(x.jp))}<div><div class="jp">${rubyLine(x.jp)}</div><div class="ro">${esc(x.ro)}</div><div class="en">${esc(x.en)}</div></div></div>`).join('')}</div>`;
    if (!s) return `<article class="gpoint" id="g-${g.id}">${head}<p>${esc(g.explain)}</p>${ex}</article>`;
    return `<article class="gpoint" id="g-${g.id}">${head}
      ${s.formula && s.formula.length ? `<div class="formula">${s.formula.map((f) => `<code>${esc(f)}</code>`).join('')}</div>` : ''}
      ${s.points && s.points.length ? `<ul class="spoints">${s.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}
      ${(s.tables || []).map(tableHTML).join('')}
      ${ex}
      ${s.mistakes && s.mistakes.length ? `<div class="stitle">Common mistakes</div><div class="mistakes">${s.mistakes.map((m) => `<div class="mrow"><div class="bad"><span aria-label="Wrong">✗</span> ${esc(m.bad)}</div><div class="good"><span aria-label="Right">✓</span> ${esc(m.good)}</div><div class="muted small">${esc(m.why)}</div></div>`).join('')}</div>` : ''}
      ${s.tip ? `<div class="tip">${esc(s.tip)}</div>` : ''}</article>`;
  }
  function overviewHTML(st, gr, voc, kj, rd) {
    const G = LESSON_GUIDE[st.L] || {};
    const first = (G.first || []).map((k) => voc.find((v) => v.kana === k) || VOCAB.find((v) => v.kana === k)).filter(Boolean);
    const verbsN = voc.filter((v) => /^v[123]$/.test(v.pos)).length;
    return `${G.can && G.can.length ? `<article class="gpoint"><h3>After this lesson you can</h3><ul class="spoints can">${G.can.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>${G.tip ? `<div class="tip">${esc(G.tip)}</div>` : ''}</article>` : ''}
      ${gr.length ? `<article class="gpoint"><h3>Patterns in this lesson</h3><div class="pindex">${gr.map((g) => `<button class="pbtn" data-act="gojump" data-arg="${g.id}"><b>${esc(g.title)}</b><span>${esc(g.meaning)}</span></button>`).join('')}</div></article>` : ''}
      ${first.length ? `<article class="gpoint"><div class="row-between"><h3>Learn these words first</h3><button class="btn sm" data-act="learnfirst">Flashcards</button></div><div class="wlist">${first.map(wordRow).join('')}</div></article>` : ''}
      <div class="muted small">This lesson: ${voc.length} words${verbsN ? ` (${verbsN} verbs)` : ''}, ${gr.length} grammar patterns, ${kj.length} kanji, ${rd.length} reading texts.</div>`;
  }
  const kanjiGrid = (list) => `<div class="kgrid">${list.map((k) => `<button class="kcell ${stage(kanjiKey(k)) >= 4 ? 'm' : ''}" data-act="kdetail" data-arg="${esc(k.k)}"><b>${esc(k.k)}</b><span>${esc(k.m)}</span></button>`).join('')}</div>`;
  function kanaChart(set) {
    const grp = (g) => KANA.filter((k) => k.set === set && k.grp === g);
    const cell = (k) => `<button class="kcell ${stage(kanaKey(k)) >= 4 ? 'm' : ''}" data-act="say" data-arg="${esc(k.c)}"><b>${esc(k.c)}</b><span>${esc(k.r)}</span></button>`;
    return `<div class="eyebrow">Basic</div><div class="kgrid">${grp('basic').map(cell).join('')}</div>
      <div class="eyebrow">Dakuten ゛ and handakuten ゜</div><div class="kgrid">${grp('voiced').map(cell).join('')}</div>
      <div class="eyebrow">Combination sounds</div><div class="kgrid">${grp('combo').map(cell).join('')}</div><div class="muted small">Tap a letter to hear it.</div>`;
  }
  function kanjiModal(k) {
    const m = modal(`<div class="row-between"><div class="glyph">${esc(k.k)}</div><button class="btn" data-x>Close</button></div>
      ${STROKES[k.k] ? `<div class="strokebox">${strokeSVG(k.k)}<div class="stack"><button class="btn sm" data-replay>Replay stroke order</button><button class="btn sm primary" data-write>Write it</button></div></div>` : ''}
      <div><b>${esc(k.m)}</b> · ${k.strokes || '?'} strokes · ${k.level}${lessonName(k.lesson) ? ` · ${lessonName(k.lesson)}` : ''}</div>
      <div class="small">音読み on: ${esc((k.on || []).join('、') || '—')}<br>訓読み kun: ${esc((k.kun || []).join('、') || '—')}</div>
      <div>${(k.words || []).map((w) => `<div class="ex">${sayBtn(w.r)}<div><div style="font-size:20px">${esc(w.w)} <span class="muted" style="font-size:15px">${esc(w.r)}</span></div><div class="en">${esc(w.m)}</div></div></div>`).join('')}</div>`, (e) => {
      if (e.target.closest('[data-replay]')) animateStrokes(m.querySelector('.strokes'));
      if (e.target.closest('[data-write]')) { const back = { ...view }; m.remove(); writeSession({ title: `Write ${k.k}`, items: [kanjiWriteItem(k)], back }); }
    });
    const sv = m.querySelector('.strokes'); if (sv) animateStrokes(sv);
  }

  // ---------------------------------------------------------------- special stations
  function renderKanjiHall(st) {
    const back = { name: 'station', id: st.id };
    const bands = { N5: [[1, 5], [6, 10], [11, 15], [16, 20], [21, 26]], N4: [[126, 130], [131, 135], [136, 140], [141, 145], [146, 150]], N3: [[201, 204], [205, 208], [209, 212], [213, 216], [217, 220], [221, 224]], N2: [[301, 304], [305, 308], [309, 312], [313, 316], [317, 320], [321, 324]], N1: [[401, 404], [405, 408], [409, 412], [413, 416], [417, 420], [421, 424]] }[st.level];
    const sel = view.band ?? 0, mine = KANJI.filter((k) => k.level === st.level && !k.extra), extras = KANJI.filter((k) => k.level === st.level && k.extra);
    const list = sel === 'extra' ? extras : sel === 'all' ? mine : mine.filter((k) => k.lesson >= bands[sel][0] && k.lesson <= bands[sel][1]);
    const c = lineColor(st), bname = (b) => (['N3', 'N2', 'N1'].includes(st.level) ? `Units ${b[0] % 100}–${b[1] % 100}` : st.level === 'N4' ? `Lessons ${b[0] - 100}–${b[1] - 100}` : `Lessons ${b[0]}–${b[1] > 25 ? '25+' : b[1]}`);
    render(`<div class="station" style="--c:${c}">${signHTML(st)}
      <p class="muted" style="margin:0">All ${mine.length} ${st.level} kanji, grouped by where you first need them. Tap one for its stroke order, readings and words.</p>
      <div class="chooser">${bands.map((b, i) => `<button class="chip" data-act="band" data-arg="${i}" aria-pressed="${sel === i}">${bname(b)}</button>`).join('')}<button class="chip" data-act="band" data-arg="all" aria-pressed="${sel === 'all'}">All</button>${extras.length ? `<button class="chip" data-act="band" data-arg="extra" aria-pressed="${sel === 'extra'}">Also in your words (${extras.length})</button>` : ''}</div>
      ${group('Practise this group', 'れんしゅう', [act('km', 'Meanings', 'Kanji → meaning'), act('kr', 'Readings', 'Word → reading'), act('kw', 'Words', 'Meaning → kanji word'), act('kwr', 'Write them', 'Stroke order, by hand'), act('ksp', 'Kanji sprint', '60-second rush')])}
      ${bossCard(st, `20 kanji from all of ${st.level}. Win to take the Kanji Hall stamp.`)}
      ${kanjiGrid(list)}</div>`, {
      band: (b) => { view.band = b === 'all' || b === 'extra' ? b : +b; renderKanjiHall(st); },
      km: () => quizSession({ title: 'Kanji meanings', keys: prioritize(list.map(kanjiKey)).slice(0, 15), mode: 'meaning', back, color: c }),
      kr: () => quizSession({ title: 'Kanji readings', keys: prioritize(list.map(kanjiKey)).slice(0, 15), mode: 'reading', back, color: c }),
      kw: () => quizSession({ title: 'Kanji words', keys: prioritize(list.map(kanjiKey)).slice(0, 15), mode: 'word', back, color: c }),
      kwr: () => writeSession({ title: 'Write the kanji', items: prioritize(list.map(kanjiKey)).slice(0, 10).map((key) => kanjiWriteItem(KBY.get(key.slice(2)))), back, color: c }),
      ksp: () => sprintSession({ id: st.id, title: 'Kanji sprint', make: () => kanjiQ(pick(list), pick(['meaning', 'reading'])), back }),
      boss: () => quizSession({ title: `${st.name}: battle`, keys: shuffle(mine.map(kanjiKey)).slice(0, 20), back, battle: st, color: 'var(--stamp)' }),
      kdetail: (k) => kanjiModal(KBY.get(k)),
    });
  }
  function renderVerbs(st) {
    const back = { name: 'station', id: st.id };
    const n5 = st.level === 'N5';
    const forms = view.forms || (n5 ? ['mneg', 'mpast', 'mpastneg'] : ['pot', 'vol']), maxL = view.maxL || (n5 ? 20 : 150), c = lineColor(st);
    const keysFor = () => forms.flatMap((f) => (FORMS[f].verb ? conjVerbs(maxL) : conjAdjs(maxL)).filter((v) => canForm(f, v)).map((v) => conjKey(f, v)));
    const verbs = conjVerbs(maxL);
    const fam = (id, label) => `<div class="field"><label>${label}</label><div class="chooser">${Object.entries(FORMS).filter(([, F]) => F.fam === id).map(([f, F]) => `<button class="chip" data-act="form" data-arg="${f}" aria-pressed="${forms.includes(f)}" title="Lesson ${F.L}">${esc(F.label)}</button>`).join('')}</div></div>`;
    render(`<div class="station" style="--c:${c}">${signHTML(st)}
      ${n5 ? `${fam('polite', 'Polite ます forms · Lessons 4–6')}${fam('plain', 'Plain forms · Lessons 14–20')}${fam('pattern', 'Patterns built on them · Lessons 13–25')}${fam('adj', 'Adjectives · Lessons 8–16')}` : `${fam('n4', 'New verb forms · Lessons 27–48')}${fam('n4p', 'Patterns · Lessons 28–44')}${fam('plain', 'Review: plain forms')}`}
      <div class="field"><label>Words up to</label><div class="chooser">${(n5 ? [5, 10, 15, 20, 26] : [130, 140, 150]).map((l) => `<button class="chip" data-act="maxl" data-arg="${l}" aria-pressed="${maxL === l}">${l === 26 ? 'All N5' : lessonName(l)}</button>`).join('')}</div></div>
      ${group('Practise', 'れんしゅう', [act('vq', 'Pick the form', 'Multiple choice'), act('vt', 'Type the form', 'Romaji or kana'), act('vsp', 'Forms sprint', '60-second rush'), `<button class="act" data-act="guide" data-arg="verbs"><b>Verb cheat sheet</b><span>Every form on one page</span></button>`])}
      ${bossCard(st, n5 ? 'ます・て・ない・dictionary・た forms mixed, 20 questions.' : 'Potential, volitional, ば, passive, causative and imperative mixed, 20 questions.')}
      <article class="gpoint"><h3>How to find a verb's group</h3>
        ${tableHTML({ headers: ['Group', 'How to spot it', 'Example', 'て-form'], rows: [['Group 1', 'い-sound before ます', 'かきます', 'かいて'], ['Group 2', 'え-sound before ます', 'たべます', 'たべて'], ['Group 2', 'Exceptions to learn', 'みます', 'みて'], ['Group 3', 'します and きます only', 'します', 'して'], ['Group 3', 'します and きます only', 'きます', 'きて']] })}
        ${tableHTML({ title: 'Group 1 て-form: look at the sound before ます', headers: ['Sound', 'Change', 'ます-form', 'て-form'], rows: [['い', 'って', 'かいます', 'かって'], ['ち', 'って', 'まちます', 'まって'], ['り', 'って', 'かえります', 'かえって'], ['み', 'んで', 'のみます', 'のんで'], ['び', 'んで', 'よびます', 'よんで'], ['に', 'んで', 'しにます', 'しんで'], ['き', 'いて', 'かきます', 'かいて'], ['ぎ', 'いで', 'およぎます', 'およいで'], ['し', 'して', 'はなします', 'はなして']] })}
        <div class="tip">One exception: いきます becomes いって, not いいて.</div></article>
      <div class="tblwrap"><table class="vocab"><thead><tr><th>ます-form</th><th>Grp</th><th>ません</th><th>ました</th><th>ませんでした</th><th>て</th><th>ない</th><th>Dictionary</th><th>た</th><th>Meaning</th></tr></thead><tbody>
        ${verbs.map((v) => { const f = verbForms(v); return `<tr><td class="kana">${esc(v.kana)}</td><td class="pop">${v.pos[1]}</td><td>${esc(f.mneg)}</td><td>${esc(f.mpast)}</td><td>${esc(f.mpastneg)}</td><td>${esc(f.te)}</td><td>${esc(f.nai)}</td><td>${esc(f.dict)}</td><td>${esc(f.ta)}</td><td class="small">${esc(v.en)}</td></tr>`; }).join('')}
      </tbody></table></div></div>`, {
      form: (f) => { const s = new Set(forms); s.has(f) ? s.delete(f) : s.add(f); if (!s.size) s.add('mneg'); view.forms = [...s]; renderVerbs(st); },
      maxl: (l) => { view.maxL = +l; renderVerbs(st); },
      vq: () => quizSession({ title: 'Verb forms', keys: prioritize(keysFor()).slice(0, 15), mode: 'mc', back, color: c }),
      vt: () => quizSession({ title: 'Verb forms: typing', keys: prioritize(keysFor()).slice(0, 15), mode: 'type', back, color: c }),
      vsp: () => sprintSession({ id: st.id, title: 'Forms sprint', make: () => keyToQ(pick(keysFor()), 'mc'), back }),
      boss: () => quizSession({ title: 'Verb Forge: battle', keys: shuffle(stationKeys(st)).slice(0, 20), mode: 'mc', back, battle: st, color: 'var(--stamp)' }),
    });
  }
  function renderNumbers(st) {
    const back = { name: 'station', id: st.id }, c = lineColor(st);
    const run = (kind, mode, title) => quizSession({ title, questions: Array.from({ length: 12 }, () => numQ(kind, mode)), back, color: c, noRequeue: true });
    const kinds = [['number', 'Numbers', '1 to 99,999'], ['price', 'Prices', 'いくらですか'], ['time', 'Time', 'Clock faces'], ['date', 'Dates', 'The tricky day names'], ['counter', 'Counters', 'つ・にん・まい・ほん…'], ['age', 'Ages', 'なんさいですか']];
    const actions = { mixed: () => run(null, 'mc', 'Numbers mix'), typed: () => run(null, 'type', 'Numbers: typing'), nsp: () => sprintSession({ id: 'numbers', title: 'Numbers sprint', make: () => numQ(null, 'mc'), back }),
      boss: () => quizSession({ title: 'Numbers Depot: battle', questions: Array.from({ length: 20 }, () => numQ()), back, battle: st, color: 'var(--stamp)' }) };
    kinds.forEach(([k, t]) => { actions['n_' + k] = () => run(k, view.typeNums ? 'type' : 'mc', t); });
    actions.tt = () => { view.typeNums = !view.typeNums; renderNumbers(st); };
    render(`<div class="station" style="--c:${c}">${signHTML(st)}
      <p class="muted" style="margin:0">Numbers, prices, clock times, dates, counters and ages from Lessons 3, 4, 5 and 11. Questions are generated fresh every time.</p>
      <div class="row-between"><span class="muted small">Answer style</span><div class="chooser"><button class="chip" data-act="tt" aria-pressed="${!view.typeNums}">Multiple choice</button><button class="chip" data-act="tt" aria-pressed="${!!view.typeNums}">Type it</button></div></div>
      ${group('Pick a topic', 'かず', kinds.map(([k, t, s]) => act('n_' + k, t, s)))}
      ${group('Mixed', 'ミックス', [act('mixed', 'Mixed bag', 'All six topics'), act('typed', 'Mixed, typed', 'Romaji or kana'), act('nsp', 'Numbers sprint', '60-second rush')])}
      ${bossCard(st, '20 generated questions across all six topics.')}
      <article class="gpoint"><h3>Counters 1–10</h3><div class="tblwrap"><table class="vocab"><tbody>
        ${Object.values(COUNTERS).map((C) => `<tr><td class="small"><b>${esc(C.label)}</b></td><td>${C.words.map((w, i) => `<span title="${i + 1}">${esc(w)}</span>`).join('・')}</td></tr>`).join('')}
      </tbody></table></div></article>
      <article class="gpoint"><h3>Days of the month</h3>${tableHTML({ headers: ['Day', 'Reading', 'Day', 'Reading'], rows: [[1, 8], [2, 9], [3, 10], [4, 14], [5, 20], [6, 24], [7, 19]].map(([a, b]) => [`${a}日`, dayKana(a), `${b}日`, dayKana(b)]) })}<div class="tip">All other days are number + にち: じゅういちにち, じゅうごにち. Watch 17 (しち) and 19 (く).</div></article>
      <article class="gpoint"><h3>Months</h3>${tableHTML({ headers: ['Month', 'Reading', 'Month', 'Reading'], rows: [1, 2, 3, 4, 5, 6].map((m) => [`${m}月`, MONTHS[m], `${m + 6}月`, MONTHS[m + 6]]) })}<div class="tip">Three to watch: しがつ (4), しちがつ (7), くがつ (9).</div></article>
      <article class="gpoint"><h3>Telling the time</h3>${tableHTML({ title: 'Hours', headers: ['Hour', 'Reading', 'Hour', 'Reading'], rows: [1, 2, 3, 4, 5, 6].map((h) => [`${h}時`, HOURS[h], `${h + 6}時`, HOURS[h + 6]]) })}
        ${tableHTML({ title: 'Minutes', headers: ['Minutes', 'Reading', 'Minutes', 'Reading'], rows: [1, 2, 3, 4, 5].map((m) => [`${m}分`, ML.funKana(m), `${m + 5}分`, ML.funKana(m + 5)]) })}<div class="tip">Half past is はん: くじはん is 9:30.</div></article>
      <article class="gpoint"><h3>Big numbers</h3>${tableHTML({ title: 'Sounds that change', headers: ['Number', 'Reading', 'Number', 'Reading'], rows: [[300, 3000], [600, 8000], [800, 10000]].map(([a, b]) => [a.toLocaleString('en-US'), numKana(a), b.toLocaleString('en-US'), numKana(b)]) })}</article>
    </div>`, actions);
  }
  function renderExam(st) {
    const back = { name: 'station', id: st.id };
    render(`<div class="station" style="--c:${lineColor(st)}">${signHTML(st)}
      <article class="gpoint"><h3>Practice test, N5 style</h3>
        <p>About 33 questions in the order of the real exam sections: kanji reading (漢字読み), writing (表記), vocabulary (語彙), grammar (文法), reading (読解) and listening (聴解), all from ${st.level} material. Score 70% to collect the stamp.</p>
        <p class="muted small">Use this to find weak spots, then drill them at their station. The Guidebook explains how the real exam works.</p>
        <div><button class="btn primary" data-act="start">Start the mock exam</button></div></article>
      ${S.stamps[st.id] ? `<div class="muted">Best score: ${S.stamps[st.id].score}%</div>` : ''}</div>`, {
      start: () => {
        const lvl = st.level, inL = (L) => levelOfL(L) === lvl;
        const vk = VOCAB.filter((v) => quizzable(v) && v.L > 0 && inL(v.L) && v.pos !== 'exp');
        const withK = shuffle(vk.filter((v) => v.kanji && hasKanji(v.kanji) && v.kanji.length <= 4));
        const qs = [];
        withK.slice(0, 7).forEach((v) => qs.push({ ...vocabQ(v, 'kanji'), section: '漢字読み Kanji reading' }));
        withK.slice(7, 12).forEach((v) => {
          const pool = vk.filter((x) => x.kanji && hasKanji(x.kanji));
          const opts = shuffle([v, ...distractors(v, pool, 3, (x) => x.kanji)]);
          qs.push({ key: vKey(v), cat: 'vocab', kind: 'mc', section: '表記 Writing', label: 'Which is the correct kanji?', prompt: `<div class="glyph mid">${esc(v.kana)}</div>`, options: opts.map((x) => ({ html: `<span class="jpo">${esc(x.kanji)}</span>`, val: x.id })), answer: v.id, after: `<div class="ans">${esc(v.kanji)}</div><div>${esc(v.en)}</div>` });
        });
        shuffle(vk).slice(0, lvl === 'N5' ? 6 : 8).forEach((v) => qs.push({ ...vocabQ(v, pick(['en2jp', 'jp2en'])), section: '語彙 Vocabulary' }));
        if (lvl === 'N5') qs.push({ ...numQ('date'), section: '語彙 Vocabulary' }, { ...numQ('counter'), section: '語彙 Vocabulary' });
        const drills = shuffle(GRAMMAR.filter((g) => inL(g.lesson)).flatMap((g) => g.drills.map((d, i) => [g, i]).filter(([, i]) => g.drills[i].type !== 'order')));
        drills.slice(0, 7).forEach(([g, i]) => qs.push({ ...grammarQ(g, i), section: '文法 Grammar' }));
        const texts = READING.filter((r) => inL(r.lesson));
        const psg = shuffle(texts.filter((r) => r.type === 'passage' && (!['N3', 'N2', 'N1'].includes(lvl) || r.skill === 'exam' || !r.skill)))[0], cv = shuffle(texts.filter((r) => r.type === 'conversation'))[0];
        if (psg) psg.questions.forEach((_, i) => qs.push({ ...readingQ(psg, i), section: '読解 Reading' }));
        shuffle(EXAMPLES.filter((e) => inL(e.L))).slice(0, cv ? 2 : 3).forEach((e) => qs.push({ ...sentenceQ(e), section: '聴解 Listening' }));
        if (cv) qs.push({ ...readingQ(cv, 0, 'listen'), section: '聴解 Listening' });
        quizSession({ title: `${lvl} mock exam`, questions: qs, back, exam: st, pass: 70, color: 'var(--stamp)', noRequeue: true });
      },
    });
  }

  // ---------------------------------------------------------------- practice pages
  function renderDict() {
    const q = view.q || '';
    const norm = (s) => s.toLowerCase().replace(/[āâ]/g, 'a').replace(/[īî]/g, 'i').replace(/[ūû]/g, 'u').replace(/[ēê]/g, 'e').replace(/[ōô]/g, 'o');
    const find = (term) => {
      const t = norm(term.trim()); if (!t) return [];
      const conv = romajiToKana(t, false), k = /[a-z]/.test(conv) ? '' : normKana(romajiToKana(t, true));
      return VOCAB.filter((v) => normKana(v.kana).includes(k) && k.length > 0 && /[぀-ヿ]/.test(k) || (v.kanji || '').includes(term.trim()) || norm(v.ro).includes(t) || norm(v.en).includes(t)).slice(0, 80);
    };
    const results = find(q);
    render(`<div class="station"><button class="back" data-act="home">${ICON.back} Route map</button>
      <div class="hero" style="grid-template-columns:96px minmax(0,1fr)">${mascotSVG('wow').replace('<svg', '<svg style="width:96px;height:96px"')}<div class="stack"><h1>じしょ · Dictionary</h1><p>Search ${VOCAB.length.toLocaleString('en-US')} words in English, romaji, kana or kanji.</p></div></div>
      <input class="search" id="dq" type="search" placeholder="e.g. train, densha, でんしゃ, 電車" value="${esc(q)}" aria-label="Search words" autocomplete="off">
      <div id="dres">${dictResults(results, q)}</div></div>`, { word: (id) => wordModal(VBY.get(id)), station: (id) => go({ name: 'station', id }) }, () => {
      const inp = document.getElementById('dq');
      inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length);
      inp.addEventListener('input', () => { view.q = inp.value; document.getElementById('dres').innerHTML = dictResults(find(inp.value), inp.value); });
    });
  }
  function dictResults(list, q) {
    if (!q.trim()) return '<p class="muted">Start typing to search.</p>';
    if (!list.length) return '<p class="muted">No words found. Try the English meaning or a different spelling.</p>';
    return `<div class="tblwrap"><table class="vocab"><tbody>${list.map((v) => `<tr><td class="kana"><button class="back" style="color:var(--ink);font-size:17px" data-act="word" data-arg="${esc(v.id)}">${esc(v.kana)}</button></td><td>${esc(v.kanji)}</td><td>${esc(v.en)}</td><td><span class="pill ${v.L > 20 ? 'express' : ''}">${v.L === 0 ? 'Kana' : lessonName(v.L) || 'N5'}</span></td><td>${sayBtn(v.kana)}</td></tr>`).join('')}</tbody></table></div>`;
  }
  function wordModal(v) {
    const ex = exampleFor(v), s = stage(vKey(v));
    const st = SBY.get('L' + v.L);
    const m = modal(`<div class="row-between"><div class="glyph mid">${jpHTML(v, 'kanji')}</div><button class="btn" data-x>Close</button></div>
      <div style="display:flex;gap:10px;align-items:center">${sayBtn(v.kana)}<div><b>${esc(v.en)}</b><div class="muted small">${esc(v.kana)} · ${esc(v.ro)}${v.note ? ' · ' + esc(v.note) : ''}</div>${v.use ? `<div class="wuse">${rubyLine(v.use)}${v.useEn ? ` <span class="muted">${esc(v.useEn)}</span>` : ''}</div>` : ''}</div></div>
      ${ex ? `<div class="ex">${sayBtn(rubyToKana(ex.jp))}<div><div class="jp">${rubyLine(ex.jp)}</div><div class="ro">${esc(ex.ro)}</div><div class="en">${esc(ex.en)}</div></div></div>` : ''}
      <div class="row-between"><span class="pill">${s >= 4 ? 'In long-term memory' : s >= 0 ? 'Learning' : 'New'}</span>${st ? `<button class="btn sm primary" data-go="${st.id}">Go to ${codeOf(st)}</button>` : ''}</div>`, (e) => {
      const g = e.target.closest('[data-go]'); if (g) { m.remove(); go({ name: 'station', id: g.dataset.go }); }
    });
  }
  function mixPools(a, b) {
    const inL = (L) => L >= a && L <= b;
    const vs = VOCAB.filter((v) => quizzable(v) && inL(v.L));
    const forms = [];
    for (const f of Object.keys(FORMS)) {
      if (FORMS[f].L > b) continue;
      const all = (FORMS[f].verb ? conjVerbs(b) : conjAdjs(b)).filter((v) => canForm(f, v)), here = all.filter((v) => inL(v.L));
      for (const v of here.length ? here : all) forms.push([conjKey(f, v), 'mc']);
    }
    return {
      words: vs.map((v) => [vKey(v), 'auto']), listen: vs.map((v) => [vKey(v), 'listen']), typing: vs.map((v) => [vKey(v), 'type']),
      grammar: GRAMMAR.filter((g) => inL(g.lesson)).flatMap(drillKeys).map((k) => [k]), sentences: EXAMPLES.filter((e) => inL(e.L)).map((e) => ['e|' + e.id]),
      reading: READING.filter((r) => inL(r.lesson)).flatMap(readingKeys).map((k) => [k]),
      kanji: KANJI.filter((k) => inL(k.lesson)).map((k) => [kanjiKey(k), 'auto']), forms,
    };
  }
  function renderMix() {
    const [lo, hi] = levelRange();
    const mx = view.mx && inLevel(view.mx.from) ? view.mx : (view.mx = { from: lo, to: Math.min(myMaxL(), hi === 26 ? 25 : hi), types: ['words', 'grammar', 'forms'], n: 20 });
    const types = [['words', 'Words'], ['listen', 'Listening'], ['typing', 'Typing'], ['grammar', 'Grammar'], ['sentences', 'Sentences'], ['reading', 'Reading'], ['kanji', 'Kanji'], ['forms', 'Verb forms'], ['numbers', 'Numbers']];
    const Ls = STATIONS.filter((s) => s.level === curLevel() && s.kind === 'lesson' && lessonName(s.L)).map((s) => s.L);
    const a = Math.min(mx.from, mx.to), b = Math.max(mx.from, mx.to), pools = mixPools(a, b);
    const count = (k) => (k === 'numbers' ? Infinity : pools[k].length);
    const empty = types.filter(([k]) => !count(k));
    const live = mx.types.filter((k) => count(k));
    render(`<div class="station"><button class="back" data-act="home">${ICON.back} Route map</button>
      <h1>ミックス · Custom mix <span class="pill">${curLevel()}</span></h1>
      <div class="card"><div class="field"><label for="mfrom">Lessons</label><div class="row-between" style="justify-content:flex-start">
        <select id="mfrom" class="chip">${Ls.map((l) => `<option value="${l}" ${l === mx.from ? 'selected' : ''}>${lessonName(l)}</option>`).join('')}</select> to
        <select id="mto" class="chip">${Ls.map((l) => `<option value="${l}" ${l === mx.to ? 'selected' : ''}>${lessonName(l)}</option>`).join('')}</select></div></div>
      <div class="field"><label>Question types</label><div class="chooser">${types.map(([k, l]) => { const n = count(k); return `<button class="chip" data-act="mt" data-arg="${k}" aria-pressed="${live.includes(k)}" ${n ? '' : 'disabled'}>${l}${n === Infinity ? '' : ` <span class="muted">${n}</span>`}</button>`; }).join('')}</div>
        ${empty.length ? `<div class="muted small">Not in these lessons: ${empty.map(([, l]) => l).join(', ')}. Verb forms start at Lesson 4, when the first verbs appear.</div>` : ''}</div>
      <div class="field"><label>How many</label><div class="chooser">${[10, 20, 30, 50].map((n) => `<button class="chip" data-act="mn" data-arg="${n}" aria-pressed="${mx.n === n}">${n}</button>`).join('')}</div></div>
      <button class="btn primary" data-act="go" ${live.length ? '' : 'disabled'}>${live.length ? 'Start the mix' : 'Pick a question type'}</button></div></div>`, {
      mt: (k) => { const s = new Set(mx.types); s.has(k) ? s.delete(k) : s.add(k); mx.types = [...s]; renderMix(); },
      mn: (n) => { mx.n = +n; renderMix(); },
      go: () => {
        const per = Math.ceil(mx.n / live.length), qs = [];
        for (const t of live) {
          if (t === 'numbers') { for (let i = 0; i < per; i++) qs.push(numQ()); continue; }
          for (const [k, m] of shuffle(pools[t].map((x) => ({ x, s: stage(x[0]) + Math.random() * 2 })).sort((u, v) => u.s - v.s).map((o) => o.x).slice(0, per))) { const q = keyToQ(k, m); if (q) qs.push(q); }
        }
        quizSession({ title: `Mix · ${lessonName(a)} to ${lessonName(b)}`, questions: shuffle(qs).slice(0, mx.n), back: { name: 'mix', mx } });
      },
    }, () => {
      document.getElementById('mfrom').addEventListener('change', (e) => { mx.from = +e.target.value; renderMix(); });
      document.getElementById('mto').addEventListener('change', (e) => { mx.to = +e.target.value; renderMix(); });
    });
  }

  // ---------------------------------------------------------------- reading room
  const readingRow = (r) => { const m = mastery(readingKeys(r)); return `<button class="hubbtn" data-act="read" data-arg="${r.id}"><span class="jp">${esc(rubyToKana(r.titleJp || ''))}</span><b>${esc(r.title)}</b><span>${[lessonName(r.lesson), r.type === 'conversation' ? 'Conversation' : r.form].filter(Boolean).map(esc).join(' · ')}</span>${meter(m)}</button>`; };
  function renderReadingRoom() {
    const f = view.f || 'all';
    const list = READING.filter((r) => inLevel(r.lesson) && (f === 'all' || r.type === f));
    render(`<div class="station"><button class="back" data-act="home">${ICON.back} Route map</button>
      <h1>よむ・はなす · Reading room <span class="pill">${curLevel()}</span></h1>
      <p class="muted" style="margin:0">Short conversations and exam-style texts for every lesson. Each one has audio and questions.</p>
      <div class="chooser">${[['all', 'All'], ['conversation', 'Conversations'], ['passage', 'Reading texts']].map(([k, l]) => `<button class="chip" data-act="rf" data-arg="${k}" aria-pressed="${f === k}">${l}</button>`).join('')}${['N3', 'N2', 'N1'].includes(curLevel()) ? `<button class="chip" data-act="station" data-arg="${{ N2: 'read2', N1: 'read1' }[curLevel()] || 'read3'}">Reading Academy →</button>` : ''}</div>
      ${list.length ? `<div class="hub">${list.map(readingRow).join('')}</div>` : '<p class="muted">Nothing here yet.</p>'}</div>`, { rf: (k) => { view.f = k; renderReadingRoom(); } });
  }
  function renderAcademy(st) {
    const skills = [['basics', 'Reading basics', 'きほん', 'Written style, finding the subject, guessing words, following the structure'], ['formats', 'Types of text', 'いろいろな ぶんしょう', 'Emails, letters, memos, instructions, opinions, essays'], ['info', 'Finding information', 'じょうほうけんさく', 'Adverts, notices, pamphlets, charts'], ['compare', 'Comparing two texts', 'とうごうりかい', 'Two short texts on one topic, compared'], ['exam', 'Exam practice', 'じっせんもんだい', 'Short, medium and long texts in exam style']];
    const all = READING.filter((r) => r.lesson === ({ N2: 325, N1: 425 }[st.level] || 225));
    const back = { name: 'station', id: st.id };
    render(`<div class="station" style="--c:${lineColor(st)}">${signHTML(st)}
      <p class="muted" style="margin:0">A step-by-step course in ${st.level} reading, from understanding written style to exam-length texts.</p>
      <div><button class="btn" data-act="guide" data-arg="${{ N2: 'n2-reading', N1: 'n1-reading' }[st.level] || 'n3-reading'}">Reading skills guide</button></div>
      ${skills.map(([k, en, jp, sub]) => { const l = all.filter((r) => r.skill === k); return l.length ? `<section class="stack"><div><h3>${en} <span class="muted small">${jp}</span></h3><div class="muted small">${sub}</div></div><div class="hub">${l.map(readingRow).join('')}</div></section>` : ''; }).join('')}
      ${all.length ? bossCard(st, '15 questions from exam-style texts.') : '<p class="muted">The course is being added.</p>'}</div>`, {
      boss: () => quizSession({ title: 'Reading Academy: battle', questions: shuffle(all.filter((r) => r.skill === 'exam').flatMap((r) => r.questions.map((_, i) => readingQ(r, i)))).slice(0, 15), back, battle: st, color: 'var(--stamp)' }),
    });
  }
  function renderReader(r) {
    if (!r) return go({ name: 'reading' });
    const sib = READING.filter((x) => levelOfL(x.lesson) === levelOfL(r.lesson)), i = sib.indexOf(r), prev = sib[i - 1], next = sib[i + 1];
    const back = { name: 'read', id: r.id };
    const showRo = !!view.ro, showEn = !!view.en;
    const st = SBY.get('L' + r.lesson) || (r.lesson === 225 ? SBY.get('read3') : r.lesson === 325 ? SBY.get('read2') : r.lesson === 425 ? SBY.get('read1') : null);
    render(`<div class="station" style="--c:var(--line)"><button class="back" data-act="reading">${ICON.back} Reading room</button>
      <div class="row-between"><div><div class="eyebrow">${[lessonName(r.lesson), r.type === 'conversation' ? 'Conversation' : r.form || 'Reading'].filter(Boolean).map(esc).join(' · ')}</div><h1 style="font-size:24px">${esc(rubyToKana(r.titleJp || r.title))}</h1><div class="muted">${esc(r.title)}</div></div>
        ${st ? `<button class="btn sm" data-act="station" data-arg="${st.id}">Go to ${codeOf(st)}</button>` : ''}</div>
      ${r.tip ? `<div class="tip">${esc(r.tip)}</div>` : ''}
      <div class="chooser">${speech.ok ? `<button class="chip" data-act="playall">Play all</button>` : ''}<button class="chip" data-act="tro" aria-pressed="${showRo}">Romaji</button><button class="chip" data-act="ten" aria-pressed="${showEn}">English</button></div>
      <div class="card reader">${r.lines.map((l, n) => `<div class="rline" data-line="${n}">${sayBtn(rubyToKana(l.jp))}<div>${l.s ? `<b class="small muted">${esc(l.s)}</b>` : ''}<div class="rjp">${rubyLine(l.jp)}</div>${showRo ? `<div class="ro small muted">${esc(l.ro)}</div>` : ''}${showEn ? `<div class="small">${esc(l.en)}</div>` : ''}</div></div>`).join('')}</div>
      <div class="row-between" style="justify-content:flex-start"><button class="btn primary" data-act="ans">Answer the questions</button>${r.type === 'conversation' && speech.ok ? '<button class="btn" data-act="ansl">Listening test</button>' : ''}</div>
      <div class="row-between">${prev ? `<button class="btn sm ghost" data-act="read" data-arg="${prev.id}">← ${esc(prev.title)}</button>` : '<span></span>'}${next ? `<button class="btn sm ghost" data-act="read" data-arg="${next.id}">${esc(next.title)} →</button>` : '<span></span>'}</div></div>`, {
      tro: () => { view.ro = !showRo; renderReader(r); }, ten: () => { view.en = !showEn; renderReader(r); },
      playall: () => speech.sayLines(r.lines, (n) => { document.querySelectorAll('.rline').forEach((e, k) => e.classList.toggle('on', k === n)); }),
      ans: () => quizSession({ title: r.title, keys: readingKeys(r), back, noRequeue: true }),
      ansl: () => quizSession({ title: `${r.title}: listening`, questions: r.questions.map((_, n) => readingQ(r, n, 'listen')), back, noRequeue: true }),
    });
  }

  // ---------------------------------------------------------------- guidebook
  function renderGuide(id) {
    const page = GUIDE.find((g) => g.id === id) || GUIDE[0];
    if (!page) { render(`<button class="back" data-act="home">${ICON.back} Route map</button><p class="muted">The guidebook isn't loaded.</p>`); return; }
    render(`<div class="station"><button class="back" data-act="home">${ICON.back} Route map</button>
      <h1>ガイドブック · Guidebook</h1>
      <div class="chooser">${GUIDE.map((g) => `<button class="chip" data-act="guide" data-arg="${g.id}" aria-pressed="${g === page}">${esc(g.title)}</button>`).join('')}</div>
      <div><h2 style="font-size:22px">${esc(page.jp || '')} · ${esc(page.title)}</h2>${page.intro ? `<p class="muted" style="margin:6px 0 0">${esc(page.intro)}</p>` : ''}</div>
      ${page.sections.map((s) => `<article class="gpoint"><h3>${esc(s.h)}</h3>${s.note ? `<p>${esc(s.note)}</p>` : ''}
        ${s.rows ? tableHTML(s) : ''}
        ${s.tip ? `<div class="tip">${esc(s.tip)}</div>` : ''}</article>`).join('')}</div>`);
  }

  // ---------------------------------------------------------------- handwriting
  function strokeSVG(c, cls = '') {
    return `<svg class="strokes ${cls}" viewBox="0 0 109 109" role="img" aria-label="Stroke order for ${esc(c)}">${gridLines()}${(STROKES[c] || []).map((d) => `<path d="${d}" class="sk"/>`).join('')}</svg>`;
  }
  const gridLines = () => '<path d="M54.5 0V109M0 54.5H109" class="sgrid"/>';
  function animateStrokes(svg) {
    const ps = [...svg.querySelectorAll('.sk')];
    if (reduced()) return;
    let t = 0;
    for (const p of ps) {
      const L = p.getTotalLength(), d = Math.max(260, L * 9);
      p.style.strokeDasharray = L; 
      p.animate([{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: d, delay: t, fill: 'both', easing: 'ease-in-out' });
      t += d + 130;
    }
  }
  const kanjiWriteItem = (k) => ({ c: k.k, key: kanjiKey(k), en: k.m, sub: (k.kun && k.kun[0]) || (k.on && k.on[0]) || '', say: k.words && k.words[0] ? k.words[0].r : '' });
  const kanaWriteItem = (k) => ({ c: k.c, key: kanaKey(k), en: k.r, sub: k.set === 'h' ? 'hiragana' : 'katakana', say: k.c });
  const resample = (pts, n = 20) => {
    const seg = [0]; for (let i = 1; i < pts.length; i++) seg[i] = seg[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
    const total = seg[seg.length - 1] || 1, out = []; let j = 0;
    for (let i = 0; i < n; i++) {
      const t = (total * i) / (n - 1);
      while (j < seg.length - 2 && seg[j + 1] < t) j++;
      const u = (t - seg[j]) / ((seg[j + 1] - seg[j]) || 1);
      out.push({ x: pts[j].x + (pts[j + 1] ? pts[j + 1].x - pts[j].x : 0) * u, y: pts[j].y + (pts[j + 1] ? pts[j + 1].y - pts[j].y : 0) * u });
    }
    return out;
  };
  const meanDist = (a, b) => a.reduce((s, p, i) => s + Math.hypot(p.x - b[i].x, p.y - b[i].y), 0) / a.length;
  function writeSession(cfg) {
    const items = cfg.items.filter((x) => STROKES[x.c]);
    if (!items.length) { toast('No stroke data for these yet.'); return; }
    view = { name: 'session' };
    let i = 0, clean = 0, lvl = 0, memory = !!cfg.memory;
    function show() {
      const it = items[i];
      if (!it) return finish();
      const strokes = STROKES[it.c];
      let n = 0, miss = 0, fails = 0, pts = null, hint = !memory;
      render(`<div class="session" style="--c:${cfg.color || 'var(--line)'}">
        <div class="sess-head"><button class="back" data-act="quit">${ICON.back} Quit</button><div class="progress"><i style="width:${(i / items.length) * 100}%"></i></div><div class="combo">${i + 1}/${items.length}</div></div>
        <div class="qcard">
          <div class="qtype"><span class="eyebrow">${memory ? 'Write it from memory' : 'Trace it in stroke order'}</span><div class="chooser"><button class="chip" data-act="mode" aria-pressed="${!memory}">Trace</button><button class="chip" data-act="mode" aria-pressed="${memory}">From memory</button></div></div>
          <div class="prompt"><div class="en-q">${memory ? esc(it.en) : `${esc(it.c)} · ${esc(it.en)}`}</div><div class="sub">${esc(it.sub)} · ${strokes.length} stroke${strokes.length > 1 ? 's' : ''}</div></div>
          <div class="padwrap"><svg id="pad" class="pad" viewBox="0 0 109 109" aria-label="Writing pad">${gridLines()}
            <g id="guide">${strokes.map((d) => `<path d="${d}" class="sguide"/>`).join('')}</g><g id="done"></g><path id="nextp" class="snext" d=""/><circle id="dot" class="sdot" r="3.2" cx="-9" cy="-9"/><polyline id="ink" class="sink" points=""/></svg></div>
          <div class="row-between"><span class="small muted" id="wmsg">Stroke 1 of ${strokes.length}</span><div class="chooser"><button class="chip" data-act="watch">Watch</button><button class="chip" data-act="hint">Hint</button><button class="chip" data-act="redo">Start over</button>${it.say ? `<button class="chip" data-act="say" data-arg="${esc(it.say)}">Hear it</button>` : ''}</div></div>
        </div>
        <div class="sess-foot"><span class="muted small">${esc(cfg.title)}</span><span class="muted small">Draw with your finger, pen or mouse</span></div></div>`, {
        quit: () => go(cfg.back),
        mode: () => { memory = !memory; show(); },
        redo: () => show(),
        hint: () => { hint = true; paint(); },
        watch: () => { const g = document.getElementById('guide'); g.style.opacity = 1; [...g.children].forEach((p) => p.classList.add('sk')); animateStrokes(g.parentNode); setTimeout(() => { if (document.getElementById('guide') === g) { [...g.children].forEach((p) => { p.classList.remove('sk'); p.getAnimations().forEach((a) => a.cancel()); p.style.strokeDasharray = ''; }); g.style.opacity = ''; paint(); } }, strokes.length * 900 + 700); },
      });
      const refPts = (idx) => { const p = document.querySelectorAll('#guide path')[idx], L = p.getTotalLength(); return Array.from({ length: 20 }, (_, k) => { const q = p.getPointAtLength((L * k) / 19); return { x: q.x, y: q.y }; }); };
      mount();
      function paint() {
        const pad = document.getElementById('pad'); if (!pad) return;
        document.getElementById('guide').style.opacity = memory ? 0 : '';
        const nextD = hint && n < strokes.length ? strokes[n] : '';
        document.getElementById('nextp').setAttribute('d', nextD);
        const dot = document.getElementById('dot');
        if (nextD) { const s0 = refPts(n)[0]; dot.setAttribute('cx', s0.x); dot.setAttribute('cy', s0.y); } else { dot.setAttribute('cx', -9); dot.setAttribute('cy', -9); }
      }
      function mount() {
        const pad = document.getElementById('pad'), ink = document.getElementById('ink');
        paint();
        const toLocal = (e) => { const r = pad.getBoundingClientRect(); return { x: ((e.clientX - r.left) / r.width) * 109, y: ((e.clientY - r.top) / r.height) * 109 }; };
        const line = () => ink.setAttribute('points', pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' '));
        pad.addEventListener('pointerdown', (e) => { e.preventDefault(); try { pad.setPointerCapture(e.pointerId); } catch (x) { /* ok */ } pts = [toLocal(e)]; line(); });
        pad.addEventListener('pointermove', (e) => { if (!pts) return; e.preventDefault(); pts.push(toLocal(e)); line(); });
        const up = () => {
          if (!pts) return;
          const got = pts; pts = null; ink.setAttribute('points', '');
          if (got.length < 2) { if (strokes[n] && strokes[n].length < 30) got.push({ x: got[0].x + 1, y: got[0].y + 1 }); else return; }
          judge(got);
        };
        pad.addEventListener('pointerup', up); pad.addEventListener('pointercancel', () => { pts = null; ink.setAttribute('points', ''); });
      }
      function judge(got) {
        const ref = refPts(n), mine = resample(got), fwd = meanDist(mine, ref), rev = meanDist([...mine].reverse(), ref);
        const limit = memory ? 17 : 13;
        const msg = document.getElementById('wmsg');
        if (fwd <= limit) {
          document.getElementById('done').insertAdjacentHTML('beforeend', `<path d="${strokes[n]}" class="sdone"/>`);
          n++; fails = 0; if (!memory) hint = true; else hint = false; sfx.play('tap');
          if (n >= strokes.length) return complete();
          msg.textContent = `Stroke ${n + 1} of ${strokes.length}`;
        } else {
          miss++; fails++; sfx.play('bad');
          msg.textContent = rev <= limit ? 'Right shape, wrong direction. Start from the dot.' : fails >= 2 ? 'Follow the highlighted stroke from the dot.' : 'Not quite. Try that stroke again.';
          if (fails >= 2 || rev <= limit) hint = true;
          const pad = document.getElementById('pad'); pad.classList.remove('nope'); void pad.getBBox(); pad.classList.add('nope');
        }
        paint();
      }
      function complete() {
        const perfect = miss === 0;
        if (perfect) clean++;
        const isNew = stage(it.key) < 0;
        if (perfect) grade(it.key, 2);
        const g = record({ cat: 'write', kind: 'write' }, true, { isNew, combo: perfect ? clean : 0 });
        if (g.levelUp) lvl = g.levelUp;
        save(); sfx.play('ok');
        document.getElementById('wmsg').textContent = perfect ? 'じょうず！ Perfect strokes.' : `Done, with ${miss} retr${miss === 1 ? 'y' : 'ies'}.`;
        if (it.say && S.settings.audio) speech.say(it.say);
        setTimeout(() => { i++; show(); }, 750);
      }
    }
    function finish() {
      render(`<div class="session"><div class="qcard result">${mascotSVG('cheer', { cls: 'hop' })}<div class="eyebrow">${esc(cfg.title)}</div><div class="score">${clean}/${items.length}</div>
        <div class="gains"><span class="pill">written with no retries</span></div>
        <div class="row-between" style="justify-content:center"><button class="btn primary" data-act="again">${memory ? 'Again' : 'Now from memory'}</button><button class="btn" data-act="quit">Back</button></div></div></div>`,
        { quit: () => go(cfg.back), again: () => writeSession({ ...cfg, memory: true }) });
      if (clean === items.length) petals(16);
      setTimeout(() => celebrate(lvl), 300);
    }
    show();
  }

  // ---------------------------------------------------------------- collection, shop, capsules
  function renderCollection(tab = 'stamps') {
    const tabs = [['stamps', `Stamps ${Object.keys(S.stamps).length}/${STATIONS.length}`], ['stickers', `Stickers ${Object.keys(S.stickers).length}/${STICKERS.length}`], ['trophies', `Trophies ${Object.keys(S.trophies).length}/${TROPHIES.length}`]];
    let body = '';
    if (tab === 'stamps') body = `<div class="stampbook">${STATIONS.map((s) => `<figure>${S.stamps[s.id] ? stampSVG(s, S.stamps[s.id].date) : `<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="54" fill="none" style="stroke:var(--rule)" stroke-width="3" stroke-dasharray="6 6"/><text x="60" y="68" text-anchor="middle" style="fill:var(--muted);font:20px var(--f-pop)">${codeOf(s)}</text></svg>`}<figcaption>${esc(s.name)}${S.stamps[s.id] ? ` · ${S.stamps[s.id].score}%` : ''}</figcaption></figure>`).join('')}</div>`;
    if (tab === 'stickers') body = `<p class="muted" style="margin:0">Win stickers at the capsule machine. Each one is a word worth knowing. Tap a sticker to hear it.</p><div class="album">${STICKERS.map((s) => S.stickers[s.id]
      ? `<button class="sticker ${s.r}" data-act="say" data-arg="${esc(s.kana)}"><span class="e">${s.e}</span><b>${esc(s.kana)}</b><span>${esc(s.kanji || '')} ${esc(s.en)}${S.stickers[s.id] > 1 ? ` ×${S.stickers[s.id]}` : ''}</span></button>`
      : `<div class="sticker locked ${s.r}"><span class="e">${s.e}</span><b>？？？</b><span>${{ C: 'Common', R: 'Rare', S: 'Super rare' }[s.r]}</span></div>`).join('')}</div><div><button class="btn primary" data-act="gacha">Go to the capsule machine</button></div>`;
    if (tab === 'trophies') body = `<div class="trophies">${TROPHIES.map((t) => `<div class="trophy ${S.trophies[t.id] ? '' : 'locked'}">${ICON.medal(!!S.trophies[t.id])}<div><b>${esc(t.jp)}</b><span>${esc(t.desc)}${S.trophies[t.id] ? ` · ${S.trophies[t.id]}` : ''}</span></div></div>`).join('')}</div>`;
    render(`<div class="station"><button class="back" data-act="home">${ICON.back} Route map</button>
      <h1>コレクション · Collection</h1>
      <div class="tabs" role="tablist">${tabs.map(([id, l]) => `<button role="tab" aria-selected="${id === tab}" data-act="collection" data-arg="${id}">${l}</button>`).join('')}</div>
      ${body}</div>`);
  }
  function renderShop() {
    const preview = view.preview || {};
    const item = (it) => {
      const own = S.owned.includes(it.id), eq = S.equip[it.slot] === it.id;
      const art = it.slot === 'skin' ? `<span class="swatch" style="background:${it.color}"></span>` : it.slot === 'use' ? `${it.id === 'omamori' ? OMAMORI : '<span style="font-size:52px;line-height:1.3">🎟️</span>'}` : mascotSVG('happy', { [it.slot]: it.id, ...(it.slot === 'hat' ? { acc: 'none' } : { hat: 'cap' }) });
      let btn;
      if (it.slot === 'use') btn = `<button class="btn sm gold" data-act="buy" data-arg="${it.id}" ${S.coins < it.price || (it.id === 'omamori' && S.omamori >= 3) ? 'disabled' : ''}>${it.price} ${ICON.coin}</button><span>${it.id === 'omamori' ? `You hold ${S.omamori}/3` : `You hold ${S.tickets}`}</span>`;
      else if (eq) btn = '<span class="pill good">Wearing</span>';
      else if (own) btn = `<button class="btn sm" data-act="equip" data-arg="${it.id}">${it.slot === 'skin' ? 'Use' : 'Wear'}</button>`;
      else btn = `<button class="btn sm gold" data-act="buy" data-arg="${it.id}" ${S.coins < it.price ? 'disabled' : ''}>${it.price} ${ICON.coin}</button>`;
      return `<div class="shopitem ${eq ? 'eq' : ''}">${art}<b>${esc(it.name)}</b><span>${esc(it.jp)}${it.desc ? ` · ${esc(it.desc)}` : ''}</span>${btn}</div>`;
    };
    const sec = (slot, en, jp) => `<div class="actgroup"><div class="eyebrow"><span class="pop">${jp}</span>${en}</div><div class="shopgrid">${SHOP.filter((x) => x.slot === slot).map(item).join('')}</div></div>`;
    render(`<div class="station"><button class="back" data-act="home">${ICON.back} Route map</button>
      <div class="hero">${mascotSVG('happy', { cls: 'bob', ...preview })}<div class="stack"><div class="bubble left">いらっしゃいませ！ <small>Welcome to the station kiosk. Earn yen by answering questions, punching daily tickets and winning stamps.</small></div>
        <div class="row-between" style="justify-content:flex-start"><span class="chipstat" style="font-size:18px">${coins(S.coins)}</span><button class="btn" data-act="gacha">Capsule machine →</button></div></div></div>
      ${sec('hat', 'Hats', 'ぼうし')}${sec('acc', 'Accessories', 'アクセサリー')}${sec('skin', 'Line colour', 'いろ')}${sec('use', 'Charms and tickets', 'おまもり')}
    </div>`, {
      buy: (id, el) => {
        const it = SHOP_BY.get(id);
        if (!buy(id)) { toast('Not enough yen yet. Keep studying!'); return; }
        sfx.play('coin'); floatCoin(el, `-${it.price}円`);
        if (it.slot === 'skin') applySkin();
        toast(`${it.name} is yours!`);
        setTimeout(() => { renderShop(); celebrate(0); }, 250);
      },
      equip: (id) => { const it = SHOP_BY.get(id); S.equip = { ...S.equip, [it.slot]: id }; save(); if (it.slot === 'skin') applySkin(); sfx.play('tap'); renderShop(); },
    });
  }
  function renderGacha(result) {
    const canSpin = S.tickets > 0 || S.coins >= GACHA_PRICE;
    render(`<div class="station"><button class="back" data-act="home">${ICON.back} Route map</button>
      <h1>ガチャ · Capsule machine</h1>
      <div class="card" style="justify-items:center;text-align:center">
        <div class="machine" id="mach">${result ? `<div class="reveal"><span class="e">${result.st.e}</span><h2>${esc(result.st.kana)}</h2><div>${result.st.kanji ? esc(result.st.kanji) + ' · ' : ''}${esc(result.st.en)}</div><span class="pill ${result.st.r === 'S' ? 'coin' : result.st.r === 'R' ? 'express' : ''}">${{ C: 'Common', R: 'Rare', S: 'Super rare!' }[result.st.r]}</span>${result.dup ? `<div class="muted small">Already had it, so here's 40 ${ICON.coin} back.</div>` : '<div class="muted small">New sticker for your album!</div>'}</div>` : machineSVG()}</div>
        <div class="muted">${S.tickets ? `You have ${S.tickets} free ticket${S.tickets > 1 ? 's' : ''}.` : `${GACHA_PRICE} yen per spin. You have ${S.coins.toLocaleString('en-US')} yen.`}</div>
        <div class="row-between" style="justify-content:center"><button class="btn primary" data-act="spin" ${canSpin ? '' : 'disabled'}>${result ? 'Spin again' : 'Turn the handle'}</button><button class="btn" data-act="collection" data-arg="stickers">Sticker album</button></div>
        <div class="muted small">${Object.keys(S.stickers).length}/${STICKERS.length} collected · Common 60% · Rare 30% · Super rare 10%</div>
      </div></div>`, {
      spin: () => {
        const m = document.getElementById('mach');
        if (result) m.innerHTML = machineSVG();
        const r = spin();
        if (!r) { toast('Not enough yen for a spin yet.'); return; }
        sfx.play('gacha');
        m.classList.add('spin');
        setTimeout(() => { renderGacha(r); speech.say(r.st.kana); if (r.st.r !== 'C') petals(r.st.r === 'S' ? 40 : 18); celebrate(0); }, 950);
      },
    });
  }

  // ---------------------------------------------------------------- coach
  const LINES = {
    start: [['しゅっぱつ しんこう！', 'All aboard. Departing!'], ['がんばろう！', "Let's do our best!"], ['いっしょに いこう！', "Let's ride together!"]],
    ok: [['すごい！', 'Amazing!'], ['いいね！', 'Nice!'], ['そのとおり！', 'Exactly right!'], ['かんぺき！', 'Perfect!'], ['やったね！', 'You did it!'], ['じょうず！', 'So skilful!']],
    bad: [['おしい！', 'So close!'], ['だいじょうぶ！', "It's okay!"], ['ドンマイ！', "Don't sweat it!"], ['つぎは できる！', "You'll get the next one!"]],
    fever: [['フィーバー！', 'Fever! Double yen!'], ['とまらない！', 'Unstoppable!'], ['しんかんせん みたい！', 'Bullet-train fast!']],
  };
  const coachHTML = (mood, line, cls = '') => `<div class="coach">${mascotSVG(mood, { cls })}<div class="bubble left" id="cb">${esc(line[0])} <small>${esc(line[1])}</small></div></div>`;
  function setCoach(mood, line, cls) {
    const c = document.querySelector('.coach');
    if (c) c.outerHTML = coachHTML(mood, line, cls);
  }

  // ---------------------------------------------------------------- quiz / battle session
  function quizSession(cfg) {
    const qs = (cfg.questions || cfg.keys.map((k) => keyToQ(k, cfg.mode))).filter(Boolean);
    if (!qs.length) { toast('Nothing to practise here yet.'); return; }
    const total0 = qs.length, battle = cfg.battle, yk = battle ? yokaiFor(battle) : null;
    const pass = cfg.pass || 80, needed = Math.ceil(total0 * pass / 100), allowed = total0 - needed;
    const st = { i: 0, queue: qs.slice(), right: 0, firstRight: 0, answered: 0, combo: 0, best: 0, xp: 0, coins: 0, missed: [], requeued: new Set(), sections: {}, misses: 0, lvl: 0, over: false };
    view = { name: 'session' };
    let coach = battle ? 'wow' : 'calm', line = battle ? [`${yk.jp}が あらわれた！`, `A wild ${yk.name} blocks the platform!`] : pick(LINES.start), coachCls = '';
    function arena(mood = 'idle', cls = '') {
      if (!battle) return '';
      const hp = Math.max(0, 1 - st.right / needed);
      return `<div class="arena">${yokaiSVG(yk, mood, cls)}<div class="stack"><div class="row-between"><b class="pop">${yk.jp} ${yk.name}</b><span class="small muted">${st.right}/${needed} hits</span></div>
        <div class="hp" aria-label="Yokai health"><i style="width:${hp * 100}%"></i></div>
        <div class="hearts" aria-label="${allowed + 1 - st.misses} hearts left">${Array.from({ length: allowed + 1 }, (_, i) => ICON.heart(i < allowed + 1 - st.misses)).join('')}</div></div></div>`;
    }
    function show() {
      const q = st.queue[st.i];
      if (!q || st.over) return finish();
      window.__minna.cur = q;
      const fever = st.combo >= 5;
      render(`<div class="session ${fever ? 'fever' : ''}" style="--c:${cfg.color || 'var(--line)'}">
        <div class="sess-head"><button class="back" data-act="quit" aria-label="Quit">${ICON.back} Quit</button><div class="progress"><i style="width:${(st.i / st.queue.length) * 100}%"></i></div><div class="combo">${st.combo > 1 ? '×' + st.combo : ''}${fever ? ' 🔥' : ''}</div></div>
        ${battle ? arena() : coachHTML(coach, line, coachCls)}
        <div class="qcard">
          <div class="qtype"><span class="eyebrow">${esc(q.section || q.label)}</span><span class="muted small num">${st.i + 1} / ${st.queue.length}</span></div>
          ${q.section ? `<div class="muted small" style="margin-top:-8px">${esc(q.label)}</div>` : ''}
          <div class="prompt">${q.prompt}</div>
          <div id="qa">${answerArea(q)}</div>
          <div id="fb"></div>
        </div>
        <div class="sess-foot"><span class="muted small">${esc(cfg.title)}</span><span class="muted small hide-sm">${q.kind === 'mc' ? 'Keys 1–4' : q.kind === 'type' ? 'Enter to check' : ''}</span></div>
      </div>`, {
        quit: () => go(cfg.back),
        opt: (val, el) => answer(q, val === String(q.answer), val),
        tile: (i, el) => { sfx.play('tap'); const a = document.getElementById('tans'), b = document.getElementById('tbank'); (el.parentElement === b ? a : b).appendChild(el); },
        check: () => checkTyped(q),
        checkorder: () => checkOrder(q),
        skip: () => answer(q, false),
        playlines: () => speech.sayLines(q.lines),
        reveal: (a, el) => { const r = document.getElementById('rv'); if (r) { r.hidden = false; el.hidden = true; } },
      }, () => mountQ(q));
    }
    function answerArea(q) {
      if (q.kind === 'mc') return `<div class="opts">${q.options.map((o, i) => `<button class="opt" data-act="opt" data-arg="${esc(o.val)}"><kbd>${i + 1}</kbd><span>${o.html}</span></button>`).join('')}</div>`;
      if (q.kind === 'type') return `<div class="typebox"><input id="typein" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="type here…" aria-label="Your answer"><div class="live" id="live"></div>
        <div class="row-between"><button class="btn ghost" data-act="skip">I don't know</button><button class="btn primary" data-act="check">Check</button></div></div>`;
      if (q.kind === 'order') return `<div class="tiles answer" id="tans" aria-label="Your sentence"></div><div class="tiles" id="tbank">${shuffle(q.tiles.map((t, i) => [t, i])).map(([t, i]) => `<button class="tile" data-act="tile" data-arg="${i}" data-raw="${esc(t)}">${rubyLine(t)}</button>`).join('')}</div>
        <div class="row-between"><button class="btn ghost" data-act="skip">I don't know</button><button class="btn primary" data-act="checkorder">Check</button></div>`;
      return '';
    }
    function mountQ(q) {
      if (q.autoplay && q.lines) setTimeout(() => speech.sayLines(q.lines), 150);
      else if (q.autoplay && q.say) setTimeout(() => speech.say(q.say), 150);
      if (q.kind === 'type') {
        const inp = document.getElementById('typein'), live = document.getElementById('live');
        inp.focus();
        inp.addEventListener('input', () => { live.textContent = /[a-z]/i.test(inp.value) ? romajiToKana(inp.value, false) : ''; });
        inp.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); e.stopPropagation(); checkTyped(q); } });
      }
      keyHandler = (e) => {
        if (e.target.tagName === 'INPUT') return;
        if (q.kind === 'mc' && /^[1-4]$/.test(e.key)) { const b = document.querySelectorAll('.opt')[+e.key - 1]; if (b && !b.disabled) b.click(); }
      };
    }
    function checkTyped(q) {
      const inp = document.getElementById('typein');
      if (!inp || inp.disabled) return;
      if (!inp.value.trim()) { inp.focus(); return; }
      inp.disabled = true;
      answer(q, q.check(inp.value));
    }
    function checkOrder(q) {
      const got = [...document.querySelectorAll('#tans .tile')].map((t) => t.dataset.raw);
      if (!got.length) return;
      document.querySelectorAll('.tile').forEach((t) => (t.disabled = true));
      answer(q, orderOK(got, q.tiles));
    }
    function answer(q, ok, val) {
      if (st.locked) return;
      st.locked = true;
      st.answered++;
      if (q.section) { st.sections[q.section] = st.sections[q.section] || [0, 0]; st.sections[q.section][1]++; if (ok) st.sections[q.section][0]++; }
      const firstTry = !st.requeued.has(st.i);
      const wasFever = st.combo >= 5;
      if (ok) { st.right++; if (firstTry) st.firstRight++; st.combo++; st.best = Math.max(st.best, st.combo); }
      else { st.combo = 0; st.missed.push(q); st.misses++; }
      const isNew = q.key ? stage(q.key) < 0 : false;
      if (q.key && (firstTry || !ok)) grade(q.key, ok ? 2 : 0);
      const g = record(q, ok, { combo: st.combo, review: cfg.review, isNew });
      st.xp += g.xp; st.coins += g.coins; if (g.levelUp) st.lvl = g.levelUp;
      save();
      if (!ok && !battle && !cfg.noRequeue && !st.requeued.has(st.i)) { st.queue.push({ ...q, autoplay: q.mode === 'listen' || q.mode === 'dictate' || q.cat === 'sentence' }); st.requeued.add(st.queue.length - 1); }
      document.querySelectorAll('.opt').forEach((b) => {
        b.disabled = true;
        if (b.dataset.arg === String(q.answer)) b.classList.add('right');
        else if (b.dataset.arg === String(val)) b.classList.add('wrong');
      });
      sfx.play(ok ? 'ok' : 'bad');
      if (ok && !wasFever && st.combo >= 5) { sfx.play('fever'); document.querySelector('.session').classList.add('fever'); }
      if (!ok) document.querySelector('.session').classList.remove('fever');
      document.querySelector('.combo').textContent = st.combo > 1 ? `×${st.combo}${st.combo >= 5 ? ' 🔥' : ''}` : '';
      const cc = document.getElementById('coinct'); if (cc) cc.textContent = S.coins.toLocaleString('en-US');
      if (battle) {
        if (ok && st.right >= needed) st.over = 'win';
        if (!ok && st.misses > allowed) st.over = 'lose';
        const a = document.querySelector('.arena');
        if (a) a.outerHTML = arena(ok ? (st.over === 'win' ? 'gone' : 'hit') : 'laugh', ok ? 'hit' : 'laugh');
        if (ok) sfx.play('hit');
      } else {
        coach = ok ? (st.combo >= 5 ? 'cheer' : 'happy') : 'sad';
        line = ok ? (st.combo >= 5 && st.combo % 5 === 0 ? pick(LINES.fever) : pick(LINES.ok)) : pick(LINES.bad);
        setCoach(coach, line, ok ? 'hop' : 'shake');
      }
      const fb = document.getElementById('fb');
      fb.innerHTML = `<div class="feedback ${ok ? 'ok' : 'no'}"><b class="t">${ok ? `せいかい！ Correct${g.coins ? ` · +${g.coins} ${ICON.coin}` : ''}` : 'The answer is'}</b>${q.after || ''}</div>
        <div class="row-between" style="margin-top:12px">${q.say && speech.ok ? sayBtn(q.say) : '<span></span>'}<button class="btn primary" data-act="next" id="nextbtn">${st.over ? 'See result' : 'Continue'} ↵</button></div>`;
      if (q.sayAfter && S.settings.audio && q.say && !q.autoplay) speech.say(q.say);
      if (g.coins) floatCoin(document.getElementById('coinct'), `+${g.coins}`);
      const nb = document.getElementById('nextbtn');
      nb.focus({ preventScroll: true });
      nb.scrollIntoView({ block: 'nearest', behavior: reduced() ? 'auto' : 'smooth' });
      const next = () => { st.locked = false; st.i++; show(); };
      keyHandler = (e) => { if ((e.key === 'Enter' || e.key === ' ') && !e.repeat) { e.preventDefault(); next(); } };
      A.next = next;
    }
    function finish() {
      const answeredFirst = Math.min(total0, st.answered);
      const right = battle || cfg.exam ? st.right : st.firstRight;
      const pct = Math.round((right / Math.max(answeredFirst, 1)) * 100);
      const target = battle || cfg.exam;
      const won = battle ? st.over === 'win' || (!st.over && st.right >= needed) : cfg.exam ? pct >= pass : false;
      let stampNow = false, bonusCoins = 0;
      S.stats.sessions++;
      if (!battle && !cfg.exam && answeredFirst >= 10 && st.missed.length === 0) S.stats.perfects++;
      if (target && won) {
        const prev = S.stamps[target.id];
        if (!prev || prev.score < pct) S.stamps[target.id] = { date: dayStr().replace(/-/g, '.'), score: pct };
        stampNow = !prev;
        if (battle) S.stats.yokai++;
        bonusCoins = stampNow ? 200 : 30;
        const lv = bonus(stampNow ? 120 : 20, bonusCoins);
        if (lv) st.lvl = lv;
      }
      save();
      const missed = uniqBy(st.missed, (q) => (q.key || '') + q.prompt);
      const mood = target ? (won ? 'cheer' : 'sad') : pct >= 80 ? 'cheer' : pct >= 50 ? 'happy' : 'calm';
      const head = target && won
        ? `<div class="stamp-big">${stampSVG(target, S.stamps[target.id].date)}</div><h2>${stampNow ? 'Stamp collected!' : 'Won again!'}</h2>${battle ? `<div class="muted">${yk.jp}を たおした！ You beat the ${yk.name}.</div>` : ''}`
        : battle ? `${yokaiSVG(yk, 'laugh').replace('<svg', '<svg style="width:110px;height:110px"')}<h2>The ${yk.name} got away…</h2><div class="muted">You need ${needed} hits before your hearts run out. Practise the misses and come back!</div>`
          : `${mascotSVG(mood, { cls: 'hop' })}<div class="eyebrow">${esc(cfg.title)}</div>`;
      render(`<div class="session" style="--c:${cfg.color || 'var(--line)'}"><div class="qcard result">
        ${head}
        <div class="score">${pct}%</div>
        <div class="gains"><span class="pill">${right} of ${answeredFirst} right${battle || cfg.exam ? '' : ' first time'}</span><span class="pill express">best combo ×${st.best}</span><span class="pill">+${st.xp} XP</span><span class="pill coin">+${st.coins + bonusCoins} ${ICON.coin}</span></div>
        ${cfg.exam && !won ? `<div class="pill stamp">${pass}% needed for the stamp.</div>` : ''}
        ${Object.keys(st.sections).length ? `<div class="readiness" style="width:100%;max-width:420px">${Object.entries(st.sections).map(([k, [a, b]]) => `<div class="row"><span class="small">${esc(k.split(' ')[0])}</span>${meter(a / b)}<span>${a}/${b}</span></div>`).join('')}</div>` : ''}
        <div class="row-between" style="justify-content:center"><button class="btn primary" data-act="again">${target && !won ? 'Try again' : 'Go again'}</button><button class="btn" data-act="quit">Back</button>${target && won && window.COMMUNITY && window.COMMUNITY.share && window.CLOUD && window.CLOUD.user ? '<button class="btn gold" data-act="sharewin">Share this win</button>' : ''}</div>
      </div>
      ${missed.length ? `<div class="stack"><div class="eyebrow">To review (${missed.length})</div>${missed.map((q) => `<div class="card"><div class="small muted">${esc(q.label)}</div><div>${q.after || ''}</div></div>`).join('')}</div>` : ''}
      </div>`, { sharewin: () => window.COMMUNITY.share({ jlpt: target.level || null, title: cfg.exam ? `Passed the ${target.name} with ${pct}%` : `Stamp collected: ${target.name} (${codeOf(target)})`, body: `${cfg.exam ? `I just passed the ${target.name}` : `I just beat the ${battle ? yk.name : 'station battle'} at ${target.name}`} with ${pct}%.\n\nLevel ${level()}, ${liveStreak()}-day streak, ${Object.keys(S.stamps).length} stamps so far.\n` }),
        quit: () => go(cfg.back), again: () => quizSession(cfg.questions && !cfg.keys ? { ...cfg, questions: cfg.questions.map((q) => (q.cat === 'num' ? numQ() : q)) } : cfg) });
      if (target && won) { sfx.play('stamp'); petals(40); }
      else if (!target && pct >= 80 && answeredFirst >= 5) petals(16);
      setTimeout(() => celebrate(st.lvl), target && won ? 1200 : 300);
    }
    show();
  }

  // ---------------------------------------------------------------- Shinkansen Sprint (60 s)
  function sprintSession(cfg) {
    view = { name: 'session' };
    const LEN = 60;
    const t0 = Date.now();
    let score = 0, combo = 0, lvl = 0, done = false, q, tick;
    const best = S.best['sprint:' + cfg.id] || 0;
    const trainSVG = `<svg viewBox="0 0 44 22" aria-hidden="true"><path d="M2 17c0-8 8-12 18-12h12c6 0 9 4 10 8v4z" fill="var(--panel)" stroke="${INK}" stroke-width="2.2" stroke-linejoin="round"/><path d="M9 9h22v4H7c.5-1.6 1-2.8 2-4z" fill="var(--express)"/><path d="M2 17h40" stroke="var(--line)" stroke-width="3"/></svg>`;
    function frame() {
      render(`<div class="session" style="--c:var(--express)">
        <div class="sess-head"><button class="back" data-act="quit">${ICON.back} Quit</button><div class="sprintbar"><i id="sb"></i><span id="st" style="position:absolute;left:0;top:0">${trainSVG}</span></div><div class="combo" id="sc">0</div></div>
        <div class="row-between"><span class="muted small">${esc(cfg.title)} · best ${best}</span><span class="pop" id="tl">60s</span></div>
        <div class="qcard" id="sq"></div></div>`, { quit: () => { done = true; clearInterval(tick); go(cfg.back); }, opt: (val, el) => pickAns(val, el) });
      tick = setInterval(update, 100);
      nextQ();
    }
    function update() {
      const el = (Date.now() - t0) / 1000, left = Math.max(0, LEN - el);
      const tl = document.getElementById('tl'); if (!tl) { clearInterval(tick); return; }
      tl.textContent = Math.ceil(left) + 's';
      const bar = document.querySelector('.sprintbar'), w = bar ? bar.clientWidth - 54 : 0;
      document.getElementById('st').style.left = (el / LEN) * w + 'px';
      document.getElementById('sb').style.width = (el / LEN) * 100 + '%';
      if (left <= 0 && !done) end();
    }
    function nextQ() {
      if (done) return;
      for (let i = 0; i < 5; i++) { q = cfg.make(); if (q && q.kind === 'mc') break; }
      window.__minna.cur = q;
      const box = document.getElementById('sq');
      box.innerHTML = `<div class="prompt">${q.prompt.replace(/<button[^>]*data-act="reveal"[\s\S]*?<\/button>/, '')}</div><div class="opts">${q.options.map((o, i) => `<button class="opt" data-act="opt" data-arg="${esc(o.val)}"><kbd>${i + 1}</kbd><span>${o.html}</span></button>`).join('')}</div>`;
      if (q.autoplay && q.mode === 'listen') speech.say(q.say);
      keyHandler = (e) => { if (/^[1-4]$/.test(e.key)) { const b = document.querySelectorAll('#sq .opt')[+e.key - 1]; if (b && !b.disabled) b.click(); } };
    }
    function pickAns(val, el) {
      if (done || el.disabled) return;
      const ok = val === String(q.answer);
      document.querySelectorAll('#sq .opt').forEach((b) => { b.disabled = true; if (b.dataset.arg === String(q.answer)) b.classList.add('right'); });
      if (!ok) el.classList.add('wrong');
      if (ok) { score++; combo++; } else combo = 0;
      if (q.key) grade(q.key, ok ? 2 : 0);
      const g = record(q, ok, { combo });
      if (g.levelUp) lvl = g.levelUp;
      sfx.play(ok ? 'ok' : 'bad');
      document.getElementById('sc').textContent = score;
      const cc = document.getElementById('coinct'); if (cc) cc.textContent = S.coins.toLocaleString('en-US');
      const box = document.getElementById('sq'); box.classList.remove('flashok'); if (ok) { void box.offsetWidth; box.classList.add('flashok'); }
      setTimeout(nextQ, ok ? 220 : 900);
    }
    function end() {
      done = true; clearInterval(tick);
      const newBest = score > best;
      if (newBest) S.best['sprint:' + cfg.id] = score;
      ML.ensureToday();
      S.today.sprintBest = Math.max(S.today.sprintBest || 0, score);
      S.stats.sprintBest = Math.max(S.stats.sprintBest, score);
      const lv = bonus(score * 3, score);
      if (lv) lvl = lv;
      save();
      render(`<div class="session"><div class="qcard result">${mascotSVG(score >= 15 ? 'cheer' : score >= 8 ? 'happy' : 'calm', { cls: 'hop' })}
        <div class="eyebrow">${esc(cfg.title)}</div><div class="score">${score}</div>
        <div class="gains">${newBest ? '<span class="pill coin">New best!</span>' : `<span class="pill">Best ${best}</span>`}<span class="pill coin">+${score} ${ICON.coin} bonus</span></div>
        <div class="row-between" style="justify-content:center"><button class="btn primary" data-act="again">Ride again</button><button class="btn" data-act="quit">Back</button></div></div></div>`,
        { quit: () => go(cfg.back), again: () => sprintSession(cfg) });
      if (newBest && score >= 5) { sfx.play('stamp'); petals(); }
      setTimeout(() => celebrate(lvl), 400);
    }
    frame();
  }

  // ---------------------------------------------------------------- flashcards
  function flashSession(cfg) {
    const queue = cfg.keys.map((k) => VBY.get(k.split('|')[1])).filter(Boolean);
    if (!queue.length) return;
    let i = 0, flipped = false, done = 0, lvl = 0;
    const total = queue.length, enFirst = S.settings.flashDir === 'en';
    view = { name: 'session' };
    function show() {
      const v = queue[i];
      if (!v) {
        render(`<div class="session"><div class="qcard result">${mascotSVG('cheer', { cls: 'hop' })}<div class="eyebrow">${esc(cfg.title)}</div><h2>${total} cards studied</h2><p class="muted" style="margin:0">They'll come back in your daily review when they're due.</p>
          <div class="row-between" style="justify-content:center"><button class="btn primary" data-act="quiz">Quiz me on these</button><button class="btn" data-act="quit">Back</button></div></div></div>`,
          { quit: () => go(cfg.back), quiz: () => quizSession({ ...cfg, title: 'Quick check', keys: shuffle(cfg.keys) }) });
        setTimeout(() => celebrate(lvl), 300);
        return;
      }
      const big = `<div class="glyph ${v.kana.length > 6 ? 'mid' : ''}">${jpHTML(v, enFirst ? 'kanji' : undefined)}</div>`;
      const meaning = `<div class="en-q">${esc(v.en)}</div>`;
      const extra = `<div class="sub">${esc(v.ro)}${v.kanji ? ' · ' + esc(v.kanji) : ''}${v.note ? ' · ' + esc(v.note) : ''}</div>${v.use ? `<div class="wuse">${rubyLine(v.use)}${v.useEn ? ` <span class="muted">${esc(v.useEn)}</span>` : ''}</div>` : ''}`;
      const ex = exampleFor(v);
      const tag = `<div class="fc-tag"><span>${esc(lessonName(v.L) || (v.L === 0 ? 'Greetings' : 'N5'))}</span><span class="fc-seal">${/^v[123]$/.test(v.pos) ? '動' : v.pos === 'i-adj' || v.pos === 'na-adj' ? '形' : v.pos === 'exp' ? '句' : '語'}</span></div>`;
      render(`<div class="session" style="--c:${cfg.color || 'var(--line)'}">
        <div class="sess-head"><button class="back" data-act="quit">${ICON.back} Quit</button><div class="progress"><i style="width:${(done / total) * 100}%"></i></div><div class="combo">${done}/${total}</div></div>
        <div class="flipper" data-act="flip" role="button" aria-label="Flip card"><div class="flip-in" id="fin">
          <div class="fcard">${tag}<div class="prompt">${enFirst ? meaning : big}</div><div class="fc-hint">tap or press space to flip</div></div>
          <div class="fcard back">${tag}<div class="prompt">${enFirst ? big : meaning}${extra}${ex ? `<div class="sub fc-ex">${rubyLine(ex.jp)}<br>${esc(ex.en)}</div>` : ''}</div><div style="text-align:center">${sayBtn(v.kana)}</div></div>
        </div></div>
        <div id="fbtn"><button class="btn primary block" data-act="flip">Show ${enFirst ? 'Japanese' : 'meaning'}</button></div>
      </div>`, {
        quit: () => go(cfg.back),
        flip: (a, el, e) => {
          if (e && e.target.closest('.say')) return;
          if (flipped) return;
          flipped = true;
          document.getElementById('fin').classList.add('on');
          document.getElementById('fbtn').innerHTML = `<div class="flash-btns"><button class="btn" data-act="g" data-arg="0">Again<small>1</small></button><button class="btn" data-act="g" data-arg="1">Hard<small>2</small></button><button class="btn primary" data-act="g" data-arg="2">Good<small>3</small></button><button class="btn" data-act="g" data-arg="3">Easy<small>4</small></button></div>`;
          sfx.play('tap');
          if (enFirst && S.settings.audio) speech.say(v.kana);
        },
        g: (q) => rate(+q),
      }, () => { if (!enFirst && S.settings.audio) setTimeout(() => speech.say(v.kana), 120); });
      keyHandler = (e) => {
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); if (!flipped) A.flip(); else rate(2); }
        else if (flipped && /^[1-4]$/.test(e.key)) rate(+e.key - 1);
      };
    }
    function rate(q) {
      const v = queue[i];
      const isNew = stage(vKey(v)) < 0;
      grade(vKey(v), q);
      const g = record({ cat: 'vocab', kind: 'flash' }, q > 0, { isNew, combo: 0 });
      if (g.levelUp) lvl = g.levelUp;
      save(); sfx.play(q ? 'tap' : 'bad');
      if (q === 0) queue.splice(Math.min(i + 4, queue.length), 0, v); else done++;
      i++; flipped = false; show();
    }
    show();
  }

  // ---------------------------------------------------------------- match game
  function matchSession(cfg) {
    const items = shuffle(cfg.pool).slice(0, 6);
    if (items.length < 3) { toast('Not enough words here for a match game.'); return; }
    view = { name: 'session' };
    const left = shuffle(items), right = shuffle(items), t0 = Date.now();
    let sel = null, matched = 0, mistakes = 0;
    const slipped = new Set();
    render(`<div class="session" style="--c:${cfg.color || 'var(--line)'}">
      <div class="sess-head"><button class="back" data-act="quit">${ICON.back} Quit</button><div class="progress"><i id="mp" style="width:0%"></i></div><div class="combo" id="mt">0.0s</div></div>
      ${coachHTML('wow', ['じゅんびは いい？', 'Tap a word, then its meaning!'])}
      <div class="qcard"><div class="match"><div class="col">${left.map((v) => `<button class="opt" data-act="m" data-arg="L|${esc(v.id)}"><span class="jpo">${jpHTML(v)}</span></button>`).join('')}</div>
        <div class="col">${right.map((v) => `<button class="opt" data-act="m" data-arg="R|${esc(v.id)}">${esc(v.en)}</button>`).join('')}</div></div></div></div>`, {
      quit: () => { clearInterval(tick); go(cfg.back); },
      m: (arg, el) => {
        if (el.classList.contains('done')) return;
        const side = arg.slice(0, 1), id = arg.slice(2);
        if (side === 'L') speech.say(VBY.get(id).kana);
        if (!sel || sel.side === side) { document.querySelectorAll('.match .opt.sel').forEach((b) => b.classList.remove('sel')); el.classList.add('sel'); sel = { side, id, el }; sfx.play('tap'); return; }
        if (sel.id === id) {
          [sel.el, el].forEach((b) => { b.classList.remove('sel'); b.classList.add('right'); setTimeout(() => b.classList.add('done'), 250); });
          matched++; sel = null; sfx.play('ok');
          document.getElementById('mp').style.width = (matched / items.length) * 100 + '%';
          if (matched === items.length) setTimeout(end, 400);
        } else {
          mistakes++; slipped.add(id); slipped.add(sel.id); sfx.play('bad');
          const a = sel.el; [a, el].forEach((b) => b.classList.add('wrong'));
          setTimeout(() => [a, el].forEach((b) => b.classList.remove('wrong', 'sel')), 450);
          sel = null;
        }
      },
    });
    const tick = setInterval(() => { const t = document.getElementById('mt'); if (t) t.textContent = ((Date.now() - t0) / 1000).toFixed(1) + 's'; else clearInterval(tick); }, 100);
    function end() {
      clearInterval(tick);
      const secs = (Date.now() - t0) / 1000;
      for (const v of items) grade(vKey(v), slipped.has(v.id) ? 0 : 2);
      ML.ensureToday(); S.today.matchDone = (S.today.matchDone || 0) + 1;
      const gain = Math.max(10, 60 - mistakes * 10), key = 'match:' + (items[0].L), best = S.best[key];
      const newBest = !best || secs < best;
      if (newBest) S.best[key] = +secs.toFixed(1);
      const lv = bonus(gain, Math.round(gain / 3));
      record({ cat: 'vocab', kind: 'match' }, true, { combo: 0 });
      save();
      render(`<div class="session"><div class="qcard result">${mascotSVG(mistakes ? 'happy' : 'cheer', { cls: 'hop' })}<div class="eyebrow">${esc(cfg.title)}</div><div class="score">${secs.toFixed(1)}s</div>
        <div class="gains">${newBest ? '<span class="pill coin">New best time!</span>' : `<span class="pill">Best ${best}s</span>`}<span class="pill">${mistakes} mistake${mistakes === 1 ? '' : 's'}</span><span class="pill coin">+${Math.round(gain / 3)} ${ICON.coin}</span></div>
        <div class="row-between" style="justify-content:center"><button class="btn primary" data-act="again">Play again</button><button class="btn" data-act="quit">Back</button></div></div></div>`,
        { quit: () => go(cfg.back), again: () => matchSession(cfg) });
      if (!mistakes) petals(16);
      setTimeout(() => celebrate(lv), 300);
    }
  }

  // ---------------------------------------------------------------- settings
  function openSettings() {
    const seg = (name, opts) => `<div class="seg">${opts.map(([v, l]) => `<button class="chip" data-set="${name}" data-val="${v}" aria-pressed="${String(S.settings[name]) === String(v)}">${l}</button>`).join('')}</div>`;
    let armed = false;
    const m = modal('');
    const box = m.firstElementChild;
    const draw = () => {
      box.innerHTML = `<div class="row-between"><h2>せってい · Settings</h2><button class="btn" data-x>Done</button></div>
        <div class="field"><label>Show Japanese as</label>${seg('script', [['kana', 'Kana only'], ['kanji', 'Kanji + furigana'], ['kanji-only', 'Kanji only']])}</div>
        <div class="field"><label>Romaji under questions</label>${seg('romaji', [['show', 'Show'], ['after', 'Only in answers'], ['hide', 'Never']])}</div>
        <div class="field"><label>Flashcards show first</label>${seg('flashDir', [['jp', 'Japanese'], ['en', 'English']])}</div>
        <div class="field"><label>Read words aloud automatically</label>${seg('audio', [[true, 'On'], [false, 'Off']])}${speech.ok ? '' : '<div class="muted small">This browser has no Japanese voice, so listening drills fall back to reading.</div>'}</div>
        <div class="field"><label>Voice speed</label>${seg('rate', [[0.7, 'Slow'], [0.9, 'Normal'], [1.05, 'Fast']])}</div>
        <div class="field"><label>Sound effects</label>${seg('sound', [[true, 'On'], [false, 'Off']])}</div>
        <div class="field"><label for="bk">Backup</label><div class="muted small">Progress saves automatically${ML.isRemote() ? ' to your account' : ' in this browser'}. Copy this text to move it somewhere else, or paste a backup and press Restore.</div>
          <textarea id="bk" rows="3"></textarea>
          <div class="seg"><button class="chip" data-op="copy">Copy backup</button><button class="chip" data-op="restore">Restore from text</button><button class="chip" data-op="reset" style="color:var(--bad)">${armed ? 'Press again to erase everything' : 'Reset all progress'}</button></div></div>
        <div class="muted small">Stroke order data from <a href="https://kanjivg.tagaini.net" target="_blank" rel="noopener">KanjiVG</a> by Ulrich Apel, CC BY-SA 3.0. Kanji readings and meanings from <a href="https://www.edrdg.org/wiki/index.php/KANJIDIC_Project" target="_blank" rel="noopener">KANJIDIC</a> (EDRDG), CC BY-SA 4.0.</div>`;
      box.querySelector('#bk').value = JSON.stringify(ML.S);
    };
    draw();
    m.addEventListener('click', async (e) => {
      if (!m.isConnected) { refresh(); return; }
      const s = e.target.closest('[data-set]');
      if (s) {
        let v = s.dataset.val;
        v = v === 'true' ? true : v === 'false' ? false : isNaN(+v) ? v : +v;
        S.settings = { ...S.settings, [s.dataset.set]: v }; save(); draw();
        if (s.dataset.set === 'theme') applySkin();
        if (s.dataset.set === 'rate') speech.say('こんにちは');
        if (s.dataset.set === 'sound') sfx.play('ok');
      }
      const op = e.target.closest('[data-op]');
      if (!op) return;
      const ta = box.querySelector('#bk');
      if (op.dataset.op === 'copy') { try { await navigator.clipboard.writeText(ta.value); toast('Backup copied'); } catch (err) { ta.select(); toast('Selected. Copy it with ⌘C / Ctrl+C'); } }
      if (op.dataset.op === 'restore') { try { if (ML.adopt(JSON.parse(ta.value))) { save(); applySkin(); toast('Progress restored'); draw(); } else toast("That text isn't a Minna Line backup"); } catch (err) { toast("That text isn't a Minna Line backup"); } }
      if (op.dataset.op === 'reset') { if (!armed) { armed = true; draw(); return; } ML.resetAll(true); applySkin(); armed = false; toast('Progress erased'); draw(); }
    });
    m.addEventListener('click', (e) => { if (e.target === m || e.target.closest('[data-x]')) setTimeout(refresh, 0); });
  }

  // ---------------------------------------------------------------- boot
  ART.install();
  applySkin();
  let started = false;
  function start() {
    applySkin();
    const hash = (location.hash || '').slice(1);
    go(SBY.has(hash) ? { name: 'station', id: hash } : ROUTES[hash] && hash !== 'read' && hash !== 'station' && hash !== 'post' && hash !== 'class' && hash !== 'placement' ? { name: hash } : { name: 'home' });
    if (started) return;
    started = true;
    window.addEventListener('hashchange', () => { const h = location.hash.slice(1); if (SBY.has(h)) go({ name: 'station', id: h }); });
    setTimeout(() => ML.connectRemote(() => { applySkin(); refresh(); }), 0);
  }
  // Shared with social.js, which adds accounts, the leaderboard, stats and the admin dashboard.
  window.MLUI = {
    ML, S, X, G, ROUTES, ICON, ART, root, render, go, refresh, start, modal, toast, petals, celebrate, applySkin, openSettings, mascotSVG, meter, coins, esc,
    readiness, curLevel, weekHTML, sayBtn, rubyHTML, stationKeys, keyToQ, quizSession, weakKeys, prioritize, lineColor, nextStation,
    get view() { return view; }, set view(v) { view = v; }, setActions(a) { A = { ...G, ...a }; }, setKeys(fn) { keyHandler = fn; },
  };
  window.__minna = { ML, keyToQ, numQ, stationKeys, conjKey, go, quizSession, writeSession, VOCAB, KANJI, GRAMMAR, STATIONS };
  // social.js (loaded next) decides whether to show the log-in gate first; without it, go straight in.
  window.addEventListener('DOMContentLoaded', () => { if (window.SOCIAL) window.SOCIAL.boot(); else start(); });
})();
