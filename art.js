// Minna Line artwork: everything is drawn in SVG here, so the app has no image files.
window.ART = (() => {
  'use strict';
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const hash = (s) => { let h = 2166136261; for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
  const OUT = '#4a3a5e'; // soft plum outline: gentler than black, keeps the sticker look

  // Shared gradients and filters, injected once.
  const DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <radialGradient id="mBody" cx=".36" cy=".26" r=".92"><stop offset="0" stop-color="#fff"/><stop offset=".6" stop-color="#fff8fb"/><stop offset="1" stop-color="#ecd5e3"/></radialGradient>
    <linearGradient id="mEar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f3e2ec"/></linearGradient>
    <linearGradient id="mEarIn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffc3d4"/><stop offset="1" stop-color="#ff9ab7"/></linearGradient>
    <radialGradient id="mCheek"><stop offset="0" stop-color="#ff8fae" stop-opacity=".9"/><stop offset=".7" stop-color="#ff9fbb" stop-opacity=".45"/><stop offset="1" stop-color="#ffb3c7" stop-opacity="0"/></radialGradient>
    <radialGradient id="mEye" cx=".42" cy=".32" r=".75"><stop offset="0" stop-color="#6d5a92"/><stop offset=".55" stop-color="#3a2b52"/><stop offset="1" stop-color="#1f1630"/></radialGradient>
    <linearGradient id="mCap" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5c72b8"/><stop offset="1" stop-color="#34447e"/></linearGradient>
    <linearGradient id="mVisor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#34407a"/><stop offset="1" stop-color="#1c2550"/></linearGradient>
    <radialGradient id="mGold" cx=".38" cy=".32" r=".8"><stop offset="0" stop-color="#fff0b0"/><stop offset=".6" stop-color="#ffcb4d"/><stop offset="1" stop-color="#e09a18"/></radialGradient>
    <linearGradient id="mRed" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff7a86"/><stop offset="1" stop-color="#d63a4e"/></linearGradient>
    <linearGradient id="mStraw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a8"/><stop offset="1" stop-color="#eec25a"/></linearGradient>
    <radialGradient id="mPetal" cx=".5" cy=".8" r=".9"><stop offset="0" stop-color="#ff9fbd"/><stop offset="1" stop-color="#ffe0ea"/></radialGradient>
    <radialGradient id="glass" cx=".35" cy=".28" r=".95"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset=".45" stop-color="#dff3ff" stop-opacity=".55"/><stop offset="1" stop-color="#a9d8f3" stop-opacity=".55"/></radialGradient>
    <linearGradient id="trainBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".7" stop-color="#eef3fa"/><stop offset="1" stop-color="#c9d6e8"/></linearGradient>
    <filter id="stampInk" x="-4%" y="-4%" width="108%" height="108%">
      <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="3" result="n1"/>
      <feDisplacementMap in="SourceGraphic" in2="n1" scale="1.1" result="rough"/>
      <feTurbulence type="fractalNoise" baseFrequency=".32" numOctaves="3" seed="11" result="n2"/>
      <feColorMatrix in="n2" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -4.2 0 0 0 3.2" result="mask"/>
      <feComposite in="rough" in2="mask" operator="in"/>
    </filter>
    <path id="stTop" d="M13.5 60a46.5 46.5 0 0 1 93 0"/><path id="stBot" d="M8.5 60a51.5 51.5 0 0 0 103 0"/>
  </defs></svg>`;
  function install() { if (!document.getElementById('art-defs')) { const d = document.createElement('div'); d.id = 'art-defs'; d.innerHTML = DEFS; document.body.prepend(d); } }

  // ---------------------------------------------------------------- Mochi
  function mascot(mood = 'calm', o = {}) {
    const hat = o.hat || 'cap', acc = o.acc || 'none';
    const st = (w = 3) => `stroke="${OUT}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
    const eye = (x, r) => `<ellipse cx="${x}" cy="66" rx="${r}" ry="${r * 1.14}" fill="url(#mEye)"/><circle cx="${x + r * 0.34}" cy="${66 - r * 0.46}" r="${r * 0.36}" fill="#fff"/><circle cx="${x - r * 0.36}" cy="${66 + r * 0.42}" r="${r * 0.17}" fill="#fff" opacity=".8"/>`;
    const eyes = {
      calm: eye(46, 5.6) + eye(74, 5.6),
      wow: eye(46, 7) + eye(74, 7),
      happy: `<path d="M39 68q7-9 14 0M67 68q7-9 14 0" fill="none" ${st(3.6)}/>`,
      cheer: `<path d="M40 60l11 6.5-11 6.5M80 60l-11 6.5 11 6.5" fill="none" ${st(3.6)}/>`,
      sad: `<path d="M39 66q7 6 14 0M67 66q7 6 14 0" fill="none" ${st(3.6)}/><path d="M82 72q-4 6 0 9q4-3 0-9z" fill="#9fdcff" ${st(1.3)}/>`,
    }[mood] || '';
    const mouth = mood === 'wow' ? `<ellipse cx="60" cy="80" rx="3.8" ry="4.8" fill="#e85d7e" ${st(2.2)}/>`
      : mood === 'cheer' || mood === 'happy' ? `<path d="M52 75q8 13 16 0z" fill="#e85d7e" ${st(2.4)}/><path d="M56 81q4 3 8 0q-4-2-8 0z" fill="#ff9db0"/>`
        : `<path d="M53 76q3.5 4.6 7 0q3.5 4.6 7 0" fill="none" ${st(2.8)}/>`;
    const nose = '<path d="M58.2 72.4h3.6l-1.8 2.2z" fill="#ff8fae"/>';
    const HATS = {
      cap: `<path d="M37 37c2-19 44-19 46 0z" fill="url(#mCap)" ${st(2.8)}/><path d="M44 29c8-6 20-7 28-3" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="3" stroke-linecap="round"/><rect x="36" y="33" width="48" height="3.4" fill="#ffcb4d"/><path d="M31 37h58a4.2 4.2 0 0 1 0 8.4H31a4.2 4.2 0 0 1 0-8.4z" fill="url(#mVisor)" ${st(2.8)}/><path d="M36 39.5h34" stroke="#fff" stroke-opacity=".35" stroke-width="1.8" stroke-linecap="round"/><circle cx="60" cy="27" r="5.2" fill="url(#mGold)" ${st(2)}/><path d="M57.4 27h5.2M60 24.4v5.2" stroke="#a86b00" stroke-width="1.3" stroke-linecap="round"/>`,
      sakura: `<g transform="translate(93 40)">${[0, 72, 144, 216, 288].map((a) => `<path d="M0 0c-5-4-7-10-3-14l3 2 3-2c4 4 2 10-3 14z" transform="rotate(${a})" fill="url(#mPetal)" ${st(1.4)}/>`).join('')}<circle r="3" fill="#ffd25c" ${st(1.2)}/></g>`,
      hachimaki: `<path d="M12 55q48-18 96 0l-1 11q-47-17-94 0z" fill="#fff" ${st(2.4)}/><path d="M14 58q46-14 92 0" fill="none" stroke="#e8e0ee" stroke-width="2"/><circle cx="60" cy="50.6" r="6" fill="url(#mRed)"/><path d="M106 58l15-8-3 13zM106 60l13 7-9 5z" fill="#fff" ${st(2)}/>`,
      straw: `<ellipse cx="60" cy="36" rx="50" ry="11" fill="url(#mStraw)" ${st(2.8)}/><path d="M36 35c0-22 48-22 48 0z" fill="url(#mStraw)" ${st(2.8)}/><path d="M37 29q23 8 46 0v6q-23 7-46 0z" fill="url(#mRed)"/><path d="M20 38q40 8 80 0M44 18q16-5 32 0" fill="none" stroke="#cf9a3a" stroke-opacity=".5" stroke-width="1.5"/>`,
      kitsune: `<g transform="rotate(-18 28 36)"><path d="M11 45l3-24 10 10 10-10 3 24q-13 12-26 0z" fill="#fff" ${st(2.4)}/><path d="M15 25l4 5M33 25l-4 5" stroke="#e8475a" stroke-width="2.6" stroke-linecap="round"/><path d="M17 40q2.5-3 6 0M31 40q-2.5-3-6 0" fill="none" stroke="#3a2b52" stroke-width="2" stroke-linecap="round"/><path d="M24 47v2.6M18 33q6-3 12 0" fill="none" stroke="#e8475a" stroke-width="2.2" stroke-linecap="round"/></g>`,
      crown: `<path d="M37 37l3-22 10.5 10.5L60 10l9.5 15.5L80 15l3 22z" fill="url(#mGold)" ${st(2.8)}/><path d="M40 33h40" stroke="#c98a12" stroke-width="2"/><circle cx="60" cy="27" r="3.4" fill="#ff5f86" ${st(1.2)}/><circle cx="46" cy="29" r="2.6" fill="#6cc7f5" ${st(1)}/><circle cx="74" cy="29" r="2.6" fill="#7fd173" ${st(1)}/>`,
    };
    const ACCS = {
      bell: `<path d="M41 98q19 10 38 0" stroke="url(#mRed)" stroke-width="5.5" fill="none" stroke-linecap="round"/><circle cx="60" cy="106.5" r="7.6" fill="url(#mGold)" ${st(2.4)}/><path d="M55.5 108.5h9" ${st(1.8)}/><circle cx="57.6" cy="103.6" r="1.7" fill="#fff" opacity=".85"/>`,
      bow: `<path d="M60 102l-16-9v18z" fill="#ff8fb1" ${st(2.4)}/><path d="M60 102l16-9v18z" fill="#ff8fb1" ${st(2.4)}/><path d="M48 97l8 4M72 97l-8 4" stroke="#fff" stroke-opacity=".6" stroke-width="1.6" stroke-linecap="round"/><circle cx="60" cy="102" r="4.6" fill="#ff5f8f" ${st(2.2)}/>`,
      scarf: `<path d="M26 94q34 16 68 0l2 11q-36 16-72 0z" fill="url(#mRed)" ${st(2.4)}/><path d="M78 104l10 16-12 1-5-14z" fill="url(#mRed)" ${st(2.2)}/><path d="M30 99q30 12 60 0" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="2"/>`,
    };
    const face = o.face ? '' : `<ellipse cx="60" cy="121" rx="38" ry="4.6" fill="${OUT}" opacity=".13"/><path d="M104 96q20-2 14-20-3-8-9-5-4 3 0 8 3 7-11 9z" fill="url(#mEar)" ${st(2.6)}/>`;
    return `<svg class="mascot ${esc(o.cls || '')}" viewBox="-6 -6 132 132" role="img" aria-label="Mochi the cat conductor">
      ${face}
      <path d="M21 54 25 15c0-3 3-4 5-2l21 20z" fill="url(#mEar)" ${st()}/><path d="M29 44l2-20 13 11z" fill="url(#mEarIn)"/>
      <path d="M99 54 95 15c0-3-3-4-5-2L69 33z" fill="url(#mEar)" ${st()}/><path d="M91 44l-2-20-13 11z" fill="url(#mEarIn)"/>
      <path d="M60 26c30 0 50 22 50 50 0 24-22 38-50 38S10 100 10 76c0-28 20-50 50-50z" fill="url(#mBody)" ${st()}/>
      <path d="M26 58c3-10 11-18 22-21" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".95"/>
      <path d="M7 69l13 2.4M7 80l13-2.4M113 69l-13 2.4M113 80l-13-2.4" stroke="${OUT}" stroke-width="1.9" stroke-linecap="round" opacity=".5"/>
      <ellipse cx="33" cy="80" rx="11" ry="7" fill="url(#mCheek)"/><ellipse cx="87" cy="80" rx="11" ry="7" fill="url(#mCheek)"/>
      ${eyes}${nose}${mouth}
      <ellipse cx="43" cy="112" rx="8.6" ry="5.4" fill="url(#mEar)" ${st(2.4)}/><ellipse cx="77" cy="112" rx="8.6" ry="5.4" fill="url(#mEar)" ${st(2.4)}/>
      <path d="M40 111v2.4M43 110.6v3M46 111v2.4M74 111v2.4M77 110.6v3M80 111v2.4" stroke="${OUT}" stroke-width="1.2" stroke-linecap="round" opacity=".45"/>
      ${ACCS[acc] || ''}${HATS[hat] || ''}
    </svg>`;
  }

  // ---------------------------------------------------------------- yokai
  const YOKAI = [
    { id: 'obake', jp: 'おばけ', name: 'Obake', a: '#fbf8ff', b: '#cfc2f2' },
    { id: 'oni', jp: 'おに', name: 'Oni', a: '#ffb3a8', b: '#ee6a6a' },
    { id: 'kappa', jp: 'かっぱ', name: 'Kappa', a: '#bdeeb0', b: '#6fc27c' },
    { id: 'tanuki', jp: 'たぬき', name: 'Tanuki', a: '#ecc9a2', b: '#bd8b5e' },
    { id: 'kitsune', jp: 'きつね', name: 'Kitsune', a: '#fff1dd', b: '#f6b679' },
    { id: 'karakasa', jp: 'からかさ', name: 'Karakasa', a: '#d4c6ff', b: '#8f7be0' },
  ];
  function yokai(y, mood = 'idle', cls = '') {
    const ink = '#3a2b52', st = (w = 3) => `stroke="${ink}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
    const G = `url(#yk-${y.id})`;
    const ey = y.id === 'karakasa' ? 42 : 60;
    let back = '', body, extra = '';
    if (y.id === 'obake') body = `<path d="M60 12c28 0 43 21 43 48v47l-11-9-10 9-11-9-11 9-11-9-10 9-11-9V60c0-27 15-48 43-48z" fill="${G}" ${st()}/><path d="M32 40c4-11 12-17 22-19" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>`;
    else if (y.id === 'karakasa') {
      body = `<path d="M60 7c28 12 44 36 48 62-16-10-32-10-48-3-16-7-32-7-48 3 4-26 20-50 48-62z" fill="${G}" ${st()}/><path d="M38 64Q44 30 60 7M82 64Q76 30 60 7" stroke="${ink}" stroke-width="1.8" opacity=".35" fill="none"/><path d="M60 66v32" ${st(3.4)}/><path d="M60 98q-10 0-10 9h20q0-9-10-9z" fill="#ffd25c" ${st(2.4)}/>`;
    } else body = `<path d="M60 20c28 0 47 19 47 46s-20 42-47 42-47-15-47-42 19-46 47-46z" fill="${G}" ${st()}/><path d="M26 54c3-11 12-20 24-23" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="5" stroke-linecap="round"/>`;
    if (y.id === 'oni') extra = `<path d="M38 31 30 7l19 16zM82 31l8-24-19 16z" fill="#ffe27a" ${st(2.6)}/><path d="M38 30q22-13 44 0" fill="none" stroke="#3a2b52" stroke-width="6" stroke-linecap="round"/>`;
    if (y.id === 'kappa') extra = `<path d="M34 30l-5-10 10 4 2-10 7 8 5-10 7 9 7-9 5 10 7-8 2 10 10-4-5 10" fill="#4f9f5c" ${st(2.2)}/><ellipse cx="60" cy="26" rx="21" ry="7.4" fill="#fff8c9" ${st(2.6)}/><ellipse cx="55" cy="24.6" rx="8" ry="2" fill="#fff" opacity=".9"/>`;
    if (y.id === 'tanuki') {
      back = `<circle cx="30" cy="31" r="12" fill="${G}" ${st()}/><circle cx="90" cy="31" r="12" fill="${G}" ${st()}/><circle cx="30" cy="31" r="5.6" fill="#7a5a44"/><circle cx="90" cy="31" r="5.6" fill="#7a5a44"/>`;
      extra = `<path d="M28 58q13-10 25 2-7 14-25 4zM92 58q-13-10-25 2 7 14 25 4z" fill="#6b4c3b" opacity=".88"/><path d="M56 22q9-14 19-5-9 8-19 5z" fill="#8fd17c" ${st(2.2)}/><path d="M60 21q6-5 12-5" fill="none" stroke="#4f9f5c" stroke-width="1.4"/>`;
    }
    if (y.id === 'kitsune') {
      back = `<path d="M25 46 29 4l26 24zM95 46 91 4 65 28z" fill="${G}" ${st()}/><path d="M29 13l2 15 10-5zM91 13l-2 15-10-5z" fill="#ff8a5c"/>`;
      extra = `<path d="M32 77l12 2.4M88 77l-12 2.4M56 34q4-7 8 0" stroke="#ec4b5d" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M34 84q26 16 52 0-26 28-52 0z" fill="#fff" opacity=".7"/>`;
    }
    const glossy = (x, r) => `<circle cx="${x}" cy="${ey}" r="${r}" fill="url(#mEye)"/><circle cx="${x + r * 0.36}" cy="${ey - r * 0.42}" r="${r * 0.36}" fill="#fff"/>`;
    const one = y.id === 'karakasa';
    const eyes = {
      idle: one ? `<circle cx="60" cy="${ey}" r="11" fill="#fff" ${st(2.6)}/>${glossy(61, 6)}` : glossy(46, 6) + glossy(74, 6),
      hit: one ? `<path d="M53 ${ey - 7}l14 14M67 ${ey - 7}l-14 14" ${st(3.4)}/>` : `<path d="M41 ${ey - 5}l11 10M52 ${ey - 5}l-11 10M68 ${ey - 5}l11 10M79 ${ey - 5}l-11 10" ${st(3.2)}/>`,
      laugh: one ? `<path d="M50 ${ey + 3}q10-13 20 0" fill="none" ${st(3.4)}/>` : `<path d="M40 ${ey + 3}q6.5-9 13 0M67 ${ey + 3}q6.5-9 13 0" fill="none" ${st(3.4)}/>`,
      gone: one ? `<path d="M50 ${ey}q5-6 10 0t10 0" fill="none" ${st(2.6)}/>` : `<path d="M41 ${ey}q2.5-5 5.5 0t5.5 0M68 ${ey}q2.5-5 5.5 0t5.5 0" fill="none" ${st(2.6)}/>`,
    }[mood];
    const my = one ? 57 : 79;
    const mouth = mood === 'laugh' ? `<path d="M51 ${my}q9 14 18 0z" fill="#e85d7e" ${st(2.4)}/>`
      : mood === 'hit' || mood === 'gone' ? `<path d="M53 ${my + 3}q7-6 14 0" fill="none" ${st(2.6)}/>`
        : y.id === 'oni' ? `<path d="M51 ${my}q9 6 18 0" fill="none" ${st(2.6)}/><path d="M55 ${my + 1.4}l2.4 6 2.6-5zM65 ${my + 1.4}l-2.4 6-2.6-5z" fill="#fff" ${st(1.4)}/>`
          : y.id === 'obake' || one ? `<path d="M54 ${my}q6 4 12 0" fill="none" ${st(2.6)}/><path d="M57 ${my + 2}q3 12 7 0" fill="#ff8fa3" ${st(2)}/>`
            : y.id === 'kappa' ? `<path d="M48 ${my - 2}q12 11 24 0q-12-5-24 0z" fill="#ffc35c" ${st(2.4)}/>`
              : `<path d="M54 ${my}q6 5 12 0" fill="none" ${st(2.6)}/>`;
    const blush = one ? '' : `<ellipse cx="35" cy="${ey + 12}" rx="8" ry="4.6" fill="url(#mCheek)"/><ellipse cx="85" cy="${ey + 12}" rx="8" ry="4.6" fill="url(#mCheek)"/>`;
    const wisps = cls.includes('nowisp') ? '' : `<g class="wisp"><path d="M8 30q-6 8 0 12 7-3 3-9-1 3-3-3z" fill="#8fd8ff" opacity=".85"/><path d="M112 22q-6 8 0 12 7-3 3-9-1 3-3-3z" fill="#b6a6ff" opacity=".85"/></g>`;
    return `<svg class="yokai ${esc(cls)}" viewBox="0 0 120 120" role="img" aria-label="${esc(y.name)}"><defs><radialGradient id="yk-${y.id}" cx=".36" cy=".24" r="1"><stop offset="0" stop-color="${y.a}"/><stop offset="1" stop-color="${y.b}"/></radialGradient></defs>
      <ellipse cx="60" cy="114" rx="36" ry="4.4" fill="${ink}" opacity=".14"/>${back}${body}${extra}${blush}${eyes}${mouth}${wisps}</svg>`;
  }

  // ---------------------------------------------------------------- station stamps
  // Real eki stamps show a local landmark, so each station gets one, chosen by season.
  const M = {
    fuji: `<path d="M22 66 48 33c5-6 19-6 24 0l26 33z" fill="none"/><path d="M48 33l6 7 6-6 6 6 6-7" fill="none"/><circle cx="92" cy="32" r="6" fill="currentColor" stroke="none"/><path d="M16 66h88"/>`,
    torii: `<path d="M28 34q32 6 64 0l-2 6q-30 5-60 0zM36 40v26M84 40v26M32 48h56M58 40v8"/><path d="M22 66h76"/>`,
    pagoda: `<path d="M60 26v6M46 40q14-8 28 0zM42 50q18-9 36 0zM38 61q22-10 44 0zM50 40v6M70 40v6M47 50v7M73 50v7M44 61v6M76 61v6M30 67h60"/>`,
    train: `<path d="M34 62c0-14 10-28 26-28s26 14 26 28zM42 58h36M38 66h44M46 44q14-6 28 0v8q-14 4-28 0z"/><circle cx="46" cy="60" r="2" fill="currentColor" stroke="none"/><circle cx="74" cy="60" r="2" fill="currentColor" stroke="none"/>`,
    sakura: `${[0, 72, 144, 216, 288].map((a) => `<path d="M60 49c-7-5-9-14-4-19l4 3 4-3c5 5 3 14-4 19z" transform="rotate(${a} 60 49)"/>`).join('')}<circle cx="60" cy="49" r="3" fill="currentColor" stroke="none"/>`,
    lantern: `<path d="M52 30h16M52 66h16M60 26v4M60 66v3M46 42q-4 6 0 12q14 6 28 0q4-6 0-12q-14-6-28 0z"/><path d="M45 48h30M50 34q10-3 20 0M50 62q10 3 20 0"/>`,
    castle: `<path d="M56 26h8l2 6H54zM46 42q14-10 28 0zM50 42v8M70 50v-8M42 58q18-12 36 0zM46 58v9h28v-9M56 67v-6h8v6M30 67h60"/>`,
    wave: `<path d="M20 64q10-34 40-32 14 2 16 12-8-6-16-2 12 2 14 14-6-6-12-5 6 6 4 13zM60 64q14-6 40 0M16 68h88"/>`,
    fan: `<path d="M60 66 24 44q36-30 72 0zM60 66 42 34M60 66V28M60 66l18-38M60 66l10 2"/>`,
    fireworks: `<path d="${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6, c = Math.cos(a), s = Math.sin(a); return `M${60 + 7 * c} ${46 + 7 * s}L${60 + 20 * c} ${46 + 20 * s}`; }).join('')}"/><circle cx="60" cy="46" r="2.4" fill="currentColor" stroke="none"/><path d="M22 66q38-10 76 0"/>`,
    goldfish: `<path d="M30 48q18-16 40-2 6 4 8 4 8-8 16-6-5 8 0 16-8 2-16-6-2 0-8 4-22 14-40-2z"/><circle cx="42" cy="46" r="2" fill="currentColor" stroke="none"/><path d="M60 40q4 8 0 16"/>`,
    sun: `<circle cx="60" cy="42" r="11"/><path d="M60 24v-4M60 64v-4M42 42h-5M83 42h-5M47 29l-3-3M76 58l-3-3M73 29l3-3M44 58l3-3M18 66q21-8 42 0t42 0"/>`,
    maple: `<path d="M60 26l5 10 8-3-2 9 9 2-6 7 3 5-10-1 1 9-8-4-8 4 1-9-10 1 3-5-6-7 9-2-2-9 8 3zM60 66v-14"/>`,
    moon: `<path d="M74 28a18 18 0 1 0 12 28 16 16 0 0 1-12-28zM28 66q2-14 8-22M38 66q0-10 4-16M48 66q-2-8 0-12M18 67h84"/>`,
    temple: `<path d="M22 44q38-22 76 0zM34 44v22M86 44v22M46 44v22M74 44v22M60 44v22M26 66h68M50 30q10-8 20 0"/>`,
    snow: `<path d="M60 26v44M41 37l38 22M41 59l38-22M54 29l6 5 6-5M54 67l6-5 6 5M42 45l7-1-2-7M78 51l-7 1 2 7M42 51l7 1-2 7M78 45l-7-1 2-7"/>`,
    persimmon: `<circle cx="60" cy="50" r="16"/><path d="M48 37q12 6 24 0-6-2-8-6-4 3-8 0-2 4-8 6zM60 31v-5M50 46q2-4 6-5"/>`,
  };
  const MOTIFS = { M: ['sakura', 'fuji', 'torii', 'pagoda', 'train', 'lantern', 'castle'], X: ['train', 'fuji', 'castle', 'wave'], S: ['sun', 'wave', 'fan', 'fireworks', 'goldfish', 'lantern'], SX: ['fireworks', 'train'], K: ['maple', 'moon', 'temple', 'persimmon', 'pagoda', 'fuji'], KX: ['maple', 'train'], W: ['snow', 'moon', 'temple', 'fuji', 'lantern', 'pagoda'], WX: ['snow', 'train'], Y: ['moon', 'lantern', 'temple', 'pagoda', 'castle', 'fuji'], YX: ['moon', 'train'] };
  const INK = { M: '#c03f7a', X: '#2a7fb8', S: '#16907f', SX: '#16907f', K: '#c2531f', KX: '#c2531f', W: '#3b6fd1', WX: '#3b6fd1', Y: '#6b4fc4', YX: '#6b4fc4' };
  const LABEL = { M: 'MINNA LINE', X: 'N5 EXPRESS', S: 'SUMMER LINE', SX: 'N4 TERMINAL', K: 'AUTUMN LINE', KX: 'N3 TERMINAL', W: 'WINTER LINE', WX: 'N2 TERMINAL', Y: 'STARLIGHT LINE', YX: 'N1 TERMINAL' };
  function stamp(st, code, date) {
    const list = MOTIFS[st.line] || MOTIFS.M, h = hash(st.id);
    const motif = M[list[h % list.length]], frame = h % 3;
    const jp = st.jp.length > 8 ? st.jp.slice(0, 8) : st.jp;
    const ring = frame === 1 ? `<circle cx="60" cy="60" r="55.5" fill="none" stroke="currentColor" stroke-width="5" stroke-dasharray=".1 8.6" stroke-linecap="round"/>`
      : frame === 2 ? `<circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="60" r="52.6" fill="none" stroke="currentColor" stroke-width="1"/>`
        : `<circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" stroke-width="3.6"/>`;
    return `<svg class="estamp" viewBox="0 0 120 120" role="img" aria-label="Stamp: ${esc(st.name)}" style="color:${INK[st.line] || INK.M}"><g filter="url(#stampInk)">
      ${ring}<circle cx="60" cy="60" r="41.5" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <text style="fill:currentColor;font:8.6px var(--f-pop);letter-spacing:1.4px" text-anchor="middle"><textPath href="#stTop" startOffset="50%">${LABEL[st.line] || ''}</textPath></text>
      ${date ? `<text style="fill:currentColor;font:7.4px var(--f-pop);letter-spacing:1px" text-anchor="middle"><textPath href="#stBot" startOffset="50%">${esc(date)}</textPath></text>` : ''}
      <g transform="translate(20.5 8) scale(.66)" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round">${motif}</g>
      <text x="60" y="74" text-anchor="middle" style="fill:currentColor;font:${code.length > 2 ? 15 : 18}px var(--f-pop)">${esc(code)}</text>
      <text x="60" y="88" text-anchor="middle" style="fill:currentColor;font:700 8.6px var(--f-ui)">${esc(jp)}</text>
    </g></svg>`;
  }

  // ---------------------------------------------------------------- landscapes
  const blob = (x, y, r, c) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
  function tree(x, y, s, cols) {
    const [a, b, c] = cols;
    return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-5 0q2-22 0-34h10q-2 12 3 34z" fill="#8a6152"/><path d="M0-30q-10-8-16-8M2-26q10-8 16-10" stroke="#8a6152" stroke-width="4" fill="none" stroke-linecap="round"/>
      ${blob(-20, -40, 19, a)}${blob(20, -42, 20, a)}${blob(0, -56, 24, b)}${blob(-26, -55, 15, b)}${blob(26, -58, 15, b)}${blob(-8, -40, 15, c)}${blob(10, -66, 12, c)}</g>`;
  }
  const cloud = (x, y, s, o = 1) => `<g class="cloud" transform="translate(${x} ${y}) scale(${s})" opacity="${o}"><path d="M0 22a14 14 0 0 1 4-27 20 20 0 0 1 37-7 16 16 0 0 1 25 12 12 12 0 0 1 2 22z" fill="#fff"/></g>`;
  function trainGroup(body, stripe) {
    const car = (x, nose) => `<g transform="translate(${x} 0)">${nose ? `<path d="M0 26V4h46q30 4 40 22z" fill="url(#trainBody)" stroke="${OUT}" stroke-width="2"/><path d="M50 8q16 2 26 12H50z" fill="#3e5a86"/>` : `<rect y="4" width="84" height="22" rx="3" fill="url(#trainBody)" stroke="${OUT}" stroke-width="2"/>`}
      ${[8, 26, 44].map((w) => (nose && w > 40 ? '' : `<rect x="${w}" y="9" width="12" height="8" rx="2" fill="#3e5a86"/>`)).join('')}<path d="M0 20h${nose ? 76 : 84}" stroke="${stripe}" stroke-width="3.4"/></g>`;
    return `<g class="sc-train">${car(0)}${car(86)}${car(172, true)}</g>`;
  }
  function scene(season) {
    const P = {
      spring: { sky: ['#bfe6ff', '#ffe6ef'], far: '#c9c6ee', mid: '#b9e39b', near: '#8fd07c', sun: '#fff3b0', stripe: '#ff8fb1' },
      summer: { sky: ['#7fd3ff', '#d9f6ff'], far: '#9fc8e8', mid: '#7fd8b4', near: '#4fc3a0', sun: '#ffe066', stripe: '#29b6a8' },
      winter: { sky: ['#cfe3ff', '#f4f8ff'], far: '#c3cfe8', mid: '#eef4fb', near: '#ffffff', sun: '#fffdf0', stripe: '#5b8def' },
      night: { sky: ['#2a2a6e', '#7b5ea8'], far: '#4b4486', mid: '#3e3a72', near: '#2f2c5c', sun: '#fff6c8', stripe: '#a78bfa' },
      autumn: { sky: ['#ffd9a8', '#ffe9d6'], far: '#d2a9c2', mid: '#f0b56a', near: '#d98a4a', sun: '#fff0c0', stripe: '#e8703a' },
    }[season] || {};
    const id = 'sky' + season;
    const fujiCap = season === 'summer' ? 'M408 92l-12 14 12-4 10 8 8-8 10 6-4-10-14-18z' : 'M372 134l36-44q14-14 28 0l40 44-18-8-14 12-14-14-14 12-14-12z';
    let fore = '';
    if (season === 'spring') {
      const c = ['#ffb7cc', '#ffd0dd', '#ffe4ec'];
      fore = tree(640, 214, 1.15, c) + tree(790, 222, 1.4, c) + tree(90, 216, 0.9, c) + `<g class="sc-petals">${[[120, 60], [300, 90], [520, 50], [700, 80], [840, 40]].map(([x, y]) => `<path d="M${x} ${y}q6-8 12 0q-6 6-12 0z" fill="#ffb7cc"/>`).join('')}</g>`;
    } else if (season === 'summer') {
      fore = `<path d="M0 214q225-16 450 0t450 0v46H0z" fill="#58c7e8"/><path d="M60 228q30-6 60 0M300 236q40-8 80 0M600 226q30-6 60 0M780 238q40-8 80 0" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".8"/>` +
        [660, 720, 800].map((x, i) => `<g transform="translate(${x} ${208 + i * 6}) scale(${1 + i * 0.12})"><path d="M0 0q-2-16 0-30" stroke="#4f9f5c" stroke-width="4" fill="none"/>${Array.from({ length: 10 }, (_, k) => `<ellipse cx="0" cy="-41" rx="3.6" ry="9" transform="rotate(${k * 36} 0 -32)" fill="#ffcf33"/>`).join('')}<circle cy="-32" r="6" fill="#8a5a2c"/></g>`).join('') +
        `<g class="sc-fire" opacity=".0"></g>`;
    } else if (season === 'night') {
      fore = `<g fill="#fff">${[[40, 30], [120, 70], [260, 24], [330, 90], [470, 40], [560, 20], [640, 75], [760, 34], [860, 60], [700, 110]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i % 3 ? 1.6 : 2.6}"/>`).join('')}</g>` + [620, 700, 780, 860].map((x, i) => `<g transform="translate(${x} ${200 - (i % 2) * 8})"><path d="M0 -26v10" stroke="#c9a998" stroke-width="1.5"/><ellipse cy="-8" rx="9" ry="11" fill="#ff7a5c"/><ellipse cy="-8" rx="16" ry="18" fill="#ffb36b" opacity=".25"/></g>`).join('');
    } else if (season === 'winter') {
      const c = ['#7fa98a', '#ffffff', '#e8f0fa'];
      fore = tree(650, 216, 1.15, c) + tree(800, 224, 1.35, c) + tree(90, 218, 0.9, c) + `<g class="sc-petals" fill="#fff">${[[90, 40], [220, 90], [380, 30], [520, 80], [700, 50], [840, 100], [300, 140], [620, 120]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.2"/>`).join('')}</g>`;
    } else {
      const c = ['#e8703a', '#f5a04a', '#ffc84d'];
      fore = tree(650, 216, 1.15, c) + tree(800, 224, 1.4, ['#d9483b', '#ee7a3c', '#ffb347']) + tree(80, 218, 0.95, ['#d9483b', '#f5a04a', '#ffc84d']) +
        `<g fill="none" stroke="#c9a15a" stroke-width="2.4" stroke-linecap="round">${[200, 220, 240, 470, 490].map((x, i) => `<path d="M${x} 232q${4 - i} -24 ${12 - i * 2} -40"/>`).join('')}</g>`;
    }
    const sunX = season === 'autumn' ? 150 : 170;
    return `<svg class="scene ${season}" viewBox="0 0 900 260" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${P.sky[0]}"/><stop offset="1" stop-color="${P.sky[1]}"/></linearGradient></defs>
      <rect width="900" height="260" fill="url(#${id})"/>
      <circle cx="${sunX}" cy="62" r="${season === 'autumn' ? 38 : 30}" fill="${P.sun}"/><circle cx="${sunX}" cy="62" r="${season === 'autumn' ? 54 : 46}" fill="${P.sun}" opacity=".35"/>
      ${cloud(250, 40, 0.8, 0.9)}${cloud(610, 26, 1.1, 0.95)}${cloud(40, 110, 0.55, 0.7)}
      <path d="M210 214 372 134q36-46 72 0l190 80z" fill="${P.far}"/><path d="${fujiCap}" fill="#fff"/>
      <path d="M0 204q120-52 260-26t260 4 380-20v98H0z" fill="${P.mid}"/>
      <path d="M0 226q160-32 340-16t300-8 260 14v44H0z" fill="${P.near}"/>
      <g fill="none" stroke="#b08a7a" stroke-width="3"><path d="M0 170h900" stroke-width="5"/>${Array.from({ length: 13 }, (_, i) => `<path d="M${i * 75} 170v20a30 30 0 0 0 0 0"/>`).join('')}</g>
      ${Array.from({ length: 13 }, (_, i) => `<path d="M${i * 75 - 2} 172h6v56h-6z" fill="#c9a998"/>`).join('')}
      <g transform="translate(0 142)">${trainGroup('', P.stripe)}</g>
      ${fore}
      <rect class="sc-veil" width="900" height="260" fill="#1a1440"/>
      <g class="sc-stars" fill="#fff">${[[60, 30], [200, 20], [330, 50], [470, 22], [560, 60], [690, 30], [820, 56], [880, 18]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.8"/>`).join('')}</g>
    </svg>`;
  }

  // ---------------------------------------------------------------- odds and ends
  const seasonIcon = (s) => ({
    spring: `<svg viewBox="-16 -16 32 32" aria-hidden="true">${[0, 72, 144, 216, 288].map((a) => `<path d="M0 0c-6-4-8-11-3-14l3 2 3-2c5 3 3 10-3 14z" transform="rotate(${a})" fill="#ff9fbd" stroke="${OUT}" stroke-width=".9"/>`).join('')}<circle r="2.4" fill="#ffd25c"/></svg>`,
    summer: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="22" cy="11" r="6" fill="#ffd25c" stroke="${OUT}" stroke-width=".9"/><path d="M2 22q6-14 15-9 3 2 3 5-3-2-6-1 5 1 6 6-3-2-5-1 3 2 2 5H2z" fill="#4fc3b0" stroke="${OUT}" stroke-width=".9" stroke-linejoin="round"/></svg>`,
    autumn: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 2l3 7 5-2-1 6 6 1-4 5 2 3-7-1 1 6-5-3-5 3 1-6-7 1 2-3-4-5 6-1-1-6 5 2z" fill="#f0905a" stroke="${OUT}" stroke-width=".9" stroke-linejoin="round"/><path d="M16 30V14" stroke="${OUT}" stroke-width="1"/></svg>`,
    night: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M20 4a12 12 0 1 0 8 19 10 10 0 0 1-8-19z" fill="#a78bfa" stroke="#4a3a5e" stroke-width=".9"/><circle cx="8" cy="7" r="1.6" fill="#ffd25c"/><circle cx="13" cy="13" r="1" fill="#ffd25c"/></svg>`,
    winter: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3v26M5 9.5l22 13M5 22.5l22-13M12 5l4 3 4-3M12 27l4-3 4 3" stroke="#6f9be8" stroke-width="2.6" stroke-linecap="round" fill="none"/></svg>`,
  }[s] || '');
  const machine = () => `<svg viewBox="0 0 200 240" aria-hidden="true">
    <ellipse cx="100" cy="232" rx="74" ry="6" fill="${OUT}" opacity=".15"/>
    <rect x="42" y="204" width="116" height="26" rx="10" fill="#e8688f" stroke="${OUT}" stroke-width="3"/>
    <rect x="30" y="112" width="140" height="100" rx="20" fill="url(#mRed)" stroke="${OUT}" stroke-width="3.2"/>
    <path d="M42 124h40" stroke="#fff" stroke-opacity=".4" stroke-width="5" stroke-linecap="round"/>
    <circle cx="100" cy="72" r="65" fill="#fff" stroke="${OUT}" stroke-width="3.2"/>
    ${[[70, 72, '#ff8fb1'], [100, 48, '#ffc845'], [130, 74, '#8fcf7a'], [86, 104, '#7cc7f0'], [118, 106, '#a99cf0'], [58, 102, '#ff9a6b'], [100, 82, '#fff']].map(([x, y, c]) => `<g><circle cx="${x}" cy="${y}" r="14" fill="${c}" stroke="${OUT}" stroke-width="2"/><path d="M${x - 14} ${y}a14 14 0 0 0 28 0z" fill="#fff" opacity=".5"/><path d="M${x - 14} ${y}h28" stroke="${OUT}" stroke-width="1.6"/></g>`).join('')}
    <circle cx="100" cy="72" r="63" fill="url(#glass)"/><path d="M60 40q18-20 46-16" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".9"/>
    <circle cx="100" cy="150" r="21" fill="#fff" stroke="${OUT}" stroke-width="3"/><rect x="95" y="132" width="10" height="36" rx="5" fill="url(#mGold)" stroke="${OUT}" stroke-width="2.2"/>
    <rect x="62" y="182" width="48" height="22" rx="9" fill="#5a3048" stroke="${OUT}" stroke-width="2.6"/>
    <text x="146" y="134" text-anchor="middle" style="fill:#fff;font:11px var(--f-pop)">ガチャ</text></svg>`;
  return { install, mascot, yokai, YOKAI, stamp, scene, machine, seasonIcon, hash };
})();
