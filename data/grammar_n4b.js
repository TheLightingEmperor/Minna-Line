// Grammar data N4 part B: Minna no Nihongo II, Lessons 38–50 (internal lessons 138–150).
// All sentences and explanations are original to this project.
window.GRAMMAR = (window.GRAMMAR || []).concat([

  // ───────────────────────── LESSON 38 ─────────────────────────
  {
    id: "L138-1",
    lesson: 138,
    title: "V plain + のは + adjective",
    meaning: "Doing X is ~",
    explain: "の after a plain verb turns the action into a noun, so ～のは makes that action the topic and an adjective then says what it is like.",
    examples: [
      { jp: "{毎朝|まいあさ} {川|かわ}の そばを {走|はし}るのは {気持|きも}ちが いいです。", ro: "Maiasa kawa no soba o hashiru no wa kimochi ga ii desu.", en: "Running along the river every morning feels good." },
      { jp: "{一人|ひとり}で {旅行|りょこう}するのは {楽|たの}しいです。", ro: "Hitori de ryokō suru no wa tanoshii desu.", en: "Travelling alone is fun." },
      { jp: "{駅|えき}で モチと {話|はな}すのは おもしろいです。", ro: "Eki de Mochi to hanasu no wa omoshiroi desu.", en: "Talking with Mochi at the station is interesting." }
    ],
    drills: [
      { type: "fill", jp: "{漢字|かんじ}を おぼえる＿＿ たいへんです。", answer: "のは", options: ["のは", "のを", "のへ", "のと"], en: "Memorising kanji is hard work." },
      { type: "fill", jp: "{海|うみ}で ＿＿のは {楽|たの}しいです。", answer: "およぐ", options: ["およぐ", "およぎます", "およいで", "およぎ"], en: "Swimming in the sea is fun." },
      { type: "choose", q: "Which sentence means 'Getting up early is hard'?", answer: "{朝|あさ} {早|はや}く {起|お}きるのは たいへんです。", options: ["{朝|あさ} {早|はや}く {起|お}きるのは たいへんです。", "{朝|あさ} {早|はや}く {起|お}きますのは たいへんです。", "{朝|あさ} {早|はや}く {起|お}きるは たいへんです。", "{朝|あさ} {早|はや}く {起|お}きるのを たいへんです。"] },
      { type: "choose", q: "In 「うたを うたうのは たのしいです」, what does の do?", answer: "It turns the verb phrase into a noun", options: ["It turns the verb phrase into a noun", "It shows who owns the song", "It marks a place", "It makes the sentence a question"] },
      { type: "order", tiles: ["{本|ほん}を", "{読|よ}むのは", "{楽|たの}しいです"], en: "Reading books is fun." },
      { type: "order", tiles: ["{外国語|がいこくご}を", "{話|はな}すのは", "むずかしいです"], en: "Speaking a foreign language is difficult." }
    ]
  },
  {
    id: "L138-2",
    lesson: 138,
    title: "V plain + のが + すき / じょうず / はやい",
    meaning: "Liking, or being good or quick at, doing X",
    explain: "Use ～のが before words of liking, skill and speed, such as すき, きらい, じょうず, へた, はやい and おそい.",
    examples: [
      { jp: "モチは {電車|でんしゃ}を {見|み}るのが すきです。", ro: "Mochi wa densha o miru no ga suki desu.", en: "Mochi likes watching trains." },
      { jp: "カランさんは {料理|りょうり}を {作|つく}るのが じょうずです。", ro: "Karan-san wa ryōri o tsukuru no ga jōzu desu.", en: "Karan is good at cooking." },
      { jp: "{弟|おとうと}は {食|た}べるのが はやいです。", ro: "Otōto wa taberu no ga hayai desu.", en: "My younger brother eats fast." }
    ],
    drills: [
      { type: "fill", jp: "{私|わたし}は {写真|しゃしん}を とる＿＿ すきです。", answer: "のが", options: ["のが", "のを", "のに", "のへ"], en: "I like taking photos." },
      { type: "fill", jp: "{私|わたし}は {歌|うた}を ＿＿のが へたです。", answer: "{歌|うた}う", options: ["{歌|うた}う", "{歌|うた}います", "{歌|うた}って", "{歌|うた}"], en: "I am bad at singing." },
      { type: "fill", jp: "モチは ねずみを みつけるのが ＿＿です。", answer: "じょうず", options: ["じょうず", "へた", "きらい", "おそい"], en: "Mochi is good at finding mice." },
      { type: "choose", q: "Which sentence means 'I hate cleaning my room'?", answer: "へやを そうじするのが きらいです。", options: ["へやを そうじするのが きらいです。", "へやを そうじするのを きらいです。", "へやを そうじするが きらいです。", "へやを そうじしますのが きらいです。"] },
      { type: "order", tiles: ["{妹|いもうと}は", "{走|はし}るのが", "はやいです"], en: "My younger sister runs fast." },
      { type: "order", tiles: ["{私|わたし}は", "{音楽|おんがく}を", "{聞|き}くのが", "すきです"], en: "I like listening to music." }
    ]
  },
  {
    id: "L138-3",
    lesson: 138,
    title: "V plain + のを わすれました",
    meaning: "I forgot to do X",
    explain: "Put a plain verb before のを わすれました to say you forgot to do something.",
    examples: [
      { jp: "{電気|でんき}を けすのを わすれました。", ro: "Denki o kesu no o wasuremashita.", en: "I forgot to turn off the light." },
      { jp: "くすりを {飲|の}むのを わすれました。", ro: "Kusuri o nomu no o wasuremashita.", en: "I forgot to take my medicine." },
      { jp: "しゅくだいを {持|も}って {来|く}るのを わすれました。", ro: "Shukudai o motte kuru no o wasuremashita.", en: "I forgot to bring my homework." }
    ],
    drills: [
      { type: "fill", jp: "{手紙|てがみ}を {出|だ}す＿＿ わすれました。", answer: "のを", options: ["のを", "のが", "のと", "のへ"], en: "I forgot to post the letter." },
      { type: "fill", jp: "かさを ＿＿のを わすれました。", answer: "{持|も}って {来|く}る", options: ["{持|も}って {来|く}る", "{持|も}って {来|き}ます", "{持|も}って {来|き}て", "{持|も}って {来|き}"], en: "I forgot to bring an umbrella." },
      { type: "choose", q: "What does 「かぎを かけるのを わすれました」 mean?", answer: "I forgot to lock it.", options: ["I forgot to lock it.", "I forgot my key.", "I lost my key.", "I locked it and went out."] },
      { type: "choose", q: "You left your key at home. Which sentence is correct?", answer: "かぎを わすれました。", options: ["かぎを わすれました。", "かぎが わすれました。", "かぎの わすれました。", "かぎに わすれました。"] },
      { type: "order", tiles: ["メールを", "{送|おく}るのを", "わすれました"], en: "I forgot to send the email." },
      { type: "order", tiles: ["{今朝|けさ}", "{朝|あさ}ごはんを", "{食|た}べるのを", "わすれました"], en: "I forgot to eat breakfast this morning." }
    ]
  },
  {
    id: "L138-4",
    lesson: 138,
    title: "Plain + のを しって いますか",
    meaning: "Do you know that ~?",
    explain: "Use ～のを しって いますか to ask whether someone knows a piece of news, and answer しりませんでした if it is new to you.",
    examples: [
      { jp: "やまださんが {来月|らいげつ} {国|くに}へ {帰|かえ}るのを {知|し}って いますか。", ro: "Yamada-san ga raigetsu kuni e kaeru no o shitte imasu ka.", en: "Do you know that Yamada is going back to his country next month?" },
      { jp: "{駅|えき}の {前|まえ}に {新|あたら}しい {店|みせ}が できたのを {知|し}って いますか。", ro: "Eki no mae ni atarashii mise ga dekita no o shitte imasu ka.", en: "Do you know that a new shop has opened in front of the station?" },
      { jp: "マリアさんが {入院|にゅういん}したのを {知|し}りませんでした。", ro: "Maria-san ga nyūin shita no o shirimasen deshita.", en: "I didn't know that Maria had gone into hospital." }
    ],
    drills: [
      { type: "fill", jp: "モチが {駅長|えきちょう}に なった＿＿ {知|し}って いますか。", answer: "のを", options: ["のを", "のが", "のへ", "のと"], en: "Do you know that Mochi became the stationmaster?" },
      { type: "fill", jp: "A: {明日|あした} {試験|しけん}が あります。 B: えっ、＿＿。", answer: "{知|し}りませんでした", options: ["{知|し}りませんでした", "{知|し}っていました", "{知|し}って いません", "{知|し}りました"], en: "A: There's a test tomorrow. B: What? I didn't know that." },
      { type: "fill", jp: "{明日|あした}が {休|やす}み＿＿ {知|し}って いますか。", answer: "なのを", options: ["なのを", "のを", "だのを", "がのを"], en: "Do you know that tomorrow is a day off?" },
      { type: "choose", q: "Which sentence means 'Do you know that Tanaka moved house?'", answer: "たなかさんが ひっこしたのを {知|し}って いますか。", options: ["たなかさんが ひっこしたのを {知|し}って いますか。", "たなかさんが ひっこしましたのを {知|し}って いますか。", "たなかさんが ひっこしたのが {知|し}って いますか。", "たなかさんを ひっこしたのを {知|し}って いますか。"] },
      { type: "order", tiles: ["カランさんが", "{大学|だいがく}に", "{入|はい}ったのを", "{知|し}って いますか"], en: "Do you know that Karan got into university?" },
      { type: "order", tiles: ["{先生|せんせい}が", "{病気|びょうき}なのを", "{知|し}りませんでした"], en: "I didn't know that the teacher was ill." }
    ]
  },
  {
    id: "L138-5",
    lesson: 138,
    title: "Plain + のは + N です",
    meaning: "It is N that ~ (putting the key fact last)",
    explain: "～のは + N です moves the most important fact to the end of the sentence, so the listener's attention lands on N.",
    examples: [
      { jp: "カランさんが {日本|にほん}へ {来|き}たのは {去年|きょねん}の {春|はる}です。", ro: "Karan-san ga Nihon e kita no wa kyonen no haru desu.", en: "It was last spring that Karan came to Japan." },
      { jp: "モチが いちばん すきなのは {魚|さかな}です。", ro: "Mochi ga ichiban suki na no wa sakana desu.", en: "What Mochi likes best is fish." },
      { jp: "{先週|せんしゅう} {休|やす}んだのは たなかさんです。", ro: "Senshū yasunda no wa Tanaka-san desu.", en: "It was Tanaka who was off last week." }
    ],
    drills: [
      { type: "fill", jp: "モチが {生|う}まれた＿＿ この {駅|えき}です。", answer: "のは", options: ["のは", "のを", "のに", "のへ"], en: "It was at this station that Mochi was born." },
      { type: "fill", jp: "モチ＿＿ いちばん {楽|たの}しいのは {電車|でんしゃ}を {見|み}る {時|とき}です。", answer: "が", options: ["が", "を", "で", "へ"], en: "The time Mochi enjoys most is when watching trains." },
      { type: "choose", q: "Which sentence means 'The person who made this cake is Maria'?", answer: "この ケーキを {作|つく}ったのは マリアさんです。", options: ["この ケーキを {作|つく}ったのは マリアさんです。", "マリアさんは この ケーキを {作|つく}るのが すきです。", "この ケーキを {作|つく}ったのを マリアさんです。", "この ケーキは マリアさんに {作|つく}ったのです。"] },
      { type: "choose", q: "Inside the part before ～のは, which particle marks the doer?", answer: "が", options: ["が", "は", "を", "に"] },
      { type: "order", tiles: ["{私|わたし}が", "{買|か}ったのは", "この", "{本|ほん}です"], en: "What I bought is this book." },
      { type: "order", tiles: ["マリアさんに", "{会|あ}ったのは", "{去年|きょねん}の", "{夏|なつ}です"], en: "It was last summer that I met Maria." }
    ]
  },

  // ───────────────────────── LESSON 39 ─────────────────────────
  {
    id: "L139-1",
    lesson: 139,
    title: "～て / ～で (reason)",
    meaning: "Because of X, a feeling or a result follows",
    explain: "The て-form can give a cause when the second half is a feeling or a situation nobody controls, never a request or plan.",
    examples: [
      { jp: "{友|とも}だちに {会|あ}えて、うれしかったです。", ro: "Tomodachi ni aete, ureshikatta desu.", en: "I was happy to be able to see my friend." },
      { jp: "{問題|もんだい}が むずかしくて、わかりませんでした。", ro: "Mondai ga muzukashikute, wakarimasen deshita.", en: "The question was hard, so I couldn't work it out." },
      { jp: "モチが {来|こ}なくて、しんぱいしました。", ro: "Mochi ga konakute, shinpai shimashita.", en: "Mochi didn't come, so I was worried." }
    ],
    drills: [
      { type: "fill", jp: "{先生|せんせい}の {話|はなし}を ＿＿、{安心|あんしん}しました。", answer: "{聞|き}いて", options: ["{聞|き}いて", "{聞|き}く", "{聞|き}きます", "{聞|き}いた"], en: "I felt relieved after hearing what the teacher said." },
      { type: "fill", jp: "{漢字|かんじ}が ＿＿、こまりました。", answer: "{読|よ}めなくて", options: ["{読|よ}めなくて", "{読|よ}めて", "{読|よ}めない", "{読|よ}めません"], en: "I couldn't read the kanji, so I was in trouble." },
      { type: "fill", jp: "{字|じ}が ＿＿、{読|よ}めません。", answer: "{小|ちい}さくて", options: ["{小|ちい}さくて", "{小|ちい}さいて", "{小|ちい}さで", "{小|ちい}さいで"], en: "The writing is too small to read." },
      { type: "fill", jp: "せつめいが ＿＿、わかりませんでした。", answer: "ふくざつで", options: ["ふくざつで", "ふくざつくて", "ふくざつなて", "ふくざつだて"], en: "The explanation was complicated, so I didn't understand it." },
      { type: "choose", q: "Which sentence is correct?", answer: "あつくて、ねむれませんでした。", options: ["あつくて、ねむれませんでした。", "あつくて、まどを {開|あ}けて ください。", "あつくて、まどを {開|あ}けましょう。", "あつくて、まどを {開|あ}けたいです。"] },
      { type: "order", tiles: ["{手紙|てがみ}を", "{読|よ}んで", "{安心|あんしん}しました"], en: "I read the letter and felt relieved." }
    ]
  },
  {
    id: "L139-2",
    lesson: 139,
    title: "N で (cause)",
    meaning: "Because of an event, such as a storm or illness",
    explain: "で after an event noun such as じしん, たいふう, じこ or びょうき gives the cause of what happened.",
    examples: [
      { jp: "{台風|たいふう}で {電車|でんしゃ}が {止|と}まりました。", ro: "Taifū de densha ga tomarimashita.", en: "The trains stopped because of the typhoon." },
      { jp: "モチは かぜで {今日|きょう}の {仕事|しごと}を {休|やす}みました。", ro: "Mochi wa kaze de kyō no shigoto o yasumimashita.", en: "Mochi took today off work because of a cold." },
      { jp: "{火事|かじ}で {古|ふる}い {建物|たてもの}が なくなりました。", ro: "Kaji de furui tatemono ga nakunarimashita.", en: "The old building was lost in the fire." }
    ],
    drills: [
      { type: "fill", jp: "じこ＿＿ バスが おくれました。", answer: "で", options: ["で", "に", "を", "へ"], en: "The bus was late because of an accident." },
      { type: "fill", jp: "＿＿で ひこうきが とびませんでした。", answer: "{台風|たいふう}", options: ["{台風|たいふう}", "ペン", "くつ", "ぼうし"], en: "The planes didn't fly because of the typhoon." },
      { type: "fill", jp: "{病気|びょうき}＿＿ {旅行|りょこう}に {行|い}けませんでした。", answer: "で", options: ["で", "を", "に", "と"], en: "I couldn't go on the trip because of illness." },
      { type: "choose", q: "Which word can't take で to give a cause?", answer: "{先生|せんせい}", options: ["{先生|せんせい}", "じしん", "かぜ", "{台風|たいふう}"] },
      { type: "choose", q: "Which sentence is correct?", answer: "ゆきで {電車|でんしゃ}が おくれました。", options: ["ゆきで {電車|でんしゃ}が おくれました。", "ゆきで {出|で}かけないで ください。", "ゆきで {家|いえ}に いましょう。", "ゆきで {早|はや}く {帰|かえ}りたいです。"] },
      { type: "order", tiles: ["ゆきで", "バスが", "おくれました"], en: "The bus was late because of the snow." }
    ]
  },
  {
    id: "L139-3",
    lesson: 139,
    title: "Plain + ので",
    meaning: "Because ~ (soft, polite reason)",
    explain: "～ので gives a reason gently and politely, so it suits excuses and requests better than ～から.",
    examples: [
      { jp: "{明日|あした}は {試験|しけん}が あるので、{今夜|こんや}は {出|で}かけません。", ro: "Ashita wa shiken ga aru node, kon'ya wa dekakemasen.", en: "I have an exam tomorrow, so I won't go out tonight." },
      { jp: "おなかが いたいので、{早|はや}く {帰|かえ}っても いいですか。", ro: "Onaka ga itai node, hayaku kaette mo ii desu ka.", en: "My stomach hurts, so may I go home early?" },
      { jp: "この {店|みせ}は {有名|ゆうめい}なので、いつも {人|ひと}が {多|おお}いです。", ro: "Kono mise wa yūmei na node, itsumo hito ga ōi desu.", en: "This shop is famous, so it is always crowded." }
    ],
    drills: [
      { type: "fill", jp: "{今日|きょう}は ひま＿＿、{映画|えいが}を {見|み}に {行|い}きます。", answer: "なので", options: ["なので", "ので", "だので", "でので"], en: "I'm free today, so I'm going to see a film." },
      { type: "fill", jp: "{今日|きょう}は {日曜日|にちようび}＿＿、{銀行|ぎんこう}は {休|やす}みです。", answer: "なので", options: ["なので", "ので", "だので", "のので"], en: "It's Sunday today, so the bank is closed." },
      { type: "fill", jp: "あつい＿＿、まどを {開|あ}けても いいですか。", answer: "ので", options: ["ので", "のに", "のを", "のは"], en: "It's hot, so may I open the window?" },
      { type: "choose", q: "Which one is correct for 'because it is quiet'?", answer: "しずかなので", options: ["しずかなので", "しずかので", "しずかだので", "しずかいので"] },
      { type: "order", tiles: ["{時間|じかん}が", "ないので", "タクシーで", "{行|い}きます"], en: "I don't have time, so I'll go by taxi." },
      { type: "order", tiles: ["かぜを", "ひいたので", "{早|はや}く", "{帰|かえ}ります"], en: "I've caught a cold, so I'm going home early." }
    ]
  },

  // ───────────────────────── LESSON 40 ─────────────────────────
  {
    id: "L140-1",
    lesson: 140,
    title: "Question word + plain + か",
    meaning: "Putting a question inside a sentence",
    explain: "A question with a question word can sit inside a longer sentence: use the plain form + か and follow it with a verb like しりません or おしえて ください.",
    examples: [
      { jp: "つぎの {電車|でんしゃ}が {何時|なんじ}に {来|く}るか、モチに {聞|き}いて ください。", ro: "Tsugi no densha ga nanji ni kuru ka, Mochi ni kiite kudasai.", en: "Please ask Mochi what time the next train comes." },
      { jp: "パーティーに だれが {来|く}るか、まだ わかりません。", ro: "Pātī ni dare ga kuru ka, mada wakarimasen.", en: "I don't know yet who is coming to the party." },
      { jp: "マリアさんの たんじょうびが いつか、{知|し}って いますか。", ro: "Maria-san no tanjōbi ga itsu ka, shitte imasu ka.", en: "Do you know when Maria's birthday is?" }
    ],
    drills: [
      { type: "fill", jp: "どの {店|みせ}が おいしい＿＿、{教|おし}えて ください。", answer: "か", options: ["か", "が", "を", "と"], en: "Please tell me which shop is good." },
      { type: "fill", jp: "{駅|えき}が ＿＿か、{地図|ちず}で たしかめて ください。", answer: "どこ", options: ["どこ", "いつ", "だれ", "いくら"], en: "Please check on the map where the station is." },
      { type: "fill", jp: "{試験|しけん}は {何曜日|なんようび}＿＿、{教|おし}えて ください。", answer: "か", options: ["か", "なか", "のか", "がか"], en: "Please tell me what day the exam is." },
      { type: "choose", q: "Which sentence means 'I can't remember where I put my wallet'?", answer: "さいふを どこに おいたか、おぼえて いません。", options: ["さいふを どこに おいたか、おぼえて いません。", "さいふを どこに おきましたか おぼえて いませんか。", "さいふを どこに おいたを、おぼえて いません。", "さいふを どこに おいたか どうか、おぼえて いません。"] },
      { type: "order", tiles: ["プレゼントに", "{何|なに}を", "{買|か}うか", "{考|かんが}えて います"], en: "I'm thinking about what to buy as a present." },
      { type: "order", tiles: ["いくら", "かかるか", "{教|おし}えて", "ください"], en: "Please tell me how much it costs." }
    ]
  },
  {
    id: "L140-2",
    lesson: 140,
    title: "Plain + か どうか",
    meaning: "Whether or not ~",
    explain: "For a yes-no question inside a sentence, with no question word, use the plain form + か どうか.",
    examples: [
      { jp: "マリアさんが {来|く}るか どうか、わかりません。", ro: "Maria-san ga kuru ka dō ka, wakarimasen.", en: "I don't know whether Maria is coming." },
      { jp: "この {魚|さかな}が {新|あたら}しいか どうか、{店|みせ}の {人|ひと}に {聞|き}きました。", ro: "Kono sakana ga atarashii ka dō ka, mise no hito ni kikimashita.", en: "I asked the shop assistant whether this fish is fresh." },
      { jp: "{明日|あした}が {休|やす}みか どうか、{知|し}って いますか。", ro: "Ashita ga yasumi ka dō ka, shitte imasu ka.", en: "Do you know whether tomorrow is a day off?" }
    ],
    drills: [
      { type: "fill", jp: "{明日|あした}の {天気|てんき}が いい＿＿、わかりません。", answer: "か どうか", options: ["か どうか", "か どこか", "と どうか", "が どうか"], en: "I don't know whether the weather will be good tomorrow." },
      { type: "fill", jp: "たなかさんが ＿＿か どうか、{電話|でんわ}で {聞|き}いて ください。", answer: "{来|く}る", options: ["{来|く}る", "{来|き}ます", "{来|き}て", "{来|き}"], en: "Please phone and ask whether Tanaka is coming." },
      { type: "fill", jp: "その {店|みせ}が しずか＿＿ どうか、{知|し}りません。", answer: "か", options: ["か", "な", "で", "に"], en: "I don't know whether that shop is quiet." },
      { type: "choose", q: "When do you use か どうか instead of just か?", answer: "With a yes-no question", options: ["With a yes-no question", "With どこ or だれ", "When giving a reason", "When inviting someone"] },
      { type: "choose", q: "Which sentence is correct?", answer: "だれが {来|く}るか、わかりません。", options: ["だれが {来|く}るか、わかりません。", "だれが {来|く}るか どうか、わかりません。", "だれが {来|き}ますか どうか、わかりません。", "だれが {来|く}るが、わかりません。"] },
      { type: "order", tiles: ["モチが", "{元気|げんき}か", "どうか", "{聞|き}いて", "みます"], en: "I'll try asking whether Mochi is well." }
    ]
  },
  {
    id: "L140-3",
    lesson: 140,
    title: "V て + みます",
    meaning: "Try doing X and see what happens",
    explain: "V て + みます means trying something out to see how it goes, and みます is written in kana here.",
    examples: [
      { jp: "この {黒|くろ}い ぼうしを かぶって みても いいですか。", ro: "Kono kuroi bōshi o kabutte mite mo ii desu ka.", en: "May I try on this black hat?" },
      { jp: "{駅前|えきまえ}の {新|あたら}しい {店|みせ}の カレーを {食|た}べて みました。", ro: "Ekimae no atarashii mise no karē o tabete mimashita.", en: "I tried the curry at the new shop in front of the station." },
      { jp: "わからない ことばは {先生|せんせい}に {聞|き}いて みます。", ro: "Wakaranai kotoba wa sensei ni kiite mimasu.", en: "I'll try asking the teacher about words I don't understand." }
    ],
    drills: [
      { type: "fill", jp: "{日本|にほん}の {歌|うた}を ＿＿ みます。", answer: "{歌|うた}って", options: ["{歌|うた}って", "{歌|うた}い", "{歌|うた}う", "{歌|うた}った"], en: "I'll try singing a Japanese song." },
      { type: "fill", jp: "この {服|ふく}を {着|き}て ＿＿ いいですか。", answer: "みても", options: ["みても", "みるも", "みては", "みるは"], en: "May I try on these clothes?" },
      { type: "fill", jp: "おいしいですよ。{一度|いちど} {食|た}べて ＿＿。", answer: "みて ください", options: ["みて ください", "みて いません", "みませんでした", "いました"], en: "It's delicious. Please try eating it once." },
      { type: "choose", q: "How do you say 'I'd like to try going to Hokkaido'?", answer: "ほっかいどうへ {行|い}って みたいです。", options: ["ほっかいどうへ {行|い}って みたいです。", "ほっかいどうへ {行|い}き みたいです。", "ほっかいどうへ {行|い}くて みたいです。", "ほっかいどうへ {行|い}って みます たいです。"] },
      { type: "order", tiles: ["もう", "{一度|いちど}", "{考|かんが}えて", "みます"], en: "I'll try thinking about it once more." },
      { type: "order", tiles: ["{漢字|かんじ}で", "{名前|なまえ}を", "{書|か}いて", "みました"], en: "I tried writing my name in kanji." }
    ]
  },
  {
    id: "L140-4",
    lesson: 140,
    title: "い-adjective + さ",
    meaning: "Turning an adjective into a noun: height, length, weight",
    explain: "Replace the final い of an い-adjective with さ to make a noun of measure, such as たかい → たかさ (height).",
    examples: [
      { jp: "この {川|かわ}の {長|なが}さは どのくらいですか。", ro: "Kono kawa no nagasa wa dono kurai desu ka.", en: "How long is this river?" },
      { jp: "へやの {広|ひろ}さを しらべました。", ro: "Heya no hirosa o shirabemashita.", en: "I checked the size of the room." },
      { jp: "にもつの {重|おも}さは {何|なん}キロですか。", ro: "Nimotsu no omosa wa nan-kiro desu ka.", en: "How many kilos does the luggage weigh?" }
    ],
    drills: [
      { type: "fill", jp: "この {山|やま}の ＿＿は どのくらいですか。", answer: "{高|たか}さ", options: ["{高|たか}さ", "{高|たか}い", "{高|たか}く", "{高|たか}いさ"], en: "How high is this mountain?" },
      { type: "fill", jp: "この くつの ＿＿を {教|おし}えて ください。", answer: "{大|おお}きさ", options: ["{大|おお}きさ", "{大|おお}きいさ", "{大|おお}さ", "{大|おお}き"], en: "Please tell me the size of these shoes." },
      { type: "choose", q: "What is the noun from おもい?", answer: "おもさ", options: ["おもさ", "おもいさ", "おもくさ", "おもみさ"] },
      { type: "choose", q: "What is the noun from いい?", answer: "よさ", options: ["よさ", "いいさ", "いさ", "よいいさ"] },
      { type: "order", tiles: ["この", "{道|みち}の", "{長|なが}さは", "どのくらいですか"], en: "How long is this road?" },
      { type: "order", tiles: ["{川|かわ}の", "ふかさを", "はかりました"], en: "I measured the depth of the river." }
    ]
  },

  // ───────────────────────── LESSON 41 ─────────────────────────
  {
    id: "L141-1",
    lesson: 141,
    title: "いただきます / くださいます",
    meaning: "Receiving from, or being given by, someone above you",
    explain: "いただきます is the humble form of もらいます and くださいます is the respectful form of くれます, used when the giver is above you.",
    examples: [
      { jp: "{私|わたし}は さとう{先生|せんせい}に じしょを いただきました。", ro: "Watashi wa Satō-sensei ni jisho o itadakimashita.", en: "I received a dictionary from Professor Sato." },
      { jp: "さとう{先生|せんせい}が {私|わたし}に じしょを くださいました。", ro: "Satō-sensei ga watashi ni jisho o kudasaimashita.", en: "Professor Sato gave me a dictionary." },
      { jp: "{社長|しゃちょう}は モチに {魚|さかな}を くださいました。", ro: "Shachō wa Mochi ni sakana o kudasaimashita.", en: "The company president gave Mochi a fish." }
    ],
    drills: [
      { type: "fill", jp: "{私|わたし}は {社長|しゃちょう}＿＿ {時計|とけい}を いただきました。", answer: "に", options: ["に", "を", "へ", "で"], en: "I received a watch from the company president." },
      { type: "fill", jp: "{先生|せんせい}が {私|わたし}に {本|ほん}を ＿＿。", answer: "くださいました", options: ["くださいました", "いただきました", "やりました", "さしあげました"], en: "The teacher gave me a book." },
      { type: "fill", jp: "{私|わたし}は {先生|せんせい}に {本|ほん}を ＿＿。", answer: "いただきました", options: ["いただきました", "くださいました", "やりました", "さしあげました"], en: "I received a book from the teacher." },
      { type: "choose", q: "What is the respectful form of くれます?", answer: "くださいます", options: ["くださいます", "いただきます", "さしあげます", "やります"] },
      { type: "choose", q: "Which is the correct ます form of くださる?", answer: "くださいます", options: ["くださいます", "くださります", "くださます", "くだします"] },
      { type: "order", tiles: ["{私|わたし}は", "{社長|しゃちょう}に", "お{茶|ちゃ}を", "いただきました"], en: "I was given tea by the company president." }
    ]
  },
  {
    id: "L141-2",
    lesson: 141,
    title: "N に N を やります",
    meaning: "Giving to someone younger, an animal or a plant",
    explain: "やります means give when the receiver is your younger family member, an animal or a plant, though many people now prefer あげます.",
    examples: [
      { jp: "{私|わたし}は {毎朝|まいあさ} モチに えさを やります。", ro: "Watashi wa maiasa Mochi ni esa o yarimasu.", en: "I feed Mochi every morning." },
      { jp: "{弟|おとうと}に {古|ふる}い {自転車|じてんしゃ}を やりました。", ro: "Otōto ni furui jitensha o yarimashita.", en: "I gave my old bicycle to my younger brother." },
      { jp: "{花|はな}に {水|みず}を やるのを わすれました。", ro: "Hana ni mizu o yaru no o wasuremashita.", en: "I forgot to water the flowers." }
    ],
    drills: [
      { type: "fill", jp: "{私|わたし}は {犬|いぬ}に {肉|にく}を ＿＿。", answer: "やりました", options: ["やりました", "くださいました", "いただきました", "さしあげました"], en: "I gave the dog some meat." },
      { type: "fill", jp: "{毎日|まいにち} {花|はな}＿＿ {水|みず}を やります。", answer: "に", options: ["に", "を", "が", "で"], en: "I water the flowers every day." },
      { type: "fill", jp: "むすこに おもちゃを ＿＿。", answer: "やりました", options: ["やりました", "くれました", "もらいました", "いただきました"], en: "I gave my son a toy." },
      { type: "choose", q: "Who can you NOT use やります with?", answer: "Your teacher", options: ["Your teacher", "Your younger sister", "Your dog", "Your garden plants"] },
      { type: "choose", q: "Which sentence is correct?", answer: "{社長|しゃちょう}に プレゼントを さしあげました。", options: ["{社長|しゃちょう}に プレゼントを さしあげました。", "{社長|しゃちょう}に プレゼントを やりました。", "{社長|しゃちょう}に プレゼントを くれました。", "{社長|しゃちょう}に プレゼントを くださいました。"] },
      { type: "order", tiles: ["{妹|いもうと}に", "{古|ふる}い", "かばんを", "やりました"], en: "I gave my old bag to my younger sister." }
    ]
  },
  {
    id: "L141-3",
    lesson: 141,
    title: "V て + いただきます",
    meaning: "Someone above me kindly did X for me",
    explain: "V て + いただきます is the humble form of ～て もらいます, and the person you are thankful to takes に.",
    examples: [
      { jp: "{私|わたし}は やまださんに {駅|えき}まで {送|おく}って いただきました。", ro: "Watashi wa Yamada-san ni eki made okutte itadakimashita.", en: "Yamada kindly took me to the station." },
      { jp: "{社長|しゃちょう}に {写真|しゃしん}を とって いただきました。", ro: "Shachō ni shashin o totte itadakimashita.", en: "The company president kindly took a photo for me." },
      { jp: "{先生|せんせい}に {漢字|かんじ}の {読|よ}み{方|かた}を {教|おし}えて いただきました。", ro: "Sensei ni kanji no yomikata o oshiete itadakimashita.", en: "The teacher kindly taught me how to read the kanji." }
    ],
    drills: [
      { type: "fill", jp: "{私|わたし}は {先生|せんせい}＿＿ {作文|さくぶん}を なおして いただきました。", answer: "に", options: ["に", "が", "を", "で"], en: "My teacher kindly corrected my essay." },
      { type: "fill", jp: "{社長|しゃちょう}に {車|くるま}で {送|おく}って ＿＿。", answer: "いただきました", options: ["いただきました", "くださいました", "やりました", "さしあげました"], en: "The company president kindly drove me home." },
      { type: "fill", jp: "やまださんに {英語|えいご}を ＿＿ いただきました。", answer: "{教|おし}えて", options: ["{教|おし}えて", "{教|おし}える", "{教|おし}え", "{教|おし}えた"], en: "Yamada kindly taught me English." },
      { type: "choose", q: "In 「やまださんに おしえて いただきました」, who did the teaching?", answer: "Yamada", options: ["Yamada", "I did", "Someone else", "Nobody yet"] },
      { type: "choose", q: "What is ～て いただきます the humble form of?", answer: "～て もらいます", options: ["～て もらいます", "～て くれます", "～て あげます", "～て やります"] },
      { type: "order", tiles: ["{私|わたし}は", "{先生|せんせい}に", "{本|ほん}を", "{貸|か}して", "いただきました"], en: "My teacher kindly lent me a book." }
    ]
  },
  {
    id: "L141-4",
    lesson: 141,
    title: "V て + くださいます / くださいませんか",
    meaning: "Someone above me does X for me / Would you kindly do X?",
    explain: "V て + くださいます is the respectful form of ～て くれます, and ～て くださいませんか makes a polite request.",
    examples: [
      { jp: "さとう{先生|せんせい}が {私|わたし}の {作文|さくぶん}を {読|よ}んで くださいました。", ro: "Satō-sensei ga watashi no sakubun o yonde kudasaimashita.", en: "Professor Sato kindly read my essay." },
      { jp: "{駅|えき}の {人|ひと}が {道|みち}を {教|おし}えて くださいました。", ro: "Eki no hito ga michi o oshiete kudasaimashita.", en: "A station worker kindly showed me the way." },
      { jp: "もう {一度|いちど} {言|い}って くださいませんか。", ro: "Mō ichido itte kudasaimasen ka.", en: "Could you please say that once more?" }
    ],
    drills: [
      { type: "fill", jp: "{先生|せんせい}が {私|わたし}に {本|ほん}を {貸|か}して ＿＿。", answer: "くださいました", options: ["くださいました", "いただきました", "やりました", "さしあげました"], en: "The teacher kindly lent me a book." },
      { type: "fill", jp: "すみませんが、{写真|しゃしん}を とって ＿＿。", answer: "くださいませんか", options: ["くださいませんか", "いただきましたか", "やりませんか", "さしあげませんか"], en: "Excuse me, could you take a photo for me?" },
      { type: "fill", jp: "{社長|しゃちょう}＿＿ {私|わたし}を {駅|えき}まで {送|おく}って くださいました。", answer: "が", options: ["が", "に", "を", "で"], en: "The company president kindly took me to the station." },
      { type: "choose", q: "Which is the most polite way to ask someone to wait?", answer: "{待|ま}って くださいませんか。", options: ["{待|ま}って くださいませんか。", "{待|ま}って。", "{待|ま}って ください。", "{待|ま}ちなさい。"] },
      { type: "choose", q: "What is ～て くださいます the respectful form of?", answer: "～て くれます", options: ["～て くれます", "～て もらいます", "～て あげます", "～て やります"] },
      { type: "order", tiles: ["{先生|せんせい}が", "{漢字|かんじ}を", "{教|おし}えて", "くださいました"], en: "The teacher kindly taught me kanji." }
    ]
  },
  {
    id: "L141-5",
    lesson: 141,
    title: "V て + やります",
    meaning: "Doing X for someone younger, an animal or a plant",
    explain: "V て + やります means doing something for a younger family member or an animal, and it is too strong for anyone above you.",
    examples: [
      { jp: "{弟|おとうと}の {自転車|じてんしゃ}を なおして やりました。", ro: "Otōto no jitensha o naoshite yarimashita.", en: "I fixed my younger brother's bicycle for him." },
      { jp: "ねる {前|まえ}に {子|こ}どもに {本|ほん}を {読|よ}んで やります。", ro: "Neru mae ni kodomo ni hon o yonde yarimasu.", en: "I read to my child before bed." },
      { jp: "モチを {病院|びょういん}へ つれて {行|い}って やりました。", ro: "Mochi o byōin e tsurete itte yarimashita.", en: "I took Mochi to the vet." }
    ],
    drills: [
      { type: "fill", jp: "{妹|いもうと}に {英語|えいご}を {教|おし}えて ＿＿。", answer: "やりました", options: ["やりました", "いただきました", "くださいました", "もらいました"], en: "I taught my younger sister English." },
      { type: "fill", jp: "{犬|いぬ}に {名前|なまえ}を つけて ＿＿。", answer: "やりました", options: ["やりました", "さしあげました", "くださいました", "いただきました"], en: "I gave the dog a name." },
      { type: "fill", jp: "{子|こ}どもに えほんを ＿＿ やります。", answer: "{買|か}って", options: ["{買|か}って", "{買|か}う", "{買|か}い", "{買|か}った"], en: "I'll buy a picture book for my child." },
      { type: "choose", q: "Which sentence is correct?", answer: "{弟|おとうと}に {料理|りょうり}を {作|つく}って やりました。", options: ["{弟|おとうと}に {料理|りょうり}を {作|つく}って やりました。", "{先生|せんせい}に {料理|りょうり}を {作|つく}って やりました。", "{社長|しゃちょう}に {料理|りょうり}を {作|つく}って やりました。", "{弟|おとうと}に {料理|りょうり}を {作|つく}って くださいました。"] },
      { type: "choose", q: "You carried your teacher's bag. How do you say so politely?", answer: "にもつを お{持|も}ちしました。", options: ["にもつを お{持|も}ちしました。", "にもつを {持|も}って やりました。", "にもつを {持|も}って くださいました。", "にもつを {持|も}って いただきました。"] },
      { type: "order", tiles: ["{弟|おとうと}に", "{漢字|かんじ}を", "{教|おし}えて", "やりました"], en: "I taught my younger brother kanji." }
    ]
  },

  // ───────────────────────── LESSON 42 ─────────────────────────
  {
    id: "L142-1",
    lesson: 142,
    title: "V dictionary + ために",
    meaning: "In order to do X",
    explain: "V dictionary form + ために states a goal you are deliberately working toward, so the verb must be an action you can choose to do.",
    examples: [
      { jp: "{日本|にほん}の {大学|だいがく}に {入|はい}るために、{毎日|まいにち} {勉強|べんきょう}して います。", ro: "Nihon no daigaku ni hairu tame ni, mainichi benkyō shite imasu.", en: "I study every day to get into a Japanese university." },
      { jp: "{新|あたら}しい {車|くるま}を {買|か}うために、お{金|かね}を ためて います。", ro: "Atarashii kuruma o kau tame ni, okane o tamete imasu.", en: "I'm saving money to buy a new car." },
      { jp: "モチは {魚|さかな}を {買|か}うために、{駅|えき}で はたらいて います。", ro: "Mochi wa sakana o kau tame ni, eki de hataraite imasu.", en: "Mochi works at the station in order to buy fish." }
    ],
    drills: [
      { type: "fill", jp: "{旅行|りょこう}に {行|い}く＿＿、お{金|かね}を ためて います。", answer: "ために", options: ["ために", "ように", "ことに", "あとで"], en: "I'm saving money to go on a trip." },
      { type: "fill", jp: "{日本語|にほんご}が {話|はな}せる＿＿、{毎日|まいにち} れんしゅうして います。", answer: "ように", options: ["ように", "ために", "ことに", "あとで"], en: "I practise every day so that I can speak Japanese." },
      { type: "fill", jp: "{医者|いしゃ}に ＿＿ために、{大学|だいがく}で {勉強|べんきょう}して います。", answer: "なる", options: ["なる", "なります", "なって", "なった"], en: "I'm studying at university to become a doctor." },
      { type: "choose", q: "Which sentence means 'I work in order to buy a car'?", answer: "{車|くるま}を {買|か}うために、はたらいて います。", options: ["{車|くるま}を {買|か}うために、はたらいて います。", "{車|くるま}が {買|か}えるために、はたらいて います。", "{車|くるま}を {買|か}いますために、はたらいて います。", "{車|くるま}を {買|か}ったので、はたらいて います。"] },
      { type: "choose", q: "What kind of verb comes before ために?", answer: "A deliberate action", options: ["A deliberate action", "A potential verb", "A negative verb", "A natural change"] },
      { type: "order", tiles: ["{医者|いしゃ}に", "なるために", "がんばって", "います"], en: "I am working hard to become a doctor." }
    ]
  },
  {
    id: "L142-2",
    lesson: 142,
    title: "N の + ために",
    meaning: "For the sake of N",
    explain: "N の ために says who or what benefits, so it covers people as well as aims like health or an exam.",
    examples: [
      { jp: "{家族|かぞく}の ために、{毎日|まいにち} ごはんを {作|つく}ります。", ro: "Kazoku no tame ni, mainichi gohan o tsukurimasu.", en: "I cook every day for my family." },
      { jp: "けんこうの ために、やさいを たくさん {食|た}べて います。", ro: "Kenkō no tame ni, yasai o takusan tabete imasu.", en: "I eat a lot of vegetables for my health." },
      { jp: "モチの ために、{小|ちい}さい いすを {作|つく}りました。", ro: "Mochi no tame ni, chiisai isu o tsukurimashita.", en: "I made a small chair for Mochi." }
    ],
    drills: [
      { type: "fill", jp: "{子|こ}ども＿＿ ために、{本|ほん}を {買|か}いました。", answer: "の", options: ["の", "が", "を", "に"], en: "I bought a book for my children." },
      { type: "fill", jp: "{試験|しけん}の ＿＿、{今週|こんしゅう}は {毎日|まいにち} {勉強|べんきょう}します。", answer: "ために", options: ["ために", "ように", "ほうに", "ことに"], en: "I'll study every day this week for the exam." },
      { type: "fill", jp: "＿＿の ために、たばこを やめました。", answer: "けんこう", options: ["けんこう", "えいが", "{火事|かじ}", "じしん"], en: "I gave up smoking for my health." },
      { type: "choose", q: "What does 「かぞくの ために はたらきます」 mean?", answer: "I work for my family's sake.", options: ["I work for my family's sake.", "I work with my family.", "I work at my family's house.", "I work instead of my family."] },
      { type: "choose", q: "Which one means 'for my friend'?", answer: "{友|とも}だちの ために", options: ["{友|とも}だちの ために", "{友|とも}だちに ために", "{友|とも}だちを ために", "{友|とも}だちが ために"] },
      { type: "order", tiles: ["{友|とも}だちの", "ために", "ケーキを", "{作|つく}りました"], en: "I made a cake for my friend." }
    ]
  },
  {
    id: "L142-3",
    lesson: 142,
    title: "V dictionary + のに / N に",
    meaning: "Used for, good for, or needed for X",
    explain: "V dictionary form + のに, or a noun + に, says what something is for, and it comes before words like つかいます, べんりです, かかります and ひつようです.",
    examples: [
      { jp: "この {赤|あか}い {紙|かみ}は プレゼントを つつむのに {使|つか}います。", ro: "Kono akai kami wa purezento o tsutsumu no ni tsukaimasu.", en: "We use this red paper for wrapping presents." },
      { jp: "この かばんは {旅行|りょこう}に べんりです。", ro: "Kono kaban wa ryokō ni benri desu.", en: "This bag is handy for travelling." },
      { jp: "{駅|えき}まで {行|い}くのに {三十分|さんじゅっぷん} かかります。", ro: "Eki made iku no ni sanjuppun kakarimasu.", en: "It takes thirty minutes to get to the station." }
    ],
    drills: [
      { type: "fill", jp: "パスポートを {作|つく}る＿＿ {写真|しゃしん}が ひつようです。", answer: "のに", options: ["のに", "のを", "のが", "のと"], en: "You need a photo to get a passport." },
      { type: "fill", jp: "この {自転車|じてんしゃ}は {買|か}い{物|もの}に {行|い}く＿＿ {使|つか}います。", answer: "のに", options: ["のに", "のを", "のが", "のと"], en: "We use this bicycle for going shopping." },
      { type: "fill", jp: "この ナイフは {料理|りょうり}＿＿ {使|つか}います。", answer: "に", options: ["に", "を", "が", "の"], en: "We use this knife for cooking." },
      { type: "fill", jp: "{学校|がっこう}まで {歩|ある}くのに {二十分|にじゅっぷん} ＿＿。", answer: "かかります", options: ["かかります", "つかいます", "べんりです", "つくります"], en: "It takes twenty minutes to walk to school." },
      { type: "choose", q: "Which sentence means 'This app is handy for learning kanji'?", answer: "この アプリは {漢字|かんじ}を {習|なら}うのに べんりです。", options: ["この アプリは {漢字|かんじ}を {習|なら}うのに べんりです。", "この アプリは {漢字|かんじ}を {習|なら}いますのに べんりです。", "この アプリは {漢字|かんじ}を {習|なら}うに べんりです。", "この アプリは {漢字|かんじ}を {習|なら}ったのに べんりです。"] },
      { type: "order", tiles: ["うちを", "{買|か}うのに", "お{金|かね}が", "たくさん", "いります"], en: "It takes a lot of money to buy a house." }
    ]
  },

  // ───────────────────────── LESSON 43 ─────────────────────────
  {
    id: "L143-1",
    lesson: 143,
    title: "V ます-stem + そうです",
    meaning: "It looks as if X is about to happen",
    explain: "V ます-stem + そうです says that from what you can see, something looks about to happen.",
    examples: [
      { jp: "モチが やねから おちそうです。", ro: "Mochi ga yane kara ochisō desu.", en: "Mochi looks about to fall off the roof." },
      { jp: "{風|かぜ}で {木|き}が たおれそうです。", ro: "Kaze de ki ga taoresō desu.", en: "The tree looks as if the wind will blow it over." },
      { jp: "{電車|でんしゃ}が もう {出|で}そうです。いそぎましょう。", ro: "Densha ga mō desō desu. Isogimashō.", en: "The train looks about to leave. Let's hurry." }
    ],
    drills: [
      { type: "fill", jp: "{空|そら}が {黒|くろ}いです。{雨|あめ}が ＿＿そうです。", answer: "ふり", options: ["ふり", "ふる", "ふって", "ふった"], en: "The sky is dark. It looks like it's going to rain." },
      { type: "fill", jp: "この いすは ＿＿そうです。", answer: "こわれ", options: ["こわれ", "こわれる", "こわれて", "こわれた"], en: "This chair looks about to break." },
      { type: "fill", jp: "にもつが {多|おお}くて、おち＿＿です。", answer: "そう", options: ["そう", "よう", "たい", "すぎ"], en: "There is so much luggage that it looks about to fall." },
      { type: "choose", q: "What does 「やねの ゆきが おちそうです」 mean?", answer: "The snow on the roof looks about to fall.", options: ["The snow on the roof looks about to fall.", "I heard the snow on the roof fell.", "The snow on the roof has already fallen.", "The snow on the roof will never fall."] },
      { type: "choose", q: "What is the そう form of きます (come)?", answer: "きそうです", options: ["きそうです", "くそうです", "こそうです", "きてそうです"] },
      { type: "order", tiles: ["もうすぐ", "{雨|あめ}が", "やみそうです"], en: "It looks like the rain will stop soon." }
    ]
  },
  {
    id: "L143-2",
    lesson: 143,
    title: "Adjective + そうです",
    meaning: "It looks ~",
    explain: "Add そうです to an adjective stem to say how something looks to you, or how someone seems to feel.",
    examples: [
      { jp: "{駅前|えきまえ}の カレーは おいしそうです。", ro: "Ekimae no karē wa oishisō desu.", en: "The curry in front of the station looks delicious." },
      { jp: "カランさんは {今日|きょう} {元気|げんき}そうです。", ro: "Karan-san wa kyō genkisō desu.", en: "Karan looks well today." },
      { jp: "モチは {魚|さかな}を {見|み}て うれしそうです。", ro: "Mochi wa sakana o mite ureshisō desu.", en: "Mochi looks happy at the sight of the fish." }
    ],
    drills: [
      { type: "fill", jp: "この りんごは ＿＿そうです。", answer: "おいし", options: ["おいし", "おいしい", "おいしく", "おいしいな"], en: "This apple looks delicious." },
      { type: "fill", jp: "{先生|せんせい}は {今日|きょう} ＿＿そうです。", answer: "いそがし", options: ["いそがし", "いそがしい", "いそがしく", "いそがしかった"], en: "The teacher looks busy today." },
      { type: "fill", jp: "この {仕事|しごと}は ＿＿そうです。", answer: "よさ", options: ["よさ", "いい", "よ", "いさ"], en: "This job looks good." },
      { type: "fill", jp: "この {町|まち}には {店|みせ}が ＿＿そうです。", answer: "なさ", options: ["なさ", "ない", "な", "なく"], en: "It looks as if there are no shops in this town." },
      { type: "choose", q: "You can see a beautiful flower. Which do you say?", answer: "この {花|はな}は きれいです。", options: ["この {花|はな}は きれいです。", "この {花|はな}は きれいそうです。", "この {花|はな}は きれいなそうです。", "この {花|はな}は きれいくそうです。"] },
      { type: "order", tiles: ["マリアさんは", "{今日|きょう}", "{楽|たの}しそうです"], en: "Maria looks cheerful today." }
    ]
  },
  {
    id: "L143-3",
    lesson: 143,
    title: "～そうな N / ～そうに V",
    meaning: "A ~-looking N / doing X in a ~ way",
    explain: "そう behaves like a な-adjective, so it becomes そうな before a noun and そうに before a verb.",
    examples: [
      { jp: "おいしそうな りんごですね。", ro: "Oishisō na ringo desu ne.", en: "What delicious-looking apples!" },
      { jp: "モチは {楽|たの}しそうに {電車|でんしゃ}を {見|み}て います。", ro: "Mochi wa tanoshisō ni densha o mite imasu.", en: "Mochi is happily watching the trains." },
      { jp: "{新|あたら}しそうな {自転車|じてんしゃ}が {駅|えき}の {前|まえ}に あります。", ro: "Atarashisō na jitensha ga eki no mae ni arimasu.", en: "There is a new-looking bicycle in front of the station." }
    ],
    drills: [
      { type: "fill", jp: "それは むずかし＿＿ {本|ほん}ですね。", answer: "そうな", options: ["そうな", "そうに", "そうで", "そうの"], en: "That looks like a difficult book." },
      { type: "fill", jp: "カランさんは うれし＿＿ {話|はな}して います。", answer: "そうに", options: ["そうに", "そうな", "そうの", "そうだ"], en: "Karan is talking happily." },
      { type: "fill", jp: "{高|たか}＿＿ {時計|とけい}ですね。", answer: "そうな", options: ["そうな", "そうに", "そうの", "そうも"], en: "That's an expensive-looking watch." },
      { type: "choose", q: "Which form goes before a noun?", answer: "そうな", options: ["そうな", "そうに", "そうです", "そうで"] },
      { type: "choose", q: "Which one means 'a kind-looking person'?", answer: "{親切|しんせつ}そうな {人|ひと}", options: ["{親切|しんせつ}そうな {人|ひと}", "{親切|しんせつ}そうに {人|ひと}", "{親切|しんせつ}そうの {人|ひと}", "{親切|しんせつ}なそう {人|ひと}"] },
      { type: "order", tiles: ["モチは", "ねむそうに", "{歩|ある}いて", "います"], en: "Mochi is walking sleepily." }
    ]
  },
  {
    id: "L143-4",
    lesson: 143,
    title: "V て + きます",
    meaning: "Go, do X and come back",
    explain: "V て + きます means going somewhere to do something and then returning to where you are now.",
    examples: [
      { jp: "ちょっと {飲|の}み{物|もの}を {買|か}って {来|き}ます。", ro: "Chotto nomimono o katte kimasu.", en: "I'll just go and buy a drink." },
      { jp: "{駅|えき}の {人|ひと}に {聞|き}いて {来|き}ます。", ro: "Eki no hito ni kiite kimasu.", en: "I'll go and ask the station staff." },
      { jp: "{図書館|としょかん}で {本|ほん}を {借|か}りて {来|き}ました。", ro: "Toshokan de hon o karite kimashita.", en: "I went and borrowed a book from the library." }
    ],
    drills: [
      { type: "fill", jp: "ちょっと {銀行|ぎんこう}へ ＿＿ {来|き}ます。", answer: "{行|い}って", options: ["{行|い}って", "{行|い}き", "{行|い}く", "{行|い}った"], en: "I'll just pop to the bank." },
      { type: "fill", jp: "{店|みせ}で パンを ＿＿ {来|き}ます。", answer: "{買|か}って", options: ["{買|か}って", "{買|か}い", "{買|か}う", "{買|か}います"], en: "I'll go and buy some bread at the shop." },
      { type: "fill", jp: "となりの {教室|きょうしつ}＿＿ いすを {持|も}って {来|き}ます。", answer: "から", options: ["から", "で", "へ", "を"], en: "I'll go and bring a chair from the next classroom." },
      { type: "choose", q: "You say 「パンを かって きます」. What happens next?", answer: "You go out, buy bread and come back.", options: ["You go out, buy bread and come back.", "You stay home and bake bread.", "You bought bread last week.", "Someone brings you bread."] },
      { type: "choose", q: "What do you say when you leave home for the day?", answer: "{行|い}って {来|き}ます。", options: ["{行|い}って {来|き}ます。", "{行|い}って {帰|かえ}ります。", "{行|い}き {来|き}ます。", "{行|い}くて {来|き}ます。"] },
      { type: "order", tiles: ["ちょっと", "トイレへ", "{行|い}って", "{来|き}ます"], en: "I'll just go to the toilet." }
    ]
  },

  // ───────────────────────── LESSON 44 ─────────────────────────
  {
    id: "L144-1",
    lesson: 144,
    title: "～すぎます",
    meaning: "Too much, too ~",
    explain: "すぎます after a ます-stem or an adjective stem says something goes beyond what is good.",
    examples: [
      { jp: "きのう ケーキを {食|た}べすぎました。", ro: "Kinō kēki o tabesugimashita.", en: "I ate too much cake yesterday." },
      { jp: "この {問題|もんだい}は むずかしすぎます。", ro: "Kono mondai wa muzukashisugimasu.", en: "This question is too difficult." },
      { jp: "この {町|まち}は しずかすぎて、{夜|よる}は こわいです。", ro: "Kono machi wa shizukasugite, yoru wa kowai desu.", en: "This town is too quiet, so it's scary at night." }
    ],
    drills: [
      { type: "fill", jp: "この {服|ふく}は ＿＿すぎます。", answer: "{高|たか}", options: ["{高|たか}", "{高|たか}い", "{高|たか}く", "{高|たか}くて"], en: "These clothes are too expensive." },
      { type: "fill", jp: "コーヒーを ＿＿すぎて、ねむれません。", answer: "{飲|の}み", options: ["{飲|の}み", "{飲|の}む", "{飲|の}んで", "{飲|の}みます"], en: "I drank too much coffee and can't sleep." },
      { type: "fill", jp: "この {町|まち}は ＿＿すぎます。", answer: "しずか", options: ["しずか", "しずかな", "しずかに", "しずかだ"], en: "This town is too quiet." },
      { type: "fill", jp: "その {話|はなし}は ＿＿すぎます。", answer: "よ", options: ["よ", "いい", "いいく", "いく"], en: "That offer is too good." },
      { type: "choose", q: "What is the すぎます form of します?", answer: "しすぎます", options: ["しすぎます", "するすぎます", "してすぎます", "さすぎます"] },
      { type: "order", tiles: ["{食|た}べすぎて", "おなかが", "いたいです"], en: "I ate too much and my stomach hurts." }
    ]
  },
  {
    id: "L144-2",
    lesson: 144,
    title: "V ます-stem + やすい / にくい",
    meaning: "Easy to do / hard to do",
    explain: "Add やすい or にくい to a ます-stem to say an action is easy or hard, or that something easily or rarely happens.",
    examples: [
      { jp: "この ペンは {書|か}きやすいです。", ro: "Kono pen wa kakiyasui desu.", en: "This pen is easy to write with." },
      { jp: "この {魚|さかな}は ほねが {多|おお}くて、{食|た}べにくいです。", ro: "Kono sakana wa hone ga ōkute, tabenikui desu.", en: "This fish has a lot of bones, so it's hard to eat." },
      { jp: "{雨|あめ}の {日|ひ}は {道|みち}が すべりやすいです。", ro: "Ame no hi wa michi ga suberiyasui desu.", en: "On rainy days the roads are slippery." }
    ],
    drills: [
      { type: "fill", jp: "さとう{先生|せんせい}の {字|じ}は ＿＿やすいです。", answer: "{読|よ}み", options: ["{読|よ}み", "{読|よ}む", "{読|よ}んで", "{読|よ}みて"], en: "Professor Sato's handwriting is easy to read." },
      { type: "fill", jp: "この {電話|でんわ}は {使|つか}い＿＿です。", answer: "にくい", options: ["にくい", "やすい", "たい", "すぎ"], en: "This phone is hard to use." },
      { type: "fill", jp: "この {町|まち}は {店|みせ}が {多|おお}くて、{住|す}み＿＿です。", answer: "やすい", options: ["やすい", "にくい", "たい", "そう"], en: "This town has a lot of shops, so it's easy to live in." },
      { type: "choose", q: "What is the past form of わかりやすいです?", answer: "わかりやすかったです", options: ["わかりやすかったです", "わかりやすいでした", "わかりやすかったでした", "わかりやすくでした"] },
      { type: "choose", q: "Which one means 'easy to break'?", answer: "こわれやすい", options: ["こわれやすい", "こわれにくい", "こわしたい", "こわれそう"] },
      { type: "order", tiles: ["この", "かばんは", "{持|も}ちやすいです"], en: "This bag is easy to carry." }
    ]
  },
  {
    id: "L144-3",
    lesson: 144,
    title: "いA く / なA に / N に + します",
    meaning: "Making something ~",
    explain: "Use ～く します or ～に します to say someone changes something on purpose, and compare ～く なります for a change that just happens.",
    examples: [
      { jp: "へやを きれいに しました。", ro: "Heya o kirei ni shimashita.", en: "I tidied up the room." },
      { jp: "{料理|りょうり}を もう {少|すこ}し からく して ください。", ro: "Ryōri o mō sukoshi karaku shite kudasai.", en: "Please make the dish a little spicier." },
      { jp: "パーティーの {時間|じかん}を {七時|しちじ}に しました。", ro: "Pātī no jikan o shichiji ni shimashita.", en: "We set the party for seven o'clock." }
    ],
    drills: [
      { type: "fill", jp: "この ズボンを ＿＿ して ください。", answer: "みじかく", options: ["みじかく", "みじかいに", "みじかい", "みじかに"], en: "Please shorten these trousers." },
      { type: "fill", jp: "{教室|きょうしつ}を ＿＿ しましょう。", answer: "しずかに", options: ["しずかに", "しずかく", "しずかな", "しずか"], en: "Let's keep the classroom quiet." },
      { type: "fill", jp: "ごはんの {時間|じかん}を {六時|ろくじ}＿＿ しましょう。", answer: "に", options: ["に", "を", "で", "が"], en: "Let's make mealtime six o'clock." },
      { type: "choose", q: "What is the difference between きれいに します and きれいに なります?", answer: "します is deliberate, なります just happens", options: ["します is deliberate, なります just happens", "します is past, なります is future", "します is polite, なります is casual", "They mean exactly the same"] },
      { type: "choose", q: "Which is correct for 'cut it small'?", answer: "{小|ちい}さく {切|き}ります。", options: ["{小|ちい}さく {切|き}ります。", "{小|ちい}さいに {切|き}ります。", "{小|ちい}さに {切|き}ります。", "{小|ちい}さいで {切|き}ります。"] },
      { type: "order", tiles: ["へやを", "あたたかく", "しましょう"], en: "Let's make the room warmer." }
    ]
  },
  {
    id: "L144-4",
    lesson: 144,
    title: "N に + します",
    meaning: "Choosing N, deciding on N",
    explain: "N に します means choosing N from the options, as you do when ordering food or fixing a date.",
    examples: [
      { jp: "{飲|の}み{物|もの}は コーヒーに します。", ro: "Nomimono wa kōhī ni shimasu.", en: "I'll have coffee to drink." },
      { jp: "{今日|きょう}の {昼|ひる}ごはんは カレーに しましょう。", ro: "Kyō no hirugohan wa karē ni shimashō.", en: "Let's have curry for lunch today." },
      { jp: "{旅行|りょこう}は {来週|らいしゅう}に しました。", ro: "Ryokō wa raishū ni shimashita.", en: "We decided on next week for the trip." }
    ],
    drills: [
      { type: "fill", jp: "{私|わたし}は {魚|さかな}＿＿ します。", answer: "に", options: ["に", "を", "で", "が"], en: "I'll have the fish." },
      { type: "fill", jp: "A: {何|なに}に しますか。 B: ケーキ＿＿。", answer: "に します", options: ["に します", "を します", "が します", "で します"], en: "A: What will you have? B: I'll have cake." },
      { type: "fill", jp: "{赤|あか}いのと {青|あお}いの、＿＿に しますか。", answer: "どちら", options: ["どちら", "どこ", "だれ", "いくら"], en: "The red one or the blue one: which will you choose?" },
      { type: "fill", jp: "{明日|あした}は ちょっと……。{来週|らいしゅう}の {月曜日|げつようび}＿＿ しませんか。", answer: "に", options: ["に", "を", "で", "が"], en: "Tomorrow's a bit difficult. Shall we make it next Monday?" },
      { type: "choose", q: "In a restaurant, what does 「パンに します」 mean?", answer: "I'll have bread.", options: ["I'll have bread.", "I'll make bread.", "I'll turn into bread.", "I'll go to the bakery."] },
      { type: "order", tiles: ["{私|わたし}は", "この", "{黒|くろ}いのに", "します"], en: "I'll take this black one." }
    ]
  },

  // ───────────────────────── LESSON 45 ─────────────────────────
  {
    id: "L145-1",
    lesson: 145,
    title: "～ばあいは",
    meaning: "In the event of ~, if ~ happens",
    explain: "～ばあいは sets up a situation that may happen and then says what to do, so it often appears in rules and notices.",
    examples: [
      { jp: "{電車|でんしゃ}が {止|と}まった ばあいは、バスで {来|き}て ください。", ro: "Densha ga tomatta baai wa, basu de kite kudasai.", en: "If the trains stop, please come by bus." },
      { jp: "ゆきの ばあいは、{店|みせ}は {休|やす}みです。", ro: "Yuki no baai wa, mise wa yasumi desu.", en: "In the event of snow, the shop will be closed." },
      { jp: "パーティーに {来|こ}られない ばあいは、メールを ください。", ro: "Pātī ni korarenai baai wa, mēru o kudasai.", en: "If you can't come to the party, please send me an email." }
    ],
    drills: [
      { type: "fill", jp: "カードを なくした ＿＿、すぐ {電話|でんわ}して ください。", answer: "ばあいは", options: ["ばあいは", "ために", "ように", "ことは"], en: "If you lose your card, please phone straight away." },
      { type: "fill", jp: "{雨|あめ}＿＿ ばあいは、{旅行|りょこう}を {中止|ちゅうし}します。", answer: "の", options: ["の", "な", "だ", "に"], en: "If it rains, we'll call off the trip." },
      { type: "fill", jp: "ぐあいが ＿＿ ばあいは、{早|はや}く {帰|かえ}って ください。", answer: "{悪|わる}い", options: ["{悪|わる}い", "{悪|わる}いの", "{悪|わる}かって", "{悪|わる}く"], en: "If you feel unwell, please go home early." },
      { type: "fill", jp: "ひま＿＿ ばあいは、{電話|でんわ}して ください。", answer: "な", options: ["な", "の", "だ", "に"], en: "If you are free, please call me." },
      { type: "choose", q: "Which one means 'in case of fire'?", answer: "{火事|かじ}の ばあいは", options: ["{火事|かじ}の ばあいは", "{火事|かじ}な ばあいは", "{火事|かじ}だ ばあいは", "{火事|かじ}に ばあいは"] },
      { type: "order", tiles: ["おくれる", "ばあいは", "{電話|でんわ}して", "ください"], en: "If you're going to be late, please phone." }
    ]
  },
  {
    id: "L145-2",
    lesson: 145,
    title: "Plain + のに",
    meaning: "Although ~, and yet ~",
    explain: "～のに joins two facts when the second one goes against what you expected, and it carries surprise or disappointment.",
    examples: [
      { jp: "{春|はる}なのに、とても さむいです。", ro: "Haru na noni, totemo samui desu.", en: "Even though it's spring, it's very cold." },
      { jp: "モチは {朝|あさ} たくさん {食|た}べたのに、もう おなかが すいて います。", ro: "Mochi wa asa takusan tabeta noni, mō onaka ga suite imasu.", en: "Mochi ate a lot this morning but is hungry already." },
      { jp: "この {車|くるま}は {高|たか}かったのに、すぐ こわれました。", ro: "Kono kuruma wa takakatta noni, sugu kowaremashita.", en: "This car was expensive, and yet it broke straight away." }
    ],
    drills: [
      { type: "fill", jp: "よく {勉強|べんきょう}した＿＿、てんが {悪|わる}かったです。", answer: "のに", options: ["のに", "ので", "のが", "のを"], en: "I studied hard, and yet my score was bad." },
      { type: "fill", jp: "{夏|なつ}＿＿、さむいです。", answer: "なのに", options: ["なのに", "のに", "がのに", "でのに"], en: "It's summer, and yet it's cold." },
      { type: "fill", jp: "カランさんは {元気|げんき}＿＿、{学校|がっこう}を {休|やす}みました。", answer: "なのに", options: ["なのに", "のに", "なので", "だから"], en: "Karan is perfectly well, and yet stayed away from school." },
      { type: "fill", jp: "{近|ちか}い＿＿、{一度|いちど}も {行|い}った ことが ありません。", answer: "のに", options: ["のに", "ので", "のを", "のは"], en: "It's close, and yet I've never been there." },
      { type: "choose", q: "What feeling does ～のに carry?", answer: "Surprise or disappointment", options: ["Surprise or disappointment", "A polite request", "Excitement about a plan", "A goal you want to reach"] },
      { type: "order", tiles: ["{電話|でんわ}したのに", "{友|とも}だちは", "{出|で}ませんでした"], en: "I phoned, but my friend didn't answer." }
    ]
  },
  {
    id: "L145-3",
    lesson: 145,
    title: "～のに vs が, ～ても and the other のに",
    meaning: "Choosing the right 'but' and telling the two のに apart",
    explain: "The second half of ～のに is a plain fact, so wishes, requests and plans need が or ～ても instead.",
    examples: [
      { jp: "{高|たか}いですが、この {時計|とけい}を {買|か}いたいです。", ro: "Takai desu ga, kono tokei o kaitai desu.", en: "It's expensive, but I want to buy this watch." },
      { jp: "{雨|あめ}が ふっても、{出|で}かけます。", ro: "Ame ga futte mo, dekakemasu.", en: "Even if it rains, I'll go out." },
      { jp: "{雨|あめ}が ふって いるのに、カランさんは {走|はし}って います。", ro: "Ame ga futte iru noni, Karan-san wa hashitte imasu.", en: "It's raining, and yet Karan is out running." }
    ],
    drills: [
      { type: "choose", q: "Which sentence is correct?", answer: "{高|たか}いですが、{買|か}いたいです。", options: ["{高|たか}いですが、{買|か}いたいです。", "{高|たか}いのに、{買|か}いたいです。", "{雨|あめ}なのに、{出|で}かけましょう。", "{雨|あめ}なのに、{来|き}て ください。"] },
      { type: "fill", jp: "{明日|あした} {雨|あめ}が ＿＿、{行|い}きます。", answer: "ふっても", options: ["ふっても", "ふるのに", "ふったのに", "ふるので"], en: "Even if it rains tomorrow, I'll go." },
      { type: "fill", jp: "{高|たか}い＿＿、この {本|ほん}を {買|か}いましょう。", answer: "ですが", options: ["ですが", "のに", "のを", "のは"], en: "It's expensive, but let's buy this book." },
      { type: "fill", jp: "{手紙|てがみ}を {書|か}いた＿＿、へんじが {来|き}ません。", answer: "のに", options: ["のに", "ために", "ように", "のを"], en: "I wrote a letter, but no reply has come." },
      { type: "choose", q: "Which のに means 'although'?", answer: "{高|たか}いのに、{買|か}いました。", options: ["{高|たか}いのに、{買|か}いました。", "{料理|りょうり}を {作|つく}るのに {使|つか}います。", "{駅|えき}まで {行|い}くのに {十分|じゅっぷん} かかります。", "{漢字|かんじ}を {習|なら}うのに いいです。"] },
      { type: "order", tiles: ["{春|はる}なのに", "ゆきが", "ふって", "います"], en: "It's spring, and yet it's snowing." }
    ]
  },

  // ───────────────────────── LESSON 46 ─────────────────────────
  {
    id: "L146-1",
    lesson: 146,
    title: "V dictionary + ところです",
    meaning: "About to do X",
    explain: "V dictionary form + ところです says you are just about to start something.",
    examples: [
      { jp: "これから {電車|でんしゃ}に のる ところです。", ro: "Kore kara densha ni noru tokoro desu.", en: "I'm just about to get on the train." },
      { jp: "{今|いま} {出|で}かける ところです。", ro: "Ima dekakeru tokoro desu.", en: "I'm about to go out now." },
      { jp: "モチは {今|いま}から {駅|えき}の {仕事|しごと}を {始|はじ}める ところです。", ro: "Mochi wa ima kara eki no shigoto o hajimeru tokoro desu.", en: "Mochi is just about to start work at the station." }
    ],
    drills: [
      { type: "fill", jp: "これから {家|いえ}を ＿＿ ところです。", answer: "{出|で}る", options: ["{出|で}る", "{出|で}て", "{出|で}ます", "{出|で}"], en: "I'm about to leave home." },
      { type: "fill", jp: "A: もう {食|た}べましたか。 B: いいえ、これから {食|た}べる ＿＿です。", answer: "ところ", options: ["ところ", "ばかり", "はず", "よう"], en: "A: Have you eaten? B: No, I'm just about to eat." },
      { type: "choose", q: "What does 「いま でる ところです」 mean?", answer: "I'm about to leave.", options: ["I'm about to leave.", "I have just left.", "I left a long time ago.", "I should have left."] },
      { type: "choose", q: "Which word often comes with V dictionary + ところです?", answer: "これから", options: ["これから", "さっき", "たった {今|いま}", "きのう"] },
      { type: "order", tiles: ["{今|いま}から", "テレビを", "{見|み}る", "ところです"], en: "I'm about to watch TV." },
      { type: "order", tiles: ["これから", "{友|とも}だちに", "{電話|でんわ}する", "ところです"], en: "I'm just about to phone my friend." }
    ]
  },
  {
    id: "L146-2",
    lesson: 146,
    title: "V ている + ところです",
    meaning: "In the middle of doing X",
    explain: "V ている + ところです stresses that you are in the middle of something right now, often as a reason you can't do something else.",
    examples: [
      { jp: "{今|いま} {教室|きょうしつ}を そうじして いる ところです。", ro: "Ima kyōshitsu o sōji shite iru tokoro desu.", en: "I'm in the middle of cleaning the classroom." },
      { jp: "その {問題|もんだい}は {今|いま} {考|かんが}えて いる ところです。", ro: "Sono mondai wa ima kangaete iru tokoro desu.", en: "I'm thinking about that problem right now." },
      { jp: "{今|いま} {作文|さくぶん}を {書|か}いて いる ところですから、{少|すこ}し {待|ま}って ください。", ro: "Ima sakubun o kaite iru tokoro desu kara, sukoshi matte kudasai.", en: "I'm in the middle of writing an essay, so please wait a moment." }
    ],
    drills: [
      { type: "fill", jp: "{今|いま} {料理|りょうり}を ＿＿ ところです。", answer: "{作|つく}って いる", options: ["{作|つく}って いる", "{作|つく}って", "{作|つく}ります", "{作|つく}りて いる"], en: "I'm in the middle of cooking." },
      { type: "fill", jp: "A: {手紙|てがみ}は もう {書|か}きましたか。 B: {今|いま} {書|か}いて いる ＿＿です。", answer: "ところ", options: ["ところ", "ばかり", "はず", "よう"], en: "A: Have you written the letter yet? B: I'm writing it now." },
      { type: "fill", jp: "{今|いま} {電話|でんわ}して ＿＿です。", answer: "いる ところ", options: ["いる ところ", "いた ばかり", "いる ばかり", "ある ところ"], en: "I'm on the phone right now." },
      { type: "choose", q: "Which one means 'I'm in the middle of reading'?", answer: "{読|よ}んで いる ところです。", options: ["{読|よ}んで いる ところです。", "{読|よ}む ところです。", "{読|よ}んだ ところです。", "{読|よ}んだ ばかりです。"] },
      { type: "choose", q: "Which time word fits ～て いる ところです?", answer: "{今|いま}", options: ["{今|いま}", "きのう", "{来週|らいしゅう}", "{去年|きょねん}"] },
      { type: "order", tiles: ["{今|いま}", "{駅|えき}へ", "{走|はし}って いる", "ところです"], en: "I'm running to the station right now." }
    ]
  },
  {
    id: "L146-3",
    lesson: 146,
    title: "V た + ところです",
    meaning: "Just finished doing X",
    explain: "V た + ところです says something finished only a moment ago.",
    examples: [
      { jp: "{今|いま} {駅|えき}に {着|つ}いた ところです。", ro: "Ima eki ni tsuita tokoro desu.", en: "I've just arrived at the station." },
      { jp: "たった {今|いま} {仕事|しごと}が {終|お}わった ところです。", ro: "Tatta ima shigoto ga owatta tokoro desu.", en: "My work has only just finished." },
      { jp: "{電車|でんしゃ}は {今|いま} {出|で}た ところです。", ro: "Densha wa ima deta tokoro desu.", en: "The train has just left." }
    ],
    drills: [
      { type: "fill", jp: "たった {今|いま} {家|いえ}に ＿＿ ところです。", answer: "{帰|かえ}った", options: ["{帰|かえ}った", "{帰|かえ}って", "{帰|かえ}ります", "{帰|かえ}り"], en: "I got home just this moment." },
      { type: "fill", jp: "A: もう ごはんを {食|た}べましたか。 B: はい、{今|いま} {食|た}べた ＿＿です。", answer: "ところ", options: ["ところ", "はず", "よう", "そう"], en: "A: Have you eaten? B: Yes, I've just finished eating." },
      { type: "fill", jp: "{今|いま} ＿＿ ところです。", answer: "{起|お}きた", options: ["{起|お}きた", "{起|お}きて", "{起|お}きます", "{起|お}きましょう"], en: "I've just got up." },
      { type: "choose", q: "Which shows the three stages in the right order?", answer: "{食|た}べる ところ、{食|た}べて いる ところ、{食|た}べた ところ", options: ["{食|た}べる ところ、{食|た}べて いる ところ、{食|た}べた ところ", "{食|た}べた ところ、{食|た}べる ところ、{食|た}べて いる ところ", "{食|た}べて いる ところ、{食|た}べた ところ、{食|た}べる ところ", "{食|た}べる ところ、{食|た}べた ところ、{食|た}べて いる ところ"] },
      { type: "choose", q: "Which word often comes with V た + ところです?", answer: "たった {今|いま}", options: ["たった {今|いま}", "これから", "{来週|らいしゅう}", "{来年|らいねん}"] },
      { type: "order", tiles: ["たった {今|いま}", "{電話|でんわ}が", "{終|お}わった", "ところです"], en: "The phone call has only just ended." }
    ]
  },
  {
    id: "L146-4",
    lesson: 146,
    title: "V た + ばかりです",
    meaning: "Only just did X (it feels recent)",
    explain: "V た + ばかりです says something happened recently in the speaker's mind, even if weeks or months have passed.",
    examples: [
      { jp: "モチは {先月|せんげつ} {駅長|えきちょう}に なった ばかりです。", ro: "Mochi wa sengetsu ekichō ni natta bakari desu.", en: "Mochi only became stationmaster last month." },
      { jp: "{買|か}った ばかりの くつが よごれました。", ro: "Katta bakari no kutsu ga yogoremashita.", en: "The shoes I'd only just bought got dirty." },
      { jp: "{先週|せんしゅう} {来|き}た ばかりなので、まだ {道|みち}が わかりません。", ro: "Senshū kita bakari na node, mada michi ga wakarimasen.", en: "I only came last week, so I don't know the roads yet." }
    ],
    drills: [
      { type: "fill", jp: "{先月|せんげつ} {日本|にほん}へ ＿＿ ばかりです。", answer: "{来|き}た", options: ["{来|き}た", "{来|く}る", "{来|き}て", "{来|き}ます"], en: "I only came to Japan last month." },
      { type: "fill", jp: "この くつは {去年|きょねん} {買|か}った ＿＿です。", answer: "ばかり", options: ["ばかり", "ところ", "はず", "そう"], en: "I only bought these shoes last year." },
      { type: "fill", jp: "{買|か}った ばかり＿＿ {自転車|じてんしゃ}が こわれました。", answer: "の", options: ["の", "な", "だ", "に"], en: "The bicycle I'd just bought broke." },
      { type: "choose", q: "Which ending completes 「せんげつ きた ～」 to mean 'only came last month'?", answer: "ばかりです", options: ["ばかりです", "ところです", "はずです", "そうです"] },
      { type: "choose", q: "How is ～た ばかりです different from ～た ところです?", answer: "ばかり can feel recent even after months", options: ["ばかり can feel recent even after months", "ばかり is only for the last few seconds", "ばかり is about the future", "There is no difference"] },
      { type: "order", tiles: ["この", "{本|ほん}は", "{読|よ}み{始|はじ}めた", "ばかりです"], en: "I've only just started reading this book." }
    ]
  },
  {
    id: "L146-5",
    lesson: 146,
    title: "Plain + はずです",
    meaning: "Should be ~, I'm sure that ~ (based on reasons)",
    explain: "～はずです states what you firmly expect from good reasons, and it is about facts rather than your own plans.",
    examples: [
      { jp: "モチは {今|いま} {駅|えき}に いる はずです。", ro: "Mochi wa ima eki ni iru hazu desu.", en: "Mochi should be at the station now." },
      { jp: "{今日|きょう}は {土曜日|どようび}ですから、{銀行|ぎんこう}は {休|やす}みの はずです。", ro: "Kyō wa doyōbi desu kara, ginkō wa yasumi no hazu desu.", en: "It's Saturday, so the bank should be closed." },
      { jp: "{高|たか}い {店|みせ}ですから、おいしい はずです。", ro: "Takai mise desu kara, oishii hazu desu.", en: "It's an expensive restaurant, so it should be good." }
    ],
    drills: [
      { type: "fill", jp: "{今日|きょう}は {日曜日|にちようび}ですから、{学校|がっこう}は {休|やす}み＿＿ はずです。", answer: "の", options: ["の", "な", "だ", "に"], en: "It's Sunday, so the school should be closed." },
      { type: "fill", jp: "マリアさんは ひま＿＿ はずです。", answer: "な", options: ["な", "の", "だ", "に"], en: "Maria should be free." },
      { type: "fill", jp: "たなかさんは {東京|とうきょう}へ {行|い}きましたから、{今日|きょう}は ＿＿ はずです。", answer: "{来|こ}ない", options: ["{来|こ}ない", "{来|き}ません", "{来|こ}なくて", "{来|こ}ないで"], en: "Tanaka went to Tokyo, so shouldn't be coming today." },
      { type: "fill", jp: "{先生|せんせい}は {今|いま} {教室|きょうしつ}に いる ＿＿です。", answer: "はず", options: ["はず", "ばかり", "ところ", "つもり"], en: "The teacher should be in the classroom now." },
      { type: "choose", q: "What does ～はずです express?", answer: "An expectation based on good reasons", options: ["An expectation based on good reasons", "Your own plan", "A wish", "Something you saw yourself"] },
      { type: "order", tiles: ["この", "{電車|でんしゃ}は", "{九時|くじ}に", "{着|つ}く", "はずです"], en: "This train should arrive at nine." }
    ]
  },

  // ───────────────────────── LESSON 47 ─────────────────────────
  {
    id: "L147-1",
    lesson: 147,
    title: "Plain + そうです (I heard) / ～に よると",
    meaning: "I heard that ~, according to ~",
    explain: "Plain form + そうです passes on something you heard or read, and N に よると names the source.",
    examples: [
      { jp: "マリアさんの {話|はなし}に よると、あの {店|みせ}は とても {安|やす}い そうです。", ro: "Maria-san no hanashi ni yoru to, ano mise wa totemo yasui sō desu.", en: "According to Maria, that shop is very cheap." },
      { jp: "ニュースに よると、{北|きた}の {町|まち}で じしんが あった そうです。", ro: "Nyūsu ni yoru to, kita no machi de jishin ga atta sō desu.", en: "According to the news, there was an earthquake in a northern town." },
      { jp: "モチは {魚|さかな}が いちばん すきだ そうです。", ro: "Mochi wa sakana ga ichiban suki da sō desu.", en: "I hear Mochi likes fish best." }
    ],
    drills: [
      { type: "fill", jp: "カランさんの {話|はなし}に よると、マリアさんは {来月|らいげつ} {国|くに}へ ＿＿ そうです。", answer: "{帰|かえ}る", options: ["{帰|かえ}る", "{帰|かえ}り", "{帰|かえ}って", "{帰|かえ}ります"], en: "According to Karan, Maria is going home next month." },
      { type: "fill", jp: "{新聞|しんぶん}＿＿ よると、{電車|でんしゃ}の ねだんが {上|あ}がる そうです。", answer: "に", options: ["に", "を", "で", "が"], en: "According to the newspaper, train fares are going up." },
      { type: "fill", jp: "あの {店|みせ}の カレーは {有名|ゆうめい}＿＿ そうです。", answer: "だ", options: ["だ", "な", "の", "に"], en: "I hear the curry at that shop is famous." },
      { type: "fill", jp: "たなかさんは {学生|がくせい}＿＿ そうです。", answer: "だ", options: ["だ", "な", "の", "に"], en: "I hear Tanaka is a student." },
      { type: "choose", q: "Which sentence means 'I heard it will rain'?", answer: "{雨|あめ}が ふる そうです。", options: ["{雨|あめ}が ふる そうです。", "{雨|あめ}が ふりそうです。", "{雨|あめ}が ふって います。", "{雨|あめ}が ふりました。"] },
      { type: "order", tiles: ["ニュースに", "よると", "{電車|でんしゃ}が", "{止|と}まった", "そうです"], en: "According to the news, the trains have stopped." }
    ]
  },
  {
    id: "L147-2",
    lesson: 147,
    title: "Plain + ようです",
    meaning: "It seems that ~ (a guess from what you noticed)",
    explain: "Plain form + ようです is a guess you work out yourself from something you saw, heard or felt.",
    examples: [
      { jp: "へやの {電気|でんき}が ついて いませんから、たなかさんは るすの ようです。", ro: "Heya no denki ga tsuite imasen kara, Tanaka-san wa rusu no yō desu.", en: "The light in the room is off, so Tanaka seems to be out." },
      { jp: "モチは かぜの ようです。{朝|あさ}から ずっと ねて います。", ro: "Mochi wa kaze no yō desu. Asa kara zutto nete imasu.", en: "Mochi seems to have a cold. Mochi has been sleeping since morning." },
      { jp: "{店|みせ}の {前|まえ}に {長|なが}い れつが あります。あの {店|みせ}は おいしい ようです。", ro: "Mise no mae ni nagai retsu ga arimasu. Ano mise wa oishii yō desu.", en: "There's a long queue outside. That restaurant seems to be good." }
    ],
    drills: [
      { type: "fill", jp: "{電話|でんわ}に {出|で}ません。{今|いま} いそがしい＿＿です。", answer: "よう", options: ["よう", "ばかり", "ところ", "つもり"], en: "Nobody is answering. They seem to be busy now." },
      { type: "fill", jp: "{今日|きょう}は {休|やす}み＿＿ ようです。", answer: "の", options: ["の", "な", "だ", "に"], en: "It seems to be a day off today." },
      { type: "fill", jp: "この {町|まち}は しずか＿＿ ようです。", answer: "な", options: ["な", "の", "だ", "に"], en: "This town seems to be quiet." },
      { type: "fill", jp: "ドアが {開|あ}いて います。だれか ＿＿ ようです。", answer: "{来|き}た", options: ["{来|き}た", "{来|き}て", "{来|き}ます", "{来|き}"], en: "The door is open. Someone seems to have come." },
      { type: "choose", q: "What is ようです based on?", answer: "A guess from what you noticed", options: ["A guess from what you noticed", "A fact you read in the news", "Your own plan", "A request from someone"] },
      { type: "order", tiles: ["どうも", "かぜを", "ひいた", "ようです"], en: "I think I've caught a cold." }
    ]
  },
  {
    id: "L147-3",
    lesson: 147,
    title: "そうです (looks), そうです (heard), ようです",
    meaning: "Choosing by where your information comes from",
    explain: "These endings differ in their source: what you can see now (ふりそうです), what you were told (ふる そうです) and what you worked out (ふる ようです).",
    examples: [
      { jp: "{空|そら}が {黒|くろ}いです。{雨|あめ}が ふりそうです。", ro: "Sora ga kuroi desu. Ame ga furisō desu.", en: "The sky is dark. It looks like rain." },
      { jp: "{友|とも}だちの {話|はなし}に よると、{東京|とうきょう}は {雨|あめ}が ふって いる そうです。", ro: "Tomodachi no hanashi ni yoru to, Tōkyō wa ame ga futte iru sō desu.", en: "According to my friend, it's raining in Tokyo." },
      { jp: "{外|そと}の {人|ひと}が かさを さして います。{雨|あめ}が ふって いる ようです。", ro: "Soto no hito ga kasa o sashite imasu. Ame ga futte iru yō desu.", en: "People outside have their umbrellas up. It seems to be raining." }
    ],
    drills: [
      { type: "choose", q: "You are looking at dark clouds. Which do you say?", answer: "{雨|あめ}が ふりそうです。", options: ["{雨|あめ}が ふりそうです。", "{雨|あめ}が ふる そうです。", "{雨|あめ}が ふった そうです。", "{雨|あめ}が ふって いました。"] },
      { type: "choose", q: "You read the forecast in the newspaper. Which do you say?", answer: "{雨|あめ}が ふる そうです。", options: ["{雨|あめ}が ふる そうです。", "{雨|あめ}が ふりそうです。", "{雨|あめ}が ふって ください。", "{雨|あめ}が ふりたいです。"] },
      { type: "fill", jp: "ニュースに よると、{今年|ことし}の {冬|ふゆ}は ＿＿ そうです。", answer: "さむい", options: ["さむい", "さむ", "さむく", "さむくて"], en: "According to the news, this winter will be cold." },
      { type: "fill", jp: "マリアさんに {聞|き}きました。この ケーキは ＿＿ そうです。", answer: "おいしい", options: ["おいしい", "おいし", "おいしく", "おいしいの"], en: "I asked Maria. I hear this cake is delicious." },
      { type: "fill", jp: "{音|おと}が しません。だれも いない ＿＿です。", answer: "よう", options: ["よう", "ばかり", "ところ", "つもり"], en: "There's no sound. There seems to be nobody here." },
      { type: "order", tiles: ["{雨|あめ}が", "やんだ", "ようです"], en: "It seems the rain has stopped." }
    ]
  },
  {
    id: "L147-4",
    lesson: 147,
    title: "N が します",
    meaning: "A smell, sound or taste can be sensed",
    explain: "におい, おと, こえ or あじ + が します says a smell, sound, voice or taste can be sensed, with no one doing anything on purpose.",
    examples: [
      { jp: "この スープは {魚|さかな}の {味|あじ}が します。", ro: "Kono sūpu wa sakana no aji ga shimasu.", en: "This soup tastes of fish." },
      { jp: "おいしそうな においが します。", ro: "Oishisō na nioi ga shimasu.", en: "Something smells delicious." },
      { jp: "{車|くるま}から へんな {音|おと}が します。", ro: "Kuruma kara hen na oto ga shimasu.", en: "There's a strange noise coming from the car." }
    ],
    drills: [
      { type: "fill", jp: "{駅|えき}の {店|みせ}から いい ＿＿が します。", answer: "におい", options: ["におい", "{音|おと}", "{味|あじ}", "こえ"], en: "A nice smell is coming from the station shop." },
      { type: "fill", jp: "となりの へやから こえ＿＿ します。", answer: "が", options: ["が", "を", "に", "で"], en: "I can hear a voice from the next room." },
      { type: "fill", jp: "この お{茶|ちゃ}は {花|はな}の ＿＿が します。", answer: "{味|あじ}", options: ["{味|あじ}", "{音|おと}", "こえ", "いろ"], en: "This tea tastes of flowers." },
      { type: "choose", q: "Which verb goes with におい, おと, こえ and あじ here?", answer: "します", options: ["します", "いれます", "なります", "できます"] },
      { type: "choose", q: "What does 「へんな あじが します」 mean?", answer: "It tastes strange.", options: ["It tastes strange.", "It smells strange.", "It sounds strange.", "I made a strange meal."] },
      { type: "order", tiles: ["{外|そと}で", "{車|くるま}の", "{音|おと}が", "します"], en: "I can hear a car outside." }
    ]
  },

  // ───────────────────────── LESSON 48 ─────────────────────────
  {
    id: "L148-1",
    lesson: 148,
    title: "Causative form: ～せます / ～させます",
    meaning: "Make or let someone do X",
    explain: "For the causative, Group 1 verbs move to the あ-row and add せます, Group 2 verbs add させます, and きます and します become こさせます and させます.",
    examples: [
      { jp: "{先生|せんせい}は {学生|がくせい}に {作文|さくぶん}を {書|か}かせました。", ro: "Sensei wa gakusei ni sakubun o kakasemashita.", en: "The teacher had the students write an essay." },
      { jp: "{母|はは}は {私|わたし}に やさいを {食|た}べさせました。", ro: "Haha wa watashi ni yasai o tabesasemashita.", en: "My mother made me eat vegetables." },
      { jp: "{駅長|えきちょう}は モチを {東京|とうきょう}へ {行|い}かせました。", ro: "Ekichō wa Mochi o Tōkyō e ikasemashita.", en: "The stationmaster sent Mochi to Tokyo." }
    ],
    drills: [
      { type: "fill", jp: "{先生|せんせい}は {学生|がくせい}に {本|ほん}を ＿＿。", answer: "{読|よ}ませました", options: ["{読|よ}ませました", "{読|よ}めました", "{読|よ}まれました", "{読|よ}みました"], en: "The teacher made the students read a book." },
      { type: "fill", jp: "{犬|いぬ}に {肉|にく}を ＿＿。", answer: "{食|た}べさせました", options: ["{食|た}べさせました", "{食|た}べらせました", "{食|た}べせました", "{食|た}べられました"], en: "I let the dog eat some meat." },
      { type: "fill", jp: "{社長|しゃちょう}は やまださんを {会社|かいしゃ}へ ＿＿。", answer: "{来|こ}させました", options: ["{来|こ}させました", "{来|き}させました", "{来|く}らせました", "{来|き}ました"], en: "The company president made Yamada come to the office." },
      { type: "choose", q: "What is the causative of いそぎます?", answer: "いそがせます", options: ["いそがせます", "いそぎせます", "いそぎさせます", "いそげます"] },
      { type: "choose", q: "What is the causative of かいます (buy)?", answer: "かわせます", options: ["かわせます", "かあせます", "かいせます", "かえます"] },
      { type: "order", tiles: ["{先生|せんせい}は", "{学生|がくせい}に", "{歌|うた}を", "{歌|うた}わせました"], en: "The teacher had the students sing a song." }
    ]
  },
  {
    id: "L148-2",
    lesson: 148,
    title: "Causative with を and に",
    meaning: "Marking the person who is made to act",
    explain: "The person made to act takes を with a verb that has no object, and に when the verb already has an object with を.",
    examples: [
      { jp: "{父|ちち}は {弟|おとうと}を {買|か}い{物|もの}に {行|い}かせました。", ro: "Chichi wa otōto o kaimono ni ikasemashita.", en: "My father sent my younger brother shopping." },
      { jp: "{母|はは}は {弟|おとうと}に へやを そうじさせました。", ro: "Haha wa otōto ni heya o sōji sasemashita.", en: "My mother made my younger brother clean his room." },
      { jp: "{駅長|えきちょう}は モチに きっぷを {売|う}らせました。", ro: "Ekichō wa Mochi ni kippu o urasemashita.", en: "The stationmaster had Mochi sell tickets." }
    ],
    drills: [
      { type: "fill", jp: "{母|はは}は {妹|いもうと}＿＿ {買|か}い{物|もの}に {行|い}かせました。", answer: "を", options: ["を", "が", "で", "へ"], en: "My mother sent my younger sister shopping." },
      { type: "fill", jp: "{先生|せんせい}は {学生|がくせい}＿＿ {本|ほん}を {読|よ}ませました。", answer: "に", options: ["に", "を", "で", "が"], en: "The teacher made the students read a book." },
      { type: "fill", jp: "{父|ちち}は {私|わたし}に {車|くるま}＿＿ あらわせました。", answer: "を", options: ["を", "に", "で", "が"], en: "My father made me wash the car." },
      { type: "choose", q: "Why does がくせい take に in 「がくせいに かんじを かかせます」?", answer: "を is already used for かんじ", options: ["を is already used for かんじ", "に shows a place", "に shows a time", "に shows a goal"] },
      { type: "choose", q: "Which sentence is correct?", answer: "{母|はは}は {子|こ}どもに {水|みず}を {飲|の}ませました。", options: ["{母|はは}は {子|こ}どもに {水|みず}を {飲|の}ませました。", "{母|はは}は {子|こ}どもを {水|みず}を {飲|の}ませました。", "{母|はは}は {子|こ}どもで {水|みず}を {飲|の}ませました。", "{母|はは}は {子|こ}どもが {水|みず}を {飲|の}ませました。"] },
      { type: "order", tiles: ["{父|ちち}は", "{妹|いもうと}を", "{駅|えき}まで", "{走|はし}らせました"], en: "My father made my younger sister run to the station." }
    ]
  },
  {
    id: "L148-3",
    lesson: 148,
    title: "Make, let and cause a feeling",
    meaning: "Different meanings of the causative",
    explain: "The causative can mean make, let or cause a feeling, and it only works when the person acted on is not above you.",
    examples: [
      { jp: "{父|ちち}は {私|わたし}を {外国|がいこく}へ {行|い}かせて くれました。", ro: "Chichi wa watashi o gaikoku e ikasete kuremashita.", en: "My father let me go abroad." },
      { jp: "{母|はは}は {子|こ}どもに すきな {服|ふく}を {着|き}させて います。", ro: "Haha wa kodomo ni suki na fuku o kisasete imasu.", en: "The mother lets her child wear any clothes they like." },
      { jp: "モチの ニュースは {町|まち}の {人|ひと}を びっくりさせました。", ro: "Mochi no nyūsu wa machi no hito o bikkuri sasemashita.", en: "The news about Mochi surprised the people in town." }
    ],
    drills: [
      { type: "fill", jp: "{父|ちち}は {私|わたし}に {車|くるま}を {運転|うんてん}させて ＿＿。", answer: "くれました", options: ["くれました", "いただきました", "もらいました", "やりました"], en: "My father let me drive the car." },
      { type: "fill", jp: "{親|おや}を ＿＿させました。", answer: "しんぱい", options: ["しんぱい", "{安心|あんしん}", "びっくり", "がっかり"], en: "I worried my parents." },
      { type: "fill", jp: "{友|とも}だちを ＿＿ しまいました。", answer: "{待|ま}たせて", options: ["{待|ま}たせて", "{待|ま}って", "{待|ま}ちて", "{待|ま}たれて"], en: "I ended up keeping my friend waiting." },
      { type: "choose", q: "Your teacher wrote the kanji for you. Which do you say?", answer: "{先生|せんせい}に {漢字|かんじ}を {書|か}いて いただきました。", options: ["{先生|せんせい}に {漢字|かんじ}を {書|か}いて いただきました。", "{先生|せんせい}に {漢字|かんじ}を {書|か}かせました。", "{先生|せんせい}を {漢字|かんじ}を {書|か}かせました。", "{先生|せんせい}に {漢字|かんじ}を {書|か}いて やりました。"] },
      { type: "choose", q: "What does 「こどもに すきな ものを たべさせます」 most likely mean?", answer: "Letting the child eat what they like", options: ["Letting the child eat what they like", "Forcing the child to eat what they hate", "Eating with the child", "The child is cooking"] },
      { type: "order", tiles: ["モチを", "びっくりさせて", "しまいました"], en: "I ended up startling Mochi." }
    ]
  },
  {
    id: "L148-4",
    lesson: 148,
    title: "V causative て + いただけませんか",
    meaning: "Could you please let me do X?",
    explain: "V causative て + いただけませんか is a very polite way to ask for permission to do something yourself.",
    examples: [
      { jp: "{来週|らいしゅう}の {月曜日|げつようび}に {休|やす}ませて いただけませんか。", ro: "Raishū no getsuyōbi ni yasumasete itadakemasen ka.", en: "Could you please let me take next Monday off?" },
      { jp: "ここで {写真|しゃしん}を とらせて いただけませんか。", ro: "Koko de shashin o torasete itadakemasen ka.", en: "Would you allow me to take a photo here?" },
      { jp: "この {電話|でんわ}を {使|つか}わせて いただけませんか。", ro: "Kono denwa o tsukawasete itadakemasen ka.", en: "Could you please let me use this phone?" }
    ],
    drills: [
      { type: "fill", jp: "{今日|きょう}は {早|はや}く ＿＿ いただけませんか。", answer: "{帰|かえ}らせて", options: ["{帰|かえ}らせて", "{帰|かえ}らせ", "{帰|かえ}れて", "{帰|かえ}られて"], en: "Could you let me go home early today?" },
      { type: "fill", jp: "{少|すこ}し {考|かんが}え＿＿ いただけませんか。", answer: "させて", options: ["させて", "せて", "られて", "ない"], en: "Could you let me think about it a little?" },
      { type: "fill", jp: "{一度|いちど} {社長|しゃちょう}に {会|あ}わせて ＿＿。", answer: "いただけませんか", options: ["いただけませんか", "くださいましたか", "やりませんか", "さしあげませんか"], en: "Could you let me meet the company president once?" },
      { type: "choose", q: "Which sentence asks your boss to let YOU speak?", answer: "{話|はな}させて いただけませんか。", options: ["{話|はな}させて いただけませんか。", "{話|はな}して いただけませんか。", "{話|はな}させて やりませんか。", "{話|はな}されて いただけませんか。"] },
      { type: "choose", q: "How is ～て いただけませんか different from ～させて いただけませんか?", answer: "The first: you do it. The second: let me do it.", options: ["The first: you do it. The second: let me do it.", "The first is past. The second is future.", "The first is casual. The second is rude.", "There is no difference."] },
      { type: "order", tiles: ["ここで", "{少|すこ}し", "{待|ま}たせて", "いただけませんか"], en: "Could you let me wait here for a little while?" }
    ]
  },

  // ───────────────────────── LESSON 49 ─────────────────────────
  {
    id: "L149-1",
    lesson: 149,
    title: "そんけいご: V れます / られます",
    meaning: "The simplest way to show respect for what someone does",
    explain: "そんけいご raises the person who does the action, and the simplest way to make it is the same form as the passive, V れます / られます.",
    examples: [
      { jp: "さとう{先生|せんせい}は {来週|らいしゅう} {東京|とうきょう}へ {行|い}かれます。", ro: "Satō-sensei wa raishū Tōkyō e ikaremasu.", en: "Professor Sato will go to Tokyo next week." },
      { jp: "{社長|しゃちょう}は {何時|なんじ}に {帰|かえ}られますか。", ro: "Shachō wa nanji ni kaeraremasu ka.", en: "What time will the company president go home?" },
      { jp: "{先生|せんせい}は {新|あたら}しい {本|ほん}を {書|か}かれました。", ro: "Sensei wa atarashii hon o kakaremashita.", en: "The professor has written a new book." }
    ],
    drills: [
      { type: "fill", jp: "{社長|しゃちょう}は {毎朝|まいあさ} {新聞|しんぶん}を ＿＿。", answer: "{読|よ}まれます", options: ["{読|よ}まれます", "{読|よ}まります", "{読|よ}まれて", "{読|よ}みられます"], en: "The company president reads the newspaper every morning." },
      { type: "fill", jp: "{先生|せんせい}は {明日|あした} {来|こ}＿＿ます。", answer: "られ", options: ["られ", "ろ", "させ", "せ"], en: "The teacher will come tomorrow." },
      { type: "fill", jp: "{先生|せんせい}は {今朝|けさ} パンを ＿＿。", answer: "{食|た}べられました", options: ["{食|た}べられました", "{食|た}べれました", "{食|た}べせました", "{食|た}べらせました"], en: "The teacher ate bread this morning." },
      { type: "choose", q: "What is the honorific れます form of します?", answer: "されます", options: ["されます", "しられます", "さられます", "しれます"] },
      { type: "choose", q: "Who can you use this form for?", answer: "Your teacher", options: ["Your teacher", "Yourself", "Your younger brother", "Your dog"] },
      { type: "order", tiles: ["{社長|しゃちょう}は", "{先週|せんしゅう}", "インドへ", "{行|い}かれました"], en: "The company president went to India last week." }
    ]
  },
  {
    id: "L149-2",
    lesson: 149,
    title: "そんけいご: お V ます-stem + に なります",
    meaning: "A more respectful way to describe an action",
    explain: "お + ます-stem + に なります is more respectful than V れます, though short verbs such as みます and ねます have special forms instead.",
    examples: [
      { jp: "さとう{先生|せんせい}は この {本|ほん}を お{読|よ}みに なりましたか。", ro: "Satō-sensei wa kono hon o oyomi ni narimashita ka.", en: "Has Professor Sato read this book?" },
      { jp: "{社長|しゃちょう}は {三時|さんじ}に お{出|で}かけに なります。", ro: "Shachō wa sanji ni odekake ni narimasu.", en: "The company president will go out at three." },
      { jp: "{先生|せんせい}は {何時|なんじ}に お{帰|かえ}りに なりますか。", ro: "Sensei wa nanji ni okaeri ni narimasu ka.", en: "What time will the teacher be going home?" }
    ],
    drills: [
      { type: "fill", jp: "{先生|せんせい}は もう ＿＿に なりました。", answer: "お{帰|かえ}り", options: ["お{帰|かえ}り", "ご{帰|かえ}り", "お{帰|かえ}る", "お{帰|かえ}って"], en: "The teacher has already gone home." },
      { type: "fill", jp: "{社長|しゃちょう}は この {車|くるま}を お{使|つか}い＿＿ なります。", answer: "に", options: ["に", "を", "で", "が"], en: "The company president uses this car." },
      { type: "fill", jp: "この {手紙|てがみ}は さとう{先生|せんせい}が ＿＿に なりました。", answer: "お{書|か}き", options: ["お{書|か}き", "お{書|か}く", "お{書|か}いて", "ご{書|か}き"], en: "Professor Sato wrote this letter." },
      { type: "choose", q: "Which verb can't use お～に なります?", answer: "みます", options: ["みます", "かえります", "よみます", "まちます"] },
      { type: "choose", q: "Which form is the most respectful?", answer: "お{読|よ}みに なります", options: ["お{読|よ}みに なります", "{読|よ}まれます", "{読|よ}みます", "{読|よ}む"] },
      { type: "order", tiles: ["{社長|しゃちょう}は", "もう", "お{出|で}かけに", "なりました"], en: "The company president has already gone out." }
    ]
  },
  {
    id: "L149-3",
    lesson: 149,
    title: "そんけいご: special verbs",
    meaning: "Verbs with their own honorific word",
    explain: "The most common verbs have their own honorific words, such as いらっしゃいます and めしあがります, and these must be memorised.",
    examples: [
      { jp: "{先生|せんせい}は {今|いま} {研究室|けんきゅうしつ}に いらっしゃいます。", ro: "Sensei wa ima kenkyūshitsu ni irasshaimasu.", en: "The professor is in the research room now." },
      { jp: "{社長|しゃちょう}は {来月|らいげつ} インドへ いらっしゃいます。", ro: "Shachō wa raigetsu Indo e irasshaimasu.", en: "The company president will go to India next month." },
      { jp: "この {写真|しゃしん}を ごらんに なりましたか。", ro: "Kono shashin o goran ni narimashita ka.", en: "Have you seen this photo?" }
    ],
    drills: [
      { type: "fill", jp: "{先生|せんせい}は {今|いま} {教室|きょうしつ}に ＿＿。", answer: "いらっしゃいます", options: ["いらっしゃいます", "めしあがります", "おっしゃいます", "なさいます"], en: "The teacher is in the classroom now." },
      { type: "fill", jp: "{先生|せんせい}は {何|なん}と ＿＿か。", answer: "おっしゃいました", options: ["おっしゃいました", "いらっしゃいました", "めしあがりました", "ごらんに なりました"], en: "What did the teacher say?" },
      { type: "fill", jp: "{社長|しゃちょう}は ゴルフを ＿＿。", answer: "なさいます", options: ["なさいます", "めしあがります", "おっしゃいます", "ごぞんじです"], en: "The company president plays golf." },
      { type: "choose", q: "What is the honorific form of たべます and のみます?", answer: "めしあがります", options: ["めしあがります", "いただきます", "ごらんに なります", "いたします"] },
      { type: "choose", q: "What is the ます form of いらっしゃる?", answer: "いらっしゃいます", options: ["いらっしゃいます", "いらっしゃります", "いらっしゃらます", "いらっします"] },
      { type: "order", tiles: ["{社長|しゃちょう}は", "もう", "お{昼|ひる}ごはんを", "めしあがりました"], en: "The company president has already had lunch." }
    ]
  },
  {
    id: "L149-4",
    lesson: 149,
    title: "お V ます-stem + ください / ご N + ください",
    meaning: "Polite requests in shops, stations and notices",
    explain: "お + ます-stem + ください, or ご + する-noun + ください, is a very polite request you often hear from staff.",
    examples: [
      { jp: "こちらで お{待|ま}ち ください。", ro: "Kochira de omachi kudasai.", en: "Please wait here." },
      { jp: "どうぞ お{入|はい}り ください。", ro: "Dōzo ohairi kudasai.", en: "Please come in." },
      { jp: "{足|あし}もとに ご{注意|ちゅうい} ください。", ro: "Ashimoto ni gochūi kudasai.", en: "Please watch your step." }
    ],
    drills: [
      { type: "fill", jp: "{少|すこ}し ＿＿ ください。", answer: "お{待|ま}ち", options: ["お{待|ま}ち", "お{待|ま}って", "ご{待|ま}ち", "{待|ま}ち"], en: "Please wait a moment." },
      { type: "fill", jp: "{電車|でんしゃ}に ＿＿ ください。", answer: "ご{注意|ちゅうい}", options: ["ご{注意|ちゅうい}", "お{注意|ちゅうい}", "{注意|ちゅうい}に", "{注意|ちゅうい}の"], en: "Please watch out for trains." },
      { type: "fill", jp: "{明日|あした} {電話|でんわ}で ＿＿ ください。", answer: "ごれんらく", options: ["ごれんらく", "おれんらく", "れんらくに", "れんらくの"], en: "Please contact us by phone tomorrow." },
      { type: "choose", q: "Which is correct for a polite 'please look'?", answer: "ごらん ください。", options: ["ごらん ください。", "お{見|み} ください。", "お{見|み}に ください。", "ご{見|み} ください。"] },
      { type: "choose", q: "Which is correct for a polite 'please sit down'?", answer: "おかけ ください。", options: ["おかけ ください。", "ごかけ ください。", "おかけて ください。", "かけ ください。"] },
      { type: "order", tiles: ["どうぞ", "こちらの", "いすに", "おかけ ください"], en: "Please have a seat on this chair." }
    ]
  },
  {
    id: "L149-5",
    lesson: 149,
    title: "お / ご + noun or adjective",
    meaning: "Polite words for the other person's things",
    explain: "お or ご before a noun or adjective shows respect for the other person's things or state, and you never use it for your own family.",
    examples: [
      { jp: "お{名前|なまえ}を {教|おし}えて ください。", ro: "Onamae o oshiete kudasai.", en: "Please tell me your name." },
      { jp: "ご{家族|かぞく}は お{元気|げんき}ですか。", ro: "Gokazoku wa ogenki desu ka.", en: "Is your family well?" },
      { jp: "{先生|せんせい}は おいそがしいですから、{後|あと}で {来|き}ましょう。", ro: "Sensei wa oisogashii desu kara, ato de kimashō.", en: "The teacher is busy, so let's come back later." }
    ],
    drills: [
      { type: "fill", jp: "＿＿{家族|かぞく}は {何人|なんにん}ですか。", answer: "ご", options: ["ご", "お", "さま", "さん"], en: "How many people are in your family?" },
      { type: "fill", jp: "＿＿{名前|なまえ}は {何|なん}ですか。", answer: "お", options: ["お", "ご", "さま", "さん"], en: "What is your name?" },
      { type: "fill", jp: "{明日|あした} ＿＿{電話|でんわ}を ください。", answer: "お", options: ["お", "ご", "さま", "さん"], en: "Please give me a call tomorrow." },
      { type: "choose", q: "Which of these words is correct?", answer: "おじかん", options: ["おじかん", "おかぞく", "おりょうしん", "ごげんき"] },
      { type: "choose", q: "How do you talk about your own family?", answer: "{私|わたし}の {家族|かぞく}", options: ["{私|わたし}の {家族|かぞく}", "{私|わたし}の ご{家族|かぞく}", "{私|わたし}の お{家族|かぞく}", "{私|わたし}の {家族|かぞく}さま"] },
      { type: "order", tiles: ["{先生|せんせい}の", "ご{家族|かぞく}は", "お{元気|げんき}", "ですか"], en: "Is your family well, teacher?" }
    ]
  },

  // ───────────────────────── LESSON 50 ─────────────────────────
  {
    id: "L150-1",
    lesson: 150,
    title: "けんじょうご: お V ます-stem + します / ご N + します",
    meaning: "Humbly doing X for someone above you",
    explain: "けんじょうご lowers your own side, and お + ます-stem + します or ご + する-noun + します is used for something you do for the other person.",
    examples: [
      { jp: "{先生|せんせい}、{駅|えき}まで お{送|おく}りします。", ro: "Sensei, eki made ookuri shimasu.", en: "Professor, let me see you to the station." },
      { jp: "{写真|しゃしん}を お{見|み}せします。", ro: "Shashin o omise shimasu.", en: "Let me show you the photo." },
      { jp: "{町|まち}を ごあんないします。", ro: "Machi o goannai shimasu.", en: "I'll show you around town." }
    ],
    drills: [
      { type: "fill", jp: "かさを ＿＿しましょうか。", answer: "お{貸|か}し", options: ["お{貸|か}し", "ご{貸|か}し", "お{貸|か}して", "{貸|か}し"], en: "Shall I lend you an umbrella?" },
      { type: "fill", jp: "{友|とも}だちを ＿＿します。", answer: "ごしょうかい", options: ["ごしょうかい", "おしょうかい", "しょうかいに", "しょうかいで"], en: "Let me introduce my friend." },
      { type: "fill", jp: "{明日|あした} ＿＿します。", answer: "ごれんらく", options: ["ごれんらく", "おれんらく", "れんらくに", "れんらくで"], en: "I will contact you tomorrow." },
      { type: "choose", q: "Which one is humble?", answer: "お{持|も}ちします", options: ["お{持|も}ちします", "お{持|も}ちに なります", "お{持|も}ち ください", "{持|も}って いらっしゃいます"] },
      { type: "choose", q: "You are just going home, and this isn't for anyone else. Which is right?", answer: "{私|わたし}は {帰|かえ}ります。", options: ["{私|わたし}は {帰|かえ}ります。", "{私|わたし}は お{帰|かえ}りします。", "{私|わたし}は お{帰|かえ}りに なります。", "{私|わたし}は {帰|かえ}られます。"] },
      { type: "order", tiles: ["{先生|せんせい}に", "{本|ほん}を", "お{貸|か}し", "します"], en: "I'll lend the book to the teacher." }
    ]
  },
  {
    id: "L150-2",
    lesson: 150,
    title: "けんじょうご: special verbs",
    meaning: "Verbs with their own humble word",
    explain: "Common verbs have their own humble words, such as まいります, おります and もうします, which you use for yourself and your own side.",
    examples: [
      { jp: "カランと もうします。インドから まいりました。", ro: "Karan to mōshimasu. Indo kara mairimashita.", en: "My name is Karan. I come from India." },
      { jp: "{明日|あした} {三時|さんじ}に うかがいます。", ro: "Ashita sanji ni ukagaimasu.", en: "I will call on you at three tomorrow." },
      { jp: "{父|ちち}は {今|いま} {東京|とうきょう}に おります。", ro: "Chichi wa ima Tōkyō ni orimasu.", en: "My father is in Tokyo now." }
    ],
    drills: [
      { type: "fill", jp: "はじめまして。カランと ＿＿。", answer: "もうします", options: ["もうします", "おっしゃいます", "なさいます", "いらっしゃいます"], en: "How do you do? My name is Karan." },
      { type: "fill", jp: "{明日|あした} {会社|かいしゃ}へ ＿＿。", answer: "まいります", options: ["まいります", "いらっしゃいます", "おります", "なさいます"], en: "I will come to the company tomorrow." },
      { type: "fill", jp: "その {話|はなし}は ＿＿ おります。", answer: "ぞんじて", options: ["ぞんじて", "ごぞんじ", "ごらんに", "なさって"], en: "I know about that." },
      { type: "choose", q: "What is the humble form of たべます?", answer: "いただきます", options: ["いただきます", "めしあがります", "いたします", "まいります"] },
      { type: "choose", q: "What is the humble form of あいます?", answer: "おめに かかります", options: ["おめに かかります", "ごらんに なります", "おあいに なります", "いらっしゃいます"] },
      { type: "order", tiles: ["{先生|せんせい}の", "{写真|しゃしん}を", "はいけん", "しました"], en: "I saw the teacher's photo." }
    ]
  },
  {
    id: "L150-3",
    lesson: 150,
    title: "ございます / でございます / よろしいでしょうか",
    meaning: "Very polite words for shops and announcements",
    explain: "ございます replaces あります, で ございます replaces です and よろしいでしょうか replaces いいですか, and all three simply make your speech more polite.",
    examples: [
      { jp: "トイレは あちらに ございます。", ro: "Toire wa achira ni gozaimasu.", en: "The toilet is over there." },
      { jp: "つぎは {東京|とうきょう}で ございます。", ro: "Tsugi wa Tōkyō de gozaimasu.", en: "The next stop is Tokyo." },
      { jp: "お{名前|なまえ}を うかがっても よろしいでしょうか。", ro: "Onamae o ukagatte mo yoroshii deshō ka.", en: "May I ask your name?" }
    ],
    drills: [
      { type: "fill", jp: "{電話|でんわ}は あちらに ＿＿。", answer: "ございます", options: ["ございます", "で ございます", "いらっしゃいます", "いたします"], en: "The telephone is over there." },
      { type: "fill", jp: "こちらが {新|あたら}しい {車|くるま}＿＿。", answer: "で ございます", options: ["で ございます", "に ございます", "に おります", "を ございます"], en: "This is the new car." },
      { type: "fill", jp: "この {電話|でんわ}を {使|つか}っても ＿＿でしょうか。", answer: "よろしい", options: ["よろしい", "よろしく", "ございます", "いたします"], en: "May I use this phone?" },
      { type: "choose", q: "What is the very polite form of あります?", answer: "ございます", options: ["ございます", "おります", "いらっしゃいます", "まいります"] },
      { type: "choose", q: "What is the very polite form of です?", answer: "で ございます", options: ["で ございます", "で おります", "で まいります", "で いたします"] },
      { type: "order", tiles: ["お{飲|の}み{物|もの}は", "あちらに", "ございます"], en: "The drinks are over there." }
    ]
  },
  {
    id: "L150-4",
    lesson: 150,
    title: "そんけいご or けんじょうご?",
    meaning: "Raising the other person or lowering yourself",
    explain: "Use そんけいご for what the other person does and けんじょうご for what you or your own group does, and treat your own company as your side with outsiders.",
    examples: [
      { jp: "{先生|せんせい}は {明日|あした} いらっしゃいますか。", ro: "Sensei wa ashita irasshaimasu ka.", en: "Will the teacher be coming tomorrow?" },
      { jp: "はい、{私|わたし}も まいります。", ro: "Hai, watashi mo mairimasu.", en: "Yes, I will come too." },
      { jp: "{社長|しゃちょう}の やまだは {今|いま} {会社|かいしゃ}に おりません。", ro: "Shachō no Yamada wa ima kaisha ni orimasen.", en: "Our president, Yamada, isn't in the office right now." }
    ],
    drills: [
      { type: "fill", jp: "{先生|せんせい}は {何|なに}を ＿＿か。", answer: "めしあがります", options: ["めしあがります", "いただきます", "いたします", "まいります"], en: "What will the teacher have?" },
      { type: "fill", jp: "{私|わたし}は コーヒーを ＿＿。", answer: "いただきます", options: ["いただきます", "めしあがります", "なさいます", "いらっしゃいます"], en: "I'll have coffee." },
      { type: "fill", jp: "{先生|せんせい}が {私|わたし}の {作文|さくぶん}を ＿＿。", answer: "ごらんに なりました", options: ["ごらんに なりました", "はいけんしました", "いたしました", "まいりました"], en: "The teacher looked at my essay." },
      { type: "choose", q: "A customer phones and asks for your boss Yamada, who is out. Which do you say?", answer: "やまだは {今|いま} おりません。", options: ["やまだは {今|いま} おりません。", "やまださんは {今|いま} いらっしゃいません。", "やまだは {今|いま} いらっしゃいません。", "やまださまは {今|いま} おりません。"] },
      { type: "choose", q: "Who does そんけいご raise?", answer: "The other person", options: ["The other person", "You", "Your own family", "Nobody"] },
      { type: "order", tiles: ["{私|わたし}が", "{先生|せんせい}の", "{本|ほん}を", "はいけんしました"], en: "I read the teacher's book." }
    ]
  }
]);

