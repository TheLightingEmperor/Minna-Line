// Builds the public, crawlable pages under /learn from the same data the app uses:
//   /learn/                     hub
//   /learn/grammar/n5.html …    one index per JLPT level
//   /learn/grammar/<slug>.html  one page per grammar point (460)
//   /learn/guide/<id>.html      one page per Guidebook sheet
//   /sitemap.xml, /robots.txt
// Run from the repo root after changing grammar or guide data:   node tools/build_pages.js
// The pages are plain HTML with no script, so search engines read everything and they load instantly.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), SITE = 'https://minna-line.netlify.app';
global.window = global;
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
for (const m of index.matchAll(/<script src="(data\/(?:grammar|study|guide)[^"]*)"/g)) eval(fs.readFileSync(path.join(root, m[1]), 'utf8'));
const STUDY = window.GRAMMAR_STUDY || {};
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ruby = (s) => esc(s).replace(/\{([^|}]+)\|([^}]+)\}/g, '<ruby>$1<rt>$2</rt></ruby>');
const plain = (s) => String(s ?? '').replace(/\{([^|}]+)\|[^}]+\}/g, '$1');
const levelOf = (L) => (L >= 401 ? 'N1' : L >= 301 ? 'N2' : L >= 201 ? 'N3' : L >= 126 ? 'N4' : 'N5');
const unitName = (L) => (L <= 25 ? `Lesson ${L}` : L <= 150 ? `Lesson ${L - 100}` : `Unit ${L % 100}`);
const station = (L) => 'L' + L;
const slug = (g) => (g.id.toLowerCase() + '-' + String(g.meaning || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 44)).replace(/-$/, '');
const GR = (window.GRAMMAR || []).map((g) => { const st = STUDY[g.id] || {}; return { ...g, title: st.title || g.title, meaning: st.meaning || g.meaning, examples: st.examples || g.examples, st }; }).sort((a, b) => a.lesson - b.lesson);
GR.forEach((g) => { g.level = levelOf(g.lesson); g.slug = slug(g); });
const LEVELS = [['N5', 'Spring Line', 'Absolute beginner: particles, です and ます, て-form, basic adjectives.'], ['N4', 'Summer Line', 'Plain forms, potential, passive, giving and receiving, conditionals.'], ['N3', 'Autumn Line', 'Everyday nuance: reasons, contrasts, hearsay, formal connectors.'], ['N2', 'Winter Line', 'Written and business Japanese, fine distinctions between similar patterns.'], ['N1', 'Starlight Line', 'Literary and formal expressions for newspapers, essays and speeches.']];
const GUIDE = window.GUIDE || [];

