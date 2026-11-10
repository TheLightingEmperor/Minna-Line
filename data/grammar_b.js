// Grammar data B: Lessons 11–20 + remaining N5 grammar (L21–25)
window.GRAMMAR = (window.GRAMMAR || []).concat([

  // ───────────────────────── LESSON 11 ─────────────────────────
  {
    id: "L11-1",
    lesson: 11,
    title: "ひとつ～とお (general counter) / いくつ",
    meaning: "one ~ ten (things) / how many?",
    explain: "For everyday objects with no special counter (apples, eggs, cakes, bags) use the native counter ひとつ, ふたつ, みっつ, よっつ, いつつ, むっつ, ななつ, やっつ, ここのつ, とお. Ask with いくつ. The quantity normally goes AFTER noun + particle and right before the verb: りんごを みっつ かいました. Gotcha: 10 is just とお (no つ), and these only go up to ten.",
    examples: [
      { jp: "りんごを みっつ かいました。", ro: "Ringo o mittsu kaimashita.", en: "I bought three apples." },
      { jp: "みかんを いくつ かいましたか。", ro: "Mikan o ikutsu kaimashita ka.", en: "How many mandarins did you buy?" },
      { jp: "たまごを よっつ ください。", ro: "Tamago o yottsu kudasai.", en: "Four eggs, please." }
    ],
    drills: [
      { type: "fill", jp: "りんごを ＿＿ かいました。", answer: "みっつ", options: ["みっつ", "さんつ", "みつ", "さんにん"], en: "I bought three apples." },
      { type: "fill", jp: "みかんを ＿＿ たべましたか。", answer: "いくつ", options: ["いくつ", "なんにん", "なんまい", "いくら"], en: "How many mandarins did you eat?" },
      { type: "choose", q: "Which is 'eight (things)'?", answer: "やっつ", options: ["やっつ", "はっつ", "はちつ", "よっつ"] },
      { type: "choose", q: "Which is 'ten (things)'?", answer: "とお", options: ["とお", "じゅっつ", "ここのつ", "とおつ"] },
      { type: "choose", q: "Which sentence puts the quantity in the right place?", answer: "りんごを みっつ かいました。", options: ["りんごを みっつ かいました。", "りんごを みっつを かいました。", "りんごに みっつ かいました。", "りんごを かいました みっつを。"] },
      { type: "order", tiles: ["たまごを", "よっつ", "ください"], en: "Four eggs, please." },
      { type: "order", tiles: ["ケーキを", "ふたつ", "たべました"], en: "I ate two pieces of cake." }
    ]
  },
  {
    id: "L11-2",
    lesson: 11,
    title: "ひとり・ふたり・～にん",
    meaning: "counting people / how many people?",
    explain: "People are counted with ～にん, but one and two are irregular: ひとり and ふたり. Four people is よにん (not よんにん). Ask with なんにん. The pattern is N が + number + います: こどもが ふたり います can mean 'I have two children' or 'there are two children'.",
    examples: [
      { jp: "こどもが ふたり います。", ro: "Kodomo ga futari imasu.", en: "I have two children." },
      { jp: "きょうだいが なんにん いますか。", ro: "Kyōdai ga nannin imasu ka.", en: "How many siblings do you have?" },
      { jp: "きょうしつに がくせいが ごにん います。", ro: "Kyōshitsu ni gakusei ga gonin imasu.", en: "There are five students in the classroom." }
    ],
    drills: [
      { type: "fill", jp: "こどもが ＿＿ います。", answer: "ふたり", options: ["ふたり", "ににん", "ふたつ", "にまい"], en: "I have two children." },
      { type: "fill", jp: "きょうだいが ＿＿ いますか。", answer: "なんにん", options: ["なんにん", "いくつ", "なんまい", "なんだい"], en: "How many siblings do you have?" },
      { type: "choose", q: "How do you say 'four people'?", answer: "よにん", options: ["よにん", "よんにん", "しにん", "よっつ"] },
      { type: "choose", q: "How do you say 'one person'?", answer: "ひとり", options: ["ひとり", "いちにん", "ひとつ", "いちり"] },
      { type: "order", tiles: ["がくせいが", "さんにん", "います"], en: "There are three students." },
      { type: "order", tiles: ["わたしは", "あにが", "ひとり", "います"], en: "I have one older brother." }
    ]
  },
  {
    id: "L11-3",
    lesson: 11,
    title: "～だい・～まい・～かい",
    meaning: "counters for machines, flat things, and times",
    explain: "～だい counts machines and vehicles (cars, TVs, computers), ～まい counts thin flat things (paper, stamps, shirts, postcards), and ～かい counts how many times. Ask with なん + counter: なんだい, なんまい, なんかい. Watch the sound change: いっかい (1 time), ろっかい, はっかい, じゅっかい.",
    examples: [
      { jp: "きってを ごまい かいました。", ro: "Kitte o gomai kaimashita.", en: "I bought five stamps." },
      { jp: "うちに くるまが にだい あります。", ro: "Uchi ni kuruma ga nidai arimasu.", en: "There are two cars at my house." },
      { jp: "その えいがを さんかい みました。", ro: "Sono eiga o sankai mimashita.", en: "I've watched that movie three times." }
    ],
    drills: [
      { type: "fill", jp: "きってを ＿＿ ください。", answer: "ごまい", options: ["ごまい", "ごだい", "いつつまい", "ごにん"], en: "Five stamps, please." },
      { type: "fill", jp: "うちに くるまが ＿＿ あります。", answer: "にだい", options: ["にだい", "にまい", "ふたり", "にかい"], en: "There are two cars at my house." },
      { type: "fill", jp: "コンピューターが ＿＿ ありますか。", answer: "なんだい", options: ["なんだい", "なんまい", "なんにん", "なんかい"], en: "How many computers are there?" },
      { type: "choose", q: "Which counter is used for stamps, paper and shirts?", answer: "～まい", options: ["～まい", "～だい", "～かい", "～にん"] },
      { type: "choose", q: "How do you say 'once / one time'?", answer: "いっかい", options: ["いっかい", "いちかい", "ひとかい", "いっだい"] },
      { type: "order", tiles: ["はがきを", "さんまい", "かいました"], en: "I bought three postcards." }
    ]
  },
  {
    id: "L11-4",
    lesson: 11,
    title: "Period に ～かい V",
    meaning: "~ times per (day / week / month / year)",
    explain: "To say how often, put the period + に, then the number of times: いっしゅうかんに さんかい = three times a week. The に here means 'per'. Ask with なんかい. Gotcha: いちにち (one day), いっしゅうかん (one week), いっかげつ (one month), いちねん (one year).",
    examples: [
      { jp: "いっしゅうかんに さんかい テニスを します。", ro: "Isshūkan ni sankai tenisu o shimasu.", en: "I play tennis three times a week." },
      { jp: "いっかげつに にかい えいがを みます。", ro: "Ikkagetsu ni nikai eiga o mimasu.", en: "I watch a movie twice a month." },
      { jp: "いちにちに なんかい コーヒーを のみますか。", ro: "Ichinichi ni nankai kōhī o nomimasu ka.", en: "How many times a day do you drink coffee?" }
    ],
    drills: [
      { type: "fill", jp: "いっしゅうかん＿＿ にかい プールへ いきます。", answer: "に", options: ["に", "へ", "を", "が"], en: "I go to the pool twice a week." },
      { type: "fill", jp: "いっかげつに ＿＿ えいがを みます。", answer: "いっかい", options: ["いっかい", "いちかい", "ひとつ", "いちまい"], en: "I watch a movie once a month." },
      { type: "choose", q: "What does いちにちに さんかい mean?", answer: "three times a day", options: ["three times a day", "for three days", "three days ago", "on the third day"] },
      { type: "choose", q: "How do you ask 'how many times'?", answer: "なんかい", options: ["なんかい", "なんじかん", "なんにん", "いくら"] },
      { type: "order", tiles: ["いっしゅうかんに", "さんかい", "テニスを", "します"], en: "I play tennis three times a week." },
      { type: "order", tiles: ["いちねんに", "いっかい", "くにへ", "かえります"], en: "I go back to my country once a year." }
    ]
  },
  {
    id: "L11-5",
    lesson: 11,
    title: "Duration: ～じかん・～しゅうかん・～かげつ・～ねん / どのくらい / かかります",
    meaning: "for ~ hours/weeks/months/years; how long?; it takes",
    explain: "Lengths of time are ～ふん (minutes), ～じかん (hours), ～にち (days), ～しゅうかん (weeks), ～かげつ (months), ～ねん (years). A duration goes straight before the verb with NO particle: さんじかん べんきょうしました. Ask 'how long?' with どのくらい, add ～ぐらい for 'about', and use かかります for 'it takes (time/money)'. Gotcha: ろっかげつ = six months, but ろくがつ = June.",
    examples: [
      { jp: "にほんごを さんじかん べんきょうしました。", ro: "Nihongo o sanjikan benkyō shimashita.", en: "I studied Japanese for three hours." },
      { jp: "うちから えきまで じてんしゃで じゅっぷん かかります。", ro: "Uchi kara eki made jitensha de juppun kakarimasu.", en: "It takes ten minutes by bicycle from my house to the station." },
      { jp: "にほんに どのくらい いますか。", ro: "Nihon ni dono kurai imasu ka.", en: "How long will you be in Japan?" }
    ],
    drills: [
      { type: "fill", jp: "とうきょうから おおさかまで しんかんせんで ＿＿ かかります。", answer: "にじかんはんぐらい", options: ["にじかんはんぐらい", "にじはんごろ", "にじかんはんに", "にじかんはんを"], en: "It takes about two and a half hours from Tokyo to Osaka by shinkansen." },
      { type: "fill", jp: "にほんに ＿＿ いますか。", answer: "どのくらい", options: ["どのくらい", "いくつ", "なんかい", "いつ"], en: "How long will you be in Japan?" },
      { type: "choose", q: "Which is 'six months'?", answer: "ろっかげつ", options: ["ろっかげつ", "ろくかげつ", "ろっかつ", "ろくがつ"] },
      { type: "choose", q: "Which correctly says 'I studied Japanese for three hours'?", answer: "にほんごを さんじかん べんきょうしました。", options: ["にほんごを さんじかん べんきょうしました。", "にほんごを さんじかんに べんきょうしました。", "にほんごを さんじかんを べんきょうしました。", "にほんごを さんじかんが べんきょうしました。"] },
      { type: "order", tiles: ["えきまで", "あるいて", "じゅっぷん", "かかります"], en: "It takes ten minutes to the station on foot." },
      { type: "order", tiles: ["かいしゃを", "いっしゅうかん", "やすみました"], en: "I took a week off work." }
    ]
  },
  {
    id: "L11-6",
    lesson: 11,
    title: "～だけ",
    meaning: "only ~",
    explain: "だけ attaches directly to a noun or a quantity to mean 'only': にちようびだけ, ひとりだけ. With a quantity it usually comes before the verb, just like the bare quantity: きってを いちまいだけ かいました. It sounds neutral, not negative.",
    examples: [
      { jp: "やすみは にちようびだけです。", ro: "Yasumi wa nichiyōbi dake desu.", en: "My only day off is Sunday." },
      { jp: "きってを いちまいだけ かいました。", ro: "Kitte o ichimai dake kaimashita.", en: "I bought only one stamp." },
      { jp: "ごふんだけ やすみましょう。", ro: "Gofun dake yasumimashō.", en: "Let's rest for just five minutes." }
    ],
    drills: [
      { type: "fill", jp: "やすみは にちようび＿＿です。", answer: "だけ", options: ["だけ", "ぐらい", "ごろ", "も"], en: "My only day off is Sunday." },
      { type: "fill", jp: "ビールを いっぽん＿＿ のみました。", answer: "だけ", options: ["だけ", "を", "が", "に"], en: "I drank only one bottle of beer." },
      { type: "choose", q: "What does ひとりだけ mean?", answer: "only one person", options: ["only one person", "about one person", "one person each", "every person"] },
      { type: "order", tiles: ["きってを", "いちまいだけ", "かいました"], en: "I bought only one stamp." },
      { type: "order", tiles: ["わたしの", "うちには", "テレビが", "いちだいだけ", "あります"], en: "There is only one TV in my house." }
    ]
  },

  // ───────────────────────── LESSON 12 ─────────────────────────
  {
    id: "L12-1",
    lesson: 12,
    title: "N / な-adj でした・じゃ ありませんでした",
    meaning: "was / was not (nouns and な-adjectives)",
    explain: "Nouns and な-adjectives work the same way at the end of a sentence: です becomes でした (was), and じゃ ありません becomes じゃ ありませんでした (was not). Example: しずかです → しずかでした → しずかじゃ ありませんでした. Gotcha: never add かった to a な-adjective (きれいかった is wrong, even though きれい ends in い).",
    examples: [
      { jp: "きのうは あめでした。", ro: "Kinō wa ame deshita.", en: "It was rainy yesterday." },
      { jp: "パーティーは にぎやかでした。", ro: "Pātī wa nigiyaka deshita.", en: "The party was lively." },
      { jp: "しけんは かんたんじゃ ありませんでした。", ro: "Shiken wa kantan ja arimasen deshita.", en: "The exam was not easy." }
    ],
    drills: [
      { type: "fill", jp: "きのうは やすみ＿＿。", answer: "でした", options: ["でした", "かったです", "です", "じゃ ありません"], en: "Yesterday was a day off." },
      { type: "fill", jp: "ホテルは しずか＿＿。", answer: "じゃ ありませんでした", options: ["じゃ ありませんでした", "くなかったです", "じゃ ありません", "でした"], en: "The hotel was not quiet." },
      { type: "choose", q: "Past negative of げんきです?", answer: "げんきじゃ ありませんでした", options: ["げんきじゃ ありませんでした", "げんきくなかったです", "げんきでしたじゃ ありません", "げんきじゃ ありません"] },
      { type: "choose", q: "きれい is a な-adjective. Which says 'The room was clean'?", answer: "へやは きれいでした。", options: ["へやは きれいでした。", "へやは きれかったです。", "へやは きれいかったです。", "へやは きれいくなかったです。"] },
      { type: "order", tiles: ["きのうの", "パーティーは", "にぎやかでした"], en: "Yesterday's party was lively." },
      { type: "order", tiles: ["しけんは", "かんたんじゃ", "ありませんでした"], en: "The exam wasn't easy." }
    ]
  },
  {
    id: "L12-2",
    lesson: 12,
    title: "い-adj かったです・くなかったです",
    meaning: "was / was not (い-adjectives)",
    explain: "For い-adjectives, drop the final い: past = ～かったです, past negative = ～くなかったです (たかい → たかかったです / たかくなかったです). Do NOT say たかいでした. Gotcha: いい is irregular and conjugates from よい: よかったです, よくなかったです (never いかった).",
    examples: [
      { jp: "すきやきは おいしかったです。", ro: "Sukiyaki wa oishikatta desu.", en: "The sukiyaki was delicious." },
      { jp: "きのうは さむくなかったです。", ro: "Kinō wa samukunakatta desu.", en: "It wasn't cold yesterday." },
      { jp: "りょこうは よかったです。", ro: "Ryokō wa yokatta desu.", en: "The trip was good." }
    ],
    drills: [
      { type: "fill", jp: "きのうは ＿＿です。", answer: "あつかった", options: ["あつかった", "あついでした", "あつくなかった", "あつかったでした"], en: "Yesterday was hot." },
      { type: "fill", jp: "りょこうは ＿＿です。", answer: "よかった", options: ["よかった", "いかった", "いいかった", "よくなかった"], en: "The trip was good." },
      { type: "fill", jp: "テストは むずかしく＿＿です。", answer: "なかった", options: ["なかった", "ないでした", "ありません", "かった"], en: "The test was not difficult." },
      { type: "choose", q: "Past of たかいです?", answer: "たかかったです", options: ["たかかったです", "たかいでした", "たかいかったです", "たかくでした"] },
      { type: "choose", q: "Past negative of いいです?", answer: "よくなかったです", options: ["よくなかったです", "いくなかったです", "いいじゃ ありませんでした", "いいくなかったです"] },
      { type: "order", tiles: ["すきやきは", "とても", "おいしかったです"], en: "The sukiyaki was very tasty." },
      { type: "order", tiles: ["きのうは", "あまり", "さむくなかったです"], en: "It wasn't very cold yesterday." }
    ]
  },
  {
    id: "L12-3",
    lesson: 12,
    title: "N1 は N2 より adj です",
    meaning: "N1 is more adj than N2",
    explain: "より means 'than'. The thing before より is what you compare AGAINST: ひこうきは でんしゃより はやいです = planes are faster than trains. Japanese adjectives don't change for 'more' — より does all the work.",
    examples: [
      { jp: "ひこうきは でんしゃより はやいです。", ro: "Hikōki wa densha yori hayai desu.", en: "Planes are faster than trains." },
      { jp: "ほっかいどうは おおさかより さむいです。", ro: "Hokkaidō wa Ōsaka yori samui desu.", en: "Hokkaido is colder than Osaka." },
      { jp: "この かばんは あの かばんより かるいです。", ro: "Kono kaban wa ano kaban yori karui desu.", en: "This bag is lighter than that bag." }
    ],
    drills: [
      { type: "fill", jp: "ひこうきは でんしゃ＿＿ はやいです。", answer: "より", options: ["より", "ほうが", "から", "まで"], en: "Planes are faster than trains." },
      { type: "fill", jp: "ほっかいどうは おおさかより ＿＿です。", answer: "さむい", options: ["さむい", "さむいで", "さむく", "さむいな"], en: "Hokkaido is colder than Osaka." },
      { type: "choose", q: "ペキンは とうきょうより おおきいです。 Which is bigger?", answer: "ペキン", options: ["ペキン", "とうきょう", "They are the same size", "It doesn't say"] },
      { type: "choose", q: "Which says 'Today is hotter than yesterday'?", answer: "きょうは きのうより あついです。", options: ["きょうは きのうより あついです。", "きのうは きょうより あついです。", "きょうより きのうは あついです。", "きょうは きのうから あついです。"] },
      { type: "order", tiles: ["この", "かばんは", "あの", "かばんより", "かるいです"], en: "This bag is lighter than that bag." },
      { type: "order", tiles: ["きょうは", "きのうより", "あついです"], en: "Today is hotter than yesterday." }
    ]
  },
  {
    id: "L12-4",
    lesson: 12,
    title: "N1 と N2 と どちらが adj ですか / N の ほうが / どちらも",
    meaning: "Which is more adj, N1 or N2? / N is more adj / both",
    explain: "To compare TWO things ask: N1 と N2 と どちらが adj ですか. Answer with N の ほうが adj です ('N is more ~'). If they're equal, say どちらも adj です. Gotcha: use どちら (not どれ) for a choice between two; どれ is for three or more.",
    examples: [
      { jp: "サッカーと やきゅうと どちらが おもしろいですか。", ro: "Sakkā to yakyū to dochira ga omoshiroi desu ka.", en: "Which is more interesting, soccer or baseball?" },
      { jp: "やきゅうの ほうが おもしろいです。", ro: "Yakyū no hō ga omoshiroi desu.", en: "Baseball is more interesting." },
      { jp: "どちらも すきです。", ro: "Dochira mo suki desu.", en: "I like both." }
    ],
    drills: [
      { type: "fill", jp: "コーヒーと こうちゃと ＿＿が すきですか。", answer: "どちら", options: ["どちら", "どれ", "なに", "だれ"], en: "Which do you like better, coffee or tea?" },
      { type: "fill", jp: "こうちゃの ＿＿が すきです。", answer: "ほう", options: ["ほう", "より", "ほか", "だけ"], en: "I like tea better." },
      { type: "fill", jp: "でんしゃと バスと どちらが はやいですか。…＿＿ はやいです。", answer: "どちらも", options: ["どちらも", "どちら", "どれも", "なにも"], en: "Which is faster, the train or the bus? — Both are fast." },
      { type: "choose", q: "When comparing TWO things, which question word do you use?", answer: "どちら", options: ["どちら", "どれ", "どこ", "なん"] },
      { type: "order", tiles: ["サッカーと", "やきゅうと", "どちらが", "おもしろいですか"], en: "Which is more interesting, soccer or baseball?" },
      { type: "order", tiles: ["やきゅうの", "ほうが", "おもしろいです"], en: "Baseball is more interesting." }
    ]
  },
  {
    id: "L12-5",
    lesson: 12,
    title: "N の なかで なに/どこ/だれ/いつが いちばん adj ですか",
    meaning: "Among N, what/where/who/when is the most adj?",
    explain: "For three or more things use N の なかで (or just N で) + question word + が + いちばん + adjective. いちばん means 'the most / number one'. Gotcha: question words always take が, never は, and the answer keeps が too: てんぷらが いちばん おいしいです.",
    examples: [
      { jp: "にほんりょうりの なかで なにが いちばん おいしいですか。", ro: "Nihon ryōri no naka de nani ga ichiban oishii desu ka.", en: "Of all Japanese foods, what is the most delicious?" },
      { jp: "てんぷらが いちばん おいしいです。", ro: "Tenpura ga ichiban oishii desu.", en: "Tempura is the most delicious." },
      { jp: "きせつの なかで いつが いちばん すきですか。", ro: "Kisetsu no naka de itsu ga ichiban suki desu ka.", en: "Which season do you like best?" }
    ],
    drills: [
      { type: "fill", jp: "きせつの なかで いつ＿＿ いちばん すきですか。", answer: "が", options: ["が", "は", "を", "も"], en: "Which season do you like best?" },
      { type: "fill", jp: "にほんりょうりの なかで ＿＿が いちばん おいしいですか。", answer: "なに", options: ["なに", "どちら", "だれ", "どこ"], en: "Of all Japanese foods, what is the most delicious?" },
      { type: "fill", jp: "かぞくで ＿＿が いちばん りょうりが じょうずですか。", answer: "だれ", options: ["だれ", "なに", "どこ", "いつ"], en: "Who in your family is the best cook?" },
      { type: "choose", q: "What does いちばん mean in this pattern?", answer: "the most / number one", options: ["the most / number one", "only", "more than", "both"] },
      { type: "order", tiles: ["てんぷらが", "いちばん", "おいしいです"], en: "Tempura is the most delicious." },
      { type: "order", tiles: ["スポーツの なかで", "なにが", "いちばん", "すきですか"], en: "Of all sports, which do you like best?" }
    ]
  },

  // ───────────────────────── LESSON 13 ─────────────────────────
  {
    id: "L13-1",
    lesson: 13,
    title: "N が ほしいです",
    meaning: "I want (a thing)",
    explain: "ほしい means 'want (something)' and the thing takes が: くるまが ほしいです. ほしい is an い-adjective, so the negative is ほしくないです and the past is ほしかったです. Gotcha: it describes the speaker's own wish (or asks the listener's); don't use it to describe a third person's wants or to offer something to a superior.",
    examples: [
      { jp: "わたしは くるまが ほしいです。", ro: "Watashi wa kuruma ga hoshii desu.", en: "I want a car." },
      { jp: "いま なにが いちばん ほしいですか。", ro: "Ima nani ga ichiban hoshii desu ka.", en: "What do you want most right now?" },
      { jp: "いまは なにも ほしくないです。", ro: "Ima wa nani mo hoshikunai desu.", en: "I don't want anything right now." }
    ],
    drills: [
      { type: "fill", jp: "わたしは あたらしい くるま＿＿ ほしいです。", answer: "が", options: ["が", "を", "に", "で"], en: "I want a new car." },
      { type: "fill", jp: "いまは なにも ほしく＿＿。", answer: "ないです", options: ["ないです", "じゃ ありません", "ません", "なかったです"], en: "I don't want anything right now." },
      { type: "choose", q: "ほしい conjugates like…", answer: "an い-adjective", options: ["an い-adjective", "a な-adjective", "a Group 1 verb", "a noun"] },
      { type: "choose", q: "Which sentence is correct?", answer: "わたしは ともだちが ほしいです。", options: ["わたしは ともだちが ほしいです。", "わたしは ともだちを ほしいです。", "わたしは ともだちが ほしいます。", "わたしは ともだちが ほしいだです。"] },
      { type: "order", tiles: ["わたしは", "あたらしい", "くつが", "ほしいです"], en: "I want new shoes." },
      { type: "order", tiles: ["いま", "なにが", "いちばん", "ほしいですか"], en: "What do you want most right now?" }
    ]
  },
  {
    id: "L13-2",
    lesson: 13,
    title: "V-stem たいです",
    meaning: "I want to do V",
    explain: "Take the ます-stem (drop ます) and add たいです: のみます → のみたいです. たい conjugates like an い-adjective: のみたくないです (don't want to), のみたかったです (wanted to). The object can take を or が: ビールが/を のみたいです. Like ほしい, it's for your own wishes or asking the listener.",
    examples: [
      { jp: "おきなわへ いきたいです。", ro: "Okinawa e ikitai desu.", en: "I want to go to Okinawa." },
      { jp: "なにを たべたいですか。", ro: "Nani o tabetai desu ka.", en: "What do you want to eat?" },
      { jp: "つかれましたから、なにも したくないです。", ro: "Tsukaremashita kara, nani mo shitakunai desu.", en: "I'm tired, so I don't want to do anything." }
    ],
    drills: [
      { type: "fill", jp: "てんぷらが ＿＿です。", answer: "たべたい", options: ["たべたい", "たべりたい", "たべるたい", "たべてたい"], en: "I want to eat tempura." },
      { type: "fill", jp: "にほんへ ＿＿です。", answer: "いきたい", options: ["いきたい", "いくたい", "いってたい", "いきますたい"], en: "I want to go to Japan." },
      { type: "fill", jp: "きょうは なにも ＿＿です。", answer: "したくない", options: ["したくない", "したい", "しないたい", "したかった"], en: "I don't want to do anything today." },
      { type: "choose", q: "How do you turn のみます into 'want to drink'?", answer: "のみたいです", options: ["のみたいです", "のむたいです", "のんでたいです", "のみますたいです"] },
      { type: "choose", q: "Which is 'I wanted to see it' (past)?", answer: "みたかったです", options: ["みたかったです", "みたいでした", "みたいかったです", "みましたたいです"] },
      { type: "order", tiles: ["なつやすみに", "どこへ", "いきたいですか"], en: "Where do you want to go for the summer holidays?" },
      { type: "order", tiles: ["つめたい", "ビールが", "のみたいです"], en: "I want to drink a cold beer." }
    ]
  },
  {
    id: "L13-3",
    lesson: 13,
    title: "Place へ V-stem / N に いきます・きます・かえります",
    meaning: "go / come / return (somewhere) to do something",
    explain: "To give the purpose of going, put the verb's ます-stem + に before いきます/きます/かえります: くつを かいに いきます (go to buy shoes). With a する-noun you can use the noun alone + に: かいものに いきます, さんぽに いきます. Gotcha: it's the stem (かい), not the dictionary form (かう) or て-form (かって).",
    examples: [
      { jp: "こうべへ インドりょうりを たべに いきます。", ro: "Kōbe e Indo ryōri o tabe ni ikimasu.", en: "I'm going to Kobe to eat Indian food." },
      { jp: "デパートへ くつを かいに いきます。", ro: "Depāto e kutsu o kai ni ikimasu.", en: "I'm going to the department store to buy shoes." },
      { jp: "こうべへ かいものに いきます。", ro: "Kōbe e kaimono ni ikimasu.", en: "I'm going to Kobe to shop." }
    ],
    drills: [
      { type: "fill", jp: "デパートへ くつを ＿＿に いきます。", answer: "かい", options: ["かい", "かう", "かって", "かいます"], en: "I'm going to the department store to buy shoes." },
      { type: "fill", jp: "こうべへ かいもの＿＿ いきます。", answer: "に", options: ["に", "を", "で", "が"], en: "I'm going to Kobe to shop." },
      { type: "fill", jp: "としょかんへ ほんを ＿＿に いきます。", answer: "かり", options: ["かり", "かりる", "かりて", "かって"], en: "I'm going to the library to borrow books." },
      { type: "choose", q: "Which says 'I'm going to Japan to study'?", answer: "にほんへ べんきょうに いきます。", options: ["にほんへ べんきょうに いきます。", "にほんへ べんきょうを いきます。", "にほんへ べんきょうが いきます。", "にほんへ べんきょうしたいに いきます。"] },
      { type: "order", tiles: ["こうえんへ", "さんぽに", "いきます"], en: "I'm going to the park for a walk." },
      { type: "order", tiles: ["ともだちが", "うちへ", "あそびに", "きます"], en: "A friend is coming to my house to hang out." }
    ]
  },
  {
    id: "L13-4",
    lesson: 13,
    title: "どこか / なにか",
    meaning: "somewhere / something",
    explain: "Question word + か = 'some-': どこか (somewhere), なにか (something). The particles へ and を after them are usually dropped. A question with どこか/なにか is a yes/no question, so answer はい or いいえ. Contrast: question word + も + NEGATIVE = 'nowhere / nothing' (どこも いきません, なにも たべません).",
    examples: [
      { jp: "ふゆやすみは どこか いきましたか。", ro: "Fuyuyasumi wa doko ka ikimashita ka.", en: "Did you go anywhere over the winter holidays?" },
      { jp: "のどが かわきましたから、なにか のみたいです。", ro: "Nodo ga kawakimashita kara, nani ka nomitai desu.", en: "I'm thirsty, so I want to drink something." }
    ],
    drills: [
      { type: "fill", jp: "のどが かわきましたから、＿＿ のみたいです。", answer: "なにか", options: ["なにか", "なにも", "なに", "なにが"], en: "I'm thirsty, so I want to drink something." },
      { type: "fill", jp: "にちようびは どこか いきましたか。…いいえ、どこ＿＿ いきませんでした。", answer: "も", options: ["も", "か", "が", "を"], en: "Did you go anywhere on Sunday? — No, I didn't go anywhere." },
      { type: "choose", q: "What does どこか いきましたか ask?", answer: "Did you go anywhere?", options: ["Did you go anywhere?", "Where did you go?", "Did you go everywhere?", "Why didn't you go?"] },
      { type: "choose", q: "Which word means 'nothing' (used with a negative verb)?", answer: "なにも", options: ["なにも", "なにか", "なに", "なにが"] },
      { type: "order", tiles: ["いっしょに", "なにか", "たべませんか"], en: "Shall we eat something together?" },
      { type: "order", tiles: ["なつやすみは", "どこか", "いきましたか"], en: "Did you go anywhere for the summer holidays?" }
    ]
  },

  // ───────────────────────── LESSON 14 ─────────────────────────
  {
    id: "L14-1",
    lesson: 14,
    title: "Verb groups & the て-form",
    meaning: "how to make the て-form",
    explain: "Group 1 (い-sound before ます): い・ち・り → って (かいます→かって, まちます→まって); み・び・に → んで (のみます→のんで, よびます→よんで); き → いて, ぎ → いで (かきます→かいて, いそぎます→いそいで); し → して. BIG exception: いきます → いって. Group 2 (mostly え-sound before ます, plus some like みます, おきます, かります, います): drop ます + て (たべて, みて). Group 3: します → して, きます → きて.",
    examples: [
      { jp: "かいます → かって・まちます → まって・かえります → かえって", ro: "kaimasu → katte, machimasu → matte, kaerimasu → kaette", en: "い・ち・り → って" },
      { jp: "のみます → のんで・よびます → よんで・しにます → しんで", ro: "nomimasu → nonde, yobimasu → yonde, shinimasu → shinde", en: "み・び・に → んで" },
      { jp: "かきます → かいて・いそぎます → いそいで・いきます → いって", ro: "kakimasu → kaite, isogimasu → isoide, ikimasu → itte", en: "き → いて, ぎ → いで (but いきます → いって!)" }
    ],
    drills: [
      { type: "choose", q: "て-form of まちます?", answer: "まって", options: ["まって", "まちて", "まいて", "まんで"] },
      { type: "choose", q: "て-form of いきます?", answer: "いって", options: ["いって", "いいて", "いきて", "いんで"] },
      { type: "choose", q: "て-form of よびます?", answer: "よんで", options: ["よんで", "よびて", "よって", "よいで"] },
      { type: "choose", q: "て-form of いそぎます?", answer: "いそいで", options: ["いそいで", "いそいて", "いそって", "いそぎて"] },
      { type: "choose", q: "Which of these is a Group 2 verb?", answer: "みせます", options: ["みせます", "かえります", "はなします", "まちます"] },
      { type: "fill", jp: "でんきを ＿＿ ください。", answer: "つけて", options: ["つけて", "つけって", "ついて", "つけいて"], en: "Please turn on the light. (つけます)" },
      { type: "order", tiles: ["なまえと", "じゅうしょを", "かいて", "ください"], en: "Please write your name and address." }
    ]
  },
  {
    id: "L14-2",
    lesson: 14,
    title: "V て ください",
    meaning: "Please do V",
    explain: "て-form + ください makes a polite request or instruction. Add すみませんが in front to soften it. It's fine for everyday requests, but it's still a kind of instruction, so be careful using it toward superiors.",
    examples: [
      { jp: "ちょっと まって ください。", ro: "Chotto matte kudasai.", en: "Please wait a moment." },
      { jp: "すみませんが、この かんじの よみかたを おしえて ください。", ro: "Sumimasen ga, kono kanji no yomikata o oshiete kudasai.", en: "Excuse me, could you tell me how to read this kanji?" },
      { jp: "もう すこし ゆっくり はなして ください。", ro: "Mō sukoshi yukkuri hanashite kudasai.", en: "Please speak a little more slowly." }
    ],
    drills: [
      { type: "fill", jp: "ここに なまえを ＿＿ ください。", answer: "かいて", options: ["かいて", "かきて", "かって", "かく"], en: "Please write your name here." },
      { type: "fill", jp: "すみませんが、しおを ＿＿ ください。", answer: "とって", options: ["とって", "とりて", "といて", "とんで"], en: "Excuse me, could you pass the salt?" },
      { type: "fill", jp: "もう すこし ＿＿ はなして ください。", answer: "ゆっくり", options: ["ゆっくり", "すぐ", "まっすぐ", "しずか"], en: "Please speak a little more slowly." },
      { type: "choose", q: "How do you say 'Please show me your passport'?", answer: "パスポートを みせて ください。", options: ["パスポートを みせて ください。", "パスポートを みて ください。", "パスポートを みせって ください。", "パスポートを みせます ください。"] },
      { type: "choose", q: "What does いそいで ください mean?", answer: "Please hurry.", options: ["Please hurry.", "Please wait.", "Please don't hurry.", "Please stop."] },
      { type: "order", tiles: ["ちょっと", "まって", "ください"], en: "Please wait a moment." },
      { type: "order", tiles: ["しんごうを", "みぎへ", "まがって", "ください"], en: "Please turn right at the traffic light." }
    ]
  },
  {
    id: "L14-3",
    lesson: 14,
    title: "V て います (in progress)",
    meaning: "is doing V (right now)",
    explain: "て-form + います describes an action in progress: いま でんわを かけて います = I'm on the phone now. The negative is ～て いません, the question ～て いますか. It's often used with いま.",
    examples: [
      { jp: "ベイカーさんは いま でんわを かけて います。", ro: "Beikā-san wa ima denwa o kakete imasu.", en: "Mr. Baker is on the phone now." },
      { jp: "いま なにを して いますか。", ro: "Ima nani o shite imasu ka.", en: "What are you doing now?" },
      { jp: "こどもたちは こうえんで あそんで います。", ro: "Kodomotachi wa kōen de asonde imasu.", en: "The children are playing in the park." }
    ],
    drills: [
      { type: "fill", jp: "ベイカーさんは いま でんわを ＿＿ います。", answer: "かけて", options: ["かけて", "かけって", "かいて", "かけ"], en: "Mr. Baker is on the phone now." },
      { type: "fill", jp: "いま なにを ＿＿ いますか。", answer: "して", options: ["して", "しって", "きて", "すて"], en: "What are you doing now?" },
      { type: "fill", jp: "こどもたちは こうえんで ＿＿ います。", answer: "あそんで", options: ["あそんで", "あそびて", "あそって", "あそいで"], en: "The children are playing in the park." },
      { type: "choose", q: "What does いま ほんを よんで います mean?", answer: "I'm reading a book now.", options: ["I'm reading a book now.", "I'm going to read a book now.", "I read a book earlier.", "Please read a book now."] },
      { type: "order", tiles: ["いま", "テレビを", "みて", "います"], en: "I'm watching TV now." },
      { type: "order", tiles: ["マリアさんは", "どこで", "まって", "いますか"], en: "Where is Maria waiting?" }
    ]
  },
  {
    id: "L14-4",
    lesson: 14,
    title: "V ましょうか",
    meaning: "Shall I do V? (offering help)",
    explain: "ます-stem + ましょうか offers to do something for the listener: タクシーを よびましょうか = Shall I call a taxi? Accept with ええ、おねがいします; decline with いいえ、けっこうです. Don't confuse it with ～ましょう (Let's do ~).",
    examples: [
      { jp: "かさを かしましょうか。", ro: "Kasa o kashimashō ka.", en: "Shall I lend you an umbrella?" },
      { jp: "タクシーを よびましょうか。…ええ、おねがいします。", ro: "Takushī o yobimashō ka. … Ee, onegai shimasu.", en: "Shall I call a taxi? — Yes, please." },
      { jp: "にもつを もちましょうか。…いいえ、けっこうです。", ro: "Nimotsu o mochimashō ka. … Iie, kekkō desu.", en: "Shall I carry your bags? — No, thank you." }
    ],
    drills: [
      { type: "fill", jp: "あついですね。まどを ＿＿か。", answer: "あけましょう", options: ["あけましょう", "あけて", "あけたい", "あけって"], en: "It's hot, isn't it. Shall I open the window?" },
      { type: "fill", jp: "タクシーを よびましょうか。…ええ、＿＿。", answer: "おねがいします", options: ["おねがいします", "いただきます", "どういたしまして", "しつれいします"], en: "Shall I call a taxi? — Yes, please." },
      { type: "fill", jp: "さむいですね。エアコンを ＿＿か。", answer: "けしましょう", options: ["けしましょう", "けして", "けしたい", "けしって"], en: "It's cold, isn't it. Shall I turn off the air conditioner?" },
      { type: "choose", q: "What does にもつを もちましょうか mean?", answer: "Shall I carry your bags?", options: ["Shall I carry your bags?", "Let's carry the bags.", "Please carry my bags.", "I'm carrying the bags."] },
      { type: "choose", q: "Politely decline てつだいましょうか:", answer: "いいえ、けっこうです。", options: ["いいえ、けっこうです。", "はい、てつだいます。", "いいえ、てつだいません。", "どういたしまして。"] },
      { type: "order", tiles: ["わたしが", "しゃしんを", "とりましょうか"], en: "Shall I take the photo?" }
    ]
  },
  {
    id: "L14-5",
    lesson: 14,
    title: "N が V (describing what you see)",
    meaning: "describing a scene or natural phenomenon",
    explain: "When you simply report something you see or notice — weather, something arriving, something missing — the subject takes が, not は: あめが ふって います (It's raining). は would make it a topic you're commenting on; が just presents the new information.",
    examples: [
      { jp: "あめが ふって います。", ro: "Ame ga futte imasu.", en: "It's raining." },
      { jp: "あ、バスが きました。", ro: "A, basu ga kimashita.", en: "Oh, the bus has come." },
      { jp: "ロペスさんが いませんね。", ro: "Ropesu-san ga imasen ne.", en: "Mr. Lopez isn't here, is he." }
    ],
    drills: [
      { type: "fill", jp: "そとは あめ＿＿ ふって います。", answer: "が", options: ["が", "を", "に", "で"], en: "It's raining outside." },
      { type: "fill", jp: "あ、バス＿＿ きましたよ。", answer: "が", options: ["が", "を", "に", "で"], en: "Oh, the bus is here." },
      { type: "choose", q: "What does ゆきが ふって います mean?", answer: "It's snowing.", options: ["It's snowing.", "It snowed yesterday.", "It will snow.", "It isn't snowing."] },
      { type: "choose", q: "Why が (not は) in あめが ふって います?", answer: "It simply reports something just observed (new information).", options: ["It simply reports something just observed (new information).", "Because あめ is being compared with something.", "Because ふります always takes が as its object.", "Because the sentence is a question."] },
      { type: "order", tiles: ["そとは", "ゆきが", "ふって", "います"], en: "It's snowing outside." }
    ]
  },

  // ───────────────────────── LESSON 15 ─────────────────────────
  {
    id: "L15-1",
    lesson: 15,
    title: "V て も いいですか",
    meaning: "May I do V?",
    explain: "て-form + も いいです means 'it's OK to ~'; add か to ask permission. Say yes with ええ、いいですよ or ええ、どうぞ. To refuse gently, say すみません、ちょっと… rather than a flat 'no'.",
    examples: [
      { jp: "しゃしんを とっても いいですか。", ro: "Shashin o totte mo ii desu ka.", en: "May I take a photo?" },
      { jp: "ここに すわっても いいですか。…ええ、どうぞ。", ro: "Koko ni suwatte mo ii desu ka. … Ee, dōzo.", en: "May I sit here? — Yes, go ahead." },
      { jp: "この カタログを もらっても いいですか。", ro: "Kono katarogu o moratte mo ii desu ka.", en: "May I have this catalogue?" }
    ],
    drills: [
      { type: "fill", jp: "しゃしんを ＿＿も いいですか。", answer: "とって", options: ["とって", "とりて", "といて", "とんで"], en: "May I take a photo?" },
      { type: "fill", jp: "ここに ＿＿も いいですか。", answer: "すわって", options: ["すわって", "すわりて", "すわんで", "すわいて"], en: "May I sit here?" },
      { type: "fill", jp: "この えんぴつを ＿＿も いいですか。", answer: "つかって", options: ["つかって", "つかいて", "つかんで", "つかて"], en: "May I use this pencil?" },
      { type: "choose", q: "What does まどを あけても いいですか mean?", answer: "May I open the window?", options: ["May I open the window?", "Please open the window.", "Shall I open the window?", "You must not open the window."] },
      { type: "choose", q: "Which is a polite 'yes, go ahead'?", answer: "ええ、どうぞ。", options: ["ええ、どうぞ。", "いいえ、どうぞ。", "ええ、いけません。", "はい、まだです。"] },
      { type: "order", tiles: ["この", "カタログを", "もらっても", "いいですか"], en: "May I have this catalogue?" }
    ]
  },
  {
    id: "L15-2",
    lesson: 15,
    title: "V ては いけません",
    meaning: "You must not do V",
    explain: "て-form + は いけません expresses prohibition: ここで たばこを すっては いけません. It's strong — used for rules and by people in authority. Don't say it to a superior. The answer to ～ても いいですか can be いいえ、いけません, but in conversation すみません、ちょっと… is softer.",
    examples: [
      { jp: "ここで たばこを すっては いけません。", ro: "Koko de tabako o sutte wa ikemasen.", en: "You must not smoke here." },
      { jp: "びじゅつかんで しゃしんを とっては いけません。", ro: "Bijutsukan de shashin o totte wa ikemasen.", en: "You must not take photos in the art museum." }
    ],
    drills: [
      { type: "fill", jp: "ここで たばこを ＿＿は いけません。", answer: "すって", options: ["すって", "すいて", "すんで", "すいって"], en: "You must not smoke here." },
      { type: "fill", jp: "びょういんで でんわを ＿＿は いけません。", answer: "かけて", options: ["かけて", "かいて", "かけって", "かけ"], en: "You must not make phone calls in the hospital." },
      { type: "fill", jp: "ここに くるまを とめて＿＿ いけません。", answer: "は", options: ["は", "も", "が", "を"], en: "You must not park your car here." },
      { type: "choose", q: "What does はいっては いけません mean?", answer: "You must not enter.", options: ["You must not enter.", "You may enter.", "Please enter.", "You don't have to enter."] },
      { type: "choose", q: "Which sentence GIVES permission?", answer: "すわっても いいです。", options: ["すわっても いいです。", "すわっては いけません。", "すわりません。", "すわっては いいです。"] },
      { type: "order", tiles: ["としょかんで", "たべものを", "たべては", "いけません"], en: "You must not eat food in the library." }
    ]
  },
  {
    id: "L15-3",
    lesson: 15,
    title: "V て います (state / habit / job)",
    meaning: "a continuing state, habit, or occupation",
    explain: "て います also describes a state that results from an action: けっこんして います (am married), すんで います (live), しって います (know). It also describes habits and jobs: この かいしゃは カメラを つくって います. Gotcha: 'I don't know' is しりません, NOT しって いません. すんで います takes に for the place.",
    examples: [
      { jp: "わたしは おおさかに すんで います。", ro: "Watashi wa Ōsaka ni sunde imasu.", en: "I live in Osaka." },
      { jp: "ロペスさんを しって いますか。…いいえ、しりません。", ro: "Ropesu-san o shitte imasu ka. … Iie, shirimasen.", en: "Do you know Mr. Lopez? — No, I don't." },
      { jp: "ベイカーさんは けっこんして います。", ro: "Beikā-san wa kekkon shite imasu.", en: "Mr. Baker is married." }
    ],
    drills: [
      { type: "fill", jp: "わたしは とうきょうに ＿＿ います。", answer: "すんで", options: ["すんで", "すみて", "すって", "すいて"], en: "I live in Tokyo." },
      { type: "fill", jp: "やまださんの でんわばんごうを しって いますか。…いいえ、＿＿。", answer: "しりません", options: ["しりません", "しって いません", "しりたくないです", "しって ください"], en: "Do you know Mr. Yamada's phone number? — No, I don't." },
      { type: "fill", jp: "ベイカーさんは ＿＿ いますか。…いいえ、どくしんです。", answer: "けっこんして", options: ["けっこんして", "けっこんしって", "けっこんしで", "けっこんきて"], en: "Is Mr. Baker married? — No, he's single." },
      { type: "choose", q: "Which particle goes with すんで います for the place?", answer: "に", options: ["に", "で", "を", "へ"] },
      { type: "choose", q: "Best meaning: いもうとは だいがくで けいざいを べんきょうして います。", answer: "My younger sister studies economics at university.", options: ["My younger sister studies economics at university.", "My younger sister studied economics at university.", "My younger sister wants to study economics.", "My younger sister will study economics next year."] },
      { type: "order", tiles: ["この", "かいしゃは", "カメラを", "つくって", "います"], en: "This company makes cameras." }
    ]
  },
  {
    id: "L15-4",
    lesson: 15,
    title: "N に のります・はいります・すわります / N に N を おきます",
    meaning: "get on / enter / sit (in, on) / put (something somewhere)",
    explain: "Verbs of entering or getting into/onto something mark that place with に: でんしゃに のります, きっさてんに はいります, いすに すわります. Likewise, where you put or write something takes に: ここに にもつを おきます. Gotcha: English says 'get ON a train' but Japanese uses に, never を.",
    examples: [
      { jp: "えきで でんしゃに のります。", ro: "Eki de densha ni norimasu.", en: "I get on the train at the station." },
      { jp: "きっさてんに はいりましょう。", ro: "Kissaten ni hairimashō.", en: "Let's go into the café." },
      { jp: "ここに にもつを おいて ください。", ro: "Koko ni nimotsu o oite kudasai.", en: "Please put your bags here." }
    ],
    drills: [
      { type: "fill", jp: "えきで でんしゃ＿＿ のります。", answer: "に", options: ["に", "を", "で", "へ"], en: "I get on the train at the station." },
      { type: "fill", jp: "きっさてん＿＿ はいりました。", answer: "に", options: ["に", "を", "で", "が"], en: "I went into the café." },
      { type: "fill", jp: "ここ＿＿ にもつを おいて ください。", answer: "に", options: ["に", "で", "を", "が"], en: "Please put your bags here." },
      { type: "choose", q: "Which particle marks what you get INTO (a bus, a room)?", answer: "に", options: ["に", "を", "で", "から"] },
      { type: "order", tiles: ["えきから", "バスに", "のります"], en: "I take the bus from the station." },
      { type: "order", tiles: ["この", "いすに", "すわって", "ください"], en: "Please sit on this chair." }
    ]
  },

  // ───────────────────────── LESSON 16 ─────────────────────────
  {
    id: "L16-1",
    lesson: 16,
    title: "V1 て、V2 て、V3",
    meaning: "do V1, then V2, then V3",
    explain: "Link actions in the order they happen using the て-form; only the LAST verb shows the tense and politeness: うちへ かえって、ばんごはんを たべました (I went home and ate dinner). You can chain two or three verbs this way.",
    examples: [
      { jp: "あさ ジョギングを して、シャワーを あびて、かいしゃへ いきます。", ro: "Asa jogingu o shite, shawā o abite, kaisha e ikimasu.", en: "In the morning I jog, take a shower, and go to work." },
      { jp: "こうべへ いって、えいがを みて、おちゃを のみました。", ro: "Kōbe e itte, eiga o mite, ocha o nomimashita.", en: "I went to Kobe, saw a movie, and had some tea." }
    ],
    drills: [
      { type: "fill", jp: "きのうは デパートへ ＿＿、かいものを しました。", answer: "いって", options: ["いって", "いきて", "いいて", "いくて"], en: "Yesterday I went to the department store and did some shopping." },
      { type: "fill", jp: "あさ おきて、シャワーを ＿＿、がっこうへ いきます。", answer: "あびて", options: ["あびて", "あんで", "あびって", "あびいて"], en: "In the morning I get up, take a shower, and go to school." },
      { type: "choose", q: "In 'V1て、V2て、V3ました', which part shows the tense?", answer: "The last verb", options: ["The last verb", "The first verb", "Every verb", "The particle て"] },
      { type: "choose", q: "What does ばんごはんを たべて、テレビを みて、ねました mean?", answer: "I ate dinner, watched TV, and went to bed.", options: ["I ate dinner, watched TV, and went to bed.", "I watched TV, ate dinner, and went to bed.", "I'll eat dinner, watch TV, and go to bed.", "I went to bed without eating dinner."] },
      { type: "order", tiles: ["うちへ", "かえって", "ばんごはんを", "たべました"], en: "I went home and ate dinner." },
      { type: "order", tiles: ["ぎんこうへ", "いって", "おかねを", "おろします"], en: "I'll go to the bank and withdraw some money." }
    ]
  },
  {
    id: "L16-2",
    lesson: 16,
    title: "い-adj くて / な-adj・N で",
    meaning: "joining adjectives and nouns ('… and …')",
    explain: "To join descriptions: い-adjective → drop い + くて (わかい → わかくて); な-adjective or noun → add で (しずかで, がくせいで). いい becomes よくて. Gotcha: only join qualities pointing the same way; for a contrast ('cheap BUT tasty') use が instead.",
    examples: [
      { jp: "ベイカーさんは わかくて、げんきです。", ro: "Beikā-san wa wakakute, genki desu.", en: "Mr. Baker is young and energetic." },
      { jp: "ならは しずかで、きれいな まちです。", ro: "Nara wa shizuka de, kirei na machi desu.", en: "Nara is a quiet, beautiful town." },
      { jp: "サリさんは インドネシアじんで、きょうとだいがくの りゅうがくせいです。", ro: "Sari-san wa Indoneshia-jin de, Kyōto Daigaku no ryūgakusei desu.", en: "Sari is Indonesian and an exchange student at Kyoto University." }
    ],
    drills: [
      { type: "fill", jp: "この へやは ＿＿、あかるいです。", answer: "ひろくて", options: ["ひろくて", "ひろいで", "ひろいくて", "ひろくで"], en: "This room is spacious and bright." },
      { type: "fill", jp: "ならは ＿＿、きれいな まちです。", answer: "しずかで", options: ["しずかで", "しずかくて", "しずかの", "しずかって"], en: "Nara is a quiet, beautiful town." },
      { type: "fill", jp: "サリさんは ＿＿、だいがくの りゅうがくせいです。", answer: "インドネシアじんで", options: ["インドネシアじんで", "インドネシアじんくて", "インドネシアじんです", "インドネシアじんな"], en: "Sari is Indonesian and a university exchange student." },
      { type: "choose", q: "How do you join いい with another adjective?", answer: "よくて", options: ["よくて", "いくて", "いいで", "よいで"] },
      { type: "order", tiles: ["この", "カメラは", "かるくて", "べんりです"], en: "This camera is light and convenient." },
      { type: "order", tiles: ["ロペスさんは", "ブラジルじんで", "かいしゃいんです"], en: "Mr. Lopez is Brazilian and a company employee." }
    ]
  },
  {
    id: "L16-3",
    lesson: 16,
    title: "V1 てから、V2",
    meaning: "after doing V1, (do) V2",
    explain: "て-form + から stresses that V2 happens only after V1 is done: しごとが おわってから、のみに いきます. Tense goes on the final verb. Gotcha: the subject inside the てから clause takes が, not は.",
    examples: [
      { jp: "しごとが おわってから、およぎに いきます。", ro: "Shigoto ga owatte kara, oyogi ni ikimasu.", en: "After work finishes, I'll go swimming." },
      { jp: "おかねを いれてから、ボタンを おして ください。", ro: "Okane o irete kara, botan o oshite kudasai.", en: "Please press the button after putting in the money." },
      { jp: "うちへ かえってから、ばんごはんを たべます。", ro: "Uchi e kaette kara, bangohan o tabemasu.", en: "I eat dinner after I get home." }
    ],
    drills: [
      { type: "fill", jp: "しごとが ＿＿から、のみに いきましょう。", answer: "おわって", options: ["おわって", "おわりて", "おわる", "おわんで"], en: "Let's go for a drink after work finishes." },
      { type: "fill", jp: "おかねを いれて＿＿、ボタンを おして ください。", answer: "から", options: ["から", "まで", "より", "が"], en: "Please press the button after putting in the money." },
      { type: "choose", q: "てがみを かいてから、でかけます — what happens first?", answer: "Writing the letter", options: ["Writing the letter", "Going out", "Both at the same time", "It doesn't say"] },
      { type: "choose", q: "Which is correct?", answer: "シャワーを あびてから、ねます。", options: ["シャワーを あびてから、ねます。", "シャワーを あびるてから、ねます。", "シャワーを あびから、ねます。", "シャワーを あびったから、ねます。"] },
      { type: "order", tiles: ["うちへ", "かえってから", "ばんごはんを", "たべます"], en: "I eat dinner after I get home." },
      { type: "order", tiles: ["ごはんを", "たべてから", "コーヒーを", "のみませんか"], en: "Shall we have coffee after we eat?" }
    ]
  },
  {
    id: "L16-4",
    lesson: 16,
    title: "N1 は N2 が adj",
    meaning: "N1 has (an adj) N2 / N1's N2 is adj",
    explain: "This pattern describes a feature of the topic: N1 は is what you're talking about, N2 が is the part being described. たかしさんは せが たかいです = Takashi is tall (lit. as for Takashi, height is high). おおさかは たべものが おいしいです = Osaka has great food. Gotcha: 'tall' for people is せが たかい, not おおきい.",
    examples: [
      { jp: "おおさかは たべものが おいしいです。", ro: "Ōsaka wa tabemono ga oishii desu.", en: "The food in Osaka is delicious." },
      { jp: "たかしさんは せが たかいです。", ro: "Takashi-san wa se ga takai desu.", en: "Takashi is tall." },
      { jp: "マリアさんは かみが ながいです。", ro: "Maria-san wa kami ga nagai desu.", en: "Maria has long hair." }
    ],
    drills: [
      { type: "fill", jp: "マリアさんは かみ＿＿ ながいです。", answer: "が", options: ["が", "を", "に", "で"], en: "Maria has long hair." },
      { type: "fill", jp: "とうきょうは ひと＿＿ おおいです。", answer: "が", options: ["が", "を", "に", "で"], en: "Tokyo has a lot of people." },
      { type: "fill", jp: "たかしさんは せが ＿＿です。", answer: "たかい", options: ["たかい", "ながい", "ひろい", "おもい"], en: "Takashi is tall." },
      { type: "choose", q: "What does ロペスさんは めが おおきいです mean?", answer: "Mr. Lopez has big eyes.", options: ["Mr. Lopez has big eyes.", "Mr. Lopez is big.", "Mr. Lopez's eyes are bigger than mine.", "Mr. Lopez looks at big things."] },
      { type: "order", tiles: ["おおさかは", "たべものが", "おいしいです"], en: "The food in Osaka is delicious." },
      { type: "order", tiles: ["この", "まちは", "みどりが", "おおいです"], en: "This town has a lot of greenery." }
    ]
  },
  {
    id: "L16-5",
    lesson: 16,
    title: "どうやって",
    meaning: "how (by what method / route)?",
    explain: "どうやって asks about the way or method of doing something — often directions: だいがくまで どうやって いきますか. Answer with a sequence of て-forms describing the steps. Don't confuse it with どうして (why) or どのくらい (how long / how much).",
    examples: [
      { jp: "だいがくまで どうやって いきますか。", ro: "Daigaku made dō yatte ikimasu ka.", en: "How do you get to the university?" },
      { jp: "えきから バスに のって、だいがくまえで おります。", ro: "Eki kara basu ni notte, daigakumae de orimasu.", en: "Take the bus from the station and get off at Daigakumae." },
      { jp: "この カメラは どうやって つかいますか。", ro: "Kono kamera wa dō yatte tsukaimasu ka.", en: "How do you use this camera?" }
    ],
    drills: [
      { type: "fill", jp: "ぎんこうまで ＿＿ いきますか。", answer: "どうやって", options: ["どうやって", "どうして", "どのくらい", "どちら"], en: "How do I get to the bank?" },
      { type: "fill", jp: "えきから ちかてつ＿＿ のって、なんばで おります。", answer: "に", options: ["に", "を", "で", "が"], en: "Take the subway from the station and get off at Namba." },
      { type: "choose", q: "どうやって asks about…", answer: "the way / method of doing something", options: ["the way / method of doing something", "the reason for something", "how long something takes", "where something is"] },
      { type: "choose", q: "Best answer to うちから かいしゃまで どうやって いきますか?", answer: "でんしゃで いきます。", options: ["でんしゃで いきます。", "いちじかん かかります。", "あさ はちじに いきます。", "あしたも いきます。"] },
      { type: "order", tiles: ["この", "カメラは", "どうやって", "つかいますか"], en: "How do you use this camera?" }
    ]
  },

  // ───────────────────────── LESSON 17 ─────────────────────────
  {
    id: "L17-1",
    lesson: 17,
    title: "The ない-form",
    meaning: "plain negative of verbs",
    explain: "Group 1: change the い-sound before ます to the あ-sound + ない (かきます → かかない, のみます → のまない). If it's い, it becomes わ: かいます → かわない. Group 2: drop ます + ない (たべない, みない). Group 3: します → しない, きます → こない.",
    examples: [
      { jp: "かきます → かかない・のみます → のまない・まちます → またない", ro: "kakimasu → kakanai, nomimasu → nomanai, machimasu → matanai", en: "Group 1: い-sound → あ-sound + ない" },
      { jp: "かいます → かわない・すいます → すわない", ro: "kaimasu → kawanai, suimasu → suwanai", en: "Group 1: い → わ (not あ!)" },
      { jp: "たべます → たべない・します → しない・きます → こない", ro: "tabemasu → tabenai, shimasu → shinai, kimasu → konai", en: "Group 2 & III" }
    ],
    drills: [
      { type: "choose", q: "ない-form of かいます (buy)?", answer: "かわない", options: ["かわない", "かあない", "かいない", "かかない"] },
      { type: "choose", q: "ない-form of きます (come)?", answer: "こない", options: ["こない", "きない", "かない", "くない"] },
      { type: "choose", q: "ない-form of まちます?", answer: "またない", options: ["またない", "まちない", "まらない", "まなない"] },
      { type: "choose", q: "ない-form of みます (see)?", answer: "みない", options: ["みない", "まない", "みらない", "みわない"] },
      { type: "choose", q: "ない-form of かえります (go home)?", answer: "かえらない", options: ["かえらない", "かえない", "かえりない", "かわない"] },
      { type: "fill", jp: "はなします → はな＿＿ない", answer: "さ", options: ["さ", "し", "せ", "た"], en: "speak → not speak" },
      { type: "order", tiles: ["ここで", "たばこを", "すわないで", "ください"], en: "Please don't smoke here." }
    ]
  },
  {
    id: "L17-2",
    lesson: 17,
    title: "V ないで ください",
    meaning: "Please don't do V",
    explain: "ない-form + で ください is a polite request NOT to do something: しゃしんを とらないで ください. You can add a reason with から before it: あぶないですから、おさないで ください.",
    examples: [
      { jp: "ここで しゃしんを とらないで ください。", ro: "Koko de shashin o toranaide kudasai.", en: "Please don't take photos here." },
      { jp: "だいじょうぶですから、しんぱいしないで ください。", ro: "Daijōbu desu kara, shinpai shinaide kudasai.", en: "It's fine, so please don't worry." },
      { jp: "ここに じてんしゃを おかないで ください。", ro: "Koko ni jitensha o okanaide kudasai.", en: "Please don't leave bicycles here." }
    ],
    drills: [
      { type: "fill", jp: "ここで しゃしんを ＿＿で ください。", answer: "とらない", options: ["とらない", "とりない", "とない", "とって"], en: "Please don't take photos here." },
      { type: "fill", jp: "だいじょうぶですから、＿＿ ください。", answer: "しんぱいしないで", options: ["しんぱいしないで", "しんぱいしなくて", "しんぱいさないで", "しんぱいしないて"], en: "It's fine, so please don't worry." },
      { type: "fill", jp: "あぶないですから、＿＿ ください。", answer: "おさないで", options: ["おさないで", "おしないで", "おさなくて", "おしてないで"], en: "It's dangerous, so please don't push." },
      { type: "choose", q: "What does わすれないで ください mean?", answer: "Please don't forget.", options: ["Please don't forget.", "Please forget it.", "I won't forget.", "You don't have to remember."] },
      { type: "order", tiles: ["ここに", "じてんしゃを", "おかないで", "ください"], en: "Please don't leave bicycles here." },
      { type: "order", tiles: ["としょかんの", "ほんですから", "なにも", "かかないで", "ください"], en: "It's a library book, so please don't write anything in it." }
    ]
  },
  {
    id: "L17-3",
    lesson: 17,
    title: "V なければ なりません",
    meaning: "must do V / have to do V",
    explain: "Take the ない-form, change the final い to ければ, and add なりません: のまない → のまなければ なりません. Even though it looks doubly negative, it means 'must' (lit. 'if I don't, it won't do'). Memorize なければ なりません as one block.",
    examples: [
      { jp: "くすりを のまなければ なりません。", ro: "Kusuri o nomanakereba narimasen.", en: "I have to take medicine." },
      { jp: "あした レポートを ださなければ なりません。", ro: "Ashita repōto o dasanakereba narimasen.", en: "I have to hand in a report tomorrow." },
      { jp: "もう かえらなければ なりません。", ro: "Mō kaeranakereba narimasen.", en: "I have to go home now." }
    ],
    drills: [
      { type: "fill", jp: "くすりを ＿＿ なりません。", answer: "のまなければ", options: ["のまなければ", "のみなければ", "のまないで", "のまなくても"], en: "I have to take medicine." },
      { type: "fill", jp: "もう はちじですから、うちへ ＿＿ なりません。", answer: "かえらなければ", options: ["かえらなければ", "かえりなければ", "かえなければ", "かえらないで"], en: "It's already eight, so I have to go home." },
      { type: "fill", jp: "あした びょういんへ いか＿＿ なりません。", answer: "なければ", options: ["なければ", "ないで", "なくても", "なくて"], en: "I have to go to the hospital tomorrow." },
      { type: "choose", q: "What does パスポートを みせなければ なりません mean?", answer: "I have to show my passport.", options: ["I have to show my passport.", "I don't have to show my passport.", "Please don't show your passport.", "I may show my passport."] },
      { type: "choose", q: "Which is 'must study'?", answer: "べんきょうしなければ なりません", options: ["べんきょうしなければ なりません", "べんきょうさなければ なりません", "べんきょうしないければ なりません", "べんきょうしなくても なりません"] },
      { type: "order", tiles: ["レポートを", "ださなければ", "なりません"], en: "I have to hand in a report." }
    ]
  },
  {
    id: "L17-4",
    lesson: 17,
    title: "V なくても いいです",
    meaning: "You don't have to do V",
    explain: "ない-form minus い + くても いいです means 'it's OK not to ~ / you don't have to': こなくても いいです. It's the natural 'no' answer to a ～なければ なりませんか question.",
    examples: [
      { jp: "あした こなくても いいです。", ro: "Ashita konakute mo ii desu.", en: "You don't have to come tomorrow." },
      { jp: "くつを ぬがなくても いいですか。", ro: "Kutsu o nuganakute mo ii desu ka.", en: "Is it OK if I don't take off my shoes?" },
      { jp: "なまえを かかなければ なりませんか。…いいえ、かかなくても いいです。", ro: "Namae o kakanakereba narimasen ka. … Iie, kakanakute mo ii desu.", en: "Do I have to write my name? — No, you don't have to." }
    ],
    drills: [
      { type: "fill", jp: "あした ＿＿ いいです。", answer: "こなくても", options: ["こなくても", "きなくても", "くなくても", "こなければ"], en: "You don't have to come tomorrow." },
      { type: "fill", jp: "くつを ぬが＿＿ いいですか。", answer: "なくても", options: ["なくても", "なくでも", "なくては", "なかった"], en: "Is it OK if I don't take off my shoes?" },
      { type: "fill", jp: "なまえを かかなければ なりませんか。…いいえ、＿＿。", answer: "かかなくても いいです", options: ["かかなくても いいです", "かかなければ なりません", "かかないで ください", "かきなくても いいです"], en: "Do I have to write my name? — No, you don't have to." },
      { type: "choose", q: "What does いそがなくても いいです mean?", answer: "You don't have to hurry.", options: ["You don't have to hurry.", "You must hurry.", "Please don't hurry.", "You may not hurry."] },
      { type: "choose", q: "はらわなくても いいです — do you need to pay?", answer: "No, it's not necessary.", options: ["No, it's not necessary.", "Yes, you must.", "You are not allowed to pay.", "Please pay later."] },
      { type: "order", tiles: ["くつを", "ぬがなくても", "いいです"], en: "You don't have to take off your shoes." }
    ]
  },
  {
    id: "L17-5",
    lesson: 17,
    title: "～までに",
    meaning: "by ~ (a deadline)",
    explain: "までに marks a deadline — the action happens at some point before that time: どようびまでに かえします (I'll return it by Saturday). まで (without に) means an action continues UNTIL that time: ごじまで はたらきます (I work until five).",
    examples: [
      { jp: "かいぎは さんじまでに おわります。", ro: "Kaigi wa sanji made ni owarimasu.", en: "The meeting will finish by three." },
      { jp: "どようびまでに ほんを かえさなければ なりません。", ro: "Doyōbi made ni hon o kaesanakereba narimasen.", en: "I have to return the book by Saturday." },
      { jp: "まいにち ごじまで はたらきます。", ro: "Mainichi goji made hatarakimasu.", en: "I work until five every day." }
    ],
    drills: [
      { type: "fill", jp: "どようびまで＿＿ ほんを かえさなければ なりません。", answer: "に", options: ["に", "で", "を", "は"], en: "I have to return the book by Saturday." },
      { type: "fill", jp: "まいにち ごじ＿＿ はたらきます。", answer: "まで", options: ["まで", "までに", "に", "より"], en: "I work until five every day." },
      { type: "fill", jp: "レポートは きんようび＿＿ だして ください。", answer: "までに", options: ["までに", "まで", "から", "だけ"], en: "Please hand in the report by Friday." },
      { type: "choose", q: "Which means 'by three o'clock' (deadline)?", answer: "さんじまでに", options: ["さんじまでに", "さんじまで", "さんじから", "さんじごろ"] },
      { type: "order", tiles: ["あしたまでに", "この", "しりょうを", "コピーして", "ください"], en: "Please copy these documents by tomorrow." },
      { type: "order", tiles: ["かいぎは", "さんじまでに", "おわります"], en: "The meeting will finish by three." }
    ]
  },
  {
    id: "L17-6",
    lesson: 17,
    title: "Object を → は (making the object the topic)",
    meaning: "As for (the object), …",
    explain: "When the object of a verb becomes the topic, it moves to the front and を changes to は: にもつを ここに おかないで ください → にもつは ここに おかないで ください. It's used to bring the object to the listener's attention or to contrast it. Never say をは.",
    examples: [
      { jp: "にもつは ここに おかないで ください。", ro: "Nimotsu wa koko ni okanaide kudasai.", en: "(As for) bags, please don't put them here." },
      { jp: "ひるごはんは かいしゃの しょくどうで たべます。", ro: "Hirugohan wa kaisha no shokudō de tabemasu.", en: "Lunch, I eat in the company cafeteria." }
    ],
    drills: [
      { type: "fill", jp: "にもつ＿＿ ここに おかないで ください。", answer: "は", options: ["は", "が", "に", "で"], en: "(As for) bags, please don't put them here." },
      { type: "fill", jp: "ひるごはん＿＿ かいしゃの しょくどうで たべます。", answer: "は", options: ["は", "に", "が", "で"], en: "Lunch, I eat in the company cafeteria." },
      { type: "choose", q: "When the object becomes the topic, を changes to…", answer: "は", options: ["は", "が", "に", "で"] },
      { type: "choose", q: "Which correctly topicalizes レポートを あした だします?", answer: "レポートは あした だします。", options: ["レポートは あした だします。", "レポートをは あした だします。", "レポートが あした だします。", "レポートに あした だします。"] },
      { type: "order", tiles: ["その", "ほんは", "あしたまでに", "かえして", "ください"], en: "Please return that book by tomorrow." }
    ]
  },

  // ───────────────────────── LESSON 18 ─────────────────────────
  {
    id: "L18-1",
    lesson: 18,
    title: "The dictionary form",
    meaning: "plain present form of verbs",
    explain: "Group 1: change the い-sound before ます to the う-sound (かきます → かく, のみます → のむ, かいます → かう, まちます → まつ). Group 2: drop ます + る (たべる, みる). Group 3: します → する, きます → くる. It's the form you look up in a dictionary.",
    examples: [
      { jp: "かきます → かく・のみます → のむ・まちます → まつ", ro: "kakimasu → kaku, nomimasu → nomu, machimasu → matsu", en: "Group 1: い-sound → う-sound" },
      { jp: "たべます → たべる・みます → みる", ro: "tabemasu → taberu, mimasu → miru", en: "Group 2: ます → る" },
      { jp: "します → する・きます → くる", ro: "shimasu → suru, kimasu → kuru", en: "Group 3 (irregular)" }
    ],
    drills: [
      { type: "choose", q: "Dictionary form of のみます?", answer: "のむ", options: ["のむ", "のみる", "のまる", "のる"] },
      { type: "choose", q: "Dictionary form of かいます (buy)?", answer: "かう", options: ["かう", "かいる", "かわ", "かる"] },
      { type: "choose", q: "Dictionary form of きます (come)?", answer: "くる", options: ["くる", "きる", "こる", "きく"] },
      { type: "choose", q: "Dictionary form of みます (see)?", answer: "みる", options: ["みる", "む", "みむ", "みう"] },
      { type: "choose", q: "Dictionary form of まちます?", answer: "まつ", options: ["まつ", "まちる", "まる", "まく"] },
      { type: "fill", jp: "はなします → はな＿＿", answer: "す", options: ["す", "し", "さ", "せ"], en: "speak (dictionary form)" },
      { type: "order", tiles: ["ピアノを", "ひく", "ことが", "できます"], en: "I can play the piano." }
    ]
  },
  {
    id: "L18-2",
    lesson: 18,
    title: "N / V-dict こと が できます",
    meaning: "can do / be able to",
    explain: "Use できます for ability or possibility. With a noun: にほんごが できます. With a verb, turn it into a noun with dictionary form + こと: かんじを よむ ことが できます. Gotcha: できます takes が, not を. It can also mean something is possible in a place: ここで カードで はらう ことが できます.",
    examples: [
      { jp: "ベイカーさんは かんじを よむ ことが できます。", ro: "Beikā-san wa kanji o yomu koto ga dekimasu.", en: "Mr. Baker can read kanji." },
      { jp: "わたしは にほんごが できます。", ro: "Watashi wa nihongo ga dekimasu.", en: "I can speak Japanese." },
      { jp: "ここで カードで はらう ことが できます。", ro: "Koko de kādo de harau koto ga dekimasu.", en: "You can pay by card here." }
    ],
    drills: [
      { type: "fill", jp: "わたしは ピアノを ＿＿ ことが できます。", answer: "ひく", options: ["ひく", "ひき", "ひいて", "ひきます"], en: "I can play the piano." },
      { type: "fill", jp: "ベイカーさんは にほんご＿＿ できます。", answer: "が", options: ["が", "を", "に", "で"], en: "Mr. Baker can speak Japanese." },
      { type: "fill", jp: "この ホテルで おかねを ＿＿ ことが できますか。", answer: "かえる", options: ["かえる", "かえ", "かえて", "かえます"], en: "Can I exchange money at this hotel?" },
      { type: "choose", q: "What does くるまを うんてんする ことが できます mean?", answer: "I can drive a car.", options: ["I can drive a car.", "I want to drive a car.", "I drove a car.", "I have to drive a car."] },
      { type: "choose", q: "Which is correct?", answer: "かんじを かく ことが できます。", options: ["かんじを かく ことが できます。", "かんじを かきます ことが できます。", "かんじを かく ことを できます。", "かんじを かいて ことが できます。"] },
      { type: "order", tiles: ["ここで", "カードで", "はらう", "ことが", "できますか"], en: "Can I pay by card here?" }
    ]
  },
  {
    id: "L18-3",
    lesson: 18,
    title: "しゅみは V-dict ことです",
    meaning: "My hobby is doing V",
    explain: "To say what your hobby is with a verb, use dictionary form + こと: しゅみは ほんを よむ ことです. A plain noun works too (しゅみは おんがくです), but the こと version is more specific.",
    examples: [
      { jp: "わたしの しゅみは えを かく ことです。", ro: "Watashi no shumi wa e o kaku koto desu.", en: "My hobby is drawing." },
      { jp: "しゅみは なんですか。…ほんを よむ ことです。", ro: "Shumi wa nan desu ka. … Hon o yomu koto desu.", en: "What's your hobby? — Reading books." }
    ],
    drills: [
      { type: "fill", jp: "わたしの しゅみは しゃしんを ＿＿ ことです。", answer: "とる", options: ["とる", "とり", "とって", "とります"], en: "My hobby is taking photos." },
      { type: "fill", jp: "しゅみは うたを うたう ＿＿です。", answer: "こと", options: ["こと", "もの", "ところ", "とき"], en: "My hobby is singing songs." },
      { type: "choose", q: "What does しゅみは なんですか ask?", answer: "What is your hobby?", options: ["What is your hobby?", "What can you do?", "What do you want?", "What did you do?"] },
      { type: "choose", q: "Which says 'My hobby is watching movies'?", answer: "しゅみは えいがを みる ことです。", options: ["しゅみは えいがを みる ことです。", "しゅみは えいがを みます ことです。", "しゅみは えいがを みて ことです。", "しゅみは えいがを みる ことが できます。"] },
      { type: "order", tiles: ["わたしの", "しゅみは", "ほんを", "よむ", "ことです"], en: "My hobby is reading books." }
    ]
  },
  {
    id: "L18-4",
    lesson: 18,
    title: "V-dict / N の / quantity まえに",
    meaning: "before doing V / before N / ~ ago",
    explain: "Dictionary form + まえに = 'before doing'. Gotcha: the verb before まえに is ALWAYS dictionary form, even when the sentence is past (にほんへ くる まえに…べんきょうしました). Nouns need の (しょくじの まえに). A length of time + まえに (no の) means '~ ago': いちじかん まえに.",
    examples: [
      { jp: "ねる まえに、ほんを よみます。", ro: "Neru mae ni, hon o yomimasu.", en: "I read a book before going to bed." },
      { jp: "しょくじの まえに、てを あらいます。", ro: "Shokuji no mae ni, te o araimasu.", en: "I wash my hands before meals." },
      { jp: "たなかさんは いちじかん まえに でかけました。", ro: "Tanaka-san wa ichijikan mae ni dekakemashita.", en: "Mr. Tanaka went out an hour ago." }
    ],
    drills: [
      { type: "fill", jp: "ごはんを ＿＿ まえに、てを あらいます。", answer: "たべる", options: ["たべる", "たべて", "たべます", "たべ"], en: "I wash my hands before eating." },
      { type: "fill", jp: "しょくじ＿＿ まえに、くすりを のんで ください。", answer: "の", options: ["の", "を", "に", "が"], en: "Please take the medicine before meals." },
      { type: "fill", jp: "にほんへ ＿＿ まえに、にほんごを べんきょうしました。", answer: "くる", options: ["くる", "きた", "きて", "きます"], en: "Before I came to Japan, I studied Japanese." },
      { type: "choose", q: "What does さんねん まえに mean?", answer: "three years ago", options: ["three years ago", "before turning three", "for three years", "in three years' time"] },
      { type: "order", tiles: ["ねる", "まえに", "シャワーを", "あびます"], en: "I take a shower before going to bed." },
      { type: "order", tiles: ["かいぎの", "まえに", "しりょうを", "よみます"], en: "I read the materials before the meeting." }
    ]
  },

  // ───────────────────────── LESSON 19 ─────────────────────────
  {
    id: "L19-1",
    lesson: 19,
    title: "The た-form",
    meaning: "plain past form of verbs",
    explain: "The た-form is made exactly like the て-form, just swap て→た and で→だ: かいて → かいた, のんで → のんだ, いって → いった. Group 3: した, きた. If you know your て-forms, you know your た-forms.",
    examples: [
      { jp: "かきます → かいた・のみます → のんだ・いきます → いった", ro: "kakimasu → kaita, nomimasu → nonda, ikimasu → itta", en: "Group 1: same rules as the て-form" },
      { jp: "たべます → たべた・みます → みた", ro: "tabemasu → tabeta, mimasu → mita", en: "Group 2: ます → た" },
      { jp: "します → した・きます → きた", ro: "shimasu → shita, kimasu → kita", en: "Group 3" }
    ],
    drills: [
      { type: "choose", q: "た-form of のみます?", answer: "のんだ", options: ["のんだ", "のみた", "のった", "のんた"] },
      { type: "choose", q: "た-form of いきます?", answer: "いった", options: ["いった", "いいた", "いきた", "いんだ"] },
      { type: "choose", q: "た-form of およぎます?", answer: "およいだ", options: ["およいだ", "およいた", "およぎた", "およった"] },
      { type: "choose", q: "た-form of きます (come)?", answer: "きた", options: ["きた", "こた", "きった", "くた"] },
      { type: "fill", jp: "かえります → かえ＿＿", answer: "った", options: ["った", "りた", "いた", "んだ"], en: "go home (た-form)" },
      { type: "order", tiles: ["すしを", "たべた", "ことが", "あります"], en: "I have eaten sushi before." }
    ]
  },
  {
    id: "L19-2",
    lesson: 19,
    title: "V た ことが あります",
    meaning: "have done V (before) — experience",
    explain: "た-form + ことが あります talks about experience at some point in your life: ふじさんに のぼった ことが あります. It's not for simple recent events (use ～ました for 'I climbed it yesterday'). Negative: ～た ことが ありません; 'never once' is いちども ありません.",
    examples: [
      { jp: "わたしは ふじさんに のぼった ことが あります。", ro: "Watashi wa Fujisan ni nobotta koto ga arimasu.", en: "I have climbed Mt. Fuji." },
      { jp: "すもうを みた ことが ありますか。…いいえ、いちども ありません。", ro: "Sumō o mita koto ga arimasu ka. … Iie, ichido mo arimasen.", en: "Have you ever watched sumo? — No, never." }
    ],
    drills: [
      { type: "fill", jp: "わたしは ふじさんに ＿＿ ことが あります。", answer: "のぼった", options: ["のぼった", "のぼりた", "のぼんだ", "のぼって"], en: "I have climbed Mt. Fuji." },
      { type: "fill", jp: "すもうを ＿＿ ことが ありますか。", answer: "みた", options: ["みた", "みった", "みて", "みます"], en: "Have you ever watched sumo?" },
      { type: "fill", jp: "ゴルフを した ことが ありますか。…いいえ、いちど＿＿ ありません。", answer: "も", options: ["も", "が", "は", "を"], en: "Have you ever played golf? — No, never." },
      { type: "choose", q: "What does にほんの おさけを のんだ ことが あります mean?", answer: "I have drunk Japanese sake before.", options: ["I have drunk Japanese sake before.", "I drank Japanese sake yesterday.", "I want to drink Japanese sake.", "I can drink Japanese sake."] },
      { type: "choose", q: "Which says 'I have been to Hokkaido'?", answer: "ほっかいどうへ いった ことが あります。", options: ["ほっかいどうへ いった ことが あります。", "ほっかいどうへ いきた ことが あります。", "ほっかいどうへ いって ことが あります。", "ほっかいどうへ いいた ことが あります。"] },
      { type: "order", tiles: ["しんかんせんに", "のった", "ことが", "ありますか"], en: "Have you ever ridden the shinkansen?" }
    ]
  },
  {
    id: "L19-3",
    lesson: 19,
    title: "V1 たり、V2 たり します",
    meaning: "do things like V1 and V2",
    explain: "た-form + り lists a few example actions out of many (non-exhaustive, no fixed order), and the sentence must end with します. Tense goes on the final する: ～たり、～たり しました. Compare ～て、～て, which lists actions in the exact order they happened.",
    examples: [
      { jp: "にちようびは テニスを したり、えいがを みたり します。", ro: "Nichiyōbi wa tenisu o shitari, eiga o mitari shimasu.", en: "On Sundays I do things like play tennis and watch movies." },
      { jp: "きのうは そうじしたり、せんたくしたり しました。", ro: "Kinō wa sōji shitari, sentaku shitari shimashita.", en: "Yesterday I did things like cleaning and laundry." }
    ],
    drills: [
      { type: "fill", jp: "やすみの ひは ほんを よんだり、おんがくを ＿＿ します。", answer: "きいたり", options: ["きいたり", "ききたり", "きったり", "きいで"], en: "On my days off I do things like read and listen to music." },
      { type: "fill", jp: "きのうは そうじしたり、せんたく＿＿ しました。", answer: "したり", options: ["したり", "しったり", "して", "します"], en: "Yesterday I did things like cleaning and laundry." },
      { type: "fill", jp: "にちようびは かいものを したり、えいがを みたり ＿＿。", answer: "します", options: ["します", "みます", "あります", "です"], en: "On Sundays I do things like shopping and watching movies." },
      { type: "choose", q: "What does たべたり、のんだり しました mean?", answer: "I did things like eating and drinking.", options: ["I did things like eating and drinking.", "I ate and then drank, in that order only.", "I want to eat and drink.", "I didn't eat or drink."] },
      { type: "order", tiles: ["テニスを", "したり", "およいだり", "します"], en: "I do things like play tennis and swim." }
    ]
  },
  {
    id: "L19-4",
    lesson: 19,
    title: "い-adj く / な-adj・N に なります",
    meaning: "become ~",
    explain: "なります means 'become'. い-adjective: drop い + く (さむい → さむく なります). な-adjective and nouns: add に (げんきに なります, いしゃに なります). Gotcha: いい → よく なります.",
    examples: [
      { jp: "さむく なりました。", ro: "Samuku narimashita.", en: "It's got cold." },
      { jp: "げんきに なりました。", ro: "Genki ni narimashita.", en: "I've got better / I'm well again." },
      { jp: "いしゃに なりたいです。", ro: "Isha ni naritai desu.", en: "I want to become a doctor." }
    ],
    drills: [
      { type: "fill", jp: "だんだん さむ＿＿ なりました。", answer: "く", options: ["く", "い", "に", "くて"], en: "It's gradually got colder." },
      { type: "fill", jp: "へやが きれい＿＿ なりました。", answer: "に", options: ["に", "く", "な", "で"], en: "The room has become clean." },
      { type: "fill", jp: "くすりを のんで、ちょうしが ＿＿ なりました。", answer: "よく", options: ["よく", "いく", "いいに", "よいに"], en: "I took the medicine, and I've got better." },
      { type: "choose", q: "Which says 'I want to become a doctor'?", answer: "いしゃに なりたいです。", options: ["いしゃに なりたいです。", "いしゃく なりたいです。", "いしゃを なりたいです。", "いしゃで なりたいです。"] },
      { type: "order", tiles: ["にほんごが", "じょうずに", "なりました"], en: "My Japanese has got better." },
      { type: "order", tiles: ["そとが", "くらく", "なりました"], en: "It's got dark outside." }
    ]
  },

  // ───────────────────────── LESSON 20 ─────────────────────────
  {
    id: "L20-1",
    lesson: 20,
    title: "Polite style vs plain style",
    meaning: "です/ます vs casual speech",
    explain: "Polite style (です/ます) is for people you don't know well, superiors, and formal situations. Plain style (dictionary form, ない, た, だ…) is for close friends, family, and people younger than you — and it's also the style of diaries, notes and newspapers. Gotcha: mixing the two in one conversation with the same person sounds odd; switching to plain with a superior sounds rude.",
    examples: [
      { jp: "あした とうきょうへ いきます。→ あした とうきょうへ いく。", ro: "Ashita Tōkyō e ikimasu. → Ashita Tōkyō e iku.", en: "I'm going to Tokyo tomorrow. (polite → plain)" },
      { jp: "きのう なにを しましたか。→ きのう なにを した？", ro: "Kinō nani o shimashita ka. → Kinō nani o shita?", en: "What did you do yesterday? (polite → plain)" }
    ],
    drills: [
      { type: "choose", q: "Plain style is most appropriate with…", answer: "close friends and family", options: ["close friends and family", "your boss", "a customer", "someone you just met"] },
      { type: "choose", q: "Polite version of きのう なにを した？", answer: "きのう なにを しましたか。", options: ["きのう なにを しましたか。", "きのう なにを しますか。", "きのう なにを したですか。", "きのう なにを しましたでしたか。"] },
      { type: "choose", q: "Plain version of あした とうきょうへ いきます。", answer: "あした とうきょうへ いく。", options: ["あした とうきょうへ いく。", "あした とうきょうへ いった。", "あした とうきょうへ いき。", "あした とうきょうへ いくだ。"] },
      { type: "fill", jp: "あした ひま？ …うん、＿＿。", answer: "ひま", options: ["ひま", "ひまな", "ひまく", "ひまに"], en: "Free tomorrow? — Yeah, I'm free." },
      { type: "order", tiles: ["あした", "いっしょに", "えいがを", "みない"], en: "Want to see a movie together tomorrow? (casual)" }
    ]
  },
  {
    id: "L20-2",
    lesson: 20,
    title: "Plain forms of verbs",
    meaning: "いく / いかない / いった / いかなかった",
    explain: "Each polite verb form has a plain twin: ～ます → dictionary form (いく), ～ません → ない-form (いかない), ～ました → た-form (いった), ～ませんでした → ない-form with ない → なかった (いかなかった). Gotcha: the plain negative of あります is just ない (never あらない).",
    examples: [
      { jp: "まいにち がっこうへ いく。", ro: "Mainichi gakkō e iku.", en: "I go to school every day." },
      { jp: "きょうは なにも たべない。", ro: "Kyō wa nani mo tabenai.", en: "I'm not eating anything today." },
      { jp: "きのうは どこも いかなかった。", ro: "Kinō wa doko mo ikanakatta.", en: "I didn't go anywhere yesterday." }
    ],
    drills: [
      { type: "choose", q: "Plain form of のみました?", answer: "のんだ", options: ["のんだ", "のみた", "のまなかった", "のむ"] },
      { type: "choose", q: "Plain form of ありません?", answer: "ない", options: ["ない", "あらない", "ありない", "あない"] },
      { type: "choose", q: "Plain form of いきませんでした?", answer: "いかなかった", options: ["いかなかった", "いきなかった", "いかないだった", "いかないかった"] },
      { type: "fill", jp: "きのうは どこも いか＿＿。", answer: "なかった", options: ["なかった", "ないでした", "なくた", "なかったでした"], en: "I didn't go anywhere yesterday. (casual)" },
      { type: "fill", jp: "あした ともだちが うちへ ＿＿。", answer: "くる", options: ["くる", "きる", "こる", "くった"], en: "A friend is coming to my house tomorrow. (casual)" },
      { type: "order", tiles: ["きのう", "スーパーで", "パンを", "かった"], en: "I bought bread at the supermarket yesterday. (casual)" }
    ]
  },
  {
    id: "L20-3",
    lesson: 20,
    title: "Plain forms of adjectives and nouns",
    meaning: "だ / じゃ ない / だった / じゃ なかった",
    explain: "い-adjectives: just drop です (おいしいです → おいしい, おいしかったです → おいしかった, おいしくないです → おいしくない). な-adjectives and nouns: です → だ, じゃ ありません → じゃ ない, でした → だった, じゃ ありませんでした → じゃ なかった. Gotcha: never put だ after an い-adjective (おいしいだ ✗).",
    examples: [
      { jp: "この ケーキ、おいしい。", ro: "Kono kēki, oishii.", en: "This cake is tasty." },
      { jp: "きょうは やすみだ。", ro: "Kyō wa yasumi da.", en: "Today is a day off." },
      { jp: "きのうは ひまじゃ なかった。", ro: "Kinō wa hima ja nakatta.", en: "I wasn't free yesterday." }
    ],
    drills: [
      { type: "choose", q: "Plain form of おいしいです?", answer: "おいしい", options: ["おいしい", "おいしいだ", "おいしいな", "おいしだ"] },
      { type: "choose", q: "Plain form of あめでした?", answer: "あめだった", options: ["あめだった", "あめかった", "あめだ", "あめじゃ なかった"] },
      { type: "fill", jp: "きのうの テストは かんたん＿＿。", answer: "だった", options: ["だった", "かった", "だ", "じゃ ない"], en: "Yesterday's test was easy. (casual)" },
      { type: "fill", jp: "この へやは ひろく＿＿。", answer: "ない", options: ["ない", "じゃ ない", "なかった", "いない"], en: "This room isn't spacious. (casual)" },
      { type: "fill", jp: "きのうは さむ＿＿ね。", answer: "かった", options: ["かった", "いだった", "くない", "だった"], en: "It was cold yesterday, wasn't it? (casual)" },
      { type: "order", tiles: ["きのうの", "パーティーは", "たのしかった"], en: "Yesterday's party was fun. (casual)" }
    ]
  },
  {
    id: "L20-4",
    lesson: 20,
    title: "Casual questions and うん / ううん",
    meaning: "asking and answering in plain style",
    explain: "In casual speech, questions usually drop か and just rise in intonation: コーヒー、のむ？ With nouns and な-adjectives, だ is also dropped in questions: ひま？ (not ひまだ？). Particles like を and へ are often left out. Answer 'yes' with うん and 'no' with ううん.",
    examples: [
      { jp: "コーヒー、のむ？ …うん、のむ。", ro: "Kōhī, nomu? … Un, nomu.", en: "Want some coffee? — Yeah, I'll have some." },
      { jp: "あした ひま？ …ううん、ひまじゃ ない。", ro: "Ashita hima? … Uun, hima ja nai.", en: "Free tomorrow? — No, I'm not." }
    ],
    drills: [
      { type: "choose", q: "Natural casual way to ask 'Are you free tomorrow?'", answer: "あした ひま？", options: ["あした ひま？", "あした ひまだ？", "あした ひまく？", "あした ひまな？"] },
      { type: "choose", q: "Casual 'yes' is…", answer: "うん", options: ["うん", "ううん", "いいえ", "ええと"] },
      { type: "choose", q: "What does ううん mean?", answer: "no", options: ["no", "yes", "maybe", "um…"] },
      { type: "fill", jp: "コーヒー、＿＿？ …うん、ありがとう。", answer: "のむ", options: ["のむ", "のみ", "のむだ", "のんだ"], en: "Want some coffee? — Yeah, thanks." },
      { type: "fill", jp: "あした がっこうへ いく？ …＿＿、いかない。", answer: "ううん", options: ["ううん", "うん", "はい", "ええ"], en: "Are you going to school tomorrow? — No, I'm not." },
      { type: "order", tiles: ["なつやすみは", "どこへ", "いく"], en: "Where are you going for the summer holidays? (casual)" }
    ]
  },
  {
    id: "L20-5",
    lesson: 20,
    title: "～けど",
    meaning: "but / although (casual)",
    explain: "けど is the casual version of が ('but'). It attaches to the plain form: たかいけど, いったけど. Gotcha: nouns and な-adjectives need だ before けど — ひまだけど, not ひまけど. It can also be a soft lead-in, like 'I was wondering…'.",
    examples: [
      { jp: "この みせは たかいけど、おいしい。", ro: "Kono mise wa takai kedo, oishii.", en: "This restaurant is expensive, but it's good." },
      { jp: "きのう デパートへ いったけど、なにも かわなかった。", ro: "Kinō depāto e itta kedo, nani mo kawanakatta.", en: "I went to the department store yesterday, but didn't buy anything." }
    ],
    drills: [
      { type: "fill", jp: "この ラーメンは おいしい＿＿、たかい。", answer: "けど", options: ["けど", "より", "まで", "の"], en: "This ramen is tasty, but expensive." },
      { type: "fill", jp: "あしたは ひま＿＿、あさっては いそがしい。", answer: "だけど", options: ["だけど", "けど", "なけど", "くけど"], en: "I'm free tomorrow, but busy the day after." },
      { type: "choose", q: "けど is the casual version of…", answer: "が (but)", options: ["が (but)", "から (because)", "と (and)", "も (also)"] },
      { type: "choose", q: "Which is correct?", answer: "きのう デパートへ いったけど、なにも かわなかった。", options: ["きのう デパートへ いったけど、なにも かわなかった。", "きのう デパートへ いくたけど、なにも かわなかった。", "きのう デパートへ いったけど、なにも かった。", "きのう デパートへ いきたけど、なにも かわなかった。"] },
      { type: "order", tiles: ["にほんごは", "むずかしいけど", "おもしろい"], en: "Japanese is difficult, but interesting. (casual)" }
    ]
  },

  // ─────────────────── N5 EXTRAS (LESSONS 21–25) ───────────────────
  {
    id: "L21-1",
    lesson: 21,
    title: "Plain form + と おもいます",
    meaning: "I think (that) ~",
    explain: "Put a plain-form sentence before と おもいます to give an opinion or guess: あした あめが ふると おもいます. Nouns and な-adjectives need だ: かんたんだと おもいます. To say 'I don't think…', Japanese usually makes the inner clause negative: こないと おもいます. Ask someone's opinion with ～に ついて どう おもいますか.",
    examples: [
      { jp: "あした あめが ふると おもいます。", ro: "Ashita ame ga furu to omoimasu.", en: "I think it will rain tomorrow." },
      { jp: "ベイカーさんは もう うちへ かえったと おもいます。", ro: "Beikā-san wa mō uchi e kaetta to omoimasu.", en: "I think Mr. Baker has already gone home." },
      { jp: "にほんは ぶっかが たかいと おもいます。", ro: "Nihon wa bukka ga takai to omoimasu.", en: "I think prices in Japan are high." }
    ],
    drills: [
      { type: "fill", jp: "あしたは あめが ＿＿と おもいます。", answer: "ふる", options: ["ふる", "ふります", "ふって", "ふり"], en: "I think it will rain tomorrow." },
      { type: "fill", jp: "この もんだいは かんたん＿＿と おもいます。", answer: "だ", options: ["だ", "な", "に", "の"], en: "I think this problem is easy." },
      { type: "fill", jp: "たなかさんは もう かえった＿＿ おもいます。", answer: "と", options: ["と", "を", "が", "に"], en: "I think Mr. Tanaka has already gone home." },
      { type: "choose", q: "Which says 'I think Mr. Baker won't come'?", answer: "ベイカーさんは こないと おもいます。", options: ["ベイカーさんは こないと おもいます。", "ベイカーさんは こないだと おもいます。", "ベイカーさんは きないと おもいます。", "ベイカーさんは こないですと おもいます。"] },
      { type: "choose", q: "What does どう おもいますか mean?", answer: "What do you think?", options: ["What do you think?", "How do you do?", "Why do you think so?", "What did you say?"] },
      { type: "order", tiles: ["にほんは", "ぶっかが", "たかいと", "おもいます"], en: "I think prices in Japan are high." }
    ]
  },
  {
    id: "L21-2",
    lesson: 21,
    title: "「～」と いいます / plain form + と いいます",
    meaning: "say ~ / say that ~",
    explain: "To quote words exactly, put them in 「」 + と いいます: 「いただきます」と いいます. To report what someone said indirectly, use the plain form + と いいました: ベイカーさんは らいしゅう いくと いいました. The quote particle is always と.",
    examples: [
      { jp: "ねる まえに、「おやすみなさい」と いいます。", ro: "Neru mae ni, 'Oyasuminasai' to iimasu.", en: "Before going to bed, we say 'Good night'." },
      { jp: "ベイカーさんは らいしゅう とうきょうへ しゅっちょうすると いいました。", ro: "Beikā-san wa raishū Tōkyō e shutchō suru to iimashita.", en: "Mr. Baker said he's going on a business trip to Tokyo next week." }
    ],
    drills: [
      { type: "fill", jp: "ごはんを たべる まえに、「いただきます」＿＿ いいます。", answer: "と", options: ["と", "を", "が", "に"], en: "Before eating, we say 'Itadakimasu'." },
      { type: "fill", jp: "ベイカーさんは らいしゅう おおさかへ ＿＿と いいました。", answer: "いく", options: ["いく", "いって", "いき", "いくだ"], en: "Mr. Baker said he's going to Osaka next week." },
      { type: "choose", q: "What do Japanese people say before eating?", answer: "「いただきます」と いいます。", options: ["「いただきます」と いいます。", "「ごちそうさま」と いいます。", "「おやすみなさい」と いいます。", "「いってきます」と いいます。"] },
      { type: "choose", q: "Which reports 'Ms. Sato said she is busy'?", answer: "さとうさんは いそがしいと いいました。", options: ["さとうさんは いそがしいと いいました。", "さとうさんは いそがしいを いいました。", "さとうさんは いそがしいだと いいました。", "さとうさんは いそがしく いいました。"] },
      { type: "order", tiles: ["これは", "にほんごで", "なんと", "いいますか"], en: "What is this called in Japanese?" }
    ]
  },
  {
    id: "L21-3",
    lesson: 21,
    title: "～でしょう？",
    meaning: "…, right? (seeking agreement)",
    explain: "Plain form + でしょう？ with rising intonation checks that the listener agrees: あしたの パーティーに いくでしょう？ Gotcha: nouns and な-adjectives drop だ: がくせいでしょう？ (not がくせいだでしょう).",
    examples: [
      { jp: "あしたの パーティーに いくでしょう？…ええ、いきます。", ro: "Ashita no pātī ni iku deshō? … Ee, ikimasu.", en: "You're going to tomorrow's party, right? — Yes, I am." },
      { jp: "ほっかいどうは さむかったでしょう？", ro: "Hokkaidō wa samukatta deshō?", en: "Hokkaido must have been cold, right?" }
    ],
    drills: [
      { type: "fill", jp: "あしたの パーティーに ＿＿でしょう？", answer: "いく", options: ["いく", "いって", "いき", "いくだ"], en: "You're going to tomorrow's party, right?" },
      { type: "fill", jp: "ほっかいどうは ＿＿でしょう？", answer: "さむかった", options: ["さむかった", "さむいだった", "さむくて", "さむかったです"], en: "Hokkaido was cold, right?" },
      { type: "fill", jp: "サリさんは がくせい＿＿？", answer: "でしょう", options: ["でしょう", "だでしょう", "なでしょう", "にでしょう"], en: "Sari is a student, right?" },
      { type: "choose", q: "What does つかれたでしょう？ mean?", answer: "You must be tired, right?", options: ["You must be tired, right?", "I'm tired.", "Are you going to get tired?", "Don't get tired."] },
      { type: "order", tiles: ["にほんの", "なつは", "あついでしょう"], en: "Summer in Japan is hot, right?" }
    ]
  },
  {
    id: "L22-1",
    lesson: 22,
    title: "Noun modification with plain-form clauses",
    meaning: "the N that (someone) does / did",
    explain: "In Japanese, a whole plain-form clause goes BEFORE the noun it describes: わたしが すんで いる うち = the house (that) I live in. The subject inside the clause takes が, not は. The verb must be plain form (たべた パン, not たべました パン).",
    examples: [
      { jp: "これは ベイカーさんが すんで いる うちです。", ro: "Kore wa Beikā-san ga sunde iru uchi desu.", en: "This is the house Mr. Baker lives in." },
      { jp: "わたしが きのう みた えいがは おもしろかったです。", ro: "Watashi ga kinō mita eiga wa omoshirokatta desu.", en: "The movie I saw yesterday was interesting." },
      { jp: "めがねを かけて いる ひとは だれですか。", ro: "Megane o kakete iru hito wa dare desu ka.", en: "Who is the person wearing glasses?" }
    ],
    drills: [
      { type: "fill", jp: "これは わたし＿＿ かいた えです。", answer: "が", options: ["が", "は", "を", "に"], en: "This is a picture I drew." },
      { type: "fill", jp: "これは きのう デパートで ＿＿ くつです。", answer: "かった", options: ["かった", "かいました", "かって", "かいた"], en: "These are the shoes I bought at the department store yesterday." },
      { type: "fill", jp: "ベイカーさんが ＿＿ うちは どこですか。", answer: "すんで いる", options: ["すんで いる", "すんで います", "すむの", "すみて いる"], en: "Where is the house Mr. Baker lives in?" },
      { type: "choose", q: "What does あそこで しゃしんを とって いる ひと mean?", answer: "the person taking photos over there", options: ["the person taking photos over there", "the photos that person took over there", "a person who took photos there long ago", "the person who will take photos over there"] },
      { type: "choose", q: "Which is 'the bread I ate'?", answer: "わたしが たべた パン", options: ["わたしが たべた パン", "わたしは たべた パン", "パン わたしが たべた", "わたしが たべました パン"] },
      { type: "order", tiles: ["わたしが", "すんで いる", "うちは", "えきの", "ちかくです"], en: "The house I live in is near the station." },
      { type: "order", tiles: ["めがねを", "かけて いる", "ひとは", "だれですか"], en: "Who is the person wearing glasses?" }
    ]
  },
  {
    id: "L22-2",
    lesson: 22,
    title: "V-dict + じかん / やくそく / ようじ",
    meaning: "time to do / an appointment to do / something to do",
    explain: "A dictionary-form verb can describe nouns like じかん (time), やくそく (appointment) and ようじ (errand): あさごはんを たべる じかんが ありません = I have no time to eat breakfast. It's the same noun-modifying rule as before — the verb sits directly in front of the noun.",
    examples: [
      { jp: "わたしは あさごはんを たべる じかんが ありません。", ro: "Watashi wa asagohan o taberu jikan ga arimasen.", en: "I don't have time to eat breakfast." },
      { jp: "きょうは ともだちと あう やくそくが あります。", ro: "Kyō wa tomodachi to au yakusoku ga arimasu.", en: "I have plans to meet a friend today." }
    ],
    drills: [
      { type: "fill", jp: "あさごはんを ＿＿ じかんが ありません。", answer: "たべる", options: ["たべる", "たべます", "たべて", "たべの"], en: "I don't have time to eat breakfast." },
      { type: "fill", jp: "きょうは ともだちと ＿＿ やくそくが あります。", answer: "あう", options: ["あう", "あいます", "あって", "あいの"], en: "I have plans to meet a friend today." },
      { type: "fill", jp: "ほんを ＿＿ じかんが ほしいです。", answer: "よむ", options: ["よむ", "よみ", "よんで", "よみます"], en: "I want time to read books." },
      { type: "choose", q: "What does でんわを かける じかんが ありませんでした mean?", answer: "I didn't have time to make a phone call.", options: ["I didn't have time to make a phone call.", "I made a phone call for a long time.", "There was no phone to call with.", "I don't want to make a phone call."] },
      { type: "order", tiles: ["テレビを", "みる", "じかんが", "ありません"], en: "I don't have time to watch TV." }
    ]
  },
  {
    id: "L23-1",
    lesson: 23,
    title: "～とき",
    meaning: "when ~",
    explain: "とき ('time') is a noun, so it's modified like one: verb plain form + とき (みちを わたる とき), い-adjective + とき (ねむい とき), な-adjective + な とき (ひまな とき), noun + の とき (こどもの とき). The clause before とき sets the time of the main sentence.",
    examples: [
      { jp: "ひまな とき、えいがを みます。", ro: "Hima na toki, eiga o mimasu.", en: "When I'm free, I watch movies." },
      { jp: "こどもの とき、よく そとで あそびました。", ro: "Kodomo no toki, yoku soto de asobimashita.", en: "When I was a child, I often played outside." },
      { jp: "ねむい とき、コーヒーを のみます。", ro: "Nemui toki, kōhī o nomimasu.", en: "When I'm sleepy, I drink coffee." }
    ],
    drills: [
      { type: "fill", jp: "ひま＿＿ とき、なにを しますか。", answer: "な", options: ["な", "の", "だ", "に"], en: "What do you do when you're free?" },
      { type: "fill", jp: "こども＿＿ とき、よく そとで あそびました。", answer: "の", options: ["の", "な", "だ", "が"], en: "When I was a child, I often played outside." },
      { type: "fill", jp: "＿＿ とき、コーヒーを のみます。", answer: "ねむい", options: ["ねむい", "ねむいな", "ねむいの", "ねむくて"], en: "When I'm sleepy, I drink coffee." },
      { type: "fill", jp: "みちを ＿＿ とき、くるまに きを つけて ください。", answer: "わたる", options: ["わたる", "わたります", "わたって", "わたりの"], en: "Watch out for cars when you cross the road." },
      { type: "choose", q: "What does わかい とき mean?", answer: "when (I was) young", options: ["when (I was) young", "the young time of day", "while I'm getting younger", "a young person"] },
      { type: "order", tiles: ["びょうきの", "とき", "かいしゃを", "やすみます"], en: "When I'm sick, I take time off work." }
    ]
  },
  {
    id: "L23-2",
    lesson: 23,
    title: "V-dict と、～ (natural consequence)",
    meaning: "when/if you do V, (it always) happens",
    explain: "Dictionary form + と describes an automatic or inevitable result: この ボタンを おすと、おつりが でます. It's great for machines, directions and nature. Gotcha: the second half can't be a request, invitation or your own intention (no ～て ください or ～ましょう after と).",
    examples: [
      { jp: "この ボタンを おすと、おつりが でます。", ro: "Kono botan o osu to, otsuri ga demasu.", en: "If you press this button, the change comes out." },
      { jp: "みぎへ まがると、ゆうびんきょくが あります。", ro: "Migi e magaru to, yūbinkyoku ga arimasu.", en: "If you turn right, there's a post office." },
      { jp: "これを まわすと、おとが おおきく なります。", ro: "Kore o mawasu to, oto ga ōkiku narimasu.", en: "If you turn this, the sound gets louder." }
    ],
    drills: [
      { type: "fill", jp: "この ボタンを ＿＿と、きっぷが でます。", answer: "おす", options: ["おす", "おして", "おした", "おし"], en: "If you press this button, the ticket comes out." },
      { type: "fill", jp: "あの かどを みぎへ ＿＿と、ぎんこうが あります。", answer: "まがる", options: ["まがる", "まがって", "まがら", "まがり"], en: "If you turn right at that corner, there's a bank." },
      { type: "fill", jp: "はるに なる＿＿、あたたかく なります。", answer: "と", options: ["と", "を", "が", "で"], en: "When spring comes, it gets warm." },
      { type: "choose", q: "Which sentence is UNNATURAL?", answer: "ボタンを おすと、おつりを とって ください。", options: ["ボタンを おすと、おつりを とって ください。", "ボタンを おすと、ドアが あきます。", "みぎへ まがると、えきが あります。", "これを まわすと、おとが おおきく なります。"] },
      { type: "choose", q: "What does これを まわすと、おとが おおきく なります mean?", answer: "If you turn this, the sound gets louder.", options: ["If you turn this, the sound gets louder.", "Please turn this to make it louder.", "Turn this before it gets loud.", "Even if you turn this, it won't get louder."] },
      { type: "order", tiles: ["この", "ボタンを", "おすと", "おつりが", "でます"], en: "If you press this button, the change comes out." }
    ]
  },
  {
    id: "L24-1",
    lesson: 24,
    title: "くれます",
    meaning: "(someone) gives (to me / my side)",
    explain: "When someone gives something TO the speaker (or the speaker's family/group), use くれます, not あげます: さとうさんは わたしに チョコレートを くれました. あげます is for giving away from you or between others. Gotcha: わたしが くれます is always wrong.",
    examples: [
      { jp: "さとうさんは わたしに クリスマスカードを くれました。", ro: "Satō-san wa watashi ni kurisumasu kādo o kuremashita.", en: "Ms. Sato gave me a Christmas card." },
      { jp: "ははが わたしに セーターを くれました。", ro: "Haha ga watashi ni sētā o kuremashita.", en: "My mother gave me a sweater." }
    ],
    drills: [
      { type: "fill", jp: "さとうさんは わたしに チョコレートを ＿＿。", answer: "くれました", options: ["くれました", "あげました", "もらいました", "くれます"], en: "Ms. Sato gave me chocolate." },
      { type: "fill", jp: "わたしは さとうさんに はなを ＿＿。", answer: "あげました", options: ["あげました", "くれました", "もらいました"], en: "I gave Ms. Sato flowers." },
      { type: "choose", q: "In ともだちが くれました, who receives the gift?", answer: "Me (the speaker) / my side", options: ["Me (the speaker) / my side", "The friend", "A third person", "Nobody"] },
      { type: "choose", q: "Which is correct?", answer: "ははが わたしに セーターを くれました。", options: ["ははが わたしに セーターを くれました。", "わたしが ははに セーターを くれました。", "ははが わたしを セーターに くれました。", "ははが わたしに セーターが くれました。"] },
      { type: "order", tiles: ["ともだちが", "わたしに", "ほんを", "くれました"], en: "My friend gave me a book." }
    ]
  },
  {
    id: "L24-2",
    lesson: 24,
    title: "V て あげます / もらいます / くれます",
    meaning: "do V for someone / have V done for me / someone does V for me",
    explain: "Add these giving verbs to a て-form to give or receive a favour. ～て あげます: I do something for someone. ～て もらいます: I receive someone's action (the doer takes に). ～て くれます: someone does something for me. Gotcha: ～て あげます said directly to a superior sounds condescending.",
    examples: [
      { jp: "わたしは きむらさんに ほんを かして あげました。", ro: "Watashi wa Kimura-san ni hon o kashite agemashita.", en: "I lent Ms. Kimura a book." },
      { jp: "わたしは やまださんに ちずを かいて もらいました。", ro: "Watashi wa Yamada-san ni chizu o kaite moraimashita.", en: "Mr. Yamada drew a map for me." },
      { jp: "ははは わたしに セーターを おくって くれました。", ro: "Haha wa watashi ni sētā o okutte kuremashita.", en: "My mother sent me a sweater." }
    ],
    drills: [
      { type: "fill", jp: "わたしは たなかさんに ちずを かいて ＿＿。", answer: "もらいました", options: ["もらいました", "くれました", "あげました"], en: "Mr. Tanaka drew a map for me." },
      { type: "fill", jp: "ともだちが にもつを もって ＿＿。", answer: "くれました", options: ["くれました", "もらいました", "あげました"], en: "My friend carried my luggage for me." },
      { type: "fill", jp: "わたしは おとうとの しゅくだいを てつだって ＿＿。", answer: "あげました", options: ["あげました", "くれました", "もらいました"], en: "I helped my younger brother with his homework." },
      { type: "choose", q: "What does やまださんに おしえて もらいました mean?", answer: "Mr. Yamada taught me (I received his help).", options: ["Mr. Yamada taught me (I received his help).", "I taught Mr. Yamada.", "Mr. Yamada taught someone else.", "I asked Mr. Yamada, but he didn't teach me."] },
      { type: "choose", q: "In ～て もらいます, which particle marks the person who does the favour?", answer: "に", options: ["に", "を", "で", "へ"] },
      { type: "order", tiles: ["ははが", "セーターを", "おくって", "くれました"], en: "My mother sent me a sweater." },
      { type: "order", tiles: ["わたしは", "ともだちに", "かさを", "かして", "あげました"], en: "I lent my friend an umbrella." }
    ]
  },
  {
    id: "L25-1",
    lesson: 25,
    title: "～たら",
    meaning: "if ~ / when ~ (then)",
    explain: "Add ら to the plain past: ふった → ふったら, やすかった → やすかったら, ひまだった → ひまだったら. It means 'if' for conditions, and also 'when / once' for something sure to happen: えきに ついたら、でんわして ください. Unlike V-dict と, the second half CAN be a request or intention.",
    examples: [
      { jp: "あめが ふったら、でかけません。", ro: "Ame ga futtara, dekakemasen.", en: "If it rains, I won't go out." },
      { jp: "えきに ついたら、でんわして ください。", ro: "Eki ni tsuitara, denwa shite kudasai.", en: "When you get to the station, please call me." },
      { jp: "おかねが あったら、りょこうしたいです。", ro: "Okane ga attara, ryokō shitai desu.", en: "If I had money, I'd like to travel." }
    ],
    drills: [
      { type: "fill", jp: "あめが ＿＿ら、でかけません。", answer: "ふった", options: ["ふった", "ふって", "ふる", "ふり"], en: "If it rains, I won't go out." },
      { type: "fill", jp: "えきに ＿＿、でんわして ください。", answer: "ついたら", options: ["ついたら", "つきたら", "つくたら", "ついったら"], en: "When you get to the station, please call me." },
      { type: "fill", jp: "ひま＿＿、てつだって ください。", answer: "だったら", options: ["だったら", "かったら", "たら", "なったら"], en: "If you're free, please help me." },
      { type: "fill", jp: "＿＿ら、かいます。", answer: "やすかった", options: ["やすかった", "やすいだった", "やすくて", "やすい"], en: "If it's cheap, I'll buy it." },
      { type: "choose", q: "What does うちへ かえったら、すぐ ねます mean?", answer: "When I get home, I'll go straight to bed.", options: ["When I get home, I'll go straight to bed.", "Even if I go home, I won't sleep.", "I went home and slept right away.", "Before going home, I'll sleep."] },
      { type: "order", tiles: ["おかねが", "あったら", "りょこうしたいです"], en: "If I had money, I'd like to travel." }
    ]
  },
  {
    id: "L25-2",
    lesson: 25,
    title: "～ても",
    meaning: "even if ~",
    explain: "て-form + も means 'even if': あめが ふっても、でかけます. い-adjectives: くても (やすくても); な-adjectives and nouns: でも (ひまでも, にちようびでも). With いくら it means 'no matter how much': いくら かんがえても、わかりません.",
    examples: [
      { jp: "あめが ふっても、でかけます。", ro: "Ame ga futte mo, dekakemasu.", en: "Even if it rains, I'll go out." },
      { jp: "いくら かんがえても、わかりません。", ro: "Ikura kangaete mo, wakarimasen.", en: "No matter how much I think about it, I don't understand." },
      { jp: "にちようびでも、はたらきます。", ro: "Nichiyōbi demo, hatarakimasu.", en: "I work even on Sundays." }
    ],
    drills: [
      { type: "fill", jp: "あめが ＿＿も、でかけます。", answer: "ふって", options: ["ふって", "ふった", "ふる", "ふり"], en: "Even if it rains, I'll go out." },
      { type: "fill", jp: "いくら かんがえて＿＿、わかりません。", answer: "も", options: ["も", "から", "は", "ら"], en: "No matter how much I think about it, I don't understand." },
      { type: "fill", jp: "やす＿＿、その くるまは かいません。", answer: "くても", options: ["くても", "いでも", "かったも", "くでも"], en: "Even if it's cheap, I won't buy that car." },
      { type: "fill", jp: "にちようび＿＿、はたらきます。", answer: "でも", options: ["でも", "くても", "たら", "ても"], en: "I work even on Sundays." },
      { type: "choose", q: "What does たかくても、かいます mean?", answer: "Even if it's expensive, I'll buy it.", options: ["Even if it's expensive, I'll buy it.", "If it's expensive, I'll buy it.", "Because it's expensive, I'll buy it.", "It's expensive, so I won't buy it."] },
      { type: "choose", q: "Which says 'If it rains, I won't go'?", answer: "あめが ふったら、いきません。", options: ["あめが ふったら、いきません。", "あめが ふっても、いきません。", "あめが ふるたら、いきません。", "あめが ふっては、いきません。"] },
      { type: "order", tiles: ["いくら", "かんがえても", "わかりません"], en: "No matter how much I think about it, I don't understand." }
    ]
  }
]);
