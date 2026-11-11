# Minna Line

A study game for Japanese from JLPT N5 to N1: 25 stations each for N5 and N4 (the Spring and Summer Lines), then 24 themed units each for N3, N2 and N1 (the Autumn, Winter and Starlight Lines), with a Reading Academy at each of those levels. Each lesson is a station on a train line. Mochi, the black cat conductor, rides along with you. Beat a station's yokai to collect its stamp.

## What's inside

- **Minna Line (stations 00–25):** kana, greetings and Lessons 1–25, one unbroken line. Each station has flashcards, quizzes, listening, typing, dictation, match pairs, a 60-second sprint, grammar drills, sentence listening, verb and adjective form drills, and kanji.
- **N5 Terminal:** an N5 word bank, Numbers Depot (numbers, prices, clock times, dates, counters, ages), Kanji Hall (all 105 N5 kanji), Verb Forge and an N5 mock exam.
- **Verb forms:** 29 drillable forms: the polite ます family from Lesson 4, plain forms, and every N5 pattern built on them, plus adjectives. Answers are generated from the verb's group.
- **Reading room:** an original conversation and an N5-style text for each lesson, with audio and comprehension questions.
- **Handwriting:** stroke-order animations and a writing pad that checks each stroke's shape, order and direction, for all kana and every kanji in the app (N5–N1 plus the extra kanji used in words).
- **Guidebook:** cheat sheets for particles, question words, こそあど, verbs, adjectives, polite and casual speech, time, family, set phrases, opposites, kana tips and how the exam works.
- **Game layer:** yen, a shop (hats, colour themes, omamori streak savers), a capsule machine with a sticker album, daily tickets, trophies, train-class ranks and streaks.
- **Spaced repetition:** every word, grammar drill, kanji and verb form is scheduled for review. The home screen shows what's due.

- **Accounts and sync (optional):** email + password sign-up, progress synced across devices, a weekly league with public leaderboards, a stats report, beta feedback and an admin dashboard. Runs on a free Supabase project: see [SETUP.md](SETUP.md).
- **Community (optional):** a members-only plaza with categories, Hot / New / Top sorting, threaded comments, likes, reports and staff moderation.
- **Installable:** add it to a phone's home screen and it works offline.

With no backend configured, progress is saved in the browser (localStorage) and Settings → Backup copies it between devices. Add `?demo=1` to the address to try the account screens with sample data.

## Art direction

Everything is drawn in code in `art.js`, in one style: Shōwa-era print. Flat colour from a fixed ink set (sumi black, washi cream, vermilion, indigo, verdigris, mustard) under a bold black keyline, halftone dots for shading, paper grain, vertical title cartouches and red seals on the landscapes. Mochi is a black-sesame cat in a conductor's cap; the yokai are the red lantern ghost, blue oni, kappa, tanuki, white shrine fox and umbrella. `app.css` carries the same rules into the interface (ink borders, hard offset shadows, seal-shaped labels, Dela Gothic One headings).

Open `/artboard.html` to see every drawing on one page after changing `art.js`.

## Run it locally

```bash
node serve.js
```

Then open http://localhost:4390. There's no build step and nothing to install.

## Deploy

It's a static site, so any static host works. `netlify.toml` publishes the repo root as-is.

`python3 build.py` makes `dist/minna-line.html`, a single bundled file for publishing as a claude.ai artifact. You don't need it for Netlify.

## Files

| Path | What it is |
|---|---|
| `index.html` | Page shell, fonts and script order |
| `core.js` | Data prep, kana/romaji tools, conjugation, number readings, saved state, spaced repetition, yen, quests, shop, trophies, sound |
| `app.js` | Screens and game sessions: quiz, yokai battle, sprint, flashcards, match, shop, capsule machine, dictionary |
| `app.css` | The look: washi paper, ink keylines, light and dark themes |
| `art.js` | All artwork (mascot, yokai, landscapes, stamps), drawn as SVG |
| `artboard.html` | Design reference page showing every drawing |
| `config.js` | Backend keys and options (empty = local-only) |
| `cloud.js` | Accounts, sync engine, leaderboard and admin data (Supabase, or the `?demo=1` pretend backend) |
| `social.js` | Welcome gate, Me page, league, stats, feedback, admin dashboard |
| `community.js` | The community: feed, posts, comments, likes, reports, staff tools |
| `classes.js`, `supabase/classes.sql` | Classes: join codes, homework, class tests, noticeboard, goals, leaderboard |
| `teach.js` | Teacher view: the desk, lessons on Google Meet, written assignments, learner/teacher switch |
| `learn/`, `tools/build_pages.js` | Public study pages for search engines, generated from the data |
| `supabase/community.sql` | Community tables, access rules and functions |
| `supabase/schema.sql` | Database tables, access rules and functions |
| `sw.js`, `manifest.webmanifest`, `icons/` | Installable app shell and offline support |
| `vendor/supabase.js` | Supabase client library (MIT) |
| `data/guide_extra.js` | Guidebook pages for travel Japanese and sound words |
| `data/vocab.js` | Core vocabulary for stations 0–20 |
| `data/vocab_n5extra.js` | Extra N5 words (Lessons 21–25 and general N5) |
| `data/grammar_a.js`, `data/grammar_b.js` | Grammar points with explanations, examples and drills (Lessons 1–25) |
| `data/kanji.js` | N5 kanji with readings and example words |
| `data/kana.js` | Hiragana, katakana and the romaji → kana table |
| `data/study_a.js`, `data/study_b.js` | Structured study notes for each grammar point (formula, bullets, rule tables, common mistakes) and lesson overviews |
| `data/vocab_overlay.js` | Cleaned meanings, word groups, usage examples and added words, layered over `vocab.js` |
| `data/reading_a.js`, `data/reading_b.js` | Conversations and reading texts with questions (Lessons 1–25) |
| `data/guide.js` | Guidebook pages |
| `data/strokes.js` | Stroke order paths for kana and N5 kanji, from KanjiVG |
| `tools/` | Scripts that rebuild `data/vocab.js` from a folder of word-list notes, and the public-page generator |

## Rebuilding the core vocab from notes

```bash
cd tools
python3 1_parse_notes.py "/path/to/Learning Japanese"   # → raw.json
python3 2_normalize.py                                   # → words.json
python3 3_build_vocab.py                                 # → ../data/vocab.js
```

Rebuilding only replaces `data/vocab.js`. The cleaned wording lives in `data/vocab_overlay.js`, keyed by `lesson:kana`, so it survives. Saved progress is keyed to word ids and drill positions, so never reorder or delete drills.

## Credits

Stroke order data in `data/strokes.js` comes from [KanjiVG](https://kanjivg.tagaini.net), copyright Ulrich Apel, licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). That file stays under the same licence.

Kanji readings, meanings and stroke counts in `data/kanji_more.js` come from [KANJIDIC](https://www.edrdg.org/wiki/index.php/KANJIDIC_Project) (EDRDG), CC BY-SA 4.0, via the kanji-data project. JLPT kanji levels are the commonly used unofficial lists.

Every explanation, example sentence, dialogue and passage is original to this project. It is not affiliated with, or derived from the text of, any textbook; characters and company names in the examples are invented.
