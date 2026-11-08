// Grammar data: JLPT N3, second half (Units 13–24, L: 213–224).
// Conditions, viewpoint, extent, reasoning, passive and giving forms, keigo, written style, sentence endings.
window.GRAMMAR = (window.GRAMMAR || []).concat([

  // ───────── Unit 13: Society and news (L: 213) ─────────
  {
    id: "L213-1",
    lesson: 213,
    title: "N + について",
    meaning: "About, concerning",
    explain: "について names the subject of talking, thinking, writing or researching.",
    examples: [
      { jp: "{今日|きょう}のニュースについて、クラスで{話|はな}し{合|あ}いました。", ro: "Kyō no nyūsu ni tsuite, kurasu de hanashiaimashita.", en: "We discussed today's news in class." },
      { jp: "{町|まち}のごみの{問題|もんだい}について{調|しら}べています。", ro: "Machi no gomi no mondai ni tsuite shirabete imasu.", en: "I am looking into the town's rubbish problem." },
      { jp: "カランさんはインドのせんきょについてのレポートを{書|か}いた。", ro: "Karan-san wa Indo no senkyo ni tsuite no repōto o kaita.", en: "Karan wrote a report about elections in India." }
    ],
    drills: [
      { type: "fill", jp: "{事件|じけん}＿＿、{警察|けいさつ}が{説明|せつめい}した。", answer: "について", options: ["について","にとって","をはじめ","にくらべて"], en: "The police gave an explanation about the incident." },
      { type: "fill", jp: "{人口|じんこう}＿＿{記事|きじ}を{読|よ}みました。", answer: "についての", options: ["についての","についてに","についてを","についで"], en: "I read an article about the population." },
      { type: "order", tiles: ["しょうらいの","{仕事|しごと}について","{考|かんが}えています"], en: "I am thinking about my future job." },
      { type: "order", tiles: ["{町|まち}の","れきしについての","{本|ほん}を","{借|か}りた"], en: "I borrowed a book about the town's history." },
      { type: "choose", q: "Which sentence is correct?", answer: "じしんについてのニュースを{見|み}た。", options: ["じしんについてのニュースを{見|み}た。","じしんについてをニュースを{見|み}た。","じしんのについてニュースを{見|み}た。","じしんについてのニュースが{見|み}て。"] },
      { type: "choose", q: "What does 首相はこの問題について話した mean?", answer: "The prime minister spoke about this problem.", options: ["The prime minister spoke about this problem.","The prime minister spoke for this problem's sake.","The prime minister caused this problem.","The prime minister did not know this problem."] }
    ]
  },
  {
    id: "L213-2",
    lesson: 213,
    title: "N + に関して・に関する",
    meaning: "Regarding, in relation to (formal)",
    explain: "に関して is a more formal について, common in notices, news and business writing.",
    examples: [
      { jp: "ごみの{出|だ}し{方|かた}に{関|かん}して、{市|し}からお{知|し}らせがありました。", ro: "Gomi no dashikata ni kanshite, shi kara oshirase ga arimashita.", en: "There was a notice from the city regarding how to put out rubbish." },
      { jp: "このじこに{関|かん}して、{警察|けいさつ}はまだ{何|なに}も{発表|はっぴょう}していない。", ro: "Kono jiko ni kanshite, keisatsu wa mada nani mo happyō shite inai.", en: "Regarding this accident, the police have not announced anything yet." },
      { jp: "かんきょうに{関|かん}する{記事|きじ}を{集|あつ}めています。", ro: "Kankyō ni kansuru kiji o atsumete imasu.", en: "I am collecting articles on the environment." }
    ],
    drills: [
      { type: "fill", jp: "{料金|りょうきん}＿＿ご{質問|しつもん}は、メールでお{願|ねが}いします。", answer: "に{関|かん}する", options: ["に{関|かん}する","に{関|かん}して","を{関|かん}する","に{関|かん}しに"], en: "Please send questions about the fee by email." },
      { type: "fill", jp: "このちょうさ＿＿、まだ{何|なに}も{決|き}まっていません。", answer: "に{関|かん}して", options: ["に{関|かん}して","に{関|かん}する","にくらべて","をはじめ"], en: "Nothing has been decided yet regarding this survey." },
      { type: "order", tiles: ["{事件|じけん}に{関|かん}する","{情報|じょうほう}を","{集|あつ}めている"], en: "They are gathering information about the incident." },
      { type: "order", tiles: ["ぜいきんに{関|かん}する","{相談|そうだん}は","こちらの","{窓口|まどぐち}へ"], en: "For questions about tax, please go to this counter." },
      { type: "choose", q: "に関して directly before a noun changes to which form?", answer: "に{関|かん}する", options: ["に{関|かん}する","に{関|かん}して","に{関|かん}しに","を{関|かん}する"] },
      { type: "choose", q: "Which sentence is correct?", answer: "{市|し}の{計画|けいかく}に{関|かん}して{質問|しつもん}があります。", options: ["{市|し}の{計画|けいかく}に{関|かん}して{質問|しつもん}があります。","{市|し}の{計画|けいかく}を{関|かん}して{質問|しつもん}があります。","{市|し}の{計画|けいかく}が{関|かん}して{質問|しつもん}があります。","{市|し}の{計画|けいかく}に{関|かん}してを{質問|しつもん}があります。"] }
    ]
  },
  {
    id: "L213-3",
    lesson: 213,
    title: "～である",
    meaning: "Is, are (written style)",
    explain: "である is the written form of だ and です, used in reports, articles and essays.",
    examples: [
      { jp: "{東京|とうきょう}は{日本|にほん}の{首都|しゅと}である。", ro: "Tōkyō wa Nihon no shuto de aru.", en: "Tokyo is the capital of Japan." },
      { jp: "{少子化|しょうしか}は{大|おお}きな{社会|しゃかい}{問題|もんだい}である。", ro: "Shōshika wa ōki na shakai mondai de aru.", en: "The falling birth rate is a major social problem." },
      { jp: "この{町|まち}は、{昔|むかし}は{港町|みなとまち}であった。", ro: "Kono machi wa, mukashi wa minatomachi de atta.", en: "This town was once a port town." }
    ],
    drills: [
      { type: "fill", jp: "{平和|へいわ}は{何|なに}より{大切|たいせつ}＿＿。", answer: "である", options: ["である","にある","でいる","がある"], en: "Peace is more important than anything." },
      { type: "fill", jp: "その{事件|じけん}は{大|おお}きなニュース＿＿。", answer: "であった", options: ["であった","である","でいた","にあった"], en: "That incident was big news." },
      { type: "choose", q: "Which is the written version of 便利です?", answer: "{便利|べんり}である", options: ["{便利|べんり}である","{便利|べんり}なである","{便利|べんり}だである","{便利|べんり}にある"] },
      { type: "order", tiles: ["{言葉|ことば}は","{文化|ぶんか}の","{一部|いちぶ}","である"], en: "Language is a part of culture." },
      { type: "order", tiles: ["これは","ちょうさの","けっか","ではない"], en: "This is not the result of the survey." },
      { type: "choose", q: "Where would you expect to read である?", answer: "A newspaper column", options: ["A newspaper column","A chat with a friend","A text to your mother","A greeting at the door"] }
    ]
  },
  {
    id: "L213-4",
    lesson: 213,
    title: "N + により・による",
    meaning: "Because of, by means of, depending on (written)",
    explain: "により is the written form of によって, showing a cause, a means, an agent or variation.",
    examples: [
      { jp: "{台風|たいふう}により、{多|おお}くの{電車|でんしゃ}が{止|と}まった。", ro: "Taifū ni yori, ōku no densha ga tomatta.", en: "Many trains stopped because of the typhoon." },
      { jp: "インターネットにより、{情報|じょうほう}が{速|はや}く{伝|つた}わるようになった。", ro: "Intānetto ni yori, jōhō ga hayaku tsutawaru yō ni natta.", en: "Thanks to the internet, information now spreads quickly." },
      { jp: "{国|くに}により、{習慣|しゅうかん}は{違|ちが}う。", ro: "Kuni ni yori, shūkan wa chigau.", en: "Customs differ from country to country." }
    ],
    drills: [
      { type: "fill", jp: "{大雨|おおあめ}＿＿、{試合|しあい}が{中止|ちゅうし}になった。", answer: "により", options: ["により","について","をはじめ","にとって"], en: "The match was cancelled because of heavy rain." },
      { type: "fill", jp: "じしん＿＿ひがいは{大|おお}きかった。", answer: "による", options: ["による","をはじめ","について","にとって"], en: "The damage from the earthquake was great." },
      { type: "order", tiles: ["{会議|かいぎ}は","{社長|しゃちょう}により","{中止|ちゅうし}された"], en: "The meeting was cancelled by the president." },
      { type: "order", tiles: ["じこによる","{遅|おく}れは","{三十分|さんじゅっぷん}","だった"], en: "The delay caused by the accident was thirty minutes." },
      { type: "choose", q: "What does 国により習慣は違う mean?", answer: "Customs differ depending on the country.", options: ["Customs differ depending on the country.","The government changed the customs.","Every country has the same customs.","Customs are not important to the country."] },
      { type: "choose", q: "In everyday speech, what is the simplest way to say 台風により?", answer: "{台風|たいふう}で", options: ["{台風|たいふう}で","{台風|たいふう}を","{台風|たいふう}へ","{台風|たいふう}が"] }
    ]
  },

  // ───────── Unit 14: Industry and materials (L: 214) ─────────
  {
    id: "L214-1",
    lesson: 214,
    title: "N + を中心に",
    meaning: "Mainly, centred on",
    explain: "を中心に says what the main part or focus of something is.",
    examples: [
      { jp: "この{町|まち}の{経済|けいざい}は、{工場|こうじょう}を{中心|ちゅうしん}に{動|うご}いている。", ro: "Kono machi no keizai wa, kōjō o chūshin ni ugoite iru.", en: "This town's economy revolves around its factory." },
      { jp: "この{会社|かいしゃ}はアジアを{中心|ちゅうしん}に{商品|しょうひん}を{売|う}っている。", ro: "Kono kaisha wa Ajia o chūshin ni shōhin o utte iru.", en: "This company sells its products mainly in Asia." },
      { jp: "{米|こめ}の{生産|せいさん}は{北|きた}の{地方|ちほう}を{中心|ちゅうしん}に{行|おこな}われている。", ro: "Kome no seisan wa kita no chihō o chūshin ni okonawarete iru.", en: "Rice is produced mainly in the northern regions." }
    ],
    drills: [
      { type: "fill", jp: "{若者|わかもの}＿＿{人気|にんき}が{広|ひろ}がっている。", answer: "を{中心|ちゅうしん}に", options: ["を{中心|ちゅうしん}に","を{中心|ちゅうしん}の","に{中心|ちゅうしん}を","が{中心|ちゅうしん}へ"], en: "Its popularity is spreading, mainly among young people." },
      { type: "fill", jp: "{関東|かんとう}を{中心|ちゅうしん}＿＿{雪|ゆき}が{降|ふ}った。", answer: "に", options: ["に","を","が","の"], en: "Snow fell mainly around Kantō." },
      { type: "choose", q: "Which form goes directly before a noun?", answer: "を{中心|ちゅうしん}とした", options: ["を{中心|ちゅうしん}とした","を{中心|ちゅうしん}に","を{中心|ちゅうしん}して","に{中心|ちゅうしん}した"] },
      { type: "order", tiles: ["この{工場|こうじょう}は","{車|くるま}の{部品|ぶひん}を","{中心|ちゅうしん}に","{作|つく}っている"], en: "This factory mainly makes car parts." },
      { type: "order", tiles: ["{東京|とうきょう}を","{中心|ちゅうしん}とした","{電車|でんしゃ}の","ろせん"], en: "Train lines centred on Tokyo." },
      { type: "choose", q: "What does この店は魚を中心に売っている mean?", answer: "This shop sells mainly fish.", options: ["This shop sells mainly fish.","This shop sells everything except fish.","This shop stands in the middle of the fish market.","This shop has stopped selling fish."] }
    ]
  },
  {
    id: "L214-2",
    lesson: 214,
    title: "N + をはじめ",
    meaning: "Starting with, and also (a leading example)",
    explain: "をはじめ gives a leading example, then widens to a larger group that includes it.",
    examples: [
      { jp: "{日本|にほん}の{車|くるま}は、アジアをはじめ、{世界中|せかいじゅう}で{使|つか}われている。", ro: "Nihon no kuruma wa, Ajia o hajime, sekaijū de tsukawarete iru.", en: "Japanese cars are used all over the world, starting with Asia." },
      { jp: "{社長|しゃちょう}をはじめ、{社員|しゃいん}{全員|ぜんいん}が{会議|かいぎ}に{参加|さんか}した。", ro: "Shachō o hajime, shain zen'in ga kaigi ni sanka shita.", en: "Everyone from the president down attended the meeting." },
      { jp: "この{工場|こうじょう}では、ガラスをはじめ、さまざまなざいりょうを{使|つか}っている。", ro: "Kono kōjō de wa, garasu o hajime, samazama na zairyō o tsukatte iru.", en: "This factory uses all kinds of materials, glass above all." }
    ],
    drills: [
      { type: "fill", jp: "たなかさん＿＿、クラスのみんなが{手伝|てつだ}ってくれた。", answer: "をはじめ", options: ["をはじめ","にくらべて","に{関|かん}して","について"], en: "Everyone in the class helped me, with Tanaka-san leading the way." },
      { type: "fill", jp: "{京都|きょうと}＿＿{古|ふる}い{町|まち}には、{外国人|がいこくじん}が{多|おお}い。", answer: "をはじめとする", options: ["をはじめとする","をはじめて","がはじめる","にはじめた"], en: "Old towns such as Kyoto have many foreign visitors." },
      { type: "order", tiles: ["{社長|しゃちょう}を","はじめ","{社員|しゃいん}{全員|ぜんいん}が","{来|き}た"], en: "Everyone came, from the president down." },
      { type: "order", tiles: ["ガラスを","はじめ","いろいろな","ざいりょうを","{使|つか}う"], en: "We use various materials, starting with glass." },
      { type: "choose", q: "What comes after Xをはじめ?", answer: "A wider group that includes X", options: ["A wider group that includes X","A contrast with X","A reason for X","Something that stopped because of X"] },
      { type: "choose", q: "Which sentence is correct?", answer: "{父|ちち}をはじめ、{家族|かぞく}みんなが{喜|よろこ}んだ。", options: ["{父|ちち}をはじめ、{家族|かぞく}みんなが{喜|よろこ}んだ。","{父|ちち}にはじめ、{家族|かぞく}みんなが{喜|よろこ}んだ。","{父|ちち}をはじめて、{家族|かぞく}みんなが{喜|よろこ}んだ。","{父|ちち}のはじめ、{家族|かぞく}みんなが{喜|よろこ}んだ。"] }
    ]
  },
  {
    id: "L214-3",
    lesson: 214,
    title: "～ため (written purpose and reason)",
    meaning: "In order to, because of",
    explain: "In writing, ため shows a purpose after a dictionary-form verb and a reason after a past or stative clause.",
    examples: [
      { jp: "{工場|こうじょう}のきかいを{新|あたら}しくするため、{三日間|みっかかん}{生産|せいさん}を{止|と}める。", ro: "Kōjō no kikai o atarashiku suru tame, mikkakan seisan o tomeru.", en: "Production will stop for three days in order to replace the factory's machines." },
      { jp: "ざいりょうの{値段|ねだん}が{上|あ}がったため、{商品|しょうひん}も{高|たか}くなった。", ro: "Zairyō no nedan ga agatta tame, shōhin mo takaku natta.", en: "Because material prices rose, the products also became more expensive." },
      { jp: "{人|ひと}が{足|た}りないため、{工場|こうじょう}は{夜|よる}は{動|うご}いていない。", ro: "Hito ga tarinai tame, kōjō wa yoru wa ugoite inai.", en: "The factory does not run at night because it is short of staff." }
    ],
    drills: [
      { type: "fill", jp: "{安全|あんぜん}の＿＿、きかいを{止|と}めてください。", answer: "ため", options: ["ため","ほど","まま","ばかり"], en: "For safety, please stop the machine." },
      { type: "fill", jp: "{雪|ゆき}が{降|ふ}った＿＿、トラックが{遅|おく}れた。", answer: "ため", options: ["ため","のに","まで","ほど"], en: "The truck was late because it snowed." },
      { type: "fill", jp: "{新|あたら}しい{工場|こうじょう}を＿＿ため、{土地|とち}を{買|か}った。", answer: "{建|た}てる", options: ["{建|た}てる","{建|た}てた","{建|た}てて","{建|た}てない"], en: "They bought land in order to build a new factory." },
      { type: "order", tiles: ["{品質|ひんしつ}を","よくするため","きかいを","{調|しら}べた"], en: "They inspected the machines in order to improve quality." },
      { type: "order", tiles: ["{人|ひと}が","{足|た}りないため","{店|みせ}は","{休|やす}みです"], en: "The shop is closed because it is short of staff." },
      { type: "choose", q: "In 値段が上がったため、客が少なくなった, what does ため show?", answer: "A reason", options: ["A reason","A purpose","A time limit","A comparison"] }
    ]
  },
  {
    id: "L214-4",
    lesson: 214,
    title: "N + にくらべて",
    meaning: "Compared with",
    explain: "にくらべて sets up a comparison with the noun as the standard.",
    examples: [
      { jp: "{去年|きょねん}にくらべて、{今年|ことし}は{米|こめ}の{生産|せいさん}が{増|ふ}えた。", ro: "Kyonen ni kurabete, kotoshi wa kome no seisan ga fueta.", en: "Compared with last year, rice production has risen this year." },
      { jp: "プラスチックはガラスにくらべてかるい。", ro: "Purasuchikku wa garasu ni kurabete karui.", en: "Plastic is light compared with glass." },
      { jp: "{昔|むかし}にくらべると、{工場|こうじょう}の{仕事|しごと}は{楽|らく}になった。", ro: "Mukashi ni kuraberu to, kōjō no shigoto wa raku ni natta.", en: "Compared with the past, factory work has become easier." }
    ],
    drills: [
      { type: "fill", jp: "{紙|かみ}＿＿、{木|き}は{重|おも}い。", answer: "にくらべて", options: ["にくらべて","について","に{関|かん}して","をはじめ"], en: "Compared with paper, wood is heavy." },
      { type: "fill", jp: "おおさかは{東京|とうきょう}＿＿ぶっかが{安|やす}い。", answer: "にくらべて", options: ["にくらべて","について","として","をはじめ"], en: "Compared with Tokyo, prices in Osaka are low." },
      { type: "fill", jp: "{昔|むかし}に＿＿、{今|いま}は{便利|べんり}だ。", answer: "くらべて", options: ["くらべて","くらべた","くらべない","くらべます"], en: "Compared with the past, things are convenient now." },
      { type: "order", tiles: ["{去年|きょねん}に","くらべて","{今年|ことし}は","{雨|あめ}が","{多|おお}い"], en: "Compared with last year, there is a lot of rain this year." },
      { type: "order", tiles: ["{車|くるま}に","くらべると","{電車|でんしゃ}は","{安全|あんぜん}だ"], en: "Compared with cars, trains are safe." },
      { type: "choose", q: "Which phrase means 'compared with glass'?", answer: "ガラスにくらべて", options: ["ガラスにくらべて","ガラスをくらべて","ガラスでくらべて","ガラスがくらべて"] }
    ]
  },

  // ───────── Unit 15: Nature and weather (L: 215) ─────────
  {
    id: "L215-1",
    lesson: 215,
    title: "～たら、～た",
    meaning: "When I did ~, I found or it happened that ~",
    explain: "With a past ending, たら reports something you found or something that happened after an action.",
    examples: [
      { jp: "{窓|まど}を{開|あ}けたら、{雪|ゆき}が{降|ふ}っていた。", ro: "Mado o aketara, yuki ga futte ita.", en: "When I opened the window, it was snowing." },
      { jp: "{朝|あさ}{起|お}きたら、{庭|にわ}が{真|ま}っ{白|しろ}だった。", ro: "Asa okitara, niwa ga masshiro datta.", en: "When I woke up, the garden was pure white." },
      { jp: "{山|やま}に{登|のぼ}ったら、{急|きゅう}に{天気|てんき}が{悪|わる}くなった。", ro: "Yama ni nobottara, kyū ni tenki ga waruku natta.", en: "When I climbed the mountain, the weather suddenly turned bad." }
    ],
    drills: [
      { type: "fill", jp: "{外|そと}に{出|で}＿＿、{雨|あめ}が{降|ふ}っていた。", answer: "たら", options: ["たら","ても","ながら","ないで"], en: "When I went outside, it was raining." },
      { type: "fill", jp: "{海|うみ}へ{行|い}ったら、なみが{高|たか}＿＿。", answer: "かった", options: ["かった","い","くて","かったら"], en: "When I went to the sea, the waves were high." },
      { type: "order", tiles: ["{朝|あさ}","{窓|まど}を{開|あ}けたら","{海|うみ}が","{見|み}えた"], en: "When I opened the window in the morning, I could see the sea." },
      { type: "order", tiles: ["{天気|てんき}{予報|よほう}を","{見|み}たら","{明日|あした}は","{雪|ゆき}","だった"], en: "When I checked the forecast, tomorrow was going to be snow." },
      { type: "choose", q: "What does ～たら～た describe?", answer: "Something found or met after an action", options: ["Something found or met after an action","A plan for the future","An order to someone","A wish about tomorrow"] },
      { type: "choose", q: "Which sentence shows a discovery?", answer: "{箱|はこ}を{開|あ}けたら、{猫|ねこ}がいた。", options: ["{箱|はこ}を{開|あ}けたら、{猫|ねこ}がいた。","{箱|はこ}を{開|あ}けたら、{見|み}てください。","{箱|はこ}を{開|あ}けたいです。","{箱|はこ}を{開|あ}ける{前|まえ}に{見|み}ます。"] }
    ]
  },
  {
    id: "L215-2",
    lesson: 215,
    title: "～ほど (degree)",
    meaning: "So ~ that, to the point of",
    explain: "ほど shows how far a state goes by comparing it with an extreme result, and after a number it means 'about'.",
    examples: [
      { jp: "{今日|きょう}は{息|いき}ができないほど{風|かぜ}が{強|つよ}い。", ro: "Kyō wa iki ga dekinai hodo kaze ga tsuyoi.", en: "The wind today is so strong I can hardly breathe." },
      { jp: "{川|かわ}の{水|みず}は、そこが{見|み}えるほどきれいだ。", ro: "Kawa no mizu wa, soko ga mieru hodo kirei da.", en: "The river water is so clean you can see the bottom." },
      { jp: "{雨|あめ}は{三日|みっか}ほど{続|つづ}いた。", ro: "Ame wa mikka hodo tsuzuita.", en: "The rain continued for about three days." }
    ],
    drills: [
      { type: "fill", jp: "{目|め}を{開|あ}けられない＿＿、{雪|ゆき}が{強|つよ}い。", answer: "ほど", options: ["ほど","だけ","しか","まで"], en: "The snow is so strong I can't open my eyes." },
      { type: "fill", jp: "{声|こえ}が{出|で}ない＿＿{笑|わら}った。", answer: "ほど", options: ["ほど","ため","のに","さえ"], en: "I laughed so hard that I lost my voice." },
      { type: "fill", jp: "{大雨|おおあめ}は{二日|ふつか}＿＿{続|つづ}いた。", answer: "ほど", options: ["ほど","ごろ","しか","こそ"], en: "The heavy rain lasted about two days." },
      { type: "order", tiles: ["{今日|きょう}は","{歩|ある}けない","ほど","{風|かぜ}が","{強|つよ}い"], en: "Today the wind is so strong you can't walk." },
      { type: "order", tiles: ["{信|しん}じられない","ほど","{空|そら}が","きれいだった"], en: "The sky was unbelievably beautiful." },
      { type: "choose", q: "What does 死ぬほど疲れた mean?", answer: "I was extremely tired.", options: ["I was extremely tired.","I almost died of an illness.","I was less tired than before.","I was tired after someone died."] }
    ]
  },
  {
    id: "L215-3",
    lesson: 215,
    title: "～くらい・ぐらい",
    meaning: "About; to the extent that; at least",
    explain: "くらい gives a rough amount, a degree, or a small minimum that is treated as easy.",
    examples: [
      { jp: "{雪|ゆき}は{五十|ごじゅっ}センチくらい{積|つ}もった。", ro: "Yuki wa gojussenchi kurai tsumotta.", en: "About fifty centimetres of snow piled up." },
      { jp: "{台風|たいふう}の{夜|よる}は、{家|いえ}がゆれるくらい{風|かぜ}が{吹|ふ}いた。", ro: "Taifū no yoru wa, ie ga yureru kurai kaze ga fuita.", en: "On the night of the typhoon, the wind blew so hard the house shook." },
      { jp: "{少|すこ}しの{雨|あめ}くらいなら、かさはいらない。", ro: "Sukoshi no ame kurai nara, kasa wa iranai.", en: "For a little rain like that, I do not need an umbrella." }
    ],
    drills: [
      { type: "fill", jp: "{天気|てんき}{予報|よほう}＿＿{毎朝|まいあさ}{見|み}たほうがいい。", answer: "くらい", options: ["くらい","ほど","しか","まで"], en: "You should at least check the weather forecast every morning." },
      { type: "fill", jp: "{海|うみ}まで{歩|ある}いて{十分|じゅっぷん}＿＿です。", answer: "くらい", options: ["くらい","しか","さえ","こそ"], en: "It is about ten minutes' walk to the sea." },
      { type: "order", tiles: ["これ","くらいの","{雨|あめ}なら","だいじょうぶです"], en: "Rain like this is no problem." },
      { type: "order", tiles: ["{耳|みみ}が","{痛|いた}い","くらい","{寒|さむ}い"], en: "It is so cold that my ears hurt." },
      { type: "order", tiles: ["{空|そら}が","{怖|こわ}い","くらい","{暗|くら}かった"], en: "The sky was so dark it was scary." },
      { type: "choose", q: "Which sentence uses くらい to mean 'at least, a small thing like'?", answer: "メールくらい{書|か}いてください。", options: ["メールくらい{書|か}いてください。","{雪|ゆき}は{一|いち}メートルくらい{積|つ}もった。","{海|うみ}まで{五分|ごふん}くらいです。","{窓|まど}がゆれるくらい{風|かぜ}が{強|つよ}い。"] }
    ]
  },
  {
    id: "L215-4",
    lesson: 215,
    title: "～かもしれない (review)",
    meaning: "Might, may",
    explain: "かもしれない adds a possibility of about fifty percent or less to any plain sentence.",
    examples: [
      { jp: "{明日|あした}は{台風|たいふう}が{来|く}るかもしれない。", ro: "Ashita wa taifū ga kuru kamo shirenai.", en: "A typhoon might come tomorrow." },
      { jp: "この{天気|てんき}なら、{山|やま}は{寒|さむ}いかもしれません。", ro: "Kono tenki nara, yama wa samui kamo shiremasen.", en: "With this weather, it may be cold in the mountains." },
      { jp: "もしかしたら、{夜|よる}には{雪|ゆき}になるかもしれない。", ro: "Moshikashitara, yoru ni wa yuki ni naru kamo shirenai.", en: "It might possibly turn to snow by tonight." }
    ],
    drills: [
      { type: "fill", jp: "{山|やま}の{上|うえ}は{今|いま}も{雪|ゆき}＿＿。", answer: "かもしれない", options: ["かもしれない","だかもしれない","なかもしれない","にかもしれない"], en: "There may still be snow at the top of the mountain." },
      { type: "fill", jp: "{今夜|こんや}は＿＿かもしれない。", answer: "{静|しず}か", options: ["{静|しず}か","{静|しず}かな","{静|しず}かだ","{静|しず}かに"], en: "It may be quiet tonight." },
      { type: "fill", jp: "もしかしたら、{朝|あさ}までに{雨|あめ}がやむ＿＿。", answer: "かもしれません", options: ["かもしれません","はずがありません","ことにします","ことはありません"], en: "The rain might stop by morning." },
      { type: "order", tiles: ["{午後|ごご}から","{雪|ゆき}に","なる","かもしれない"], en: "It may turn to snow from the afternoon." },
      { type: "order", tiles: ["{今年|ことし}の{夏|なつ}は","{去年|きょねん}より","あつい","かもしれません"], en: "This summer may be hotter than last year." },
      { type: "choose", q: "Which sentence sounds least certain?", answer: "{雨|あめ}が{降|ふ}るかもしれない。", options: ["{雨|あめ}が{降|ふ}るかもしれない。","{雨|あめ}が{降|ふ}るはずだ。","{雨|あめ}が{降|ふ}るに{違|ちが}いない。","{雨|あめ}が{降|ふ}るだろう。"] }
    ]
  },

  // ───────── Unit 16: Body and health (L: 216) ─────────
  {
    id: "L216-1",
    lesson: 216,
    title: "～ないと",
    meaning: "If you don't ~; I have to ~",
    explain: "ないと warns that a bad result follows if something is not done, and alone it means 'I have to'.",
    examples: [
      { jp: "{早|はや}く{薬|くすり}を{飲|の}まないと、{熱|ねつ}が{下|さ}がらないよ。", ro: "Hayaku kusuri o nomanai to, netsu ga sagaranai yo.", en: "If you don't take your medicine soon, your fever won't go down." },
      { jp: "{毎日|まいにち}{運動|うんどう}しないと、{体|からだ}がよわくなる。", ro: "Mainichi undō shinai to, karada ga yowaku naru.", en: "If you don't exercise every day, your body gets weak." },
      { jp: "もう{寝|ね}ないと。{明日|あした}は{朝|あさ}から{病院|びょういん}だ。", ro: "Mō nenai to. Ashita wa asa kara byōin da.", en: "I've got to go to bed now. I'm at the hospital from the morning tomorrow." }
    ],
    drills: [
      { type: "fill", jp: "ちゃんと{食|た}べ＿＿、{元気|げんき}にならないよ。", answer: "ないと", options: ["ないと","ると","たら","ながら"], en: "If you don't eat properly, you won't get better." },
      { type: "fill", jp: "{医者|いしゃ}に{見|み}て＿＿、{原因|げんいん}はわからない。", answer: "もらわないと", options: ["もらわないと","もらうと","もらいながら","あげないと"], en: "If you don't get a doctor to look at it, you won't know the cause." },
      { type: "order", tiles: ["{歯|は}を","みがかないと","むしばに","なるよ"], en: "If you don't brush your teeth, you'll get cavities." },
      { type: "order", tiles: ["もう","{薬|くすり}を","{飲|の}まないと"], en: "I've got to take my medicine now." },
      { type: "choose", q: "What does 行かないと mean on its own?", answer: "I have to go.", options: ["I have to go.","I will not go.","Let's go.","I did not go."] },
      { type: "choose", q: "What usually follows Vないと、…?", answer: "A bad result", options: ["A bad result","A happy wish","A polite request","An invitation"] }
    ]
  },
  {
    id: "L216-2",
    lesson: 216,
    title: "～ないことには",
    meaning: "Unless, if ~ doesn't happen first",
    explain: "ないことには says a first condition must be met or the next thing is impossible.",
    examples: [
      { jp: "けんさをしないことには、{病気|びょうき}の{原因|げんいん}はわからない。", ro: "Kensa o shinai koto ni wa, byōki no gen'in wa wakaranai.", en: "Unless we run tests, we won't know the cause of the illness." },
      { jp: "{体|からだ}が{元気|げんき}でないことには、いい{仕事|しごと}はできない。", ro: "Karada ga genki de nai koto ni wa, ii shigoto wa dekinai.", en: "Unless your body is healthy, you can't do good work." },
      { jp: "{食|た}べてみないことには、{味|あじ}はわからない。", ro: "Tabete minai koto ni wa, aji wa wakaranai.", en: "You can't tell the taste until you try it." }
    ],
    drills: [
      { type: "fill", jp: "{熱|ねつ}が{下|さ}がら＿＿、{学校|がっこう}には{行|い}けない。", answer: "ないことには", options: ["ないことには","ないことにする","ないことはない","ることには"], en: "Unless the fever goes down, I can't go to school." },
      { type: "fill", jp: "{医者|いしゃ}に{聞|き}かないことには、＿＿。", answer: "{何|なに}も{言|い}えない", options: ["{何|なに}も{言|い}えない","{何|なに}でも{言|い}える","すぐ{元気|げんき}になった","{今|いま}{聞|き}いてください"], en: "Unless we ask the doctor, we can't say anything." },
      { type: "order", tiles: ["{医者|いしゃ}に","{見|み}せないことには","{安心|あんしん}","できない"], en: "I can't relax until a doctor has seen it." },
      { type: "order", tiles: ["やって","みないことには","わからない"], en: "You won't know unless you try." },
      { type: "choose", q: "What must come after ないことには?", answer: "A negative result, something impossible", options: ["A negative result, something impossible","A command","A past event that went well","An invitation"] },
      { type: "choose", q: "Which sentence is correct?", answer: "{休|やす}まないことには、{治|なお}らない。", options: ["{休|やす}まないことには、{治|なお}らない。","{休|やす}まないことには、{治|なお}る。","{休|やす}むないことには、{治|なお}らない。","{休|やす}まないことでは、{治|なお}らない。"] }
    ]
  },
  {
    id: "L216-3",
    lesson: 216,
    title: "V dictionary + ことはない",
    meaning: "There is no need to",
    explain: "ことはない tells someone that an action is unnecessary, usually to reassure them.",
    examples: [
      { jp: "かるいかぜだから、{心配|しんぱい}することはないよ。", ro: "Karui kaze da kara, shinpai suru koto wa nai yo.", en: "It is only a light cold, so there is no need to worry." },
      { jp: "そんなに{急|いそ}いで{病院|びょういん}に{行|い}くことはない。", ro: "Sonna ni isoide byōin ni iku koto wa nai.", en: "There is no need to rush to the hospital like that." },
      { jp: "{一回|いっかい}{失敗|しっぱい}したくらいで、なくことはありません。", ro: "Ikkai shippai shita kurai de, naku koto wa arimasen.", en: "There is no need to cry over one failure." }
    ],
    drills: [
      { type: "fill", jp: "{少|すこ}し{休|やす}めば{治|なお}るから、{病院|びょういん}へ{行|い}く＿＿。", answer: "ことはない", options: ["ことはない","ことにする","ことになる","わけだ"], en: "It will get better with a little rest, so there is no need to go to the hospital." },
      { type: "fill", jp: "そんなことで{悲|かな}しむ＿＿ありません。", answer: "ことは", options: ["ことは","ことに","ために","ほどに"], en: "There is no need to be sad about that." },
      { type: "fill", jp: "{一度|いちど}も{入院|にゅういん}＿＿ことはない。", answer: "した", options: ["した","する","して","しない"], en: "I have never been in hospital." },
      { type: "order", tiles: ["{君|きみ}が","あやまる","ことは","ない"], en: "You do not need to apologise." },
      { type: "order", tiles: ["そんなに","{心配|しんぱい}する","ことは","ありません"], en: "There is no need to worry so much." },
      { type: "choose", q: "Which sentence means 'I have never had a fever'?", answer: "{熱|ねつ}を{出|だ}したことはない。", options: ["{熱|ねつ}を{出|だ}したことはない。","{熱|ねつ}を{出|だ}すことにする。","{熱|ねつ}を{出|だ}さないことはない。","{熱|ねつ}を{出|だ}したことにする。"] }
    ]
  },
  {
    id: "L216-4",
    lesson: 216,
    title: "～に限る",
    meaning: "Nothing beats, the best thing is",
    explain: "に限る states the speaker's personal view that one thing is simply the best choice.",
    examples: [
      { jp: "{疲|つか}れたときは、{早|はや}く{寝|ね}るに{限|かぎ}る。", ro: "Tsukareta toki wa, hayaku neru ni kagiru.", en: "When you are tired, the best thing is to go to bed early." },
      { jp: "かぜのときは、{何|なに}もしないで{休|やす}むに{限|かぎ}る。", ro: "Kaze no toki wa, nani mo shinai de yasumu ni kagiru.", en: "When you have a cold, nothing beats doing nothing and resting." },
      { jp: "{夏|なつ}はやっぱり{冷|つめ}たいビールに{限|かぎ}る。", ro: "Natsu wa yappari tsumetai bīru ni kagiru.", en: "In summer, you just can't beat a cold beer." }
    ],
    drills: [
      { type: "fill", jp: "あつい{日|ひ}は、プールで{泳|およ}ぐ＿＿。", answer: "に{限|かぎ}る", options: ["に{限|かぎ}る","にくらべて","をはじめ","について"], en: "On a hot day, nothing beats a swim in the pool." },
      { type: "fill", jp: "{朝|あさ}はやっぱりコーヒー＿＿{限|かぎ}る。", answer: "に", options: ["に","を","が","で"], en: "In the morning, nothing beats coffee." },
      { type: "fill", jp: "{痛|いた}いときは、むりを＿＿に{限|かぎ}る。", answer: "しない", options: ["しない","しなかった","しなくて","しないで"], en: "When it hurts, the best thing is not to push yourself." },
      { type: "order", tiles: ["{疲|つか}れた{日|ひ}は","{早|はや}く","{寝|ね}る","に{限|かぎ}る"], en: "On tiring days, the best thing is to go to bed early." },
      { type: "order", tiles: ["{旅行|りょこう}は","{友達|ともだち}と","{行|い}く","に{限|かぎ}る"], en: "When it comes to travel, nothing beats going with friends." },
      { type: "choose", q: "What does ～に限る express?", answer: "The speaker's view that something is the best choice", options: ["The speaker's view that something is the best choice","An official rule","A fact proved by science","A maximum number of people"] }
    ]
  },

  // ───────── Unit 17: Feelings and personality (L: 217) ─────────
  {
    id: "L217-1",
    lesson: 217,
    title: "～よね",
    meaning: "Right? Don't you think? (checking shared feeling)",
    explain: "よね checks that the listener shares what you think or remember.",
    examples: [
      { jp: "この{映画|えいが}、{悲|かな}しいよね。", ro: "Kono eiga, kanashii yo ne.", en: "This film is sad, don't you think?" },
      { jp: "{明日|あした}の{約束|やくそく}、{三時|さんじ}だったよね。", ro: "Ashita no yakusoku, sanji datta yo ne.", en: "Our plan tomorrow was for three o'clock, right?" },
      { jp: "カランさんって、{本当|ほんとう}に{優|やさ}しいよね。", ro: "Karan-san tte, hontō ni yasashii yo ne.", en: "Karan is really kind, isn't he?" }
    ],
    drills: [
      { type: "fill", jp: "{彼|かれ}って、ちょっと{変|へん}だ＿＿。", answer: "よね", options: ["よね","っけ","のに","とか"], en: "He's a bit odd, don't you think?" },
      { type: "fill", jp: "A：{怖|こわ}い{話|はなし}、{苦手|にがて}＿＿。 B：うん、{苦手|にがて}。", answer: "だよね", options: ["だよね","だかな","なよね","のよね"], en: "A: You can't stand scary stories, right? B: Yeah, I can't." },
      { type: "order", tiles: ["あの{人|ひと}","いつも","{楽|たの}しそう","だよね"], en: "That person always looks cheerful, don't they?" },
      { type: "order", tiles: ["{今日|きょう}","{休|やす}み","だった","よね"], en: "Today was a day off, wasn't it?" },
      { type: "choose", q: "You think class is at ten and want a friend to confirm. What do you say?", answer: "じゅぎょうは{十時|じゅうじ}だよね。", options: ["じゅぎょうは{十時|じゅうじ}だよね。","じゅぎょうは{十時|じゅうじ}だよ。","じゅぎょうは{十時|じゅうじ}だった。","じゅぎょうは{十時|じゅうじ}だ。"] },
      { type: "choose", q: "Which ending tells the listener something new?", answer: "よ", options: ["よ","ね","よね","っけ"] }
    ]
  },
  {
    id: "L217-2",
    lesson: 217,
    title: "～かな",
    meaning: "I wonder",
    explain: "かな shows you are wondering, often to yourself, and ないかな wishes for something.",
    examples: [
      { jp: "{彼女|かのじょ}、{怒|おこ}っているかな。", ro: "Kanojo, okotte iru ka na.", en: "I wonder if she is angry." },
      { jp: "{明日|あした}は{晴|は}れるかな。", ro: "Ashita wa hareru ka na.", en: "I wonder if it will be sunny tomorrow." },
      { jp: "{早|はや}く{夏休|なつやす}みにならないかな。", ro: "Hayaku natsuyasumi ni naranai ka na.", en: "I wish the summer holidays would hurry up and come." }
    ],
    drills: [
      { type: "fill", jp: "マリアさんは{元気|げんき}＿＿。", answer: "かな", options: ["かな","だかな","なかな","にかな"], en: "I wonder if Maria is well." },
      { type: "fill", jp: "このプレゼント、{喜|よろこ}んでくれる＿＿。", answer: "かな", options: ["かな","っけ","のに","こそ"], en: "I wonder if they will like this present." },
      { type: "fill", jp: "{早|はや}く{電車|でんしゃ}が＿＿かな。", answer: "{来|こ}ない", options: ["{来|こ}ない","{来|き}た","{来|こ}よう","{来|き}て"], en: "I wish the train would come soon." },
      { type: "order", tiles: ["{今日|きょう}は","{何|なに}を","{食|た}べよう","かな"], en: "I wonder what I should eat today." },
      { type: "order", tiles: ["この{服|ふく}","{私|わたし}に","{似合|にあ}う","かな"], en: "I wonder if these clothes suit me." },
      { type: "choose", q: "Which situation suits かな best?", answer: "Talking to yourself or to close friends", options: ["Talking to yourself or to close friends","Writing to your company president","Speaking to a customer","Writing a formal report"] }
    ]
  },
  {
    id: "L217-3",
    lesson: 217,
    title: "～っけ",
    meaning: "Was it ~ again? (trying to remember)",
    explain: "っけ asks about something you once knew but can't quite remember, or recalls the past fondly.",
    examples: [
      { jp: "{今日|きょう}は{何曜日|なんようび}だっけ。", ro: "Kyō wa nan'yōbi dakke.", en: "What day is it today again?" },
      { jp: "あの{人|ひと}の{名前|なまえ}、{何|なん}だっけ。", ro: "Ano hito no namae, nan dakke.", en: "What was that person's name again?" },
      { jp: "{子供|こども}のころ、よくここで{遊|あそ}んだっけ。", ro: "Kodomo no koro, yoku koko de asondakke.", en: "We used to play here a lot as children, didn't we?" }
    ],
    drills: [
      { type: "fill", jp: "{約束|やくそく}は{何時|なんじ}だ＿＿。", answer: "っけ", options: ["っけ","かな","のに","ばかり"], en: "What time was our appointment again?" },
      { type: "fill", jp: "もう{薬|くすり}を＿＿っけ。", answer: "{飲|の}んだ", options: ["{飲|の}んだ","{飲|の}み","{飲|の}もう","{飲|の}んで"], en: "Did I already take my medicine?" },
      { type: "fill", jp: "{会議|かいぎ}は{明日|あした}＿＿っけ。", answer: "でした", options: ["でした","でしょう","ます","ない"], en: "Was the meeting tomorrow? (polite)" },
      { type: "order", tiles: ["あの{店|みせ}の","{名前|なまえ}","{何|なん}だ","っけ"], en: "What was the name of that shop again?" },
      { type: "order", tiles: ["{宿題|しゅくだい}","あった","っけ"], en: "Did we have homework?" },
      { type: "choose", q: "When do you use っけ?", answer: "When trying to recall something you once knew", options: ["When trying to recall something you once knew","When giving someone new information","When giving an order","When refusing politely"] }
    ]
  },
  {
    id: "L217-4",
    lesson: 217,
    title: "～のに (sentence ending)",
    meaning: "And yet! I wish ~ (regret, frustration)",
    explain: "Ending a sentence with のに shows regret or frustration that things did not go as hoped.",
    examples: [
      { jp: "{手伝|てつだ}ってくれたらよかったのに。", ro: "Tetsudatte kuretara yokatta noni.", en: "I wish you had helped me." },
      { jp: "せっかく{作|つく}ったのに。", ro: "Sekkaku tsukutta noni.", en: "And I went to all that trouble to make it." },
      { jp: "{試験|しけん}に{合格|ごうかく}すると{思|おも}っていたのに。", ro: "Shiken ni gōkaku suru to omotte ita noni.", en: "And I was so sure I would pass the exam." }
    ],
    drills: [
      { type: "fill", jp: "あんなにれんしゅうした＿＿。", answer: "のに", options: ["のに","から","ので","ため"], en: "And after I practised so much!" },
      { type: "fill", jp: "{一緒|いっしょ}に{来|く}れば{楽|たの}しかった＿＿。", answer: "のに", options: ["のに","っけ","ので","ばかり"], en: "It would have been fun if you had come with us." },
      { type: "fill", jp: "{好|す}きだと{言|い}えば＿＿のに。", answer: "よかった", options: ["よかった","よくて","よくない","よければ"], en: "I should have said that I liked them." },
      { type: "order", tiles: ["{言|い}って","くれれば","よかった","のに"], en: "You should have told me." },
      { type: "order", tiles: ["あんなに","{約束|やくそく}した","のに"], en: "And after we promised so firmly!" },
      { type: "choose", q: "What feeling does a sentence-final のに show?", answer: "Regret or frustration", options: ["Regret or frustration","Joy that a plan worked","A polite request","A simple, neutral reason"] }
    ]
  },

  // ───────── Unit 18: School and university (L: 218) ─────────
  {
    id: "L218-1",
    lesson: 218,
    title: "～さえ～ば",
    meaning: "As long as, if only",
    explain: "さえ～ば says one condition is all you need for the result.",
    examples: [
      { jp: "{単語|たんご}さえ{覚|おぼ}えれば、{読|よ}めるようになる。", ro: "Tango sae oboereba, yomeru yō ni naru.", en: "As long as you memorise the words, you'll become able to read it." },
      { jp: "{辞書|じしょ}さえあれば、{一人|ひとり}でも{勉強|べんきょう}できる。", ro: "Jisho sae areba, hitori de mo benkyō dekiru.", en: "As long as I have a dictionary, I can study on my own." },
      { jp: "{説明|せつめい}を{読|よ}みさえすれば、{答|こた}えはわかる。", ro: "Setsumei o yomi sae sureba, kotae wa wakaru.", en: "If you just read the explanation, you'll know the answer." }
    ],
    drills: [
      { type: "fill", jp: "{宿題|しゅくだい}＿＿{出|だ}せば、{試験|しけん}は{受|う}けられる。", answer: "さえ", options: ["さえ","ほど","まで","ばかり"], en: "As long as you hand in the homework, you can take the exam." },
      { type: "fill", jp: "{時間|じかん}さえ＿＿、もっと{本|ほん}が{読|よ}める。", answer: "あれば", options: ["あれば","ある","あった","あって"], en: "If only I had the time, I could read more books." },
      { type: "fill", jp: "{先生|せんせい}に{聞|き}き＿＿すれば、すぐわかるよ。", answer: "さえ", options: ["さえ","ほど","まで","しか"], en: "If you just ask the teacher, you'll understand right away." },
      { type: "order", tiles: ["{辞書|じしょ}","さえ","あれば","{読|よ}める"], en: "As long as I have a dictionary, I can read it." },
      { type: "order", tiles: ["{毎日|まいにち}","{勉強|べんきょう}","さえ","すれば","{合格|ごうかく}できる"], en: "If you just study every day, you can pass." },
      { type: "choose", q: "Which verb form goes before さえすれば?", answer: "{読|よ}み", options: ["{読|よ}み","{読|よ}む","{読|よ}んだ","{読|よ}もう"] }
    ]
  },
  {
    id: "L218-2",
    lesson: 218,
    title: "～ても～なくても",
    meaning: "Whether ~ or not",
    explain: "ても～なくても says the result stays the same in either case.",
    examples: [
      { jp: "{雨|あめ}が{降|ふ}っても{降|ふ}らなくても、{運動会|うんどうかい}はある。", ro: "Ame ga futte mo furanakute mo, undōkai wa aru.", en: "Rain or no rain, the sports day will go ahead." },
      { jp: "じゅぎょうに{出|で}ても{出|で}なくても、せいせきは{変|か}わらない。", ro: "Jugyō ni dete mo denakute mo, seiseki wa kawaranai.", en: "Whether you attend class or not, your grade won't change." },
      { jp: "{留学|りゅうがく}してもしなくても、{語学|ごがく}の{勉強|べんきょう}は{続|つづ}けるつもりだ。", ro: "Ryūgaku shite mo shinakute mo, gogaku no benkyō wa tsuzukeru tsumori da.", en: "Whether I study abroad or not, I plan to keep studying languages." }
    ],
    drills: [
      { type: "fill", jp: "{合格|ごうかく}しても＿＿、れんらくをください。", answer: "しなくても", options: ["しなくても","しないで","した","しても"], en: "Whether you pass or not, please let me know." },
      { type: "fill", jp: "{試験|しけん}が{難|むずか}しくても＿＿、{毎日|まいにち}{勉強|べんきょう}する。", answer: "{難|むずか}しくなくても", options: ["{難|むずか}しくなくても","{難|むずか}しいでも","{難|むずか}しくて","{難|むずか}しくなくて"], en: "Whether the exam is hard or not, I study every day." },
      { type: "fill", jp: "{学生|がくせい}でも＿＿、{図書館|としょかん}は{使|つか}えます。", answer: "{学生|がくせい}でなくても", options: ["{学生|がくせい}でなくても","{学生|がくせい}だなくても","{学生|がくせい}ても","{学生|がくせい}がなくて"], en: "Whether you are a student or not, you can use the library." },
      { type: "order", tiles: ["{行|い}っても","{行|い}かなくても","{同|おな}じ","だ"], en: "It is the same whether I go or not." },
      { type: "order", tiles: ["{勉強|べんきょう}しても","しなくても","けっかは","{変|か}わらない"], en: "Whether I study or not, the result won't change." },
      { type: "choose", q: "What does ～ても～なくても tell you?", answer: "The result is the same in both cases", options: ["The result is the same in both cases","Only the first case is possible","You must do both things","The second case is better"] }
    ]
  },
  {
    id: "L218-3",
    lesson: 218,
    title: "～というのは・～とは",
    meaning: "X means, X is (defining a word)",
    explain: "というのは and とは introduce a word so you can define it, usually ending with ことです or ことである.",
    examples: [
      { jp: "「{留学|りゅうがく}」というのは、{外国|がいこく}へ{勉強|べんきょう}に{行|い}くことです。", ro: "\"Ryūgaku\" to iu no wa, gaikoku e benkyō ni iku koto desu.", en: "\"Ryūgaku\" means going abroad to study." },
      { jp: "{学割|がくわり}というのは、{学生|がくせい}のための{割引|わりびき}のことだ。", ro: "Gakuwari to iu no wa, gakusei no tame no waribiki no koto da.", en: "\"Gakuwari\" means a discount for students." },
      { jp: "{単位|たんい}とは、{大学|だいがく}でじゅぎょうを{受|う}けて{得|え}る{点数|てんすう}のことである。", ro: "Tan'i to wa, daigaku de jugyō o ukete eru tensū no koto de aru.", en: "A credit is the points you earn by taking classes at university." }
    ],
    drills: [
      { type: "fill", jp: "「きゅうこう」＿＿、じゅぎょうが{休|やす}みになることです。", answer: "というのは", options: ["というのは","にとって","というより","として"], en: "\"Kyūkō\" means a class being cancelled." },
      { type: "fill", jp: "「{予習|よしゅう}」というのは、じゅぎょうの{前|まえ}に{勉強|べんきょう}する＿＿です。", answer: "こと", options: ["こと","ばかり","ため","わけ"], en: "\"Yoshū\" means studying before class." },
      { type: "fill", jp: "そつろん＿＿、{大学|だいがく}の{最後|さいご}に{書|か}く{論文|ろんぶん}のことである。", answer: "とは", options: ["とは","ほど","ばかり","こそ"], en: "A \"sotsuron\" is the paper you write at the end of university." },
      { type: "order", tiles: ["{学割|がくわり}","というのは","{学生|がくせい}の","{割引|わりびき}","のことです"], en: "\"Gakuwari\" means a student discount." },
      { type: "order", tiles: ["{文法|ぶんぽう}","とは","{言葉|ことば}の","きそく","のことである"], en: "Grammar means the rules of a language." },
      { type: "choose", q: "Which of these is the most formal way to introduce a word?", answer: "とは", options: ["とは","というのは","って","っていうのは"] }
    ]
  },
  {
    id: "L218-4",
    lesson: 218,
    title: "～しか～ない",
    meaning: "Only, nothing but",
    explain: "しか plus a negative verb says 'only', with the feeling that it is not enough.",
    examples: [
      { jp: "{試験|しけん}まであと{三日|みっか}しかない。", ro: "Shiken made ato mikka shika nai.", en: "There are only three days left until the exam." },
      { jp: "この{問題|もんだい}は{五人|ごにん}しかできなかった。", ro: "Kono mondai wa gonin shika dekinakatta.", en: "Only five people could do this problem." },
      { jp: "もうあやまるしかない。", ro: "Mō ayamaru shika nai.", en: "There is nothing left to do but apologise." }
    ],
    drills: [
      { type: "fill", jp: "{教室|きょうしつ}には{学生|がくせい}が{二人|ふたり}＿＿いない。", answer: "しか", options: ["しか","だけ","ほど","こそ"], en: "There are only two students in the classroom." },
      { type: "fill", jp: "お{金|かね}が{百円|ひゃくえん}しか＿＿。", answer: "ありません", options: ["ありません","あります","ある","あった"], en: "I only have a hundred yen." },
      { type: "fill", jp: "{電車|でんしゃ}がないから、{歩|ある}いて{帰|かえ}る＿＿。", answer: "しかない", options: ["しかない","だけない","しかある","ことはない"], en: "There are no trains, so I have no choice but to walk home." },
      { type: "order", tiles: ["{朝|あさ}ごはんは","パン","しか","{食|た}べなかった"], en: "For breakfast I ate only bread." },
      { type: "order", tiles: ["もう","がんばる","しか","ない"], en: "All I can do now is try my best." },
      { type: "choose", q: "Which sentence is correct?", answer: "{水|みず}しか{飲|の}まない。", options: ["{水|みず}しか{飲|の}まない。","{水|みず}しか{飲|の}む。","{水|みず}をしか{飲|の}まない。","{水|みず}だけしか{飲|の}む。"] }
    ]
  },

  // ───────── Unit 19: Work and careers (L: 219) ─────────
  {
    id: "L219-1",
    lesson: 219,
    title: "N + として",
    meaning: "As, in the role of",
    explain: "として names the role, position or status in which someone or something acts.",
    examples: [
      { jp: "{私|わたし}はつうやくとして{会社|かいしゃ}で{働|はたら}いている。", ro: "Watashi wa tsūyaku to shite kaisha de hataraite iru.", en: "I work at a company as an interpreter." },
      { jp: "{部長|ぶちょう}として、チームの{責任|せきにん}を{取|と}ります。", ro: "Buchō to shite, chīmu no sekinin o torimasu.", en: "As department head, I take responsibility for the team." },
      { jp: "{研究者|けんきゅうしゃ}としての{経験|けいけん}を{生|い}かしたい。", ro: "Kenkyūsha to shite no keiken o ikashitai.", en: "I want to put my experience as a researcher to use." }
    ],
    drills: [
      { type: "fill", jp: "カランさんは{留学生|りゅうがくせい}＿＿{日本|にほん}に{来|き}た。", answer: "として", options: ["として","にとって","について","をはじめ"], en: "Karan came to Japan as an international student." },
      { type: "fill", jp: "{教師|きょうし}＿＿{仕事|しごと}は{大変|たいへん}だ。", answer: "としての", options: ["としての","としてに","としてを","にしての"], en: "The work of a teacher is hard." },
      { type: "fill", jp: "モチは{駅長|えきちょう}＿＿{働|はたら}いている。", answer: "として", options: ["として","にくらべて","に{関|かん}して","をはじめ"], en: "Mochi works as a stationmaster." },
      { type: "order", tiles: ["{店長|てんちょう}として","{責任|せきにん}を","{取|と}ります"], en: "I will take responsibility as the shop manager." },
      { type: "order", tiles: ["{医者|いしゃ}としての","{経験|けいけん}を","{話|はな}して","ください"], en: "Please tell us about your experience as a doctor." },
      { type: "choose", q: "Which phrase means 'in my role as a parent'?", answer: "{親|おや}として", options: ["{親|おや}として","{親|おや}にとって","{親|おや}について","{親|おや}をはじめ"] }
    ]
  },
  {
    id: "L219-2",
    lesson: 219,
    title: "N + にとって",
    meaning: "For, from the viewpoint of",
    explain: "にとって gives the person from whose viewpoint something is judged.",
    examples: [
      { jp: "{社員|しゃいん}にとって、{給料|きゅうりょう}は{大切|たいせつ}な{問題|もんだい}だ。", ro: "Shain ni totte, kyūryō wa taisetsu na mondai da.", en: "For employees, pay is an important issue." },
      { jp: "{私|わたし}にとって、この{仕事|しごと}は{夢|ゆめ}だった。", ro: "Watashi ni totte, kono shigoto wa yume datta.", en: "For me, this job was a dream." },
      { jp: "この{会社|かいしゃ}には、{働|はたら}く{親|おや}にとって{便利|べんり}な{制度|せいど}が{多|おお}い。", ro: "Kono kaisha ni wa, hataraku oya ni totte benri na seido ga ōi.", en: "This company has many systems that are useful for working parents." }
    ],
    drills: [
      { type: "fill", jp: "{外国人|がいこくじん}＿＿、けいごは{難|むずか}しい。", answer: "にとって", options: ["にとって","について","をはじめ","にくらべて"], en: "For foreigners, keigo is difficult." },
      { type: "fill", jp: "{彼|かれ}に＿＿、{家族|かぞく}が{一番|いちばん}{大事|だいじ}だ。", answer: "とって", options: ["とって","ついて","して","くらべて"], en: "For him, family matters most." },
      { type: "order", tiles: ["{新人|しんじん}に","とって","{朝|あさ}の{会議|かいぎ}は","{大変|たいへん}だ"], en: "For new employees, the morning meeting is tough." },
      { type: "order", tiles: ["{私|わたし}にとって","この{会社|かいしゃ}は","もう{一|ひと}つの","{家|いえ}です"], en: "For me, this company is a second home." },
      { type: "choose", q: "Which sentence is correct?", answer: "{私|わたし}にとって、この{仕事|しごと}は{大切|たいせつ}だ。", options: ["{私|わたし}にとって、この{仕事|しごと}は{大切|たいせつ}だ。","{私|わたし}にとって、この{計画|けいかく}に{賛成|さんせい}です。","{私|わたし}にとって、{明日|あした}{会社|かいしゃ}へ{行|い}きます。","{私|わたし}にとって、{部長|ぶちょう}と{話|はな}しました。"] },
      { type: "choose", q: "What normally comes after ～にとって?", answer: "A judgement or evaluation", options: ["A judgement or evaluation","An action you do","A command","A polite request"] }
    ]
  },
  {
    id: "L219-3",
    lesson: 219,
    title: "そんけいご (review)",
    meaning: "Honorific language: raising the other person",
    explain: "そんけいご raises the person who does the action, so use it for customers, bosses and teachers.",
    examples: [
      { jp: "{部長|ぶちょう}は{今|いま}、{会議室|かいぎしつ}にいらっしゃいます。", ro: "Buchō wa ima, kaigishitsu ni irasshaimasu.", en: "The department head is in the meeting room now." },
      { jp: "{社長|しゃちょう}はもう{昼|ひる}ごはんをめしあがりましたか。", ro: "Shachō wa mō hirugohan o meshiagarimashita ka.", en: "Has the president had lunch yet?" },
      { jp: "さとう{先生|せんせい}は{明日|あした}{東京|とうきょう}へお{帰|かえ}りになります。", ro: "Satō-sensei wa ashita Tōkyō e okaeri ni narimasu.", en: "Professor Satō will return to Tokyo tomorrow." }
    ],
    drills: [
      { type: "fill", jp: "{社長|しゃちょう}は{何|なん}と＿＿か。", answer: "おっしゃいました", options: ["おっしゃいました","もうしました","いたしました","うかがいました"], en: "What did the president say?" },
      { type: "fill", jp: "かちょうはこの{資料|しりょう}をもう＿＿か。", answer: "ごらんになりました", options: ["ごらんになりました","はいけんしました","おりました","まいりました"], en: "Has the section chief already seen these documents?" },
      { type: "fill", jp: "どうぞ、お{座|すわ}り＿＿。", answer: "ください", options: ["ください","します","いたします","もうします"], en: "Please take a seat." },
      { type: "order", tiles: ["{部長|ぶちょう}は","{何時|なんじ}に","お{帰|かえ}りに","なりますか"], en: "What time will the department head be going home?" },
      { type: "order", tiles: ["{先生|せんせい}が","お{書|か}きに","なった","{本|ほん}です"], en: "This is the book the teacher wrote." },
      { type: "choose", q: "What is the honorific verb for 食べる?", answer: "めしあがる", options: ["めしあがる","いただく","まいる","うかがう"] }
    ]
  },
  {
    id: "L219-4",
    lesson: 219,
    title: "けんじょうご (review)",
    meaning: "Humble language: lowering yourself",
    explain: "けんじょうご lowers your own actions, and those of your company, to show respect to the listener.",
    examples: [
      { jp: "{明日|あした}、{私|わたし}がお{客|きゃく}さまの{会社|かいしゃ}へうかがいます。", ro: "Ashita, watashi ga okyakusama no kaisha e ukagaimasu.", en: "Tomorrow I will visit the customer's company." },
      { jp: "{資料|しりょう}は{私|わたし}がお{送|おく}りします。", ro: "Shiryō wa watashi ga ookuri shimasu.", en: "I will send you the documents." },
      { jp: "{初|はじ}めまして、カランと{申|もう}します。", ro: "Hajimemashite, Karan to mōshimasu.", en: "How do you do? My name is Karan." }
    ],
    drills: [
      { type: "fill", jp: "{私|わたし}はインドから＿＿。", answer: "まいりました", options: ["まいりました","いらっしゃいました","おっしゃいました","めしあがりました"], en: "I come from India. (humble)" },
      { type: "fill", jp: "{先生|せんせい}の{論文|ろんぶん}を＿＿。", answer: "はいけんしました", options: ["はいけんしました","ごらんになりました","おっしゃいました","いらっしゃいました"], en: "I read your paper, professor." },
      { type: "fill", jp: "おにもつを{私|わたし}がお{持|も}ち＿＿。", answer: "します", options: ["します","になります","ください","なさいます"], en: "I will carry your luggage." },
      { type: "order", tiles: ["{明日|あした}","{三時|さんじ}に","そちらへ","うかがいます"], en: "I will come to see you at three tomorrow." },
      { type: "order", tiles: ["やまだと","{申|もう}します","どうぞ","よろしく"], en: "My name is Yamada. Pleased to meet you." },
      { type: "choose", q: "A customer phones and asks for your boss Tanaka. What do you say?", answer: "たなかはただいま{席|せき}におりません。", options: ["たなかはただいま{席|せき}におりません。","たなかさんはただいま{席|せき}にいらっしゃいません。","たなかさんはただいま{席|せき}におります。","たなか{部長|ぶちょう}はただいま{席|せき}にいらっしゃいません。"] }
    ]
  },

  // ───────── Unit 20: Computers and the internet (L: 220) ─────────
  {
    id: "L220-1",
    lesson: 220,
    title: "～わけだ",
    meaning: "That's why, no wonder, so that means",
    explain: "わけだ draws the natural conclusion from a fact you have just learned or stated.",
    examples: [
      { jp: "パスワードが{違|ちが}っていたのか。{入|はい}れないわけだ。", ro: "Pasuwādo ga chigatte ita no ka. Hairenai wake da.", en: "The password was wrong? No wonder I couldn't get in." },
      { jp: "{毎日|まいにち}{三時間|さんじかん}ネットを{見|み}ているなら、{一週間|いっしゅうかん}で{二十一時間|にじゅういちじかん}になるわけだ。", ro: "Mainichi sanjikan netto o mite iru nara, isshūkan de nijūichijikan ni naru wake da.", en: "If you are online three hours a day, that makes twenty-one hours a week." },
      { jp: "でんげんが{入|はい}っていない。{画面|がめん}が{暗|くら}いわけだ。", ro: "Dengen ga haitte inai. Gamen ga kurai wake da.", en: "It isn't switched on. So that's why the screen is dark." }
    ],
    drills: [
      { type: "fill", jp: "{彼|かれ}は{三年|さんねん}アメリカにいたのか。{英語|えいご}が{上手|じょうず}な＿＿。", answer: "わけだ", options: ["わけだ","はずがない","わけではない","ことはない"], en: "He spent three years in America? No wonder his English is good." },
      { type: "fill", jp: "ケーブルが{抜|ぬ}けている。どうりで{動|うご}かない＿＿。", answer: "わけだ", options: ["わけだ","ばかりだ","ほどだ","のに"], en: "The cable has come out. No wonder it doesn't work." },
      { type: "fill", jp: "ウイルスが{入|はい}ったのなら、パソコンが{遅|おそ}い＿＿だ。", answer: "わけ", options: ["わけ","こと","もの","ほど"], en: "If it caught a virus, that explains why the computer is slow." },
      { type: "order", tiles: ["せっていが","{違|ちが}っていた","どうりで","つながらない","わけだ"], en: "The settings were wrong. No wonder it wouldn't connect." },
      { type: "order", tiles: ["{一日|いちにち}","{千円|せんえん}なら","{一か月|いっかげつ}で","{三万円|さんまんえん}に","なるわけだ"], en: "At a thousand yen a day, that makes thirty thousand yen a month." },
      { type: "choose", q: "What is the speaker doing with ～わけだ?", answer: "Reaching a natural conclusion from the facts", options: ["Reaching a natural conclusion from the facts","Giving an order","Expressing doubt","Refusing a request"] }
    ]
  },
  {
    id: "L220-2",
    lesson: 220,
    title: "～わけではない",
    meaning: "It doesn't mean that, it's not that",
    explain: "わけではない denies something the listener might assume, and often leaves part of it true.",
    examples: [
      { jp: "パソコンがきらいなわけではないが、{使|つか}うのは{苦手|にがて}だ。", ro: "Pasokon ga kirai na wake de wa nai ga, tsukau no wa nigate da.", en: "It's not that I hate computers, but I am bad at using them." },
      { jp: "ネットの{情報|じょうほう}が{全部|ぜんぶ}{正|ただ}しいわけではない。", ro: "Netto no jōhō ga zenbu tadashii wake de wa nai.", en: "Not all the information online is correct." },
      { jp: "{返事|へんじ}をしたくないわけじゃないよ。{最近|さいきん}{忙|いそが}しいだけなんだ。", ro: "Henji o shitakunai wake ja nai yo. Saikin isogashii dake nan da.", en: "It's not that I don't want to reply. I've just been busy lately." }
    ],
    drills: [
      { type: "fill", jp: "{高|たか}いパソコンがいつもいい＿＿。", answer: "わけではない", options: ["わけではない","わけだ","はずだ","に{違|ちが}いない"], en: "An expensive computer isn't always a good one." },
      { type: "fill", jp: "メールを{読|よ}んでいない＿＿ないが、{返事|へんじ}はまだだ。", answer: "わけでは", options: ["わけでは","ほどは","しかは","さえは"], en: "It's not that I haven't read the email, but I haven't replied yet." },
      { type: "fill", jp: "{全然|ぜんぜん}わからない＿＿が、{説明|せつめい}はできない。", answer: "わけではない", options: ["わけではない","はずだ","わけだ","かな"], en: "It's not that I have no idea, but I can't explain it." },
      { type: "order", tiles: ["{便利|べんり}な","アプリが","{全部|ぜんぶ}","{安全|あんぜん}な","わけではない"], en: "Not all useful apps are safe." },
      { type: "order", tiles: ["ゲームが","きらいな","わけじゃ","ない"], en: "It's not that I dislike games." },
      { type: "choose", q: "What does 毎日使うわけではない mean?", answer: "I don't use it every single day.", options: ["I don't use it every single day.","I never use it.","I use it every day.","I must use it every day."] }
    ]
  },
  {
    id: "L220-3",
    lesson: 220,
    title: "～はずがない",
    meaning: "It can't be that, there's no way",
    explain: "はずがない says, with confidence and a reason, that something is impossible.",
    examples: [
      { jp: "{今朝|けさ}ほぞんしたから、データが{消|き}えるはずがない。", ro: "Kesa hozon shita kara, dēta ga kieru hazu ga nai.", en: "I saved it this morning, so there's no way the data can disappear." },
      { jp: "あんなに{親切|しんせつ}な{人|ひと}が、うそをつくはずがない。", ro: "Anna ni shinsetsu na hito ga, uso o tsuku hazu ga nai.", en: "Someone that kind couldn't be lying." },
      { jp: "このメールがカランさんからのはずがない。{彼|かれ}は{今|いま}{飛行機|ひこうき}の{中|なか}だ。", ro: "Kono mēru ga Karan-san kara no hazu ga nai. Kare wa ima hikōki no naka da.", en: "This email can't be from Karan. He is on a plane right now." }
    ],
    drills: [
      { type: "fill", jp: "{昨日|きのう}{買|か}ったばかりのパソコンがこわれる＿＿。", answer: "はずがない", options: ["はずがない","わけだ","に{違|ちが}いない","ことにする"], en: "A computer I bought just yesterday can't have broken down." },
      { type: "fill", jp: "パスワードは{私|わたし}しか{知|し}らない。{他|ほか}の{人|ひと}が＿＿はずがない。", answer: "{知|し}っている", options: ["{知|し}っている","{知|し}らない","{知|し}っていて","{知|し}ろう"], en: "Only I know the password. Nobody else can possibly know it." },
      { type: "fill", jp: "こんなにかんたんな{問題|もんだい}が{難|むずか}しい＿＿がない。", answer: "はず", options: ["はず","ため","のに","さえ"], en: "A question this easy can't be difficult." },
      { type: "order", tiles: ["{彼|かれ}が","そんな{失敗|しっぱい}を","する","はずがない"], en: "There's no way he would make a mistake like that." },
      { type: "order", tiles: ["データが","{全部|ぜんぶ}","{消|き}える","はずがない"], en: "All the data can't just disappear." },
      { type: "choose", q: "Which is closest in meaning to そんなはずがない?", answer: "That can't be right.", options: ["That can't be right.","That must be right.","That is why.","I wonder if that is right."] }
    ]
  },
  {
    id: "L220-4",
    lesson: 220,
    title: "～に違いない",
    meaning: "Must be, without a doubt",
    explain: "に違いない gives a strong guess that the speaker feels sure about.",
    examples: [
      { jp: "{知|し}らない{人|ひと}からのメールだ。ウイルスに{違|ちが}いない。", ro: "Shiranai hito kara no mēru da. Uirusu ni chigai nai.", en: "It's an email from a stranger. It must be a virus." },
      { jp: "{画面|がめん}が{急|きゅう}に{消|き}えた。でんげんが{切|き}れたに{違|ちが}いない。", ro: "Gamen ga kyū ni kieta. Dengen ga kireta ni chigai nai.", en: "The screen suddenly went off. The power must have cut out." },
      { jp: "あの{店|みせ}のサイトはいつも{人|ひと}が{多|おお}い。{人気|にんき}があるに{違|ちが}いない。", ro: "Ano mise no saito wa itsumo hito ga ōi. Ninki ga aru ni chigai nai.", en: "That shop's site is always busy. It must be popular." }
    ],
    drills: [
      { type: "fill", jp: "{彼|かれ}は{返事|へんじ}をしない。{忙|いそが}しい＿＿。", answer: "に{違|ちが}いない", options: ["に{違|ちが}いない","はずがない","わけではない","ことはない"], en: "He isn't replying. He must be busy." },
      { type: "fill", jp: "このアプリは＿＿に{違|ちが}いない。", answer: "{便利|べんり}", options: ["{便利|べんり}","{便利|べんり}だ","{便利|べんり}な","{便利|べんり}で"], en: "This app must be convenient." },
      { type: "fill", jp: "こんな{時間|じかん}の{電話|でんわ}だから、{大切|たいせつ}な{用事|ようじ}に＿＿。", answer: "{違|ちが}いない", options: ["{違|ちが}いない","{違|ちが}わない","{違|ちが}った","{違|ちが}えない"], en: "A call at this hour must be about something important." },
      { type: "order", tiles: ["{犯人|はんにん}は","{彼|かれ}","に{違|ちが}いない"], en: "The culprit must be him." },
      { type: "order", tiles: ["{画面|がめん}が","{動|うご}かないのは","ウイルスの","せいに","{違|ちが}いない"], en: "The frozen screen must be because of a virus." },
      { type: "choose", q: "Which sentence shows the strongest belief?", answer: "こしょうに{違|ちが}いない。", options: ["こしょうに{違|ちが}いない。","こしょうかもしれない。","こしょうかな。","こしょうではないかと{思|おも}う。"] }
    ]
  },

  // ───────── Unit 21: Sound and manner words (L: 221) ─────────
  {
    id: "L221-1",
    lesson: 221,
    title: "N + さえ",
    meaning: "Even",
    explain: "さえ picks an extreme example, implying that everything else is true as well.",
    examples: [
      { jp: "{彼|かれ}は{忙|いそが}しくて、ゆっくり{寝|ね}る{時間|じかん}さえない。", ro: "Kare wa isogashikute, yukkuri neru jikan sae nai.", en: "He is so busy that he doesn't even have time to get a good sleep." },
      { jp: "この{問題|もんだい}は{子供|こども}でさえわかる。", ro: "Kono mondai wa kodomo de sae wakaru.", en: "Even a child can understand this problem." },
      { jp: "どきどきして、{水|みず}さえ{飲|の}めなかった。", ro: "Dokidoki shite, mizu sae nomenakatta.", en: "My heart was pounding so much that I couldn't even drink water." }
    ],
    drills: [
      { type: "fill", jp: "びっくりして、{声|こえ}＿＿{出|で}なかった。", answer: "さえ", options: ["さえ","こそ","ほど","ばかり"], en: "I was so shocked that I couldn't even make a sound." },
      { type: "fill", jp: "せんもんか＿＿わからない。", answer: "でさえ", options: ["でさえ","さえで","でしか","にこそ"], en: "Even experts don't know." },
      { type: "fill", jp: "{彼|かれ}は{自分|じぶん}の{名前|なまえ}＿＿{書|か}けなかった。", answer: "さえ", options: ["さえ","こそ","しか","ほど"], en: "He couldn't even write his own name." },
      { type: "order", tiles: ["ぺこぺこなのに","パン","さえ","{買|か}えなかった"], en: "I was starving, yet I couldn't even buy bread." },
      { type: "order", tiles: ["{子供|こども}","でさえ","できる","{問題|もんだい}だ"], en: "It's a problem that even a child can do." },
      { type: "choose", q: "What does さえ mark?", answer: "An extreme example, so everything else follows", options: ["An extreme example, so everything else follows","The only choice that works","A new topic","The place of an action"] }
    ]
  },
  {
    id: "L221-2",
    lesson: 221,
    title: "～こそ",
    meaning: "Precisely, this is the one",
    explain: "こそ puts strong emphasis on the word before it: this one and no other.",
    examples: [
      { jp: "{今年|ことし}こそ、{毎朝|まいあさ}ぱっと{起|お}きたい。", ro: "Kotoshi koso, maiasa patto okitai.", en: "This year for sure, I want to spring out of bed every morning." },
      { jp: "こちらこそ、どうぞよろしくお{願|ねが}いします。", ro: "Kochira koso, dōzo yoroshiku onegai shimasu.", en: "The pleasure is mine. I look forward to working with you." },
      { jp: "{疲|つか}れているからこそ、ゆっくり{休|やす}むべきだ。", ro: "Tsukarete iru kara koso, yukkuri yasumu beki da.", en: "It is precisely because you are tired that you should rest properly." }
    ],
    drills: [
      { type: "fill", jp: "{今度|こんど}＿＿{勝|か}ちたい。", answer: "こそ", options: ["こそ","しか","ほど","まで"], en: "This time I really want to win." },
      { type: "fill", jp: "A：ありがとうございました。 B：こちら＿＿。", answer: "こそ", options: ["こそ","さえ","まで","しか"], en: "A: Thank you very much. B: No, thank you." },
      { type: "fill", jp: "{大切|たいせつ}だから＿＿、はっきり{言|い}う。", answer: "こそ", options: ["こそ","さえ","しか","ほど"], en: "It is precisely because it matters that I will say it clearly." },
      { type: "order", tiles: ["{明日|あした}","こそ","{早|はや}く","{起|お}きるぞ"], en: "Tomorrow for sure, I'm getting up early." },
      { type: "order", tiles: ["{好|す}きだから","こそ","{何度|なんど}も","れんしゅうする"], en: "It is exactly because I love it that I practise over and over." },
      { type: "choose", q: "In 今年こそ合格する, what does こそ add?", answer: "Strong resolve: this year is the one", options: ["Strong resolve: this year is the one","Doubt that it will happen","A limit: only this year, never again","A comparison with last year's score"] }
    ]
  },
  {
    id: "L221-3",
    lesson: 221,
    title: "N + まで (even)",
    meaning: "Even, as far as",
    explain: "Here まで means 'even': things have gone further than you would expect.",
    examples: [
      { jp: "{友達|ともだち}だけでなく、{先生|せんせい}にまで{笑|わら}われた。", ro: "Tomodachi dake de naku, sensei ni made warawareta.", en: "Not only my friends but even my teacher laughed at me." },
      { jp: "{雨|あめ}がざあざあ{降|ふ}って、かばんの{中|なか}までぬれた。", ro: "Ame ga zāzā futte, kaban no naka made nureta.", en: "It poured down, and even the inside of my bag got wet." },
      { jp: "{彼|かれ}はうそをついてまでお{金|かね}を{借|か}りた。", ro: "Kare wa uso o tsuite made okane o karita.", en: "He went so far as to lie in order to borrow money." }
    ],
    drills: [
      { type: "fill", jp: "{猫|ねこ}＿＿びっくりして、ぴょんと{飛|と}んだ。", answer: "まで", options: ["まで","しか","ほど","くらい"], en: "Even the cat got a fright and hopped into the air." },
      { type: "fill", jp: "{服|ふく}だけでなく、{靴|くつ}＿＿びしょびしょになった。", answer: "まで", options: ["まで","しか","ほど","より"], en: "Not only my clothes, but even my shoes got soaked." },
      { type: "fill", jp: "{家族|かぞく}にうそをついて＿＿{行|い}きたいとは{思|おも}わない。", answer: "まで", options: ["まで","から","より","しか"], en: "I wouldn't go so far as to lie to my family in order to go." },
      { type: "order", tiles: ["{友達|ともだち}だけでなく","{親|おや}に","まで","{笑|わら}われた"], en: "Not only my friends but even my parents laughed at me." },
      { type: "order", tiles: ["うそを","ついて","まで","{勝|か}ちたくない"], en: "I don't want to win if it means lying." },
      { type: "choose", q: "In かばんの中までぬれた, what does まで mean?", answer: "Even the inside of the bag got wet", options: ["Even the inside of the bag got wet","The bag was wet until it reached the inside","Only the inside of the bag got wet","The bag was wet except for the inside"] }
    ]
  },
  {
    id: "L221-4",
    lesson: 221,
    title: "～ほど～ない・～ほど～はない",
    meaning: "Not as ~ as; nothing is as ~ as",
    explain: "AはBほど～ない says A falls short of B, and Nほど～はない says N is the most.",
    examples: [
      { jp: "{今日|きょう}は{昨日|きのう}ほどじめじめしていない。", ro: "Kyō wa kinō hodo jimejime shite inai.", en: "Today isn't as muggy as yesterday." },
      { jp: "うちの{猫|ねこ}ほどのんびりした{猫|ねこ}はいない。", ro: "Uchi no neko hodo nonbiri shita neko wa inai.", en: "There's no cat as laid-back as ours." },
      { jp: "{寒|さむ}い{朝|あさ}のふとんほど、ぬくぬくしたものはない。", ro: "Samui asa no futon hodo, nukunuku shita mono wa nai.", en: "Nothing is as snug as a futon on a cold morning." }
    ],
    drills: [
      { type: "fill", jp: "{英語|えいご}は{日本語|にほんご}＿＿{難|むずか}しくない。", answer: "ほど", options: ["ほど","しか","こそ","まで"], en: "English isn't as hard as Japanese." },
      { type: "fill", jp: "モチほどのんびりした{猫|ねこ}は＿＿。", answer: "いない", options: ["いない","いる","ある","いた"], en: "There is no cat as relaxed as Mochi." },
      { type: "fill", jp: "{友達|ともだち}と{話|はな}す{時間|じかん}＿＿{楽|たの}しいものはない。", answer: "ほど", options: ["ほど","しか","こそ","ばかり"], en: "Nothing is as fun as time spent talking with friends." },
      { type: "order", tiles: ["{今日|きょう}は","{昨日|きのう}ほど","{寒|さむ}く","ない"], en: "Today isn't as cold as yesterday." },
      { type: "order", tiles: ["{家族|かぞく}ほど","{大切|たいせつ}な","ものは","ない"], en: "Nothing is as important as family." },
      { type: "choose", q: "If AはBほど高くない, which is true?", answer: "B is more expensive than A", options: ["B is more expensive than A","A is more expensive than B","A and B cost the same","Neither A nor B has a price"] }
    ]
  },

  // ───────── Unit 22: Compound verbs (L: 222) ─────────
  {
    id: "L222-1",
    lesson: 222,
    title: "～ことになる",
    meaning: "It has been decided that, it turns out that",
    explain: "ことになる reports a result or decision that came from circumstances or other people.",
    examples: [
      { jp: "{来月|らいげつ}からおおさかで{働|はたら}くことになりました。", ro: "Raigetsu kara Ōsaka de hataraku koto ni narimashita.", en: "It has been decided that I will work in Osaka from next month." },
      { jp: "{話|はな}し{合|あ}いのけっか、{計画|けいかく}を{見直|みなお}すことになった。", ro: "Hanashiai no kekka, keikaku o minaosu koto ni natta.", en: "As a result of the discussion, it was decided to review the plan." },
      { jp: "{会議|かいぎ}は{毎週|まいしゅう}{月曜日|げつようび}に{行|おこな}うことになっている。", ro: "Kaigi wa maishū getsuyōbi ni okonau koto ni natte iru.", en: "Meetings are scheduled to be held every Monday." }
    ],
    drills: [
      { type: "fill", jp: "{親|おや}の{仕事|しごと}で、{引|ひ}っ{越|こ}す＿＿。", answer: "ことになった", options: ["ことになった","ことはない","わけではない","はずがない"], en: "Because of my parents' work, we ended up moving house." },
      { type: "fill", jp: "この{部屋|へや}では{靴|くつ}をぬぐ＿＿います。", answer: "ことになって", options: ["ことになって","ものになって","わけになって","はずになって"], en: "The rule in this room is that you take off your shoes." },
      { type: "fill", jp: "{話|はな}し{合|あ}いで、{来週|らいしゅう}もう{一度|いちど}{集|あつ}まる＿＿になった。", answer: "こと", options: ["こと","もの","わけ","はず"], en: "In the discussion, it was settled that we would meet again next week." },
      { type: "order", tiles: ["{来年|らいねん}","{転勤|てんきん}する","ことに","なりました"], en: "It has been decided that I will be transferred next year." },
      { type: "order", tiles: ["{説明|せつめい}を","{聞|き}き{直|なお}す","ことに","なった"], en: "It was settled that we would hear the explanation again." },
      { type: "choose", q: "Who decides, in ことになった?", answer: "Circumstances or other people", options: ["Circumstances or other people","The speaker alone","Nobody, because it never happens","The listener, who is being ordered"] }
    ]
  },
  {
    id: "L222-2",
    lesson: 222,
    title: "～ことにする",
    meaning: "I decide to, I make it a rule to",
    explain: "ことにする states the speaker's own decision.",
    examples: [
      { jp: "{今日|きょう}から{朝|あさ}{走|はし}ることにした。", ro: "Kyō kara asa hashiru koto ni shita.", en: "I have decided to run in the mornings from today." },
      { jp: "{書|か}き{直|なお}すのは{大変|たいへん}だから、このまま{出|だ}すことにします。", ro: "Kakinaosu no wa taihen da kara, kono mama dasu koto ni shimasu.", en: "Rewriting would be a lot of work, so I will hand it in as it is." },
      { jp: "{毎晩|まいばん}{寝|ね}る{前|まえ}に{日記|にっき}を{書|か}くことにしている。", ro: "Maiban neru mae ni nikki o kaku koto ni shite iru.", en: "I make it a rule to write in my diary every night before bed." }
    ],
    drills: [
      { type: "fill", jp: "よく{考|かんが}えて、{留学|りゅうがく}する＿＿。", answer: "ことにした", options: ["ことにした","ことはない","わけではない","はずがない"], en: "After thinking hard, I made up my mind to study abroad." },
      { type: "fill", jp: "{夜|よる}はあまいものを{食|た}べない＿＿している。", answer: "ことに", options: ["ことに","ほどに","ことが","ためを"], en: "I make it a rule not to eat sweets at night." },
      { type: "fill", jp: "{飲|の}みすぎるので、{酒|さけ}をやめる＿＿。", answer: "ことにします", options: ["ことにします","ことがあります","ことになっています","ことはありません"], en: "I drink too much, so I'm going to give up alcohol." },
      { type: "order", tiles: ["{今年|ことし}から","{毎朝|まいあさ}","{歩|ある}く","ことにした"], en: "I have decided to walk every morning from this year." },
      { type: "order", tiles: ["この{話|はなし}は","{聞|き}かなかった","ことに","します"], en: "I'll act as if I never heard this." },
      { type: "choose", q: "Which sentence means 'I decided to quit'?", answer: "{辞|や}めることにした。", options: ["{辞|や}めることにした。","{辞|や}めることがある。","{辞|や}めたことがある。","{辞|や}めることはない。"] }
    ]
  },
  {
    id: "L222-3",
    lesson: 222,
    title: "～としたら・～とすれば",
    meaning: "If we suppose that, if it is the case that",
    explain: "としたら and とすれば set up an assumption and then say what would follow.",
    examples: [
      { jp: "もしいちおくえん{手|て}に{入|はい}るとしたら、{何|なに}に{使|つか}いますか。", ro: "Moshi ichiokuen te ni hairu to shitara, nani ni tsukaimasu ka.", en: "If you were to get a hundred million yen, what would you spend it on?" },
      { jp: "{電車|でんしゃ}が{止|と}まっているとすれば、{歩|ある}いて{帰|かえ}るしかない。", ro: "Densha ga tomatte iru to sureba, aruite kaeru shika nai.", en: "If the trains have stopped, I will have no choice but to walk home." },
      { jp: "{彼|かれ}の{話|はなし}が{本当|ほんとう}だとすれば、{計画|けいかく}を{立|た}て{直|なお}す{必要|ひつよう}がある。", ro: "Kare no hanashi ga hontō da to sureba, keikaku o tatenaosu hitsuyō ga aru.", en: "If what he says is true, we need to rework the plan." }
    ],
    drills: [
      { type: "fill", jp: "もし{外国|がいこく}に{住|す}む＿＿、どこがいいですか。", answer: "としたら", options: ["としたら","にくらべて","ほど","にとって"], en: "If you were to live abroad, where would be good?" },
      { type: "fill", jp: "これが{本物|ほんもの}＿＿、{値段|ねだん}は{高|たか}いだろう。", answer: "だとすれば", options: ["だとすれば","なとすれば","のとすれば","にとすれば"], en: "If this is the real thing, it must be expensive." },
      { type: "fill", jp: "{彼|かれ}が{来|こ}ない＿＿、{予定|よてい}を{変|か}えなければならない。", answer: "とすれば", options: ["とすれば","ほど","にとって","くらい"], en: "If he isn't coming, we will have to change the plans." },
      { type: "order", tiles: ["もし","{生|う}まれ{変|か}わる","としたら","{何|なに}に","なりたいですか"], en: "If you were to be reborn, what would you want to be?" },
      { type: "order", tiles: ["{彼|かれ}の{話|はなし}が","{本当|ほんとう}だ","とすれば","{大変|たいへん}だ"], en: "If what he says is true, that's serious." },
      { type: "choose", q: "What do としたら and とすれば do?", answer: "Suppose something for the sake of argument", options: ["Suppose something for the sake of argument","Report a past fact","Give a firm order","Say something happened by chance"] }
    ]
  },
  {
    id: "L222-4",
    lesson: 222,
    title: "～なら",
    meaning: "If that's the case, as for",
    explain: "なら takes up what someone has said or plans, then gives advice or a comment.",
    examples: [
      { jp: "{京都|きょうと}へ{行|い}くなら、{秋|あき}がいいですよ。", ro: "Kyōto e iku nara, aki ga ii desu yo.", en: "If you are going to Kyoto, autumn is a good time." },
      { jp: "{読|よ}み{終|お}わったなら、その{本|ほん}を{貸|か}してください。", ro: "Yomiowatta nara, sono hon o kashite kudasai.", en: "If you have finished reading it, please lend me that book." },
      { jp: "すしなら、{駅前|えきまえ}の{店|みせ}が{一番|いちばん}だ。", ro: "Sushi nara, ekimae no mise ga ichiban da.", en: "If it's sushi you want, the shop by the station is the best." }
    ],
    drills: [
      { type: "fill", jp: "パソコンを＿＿なら、この{店|みせ}が{安|やす}いですよ。", answer: "{買|か}う", options: ["{買|か}う","{買|か}って","{買|か}います","{買|か}えば"], en: "If you're going to buy a computer, this shop is cheap." },
      { type: "fill", jp: "{日本語|にほんご}＿＿、さとう{先生|せんせい}に{聞|き}くといいよ。", answer: "なら", options: ["なら","ほど","しか","より"], en: "If it's about Japanese, you should ask Satō-sensei." },
      { type: "fill", jp: "そんなに{疲|つか}れている＿＿、{休|やす}んだほうがいい。", answer: "なら", options: ["なら","のに","ほど","まで"], en: "If you're that tired, you should rest." },
      { type: "order", tiles: ["{旅行|りょこう}に","{行|い}くなら","チケットを","{早|はや}く","{買|か}おう"], en: "If we are going on a trip, let's buy the tickets early." },
      { type: "order", tiles: ["{魚|さかな}なら","あの{店|みせ}が","おいしい","ですよ"], en: "If it's fish you want, that shop is good." },
      { type: "choose", q: "Before a friend sets off, you say 'If you're going to Hokkaidō, take a coat.' Which is correct?", answer: "{北海道|ほっかいどう}へ{行|い}くなら、コートを{持|も}って{行|い}ってください。", options: ["{北海道|ほっかいどう}へ{行|い}くなら、コートを{持|も}って{行|い}ってください。","{北海道|ほっかいどう}へ{行|い}ったら、コートを{持|も}って{行|い}ってください。","{北海道|ほっかいどう}へ{行|い}くと、コートを{持|も}って{行|い}ってください。","{北海道|ほっかいどう}へ{行|い}っても、コートを{持|も}って{行|い}ってください。"] }
    ]
  },

  // ───────── Unit 23: Core verbs and する verbs (L: 223) ─────────
  {
    id: "L223-1",
    lesson: 223,
    title: "Suffering passive",
    meaning: "Being troubled by what someone did",
    explain: "This passive shows that someone's action or an event caused the speaker trouble.",
    examples: [
      { jp: "{昨日|きのう}、{雨|あめ}に{降|ふ}られて、ぬれてしまった。", ro: "Kinō, ame ni furarete, nurete shimatta.", en: "I got caught in the rain yesterday and got wet." },
      { jp: "{電車|でんしゃ}で{足|あし}をふまれた。", ro: "Densha de ashi o fumareta.", en: "Someone stepped on my foot on the train." },
      { jp: "{夜中|よなか}に{子供|こども}になかれて、{眠|ねむ}れなかった。", ro: "Yonaka ni kodomo ni nakarete, nemurenakatta.", en: "My child cried in the night and I couldn't sleep." }
    ],
    drills: [
      { type: "fill", jp: "{友達|ともだち}に{急|きゅう}に＿＿、{困|こま}った。", answer: "{来|こ}られて", options: ["{来|こ}られて","{来|こ}させて","{来|こ}ようと","{来|く}れば"], en: "A friend turned up without warning, and it was a problem for me." },
      { type: "fill", jp: "{弟|おとうと}にケーキを＿＿。", answer: "{食|た}べられた", options: ["{食|た}べられた","{食|た}べさせた","{食|た}べた","{食|た}べてあげた"], en: "My little brother ate my cake (and I was annoyed)." },
      { type: "fill", jp: "となりの{人|ひと}にたばこを＿＿、いやだった。", answer: "{吸|す}われて", options: ["{吸|す}われて","{吸|す}って","{吸|す}わせて","{吸|す}えて"], en: "The person next to me smoked, and I hated it." },
      { type: "order", tiles: ["{帰|かえ}り{道|みち}で","{雨|あめ}に","{降|ふ}られた"], en: "I got rained on on the way home." },
      { type: "order", tiles: ["{大事|だいじ}な","{本|ほん}を","{犬|いぬ}に","{破|やぶ}られた"], en: "My dog tore up my precious book." },
      { type: "choose", q: "In 子供になかれた, who cried?", answer: "The child", options: ["The child","The speaker","The speaker's parent","Nobody"] }
    ]
  },
  {
    id: "L223-2",
    lesson: 223,
    title: "Causative-passive",
    meaning: "Being made to do something",
    explain: "The causative-passive says someone forced you to do something you did not want to do.",
    examples: [
      { jp: "{子供|こども}のころ、{母|はは}にやさいを{食|た}べさせられた。", ro: "Kodomo no koro, haha ni yasai o tabesaserareta.", en: "When I was a child, my mother made me eat vegetables." },
      { jp: "せんぱいに、にもつを{持|も}たされた。", ro: "Senpai ni nimotsu o motasareta.", en: "My senior made me carry the bags." },
      { jp: "{部長|ぶちょう}に{一時間|いちじかん}も{待|ま}たされた。", ro: "Buchō ni ichijikan mo matasareta.", en: "The department head kept me waiting for a whole hour." }
    ],
    drills: [
      { type: "fill", jp: "{母|はは}に{部屋|へや}をそうじ＿＿。", answer: "させられた", options: ["させられた","された","させた","させてもらった"], en: "My mum made me clean my room." },
      { type: "fill", jp: "{駅|えき}で{三十分|さんじゅっぷん}も＿＿。", answer: "{待|ま}たされた", options: ["{待|ま}たされた","{待|ま}たせた","{待|ま}てた","{待|ま}たれた"], en: "I was made to wait thirty minutes at the station." },
      { type: "fill", jp: "{先生|せんせい}に{作文|さくぶん}を＿＿。", answer: "{書|か}かされた", options: ["{書|か}かされた","{書|か}かれた","{書|か}かせた","{書|か}けた"], en: "The teacher made me write an essay." },
      { type: "order", tiles: ["{友達|ともだち}に","{歌|うた}を","{歌|うた}わされた"], en: "My friends made me sing a song." },
      { type: "order", tiles: ["{子供|こども}のころ","{父|ちち}に","ピアノを","{習|なら}わされた"], en: "As a child, my father made me take piano lessons." },
      { type: "choose", q: "Which is the causative-passive of 話す?", answer: "{話|はな}させられる", options: ["{話|はな}させられる","{話|はな}さされる","{話|はな}させる","{話|はな}せる"] }
    ]
  },
  {
    id: "L223-3",
    lesson: 223,
    title: "～てあげる・～てくれる・～てもらう (review)",
    meaning: "Doing favours",
    explain: "These three verbs show who does a favour for whom.",
    examples: [
      { jp: "{友達|ともだち}が{引|ひ}っ{越|こ}しを{手伝|てつだ}ってくれた。", ro: "Tomodachi ga hikkoshi o tetsudatte kureta.", en: "A friend helped me move house." },
      { jp: "{私|わたし}はマリアさんに{漢字|かんじ}を{教|おし}えてあげた。", ro: "Watashi wa Maria-san ni kanji o oshiete ageta.", en: "I taught Maria some kanji." },
      { jp: "{先生|せんせい}に{作文|さくぶん}を{直|なお}していただいた。", ro: "Sensei ni sakubun o naoshite itadaita.", en: "I had my teacher correct my essay." }
    ],
    drills: [
      { type: "fill", jp: "{友達|ともだち}が{駅|えき}まで{私|わたし}を{送|おく}って＿＿。", answer: "くれた", options: ["くれた","あげた","もらった","やった"], en: "A friend took me to the station." },
      { type: "fill", jp: "{友達|ともだち}＿＿{駅|えき}まで{送|おく}ってもらった。", answer: "に", options: ["に","が","を","で"], en: "I got a friend to take me to the station." },
      { type: "fill", jp: "{私|わたし}は{猫|ねこ}にごはんを{作|つく}って＿＿。", answer: "やった", options: ["やった","くれた","もらった","いただいた"], en: "I made food for my cat." },
      { type: "order", tiles: ["{先生|せんせい}に","{作文|さくぶん}を","{見|み}て","いただいた"], en: "I had my teacher look at my essay." },
      { type: "order", tiles: ["{母|はは}が","おべんとうを","{作|つく}って","くれた"], en: "My mother made me a packed lunch." },
      { type: "choose", q: "Which sentence shows someone kindly did something for you?", answer: "たなかさんが{教|おし}えてくれた。", options: ["たなかさんが{教|おし}えてくれた。","たなかさんに{教|おし}えてあげた。","たなかさんを{教|おし}えた。","たなかさんに{教|おし}えられた。"] }
    ]
  },
  {
    id: "L223-4",
    lesson: 223,
    title: "～させていただく・～させてもらう",
    meaning: "Please let me, with your permission I will",
    explain: "These forms politely say you will do something with the other person's permission.",
    examples: [
      { jp: "{今日|きょう}は{早|はや}く{帰|かえ}らせていただきます。", ro: "Kyō wa hayaku kaerasete itadakimasu.", en: "With your permission, I will leave early today." },
      { jp: "{私|わたし}に{説明|せつめい}させていただけますか。", ro: "Watashi ni setsumei sasete itadakemasu ka.", en: "Would you let me explain?" },
      { jp: "{友達|ともだち}の{車|くるま}を{使|つか}わせてもらった。", ro: "Tomodachi no kuruma o tsukawasete moratta.", en: "My friend let me use their car." }
    ],
    drills: [
      { type: "fill", jp: "すみません、{少|すこ}し{休|やす}ま＿＿いただけますか。", answer: "せて", options: ["せて","れて","されて","ないで"], en: "Excuse me, could you let me rest a little?" },
      { type: "fill", jp: "{資料|しりょう}を＿＿いただきます。", answer: "{読|よ}ませて", options: ["{読|よ}ませて","{読|よ}んで","{読|よ}まれて","{読|よ}めて"], en: "With your permission, I'll read the documents." },
      { type: "fill", jp: "{私|わたし}は{友達|ともだち}の{部屋|へや}にとまらせて＿＿。", answer: "もらった", options: ["もらった","くれた","あげた","やった"], en: "My friend let me stay in their room." },
      { type: "order", tiles: ["{私|わたし}が","{説明|せつめい}","させて","いただきます"], en: "Allow me to explain." },
      { type: "order", tiles: ["{写真|しゃしん}を","とらせて","いただけますか"], en: "May I take a photo?" },
      { type: "choose", q: "Which is the most polite way to ask to leave early?", answer: "{早|はや}く{帰|かえ}らせていただけませんか。", options: ["{早|はや}く{帰|かえ}らせていただけませんか。","{早|はや}く{帰|かえ}ります。","{早|はや}く{帰|かえ}らせます。","{早|はや}く{帰|かえ}らされます。"] }
    ]
  },

  // ───────── Unit 24: Katakana words, idioms and word-building (L: 224) ─────────
  {
    id: "L224-1",
    lesson: 224,
    title: "～といえば・～というと",
    meaning: "Speaking of; when you say",
    explain: "といえば and というと pick up a topic and say the first thing it brings to mind.",
    examples: [
      { jp: "{日本|にほん}の{夏|なつ}といえば、{花火|はなび}だ。", ro: "Nihon no natsu to ieba, hanabi da.", en: "When you think of summer in Japan, it's fireworks." },
      { jp: "スーパーといえば、{駅前|えきまえ}に{新|あたら}しい{店|みせ}ができたよ。", ro: "Sūpā to ieba, ekimae ni atarashii mise ga dekita yo.", en: "Speaking of supermarkets, a new one has opened by the station." },
      { jp: "ハワイというと、{青|あお}い{海|うみ}を{思|おも}い{出|だ}す。", ro: "Hawai to iu to, aoi umi o omoidasu.", en: "When I hear Hawaii, I think of the blue sea." }
    ],
    drills: [
      { type: "fill", jp: "カレー＿＿、インドの{料理|りょうり}を{思|おも}い{出|だ}す。", answer: "というと", options: ["というと","としたら","をはじめ","にくらべて"], en: "When someone says curry, I think of Indian food." },
      { type: "fill", jp: "{京都|きょうと}＿＿、やはり{秋|あき}だ。", answer: "といえば", options: ["といえば","について","にとって","として"], en: "When you think of Kyoto, it has to be autumn." },
      { type: "fill", jp: "A：コンビニで{働|はたら}きたいです。 B：＿＿、{駅|えき}の{近|ちか}くの{店|みせ}が{人|ひと}を{探|さが}していますよ。", answer: "コンビニといえば", options: ["コンビニといえば","コンビニとは","コンビニにとって","コンビニさえ"], en: "A: I want to work at a convenience store. B: Speaking of convenience stores, the one near the station is looking for staff." },
      { type: "order", tiles: ["{冬|ふゆ}","といえば","スキーが","{楽|たの}しみだ"], en: "Speaking of winter, I'm looking forward to skiing." },
      { type: "order", tiles: ["インド","というと","カレーを","{思|おも}い{出|だ}す"], en: "When I hear India, I think of curry." },
      { type: "choose", q: "What do といえば and というと do?", answer: "Pick up a topic and say what it brings to mind", options: ["Pick up a topic and say what it brings to mind","Give a strict definition","State a rule","Report a fact from the news"] }
    ]
  },
  {
    id: "L224-2",
    lesson: 224,
    title: "～だけでなく",
    meaning: "Not only ~ but also",
    explain: "だけでなく adds a second item and usually ends with も.",
    examples: [
      { jp: "この{言葉|ことば}は{若者|わかもの}だけでなく、{大人|おとな}も{使|つか}う。", ro: "Kono kotoba wa wakamono dake de naku, otona mo tsukau.", en: "Not only young people but adults use this word too." },
      { jp: "カランさんは{話|はな}すだけでなく、{書|か}くのも{上手|じょうず}だ。", ro: "Karan-san wa hanasu dake de naku, kaku no mo jōzu da.", en: "Karan is good not only at speaking but at writing too." },
      { jp: "このアプリは{便利|べんり}なだけでなく、デザインもいい。", ro: "Kono apuri wa benri na dake de naku, dezain mo ii.", en: "This app is not only handy but well designed too." }
    ],
    drills: [
      { type: "fill", jp: "{彼|かれ}はピアノ＿＿ギターもひける。", answer: "だけでなく", options: ["だけでなく","しか","ほど","さえ"], en: "He can play not only the piano but also the guitar." },
      { type: "fill", jp: "この{店|みせ}は＿＿だけでなく、おいしい。", answer: "{安|やす}い", options: ["{安|やす}い","{安|やす}く","{安|やす}くて","{安|やす}かって"], en: "This shop is not only cheap but tasty." },
      { type: "fill", jp: "{便利|べんり}＿＿だけでなく、{安全|あんぜん}でもある。", answer: "な", options: ["な","だ","の","に"], en: "It is not only convenient but safe as well." },
      { type: "order", tiles: ["{日本語|にほんご}だけでなく","スペイン{語|ご}も","{話|はな}せる"], en: "I can speak not only Japanese but Spanish too." },
      { type: "order", tiles: ["{読|よ}むだけでなく","{書|か}く","れんしゅうも","します"], en: "We practise not only reading but writing too." },
      { type: "choose", q: "What does AだけでなくBも tell you?", answer: "Both A and B are true", options: ["Both A and B are true","Only A is true","Only B is true","Neither A nor B is true"] }
    ]
  },
  {
    id: "L224-3",
    lesson: 224,
    title: "～ばかりか",
    meaning: "Not only ~ but even",
    explain: "ばかりか is a stronger 'not only', and the second half adds something more surprising.",
    examples: [
      { jp: "{彼|かれ}は{遅|おく}れて{来|き}たばかりか、{宿題|しゅくだい}も{忘|わす}れた。", ro: "Kare wa okurete kita bakari ka, shukudai mo wasureta.", en: "Not only did he come late, he forgot his homework too." },
      { jp: "この{漢字|かんじ}は{子供|こども}ばかりか、{大人|おとな}も{読|よ}めない。", ro: "Kono kanji wa kodomo bakari ka, otona mo yomenai.", en: "Not only children but even adults can't read this kanji." },
      { jp: "{彼女|かのじょ}は{英語|えいご}ばかりか、アラビア{語|ご}まで{話|はな}せる。", ro: "Kanojo wa eigo bakari ka, Arabia-go made hanaseru.", en: "She speaks not only English but even Arabic." }
    ],
    drills: [
      { type: "fill", jp: "さいふを{忘|わす}れた＿＿、かぎもなくした。", answer: "ばかりか", options: ["ばかりか","ほど","ため","しか"], en: "Not only did I forget my wallet, I lost my keys too." },
      { type: "fill", jp: "{雨|あめ}ばかりか、{風|かぜ}＿＿{強|つよ}くなった。", answer: "まで", options: ["まで","しか","より","ほど"], en: "Not only the rain, but even the wind got stronger." },
      { type: "fill", jp: "このアプリは＿＿ばかりか、{危|あぶ}ない。", answer: "{不便|ふべん}な", options: ["{不便|ふべん}な","{不便|ふべん}だ","{不便|ふべん}の","{不便|ふべん}に"], en: "This app is not only inconvenient but dangerous." },
      { type: "order", tiles: ["{彼|かれ}は","あやまらないばかりか","{笑|わら}って","いた"], en: "Not only did he not apologise, he was laughing." },
      { type: "order", tiles: ["{子供|こども}ばかりか","{大人|おとな}","まで","{夢中|むちゅう}だ"], en: "Not only children but even adults are hooked." },
      { type: "choose", q: "Which sentence is correct?", answer: "{彼|かれ}は{英語|えいご}ばかりか、{中国語|ちゅうごくご}も{話|はな}す。", options: ["{彼|かれ}は{英語|えいご}ばかりか、{中国語|ちゅうごくご}も{話|はな}す。","{英語|えいご}ばかりか、{中国語|ちゅうごくご}も{話|はな}してください。","{英語|えいご}ばかりか、{中国語|ちゅうごくご}も{話|はな}しましょう。","{英語|えいご}ばかりか、{中国語|ちゅうごくご}も{話|はな}せ。"] }
    ]
  },
  {
    id: "L224-4",
    lesson: 224,
    title: "～のである",
    meaning: "The fact is, you see (written)",
    explain: "のである is the written form of のです, used to explain or to drive a point home.",
    examples: [
      { jp: "{言葉|ことば}は{時代|じだい}とともに{変|か}わるのである。", ro: "Kotoba wa jidai to tomo ni kawaru no de aru.", en: "Language, you see, changes with the times." },
      { jp: "{外来語|がいらいご}が{増|ふ}えたのは、{新|あたら}しい{物|もの}が{入|はい}ってきたからなのである。", ro: "Gairaigo ga fueta no wa, atarashii mono ga haitte kita kara na no de aru.", en: "Loanwords increased because new things came in." },
      { jp: "{彼|かれ}は{何|なに}も{言|い}わなかった。{言|い}えなかったのである。", ro: "Kare wa nani mo iwanakatta. Ienakatta no de aru.", en: "He said nothing. The truth is that he couldn't." }
    ],
    drills: [
      { type: "fill", jp: "{漢字|かんじ}は{中国|ちゅうごく}から{来|き}た＿＿。", answer: "のである", options: ["のである","である","なのである","のにある"], en: "Kanji, you see, came from China." },
      { type: "fill", jp: "これこそ{問題|もんだい}＿＿のである。", answer: "な", options: ["な","だ","の","で"], en: "This, you see, is exactly the problem." },
      { type: "fill", jp: "{彼|かれ}が{正|ただ}しかった＿＿である。", answer: "の", options: ["の","な","に","が"], en: "The fact is that he was right." },
      { type: "order", tiles: ["{人|ひと}は","{言葉|ことば}で","{考|かんが}える","のである"], en: "People, you see, think in words." },
      { type: "order", tiles: ["{便利|べんり}だから","{使|つか}われる","のである"], en: "It is used because it is convenient, you see." },
      { type: "choose", q: "What is the everyday spoken form of のである?", answer: "んです", options: ["んです","ですか","ましょう","でした"] }
    ]
  }
]);