window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {

  // ───────────── Lesson 38 ─────────────
  "L138-1": {
    formula: ["V plain + のは + adjective"],
    points: ["の turns a whole verb phrase into a noun.", "Use the plain form before の, never the ます form.", "The adjective after は says what the action is like."],
    tables: [
      {
        title: "Adjectives that often follow ～のは",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["たのしい", "fun"],
          ["おもしろい", "interesting"],
          ["むずかしい", "difficult"],
          ["かんたん", "easy"],
          ["たいへん", "hard work"],
          ["きけん", "dangerous"],
          ["きもちが いい", "pleasant"],
          ["からだに いい", "good for your health"]
        ]
      }
    ],
    mistakes: [
      { bad: "まいあさ はしりますのは いいです。", good: "まいあさ はしるのは いいです。", why: "The verb before の must be plain." },
      { bad: "はしるは たのしいです。", good: "はしるのは たのしいです。", why: "A verb can't take は directly. It needs の first." }
    ],
    tip: "Think of ～の as the English -ing: running, travelling, talking."
  },
  "L138-2": {
    formula: ["N は + V plain + のが + すき / きらい", "N は + V plain + のが + じょうず / へた", "N は + V plain + のが + はやい / おそい"],
    points: ["These words take が, so the verb phrase takes のが.", "Use the plain form before の.", "はやい and おそい say how fast someone does something."],
    tables: [
      {
        title: "Words that take ～のが",
        headers: ["Japanese", "Meaning", "Example"],
        rows: [
          ["すき", "like", "はしるのが すきです"],
          ["きらい", "dislike", "あるくのが きらいです"],
          ["じょうず", "good at", "うたうのが じょうずです"],
          ["へた", "bad at", "かくのが へたです"],
          ["はやい", "quick at", "たべるのが はやいです"],
          ["おそい", "slow at", "よむのが おそいです"]
        ]
      }
    ],
    mistakes: [
      { bad: "りょうりを つくるのを すきです。", good: "りょうりを つくるのが すきです。", why: "すき takes が, not を." },
      { bad: "りょうりを つくるが じょうずです。", good: "りょうりを つくるのが じょうずです。", why: "The verb needs の before が." }
    ],
    tip: "If you would say N が すきです, then say V のが すきです."
  },
  "L138-3": {
    formula: ["V plain + のを わすれました"],
    points: ["N を わすれました means you left a thing behind.", "V のを わすれました means you forgot to do something.", "Use the dictionary form before の, even for a past event."],
    tables: [
      {
        title: "Forgetting a thing or an action",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["かさを わすれました", "I left my umbrella behind."],
          ["かさを もって くるのを わすれました", "I forgot to bring an umbrella."],
          ["メールを わすれました", "I forgot about the email."],
          ["メールを おくるのを わすれました", "I forgot to send the email."]
        ]
      }
    ],
    mistakes: [
      { bad: "でんきを けしたのを わすれました。", good: "でんきを けすのを わすれました。", why: "You never did it, so use the dictionary form." },
      { bad: "でんきを けすを わすれました。", good: "でんきを けすのを わすれました。", why: "A verb needs の before を." }
    ],
    tip: "Before you leave the house, ask yourself: ～のを わすれて いませんか。"
  },
  "L138-4": {
    formula: ["Plain + のを しって いますか", "N / な-adjective + な + のを しって いますか"],
    points: ["The news goes in the plain form before の.", "The person in the news takes が, not は.", "Nouns and な-adjectives need な before の.", "If you just learned it, say しりませんでした."],
    tables: [
      {
        title: "Plain forms before の",
        headers: ["Type", "Word", "Before の"],
        rows: [
          ["Verb", "いく", "いくの"],
          ["Verb, past", "いった", "いったの"],
          ["I-adjective", "たかい", "たかいの"],
          ["Na-adjective", "ひま", "ひまなの"],
          ["Noun", "やすみ", "やすみなの"]
        ]
      }
    ],
    mistakes: [
      { bad: "あしたが やすみのを しって いますか。", good: "あしたが やすみなのを しって いますか。", why: "A noun needs な before の." },
      { bad: "A: しって いますか。 B: いいえ、しって いません。", good: "A: しって いますか。 B: いいえ、しりません。", why: "The negative answer is always しりません." }
    ],
    tip: "Say しりませんでした when you have only just heard the news."
  },
  "L138-5": {
    formula: ["Plain + のは + N です"],
    points: ["The fact you want to stress goes last.", "の replaces a word like person, place or time.", "The doer takes が inside the ～のは part."],
    tables: [
      {
        title: "Same fact, different focus",
        headers: ["Japanese", "Focus"],
        rows: [
          ["モチは きょねん うまれました", "Neutral statement"],
          ["モチが うまれたのは きょねんです", "When"],
          ["モチが うまれたのは この えきです", "Where"],
          ["きょねん うまれたのは モチです", "Who"]
        ]
      }
    ],
    mistakes: [
      { bad: "カランさんは きたのは きょねんです。", good: "カランさんが きたのは きょねんです。", why: "The doer inside the clause takes が." },
      { bad: "モチが すきのは さかなです。", good: "モチが すきなのは さかなです。", why: "A な-adjective keeps な before の." }
    ],
    tip: "Build it backwards: start with the fact you want to stress, then add the rest before ～のは."
  },

  // ───────────── Lesson 39 ─────────────
  "L139-1": {
    formula: ["V て, feeling or result", "V なくて, feeling or result", "いA くて / なA で, feeling or result"],
    points: ["The first half causes the second half.", "The second half is a feeling, a state or something that just happened.", "Requests, plans and invitations can't follow this ～て.", "Negative verbs use なくて, not ないで."],
    tables: [
      {
        title: "Making the reason form",
        headers: ["Type", "Word", "Reason form"],
        rows: [
          ["Verb", "ききます", "きいて"],
          ["Verb, negative", "きません", "こなくて"],
          ["Potential", "あえます", "あえて"],
          ["I-adjective", "むずかしい", "むずかしくて"],
          ["I-adjective, negative", "よくない", "よくなくて"],
          ["Na-adjective", "ふくざつ", "ふくざつで"]
        ]
      },
      {
        title: "What can follow",
        headers: ["Second half", "Example", "OK?"],
        rows: [
          ["Feeling", "きいて、びっくりしました", "Yes"],
          ["State", "あつくて、ねむれません", "Yes"],
          ["Request", "あつくて、あけて ください", "No"],
          ["Plan", "あつくて、やすみたいです", "No"]
        ]
      }
    ],
    mistakes: [
      { bad: "あつくて、まどを あけて ください。", good: "あついので、まどを あけて ください。", why: "A request can't follow the reason ～て." },
      { bad: "こないで、しんぱいしました。", good: "こなくて、しんぱいしました。", why: "Use なくて to give a reason." }
    ],
    tip: "Feelings to pair with ～て: びっくりしました, あんしんしました, がっかりしました, こまりました."
  },
  "L139-2": {
    formula: ["N で + result"],
    points: ["N is an event or a condition, not a person.", "The second half is something that happened or a state.", "Requests and plans can't follow this で."],
    tables: [
      {
        title: "Nouns that often take this で",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["じしん", "earthquake"],
          ["たいふう", "typhoon"],
          ["かじ", "fire"],
          ["じこ", "accident"],
          ["びょうき", "illness"],
          ["かぜ", "a cold"],
          ["ゆき", "snow"],
          ["あめ", "rain"]
        ]
      }
    ],
    mistakes: [
      { bad: "たいふうで、いえに いて ください。", good: "たいふうなので、いえに いて ください。", why: "A request can't follow で. Use ので." },
      { bad: "じしんに ビルが たおれました。", good: "じしんで ビルが たおれました。", why: "A cause takes で, not に." }
    ],
    tip: "Read this で as 'because of' whenever an event noun comes before it."
  },
  "L139-3": {
    formula: ["V / いA plain + ので", "なA / N + な + ので"],
    points: ["ので sounds softer and more polite than から.", "It often gives an excuse or explains a request.", "Nouns and な-adjectives take な, not だ.", "Unlike ～て, requests can follow ので."],
    tables: [
      {
        title: "Forms before ので",
        headers: ["Type", "Word", "With ので"],
        rows: [
          ["Verb", "あります", "あるので"],
          ["Verb, past", "ひきました", "ひいたので"],
          ["Verb, negative", "ありません", "ないので"],
          ["I-adjective", "いたい", "いたいので"],
          ["Na-adjective", "ゆうめい", "ゆうめいなので"],
          ["Noun", "やすみ", "やすみなので"]
        ]
      },
      {
        title: "Three ways to give a reason",
        headers: ["Pattern", "Feel", "Request can follow?"],
        rows: [
          ["から", "Direct, firm", "Yes"],
          ["ので", "Soft, polite", "Yes"],
          ["て", "Just cause and effect", "No"]
        ]
      }
    ],
    mistakes: [
      { bad: "やすみだので、でかけます。", good: "やすみなので、でかけます。", why: "Use な before ので, not だ." },
      { bad: "ひまので、えいがを みます。", good: "ひまなので、えいがを みます。", why: "A な-adjective keeps な before ので." }
    ],
    tip: "Use ので with your boss and から with your friends."
  },

  // ───────────── Lesson 40 ─────────────
  "L140-1": {
    formula: ["Question word + V / いA plain + か", "Question word + なA / N + か"],
    points: ["The inner question uses plain forms, not です or ます.", "Nouns and な-adjectives drop だ before か.", "A comma usually follows か.", "Next comes a verb like しりません, しらべます or ききます."],
    tables: [
      {
        title: "Direct question to inner question",
        headers: ["Type", "Direct question", "Inside a sentence"],
        rows: [
          ["Verb", "どこへ いきますか", "どこへ いくか"],
          ["Verb, past", "なにを かいましたか", "なにを かったか"],
          ["I-adjective", "どれが いいですか", "どれが いいか"],
          ["Na-adjective", "どこが べんりですか", "どこが べんりか"],
          ["Noun", "テストは いつですか", "テストは いつか"]
        ]
      },
      {
        title: "Verbs that often follow",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["しって いますか", "Do you know?"],
          ["わかりません", "I don't know."],
          ["おしえて ください", "Please tell me."],
          ["しらべます", "look up"],
          ["たしかめます", "check"],
          ["かんがえます", "think about"],
          ["ききます", "ask"]
        ]
      }
    ],
    mistakes: [
      { bad: "どこへ いきますか、しりません。", good: "どこへ いくか、しりません。", why: "The inner question must be plain." },
      { bad: "だれが くるを しりません。", good: "だれが くるか、しりません。", why: "A question inside a sentence ends in か, not を." }
    ],
    tip: "Change the direct question to plain form, keep か, then add the main verb."
  },
  "L140-2": {
    formula: ["V / いA plain + か どうか", "なA / N + か どうか"],
    points: ["か どうか means whether or not.", "Use it only when there is no question word.", "Nouns and な-adjectives drop だ here too."],
    tables: [
      {
        title: "か or か どうか?",
        headers: ["Direct question", "Inside a sentence", "Pattern"],
        rows: [
          ["いつ きますか", "いつ くるか", "Question word"],
          ["だれが きますか", "だれが くるか", "Question word"],
          ["きますか", "くるか どうか", "Yes or no"],
          ["おいしいですか", "おいしいか どうか", "Yes or no"],
          ["やすみですか", "やすみか どうか", "Yes or no"]
        ]
      }
    ],
    mistakes: [
      { bad: "どこへ いくか どうか、しりません。", good: "どこへ いくか、しりません。", why: "A question word uses か alone." },
      { bad: "やすみだか どうか、しりません。", good: "やすみか どうか、しりません。", why: "Drop だ after a noun." }
    ],
    tip: "Look for a question word first: if there is one, use か. If not, use か どうか."
  },
  "L140-3": {
    formula: ["V て + みます"],
    points: ["Use it when you try something to see the result.", "みます conjugates as a normal Group 2 verb.", "Write みます in kana, not kanji."],
    tables: [
      {
        title: "Forms of ～て みます",
        headers: ["Form", "Example", "Meaning"],
        rows: [
          ["ます", "たべて みます", "I'll try eating it."],
          ["ました", "たべて みました", "I tried eating it."],
          ["たいです", "たべて みたいです", "I'd like to try eating it."],
          ["て ください", "たべて みて ください", "Please try eating it."],
          ["ても いいですか", "たべて みても いいですか", "May I try it?"]
        ]
      }
    ],
    mistakes: [
      { bad: "たべるて みます。", good: "たべて みます。", why: "Use the て-form before みます." },
      { bad: "たべみます。", good: "たべて みます。", why: "The て cannot be dropped." }
    ],
    tip: "Great for shops: ～て みても いいですか asks to try something on or out."
  },
  "L140-4": {
    formula: ["いA (drop い) + さ"],
    points: ["さ turns an adjective into a measurable noun.", "Ask about it with どのくらい or なん + unit.", "いい changes to よさ."],
    tables: [
      {
        title: "い-adjective to noun",
        headers: ["Adjective", "Noun", "Meaning"],
        rows: [
          ["たかい", "たかさ", "height"],
          ["ながい", "ながさ", "length"],
          ["おもい", "おもさ", "weight"],
          ["ひろい", "ひろさ", "area"],
          ["おおきい", "おおきさ", "size"],
          ["ふかい", "ふかさ", "depth"],
          ["はやい", "はやさ", "speed"],
          ["いい", "よさ", "goodness"]
        ]
      }
    ],
    mistakes: [
      { bad: "やまの たかいは どのくらいですか。", good: "やまの たかさは どのくらいですか。", why: "A topic must be a noun, so use さ." },
      { bad: "おもいさ", good: "おもさ", why: "Drop the い before adding さ." }
    ],
    tip: "Pair it with units you already know: ～キロ, ～グラム, ～センチ, ～メートル."
  },

  // ───────────── Lesson 41 ─────────────
  "L141-1": {
    formula: ["N1 は + N2 に + N3 を + いただきます", "N1 が + わたしに + N3 を + くださいます"],
    points: ["Receiver is the subject of いただきます.", "Giver is the subject of くださいます.", "The ます form is くださいます, not くださります."],
    tables: [
      {
        title: "Everyday verb and its partner",
        headers: ["Everyday", "Partner", "Used when"],
        rows: [
          ["もらいます", "いただきます", "I receive from someone above me."],
          ["くれます", "くださいます", "Someone above me gives to me."],
          ["あげます", "さしあげます", "I give to someone above me."],
          ["あげます", "やります", "I give to someone below me."]
        ]
      },
      {
        title: "Forms of くださいます",
        headers: ["Form", "Japanese"],
        rows: [
          ["Polite", "くださいます"],
          ["Dictionary", "くださる"],
          ["Negative", "くださらない"],
          ["Past", "くださった"],
          ["Te-form", "くださって"]
        ]
      }
    ],
    mistakes: [
      { bad: "せんせいは わたしに ほんを いただきました。", good: "せんせいは わたしに ほんを くださいました。", why: "The giver is the subject, so use くださいます." },
      { bad: "せんせいが ほんを くださります。", good: "せんせいが ほんを くださいます。", why: "The ます form is irregular." }
    ],
    tip: "Ask who is the subject: receiver takes いただきます, giver takes くださいます."
  },
  "L141-2": {
    formula: ["N1 に + N2 を + やります"],
    points: ["Use it downward: younger family, animals and plants.", "Never use it for someone above you.", "あげます is softer and very common for pets now."],
    tables: [
      {
        title: "Who receives?",
        headers: ["Receiver", "Verb"],
        rows: [
          ["せんせい", "さしあげます"],
          ["ともだち", "あげます"],
          ["いもうと", "やります"],
          ["いぬ", "やります"],
          ["はな", "やります"]
        ]
      }
    ],
    mistakes: [
      { bad: "せんせいに プレゼントを やりました。", good: "せんせいに プレゼントを さしあげました。", why: "やります looks down on the receiver." }
    ],
    tip: "Learn 花に 水を やります and ねこに えさを やります as set phrases."
  },
  "L141-3": {
    formula: ["わたしは + N に + V て + いただきます"],
    points: ["The subject is me, the receiver of the kindness.", "The helper takes に.", "It shows thanks to someone above you."],
    tables: [
      {
        title: "Same event, two views",
        headers: ["Japanese", "Subject"],
        rows: [
          ["わたしは せんせいに おしえて いただきました", "Me"],
          ["せんせいが わたしに おしえて くださいました", "The teacher"]
        ]
      }
    ],
    mistakes: [
      { bad: "せんせいが おしえて いただきました。", good: "せんせいに おしえて いただきました。", why: "The helper takes に, not が." }
    ],
    tip: "It's hard to translate word for word. Think 'I humbly received your doing this.'"
  },
  "L141-4": {
    formula: ["N が + わたしに + V て + くださいます", "V て + くださいませんか"],
    points: ["The kind person is the subject and takes が.", "A negative question sounds softer than ～て ください.", "くださいませんか is a request, not a real negative."],
    tables: [
      {
        title: "Requests from direct to polite",
        headers: ["Japanese", "Feel"],
        rows: [
          ["まって", "Casual"],
          ["まって ください", "Polite instruction"],
          ["まって くださいませんか", "Polite request"],
          ["まって いただけませんか", "Very polite request"]
        ]
      }
    ],
    mistakes: [
      { bad: "せんせいに おしえて くださいました。", good: "せんせいが おしえて くださいました。", why: "With くださいます the giver takes が." }
    ],
    tip: "When you are asking for a favour, ～て くださいませんか is always safe."
  },
  "L141-5": {
    formula: ["N に + V て + やります"],
    points: ["It is the plain cousin of ～て あげます.", "Use it for your children, younger siblings and pets.", "Avoid it for anyone above you, even as a kindness."],
    tables: [
      {
        title: "The full map of favours",
        headers: ["Direction", "Everyday", "Other person is above you", "Other person is below you"],
        rows: [
          ["Someone does it for me", "～て くれます", "～て くださいます", "—"],
          ["I receive the favour", "～て もらいます", "～て いただきます", "—"],
          ["I do it for someone", "～て あげます", "～て さしあげます", "～て やります"]
        ]
      }
    ],
    mistakes: [
      { bad: "せんせいを えきまで おくって やりました。", good: "せんせいを えきまで おおくりしました。", why: "やります talks down. Use humble language for a teacher." }
    ],
    tip: "Before you say ～て やります, check the receiver is younger than you or is a pet."
  },

  // ───────────── Lesson 42 ─────────────
  "L142-1": {
    formula: ["V dictionary + ために, V"],
    points: ["ために marks a goal you chose yourself.", "Both halves have the same doer.", "Potential and negative verbs use ように instead."],
    tables: [
      {
        title: "ために or ように?",
        headers: ["Pattern", "Verb before it", "Example"],
        rows: [
          ["ために", "Deliberate action", "かうために"],
          ["ために", "Deliberate action", "はいるために"],
          ["ように", "Potential verb", "かえるように"],
          ["ように", "Negative verb", "わすれないように"],
          ["ように", "Natural event", "なおるように"]
        ]
      }
    ],
    mistakes: [
      { bad: "かんじが よめるために、べんきょうします。", good: "かんじが よめるように、べんきょうします。", why: "A potential verb takes ように." },
      { bad: "かいますために、はたらきます。", good: "かうために、はたらきます。", why: "Use the dictionary form." }
    ],
    tip: "Ask yourself: can I simply decide to do this? If yes, use ために."
  },
  "L142-2": {
    formula: ["N の + ために"],
    points: ["After a noun, ために means for the good of it.", "の always joins the noun to ために.", "It works for people and for aims."],
    tables: [
      {
        title: "Common nouns before の ために",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["かぞくの ために", "for my family"],
          ["こどもの ために", "for my children"],
          ["けんこうの ために", "for my health"],
          ["しけんの ために", "for the exam"],
          ["しょうらいの ために", "for the future"]
        ]
      }
    ],
    mistakes: [
      { bad: "かぞくに ために はたらきます。", good: "かぞくの ために はたらきます。", why: "A noun joins ために with の." }
    ],
    tip: "Use it in a toast or a speech: みなさんの ために, for all of you."
  },
  "L142-3": {
    formula: ["V dictionary + のに + つかいます / べんりです / いいです", "V dictionary + のに + かかります / ひつようです", "N + に + つかいます / べんりです / いいです"],
    points: ["Verbs take のに. Nouns take just に.", "The verb before のに is always in the dictionary form.", "It tells you what a thing is for or what a task costs."],
    tables: [
      {
        title: "What follows のに",
        headers: ["Ending", "Example", "Meaning"],
        rows: [
          ["つかいます", "きるのに つかいます", "We use it for cutting."],
          ["べんりです", "はこぶのに べんりです", "It's handy for carrying."],
          ["いいです", "よむのに いいです", "It's good for reading."],
          ["かかります", "いくのに かかります", "It takes this much to go."],
          ["ひつようです", "つくるのに ひつようです", "You need it to make this."]
        ]
      }
    ],
    mistakes: [
      { bad: "りんごを きるに つかいます。", good: "りんごを きるのに つかいます。", why: "A verb needs の before に." },
      { bad: "りんごを きりますのに つかいます。", good: "りんごを きるのに つかいます。", why: "Use the dictionary form before のに." }
    ],
    tip: "Describe the things on your desk: これは ～のに つかいます。"
  },

  // ───────────── Lesson 43 ─────────────
  "L143-1": {
    formula: ["V ます-stem + そうです"],
    points: ["It is based on what you can see now.", "Remove ます, then add そうです.", "Good for warnings and quick reactions."],
    tables: [
      {
        title: "Making the そう form",
        headers: ["Group", "Verb", "そう form"],
        rows: [
          ["Group 1", "ふります", "ふりそうです"],
          ["Group 2", "おちます", "おちそうです"],
          ["Group 2", "たおれます", "たおれそうです"],
          ["Group 2", "できます", "できそうです"],
          ["Group 3", "きます", "きそうです"],
          ["Group 3", "します", "しそうです"]
        ]
      }
    ],
    mistakes: [
      { bad: "あめが ふるそうです。 (looks like rain)", good: "あめが ふりそうです。", why: "ふるそうです means 'I heard it will rain'." },
      { bad: "おちますそうです。", good: "おちそうです。", why: "Remove ます first." }
    ],
    tip: "Say it out loud when you see something about to go wrong: おちそう！"
  },
  "L143-2": {
    formula: ["いA (drop い) + そうです", "なA + そうです"],
    points: ["Use it for a guess based on looks.", "Use it for other people's feelings.", "いい becomes よさそう and ない becomes なさそう.", "Don't use it for what is obvious, like きれい or あかい."],
    tables: [
      {
        title: "Making the そう form",
        headers: ["Type", "Word", "そう form"],
        rows: [
          ["I-adjective", "おいしい", "おいしそうです"],
          ["I-adjective", "たかい", "たかそうです"],
          ["Na-adjective", "げんき", "げんきそうです"],
          ["Na-adjective", "ひま", "ひまそうです"],
          ["Exception", "いい", "よさそうです"],
          ["Exception", "ない", "なさそうです"],
          ["Negative", "おいしくない", "おいしくなさそうです"]
        ]
      }
    ],
    mistakes: [
      { bad: "この はなは きれいそうです。", good: "この はなは きれいです。", why: "If you can see it plainly, just say it." },
      { bad: "この しごとは いいそうです。 (looks good)", good: "この しごとは よさそうです。", why: "いい changes to よさ here." },
      { bad: "マリアさんは うれしいです。", good: "マリアさんは うれしそうです。", why: "You can't state another person's feelings directly." }
    ],
    tip: "Comment on food with おいしそう！ It's the most useful phrase in this lesson."
  },
  "L143-3": {
    formula: ["～そうな + N", "～そうに + V"],
    points: ["そう conjugates like a な-adjective.", "Before a noun it takes な, not の.", "Before a verb it takes に."],
    tables: [
      {
        title: "The three positions",
        headers: ["Position", "Example", "Meaning"],
        rows: [
          ["End of sentence", "おいしそうです", "It looks delicious."],
          ["Before a noun", "おいしそうな パン", "delicious-looking bread"],
          ["Before a verb", "おいしそうに たべます", "eats with obvious enjoyment"]
        ]
      }
    ],
    mistakes: [
      { bad: "おいしそうの パン", good: "おいしそうな パン", why: "そう takes な before a noun." },
      { bad: "たのしそうな はなします。", good: "たのしそうに はなします。", why: "Use に before a verb." }
    ],
    tip: "If you know ～な ひと and ～に はなします, you already know this rule."
  },
  "L143-4": {
    formula: ["V て + きます", "N (place) で + N を + V て + きます", "N (place) から + N を + V て + きます"],
    points: ["Three steps: go, do, come back.", "ちょっと makes it sound like a quick trip.", "The place of the action takes で.", "The place something comes from takes から."],
    tables: [
      {
        title: "Compare the two patterns",
        headers: ["Japanese", "Meaning", "Do you come back?"],
        rows: [
          ["パンを かいに いきます", "I go to buy bread.", "Not stated"],
          ["パンを かって きます", "I'll go and buy bread.", "Yes"],
          ["いって きます", "See you later.", "Yes"],
          ["いって いらっしゃい", "Take care.", "Yes"]
        ]
      }
    ],
    mistakes: [
      { bad: "パンを かいに きます。 (leaving to buy bread)", good: "パンを かって きます。", why: "かいに きます means you come here to buy." }
    ],
    tip: "Use it before you step out of a meeting or class: ちょっと ～て きます。"
  },

  // ───────────── Lesson 44 ─────────────
  "L144-1": {
    formula: ["V ます-stem + すぎます", "いA (drop い) + すぎます", "なA + すぎます"],
    points: ["It usually shows a problem or a complaint.", "すぎます is a Group 2 verb, so it conjugates like たべます.", "いい becomes よすぎます."],
    tables: [
      {
        title: "Making ～すぎます",
        headers: ["Type", "Word", "With すぎます"],
        rows: [
          ["Verb", "たべます", "たべすぎます"],
          ["Verb", "のみます", "のみすぎます"],
          ["Verb", "します", "しすぎます"],
          ["I-adjective", "たかい", "たかすぎます"],
          ["Na-adjective", "しずか", "しずかすぎます"],
          ["Exception", "いい", "よすぎます"],
          ["Exception", "ない", "なさすぎます"]
        ]
      },
      {
        title: "Forms of すぎます",
        headers: ["Form", "Japanese"],
        rows: [
          ["Past", "たべすぎました"],
          ["Te-form", "たべすぎて"],
          ["Don't", "たべすぎないで ください"],
          ["Noun", "たべすぎ"]
        ]
      }
    ],
    mistakes: [
      { bad: "たかいすぎます。", good: "たかすぎます。", why: "Drop the い first." },
      { bad: "しずかなすぎます。", good: "しずかすぎます。", why: "Drop な too." }
    ],
    tip: "Add ～すぎて to give a reason: たべすぎて、おなかが いたいです。"
  },
  "L144-2": {
    formula: ["V ます-stem + やすいです", "V ます-stem + にくいです"],
    points: ["The result is an い-adjective.", "It can mean easy to use or tends to happen.", "やすい here has nothing to do with cheap."],
    tables: [
      {
        title: "Two kinds of meaning",
        headers: ["Japanese", "Meaning", "Type"],
        rows: [
          ["つかいやすい", "easy to use", "Ease of doing"],
          ["つかいにくい", "hard to use", "Ease of doing"],
          ["よみやすい", "easy to read", "Ease of doing"],
          ["こわれやすい", "breaks easily", "Tendency"],
          ["こわれにくい", "doesn't break easily", "Tendency"],
          ["すべりやすい", "slippery", "Tendency"]
        ]
      },
      {
        title: "It conjugates like an い-adjective",
        headers: ["Form", "Japanese"],
        rows: [
          ["Negative", "つかいやすくないです"],
          ["Past", "つかいやすかったです"],
          ["Te-form", "つかいやすくて"],
          ["Before a noun", "つかいやすい ペン"],
          ["Becomes", "つかいやすく なります"]
        ]
      }
    ],
    mistakes: [
      { bad: "つかうやすいです。", good: "つかいやすいです。", why: "Use the ます-stem, not the dictionary form." },
      { bad: "つかいやすいでした。", good: "つかいやすかったです。", why: "It conjugates like an い-adjective." }
    ],
    tip: "Rate the things around you: この アプリは つかいやすいです。"
  },
  "L144-3": {
    formula: ["N を + いA く + します", "N を + なA に + します", "N を + N に + します"],
    points: ["します means a person causes the change.", "なります means the change just happens.", "The same く and に can also go before other verbs."],
    tables: [
      {
        title: "Forms before します",
        headers: ["Type", "Word", "With します"],
        rows: [
          ["I-adjective", "みじかい", "みじかく します"],
          ["I-adjective", "あたたかい", "あたたかく します"],
          ["Na-adjective", "きれい", "きれいに します"],
          ["Na-adjective", "しずか", "しずかに します"],
          ["Noun", "しちじ", "しちじに します"]
        ]
      },
      {
        title: "します or なります?",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["へやを きれいに します", "I make the room clean."],
          ["へやが きれいに なります", "The room becomes clean."],
          ["おとを ちいさく します", "I turn the sound down."],
          ["おとが ちいさく なります", "The sound gets quieter."]
        ]
      },
      {
        title: "Before other verbs",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["ちいさく きります", "cut small"],
          ["はやく あるきます", "walk fast"],
          ["きれいに かきます", "write neatly"],
          ["しずかに あるきます", "walk quietly"]
        ]
      }
    ],
    mistakes: [
      { bad: "おとを おおきいに します。", good: "おとを おおきく します。", why: "い-adjectives change to く." },
      { bad: "へやが きれいに しました。", good: "へやを きれいに しました。", why: "します takes を." }
    ],
    tip: "Remember: を + します, が + なります."
  },
  "L144-4": {
    formula: ["N に + します"],
    points: ["Use it when choosing from options.", "Ask with なにに しますか or どれに しますか.", "It also works for dates, times and places."],
    tables: [
      {
        title: "Useful exchanges",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["なにに しますか", "What will you have?"],
          ["どれに しますか", "Which one will you take?"],
          ["いつに しますか", "When shall we make it?"],
          ["コーヒーに します", "I'll have coffee."],
          ["これに します", "I'll take this one."]
        ]
      }
    ],
    mistakes: [
      { bad: "コーヒーを します。", good: "コーヒーに します。", why: "Choosing takes に, not を." }
    ],
    tip: "これに します is all you need to say in a shop."
  },

  // ───────────── Lesson 45 ─────────────
  "L145-1": {
    formula: ["V / いA plain + ばあいは", "なA な + ばあいは", "N の + ばあいは"],
    points: ["It introduces a situation that may or may not happen.", "The second half is usually what to do.", "It sounds more formal than ～たら."],
    tables: [
      {
        title: "Forms before ばあいは",
        headers: ["Type", "Word", "With ばあいは"],
        rows: [
          ["Verb", "おくれる", "おくれる ばあいは"],
          ["Verb, negative", "こられない", "こられない ばあいは"],
          ["Verb, past", "なくした", "なくした ばあいは"],
          ["I-adjective", "わるい", "わるい ばあいは"],
          ["Na-adjective", "ひま", "ひまな ばあいは"],
          ["Noun", "あめ", "あめの ばあいは"]
        ]
      }
    ],
    mistakes: [
      { bad: "きのう あめの ばあいは、いえに いました。", good: "きのう あめだったので、いえに いました。", why: "ばあいは doesn't describe a real past event." },
      { bad: "あめな ばあいは、ちゅうしします。", good: "あめの ばあいは、ちゅうしします。", why: "Nouns take の." }
    ],
    tip: "Look for it on signs and in emergency notices."
  },
  "L145-2": {
    formula: ["V / いA plain + のに", "なA / N + な + のに"],
    points: ["The result is the opposite of what you expected.", "It shows surprise, regret or a complaint.", "Nouns and な-adjectives take な."],
    tables: [
      {
        title: "Forms before のに",
        headers: ["Type", "Word", "With のに"],
        rows: [
          ["Verb", "いく", "いくのに"],
          ["Verb, past", "たべた", "たべたのに"],
          ["Verb, negative", "こない", "こないのに"],
          ["I-adjective", "ちかい", "ちかいのに"],
          ["I-adjective, past", "たかかった", "たかかったのに"],
          ["Na-adjective", "げんき", "げんきなのに"],
          ["Noun", "はる", "はるなのに"]
        ]
      }
    ],
    mistakes: [
      { bad: "はるのに、さむいです。", good: "はるなのに、さむいです。", why: "A noun needs な before のに." },
      { bad: "げんきだのに、やすみました。", good: "げんきなのに、やすみました。", why: "Use な, not だ." }
    ],
    tip: "Say it with a sigh. If you wouldn't sigh, you may want が instead."
  },
  "L145-3": {
    formula: ["Plain + のに + fact", "～が + anything", "～ても + anything"],
    points: ["のに can't be followed by a wish, request or plan.", "が is the neutral 'but'.", "～ても is for 'even if', often about the future.", "のに for purpose comes from Lesson 42."],
    tables: [
      {
        title: "Three ways to say but",
        headers: ["Pattern", "Second half", "Feeling"],
        rows: [
          ["のに", "A fact only", "Surprise or regret"],
          ["が", "Anything", "Neutral"],
          ["ても", "Anything", "Even if"]
        ]
      },
      {
        title: "The two のに",
        headers: ["Meaning", "Form before it", "Example"],
        rows: [
          ["Although", "Any plain form", "たかいのに かいました"],
          ["For the purpose of", "Dictionary form only", "かうのに つかいます"]
        ]
      }
    ],
    mistakes: [
      { bad: "あめなのに、でかけましょう。", good: "あめですが、でかけましょう。", why: "An invitation can't follow のに." },
      { bad: "たかいのに、かいたいです。", good: "たかいですが、かいたいです。", why: "A wish can't follow のに." },
      { bad: "あした あめが ふるのに、いきます。", good: "あした あめが ふっても、いきます。", why: "Use ～ても for 'even if'." }
    ],
    tip: "のに reports what happened. To say what you want, use が."
  },

  // ───────────── Lesson 46 ─────────────
  "L146-1": {
    formula: ["V dictionary + ところです"],
    points: ["ところ here means a point in time, not a place.", "The action hasn't started yet.", "これから and いまから often come with it."],
    tables: [
      {
        title: "Three stages of ところです",
        headers: ["Stage", "Japanese", "Meaning"],
        rows: [
          ["Before", "たべる ところです", "I'm about to eat."],
          ["During", "たべて いる ところです", "I'm in the middle of eating."],
          ["After", "たべた ところです", "I've just eaten."]
        ]
      }
    ],
    mistakes: [
      { bad: "これから でかけます ところです。", good: "これから でかける ところです。", why: "Use the dictionary form." }
    ],
    tip: "It's the perfect reply when someone asks if you've finished: これから ～ ところです。"
  },
  "L146-2": {
    formula: ["V て いる + ところです"],
    points: ["The action has started and isn't finished.", "It stresses this exact moment.", "Often used as a reason: ～て いる ところですから。"],
    tables: [
      {
        title: "～て います and ～て いる ところです",
        headers: ["Japanese", "Feel"],
        rows: [
          ["しらべて います", "Just describes the action"],
          ["しらべて いる ところです", "Stresses this very moment"]
        ]
      }
    ],
    mistakes: [
      { bad: "いま たべて ところです。", good: "いま たべて いる ところです。", why: "Don't drop いる." }
    ],
    tip: "Use it when someone chases you: いま ～て いる ところです, please wait."
  },
  "L146-3": {
    formula: ["V た + ところです"],
    points: ["It means seconds or minutes ago.", "たった いま makes it stronger.", "It can't be used with long time spans such as せんげつ."],
    tables: [
      {
        title: "Time words for each stage",
        headers: ["Stage", "Time words", "Example"],
        rows: [
          ["Before", "これから", "これから でる ところです"],
          ["During", "いま", "いま でて いる ところです"],
          ["After", "たった いま", "たった いま でた ところです"]
        ]
      }
    ],
    mistakes: [
      { bad: "せんげつ きた ところです。", good: "せんげつ きた ばかりです。", why: "ところ is only for the last few moments." }
    ],
    tip: "Learn the three ところです together, as a set: before, during and after."
  },
  "L146-4": {
    formula: ["V た + ばかりです", "V た + ばかりの + N"],
    points: ["The speaker feels it was recent, whatever the calendar says.", "ばかり works like a noun, so it takes の or な."],
    tables: [
      {
        title: "ところ or ばかり?",
        headers: ["Time gap", "～た ところです", "～た ばかりです"],
        rows: [
          ["A moment ago", "Yes", "Yes"],
          ["Last week", "No", "Yes"],
          ["Last month", "No", "Yes"],
          ["Last year", "No", "Yes"]
        ]
      }
    ],
    mistakes: [
      { bad: "かった ばかり くつ", good: "かった ばかりの くつ", why: "Use の before a noun." },
      { bad: "きた ばかりので", good: "きた ばかりなので", why: "Use な before ので." }
    ],
    tip: "Use it as an excuse: にほんに きた ばかりですから。"
  },
  "L146-5": {
    formula: ["V / いA plain + はずです", "なA な + はずです", "N の + はずです"],
    points: ["はず works like a noun, so it takes な and の.", "You need a reason for your expectation.", "はずが ありません means it can't be true."],
    tables: [
      {
        title: "Forms before はずです",
        headers: ["Type", "Word", "With はずです"],
        rows: [
          ["Verb", "くる", "くる はずです"],
          ["Verb, negative", "こない", "こない はずです"],
          ["I-adjective", "おいしい", "おいしい はずです"],
          ["Na-adjective", "ひま", "ひまな はずです"],
          ["Noun", "やすみ", "やすみの はずです"]
        ]
      },
      {
        title: "How sure are you?",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["くる でしょう", "They will probably come."],
          ["くる はずです", "They should come, I have good reasons."],
          ["こない はずです", "They shouldn't be coming."],
          ["くる はずが ありません", "There's no way they'll come."]
        ]
      }
    ],
    mistakes: [
      { bad: "やすみ はずです。", good: "やすみの はずです。", why: "A noun takes の before はず." },
      { bad: "ひまだ はずです。", good: "ひまな はずです。", why: "A な-adjective keeps な." }
    ],
    tip: "Add the reason first with ～から, then finish with ～はずです."
  },

  // ───────────── Lesson 47 ─────────────
  "L147-1": {
    formula: ["Plain + そうです", "N に よると、plain + そうです"],
    points: ["The information comes from someone else.", "Nouns and な-adjectives keep だ.", "そうです never changes to the past or negative."],
    tables: [
      {
        title: "Forms before そうです (I heard)",
        headers: ["Type", "Word", "With そうです"],
        rows: [
          ["Verb", "いく", "いく そうです"],
          ["Verb, negative", "いかない", "いかない そうです"],
          ["Verb, past", "いった", "いった そうです"],
          ["I-adjective", "たかい", "たかい そうです"],
          ["Na-adjective", "しずか", "しずかだ そうです"],
          ["Noun", "あめ", "あめだ そうです"]
        ]
      }
    ],
    mistakes: [
      { bad: "しずかな そうです。", good: "しずかだ そうです。", why: "Keep だ before this そうです." },
      { bad: "あめが ふった そうでした。", good: "あめが ふった そうです。", why: "This そうです has no past form." }
    ],
    tip: "Spot the difference by the verb form: plain means heard, ます-stem means looks."
  },
  "L147-2": {
    formula: ["V / いA plain + ようです", "なA な + ようです", "N の + ようです"],
    points: ["You reach the idea yourself from a clue.", "どうも often comes with it.", "Nouns take の and な-adjectives take な."],
    tables: [
      {
        title: "Forms before ようです",
        headers: ["Type", "Word", "With ようです"],
        rows: [
          ["Verb", "いる", "いる ようです"],
          ["Verb, past", "ひいた", "ひいた ようです"],
          ["Verb, negative", "いない", "いない ようです"],
          ["I-adjective", "おいしい", "おいしい ようです"],
          ["Na-adjective", "しずか", "しずかな ようです"],
          ["Noun", "かぜ", "かぜの ようです"]
        ]
      }
    ],
    mistakes: [
      { bad: "かぜな ようです。", good: "かぜの ようです。", why: "A noun takes の." },
      { bad: "しずかだ ようです。", good: "しずかな ようです。", why: "A な-adjective takes な." }
    ],
    tip: "Use it like a detective: clue first, then ～ようです."
  },
  "L147-3": {
    formula: ["V ます-stem / A stem + そうです (looks)", "Plain + そうです (heard)", "Plain + ようです (worked out)"],
    points: ["Ask where the information came from.", "Eyes on the thing itself: そう after a stem.", "Someone told you: plain + そうです.", "You worked it out from a clue: ようです."],
    tables: [
      {
        title: "Source decides the ending",
        headers: ["Source", "Form before it", "Example"],
        rows: [
          ["What you can see now", "Stem", "ふりそうです"],
          ["What you heard or read", "Plain", "ふる そうです"],
          ["A clue you worked out", "Plain", "ふる ようです"]
        ]
      },
      {
        title: "Same word, three endings",
        headers: ["Word", "Looks", "Heard", "Worked out"],
        rows: [
          ["たかい", "たかそうです", "たかい そうです", "たかい ようです"],
          ["げんき", "げんきそうです", "げんきだ そうです", "げんきな ようです"],
          ["ふる", "ふりそうです", "ふる そうです", "ふる ようです"],
          ["やすみ", "—", "やすみだ そうです", "やすみの ようです"]
        ]
      }
    ],
    mistakes: [
      { bad: "ニュースに よると、あめが ふりそうです。", good: "ニュースに よると、あめが ふる そうです。", why: "A named source needs the plain form." },
      { bad: "あの ひとは がくせいそうです。", good: "あの ひとは がくせいの ようです。", why: "そう (looks) doesn't follow a noun." }
    ],
    tip: "Say the same weather three ways each morning until the forms feel different."
  },
  "L147-4": {
    formula: ["N が します"],
    points: ["The particle is が, not を.", "Nobody is doing anything on purpose.", "It describes what your senses pick up."],
    tables: [
      {
        title: "The four common nouns",
        headers: ["Japanese", "Sense", "Example"],
        rows: [
          ["におい", "smell", "いい においが します"],
          ["おと", "sound", "へんな おとが します"],
          ["こえ", "voice", "こどもの こえが します"],
          ["あじ", "taste", "さかなの あじが します"]
        ]
      }
    ],
    mistakes: [
      { bad: "いい においを します。", good: "いい においが します。", why: "The smell is the subject, so use が." }
    ],
    tip: "Walk past a bakery and say it: いい においが します。"
  },

  // ───────────── Lesson 48 ─────────────
  "L148-1": {
    formula: ["Group 1: あ-row + せます", "Group 2: stem + させます", "Group 3: こさせます / させます"],
    points: ["Verbs ending in います change to わせます.", "Every causative verb conjugates as Group 2.", "きます becomes こさせます and します becomes させます."],
    tables: [
      {
        title: "Group 1: move to the あ-row, add せます",
        headers: ["Verb", "Causative", "Plain form"],
        rows: [
          ["かいます", "かわせます", "かわせる"],
          ["かきます", "かかせます", "かかせる"],
          ["いきます", "いかせます", "いかせる"],
          ["いそぎます", "いそがせます", "いそがせる"],
          ["はなします", "はなさせます", "はなさせる"],
          ["まちます", "またせます", "またせる"],
          ["しにます", "しなせます", "しなせる"],
          ["あそびます", "あそばせます", "あそばせる"],
          ["のみます", "のませます", "のませる"],
          ["つくります", "つくらせます", "つくらせる"],
          ["かえります", "かえらせます", "かえらせる"]
        ]
      },
      {
        title: "Group 2: drop ます, add させます",
        headers: ["Verb", "Causative", "Plain form"],
        rows: [
          ["たべます", "たべさせます", "たべさせる"],
          ["みます", "みさせます", "みさせる"],
          ["おしえます", "おしえさせます", "おしえさせる"],
          ["おきます", "おきさせます", "おきさせる"],
          ["やめます", "やめさせます", "やめさせる"]
        ]
      },
      {
        title: "Group 3: irregular",
        headers: ["Verb", "Causative", "Plain form"],
        rows: [
          ["きます", "こさせます", "こさせる"],
          ["します", "させます", "させる"],
          ["そうじします", "そうじさせます", "そうじさせる"],
          ["べんきょうします", "べんきょうさせます", "べんきょうさせる"]
        ]
      },
      {
        title: "All causative verbs conjugate as Group 2",
        headers: ["Form", "From いきます", "From たべます"],
        rows: [
          ["Polite", "いかせます", "たべさせます"],
          ["Dictionary", "いかせる", "たべさせる"],
          ["Negative", "いかせない", "たべさせない"],
          ["Past", "いかせた", "たべさせた"],
          ["Te-form", "いかせて", "たべさせて"]
        ]
      }
    ],
    mistakes: [
      { bad: "かあせます", good: "かわせます", why: "Verbs ending in います use わ." },
      { bad: "たべせます", good: "たべさせます", why: "Group 2 verbs add させます." },
      { bad: "きさせます", good: "こさせます", why: "きます is irregular." }
    ],
    tip: "The negative form uses the same あ-row, so start from ない: いかない, いかせます."
  },
  "L148-2": {
    formula: ["N1 は + N2 を + V causative", "N1 は + N2 に + N3 を + V causative"],
    points: ["N1 gives the order and N2 does the action.", "A sentence can't have two を for different roles.", "If the verb has an object, the person takes に."],
    tables: [
      {
        title: "を or に?",
        headers: ["Verb", "Person takes", "Example"],
        rows: [
          ["いきます", "を", "こどもを いかせます"],
          ["はしります", "を", "こどもを はしらせます"],
          ["よみます", "に", "こどもに ほんを よませます"],
          ["たべます", "に", "こどもに やさいを たべさせます"],
          ["そうじします", "に", "こどもに へやを そうじさせます"]
        ]
      }
    ],
    mistakes: [
      { bad: "こどもを ほんを よませます。", good: "こどもに ほんを よませます。", why: "The verb already has an object with を." }
    ],
    tip: "Count your を: there is only room for one."
  },
  "L148-3": {
    formula: ["V causative + て くれます", "N を + feeling verb causative"],
    points: ["Context tells you whether it's make or let.", "～させて くれます clearly means someone let you.", "Feeling verbs take を: びっくりさせます, しんぱいさせます.", "Never use the causative on someone above you."],
    tables: [
      {
        title: "Three meanings",
        headers: ["Meaning", "Japanese", "English"],
        rows: [
          ["Make", "やさいを たべさせます", "make someone eat vegetables"],
          ["Let", "すきな ものを たべさせます", "let someone eat what they like"],
          ["Cause a feeling", "ともだちを びっくりさせます", "surprise a friend"],
          ["Cause a feeling", "おやを あんしんさせます", "put your parents at ease"],
          ["Keep waiting", "ともだちを またせます", "keep a friend waiting"]
        ]
      }
    ],
    mistakes: [
      { bad: "せんせいに かんじを かかせました。", good: "せんせいに かんじを かいて いただきました。", why: "You can't make someone above you do things." }
    ],
    tip: "Sorry to keep you waiting is おまたせしました, and it's built on this same causative."
  },
  "L148-4": {
    formula: ["V causative て + いただけませんか", "V causative て + ください"],
    points: ["You are the one who will do the action.", "It asks for permission from someone above you.", "～させて ください is less formal."],
    tables: [
      {
        title: "Making the request",
        headers: ["Verb", "Polite request"],
        rows: [
          ["やすみます", "やすませて いただけませんか"],
          ["かえります", "かえらせて いただけませんか"],
          ["つかいます", "つかわせて いただけませんか"],
          ["おしえます", "おしえさせて いただけませんか"],
          ["きます", "こさせて いただけませんか"],
          ["します", "させて いただけませんか"]
        ]
      },
      {
        title: "Who does the action?",
        headers: ["Japanese", "Who acts", "Meaning"],
        rows: [
          ["かえって いただけませんか", "You", "Could you please go home?"],
          ["かえらせて いただけませんか", "Me", "Could you let me go home?"],
          ["かえらせて ください", "Me", "Please let me go home."]
        ]
      }
    ],
    mistakes: [
      { bad: "はやく かえって いただけませんか。 (asking to leave)", good: "はやく かえらせて いただけませんか。", why: "The first one asks the other person to leave." }
    ],
    tip: "Save this for work: it is the safest way to ask your boss for time off."
  },

  // ───────────── Lesson 49 ─────────────
  "L149-1": {
    formula: ["Group 1: あ-row + れます", "Group 2: stem + られます", "Group 3: こられます / されます"],
    points: ["Use it for actions of people above you.", "Never use it for yourself.", "The form matches the passive, so context decides.", "It conjugates as a Group 2 verb."],
    tables: [
      {
        title: "Group 1: move to the あ-row, add れます",
        headers: ["Verb", "Honorific", "Plain form"],
        rows: [
          ["かいます", "かわれます", "かわれる"],
          ["かきます", "かかれます", "かかれる"],
          ["いきます", "いかれます", "いかれる"],
          ["はなします", "はなされます", "はなされる"],
          ["まちます", "またれます", "またれる"],
          ["よみます", "よまれます", "よまれる"],
          ["かえります", "かえられます", "かえられる"]
        ]
      },
      {
        title: "Groups 2 and 3",
        headers: ["Verb", "Honorific", "Plain form"],
        rows: [
          ["たべます", "たべられます", "たべられる"],
          ["でます", "でられます", "でられる"],
          ["おしえます", "おしえられます", "おしえられる"],
          ["きます", "こられます", "こられる"],
          ["します", "されます", "される"],
          ["けんきゅうします", "けんきゅうされます", "けんきゅうされる"]
        ]
      }
    ],
    mistakes: [
      { bad: "わたしは あした いかれます。", good: "わたしは あした いきます。", why: "Honorific forms are never for yourself." },
      { bad: "せんせいは よみられます。", good: "せんせいは よまれます。", why: "Group 1 verbs add れます to the あ-row." }
    ],
    tip: "This level of respect is safe and light, good for colleagues and teachers."
  },
  "L149-2": {
    formula: ["お + V ます-stem + に なります"],
    points: ["Take the ます-stem and wrap it in お and に なります.", "It sounds more respectful than ～れます.", "Verbs with a one-syllable stem use special forms instead.", "する verbs usually use なさいます or されます."],
    tables: [
      {
        title: "Making the form",
        headers: ["Verb", "Honorific"],
        rows: [
          ["よみます", "およみに なります"],
          ["かえります", "おかえりに なります"],
          ["まちます", "おまちに なります"],
          ["かきます", "おかきに なります"],
          ["あいます", "おあいに なります"],
          ["つかいます", "おつかいに なります"],
          ["でかけます", "おでかけに なります"],
          ["ききます", "おききに なります"]
        ]
      },
      {
        title: "Verbs that use a special form instead",
        headers: ["Verb", "Use this"],
        rows: [
          ["みます", "ごらんに なります"],
          ["ねます", "おやすみに なります"],
          ["います", "いらっしゃいます"],
          ["きます", "いらっしゃいます"],
          ["します", "なさいます"]
        ]
      }
    ],
    mistakes: [
      { bad: "せんせいは おみに なりました。", good: "せんせいは ごらんに なりました。", why: "みます has a special form." },
      { bad: "せんせいは おかえるに なりました。", good: "せんせいは おかえりに なりました。", why: "Use the ます-stem." }
    ],
    tip: "The verb itself doesn't change, so this pattern works for most verbs you know."
  },
  "L149-3": {
    formula: ["Special honorific verb"],
    points: ["These verbs replace the normal verb completely.", "いらっしゃいます covers go, come and be.", "Four verbs take い in the ます form, not り."],
    tables: [
      {
        title: "Special honorific verbs",
        headers: ["Verb", "Honorific", "Meaning"],
        rows: [
          ["いきます", "いらっしゃいます", "go"],
          ["きます", "いらっしゃいます", "come"],
          ["います", "いらっしゃいます", "be"],
          ["たべます", "めしあがります", "eat"],
          ["のみます", "めしあがります", "drink"],
          ["いいます", "おっしゃいます", "say"],
          ["します", "なさいます", "do"],
          ["みます", "ごらんに なります", "see"],
          ["しって います", "ごぞんじです", "know"],
          ["ねます", "おやすみに なります", "sleep"],
          ["くれます", "くださいます", "give me"],
          ["～て います", "～て いらっしゃいます", "be doing"]
        ]
      },
      {
        title: "Four verbs with a special ます form",
        headers: ["Dictionary", "Polite", "Negative", "Te-form", "Past"],
        rows: [
          ["いらっしゃる", "いらっしゃいます", "いらっしゃらない", "いらっしゃって", "いらっしゃった"],
          ["おっしゃる", "おっしゃいます", "おっしゃらない", "おっしゃって", "おっしゃった"],
          ["なさる", "なさいます", "なさらない", "なさって", "なさった"],
          ["くださる", "くださいます", "くださらない", "くださって", "くださった"]
        ]
      }
    ],
    mistakes: [
      { bad: "せんせいが いらっしゃります。", good: "せんせいが いらっしゃいます。", why: "The ます form takes い, not り." },
      { bad: "せんせいが いただきました。", good: "せんせいが めしあがりました。", why: "いただきます is humble. Use it only for yourself." }
    ],
    tip: "Learn these side by side with the humble verbs in the next lesson."
  },
  "L149-4": {
    formula: ["お + V ます-stem + ください", "ご + する-noun + ください"],
    points: ["It's more polite than ～て ください.", "Japanese-origin verbs take お.", "する nouns usually take ご.", "Some verbs use their special form + て ください."],
    tables: [
      {
        title: "Making the request",
        headers: ["Verb", "Polite request"],
        rows: [
          ["まちます", "おまち ください"],
          ["はいります", "おはいり ください"],
          ["かけます", "おかけ ください"],
          ["つかいます", "おつかい ください"],
          ["ちゅういします", "ごちゅうい ください"],
          ["れんらくします", "ごれんらく ください"],
          ["みます", "ごらん ください"],
          ["たべます", "めしあがって ください"],
          ["いいます", "おっしゃって ください"],
          ["きます", "いらっしゃって ください"]
        ]
      }
    ],
    mistakes: [
      { bad: "おまって ください。", good: "おまち ください。", why: "Use the ます-stem, not the て-form." },
      { bad: "おちゅうい ください。", good: "ごちゅうい ください。", why: "ちゅうい takes ご." }
    ],
    tip: "Listen on the train: ご + ください turns up in almost every announcement."
  },
  "L149-5": {
    formula: ["お + Japanese-origin word", "ご + Chinese-origin word"],
    points: ["Japanese-origin words usually take お.", "Chinese-origin words usually take ご.", "A few common words are exceptions and take お.", "Use these only for the other person."],
    tables: [
      {
        title: "Common words",
        headers: ["Type", "Japanese", "Meaning"],
        rows: [
          ["Japanese origin", "おなまえ", "your name"],
          ["Japanese origin", "おしごと", "your work"],
          ["Japanese origin", "おいそがしい", "busy"],
          ["Chinese origin", "ごかぞく", "your family"],
          ["Chinese origin", "ごりょうしん", "your parents"],
          ["Chinese origin", "ごしんせつ", "your kindness"],
          ["Exception", "おでんわ", "your call"],
          ["Exception", "おじかん", "your time"],
          ["Exception", "おげんき", "your health"]
        ]
      }
    ],
    mistakes: [
      { bad: "わたしの おなまえは カランです。", good: "わたしの なまえは カランです。", why: "Don't use お for your own things." },
      { bad: "おかぞくは おげんきですか。", good: "ごかぞくは おげんきですか。", why: "かぞく takes ご." }
    ],
    tip: "When in doubt, learn each word with its prefix: おげんきですか is one chunk."
  },

  // ───────────── Lesson 50 ─────────────
  "L150-1": {
    formula: ["お + V ます-stem + します", "ご + する-noun + します"],
    points: ["The doer is you or someone on your side.", "The action must involve the other person.", "いたします is even more humble than します.", "Short verbs like みます and います use special forms."],
    tables: [
      {
        title: "お + stem + します",
        headers: ["Verb", "Humble"],
        rows: [
          ["もちます", "おもちします"],
          ["おくります", "おおくりします"],
          ["まちます", "おまちします"],
          ["かします", "おかしします"],
          ["かります", "おかりします"],
          ["みせます", "おみせします"],
          ["てつだいます", "おてつだいします"],
          ["しらせます", "おしらせします"]
        ]
      },
      {
        title: "ご + noun + します",
        headers: ["Verb", "Humble"],
        rows: [
          ["あんないします", "ごあんないします"],
          ["しょうかいします", "ごしょうかいします"],
          ["せつめいします", "ごせつめいします"],
          ["れんらくします", "ごれんらくします"],
          ["そうだんします", "ごそうだんします"],
          ["でんわします", "おでんわします"],
          ["やくそくします", "おやくそくします"]
        ]
      }
    ],
    mistakes: [
      { bad: "わたしは うちへ おかえりします。", good: "わたしは うちへ かえります。", why: "Going home isn't done for anyone." },
      { bad: "おもちに なりましょうか。", good: "おもちしましょうか。", why: "Offering to do it yourself needs the humble form." }
    ],
    tip: "Offer help with ～しましょうか: おてつだいしましょうか。"
  },
  "L150-2": {
    formula: ["Special humble verb"],
    points: ["Use these for yourself and your own family or company.", "まいります and おります follow normal Group 1 rules.", "うかがいます means both ask and visit."],
    tables: [
      {
        title: "Special humble verbs",
        headers: ["Verb", "Humble", "Meaning"],
        rows: [
          ["いきます", "まいります", "go"],
          ["きます", "まいります", "come"],
          ["います", "おります", "be"],
          ["たべます", "いただきます", "eat"],
          ["のみます", "いただきます", "drink"],
          ["もらいます", "いただきます", "receive"],
          ["いいます", "もうします", "say"],
          ["します", "いたします", "do"],
          ["みます", "はいけんします", "see"],
          ["ききます", "うかがいます", "ask"],
          ["いきます", "うかがいます", "visit"],
          ["しって います", "ぞんじて おります", "know"],
          ["しりません", "ぞんじません", "not know"],
          ["あいます", "おめに かかります", "meet"],
          ["あげます", "さしあげます", "give"],
          ["～て います", "～て おります", "be doing"]
        ]
      }
    ],
    mistakes: [
      { bad: "カランと おっしゃいます。", good: "カランと もうします。", why: "おっしゃいます raises the speaker. Use the humble verb." },
      { bad: "せんせいが まいります。", good: "せんせいが いらっしゃいます。", why: "まいります is for your own side." }
    ],
    tip: "Practise your self-introduction first: ～と もうします。～から まいりました。"
  },
  "L150-3": {
    formula: ["あります → ございます", "です → で ございます", "いいですか → よろしいでしょうか"],
    points: ["These don't raise or lower anyone.", "They just make your speech very polite.", "ございます is for things, not for people."],
    tables: [
      {
        title: "Very polite replacements",
        headers: ["Normal", "Very polite", "Example"],
        rows: [
          ["あります", "ございます", "こちらに ございます"],
          ["ありません", "ございません", "ございません"],
          ["です", "で ございます", "こちらで ございます"],
          ["いいですか", "よろしいでしょうか", "これで よろしいでしょうか"],
          ["いいです", "よろしいです", "よろしいです"]
        ]
      }
    ],
    mistakes: [
      { bad: "でんわは あちらに いらっしゃいます。", good: "でんわは あちらに ございます。", why: "いらっしゃいます is for people, not things." }
    ],
    tip: "You'll hear these in every department store, so start by learning to recognise them."
  },
  "L150-4": {
    formula: ["Their action: そんけいご", "My action: けんじょうご"],
    points: ["First ask who is doing the action.", "Your own company counts as your side with outsiders.", "Drop さん from your own colleagues when talking to outsiders."],
    tables: [
      {
        title: "Plain, honorific and humble side by side",
        headers: ["Meaning", "Plain", "Honorific", "Humble"],
        rows: [
          ["go", "いきます", "いらっしゃいます", "まいります"],
          ["come", "きます", "いらっしゃいます", "まいります"],
          ["be", "います", "いらっしゃいます", "おります"],
          ["eat", "たべます", "めしあがります", "いただきます"],
          ["drink", "のみます", "めしあがります", "いただきます"],
          ["say", "いいます", "おっしゃいます", "もうします"],
          ["do", "します", "なさいます", "いたします"],
          ["see", "みます", "ごらんに なります", "はいけんします"],
          ["know", "しって います", "ごぞんじです", "ぞんじて おります"],
          ["meet", "あいます", "おあいに なります", "おめに かかります"],
          ["ask", "ききます", "おききに なります", "うかがいます"],
          ["give to me", "くれます", "くださいます", "—"],
          ["give", "あげます", "—", "さしあげます"],
          ["receive", "もらいます", "—", "いただきます"]
        ]
      },
      {
        title: "Inside and outside the company",
        headers: ["Listener", "About your boss"],
        rows: [
          ["Your colleague", "やまだぶちょうは いらっしゃいますか"],
          ["A customer", "やまだは おります"]
        ]
      }
    ],
    mistakes: [
      { bad: "せんせいは コーヒーを いただきます。", good: "せんせいは コーヒーを めしあがります。", why: "いただきます is humble. Don't use it for your teacher." },
      { bad: "わたしは あした いらっしゃいます。", good: "わたしは あした まいります。", why: "Never raise yourself." },
      { bad: "やまだぶちょうは いらっしゃいません。 (to a customer)", good: "やまだは おりません。", why: "Your boss is on your side with outsiders." }
    ],
    tip: "One question solves most cases: who is doing this, them or me?"
  }
});

