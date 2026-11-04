// Grammar data N4 part A: Minna no Nihongo II syllabus, Lessons 26–37 (internal lesson 126–137).
// All sentences, explanations and drills are original. Each lesson block holds its grammar points,
// study cards and lesson guide.

// ───────────────────────── LESSON 26 ─────────────────────────
window.GRAMMAR = (window.GRAMMAR || []).concat([
  {
    id: "L126-1",
    lesson: 126,
    title: "Plain form + んです",
    meaning: "Explaining a situation, or asking for an explanation",
    explain: "Add んです to a plain form to give the reason behind something, or use んですか to ask about something you have noticed.",
    examples: [
      { jp: "どうして {早|はや}く {帰|かえ}るんですか。", ro: "Dōshite hayaku kaeru n desu ka.", en: "Why are you leaving early?" },
      { jp: "{今日|きょう}は {母|はは}が {来|く}るんです。", ro: "Kyō wa haha ga kuru n desu.", en: "My mother is coming today, you see." },
      { jp: "いい シャツですね。どこで {買|か}ったんですか。", ro: "Ii shatsu desu ne. Doko de katta n desu ka.", en: "Nice shirt. Where did you buy it?" }
    ],
    drills: [
      { type: "fill", jp: "おなかが いたい＿＿。", answer: "んです", options: ["んです", "なんです", "だんです", "ますです"], en: "I have a stomach ache, you see." },
      { type: "fill", jp: "あの {人|ひと}は {有名|ゆうめい}＿＿んです。", answer: "な", options: ["な", "だ", "の", "に"], en: "That person is famous, you see." },
      { type: "fill", jp: "どうして きのう {来|こ}＿＿んですか。", answer: "なかった", options: ["なかった", "ない", "ました", "なくて"], en: "Why didn't you come yesterday?" },
      { type: "choose", q: "A friend is carrying a very big bag. How do you ask if they are going on a trip?", answer: "{旅行|りょこう}に {行|い}くんですか。", options: ["{旅行|りょこう}に {行|い}くんですか。", "{旅行|りょこう}に {行|い}きますんですか。", "{旅行|りょこう}に {行|い}くなんですか。", "{旅行|りょこう}に {行|い}くだんですか。"] },
      { type: "order", tiles: ["あたまが", "いたい", "んです"], en: "I have a headache, you see." },
      { type: "order", tiles: ["どうして", "{来|こ}なかった", "んですか"], en: "Why didn't you come?" }
    ]
  },
  {
    id: "L126-2",
    lesson: 126,
    title: "～んですが、～て いただけませんか",
    meaning: "Opening a topic, then asking a polite favour",
    explain: "Use ～んですが to set up your situation, then ～て いただけませんか to ask a favour very politely.",
    examples: [
      { jp: "この {漢字|かんじ}の {読|よ}み{方|かた}が わからないんですが、{教|おし}えて いただけませんか。", ro: "Kono kanji no yomikata ga wakaranai n desu ga, oshiete itadakemasen ka.", en: "I don't know how to read this kanji. Could you tell me?" },
      { jp: "{写真|しゃしん}を とって いただけませんか。", ro: "Shashin o totte itadakemasen ka.", en: "Could you take a photo for me?" },
      { jp: "{日本語|にほんご}で {手紙|てがみ}を {書|か}いたんですが、{見|み}て いただけませんか。", ro: "Nihongo de tegami o kaita n desu ga, mite itadakemasen ka.", en: "I wrote a letter in Japanese. Could you look at it for me?" }
    ],
    drills: [
      { type: "fill", jp: "もう {一度|いちど} {言|い}って ＿＿。", answer: "いただけませんか", options: ["いただけませんか", "いただきますか", "あげませんか", "くれますんか"], en: "Could you say that once more, please?" },
      { type: "fill", jp: "この ことばの {意味|いみ}が わからない＿＿、{教|おし}えて いただけませんか。", answer: "んですが", options: ["んですが", "んですか", "ましたが", "なんですが"], en: "I don't know what this word means. Could you tell me?" },
      { type: "fill", jp: "{駅|えき}までの {地図|ちず}を ＿＿ いただけませんか。", answer: "{書|か}いて", options: ["{書|か}いて", "{書|か}き", "{書|か}く", "{書|か}いた"], en: "Could you draw me a map to the station?" },
      { type: "choose", q: "Which is the politest way to ask a teacher to check your essay?", answer: "さくぶんを {見|み}て いただけませんか。", options: ["さくぶんを {見|み}て いただけませんか。", "さくぶんを {見|み}て ください。", "さくぶんを {見|み}て くれる？", "さくぶんを {見|み}て。"] },
      { type: "choose", q: "Which verb form comes before いただけませんか?", answer: "The te-form", options: ["The te-form", "The ます stem", "The dictionary form", "The plain past form"] },
      { type: "order", tiles: ["もう {少|すこ}し", "ゆっくり", "{話|はな}して", "いただけませんか"], en: "Could you speak a little more slowly?" }
    ]
  },
  {
    id: "L126-3",
    lesson: 126,
    title: "Question word + ～たら いいですか",
    meaning: "Asking what you should do",
    explain: "Put a question word before the たら form and add いいですか to ask for advice or instructions.",
    examples: [
      { jp: "この ペットボトルは どこに すてたら いいですか。", ro: "Kono pettobotoru wa doko ni sutetara ii desu ka.", en: "Where should I throw this plastic bottle away?" },
      { jp: "{図書館|としょかん}の カードを {作|つく}りたいんですが、どう したら いいですか。", ro: "Toshokan no kādo o tsukuritai n desu ga, dō shitara ii desu ka.", en: "I want to get a library card. What should I do?" },
      { jp: "{先生|せんせい}に {何|なん}と {言|い}ったら いいですか。", ro: "Sensei ni nan to ittara ii desu ka.", en: "What should I say to the teacher?" }
    ],
    drills: [
      { type: "fill", jp: "この {紙|かみ}は だれに {出|だ}し＿＿ いいですか。", answer: "たら", options: ["たら", "たり", "ない", "ます"], en: "Who should I hand this paper to?" },
      { type: "fill", jp: "{駅|えき}まで ＿＿ {行|い}ったら いいですか。", answer: "どうやって", options: ["どうやって", "どこで", "だれと", "いつ"], en: "How should I get to the station?" },
      { type: "fill", jp: "＿＿を {持|も}って {行|い}ったら いいですか。", answer: "{何|なに}", options: ["{何|なに}", "どこ", "いつ", "どう"], en: "What should I bring?" },
      { type: "fill", jp: "どこで {電車|でんしゃ}を ＿＿ いいですか。", answer: "のりかえたら", options: ["のりかえたら", "のりかえるたら", "のりかえますたら", "のりかえてたら"], en: "Where should I change trains?" },
      { type: "choose", q: "You want to know where to pay. What do you say?", answer: "どこで はらったら いいですか。", options: ["どこで はらったら いいですか。", "どこで はらいましたか。", "どこで はらいたいですか。", "どこで はらって いますか。"] },
      { type: "order", tiles: ["この {手紙|てがみ}は", "どこに", "{出|だ}したら", "いいですか"], en: "Where should I send this letter?" }
    ]
  }
]);
window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {
  "L126-1": {
    formula: ["V plain + んです", "い-adj + んです", "な-adj / N + なんです"],
    points: [
      "Use it to give a reason or explain a situation.",
      "んですか asks about something you noticed or heard.",
      "It joins plain forms, never ます forms.",
      "Don't use it when there is nothing to explain."
    ],
    tables: [
      {
        title: "Group 1 verbs",
        headers: ["ます form", "Present", "Negative", "Past"],
        rows: [
          ["いきます", "いくんです", "いかないんです", "いったんです"],
          ["のみます", "のむんです", "のまないんです", "のんだんです"],
          ["かいます", "かうんです", "かわないんです", "かったんです"]
        ]
      },
      {
        title: "Group 2 verbs",
        headers: ["ます form", "Present", "Negative", "Past"],
        rows: [
          ["たべます", "たべるんです", "たべないんです", "たべたんです"],
          ["みます", "みるんです", "みないんです", "みたんです"]
        ]
      },
      {
        title: "Group 3 verbs",
        headers: ["ます form", "Present", "Negative", "Past"],
        rows: [
          ["します", "するんです", "しないんです", "したんです"],
          ["きます", "くるんです", "こないんです", "きたんです"]
        ]
      },
      {
        title: "Adjectives and nouns",
        headers: ["Word type", "Present", "Negative", "Past"],
        rows: [
          ["い", "いたいんです", "いたくないんです", "いたかったんです"],
          ["な", "ひまなんです", "ひまじゃないんです", "ひまだったんです"],
          ["Noun", "あめなんです", "あめじゃないんです", "あめだったんです"]
        ]
      },
      {
        title: "Plain fact vs explanation",
        headers: ["Japanese", "What it does"],
        rows: [
          ["あしたは やすみです。", "States a fact"],
          ["あしたは やすみなんです。", "Explains why, or gives the background"]
        ]
      }
    ],
    mistakes: [
      { bad: "ひまだんです。", good: "ひまなんです。", why: "な-adjectives and nouns take な, not だ." },
      { bad: "いきますんです。", good: "いくんです。", why: "んです follows the plain form." },
      { bad: "はじめまして。カランなんです。", good: "はじめまして。カランです。", why: "Nothing needs explaining, so plain です is right." }
    ],
    tip: "Think of it as the feeling of 'you see...' or 'so what happened is...'."
  },
  "L126-2": {
    formula: ["～んですが、V て いただけませんか"],
    points: [
      "～んですが sets the scene and leaves the sentence open.",
      "The が here does not really mean but.",
      "～て いただけませんか is politer than ～て ください.",
      "Use it with teachers, strangers and anyone you are asking a real favour."
    ],
    tables: [
      {
        title: "Group 1: the usual て-form changes",
        headers: ["ます form", "Polite request"],
        rows: [
          ["かいます", "かって いただけませんか"],
          ["まちます", "まって いただけませんか"],
          ["とります", "とって いただけませんか"],
          ["よみます", "よんで いただけませんか"],
          ["よびます", "よんで いただけませんか"],
          ["かきます", "かいて いただけませんか"],
          ["いそぎます", "いそいで いただけませんか"],
          ["はなします", "はなして いただけませんか"],
          ["いきます", "いって いただけませんか"]
        ]
      },
      {
        title: "Group 2: drop ます, add て",
        headers: ["ます form", "Polite request"],
        rows: [
          ["おしえます", "おしえて いただけませんか"],
          ["みます", "みて いただけませんか"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "Polite request"],
        rows: [
          ["します", "して いただけませんか"],
          ["きます", "きて いただけませんか"]
        ]
      },
      {
        title: "Requests, from plain to polite",
        headers: ["Japanese", "Level"],
        rows: [
          ["まって。", "Close friends only"],
          ["まって ください。", "Polite"],
          ["まって いただけませんか。", "Very polite"]
        ]
      }
    ],
    mistakes: [
      { bad: "おしえます いただけませんか。", good: "おしえて いただけませんか。", why: "It joins the て-form." },
      { bad: "わからないんですか、おしえて いただけませんか。", good: "わからないんですが、おしえて いただけませんか。", why: "The opener ends in が. か would make it a question." }
    ],
    tip: "Say your situation first and your request second, and you will sound natural."
  },
  "L126-3": {
    formula: ["Question word + V たら いいですか", "～んですが、Question word + V たら いいですか"],
    points: [
      "Use it to ask for advice or instructions.",
      "The verb is in the たら form.",
      "Open with ～んですが to explain your situation first.",
      "Choose the question word for what you need to know."
    ],
    tables: [
      {
        title: "Group 1: the た-form plus ら",
        headers: ["ます form", "たら form"],
        rows: [
          ["かいます", "かったら"],
          ["まちます", "まったら"],
          ["かえります", "かえったら"],
          ["のみます", "のんだら"],
          ["よびます", "よんだら"],
          ["かきます", "かいたら"],
          ["いそぎます", "いそいだら"],
          ["だします", "だしたら"],
          ["いきます", "いったら"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "たら form"],
        rows: [
          ["たべます", "たべたら"],
          ["みます", "みたら"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "たら form"],
        rows: [
          ["します", "したら"],
          ["きます", "きたら"]
        ]
      },
      {
        title: "Pick your question word",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["どこで かったら いいですか。", "Where should I buy it?"],
          ["どうやって いったら いいですか。", "How should I get there?"],
          ["なにを もって いったら いいですか。", "What should I bring?"],
          ["だれに きいたら いいですか。", "Who should I ask?"],
          ["いつ きたら いいですか。", "When should I come?"]
        ]
      }
    ],
    mistakes: [
      { bad: "どこで かうたら いいですか。", good: "どこで かったら いいですか。", why: "たら joins the た-form, not the dictionary form." },
      { bad: "どこで かったら ですか。", good: "どこで かったら いいですか。", why: "Keep いい. The full ending is いいですか." }
    ],
    tip: "どうやって いったら いいですか is the sentence to memorise. You will use it on every trip."
  }
});
window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  126: {
    can: ["Explain a reason with んです", "Ask about something you have noticed", "Ask a polite favour", "Ask what you should do"],
    first: ["さがします", "おくれます", "まにあいます", "ひろいます", "れんらくします", "ごみ", "ばしょ", "ボランティア", "こんど", "ずいぶん", "ちょくせつ", "いつでも"],
    tip: "Get the joins of んです right first, because the other two patterns open with ～んですが."
  }
});

// ───────────────────────── LESSON 27 ─────────────────────────
window.GRAMMAR = (window.GRAMMAR || []).concat([
  {
    id: "L127-1",
    lesson: 127,
    title: "Potential verbs",
    meaning: "Saying what you can do",
    explain: "Potential verbs mean can do, and what you can do is usually marked with が instead of を.",
    examples: [
      { jp: "カランさんは {漢字|かんじ}が {百|ひゃく}ぐらい {書|か}けます。", ro: "Karan-san wa kanji ga hyaku gurai kakemasu.", en: "Karan can write about a hundred kanji." },
      { jp: "モチは {電車|でんしゃ}の {時間|じかん}が ぜんぶ {言|い}えます。", ro: "Mochi wa densha no jikan ga zenbu iemasu.", en: "Mochi can say all the train times." },
      { jp: "{明日|あした}は {来|こ}られますか。", ro: "Ashita wa koraremasu ka.", en: "Can you come tomorrow?" }
    ],
    drills: [
      { type: "fill", jp: "カランさんは {漢字|かんじ}が ＿＿。", answer: "{読|よ}めます", options: ["{読|よ}めます", "{読|よ}みます", "{読|よ}まれます", "{読|よ}められます"], en: "Karan can read kanji." },
      { type: "fill", jp: "{明日|あした}の {朝|あさ} {六時|ろくじ}に ＿＿か。", answer: "{起|お}きられます", options: ["{起|お}きられます", "{起|お}きります", "{起|お}けます", "{起|お}きさせます"], en: "Can you get up at six tomorrow morning?" },
      { type: "fill", jp: "{明日|あした}の パーティーに ＿＿か。", answer: "{来|こ}られます", options: ["{来|こ}られます", "{来|き}られます", "{来|く}られます", "{来|き}れます"], en: "Can you come to tomorrow's party?" },
      { type: "choose", q: "What is the potential form of はなします?", answer: "{話|はな}せます", options: ["{話|はな}せます", "{話|はな}されます", "{話|はな}しられます", "{話|はな}しれます"] },
      { type: "order", tiles: ["モチは", "{魚|さかな}が", "{食|た}べられます"], en: "Mochi can eat fish." },
      { type: "order", tiles: ["{車|くるま}の", "{運転|うんてん}が", "できます"], en: "I can drive a car." }
    ]
  },
  {
    id: "L127-2",
    lesson: 127,
    title: "みえます・きこえます",
    meaning: "Something can be seen or heard naturally",
    explain: "みえます and きこえます mean something comes into your eyes or ears by itself, while みられます and きけます mean you can see or hear it because you chose to.",
    examples: [
      { jp: "この へやから {海|うみ}が {見|み}えます。", ro: "Kono heya kara umi ga miemasu.", en: "You can see the sea from this room." },
      { jp: "{朝|あさ}に なると、{駅|えき}の {方|ほう}から {電車|でんしゃ}の {音|おと}が {聞|き}こえます。", ro: "Asa ni naru to, eki no hō kara densha no oto ga kikoemasu.", en: "When morning comes, you can hear trains from the direction of the station." },
      { jp: "{駅|えき}の {前|まえ}の {映画館|えいがかん}で {新|あたら}しい {映画|えいが}が {見|み}られます。", ro: "Eki no mae no eigakan de atarashii eiga ga miraremasu.", en: "You can see the new film at the cinema in front of the station." }
    ],
    drills: [
      { type: "fill", jp: "ここから {山|やま}が ＿＿。", answer: "{見|み}えます", options: ["{見|み}えます", "{見|み}ます", "{見|み}えられます", "{見|み}せます"], en: "You can see the mountains from here." },
      { type: "fill", jp: "となりの へやから ピアノの {音|おと}が ＿＿。", answer: "{聞|き}こえます", options: ["{聞|き}こえます", "{聞|き}きます", "{聞|き}こえられます", "{聞|き}かせます"], en: "I can hear a piano from the next room." },
      { type: "fill", jp: "ここから {海|うみ}＿＿ {見|み}えます。", answer: "が", options: ["が", "を", "へ", "で"], en: "You can see the sea from here." },
      { type: "choose", q: "A film is showing at a nearby cinema. How do you say you can see it there?", answer: "あの {映画館|えいがかん}で {見|み}られます。", options: ["あの {映画館|えいがかん}で {見|み}られます。", "あの {映画館|えいがかん}で {見|み}えます。", "あの {映画館|えいがかん}で {見|み}せます。", "あの {映画館|えいがかん}で {見|み}ました。"] },
      { type: "choose", q: "What does きこえます describe?", answer: "A sound reaches your ears by itself", options: ["A sound reaches your ears by itself", "You go somewhere to listen on purpose", "You ask someone a question", "You make a sound yourself"] },
      { type: "order", tiles: ["{電車|でんしゃ}の", "{音|おと}が", "{聞|き}こえます"], en: "I can hear the trains." }
    ]
  },
  {
    id: "L127-3",
    lesson: 127,
    title: "N が できます",
    meaning: "Something gets built, finished or ready",
    explain: "Besides can do, N が できます also means a thing comes into being: it is built, finished or ready.",
    examples: [
      { jp: "{町|まち}に {新|あたら}しい {図書館|としょかん}が できました。", ro: "Machi ni atarashii toshokan ga dekimashita.", en: "A new library has been built in town." },
      { jp: "ごはんが できましたよ。", ro: "Gohan ga dekimashita yo.", en: "Dinner is ready." },
      { jp: "{服|ふく}は {明日|あした} できます。", ro: "Fuku wa ashita dekimasu.", en: "The clothes will be ready tomorrow." }
    ],
    drills: [
      { type: "fill", jp: "{駅|えき}の {近|ちか}くに {新|あたら}しい ホテルが ＿＿。", answer: "できました", options: ["できました", "しました", "つくりました", "なりました"], en: "A new hotel has been built near the station." },
      { type: "fill", jp: "ごはんが ＿＿よ。{食|た}べましょう。", answer: "できました", options: ["できました", "しました", "たべました", "できません"], en: "The meal is ready. Let's eat." },
      { type: "fill", jp: "{町|まち}に {大|おお}きい こうえん＿＿ できました。", answer: "が", options: ["が", "を", "へ", "で"], en: "A big park has been made in town." },
      { type: "choose", q: "What does 「しゃしんは あした できます」 mean?", answer: "The photos will be ready tomorrow.", options: ["The photos will be ready tomorrow.", "I will buy the photos tomorrow.", "The photos were lost yesterday.", "I took the photos yesterday."] },
      { type: "choose", q: "Which sentence uses できます to mean 'was built'?", answer: "{新|あたら}しい {駅|えき}が できました。", options: ["{新|あたら}しい {駅|えき}が できました。", "カランさんは テニスが できます。", "ここで {買|か}い{物|もの}が できます。", "モチは {日本語|にほんご}が できます。"] },
      { type: "order", tiles: ["{町|まち}に", "{新|あたら}しい {図書館|としょかん}が", "できました"], en: "A new library has been built in town." }
    ]
  },
  {
    id: "L127-4",
    lesson: 127,
    title: "～しか + negative",
    meaning: "Only, nothing but",
    explain: "しか means only, and the verb after it must always be negative.",
    examples: [
      { jp: "{朝|あさ}は コーヒーしか {飲|の}みません。", ro: "Asa wa kōhī shika nomimasen.", en: "In the morning I drink nothing but coffee." },
      { jp: "{電車|でんしゃ}まで {五分|ごふん}しか ありません。", ro: "Densha made gofun shika arimasen.", en: "There are only five minutes until the train." },
      { jp: "モチは {魚|さかな}しか {食|た}べません。", ro: "Mochi wa sakana shika tabemasen.", en: "Mochi eats nothing but fish." }
    ],
    drills: [
      { type: "fill", jp: "{百円|ひゃくえん}＿＿ ありません。", answer: "しか", options: ["しか", "だけ", "から", "まで"], en: "I only have 100 yen." },
      { type: "fill", jp: "{朝|あさ}ごはんは パンしか ＿＿。", answer: "{食|た}べません", options: ["{食|た}べません", "{食|た}べます", "{食|た}べました", "{食|た}べたいです"], en: "I only eat bread for breakfast." },
      { type: "fill", jp: "きのうは {三時間|さんじかん}しか ＿＿。", answer: "ねませんでした", options: ["ねませんでした", "ねました", "ねます", "ねて います"], en: "Yesterday I only slept for three hours." },
      { type: "choose", q: "Which is correct for 'Only Karan came'?", answer: "カランさんしか {来|き}ませんでした。", options: ["カランさんしか {来|き}ませんでした。", "カランさんしか {来|き}ました。", "カランさんがしか {来|き}ませんでした。", "カランさんをしか {来|き}ませんでした。"] },
      { type: "choose", q: "What must come after しか?", answer: "A negative verb", options: ["A negative verb", "A positive verb", "A polite request", "A plain past verb"] },
      { type: "order", tiles: ["{日本語|にほんご}は", "{少|すこ}し", "しか", "{話|はな}せません"], en: "I can only speak a little Japanese." }
    ]
  }
]);
window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {
  "L127-1": {
    formula: ["N が + potential verb"],
    points: [
      "Group 1: change the sound before ます from the い row to え.",
      "Group 2: drop ます and add られます.",
      "Group 3: します becomes できます, and きます becomes こられます.",
      "を usually becomes が. Particles like へ, に and で stay.",
      "Every potential verb then works like a Group 2 verb."
    ],
    tables: [
      {
        title: "Group 1: い row becomes え row",
        headers: ["Before ます", "Becomes", "ます form", "Potential"],
        rows: [
          ["い", "え", "かいます", "かえます"],
          ["き", "け", "かきます", "かけます"],
          ["ぎ", "げ", "およぎます", "およげます"],
          ["し", "せ", "はなします", "はなせます"],
          ["ち", "て", "まちます", "まてます"],
          ["に", "ね", "しにます", "しねます"],
          ["び", "べ", "よびます", "よべます"],
          ["み", "め", "よみます", "よめます"],
          ["り", "れ", "つくります", "つくれます"]
        ]
      },
      {
        title: "Group 2: drop ます, add られます",
        headers: ["ます form", "Potential"],
        rows: [
          ["たべます", "たべられます"],
          ["おきます", "おきられます"],
          ["みます", "みられます"]
        ]
      },
      {
        title: "Group 3: memorise these",
        headers: ["ます form", "Potential"],
        rows: [
          ["します", "できます"],
          ["べんきょうします", "べんきょうできます"],
          ["きます", "こられます"]
        ]
      },
      {
        title: "Potential verbs conjugate like Group 2",
        headers: ["Dictionary", "Negative", "Past", "て-form"],
        rows: [
          ["よめる", "よめない", "よめた", "よめて"],
          ["たべられる", "たべられない", "たべられた", "たべられて"],
          ["できる", "できない", "できた", "できて"]
        ]
      },
      {
        title: "What happens to the particle",
        headers: ["Normal verb", "Potential verb"],
        rows: [
          ["すしを たべます。", "すしが たべられます。"],
          ["えいごを はなします。", "えいごが はなせます。"],
          ["とうきょうへ いきます。", "とうきょうへ いけます。"]
        ]
      }
    ],
    mistakes: [
      { bad: "およげられます。", good: "およげます。", why: "Group 1 changes the sound only. Do not add られ." },
      { bad: "きられます。", good: "こられます。", why: "The potential of きます starts with こ." },
      { bad: "たべれます。", good: "たべられます。", why: "Dropping ら is casual speech. Keep it in careful Japanese." }
    ],
    tip: "Say these aloud until they feel natural: かけます、はなせます、まてます、よめます、つくれます."
  },
  "L127-2": {
    formula: ["N が みえます", "N が きこえます"],
    points: [
      "These two are about what reaches your eyes and ears.",
      "You don't have to try. It just happens.",
      "みられます and きけます mean you can because you chose to.",
      "The thing seen or heard takes が."
    ],
    tables: [
      {
        title: "Natural vs chosen",
        headers: ["Natural", "Chosen", "Difference"],
        rows: [
          ["うみが みえます。", "えいがが みられます。", "It's in view vs you can go and watch it"],
          ["おとが きこえます。", "おんがくが きけます。", "It reaches you vs you can listen to it"]
        ]
      },
      {
        title: "Negative and past",
        headers: ["Form", "See", "Hear"],
        rows: [
          ["Present", "みえます", "きこえます"],
          ["Negative", "みえません", "きこえません"],
          ["Past", "みえました", "きこえました"],
          ["Past negative", "みえませんでした", "きこえませんでした"]
        ]
      }
    ],
    mistakes: [
      { bad: "ここから やまを みえます。", good: "ここから やまが みえます。", why: "These verbs take が, not を." },
      { bad: "えいがかんで えいがが みえます。", good: "えいがかんで えいがが みられます。", why: "Watching a film is a choice, so use みられます." }
    ],
    tip: "If you could not stop it even if you tried, use みえます or きこえます."
  },
  "L127-3": {
    formula: ["N が できます", "N が できました"],
    points: [
      "It means a new thing has come into being.",
      "It can be a building, a meal or finished work.",
      "The thing takes が.",
      "The same verb also means can, so read the context."
    ],
    tables: [
      {
        title: "The three meanings of できます",
        headers: ["Meaning", "Japanese", "In English"],
        rows: [
          ["Ability", "カランさんは テニスが できます。", "Karan can play tennis."],
          ["Built", "えきに みせが できました。", "A shop has opened at the station."],
          ["Ready", "ごはんが できました。", "The meal is ready."]
        ]
      }
    ],
    mistakes: [
      { bad: "こうえんを できました。", good: "こうえんが できました。", why: "The thing that came into being takes が." },
      { bad: "こうえんが つくりました。", good: "こうえんが できました。", why: "つくります needs a person who makes it." }
    ],
    tip: "できました with a building or a meal means there and done."
  },
  "L127-4": {
    formula: ["N + しか + V ません", "Quantity + しか + V ません"],
    points: [
      "しか means only, and it stresses that the amount is too small.",
      "The verb after it is always negative.",
      "が and を disappear. Other particles stay before しか.",
      "だけ also means only, but it takes a positive verb."
    ],
    tables: [
      {
        title: "しか vs だけ",
        headers: ["Word", "Japanese", "Feeling"],
        rows: [
          ["だけ", "せんえんだけ あります。", "Neutral: I have just 1,000 yen"],
          ["しか", "せんえんしか ありません。", "Not enough: I only have 1,000 yen"]
        ]
      },
      {
        title: "What happens to the particle",
        headers: ["Normal", "With しか"],
        rows: [
          ["パンを たべます。", "パンしか たべません。"],
          ["カランさんが きました。", "カランさんしか きませんでした。"],
          ["とうきょうへ いきます。", "とうきょうへしか いきません。"],
          ["ここで かえます。", "ここでしか かえません。"]
        ]
      }
    ],
    mistakes: [
      { bad: "パンしか たべます。", good: "パンしか たべません。", why: "しか always needs a negative verb." },
      { bad: "パンをしか たべません。", good: "パンしか たべません。", why: "を drops out before しか." }
    ],
    tip: "The verb looks negative but the meaning is positive: you do have some, just not much."
  }
});
window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  127: {
    can: ["Say what you can and can't do", "Say what you can see or hear", "Say something has been built or is ready", "Say only with しか"],
    first: ["かいます", "みえます", "きこえます", "ひらきます", "たてます", "しんぱい", "ペット", "けしき", "むかし", "どうぐ", "ほかの", "はっきり"],
    tip: "Drill the potential forms until they are automatic, because Lesson 36 builds on them."
  }
});

