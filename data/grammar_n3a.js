// Grammar data: JLPT N3, first half (units 201–212).
// Families: time and sequence, cause and result, hearsay and appearance, change and tendency, contrast, obligation and advice.
window.GRAMMAR = (window.GRAMMAR || []).concat([

  // ───────── Unit 201: Time and schedules ─────────
  {
    id: "L201-1",
    lesson: 201,
    title: "～うちに",
    meaning: "While it is still so, before it changes",
    explain: "Use ～うちに when you should act while a state lasts, because that state will soon change.",
    examples: [
      { jp: "{若|わか}いうちに、いろいろな{国|くに}へ{行|い}ってみたい。", ro: "Wakai uchi ni, iroiro na kuni e itte mitai.", en: "I want to visit many countries while I'm young." },
      { jp: "あたたかいうちに、どうぞ{食|た}べてください。", ro: "Atatakai uchi ni, dōzo tabete kudasai.", en: "Please eat it while it's warm." },
      { jp: "{音楽|おんがく}を{聞|き}いているうちに、{眠|ねむ}くなった。", ro: "Ongaku o kiite iru uchi ni, nemuku natta.", en: "I got sleepy while listening to music." }
    ],
    drills: [
      { type: "fill", jp: "{学生|がくせい}の＿＿、たくさん{本|ほん}を{読|よ}んでおこう。", answer: "うちに", options: ["うちに","ように","とたんに","たびに"], en: "Let's read lots of books while we're students." },
      { type: "fill", jp: "{元気|げんき}＿＿うちに、{旅行|りょこう}を{楽|たの}しみたい。", answer: "な", options: ["な","の","だ","に"], en: "I want to enjoy travelling while I'm healthy." },
      { type: "order", tiles: ["まだ","{明|あか}るい","うちに","{帰|かえ}ろう"], en: "Let's go home while it's still light." },
      { type: "order", tiles: ["{音楽|おんがく}を","{聞|き}いている","うちに","{眠|ねむ}くなった"], en: "I got sleepy while listening to music." },
      { type: "choose", q: "Which sentence is correct?", answer: "{若|わか}いうちに、{外国語|がいこくご}を{勉強|べんきょう}したい。", options: ["{若|わか}いうちに、{外国語|がいこくご}を{勉強|べんきょう}したい。","{若|わか}いのうちに、{外国語|がいこくご}を{勉強|べんきょう}したい。","{若|わか}くうちに、{外国語|がいこくご}を{勉強|べんきょう}したい。","{若|わか}いだうちに、{外国語|がいこくご}を{勉強|べんきょう}したい。"] },
      { type: "choose", q: "What does ～うちに suggest?", answer: "The state will soon change, so act now", options: ["The state will soon change, so act now","The action happens every time","The action has just finished","The state will never change"] }
    ]
  },
  {
    id: "L201-2",
    lesson: 201,
    title: "～ないうちに",
    meaning: "Before something happens",
    explain: "Use V ない + うちに to act before a change comes, often a change you don't want.",
    examples: [
      { jp: "{雨|あめ}が{降|ふ}らないうちに、せんたく{物|もの}を{入|い}れよう。", ro: "Ame ga furanai uchi ni, sentakumono o ireyō.", en: "Let's bring the laundry in before it rains." },
      { jp: "{忘|わす}れないうちに、メモしておきます。", ro: "Wasurenai uchi ni, memo shite okimasu.", en: "I'll make a note before I forget." },
      { jp: "{暗|くら}くならないうちに、{山|やま}を{下|お}りましょう。", ro: "Kuraku naranai uchi ni, yama o orimashō.", en: "Let's go down the mountain before it gets dark." }
    ],
    drills: [
      { type: "fill", jp: "コーヒーが{冷|さ}め＿＿うちに、{飲|の}んでください。", answer: "ない", options: ["ない","る","た","ます"], en: "Please drink your coffee before it gets cold." },
      { type: "fill", jp: "{忘|わす}れ＿＿、{今|いま}{電話|でんわ}しておこう。", answer: "ないうちに", options: ["ないうちに","たうちに","るうちに","ないたびに"], en: "I'll call now before I forget." },
      { type: "order", tiles: ["{暗|くら}く","ならない","うちに","{帰|かえ}りましょう"], en: "Let's go home before it gets dark." },
      { type: "order", tiles: ["{気|き}が","つかない","うちに","{夜|よる}に","なっていた"], en: "Before I noticed, night had fallen." },
      { type: "choose", q: "Which means 'Let's go before the rain starts'?", answer: "{雨|あめ}が{降|ふ}らないうちに{行|い}こう。", options: ["{雨|あめ}が{降|ふ}らないうちに{行|い}こう。","{雨|あめ}が{降|ふ}っているうちに{行|い}こう。","{雨|あめ}が{降|ふ}ったら{行|い}こう。","{雨|あめ}がやんでから{行|い}こう。"] },
      { type: "choose", q: "Which is correctly formed?", answer: "{暗|くら}くならないうちに", options: ["{暗|くら}くならないうちに","{暗|くら}いならないうちに","{暗|くら}くなるないうちに","{暗|くら}くならなかったうちに"] }
    ]
  },
  {
    id: "L201-3",
    lesson: 201,
    title: "～最中に",
    meaning: "Right in the middle of",
    explain: "Use ～最中に when something, often an interruption, happens right in the middle of an action.",
    examples: [
      { jp: "{会議|かいぎ}の{最中|さいちゅう}に、{電話|でんわ}が{鳴|な}った。", ro: "Kaigi no saichū ni, denwa ga natta.", en: "The phone rang right in the middle of the meeting." },
      { jp: "{食事|しょくじ}をしている{最中|さいちゅう}に、じしんが{起|お}きた。", ro: "Shokuji o shite iru saichū ni, jishin ga okita.", en: "An earthquake struck right in the middle of our meal." },
      { jp: "{今|いま}、レポートを{書|か}いている{最中|さいちゅう}です。", ro: "Ima, repōto o kaite iru saichū desu.", en: "I'm right in the middle of writing a report." }
    ],
    drills: [
      { type: "fill", jp: "じゅぎょうの＿＿に、{電気|でんき}が{消|き}えた。", answer: "{最中|さいちゅう}", options: ["{最中|さいちゅう}","うち","とたん","ついで"], en: "The lights went out right in the middle of class." },
      { type: "fill", jp: "シャワーをあびて＿＿{最中|さいちゅう}に、{電話|でんわ}がかかってきた。", answer: "いる", options: ["いる","ある","おく","しまう"], en: "The phone rang right while I was in the shower." },
      { type: "order", tiles: ["{大事|だいじ}な","{試合|しあい}の","{最中|さいちゅう}に","{雨|あめ}が{降|ふ}り{出|だ}した"], en: "It started raining right in the middle of the important match." },
      { type: "order", tiles: ["{晩|ばん}ごはんを","{作|つく}っている","{最中|さいちゅう}です"], en: "I'm right in the middle of making dinner." },
      { type: "choose", q: "Which sentence is correct?", answer: "{試験|しけん}の{最中|さいちゅう}に、お{腹|なか}が{痛|いた}くなった。", options: ["{試験|しけん}の{最中|さいちゅう}に、お{腹|なか}が{痛|いた}くなった。","{若|わか}い{最中|さいちゅう}に、{留学|りゅうがく}したい。","{試験|しけん}の{最中|さいちゅう}だ、お{腹|なか}が{痛|いた}くなった。","{元気|げんき}な{最中|さいちゅう}に、{運動|うんどう}したい。"] },
      { type: "choose", q: "What usually follows ～最中に?", answer: "A sudden event or interruption", options: ["A sudden event or interruption","A polite request","A plan for next year","A general rule"] }
    ]
  },
  {
    id: "L201-4",
    lesson: 201,
    title: "～たとたん(に)",
    meaning: "The moment, just as",
    explain: "Use V た + とたん(に) when something surprising happens immediately after an action.",
    examples: [
      { jp: "{立|た}ち{上|あ}がったとたんに、{頭|あたま}が{痛|いた}くなった。", ro: "Tachiagatta totan ni, atama ga itaku natta.", en: "The moment I stood up, I got a headache." },
      { jp: "ドアを{開|あ}けたとたん、モチが{走|はし}ってきた。", ro: "Doa o aketa totan, Mochi ga hashitte kita.", en: "The moment I opened the door, Mochi came running." },
      { jp: "{駅|えき}に{着|つ}いたとたん、{電車|でんしゃ}のドアが{閉|し}まった。", ro: "Eki ni tsuita totan, densha no doa ga shimatta.", en: "The moment I reached the station, the train doors closed." }
    ],
    drills: [
      { type: "fill", jp: "{窓|まど}を{開|あ}け＿＿とたん、{強|つよ}い{風|かぜ}が{入|はい}ってきた。", answer: "た", options: ["た","る","ない","て"], en: "The moment I opened the window, a strong wind came in." },
      { type: "fill", jp: "{家|いえ}を{出|で}た＿＿、{雨|あめ}が{降|ふ}り{出|だ}した。", answer: "とたんに", options: ["とたんに","うちに","たびに","{最中|さいちゅう}に"], en: "The moment I left the house, it started to rain." },
      { type: "order", tiles: ["ベッドに","{入|はい}った","とたんに","{寝|ね}てしまった"], en: "I fell asleep the moment I got into bed." },
      { type: "order", tiles: ["{母|はは}の","{顔|かお}を","{見|み}た","とたん","なき{出|だ}した"], en: "The moment she saw her mother's face, she burst into tears." },
      { type: "choose", q: "Which sentence is correct?", answer: "バスを{降|お}りたとたん、{転|ころ}んでしまった。", options: ["バスを{降|お}りたとたん、{転|ころ}んでしまった。","バスを{降|お}りたとたん、{買|か}い{物|もの}に{行|い}こう。","バスを{降|お}りるとたん、{転|ころ}んでしまった。","バスを{降|お}りたとたん、{電話|でんわ}してください。"] },
      { type: "choose", q: "What can't follow ～たとたん?", answer: "Your own plan or a request", options: ["Your own plan or a request","A sudden event","A surprising change","An unexpected reaction"] }
    ]
  },

  // ───────── Unit 202: Family and relationships ─────────
  {
    id: "L202-1",
    lesson: 202,
    title: "～おかげで",
    meaning: "Thanks to (a good result)",
    explain: "Use ～おかげで to give the cause of a good result, with a feeling of thanks.",
    examples: [
      { jp: "{姉|あね}が{手伝|てつだ}ってくれたおかげで、{引|ひ}っ{越|こ}しが{早|はや}く{終|お}わった。", ro: "Ane ga tetsudatte kureta okage de, hikkoshi ga hayaku owatta.", en: "Thanks to my older sister's help, the move finished quickly." },
      { jp: "{先生|せんせい}のおかげで、{大学|だいがく}に{合格|ごうかく}できました。", ro: "Sensei no okage de, daigaku ni gōkaku dekimashita.", en: "Thanks to my teacher, I got into university." },
      { jp: "{妻|つま}が{料理|りょうり}が{上手|じょうず}なおかげで、{毎日|まいにち}{元気|げんき}でいられる。", ro: "Tsuma ga ryōri ga jōzu na okage de, mainichi genki de irareru.", en: "Thanks to my wife being a good cook, I can stay well every day." }
    ],
    drills: [
      { type: "fill", jp: "{友|とも}だちが{教|おし}えてくれた＿＿、テストに{合格|ごうかく}した。", answer: "おかげで", options: ["おかげで","せいで","くせに","たびに"], en: "Thanks to my friend teaching me, I passed the test." },
      { type: "fill", jp: "{両親|りょうしん}＿＿おかげで、{大学|だいがく}を{出|で}ることができた。", answer: "の", options: ["の","な","が","だ"], en: "Thanks to my parents, I was able to finish university." },
      { type: "order", tiles: ["{兄|あに}が","{助|たす}けてくれた","おかげで","{仕事|しごと}が{見|み}つかった"], en: "Thanks to my older brother's help, I found a job." },
      { type: "order", tiles: ["{家族|かぞく}が","{元気|げんき}な","おかげで","{毎日|まいにち}{楽|たの}しい"], en: "Thanks to my family being well, every day is fun." },
      { type: "choose", q: "Without sarcasm, what comes after 薬のおかげで？", answer: "{熱|ねつ}が{下|さ}がった。", options: ["{熱|ねつ}が{下|さ}がった。","{熱|ねつ}が{上|あ}がった。","もっと{痛|いた}くなった。","{気分|きぶん}が{悪|わる}くなった。"] },
      { type: "choose", q: "Which is correct with a noun?", answer: "{家族|かぞく}のおかげで", options: ["{家族|かぞく}のおかげで","{家族|かぞく}なおかげで","{家族|かぞく}だおかげで","{家族|かぞく}おかげで"] }
    ]
  },
  {
    id: "L202-2",
    lesson: 202,
    title: "～せいで",
    meaning: "Because of (blame for a bad result)",
    explain: "Use ～せいで to name who or what is to blame for a bad result.",
    examples: [
      { jp: "{弟|おとうと}のせいで、{母|はは}にしかられた。", ro: "Otōto no sei de, haha ni shikarareta.", en: "I got scolded by my mother because of my younger brother." },
      { jp: "{夜|よる}{遅|おそ}くまで{起|お}きていたせいで、{今朝|けさ}ねぼうした。", ro: "Yoru osoku made okite ita sei de, kesa nebō shita.", en: "I overslept this morning because I stayed up late." },
      { jp: "となりの{人|ひと}がうるさいせいで、{眠|ねむ}れない。", ro: "Tonari no hito ga urusai sei de, nemurenai.", en: "I can't sleep because my neighbours are noisy." }
    ],
    drills: [
      { type: "fill", jp: "{妹|いもうと}が{遅|おく}れた＿＿、{電車|でんしゃ}に{乗|の}れなかった。", answer: "せいで", options: ["せいで","おかげで","うちに","とたん"], en: "We couldn't catch the train because my younger sister was late." },
      { type: "fill", jp: "{人|ひと}の＿＿にしないでください。", answer: "せい", options: ["せい","おかげ","うち","とたん"], en: "Please don't blame other people." },
      { type: "order", tiles: ["{彼|かれ}の","せいで","{約束|やくそく}に{遅|おく}れた"], en: "I was late for the appointment because of him." },
      { type: "order", tiles: ["コーヒーを","{飲|の}みすぎた","せいで","{眠|ねむ}れなかった"], en: "I couldn't sleep because I drank too much coffee." },
      { type: "choose", q: "Which completes 寝不足のせいで…？", answer: "{仕事|しごと}でミスをしてしまった。", options: ["{仕事|しごと}でミスをしてしまった。","{頭|あたま}がすっきりした。","{気分|きぶん}がとてもよくなった。","{仕事|しごと}が{早|はや}く{終|お}わった。"] },
      { type: "choose", q: "Which means 'maybe because' when you aren't sure?", answer: "せいか", options: ["せいか","せいで","おかげで","せいにする"] }
    ]
  },
  {
    id: "L202-3",
    lesson: 202,
    title: "～くせに",
    meaning: "Even though (criticising someone)",
    explain: "Use ～くせに to criticise a person whose behaviour doesn't match what you would expect of them.",
    examples: [
      { jp: "{兄|あに}は{知|し}っているくせに、{教|おし}えてくれない。", ro: "Ani wa shitte iru kuse ni, oshiete kurenai.", en: "My brother knows, but he won't tell me." },
      { jp: "{彼|かれ}は{若|わか}いくせに、すぐ{疲|つか}れたと{言|い}う。", ro: "Kare wa wakai kuse ni, sugu tsukareta to iu.", en: "He's young, yet he's always quick to say he's tired." },
      { jp: "{親|おや}のくせに、{子|こ}どものたんじょう{日|び}を{忘|わす}れたの？", ro: "Oya no kuse ni, kodomo no tanjōbi o wasureta no?", en: "You're a parent, and you forgot your child's birthday?" }
    ],
    drills: [
      { type: "fill", jp: "お{金|かね}がある＿＿、いつもおごってくれない。", answer: "くせに", options: ["くせに","おかげで","うちに","ついでに"], en: "He's got money, yet he never treats me." },
      { type: "fill", jp: "{子|こ}ども＿＿くせに、{大人|おとな}みたいなことを{言|い}うね。", answer: "の", options: ["の","な","だ","に"], en: "You're just a kid, yet you talk like a grown-up." },
      { type: "order", tiles: ["{料理|りょうり}が","{下手|へた}な","くせに","{人|ひと}に{教|おし}えたがる"], en: "He's bad at cooking, yet he loves teaching others." },
      { type: "order", tiles: ["{何|なに}も","{知|し}らない","くせに","もんくを{言|い}わないで"], en: "You don't know anything, so don't complain." },
      { type: "choose", q: "Which sentence is correct?", answer: "{弟|おとうと}は{学生|がくせい}のくせに、{全然|ぜんぜん}{勉強|べんきょう}しない。", options: ["{弟|おとうと}は{学生|がくせい}のくせに、{全然|ぜんぜん}{勉強|べんきょう}しない。","{私|わたし}は{学生|がくせい}のくせに、{全然|ぜんぜん}{勉強|べんきょう}しない。","{夏|なつ}のくせに、{今日|きょう}は{寒|さむ}い。","{弟|おとうと}は{学生|がくせい}なくせに、{全然|ぜんぜん}{勉強|べんきょう}しない。"] },
      { type: "choose", q: "When is くせに safe to use?", answer: "Complaining to a close friend", options: ["Complaining to a close friend","Speaking to your boss","Writing a formal letter","Talking about yourself"] }
    ]
  },
  {
    id: "L202-4",
    lesson: 202,
    title: "～からこそ",
    meaning: "Precisely because",
    explain: "Use ～からこそ to stress that this reason, above all others, is the real one.",
    examples: [
      { jp: "{家族|かぞく}だからこそ、{言|い}いにくいこともある。", ro: "Kazoku da kara koso, iinikui koto mo aru.", en: "Precisely because we're family, some things are hard to say." },
      { jp: "{友|とも}だちを{信|しん}じているからこそ、{本当|ほんとう}のことを{話|はな}した。", ro: "Tomodachi o shinjite iru kara koso, hontō no koto o hanashita.", en: "It's exactly because I trust my friend that I told the truth." },
      { jp: "{愛|あい}しているからこそ、{別|わか}れることにした。", ro: "Aishite iru kara koso, wakareru koto ni shita.", en: "It's because I love you that I decided we should part." }
    ],
    drills: [
      { type: "fill", jp: "{親友|しんゆう}だ＿＿、{本当|ほんとう}のことを{言|い}うのだ。", answer: "からこそ", options: ["からこそ","くせに","たびに","うちに"], en: "It's exactly because we're best friends that I'm telling the truth." },
      { type: "fill", jp: "{好|す}き＿＿からこそ、{毎日|まいにち}{続|つづ}けられる。", answer: "だ", options: ["だ","な","の","に"], en: "It's precisely because I like it that I can keep it up every day." },
      { type: "order", tiles: ["あなたの","ことを","{思|おも}っている","からこそ","{言|い}うのです"], en: "I'm saying this precisely because I care about you." },
      { type: "order", tiles: ["{苦|くる}しい","{時|とき}だ","からこそ","{家族|かぞく}が{大切|たいせつ}だ"], en: "It's precisely in hard times that family matters." },
      { type: "choose", q: "What does こそ add here?", answer: "Strong stress on the reason", options: ["Strong stress on the reason","A request for help","A guess about the future","Blame for a bad result"] },
      { type: "choose", q: "Which means 'precisely because they're children'?", answer: "{子|こ}どもだからこそ", options: ["{子|こ}どもだからこそ","{子|こ}どもからこそ","{子|こ}どもなからこそ","{子|こ}どものからこそ"] }
    ]
  },

  // ───────── Unit 203: Food and cooking ─────────
  {
    id: "L203-1",
    lesson: 203,
    title: "～てからでないと",
    meaning: "Not until (X comes first)",
    explain: "Use V て + からでないと to say one thing must happen first, or the next thing is impossible.",
    examples: [
      { jp: "{手|て}を{洗|あら}ってからでないと、{料理|りょうり}を{始|はじ}めてはいけない。", ro: "Te o aratte kara de nai to, ryōri o hajimete wa ikenai.", en: "You mustn't start cooking until you've washed your hands." },
      { jp: "この{肉|にく}はよく{火|ひ}を{通|とお}してからでないと、{食|た}べられません。", ro: "Kono niku wa yoku hi o tōshite kara de nai to, taberaremasen.", en: "You can't eat this meat until it's cooked through." },
      { jp: "{味|あじ}を{見|み}てからでないと、しおをどのくらい{入|い}れるか{決|き}められない。", ro: "Aji o mite kara de nai to, shio o dono kurai ireru ka kimerarenai.", en: "I can't decide how much salt to add until I taste it." }
    ],
    drills: [
      { type: "fill", jp: "やさいを{洗|あら}っ＿＿からでないと、{切|き}ってはいけません。", answer: "て", options: ["て","た","たら","ている"], en: "Don't cut the vegetables until you've washed them." },
      { type: "fill", jp: "{店|みせ}の{人|ひと}に{聞|き}いてからでないと、{値段|ねだん}は＿＿。", answer: "わかりません", options: ["わかりません","わかります","わかりました","わかるでしょう"], en: "I won't know the price until I ask the shop staff." },
      { type: "order", tiles: ["ケーキを{冷|ひ}やして","から","でないと","{切|き}れません"], en: "You can't cut the cake until it's been chilled." },
      { type: "order", tiles: ["{予約|よやく}を","して","からでないと","{入|はい}れない"], en: "You can't get in without booking first." },
      { type: "choose", q: "Which completes 味を見てからでないと…？", answer: "{何|なに}を{足|た}すか{決|き}められない。", options: ["{何|なに}を{足|た}すか{決|き}められない。","{何|なに}を{足|た}すか{決|き}めた。","すぐ{決|き}めましょう。","{決|き}めることができる。"] },
      { type: "choose", q: "Which means 'You can't eat until everyone is seated'?", answer: "{全員|ぜんいん}が{座|すわ}ってからでないと、{食|た}べられません。", options: ["{全員|ぜんいん}が{座|すわ}ってからでないと、{食|た}べられません。","{全員|ぜんいん}が{座|すわ}るまでに、{食|た}べます。","{全員|ぜんいん}が{座|すわ}ったとたん、{食|た}べられません。","{全員|ぜんいん}が{座|すわ}っているうちに、{食|た}べます。"] }
    ]
  },
  {
    id: "L203-2",
    lesson: 203,
    title: "～みたいだ",
    meaning: "Seems, looks like, just like",
    explain: "Use ～みたいだ in casual speech for a guess from what you see, or to compare one thing to another.",
    examples: [
      { jp: "このスープ、{少|すこ}ししおが{足|た}りないみたいだ。", ro: "Kono sūpu, sukoshi shio ga tarinai mitai da.", en: "This soup seems to need a little more salt." },
      { jp: "モチはお{腹|なか}がすいているみたいだ。", ro: "Mochi wa onaka ga suite iru mitai da.", en: "Mochi seems to be hungry." },
      { jp: "このケーキは{雪|ゆき}みたいに{白|しろ}い。", ro: "Kono kēki wa yuki mitai ni shiroi.", en: "This cake is as white as snow." }
    ],
    drills: [
      { type: "fill", jp: "{外|そと}は{雪|ゆき}＿＿だ。{道|みち}が{白|しろ}い。", answer: "みたい", options: ["みたい","なみたい","のみたい","だみたい"], en: "It seems to be snowing outside. The road is white." },
      { type: "fill", jp: "このパンは{石|いし}＿＿かたい。", answer: "みたいに", options: ["みたいに","みたいな","みたいだ","みたいの"], en: "This bread is as hard as a rock." },
      { type: "order", tiles: ["たなかさんは","{料理|りょうり}が","{好|す}き","みたいだ"], en: "Tanaka seems to like cooking." },
      { type: "order", tiles: ["この{店|みせ}のカレーは","{家|いえ}で{作|つく}った","みたいな","{味|あじ}がする"], en: "This restaurant's curry tastes like it was made at home." },
      { type: "choose", q: "Which is correct?", answer: "{彼|かれ}は{元気|げんき}みたいだ。", options: ["{彼|かれ}は{元気|げんき}みたいだ。","{彼|かれ}は{元気|げんき}なみたいだ。","{彼|かれ}は{元気|げんき}のみたいだ。","{彼|かれ}は{元気|げんき}だみたいだ。"] },
      { type: "choose", q: "Which form goes right before a noun?", answer: "みたいな", options: ["みたいな","みたいに","みたいだ","みたいで"] }
    ]
  },
  {
    id: "L203-3",
    lesson: 203,
    title: "～わりに",
    meaning: "Considering, for (better or worse than expected)",
    explain: "Use ～わりに when the result is better or worse than you would expect from the first fact.",
    examples: [
      { jp: "この{店|みせ}は{値段|ねだん}のわりに、{料理|りょうり}がおいしい。", ro: "Kono mise wa nedan no wari ni, ryōri ga oishii.", en: "For the price, the food here is delicious." },
      { jp: "{兄|あに}はたくさん{食|た}べるわりに、{全然|ぜんぜん}{太|ふと}らない。", ro: "Ani wa takusan taberu wari ni, zenzen futoranai.", en: "My brother eats a lot, yet he doesn't gain any weight." },
      { jp: "{時間|じかん}がかかったわりに、あまりおいしくなかった。", ro: "Jikan ga kakatta wari ni, amari oishiku nakatta.", en: "It took a long time, but it wasn't very tasty." }
    ],
    drills: [
      { type: "fill", jp: "このレストランは{高|たか}い＿＿、{味|あじ}はふつうだ。", answer: "わりに", options: ["わりに","おかげで","ついでに","とたんに"], en: "This restaurant is expensive, yet the taste is just average." },
      { type: "fill", jp: "{年|とし}＿＿わりに、よく{食|た}べますね。", answer: "の", options: ["の","な","に","が"], en: "You eat well for your age." },
      { type: "order", tiles: ["{安|やす}い","わりに","おいしい","{魚|さかな}だ"], en: "It's a tasty fish for the price." },
      { type: "order", tiles: ["{時間|じかん}が","かかった","わりに","おいしくなかった"], en: "It took a long time, but it wasn't tasty." },
      { type: "choose", q: "Which is correct?", answer: "{彼|かれ}は{若|わか}いわりに、{料理|りょうり}がうまい。", options: ["{彼|かれ}は{若|わか}いわりに、{料理|りょうり}がうまい。","{彼|かれ}は{若|わか}いのわりに、{料理|りょうり}がうまい。","{彼|かれ}は{若|わか}くわりに、{料理|りょうり}がうまい。","{彼|かれ}は{若|わか}いなわりに、{料理|りょうり}がうまい。"] },
      { type: "choose", q: "What does ～わりに show?", answer: "The result differs from what you'd expect", options: ["The result differs from what you'd expect","The result is exactly as expected","Two actions happen at once","The speaker gives an order"] }
    ]
  },
  {
    id: "L203-4",
    lesson: 203,
    title: "～ば～ほど",
    meaning: "The more ..., the more ...",
    explain: "Use the ば-form and then the dictionary form + ほど to say that as one thing increases, so does another.",
    examples: [
      { jp: "このカレーは{食|た}べれば{食|た}べるほどからくなる。", ro: "Kono karē wa tabereba taberu hodo karaku naru.", en: "The more you eat this curry, the spicier it gets." },
      { jp: "やさいは{新|あたら}しければ{新|あたら}しいほどおいしい。", ro: "Yasai wa atarashikereba atarashii hodo oishii.", en: "The fresher the vegetables, the tastier they are." },
      { jp: "{作|つく}り{方|かた}はかんたんならかんたんなほどいい。", ro: "Tsukurikata wa kantan nara kantan na hodo ii.", en: "The simpler the method, the better." }
    ],
    drills: [
      { type: "fill", jp: "{考|かんが}えれば＿＿ほど、わからなくなる。", answer: "{考|かんが}える", options: ["{考|かんが}える","{考|かんが}えた","{考|かんが}えて","{考|かんが}えない"], en: "The more I think, the less I understand." },
      { type: "fill", jp: "{魚|さかな}は{新|あたら}し＿＿{新|あたら}しいほどおいしい。", answer: "ければ", options: ["ければ","いば","くて","かった"], en: "The fresher the fish, the tastier it is." },
      { type: "order", tiles: ["{話|はな}せば","{話|はな}す","ほど","{上手|じょうず}になる"], en: "The more you speak, the better you get." },
      { type: "order", tiles: ["{部屋|へや}は","{広|ひろ}ければ","{広|ひろ}い","ほど","いい"], en: "The bigger the room, the better." },
      { type: "choose", q: "Which is correct?", answer: "{便利|べんり}なら{便利|べんり}なほどいい。", options: ["{便利|べんり}なら{便利|べんり}なほどいい。","{便利|べんり}ば{便利|べんり}ほどいい。","{便利|べんり}なれば{便利|べんり}なほどいい。","{便利|べんり}なら{便利|べんり}だほどいい。"] },
      { type: "choose", q: "Which means 'The more I eat, the hungrier I get'?", answer: "{食|た}べれば{食|た}べるほどお{腹|なか}がすく。", options: ["{食|た}べれば{食|た}べるほどお{腹|なか}がすく。","{食|た}べるならお{腹|なか}がすく。","{食|た}べたとたんお{腹|なか}がいっぱいになった。","{食|た}べているうちにお{腹|なか}がいっぱいになった。"] }
    ]
  },

  // ───────── Unit 204: Daily life and home ─────────
  {
    id: "L204-1",
    lesson: 204,
    title: "～ようになる",
    meaning: "Come to, start to (a change over time)",
    explain: "Use ～ようになる to show a gradual change in ability or habit, not a sudden one.",
    examples: [
      { jp: "{引|ひ}っ{越|こ}してから、{毎朝|まいあさ}{早|はや}く{起|お}きるようになった。", ro: "Hikkoshite kara, maiasa hayaku okiru yō ni natta.", en: "Since moving, I've started getting up early every morning." },
      { jp: "{日本|にほん}に{来|き}て、{漢字|かんじ}が{読|よ}めるようになった。", ro: "Nihon ni kite, kanji ga yomeru yō ni natta.", en: "After coming to Japan, I became able to read kanji." },
      { jp: "{子|こ}どもが{生|う}まれてから、{夜|よる}あまり{出|で}かけなくなった。", ro: "Kodomo ga umarete kara, yoru amari dekakenaku natta.", en: "Since our child was born, I've stopped going out much at night." }
    ],
    drills: [
      { type: "fill", jp: "れんしゅうして、{泳|およ}げる＿＿なった。", answer: "ように", options: ["ように","ことに","そうに","ために"], en: "After practising, I became able to swim." },
      { type: "fill", jp: "スマホを{使|つか}いはじめてから、{本|ほん}を{読|よ}ま＿＿なった。", answer: "なく", options: ["なく","ない","なくて","ないで"], en: "Since I started using a smartphone, I've stopped reading books." },
      { type: "order", tiles: ["{朝|あさ}ごはんを","{食|た}べる","ように","なった"], en: "I've started eating breakfast." },
      { type: "order", tiles: ["{一人|ひとり}で{料理|りょうり}が","できる","ように","なった"], en: "I've become able to cook by myself." },
      { type: "choose", q: "Which shows a new ability?", answer: "{漢字|かんじ}が{書|か}けるようになった。", options: ["{漢字|かんじ}が{書|か}けるようになった。","{漢字|かんじ}を{書|か}くことにした。","{漢字|かんじ}を{書|か}いておいた。","{漢字|かんじ}を{書|か}いてしまった。"] },
      { type: "choose", q: "Which is natural for 'I stopped watching TV'?", answer: "テレビを{見|み}なくなった。", options: ["テレビを{見|み}なくなった。","テレビを{見|み}なくになった。","テレビを{見|み}なくようになった。","テレビを{見|み}るなくなった。"] }
    ]
  },
  {
    id: "L204-2",
    lesson: 204,
    title: "～がち",
    meaning: "Tend to (usually something bad)",
    explain: "Use ～がち to say something tends to happen, usually something undesirable.",
    examples: [
      { jp: "{寒|さむ}い{日|ひ}は、{家|いえ}にこもりがちになる。", ro: "Samui hi wa, ie ni komorigachi ni naru.", en: "On cold days I tend to stay shut in at home." },
      { jp: "{忙|いそが}しいと、{朝|あさ}ごはんを{抜|ぬ}きがちだ。", ro: "Isogashii to, asagohan o nukigachi da.", en: "When I'm busy, I tend to skip breakfast." },
      { jp: "{父|ちち}は{仕事|しごと}で{留守|るす}がちです。", ro: "Chichi wa shigoto de rusugachi desu.", en: "My father is often away from home for work." }
    ],
    drills: [
      { type: "fill", jp: "{最近|さいきん}、{運動|うんどう}{不足|ぶそく}に＿＿だ。", answer: "なりがち", options: ["なりがち","なるがち","なったがち","なくがち"], en: "Lately I tend to fall short on exercise." },
      { type: "fill", jp: "{子|こ}どものころ、{私|わたし}は{病気|びょうき}＿＿だった。", answer: "がち", options: ["がち","たび","うち","せい"], en: "As a child, I was often ill." },
      { type: "order", tiles: ["{雨|あめ}の{日|ひ}は","{気分|きぶん}が","{暗|くら}くなり","がちだ"], en: "On rainy days my mood tends to darken." },
      { type: "order", tiles: ["{忙|いそが}しいと","{食事|しょくじ}を","{抜|ぬ}き","がちだ"], en: "When I'm busy, I tend to skip meals." },
      { type: "choose", q: "Which is correct?", answer: "{大切|たいせつ}なことを{忘|わす}れがちだ。", options: ["{大切|たいせつ}なことを{忘|わす}れがちだ。","{大切|たいせつ}なことを{忘|わす}れるがちだ。","{大切|たいせつ}なことを{忘|わす}れたがちだ。","{大切|たいせつ}なことを{忘|わす}れてがちだ。"] },
      { type: "choose", q: "What does がち usually describe?", answer: "Something undesirable that often happens", options: ["Something undesirable that often happens","A one-time event","A rule you must follow","A wonderful result"] }
    ]
  },
  {
    id: "L204-3",
    lesson: 204,
    title: "～ついでに",
    meaning: "While you're at it, on the way",
    explain: "Use ～ついでに when you take advantage of doing one thing to do a second, smaller thing.",
    examples: [
      { jp: "コンビニへ{行|い}くついでに、ごみを{出|だ}してきて。", ro: "Konbini e iku tsuide ni, gomi o dashite kite.", en: "While you're going to the convenience store, take the rubbish out." },
      { jp: "{買|か}い{物|もの}のついでに、{本屋|ほんや}に{寄|よ}った。", ro: "Kaimono no tsuide ni, hon'ya ni yotta.", en: "While out shopping, I stopped by a bookshop." },
      { jp: "そうじをしたついでに、{窓|まど}もふいた。", ro: "Sōji o shita tsuide ni, mado mo fuita.", en: "While I was cleaning, I wiped the windows too." }
    ],
    drills: [
      { type: "fill", jp: "{駅|えき}へ{行|い}く＿＿、{手紙|てがみ}を{出|だ}してきます。", answer: "ついでに", options: ["ついでに","くせに","せいで","とたんに"], en: "While I'm going to the station, I'll post a letter." },
      { type: "fill", jp: "{散歩|さんぽ}＿＿ついでに、パンを{買|か}ってきた。", answer: "の", options: ["の","な","に","を"], en: "While out for a walk, I picked up some bread." },
      { type: "order", tiles: ["しゅっちょうの","ついでに","{友|とも}だちに{会|あ}ってきた"], en: "While on a business trip, I saw a friend." },
      { type: "order", tiles: ["{洗|あら}いものを","した","ついでに","{台所|だいどころ}もふいた"], en: "While doing the dishes, I wiped the kitchen too." },
      { type: "choose", q: "Which sentence is correct?", answer: "{銀行|ぎんこう}へ{行|い}ったついでに、{本屋|ほんや}に{寄|よ}った。", options: ["{銀行|ぎんこう}へ{行|い}ったついでに、{本屋|ほんや}に{寄|よ}った。","{音楽|おんがく}を{聞|き}くついでに、{勉強|べんきょう}する。","{銀行|ぎんこう}へ{行|い}くのついでに、{本屋|ほんや}に{寄|よ}った。","{本屋|ほんや}が{休|やす}みのついでに、{銀行|ぎんこう}へ{行|い}った。"] },
      { type: "choose", q: "What comes after ついでに?", answer: "A small extra job done on the way", options: ["A small extra job done on the way","The main purpose of the trip","Something that happens by accident","A thing you refuse to do"] }
    ]
  },
  {
    id: "L204-4",
    lesson: 204,
    title: "～まま",
    meaning: "Leaving things as they are",
    explain: "Use ～まま to say a state stays unchanged while something else happens, often when that's unusual.",
    examples: [
      { jp: "{電気|でんき}をつけたまま{寝|ね}てしまった。", ro: "Denki o tsuketa mama nete shimatta.", en: "I fell asleep with the light on." },
      { jp: "{靴|くつ}をはいたまま、{部屋|へや}に{入|はい}らないでください。", ro: "Kutsu o haita mama, heya ni hairanaide kudasai.", en: "Please don't come into the room with your shoes on." },
      { jp: "このやさいは{生|なま}のまま{食|た}べられます。", ro: "Kono yasai wa nama no mama taberaremasu.", en: "You can eat this vegetable raw." }
    ],
    drills: [
      { type: "fill", jp: "{窓|まど}を{開|あ}け＿＿まま、{出|で}かけてしまった。", answer: "た", options: ["た","る","て","ます"], en: "I went out leaving the window open." },
      { type: "fill", jp: "＿＿ままでいいです。", answer: "その", options: ["その","それ","そこ","そう"], en: "It's fine as it is." },
      { type: "order", tiles: ["{靴|くつ}を","はいた","まま","{入|はい}ってもいいです"], en: "You may come in with your shoes on." },
      { type: "order", tiles: ["{友|とも}だちに","{会|あ}わない","まま","{国|くに}へ{帰|かえ}った"], en: "I went back to my country without seeing my friend." },
      { type: "choose", q: "Which is correct?", answer: "めがねをかけたまま{寝|ね}てしまった。", options: ["めがねをかけたまま{寝|ね}てしまった。","めがねをかけるまま{寝|ね}てしまった。","めがねをかけてまま{寝|ね}てしまった。","めがねをかけまま{寝|ね}てしまった。"] },
      { type: "choose", q: "Which means 'I ate it raw'?", answer: "{生|なま}のまま{食|た}べた。", options: ["{生|なま}のまま{食|た}べた。","{生|なま}なまま{食|た}べた。","{生|なま}まま{食|た}べた。","{生|なま}だまま{食|た}べた。"] }
    ]
  },

  // ───────── Unit 205: Transport and travel ─────────
  {
    id: "L205-1",
    lesson: 205,
    title: "V る + ところだった",
    meaning: "Almost did (but didn't)",
    explain: "Use V dictionary form + ところだった to say something nearly happened but in the end did not.",
    examples: [
      { jp: "もう{少|すこ}しで{電車|でんしゃ}に{乗|の}り{遅|おく}れるところだった。", ro: "Mō sukoshi de densha ni noriokureru tokoro datta.", en: "I almost missed the train." },
      { jp: "{地図|ちず}を{見|み}なかったら、{反対|はんたい}の{道|みち}へ{行|い}くところだった。", ro: "Chizu o minakattara, hantai no michi e iku tokoro datta.", en: "If I hadn't checked the map, I'd have gone the opposite way." },
      { jp: "{危|あぶ}なかった。{車|くるま}にひかれるところだった。", ro: "Abunakatta. Kuruma ni hikareru tokoro datta.", en: "That was close. I nearly got hit by a car." }
    ],
    drills: [
      { type: "fill", jp: "{急|いそ}いでよかった。もう{少|すこ}しでバスに{遅|おく}れる＿＿。", answer: "ところだった", options: ["ところだった","ところだ","ためだった","ものだった"], en: "Glad I hurried. I nearly missed the bus." },
      { type: "fill", jp: "パスポートを{忘|わす}れ＿＿ところだった。", answer: "る", options: ["る","た","て","ない"], en: "I nearly forgot my passport." },
      { type: "order", tiles: ["もう{少|すこ}しで","{駅|えき}を","{乗|の}り{過|す}ごす","ところだった"], en: "I almost rode past my station." },
      { type: "order", tiles: ["{教|おし}えてもらわなかったら","{違|ちが}う{電車|でんしゃ}に","{乗|の}る","ところだった"], en: "If you hadn't told me, I'd have got on the wrong train." },
      { type: "choose", q: "What really happened in もう少しでじこになるところだった？", answer: "There was no accident", options: ["There was no accident","There was a small accident","There will be an accident soon","An accident has just happened"] },
      { type: "choose", q: "Which means 'I nearly fell'?", answer: "{転|ころ}ぶところだった。", options: ["{転|ころ}ぶところだった。","{転|ころ}んだところだ。","{転|ころ}ぶところだ。","{転|ころ}んでいるところだ。"] }
    ]
  },
  {
    id: "L205-2",
    lesson: 205,
    title: "～ため(に) (reason)",
    meaning: "Because of, due to (formal)",
    explain: "Use ～ため(に) in formal speech and announcements to give the reason for a result.",
    examples: [
      { jp: "{大雪|おおゆき}のため、{電車|でんしゃ}が{止|と}まっています。", ro: "Ōyuki no tame, densha ga tomatte imasu.", en: "Trains are stopped because of heavy snow." },
      { jp: "じこがあったために、{到着|とうちゃく}が{一時間|いちじかん}{遅|おく}れた。", ro: "Jiko ga atta tame ni, tōchaku ga ichijikan okureta.", en: "Because there was an accident, the arrival was an hour late." },
      { jp: "{空港|くうこう}が{遠|とお}いため、{朝|あさ}{早|はや}く{出|で}なければならない。", ro: "Kūkō ga tōi tame, asa hayaku denakereba naranai.", en: "Since the airport is far, we have to leave early in the morning." }
    ],
    drills: [
      { type: "fill", jp: "{台風|たいふう}の＿＿、{飛行機|ひこうき}が{飛|と}びません。", answer: "ため", options: ["ため","うち","とたん","ついで"], en: "Planes aren't flying because of the typhoon." },
      { type: "fill", jp: "じこが{起|お}き＿＿ために、{電車|でんしゃ}が{遅|おく}れています。", answer: "た", options: ["た","て","ない","る"], en: "Trains are delayed because an accident occurred." },
      { type: "order", tiles: ["{強|つよ}い","{風|かぜ}の","ため","{船|ふね}が{出|で}ません"], en: "The boat isn't sailing because of strong wind." },
      { type: "order", tiles: ["{体|からだ}の","{調子|ちょうし}が{悪|わる}い","ため","{旅行|りょこう}をやめた"], en: "I cancelled the trip because I was unwell." },
      { type: "choose", q: "Which is correct?", answer: "{大雨|おおあめ}のため、バスは{運休|うんきゅう}です。", options: ["{大雨|おおあめ}のため、バスは{運休|うんきゅう}です。","{大雨|おおあめ}のため、タクシーで{行|い}こうよ。","{大雨|おおあめ}なため、バスは{運休|うんきゅう}です。","{大雨|おおあめ}だため、バスは{運休|うんきゅう}です。"] },
      { type: "choose", q: "In which sentence does ため show a reason?", answer: "{雪|ゆき}のため、{遅|おく}れた。", options: ["{雪|ゆき}のため、{遅|おく}れた。","{留学|りゅうがく}するため、{働|はたら}く。","{旅行|りょこう}するため、お{金|かね}をためる。","{子|こ}どものため、{家|いえ}を{買|か}う。"] }
    ]
  },
  {
    id: "L205-3",
    lesson: 205,
    title: "～たびに",
    meaning: "Every time",
    explain: "Use ～たびに to say that each time one thing happens, the same result follows.",
    examples: [
      { jp: "この{駅|えき}を{通|とお}るたびに、{学生|がくせい}のころを{思|おも}い{出|だ}す。", ro: "Kono eki o tōru tabi ni, gakusei no koro o omoidasu.", en: "Every time I pass through this station, I remember my student days." },
      { jp: "{旅行|りょこう}のたびに、{地元|じもと}の{料理|りょうり}を{食|た}べる。", ro: "Ryokō no tabi ni, jimoto no ryōri o taberu.", en: "Every time I travel, I eat the local food." },
      { jp: "モチは{電車|でんしゃ}が{来|く}るたびに、{元気|げんき}よく{鳴|な}く。", ro: "Mochi wa densha ga kuru tabi ni, genki yoku naku.", en: "Every time a train comes, Mochi gives a lively meow." }
    ],
    drills: [
      { type: "fill", jp: "{飛行機|ひこうき}に{乗|の}る＿＿、{耳|みみ}が{痛|いた}くなる。", answer: "たびに", options: ["たびに","くせに","ついでに","とたんに"], en: "Every time I fly, my ears hurt." },
      { type: "fill", jp: "{旅行|りょこう}＿＿たびに、お{土産|みやげ}を{買|か}う。", answer: "の", options: ["の","な","に","が"], en: "Every time I travel, I buy souvenirs." },
      { type: "order", tiles: ["この{道|みち}を","{通|とお}る","たびに","{昔|むかし}を{思|おも}い{出|だ}す"], en: "Every time I take this road, I remember the old days." },
      { type: "order", tiles: ["{会|あ}う","たびに","{背|せ}が{高|たか}くなっているね"], en: "You get taller every time we meet." },
      { type: "choose", q: "Which is correct?", answer: "{試験|しけん}のたびに、お{腹|なか}が{痛|いた}くなる。", options: ["{試験|しけん}のたびに、お{腹|なか}が{痛|いた}くなる。","{試験|しけん}たびに、お{腹|なか}が{痛|いた}くなる。","{試験|しけん}なたびに、お{腹|なか}が{痛|いた}くなる。","{試験|しけん}がたびに、お{腹|なか}が{痛|いた}くなる。"] },
      { type: "choose", q: "What does ～たびに mean?", answer: "Every time", options: ["Every time","Only once","The moment","While it lasts"] }
    ]
  },
  {
    id: "L205-4",
    lesson: 205,
    title: "～によって (cause, means, difference)",
    meaning: "Because of, by means of, depending on",
    explain: "Use ～によって to mark the cause or means of something, or what something varies with.",
    examples: [
      { jp: "{台風|たいふう}によって、{多|おお}くの{電車|でんしゃ}が{止|と}まった。", ro: "Taifū ni yotte, ōku no densha ga tomatta.", en: "Many trains stopped because of the typhoon." },
      { jp: "{国|くに}によって、{電車|でんしゃ}の{乗|の}り{方|かた}が{違|ちが}う。", ro: "Kuni ni yotte, densha no norikata ga chigau.", en: "How you ride trains differs from country to country." },
      { jp: "{新|あたら}しいちかてつによって、{空港|くうこう}まで{早|はや}く{行|い}けるようになった。", ro: "Atarashii chikatetsu ni yotte, kūkō made hayaku ikeru yō ni natta.", en: "The new subway has made it possible to reach the airport quickly." }
    ],
    drills: [
      { type: "fill", jp: "{町|まち}＿＿、バスの{料金|りょうきん}が{違|ちが}う。", answer: "によって", options: ["によって","のついでに","のたびに","のくせに"], en: "Bus fares differ from town to town." },
      { type: "fill", jp: "{大雪|おおゆき}＿＿じこが{増|ふ}えた。", answer: "による", options: ["による","になる","にする","にいる"], en: "Accidents caused by heavy snow increased." },
      { type: "order", tiles: ["{会社|かいしゃ}","によって","{電車|でんしゃ}の{色|いろ}が{違|ちが}う"], en: "Train colours differ from company to company." },
      { type: "order", tiles: ["{今回|こんかい}の","{台風|たいふう}","によって","{多|おお}くの{家|いえ}が{倒|たお}れた"], en: "Many houses collapsed because of this typhoon." },
      { type: "choose", q: "Which has the 'depending on' meaning?", answer: "{人|ひと}によって{好|この}みが{違|ちが}う。", options: ["{人|ひと}によって{好|この}みが{違|ちが}う。","じしんによって{家|いえ}が{倒|たお}れた。","この{本|ほん}は{田中|たなか}さんによって{書|か}かれた。","{話|はな}し{合|あ}いによって{決|き}めた。"] },
      { type: "choose", q: "Which is natural for 'I go to school by bus'?", answer: "バスで{学校|がっこう}へ{行|い}く。", options: ["バスで{学校|がっこう}へ{行|い}く。","バスによって{学校|がっこう}へ{行|い}く。","バスのために{学校|がっこう}へ{行|い}く。","バスのせいで{学校|がっこう}へ{行|い}く。"] }
    ]
  },

  // ───────── Unit 206: Town and directions ─────────
  {
    id: "L206-1",
    lesson: 206,
    title: "～ていく / ～てくる (change)",
    meaning: "Change continuing from now / change up to now",
    explain: "Use ～てくる for a change that has come up to now, and ～ていく for a change that will go on from now.",
    examples: [
      { jp: "この{町|まち}は{最近|さいきん}、{人|ひと}が{増|ふ}えてきた。", ro: "Kono machi wa saikin, hito ga fuete kita.", en: "The number of people in this town has been growing lately." },
      { jp: "これからも{古|ふる}い{店|みせ}はへっていくだろう。", ro: "Kore kara mo furui mise wa hette iku darō.", en: "Old shops will probably keep decreasing from now on." },
      { jp: "{駅前|えきまえ}がだんだんにぎやかになってきた。", ro: "Ekimae ga dandan nigiyaka ni natte kita.", en: "The area in front of the station has gradually got livelier." }
    ],
    drills: [
      { type: "fill", jp: "{最近|さいきん}、このあたりも{便利|べんり}になって＿＿。", answer: "きた", options: ["きた","いこう","おいた","あげた"], en: "This area has been getting more convenient lately." },
      { type: "fill", jp: "これからも{町|まち}はどんどん{変|か}わって＿＿でしょう。", answer: "いく", options: ["いく","おく","みる","ある"], en: "The town will probably keep changing from now on." },
      { type: "order", tiles: ["{空|そら}が","だんだん","{暗|くら}くなって","きた"], en: "The sky has gradually got darker." },
      { type: "order", tiles: ["{駅|えき}のまわりの","{店|みせ}が","{増|ふ}えて","きた"], en: "The shops around the station have been increasing." },
      { type: "choose", q: "Which shows change continuing into the future?", answer: "これから{人|ひと}が{少|すく}なくなっていく。", options: ["これから{人|ひと}が{少|すく}なくなっていく。","{人|ひと}が{少|すく}なくなってきた。","{人|ひと}が{少|すく}なくなった。","{人|ひと}が{少|すく}なかった。"] },
      { type: "choose", q: "Which means 'It has started to rain'?", answer: "{雨|あめ}が{降|ふ}ってきた。", options: ["{雨|あめ}が{降|ふ}ってきた。","{雨|あめ}が{降|ふ}っていった。","{雨|あめ}が{降|ふ}ってあった。","{雨|あめ}が{降|ふ}っておいた。"] }
    ]
  },
  {
    id: "L206-2",
    lesson: 206,
    title: "～らしい (I hear, it seems)",
    meaning: "Apparently, from what I've heard",
    explain: "Use ～らしい to pass on what you heard or read, without taking responsibility for it.",
    examples: [
      { jp: "{駅前|えきまえ}に{新|あたら}しいビルができるらしい。", ro: "Ekimae ni atarashii biru ga dekiru rashii.", en: "Apparently a new building is going up in front of the station." },
      { jp: "あの{店|みせ}は{先月|せんげつ}{閉店|へいてん}したらしいよ。", ro: "Ano mise wa sengetsu heiten shita rashii yo.", en: "I heard that shop closed last month." },
      { jp: "この{町|まち}は{夜|よる}{静|しず}からしい。", ro: "Kono machi wa yoru shizuka rashii.", en: "This town is apparently quiet at night." }
    ],
    drills: [
      { type: "fill", jp: "{来月|らいげつ}、この{道|みち}で{工事|こうじ}が{始|はじ}まる＿＿よ。", answer: "らしい", options: ["らしい","べき","たび","うち"], en: "Apparently road work starts here next month." },
      { type: "fill", jp: "あの{人|ひと}は＿＿らしい。", answer: "{先生|せんせい}", options: ["{先生|せんせい}","{先生|せんせい}だ","{先生|せんせい}の","{先生|せんせい}な"], en: "That person is apparently a teacher." },
      { type: "order", tiles: ["{新|あたら}しい","{図書館|としょかん}が","できる","らしい"], en: "Apparently a new library is being built." },
      { type: "order", tiles: ["あの","{店|みせ}は","とても","{有名|ゆうめい}","らしい"], en: "That shop is apparently very famous." },
      { type: "choose", q: "Which is correct?", answer: "{田中|たなか}さんは{元気|げんき}らしい。", options: ["{田中|たなか}さんは{元気|げんき}らしい。","{田中|たなか}さんは{元気|げんき}だらしい。","{田中|たなか}さんは{元気|げんき}ならしい。","{田中|たなか}さんは{元気|げんき}のらしい。"] },
      { type: "choose", q: "When should you NOT use this らしい?", answer: "For your own plans", options: ["For your own plans","For a rumour you heard","For news you read","For what a friend told you"] }
    ]
  },
  {
    id: "L206-3",
    lesson: 206,
    title: "～にしたがって",
    meaning: "Following, as ... so ...",
    explain: "Use ～にしたがって to say you follow something, or that one change goes along with another.",
    examples: [
      { jp: "あんないにしたがって、{進|すす}んでください。", ro: "Annai ni shitagatte, susunde kudasai.", en: "Please go ahead, following the signs." },
      { jp: "{駅|えき}に{近|ちか}づくにしたがって、{人|ひと}が{多|おお}くなった。", ro: "Eki ni chikazuku ni shitagatte, hito ga ōku natta.", en: "The closer we got to the station, the more people there were." },
      { jp: "{町|まち}の{人口|じんこう}が{増|ふ}えるにしたがって、{店|みせ}も{増|ふ}えた。", ro: "Machi no jinkō ga fueru ni shitagatte, mise mo fueta.", en: "As the town's population grew, so did the number of shops." }
    ],
    drills: [
      { type: "fill", jp: "{係|かかり}の{人|ひと}の{指示|しじ}＿＿、{行動|こうどう}してください。", answer: "にしたがって", options: ["にしたがって","のくせに","のついでに","のとたんに"], en: "Please act according to the staff's instructions." },
      { type: "fill", jp: "{説明|せつめい}＿＿したがって、{組|く}み{立|た}てた。", answer: "に", options: ["に","を","が","で"], en: "I assembled it following the instructions." },
      { type: "order", tiles: ["{地図|ちず}に","したがって","{歩|ある}いて","ください"], en: "Please walk following the map." },
      { type: "order", tiles: ["{町|まち}が","{大|おお}きくなる","にしたがって","{車|くるま}も{増|ふ}えた"], en: "As the town grew, so did the number of cars." },
      { type: "choose", q: "Which has the 'as ... so ...' meaning?", answer: "{年|とし}をとるにしたがって、{朝|あさ}{早|はや}く{起|お}きるようになった。", options: ["{年|とし}をとるにしたがって、{朝|あさ}{早|はや}く{起|お}きるようになった。","ルールにしたがって{走|はし}った。","{先生|せんせい}の{話|はなし}にしたがって{決|き}めた。","{地図|ちず}にしたがって{行|い}った。"] },
      { type: "choose", q: "Which particle goes before したがって?", answer: "に", options: ["に","を","が","で"] }
    ]
  },
  {
    id: "L206-4",
    lesson: 206,
    title: "～とともに",
    meaning: "Together with, as, at the same time",
    explain: "Use ～とともに in formal style for together with, or to say one change happens along with another.",
    examples: [
      { jp: "{町|まち}のはってんとともに、{駅|えき}も{大|おお}きくなった。", ro: "Machi no hatten to tomo ni, eki mo ōkiku natta.", en: "Along with the town's development, the station got bigger too." },
      { jp: "{時代|じだい}が{変|か}わるとともに、{町|まち}の{景色|けしき}も{変|か}わった。", ro: "Jidai ga kawaru to tomo ni, machi no keshiki mo kawatta.", en: "As the times changed, so did the town's scenery." },
      { jp: "{市長|しちょう}は{家族|かぞく}とともに、{新|あたら}しい{公園|こうえん}を{訪|おとず}れた。", ro: "Shichō wa kazoku to tomo ni, atarashii kōen o otozureta.", en: "The mayor visited the new park together with his family." }
    ],
    drills: [
      { type: "fill", jp: "ベルの{音|おと}＿＿、ドアが{閉|し}まった。", answer: "とともに", options: ["とともに","のくせに","のせいで","のわりに"], en: "The doors closed as the bell rang." },
      { type: "fill", jp: "{人口|じんこう}が＿＿とともに、{新|あたら}しい{駅|えき}ができた。", answer: "{増|ふ}える", options: ["{増|ふ}える","{増|ふ}えて","{増|ふ}えた","{増|ふ}えない"], en: "As the population grew, a new station was built." },
      { type: "order", tiles: ["{市長|しちょう}は","{市民|しみん}","とともに","{町|まち}をそうじした"], en: "The mayor cleaned up the town together with the citizens." },
      { type: "order", tiles: ["{時間|じかん}が","たつ","とともに","{町|まち}は{変|か}わった"], en: "The town changed as time passed." },
      { type: "choose", q: "What does とともに add compared with 一緒に?", answer: "A more formal tone", options: ["A more formal tone","A negative meaning","A question","A past tense"] },
      { type: "choose", q: "Which means 'As the bell rang, the door opened'?", answer: "ベルが{鳴|な}るとともに、ドアが{開|あ}いた。", options: ["ベルが{鳴|な}るとともに、ドアが{開|あ}いた。","ベルが{鳴|な}ったら、ドアを{開|あ}けよう。","ベルが{鳴|な}るたびに、ドアが{開|あ}く。","ベルが{鳴|な}らないうちに、ドアを{開|あ}けた。"] }
    ]
  },

  // ───────── Unit 207: Money and shopping ─────────
  {
    id: "L207-1",
    lesson: 207,
    title: "～反面",
    meaning: "But on the other hand (two sides of one thing)",
    explain: "Use ～反面 to show that one thing has two opposite sides at the same time.",
    examples: [
      { jp: "この{服|ふく}は{安|やす}い{反面|はんめん}、すぐに{破|やぶ}れる。", ro: "Kono fuku wa yasui hanmen, sugu ni yabureru.", en: "These clothes are cheap, but they tear easily." },
      { jp: "ネットの{買|か}い{物|もの}は{便利|べんり}な{反面|はんめん}、{失敗|しっぱい}も{多|おお}い。", ro: "Netto no kaimono wa benri na hanmen, shippai mo ōi.", en: "Online shopping is convenient, but it also leads to many mistakes." },
      { jp: "{給料|きゅうりょう}が{上|あ}がった{反面|はんめん}、ぜいきんも{高|たか}くなった。", ro: "Kyūryō ga agatta hanmen, zeikin mo takaku natta.", en: "My pay went up, but on the other hand so did my taxes." }
    ],
    drills: [
      { type: "fill", jp: "クレジットカードは{便利|べんり}＿＿{反面|はんめん}、{使|つか}いすぎることがある。", answer: "な", options: ["な","の","だ","に"], en: "Credit cards are convenient, but you can overspend." },
      { type: "fill", jp: "この{店|みせ}は{品物|しなもの}がいい＿＿、{値段|ねだん}が{高|たか}い。", answer: "{反面|はんめん}", options: ["{反面|はんめん}","おかげで","ついでに","たびに"], en: "This shop's goods are good, but on the other hand they're pricey." },
      { type: "order", tiles: ["セールは","{安|やす}い","{反面|はんめん}","{人|ひと}が{多|おお}くて{疲|つか}れる"], en: "Sales are cheap, but they're crowded and tiring." },
      { type: "order", tiles: ["{収入|しゅうにゅう}が","{増|ふ}えた","{反面|はんめん}","{自由|じゆう}な{時間|じかん}がなくなった"], en: "My income rose, but I lost my free time." },
      { type: "choose", q: "Which sentence is correct?", answer: "この{車|くるま}は{速|はや}い{反面|はんめん}、ガソリンをたくさん{使|つか}う。", options: ["この{車|くるま}は{速|はや}い{反面|はんめん}、ガソリンをたくさん{使|つか}う。","{兄|あに}は{背|せ}が{高|たか}い{反面|はんめん}、{弟|おとうと}は{背|せ}がひくい。","この{車|くるま}は{速|はや}く{反面|はんめん}、ガソリンをたくさん{使|つか}う。","この{車|くるま}は{速|はや}いの{反面|はんめん}、ガソリンをたくさん{使|つか}う。"] },
      { type: "choose", q: "Which means 'cheap, but the quality is bad'?", answer: "{安|やす}い{反面|はんめん}、{品質|ひんしつ}が{悪|わる}い。", options: ["{安|やす}い{反面|はんめん}、{品質|ひんしつ}が{悪|わる}い。","{安|やす}いおかげで、{品質|ひんしつ}がいい。","{安|やす}いので、{品質|ひんしつ}もいい。","{安|やす}いうちに、{買|か}おう。"] }
    ]
  },
  {
    id: "L207-2",
    lesson: 207,
    title: "～ものの",
    meaning: "Although (but it goes no further)",
    explain: "Use ～ものの to admit a fact and then say that what follows doesn't go as expected.",
    examples: [
      { jp: "{新|あたら}しいパソコンを{買|か}ったものの、{使|つか}い{方|かた}がわからない。", ro: "Atarashii pasokon o katta mono no, tsukaikata ga wakaranai.", en: "I bought a new computer, but I don't know how to use it." },
      { jp: "セールに{行|い}ったものの、ほしい{物|もの}はなかった。", ro: "Sēru ni itta mono no, hoshii mono wa nakatta.", en: "I went to the sale, but there was nothing I wanted." },
      { jp: "お{金|かね}はあるものの、{使|つか}う{時間|じかん}がない。", ro: "O-kane wa aru mono no, tsukau jikan ga nai.", en: "I have money, but no time to spend it." }
    ],
    drills: [
      { type: "fill", jp: "{店|みせ}まで{来|き}た＿＿、さいふを{忘|わす}れていた。", answer: "ものの", options: ["ものの","おかげで","ついでに","たびに"], en: "I came all the way to the shop, but I'd forgotten my wallet." },
      { type: "fill", jp: "このかばんは{便利|べんり}＿＿ものの、{重|おも}い。", answer: "な", options: ["な","の","だ","に"], en: "This bag is handy, but it's heavy." },
      { type: "order", tiles: ["{安|やす}かった","ので","{買|か}った","ものの","{一度|いちど}も{使|つか}っていない"], en: "I bought it because it was cheap, but I haven't used it once." },
      { type: "order", tiles: ["{値段|ねだん}は","{高|たか}い","ものの","{味|あじ}はふつうだ"], en: "The price is high, but the taste is average." },
      { type: "choose", q: "Which completes ジムに入ったものの…？", answer: "{全然|ぜんぜん}{行|い}っていない。", options: ["{全然|ぜんぜん}{行|い}っていない。","{毎日|まいにち}{行|い}こう。","{一緒|いっしょ}に{行|い}ってください。","{行|い}きましょう。"] },
      { type: "choose", q: "What follows ～ものの?", answer: "Something that falls short of expectations", options: ["Something that falls short of expectations","A polite request","A plan for tomorrow","A proof of the first fact"] }
    ]
  },
  {
    id: "L207-3",
    lesson: 207,
    title: "～わけにはいかない",
    meaning: "Can't (for social or moral reasons)",
    explain: "Use V る + わけにはいかない when something is possible but you can't do it for social or moral reasons.",
    examples: [
      { jp: "これは{友|とも}だちのお{金|かね}だから、{勝手|かって}に{使|つか}うわけにはいかない。", ro: "Kore wa tomodachi no o-kane da kara, katte ni tsukau wake ni wa ikanai.", en: "This is my friend's money, so I can't just spend it as I like." },
      { jp: "{約束|やくそく}したのだから、{今|いま}さら{値段|ねだん}を{上|あ}げるわけにはいかない。", ro: "Yakusoku shita no da kara, imasara nedan o ageru wake ni wa ikanai.", en: "We promised, so we can't raise the price at this stage." },
      { jp: "{家|いえ}のローンがあるので、{仕事|しごと}をやめるわけにはいきません。", ro: "Ie no rōn ga aru node, shigoto o yameru wake ni wa ikimasen.", en: "I have a home loan, so I can't quit my job." }
    ],
    drills: [
      { type: "fill", jp: "{大切|たいせつ}な{会議|かいぎ}があるので、{休|やす}む＿＿。", answer: "わけにはいかない", options: ["わけにはいかない","ことにする","はずだ","ものだ"], en: "There's an important meeting, so I can't take the day off." },
      { type: "fill", jp: "{店|みせ}の{商品|しょうひん}を{勝手|かって}に{使|つか}う＿＿にはいきません。", answer: "わけ", options: ["わけ","こと","もの","ため"], en: "You can't use the shop's goods as you please." },
      { type: "order", tiles: ["{社長|しゃちょう}の","{頼|たの}みを","{断|ことわ}る","わけには","いかない"], en: "I can't turn down the president's request." },
      { type: "order", tiles: ["まだ{働|はたら}いている{人|ひと}がいるので","{帰|かえ}る","わけには","いかない"], en: "People are still working, so I can't leave." },
      { type: "choose", q: "Which situation fits わけにはいかない?", answer: "It would be wrong to take the money", options: ["It would be wrong to take the money","You never learned to swim","The shop has no stock","You are too short to reach"] },
      { type: "choose", q: "Which is correct?", answer: "{買|か}うわけにはいかない。", options: ["{買|か}うわけにはいかない。","{買|か}ったわけにはいかない。","{買|か}いわけにはいかない。","{買|か}ってわけにはいかない。"] }
    ]
  },
  {
    id: "L207-4",
    lesson: 207,
    title: "～かわりに",
    meaning: "Instead of, in exchange for",
    explain: "Use ～かわりに when one thing replaces another, or when something good comes with something bad.",
    examples: [
      { jp: "{現金|げんきん}のかわりに、カードで{払|はら}った。", ro: "Genkin no kawari ni, kādo de haratta.", en: "I paid by card instead of cash." },
      { jp: "この{店|みせ}は{値段|ねだん}が{安|やす}いかわりに、{配達|はいたつ}はしてくれない。", ro: "Kono mise wa nedan ga yasui kawari ni, haitatsu wa shite kurenai.", en: "This shop is cheap, but in exchange it doesn't deliver." },
      { jp: "{宿題|しゅくだい}を{手伝|てつだ}うかわりに、{昼|ひる}ごはんをおごって。", ro: "Shukudai o tetsudau kawari ni, hirugohan o ogotte.", en: "I'll help with your homework. In exchange, buy me lunch." }
    ],
    drills: [
      { type: "fill", jp: "さとうの＿＿、はちみつを{使|つか}った。", answer: "かわりに", options: ["かわりに","くせに","せいで","ついでに"], en: "I used honey instead of sugar." },
      { type: "fill", jp: "{父|ちち}＿＿かわりに、{私|わたし}が{買|か}い{物|もの}に{行|い}きます。", answer: "の", options: ["の","な","が","に"], en: "I'll go shopping in place of my father." },
      { type: "order", tiles: ["{料理|りょうり}を","{作|つく}る","かわりに","そうじをしてね"], en: "I'll cook, so you clean in return, okay?" },
      { type: "order", tiles: ["{駅|えき}から","{遠|とお}い","かわりに","やちんが{安|やす}い"], en: "It's far from the station, but the rent is cheap in exchange." },
      { type: "choose", q: "Which shows an exchange?", answer: "{英語|えいご}を{教|おし}えるかわりに、{日本語|にほんご}を{教|おし}えて。", options: ["{英語|えいご}を{教|おし}えるかわりに、{日本語|にほんご}を{教|おし}えて。","{英語|えいご}を{教|おし}えるたびに、{疲|つか}れる。","{英語|えいご}を{教|おし}えたとたん、{疲|つか}れた。","{英語|えいご}を{教|おし}えるのに、{時間|じかん}がかかる。"] },
      { type: "choose", q: "Which is correct?", answer: "{便利|べんり}なかわりに、{高|たか}い。", options: ["{便利|べんり}なかわりに、{高|たか}い。","{便利|べんり}のかわりに、{高|たか}い。","{便利|べんり}だかわりに、{高|たか}い。","{便利|べんり}かわりに、{高|たか}い。"] }
    ]
  },

  // ───────── Unit 208: Clothes, colours and shapes ─────────
  {
    id: "L208-1",
    lesson: 208,
    title: "～っぽい",
    meaning: "-ish, looks like, tends to",
    explain: "Use ～っぽい in casual speech for something with a lot of a quality, or someone with a certain tendency.",
    examples: [
      { jp: "{白|しろ}っぽいシャツを{探|さが}している。", ro: "Shiroppoi shatsu o sagashite iru.", en: "I'm looking for a whitish shirt." },
      { jp: "この{服|ふく}は{安|やす}っぽく{見|み}える。", ro: "Kono fuku wa yasuppoku mieru.", en: "These clothes look cheap." },
      { jp: "{最近|さいきん}、{忘|わす}れっぽくなった。", ro: "Saikin, wasureppoku natta.", en: "I've become forgetful lately." }
    ],
    drills: [
      { type: "fill", jp: "{赤|あか}＿＿{服|ふく}を{着|き}ている{人|ひと}が{田中|たなか}さんです。", answer: "っぽい", options: ["っぽい","がち","わりに","だらけ"], en: "The person wearing the reddish clothes is Tanaka." },
      { type: "fill", jp: "そのコートは＿＿っぽい。", answer: "{安|やす}", options: ["{安|やす}","{安|やす}い","{安|やす}く","{安|やす}かった"], en: "That coat looks cheap." },
      { type: "order", tiles: ["{黒|くろ}っぽい","{服|ふく}を","{着|き}た","{人|ひと}が","{来|き}た"], en: "A person in dark clothes came." },
      { type: "order", tiles: ["このシャツは","{洗|あら}うと","{白|しろ}っぽく","なる"], en: "This shirt turns whitish when washed." },
      { type: "choose", q: "Which means 'forgetful'?", answer: "{忘|わす}れっぽい", options: ["{忘|わす}れっぽい","{忘|わす}れるっぽい","{忘|わす}れたっぽい","{忘|わす}れいっぽい"] },
      { type: "choose", q: "Which describes an adult negatively?", answer: "{子|こ}どもっぽい", options: ["{子|こ}どもっぽい","やさしい","まじめな","{親切|しんせつ}な"] }
    ]
  },
  {
    id: "L208-2",
    lesson: 208,
    title: "N + らしい (typical)",
    meaning: "Typical of, just like a real",
    explain: "Use noun + らしい to say something has the real, ideal qualities of that noun.",
    examples: [
      { jp: "{今日|きょう}は{春|はる}らしい{天気|てんき}だ。", ro: "Kyō wa harurashii tenki da.", en: "Today's weather is very spring-like." },
      { jp: "あの{人|ひと}はいつも{学生|がくせい}らしい{服|ふく}を{着|き}ている。", ro: "Ano hito wa itsumo gakuseirashii fuku o kite iru.", en: "That person always wears clothes typical of a student." },
      { jp: "{約束|やくそく}を{忘|わす}れるなんて、{君|きみ}らしくないね。", ro: "Yakusoku o wasureru nante, kimi rashiku nai ne.", en: "Forgetting a promise isn't like you." }
    ],
    drills: [
      { type: "fill", jp: "{今日|きょう}は{秋|あき}＿＿{空|そら}だね。", answer: "らしい", options: ["らしい","らしく","らしいな","らしくて"], en: "Today's sky is really autumn-like." },
      { type: "fill", jp: "いつも{元気|げんき}な{田中|たなか}さんが{静|しず}かだ。{田中|たなか}さん＿＿。", answer: "らしくない", options: ["らしくない","らしい","っぽい","みたいだ"], en: "Tanaka, usually so lively, is quiet. It's not like her." },
      { type: "order", tiles: ["{自分|じぶん}","らしい","{服|ふく}を","{着|き}たい"], en: "I want to wear clothes that are true to myself." },
      { type: "order", tiles: ["もっと","{学生|がくせい}","らしく","しなさい"], en: "Act more like a student." },
      { type: "choose", q: "Which has the 'typical of' meaning?", answer: "{春|はる}らしいピンクの{服|ふく}", options: ["{春|はる}らしいピンクの{服|ふく}","{明日|あした}は{休|やす}みらしい。","あの{店|みせ}は{高|たか}いらしい。","{雨|あめ}が{降|ふ}るらしい。"] },
      { type: "choose", q: "Which is correct?", answer: "{夏|なつ}らしい{色|いろ}", options: ["{夏|なつ}らしい{色|いろ}","{夏|なつ}のらしい{色|いろ}","{夏|なつ}らしいな{色|いろ}","{夏|なつ}らしく{色|いろ}"] }
    ]
  },
  {
    id: "L208-3",
    lesson: 208,
    title: "～気味",
    meaning: "A bit, slightly (unwelcome)",
    explain: "Use ～気味 to say you feel a slight touch of something, usually unpleasant.",
    examples: [
      { jp: "{最近|さいきん}{太|ふと}り{気味|ぎみ}で、{服|ふく}がきつくなった。", ro: "Saikin futorigimi de, fuku ga kitsuku natta.", en: "I've been putting on a bit of weight lately, and my clothes have got tight." },
      { jp: "{今日|きょう}はかぜ{気味|ぎみ}なので、あたたかい{服|ふく}を{着|き}ていく。", ro: "Kyō wa kazegimi na node, atatakai fuku o kite iku.", en: "I feel like I'm getting a cold today, so I'll wear warm clothes." },
      { jp: "{疲|つか}れ{気味|ぎみ}のときは、{明|あか}るい{色|いろ}の{服|ふく}を{着|き}る。", ro: "Tsukaregimi no toki wa, akarui iro no fuku o kiru.", en: "When I'm a bit tired, I wear bright colours." }
    ],
    drills: [
      { type: "fill", jp: "{今朝|けさ}から{少|すこ}しかぜ＿＿です。", answer: "{気味|ぎみ}", options: ["{気味|ぎみ}","だらけ","たび","うち"], en: "I've felt like I'm getting a cold since this morning." },
      { type: "fill", jp: "{最近|さいきん}、＿＿{気味|ぎみ}で、スカートがきつい。", answer: "{太|ふと}り", options: ["{太|ふと}り","{太|ふと}る","{太|ふと}った","{太|ふと}って"], en: "Lately I've been gaining a bit of weight, and my skirt is tight." },
      { type: "order", tiles: ["{仕事|しごと}が","{遅|おく}れ","{気味|ぎみ}","なので","{急|いそ}いでいます"], en: "Work is running a bit behind, so I'm hurrying." },
      { type: "order", tiles: ["{疲|つか}れ","{気味|ぎみ}の","ときは","{早|はや}く{寝|ね}る"], en: "When I'm a bit tired, I go to bed early." },
      { type: "choose", q: "Which is correct?", answer: "{少|すこ}し{疲|つか}れ{気味|ぎみ}です。", options: ["{少|すこ}し{疲|つか}れ{気味|ぎみ}です。","{少|すこ}し{疲|つか}れる{気味|ぎみ}です。","{少|すこ}し{疲|つか}れた{気味|ぎみ}です。","{少|すこ}し{元気|げんき}{気味|ぎみ}です。"] },
      { type: "choose", q: "What does 気味 describe?", answer: "A slight, unwelcome state", options: ["A slight, unwelcome state","A strong, happy feeling","A rule to follow","A past habit"] }
    ]
  },
  {
    id: "L208-4",
    lesson: 208,
    title: "～ながら(も)",
    meaning: "Although, even though",
    explain: "Use ～ながら(も) in a slightly formal style to connect two facts that don't seem to fit together.",
    examples: [
      { jp: "この{靴|くつ}は{安|やす}いながらも、とてもじょうぶだ。", ro: "Kono kutsu wa yasui nagara mo, totemo jōbu da.", en: "These shoes are cheap, yet very sturdy." },
      { jp: "{悪|わる}いと{思|おも}いながら、{姉|あね}の{服|ふく}を{勝手|かって}に{着|き}てしまった。", ro: "Warui to omoinagara, ane no fuku o katte ni kite shimatta.", en: "Even though I knew it was wrong, I wore my sister's clothes without asking." },
      { jp: "この{店|みせ}は{小|ちい}さいながらも、{品物|しなもの}は{多|おお}い。", ro: "Kono mise wa chiisai nagara mo, shinamono wa ōi.", en: "This shop is small, yet it has a lot of goods." }
    ],
    drills: [
      { type: "fill", jp: "このかばんは{小|ちい}さい＿＿、たくさん{入|はい}る。", answer: "ながらも", options: ["ながらも","たびに","ついでに","とたんに"], en: "This bag is small, yet it holds a lot." },
      { type: "fill", jp: "{知|し}ってい＿＿、{友|とも}だちに{教|おし}えなかった。", answer: "ながら", options: ["ながら","ると","るうちに","たとたん"], en: "Even though I knew, I didn't tell my friend." },
      { type: "order", tiles: ["{小|ちい}さい","ながらも","{自分|じぶん}の","{店|みせ}を{持|も}った"], en: "Small as it is, I've got my own shop." },
      { type: "order", tiles: ["{残念|ざんねん}","ながら","{今回|こんかい}は{参加|さんか}できません"], en: "Unfortunately, I can't take part this time." },
      { type: "choose", q: "In which does ながら mean 'although'?", answer: "{悪|わる}いと{知|し}りながら、うそをついた。", options: ["{悪|わる}いと{知|し}りながら、うそをついた。","{音楽|おんがく}を{聞|き}きながら{走|はし}る。","{歌|うた}いながら{歩|ある}く。","テレビを{見|み}ながら{食|た}べる。"] },
      { type: "choose", q: "Which is correct?", answer: "{貧|まず}しいながらも、{幸|しあわ}せに{暮|く}らしている。", options: ["{貧|まず}しいながらも、{幸|しあわ}せに{暮|く}らしている。","{貧|まず}しくながらも、{幸|しあわ}せに{暮|く}らしている。","{貧|まず}しいのながらも、{幸|しあわ}せに{暮|く}らしている。","{貧|まず}しかったながらも、{幸|しあわ}せに{暮|く}らしている。"] }
    ]
  },

  // ───────── Unit 209: Numbers and quantity ─────────
  {
    id: "L209-1",
    lesson: 209,
    title: "～一方だ",
    meaning: "Keeps on (more and more)",
    explain: "Use V る + 一方だ to say a change keeps going in one direction, often a bad one.",
    examples: [
      { jp: "この{町|まち}の{人口|じんこう}はへる{一方|いっぽう}だ。", ro: "Kono machi no jinkō wa heru ippō da.", en: "This town's population just keeps falling." },
      { jp: "{物|もの}の{値段|ねだん}は{上|あ}がる{一方|いっぽう}だ。", ro: "Mono no nedan wa agaru ippō da.", en: "Prices just keep going up." },
      { jp: "{仕事|しごと}が{増|ふ}える{一方|いっぽう}で、{休|やす}みが{取|と}れない。", ro: "Shigoto ga fueru ippō de, yasumi ga torenai.", en: "My work just keeps increasing, so I can't take time off." }
    ],
    drills: [
      { type: "fill", jp: "{借金|しゃっきん}は{増|ふ}える＿＿だ。", answer: "{一方|いっぽう}", options: ["{一方|いっぽう}","うち","たび","くせ"], en: "My debts just keep growing." },
      { type: "fill", jp: "{学生|がくせい}の{数|かず}は＿＿{一方|いっぽう}だ。", answer: "へる", options: ["へる","へった","へって","へらない"], en: "The number of students keeps falling." },
      { type: "order", tiles: ["{病気|びょうき}は","{悪|わる}く","なる","{一方|いっぽう}だ"], en: "The illness keeps getting worse." },
      { type: "order", tiles: ["この{町|まち}の","やちんは","{上|あ}がる","{一方|いっぽう}だ"], en: "Rents in this town just keep rising." },
      { type: "choose", q: "Which is correct?", answer: "{町|まち}の{人|ひと}が{少|すく}なくなる{一方|いっぽう}だ。", options: ["{町|まち}の{人|ひと}が{少|すく}なくなる{一方|いっぽう}だ。","{毎朝|まいあさ}{走|はし}る{一方|いっぽう}だ。","{人|ひと}が{少|すく}なくなった{一方|いっぽう}だ。","{人|ひと}が{少|すく}ない{一方|いっぽう}だ。"] },
      { type: "choose", q: "What kind of verb does 一方だ need?", answer: "A verb of change", options: ["A verb of change","A verb of giving","A verb of asking","A verb of speaking"] }
    ]
  },
  {
    id: "L209-2",
    lesson: 209,
    title: "～につれて",
    meaning: "As ... gradually ...",
    explain: "Use ～につれて to say that as one thing changes gradually, another changes with it.",
    examples: [
      { jp: "{年|とし}をとるにつれて、{時間|じかん}が{早|はや}く{感|かん}じられる。", ro: "Toshi o toru ni tsurete, jikan ga hayaku kanjirareru.", en: "As you get older, time seems to go faster." },
      { jp: "きおんが{上|あ}がるにつれて、ビールの{売|う}り{上|あ}げが{増|ふ}える。", ro: "Kion ga agaru ni tsurete, bīru no uriage ga fueru.", en: "As the temperature rises, beer sales increase." },
      { jp: "{数字|すうじ}が{大|おお}きくなるにつれて、けいさんが{難|むずか}しくなる。", ro: "Sūji ga ōkiku naru ni tsurete, keisan ga muzukashiku naru.", en: "As the numbers get bigger, the calculations get harder." }
    ],
    drills: [
      { type: "fill", jp: "{時間|じかん}がたつ＿＿、{人|ひと}が{増|ふ}えてきた。", answer: "につれて", options: ["につれて","くせに","ついでに","たびに"], en: "As time passed, more people arrived." },
      { type: "fill", jp: "{値段|ねだん}が＿＿につれて、{売|う}れなくなった。", answer: "{上|あ}がる", options: ["{上|あ}がる","{上|あ}がった","{上|あ}がって","{上|あ}げる"], en: "As the price rose, it stopped selling." },
      { type: "order", tiles: ["{人口|じんこう}が","{増|ふ}える","につれて","{車|くるま}も{多|おお}くなった"], en: "As the population grew, cars increased too." },
      { type: "order", tiles: ["{勉強|べんきょう}が","{進|すす}む","につれて","おもしろくなってきた"], en: "As my studies progressed, they got more interesting." },
      { type: "choose", q: "Which is correct?", answer: "{暗|くら}くなるにつれて、{寒|さむ}くなった。", options: ["{暗|くら}くなるにつれて、{寒|さむ}くなった。","{暗|くら}くなるにつれて、{帰|かえ}りましょう。","{暗|くら}くなったにつれて、{寒|さむ}くなった。","{暗|くら}いにつれて、{寒|さむ}くなった。"] },
      { type: "choose", q: "What must both halves of ～につれて show?", answer: "Gradual change", options: ["Gradual change","A sudden surprise","A polite request","A fixed rule"] }
    ]
  },
  {
    id: "L209-3",
    lesson: 209,
    title: "～に対して",
    meaning: "In contrast to, toward, per",
    explain: "Use ～に対して to contrast two things, to show who an action is aimed at, or to give a ratio.",
    examples: [
      { jp: "{兄|あに}は{背|せ}が{高|たか}いのに{対|たい}して、{弟|おとうと}はひくい。", ro: "Ani wa se ga takai no ni taishite, otōto wa hikui.", en: "My older brother is tall, while my younger one is short." },
      { jp: "{学生|がくせい}{十人|じゅうにん}に{対|たい}して、{先生|せんせい}が{一人|ひとり}いる。", ro: "Gakusei jūnin ni taishite, sensei ga hitori iru.", en: "There is one teacher for every ten students." },
      { jp: "たなかさんはだれに{対|たい}しても{親切|しんせつ}だ。", ro: "Tanaka-san wa dare ni taishite mo shinsetsu da.", en: "Tanaka is kind to everyone." }
    ],
    drills: [
      { type: "fill", jp: "{東京|とうきょう}は{人|ひと}が{増|ふ}えている＿＿、この{町|まち}はへっている。", answer: "のに{対|たい}して", options: ["のに{対|たい}して","に{対|たい}して","を{対|たい}して","の{対|たい}して"], en: "Tokyo's population is growing, whereas this town's is falling." },
      { type: "fill", jp: "{親|おや}＿＿{気持|きも}ちを{作文|さくぶん}に{書|か}いた。", answer: "に{対|たい}する", options: ["に{対|たい}する","を{対|たい}する","が{対|たい}する","で{対|たい}する"], en: "I wrote about my feelings toward my parents in an essay." },
      { type: "order", tiles: ["{男|おとこ}の{人|ひと}","{三人|さんにん}に","{対|たい}して","{女|おんな}の{人|ひと}が{一人|ひとり}いる"], en: "There is one woman for every three men." },
      { type: "order", tiles: ["{目上|めうえ}の","{人|ひと}に","{対|たい}しては","けいごを{使|つか}う"], en: "You use polite language toward your superiors." },
      { type: "choose", q: "Which shows a contrast?", answer: "{姉|あね}は{明|あか}るいのに{対|たい}して、{妹|いもうと}は{静|しず}かだ。", options: ["{姉|あね}は{明|あか}るいのに{対|たい}して、{妹|いもうと}は{静|しず}かだ。","{先生|せんせい}に{対|たい}して{失礼|しつれい}だ。","{質問|しつもん}に{対|たい}して{答|こた}える。","{五人|ごにん}に{対|たい}して{一人|ひとり}だ。"] },
      { type: "choose", q: "Which means 'for every ten people'?", answer: "{十人|じゅうにん}に{対|たい}して", options: ["{十人|じゅうにん}に{対|たい}して","{十人|じゅうにん}のくせに","{十人|じゅうにん}のたびに","{十人|じゅうにん}のせいで"] }
    ]
  },
  {
    id: "L209-4",
    lesson: 209,
    title: "～だらけ",
    meaning: "Full of, covered in (something unpleasant)",
    explain: "Use noun + だらけ to say something is covered in or full of something unpleasant.",
    examples: [
      { jp: "この{作文|さくぶん}は{間違|まちが}いだらけだ。", ro: "Kono sakubun wa machigai darake da.", en: "This essay is full of mistakes." },
      { jp: "{部屋|へや}がごみだらけで、{歩|ある}けない。", ro: "Heya ga gomi darake de, arukenai.", en: "The room is so full of rubbish that I can't walk." },
      { jp: "{子|こ}どもたちはどろだらけになって{帰|かえ}ってきた。", ro: "Kodomotachi wa doro darake ni natte kaette kita.", en: "The kids came home covered in mud." }
    ],
    drills: [
      { type: "fill", jp: "{転|ころ}んで、{足|あし}がきず＿＿になった。", answer: "だらけ", options: ["だらけ","がち","っぽい","{気味|ぎみ}"], en: "I fell and my leg got covered in scrapes." },
      { type: "fill", jp: "ごみだらけ＿＿{部屋|へや}をかたづけた。", answer: "の", options: ["の","な","に","を"], en: "I tidied the room full of rubbish." },
      { type: "order", tiles: ["どろ","だらけの","{靴|くつ}を","{洗|あら}った"], en: "I washed the muddy shoes." },
      { type: "order", tiles: ["このレポートは","{間違|まちが}い","だらけで","{読|よ}みにくい"], en: "This report is so full of mistakes that it's hard to read." },
      { type: "choose", q: "Which is correct?", answer: "{借金|しゃっきん}だらけの{生活|せいかつ}はつらい。", options: ["{借金|しゃっきん}だらけの{生活|せいかつ}はつらい。","{美|うつく}しいだらけの{庭|にわ}を{見|み}た。","{静|しず}かだらけの{町|まち}に{住|す}みたい。","{高|たか}いだらけの{店|みせ}に{行|い}った。"] },
      { type: "choose", q: "What is だらけ usually attached to?", answer: "A noun for something unpleasant", options: ["A noun for something unpleasant","A verb in ない-form","A polite request","A number"] }
    ]
  },

  // ───────── Unit 210: Hobbies and events ─────────
  {
    id: "L210-1",
    lesson: 210,
    title: "～にもかかわらず",
    meaning: "In spite of",
    explain: "Use ～にもかかわらず in formal style to say something happened despite a fact that suggested otherwise.",
    examples: [
      { jp: "{大雨|おおあめ}にもかかわらず、まつりにはおおぜいの{人|ひと}が{来|き}た。", ro: "Ōame ni mo kakawarazu, matsuri ni wa ōzei no hito ga kita.", en: "Despite the heavy rain, lots of people came to the festival." },
      { jp: "れんしゅうしたにもかかわらず、{試合|しあい}に{負|ま}けてしまった。", ro: "Renshū shita ni mo kakawarazu, shiai ni makete shimatta.", en: "Despite practising, we lost the match." },
      { jp: "{休日|きゅうじつ}であるにもかかわらず、{会場|かいじょう}はすいていた。", ro: "Kyūjitsu de aru ni mo kakawarazu, kaijō wa suite ita.", en: "Despite it being a holiday, the venue was empty." }
    ],
    drills: [
      { type: "fill", jp: "{悪|わる}い{天気|てんき}＿＿、コンサートは{行|おこな}われた。", answer: "にもかかわらず", options: ["にもかかわらず","のくせに","のついでに","のたびに"], en: "Despite the bad weather, the concert went ahead." },
      { type: "fill", jp: "{今日|きょう}は{日曜日|にちようび}＿＿にもかかわらず、{店|みせ}はすいている。", answer: "である", options: ["である","な","の","に"], en: "Despite it being Sunday, the shop is empty." },
      { type: "order", tiles: ["{高|たか}い","{値段|ねだん}","にもかかわらず","チケットはすぐ{売|う}れた"], en: "Despite the high price, the tickets sold out right away." },
      { type: "order", tiles: ["{熱|ねつ}が","ある","にもかかわらず","{彼|かれ}は{試合|しあい}に{出|で}た"], en: "Despite having a fever, he played in the match." },
      { type: "choose", q: "Which is correct?", answer: "{努力|どりょく}したにもかかわらず、{合格|ごうかく}できなかった。", options: ["{努力|どりょく}したにもかかわらず、{合格|ごうかく}できなかった。","{努力|どりょく}したにもかかわらず、{合格|ごうかく}しましょう。","{努力|どりょく}したにかかわらず、{合格|ごうかく}できなかった。","{努力|どりょく}してにもかかわらず、{合格|ごうかく}できなかった。"] },
      { type: "choose", q: "What changes if you remove も (にかかわらず)?", answer: "It means 'regardless of'", options: ["It means 'regardless of'","It means 'because of'","It becomes more polite","Nothing changes"] }
    ]
  },
  {
    id: "L210-2",
    lesson: 210,
    title: "～て以来",
    meaning: "Ever since",
    explain: "Use V て + 以来 to say a state has continued from one past point until now.",
    examples: [
      { jp: "{去年|きょねん}ギターを{始|はじ}めて{以来|いらい}、{毎日|まいにち}ひいている。", ro: "Kyonen gitā o hajimete irai, mainichi hiite iru.", en: "Ever since I took up the guitar last year, I've played every day." },
      { jp: "そつぎょうして{以来|いらい}、{先生|せんせい}に{会|あ}っていない。", ro: "Sotsugyō shite irai, sensei ni atte inai.", en: "I haven't seen my teacher since I graduated." },
      { jp: "{大学|だいがく}{入学|にゅうがく}{以来|いらい}、ずっと{同|おな}じクラブに{入|はい}っている。", ro: "Daigaku nyūgaku irai, zutto onaji kurabu ni haitte iru.", en: "Since entering university, I've been in the same club." }
    ],
    drills: [
      { type: "fill", jp: "{日本|にほん}に{来|き}て＿＿、{一度|いちど}も{国|くに}に{帰|かえ}っていない。", answer: "{以来|いらい}", options: ["{以来|いらい}","{以上|いじょう}","ついで","とたん"], en: "I haven't been back home once since I came to Japan." },
      { type: "fill", jp: "そのバンドを＿＿{以来|いらい}、ずっとファンだ。", answer: "{知|し}って", options: ["{知|し}って","{知|し}る","{知|し}った","{知|し}らない"], en: "I've been a fan ever since I found out about that band." },
      { type: "order", tiles: ["テニスを","{始|はじ}めて","{以来|いらい}","{体|からだ}の{調子|ちょうし}がいい"], en: "Ever since I started tennis, I've been in good shape." },
      { type: "order", tiles: ["{大学|だいがく}に{入|はい}って","{以来|いらい}","ずっと","{一人|ひとり}で{暮|く}らしている"], en: "Ever since I entered university, I've lived alone." },
      { type: "choose", q: "Which is correct?", answer: "{引|ひ}っ{越|こ}して{以来|いらい}、ずっと{元気|げんき}だ。", options: ["{引|ひ}っ{越|こ}して{以来|いらい}、ずっと{元気|げんき}だ。","{引|ひ}っ{越|こ}した{以来|いらい}、ずっと{元気|げんき}だ。","{引|ひ}っ{越|こ}す{以来|いらい}、ずっと{元気|げんき}だ。","{引|ひ}っ{越|こ}しの{以来|いらい}、ずっと{元気|げんき}だ。"] },
      { type: "choose", q: "What must the second half of ～て以来 show?", answer: "A state continuing until now", options: ["A state continuing until now","A one-time future plan","A sudden surprise","A polite request"] }
    ]
  },
  {
    id: "L210-3",
    lesson: 210,
    title: "～ものだから",
    meaning: "Because, you see (excuse or personal reason)",
    explain: "Use ～ものだから to give a personal reason or excuse, often when explaining why something went wrong.",
    examples: [
      { jp: "{試合|しあい}が{楽|たの}しかったものだから、{帰|かえ}るのが{遅|おそ}くなった。", ro: "Shiai ga tanoshikatta mono da kara, kaeru no ga osoku natta.", en: "The game was so much fun that I got home late." },
      { jp: "{急|いそ}いでいたものですから、チケットを{忘|わす}れてしまいました。", ro: "Isoide ita mono desu kara, chiketto o wasurete shimaimashita.", en: "I was in a hurry, you see, so I forgot the ticket." },
      { jp: "{初|はじ}めてだったもので、うまくできなくてすみません。", ro: "Hajimete datta mono de, umaku dekinakute sumimasen.", en: "It was my first time, so I'm sorry I couldn't do it well." }
    ],
    drills: [
      { type: "fill", jp: "{電車|でんしゃ}が{遅|おく}れた＿＿、{間|ま}に{合|あ}いませんでした。", answer: "ものですから", options: ["ものですから","くせに","ついでに","たびに"], en: "The train was late, you see, so I didn't make it." },
      { type: "fill", jp: "{近所|きんじょ}のまつりが{好|す}き＿＿ものだから、{毎年|まいとし}{手伝|てつだ}っている。", answer: "な", options: ["な","だ","の","に"], en: "I love the local festival, you see, so I help every year." },
      { type: "order", tiles: ["{夜中|よなか}まで","ゲームをしていた","ものだから","ねぼうしてしまった"], en: "I was playing games till midnight, so I overslept." },
      { type: "order", tiles: ["{初|はじ}めての","{発表|はっぴょう}だった","ものですから","きんちょうしました"], en: "It was my first presentation, you see, so I was nervous." },
      { type: "choose", q: "Which is correct?", answer: "{道|みち}がこんでいたものですから、{遅|おく}れました。", options: ["{道|みち}がこんでいたものですから、{遅|おく}れました。","{道|みち}がこんでいるものですから、{早|はや}く{行|い}きなさい。","{道|みち}がこんでいたものだから、{電車|でんしゃ}で{行|い}こう。","{道|みち}がこむものですから、{遅|おく}れてください。"] },
      { type: "choose", q: "When do you use ものだから?", answer: "When giving an excuse", options: ["When giving an excuse","When giving an order","When making a plan","When stating a scientific fact"] }
    ]
  },
  {
    id: "L210-4",
    lesson: 210,
    title: "～どころか",
    meaning: "Far from, let alone",
    explain: "Use ～どころか to reject an idea and say the reality is the opposite or much more extreme.",
    examples: [
      { jp: "{試合|しあい}で{勝|か}つどころか、{一点|いってん}も{取|と}れなかった。", ro: "Shiai de katsu dokoro ka, itten mo torenakatta.", en: "Far from winning the match, we didn't score a single point." },
      { jp: "ピアノどころか、がっきは{一|ひと}つもひけない。", ro: "Piano dokoro ka, gakki wa hitotsu mo hikenai.", en: "Let alone the piano, I can't play a single instrument." },
      { jp: "{休|やす}むどころか、{週末|しゅうまつ}も{働|はたら}いている。", ro: "Yasumu dokoro ka, shūmatsu mo hataraite iru.", en: "Far from resting, I'm working at weekends too." }
    ],
    drills: [
      { type: "fill", jp: "{楽|たの}しい＿＿、とても{疲|つか}れた。", answer: "どころか", options: ["どころか","おかげで","たびに","ついでに"], en: "Far from being fun, it was exhausting." },
      { type: "fill", jp: "{仕事|しごと}が{忙|いそが}しくて、{旅行|りょこう}＿＿ではない。", answer: "どころ", options: ["どころ","とたん","たび","ついで"], en: "I'm so busy with work that travel is out of the question." },
      { type: "order", tiles: ["{漢字|かんじ}","どころか","ひらがなも","{読|よ}めない"], en: "He can't read hiragana, let alone kanji." },
      { type: "order", tiles: ["{雨|あめ}は","やむ","どころか","ますます{強|つよ}くなった"], en: "Far from stopping, the rain got even heavier." },
      { type: "choose", q: "Which is correct?", answer: "{安|やす}いどころか、{高|たか}すぎる。", options: ["{安|やす}いどころか、{高|たか}すぎる。","{安|やす}いどころか、とても{安|やす}い。","{安|やす}くどころか、{高|たか}すぎる。","{安|やす}いのどころか、{高|たか}すぎる。"] },
      { type: "choose", q: "What does ～どころか do?", answer: "Rejects an idea and gives something more extreme", options: ["Rejects an idea and gives something more extreme","Gives a polite suggestion","Shows thanks for a good result","Reports something you heard"] }
    ]
  },

  // ───────── Unit 211: Post, phone and services ─────────
  {
    id: "L211-1",
    lesson: 211,
    title: "～って (I heard)",
    meaning: "They say, I heard (casual)",
    explain: "Use ～って in casual speech to pass on what you heard, or in place of と and という.",
    examples: [
      { jp: "あの{店|みせ}、{来週|らいしゅう}{閉|し}まるって。", ro: "Ano mise, raishū shimaru tte.", en: "I heard that shop is closing next week." },
      { jp: "たなかさん、{今日|きょう}は{休|やす}むって。", ro: "Tanaka-san, kyō wa yasumu tte.", en: "Tanaka says she's taking today off." },
      { jp: "{電話|でんわ}で{明日|あした}とどくって{言|い}ってたよ。", ro: "Denwa de ashita todoku tte itteta yo.", en: "They said on the phone that it'll arrive tomorrow." }
    ],
    drills: [
      { type: "fill", jp: "{配達|はいたつ}は{午後|ごご}になる＿＿。", answer: "って", options: ["って","うちに","たびに","くせに"], en: "They say the delivery will be in the afternoon." },
      { type: "fill", jp: "カランさんは{遅|おく}れる＿＿{言|い}ってたよ。", answer: "って", options: ["って","を","に","が"], en: "Karan said he'd be late." },
      { type: "order", tiles: ["{店|みせ}の{人|ひと}が","すぐ{直|なお}せる","って","{言|い}ってた"], en: "The shop staff said they can fix it right away." },
      { type: "order", tiles: ["モチ","って","{猫|ねこ}","{知|し}ってる"], en: "Do you know a cat called Mochi?" },
      { type: "choose", q: "Which is the casual one?", answer: "{明日|あした}は{休|やす}みだって。", options: ["{明日|あした}は{休|やす}みだって。","{明日|あした}は{休|やす}みとのことです。","{明日|あした}は{休|やす}みだそうでございます。","{明日|あした}は{休|やす}みであるということです。"] },
      { type: "choose", q: "Who would you NOT use ～って with?", answer: "A company president", options: ["A company president","A close friend","Your brother","A classmate"] }
    ]
  },
  {
    id: "L211-2",
    lesson: 211,
    title: "～とか (I heard something like)",
    meaning: "I heard something like (not sure)",
    explain: "Use ～とか at the end of a sentence to pass on something you heard but don't remember exactly.",
    examples: [
      { jp: "こづつみは{明日|あした}{着|つ}くとか。", ro: "Kozutsumi wa ashita tsuku to ka.", en: "I heard something about the parcel arriving tomorrow." },
      { jp: "{銀行|ぎんこう}が{来月|らいげつ}{引|ひ}っ{越|こ}すとか{聞|き}きました。", ro: "Ginkō ga raigetsu hikkosu to ka kikimashita.", en: "I heard the bank is moving next month or something." },
      { jp: "{田中|たなか}さんが{入院|にゅういん}したとか{言|い}っていた。", ro: "Tanaka-san ga nyūin shita to ka itte ita.", en: "Someone was saying Tanaka has gone into hospital or something." }
    ],
    drills: [
      { type: "fill", jp: "ゆうびん{局|きょく}は{明日|あした}{休|やす}み＿＿。", answer: "だとか", options: ["だとか","のとか","なとか","にとか"], en: "I heard the post office is closed tomorrow or something." },
      { type: "fill", jp: "あの{会社|かいしゃ}は{料金|りょうきん}を{上|あ}げる＿＿{聞|き}いた。", answer: "とか", options: ["とか","たび","せい","くせ"], en: "I heard something about that company raising its fees." },
      { type: "order", tiles: ["{電話|でんわ}の","{料金|りょうきん}が","{変|か}わる","とか"], en: "I heard something about phone fees changing." },
      { type: "order", tiles: ["{今年|ことし}の","{夏|なつ}は","あつくなる","とか","{聞|き}いた"], en: "I heard this summer will be hot or something." },
      { type: "choose", q: "Which shows you're unsure what you heard?", answer: "{彼女|かのじょ}は{留学|りゅうがく}するとか。", options: ["{彼女|かのじょ}は{留学|りゅうがく}するとか。","{彼女|かのじょ}は{留学|りゅうがく}します。","{彼女|かのじょ}は{留学|りゅうがく}したい。","{彼女|かのじょ}は{留学|りゅうがく}しなければならない。"] },
      { type: "choose", q: "Which is the listing とか?", answer: "りんごとかみかんとかを{買|か}った。", options: ["りんごとかみかんとかを{買|か}った。","{明日|あした}は{雨|あめ}だとか。","{彼|かれ}は{帰|かえ}ったとか。","{店|みせ}は{閉|し}まるとか{聞|き}いた。"] }
    ]
  },
  {
    id: "L211-3",
    lesson: 211,
    title: "～ということだ",
    meaning: "I'm told that, that means",
    explain: "Use ～ということだ to report information in a formal way, or to sum up what something means.",
    examples: [
      { jp: "{料金|りょうきん}は{来月|らいげつ}から{変|か}わるということです。", ro: "Ryōkin wa raigetsu kara kawaru to iu koto desu.", en: "I'm told the fee changes from next month." },
      { jp: "{電話|でんわ}によると、しゅうりは{三日|みっか}かかるということだ。", ro: "Denwa ni yoru to, shūri wa mikka kakaru to iu koto da.", en: "According to the phone call, the repair will take three days." },
      { jp: "{返事|へんじ}がないということは、{留守|るす}ということだ。", ro: "Henji ga nai to iu koto wa, rusu to iu koto da.", en: "No answer means they're out." }
    ],
    drills: [
      { type: "fill", jp: "{明日|あした}の{説明会|せつめいかい}は{中止|ちゅうし}だ＿＿。", answer: "ということです", options: ["ということです","ようになります","からこそです","わけにはいきません"], en: "I'm told tomorrow's information session has been cancelled." },
      { type: "fill", jp: "{返事|へんじ}がない＿＿、{今|いま}は{忙|いそが}しいということだ。", answer: "ということは", options: ["ということは","くせに","とたん","かわりに"], en: "No reply means they're busy right now." },
      { type: "order", tiles: ["{天気|てんき}{予報|よほう}によると","{明日|あした}は","{雨|あめ}だ","ということだ"], en: "According to the forecast, it'll rain tomorrow." },
      { type: "order", tiles: ["{工事|こうじ}は","{三月|さんがつ}に","{終|お}わる","ということです"], en: "I'm told the work will finish in March." },
      { type: "choose", q: "Which suits a formal notice?", answer: "{電話|でんわ}の{受付|うけつけ}は{五時|ごじ}までということです。", options: ["{電話|でんわ}の{受付|うけつけ}は{五時|ごじ}までということです。","{電話|でんわ}の{受付|うけつけ}は{五時|ごじ}までだって。","{電話|でんわ}の{受付|うけつけ}は{五時|ごじ}までだとかね。","{電話|でんわ}の{受付|うけつけ}は{五時|ごじ}までみたいだよ。"] },
      { type: "choose", q: "What does A ということは B ということだ say?", answer: "A means B", options: ["A means B","A is the opposite of B","A happened before B","A is to blame for B"] }
    ]
  },
  {
    id: "L211-4",
    lesson: 211,
    title: "～とのことだ",
    meaning: "I'm told that (formal message)",
    explain: "Use ～とのことだ to pass on a message or report formally, often in work calls and letters.",
    examples: [
      { jp: "{田中|たなか}さんから{電話|でんわ}があって、{少|すこ}し{遅|おく}れるとのことです。", ro: "Tanaka-san kara denwa ga atte, sukoshi okureru to no koto desu.", en: "Tanaka called to say she'll be a little late." },
      { jp: "{係|かかり}の{人|ひと}によると、{書類|しょるい}は{来週|らいしゅう}とどくとのことです。", ro: "Kakari no hito ni yoru to, shorui wa raishū todoku to no koto desu.", en: "According to the person in charge, the documents will arrive next week." },
      { jp: "{社長|しゃちょう}は{今日|きょう}はお{休|やす}みとのことです。", ro: "Shachō wa kyō wa o-yasumi to no koto desu.", en: "I'm told the president is off today." }
    ],
    drills: [
      { type: "fill", jp: "{店|みせ}の{人|ひと}の{話|はなし}では、しゅうりは{明日|あした}{終|お}わる＿＿です。", answer: "とのこと", options: ["とのこと","こととの","とのもの","とものこと"], en: "According to the shop staff, the repair will finish tomorrow." },
      { type: "fill", jp: "カランさんから、よろしく＿＿ことでした。", answer: "との", options: ["との","への","にの","をの"], en: "Karan asked me to give you his regards." },
      { type: "order", tiles: ["たなかさんから","{電話|でんわ}があって","{少|すこ}し{遅|おく}れる","とのことです"], en: "Tanaka phoned to say she'll be a little late." },
      { type: "order", tiles: ["{部長|ぶちょう}は{午後|ごご}に","{戻|もど}る","とのことです"], en: "I'm told the department head will be back in the afternoon." },
      { type: "choose", q: "Where is ～とのことだ most natural?", answer: "Passing on a phone message at work", options: ["Passing on a phone message at work","Chatting with a close friend","Talking to your pet","Giving your own opinion"] },
      { type: "choose", q: "Which passes on a message politely?", answer: "{山田|やまだ}さんは{遅|おく}れるとのことです。", options: ["{山田|やまだ}さんは{遅|おく}れるとのことです。","{山田|やまだ}さんは{遅|おく}れるって。","{山田|やまだ}さんは{遅|おく}れたいです。","{山田|やまだ}さんは{遅|おく}れるべきです。"] }
    ]
  },

  // ───────── Unit 212: Life stages ─────────
  {
    id: "L212-1",
    lesson: 212,
    title: "～べきだ / ～べきではない",
    meaning: "Should, ought to (strong opinion)",
    explain: "Use V る + べきだ to say what is right or what someone ought to do, as a strong opinion.",
    examples: [
      { jp: "{若|わか}いうちに、もっと{本|ほん}を{読|よ}むべきだ。", ro: "Wakai uchi ni, motto hon o yomu beki da.", en: "You should read more while you're young." },
      { jp: "{親|おや}は{子|こ}どもの{話|はなし}をよく{聞|き}くべきだ。", ro: "Oya wa kodomo no hanashi o yoku kiku beki da.", en: "Parents ought to listen carefully to their children." },
      { jp: "{人|ひと}の{悪口|わるぐち}を{言|い}うべきではない。", ro: "Hito no waruguchi o iu beki de wa nai.", en: "You shouldn't speak ill of others." }
    ],
    drills: [
      { type: "fill", jp: "{約束|やくそく}は{守|まも}る＿＿だ。", answer: "べき", options: ["べき","たび","うち","せい"], en: "Promises ought to be kept." },
      { type: "fill", jp: "そんなことは{子|こ}どもに{言|い}う＿＿。", answer: "べきではない", options: ["べきではない","べきない","ないべきだ","べきくない"], en: "You shouldn't say that kind of thing to a child." },
      { type: "order", tiles: ["{大人|おとな}は","{自分|じぶん}の{行動|こうどう}に","{責任|せきにん}を","{持|も}つ","べきだ"], en: "Adults should take responsibility for their actions." },
      { type: "order", tiles: ["もっと","{早|はや}く","{相談|そうだん}する","べきだった"], en: "I should have asked for advice sooner." },
      { type: "choose", q: "What's the short form of するべきだ?", answer: "すべきだ", options: ["すべきだ","しべきだ","したべきだ","さべきだ"] },
      { type: "choose", q: "Which is the mildest advice?", answer: "{休|やす}んだほうがいいよ。", options: ["{休|やす}んだほうがいいよ。","{休|やす}むべきだ。","{休|やす}まなければならない。","{休|やす}みなさい。"] }
    ]
  },
  {
    id: "L212-2",
    lesson: 212,
    title: "～ないわけにはいかない",
    meaning: "Have to, can't not do",
    explain: "Use V ない + わけにはいかない when social duty leaves you no choice but to do something.",
    examples: [
      { jp: "{親友|しんゆう}のけっこん{式|しき}だから、{行|い}かないわけにはいかない。", ro: "Shin'yū no kekkonshiki da kara, ikanai wake ni wa ikanai.", en: "It's my best friend's wedding, so I can't not go." },
      { jp: "{親|おや}が{病気|びょうき}なので、{国|くに}へ{帰|かえ}らないわけにはいかない。", ro: "Oya ga byōki na node, kuni e kaeranai wake ni wa ikanai.", en: "My parent is ill, so I have to go back to my country." },
      { jp: "{先生|せんせい}に{頼|たの}まれたら、{引|ひ}き{受|う}けないわけにはいきません。", ro: "Sensei ni tanomaretara, hikiukenai wake ni wa ikimasen.", en: "If my teacher asks me, I can't refuse to take it on." }
    ],
    drills: [
      { type: "fill", jp: "じょうしの{頼|たの}みだから、{引|ひ}き{受|う}け＿＿わけにはいかない。", answer: "ない", options: ["ない","た","る","て"], en: "It's my boss's request, so I have to accept it." },
      { type: "fill", jp: "{明日|あした}は{試験|しけん}なので、{勉強|べんきょう}し＿＿。", answer: "ないわけにはいかない", options: ["ないわけにはいかない","なくわけにはいかない","ないわけにはいく","たわけにはいかない"], en: "Tomorrow's the exam, so I have no choice but to study." },
      { type: "order", tiles: ["{親|おや}の","{世話|せわ}を","しない","わけには","いかない"], en: "I have to take care of my parents." },
      { type: "order", tiles: ["みんなが","{待|ま}っているから","{行|い}かない","わけには","いかない"], en: "Everyone's waiting, so I've got to go." },
      { type: "choose", q: "What does 帰らないわけにはいかない mean?", answer: "I have to go home", options: ["I have to go home","I can't go home","I don't want to go home","I've never gone home"] },
      { type: "choose", q: "What feeling does it usually carry?", answer: "Reluctant duty", options: ["Reluctant duty","Pure joy","Surprise","Boasting"] }
    ]
  },
  {
    id: "L212-3",
    lesson: 212,
    title: "～ことだ",
    meaning: "The best thing is to (advice)",
    explain: "Use V る or V ない + ことだ to give direct advice, usually from someone with experience.",
    examples: [
      { jp: "{元気|げんき}でいたいなら、{毎日|まいにち}{歩|ある}くことだ。", ro: "Genki de itai nara, mainichi aruku koto da.", en: "If you want to stay well, walk every day." },
      { jp: "{大学|だいがく}に{合格|ごうかく}したければ、{毎日|まいにち}{勉強|べんきょう}することだ。", ro: "Daigaku ni gōkaku shitakereba, mainichi benkyō suru koto da.", en: "If you want to get into university, study every day." },
      { jp: "{失敗|しっぱい}しても、あきらめないことだ。", ro: "Shippai shite mo, akiramenai koto da.", en: "Even if you fail, the important thing is not to give up." }
    ],
    drills: [
      { type: "fill", jp: "{日本語|にほんご}が{上手|じょうず}になりたければ、{毎日|まいにち}{話|はな}す＿＿だ。", answer: "こと", options: ["こと","たび","うち","わけ"], en: "If you want to get good at Japanese, speak it every day." },
      { type: "fill", jp: "{人|ひと}のことは{気|き}にし＿＿ことだ。", answer: "ない", options: ["ない","た","て","ます"], en: "The best thing is not to worry about other people." },
      { type: "order", tiles: ["{元気|げんき}でいたい","なら","よく","{寝|ね}る","ことだ"], en: "If you want to stay well, get plenty of sleep." },
      { type: "order", tiles: ["{試験|しけん}の{前|まえ}は","むりをしない","ことだ"], en: "Before an exam, the best thing is not to overdo it." },
      { type: "choose", q: "Who can use ～ことだ naturally?", answer: "An experienced person advising a junior", options: ["An experienced person advising a junior","A student speaking to a professor","A clerk speaking to a customer","A child speaking to a grandparent"] },
      { type: "choose", q: "Which gives advice correctly?", answer: "{早|はや}く{寝|ね}ることだ。", options: ["{早|はや}く{寝|ね}ることだ。","{早|はや}く{寝|ね}たことだ。","{早|はや}く{寝|ね}てことだ。","{早|はや}く{寝|ね}ますことだ。"] }
    ]
  },
  {
    id: "L212-4",
    lesson: 212,
    title: "～ものだ",
    meaning: "That's how it is, used to, should",
    explain: "Use ～ものだ to state a general truth, or with V た to remember something you often did in the past.",
    examples: [
      { jp: "{人|ひと}は{年|とし}をとると、{昔|むかし}のことを{思|おも}い{出|だ}すものだ。", ro: "Hito wa toshi o toru to, mukashi no koto o omoidasu mono da.", en: "As people age, they tend to think back on the past." },
      { jp: "{子|こ}どものころ、よくこの{川|かわ}で{泳|およ}いだものだ。", ro: "Kodomo no koro, yoku kono kawa de oyoida mono da.", en: "As a child, I often swam in this river." },
      { jp: "{目上|めうえ}の{人|ひと}には、ていねいに{話|はな}すものだ。", ro: "Meue no hito ni wa, teinei ni hanasu mono da.", en: "You should speak politely to your elders." }
    ],
    drills: [
      { type: "fill", jp: "{学生|がくせい}のころは、よく{夜中|よなか}まで{話|はな}した＿＿だ。", answer: "もの", options: ["もの","べき","たび","うち"], en: "As students, we often talked into the night." },
      { type: "fill", jp: "{若|わか}いころは、よく{旅行|りょこう}を＿＿ものだ。", answer: "した", options: ["した","する","して","しない"], en: "When I was young, I often used to travel." },
      { type: "order", tiles: ["{人|ひと}の","{心|こころ}は","{変|か}わる","ものだ"], en: "People's hearts change. That's just how it is." },
      { type: "order", tiles: ["{昔|むかし}は","この{公園|こうえん}で","よく","{遊|あそ}んだ","ものだ"], en: "I often used to play in this park." },
      { type: "choose", q: "Which shows a fond memory?", answer: "{子|こ}どものころ、よく{魚|さかな}をとったものだ。", options: ["{子|こ}どものころ、よく{魚|さかな}をとったものだ。","{人|ひと}は{失敗|しっぱい}するものだ。","{親|おや}は{心配|しんぱい}するものだ。","{約束|やくそく}は{守|まも}るものだ。"] },
      { type: "choose", q: "Which is correct?", answer: "{昔|むかし}はよくこの{店|みせ}に{来|き}たものだ。", options: ["{昔|むかし}はよくこの{店|みせ}に{来|き}たものだ。","{昨日|きのう}この{店|みせ}に{来|き}たものだ。","{今|いま}この{店|みせ}に{来|き}たものだ。","{明日|あした}この{店|みせ}に{来|く}るものだ。"] }
    ]
  }
]);