window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {
  "L213-1": {
    formula: ["N + について + V","N + についての + N"],
    points: [
      "Use it with verbs like 話す, 考える, 調べる and 書く.",
      "It replaces を, so never write についてを.",
      "Before a noun, add の: についての.",
      "It fits both speech and writing."
    ],
    tables: [
      { title: "Two shapes", headers: ["Japanese","Meaning"], rows: [
        ["事件について話す","talk about the incident"],
        ["事件についての話","a talk about the incident"]
      ] }
    ],
    mistakes: [
      { bad: "ニュースについてを話した。", good: "ニュースについて話した。", why: "について already does the job of を." },
      { bad: "政治について本を読んだ。", good: "政治についての本を読んだ。", why: "Use についての when the next word is the noun it describes." }
    ],
    tip: "If you could say 'on the topic of' in English, について will almost always fit."
  },
  "L213-2": {
    formula: ["N + に関して + V","N + に関する + N"],
    points: [
      "The meaning matches について, but the tone is more formal.",
      "Expect it in news, notices and emails at work.",
      "Before a noun, use に関する.",
      "With friends, について sounds more natural."
    ],
    tables: [
      { title: "について or に関して", headers: ["Japanese","Where you hear it"], rows: [
        ["旅行について話す","everyday talk"],
        ["旅行に関して話す","meetings and reports"],
        ["料金についての質問","everyday talk"],
        ["料金に関する質問","notices and reports"]
      ] }
    ],
    mistakes: [
      { bad: "事件に関して情報を集める人", good: "事件に関する情報を集める人", why: "The next word is the noun it describes, so use に関する." }
    ],
    tip: "Think of に関する as an adjective form: it always sits right before a noun."
  },
  "L213-3": {
    formula: ["N + である","な-adj + である"],
    points: [
      "である replaces だ and です in formal writing.",
      "Past is であった. Negative is ではない.",
      "な-adjectives drop な: 便利である.",
      "Do not mix it with です in one text."
    ],
    tables: [
      { title: "Same meaning, different register", headers: ["Spoken polite","Plain","Written"], rows: [
        ["首都です","首都だ","首都である"],
        ["首都でした","首都だった","首都であった"],
        ["首都ではありません","首都ではない","首都ではない"]
      ] }
    ],
    mistakes: [
      { bad: "便利なである。", good: "便利である。", why: "Drop な before である, as you do before だ." },
      { bad: "東京は首都であるです。", good: "東京は首都である。", why: "である stands alone. Never add です after it." }
    ],
    tip: "Read one newspaper paragraph aloud and swap である for です to feel the difference in tone."
  },
  "L213-4": {
    formula: ["N + により、clause","N + による + N"],
    points: [
      "Expect it in news reports, notices and essays.",
      "Before a noun, use による.",
      "It can show a cause, a means or an agent.",
      "With 違う or 変わる it means 'depending on'."
    ],
    tables: [
      { title: "Four uses", headers: ["Japanese","Use"], rows: [
        ["台風により止まった","cause"],
        ["ネットにより伝わる","means"],
        ["社長により中止された","agent of a passive"],
        ["国により違う","depending on"]
      ] }
    ],
    mistakes: [
      { bad: "じしんによりひがい", good: "じしんによるひがい", why: "Use による directly before a noun." }
    ],
    tip: "When reading the news, translate により as 'due to' first, then adjust if it sounds wrong."
  },
  "L214-1": {
    formula: ["N + を中心に + V","N + を中心とした + N"],
    points: [
      "The noun marks the main part, but other things are included too.",
      "Use it for places, people and topics.",
      "Before a noun, use を中心とした.",
      "を中心にして means the same."
    ],
    tables: [
      { title: "Shapes", headers: ["Japanese","Meaning"], rows: [
        ["若者を中心に人気だ","popular, mainly with young people"],
        ["東京を中心とした地方","the region centred on Tokyo"]
      ] }
    ],
    mistakes: [
      { bad: "アジアに中心に売る。", good: "アジアを中心に売る。", why: "The particle before 中心 is を." }
    ],
    tip: "Picture a circle: the noun sits in the middle and the action spreads out from it."
  },
  "L214-2": {
    formula: ["N + をはじめ、group","N + をはじめとする + N"],
    points: [
      "The noun is the best-known or highest-ranking example.",
      "A group word follows: みんな, 全員, いろいろな.",
      "Before a noun, use をはじめとする.",
      "This is not the verb はじめる with て."
    ],
    tables: [
      { title: "Shapes", headers: ["Japanese","Meaning"], rows: [
        ["社長をはじめ全員","everyone, including the president"],
        ["京都をはじめとする町","towns such as Kyoto"]
      ] }
    ],
    mistakes: [
      { bad: "父をはじめて、みんなが来た。", good: "父をはじめ、みんなが来た。", why: "Use the bare form はじめ, not the て-form." }
    ],
    tip: "Use it when the first example is the famous or senior one in the group."
  },
  "L214-3": {
    formula: ["V dictionary + ため(に)","plain clause + ため","N + の + ため(に)"],
    points: [
      "A dictionary-form action you control usually means purpose.",
      "A past or stative clause means reason.",
      "In writing, に is often dropped after ため.",
      "ため is more formal than から and ので."
    ],
    tables: [
      { title: "Purpose or reason?", headers: ["Japanese","Meaning","Use"], rows: [
        ["買うため、働く","work in order to buy","purpose"],
        ["買ったため、お金がない","no money because I bought it","reason"],
        ["雨のため、休みだ","closed because of rain","reason"],
        ["家族のため、働く","work for my family","purpose"]
      ] }
    ],
    mistakes: [
      { bad: "雪が降るため、トラックが遅れた。", good: "雪が降ったため、トラックが遅れた。", why: "A finished cause takes the past form." }
    ],
    tip: "Look at the verb before ため: past tense almost always means a reason."
  },
  "L214-4": {
    formula: ["N + にくらべて","N + にくらべると"],
    points: [
      "The noun before に is the standard you measure against.",
      "The result is usually a state or a change.",
      "にくらべると means the same.",
      "Later you will also see it written with a kanji."
    ],
    tables: [
      { title: "より or にくらべて", headers: ["Japanese","Meaning"], rows: [
        ["AはBより高い","A is more expensive than B"],
        ["AはBにくらべて高い","A is expensive compared with B"]
      ] }
    ],
    mistakes: [
      { bad: "ガラスをくらべてかるい。", good: "ガラスにくらべてかるい。", why: "を + くらべる means you do the comparing. Use に for the standard." }
    ],
    tip: "Use it to describe trends: 去年にくらべて is a favourite opening in news reports."
  },
  "L215-1": {
    formula: ["V た + ら、clause (past)"],
    points: [
      "The second half is past tense.",
      "The result is outside your control.",
      "Often it comes as a surprise.",
      "For your own planned next step, use てから."
    ],
    tables: [
      { title: "Same たら, different ending", headers: ["Japanese","Meaning"], rows: [
        ["家に帰ったら、電話します","I'll call when I get home"],
        ["家に帰ったら、猫がいた","When I got home, there was a cat"]
      ] }
    ],
    mistakes: [
      { bad: "うちに帰ったら、宿題をした。", good: "うちに帰ってから、宿題をした。", why: "The result must be outside your control. Your own planned act takes てから." }
    ],
    tip: "If you can add 'and to my surprise' in English, たら～た probably fits."
  },
  "L215-2": {
    formula: ["V plain + ほど + state","い-adj + ほど + state","number + ほど"],
    points: [
      "The clause before ほど paints an extreme picture.",
      "The picture does not need to be literally true.",
      "After a number, ほど means about.",
      "Do not use ほど with a point in time."
    ],
    tables: [
      { title: "Two uses", headers: ["Japanese","Meaning"], rows: [
        ["なきたいほど痛い","so painful I want to cry"],
        ["死ぬほど疲れた","tired to death"],
        ["三日ほど続く","last about three days"],
        ["千円ほどかかる","cost about 1,000 yen"]
      ] }
    ],
    mistakes: [
      { bad: "三時ほどに来る。", good: "三時ごろに来る。", why: "A clock time takes ごろ. ほど is for amounts." }
    ],
    tip: "Collect a few set phrases such as 死ぬほど and 信じられないほど. You will hear them daily."
  },
  "L215-3": {
    formula: ["number + くらい","V plain + くらい + state","N + くらい"],
    points: [
      "くらい and ぐらい are interchangeable.",
      "It can mark a rough number.",
      "It can show degree, like ほど.",
      "After a noun it can play something down."
    ],
    tables: [
      { title: "Three uses", headers: ["Japanese","Meaning"], rows: [
        ["十分くらい","about ten minutes"],
        ["耳が痛いくらい寒い","so cold my ears hurt"],
        ["メールくらい書いて","at least write an email"]
      ] },
      { title: "くらい or ほど", headers: ["Meaning","くらい","ほど"], rows: [
        ["about ten minutes","十分くらい","十分ほど"],
        ["so cold it hurts","痛いくらい寒い","痛いほど寒い"],
        ["at least an email","メールくらい","not used"]
      ] }
    ],
    mistakes: [
      { bad: "メールほど書いてください。", good: "メールくらい書いてください。", why: "Only くらい can mean 'at least'." }
    ],
    tip: "ほど sounds a little stronger, so choose くらい when you are playing something down."
  },
  "L215-4": {
    formula: ["V plain + かもしれない","い-adj + かもしれない","な-adj・N + かもしれない"],
    points: [
      "な-adjectives and nouns drop だ.",
      "もしかしたら at the start lowers the odds.",
      "Polite form: かもしれません.",
      "In casual speech it shortens to かも."
    ],
    tables: [
      { title: "How sure are you?", headers: ["Japanese","Certainty"], rows: [
        ["降るに違いない","very sure"],
        ["降るはずだ","sure, with a reason"],
        ["降るだろう","fairly sure"],
        ["降るかもしれない","possible"]
      ] }
    ],
    mistakes: [
      { bad: "雪だかもしれない。", good: "雪かもしれない。", why: "Nouns and な-adjectives drop だ before かもしれない." }
    ],
    tip: "Use かも with friends and かもしれません with everyone else."
  },
  "L216-1": {
    formula: ["V ない + と、bad result","V ない + と。"],
    points: [
      "The second half is a natural, unwelcome result.",
      "Do not put a request after it.",
      "Alone, it is short for ないといけない.",
      "It is spoken and casual."
    ],
    tables: [
      { title: "Two uses", headers: ["Japanese","Meaning"], rows: [
        ["寝ないと、疲れるよ","if you don't sleep, you'll be tired"],
        ["もう寝ないと","I have to sleep now"]
      ] }
    ],
    mistakes: [
      { bad: "飲まないと、飲んでください。", good: "飲まないと、よくなりませんよ。", why: "と cannot be followed by a request." }
    ],
    tip: "Say もう行かないと when leaving a friend's house. It is the most natural exit line."
  },
  "L216-2": {
    formula: ["V ない + ことには + negative","い-adj くない + ことには + negative","な-adj・N + でない + ことには"],
    points: [
      "The second half is negative or impossible.",
      "It is stronger than ないと.",
      "Often seen with てみないことには: you must try first.",
      "Good for careful, serious statements."
    ],
    tables: [
      { title: "Common pairs", headers: ["Japanese","Meaning"], rows: [
        ["見ないことにはわからない","can't tell without seeing"],
        ["話さないことには進まない","nothing moves without talking"],
        ["お金がないことには買えない","can't buy without money"]
      ] }
    ],
    mistakes: [
      { bad: "休まないことには、治る。", good: "休まないことには、治らない。", why: "The second half must be negative." }
    ],
    tip: "Memorise やってみないことにはわからない. It carries the whole pattern."
  },
  "L216-3": {
    formula: ["V dictionary + ことはない"],
    points: [
      "It reassures: you don't have to.",
      "It can sound firm with そんなに.",
      "Do not confuse it with Vたことはない.",
      "Same idea as なくてもいい, but stronger."
    ],
    tables: [
      { title: "Dictionary form or た-form", headers: ["Japanese","Meaning"], rows: [
        ["行くことはない","there is no need to go"],
        ["行ったことはない","I have never been"]
      ] }
    ],
    mistakes: [
      { bad: "心配したことはないよ。", good: "心配することはないよ。", why: "With the た-form it means 'have never', not 'no need to'." }
    ],
    tip: "Pair it with そんなに to comfort a friend: そんなに心配することはないよ。"
  },
  "L216-4": {
    formula: ["V dictionary + に限る","V ない + に限る","N + に限る"],
    points: [
      "It shows personal opinion, not fact.",
      "Common with やっぱり.",
      "Great for food, health and seasonal habits.",
      "No past form is used in this meaning."
    ],
    tables: [
      { title: "What goes before it", headers: ["Japanese","Meaning"], rows: [
        ["寝るに限る","sleeping is the best thing"],
        ["むりをしないに限る","best not to push yourself"],
        ["ビールに限る","nothing beats beer"]
      ] }
    ],
    mistakes: [
      { bad: "アイスを限る。", good: "アイスに限る。", why: "The particle is に." }
    ],
    tip: "Think of a sigh of satisfaction: 夏はやっぱりビールに限る！"
  },
  "L217-1": {
    formula: ["plain sentence + よね","polite sentence + よね"],
    points: [
      "You already believe it. You want agreement.",
      "It can also check a memory.",
      "Works after plain or polite forms.",
      "Softer than a direct question."
    ],
    tables: [
      { title: "よ, ね and よね", headers: ["Japanese","What it does"], rows: [
        ["おいしいよ","tells the listener something new"],
        ["おいしいね","shares a feeling both people have now"],
        ["おいしいよね","checks that the listener agrees"]
      ] }
    ],
    mistakes: [
      { bad: "苦手なよね。", good: "苦手だよね。", why: "な-adjectives and nouns need だ before よね." }
    ],
    tip: "Add よね when you want to sound friendly and invite a yes."
  },
  "L217-2": {
    formula: ["V・い-adj plain + かな","な-adj・N + かな","V ない + かな (wish)"],
    points: [
      "It is casual: use it with friends or alone.",
      "な-adjectives and nouns drop だ.",
      "ないかな wishes for something to happen.",
      "Use でしょうか in polite speech."
    ],
    tables: [
      { title: "Wondering or wishing", headers: ["Japanese","Meaning"], rows: [
        ["晴れるかな","I wonder if it'll be sunny"],
        ["晴れないかな","I wish it would clear up"],
        ["元気かな","I wonder if they are well"]
      ] }
    ],
    mistakes: [
      { bad: "元気だかな。", good: "元気かな。", why: "Drop だ before かな." }
    ],
    tip: "Use 行こうかな to think aloud about a plan: volitional + かな means 'maybe I'll ~'."
  },
  "L217-3": {
    formula: ["plain past + っけ","N・な-adj + だっけ・だったっけ","polite past + っけ"],
    points: [
      "Use it for things you have forgotten.",
      "Use it with friends. It is casual.",
      "だっけ and だったっけ both work.",
      "Polite form: でしたっけ, ましたっけ."
    ],
    tables: [
      { title: "Forms", headers: ["Japanese","Meaning"], rows: [
        ["何時だっけ","what time was it?"],
        ["言ったっけ","did I say that?"],
        ["どこでしたっけ","where was it? (polite)"],
        ["行きましたっけ","did we go? (polite)"]
      ] }
    ],
    mistakes: [
      { bad: "初めて会う人に、お名前は何だっけ。", good: "お名前は何ですか。", why: "っけ means you once knew it, so it cannot ask something new." }
    ],
    tip: "When a word escapes you, say 何だっけ out loud. It buys time and sounds natural."
  },
  "L217-4": {
    formula: ["V plain + のに。","～ばよかったのに。","～たらよかったのに。"],
    points: [
      "The second half is left unsaid.",
      "Expect ばよかった and たらよかった before it.",
      "Often aimed at the listener, so use it with care.",
      "せっかく often adds to the feeling."
    ],
    tables: [
      { title: "Common set phrases", headers: ["Japanese","Meaning"], rows: [
        ["言えばよかったのに","you should have said"],
        ["行けばよかったのに","you should have gone"],
        ["せっかく来たのに","and I came all this way"]
      ] }
    ],
    mistakes: [
      { bad: "言ってくれるよかったのに。", good: "言ってくれればよかったのに。", why: "Use the ば-form or the たら-form before よかった." }
    ],
    tip: "Your tone carries this ending: it falls and trails away with a small sigh."
  },
  "L218-1": {
    formula: ["N + さえ + V ば","V ます-stem + さえすれば","い-adj く + さえあれば"],
    points: [
      "The second half is the good result.",
      "Nothing else matters except this one condition.",
      "さえ replaces が and を.",
      "With verbs, use the stem plus さえすれば."
    ],
    tables: [
      { title: "Forms", headers: ["Japanese","Meaning"], rows: [
        ["お金さえあれば","if only I had money"],
        ["読みさえすれば","if you just read it"],
        ["安くさえあれば","as long as it's cheap"],
        ["静かでさえあれば","as long as it's quiet"]
      ] }
    ],
    mistakes: [
      { bad: "辞書をさえあれば読める。", good: "辞書さえあれば読める。", why: "さえ takes the place of が or を." },
      { bad: "読むさえすれば", good: "読みさえすれば", why: "Use the ます-stem before さえすれば." }
    ],
    tip: "Memorise お金さえあれば and swap in anything you wish you had."
  },
  "L218-2": {
    formula: ["V て + も + V ない→なくても","い-adj くても + くなくても","N でも + N でなくても"],
    points: [
      "Use the same word twice: positive, then negative.",
      "The second half stays unchanged.",
      "Nouns and な-adjectives use でも and でなくても.",
      "する verbs shorten: してもしなくても."
    ],
    tables: [
      { title: "By word type", headers: ["Japanese","Meaning"], rows: [
        ["行っても行かなくても","whether I go or not"],
        ["高くても高くなくても","whether it's expensive or not"],
        ["便利でも便利でなくても","whether it's handy or not"],
        ["学生でも学生でなくても","whether a student or not"]
      ] }
    ],
    mistakes: [
      { bad: "学生だなくても", good: "学生でなくても", why: "Nouns use でなくても." }
    ],
    tip: "It works like 'rain or shine': say both sides, then the thing that never changes."
  },
  "L218-3": {
    formula: ["N + というのは + ～ことです","N + とは + ～ことである"],
    points: [
      "The answer usually ends in ことだ or のことだ.",
      "とは is the more written and formal one.",
      "In speech you hear って and っていうのは.",
      "It also asks meanings: ～というのは何ですか。"
    ],
    tables: [
      { title: "From casual to formal", headers: ["Japanese","Where you meet it"], rows: [
        ["単位って","with friends"],
        ["単位というのは","class and normal speech"],
        ["単位とは","dictionaries and essays"]
      ] }
    ],
    mistakes: [
      { bad: "学割というのは、学生の割引です。", good: "学割というのは、学生の割引のことです。", why: "Finish a definition with のことです." }
    ],
    tip: "Ask your teacher ～というのは何ですか whenever a new word appears."
  },
  "L218-4": {
    formula: ["N + しか + V ない","V dictionary + しかない"],
    points: [
      "The verb must be negative.",
      "It replaces が and を, but follows に and で.",
      "It feels like 'not enough'.",
      "V + しかない means there is no other choice."
    ],
    tables: [
      { title: "しか or だけ", headers: ["Japanese","Feeling"], rows: [
        ["百円しかない","only 100 yen: not enough"],
        ["百円だけある","just 100 yen: neutral"],
        ["歩くしかない","no choice but to walk"]
      ] }
    ],
    mistakes: [
      { bad: "水しか飲む。", good: "水しか飲まない。", why: "しか always needs a negative." },
      { bad: "水をしか飲まない。", good: "水しか飲まない。", why: "しか replaces を." }
    ],
    tip: "When your English says 'only' and you feel disappointed, reach for しか."
  },
  "L219-1": {
    formula: ["N + として + V","N + としての + N"],
    points: [
      "The noun is a role or a status.",
      "Before a noun, use としての.",
      "Add は or も for emphasis: としては, としても.",
      "Do not confuse it with にとって."
    ],
    tables: [
      { title: "として or にとって", headers: ["Japanese","Meaning"], rows: [
        ["親として話す","speak in my role as a parent"],
        ["親にとって大切だ","important from a parent's view"]
      ] }
    ],
    mistakes: [
      { bad: "私にとって、部長は責任を取る。", good: "部長として、私が責任を取る。", why: "A role you act in takes として." }
    ],
    tip: "Ask yourself: is the person acting in a role? If so, として."
  },
  "L219-2": {
    formula: ["N + にとって + judgement","N + にとっての + N"],
    points: [
      "The noun is usually a person or group.",
      "Follow it with words like 大切, 難しい, 便利.",
      "It does not take actions or opinions like 賛成.",
      "にとっては adds contrast with other people."
    ],
    tables: [
      { title: "Natural judgement words", headers: ["Japanese","Meaning"], rows: [
        ["私にとって大切だ","important to me"],
        ["学生にとって難しい","difficult for students"],
        ["親にとって便利だ","handy for parents"]
      ] }
    ],
    mistakes: [
      { bad: "私にとって、賛成です。", good: "私は賛成です。", why: "State your own opinion with は. にとって is for evaluating something." }
    ],
    tip: "If you could replace it with 'from the point of view of', にとって is right."
  },
  "L219-3": {
    formula: ["お + V ます-stem + になる","ご + する noun + になる","お + V ます-stem + ください"],
    points: [
      "The subject is someone you respect.",
      "Learn the special verbs by heart.",
      "Other verbs take お～になる.",
      "いらっしゃる, おっしゃる, なさる, くださる end in います."
    ],
    tables: [
      { title: "Special honorific verbs", headers: ["Plain","そんけいご","ます form"], rows: [
        ["行く・来る・いる","いらっしゃる","いらっしゃいます"],
        ["食べる・飲む","めしあがる","めしあがります"],
        ["言う","おっしゃる","おっしゃいます"],
        ["する","なさる","なさいます"],
        ["見る","ごらんになる","ごらんになります"],
        ["知っている","ごぞんじだ","ごぞんじです"],
        ["くれる","くださる","くださいます"]
      ] }
    ],
    mistakes: [
      { bad: "先生がいらっしゃります。", good: "先生がいらっしゃいます。", why: "These verbs take います, not ります." },
      { bad: "社長がいただきました。", good: "社長がめしあがりました。", why: "いただく is humble. Never use it for the boss's action." }
    ],
    tip: "Ask who is doing the action: the respected person gets そんけいご, and you never do."
  },
  "L219-4": {
    formula: ["お + V ます-stem + する","ご + する noun + する"],
    points: [
      "The subject is you or your own group.",
      "To outsiders, your boss counts as your group.",
      "Drop さん and titles for your own staff.",
      "Learn the special verbs by heart."
    ],
    tables: [
      { title: "Special humble verbs", headers: ["Plain","けんじょうご","ます form"], rows: [
        ["行く・来る","まいる","まいります"],
        ["いる","おる","おります"],
        ["言う","申す","申します"],
        ["する","いたす","いたします"],
        ["見る","はいけんする","はいけんします"],
        ["食べる・もらう","いただく","いただきます"],
        ["聞く・訪ねる","うかがう","うかがいます"]
      ] }
    ],
    mistakes: [
      { bad: "私がごらんになります。", good: "私がはいけんします。", why: "ごらんになる raises the actor, so never use it for yourself." },
      { bad: "お客さまが申しました。", good: "お客さまがおっしゃいました。", why: "申す lowers the speaker. Customers need そんけいご." }
    ],
    tip: "Pair each verb with its opposite: おっしゃる and 申す, めしあがる and いただく."
  },
  "L220-1": {
    formula: ["V・い-adj plain + わけだ","な-adj な + わけだ","N の・N という + わけだ"],
    points: [
      "Use it when facts suddenly make sense.",
      "どうりで before it means 'no wonder'.",
      "It can also state a calculated result.",
      "な-adjectives keep な."
    ],
    tables: [
      { title: "Two uses", headers: ["Japanese","Meaning"], rows: [
        ["どうりで暗いわけだ","no wonder it's dark"],
        ["合計で二十時間になるわけだ","that comes to twenty hours"]
      ] }
    ],
    mistakes: [
      { bad: "上手だわけだ。", good: "上手なわけだ。", why: "な-adjectives keep な before わけだ." }
    ],
    tip: "Think of わけだ as the sound of a light bulb coming on."
  },
  "L220-2": {
    formula: ["V・い-adj plain + わけではない","な-adj な + わけではない","N の・N という + わけではない"],
    points: [
      "It corrects a likely assumption.",
      "It is a partial denial, not a full no.",
      "全部, いつも and 毎日 often appear with it.",
      "Casual form: わけじゃない."
    ],
    tables: [
      { title: "Full no or partial no", headers: ["Japanese","Meaning"], rows: [
        ["きらいだ","I hate it"],
        ["きらいではない","I don't hate it"],
        ["きらいなわけではない","it's not that I hate it"]
      ] }
    ],
    mistakes: [
      { bad: "きらいわけではない。", good: "きらいなわけではない。", why: "きらい is a な-adjective, so keep な." }
    ],
    tip: "Follow it with が and a real reason, and you sound kind and honest."
  },
  "L220-3": {
    formula: ["V・い-adj plain + はずがない","な-adj な + はずがない","N の + はずがない"],
    points: [
      "The speaker has a reason for being sure.",
      "はずはない means the same.",
      "そんなはずはない is a set phrase.",
      "わけがない is close and more casual."
    ],
    tables: [
      { title: "はず family", headers: ["Japanese","Meaning"], rows: [
        ["来るはずだ","should come, I expect"],
        ["来ないはずだ","shouldn't come, I expect"],
        ["来るはずがない","cannot possibly come"],
        ["来ないはずがない","will certainly come"]
      ] }
    ],
    mistakes: [
      { bad: "カランさんはずがない。", good: "カランさんのはずがない。", why: "Nouns need の before はず." }
    ],
    tip: "Use it when you can give the reason. Without one, it just sounds stubborn."
  },
  "L220-4": {
    formula: ["V・い-adj plain + に違いない","な-adj・N + に違いない"],
    points: [
      "The speaker's own strong feeling, not hard proof.",
      "な-adjectives and nouns drop だ.",
      "More common in writing than in speech.",
      "In conversation, きっと～と思う sounds softer."
    ],
    tables: [
      { title: "に違いない or はずだ", headers: ["Japanese","Based on"], rows: [
        ["彼に違いない","a strong feeling or guess"],
        ["彼のはずだ","a logical reason"]
      ] }
    ],
    mistakes: [
      { bad: "便利だに違いない。", good: "便利に違いない。", why: "Drop だ before に違いない." }
    ],
    tip: "Think 'I bet'. Detective stories love this pattern: 犯人は彼に違いない。"
  },
  "L221-1": {
    formula: ["N + さえ","N + でさえ","N + particle + さえ"],
    points: [
      "さえ replaces が and を.",
      "It follows に and で: 友達にさえ.",
      "For a subject, でさえ is common.",
      "Do not confuse it with さえ～ば."
    ],
    tables: [
      { title: "With particles", headers: ["Japanese","Meaning"], rows: [
        ["水さえ飲めない","can't even drink water"],
        ["子供でさえわかる","even a child understands"],
        ["親にさえ言わない","doesn't tell even their parents"]
      ] }
    ],
    mistakes: [
      { bad: "親さえに言わない。", good: "親にさえ言わない。", why: "さえ comes after に." }
    ],
    tip: "Picture the lowest bar on the list. If even that fails, さえ is your word."
  },
  "L221-2": {
    formula: ["N + こそ","reason + からこそ"],
    points: [
      "It replaces は, が and を.",
      "今度こそ and 今年こそ show determination.",
      "こちらこそ returns thanks or a greeting.",
      "からこそ says 'precisely because'."
    ],
    tables: [
      { title: "Set phrases", headers: ["Japanese","Meaning"], rows: [
        ["こちらこそ","the same to you, no, thank you"],
        ["今度こそ","this time for sure"],
        ["これこそ","this is exactly it"],
        ["だからこそ","that is exactly why"]
      ] }
    ],
    mistakes: [
      { bad: "今年をこそがんばる。", good: "今年こそがんばる。", why: "こそ replaces the particle." }
    ],
    tip: "Say こちらこそ the next time someone thanks you. It is the easiest win in this unit."
  },
  "L221-3": {
    formula: ["N + まで","N + particle + まで","V て + まで"],
    points: [
      "It adds one more surprising item.",
      "It replaces が and を.",
      "It often pairs with だけでなく.",
      "Vてまで means going that far is too much."
    ],
    tables: [
      { title: "まで in two meanings", headers: ["Japanese","Meaning"], rows: [
        ["駅まで歩く","walk as far as the station"],
        ["靴までぬれた","even my shoes got wet"],
        ["うそをついてまで","going so far as to lie"]
      ] }
    ],
    mistakes: [
      { bad: "靴をまでぬらした。", good: "靴までぬらした。", why: "まで replaces を here." }
    ],
    tip: "Think of a list growing longer than you expected. まで adds the surprising last item."
  },
  "L221-4": {
    formula: ["A は B ほど + negative","N ほど + adj + N はない"],
    points: [
      "The ending must be negative.",
      "The thing after ほど is the stronger one.",
      "ほど～はない praises something as the most.",
      "くらい～はない means the same."
    ],
    tables: [
      { title: "Comparison patterns", headers: ["Japanese","Meaning"], rows: [
        ["今日は昨日より寒い","today is colder than yesterday"],
        ["今日は昨日ほど寒くない","today isn't as cold as yesterday"],
        ["今日ほど寒い日はない","no day is as cold as today"]
      ] }
    ],
    mistakes: [
      { bad: "今日は昨日ほど寒い。", good: "今日は昨日ほど寒くない。", why: "A comparison with ほど needs a negative ending." }
    ],
    tip: "Use ～ほど～はない to praise. It is warmer than いちばん."
  },
  "L222-1": {
    formula: ["V plain + ことになる","V plain + ことになっている"],
    points: [
      "The decision seems to come from outside.",
      "Japanese speakers use it even for their own choices.",
      "It sounds modest when announcing news.",
      "ことになっている states a rule or an arrangement."
    ],
    tables: [
      { title: "なる or なっている", headers: ["Japanese","Meaning"], rows: [
        ["けっこんすることになった","we're getting married (news)"],
        ["靴をぬぐことになっている","the rule is to take off shoes"]
      ] }
    ],
    mistakes: [
      { bad: "私が決めて、行くことになった。", good: "私が決めて、行くことにした。", why: "If you stress your own decision, use ことにする." }
    ],
    tip: "Use ことになりました for any personal announcement. It sounds modest and adult."
  },
  "L222-2": {
    formula: ["V dictionary + ことにする","V ない + ことにする","V dictionary + ことにしている"],
    points: [
      "The speaker chooses freely.",
      "ことにした reports a decision already made.",
      "ことにしている means a personal rule or habit.",
      "Vたことにする means acting as if it happened."
    ],
    tables: [
      { title: "The ことに family", headers: ["Japanese","Meaning"], rows: [
        ["行くことにした","I decided to go"],
        ["行くことになった","it was decided I'd go"],
        ["歩くことにしている","I make it a habit to walk"],
        ["歩くことになっている","the rule is that we walk"]
      ] }
    ],
    mistakes: [
      { bad: "会社の決まりで、行くことにした。", good: "会社の決まりで、行くことになった。", why: "A rule from outside takes ことになる." }
    ],
    tip: "する means you chose. なる means it happened to you."
  },
  "L222-3": {
    formula: ["plain + としたら","plain + とすれば","N・な-adj + だとしたら"],
    points: [
      "The two mean almost the same.",
      "もし often comes at the start.",
      "Nouns and な-adjectives keep だ.",
      "Often used for unreal or uncertain ideas."
    ],
    tables: [
      { title: "Two uses", headers: ["Japanese","Meaning"], rows: [
        ["外国に住むとしたら","imagining: if I were to live abroad"],
        ["彼が来ないとすれば","reasoning: if he really isn't coming"],
        ["本当だとすれば","reasoning: if it is true"]
      ] }
    ],
    mistakes: [
      { bad: "本物なとしたら", good: "本物だとしたら", why: "Use だ, not な, before としたら." }
    ],
    tip: "Start a fun question with もし～としたら. It is a perfect conversation opener."
  },
  "L222-4": {
    formula: ["V・い-adj plain + なら","な-adj・N + なら"],
    points: [
      "It often responds to what the other person said.",
      "The second half is advice, a request or a view.",
      "The action after なら can happen first.",
      "な-adjectives and nouns drop だ."
    ],
    tables: [
      { title: "なら or たら", headers: ["Japanese","Order of events"], rows: [
        ["日本へ行くなら、カメラを買おう","buy first, then go"],
        ["日本へ行ったら、カメラを買おう","go first, then buy"]
      ] }
    ],
    mistakes: [
      { bad: "日本へ行ったら、ビザを取ってください。", good: "日本へ行くなら、ビザを取ってください。", why: "The visa comes first, so たら does not work." }
    ],
    tip: "When a friend says 'I'm thinking of…', answer with なら and a suggestion."
  },
  "L223-1": {
    formula: ["person + に + V passive","person + に + N を + V passive"],
    points: [
      "The speaker is the hidden subject.",
      "に marks the one who caused the trouble.",
      "Even 降る and なく can be passive here.",
      "Your body parts and things take を."
    ],
    tables: [
      { title: "Plain or suffering", headers: ["Japanese","Feeling"], rows: [
        ["雨が降った","plain fact"],
        ["雨に降られた","the rain caught me"],
        ["弟がケーキを食べた","plain fact"],
        ["弟にケーキを食べられた","my brother ate my cake"]
      ] }
    ],
    mistakes: [
      { bad: "私の足がふまれた。", good: "足をふまれた。", why: "For your own body or things, use を and leave out 私の." }
    ],
    tip: "Add 'on me' in your head: my child cried on me, the rain fell on me."
  },
  "L223-2": {
    formula: ["Group 1: V ない-stem + せられる・される","Group 2: V stem + させられる","Group 3: させられる・来させられる"],
    points: [
      "The doer is unwilling.",
      "に marks the person who forced you.",
      "Group 1 has a short form: 飲まされる.",
      "Verbs ending in す take only させられる."
    ],
    tables: [
      { title: "Forms", headers: ["Plain","Long form","Short form"], rows: [
        ["飲む","飲ませられる","飲まされる"],
        ["待つ","待たせられる","待たされる"],
        ["話す","話させられる","not used"],
        ["食べる","食べさせられる","not used"],
        ["する","させられる","not used"],
        ["来る","来させられる","not used"]
      ] }
    ],
    mistakes: [
      { bad: "先生に書かれた。", good: "先生に書かされた。", why: "書かれた is the ordinary passive. 書かされた means you were made to write." },
      { bad: "話さされた。", good: "話させられた。", why: "Verbs ending in す have no short form." }
    ],
    tip: "Remember the complaint 待たされた. You will use this one all your life."
  },
  "L223-3": {
    formula: ["A は B に + V て + あげる","A が + V て + くれる","A は B に + V て + もらう"],
    points: [
      "あげる: I do it for someone else.",
      "くれる: someone does it for me.",
      "もらう: I receive the favour.",
      "Use やる for pets, plants and younger family."
    ],
    tables: [
      { title: "Plain and polite versions", headers: ["Direction","Plain","Polite"], rows: [
        ["I do it for you","てあげる","てさしあげる"],
        ["I do it for a pet or child","てやる","not used"],
        ["You do it for me","てくれる","てくださる"],
        ["I receive it from you","てもらう","ていただく"]
      ] }
    ],
    mistakes: [
      { bad: "友達が手伝ってあげた。", good: "友達が手伝ってくれた。", why: "When the favour comes to you, use くれる." },
      { bad: "先生、持ってあげます。", good: "先生、お持ちします。", why: "てあげる sounds rude to a superior. Use お～します." }
    ],
    tip: "Draw an arrow in your head: toward me is くれる, away from me is あげる."
  },
  "L223-4": {
    formula: ["V causative て + いただく","V causative て + いただけますか","V causative て + もらう"],
    points: [
      "The speaker is the one who acts.",
      "いただけますか asks for permission.",
      "いただきます announces your action politely.",
      "Build it from the causative て-form."
    ],
    tables: [
      { title: "Build it from the causative", headers: ["Plain","Causative","Polite request"], rows: [
        ["読む","読ませる","読ませていただけますか"],
        ["帰る","帰らせる","帰らせていただけますか"],
        ["食べる","食べさせる","食べさせていただけますか"],
        ["する","させる","させていただけますか"],
        ["来る","来させる","来させていただけますか"]
      ] }
    ],
    mistakes: [
      { bad: "読んでいただきます。", good: "読ませていただきます。", why: "読んでいただく means the other person reads. You read with 読ませて." }
    ],
    tip: "Memorise 説明させていただきます and お休みさせていただきます. Both come up at work."
  },
  "L224-1": {
    formula: ["N + といえば","N + というと"],
    points: [
      "といえば often shifts the conversation.",
      "Both can give the typical example of something.",
      "というと？ asks 'you mean?'.",
      "They do not define a word."
    ],
    tables: [
      { title: "Topic or definition", headers: ["Japanese","Meaning"], rows: [
        ["京都といえば秋だ","Kyoto makes me think of autumn"],
        ["京都というと秋を思い出す","Kyoto reminds me of autumn"],
        ["学割というのは割引だ","gakuwari means a discount"]
      ] }
    ],
    mistakes: [
      { bad: "学割といえば、学生の割引のことです。", good: "学割というのは、学生の割引のことです。", why: "For a definition, use というのは." }
    ],
    tip: "Use といえば to steer a chat toward what you want to talk about."
  },
  "L224-2": {
    formula: ["N + だけでなく","V・い-adj plain + だけでなく","な-adj な + だけでなく"],
    points: [
      "The second half usually has も.",
      "な-adjectives keep な.",
      "Spoken form: だけじゃなくて.",
      "Both items point the same way."
    ],
    tables: [
      { title: "By word type", headers: ["Japanese","Meaning"], rows: [
        ["英語だけでなく","not only English"],
        ["話すだけでなく","not only speaking"],
        ["安いだけでなく","not only cheap"],
        ["便利なだけでなく","not only convenient"]
      ] }
    ],
    mistakes: [
      { bad: "便利だけでなく、安全だ。", good: "便利なだけでなく、安全だ。", why: "な-adjectives keep な before だけ." }
    ],
    tip: "Link two good points in a review with だけでなく. It instantly sounds more fluent."
  },
  "L224-3": {
    formula: ["N + ばかりか","V・い-adj plain + ばかりか","な-adj な + ばかりか"],
    points: [
      "The second half is more surprising.",
      "Often paired with も, まで or さえ.",
      "The ending cannot be a command or request.",
      "It is more written than だけでなく."
    ],
    tables: [
      { title: "だけでなく or ばかりか", headers: ["Japanese","Feeling"], rows: [
        ["英語だけでなく中国語も話す","neutral addition"],
        ["英語ばかりか中国語まで話す","surprise, even more than expected"]
      ] }
    ],
    mistakes: [
      { bad: "英語ばかりか、中国語も話してください。", good: "英語だけでなく、中国語も話してください。", why: "A request cannot follow ばかりか." }
    ],
    tip: "Use it when your eyebrows go up as you say the second half."
  },
  "L224-4": {
    formula: ["V・い-adj plain + のである","な-adj・N + なのである"],
    points: [
      "It gives an explanation or a conclusion.",
      "Essays often close a paragraph with it.",
      "Nouns and な-adjectives take なのである.",
      "Use it only in writing."
    ],
    tables: [
      { title: "The same idea in three registers", headers: ["Spoken","Polite","Written"], rows: [
        ["変わるんだ","変わるんです","変わるのである"],
        ["便利なんだ","便利なんです","便利なのである"],
        ["問題なんだ","問題なんです","問題なのである"]
      ] }
    ],
    mistakes: [
      { bad: "問題のである。", good: "問題なのである。", why: "Nouns need な before のである." },
      { bad: "来たである。", good: "来たのである。", why: "Verbs cannot take である directly." }
    ],
    tip: "Treat it as んです in a suit: the same job, for the page instead of the conversation."
  }
});

