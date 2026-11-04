// Reading and conversation practice for Minna Line, Lessons 14–25.
// All texts are original (not taken from Minna no Nihongo). Kanji are written {漢字|かな}.
window.READING = (window.READING || []).concat([

  // ───────────────────────── LESSON 14 ─────────────────────────
  {
    id: "C14", lesson: 14, type: "conversation",
    title: "Waiting at the Station", titleJp: "えきで まって います",
    lines: [
      { s: "モチ", jp: "カランさん、ここで {何|なに}を して いますか。", ro: "Karan-san, koko de nani o shite imasu ka.", en: "Karan, what are you doing here?" },
      { s: "カラン", jp: "マリアさんを まって います。{四時|よじ}の {電車|でんしゃ}で {来|き}ます。", ro: "Maria-san o matte imasu. Yo-ji no densha de kimasu.", en: "I'm waiting for Maria. She's coming on the four o'clock train." },
      { s: "モチ", jp: "そうですか。あ、{雨|あめ}が ふって いますよ。", ro: "Sō desu ka. A, ame ga futte imasu yo.", en: "I see. Oh, it's raining." },
      { s: "カラン", jp: "あれ？ かさが ありません。", ro: "Are? Kasa ga arimasen.", en: "Huh? I don't have an umbrella." },
      { s: "モチ", jp: "じゃ、{私|わたし}の かさを かしましょうか。", ro: "Ja, watashi no kasa o kashimashō ka.", en: "Then shall I lend you my umbrella?" },
      { s: "カラン", jp: "ええ、おねがいします。どうも ありがとう ございます。", ro: "Ee, onegai shimasu. Dōmo arigatō gozaimasu.", en: "Yes, please. Thank you very much." },
      { s: "モチ", jp: "あ、{電車|でんしゃ}が {来|き}ましたよ。いそいで ください。", ro: "A, densha ga kimashita yo. Isoide kudasai.", en: "Oh, the train is here. Please hurry." },
      { s: "カラン", jp: "はい。モチさん、また {後|あと}で！", ro: "Hai. Mochi-san, mata ato de!", en: "Okay. See you later, Mochi!" }
    ],
    questions: [
      { q: "Who is Karan waiting for?", qjp: "カランさんは だれを まって いますか。", answer: "Maria", options: ["Mochi", "Maria", "Tanaka-san", "Sato-sensei"] },
      { q: "Which train is Maria coming on?", qjp: "マリアさんは なんじの でんしゃで きますか。", answer: "よじ", options: ["さんじ", "くじ", "よじ", "しちじ"] },
      { q: "Why does Karan borrow Mochi's umbrella?", qjp: "どうして カランさんは モチさんの かさを かりますか。", answer: "It is raining and he has no umbrella.", options: ["It is raining and he has no umbrella.", "Maria asked him to borrow it.", "His own umbrella is too small.", "Mochi wants to give Maria an umbrella."] }
    ]
  },
  {
    id: "P14", lesson: 14, type: "passage", form: "memo",
    title: "A Memo for Yamada-san", titleJp: "やまださんへ",
    lines: [
      { s: "", jp: "やまださんへ", ro: "Yamada-san e", en: "To Yamada-san," },
      { s: "", jp: "{私|わたし}は {今|いま} ぎんこうの {人|ひと}と {話|はな}して います。", ro: "Watashi wa ima ginkō no hito to hanashite imasu.", en: "I'm talking with someone from the bank right now." },
      { s: "", jp: "すみませんが、この かみを {二十|にじゅう}まい コピーして ください。", ro: "Sumimasen ga, kono kami o nijūmai kopī shite kudasai.", en: "Sorry, but please make twenty copies of this sheet." },
      { s: "", jp: "{二時半|にじはん}に かいぎしつの エアコンを つけて ください。", ro: "Ni-ji han ni kaigishitsu no eakon o tsukete kudasai.", en: "At half past two, please turn on the air conditioner in the meeting room." },
      { s: "", jp: "{三時|さんじ}に さとう{先生|せんせい}が {来|き}ます。", ro: "San-ji ni Satō-sensei ga kimasu.", en: "Sato-sensei is coming at three o'clock." },
      { s: "", jp: "{先生|せんせい}は {四時|よじ}に かえりますから、タクシーを よんで ください。", ro: "Sensei wa yo-ji ni kaerimasu kara, takushī o yonde kudasai.", en: "Sensei is going home at four o'clock, so please call a taxi." },
      { s: "", jp: "おねがいします。", ro: "Onegai shimasu.", en: "Thank you for your help." },
      { s: "", jp: "たなか", ro: "Tanaka", en: "Tanaka" }
    ],
    questions: [
      { q: "How many copies must Yamada-san make?", qjp: "やまださんは なんまい コピーしますか。", answer: "20", options: ["2", "12", "20", "30"] },
      { q: "What should Yamada-san do at 2:30?", qjp: "やまださんは にじはんに なにを しますか。", answer: "Turn on the air conditioner in the meeting room", options: ["Call a taxi for Sato-sensei", "Turn on the air conditioner in the meeting room", "Go to the bank", "Meet Sato-sensei"] },
      { q: "Why does Yamada-san need to call a taxi?", qjp: "どうして タクシーを よびますか。", answer: "Sato-sensei is going home at four.", options: ["Tanaka-san is going to the bank.", "It is raining.", "Yamada-san is going home early.", "Sato-sensei is going home at four."] }
    ]
  },

  // ───────────────────────── LESSON 15 ─────────────────────────
  {
    id: "C15", lesson: 15, type: "conversation",
    title: "Test Day Questions", titleJp: "じしょを つかっても いいですか",
    lines: [
      { s: "カラン", jp: "{先生|せんせい}、すみません。{今日|きょう}の しけんで じしょを つかっても いいですか。", ro: "Sensei, sumimasen. Kyō no shiken de jisho o tsukatte mo ii desu ka.", en: "Excuse me, Sensei. May I use a dictionary in today's test?" },
      { s: "さとうせんせい", jp: "いいえ、じしょを つかっては いけません。", ro: "Iie, jisho o tsukatte wa ikemasen.", en: "No, you must not use a dictionary." },
      { s: "カラン", jp: "でんしじしょも だめですか。", ro: "Denshi jisho mo dame desu ka.", en: "Is an electronic dictionary not allowed either?" },
      { s: "さとうせんせい", jp: "ええ、だめです。でも、ノートを {見|み}ても いいです。", ro: "Ee, dame desu. Demo, nōto o mite mo ii desu.", en: "That's right, it's not allowed. But you may look at your notes." },
      { s: "カラン", jp: "{水|みず}を {飲|の}んでも いいですか。", ro: "Mizu o nonde mo ii desu ka.", en: "May I drink water?" },
      { s: "さとうせんせい", jp: "ええ、いいですよ。{水|みず}を つくえの {上|うえ}に おいて ください。", ro: "Ee, ii desu yo. Mizu o tsukue no ue ni oite kudasai.", en: "Yes, that's fine. Please put your water on the desk." },
      { s: "カラン", jp: "しけんは {何時|なんじ}までですか。", ro: "Shiken wa nan-ji made desu ka.", en: "What time does the test go until?" },
      { s: "さとうせんせい", jp: "{十一時|じゅういちじ}までです。それまで {外|そと}へ {出|で}ては いけません。", ro: "Jūichi-ji made desu. Sore made soto e dete wa ikemasen.", en: "Until eleven o'clock. You must not go outside before then." },
      { s: "カラン", jp: "{分|わ}かりました。ありがとう ございました。", ro: "Wakarimashita. Arigatō gozaimashita.", en: "I understand. Thank you very much." }
    ],
    questions: [
      { q: "Can Karan use an electronic dictionary in the test?", qjp: "しけんで でんしじしょを つかっても いいですか。", answer: "No, he can't.", options: ["Yes, at any time.", "No, he can't.", "Yes, but only for kanji.", "Yes, after eleven o'clock."] },
      { q: "What may Karan look at during the test?", qjp: "しけんで なにを みても いいですか。", answer: "His notes", options: ["His notes", "A paper dictionary", "An electronic dictionary", "A friend's test"] },
      { q: "Where should Karan put his water?", qjp: "カランさんは みずを どこに おきますか。", answer: "つくえの うえ", options: ["いすの した", "かばんの なか", "まどの そと", "つくえの うえ"] }
    ]
  },
  {
    id: "P15", lesson: 15, type: "passage", form: "notice",
    title: "Sakura Park Rules", titleJp: "さくらこうえん",
    lines: [
      { s: "", jp: "みなさんへ", ro: "Minasan e", en: "To all visitors," },
      { s: "", jp: "{午前|ごぜん} {六時|ろくじ}から {午後|ごご} {九時|くじ}まで、さくらこうえんに {入|はい}っても いいです。", ro: "Gozen roku-ji kara gogo ku-ji made, Sakura Kōen ni haitte mo ii desu.", en: "You may enter Sakura Park from 6 a.m. to 9 p.m." },
      { s: "", jp: "いぬと いっしょに {入|はい}っても いいです。", ro: "Inu to issho ni haitte mo ii desu.", en: "You may come in with your dog." },
      { s: "", jp: "テニスや サッカーを しても いいです。", ro: "Tenisu ya sakkā o shite mo ii desu.", en: "You may play tennis, soccer and so on." },
      { s: "", jp: "でも、{花|はな}を とっては いけません。", ro: "Demo, hana o totte wa ikemasen.", en: "However, you must not pick the flowers." },
      { s: "", jp: "{川|かわ}で およいでは いけません。", ro: "Kawa de oyoide wa ikemasen.", en: "You must not swim in the river." },
      { s: "", jp: "たばこも すっては いけません。", ro: "Tabako mo sutte wa ikemasen.", en: "You must not smoke, either." },
      { s: "", jp: "じてんしゃを こうえんの {前|まえ}に おいて ください。", ro: "Jitensha o kōen no mae ni oite kudasai.", en: "Please leave bicycles in front of the park." },
      { s: "", jp: "しつもんは じむしょに {電話|でんわ}を かけて ください。", ro: "Shitsumon wa jimusho ni denwa o kakete kudasai.", en: "If you have questions, please phone the office." }
    ],
    questions: [
      { q: "Until what time may people enter the park?", qjp: "なんじまで こうえんに はいっても いいですか。", answer: "ごご くじ", options: ["ごぜん ろくじ", "ごご くじ", "ごご ろくじ", "ごぜん くじ"] },
      { q: "Which of these is allowed in the park?", qjp: "こうえんで なにを しても いいですか。", answer: "Playing tennis", options: ["Swimming in the river", "Picking flowers", "Smoking", "Playing tennis"] },
      { q: "Where should bicycles be left?", qjp: "じてんしゃを どこに おきますか。", answer: "In front of the park", options: ["Inside the park", "In front of the park", "Near the river", "At the park office"] }
    ]
  },

  // ───────────────────────── LESSON 16 ─────────────────────────
  {
    id: "C16", lesson: 16, type: "conversation",
    title: "Karan's Curry", titleJp: "カランさんの カレー",
    lines: [
      { s: "マリア", jp: "カランさんの カレーは おいしいですね。どうやって つくりますか。", ro: "Karan-san no karē wa oishii desu ne. Dō yatte tsukurimasu ka.", en: "Your curry is delicious, Karan. How do you make it?" },
      { s: "カラン", jp: "かんたんですよ。まず、やさいと にくを きって、{水|みず}を {入|い}れます。", ro: "Kantan desu yo. Mazu, yasai to niku o kitte, mizu o iremasu.", en: "It's easy. First, you cut the vegetables and meat, and then add water." },
      { s: "マリア", jp: "さとうも {入|い}れますか。", ro: "Satō mo iremasu ka.", en: "Do you add sugar too?" },
      { s: "カラン", jp: "いいえ、{入|い}れません。しおを {少|すこ}し {入|い}れます。", ro: "Iie, iremasen. Shio o sukoshi iremasu.", en: "No, I don't. I add a little salt." },
      { s: "マリア", jp: "どのくらい まちますか。", ro: "Dono kurai machimasu ka.", en: "How long do you wait?" },
      { s: "カラン", jp: "しおを {入|い}れてから、{三十分|さんじゅっぷん}ぐらい まちます。", ro: "Shio o irete kara, sanjuppun gurai machimasu.", en: "After adding the salt, I wait about thirty minutes." },
      { s: "マリア", jp: "カランさんは りょうりが じょうずですね。", ro: "Karan-san wa ryōri ga jōzu desu ne.", en: "You're good at cooking, Karan." },
      { s: "カラン", jp: "いいえ、まだまだです。{母|はは}の カレーは からくて、とても おいしいです。", ro: "Iie, madamada desu. Haha no karē wa karakute, totemo oishii desu.", en: "No, not yet. My mother's curry is spicy and really delicious." },
      { s: "マリア", jp: "そうですか。じゃ、{私|わたし}も こんばん うちで つくります。", ro: "Sō desu ka. Ja, watashi mo konban uchi de tsukurimasu.", en: "I see. Then I'll make some at home tonight too." },
      { s: "カラン", jp: "いいですね。しおを {入|い}れてから、{三十分|さんじゅっぷん}ですよ。", ro: "Ii desu ne. Shio o irete kara, sanjuppun desu yo.", en: "Sounds good. Remember, thirty minutes after adding the salt." }
    ],
    questions: [
      { q: "What is the first step in Karan's curry?", qjp: "カランさんは まず なにを しますか。", answer: "Cut the vegetables and meat", options: ["Add a little salt", "Wait thirty minutes", "Cut the vegetables and meat", "Add some sugar"] },
      { q: "How long does Karan wait after adding the salt?", qjp: "しおを いれてから どのくらい まちますか。", answer: "About 30 minutes", options: ["About 3 minutes", "About 30 minutes", "About 13 minutes", "About an hour"] },
      { q: "What will Maria do this evening?", qjp: "マリアさんは こんばん なにを しますか。", answer: "Make curry at home", options: ["Make curry at home", "Eat curry at Karan's home", "Go to a restaurant with Karan", "Eat Karan's mother's curry"] }
    ]
  },
  {
    id: "P16", lesson: 16, type: "passage", form: "timetable",
    title: "Train Times to Higashiyama", titleJp: "でんしゃの じこくひょう",
    lines: [
      { s: "", jp: "{大学前|だいがくまえ}{駅|えき}から {東山|ひがしやま}{駅|えき}までの {電車|でんしゃ}です。", ro: "Daigakumae-eki kara Higashiyama-eki made no densha desu.", en: "These are the trains from Daigakumae Station to Higashiyama Station." },
      { s: "", jp: "ふつうは {九時|くじ}と {十時|じゅうじ}に {出|で}ます。", ro: "Futsū wa ku-ji to jū-ji ni demasu.", en: "Local trains leave at 9:00 and 10:00." },
      { s: "", jp: "ふつうは {一時間|いちじかん} かかります。", ro: "Futsū wa ichijikan kakarimasu.", en: "The local train takes one hour." },
      { s: "", jp: "きゅうこうは {九時半|くじはん}に {出|で}ます。", ro: "Kyūkō wa ku-ji han ni demasu.", en: "The express leaves at 9:30." },
      { s: "", jp: "きゅうこうは {四十分|よんじゅっぷん} かかります。", ro: "Kyūkō wa yonjuppun kakarimasu.", en: "The express takes forty minutes." },
      { s: "", jp: "きゅうこうは {山下|やました}{駅|えき}までです。", ro: "Kyūkō wa Yamashita-eki made desu.", en: "The express only goes as far as Yamashita Station." },
      { s: "", jp: "{山下|やました}{駅|えき}で おりて、ふつうに のりかえて ください。", ro: "Yamashita-eki de orite, futsū ni norikaete kudasai.", en: "Please get off at Yamashita Station and change to a local train." },
      { s: "", jp: "きっぷは {四百五十円|よんひゃくごじゅうえん}です。", ro: "Kippu wa yonhyaku gojū-en desu.", en: "A ticket costs 450 yen." },
      { s: "", jp: "きっぷを {買|か}ってから、{電車|でんしゃ}に のって ください。", ro: "Kippu o katte kara, densha ni notte kudasai.", en: "Please buy your ticket before you get on the train." }
    ],
    questions: [
      { q: "Where do express passengers change trains?", qjp: "きゅうこうに のりました。どこで のりかえますか。", answer: "やました", options: ["だいがくまえ", "ひがしやま", "やました", "さくら"] },
      { q: "You want to reach Higashiyama as early as possible. Which train do you take?", qjp: "いちばん はやく ひがしやまへ いきたいです。どの でんしゃに のりますか。", answer: "The 9:00 local train", options: ["The 9:00 local train", "The 9:30 express", "The 10:00 local train", "The 10:30 express"] },
      { q: "How much is a ticket?", qjp: "きっぷは いくらですか。", answer: "よんひゃくごじゅうえん", options: ["よんひゃくえん", "ごひゃくよんじゅうえん", "よんひゃくごじゅうえん", "よんせんごひゃくえん"] }
    ]
  },

  // ───────────────────────── LESSON 17 ─────────────────────────
  {
    id: "C17", lesson: 17, type: "conversation",
    title: "At the Dentist", titleJp: "はいしゃで",
    lines: [
      { s: "はいしゃ", jp: "どう しましたか。", ro: "Dō shimashita ka.", en: "What seems to be the problem?" },
      { s: "カラン", jp: "おとといから はが いたいです。", ro: "Ototoi kara ha ga itai desu.", en: "My tooth has hurt since the day before yesterday." },
      { s: "はいしゃ", jp: "{口|くち}を あけて ください。…ああ、この はですね。", ro: "Kuchi o akete kudasai. … Ā, kono ha desu ne.", en: "Please open your mouth. … Ah, it's this tooth." },
      { s: "カラン", jp: "だいじょうぶですか。", ro: "Daijōbu desu ka.", en: "Is it all right?" },
      { s: "はいしゃ", jp: "ええ、しんぱいしないで ください。でも、{今日|きょう}は あまい ものを {食|た}べないで ください。", ro: "Ee, shinpai shinaide kudasai. Demo, kyō wa amai mono o tabenaide kudasai.", en: "Yes, please don't worry. But please don't eat sweet things today." },
      { s: "カラン", jp: "チョコレートも だめですか。", ro: "Chokorēto mo dame desu ka.", en: "Is chocolate not allowed either?" },
      { s: "はいしゃ", jp: "ええ、だめです。それから、この くすりを あさと ばんに {飲|の}まなければ なりません。", ro: "Ee, dame desu. Sore kara, kono kusuri o asa to ban ni nomanakereba narimasen.", en: "That's right, it's not allowed. Also, you must take this medicine in the morning and at night." },
      { s: "カラン", jp: "{学校|がっこう}を {休|やす}まなければ なりませんか。", ro: "Gakkō o yasumanakereba narimasen ka.", en: "Do I have to stay home from school?" },
      { s: "はいしゃ", jp: "いいえ、{休|やす}まなくても いいです。きんようびまでに もう いちど {来|き}て ください。", ro: "Iie, yasumanakute mo ii desu. Kin'yōbi made ni mō ichido kite kudasai.", en: "No, you don't have to. Please come back once more by Friday." },
      { s: "カラン", jp: "{分|わ}かりました。ありがとう ございました。", ro: "Wakarimashita. Arigatō gozaimashita.", en: "I understand. Thank you very much." }
    ],
    questions: [
      { q: "Since when has Karan's tooth hurt?", qjp: "カランさんは いつから はが いたいですか。", answer: "The day before yesterday", options: ["This morning", "Yesterday", "The day before yesterday", "Last week"] },
      { q: "Which of these must Karan not eat today?", qjp: "カランさんは きょう なにを たべては いけませんか。", answer: "Chocolate", options: ["Chocolate", "Bread", "Vegetables", "Fish"] },
      { q: "Does Karan have to stay home from school?", qjp: "カランさんは がっこうを やすまなければ なりませんか。", answer: "No, he doesn't have to.", options: ["Yes, until Friday.", "Yes, but only today.", "Yes, every morning.", "No, he doesn't have to."] }
    ]
  },
  {
    id: "P17", lesson: 17, type: "passage", form: "email",
    title: "Before My Business Trip", titleJp: "らいしゅうの しゅっちょう",
    lines: [
      { s: "", jp: "やまださん、おはよう ございます。", ro: "Yamada-san, ohayō gozaimasu.", en: "Good morning, Yamada-san." },
      { s: "", jp: "{来週|らいしゅう}の げつようびに、{私|わたし}は ホンコンへ しゅっちょうしなければ なりません。", ro: "Raishū no getsuyōbi ni, watashi wa Honkon e shutchō shinakereba narimasen.", en: "Next Monday I have to go on a business trip to Hong Kong." },
      { s: "", jp: "やまださんは {行|い}かなくても いいです。", ro: "Yamada-san wa ikanakute mo ii desu.", en: "You don't have to go." },
      { s: "", jp: "でも、この しりょうを もくようびまでに {読|よ}んで ください。", ro: "Demo, kono shiryō o mokuyōbi made ni yonde kudasai.", en: "But please read these documents by Thursday." },
      { s: "", jp: "しりょうは {私|わたし}の つくえの {上|うえ}に あります。", ro: "Shiryō wa watashi no tsukue no ue ni arimasu.", en: "The documents are on my desk." },
      { s: "", jp: "かようびの {午前|ごぜん} {十時|じゅうじ}の かいぎを わすれないで ください。", ro: "Kayōbi no gozen jū-ji no kaigi o wasurenaide kudasai.", en: "Please don't forget the meeting at 10 a.m. on Tuesday." },
      { s: "", jp: "あまり ざんぎょうしないで ください。", ro: "Amari zangyō shinaide kudasai.", en: "Please don't work too much overtime." },
      { s: "", jp: "{私|わたし}は きんようびに {日本|にほん}へ かえります。", ro: "Watashi wa kin'yōbi ni Nihon e kaerimasu.", en: "I'll be back in Japan on Friday." },
      { s: "", jp: "たなか", ro: "Tanaka", en: "Tanaka" }
    ],
    questions: [
      { q: "Who is going to Hong Kong?", qjp: "だれが ホンコンへ いきますか。", answer: "Only Tanaka-san", options: ["Only Yamada-san", "Only Tanaka-san", "Tanaka-san and Yamada-san", "Nobody"] },
      { q: "By when must Yamada-san read the documents?", qjp: "やまださんは いつまでに しりょうを よみますか。", answer: "もくようび", options: ["げつようび", "かようび", "きんようび", "もくようび"] },
      { q: "Where are the documents?", qjp: "しりょうは どこに ありますか。", answer: "On Tanaka-san's desk", options: ["On Tanaka-san's desk", "On Yamada-san's desk", "In the meeting room", "In Hong Kong"] }
    ]
  },

  // ───────────────────────── LESSON 18 ─────────────────────────
  {
    id: "C18", lesson: 18, type: "conversation",
    title: "A New Bank Card", titleJp: "ぎんこうで",
    lines: [
      { s: "カラン", jp: "すみません。この ぎんこうの カードを つくりたいです。", ro: "Sumimasen. Kono ginkō no kādo o tsukuritai desu.", en: "Excuse me. I'd like to get a card from this bank." },
      { s: "ぎんこういん", jp: "はい。パスポートは ありますか。", ro: "Hai. Pasupōto wa arimasu ka.", en: "Certainly. Do you have your passport?" },
      { s: "カラン", jp: "はい、これです。", ro: "Hai, kore desu.", en: "Yes, here it is." },
      { s: "ぎんこういん", jp: "つくる {前|まえ}に、この かみに お{名前|なまえ}と ごじゅうしょを {書|か}いて ください。", ro: "Tsukuru mae ni, kono kami ni onamae to gojūsho o kaite kudasai.", en: "Before we make it, please write your name and address on this form." },
      { s: "カラン", jp: "かんじを {書|か}く ことが できません。ローマじで {書|か}いても いいですか。", ro: "Kanji o kaku koto ga dekimasen. Rōmaji de kaite mo ii desu ka.", en: "I can't write kanji. May I write in romaji?" },
      { s: "ぎんこういん", jp: "はい、いいですよ。", ro: "Hai, ii desu yo.", en: "Yes, that's fine." },
      { s: "カラン", jp: "この カードは にちようびも つかう ことが できますか。", ro: "Kono kādo wa nichiyōbi mo tsukau koto ga dekimasu ka.", en: "Can I use this card on Sundays too?" },
      { s: "ぎんこういん", jp: "はい、できます。ATMは {午前|ごぜん} {八時|はちじ}から {午後|ごご} {九時|くじ}までです。", ro: "Hai, dekimasu. ATM wa gozen hachi-ji kara gogo ku-ji made desu.", en: "Yes, you can. The ATM is open from 8 a.m. to 9 p.m." },
      { s: "カラン", jp: "コンビニでも つかう ことが できますか。", ro: "Konbini demo tsukau koto ga dekimasu ka.", en: "Can I use it at a convenience store too?" },
      { s: "ぎんこういん", jp: "はい。でも、コンビニでは {一|いっ}かい {百十円|ひゃくじゅうえん} かかります。", ro: "Hai. Demo, konbini de wa ikkai hyakujū-en kakarimasu.", en: "Yes. But at a convenience store it costs 110 yen each time." }
    ],
    questions: [
      { q: "What does Karan want?", qjp: "カランさんは なにが ほしいですか。", answer: "A card from this bank", options: ["A new passport", "A card from this bank", "A job at the bank", "A map of the bank"] },
      { q: "Why does Karan ask to use romaji?", qjp: "どうして カランさんは ローマじで かきますか。", answer: "He can't write kanji.", options: ["The bank clerk told him to.", "He has no passport.", "He can't write kanji.", "It is Sunday."] },
      { q: "How much does it cost each time at a convenience store?", qjp: "コンビニでは いっかい いくら かかりますか。", answer: "ひゃくじゅうえん", options: ["ひゃくじゅうえん", "ひゃくえん", "にひゃくじゅうえん", "じゅうえん"] }
    ]
  },
  {
    id: "P18", lesson: 18, type: "passage", form: "poster",
    title: "Station Tour Day", titleJp: "えきを けんがくしませんか",
    lines: [
      { s: "", jp: "{駅|えき}を けんがくしませんか。", ro: "Eki o kengaku shimasen ka.", en: "Why not take a tour of the station?" },
      { s: "", jp: "{来月|らいげつ}の {十日|とおか}に、さくら{駅|えき}で {電車|でんしゃ}の {中|なか}を {見|み}る ことが できます。", ro: "Raigetsu no tōka ni, Sakura-eki de densha no naka o miru koto ga dekimasu.", en: "On the 10th of next month, you can see inside a train at Sakura Station." },
      { s: "", jp: "{駅|えき}の ねこの モチも います。", ro: "Eki no neko no Mochi mo imasu.", en: "Mochi, the station cat, will be there too." },
      { s: "", jp: "モチの しゅみは {人|ひと}の しゃしんを とる ことです。", ro: "Mochi no shumi wa hito no shashin o toru koto desu.", en: "Mochi's hobby is taking photos of people." },
      { s: "", jp: "モチと いっしょに しゃしんを とる ことも できます。", ro: "Mochi to issho ni shashin o toru koto mo dekimasu.", en: "You can also take a photo with Mochi." },
      { s: "", jp: "{時間|じかん}は {午前|ごぜん} {十時|じゅうじ}から {午後|ごご} {三時|さんじ}までです。", ro: "Jikan wa gozen jū-ji kara gogo san-ji made desu.", en: "The hours are from 10 a.m. to 3 p.m." },
      { s: "", jp: "{来|く}る {前|まえ}に、{電話|でんわ}で よやくして ください。", ro: "Kuru mae ni, denwa de yoyaku shite kudasai.", en: "Before you come, please make a reservation by phone." },
      { s: "", jp: "お{金|かね}は はらわなくても いいです。", ro: "Okane wa harawanakute mo ii desu.", en: "You don't have to pay anything." }
    ],
    questions: [
      { q: "What can visitors do on the 10th?", qjp: "とおかに なにを する ことが できますか。", answer: "See inside a train", options: ["Drive a train", "See inside a train", "Buy cheap tickets", "Take Mochi home"] },
      { q: "What must you do before coming?", qjp: "くる まえに なにを しますか。", answer: "Make a reservation by phone", options: ["Buy a ticket at the station", "Send a photo", "Make a reservation by phone", "Pay at the bank"] },
      { q: "How much does the tour cost?", qjp: "おかねは いくら はらいますか。", answer: "Nothing", options: ["100 yen", "300 yen", "1,000 yen", "Nothing"] }
    ]
  },

  // ───────────────────────── LESSON 19 ─────────────────────────
  {
    id: "C19", lesson: 19, type: "conversation",
    title: "First Sushi", titleJp: "はじめての おすし",
    lines: [
      { s: "たなかさん", jp: "カランさん、おすしを {食|た}べた ことが ありますか。", ro: "Karan-san, osushi o tabeta koto ga arimasu ka.", en: "Karan, have you ever eaten sushi?" },
      { s: "カラン", jp: "いいえ、いちども ありません。でも、てんぷらは {食|た}べた ことが あります。", ro: "Iie, ichido mo arimasen. Demo, tenpura wa tabeta koto ga arimasu.", en: "No, not even once. But I have eaten tempura." },
      { s: "たなかさん", jp: "じゃ、{今日|きょう}は おすしを {食|た}べましょう。この {店|みせ}は {安|やす}くて、おいしいですよ。", ro: "Ja, kyō wa osushi o tabemashō. Kono mise wa yasukute, oishii desu yo.", en: "Then let's have sushi today. This restaurant is cheap and delicious." },
      { s: "カラン", jp: "たなかさんは よく ここへ {来|き}ますか。", ro: "Tanaka-san wa yoku koko e kimasu ka.", en: "Do you come here often, Tanaka-san?" },
      { s: "たなかさん", jp: "ええ。{友|とも}だちと {来|き}たり、{一人|ひとり}で {来|き}たり します。", ro: "Ee. Tomodachi to kitari, hitori de kitari shimasu.", en: "Yes. Sometimes I come with friends, and sometimes alone." },
      { s: "カラン", jp: "…あ、おいしいです！ {魚|さかな}が すきに なりました。", ro: "… A, oishii desu! Sakana ga suki ni narimashita.", en: "… Oh, it's delicious! I've started to like fish." },
      { s: "たなかさん", jp: "よかったです。もう {少|すこ}し {食|た}べませんか。", ro: "Yokatta desu. Mō sukoshi tabemasen ka.", en: "I'm glad. Won't you have a little more?" },
      { s: "カラン", jp: "ありがとう ございます。でも、もう おなかが いっぱいに なりました。", ro: "Arigatō gozaimasu. Demo, mō onaka ga ippai ni narimashita.", en: "Thank you. But I'm already full." }
    ],
    questions: [
      { q: "Had Karan eaten sushi before today?", qjp: "カランさんは おすしを たべた ことが ありましたか。", answer: "No, never.", options: ["Yes, many times.", "No, never.", "Yes, once in India.", "Yes, last week with Tanaka-san."] },
      { q: "Who does Tanaka-san come to this restaurant with?", qjp: "たなかさんは だれと この みせへ きますか。", answer: "With friends, or alone", options: ["Always with Karan", "Always alone", "With friends, or alone", "Only with people from work"] },
      { q: "Why doesn't Karan eat any more?", qjp: "どうして カランさんは もう たべませんか。", answer: "He is full.", options: ["He is full.", "He doesn't like fish.", "It is too expensive.", "He has to go home."] }
    ]
  },
  {
    id: "P19", lesson: 19, type: "passage", form: "diary",
    title: "A Day on the Mountain", titleJp: "やまに のぼりました",
    lines: [
      { s: "", jp: "{十一月|じゅういちがつ} {三日|みっか} にちようび", ro: "Jūichigatsu mikka nichiyōbi", en: "Sunday, November 3" },
      { s: "", jp: "{今日|きょう}は やまださんと {山|やま}に のぼりました。", ro: "Kyō wa Yamada-san to yama ni noborimashita.", en: "Today I climbed a mountain with Yamada-san." },
      { s: "", jp: "{日本|にほん}の {山|やま}に のぼった ことが ありませんでしたから、{少|すこ}し しんぱいしました。", ro: "Nihon no yama ni nobotta koto ga arimasen deshita kara, sukoshi shinpai shimashita.", en: "I had never climbed a mountain in Japan, so I was a little worried." },
      { s: "", jp: "あさ {七時|しちじ}に {駅|えき}で あって、{電車|でんしゃ}で {行|い}きました。", ro: "Asa shichi-ji ni eki de atte, densha de ikimashita.", en: "We met at the station at seven in the morning and went by train." },
      { s: "", jp: "{山|やま}の {上|うえ}で サンドイッチを {食|た}べたり、しゃしんを とったり しました。", ro: "Yama no ue de sandoitchi o tabetari, shashin o tottari shimashita.", en: "At the top of the mountain we ate sandwiches and took photos." },
      { s: "", jp: "{空|そら}が とても きれいでした。", ro: "Sora ga totemo kirei deshita.", en: "The sky was very beautiful." },
      { s: "", jp: "{午後|ごご}は だんだん さむく なりました。", ro: "Gogo wa dandan samuku narimashita.", en: "In the afternoon it gradually got colder." },
      { s: "", jp: "{足|あし}は つかれましたが、とても たのしかったです。", ro: "Ashi wa tsukaremashita ga, totemo tanoshikatta desu.", en: "My legs got tired, but it was a lot of fun." },
      { s: "", jp: "{来年|らいねん}は ふじさんに のぼりたいです。", ro: "Rainen wa Fujisan ni noboritai desu.", en: "Next year I want to climb Mt. Fuji." }
    ],
    questions: [
      { q: "Why was Karan a little worried?", qjp: "どうして カランさんは しんぱいしましたか。", answer: "He had never climbed a mountain in Japan.", options: ["It was raining.", "He had no sandwiches.", "He had never climbed a mountain in Japan.", "Yamada-san did not come."] },
      { q: "When did it start to get colder?", qjp: "いつ さむく なりましたか。", answer: "ごご", options: ["あさ", "ごご", "ばん", "きのう"] },
      { q: "What does Karan want to do next year?", qjp: "カランさんは らいねん なにを したいですか。", answer: "Climb Mt. Fuji", options: ["Climb Mt. Fuji", "Go back to India", "Take photos at the station", "Live near a mountain"] }
    ]
  },

  // ───────────────────────── LESSON 20 ─────────────────────────
  {
    id: "C20", lesson: 20, type: "conversation",
    title: "A Present for Mochi", titleJp: "モチの プレゼント",
    lines: [
      { s: "マリア", jp: "カラン、あした ひま？", ro: "Karan, ashita hima?", en: "Karan, are you free tomorrow?" },
      { s: "カラン", jp: "うん、ひまだけど、どうして？", ro: "Un, hima da kedo, dōshite?", en: "Yeah, I'm free, but why?" },
      { s: "マリア", jp: "あさっては モチの たんじょうびだよ。プレゼント、いっしょに {買|か}いに {行|い}く？", ro: "Asatte wa Mochi no tanjōbi da yo. Purezento, issho ni kai ni iku?", en: "The day after tomorrow is Mochi's birthday. Want to go buy a present together?" },
      { s: "カラン", jp: "うん、ぼくも {行|い}く。{魚|さかな}は どう？", ro: "Un, boku mo iku. Sakana wa dō?", en: "Yeah, I'll go too. How about fish?" },
      { s: "マリア", jp: "ううん、{魚|さかな}は きのう たなかさんが あげたよ。", ro: "Uun, sakana wa kinō Tanaka-san ga ageta yo.", en: "No, Tanaka-san gave Mochi fish yesterday." },
      { s: "カラン", jp: "じゃ、ネクタイは？ モチは {駅|えき}で はたらいて いるから。", ro: "Ja, nekutai wa? Mochi wa eki de hataraite iru kara.", en: "Then how about a tie? Since Mochi works at the station." },
      { s: "マリア", jp: "ネクタイ？ おもしろいけど、{高|たか}くない？", ro: "Nekutai? Omoshiroi kedo, takakunai?", en: "A tie? That's fun, but isn't it expensive?" },
      { s: "カラン", jp: "ううん、{高|たか}くない。{駅|えき}の {前|まえ}の {店|みせ}は {安|やす}いよ。", ro: "Uun, takakunai. Eki no mae no mise wa yasui yo.", en: "No, it isn't. The shop in front of the station is cheap." },
      { s: "マリア", jp: "いいね。{何時|なんじ}に あう？", ro: "Ii ne. Nan-ji ni au?", en: "Nice. What time shall we meet?" },
      { s: "カラン", jp: "{十時|じゅうじ}に {店|みせ}の {前|まえ}は どう？", ro: "Jū-ji ni mise no mae wa dō?", en: "How about ten o'clock in front of the shop?" }
    ],
    questions: [
      { q: "When is Mochi's birthday?", qjp: "モチの たんじょうびは いつですか。", answer: "あさって", options: ["きのう", "きょう", "あした", "あさって"] },
      { q: "Why does Maria say no to fish?", qjp: "どうして さかなは だめですか。", answer: "Tanaka-san gave Mochi fish yesterday.", options: ["Mochi doesn't like fish.", "Tanaka-san gave Mochi fish yesterday.", "Fish is too expensive.", "The shop doesn't sell fish."] },
      { q: "When and where will they meet?", qjp: "ふたりは なんじに どこで あいますか。", answer: "At ten, in front of the shop", options: ["At ten, in front of the shop", "At eleven, in front of the shop", "At ten, at Karan's home", "At two, at the station"] }
    ]
  },
  {
    id: "P20", lesson: 20, type: "passage", form: "letter",
    title: "A Letter from Maria", titleJp: "マリアさんの てがみ",
    lines: [
      { s: "", jp: "さとう{先生|せんせい}、おげんきですか。", ro: "Satō-sensei, ogenki desu ka.", en: "Dear Sato-sensei, how are you?" },
      { s: "", jp: "{私|わたし}は {先月|せんげつ}、{国|くに}へ かえりました。", ro: "Watashi wa sengetsu, kuni e kaerimashita.", en: "I went back to my country last month." },
      { s: "", jp: "{友|とも}だちに あったり、{母|はは}の りょうりを {食|た}べたり して います。", ro: "Tomodachi ni attari, haha no ryōri o tabetari shite imasu.", en: "I've been doing things like seeing friends and eating my mother's cooking." },
      { s: "", jp: "{母|はは}に {日本|にほん}の きものを あげました。", ro: "Haha ni Nihon no kimono o agemashita.", en: "I gave my mother a Japanese kimono." },
      { s: "", jp: "こちらは ぶっかが {安|やす}くて、{食|た}べものも おいしいです。", ro: "Kochira wa bukka ga yasukute, tabemono mo oishii desu.", en: "Prices here are low, and the food is delicious too." },
      { s: "", jp: "でも、{友|とも}だちは {日本語|にほんご}が {分|わ}かりませんから、{少|すこ}し さびしいです。", ro: "Demo, tomodachi wa Nihongo ga wakarimasen kara, sukoshi sabishii desu.", en: "But my friends don't understand Japanese, so I'm a little lonely." },
      { s: "", jp: "{来月|らいげつ}の はじめに {日本|にほん}へ {行|い}きます。", ro: "Raigetsu no hajime ni Nihon e ikimasu.", en: "I'm going to Japan at the beginning of next month." },
      { s: "", jp: "また {先生|せんせい}の クラスで べんきょうしたいです。", ro: "Mata sensei no kurasu de benkyō shitai desu.", en: "I want to study in your class again." },
      { s: "", jp: "マリア", ro: "Maria", en: "Maria" }
    ],
    questions: [
      { q: "What did Maria give her mother?", qjp: "マリアさんは おかあさんに なにを あげましたか。", answer: "A Japanese kimono", options: ["A Japanese book", "A Japanese kimono", "A Japanese camera", "A Japanese dictionary"] },
      { q: "Why is Maria a little lonely?", qjp: "どうして マリアさんは すこし さびしいですか。", answer: "Her friends don't understand Japanese.", options: ["Prices are high.", "She has no friends there.", "Her friends don't understand Japanese.", "Her mother is not at home."] },
      { q: "When is Maria going to Japan?", qjp: "マリアさんは いつ にほんへ いきますか。", answer: "らいげつの はじめ", options: ["らいげつの はじめ", "らいげつの おわり", "こんげつの はじめ", "らいねんの はじめ"] }
    ]
  },

  // ───────────────────────── LESSON 21 ─────────────────────────
  {
    id: "C21", lesson: 21, type: "conversation",
    title: "A Snowy Morning", titleJp: "ゆきの あさ",
    lines: [
      { s: "たなかさん", jp: "モチさん、{電車|でんしゃ}が うごきませんね。どうしてですか。", ro: "Mochi-san, densha ga ugokimasen ne. Dōshite desu ka.", en: "Mochi, the trains aren't moving, are they? Why is that?" },
      { s: "モチ", jp: "ゆきが たくさん ふりましたから。ニュースで {十時|じゅうじ}まで うごかないと {言|い}って いました。", ro: "Yuki ga takusan furimashita kara. Nyūsu de jū-ji made ugokanai to itte imashita.", en: "Because a lot of snow fell. The news said they won't run until ten o'clock." },
      { s: "たなかさん", jp: "そうですか。{今日|きょう}は {十時半|じゅうじはん}から かいぎが あります。バスは どうですか。", ro: "Sō desu ka. Kyō wa jū-ji han kara kaigi ga arimasu. Basu wa dō desu ka.", en: "I see. I have a meeting from 10:30 today. What about the buses?" },
      { s: "モチ", jp: "{外|そと}は ゆきが {多|おお}いでしょう？ バスも たぶん おそいと おもいます。", ro: "Soto wa yuki ga ōi deshō? Basu mo tabun osoi to omoimasu.", en: "There's a lot of snow outside, right? I think the buses are probably slow too." },
      { s: "たなかさん", jp: "しかたが ありませんね。かいしゃに {電話|でんわ}します。", ro: "Shikata ga arimasen ne. Kaisha ni denwa shimasu.", en: "It can't be helped. I'll call the office." },
      { s: "モチ", jp: "ええ。{今日|きょう}は きっと みんな たいへんだと おもいます。", ro: "Ee. Kyō wa kitto minna taihen da to omoimasu.", en: "Yes. I'm sure it will be hard for everyone today." },
      { s: "たなかさん", jp: "そうですね。モチさんは さむくないですか。", ro: "Sō desu ne. Mochi-san wa samukunai desu ka.", en: "That's true. Aren't you cold, Mochi?" },
      { s: "モチ", jp: "さむいです。でも、{駅|えき}の しごとは たのしいと おもいます。", ro: "Samui desu. Demo, eki no shigoto wa tanoshii to omoimasu.", en: "I am. But I think working at the station is fun." }
    ],
    questions: [
      { q: "Why aren't the trains moving?", qjp: "どうして でんしゃは うごきませんか。", answer: "A lot of snow fell.", options: ["The station staff are in a meeting.", "A lot of snow fell.", "There was a lot of rain.", "The buses are in the way."] },
      { q: "Until what time will the trains not run, according to the news?", qjp: "でんしゃは なんじまで うごきませんか。", answer: "じゅうじ", options: ["くじ", "じゅういちじ", "じゅうじはん", "じゅうじ"] },
      { q: "What will Tanaka-san do next?", qjp: "たなかさんは これから なにを しますか。", answer: "Call the office", options: ["Call the office", "Take a bus", "Watch the news", "Work at the station"] }
    ]
  },
  {
    id: "P21", lesson: 21, type: "passage", form: "essay",
    title: "My Dream", titleJp: "わたしの ゆめ",
    lines: [
      { s: "", jp: "{私|わたし}の ゆめは {日本|にほん}の かいしゃで はたらく ことです。", ro: "Watashi no yume wa Nihon no kaisha de hataraku koto desu.", en: "My dream is to work at a Japanese company." },
      { s: "", jp: "インドの {友|とも}だちは「{日本語|にほんご}は むずかしい」と {言|い}います。", ro: "Indo no tomodachi wa \"Nihongo wa muzukashii\" to iimasu.", en: "My friends in India say, \"Japanese is difficult.\"" },
      { s: "", jp: "{私|わたし}も かんじは むずかしいと おもいます。", ro: "Watashi mo kanji wa muzukashii to omoimasu.", en: "I also think kanji is difficult." },
      { s: "", jp: "でも、{日本語|にほんご}は やくに たつと おもいます。", ro: "Demo, Nihongo wa yaku ni tatsu to omoimasu.", en: "But I think Japanese is useful." },
      { s: "", jp: "さいきん、インドでも {日本|にほん}の アニメが ゆうめいです。", ro: "Saikin, Indo demo Nihon no anime ga yūmei desu.", en: "Lately Japanese anime has been famous in India too." },
      { s: "", jp: "ですから、{日本語|にほんご}の しごとも {多|おお}く なると おもいます。", ro: "Desu kara, Nihongo no shigoto mo ōku naru to omoimasu.", en: "So I think jobs using Japanese will increase as well." },
      { s: "", jp: "さとう{先生|せんせい}は「{毎日|まいにち} {少|すこ}し べんきょうして ください」と {言|い}いました。", ro: "Satō-sensei wa \"Mainichi sukoshi benkyō shite kudasai\" to iimashita.", en: "Sato-sensei said, \"Please study a little every day.\"" },
      { s: "", jp: "{私|わたし}は {毎日|まいにち} {日本語|にほんご}で にっきを {書|か}いて います。", ro: "Watashi wa mainichi Nihongo de nikki o kaite imasu.", en: "I write a diary in Japanese every day." },
      { s: "", jp: "{来年|らいねん}の しけんは きっと だいじょうぶだと おもいます。", ro: "Rainen no shiken wa kitto daijōbu da to omoimasu.", en: "I'm sure next year's exam will be fine." }
    ],
    questions: [
      { q: "What is Karan's dream?", qjp: "カランさんの ゆめは なんですか。", answer: "To work at a Japanese company", options: ["To become a Japanese teacher", "To work at a Japanese company", "To make anime in India", "To study in Sato-sensei's class"] },
      { q: "Why does Karan think jobs using Japanese will increase?", qjp: "どうして にほんごの しごとが おおく なると おもいますか。", answer: "Japanese anime is famous in India now.", options: ["Japanese is easy to learn.", "His friends told him so.", "Sato-sensei said so.", "Japanese anime is famous in India now."] },
      { q: "What does Karan do every day?", qjp: "カランさんは まいにち なにを して いますか。", answer: "He writes a diary in Japanese.", options: ["He writes a diary in Japanese.", "He watches anime with friends.", "He talks to Sato-sensei.", "He takes an exam."] }
    ]
  },

  // ───────────────────────── LESSON 22 ─────────────────────────
  {
    id: "C22", lesson: 22, type: "conversation",
    title: "Picnic in the Park", titleJp: "こうえんで",
    lines: [
      { s: "カラン", jp: "たなかさん、あの ぼうしを かぶって いる {人|ひと}は だれですか。", ro: "Tanaka-san, ano bōshi o kabutte iru hito wa dare desu ka.", en: "Tanaka-san, who is that person wearing the hat?" },
      { s: "たなかさん", jp: "どの {人|ひと}ですか。", ro: "Dono hito desu ka.", en: "Which person?" },
      { s: "カラン", jp: "{木|き}の {下|した}で おべんとうを {食|た}べて いる {女|おんな}の {人|ひと}です。", ro: "Ki no shita de obentō o tabete iru onna no hito desu.", en: "The woman eating a boxed lunch under the tree." },
      { s: "たなかさん", jp: "ああ、やまださんです。{私|わたし}の かいしゃの {人|ひと}です。", ro: "Ā, Yamada-san desu. Watashi no kaisha no hito desu.", en: "Oh, that's Yamada-san. She's from my company." },
      { s: "カラン", jp: "となりに いる {男|おとこ}の {人|ひと}は だれですか。", ro: "Tonari ni iru otoko no hito wa dare desu ka.", en: "Who is the man next to her?" },
      { s: "たなかさん", jp: "やまださんの ごしゅじんです。カメラを つくる かいしゃで はたらいて います。", ro: "Yamada-san no goshujin desu. Kamera o tsukuru kaisha de hataraite imasu.", en: "That's Yamada-san's husband. He works at a company that makes cameras." },
      { s: "カラン", jp: "そうですか。{私|わたし}も カメラが すきです。{話|はな}す {時間|じかん}が ありますか。", ro: "Sō desu ka. Watashi mo kamera ga suki desu. Hanasu jikan ga arimasu ka.", en: "I see. I like cameras too. Will there be time to talk?" },
      { s: "たなかさん", jp: "ええ、{今日|きょう}は みんなで {話|はな}す {時間|じかん}が たくさん ありますよ。", ro: "Ee, kyō wa minna de hanasu jikan ga takusan arimasu yo.", en: "Yes, today there's plenty of time for everyone to talk." },
      { s: "カラン", jp: "じゃ、{私|わたし}が つくった カレーを みんなで {食|た}べましょう。", ro: "Ja, watashi ga tsukutta karē o minna de tabemashō.", en: "Then let's all eat the curry I made." },
      { s: "たなかさん", jp: "いいですね。やまださんも カレーが すきだと おもいます。", ro: "Ii desu ne. Yamada-san mo karē ga suki da to omoimasu.", en: "Great idea. I think Yamada-san likes curry too." }
    ],
    questions: [
      { q: "Who is the person wearing the hat?", qjp: "ぼうしを かぶって いる ひとは だれですか。", answer: "Yamada-san", options: ["Maria", "Sato-sensei", "Yamada-san", "Tanaka-san's sister"] },
      { q: "Where does Yamada-san's husband work?", qjp: "やまださんの ごしゅじんは どんな かいしゃで はたらいて いますか。", answer: "At a company that makes cameras", options: ["At a company that makes cameras", "At a shop that sells curry", "At Tanaka-san's company", "At a bank near the park"] },
      { q: "What does Karan suggest at the end?", qjp: "カランさんは みんなで なにを しましょうと いいましたか。", answer: "Everyone eats the curry he made", options: ["Everyone takes photos with a camera", "Everyone buys boxed lunches", "Everyone eats the curry he made", "Everyone sits under the tree"] }
    ]
  },
  {
    id: "P22", lesson: 22, type: "passage", form: "poster",
    title: "Lost Bag", titleJp: "かばんを なくしました",
    lines: [
      { s: "", jp: "{先週|せんしゅう}の きんようびに、{駅|えき}で かばんを なくしました。", ro: "Senshū no kin'yōbi ni, eki de kaban o nakushimashita.", en: "I lost my bag at the station last Friday." },
      { s: "", jp: "{母|はは}が インドで {買|か}った あおい かばんです。", ro: "Haha ga Indo de katta aoi kaban desu.", en: "It's a blue bag that my mother bought in India." },
      { s: "", jp: "{中|なか}に {先生|せんせい}に もらった {本|ほん}が {入|はい}って います。", ro: "Naka ni sensei ni moratta hon ga haitte imasu.", en: "Inside is a book that I got from my teacher." },
      { s: "", jp: "{私|わたし}が {書|か}いた にっきも {入|はい}って います。", ro: "Watashi ga kaita nikki mo haitte imasu.", en: "The diary I wrote is in it too." },
      { s: "", jp: "とても たいせつな ものです。", ro: "Totemo taisetsu na mono desu.", en: "These are very precious things." },
      { s: "", jp: "{十時|じゅうじ}の {電車|でんしゃ}に のった {人|ひと}、かばんを {見|み}ませんでしたか。", ro: "Jū-ji no densha ni notta hito, kaban o mimasen deshita ka.", en: "If you were on the ten o'clock train, did you see my bag?" },
      { s: "", jp: "かばんを {見|み}た {人|ひと}は、カランに {電話|でんわ}を かけて ください。", ro: "Kaban o mita hito wa, Karan ni denwa o kakete kudasai.", en: "If you saw the bag, please phone Karan." },
      { s: "", jp: "{駅|えき}で はたらいて いる モチさんに {話|はな}しても いいです。", ro: "Eki de hataraite iru Mochi-san ni hanashite mo ii desu.", en: "You may also tell Mochi, who works at the station." }
    ],
    questions: [
      { q: "Who bought the bag?", qjp: "だれが かばんを かいましたか。", answer: "Karan's mother", options: ["Karan", "Karan's teacher", "Karan's mother", "Mochi"] },
      { q: "What is in the bag?", qjp: "かばんの なかに なにが ありますか。", answer: "A book and a diary", options: ["A book and a diary", "A diary and a camera", "A book and a key", "Money and a passport"] },
      { q: "Besides Karan, who can people tell about the bag?", qjp: "かばんを みた ひとは カランさんと だれに はなしても いいですか。", answer: "Mochi", options: ["Karan's mother", "Karan's teacher", "Tanaka-san", "Mochi"] }
    ]
  },

  // ───────────────────────── LESSON 23 ─────────────────────────
  {
    id: "C23", lesson: 23, type: "conversation",
    title: "At the Copy Machine", titleJp: "コンビニの コピー",
    lines: [
      { s: "カラン", jp: "マリア、ちょっと いい？ この コンビニで コピーしたいけど、つかいかたが {分|わ}からない。", ro: "Maria, chotto ii? Kono konbini de kopī shitai kedo, tsukaikata ga wakaranai.", en: "Maria, got a minute? I want to make a copy at this convenience store, but I don't know how to use the machine." },
      { s: "マリア", jp: "うん、いいよ。まず ここに お{金|かね}を {入|い}れて。", ro: "Un, ii yo. Mazu koko ni okane o irete.", en: "Sure. First, put your money in here." },
      { s: "カラン", jp: "いくら {入|い}れるの？", ro: "Ikura ireru no?", en: "How much do I put in?" },
      { s: "マリア", jp: "{一|いち}まい {十円|じゅうえん}だよ。この みどりの ボタンを おすと、コピーが {出|で}るよ。", ro: "Ichimai jū-en da yo. Kono midori no botan o osu to, kopī ga deru yo.", en: "It's ten yen a sheet. When you press this green button, the copy comes out." },
      { s: "カラン", jp: "ありがとう。じが {小|ちい}さい とき、どう するの？", ro: "Arigatō. Ji ga chiisai toki, dō suru no?", en: "Thanks. What do I do when the letters are small?" },
      { s: "マリア", jp: "ここを まわすと、{大|おお}きく なるよ。", ro: "Koko o mawasu to, ōkiku naru yo.", en: "If you turn this, they get bigger." },
      { s: "カラン", jp: "おつりは どこ？", ro: "Otsuri wa doko?", en: "Where's the change?" },
      { s: "マリア", jp: "この あかい ボタンを おすと、{下|した}に {出|で}るよ。", ro: "Kono akai botan o osu to, shita ni deru yo.", en: "When you press this red button, it comes out at the bottom." },
      { s: "カラン", jp: "マリアは よく ここで コピーするの？", ro: "Maria wa yoku koko de kopī suru no?", en: "Do you often make copies here, Maria?" },
      { s: "マリア", jp: "うん、レポートを {書|か}く とき、いつも {来|く}るよ。", ro: "Un, repōto o kaku toki, itsumo kuru yo.", en: "Yeah, I always come when I'm writing a report." }
    ],
    questions: [
      { q: "How much is one copy?", qjp: "コピーは いちまい いくらですか。", answer: "じゅうえん", options: ["じゅうえん", "ひゃくえん", "ごえん", "にじゅうえん"] },
      { q: "How does Karan get his change?", qjp: "カランさんは どうやって おつりを もらいますか。", answer: "He presses the red button.", options: ["He presses the green button.", "He turns the dial.", "He presses the red button.", "He puts in more money."] },
      { q: "When does Maria always come here?", qjp: "マリアさんは どんな とき、ここへ きますか。", answer: "When she is writing a report", options: ["When the letters are small", "When she wants to meet Karan", "When she has no money", "When she is writing a report"] }
    ]
  },
  {
    id: "P23", lesson: 23, type: "passage", form: "directions",
    title: "The Way to My Apartment", titleJp: "アパートまでの みち",
    lines: [
      { s: "", jp: "カランさん、{駅|えき}から {私|わたし}の アパートまでの {道|みち}を {書|か}きます。", ro: "Karan-san, eki kara watashi no apāto made no michi o kakimasu.", en: "Karan, here's the way from the station to my apartment." },
      { s: "", jp: "{駅|えき}を {出|で}て、{南|みなみ}へ まっすぐ {行|い}くと、はしが あります。", ro: "Eki o dete, minami e massugu iku to, hashi ga arimasu.", en: "Leave the station and go straight south, and you'll come to a bridge." },
      { s: "", jp: "はしを わたると、{大|おお}きい こうさてんが あります。", ro: "Hashi o wataru to, ōkii kōsaten ga arimasu.", en: "When you cross the bridge, there's a big intersection." },
      { s: "", jp: "こうさてんを {右|みぎ}へ まがって ください。", ro: "Kōsaten o migi e magatte kudasai.", en: "Please turn right at the intersection." },
      { s: "", jp: "{三分|さんぷん}ぐらい あるくと、{左|ひだり}に ちゅうしゃじょうが あります。", ro: "Sanpun gurai aruku to, hidari ni chūshajō ga arimasu.", en: "If you walk for about three minutes, there's a parking lot on the left." },
      { s: "", jp: "ちゅうしゃじょうの となりの {白|しろ}い たてものが {私|わたし}の アパートです。", ro: "Chūshajō no tonari no shiroi tatemono ga watashi no apāto desu.", en: "The white building next to the parking lot is my apartment." },
      { s: "", jp: "{私|わたし}の へやは {四|よん}かいです。", ro: "Watashi no heya wa yonkai desu.", en: "My room is on the fourth floor." },
      { s: "", jp: "{道|みち}が {分|わ}からない とき、{電話|でんわ}を かけて ください。", ro: "Michi ga wakaranai toki, denwa o kakete kudasai.", en: "If you don't know the way, please give me a call." },
      { s: "", jp: "たなか", ro: "Tanaka", en: "Tanaka" }
    ],
    questions: [
      { q: "What do you reach first if you go straight south from the station?", qjp: "えきを でて、みなみへ いくと、なにが ありますか。", answer: "はし", options: ["はし", "こうさてん", "ちゅうしゃじょう", "しんごう"] },
      { q: "Which way do you turn at the intersection?", qjp: "こうさてんを どちらへ まがりますか。", answer: "みぎ", options: ["ひだり", "みぎ", "きた", "にし"] },
      { q: "Which building is Tanaka-san's apartment?", qjp: "たなかさんの アパートは どの たてものですか。", answer: "The white building next to the parking lot", options: ["The white building next to the bridge", "The big building at the intersection", "The white building next to the parking lot", "The building behind the station"] }
    ]
  },

  // ───────────────────────── LESSON 24 ─────────────────────────
  {
    id: "C24", lesson: 24, type: "conversation",
    title: "Sweets from India", titleJp: "インドの おかし",
    lines: [
      { s: "やまださん", jp: "たなかさん、その おかしは どうしましたか。", ro: "Tanaka-san, sono okashi wa dō shimashita ka.", en: "Tanaka-san, where did you get those sweets?" },
      { s: "たなかさん", jp: "{友|とも}だちの カランさんが くれました。インドの おかしです。{一|ひと}つ どうぞ。", ro: "Tomodachi no Karan-san ga kuremashita. Indo no okashi desu. Hitotsu dōzo.", en: "My friend Karan gave them to me. They're Indian sweets. Please have one." },
      { s: "やまださん", jp: "ありがとう ございます。…おいしいですね。", ro: "Arigatō gozaimasu. … Oishii desu ne.", en: "Thank you. … This is delicious." },
      { s: "たなかさん", jp: "カランさんは {先週|せんしゅう}、{私|わたし}の パソコンも なおして くれました。", ro: "Karan-san wa senshū, watashi no pasokon mo naoshite kuremashita.", en: "Last week Karan also fixed my computer for me." },
      { s: "やまださん", jp: "しんせつな {人|ひと}ですね。たなかさんは {何|なに}か して あげましたか。", ro: "Shinsetsu na hito desu ne. Tanaka-san wa nanika shite agemashita ka.", en: "What a kind person. Did you do anything for him?" },
      { s: "たなかさん", jp: "ええ。カランさんの レポートの かんじを なおして あげました。", ro: "Ee. Karan-san no repōto no kanji o naoshite agemashita.", en: "Yes. I corrected the kanji in his report for him." },
      { s: "やまださん", jp: "いいですね。じつは {私|わたし}の パソコンも {古|ふる}くて、おそいです。", ro: "Ii desu ne. Jitsu wa watashi no pasokon mo furukute, osoi desu.", en: "That's nice. Actually, my computer is old and slow too." },
      { s: "たなかさん", jp: "じゃ、あした カランさんを かいしゃへ つれて {来|き}ましょうか。", ro: "Ja, ashita Karan-san o kaisha e tsurete kimashō ka.", en: "Then shall I bring Karan to the office tomorrow?" },
      { s: "やまださん", jp: "ええ、おねがいします。カランさんに {見|み}て もらいます。", ro: "Ee, onegai shimasu. Karan-san ni mite moraimasu.", en: "Yes, please. I'll have Karan take a look at it." }
    ],
    questions: [
      { q: "Who gave Tanaka-san the sweets?", qjp: "だれが たなかさんに おかしを くれましたか。", answer: "Karan", options: ["Yamada-san", "Maria", "Karan", "Tanaka-san's mother"] },
      { q: "What did Tanaka-san do for Karan?", qjp: "たなかさんは カランさんに なにを して あげましたか。", answer: "Corrected the kanji in his report", options: ["Fixed his computer", "Corrected the kanji in his report", "Gave him Indian sweets", "Took him to India"] },
      { q: "Why will Karan come to the office tomorrow?", qjp: "カランさんは どうして あした かいしゃへ きますか。", answer: "To look at Yamada-san's computer", options: ["To look at Yamada-san's computer", "To bring more sweets", "To write a report", "To study kanji with Yamada-san"] }
    ]
  },
  {
    id: "P24", lesson: 24, type: "passage", form: "shopping list",
    title: "Party Shopping and Helpers", titleJp: "パーティーの じゅんび",
    lines: [
      { s: "", jp: "どようびの パーティーの じゅんびです。", ro: "Doyōbi no pātī no junbi desu.", en: "These are the preparations for Saturday's party." },
      { s: "", jp: "{買|か}う ものは たまご {六|むっ}つ、りんご {五|いつ}つ、パン、ジュースです。", ro: "Kau mono wa tamago muttsu, ringo itsutsu, pan, jūsu desu.", en: "Things to buy: six eggs, five apples, bread and juice." },
      { s: "", jp: "たなかさんが {車|くるま}で スーパーへ つれて {行|い}って くれます。", ro: "Tanaka-san ga kuruma de sūpā e tsurete itte kuremasu.", en: "Tanaka-san will take me to the supermarket by car." },
      { s: "", jp: "マリアさんは ケーキを つくって くれます。", ro: "Maria-san wa kēki o tsukutte kuremasu.", en: "Maria will make a cake for us." },
      { s: "", jp: "やまださんに いすを かして もらいます。", ro: "Yamada-san ni isu o kashite moraimasu.", en: "Yamada-san will lend us some chairs." },
      { s: "", jp: "さとう{先生|せんせい}は ワインを もって {来|き}て くれます。", ro: "Satō-sensei wa wain o motte kite kuremasu.", en: "Sato-sensei will kindly bring some wine." },
      { s: "", jp: "{私|わたし}は カレーを つくって、みんなに {食|た}べて もらいます。", ro: "Watashi wa karē o tsukutte, minna ni tabete moraimasu.", en: "I'll make curry and have everyone try it." },
      { s: "", jp: "モチには {魚|さかな}を {買|か}って あげます。", ro: "Mochi ni wa sakana o katte agemasu.", en: "For Mochi, I'll buy some fish." },
      { s: "", jp: "お{金|かね}は ぜんぶで {五千円|ごせんえん}ぐらいだと おもいます。", ro: "Okane wa zenbu de gosen-en gurai da to omoimasu.", en: "I think it will cost about 5,000 yen in total." }
    ],
    questions: [
      { q: "Who will make the cake?", qjp: "だれが ケーキを つくりますか。", answer: "マリアさん", options: ["たなかさん", "マリアさん", "やまださん", "さとうせんせい"] },
      { q: "How will the writer get to the supermarket?", qjp: "どうやって スーパーへ いきますか。", answer: "In Tanaka-san's car", options: ["On foot", "By train", "In Tanaka-san's car", "By bicycle"] },
      { q: "What will Yamada-san do for the party?", qjp: "やまださんは なにを して くれますか。", answer: "Lend some chairs", options: ["Bring wine", "Buy fish", "Make curry", "Lend some chairs"] }
    ]
  },

  // ───────────────────────── LESSON 25 ─────────────────────────
  {
    id: "C25", lesson: 25, type: "conversation",
    title: "When the Exam Is Over", titleJp: "しけんが おわったら",
    lines: [
      { s: "さとうせんせい", jp: "カランさん、{来月|らいげつ}の しけんの じゅんびは どうですか。", ro: "Karan-san, raigetsu no shiken no junbi wa dō desu ka.", en: "Karan, how are your preparations for next month's exam going?" },
      { s: "カラン", jp: "むずかしいです。いくら べんきょうしても、かんじを おぼえる ことが できません。", ro: "Muzukashii desu. Ikura benkyō shite mo, kanji o oboeru koto ga dekimasen.", en: "It's hard. No matter how much I study, I can't memorize the kanji." },
      { s: "さとうせんせい", jp: "だいじょうぶですよ。{毎日|まいにち} {十分|じゅっぷん}でも {書|か}いて ください。", ro: "Daijōbu desu yo. Mainichi juppun demo kaite kudasai.", en: "You'll be fine. Please write them every day, even if it's only for ten minutes." },
      { s: "カラン", jp: "はい、がんばります。でも、もし しけんが だめだったら、どう しましょうか。", ro: "Hai, ganbarimasu. Demo, moshi shiken ga dame dattara, dō shimashō ka.", en: "Yes, I'll do my best. But what should I do if the exam goes badly?" },
      { s: "さとうせんせい", jp: "だめだったら、また {来年|らいねん} がんばりましょう。", ro: "Dame dattara, mata rainen ganbarimashō.", en: "If it does, let's try hard again next year." },
      { s: "カラン", jp: "ありがとう ございます。しけんが おわったら、{国|くに}へ かえります。", ro: "Arigatō gozaimasu. Shiken ga owattara, kuni e kaerimasu.", en: "Thank you. When the exam is over, I'm going back to my country." },
      { s: "さとうせんせい", jp: "いいですね。{国|くに}へ かえったら、{何|なに}を しますか。", ro: "Ii desu ne. Kuni e kaettara, nani o shimasu ka.", en: "That's nice. What will you do when you get back?" },
      { s: "カラン", jp: "{母|はは}の カレーを {食|た}べたいです。それから、いなかの おじいさんに あいます。", ro: "Haha no karē o tabetai desu. Sore kara, inaka no ojiisan ni aimasu.", en: "I want to eat my mother's curry. And I'll see my grandfather in the countryside." },
      { s: "さとうせんせい", jp: "じゃ、かえる {前|まえ}に、クラスの みんなで {食|た}べに {行|い}きましょう。", ro: "Ja, kaeru mae ni, kurasu no minna de tabe ni ikimashō.", en: "Then before you go, let's all go out to eat as a class." },
      { s: "カラン", jp: "はい！ {雨|あめ}が ふっても {行|い}きます。", ro: "Hai! Ame ga futte mo ikimasu.", en: "Yes! I'll go even if it rains." }
    ],
    questions: [
      { q: "What is Karan's problem?", qjp: "カランさんは なにが できませんか。", answer: "He can't memorize kanji.", options: ["He can't memorize kanji.", "He can't go back to his country.", "He can't find time to study.", "He can't read his mother's letters."] },
      { q: "What does Sato-sensei tell Karan to do?", qjp: "さとうせんせいは カランさんに なにを して くださいと いいましたか。", answer: "Write every day, even for ten minutes", options: ["Study for ten hours every day", "Take the exam next year", "Write every day, even for ten minutes", "Go back to his country early"] },
      { q: "What will Karan do when he goes back to his country?", qjp: "カランさんは くにへ かえったら、なにを しますか。", answer: "Eat his mother's curry and see his grandfather", options: ["Study kanji with his grandfather", "Eat his mother's curry and see his grandfather", "Take the exam again", "Make curry for the class"] }
    ]
  },
  {
    id: "P25", lesson: 25, type: "passage", form: "email",
    title: "Class Trip Email", titleJp: "クラスの りょこう",
    lines: [
      { s: "", jp: "みなさん、こんにちは。", ro: "Minasan, konnichiwa.", en: "Hello, everyone." },
      { s: "", jp: "{来週|らいしゅう}の どようびに、クラスの みんなで いなかへ {行|い}きます。", ro: "Raishū no doyōbi ni, kurasu no minna de inaka e ikimasu.", en: "Next Saturday, the whole class is going to the countryside." },
      { s: "", jp: "{雨|あめ}が ふっても、{行|い}きます。", ro: "Ame ga futte mo, ikimasu.", en: "We'll go even if it rains." },
      { s: "", jp: "でも、ゆきが ふったら、{行|い}きません。", ro: "Demo, yuki ga futtara, ikimasen.", en: "But if it snows, we won't go." },
      { s: "", jp: "{午前|ごぜん} {八時|はちじ}に {駅|えき}に {来|き}て ください。", ro: "Gozen hachi-ji ni eki ni kite kudasai.", en: "Please come to the station at 8 a.m." },
      { s: "", jp: "{駅|えき}に ついたら、{私|わたし}に {電話|でんわ}して ください。", ro: "Eki ni tsuitara, watashi ni denwa shite kudasai.", en: "When you arrive at the station, please call me." },
      { s: "", jp: "{八時半|はちじはん}までに {来|こ}なかったら、つぎの {電車|でんしゃ}で {来|き}て ください。", ro: "Hachi-ji han made ni konakattara, tsugi no densha de kite kudasai.", en: "If you haven't come by 8:30, please come on the next train." },
      { s: "", jp: "お{金|かね}が たりなかったら、{私|わたし}に {言|い}って ください。", ro: "Okane ga tarinakattara, watashi ni itte kudasai.", en: "If you don't have enough money, please tell me." },
      { s: "", jp: "さとう", ro: "Satō", en: "Sato" }
    ],
    questions: [
      { q: "What will happen if it rains?", qjp: "あめが ふったら、どう しますか。", answer: "The class will still go.", options: ["The class will not go.", "The class will go next week.", "The class will still go.", "The class will study at school."] },
      { q: "What should students do when they arrive at the station?", qjp: "えきに ついたら、なにを しますか。", answer: "Phone Sato-sensei", options: ["Phone Sato-sensei", "Buy a ticket", "Wait for the next train", "Go to the countryside alone"] },
      { q: "What should you do if you aren't there by 8:30?", qjp: "はちじはんまでに こなかったら、どう しますか。", answer: "Come on the next train", options: ["Go back home", "Come by car", "Call the school", "Come on the next train"] }
    ]
  }

]);