window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  138: {
    can: ["Talk about actions using の", "Say what you like or are good at doing", "Say you forgot to do something", "Put the key fact at the end of a sentence"],
    first: ["そだてます", "はこびます", "なくなります", "にゅういんします", "たいいんします", "あかちゃん", "しょうがっこう", "ちゅうがっこう", "かいがん", "こうじょう", "しゅうかん", "きもちが いい"],
    tip: "Learn ～のは, ～のが and ～のを together, because the particle depends on the word that follows."
  },
  139: {
    can: ["Say how something made you feel", "Say what an accident or storm caused", "Give a polite reason with ので"],
    first: ["たおれます", "とおります", "びっくりします", "がっかりします", "あんしんします", "けんかします", "りこんします", "たいふう", "かじ", "ふくざつ", "かなしい", "はずかしい"],
    tip: "Check the second half first: if it is a request or plan, use ので instead of ～て."
  },
  140: {
    can: ["Ask and answer questions inside a sentence", "Say you don't know whether something is true", "Say you'll try something", "Talk about height, length and weight"],
    first: ["かぞえます", "はかります", "たしかめます", "しゅっぱつします", "とうちゃくします", "よいます", "ぼうねんかい", "しんねんかい", "おもて", "うら", "まちがい", "てんきよほう"],
    tip: "Look for a question word first, since that decides between か and か どうか."
  },
  141: {
    can: ["Give and receive politely with people above you", "Say someone above you kindly did something", "Talk about doing things for children and pets", "Make a polite request"],
    first: ["くださいます", "さしあげます", "しんせつに します", "おいわい", "おとしだま", "おみまい", "きょうみ", "じょうほう", "ぶんぽう", "はつおん", "えさ", "おもちゃ"],
    tip: "Always ask who gives, who receives and who is above whom before you choose the verb."
  },
  142: {
    can: ["Say why you do something", "Say who or what something is for", "Say what an object is used for", "Say how long or how much a task takes"],
    first: ["つつみます", "わかします", "まぜます", "けいさんします", "べんごし", "おんがくか", "きょういく", "ぶんか", "しゃかい", "せいじ", "へいわ", "もくてき"],
    tip: "Keep ために for goals and のに for uses, and remember both take the dictionary form."
  },
  143: {
    can: ["Say something looks about to happen", "Say how things and people look", "Describe things with そうな and そうに", "Say you'll pop out and come back"],
    first: ["ふえます", "へります", "あがります", "さがります", "きれます", "とれます", "おちます", "へん", "しあわせ", "ガソリン", "パンフレット", "りゆう"],
    tip: "Remember that そう follows a stem here, because Lesson 47 has a そうです that follows a plain form."
  },
  144: {
    can: ["Say something is too much", "Say something is easy or hard to do", "Ask someone to change something", "Choose from a menu or a list"],
    first: ["なきます", "わらいます", "かわきます", "ぬれます", "すべります", "ちょうせつします", "あんぜん", "きけん", "こい", "くうき", "なみだ", "おかず"],
    tip: "All three endings in this lesson join to the ます-stem, so practise that first."
  },
  145: {
    can: ["Explain what to do in a possible situation", "Say something went against your expectations", "Choose between のに, が and ～ても"],
    first: ["しんじます", "よういします", "キャンセルします", "ほしょうしょ", "りょうしゅうしょ", "キャンプ", "ちゅうし", "てん", "うめ", "ばあい", "むりに", "それでも"],
    tip: "Read the second half of the sentence aloud: a fact with a sigh takes のに."
  },
  146: {
    can: ["Say you are about to do something", "Say you are in the middle of something", "Say you have just done something", "Say what should be true"],
    first: ["かえってきます", "とどきます", "にゅうがくします", "やきます", "やけます", "むかいます", "るす", "げんいん", "はんとし", "たったいま", "ぐあい", "おまたせしました"],
    tip: "Learn before, during and after as one set, then add ばかり for things that feel recent."
  },
  147: {
    can: ["Pass on something you heard", "Guess from something you noticed", "Choose the right ending from your source", "Talk about smells, sounds and tastes"],
    first: ["もえます", "きびしい", "ひどい", "こわい", "じっけん", "データ", "じんこう", "におい", "においが します", "おとが します", "あじが します", "～に よると"],
    tip: "Before you answer, ask yourself how you know, as the source chooses the ending."
  },
  148: {
    can: ["Say someone made or let someone do something", "Choose を or に for the person", "Say you surprised or worried someone", "Ask very politely for permission"],
    first: ["おろします", "とどけます", "せわを します", "ろくおんします", "たのしみます", "じゅく", "ファイル", "えいぎょう", "かまいません", "もともと", "かわり", "こころ"],
    tip: "Build the causative from the ない form, as both use the same あ-row sound."
  },
  149: {
    can: ["Describe what people above you do", "Use the special honorific verbs", "Understand staff and announcements", "Add お and ご to the right words"],
    first: ["すごします", "めしあがります", "おっしゃいます", "なさいます", "ごらんに なります", "ごぞんじです", "あいさつ", "りょかん", "バスてい", "たまに", "おくさま", "ようこそ"],
    tip: "Start with the special verbs, as they are the ones you will hear most often."
  },
  150: {
    can: ["Introduce yourself formally", "Offer to do something politely", "Use the special humble verbs", "Choose honorific or humble speech"],
    first: ["まいります", "おります", "もうします", "いたします", "はいけんします", "ぞんじます", "うかがいます", "おめに かかります", "わたくし", "スケジュール", "さらいげつ", "きんちょうします"],
    tip: "Ask who is doing the action: them takes honorific, me takes humble."
  }
});
