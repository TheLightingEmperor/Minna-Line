// Grammar data — Minna no Nihongo I, Lessons 1–10
window.GRAMMAR = (window.GRAMMAR || []).concat([

  // ───────────────────────── LESSON 1 ─────────────────────────
  {
    id: "L1-1",
    lesson: 1,
    title: "N1 は N2 です",
    meaning: "N1 is N2",
    explain: "は marks the topic of the sentence and is read 'wa', not 'ha'. です at the end makes the sentence polite and works like 'am / is / are'. Japanese has no words for 'a' or 'the', and the topic is often dropped when it is obvious.",
    examples: [
      { jp: "わたしは マイク・ミラーです。", ro: "Watashi wa Maiku Mirā desu.", en: "I am Mike Miller." },
      { jp: "ワンさんは いしゃです。", ro: "Wan-san wa isha desu.", en: "Mr. Wang is a doctor." },
      { jp: "サントスさんは ブラジルじんです。", ro: "Santosu-san wa Burajiru-jin desu.", en: "Mr. Santos is Brazilian." }
    ],
    drills: [
      { type: "fill", jp: "わたしは がくせい＿＿。", answer: "です", options: ["です", "か", "の", "も"], en: "I am a student." },
      { type: "fill", jp: "わたし＿＿ かいしゃいんです。", answer: "は", options: ["は", "の", "か", "を"], en: "I am an office worker." },
      { type: "order", tiles: ["わたしは", "インドじん", "です"], en: "I am Indian." },
      { type: "order", tiles: ["カリナさんは", "インドネシアじん", "です"], en: "Ms. Karina is Indonesian." },
      { type: "choose", q: "How is the particle は read in 'わたしは ミラーです'?", answer: "wa", options: ["wa", "ha", "o", "e"] },
      { type: "choose", q: "How do you say: 'Mr. Yamada is an office worker.'?", answer: "やまださんは かいしゃいんです。", options: ["やまださんの かいしゃいんです。", "やまださんは かいしゃいんです。", "やまださんは かいしゃいんですか。", "かいしゃいんは やまださんじゃ ありません。"] }
    ]
  },
  {
    id: "L1-2",
    lesson: 1,
    title: "N1 は N2 じゃ ありません",
    meaning: "N1 is not N2",
    explain: "じゃ ありません is the negative of です. では ありません means the same but is more formal (では is read 'dewa'). Both attach directly to the noun.",
    examples: [
      { jp: "サントスさんは がくせいじゃ ありません。", ro: "Santosu-san wa gakusei ja arimasen.", en: "Mr. Santos is not a student." },
      { jp: "わたしは せんせいでは ありません。", ro: "Watashi wa sensei dewa arimasen.", en: "I am not a teacher." },
      { jp: "ミラーさんは にほんじんじゃ ありません。", ro: "Mirā-san wa Nihon-jin ja arimasen.", en: "Mr. Miller is not Japanese." }
    ],
    drills: [
      { type: "fill", jp: "ワンさんは かいしゃいん＿＿ ありません。", answer: "じゃ", options: ["じゃ", "です", "か", "の"], en: "Mr. Wang is not an office worker." },
      { type: "fill", jp: "わたしは アメリカじんじゃ ＿＿。", answer: "ありません", options: ["ありません", "あります", "です", "か"], en: "I am not American." },
      { type: "order", tiles: ["カリナさんは", "せんせいじゃ", "ありません"], en: "Ms. Karina is not a teacher." },
      { type: "choose", q: "Which is the more formal way to say 'is not'?", answer: "では ありません", options: ["では ありません", "じゃ ありません", "です", "ですか"] },
      { type: "choose", q: "How do you say: 'I am not a doctor.'?", answer: "わたしは いしゃじゃ ありません。", options: ["わたしは いしゃです。", "わたしは いしゃですか。", "わたしは いしゃじゃ ありません。", "わたしも いしゃです。"] },
      { type: "choose", q: "'じゃ ありません' is the negative of which word?", answer: "です", options: ["です", "か", "も", "の"] }
    ]
  },
  {
    id: "L1-3",
    lesson: 1,
    title: "S か (questions)",
    meaning: "Adding か turns a sentence into a question",
    explain: "Put か at the end of a sentence to make a question; the word order does not change. Answer yes/no questions with はい (yes) or いいえ (no) and repeat the noun. In Japanese, a question mark is not needed — か does the job.",
    examples: [
      { jp: "ミラーさんは アメリカじんですか。", ro: "Mirā-san wa Amerika-jin desu ka.", en: "Is Mr. Miller American?" },
      { jp: "はい、アメリカじんです。", ro: "Hai, Amerika-jin desu.", en: "Yes, he is American." },
      { jp: "いいえ、いしゃじゃ ありません。けんきゅうしゃです。", ro: "Iie, isha ja arimasen. Kenkyūsha desu.", en: "No, she is not a doctor. She is a researcher." }
    ],
    drills: [
      { type: "fill", jp: "サントスさんは かいしゃいんです＿＿。", answer: "か", options: ["か", "の", "は", "も"], en: "Is Mr. Santos an office worker?" },
      { type: "fill", jp: "ターワーさんは がくせいですか。…＿＿、がくせいです。", answer: "はい", options: ["はい", "いいえ", "だれ", "なん"], en: "Is Thawaa a student? — Yes, he is a student." },
      { type: "fill", jp: "ワンさんは エンジニアですか。…いいえ、エンジニア＿＿ ありません。", answer: "じゃ", options: ["じゃ", "です", "か", "の"], en: "Is Mr. Wang an engineer? — No, he is not an engineer." },
      { type: "order", tiles: ["あのかたは", "せんせい", "ですか"], en: "Is that person a teacher?" },
      { type: "choose", q: "Mr. Miller is American. Someone asks 'ミラーさんは イギリスじんですか。' Which answer is correct?", answer: "いいえ、イギリスじんじゃ ありません。", options: ["はい、イギリスじんです。", "いいえ、イギリスじんです。", "はい、イギリスじんじゃ ありません。", "いいえ、イギリスじんじゃ ありません。"] },
      { type: "choose", q: "Turn 'やまださんは ぎんこういんです。' into a question.", answer: "やまださんは ぎんこういんですか。", options: ["やまださんは ぎんこういんですか。", "やまださんか ぎんこういんです。", "ぎんこういんは やまださんです。", "やまださんは ぎんこういんか。"] }
    ]
  },
  {
    id: "L1-4",
    lesson: 1,
    title: "N も",
    meaning: "N also / too",
    explain: "も means 'also / too' and REPLACES は — never say はも. Use it when the same thing is true of another person or thing. With a negative it means 'not … either'.",
    examples: [
      { jp: "ミラーさんは かいしゃいんです。グプタさんも かいしゃいんです。", ro: "Mirā-san wa kaishain desu. Guputa-san mo kaishain desu.", en: "Mr. Miller is an office worker. Mr. Gupta is also an office worker." },
      { jp: "わたしも がくせいです。", ro: "Watashi mo gakusei desu.", en: "I am a student too." },
      { jp: "サントスさんも にほんじんじゃ ありません。", ro: "Santosu-san mo Nihon-jin ja arimasen.", en: "Mr. Santos isn't Japanese either." }
    ],
    drills: [
      { type: "fill", jp: "カリナさんは がくせいです。ターワーさん＿＿ がくせいです。", answer: "も", options: ["も", "の", "か", "を"], en: "Karina is a student. Thawaa is also a student." },
      { type: "fill", jp: "ミラーさんは にほんじんじゃ ありません。サントスさん＿＿ にほんじんじゃ ありません。", answer: "も", options: ["も", "の", "か", "を"], en: "Mr. Miller isn't Japanese. Mr. Santos isn't Japanese either." },
      { type: "order", tiles: ["わたしも", "かいしゃいん", "です"], en: "I am also an office worker." },
      { type: "choose", q: "How do you say: 'Mr. Wang is also a doctor.'?", answer: "ワンさんも いしゃです。", options: ["ワンさんはも いしゃです。", "ワンさんの いしゃです。", "ワンさんも いしゃです。", "ワンさんは いしゃもです。"] },
      { type: "choose", q: "A says 'わたしは アメリカじんです。' B is American too. What does B say?", answer: "わたしも アメリカじんです。", options: ["わたしも アメリカじんです。", "わたしは アメリカじんですか。", "わたしも アメリカじんじゃ ありません。", "あなたも アメリカじんです。"] },
      { type: "choose", q: "も takes the place of which particle?", answer: "は", options: ["は", "の", "か", "です"] }
    ]
  },
  {
    id: "L1-5",
    lesson: 1,
    title: "N1 の N2 (belonging to)",
    meaning: "N2 of / at N1 — e.g. IMCの しゃいん (an IMC employee)",
    explain: "の joins two nouns; the first noun describes the second. Here N1 is the group the person belongs to: a company, school or hospital. Note the order is the reverse of English 'of': IMCの しゃいん = 'employee of IMC'.",
    examples: [
      { jp: "ミラーさんは IMCの しゃいんです。", ro: "Mirā-san wa IMC no shain desu.", en: "Mr. Miller is an IMC employee." },
      { jp: "カリナさんは ふじだいがくの がくせいです。", ro: "Karina-san wa Fuji-daigaku no gakusei desu.", en: "Ms. Karina is a student at Fuji University." },
      { jp: "ワンさんは こうべびょういんの いしゃです。", ro: "Wan-san wa Kōbe-byōin no isha desu.", en: "Mr. Wang is a doctor at Kobe Hospital." }
    ],
    drills: [
      { type: "fill", jp: "シュミットさんは パワーでんき＿＿ しゃいんです。", answer: "の", options: ["の", "は", "も", "か"], en: "Mr. Schmidt is a Power Electric employee." },
      { type: "fill", jp: "ターワーさんは さくらだいがく＿＿ がくせいです。", answer: "の", options: ["の", "か", "を", "じん"], en: "Thawaa is a student at Sakura University." },
      { type: "order", tiles: ["イーさんは", "AKCの", "けんきゅうしゃです"], en: "Ms. Lee is a researcher at AKC." },
      { type: "order", tiles: ["サントスさんは", "ブラジルエアーの", "しゃいん", "ですか"], en: "Is Mr. Santos a Brazil Air employee?" },
      { type: "choose", q: "How do you say: 'a teacher at Sakura University'?", answer: "さくらだいがくの せんせい", options: ["せんせいの さくらだいがく", "さくらだいがくの せんせい", "さくらだいがくは せんせい", "さくらだいがくも せんせい"] },
      { type: "choose", q: "'IMCの しゃいん' means…", answer: "an employee of IMC", options: ["an employee of IMC", "IMC is an employee", "IMC and an employee", "the president of IMC"] }
    ]
  },
  {
    id: "L1-6",
    lesson: 1,
    title: "～さん / ～じん / ～から きました",
    meaning: "Mr./Ms. ~ ; a person from (country) ; I came from ~",
    explain: "Add さん after someone else's name (family or given name) to be polite — never after your own name. Young children get ちゃん instead. Country + じん means a person from that country (インドじん = Indian), and 'country から きました' means 'I came from (country)'.",
    examples: [
      { jp: "こちらは ミラーさんです。", ro: "Kochira wa Mirā-san desu.", en: "This is Mr. Miller." },
      { jp: "わたしは さとうです。", ro: "Watashi wa Satō desu.", en: "I'm Sato. (no さん for yourself)" },
      { jp: "グプタさんは インドから きました。", ro: "Guputa-san wa Indo kara kimashita.", en: "Mr. Gupta came from India." }
    ],
    drills: [
      { type: "fill", jp: "シュミットさんは ドイツ＿＿です。", answer: "じん", options: ["じん", "さん", "の", "か"], en: "Mr. Schmidt is German." },
      { type: "order", tiles: ["こちらは", "イーさん", "です"], en: "This is Ms. Lee." },
      { type: "order", tiles: ["わたしは", "タイから", "きました"], en: "I came from Thailand." },
      { type: "choose", q: "Your name is Sato. How do you introduce yourself?", answer: "わたしは さとうです。", options: ["わたしは さとうさんです。", "さとうさんは わたしです。", "わたしの さとうです。", "わたしは さとうです。"] },
      { type: "choose", q: "Which word means 'an Indonesian (person)'?", answer: "インドネシアじん", options: ["インドネシアじん", "インドネシアさん", "インドネシアの", "インドネシアか"] },
      { type: "choose", q: "Mr. Santos's young daughter is Teresa. What do you usually call her?", answer: "テレーザちゃん", options: ["テレーザじん", "テレーザちゃん", "テレーザの", "テレーザか"] }
    ]
  },
  {
    id: "L1-7",
    lesson: 1,
    title: "だれ・どなた / なんさい・おいくつ",
    meaning: "Who? / How old?",
    explain: "だれ means 'who'; どなた is the polite version. なんさい means 'how old'; おいくつ is more polite. Put the question word where the answer will go and keep か at the end — and don't answer question-word questions with はい/いいえ. Watch the readings: 1 = いっさい, 8 = はっさい, 10 = じゅっさい.",
    examples: [
      { jp: "あのかたは どなたですか。…ワンさんです。", ro: "Ano kata wa donata desu ka. …Wan-san desu.", en: "Who is that person? — That's Mr. Wang." },
      { jp: "テレーザちゃんは なんさいですか。…きゅうさいです。", ro: "Terēza-chan wa nan-sai desu ka. …Kyū-sai desu.", en: "How old is Teresa? — She's nine." },
      { jp: "やまださんは おいくつですか。…よんじゅうごさいです。", ro: "Yamada-san wa oikutsu desu ka. …Yonjūgo-sai desu.", en: "How old are you, Mr. Yamada? — I'm 45." }
    ],
    drills: [
      { type: "fill", jp: "あのひとは ＿＿ですか。…カリナさんです。", answer: "だれ", options: ["だれ", "なん", "なんさい", "おいくつ"], en: "Who is that person? — It's Karina." },
      { type: "fill", jp: "テレーザちゃんは ＿＿ですか。…きゅうさいです。", answer: "なんさい", options: ["なんさい", "だれ", "どなた", "なん"], en: "How old is Teresa? — She's nine." },
      { type: "order", tiles: ["あのかたは", "どなた", "ですか"], en: "Who is that person? (polite)" },
      { type: "choose", q: "Which is the more polite way to ask someone's age?", answer: "おいくつですか。", options: ["なんさいですか。", "おいくつですか。", "だれですか。", "なんですか。"] },
      { type: "choose", q: "'あのひとは だれですか。' Which reply is correct?", answer: "やまださんです。", options: ["はい、やまださんです。", "いいえ、だれじゃ ありません。", "やまださんです。", "やまださんですか。"] },
      { type: "choose", q: "How do you read '1 year old'?", answer: "いっさい", options: ["いっさい", "いちさい", "ひとさい", "いつさい"] }
    ]
  },

  // ───────────────────────── LESSON 2 ─────────────────────────
  {
    id: "L2-1",
    lesson: 2,
    title: "これ / それ / あれ",
    meaning: "this one / that one (near you) / that one over there",
    explain: "これ is a thing near the speaker, それ a thing near the listener, and あれ a thing far from both. They stand alone as nouns, so they are followed by a particle like は — never by another noun. Ask about an object with 'これは なんですか'.",
    examples: [
      { jp: "これは じしょです。", ro: "Kore wa jisho desu.", en: "This is a dictionary." },
      { jp: "それは なんですか。", ro: "Sore wa nan desu ka.", en: "What is that (near you)?" },
      { jp: "あれは コンピューターです。", ro: "Are wa konpyūtā desu.", en: "That over there is a computer." }
    ],
    drills: [
      { type: "fill", jp: "＿＿は とけいです。", answer: "これ", options: ["これ", "この", "その", "あの"], en: "This (near me) is a watch." },
      { type: "fill", jp: "＿＿は なんですか。", answer: "それ", options: ["それ", "その", "あの", "この"], en: "What is that (near you)?" },
      { type: "order", tiles: ["あれは", "コンピューター", "ですか"], en: "Is that over there a computer?" },
      { type: "order", tiles: ["それは", "なん", "ですか"], en: "What is that?" },
      { type: "choose", q: "A book is far from both you and your friend. What do you say?", answer: "あれは ほんです。", options: ["これは ほんです。", "それは ほんです。", "あれは ほんです。", "あれの ほんです。"] },
      { type: "choose", q: "Your friend holds up an object and asks 'これは なんですか。' How do you answer?", answer: "それは かぎです。", options: ["それは かぎです。", "これは かぎです。", "あれは かぎです。", "それは かぎですか。"] }
    ]
  },
  {
    id: "L2-2",
    lesson: 2,
    title: "この / その / あの N",
    meaning: "this N / that N / that N over there",
    explain: "この, その and あの must be followed directly by a noun: この ほん = 'this book'. They cannot stand alone — use これ/それ/あれ for that. The near/far rules are the same as これ/それ/あれ.",
    examples: [
      { jp: "この ほんは わたしのです。", ro: "Kono hon wa watashi no desu.", en: "This book is mine." },
      { jp: "その かさは だれのですか。", ro: "Sono kasa wa dare no desu ka.", en: "Whose is that umbrella?" },
      { jp: "あの ひとは ミラーさんです。", ro: "Ano hito wa Mirā-san desu.", en: "That person over there is Mr. Miller." }
    ],
    drills: [
      { type: "fill", jp: "＿＿ かばんは わたしのです。", answer: "この", options: ["この", "これ", "それ", "あれ"], en: "This bag is mine." },
      { type: "fill", jp: "＿＿ くるまは サントスさんのです。", answer: "あの", options: ["あの", "あれ", "これ", "それ"], en: "That car over there is Mr. Santos's." },
      { type: "order", tiles: ["その", "かさは", "だれの", "ですか"], en: "Whose umbrella is that?" },
      { type: "order", tiles: ["あの", "ひとは", "だれ", "ですか"], en: "Who is that person over there?" },
      { type: "choose", q: "Which sentence is correct?", answer: "この カメラは わたしのです。", options: ["これ カメラは わたしのです。", "このは カメラです。", "この カメラは わたしのです。", "あれ カメラは わたしのです。"] },
      { type: "choose", q: "What is the difference between これ and この?", answer: "これ stands alone; この must be followed by a noun", options: ["これ stands alone; この must be followed by a noun", "これ is polite; この is casual", "これ is for people; この is for things", "これ is far away; この is near"] }
    ]
  },
  {
    id: "L2-3",
    lesson: 2,
    title: "そうです / そうじゃ ありません / そうですか",
    meaning: "That's right / That's not right / I see",
    explain: "For yes/no questions about nouns you can answer はい、そうです or いいえ、そうじゃ ありません (also いいえ、ちがいます). そうですか said with a falling tone is not a question — it means 'Oh, I see' when you hear new information.",
    examples: [
      { jp: "それは めいしですか。…はい、そうです。", ro: "Sore wa meishi desu ka. …Hai, sō desu.", en: "Is that a business card? — Yes, it is." },
      { jp: "これは ボールペンですか。…いいえ、そうじゃ ありません。シャープペンシルです。", ro: "Kore wa bōrupen desu ka. …Iie, sō ja arimasen. Shāpupenshiru desu.", en: "Is this a ballpoint pen? — No, it isn't. It's a mechanical pencil." },
      { jp: "これは えいごの ほんです。…そうですか。", ro: "Kore wa eigo no hon desu. …Sō desu ka.", en: "This is an English book. — Oh, I see." }
    ],
    drills: [
      { type: "fill", jp: "それは じしょですか。…はい、＿＿です。", answer: "そう", options: ["そう", "なん", "だれ", "この"], en: "Is that a dictionary? — Yes, it is." },
      { type: "fill", jp: "これは ざっしですか。…いいえ、そう＿＿ ありません。", answer: "じゃ", options: ["じゃ", "です", "か", "も"], en: "Is this a magazine? — No, it isn't." },
      { type: "fill", jp: "これは わたしの くるまです。…＿＿。", answer: "そうですか", options: ["そうですか", "そうです", "ちがいます", "なんですか"], en: "This is my car. — Oh, I see." },
      { type: "order", tiles: ["いいえ", "そうじゃ", "ありません"], en: "No, it isn't." },
      { type: "choose", q: "'これは ノートですか。' It's actually a pocket diary (てちょう). Which answer is correct?", answer: "いいえ、そうじゃ ありません。てちょうです。", options: ["はい、そうです。てちょうです。", "いいえ、そうです。", "はい、そうじゃ ありません。", "いいえ、そうじゃ ありません。てちょうです。"] },
      { type: "choose", q: "Another way to say 'いいえ、そうじゃ ありません'?", answer: "いいえ、ちがいます。", options: ["いいえ、ちがいます。", "いいえ、そうです。", "はい、ちがいます。", "そうですか。"] }
    ]
  },
  {
    id: "L2-4",
    lesson: 2,
    title: "S1 か、S2 か",
    meaning: "Is it S1 or S2? (choice question)",
    explain: "Put two questions side by side to ask 'A or B?'. Answer by simply stating the right one — do NOT start with はい or いいえ, and don't answer そうです.",
    examples: [
      { jp: "これは「9」ですか、「7」ですか。…「9」です。", ro: "Kore wa 'kyū' desu ka, 'nana' desu ka. …'Kyū' desu.", en: "Is this a 9 or a 7? — It's a 9." },
      { jp: "それは えいごの ほんですか、にほんごの ほんですか。", ro: "Sore wa eigo no hon desu ka, Nihongo no hon desu ka.", en: "Is that an English book or a Japanese book?" },
      { jp: "ミラーさんは アメリカじんですか、イギリスじんですか。…アメリカじんです。", ro: "Mirā-san wa Amerika-jin desu ka, Igirisu-jin desu ka. …Amerika-jin desu.", en: "Is Mr. Miller American or British? — American." }
    ],
    drills: [
      { type: "fill", jp: "それは ざっしです＿＿、しんぶんですか。", answer: "か", options: ["か", "も", "の", "は"], en: "Is that a magazine or a newspaper?" },
      { type: "fill", jp: "カリナさんは がくせいですか、せんせいですか。…＿＿です。", answer: "がくせい", options: ["がくせい", "はい", "いいえ", "そう"], en: "Is Karina a student or a teacher? — She's a student." },
      { type: "order", tiles: ["ワンさんは", "いしゃですか", "せんせいですか"], en: "Is Mr. Wang a doctor or a teacher?" },
      { type: "choose", q: "'これは じしょですか、ほんですか。' It's a dictionary. Which answer is correct?", answer: "じしょです。", options: ["はい、じしょです。", "いいえ、ほんです。", "はい、そうです。", "じしょです。"] },
      { type: "choose", q: "How do you ask: 'Is this a 9 or a 7?'", answer: "これは「9」ですか、「7」ですか。", options: ["これは「9」ですか。「7」です。", "これは「9」ですか、「7」ですか。", "これは「9」も「7」ですか。", "これは「9」の「7」ですか。"] }
    ]
  },
  {
    id: "L2-5",
    lesson: 2,
    title: "N1 の N2 (about / owner) & の = 'one'",
    meaning: "a book about N1 / N1's thing / it's N1's",
    explain: "の can show what something is about (コンピューターの ほん = a book about computers) or who owns it (わたしの かさ = my umbrella). When the thing is already clear, drop it: わたしのです = 'It's mine'. Ask the owner with だれの. (Don't drop the noun when it's a person.)",
    examples: [
      { jp: "これは コンピューターの ほんです。", ro: "Kore wa konpyūtā no hon desu.", en: "This is a book about computers." },
      { jp: "これは わたしの かさです。", ro: "Kore wa watashi no kasa desu.", en: "This is my umbrella." },
      { jp: "あの かばんは だれのですか。…さとうさんのです。", ro: "Ano kaban wa dare no desu ka. …Satō-san no desu.", en: "Whose is that bag? — It's Ms. Sato's." }
    ],
    drills: [
      { type: "fill", jp: "これは ミラーさん＿＿ かばんです。", answer: "の", options: ["の", "は", "も", "か"], en: "This is Mr. Miller's bag." },
      { type: "fill", jp: "この かぎは だれ＿＿ですか。", answer: "の", options: ["の", "は", "か", "も"], en: "Whose key is this?" },
      { type: "order", tiles: ["これは", "くるまの", "ざっしです"], en: "This is a car magazine." },
      { type: "order", tiles: ["あの", "かさは", "さとうさんの", "です"], en: "That umbrella is Ms. Sato's." },
      { type: "choose", q: "How do you say: 'This bag is mine.'?", answer: "この かばんは わたしのです。", options: ["この かばんは わたしです。", "わたしの この かばんです。", "これ かばんは わたしのです。", "この かばんは わたしのです。"] },
      { type: "choose", q: "'コンピューターの ほん' means…", answer: "a book about computers", options: ["a book about computers", "a computer and a book", "the book is a computer", "a book inside the computer"] }
    ]
  },
  {
    id: "L2-6",
    lesson: 2,
    title: "なんの N",
    meaning: "What kind of N? / N about what?",
    explain: "なんの + noun asks what something is about or what type it is: なんの ほん = 'a book about what?'. Compare だれの + noun, which asks whose it is. Answer with 'N1 の N2'.",
    examples: [
      { jp: "これは なんの ほんですか。…くるまの ほんです。", ro: "Kore wa nan no hon desu ka. …Kuruma no hon desu.", en: "What is this book about? — It's a book about cars." },
      { jp: "それは なんの ざっしですか。…カメラの ざっしです。", ro: "Sore wa nan no zasshi desu ka. …Kamera no zasshi desu.", en: "What magazine is that? — It's a camera magazine." },
      { jp: "これは なんの CDですか。…にほんごの CDです。", ro: "Kore wa nan no shīdī desu ka. …Nihongo no shīdī desu.", en: "What CD is this? — It's a Japanese-language CD." }
    ],
    drills: [
      { type: "fill", jp: "これは ＿＿の ざっしですか。…コンピューターの ざっしです。", answer: "なん", options: ["なん", "なに", "だれ", "この"], en: "What is this magazine about? — It's a computer magazine." },
      { type: "fill", jp: "それは なん＿＿ かぎですか。…くるまの かぎです。", answer: "の", options: ["の", "は", "か", "も"], en: "What key is that? — It's a car key." },
      { type: "order", tiles: ["これは", "なんの", "ほん", "ですか"], en: "What is this book about?" },
      { type: "choose", q: "'これは なんの ほんですか。' Which is a good answer?", answer: "にほんごの ほんです。", options: ["わたしの ほんです。", "はい、ほんです。", "それは ほんです。", "にほんごの ほんです。"] },
      { type: "choose", q: "'だれの ほんですか' asks…", answer: "whose book it is", options: ["whose book it is", "what the book is about", "where the book is", "how much the book is"] }
    ]
  },

  // ───────────────────────── LESSON 3 ─────────────────────────
  {
    id: "L3-1",
    lesson: 3,
    title: "ここ / そこ / あそこ",
    meaning: "here / there (near you) / over there",
    explain: "ここ, そこ and あそこ are PLACES, while これ/それ/あれ are things. ここ is where the speaker is, そこ is near the listener, and あそこ is far from both. When speaker and listener are in the same area, that area is ここ.",
    examples: [
      { jp: "ここは しょくどうです。", ro: "Koko wa shokudō desu.", en: "This (place) is the cafeteria." },
      { jp: "そこは トイレです。", ro: "Soko wa toire desu.", en: "That place (near you) is the toilet." },
      { jp: "あそこは じむしょです。", ro: "Asoko wa jimusho desu.", en: "Over there is the office." }
    ],
    drills: [
      { type: "fill", jp: "＿＿は きょうしつです。", answer: "ここ", options: ["ここ", "これ", "この", "どこ"], en: "This place (where we are) is the classroom." },
      { type: "fill", jp: "＿＿は じむしょです。", answer: "あそこ", options: ["あそこ", "ここ", "あの", "どこ"], en: "Over there is the office." },
      { type: "order", tiles: ["あそこは", "かいぎしつ", "です"], en: "Over there is the meeting room." },
      { type: "choose", q: "Which word refers to a PLACE (not a thing)?", answer: "そこ", options: ["そこ", "それ", "その", "そう"] },
      { type: "choose", q: "You and a friend are both standing in the cafeteria. How do you say 'This is the cafeteria'?", answer: "ここは しょくどうです。", options: ["そこは しょくどうです。", "あそこは しょくどうです。", "これは しょくどうです。", "ここは しょくどうです。"] }
    ]
  },
  {
    id: "L3-2",
    lesson: 3,
    title: "N は place です / どこ",
    meaning: "N is (located) in/at place; Where is N?",
    explain: "'N は ここ/そこ/あそこ です' tells where a thing, place or person is. Ask with 'N は どこですか'. Floors use ～かい, but 3rd floor is さんがい and 'which floor' is なんがい.",
    examples: [
      { jp: "トイレは あそこです。", ro: "Toire wa asoko desu.", en: "The toilet is over there." },
      { jp: "しょくどうは どこですか。…ちかです。", ro: "Shokudō wa doko desu ka. …Chika desu.", en: "Where is the cafeteria? — It's in the basement." },
      { jp: "やまださんは じむしょです。", ro: "Yamada-san wa jimusho desu.", en: "Mr. Yamada is in the office." }
    ],
    drills: [
      { type: "fill", jp: "トイレは ＿＿ですか。", answer: "どこ", options: ["どこ", "なん", "だれ", "いくら"], en: "Where is the toilet?" },
      { type: "fill", jp: "ミラーさんは かいぎしつ＿＿。", answer: "です", options: ["です", "の", "か", "を"], en: "Mr. Miller is in the meeting room." },
      { type: "order", tiles: ["エレベーターは", "あそこ", "です"], en: "The elevator is over there." },
      { type: "order", tiles: ["じどうはんばいきは", "どこ", "ですか"], en: "Where is the vending machine?" },
      { type: "choose", q: "'かいぎしつは なんがいですか。' — It's on the 3rd floor. Which answer is correct?", answer: "さんがいです。", options: ["さんがいです。", "さんばんです。", "みっかいです。", "さんがいですか。"] },
      { type: "choose", q: "How do you say: 'Where is Ms. Sato?'", answer: "さとうさんは どこですか。", options: ["さとうさんは だれですか。", "さとうさんは どこです。", "どこは さとうさんですか。", "さとうさんは どこですか。"] }
    ]
  },
  {
    id: "L3-3",
    lesson: 3,
    title: "こちら / そちら / あちら / どちら",
    meaning: "polite here / there / over there / where (also 'this way')",
    explain: "こちら, そちら, あちら and どちら are the polite versions of ここ, そこ, あそこ and どこ, and also mean 'this way / that way'. Shop and hotel staff use them a lot. どちら is also the polite way to ask someone's country, company or school.",
    examples: [
      { jp: "エレベーターは あちらです。", ro: "Erebētā wa achira desu.", en: "The elevator is that way. (polite)" },
      { jp: "おくには どちらですか。…インドです。", ro: "O-kuni wa dochira desu ka. …Indo desu.", en: "Where are you from? — India." },
      { jp: "かいしゃは どちらですか。…IMCです。", ro: "Kaisha wa dochira desu ka. …IMC desu.", en: "Which company do you work for? — IMC." }
    ],
    drills: [
      { type: "fill", jp: "おくには ＿＿ですか。", answer: "どちら", options: ["どちら", "こちら", "だれ", "なん"], en: "Which country are you from? (polite)" },
      { type: "fill", jp: "うけつけは ＿＿です。", answer: "あちら", options: ["あちら", "あれ", "あの", "どちら"], en: "The reception is that way, over there. (polite)" },
      { type: "order", tiles: ["かいしゃは", "どちら", "ですか"], en: "Which company do you work for? (polite)" },
      { type: "choose", q: "What is the polite version of ここ?", answer: "こちら", options: ["こちら", "これ", "この", "こう"] },
      { type: "choose", q: "Which is the most polite way to ask where someone is from?", answer: "おくには どちらですか。", options: ["くには どこですか。", "おくには なんですか。", "おくには どちらですか。", "くには だれですか。"] }
    ]
  },
  {
    id: "L3-4",
    lesson: 3,
    title: "N1 の N2 (country / maker)",
    meaning: "N2 made in N1 / N2 made by N1",
    explain: "When N1 is a country, 'N1 の N2' says where something comes from: にほんの くるま = a Japanese car. When N1 is a company, it is the maker. Ask with どこの N ('made where / by which company?').",
    examples: [
      { jp: "これは にほんの くるまです。", ro: "Kore wa Nihon no kuruma desu.", en: "This is a Japanese car." },
      { jp: "これは どこの ワインですか。…イタリアの ワインです。", ro: "Kore wa doko no wain desu ka. …Itaria no wain desu.", en: "Where is this wine from? — It's Italian wine." },
      { jp: "それは パワーでんきの コンピューターです。", ro: "Sore wa Pawā-denki no konpyūtā desu.", en: "That's a Power Electric computer." }
    ],
    drills: [
      { type: "fill", jp: "これは ＿＿の とけいですか。…スイスの とけいです。", answer: "どこ", options: ["どこ", "なん", "だれ", "いくら"], en: "Where is this watch from? — It's a Swiss watch." },
      { type: "fill", jp: "これは フランス＿＿ ワインです。", answer: "の", options: ["の", "じん", "は", "か"], en: "This is French wine." },
      { type: "order", tiles: ["それは", "どこの", "カメラ", "ですか"], en: "Where is that camera from?" },
      { type: "order", tiles: ["これは", "イタリアの", "くつです"], en: "These are Italian shoes." },
      { type: "choose", q: "'にほんの くるま' means…", answer: "a Japanese(-made) car", options: ["a Japanese(-made) car", "a car going to Japan", "Japan is a car", "a car and Japan"] }
    ]
  },
  {
    id: "L3-5",
    lesson: 3,
    title: "いくら / ～えん",
    meaning: "How much?",
    explain: "Ask a price with 'N は いくらですか' and answer with ～えん (yen). Watch the sound changes: 300 = さんびゃく, 600 = ろっぴゃく, 800 = はっぴゃく, 3,000 = さんぜん, 8,000 = はっせん. To buy, say 'じゃ、これを ください'.",
    examples: [
      { jp: "この ネクタイは いくらですか。…せんごひゃくえんです。", ro: "Kono nekutai wa ikura desu ka. …Sen gohyaku-en desu.", en: "How much is this tie? — It's 1,500 yen." },
      { jp: "その ワインは いくらですか。…さんぜんえんです。", ro: "Sono wain wa ikura desu ka. …Sanzen-en desu.", en: "How much is that wine? — It's 3,000 yen." },
      { jp: "じゃ、これを ください。", ro: "Ja, kore o kudasai.", en: "Well then, I'll take this one." }
    ],
    drills: [
      { type: "fill", jp: "この くつは ＿＿ですか。", answer: "いくら", options: ["いくら", "どこ", "なん", "だれ"], en: "How much are these shoes?" },
      { type: "order", tiles: ["この", "ワインは", "いくら", "ですか"], en: "How much is this wine?" },
      { type: "order", tiles: ["じゃ", "これを", "ください"], en: "Well then, I'll take this one." },
      { type: "choose", q: "How do you read 300えん?", answer: "さんびゃくえん", options: ["さんびゃくえん", "さんひゃくえん", "さんぴゃくえん", "みっひゃくえん"] },
      { type: "choose", q: "How do you read 3,000えん?", answer: "さんぜんえん", options: ["さんせんえん", "さんぜんえん", "みっせんえん", "さんぜんねん"] },
      { type: "choose", q: "How do you read 600えん?", answer: "ろっぴゃくえん", options: ["ろくひゃくえん", "ろくびゃくえん", "ろっぴゃくえん", "むっぴゃくえん"] }
    ]
  },
  {
    id: "L3-6",
    lesson: 3,
    title: "お～ (polite prefix)",
    meaning: "polite お before the listener's things: おくに, おなまえ",
    explain: "お is added to some words to show respect when talking about the listener's things: おくに (your country), おなまえ (your name). Never use it for your own things — not 'わたしの おくに'. A few words always carry お, like おみやげ and おてあらい.",
    examples: [
      { jp: "しつれいですが、おなまえは？…ミラーです。", ro: "Shitsurei desu ga, o-namae wa? …Mirā desu.", en: "Excuse me, but what's your name? — Miller." },
      { jp: "おくには どちらですか。…タイです。", ro: "O-kuni wa dochira desu ka. …Tai desu.", en: "Where are you from? — Thailand." },
      { jp: "おてあらいは どこですか。", ro: "O-tearai wa doko desu ka.", en: "Where is the restroom?" }
    ],
    drills: [
      { type: "fill", jp: "しつれいですが、お＿＿は？…サントスです。", answer: "なまえ", options: ["なまえ", "くに", "いくつ", "かいしゃ"], en: "Excuse me, but your name? — Santos." },
      { type: "fill", jp: "＿＿くには どちらですか。", answer: "お", options: ["お", "ご", "の", "か"], en: "Which country are you from? (polite)" },
      { type: "order", tiles: ["おてあらいは", "どこ", "ですか"], en: "Where is the restroom?" },
      { type: "choose", q: "Someone asks 'おくには どちらですか。' How do you answer about your own country?", answer: "インドです。", options: ["インドです。", "おインドです。", "わたしの おくには インドです。", "おくには どちらです。"] },
      { type: "choose", q: "Why does 'おくに' have お?", answer: "It politely refers to the listener's country", options: ["It politely refers to the listener's country", "It means 'a big country'", "It makes the word plural", "It marks a question"] }
    ]
  },

  // ───────────────────────── LESSON 4 ─────────────────────────
  {
    id: "L4-1",
    lesson: 4,
    title: "いま ～じ ～ふん です",
    meaning: "It's ~ o'clock ~ minutes now",
    explain: "Hours use ～じ and minutes use ～ふん/ぷん; はん means 'half past'. ごぜん = a.m. and ごご = p.m. go before the time. Tricky readings: 4じ = よじ, 7じ = しちじ, 9じ = くじ, 10ぷん = じゅっぷん.",
    examples: [
      { jp: "いま なんじですか。…くじはんです。", ro: "Ima nan-ji desu ka. …Ku-ji han desu.", en: "What time is it now? — It's 9:30." },
      { jp: "いま ごご よじ じゅっぷんです。", ro: "Ima gogo yo-ji juppun desu.", en: "It's 4:10 p.m. now." },
      { jp: "ニューヨークは いま ごぜん しちじです。", ro: "Nyūyōku wa ima gozen shichi-ji desu.", en: "It's 7 a.m. in New York now." }
    ],
    drills: [
      { type: "fill", jp: "いま ＿＿ですか。…さんじです。", answer: "なんじ", options: ["なんじ", "なんさい", "いくら", "どこ"], en: "What time is it now? — It's 3 o'clock." },
      { type: "fill", jp: "ごぜん しちじ＿＿です。", answer: "はん", options: ["はん", "ふん", "じ", "まで"], en: "It's 7:30 a.m." },
      { type: "order", tiles: ["いま", "ごご", "にじ", "です"], en: "It's 2 p.m. now." },
      { type: "choose", q: "How do you read 4じ?", answer: "よじ", options: ["よじ", "よんじ", "しじ", "よっじ"] },
      { type: "choose", q: "How do you read 9じ?", answer: "くじ", options: ["きゅうじ", "くじ", "ここのじ", "くうじ"] },
      { type: "choose", q: "How do you say 6:30?", answer: "ろくじはん", options: ["ろくじはん", "ろっじはん", "はんろくじ", "ろくはんじ"] },
      { type: "choose", q: "How do you read 10ぷん?", answer: "じゅっぷん", options: ["じゅうふん", "じゅっぷん", "とおふん", "じゅうぶん"] }
    ]
  },
  {
    id: "L4-2",
    lesson: 4,
    title: "V ます / ません / ました / ませんでした",
    meaning: "do / don't / did / didn't (polite verbs)",
    explain: "Polite verbs have four basic forms: ～ます (do / will do), ～ません (don't / won't), ～ました (did) and ～ませんでした (didn't). The ます form covers both habits and the future, so time words show which one you mean.",
    examples: [
      { jp: "まいあさ ろくじに おきます。", ro: "Maiasa roku-ji ni okimasu.", en: "I get up at six every morning." },
      { jp: "きのう べんきょうしませんでした。", ro: "Kinō benkyō shimasen deshita.", en: "I didn't study yesterday." },
      { jp: "あした はたらきません。", ro: "Ashita hatarakimasen.", en: "I won't work tomorrow." }
    ],
    drills: [
      { type: "fill", jp: "きのう はたらき＿＿。", answer: "ました", options: ["ました", "ます", "ません", "ませんでした"], en: "I worked yesterday." },
      { type: "fill", jp: "あした やすみ＿＿。", answer: "ません", options: ["ません", "ました", "ませんでした", "ます"], en: "I won't take a day off tomorrow." },
      { type: "fill", jp: "けさ べんきょうし＿＿。", answer: "ませんでした", options: ["ませんでした", "ません", "ます", "ました"], en: "I didn't study this morning." },
      { type: "order", tiles: ["まいばん", "じゅういちじに", "ねます"], en: "I go to bed at eleven every night." },
      { type: "choose", q: "Which is the polite PAST NEGATIVE of おきます?", answer: "おきませんでした", options: ["おきました", "おきません", "おきませんでした", "おきないでした"] },
      { type: "choose", q: "'べんきょうします' can mean…", answer: "I study / I will study", options: ["I study / I will study", "I studied", "I am not studying", "Let's study"] }
    ]
  },
  {
    id: "L4-3",
    lesson: 4,
    title: "N(time) に V",
    meaning: "do V at/on a time",
    explain: "Put に after a specific clock time or date: ろくじに おきます. Do NOT use に with relative time words such as きょう, あした, きのう, けさ, こんばん, まいにち, まいあさ or いま. With days of the week (げつようび…), に is optional.",
    examples: [
      { jp: "ろくじに おきます。", ro: "Roku-ji ni okimasu.", en: "I get up at six." },
      { jp: "どようびに はたらきます。", ro: "Doyōbi ni hatarakimasu.", en: "I work on Saturdays." },
      { jp: "あした べんきょうします。", ro: "Ashita benkyō shimasu.", en: "I'll study tomorrow. (no に)" }
    ],
    drills: [
      { type: "fill", jp: "まいあさ しちじ＿＿ おきます。", answer: "に", options: ["に", "で", "を", "の"], en: "I get up at seven every morning." },
      { type: "fill", jp: "げつようび＿＿ やすみます。", answer: "に", options: ["に", "へ", "で", "の"], en: "I take Mondays off." },
      { type: "order", tiles: ["わたしは", "じゅうにじに", "ねます"], en: "I go to bed at twelve." },
      { type: "choose", q: "Which sentence is WRONG?", answer: "あしたに はたらきます。", options: ["じゅうじに ねます。", "あしたに はたらきます。", "あした はたらきます。", "まいにち べんきょうします。"] },
      { type: "choose", q: "Which time word does NOT take に?", answer: "きょう", options: ["ろくじ", "くじはん", "きょう", "ごご さんじ"] },
      { type: "choose", q: "How do you say: 'I will study tonight.'?", answer: "こんばん べんきょうします。", options: ["こんばんに べんきょうします。", "こんばん べんきょうしました。", "こんばんを べんきょうします。", "こんばん べんきょうします。"] }
    ]
  },
  {
    id: "L4-4",
    lesson: 4,
    title: "N1 から N2 まで",
    meaning: "from N1 to/until N2",
    explain: "から means 'from' and まで means 'until / up to', for both times and places. They can be used together or alone, and you can end with です: 'ぎんこうは くじから さんじまでです' (the bank is open 9 to 3).",
    examples: [
      { jp: "ぎんこうは くじから さんじまでです。", ro: "Ginkō wa ku-ji kara san-ji made desu.", en: "The bank is open from 9 to 3." },
      { jp: "まいにち くじから ごじまで はたらきます。", ro: "Mainichi ku-ji kara go-ji made hatarakimasu.", en: "I work from 9 to 5 every day." },
      { jp: "ひるやすみは じゅうにじから いちじまでです。", ro: "Hiruyasumi wa jūni-ji kara ichi-ji made desu.", en: "Lunch break is from 12 to 1." }
    ],
    drills: [
      { type: "fill", jp: "としょかんは ごぜん くじ＿＿ ごご ろくじまでです。", answer: "から", options: ["から", "まで", "に", "と"], en: "The library is open from 9 a.m. to 6 p.m." },
      { type: "fill", jp: "げつようびから きんようび＿＿ はたらきます。", answer: "まで", options: ["まで", "から", "に", "と"], en: "I work from Monday to Friday." },
      { type: "order", tiles: ["デパートは", "じゅうじから", "はちじまで", "です"], en: "The department store is open from 10 to 8." },
      { type: "order", tiles: ["まいばん", "じゅうじまで", "べんきょうします"], en: "I study until ten every night." },
      { type: "choose", q: "'ゆうびんきょくは なんじから なんじまでですか。' means…", answer: "What hours is the post office open?", options: ["What time is it at the post office?", "What hours is the post office open?", "When did you go to the post office?", "How far is the post office?"] }
    ]
  },
  {
    id: "L4-5",
    lesson: 4,
    title: "N1 と N2",
    meaning: "N1 and N2",
    explain: "と joins nouns: 'A と B' = 'A and B'. It lists all the items. It can only connect nouns — not verbs, adjectives or whole sentences.",
    examples: [
      { jp: "ぎんこうの やすみは どようびと にちようびです。", ro: "Ginkō no yasumi wa doyōbi to nichiyōbi desu.", en: "The bank is closed on Saturdays and Sundays." },
      { jp: "ミラーさんと サントスさんは かいしゃいんです。", ro: "Mirā-san to Santosu-san wa kaishain desu.", en: "Mr. Miller and Mr. Santos are office workers." }
    ],
    drills: [
      { type: "fill", jp: "やすみは どようび＿＿ にちようびです。", answer: "と", options: ["と", "も", "の", "から"], en: "My days off are Saturday and Sunday." },
      { type: "fill", jp: "ミラーさん＿＿ グプタさんは IMCの しゃいんです。", answer: "と", options: ["と", "も", "の", "を"], en: "Mr. Miller and Mr. Gupta are IMC employees." },
      { type: "order", tiles: ["しけんは", "げつようびと", "かようびです"], en: "The exams are on Monday and Tuesday." },
      { type: "choose", q: "What can と ('and') connect?", answer: "Two nouns", options: ["Two nouns", "Two sentences", "Two verbs", "An adjective and a verb"] },
      { type: "choose", q: "How do you say: 'I study on Monday and Wednesday.'?", answer: "げつようびと すいようびに べんきょうします。", options: ["げつようびも すいようびに べんきょうします。", "げつようびの すいようびに べんきょうします。", "げつようびと すいようびに べんきょうします。", "げつようびに すいようびと べんきょうします。"] }
    ]
  },
  {
    id: "L4-6",
    lesson: 4,
    title: "S ね",
    meaning: "…, isn't it? / …, right? (sympathy, agreement)",
    explain: "ね at the end of a sentence looks for agreement or shows sympathy, like '…isn't it?' or '…right?'. It is used when the speaker thinks the listener already knows or will agree. A very common reply is たいへんですね ('That must be hard').",
    examples: [
      { jp: "まいばん じゅうにじまで べんきょうします。…たいへんですね。", ro: "Maiban jūni-ji made benkyō shimasu. …Taihen desu ne.", en: "I study until 12 every night. — That must be hard." },
      { jp: "あしたは どようびですね。", ro: "Ashita wa doyōbi desu ne.", en: "Tomorrow is Saturday, right?" }
    ],
    drills: [
      { type: "fill", jp: "まいにち くじまで はたらきます。…たいへんです＿＿。", answer: "ね", options: ["ね", "か", "の", "も"], en: "I work until nine every day. — That must be hard." },
      { type: "order", tiles: ["きょうは", "げつようび", "ですね"], en: "Today is Monday, isn't it?" },
      { type: "choose", q: "What does ね at the end of a sentence do?", answer: "Seeks agreement or shows sympathy ('…isn't it?')", options: ["Makes a yes/no question", "Seeks agreement or shows sympathy ('…isn't it?')", "Makes the sentence negative", "Marks the past tense"] },
      { type: "choose", q: "A friend says 'まいあさ よじに おきます。' What is a natural, sympathetic reply?", answer: "たいへんですね。", options: ["たいへんですか。", "はい、そうです。", "いいえ、ちがいます。", "たいへんですね。"] },
      { type: "choose", q: "Which sentence checks something you already believe is true?", answer: "あしたは やすみですね。", options: ["あしたは やすみですね。", "あしたは やすみですか。", "あしたは やすみです。", "あしたも やすみですか。"] }
    ]
  },

  // ───────────────────────── LESSON 5 ─────────────────────────
  {
    id: "L5-1",
    lesson: 5,
    title: "N(place) へ いきます / きます / かえります",
    meaning: "go / come / return to a place",
    explain: "へ marks the direction or destination of movement and is read 'e', not 'he'. いきます = go, きます = come (toward where the speaker is), かえります = go home / go back. You will also hear に used the same way.",
    examples: [
      { jp: "きょうとへ いきます。", ro: "Kyōto e ikimasu.", en: "I'll go to Kyoto." },
      { jp: "せんげつ にほんへ きました。", ro: "Sengetsu Nihon e kimashita.", en: "I came to Japan last month." },
      { jp: "きのう うちへ かえりました。", ro: "Kinō uchi e kaerimashita.", en: "I went home yesterday." }
    ],
    drills: [
      { type: "fill", jp: "あした スーパー＿＿ いきます。", answer: "へ", options: ["へ", "を", "で", "の"], en: "I'll go to the supermarket tomorrow." },
      { type: "fill", jp: "わたしは らいねん くに＿＿ かえります。", answer: "へ", options: ["へ", "を", "は", "の"], en: "I'll go back to my country next year." },
      { type: "order", tiles: ["せんしゅう", "とうきょうへ", "いきました"], en: "I went to Tokyo last week." },
      { type: "choose", q: "How is へ read when it is a particle?", answer: "e", options: ["e", "he", "o", "wa"] },
      { type: "choose", q: "Which verb means 'go home / go back'?", answer: "かえります", options: ["きます", "いきます", "かえります", "おきます"] },
      { type: "choose", q: "Mr. Miller is in Japan now. How does he say 'I came to Japan last year'?", answer: "きょねん にほんへ きました。", options: ["きょねん にほんへ いきました。", "らいねん にほんへ きます。", "きょねん にほんで きました。", "きょねん にほんへ きました。"] }
    ]
  },
  {
    id: "L5-2",
    lesson: 5,
    title: "どこ[へ]も いきません",
    meaning: "don't go anywhere (question word + も + negative)",
    explain: "A question word + も + a negative verb makes a total negative: どこ[へ]も = 'not anywhere', なにも = 'nothing', だれも = 'nobody'. The へ is optional. This only works with negative verbs.",
    examples: [
      { jp: "きのう どこへも いきませんでした。", ro: "Kinō doko e mo ikimasen deshita.", en: "I didn't go anywhere yesterday." },
      { jp: "あした どこも いきません。", ro: "Ashita doko mo ikimasen.", en: "I won't go anywhere tomorrow." },
      { jp: "だれも きませんでした。", ro: "Dare mo kimasen deshita.", en: "Nobody came." }
    ],
    drills: [
      { type: "fill", jp: "きのう どこ＿＿ いきませんでした。", answer: "も", options: ["も", "へ", "を", "の"], en: "I didn't go anywhere yesterday." },
      { type: "fill", jp: "あした どこへも いき＿＿。", answer: "ません", options: ["ません", "ます", "ました", "ましょう"], en: "I won't go anywhere tomorrow." },
      { type: "order", tiles: ["にちようびは", "どこへも", "いきません"], en: "I won't go anywhere on Sunday." },
      { type: "choose", q: "'どこへ いきましたか。' You went nowhere. What do you answer?", answer: "どこも いきませんでした。", options: ["どこも いきました。", "どこへ いきませんでした。", "どこも いきませんでした。", "いいえ、どこへ いきました。"] },
      { type: "choose", q: "'だれも きませんでした' means…", answer: "Nobody came.", options: ["Everybody came.", "Who came?", "Somebody came.", "Nobody came."] }
    ]
  },
  {
    id: "L5-3",
    lesson: 5,
    title: "N(vehicle) で",
    meaning: "by (train, bus, plane…)",
    explain: "で after a vehicle shows how you travel: でんしゃで, バスで, ひこうきで. Walking is あるいて, with no で. Ask 'by what means?' with なんで.",
    examples: [
      { jp: "でんしゃで かいしゃへ いきます。", ro: "Densha de kaisha e ikimasu.", en: "I go to work by train." },
      { jp: "ひこうきで くにへ かえります。", ro: "Hikōki de kuni e kaerimasu.", en: "I'll go back to my country by plane." },
      { jp: "えきから あるいて かえりました。", ro: "Eki kara aruite kaerimashita.", en: "I walked home from the station." }
    ],
    drills: [
      { type: "fill", jp: "タクシー＿＿ うちへ かえりました。", answer: "で", options: ["で", "へ", "を", "と"], en: "I went home by taxi." },
      { type: "fill", jp: "なん＿＿ がっこうへ いきますか。…バスで いきます。", answer: "で", options: ["で", "の", "を", "へ"], en: "How do you get to school? — By bus." },
      { type: "order", tiles: ["しんかんせんで", "おおさかへ", "いきます"], en: "I'll go to Osaka by Shinkansen." },
      { type: "order", tiles: ["わたしは", "じてんしゃで", "がっこうへ", "きました"], en: "I came to school by bicycle." },
      { type: "choose", q: "How do you say: 'I walk to the station.'?", answer: "あるいて えきへ いきます。", options: ["あるいてで えきへ いきます。", "あるいて えきへ いきます。", "えきで あるいて いきます。", "えきへ あるきで いきます。"] }
    ]
  },
  {
    id: "L5-4",
    lesson: 5,
    title: "N(person) と",
    meaning: "(together) with a person",
    explain: "と after a person means 'together with': ともだちと いきます. Ask 'with whom?' using だれと. If you do something alone, say ひとりで — not ひとりと.",
    examples: [
      { jp: "かぞくと にほんへ きました。", ro: "Kazoku to Nihon e kimashita.", en: "I came to Japan with my family." },
      { jp: "ともだちと デパートへ いきました。", ro: "Tomodachi to depāto e ikimashita.", en: "I went to the department store with a friend." },
      { jp: "ひとりで とうきょうへ いきます。", ro: "Hitori de Tōkyō e ikimasu.", en: "I'll go to Tokyo alone." }
    ],
    drills: [
      { type: "fill", jp: "かのじょ＿＿ こうべへ いきます。", answer: "と", options: ["と", "で", "へ", "を"], en: "I'll go to Kobe with my girlfriend." },
      { type: "fill", jp: "だれ＿＿ きょうとへ いきましたか。", answer: "と", options: ["と", "で", "は", "を"], en: "Who did you go to Kyoto with?" },
      { type: "order", tiles: ["ともだちと", "スーパーへ", "いきました"], en: "I went to the supermarket with a friend." },
      { type: "order", tiles: ["わたしは", "かぞくと", "くにへ", "かえります"], en: "I'll go back to my country with my family." },
      { type: "choose", q: "How do you say: 'I went alone.'?", answer: "ひとりで いきました。", options: ["ひとりと いきました。", "ひとりへ いきました。", "ひとりで いきました。", "ひとりを いきました。"] }
    ]
  },
  {
    id: "L5-5",
    lesson: 5,
    title: "いつ & dates",
    meaning: "When? ; ～がつ ～にち",
    explain: "いつ means 'when' and never takes に. Dates are ～がつ (month) + ～にち (day), with irregular readings: ついたち (1st), ふつか, みっか, よっか, いつか, むいか, なのか, ようか, ここのか, とおか, はつか (20th). Months: 4 = しがつ, 7 = しちがつ, 9 = くがつ.",
    examples: [
      { jp: "いつ にほんへ きましたか。…さんがつ じゅうごにちに きました。", ro: "Itsu Nihon e kimashita ka. …San-gatsu jūgo-nichi ni kimashita.", en: "When did you come to Japan? — I came on March 15th." },
      { jp: "たんじょうびは いつですか。…ろくがつ ようかです。", ro: "Tanjōbi wa itsu desu ka. …Roku-gatsu yōka desu.", en: "When is your birthday? — June 8th." }
    ],
    drills: [
      { type: "fill", jp: "＿＿ おおさかへ いきますか。…あさって いきます。", answer: "いつ", options: ["いつ", "どこ", "だれ", "なん"], en: "When will you go to Osaka? — The day after tomorrow." },
      { type: "fill", jp: "しちがつ ここのか＿＿ くにへ かえります。", answer: "に", options: ["に", "で", "を", "へ"], en: "I'll go back to my country on July 9th." },
      { type: "order", tiles: ["たんじょうびは", "いつ", "ですか"], en: "When is your birthday?" },
      { type: "choose", q: "Which sentence is WRONG?", answer: "いつに かえりますか。", options: ["いつ かえりますか。", "なんじに かえりますか。", "なんがつ なんにちに かえりますか。", "いつに かえりますか。"] },
      { type: "choose", q: "How do you read 4がつ (April)?", answer: "しがつ", options: ["よんがつ", "しがつ", "よがつ", "よっかつ"] },
      { type: "choose", q: "How do you say 'the 1st' (of the month)?", answer: "ついたち", options: ["ついたち", "いちにち", "ひとか", "いっか"] },
      { type: "choose", q: "How do you say 'the 20th' (of the month)?", answer: "はつか", options: ["にじゅうにち", "はつか", "にじゅうか", "ふつか"] }
    ]
  },
  {
    id: "L5-6",
    lesson: 5,
    title: "S よ",
    meaning: "…, you know (telling new information)",
    explain: "よ at the end of a sentence tells the listener something they don't know, or stresses your own judgement: '…, you know'. Compare ね, which you use when you think the listener already knows. Using よ too much can sound pushy.",
    examples: [
      { jp: "この でんしゃは こうしえんへ いきますか。…いいえ、いきません。つぎの「ふつう」ですよ。", ro: "Kono densha wa Kōshien e ikimasu ka. …Iie, ikimasen. Tsugi no 'futsū' desu yo.", en: "Does this train go to Koshien? — No, it doesn't. It's the next local train, you know." },
      { jp: "あしたは やすみですよ。", ro: "Ashita wa yasumi desu yo.", en: "Tomorrow is a day off, you know." }
    ],
    drills: [
      { type: "fill", jp: "この バスは えきへ いきません＿＿。", answer: "よ", options: ["よ", "か", "も", "を"], en: "This bus doesn't go to the station, you know." },
      { type: "order", tiles: ["あしたは", "やすみ", "ですよ"], en: "Tomorrow is a day off, you know." },
      { type: "choose", q: "When do you use よ at the end of a sentence?", answer: "To tell the listener something they don't know", options: ["To ask a question", "To seek agreement on something you both know", "To tell the listener something they don't know", "To make a sentence negative"] },
      { type: "choose", q: "Someone is about to board the wrong train for Kyoto. What do you say?", answer: "その でんしゃは きょうとへ いきませんよ。", options: ["その でんしゃは きょうとへ いきませんか。", "その でんしゃは きょうとへ いきませんよ。", "その でんしゃは きょうとへ いきましたね。", "その でんしゃは きょうとへ いきませんでした。"] },
      { type: "choose", q: "The speaker thinks the listener ALREADY knows. Which ending fits?", answer: "ね", options: ["よ", "ね", "か", "も"] }
    ]
  },

  // ───────────────────────── LESSON 6 ─────────────────────────
  {
    id: "L6-1",
    lesson: 6,
    title: "N を V",
    meaning: "do V to N (direct object)",
    explain: "を marks the direct object — the thing the action is done to. It is written を but read 'o'. The object comes before the verb: パンを たべます.",
    examples: [
      { jp: "ジュースを のみます。", ro: "Jūsu o nomimasu.", en: "I drink juice." },
      { jp: "ほんを よみます。", ro: "Hon o yomimasu.", en: "I read a book." },
      { jp: "てがみを かきました。", ro: "Tegami o kakimashita.", en: "I wrote a letter." }
    ],
    drills: [
      { type: "fill", jp: "まいあさ パン＿＿ たべます。", answer: "を", options: ["を", "へ", "で", "に"], en: "I eat bread every morning." },
      { type: "fill", jp: "きのう しんぶん＿＿ よみました。", answer: "を", options: ["を", "に", "へ", "と"], en: "I read a newspaper yesterday." },
      { type: "order", tiles: ["まいばん", "ビデオを", "みます"], en: "I watch videos every night." },
      { type: "order", tiles: ["きのう", "しゃしんを", "とりました"], en: "I took photos yesterday." },
      { type: "choose", q: "How is the particle を read?", answer: "o", options: ["o", "wa", "e", "no"] },
      { type: "choose", q: "How do you say: 'I don't smoke.'?", answer: "たばこを すいません。", options: ["たばこを すいません。", "たばこが すいません。", "たばこで すいません。", "たばこを すいました。"] }
    ]
  },
  {
    id: "L6-2",
    lesson: 6,
    title: "N を します / なにを しますか",
    meaning: "do / play N ; What will you do?",
    explain: "します ('do') combines with many nouns: サッカーを します (play soccer), しゅくだいを します (do homework), おはなみを します (go cherry-blossom viewing). Ask 'What will you do?' with なにを しますか.",
    examples: [
      { jp: "にちようび テニスを します。", ro: "Nichiyōbi tenisu o shimasu.", en: "I play tennis on Sundays." },
      { jp: "こんばん しゅくだいを します。", ro: "Konban shukudai o shimasu.", en: "I'll do my homework tonight." },
      { jp: "あした なにを しますか。…ともだちと サッカーを します。", ro: "Ashita nani o shimasu ka. …Tomodachi to sakkā o shimasu.", en: "What will you do tomorrow? — I'll play soccer with a friend." }
    ],
    drills: [
      { type: "fill", jp: "まいばん しゅくだい＿＿ します。", answer: "を", options: ["を", "で", "に", "へ"], en: "I do homework every night." },
      { type: "fill", jp: "どようび ＿＿を しますか。…テニスを します。", answer: "なに", options: ["なに", "なん", "どこ", "だれ"], en: "What will you do on Saturday? — I'll play tennis." },
      { type: "order", tiles: ["あした", "なにを", "しますか"], en: "What will you do tomorrow?" },
      { type: "order", tiles: ["ともだちと", "テニスを", "します"], en: "I'll play tennis with a friend." },
      { type: "choose", q: "How do you say: 'I'll go cherry-blossom viewing.' (using します)?", answer: "おはなみを します。", options: ["おはなみに します。", "おはなみで します。", "おはなみを します。", "おはなみが します。"] },
      { type: "choose", q: "'サッカーを します' means…", answer: "I play soccer.", options: ["I watch soccer.", "I play soccer.", "I like soccer.", "I go to soccer."] }
    ]
  },
  {
    id: "L6-3",
    lesson: 6,
    title: "N(place) で V",
    meaning: "do V at a place",
    explain: "で marks the place where an action happens: としょかんで ほんを よみます. Don't mix it up with へ/に, which mark where you are GOING. がっこうへ いきます (go to school) vs がっこうで べんきょうします (study at school).",
    examples: [
      { jp: "えきで しんぶんを かいます。", ro: "Eki de shinbun o kaimasu.", en: "I buy a newspaper at the station." },
      { jp: "うちで テレビを みます。", ro: "Uchi de terebi o mimasu.", en: "I watch TV at home." },
      { jp: "としょかんで ほんを よみます。", ro: "Toshokan de hon o yomimasu.", en: "I read books at the library." }
    ],
    drills: [
      { type: "fill", jp: "としょかん＿＿ ほんを よみます。", answer: "で", options: ["で", "へ", "を", "と"], en: "I read books at the library." },
      { type: "fill", jp: "にわ＿＿ しゃしんを とりました。", answer: "で", options: ["で", "を", "へ", "が"], en: "I took photos in the garden." },
      { type: "order", tiles: ["うちで", "ばんごはんを", "たべます"], en: "I eat dinner at home." },
      { type: "order", tiles: ["えきで", "ともだちに", "あいました"], en: "I met a friend at the station." },
      { type: "choose", q: "Which sentence is correct?", answer: "がっこうで べんきょうします。", options: ["がっこうへ べんきょうします。", "がっこうで べんきょうします。", "がっこうを べんきょうします。", "がっこうで いきます。"] },
      { type: "choose", q: "Which particle marks the place where an action takes place?", answer: "で", options: ["へ", "を", "で", "と"] }
    ]
  },
  {
    id: "L6-4",
    lesson: 6,
    title: "V ませんか",
    meaning: "Won't you…? / Would you like to…? (invitation)",
    explain: "Change ～ます to ～ませんか to invite someone politely — it respects the listener's choice. It often comes with いっしょに (together). Accept with ええ、いいですね; decline softly with すみません、ちょっと…, which hints 'no' without saying it.",
    examples: [
      { jp: "いっしょに きょうとへ いきませんか。…ええ、いいですね。", ro: "Issho ni Kyōto e ikimasen ka. …Ee, ii desu ne.", en: "Would you like to go to Kyoto together? — Yes, that sounds good." },
      { jp: "いっしょに ひるごはんを たべませんか。…すみません、ちょっと…。", ro: "Issho ni hirugohan o tabemasen ka. …Sumimasen, chotto….", en: "Would you like to have lunch together? — Sorry, that's a bit…" }
    ],
    drills: [
      { type: "fill", jp: "いっしょに おちゃを のみ＿＿。", answer: "ませんか", options: ["ませんか", "ました", "ませんでした", "ます"], en: "Would you like to have some tea together?" },
      { type: "order", tiles: ["いっしょに", "サッカーを", "しませんか"], en: "Would you like to play soccer together?" },
      { type: "order", tiles: ["にちようび", "いっしょに", "こうべへ", "いきませんか"], en: "Would you like to go to Kobe together on Sunday?" },
      { type: "choose", q: "'いっしょに えいがを みませんか。' You want to go. What do you reply?", answer: "ええ、いいですね。", options: ["いいえ、みません。", "ええ、みませんでした。", "ええ、いいですね。", "はい、みません。"] },
      { type: "choose", q: "How do you politely decline an invitation?", answer: "すみません、ちょっと…。", options: ["いいえ、いきません。", "すみません、ちょっと…。", "ええ、いいですね。", "いっしょに いきましょう。"] },
      { type: "choose", q: "'いっしょに たべませんか' means…", answer: "Would you like to eat together?", options: ["Didn't you eat together?", "I don't eat together.", "Would you like to eat together?", "We didn't eat together."] }
    ]
  },
  {
    id: "L6-5",
    lesson: 6,
    title: "V ましょう",
    meaning: "Let's…",
    explain: "Change ～ます to ～ましょう to say 'Let's…'. It actively suggests doing something together, and is also used to accept an invitation: ええ、いきましょう. ～ませんか is gentler because it asks what the listener wants.",
    examples: [
      { jp: "ちょっと やすみましょう。", ro: "Chotto yasumimashō.", en: "Let's take a short break." },
      { jp: "えきで あいましょう。", ro: "Eki de aimashō.", en: "Let's meet at the station." },
      { jp: "いっしょに いきませんか。…ええ、いきましょう。", ro: "Issho ni ikimasen ka. …Ee, ikimashō.", en: "Shall we go together? — Yes, let's go." }
    ],
    drills: [
      { type: "fill", jp: "ちょっと やすみ＿＿。", answer: "ましょう", options: ["ましょう", "ました", "ません", "ませんでした"], en: "Let's take a short break." },
      { type: "fill", jp: "いっしょに ひるごはんを たべませんか。…ええ、たべ＿＿。", answer: "ましょう", options: ["ましょう", "ません", "ませんか", "ませんでした"], en: "Would you like to have lunch together? — Yes, let's eat." },
      { type: "order", tiles: ["じゅうじに", "えきで", "あいましょう"], en: "Let's meet at the station at ten." },
      { type: "choose", q: "How do you say: 'Let's go together.'?", answer: "いっしょに いきましょう。", options: ["いっしょに いきました。", "いっしょに いきません。", "いっしょで いきましょう。", "いっしょに いきましょう。"] },
      { type: "choose", q: "Which invitation is gentler, leaving the choice to the listener?", answer: "いっしょに いきませんか。", options: ["いっしょに いきましょう。", "いっしょに いきませんか。", "いっしょに いきます。", "いっしょに いきました。"] }
    ]
  },
  {
    id: "L6-6",
    lesson: 6,
    title: "なん vs なに",
    meaning: "two readings of 'what'",
    explain: "Both mean 'what'. Use なん before sounds t, d and n (なんですか, なんの) and before counters (なんじ, なんさい, なんがい). Use なに before most particles, such as を and が: なにを たべますか.",
    examples: [
      { jp: "それは なんですか。", ro: "Sore wa nan desu ka.", en: "What is that?" },
      { jp: "なにを のみますか。", ro: "Nani o nomimasu ka.", en: "What will you drink?" },
      { jp: "これは なんの ほんですか。", ro: "Kore wa nan no hon desu ka.", en: "What is this book about?" }
    ],
    drills: [
      { type: "fill", jp: "あさ ＿＿を たべますか。", answer: "なに", options: ["なに", "なん", "どこ", "いつ"], en: "What do you eat in the morning?" },
      { type: "fill", jp: "これは ＿＿ですか。", answer: "なん", options: ["なん", "なに", "どこ", "いつ"], en: "What is this?" },
      { type: "fill", jp: "いま ＿＿じですか。", answer: "なん", options: ["なん", "なに", "いつ", "どこ"], en: "What time is it now?" },
      { type: "order", tiles: ["デパートで", "なにを", "かいますか"], en: "What will you buy at the department store?" },
      { type: "choose", q: "Which is correct?", answer: "なにを かいましたか。", options: ["なんを かいましたか。", "なにの ほんですか。", "なにじですか。", "なにを かいましたか。"] },
      { type: "choose", q: "なん (not なに) is used before…", answer: "t, d, n sounds and counters (なんじ, なんさい)", options: ["the particle を", "t, d, n sounds and counters (なんじ, なんさい)", "every particle", "verbs only"] }
    ]
  },

  // ───────────────────────── LESSON 7 ─────────────────────────
  {
    id: "L7-1",
    lesson: 7,
    title: "N(tool / means) で V",
    meaning: "do V with / by / in N",
    explain: "で also marks the tool, method or language you use: はしで たべます (eat with chopsticks), にほんごで はなします (speak in Japanese). It's the same particle as the place で — context tells you which. Don't use と here: と means 'together with a person'.",
    examples: [
      { jp: "はしで ごはんを たべます。", ro: "Hashi de gohan o tabemasu.", en: "I eat rice with chopsticks." },
      { jp: "パソコンで メールを おくります。", ro: "Pasokon de mēru o okurimasu.", en: "I send emails on my computer." },
      { jp: "にほんごで レポートを かきます。", ro: "Nihongo de repōto o kakimasu.", en: "I write the report in Japanese." }
    ],
    drills: [
      { type: "fill", jp: "はし＿＿ ごはんを たべます。", answer: "で", options: ["で", "を", "と", "に"], en: "I eat rice with chopsticks." },
      { type: "fill", jp: "えいご＿＿ メールを かきました。", answer: "で", options: ["で", "を", "に", "と"], en: "I wrote the email in English." },
      { type: "fill", jp: "はさみ＿＿ かみを きります。", answer: "で", options: ["で", "を", "に", "へ"], en: "I cut paper with scissors." },
      { type: "order", tiles: ["ナイフと", "フォークで", "たべます"], en: "I eat with a knife and fork." },
      { type: "order", tiles: ["ケータイで", "しゃしんを", "とります"], en: "I take photos with my phone." },
      { type: "choose", q: "How do you say: 'I'll send it by email.'?", answer: "メールで おくります。", options: ["メールで おくります。", "メールと おくります。", "メールへ おくります。", "メールに おくります。"] }
    ]
  },
  {
    id: "L7-2",
    lesson: 7,
    title: "「word」は ～ごで なんですか",
    meaning: "What is 'word' in (language)?",
    explain: "Use this to ask how to say a word in another language: 「ありがとう」は えいごで なんですか. で here means 'in (a language)', and the answer is simply '「…」です'.",
    examples: [
      { jp: "「ありがとう」は えいごで なんですか。…「Thank you」です。", ro: "'Arigatō' wa eigo de nan desu ka. …'Thank you' desu.", en: "What is 'arigatō' in English? — It's 'thank you'." },
      { jp: "「Goodbye」は にほんごで なんですか。…「さようなら」です。", ro: "'Goodbye' wa Nihongo de nan desu ka. …'Sayōnara' desu.", en: "What is 'goodbye' in Japanese? — It's 'sayōnara'." }
    ],
    drills: [
      { type: "fill", jp: "「ありがとう」は えいご＿＿ なんですか。", answer: "で", options: ["で", "の", "を", "に"], en: "What is 'arigatō' in English?" },
      { type: "fill", jp: "「Goodbye」は にほんごで ＿＿ですか。", answer: "なん", options: ["なん", "なに", "だれ", "どこ"], en: "What is 'goodbye' in Japanese?" },
      { type: "order", tiles: ["「はさみ」は", "えいごで", "なんですか"], en: "What is 'hasami' in English?" },
      { type: "choose", q: "How do you ask what 'chair' is in Japanese?", answer: "「chair」は にほんごで なんですか。", options: ["「chair」は にほんごの なんですか。", "「chair」を にほんごで なんですか。", "「chair」は にほんごで なんですか。", "にほんごは「chair」で なんですか。"] },
      { type: "choose", q: "'「すてき」は えいごで なんですか。' means…", answer: "What is 'suteki' in English?", options: ["Is 'suteki' an English word?", "What is 'suteki' in English?", "Who said 'suteki' in English?", "Please write 'suteki' in English."] }
    ]
  },
  {
    id: "L7-3",
    lesson: 7,
    title: "N(person) に あげます / かします / おしえます",
    meaning: "give / lend / teach (something) to a person",
    explain: "Pattern: giver は receiver に thing を あげます. The person receiving takes に and the thing takes を. かします (lend), おしえます (teach / tell), おくります (send) and でんわを かけます (call) work the same way.",
    examples: [
      { jp: "わたしは きむらさんに はなを あげました。", ro: "Watashi wa Kimura-san ni hana o agemashita.", en: "I gave Ms. Kimura flowers." },
      { jp: "ともだちに ほんを かしました。", ro: "Tomodachi ni hon o kashimashita.", en: "I lent my friend a book." },
      { jp: "わたしは カリナさんに えいごを おしえます。", ro: "Watashi wa Karina-san ni eigo o oshiemasu.", en: "I teach Karina English." }
    ],
    drills: [
      { type: "fill", jp: "わたしは ははに はな＿＿ あげました。", answer: "を", options: ["を", "に", "が", "で"], en: "I gave my mother flowers." },
      { type: "fill", jp: "ミラーさんは やまださん＿＿ えいごを おしえます。", answer: "に", options: ["に", "を", "で", "へ"], en: "Mr. Miller teaches Mr. Yamada English." },
      { type: "fill", jp: "ともだちに ペンを ＿＿。", answer: "かしました", options: ["かしました", "かりました", "もらいました", "ならいました"], en: "I lent my friend a pen." },
      { type: "order", tiles: ["わたしは", "ともだちに", "プレゼントを", "あげました"], en: "I gave my friend a present." },
      { type: "order", tiles: ["サントスさんに", "でんわを", "かけます"], en: "I'll call Mr. Santos." },
      { type: "choose", q: "In 'A は B に C を あげます', who RECEIVES?", answer: "B", options: ["A", "B", "C", "Nobody"] }
    ]
  },
  {
    id: "L7-4",
    lesson: 7,
    title: "N(person) に/から もらいます / かります / ならいます",
    meaning: "receive / borrow / learn (something) from a person",
    explain: "Pattern: receiver は giver に (or から) thing を もらいます. かります (borrow) and ならいます (learn) work the same way. When the giver is an organisation like a bank or school, use から, not に.",
    examples: [
      { jp: "わたしは きむらさんに はなを もらいました。", ro: "Watashi wa Kimura-san ni hana o moraimashita.", en: "I received flowers from Ms. Kimura." },
      { jp: "わたしは せんせいに にほんごを ならいます。", ro: "Watashi wa sensei ni Nihongo o naraimasu.", en: "I learn Japanese from my teacher." },
      { jp: "ぎんこうから おかねを かりました。", ro: "Ginkō kara okane o karimashita.", en: "I borrowed money from the bank." }
    ],
    drills: [
      { type: "fill", jp: "わたしは ちち＿＿ とけいを もらいました。", answer: "に", options: ["に", "を", "へ", "で"], en: "I received a watch from my father." },
      { type: "fill", jp: "ぎんこう＿＿ おかねを かりました。", answer: "から", options: ["から", "を", "と", "へ"], en: "I borrowed money from the bank." },
      { type: "fill", jp: "わたしは カリナさんに ほんを ＿＿。", answer: "かりました", options: ["かりました", "かしました", "あげました", "おしえました"], en: "I borrowed a book from Karina." },
      { type: "order", tiles: ["わたしは", "せんせいに", "にほんごを", "ならいます"], en: "I learn Japanese from my teacher." },
      { type: "choose", q: "How do you say: 'I received flowers from Maria.'?", answer: "マリアさんに はなを もらいました。", options: ["マリアさんに はなを あげました。", "マリアさんを はなに もらいました。", "マリアさんに はなを もらいました。", "マリアさんで はなを もらいました。"] },
      { type: "choose", q: "What does かります mean?", answer: "borrow", options: ["lend", "borrow", "give", "teach"] }
    ]
  },
  {
    id: "L7-5",
    lesson: 7,
    title: "もう V ました / まだです",
    meaning: "have already done V / not yet",
    explain: "もう + ～ました means 'already did'. Asking 'もう ～ましたか' means 'Have you … yet?'. Answer yes with はい、もう ～ました, and no with いいえ、まだです. Don't say いいえ、～ませんでした — that means 'I didn't do it (at that time)'.",
    examples: [
      { jp: "もう にもつを おくりましたか。…はい、もう おくりました。", ro: "Mō nimotsu o okurimashita ka. …Hai, mō okurimashita.", en: "Have you sent the package yet? — Yes, I've already sent it." },
      { jp: "もう ばんごはんを たべましたか。…いいえ、まだです。", ro: "Mō bangohan o tabemashita ka. …Iie, mada desu.", en: "Have you eaten dinner yet? — No, not yet." },
      { jp: "いいえ、まだです。これから たべます。", ro: "Iie, mada desu. Korekara tabemasu.", en: "No, not yet. I'm going to eat now." }
    ],
    drills: [
      { type: "fill", jp: "もう レポートを かきましたか。…いいえ、＿＿です。", answer: "まだ", options: ["まだ", "もう", "いつも", "ときどき"], en: "Have you written the report yet? — No, not yet." },
      { type: "fill", jp: "＿＿ きっぷを かいましたか。…はい、かいました。", answer: "もう", options: ["もう", "まだ", "いつも", "ちょっと"], en: "Have you bought the ticket yet? — Yes, I have." },
      { type: "order", tiles: ["もう", "にもつを", "おくりましたか"], en: "Have you sent the package yet?" },
      { type: "order", tiles: ["はい", "もう", "よみました"], en: "Yes, I've already read it." },
      { type: "choose", q: "'もう ひるごはんを たべましたか。' You haven't eaten yet. Best answer?", answer: "いいえ、まだです。", options: ["いいえ、たべませんでした。", "はい、まだです。", "いいえ、まだです。", "いいえ、もうです。"] },
      { type: "choose", q: "What does 'いいえ、たべませんでした' mean?", answer: "No, I didn't eat (it).", options: ["No, I didn't eat (it).", "No, not yet.", "Yes, I've already eaten.", "Let's not eat."] }
    ]
  },

  // ───────────────────────── LESSON 8 ─────────────────────────
  {
    id: "L8-1",
    lesson: 8,
    title: "い-adjective です / くないです",
    meaning: "N is (adj) / N is not (adj)",
    explain: "い-adjectives end in い and go straight before です: たかいです. For the negative, change the final い to くないです: たかい → たかくないです. The exception is いい: its negative is よくないです.",
    examples: [
      { jp: "この カメラは たかいです。", ro: "Kono kamera wa takai desu.", en: "This camera is expensive." },
      { jp: "きょうは さむくないです。", ro: "Kyō wa samuku nai desu.", en: "It isn't cold today." },
      { jp: "この じしょは よくないです。", ro: "Kono jisho wa yoku nai desu.", en: "This dictionary isn't good." }
    ],
    drills: [
      { type: "fill", jp: "きょうは あつ＿＿。", answer: "くないです", options: ["くないです", "いじゃ ありません", "くです", "いないです"], en: "It isn't hot today." },
      { type: "fill", jp: "この やまは ＿＿ないです。", answer: "たかく", options: ["たかく", "たかい", "たか", "たかな"], en: "This mountain isn't high." },
      { type: "order", tiles: ["この", "ほんは", "おもしろいです"], en: "This book is interesting." },
      { type: "order", tiles: ["にほんの", "たべものは", "おいしいです"], en: "Japanese food is delicious." },
      { type: "choose", q: "What is the negative of いいです?", answer: "よくないです", options: ["いくないです", "よくないです", "いいじゃ ありません", "よいないです"] },
      { type: "choose", q: "What is the negative of さむいです?", answer: "さむくないです", options: ["さむくないです", "さむいじゃ ありません", "さむいくないです", "さむないです"] }
    ]
  },
  {
    id: "L8-2",
    lesson: 8,
    title: "な-adjective です / じゃ ありません",
    meaning: "N is (adj) / N is not (adj)",
    explain: "な-adjectives behave like nouns: しずかです, and the negative is しずかじゃ ありません. Never use くない with them. Watch out: きれい and ゆうめい end in い but are な-adjectives, so the negative is きれいじゃ ありません.",
    examples: [
      { jp: "この まちは にぎやかです。", ro: "Kono machi wa nigiyaka desu.", en: "This town is lively." },
      { jp: "やまださんは しんせつです。", ro: "Yamada-san wa shinsetsu desu.", en: "Mr. Yamada is kind." },
      { jp: "この へやは しずかじゃ ありません。", ro: "Kono heya wa shizuka ja arimasen.", en: "This room is not quiet." }
    ],
    drills: [
      { type: "fill", jp: "わたしの まちは しずか＿＿ ありません。", answer: "じゃ", options: ["じゃ", "く", "な", "の"], en: "My town is not quiet." },
      { type: "fill", jp: "この へやは きれい＿＿ ありません。", answer: "じゃ", options: ["じゃ", "く", "な", "くな"], en: "This room is not clean." },
      { type: "order", tiles: ["きょうは", "ひまじゃ", "ありません"], en: "I'm not free today." },
      { type: "order", tiles: ["この", "まちは", "にぎやかです"], en: "This town is lively." },
      { type: "choose", q: "What is the negative of きれいです?", answer: "きれいじゃ ありません", options: ["きれいくないです", "きれくないです", "きれいじゃ ありません", "きれいないです"] },
      { type: "choose", q: "Which of these is a な-adjective?", answer: "ゆうめい", options: ["たかい", "ゆうめい", "おもしろい", "あつい"] }
    ]
  },
  {
    id: "L8-3",
    lesson: 8,
    title: "Adjective + N",
    meaning: "(adj) N — e.g. たかい やま, しずかな まち",
    explain: "To describe a noun, put the adjective in front of it. い-adjectives go straight before the noun: たかい やま. な-adjectives need な: しずかな まち. Remember きれい and ゆうめい take な too.",
    examples: [
      { jp: "ふじさんは たかい やまです。", ro: "Fujisan wa takai yama desu.", en: "Mt. Fuji is a high mountain." },
      { jp: "ならは しずかな まちです。", ro: "Nara wa shizuka na machi desu.", en: "Nara is a quiet town." },
      { jp: "ワンさんは しんせつな いしゃです。", ro: "Wan-san wa shinsetsu na isha desu.", en: "Mr. Wang is a kind doctor." }
    ],
    drills: [
      { type: "fill", jp: "ならは しずか＿＿ まちです。", answer: "な", options: ["な", "の", "い", "く"], en: "Nara is a quiet town." },
      { type: "fill", jp: "これは あたらし＿＿ くるまです。", answer: "い", options: ["い", "な", "の", "く"], en: "This is a new car." },
      { type: "fill", jp: "さくらは きれい＿＿ はなです。", answer: "な", options: ["な", "の", "い", "く"], en: "Cherry blossoms are beautiful flowers." },
      { type: "order", tiles: ["ミラーさんは", "おもしろい", "ひと", "です"], en: "Mr. Miller is an interesting person." },
      { type: "order", tiles: ["きょうとは", "ふるい", "まち", "です"], en: "Kyoto is an old town." },
      { type: "choose", q: "Which is correct?", answer: "ゆうめいな レストラン", options: ["ゆうめいの レストラン", "ゆうめい レストラン", "ゆうめいな レストラン", "ゆうめいい レストラン"] }
    ]
  },
  {
    id: "L8-4",
    lesson: 8,
    title: "とても / あまり",
    meaning: "very / not very",
    explain: "とても ('very') goes with positive sentences. あまり ('not very / not much') goes with NEGATIVE sentences. Both come right before the adjective.",
    examples: [
      { jp: "ペキンは とても さむいです。", ro: "Pekin wa totemo samui desu.", en: "Beijing is very cold." },
      { jp: "この えいがは あまり おもしろくないです。", ro: "Kono eiga wa amari omoshiroku nai desu.", en: "This movie isn't very interesting." },
      { jp: "さくらだいがくは あまり ゆうめいじゃ ありません。", ro: "Sakura-daigaku wa amari yūmei ja arimasen.", en: "Sakura University isn't very famous." }
    ],
    drills: [
      { type: "fill", jp: "この ほんは ＿＿ おもしろくないです。", answer: "あまり", options: ["あまり", "とても", "もう", "まだ"], en: "This book isn't very interesting." },
      { type: "fill", jp: "ふじさんは ＿＿ たかいです。", answer: "とても", options: ["とても", "あまり", "まだ", "もう"], en: "Mt. Fuji is very high." },
      { type: "order", tiles: ["にほんごは", "とても", "おもしろいです"], en: "Japanese is very interesting." },
      { type: "order", tiles: ["きょうは", "あまり", "さむくないです"], en: "It isn't very cold today." },
      { type: "choose", q: "Which sentence is correct?", answer: "この まちは あまり にぎやかじゃ ありません。", options: ["この まちは あまり にぎやかです。", "この まちは あまり にぎやかく ないです。", "この まちは あまり にぎやかじゃ ありません。", "この まちは とても にぎやかないです。"] }
    ]
  },
  {
    id: "L8-5",
    lesson: 8,
    title: "N は どうですか / N1 は どんな N2 ですか",
    meaning: "How is N? / What kind of N2 is N1?",
    explain: "どうですか asks for someone's impression: 'How is ~?' — answer with an adjective. どんな + noun asks for a description: 'What kind of ~ is it?' — answer with adjective + noun. どんな must always be followed by a noun.",
    examples: [
      { jp: "にほんの せいかつは どうですか。…たのしいです。", ro: "Nihon no seikatsu wa dō desu ka. …Tanoshii desu.", en: "How is life in Japan? — It's fun." },
      { jp: "ならは どんな まちですか。…ふるい まちです。", ro: "Nara wa donna machi desu ka. …Furui machi desu.", en: "What kind of town is Nara? — It's an old town." }
    ],
    drills: [
      { type: "fill", jp: "にほんの たべものは ＿＿ですか。…おいしいです。", answer: "どう", options: ["どう", "どんな", "なん", "どれ"], en: "How is Japanese food? — It's delicious." },
      { type: "fill", jp: "ふじさんは ＿＿ やまですか。…たかい やまです。", answer: "どんな", options: ["どんな", "どう", "なん", "どこ"], en: "What kind of mountain is Mt. Fuji? — It's a high mountain." },
      { type: "order", tiles: ["きょうとは", "どんな", "まち", "ですか"], en: "What kind of town is Kyoto?" },
      { type: "order", tiles: ["にほんの", "せいかつは", "どうですか"], en: "How is life in Japan?" },
      { type: "choose", q: "'カリナさんは どんな ひとですか。' Which is a good answer?", answer: "しんせつな ひとです。", options: ["しんせつ ひとです。", "はい、しんせつです。", "しんせつな ひとです。", "どうですか。"] }
    ]
  },
  {
    id: "L8-6",
    lesson: 8,
    title: "S1 が、S2",
    meaning: "S1, but S2",
    explain: "が after a full sentence means 'but': it links two contrasting ideas. Put a comma after が. This is a different が from the subject marker you'll meet later.",
    examples: [
      { jp: "にほんの たべものは おいしいですが、たかいです。", ro: "Nihon no tabemono wa oishii desu ga, takai desu.", en: "Japanese food is delicious, but expensive." },
      { jp: "しごとは いそがしいですが、おもしろいです。", ro: "Shigoto wa isogashii desu ga, omoshiroi desu.", en: "Work is busy, but interesting." }
    ],
    drills: [
      { type: "fill", jp: "この へやは ちいさいです＿＿、きれいです。", answer: "が", options: ["が", "と", "か", "も"], en: "This room is small, but clean." },
      { type: "order", tiles: ["しごとは", "いそがしいですが", "たのしいです"], en: "Work is busy, but fun." },
      { type: "order", tiles: ["わたしの", "まちは", "しずかですが", "べんりじゃ", "ありません"], en: "My town is quiet, but not convenient." },
      { type: "choose", q: "How do you say: 'Japanese is difficult, but interesting.'?", answer: "にほんごは むずかしいですが、おもしろいです。", options: ["にほんごは むずかしいですと、おもしろいです。", "にほんごは むずかしいですが、おもしろいです。", "にほんごは むずかしいですか、おもしろいです。", "にほんごは むずかしいですも、おもしろいです。"] },
      { type: "choose", q: "In 'たかいですが、いいです', what does が mean?", answer: "but", options: ["and", "because", "but", "or"] }
    ]
  },
  {
    id: "L8-7",
    lesson: 8,
    title: "どれ",
    meaning: "Which one? (of three or more)",
    explain: "どれ means 'which one' when choosing among three or more things — it's the question word in the これ/それ/あれ family. Like これ, it stands alone and is not put directly before a noun. Answer by pointing it out, e.g. あの あおい かさです.",
    examples: [
      { jp: "ミラーさんの かさは どれですか。…あの あおい かさです。", ro: "Mirā-san no kasa wa dore desu ka. …Ano aoi kasa desu.", en: "Which one is Mr. Miller's umbrella? — That blue one." },
      { jp: "やまださんの くるまは どれですか。…あの しろい くるまです。", ro: "Yamada-san no kuruma wa dore desu ka. …Ano shiroi kuruma desu.", en: "Which one is Mr. Yamada's car? — That white car." }
    ],
    drills: [
      { type: "fill", jp: "あなたの かばんは ＿＿ですか。…あの くろい かばんです。", answer: "どれ", options: ["どれ", "どの", "どんな", "なん"], en: "Which one is your bag? — That black bag." },
      { type: "fill", jp: "ミラーさんの くるまは どれですか。…あの ＿＿ くるまです。", answer: "しろい", options: ["しろい", "しろ", "しろいな", "しろく"], en: "Which one is Mr. Miller's car? — That white car." },
      { type: "order", tiles: ["さとうさんの", "かさは", "どれ", "ですか"], en: "Which one is Ms. Sato's umbrella?" },
      { type: "choose", q: "What does どれ ask?", answer: "Which one? (out of three or more)", options: ["Where?", "What kind?", "Which one? (out of three or more)", "How?"] },
      { type: "choose", q: "'カリナさんの ほんは どれですか。' Which is the best answer?", answer: "あの あかい ほんです。", options: ["あの あかい ほんです。", "はい、あかい ほんです。", "あの あかいな ほんです。", "どれも ほんです。"] }
    ]
  },

  // ───────────────────────── LESSON 9 ─────────────────────────
  {
    id: "L9-1",
    lesson: 9,
    title: "N が あります / わかります",
    meaning: "have N / understand N",
    explain: "With あります (here meaning 'have') and わかります ('understand'), the thing is marked with が, not を. So it's にほんごが わかります, never にほんごを わかります. Negatives: ありません / わかりません.",
    examples: [
      { jp: "わたしは じかんが あります。", ro: "Watashi wa jikan ga arimasu.", en: "I have time." },
      { jp: "ミラーさんは にほんごが わかります。", ro: "Mirā-san wa Nihongo ga wakarimasu.", en: "Mr. Miller understands Japanese." },
      { jp: "きょうは ようじが あります。", ro: "Kyō wa yōji ga arimasu.", en: "I have something to do today." }
    ],
    drills: [
      { type: "fill", jp: "わたしは かんじ＿＿ わかりません。", answer: "が", options: ["が", "を", "で", "に"], en: "I don't understand kanji." },
      { type: "fill", jp: "こんばん じかん＿＿ ありますか。", answer: "が", options: ["が", "を", "で", "へ"], en: "Do you have time tonight?" },
      { type: "order", tiles: ["きょうは", "ようじが", "あります"], en: "I have something to do today." },
      { type: "order", tiles: ["サントスさんは", "にほんごが", "すこし", "わかります"], en: "Mr. Santos understands a little Japanese." },
      { type: "choose", q: "Which sentence is correct?", answer: "わたしは えいごが わかります。", options: ["わたしは えいごを わかります。", "わたしは えいごへ わかります。", "わたしは えいごが わかります。", "わたしは えいごに わかります。"] },
      { type: "choose", q: "'おかねが ありません' means…", answer: "I don't have any money.", options: ["There is no bank.", "I didn't buy anything.", "I don't have any money.", "Money isn't important."] }
    ]
  },
  {
    id: "L9-2",
    lesson: 9,
    title: "N が すき / きらい / じょうず / へた です",
    meaning: "like / dislike / be good at / be bad at N",
    explain: "すき, きらい, じょうず and へた are な-adjectives, and the thing liked or the skill takes が. Negative: すきじゃ ありません. きらい sounds strong, so people often say あまり すきじゃ ありません instead. Don't call yourself じょうず — it sounds boastful.",
    examples: [
      { jp: "わたしは イタリアりょうりが すきです。", ro: "Watashi wa Itaria-ryōri ga suki desu.", en: "I like Italian food." },
      { jp: "カリナさんは えが じょうずです。", ro: "Karina-san wa e ga jōzu desu.", en: "Karina is good at painting." },
      { jp: "わたしは うたが へたです。", ro: "Watashi wa uta ga heta desu.", en: "I'm bad at singing." }
    ],
    drills: [
      { type: "fill", jp: "わたしは ジャズ＿＿ すきです。", answer: "が", options: ["が", "を", "に", "で"], en: "I like jazz." },
      { type: "fill", jp: "わたしは さかなが すき＿＿ ありません。", answer: "じゃ", options: ["じゃ", "く", "な", "くな"], en: "I don't like fish." },
      { type: "fill", jp: "ミラーさんは りょうりが ＿＿です。", answer: "じょうず", options: ["じょうず", "へた", "きらい", "わかります"], en: "Mr. Miller is good at cooking." },
      { type: "order", tiles: ["わたしは", "スポーツが", "すきです"], en: "I like sports." },
      { type: "order", tiles: ["やまださんは", "テニスが", "じょうずです"], en: "Mr. Yamada is good at tennis." },
      { type: "choose", q: "What is a soft, natural way to say you don't like something much?", answer: "あまり すきじゃ ありません。", options: ["あまり すきです。", "あまり すきくないです。", "あまり すきじゃ ありません。", "あまり すきが ありません。"] },
      { type: "choose", q: "Why avoid saying 'わたしは にほんごが じょうずです'?", answer: "Praising your own skill sounds boastful", options: ["It is grammatically wrong", "Praising your own skill sounds boastful", "じょうず is only used for food", "It should be を, not が"] }
    ]
  },
  {
    id: "L9-3",
    lesson: 9,
    title: "どんな N (which kind)",
    meaning: "What kind of N? (asking for a specific item)",
    explain: "In Lesson 9, どんな + noun asks someone to name a specific item from a category: どんな スポーツが すきですか → サッカーが すきです. Answer with the item itself, not はい/いいえ.",
    examples: [
      { jp: "どんな スポーツが すきですか。…サッカーが すきです。", ro: "Donna supōtsu ga suki desu ka. …Sakkā ga suki desu.", en: "What kind of sports do you like? — I like soccer." },
      { jp: "どんな おんがくが すきですか。…クラシックが すきです。", ro: "Donna ongaku ga suki desu ka. …Kurashikku ga suki desu.", en: "What kind of music do you like? — I like classical music." }
    ],
    drills: [
      { type: "fill", jp: "＿＿ のみものが すきですか。…こうちゃが すきです。", answer: "どんな", options: ["どんな", "どう", "なに", "どれ"], en: "What kind of drinks do you like? — I like black tea." },
      { type: "fill", jp: "どんな りょうり＿＿ すきですか。", answer: "が", options: ["が", "を", "は", "で"], en: "What kind of food do you like?" },
      { type: "order", tiles: ["どんな", "おんがくが", "すきですか"], en: "What kind of music do you like?" },
      { type: "order", tiles: ["カリナさんは", "どんな", "えが", "すきですか"], en: "What kind of paintings does Karina like?" },
      { type: "choose", q: "'どんな スポーツが すきですか。' Which is the best answer?", answer: "やきゅうが すきです。", options: ["はい、すきです。", "スポーツが すきです。", "やきゅうが すきです。", "どんな スポーツです。"] }
    ]
  },
  {
    id: "L9-4",
    lesson: 9,
    title: "よく / だいたい / たくさん / すこし / あまり / ぜんぜん",
    meaning: "degree adverbs: well, mostly, a lot, a little, not much, not at all",
    explain: "With わかります: よく (well) > だいたい (mostly) > すこし (a little) > あまり ～ません (not much) > ぜんぜん ～ません (not at all). With あります: たくさん (a lot), すこし, あまり ～ません, ぜんぜん ～ません. あまり and ぜんぜん need a negative verb.",
    examples: [
      { jp: "えいごが よく わかります。", ro: "Eigo ga yoku wakarimasu.", en: "I understand English well." },
      { jp: "かんじが ぜんぜん わかりません。", ro: "Kanji ga zenzen wakarimasen.", en: "I don't understand kanji at all." },
      { jp: "おかねが たくさん あります。", ro: "Okane ga takusan arimasu.", en: "I have a lot of money." }
    ],
    drills: [
      { type: "fill", jp: "わたしは かんじが ＿＿ わかりません。", answer: "ぜんぜん", options: ["ぜんぜん", "よく", "たくさん", "だいたい"], en: "I don't understand kanji at all." },
      { type: "fill", jp: "ひらがなが ＿＿ わかります。", answer: "だいたい", options: ["だいたい", "ぜんぜん", "あまり", "とても"], en: "I mostly understand hiragana." },
      { type: "fill", jp: "じかんが ＿＿ ありません。", answer: "あまり", options: ["あまり", "たくさん", "よく", "だいたい"], en: "I don't have much time." },
      { type: "order", tiles: ["おかねが", "たくさん", "あります"], en: "I have a lot of money." },
      { type: "order", tiles: ["にほんごが", "すこし", "わかります"], en: "I understand a little Japanese." },
      { type: "choose", q: "Which adverb must be used with a NEGATIVE verb?", answer: "ぜんぜん", options: ["よく", "たくさん", "ぜんぜん", "だいたい"] },
      { type: "choose", q: "How do you say: 'I understand English well.'?", answer: "えいごが よく わかります。", options: ["えいごが よく わかります。", "えいごが ぜんぜん わかります。", "えいごを よく わかります。", "えいごが よく わかりません。"] }
    ]
  },
  {
    id: "L9-5",
    lesson: 9,
    title: "S1 から、S2 / どうして",
    meaning: "Because S1, S2 / Why?",
    explain: "から after a full sentence means 'because'. The reason comes FIRST: 'S1 から、S2'. Ask 'why?' with どうして, and answer with '～から。'. With a noun, keep です: こどもの たんじょうびですから.",
    examples: [
      { jp: "じかんが ありませんから、しんぶんを よみません。", ro: "Jikan ga arimasen kara, shinbun o yomimasen.", en: "I don't read the newspaper because I have no time." },
      { jp: "どうして はやく かえりますか。…こどもの たんじょうびですから。", ro: "Dōshite hayaku kaerimasu ka. …Kodomo no tanjōbi desu kara.", en: "Why are you going home early? — Because it's my child's birthday." },
      { jp: "いそがしいですから、どこも いきません。", ro: "Isogashii desu kara, doko mo ikimasen.", en: "I'm busy, so I won't go anywhere." }
    ],
    drills: [
      { type: "fill", jp: "ようじが あります＿＿、はやく かえります。", answer: "から", options: ["から", "が", "まで", "と"], en: "I have something to do, so I'll go home early." },
      { type: "fill", jp: "＿＿ きのう がっこうへ きませんでしたか。…ようじが ありましたから。", answer: "どうして", options: ["どうして", "どこ", "いつ", "だれ"], en: "Why didn't you come to school yesterday? — Because I had something to do." },
      { type: "order", tiles: ["おかねが", "ありませんから", "かいません"], en: "I won't buy it because I don't have money." },
      { type: "choose", q: "In 'じかんが ありませんから、テレビを みません', what is the REASON?", answer: "I don't have time.", options: ["I don't watch TV.", "I don't have time.", "I have time.", "I watch TV."] },
      { type: "choose", q: "How do you say: 'Because it's my child's birthday, I'll go home early.'?", answer: "こどもの たんじょうびですから、はやく かえります。", options: ["はやく かえりますから、こどもの たんじょうびです。", "こどもの たんじょうびですが、はやく かえります。", "こどもの たんじょうびから、はやく かえります。", "こどもの たんじょうびですから、はやく かえります。"] }
    ]
  },

  // ───────────────────────── LESSON 10 ─────────────────────────
  {
    id: "L10-1",
    lesson: 10,
    title: "N が あります / います",
    meaning: "There is N (things / living beings)",
    explain: "あります is used for things that don't move by themselves (objects, buildings — and plants, like trees). います is used for people and animals. The thing that exists takes が. Negatives: ありません / いません.",
    examples: [
      { jp: "コンピューターが あります。", ro: "Konpyūtā ga arimasu.", en: "There is a computer." },
      { jp: "おとこの ひとが います。", ro: "Otoko no hito ga imasu.", en: "There is a man." },
      { jp: "いぬが います。", ro: "Inu ga imasu.", en: "There is a dog." }
    ],
    drills: [
      { type: "fill", jp: "ねこ＿＿ います。", answer: "が", options: ["が", "を", "で", "に"], en: "There is a cat." },
      { type: "fill", jp: "こうえんに こどもが ＿＿。", answer: "います", options: ["います", "あります", "です", "ありません"], en: "There are children in the park." },
      { type: "fill", jp: "にわに きが ＿＿。", answer: "あります", options: ["あります", "います", "です", "いません"], en: "There is a tree in the garden." },
      { type: "order", tiles: ["あそこに", "おとこの", "ひとが", "います"], en: "There is a man over there." },
      { type: "choose", q: "Which one takes います?", answer: "いぬ", options: ["き", "でんち", "いぬ", "はこ"] },
      { type: "choose", q: "Which sentence is correct?", answer: "おんなの ひとが います。", options: ["つくえが います。", "おんなの ひとが あります。", "おんなの ひとが います。", "ねこが あります。"] }
    ]
  },
  {
    id: "L10-2",
    lesson: 10,
    title: "Place に N が あります / います",
    meaning: "There is N in/at place",
    explain: "に marks the place where something exists: へやに テーブルが あります. Use に, not で — で is for places where an ACTION happens. Ask with 'place に なにが ありますか' (things) or 'だれが いますか' (people).",
    examples: [
      { jp: "へやに テーブルが あります。", ro: "Heya ni tēburu ga arimasu.", en: "There is a table in the room." },
      { jp: "こうえんに こどもが います。", ro: "Kōen ni kodomo ga imasu.", en: "There are children in the park." },
      { jp: "れいぞうこに なにが ありますか。…ぎゅうにゅうと たまごが あります。", ro: "Reizōko ni nani ga arimasu ka. …Gyūnyū to tamago ga arimasu.", en: "What's in the fridge? — There's milk and eggs." }
    ],
    drills: [
      { type: "fill", jp: "はこ＿＿ でんちが あります。", answer: "に", options: ["に", "で", "を", "へ"], en: "There are batteries in the box." },
      { type: "fill", jp: "あそこに ＿＿が いますか。…ワンさんが います。", answer: "だれ", options: ["だれ", "なに", "どこ", "どれ"], en: "Who is over there? — Mr. Wang is." },
      { type: "fill", jp: "れいぞうこに ＿＿が ありますか。…ジュースが あります。", answer: "なに", options: ["なに", "だれ", "なん", "どこ"], en: "What is in the fridge? — There's juice." },
      { type: "order", tiles: ["わたしの", "へやに", "ベッドが", "あります"], en: "There is a bed in my room." },
      { type: "order", tiles: ["こうえんに", "こどもが", "います"], en: "There are children in the park." },
      { type: "choose", q: "Which particle marks the place where something EXISTS?", answer: "に", options: ["で", "に", "を", "へ"] }
    ]
  },
  {
    id: "L10-3",
    lesson: 10,
    title: "N は place に あります / います",
    meaning: "N is in/at place",
    explain: "When the thing or person is already the topic, put it first with は and then say where it is: ミラーさんは じむしょに います. Ask with 'N は どこに ありますか / いますか'. You can also shorten it to 'N は place です' (Lesson 3).",
    examples: [
      { jp: "ミラーさんは じむしょに います。", ro: "Mirā-san wa jimusho ni imasu.", en: "Mr. Miller is in the office." },
      { jp: "とうきょうディズニーランドは ちばけんに あります。", ro: "Tōkyō Dizunīrando wa Chiba-ken ni arimasu.", en: "Tokyo Disneyland is in Chiba Prefecture." },
      { jp: "かぎは どこに ありますか。…つくえの うえに あります。", ro: "Kagi wa doko ni arimasu ka. …Tsukue no ue ni arimasu.", en: "Where is the key? — It's on the desk." }
    ],
    drills: [
      { type: "fill", jp: "ミラーさんは じむしょ＿＿ います。", answer: "に", options: ["に", "で", "が", "を"], en: "Mr. Miller is in the office." },
      { type: "fill", jp: "ねこは どこに ＿＿か。", answer: "います", options: ["います", "あります", "です"], en: "Where is the cat?" },
      { type: "fill", jp: "コンビニ＿＿ どこに ありますか。", answer: "は", options: ["は", "に", "で", "を"], en: "Where is the convenience store?" },
      { type: "order", tiles: ["やまださんは", "ロビーに", "います"], en: "Mr. Yamada is in the lobby." },
      { type: "order", tiles: ["わたしの", "かさは", "どこに", "ありますか"], en: "Where is my umbrella?" },
      { type: "choose", q: "How do you ask: 'Where is the dog?'", answer: "いぬは どこに いますか。", options: ["いぬは どこに ありますか。", "いぬは どこで いますか。", "いぬは どこに いますか。", "いぬを どこに いますか。"] }
    ]
  },
  {
    id: "L10-4",
    lesson: 10,
    title: "N1 の うえ / した / まえ / うしろ / なか…",
    meaning: "on / under / in front of / behind / inside… N1",
    explain: "Position words are nouns, so link them with の: つくえの うえに (on the desk). The set: うえ (on/above), した (under), まえ (in front), うしろ (behind), みぎ (right), ひだり (left), なか (inside), そと (outside), となり (next to), ちかく (near). For 'between A and B' say A と B の あいだ.",
    examples: [
      { jp: "つくえの うえに しゃしんが あります。", ro: "Tsukue no ue ni shashin ga arimasu.", en: "There is a photo on the desk." },
      { jp: "ゆうびんきょくは ぎんこうの となりに あります。", ro: "Yūbinkyoku wa ginkō no tonari ni arimasu.", en: "The post office is next to the bank." },
      { jp: "コンビニは ほんやと きっさてんの あいだに あります。", ro: "Konbini wa hon'ya to kissaten no aida ni arimasu.", en: "The convenience store is between the bookstore and the café." }
    ],
    drills: [
      { type: "fill", jp: "いぬは ドア＿＿ まえに います。", answer: "の", options: ["の", "に", "で", "が"], en: "The dog is in front of the door." },
      { type: "fill", jp: "ねこは はこの ＿＿に います。", answer: "なか", options: ["なか", "そと", "うえ", "した"], en: "The cat is inside the box." },
      { type: "fill", jp: "ぎんこうは えきと デパートの ＿＿に あります。", answer: "あいだ", options: ["あいだ", "となり", "ちかく", "まえ"], en: "The bank is between the station and the department store." },
      { type: "order", tiles: ["つくえの", "うえに", "でんわが", "あります"], en: "There is a telephone on the desk." },
      { type: "order", tiles: ["ポストは", "ビルの", "まえに", "あります"], en: "The postbox is in front of the building." },
      { type: "choose", q: "What does うしろ mean?", answer: "behind", options: ["below", "behind", "inside", "next to"] },
      { type: "choose", q: "How do you say: 'The battery is under the bed.'?", answer: "でんちは ベッドの したに あります。", options: ["でんちは ベッドの したに います。", "でんちは したの ベッドに あります。", "でんちは ベッドの したで あります。", "でんちは ベッドの したに あります。"] }
    ]
  },
  {
    id: "L10-5",
    lesson: 10,
    title: "N1 や N2 [など]",
    meaning: "N1, N2 and so on (examples, not a full list)",
    explain: "や lists a few examples and implies there are other things too; add など ('etc.') after the last item if you like. Compare と, which lists EVERYTHING: たまごと ジュース = only eggs and juice.",
    examples: [
      { jp: "はこの なかに てがみや しゃしんが あります。", ro: "Hako no naka ni tegami ya shashin ga arimasu.", en: "In the box there are letters, photos and so on." },
      { jp: "つくえの うえに ペンや ノートなどが あります。", ro: "Tsukue no ue ni pen ya nōto nado ga arimasu.", en: "On the desk there are pens, notebooks, etc." }
    ],
    drills: [
      { type: "fill", jp: "かばんの なかに ペン＿＿ ノートなどが あります。", answer: "や", options: ["や", "の", "を", "で"], en: "In the bag there are pens, notebooks, etc." },
      { type: "fill", jp: "みせに パンや ぎゅうにゅう＿＿が あります。", answer: "など", options: ["など", "や", "と", "も"], en: "The shop has bread, milk, and so on." },
      { type: "order", tiles: ["はこの", "なかに", "てがみや", "しゃしんが", "あります"], en: "In the box there are letters, photos and so on." },
      { type: "order", tiles: ["こうえんに", "いぬや", "ねこが", "います"], en: "In the park there are dogs, cats and so on." },
      { type: "choose", q: "Which particle suggests the list is NOT complete?", answer: "や", options: ["と", "や", "も", "の"] },
      { type: "choose", q: "'れいぞうこに たまごと ジュースが あります' — what does と tell you?", answer: "There are only eggs and juice (complete list)", options: ["There are eggs, juice and other things", "There are only eggs and juice (complete list)", "There are eggs inside the juice", "There are no eggs"] }
    ]
  }

]);