window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  213: {
    can: ["Talk about what a news story is about","Read formal notices that use に関して","Recognise である style in articles","Understand causes reported with により"],
    first: ["しゃかい","せいじ","けいざい","せんきょ","じけん","じこ","けいさつ","きじ","ほうどう","じんこう","しょうしか","せいふ"],
    tip: "Read one short news item a day and underline every である and により."
  },
  214: {
    can: ["Say what something is mainly about","Give a leading example with をはじめ","Give written reasons and purposes with ため","Compare with にくらべて"],
    first: ["こうじょう","さんぎょう","せいさん","ざいりょう","げんりょう","きかい","せいひん","ぶひん","ゆしゅつ","ゆにゅう","しげん","ぎじゅつ"],
    tip: "Describe a product you own: what it is made of, and where it is mainly sold."
  },
  215: {
    can: ["Report something you found after an action","Describe degree with ほど and くらい","Talk about what might happen with the weather"],
    first: ["てんきよほう","たいふう","じしん","きおん","しぜん","かんきょう","つもります","ふきます","くもり","はれ","おおあめ","かみなり"],
    tip: "Describe today's weather with one ほど sentence every morning."
  },
  216: {
    can: ["Warn someone with ないと","State a must-have first step with ないことには","Reassure someone with ことはない","Share your best remedy with に限る"],
    first: ["けんこう","ねつ","せき","けが","ずつう","にゅういんします","たいいんします","ちりょう","けんさ","しんさつ","しょうじょう","なおります"],
    tip: "Give a friend advice on a cold using all four patterns in this unit."
  },
  217: {
    can: ["Check that a friend feels the same with よね","Wonder aloud with かな","Ask about something you forgot with っけ","Show regret with a final のに"],
    first: ["うれしい","かなしい","さびしい","はずかしい","くやしい","こわい","しんぱいします","あんしんします","せいかく","やさしい","まじめ","きんちょうします"],
    tip: "These endings carry feeling, so say each example aloud with the right tone."
  },
  218: {
    can: ["State the one condition you need with さえ～ば","Say the result stays the same with ても～なくても","Define a word with というのは","Say 'only' with しか～ない"],
    first: ["じゅぎょう","しけん","せいせき","たんい","ろんぶん","そつぎょうします","にゅうがくします","りゅうがくします","こうぎ","よしゅう","ふくしゅう","ごうかくします"],
    tip: "Define five school words in Japanese using というのは."
  },
  219: {
    can: ["Say what role you act in with として","Give a viewpoint with にとって","Use そんけいご for bosses and customers","Use けんじょうご for your own actions"],
    first: ["じょうし","どうりょう","ぶか","きゅうりょう","ざんぎょう","しゅっちょう","めんせつ","りれきしょ","せきにん","けいけん","しゅうしょくします","たいしょくします"],
    tip: "Learn そんけいご and けんじょうご verbs in pairs, then practise a phone call."
  },
  220: {
    can: ["Explain why something makes sense with わけだ","Soften a statement with わけではない","Reject an idea with はずがない","Make a confident guess with に違いない"],
    first: ["がめん","インターネット","じょうほう","パスワード","データ","ウイルス","せってい","ほぞんします","にゅうりょくします","けんさくします","せつぞくします","ダウンロードします"],
    tip: "Imagine your computer is broken and reason it out aloud with these four endings."
  },
  221: {
    can: ["Give an extreme example with さえ and まで","Stress one thing with こそ","Say something falls short with ほど～ない","Use manner words in full sentences"],
    first: ["どきどき","わくわく","いらいら","のんびり","ぐっすり","ぺこぺこ","ざあざあ","にこにこ","ぴかぴか","じめじめ","びしょびしょ","げらげら"],
    tip: "Learn each sound word inside a sentence, because the feeling matters more than the translation."
  },
  222: {
    can: ["Announce what has been decided with ことになる","State your own decision with ことにする","Suppose something with としたら","Give advice on someone's plan with なら"],
    first: ["はなしあいます","みなおします","かきなおします","ききなおします","たてなおします","よみおわります","はしりだします","おもいだします","とりかえます","うまれかわります"],
    tip: "Compound verbs stack meaning: know the first verb and the second one, and most become easy."
  },
  223: {
    can: ["Complain about what happened to you with the passive","Say what you were made to do","Show who did a favour for whom","Ask for permission very politely"],
    first: ["さそいます","しかります","ほめます","たのみます","てつだいます","おくります","そうじします","せつめいします","しょうかいします","しょうたいします","ちゅういします","そうだんします"],
    tip: "Take one verb and say it in passive, causative and causative-passive in a row."
  },
  224: {
    can: ["Change the topic with といえば","Add more with だけでなく and ばかりか","Recognise のである in essays","Read common katakana words and idioms"],
    first: ["アルバイト","コンビニ","マナー","ルール","サービス","デザイン","チャンス","ストレス","アプリ","がいらいご","ことわざ","かんようく"],
    tip: "When a katakana word looks odd, read it aloud: the English often appears."
  }
});
