// Study layer for Minna no Nihongo Lessons 1–10: structured grammar cards and lesson guides.
// Built from data/grammar_a.js and the learner's own notes. Overrides `title`/`meaning` where set.
window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {

  // ───────────── Lesson 1 ─────────────
  "L1-1": {
    formula: ["N1 は N2 です"],
    points: [
      "N means noun: a person, place or thing.",
      "は is a particle: a small word that shows a noun's job.",
      "は marks the topic, which is what the sentence is about.",
      "です is the polite am, is or are.",
      "Japanese has no words for a or the."
    ],
    tip: "As a particle, は is always read wa, never ha."
  },
  "L1-2": {
    formula: ["N1 は N2 じゃ ありません"],
    points: [
      "じゃ ありません is the negative of です. It means is not.",
      "It goes straight after the noun.",
      "In では, the は is read wa, so it sounds like dewa."
    ],
    tables: [
      {
        title: "Saying is and is not",
        headers: ["Meaning", "Ending", "Example"],
        rows: [
          ["is", "です", "がくせいです。"],
          ["is not", "じゃ ありません", "がくせいじゃ ありません。"],
          ["is not (more formal)", "では ありません", "がくせいでは ありません。"]
        ]
      }
    ],
    mistakes: [
      { bad: "わたしは がくせいじゃ ありませんです。", good: "わたしは がくせいじゃ ありません。", why: "じゃ ありません replaces です. Don't add です after it." }
    ]
  },
  "L1-3": {
    title: "S か",
    meaning: "か turns a sentence into a question",
    formula: ["S か", "はい、N です", "いいえ、N じゃ ありません"],
    points: [
      "S means a whole sentence.",
      "Add か at the end. The word order stays the same.",
      "か does the job of a question mark.",
      "Answer with はい (yes) or いいえ (no), then repeat the noun.",
      "Drop the topic when it is obvious."
    ]
  },
  "L1-4": {
    meaning: "N also, N too",
    formula: ["N も N2 です", "N も N2 じゃ ありません"],
    points: [
      "も means also or too.",
      "も replaces は. Never say はも.",
      "With a negative it means not … either."
    ],
    mistakes: [
      { bad: "わたしはも がくせいです。", good: "わたしも がくせいです。", why: "も takes the place of は." }
    ]
  },
  "L1-5": {
    meaning: "N2 of N1, N2 at N1",
    formula: ["N1 の N2"],
    points: [
      "の joins two nouns. The first one describes the second.",
      "Here N1 is the group: a company, school or hospital.",
      "The order is the reverse of English of."
    ],
    mistakes: [
      { bad: "カリナさんは がくせいの ふじだいがくです。", good: "カリナさんは ふじだいがくの がくせいです。", why: "The group comes first, then the role." }
    ]
  },
  "L1-6": {
    meaning: "Names, nationality and where you came from",
    formula: ["Name さん", "Country じん", "Country から きました"],
    points: [
      "Add さん after other people's names, never your own.",
      "さん works with family names and given names.",
      "Introduce someone with こちらは ～さんです."
    ],
    tables: [
      {
        title: "Name and country endings",
        headers: ["Ending", "Used for", "Example", "English"],
        rows: [
          ["さん", "Other people's names", "ミラーさん", "Mr. Miller"],
          ["ちゃん", "Young children, affection", "テレーザちゃん", "Teresa (a child)"],
          ["くん", "Boys and younger males", "たろうくん", "Taro (a boy)"],
          ["じん", "A person from a country", "わたしは インドじんです。", "I am Indian."],
          ["から きました", "The country you came from", "わたしは インドから きました。", "I came from India."]
        ]
      }
    ],
    mistakes: [
      { bad: "わたしは さとうさんです。", good: "わたしは さとうです。", why: "Never use さん for yourself." }
    ]
  },
  "L1-7": {
    meaning: "Who? How old?",
    formula: ["N は だれですか", "N は なんさいですか"],
    points: [
      "A question word asks for information, like who or how old.",
      "Put it where the answer will go. Keep か at the end.",
      "Don't answer these questions with はい or いいえ.",
      "さい is a counter: a word added to a number to count."
    ],
    tables: [
      {
        title: "Everyday and polite question words",
        headers: ["Asks", "Everyday", "Polite"],
        rows: [
          ["Who?", "だれ", "どなた"],
          ["How old?", "なんさい", "おいくつ"]
        ]
      },
      {
        title: "Ages with a sound change",
        headers: ["Age", "Japanese"],
        rows: [
          ["1 year old", "いっさい"],
          ["8 years old", "はっさい"],
          ["10 years old", "じゅっさい"]
        ]
      }
    ]
  },

  // ───────────── Lesson 2 ─────────────
  "L2-1": {
    meaning: "This one, that one, that one over there",
    formula: ["これ / それ / あれ は N です", "これ / それ / あれ は N1 の N2 です"],
    points: [
      "They stand alone as nouns, so は can follow directly.",
      "Never put a noun straight after them."
    ],
    tables: [
      {
        title: "Where the thing is",
        headers: ["Word", "Near", "Example", "English"],
        rows: [
          ["これ", "The speaker", "これは ほんです。", "This is a book."],
          ["それ", "The listener", "それは しんぶんです。", "That is a newspaper."],
          ["あれ", "Far from both", "あれは コンピューターです。", "That over there is a computer."]
        ]
      },
      {
        title: "Sentences to build",
        headers: ["Type", "Example", "English"],
        rows: [
          ["Statement", "これは かぎです。", "This is a key."],
          ["Yes/no question", "これは じしょですか。", "Is this a dictionary?"],
          ["Negative", "これは ざっしじゃ ありません。", "This is not a magazine."],
          ["Owner", "これは わたしの ほんです。", "This is my book."],
          ["Asking what", "それは なんですか。", "What is that?"],
          ["Asking whose", "あれは だれの かばんですか。", "Whose bag is that over there?"]
        ]
      }
    ],
    mistakes: [
      { bad: "これ ほんは わたしのです。", good: "この ほんは わたしのです。", why: "これ stands alone. Use この before a noun." }
    ]
  },
  "L2-2": {
    meaning: "This N, that N, that N over there",
    formula: ["この / その / あの N", "この / その / あの N2 は N1 のです"],
    points: [
      "They must be followed directly by a noun.",
      "They cannot stand alone.",
      "Near and far work the same as これ, それ, あれ.",
      "This is just another way of saying the same sentence."
    ],
    tables: [
      {
        title: "Same idea, two ways",
        headers: ["Word", "Noun straight after?", "Example", "English"],
        rows: [
          ["これ", "No", "これは わたしの ほんです。", "This is my book."],
          ["この", "Yes", "この ほんは わたしのです。", "This book is mine."],
          ["それ", "No", "それは わたしの かさです。", "That is my umbrella."],
          ["その", "Yes", "その かさは わたしのです。", "That umbrella is mine."],
          ["あれ", "No", "あれは わたしの かばんです。", "That over there is my bag."],
          ["あの", "Yes", "あの かばんは わたしのです。", "That bag over there is mine."]
        ]
      }
    ],
    mistakes: [
      { bad: "このは わたしの ほんです。", good: "これは わたしの ほんです。", why: "この cannot stand alone. Use これ." }
    ]
  },
  "L2-3": {
    meaning: "That's right, that's not right, I see",
    formula: ["はい、そうです", "いいえ、そうじゃ ありません", "そうですか"],
    points: [
      "Use the yes and no replies for questions about nouns.",
      "そうですか falls in tone. It is not a real question."
    ],
    tables: [
      {
        headers: ["Say", "Meaning", "Use it when"],
        rows: [
          ["はい、そうです。", "Yes, it is.", "You agree"],
          ["いいえ、そうじゃ ありません。", "No, it isn't.", "You disagree"],
          ["いいえ、ちがいます。", "No, that's wrong.", "You disagree"],
          ["そうですか。", "Oh, I see.", "You hear new information"]
        ]
      }
    ]
  },
  "L2-4": {
    meaning: "Is it S1 or S2?",
    formula: ["S1 か、S2 か"],
    points: [
      "Put two questions side by side to ask A or B.",
      "Answer by simply stating the right one.",
      "Don't start with はい or いいえ, and don't answer そうです."
    ],
    mistakes: [
      { bad: "これは ほんですか、ノートですか。…はい、ほんです。", good: "これは ほんですか、ノートですか。…ほんです。", why: "An A or B question takes no はい." }
    ]
  },
  "L2-5": {
    title: "N1 の N2 (topic / owner) and N1 の",
    meaning: "About N1, N1's thing, it's N1's",
    formula: ["N1 の N2", "N1 のです"],
    points: [
      "Drop the second noun when it is already clear.",
      "Never drop the noun when it is a person."
    ],
    tables: [
      {
        title: "What の can show",
        headers: ["Job", "Example", "English"],
        rows: [
          ["What it is about", "コンピューターの ほん", "a book about computers"],
          ["Who owns it", "わたしの かさ", "my umbrella"],
          ["Owner, noun dropped", "わたしのです。", "It's mine."],
          ["Asking the owner", "だれの かさですか。", "Whose umbrella is it?"]
        ]
      }
    ],
    mistakes: [
      { bad: "あの ひとは ふじだいがくのです。", good: "あの ひとは ふじだいがくの がくせいです。", why: "You can't drop a noun that means a person." }
    ]
  },
  "L2-6": {
    meaning: "What kind of N? N about what?",
    formula: ["なんの N ですか", "N1 の N2 です"],
    points: [
      "なんの always comes right before a noun.",
      "Answer with N1 の N2."
    ],
    tables: [
      {
        title: "なんの vs だれの",
        headers: ["Word", "Asks", "Example", "English"],
        rows: [
          ["なんの", "The topic or type", "これは なんの ほんですか。", "What is this book about?"],
          ["だれの", "The owner", "これは だれの ほんですか。", "Whose book is this?"]
        ]
      }
    ]
  },

  // ───────────── Lesson 3 ─────────────
  "L3-1": {
    meaning: "Here, there, over there",
    formula: ["ここ / そこ / あそこ は N です"],
    points: [
      "ここ, そこ and あそこ are places. これ, それ, あれ are things.",
      "If you and the listener share an area, that area is ここ."
    ],
    tables: [
      {
        title: "Things and places",
        headers: ["Near", "Thing", "Place", "Example", "English"],
        rows: [
          ["The speaker", "これ", "ここ", "ここは しょくどうです。", "This is the cafeteria."],
          ["The listener", "それ", "そこ", "そこは トイレです。", "That place is the toilet."],
          ["Far from both", "あれ", "あそこ", "あそこは じむしょです。", "Over there is the office."]
        ]
      }
    ]
  },
  "L3-2": {
    title: "N は Place です / どこ",
    meaning: "N is at a place. Where is N?",
    formula: ["N は Place です", "N は どこですか"],
    points: [
      "This works for things, places and people.",
      "Answer with ここ, そこ, あそこ or a place name.",
      "Floors use the counter かい. Watch the sound changes."
    ],
    tables: [
      {
        title: "Floors",
        headers: ["Floor", "Japanese"],
        rows: [
          ["1st", "いっかい"],
          ["2nd", "にかい"],
          ["3rd", "さんがい"],
          ["4th", "よんかい"],
          ["5th", "ごかい"],
          ["6th", "ろっかい"],
          ["7th", "ななかい"],
          ["8th", "はっかい"],
          ["9th", "きゅうかい"],
          ["10th", "じゅっかい"],
          ["Which floor?", "なんがい"],
          ["Basement", "ちか"]
        ]
      }
    ]
  },
  "L3-3": {
    meaning: "Polite here, there, over there, where",
    formula: ["N は こちら / そちら / あちら です", "N は どちらですか"],
    points: [
      "Shop and hotel staff use these a lot.",
      "どちら also politely asks someone's country, company or school.",
      "そちら can also mean your place or your side."
    ],
    tables: [
      {
        title: "ここ vs こちら",
        headers: ["Everyday", "Polite", "Meaning"],
        rows: [
          ["ここ", "こちら", "Here, this way"],
          ["そこ", "そちら", "There, that way"],
          ["あそこ", "あちら", "Over there, that way"],
          ["どこ", "どちら", "Where, which way"]
        ]
      }
    ]
  },
  "L3-4": {
    meaning: "N2 made in N1, N2 made by N1",
    formula: ["N1 の N2", "どこの N ですか"],
    points: [
      "Ask with どこの N: made where, or by which company?",
      "Answer with N1 の N2."
    ],
    tables: [
      {
        headers: ["N1 is", "Example", "English"],
        rows: [
          ["A country", "にほんの くるま", "a Japanese car"],
          ["A company", "パワーでんきの コンピューター", "a Power Electric computer"]
        ]
      }
    ]
  },
  "L3-5": {
    meaning: "How much is it?",
    formula: ["N は いくらですか", "～えんです", "N を ください"],
    points: [
      "Say the number, then えん.",
      "To buy something, say じゃ、これを ください."
    ],
    tables: [
      {
        title: "Numbers to watch",
        headers: ["Number", "Japanese", "Watch for"],
        rows: [
          ["100", "ひゃく", "No one in front"],
          ["300", "さんびゃく", "Sound changes to byaku"],
          ["600", "ろっぴゃく", "Sound changes to ppyaku"],
          ["800", "はっぴゃく", "Sound changes to ppyaku"],
          ["1,000", "せん", "No one in front"],
          ["3,000", "さんぜん", "Sound changes to zen"],
          ["8,000", "はっせん", "Sound changes to ssen"],
          ["10,000", "いちまん", "Keep the one in front"]
        ]
      },
      {
        title: "Shop phrases",
        headers: ["Japanese", "English"],
        rows: [
          ["いらっしゃいませ。", "Welcome. (said by staff)"],
          ["これを みせて ください。", "Please show me this."],
          ["じゃ、これを ください。", "Well then, I'll take this one."]
        ]
      }
    ],
    mistakes: [
      { bad: "これは さんひゃくえんです。", good: "これは さんびゃくえんです。", why: "300 is さんびゃく." }
    ]
  },
  "L3-6": {
    meaning: "Polite お before the listener's things",
    formula: ["お + N"],
    points: [
      "A prefix is a sound added to the front of a word.",
      "お shows respect for the listener's things.",
      "Never use it for your own things."
    ],
    tables: [
      {
        headers: ["Word", "Meaning", "When"],
        rows: [
          ["おくに", "Your country", "Only about the listener"],
          ["おなまえ", "Your name", "Only about the listener"],
          ["おみやげ", "Souvenir", "Always has it"],
          ["おてあらい", "Restroom", "Always has it"]
        ]
      }
    ],
    mistakes: [
      { bad: "わたしの おくには インドです。", good: "わたしの くには インドです。", why: "Never use お for your own things." }
    ]
  },

  // ───────────── Lesson 4 ─────────────
  "L4-1": {
    meaning: "It's ~ o'clock and ~ minutes now",
    formula: ["いま ～じ ～ふん です", "いま なんじですか"],
    points: [
      "Hours use じ. Minutes use ふん or ぷん.",
      "はん means half past.",
      "ごぜん (a.m.) and ごご (p.m.) go before the time."
    ],
    tables: [
      {
        title: "Hours with a special reading",
        headers: ["Time", "Japanese"],
        rows: [
          ["4:00", "よじ"],
          ["7:00", "しちじ"],
          ["9:00", "くじ"]
        ]
      },
      {
        title: "Minutes: ふん or ぷん",
        headers: ["Minutes", "Japanese"],
        rows: [
          ["1", "いっぷん"],
          ["2", "にふん"],
          ["3", "さんぷん"],
          ["4", "よんぷん"],
          ["5", "ごふん"],
          ["6", "ろっぷん"],
          ["7", "ななふん"],
          ["8", "はっぷん"],
          ["9", "きゅうふん"],
          ["10", "じゅっぷん"],
          ["How many?", "なんぷん"]
        ]
      }
    ],
    mistakes: [
      { bad: "いま しじです。", good: "いま よじです。", why: "4 o'clock is always よじ." },
      { bad: "いま きゅうじです。", good: "いま くじです。", why: "9 o'clock is always くじ." }
    ]
  },
  "L4-2": {
    meaning: "Do, don't, did, didn't",
    formula: ["V ます / ません", "V ました / ませんでした"],
    points: [
      "V means verb: an action word.",
      "ます covers both habits and the future.",
      "Time words show which one you mean."
    ],
    tables: [
      {
        title: "Four polite forms",
        headers: ["Meaning", "Ending", "Example 1", "Example 2"],
        rows: [
          ["Do, will do", "ます", "おきます", "べんきょうします"],
          ["Don't, won't", "ません", "おきません", "べんきょうしません"],
          ["Did", "ました", "おきました", "べんきょうしました"],
          ["Didn't", "ませんでした", "おきませんでした", "べんきょうしませんでした"]
        ]
      }
    ],
    mistakes: [
      { bad: "きのう べんきょうしません。", good: "きのう べんきょうしませんでした。", why: "Past negatives need ませんでした." }
    ]
  },
  "L4-3": {
    title: "Time に V",
    meaning: "Do V at a time",
    formula: ["Time に V"],
    points: [
      "に marks a specific point in time.",
      "Relative time words depend on today, like tomorrow. They take no に."
    ],
    tables: [
      {
        title: "When to use に",
        headers: ["Kind of time", "Use it?", "Example", "English"],
        rows: [
          ["Clock time", "Yes", "ろくじに おきます。", "I get up at six."],
          ["Date", "Yes", "ろくがつ ようかに やすみます。", "I'll take a day off on June 8th."],
          ["Day of the week", "Optional", "どようびに はたらきます。", "I work on Saturdays."],
          ["Relative time word", "No", "あした べんきょうします。", "I'll study tomorrow."]
        ]
      },
      {
        title: "Words that never take に",
        headers: ["Word", "Meaning"],
        rows: [
          ["いま", "Now"],
          ["きょう", "Today"],
          ["あした", "Tomorrow"],
          ["きのう", "Yesterday"],
          ["けさ", "This morning"],
          ["こんばん", "Tonight"],
          ["まいにち", "Every day"],
          ["まいあさ", "Every morning"]
        ]
      }
    ],
    mistakes: [
      { bad: "あしたに べんきょうします。", good: "あした べんきょうします。", why: "あした is a relative time word, so no に." }
    ]
  },
  "L4-4": {
    meaning: "From N1 to N2",
    formula: ["N1 から N2 まで", "N は N1 から N2 までです"],
    points: [
      "から means from. まで means until or up to.",
      "They work for both times and places.",
      "You can use them together or alone.",
      "You can end the sentence with です."
    ]
  },
  "L4-5": {
    meaning: "N1 and N2",
    formula: ["N1 と N2"],
    points: [
      "と joins nouns and lists every item.",
      "It cannot join verbs, adjectives (describing words) or whole sentences."
    ]
  },
  "L4-6": {
    meaning: "…, isn't it? …, right?",
    formula: ["S ね"],
    points: [
      "ね looks for agreement or shows sympathy.",
      "Use it when you think the listener knows or will agree.",
      "A common reply is たいへんですね: That must be hard."
    ]
  },

  // ───────────── Lesson 5 ─────────────
  "L5-1": {
    title: "Place へ いきます / きます / かえります",
    meaning: "Go, come or return to a place",
    formula: ["Place へ いきます / きます / かえります"],
    points: [
      "へ marks where you are going. Read it as e, not he.",
      "You will also hear に used the same way."
    ],
    tables: [
      {
        title: "Three movement verbs",
        headers: ["Verb", "Meaning", "Example", "English"],
        rows: [
          ["いきます", "Go", "きょうとへ いきます。", "I'll go to Kyoto."],
          ["きます", "Come toward the speaker", "にほんへ きました。", "I came to Japan."],
          ["かえります", "Go home, go back", "うちへ かえります。", "I'll go home."]
        ]
      }
    ]
  },
  "L5-2": {
    meaning: "Not anywhere, nothing, nobody",
    formula: ["Question word も + negative verb", "どこ[へ]も いきません"],
    points: [
      "The へ in どこへも is optional.",
      "This works only with negative verbs."
    ],
    tables: [
      {
        headers: ["Question word", "With も", "Meaning", "Example", "English"],
        rows: [
          ["どこ", "どこへも", "Not anywhere", "どこへも いきませんでした。", "I didn't go anywhere."],
          ["なに", "なにも", "Nothing", "なにも たべませんでした。", "I didn't eat anything."],
          ["だれ", "だれも", "Nobody", "だれも きませんでした。", "Nobody came."]
        ]
      }
    ],
    mistakes: [
      { bad: "きのう どこも いきました。", good: "きのう どこも いきませんでした。", why: "どこも needs a negative verb." }
    ]
  },
  "L5-3": {
    title: "Vehicle で",
    meaning: "By train, bus, plane…",
    formula: ["Vehicle で いきます / きます / かえります"],
    points: [
      "で after a vehicle shows how you travel.",
      "Walking is あるいて, with no で.",
      "Ask how with なんで."
    ],
    mistakes: [
      { bad: "えきから あるいてで かえりました。", good: "えきから あるいて かえりました。", why: "あるいて never takes で." }
    ]
  },
  "L5-4": {
    title: "Person と",
    meaning: "Together with a person",
    formula: ["Person と V", "だれと V か", "ひとりで V"],
    points: [
      "と after a person means together with.",
      "Ask with whom using だれと.",
      "Alone is ひとりで, not ひとりと."
    ],
    mistakes: [
      { bad: "ひとりと とうきょうへ いきます。", good: "ひとりで とうきょうへ いきます。", why: "Alone is always ひとりで." }
    ]
  },
  "L5-5": {
    title: "いつ and dates",
    meaning: "When? Months and days",
    formula: ["いつ V か", "～がつ ～にち"],
    points: [
      "いつ means when and never takes に.",
      "A date in the answer does take に.",
      "Most days are a number plus にち. Learn the special ones below."
    ],
    tables: [
      {
        title: "Months with a special reading",
        headers: ["Month", "Japanese"],
        rows: [
          ["April", "しがつ"],
          ["July", "しちがつ"],
          ["September", "くがつ"]
        ]
      },
      {
        title: "Days with a special reading",
        headers: ["Day", "Japanese"],
        rows: [
          ["1st", "ついたち"],
          ["2nd", "ふつか"],
          ["3rd", "みっか"],
          ["4th", "よっか"],
          ["5th", "いつか"],
          ["6th", "むいか"],
          ["7th", "なのか"],
          ["8th", "ようか"],
          ["9th", "ここのか"],
          ["10th", "とおか"],
          ["14th", "じゅうよっか"],
          ["20th", "はつか"],
          ["24th", "にじゅうよっか"]
        ]
      }
    ],
    mistakes: [
      { bad: "いつに にほんへ きましたか。", good: "いつ にほんへ きましたか。", why: "いつ never takes に." }
    ]
  },
  "L5-6": {
    meaning: "…, you know",
    formula: ["S よ"],
    points: [
      "よ can also stress your own opinion.",
      "Using よ too much can sound pushy."
    ],
    tables: [
      {
        title: "ね vs よ",
        headers: ["Ending", "Use it when", "Example", "English"],
        rows: [
          ["ね", "The listener already knows", "あしたは どようびですね。", "Tomorrow is Saturday, right?"],
          ["よ", "The listener doesn't know", "あしたは やすみですよ。", "Tomorrow is a day off, you know."]
        ]
      }
    ]
  },

  // ───────────── Lesson 6 ─────────────
  "L6-1": {
    meaning: "Do V to N",
    formula: ["N を V"],
    points: [
      "を marks the direct object: the thing the action is done to.",
      "It is written を but read o.",
      "The object comes before the verb."
    ],
    tables: [
      {
        title: "Useful pairs",
        headers: ["Japanese", "English"],
        rows: [
          ["ごはんを たべます。", "I eat a meal."],
          ["みずを のみます。", "I drink water."],
          ["たばこを すいます。", "I smoke a cigarette."],
          ["テレビを みます。", "I watch television."],
          ["おんがくを ききます。", "I listen to music."],
          ["ほんを よみます。", "I read a book."],
          ["てがみを かきます。", "I write a letter."],
          ["パンを かいます。", "I buy bread."],
          ["しゃしんを とります。", "I take a photograph."]
        ]
      }
    ],
    mistakes: [
      { bad: "ともだちを あいます。", good: "ともだちに あいます。", why: "あいます takes に for the person you meet." }
    ]
  },
  "L6-2": {
    meaning: "Do or play N. What will you do?",
    formula: ["N を します", "なにを しますか"],
    points: [
      "します means do, and it covers many English verbs.",
      "Ask what someone will do with なにを しますか."
    ],
    tables: [
      {
        title: "Common pairs",
        headers: ["Japanese", "English"],
        rows: [
          ["サッカーを します。", "I play soccer."],
          ["テニスを します。", "I play tennis."],
          ["しゅくだいを します。", "I do homework."],
          ["おはなみを します。", "I enjoy cherry-blossom viewing."]
        ]
      }
    ]
  },
  "L6-3": {
    title: "Place で V",
    meaning: "Do V at a place",
    formula: ["Place で V", "Place で Object を V"],
    points: [
      "で marks the place where an action happens.",
      "The usual order is place, object, verb."
    ],
    tables: [
      {
        title: "で vs へ and に",
        headers: ["Particle", "Marks", "Example", "English"],
        rows: [
          ["へ", "Where you are going", "がっこうへ いきます。", "I go to school."],
          ["に", "Where you are going", "がっこうに いきます。", "I go to school."],
          ["で", "Where an action happens", "がっこうで べんきょうします。", "I study at school."]
        ]
      }
    ],
    mistakes: [
      { bad: "としょかんに ほんを よみます。", good: "としょかんで ほんを よみます。", why: "Reading is an action, so use で." }
    ]
  },
  "L6-4": {
    meaning: "Won't you…? Would you like to…?",
    formula: ["V ませんか", "いっしょに V ませんか"],
    points: [
      "It invites politely and respects the listener's choice.",
      "It often comes with いっしょに, which means together.",
      "ちょっと… hints no without saying いいえ."
    ],
    tables: [
      {
        title: "Change ます to ませんか",
        headers: ["Verb", "Invitation", "English"],
        rows: [
          ["みます", "みませんか", "Would you like to watch?"],
          ["のみます", "のみませんか", "Would you like to drink?"],
          ["いきます", "いきませんか", "Would you like to go?"]
        ]
      },
      {
        title: "Replying",
        headers: ["Reply", "Meaning", "Tone"],
        rows: [
          ["ええ、いいですね。", "Yes, that sounds good.", "Accepting"],
          ["すみません、ちょっと…。", "Sorry, that's a bit…", "Refusing softly"]
        ]
      }
    ]
  },
  "L6-5": {
    meaning: "Let's…",
    formula: ["V ましょう"],
    points: [
      "It actively suggests doing something together.",
      "It can also accept an invitation: ええ、いきましょう."
    ],
    tables: [
      {
        title: "Change ます to ましょう",
        headers: ["Verb", "Suggestion", "English"],
        rows: [
          ["たべます", "たべましょう", "Let's eat."],
          ["やすみます", "やすみましょう", "Let's take a break."],
          ["べんきょうします", "べんきょうしましょう", "Let's study."]
        ]
      },
      {
        title: "ませんか vs ましょう",
        headers: ["Ending", "Strength", "Example", "English"],
        rows: [
          ["ませんか", "Gentle: asks what they want", "えいがを みませんか。", "Would you like to watch a movie?"],
          ["ましょう", "Stronger: a direct suggestion", "えいがを みましょう。", "Let's watch a movie."]
        ]
      }
    ]
  },
  "L6-6": {
    meaning: "Two readings of what",
    formula: ["なん + です / の / counter", "なに + を / が"],
    points: [
      "Both mean what.",
      "Use なん when asking about a number or category."
    ],
    tables: [
      {
        title: "Which reading to use",
        headers: ["Word", "Next word", "Why", "Example", "English"],
        rows: [
          ["なん", "です", "Starts with d", "なんですか。", "What is it?"],
          ["なん", "の", "Starts with n", "なんの ほんですか。", "What kind of book is it?"],
          ["なん", "じ", "Counter", "なんじですか。", "What time is it?"],
          ["なに", "を", "Particle", "なにを たべますか。", "What will you eat?"],
          ["なに", "が", "Particle", "なにが ありますか。", "What is there?"]
        ]
      }
    ],
    tip: "Before t, d or n sounds and counters, say なん. Before most particles, say なに."
  },

  // ───────────── Lesson 7 ─────────────
  "L7-1": {
    title: "Tool で V",
    meaning: "Do V with, by or in N",
    formula: ["Tool で V", "Language で V"],
    points: [
      "で marks the tool, method or language you use.",
      "It is the same で as the place で. Context shows which."
    ],
    tables: [
      {
        title: "Every で so far",
        headers: ["Marks", "Lesson", "Example", "English"],
        rows: [
          ["Vehicle", "5", "でんしゃで いきます。", "I go by train."],
          ["Place of an action", "6", "がっこうで べんきょうします。", "I study at school."],
          ["Tool", "7", "はしで ごはんを たべます。", "I eat rice with chopsticks."],
          ["Tool", "7", "ペンで てがみを かきます。", "I write a letter with a pen."],
          ["Language", "7", "にほんごで はなします。", "I speak in Japanese."]
        ]
      }
    ],
    mistakes: [
      { bad: "はしと ごはんを たべます。", good: "はしで ごはんを たべます。", why: "と means with a person. Tools take で." }
    ]
  },
  "L7-2": {
    meaning: "What is this word in another language?",
    formula: ["「word」は Language で なんですか", "「…」です"],
    points: [
      "で here means in a language.",
      "The answer is simply the word plus です."
    ],
    tip: "Learn this one by heart: 「water」は にほんごで なんですか。"
  },
  "L7-3": {
    title: "Person に あげます / かします / おしえます",
    meaning: "Give, lend or teach to a person",
    formula: ["Giver は Receiver に Thing を あげます"],
    points: [
      "The person receiving takes に.",
      "The thing being given takes を."
    ],
    tables: [
      {
        title: "Verbs with this pattern",
        headers: ["Verb", "Meaning", "Example", "English"],
        rows: [
          ["あげます", "Give", "わたしは ともだちに ほんを あげます。", "I give my friend a book."],
          ["かします", "Lend", "たなかさんに ペンを かしました。", "I lent Tanaka a pen."],
          ["おしえます", "Teach", "わたしは カリナさんに えいごを おしえます。", "I teach Karina English."],
          ["おしえます", "Tell", "やまださんに でんわばんごうを おしえます。", "I tell Mr. Yamada the phone number."],
          ["おくります", "Send", "ははに にもつを おくります。", "I send my mother a parcel."],
          ["かけます", "Make a call", "ともだちに でんわを かけます。", "I call a friend."]
        ]
      }
    ],
    tip: "あげます gives away. かします gives for a while."
  },
  "L7-4": {
    title: "Person に / から もらいます / かります / ならいます",
    meaning: "Receive, borrow or learn from a person",
    formula: ["Receiver は Giver に Thing を もらいます", "Receiver は Giver から Thing を もらいます"],
    points: [
      "With these verbs, に means from.",
      "The thing still takes を.",
      "Only the verb shows the direction, so read it carefully."
    ],
    tables: [
      {
        title: "Same に, opposite verbs",
        headers: ["Verb", "Sentence", "English"],
        rows: [
          ["あげました", "わたしは マリアさんに はなを あげました。", "I gave Maria flowers."],
          ["もらいました", "わたしは マリアさんに はなを もらいました。", "I received flowers from Maria."],
          ["かします", "ともだちに ほんを かします。", "I lend a book to my friend."],
          ["かります", "ともだちに ほんを かります。", "I borrow a book from my friend."],
          ["おしえます", "せんせいは わたしに にほんごを おしえます。", "The teacher teaches me Japanese."],
          ["ならいます", "わたしは せんせいに にほんごを ならいます。", "I learn Japanese from the teacher."]
        ]
      },
      {
        title: "Same event, two points of view",
        headers: ["Point of view", "Sentence", "English"],
        rows: [
          ["The giver", "ケンさんは マリアさんに ほんを あげました。", "Ken gave Maria a book."],
          ["The receiver", "マリアさんは ケンさんに ほんを もらいました。", "Maria received a book from Ken."]
        ]
      },
      {
        title: "に or から",
        headers: ["Giver", "Particle", "Example", "English"],
        rows: [
          ["A person", "に", "ともだちに プレゼントを もらいました。", "I received a present from a friend."],
          ["A person", "から", "ともだちから プレゼントを もらいました。", "I received a present from a friend."],
          ["A bank, school or company", "から", "ぎんこうから おかねを かりました。", "I borrowed money from the bank."]
        ]
      }
    ],
    mistakes: [
      { bad: "ケンさんは わたしに ほんを あげました。", good: "わたしは ケンさんに ほんを もらいました。", why: "あげます can't point toward you. Use もらいます." },
      { bad: "ぎんこうに おかねを かりました。", good: "ぎんこうから おかねを かりました。", why: "Organisations take から, not に." }
    ],
    tip: "もらいます comes toward you. かります comes toward you for a while."
  },
  "L7-5": {
    meaning: "Already did V. Not yet.",
    formula: ["もう V ました", "もう V ましたか", "いいえ、まだです"],
    points: [
      "もう with a past verb means already.",
      "In a question, もう ～ましたか means Have you … yet?",
      "まだ means not yet or still."
    ],
    tables: [
      {
        title: "Answering もう ～ましたか",
        headers: ["Answer", "Japanese", "English"],
        rows: [
          ["Yes", "はい、もう たべました。", "Yes, I already ate."],
          ["No", "いいえ、まだです。", "No, not yet."],
          ["No, but soon", "いいえ、まだです。これから たべます。", "No, not yet. I'm going to eat now."]
        ]
      }
    ],
    mistakes: [
      { bad: "もう たべましたか。…いいえ、たべませんでした。", good: "もう たべましたか。…いいえ、まだです。", why: "ませんでした means you didn't do it at that time." }
    ]
  },

  // ───────────── Lesson 8 ─────────────
  "L8-1": {
    meaning: "い-adjectives: is and is not",
    formula: ["N は ～いです", "N は ～くないです"],
    points: [
      "An adjective is a word that describes a noun.",
      "い-adjectives end in い and go straight before です.",
      "いい is the one exception."
    ],
    tables: [
      {
        title: "Negative: change the final い to くないです",
        headers: ["Word", "Meaning", "Positive", "Negative"],
        rows: [
          ["たかい", "Expensive", "たかいです。", "たかくないです。"],
          ["さむい", "Cold", "さむいです。", "さむくないです。"],
          ["おもしろい", "Interesting", "おもしろいです。", "おもしろくないです。"],
          ["いい", "Good", "いいです。", "よくないです。"]
        ]
      }
    ],
    mistakes: [
      { bad: "この じしょは いくないです。", good: "この じしょは よくないです。", why: "The negative of いい is よくないです." },
      { bad: "この カメラは たかいじゃ ありません。", good: "この カメラは たかくないです。", why: "い-adjectives never use じゃ ありません." }
    ]
  },
  "L8-2": {
    meaning: "な-adjectives: is and is not",
    formula: ["N は な-adj です", "N は な-adj じゃ ありません"],
    points: [
      "な-adjectives behave like nouns.",
      "Never use くない with them."
    ],
    tables: [
      {
        title: "Same endings as nouns",
        headers: ["Word", "Meaning", "Positive", "Negative"],
        rows: [
          ["しずか", "Quiet", "しずかです。", "しずかじゃ ありません。"],
          ["にぎやか", "Lively", "にぎやかです。", "にぎやかじゃ ありません。"],
          ["しんせつ", "Kind", "しんせつです。", "しんせつじゃ ありません。"],
          ["きれい", "Beautiful, clean", "きれいです。", "きれいじゃ ありません。"],
          ["ゆうめい", "Famous", "ゆうめいです。", "ゆうめいじゃ ありません。"]
        ]
      }
    ],
    mistakes: [
      { bad: "この へやは きれいくないです。", good: "この へやは きれいじゃ ありません。", why: "きれい is a な-adjective, even though it ends in い." }
    ],
    tip: "きれい and ゆうめい end in い but are な-adjectives."
  },
  "L8-3": {
    title: "Adjective + N",
    meaning: "An adjective before a noun",
    formula: ["い-adj N", "な-adj な N"],
    points: [
      "To describe a noun, put the adjective in front of it.",
      "きれい and ゆうめい take な too."
    ],
    tables: [
      {
        headers: ["Adjective type", "Before a noun", "Example", "English"],
        rows: [
          ["い", "Add nothing", "たかい やま", "a high mountain"],
          ["な", "Add na", "しずかな まち", "a quiet town"],
          ["な", "Add na", "ゆうめいな やま", "a famous mountain"]
        ]
      }
    ],
    mistakes: [
      { bad: "ならは しずか まちです。", good: "ならは しずかな まちです。", why: "な-adjectives need な before a noun." },
      { bad: "ふじさんは たかいな やまです。", good: "ふじさんは たかい やまです。", why: "い-adjectives never take な." }
    ]
  },
  "L8-4": {
    meaning: "Very, not very",
    formula: ["とても + adjective", "あまり + negative adjective"],
    points: [
      "Both come right before the adjective.",
      "あまり must go with a negative."
    ],
    tables: [
      {
        title: "とても vs あまり",
        headers: ["Word", "Meaning", "Goes with", "Example", "English"],
        rows: [
          ["とても", "Very", "Positive", "ペキンは とても さむいです。", "Beijing is very cold."],
          ["あまり", "Not very", "Negative", "この えいがは あまり おもしろくないです。", "This movie isn't very interesting."]
        ]
      }
    ],
    mistakes: [
      { bad: "この えいがは あまり おもしろいです。", good: "この えいがは あまり おもしろくないです。", why: "あまり needs a negative." }
    ]
  },
  "L8-5": {
    meaning: "How is N? What kind of N2 is N1?",
    formula: ["N は どうですか", "N1 は どんな N2 ですか"],
    points: [
      "Answer どう with an adjective.",
      "Answer どんな with an adjective plus a noun.",
      "どんな must always be followed by a noun."
    ],
    tables: [
      {
        title: "どう vs どんな",
        headers: ["Word", "Asks for", "Question", "Answer", "English"],
        rows: [
          ["どう", "An impression", "にほんの せいかつは どうですか。", "たのしいです。", "How is life in Japan? It's fun."],
          ["どんな", "A description", "ならは どんな まちですか。", "ふるい まちです。", "What kind of town is Nara? An old town."]
        ]
      }
    ],
    mistakes: [
      { bad: "ならは どんなですか。", good: "ならは どんな まちですか。", why: "どんな must come before a noun." }
    ]
  },
  "L8-6": {
    meaning: "S1, but S2",
    formula: ["S1 が、S2"],
    points: [
      "が after a full sentence means but.",
      "It links two contrasting ideas.",
      "Put a comma after が.",
      "This is a different が from the one after a noun."
    ]
  },
  "L8-7": {
    meaning: "Which one? (of three or more)",
    formula: ["N は どれですか"],
    points: [
      "Use どれ when choosing among three or more things.",
      "Like これ, it stands alone. No noun follows it.",
      "Answer by pointing it out: あの あおい かさです."
    ],
    tables: [
      {
        title: "The whole word family",
        headers: ["Used for", "This", "That", "Over there", "Which"],
        rows: [
          ["Things, standing alone", "これ", "それ", "あれ", "どれ"],
          ["Before a noun", "この", "その", "あの", "どの"],
          ["Places", "ここ", "そこ", "あそこ", "どこ"],
          ["Polite places", "こちら", "そちら", "あちら", "どちら"]
        ]
      }
    ]
  },

  // ───────────── Lesson 9 ─────────────
  "L9-1": {
    meaning: "Have N, understand N",
    formula: ["Person は N が あります", "Person は N が わかります"],
    points: [
      "Here あります means have.",
      "The thing takes が, not を."
    ],
    tables: [
      {
        title: "Negatives",
        headers: ["Verb", "Negative", "Example", "English"],
        rows: [
          ["あります", "ありません", "わたしは じかんが ありません。", "I don't have time."],
          ["わかります", "わかりません", "わたしは フランスごが わかりません。", "I don't understand French."]
        ]
      }
    ],
    mistakes: [
      { bad: "わたしは にほんごを わかります。", good: "わたしは にほんごが わかります。", why: "わかります always takes が." }
    ]
  },
  "L9-2": {
    meaning: "Like, dislike, good at, bad at",
    formula: ["Person は N が すきです / きらいです", "Person は N が じょうずです / へたです"],
    points: [
      "These four are な-adjectives, not verbs.",
      "The thing liked, or the skill, takes が.",
      "きらい sounds strong. Soften it: あまり すきじゃ ありません.",
      "Don't call yourself じょうず. It sounds boastful."
    ],
    tables: [
      {
        title: "See these words, think が",
        headers: ["Word", "Meaning", "Example", "English"],
        rows: [
          ["あります", "Have", "わたしは じかんが あります。", "I have time."],
          ["わかります", "Understand", "わたしは にほんごが わかります。", "I understand Japanese."],
          ["すき", "Like", "わたしは おんがくが すきです。", "I like music."],
          ["きらい", "Dislike", "マリアさんは さかなが きらいです。", "Maria dislikes fish."],
          ["じょうず", "Good at", "マリアさんは りょうりが じょうずです。", "Maria is good at cooking."],
          ["へた", "Bad at", "わたしは ダンスが へたです。", "I'm bad at dancing."]
        ]
      }
    ],
    mistakes: [
      { bad: "わたしは おんがくを すきです。", good: "わたしは おんがくが すきです。", why: "すき takes が, not を." },
      { bad: "わたしは やきゅうが すきくないです。", good: "わたしは やきゅうが すきじゃ ありません。", why: "すき is a な-adjective, so use じゃ ありません." }
    ],
    tip: "The big Lesson 9 pattern: topic は, thing が, then the word."
  },
  "L9-3": {
    title: "どんな N (naming an item)",
    meaning: "What kind of N? Name one.",
    formula: ["どんな N が すきですか", "N が すきです"],
    points: [
      "どんな must come before a noun.",
      "Here it asks for a specific item from a category.",
      "Answer with the item itself, not はい or いいえ."
    ],
    tables: [
      {
        title: "Two kinds of answer",
        headers: ["Lesson", "Answer gives", "Question", "Answer", "English"],
        rows: [
          ["8", "A description", "ならは どんな まちですか。", "ふるい まちです。", "What kind of town is Nara? An old town."],
          ["9", "A specific item", "どんな スポーツが すきですか。", "サッカーが すきです。", "What kind of sport do you like? I like soccer."],
          ["9", "A specific item", "どんな おんがくが すきですか。", "ジャズが すきです。", "What kind of music do you like? I like jazz."]
        ]
      }
    ]
  },
  "L9-4": {
    meaning: "How well or how much",
    formula: ["N が + degree word + わかります", "N が + degree word + あります"],
    points: [
      "Degree words tell how much or how well.",
      "あまり and ぜんぜん need a negative verb.",
      "よく can also mean often."
    ],
    tables: [
      {
        title: "With わかります, from most to least",
        headers: ["Word", "Meaning", "Example", "English"],
        rows: [
          ["よく", "Well", "にほんごが よく わかります。", "I understand Japanese well."],
          ["だいたい", "Mostly", "にほんごが だいたい わかります。", "I mostly understand Japanese."],
          ["すこし", "A little", "にほんごが すこし わかります。", "I understand a little Japanese."],
          ["あまり", "Not very well", "にほんごが あまり わかりません。", "I don't understand Japanese very well."],
          ["ぜんぜん", "Not at all", "ドイツごが ぜんぜん わかりません。", "I don't understand German at all."]
        ]
      },
      {
        title: "With あります, from most to least",
        headers: ["Word", "Meaning", "Example", "English"],
        rows: [
          ["たくさん", "A lot", "じかんが たくさん あります。", "I have a lot of time."],
          ["すこし", "A little", "じかんが すこし あります。", "I have a little time."],
          ["あまり", "Not much", "じかんが あまり ありません。", "I don't have much time."],
          ["ぜんぜん", "None at all", "じかんが ぜんぜん ありません。", "I have no time at all."]
        ]
      }
    ],
    mistakes: [
      { bad: "にほんごが ぜんぜん わかります。", good: "にほんごが ぜんぜん わかりません。", why: "At this level, ぜんぜん always goes with a negative." }
    ]
  },
  "L9-5": {
    meaning: "Because S1, S2. Why?",
    formula: ["S1 から、S2", "どうして S か", "S から"],
    points: [
      "から after a full sentence means because.",
      "The reason comes first, then the result.",
      "When answering どうして, you need not repeat the result."
    ],
    tables: [
      {
        title: "What goes before から",
        headers: ["Reason ends with", "Example", "English"],
        rows: [
          ["A noun", "こどもの たんじょうびですから。", "Because it's my child's birthday."],
          ["An adjective with na", "おんがくが すきですから。", "Because I like music."],
          ["An adjective ending in i", "おもしろいですから。", "Because it's interesting."],
          ["A verb", "じかんが ありませんから。", "Because I don't have time."]
        ]
      },
      {
        title: "どうして question, から answer",
        headers: ["Question", "Answer", "English"],
        rows: [
          ["どうして にほんごを べんきょうしますか。", "にほんが すきですから。", "Why do you study Japanese? Because I like Japan."],
          ["どうして えいがを みませんか。", "じかんが ありませんから。", "Why don't you watch the movie? Because I don't have time."],
          ["どうして にほんごが すきですか。", "おもしろいですから。", "Why do you like Japanese? Because it's interesting."]
        ]
      }
    ],
    mistakes: [
      { bad: "おんがくが すきから、まいにち ききます。", good: "おんがくが すきですから、まいにち ききます。", why: "Keep です after nouns and な-adjectives." }
    ]
  },

  // ───────────── Lesson 10 ─────────────
  "L10-1": {
    meaning: "There is N",
    formula: ["N が あります", "N が います"],
    points: [
      "The thing that exists takes が.",
      "Plants count as things, so a tree takes あります."
    ],
    tables: [
      {
        title: "あります vs います",
        headers: ["Verb", "Negative", "Used for", "Example", "English"],
        rows: [
          ["あります", "ありません", "Objects, buildings, plants", "つくえが あります。", "There is a desk."],
          ["います", "いません", "People and animals", "いぬが います。", "There is a dog."]
        ]
      }
    ],
    mistakes: [
      { bad: "いぬが あります。", good: "いぬが います。", why: "Dogs are alive, so use います." },
      { bad: "つくえが います。", good: "つくえが あります。", why: "A desk is a thing, so use あります." }
    ]
  },
  "L10-2": {
    title: "Place に N が あります / います",
    meaning: "There is N in a place",
    formula: ["Place に N が あります", "Place に N が います"],
    points: [
      "に marks the location. が marks what exists.",
      "Think: at this place, there is N.",
      "Ask with なにが for things and だれが for people."
    ],
    tables: [
      {
        title: "で vs に",
        headers: ["Particle", "Marks", "Example", "English"],
        rows: [
          ["で", "Where an action happens", "レストランで ごはんを たべます。", "I eat at the restaurant."],
          ["に", "Where something exists", "レストランに たなかさんが います。", "Tanaka is at the restaurant."]
        ]
      },
      {
        title: "Asking what is there",
        headers: ["Question", "Answer", "English"],
        rows: [
          ["へやに なにが ありますか。", "テーブルが あります。", "What is in the room? There is a table."],
          ["へやに だれが いますか。", "たなかさんが います。", "Who is in the room? Tanaka is."]
        ]
      }
    ],
    mistakes: [
      { bad: "へやで テーブルが あります。", good: "へやに テーブルが あります。", why: "Existing takes に. で is for actions." },
      { bad: "つくえの うえに ねこが あります。", good: "つくえの うえに ねこが います。", why: "Cats are alive, so use います." }
    ]
  },
  "L10-3": {
    title: "N は Place に あります / います",
    meaning: "N is in a place",
    formula: ["N は Place に あります", "N は Place に います", "N は どこに ありますか / いますか"],
    points: [
      "Use this when the thing or person is already the topic.",
      "Same reality as Place に N が, but a different focus.",
      "You can shorten it to N は Place です, as in Lesson 3."
    ],
    tables: [
      {
        title: "は vs が",
        headers: ["Particle", "Focus", "Sentence", "English"],
        rows: [
          ["が", "What is in the place", "へやに ねこが います。", "There is a cat in the room."],
          ["は", "Where the topic is", "ねこは へやに います。", "The cat is in the room."]
        ]
      },
      {
        title: "Asking where",
        headers: ["Question", "Answer", "English"],
        rows: [
          ["ほんは どこに ありますか。", "つくえの うえに あります。", "Where is the book? It's on the desk."],
          ["たなかさんは どこに いますか。", "じむしょに います。", "Where is Tanaka? In the office."]
        ]
      },
      {
        title: "The four patterns to memorise first",
        headers: ["Meaning", "Example", "English"],
        rows: [
          ["A thing exists", "ほんが あります。", "There is a book."],
          ["A person or animal exists", "ねこが います。", "There is a cat."],
          ["Something exists at a place", "へやに テーブルが あります。", "There is a table in the room."],
          ["The topic is at a place", "たなかさんは じむしょに います。", "Tanaka is in the office."]
        ]
      }
    ],
    mistakes: [
      { bad: "たなかさんは じむしょに あります。", good: "たなかさんは じむしょに います。", why: "People take います." }
    ]
  },
  "L10-4": {
    meaning: "On, under, in front of, behind, inside N1",
    formula: ["N1 の Position に N2 が あります", "N2 は N1 の Position に あります", "A と B の あいだに N が あります"],
    points: [
      "Position words are nouns, so link them with の.",
      "The reference noun comes first: table, の, then under.",
      "うえ covers on and above. Context decides the English.",
      "となり usually means right next to, for the same kind of thing.",
      "よこ is a wider word for beside. You can leave it for later."
    ],
    tables: [
      {
        title: "Position words, in pairs",
        headers: ["Word", "Meaning", "Example", "English"],
        rows: [
          ["うえ", "On, above", "テーブルの うえに ほんが あります。", "There is a book on the table."],
          ["した", "Under, below", "いすの したに ねこが います。", "There is a cat under the chair."],
          ["まえ", "In front of", "えきの まえに きっさてんが あります。", "There is a café in front of the station."],
          ["うしろ", "Behind", "いえの うしろに きが あります。", "There is a tree behind the house."],
          ["みぎ", "Right", "ぎんこうの みぎに コンビニが あります。", "There is a convenience store to the right of the bank."],
          ["ひだり", "Left", "ぎんこうの ひだりに ほんやが あります。", "There is a bookstore to the left of the bank."],
          ["なか", "Inside", "はこの なかに でんちが あります。", "There is a battery inside the box."],
          ["そと", "Outside", "いえの そとに いぬが います。", "There is a dog outside the house."],
          ["となり", "Next to", "ぎんこうの となりに ゆうびんきょくが あります。", "There is a post office next to the bank."],
          ["ちかく", "Near", "えきの ちかくに コンビニが あります。", "There is a convenience store near the station."],
          ["あいだ", "Between", "ぎんこうと ほんやの あいだに きっさてんが あります。", "There is a café between the bank and the bookstore."]
        ]
      },
      {
        title: "Picture a room and build a map",
        headers: ["Japanese", "English"],
        rows: [
          ["つくえの うえに ほんが あります。", "There is a book on the desk."],
          ["つくえの したに ねこが います。", "There is a cat under the desk."],
          ["つくえの となりに いすが あります。", "There is a chair next to the desk."]
        ]
      }
    ],
    mistakes: [
      { bad: "うえの つくえに ほんが あります。", good: "つくえの うえに ほんが あります。", why: "The reference noun comes first, then の and the position." },
      { bad: "ぎんこうの あいだに きっさてんが あります。", good: "ぎんこうと ほんやの あいだに きっさてんが あります。", why: "あいだ needs both items, joined with と." }
    ],
    tip: "Learn in pairs: うえ and した, まえ and うしろ, みぎ and ひだり, なか and そと."
  },
  "L10-5": {
    meaning: "N1, N2 and so on",
    formula: ["N1 や N2", "N1 や N2 など"],
    points: [
      "や gives examples, so there may be other things too.",
      "など means etc. It goes after the last item.",
      "Think: A や B など means A, B, etc."
    ],
    tables: [
      {
        title: "と vs や",
        headers: ["Word", "List is", "Example", "English"],
        rows: [
          ["と", "Complete", "はこの なかに ほんと ペンが あります。", "There are a book and a pen in the box."],
          ["や", "Only examples", "はこの なかに ほんや ペンが あります。", "There are things like books and pens in the box."],
          ["や … など", "Only examples", "つくえの うえに ほんや じしょなどが あります。", "There are books, dictionaries and so on on the desk."]
        ]
      }
    ]
  }
});