// ───────────────────────── LESSON 28 ─────────────────────────
window.GRAMMAR = (window.GRAMMAR || []).concat([
  {
    id: "L128-1",
    lesson: 128,
    title: "V ます stem + ながら",
    meaning: "Doing two things at the same time",
    explain: "ながら joins two actions by the same person, and the verb at the end of the sentence is the main action.",
    examples: [
      { jp: "ラジオを {聞|き}きながら {料理|りょうり}を {作|つく}ります。", ro: "Rajio o kikinagara ryōri o tsukurimasu.", en: "I cook while listening to the radio." },
      { jp: "モチは {歌|うた}を {歌|うた}いながら {駅|えき}を そうじします。", ro: "Mochi wa uta o utainagara eki o sōji shimasu.", en: "Mochi cleans the station while singing." },
      { jp: "{大学|だいがく}に {行|い}きながら、{駅|えき}で アルバイトを して います。", ro: "Daigaku ni ikinagara, eki de arubaito o shite imasu.", en: "I work part-time at the station while going to university." }
    ],
    drills: [
      { type: "fill", jp: "テレビを {見|み}＿＿ ごはんを {食|た}べます。", answer: "ながら", options: ["ながら", "たり", "ましょう", "に"], en: "I eat while watching TV." },
      { type: "fill", jp: "{歌|うた}を ＿＿ {歩|ある}きます。", answer: "{歌|うた}いながら", options: ["{歌|うた}いながら", "{歌|うた}うながら", "{歌|うた}ったながら", "{歌|うた}いますながら"], en: "I walk while singing." },
      { type: "fill", jp: "アルバイトを ＿＿ {大学|だいがく}に {行|い}って います。", answer: "しながら", options: ["しながら", "するながら", "したながら", "しますながら"], en: "I go to university while doing a part-time job." },
      { type: "choose", q: "In テレビを みながら ごはんを たべます, what is the main action?", answer: "Eating", options: ["Eating", "Watching TV", "Cooking", "Sleeping"] },
      { type: "choose", q: "Which is correct for 'I walked while talking'?", answer: "{話|はな}しながら {歩|ある}きました。", options: ["{話|はな}しながら {歩|ある}きました。", "{話|はな}したながら {歩|ある}きました。", "{話|はな}すながら {歩|ある}きました。", "{話|はな}しますながら {歩|ある}きました。"] },
      { type: "order", tiles: ["コーヒーを", "{飲|の}みながら", "{新聞|しんぶん}を", "{読|よ}みます"], en: "I read the newspaper while drinking coffee." }
    ]
  },
  {
    id: "L128-2",
    lesson: 128,
    title: "V て います (habit)",
    meaning: "Something you do regularly",
    explain: "～て います can also describe a regular habit or a job, and ～て いました describes a habit in the past.",
    examples: [
      { jp: "{毎週|まいしゅう} {土曜日|どようび}に テニスを して います。", ro: "Maishū doyōbi ni tenisu o shite imasu.", en: "I play tennis every Saturday." },
      { jp: "{兄|あに}は {銀行|ぎんこう}で はたらいて います。", ro: "Ani wa ginkō de hataraite imasu.", en: "My older brother works at a bank." },
      { jp: "{子|こ}どもの とき、{毎日|まいにち} {川|かわ}で あそんで いました。", ro: "Kodomo no toki, mainichi kawa de asonde imashita.", en: "When I was a child, I played in the river every day." }
    ],
    drills: [
      { type: "fill", jp: "{毎朝|まいあさ} パンを {食|た}べて ＿＿。", answer: "います", options: ["います", "ください", "みました", "あります"], en: "I eat bread every morning." },
      { type: "fill", jp: "{子|こ}どもの とき、ピアノを {習|なら}って ＿＿。", answer: "いました", options: ["いました", "います", "ください", "あげます"], en: "I took piano lessons when I was a child." },
      { type: "fill", jp: "{毎週|まいしゅう} {友|とも}だちと サッカーを ＿＿ います。", answer: "して", options: ["して", "し", "する", "した"], en: "I play football with my friends every week." },
      { type: "choose", q: "How do you say that your father's job is at a bank?", answer: "{父|ちち}は {銀行|ぎんこう}で はたらいて います。", options: ["{父|ちち}は {銀行|ぎんこう}で はたらいて います。", "{父|ちち}は {銀行|ぎんこう}で はたらいて ください。", "{父|ちち}は {銀行|ぎんこう}で はたらきたいです。", "{父|ちち}は {銀行|ぎんこう}で はたらきましょう。"] },
      { type: "choose", q: "What does 「まいばん ギターを ひいて います」 mean?", answer: "I play the guitar every evening.", options: ["I play the guitar every evening.", "I played the guitar once last night.", "I want to play the guitar tonight.", "I can't play the guitar in the evening."] },
      { type: "order", tiles: ["モチは", "{駅|えき}で", "はたらいて", "います"], en: "Mochi works at the station." }
    ]
  },
  {
    id: "L128-3",
    lesson: 128,
    title: "Plain form + し、～し",
    meaning: "Listing several reasons or points",
    explain: "し links plain forms to list points or reasons, with the idea that there is more where that came from.",
    examples: [
      { jp: "この {店|みせ}は {安|やす}いし、おいしいし、よく {来|き}ます。", ro: "Kono mise wa yasui shi, oishii shi, yoku kimasu.", en: "This restaurant is cheap and tasty, so I come here often." },
      { jp: "カランさんは {親切|しんせつ}だし、おもしろいし、{友|とも}だちが {多|おお}いです。", ro: "Karan-san wa shinsetsu da shi, omoshiroi shi, tomodachi ga ōi desu.", en: "Karan is kind and funny, so he has lots of friends." },
      { jp: "{雨|あめ}も ふって いるし、{風|かぜ}も {強|つよ}いし、{今日|きょう}は うちに います。", ro: "Ame mo futte iru shi, kaze mo tsuyoi shi, kyō wa uchi ni imasu.", en: "It's raining and windy too, so I'm staying home today." }
    ],
    drills: [
      { type: "fill", jp: "この へやは {広|ひろ}い＿＿、{明|あか}るいし、いい へやです。", answer: "し", options: ["し", "と", "に", "を"], en: "This room is spacious and bright. It's a good room." },
      { type: "fill", jp: "この {町|まち}は しずか＿＿し、{人|ひと}も {親切|しんせつ}です。", answer: "だ", options: ["だ", "な", "に", "で"], en: "This town is quiet, and the people are kind too." },
      { type: "fill", jp: "{今日|きょう}は {休|やす}み＿＿し、{天気|てんき}も いいし、{出|で}かけましょう。", answer: "だ", options: ["だ", "の", "な", "に"], en: "It's a day off and the weather is good, so let's go out." },
      { type: "fill", jp: "ねつも あるし、あたまも ＿＿し、{今日|きょう}は {休|やす}みます。", answer: "いたい", options: ["いたい", "いたく", "いたいだ", "いたくて"], en: "I have a fever and a headache too, so I'm taking today off." },
      { type: "choose", q: "Which sentence gives two reasons correctly?", answer: "{安|やす}いし、おいしいし、この {店|みせ}が すきです。", options: ["{安|やす}いし、おいしいし、この {店|みせ}が すきです。", "{安|やす}いだし、おいしいだし、この {店|みせ}が すきです。", "{安|やす}くし、おいしくし、この {店|みせ}が すきです。", "{安|やす}いのし、おいしいのし、この {店|みせ}が すきです。"] },
      { type: "order", tiles: ["{雨|あめ}も", "ふって いるし", "{風|かぜ}も", "{強|つよ}いし", "うちに います"], en: "It's raining and windy too, so I'm staying home." }
    ]
  }
]);
window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {
  "L128-1": {
    formula: ["V1 ます stem + ながら + V2"],
    points: [
      "Take off ます and add ながら.",
      "V2, at the end, is the main action.",
      "Tense goes on V2 only. ながら never changes.",
      "Both actions must be done by the same person.",
      "It also works for long periods, like working while studying."
    ],
    tables: [
      {
        title: "Group 1",
        headers: ["ます form", "ながら form"],
        rows: [
          ["ききます", "ききながら"],
          ["のみます", "のみながら"],
          ["うたいます", "うたいながら"],
          ["あるきます", "あるきながら"],
          ["はなします", "はなしながら"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "ながら form"],
        rows: [
          ["たべます", "たべながら"],
          ["みます", "みながら"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "ながら form"],
        rows: [
          ["します", "しながら"],
          ["きます", "きながら"],
          ["べんきょうします", "べんきょうしながら"]
        ]
      },
      {
        title: "Which action is the main one?",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["おんがくを ききながら はしります。", "I run while listening to music."],
          ["はしりながら おんがくを ききます。", "I listen to music while running."]
        ]
      }
    ],
    mistakes: [
      { bad: "コーヒーを のむながら よみます。", good: "コーヒーを のみながら よみます。", why: "ながら joins the ます stem." },
      { bad: "わたしが よみながら、カランさんが かきます。", good: "わたしが よんで、カランさんが かきます。", why: "ながら needs one person doing both actions." }
    ],
    tip: "Put the action you care about most at the end of the sentence."
  },
  "L128-2": {
    formula: ["V て います", "V て いました"],
    points: [
      "Lesson 14 used ～て います for right now. This use is for habits.",
      "Time words like まいあさ or まいしゅう make it clear.",
      "It also describes what someone does for a living.",
      "～て いました describes a past habit that has ended."
    ],
    tables: [
      {
        title: "Group 1: て-form + います",
        headers: ["ます form", "Habit"],
        rows: [
          ["かいます", "かって います"],
          ["はたらきます", "はたらいて います"],
          ["およぎます", "およいで います"],
          ["はなします", "はなして います"],
          ["はしります", "はしって います"],
          ["よみます", "よんで います"],
          ["あそびます", "あそんで います"],
          ["いきます", "いって います"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "Habit"],
        rows: [
          ["たべます", "たべて います"],
          ["ねます", "ねて います"],
          ["みます", "みて います"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "Habit"],
        rows: [
          ["します", "して います"],
          ["きます", "きて います"]
        ]
      },
      {
        title: "Three uses of ～て います so far",
        headers: ["Use", "Japanese", "Meaning"],
        rows: [
          ["Right now", "いま ごはんを たべて います。", "I am eating now."],
          ["Habit", "まいあさ パンを たべて います。", "I eat bread every morning."],
          ["Job", "あには ぎんこうで はたらいて います。", "My brother works at a bank."]
        ]
      }
    ],
    mistakes: [
      { bad: "こどもの とき、まいにち あそんで います。", good: "こどもの とき、まいにち あそんで いました。", why: "A habit in the past needs ～て いました." }
    ],
    tip: "Ask yourself: is this one moment or my life at the moment? Both use ～て います."
  },
  "L128-3": {
    formula: ["V plain + し、～", "い-adj + し、～", "な-adj / N + だし、～"],
    points: [
      "Use it to add points that all push in one direction.",
      "It suggests there are even more reasons.",
      "も often replaces が or を: あめも ふって いるし.",
      "The last part often gives the conclusion.",
      "それに adds one more point at the start of a sentence."
    ],
    tables: [
      {
        title: "How each word type joins",
        headers: ["Word type", "Present", "Negative", "Past"],
        rows: [
          ["Group 1 verb", "いくし", "いかないし", "いったし"],
          ["Group 2 verb", "たべるし", "たべないし", "たべたし"],
          ["Group 3 verb", "するし", "しないし", "したし"],
          ["Group 3 verb", "くるし", "こないし", "きたし"],
          ["い", "やすいし", "やすくないし", "やすかったし"],
          ["な", "しずかだし", "しずかじゃないし", "しずかだったし"],
          ["Noun", "あめだし", "あめじゃないし", "あめだったし"]
        ]
      },
      {
        title: "Two ways to finish",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["やすいし、おいしいし、よく きます。", "Cheap, tasty, so I come often."],
          ["この みせは やすいです。それに、おいしいです。", "This place is cheap. On top of that, it's tasty."]
        ]
      }
    ],
    mistakes: [
      { bad: "しずかし、いいです。", good: "しずかだし、いいです。", why: "な-adjectives and nouns need だ before し." },
      { bad: "やすいだし、いいです。", good: "やすいし、いいです。", why: "い-adjectives join し directly." }
    ],
    tip: "Unlike から, し says 'and that is not all'. Use it when you have a pile of reasons."
  }
});
window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  128: {
    can: ["Say you do two things at once", "Talk about your habits and past habits", "Give several reasons at once"],
    first: ["うれます", "おどります", "かみます", "えらびます", "かよいます", "まじめ", "ねっしん", "にんき", "けいけん", "きゅうりょう", "ばんぐみ", "しょうらい"],
    tip: "Build one sentence about yourself with each pattern: your habit, your two-at-once action, your three reasons."
  }
});

