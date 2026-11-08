# Minna Line

A study game for Japanese from JLPT N5 to N2: *Minna no Nihongo* Lessons 1–50, then 24 themed units each for N3 and N2, with a Reading Academy at both levels. Each lesson is a station on a train line. Mochi, the cat conductor, rides along with you. Beat a station's yokai to collect its stamp.

## What's inside

- **Minna Line (stations 00–20):** kana, greetings and Lessons 1–20. Each station has flashcards, quizzes, listening, typing, dictation, match pairs, a 60-second sprint, grammar drills, sentence listening, verb and adjective form drills, and kanji.
- **N5 Express:** grammar from Lessons 21–25, an N5 word bank, Numbers Depot (numbers, prices, clock times, dates, counters, ages), Kanji Hall (all 105 N5 kanji), Verb Forge and an N5 mock exam.
- **Verb forms:** 29 drillable forms: the polite ます family from Lesson 4, plain forms, and every N5 pattern built on them, plus adjectives. Answers are generated from the verb's group.
- **Reading room:** an original conversation and an N5-style text for each lesson, with audio and comprehension questions.
- **Handwriting:** stroke-order animations and a writing pad that checks each stroke's shape, order and direction, for all kana and N5 kanji.
- **Guidebook:** cheat sheets for particles, question words, こそあど, verbs, adjectives, polite and casual speech, time, family, set phrases, opposites, kana tips and how the exam works.
- **Game layer:** yen, a shop (hats, colour themes, omamori streak savers), a capsule machine with a sticker album, daily tickets, trophies, train-class ranks and streaks.
- **Spaced repetition:** every word, grammar drill, kanji and verb form is scheduled for review. The home screen shows what's due.

Progress is saved in the browser (localStorage). Settings → Backup copies it to move between devices.

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
| `app.css` | The look: pastel colours, light and dark themes |
| `data/vocab.js` | Lessons 0–20 vocab, built from my lesson notes |
| `data/vocab_n5extra.js` | Extra N5 words (Lessons 21–25 and general N5) |
| `data/grammar_a.js`, `data/grammar_b.js` | Grammar points with explanations, examples and drills (Lessons 1–25) |
| `data/kanji.js` | N5 kanji with readings and example words |
| `data/kana.js` | Hiragana, katakana and the romaji → kana table |
| `data/study_a.js`, `data/study_b.js` | Structured study notes for each grammar point (formula, bullets, rule tables, common mistakes) and lesson overviews |
| `data/vocab_overlay.js` | Cleaned meanings, word groups, usage examples and added words, layered over `vocab.js` |
| `data/reading_a.js`, `data/reading_b.js` | Conversations and reading texts with questions (Lessons 1–25) |
| `data/guide.js` | Guidebook pages |
| `data/strokes.js` | Stroke order paths for kana and N5 kanji, from KanjiVG |
| `tools/` | Scripts that turn the Obsidian lesson notes into `data/vocab.js` |

## Rebuilding vocab from the lesson notes

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

All N4 and N3 words lists, sentences and passages are original to this project. No textbook content is reproduced.