window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  1: {
    can: ["Say your name, job and nationality", "Introduce another person", "Ask who someone is and how old they are"],
    first: ["せんせい", "がくせい", "かいしゃいん", "いしゃ", "だいがく", "びょういん", "だれ", "どなた", "～じん", "～さい"],
    tip: "Master N1 は N2 です first, then swap in job and country words."
  },
  2: {
    can: ["Name the things around you", "Ask what something is", "Say who owns something"],
    first: ["これ", "それ", "あれ", "この～", "その～", "あの～", "ほん", "じしょ", "かばん", "かさ", "なん", "そう"],
    tip: "Point at real objects and make sentences with なん and だれ."
  },
  3: {
    can: ["Ask where a place is", "Say which floor something is on", "Ask a price and buy something"],
    first: ["ここ", "そこ", "あそこ", "どこ", "こちら", "どちら", "いくら", "ーえん", "ーかい（ーがい）", "なんがい", "トイレ（おてあらい）", "じむしょ"],
    tip: "Learn places as a family with things: ここ goes with これ."
  },
  4: {
    can: ["Tell the time", "Talk about your daily routine", "Say from when until when"],
    first: ["おきます", "ねます", "はたらきます", "やすみます", "べんきょうします", "いま", "～じ", "～ふん（～ぷん）", "はん", "なんじ", "～から", "～まで"],
    tip: "Say your own day out loud, from getting up to going to bed."
  },
  5: {
    can: ["Say where you go and how you get there", "Say who you go with", "Ask when and give dates"],
    first: ["いきます", "きます", "かえります", "えき", "でんしゃ", "ともだち", "ひとりで", "あるいて", "いつ", "～がつ", "～にち", "たんじょうび"],
    tip: "Build one long sentence: when, with whom, by what, to where, verb."
  },
  6: {
    can: ["Say what you eat, drink, read and watch", "Say where you do things", "Invite someone and make suggestions"],
    first: ["たべます", "のみます", "みます", "ききます", "よみます", "かきます", "かいます", "とります", "します", "あいます", "なに", "いっしょに"],
    tip: "Learn each verb with its noun, like ほんを よみます, then add で."
  },
  7: {
    can: ["Say what you use to do something", "Ask how to say a word", "Talk about giving, receiving, lending and borrowing", "Say you have already done something"],
    first: ["あげます", "もらいます", "かします", "かります", "おしえます", "ならいます", "おくります", "はし", "プレゼント", "おかね", "もう", "まだ"],
    tip: "Learn the verbs in pairs, because one event has two points of view."
  },
  8: {
    can: ["Describe people, places and things", "Say what something is not like", "Ask how something is and what it is like"],
    first: ["おおきい", "ちいさい", "あたらしい", "ふるい", "いい（よい）", "たかい", "やすい", "きれい", "しずか", "ゆうめい", "とても", "あまり"],
    tip: "Sort every new adjective into い or な before you memorise it."
  },
  9: {
    can: ["Say what you like, dislike, and are good or bad at", "Say how well you understand something", "Give a reason with because"],
    first: ["すき", "きらい", "じょうず", "へた", "わかります", "あります", "よく", "だいたい", "たくさん", "すこし", "ぜんぜん", "どうして"],
    tip: "When you see あります, わかります, すき, きらい, じょうず or へた, think が."
  },
  10: {
    can: ["Say what is in a place", "Say where something or someone is", "Describe positions like on, under and next to", "Give examples with や and など"],
    first: ["あります", "います", "うえ", "した", "まえ", "うしろ", "みぎ", "ひだり", "なか", "そと", "となり", "ちかく", "あいだ", "はこ", "たな"],
    tip: "Build a map in Japanese: start with Place に N が あります / います and the position words, then add や and など."
  }
});