window.GRAMMAR_STUDY = Object.assign(window.GRAMMAR_STUDY || {}, {
  "L201-1": {
    formula: ["V る / V ている + うちに","いA / なA な + うちに","N の + うちに"],
    points: ["The state will end soon, so act now.","The second half is often a wish, plan or request.","～ているうちに: a change happens without you noticing."],
    tables: [
      { title: "How each word type connects", headers: ["Type","Example"], rows: [["Verb","日本にいるうちに"],["I-adjective","若いうちに"],["Na-adjective","元気なうちに"],["Noun","学生のうちに"]] },
      { title: "Two uses", headers: ["Japanese","Meaning"], rows: [["熱いうちに食べよう。","Let's eat while it's hot."],["話しているうちに、友だちになった。","As we talked, we became friends."]] }
    ],
    mistakes: [
      { bad: "けっこんするうちに、お金をためたい。", good: "けっこんする前に、お金をためたい。", why: "A single future event takes 前に, not うちに." }
    ],
    tip: "Ask yourself: will this state end soon? If yes, うちに fits."
  },
  "L201-2": {
    formula: ["V ない + うちに"],
    points: ["It means before X happens, while X has not come yet.","X is usually something you want to avoid.","It adds more hurry than 前に.","知らないうちに means before I knew it."],
    tables: [
      { title: "前に or ないうちに", headers: ["Japanese","Feeling"], rows: [["雨が降る前に帰ろう。","Plain order of events"],["雨が降らないうちに帰ろう。","Hurry, it may rain soon"]] }
    ],
    mistakes: [
      { bad: "雨が降るないうちに帰ろう。", good: "雨が降らないうちに帰ろう。", why: "Use the real ない-form of the verb." }
    ],
    tip: "Think: before it's too late."
  },
  "L201-3": {
    formula: ["N の + 最中に","V ている + 最中に","N の / V ている + 最中だ"],
    points: ["It points to the peak moment of an action.","The second half is usually an interruption or surprise.","Ending in 最中だ means I'm busy with it now.","It needs an action in progress, not a long state."],
    tables: [
      { title: "間に or 最中に", headers: ["Japanese","Feeling"], rows: [["留守の間に、友だちが来た。","Any time during a period"],["試合の最中に、雨が降り出した。","Right at the busiest moment"]] }
    ],
    mistakes: [
      { bad: "若い最中に、旅行したい。", good: "若いうちに、旅行したい。", why: "最中 needs an action in progress, not a state." },
      { bad: "会議最中に電話が鳴った。", good: "会議の最中に電話が鳴った。", why: "Put の between a noun and 最中." }
    ],
    tip: "Picture someone knocking just when you're busiest. That moment is 最中."
  },
  "L201-4": {
    formula: ["V た + とたん(に)"],
    points: ["Two events happen almost at once.","The second event is unexpected.","The second half can't be your plan or request.","に is optional. The meaning stays the same."],
    tables: [
      { title: "What can follow とたん", headers: ["Second half","Fits?"], rows: [["雨が降り出した","Yes, it just happened"],["映画を見よう","No, this is a plan"],["手伝ってください","No, this is a request"]] }
    ],
    mistakes: [
      { bad: "家に帰ったとたんに、宿題をしよう。", good: "家に帰ったら、すぐ宿題をしよう。", why: "とたん can't end in a plan." },
      { bad: "ドアを開けるとたん、モチが来た。", good: "ドアを開けたとたん、モチが来た。", why: "The verb is always in た-form." }
    ],
    tip: "Use it for surprises: first action, then bang!"
  },
  "L202-1": {
    formula: ["V / いA plain + おかげで","なA な + おかげで","N の + おかげで"],
    points: ["It marks a good result and shows thanks.","おかげだ can end a sentence: 母のおかげだ。","おかげさまで is the polite set phrase.","With a bad result it sounds sarcastic."],
    tables: [
      { title: "おかげで and せいで", headers: ["Pattern","Result","Feeling"], rows: [["おかげで","Good","Thanks"],["せいで","Bad","Blame"]] }
    ],
    mistakes: [
      { bad: "雨のおかげで、試合が中止になって残念だ。", good: "雨のせいで、試合が中止になって残念だ。", why: "A bad result takes せいで, unless you mean sarcasm." },
      { bad: "先生おかげで合格した。", good: "先生のおかげで合格した。", why: "Nouns need の." }
    ],
    tip: "If you'd say thank you for it, use おかげで."
  },
  "L202-2": {
    formula: ["V / いA plain + せいで","なA な + せいで","N の + せいで"],
    points: ["The result is bad or unwanted.","It carries blame, so it sounds critical.","せいか means maybe because.","せいにする means to blame someone."],
    tables: [
      { title: "The せい family", headers: ["Pattern","Meaning","Example"], rows: [["せいで","Because of (blame)","雨のせいで遅れた。"],["せいか","Maybe because","年のせいか、疲れやすい。"],["せいにする","Blame someone","人のせいにしないで。"]] }
    ],
    mistakes: [
      { bad: "兄のせいで、合格できました。", good: "兄のおかげで、合格できました。", why: "A good result takes おかげで." }
    ],
    tip: "Saying あなたのせいで to someone's face is a strong accusation."
  },
  "L202-3": {
    formula: ["V / いA plain + くせに","なA な + くせに","N の + くせに"],
    points: ["It shows blame, scorn or annoyance.","Both halves need the same person as subject.","Don't use it about yourself.","It's too strong for superiors or polite talk."],
    tables: [
      { title: "のに and くせに", headers: ["Pattern","Feeling","Subject"], rows: [["のに","Surprise, disappointment","Can differ"],["くせに","Blame, scorn","Same person, not you"]] }
    ],
    mistakes: [
      { bad: "私は学生のくせに、勉強しない。", good: "私は学生なのに、勉強しない。", why: "Don't use くせに about yourself." },
      { bad: "春のくせに、寒い。", good: "春なのに、寒い。", why: "くせに needs a person as subject." }
    ],
    tip: "Say it only with people close to you, because it stings."
  },
  "L202-4": {
    formula: ["Plain + からこそ","なA / N + だからこそ","～からこそ、～のだ"],
    points: ["こそ puts strong stress on the reason.","It's a deep or positive reason, not an excuse.","Sentences often end with のだ or のです.","The result is often the opposite of what people expect."],
    tables: [
      { title: "から and からこそ", headers: ["Japanese","Feeling"], rows: [["忙しいから、行けない。","Plain reason"],["忙しいからこそ、休みが大切だ。","This reason above all"]] }
    ],
    mistakes: [
      { bad: "雨だからこそ、試合は中止です。", good: "雨だから、試合は中止です。", why: "An ordinary reason needs plain から." },
      { bad: "好きなからこそ、続ける。", good: "好きだからこそ、続ける。", why: "なA and nouns take だ before からこそ." }
    ],
    tip: "Use it when people expect the opposite conclusion."
  },
  "L203-1": {
    formula: ["V て + からでないと + negative","V て + からでなければ + negative"],
    points: ["X must come first.","The second half means impossible, forbidden or difficult.","からでなければ is a stiffer version."],
    tables: [
      { title: "てから and てからでないと", headers: ["Japanese","Feeling"], rows: [["手を洗ってから、食べる。","Plain order"],["手を洗ってからでないと、食べられない。","Strong condition"]] }
    ],
    mistakes: [
      { bad: "調べてからでないと、すぐ答えます。", good: "調べてからでないと、答えられません。", why: "The second half must be negative or impossible." },
      { bad: "見るからでないと、わからない。", good: "見てからでないと、わからない。", why: "Use the て-form." }
    ],
    tip: "Think: no X, no Y."
  },
  "L203-2": {
    formula: ["Plain + みたいだ","N / なA + みたいだ","N + みたいに + V, N + みたいな + N"],
    points: ["It's the casual form of ようだ.","It can guess from evidence or compare two things.","Nouns and なA join directly, with no な or の.","みたいに goes before verbs, みたいな before nouns."],
    tables: [
      { title: "Three uses", headers: ["Use","Japanese","Meaning"], rows: [["Guess","外は雨みたいだ。","It seems to be raining."],["Comparison","あの子は人形みたいだ。","That child looks like a doll."],["Example","カレーみたいなからいものが好きだ。","I like spicy things such as curry."]] },
      { title: "ようだ and みたいだ", headers: ["Word type","ようだ","みたいだ"], rows: [["Noun","雨のようだ","雨みたいだ"],["Na-adjective","静かなようだ","静かみたいだ"],["Verb","来るようだ","来るみたいだ"]] }
    ],
    mistakes: [
      { bad: "雨のみたいだ。", good: "雨みたいだ。", why: "Nouns join directly." },
      { bad: "元気なみたいだ。", good: "元気みたいだ。", why: "なA drop な." }
    ],
    tip: "Use ようだ in writing and みたいだ with friends."
  },
  "L203-3": {
    formula: ["V / いA plain + わりに","なA な + わりに","N の + わりに"],
    points: ["The first part sets an expectation.","The result goes above or below that expectation.","Nouns are often scale words, like 年 or 値段.","It can praise or complain, depending on context."],
    tables: [
      { title: "Common uses", headers: ["Japanese","Meaning"], rows: [["年のわりに若い。","Young for their age."],["値段のわりにおいしい。","Tasty for the price."],["勉強したわりに、点が悪かった。","I studied, but my score was poor."]] }
    ],
    mistakes: [
      { bad: "値段わりにおいしい。", good: "値段のわりにおいしい。", why: "Nouns need の." },
      { bad: "安いのわりに、おいしい。", good: "安いわりに、おいしい。", why: "いA join directly." }
    ],
    tip: "年のわりに若いですね is a common compliment."
  },
  "L203-4": {
    formula: ["V ば + V る + ほど","いA ければ + いA い + ほど","なA なら + なA な + ほど"],
    points: ["The same word appears twice.","The second half grows together with the first.","The ば part can be dropped: 考えるほど.","It works only for things that can increase."],
    tables: [
      { title: "How each word type connects", headers: ["Type","Japanese"], rows: [["Verb","飲めば飲むほど"],["I-adjective","安ければ安いほど"],["Na-adjective","静かなら静かなほど"]] }
    ],
    mistakes: [
      { bad: "安いば安いほどいい。", good: "安ければ安いほどいい。", why: "いA take ければ." },
      { bad: "静かば静かほどいい。", good: "静かなら静かなほどいい。", why: "なA use なら, then な." }
    ],
    tip: "Practise it as a chain: 話せば話すほど上手になる。"
  },
  "L204-1": {
    formula: ["V る + ようになる","V potential + ようになる","V ない → V なくなる"],
    points: ["It shows a change of habit or ability over time.","Potential verbs show a new ability.","For a stopped habit, なくなる is the usual form."],
    tables: [
      { title: "Three kinds of change", headers: ["Change","Japanese","Meaning"], rows: [["New ability","泳げるようになった。","I became able to swim."],["New habit","朝ごはんを食べるようになった。","I've started eating breakfast."],["Stopped habit","お酒を飲まなくなった。","I stopped drinking."]] }
    ],
    mistakes: [
      { bad: "毎日そうじするになった。", good: "毎日そうじするようになった。", why: "Verbs need ように before なる." },
      { bad: "上手になるようになった。", good: "上手になった。", why: "Adjectives take に + なる directly." }
    ],
    tip: "Use it for your own progress: 日本語が話せるようになりました。"
  },
  "L204-2": {
    formula: ["V ます-stem + がち","N + がち","～がちな + N"],
    points: ["This often happens, even if you don't intend it.","Usually it's something undesirable.","Attach it to the ます-stem or a few nouns.","Fixed nouns include 病気がち and 留守がち."],
    tables: [
      { title: "Common words", headers: ["Japanese","Meaning"], rows: [["忘れがち","Tend to forget"],["遅れがち","Tend to be late"],["病気がち","Often ill"],["留守がち","Often away from home"]] }
    ],
    mistakes: [
      { bad: "忘れるがちです。", good: "忘れがちです。", why: "Use the ます-stem." },
      { bad: "彼は勉強しがちだ。", good: "彼はよく勉強する。", why: "Good habits don't take がち." }
    ],
    tip: "Before a noun, use がちな: ありがちなまちがい (a very common mistake)."
  },
  "L204-3": {
    formula: ["V る / V た + ついでに","N の + ついでに"],
    points: ["The first action is the main one.","The second action is an easy extra.","Nouns are action nouns, like 買い物 or 散歩.","ついでに can also start a sentence alone."],
    tables: [
      { title: "Main job and extra job", headers: ["Main action","Extra action"], rows: [["ゆうびん局へ行く","切手を買う"],["散歩をする","パンを買う"],["そうじをする","窓をふく"]] }
    ],
    mistakes: [
      { bad: "お茶を飲むついでに、新聞を読む。", good: "お茶を飲みながら、新聞を読む。", why: "Two things at the same moment take ながら." }
    ],
    tip: "Use it alone when adding a request: ついでにパンも買ってきて。"
  },
  "L204-4": {
    formula: ["V た + まま","V ない + まま","N の + まま, その + まま"],
    points: ["A state continues when it would normally change.","Verbs usually take the た-form.","It often shows something careless or a bit strange.","そのまま means as it is."],
    tables: [
      { title: "Common uses", headers: ["Japanese","Meaning"], rows: [["窓を開けたまま出かけた。","I went out leaving the window open."],["何も言わないまま帰った。","He left without saying anything."],["そのままでいいです。","It's fine as it is."]] }
    ],
    mistakes: [
      { bad: "電気をつけるまま寝た。", good: "電気をつけたまま寝た。", why: "Use the た-form." },
      { bad: "テレビを見たまま、ご飯を食べた。", good: "テレビを見ながら、ご飯を食べた。", why: "Two actions at once take ながら." }
    ],
    tip: "まま keeps a state. ながら runs two actions."
  },
  "L205-1": {
    formula: ["(もう少しで) V る + ところだった","～たら / ～ば、V る + ところだった"],
    points: ["It did not actually happen.","Usually it's a close escape from something bad.","もう少しで often comes first.","An if-clause can show what saved you."],
    tables: [
      { title: "ところ and tense", headers: ["Japanese","Meaning","Did it happen?"], rows: [["乗るところだ","About to get on","Not yet"],["乗ったところだ","Just got on","Yes, just now"],["乗るところだった","Nearly got on","No"]] }
    ],
    mistakes: [
      { bad: "もう少しで遅れたところだった。", good: "もう少しで遅れるところだった。", why: "Use the dictionary form, because it didn't happen." }
    ],
    tip: "Say 危なかった first and it sounds natural."
  },
  "L205-2": {
    formula: ["V / いA plain + ため(に)","なA な + ため(に)","N の + ため(に)"],
    points: ["It sounds formal, so notices and writing use it.","The second half can't be a suggestion.","The same word shows purpose after a dictionary verb.","Past verb + ため always means reason."],
    tables: [
      { title: "Reason or purpose", headers: ["Use","Japanese","Meaning"], rows: [["Reason","雪のため、遅れた。","I was late because of snow."],["Reason","ねぼうしたために、遅れた。","I was late because I overslept."],["Purpose","留学するために、働く。","I work in order to study abroad."]] }
    ],
    mistakes: [
      { bad: "雨のために、タクシーで行きましょう。", good: "雨だから、タクシーで行きましょう。", why: "ため can't end in a suggestion." },
      { bad: "台風ために、遅れた。", good: "台風のために、遅れた。", why: "Nouns need の." }
    ],
    tip: "Listen for のため in station announcements."
  },
  "L205-3": {
    formula: ["V る + たびに","N の + たびに"],
    points: ["Repetition is the core idea.","The second half is the same result each time.","Daily routines don't use it. Use 毎朝 and so on.","It often carries a feeling, like memory or surprise."],
    tables: [
      { title: "Saying every time", headers: ["Pattern","Feeling"], rows: [["たびに","Each time, often with a feeling"],["といつも","Always, as a general fact"],["毎朝","A regular schedule"]] }
    ],
    mistakes: [
      { bad: "朝起きるたびに、歯をみがく。", good: "毎朝、歯をみがく。", why: "A daily routine doesn't need たびに." },
      { bad: "見たたびに、思い出す。", good: "見るたびに、思い出す。", why: "Use the dictionary form." }
    ],
    tip: "Pair it with 思い出す, its classic partner."
  },
  "L205-4": {
    formula: ["N + によって","N + によって + 違う","N + による + N"],
    points: ["It has four uses: cause, means, difference and passive doer.","The cause use is formal, so news likes it.","With 違う, it means depending on.","Before a noun, use による."],
    tables: [
      { title: "Four uses", headers: ["Use","Japanese","Meaning"], rows: [["Cause","じしんによる火事","A fire caused by an earthquake"],["Means","話し合いによって決める。","We decide by discussion."],["Difference","人によって違う。","It varies from person to person."],["Passive doer","この本は有名な作家によって書かれた。","This book was written by a famous author."]] }
    ],
    mistakes: [
      { bad: "バスによって学校へ行く。", good: "バスで学校へ行く。", why: "Everyday transport takes で." },
      { bad: "人によって、同じだ。", good: "人によって違う。", why: "The second half must show variety." }
    ],
    tip: "If you see 違う, read によって as depending on."
  },
  "L206-1": {
    formula: ["V て + くる (up to now)","V て + いく (from now on)"],
    points: ["くる brings the change toward now.","いく sends the change into the future.","It works with change verbs: 増える, 変わる, なる.","くる also shows something has just begun."],
    tables: [
      { title: "Three uses", headers: ["Time","Japanese","Meaning"], rows: [["Up to now","寒くなってきた。","It has got colder."],["From now on","寒くなっていく。","It will keep getting colder."],["Just started","雨が降ってきた。","It has started raining."]] }
    ],
    mistakes: [
      { bad: "町が変わりてきた。", good: "町が変わってきた。", why: "Use the て-form." },
      { bad: "だんだん暗いなってきた。", good: "だんだん暗くなってきた。", why: "いA change to く before なる." }
    ],
    tip: "Imagine a timeline: くる arrives at you, いく moves away."
  },
  "L206-2": {
    formula: ["V / いA plain + らしい","なA / N + らしい"],
    points: ["The information comes from outside, not your own view.","You keep a step away from the claim.","Nouns and なA drop だ.","It conjugates like an いA: らしかった, らしくて."],
    tables: [
      { title: "Similar patterns", headers: ["Pattern","Source","Feeling"], rows: [["そうだ","A clear report","Passing on facts"],["らしい","Heard or read","Not my claim"],["ようだ","What I see","My judgement"],["みたいだ","What I see","Casual judgement"]] }
    ],
    mistakes: [
      { bad: "あの店は休みだらしい。", good: "あの店は休みらしい。", why: "Drop だ before らしい." },
      { bad: "私は来年けっこんするらしい。", good: "私は来年けっこんするつもりだ。", why: "Don't use らしい for your own plans." }
    ],
    tip: "Use it for rumours and second-hand news."
  },
  "L206-3": {
    formula: ["N + にしたがって (follow)","V る / N + にしたがって (as)"],
    points: ["Follow: rules, orders, signs or advice.","As: one change moves along with another.","In the second use, both halves are gradual changes."],
    tables: [
      { title: "Two uses", headers: ["Use","Japanese","Meaning"], rows: [["Follow","地図にしたがって歩く。","Walk following the map."],["Follow","ルールにしたがう。","Follow the rules."],["As","高く登るにしたがって、寒くなる。","The higher you climb, the colder it gets."]] }
    ],
    mistakes: [
      { bad: "地図をしたがって歩く。", good: "地図にしたがって歩く。", why: "The particle is に." },
      { bad: "駅に着くにしたがって、電話した。", good: "駅に着いて、電話した。", why: "A one-time action doesn't fit." }
    ],
    tip: "The verb したがう (to follow) is the root of this pattern."
  },
  "L206-4": {
    formula: ["N + とともに","V る + とともに"],
    points: ["It's formal, for writing and speeches.","It has three uses: with someone, at once, and as.","In casual talk, use と一緒に."],
    tables: [
      { title: "Three uses", headers: ["Use","Japanese","Meaning"], rows: [["With","友人とともに店を始めた。","I started a shop with a friend."],["At the same time","ベルが鳴るとともに、ドアが開いた。","The door opened as the bell rang."],["As a change","年をとるとともに、体がよわくなる。","The body weakens with age."]] }
    ],
    mistakes: [
      { bad: "きのう、友だちとともにラーメンを食べたよ。", good: "きのう、友だちと一緒にラーメンを食べたよ。", why: "Too formal for casual talk." },
      { bad: "町が大きくなったとともに、店が増えた。", good: "町が大きくなるとともに、店が増えた。", why: "Use the dictionary form." }
    ],
    tip: "Save とともに for essays and speeches."
  },
  "L207-1": {
    formula: ["V / いA plain + 反面","なA な + 反面","N である + 反面"],
    points: ["One subject shows two opposite sides.","Think pros and cons of a single thing.","It sounds formal. Speech often uses でも or けど."],
    tables: [
      { title: "Three kinds of contrast", headers: ["Pattern","What it contrasts"], rows: [["反面","Two sides of one thing"],["一方で","Two things, or two sides"],["に対して","Two different things"]] }
    ],
    mistakes: [
      { bad: "兄は背が高い反面、弟はひくい。", good: "兄は背が高いのに対して、弟はひくい。", why: "反面 describes one subject, not two." },
      { bad: "便利の反面、高い。", good: "便利な反面、高い。", why: "なA take な." }
    ],
    tip: "Use it when writing about the good and bad of something."
  },
  "L207-2": {
    formula: ["V / いA plain + ものの","なA な + ものの","N である + ものの"],
    points: ["The first half is true, but the second falls short.","It's slightly formal and common in writing.","V た + ものの fits plans that stalled.","The second half can't be a request or plan."],
    tables: [
      { title: "Saying although", headers: ["Pattern","Feeling"], rows: [["のに","Surprise or complaint"],["けれども","Neutral but"],["ものの","I admit it, but things stalled"]] }
    ],
    mistakes: [
      { bad: "高いものの、買ってください。", good: "高いけれど、買ってください。", why: "No requests after ものの." },
      { bad: "便利のものの、高い。", good: "便利なものの、高い。", why: "なA take な." }
    ],
    tip: "The set phrase とはいうものの means that said."
  },
  "L207-3": {
    formula: ["V る + わけにはいかない","V る + わけにはいきません"],
    points: ["You could do it, but it wouldn't be right.","The reason is duty, morals or the situation.","It isn't about ability, so don't use it for skills."],
    tables: [
      { title: "Can't: ability or duty", headers: ["Reason","Japanese","Meaning"], rows: [["No skill","泳げない。","I can't swim."],["Not right","休むわけにはいかない。","I can't take time off."]] }
    ],
    mistakes: [
      { bad: "足が痛いので、走るわけにはいかない。", good: "足が痛いので、走れない。", why: "Physical inability takes the potential form." },
      { bad: "買ったわけにはいかない。", good: "買うわけにはいかない。", why: "Use the dictionary form." }
    ],
    tip: "Could I? Yes. Should I? No. Then use わけにはいかない."
  },
  "L207-4": {
    formula: ["N の + かわりに","V / いA plain + かわりに","なA な + かわりに"],
    points: ["Replacement: B instead of A.","Exchange: you do something in return.","Balance: a good point comes with a bad point.","It is also written 代わりに."],
    tables: [
      { title: "Three uses", headers: ["Use","Japanese","Meaning"], rows: [["Replacement","父のかわりに、私が行く。","I'll go in place of my father."],["Exchange","教えるかわりに、手伝って。","I'll teach you, so help me in return."],["Balance","安いかわりに、小さい。","It's cheap, but small."]] }
    ],
    mistakes: [
      { bad: "ペンかわりに、えんぴつを使う。", good: "ペンのかわりに、えんぴつを使う。", why: "Nouns need の." }
    ],
    tip: "Use it to make a deal: AするかわりにBして。"
  },
  "L208-1": {
    formula: ["N + っぽい","いA stem + っぽい","V ます-stem + っぽい"],
    points: ["It conjugates like an いA.","With nouns and colours: looks like, has a lot of.","With verbs: often does this.","It's casual and often a little negative."],
    tables: [
      { title: "Common words", headers: ["Type","Japanese","Meaning"], rows: [["Colour","黒っぽい","Blackish"],["Noun","子どもっぽい","Childish"],["Adjective","安っぽい","Cheap-looking"],["Verb","怒りっぽい","Quick to anger"]] }
    ],
    mistakes: [
      { bad: "白いっぽいシャツ", good: "白っぽいシャツ", why: "Drop the い." },
      { bad: "忘れるっぽい人", good: "忘れっぽい人", why: "Use the ます-stem." }
    ],
    tip: "子どもっぽい is criticism. 子どもらしい is praise."
  },
  "L208-2": {
    formula: ["N + らしい + N","N + らしく + V","N + らしくない"],
    points: ["It means having the ideal traits of that noun.","It's often praise.","らしくない shows surprise or disappointment.","自分らしい means true to yourself."],
    tables: [
      { title: "Three similar words", headers: ["Word","Feeling","Example"], rows: [["らしい","Typical, as it should be","男らしい"],["っぽい","Looks like, but isn't","子どもっぽい"],["みたい","Resembles something else","子どもみたい"]] },
      { title: "Two kinds of らしい", headers: ["Japanese","Meaning"], rows: [["彼は本当に男らしい。","He is really manly."],["あの人は男の人らしい。","That person is apparently a man."]] }
    ],
    mistakes: [
      { bad: "春のらしい天気", good: "春らしい天気", why: "The noun joins directly." },
      { bad: "夏らしいな天気", good: "夏らしい天気", why: "らしい is an いA, so no な." }
    ],
    tip: "自分らしい服 is a handy phrase for talking about style."
  },
  "L208-3": {
    formula: ["V ます-stem + 気味","N + 気味","気味だ / 気味で / 気味の + N"],
    points: ["It marks a small amount of a bad state.","It's read ぎみ here.","Common words: かぜ気味, 疲れ気味, 太り気味, 遅れ気味.","It doesn't fit good states."],
    tables: [
      { title: "気味, がち and っぽい", headers: ["Word","Meaning","Example"], rows: [["気味","A bit, right now","疲れ気味"],["がち","Often happens","忘れがち"],["っぽい","Looks like, tends to","忘れっぽい"]] }
    ],
    mistakes: [
      { bad: "疲れる気味です。", good: "疲れ気味です。", why: "Use the ます-stem." },
      { bad: "元気気味です。", good: "少し元気です。", why: "It doesn't fit good states." }
    ],
    tip: "かぜ気味 is the phrase you'll use most."
  },
  "L208-4": {
    formula: ["V ます-stem + ながら(も)","いA + ながら(も)","なA / N + ながら(も)"],
    points: ["This isn't the while-doing ながら.","Both halves have the same subject.","Common partners: 知る, 思う, ある, いる.","残念ながら means unfortunately."],
    tables: [
      { title: "Two kinds of ながら", headers: ["Use","Japanese","Meaning"], rows: [["While doing","歩きながら話す。","Talk while walking."],["Although","知っていながら、言わなかった。","Though I knew, I didn't say."],["Although","残念ながら、行けません。","Unfortunately, I can't go."]] }
    ],
    mistakes: [
      { bad: "小さいのながらも、よく売れる。", good: "小さいながらも、よく売れる。", why: "いA join directly." },
      { bad: "私は知りながら、彼は言わなかった。", good: "私は知っていたが、彼は言わなかった。", why: "Both halves need the same subject." }
    ],
    tip: "If the two halves clash in meaning, read it as although."
  },
  "L209-1": {
    formula: ["V る + 一方だ"],
    points: ["It needs a verb of change.","The change goes one way, with no sign of stopping.","It's usually a bad trend."],
    tables: [
      { title: "Common partners", headers: ["Japanese","Meaning"], rows: [["増える一方だ","Keeps increasing"],["へる一方だ","Keeps decreasing"],["上がる一方だ","Keeps rising"],["悪くなる一方だ","Keeps getting worse"]] }
    ],
    mistakes: [
      { bad: "毎日勉強する一方だ。", good: "毎日勉強している。", why: "It needs a verb of change." },
      { bad: "増えた一方だ。", good: "増える一方だ。", why: "Use the dictionary form." }
    ],
    tip: "Picture a graph line that never turns back."
  },
  "L209-2": {
    formula: ["V る + につれて","N + につれて"],
    points: ["Both halves are gradual changes.","The second half can't be a plan or request.","A noun must show change, like 変化."],
    tables: [
      { title: "Three ways to say as", headers: ["Pattern","Follow a rule?","Gradual change?"], rows: [["につれて","No","Yes"],["にしたがって","Yes","Yes"],["とともに","No","Yes"]] }
    ],
    mistakes: [
      { bad: "年をとるにつれて、運動をしよう。", good: "年をとるにつれて、運動が大切になる。", why: "No plans or requests." },
      { bad: "三時になるにつれて、帰った。", good: "三時になって、帰った。", why: "A one-time event doesn't fit." }
    ],
    tip: "Both halves should sound like slow slides, not jumps."
  },
  "L209-3": {
    formula: ["Plain + のに対して (contrast)","N + に対して (toward)","Number + に対して (ratio)"],
    points: ["Contrast: two different subjects.","Target: who a feeling or action is aimed at.","Ratio: per so many.","Before a noun, use に対する."],
    tables: [
      { title: "Three uses", headers: ["Use","Japanese","Meaning"], rows: [["Contrast","東京は高いのに対して、ここは安い。","Tokyo is expensive, whereas here is cheap."],["Target","先生に対して失礼だ。","It's rude to the teacher."],["Ratio","十人に対して一人","One for every ten people"]] }
    ],
    mistakes: [
      { bad: "兄は背が高いに対して、弟はひくい。", good: "兄は背が高いのに対して、弟はひくい。", why: "After a clause, add の." }
    ],
    tip: "Spot the の: のに対して usually marks a contrast."
  },
  "L209-4": {
    formula: ["N + だらけ","N + だらけの + N","N + だらけだ / だらけで / だらけになる"],
    points: ["It means too many, or all over the surface.","It's usually something unpleasant.","Only nouns come before it."],
    tables: [
      { title: "Saying full of", headers: ["Word","Feeling","Example"], rows: [["だらけ","Too many, unpleasant","ごみだらけ"],["いっぱい","Neutral, full","人でいっぱい"],["ばかり","Only that","ごみばかり"]] }
    ],
    mistakes: [
      { bad: "部屋が花だらけで、きれいだ。", good: "部屋が花でいっぱいで、きれいだ。", why: "だらけ sounds unpleasant." },
      { bad: "きたないだらけの部屋", good: "ごみだらけの部屋", why: "Only nouns come before it." }
    ],
    tip: "Common words: 間違いだらけ, ごみだらけ, どろだらけ."
  },
  "L210-1": {
    formula: ["V / いA plain + にもかかわらず","N / なA (である) + にもかかわらず"],
    points: ["It's formal, for writing and speeches.","The second half is an unexpected result.","Requests and wishes can't follow.","It feels more objective than のに."],
    tables: [
      { title: "のに and にもかかわらず", headers: ["Pattern","Style"], rows: [["のに","Everyday, shows feeling"],["にもかかわらず","Formal, more objective"]] }
    ],
    mistakes: [
      { bad: "雨にもかかわらず、来てください。", good: "雨ですが、来てください。", why: "No requests after it." },
      { bad: "雨にかかわらず、みんな来た。", good: "雨にもかかわらず、みんな来た。", why: "Without も, it means regardless of." }
    ],
    tip: "News reports love this pattern."
  },
  "L210-2": {
    formula: ["V て + 以来","N + 以来"],
    points: ["The first action is a clear past point.","The second half continues until now.","It often goes with ずっと or ～ていない.","It doesn't fit very recent events like きのう."],
    tables: [
      { title: "てから and て以来", headers: ["Pattern","Time feeling"], rows: [["てから","After that, any result"],["て以来","Since then, continuing until now"]] }
    ],
    mistakes: [
      { bad: "きのう来て以来、頭が痛い。", good: "きのうから、頭が痛い。", why: "て以来 needs a longer stretch of time." },
      { bad: "始めた以来、続けている。", good: "始めて以来、続けている。", why: "Use the て-form." }
    ],
    tip: "Think of a long line from a past point to today."
  },
  "L210-3": {
    formula: ["Plain + ものだから","なA な / N な + ものだから","もので / もんだから"],
    points: ["It justifies what you did.","It suggests the result couldn't be helped.","The second half can't be an order or plan.","もんだから is the casual version."],
    tables: [
      { title: "Giving a reason", headers: ["Pattern","Feeling"], rows: [["から","Plain reason"],["ので","Soft reason"],["ものだから","Excuse, it couldn't be helped"]] }
    ],
    mistakes: [
      { bad: "雨なものだから、かさを持っていこう。", good: "雨だから、かさを持っていこう。", why: "No plans after it." },
      { bad: "休みだものだから、寝ていた。", good: "休みなものだから、寝ていた。", why: "Nouns and なA take な." }
    ],
    tip: "Use もので when apologising to a superior for being late."
  },
  "L210-4": {
    formula: ["V / いA plain + どころか","なA / N + どころか","N + どころではない"],
    points: ["It denies what the listener expects.","The opposite, or something stronger, is true.","The second half often uses も or さえ.","どころではない means it's no time for that."],
    tables: [
      { title: "Two uses", headers: ["Japanese","Meaning"], rows: [["好きどころか、大きらいだ。","Far from liking it, I hate it."],["今は旅行どころではない。","Now is no time for travel."]] }
    ],
    mistakes: [
      { bad: "おいしいどころか、おいしい。", good: "おいしいどころか、まずかった。", why: "The second half must go the opposite way or further." }
    ],
    tip: "Read it as: not only not X, but actually Y."
  },
  "L211-1": {
    formula: ["Plain + って","Plain + って + 言う / 聞く","N + って + N"],
    points: ["It's the casual form of と, という and そうだ.","At the end of a sentence, it means hearsay.","って言ってた means someone said so.","Keep it out of formal speech and writing."],
    tables: [
      { title: "Casual and standard", headers: ["Casual","Standard","Meaning"], rows: [["雨だって。","雨だそうです。","They say it will rain."],["行くって言ってた。","行くと言っていました。","He said he'd go."],["モチって猫","モチという猫","A cat called Mochi"]] }
    ],
    mistakes: [
      { bad: "部長、明日は雨だって。", good: "部長、明日は雨だそうです。", why: "Too casual for your boss." }
    ],
    tip: "A rising って？ asks for confirmation: you mean ...?"
  },
  "L211-2": {
    formula: ["Plain + とか","Plain + とか + 聞く / 言う"],
    points: ["It's vaguer and softer than そうだ.","You aren't sure of the details.","It's common in small talk.","Nouns and なA take だ: 休みだとか."],
    tables: [
      { title: "Two kinds of とか", headers: ["Use","Japanese","Meaning"], rows: [["Hearsay","けっこんするとか。","I heard they're getting married."],["List","犬とか猫とかが好きだ。","I like dogs, cats and so on."]] }
    ],
    mistakes: [
      { bad: "明日は雨だとかです。", good: "明日は雨だとか。", why: "End the sentence with とか." }
    ],
    tip: "Use it when you only half remember the news."
  },
  "L211-3": {
    formula: ["Plain + ということだ","～によると、～ということだ","A ということは、B ということだ"],
    points: ["It's hearsay, more formal than そうだ.","News and notices like it.","It can also be a conclusion: that means.","とのことだ is more formal still."],
    tables: [
      { title: "Hearsay from casual to formal", headers: ["Pattern","Style"], rows: [["って","Casual"],["そうだ","Neutral"],["ということだ","Formal, news and notices"],["とのことだ","Very formal, letters and messages"]] }
    ],
    mistakes: [
      { bad: "来週は休みだということだと思う。", good: "来週は休みだと思う。", why: "It reports others' words, not your opinion." }
    ],
    tip: "Pair it with によると for a textbook-perfect report."
  },
  "L211-4": {
    formula: ["Plain + とのことだ","N + とのことだ","～から、～とのことです"],
    points: ["It passes on a message or report.","It's formal and common at work.","It shows the words come from someone else.","Nouns can join directly: 休みとのことです."],
    tables: [
      { title: "ということだ and とのことだ", headers: ["Pattern","Best for"], rows: [["ということだ","Reports and conclusions"],["とのことだ","Messages from someone"]] },
      { title: "Common phrases", headers: ["Japanese","Meaning"], rows: [["お元気とのことで、安心しました。","I'm relieved to hear you're well."],["よろしくとのことでした。","They send their regards."]] }
    ],
    mistakes: [
      { bad: "少し遅れるとのことだよ。", good: "少し遅れるって。", why: "Too formal for a friend." }
    ],
    tip: "Use it when you take a phone message at work."
  },
  "L212-1": {
    formula: ["V る + べきだ","V る + べきではない","する → すべきだ"],
    points: ["It's a strong opinion about what's right.","It's stronger than ほうがいい.","Rules and laws take なければならない.","The negative is べきではない, not ないべきだ.","べきだった means should have."],
    tables: [
      { title: "Saying should", headers: ["Pattern","Strength","Use"], rows: [["ほうがいい","Soft","Friendly advice"],["べきだ","Strong","Moral opinion"],["なければならない","Required","Rules and duty"]] }
    ],
    mistakes: [
      { bad: "行かないべきだ。", good: "行くべきではない。", why: "Make べき negative, not the verb." },
      { bad: "先生、もっと休むべきです。", good: "先生、少しお休みになってください。", why: "Too strong to say to a superior." }
    ],
    tip: "Save べきだ for opinions you'd defend in a debate."
  },
  "L212-2": {
    formula: ["V ない + わけにはいかない","V ない + わけにはいきません"],
    points: ["The double negative means must.","The reason is social or moral duty.","It often sounds reluctant."],
    tables: [
      { title: "Mind the first verb", headers: ["Japanese","Meaning"], rows: [["行くわけにはいかない。","I can't go."],["行かないわけにはいかない。","I have to go."]] }
    ],
    mistakes: [
      { bad: "行かなくわけにはいかない。", good: "行かないわけにはいかない。", why: "Use the plain ない-form." }
    ],
    tip: "Not doing it isn't an option, whether you like it or not."
  },
  "L212-3": {
    formula: ["V る + ことだ","V ない + ことだ"],
    points: ["It's direct advice.","The speaker has experience or authority.","It often follows ～たければ or ～なら.","Don't use it to superiors."],
    tables: [
      { title: "Giving advice", headers: ["Pattern","Feeling"], rows: [["ほうがいい","Friendly suggestion"],["ことだ","Experienced advice"],["べきだ","Moral opinion"]] }
    ],
    mistakes: [
      { bad: "先生、もっと休むことです。", good: "先生、少しお休みになってください。", why: "Too direct for a superior." },
      { bad: "あきらめるないことだ。", good: "あきらめないことだ。", why: "Use the real ない-form." }
    ],
    tip: "Imagine a coach talking to a young player."
  },
  "L212-4": {
    formula: ["V る / いA + ものだ","V た + ものだ","V る + ものではない"],
    points: ["General truth: that's just how things are.","With た: a past habit remembered fondly.","Social norm: this is what people should do.","～ものではない means one shouldn't."],
    tables: [
      { title: "Three uses", headers: ["Use","Japanese","Meaning"], rows: [["Truth","時間は早くたつものだ。","Time passes quickly."],["Memory","よく遊んだものだ。","I often used to play."],["Norm","人の物は大切にするものだ。","You should take care of others' things."]] }
    ],
    mistakes: [
      { bad: "きのう川で泳いだものだ。", good: "きのう川で泳いだ。", why: "It needs a past habit, not one event." },
      { bad: "私は毎朝コーヒーを飲むものだ。", good: "私は毎朝コーヒーを飲む。", why: "Don't use it for a personal habit." }
    ],
    tip: "Add よく and 昔 to sound nostalgic."
  }
});