const page = ({ file, title, desc, crumbs, body, ld }) => {
  const up = '../'.repeat(file.split('/').length - 1);          // learn/grammar/x.html → ../../
  const html = `<!doctype html>
<html lang="en" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}/${file.replace(/index\.html$/, '')}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}/icons/icon-512.png">
<meta property="og:type" content="article">
<meta name="theme-color" content="#f9f1dd">
<link rel="icon" href="${up}icons/icon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Klee+One:wght@600&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap">
<link rel="stylesheet" href="${up}app.css">
<link rel="stylesheet" href="${up}learn/learn.css">
${ld ? `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>` : ''}
</head>
<body class="learn">
<header class="topbar"><div class="wrap">
  <a class="brand" href="${up}learn/"><img src="${up}icons/icon.svg" alt="" width="40" height="40"><span><b>Minna Line</b><span class="brand-sub">みんなの せん · free Japanese</span></span></a>
  <nav class="topstats">${LEVELS.map(([l]) => `<a class="chip hide-sm" href="${up}learn/grammar/${l.toLowerCase()}.html">${l}</a>`).join('')}<a class="chip hide-sm" href="${up}learn/#guide">Guidebook</a><a class="btn primary sm" href="${up}">Start free</a></nav>
</div></header>
<main><div class="wrap lwrap">
${crumbs ? `<nav class="crumbs" aria-label="Breadcrumb">${crumbs.map(([t, h]) => (h ? `<a href="${up}${h}">${esc(t)}</a>` : `<span>${esc(t)}</span>`)).join('<i>›</i>')}</nav>` : ''}
${body(up)}
<section class="card cta lcta"><img src="${up}icons/icon.svg" alt="" width="72" height="72"><div><h2>Practise this until it sticks</h2><p>Minna Line is a free study game for Japanese from your first kana to JLPT N1: spaced-repetition reviews, drills for every grammar point, kanji handwriting, graded reading and mock exams. No ads, no paywall.</p><a class="btn primary" href="${up}">Start learning free</a></div></section>
</div></main>
<footer class="lfoot"><div class="wrap"><span>Minna Line · みんなの せん</span><a href="${up}learn/">All study pages</a><a href="${up}">Open the app</a></div></footer>
</body></html>
`;
  const out = path.join(root, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  return `${SITE}/${file.replace(/index\.html$/, '')}`;
};
const table = (t) => `<div class="stable">${t.title ? `<div class="stitle">${esc(t.title)}</div>` : ''}<div class="tblwrap"><table class="vocab">${t.headers ? `<thead><tr>${t.headers.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>` : ''}<tbody>${t.rows.map((r) => `<tr>${r.map((c) => `<td>${ruby(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
const urls = [];

// ---- grammar points
GR.forEach((g, i) => {
  const st = g.st, prev = GR[i - 1], next = GR[i + 1], lv = g.level;
  const mistakes = (st.mistakes || []).map((m) => (Array.isArray(m) ? `<li><s class="muted">${ruby(m[0])}</s> → <b>${ruby(m[1])}</b>${m[2] ? ` <span class="muted">${esc(m[2])}</span>` : ''}</li>` : typeof m === 'object' ? `<li><s class="muted">${ruby(m.bad || m.wrong || '')}</s> → <b>${ruby(m.good || m.right || '')}</b>${m.why || m.note ? `<br><span class="muted">${esc(m.why || m.note)}</span>` : ''}</li>` : `<li>${ruby(m)}</li>`)).join('');
  urls.push(page({
    file: `learn/grammar/${g.slug}.html`,
    title: `${plain(g.title)}: ${g.meaning} · JLPT ${lv} grammar · Minna Line`,
    desc: `${plain(g.title)} means "${g.meaning}". ${plain(g.explain || '').slice(0, 150)}`.slice(0, 300),
    crumbs: [['Study pages', 'learn/'], [`${lv} grammar`, `learn/grammar/${lv.toLowerCase()}.html`], [plain(g.title)]],
    ld: { '@context': 'https://schema.org', '@type': 'LearningResource', name: `${plain(g.title)}: ${g.meaning}`, description: plain(g.explain || ''), inLanguage: 'en', teaches: `Japanese grammar: ${plain(g.title)}`, educationalLevel: `JLPT ${lv}`, isAccessibleForFree: true, url: `${SITE}/learn/grammar/${g.slug}.html` },
    body: (up) => `<article class="stack">
      <header class="lhead"><div class="ctags"><span class="pill express">JLPT ${lv}</span><span class="pill">${unitName(g.lesson)}</span></div><h1 class="jp">${ruby(g.title)}</h1><p class="lmeaning">${esc(g.meaning)}</p></header>
      ${st.formula && st.formula.length ? `<section class="card"><div class="eyebrow">How to build it</div><div class="lform">${st.formula.map((f) => `<span>${ruby(f)}</span>`).join('')}</div></section>` : ''}
      <section class="card"><div class="eyebrow">What it means</div><p>${ruby(g.explain || '')}</p>${st.points && st.points.length ? `<ul class="lpoints">${st.points.map((p) => `<li>${ruby(p)}</li>`).join('')}</ul>` : ''}${st.tip ? `<div class="tip">${ruby(st.tip)}</div>` : ''}</section>
      ${(st.tables || []).map(table).join('')}
      ${g.examples && g.examples.length ? `<section class="card"><div class="eyebrow">Example sentences</div><ol class="lex">${g.examples.map((e) => `<li><span class="jp">${ruby(e.jp)}</span>${e.ro ? `<i>${esc(e.ro)}</i>` : ''}<span>${esc(e.en)}</span></li>`).join('')}</ol></section>` : ''}
      ${mistakes ? `<section class="card"><div class="eyebrow">Common mistakes</div><ul class="lpoints">${mistakes}</ul></section>` : ''}
      <section class="card"><div class="eyebrow">Practise it</div><p>This pattern has ${g.drills ? g.drills.length : 'several'} interactive drills in Minna Line (fill the gap, put the sentence in order, pick the right form), and it comes back for review just before you would forget it.</p><div><a class="btn primary" href="${up}#${station(g.lesson)}">Drill ${esc(plain(g.title))} in the app</a></div></section>
      <nav class="lpn">${prev ? `<a class="hubbtn" href="${up}learn/grammar/${prev.slug}.html"><span class="jp">← Previous</span><b>${ruby(prev.title)}</b><span>${esc(prev.meaning)}</span></a>` : '<span></span>'}${next ? `<a class="hubbtn" href="${up}learn/grammar/${next.slug}.html"><span class="jp">Next →</span><b>${ruby(next.title)}</b><span>${esc(next.meaning)}</span></a>` : '<span></span>'}</nav>
    </article>`,
  }));
});

// ---- one index per level
for (const [lv, line, blurb] of LEVELS) {
  const list = GR.filter((g) => g.level === lv), units = [...new Set(list.map((g) => g.lesson))];
  urls.push(page({
    file: `learn/grammar/${lv.toLowerCase()}.html`,
    title: `JLPT ${lv} grammar list: all ${list.length} points with examples · Minna Line`,
    desc: `Every JLPT ${lv} grammar point explained in plain English with formulas, example sentences and common mistakes. ${blurb}`,
    crumbs: [['Study pages', 'learn/'], [`${lv} grammar`]],
    body: (up) => `<header class="lhead"><div class="ctags"><span class="pill express">${line}</span><span class="pill">${list.length} grammar points</span></div><h1>JLPT ${lv} grammar</h1><p class="lmeaning">${esc(blurb)}</p></header>
      <div class="chooser">${LEVELS.map(([l]) => `<a class="chip" ${l === lv ? 'aria-pressed="true"' : ''} href="${up}learn/grammar/${l.toLowerCase()}.html">${l}</a>`).join('')}</div>
      ${units.map((u) => `<section class="stack"><h2 class="section-h">${unitName(u)}</h2><div class="lgrid">${list.filter((g) => g.lesson === u).map((g) => `<a class="hubbtn" href="${up}learn/grammar/${g.slug}.html"><b class="jp">${ruby(g.title)}</b><span>${esc(g.meaning)}</span></a>`).join('')}</div></section>`).join('')}`,
  }));
}

// ---- guidebook sheets
for (const g of GUIDE) {
  urls.push(page({
    file: `learn/guide/${g.id}.html`,
    title: `${g.title}: Japanese cheat sheet · Minna Line`,
    desc: (g.intro || `${g.title} for Japanese learners.`).slice(0, 300),
    crumbs: [['Study pages', 'learn/'], ['Guidebook', 'learn/#guide'], [g.title]],
    body: () => `<article class="stack"><header class="lhead"><div class="ctags"><span class="pill express">Guidebook</span></div><h1>${esc(g.jp || '')} · ${esc(g.title)}</h1>${g.intro ? `<p class="lmeaning">${esc(g.intro)}</p>` : ''}</header>
      ${g.sections.map((s) => `<section class="gpoint"><h2>${esc(s.h)}</h2>${s.note ? `<p>${esc(s.note)}</p>` : ''}${s.rows ? table(s) : ''}${s.tip ? `<div class="tip">${esc(s.tip)}</div>` : ''}</section>`).join('')}</article>`,
  }));
}

// ---- hub
urls.unshift(page({
  file: 'learn/index.html',
  title: 'Learn Japanese free: grammar for JLPT N5 to N1 and cheat sheets · Minna Line',
  desc: `Free Japanese study pages: ${GR.length} grammar points from JLPT N5 to N1 with formulas, examples and common mistakes, plus cheat sheets for particles, verbs, counters and travel phrases.`,
  body: (up) => `<header class="lhead lhero"><h1>Japanese, explained station by station</h1><p class="lmeaning">${GR.length} grammar points from JLPT N5 to N1 and ${GUIDE.length} cheat sheets. Free to read, free to practise.</p></header>
    <h2 class="section-h">Grammar by level</h2>
    <div class="lgrid big">${LEVELS.map(([l, line, blurb]) => `<a class="hubbtn" href="${up}learn/grammar/${l.toLowerCase()}.html"><span class="jp">${line}</span><b>JLPT ${l} · ${GR.filter((g) => g.level === l).length} points</b><span>${esc(blurb)}</span></a>`).join('')}</div>
    <h2 class="section-h" id="guide">Guidebook cheat sheets</h2>
    <div class="lgrid">${GUIDE.map((g) => `<a class="hubbtn" href="${up}learn/guide/${g.id}.html"><span class="jp">${esc(g.jp || '')}</span><b>${esc(g.title)}</b><span>${esc((g.intro || '').slice(0, 90))}${(g.intro || '').length > 90 ? '…' : ''}</span></a>`).join('')}</div>`,
}));

fs.writeFileSync(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n<url><loc>${SITE}/</loc></url>\n${urls.map((u) => `<url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`wrote ${urls.length} pages, sitemap.xml and robots.txt`);
