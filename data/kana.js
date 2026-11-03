// Hiragana + katakana (basic, dakuten/handakuten, combination sounds), matching the
// "Hiragana letters (all)" and "Katakana Letters All" notes.
(function () {
  const basic = [
    ['a', 'あいうえお', ['a', 'i', 'u', 'e', 'o']],
    ['k', 'かきくけこ', ['ka', 'ki', 'ku', 'ke', 'ko']],
    ['s', 'さしすせそ', ['sa', 'shi', 'su', 'se', 'so']],
    ['t', 'たちつてと', ['ta', 'chi', 'tsu', 'te', 'to']],
    ['n', 'なにぬねの', ['na', 'ni', 'nu', 'ne', 'no']],
    ['h', 'はひふへほ', ['ha', 'hi', 'fu', 'he', 'ho']],
    ['m', 'まみむめも', ['ma', 'mi', 'mu', 'me', 'mo']],
    ['y', 'やゆよ', ['ya', 'yu', 'yo']],
    ['r', 'らりるれろ', ['ra', 'ri', 'ru', 're', 'ro']],
    ['w', 'わをん', ['wa', 'o', 'n']],
  ];
  const voiced = [
    ['g', 'がぎぐげご', ['ga', 'gi', 'gu', 'ge', 'go']],
    ['z', 'ざじずぜぞ', ['za', 'ji', 'zu', 'ze', 'zo']],
    ['d', 'だぢづでど', ['da', 'ji', 'zu', 'de', 'do']],
    ['b', 'ばびぶべぼ', ['ba', 'bi', 'bu', 'be', 'bo']],
    ['p', 'ぱぴぷぺぽ', ['pa', 'pi', 'pu', 'pe', 'po']],
  ];
  const combos = [
    ['きゃ', 'kya'], ['きゅ', 'kyu'], ['きょ', 'kyo'], ['しゃ', 'sha'], ['しゅ', 'shu'], ['しょ', 'sho'],
    ['ちゃ', 'cha'], ['ちゅ', 'chu'], ['ちょ', 'cho'], ['にゃ', 'nya'], ['にゅ', 'nyu'], ['にょ', 'nyo'],
    ['ひゃ', 'hya'], ['ひゅ', 'hyu'], ['ひょ', 'hyo'], ['みゃ', 'mya'], ['みゅ', 'myu'], ['みょ', 'myo'],
    ['りゃ', 'rya'], ['りゅ', 'ryu'], ['りょ', 'ryo'], ['ぎゃ', 'gya'], ['ぎゅ', 'gyu'], ['ぎょ', 'gyo'],
    ['じゃ', 'ja'], ['じゅ', 'ju'], ['じょ', 'jo'], ['びゃ', 'bya'], ['びゅ', 'byu'], ['びょ', 'byo'],
    ['ぴゃ', 'pya'], ['ぴゅ', 'pyu'], ['ぴょ', 'pyo'],
  ];
  const toKata = (s) => s.replace(/[ぁ-ゖ]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60));
  const out = [];
  const push = (c, r, grp, row) => {
    out.push({ c, r, set: 'h', grp, row });
    out.push({ c: toKata(c), r, set: 'k', grp, row });
  };
  for (const [row, chars, rs] of basic) [...chars].forEach((c, i) => push(c, rs[i], 'basic', row));
  for (const [row, chars, rs] of voiced) [...chars].forEach((c, i) => push(c, rs[i], 'voiced', row));
  for (const [c, r] of combos) push(c, r, 'combo', r[0]);
  window.KANA = out;

  // Romaji → hiragana table used by typing answers.
  const T = {};
  for (const k of out) if (k.set === 'h') T[k.r] = T[k.r] || k.c;
  Object.assign(T, {
    a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お', ji: 'じ', zu: 'ず', wo: 'を', si: 'し', ti: 'ち', tu: 'つ', hu: 'ふ',
    zi: 'じ', di: 'ぢ', du: 'づ', sya: 'しゃ', syu: 'しゅ', syo: 'しょ', tya: 'ちゃ', tyu: 'ちゅ', tyo: 'ちょ',
    jya: 'じゃ', jyu: 'じゅ', jyo: 'じょ', zya: 'じゃ', zyu: 'じゅ', zyo: 'じょ', nn: 'ん', "n'": 'ん',
    xa: 'ぁ', xi: 'ぃ', xu: 'ぅ', xe: 'ぇ', xo: 'ぉ', xtu: 'っ', xtsu: 'っ', xya: 'ゃ', xyu: 'ゅ', xyo: 'ょ',
    la: 'ぁ', li: 'ぃ', lu: 'ぅ', le: 'ぇ', lo: 'ぉ', ltu: 'っ', lya: 'ゃ', lyu: 'ゅ', lyo: 'ょ',
    fa: 'ふぁ', fi: 'ふぃ', fe: 'ふぇ', fo: 'ふぉ', ti_: 'てぃ', she: 'しぇ', je: 'じぇ', che: 'ちぇ',
    va: 'ゔぁ', vi: 'ゔぃ', vu: 'ゔ', ve: 'ゔぇ', vo: 'ゔぉ', '-': 'ー',
  });
  delete T.n; // handled specially
  window.ROMAJI_TABLE = T;
})();
