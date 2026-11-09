// Minna Line artwork. Everything is drawn in SVG here, so the app ships no image files.
//
// Art direction: Shōwa-era print. Think matchbox labels, railway posters and woodblock landscapes:
//   · one fixed ink set (sumi black, washi cream, vermilion, indigo, verdigris, mustard, peach)
//   · flat colour blocks under a bold black keyline, never soft gradients or glossy highlights
//   · shading by halftone dots and hatching, the way a press would do it
//   · a cream "sticker" edge so figures sit cleanly on any background
//   · vertical title cartouches and red hanko seals on the landscapes
// Every drawing in the app follows these rules. Change the ink set here and the whole app follows.
window.ART = (() => {
  'use strict';
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const hash = (s) => { let h = 2166136261; for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };

  // The ink set.
  const SUMI = '#1f1b18', WASHI = '#f6ecd6', SHU = '#d7422a', AI = '#27456b', SORA = '#3f7ea8', ROKU = '#3d8078', KARASHI = '#dba02a', MOMO = '#e79a8c', MATSU = '#4d6b3c', CHA = '#8a5a35', KAKI = '#d9772b';
  const OUT = SUMI;
  const INKS = { SUMI, WASHI, SHU, AI, SORA, ROKU, KARASHI, MOMO, MATSU, CHA, KAKI };
  const st = (w = 2.6, c = SUMI) => `stroke="${c}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
  // A shape with the house outline: cream sticker edge underneath, flat fill, black keyline on top.
  const K = (d, fill, w = 2.4, extra = '') => `<path d="${d}" fill="${WASHI}" stroke="${WASHI}" stroke-width="${w + 3.4}" stroke-linejoin="round"/><path d="${d}" fill="${fill}" ${st(w)} ${extra}/>`;

  // Shared patterns and filters, injected once.
  const DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <pattern id="pDots" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(28)"><circle cx="2.5" cy="2.5" r="1.05" fill="${SUMI}"/></pattern>
    <pattern id="pDotsW" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(28)"><circle cx="2.5" cy="2.5" r="1.05" fill="${WASHI}"/></pattern>
    <pattern id="pDotsBig" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(28)"><circle cx="4.5" cy="4.5" r="2" fill="${SUMI}"/></pattern>
    <pattern id="pHatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-38)"><path d="M0 2.500h5" stroke="${SUMI}" stroke-width="1"/></pattern>
    <filter id="stampInk" x="-4%" y="-4%" width="108%" height="108%">
      <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="3" result="n1"/>
      <feDisplacementMap in="SourceGraphic" in2="n1" scale="1.1" result="rough"/>
      <feTurbulence type="fractalNoise" baseFrequency=".32" numOctaves="3" seed="11" result="n2"/>
      <feColorMatrix in="n2" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -4.2 0 0 0 3.2" result="mask"/>
      <feComposite in="rough" in2="mask" operator="in"/>
    </filter>
    <filter id="paperGrain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" seed="7"/>
      <feColorMatrix type="matrix" values="0 0 0 0 .2  0 0 0 0 .14  0 0 0 0 .08  3.2 0 0 0 -1.62"/>
    </filter>
    <filter id="woodcut" x="-2%" y="-2%" width="104%" height="104%">
      <feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="5" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6"/>
    </filter>
    <path id="stTop" d="M13.5 60a46.5 46.5 0 0 1 93 0"/><path id="stBot" d="M8.5 60a51.5 51.5 0 0 0 103 0"/>
  </defs></svg>`;
  function install() { if (!document.getElementById('art-defs')) { const d = document.createElement('div'); d.id = 'art-defs'; d.innerHTML = DEFS; document.body.prepend(d); } }

  // ---------------------------------------------------------------- Mochi, the black-sesame cat conductor
  const CAT_BODY = 'M60 27C82 27 101 42 106 66l7 1-5 5 6 4-6 3C110 100 88 115 60 115S10 100 12 79l-6-3 6-4-5-5 7-1C19 42 38 27 60 27z';
  const EAR_L = 'M21 55 24 14c0-4 3-5 6-2l23 21z', EAR_R = 'M99 55 96 14c0-4-3-5-6-2L67 33z';
  const TAIL = 'M100 100q24 0 18-24-3-9-10-6-5 3-1 9 4 8-12 9z';
  function mascot(mood = 'calm', o = {}) {
    const hat = o.hat || 'cap', acc = o.acc || 'none';
    const disc = (x, r = 10.6) => `<circle cx="${x}" cy="66" r="${r}" fill="${WASHI}"/>`;
    const pupil = (x, rx, ry, dy = 1.5) => `<ellipse cx="${x}" cy="${66 + dy}" rx="${rx}" ry="${ry}" fill="${SUMI}"/><circle cx="${x + rx * 0.45}" cy="${66 + dy - ry * 0.48}" r="${Math.max(1.2, rx * 0.3)}" fill="${WASHI}"/>`;
    const eyes = {
      calm: disc(44) + disc(76) + pupil(45.5, 5.4, 6.8) + pupil(74.5, 5.4, 6.8),
      wow: disc(44, 12) + disc(76, 12) + pupil(44, 3.4, 3.4, 0) + pupil(76, 3.4, 3.4, 0),
      happy: `<path d="M34 69q10-13 20 0M66 69q10-13 20 0" fill="none" ${st(4.2, WASHI)}/>`,
      cheer: `<path d="M35 59l15 7.500-15 7.500M85 59l-15 7.500 15 7.500" fill="none" ${st(4.2, WASHI)}/>`,
      sad: disc(44) + disc(76) + pupil(45, 4.6, 5, 4) + pupil(75, 4.6, 5, 4) + `<path d="M31 62l25-9v9zM89 62l-25-9v9z" fill="${SUMI}"/><path d="M84 79q-4 7 0 10 4-3 0-10z" fill="#bfe0ea" ${st(1.2)}/>`,
    }[mood] || '';
    const mouth = mood === 'wow' ? `<ellipse cx="60" cy="83" rx="4" ry="5" fill="${SHU}" ${st(1.8, WASHI)}/>`
      : mood === 'cheer' || mood === 'happy' ? `<path d="M51 78q9 15 18 0z" fill="${SHU}" ${st(2, WASHI)}/><path d="M56 85q4 3 8 0-4-3-8 0z" fill="${MOMO}"/>`
        : `<path d="M52.500 78.500q3.750 5 7.500 0 3.750 5 7.500 0" fill="none" ${st(2.3, WASHI)}/>`;
    const HATS = {
      cap: K('M35 38c2-23 48-23 50 0z', AI) + `<path d="M35.700 34.500q24.300-5 48.600 0l.7 3.500H35z" fill="${SHU}"/><path d="M36 34.400q24-5 48 0" fill="none" ${st(1.2)}/><path d="M44 27q7-7 17-8" fill="none" ${st(2, WASHI)} opacity=".55"/><path d="M63 21.500c12 2 20 8 21.500 16.500H63z" fill="url(#pDots)" opacity=".3"/>`
        + K('M29 38h62a4.300 4.300 0 0 1 0 8.600H29a4.300 4.300 0 0 1 0-8.600z', SUMI, 2) + `<path d="M34 41h30" ${st(1.4, WASHI)} opacity=".45"/>`
        + `<circle cx="60" cy="27" r="6" fill="${KARASHI}" ${st(1.8)}/><path d="M60 22.800v8.400M55.800 27h8.400M57 24l6 6M63 24l-6 6" ${st(1)}/><circle cx="60" cy="27" r="1.700" fill="${SHU}"/>`,
      sakura: `<g transform="translate(93 40)">${[0, 72, 144, 216, 288].map((a) => `<path d="M0 0c-6-4-8-11-3.500-15l3.500 2.500 3.500-2.500c4.500 4 2.500 11-3.500 15z" transform="rotate(${a})" fill="${MOMO}" ${st(1.5)}/>`).join('')}<circle r="3.200" fill="${KARASHI}" ${st(1.2)}/></g>`,
      hachimaki: `<path d="M106 58l16-9-3 14zM106 60l14 8-10 5z" fill="${WASHI}" ${st(2)}/>` + K('M12 56q48-19 96 0l-1 11q-47-18-94 0z', WASHI, 2.2) + `<circle cx="60" cy="51" r="6.200" fill="${SHU}"/><path d="M40 55.500q-10 2-18 5.500M80 55.500q10 2 18 5.500" fill="none" ${st(1.1)} opacity=".5"/>`,
      straw: K('M10 37c0-7 22-12 50-12s50 5 50 12-22 11-50 11-50-4-50-11z', KARASHI) + K('M36 36c0-24 48-24 48 0z', KARASHI) + `<path d="M36.500 30q23.500 8 47 0l.5 6q-24 8-48 0z" fill="${SHU}" ${st(1.4)}/><path d="M16 40q44 9 88 0M44 18q16-6 32 0M22 35q-3 3-4 6M98 35q3 3 4 6M60 44v3M40 43l-1 3M80 43l1 3" fill="none" ${st(1)} opacity=".5"/>`,
      kitsune: `<g transform="rotate(-18 28 36)">${K('M10 46l3-27 11 11 11-11 3 27q-14 13-28 0z', WASHI, 2.2)}<path d="M14.500 24l4.500 6M33.500 24l-4.500 6" ${st(3, SHU)}/><path d="M16 40q3-4 7 0M32 40q-3-4-7 0" fill="none" ${st(2)}/><path d="M24 48v3M18 33.500q6-3 12 0" fill="none" ${st(2.200, SHU)}/><circle cx="24" cy="44.500" r="1.400" fill="${SUMI}"/></g>`,
      crown: K('M36 38l3-24 11 11L60 9l10 16 11-11 3 24z', KARASHI) + `<path d="M39 33.500h42" ${st(1.4)}/><circle cx="60" cy="27" r="3.600" fill="${SHU}" ${st(1.3)}/><circle cx="46" cy="29" r="2.700" fill="${ROKU}" ${st(1.1)}/><circle cx="74" cy="29" r="2.700" fill="${SORA}" ${st(1.1)}/><path d="M66 14l7 12-6 7z" fill="url(#pDots)" opacity=".25"/>`,
    };
    const ACCS = {
      bell: `<path d="M38 97q22 12 44 0" fill="none" ${st(7.500, WASHI)}/><path d="M38 97q22 12 44 0" fill="none" ${st(4.600, SHU)}/>` + `<circle cx="60" cy="106.500" r="8" fill="${WASHI}" stroke="${WASHI}" stroke-width="3"/><circle cx="60" cy="106.500" r="8" fill="${KARASHI}" ${st(2)}/><path d="M54.500 108.500h11M60 108.500v5" ${st(1.700)}/><circle cx="60" cy="108.500" r="1.500" fill="${SUMI}"/>`,
      bow: K('M60 102l-18-10v20z', SHU, 2.1) + K('M60 102l18-10v20z', SHU, 2.1) + `<path d="M47 98l8 3M73 98l-8 3" ${st(1.200, WASHI)} opacity=".6"/><circle cx="60" cy="102" r="5" fill="${KARASHI}" ${st(2)}/>`,
      scarf: K('M24 93q36 17 72 0l2 12q-38 17-76 0z', SHU, 2.2) + K('M78 104l11 17-13 1-5-15z', SHU, 2) + `<path d="M34 98.500l-1 10M46 102l-1 10M60 103.500v10M74 102l1 10M86 98.500l1 10" ${st(1.600, WASHI)} opacity=".7"/>`,
    };
    const ground = o.face ? '' : `<path d="M26 120h68M36 123.500h48" fill="none" stroke="currentColor" stroke-width="1.600" stroke-linecap="round" opacity=".32"/>`;
    const tail = o.face ? '' : K(TAIL, SUMI, 2.4) + `<path d="M116.500 80q2-7-5-8.500-4 1.500-1.500 6z" fill="${WASHI}"/>`;
    return `<svg class="mascot ${esc(o.cls || '')}" viewBox="-6 -6 132 132" role="img" aria-label="Mochi the cat conductor">
      ${ground}${tail}
      ${K(EAR_L, SUMI)}${K(EAR_R, SUMI)}
      <path d="M28.500 45l2-20 14 12z" fill="${MOMO}"/><path d="M91.500 45l-2-20-14 12z" fill="${MOMO}"/>
      ${K(CAT_BODY, SUMI)}
      <path d="M95 52c9 12 12 30 6 44-8 9-22 15-38 16 24-8 38-28 32-60z" fill="url(#pDotsW)" opacity=".2"/>
      <path d="M24 60c3-11 10-19 20-23M21 68c1-2 1-3 2-5" fill="none" ${st(2.600, WASHI)} opacity=".4"/>
      <path d="M49 96q11 9 22 0-1 14-11 17-10-3-11-17z" fill="${WASHI}"/>
      <path d="M21 73l-14-3.500M21 79H6M22 85l-13 4M99 73l14-3.500M99 79h15M98 85l13 4" fill="none" ${st(1.300, WASHI)} opacity=".85"/>
      <circle cx="29" cy="84" r="5.200" fill="${SHU}"/><circle cx="91" cy="84" r="5.200" fill="${SHU}"/>
      <path d="M26 83.500l5-3M88 83.500l5-3" ${st(1.100, WASHI)} opacity=".55"/>
      ${eyes}
      <path d="M57.300 73.800h5.400l-2.700 3.300z" fill="${MOMO}"/>${mouth}
      ${K('M34.500 112a8.800 5.600 0 1 0 17.600 0 8.800 5.600 0 1 0-17.600 0z', WASHI, 2)}${K('M67.900 112a8.800 5.600 0 1 0 17.600 0 8.800 5.600 0 1 0-17.600 0z', WASHI, 2)}
      <path d="M40.500 111v3M43.300 110.500v3.600M46.100 111v3M73.900 111v3M76.700 110.500v3.600M79.500 111v3" ${st(1.100)} opacity=".6"/>
      ${ACCS[acc] || ''}${HATS[hat] || ''}
    </svg>`;
  }

  // ---------------------------------------------------------------- yokai (the same print treatment as Mochi)
  // Six folk monsters, each drawn from its traditional look: the red paper-lantern ghost, the blue ogre,
  // the river imp with a water dish, the leaf-wearing raccoon dog, the white shrine fox and the one-eyed umbrella.
  const YOKAI = [
    { id: 'obake', jp: 'おばけ', name: 'Obake', a: SHU, b: SUMI },
    { id: 'oni', jp: 'おに', name: 'Oni', a: '#3a6a9a', b: SUMI },
    { id: 'kappa', jp: 'かっぱ', name: 'Kappa', a: '#6f9f63', b: SUMI },
    { id: 'tanuki', jp: 'たぬき', name: 'Tanuki', a: '#b07a48', b: SUMI },
    { id: 'kitsune', jp: 'きつね', name: 'Kitsune', a: '#fbf4e2', b: SUMI },
    { id: 'karakasa', jp: 'からかさ', name: 'Karakasa', a: KAKI, b: SUMI },
  ];
  const YK = {
    obake: 'M34 20h52c14 24 14 56 0 80H34c-14-24-14-56 0-80z',
    oni: 'M60 22c27 0 45 15 45 40 0 14-5 26-13 34q-12 12-32 12T28 96c-8-8-13-20-13-34 0-25 18-40 45-40z',
    kappa: 'M60 24c26 0 46 16 46 40 0 26-20 44-46 44S14 90 14 64c0-24 20-40 46-40z',
    tanuki: 'M60 20c26 0 44 16 46 42l7 2-6 5 5 5-7 3c-3 20-21 31-45 31S18 97 15 77l-7-3 5-5-6-5 7-2c2-26 20-42 46-42z',
    kitsune: 'M60 111C42 105 14 87 15 58 16 34 36 22 60 22s44 12 45 36c1 29-27 47-45 53z',
    karakasa: 'M60 7c28 12 44 36 48 62-16-10-32-10-48-3-16-7-32-7-48 3 4-26 20-50 48-62z',
  };
  function yokai(y, mood = 'idle', cls = '') {
    const id = y.id, G = y.a, one = id === 'karakasa', ey = one ? 42 : 60, clip = `ykc-${id}`, shape = YK[id] || YK.kappa;
    const dark = id === 'oni' || id === 'obake', lid = dark ? WASHI : SUMI;
    let back = '', inner = '', extra = '';
    if (id === 'obake') {
      back = `<path d="M47 13q13-14 26 0" fill="none" ${st(2.200)}/>`;
      inner = `<path d="M20 34h80M20 47h80M20 73h80M20 87h80" fill="none" ${st(1.300, WASHI)} opacity=".5"/>`;
      extra = K('M40 12h40v9H40z', SUMI, 2) + K('M40 99h40v8H40z', SUMI, 2) + `<path d="M60 107v7M56 114h8" ${st(2)}/>`;
    } else if (id === 'oni') {
      back = K('M13 54q-9-22 9-31 4-14 20-12 8-9 18-4 10-5 18 4 16-2 20 12 18 9 9 31z', SUMI, 2.4);
      extra = K('M40 30 31 4l20 18z', KARASHI, 2.2) + K('M80 30l9-26-20 18z', KARASHI, 2.2) + `<path d="M35 15l8 5M38 23l9 3M85 15l-8 5M82 23l-9 3" ${st(1.500)}/>`
        + `<path d="M30 30q8-10 16-2 6-9 14-3 8-6 14 3 8-8 16 2-8 6-14 2-8 7-16 1-8 6-16-1-6 4-14-2z" fill="${SUMI}"/>`
        + `<path d="M31 46l23 8M89 46l-23 8" ${st(6)}/><path d="M56 68q4 6 8 0" fill="none" ${st(2, WASHI)} opacity=".7"/>`;
    } else if (id === 'kappa') {
      inner = `<path d="M10 96q50 30 100 0v24H10z" fill="${MATSU}" ${st(2)}/><path d="M36 104l8 8M60 106v10M84 104l-8 8M48 100l-4 8M72 100l4 8" ${st(1.300)} opacity=".6"/>`;
      extra = K('M33 31l-6-11 11 4 2-11 8 9 5-11 7 10 7-10 5 11 8-9 2 11 11-4-6 11z', SUMI, 2) + K('M39 26a21 7.400 0 1 0 42 0 21 7.400 0 1 0-42 0z', '#cfe3ea', 2.2) + `<path d="M46 25q8-3 16-2" fill="none" ${st(1.600, WASHI)}/>`;
    } else if (id === 'tanuki') {
      back = K('M17 30a12.500 12.500 0 1 0 25 0 12.500 12.500 0 1 0-25 0z', G) + K('M78 30a12.500 12.500 0 1 0 25 0 12.500 12.500 0 1 0-25 0z', G) + `<circle cx="29.500" cy="30" r="5.600" fill="${SUMI}"/><circle cx="90.500" cy="30" r="5.600" fill="${SUMI}"/>`;
      inner = `<path d="M22 58q16-13 31 2-8 18-31 6zM98 58q-16-13-31 2 8 18 31 6z" fill="${SUMI}"/><ellipse cx="60" cy="88" rx="22" ry="17" fill="${WASHI}"/>`;
      extra = K('M55 21q10-15 21-5-10 9-21 5z', MATSU, 1.8) + `<path d="M59 20q7-6 13-6" fill="none" ${st(1.100)}/><path d="M55.500 73h9l-4.500 5z" fill="${SUMI}"/><path d="M24 84l-12 1M25 90l-11 5M96 84l12 1M95 90l11 5" ${st(1.300)}/>`;
    } else if (id === 'kitsune') {
      back = K('M24 48 27 3l29 26z', G) + K('M96 48 93 3 64 29z', G) + `<path d="M29.500 13l2 16 11-6zM90.500 13l-2 16-11-6z" fill="${SHU}"/>`;
      inner = `<path d="M60 34q-6 8 0 14 6-6 0-14z" fill="${SHU}"/><path d="M22 76l15 2M24 84l13-2M98 76l-15 2M96 84l-13-2" fill="none" ${st(2.600, SHU)}/>`;
      extra = K('M39 98q21 13 42 0l5 15q-26 10-52 0z', SHU, 2) + `<circle cx="60" cy="110" r="3.600" fill="${KARASHI}" ${st(1.400)}/><path d="M56.500 76h7l-3.500 4.500z" fill="${SUMI}"/>`;
    } else if (one) {
      inner = `<path d="M36 64Q43 30 60 8M84 64Q77 30 60 8M22 66q14-36 38-58M98 66Q84 30 60 8" fill="none" ${st(1.300)} opacity=".5"/>`;
      extra = `<path d="M60 66v30" ${st(4.400, CHA)}/><path d="M60 66v30" fill="none" ${st(1)} opacity=".4"/>` + K('M44 96h32v6H44z', CHA, 1.8) + `<path d="M50 102v8M70 102v8" ${st(4.400)}/><path d="M53 96q7-9 14 0" fill="none" ${st(2.200, SHU)}/>`;
    }
    const body = `${K(shape, G, 2.8)}<g clip-path="url(#${clip})">${inner}<path d="M80 0c34 26 40 80 6 124h50V0z" fill="url(#pDots)" opacity="${id === 'kitsune' ? 0.14 : 0.26}"/></g><path d="${shape}" fill="none" ${st(2.800)}/>`;
    const eyeDisc = (x, r) => `<circle cx="${x}" cy="${ey}" r="${r}" fill="${WASHI}" ${st(2)}/><ellipse cx="${x + 0.8}" cy="${ey + 1.2}" rx="${r * 0.5}" ry="${r * 0.62}" fill="${SUMI}"/><circle cx="${x + r * 0.32}" cy="${ey - r * 0.2}" r="${r * 0.17}" fill="${WASHI}"/>`;
    // the fox keeps its eyes narrow and sly
    const sly = (x, f) => `<path d="M${x - 10 * f} ${ey + 2}q${10 * f} -11 ${20 * f} -3 ${-9 * f} 8 ${-20 * f} 3z" fill="${SUMI}"/><path d="M${x - 11 * f} ${ey + 1}q${10 * f} -12 ${23 * f} -5" fill="none" ${st(2.200, SHU)}/><circle cx="${x + 2 * f}" cy="${ey}" r="1.500" fill="${WASHI}"/>`;
    const eyes = {
      idle: one ? eyeDisc(60, 12.500) : id === 'kitsune' ? sly(45, 1) + sly(75, -1) : eyeDisc(45, 9.400) + eyeDisc(75, 9.400),
      hit: one ? `<path d="M52 ${ey - 8}l16 16M68 ${ey - 8}l-16 16" ${st(4, lid)}/>` : `<path d="M39 ${ey - 6}l12 12M51 ${ey - 6}l-12 12M69 ${ey - 6}l12 12M81 ${ey - 6}l-12 12" ${st(3.600, lid)}/>`,
      laugh: one ? `<path d="M49 ${ey + 4}q11-15 22 0" fill="none" ${st(4, lid)}/>` : `<path d="M38 ${ey + 4}q7-11 14 0M68 ${ey + 4}q7-11 14 0" fill="none" ${st(3.800, lid)}/>`,
      gone: one ? `<path d="M49 ${ey}q5.500-7 11 0t11 0" fill="none" ${st(3, lid)}/>` : `<path d="M39 ${ey}q3-6 6.500 0t6.500 0M68 ${ey}q3-6 6.500 0t6.500 0" fill="none" ${st(3, lid)}/>`,
    }[mood];
    const my = one ? 58 : id === 'tanuki' ? 84 : 82;
    const mouth = mood === 'laugh' ? `<path d="M50 ${my}q10 15 20 0z" fill="${id === 'obake' ? SUMI : SHU}" ${st(2.200, dark ? WASHI : SUMI)}/>`
      : mood === 'hit' || mood === 'gone' ? `<path d="M52 ${my + 4}q8-7 16 0" fill="none" ${st(2.800, lid)}/>`
        : id === 'oni' ? `<path d="M46 ${my}q14 8 28 0" fill="none" ${st(2.800, WASHI)}/><path d="M50 ${my + 3}l2-10 4 8zM70 ${my + 3}l-2-10-4 8z" fill="${WASHI}" ${st(1.300)}/>`
          : id === 'obake' ? `<path d="M31 78l8 5 7-5 7 5 7-5 7 5 7-5 7 5 8-5q-5 15-29 16-24-1-29-16z" fill="${SUMI}" ${st(1.500, WASHI)}/><path d="M52 88q8 24 16 0z" fill="${MOMO}" ${st(1.800)}/><path d="M60 90v9" ${st(1.100)} opacity=".6"/>`
            : one ? `<path d="M52 ${my}q8 6 16 0" fill="none" ${st(2.800)}/><path d="M55.500 ${my + 2.500}q4.500 15 9.500 0z" fill="${SHU}" ${st(1.800)}/>`
              : id === 'kappa' ? `<path d="M45 ${my - 3}q15 13 30 0-15-7-30 0z" fill="${KARASHI}" ${st(2.200)}/><path d="M49 ${my - 1}q11 3 22 0" fill="none" ${st(1.200)}/>`
                : `<path d="M52.500 ${my - 2}q3.750 5 7.500 0 3.750 5 7.500 0" fill="none" ${st(2.400)}/>`;
    const blush = id === 'kappa' || id === 'tanuki' ? `<circle cx="29" cy="${ey + 16}" r="5" fill="${SHU}"/><circle cx="91" cy="${ey + 16}" r="5" fill="${SHU}"/>` : '';
    // hitodama: little spirit flames, drawn as print shapes
    const flame = (x, yy, c) => `<path d="M${x} ${yy}q-8 9-1 15 9 1 9-7-1-5-5-8 1 4-1 5-2-1-2-5z" fill="${c}" ${st(1.500)}/>`;
    const wisps = cls.includes('nowisp') ? '' : `<g class="wisp">${flame(8, 24, SORA)}${flame(111, 16, KARASHI)}</g>`;
    return `<svg class="yokai ${esc(cls)}" viewBox="0 0 120 120" role="img" aria-label="${esc(y.name)}"><defs><clipPath id="${clip}"><path d="${shape}"/></clipPath></defs>
      <path d="M30 116h60M40 119h40" fill="none" stroke="currentColor" stroke-width="1.600" stroke-linecap="round" opacity=".3"/>${back}${body}${extra}${blush}${eyes}${mouth}${wisps}</svg>`;
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
  // Stamp-pad inks: vermilion, indigo, verdigris, persimmon, navy, Edo purple.
  const INK = { M: '#c4321f', X: '#2f6f9e', S: '#2a7d72', SX: '#2a7d72', K: '#bf5a1c', KX: '#bf5a1c', W: '#2c4a80', WX: '#2c4a80', Y: '#63458a', YX: '#63458a' };
  const LABEL = { M: 'MINNA LINE', X: 'N5 EXPRESS', S: 'SUMMER LINE', SX: 'N4 TERMINAL', K: 'AUTUMN LINE', KX: 'N3 TERMINAL', W: 'WINTER LINE', WX: 'N2 TERMINAL', Y: 'STARLIGHT LINE', YX: 'N1 TERMINAL' };
  function stamp(stn, code, date) {
    const list = MOTIFS[stn.line] || MOTIFS.M, h = hash(stn.id);
    const motif = M[list[h % list.length]], frame = h % 3;
    const jp = stn.jp.length > 8 ? stn.jp.slice(0, 8) : stn.jp;
    const ring = frame === 1 ? `<circle cx="60" cy="60" r="55.5" fill="none" stroke="currentColor" stroke-width="5" stroke-dasharray=".1 8.6" stroke-linecap="round"/>`
      : frame === 2 ? `<circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="60" r="52.6" fill="none" stroke="currentColor" stroke-width="1"/>`
        : `<circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" stroke-width="3.6"/>`;
    return `<svg class="estamp" viewBox="0 0 120 120" role="img" aria-label="Stamp: ${esc(stn.name)}" style="color:${INK[stn.line] || INK.M}"><g filter="url(#stampInk)">
      ${ring}<circle cx="60" cy="60" r="41.5" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <text style="fill:currentColor;font:900 8.200px var(--f-ui);letter-spacing:1.600px" text-anchor="middle"><textPath href="#stTop" startOffset="50%">${LABEL[stn.line] || ''}</textPath></text>
      ${date ? `<text style="fill:currentColor;font:900 7.200px var(--f-ui);letter-spacing:1px" text-anchor="middle"><textPath href="#stBot" startOffset="50%">${esc(date)}</textPath></text>` : ''}
      <g transform="translate(20.5 8) scale(.66)" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round">${motif}</g>
      <text x="60" y="74" text-anchor="middle" style="fill:currentColor;font:${code.length > 2 ? 14 : 17}px var(--f-pop)">${esc(code)}</text>
      <text x="60" y="88" text-anchor="middle" style="fill:currentColor;font:700 8.6px var(--f-ui)">${esc(jp)}</text>
    </g></svg>`;
  }

  // ---------------------------------------------------------------- landscapes, in the manner of a woodblock print
  // suyari-gasumi: the flat bands of mist that drift across ukiyo-e skies
  const mist = (x, y, w, c = '#fbf4e2', o = 0.95) => `<g class="cloud" opacity="${o}"><path d="M${x} ${y}h${w}a7 7 0 0 1 0 14h-${w * 0.34}a6 6 0 0 0 0 12h${w * 0.2}a6 6 0 0 1 0 12h-${w * 0.72}a6 6 0 0 1 0-12h${w * 0.1}a6 6 0 0 0 0-12H${x}a7 7 0 0 1 0-14z" fill="${c}"/><path d="M${x + 8} ${y + 14}h${w * 0.5}M${x + w * 0.3} ${y + 26}h${w * 0.34}" fill="none" stroke="${SUMI}" stroke-width="1" opacity=".22" stroke-linecap="round"/></g>`;
  // a pine: bent trunk and flat pads of needles
  function pine(x, y, s, leaf = MATSU, snow) {
    const pad = (px, py, w) => `<path d="M${px - w} ${py}q${w * 0.2}-${w * 0.72} ${w}-${w * 0.78}t${w} ${w * 0.78}z" fill="${leaf}" ${st(1.800)}/>${snow ? `<path d="M${px - w * 0.8} ${py - w * 0.34}q${w * 0.3}-${w * 0.46} ${w * 0.8}-${w * 0.46}t${w * 0.8} ${w * 0.46}q-${w * 0.4}-${w * 0.14}-${w * 0.8}-${w * 0.06}t-${w * 0.8} ${w * 0.06}z" fill="${WASHI}" ${st(1.200)}/>` : `<path d="M${px - w * 0.6} ${py - 3}v-${w * 0.2}M${px - w * 0.25} ${py - 3}v-${w * 0.32}M${px + w * 0.1} ${py - 3}v-${w * 0.34}M${px + w * 0.45} ${py - 3}v-${w * 0.26}" ${st(1)} opacity=".45"/>`}`;
    return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-3 0q4-20-2-34 2-14 12-24l5 3q-8 9-8 21 6 14 3 34z" fill="${CHA}" ${st(1.800)}/><path d="M2-30q10-4 18-12M-2-44q-10-4-16-12" fill="none" ${st(3.400, CHA)}/>
      ${pad(-22, -50, 18)}${pad(24, -40, 17)}${pad(4, -62, 22)}${pad(-6, -84, 15)}</g>`;
  }
  const flower = (x, y, r, c = MOMO) => `<g transform="translate(${x} ${y})">${[0, 72, 144, 216, 288].map((a) => `<circle cx="0" cy="${-r * 0.62}" r="${r * 0.5}" transform="rotate(${a})" fill="${c}"/>`).join('')}<circle r="${r * 0.26}" fill="${SHU}"/></g>`;
  // a branch reaching in from the top edge, the way prints frame a view
  function blossomBranch(c = MOMO) {
    const pts = [[792, 30, 9], [770, 52, 8], [744, 40, 7], [812, 62, 9], [838, 38, 8], [716, 66, 7], [690, 46, 6], [760, 84, 7], [856, 78, 8], [664, 74, 6], [640, 54, 5], [800, 96, 6], [878, 52, 7], [728, 22, 6], [826, 14, 7], [612, 70, 5]];
    return `<g><path d="M900 0q-60 40-128 46-70 8-124 2-30-2-46 18M780 46q-18 26-14 44M836 30q4 34 26 52M700 52q-4-22 10-40" fill="none" ${st(4.600, '#3a2a22')}/>${pts.map(([x, y, r]) => flower(x, y, r, c)).join('')}</g>`;
  }
  const maple = (x, y, s, c, r = 0) => `<path transform="translate(${x} ${y}) rotate(${r}) scale(${s})" d="M0-14l3 7 5-2-1 6 6 1-4 5 2 3-7-1 1 6-5-3-5 3 1-6-7 1 2-3-4-5 6-1-1-6 5 2z" fill="${c}" ${st(0.900)}/>`;
  function mapleBranch() {
    const pts = [[790, 34, 1.5, SHU, 10], [762, 58, 1.3, KAKI, -20], [732, 40, 1.2, KARASHI, 30], [816, 66, 1.4, KAKI, 60], [842, 36, 1.3, SHU, -40], [704, 68, 1.2, SHU, 15], [676, 46, 1, KAKI, -10], [752, 90, 1.1, KARASHI, 45], [862, 80, 1.3, SHU, 5], [650, 74, 1, KARASHI, -30], [876, 50, 1.1, KAKI, 25], [722, 22, 1, SHU, -15], [826, 12, 1.2, KARASHI, 50], [622, 60, 0.9, SHU, 0]];
    return `<g><path d="M900 0q-60 40-128 46-70 8-124 2-30-2-46 18M780 46q-18 26-14 44M836 30q4 34 26 52M700 52q-4-22 10-40" fill="none" ${st(4.600, '#3a2a22')}/>${pts.map((p) => maple(...p)).join('')}</g>`;
  }
  const torii = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-25 -44q25 5 50 0l3-7q-28 6-56 0z" fill="${SHU}" ${st(1.800)}/><path d="M-21 -36h42v5h-42z" fill="${SHU}" ${st(1.600)}/><path d="M-17 -44l-2 44h6l1-44zM17 -44l2 44h-6l-1-44z" fill="${SHU}" ${st(1.600)}/><path d="M-2 -44h4v8h-4z" fill="${SUMI}"/></g>`;
  const pagoda = (x, y, s, c = AI) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0-92v12" ${st(2)}/>${[0, 1, 2, 3].map((i) => `<path d="M${-9 - i * 4} ${-62 + i * 20}h${18 + i * 8}v14h-${18 + i * 8}z" fill="${WASHI}" ${st(1.500)}/><path d="M${-20 - i * 5} ${-64 + i * 20}q${20 + i * 5}-${16} ${40 + i * 10} 0l-4 4q-${16 + i * 5}-7-${32 + i * 10} 0z" fill="${c}" ${st(1.600)}/>`).join('')}</g>`;
  const lanternRow = (x0, y0, n, gap) => `<path d="M${x0 - 20} ${y0 - 26}q${(n * gap) / 2} 26 ${n * gap + 20} 0" fill="none" ${st(1.400)}/>` + Array.from({ length: n }, (_, i) => { const x = x0 + i * gap, y = y0 - 26 + Math.sin(((i + 0.5) / n) * Math.PI) * 13 + 14; return `<g transform="translate(${x} ${y})"><path d="M0-14v4" ${st(1.300)}/><ellipse rx="9" ry="11" fill="${i % 2 ? WASHI : SHU}" ${st(1.600)}/><path d="M-7.500-5h15M-9 0h18M-7.500 5h15" ${st(0.800)} opacity=".45"/><path d="M-4-11h8M-4 11h8" ${st(2.600)}/></g>`; }).join('');
  // Hokusai's wave, quoted: a tall curl rising at the right edge, fringed with scalloped foam and clawed fingers
  const greatWave = () => {
    const crest = [[896, 114], [880, 105], [863, 99], [846, 95], [829, 94], [812, 95], [796, 99], [781, 105], [767, 113], [755, 123], [745, 135], [737, 148], [730, 162], [725, 176]];
    const body = 'M900 260V118C858 92 798 94 758 120c-28 18-42 42-46 64 10-18 28-26 46-24-20 12-26 38-18 58 6-16 22-26 40-24-16 12-18 38-6 54l6 12z';
    return `<g>${crest.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${8.5 - (i % 2)}" fill="${WASHI}" ${st(1.600)}/>`).join('')}
      <path d="${body}" fill="${AI}" ${st(2.400)}/>
      <path d="M900 140c-36-22-86-22-122 0-22 14-34 32-40 50M900 170c-30-16-66-14-92 4-14 10-22 24-26 38M900 204c-22-10-46-8-64 6-8 8-14 18-16 30M900 236c-14-6-28-4-40 6" fill="none" ${st(2.200, SORA)}/>
      <path d="M900 150c-34-20-80-20-114 0M900 182c-28-14-58-12-82 4M900 216c-20-8-40-6-56 6" fill="none" ${st(1.300, WASHI)} opacity=".8"/>
      ${[[712, 184], [740, 218], [772, 250]].map(([x, y]) => `<path d="M${x} ${y}q-12-4-14 8 6-6 12-2 2 6-4 9 12 0 10-11z" fill="${WASHI}" ${st(1.400)}/>`).join('')}
      <g fill="${WASHI}" ${st(1)}>${[[704, 150], [690, 168], [716, 130], [684, 196], [700, 214], [732, 110], [672, 150]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${2.2 + (i % 3) * 0.9}"/>`).join('')}</g></g>`;
  };
  // a Shōwa-era bullet train: cream body, indigo window band, round nose
  function trainGroup(stripe) {
    const car = (x, nose) => `<g transform="translate(${x} 0)">${nose
      ? `<path d="M0 26V5h44q24 1 36 12 8 6 8 9z" fill="${WASHI}" ${st(1.800)}/><path d="M0 10h52q16 2 24 8H0z" fill="${stripe}"/><path d="M50 10q12 2 20 8H50z" fill="${SUMI}"/><circle cx="82" cy="21" r="4" fill="${SHU}" ${st(1.200)}/>`
      : `<path d="M0 5h84v21H0z" fill="${WASHI}" ${st(1.800)}/><path d="M0 10h84v8H0z" fill="${stripe}"/>`}
      ${[6, 19, 32, 45, 58, 71].map((w) => (nose && w > 40 ? '' : `<rect x="${w}" y="11.500" width="8" height="5" fill="${WASHI}"/>`)).join('')}<path d="M2 22.500h${nose ? 78 : 80}" ${st(1)} opacity=".5"/>
      <path d="M12 26v3M26 26v3M58 26v3M72 26v3" ${st(3)}/></g>`;
    return `<g class="sc-train">${car(0)}${car(85)}${car(170, true)}</g>`;
  }
  // the vertical title cartouche and red seal found on every woodblock print; pinned to the frame's corner by CSS
  const cartouche = (title, c) => { const h = title.length * 17 + 16; return `<svg class="cartouche" viewBox="0 0 30 ${h + 32}" aria-hidden="true"><path d="M2 2h26v${h}H2z" fill="${c}" ${st(1.800)}/><path d="M5.500 5.500h19v${h - 7}h-19z" fill="none" ${st(0.900, WASHI)}/>${[...title].map((ch, i) => `<text x="15" y="${24 + i * 17}" text-anchor="middle" style="fill:${WASHI};font:14px var(--f-pop)">${ch}</text>`).join('')}
    <g transform="translate(4 ${h + 7})"><rect width="22" height="22" rx="2" fill="${WASHI}" stroke="${SHU}" stroke-width="2"/><text x="11" y="10" text-anchor="middle" style="fill:${SHU};font:900 8px var(--f-ui)">みん</text><text x="11" y="19" text-anchor="middle" style="fill:${SHU};font:900 8px var(--f-ui)">な線</text></g></svg>`; };
  const birds = (x, y, c = SUMI) => `<path d="M${x} ${y}q5-6 10 0 5-6 10 0M${x + 34} ${y - 14}q4-5 8 0 4-5 8 0M${x + 60} ${y + 4}q3.500-4 7 0 3.500-4 7 0" fill="none" ${st(1.500, c)}/>`;
  function scene(season) {
    const P = {
      spring: { paper: '#f4e7cb', band: '#7fb0b6', fuji: AI, far: '#7d9a78', mid: '#9cb774', near: '#c9cf86', sun: SHU, stripe: AI, title: '春の線', seal: SHU },
      summer: { paper: '#f2e6c6', band: '#2f6f9e', fuji: ROKU, far: '#3f7f6a', mid: '#5f9a63', near: '#86b06a', sun: KARASHI, stripe: SHU, title: '夏の線', seal: AI },
      autumn: { paper: '#f6e3bd', band: '#e0903f', fuji: '#b0432a', far: '#8a5a35', mid: '#c98a3a', near: '#dba649', sun: SHU, stripe: CHA, title: '秋の線', seal: SUMI },
      winter: { paper: '#eef0ea', band: '#7f95ad', fuji: '#39587f', far: '#93a5b6', mid: '#dfe6e6', near: '#fbf8ee', sun: '#d9695a', stripe: AI, title: '冬の線', seal: AI },
      night: { paper: '#2a3558', band: '#141b33', fuji: '#1c2542', far: '#1a2340', mid: '#222c4c', near: '#172039', sun: '#f3e3ad', stripe: SHU, title: '星の線', seal: SHU },
    }[season] || {};
    const id = 'sky' + season, night = season === 'night';
    const snowcap = 'M432 64q18-6 36 0l14 22-9-3-5 12-8-10-7 13-8-12-6 9-5-11-16 2z';
    let sky = '', fore = '', mid = '';
    if (season === 'spring') {
      sky = `<circle cx="596" cy="80" r="40" fill="${P.sun}"/>` + mist(118, 62, 150) + mist(520, 118, 190) + birds(300, 70);
      mid = pine(250, 200, 0.62) + pine(300, 204, 0.5) + torii(676, 206, 0.78);
      fore = blossomBranch() + `<g class="sc-petals" fill="${MOMO}">${[[150, 60], [330, 96], [505, 44], [580, 150], [690, 130], [410, 150], [250, 130]].map(([x, y], i) => `<path d="M${x} ${y}q5-7 10 0-5 6-10 0z" transform="rotate(${i * 40} ${x} ${y})"/>`).join('')}</g>`;
    } else if (season === 'summer') {
      sky = `<g opacity=".5" stroke="${KARASHI}" stroke-width="13">${Array.from({ length: 16 }, (_, i) => { const a = (i / 16) * Math.PI * 2; return `<path d="M${596 + Math.cos(a) * 52} ${82 + Math.sin(a) * 52}L${596 + Math.cos(a) * 260} ${82 + Math.sin(a) * 260}"/>`; }).join('')}</g><circle cx="596" cy="82" r="42" fill="${P.sun}" ${st(2)}/>` + mist(96, 54, 170) + mist(286, 126, 130);
      mid = pine(246, 200, 0.6) + pine(292, 206, 0.46);
      fore = `<path d="M0 232q150-16 300 0t300 0 300-4v32H0z" fill="${SORA}" ${st(1.800)}/><path d="M40 244q20-8 40 0t40 0M220 250q20-8 40 0t40 0M420 242q20-8 40 0t40 0" fill="none" ${st(1.800, WASHI)} opacity=".8"/>` + greatWave();
    } else if (season === 'autumn') {
      sky = `<circle cx="596" cy="96" r="58" fill="${P.sun}"/>` + mist(110, 70, 160, '#fbefd2') + mist(500, 132, 200, '#fbefd2') + birds(310, 60);
      mid = pagoda(678, 206, 0.72, '#7a3323') + pine(250, 200, 0.6, '#6f6a34') + pine(298, 205, 0.48, '#6f6a34');
      fore = mapleBranch() + `<g class="sc-petals">${[[160, 70, SHU], [340, 110, KAKI], [520, 50, KARASHI], [590, 160, SHU], [420, 150, KAKI]].map(([x, y, c], i) => maple(x, y, 0.8, c, i * 50)).join('')}</g>`;
    } else if (season === 'winter') {
      sky = `<circle cx="596" cy="80" r="36" fill="${P.sun}"/>` + mist(104, 60, 160, '#ffffff') + mist(516, 120, 190, '#ffffff');
      mid = pine(250, 200, 0.62, '#4d6a5e', true) + pine(300, 205, 0.5, '#4d6a5e', true) + torii(676, 206, 0.78);
      fore = pine(820, 262, 1.5, '#4d6a5e', true) + `<g class="sc-petals" fill="#fff" stroke="${SUMI}" stroke-width=".6">${[[90, 40], [210, 96], [372, 34], [520, 86], [690, 56], [760, 120], [300, 150], [612, 140], [450, 120], [150, 150], [560, 30]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${2.4 + (i % 3)}"/>`).join('')}</g>`;
    } else {
      sky = `<g fill="${WASHI}">${[[80, 30], [150, 84], [262, 26], [334, 92], [392, 40], [520, 22], [706, 110], [760, 44], [300, 150], [206, 130], [668, 28], [540, 140]].map(([x, y], i) => (i % 4 === 0 ? `<path d="M${x} ${y - 5}l1.500 3.500 3.500 1.500-3.500 1.500-1.500 3.500-1.500-3.500-3.500-1.500 3.500-1.500z"/>` : `<circle cx="${x}" cy="${y}" r="${i % 3 ? 1.4 : 2.2}"/>`)).join('')}</g>`
        + `<circle cx="596" cy="80" r="40" fill="${P.sun}"/><path d="M580 66a7 7 0 1 0 .1 0M606 92a10 10 0 1 0 .1 0M612 62a4 4 0 1 0 .1 0" fill="${SUMI}" opacity=".12"/>` + mist(110, 66, 150, '#3b4a78', 0.9) + mist(500, 124, 190, '#3b4a78', 0.9);
      mid = pagoda(678, 206, 0.72, '#0f1528') + pine(250, 200, 0.6, '#16203a') + pine(298, 205, 0.48, '#16203a');
      fore = lanternRow(640, 44, 7, 38);
    }
    return `<svg class="scene ${season}" viewBox="0 0 900 260" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${P.band}"/><stop offset=".3" stop-color="${P.band}" stop-opacity=".55"/><stop offset=".62" stop-color="${P.band}" stop-opacity="0"/></linearGradient>
        <linearGradient id="${id}f" x1="0" y1="0" x2="0" y2="1"><stop offset=".5" stop-color="${P.fuji}"/><stop offset="1" stop-color="${P.fuji}" stop-opacity=".25"/></linearGradient></defs>
      <rect width="900" height="260" fill="${P.paper}"/><rect width="900" height="260" fill="url(#${id})"/>
      ${season === 'autumn' ? `<path d="M0 140h900v80H0z" fill="${SHU}" opacity=".12"/>` : ''}
      ${sky}
      <g filter="url(#woodcut)">
        <path d="M236 200C336 172 400 112 432 64q18-6 36 0C500 112 564 172 664 200z" fill="${P.paper}"/>
        <path d="M236 200C336 172 400 112 432 64q18-6 36 0C500 112 564 172 664 200z" fill="url(#${id}f)" ${st(2.200)}/>
        <path d="${snowcap}" fill="${night ? '#dfe3ee' : '#fffaf0'}" ${st(1.800)}/>
        <path d="M440 104q-22 40-78 74M452 110q-10 40-40 76M462 106q8 44 44 80M474 100q24 46 84 80" fill="none" ${st(1.100, night ? WASHI : SUMI)} opacity=".32"/>
        <path d="M0 208q110-34 236-10t214 2 236-18 214 10v68H0z" fill="${P.far}" ${st(1.800)}/>
        <path d="M468 200h196q-80-12-196 0zM20 198q60-10 120 4z" fill="url(#pDots)" opacity=".2"/>
        ${mid}
      </g>
      <path d="M0 180h900" ${st(2.400)}/><path d="M0 184h900" ${st(1)} opacity=".5"/>
      ${Array.from({ length: 11 }, (_, i) => `<path d="M${i * 90 + 30} 180v-26M${i * 90 + 30} 157h9" fill="none" ${st(1.400)}/>`).join('')}<path d="M0 156h900" ${st(0.700)} opacity=".6"/>
      <g transform="translate(0 151)">${trainGroup(P.stripe)}</g>
      ${Array.from({ length: 11 }, (_, i) => `<path d="M${i * 90 + 70} 184v22" ${st(3.200, night ? '#0f1528' : CHA)}/>`).join('')}
      <g filter="url(#woodcut)">
        <path d="M0 222q170-28 360-12t300-6 240 12v44H0z" fill="${P.mid}" ${st(1.800)}/>
        <path d="M0 242q210-22 420-8t480-6v32H0z" fill="${P.near}" ${st(1.600)}/>
        <path d="M60 236l4-9M70 237l1-10M300 232l4-9M310 233l1-10M520 238l4-9M530 239l1-10M720 234l4-9M730 235l1-10" fill="none" ${st(1.200)} opacity=".5"/>
        <path d="M0 242q210-22 420-8l-60 26H0z" fill="url(#pDots)" opacity=".14"/>
        ${fore}
      </g>
      <rect class="sc-veil" width="900" height="260" fill="#0d1226"/>
      <g class="sc-stars" fill="${WASHI}">${[[96, 30], [200, 20], [330, 50], [470, 22], [560, 60], [690, 30], [820, 56], [880, 18]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.8"/>`).join('')}</g>
      <rect width="900" height="260" filter="url(#paperGrain)" opacity=".5" style="mix-blend-mode:multiply"/>
    </svg>${cartouche(P.title, P.seal)}`;
  }

  // ---------------------------------------------------------------- odds and ends
  // Each level wears a round seal with its season's kanji, like the crest on a line's rolling stock.
  const SEAL = { spring: '春', summer: '夏', autumn: '秋', winter: '冬', night: '星' };
  const seasonIcon = (s) => `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14.500" fill="var(--lv, ${SHU})" ${st(1.800, 'var(--ink, #1f1b18)')}/><circle cx="16" cy="16" r="11.600" fill="none" stroke="${WASHI}" stroke-width=".9" opacity=".8"/><text x="16" y="21.600" text-anchor="middle" style="fill:${WASHI};font:14.500px var(--f-pop)">${SEAL[s] || '線'}</text></svg>`;
  const machine = () => `<svg viewBox="0 0 200 240" aria-hidden="true">
    <path d="M36 234h128M56 238h88" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".3"/>
    <path d="M44 206h112v24H44z" fill="${AI}" ${st(3)}/>
    <path d="M30 116h140v94H30z" fill="${SHU}" ${st(3)}/><path d="M118 116h52v94h-52z" fill="url(#pDots)" opacity=".22"/>
    <path d="M38 124h124v78H38z" fill="none" ${st(1.200, WASHI)} opacity=".7"/>
    <circle cx="100" cy="72" r="66" fill="${WASHI}" ${st(3.200)}/>
    ${[[70, 72, SHU], [100, 48, KARASHI], [130, 74, ROKU], [86, 104, SORA], [118, 106, MOMO], [58, 102, KAKI], [100, 82, AI]].map(([x, y, c]) => `<g><circle cx="${x}" cy="${y}" r="14" fill="${c}" ${st(2)}/><path d="M${x - 14} ${y}a14 14 0 0 0 28 0z" fill="${WASHI}"/><path d="M${x - 14} ${y}a14 14 0 0 0 28 0z" fill="none" ${st(2)}/><path d="M${x - 14} ${y}h28" ${st(1.600)}/></g>`).join('')}
    <path d="M100 6a66 66 0 0 1 62 44q-30-26-62-26-34 0-58 22 16-36 58-40z" fill="${WASHI}" opacity=".35"/><path d="M54 40q18-22 46-22" fill="none" ${st(4, WASHI)} opacity=".9"/>
    <circle cx="100" cy="72" r="66" fill="none" ${st(3.200)}/>
    <circle cx="100" cy="158" r="22" fill="${WASHI}" ${st(3)}/><path d="M94 138h12v40H94z" fill="${KARASHI}" ${st(2.200)}/>
    <path d="M56 186h44v18H56z" fill="${SUMI}" ${st(2)}/>
    <text x="146" y="140" text-anchor="middle" style="fill:${WASHI};font:13px var(--f-pop)">ガチャ</text>
    <text x="146" y="196" text-anchor="middle" style="fill:${WASHI};font:900 9px var(--f-ui);letter-spacing:1px">一回 150円</text></svg>`;
  return { install, mascot, yokai, YOKAI, stamp, scene, machine, seasonIcon, hash, INKS, DEFS };
})();