// ───────────────────────── LESSON 29 ─────────────────────────
window.GRAMMAR = (window.GRAMMAR || []).concat([
  {
    id: "L129-1",
    lesson: 129,
    title: "V て います (state)",
    meaning: "The result of a change is still there",
    explain: "With verbs of change such as あきます or こわれます, ～て います describes the state left after the change happened.",
    examples: [
      { jp: "となりの へやの {電気|でんき}が ついて います。", ro: "Tonari no heya no denki ga tsuite imasu.", en: "The light in the next room is on." },
      { jp: "{駅|えき}の エレベーターは こわれて います。", ro: "Eki no erebētā wa kowarete imasu.", en: "The lift at the station is out of order." },
      { jp: "{駅|えき}の {前|まえ}に タクシーが {止|と}まって います。", ro: "Eki no mae ni takushī ga tomatte imasu.", en: "A taxi is parked in front of the station." }
    ],
    drills: [
      { type: "fill", jp: "まどが {開|あ}いて ＿＿。", answer: "います", options: ["います", "あります", "ください", "おきます"], en: "The window is open." },
      { type: "fill", jp: "この パソコンは ＿＿ います。", answer: "こわれて", options: ["こわれて", "こわして", "こわれって", "こわれ"], en: "This computer is broken." },
      { type: "fill", jp: "{店|みせ}の {前|まえ}に {車|くるま}が ＿＿ います。", answer: "{止|と}まって", options: ["{止|と}まって", "{止|と}めて", "{止|と}まりて", "{止|と}まて"], en: "A car is parked in front of the shop." },
      { type: "choose", q: "A cup fell and is now in pieces on the floor. What do you say?", answer: "カップが われて います。", options: ["カップが われて います。", "カップが わって います。", "カップが われて あります。", "カップを われて います。"] },
      { type: "choose", q: "What does まどが しまって います describe?", answer: "The window is closed now.", options: ["The window is closed now.", "Someone is closing the window now.", "The window will close soon.", "Please close the window."] },
      { type: "order", tiles: ["シャツが", "よごれて", "います"], en: "The shirt is dirty." }
    ]
  },
  {
    id: "L129-2",
    lesson: 129,
    title: "V て しまいます・しまいました (finish)",
    meaning: "Doing something completely",
    explain: "～て しまいます means you will finish something completely, and ～て しまいました means it is all done.",
    examples: [
      { jp: "しゅくだいは もう やって しまいました。", ro: "Shukudai wa mō yatte shimaimashita.", en: "I have already finished my homework." },
      { jp: "この {本|ほん}は {今日|きょう}じゅうに {読|よ}んで しまいます。", ro: "Kono hon wa kyōjū ni yonde shimaimasu.", en: "I'll finish reading this book today." },
      { jp: "{昼|ひる}までに レポートを {書|か}いて しまいます。", ro: "Hiru made ni repōto o kaite shimaimasu.", en: "I'll get the report written by noon." }
    ],
    drills: [
      { type: "fill", jp: "{本|ほん}は ぜんぶ {読|よ}んで ＿＿。", answer: "しまいました", options: ["しまいました", "いきました", "ください", "あげました"], en: "I've finished reading the whole book." },
      { type: "fill", jp: "{明日|あした}までに この {仕事|しごと}を やって ＿＿。", answer: "しまいます", options: ["しまいます", "しまいました", "いました", "みました"], en: "I will get this work finished by tomorrow." },
      { type: "fill", jp: "{今日|きょう}じゅうに レポートを ＿＿ しまいます。", answer: "{書|か}いて", options: ["{書|か}いて", "{書|か}き", "{書|か}く", "{書|か}いた"], en: "I'll finish writing the report today." },
      { type: "choose", q: "What does ～て しまいます add in レポートを かいて しまいます?", answer: "Finishing it completely", options: ["Finishing it completely", "Trying it out", "Doing it for someone", "Being unable to do it"] },
      { type: "choose", q: "You have finished all of your homework. What do you say?", answer: "しゅくだいは ぜんぶ やって しまいました。", options: ["しゅくだいは ぜんぶ やって しまいました。", "しゅくだいは ぜんぶ やって しまいます。", "しゅくだいは まだ やって いません。", "しゅくだいは ぜんぶ やりたいです。"] },
      { type: "order", tiles: ["ケーキを", "{食|た}べて", "しまいました"], en: "I ate up all the cake." }
    ]
  },
  {
    id: "L129-3",
    lesson: 129,
    title: "V て しまいました (regret)",
    meaning: "Something unfortunate happened",
    explain: "～て しまいました also shows regret or embarrassment that something has gone wrong.",
    examples: [
      { jp: "{大切|たいせつ}な メールを けして しまいました。", ro: "Taisetsu na mēru o keshite shimaimashita.", en: "I've gone and deleted an important email." },
      { jp: "{友|とも}だちの {名前|なまえ}を まちがえて しまいました。", ro: "Tomodachi no namae o machigaete shimaimashita.", en: "I got my friend's name wrong." },
      { jp: "パスポートを なくして しまいました。どうしましょう。", ro: "Pasupōto o nakushite shimaimashita. Dō shimashō.", en: "I've lost my passport. What shall I do?" }
    ],
    drills: [
      { type: "fill", jp: "さいふを ＿＿ しまいました。", answer: "なくして", options: ["なくして", "なくし", "なくす", "なくした"], en: "I've gone and lost my wallet." },
      { type: "fill", jp: "{友|とも}だちの {家|いえ}に ノートを わすれて ＿＿。", answer: "しまいました", options: ["しまいました", "ください", "みました", "あげました"], en: "Oh no, I left my notebook at my friend's house." },
      { type: "fill", jp: "どうしよう。{大切|たいせつ}な カップを ＿＿ しまいました。", answer: "わって", options: ["わって", "われて", "わり", "わる"], en: "What shall I do? I've broken my precious cup." },
      { type: "choose", q: "What feeling does ～て しまいました often show?", answer: "Regret", options: ["Regret", "Pride", "Hope", "Thanks"] },
      { type: "choose", q: "You sent an email by mistake and feel bad. What do you say?", answer: "まちがえて メールを {送|おく}って しまいました。", options: ["まちがえて メールを {送|おく}って しまいました。", "まちがえて メールを {送|おく}って おきました。", "まちがえて メールを {送|おく}って みました。", "まちがえて メールを {送|おく}って あげました。"] },
      { type: "order", tiles: ["{友|とも}だちの", "{名前|なまえ}を", "まちがえて", "しまいました"], en: "I got my friend's name wrong." }
    ]
  }
]);
window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {
  "L129-1": {
    formula: ["N が V て います", "この / その N は V て います"],
    points: [
      "Use it with verbs of change, where something happens by itself.",
      "It shows what you can see now, not the action.",
      "The thing in that state takes が.",
      "Use は when you point at it: この いすは.",
      "Learn the verbs in pairs, like あけます and あきます."
    ],
    tables: [
      {
        title: "Group 1: て-form + います",
        headers: ["ます form", "State", "Meaning"],
        rows: [
          ["あきます", "あいて います", "is open"],
          ["つきます", "ついて います", "is on"],
          ["しまります", "しまって います", "is closed"],
          ["とまります", "とまって います", "is stopped"],
          ["かかります", "かかって います", "is locked"]
        ]
      },
      {
        title: "Group 2: drop ます, add て います",
        headers: ["ます form", "State", "Meaning"],
        rows: [
          ["きえます", "きえて います", "is off"],
          ["こわれます", "こわれて います", "is broken"],
          ["われます", "われて います", "is cracked"],
          ["おれます", "おれて います", "is snapped"],
          ["やぶれます", "やぶれて います", "is torn"],
          ["よごれます", "よごれて います", "is dirty"]
        ]
      },
      {
        title: "Group 3: きます keeps the result",
        headers: ["ます form", "State", "Meaning"],
        rows: [
          ["きます", "きて います", "has come and is here"]
        ]
      },
      {
        title: "Pairs: someone does it vs it happens",
        headers: ["Someone does it", "It happens", "Meaning"],
        rows: [
          ["ドアを あけます", "ドアが あきます", "open"],
          ["ドアを しめます", "ドアが しまります", "close"],
          ["でんきを つけます", "でんきが つきます", "turn on"],
          ["でんきを けします", "でんきが きえます", "turn off"],
          ["いすを こわします", "いすが こわれます", "break"],
          ["コップを わります", "コップが われます", "crack"],
          ["くるまを とめます", "くるまが とまります", "stop"]
        ]
      }
    ],
    mistakes: [
      { bad: "この いすは こわれました。 (looking at it now)", good: "この いすは こわれて います。", why: "For the present state use ～て います. ました reports the event." },
      { bad: "まどを あいて います。", good: "まどが あいて います。", why: "あきます happens by itself, so it takes が." }
    ],
    tip: "English says 'is broken' with an adjective feeling. Japanese says 'has broken and stays that way'."
  },
  "L129-2": {
    meaning: "Doing something completely",
    formula: ["V て しまいます", "V て しまいました"],
    points: [
      "It stresses that nothing is left to do.",
      "しまいます is about finishing in the future.",
      "しまいました means all of it is done.",
      "It often comes with ぜんぶ, もう or a deadline like までに."
    ],
    tables: [
      {
        title: "Group 1: て-form + しまいます",
        headers: ["ます form", "Future", "Past"],
        rows: [
          ["かきます", "かいて しまいます", "かいて しまいました"],
          ["よみます", "よんで しまいます", "よんで しまいました"],
          ["やります", "やって しまいます", "やって しまいました"],
          ["はなします", "はなして しまいます", "はなして しまいました"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "Future", "Past"],
        rows: [
          ["たべます", "たべて しまいます", "たべて しまいました"],
          ["みます", "みて しまいます", "みて しまいました"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "Future", "Past"],
        rows: [
          ["します", "して しまいます", "して しまいました"],
          ["きます", "きて しまいます", "きて しまいました"]
        ]
      },
      {
        title: "With and without the feeling of finishing",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["ほんを よみました。", "I read the book."],
          ["ほんを よんで しまいました。", "I've finished the book, all of it."]
        ]
      }
    ],
    mistakes: [
      { bad: "よみて しまいます。", good: "よんで しまいます。", why: "It joins the て-form: よみます becomes よんで." }
    ],
    tip: "Pair it with a deadline: あしたまでに やって しまいます."
  },
  "L129-3": {
    meaning: "Something unfortunate happened",
    formula: ["V て しまいました"],
    points: [
      "The grammar is the same, but the feeling is regret.",
      "Use it for accidents, mistakes and things you wish hadn't happened.",
      "Context tells you which meaning it has.",
      "どうしましょう is a natural follow-up."
    ],
    tables: [
      {
        title: "Group 1",
        headers: ["ます form", "Regret"],
        rows: [
          ["おとします", "おとして しまいました"],
          ["なくします", "なくして しまいました"],
          ["けします", "けして しまいました"],
          ["わります", "わって しまいました"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "Regret"],
        rows: [
          ["わすれます", "わすれて しまいました"],
          ["まちがえます", "まちがえて しまいました"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "Regret"],
        rows: [
          ["けがを します", "けがを して しまいました"],
          ["きます", "きて しまいました"]
        ]
      },
      {
        title: "Neutral vs regret",
        headers: ["Japanese", "Feeling"],
        rows: [
          ["かさを わすれました。", "Just a fact"],
          ["かさを わすれて しまいました。", "I wish I hadn't"]
        ]
      }
    ],
    mistakes: [
      { bad: "カップを われて しまいました。", good: "カップを わって しまいました。", why: "With を you need the verb for doing it: わります." },
      { bad: "さいふを おとして しまいます。", good: "さいふを おとして しまいました。", why: "It has already happened, so use the past." }
    ],
    tip: "This is the sound of a small sigh. Use it when you would say 'oh no' in English."
  }
});
window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  129: {
    can: ["Describe the state of things around you", "Say you will finish something completely", "Say something went wrong and you regret it"],
    first: ["こわれます", "われます", "おれます", "やぶれます", "よごれます", "はずれます", "まちがえます", "おとします", "かかります", "かたづけます", "ふきます", "わすれもの"],
    tip: "Learn the verbs that happen by themselves next to the ones you already know, in pairs."
  }
});

// ───────────────────────── LESSON 30 ─────────────────────────
window.GRAMMAR = (window.GRAMMAR || []).concat([
  {
    id: "L130-1",
    lesson: 130,
    title: "V て あります",
    meaning: "Someone did it on purpose, and it stays that way",
    explain: "～て あります describes a state left by someone's deliberate action, usually with a verb that takes を.",
    examples: [
      { jp: "カレンダーに {友|とも}だちの たんじょうびが {書|か}いて あります。", ro: "Karendā ni tomodachi no tanjōbi ga kaite arimasu.", en: "My friend's birthday is written on the calendar." },
      { jp: "げんかんに {花|はな}が かざって あります。", ro: "Genkan ni hana ga kazatte arimasu.", en: "Flowers have been set out in the entrance." },
      { jp: "パーティーの ビールは もう {買|か}って あります。", ro: "Pātī no bīru wa mō katte arimasu.", en: "The beer for the party has already been bought." }
    ],
    drills: [
      { type: "fill", jp: "{駅|えき}の {前|まえ}に {自転車|じてんしゃ}が {止|と}めて ＿＿。", answer: "あります", options: ["あります", "います", "ください", "しまいます"], en: "A bicycle has been left parked in front of the station." },
      { type: "fill", jp: "ノートに {名前|なまえ}＿＿ {書|か}いて あります。", answer: "が", options: ["が", "に", "で", "へ"], en: "A name is written in the notebook." },
      { type: "fill", jp: "へやに {花|はな}が ＿＿ あります。", answer: "かざって", options: ["かざって", "かざり", "かざる", "かざった"], en: "Flowers have been set out in the room." },
      { type: "choose", q: "Someone opened the window on purpose and left it open. Which fits?", answer: "まどが {開|あ}けて あります。", options: ["まどが {開|あ}けて あります。", "まどが {開|あ}いて あります。", "まどが {開|あ}けて います。", "まどを {開|あ}いて います。"] },
      { type: "choose", q: "Which kind of verb comes before ～て あります?", answer: "A verb where someone acts on purpose", options: ["A verb where someone acts on purpose", "A verb of change like あきます", "A verb of movement like いきます", "A verb of existence like います"] },
      { type: "order", tiles: ["げんかんに", "{地図|ちず}が", "はって", "あります"], en: "A map has been put up in the entrance." }
    ]
  },
  {
    id: "L130-2",
    lesson: 130,
    title: "V て おきます",
    meaning: "Doing something ahead of time, or leaving it as it is",
    explain: "～て おきます means doing something now so it is ready, tidying something after use, or leaving something as it is.",
    examples: [
      { jp: "{友|とも}だちが {来|く}る {前|まえ}に、へやを そうじして おきます。", ro: "Tomodachi ga kuru mae ni, heya o sōji shite okimasu.", en: "I'll clean the room before my friend comes." },
      { jp: "はさみを {使|つか}ったら、もとの ところに もどして おいて ください。", ro: "Hasami o tsukattara, moto no tokoro ni modoshite oite kudasai.", en: "When you've used the scissors, please put them back where they were." },
      { jp: "まどは {開|あ}けて おいて ください。", ro: "Mado wa akete oite kudasai.", en: "Please leave the window open." }
    ],
    drills: [
      { type: "fill", jp: "パーティーの {前|まえ}に、ビールを {買|か}って ＿＿。", answer: "おきます", options: ["おきます", "います", "しまいました", "みました"], en: "I'll buy the beer ahead of the party." },
      { type: "fill", jp: "まどは {開|あ}けて ＿＿ ください。", answer: "おいて", options: ["おいて", "おき", "おく", "おきて"], en: "Please leave the window open." },
      { type: "fill", jp: "{友|とも}だちが {来|く}る {前|まえ}に、へやを ＿＿ おきます。", answer: "そうじして", options: ["そうじして", "そうじし", "そうじする", "そうじした"], en: "I'll clean the room before my friend comes." },
      { type: "choose", q: "A colleague reaches for the lights, but you are still using the room. What do you say?", answer: "そのままに して おいて ください。", options: ["そのままに して おいて ください。", "{電気|でんき}を けして おいて ください。", "{電気|でんき}を けして しまいました。", "{電気|でんき}が きえて います。"] },
      { type: "choose", q: "Which of these is NOT a use of ～て おきます?", answer: "Doing something by accident", options: ["Doing something by accident", "Getting something ready in advance", "Leaving something as it is", "Putting something back after use"] },
      { type: "order", tiles: ["{明日|あした}の", "{試験|しけん}の", "{勉強|べんきょう}を", "して", "おきます"], en: "I'll study for tomorrow's test in advance." }
    ]
  },
  {
    id: "L130-3",
    lesson: 130,
    title: "まだ + affirmative・まだ ～て いません",
    meaning: "Still, and not yet",
    explain: "まだ with a positive sentence means still, and まだ ～て いません means not yet.",
    examples: [
      { jp: "モチは まだ ねて います。", ro: "Mochi wa mada nete imasu.", en: "Mochi is still asleep." },
      { jp: "まだ {七時|しちじ}です。ゆっくり {食|た}べましょう。", ro: "Mada shichiji desu. Yukkuri tabemashō.", en: "It's still only seven. Let's take our time eating." },
      { jp: "レポートは まだ {書|か}いて いません。", ro: "Repōto wa mada kaite imasen.", en: "I haven't written the report yet." }
    ],
    drills: [
      { type: "fill", jp: "＿＿ {電車|でんしゃ}を {待|ま}って います。", answer: "まだ", options: ["まだ", "もう", "また", "ぜんぶ"], en: "I am still waiting for the train." },
      { type: "fill", jp: "もう {昼|ひる}ごはんを {食|た}べましたか。いいえ、まだ {食|た}べて ＿＿。", answer: "いません", options: ["いません", "います", "いました", "ください"], en: "Have you had lunch yet? No, I haven't eaten yet." },
      { type: "fill", jp: "＿＿ {七時|しちじ}です。", answer: "まだ", options: ["まだ", "もう", "ぜんぜん", "あまり"], en: "It's still only seven o'clock." },
      { type: "choose", q: "Which means 'I haven't read it yet'?", answer: "まだ {読|よ}んで いません。", options: ["まだ {読|よ}んで いません。", "まだ {読|よ}んで います。", "もう {読|よ}みました。", "もう {読|よ}んで います。"] },
      { type: "choose", q: "What does 「まだ はたらいて います」 mean?", answer: "I am still working.", options: ["I am still working.", "I haven't started work yet.", "I have already finished work.", "I will never work."] },
      { type: "order", tiles: ["まだ", "{書|か}いて", "いません"], en: "I haven't written it yet." }
    ]
  }
]);
window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {
  "L130-1": {
    formula: ["N に N が V て あります", "N は N に V て あります"],
    points: [
      "Someone did it on purpose, and the result is still there.",
      "Use verbs that normally take を.",
      "を changes to が, or to は for the topic.",
      "Often it means something is ready: もう かって あります."
    ],
    tables: [
      {
        title: "Group 1: て-form + あります",
        headers: ["ます form", "Result", "Meaning"],
        rows: [
          ["かきます", "かいて あります", "is written"],
          ["おきます", "おいて あります", "has been placed"],
          ["はります", "はって あります", "has been stuck up"],
          ["かざります", "かざって あります", "has been displayed"],
          ["かいます", "かって あります", "has been bought"],
          ["だします", "だして あります", "has been put out"]
        ]
      },
      {
        title: "Group 2: drop ます, add て あります",
        headers: ["ます form", "Result", "Meaning"],
        rows: [
          ["ならべます", "ならべて あります", "has been lined up"],
          ["かけます", "かけて あります", "has been hung"],
          ["あけます", "あけて あります", "has been opened"]
        ]
      },
      {
        title: "Group 3: only する verbs",
        headers: ["ます form", "Result", "Meaning"],
        rows: [
          ["じゅんびします", "じゅんびして あります", "has been prepared"],
          ["よやくします", "よやくして あります", "has been booked"]
        ]
      },
      {
        title: "Three ways to talk about an open window",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["まどが あいて います。", "It is open. No one's intention is implied."],
          ["まどが あけて あります。", "Someone opened it on purpose."],
          ["まどを あけて います。", "Someone is opening it now."]
        ]
      }
    ],
    mistakes: [
      { bad: "まどが あいて あります。", good: "まどが あけて あります。", why: "～て あります needs the verb for doing it: あけます." },
      { bad: "まどが あけて います。", good: "まどが あいて います。", why: "With ～て います and が, use the verb that happens by itself." }
    ],
    tip: "If you can imagine the person who did it, you want ～て あります."
  },
  "L130-2": {
    formula: ["V て おきます"],
    points: [
      "Use 1: do something in advance to be ready.",
      "Use 2: deal with something after use, ready for next time.",
      "Use 3: leave something as it is.",
      "Time words like まえに or までに often go with Use 1."
    ],
    tables: [
      {
        title: "Group 1: て-form + おきます",
        headers: ["ます form", "Plain", "Request"],
        rows: [
          ["かいます", "かって おきます", "かって おいて ください"],
          ["かきます", "かいて おきます", "かいて おいて ください"],
          ["もどします", "もどして おきます", "もどして おいて ください"],
          ["よみます", "よんで おきます", "よんで おいて ください"],
          ["しまいます", "しまって おきます", "しまって おいて ください"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "Plain", "Request"],
        rows: [
          ["あけます", "あけて おきます", "あけて おいて ください"],
          ["しらべます", "しらべて おきます", "しらべて おいて ください"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "Plain", "Request"],
        rows: [
          ["します", "して おきます", "して おいて ください"],
          ["よやくします", "よやくして おきます", "よやくして おいて ください"],
          ["きます", "きて おきます", "きて おいて ください"]
        ]
      },
      {
        title: "The three uses",
        headers: ["Use", "Japanese", "Meaning"],
        rows: [
          ["In advance", "りょこうの まえに きっぷを かって おきます。", "I'll buy the tickets before the trip."],
          ["After use", "つかった コップを あらって おきます。", "I'll wash the cups we used."],
          ["As it is", "そのままに して おいて ください。", "Please leave it as it is."]
        ]
      }
    ],
    mistakes: [
      { bad: "あしたの かいぎの まえに、しりょうを よむ おきます。", good: "あしたの かいぎの まえに、しりょうを よんで おきます。", why: "おきます joins the て-form." },
      { bad: "まどは あいて おいて ください。", good: "まどは あけて おいて ください。", why: "Someone must act, so use あけます, the verb for doing it." }
    ],
    tip: "Whenever you do something now for the sake of later, reach for ～て おきます."
  },
  "L130-3": {
    formula: ["まだ + positive sentence", "まだ + V て いません"],
    points: [
      "With a positive sentence, まだ means something has not changed.",
      "まだ ～て いません means it hasn't happened yet.",
      "Answer もう ～ましたか with いいえ、まだです.",
      "Don't confuse まだ, still, with また, again."
    ],
    tables: [
      {
        title: "もう and まだ",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["もう たべました。", "I have already eaten."],
          ["まだ たべて いません。", "I haven't eaten yet."],
          ["まだ たべて います。", "I am still eating."],
          ["まだ じかんが あります。", "There is still time."]
        ]
      },
      {
        title: "Not yet: all verb groups",
        headers: ["Group", "ます form", "Not yet"],
        rows: [
          ["Group 1", "かきます", "まだ かいて いません"],
          ["Group 1", "よみます", "まだ よんで いません"],
          ["Group 2", "たべます", "まだ たべて いません"],
          ["Group 3", "します", "まだ して いません"],
          ["Group 3", "きます", "まだ きて いません"]
        ]
      }
    ],
    mistakes: [
      { bad: "まだ たべませんでした。", good: "まだ たべて いません。", why: "For not yet, use ～て いません, not the past." },
      { bad: "また ねて います。 (meaning still)", good: "まだ ねて います。", why: "また means again. まだ means still." }
    ],
    tip: "The little dots matter: まだ is still, また is again."
  }
});
window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  130: {
    can: ["Describe things someone has prepared or put in place", "Say you will do something ahead of time", "Say still and not yet"],
    first: ["かざります", "うえます", "もどします", "まとめます", "しまいます", "きめます", "よしゅうします", "ふくしゅうします", "よてい", "じゅぎょう", "かがみ", "ひきだし"],
    tip: "Compare ～て います with ～て あります side by side, because mixing them up is the classic mistake here."
  }
});

