// Study layer for Minna no Nihongo Lessons 11–25: structured grammar cards and lesson guides.
// Built from data/grammar_b.js and the learner's own notes. Overrides `title`/`meaning` where set.
// `examples` here replace the originals position by position.
window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {

  // ───────────── Lesson 11 ─────────────
  "L11-1": {
    title: "General counter: ひとつ to とお",
    meaning: "One to ten things, and how many?",
    formula: ["N を + quantity + V", "N を + いくつ + V か"],
    points: [
      "A counter is a word you add to count a certain kind of thing.",
      "Use ひとつ to とお for everyday objects with no special counter.",
      "The quantity comes after the particle, right before the verb.",
      "ぜんぶで means altogether. Use it for totals."
    ],
    tables: [
      {
        title: "ひとつ to とお: the readings are irregular, so learn them by heart",
        headers: ["Number", "Japanese", "Romaji"],
        rows: [
          ["1", "ひとつ", "hitotsu"],
          ["2", "ふたつ", "futatsu"],
          ["3", "みっつ", "mittsu"],
          ["4", "よっつ", "yottsu"],
          ["5", "いつつ", "itsutsu"],
          ["6", "むっつ", "muttsu"],
          ["7", "ななつ", "nanatsu"],
          ["8", "やっつ", "yattsu"],
          ["9", "ここのつ", "kokonotsu"],
          ["10", "とお", "tō"],
          ["How many?", "いくつ", "ikutsu"]
        ]
      },
      {
        title: "Word order: think apples + を + three + bought",
        headers: ["Noun + particle", "Quantity", "Verb", "Meaning"],
        rows: [
          ["りんごを", "みっつ", "かいました", "I bought three apples."],
          ["きってを", "ごまい", "かいました", "I bought five stamps."],
          ["りんごを", "よっつ", "たべました", "I ate four apples."],
          ["ビールを", "にほん", "のみました", "I drank two bottles of beer."]
        ]
      },
      {
        title: "Asking how many, and giving a total",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["りんごを いくつ かいましたか。", "How many apples did you buy?"],
          ["よっつ かいました。", "I bought four."],
          ["りんごが みっつ、みかんが よっつ あります。", "There are three apples and four mandarins."],
          ["ぜんぶで ななつ あります。", "There are seven altogether."]
        ]
      }
    ],
    mistakes: [
      { bad: "みっつの りんごを かいました。", good: "りんごを みっつ かいました。", why: "Not the basic pattern. The quantity goes after を." },
      { bad: "りんごを みっつを かいました。", good: "りんごを みっつ かいました。", why: "The quantity takes no particle." },
      { bad: "りんごを さんつ かいました。", good: "りんごを みっつ かいました。", why: "Three things is みっつ. さんつ does not exist." }
    ],
    tip: "Only とお has no つ. It is also the last one: the set stops at ten."
  },
  "L11-2": {
    meaning: "Counting people",
    formula: ["N が + number + います", "N が + なんにん + いますか"],
    points: [
      "Count people with ～にん, but one and two are special.",
      "With people, います can mean there are or I have.",
      "Use the short family words for your own family.",
      "Use the polite family words for someone else's family."
    ],
    tables: [
      {
        title: "Counting people",
        headers: ["People", "Japanese", "Romaji"],
        rows: [
          ["1", "ひとり", "hitori"],
          ["2", "ふたり", "futari"],
          ["3", "さんにん", "sannin"],
          ["4", "よにん", "yonin"],
          ["5", "ごにん", "gonin"],
          ["6", "ろくにん", "rokunin"],
          ["7", "しちにん", "shichinin"],
          ["8", "はちにん", "hachinin"],
          ["9", "きゅうにん", "kyūnin"],
          ["10", "じゅうにん", "jūnin"],
          ["How many?", "なんにん", "nannin"]
        ]
      },
      {
        title: "In sentences",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["がくせいが さんにん います。", "There are three students."],
          ["こどもが ふたり います。", "I have two children. Or: there are two children."],
          ["きょうだいが なんにん いますか。", "How many siblings do you have?"],
          ["さんにん います。", "I have three."]
        ]
      },
      {
        title: "Family words: your family vs someone else's",
        headers: ["Person", "Your own family", "Someone else's family"],
        rows: [
          ["Older brother", "あに", "おにいさん"],
          ["Older sister", "あね", "おねえさん"],
          ["Younger brother", "おとうと", "おとうとさん"],
          ["Younger sister", "いもうと", "いもうとさん"]
        ]
      }
    ],
    mistakes: [
      { bad: "こどもが ににん います。", good: "こどもが ふたり います。", why: "Two people is ふたり, never ににん." },
      { bad: "がくせいが よんにん います。", good: "がくせいが よにん います。", why: "Four people is よにん, not よんにん." },
      { bad: "わたしの おにいさんは がくせいです。", good: "わたしの あには がくせいです。", why: "Your own brother is あに when talking to outsiders." }
    ],
    tip: "ひとり and ふたり end in り. Everyone after that ends in にん."
  },
  "L11-3": {
    meaning: "Counters for machines, flat things and times",
    formula: ["Number + counter", "なん + counter (how many?)"],
    points: [
      "The counter depends on the kind of thing you count.",
      "Ask how many with なん + counter.",
      "The quantity goes right before the verb, just like みっつ.",
      "～かい changes sound at 1, 6, 8 and 10."
    ],
    tables: [
      {
        title: "Which counter?",
        headers: ["Counter", "Used for", "How many?", "Example", "Meaning"],
        rows: [
          ["～だい", "Machines, cars, vehicles", "なんだい", "くるまが にだい あります。", "There are two cars."],
          ["～まい", "Thin, flat things: paper, stamps, shirts", "なんまい", "きってを ごまい かいました。", "I bought five stamps."],
          ["～かい", "Number of times", "なんかい", "えいがを さんかい みました。", "I watched the movie three times."]
        ]
      },
      {
        title: "～かい: watch the sound changes",
        headers: ["Times", "Japanese", "Romaji"],
        rows: [
          ["1", "いっかい", "ikkai"],
          ["2", "にかい", "nikai"],
          ["3", "さんかい", "sankai"],
          ["4", "よんかい", "yonkai"],
          ["5", "ごかい", "gokai"],
          ["6", "ろっかい", "rokkai"],
          ["7", "ななかい", "nanakai"],
          ["8", "はっかい", "hakkai"],
          ["9", "きゅうかい", "kyūkai"],
          ["10", "じゅっかい", "jukkai"],
          ["How many?", "なんかい", "nankai"]
        ]
      }
    ],
    mistakes: [
      { bad: "くるまが にまい あります。", good: "くるまが にだい あります。", why: "Cars are machines, so use ～だい." },
      { bad: "えいがを いちかい みました。", good: "えいがを いっかい みました。", why: "One time is いっかい." }
    ]
  },
  "L11-4": {
    title: "How often: period に ～かい",
    meaning: "Times per day, week, month or year",
    formula: ["Period に + number of times + V", "Period に + なんかい + V か"],
    points: [
      "に here means per.",
      "The period comes first, then the number of times."
    ],
    tables: [
      {
        title: "Period に + number of times + action",
        headers: ["Period に", "Times", "Action", "Meaning"],
        rows: [
          ["いちにちに", "さんかい", "くすりを のみます", "I take medicine three times a day."],
          ["いっしゅうかんに", "さんかい", "テニスを します", "I play tennis three times a week."],
          ["いっかげつに", "にかい", "えいがを みます", "I watch a movie twice a month."],
          ["いちねんに", "いっかい", "くにへ かえります", "I return to my country once a year."]
        ]
      },
      {
        title: "How long vs how often",
        headers: ["Question", "Japanese", "Meaning"],
        rows: [
          ["How long?", "さんじかん べんきょうします。", "I study for three hours."],
          ["How often?", "いっしゅうかんに さんかい べんきょうします。", "I study three times a week."]
        ]
      }
    ],
    mistakes: [
      { bad: "いちしゅうかんに さんかい テニスを します。", good: "いっしゅうかんに さんかい テニスを します。", why: "One week is いっしゅうかん." }
    ],
    tip: "Memorise this one: いっしゅうかんに さんかい にほんごを べんきょうします。"
  },
  "L11-5": {
    title: "How long: duration, どのくらい, かかります",
    meaning: "For how long, about how long, it takes",
    formula: ["Duration + V", "どのくらい + V か", "Time or money + かかります"],
    points: [
      "A duration is a length of time.",
      "A duration goes before the verb, with no に.",
      "Ask how long with どのくらい.",
      "Put ぐらい after a quantity to mean about.",
      "かかります is for time or money. Context tells you which."
    ],
    tables: [
      {
        title: "Length-of-time words",
        headers: ["Word", "Unit", "Example", "In English"],
        rows: [
          ["～ふん", "Minutes", "じゅっぷん", "Ten minutes"],
          ["～じかん", "Hours", "さんじかん", "Three hours"],
          ["～にち", "Days", "いちにち", "One day"],
          ["～しゅうかん", "Weeks", "にしゅうかん", "Two weeks"],
          ["～かげつ", "Months", "ろっかげつ", "Six months"],
          ["～ねん", "Years", "いちねん", "One year"]
        ]
      },
      {
        title: "Specific time vs duration",
        headers: ["Type", "Takes に?", "Japanese", "Meaning"],
        rows: [
          ["Specific time", "Yes", "しちじに おきます。", "I get up at seven."],
          ["Duration", "No", "しちじかん ねます。", "I sleep for seven hours."]
        ]
      },
      {
        title: "どのくらい and ぐらい",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["にほんごを どのくらい べんきょうしましたか。", "How long did you study Japanese?"],
          ["いちねん べんきょうしました。", "I studied for one year."],
          ["にほんに いっしゅうかん います。", "I will be in Japan for one week."],
          ["いっかげつぐらい にほんに います。", "I will be in Japan for about one month."],
          ["にじかんぐらい かかります。", "It takes about two hours."]
        ]
      },
      {
        title: "かかります: time or money",
        headers: ["Type", "Japanese", "Meaning"],
        rows: [
          ["Time", "おおさかから とうきょうまで さんじかん かかります。", "It takes three hours from Osaka to Tokyo."],
          ["Money", "とうきょうまで ごせんえん かかります。", "It costs 5,000 yen to Tokyo."],
          ["Either", "どのくらい かかりますか。", "How long does it take? Or: about how much does it cost?"]
        ]
      }
    ],
    mistakes: [
      { bad: "にほんごを さんじかんに べんきょうしました。", good: "にほんごを さんじかん べんきょうしました。", why: "A duration takes no に." },
      { bad: "にほんに ろくがつ います。", good: "にほんに ろっかげつ います。", why: "ろくがつ is June. Six months is ろっかげつ." },
      { bad: "にじかんごろ かかります。", good: "にじかんぐらい かかります。", why: "ごろ is for clock times. ぐらい is for amounts." }
    ],
    tip: "じ is a clock time. じかん is a length of time."
  },
  "L11-6": {
    meaning: "Only",
    formula: ["N + だけ", "Quantity + だけ + V"],
    points: [
      "Put だけ right after the thing or quantity you limit.",
      "The verb stays positive. You don't need a negative.",
      "It sounds neutral, not negative."
    ],
    tables: [
      {
        title: "だけ in sentences",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["りんごを ひとつだけ たべました。", "I ate only one apple."],
          ["にちようびだけ やすみます。", "I only have Sunday off."],
          ["ひとりだけ います。", "There is only one person."]
        ]
      },
      {
        title: "Lesson 11 at a glance",
        headers: ["Used for", "Example", "Meaning"],
        rows: [
          ["How many of a thing", "りんごを みっつ かいました。", "I bought three apples."],
          ["How many people or animals", "がくせいが さんにん います。", "There are three students."],
          ["Asking how many things", "りんごを いくつ かいましたか。", "How many apples did you buy?"],
          ["Asking how many people", "きょうだいが なんにん いますか。", "How many siblings do you have?"],
          ["For how long", "さんじかん べんきょうしました。", "I studied for three hours."],
          ["Asking how long", "どのくらい べんきょうしましたか。", "How long did you study?"],
          ["About a quantity", "にじかんぐらい かかります。", "It takes about two hours."],
          ["Times per period", "いっしゅうかんに さんかい テニスを します。", "I play tennis three times a week."],
          ["Only", "ひとつだけ たべました。", "I ate only one."],
          ["Takes or costs", "さんじかん かかります。", "It takes three hours."]
        ]
      }
    ]
  },

  // ───────────── Lesson 12 ─────────────
  "L12-1": {
    title: "Past tense of nouns and な-adjectives",
    meaning: "Was and was not",
    formula: ["N / な-adjective + でした", "N / な-adjective + じゃ ありませんでした"],
    points: [
      "な-adjectives behave like nouns at the end of a sentence.",
      "So nouns and な-adjectives share the same four endings.",
      "きれい ends in い, but it is a な-adjective."
    ],
    tables: [
      {
        title: "The four forms",
        headers: ["Form", "Noun", "な-adjective"],
        rows: [
          ["Present", "あめです", "しずかです"],
          ["Present negative", "あめじゃ ありません", "しずかじゃ ありません"],
          ["Past", "あめでした", "しずかでした"],
          ["Past negative", "あめじゃ ありませんでした", "しずかじゃ ありませんでした"]
        ]
      },
      {
        title: "In sentences",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["きのうは やすみじゃ ありませんでした。", "Yesterday was not a day off."],
          ["きのうは しずかでした。", "It was quiet yesterday."],
          ["きのうは しずかじゃ ありませんでした。", "It was not quiet yesterday."],
          ["ホテルは きれいでした。", "The hotel was clean."]
        ]
      }
    ],
    mistakes: [
      { bad: "へやは きれいかったです。", good: "へやは きれいでした。", why: "きれい is a な-adjective, so use でした." },
      { bad: "きのうは あめかったです。", good: "きのうは あめでした。", why: "Nouns never take かった." }
    ]
  },
  "L12-2": {
    title: "Past tense of い-adjectives",
    meaning: "Was and was not",
    formula: ["い-adjective: drop い + かったです", "い-adjective: drop い + くなかったです"],
    points: [
      "い-adjectives never use でした.",
      "For the past negative, make the negative first, then the past.",
      "いい is irregular. It changes from よい."
    ],
    tables: [
      {
        title: "The four forms of たかい",
        headers: ["Form", "Ending", "Example", "Meaning"],
        rows: [
          ["Present", "いです", "たかいです", "is expensive"],
          ["Present negative", "くないです", "たかくないです", "is not expensive"],
          ["Past", "かったです", "たかかったです", "was expensive"],
          ["Past negative", "くなかったです", "たかくなかったです", "was not expensive"]
        ]
      },
      {
        title: "More い-adjectives",
        headers: ["Adjective", "Past", "Past negative", "Meaning"],
        rows: [
          ["おいしい", "おいしかったです", "おいしくなかったです", "delicious"],
          ["あつい", "あつかったです", "あつくなかったです", "hot"],
          ["さむい", "さむかったです", "さむくなかったです", "cold"]
        ]
      },
      {
        title: "いい is irregular: use よ for every form except the present",
        headers: ["Form", "Japanese", "Meaning"],
        rows: [
          ["Present", "いいです", "is good"],
          ["Present negative", "よくないです", "is not good"],
          ["Past", "よかったです", "was good"],
          ["Past negative", "よくなかったです", "was not good"]
        ]
      }
    ],
    mistakes: [
      { bad: "ホテルは たかいでした。", good: "ホテルは たかかったです。", why: "い-adjectives never use でした." },
      { bad: "りょこうは いいかったです。", good: "りょこうは よかったです。", why: "いい changes from よい." }
    ],
    tip: "Memorise one chain: おいしいです, おいしかったです, おいしくなかったです."
  },
  "L12-3": {
    title: "Comparing two things: A は B より",
    meaning: "A is more ~ than B",
    formula: ["A は B より adjective です"],
    points: [
      "より means than.",
      "The thing before より is what you compare against.",
      "The adjective does not change. より does all the work."
    ],
    tables: [
      {
        title: "Piece by piece",
        headers: ["Part", "Meaning"],
        rows: [
          ["とうきょうは", "As for Tokyo"],
          ["おおさかより", "than Osaka"],
          ["おおきいです", "is big"]
        ]
      },
      {
        title: "More examples",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["とうきょうは おおさかより おおきいです。", "Tokyo is bigger than Osaka."],
          ["インドは にほんより あついです。", "India is hotter than Japan."]
        ]
      },
      {
        title: "Adjective pairs to learn together",
        headers: ["Word", "Meaning", "Its pair", "Pair meaning"],
        rows: [
          ["ちかい", "near", "とおい", "far"],
          ["はやい", "fast, early", "おそい", "slow, late"],
          ["おおい", "many", "すくない", "few"],
          ["おもい", "heavy", "かるい", "light"],
          ["あたたかい", "warm", "すずしい", "cool"],
          ["あまい", "sweet", "からい", "spicy"]
        ]
      }
    ],
    mistakes: [
      { bad: "ひこうきは でんしゃから はやいです。", good: "ひこうきは でんしゃより はやいです。", why: "Than is より, not から." }
    ]
  },
  "L12-4": {
    title: "Which of two? どちら, の ほうが, どちらも",
    meaning: "Comparing two choices",
    formula: ["A と B と どちらが adjective ですか", "A の ほうが adjective です", "どちらも adjective です"],
    points: [
      "どちら means which one, for two choices only.",
      "ほう means side, or one of the alternatives.",
      "A の ほうが means A is the more ~ one.",
      "If they are equal, say どちらも, meaning both."
    ],
    tables: [
      {
        title: "Questions and answers",
        headers: ["Question", "Answer", "Meaning"],
        rows: [
          ["にほんと インドと どちらが あついですか。", "インドの ほうが あついです。", "Which is hotter, Japan or India? India is."],
          ["でんしゃと バスと どちらが はやいですか。", "でんしゃの ほうが はやいです。", "Which is faster, the train or the bus? The train is."],
          ["りんごと みかんと どちらが あまいですか。", "みかんの ほうが あまいです。", "Which is sweeter, an apple or a mandarin? The mandarin is."],
          ["コーヒーと おちゃと どちらが すきですか。", "どちらも すきです。", "Which do you like better, coffee or tea? I like both."]
        ]
      }
    ],
    mistakes: [
      { bad: "コーヒーと おちゃと どれが すきですか。", good: "コーヒーと おちゃと どちらが すきですか。", why: "どれ is for three or more. Two choices take どちら." },
      { bad: "コーヒーと おちゃと どちらは すきですか。", good: "コーヒーと おちゃと どちらが すきですか。", why: "Question words take が, not は." }
    ]
  },
  "L12-5": {
    title: "The most: の なかで … いちばん",
    meaning: "The most ~ in a group",
    formula: ["N の なかで + question word + が いちばん adjective ですか", "X が いちばん adjective です"],
    points: [
      "Use this for three or more things, or a whole group.",
      "いちばん means most, or number one.",
      "の なかで means among. You can shorten it to で.",
      "Question words take が, and the answer keeps が."
    ],
    tables: [
      {
        title: "Pick the question word",
        headers: ["Word", "Question", "Answer", "Meaning"],
        rows: [
          ["なに", "スポーツの なかで なにが いちばん すきですか。", "サッカーが いちばん すきです。", "Among sports, what do you like most? I like soccer most."],
          ["どこ", "にほんで どこが いちばん さむいですか。", "ほっかいどうが いちばん さむいです。", "Where is the coldest place in Japan? Hokkaido is."],
          ["だれ", "かぞくの なかで だれが いちばん せが たかいですか。", "あにが いちばん せが たかいです。", "Who is the tallest in your family? My older brother is."],
          ["いつ", "いちねんで いつが いちばん さむいですか。", "いちがつが いちばん さむいです。", "When is it coldest in the year? January is."],
          ["どの きせつ", "はると なつと あきと ふゆの なかで、どの きせつが いちばん すきですか。", "ふゆが いちばん すきです。", "Of the four seasons, which do you like best? I like winter best."]
        ]
      },
      {
        title: "Two things vs three or more",
        headers: ["Choices", "Question", "Answer", "Meaning"],
        rows: [
          ["Two", "すしと てんぷらと どちらが すきですか。", "すしの ほうが すきです。", "Which do you like better, sushi or tempura? I prefer sushi."],
          ["Three or more", "にほんりょうりの なかで なにが いちばん すきですか。", "すしが いちばん すきです。", "Among Japanese foods, what do you like best? I like sushi best."]
        ]
      },
      {
        title: "Lesson 12 at a glance",
        headers: ["Type", "Example", "Meaning"],
        rows: [
          ["Noun", "あめでした", "It was rainy."],
          ["Noun", "あめじゃ ありませんでした", "It was not rainy."],
          ["な", "しずかでした", "It was quiet."],
          ["な", "しずかじゃ ありませんでした", "It was not quiet."],
          ["い", "たかかったです", "It was expensive."],
          ["い", "たかくなかったです", "It was not expensive."],
          ["いい", "よかったです", "It was good."],
          ["いい", "よくなかったです", "It was not good."],
          ["Comparing two", "とうきょうは おおさかより おおきいです。", "Tokyo is bigger than Osaka."],
          ["Which of two?", "りんごと みかんと どちらが あまいですか。", "Which is sweeter, an apple or a mandarin?"],
          ["Answering which", "みかんの ほうが あまいです。", "The mandarin is sweeter."],
          ["Both", "どちらも すきです。", "I like both."],
          ["The most in a group", "スポーツの なかで サッカーが いちばん すきです。", "Among sports, I like soccer best."]
        ]
      }
    ],
    mistakes: [
      { bad: "にほんりょうりの なかで なには いちばん おいしいですか。", good: "にほんりょうりの なかで なにが いちばん おいしいですか。", why: "Question words take が, never は." }
    ]
  },

  // ───────────── Lesson 13 ─────────────
  "L13-1": {
    title: "Wanting a thing: ～が ほしいです",
    meaning: "I want a thing",
    formula: ["N が ほしいです"],
    points: [
      "The thing you want takes が, not を.",
      "ほしい is an い-adjective, so it changes like one.",
      "Use it for your own wishes, or to ask the listener.",
      "Don't use it to describe a third person's wishes.",
      "Don't use it to offer something to a superior."
    ],
    tables: [
      {
        title: "Forms of ほしい",
        headers: ["Form", "Japanese", "Meaning"],
        rows: [
          ["Present", "ほしいです", "I want"],
          ["Present negative", "ほしくないです", "I don't want"],
          ["Past", "ほしかったです", "I wanted"],
          ["Past negative", "ほしくなかったです", "I didn't want"]
        ]
      }
    ],
    mistakes: [
      { bad: "わたしは くるまを ほしいです。", good: "わたしは くるまが ほしいです。", why: "ほしい takes が, not を." },
      { bad: "わたしは くるまが ほしいます。", good: "わたしは くるまが ほしいです。", why: "ほしい is an adjective, not a verb." }
    ]
  },
  "L13-2": {
    title: "Wanting to do: ～たいです",
    meaning: "I want to do something",
    formula: ["V ます-stem + たいです"],
    points: [
      "The ます-stem is the verb with ます removed.",
      "たい changes like an い-adjective.",
      "The object can take を or が.",
      "Use it for your own wishes, or to ask the listener."
    ],
    tables: [
      {
        title: "Making ～たいです",
        headers: ["ます form", "ます-stem", "Want to", "Meaning"],
        rows: [
          ["のみます", "のみ", "のみたいです", "want to drink"],
          ["いきます", "いき", "いきたいです", "want to go"],
          ["たべます", "たべ", "たべたいです", "want to eat"],
          ["します", "し", "したいです", "want to do"],
          ["きます", "き", "きたいです", "want to come"]
        ]
      },
      {
        title: "Forms of たい",
        headers: ["Form", "Japanese", "Meaning"],
        rows: [
          ["Present", "のみたいです", "I want to drink"],
          ["Present negative", "のみたくないです", "I don't want to drink"],
          ["Past", "のみたかったです", "I wanted to drink"],
          ["Past negative", "のみたくなかったです", "I didn't want to drink"]
        ]
      },
      {
        title: "ほしい vs たい",
        headers: ["You want", "Japanese", "Meaning"],
        rows: [
          ["A thing", "くるまが ほしいです。", "I want a car."],
          ["To do something", "くるまを かいたいです。", "I want to buy a car."]
        ]
      }
    ],
    mistakes: [
      { bad: "にほんへ いくたいです。", good: "にほんへ いきたいです。", why: "Use the ます-stem: いき, not いく." },
      { bad: "きのう すしを たべたいでした。", good: "きのう すしを たべたかったです。", why: "たい is like an い-adjective, so no でした." }
    ]
  },
  "L13-3": {
    title: "Going somewhere to do something: ～に いきます",
    meaning: "Go, come or return to do something",
    formula: ["Place へ + V ます-stem + に + いきます", "Place へ + N + に + いきます"],
    points: [
      "に here marks the purpose of going.",
      "The purpose goes right before いきます, きます or かえります.",
      "A する-noun is a noun that makes a verb with します.",
      "With a する-noun, the noun alone is enough."
    ],
    tables: [
      {
        title: "With a verb: use the ます-stem",
        headers: ["ます form", "ます-stem", "Sentence", "Meaning"],
        rows: [
          ["かいます", "かい", "デパートへ くつを かいに いきます。", "I go to the department store to buy shoes."],
          ["たべます", "たべ", "うちへ ひるごはんを たべに かえります。", "I go home to eat lunch."],
          ["あそびます", "あそび", "ともだちが うちへ あそびに きます。", "A friend comes to my house to hang out."]
        ]
      },
      {
        title: "With a する-noun: drop します",
        headers: ["します verb", "Noun", "Sentence", "Meaning"],
        rows: [
          ["かいものします", "かいもの", "デパートへ かいものに いきます。", "I go shopping at the department store."],
          ["さんぽします", "さんぽ", "こうえんへ さんぽに いきます。", "I go to the park for a walk."],
          ["べんきょうします", "べんきょう", "にほんへ べんきょうに きました。", "I came to Japan to study."]
        ]
      }
    ],
    mistakes: [
      { bad: "デパートへ くつを かうに いきます。", good: "デパートへ くつを かいに いきます。", why: "Use the ます-stem: かい, not かう." },
      { bad: "こうべへ かいものを いきます。", good: "こうべへ かいものに いきます。", why: "The purpose takes に, not を." }
    ]
  },
  "L13-4": {
    meaning: "Somewhere and something",
    formula: ["Question word + か = some-", "Question word + も + negative = no-"],
    points: [
      "へ and を are usually dropped after どこか and なにか.",
      "A question with どこか or なにか gets a yes or no answer."
    ],
    tables: [
      {
        title: "か vs も",
        headers: ["Word", "Meaning", "Example", "In English"],
        rows: [
          ["どこか", "somewhere", "どこか いきましたか。", "Did you go anywhere?"],
          ["なにか", "something", "なにか たべませんか。", "Shall we eat something?"],
          ["どこも", "nowhere", "どこも いきませんでした。", "I didn't go anywhere."],
          ["なにも", "nothing", "なにも たべませんでした。", "I didn't eat anything."]
        ]
      },
      {
        title: "Yes-or-no question vs where question",
        headers: ["Question", "Meaning", "Answer"],
        rows: [
          ["どこか いきましたか。", "Did you go anywhere?", "はい、いきました。"],
          ["どこへ いきましたか。", "Where did you go?", "きょうとへ いきました。"]
        ]
      }
    ],
    mistakes: [
      { bad: "のどが かわきましたから、なにも のみたいです。", good: "のどが かわきましたから、なにか のみたいです。", why: "なにも needs a negative verb." }
    ]
  },

  // ───────────── Lesson 14 ─────────────
  "L14-1": {
    title: "Verb groups and the て-form",
    meaning: "How to make the て-form",
    formula: ["V ます → V て"],
    points: [
      "Every verb belongs to Group 1, 2 or 3.",
      "The て-form is a verb form that joins onto other words.",
      "Group 1 changes by the sound before ます.",
      "いきます is the one Group 1 exception."
    ],
    tables: [
      {
        title: "Which group is it?",
        headers: ["Group", "Sound before ます", "Example 1", "Example 2"],
        rows: [
          ["Group 1", "An i sound", "かきます", "のみます"],
          ["Group 2", "An e sound", "たべます", "みせます"],
          ["Group 2", "An i sound: learn these by heart", "みます", "おきます"],
          ["Group 2", "An i sound: learn these by heart", "かります", "います"],
          ["Group 3", "Irregular: learn both", "します", "きます"],
          ["Group 3", "Verbs built from a noun", "べんきょうします", "コピーします"]
        ]
      },
      {
        title: "Group 1: look at the sound before ます",
        headers: ["Before ます", "Becomes", "ます form", "て-form"],
        rows: [
          ["い", "って", "かいます", "かって"],
          ["ち", "って", "まちます", "まって"],
          ["り", "って", "かえります", "かえって"],
          ["み", "んで", "のみます", "のんで"],
          ["び", "んで", "よびます", "よんで"],
          ["に", "んで", "しにます", "しんで"],
          ["き", "いて", "かきます", "かいて"],
          ["ぎ", "いで", "いそぎます", "いそいで"],
          ["し", "して", "はなします", "はなして"]
        ]
      },
      {
        title: "The one exception",
        headers: ["ます form", "て-form", "Meaning"],
        rows: [
          ["いきます", "いって", "go"]
        ]
      },
      {
        title: "Group 2: drop ます, add て",
        headers: ["ます form", "て-form", "Meaning"],
        rows: [
          ["たべます", "たべて", "eat"],
          ["ねます", "ねて", "sleep"],
          ["みせます", "みせて", "show"],
          ["みます", "みて", "see"],
          ["おきます", "おきて", "get up"],
          ["かります", "かりて", "borrow"]
        ]
      },
      {
        title: "Group 3: memorise these",
        headers: ["ます form", "て-form", "Meaning"],
        rows: [
          ["します", "して", "do"],
          ["きます", "きて", "come"],
          ["べんきょうします", "べんきょうして", "study"]
        ]
      }
    ],
    mistakes: [
      { bad: "えきへ いきて ください。", good: "えきへ いって ください。", why: "いきます is the one exception in its row." },
      { bad: "ちょっと まちて ください。", good: "ちょっと まって ください。", why: "ち becomes って." },
      { bad: "これを みって ください。", good: "これを みて ください。", why: "みます is Group 2: drop ます, add て." }
    ],
    tip: "Chant the rows: い ち り って, み び に んで, き いて, ぎ いで, し して.",
    examples: [
      { jp: "ここで バスを まって ください。", ro: "Koko de basu o matte kudasai.", en: "Please wait for the bus here." },
      { jp: "すみませんが、タクシーを よんで ください。", ro: "Sumimasen ga, takushī o yonde kudasai.", en: "Excuse me, please call a taxi." },
      { jp: "ここに なまえを かいて ください。", ro: "Koko ni namae o kaite kudasai.", en: "Please write your name here." }
    ]
  },
  "L14-2": {
    meaning: "Please do something",
    formula: ["V て-form + ください", "すみませんが、V て-form + ください"],
    points: [
      "Use it for polite requests and instructions.",
      "Add すみませんが in front to soften it.",
      "It is still an instruction, so take care with superiors.",
      "おしえます often means tell, for information like an address.",
      "～かた after a ます-stem means how to do it."
    ],
    tables: [
      {
        title: "Everyday requests",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["しんごうを みぎへ まがって ください。", "Please turn right at the traffic light."],
          ["じゅうしょを おしえて ください。", "Please tell me your address."],
          ["いそいで ください。", "Please hurry."]
        ]
      },
      {
        title: "～かた: how to do something",
        headers: ["ます form", "Way of doing it", "Meaning"],
        rows: [
          ["よみます", "よみかた", "how to read"],
          ["つかいます", "つかいかた", "how to use"]
        ]
      }
    ],
    mistakes: [
      { bad: "パスポートを みせます ください。", good: "パスポートを みせて ください。", why: "ください needs the て-form." }
    ]
  },
  "L14-3": {
    meaning: "Is doing something right now",
    formula: ["V て-form + います"],
    points: [
      "It describes an action happening now.",
      "It is often used with いま."
    ],
    tables: [
      {
        title: "Three forms",
        headers: ["Form", "Japanese", "Meaning"],
        rows: [
          ["Statement", "いま ほんを よんで います。", "I am reading a book now."],
          ["Negative", "いま ほんを よんで いません。", "I am not reading a book now."],
          ["Question", "いま ほんを よんで いますか。", "Are you reading a book now?"]
        ]
      }
    ]
  },
  "L14-4": {
    meaning: "Shall I do this for you?",
    formula: ["V ます-stem + ましょうか"],
    points: [
      "Use it to offer help.",
      "Don't confuse it with ～ましょう, which means let's."
    ],
    tables: [
      {
        title: "Replying to an offer",
        headers: ["Reply", "Meaning"],
        rows: [
          ["ええ、おねがいします。", "Yes, please."],
          ["いいえ、けっこうです。", "No, thank you."]
        ]
      },
      {
        title: "ましょうか vs ましょう",
        headers: ["Use", "Japanese", "Meaning"],
        rows: [
          ["Offering help", "タクシーを よびましょうか。", "Shall I call a taxi?"],
          ["Suggesting together", "いっしょに いきましょう。", "Let's go together."]
        ]
      }
    ]
  },
  "L14-5": {
    title: "Reporting what you see: N が V",
    meaning: "Describing a scene or the weather",
    formula: ["N が + V"],
    points: [
      "Use が to report something you have just seen or noticed.",
      "が presents new information.",
      "は would mark a topic: the thing a sentence comments on.",
      "ふります means fall, for rain or snow."
    ],
    tables: [
      {
        title: "Weather with ふります",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["あめが ふります。", "It rains."],
          ["ゆきが ふります。", "It snows."],
          ["あめが ふって います。", "It is raining."],
          ["ゆきが ふって います。", "It is snowing."]
        ]
      }
    ],
    mistakes: [
      { bad: "あ、バスは きました。", good: "あ、バスが きました。", why: "You have just noticed it, so use が." }
    ]
  },

  // ───────────── Lesson 15 ─────────────
  "L15-1": {
    meaning: "May I do this?",
    formula: ["V て-form + も いいです", "V て-form + も いいですか"],
    points: [
      "て-form + も いいです means it is OK to do it.",
      "Add か to ask for permission.",
      "To refuse, be gentle rather than saying a flat no."
    ],
    tables: [
      {
        title: "Replying",
        headers: ["Reply", "Meaning"],
        rows: [
          ["ええ、いいですよ。", "Yes, that's fine."],
          ["ええ、どうぞ。", "Yes, go ahead."],
          ["すみません、ちょっと…。", "Sorry, that's a bit difficult."]
        ]
      }
    ],
    mistakes: [
      { bad: "しゃしんを とりても いいですか。", good: "しゃしんを とっても いいですか。", why: "Use the て-form: とって." }
    ]
  },
  "L15-2": {
    meaning: "You must not do this",
    formula: ["V て-form + は いけません"],
    points: [
      "It states a firm rule.",
      "People in authority use it, so never say it to a superior.",
      "In conversation, すみません、ちょっと… is a softer no."
    ],
    tables: [
      {
        title: "Allowed vs not allowed",
        headers: ["Meaning", "Japanese", "In English"],
        rows: [
          ["Allowed", "すわっても いいです。", "You may sit."],
          ["Not allowed", "すわっては いけません。", "You must not sit."]
        ]
      },
      {
        title: "Saying no to ～ても いいですか",
        headers: ["Style", "Japanese", "Meaning"],
        rows: [
          ["Firm", "いいえ、いけません。", "No, you must not."],
          ["Soft", "すみません、ちょっと…。", "Sorry, that's a bit difficult."]
        ]
      }
    ],
    mistakes: [
      { bad: "ここで たばこを すっても いけません。", good: "ここで たばこを すっては いけません。", why: "も goes with いいです. は goes with いけません." }
    ]
  },
  "L15-3": {
    meaning: "An ongoing state, habit or job",
    formula: ["V て-form + います"],
    points: [
      "This is the same form as Lesson 14, with a new use.",
      "A state is a situation that continues after an action."
    ],
    tables: [
      {
        title: "Three uses",
        headers: ["Use", "Japanese", "Meaning"],
        rows: [
          ["State", "わたしは けっこんして います。", "I am married."],
          ["State", "わたしは おおさかに すんで います。", "I live in Osaka."],
          ["State", "わたしは サントスさんを しって います。", "I know Mr. Santos."],
          ["Habit", "まいあさ ジョギングを して います。", "I jog every morning."],
          ["Job", "この かいしゃは カメラを つくって います。", "This company makes cameras."]
        ]
      },
      {
        title: "Do you know? Yes and no are different",
        headers: ["Question", "Yes", "No"],
        rows: [
          ["しって いますか。", "はい、しって います。", "いいえ、しりません。"]
        ]
      }
    ],
    mistakes: [
      { bad: "サントスさんを しって いません。", good: "サントスさんを しりません。", why: "I don't know is always しりません." },
      { bad: "わたしは おおさかで すんで います。", good: "わたしは おおさかに すんで います。", why: "すんで います takes に for the place." }
    ]
  },
  "L15-4": {
    title: "Particle に: get on, enter, sit, put",
    meaning: "Where you get in or put something",
    formula: ["Place に + のります・はいります・すわります", "Place に + N を + おきます"],
    points: [
      "に marks the thing you get on, enter or sit on.",
      "に also marks where you put or write something."
    ],
    tables: [
      {
        title: "Verbs that take に",
        headers: ["Verb", "Meaning", "Example", "In English"],
        rows: [
          ["のります", "get on", "でんしゃに のります。", "I get on the train."],
          ["はいります", "enter", "きっさてんに はいります。", "I go into the café."],
          ["すわります", "sit", "いすに すわります。", "I sit on the chair."],
          ["おきます", "put", "ここに にもつを おきます。", "I put my bags here."],
          ["かきます", "write", "ここに なまえを かきます。", "I write my name here."]
        ]
      }
    ],
    mistakes: [
      { bad: "えきで でんしゃを のります。", good: "えきで でんしゃに のります。", why: "のります takes に, never を." }
    ]
  },

  // ───────────── Lesson 16 ─────────────
  "L16-1": {
    meaning: "Do this, then this, then this",
    formula: ["V1 て、V2 て、V3"],
    points: [
      "Link actions in the order they happen.",
      "Only the last verb shows past or present.",
      "Only the last verb shows politeness too.",
      "You can chain two or three verbs."
    ],
    tables: [
      {
        title: "The last verb sets the time",
        headers: ["Time", "Japanese", "Meaning"],
        rows: [
          ["Present", "うちへ かえって、ばんごはんを たべます。", "I go home and eat dinner."],
          ["Past", "うちへ かえって、ばんごはんを たべました。", "I went home and ate dinner."]
        ]
      }
    ],
    mistakes: [
      { bad: "うちへ かえりました、ばんごはんを たべました。", good: "うちへ かえって、ばんごはんを たべました。", why: "Use the て-form to link actions." }
    ]
  },
  "L16-2": {
    title: "Joining adjectives and nouns: ～くて and ～で",
    meaning: "Saying … and …",
    formula: ["い-adjective: drop い + くて", "な-adjective / N + で"],
    points: [
      "Only join qualities that point the same way.",
      "For a contrast, use が instead."
    ],
    tables: [
      {
        title: "How each word type joins",
        headers: ["Word type", "Word", "Joined form", "Meaning"],
        rows: [
          ["い", "わかい", "わかくて", "young and"],
          ["い", "ひろい", "ひろくて", "spacious and"],
          ["いい", "いい", "よくて", "good and"],
          ["な", "しずか", "しずかで", "quiet and"],
          ["Noun", "がくせい", "がくせいで", "a student and"]
        ]
      },
      {
        title: "Same direction vs contrast",
        headers: ["Qualities", "Japanese", "Meaning"],
        rows: [
          ["Same direction", "この みせは やすくて、おいしいです。", "This restaurant is cheap and tasty."],
          ["Contrast", "この みせは おいしいですが、たかいです。", "This restaurant is tasty, but expensive."]
        ]
      }
    ],
    mistakes: [
      { bad: "この へやは ひろいで、あかるいです。", good: "この へやは ひろくて、あかるいです。", why: "い-adjectives join with くて." },
      { bad: "ならは しずかくて、きれいな まちです。", good: "ならは しずかで、きれいな まちです。", why: "な-adjectives join with で." }
    ]
  },
  "L16-3": {
    meaning: "After doing this, do that",
    formula: ["V1 て-form + から、V2"],
    points: [
      "V2 happens only after V1 is finished.",
      "The final verb shows past or present.",
      "A clause is a part of a sentence with its own verb.",
      "The subject is who or what does the action.",
      "The subject inside the てから clause takes が, not は."
    ],
    tables: [
      {
        title: "て vs てから",
        headers: ["Stress", "Japanese", "Meaning"],
        rows: [
          ["Simple order", "うちへ かえって、ばんごはんを たべます。", "I go home and eat dinner."],
          ["Only after V1 is done", "うちへ かえってから、ばんごはんを たべます。", "I eat dinner after I get home."]
        ]
      }
    ],
    mistakes: [
      { bad: "しごとは おわってから、およぎに いきます。", good: "しごとが おわってから、およぎに いきます。", why: "The subject inside this clause takes が." }
    ]
  },
  "L16-4": {
    title: "Describing a feature: A は B が adjective",
    meaning: "A has a certain feature",
    formula: ["A は B が adjective です"],
    points: [
      "A is the topic: what you are talking about.",
      "B is the part you describe.",
      "For a person's height, use せが たかい, not おおきい."
    ],
    tables: [
      {
        title: "Word for word vs natural English",
        headers: ["Japanese", "Word for word", "Natural English"],
        rows: [
          ["たかしさんは せが たかいです。", "As for Takashi, height is high.", "Takashi is tall."],
          ["おおさかは たべものが おいしいです。", "As for Osaka, food is tasty.", "The food in Osaka is delicious."],
          ["マリアさんは かみが ながいです。", "As for Maria, hair is long.", "Maria has long hair."],
          ["ミラーさんは あたまが いいです。", "As for Mr. Miller, head is good.", "Mr. Miller is smart."]
        ]
      }
    ],
    mistakes: [
      { bad: "たかしさんは せを たかいです。", good: "たかしさんは せが たかいです。", why: "The part you describe takes が." }
    ]
  },
  "L16-5": {
    meaning: "How? By what method or route?",
    formula: ["どうやって + V か"],
    points: [
      "It asks about the method or the route.",
      "Answer with the steps in the て-form."
    ],
    tables: [
      {
        title: "Don't mix these up",
        headers: ["Word", "Asks about", "Example", "In English"],
        rows: [
          ["どうやって", "Method or route", "だいがくまで どうやって いきますか。", "How do you get to the university?"],
          ["どうして", "Reason", "どうして いきませんか。", "Why aren't you going?"],
          ["どのくらい", "How long or how much", "だいがくまで どのくらい かかりますか。", "How long does it take to the university?"]
        ]
      }
    ]
  },

  // ───────────── Lesson 17 ─────────────
  "L17-1": {
    meaning: "The plain negative of a verb",
    formula: ["V ます → V ない"],
    points: [
      "A plain form is the casual version of a verb.",
      "The ない-form means does not.",
      "It is the base of all the main Lesson 17 patterns.",
      "あります is special: its ない-form is just ない."
    ],
    tables: [
      {
        title: "Group 1: change the sound before ます to its あ-sound, but い becomes わ",
        headers: ["Before ます", "Becomes", "ます form", "ない-form"],
        rows: [
          ["い", "わ", "かいます", "かわない"],
          ["い", "わ", "すいます", "すわない"],
          ["き", "か", "かきます", "かかない"],
          ["き", "か", "いきます", "いかない"],
          ["ぎ", "が", "いそぎます", "いそがない"],
          ["し", "さ", "はなします", "はなさない"],
          ["ち", "た", "まちます", "またない"],
          ["に", "な", "しにます", "しなない"],
          ["び", "ば", "よびます", "よばない"],
          ["み", "ま", "のみます", "のまない"],
          ["り", "ら", "かえります", "かえらない"]
        ]
      },
      {
        title: "Group 2: drop ます, add ない",
        headers: ["ます form", "ない-form", "Meaning"],
        rows: [
          ["たべます", "たべない", "eat"],
          ["ねます", "ねない", "sleep"],
          ["みせます", "みせない", "show"],
          ["みます", "みない", "see"],
          ["おきます", "おきない", "get up"]
        ]
      },
      {
        title: "Group 3: memorise these",
        headers: ["ます form", "ない-form", "Meaning"],
        rows: [
          ["します", "しない", "do"],
          ["きます", "こない", "come"],
          ["べんきょうします", "べんきょうしない", "study"]
        ]
      },
      {
        title: "One special verb",
        headers: ["ます form", "ない-form", "Meaning"],
        rows: [
          ["あります", "ない", "there is"]
        ]
      }
    ],
    mistakes: [
      { bad: "ここで たばこを すあないで ください。", good: "ここで たばこを すわないで ください。", why: "い before ます becomes わ, not あ." },
      { bad: "あした きないで ください。", good: "あした こないで ください。", why: "The ない-form of きます is こない." },
      { bad: "テレビを みらないで ください。", good: "テレビを みないで ください。", why: "みます is Group 2: drop ます, add ない." }
    ],
    tip: "Group 1 uses the あ-sounds: か, が, さ, た, な, ば, ま, ら, and わ for い.",
    examples: [
      { jp: "おさけを のまないで ください。", ro: "Osake o nomanaide kudasai.", en: "Please don't drink alcohol." },
      { jp: "ここで たばこを すわないで ください。", ro: "Koko de tabako o suwanaide kudasai.", en: "Please don't smoke here." },
      { jp: "あしたは こないで ください。", ro: "Ashita wa konaide kudasai.", en: "Please don't come tomorrow." }
    ]
  },
  "L17-2": {
    meaning: "Please don't do this",
    formula: ["V ない-form + で ください", "Reason + から、V ない-form + で ください"],
    points: [
      "It politely asks someone not to do something.",
      "Give the reason first with から.",
      "なにも + negative means nothing, or not anything."
    ],
    tables: [
      {
        title: "Making it",
        headers: ["ます form", "ない-form", "Please don't"],
        rows: [
          ["とります", "とらない", "とらないで ください"],
          ["はいります", "はいらない", "はいらないで ください"],
          ["あそびます", "あそばない", "あそばないで ください"],
          ["とめます", "とめない", "とめないで ください"],
          ["しんぱいします", "しんぱいしない", "しんぱいしないで ください"],
          ["きます", "こない", "こないで ください"]
        ]
      },
      {
        title: "Reason + から + request",
        headers: ["Reason", "Request", "Meaning"],
        rows: [
          ["きんえんですから、", "たばこを すわないで ください。", "It's no-smoking, so please don't smoke."],
          ["あぶないですから、", "おさないで ください。", "It's dangerous, so please don't push it."],
          ["たいせつな しりょうですから、", "なくさないで ください。", "They are important documents, so please don't lose them."],
          ["としょかんの ほんですから、", "なにも かかないで ください。", "It's a library book, so please don't write anything in it."],
          ["だいじょうぶですから、", "しんぱいしないで ください。", "It's okay, so please don't worry."]
        ]
      },
      {
        title: "ここに vs ここで",
        headers: ["Particle", "Marks", "Example", "Meaning"],
        rows: [
          ["に", "Where something is put or entered", "ここに くるまを とめないで ください。", "Please don't park the car here."],
          ["に", "Where something is put or entered", "ここに はいらないで ください。", "Please don't enter here."],
          ["で", "Where an action happens", "ここで しゃしんを とらないで ください。", "Please don't take photographs here."],
          ["で", "Where an action happens", "ここで あそばないで ください。", "Please don't play here."]
        ]
      }
    ],
    mistakes: [
      { bad: "しゃしんを とりないで ください。", good: "しゃしんを とらないで ください。", why: "Use the ない-form: とらない." },
      { bad: "ここで はいらないで ください。", good: "ここに はいらないで ください。", why: "はいります takes に, not で." }
    ]
  },
  "L17-3": {
    meaning: "Must do, have to do",
    formula: ["V ない-form: drop い + ければ なりません"],
    points: [
      "Memorise なければ なりません as one block.",
      "It looks negative, but it means must.",
      "Word for word: if I don't, it won't do."
    ],
    tables: [
      {
        title: "Making it",
        headers: ["ます form", "ない-form", "Must"],
        rows: [
          ["のみます", "のまない", "のまなければ なりません"],
          ["いきます", "いかない", "いかなければ なりません"],
          ["はなします", "はなさない", "はなさなければ なりません"],
          ["かえります", "かえらない", "かえらなければ なりません"],
          ["たべます", "たべない", "たべなければ なりません"],
          ["みせます", "みせない", "みせなければ なりません"],
          ["します", "しない", "しなければ なりません"],
          ["きます", "こない", "こなければ なりません"]
        ]
      },
      {
        title: "In sentences",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["はやく うちへ かえらなければ なりません。", "I must go home early."],
          ["あした びょういんへ いかなければ なりません。", "I must go to the hospital tomorrow."],
          ["パスポートを みせなければ なりません。", "I must show my passport."],
          ["まいあさ ごじに おきなければ なりません。", "I must get up at five every morning."]
        ]
      },
      {
        title: "Asking by when or how many",
        headers: ["Question", "Answer", "Meaning"],
        rows: [
          ["なんじまでに りょうへ かえらなければ なりませんか。", "じゅうにじまでに かえらなければ なりません。", "By what time must you return to the dormitory? By twelve."],
          ["なんようびまでに その ほんを かえさなければ なりませんか。", "すいようびまでに かえさなければ なりません。", "By what day must you return that book? By Wednesday."],
          ["レポートを なんまい かかなければ なりませんか。", "じゅうごまい かかなければ なりません。", "How many pages of report must you write? Fifteen."],
          ["いちにちに なんかい くすりを のまなければ なりませんか。", "さんかい のまなければ なりません。", "How many times a day must you take the medicine? Three times."],
          ["まいにち かんじを いくつ おぼえなければ なりませんか。", "むっつ おぼえなければ なりません。", "How many kanji must you memorise every day? Six."]
        ]
      }
    ],
    mistakes: [
      { bad: "くすりを のみなければ なりません。", good: "くすりを のまなければ なりません。", why: "Start from the ない-form: のまない." },
      { bad: "まいにち べんきょうさなければ なりません。", good: "まいにち べんきょうしなければ なりません。", why: "The ない-form of します is しない." }
    ]
  },
  "L17-4": {
    meaning: "You don't have to do this",
    formula: ["V ない-form: drop い + くても いいです"],
    points: [
      "It means it is OK not to do something.",
      "It is the opposite of なければ なりません.",
      "It is the natural no to ～なければ なりませんか.",
      "You can give a reason first with から."
    ],
    tables: [
      {
        title: "Making it",
        headers: ["ます form", "ない-form", "Don't have to"],
        rows: [
          ["いきます", "いかない", "いかなくても いいです"],
          ["よびます", "よばない", "よばなくても いいです"],
          ["いそぎます", "いそがない", "いそがなくても いいです"],
          ["つくります", "つくらない", "つくらなくても いいです"],
          ["たべます", "たべない", "たべなくても いいです"],
          ["します", "しない", "しなくても いいです"],
          ["きます", "こない", "こなくても いいです"]
        ]
      },
      {
        title: "The three ない patterns side by side",
        headers: ["ます form", "Don't", "Must", "Don't have to"],
        rows: [
          ["のみます", "のまないで ください", "のまなければ なりません", "のまなくても いいです"],
          ["いきます", "いかないで ください", "いかなければ なりません", "いかなくても いいです"],
          ["たべます", "たべないで ください", "たべなければ なりません", "たべなくても いいです"]
        ]
      },
      {
        title: "In sentences",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["タクシーを よばなくても いいです。", "You don't have to call a taxi."],
          ["いそがなくても いいです。", "You don't have to hurry."],
          ["きょうは しょくじを つくらなくても いいです。", "You don't have to make a meal today."],
          ["あしたは びょういんへ こなくても いいです。", "You don't have to come to the hospital tomorrow."],
          ["かさを もって いかなくても いいです。", "You don't have to take an umbrella."]
        ]
      },
      {
        title: "Do I have to? はい takes must, いいえ takes don't have to",
        headers: ["Question", "Answer", "Meaning"],
        rows: [
          ["パスポートを もって いかなければ なりませんか。", "はい、もって いかなければ なりません。", "Do I have to take my passport? Yes, you must."],
          ["いま おかねを はらわなければ なりませんか。", "いいえ、はらわなくても いいです。", "Do I have to pay now? No, you don't have to."],
          ["こんばん ざんぎょうしなければ なりませんか。", "はい、ざんぎょうしなければ なりません。", "Do I have to work overtime tonight? Yes, you must."]
        ]
      },
      {
        title: "Reason + から + must or don't have to",
        headers: ["Reason", "Result", "Meaning"],
        rows: [
          ["ようじが ありますから、", "でかけなければ なりません。", "I have something to do, so I must go out."],
          ["わるい びょうきじゃ ありませんから、", "しんぱいしなくても いいです。", "It isn't a serious illness, so you don't have to worry."],
          ["ねつが ありますから、", "びょういんへ いかなければ なりません。", "I have a fever, so I must go to the hospital."],
          ["あしたは やすみですから、", "はやく おきなくても いいです。", "Tomorrow is a day off, so I don't have to get up early."],
          ["かいしゃの ひとは えいごが わかりませんから、", "にほんごで はなさなければ なりません。", "The people at the company don't understand English, so I must speak Japanese."],
          ["あまり あつくないですから、", "エアコンを つけなくても いいです。", "It isn't very hot, so we don't have to turn on the air conditioner."]
        ]
      }
    ],
    mistakes: [
      { bad: "あした きなくても いいです。", good: "あした こなくても いいです。", why: "The ない-form of きます is こない." }
    ],
    tip: "ないで ください is DON'T. なければ なりません is MUST. なくても いいです is DON'T HAVE TO."
  },
  "L17-5": {
    meaning: "By a deadline",
    formula: ["Time + までに + V"],
    points: [
      "までに marks a deadline.",
      "The action happens at some point before that time.",
      "まで without に means until: the action keeps going."
    ],
    tables: [
      {
        title: "まで vs までに",
        headers: ["Word", "Meaning", "Example", "In English"],
        rows: [
          ["まで", "until", "ごじまで はたらきます。", "I work until five."],
          ["までに", "by", "どようびまでに ほんを かえします。", "I will return the book by Saturday."]
        ]
      }
    ],
    mistakes: [
      { bad: "どようびまで ほんを かえさなければ なりません。", good: "どようびまでに ほんを かえさなければ なりません。", why: "A deadline takes までに." }
    ]
  },
  "L17-6": {
    title: "Making the object the topic: を becomes は",
    meaning: "As for this thing, …",
    formula: ["N を + V → N は + V"],
    points: [
      "The object is the thing an action is done to.",
      "The topic is what a sentence is about.",
      "Bring the object to the front and change を to は.",
      "It draws attention to the object, or contrasts it.",
      "Never say をは."
    ],
    tables: [
      {
        title: "を becomes は",
        headers: ["With を", "With は", "Meaning"],
        rows: [
          ["ここに にもつを おかないで ください。", "にもつは ここに おかないで ください。", "As for bags, please don't put them here."],
          ["かいしゃの しょくどうで ひるごはんを たべます。", "ひるごはんは かいしゃの しょくどうで たべます。", "As for lunch, I eat it in the company cafeteria."]
        ]
      },
      {
        title: "Correcting someone: use は for the thing, then give the right way",
        headers: ["Question", "Answer", "Meaning"],
        rows: [
          ["ここに にもつを おいても いいですか。", "にもつは あそこに おいて ください。", "May I put my bags here? Please put them over there."],
          ["ボールペンで こたえを かいても いいですか。", "こたえは えんぴつで かいて ください。", "May I write the answer in ballpoint pen? Please write it in pencil."],
          ["ここで たばこを すっても いいですか。", "たばこは そとで すって ください。", "May I smoke here? Please smoke outside."],
          ["ここで おかねを はらわなければ なりませんか。", "おかねは うけつけで はらって ください。", "Must I pay here? Please pay at reception."],
          ["あしたも ほけんしょうを もって こなければ なりませんか。", "ほけんしょうは らいげつ もって きて ください。", "Must I bring my insurance card tomorrow too? Please bring it next month."]
        ]
      }
    ],
    mistakes: [
      { bad: "にもつをは ここに おかないで ください。", good: "にもつは ここに おかないで ください。", why: "は replaces を. Never say をは." }
    ]
  },

  // ───────────── Lesson 18 ─────────────
  "L18-1": {
    meaning: "The plain present form of a verb",
    formula: ["V ます → dictionary form"],
    points: [
      "It is the form you look up in a dictionary.",
      "It means the same as ます, but it is plain.",
      "いきます is regular here: いく."
    ],
    tables: [
      {
        title: "Group 1: change the sound before ます to its う-sound",
        headers: ["Before ます", "Becomes", "ます form", "Dictionary form"],
        rows: [
          ["い", "う", "かいます", "かう"],
          ["き", "く", "かきます", "かく"],
          ["き", "く", "いきます", "いく"],
          ["ぎ", "ぐ", "いそぎます", "いそぐ"],
          ["し", "す", "はなします", "はなす"],
          ["ち", "つ", "まちます", "まつ"],
          ["に", "ぬ", "しにます", "しぬ"],
          ["び", "ぶ", "よびます", "よぶ"],
          ["み", "む", "のみます", "のむ"],
          ["り", "る", "かえります", "かえる"]
        ]
      },
      {
        title: "Group 2: drop ます, add る",
        headers: ["ます form", "Dictionary form", "Meaning"],
        rows: [
          ["たべます", "たべる", "eat"],
          ["ねます", "ねる", "sleep"],
          ["みせます", "みせる", "show"],
          ["みます", "みる", "see"],
          ["おきます", "おきる", "get up"]
        ]
      },
      {
        title: "Group 3: memorise these",
        headers: ["ます form", "Dictionary form", "Meaning"],
        rows: [
          ["します", "する", "do"],
          ["きます", "くる", "come"],
          ["べんきょうします", "べんきょうする", "study"]
        ]
      }
    ],
    mistakes: [
      { bad: "わたしは かんじを よみる ことが できます。", good: "わたしは かんじを よむ ことが できます。", why: "Group 1: み becomes む." },
      { bad: "にほんへ きる まえに、にほんごを べんきょうしました。", good: "にほんへ くる まえに、にほんごを べんきょうしました。", why: "The dictionary form of きます is くる." }
    ],
    tip: "Group 2 always ends in る, but not every る verb is Group 2: かえる is Group 1.",
    examples: [
      { jp: "わたしは にほんごで てがみを かく ことが できます。", ro: "Watashi wa nihongo de tegami o kaku koto ga dekimasu.", en: "I can write a letter in Japanese." },
      { jp: "たべる まえに、てを あらいます。", ro: "Taberu mae ni, te o araimasu.", en: "I wash my hands before eating." },
      { jp: "にほんへ くる まえに、にほんごを べんきょうしました。", ro: "Nihon e kuru mae ni, nihongo o benkyō shimashita.", en: "Before I came to Japan, I studied Japanese." }
    ]
  },
  "L18-2": {
    title: "Can do: ～ことが できます",
    meaning: "Can, be able to",
    formula: ["N が できます", "V dictionary form + ことが できます"],
    points: [
      "Use it for ability, or for what is possible somewhere.",
      "こと turns a verb into a noun.",
      "できます takes が, not を.",
      "ひきます means play only for instruments like piano or guitar."
    ],
    tables: [
      {
        title: "Three uses",
        headers: ["Use", "Japanese", "Meaning"],
        rows: [
          ["Noun", "わたしは にほんごが できます。", "I can speak Japanese."],
          ["Verb", "わたしは ピアノを ひく ことが できます。", "I can play the piano."],
          ["Possible here", "ここで カードで はらう ことが できます。", "You can pay by card here."]
        ]
      },
      {
        title: "Two useful words from Lesson 18",
        headers: ["Word", "Meaning", "Example", "In English"],
        rows: [
          ["なかなか", "Not easily, with a negative", "にほんでは なかなか うまを みる ことが できません。", "In Japan, you can't easily see horses."],
          ["ぜひ", "By all means, definitely", "ぜひ にほんへ いきたいです。", "I definitely want to go to Japan."]
        ]
      }
    ],
    mistakes: [
      { bad: "かんじを かく ことを できます。", good: "かんじを かく ことが できます。", why: "できます takes が, not を." },
      { bad: "かんじを かきます ことが できます。", good: "かんじを かく ことが できます。", why: "Use the dictionary form before こと." }
    ]
  },
  "L18-3": {
    title: "Hobbies: しゅみは ～ことです",
    meaning: "My hobby is doing something",
    formula: ["しゅみは + V dictionary form + ことです", "しゅみは + N + です"],
    points: [
      "Use こと to name a hobby with a verb.",
      "A plain noun works too, but こと is more specific."
    ],
    tables: [
      {
        title: "Noun vs verb",
        headers: ["Type", "Japanese", "Meaning"],
        rows: [
          ["Noun", "しゅみは おんがくです。", "My hobby is music."],
          ["Verb", "しゅみは おんがくを きく ことです。", "My hobby is listening to music."]
        ]
      }
    ]
  },
  "L18-4": {
    title: "Before: ～ まえに",
    meaning: "Before doing, before something, or ago",
    formula: ["V dictionary form + まえに", "N の + まえに", "Length of time + まえに"],
    points: [
      "The verb before まえに is always dictionary form.",
      "This stays true even when the sentence is in the past.",
      "A length of time + まえに means ago."
    ],
    tables: [
      {
        title: "What goes before まえに",
        headers: ["Word type", "Form", "Meaning"],
        rows: [
          ["Verb", "ねる まえに", "before going to bed"],
          ["Noun", "しょくじの まえに", "before a meal"],
          ["Length of time", "いちじかん まえに", "an hour ago"]
        ]
      }
    ],
    mistakes: [
      { bad: "にほんへ きた まえに、にほんごを べんきょうしました。", good: "にほんへ くる まえに、にほんごを べんきょうしました。", why: "Always the dictionary form, even in the past." },
      { bad: "いちじかんの まえに でかけました。", good: "いちじかん まえに でかけました。", why: "A length of time takes no の." }
    ]
  },

  // ───────────── Lesson 19 ─────────────
  "L19-1": {
    meaning: "The plain past form of a verb",
    formula: ["V ます → V た"],
    points: [
      "It means the same as ました, but it is plain.",
      "Make it exactly like the て-form.",
      "Then swap て for た, and で for だ.",
      "いきます is still the exception: いった."
    ],
    tables: [
      {
        title: "From て-form to た-form",
        headers: ["て ending", "た ending", "て-form", "た-form"],
        rows: [
          ["て", "た", "かいて", "かいた"],
          ["で", "だ", "のんで", "のんだ"]
        ]
      },
      {
        title: "Group 1: look at the sound before ます",
        headers: ["Before ます", "Becomes", "ます form", "た-form"],
        rows: [
          ["い", "った", "かいます", "かった"],
          ["ち", "った", "まちます", "まった"],
          ["り", "った", "かえります", "かえった"],
          ["み", "んだ", "のみます", "のんだ"],
          ["び", "んだ", "よびます", "よんだ"],
          ["に", "んだ", "しにます", "しんだ"],
          ["き", "いた", "かきます", "かいた"],
          ["ぎ", "いだ", "およぎます", "およいだ"],
          ["し", "した", "はなします", "はなした"]
        ]
      },
      {
        title: "The one exception",
        headers: ["ます form", "た-form", "Meaning"],
        rows: [
          ["いきます", "いった", "go"]
        ]
      },
      {
        title: "Group 2: drop ます, add た",
        headers: ["ます form", "た-form", "Meaning"],
        rows: [
          ["たべます", "たべた", "eat"],
          ["ねます", "ねた", "sleep"],
          ["みせます", "みせた", "show"],
          ["みます", "みた", "see"],
          ["おきます", "おきた", "get up"]
        ]
      },
      {
        title: "Group 3: memorise these",
        headers: ["ます form", "た-form", "Meaning"],
        rows: [
          ["します", "した", "do"],
          ["きます", "きた", "come"],
          ["べんきょうします", "べんきょうした", "study"]
        ]
      }
    ],
    mistakes: [
      { bad: "ほっかいどうへ いきた ことが あります。", good: "ほっかいどうへ いった ことが あります。", why: "いきます is the exception: いった." },
      { bad: "すしを たべった ことが あります。", good: "すしを たべた ことが あります。", why: "Group 2: drop ます, add た." },
      { bad: "うみで およいた ことが あります。", good: "うみで およいだ ことが あります。", why: "ぎ becomes いだ, just like いで." }
    ],
    tip: "If you know your て-forms, you know your た-forms.",
    examples: [
      { jp: "おきなわへ いった ことが あります。", ro: "Okinawa e itta koto ga arimasu.", en: "I have been to Okinawa." },
      { jp: "すしを たべた ことが あります。", ro: "Sushi o tabeta koto ga arimasu.", en: "I have eaten sushi before." },
      { jp: "ゴルフを した ことが ありません。", ro: "Gorufu o shita koto ga arimasen.", en: "I have never played golf." }
    ]
  },
  "L19-2": {
    title: "Experience: ～た ことが あります",
    meaning: "Have done something before",
    formula: ["V た-form + ことが あります", "V た-form + ことが ありません"],
    points: [
      "It talks about experience at some point in your life.",
      "It is not for recent events. Use ～ました for those.",
      "いちども always needs a negative."
    ],
    tables: [
      {
        title: "Experience vs a recent event",
        headers: ["Use", "Japanese", "Meaning"],
        rows: [
          ["Life experience", "ふじさんに のぼった ことが あります。", "I have climbed Mt. Fuji."],
          ["Recent event", "きのう ふじさんに のぼりました。", "I climbed Mt. Fuji yesterday."]
        ]
      },
      {
        title: "いちど vs いちども",
        headers: ["Word", "Meaning", "Example", "In English"],
        rows: [
          ["いちど", "once", "いちど にほんへ いきました。", "I went to Japan once."],
          ["いちども", "never, with a negative", "いちども にほんへ いった ことが ありません。", "I have never been to Japan."]
        ]
      }
    ],
    mistakes: [
      { bad: "きのう すしを たべた ことが あります。", good: "きのう すしを たべました。", why: "Yesterday is a recent event, so use ～ました." },
      { bad: "いちども にほんへ いきました。", good: "いちど にほんへ いきました。", why: "いちども needs a negative. Once is いちど." }
    ]
  },
  "L19-3": {
    title: "Listing actions: ～たり、～たり します",
    meaning: "Do things like this and that",
    formula: ["V1 た-form + り、V2 た-form + り します"],
    points: [
      "It lists a few example actions out of many.",
      "There is no fixed order.",
      "The sentence must end with します.",
      "That final します shows past or present."
    ],
    tables: [
      {
        title: "Making it: add り to the た-form",
        headers: ["ます form", "た-form", "たり form"],
        rows: [
          ["します", "した", "したり"],
          ["みます", "みた", "みたり"],
          ["よみます", "よんだ", "よんだり"],
          ["ききます", "きいた", "きいたり"],
          ["およぎます", "およいだ", "およいだり"]
        ]
      },
      {
        title: "たり vs て",
        headers: ["Pattern", "Japanese", "Meaning"],
        rows: [
          ["Examples, no fixed order", "テニスを したり、えいがを みたり します。", "I do things like play tennis and watch movies."],
          ["Exact order", "テニスを して、えいがを みました。", "I played tennis, then watched a movie."]
        ]
      }
    ],
    mistakes: [
      { bad: "にちようびは テニスを したり、えいがを みます。", good: "にちようびは テニスを したり、えいがを みたり します。", why: "Both verbs take たり, then end with します." }
    ]
  },
  "L19-4": {
    title: "Become: ～く なります, ～に なります",
    meaning: "Become, get",
    formula: ["い-adjective: drop い + く なります", "な-adjective / N + に なります"],
    points: [
      "なります means become.",
      "いい changes to よく, from よい."
    ],
    tables: [
      {
        title: "How each word type joins",
        headers: ["Word type", "Word", "With なります", "Meaning"],
        rows: [
          ["い", "さむい", "さむく なります", "get cold"],
          ["い", "くらい", "くらく なります", "get dark"],
          ["いい", "いい", "よく なります", "get better"],
          ["な", "げんき", "げんきに なります", "get well"],
          ["な", "きれい", "きれいに なります", "become clean"],
          ["Noun", "いしゃ", "いしゃに なります", "become a doctor"]
        ]
      }
    ],
    mistakes: [
      { bad: "へやが きれく なりました。", good: "へやが きれいに なりました。", why: "きれい is a な-adjective, so use に." },
      { bad: "ちょうしが いく なりました。", good: "ちょうしが よく なりました。", why: "いい becomes よく." },
      { bad: "いしゃを なりたいです。", good: "いしゃに なりたいです。", why: "なります takes に, not を." }
    ]
  },

  // ───────────── Lesson 20 ─────────────
  "L20-1": {
    meaning: "です and ます, or casual speech",
    formula: ["Polite: です, ます", "Plain: だ, dictionary form, ない-form, た-form"],
    points: [
      "Plain style is the casual way of speaking.",
      "Don't mix the two styles with the same person.",
      "Plain style with a superior sounds rude."
    ],
    tables: [
      {
        title: "Who gets which style",
        headers: ["Style", "Who", "Where"],
        rows: [
          ["Polite", "People you don't know well, superiors", "Formal situations"],
          ["Plain", "Close friends, family, people younger than you", "Diaries, notes, newspapers"]
        ]
      },
      {
        title: "The same sentence in both styles",
        headers: ["Polite", "Plain", "Meaning"],
        rows: [
          ["あした とうきょうへ いきます。", "あした とうきょうへ いく。", "I'm going to Tokyo tomorrow."],
          ["きのう なにを しましたか。", "きのう なにを した？", "What did you do yesterday?"],
          ["きょうは やすみです。", "きょうは やすみだ。", "Today is a day off."],
          ["この ケーキは おいしいです。", "この ケーキは おいしい。", "This cake is tasty."]
        ]
      }
    ],
    examples: [
      { jp: "あした とうきょうへ いく。", ro: "Ashita Tōkyō e iku.", en: "I'm going to Tokyo tomorrow. (casual)" },
      { jp: "きのう なにを した？", ro: "Kinō nani o shita?", en: "What did you do yesterday? (casual)" }
    ]
  },
  "L20-2": {
    meaning: "Plain present, negative, past and past negative",
    formula: ["ます → dictionary form", "ません → ない-form, ませんでした → なかった", "ました → た-form"],
    points: [
      "Each polite verb form has a plain twin.",
      "For the past negative, swap the ない ending for なかった.",
      "The plain negative of あります is just ない."
    ],
    tables: [
      {
        title: "The four plain forms of いきます",
        headers: ["Polite", "Plain", "Meaning"],
        rows: [
          ["いきます", "いく", "go"],
          ["いきません", "いかない", "do not go"],
          ["いきました", "いった", "went"],
          ["いきませんでした", "いかなかった", "did not go"]
        ]
      },
      {
        title: "Group 1: every sound change",
        headers: ["ます form", "Dictionary form", "ない-form", "た-form", "Past negative"],
        rows: [
          ["かいます", "かう", "かわない", "かった", "かわなかった"],
          ["かきます", "かく", "かかない", "かいた", "かかなかった"],
          ["いきます", "いく", "いかない", "いった", "いかなかった"],
          ["いそぎます", "いそぐ", "いそがない", "いそいだ", "いそがなかった"],
          ["はなします", "はなす", "はなさない", "はなした", "はなさなかった"],
          ["まちます", "まつ", "またない", "まった", "またなかった"],
          ["しにます", "しぬ", "しなない", "しんだ", "しななかった"],
          ["よびます", "よぶ", "よばない", "よんだ", "よばなかった"],
          ["のみます", "のむ", "のまない", "のんだ", "のまなかった"],
          ["かえります", "かえる", "かえらない", "かえった", "かえらなかった"]
        ]
      },
      {
        title: "Group 2: drop ます, then add る, ない or た",
        headers: ["ます form", "Dictionary form", "ない-form", "た-form", "Past negative"],
        rows: [
          ["たべます", "たべる", "たべない", "たべた", "たべなかった"],
          ["ねます", "ねる", "ねない", "ねた", "ねなかった"],
          ["みます", "みる", "みない", "みた", "みなかった"],
          ["おきます", "おきる", "おきない", "おきた", "おきなかった"]
        ]
      },
      {
        title: "Group 3: memorise these",
        headers: ["ます form", "Dictionary form", "ない-form", "た-form", "Past negative"],
        rows: [
          ["します", "する", "しない", "した", "しなかった"],
          ["きます", "くる", "こない", "きた", "こなかった"],
          ["べんきょうします", "べんきょうする", "べんきょうしない", "べんきょうした", "べんきょうしなかった"]
        ]
      },
      {
        title: "One special verb",
        headers: ["ます form", "Dictionary form", "ない-form", "た-form", "Past negative"],
        rows: [
          ["あります", "ある", "ない", "あった", "なかった"]
        ]
      }
    ],
    mistakes: [
      { bad: "おかねが あらない。", good: "おかねが ない。", why: "The plain negative of あります is ない." },
      { bad: "きのうは どこも いかないでした。", good: "きのうは どこも いかなかった。", why: "The plain past negative ends in なかった." }
    ]
  },
  "L20-3": {
    meaning: "Plain forms of adjective and noun sentences",
    formula: ["い-adjective: drop です", "な-adjective / N: です → だ"],
    points: [
      "い-adjectives just drop です in every form.",
      "な-adjectives and nouns use だ and じゃ ない.",
      "Never put だ after an い-adjective."
    ],
    tables: [
      {
        title: "い-adjectives: drop です",
        headers: ["Form", "Polite", "Plain"],
        rows: [
          ["Present", "おいしいです", "おいしい"],
          ["Present negative", "おいしくないです", "おいしくない"],
          ["Past", "おいしかったです", "おいしかった"],
          ["Past negative", "おいしくなかったです", "おいしくなかった"]
        ]
      },
      {
        title: "いい: same rule, from よい",
        headers: ["Form", "Polite", "Plain"],
        rows: [
          ["Present", "いいです", "いい"],
          ["Present negative", "よくないです", "よくない"],
          ["Past", "よかったです", "よかった"],
          ["Past negative", "よくなかったです", "よくなかった"]
        ]
      },
      {
        title: "な-adjectives",
        headers: ["Form", "Polite", "Plain"],
        rows: [
          ["Present", "ひまです", "ひまだ"],
          ["Present negative", "ひまじゃ ありません", "ひまじゃ ない"],
          ["Past", "ひまでした", "ひまだった"],
          ["Past negative", "ひまじゃ ありませんでした", "ひまじゃ なかった"]
        ]
      },
      {
        title: "Nouns: same as な-adjectives",
        headers: ["Form", "Polite", "Plain"],
        rows: [
          ["Present", "あめです", "あめだ"],
          ["Present negative", "あめじゃ ありません", "あめじゃ ない"],
          ["Past", "あめでした", "あめだった"],
          ["Past negative", "あめじゃ ありませんでした", "あめじゃ なかった"]
        ]
      }
    ],
    mistakes: [
      { bad: "この ケーキは おいしいだ。", good: "この ケーキは おいしい。", why: "Never put だ after an い-adjective." },
      { bad: "きのうは ひまかった。", good: "きのうは ひまだった。", why: "ひま is a な-adjective, so use だった." }
    ]
  },
  "L20-4": {
    meaning: "Asking and answering in plain style",
    formula: ["Plain form + ？", "な-adjective / N + ？"],
    points: [
      "Casual questions usually drop か.",
      "Your voice rises at the end instead.",
      "With nouns and な-adjectives, だ drops too.",
      "Particles like を and へ are often left out."
    ],
    tables: [
      {
        title: "Polite vs casual",
        headers: ["Polite", "Casual", "Meaning"],
        rows: [
          ["コーヒーを のみますか。", "コーヒー、のむ？", "Want some coffee?"],
          ["あした ひまですか。", "あした ひま？", "Free tomorrow?"],
          ["はい", "うん", "Yes"],
          ["いいえ", "ううん", "No"]
        ]
      }
    ],
    mistakes: [
      { bad: "あした ひまだ？", good: "あした ひま？", why: "だ drops in casual questions." }
    ]
  },
  "L20-5": {
    meaning: "But (casual)",
    formula: ["Plain form + けど", "な-adjective / N + だけど"],
    points: [
      "けど is the casual version of が, meaning but.",
      "It can also be a soft lead-in, like I was wondering."
    ],
    tables: [
      {
        title: "How each word type joins",
        headers: ["Word type", "Plain form", "With けど", "Meaning"],
        rows: [
          ["Verb", "いった", "いったけど", "went, but"],
          ["い", "たかい", "たかいけど", "expensive, but"],
          ["な", "ひまだ", "ひまだけど", "free, but"],
          ["Noun", "あめだ", "あめだけど", "rainy, but"]
        ]
      },
      {
        title: "が vs けど",
        headers: ["Style", "Japanese", "Meaning"],
        rows: [
          ["Polite", "この みせは たかいですが、おいしいです。", "This restaurant is expensive, but it's good."],
          ["Casual", "この みせは たかいけど、おいしい。", "This restaurant is expensive, but it's good."]
        ]
      }
    ],
    mistakes: [
      { bad: "あしたは ひまけど、あさっては いそがしい。", good: "あしたは ひまだけど、あさっては いそがしい。", why: "な-adjectives and nouns need だ before けど." }
    ]
  },

  // ───────────── Lessons 21–25 ─────────────
  "L21-1": {
    title: "I think: plain form + と おもいます",
    meaning: "I think that",
    formula: ["Plain form + と おもいます", "な-adjective / N + だ + と おもいます"],
    points: [
      "Use it to give an opinion or a guess.",
      "For I don't think, make the part before と negative.",
      "Ask an opinion with ～に ついて どう おもいますか."
    ],
    tables: [
      {
        title: "What goes before と おもいます",
        headers: ["Word type", "Polite", "Before と おもいます"],
        rows: [
          ["Verb", "ふります", "ふる"],
          ["Verb, negative", "きません", "こない"],
          ["Verb, past", "かえりました", "かえった"],
          ["い", "たかいです", "たかい"],
          ["な", "かんたんです", "かんたんだ"],
          ["Noun", "やすみです", "やすみだ"]
        ]
      },
      {
        title: "I think vs I don't think",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["ミラーさんは くると おもいます。", "I think Mr. Miller will come."],
          ["ミラーさんは こないと おもいます。", "I don't think Mr. Miller will come."]
        ]
      }
    ],
    mistakes: [
      { bad: "あした あめが ふりますと おもいます。", good: "あした あめが ふると おもいます。", why: "Use the plain form before と." },
      { bad: "この もんだいは かんたんと おもいます。", good: "この もんだいは かんたんだと おもいます。", why: "な-adjectives and nouns need だ before と." }
    ]
  },
  "L21-2": {
    title: "Saying and quoting: ～と いいます",
    meaning: "Say, or say that",
    formula: ["「exact words」と いいます", "Plain form + と いいました"],
    points: [
      "Put exact words inside 「 」.",
      "To report what someone said, use the plain form.",
      "The quote particle is always と."
    ],
    tables: [
      {
        title: "Three ways to use it",
        headers: ["Use", "Japanese", "Meaning"],
        rows: [
          ["Exact words", "ねる まえに、「おやすみなさい」と いいます。", "Before going to bed, we say 'Good night'."],
          ["Reporting", "ミラーさんは らいしゅう おおさかへ いくと いいました。", "Mr. Miller said he is going to Osaka next week."],
          ["Asking for a word", "これは にほんごで なんと いいますか。", "What is this called in Japanese?"]
        ]
      }
    ],
    mistakes: [
      { bad: "ごはんの まえに、「いただきます」を いいます。", good: "ごはんの まえに、「いただきます」と いいます。", why: "A quote takes と, not を." }
    ]
  },
  "L21-3": {
    meaning: "…, right?",
    formula: ["Plain form + でしょう？", "な-adjective / N + でしょう？"],
    points: [
      "Use it to check that the listener agrees.",
      "Your voice rises at the end.",
      "Nouns and な-adjectives drop だ."
    ],
    tables: [
      {
        title: "How each word type joins",
        headers: ["Word type", "Example", "Meaning"],
        rows: [
          ["Verb", "あしたの パーティーに いくでしょう？", "You're going to tomorrow's party, right?"],
          ["い", "にほんの なつは あついでしょう？", "Summer in Japan is hot, right?"],
          ["な", "ならは しずかでしょう？", "Nara is quiet, right?"],
          ["Noun", "カリナさんは がくせいでしょう？", "Karina is a student, right?"]
        ]
      }
    ],
    mistakes: [
      { bad: "カリナさんは がくせいだでしょう？", good: "カリナさんは がくせいでしょう？", why: "Drop だ before でしょう." }
    ]
  },
  "L22-1": {
    title: "Describing a noun with a clause",
    meaning: "The noun that someone does or did",
    formula: ["Plain-form clause + N", "Person が + plain form + N"],
    points: [
      "A whole clause can go before a noun to describe it.",
      "The verb in the clause must be plain form.",
      "The subject in the clause takes が, not は."
    ],
    tables: [
      {
        title: "Clause + noun",
        headers: ["Clause", "Noun", "Meaning"],
        rows: [
          ["わたしが すんで いる", "うち", "the house I live in"],
          ["わたしが きのう みた", "えいが", "the movie I saw yesterday"],
          ["わたしが かいた", "え", "the picture I drew"],
          ["めがねを かけて いる", "ひと", "the person wearing glasses"]
        ]
      }
    ],
    mistakes: [
      { bad: "これは わたしが たべました パンです。", good: "これは わたしが たべた パンです。", why: "Use the plain form before the noun." },
      { bad: "これは わたしは かいた えです。", good: "これは わたしが かいた えです。", why: "The subject in the clause takes が." }
    ]
  },
  "L22-2": {
    title: "Time to do, plans to do: dictionary form + noun",
    meaning: "Time, plans or errands to do something",
    formula: ["V dictionary form + じかん", "V dictionary form + やくそく", "V dictionary form + ようじ"],
    points: [
      "The verb sits directly in front of the noun.",
      "This is the same rule as describing a noun with a clause."
    ],
    tables: [
      {
        title: "Three common nouns",
        headers: ["Noun", "Meaning", "Example", "In English"],
        rows: [
          ["じかん", "time", "あさごはんを たべる じかんが ありません。", "I don't have time to eat breakfast."],
          ["やくそく", "appointment", "ともだちと あう やくそくが あります。", "I have plans to meet a friend."],
          ["ようじ", "errand", "ぎんこうへ いく ようじが あります。", "I have an errand at the bank."]
        ]
      }
    ],
    mistakes: [
      { bad: "テレビを みます じかんが ありません。", good: "テレビを みる じかんが ありません。", why: "Use the dictionary form before the noun." }
    ]
  },
  "L23-1": {
    meaning: "When",
    formula: ["V plain form / い-adjective + とき", "な-adjective + な とき", "N + の とき"],
    points: [
      "とき means time, and it is a noun.",
      "So words join it the same way they join any noun.",
      "The とき part sets the time of the main sentence."
    ],
    tables: [
      {
        title: "How each word type joins",
        headers: ["Word type", "Example", "Meaning"],
        rows: [
          ["Verb", "みちを わたる とき", "when crossing the road"],
          ["い", "ねむい とき", "when sleepy"],
          ["な", "ひまな とき", "when free"],
          ["Noun", "こどもの とき", "when I was a child"]
        ]
      }
    ],
    mistakes: [
      { bad: "しずかの とき、ほんを よみます。", good: "しずかな とき、ほんを よみます。", why: "な-adjectives take な before とき." },
      { bad: "ねむいの とき、コーヒーを のみます。", good: "ねむい とき、コーヒーを のみます。", why: "い-adjectives join とき directly." }
    ]
  },
  "L23-2": {
    title: "If you do this, that happens: ～と",
    meaning: "When you do this, that always happens",
    formula: ["V dictionary form + と、result"],
    points: [
      "The result is automatic or unavoidable.",
      "It suits machines, directions and nature.",
      "The second half can't be a request, invitation or plan."
    ],
    tables: [
      {
        title: "Three common uses",
        headers: ["Use", "Japanese", "Meaning"],
        rows: [
          ["Machines", "この ボタンを おすと、おつりが でます。", "If you press this button, the change comes out."],
          ["Directions", "みぎへ まがると、ゆうびんきょくが あります。", "If you turn right, there's a post office."],
          ["Nature", "はるに なると、あたたかく なります。", "When spring comes, it gets warm."]
        ]
      }
    ],
    mistakes: [
      { bad: "ボタンを おすと、おつりを とって ください。", good: "ボタンを おしてから、おつりを とって ください。", why: "A request can't follow と." }
    ]
  },
  "L24-1": {
    meaning: "Someone gives to me or my side",
    formula: ["Person は わたしに N を くれます"],
    points: [
      "Use くれます when the gift comes to you or your family.",
      "The giver can never be わたし."
    ],
    tables: [
      {
        title: "Who gives to whom",
        headers: ["Giver", "Receiver", "Verb", "Example", "Meaning"],
        rows: [
          ["Me", "Someone else", "あげます", "わたしは さとうさんに はなを あげました。", "I gave Ms. Sato flowers."],
          ["Someone else", "Someone else", "あげます", "さとうさんは きむらさんに はなを あげました。", "Ms. Sato gave Ms. Kimura flowers."],
          ["Someone else", "Me or my side", "くれます", "さとうさんは わたしに はなを くれました。", "Ms. Sato gave me flowers."],
          ["Someone else", "Me", "もらいます", "わたしは さとうさんに はなを もらいました。", "I received flowers from Ms. Sato."]
        ]
      }
    ],
    mistakes: [
      { bad: "さとうさんは わたしに チョコレートを あげました。", good: "さとうさんは わたしに チョコレートを くれました。", why: "The gift comes to you, so use くれます." },
      { bad: "わたしは さとうさんに はなを くれました。", good: "わたしは さとうさんに はなを あげました。", why: "You are the giver, so use あげます." }
    ]
  },
  "L24-2": {
    title: "Doing favours: ～て あげます・もらいます・くれます",
    meaning: "Giving and receiving favours",
    formula: ["V て-form + あげます", "V て-form + もらいます", "V て-form + くれます"],
    points: [
      "A favour is an action that helps someone.",
      "With ～て もらいます, the doer takes に.",
      "～て あげます to a superior sounds condescending."
    ],
    tables: [
      {
        title: "Who does it, who benefits",
        headers: ["Pattern", "Doer", "Who benefits", "Example", "Meaning"],
        rows: [
          ["～て あげます", "Me", "Someone else", "わたしは きむらさんに ほんを かして あげました。", "I lent Ms. Kimura a book."],
          ["～て もらいます", "Someone else", "Me", "わたしは やまださんに ちずを かいて もらいました。", "Mr. Yamada drew a map for me."],
          ["～て くれます", "Someone else", "Me", "ははは わたしに セーターを おくって くれました。", "My mother sent me a sweater."]
        ]
      },
      {
        title: "The same favour, two ways",
        headers: ["Subject", "Japanese", "Meaning"],
        rows: [
          ["Me, the receiver", "わたしは たなかさんに ちずを かいて もらいました。", "Mr. Tanaka drew a map for me."],
          ["The doer", "たなかさんが ちずを かいて くれました。", "Mr. Tanaka drew a map for me."]
        ]
      }
    ],
    mistakes: [
      { bad: "わたしは たなかさんが ちずを かいて もらいました。", good: "わたしは たなかさんに ちずを かいて もらいました。", why: "With もらいます, the doer takes に." },
      { bad: "ともだちが にもつを もって もらいました。", good: "ともだちが にもつを もって くれました。", why: "The doer is the subject, so use くれます." }
    ]
  },
  "L25-1": {
    meaning: "If, or when",
    formula: ["Plain past form + ら"],
    points: [
      "It means if, for a condition.",
      "It also means when, for something sure to happen.",
      "Unlike ～と, the second half can be a request or plan.",
      "Add もし at the start to stress if."
    ],
    tables: [
      {
        title: "How each word type joins",
        headers: ["Word type", "Plain past", "たら form", "Meaning"],
        rows: [
          ["Verb", "ふった", "ふったら", "if it rains"],
          ["Verb, negative", "ふらなかった", "ふらなかったら", "if it doesn't rain"],
          ["い", "やすかった", "やすかったら", "if it is cheap"],
          ["いい", "よかった", "よかったら", "if it is good"],
          ["な", "ひまだった", "ひまだったら", "if you are free"],
          ["Noun", "あめだった", "あめだったら", "if it is rainy"]
        ]
      },
      {
        title: "Verbs: add ら to the た-form",
        headers: ["ます form", "た-form", "たら form"],
        rows: [
          ["いきます", "いった", "いったら"],
          ["のみます", "のんだ", "のんだら"],
          ["たべます", "たべた", "たべたら"],
          ["します", "した", "したら"],
          ["きます", "きた", "きたら"]
        ]
      },
      {
        title: "If vs when",
        headers: ["Meaning", "Japanese", "In English"],
        rows: [
          ["If: it may not happen", "あめが ふったら、でかけません。", "If it rains, I won't go out."],
          ["When: it will happen", "えきに ついたら、でんわして ください。", "When you get to the station, please call me."]
        ]
      },
      {
        title: "と vs たら",
        headers: ["Pattern", "Second half", "Example", "Meaning"],
        rows: [
          ["と", "Automatic result only", "この ボタンを おすと、ドアが あきます。", "If you press this button, the door opens."],
          ["たら", "Can be a request or plan", "うちへ かえったら、でんわして ください。", "When you get home, please call me."]
        ]
      }
    ],
    mistakes: [
      { bad: "あめが ふるたら、でかけません。", good: "あめが ふったら、でかけません。", why: "たら joins the た-form, not the dictionary form." },
      { bad: "ひまたら、てつだって ください。", good: "ひまだったら、てつだって ください。", why: "な-adjectives and nouns use だったら." }
    ]
  },
  "L25-2": {
    meaning: "Even if",
    formula: ["V て-form + も", "い-adjective: drop い + くても", "な-adjective / N + でも"],
    points: [
      "The second half is the opposite of what you'd expect.",
      "With いくら, it means no matter how much."
    ],
    tables: [
      {
        title: "How each word type joins",
        headers: ["Word type", "Word", "Even if form", "Meaning"],
        rows: [
          ["Verb", "ふります", "ふっても", "even if it rains"],
          ["Verb, negative", "ふりません", "ふらなくても", "even if it doesn't rain"],
          ["い", "やすい", "やすくても", "even if it is cheap"],
          ["いい", "いい", "よくても", "even if it is good"],
          ["な", "ひま", "ひまでも", "even if I am free"],
          ["Noun", "にちようび", "にちようびでも", "even on Sundays"]
        ]
      },
      {
        title: "たら vs ても",
        headers: ["Meaning", "Japanese", "In English"],
        rows: [
          ["If", "あめが ふったら、いきません。", "If it rains, I won't go."],
          ["Even if", "あめが ふっても、いきます。", "Even if it rains, I'll go."]
        ]
      }
    ],
    mistakes: [
      { bad: "やすいでも、その くるまは かいません。", good: "やすくても、その くるまは かいません。", why: "い-adjectives use くても." }
    ]
  }
});

