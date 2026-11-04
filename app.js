// Minna Line UI: views, sessions (quiz, yokai battle, sprint, flashcards, match), shop, capsule machine, collection.
(() => {
  'use strict';
  const ML = window.ML;
  const {
    esc, shuffle, pick, uniqBy, dayStr, hasKanji, DAY, hashStr, rng, toHira, normKana, particleNorm, romajiToKana, typedMatches,
    VOCAB, VBY, KANA, KANJI, KBY, GRAMMAR, GBY, EXAMPLES, EBY, quizzable, posGroup, vKey, exampleFor, STATIONS, SBY,
    verbForms, adjForms, FORMS, CONJ_BY_LESSON, conjVerbs, conjAdjs, conjAnswer, canForm, READING, RBY, GUIDE, STROKES, rubyToKana, rubyToKanji, numKana, timeKana, HOURS, MONTHS, dayKana, COUNTERS, ageKana, D1,
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
    back: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    coin: '<svg class="coin-i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10.5" fill="var(--coin)" stroke="#b07a10" stroke-width="1.5"/><circle cx="12" cy="12" r="7.5" fill="none" stroke="#fff3c4" stroke-width="1.2"/><path d="M8.5 7.5 12 12l3.5-4.5M12 12v5M9 12.5h6M9 15h6" fill="none" stroke="#7a4f00" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    lantern: (on) => `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="1.5" width="6" height="2.5" rx="1" fill="${INK}"/><ellipse cx="12" cy="12" rx="7.5" ry="8" fill="${on ? '#ff6b6b' : 'var(--rule)'}" stroke="${INK}" stroke-width="1.5"/><path d="M5 9.5h14M5 14.5h14" stroke="${INK}" stroke-opacity=".3" stroke-width="1.3"/><rect x="9" y="20" width="6" height="2.5" rx="1" fill="${INK}"/></svg>`,
    heart: (on) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8.5-5.3-8.5-11.2A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8.5 2.8C20.5 15.7 12 21 12 21z" fill="${on ? '#ff6b81' : 'none'}" stroke="${on ? INK : 'var(--muted)'}" stroke-width="1.6"/></svg>`,
    medal: (on) => `<svg viewBox="0 0 44 44" aria-hidden="true"><path d="M14 2h7l4 14h-7zM30 2h-7l-4 14h7z" fill="${on ? 'var(--line)' : 'var(--rule)'}"/><circle cx="22" cy="28" r="13" fill="${on ? 'var(--coin)' : 'var(--rule)'}" stroke="${INK}" stroke-width="2"/><path d="M22 21l2.2 4.6 5 .6-3.7 3.4 1 5-4.5-2.5-4.5 2.5 1-5-3.7-3.4 5-.6z" fill="${on ? '#fff5d0' : 'var(--panel)'}"/></svg>`,
    train: `<svg class="train-here" viewBox="0 0 44 28" aria-hidden="true"><path d="M3 20c0-9 8-14 18-14h12c5 0 8 3 9 8v6z" fill="var(--panel)" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round"/><path d="M10 11h22v5H8c.4-2 1-3.5 2-5z" fill="var(--express)"/><path d="M3 20h39" stroke="var(--line)" stroke-width="3"/><circle cx="13" cy="24" r="3" fill="${INK}"/><circle cx="31" cy="24" r="3" fill="${INK}"/></svg>`,
  };

  // Mochi, the cat conductor. Hats/accessories come from the shop.
  function mascotSVG(mood = 'calm', o = {}) {
    const hat = o.hat ?? S.equip.hat, acc = o.acc ?? S.equip.acc;
    const st = `stroke="${INK}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`;
    const eyes = {
      calm: `<circle cx="47" cy="66" r="4.6" fill="${INK}"/><circle cx="73" cy="66" r="4.6" fill="${INK}"/><circle cx="48.6" cy="64.4" r="1.5" fill="#fff"/><circle cx="74.6" cy="64.4" r="1.5" fill="#fff"/>`,
      happy: `<path d="M41 68q6-8 12 0M67 68q6-8 12 0" fill="none" ${st}/>`,
      wow: `<circle cx="47" cy="65" r="6.2" fill="${INK}"/><circle cx="73" cy="65" r="6.2" fill="${INK}"/><circle cx="49.2" cy="62.8" r="2.2" fill="#fff"/><circle cx="75.2" cy="62.8" r="2.2" fill="#fff"/>`,
      cheer: `<path d="M41 60l10 6-10 6M79 60l-10 6 10 6" fill="none" ${st}/>`,
      sad: `<path d="M41 66q6 5 12 0M67 66q6 5 12 0" fill="none" ${st}/><path d="M80 72q-3 5 0 7q3-2 0-7z" fill="#8fd3ff" stroke="${INK}" stroke-width="1.3"/>`,
    }[mood] || '';
    const mouth = mood === 'wow' ? `<ellipse cx="60" cy="79" rx="3.5" ry="4.5" fill="#e8607a" stroke="${INK}" stroke-width="2.4"/>`
      : mood === 'cheer' || mood === 'happy' ? `<path d="M53 75q7 11 14 0z" fill="#e8607a" ${st} stroke-width="2.6"/>`
        : `<path d="M53 76q3.5 4.5 7 0q3.5 4.5 7 0" fill="none" ${st} stroke-width="3"/>`;
    const HATS = {
      cap: `<path d="M38 37c1-17 43-17 44 0z" fill="#41538c" ${st} stroke-width="3"/><path d="M32 37h56a4 4 0 0 1 0 8H32a4 4 0 0 1 0-8z" fill="#2c3a68" ${st} stroke-width="3"/><circle cx="60" cy="29" r="4.6" fill="var(--coin)" stroke="${INK}" stroke-width="2"/>`,
      sakura: `<g transform="translate(92 40)">${[0, 72, 144, 216, 288].map((a) => `<ellipse rx="5" ry="7" transform="rotate(${a}) translate(0 -7)" fill="#ffc2d4" stroke="${INK}" stroke-width="1.6"/>`).join('')}<circle r="3.2" fill="#ffd25c" stroke="${INK}" stroke-width="1.4"/></g>`,
      hachimaki: `<path d="M13 55q47-17 94 0l-1 10q-46-16-92 0z" fill="#fff" ${st} stroke-width="2.6"/><circle cx="60" cy="51" r="5.5" fill="#ec4b5d"/><path d="M105 58l14-7-3 12z" fill="#fff" stroke="${INK}" stroke-width="2.2" stroke-linejoin="round"/>`,
      straw: `<ellipse cx="60" cy="35" rx="48" ry="10" fill="#f5d77e" ${st} stroke-width="3"/><path d="M37 34c0-20 46-20 46 0z" fill="#f5d77e" ${st} stroke-width="3"/><path d="M38 30h44" stroke="#ec4b5d" stroke-width="5"/>`,
      kitsune: `<g transform="rotate(-18 28 36)"><path d="M12 44l3-22 9 9 9-9 3 22q-12 11-24 0z" fill="#fff" ${st} stroke-width="2.6"/><path d="M18 39l5 2M30 39l-5 2M24 47v2" stroke="#ec4b5d" stroke-width="2.6" stroke-linecap="round"/><path d="M15 25l4 5M33 25l-4 5" stroke="#ec4b5d" stroke-width="2.4"/></g>`,
      crown: `<path d="M38 36l3-20 10 10 9-15 9 15 10-10 3 20z" fill="var(--coin)" ${st} stroke-width="3"/><circle cx="60" cy="27" r="3" fill="#ff6b81"/><circle cx="46" cy="30" r="2.4" fill="#7cc7f0"/><circle cx="74" cy="30" r="2.4" fill="#8fcf7a"/>`,
    };
    const ACCS = {
      bell: `<path d="M42 98q18 9 36 0" stroke="#ec4b5d" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="60" cy="106" r="7" fill="var(--coin)" stroke="${INK}" stroke-width="2.5"/><path d="M56 108h8" stroke="${INK}" stroke-width="2"/>`,
      bow: `<path d="M60 102l-15-8v16zM60 102l15-8v16z" fill="#ff8fb1" ${st} stroke-width="2.4"/><circle cx="60" cy="102" r="4.5" fill="#ff6b98" stroke="${INK}" stroke-width="2.2"/>`,
      scarf: `<path d="M27 95q33 15 66 0l2 10q-35 15-70 0z" fill="#ec4b5d" ${st} stroke-width="2.6"/><path d="M78 104l9 15-11 1-4-13z" fill="#ec4b5d" ${st} stroke-width="2.4"/>`,
    };
    const behindHat = hat === 'straw' ? HATS.straw : '';
    return `<svg class="mascot ${o.cls || ''}" viewBox="-6 -6 132 132" role="img" aria-label="Mochi the cat conductor">
      <path d="M22 52 26 16l24 18z" fill="var(--mochi)" ${st}/><path d="M28 43 30 26l11 9z" fill="var(--blush)"/>
      <path d="M98 52 94 16 70 34z" fill="var(--mochi)" ${st}/><path d="M92 43 90 26l-11 9z" fill="var(--blush)"/>
      <path d="M60 26c30 0 50 22 50 50 0 24-22 38-50 38S10 100 10 76c0-28 20-50 50-50z" fill="var(--mochi)" ${st}/>
      <path d="M8 70l12 2M8 80l12-2M112 70l-12 2M112 80l-12-2" stroke="${INK}" stroke-width="2" stroke-linecap="round" opacity=".55"/>
      <ellipse cx="35" cy="80" rx="7.5" ry="4.5" fill="var(--blush)" opacity=".85"/><ellipse cx="85" cy="80" rx="7.5" ry="4.5" fill="var(--blush)" opacity=".85"/>
      ${eyes}${mouth}
      <ellipse cx="44" cy="112" rx="8" ry="5" fill="var(--mochi)" ${st} stroke-width="2.6"/><ellipse cx="76" cy="112" rx="8" ry="5" fill="var(--mochi)" ${st} stroke-width="2.6"/>
      ${ACCS[acc] || ''}${behindHat || HATS[hat] || ''}
    </svg>`;
  }
  const YOKAI = [
    { id: 'obake', jp: 'おばけ', name: 'Obake', color: '#ece6ff' },
    { id: 'oni', jp: 'おに', name: 'Oni', color: '#ff9f9f' },
    { id: 'kappa', jp: 'かっぱ', name: 'Kappa', color: '#9fdc9a' },
    { id: 'tanuki', jp: 'たぬき', name: 'Tanuki', color: '#d8ae86' },
    { id: 'kitsune', jp: 'きつね', name: 'Kitsune', color: '#ffe0bf' },
    { id: 'karakasa', jp: 'からかさ', name: 'Karakasa', color: '#bfaef5' },
  ];
  const yokaiFor = (st) => YOKAI[(hashStr(st.id) >>> 3) % YOKAI.length];
  function yokaiSVG(y, mood = 'idle', cls = '') {
    const ink = '#3b2f4d', st = `stroke="${ink}" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round"`;
    const ey = y.id === 'karakasa' ? 44 : 60;
    let back = '', body, extra = '';
    if (y.id === 'obake') body = `<path d="M60 14c27 0 41 21 41 47v45l-10-8-10 8-11-8-10 8-11-8-10 8-10-8V61c0-26 14-47 41-47z" fill="${y.color}" ${st}/>`;
    else if (y.id === 'karakasa') {
      body = `<path d="M60 8 106 70q-46-12-92 0z" fill="${y.color}" ${st}/><path d="M37 66 60 8M83 66 60 8" stroke="${ink}" stroke-width="2" opacity=".4"/><path d="M60 66v34" ${st}/><path d="M60 100q-8 0-8 8h16q0-8-8-8z" fill="#ffd25c" ${st} stroke-width="2.4"/>`;
    } else body = `<path d="M60 22c27 0 45 18 45 45s-19 40-45 40-45-14-45-40 18-45 45-45z" fill="${y.color}" ${st}/>`;
    if (y.id === 'oni') extra = `<path d="M38 32 31 10l17 15zM82 32l7-22-17 15z" fill="#ffe27a" ${st} stroke-width="2.6"/>`;
    if (y.id === 'kappa') extra = `<path d="M38 28l-4-8 8 4 2-8 6 7 4-8 6 8 6-8 4 8 6-7 2 8 8-4-4 8" fill="#5fae62" ${st} stroke-width="2.2"/><ellipse cx="60" cy="27" rx="20" ry="7" fill="#fff8c9" ${st} stroke-width="2.6"/>`;
    if (y.id === 'tanuki') { back = `<circle cx="31" cy="32" r="11" fill="${y.color}" ${st}/><circle cx="89" cy="32" r="11" fill="${y.color}" ${st}/>`; extra = `<path d="M30 58q12-9 23 2-6 12-23 4zM90 58q-12-9-23 2 6 12 23 4z" fill="#6b4c3b" opacity=".85"/><path d="M58 22q8-12 16-4-8 6-16 4z" fill="#8fcf7a" ${st} stroke-width="2.2"/>`; }
    if (y.id === 'kitsune') { back = `<path d="M26 44 30 6l24 22zM94 44 90 6 66 28z" fill="${y.color}" ${st}/><path d="M30 14l2 12 8-4zM90 14l-2 12-8-4z" fill="#ff9a6b"/>`; extra = `<path d="M34 76l10 2M86 76l-10 2M57 36q3-6 6 0" stroke="#ec4b5d" stroke-width="3" stroke-linecap="round" fill="none"/>`; }
    const eyes = {
      idle: y.id === 'karakasa' ? `<circle cx="60" cy="${ey}" r="9" fill="#fff" ${st} stroke-width="2.6"/><circle cx="61" cy="${ey + 1}" r="4.5" fill="${ink}"/>` : `<circle cx="47" cy="${ey}" r="5" fill="${ink}"/><circle cx="73" cy="${ey}" r="5" fill="${ink}"/><circle cx="48.5" cy="${ey - 1.6}" r="1.6" fill="#fff"/><circle cx="74.5" cy="${ey - 1.6}" r="1.6" fill="#fff"/>`,
      hit: y.id === 'karakasa' ? `<path d="M54 ${ey - 6}l12 12M66 ${ey - 6}l-12 12" ${st}/>` : `<path d="M42 ${ey - 5}l10 10M52 ${ey - 5}l-10 10M68 ${ey - 5}l10 10M78 ${ey - 5}l-10 10" ${st}/>`,
      laugh: y.id === 'karakasa' ? `<path d="M52 ${ey + 2}q8-10 16 0" fill="none" ${st}/>` : `<path d="M41 ${ey + 2}q6-8 12 0M67 ${ey + 2}q6-8 12 0" fill="none" ${st}/>`,
      gone: `<circle cx="${y.id === 'karakasa' ? 60 : 47}" cy="${ey}" r="5" fill="none" ${st} stroke-width="2.2"/>${y.id === 'karakasa' ? '' : `<circle cx="73" cy="${ey}" r="5" fill="none" ${st} stroke-width="2.2"/>`}`,
    }[mood];
    const my = y.id === 'karakasa' ? 56 : 78;
    const mouth = mood === 'laugh' ? `<path d="M52 ${my}q8 12 16 0z" fill="#e8607a" ${st} stroke-width="2.4"/>`
      : mood === 'hit' || mood === 'gone' ? `<path d="M53 ${my + 2}q7-5 14 0" fill="none" ${st} stroke-width="2.6"/>`
        : y.id === 'oni' ? `<path d="M52 ${my}q8 5 16 0" fill="none" ${st} stroke-width="2.6"/><path d="M55 ${my + 1}l2 5 2-4" fill="#fff" stroke="${ink}" stroke-width="1.6"/>`
          : y.id === 'obake' || y.id === 'karakasa' ? `<path d="M54 ${my}q6 4 12 0" fill="none" ${st} stroke-width="2.6"/><path d="M58 ${my + 2}q2 9 6 0" fill="#ff8fa3" stroke="${ink}" stroke-width="2"/>`
            : y.id === 'kappa' ? `<path d="M50 ${my - 2}q10 9 20 0q-10-4-20 0z" fill="#ffc35c" ${st} stroke-width="2.4"/>`
              : `<path d="M54 ${my}q6 5 12 0" fill="none" ${st} stroke-width="2.6"/>`;
    const blush = `<ellipse cx="36" cy="${ey + 12}" rx="6" ry="3.5" fill="#ff8fa3" opacity=".5"/><ellipse cx="84" cy="${ey + 12}" rx="6" ry="3.5" fill="#ff8fa3" opacity=".5"/>`;
    return `<svg class="yokai ${cls}" viewBox="0 0 120 120" role="img" aria-label="${esc(y.name)}">${back}${body}${extra}${y.id === 'karakasa' ? '' : blush}${eyes}${mouth}</svg>`;
  }
  const isLine = (st) => st.kind === 'lesson' || st.kind === 'kana';
  const lineColor = (st) => (st.line === 'X' ? 'var(--express)' : 'var(--line)');
  const lineLetter = (st) => (st.line === 'X' ? 'X' : 'M');
  const codeOf = (st) => (isLine(st) ? lineLetter(st) + st.code : st.code);
  const badgeHTML = (st) => (isLine(st) ? `<span class="badge"><small>${lineLetter(st)}</small><b>${st.code}</b></span>` : `<span class="badge"><b>${st.code}</b></span>`);
  function stampSVG(st, date) {
    const ink = 'var(--stamp)';
    const code = codeOf(st);
    const jp = st.jp.length > 9 ? st.jp.slice(0, 9) : st.jp;
    return `<svg viewBox="0 0 120 120" role="img" aria-label="Stamp: ${esc(st.name)}">
      <circle cx="60" cy="60" r="55" fill="none" style="stroke:${ink}" stroke-width="4"/>
      <circle cx="60" cy="60" r="47" fill="none" style="stroke:${ink}" stroke-width="1.4" stroke-dasharray="3 2.4"/>
      <text x="60" y="33" text-anchor="middle" style="fill:${ink};font:9.5px var(--f-pop);letter-spacing:1px">${st.line === 'X' ? 'N5 EXPRESS' : 'MINNA LINE'}</text>
      <text x="60" y="71" text-anchor="middle" style="fill:${ink};font:${code.length > 2 ? 27 : 34}px var(--f-pop)">${esc(code)}</text>
      <text x="60" y="88" text-anchor="middle" style="fill:${ink};font:700 10.5px var(--f-ui)">${esc(jp)}</text>
      <text x="60" y="101" text-anchor="middle" style="fill:${ink};font:8px var(--f-pop)">${esc(date || '')}</text>
    </svg>`;
  }
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
  const OMAMORI = `<svg viewBox="0 0 60 84" width="52" height="72" aria-hidden="true"><path d="M14 24 30 10l16 14v50a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4z" fill="#ff8fb1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/><path d="M22 6q8 8 16 0" fill="none" stroke="var(--coin)" stroke-width="3.5" stroke-linecap="round"/><circle cx="30" cy="12" r="4" fill="var(--coin)" stroke="${INK}" stroke-width="2"/><rect x="21" y="34" width="18" height="30" rx="3" fill="#fff" stroke="${INK}" stroke-width="2"/><text x="30" y="55" text-anchor="middle" style="fill:#c2334a;font:15px var(--f-pop)">守</text></svg>`;
  const machineSVG = () => `<svg viewBox="0 0 200 240" aria-hidden="true">
      <rect x="40" y="200" width="120" height="30" rx="10" fill="var(--line)" stroke="${INK}" stroke-width="3"/>
      <rect x="30" y="110" width="140" height="100" rx="18" fill="var(--line)" stroke="${INK}" stroke-width="3.5"/>
      <circle cx="100" cy="72" r="64" fill="color-mix(in srgb, var(--express) 22%, var(--panel))" stroke="${INK}" stroke-width="3.5"/>
      ${[[70, 70, '#ff8fb1'], [100, 50, '#ffc845'], [128, 74, '#8fcf7a'], [84, 100, '#7cc7f0'], [116, 104, '#a99cf0'], [60, 100, '#ff9a6b'], [100, 86, '#fff']].map(([x, y, c]) => `<g><circle cx="${x}" cy="${y}" r="13" fill="${c}" stroke="${INK}" stroke-width="2.4"/><path d="M${x - 13} ${y}h26" stroke="${INK}" stroke-width="2"/></g>`).join('')}
      <path d="M78 40q14-14 32-6" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>
      <circle cx="100" cy="150" r="20" fill="var(--panel)" stroke="${INK}" stroke-width="3"/><rect x="96" y="134" width="8" height="32" rx="4" fill="var(--coin)" stroke="${INK}" stroke-width="2.4"/>
      <rect x="64" y="182" width="44" height="22" rx="8" fill="var(--panel)" stroke="${INK}" stroke-width="3"/>
      <text x="152" y="128" text-anchor="middle" style="fill:${INK};font:12px var(--f-pop)">ガチャ</text></svg>`;

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
    return `<div class="ans jp">${jpHTML(v, 'kanji')}</div><div>${esc(v.kana)} · <i>${esc(v.ro)}</i> · ${esc(v.en)}${v.note ? ` <span class="muted">(${esc(v.note)})</span>` : ''}</div>${ex ? `<div class="exs"><span class="jp">${esc(ex.jp)}</span><br><span class="muted">${esc(ex.en)}</span></div>` : ''}`;
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
    const d = g.drills[i];
    const key = `g|${g.id}|${i}`;
    const after = `<div class="small"><b>${esc(g.title)}</b> · ${esc(g.meaning)}</div>`;
    if (d.type === 'order') {
      const ans = d.tiles.join(' ');
      return { key, cat: 'grammar', kind: 'order', label: 'Put the sentence in order', prompt: `<div class="en-q">${esc(d.en)}</div>`, tiles: d.tiles, answer: ans, say: ans, sayAfter: true, after: `<div class="ans">${esc(ans)}。</div>${after}` };
    }
    if (d.type === 'fill') {
      const full = d.jp.replace('＿＿', d.answer);
      return { key, cat: 'grammar', kind: 'mc', label: 'Fill the blank', say: full, sayAfter: true,
        prompt: `<div class="glyph sentence">${esc(d.jp).replace('＿＿', '<span style="display:inline-block;border-bottom:3px solid var(--c,var(--line));width:2.4em"></span>')}</div>${d.en ? `<div class="sub">${esc(d.en)}</div>` : ''}`,
        options: shuffle(d.options).map((o) => ({ html: `<span class="jpo">${esc(o)}</span>`, val: o })), answer: d.answer, after: `<div class="ans">${esc(full)}</div>${after}` };
    }
    const isJp = /[぀-ヿ]/.test(d.answer);
    return { key, cat: 'grammar', kind: 'mc', label: 'Choose', prompt: `<div class="en-q" style="font-size:19px">${esc(d.q)}</div>`, options: shuffle(d.options).map((o) => ({ html: isJp ? `<span style="font-size:17px">${esc(o)}</span>` : esc(o), val: o })), answer: d.answer, say: isJp ? d.answer : '', sayAfter: isJp, after: `<div class="ans">${esc(d.answer)}</div>${after}` };
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
      prompt: `<button class="btn primary" data-act="say" data-arg="${esc(e.jp)}">${ICON.say.replace('<svg', '<svg width="20" height="20"')} Play again</button><button class="btn sm ghost" data-act="reveal">Show the Japanese</button><div id="rv" class="glyph sentence" hidden>${esc(e.jp)}</div>`,
      options: opts.map((x) => ({ html: esc(x.en), val: x.id })), answer: e.id, after: `<div class="ans">${esc(e.jp)}</div><div><i>${esc(e.ro)}</i></div><div>${esc(e.en)}</div><div class="small muted">${esc(e.g.title)} · Lesson ${e.L}</div>` };
  }
  const conjKey = (form, v) => `c|${form}|${v.id}`;
  function wrongBases(base, v, ans) {
    const wrong = new Set();
    for (const g of [1, 2, 3]) { try { const f = verbForms(v, g); if (f[base]) wrong.add(f[base]); } catch (e) { /* skip */ } }
    for (const [a, b] of [['って', 'んで'], ['んで', 'いて'], ['いて', 'って'], ['して', 'しって'], ['った', 'んだ'], ['ない', 'らない']]) if (ans.includes(a)) wrong.add(ans.replace(a, b));
    const masu = v.kana.replace(/\s/g, ''), s = masu.slice(0, -2), p = s.slice(0, -1);
    wrong.add(s + { te: 'て', nai: 'ない', dict: 'る', ta: 'た', nakatta: 'なかった' }[base]);
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
      for (const k of ['mneg', 'mpast', 'mpastneg', 'mshou', 'mseni', 'mtai']) if (k !== form) wrong.add(f[k]);
      wrong.add(f.stem + 'ますでした'); wrong.add(f.stem + 'ませんました');
    } else if (F.verb && F.base) {
      const f = verbForms(v), base = f[F.base];
      const wrap = (w) => (F.cut ? w.slice(0, -F.cut) : w) + F.suf;
      for (const w of wrongBases(F.base, v, base)) wrong.add(wrap(w));
      wrong.add(f.stem + F.suf.replace(/^ /, ''));
    } else if (F.verb) {
      for (const w of wrongBases(form, v, ans)) wrong.add(w);
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
  const stationKanji = (st) => KANJI.filter((k) => k.lesson === st.L);
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
    else if (st.kind === 'kanji') keys = KANJI.map(kanjiKey);
    else if (st.kind === 'verbs') keys = conjVerbs(20).flatMap((v) => ['mneg', 'mpast', 'mpastneg', 'te', 'nai', 'dict', 'ta'].map((f) => conjKey(f, v)));
    keyCache.set(st.id, keys);
    return keys;
  }
  const numMastery = () => Math.min(1, S.numStats.ok / 120);
  const stationMastery = (st) => (st.kind === 'exam' ? (S.stamps.exam ? 1 : 0) : st.kind === 'numbers' ? numMastery() : mastery(stationKeys(st)));
  function myMaxL() {
    let m = 0;
    for (const k of Object.keys(S.items)) if (k.startsWith('v|')) { const L = parseInt(k.slice(2), 10); if (L > m && L <= 25) m = L; }
    for (const id of Object.keys(S.stamps)) { const st = SBY.get(id); if (st && st.L > m && st.L <= 25) m = st.L; }
    return Math.max(m, 4);
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
  function applySkin() { document.documentElement.dataset.skin = S.equip.skin; }
  function topbar() {
    const l = level(), lo = lvlFloor(l), hi = lvlFloor(l + 1), streak = liveStreak();
    return `<header class="topbar"><div class="wrap">
      <button class="brand" data-act="home" aria-label="Home">${mascotSVG('calm', { cls: 'face' })}<span><b>Minna Line</b><span class="brand-sub">みんなの せん · N5</span></span></button>
      <div class="topstats">
        <span class="chipstat" title="Day streak${S.omamori ? ` · ${S.omamori} omamori` : ''}">${ICON.lantern(streak > 0)}${streak}</span>
        <span class="chipstat" title="Yen">${ICON.coin}<span id="coinct">${S.coins.toLocaleString('en-US')}</span></span>
        <span class="chipstat hide-sm" title="${S.xp} XP · ${rank()[3]}">Lv ${l}<span class="lvbar"><i style="width:${Math.round(((S.xp - lo) / (hi - lo)) * 100)}%"></i></span></span>
        <button class="iconbtn" data-act="collection" aria-label="Collection" title="Stamps, stickers and trophies">${ICON.book}</button>
        <button class="iconbtn" data-act="shop" aria-label="Shop" title="Shop">${ICON.bag}</button>
        <button class="iconbtn" data-act="settings" aria-label="Settings" title="Settings">${ICON.gear}</button>
      </div></div></header>`;
  }
  function render(body, actions = {}, onMount) {
    keyHandler = null;
    A = { ...G, ...actions };
    root.innerHTML = topbar() + `<main><div class="wrap">${body}</div></main>`;
    if (onMount) onMount();
  }
  function go(v) {
    speech.stop();
    view = v;
    const map = { home: renderHome, station: () => renderStation(SBY.get(v.id) || STATIONS[1], v.tab), collection: () => renderCollection(v.tab), shop: renderShop, gacha: renderGacha, dict: renderDict, mix: renderMix, reading: renderReadingRoom, read: () => renderReader(RBY.get(v.id)), guide: () => renderGuide(v.id) };
    (map[v.name] || renderHome)();
    window.scrollTo(0, 0);
  }
  function refresh() { if (view.name !== 'session') go(view); }

  // ---------------------------------------------------------------- home
  function nextStation() { return STATIONS.find((s) => isLine(s) && !S.stamps[s.id]) || SBY.get('exam'); }
  function readiness() {
    const rows = [
      ['Kana', mastery(KANA.map(kanaKey))], ['Words', mastery(VOCAB.filter(quizzable).map(vKey))], ['Grammar', mastery(GRAMMAR.flatMap(drillKeys))],
      ['Kanji', mastery(KANJI.map(kanjiKey))], ['Verbs', mastery(stationKeys(SBY.get('verbs')))], ['Reading', mastery(READING.flatMap(readingKeys))], ['Numbers', numMastery()],
    ];
    const w = { Kana: 0.08, Words: 0.3, Grammar: 0.25, Kanji: 0.12, Verbs: 0.1, Reading: 0.1, Numbers: 0.05 };
    return { rows, total: rows.reduce((a, [k, m]) => a + m * w[k], 0) };
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
        <span class="stopname"><b>${esc(s.name)}${s === nx ? ' <span class="pill">next stop</span>' : ''}</b><span class="jp">${esc(s.jp)}${s.kind === 'lesson' && s.L <= 25 ? ` · Lesson ${s.L}` : ''}</span>${s.kind !== 'exam' ? meter(m) : ''}</span>
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
    const pool = VOCAB.filter((v) => quizzable(v) && v.L >= 1 && v.L <= 20 && v.pos !== 'exp' && v.kanji && hasKanji(v.kanji));
    return pool[Math.floor(rng(hashStr('wotd' + dayStr()))() * pool.length)];
  }
  function hubBtn(act, title, jp, sub, arg) { return `<button class="hubbtn" data-act="${act}"${arg ? ` data-arg="${arg}"` : ''}><span class="jp">${jp}</span><b>${title}</b><span>${sub}</span></button>`; }
  function renderHome() {
    const due = dueKeys().length, nx = nextStation(), r = readiness(), l = level(), rk = rank();
    const lo = lvlFloor(l), hi = lvlFloor(l + 1);
    const quests = todaysQuests(), weak = weakKeys().length, w = wordOfDay();
    const M = STATIONS.filter((s) => s.line === 'M'), X = STATIONS.filter((s) => s.line === 'X');
    render(`
      <div class="home"><div>
        <section class="hero">
          ${mascotSVG(due ? 'calm' : 'happy', { cls: 'bob' })}
          <div class="stack">${greeting()}
            <div class="rankline"><span class="pill">${rk[1]} ${rk[3]}</span><b class="pop">Lv ${l}</b>${meter((S.xp - lo) / (hi - lo))}<span class="muted small num">${S.xp - lo}/${hi - lo} XP</span></div>
            ${weekHTML()}
          </div>
        </section>
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
        <h2 class="section-h">Minna Line <span class="pill">M00–M20</span></h2>
        ${railHTML(M, '')}
        <h2 class="section-h">N5 Express <span class="pill express">beyond Lesson 20</span></h2>
        ${railHTML(X, 'express')}
      </div>
      <aside class="side">
        <div class="card" style="--c:${lineColor(nx)}"><div class="eyebrow">Next stop</div>
          <div style="display:flex;gap:12px;align-items:center">${badgeHTML(nx)}<div><h3>${esc(nx.name)}</h3><div class="muted small">${esc(nx.jp)}</div></div></div>
          <button class="btn primary" data-act="station" data-arg="${nx.id}">Go to ${codeOf(nx)}</button></div>
        <div class="card wotd"><div class="row-between"><div class="eyebrow">Word of the day</div>${sayBtn(w.kana)}</div>
          <div class="w">${rubyHTML(w.kanji, w.kana)}</div><div><b>${esc(w.en)}</b> <span class="muted small">· ${esc(w.ro)} · Lesson ${w.L}</span></div></div>
        <div class="card readiness"><div class="eyebrow">N5 readiness</div>
          <div class="big">${Math.round(r.total * 100)}<span style="font-size:18px">%</span></div>
          ${r.rows.map(([k, m]) => `<div class="row"><span>${k}</span>${meter(m)}<span>${Math.round(m * 100)}</span></div>`).join('')}
          <div class="muted small">Counts what's in long-term memory (reviewed out to a 7-day interval or more).</div></div>
        <div class="card"><div class="eyebrow">Collection</div>
          <div class="row-between"><span>Stamps</span><b class="num">${Object.keys(S.stamps).length}/${STATIONS.length}</b></div>
          <div class="row-between"><span>Stickers</span><b class="num">${Object.keys(S.stickers).length}/${STICKERS.length}</b></div>
          <div class="row-between"><span>Trophies</span><b class="num">${Object.keys(S.trophies).length}/${TROPHIES.length}</b></div>
          <button class="btn" data-act="collection">Open the collection</button></div>
      </aside></div>`, {
      review: startReview,
      claim: (id, el) => {
        const r = claimQuest(id);
        if (!r) return;
        sfx.play('coin'); floatCoin(el, `+${r.coins}円`);
        if (r.allDone) { petals(); toast('All tickets punched! +50 yen and a free capsule ticket'); }
        setTimeout(() => { renderHome(); celebrate(r.levelUp); }, 350);
      },
      sprint: () => sprintSession({ id: 'global', title: 'Shinkansen Sprint', make: () => vocabQ(pick(VOCAB.filter((v) => quizzable(v) && v.L >= 1 && v.L <= myMaxL() && v.kana.length < 14)), pick(['jp2en', 'en2jp'])), back: { name: 'home' } }),
      weak: () => quizSession({ title: 'Weak spots', keys: weakKeys().slice(0, 15), back: { name: 'home' } }),
      particles: () => {
        const P = new Set(['は', 'が', 'を', 'に', 'で', 'へ', 'と', 'も', 'の', 'か', 'や', 'から', 'まで', 'より', 'ね', 'よ', 'だけ', 'など', 'ごろ', 'ぐらい', 'くらい']);
        const keys = GRAMMAR.filter((g) => g.lesson <= myMaxL() + 1).flatMap((g) => g.drills.map((d, i) => [g, d, i])).filter(([, d]) => d.type === 'fill' && P.has(d.answer)).map(([g, , i]) => `g|${g.id}|${i}`);
        quizSession({ title: 'Particle dojo', keys: prioritize(keys).slice(0, 15), back: { name: 'home' } });
      },
      sentences: () => quizSession({ title: 'Sentence listening', keys: prioritize(EXAMPLES.filter((e) => e.L <= myMaxL() + 1).map((e) => 'e|' + e.id)).slice(0, 12), back: { name: 'home' } }),
    });
  }
  function startReview() {
    const due = dueKeys().slice(0, 30);
    let qs = due;
    if (qs.length < 10) {
      const fresh = [];
      for (const s of STATIONS) {
        if (!isLine(s)) continue;
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
    const i = STATIONS.indexOf(st), prev = STATIONS[i - 1], next = STATIONS[i + 1];
    return `<button class="back" data-act="home">${ICON.back} Route map</button>
      <div class="sign" style="--c:${lineColor(st)}">
        <div class="sign-main">${badgeHTML(st)}
          <div class="sign-title"><div class="jp">${esc(st.jp)}</div><div class="en">${esc(st.name)}${st.L >= 1 && st.L <= 25 ? ` · Lesson ${st.L}` : ''}</div></div>
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
    if (voc.length) tabs.push(['vocab', `Words (${voc.length})`]);
    if (gr.length) tabs.push(['grammar', `Grammar (${gr.length})`]);
    if (kj.length) tabs.push(['kanji', `Kanji (${kj.length})`]);
    tab = tab && tabs.some((t) => t[0] === tab) ? tab : (tabs[0] || [])[0];
    let panel = '';
    if (tab === 'vocab') panel = vocabTable(VOCAB.filter((v) => v.L === st.L));
    if (tab === 'grammar') panel = gr.map(grammarCard).join('');
    if (tab === 'kanji') panel = kanjiGrid(kj);
    if (tab === 'hira' || tab === 'kata') panel = kanaChart(tab === 'hira' ? 'h' : 'k');
    actions.tab = (t) => go({ name: 'station', id: st.id, tab: t });
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
  function vocabTable(list) {
    const dot = (k) => { const s = stage(k); return `<span class="dot ${s >= 4 ? 'm' : s >= 0 ? 'l' : ''}" title="${s >= 4 ? 'In long-term memory' : s >= 0 ? 'Learning' : 'New'}"></span>`; };
    return `<div class="tblwrap"><table class="vocab"><thead><tr><th></th><th>Kana</th><th>Kanji</th><th>Romaji</th><th>Meaning</th><th></th></tr></thead><tbody>
      ${list.map((v) => `<tr><td>${dot(vKey(v))}</td><td class="kana">${esc(v.kana)}</td><td>${esc(v.kanji)}</td><td class="muted">${esc(v.ro)}</td><td>${esc(v.en)}${v.note ? ` <span class="muted small">${esc(v.note)}</span>` : ''}</td><td>${sayBtn(v.kana)}</td></tr>`).join('')}
    </tbody></table></div><div class="muted small"><span class="dot"></span> new · <span class="dot l"></span> learning · <span class="dot m"></span> in long-term memory</div>`;
  }
  function grammarCard(g) {
    return `<article class="gpoint"><div class="row-between"><h3>${esc(g.title)}</h3><button class="btn sm" data-act="gpoint" data-arg="${g.id}">Drill this (${g.drills.length})</button></div>
      <div class="meaning">${esc(g.meaning)}</div><p>${esc(g.explain)}</p>
      <div>${g.examples.map((x) => `<div class="ex">${sayBtn(x.jp)}<div><div class="jp">${esc(x.jp)}</div><div class="ro">${esc(x.ro)}</div><div class="en">${esc(x.en)}</div></div></div>`).join('')}</div></article>`;
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
      <div><b>${esc(k.m)}</b> · ${k.strokes || '?'} strokes · first useful in Lesson ${k.lesson}</div>
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
    const bands = [[1, 5], [6, 10], [11, 15], [16, 20], [21, 26]];
    const sel = view.band ?? 0;
    const list = sel === 'all' ? KANJI : KANJI.filter((k) => k.lesson >= bands[sel][0] && k.lesson <= bands[sel][1]);
    const c = lineColor(st);
    render(`<div class="station" style="--c:${c}">${signHTML(st)}
      <p class="muted" style="margin:0">All ${KANJI.length} JLPT N5 kanji, grouped by the Minna no Nihongo lesson where you first need them. Tap one for readings and words.</p>
      <div class="chooser">${bands.map((b, i) => `<button class="chip" data-act="band" data-arg="${i}" aria-pressed="${sel === i}">Lessons ${b[0]}–${b[1] > 25 ? '25+' : b[1]}</button>`).join('')}<button class="chip" data-act="band" data-arg="all" aria-pressed="${sel === 'all'}">All</button></div>
      ${group('Practise this group', 'れんしゅう', [act('km', 'Meanings', 'Kanji → meaning'), act('kr', 'Readings', 'Word → reading'), act('kw', 'Words', 'Meaning → kanji word'), act('kwr', 'Write them', 'Stroke order, by hand'), act('ksp', 'Kanji sprint', '60-second rush')])}
      ${bossCard(st, '20 kanji from all of N5. Win to take the Kanji Hall stamp.')}
      ${kanjiGrid(list)}</div>`, {
      band: (b) => { view.band = b === 'all' ? 'all' : +b; renderKanjiHall(st); },
      km: () => quizSession({ title: 'Kanji meanings', keys: prioritize(list.map(kanjiKey)).slice(0, 15), mode: 'meaning', back, color: c }),
      kr: () => quizSession({ title: 'Kanji readings', keys: prioritize(list.map(kanjiKey)).slice(0, 15), mode: 'reading', back, color: c }),
      kw: () => quizSession({ title: 'Kanji words', keys: prioritize(list.map(kanjiKey)).slice(0, 15), mode: 'word', back, color: c }),
      kwr: () => writeSession({ title: 'Write the kanji', items: prioritize(list.map(kanjiKey)).slice(0, 10).map((key) => kanjiWriteItem(KBY.get(key.slice(2)))), back, color: c }),
      ksp: () => sprintSession({ id: 'kanji', title: 'Kanji sprint', make: () => kanjiQ(pick(list), pick(['meaning', 'reading'])), back }),
      boss: () => quizSession({ title: 'Kanji Hall: battle', keys: shuffle(KANJI.map(kanjiKey)).slice(0, 20), back, battle: st, color: 'var(--stamp)' }),
      kdetail: (k) => kanjiModal(KBY.get(k)),
    });
  }
  function renderVerbs(st) {
    const back = { name: 'station', id: st.id };
    const forms = view.forms || ['mneg', 'mpast', 'mpastneg'], maxL = view.maxL || 20, c = lineColor(st);
    const keysFor = () => forms.flatMap((f) => (FORMS[f].verb ? conjVerbs(maxL) : conjAdjs(maxL)).filter((v) => canForm(f, v)).map((v) => conjKey(f, v)));
    const verbs = conjVerbs(maxL);
    const fam = (id, label) => `<div class="field"><label>${label}</label><div class="chooser">${Object.entries(FORMS).filter(([, F]) => F.fam === id).map(([f, F]) => `<button class="chip" data-act="form" data-arg="${f}" aria-pressed="${forms.includes(f)}" title="Lesson ${F.L}">${esc(F.label)}</button>`).join('')}</div></div>`;
    render(`<div class="station" style="--c:${c}">${signHTML(st)}
      ${fam('polite', 'Polite ます forms · Lessons 4–6')}${fam('plain', 'Plain forms · Lessons 14–20')}${fam('pattern', 'Patterns built on them · Lessons 13–25')}${fam('adj', 'Adjectives · Lessons 8–16')}
      <div class="field"><label>Words up to</label><div class="chooser">${[5, 10, 15, 20, 26].map((l) => `<button class="chip" data-act="maxl" data-arg="${l}" aria-pressed="${maxL === l}">${l > 25 ? 'All N5' : 'Lesson ' + l}</button>`).join('')}</div></div>
      ${group('Practise', 'れんしゅう', [act('vq', 'Pick the form', 'Multiple choice'), act('vt', 'Type the form', 'Romaji or kana'), act('vsp', 'Forms sprint', '60-second rush'), `<button class="act" data-act="guide" data-arg="verbs"><b>Verb cheat sheet</b><span>Every form on one page</span></button>`])}
      ${bossCard(st, 'ます・て・ない・dictionary・た forms mixed, 20 questions.')}
      <article class="gpoint"><h3>Verb groups at a glance</h3>
        <p><b>Group 1</b> (stem ends in an い-sound): the て-form depends on the last sound. い・ち・り → って, み・び・に → んで, き → いて, ぎ → いで, し → して. Exception: いきます → いって.</p>
        <p><b>Group 2</b> (stem ends in an え-sound, plus みます, おきます, かります, あびます, できます, います…): drop ます, add て / ない / る / た.</p>
        <p><b>Group 3</b>: します → して・しない・する・した. きます → きて・こない・くる・きた.</p></article>
      <div class="tblwrap"><table class="vocab"><thead><tr><th>ます-form</th><th>Grp</th><th>ません</th><th>ました</th><th>ませんでした</th><th>て</th><th>ない</th><th>Dictionary</th><th>た</th><th>Meaning</th></tr></thead><tbody>
        ${verbs.map((v) => { const f = verbForms(v); return `<tr><td class="kana">${esc(v.kana)}</td><td class="pop">${v.pos[1]}</td><td>${esc(f.mneg)}</td><td>${esc(f.mpast)}</td><td>${esc(f.mpastneg)}</td><td>${esc(f.te)}</td><td>${esc(f.nai)}</td><td>${esc(f.dict)}</td><td>${esc(f.ta)}</td><td class="small">${esc(v.en)}</td></tr>`; }).join('')}
      </tbody></table></div></div>`, {
      form: (f) => { const s = new Set(forms); s.has(f) ? s.delete(f) : s.add(f); if (!s.size) s.add('mneg'); view.forms = [...s]; renderVerbs(st); },
      maxl: (l) => { view.maxL = +l; renderVerbs(st); },
      vq: () => quizSession({ title: 'Verb forms', keys: prioritize(keysFor()).slice(0, 15), mode: 'mc', back, color: c }),
      vt: () => quizSession({ title: 'Verb forms: typing', keys: prioritize(keysFor()).slice(0, 15), mode: 'type', back, color: c }),
      vsp: () => sprintSession({ id: 'verbs', title: 'Forms sprint', make: () => keyToQ(pick(keysFor()), 'mc'), back }),
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
      <article class="gpoint"><h3>Dates and times</h3>
        <p><b>Days:</b> ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 20, 24].map((d) => `${d}日 ${dayKana(d)}`).join('・')}</p>
        <p><b>Months:</b> ${MONTHS.slice(1).map((m, i) => `${i + 1}月 ${m}`).join('・')}</p>
        <p><b>Minutes:</b> 1 いっぷん・2 にふん・3 さんぷん・4 よんぷん・5 ごふん・6 ろっぷん・7 ななふん・8 はっぷん・9 きゅうふん・10 じゅっぷん. Half past is はん.</p>
        <p><b>Big numbers:</b> 300 さんびゃく・600 ろっぴゃく・800 はっぴゃく・3,000 さんぜん・8,000 はっせん・10,000 いちまん.</p></article>
    </div>`, actions);
  }
  function renderExam(st) {
    const back = { name: 'station', id: st.id };
    render(`<div class="station" style="--c:${lineColor(st)}">${signHTML(st)}
      <article class="gpoint"><h3>Practice test, N5 style</h3>
        <p>About 33 questions in the order of the real exam sections: kanji reading (漢字読み), writing (表記), vocabulary (語彙), grammar (文法), reading (読解) and listening (聴解). It draws on Lessons 1–25, the N5 word bank, numbers and all N5 kanji. Score 70% to collect the stamp.</p>
        <p class="muted small">Use this to find weak spots, then drill them at their station. The Guidebook explains how the real exam works.</p>
        <div><button class="btn primary" data-act="start">Start the mock exam</button></div></article>
      ${S.stamps.exam ? `<div class="muted">Best score: ${S.stamps.exam.score}%</div>` : ''}</div>`, {
      start: () => {
        const vk = VOCAB.filter((v) => quizzable(v) && v.L > 0 && v.pos !== 'exp');
        const withK = shuffle(vk.filter((v) => v.kanji && hasKanji(v.kanji) && v.kanji.length <= 4));
        const qs = [];
        withK.slice(0, 7).forEach((v) => qs.push({ ...vocabQ(v, 'kanji'), section: '漢字読み Kanji reading' }));
        withK.slice(7, 12).forEach((v) => {
          const pool = vk.filter((x) => x.kanji && hasKanji(x.kanji));
          const opts = shuffle([v, ...distractors(v, pool, 3, (x) => x.kanji)]);
          qs.push({ key: vKey(v), cat: 'vocab', kind: 'mc', section: '表記 Writing', label: 'Which is the correct kanji?', prompt: `<div class="glyph mid">${esc(v.kana)}</div>`, options: opts.map((x) => ({ html: `<span class="jpo">${esc(x.kanji)}</span>`, val: x.id })), answer: v.id, after: `<div class="ans">${esc(v.kanji)}</div><div>${esc(v.en)}</div>` });
        });
        shuffle(vk).slice(0, 6).forEach((v) => qs.push({ ...vocabQ(v, pick(['en2jp', 'jp2en'])), section: '語彙 Vocabulary' }));
        qs.push({ ...numQ('date'), section: '語彙 Vocabulary' }, { ...numQ('counter'), section: '語彙 Vocabulary' });
        const drills = shuffle(GRAMMAR.flatMap((g) => g.drills.map((d, i) => [g, i]).filter(([, i]) => g.drills[i].type !== 'order')));
        drills.slice(0, 7).forEach(([g, i]) => qs.push({ ...grammarQ(g, i), section: '文法 Grammar' }));
        const psg = shuffle(READING.filter((r) => r.type === 'passage'))[0], cv = shuffle(READING.filter((r) => r.type === 'conversation'))[0];
        if (psg) psg.questions.forEach((_, i) => qs.push({ ...readingQ(psg, i), section: '読解 Reading' }));
        shuffle(EXAMPLES).slice(0, cv ? 2 : 3).forEach((e) => qs.push({ ...sentenceQ(e), section: '聴解 Listening' }));
        if (cv) qs.push({ ...readingQ(cv, 0, 'listen'), section: '聴解 Listening' });
        quizSession({ title: 'N5 mock exam', questions: qs, back, exam: st, pass: 70, color: 'var(--stamp)', noRequeue: true });
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
    return `<div class="tblwrap"><table class="vocab"><tbody>${list.map((v) => `<tr><td class="kana"><button class="back" style="color:var(--ink);font-size:17px" data-act="word" data-arg="${esc(v.id)}">${esc(v.kana)}</button></td><td>${esc(v.kanji)}</td><td>${esc(v.en)}</td><td><span class="pill ${v.L > 20 ? 'express' : ''}">${v.L === 0 ? 'Kana' : v.L > 25 ? 'N5' : 'L' + v.L}</span></td><td>${sayBtn(v.kana)}</td></tr>`).join('')}</tbody></table></div>`;
  }
  function wordModal(v) {
    const ex = exampleFor(v), s = stage(vKey(v));
    const st = SBY.get('L' + v.L);
    const m = modal(`<div class="row-between"><div class="glyph mid">${jpHTML(v, 'kanji')}</div><button class="btn" data-x>Close</button></div>
      <div style="display:flex;gap:10px;align-items:center">${sayBtn(v.kana)}<div><b>${esc(v.en)}</b><div class="muted small">${esc(v.kana)} · ${esc(v.ro)} · ${v.pos}${v.note ? ' · ' + esc(v.note) : ''}</div></div></div>
      ${ex ? `<div class="ex">${sayBtn(ex.jp)}<div><div class="jp">${esc(ex.jp)}</div><div class="ro">${esc(ex.ro)}</div><div class="en">${esc(ex.en)}</div></div></div>` : ''}
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
    const mx = view.mx || (view.mx = { from: 1, to: Math.min(myMaxL(), 20), types: ['words', 'grammar', 'forms'], n: 20 });
    const types = [['words', 'Words'], ['listen', 'Listening'], ['typing', 'Typing'], ['grammar', 'Grammar'], ['sentences', 'Sentences'], ['reading', 'Reading'], ['kanji', 'Kanji'], ['forms', 'Verb forms'], ['numbers', 'Numbers']];
    const Ls = Array.from({ length: 25 }, (_, i) => i + 1);
    const a = Math.min(mx.from, mx.to), b = Math.max(mx.from, mx.to), pools = mixPools(a, b);
    const count = (k) => (k === 'numbers' ? Infinity : pools[k].length);
    const empty = types.filter(([k]) => !count(k));
    const live = mx.types.filter((k) => count(k));
    render(`<div class="station"><button class="back" data-act="home">${ICON.back} Route map</button>
      <h1>ミックス · Custom mix</h1>
      <div class="card"><div class="field"><label for="mfrom">Lessons</label><div class="row-between" style="justify-content:flex-start">
        <select id="mfrom" class="chip">${Ls.map((l) => `<option value="${l}" ${l === mx.from ? 'selected' : ''}>Lesson ${l}</option>`).join('')}</select> to
        <select id="mto" class="chip">${Ls.map((l) => `<option value="${l}" ${l === mx.to ? 'selected' : ''}>Lesson ${l}</option>`).join('')}</select></div></div>
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
        quizSession({ title: `Mix · Lessons ${a}–${b}`, questions: shuffle(qs).slice(0, mx.n), back: { name: 'mix', mx } });
      },
    }, () => {
      document.getElementById('mfrom').addEventListener('change', (e) => { mx.from = +e.target.value; renderMix(); });
      document.getElementById('mto').addEventListener('change', (e) => { mx.to = +e.target.value; renderMix(); });
    });
  }

  // ---------------------------------------------------------------- reading room
  function renderReadingRoom() {
    const f = view.f || 'all';
    const list = READING.filter((r) => f === 'all' || r.type === f);
    const row = (r) => { const m = mastery(readingKeys(r)); return `<button class="hubbtn" data-act="read" data-arg="${r.id}"><span class="jp">${esc(r.titleJp || '')}</span><b>${esc(r.title)}</b><span>Lesson ${r.lesson} · ${r.type === 'conversation' ? 'Conversation' : esc(r.form || 'Reading')}</span>${meter(m)}</button>`; };
    render(`<div class="station"><button class="back" data-act="home">${ICON.back} Route map</button>
      <h1>よむ・はなす · Reading room</h1>
      <p class="muted" style="margin:0">Short conversations and N5-style texts for every lesson. Each one has audio and three questions.</p>
      <div class="chooser">${[['all', 'All'], ['conversation', 'Conversations'], ['passage', 'Reading texts']].map(([k, l]) => `<button class="chip" data-act="rf" data-arg="${k}" aria-pressed="${f === k}">${l}</button>`).join('')}</div>
      ${list.length ? `<div class="hub">${list.map(row).join('')}</div>` : '<p class="muted">Nothing here yet.</p>'}</div>`, { rf: (k) => { view.f = k; renderReadingRoom(); } });
  }
  function renderReader(r) {
    if (!r) return go({ name: 'reading' });
    const i = READING.indexOf(r), prev = READING[i - 1], next = READING[i + 1];
    const back = { name: 'read', id: r.id };
    const showRo = !!view.ro, showEn = !!view.en;
    const st = SBY.get('L' + r.lesson);
    render(`<div class="station" style="--c:var(--line)"><button class="back" data-act="reading">${ICON.back} Reading room</button>
      <div class="row-between"><div><div class="eyebrow">Lesson ${r.lesson} · ${r.type === 'conversation' ? 'Conversation' : esc(r.form || 'Reading')}</div><h1 style="font-size:24px">${esc(r.titleJp || r.title)}</h1><div class="muted">${esc(r.title)}</div></div>
        ${st ? `<button class="btn sm" data-act="station" data-arg="${st.id}">Go to ${codeOf(st)}</button>` : ''}</div>
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
    const cell = (c, head) => {
      if (/wrong|incorrect|not this/i.test(head || '')) return `<s class="muted">${esc(c)}</s>`;
      return /[\u3040-\u30ff\u4e00-\u9fff]/.test(c) && !/[（＿]/.test(c) && speech.ok ? `<button class="cellsay" data-act="say" data-arg="${esc(c)}">${esc(c)}</button>` : esc(c);
    };
    render(`<div class="station"><button class="back" data-act="home">${ICON.back} Route map</button>
      <h1>ガイドブック · Guidebook</h1>
      <div class="chooser">${GUIDE.map((g) => `<button class="chip" data-act="guide" data-arg="${g.id}" aria-pressed="${g === page}">${esc(g.title)}</button>`).join('')}</div>
      <div><h2 style="font-size:22px">${esc(page.jp || '')} · ${esc(page.title)}</h2>${page.intro ? `<p class="muted" style="margin:6px 0 0">${esc(page.intro)}</p>` : ''}</div>
      ${page.sections.map((s) => `<article class="gpoint"><h3>${esc(s.h)}</h3>${s.note ? `<p>${esc(s.note)}</p>` : ''}
        ${s.rows ? `<div class="tblwrap"><table class="vocab">${s.headers ? `<thead><tr>${s.headers.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>` : ''}<tbody>${s.rows.map((r) => `<tr>${r.map((c, i) => `<td>${cell(c, s.headers && s.headers[i])}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : ''}
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
      if (q.kind === 'order') return `<div class="tiles answer" id="tans" aria-label="Your sentence"></div><div class="tiles" id="tbank">${shuffle(q.tiles.map((t, i) => [t, i])).map(([t, i]) => `<button class="tile" data-act="tile" data-arg="${i}">${esc(t)}</button>`).join('')}</div>
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
      const got = [...document.querySelectorAll('#tans .tile')].map((t) => t.textContent);
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
        <div class="row-between" style="justify-content:center"><button class="btn primary" data-act="again">${target && !won ? 'Try again' : 'Go again'}</button><button class="btn" data-act="quit">Back</button></div>
      </div>
      ${missed.length ? `<div class="stack"><div class="eyebrow">To review (${missed.length})</div>${missed.map((q) => `<div class="card"><div class="small muted">${esc(q.label)}</div><div>${q.after || ''}</div></div>`).join('')}</div>` : ''}
      </div>`, { quit: () => go(cfg.back), again: () => quizSession(cfg.questions && !cfg.keys ? { ...cfg, questions: cfg.questions.map((q) => (q.cat === 'num' ? numQ() : q)) } : cfg) });
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
      const front = enFirst ? `<div class="en-q">${esc(v.en)}</div>` : `<div class="glyph ${v.kana.length > 6 ? 'mid' : ''}">${jpHTML(v)}</div>`;
      const backSide = enFirst ? `<div class="glyph ${v.kana.length > 6 ? 'mid' : ''}">${jpHTML(v, 'kanji')}</div><div class="sub">${esc(v.ro)}${v.note ? ' · ' + esc(v.note) : ''}</div>` : `<div class="en-q">${esc(v.en)}</div><div class="sub">${esc(v.ro)}${v.kanji ? ' · ' + esc(v.kanji) : ''}${v.note ? ' · ' + esc(v.note) : ''}</div>`;
      const ex = flipped ? exampleFor(v) : null;
      render(`<div class="session" style="--c:${cfg.color || 'var(--line)'}">
        <div class="sess-head"><button class="back" data-act="quit">${ICON.back} Quit</button><div class="progress"><i style="width:${(done / total) * 100}%"></i></div><div class="combo">${done}/${total}</div></div>
        <div class="qcard flash" data-act="flip">
          <div class="prompt">${front}${flipped ? backSide : '<div class="sub">tap or press space to flip</div>'}${ex ? `<div class="sub" style="max-width:46ch">${esc(ex.jp)}<br>${esc(ex.en)}</div>` : ''}</div>
          <div style="text-align:center">${sayBtn(v.kana)}</div>
        </div>
        ${flipped ? `<div class="flash-btns">
          <button class="btn" data-act="g" data-arg="0">Again<small>1</small></button><button class="btn" data-act="g" data-arg="1">Hard<small>2</small></button>
          <button class="btn primary" data-act="g" data-arg="2">Good<small>3</small></button><button class="btn" data-act="g" data-arg="3">Easy<small>4</small></button></div>` : `<button class="btn primary block" data-act="flip">Show ${enFirst ? 'Japanese' : 'meaning'}</button>`}
      </div>`, {
        quit: () => go(cfg.back),
        flip: (a, el, e) => { if (e && e.target.closest('.say')) return; if (!flipped) { flipped = true; show(); if (enFirst && S.settings.audio) speech.say(v.kana); } },
        g: (q) => rate(+q),
      }, () => { if (!flipped && !enFirst && S.settings.audio) setTimeout(() => speech.say(v.kana), 120); });
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
        <div class="muted small">Stroke order data from <a href="https://kanjivg.tagaini.net" target="_blank" rel="noopener">KanjiVG</a> by Ulrich Apel, CC BY-SA 3.0.</div>`;
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
  applySkin();
  const hash = (location.hash || '').slice(1);
  go(SBY.has(hash) ? { name: 'station', id: hash } : { name: 'home' });
  window.addEventListener('hashchange', () => { const h = location.hash.slice(1); if (SBY.has(h)) go({ name: 'station', id: h }); });
  setTimeout(() => ML.connectRemote(() => { applySkin(); refresh(); }), 0);
  window.__minna = { ML, keyToQ, numQ, stationKeys, conjKey, go, quizSession, writeSession, VOCAB, KANJI, GRAMMAR, STATIONS };
})();