// ───────────────────────── LESSON 31 ─────────────────────────
window.GRAMMAR = (window.GRAMMAR || []).concat([
  {
    id: "L131-1",
    lesson: 131,
    title: "Volitional form",
    meaning: "Plain let's, and shall we",
    explain: "The volitional form is the plain version of ～ましょう, used with friends and family.",
    examples: [
      { jp: "{今日|きょう}は {外|そと}で {食|た}べよう。", ro: "Kyō wa soto de tabeyō.", en: "Let's eat out today." },
      { jp: "{明日|あした} {映画|えいが}を {見|み}に {行|い}こう。", ro: "Ashita eiga o mi ni ikō.", en: "Let's go and see a film tomorrow." },
      { jp: "いっしょに {帰|かえ}ろうか。", ro: "Issho ni kaerō ka.", en: "Shall we go home together?" }
    ],
    drills: [
      { type: "fill", jp: "もう おそいから、＿＿。", answer: "{帰|かえ}ろう", options: ["{帰|かえ}ろう", "{帰|かえ}りよう", "{帰|かえ}らよう", "{帰|かえ}るよう"], en: "It's late now, so let's go home." },
      { type: "fill", jp: "{明日|あした}は {早|はや}く ＿＿。", answer: "{起|お}きよう", options: ["{起|お}きよう", "{起|お}こう", "{起|お}きろう", "{起|お}きおう"], en: "Let's get up early tomorrow." },
      { type: "fill", jp: "また ここに ＿＿ね。", answer: "{来|こ}よう", options: ["{来|こ}よう", "{来|き}よう", "{来|く}よう", "{来|こ}おう"], en: "Let's come here again, OK?" },
      { type: "choose", q: "What is the volitional form of します?", answer: "しよう", options: ["しよう", "すろう", "しろう", "そう"] },
      { type: "choose", q: "What is the volitional form of まちます?", answer: "{待|ま}とう", options: ["{待|ま}とう", "{待|ま}ちよう", "{待|ま}たよう", "{待|ま}てよう"] },
      { type: "order", tiles: ["ビールを", "{飲|の}もう", "か"], en: "Shall we have a beer?" }
    ]
  },
  {
    id: "L131-2",
    lesson: 131,
    title: "Volitional + と おもって います",
    meaning: "Saying what you have been thinking of doing",
    explain: "Volitional form + と おもって います says you have been thinking of doing something for some time.",
    examples: [
      { jp: "{来年|らいねん} {日本|にほん}へ {行|い}こうと {思|おも}って います。", ro: "Rainen Nihon e ikō to omotte imasu.", en: "I'm thinking of going to Japan next year." },
      { jp: "しゅうまつは {海|うみ}で およごうと {思|おも}って います。", ro: "Shūmatsu wa umi de oyogō to omotte imasu.", en: "I'm thinking of swimming in the sea this weekend." },
      { jp: "カランさんは {東京|とうきょう}で はたらこうと {思|おも}って います。", ro: "Karan-san wa Tōkyō de hatarakō to omotte imasu.", en: "Karan is thinking of working in Tokyo." }
    ],
    drills: [
      { type: "fill", jp: "{来年|らいねん} {国|くに}へ {帰|かえ}＿＿と {思|おも}って います。", answer: "ろう", options: ["ろう", "りよう", "らよう", "ります"], en: "I'm thinking of going back to my country next year." },
      { type: "fill", jp: "{今年|ことし}の {夏|なつ}は {海|うみ}で ＿＿と {思|おも}って います。", answer: "およごう", options: ["およごう", "およぐよう", "およぎよう", "およがよう"], en: "I'm thinking of swimming in the sea this summer." },
      { type: "fill", jp: "カランさんは {東京|とうきょう}で はたらこうと {思|おも}って ＿＿。", answer: "います", options: ["います", "あります", "ください", "おきます"], en: "Karan is thinking of working in Tokyo." },
      { type: "choose", q: "Which sentence about Maria's plan is correct?", answer: "マリアさんは {国|くに}へ {帰|かえ}ろうと {思|おも}って います。", options: ["マリアさんは {国|くに}へ {帰|かえ}ろうと {思|おも}って います。", "マリアさんは {国|くに}へ {帰|かえ}ろうと {思|おも}います。", "マリアさんは {国|くに}へ {帰|かえ}ろと {思|おも}って います。", "マリアさんは {国|くに}へ {帰|かえ}りと {思|おも}って います。"] },
      { type: "choose", q: "What does ～と おもって います suggest?", answer: "You have been thinking about it for some time", options: ["You have been thinking about it for some time", "You finished it yesterday", "Someone ordered you to do it", "You are not able to do it"] },
      { type: "order", tiles: ["{大学院|だいがくいん}で", "{勉強|べんきょう}しようと", "{思|おも}って", "います"], en: "I'm thinking of studying at graduate school." }
    ]
  },
  {
    id: "L131-3",
    lesson: 131,
    title: "V dictionary / ない + つもりです",
    meaning: "Saying what you intend to do",
    explain: "つもりです states a firm intention, and it comes after the dictionary form or the ない form.",
    examples: [
      { jp: "{夏休|なつやす}みに {自転車|じてんしゃ}で {北海道|ほっかいどう}を {旅行|りょこう}する つもりです。", ro: "Natsuyasumi ni jitensha de Hokkaidō o ryokō suru tsumori desu.", en: "I intend to travel around Hokkaido by bicycle in the summer holidays." },
      { jp: "もう たばこは すわない つもりです。", ro: "Mō tabako wa suwanai tsumori desu.", en: "I don't intend to smoke any more." },
      { jp: "{今年|ことし}の {冬|ふゆ}は {国|くに}へ {帰|かえ}らない つもりです。", ro: "Kotoshi no fuyu wa kuni e kaeranai tsumori desu.", en: "I don't intend to go back to my country this winter." }
    ],
    drills: [
      { type: "fill", jp: "{来月|らいげつ}、{新|あたら}しい パソコンを {買|か}う ＿＿です。", answer: "つもり", options: ["つもり", "ほう", "こと", "とき"], en: "I intend to buy a new computer next month." },
      { type: "fill", jp: "{今年|ことし}は {旅行|りょこう}を ＿＿ つもりです。", answer: "しない", options: ["しない", "する", "しません", "しなくて"], en: "I don't intend to travel this year." },
      { type: "fill", jp: "{明日|あした}の パーティーには {行|い}か＿＿ つもりです。", answer: "ない", options: ["ない", "なくて", "なかった", "ません"], en: "I don't intend to go to tomorrow's party." },
      { type: "fill", jp: "{春|はる}から {日本語|にほんご}の {学校|がっこう}に ＿＿ つもりです。", answer: "{入|はい}る", options: ["{入|はい}る", "{入|はい}ります", "{入|はい}り", "{入|はい}って"], en: "I intend to enter a Japanese language school from spring." },
      { type: "choose", q: "How do you say 'I don't intend to drink'?", answer: "おさけは {飲|の}まない つもりです。", options: ["おさけは {飲|の}まない つもりです。", "おさけは {飲|の}みません つもりです。", "おさけは {飲|の}まなくて つもりです。", "おさけは {飲|の}まないの つもりです。"] },
      { type: "order", tiles: ["{来年|らいねん}は", "{車|くるま}を", "{買|か}わない", "つもりです"], en: "I don't intend to buy a car next year." }
    ]
  },
  {
    id: "L131-4",
    lesson: 131,
    title: "V dictionary / N の + よていです",
    meaning: "Saying what is scheduled",
    explain: "よていです says something is on the schedule, so it suits timetables and arrangements rather than personal feelings.",
    examples: [
      { jp: "かいぎは {三時|さんじ}に {終|お}わる よていです。", ro: "Kaigi wa sanji ni owaru yotei desu.", en: "The meeting is scheduled to end at three." },
      { jp: "ひこうきは {七時|しちじ}に つく よていです。", ro: "Hikōki wa shichiji ni tsuku yotei desu.", en: "The plane is due to arrive at seven." },
      { jp: "{旅行|りょこう}は {三日間|みっかかん}の よていです。", ro: "Ryokō wa mikkakan no yotei desu.", en: "The trip is planned for three days." }
    ],
    drills: [
      { type: "fill", jp: "{電車|でんしゃ}は {八時|はちじ}に {出|で}る ＿＿です。", answer: "よてい", options: ["よてい", "つもり", "ほう", "もの"], en: "The train is scheduled to leave at eight." },
      { type: "fill", jp: "かいぎは {来週|らいしゅう}の {月曜日|げつようび}＿＿ よていです。", answer: "の", options: ["の", "が", "を", "に"], en: "The meeting is scheduled for next Monday." },
      { type: "fill", jp: "{明日|あした}、さとう{先生|せんせい}が ＿＿ よていです。", answer: "{来|く}る", options: ["{来|く}る", "{来|き}ます", "{来|こ}よう", "{来|き}て"], en: "Sato-sensei is scheduled to come tomorrow." },
      { type: "choose", q: "Which sentence is correct?", answer: "ひこうきは {十時|じゅうじ}に つく よていです。", options: ["ひこうきは {十時|じゅうじ}に つく よていです。", "ひこうきは {十時|じゅうじ}に つく つもりです。", "ひこうきは {十時|じゅうじ}に つこう よていです。", "ひこうきは {十時|じゅうじ}に つきます よていです。"] },
      { type: "choose", q: "What does よていです show?", answer: "A plan or schedule that has been set", options: ["A plan or schedule that has been set", "A guess about the weather", "Advice to a friend", "Something that went wrong"] },
      { type: "order", tiles: ["パーティーは", "{七時|しちじ}に", "{始|はじ}まる", "よていです"], en: "The party is scheduled to start at seven." }
    ]
  }
]);
window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {
  "L131-1": {
    formula: ["Group 1: お row + う", "Group 2: stem + よう", "Group 3: しよう, こよう"],
    points: [
      "It means the same as ～ましょう, but it is plain.",
      "Use it with friends and family.",
      "Add か for shall we, or shall I.",
      "Group 1: change the sound before ます to the お row, then add う."
    ],
    tables: [
      {
        title: "Group 1: い row becomes お row, then う",
        headers: ["Before ます", "Becomes", "ます form", "Volitional"],
        rows: [
          ["い", "おう", "かいます", "かおう"],
          ["き", "こう", "かきます", "かこう"],
          ["ぎ", "ごう", "いそぎます", "いそごう"],
          ["し", "そう", "はなします", "はなそう"],
          ["ち", "とう", "まちます", "まとう"],
          ["に", "のう", "しにます", "しのう"],
          ["び", "ぼう", "あそびます", "あそぼう"],
          ["み", "もう", "のみます", "のもう"],
          ["り", "ろう", "かえります", "かえろう"]
        ]
      },
      {
        title: "Group 2: drop ます, add よう",
        headers: ["ます form", "Volitional"],
        rows: [
          ["たべます", "たべよう"],
          ["ねます", "ねよう"],
          ["おきます", "おきよう"],
          ["みます", "みよう"]
        ]
      },
      {
        title: "Group 3: memorise these",
        headers: ["ます form", "Volitional"],
        rows: [
          ["します", "しよう"],
          ["べんきょうします", "べんきょうしよう"],
          ["きます", "こよう"]
        ]
      },
      {
        title: "Polite and plain",
        headers: ["Polite", "Plain", "Meaning"],
        rows: [
          ["いきましょう。", "いこう。", "Let's go."],
          ["いきましょうか。", "いこうか。", "Shall we go?"],
          ["もちましょうか。", "もとうか。", "Shall I carry it?"]
        ]
      }
    ],
    mistakes: [
      { bad: "たべろう。", good: "たべよう。", why: "Group 2 adds よう." },
      { bad: "のみよう。", good: "のもう。", why: "Group 1 changes to the お row and adds う." },
      { bad: "きよう。 (from きます, come)", good: "こよう。", why: "The volitional of come starts with こ." }
    ],
    tip: "It sounds like the verb's dictionary form with the ending stretched: のむ, のもう."
  },
  "L131-2": {
    formula: ["V volitional + と おもって います", "V volitional + と おもいます"],
    points: [
      "と おもって います means you have been thinking it for some time.",
      "と おもいます fits a decision you are making as you speak.",
      "For another person's plan, use only と おもって います.",
      "The と is required."
    ],
    tables: [
      {
        title: "Group 1",
        headers: ["ます form", "Pattern"],
        rows: [
          ["いきます", "いこうと おもって います"],
          ["はたらきます", "はたらこうと おもって います"],
          ["およぎます", "およごうと おもって います"],
          ["かいます", "かおうと おもって います"],
          ["かえります", "かえろうと おもって います"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "Pattern"],
        rows: [
          ["やめます", "やめようと おもって います"],
          ["みます", "みようと おもって います"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "Pattern"],
        rows: [
          ["します", "しようと おもって います"],
          ["きます", "こようと おもって います"]
        ]
      },
      {
        title: "Two endings",
        headers: ["Ending", "Who", "Feel"],
        rows: [
          ["おもいます", "Only the speaker", "A decision made just now"],
          ["おもって います", "Anyone", "An idea held for some time"]
        ]
      }
    ],
    mistakes: [
      { bad: "マリアさんは かえろうと おもいます。", good: "マリアさんは かえろうと おもって います。", why: "For someone else, use おもって います." },
      { bad: "にほんへ いこう おもって います。", good: "にほんへ いこうと おもって います。", why: "Don't drop と." }
    ],
    tip: "Use this when someone asks about your plans. It sounds softer than つもりです."
  },
  "L131-3": {
    formula: ["V dictionary + つもりです", "V ない + つもりです"],
    points: [
      "It states a decision you have firmly made.",
      "It sounds firmer than ～と おもって います.",
      "The negative goes before つもり: いかない つもりです.",
      "It joins plain forms, never ます forms."
    ],
    tables: [
      {
        title: "Group 1",
        headers: ["ます form", "Will do", "Won't do"],
        rows: [
          ["かいます", "かう つもりです", "かわない つもりです"],
          ["いきます", "いく つもりです", "いかない つもりです"],
          ["はなします", "はなす つもりです", "はなさない つもりです"],
          ["のみます", "のむ つもりです", "のまない つもりです"],
          ["かえります", "かえる つもりです", "かえらない つもりです"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "Will do", "Won't do"],
        rows: [
          ["たべます", "たべる つもりです", "たべない つもりです"],
          ["みます", "みる つもりです", "みない つもりです"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "Will do", "Won't do"],
        rows: [
          ["します", "する つもりです", "しない つもりです"],
          ["きます", "くる つもりです", "こない つもりです"]
        ]
      },
      {
        title: "How sure are you?",
        headers: ["Japanese", "Feel"],
        rows: [
          ["いこうと おもって います。", "Thinking about it"],
          ["いく つもりです。", "Decided"],
          ["いく よていです。", "On the schedule"]
        ]
      }
    ],
    mistakes: [
      { bad: "いきます つもりです。", good: "いく つもりです。", why: "つもり follows the dictionary form." },
      { bad: "いかないです つもり。", good: "いかない つもりです。", why: "です goes at the very end." }
    ],
    tip: "つもり is a noun, so it behaves like one: a plain verb goes in front."
  },
  "L131-4": {
    formula: ["V dictionary + よていです", "N の + よていです"],
    points: [
      "It says something has been arranged, not how you feel.",
      "Trains, meetings and events can all have a よてい.",
      "つもり needs a person with an intention. よてい does not.",
      "Nouns join with の."
    ],
    tables: [
      {
        title: "Group 1",
        headers: ["ます form", "Pattern"],
        rows: [
          ["いきます", "いく よていです"],
          ["つきます", "つく よていです"],
          ["おわります", "おわる よていです"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "Pattern"],
        rows: [
          ["でます", "でる よていです"],
          ["はじめます", "はじめる よていです"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "Pattern"],
        rows: [
          ["します", "する よていです"],
          ["きます", "くる よていです"]
        ]
      },
      {
        title: "Nouns take の",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["りょこうは みっかかんの よていです。", "The trip is planned for three days."],
          ["かいぎは げつようびの よていです。", "The meeting is set for Monday."]
        ]
      }
    ],
    mistakes: [
      { bad: "でんしゃは はちじに でる つもりです。", good: "でんしゃは はちじに でる よていです。", why: "A train has no intentions. Use よてい." },
      { bad: "かいぎは げつようび よていです。", good: "かいぎは げつようびの よていです。", why: "A noun needs の before よてい." }
    ],
    tip: "If it could be printed in a timetable, it is a よてい."
  }
});
window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  131: {
    can: ["Make plain suggestions to friends", "Say what you are thinking of doing", "Say what you intend to do", "Say what is scheduled"],
    first: ["つづけます", "みつけます", "うけます", "もうしこみます", "きゅうけいします", "れんきゅう", "はっぴょう", "てんらんかい", "けっこんしき", "だいがくいん", "おんせん", "けいかく"],
    tip: "Tell someone your plans for next year three ways: と おもって います, つもりです and よていです."
  }
});

// ───────────────────────── LESSON 32 ─────────────────────────
window.GRAMMAR = (window.GRAMMAR || []).concat([
  {
    id: "L132-1",
    lesson: 132,
    title: "V た / ない + ほうが いいです",
    meaning: "Giving advice",
    explain: "Use the た-form with ほうが いいです to say you should do something, and the ない form to say you shouldn't.",
    examples: [
      { jp: "{夜|よる} {一人|ひとり}で こうえんを {歩|ある}かない ほうが いいですよ。", ro: "Yoru hitori de kōen o arukanai hō ga ii desu yo.", en: "You shouldn't walk through the park alone at night." },
      { jp: "くすりを {飲|の}んだんですか。{今日|きょう}は {車|くるま}を {運転|うんてん}しない ほうが いいですよ。", ro: "Kusuri o nonda n desu ka. Kyō wa kuruma o unten shinai hō ga ii desu yo.", en: "You've taken medicine? You'd better not drive today." },
      { jp: "{明日|あした}は {早|はや}いから、もう ねた ほうが いいですよ。", ro: "Ashita wa hayai kara, mō neta hō ga ii desu yo.", en: "You have an early start tomorrow, so you should go to bed now." }
    ],
    drills: [
      { type: "fill", jp: "ねつが ありますね。{早|はや}く ＿＿ ほうが いいですよ。", answer: "{帰|かえ}った", options: ["{帰|かえ}った", "{帰|かえ}って", "{帰|かえ}り", "{帰|かえ}ります"], en: "You have a fever. You should go home soon." },
      { type: "fill", jp: "{夜|よる}、{一人|ひとり}で こうえんへ ＿＿ ほうが いいです。", answer: "{行|い}かない", options: ["{行|い}かない", "{行|い}った", "{行|い}かなかった", "{行|い}きません"], en: "You shouldn't go to the park alone at night." },
      { type: "fill", jp: "{朝|あさ}ごはんは {食|た}べた ＿＿ いいですよ。", answer: "ほうが", options: ["ほうが", "ほうは", "ほどが", "ようが"], en: "You should eat breakfast." },
      { type: "choose", q: "A friend with a bad cough wants to smoke. What advice do you give?", answer: "たばこは すわない ほうが いいですよ。", options: ["たばこは すわない ほうが いいですよ。", "たばこは すった ほうが いいですよ。", "たばこを すいたいです。", "たばこは すわないでしょう。"] },
      { type: "choose", q: "Which form comes before ほうが いいです to say 'you should do it'?", answer: "The plain past form", options: ["The plain past form", "The te-form", "The ます stem", "The volitional form"] },
      { type: "order", tiles: ["くすりを", "{飲|の}んだ", "ほうが", "いいです"], en: "You should take some medicine." }
    ]
  },
  {
    id: "L132-2",
    lesson: 132,
    title: "Plain form + でしょう",
    meaning: "Predicting what will probably happen",
    explain: "でしょう after a plain form gives a prediction, and it is the classic ending of a weather forecast.",
    examples: [
      { jp: "{午後|ごご}は はれるでしょう。", ro: "Gogo wa hareru deshō.", en: "It will probably clear up in the afternoon." },
      { jp: "{今年|ことし}の {夏|なつ}は あついでしょう。", ro: "Kotoshi no natsu wa atsui deshō.", en: "This summer will probably be hot." },
      { jp: "カランさんは {明日|あした} {来|く}るでしょうか。", ro: "Karan-san wa ashita kuru deshō ka.", en: "Do you think Karan will come tomorrow?" }
    ],
    drills: [
      { type: "fill", jp: "{明日|あした}は {天気|てんき}が ＿＿ でしょう。", answer: "いい", options: ["いい", "よく", "いいだ", "いいな"], en: "The weather will probably be good tomorrow." },
      { type: "fill", jp: "{今夜|こんや}は しずか＿＿。", answer: "でしょう", options: ["でしょう", "だでしょう", "なでしょう", "にでしょう"], en: "It will probably be quiet tonight." },
      { type: "fill", jp: "たなかさんは {来|こ}ない＿＿。", answer: "でしょう", options: ["でしょう", "ましょう", "だでしょう", "ますでしょう"], en: "Tanaka-san probably won't come." },
      { type: "choose", q: "Which is a correct line from a weather forecast?", answer: "{午後|ごご}は {雨|あめ}でしょう。", options: ["{午後|ごご}は {雨|あめ}でしょう。", "{午後|ごご}は {雨|あめ}だでしょう。", "{午後|ごご}は {雨|あめ}なでしょう。", "{午後|ごご}は {雨|あめ}ますでしょう。"] },
      { type: "choose", q: "What does ～でしょうか do at the end of a question?", answer: "It gently asks what someone thinks", options: ["It gently asks what someone thinks", "It gives an order", "It refuses an invitation", "It reports the past"] },
      { type: "order", tiles: ["{夜|よる}は", "{風|かぜ}が", "{強|つよ}く", "なるでしょう"], en: "It will probably get windy tonight." }
    ]
  },
  {
    id: "L132-3",
    lesson: 132,
    title: "Plain form + かもしれません",
    meaning: "Saying something might be true",
    explain: "かもしれません after a plain form means might, and it is less certain than でしょう.",
    examples: [
      { jp: "モチは もう ねて いるかもしれません。", ro: "Mochi wa mō nete iru kamo shiremasen.", en: "Mochi might already be asleep." },
      { jp: "{午後|ごご}から {雨|あめ}に なるかもしれません。", ro: "Gogo kara ame ni naru kamo shiremasen.", en: "It might start to rain from this afternoon." },
      { jp: "あの {人|ひと}は たなかさんの お{父|とう}さんかもしれません。", ro: "Ano hito wa Tanaka-san no otōsan kamo shiremasen.", en: "That person might be Tanaka-san's father." }
    ],
    drills: [
      { type: "fill", jp: "かぎは かばんの {中|なか}に ある＿＿。", answer: "かもしれません", options: ["かもしれません", "ましょう", "ませんか", "なさい"], en: "The key might be in my bag." },
      { type: "fill", jp: "パーティーに {行|い}け＿＿かもしれません。", answer: "ない", options: ["ない", "ません", "なくて", "ます"], en: "I might not be able to go to the party." },
      { type: "fill", jp: "＿＿ たなかさんは {来|こ}ないかもしれません。", answer: "もしかしたら", options: ["もしかしたら", "ぜひ", "ぜんぶ", "どうぞ"], en: "Tanaka-san just might not come." },
      { type: "choose", q: "Which is correct for 'That person might be a doctor'?", answer: "あの {人|ひと}は {医者|いしゃ}かもしれません。", options: ["あの {人|ひと}は {医者|いしゃ}かもしれません。", "あの {人|ひと}は {医者|いしゃ}だかもしれません。", "あの {人|ひと}は {医者|いしゃ}なかもしれません。", "あの {人|ひと}は {医者|いしゃ}でかもしれません。"] },
      { type: "choose", q: "Which sentence is the least certain?", answer: "{雨|あめ}が ふるかもしれません。", options: ["{雨|あめ}が ふるかもしれません。", "{雨|あめ}が ふるでしょう。", "{雨|あめ}が ふります。", "{雨|あめ}が ふって います。"] },
      { type: "order", tiles: ["{今日|きょう}は", "{帰|かえ}りが", "おそく", "なるかもしれません"], en: "I might be late getting home today." }
    ]
  }
]);
window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {
  "L132-1": {
    formula: ["V た + ほうが いいです", "V ない + ほうが いいです"],
    points: [
      "Use it to give someone advice.",
      "For should, use the た-form, even for the future.",
      "For shouldn't, use the ない form, not the past.",
      "Add よ to make the advice friendlier."
    ],
    tables: [
      {
        title: "Group 1",
        headers: ["ます form", "You should", "You shouldn't"],
        rows: [
          ["いきます", "いった ほうが いいです", "いかない ほうが いいです"],
          ["のみます", "のんだ ほうが いいです", "のまない ほうが いいです"],
          ["はなします", "はなした ほうが いいです", "はなさない ほうが いいです"],
          ["かえります", "かえった ほうが いいです", "かえらない ほうが いいです"],
          ["あるきます", "あるいた ほうが いいです", "あるかない ほうが いいです"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "You should", "You shouldn't"],
        rows: [
          ["たべます", "たべた ほうが いいです", "たべない ほうが いいです"],
          ["ねます", "ねた ほうが いいです", "ねない ほうが いいです"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "You should", "You shouldn't"],
        rows: [
          ["します", "した ほうが いいです", "しない ほうが いいです"],
          ["きます", "きた ほうが いいです", "こない ほうが いいです"]
        ]
      }
    ],
    mistakes: [
      { bad: "いかなかった ほうが いいです。", good: "いかない ほうが いいです。", why: "The negative stays in the ない form." },
      { bad: "いきます ほうが いいです。", good: "いった ほうが いいです。", why: "Use a plain form, and for should use the た-form." }
    ],
    tip: "The た-form here doesn't mean past. Think 'it would be better if you had done it'."
  },
  "L132-2": {
    formula: ["V plain + でしょう", "い-adj + でしょう", "な-adj / N + でしょう"],
    points: [
      "Use it for predictions, especially about the weather.",
      "Verbs and い-adjectives join directly.",
      "な-adjectives and nouns drop だ.",
      "でしょうか asks for someone's opinion softly."
    ],
    tables: [
      {
        title: "How each word type joins",
        headers: ["Word type", "Present", "Negative", "Past"],
        rows: [
          ["Group 1 verb", "ふるでしょう", "ふらないでしょう", "ふったでしょう"],
          ["Group 2 verb", "はれるでしょう", "はれないでしょう", "はれたでしょう"],
          ["Group 3 verb", "するでしょう", "しないでしょう", "したでしょう"],
          ["Group 3 verb", "くるでしょう", "こないでしょう", "きたでしょう"],
          ["い", "あついでしょう", "あつくないでしょう", "あつかったでしょう"],
          ["な", "しずかでしょう", "しずかじゃないでしょう", "しずかだったでしょう"],
          ["Noun", "あめでしょう", "あめじゃないでしょう", "あめだったでしょう"]
        ]
      },
      {
        title: "Forecast words",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["はれるでしょう。", "It will probably be sunny."],
          ["くもるでしょう。", "It will probably be cloudy."],
          ["あめが ふるでしょう。", "It will probably rain."],
          ["かぜが つよいでしょう。", "It will probably be windy."]
        ]
      }
    ],
    mistakes: [
      { bad: "あしたは あめだでしょう。", good: "あしたは あめでしょう。", why: "Nouns drop だ before でしょう." },
      { bad: "しずかなでしょう。", good: "しずかでしょう。", why: "な-adjectives add nothing before でしょう." }
    ],
    tip: "Listen to any Japanese weather report: nearly every sentence ends in でしょう."
  },
  "L132-3": {
    formula: ["V plain + かもしれません", "い-adj + かもしれません", "な-adj / N + かもしれません"],
    points: [
      "It means there is a chance, perhaps fifty-fifty.",
      "It joins in the same way as でしょう.",
      "な-adjectives and nouns drop だ.",
      "もしかしたら at the start makes it even less sure."
    ],
    tables: [
      {
        title: "How each word type joins",
        headers: ["Word type", "Present", "Negative", "Past"],
        rows: [
          ["Group 1 verb", "いくかもしれません", "いかないかもしれません", "いったかもしれません"],
          ["Group 2 verb", "たべるかもしれません", "たべないかもしれません", "たべたかもしれません"],
          ["Group 3 verb", "するかもしれません", "しないかもしれません", "したかもしれません"],
          ["Group 3 verb", "くるかもしれません", "こないかもしれません", "きたかもしれません"],
          ["い", "たかいかもしれません", "たかくないかもしれません", "たかかったかもしれません"],
          ["な", "ひまかもしれません", "ひまじゃないかもしれません", "ひまだったかもしれません"],
          ["Noun", "あめかもしれません", "あめじゃないかもしれません", "あめだったかもしれません"]
        ]
      },
      {
        title: "How sure are you?",
        headers: ["Japanese", "Feel"],
        rows: [
          ["あめが ふります。", "Certain"],
          ["あめが ふるでしょう。", "Probably"],
          ["あめが ふるかもしれません。", "Possibly"]
        ]
      }
    ],
    mistakes: [
      { bad: "あめだかもしれません。", good: "あめかもしれません。", why: "Nouns drop だ." },
      { bad: "いきますかもしれません。", good: "いくかもしれません。", why: "Use the plain form." }
    ],
    tip: "かもしれません comes with an escape route: it might not happen either."
  }
});
window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  132: {
    can: ["Give someone advice", "Make a prediction", "Say something might happen", "Understand a weather forecast"],
    first: ["うんどうします", "せいこうします", "しっぱいします", "ごうかくします", "やみます", "ひやします", "じゅうぶん", "おかしい", "けが", "そら", "もしかしたら", "おそく"],
    tip: "Learn でしょう and かもしれません together, since they join in exactly the same way."
  }
});

