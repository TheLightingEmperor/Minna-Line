// Reading & conversation texts, Lessons 1–13 (original writing, not taken from the textbook).
// Markup: {base|reading}. Digits sit inside the ruby too, so counters show their real reading: {9時|くじ}, {3|さん}がい.
// Cast: カラン (Indian student, ひかり大学), マリア (German student), さとう先生 (teacher),
// たなかさん and やまださん (サンでんき, a company in おおさか), モチ (the station cat).
window.READING = (window.READING || []).concat([

  // ───────────────────────── LESSON 1 ─────────────────────────
  {
    id: "C1", lesson: 1, type: "conversation",
    title: "Two new students", titleJp: "はじめまして",
    lines: [
      { s: "カラン", jp: "こんにちは。しつれいですが、おなまえは？", ro: "Konnichiwa. Shitsurei desu ga, onamae wa?", en: "Hello. Excuse me, may I ask your name?" },
      { s: "マリア", jp: "マリアです。ドイツから きました。", ro: "Maria desu. Doitsu kara kimashita.", en: "I'm Maria. I'm from Germany." },
      { s: "カラン", jp: "はじめまして。カランです。インドから きました。", ro: "Hajimemashite. Karan desu. Indo kara kimashita.", en: "Nice to meet you. I'm Karan. I'm from India." },
      { s: "マリア", jp: "どうぞ よろしく。カランさんは {学生|がくせい}ですか。", ro: "Dōzo yoroshiku. Karan-san wa gakusei desu ka.", en: "Pleased to meet you. Are you a student, Karan?" },
      { s: "カラン", jp: "はい、ひかり{大学|だいがく}の {学生|がくせい}です。マリアさんも {学生|がくせい}ですか。", ro: "Hai, Hikari Daigaku no gakusei desu. Maria-san mo gakusei desu ka.", en: "Yes, I'm a student at Hikari University. Are you a student too, Maria?" },
      { s: "マリア", jp: "はい、{私|わたし}も {学生|がくせい}です。カランさんは {何|なん}さいですか。", ro: "Hai, watashi mo gakusei desu. Karan-san wa nansai desu ka.", en: "Yes, I'm a student too. How old are you, Karan?" },
      { s: "カラン", jp: "{23|にじゅうさん}さいです。マリアさんは？", ro: "Nijūsan-sai desu. Maria-san wa?", en: "I'm 23. And you, Maria?" },
      { s: "マリア", jp: "{22|にじゅうに}さいです。あの {人|ひと}も {学生|がくせい}ですか。", ro: "Nijūni-sai desu. Ano hito mo gakusei desu ka.", en: "I'm 22. Is that person a student too?" },
      { s: "カラン", jp: "いいえ、{学生|がくせい}じゃ ありません。さとう{先生|せんせい}です。", ro: "Iie, gakusei ja arimasen. Satō-sensei desu.", en: "No, not a student. That's Satō-sensei." }
    ],
    questions: [
      { q: "Where is Maria from?", qjp: "マリアさんは どこから きましたか。", answer: "Germany", options: ["America", "India", "France", "Germany"] },
      { q: "Who is older, and how old are they?", qjp: "カランさんは なんさいですか。マリアさんは？", answer: "Karan (23)", options: ["Karan (22)", "Maria (23)", "Maria (22)", "Karan (23)"] },
      { q: "What does Karan say about the person Maria asks about?", qjp: "あの ひとは がくせいですか。", answer: "No, that's Satō-sensei.", options: ["No, that's Satō-sensei.", "Yes, a student from India.", "No, that's a doctor.", "Yes, a student from Germany."] }
    ]
  },
  {
    id: "P1", lesson: 1, type: "passage", form: "self-introduction",
    title: "Meet Yamada-san", titleJp: "やまだです",
    lines: [
      { s: "", jp: "はじめまして。", ro: "Hajimemashite.", en: "Nice to meet you." },
      { s: "", jp: "{私|わたし}は やまだです。", ro: "Watashi wa Yamada desu.", en: "I'm Yamada." },
      { s: "", jp: "サンでんきの しゃいんです。", ro: "San Denki no shain desu.", en: "I work for Sun Denki." },
      { s: "", jp: "エンジニアじゃ ありません。", ro: "Enjinia ja arimasen.", en: "I'm not an engineer." },
      { s: "", jp: "こちらは たなかさんです。", ro: "Kochira wa Tanaka-san desu.", en: "This is Tanaka-san." },
      { s: "", jp: "たなかさんも サンでんきの しゃいんです。", ro: "Tanaka-san mo San Denki no shain desu.", en: "Tanaka-san works for Sun Denki too." },
      { s: "", jp: "たなかさんは エンジニアです。", ro: "Tanaka-san wa enjinia desu.", en: "Tanaka-san is an engineer." },
      { s: "", jp: "どうぞ よろしく おねがいします。", ro: "Dōzo yoroshiku onegai shimasu.", en: "Pleased to meet you." }
    ],
    questions: [
      { q: "Where does Yamada-san work?", qjp: "やまださんは どこの しゃいんですか。", answer: "Sun Denki", options: ["A hospital", "A university", "Sun Denki", "A bank"] },
      { q: "Who is the engineer?", qjp: "エンジニアは だれですか。", answer: "Tanaka-san", options: ["Neither of them", "Both of them", "Tanaka-san", "Yamada-san"] },
      { q: "What do Yamada-san and Tanaka-san have in common?", qjp: "たなかさんも サンでんきの しゃいんですか。", answer: "They work at the same company.", options: ["They are both students.", "They work at the same company.", "They are both engineers.", "They are both doctors."] }
    ]
  },

  // ───────────────────────── LESSON 2 ─────────────────────────
  {
    id: "C2", lesson: 2, type: "conversation",
    title: "Whose is it?", titleJp: "だれのですか",
    lines: [
      { s: "さとうせんせい", jp: "カランさん、これは カランさんの かさですか。", ro: "Karan-san, kore wa Karan-san no kasa desu ka.", en: "Karan, is this your umbrella?" },
      { s: "カラン", jp: "いいえ、ちがいます。マリアさんのです。", ro: "Iie, chigaimasu. Maria-san no desu.", en: "No, it isn't. It's Maria's." },
      { s: "さとうせんせい", jp: "そうですか。この {本|ほん}も マリアさんのですか。", ro: "Sō desu ka. Kono hon mo Maria-san no desu ka.", en: "I see. Is this book Maria's too?" },
      { s: "カラン", jp: "それは えいごの {本|ほん}ですか、{日本語|にほんご}の {本|ほん}ですか。", ro: "Sore wa eigo no hon desu ka, Nihongo no hon desu ka.", en: "Is that an English book or a Japanese book?" },
      { s: "さとうせんせい", jp: "{日本語|にほんご}の {本|ほん}です。", ro: "Nihongo no hon desu.", en: "It's a Japanese book." },
      { s: "カラン", jp: "{何|なん}の {本|ほん}ですか。", ro: "Nan no hon desu ka.", en: "What is it about?" },
      { s: "さとうせんせい", jp: "コンピューターの {本|ほん}です。", ro: "Konpyūtā no hon desu.", en: "It's a book about computers." },
      { s: "カラン", jp: "あのう、それは {私|わたし}のです。", ro: "Anō, sore wa watashi no desu.", en: "Um, that's mine." },
      { s: "さとうせんせい", jp: "そうですか。はい、どうぞ。", ro: "Sō desu ka. Hai, dōzo.", en: "I see. Here you are." },
      { s: "カラン", jp: "どうも ありがとう ございます。", ro: "Dōmo arigatō gozaimasu.", en: "Thank you very much." }
    ],
    questions: [
      { q: "Whose umbrella is it?", qjp: "これは だれの かさですか。", answer: "Maria's", options: ["Maria's", "Tanaka-san's", "Karan's", "Satō-sensei's"] },
      { q: "What is the book about?", qjp: "なんの ほんですか。", answer: "Computers", options: ["Computers", "Cameras", "Clocks", "The English language"] },
      { q: "Who does the book belong to?", qjp: "その ほんは だれのですか。", answer: "Karan", options: ["Karan", "Maria", "Nobody knows", "Satō-sensei"] }
    ]
  },
  {
    id: "P2", lesson: 2, type: "passage", form: "memo",
    title: "A note on the teacher's desk", titleJp: "せんせいの じしょ",
    lines: [
      { s: "", jp: "さとう{先生|せんせい}", ro: "Satō-sensei", en: "Dear Satō-sensei," },
      { s: "", jp: "これは {先生|せんせい}の じしょです。", ro: "Kore wa sensei no jisho desu.", en: "This is your dictionary." },
      { s: "", jp: "ありがとう ございます。", ro: "Arigatō gozaimasu.", en: "Thank you." },
      { s: "", jp: "この ノートは マリアさんのです。", ro: "Kono nōto wa Maria-san no desu.", en: "This notebook is Maria's." },
      { s: "", jp: "えいごの ノートです。", ro: "Eigo no nōto desu.", en: "It's an English notebook." },
      { s: "", jp: "あの かさは {先生|せんせい}のですか。", ro: "Ano kasa wa sensei no desu ka.", en: "Is that umbrella over there yours?" },
      { s: "", jp: "{私|わたし}のじゃ ありません。", ro: "Watashi no ja arimasen.", en: "It isn't mine." },
      { s: "", jp: "カラン", ro: "Karan", en: "Karan" }
    ],
    questions: [
      { q: "Whose dictionary is it?", qjp: "じしょは だれのですか。", answer: "Satō-sensei's", options: ["Tanaka-san's", "Maria's", "Satō-sensei's", "Karan's"] },
      { q: "What kind of notebook is Maria's?", qjp: "マリアさんの ノートは なんの ノートですか。", answer: "An English notebook", options: ["A Japanese notebook", "A computer notebook", "An English notebook", "A pocket notebook"] },
      { q: "What does Karan say about the umbrella?", qjp: "あの かさは カランさんのですか。", answer: "It isn't his, and he asks if it's the teacher's.", options: ["It is a present for the teacher.", "It is Maria's.", "It isn't his, and he asks if it's the teacher's.", "It is his, and he wants it back."] }
    ]
  },

  // ───────────────────────── LESSON 3 ─────────────────────────
  {
    id: "C3", lesson: 3, type: "conversation",
    title: "At the front desk", titleJp: "じむしょは どこですか",
    lines: [
      { s: "カラン", jp: "すみません。サンでんきの じむしょは どこですか。", ro: "Sumimasen. San Denki no jimusho wa doko desu ka.", en: "Excuse me. Where is the Sun Denki office?" },
      { s: "やまださん", jp: "{7|なな}かいです。", ro: "Nanakai desu.", en: "It's on the seventh floor." },
      { s: "カラン", jp: "エレベーターは どちらですか。", ro: "Erebētā wa dochira desu ka.", en: "Which way is the elevator?" },
      { s: "やまださん", jp: "あちらです。", ro: "Achira desu.", en: "It's over there." },
      { s: "カラン", jp: "あのう、じどうはんばいきは どこですか。", ro: "Anō, jidō hanbaiki wa doko desu ka.", en: "Um, where is the vending machine?" },
      { s: "やまださん", jp: "じどうはんばいきですか。ちかです。", ro: "Jidō hanbaiki desu ka. Chika desu.", en: "The vending machine? It's in the basement." },
      { s: "カラン", jp: "コーヒーは いくらですか。", ro: "Kōhī wa ikura desu ka.", en: "How much is a coffee?" },
      { s: "やまださん", jp: "{150円|ひゃくごじゅうえん}です。ブラジルの コーヒーです。", ro: "Hyaku gojū-en desu. Burajiru no kōhī desu.", en: "It's 150 yen. It's coffee from Brazil." },
      { s: "カラン", jp: "そうですか。どうも ありがとう ございます。", ro: "Sō desu ka. Dōmo arigatō gozaimasu.", en: "I see. Thank you very much." }
    ],
    questions: [
      { q: "Which floor is the Sun Denki office on?", qjp: "サンでんきの じむしょは なんがいですか。", answer: "7かい", options: ["5かい", "7かい", "ちか", "1かい"] },
      { q: "Where is the vending machine?", qjp: "じどうはんばいきは どこですか。", answer: "In the basement", options: ["On the seventh floor", "Over there by the elevator", "In the lobby", "In the basement"] },
      { q: "What do we learn about the coffee?", qjp: "コーヒーは いくらですか。どこの コーヒーですか。", answer: "It costs ¥150 and comes from Brazil.", options: ["It costs ¥500 and comes from Japan.", "It costs ¥150 and comes from India.", "It costs ¥150 and comes from Brazil.", "It costs ¥115 and comes from Brazil."] }
    ]
  },
  {
    id: "P3", lesson: 3, type: "passage", form: "notice",
    title: "Building guide", titleJp: "ひかりだいがく",
    lines: [
      { s: "", jp: "ここは ひかり{大学|だいがく}です。", ro: "Koko wa Hikari Daigaku desu.", en: "This is Hikari University." },
      { s: "", jp: "{1|いっ}かいは うけつけです。", ro: "Ikkai wa uketsuke desu.", en: "The first floor is the reception desk." },
      { s: "", jp: "じどうはんばいきも {1|いっ}かいです。", ro: "Jidō hanbaiki mo ikkai desu.", en: "The vending machine is on the first floor too." },
      { s: "", jp: "きょうしつは {2|に}かいです。", ro: "Kyōshitsu wa nikai desu.", en: "The classrooms are on the second floor." },
      { s: "", jp: "じむしょは {3|さん}がいです。", ro: "Jimusho wa sangai desu.", en: "The office is on the third floor." },
      { s: "", jp: "しょくどうは ちかです。", ro: "Shokudō wa chika desu.", en: "The dining hall is in the basement." },
      { s: "", jp: "しょくどうの コーヒーは {100円|ひゃくえん}です。", ro: "Shokudō no kōhī wa hyaku-en desu.", en: "Coffee in the dining hall is 100 yen." },
      { s: "", jp: "じどうはんばいきの コーヒーは {130円|ひゃくさんじゅうえん}です。", ro: "Jidō hanbaiki no kōhī wa hyaku sanjū-en desu.", en: "Coffee from the vending machine is 130 yen." }
    ],
    questions: [
      { q: "Which floor are the classrooms on?", qjp: "きょうしつは なんがいですか。", answer: "2かい", options: ["ちか", "1かい", "2かい", "3がい"] },
      { q: "What is on the first floor?", qjp: "1かいは なんですか。", answer: "The reception desk and a vending machine", options: ["The dining hall", "The reception desk and a vending machine", "The classrooms", "The office"] },
      { q: "You want the cheaper coffee. Where do you go?", qjp: "100えんの コーヒーは どこですか。", answer: "The basement", options: ["The second floor", "The first floor", "The third floor", "The basement"] }
    ]
  },

  // ───────────────────────── LESSON 4 ─────────────────────────
  {
    id: "C4", lesson: 4, type: "conversation",
    title: "A short night", titleJp: "なんじに ねましたか",
    lines: [
      { s: "マリア", jp: "おはよう ございます。カランさん、{今|いま} {何時|なんじ}ですか。", ro: "Ohayō gozaimasu. Karan-san, ima nan-ji desu ka.", en: "Good morning. Karan, what time is it now?" },
      { s: "カラン", jp: "{8時|はちじ}{50分|ごじゅっぷん}です。", ro: "Hachi-ji gojuppun desu.", en: "It's 8:50." },
      { s: "マリア", jp: "きのうは {何時|なんじ}に ねましたか。", ro: "Kinō wa nan-ji ni nemashita ka.", en: "What time did you go to bed last night?" },
      { s: "カラン", jp: "{午前|ごぜん} {2時|にじ}に ねました。", ro: "Gozen ni-ji ni nemashita.", en: "I went to bed at 2 a.m." },
      { s: "マリア", jp: "{2時|にじ}ですか。たいへんですね。", ro: "Ni-ji desu ka. Taihen desu ne.", en: "Two o'clock? That's tough." },
      { s: "カラン", jp: "はい。げつようびから もくようびまで {毎日|まいにち} べんきょうします。", ro: "Hai. Getsuyōbi kara mokuyōbi made mainichi benkyō shimasu.", en: "Yes. I study every day from Monday to Thursday." },
      { s: "マリア", jp: "きんようびは べんきょうしますか。", ro: "Kin’yōbi wa benkyō shimasu ka.", en: "Do you study on Fridays?" },
      { s: "カラン", jp: "いいえ、べんきょうしません。きんようびの ばんは {休|やす}みます。", ro: "Iie, benkyō shimasen. Kin’yōbi no ban wa yasumimasu.", en: "No, I don't. On Friday nights I rest." }
    ],
    questions: [
      { q: "What time is it during this conversation?", qjp: "いま なんじですか。", answer: "8:50", options: ["9:50", "8:50", "2:00", "8:15"] },
      { q: "When did Karan go to bed?", qjp: "カランさんは きのう なんじに ねましたか。", answer: "At 2 a.m.", options: ["At 12 midnight", "At 2 p.m.", "At 8 p.m.", "At 2 a.m."] },
      { q: "What does Karan do on Friday nights?", qjp: "カランさんは きんようびの ばんに べんきょうしますか。", answer: "He rests.", options: ["He works.", "He stays up until 2 a.m.", "He studies.", "He rests."] }
    ]
  },
  {
    id: "P4", lesson: 4, type: "passage", form: "timetable",
    title: "Tanaka-san's day", titleJp: "たなかさんの まいにち",
    lines: [
      { s: "", jp: "{私|わたし}は げつようびから きんようびまで はたらきます。", ro: "Watashi wa getsuyōbi kara kin’yōbi made hatarakimasu.", en: "I work from Monday to Friday." },
      { s: "", jp: "まいあさ {6時半|ろくじはん}に おきます。", ro: "Maiasa roku-ji han ni okimasu.", en: "I get up at 6:30 every morning." },
      { s: "", jp: "{会社|かいしゃ}は {午前|ごぜん} {9時|くじ}から {午後|ごご} {6時|ろくじ}までです。", ro: "Kaisha wa gozen ku-ji kara gogo roku-ji made desu.", en: "Work is from 9 a.m. to 6 p.m." },
      { s: "", jp: "ひるやすみは {12時|じゅうにじ}から {1時|いちじ}までです。", ro: "Hiruyasumi wa jūni-ji kara ichi-ji made desu.", en: "My lunch break is from 12:00 to 1:00." },
      { s: "", jp: "まいばん {8時|はちじ}から {9時|くじ}まで べんきょうします。", ro: "Maiban hachi-ji kara ku-ji made benkyō shimasu.", en: "Every evening I study from 8:00 to 9:00." },
      { s: "", jp: "{11時|じゅういちじ}に ねます。", ro: "Jūichi-ji ni nemasu.", en: "I go to bed at 11:00." },
      { s: "", jp: "どようびと にちようびは {休|やす}みます。", ro: "Doyōbi to nichiyōbi wa yasumimasu.", en: "I rest on Saturdays and Sundays." }
    ],
    questions: [
      { q: "What time does Tanaka-san get up?", qjp: "たなかさんは なんじに おきますか。", answer: "6:30", options: ["6:30", "7:30", "9:00", "6:00"] },
      { q: "It is 8:30 p.m. What is Tanaka-san doing?", qjp: "たなかさんは ごご 8じはんに はたらきますか。", answer: "いいえ、べんきょうします。", options: ["いいえ、やすみます。", "いいえ、べんきょうします。", "はい、はたらきます。", "いいえ、ねます。"] },
      { q: "Which days does Tanaka-san not work?", qjp: "たなかさんは なんようびに やすみますか。", answer: "Saturday and Sunday", options: ["Saturday and Sunday", "Friday and Saturday", "Sunday only", "Sunday and Monday"] }
    ]
  },

  // ───────────────────────── LESSON 5 ─────────────────────────
  {
    id: "C5", lesson: 5, type: "conversation",
    title: "Off to Osaka", titleJp: "おおさかへ いきます",
    lines: [
      { s: "モチ", jp: "おはよう ございます。カランさん、どこへ {行|い}きますか。", ro: "Ohayō gozaimasu. Karan-san, doko e ikimasu ka.", en: "Good morning. Where are you going, Karan?" },
      { s: "カラン", jp: "おはよう ございます。おおさかへ {行|い}きます。", ro: "Ohayō gozaimasu. Ōsaka e ikimasu.", en: "Good morning. I'm going to Osaka." },
      { s: "モチ", jp: "{一人|ひとり}で {行|い}きますか。", ro: "Hitori de ikimasu ka.", en: "Are you going alone?" },
      { s: "カラン", jp: "いいえ、マリアさんと {行|い}きます。マリアさんの たんじょうびです。", ro: "Iie, Maria-san to ikimasu. Maria-san no tanjōbi desu.", en: "No, I'm going with Maria. It's her birthday." },
      { s: "モチ", jp: "そうですか。とっきゅうで {行|い}きますか。", ro: "Sō desu ka. Tokkyū de ikimasu ka.", en: "I see. Are you going by limited express?" },
      { s: "カラン", jp: "いいえ、しんかんせんで {行|い}きます。", ro: "Iie, shinkansen de ikimasu.", en: "No, we're going by Shinkansen." },
      { s: "モチ", jp: "いつ かえりますか。", ro: "Itsu kaerimasu ka.", en: "When are you coming back?" },
      { s: "カラン", jp: "{5日|いつか}に かえります。", ro: "Itsuka ni kaerimasu.", en: "I'm coming back on the 5th." },
      { s: "モチ", jp: "カランさん、しんかんせんは {3|さん}ばんせんですよ。", ro: "Karan-san, shinkansen wa sanbansen desu yo.", en: "Karan, the Shinkansen is on platform 3, you know." },
      { s: "カラン", jp: "ありがとう ございます。", ro: "Arigatō gozaimasu.", en: "Thank you." }
    ],
    questions: [
      { q: "Who is Karan going with?", qjp: "カランさんは だれと いきますか。", answer: "Maria", options: ["Tanaka-san", "He is going alone.", "Maria", "Mochi"] },
      { q: "When is Karan coming back?", qjp: "カランさんは いつ かえりますか。", answer: "On the 5th", options: ["On the 5th", "On the 20th", "On the 3rd", "On the 8th"] },
      { q: "Which platform does Karan need?", qjp: "しんかんせんは なんばんせんですか。", answer: "3ばんせん", options: ["3ばんせん", "1ばんせん", "5ばんせん", "4ばんせん"] }
    ]
  },
  {
    id: "P5", lesson: 5, type: "passage", form: "email",
    title: "An email from Tanaka-san", titleJp: "とうきょうへ いきます",
    lines: [
      { s: "", jp: "やまださん", ro: "Yamada-san", en: "Dear Yamada-san," },
      { s: "", jp: "たなかです。", ro: "Tanaka desu.", en: "This is Tanaka." },
      { s: "", jp: "{来週|らいしゅう}の げつようび、{10日|とおか}に とうきょうへ {行|い}きます。", ro: "Raishū no getsuyōbi, tōka ni Tōkyō e ikimasu.", en: "Next Monday, the 10th, I'm going to Tokyo." },
      { s: "", jp: "{会社|かいしゃ}の {人|ひと}と しんかんせんで {行|い}きます。", ro: "Kaisha no hito to shinkansen de ikimasu.", en: "I'm going by Shinkansen with someone from the company." },
      { s: "", jp: "すいようび、{12日|じゅうににち}に おおさかへ かえります。", ro: "Suiyōbi, jūni-nichi ni Ōsaka e kaerimasu.", en: "I'll return to Osaka on Wednesday the 12th." },
      { s: "", jp: "もくようびは {会社|かいしゃ}へ {行|い}きます。", ro: "Mokuyōbi wa kaisha e ikimasu.", en: "On Thursday I'll go to the office." },
      { s: "", jp: "よろしく おねがいします。", ro: "Yoroshiku onegai shimasu.", en: "Best regards." }
    ],
    questions: [
      { q: "Who is Tanaka-san going to Tokyo with?", qjp: "たなかさんは だれと とうきょうへ いきますか。", answer: "Someone from his company", options: ["Someone from his company", "Nobody; he is going alone.", "His family", "Yamada-san"] },
      { q: "When will Tanaka-san be back in Osaka?", qjp: "たなかさんは いつ おおさかへ かえりますか。", answer: "Wednesday the 12th", options: ["Thursday the 13th", "Wednesday the 12th", "Tuesday the 11th", "Monday the 10th"] },
      { q: "What date will Tanaka-san be back at the office?", qjp: "たなかさんは なんにちに かいしゃへ いきますか。", answer: "The 13th", options: ["The 13th", "The 10th", "The 12th", "The 14th"] }
    ]
  },

  // ───────────────────────── LESSON 6 ─────────────────────────
  {
    id: "C6", lesson: 6, type: "conversation",
    title: "Sunday soccer", titleJp: "サッカーを しませんか",
    lines: [
      { s: "マリア", jp: "カランさん、にちようびは {何|なに}を しますか。", ro: "Karan-san, nichiyōbi wa nani o shimasu ka.", en: "Karan, what are you doing on Sunday?" },
      { s: "カラン", jp: "うちで ビデオを {見|み}ます。マリアさんは？", ro: "Uchi de bideo o mimasu. Maria-san wa?", en: "I'm watching a video at home. What about you, Maria?" },
      { s: "マリア", jp: "{友|とも}だちと {大学|だいがく}で サッカーを します。カランさんも いっしょに しませんか。", ro: "Tomodachi to daigaku de sakkā o shimasu. Karan-san mo issho ni shimasen ka.", en: "I'm playing soccer at the university with a friend. Won't you play with us?" },
      { s: "カラン", jp: "いいですね。どこで {会|あ}いますか。", ro: "Ii desu ne. Doko de aimasu ka.", en: "That sounds good. Where shall we meet?" },
      { s: "マリア", jp: "{午前|ごぜん} {10時|じゅうじ}に {駅|えき}で {会|あ}いましょう。", ro: "Gozen jū-ji ni eki de aimashō.", en: "Let's meet at the station at 10 a.m." },
      { s: "カラン", jp: "{分|わ}かりました。", ro: "Wakarimashita.", en: "Got it." },
      { s: "マリア", jp: "それから、いっしょに ひるごはんを {食|た}べましょう。", ro: "Sore kara, issho ni hirugohan o tabemashō.", en: "And after that, let's have lunch together." },
      { s: "カラン", jp: "いいですね。じゃ、また にちようびに。", ro: "Ii desu ne. Ja, mata nichiyōbi ni.", en: "Sounds good. See you on Sunday, then." }
    ],
    questions: [
      { q: "What was Karan's plan for Sunday?", qjp: "カランさんは うちで なにを みますか。", answer: "To watch a video at home", options: ["To go to the station", "To watch a video at home", "To write a report", "To play tennis"] },
      { q: "Where and when will they meet?", qjp: "なんじに どこで あいますか。", answer: "At the station at 10 a.m.", options: ["At the station at 10 p.m.", "At the university at 10 a.m.", "At the station at 10 a.m.", "At Karan's home at noon"] },
      { q: "What will they do after soccer?", qjp: "それから なにを しますか。", answer: "Have lunch together", options: ["Play tennis", "Go home", "Watch a video", "Have lunch together"] }
    ]
  },
  {
    id: "P6", lesson: 6, type: "passage", form: "diary",
    title: "Karan's Sunday", titleJp: "サッカーの にちようび",
    lines: [
      { s: "", jp: "{今日|きょう}は {7時|しちじ}に おきました。", ro: "Kyō wa shichi-ji ni okimashita.", en: "Today I got up at 7:00." },
      { s: "", jp: "あさごはんは パンと たまごを {食|た}べました。", ro: "Asagohan wa pan to tamago o tabemashita.", en: "For breakfast I had bread and eggs." },
      { s: "", jp: "{10時|じゅうじ}に {駅|えき}で マリアさんに {会|あ}いました。", ro: "Jū-ji ni eki de Maria-san ni aimashita.", en: "I met Maria at the station at 10:00." },
      { s: "", jp: "{大学|だいがく}で マリアさんと マリアさんの {友|とも}だちと サッカーを しました。", ro: "Daigaku de Maria-san to Maria-san no tomodachi to sakkā o shimashita.", en: "I played soccer at the university with Maria and her friend." },
      { s: "", jp: "それから、レストランで {魚|さかな}と ごはんを {食|た}べました。", ro: "Sore kara, resutoran de sakana to gohan o tabemashita.", en: "After that, we ate fish and rice at a restaurant." },
      { s: "", jp: "{午後|ごご}は うちで レポートを {書|か}きました。", ro: "Gogo wa uchi de repōto o kakimashita.", en: "In the afternoon I wrote a report at home." },
      { s: "", jp: "{11時|じゅういちじ}に ねました。", ro: "Jūichi-ji ni nemashita.", en: "I went to bed at 11:00." }
    ],
    questions: [
      { q: "What did Karan have for breakfast?", qjp: "カランさんは あさごはんに なにを たべましたか。", answer: "Bread and eggs", options: ["Fish and rice", "Nothing", "Bread and milk", "Bread and eggs"] },
      { q: "Who did Karan play soccer with?", qjp: "カランさんは だれと サッカーを しましたか。", answer: "Maria and her friend", options: ["Only Maria", "Maria and her friend", "Mochi", "Tanaka-san"] },
      { q: "What did Karan do in the afternoon?", qjp: "カランさんは ごご なにを しましたか。", answer: "He wrote a report at home.", options: ["He played soccer at the university.", "He went to a restaurant.", "He wrote a report at home.", "He watched a video at home."] }
    ]
  },

  // ───────────────────────── LESSON 7 ─────────────────────────
  {
    id: "C7", lesson: 7, type: "conversation",
    title: "A present from Tokyo", titleJp: "はしで たべますか",
    lines: [
      { s: "たなかさん", jp: "カランさん、もう ひるごはんを {食|た}べましたか。", ro: "Karan-san, mō hirugohan o tabemashita ka.", en: "Karan, have you had lunch yet?" },
      { s: "カラン", jp: "いいえ、まだです。これから {食|た}べます。", ro: "Iie, mada desu. Kore kara tabemasu.", en: "No, not yet. I'm about to eat." },
      { s: "たなかさん", jp: "カランさんは はしで {食|た}べますか。", ro: "Karan-san wa hashi de tabemasu ka.", en: "Do you eat with chopsticks, Karan?" },
      { s: "カラン", jp: "はい。マリアさんに ならいました。", ro: "Hai. Maria-san ni naraimashita.", en: "Yes. I learned from Maria." },
      { s: "たなかさん", jp: "インドでも はしで {食|た}べますか。", ro: "Indo de mo hashi de tabemasu ka.", en: "Do you eat with chopsticks in India too?" },
      { s: "カラン", jp: "いいえ、インドでは {手|て}で {食|た}べます。スプーンでも {食|た}べます。", ro: "Iie, Indo de wa te de tabemasu. Supūn de mo tabemasu.", en: "No, in India we eat with our hands. We use spoons too." },
      { s: "たなかさん", jp: "そうですか。カランさん、これ、とうきょうの おみやげです。", ro: "Sō desu ka. Karan-san, kore, Tōkyō no omiyage desu.", en: "I see. Karan, this is an omiyage from Tokyo." },
      { s: "カラン", jp: "「おみやげ」は えいごで {何|なん}ですか。", ro: "“Omiyage” wa eigo de nan desu ka.", en: "What is “omiyage” in English?" },
      { s: "たなかさん", jp: "「souvenir」です。はしです。どうぞ。", ro: "“Souvenir” desu. Hashi desu. Dōzo.", en: "“Souvenir.” They're chopsticks. Here you are." },
      { s: "カラン", jp: "ありがとう ございます。すてきですね。", ro: "Arigatō gozaimasu. Suteki desu ne.", en: "Thank you. They're lovely." }
    ],
    questions: [
      { q: "Who taught Karan to use chopsticks?", qjp: "カランさんは だれに ならいましたか。", answer: "Maria", options: ["Satō-sensei", "His mother", "Tanaka-san", "Maria"] },
      { q: "How does Karan say people eat in India?", qjp: "インドでも はしで たべますか。", answer: "With their hands or a spoon", options: ["With a knife and fork", "Only with a fork", "With chopsticks", "With their hands or a spoon"] },
      { q: "What did Tanaka-san give Karan?", qjp: "たなかさんは カランさんに なにを あげましたか。", answer: "Chopsticks from Tokyo", options: ["Chopsticks from Tokyo", "A book in English", "A spoon from India", "Lunch"] }
    ]
  },
  {
    id: "P7", lesson: 7, type: "passage", form: "letter",
    title: "A letter to Karan's mother", titleJp: "おかあさんへ",
    lines: [
      { s: "", jp: "お{母|かあ}さん、こんにちは。", ro: "Okāsan, konnichiwa.", en: "Hello, Mother." },
      { s: "", jp: "{私|わたし}は {毎日|まいにち} {大学|だいがく}で さとう{先生|せんせい}に {日本語|にほんご}を ならいます。", ro: "Watashi wa mainichi daigaku de Satō-sensei ni Nihongo o naraimasu.", en: "Every day I learn Japanese from Satō-sensei at the university." },
      { s: "", jp: "{先週|せんしゅう}、たなかさんに はしを もらいました。", ro: "Senshū, Tanaka-san ni hashi o moraimashita.", en: "Last week I received some chopsticks from Tanaka-san." },
      { s: "", jp: "{今日|きょう}、ゆうびんきょくで お{母|かあ}さんに {日本|にほん}の はしを おくりました。", ro: "Kyō, yūbinkyoku de okāsan ni Nihon no hashi o okurimashita.", en: "Today, at the post office, I sent you some Japanese chopsticks." },
      { s: "", jp: "それから、お{父|とう}さんの カメラで {花|はな}の しゃしんを とりました。", ro: "Sore kara, otōsan no kamera de hana no shashin o torimashita.", en: "After that, I took some photos of flowers with Father's camera." },
      { s: "", jp: "その しゃしんも おくりました。", ro: "Sono shashin mo okurimashita.", en: "I sent you those photos too." },
      { s: "", jp: "{来週|らいしゅう}、お{父|とう}さんに {電話|でんわ}を かけます。", ro: "Raishū, otōsan ni denwa o kakemasu.", en: "Next week I'll phone Father." },
      { s: "", jp: "カラン", ro: "Karan", en: "Karan" }
    ],
    questions: [
      { q: "Who teaches Karan Japanese?", qjp: "カランさんは だれに にほんごを ならいますか。", answer: "Satō-sensei", options: ["His father", "Tanaka-san", "Maria", "Satō-sensei"] },
      { q: "What did Karan send his mother?", qjp: "カランさんは おかあさんに なにを おくりましたか。", answer: "Chopsticks and photos", options: ["Flowers and money", "Chopsticks and photos", "Only a letter", "A camera and flowers"] },
      { q: "Whose camera did Karan use?", qjp: "だれの カメラで しゃしんを とりましたか。", answer: "His father's", options: ["His father's", "Tanaka-san's", "His own", "His mother's"] }
    ]
  },

  // ───────────────────────── LESSON 8 ─────────────────────────
  {
    id: "C8", lesson: 8, type: "conversation",
    title: "Dorm life", titleJp: "りょうの せいかつ",
    lines: [
      { s: "モチ", jp: "カランさん、りょうの せいかつは どうですか。", ro: "Karan-san, ryō no seikatsu wa dō desu ka.", en: "Karan, how is life in the dormitory?" },
      { s: "カラン", jp: "たのしいですよ。へやは {小|ちい}さいですが、きれいです。", ro: "Tanoshii desu yo. Heya wa chiisai desu ga, kirei desu.", en: "It's fun. My room is small, but it's clean." },
      { s: "モチ", jp: "りょうの ごはんは おいしいですか。", ro: "Ryō no gohan wa oishii desu ka.", en: "Is the dorm food good?" },
      { s: "カラン", jp: "いいえ、あまり おいしくないです。", ro: "Iie, amari oishikunai desu.", en: "No, it's not very good." },
      { s: "モチ", jp: "そうですか。みどりまちは どんな まちですか。", ro: "Sō desu ka. Midori-machi wa donna machi desu ka.", en: "I see. What kind of town is Midori?" },
      { s: "カラン", jp: "しずかな まちです。{人|ひと}も しんせつです。", ro: "Shizuka na machi desu. Hito mo shinsetsu desu.", en: "It's a quiet town. The people are kind too." },
      { s: "モチ", jp: "べんきょうは どうですか。", ro: "Benkyō wa dō desu ka.", en: "How are your studies?" },
      { s: "カラン", jp: "{日本語|にほんご}は むずかしいですが、おもしろいです。", ro: "Nihongo wa muzukashii desu ga, omoshiroi desu.", en: "Japanese is difficult, but it's interesting." },
      { s: "モチ", jp: "さとう{先生|せんせい}は どんな {先生|せんせい}ですか。", ro: "Satō-sensei wa donna sensei desu ka.", en: "What kind of teacher is Satō-sensei?" },
      { s: "カラン", jp: "とても げんきな {先生|せんせい}です。", ro: "Totemo genki na sensei desu.", en: "A very energetic teacher." }
    ],
    questions: [
      { q: "What is Karan's room like?", qjp: "カランさんの へやは どうですか。", answer: "Small but clean", options: ["Big but expensive", "Big and clean", "Small but clean", "Small and old"] },
      { q: "What does Karan say about the dorm food?", qjp: "りょうの ごはんは おいしいですか。", answer: "It's not very good.", options: ["It's very good.", "It's expensive.", "It's spicy.", "It's not very good."] },
      { q: "What kind of teacher is Satō-sensei?", qjp: "さとうせんせいは どんな せんせいですか。", answer: "げんきな せんせい", options: ["しずかな せんせい", "いそがしい せんせい", "ゆうめいな せんせい", "げんきな せんせい"] }
    ]
  },
  {
    id: "P8", lesson: 8, type: "passage", form: "poster",
    title: "Visit Midori Town", titleJp: "みどりまちへ きませんか",
    lines: [
      { s: "", jp: "みどりまちへ {来|き}ませんか。", ro: "Midori-machi e kimasen ka.", en: "Why not come to Midori Town?" },
      { s: "", jp: "みどりまちは しずかな まちです。", ro: "Midori-machi wa shizuka na machi desu.", en: "Midori is a quiet town." },
      { s: "", jp: "{山|やま}は あまり {高|たか}くないですが、きれいです。", ro: "Yama wa amari takakunai desu ga, kirei desu.", en: "The mountains aren't very high, but they're beautiful." },
      { s: "", jp: "{4月|しがつ}の さくらは ゆうめいです。", ro: "Shi-gatsu no sakura wa yūmei desu.", en: "The cherry blossoms in April are famous." },
      { s: "", jp: "{魚|さかな}は {安|やす}いです。", ro: "Sakana wa yasui desu.", en: "The fish is cheap." },
      { s: "", jp: "そして、とても おいしいです。", ro: "Soshite, totemo oishii desu.", en: "And it's very delicious." },
      { s: "", jp: "{古|ふる}い レストランも ゆうめいです。", ro: "Furui resutoran mo yūmei desu.", en: "The old restaurants are famous too." },
      { s: "", jp: "みどりまちの {人|ひと}は とても しんせつです。", ro: "Midori-machi no hito wa totemo shinsetsu desu.", en: "The people of Midori are very kind." }
    ],
    questions: [
      { q: "What are the mountains like?", qjp: "みどりまちの やまは どうですか。", answer: "Not very high, but beautiful", options: ["Not very beautiful", "High and beautiful", "Very high, but not beautiful", "Not very high, but beautiful"] },
      { q: "When should you visit to see the famous cherry blossoms?", qjp: "さくらは なんがつですか。", answer: "April", options: ["October", "August", "April", "January"] },
      { q: "What does the poster say about the fish?", qjp: "さかなは どうですか。", answer: "It's cheap and delicious.", options: ["It's expensive but delicious.", "It's cheap and delicious.", "It's famous but expensive.", "It's cheap but not very good."] }
    ]
  },

  // ───────────────────────── LESSON 9 ─────────────────────────
  {
    id: "C9", lesson: 9, type: "conversation",
    title: "Kanji are pictures", titleJp: "かんじも えです",
    lines: [
      { s: "さとうせんせい", jp: "カランさん、かんじが {分|わ}かりますか。", ro: "Karan-san, kanji ga wakarimasu ka.", en: "Karan, do you understand kanji?" },
      { s: "カラン", jp: "すこし {分|わ}かります。ひらがなと かたかなは だいたい {分|わ}かります。", ro: "Sukoshi wakarimasu. Hiragana to katakana wa daitai wakarimasu.", en: "I understand a little. I mostly understand hiragana and katakana." },
      { s: "さとうせんせい", jp: "かんじは すきですか。", ro: "Kanji wa suki desu ka.", en: "Do you like kanji?" },
      { s: "カラン", jp: "いいえ、あまり すきじゃ ありません。", ro: "Iie, amari suki ja arimasen.", en: "No, I don't like them very much." },
      { s: "さとうせんせい", jp: "どうしてですか。", ro: "Dōshite desu ka.", en: "Why not?" },
      { s: "カラン", jp: "たくさん ありますから。", ro: "Takusan arimasu kara.", en: "Because there are so many." },
      { s: "さとうせんせい", jp: "カランさんは えが じょうずですね。", ro: "Karan-san wa e ga jōzu desu ne.", en: "You're good at drawing, aren't you, Karan?" },
      { s: "カラン", jp: "いいえ、へたですが、すきです。", ro: "Iie, heta desu ga, suki desu.", en: "No, I'm bad at it, but I like it." },
      { s: "さとうせんせい", jp: "かんじも えですよ。{山|やま}は やまの えです。", ro: "Kanji mo e desu yo. Yama wa yama no e desu.", en: "Kanji are pictures too, you know. 山 is a picture of a mountain." },
      { s: "カラン", jp: "ああ、そうですか。おもしろいですね。", ro: "Ā, sō desu ka. Omoshiroi desu ne.", en: "Oh, I see. That's interesting." }
    ],
    questions: [
      { q: "What does Karan understand best?", qjp: "カランさんは なにが だいたい わかりますか。", answer: "Hiragana and katakana", options: ["Kanji", "Nothing at all", "Roman letters", "Hiragana and katakana"] },
      { q: "Why doesn't Karan like kanji very much?", qjp: "カランさんは どうして かんじが あまり すきじゃ ありませんか。", answer: "Because there are so many", options: ["Because there are so many", "Because they are not interesting", "Because he doesn't like drawing", "Because the teacher is strict"] },
      { q: "What does Satō-sensei say about kanji?", qjp: "かんじも えですか。", answer: "Kanji are pictures too.", options: ["Kanji are pictures too.", "There are only a few kanji.", "Kanji are not interesting.", "Karan doesn't need kanji."] }
    ]
  },
  {
    id: "P9", lesson: 9, type: "passage", form: "notice",
    title: "Japanese teacher wanted", titleJp: "にほんごを おしえませんか",
    lines: [
      { s: "", jp: "{日本語|にほんご}を おしえませんか。", ro: "Nihongo o oshiemasen ka.", en: "Would you like to teach me Japanese?" },
      { s: "", jp: "{私|わたし}は ドイツ{人|じん}の マリアです。", ro: "Watashi wa Doitsu-jin no Maria desu.", en: "I'm Maria, from Germany." },
      { s: "", jp: "{日本語|にほんご}は すこし {分|わ}かりますが、かんじは ぜんぜん {分|わ}かりません。", ro: "Nihongo wa sukoshi wakarimasu ga, kanji wa zenzen wakarimasen.", en: "I understand a little Japanese, but I don't understand kanji at all." },
      { s: "", jp: "りょうりが すきですから、ドイツの りょうりを おしえます。", ro: "Ryōri ga suki desu kara, Doitsu no ryōri o oshiemasu.", en: "I like cooking, so I'll teach you German cooking." },
      { s: "", jp: "げつようびから きんようびまでは いそがしいですから、じかんが ありません。", ro: "Getsuyōbi kara kin’yōbi made wa isogashii desu kara, jikan ga arimasen.", en: "I'm busy from Monday to Friday, so I have no time then." },
      { s: "", jp: "どようびの {午後|ごご}は じかんが あります。", ro: "Doyōbi no gogo wa jikan ga arimasu.", en: "I have time on Saturday afternoons." },
      { s: "", jp: "よろしく おねがいします。", ro: "Yoroshiku onegai shimasu.", en: "Thank you." }
    ],
    questions: [
      { q: "What does Maria not understand at all?", qjp: "マリアさんは なにが ぜんぜん わかりませんか。", answer: "Kanji", options: ["German", "Cooking", "Hiragana", "Kanji"] },
      { q: "What will Maria teach in return?", qjp: "マリアさんは なにを おしえますか。", answer: "German cooking", options: ["German songs", "German cooking", "English", "Japanese cooking"] },
      { q: "When can you meet Maria?", qjp: "マリアさんは いつ じかんが ありますか。", answer: "Saturday afternoon", options: ["Sunday morning", "Saturday afternoon", "Monday afternoon", "Friday evening"] }
    ]
  },

  // ───────────────────────── LESSON 10 ─────────────────────────
  {
    id: "C10", lesson: 10, type: "conversation",
    title: "The missing bag", titleJp: "わたしの かばん",
    lines: [
      { s: "カラン", jp: "モチさん、すみません。{私|わたし}の かばんが ありません。", ro: "Mochi-san, sumimasen. Watashi no kaban ga arimasen.", en: "Excuse me, Mochi. My bag isn't here." },
      { s: "モチ", jp: "どんな かばんですか。", ro: "Donna kaban desu ka.", en: "What kind of bag is it?" },
      { s: "カラン", jp: "{小|ちい}さい {白|しろ}い かばんです。", ro: "Chiisai shiroi kaban desu.", en: "It's a small white bag." },
      { s: "モチ", jp: "{中|なか}に {何|なに}が ありますか。", ro: "Naka ni nani ga arimasu ka.", en: "What's inside it?" },
      { s: "カラン", jp: "{本|ほん}や カメラなどが あります。", ro: "Hon ya kamera nado ga arimasu.", en: "There's a book, a camera and so on." },
      { s: "モチ", jp: "あそこに {男|おとこ}の {人|ひと}が いますね。", ro: "Asoko ni otoko no hito ga imasu ne.", en: "There's a man over there, isn't there?" },
      { s: "カラン", jp: "はい、います。", ro: "Hai, imasu.", en: "Yes, there is." },
      { s: "モチ", jp: "あの {人|ひと}の いすの {下|した}に {白|しろ}い かばんが ありますよ。", ro: "Ano hito no isu no shita ni shiroi kaban ga arimasu yo.", en: "There's a white bag under that man's chair." },
      { s: "カラン", jp: "ああ、ありました！ ありがとう ございます。", ro: "Ā, arimashita! Arigatō gozaimasu.", en: "Oh, there it is! Thank you." },
      { s: "モチ", jp: "ねこは いつも {下|した}を {見|み}ますから。", ro: "Neko wa itsumo shita o mimasu kara.", en: "Well, cats are always looking down low." }
    ],
    questions: [
      { q: "What is Karan's bag like?", qjp: "カランさんの かばんは どんな かばんですか。", answer: "Small and white", options: ["Small and black", "Small and white", "Big and white", "Big and red"] },
      { q: "What is inside the bag?", qjp: "かばんの なかに なにが ありますか。", answer: "A book and a camera", options: ["A camera and a watch", "A book and a key", "A newspaper and a battery", "A book and a camera"] },
      { q: "Where was the bag?", qjp: "かばんは どこに ありましたか。", answer: "Under a man's chair", options: ["On a man's chair", "Under a man's chair", "Behind a man", "In front of the door"] }
    ]
  },
  {
    id: "P10", lesson: 10, type: "passage", form: "memo",
    title: "A note from Tanaka-san", titleJp: "いぬは にわに います",
    lines: [
      { s: "", jp: "カランさん", ro: "Karan-san", en: "Dear Karan," },
      { s: "", jp: "{今日|きょう}は ありがとう ございます。", ro: "Kyō wa arigatō gozaimasu.", en: "Thank you for today." },
      { s: "", jp: "いぬは にわの {木|き}の {下|した}に います。", ro: "Inu wa niwa no ki no shita ni imasu.", en: "The dog is under the tree in the garden." },
      { s: "", jp: "いぬの ごはんは たなの {上|うえ}に あります。", ro: "Inu no gohan wa tana no ue ni arimasu.", en: "The dog's food is on the shelf." },
      { s: "", jp: "れいぞうこの {中|なか}に パンや ジュースなどが あります。", ro: "Reizōko no naka ni pan ya jūsu nado ga arimasu.", en: "There's bread, juice and so on in the refrigerator." },
      { s: "", jp: "かぎは ドアの {右|みぎ}の はこの {中|なか}に あります。", ro: "Kagi wa doa no migi no hako no naka ni arimasu.", en: "The key is in the box to the right of the door." },
      { s: "", jp: "コンビニは うちの となりに あります。", ro: "Konbini wa uchi no tonari ni arimasu.", en: "There's a convenience store next to the house." },
      { s: "", jp: "たなか", ro: "Tanaka", en: "Tanaka" }
    ],
    questions: [
      { q: "Where is the dog?", qjp: "いぬは どこに いますか。", answer: "Under the tree in the garden", options: ["On the shelf", "Next to the door", "In the house", "Under the tree in the garden"] },
      { q: "Where is the key?", qjp: "かぎは どこに ありますか。", answer: "In a box to the right of the door", options: ["On the shelf", "In the refrigerator", "In a box to the right of the door", "In a box to the left of the door"] },
      { q: "Karan wants some juice. Where should he look first?", qjp: "ジュースは どこに ありますか。", answer: "In the refrigerator", options: ["Under the tree", "In the box", "In the refrigerator", "On the shelf"] }
    ]
  },

  // ───────────────────────── LESSON 11 ─────────────────────────
  {
    id: "C11", lesson: 11, type: "conversation",
    title: "The station convenience store", titleJp: "ぜんぶで いくらですか",
    lines: [
      { s: "モチ", jp: "いらっしゃいませ。", ro: "Irasshaimase.", en: "Welcome." },
      { s: "カラン", jp: "この サンドイッチを {二|ふた}つ ください。{一|ひと}つ {200円|にひゃくえん}ですね。", ro: "Kono sandoitchi o futatsu kudasai. Hitotsu nihyaku-en desu ne.", en: "Two of these sandwiches, please. They're 200 yen each, right?" },
      { s: "モチ", jp: "はい。りんごは いかがですか。{一|ひと}つ {100円|ひゃくえん}です。", ro: "Hai. Ringo wa ikaga desu ka. Hitotsu hyaku-en desu.", en: "Yes. Would you like some apples? They're 100 yen each." },
      { s: "カラン", jp: "じゃ、りんごを {三|みっ}つ ください。{100円|ひゃくえん}の きっても ありますか。", ro: "Ja, ringo o mittsu kudasai. Hyaku-en no kitte mo arimasu ka.", en: "Then three apples, please. Do you have 100-yen stamps too?" },
      { s: "モチ", jp: "はい、あります。{何|なん}まいですか。", ro: "Hai, arimasu. Nanmai desu ka.", en: "Yes, we do. How many?" },
      { s: "カラン", jp: "{5|ご}まい ください。", ro: "Gomai kudasai.", en: "Five, please." },
      { s: "モチ", jp: "ぜんぶで {1,200円|せんにひゃくえん}です。", ro: "Zenbu de sen nihyaku-en desu.", en: "That's 1,200 yen altogether." },
      { s: "カラン", jp: "すみません。お{金|かね}は {1,000円|せんえん}だけです。きっては {3|さん}まいだけ ください。", ro: "Sumimasen. Okane wa sen-en dake desu. Kitte wa sanmai dake kudasai.", en: "I'm sorry. I only have 1,000 yen. Just three stamps, please." },
      { s: "モチ", jp: "はい。ぜんぶで {1,000円|せんえん}です。", ro: "Hai. Zenbu de sen-en desu.", en: "Certainly. That's 1,000 yen altogether." },
      { s: "カラン", jp: "ありがとう ございます。", ro: "Arigatō gozaimasu.", en: "Thank you." }
    ],
    questions: [
      { q: "How many apples does Karan buy?", qjp: "カランさんは りんごを いくつ かいましたか。", answer: "みっつ", options: ["ひとつ", "ふたつ", "みっつ", "いつつ"] },
      { q: "Why does Karan change his order?", qjp: "どうして きっては 3まいだけですか。", answer: "He only has 1,000 yen.", options: ["He only has 1,000 yen.", "He doesn't want any apples.", "The store has only three stamps.", "The stamps are 200 yen each."] },
      { q: "How many stamps does Karan buy in the end?", qjp: "カランさんは きってを なんまい かいましたか。", answer: "3まい", options: ["3まい", "2まい", "5まい", "10まい"] }
    ]
  },
  {
    id: "P11", lesson: 11, type: "passage", form: "composition",
    title: "My family", titleJp: "わたしの かぞく",
    lines: [
      { s: "", jp: "{私|わたし}の かぞくは {5人|ごにん}です。", ro: "Watashi no kazoku wa gonin desu.", en: "There are five people in my family." },
      { s: "", jp: "{父|ちち}と {母|はは}と あにと いもうとと {私|わたし}です。", ro: "Chichi to haha to ani to imōto to watashi desu.", en: "My father, my mother, my older brother, my younger sister and me." },
      { s: "", jp: "りょうしんと いもうとは インドに います。", ro: "Ryōshin to imōto wa Indo ni imasu.", en: "My parents and my younger sister are in India." },
      { s: "", jp: "あには アメリカで はたらきます。", ro: "Ani wa Amerika de hatarakimasu.", en: "My older brother works in America." },
      { s: "", jp: "{私|わたし}は {日本|にほん}で {2年|にねん} {日本語|にほんご}を べんきょうしました。", ro: "Watashi wa Nihon de ni-nen Nihongo o benkyō shimashita.", en: "I have studied Japanese in Japan for two years." },
      { s: "", jp: "{1週間|いっしゅうかん}に {2|に}かい {母|はは}に {電話|でんわ}を かけます。", ro: "Isshūkan ni nikai haha ni denwa o kakemasu.", en: "I phone my mother twice a week." },
      { s: "", jp: "インドまで ひこうきで {10時間|じゅうじかん}ぐらい かかります。", ro: "Indo made hikōki de jūjikan gurai kakarimasu.", en: "It takes about ten hours to India by plane." },
      { s: "", jp: "{1年|いちねん}に {1|いっ}かい インドへ かえります。", ro: "Ichi-nen ni ikkai Indo e kaerimasu.", en: "I go home to India once a year." }
    ],
    questions: [
      { q: "Who is in India now?", qjp: "インドに だれが いますか。", answer: "Karan's parents and younger sister", options: ["Karan's parents and older brother", "Karan's parents and younger sister", "Only Karan's parents", "All of Karan's family"] },
      { q: "How often does Karan phone his mother?", qjp: "カランさんは 1しゅうかんに なんかい おかあさんに でんわを かけますか。", answer: "Twice a week", options: ["Once a week", "Twice a year", "Twice a week", "Every day"] },
      { q: "How long is the flight to India?", qjp: "インドまで ひこうきで どのくらい かかりますか。", answer: "About 10 hours", options: ["About 5 hours", "About 2 days", "About 2 hours", "About 10 hours"] }
    ]
  },

  // ───────────────────────── LESSON 12 ─────────────────────────
  {
    id: "C12", lesson: 12, type: "conversation",
    title: "After the exam", titleJp: "しけんは どうでしたか",
    lines: [
      { s: "マリア", jp: "きのうの しけんは どうでしたか。", ro: "Kinō no shiken wa dō deshita ka.", en: "How was yesterday's exam?" },
      { s: "カラン", jp: "とても むずかしかったです。かんじが {多|おお}かったです。", ro: "Totemo muzukashikatta desu. Kanji ga ōkatta desu.", en: "It was very difficult. There were a lot of kanji." },
      { s: "マリア", jp: "{先月|せんげつ}の しけんと どちらが むずかしかったですか。", ro: "Sengetsu no shiken to dochira ga muzukashikatta desu ka.", en: "Which was harder, that or last month's exam?" },
      { s: "カラン", jp: "きのうの しけんの ほうが ずっと むずかしかったです。", ro: "Kinō no shiken no hō ga zutto muzukashikatta desu.", en: "Yesterday's exam was much harder." },
      { s: "マリア", jp: "そうですか。つかれましたか。", ro: "Sō desu ka. Tsukaremashita ka.", en: "I see. Are you tired?" },
      { s: "カラン", jp: "はい、つかれました。マリアさん、こんばん いっしょに ばんごはんを {食|た}べませんか。", ro: "Hai, tsukaremashita. Maria-san, konban issho ni bangohan o tabemasen ka.", en: "Yes, I'm tired. Maria, would you like to have dinner together tonight?" },
      { s: "マリア", jp: "いいですね。おすしと カレーと どちらが いいですか。", ro: "Ii desu ne. Osushi to karē to dochira ga ii desu ka.", en: "Sounds good. Which would you prefer, sushi or curry?" },
      { s: "カラン", jp: "カレーの ほうが いいです。{食|た}べものの {中|なか}で カレーが いちばん すきです。", ro: "Karē no hō ga ii desu. Tabemono no naka de karē ga ichiban suki desu.", en: "I'd prefer curry. It's my favorite food." },
      { s: "マリア", jp: "インドの カレーは {日本|にほん}の カレーより からいですか。", ro: "Indo no karē wa Nihon no karē yori karai desu ka.", en: "Is Indian curry spicier than Japanese curry?" },
      { s: "カラン", jp: "はい、ずっと からいですよ。", ro: "Hai, zutto karai desu yo.", en: "Yes, much spicier." }
    ],
    questions: [
      { q: "Why was the exam hard for Karan?", qjp: "しけんは どうして むずかしかったですか。", answer: "There were a lot of kanji.", options: ["It was in English.", "There were a lot of kanji.", "It was very long.", "He didn't study at all."] },
      { q: "Which exam was harder?", qjp: "どちらの しけんが むずかしかったですか。", answer: "Yesterday's exam", options: ["They were about the same.", "Yesterday's exam", "Last month's exam", "Last week's exam"] },
      { q: "What does Karan want to eat tonight?", qjp: "カランさんは こんばん なにが いいですか。", answer: "Curry", options: ["Sukiyaki", "Curry", "Sushi", "Tempura"] }
    ]
  },
  {
    id: "P12", lesson: 12, type: "passage", form: "postcard",
    title: "A postcard from Germany", titleJp: "ドイツの ふゆ",
    lines: [
      { s: "", jp: "さとう{先生|せんせい}、おげんきですか。", ro: "Satō-sensei, ogenki desu ka.", en: "Satō-sensei, how are you?" },
      { s: "", jp: "マリアです。", ro: "Maria desu.", en: "This is Maria." },
      { s: "", jp: "{今|いま}、ドイツの うちに います。", ro: "Ima, Doitsu no uchi ni imasu.", en: "I'm at home in Germany now." },
      { s: "", jp: "ドイツの ふゆは {日本|にほん}の ふゆより ずっと さむいです。", ro: "Doitsu no fuyu wa Nihon no fuyu yori zutto samui desu.", en: "Winter in Germany is much colder than winter in Japan." },
      { s: "", jp: "きのうは ゆきでしたが、{今日|きょう}は いい {天気|てんき}でした。", ro: "Kinō wa yuki deshita ga, kyō wa ii tenki deshita.", en: "It snowed yesterday, but the weather was nice today." },
      { s: "", jp: "まちの おまつりは とても にぎやかでした。", ro: "Machi no omatsuri wa totemo nigiyaka deshita.", en: "The town festival was very lively." },
      { s: "", jp: "おすしも {食|た}べましたが、あまり おいしくなかったです。", ro: "Osushi mo tabemashita ga, amari oishikunakatta desu.", en: "I also ate sushi, but it wasn't very good." },
      { s: "", jp: "{来月|らいげつ}の {10日|とおか}に {日本|にほん}へ {行|い}きます。", ro: "Raigetsu no tōka ni Nihon e ikimasu.", en: "I'm going to Japan on the 10th of next month." }
    ],
    questions: [
      { q: "How does Maria compare the two winters?", qjp: "ドイツの ふゆと にほんの ふゆと どちらが さむいですか。", answer: "Germany's winter is much colder.", options: ["They are both warm.", "Germany's winter is much colder.", "Germany's winter is a little warmer.", "Japan's winter is much colder."] },
      { q: "How was the sushi in Germany?", qjp: "ドイツの おすしは どうでしたか。", answer: "Not very good", options: ["Very cheap", "Not very good", "Very delicious", "Very spicy"] },
      { q: "When will Maria be going to Japan?", qjp: "マリアさんは いつ にほんへ いきますか。", answer: "The 10th of next month", options: ["The 10th of next month", "Next week", "The 10th of this month", "Next year"] }
    ]
  },

  // ───────────────────────── LESSON 13 ─────────────────────────
  {
    id: "C13", lesson: 13, type: "conversation",
    title: "Karan's birthday plan", titleJp: "なにか ほしいですか",
    lines: [
      { s: "マリア", jp: "カランさん、{来週|らいしゅう}の どようびは たんじょうびですね。{何|なに}か ほしいですか。", ro: "Karan-san, raishū no doyōbi wa tanjōbi desu ne. Nanika hoshii desu ka.", en: "Karan, next Saturday is your birthday, isn't it? Is there something you want?" },
      { s: "カラン", jp: "そうですね。{新|あたら}しい カメラが ほしいです。", ro: "Sō desu ne. Atarashii kamera ga hoshii desu.", en: "Let me see. I want a new camera." },
      { s: "マリア", jp: "カメラは {高|たか}いですよ。どこかへ {行|い}きたいですか。", ro: "Kamera wa takai desu yo. Dokoka e ikitai desu ka.", en: "Cameras are expensive, you know. Do you want to go somewhere?" },
      { s: "カラン", jp: "はい、{川|かわ}へ つりに {行|い}きたいです。", ro: "Hai, kawa e tsuri ni ikitai desu.", en: "Yes, I want to go fishing at the river." },
      { s: "マリア", jp: "つりですか。いいですね。{私|わたし}は {川|かわ}で およぎたいです。", ro: "Tsuri desu ka. Ii desu ne. Watashi wa kawa de oyogitai desu.", en: "Fishing? That sounds good. I want to swim in the river." },
      { s: "カラン", jp: "{川|かわ}の {水|みず}は つめたいですよ。", ro: "Kawa no mizu wa tsumetai desu yo.", en: "The river water is cold, you know." },
      { s: "マリア", jp: "そうですね。じゃ、{川|かわ}の ちかくで {本|ほん}を {読|よ}みます。", ro: "Sō desu ne. Ja, kawa no chikaku de hon o yomimasu.", en: "That's true. Then I'll read a book near the river." },
      { s: "カラン", jp: "ばんごはんは {何|なに}を {食|た}べたいですか。", ro: "Bangohan wa nani o tabetai desu ka.", en: "What do you want to eat for dinner?" },
      { s: "マリア", jp: "カランさんの {魚|さかな}を {食|た}べましょう。", ro: "Karan-san no sakana o tabemashō.", en: "Let's eat the fish you catch." },
      { s: "カラン", jp: "そう しましょう。", ro: "Sō shimashō.", en: "Let's do that." }
    ],
    questions: [
      { q: "What does Karan want for his birthday?", qjp: "カランさんは なにが ほしいですか。", answer: "A new camera", options: ["A new bag", "A new book", "A new camera", "A fishing trip to the sea"] },
      { q: "Why does Maria change her plan to swim?", qjp: "かわの みずは どうですか。", answer: "The river water is cold.", options: ["The river water is cold.", "The river is too far.", "She can't swim.", "The river is dirty."] },
      { q: "What will they eat for dinner?", qjp: "ばんごはんは なにを たべますか。", answer: "The fish Karan catches", options: ["The fish Karan catches", "Nothing, because they are full", "Curry at a restaurant", "Sushi from the station"] }
    ]
  },
  {
    id: "P13", lesson: 13, type: "passage", form: "diary",
    title: "Mochi's diary", titleJp: "モチの にちようび",
    lines: [
      { s: "", jp: "{今日|きょう}は にちようびでしたから、{駅|えき}は {人|ひと}が {多|おお}かったです。", ro: "Kyō wa nichiyōbi deshita kara, eki wa hito ga ōkatta desu.", en: "Today was Sunday, so there were a lot of people at the station." },
      { s: "", jp: "{午前|ごぜん} {6時|ろくじ}から {午後|ごご} {8時|はちじ}まで はたらきましたから、とても つかれました。", ro: "Gozen roku-ji kara gogo hachi-ji made hatarakimashita kara, totemo tsukaremashita.", en: "I worked from 6 a.m. to 8 p.m., so I'm very tired." },
      { s: "", jp: "おなかが すきました。", ro: "Onaka ga sukimashita.", en: "I'm hungry." },
      { s: "", jp: "{何|なに}か {食|た}べたいです。", ro: "Nanika tabetai desu.", en: "I want to eat something." },
      { s: "", jp: "{来週|らいしゅう}の どようび、カランさんと マリアさんは {川|かわ}へ つりに {行|い}きます。", ro: "Raishū no doyōbi, Karan-san to Maria-san wa kawa e tsuri ni ikimasu.", en: "Next Saturday, Karan and Maria are going fishing at the river." },
      { s: "", jp: "{私|わたし}も {魚|さかな}を {食|た}べに {行|い}きたいです。", ro: "Watashi mo sakana o tabe ni ikitai desu.", en: "I want to go and eat fish too." },
      { s: "", jp: "でも、どようびは {休|やす}みじゃ ありません。", ro: "Demo, doyōbi wa yasumi ja arimasen.", en: "But Saturday isn't my day off." },
      { s: "", jp: "{休|やす}みが ほしいです。", ro: "Yasumi ga hoshii desu.", en: "I want a day off." }
    ],
    questions: [
      { q: "Why was the station busy today?", qjp: "きょう どうして えきは ひとが おおかったですか。", answer: "It was Sunday.", options: ["It was raining.", "The trains were late.", "It was Sunday.", "It was a festival."] },
      { q: "How many hours did Mochi work today?", qjp: "モチは きょう なんじかん はたらきましたか。", answer: "14 hours", options: ["14 hours", "6 hours", "8 hours", "2 hours"] },
      { q: "Why can't Mochi go to the river next Saturday?", qjp: "どうして モチは かわへ いきませんか。", answer: "Mochi has to work that day.", options: ["Karan didn't invite Mochi.", "The river water is too cold.", "Mochi has to work that day.", "Mochi doesn't like fish."] }
    ]
  }
]);