window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  11: {
    can: ["Count things, people and machines", "Say how long something takes", "Say how often you do something", "Say only with だけ"],
    first: ["ひとつ", "ふたつ", "みっつ", "よっつ", "いつつ", "むっつ", "ななつ", "やっつ", "ここのつ", "とお", "ひとり", "ふたり"],
    tip: "Memorise two sentences first, because they hold the whole lesson: りんごを みっつ かいました。 and いっしゅうかんに さんかい にほんごを べんきょうします。"
  },
  12: {
    can: ["Say what something was like", "Compare two things", "Say which is the best in a group"],
    first: ["ちかい", "とおい", "はやい", "おそい", "おおい", "すくない", "おもい", "かるい", "あたたかい", "すずしい", "あまい", "からい"],
    tip: "Memorise three things first: おいしかったです and おいしくなかったです, A は B より adjective です, and N の なかで なにが いちばん adjective ですか."
  },
  13: {
    can: ["Say what you want", "Say what you want to do", "Say you are going somewhere to do something"],
    first: ["ほしい", "あそびます", "およぎます", "むかえます", "つかれます", "はいります", "でます", "けっこんします", "かいものします", "さんぽします", "なにか", "どこか"],
    tip: "Get the ます-stem automatic, because たいです and ～に いきます both start from it."
  },
  14: {
    can: ["Ask someone to do something", "Say what you are doing now", "Offer to help someone"],
    first: ["つけます", "けします", "あけます", "しめます", "いそぎます", "まちます", "とめます", "まがります", "もちます", "とります", "てつだいます", "よびます"],
    tip: "Drill the て-form until it is automatic, because Lessons 14 to 16 all depend on it."
  },
  15: {
    can: ["Ask for permission", "Say something is not allowed", "Say where you live and what your job is"],
    first: ["たちます", "すわります", "つかいます", "おきます", "つくります", "うります", "しります", "すみます", "しっています", "すんでいます", "けんきゅうします", "どくしん"],
    tip: "Learn しって います and しりません as a pair, because it is the lesson's biggest trap."
  },
  16: {
    can: ["Link actions in order", "Describe someone with two adjectives", "Say what you do after something", "Explain how to get somewhere"],
    first: ["のります", "おります", "のりかえます", "あびます", "いれます", "おします", "わかい", "ながい", "みじかい", "あかるい", "くらい", "どうやって"],
    tip: "Describe your own morning out loud with ～て、～て、～ます."
  },
  17: {
    can: ["Ask someone not to do something", "Say what you must do", "Say what you don't have to do", "Give a deadline"],
    first: ["おぼえます", "わすれます", "なくします", "はらいます", "かえします", "でかけます", "ぬぎます", "もっていきます", "もってきます", "しんぱいします", "ざんぎょうします", "しゅっちょうします"],
    tip: "Learn the ない-form first, because ないで ください, なければ なりません and なくても いいです all grow from it."
  },
  18: {
    can: ["Say what you can do", "Talk about your hobby", "Say what you do before something"],
    first: ["できます", "あらいます", "ひきます", "うたいます", "あつめます", "すてます", "かえます", "うんてんします", "よやくします", "けんがくします"],
    tip: "Lock in these 10 verbs first, and learn each one in its dictionary form too."
  },
  19: {
    can: ["Talk about what you have done before", "List things you do", "Say how something has changed"],
    first: ["のぼります", "とまります", "そうじします", "せんたくします", "れんしゅうします", "なります", "ねむい", "つよい", "よわい", "ちょうし", "いちど", "いちども", "だんだん", "もうすぐ", "じつは", "むり"],
    tip: "If your て-forms are solid, the た-form is free, so spend your time on いちども + negative."
  },
  20: {
    can: ["Speak casually with friends", "Change polite sentences to plain ones", "Ask and answer casual questions"],
    first: ["いります", "しらべます", "しゅうりします", "でんわします", "ぼく", "きみ", "うん", "ううん", "ことば", "このあいだ", "いろいろ", "～けど"],
    tip: "Take one verb at a time through all four plain forms until they come without thinking."
  },
  21: {
    can: ["Give your opinion", "Report what someone said", "Check that someone agrees"],
    first: ["おもいます", "いいます", "かちます", "まけます", "やくにたちます", "うごきます", "きをつけます", "いけん", "ニュース", "たぶん", "きっと", "もちろん"],
    tip: "Review the plain forms first, because all three patterns here are built on them."
  },
  22: {
    can: ["Describe a noun with a whole clause", "Say what you are wearing", "Say you have no time to do something"],
    first: ["きます", "はきます", "かぶります", "かけます", "うまれます", "コート", "セーター", "スーツ", "ぼうし", "めがね", "つごう", "アパート"],
    tip: "Build sentences backwards: start with the noun, then add the clause in front of it."
  },
  23: {
    can: ["Say when something happens", "Give directions", "Explain how a machine works"],
    first: ["ききます", "まわします", "ひきます", "かえます", "さわります", "あるきます", "わたります", "みち", "こうさてん", "しんごう", "かど", "はし"],
    tip: "Practise by giving directions from your home to the nearest station with ～と."
  },
  24: {
    can: ["Say someone gave you something", "Say someone did something for you", "Say you did something for someone"],
    first: ["くれます", "なおします", "つれていきます", "つれてきます", "おくります", "しょうかいします", "あんないします", "せつめいします", "じゅんび", "おかし", "ぜんぶ", "じぶんで"],
    tip: "Always ask who gives and who receives before you choose the verb."
  },
  25: {
    can: ["Say what you will do if something happens", "Say what you will do once something happens", "Say what you will do even if something happens"],
    first: ["かんがえます", "つきます", "としをとります", "たります", "がんばります", "もし", "いなか", "チャンス", "てんきん", "たいしかん"],
    tip: "Learn ～たら and ～ても as a pair, because they are both built on a form you already know."
  }
});