// ───────────────────────── LESSON 33 ─────────────────────────
window.GRAMMAR = (window.GRAMMAR || []).concat([
  {
    id: "L133-1",
    lesson: 133,
    title: "Imperative form",
    meaning: "Giving a strong order",
    explain: "The imperative is a blunt order, heard from coaches, in emergencies, on road signs and in cheering.",
    examples: [
      { jp: "{早|はや}く {起|お}きろ。", ro: "Hayaku okiro.", en: "Get up now!" },
      { jp: "がんばれ！", ro: "Ganbare!", en: "Go for it!" },
      { jp: "{火事|かじ}だ。にげろ！", ro: "Kaji da. Nigero!", en: "It's a fire. Run!" }
    ],
    drills: [
      { type: "fill", jp: "{早|はや}く ＿＿！", answer: "{走|はし}れ", options: ["{走|はし}れ", "{走|はし}られ", "{走|はし}るな", "{走|はし}りろ"], en: "Run, quickly!" },
      { type: "fill", jp: "{朝|あさ}だよ。{早|はや}く ＿＿。", answer: "{起|お}きろ", options: ["{起|お}きろ", "{起|お}きれ", "{起|お}きるな", "{起|お}きい"], en: "It's morning. Get up now!" },
      { type: "fill", jp: "すぐ ここへ ＿＿！", answer: "{来|こ}い", options: ["{来|こ}い", "{来|き}ろ", "{来|く}れ", "{来|こ}ろ"], en: "Come here at once!" },
      { type: "choose", q: "What do fans shout to cheer on their team?", answer: "がんばれ！", options: ["がんばれ！", "がんばるな！", "がんばりろ！", "がんばらない！"] },
      { type: "choose", q: "Who would normally say はやく しろ?", answer: "A coach shouting at his team", options: ["A coach shouting at his team", "A shop assistant speaking to a customer", "A student speaking to a teacher", "A stranger asking for directions"] },
      { type: "order", tiles: ["もっと", "{大|おお}きい", "こえで", "{話|はな}せ"], en: "Speak in a louder voice!" }
    ]
  },
  {
    id: "L133-2",
    lesson: 133,
    title: "Prohibitive form",
    meaning: "Telling someone not to do something",
    explain: "The dictionary form + な is a blunt don't, heard in the same situations as the imperative.",
    examples: [
      { jp: "ここに {車|くるま}を {止|と}めるな。", ro: "Koko ni kuruma o tomeru na.", en: "Don't park your car here!" },
      { jp: "{駅|えき}の {中|なか}で {走|はし}るな。", ro: "Eki no naka de hashiru na.", en: "Don't run in the station!" },
      { jp: "{今|いま} {話|はな}すな。", ro: "Ima hanasu na.", en: "Don't talk now!" }
    ],
    drills: [
      { type: "fill", jp: "ここで たばこを ＿＿。", answer: "すうな", options: ["すうな", "すいな", "すわな", "すえな"], en: "Don't smoke here!" },
      { type: "fill", jp: "この {水|みず}を ＿＿。", answer: "{飲|の}むな", options: ["{飲|の}むな", "{飲|の}みな", "{飲|の}めな", "{飲|の}まな"], en: "Don't drink this water!" },
      { type: "fill", jp: "ここへ ＿＿！", answer: "{来|く}るな", options: ["{来|く}るな", "{来|こ}な", "{来|き}な", "{来|こ}いな"], en: "Don't come here!" },
      { type: "choose", q: "How do you make the prohibitive form?", answer: "Dictionary form plus na", options: ["Dictionary form plus na", "Te-form plus na", "ます stem plus na", "ない form plus na"] },
      { type: "choose", q: "Which sign means 'Keep out'?", answer: "{入|はい}るな", options: ["{入|はい}るな", "{入|はい}れ", "{入|はい}りたい", "{入|はい}ろう"] },
      { type: "order", tiles: ["ここに", "{車|くるま}を", "{止|と}めるな"], en: "Don't park your car here!" }
    ]
  },
  {
    id: "L133-3",
    lesson: 133,
    title: "～と かいて あります・～と よみます",
    meaning: "Saying what is written, or how to read it",
    explain: "と marks the words themselves, so ～と かいて あります tells you what something says and ～と よみます tells you how to read it.",
    examples: [
      { jp: "{店|みせ}の {前|まえ}に「{今日|きょう}は {休|やす}みです」と {書|か}いて あります。", ro: "Mise no mae ni 'Kyō wa yasumi desu' to kaite arimasu.", en: "In front of the shop it says 'Closed today'." },
      { jp: "この {駅|えき}の {名前|なまえ}は {何|なん}と {読|よ}むんですか。", ro: "Kono eki no namae wa nan to yomu n desu ka.", en: "How do you read the name of this station?" },
      { jp: "あの {紙|かみ}に {何|なん}と {書|か}いて ありますか。", ro: "Ano kami ni nan to kaite arimasu ka.", en: "What does that piece of paper say?" }
    ],
    drills: [
      { type: "fill", jp: "ドアに「{休|やす}み」＿＿ {書|か}いて あります。", answer: "と", options: ["と", "に", "へ", "か"], en: "It says 'closed' on the door." },
      { type: "fill", jp: "この {名前|なまえ}は {何|なん}＿＿ {読|よ}むんですか。", answer: "と", options: ["と", "に", "へ", "で"], en: "How do you read this name?" },
      { type: "fill", jp: "{紙|かみ}に {何|なん}と {書|か}いて ＿＿か。", answer: "あります", options: ["あります", "います", "おきます", "しまいます"], en: "What does the paper say?" },
      { type: "choose", q: "How do you say 'It says STOP on the road'?", answer: "{道|みち}に「{止|と}まれ」と {書|か}いて あります。", options: ["{道|みち}に「{止|と}まれ」と {書|か}いて あります。", "{道|みち}に「{止|と}まれ」と {書|か}いて います。", "{道|みち}に「{止|と}まれ」と {読|よ}みて あります。", "{道|みち}に「{止|と}まれ」と {書|か}きます あります。"] },
      { type: "choose", q: "How do you ask what a sign says?", answer: "{何|なん}と {書|か}いて ありますか。", options: ["{何|なん}と {書|か}いて ありますか。", "{何|なに}を {書|か}きたいですか。", "どこに {書|か}きましたか。", "だれが {書|か}きましたか。"] },
      { type: "order", tiles: ["かんばんに", "「{駅|えき}」と", "{書|か}いて", "あります"], en: "The sign says 'station'." }
    ]
  },
  {
    id: "L133-4",
    lesson: 133,
    title: "X は Y と いう いみです",
    meaning: "Saying what something means",
    explain: "X は Y と いう いみです explains a word or sign, and どういう いみですか asks what it means.",
    examples: [
      { jp: "この マークは どういう {意味|いみ}ですか。", ro: "Kono māku wa dō iu imi desu ka.", en: "What does this mark mean?" },
      { jp: "「{止|と}まれ」は ストップと いう {意味|いみ}です。", ro: "'Tomare' wa sutoppu to iu imi desu.", en: "'Tomare' means stop." },
      { jp: "「{出口|でぐち}」は {外|そと}へ {出|で}る ところと いう {意味|いみ}です。", ro: "'Deguchi' wa soto e deru tokoro to iu imi desu.", en: "'Deguchi' means the place where you go out." }
    ],
    drills: [
      { type: "fill", jp: "「{休|やす}み」は {店|みせ}が {開|あ}いて いないと ＿＿ {意味|いみ}です。", answer: "いう", options: ["いう", "いって", "いいます", "いわない"], en: "'Yasumi' means the shop is not open." },
      { type: "fill", jp: "この マークは ＿＿ {意味|いみ}ですか。", answer: "どういう", options: ["どういう", "どうやって", "どこ", "だれ"], en: "What does this mark mean?" },
      { type: "fill", jp: "「{入|はい}るな」は ここに {入|はい}っては いけないと いう ＿＿です。", answer: "{意味|いみ}", options: ["{意味|いみ}", "{名前|なまえ}", "{音|おと}", "{字|じ}"], en: "'Hairu na' means you must not enter here." },
      { type: "choose", q: "How do you ask 'What does this word mean?'", answer: "この ことばは どういう {意味|いみ}ですか。", options: ["この ことばは どういう {意味|いみ}ですか。", "この ことばは だれの {意味|いみ}ですか。", "この ことばは どこと いう {意味|いみ}ですか。", "この ことばは どういう {意味|いみ}ましたか。"] },
      { type: "choose", q: "Which particle links the meaning to いう?", answer: "と", options: ["と", "を", "が", "で"] },
      { type: "order", tiles: ["「{休日|きゅうじつ}」は", "{休|やす}みの {日|ひ}と", "いう", "{意味|いみ}です"], en: "'Kyūjitsu' means a day off." }
    ]
  },
  {
    id: "L133-5",
    lesson: 133,
    title: "～と いって いました",
    meaning: "Passing on what someone said",
    explain: "～と いって いました reports what someone said earlier, and ～と つたえて いただけませんか asks someone to pass on a message.",
    examples: [
      { jp: "たなかさんは {今夜|こんや} {来|こ}られないと {言|い}って いました。", ro: "Tanaka-san wa kon'ya korarenai to itte imashita.", en: "Tanaka-san said, 'I can't come tonight.'" },
      { jp: "モチは おなかが すいたと {言|い}って いました。", ro: "Mochi wa onaka ga suita to itte imashita.", en: "Mochi said, 'I'm hungry.'" },
      { jp: "すみませんが、マリアさんに {少|すこ}し おくれると つたえて いただけませんか。", ro: "Sumimasen ga, Maria-san ni sukoshi okureru to tsutaete itadakemasen ka.", en: "Excuse me, could you tell Maria I'll be a little late?" }
    ],
    drills: [
      { type: "fill", jp: "たなかさんは {明日|あした} {来|く}る＿＿ {言|い}って いました。", answer: "と", options: ["と", "を", "で", "が"], en: "Tanaka-san said, 'I'll come tomorrow.'" },
      { type: "fill", jp: "モチは {今日|きょう}は {休|やす}み＿＿と {言|い}って いました。", answer: "だ", options: ["だ", "な", "の", "に"], en: "Mochi said today is a day off." },
      { type: "fill", jp: "カランさんは {明日|あした}の パーティーに ＿＿と {言|い}って いました。", answer: "{来|こ}ない", options: ["{来|こ}ない", "{来|き}ない", "{来|く}ない", "{来|こ}なくて"], en: "Karan said he isn't coming to tomorrow's party." },
      { type: "choose", q: "You want someone to tell Maria you will be late. What do you say?", answer: "マリアさんに おくれると つたえて いただけませんか。", options: ["マリアさんに おくれると つたえて いただけませんか。", "マリアさんに おくれるを つたえて いただけませんか。", "マリアさんに おくれますと いただけませんか。", "マリアさんが おくれたと {言|い}って いました。"] },
      { type: "choose", q: "Which ending reports what someone said earlier?", answer: "{言|い}って いました", options: ["{言|い}って いました", "{言|い}いましょう", "{言|い}って ください", "{言|い}って みます"] },
      { type: "order", tiles: ["さとう{先生|せんせい}は", "{試験|しけん}は", "{来週|らいしゅう}だと", "{言|い}って いました"], en: "Sato-sensei said the test is next week." }
    ]
  }
]);
window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {
  "L133-1": {
    formula: ["Group 1: え row", "Group 2: stem + ろ", "Group 3: しろ, こい"],
    points: [
      "It is very strong and mostly used by men.",
      "Never use it to customers, teachers or strangers.",
      "Fine for coaches, emergencies, road signs and cheering.",
      "Use ～て ください in everyday polite speech."
    ],
    tables: [
      {
        title: "Group 1: い row becomes え row",
        headers: ["Before ます", "Becomes", "ます form", "Imperative"],
        rows: [
          ["い", "え", "すいます", "すえ"],
          ["き", "け", "いきます", "いけ"],
          ["ぎ", "げ", "いそぎます", "いそげ"],
          ["し", "せ", "はなします", "はなせ"],
          ["ち", "て", "まちます", "まて"],
          ["び", "べ", "よびます", "よべ"],
          ["み", "め", "のみます", "のめ"],
          ["り", "れ", "とまります", "とまれ"]
        ]
      },
      {
        title: "Group 2: drop ます, add ろ",
        headers: ["ます form", "Imperative"],
        rows: [
          ["たべます", "たべろ"],
          ["おきます", "おきろ"],
          ["にげます", "にげろ"],
          ["みます", "みろ"]
        ]
      },
      {
        title: "Group 3: memorise these",
        headers: ["ます form", "Imperative"],
        rows: [
          ["します", "しろ"],
          ["べんきょうします", "べんきょうしろ"],
          ["きます", "こい"]
        ]
      },
      {
        title: "Where you hear it",
        headers: ["Situation", "Japanese", "Meaning"],
        rows: [
          ["Sports", "がんばれ！", "Go for it!"],
          ["Road sign", "とまれ", "Stop"],
          ["Emergency", "にげろ！", "Run!"],
          ["Coach to team", "はしれ！", "Run!"]
        ]
      }
    ],
    mistakes: [
      { bad: "たべれ。", good: "たべろ。", why: "Group 2 adds ろ." },
      { bad: "きろ。 (from きます, come)", good: "こい。", why: "The imperative of come is irregular." },
      { bad: "(to a customer) まて。", good: "まって ください。", why: "The imperative is far too rude here." }
    ],
    tip: "Learn it to recognise it. You will read and hear it much more than you say it."
  },
  "L133-2": {
    formula: ["V dictionary + な"],
    points: [
      "Just add な to the dictionary form.",
      "It works for all three groups.",
      "It is as strong as the imperative.",
      "Use ～ないで ください in polite speech."
    ],
    tables: [
      {
        title: "Group 1",
        headers: ["ます form", "Dictionary", "Prohibitive"],
        rows: [
          ["すいます", "すう", "すうな"],
          ["いきます", "いく", "いくな"],
          ["いそぎます", "いそぐ", "いそぐな"],
          ["はなします", "はなす", "はなすな"],
          ["まちます", "まつ", "まつな"],
          ["よびます", "よぶ", "よぶな"],
          ["のみます", "のむ", "のむな"],
          ["はしります", "はしる", "はしるな"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "Dictionary", "Prohibitive"],
        rows: [
          ["たべます", "たべる", "たべるな"],
          ["みます", "みる", "みるな"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "Dictionary", "Prohibitive"],
        rows: [
          ["します", "する", "するな"],
          ["きます", "くる", "くるな"]
        ]
      },
      {
        title: "Do it, don't do it",
        headers: ["Imperative", "Prohibitive", "Polite don't"],
        rows: [
          ["のめ", "のむな", "のまないで ください"],
          ["たべろ", "たべるな", "たべないで ください"],
          ["しろ", "するな", "しないで ください"],
          ["こい", "くるな", "こないで ください"]
        ]
      }
    ],
    mistakes: [
      { bad: "のみな。 (to stop someone)", good: "のむな。", why: "な joins the dictionary form." },
      { bad: "こな。", good: "くるな。", why: "The dictionary form of きます is くる." }
    ],
    tip: "Think of な as a hand held up: stop, don't do that."
  },
  "L133-3": {
    formula: ["N に「～」と かいて あります", "～は なんと よみますか"],
    points: [
      "と works like quotation marks.",
      "なんと かいて ありますか asks what something says.",
      "なんと よみますか asks how to read something.",
      "Use なん, not なに, before と."
    ],
    tables: [
      {
        title: "Asking and answering",
        headers: ["Question", "Answer"],
        rows: [
          ["なんと かいて ありますか。", "「やすみ」と かいて あります。"],
          ["なんと よむんですか。", "「えき」と よみます。"]
        ]
      },
      {
        title: "Words you will see on signs",
        headers: ["Sign", "Reading", "Meaning"],
        rows: [
          ["止まれ", "とまれ", "Stop"],
          ["入口", "いりぐち", "Entrance"],
          ["出口", "でぐち", "Exit"],
          ["休み", "やすみ", "Closed"]
        ]
      }
    ],
    mistakes: [
      { bad: "なにと かいて ありますか。", good: "なんと かいて ありますか。", why: "Before と, 何 is read なん." },
      { bad: "「やすみ」を かいて います。", good: "「やすみ」と かいて あります。", why: "To say what a sign says, use と and あります." }
    ],
    tip: "Point at any sign in Japan and ask: なんと よむんですか。"
  },
  "L133-4": {
    formula: ["X は Y と いう いみです", "X は どういう いみですか"],
    points: [
      "Use it to explain signs, marks and new words.",
      "どういう comes straight before いみ, with no particle.",
      "Plain forms go before と いう.",
      "Pair it with an imperative or prohibitive when explaining signs."
    ],
    tables: [
      {
        title: "Explaining signs",
        headers: ["Sign", "Explanation", "Meaning"],
        rows: [
          ["とまれ", "とまれは ストップと いう いみです。", "It means stop."],
          ["はいるな", "はいっては いけないと いう いみです。", "It means you must not enter."],
          ["やすみ", "みせが あいて いないと いう いみです。", "It means the shop isn't open."]
        ]
      }
    ],
    mistakes: [
      { bad: "どう いみですか。", good: "どういう いみですか。", why: "Before a noun, use どういう." },
      { bad: "ストップの いう いみです。", good: "ストップと いう いみです。", why: "The linking particle is と." }
    ],
    tip: "When you are lost in Japanese, どういう いみですか is the most useful question you have."
  },
  "L133-5": {
    formula: ["N は plain form + と いって いました", "N に plain form + と つたえて いただけませんか"],
    points: [
      "It reports something someone said earlier.",
      "Use plain forms before と.",
      "な-adjectives and nouns keep だ here.",
      "To quote exact words, put them in 「」.",
      "と つたえて いただけませんか asks someone to pass on a message."
    ],
    tables: [
      {
        title: "Group 1",
        headers: ["They said", "You report"],
        rows: [
          ["いきます", "いくと いって いました"],
          ["いきません", "いかないと いって いました"],
          ["いきました", "いったと いって いました"]
        ]
      },
      {
        title: "Group 2",
        headers: ["They said", "You report"],
        rows: [
          ["たべます", "たべると いって いました"],
          ["たべません", "たべないと いって いました"],
          ["たべました", "たべたと いって いました"]
        ]
      },
      {
        title: "Group 3",
        headers: ["They said", "You report"],
        rows: [
          ["します", "すると いって いました"],
          ["しません", "しないと いって いました"],
          ["きます", "くると いって いました"],
          ["きません", "こないと いって いました"]
        ]
      },
      {
        title: "Adjectives and nouns",
        headers: ["They said", "You report"],
        rows: [
          ["いそがしいです", "いそがしいと いって いました"],
          ["ひまです", "ひまだと いって いました"],
          ["やすみです", "やすみだと いって いました"]
        ]
      },
      {
        title: "いいました vs いって いました",
        headers: ["Japanese", "Use"],
        rows: [
          ["いいました。", "States the act of saying"],
          ["いって いました。", "Passes on a message to someone"]
        ]
      }
    ],
    mistakes: [
      { bad: "やすみと いって いました。", good: "やすみだと いって いました。", why: "Nouns need だ before と." },
      { bad: "マリアさんに いくを つたえて ください。", good: "マリアさんに いくと つたえて ください。", why: "A message takes と." }
    ],
    tip: "Use this to pass on a message: start with the person, then what they said."
  }
});
window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  133: {
    can: ["Recognise strong orders and don'ts", "Ask what a sign says and means", "Pass on what someone said"],
    first: ["にげます", "さわぎます", "あきらめます", "なげます", "まもります", "つたえます", "ちゅういします", "はずします", "きそく", "ルール", "しようきんし", "たちいりきんし"],
    tip: "Walk through your day and notice signs, because this lesson is about reading the world around you."
  }
});

