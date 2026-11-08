// Minna Line core: data, kana tools, conjugation, number readings, saved state, SRS, economy, quests, trophies, audio.
window.ML = (() => {
  'use strict';

  // ---------------------------------------------------------------- utils
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a) => a[(Math.random() * a.length) | 0];
  const uniqBy = (a, f) => { const s = new Set(); return a.filter((x) => { const k = f(x); if (s.has(k)) return false; s.add(k); return true; }); };
  const dayStr = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const hasKanji = (s) => /[一-鿿]/.test(s || '');
  const DAY = 864e5;
  const hashStr = (s) => { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
  const rng = (seed) => () => { seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };

  // ---------------------------------------------------------------- kana helpers
  const toHira = (s) => s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
  const VOWEL_OF = {};
  for (const k of window.KANA || []) if (k.set === 'h' && k.grp !== 'combo') VOWEL_OF[k.c] = { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' }[k.r.slice(-1)];
  Object.assign(VOWEL_OF, { ゃ: 'あ', ゅ: 'う', ょ: 'お', ぁ: 'あ', ぃ: 'い', ぅ: 'う', ぇ: 'え', ぉ: 'お' });
  const normKana = (s) => {
    s = toHira(String(s)).replace(/[～〜~\s　。、．.,!！?？「」『』・…]/g, '');
    let out = '';
    for (const ch of s) out += ch === 'ー' ? VOWEL_OF[out.slice(-1)] || '' : ch;
    return out;
  };
  const particleNorm = (s) => s.replace(/は/g, 'わ').replace(/へ/g, 'え').replace(/を/g, 'お');
  function romajiToKana(input, final) {
    const T = window.ROMAJI_TABLE || {};
    const s = input.toLowerCase().replace(/[āâ]/g, 'aa').replace(/[īî]/g, 'ii').replace(/[ūû]/g, 'uu').replace(/[ēê]/g, 'ee').replace(/[ōô]/g, 'ou');
    let out = '', i = 0;
    while (i < s.length) {
      const c = s[i];
      if (!/[a-z'\-]/.test(c)) { out += c; i++; continue; }
      if (c === 'n') {
        const nx = s[i + 1];
        if (nx === undefined) { out += final ? 'ん' : 'n'; i++; continue; }
        if (nx === "'") { out += 'ん'; i += 2; continue; }
        if (nx === 'n') { out += 'ん'; i += /[aiueoy]/.test(s[i + 2] || '') ? 1 : 2; continue; }
        if (!/[aiueoy]/.test(nx)) { out += 'ん'; i++; continue; }
      }
      if (c === s[i + 1] && /[bcdfghjkmpqrstvwxz]/.test(c)) { out += 'っ'; i++; continue; }
      if (c === 't' && s[i + 1] === 'c' && s[i + 2] === 'h') { out += 'っ'; i++; continue; }
      let hit = false;
      for (const L of [4, 3, 2, 1]) { const seg = s.substr(i, L); if (T[seg]) { out += T[seg]; i += L; hit = true; break; } }
      if (!hit) { if (!final) { out += s.slice(i); break; } i++; }
    }
    return out;
  }
  function answerVariants(kana) {
    const alts = new Set();
    String(kana).replace(/[～〜]/g, '').split(/\s*[\/／]\s*/).forEach((p) => {
      const m = p.match(/^(.*?)[（(](.*?)[）)](.*)$/);
      if (m) { alts.add(m[1] + m[3]); alts.add(m[2]); } else alts.add(p);
    });
    const out = new Set();
    for (const a of alts) {
      if (/[［\[]/.test(a)) { out.add(a.replace(/[［\[]([^］\]]*)[］\]]/g, '$1')); out.add(a.replace(/[［\[][^］\]]*[］\]]/g, '')); } else out.add(a);
    }
    return [...out].map((a) => particleNorm(normKana(a))).filter(Boolean);
  }
  const typedMatches = (input, kana) => answerVariants(kana).includes(particleNorm(normKana(romajiToKana(input.trim(), true))));
  const speakable = (kana) => String(kana).split(/\s*[\/／]\s*/)[0].replace(/[（(].*?[）)]/g, '').replace(/[～〜［］\[\]]/g, '');

  // ---------------------------------------------------------------- data
  // vocab.js comes from the lesson notes; the overlay holds the cleaned wording, grouping and usage on top of it.
  const OVERLAY = window.VOCAB_OVERLAY || {};
  const CORE = [...(window.VOCAB || []).map((v) => ({ ...v, ...OVERLAY[`${v.L}:${v.kana}`] })), ...(window.VOCAB_ADD || []).map((v) => ({ ...v, id: v.L > 100 ? `${v.L}:${v.kana}:${v.kanji || ''}` : `${v.L}:${v.kana}` }))].filter((v) => v.kana && v.en);
  const coreKey = new Set(CORE.map((v) => v.kana + '|' + (v.kanji || '')));
  const EXTRA = (window.VOCAB_EXTRA || []).filter((v) => v.kana && v.en && !coreKey.has(v.kana + '|' + (v.kanji || ''))).map((v) => ({ ...v, ...OVERLAY[`${v.L}:${v.kana}`], id: `${v.L}:${v.kana}${v.kanji ? ':' + v.kanji : ''}` }));
  const VOCAB = uniqBy([...CORE, ...EXTRA], (v) => v.id);
  const VBY = new Map(VOCAB.map((v) => [v.id, v]));
  const KANA = window.KANA || [];
  const levelOfL = (L) => (L < 100 ? 'N5' : L < 200 ? 'N4' : L < 300 ? 'N3' : L < 400 ? 'N2' : 'N1');
  // Each N4/N3 kanji sits at the first lesson of its level whose words use it, so it turns up alongside them.
  const KANJI = (() => {
    const first = {};
    for (const v of VOCAB) if (v.L > 100) for (const c of v.kanji || '') if (hasKanji(c) && !(first[c] <= v.L)) first[c] = v.L;
    const place = (k, i) => {
      const [lo, hi] = k.level === 'N4' ? [126, 150] : k.level === 'N2' ? [301, 324] : k.level === 'N1' ? [401, 424] : [201, 224];
      const f = first[k.k];
      return f >= lo && f <= hi ? f : lo + (i % (hi - lo + 1));
    };
    const W = window.KANJI_WORDS || {};
    return [...(window.KANJI || []).map((k) => ({ ...k, level: 'N5' })),
      ...(window.KANJI_MORE || []).map((k, i) => ({ ...k, ...W[k.k], lesson: place(k, i) })), ...(window.KANJI_EXTRA || [])];
  })();
  const KBY = new Map(KANJI.map((k) => [k.k, k]));
  const STUDY = window.GRAMMAR_STUDY || {};
  const GRAMMAR = (window.GRAMMAR || []).map((g) => {
    const st = STUDY[g.id];
    return st ? { ...g, title: st.title || g.title, meaning: st.meaning || g.meaning, examples: st.examples || g.examples, study: st } : g;
  }).sort((a, b) => a.lesson - b.lesson);
  const LESSON_GUIDE = window.LESSON_GUIDE || {};
  const GBY = new Map(GRAMMAR.map((g) => [g.id, g]));
  const EXAMPLES = GRAMMAR.flatMap((g) => g.examples.map((x, i) => ({ ...x, id: `${g.id}|${i}`, L: g.lesson, g, kana: String(x.jp).replace(/\{[^|}]+\|([^}]+)\}/g, '$1') })));
  const EBY = new Map(EXAMPLES.map((e) => [e.id, e]));
  const READING = (window.READING || []).slice().sort((a, b) => a.lesson - b.lesson || (a.type < b.type ? -1 : 1));
  const RBY = new Map(READING.map((r) => [r.id, r]));
  const GUIDE = window.GUIDE || [];
  const STROKES = window.STROKES || {};
  const rubyToKana = (s) => String(s).replace(/\{[^|}]+\|([^}]+)\}/g, '$1');
  const rubyToKanji = (s) => String(s).replace(/\{([^|}]+)\|[^}]+\}/g, '$1');
  const quizzable = (v) => v.cat !== 'proper';
  const posGroup = (v) => ((v.pos || 'n').startsWith('v') ? 'v' : v.pos === 'i-adj' || v.pos === 'na-adj' ? 'adj' : v.pos === 'exp' ? 'exp' : 'n');
  const vKey = (v) => 'v|' + v.id;
  // Word groups for the study lists, in display order.
  const GROUPS = [['verbs', 'Verbs', 'どうし'], ['i-adj', 'い-adjectives', 'いけいようし'], ['na-adj', 'な-adjectives', 'なけいようし'], ['people', 'People', 'ひと'], ['places', 'Places', 'ばしょ'], ['things', 'Things', 'もの'], ['food', 'Food and drink', 'たべもの'], ['body', 'Body and health', 'からだ'], ['nature', 'Nature and weather', 'しぜん'], ['time', 'Time', 'じかん'], ['numbers', 'Numbers', 'かず'], ['questions', 'Question words', 'ぎもんし'], ['adverbs', 'Adverbs', 'ふくし'], ['connectors', 'Connectors', 'つなぎ'], ['suffixes', 'Suffixes and counters', 'じょすうし'], ['phrases', 'Phrases', 'フレーズ'], ['countries', 'Countries and languages', 'くに'], ['names', 'Names', 'なまえ'], ['other', 'Other', 'その ほか']];
  const CAT_GROUP = { misc: 'things', people: 'people', family: 'people', nature: 'nature', weather: 'nature', time: 'time', calendar: 'time', adverbs: 'adverbs', expressions: 'phrases', clothes: 'things', things: 'things', school: 'things', colors: 'things', food: 'food', places: 'places', directions: 'places', counters: 'suffixes', body: 'body', questions: 'questions' };
  const groupOf = (v) => v.grp || (/^v[123]$/.test(v.pos) ? 'verbs' : v.pos === 'i-adj' || v.pos === 'na-adj' ? v.pos : v.pos === 'adv' ? 'adverbs' : v.pos === 'exp' ? 'phrases' : v.pos === 'q' ? 'questions' : CAT_GROUP[v.cat] || (v.cat === 'proper' ? 'names' : v.cat === 'country' ? 'countries' : 'other'));
  const exCache = new Map();
  function exampleFor(v) {
    if (exCache.has(v.id)) return exCache.get(v.id);
    const k = speakable(v.kana).replace(/ます$/, '');
    let ex = null;
    if (k.length >= 2 && !hasKanji(k) && v.pos !== 'exp') {
      const hits = EXAMPLES.filter((e) => e.kana.includes(k));
      ex = hits.sort((a, b) => Math.abs(a.L - v.L) - Math.abs(b.L - v.L))[0] || null;
    }
    exCache.set(v.id, ex);
    return ex;
  }

  const TITLES = {
    0: ['Kana & Greetings', 'かな・あいさつ'], 1: ['Introductions', 'はじめまして'], 2: ['This and That', 'これ・それ・あれ'],
    3: ['Places and Prices', 'ここ・そこ・あそこ'], 4: ['Time and Days', 'いま なんじですか'], 5: ['Going Places', 'いきます・きます'],
    6: ['Daily Actions', 'たべます・のみます'], 7: ['Giving and Receiving', 'あげます・もらいます'], 8: ['Adjectives', 'きれいな まち'],
    9: ['Likes and Skills', 'すきです・じょうずです'], 10: ['There Is, There Are', 'あります・います'], 11: ['Counting', 'いくつ ありますか'],
    12: ['Comparisons', 'どちらが はやいですか'], 13: ['Wants', 'ほしい・～たい'], 14: ['Te-form Requests', '～て ください'],
    15: ['Permission', '～ても いいですか'], 16: ['Linking Actions', '～てから'], 17: ['Nai-form', '～ないで ください'],
    18: ['Dictionary Form', '～ことが できます'], 19: ['Experiences', '～たことが あります'], 20: ['Casual Speech', 'ふつうたい'],
    21: ['Thoughts and Quotes', '～と おもいます'], 22: ['Describing Nouns', 'わたしが すんで いる まち'], 23: ['When and If', '～とき・～と'],
    24: ['Favours', '～て くれます'], 25: ['Conditionals', '～たら・～ても'], 26: ['N5 Word Bank', 'ことばの くら'],
  };
  const N4_TITLES = { 126: ['Explaining Why', '～んです'], 127: ['Can Do', 'できます・かのうけい'], 128: ['Doing Two Things', '～ながら'], 129: ['Finished and Sorry', '～て しまいました'], 130: ['Getting Ready', '～て おきます'], 131: ['Plans and Intentions', '～ようと おもいます'], 132: ['Advice and Guessing', '～ほうが いいです'], 133: ['Commands and Signs', 'めいれいけい'], 134: ['Following Instructions', '～とおりに'], 135: ['If, the ば Way', '～ば'], 136: ['So That', '～ように'], 137: ['The Passive', 'うけみ'], 138: ['Nominalising', '～のは・～のが'], 139: ['Because, Softly', '～ので'], 140: ['Whether or Not', '～か どうか'], 141: ['Favours with Respect', '～て いただきます'], 142: ['In Order To', '～ために'], 143: ['Looks Like', '～そうです'], 144: ['Too Much, Easy, Hard', '～すぎます'], 145: ['In Case Of', '～ばあいは'], 146: ['Just About To', '～ところです'], 147: ['I Heard', '～そうです・～ようです'], 148: ['Making Someone Do', 'しえき'], 149: ['Honorific Speech', 'そんけいご'], 150: ['Humble Speech', 'けんじょうご'] };
  const N3_TITLES = { 201: ['Time and Schedules', 'じかん・よてい'], 202: ['Family and Relationships', 'かぞく・にんげんかんけい'], 203: ['Food and Cooking', 'しょく・りょうり'], 204: ['Daily Life and Home', 'くらし・すまい'], 205: ['Transport and Travel', 'こうつう・りょこう'], 206: ['Town and Directions', 'まち・みちあんない'], 207: ['Money and Shopping', 'おかね・かいもの'], 208: ['Clothes, Colours, Shapes', 'ふく・いろ・かたち'], 209: ['Numbers and Quantity', 'かず・りょう'], 210: ['Hobbies and Events', 'しゅみ・ぎょうじ'], 211: ['Post, Phone, Services', 'ゆうびん・でんわ'], 212: ['Life Stages', 'じんせい'], 213: ['Society and News', 'しゃかい・ニュース'], 214: ['Industry and Materials', 'さんぎょう・ざいりょう'], 215: ['Nature and Weather', 'しぜん・てんき'], 216: ['Body and Health', 'からだ・けんこう'], 217: ['Feelings and Personality', 'きもち・せいかく'], 218: ['School and University', 'がっこう・だいがく'], 219: ['Work and Careers', 'しごと・キャリア'], 220: ['Computers and Internet', 'パソコン・ネット'], 221: ['Sound and Manner Words', 'ぎおんご・ぎたいご'], 222: ['Compound Verbs', 'ふくごうどうし'], 223: ['Core Verbs', 'きほんどうし'], 224: ['Katakana and Idioms', 'カタカナご・かんようく'] };
  const N2_TITLES = { 301: ['Time and Change', 'じかん・へんか'], 302: ['People and Relationships', 'ひと・かんけい'], 303: ['Personality and Attitude', 'せいかく・たいど'], 304: ['Emotions and the Mind', 'かんじょう・こころ'], 305: ['Health and Medicine', 'けんこう・いりょう'], 306: ['Home and Daily Life', 'せいかつ'], 307: ['Food and Culture', 'しょく・ぶんか'], 308: ['Town and Environment', 'まち・かんきょう'], 309: ['Transport and Travel', 'こうつう・りょこう'], 310: ['Work and Business', 'しごと・ビジネス'], 311: ['Economy and Money', 'けいざい'], 312: ['Politics and Law', 'せいじ・ほうりつ'], 313: ['Society and Issues', 'しゃかい・もんだい'], 314: ['Education and Research', 'きょういく・けんきゅう'], 315: ['Science and Technology', 'かがく・ぎじゅつ'], 316: ['Nature and Disasters', 'しぜん・さいがい'], 317: ['Media and Communication', 'メディア'], 318: ['Arts, Sport, Leisure', 'げいじゅつ・スポーツ'], 319: ['Abstract Ideas', 'ちゅうしょうご'], 320: ['Adverbs and Degree', 'ふくし'], 321: ['Easily Confused Verbs', 'まぎらわしい どうし'], 322: ['Compound Verbs', 'ふくごうどうし'], 323: ['Katakana Words', 'カタカナご'], 324: ['Idioms and Proverbs', 'かんようく・ことわざ'] };
  const N1_TITLES = { 401: ['History and Tradition', 'れきし・でんとう'], 402: ['Relations and Manners', 'にんげんかんけい'], 403: ['Character and Behaviour', 'じんかく'], 404: ['Psychology', 'しんり'], 405: ['Medicine and Welfare', 'いりょう・ふくし'], 406: ['Lifestyle and Consumption', 'しょうひ'], 407: ['Culture and the Arts', 'ぶんか・げいじゅつ'], 408: ['Land and Environment', 'こくど・かんきょう'], 409: ['Infrastructure', 'インフラ'], 410: ['Corporate and Management', 'けいえい'], 411: ['Finance and Markets', 'きんゆう'], 412: ['Government and Justice', 'せいじ・しほう'], 413: ['International Affairs', 'こくさい'], 414: ['Academia and Research', 'がくじゅつ'], 415: ['Science and Engineering', 'かがく・こうがく'], 416: ['Natural Science', 'しぜんかがく'], 417: ['Journalism and Rhetoric', 'ほうどう'], 418: ['Philosophy and Thought', 'しそう'], 419: ['Formal Nouns', 'かたい ことば'], 420: ['Literary Adverbs', 'ぶんしょうご'], 421: ['Nuanced Verbs', 'どうし'], 422: ['Formal Set Phrases', 'かんようひょうげん'], 423: ['Four-character Idioms', 'よじじゅくご'], 424: ['Proverbs and Sayings', 'ことわざ'] };
  const LEVELS = [
    { id: 'N5', name: 'N5', title: 'Spring Line', jp: 'はるの せん', season: 'spring', blurb: 'Minna no Nihongo I · Lessons 1–25' },
    { id: 'N4', name: 'N4', title: 'Summer Line', jp: 'なつの せん', season: 'summer', blurb: 'Minna no Nihongo II · Lessons 26–50' },
    { id: 'N3', name: 'N3', title: 'Autumn Line', jp: 'あきの せん', season: 'autumn', blurb: '24 themed units and the Reading Academy' },
    { id: 'N2', name: 'N2', title: 'Winter Line', jp: 'ふゆの せん', season: 'winter', blurb: '24 themed units and the N2 Reading Academy' },
    { id: 'N1', name: 'N1', title: 'Starlight Line', jp: 'ほしの せん', season: 'night', blurb: '24 themed units and the N1 Reading Academy' },
  ];
  const lessonName = (L) => (L >= 1 && L <= 25 ? `Lesson ${L}` : L >= 126 && L <= 150 ? `Lesson ${L - 100}` : L >= 201 && L <= 224 ? `Unit ${L - 200}` : L >= 301 && L <= 324 ? `Unit ${L - 300}` : L >= 401 && L <= 424 ? `Unit ${L - 400}` : '');
  const STATIONS = [];
  for (let L = 0; L <= 20; L++) STATIONS.push({ id: 'L' + L, L, line: 'M', code: String(L).padStart(2, '0'), name: TITLES[L][0], jp: TITLES[L][1], kind: L === 0 ? 'kana' : 'lesson' });
  STATIONS.push({ id: 'numbers', line: 'X', code: '数', name: 'Numbers Depot', jp: 'かずと じかん', kind: 'numbers' });
  for (let L = 21; L <= 26; L++) STATIONS.push({ id: 'L' + L, L, line: 'X', code: String(L).padStart(2, '0'), name: TITLES[L][0], jp: TITLES[L][1], kind: 'lesson' });
  STATIONS.push({ id: 'kanji', line: 'X', code: '漢', name: 'Kanji Hall', jp: 'かんじの ひろば', kind: 'kanji' });
  STATIONS.push({ id: 'verbs', line: 'X', code: '活', name: 'Verb Forge', jp: 'どうしの かたち', kind: 'verbs' });
  STATIONS.push({ id: 'exam', line: 'X', code: '試', name: 'N5 Mock Exam', jp: 'もぎしけん', kind: 'exam' });
  for (let L = 126; L <= 150; L++) STATIONS.push({ id: 'L' + L, L, line: 'S', code: String(L - 100), name: N4_TITLES[L][0], jp: N4_TITLES[L][1], kind: 'lesson' });
  STATIONS.push({ id: 'kanji4', line: 'SX', code: '漢', name: 'N4 Kanji Hall', jp: 'かんじの ひろば', kind: 'kanji' });
  STATIONS.push({ id: 'verbs4', line: 'SX', code: '活', name: 'N4 Verb Forge', jp: 'どうしの かたち', kind: 'verbs' });
  STATIONS.push({ id: 'exam4', line: 'SX', code: '試', name: 'N4 Mock Exam', jp: 'もぎしけん', kind: 'exam' });
  for (let L = 201; L <= 224; L++) STATIONS.push({ id: 'L' + L, L, line: 'K', code: String(L - 200).padStart(2, '0'), name: N3_TITLES[L][0], jp: N3_TITLES[L][1], kind: 'lesson' });
  STATIONS.push({ id: 'read3', line: 'KX', code: '読', name: 'Reading Academy', jp: 'どっかい アカデミー', kind: 'academy' });
  STATIONS.push({ id: 'kanji3', line: 'KX', code: '漢', name: 'N3 Kanji Hall', jp: 'かんじの ひろば', kind: 'kanji' });
  STATIONS.push({ id: 'exam3', line: 'KX', code: '試', name: 'N3 Mock Exam', jp: 'もぎしけん', kind: 'exam' });
  for (let L = 301; L <= 324; L++) STATIONS.push({ id: 'L' + L, L, line: 'W', code: String(L - 300).padStart(2, '0'), name: N2_TITLES[L][0], jp: N2_TITLES[L][1], kind: 'lesson' });
  STATIONS.push({ id: 'read2', line: 'WX', code: '読', name: 'N2 Reading Academy', jp: 'どっかい アカデミー', kind: 'academy' });
  STATIONS.push({ id: 'kanji2', line: 'WX', code: '漢', name: 'N2 Kanji Hall', jp: 'かんじの ひろば', kind: 'kanji' });
  STATIONS.push({ id: 'exam2', line: 'WX', code: '試', name: 'N2 Mock Exam', jp: 'もぎしけん', kind: 'exam' });
  for (let L = 401; L <= 424; L++) STATIONS.push({ id: 'L' + L, L, line: 'Y', code: String(L - 400).padStart(2, '0'), name: N1_TITLES[L][0], jp: N1_TITLES[L][1], kind: 'lesson' });
  STATIONS.push({ id: 'read1', line: 'YX', code: '読', name: 'N1 Reading Academy', jp: 'どっかい アカデミー', kind: 'academy' });
  STATIONS.push({ id: 'kanji1', line: 'YX', code: '漢', name: 'N1 Kanji Hall', jp: 'かんじの ひろば', kind: 'kanji' });
  STATIONS.push({ id: 'exam1', line: 'YX', code: '試', name: 'N1 Mock Exam', jp: 'もぎしけん', kind: 'exam' });
  for (const st of STATIONS) st.level = { M: 'N5', X: 'N5', S: 'N4', SX: 'N4', K: 'N3', KX: 'N3', W: 'N2', WX: 'N2', Y: 'N1', YX: 'N1' }[st.line];
  const SBY = new Map(STATIONS.map((s) => [s.id, s]));

  // ---------------------------------------------------------------- conjugation
  const I2A = { い: 'わ', き: 'か', ぎ: 'が', し: 'さ', ち: 'た', に: 'な', び: 'ば', み: 'ま', り: 'ら' };
  const I2U = { い: 'う', き: 'く', ぎ: 'ぐ', し: 'す', ち: 'つ', に: 'ぬ', び: 'ぶ', み: 'む', り: 'る' };
  const I2E = { い: 'え', き: 'け', ぎ: 'げ', し: 'せ', ち: 'て', に: 'ね', び: 'べ', み: 'め', り: 'れ' };
  const I2O = { い: 'お', き: 'こ', ぎ: 'ご', し: 'そ', ち: 'と', に: 'の', び: 'ぼ', み: 'も', り: 'ろ' };
  const NO_CONJ = new Set(['いらっしゃいます', 'しつれいします', 'いただきます', 'くださいます', 'おっしゃいます', 'なさいます', 'ございます', 'まいります', 'いたします', 'もうします', 'めしあがります', 'うかがいます', 'ごらんに なります']);
  // Verbs you can't do on purpose: no "let's", "please" or "want to" forms.
  const NON_VOL = new Set(['あります', 'わかります', 'できます', 'かかります', 'ふります', 'つかれます', 'いります', 'なります', 'くれます', 'みえます', 'きこえます', 'たります', 'うまれます', 'うれます', 'こわれます', 'われます', 'おれます', 'やぶれます', 'よごれます', 'はずれます', 'なおります', 'かたづきます', 'つづきます', 'のこります', 'やみます', 'ひえます', 'あたります', 'みつかります', 'にえます', 'かわります', 'くさります', 'おちます', 'ふえます', 'へります', 'あがります', 'さがります', 'きれます', 'とれます', 'なくなります', 'こみます', 'ひかります', 'まわります', 'かわきます', 'ぬれます', 'すべります', 'きまります', 'とどきます', 'やけます', 'すみます', 'もえます', 'わきます', 'ゆれます', 'たおれます', 'ぶつかります', 'おくれます', 'まにあいます']);
  // Every N5 pattern built on a base form. L = the MnN lesson that teaches it. vol = needs a verb you can choose to do.
  const VERB_PATTERNS = {
    mneg: { label: 'polite negative (ません)', base: 'stem', suf: 'ません', L: 4, fam: 'polite' },
    mpast: { label: 'polite past (ました)', base: 'stem', suf: 'ました', L: 4, fam: 'polite' },
    mpastneg: { label: 'polite past negative (ませんでした)', base: 'stem', suf: 'ませんでした', L: 4, fam: 'polite' },
    mshou: { label: "let's (ましょう)", base: 'stem', suf: 'ましょう', L: 6, vol: 1, fam: 'polite' },
    mseni: { label: "won't you? (ませんか)", base: 'stem', suf: 'ませんか', L: 6, vol: 1, fam: 'polite' },
    mtai: { label: 'want to (たいです)', base: 'stem', suf: 'たいです', L: 13, vol: 1, fam: 'pattern' },
    tekudasai: { label: 'please do (て ください)', base: 'te', suf: ' ください', L: 14, vol: 1, fam: 'pattern' },
    teimasu: { label: 'doing now (て います)', base: 'te', suf: ' います', L: 14, fam: 'pattern' },
    temoii: { label: 'may (ても いいです)', base: 'te', suf: 'も いいです', L: 15, vol: 1, fam: 'pattern' },
    tehaikenai: { label: 'must not (ては いけません)', base: 'te', suf: 'は いけません', L: 15, vol: 1, fam: 'pattern' },
    tekara: { label: 'after doing (てから)', base: 'te', suf: 'から', L: 16, vol: 1, fam: 'pattern' },
    naidekudasai: { label: "please don't (ないで ください)", base: 'nai', suf: 'で ください', L: 17, vol: 1, fam: 'pattern' },
    nakereba: { label: 'must (なければ なりません)', base: 'nai', cut: 1, suf: 'ければ なりません', L: 17, vol: 1, fam: 'pattern' },
    nakutemoii: { label: "don't have to (なくても いいです)", base: 'nai', cut: 1, suf: 'くても いいです', L: 17, vol: 1, fam: 'pattern' },
    koto: { label: 'can do (ことが できます)', base: 'dict', suf: ' ことが できます', L: 18, vol: 1, fam: 'pattern' },
    maeni: { label: 'before doing (まえに)', base: 'dict', suf: ' まえに', L: 18, vol: 1, fam: 'pattern' },
    takoto: { label: 'have done (たことが あります)', base: 'ta', suf: ' ことが あります', L: 19, vol: 1, fam: 'pattern' },
    tari: { label: 'do things like (たり)', base: 'ta', suf: 'り', L: 19, vol: 1, fam: 'pattern' },
    tara: { label: 'if / when (たら)', base: 'ta', suf: 'ら', L: 25, fam: 'pattern' },
    temo: { label: 'even if (ても)', base: 'te', suf: 'も', L: 25, fam: 'pattern' },
    nagara: { label: 'while doing (ながら)', base: 'stem', suf: 'ながら', L: 128, vol: 1, fam: 'n4p' },
    teshimau: { label: 'finished, sadly (て しまいました)', base: 'te', suf: ' しまいました', L: 129, fam: 'n4p' },
    teoku: { label: 'do in advance (て おきます)', base: 'te', suf: ' おきます', L: 130, vol: 1, fam: 'n4p' },
    tahouga: { label: 'should (た ほうが いいです)', base: 'ta', suf: ' ほうが いいです', L: 132, vol: 1, fam: 'n4p' },
    temiru: { label: 'try doing (て みます)', base: 'te', suf: ' みます', L: 140, vol: 1, fam: 'n4p' },
    soukan: { label: 'looks like (そうです)', base: 'stem', suf: 'そうです', L: 143, fam: 'n4p' },
    sugiru: { label: 'too much (すぎます)', base: 'stem', suf: 'すぎます', L: 144, fam: 'n4p' },
    yasui: { label: 'easy to (やすいです)', base: 'stem', suf: 'やすいです', L: 144, vol: 1, fam: 'n4p' },
    nikui: { label: 'hard to (にくいです)', base: 'stem', suf: 'にくいです', L: 144, vol: 1, fam: 'n4p' },
  };
  function verbForms(v, gForce) {
    const masu = v.kana.replace(/\s/g, '');
    const g = gForce || +v.pos[1];
    const stem = masu.slice(0, -2);
    const p = stem.slice(0, -1), last = stem.slice(-1);
    let f;
    if (g === 3 && last === 'し') f = { dict: p + 'する', nai: p + 'しない', te: p + 'して' };
    else if (g === 3) f = { dict: p + 'くる', nai: p + 'こない', te: p + 'きて' };
    else if (g === 2) f = { dict: stem + 'る', nai: stem + 'ない', te: stem + 'て' };
    else {
      const iku = /行/.test(v.kanji || '') || /(^|て)いきます$/.test(masu);
      const te = iku ? p + 'って' : 'いちり'.includes(last) ? p + 'って' : 'みびに'.includes(last) ? p + 'んで' : last === 'き' ? p + 'いて' : last === 'ぎ' ? p + 'いで' : p + 'して';
      f = { dict: p + (I2U[last] || 'う'), nai: masu === 'あります' ? 'ない' : p + (I2A[last] || 'わ') + 'ない', te };
    }
    f.ta = f.te.replace(/て$/, 'た').replace(/で$/, 'だ');
    f.nakatta = f.nai.replace(/い$/, 'かった');
    f.stem = stem;
    if (g === 3) {
      const suru = last === 'し';
      Object.assign(f, suru
        ? { pot: p + 'できる', vol: p + 'しよう', pass: p + 'される', caus: p + 'させる', causpass: p + 'させられる', imper: p + 'しろ', ba: p + 'すれば' }
        : { pot: p + 'こられる', vol: p + 'こよう', pass: p + 'こられる', caus: p + 'こさせる', causpass: p + 'こさせられる', imper: p + 'こい', ba: p + 'くれば' });
    } else if (g === 2) {
      Object.assign(f, { pot: stem + 'られる', vol: stem + 'よう', pass: stem + 'られる', caus: stem + 'させる', causpass: stem + 'させられる', imper: stem + 'ろ', ba: stem + 'れば' });
    } else {
      const a = p + (I2A[last] || 'わ'), e = p + (I2E[last] || 'え');
      Object.assign(f, { pot: e + 'る', vol: p + (I2O[last] || 'お') + 'う', pass: a + 'れる', caus: a + 'せる', causpass: a + 'せられる', imper: e, ba: e + 'ば' });
    }
    f.prohib = f.dict + 'な';
    for (const [k, P] of Object.entries(VERB_PATTERNS)) f[k] = applyPattern(P, f[P.base]);
    return f;
  }
  const applyPattern = (P, base) => (P.cut ? base.slice(0, -P.cut) : base) + P.suf;
  function adjForms(a, flip) {
    const raw = a.kana.replace(/[（(].*?[）)]/g, '').trim();
    const parts = raw.split(/\s+/), base = parts.pop(), pre = parts.length ? parts.join(' ') + ' ' : '';
    let type = a.pos === 'i-adj' ? 'i' : 'na';
    if (flip) type = type === 'i' ? 'na' : 'i';
    if (type === 'i') {
      const st = base === 'いい' ? 'よ' : base.replace(/い$/, '');
      return { aneg: pre + st + 'くないです', apast: pre + st + 'かったです', apastneg: pre + st + 'くなかったです', ate: pre + st + 'くて' };
    }
    const b = base.replace(/な$/, '');
    return { aneg: pre + b + 'じゃ ありません', apast: pre + b + 'でした', apastneg: pre + b + 'じゃ ありませんでした', ate: pre + b + 'で' };
  }
  const FORMS = {
    te: { label: 'て-form', verb: true, L: 14, fam: 'plain' }, nai: { label: 'ない-form', verb: true, L: 17, fam: 'plain' }, dict: { label: 'dictionary form', verb: true, L: 18, fam: 'plain' },
    ta: { label: 'た-form', verb: true, L: 19, fam: 'plain' }, nakatta: { label: 'plain past negative', verb: true, L: 20, fam: 'plain' },
    pot: { label: 'potential (can do)', verb: true, L: 127, vol: 1, fam: 'n4' }, vol: { label: "volitional (let's, plain)", verb: true, L: 131, vol: 1, fam: 'n4' },
    imper: { label: 'imperative (command)', verb: true, L: 133, vol: 1, fam: 'n4' }, prohib: { label: "prohibitive (don't!)", verb: true, L: 133, vol: 1, fam: 'n4' },
    ba: { label: 'ば conditional', verb: true, L: 135, fam: 'n4' }, pass: { label: 'passive', verb: true, L: 137, vol: 1, fam: 'n4' },
    caus: { label: 'causative', verb: true, L: 148, vol: 1, fam: 'n4' }, causpass: { label: 'causative-passive', verb: true, L: 213, vol: 1, fam: 'n4' },
    ...Object.fromEntries(Object.entries(VERB_PATTERNS).map(([k, P]) => [k, { ...P, verb: true }])),
    aneg: { label: 'negative', adj: true, L: 8, fam: 'adj' }, apast: { label: 'past', adj: true, L: 12, fam: 'adj' }, apastneg: { label: 'past negative', adj: true, L: 12, fam: 'adj' }, ate: { label: 'て-form (joining)', adj: true, L: 16, fam: 'adj' },
  };
  const MASU = ['mneg', 'mpast', 'mpastneg'];
  const CONJ_BY_LESSON = {
    4: MASU, 5: MASU, 6: [...MASU, 'mshou', 'mseni'], 7: [...MASU, 'mshou', 'mseni'], 8: ['aneg'], 9: MASU, 10: MASU, 11: MASU, 12: ['apast', 'apastneg'], 13: ['mtai', ...MASU],
    14: ['te', 'tekudasai', 'teimasu'], 15: ['te', 'temoii', 'tehaikenai'], 16: ['te', 'tekara', 'ate'], 17: ['nai', 'naidekudasai', 'nakereba', 'nakutemoii'], 18: ['dict', 'koto', 'maeni'], 19: ['ta', 'takoto', 'tari'],
    20: ['dict', 'nai', 'ta', 'nakatta'], 21: ['dict', 'nai', 'ta'], 22: ['dict', 'nai', 'ta'], 23: ['dict', 'ta'], 24: ['te', 'tekudasai'], 25: ['tara', 'temo'],
    126: ['dict', 'nai', 'ta'], 127: ['pot'], 128: ['nagara'], 129: ['teshimau'], 130: ['teoku'], 131: ['vol'], 132: ['tahouga'], 133: ['imper', 'prohib'], 134: ['ta', 'te'], 135: ['ba'], 136: ['pot', 'nai'], 137: ['pass'], 138: ['dict'], 139: ['te'], 140: ['temiru'], 141: ['te'], 142: ['dict'], 143: ['soukan'], 144: ['sugiru', 'yasui', 'nikui'], 145: ['ta'], 146: ['ta', 'dict'], 147: ['dict'], 148: ['caus'],
  };
  const conjVerbs = (maxL) => VOCAB.filter((v) => /^v[123]$/.test(v.pos) && v.L <= maxL && !NO_CONJ.has(v.kana) && !(v.kana === 'おります' && !/降/.test(v.kanji || '')));
  const conjAdjs = (maxL) => VOCAB.filter((v) => (v.pos === 'i-adj' || v.pos === 'na-adj') && v.L <= maxL && v.L > 0);
  const conjAnswer = (form, v) => (FORMS[form].verb ? verbForms(v)[form] : adjForms(v)[form]);
  const canForm = (form, v) => !(FORMS[form].vol && NON_VOL.has(v.kana.replace(/\s/g, '')));

  // ---------------------------------------------------------------- number readings (MnN L3, L4, L5, L11)
  const D1 = ['', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];
  function under10k(n) {
    const th = Math.floor(n / 1000), h = Math.floor((n % 1000) / 100), t = Math.floor((n % 100) / 10), o = n % 10;
    let s = '';
    if (th) s += th === 1 ? 'せん' : th === 3 ? 'さんぜん' : th === 8 ? 'はっせん' : D1[th] + 'せん';
    if (h) s += h === 1 ? 'ひゃく' : h === 3 ? 'さんびゃく' : h === 6 ? 'ろっぴゃく' : h === 8 ? 'はっぴゃく' : D1[h] + 'ひゃく';
    if (t) s += (t === 1 ? '' : D1[t]) + 'じゅう';
    if (o) s += D1[o];
    return s;
  }
  function numKana(n) {
    if (n === 0) return 'ゼロ';
    const man = Math.floor(n / 10000), rest = n % 10000;
    return (man ? under10k(man) + 'まん' : '') + (rest ? under10k(rest) : '');
  }
  const HOURS = ['れいじ', 'いちじ', 'にじ', 'さんじ', 'よじ', 'ごじ', 'ろくじ', 'しちじ', 'はちじ', 'くじ', 'じゅうじ', 'じゅういちじ', 'じゅうにじ'];
  const FUN1 = ['', 'いっぷん', 'にふん', 'さんぷん', 'よんぷん', 'ごふん', 'ろっぷん', 'ななふん', 'はっぷん', 'きゅうふん'];
  function funKana(m) {
    if (!m) return '';
    const t = Math.floor(m / 10), o = m % 10;
    if (!o) return (t === 1 ? '' : D1[t]) + 'じゅっぷん';
    return (t ? (t === 1 ? '' : D1[t]) + 'じゅう' : '') + FUN1[o];
  }
  const timeKana = (h, m) => HOURS[h] + (m === 30 ? 'はん' : funKana(m));
  const MONTHS = ['', 'いちがつ', 'にがつ', 'さんがつ', 'しがつ', 'ごがつ', 'ろくがつ', 'しちがつ', 'はちがつ', 'くがつ', 'じゅうがつ', 'じゅういちがつ', 'じゅうにがつ'];
  const DAYS_SPECIAL = { 1: 'ついたち', 2: 'ふつか', 3: 'みっか', 4: 'よっか', 5: 'いつか', 6: 'むいか', 7: 'なのか', 8: 'ようか', 9: 'ここのか', 10: 'とおか', 14: 'じゅうよっか', 20: 'はつか', 24: 'にじゅうよっか' };
  function dayKana(d) {
    if (DAYS_SPECIAL[d]) return DAYS_SPECIAL[d];
    const t = Math.floor(d / 10), o = d % 10;
    return (t > 1 ? D1[t] : '') + 'じゅう' + ['', 'いち', 'に', 'さん', 'よっか', 'ご', 'ろく', 'しち', 'はち', 'く'][o] + 'にち';
  }
  // Counters 1–10, written out in full (the sound changes are what learners need to memorise).
  const COUNTERS = {
    tsu: { label: 'things (～つ)', words: ['ひとつ', 'ふたつ', 'みっつ', 'よっつ', 'いつつ', 'むっつ', 'ななつ', 'やっつ', 'ここのつ', 'とお'], items: [['🍎', 'りんご'], ['🍊', 'みかん'], ['🥚', 'たまご'], ['🍙', 'おにぎり']] },
    nin: { label: 'people (～にん)', words: ['ひとり', 'ふたり', 'さんにん', 'よにん', 'ごにん', 'ろくにん', 'ななにん', 'はちにん', 'きゅうにん', 'じゅうにん'], items: [['🧑', 'ひと'], ['🧒', 'こども'], ['👩‍🎓', 'がくせい']] },
    mai: { label: 'flat things (～まい)', words: ['いちまい', 'にまい', 'さんまい', 'よんまい', 'ごまい', 'ろくまい', 'ななまい', 'はちまい', 'きゅうまい', 'じゅうまい'], items: [['✉️', 'ふうとう'], ['📄', 'かみ'], ['👕', 'シャツ'], ['🎫', 'きっぷ']] },
    dai: { label: 'machines (～だい)', words: ['いちだい', 'にだい', 'さんだい', 'よんだい', 'ごだい', 'ろくだい', 'ななだい', 'はちだい', 'きゅうだい', 'じゅうだい'], items: [['🚗', 'くるま'], ['🚲', 'じてんしゃ'], ['💻', 'パソコン'], ['📺', 'テレビ']] },
    hon: { label: 'long things (～ほん)', words: ['いっぽん', 'にほん', 'さんぼん', 'よんほん', 'ごほん', 'ろっぽん', 'ななほん', 'はっぽん', 'きゅうほん', 'じゅっぽん'], items: [['✏️', 'えんぴつ'], ['🌂', 'かさ'], ['🍌', 'バナナ'], ['🥢', 'はし']] },
    hiki: { label: 'small animals (～ひき)', words: ['いっぴき', 'にひき', 'さんびき', 'よんひき', 'ごひき', 'ろっぴき', 'ななひき', 'はっぴき', 'きゅうひき', 'じゅっぴき'], items: [['🐱', 'ねこ'], ['🐶', 'いぬ'], ['🐟', 'さかな']] },
    hai: { label: 'cups and glasses (～はい)', words: ['いっぱい', 'にはい', 'さんばい', 'よんはい', 'ごはい', 'ろっぱい', 'ななはい', 'はっぱい', 'きゅうはい', 'じゅっぱい'], items: [['☕', 'コーヒー'], ['🍵', 'おちゃ'], ['🥛', 'ぎゅうにゅう']] },
    satsu: { label: 'books (～さつ)', words: ['いっさつ', 'にさつ', 'さんさつ', 'よんさつ', 'ごさつ', 'ろくさつ', 'ななさつ', 'はっさつ', 'きゅうさつ', 'じゅっさつ'], items: [['📕', 'ほん'], ['📓', 'ノート'], ['📖', 'じしょ']] },
    kai: { label: 'times (～かい)', words: ['いっかい', 'にかい', 'さんかい', 'よんかい', 'ごかい', 'ろっかい', 'ななかい', 'はっかい', 'きゅうかい', 'じゅっかい'], items: [['🔁', '']] },
  };
  function ageKana(n) {
    if (n === 20) return 'はたち';
    const o = n % 10;
    if (o === 0) return numKana(n).replace(/じゅう$/, 'じゅっ') + 'さい';
    const base = numKana(n - o);
    if (o === 1) return base + 'いっさい';
    if (o === 8) return base + 'はっさい';
    return numKana(n) + 'さい';
  }

  // ---------------------------------------------------------------- state
  const LS_KEY = 'minna-line-progress-v1';
  const defaults = () => ({
    v: 1, xp: 0, coins: 0, items: {}, stamps: {}, streak: { days: 0, last: '' }, daily: { date: '', n: 0 }, updatedAt: 0,
    today: { date: '' }, quests: { date: '', claimed: [], bonus: false }, history: {}, flags: {},
    stats: { answers: 0, correct: 0, bestCombo: 0, perfects: 0, sprintBest: 0, yokai: 0, sessions: 0, written: 0, readDone: 0 },
    trophies: {}, stickers: {}, tickets: 1, omamori: 0, owned: ['cap', 'none', 'skin-sakura'], equip: { hat: 'cap', acc: 'none', skin: 'skin-sakura' }, best: {}, numStats: { ok: 0, n: 0 },
    settings: { script: 'kanji', romaji: 'after', audio: true, sound: true, rate: 0.9, goal: 60, kanaSets: ['basic'], flashDir: 'jp', level: 'N5' },
  });
  let S = defaults();
  const NESTED = ['settings', 'streak', 'daily', 'stats', 'equip', 'quests', 'numStats', 'flags'];
  function adopt(j) {
    if (!j || j.v !== 1) return false;
    const d = defaults();
    const out = { ...d, ...j };
    for (const k of NESTED) out[k] = { ...d[k], ...(j[k] || {}) };
    S = out;
    return true;
  }
  try { adopt(JSON.parse(localStorage.getItem(LS_KEY))); } catch (e) { /* storage unavailable */ }
  let remote = null, pushTimer = null, onRemote = null;
  function save() {
    S.updatedAt = Date.now();
    try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) { /* storage unavailable */ }
    clearTimeout(pushTimer);
    pushTimer = setTimeout(push, 2500);
  }
  async function push() { if (remote) try { await remote.set({ data: JSON.stringify(S), updatedAt: S.updatedAt }); } catch (e) { /* offline */ } }
  async function connectRemote(cb) {
    onRemote = cb;
    if (!window.claude || !window.claude.use) return;
    try {
      const [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
      if (!db || !user) return;
      const id = await user.id();
      if (!id) return;
      const ref = db.collection('data/users/' + id).doc('progress');
      const snap = await ref.get();
      const d = snap && snap.data ? snap.data() : null;
      if (d && d.data && (d.updatedAt || 0) > (S.updatedAt || 0) && adopt(JSON.parse(d.data))) {
        try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) { /* ignore */ }
        if (onRemote) onRemote();
      }
      remote = ref;
      if (!d || (S.updatedAt || 0) > (d.updatedAt || 0)) push();
    } catch (e) { /* stay local */ }
  }

  // ---------------------------------------------------------------- SRS
  const IV = [0, 10 * 6e4, DAY, 3 * DAY, 7 * DAY, 14 * DAY, 30 * DAY, 90 * DAY];
  const stage = (key) => (S.items[key] ? S.items[key].s : -1);
  function grade(key, q) { // q: 0 again, 1 hard, 2 good, 3 easy
    if (!key) return;
    const it = S.items[key] || { s: 0, due: 0, ok: 0, bad: 0 };
    if (q === 0) { it.bad++; it.s = Math.max(0, it.s - 2); it.due = Date.now() + 6e4; }
    else { it.ok++; it.s = Math.min(7, it.s + (q === 1 ? 0 : q === 3 ? 2 : 1)); if (q === 1) it.s = Math.max(1, it.s); it.due = Date.now() + IV[it.s]; }
    S.items[key] = it;
  }
  const mastery = (keys) => (keys.length ? keys.reduce((a, k) => a + Math.min(Math.max(stage(k), 0), 5) / 5, 0) / keys.length : 0);
  function keyValid(k) {
    const [t, a, b] = k.split('|');
    if (t === 'v') return VBY.has(a);
    if (t === 'j') return KBY.has(a);
    if (t === 'g') return GBY.has(a) && !!GBY.get(a).drills[+b];
    if (t === 'e') return EBY.has(a + '|' + b);
    if (t === 'c') return !!FORMS[a] && VBY.has(b);
    if (t === 'k') return true;
    if (t === 'r') return RBY.has(a) && !!RBY.get(a).questions[+b];
    if (t === 'w') return !!STROKES[a];
    return false;
  }
  const dueKeys = () => { const now = Date.now(); return Object.keys(S.items).filter((k) => S.items[k].due <= now && keyValid(k)).sort((a, b) => S.items[a].due - S.items[b].due); };
  function weakKeys() {
    return Object.keys(S.items).filter((k) => S.items[k].bad > 0 && keyValid(k))
      .map((k) => ({ k, w: S.items[k].bad / (S.items[k].ok + S.items[k].bad) + S.items[k].bad * 0.05 - S.items[k].s * 0.08 }))
      .sort((a, b) => b.w - a.w).map((o) => o.k);
  }

  // ---------------------------------------------------------------- levels, ranks, streaks
  const level = () => Math.floor(Math.sqrt(S.xp / 60)) + 1;
  const lvlFloor = (l) => 60 * (l - 1) ** 2;
  const RANKS = [[1, '普通', 'ふつう', 'Local'], [3, '快速', 'かいそく', 'Rapid'], [6, '急行', 'きゅうこう', 'Express'], [10, '特急', 'とっきゅう', 'Limited Express'], [15, '新幹線', 'しんかんせん', 'Shinkansen'], [25, 'リニア', 'リニア', 'Maglev']];
  const rank = (l = level()) => RANKS.filter((r) => l >= r[0]).pop();
  const daysBetween = (a, b) => Math.round((new Date(b) - new Date(a)) / DAY);
  function touchDay() {
    const t = dayStr();
    if (S.streak.last === t) return;
    const gap = S.streak.last ? daysBetween(S.streak.last, t) : 99;
    if (gap === 1) S.streak.days++;
    else if (gap > 1 && gap - 1 <= S.omamori && S.streak.days > 0) { S.omamori -= gap - 1; S.streak.days++; S.flags.omamoriUsed = gap - 1; }
    else S.streak.days = 1;
    S.streak.last = t;
  }
  const liveStreak = () => { if (!S.streak.last) return 0; const gap = daysBetween(S.streak.last, dayStr()); return gap <= 1 + S.omamori ? S.streak.days : 0; };
  function ensureToday() {
    const t = dayStr();
    if (S.today.date !== t) S.today = { date: t, answers: 0, correct: 0, maxCombo: 0, newItems: 0, reviewOK: 0, listenOK: 0, typedOK: 0, grammarOK: 0, kanjiOK: 0, numOK: 0, sprintBest: 0, matchDone: 0, writeOK: 0, readOK: 0 };
    if (S.quests.date !== t) S.quests = { date: t, claimed: [], bonus: false };
    return S.today;
  }

  // Every answered question goes through here: stats, quest counters, XP and coins.
  function record(q, ok, opt = {}) {
    const T = ensureToday();
    touchDay();
    const h = new Date().getHours();
    if (h >= 23 || h < 4) S.flags.owl = 1;
    if (h >= 4 && h < 7) S.flags.bird = 1;
    T.answers++; S.stats.answers++;
    if (opt.isNew) T.newItems++;
    if (q.cat === 'num') S.numStats.n++;
    if (ok) {
      T.correct++; S.stats.correct++;
      if (q.cat === 'grammar') T.grammarOK++;
      if (q.cat === 'kanji') T.kanjiOK++;
      if (q.cat === 'num') { T.numOK++; S.numStats.ok++; }
      if (q.cat === 'reading') { T.readOK = (T.readOK || 0) + 1; S.stats.readDone++; }
      if (q.cat === 'write') { T.writeOK = (T.writeOK || 0) + 1; S.stats.written++; }
      if (q.mode === 'listen' || q.mode === 'dictate' || q.cat === 'sentence') T.listenOK++;
      if (q.kind === 'type') T.typedOK++;
      if (opt.review) T.reviewOK++;
    }
    const combo = opt.combo || 0;
    T.maxCombo = Math.max(T.maxCombo, combo);
    S.stats.bestCombo = Math.max(S.stats.bestCombo, combo);
    let xp = 0, coins = 0;
    if (ok) { const fever = combo >= 5; xp = Math.round((10 + Math.min(combo, 10)) * (fever ? 1.5 : 1)); coins = fever ? 4 : 2; }
    const lv0 = level();
    S.xp += xp; S.coins += coins;
    const lv1 = level();
    if (lv1 > lv0) S.coins += 100;
    const d = dayStr();
    S.history[d] = (S.history[d] || 0) + 1;
    S.daily = { date: d, n: S.history[d] };
    return { xp, coins, levelUp: lv1 > lv0 ? lv1 : 0 };
  }
  function bonus(xp, coins) {
    const lv0 = level();
    S.xp += xp; S.coins += coins;
    const lv1 = level();
    if (lv1 > lv0) S.coins += 100;
    return lv1 > lv0 ? lv1 : 0;
  }

  // ---------------------------------------------------------------- daily tickets (quests)
  const QUESTS = [
    { id: 'answers', label: 'Answer 40 questions', m: 'answers', n: 40, r: 60 },
    { id: 'correct', label: 'Get 30 answers right', m: 'correct', n: 30, r: 60 },
    { id: 'combo', label: 'Hit a ×10 combo', m: 'maxCombo', n: 10, r: 80 },
    { id: 'new', label: 'Meet 8 new words or patterns', m: 'newItems', n: 8, r: 60 },
    { id: 'review', label: 'Clear 15 review cards', m: 'reviewOK', n: 15, r: 70 },
    { id: 'listen', label: 'Get 8 listening questions right', m: 'listenOK', n: 8, r: 60 },
    { id: 'typed', label: 'Type 8 answers correctly', m: 'typedOK', n: 8, r: 70 },
    { id: 'grammar', label: 'Get 10 grammar drills right', m: 'grammarOK', n: 10, r: 70 },
    { id: 'kanji', label: 'Get 8 kanji questions right', m: 'kanjiOK', n: 8, r: 60 },
    { id: 'sprint', label: 'Score 12+ in a Shinkansen Sprint', m: 'sprintBest', n: 12, r: 80 },
    { id: 'num', label: 'Read 8 numbers, times or dates', m: 'numOK', n: 8, r: 60 },
    { id: 'match', label: 'Finish a match game', m: 'matchDone', n: 1, r: 40 },
    { id: 'read', label: 'Answer 6 reading questions', m: 'readOK', n: 6, r: 70 },
    { id: 'write', label: 'Write 6 characters by hand', m: 'writeOK', n: 6, r: 70 },
  ];
  function todaysQuests() {
    ensureToday();
    const r = rng(hashStr('quests' + dayStr()));
    const pool = [...QUESTS], out = [];
    while (out.length < 3) out.push(pool.splice(Math.floor(r() * pool.length), 1)[0]);
    return out.map((q) => ({ ...q, have: Math.min(S.today[q.m] || 0, q.n), claimed: S.quests.claimed.includes(q.id) }));
  }
  function claimQuest(id) {
    const q = todaysQuests().find((x) => x.id === id);
    if (!q || q.claimed || q.have < q.n) return null;
    S.quests.claimed.push(id);
    const lv = bonus(30, q.r);
    let allDone = false;
    if (!S.quests.bonus && todaysQuests().every((x) => x.claimed)) { S.quests.bonus = true; S.tickets++; S.coins += 50; allDone = true; }
    save();
    return { coins: q.r, allDone, levelUp: lv };
  }

  // ---------------------------------------------------------------- shop, capsule machine
  const SHOP = [
    { id: 'cap', slot: 'hat', name: 'Conductor cap', jp: 'せいぼう', price: 0 },
    { id: 'sakura', slot: 'hat', name: 'Sakura hairpin', jp: 'かみかざり', price: 300 },
    { id: 'hachimaki', slot: 'hat', name: 'Study headband', jp: 'はちまき', price: 400 },
    { id: 'straw', slot: 'hat', name: 'Straw hat', jp: 'むぎわらぼうし', price: 500 },
    { id: 'kitsune', slot: 'hat', name: 'Fox mask', jp: 'きつねの おめん', price: 700 },
    { id: 'crown', slot: 'hat', name: 'Crown', jp: 'おうかん', price: 1200 },
    { id: 'none', slot: 'acc', name: 'Nothing', jp: 'なし', price: 0 },
    { id: 'bell', slot: 'acc', name: 'Cat bell', jp: 'すず', price: 250 },
    { id: 'bow', slot: 'acc', name: 'Ribbon', jp: 'リボン', price: 250 },
    { id: 'scarf', slot: 'acc', name: 'Red scarf', jp: 'マフラー', price: 300 },
    { id: 'skin-sakura', slot: 'skin', name: 'Sakura', jp: 'さくら', price: 0, color: '#ff8fb1' },
    { id: 'skin-matcha', slot: 'skin', name: 'Matcha', jp: 'まっちゃ', price: 500, color: '#8fcf7a' },
    { id: 'skin-sora', slot: 'skin', name: 'Sora', jp: 'そら', price: 500, color: '#7cc7f0' },
    { id: 'skin-ajisai', slot: 'skin', name: 'Ajisai', jp: 'あじさい', price: 500, color: '#a99cf0' },
    { id: 'skin-yuzu', slot: 'skin', name: 'Yuzu', jp: 'ゆず', price: 500, color: '#ffc845' },
    { id: 'skin-momiji', slot: 'skin', name: 'Momiji', jp: 'もみじ', price: 600, color: '#ff9a6b' },
    { id: 'omamori', slot: 'use', name: 'Omamori charm', jp: 'おまもり', price: 400, desc: 'Keeps your streak alive if you miss a day. Hold up to 3.' },
    { id: 'ticket', slot: 'use', name: 'Capsule ticket', jp: 'ガチャけん', price: 150, desc: 'One spin at the capsule machine.' },
  ];
  const SHOP_BY = new Map(SHOP.map((x) => [x.id, x]));
  function buy(id) {
    const it = SHOP_BY.get(id);
    if (!it || S.coins < it.price) return false;
    if (it.slot === 'use') {
      if (id === 'omamori') { if (S.omamori >= 3) return false; S.omamori++; } else S.tickets++;
    } else { if (S.owned.includes(id)) return false; S.owned.push(id); S.equip[it.slot] = id; }
    S.coins -= it.price; S.flags.bought = 1; save();
    return true;
  }
  const STICKERS = [
    ['🍙', 'おにぎり', 'お握り', 'rice ball', 'C'], ['🍡', 'だんご', '団子', 'sweet dumplings', 'C'], ['🍵', 'まっちゃ', '抹茶', 'matcha', 'C'],
    ['🍜', 'ラーメン', '', 'ramen', 'C'], ['🍣', 'すし', '寿司', 'sushi', 'C'], ['🍱', 'べんとう', '弁当', 'boxed lunch', 'C'],
    ['🍘', 'せんべい', '煎餅', 'rice cracker', 'C'], ['🍢', 'おでん', '', 'oden stew', 'C'], ['🍤', 'てんぷら', '天ぷら', 'tempura', 'C'],
    ['🌸', 'さくら', '桜', 'cherry blossom', 'C'], ['🐱', 'ねこ', '猫', 'cat', 'C'], ['🥢', 'はし', '箸', 'chopsticks', 'C'],
    ['🏮', 'ちょうちん', '提灯', 'paper lantern', 'R'], ['🎐', 'ふうりん', '風鈴', 'wind chime', 'R'], ['🎏', 'こいのぼり', '鯉のぼり', 'carp streamers', 'R'],
    ['🎋', 'たなばた', '七夕', 'star festival', 'R'], ['🎍', 'かどまつ', '門松', 'New Year pine', 'R'], ['👘', 'きもの', '着物', 'kimono', 'R'],
    ['🎑', 'つきみ', '月見', 'moon viewing', 'R'], ['🦊', 'きつね', '狐', 'fox', 'R'], ['🦝', 'たぬき', '狸', 'raccoon dog', 'R'],
    ['🌊', 'なみ', '波', 'wave', 'R'], ['🎆', 'はなび', '花火', 'fireworks', 'R'], ['🍶', 'おさけ', 'お酒', 'sake', 'R'],
    ['⛩️', 'とりい', '鳥居', 'shrine gate', 'S'], ['🗻', 'ふじさん', '富士山', 'Mt. Fuji', 'S'], ['🏯', 'おしろ', 'お城', 'castle', 'S'],
    ['🗼', 'とうきょうタワー', '東京タワー', 'Tokyo Tower', 'S'], ['🚄', 'しんかんせん', '新幹線', 'bullet train', 'S'], ['🎎', 'ひなにんぎょう', '雛人形', 'hina dolls', 'S'],
  ].map(([e, kana, kanji, en, r]) => ({ e, kana, kanji, en, r, id: kana }));
  const GACHA_PRICE = 150;
  function spin() {
    if (S.tickets > 0) S.tickets--;
    else if (S.coins >= GACHA_PRICE) S.coins -= GACHA_PRICE;
    else return null;
    const x = Math.random();
    const tier = x < 0.1 ? 'S' : x < 0.4 ? 'R' : 'C';
    const st = pick(STICKERS.filter((s) => s.r === tier));
    const dup = !!S.stickers[st.id];
    S.stickers[st.id] = (S.stickers[st.id] || 0) + 1;
    if (dup) S.coins += 40;
    save();
    return { st, dup };
  }

  // ---------------------------------------------------------------- trophies
  const stageCount = (prefix, min) => Object.keys(S.items).filter((k) => k.startsWith(prefix) && S.items[k].s >= min).length;
  const allStamped = (ids) => ids.every((id) => S.stamps[id]);
  const TROPHIES = [
    ['first', 'はじめまして', 'Answer your first question', () => S.stats.answers >= 1],
    ['c100', 'ひゃく', 'Get 100 answers right', () => S.stats.correct >= 100],
    ['c1000', 'せん', 'Get 1,000 answers right', () => S.stats.correct >= 1000],
    ['c5000', 'ごせん', 'Get 5,000 answers right', () => S.stats.correct >= 5000],
    ['combo10', 'れんぞく', 'Reach a ×10 combo', () => S.stats.bestCombo >= 10],
    ['combo25', 'ノンストップ', 'Reach a ×25 combo', () => S.stats.bestCombo >= 25],
    ['streak3', 'みっか', 'Study 3 days in a row', () => S.streak.days >= 3],
    ['streak7', 'いっしゅうかん', 'Study 7 days in a row', () => S.streak.days >= 7],
    ['streak30', 'いっかげつ', 'Study 30 days in a row', () => S.streak.days >= 30],
    ['stamp1', 'はじめての スタンプ', 'Collect your first station stamp', () => Object.keys(S.stamps).length >= 1],
    ['stamp10', 'スタンプ じゅっこ', 'Collect 10 station stamps', () => Object.keys(S.stamps).length >= 10],
    ['minna', 'みんなの せん', 'Collect every Minna Line stamp (00–20)', () => allStamped(STATIONS.filter((s) => s.line === 'M').map((s) => s.id))],
    ['all', 'ぜんぶ', 'Collect every stamp on the map', () => allStamped(STATIONS.map((s) => s.id))],
    ['yokai5', 'ようかいハンター', 'Defeat 5 yokai in stamp battles', () => S.stats.yokai >= 5],
    ['perfect', 'かんぺき', 'Score 100% on a session of 10 or more', () => S.stats.perfects >= 1],
    ['sprint20', 'はやい！', 'Score 20+ in a Shinkansen Sprint', () => S.stats.sprintBest >= 20],
    ['words100', 'ことば ひゃく', 'Move 100 words into long-term memory', () => stageCount('v|', 4) >= 100],
    ['words500', 'ことば ごひゃく', 'Move 500 words into long-term memory', () => stageCount('v|', 4) >= 500],
    ['kana', 'かなマスター', 'Move all 92 basic kana into long-term memory', () => KANA.filter((k) => k.grp === 'basic').every((k) => stage(`k|${k.set}|${k.c}`) >= 4)],
    ['kanji50', 'かんじ ごじゅう', 'Move 50 kanji into long-term memory', () => stageCount('j|', 4) >= 50],
    ['stickers10', 'コレクター', 'Collect 10 different stickers', () => Object.keys(S.stickers).length >= 10],
    ['album', 'ぜんぶ あつめた', 'Complete the sticker album', () => STICKERS.every((s) => S.stickers[s.id])],
    ['shop', 'おかいもの', 'Buy something at the shop', () => !!S.flags.bought],
    ['exam', 'ごうかく', 'Pass the N5 mock exam', () => !!S.stamps.exam],
    ['exam4', 'N4 ごうかく', 'Pass the N4 mock exam', () => !!S.stamps.exam4],
    ['exam3', 'N3 ごうかく', 'Pass the N3 mock exam', () => !!S.stamps.exam3],
    ['natsu', 'なつの せん', 'Collect every N4 lesson stamp', () => allStamped(STATIONS.filter((s) => s.line === 'S').map((s) => s.id))],
    ['aki', 'あきの せん', 'Collect every N3 unit stamp', () => allStamped(STATIONS.filter((s) => s.line === 'K').map((s) => s.id))],
    ['kanji300', 'かんじ さんびゃく', 'Move 300 kanji into long-term memory', () => stageCount('j|', 4) >= 300],
    ['reader', 'よみます', 'Get 50 reading questions right', () => S.stats.readDone >= 50],
    ['writer', 'かきます', 'Write 100 characters by hand', () => S.stats.written >= 100],
    ['owl', 'よふかし', 'Study after 11 pm', () => !!S.flags.owl],
    ['bird', 'はやおき', 'Study before 7 am', () => !!S.flags.bird],
  ].map(([id, jp, desc, test]) => ({ id, jp, desc, test }));
  function checkTrophies() {
    const got = [];
    for (const t of TROPHIES) if (!S.trophies[t.id] && t.test()) { S.trophies[t.id] = dayStr(); S.coins += 100; got.push(t); }
    if (got.length) save();
    return got;
  }

  // ---------------------------------------------------------------- speech + sound effects
  const speech = {
    voice: null,
    ok: 'speechSynthesis' in window,
    init() {
      if (!this.ok) return;
      const choose = () => { const vs = speechSynthesis.getVoices(); this.voice = vs.find((v) => /^ja/i.test(v.lang) && /Kyoko|O-ren|Otoya|Google/i.test(v.name)) || vs.find((v) => /^ja/i.test(v.lang)) || null; };
      choose();
      speechSynthesis.onvoiceschanged = choose;
    },
    say(text, opt = {}) {
      if (!this.ok || !text) return;
      try {
        if (!opt.queue) speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(speakable(rubyToKana(text)));
        u.lang = 'ja-JP'; if (this.voice) u.voice = this.voice; u.rate = S.settings.rate || 0.9;
        if (opt.pitch) u.pitch = opt.pitch;
        if (opt.onend) u.onend = opt.onend;
        speechSynthesis.speak(u);
      } catch (e) { /* no audio */ }
    },
    // Reads lines in order, giving each speaker their own pitch. onLine(i) fires as each line starts.
    sayLines(lines, onLine) {
      this.stop();
      const who = [...new Set(lines.map((l) => l.s))];
      lines.forEach((l, i) => this.say(l.jp, { queue: true, pitch: who.indexOf(l.s) % 2 ? 0.8 : 1.2, onend: () => onLine && onLine(i + 1) }));
      if (onLine) onLine(0);
    },
    stop() { if (this.ok) try { speechSynthesis.cancel(); } catch (e) { /* ignore */ } },
  };
  speech.init();
  const sfx = {
    ctx: null,
    tone(f, t, d, type = 'sine', g = 0.07) {
      const c = this.ctx, o = c.createOscillator(), v = c.createGain();
      o.type = type; o.frequency.value = f;
      v.gain.setValueAtTime(0.0001, c.currentTime + t);
      v.gain.exponentialRampToValueAtTime(g, c.currentTime + t + 0.015);
      v.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + t + d);
      o.connect(v).connect(c.destination); o.start(c.currentTime + t); o.stop(c.currentTime + t + d + 0.05);
    },
    play(name) {
      if (!S.settings.sound) return;
      try {
        this.ctx = this.ctx || new (window.AudioContext || window.webkitAudioContext)();
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const T = (seq, type, g, step = 0.09, d = 0.18) => seq.forEach((f, i) => f && this.tone(f, i * step, d, type, g));
        if (name === 'ok') T([1046.5, 1568], 'sine', 0.08, 0.07, 0.2);
        else if (name === 'bad') T([311, 233], 'triangle', 0.07, 0.11, 0.22);
        else if (name === 'coin') T([1975, 2637], 'square', 0.025, 0.06, 0.12);
        else if (name === 'tap') T([1318.5], 'sine', 0.04, 0, 0.06);
        else if (name === 'fever') T([784, 988, 1175, 1568], 'triangle', 0.06, 0.06, 0.16);
        else if (name === 'hit') T([196, 147], 'square', 0.035, 0.05, 0.12);
        // a few bars of a station departure chime
        else if (name === 'stamp' || name === 'level') T([659.3, 784, 987.8, 1318.5, 987.8, 1174.7, 1568], 'sine', 0.08, 0.12, 0.3);
        else if (name === 'gacha') T([523, 659, 784, 1046, 0, 1318, 1568], 'triangle', 0.06, 0.08, 0.2);
      } catch (e) { /* audio blocked */ }
    },
  };

  return {
    esc, shuffle, pick, uniqBy, dayStr, hasKanji, DAY, hashStr, rng, toHira, normKana, particleNorm, romajiToKana, answerVariants, typedMatches, speakable,
    VOCAB, VBY, KANA, KANJI, KBY, GRAMMAR, GBY, EXAMPLES, EBY, quizzable, posGroup, vKey, exampleFor, TITLES, STATIONS, SBY, LEVELS, levelOfL, lessonName,
    verbForms, adjForms, FORMS, CONJ_BY_LESSON, conjVerbs, conjAdjs, conjAnswer, canForm, I2A, READING, RBY, GUIDE, STROKES, rubyToKana, rubyToKanji, LESSON_GUIDE, GROUPS, groupOf,
    numKana, timeKana, HOURS, funKana, MONTHS, dayKana, COUNTERS, ageKana, D1,
    get S() { return S; }, defaults, adopt, save, connectRemote, isRemote: () => !!remote,
    stage, grade, mastery, keyValid, dueKeys, weakKeys, level, lvlFloor, rank, RANKS, liveStreak, ensureToday, record, bonus,
    QUESTS, todaysQuests, claimQuest, SHOP, SHOP_BY, buy, STICKERS, GACHA_PRICE, spin, TROPHIES, checkTrophies, speech, sfx,
    resetAll(keepSettings) { const k = S.settings; S = defaults(); if (keepSettings) S.settings = k; save(); },
  };
})();