window.LESSON_GUIDE = Object.assign(window.LESSON_GUIDE || {}, {
  201: {
    can: ["Say you'll act while a state lasts","Say you'll act before something happens","Describe an interruption mid-action","Describe something that happened the moment you did something"],
    first: ["じこく","へいじつ","きゅうじつ","きかん","しめきり","げんざい","とうじ","いぜん","ちこく","やがて"],
    tip: "Compare うちに and 最中に: one tells you to hurry, the other reports an interruption."
  },
  202: {
    can: ["Thank someone for a good result","Blame someone for a bad result","Criticise someone close to you","Stress the real reason for something"],
    first: ["しんせき","そふ","そぼ","まご","ふうふ","おっと","つま","しんゆう","こいびと","おや"],
    tip: "Learn おかげで and せいで as a pair, because the only difference is good or bad."
  },
  203: {
    can: ["Say something must happen first","Guess or compare with みたいだ","Say a result beats or misses expectations","Say the more X, the more Y"],
    first: ["ざいりょう","あじみ","こむぎこ","しょうゆ","あぶら","にます","ゆでます","むきます","きざみます","さめます"],
    tip: "Say the ば～ほど chain out loud with five different words."
  },
  204: {
    can: ["Describe a change of habit or ability","Say what you tend to do","Mention a small extra job","Say you left something as it was"],
    first: ["かぐ","せんたく","そうじ","げんかん","ろうか","たたみ","おしいれ","かたづけます","すてます","ほします"],
    tip: "Describe how your own daily life has changed using ようになった and なくなった."
  },
  205: {
    can: ["Talk about a close escape","Understand reasons in announcements","Say what happens every time","Use によって for cause, means and difference"],
    first: ["じこ","じゅうたい","かたみち","おうふく","ていきけん","のりかえ","まんいん","しゅっぱつ","とうちゃく","こうそくどうろ"],
    tip: "Listen to station announcements in your head: のため and によって are everywhere."
  },
  206: {
    can: ["Describe how a town has changed","Pass on a rumour","Follow directions and instructions","Link two changes in formal style"],
    first: ["かど","つきあたり","しんごう","おうだんほどう","ばしょ","ほうこう","こうさてん","えきまえ","しょうてんがい","ちほう"],
    tip: "Use ～てきた about your own town to practise the first point right away."
  },
  207: {
    can: ["Give the good and bad of something","Say a plan stalled","Say you can't do something for social reasons","Talk about swaps and exchanges"],
    first: ["ねだん","わりびき","げんきん","おつり","りょうしゅうしょ","しょうひん","ぜいきん","ちょきん","さいふ","はらいます"],
    tip: "Keep 反面 for one subject and ものの for a plan that went nowhere."
  },
  208: {
    can: ["Describe colours and looks with っぽい","Say something is typical of its kind","Say you feel slightly off","Join two clashing facts"],
    first: ["もよう","そで","えり","ながそで","はんそで","まる","さんかく","しかく","こんいろ","はで"],
    tip: "Compare っぽい, らしい and みたい on the same noun, 子ども."
  },
  209: {
    can: ["Describe a trend that won't stop","Link two gradual changes","Give contrasts and ratios","Say something is full of unpleasant things"],
    first: ["すうじ","ごうけい","へいきん","わりあい","はんぶん","ばい","けいさん","ふえます","へります","すくなくとも"],
    tip: "Picture a graph for each point: one line, two lines, a ratio, a pile."
  },
  210: {
    can: ["Say something happened in spite of a fact","Say what has continued ever since","Give a polite excuse","Reject an idea strongly"],
    first: ["しゅみ","まつり","かいじょう","はくしゅ","おうえん","さんか","もよおし","しあい","えんそう","てんらんかい"],
    tip: "Practise ものだから by apologising for being late to an imaginary event."
  },
  211: {
    can: ["Pass on news casually","Share something you half remember","Report information formally","Pass on a message at work"],
    first: ["ゆうびんきょく","ふうとう","こづつみ","そくたつ","あてさき","じゅうしょ","うけつけ","しゅうり","もうしこみ","とどきます"],
    tip: "Rank the hearsay forms from casual to formal: って, とか, そうだ, ということだ, とのことだ."
  },
  212: {
    can: ["Give a strong opinion about what's right","Say you have no choice","Give direct advice","Talk about general truths and fond memories"],
    first: ["たんじょう","せいちょう","けっこんしき","そつぎょう","しゅうしょく","たいしょく","そうしき","ねんれい","じんせい","おとな"],
    tip: "Compare ほうがいい, ことだ and べきだ by giving the same advice all three ways."
  }
});