// ───────────────────────── LESSON 34 ─────────────────────────
window.GRAMMAR = (window.GRAMMAR || []).concat([
  {
    id: "L134-1",
    lesson: 134,
    title: "V / N の + とおりに",
    meaning: "Doing something exactly as shown or said",
    explain: "とおりに means in the same way as, and it follows a dictionary form, a た-form or a noun with の.",
    examples: [
      { jp: "カランさんが {教|おし}えた とおりに、{料理|りょうり}を {作|つく}りました。", ro: "Karan-san ga oshieta tōri ni, ryōri o tsukurimashita.", en: "I cooked the dish just as Karan taught me." },
      { jp: "わたしが {歌|うた}う とおりに {歌|うた}って ください。", ro: "Watashi ga utau tōri ni utatte kudasai.", en: "Please sing it just the way I sing it." },
      { jp: "この {図|ず}の とおりに {作|つく}って ください。", ro: "Kono zu no tōri ni tsukutte kudasai.", en: "Please make it as this diagram shows." }
    ],
    drills: [
      { type: "fill", jp: "{先生|せんせい}が {書|か}いた ＿＿ {書|か}いて ください。", answer: "とおりに", options: ["とおりに", "ながら", "まえに", "ほうが"], en: "Please write it exactly as the teacher wrote it." },
      { type: "fill", jp: "この {地図|ちず}＿＿ とおりに {行|い}って ください。", answer: "の", options: ["の", "を", "で", "が"], en: "Please go the way this map shows." },
      { type: "fill", jp: "わたしが {話|はな}す とおりに ＿＿ ください。", answer: "{言|い}って", options: ["{言|い}って", "{言|い}う", "{言|い}い", "{言|い}った"], en: "Please say it exactly as I say it." },
      { type: "choose", q: "Which means 'as the manual says'?", answer: "せつめいしょの とおりに", options: ["せつめいしょの とおりに", "せつめいしょが とおりに", "せつめいしょな とおりに", "せつめいしょと とおりに"] },
      { type: "choose", q: "What can come before とおりに?", answer: "A plain verb, or a noun with the particle no", options: ["A plain verb, or a noun with the particle no", "Only a ます stem", "Only a te-form", "Only a volitional form"] },
      { type: "order", tiles: ["{図|ず}の", "とおりに", "{作|つく}って", "ください"], en: "Please make it as the diagram shows." }
    ]
  },
  {
    id: "L134-2",
    lesson: 134,
    title: "V た / N の + あとで",
    meaning: "After doing something",
    explain: "あとで follows the た-form or a noun with の, and the verb before it stays in the た-form even for future plans.",
    examples: [
      { jp: "{仕事|しごと}が {終|お}わった あとで、ジムへ {行|い}きます。", ro: "Shigoto ga owatta ato de, jimu e ikimasu.", en: "After work finishes, I'll go to the gym." },
      { jp: "おふろに {入|はい}った あとで、ビールを {飲|の}みます。", ro: "Ofuro ni haitta ato de, bīru o nomimasu.", en: "After taking a bath, I have a beer." },
      { jp: "{映画|えいが}の あとで、お{茶|ちゃ}を {飲|の}みましょう。", ro: "Eiga no ato de, ocha o nomimashō.", en: "Let's have some tea after the film." }
    ],
    drills: [
      { type: "fill", jp: "{仕事|しごと}が ＿＿ あとで、ビールを {飲|の}みます。", answer: "{終|お}わった", options: ["{終|お}わった", "{終|お}わる", "{終|お}わって", "{終|お}わり"], en: "After work finishes, I'll have a beer." },
      { type: "fill", jp: "じゅぎょう＿＿ あとで、{先生|せんせい}に {質問|しつもん}します。", answer: "の", options: ["の", "が", "で", "に"], en: "After class, I'll ask the teacher a question." },
      { type: "fill", jp: "{映画|えいが}を {見|み}た ＿＿、レストランへ {行|い}きました。", answer: "あとで", options: ["あとで", "まえに", "ながら", "ほうが"], en: "After seeing the film, we went to a restaurant." },
      { type: "choose", q: "Which is correct for 'I'll go to bed after I take a bath'?", answer: "おふろに {入|はい}った あとで ねます。", options: ["おふろに {入|はい}った あとで ねます。", "おふろに {入|はい}る あとで ねます。", "おふろに {入|はい}って あとで ねます。", "おふろに {入|はい}った まえに ねます。"] },
      { type: "choose", q: "Which verb form comes before あとで, even for a future plan?", answer: "The plain past form", options: ["The plain past form", "The dictionary form", "The ない form", "The ます form"] },
      { type: "order", tiles: ["{学校|がっこう}が", "{終|お}わった", "あとで", "アルバイトを", "します"], en: "After school finishes, I do my part-time job." }
    ]
  },
  {
    id: "L134-3",
    lesson: 134,
    title: "V て・V ないで + V",
    meaning: "How you do something, and doing it without something",
    explain: "A て-form shows the way you do the main action, and a ないで form shows you do it without that, or instead of that.",
    examples: [
      { jp: "{歩|ある}いて {学校|がっこう}へ {行|い}きます。", ro: "Aruite gakkō e ikimasu.", en: "I walk to school." },
      { jp: "{朝|あさ}ごはんを {食|た}べないで {会社|かいしゃ}へ {行|い}きました。", ro: "Asagohan o tabenai de kaisha e ikimashita.", en: "I went to the office without eating breakfast." },
      { jp: "{日曜日|にちようび}は {出|で}かけないで、うちで {本|ほん}を {読|よ}みました。", ro: "Nichiyōbi wa dekakenai de, uchi de hon o yomimashita.", en: "On Sunday I read at home instead of going out." }
    ],
    drills: [
      { type: "fill", jp: "お{茶|ちゃ}に レモンを ＿＿ {飲|の}みます。", answer: "{入|い}れて", options: ["{入|い}れて", "{入|い}れ", "{入|い}れる", "{入|い}れた"], en: "I drink my tea with lemon in it." },
      { type: "fill", jp: "{服|ふく}を ＿＿ ねて しまいました。", answer: "きがえないで", options: ["きがえないで", "きがえて", "きがえなくて", "きがえない"], en: "I fell asleep without changing my clothes." },
      { type: "fill", jp: "{地図|ちず}を ＿＿ {行|い}きました。", answer: "{見|み}ないで", options: ["{見|み}ないで", "{見|み}なくて", "{見|み}て", "{見|み}ない"], en: "I went there without looking at a map." },
      { type: "choose", q: "What does 「バスに のらないで あるいて いきます」 mean?", answer: "I'll walk instead of taking the bus.", options: ["I'll walk instead of taking the bus.", "I'll take the bus and then walk.", "I can't walk to the bus.", "I'll get on the bus while walking."] },
      { type: "choose", q: "How do you say 'I go out without a hat'?", answer: "ぼうしを かぶらないで {出|で}かけます。", options: ["ぼうしを かぶらないで {出|で}かけます。", "ぼうしを かぶって {出|で}かけます。", "ぼうしを かぶらなくて {出|で}かけます。", "ぼうしを かぶりないで {出|で}かけます。"] },
      { type: "order", tiles: ["{土曜日|どようび}は", "{映画|えいが}に", "{行|い}かないで", "うちで", "{勉強|べんきょう}します"], en: "On Saturday I'll study at home instead of going to the cinema." }
    ]
  }
]);
window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {
  "L134-1": {
    formula: ["V dictionary + とおりに", "V た + とおりに", "N の + とおりに"],
    points: [
      "It means exactly the way something is shown or said.",
      "Dictionary form: follow what is about to be done.",
      "た-form: follow what has already been done.",
      "A noun needs の before とおりに."
    ],
    tables: [
      {
        title: "Group 1",
        headers: ["ます form", "About to happen", "Already happened"],
        rows: [
          ["いいます", "いう とおりに", "いった とおりに"],
          ["かきます", "かく とおりに", "かいた とおりに"],
          ["はなします", "はなす とおりに", "はなした とおりに"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "About to happen", "Already happened"],
        rows: [
          ["おしえます", "おしえる とおりに", "おしえた とおりに"],
          ["みます", "みる とおりに", "みた とおりに"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "About to happen", "Already happened"],
        rows: [
          ["します", "する とおりに", "した とおりに"],
          ["せつめいします", "せつめいする とおりに", "せつめいした とおりに"]
        ]
      },
      {
        title: "With nouns",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["せつめいしょの とおりに", "as the manual says"],
          ["ずの とおりに", "as the diagram shows"],
          ["ちずの とおりに", "as the map shows"]
        ]
      }
    ],
    mistakes: [
      { bad: "ずが とおりに つくります。", good: "ずの とおりに つくります。", why: "A noun joins with の." },
      { bad: "みます とおりに かいて ください。", good: "みた とおりに かいて ください。", why: "とおりに follows a plain form." }
    ],
    tip: "Think of a teacher saying: do what I do."
  },
  "L134-2": {
    formula: ["V た + あとで", "N の + あとで"],
    points: [
      "The first verb is always in the た-form.",
      "The main verb at the end shows the real time.",
      "A noun needs の before あとで.",
      "～てから is close, but stresses the order of two steps."
    ],
    tables: [
      {
        title: "Group 1",
        headers: ["ます form", "After doing"],
        rows: [
          ["おわります", "おわった あとで"],
          ["のみます", "のんだ あとで"],
          ["かきます", "かいた あとで"],
          ["はなします", "はなした あとで"],
          ["いきます", "いった あとで"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "After doing"],
        rows: [
          ["たべます", "たべた あとで"],
          ["みます", "みた あとで"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "After doing"],
        rows: [
          ["します", "した あとで"],
          ["きます", "きた あとで"]
        ]
      },
      {
        title: "Before and after",
        headers: ["Pattern", "Japanese", "Meaning"],
        rows: [
          ["Before", "ねる まえに はを みがきます。", "I brush my teeth before bed."],
          ["After", "たべた あとで はを みがきます。", "I brush my teeth after eating."],
          ["Next step", "たべてから はを みがきます。", "I eat, and then I brush my teeth."]
        ]
      }
    ],
    mistakes: [
      { bad: "たべる あとで ねます。", good: "たべた あとで ねます。", why: "Use the た-form, even for the future." },
      { bad: "えいが あとで のみましょう。", good: "えいがの あとで のみましょう。", why: "A noun needs の." }
    ],
    tip: "まえに takes a dictionary form and あとで takes a た-form, so the two are a mirror image."
  },
  "L134-3": {
    formula: ["V1 て + V2", "V1 ないで + V2"],
    points: [
      "V1 て shows how you do V2.",
      "V1 ないで shows you do V2 without doing V1.",
      "ないで can also mean instead of doing V1.",
      "Don't swap in なくて. It gives a reason, not a way."
    ],
    tables: [
      {
        title: "Group 1",
        headers: ["ます form", "Doing it", "Without it"],
        rows: [
          ["あるきます", "あるいて", "あるかないで"],
          ["もちます", "もって", "もたないで"],
          ["のります", "のって", "のらないで"],
          ["かぶります", "かぶって", "かぶらないで"],
          ["いきます", "いって", "いかないで"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "Doing it", "Without it"],
        rows: [
          ["つけます", "つけて", "つけないで"],
          ["たべます", "たべて", "たべないで"],
          ["みます", "みて", "みないで"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "Doing it", "Without it"],
        rows: [
          ["します", "して", "しないで"],
          ["きます", "きて", "こないで"]
        ]
      },
      {
        title: "Two meanings of ないで",
        headers: ["Meaning", "Japanese", "In English"],
        rows: [
          ["Without", "かさを もたないで でかけました。", "I went out without an umbrella."],
          ["Instead of", "バスに のらないで あるきました。", "I walked instead of taking the bus."]
        ]
      }
    ],
    mistakes: [
      { bad: "かさを もたなくて でかけました。", good: "かさを もたないで でかけました。", why: "For without, use ないで." },
      { bad: "かさを もちないで でかけました。", good: "かさを もたないで でかけました。", why: "Start from the ない form: もたない." }
    ],
    tip: "Ask how did you do it? The て or ないで part is your answer."
  }
});
window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  134: {
    can: ["Follow and give instructions", "Say what you do after something", "Say how you do something, or that you do it without something"],
    first: ["くみたてます", "おります", "しつもんします", "つけます", "みつかります", "せつめいしょ", "ず", "せん", "やじるし", "さっき", "ざいりょう"],
    tip: "Explain a recipe out loud with these patterns, because this lesson is built for giving instructions."
  }
});

// ───────────────────────── LESSON 35 ─────────────────────────
window.GRAMMAR = (window.GRAMMAR || []).concat([
  {
    id: "L135-1",
    lesson: 135,
    title: "The ば form",
    meaning: "If: a condition for a result",
    explain: "The ば form states the condition needed for what follows.",
    examples: [
      { jp: "{駅|えき}に {近|ちか}ければ、この へやを {借|か}ります。", ro: "Eki ni chikakereba, kono heya o karimasu.", en: "If it's near the station, I'll rent this room." },
      { jp: "{時間|じかん}が あれば、てつだいます。", ro: "Jikan ga areba, tetsudaimasu.", en: "If I have time, I'll help." },
      { jp: "{雨|あめ}が ふらなければ、{海|うみ}へ {行|い}きます。", ro: "Ame ga furanakereba, umi e ikimasu.", en: "If it doesn't rain, I'll go to the sea." }
    ],
    drills: [
      { type: "fill", jp: "{高|たか}＿＿、{買|か}いません。", answer: "ければ", options: ["ければ", "いば", "くば", "いれば"], en: "If it's expensive, I won't buy it." },
      { type: "fill", jp: "{天気|てんき}が ＿＿、{海|うみ}へ {行|い}きます。", answer: "よければ", options: ["よければ", "いければ", "いいば", "よいれば"], en: "If the weather is good, I'll go to the sea." },
      { type: "fill", jp: "{明日|あした} ひま＿＿、{来|き}て ください。", answer: "なら", options: ["なら", "だば", "ければ", "れば"], en: "If you are free tomorrow, please come." },
      { type: "fill", jp: "よく {見|み}＿＿、わかります。", answer: "れば", options: ["れば", "ば", "たば", "るば"], en: "If you look carefully, you'll understand." },
      { type: "choose", q: "What is the ば form of きます?", answer: "{来|く}れば", options: ["{来|く}れば", "{来|き}れば", "{来|こ}れば", "{来|く}るば"] },
      { type: "order", tiles: ["{明日|あした}", "{雨|あめ}が", "ふらなければ", "{行|い}きます"], en: "If it doesn't rain tomorrow, I'll go." }
    ]
  },
  {
    id: "L135-2",
    lesson: 135,
    title: "N + なら",
    meaning: "If it's that you're talking about",
    explain: "なら picks up what the other person has just raised and adds advice or information about it.",
    examples: [
      { jp: "カメラなら、あの {店|みせ}が {安|やす}いですよ。", ro: "Kamera nara, ano mise ga yasui desu yo.", en: "If it's a camera you want, that shop is cheap." },
      { jp: "モチに {会|あ}いたいんですか。モチなら {駅|えき}に いますよ。", ro: "Mochi ni aitai n desu ka. Mochi nara eki ni imasu yo.", en: "You want to see Mochi? Mochi is at the station." },
      { jp: "{海|うみ}へ {行|い}くなら、{夏|なつ}が いいですよ。", ro: "Umi e iku nara, natsu ga ii desu yo.", en: "If you're going to the sea, summer is good." }
    ],
    drills: [
      { type: "fill", jp: "パソコンを {買|か}いたいんですか。パソコン＿＿、あの {店|みせ}が {安|やす}いですよ。", answer: "なら", options: ["なら", "ながら", "から", "まで"], en: "You want to buy a computer? If so, that shop is cheap." },
      { type: "fill", jp: "{海|うみ}へ {行|い}く＿＿、{夏|なつ}が いいです。", answer: "なら", options: ["なら", "ながら", "まで", "ほど"], en: "If you're going to the sea, summer is good." },
      { type: "fill", jp: "{日本語|にほんご}の {先生|せんせい}を さがして いるんですか。それ＿＿、さとう{先生|せんせい}が いいですよ。", answer: "なら", options: ["なら", "ほど", "しか", "まで"], en: "You're looking for a Japanese teacher? In that case, Sato-sensei is good." },
      { type: "choose", q: "A friend says she wants to eat ramen. Which reply is correct?", answer: "ラーメンなら、{駅|えき}の {前|まえ}の {店|みせ}が おいしいですよ。", options: ["ラーメンなら、{駅|えき}の {前|まえ}の {店|みせ}が おいしいですよ。", "ラーメンだなら、{駅|えき}の {前|まえ}の {店|みせ}が おいしいですよ。", "ラーメンのなら、{駅|えき}の {前|まえ}の {店|みせ}が おいしいですよ。", "ラーメンなれば、{駅|えき}の {前|まえ}の {店|みせ}が おいしいですよ。"] },
      { type: "choose", q: "What does なら do in a conversation?", answer: "It picks up the other person's topic and gives advice", options: ["It picks up the other person's topic and gives advice", "It shows something happened in the past", "It says something is forbidden", "It shows two actions happening at once"] },
      { type: "order", tiles: ["{旅行|りょこう}なら", "{秋|あき}が", "いいですよ"], en: "If it's a trip you're planning, autumn is good." }
    ]
  },
  {
    id: "L135-3",
    lesson: 135,
    title: "～ば ～ほど",
    meaning: "The more ..., the more ...",
    explain: "Say the same word twice, first in the ば form and then before ほど, to mean the more something happens, the more the result grows.",
    examples: [
      { jp: "{話|はな}せば {話|はな}す ほど {上手|じょうず}に なります。", ro: "Hanaseba hanasu hodo jōzu ni narimasu.", en: "The more you speak, the better you get." },
      { jp: "{大|おお}きければ {大|おお}きい ほど {高|たか}く なります。", ro: "Ōkikereba ōkii hodo takaku narimasu.", en: "The bigger it is, the more expensive it gets." },
      { jp: "ねる へやは しずかなら しずかな ほど いいです。", ro: "Neru heya wa shizuka nara shizuka na hodo ii desu.", en: "The quieter a bedroom is, the better." }
    ],
    drills: [
      { type: "fill", jp: "{見|み}れば {見|み}る ＿＿ きれいです。", answer: "ほど", options: ["ほど", "ながら", "など", "まで"], en: "The more you look at it, the prettier it is." },
      { type: "fill", jp: "{話|はな}せば ＿＿ ほど {上手|じょうず}に なります。", answer: "{話|はな}す", options: ["{話|はな}す", "{話|はな}し", "{話|はな}して", "{話|はな}した"], en: "The more you speak, the better you get." },
      { type: "fill", jp: "へやは {広|ひろ}＿＿ {広|ひろ}い ほど いいです。", answer: "ければ", options: ["ければ", "いば", "くて", "いなら"], en: "The bigger the room, the better." },
      { type: "fill", jp: "へやは しずかなら ＿＿ ほど いいです。", answer: "しずかな", options: ["しずかな", "しずかだ", "しずか", "しずかに"], en: "The quieter the room, the better." },
      { type: "choose", q: "How do you say 'The more you eat, the fatter you get'?", answer: "{食|た}べれば {食|た}べる ほど ふとります。", options: ["{食|た}べれば {食|た}べる ほど ふとります。", "{食|た}べれば {食|た}べて ほど ふとります。", "{食|た}べるば {食|た}べる ほど ふとります。", "{食|た}べて {食|た}べる ほど ふとります。"] },
      { type: "order", tiles: ["{考|かんが}えれば", "{考|かんが}える", "ほど", "わからなく", "なります"], en: "The more I think about it, the less I understand." }
    ]
  }
]);
window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {
  "L135-1": {
    formula: ["Verbs: え row + ば", "い-adj: ～ければ", "な-adj / N: ～なら"],
    points: [
      "It says what is needed for the result to happen.",
      "The ば part comes first, then the result.",
      "After an action verb, don't put a request or plan. Use たら.",
      "Question word + ば いいですか asks for advice, like たら いいですか."
    ],
    tables: [
      {
        title: "Group 1: い row becomes え row, then ば",
        headers: ["Before ます", "Becomes", "ます form", "ば form"],
        rows: [
          ["い", "えば", "かいます", "かえば"],
          ["き", "けば", "いきます", "いけば"],
          ["ぎ", "げば", "いそぎます", "いそげば"],
          ["し", "せば", "はなします", "はなせば"],
          ["ち", "てば", "まちます", "まてば"],
          ["に", "ねば", "しにます", "しねば"],
          ["び", "べば", "よびます", "よべば"],
          ["み", "めば", "のみます", "のめば"],
          ["り", "れば", "あります", "あれば"]
        ]
      },
      {
        title: "Group 2: drop ます, add れば",
        headers: ["ます form", "ば form"],
        rows: [
          ["たべます", "たべれば"],
          ["ねます", "ねれば"],
          ["みます", "みれば"]
        ]
      },
      {
        title: "Group 3: memorise these",
        headers: ["ます form", "ば form"],
        rows: [
          ["します", "すれば"],
          ["べんきょうします", "べんきょうすれば"],
          ["きます", "くれば"]
        ]
      },
      {
        title: "Negatives: ない becomes なければ",
        headers: ["Group", "ない form", "ば form"],
        rows: [
          ["Group 1", "いかない", "いかなければ"],
          ["Group 2", "たべない", "たべなければ"],
          ["Group 3", "しない", "しなければ"],
          ["Group 3", "こない", "こなければ"]
        ]
      },
      {
        title: "Adjectives and nouns",
        headers: ["Word type", "Plain", "ば form", "Negative"],
        rows: [
          ["い", "やすい", "やすければ", "やすくなければ"],
          ["いい", "いい", "よければ", "よくなければ"],
          ["な", "ひま", "ひまなら", "ひまじゃなければ"],
          ["Noun", "あめ", "あめなら", "あめじゃなければ"]
        ]
      },
      {
        title: "Asking for advice",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["どうすれば いいですか。", "What should I do?"],
          ["どこへ いけば いいですか。", "Where should I go?"]
        ]
      }
    ],
    mistakes: [
      { bad: "いいければ、きて ください。", good: "よければ、きて ください。", why: "いい changes to よ: よければ." },
      { bad: "やすいば かいます。", good: "やすければ かいます。", why: "い-adjectives change い to ければ." },
      { bad: "しごとが おわれば、でんわして ください。", good: "しごとが おわったら、でんわして ください。", why: "A request after a verb's ば sounds wrong. Use たら." }
    ],
    tip: "When in doubt, use たら. Use ば when the first half is the key condition."
  },
  "L135-2": {
    formula: ["N + なら、～", "V plain + なら、～"],
    points: [
      "It responds to something just mentioned.",
      "The second half gives advice, an opinion or information.",
      "It sounds like if it's that you mean.",
      "Nouns join directly, without だ."
    ],
    tables: [
      {
        title: "A short exchange",
        headers: ["Speaker", "Japanese", "Meaning"],
        rows: [
          ["A", "おんせんに いきたいんですが。", "I'd like to go to a hot spring."],
          ["B", "おんせんなら、はこねが いいですよ。", "For hot springs, Hakone is good."]
        ]
      },
      {
        title: "Plain forms before なら",
        headers: ["Word type", "Japanese", "Meaning"],
        rows: [
          ["Group 1 verb", "いくなら", "if you're going"],
          ["Group 2 verb", "たべるなら", "if you're going to eat"],
          ["Group 3 verb", "するなら", "if you're going to do it"],
          ["Group 3 verb", "くるなら", "if you're coming"],
          ["い", "たかいなら", "if it's expensive"],
          ["な", "ひまなら", "if you're free"],
          ["Noun", "あめなら", "if it's rain"]
        ]
      }
    ],
    mistakes: [
      { bad: "カメラだなら、あの みせが いいです。", good: "カメラなら、あの みせが いいです。", why: "Don't put だ before なら." },
      { bad: "たかいだなら、かいません。", good: "たかいなら、かいません。", why: "い-adjectives join なら directly." }
    ],
    tip: "It's the word for good recommendations: X なら, Y が いいですよ."
  },
  "L135-3": {
    formula: ["V ば + V dictionary + ほど", "い-adj ければ + い-adj + ほど", "な-adj なら + な-adj な + ほど"],
    points: [
      "The same word appears twice.",
      "First in the ば form, then in its plain form.",
      "な-adjectives use なら and then な.",
      "Often the second half is a change or a judgement."
    ],
    tables: [
      {
        title: "Group 1",
        headers: ["ます form", "Pattern"],
        rows: [
          ["はなします", "はなせば はなす ほど"],
          ["のみます", "のめば のむ ほど"],
          ["あるきます", "あるけば あるく ほど"],
          ["よみます", "よめば よむ ほど"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "Pattern"],
        rows: [
          ["たべます", "たべれば たべる ほど"],
          ["みます", "みれば みる ほど"],
          ["かんがえます", "かんがえれば かんがえる ほど"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "Pattern"],
        rows: [
          ["します", "すれば する ほど"],
          ["きます", "くれば くる ほど"],
          ["べんきょうします", "べんきょうすれば する ほど"]
        ]
      },
      {
        title: "Adjectives",
        headers: ["Word type", "Word", "Pattern"],
        rows: [
          ["い", "やすい", "やすければ やすい ほど"],
          ["い", "いい", "よければ よい ほど"],
          ["な", "しずか", "しずかなら しずかな ほど"],
          ["な", "べんり", "べんりなら べんりな ほど"]
        ]
      }
    ],
    mistakes: [
      { bad: "やすければ やすく ほど いいです。", good: "やすければ やすい ほど いいです。", why: "Before ほど, use the plain い form." },
      { bad: "しずかなら しずか ほど いいです。", good: "しずかなら しずかな ほど いいです。", why: "な-adjectives keep な before ほど." }
    ],
    tip: "Build a motto of your own: べんきょうすれば する ほど おもしろく なります."
  }
});
window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  135: {
    can: ["Say what is needed for something to happen", "Give advice about something just mentioned", "Say the more ..., the more ..."],
    first: ["かわります", "ただしい", "しま", "みなと", "きんじょ", "かいがい", "やまのぼり", "れきし", "きかい", "ひつよう", "それなら", "らく"],
    tip: "Learn the ば form together with the potential form, because Group 1 uses the same え row sound for both."
  }
});

// ───────────────────────── LESSON 36 ─────────────────────────
window.GRAMMAR = (window.GRAMMAR || []).concat([
  {
    id: "L136-1",
    lesson: 136,
    title: "V dictionary / ない + ように",
    meaning: "So that something happens, or doesn't",
    explain: "ように gives an aim, and the verb before it is usually a potential, a verb like わかります, or a ない form.",
    examples: [
      { jp: "{電車|でんしゃ}に おくれないように、{早|はや}く {家|いえ}を {出|で}ます。", ro: "Densha ni okurenai yō ni, hayaku ie o demasu.", en: "I leave home early so that I'm not late for the train." },
      { jp: "{後|うし}ろの {人|ひと}にも {聞|き}こえるように、{大|おお}きい こえで {話|はな}します。", ro: "Ushiro no hito ni mo kikoeru yō ni, ōkii koe de hanashimasu.", en: "I speak in a loud voice so that people at the back can hear too." },
      { jp: "{朝|あさ} {起|お}きられるように、{今夜|こんや}は {早|はや}く ねます。", ro: "Asa okirareru yō ni, kon'ya wa hayaku nemasu.", en: "I'll go to bed early tonight so that I can get up in the morning." }
    ],
    drills: [
      { type: "fill", jp: "{聞|き}こえる＿＿、{大|おお}きい こえで {話|はな}して ください。", answer: "ように", options: ["ように", "ながら", "あとで", "ほど"], en: "Please speak in a loud voice so that I can hear." },
      { type: "fill", jp: "{明日|あした} わすれ＿＿ように、ノートに {書|か}きます。", answer: "ない", options: ["ない", "ます", "て", "た"], en: "I'll write it in my notebook so that I don't forget tomorrow." },
      { type: "fill", jp: "{日本語|にほんご}の {新聞|しんぶん}が ＿＿ように、{漢字|かんじ}を {勉強|べんきょう}して います。", answer: "{読|よ}める", options: ["{読|よ}める", "{読|よ}みます", "{読|よ}み", "{読|よ}んで"], en: "I'm studying kanji so that I can read Japanese newspapers." },
      { type: "choose", q: "Which kind of verb usually comes before ように?", answer: "A verb you can't directly control, like a potential", options: ["A verb you can't directly control, like a potential", "Only a ます stem", "Only a past verb", "Only a verb in the te-form"] },
      { type: "choose", q: "How do you say 'I take notes so I won't forget'?", answer: "わすれないように、メモします。", options: ["わすれないように、メモします。", "わすれないでように、メモします。", "わすれるないように、メモします。", "わすれないのように、メモします。"] },
      { type: "order", tiles: ["かぜを", "ひかないように", "コートを", "{着|き}ます"], en: "I wear a coat so that I don't catch a cold." }
    ]
  },
  {
    id: "L136-2",
    lesson: 136,
    title: "V + ように なります",
    meaning: "Something has changed: now you can, or now you do",
    explain: "～ように なります shows a change into being able to do something or into a new habit, and ～なく なります shows the opposite.",
    examples: [
      { jp: "{半年|はんとし}で ひらがなが ぜんぶ {読|よ}めるように なりました。", ro: "Hantoshi de hiragana ga zenbu yomeru yō ni narimashita.", en: "In six months I became able to read all the hiragana." },
      { jp: "{子|こ}どもは やさいを {食|た}べるように なりました。", ro: "Kodomo wa yasai o taberu yō ni narimashita.", en: "My child has started eating vegetables." },
      { jp: "{仕事|しごと}が いそがしく なって、{本|ほん}が {読|よ}めなく なりました。", ro: "Shigoto ga isogashiku natte, hon ga yomenaku narimashita.", en: "Work got busy, and I can no longer read books." }
    ],
    drills: [
      { type: "fill", jp: "{毎日|まいにち} れんしゅうして、{漢字|かんじ}が {書|か}ける＿＿ なりました。", answer: "ように", options: ["ように", "ために", "ほど", "まで"], en: "I practised every day and became able to write kanji." },
      { type: "fill", jp: "{日本語|にほんご}の {歌|うた}が ＿＿ように なりました。", answer: "{歌|うた}える", options: ["{歌|うた}える", "{歌|うた}います", "{歌|うた}って", "{歌|うた}い"], en: "I have become able to sing Japanese songs." },
      { type: "fill", jp: "いそがしくて、テニスが でき＿＿ なりました。", answer: "なく", options: ["なく", "なくて", "ない", "ません"], en: "I am so busy that I can no longer play tennis." },
      { type: "choose", q: "Someone asks 「ピアノは ひけるように なりましたか」. You still can't play. What do you answer?", answer: "いいえ、まだ ひけません。", options: ["いいえ、まだ ひけません。", "はい、まだ ひけません。", "いいえ、もう ひけました。", "はい、ひけません。"] },
      { type: "choose", q: "How do you say 'I can no longer eat spicy food'?", answer: "からい ものが {食|た}べられなく なりました。", options: ["からい ものが {食|た}べられなく なりました。", "からい ものが {食|た}べられるように なりました。", "からい ものが {食|た}べなくように なりました。", "からい ものが {食|た}べられて なりました。"] },
      { type: "order", tiles: ["{車|くるま}の", "{運転|うんてん}が", "できるように", "なりました"], en: "I have become able to drive a car." }
    ]
  },
  {
    id: "L136-3",
    lesson: 136,
    title: "V + ように します",
    meaning: "Making an effort to do something",
    explain: "～ように します means making an effort, ～ように して います means keeping up that effort, and ～ように して ください asks someone to make sure of it.",
    examples: [
      { jp: "{毎日|まいにち} {歩|ある}くように して います。", ro: "Mainichi aruku yō ni shite imasu.", en: "I make a point of walking every day." },
      { jp: "{夜|よる} おそく {食|た}べないように して います。", ro: "Yoru osoku tabenai yō ni shite imasu.", en: "I try not to eat late at night." },
      { jp: "{明日|あした}は {九時|くじ}に {来|く}るように して ください。", ro: "Ashita wa kuji ni kuru yō ni shite kudasai.", en: "Please make sure you come at nine tomorrow." }
    ],
    drills: [
      { type: "fill", jp: "{毎日|まいにち} やさいを {食|た}べるように ＿＿。", answer: "して います", options: ["して います", "あります", "ください", "なりません"], en: "I make sure to eat vegetables every day." },
      { type: "fill", jp: "{夜|よる} おそく コーヒーを {飲|の}ま＿＿ように して います。", answer: "ない", options: ["ない", "なくて", "ます", "たい"], en: "I make a point of not drinking coffee late at night." },
      { type: "fill", jp: "{明日|あした}は {時間|じかん}に おくれないように ＿＿ ください。", answer: "して", options: ["して", "なって", "した", "する"], en: "Please make sure you're not late tomorrow." },
      { type: "fill", jp: "{友|とも}だちとは {日本語|にほんご}で ＿＿ように して います。", answer: "{話|はな}す", options: ["{話|はな}す", "{話|はな}し", "{話|はな}して", "{話|はな}します"], en: "I try to speak Japanese with my friends." },
      { type: "choose", q: "Which means 'I make an effort to get up early'?", answer: "{早|はや}く {起|お}きるように して います。", options: ["{早|はや}く {起|お}きるように して います。", "{早|はや}く {起|お}きるように なりました。", "{早|はや}く {起|お}きて しまいました。", "{早|はや}く {起|お}きたいです。"] },
      { type: "order", tiles: ["くすりを", "わすれないように", "して", "ください"], en: "Please make sure you don't forget your medicine." }
    ]
  }
]);
window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {
  "L136-1": {
    formula: ["V potential + ように、～", "V ない + ように、～"],
    points: [
      "The first half is the aim. The second half is what you do.",
      "The aim is something you can't fully control.",
      "That means potentials, ない forms, and verbs like わかります.",
      "The second half is an action you choose to do."
    ],
    tables: [
      {
        title: "Group 1",
        headers: ["ます form", "So that I can", "So that I don't"],
        rows: [
          ["かきます", "かけるように", "かかないように"],
          ["はなします", "はなせるように", "はなさないように"],
          ["いきます", "いけるように", "いかないように"],
          ["よみます", "よめるように", "よまないように"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "So that I can", "So that I don't"],
        rows: [
          ["たべます", "たべられるように", "たべないように"],
          ["おきます", "おきられるように", "おきないように"],
          ["おぼえます", "おぼえられるように", "おぼえないように"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "So that I can", "So that I don't"],
        rows: [
          ["します", "できるように", "しないように"],
          ["きます", "こられるように", "こないように"]
        ]
      },
      {
        title: "Verbs that join as they are",
        headers: ["ます form", "So that it does", "Meaning"],
        rows: [
          ["わかります", "わかるように", "so that it's understood"],
          ["みえます", "みえるように", "so that it can be seen"],
          ["きこえます", "きこえるように", "so that it can be heard"]
        ]
      }
    ],
    mistakes: [
      { bad: "わすれますように、メモします。", good: "わすれないように、メモします。", why: "ように joins plain forms, and here the aim is not forgetting." },
      { bad: "およぐように、れんしゅうします。", good: "およげるように、れんしゅうします。", why: "The aim is being able to swim, so use the potential." }
    ],
    tip: "Ask yourself: is this something I hope will happen? If so, use ように."
  },
  "L136-2": {
    formula: ["V dictionary + ように なります", "V ない → ～なく なります"],
    points: [
      "With a potential, it means you have become able to.",
      "With other verbs, it means a new habit has started.",
      "Use ～なく なります for no longer.",
      "It usually appears in the past: なりました."
    ],
    tables: [
      {
        title: "Group 1",
        headers: ["ます form", "Now I can", "I no longer can"],
        rows: [
          ["かきます", "かけるように なりました", "かけなく なりました"],
          ["はなします", "はなせるように なりました", "はなせなく なりました"],
          ["およぎます", "およげるように なりました", "およげなく なりました"],
          ["よみます", "よめるように なりました", "よめなく なりました"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "Now I can", "I no longer can"],
        rows: [
          ["たべます", "たべられるように なりました", "たべられなく なりました"],
          ["みます", "みられるように なりました", "みられなく なりました"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "Now I can", "I no longer can"],
        rows: [
          ["します", "できるように なりました", "できなく なりました"],
          ["きます", "こられるように なりました", "こられなく なりました"]
        ]
      },
      {
        title: "Ability and habit",
        headers: ["Change", "Japanese", "Meaning"],
        rows: [
          ["Ability", "さかなが たべられるように なりました。", "I have become able to eat fish."],
          ["Habit", "さかなを たべるように なりました。", "I have started eating fish."],
          ["Stopped", "さかなを たべなく なりました。", "I have stopped eating fish."]
        ]
      }
    ],
    mistakes: [
      { bad: "よめないように なりました。", good: "よめなく なりました。", why: "For no longer, the usual form is ～なく なります." },
      { bad: "およぐように なりました。 (you learned to swim)", good: "およげるように なりました。", why: "A new ability needs the potential." }
    ],
    tip: "It's the sentence of progress. Keep a list of what you can read now that you couldn't before."
  },
  "L136-3": {
    formula: ["V dictionary / ない + ように します", "～ように して います", "～ように して ください"],
    points: [
      "します: a decision to make an effort.",
      "して います: an effort you are keeping up.",
      "して ください: a polite way to say make sure.",
      "It is softer than a direct ～て ください."
    ],
    tables: [
      {
        title: "Group 1",
        headers: ["ます form", "Try to", "Try not to"],
        rows: [
          ["あるきます", "あるくように します", "あるかないように します"],
          ["のみます", "のむように します", "のまないように します"],
          ["はなします", "はなすように します", "はなさないように します"]
        ]
      },
      {
        title: "Group 2",
        headers: ["ます form", "Try to", "Try not to"],
        rows: [
          ["たべます", "たべるように します", "たべないように します"],
          ["おきます", "おきるように します", "おきないように します"]
        ]
      },
      {
        title: "Group 3",
        headers: ["ます form", "Try to", "Try not to"],
        rows: [
          ["します", "するように します", "しないように します"],
          ["きます", "くるように します", "こないように します"]
        ]
      },
      {
        title: "します or なります?",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["はやく おきるように して います。", "I make an effort to get up early."],
          ["はやく おきるように なりました。", "I have come to get up early."]
        ]
      }
    ],
    mistakes: [
      { bad: "あるきますように して います。", good: "あるくように して います。", why: "It joins the dictionary form." },
      { bad: "たべなくように して います。", good: "たべないように して います。", why: "It joins the ない form." }
    ],
    tip: "します is your effort. なります is the change that came about."
  }
});
window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  136: {
    can: ["Say what you do so that something happens", "Say what you have become able to do", "Say what you make an effort to do"],
    first: ["あいます", "ちょきんします", "すぎます", "なれます", "くさります", "けんどう", "じゅうどう", "このごろ", "やっと", "かなり", "かならず", "ぜったいに"],
    tip: "Keep the three ように patterns apart by their endings: an aim, なります for change, します for effort."
  }
});

// ───────────────────────── LESSON 37 ─────────────────────────
window.GRAMMAR = (window.GRAMMAR || []).concat([
  {
    id: "L137-1",
    lesson: 137,
    title: "Passive verbs: A は B に V",
    meaning: "Something is done to you",
    explain: "In a passive sentence the person affected is the topic, and the person who acts is marked with に.",
    examples: [
      { jp: "モチは {駅員|えきいん}の みんなに ほめられました。", ro: "Mochi wa ekiin no minna ni homeraremashita.", en: "Mochi was praised by all the station staff." },
      { jp: "{今朝|けさ}、{母|はは}に {起|お}こされました。", ro: "Kesa, haha ni okosaremashita.", en: "I was woken by my mother this morning." },
      { jp: "{知|し}らない {人|ひと}に {名前|なまえ}を {聞|き}かれました。", ro: "Shiranai hito ni namae o kikaremashita.", en: "I was asked my name by a stranger." }
    ],
    drills: [
      { type: "fill", jp: "{先生|せんせい}に ＿＿。", answer: "ほめられました", options: ["ほめられました", "ほめました", "ほめさせました", "ほめれました"], en: "I was praised by my teacher." },
      { type: "fill", jp: "{母|はは}＿＿ しかられました。", answer: "に", options: ["に", "を", "が", "で"], en: "I was scolded by my mother." },
      { type: "fill", jp: "{知|し}らない {人|ひと}に {名前|なまえ}を ＿＿。", answer: "{聞|き}かれました", options: ["{聞|き}かれました", "{聞|き}けました", "{聞|き}きられました", "{聞|き}こえました"], en: "I was asked my name by a stranger." },
      { type: "choose", q: "What is the passive form of します?", answer: "されます", options: ["されます", "しられます", "しれます", "できます"] },
      { type: "choose", q: "What is the passive form of よびます?", answer: "よばれます", options: ["よばれます", "よびられます", "よべます", "よべられます"] },
      { type: "order", tiles: ["わたしは", "{社長|しゃちょう}に", "よばれました"], en: "I was called by the company president." }
    ]
  },
  {
    id: "L137-2",
    lesson: 137,
    title: "A は B に N を V (passive)",
    meaning: "Something of yours is affected",
    explain: "When someone does something to your belongings or body, you stay the topic and the thing keeps を.",
    examples: [
      { jp: "バスの {中|なか}で {知|し}らない {人|ひと}に {足|あし}を ふまれました。", ro: "Basu no naka de shiranai hito ni ashi o fumaremashita.", en: "A stranger stepped on my foot on the bus." },
      { jp: "{妹|いもうと}に ケーキを {食|た}べられました。", ro: "Imōto ni kēki o taberaremashita.", en: "My little sister ate my cake." },
      { jp: "カランさんは ねこに {手|て}を かまれました。", ro: "Karan-san wa neko ni te o kamaremashita.", en: "Karan was bitten on the hand by a cat." }
    ],
    drills: [
      { type: "fill", jp: "バスの {中|なか}で {足|あし}を ＿＿。", answer: "ふまれました", options: ["ふまれました", "ふみました", "ふめました", "ふみられました"], en: "Someone stepped on my foot on the bus." },
      { type: "fill", jp: "{弟|おとうと}に {手紙|てがみ}＿＿ {読|よ}まれました。", answer: "を", options: ["を", "が", "の", "へ"], en: "My little brother read my letter." },
      { type: "fill", jp: "{妹|いもうと}に ケーキを ＿＿。", answer: "{食|た}べられました", options: ["{食|た}べられました", "{食|た}べました", "{食|た}べさせました", "{食|た}べれました"], en: "My little sister ate my cake." },
      { type: "choose", q: "How do you say 'Someone stepped on my foot'?", answer: "わたしは {足|あし}を ふまれました。", options: ["わたしは {足|あし}を ふまれました。", "わたしは {足|あし}が ふまれました。", "わたしは {足|あし}に ふみました。", "わたしを {足|あし}が ふみました。"] },
      { type: "choose", q: "What feeling does this pattern usually carry?", answer: "The speaker was bothered by it", options: ["The speaker was bothered by it", "The speaker is proud of it", "The speaker is giving advice", "The speaker is asking permission"] },
      { type: "order", tiles: ["わたしは", "{電車|でんしゃ}で", "さいふを", "とられました"], en: "I had my wallet stolen on the train." }
    ]
  },
  {
    id: "L137-3",
    lesson: 137,
    title: "N が / は + passive (things and events)",
    meaning: "Something is done, with the doer left out",
    explain: "When the doer is unknown or unimportant, the thing or event becomes the subject of a passive verb.",
    examples: [
      { jp: "この アニメは {世界|せかい}じゅうで {見|み}られて います。", ro: "Kono anime wa sekaijū de mirarete imasu.", en: "This anime is watched all over the world." },
      { jp: "{来月|らいげつ} {町|まち}で {音楽|おんがく}の イベントが ひらかれます。", ro: "Raigetsu machi de ongaku no ibento ga hirakaremasu.", en: "A music event will be held in town next month." },
      { jp: "この {建物|たてもの}は {二百年前|にひゃくねんまえ}に {建|た}てられました。", ro: "Kono tatemono wa nihyakunen mae ni tateraremashita.", en: "This building was built 200 years ago." }
    ],
    drills: [
      { type: "fill", jp: "{来週|らいしゅう}、{町|まち}で {音楽|おんがく}の イベントが ＿＿。", answer: "ひらかれます", options: ["ひらかれます", "ひらきます", "ひらけます", "ひらかせます"], en: "A music event will be held in town next week." },
      { type: "fill", jp: "この {国|くに}の お{茶|ちゃ}は {世界|せかい}じゅうに ＿＿ います。", answer: "ゆしゅつされて", options: ["ゆしゅつされて", "ゆしゅつして", "ゆしゅつしられて", "ゆしゅつさせて"], en: "This country's tea is exported all over the world." },
      { type: "fill", jp: "この {建物|たてもの}は {百年前|ひゃくねんまえ}に ＿＿。", answer: "{建|た}てられました", options: ["{建|た}てられました", "{建|た}てました", "{建|た}てれました", "{建|た}てさせました"], en: "This building was built 100 years ago." },
      { type: "choose", q: "Which is correct for 'This magazine is read by many young people'?", answer: "この ざっしは わかい {人|ひと}に よく {読|よ}まれて います。", options: ["この ざっしは わかい {人|ひと}に よく {読|よ}まれて います。", "この ざっしは わかい {人|ひと}に よく {読|よ}んで います。", "この ざっしは わかい {人|ひと}に よく {読|よ}めて います。", "この ざっしは わかい {人|ひと}に よく {読|よ}みて います。"] },
      { type: "choose", q: "When is this pattern used?", answer: "When the doer is unknown or unimportant", options: ["When the doer is unknown or unimportant", "When giving an order", "When asking for a favour", "When talking about what you want"] },
      { type: "order", tiles: ["この {歌|うた}は", "{世界|せかい}じゅうで", "{歌|うた}われて", "います"], en: "This song is sung all over the world." }
    ]
  },
  {
    id: "L137-4",
    lesson: 137,
    title: "N に よって・N から / N で つくられます",
    meaning: "Who created something, and what it is made of",
    explain: "に よって marks the creator with verbs of making or discovering, while から and で show what something is made from.",
    examples: [
      { jp: "「モナリザ」は レオナルド・ダ・ヴィンチに よって かかれました。", ro: "'Monariza' wa Reonarudo Da Vinchi ni yotte kakaremashita.", en: "The Mona Lisa was painted by Leonardo da Vinci." },
      { jp: "ひこうきは ライト{兄弟|きょうだい}に よって はつめいされました。", ro: "Hikōki wa Raito kyōdai ni yotte hatsumei saremashita.", en: "The aeroplane was invented by the Wright brothers." },
      { jp: "チーズは ミルクから {作|つく}られます。", ro: "Chīzu wa miruku kara tsukuraremasu.", en: "Cheese is made from milk." }
    ],
    drills: [
      { type: "fill", jp: "この {本|ほん}は {有名|ゆうめい}な {先生|せんせい}＿＿ {書|か}かれました。", answer: "に よって", options: ["に よって", "に いって", "まで", "ほど"], en: "This book was written by a famous professor." },
      { type: "fill", jp: "チーズは ミルク＿＿ {作|つく}られます。", answer: "から", options: ["から", "を", "が", "まで"], en: "Cheese is made from milk." },
      { type: "fill", jp: "ひこうきは ライト{兄弟|きょうだい}に よって ＿＿。", answer: "はつめいされました", options: ["はつめいされました", "はつめいしました", "はつめいできました", "はつめいしられました"], en: "The aeroplane was invented by the Wright brothers." },
      { type: "choose", q: "Which verbs usually go with に よって?", answer: "Verbs of creating or discovering", options: ["Verbs of creating or discovering", "Verbs of eating and drinking", "Verbs of going and coming", "Verbs of liking and wanting"] },
      { type: "choose", q: "Which is correct for 'Paper is made from wood'?", answer: "{紙|かみ}は {木|き}から {作|つく}られます。", options: ["{紙|かみ}は {木|き}から {作|つく}られます。", "{紙|かみ}は {木|き}に {作|つく}られます。", "{紙|かみ}は {木|き}から {作|つく}ります。", "{紙|かみ}を {木|き}から {作|つく}られます。"] },
      { type: "order", tiles: ["この {映画|えいが}は", "{有名|ゆうめい}な {人|ひと}に", "よって", "{作|つく}られました"], en: "This film was made by a famous person." }
    ]
  }
]);
window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {
  "L137-1": {
    formula: ["A は B に + passive verb"],
    points: [
      "A receives the action. B, marked with に, does it.",
      "Group 1: change the sound before ます to the あ row, add れます.",
      "Group 2: drop ます and add られます.",
      "Group 3: されます and こられます.",
      "Every passive verb then works like a Group 2 verb."
    ],
    tables: [
      {
        title: "Group 1: い row becomes あ row, then れます",
        headers: ["Before ます", "Becomes", "ます form", "Passive"],
        rows: [
          ["い", "われます", "さそいます", "さそわれます"],
          ["き", "かれます", "ききます", "きかれます"],
          ["ぎ", "がれます", "さわぎます", "さわがれます"],
          ["し", "されます", "おこします", "おこされます"],
          ["ち", "たれます", "まちます", "またれます"],
          ["に", "なれます", "しにます", "しなれます"],
          ["び", "ばれます", "よびます", "よばれます"],
          ["み", "まれます", "ふみます", "ふまれます"],
          ["り", "られます", "しかります", "しかられます"]
        ]
      },
      {
        title: "Group 2: drop ます, add られます",
        headers: ["ます form", "Passive"],
        rows: [
          ["ほめます", "ほめられます"],
          ["たべます", "たべられます"],
          ["みます", "みられます"]
        ]
      },
      {
        title: "Group 3: memorise these",
        headers: ["ます form", "Passive"],
        rows: [
          ["します", "されます"],
          ["しょうたいします", "しょうたいされます"],
          ["きます", "こられます"]
        ]
      },
      {
        title: "Active and passive",
        headers: ["Active", "Passive"],
        rows: [
          ["せんせいが わたしを ほめました。", "わたしは せんせいに ほめられました。"],
          ["ははが わたしを しかりました。", "わたしは ははに しかられました。"]
        ]
      },
      {
        title: "Potential or passive?",
        headers: ["ます form", "Potential", "Passive"],
        rows: [
          ["ききます", "きけます", "きかれます"],
          ["よびます", "よべます", "よばれます"],
          ["たべます", "たべられます", "たべられます"],
          ["きます", "こられます", "こられます"]
        ]
      }
    ],
    mistakes: [
      { bad: "しかりれました。", good: "しかられました。", why: "Group 1 changes to the あ row, then adds れます." },
      { bad: "ははが しかられました。", good: "ははに しかられました。", why: "The person doing it takes に." },
      { bad: "しられます。 (from します)", good: "されます。", why: "The passive of します is されます." }
    ],
    tip: "Group 2 and きます look the same as the potential. Only the sentence tells you which it is."
  },
  "L137-2": {
    formula: ["A は B に N を + passive verb"],
    points: [
      "Use it when your thing or body part is affected.",
      "You stay the topic. The thing keeps を.",
      "It usually means you were annoyed or hurt.",
      "English often says 'someone did X to my Y'."
    ],
    tables: [
      {
        title: "All three groups",
        headers: ["Group", "ます form", "Passive past"],
        rows: [
          ["Group 1", "ふみます", "ふまれました"],
          ["Group 1", "とります", "とられました"],
          ["Group 1", "かみます", "かまれました"],
          ["Group 1", "こわします", "こわされました"],
          ["Group 1", "よみます", "よまれました"],
          ["Group 2", "たべます", "たべられました"],
          ["Group 2", "みます", "みられました"],
          ["Group 3", "します", "されました"],
          ["Group 3", "きます", "こられました"]
        ]
      },
      {
        title: "From active to passive",
        headers: ["Active", "Passive"],
        rows: [
          ["おとうとが わたしの カメラを こわしました。", "わたしは おとうとに カメラを こわされました。"],
          ["いもうとが わたしの ケーキを たべました。", "わたしは いもうとに ケーキを たべられました。"]
        ]
      }
    ],
    mistakes: [
      { bad: "わたしの あしは ふまれました。", good: "わたしは あしを ふまれました。", why: "You are the topic. The body part keeps を." },
      { bad: "おとうとを カメラに こわされました。", good: "おとうとに カメラを こわされました。", why: "The doer takes に, and the thing takes を." }
    ],
    tip: "Say it when you want sympathy: you are the one it happened to."
  },
  "L137-3": {
    formula: ["N が / は + passive verb"],
    points: [
      "Use it for news, history and facts.",
      "The doer is left out, because it doesn't matter.",
      "Things and events can be the subject.",
      "～て います shows it is true in general, like よまれて います."
    ],
    tables: [
      {
        title: "All three groups",
        headers: ["Group", "ます form", "Passive", "Meaning"],
        rows: [
          ["Group 1", "ひらきます", "ひらかれます", "is held"],
          ["Group 1", "よみます", "よまれます", "is read"],
          ["Group 1", "うたいます", "うたわれます", "is sung"],
          ["Group 1", "おこないます", "おこなわれます", "is carried out"],
          ["Group 2", "たてます", "たてられます", "is built"],
          ["Group 2", "しらべます", "しらべられます", "is investigated"],
          ["Group 3", "ゆしゅつします", "ゆしゅつされます", "is exported"],
          ["Group 3", "はつめいします", "はつめいされます", "is invented"]
        ]
      },
      {
        title: "Time of the sentence",
        headers: ["Form", "Japanese", "Meaning"],
        rows: [
          ["Future", "パーティーが ひらかれます。", "A party will be held."],
          ["Past", "パーティーが ひらかれました。", "A party was held."],
          ["General", "よく よまれて います。", "It is widely read."]
        ]
      }
    ],
    mistakes: [
      { bad: "この ビルは ひゃくねんまえに たてました。", good: "この ビルは ひゃくねんまえに たてられました。", why: "A building can't build. It needs the passive." },
      { bad: "イベントが ひらきます。", good: "イベントが ひらかれます。", why: "An event is held by someone, so use the passive." }
    ],
    tip: "You will meet this pattern constantly in news and in guidebooks."
  },
  "L137-4": {
    formula: ["N は person に よって + passive verb", "N は material から / で + つくられます"],
    points: [
      "に よって marks the creator with verbs of making or discovering.",
      "Plain に would sound wrong with these verbs.",
      "から: the material has changed and can't be seen.",
      "で: you can still see the material."
    ],
    tables: [
      {
        title: "Verbs that use に よって",
        headers: ["Group", "ます form", "Passive", "Meaning"],
        rows: [
          ["Group 1", "かきます", "かかれます", "is written"],
          ["Group 1", "つくります", "つくられます", "is made"],
          ["Group 2", "たてます", "たてられます", "is built"],
          ["Group 3", "はつめいします", "はつめいされます", "is invented"],
          ["Group 3", "はっけんします", "はっけんされます", "is discovered"]
        ]
      },
      {
        title: "から or で?",
        headers: ["Particle", "Japanese", "Meaning"],
        rows: [
          ["から", "チーズは ミルクから つくられます。", "Cheese is made from milk."],
          ["で", "この いすは きで つくられて います。", "This chair is made of wood."]
        ]
      }
    ],
    mistakes: [
      { bad: "この ほんは ゆうめいな せんせいに かかれました。", good: "この ほんは ゆうめいな せんせいに よって かかれました。", why: "With a creator, use に よって." },
      { bad: "チーズは ミルクに つくられます。", good: "チーズは ミルクから つくられます。", why: "Materials take から or で, not に." }
    ],
    tip: "If you could still spot the wood in the finished thing, use で."
  }
});
window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  137: {
    can: ["Say what was done to you", "Complain about something that happened to your things", "Talk about facts, events and history", "Say who created something and what it is made of"],
    first: ["ほめます", "しかります", "さそいます", "しょうたいします", "ふみます", "こわします", "よごします", "おこないます", "ゆしゅつします", "はつめいします", "はっけんします", "おこします"],
    tip: "Learn the passive and the potential side by side, because Group 2 and きます look the same in both."
  }
});
