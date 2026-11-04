// Guidebook: reference pages for Minna Line (cheat sheets to go with the drills).
// Rule for table cells: a cell is either pure Japanese (the game can play it aloud) or pure English.
// Kanji appears only in columns that say so.
window.GUIDE = [

  // ───────────────────────── 1. PARTICLES ─────────────────────────
  {
    id: "particles",
    title: "Particles",
    jp: "じょし",
    intro: "Particles are the small words that show what job each word does in a sentence. Use this page when you can't remember which one goes where.",
    sections: [
      {
        h: "は (wa): the topic",
        note: "は sets up what you are talking about, and the rest of the sentence comments on it. As a particle it is read wa, not ha.",
        headers: ["Use", "Example", "Meaning"],
        rows: [
          ["Topic of the sentence", "わたしは がくせいです。", "I am a student."],
          ["A time or place as the topic", "きょうは やすみです。", "Today is a day off."],
          ["A short question with the rest left out", "おなまえは？", "May I have your name?"],
          ["Contrast between two things", "にくは たべますが、さかなは たべません。", "I eat meat, but I don't eat fish."],
          ["Making the object the topic (it replaces the object particle)", "ひるごはんは しょくどうで たべます。", "As for lunch, I eat it in the cafeteria."],
          ["Added after another particle", "にほんには やまが たくさん あります。", "In Japan there are a lot of mountains."]
        ],
        tip: "は replaces を and が. It never sits next to them (no をは). It stacks after に, で, へ, と and から: には, では, へは."
      },
      {
        h: "が (ga): the subject, and 'but'",
        note: "が points at the thing itself, often as new information. It also marks the object of words such as すき, わかります and ほしい.",
        headers: ["Use", "Example", "Meaning"],
        rows: [
          ["What exists", "つくえの うえに ほんが あります。", "There is a book on the desk."],
          ["What you have", "きょうは じかんが ありません。", "I don't have time today."],
          ["What you like, dislike, or are good or bad at", "わたしは ねこが すきです。", "I like cats."],
          ["What you understand", "すこし にほんごが わかります。", "I understand a little Japanese."],
          ["What you want", "あたらしい パソコンが ほしいです。", "I want a new computer."],
          ["What you can do", "わたしは にほんごが できます。", "I can speak Japanese."],
          ["A question word as the subject", "だれが きましたか。", "Who came?"],
          ["The answer to that question", "やまださんが きました。", "Mr. Yamada came."],
          ["Reporting something you see or notice", "あめが ふって います。", "It's raining."],
          ["A feature of the topic", "ぞうは はなが ながいです。", "Elephants have long trunks."],
          ["The subject inside a describing clause", "これは わたしが きのう かった ほんです。", "This is the book I bought yesterday."],
          ["'But', joining two sentences", "にほんの たべものは おいしいですが、たかいです。", "Japanese food is delicious, but expensive."],
          ["A soft opener before a request", "すみませんが、しおを とって ください。", "Excuse me, but please pass the salt."]
        ],
        tip: "A question word is never followed by は. Say だれが and なにが, never だれは."
      },
      {
        h: "を (o): the object, and the path",
        note: "を marks what the action is done to. With movement verbs it marks the place you leave or pass through. Read it o.",
        headers: ["Use", "Example", "Meaning"],
        rows: [
          ["Direct object", "パンを たべます。", "I eat bread."],
          ["Object of a do-verb", "テニスを します。", "I play tennis."],
          ["Place you leave", "へやを でます。", "I leave the room."],
          ["Vehicle you get off", "でんしゃを おります。", "I get off the train."],
          ["Place you cross", "はしを わたります。", "I cross the bridge."],
          ["Corner you turn at", "かどを まがります。", "I turn at the corner."],
          ["Area you walk through", "こうえんを さんぽします。", "I take a walk in the park."]
        ],
        tip: "Getting on is に (でんしゃに のります). Getting off is を (でんしゃを おります). Same for entering (に はいります) and leaving (を でます)."
      },
      {
        h: "に (ni): a point in time, a place, a person",
        note: "に pins something to one exact point: a time, a spot, a person or a result. It has more N5 uses than any other particle.",
        headers: ["Use", "Example", "Meaning"],
        rows: [
          ["Exact clock time", "ろくじに おきます。", "I get up at six."],
          ["Date or month", "じゅうがつ とおかに にほんへ きました。", "I came to Japan on October 10th."],
          ["Destination", "らいねん にほんに いきます。", "I will go to Japan next year."],
          ["Arrival point", "えきに つきました。", "I arrived at the station."],
          ["Where something or someone is", "こうえんに いぬが います。", "There is a dog in the park."],
          ["Where you live or stay", "おおさかに すんで います。", "I live in Osaka."],
          ["What you get on, enter or sit on", "いすに すわります。", "I sit on the chair."],
          ["Where you put or write something", "ここに なまえを かいて ください。", "Please write your name here."],
          ["The person who receives", "ともだちに プレゼントを あげます。", "I give a present to a friend."],
          ["The person you get something from", "ちちに とけいを もらいました。", "I got a watch from my father."],
          ["The person you meet, ask or phone", "せんせいに ききます。", "I ask the teacher."],
          ["Purpose of going", "スーパーへ かいものに いきます。", "I go to the supermarket to shop."],
          ["How many times per period", "いっしゅうかんに にかい テニスを します。", "I play tennis twice a week."],
          ["The result of a change", "いしゃに なりたいです。", "I want to become a doctor."],
          ["What you choose", "コーヒーに します。", "I'll have coffee."],
          ["Good or bad for", "たばこは からだに わるいです。", "Cigarettes are bad for your health."]
        ],
        tip: "Time words such as きょう, あした and まいにち take no に. See the Time page."
      },
      {
        h: "で (de): where and how",
        note: "で marks where an action happens and what you use to do it.",
        headers: ["Use", "Example", "Meaning"],
        rows: [
          ["Place of an action", "としょかんで べんきょうします。", "I study at the library."],
          ["Place of an event", "ホテルで パーティーが あります。", "There is a party at the hotel."],
          ["Way of travelling", "バスで いきます。", "I go by bus."],
          ["Tool", "はしで たべます。", "I eat with chopsticks."],
          ["Language", "にほんごで はなします。", "I speak in Japanese."],
          ["Material", "かみで はこを つくりました。", "I made a box out of paper."],
          ["Reason (after a noun)", "かぜで がっこうを やすみました。", "I missed school because of a cold."],
          ["How many people do it", "みんなで うたいましょう。", "Let's all sing together."],
          ["Alone", "ひとりで いきます。", "I'm going by myself."],
          ["Total", "ぜんぶで せんえんです。", "It's 1,000 yen in total."],
          ["The group you pick the best from", "くだものの なかで りんごが いちばん すきです。", "Of all fruit, I like apples best."]
        ],
        tip: "On foot has no で: あるいて いきます."
      },
      {
        h: "へ (e): direction",
        note: "へ shows the direction of movement. As a particle it is read e, not he.",
        headers: ["Use", "Example", "Meaning"],
        rows: [
          ["Where you go", "らいげつ きょうとへ いきます。", "I'm going to Kyoto next month."],
          ["Where you come to", "ともだちが うちへ きます。", "A friend is coming to my house."],
          ["Where you return to", "くにへ かえります。", "I'm going back to my country."],
          ["The way you turn", "みぎへ まがって ください。", "Please turn right."]
        ]
      },
      {
        h: "と (to): and, with, quoting",
        note: "と links nouns, marks who you do something with, and closes a quote.",
        headers: ["Use", "Example", "Meaning"],
        rows: [
          ["And (a complete list of nouns)", "パンと たまごを たべます。", "I eat bread and eggs."],
          ["Together with a person", "ともだちと えいがを みます。", "I watch a film with a friend."],
          ["The partner in an action", "やまださんと けっこんします。", "I'm marrying Mr. Yamada."],
          ["Naming the two things you compare", "コーヒーと こうちゃと どちらが すきですか。", "Which do you like more, coffee or tea?"],
          ["Quoting words", "「ありがとう」と いいました。", "I said 'thank you'."],
          ["Reporting a thought", "あした あめが ふると おもいます。", "I think it will rain tomorrow."],
          ["An automatic result (after a dictionary form)", "この ボタンを おすと、ドアが あきます。", "If you press this button, the door opens."]
        ],
        tip: "As 'and', と joins nouns only. To join verbs use the て form, and to join adjectives use くて or で."
      },
      {
        h: "も (mo): also, even",
        note: "も adds 'too'. It takes the place of は, が and を, and it sits after other particles.",
        headers: ["Use", "Example", "Meaning"],
        rows: [
          ["Also (in place of the topic)", "わたしも がくせいです。", "I am a student too."],
          ["Also (in place of the object)", "パンも たべます。", "I eat bread too."],
          ["Added after another particle", "きょうとへも いきました。", "I went to Kyoto too."],
          ["Both A and B", "にくも さかなも たべます。", "I eat both meat and fish."],
          ["Neither A nor B", "にくも さかなも たべません。", "I eat neither meat nor fish."],
          ["Question word with a negative", "きのう なにも たべませんでした。", "I didn't eat anything yesterday."],
          ["Not even once", "いちども いった ことが ありません。", "I have never been, not even once."],
          ["Stressing a large number", "なんかいも いきました。", "I went many times."]
        ]
      },
      {
        h: "の (no): linking nouns",
        note: "の joins two nouns, and the first one describes the second. Think of it as a 's that works for everything.",
        headers: ["Use", "Example", "Meaning"],
        rows: [
          ["Owner", "わたしの かばんです。", "It's my bag."],
          ["Where you belong", "だいがくの せんせいです。", "I'm a university teacher."],
          ["What it is about", "にほんごの ほんです。", "It's a Japanese language book."],
          ["Where it comes from", "イタリアの くつです。", "They are Italian shoes."],
          ["Position", "つくえの うえに あります。", "It's on the desk."],
          ["Time", "あしたの ごご あいましょう。", "Let's meet tomorrow afternoon."],
          ["Two names for the same person", "ともだちの やまださんです。", "This is my friend Mr. Yamada."],
          ["Standing in for a noun ('one')", "この かさは わたしのです。", "This umbrella is mine."],
          ["A noun before 'before'", "しょくじの まえに、てを あらいます。", "I wash my hands before meals."],
          ["A noun before 'when'", "こどもの とき、よく あそびました。", "When I was a child, I played a lot."],
          ["Casual question ending", "どこへ いくの？", "Where are you going?"]
        ],
        tip: "の comes after nouns only. い-adjectives go straight onto the noun (たかい やま) and な-adjectives use な (しずかな まち)."
      },
      {
        h: "か (ka): questions and 'or'",
        note: "か at the end of a sentence turns it into a question. Between nouns it means 'or'.",
        headers: ["Use", "Example", "Meaning"],
        rows: [
          ["Yes or no question", "これは ほんですか。", "Is this a book?"],
          ["Question with a question word", "これは なんですか。", "What is this?"],
          ["Choosing between two", "コーヒーですか、こうちゃですか。", "Is it coffee or tea?"],
          ["'Or' between nouns", "コーヒーか こうちゃを のみます。", "I'll drink coffee or tea."],
          ["Inviting", "いっしょに いきませんか。", "Won't you come with me?"],
          ["Offering help", "てつだいましょうか。", "Shall I help?"],
          ["Taking in news (falling tone)", "そうですか。", "I see."],
          ["With a question word, some unknown thing", "なにか たべましたか。", "Did you eat anything?"]
        ],
        tip: "Polite questions end in か and a full stop in writing. The ？ mark is for casual sentences that drop か."
      },
      {
        h: "や (ya): and so on",
        note: "や lists a few examples and hints that there are more. Add など to make that clear.",
        headers: ["Use", "Example", "Meaning"],
        rows: [
          ["A few examples from a longer list", "かばんの なかに さいふや かぎが あります。", "There's a wallet, keys and so on in my bag."],
          ["With an 'and so on' word at the end", "スーパーで パンや たまごなどを かいました。", "I bought bread, eggs and so on at the supermarket."]
        ],
        tip: "と gives the whole list. や gives a sample of it."
      },
      {
        h: "から (kara): from, because",
        note: "から marks a starting point. After a whole sentence it means 'because'.",
        headers: ["Use", "Example", "Meaning"],
        rows: [
          ["Starting time", "くじから はたらきます。", "I work from nine."],
          ["Starting place", "うちから えきまで あるきます。", "I walk from home to the station."],
          ["Where you come from", "インドから きました。", "I came from India."],
          ["The person something comes from", "ともだちから てがみが きました。", "A letter came from a friend."],
          ["Because (the reason comes first)", "あついですから、まどを あけます。", "It's hot, so I'll open the window."],
          ["Because (giving the reason alone)", "じかんが ありませんから。", "Because I don't have time."],
          ["After doing (after a te form)", "ごはんを たべてから、でかけます。", "I'll go out after I eat."]
        ],
        tip: "The reason goes in front of から, so the word order is the reverse of English 'because': reason, から, result."
      },
      {
        h: "まで (made): until, as far as",
        note: "まで marks the end point of a time or distance. It often pairs with から.",
        headers: ["Use", "Example", "Meaning"],
        rows: [
          ["Until a time", "ごご ごじまで はたらきます。", "I work until 5 p.m."],
          ["As far as a place", "えきまで あるきます。", "I walk as far as the station."],
          ["From one point to another", "げつようびから きんようびまで はたらきます。", "I work from Monday to Friday."],
          ["By a deadline", "ごじまでに かえります。", "I'll be back by five."]
        ],
        tip: "まで means something goes on up to that point. までに means one action happens some time before that point."
      },
      {
        h: "より (yori): than",
        note: "より goes after the thing you are comparing against. The adjective itself does not change.",
        headers: ["Use", "Example", "Meaning"],
        rows: [
          ["A is more than B", "この かばんは あの かばんより おもいです。", "This bag is heavier than that bag."],
          ["With the preferred side stated", "りんごより みかんの ほうが すきです。", "I like mandarins more than apples."]
        ],
        tip: "より sits on the side that loses the comparison. ほうが sits on the side that wins."
      },
      {
        h: "ね (ne): right?",
        note: "ね at the end of a sentence asks the listener to share your feeling or confirm something.",
        headers: ["Use", "Example", "Meaning"],
        rows: [
          ["Agreeing about something you both notice", "いい てんきですね。", "Nice weather, isn't it?"],
          ["Showing sympathy", "たいへんですね。", "That must be hard."],
          ["Checking a fact", "あしたは やすみですね。", "Tomorrow's a day off, right?"],
          ["Thinking for a moment", "そうですね。", "Let me see."]
        ]
      },
      {
        h: "よ (yo): you know",
        note: "よ at the end of a sentence tells the listener something they may not know.",
        headers: ["Use", "Example", "Meaning"],
        rows: [
          ["Telling someone something new", "この ケーキは おいしいですよ。", "This cake is delicious, you know."],
          ["Reassuring", "だいじょうぶですよ。", "It's fine, really."],
          ["Gently correcting", "ちがいますよ。", "No, that's wrong."],
          ["Warning", "もう じゅうじですよ。", "It's already ten o'clock, you know."]
        ],
        tip: "ね means 'we both think this'. よ means 'you may not know this'. Too many よ can sound pushy with a teacher or boss."
      },
      {
        h: "Classic confusion: は or が",
        note: "With は the listener already knows the thing and the news comes after it. With が the thing itself is the news.",
        headers: ["Situation", "With は", "With が", "What changes"],
        rows: [
          ["Saying who you are, or picking yourself out", "わたしは やまだです。", "わたしが やまだです。", "First: I'm Yamada. Second: I'm the one called Yamada."],
          ["A known thing, or a newly mentioned thing", "ほんは つくえの うえに あります。", "つくえの うえに ほんが あります。", "First: the book is on the desk. Second: there is a book on the desk."],
          ["Asking about a topic, or asking who did it", "あの ひとは だれですか。", "だれが きましたか。", "First: who is that person? Second: who came?"],
          ["Contrast, or a plain statement", "テニスは すきです。", "テニスが すきです。", "First: tennis, I do like (maybe not other things). Second: I like tennis."]
        ],
        tip: "Quick test: if the question word comes last (あの ひとは だれですか), は marks the topic before it. If the question word is the subject (だれが きましたか), it takes が."
      },
      {
        h: "Classic confusion: に or で for a place",
        note: "に goes with being somewhere, arriving or putting. で goes with doing something there.",
        headers: ["With に", "Meaning", "With で", "Meaning"],
        rows: [
          ["こうえんに いぬが います。", "There is a dog in the park.", "こうえんで あそびます。", "I play in the park."],
          ["おおさかに すんで います。", "I live in Osaka.", "おおさかで はたらいて います。", "I work in Osaka."],
          ["つくえに ほんを おきます。", "I put a book on the desk.", "つくえで ほんを よみます。", "I read a book at the desk."],
          ["ホテルに とまります。", "I stay at a hotel.", "ホテルで しょくじします。", "I have a meal at a hotel."]
        ],
        tip: "An event is the exception. It happens rather than just sits, so it takes で even with あります: ホテルで パーティーが あります."
      },
      {
        h: "Classic confusion: に or へ",
        note: "With verbs of going, coming and returning, both are correct and mean almost the same. Everywhere else に has jobs that へ can't do.",
        headers: ["What you want to say", "Particle", "Example", "Meaning"],
        rows: [
          ["Going somewhere, focus on the destination", "に", "にほんに いきます。", "I'm going to Japan."],
          ["Going somewhere, focus on the direction", "へ", "にほんへ いきます。", "I'm going to Japan."],
          ["Arriving", "に", "えきに つきました。", "I arrived at the station."],
          ["Entering", "に", "へやに はいります。", "I go into the room."],
          ["Time", "に", "くじに いきます。", "I'll go at nine."],
          ["Giving to a person", "に", "ともだちに あげます。", "I give it to a friend."]
        ],
        tip: "へ only ever shows the direction of movement. If nothing is travelling (a time, a receiver, where a thing is), use に."
      },
      {
        h: "Classic confusion: を or が with すき, わかります, あります",
        note: "These words describe a feeling, ability or state, not an action done to something, so the thing takes が. Action verbs take を.",
        headers: ["Word", "Particle", "Right", "Wrong", "Meaning"],
        rows: [
          ["すきです", "が", "ねこが すきです。", "ねこを すきです。", "I like cats."],
          ["きらいです", "が", "さかなが きらいです。", "さかなを きらいです。", "I dislike fish."],
          ["じょうずです", "が", "えが じょうずです。", "えを じょうずです。", "I'm good at drawing."],
          ["わかります", "が", "にほんごが わかります。", "にほんごを わかります。", "I understand Japanese."],
          ["あります", "が", "じかんが あります。", "じかんを あります。", "I have time."],
          ["ほしいです", "が", "くるまが ほしいです。", "くるまを ほしいです。", "I want a car."],
          ["できます", "が", "にほんごが できます。", "にほんごを できます。", "I can speak Japanese."],
          ["たべます", "を", "りんごを たべます。", "りんごが たべます。", "I eat an apple. (The wrong one says the apple is eating.)"],
          ["かいます", "を", "パンを かいます。", "パンが かいます。", "I buy bread."]
        ],
        tip: "～たいです is the one that can take either: おすしを たべたいです and おすしが たべたいです are both fine."
      }
    ]
  },

  // ───────────────────────── 2. QUESTIONS ─────────────────────────
  {
    id: "questions",
    title: "Question Words",
    jp: "ぎもんし",
    intro: "Every N5 question word with a question and a typical answer. The question word sits where the answer will go, so the word order doesn't change.",
    sections: [
      {
        h: "なに / なん: what",
        note: "Both mean 'what'. Use なん before a t, d or n sound and before counters. Use なに before を, が and most other particles.",
        headers: ["Word", "Question", "Answer", "Meaning"],
        rows: [
          ["なん", "これは なんですか。", "じしょです。", "What is this? It's a dictionary."],
          ["なに", "あさ なにを たべますか。", "パンを たべます。", "What do you eat in the morning? I eat bread."],
          ["なに", "なにが ほしいですか。", "カメラが ほしいです。", "What do you want? I want a camera."],
          ["なんの", "それは なんの ほんですか。", "りょうりの ほんです。", "What is that book about? It's a cookery book."],
          ["なんで", "なんで くにへ かえりますか。", "ひこうきで かえります。", "How will you get back to your country? By plane."]
        ],
        tip: "In Lesson 5, なんで asks 'by what means'. In casual speech it can also mean 'why', so check the context."
      },
      {
        h: "だれ / どなた: who",
        note: "どなた is the polite form of だれ. Use it with あの かた.",
        headers: ["Word", "Question", "Answer", "Meaning"],
        rows: [
          ["だれ", "あの ひとは だれですか。", "やまださんです。", "Who is that person? That's Mr. Yamada."],
          ["どなた", "あの かたは どなたですか。", "たなか せんせいです。", "Who is that person? That's Tanaka-sensei."],
          ["だれが", "だれが きましたか。", "たなかさんが きました。", "Who came? Ms. Tanaka came."],
          ["だれの", "これは だれの かさですか。", "わたしのです。", "Whose umbrella is this? It's mine."],
          ["だれと", "だれと いきますか。", "ともだちと いきます。", "Who are you going with? With a friend."],
          ["だれに", "だれに あげますか。", "ははに あげます。", "Who will you give it to? To my mother."]
        ]
      },
      {
        h: "どこ / どちら: where",
        note: "どちら is the polite form of どこ. It also means 'which of two', covered further down.",
        headers: ["Word", "Question", "Answer", "Meaning"],
        rows: [
          ["どこ", "トイレは どこですか。", "あそこです。", "Where is the toilet? Over there."],
          ["どこへ", "どこへ いきますか。", "えきへ いきます。", "Where are you going? To the station."],
          ["どこで", "どこで かいましたか。", "デパートで かいました。", "Where did you buy it? At a department store."],
          ["どこの", "これは どこの ワインですか。", "イタリアの ワインです。", "Where is this wine from? It's Italian."],
          ["どちら", "おくには どちらですか。", "インドです。", "Which country are you from? India."]
        ]
      },
      {
        h: "いつ: when",
        note: "いつ never takes に.",
        headers: ["Word", "Question", "Answer", "Meaning"],
        rows: [
          ["いつ", "いつ にほんへ きましたか。", "せんげつ きました。", "When did you come to Japan? Last month."],
          ["いつ", "たんじょうびは いつですか。", "ごがつ みっかです。", "When is your birthday? It's May 3rd."],
          ["いつから", "いつから やすみですか。", "あしたからです。", "From when are you off? From tomorrow."],
          ["いつまで", "いつまで にほんに いますか。", "らいねんの さんがつまで います。", "Until when will you be in Japan? Until next March."]
        ]
      },
      {
        h: "いくら / いくつ: how much, how many",
        note: "いくら asks a price. いくつ asks how many things, and the polite おいくつ asks someone's age.",
        headers: ["Word", "Question", "Answer", "Meaning"],
        rows: [
          ["いくら", "この とけいは いくらですか。", "さんぜんえんです。", "How much is this watch? It's 3,000 yen."],
          ["いくら", "ぜんぶで いくらですか。", "にせんえんです。", "How much is it altogether? It's 2,000 yen."],
          ["いくつ", "みかんを いくつ かいましたか。", "むっつ かいました。", "How many mandarins did you buy? I bought six."],
          ["おいくつ", "おいくつですか。", "にじゅうごさいです。", "How old are you? I'm 25."]
        ],
        tip: "いくつ goes with ひとつ, ふたつ, みっつ. If a thing has its own counter, ask with なん instead: なんまい, なんだい."
      },
      {
        h: "なん + counter: how many, what number",
        note: "Put なん in front of a counter to ask about that kind of number.",
        headers: ["Word", "Question", "Answer", "Meaning"],
        rows: [
          ["なんにん", "かぞくは なんにんですか。", "よにんです。", "How many people are in your family? Four."],
          ["なんじ", "いま なんじですか。", "くじ はんです。", "What time is it now? It's half past nine."],
          ["なんじに", "なんじに おきますか。", "ろくじに おきます。", "What time do you get up? At six."],
          ["なんぷん", "なんぷん かかりますか。", "じゅっぷん かかります。", "How many minutes does it take? Ten minutes."],
          ["なんじかん", "まいにち なんじかん ねますか。", "しちじかん ねます。", "How many hours do you sleep every day? Seven hours."],
          ["なんようび", "きょうは なんようびですか。", "すいようびです。", "What day is it today? It's Wednesday."],
          ["なんがつ なんにち", "たんじょうびは なんがつ なんにちですか。", "しがつ ようかです。", "What's the date of your birthday? April 8th."],
          ["なんさい", "おこさんは なんさいですか。", "ななさいです。", "How old is your child? Seven."],
          ["なんがい", "くつの うりばは なんがいですか。", "さんがいです。", "What floor is the shoe department on? The third floor."],
          ["なんまい", "きってを なんまい かいますか。", "ごまい かいます。", "How many stamps will you buy? Five."],
          ["なんかい", "いっしゅうかんに なんかい およぎますか。", "にかい およぎます。", "How many times a week do you swim? Twice."]
        ]
      },
      {
        h: "どう / いかが: how",
        note: "どう asks how something is or was. いかが is the polite form, used to offer things or ask after someone.",
        headers: ["Word", "Question", "Answer", "Meaning"],
        rows: [
          ["どう", "あたらしい しごとは どうですか。", "おもしろいです。", "How's your new job? It's interesting."],
          ["どう", "りょこうは どうでしたか。", "とても たのしかったです。", "How was your trip? It was great fun."],
          ["どう", "どう しましたか。", "あたまが いたいです。", "What's the matter? My head hurts."],
          ["いかが", "コーヒーは いかがですか。", "ありがとう ございます。いただきます。", "Would you like a coffee? Thank you, I'd love one."],
          ["いかが", "もう いっぱい いかがですか。", "いいえ、けっこうです。", "Would you like another one? No, thank you."]
        ]
      },
      {
        h: "どんな: what kind of",
        note: "どんな always comes before a noun.",
        headers: ["Word", "Question", "Answer", "Meaning"],
        rows: [
          ["どんな", "どんな おんがくが すきですか。", "ジャズが すきです。", "What kind of music do you like? I like jazz."],
          ["どんな", "やまださんは どんな ひとですか。", "しんせつな ひとです。", "What kind of person is Mr. Yamada? He's a kind person."]
        ]
      },
      {
        h: "どれ / どの: which (of three or more)",
        note: "どれ stands alone. どの must have a noun after it.",
        headers: ["Word", "Question", "Answer", "Meaning"],
        rows: [
          ["どれ", "あなたの かばんは どれですか。", "あの くろい かばんです。", "Which one is your bag? That black bag."],
          ["どの", "どの ひとが たなかさんですか。", "あの せが たかい ひとです。", "Which person is Mr. Tanaka? That tall person."]
        ]
      },
      {
        h: "どちら: which (of two)",
        note: "For a choice between two, use どちら, and answer with ほうが. If they are equal, say どちらも.",
        headers: ["Word", "Question", "Answer", "Meaning"],
        rows: [
          ["どちら", "コーヒーと こうちゃと どちらが いいですか。", "コーヒーの ほうが いいです。", "Which would you prefer, coffee or tea? Coffee."],
          ["どちらも", "りんごと みかんと どちらが すきですか。", "どちらも すきです。", "Which do you like more, apples or mandarins? I like both."]
        ]
      },
      {
        h: "どうして / なぜ: why",
        note: "Answer with a reason ending in から.",
        headers: ["Word", "Question", "Answer", "Meaning"],
        rows: [
          ["どうして", "どうして きのう やすみましたか。", "ねつが ありましたから。", "Why were you off yesterday? Because I had a fever."],
          ["どうして", "どうしてですか。", "じかんが ありませんから。", "Why is that? Because I have no time."],
          ["なぜ", "なぜ にほんごを べんきょうしますか。", "アニメが すきですから。", "Why do you study Japanese? Because I like anime."]
        ]
      },
      {
        h: "どのくらい: how long, how much",
        note: "どのくらい asks about an amount, usually of time. Add ぐらい to the answer for 'about'.",
        headers: ["Word", "Question", "Answer", "Meaning"],
        rows: [
          ["どのくらい", "うちから えきまで どのくらい かかりますか。", "あるいて じゅうごふんぐらい かかります。", "How long does it take from your home to the station? About 15 minutes on foot."],
          ["どのくらい", "にほんに どのくらい いましたか。", "さんねん いました。", "How long were you in Japan? Three years."]
        ]
      },
      {
        h: "どうやって: how, by what method",
        note: "どうやって asks for the way or the steps.",
        headers: ["Word", "Question", "Answer", "Meaning"],
        rows: [
          ["どうやって", "どうやって くうこうへ いきますか。", "えきから バスで いきます。", "How do you get to the airport? By bus from the station."],
          ["どうやって", "どうやって おかねを だしますか。", "まず、この ボタンを おして ください。", "How do I take out money? First, please press this button."]
        ]
      },
      {
        h: "Question word + か: some, any",
        note: "Adding か makes an unknown something. It is a yes or no question, so answer はい or いいえ. The particles を and が drop out.",
        headers: ["Word", "Meaning", "Example", "Sentence meaning"],
        rows: [
          ["なにか", "something, anything", "なにか のみますか。", "Would you like something to drink?"],
          ["だれか", "someone, anyone", "だれか きましたか。", "Did someone come?"],
          ["どこか", "somewhere, anywhere", "やすみに どこかへ いきますか。", "Will you go anywhere on your day off?"],
          ["いつか", "some day", "いつか にほんへ いきたいです。", "I want to go to Japan some day."]
        ],
        tip: "なにか たべましたか asks whether you ate. Answer: はい、たべました. なにを たべましたか asks what you ate. Answer: パンを たべました."
      },
      {
        h: "Question word + も + negative: not any",
        note: "Adding も and a negative verb makes a total 'no'. The particles を and が drop out, and other particles stay in front of も.",
        headers: ["Word", "Meaning", "Example", "Sentence meaning"],
        rows: [
          ["なにも", "nothing", "きのうは なにも たべませんでした。", "I didn't eat anything yesterday."],
          ["だれも", "nobody", "きょうしつに だれも いません。", "There's nobody in the classroom."],
          ["どこへも", "nowhere", "にちようびは どこへも いきませんでした。", "I didn't go anywhere on Sunday."],
          ["だれにも", "to nobody", "だれにも あいませんでした。", "I didn't meet anybody."]
        ],
        tip: "いつも breaks the pattern: it means 'always', not 'never'."
      }
    ]
  },

  // ───────────────────────── 3. KOSOADO ─────────────────────────
  {
    id: "kosoado",
    title: "Ko-so-a-do",
    jp: "こそあど",
    intro: "This set of words points at things. Once you know the four starting sounds, every row of the chart works the same way.",
    sections: [
      {
        h: "The chart",
        note: "こ is near the speaker, そ is near the listener, あ is away from both, and ど asks which.",
        headers: ["What it points at", "こ: near me", "そ: near you", "あ: away from us", "ど: which?"],
        rows: [
          ["A thing (stands alone)", "これ", "それ", "あれ", "どれ"],
          ["A thing (needs a noun after it)", "この", "その", "あの", "どの"],
          ["A place", "ここ", "そこ", "あそこ", "どこ"],
          ["A direction, or a polite place or person", "こちら", "そちら", "あちら", "どちら"],
          ["A direction or choice (casual)", "こっち", "そっち", "あっち", "どっち"],
          ["A kind of thing (needs a noun after it)", "こんな", "そんな", "あんな", "どんな"]
        ],
        tip: "One row breaks the pattern: the place word is あそこ, not あこ."
      },
      {
        h: "これ それ あれ どれ: things",
        note: "These stand alone, with no noun after them.",
        headers: ["Word", "Example", "Meaning"],
        rows: [
          ["これ", "これは わたしの ほんです。", "This is my book."],
          ["それ", "それは なんですか。", "What is that (near you)?"],
          ["あれ", "あれは ふじさんです。", "That over there is Mt. Fuji."],
          ["どれ", "あなたの かさは どれですか。", "Which one is your umbrella?"]
        ]
      },
      {
        h: "この その あの どの: + noun",
        note: "These can't stand alone. A noun must follow.",
        headers: ["Word", "Example", "Meaning"],
        rows: [
          ["この", "この ほんは わたしのです。", "This book is mine."],
          ["その", "その かばんは いくらですか。", "How much is that bag?"],
          ["あの", "あの ひとは だれですか。", "Who is that person?"],
          ["どの", "どの バスに のりますか。", "Which bus do you take?"]
        ],
        tip: "Say これは ほんです, never このは ほんです. A noun must come straight after この."
      },
      {
        h: "ここ そこ あそこ どこ: places",
        note: "When two people are in the same spot, ここ is where they both are, そこ is a little way off, and あそこ is further away.",
        headers: ["Word", "Example", "Meaning"],
        rows: [
          ["ここ", "ここは きょうしつです。", "This is the classroom."],
          ["そこ", "そこに ゆうびんきょくが あります。", "There's a post office there."],
          ["あそこ", "あそこは びょういんです。", "That place over there is a hospital."],
          ["どこ", "えきは どこですか。", "Where is the station?"]
        ]
      },
      {
        h: "こちら そちら あちら どちら: polite",
        note: "These are the polite versions of the place words. こちら also politely introduces a person, and どちら also means 'which of two'.",
        headers: ["Word", "Example", "Meaning"],
        rows: [
          ["こちら", "こちらは やまださんです。", "This is Mr. Yamada."],
          ["こちら", "こちらへ どうぞ。", "This way, please."],
          ["そちら", "そちらの ちずを みせて ください。", "Please show me the map on your side."],
          ["あちら", "エレベーターは あちらです。", "The elevator is over there."],
          ["どちら", "おくには どちらですか。", "Which country are you from?"]
        ],
        tip: "Staff in shops and hotels use this row with customers. Use it yourself with people you should be polite to."
      },
      {
        h: "こっち そっち あっち どっち: casual",
        note: "Same meaning as the row above, for friends and family only.",
        headers: ["Word", "Example", "Meaning"],
        rows: [
          ["こっち", "こっちへ きて。", "Come over here."],
          ["そっち", "そっちは さむい？", "Is it cold where you are?"],
          ["あっち", "えきは あっちだよ。", "The station is that way."],
          ["どっち", "どっちが いい？", "Which one do you want?"]
        ]
      },
      {
        h: "こんな そんな あんな どんな: this kind of",
        note: "These mean 'a thing like this'. A noun must follow.",
        headers: ["Word", "Example", "Meaning"],
        rows: [
          ["こんな", "こんな かばんが ほしいです。", "I want a bag like this."],
          ["そんな", "そんな くつは ありません。", "We don't have shoes like that."],
          ["あんな", "あんな うちに すみたいです。", "I want to live in a house like that."],
          ["どんな", "どんな ひとですか。", "What kind of person is he?"]
        ]
      },
      {
        h: "The answer flips",
        note: "What is near me is far from you, so the word changes between question and answer.",
        headers: ["Question", "Answer", "Meaning"],
        rows: [
          ["それは なんですか。", "これは じしょです。", "What's that? This is a dictionary."],
          ["これは なんですか。", "それは とけいです。", "What's this? That's a watch."],
          ["あれは なんですか。", "あれは ぎんこうです。", "What's that over there? That's a bank."],
          ["ここは どこですか。", "ここは とうきょうです。", "Where are we? This is Tokyo."]
        ],
        tip: "A question with あ gets an answer with あ, because the thing is far from both of you."
      }
    ]
  },

  // ───────────────────────── 4. VERBS ─────────────────────────
  {
    id: "verbs",
    title: "Verb Forms",
    jp: "どうし",
    intro: "Every N5 verb form in one place. Find the verb's group first, because the group decides how each form is made.",
    sections: [
      {
        h: "The three groups",
        note: "Look at the sound just before ます. That sound tells you the group.",
        headers: ["Group", "How to spot it", "Examples", "Meaning"],
        rows: [
          ["Group 1", "An i-sound before the ending", "かいます・のみます・かえります", "buy, drink, go home"],
          ["Group 2", "An e-sound before the ending", "たべます・ねます・あけます", "eat, sleep, open"],
          ["Group 2 (exceptions)", "An i-sound, but learn these as Group 2", "みます・おきます・かります", "see, get up, borrow"],
          ["Group 3", "Only two verbs, plus any noun with the verb 'do'", "します・きます・べんきょうします", "do, come, study"]
        ],
        tip: "Group 3 also covers compounds: もって きます and つれて きます end in the same irregular verb."
      },
      {
        h: "Group 2 exceptions to memorise",
        note: "These have an i-sound before ます but belong to Group 2. These are the main N5 ones.",
        headers: ["Verb", "Meaning", "て form"],
        rows: [
          ["みます", "see, watch", "みて"],
          ["おきます", "get up", "おきて"],
          ["あびます", "take a shower", "あびて"],
          ["かります", "borrow", "かりて"],
          ["おります", "get off", "おりて"],
          ["います", "be, exist (people, animals)", "いて"],
          ["できます", "can do", "できて"],
          ["きます", "wear", "きて"],
          ["たります", "be enough", "たりて"]
        ]
      },
      {
        h: "Sound-alike traps",
        note: "These pairs sound the same or nearly the same but sit in different groups, so their forms differ.",
        headers: ["Verb", "Meaning", "Group", "て form", "ない form"],
        rows: [
          ["おきます", "get up", "2", "おきて", "おきない"],
          ["おきます", "put", "1", "おいて", "おかない"],
          ["きます", "come", "3", "きて", "こない"],
          ["きます", "wear", "2", "きて", "きない"],
          ["かえります", "go home", "1", "かえって", "かえらない"],
          ["かえます", "change", "2", "かえて", "かえない"],
          ["かります", "borrow", "2", "かりて", "かりない"],
          ["かいます", "buy", "1", "かって", "かわない"],
          ["います", "be, exist", "2", "いて", "いない"],
          ["いります", "need", "1", "いって", "いらない"],
          ["いきます", "go", "1", "いって", "いかない"],
          ["いいます", "say", "1", "いって", "いわない"]
        ],
        tip: "いって can be go, say or need. Only the sentence tells you which."
      },
      {
        h: "ます form: polite present and future",
        note: "Taught in Lesson 4. The part before ます is called the stem, and many patterns are built on it. It covers both 'I do' and 'I will do'.",
        headers: ["Group", "Dictionary form", "ます form", "Meaning"],
        rows: [
          ["Group 1", "のむ", "のみます", "drink"],
          ["Group 1", "かえる", "かえります", "go home"],
          ["Group 1", "いく", "いきます", "go"],
          ["Group 2", "たべる", "たべます", "eat"],
          ["Group 2", "みる", "みます", "see"],
          ["Group 3", "する", "します", "do"],
          ["Group 3", "くる", "きます", "come"]
        ]
      },
      {
        h: "ません form: polite negative",
        note: "Taught in Lesson 4. Change ます to ません. Every group works the same way.",
        headers: ["Group", "ます form", "ません form", "Meaning"],
        rows: [
          ["Group 1", "のみます", "のみません", "don't drink"],
          ["Group 1", "かえります", "かえりません", "don't go home"],
          ["Group 2", "たべます", "たべません", "don't eat"],
          ["Group 2", "みます", "みません", "don't see"],
          ["Group 3", "します", "しません", "don't do"],
          ["Group 3", "きます", "きません", "don't come"]
        ]
      },
      {
        h: "ました form: polite past",
        note: "Taught in Lesson 4. Change ます to ました.",
        headers: ["Group", "ます form", "ました form", "Meaning"],
        rows: [
          ["Group 1", "のみます", "のみました", "drank"],
          ["Group 1", "かえります", "かえりました", "went home"],
          ["Group 2", "たべます", "たべました", "ate"],
          ["Group 2", "みます", "みました", "saw"],
          ["Group 3", "します", "しました", "did"],
          ["Group 3", "きます", "きました", "came"]
        ]
      },
      {
        h: "ませんでした form: polite past negative",
        note: "Taught in Lesson 4. Change ます to ませんでした.",
        headers: ["Group", "ます form", "ませんでした form", "Meaning"],
        rows: [
          ["Group 1", "のみます", "のみませんでした", "didn't drink"],
          ["Group 1", "かえります", "かえりませんでした", "didn't go home"],
          ["Group 2", "たべます", "たべませんでした", "didn't eat"],
          ["Group 2", "みます", "みませんでした", "didn't see"],
          ["Group 3", "します", "しませんでした", "didn't do"],
          ["Group 3", "きます", "きませんでした", "didn't come"]
        ]
      },
      {
        h: "て form",
        note: "Taught in Lesson 14. For Group 1, the sound before ます decides the ending. Group 2 just swaps ます for て. Group 3 is irregular.",
        headers: ["Group", "Sound before the ending", "Becomes", "ます form", "て form", "Meaning"],
        rows: [
          ["Group 1", "い", "って", "かいます", "かって", "buy"],
          ["Group 1", "ち", "って", "まちます", "まって", "wait"],
          ["Group 1", "り", "って", "かえります", "かえって", "go home"],
          ["Group 1", "み", "んで", "のみます", "のんで", "drink"],
          ["Group 1", "び", "んで", "よびます", "よんで", "call"],
          ["Group 1", "に", "んで", "しにます", "しんで", "die"],
          ["Group 1", "き", "いて", "かきます", "かいて", "write"],
          ["Group 1", "ぎ", "いで", "およぎます", "およいで", "swim"],
          ["Group 1", "し", "して", "はなします", "はなして", "speak"],
          ["Group 1 (exception)", "き", "って", "いきます", "いって", "go"],
          ["Group 2", "any", "て", "たべます", "たべて", "eat"],
          ["Group 2", "any", "て", "みます", "みて", "see"],
          ["Group 3", "irregular", "して", "します", "して", "do"],
          ["Group 3", "irregular", "きて", "きます", "きて", "come"]
        ],
        tip: "Three families to learn as sets: い ち り become って, み び に become んで, き ぎ become いて and いで. いきます is the one verb that breaks its set."
      },
      {
        h: "ない form: plain negative",
        note: "Taught in Lesson 17. For Group 1, change the i-sound to the a-sound in the same row, then add ない. Group 2 swaps ます for ない. Group 3 is irregular.",
        headers: ["Group", "Sound before the ending", "Becomes", "ます form", "ない form", "Meaning"],
        rows: [
          ["Group 1", "い", "わ", "かいます", "かわない", "don't buy"],
          ["Group 1", "ち", "た", "まちます", "またない", "don't wait"],
          ["Group 1", "り", "ら", "かえります", "かえらない", "don't go home"],
          ["Group 1", "み", "ま", "のみます", "のまない", "don't drink"],
          ["Group 1", "び", "ば", "よびます", "よばない", "don't call"],
          ["Group 1", "に", "な", "しにます", "しなない", "don't die"],
          ["Group 1", "き", "か", "かきます", "かかない", "don't write"],
          ["Group 1", "ぎ", "が", "およぎます", "およがない", "don't swim"],
          ["Group 1", "し", "さ", "はなします", "はなさない", "don't speak"],
          ["Group 1 (exception)", "irregular", "irregular", "あります", "ない", "don't have, there isn't"],
          ["Group 2", "any", "no change", "たべます", "たべない", "don't eat"],
          ["Group 2", "any", "no change", "みます", "みない", "don't see"],
          ["Group 3", "irregular", "irregular", "します", "しない", "don't do"],
          ["Group 3", "irregular", "irregular", "きます", "こない", "don't come"]
        ],
        tip: "Two classic mistakes: い goes to わ, not あ (かわない, never かあない). And the plain negative of あります is just ない."
      },
      {
        h: "Dictionary form",
        note: "Taught in Lesson 18. For Group 1, change the i-sound to the u-sound in the same row. Group 2 swaps ます for る. Group 3 is irregular.",
        headers: ["Group", "Sound before the ending", "Becomes", "ます form", "Dictionary form", "Meaning"],
        rows: [
          ["Group 1", "い", "う", "かいます", "かう", "buy"],
          ["Group 1", "ち", "つ", "まちます", "まつ", "wait"],
          ["Group 1", "り", "る", "かえります", "かえる", "go home"],
          ["Group 1", "み", "む", "のみます", "のむ", "drink"],
          ["Group 1", "び", "ぶ", "よびます", "よぶ", "call"],
          ["Group 1", "に", "ぬ", "しにます", "しぬ", "die"],
          ["Group 1", "き", "く", "かきます", "かく", "write"],
          ["Group 1", "ぎ", "ぐ", "およぎます", "およぐ", "swim"],
          ["Group 1", "し", "す", "はなします", "はなす", "speak"],
          ["Group 2", "any", "る", "たべます", "たべる", "eat"],
          ["Group 2", "any", "る", "みます", "みる", "see"],
          ["Group 3", "irregular", "irregular", "します", "する", "do"],
          ["Group 3", "irregular", "irregular", "きます", "くる", "come"],
          ["Group 3", "irregular", "irregular", "べんきょうします", "べんきょうする", "study"]
        ],
        tip: "A dictionary form ending in る isn't always Group 2. かえる, はいる and きる (cut) are Group 1, which is why learning verbs in ます form helps."
      },
      {
        h: "た form: plain past",
        note: "Taught in Lesson 19. Take the て form and swap て for た, or で for だ. Nothing else changes.",
        headers: ["Group", "ます form", "て form", "た form", "Meaning"],
        rows: [
          ["Group 1", "かいます", "かって", "かった", "bought"],
          ["Group 1", "まちます", "まって", "まった", "waited"],
          ["Group 1", "かえります", "かえって", "かえった", "went home"],
          ["Group 1", "のみます", "のんで", "のんだ", "drank"],
          ["Group 1", "よびます", "よんで", "よんだ", "called"],
          ["Group 1", "しにます", "しんで", "しんだ", "died"],
          ["Group 1", "かきます", "かいて", "かいた", "wrote"],
          ["Group 1", "およぎます", "およいで", "およいだ", "swam"],
          ["Group 1", "はなします", "はなして", "はなした", "spoke"],
          ["Group 1 (exception)", "いきます", "いって", "いった", "went"],
          ["Group 2", "たべます", "たべて", "たべた", "ate"],
          ["Group 2", "みます", "みて", "みた", "saw"],
          ["Group 3", "します", "して", "した", "did"],
          ["Group 3", "きます", "きて", "きた", "came"]
        ]
      },
      {
        h: "Patterns built on the ます stem",
        note: "Take off ます and add the ending.",
        headers: ["Pattern", "Lesson", "Example", "Meaning"],
        rows: [
          ["～ませんか", "6", "いっしょに えいがを みませんか。", "Won't you watch a film with me?"],
          ["～ましょう", "6", "すこし やすみましょう。", "Let's take a short break."],
          ["～たいです", "13", "あたらしい くつを かいたいです。", "I want to buy new shoes."],
          ["～に いきます", "13", "スーパーへ パンを かいに いきます。", "I'm going to the supermarket to buy bread."],
          ["～ましょうか", "14", "にもつを もちましょうか。", "Shall I carry your bag?"]
        ],
        tip: "～たいです changes like an い-adjective: いきたくないです, いきたかったです."
      },
      {
        h: "Patterns built on the て form",
        headers: ["Pattern", "Lesson", "Example", "Meaning"],
        rows: [
          ["～て ください", "14", "もう いちど いって ください。", "Please say it once more."],
          ["～て います", "14", "いま てがみを かいて います。", "I'm writing a letter now."],
          ["～て います", "15", "あには けっこんして います。", "My older brother is married."],
          ["～ても いいです", "15", "ここで しゃしんを とっても いいですか。", "May I take a photo here?"],
          ["～ては いけません", "15", "ここに くるまを とめては いけません。", "You must not park here."],
          ["～て、～て、～", "16", "あさ おきて、シャワーを あびて、かいしゃへ いきます。", "In the morning I get up, shower and go to work."],
          ["～てから", "16", "てを あらってから、ごはんを たべます。", "I eat after washing my hands."],
          ["～て あげます", "24", "ともだちに ほんを かして あげました。", "I lent a book to my friend."],
          ["～て もらいます", "24", "ちちに じてんしゃを なおして もらいました。", "My father fixed my bicycle for me."],
          ["～て くれます", "24", "ははが ケーキを つくって くれました。", "My mother made me a cake."],
          ["～ても", "25", "あめが ふっても、いきます。", "Even if it rains, I'll go."]
        ],
        tip: "'I don't know' is しりません, never しって いません. With adjectives and nouns, ～ても becomes くても or でも: やすくても, ひまでも, にちようびでも."
      },
      {
        h: "Patterns built on the ない form",
        note: "For the last two, take the final い off ない first.",
        headers: ["Pattern", "Lesson", "Example", "Meaning"],
        rows: [
          ["～ないで ください", "17", "ここで たばこを すわないで ください。", "Please don't smoke here."],
          ["～なければ なりません", "17", "あした びょういんへ いかなければ なりません。", "I have to go to the hospital tomorrow."],
          ["～なくても いいです", "17", "あしたは こなくても いいです。", "You don't have to come tomorrow."]
        ]
      },
      {
        h: "Patterns built on the dictionary form",
        headers: ["Pattern", "Lesson", "Example", "Meaning"],
        rows: [
          ["～ことが できます", "18", "わたしは ピアノを ひく ことが できます。", "I can play the piano."],
          ["しゅみは ～ことです", "18", "わたしの しゅみは えを かく ことです。", "My hobby is drawing."],
          ["～まえに", "18", "ねる まえに、はを みがきます。", "I brush my teeth before going to bed."],
          ["～と", "23", "この みちを まっすぐ いくと、えきが あります。", "If you go straight along this road, you'll find the station."],
          ["～とき", "23", "ねる とき、でんきを けします。", "When I go to bed, I turn off the light."]
        ],
        tip: "The verb before まえに stays in dictionary form even when the sentence is about the past."
      },
      {
        h: "Patterns built on the た form",
        headers: ["Pattern", "Lesson", "Example", "Meaning"],
        rows: [
          ["～た ことが あります", "19", "ふじさんに のぼった ことが あります。", "I have climbed Mt. Fuji."],
          ["～たり ～たり します", "19", "にちようびは テニスを したり、えいがを みたり します。", "On Sundays I do things like play tennis and watch films."],
          ["～たら", "25", "じかんが あったら、きょうとへ いきたいです。", "If I have time, I want to go to Kyoto."]
        ],
        tip: "～たり ～たり always ends in します, and the tense goes on that final verb."
      },
      {
        h: "Patterns built on any plain form",
        note: "These take a plain sentence, so the verb inside can be present, negative or past.",
        headers: ["Pattern", "Lesson", "Example", "Meaning"],
        rows: [
          ["～と おもいます", "21", "たなかさんは こないと おもいます。", "I don't think Mr. Tanaka will come."],
          ["～と いいます", "21", "やまださんは あした くると いいました。", "Mr. Yamada said he will come tomorrow."],
          ["～でしょう？", "21", "あした いくでしょう？", "You're going tomorrow, right?"],
          ["A clause before a noun", "22", "これは ははが つくった ケーキです。", "This is a cake my mother made."],
          ["～とき", "23", "にほんへ いった とき、かいました。", "I bought it when I went to Japan."]
        ]
      }
    ]
  },

  // ───────────────────────── 5. ADJECTIVES ─────────────────────────
  {
    id: "adjectives",
    title: "Adjectives",
    jp: "けいようし",
    intro: "Japanese has two kinds of adjective, and each kind changes differently. Decide which kind you have first, then read across the chart.",
    sections: [
      {
        h: "い-adjectives: polite forms",
        note: "Drop the final い and add the ending. Taught in Lessons 8 and 12.",
        headers: ["Present", "Negative", "Past", "Past negative", "Meaning"],
        rows: [
          ["たかいです", "たかくないです", "たかかったです", "たかくなかったです", "expensive, tall"],
          ["おおきいです", "おおきくないです", "おおきかったです", "おおきくなかったです", "big"],
          ["おいしいです", "おいしくないです", "おいしかったです", "おいしくなかったです", "delicious"],
          ["あついです", "あつくないです", "あつかったです", "あつくなかったです", "hot"],
          ["たのしいです", "たのしくないです", "たのしかったです", "たのしくなかったです", "fun"]
        ],
        tip: "い-adjectives carry their own tense. The です at the end never changes, so たかいでした is wrong."
      },
      {
        h: "い-adjectives: linking forms",
        headers: ["Dictionary form", "Before a noun", "Joining", "Becoming", "Meaning"],
        rows: [
          ["たかい", "たかい やま", "たかくて", "たかく なります", "high, tall"],
          ["おおきい", "おおきい かばん", "おおきくて", "おおきく なります", "big"],
          ["おいしい", "おいしい りょうり", "おいしくて", "おいしく なります", "delicious"],
          ["さむい", "さむい ふゆ", "さむくて", "さむく なります", "cold"],
          ["たのしい", "たのしい パーティー", "たのしくて", "たのしく なります", "fun"]
        ]
      },
      {
        h: "いい: the irregular one",
        note: "いい comes from an older word, よい, and every form except the plain present uses that よ.",
        headers: ["Form", "Right", "Wrong"],
        rows: [
          ["Present", "いいです", "None: this form is fine"],
          ["Negative", "よくないです", "いくないです"],
          ["Past", "よかったです", "いかったです"],
          ["Past negative", "よくなかったです", "いくなかったです"],
          ["Joining", "よくて", "いくて"],
          ["Becoming", "よく なります", "いく なります"]
        ],
        tip: "The same goes for phrases built on it: あたまが いい becomes あたまが よかった, and からだに いい becomes からだに よくない."
      },
      {
        h: "な-adjectives: polite forms",
        note: "The word itself never changes. Only the ending after it does. Taught in Lessons 8 and 12.",
        headers: ["Present", "Negative", "Past", "Past negative", "Meaning"],
        rows: [
          ["しずかです", "しずかじゃ ありません", "しずかでした", "しずかじゃ ありませんでした", "quiet"],
          ["げんきです", "げんきじゃ ありません", "げんきでした", "げんきじゃ ありませんでした", "well, healthy"],
          ["べんりです", "べんりじゃ ありません", "べんりでした", "べんりじゃ ありませんでした", "convenient"],
          ["ひまです", "ひまじゃ ありません", "ひまでした", "ひまじゃ ありませんでした", "free"],
          ["すきです", "すきじゃ ありません", "すきでした", "すきじゃ ありませんでした", "like"]
        ],
        tip: "Nouns use exactly these endings: がくせいです, がくせいじゃ ありません, がくせいでした, がくせいじゃ ありませんでした."
      },
      {
        h: "な-adjectives: linking forms",
        headers: ["Word", "Before a noun", "Joining", "Becoming", "Meaning"],
        rows: [
          ["しずか", "しずかな まち", "しずかで", "しずかに なります", "quiet"],
          ["げんき", "げんきな こども", "げんきで", "げんきに なります", "well, lively"],
          ["べんり", "べんりな ところ", "べんりで", "べんりに なります", "convenient"],
          ["ゆうめい", "ゆうめいな ひと", "ゆうめいで", "ゆうめいに なります", "famous"],
          ["きれい", "きれいな はな", "きれいで", "きれいに なります", "beautiful, clean"]
        ],
        tip: "Nouns become with に too: いしゃに なります. Nouns join with で: がくせいで."
      },
      {
        h: "The trap words: きれい, ゆうめい, きらい",
        note: "These end in the sound い but are な-adjectives. The い is part of the word, so it never drops.",
        headers: ["Word", "Meaning", "Right negative", "Wrong negative", "Before a noun"],
        rows: [
          ["きれい", "beautiful, clean", "きれいじゃ ありません", "きれくないです", "きれいな へや"],
          ["ゆうめい", "famous", "ゆうめいじゃ ありません", "ゆうめくないです", "ゆうめいな やま"],
          ["きらい", "dislike", "きらいじゃ ありません", "きらくないです", "きらいな たべもの"]
        ],
        tip: "Memorise them with な attached: きれいな, ゆうめいな, きらいな."
      },
      {
        h: "Joining two adjectives",
        note: "Taught in Lesson 16. い-adjectives join with くて. な-adjectives and nouns join with で. Only the last word shows the tense.",
        headers: ["First word", "Example", "Meaning"],
        rows: [
          ["ひろい", "この へやは ひろくて、あかるいです。", "This room is big and bright."],
          ["やすい", "この みせは やすくて、いいです。", "This shop is cheap and good."],
          ["しずか", "この まちは しずかで、きれいです。", "This town is quiet and pretty."],
          ["がくせい", "やまださんは がくせいで、にじゅうさいです。", "Mr. Yamada is a student and is 20."]
        ],
        tip: "Use these for two matching ideas (good and good, bad and bad). For a good point and a bad point, use が: この へやは せまいですが、きれいです."
      },
      {
        h: "Becoming: くなります / になります",
        note: "Taught in Lesson 19. い-adjectives drop い and add く. な-adjectives and nouns add に.",
        headers: ["Type", "Example", "Meaning"],
        rows: [
          ["An i-adjective", "さむく なりました。", "It has got cold."],
          ["The irregular word for 'good'", "びょうきが よく なりました。", "My illness got better."],
          ["A na-adjective", "げんきに なりました。", "I got well again."],
          ["A noun", "らいねん はたちに なります。", "I'll turn 20 next year."]
        ]
      },
      {
        h: "Adjectives as adverbs",
        note: "The same く and に endings let an adjective describe a verb.",
        headers: ["Adjective", "Adverb", "Example", "Meaning"],
        rows: [
          ["はやい", "はやく", "あさ はやく おきます。", "I get up early in the morning."],
          ["おおきい", "おおきく", "なまえを おおきく かいて ください。", "Please write your name in large letters."],
          ["しずか", "しずかに", "しずかに はなして ください。", "Please speak quietly."],
          ["きれい", "きれいに", "へやを きれいに そうじしました。", "I cleaned the room properly."],
          ["じょうず", "じょうずに", "ピアノを じょうずに ひきます。", "He plays the piano well."]
        ]
      },
      {
        h: "Common mistakes",
        headers: ["Wrong", "Right", "Why"],
        rows: [
          ["たかいでした。", "たかかったです。", "An i-adjective carries the past itself: drop the final i and add katta."],
          ["たかいじゃ ありません。", "たかくないです。", "An i-adjective makes its negative with kunai."],
          ["しずかくないです。", "しずかじゃ ありません。", "Shizuka is a na-adjective, so it can't take kunai."],
          ["たかいな やま", "たかい やま", "An i-adjective goes straight onto the noun."],
          ["しずか まち", "しずかな まち", "A na-adjective needs na before a noun."],
          ["たかいで、おいしいです。", "たかくて、おいしいです。", "An i-adjective joins with kute."],
          ["おいしいだ。", "おいしい。", "Plain style never adds da after an i-adjective."]
        ]
      }
    ]
  },

  // ───────────────────────── 6. POLITE / CASUAL ─────────────────────────
  {
    id: "polite-casual",
    title: "Polite & Casual",
    jp: "ていねい・ふつう",
    intro: "Most of what you learn first is polite style. This page lines it up with plain style, which you need for friends and for many grammar patterns.",
    sections: [
      {
        h: "When to use which",
        note: "Taught in Lesson 20. When in doubt, stay polite.",
        headers: ["Who or where", "Style", "Why"],
        rows: [
          ["People you have just met", "Polite", "You don't know them well yet."],
          ["Teachers, bosses, older people", "Polite", "It shows respect."],
          ["Shops, offices, phone calls", "Polite", "It's the normal public style."],
          ["Letters, emails and speeches", "Polite", "It's the safe, standard style."],
          ["Close friends and family", "Plain", "Polite style would sound distant."],
          ["Children and people younger than you", "Plain", "It sounds natural and warm."],
          ["Diaries, notes, newspapers, essays", "Plain", "There is no listener to be polite to."]
        ],
        tip: "Plain style to a teacher or boss sounds rude. Mixing the two with the same person sounds odd."
      },
      {
        h: "Verbs",
        note: "Four polite forms, four plain forms.",
        headers: ["Tense", "Polite", "Plain", "Meaning"],
        rows: [
          ["Present", "いきます", "いく", "go"],
          ["Negative", "いきません", "いかない", "don't go"],
          ["Past", "いきました", "いった", "went"],
          ["Past negative", "いきませんでした", "いかなかった", "didn't go"],
          ["Present", "たべます", "たべる", "eat"],
          ["Negative", "たべません", "たべない", "don't eat"],
          ["Past", "たべました", "たべた", "ate"],
          ["Past negative", "たべませんでした", "たべなかった", "didn't eat"],
          ["Present", "します", "する", "do"],
          ["Negative", "しません", "しない", "don't do"],
          ["Past", "しました", "した", "did"],
          ["Past negative", "しませんでした", "しなかった", "didn't do"],
          ["Present", "きます", "くる", "come"],
          ["Negative", "きません", "こない", "don't come"],
          ["Past", "きました", "きた", "came"],
          ["Past negative", "きませんでした", "こなかった", "didn't come"],
          ["Present", "あります", "ある", "have, there is"],
          ["Negative", "ありません", "ない", "don't have, there isn't"],
          ["Past", "ありました", "あった", "had, there was"],
          ["Past negative", "ありませんでした", "なかった", "didn't have, there wasn't"]
        ],
        tip: "To get the plain past negative, change the last い of ない to かった."
      },
      {
        h: "い-adjectives",
        note: "Just take off です.",
        headers: ["Tense", "Polite", "Plain", "Meaning"],
        rows: [
          ["Present", "あついです", "あつい", "is hot"],
          ["Negative", "あつくないです", "あつくない", "isn't hot"],
          ["Past", "あつかったです", "あつかった", "was hot"],
          ["Past negative", "あつくなかったです", "あつくなかった", "wasn't hot"],
          ["Present", "いいです", "いい", "is good"],
          ["Negative", "よくないです", "よくない", "isn't good"],
          ["Past", "よかったです", "よかった", "was good"],
          ["Past negative", "よくなかったです", "よくなかった", "wasn't good"]
        ]
      },
      {
        h: "な-adjectives",
        note: "です becomes だ. The other forms use ない and だった.",
        headers: ["Tense", "Polite", "Plain", "Meaning"],
        rows: [
          ["Present", "ひまです", "ひまだ", "is free"],
          ["Negative", "ひまじゃ ありません", "ひまじゃ ない", "isn't free"],
          ["Past", "ひまでした", "ひまだった", "was free"],
          ["Past negative", "ひまじゃ ありませんでした", "ひまじゃ なかった", "wasn't free"]
        ]
      },
      {
        h: "Nouns",
        note: "Nouns work exactly like な-adjectives.",
        headers: ["Tense", "Polite", "Plain", "Meaning"],
        rows: [
          ["Present", "あめです", "あめだ", "it's rainy"],
          ["Negative", "あめじゃ ありません", "あめじゃ ない", "it isn't rainy"],
          ["Past", "あめでした", "あめだった", "it was rainy"],
          ["Past negative", "あめじゃ ありませんでした", "あめじゃ なかった", "it wasn't rainy"]
        ],
        tip: "Never put だ after an い-adjective: おいしいだ is wrong."
      },
      {
        h: "Patterns",
        note: "Only the last word of a pattern changes.",
        headers: ["Polite", "Plain", "Meaning"],
        rows: [
          ["いきたいです", "いきたい", "want to go"],
          ["まって ください", "まって", "please wait"],
          ["みて います", "みて いる", "am watching"],
          ["いかないで ください", "いかないで", "please don't go"],
          ["いかなければ なりません", "いかなければ ならない", "have to go"],
          ["およぐ ことが できます", "およぐ ことが できる", "can swim"],
          ["いった ことが あります", "いった ことが ある", "have been"]
        ]
      },
      {
        h: "How casual speech sounds",
        note: "Friends drop some words as well as changing the forms.",
        headers: ["What changes", "Polite", "Casual", "Meaning"],
        rows: [
          ["Questions drop ka and rise in tone", "コーヒーを のみますか。", "コーヒー、のむ？", "Will you have a coffee?"],
          ["Yes becomes a short sound", "はい、のみます。", "うん、のむ。", "Yes, I will."],
          ["No becomes a short sound", "いいえ、のみません。", "ううん、のまない。", "No, I won't."],
          ["Nouns and na-adjectives drop da in questions", "あした ひまですか。", "あした ひま？", "Are you free tomorrow?"],
          ["Some particles drop out", "ごはんを たべましたか。", "ごはん、たべた？", "Have you eaten?"],
          ["Asking for an explanation with a soft ending", "どこへ いきますか。", "どこへ いくの？", "Where are you going?"],
          ["A shorter word for 'but'", "ちょっと たかいですが、かいます。", "ちょっと たかいけど、かう。", "It's a bit expensive, but I'll buy it."]
        ],
        tip: "ぼく and きみ belong to casual speech too. ぼく is used by men and boys."
      },
      {
        h: "Plain forms inside polite sentences",
        note: "Many patterns need a plain form in the middle even in a fully polite sentence. Only the very end of the sentence shows politeness.",
        headers: ["Pattern", "Example", "Meaning"],
        rows: [
          ["～と おもいます", "あした あめが ふると おもいます。", "I think it will rain tomorrow."],
          ["～まえに", "ねる まえに、ほんを よみます。", "I read a book before I go to bed."],
          ["～ことが できます", "かんじを よむ ことが できます。", "I can read kanji."],
          ["～とき", "ひまな とき、さんぽします。", "When I'm free, I go for a walk."]
        ]
      }
    ]
  },

  // ───────────────────────── 7. TIME ─────────────────────────
  {
    id: "time",
    title: "Time & Dates",
    jp: "じかん",
    intro: "Time words, when に is needed, how often, and how to read dates and clock times. Take extra care with the irregular readings.",
    sections: [
      {
        h: "Past, present and future",
        note: "Read each row left to right, from further back to further ahead.",
        headers: ["Unit", "Two before", "Last", "This", "Next", "Two ahead", "Every"],
        rows: [
          ["Day", "おととい", "きのう", "きょう", "あした", "あさって", "まいにち"],
          ["Morning", "おとといの あさ", "きのうの あさ", "けさ", "あしたの あさ", "あさっての あさ", "まいあさ"],
          ["Night", "おとといの ばん", "きのうの ばん", "こんばん", "あしたの ばん", "あさっての ばん", "まいばん"],
          ["Week", "せんせんしゅう", "せんしゅう", "こんしゅう", "らいしゅう", "さらいしゅう", "まいしゅう"],
          ["Month", "せんせんげつ", "せんげつ", "こんげつ", "らいげつ", "さらいげつ", "まいつき"],
          ["Year", "おととし", "きょねん", "ことし", "らいねん", "さらいねん", "まいとし"]
        ],
        tip: "ゆうべ means last night, and こんや means tonight. まいつき and まいとし can also be read まいげつ and まいねん."
      },
      {
        h: "Parts of the day",
        headers: ["Word", "Meaning"],
        rows: [
          ["ごぜん", "a.m., morning"],
          ["ごご", "p.m., afternoon"],
          ["あさ", "morning"],
          ["ひる", "noon, daytime"],
          ["ゆうがた", "early evening"],
          ["ばん", "evening, night"],
          ["よる", "night"]
        ]
      },
      {
        h: "When に is needed",
        note: "A time with a number in it needs に. A word that counts from today does not.",
        headers: ["Kind of time word", "に?", "Example", "Meaning"],
        rows: [
          ["Clock time", "Yes", "しちじに おきます。", "I get up at seven."],
          ["Date", "Yes", "さんがつ みっかに くにへ かえります。", "I'll go back to my country on March 3rd."],
          ["Month", "Yes", "はちがつに りょこうします。", "I'll travel in August."],
          ["Year", "Yes", "にせんじゅうねんに けっこんしました。", "I got married in 2010."],
          ["A special day", "Yes", "たんじょうびに とけいを もらいました。", "I got a watch on my birthday."],
          ["Day of the week", "Optional", "にちようびに テニスを します。", "I play tennis on Sundays."],
          ["Day of the week", "Optional", "にちようび テニスを します。", "I play tennis on Sundays."],
          ["Season", "Optional", "なつに うみへ いきます。", "I go to the sea in summer."],
          ["Today, tomorrow, yesterday", "No", "あした えいがを みます。", "I'll watch a film tomorrow."],
          ["This morning, tonight, now", "No", "けさ パンを たべました。", "I had bread this morning."],
          ["This, last or next week, month, year", "No", "らいしゅう きょうとへ いきます。", "I'm going to Kyoto next week."],
          ["Every day, every morning and so on", "No", "まいあさ コーヒーを のみます。", "I drink coffee every morning."],
          ["The question word for 'when'", "No", "いつ くにへ かえりますか。", "When will you go back to your country?"],
          ["A length of time", "No", "さんじかん べんきょうしました。", "I studied for three hours."]
        ],
        tip: "ごろ means 'about' for a point in time (くじごろ). ぐらい means 'about' for an amount (いちじかんぐらい)."
      },
      {
        h: "How often",
        note: "From always down to never. The last three need a negative verb.",
        headers: ["Word", "Meaning", "Example", "Sentence meaning"],
        rows: [
          ["いつも", "always", "いつも あるいて がっこうへ いきます。", "I always walk to school."],
          ["たいてい", "usually", "たいてい うちで ばんごはんを たべます。", "I usually have dinner at home."],
          ["よく", "often", "よく としょかんへ いきます。", "I often go to the library."],
          ["ときどき", "sometimes", "ときどき コーヒーを のみます。", "I sometimes drink coffee."],
          ["あまり", "not often", "あまり テレビを みません。", "I don't watch TV much."],
          ["ぜんぜん", "not at all", "ぜんぜん おさけを のみません。", "I don't drink alcohol at all."],
          ["いちども", "not even once", "いちども いきませんでした。", "I didn't go even once."]
        ]
      },
      {
        h: "So many times per period",
        note: "Period + に + number of times.",
        headers: ["Example", "Meaning"],
        rows: [
          ["いちにちに さんかい くすりを のみます。", "I take medicine three times a day."],
          ["いっしゅうかんに にかい およぎます。", "I swim twice a week."],
          ["いっかげつに いっかい えいがを みます。", "I watch a film once a month."],
          ["いちねんに にかい くにへ かえります。", "I go back to my country twice a year."]
        ]
      },
      {
        h: "The seasons",
        headers: ["Season", "Meaning", "Months in Japan", "Example", "Sentence meaning"],
        rows: [
          ["はる", "spring", "March to May", "はるは あたたかいです。", "Spring is warm."],
          ["なつ", "summer", "June to August", "なつは あついです。", "Summer is hot."],
          ["あき", "autumn", "September to November", "あきは すずしいです。", "Autumn is cool."],
          ["ふゆ", "winter", "December to February", "ふゆは さむいです。", "Winter is cold."]
        ],
        tip: "The word for season is きせつ. A cherry-blossom outing is おはなみ, and the red autumn leaves are もみじ."
      },
      {
        h: "Days of the week",
        headers: ["Word", "Meaning"],
        rows: [
          ["げつようび", "Monday"],
          ["かようび", "Tuesday"],
          ["すいようび", "Wednesday"],
          ["もくようび", "Thursday"],
          ["きんようび", "Friday"],
          ["どようび", "Saturday"],
          ["にちようび", "Sunday"],
          ["なんようび", "what day of the week"]
        ]
      },
      {
        h: "Months",
        note: "Number + がつ. Watch April, July and September.",
        headers: ["Month", "Reading", "Month", "Reading"],
        rows: [
          ["January", "いちがつ", "July", "しちがつ"],
          ["February", "にがつ", "August", "はちがつ"],
          ["March", "さんがつ", "September", "くがつ"],
          ["April", "しがつ", "October", "じゅうがつ"],
          ["May", "ごがつ", "November", "じゅういちがつ"],
          ["June", "ろくがつ", "December", "じゅうにがつ"]
        ],
        tip: "April is しがつ, not よんがつ. July is しちがつ, not なながつ. September is くがつ, not きゅうがつ."
      },
      {
        h: "Days of the month",
        note: "Days 1 to 10 have their own readings. After that it's number + にち, apart from 14, 20 and 24.",
        headers: ["Date", "Reading", "Date", "Reading"],
        rows: [
          ["1st", "ついたち", "11th", "じゅういちにち"],
          ["2nd", "ふつか", "12th", "じゅうににち"],
          ["3rd", "みっか", "13th", "じゅうさんにち"],
          ["4th", "よっか", "14th", "じゅうよっか"],
          ["5th", "いつか", "15th", "じゅうごにち"],
          ["6th", "むいか", "16th", "じゅうろくにち"],
          ["7th", "なのか", "17th", "じゅうしちにち"],
          ["8th", "ようか", "18th", "じゅうはちにち"],
          ["9th", "ここのか", "19th", "じゅうくにち"],
          ["10th", "とおか", "20th", "はつか"],
          ["21st", "にじゅういちにち", "24th", "にじゅうよっか"],
          ["29th", "にじゅうくにち", "30th", "さんじゅうにち"]
        ],
        tip: "よっか is the 4th and ようか is the 8th, so take care with those two. ふつか through とおか also mean 'for two days' through 'for ten days'."
      },
      {
        h: "Saying a full date",
        note: "Go from biggest to smallest: year, month, day, day of the week.",
        headers: ["Date", "In Japanese"],
        rows: [
          ["Wednesday 4 November 2026", "にせんにじゅうろくねん じゅういちがつ よっか すいようび"],
          ["1 April", "しがつ ついたち"],
          ["20 July", "しちがつ はつか"],
          ["14 September", "くがつ じゅうよっか"]
        ]
      },
      {
        h: "Hours",
        note: "Number + じ. Watch 4, 7 and 9.",
        headers: ["Time", "Reading", "Time", "Reading"],
        rows: [
          ["1:00", "いちじ", "7:00", "しちじ"],
          ["2:00", "にじ", "8:00", "はちじ"],
          ["3:00", "さんじ", "9:00", "くじ"],
          ["4:00", "よじ", "10:00", "じゅうじ"],
          ["5:00", "ごじ", "11:00", "じゅういちじ"],
          ["6:00", "ろくじ", "12:00", "じゅうにじ"]
        ],
        tip: "4 o'clock is よじ, not よんじ. 9 o'clock is くじ, not きゅうじ."
      },
      {
        h: "Minutes",
        note: "The ending switches between ふん and ぷん.",
        headers: ["Minutes", "Reading", "Minutes", "Reading"],
        rows: [
          ["1", "いっぷん", "6", "ろっぷん"],
          ["2", "にふん", "7", "ななふん"],
          ["3", "さんぷん", "8", "はっぷん"],
          ["4", "よんぷん", "9", "きゅうふん"],
          ["5", "ごふん", "10", "じゅっぷん"],
          ["15", "じゅうごふん", "20", "にじゅっぷん"],
          ["30", "さんじゅっぷん", "45", "よんじゅうごふん"]
        ],
        tip: "ぷん goes with 1, 3, 4, 6, 8 and 10. ふん goes with 2, 5, 7 and 9. じゅっぷん can also be read じっぷん."
      },
      {
        h: "Saying a clock time",
        headers: ["Time", "In Japanese"],
        rows: [
          ["9:00", "くじです。"],
          ["7:05", "しちじ ごふんです。"],
          ["4:10", "よじ じゅっぷんです。"],
          ["1:30", "いちじ はんです。"],
          ["2:15 p.m.", "ごご にじ じゅうごふんです。"],
          ["8:40 a.m.", "ごぜん はちじ よんじゅっぷんです。"],
          ["8:55", "くじ ごふん まえです。"],
          ["About 6:00", "ろくじごろです。"]
        ],
        tip: "はん means half past. For a time before the hour, add まえ after the minutes."
      },
      {
        h: "Lengths of time",
        note: "These count how long something lasts. Put them right before the verb, with no particle.",
        headers: ["Number", "Hours", "Days", "Weeks", "Months", "Years"],
        rows: [
          ["1", "いちじかん", "いちにち", "いっしゅうかん", "いっかげつ", "いちねん"],
          ["2", "にじかん", "ふつか", "にしゅうかん", "にかげつ", "にねん"],
          ["3", "さんじかん", "みっか", "さんしゅうかん", "さんかげつ", "さんねん"],
          ["4", "よじかん", "よっか", "よんしゅうかん", "よんかげつ", "よねん"],
          ["5", "ごじかん", "いつか", "ごしゅうかん", "ごかげつ", "ごねん"],
          ["6", "ろくじかん", "むいか", "ろくしゅうかん", "ろっかげつ", "ろくねん"],
          ["7", "しちじかん", "なのか", "ななしゅうかん", "ななかげつ", "ななねん"],
          ["8", "はちじかん", "ようか", "はっしゅうかん", "はちかげつ", "はちねん"],
          ["9", "くじかん", "ここのか", "きゅうしゅうかん", "きゅうかげつ", "きゅうねん"],
          ["10", "じゅうじかん", "とおか", "じゅっしゅうかん", "じゅっかげつ", "じゅうねん"]
        ],
        tip: "The month ろくがつ is June, but ろっかげつ is six months. Days 2 to 10 sound the same as the dates, so context tells you which is meant. いちにち is one day, not the 1st (ついたち). Some numbers have a second reading, such as ななじかん and しちねん."
      }
    ]
  },

  // ───────────────────────── 8. FAMILY ─────────────────────────
  {
    id: "family",
    title: "Family Words",
    jp: "かぞく",
    intro: "Japanese has one set of words for your own family and a politer set for someone else's. Use the plain set when talking about yours to other people.",
    sections: [
      {
        h: "My family and someone else's",
        headers: ["Relation", "My family", "Someone else's"],
        rows: [
          ["Family", "かぞく", "ごかぞく"],
          ["Parents", "りょうしん", "ごりょうしん"],
          ["Father", "ちち", "おとうさん"],
          ["Mother", "はは", "おかあさん"],
          ["Siblings", "きょうだい", "ごきょうだい"],
          ["Older brother", "あに", "おにいさん"],
          ["Older sister", "あね", "おねえさん"],
          ["Younger brother", "おとうと", "おとうとさん"],
          ["Younger sister", "いもうと", "いもうとさん"],
          ["Husband", "おっと", "ごしゅじん"],
          ["Wife", "つま", "おくさん"],
          ["Child", "こども", "おこさん"],
          ["Son", "むすこ", "むすこさん"],
          ["Daughter", "むすめ", "むすめさん"],
          ["Grandfather", "そふ", "おじいさん"],
          ["Grandmother", "そぼ", "おばあさん"],
          ["Uncle", "おじ", "おじさん"],
          ["Aunt", "おば", "おばさん"]
        ],
        tip: "Listen for the long vowel: おじいさん is a grandfather and おじさん is an uncle. おばあさん is a grandmother and おばさん is an aunt."
      },
      {
        h: "Using them in a sentence",
        headers: ["Whose family", "Example", "Meaning"],
        rows: [
          ["Mine", "ちちは ぎんこういんです。", "My father is a bank employee."],
          ["Yours", "おとうさんは おげんきですか。", "How is your father?"],
          ["Mine", "あねは とうきょうに すんで います。", "My older sister lives in Tokyo."],
          ["Yours", "おねえさんは どこに すんで いますか。", "Where does your older sister live?"],
          ["Mine", "つまは せんせいです。", "My wife is a teacher."],
          ["Yours", "おくさんの おしごとは なんですか。", "What does your wife do for work?"]
        ]
      },
      {
        h: "Inside the family",
        note: "When you speak to your own older relatives, use the polite column. Younger relatives are simply called by name.",
        headers: ["Situation", "Example", "Meaning"],
        rows: [
          ["Speaking to your own father", "おとうさん、いって きます。", "Dad, I'm off."],
          ["Speaking to your own mother", "おかあさん、ただいま。", "Mum, I'm home."],
          ["Speaking to your own older brother", "おにいさん、これ、おしえて。", "Show me how to do this, big brother."],
          ["Telling a guest about your mother", "ははは いま でかけて います。", "My mother is out at the moment."]
        ]
      },
      {
        h: "How many in your family",
        note: "Family size uses the people counter. Watch one, two and four.",
        headers: ["People", "Reading", "People", "Reading"],
        rows: [
          ["1", "ひとり", "6", "ろくにん"],
          ["2", "ふたり", "7", "ななにん"],
          ["3", "さんにん", "8", "はちにん"],
          ["4", "よにん", "9", "きゅうにん"],
          ["5", "ごにん", "10", "じゅうにん"]
        ],
        tip: "Ask with なんにん かぞくですか. Answer with よにん かぞくです."
      }
    ]
  },

  // ───────────────────────── 9. PHRASES ─────────────────────────
  {
    id: "phrases",
    title: "Set Phrases",
    jp: "あいさつ",
    intro: "Ready-made phrases for everyday situations. Learn these as whole chunks, without taking them apart.",
    sections: [
      {
        h: "Greetings",
        headers: ["Japanese", "Meaning", "When"],
        rows: [
          ["おはよう ございます。", "Good morning.", "Morning. With friends the first word alone is enough."],
          ["こんにちは。", "Hello.", "Daytime."],
          ["こんばんは。", "Good evening.", "After dark."],
          ["おやすみなさい。", "Good night.", "Going to bed, or parting late at night."],
          ["さようなら。", "Goodbye.", "Parting from someone for a while."],
          ["じゃ、また。", "See you.", "Parting from a friend."],
          ["じゃ、また あした。", "See you tomorrow.", "Parting from a friend or classmate."],
          ["はじめまして。", "Nice to meet you.", "The first thing you say on meeting someone."],
          ["どうぞ よろしく おねがいします。", "Pleased to meet you.", "The end of a self-introduction."],
          ["こちらこそ よろしく。", "The pleasure is mine.", "Replying to the phrase above."],
          ["おげんきですか。", "How are you?", "When you haven't seen someone for some time."],
          ["はい、おかげさまで。", "I'm well, thank you.", "Replying to the phrase above."],
          ["しばらくですね。", "It's been a long time.", "Meeting someone after a long gap."],
          ["いい てんきですね。", "Nice weather, isn't it?", "Small talk with a neighbour."],
          ["おめでとう ございます。", "Congratulations.", "Birthdays, weddings, passing an exam."]
        ],
        tip: "The final は in こんにちは and こんばんは is read wa."
      },
      {
        h: "In class",
        headers: ["Japanese", "Meaning", "Who says it"],
        rows: [
          ["はじめましょう。", "Let's begin.", "Teacher"],
          ["おわりましょう。", "Let's finish.", "Teacher"],
          ["やすみましょう。", "Let's take a break.", "Teacher"],
          ["みて ください。", "Please look.", "Teacher"],
          ["きいて ください。", "Please listen.", "Teacher"],
          ["かいて ください。", "Please write.", "Teacher"],
          ["よんで ください。", "Please read.", "Teacher"],
          ["いって ください。", "Please say it.", "Teacher"],
          ["わかりますか。", "Do you understand?", "Teacher"],
          ["はい、わかります。", "Yes, I understand.", "Student"],
          ["いいえ、わかりません。", "No, I don't understand.", "Student"],
          ["もう いちど おねがいします。", "Once more, please.", "Student"],
          ["ゆっくり おねがいします。", "Slowly, please.", "Student"],
          ["しつもんが あります。", "I have a question.", "Student"],
          ["「ねこ」は えいごで なんですか。", "What is 'neko' in English?", "Student"]
        ]
      },
      {
        h: "Shopping",
        headers: ["Japanese", "Meaning", "Who says it"],
        rows: [
          ["いらっしゃいませ。", "Welcome.", "Staff"],
          ["すみません、これは いくらですか。", "Excuse me, how much is this?", "Customer"],
          ["それを みせて ください。", "Please show me that.", "Customer"],
          ["もう すこし やすいのは ありますか。", "Do you have a slightly cheaper one?", "Customer"],
          ["ほかの いろは ありますか。", "Do you have other colours?", "Customer"],
          ["ちょっと たかいです。", "It's a bit expensive.", "Customer"],
          ["これを ください。", "I'll take this one.", "Customer"],
          ["じゃ、これに します。", "OK, I'll go with this.", "Customer"],
          ["ぜんぶで いくらですか。", "How much altogether?", "Customer"],
          ["カードで おねがいします。", "By card, please.", "Customer"],
          ["はい、おつりです。", "Here's your change.", "Staff"],
          ["ありがとう ございました。", "Thank you very much.", "Staff"]
        ]
      },
      {
        h: "At a restaurant",
        headers: ["Japanese", "Meaning", "Who says it"],
        rows: [
          ["メニューを おねがいします。", "The menu, please.", "Customer"],
          ["ごちゅうもんは？", "May I take your order?", "Staff"],
          ["わたしは カレーに します。", "I'll have the curry.", "Customer"],
          ["ていしょくを ふたつ ください。", "Two set meals, please.", "Customer"],
          ["みずを ください。", "Water, please.", "Customer"],
          ["しょうしょう おまちください。", "One moment, please.", "Staff"],
          ["すみません、おちゃを もう いっぱい ください。", "Excuse me, another tea, please.", "Customer"],
          ["いただきます。", "Thank you for the food.", "Before eating"],
          ["ごちそうさまでした。", "Thank you for the meal.", "After eating"],
          ["おかいけいを おねがいします。", "The bill, please.", "Customer"],
          ["べつべつに おねがいします。", "Separately, please.", "Customer"]
        ]
      },
      {
        h: "On the phone",
        headers: ["Japanese", "Meaning", "When"],
        rows: [
          ["もしもし。", "Hello.", "Starting a call."],
          ["はい、やまだです。", "Yes, this is Yamada.", "Answering with your name."],
          ["たなかさんを おねがいします。", "May I speak to Ms. Tanaka?", "Asking for someone."],
          ["たなかさんは いらっしゃいますか。", "Is Ms. Tanaka there?", "Asking politely if someone is in."],
          ["しょうしょう おまちください。", "One moment, please.", "Before fetching someone."],
          ["いま でかけて います。", "They're out at the moment.", "When the person isn't there."],
          ["また あとで でんわします。", "I'll call back later.", "Ending the call for now."],
          ["しつれいします。", "Goodbye.", "Ending a polite call."]
        ],
        tip: "もしもし is only for the phone. It isn't a normal 'hello'."
      },
      {
        h: "At someone's home",
        headers: ["Japanese", "Meaning", "Who says it"],
        rows: [
          ["ごめんください。", "Is anybody home?", "Guest at the door"],
          ["いらっしゃい。", "Welcome.", "Host"],
          ["どうぞ おあがりください。", "Please come in.", "Host"],
          ["しつれいします。", "Excuse me.", "Guest going in"],
          ["これ、ほんの きもちです。", "It's just a small gift.", "Guest handing over a present"],
          ["どうぞ。", "Here you are.", "Host offering something"],
          ["コーヒーは いかがですか。", "Would you like a coffee?", "Host"],
          ["いただきます。", "Thank you, I'll have some.", "Guest accepting"],
          ["いいえ、けっこうです。", "No, thank you.", "Guest declining"],
          ["そろそろ しつれいします。", "It's about time I left.", "Guest getting ready to go"],
          ["また いらっしゃって ください。", "Please come again.", "Host"]
        ]
      },
      {
        h: "At the doctor",
        headers: ["Japanese", "Meaning", "Who says it"],
        rows: [
          ["どう しましたか。", "What's the matter?", "Doctor"],
          ["あたまが いたいです。", "My head hurts.", "Patient"],
          ["のどが いたいです。", "My throat hurts.", "Patient"],
          ["おなかが いたいです。", "My stomach hurts.", "Patient"],
          ["ねつが あります。", "I have a fever.", "Patient"],
          ["きのうから ねつが あります。", "I've had a fever since yesterday.", "Patient"],
          ["けんこうほけんしょうを みせて ください。", "Please show me your health insurance card.", "Reception"],
          ["かぜです。", "It's a cold.", "Doctor"],
          ["くすりを のんで ください。", "Please take this medicine.", "Doctor"],
          ["おふろに はいらないで ください。", "Please don't take a bath.", "Doctor"],
          ["おだいじに。", "Take care of yourself.", "Doctor, or anyone to a sick person"]
        ],
        tip: "You 'drink' medicine in Japanese: くすりを のみます. Body part + が いたいです is how you say something hurts."
      },
      {
        h: "Leaving and coming home",
        headers: ["Japanese", "Meaning", "When"],
        rows: [
          ["いって きます。", "I'm off.", "Leaving home."],
          ["いって らっしゃい。", "See you later.", "To someone leaving home."],
          ["ただいま。", "I'm home.", "Getting home."],
          ["おかえりなさい。", "Welcome home.", "To someone getting home."],
          ["おでかけですか。", "Are you going out?", "To a neighbour you pass."],
          ["ちょっと そこまで。", "Just down the road.", "Replying to the phrase above."],
          ["きを つけて ください。", "Take care.", "To someone setting off."],
          ["しつれいします。", "Excuse me.", "Leaving a room or office."]
        ]
      },
      {
        h: "Apologising",
        headers: ["Japanese", "Meaning", "When"],
        rows: [
          ["すみません。", "Excuse me. I'm sorry.", "Small mistakes and getting attention."],
          ["ごめんなさい。", "I'm sorry.", "With friends and family, or a child to an adult."],
          ["しつれいしました。", "I beg your pardon.", "After a small slip with someone you should be polite to."],
          ["おそく なって、すみません。", "Sorry I'm late.", "Arriving late."],
          ["いいえ、だいじょうぶです。", "No, it's all right.", "Answering an apology."]
        ]
      },
      {
        h: "Thanking",
        headers: ["Japanese", "Meaning", "When"],
        rows: [
          ["どうも。", "Thanks.", "Short and light."],
          ["ありがとう。", "Thank you.", "With friends and family."],
          ["ありがとう ございます。", "Thank you.", "Polite, for something happening now."],
          ["ありがとう ございました。", "Thank you.", "Polite, for something already done."],
          ["どうも ありがとう ございました。", "Thank you very much.", "Strong and polite."],
          ["いいえ。", "Not at all.", "A light reply."],
          ["どう いたしまして。", "You're welcome.", "A fuller reply."],
          ["こちらこそ。", "Thank you, too.", "When you feel just as grateful."]
        ]
      }
    ]
  },

  // ───────────────────────── 10. OPPOSITES ─────────────────────────
  {
    id: "opposites",
    title: "Opposites",
    jp: "はんたいの ことば",
    intro: "Words are easier to remember in pairs. Pairs also help with paraphrase questions, where たかくないです can mean the same as やすいです.",
    sections: [
      {
        h: "い-adjectives",
        headers: ["Word", "Meaning", "Opposite", "Meaning"],
        rows: [
          ["おおきい", "big", "ちいさい", "small"],
          ["ながい", "long", "みじかい", "short"],
          ["たかい", "expensive", "やすい", "cheap"],
          ["たかい", "high, tall", "ひくい", "low"],
          ["あたらしい", "new", "ふるい", "old (things)"],
          ["いい", "good", "わるい", "bad"],
          ["あつい", "hot (weather)", "さむい", "cold (weather)"],
          ["あつい", "hot (to the touch)", "つめたい", "cold (to the touch)"],
          ["あたたかい", "warm", "すずしい", "cool"],
          ["あつい", "thick", "うすい", "thin"],
          ["ふとい", "fat, wide", "ほそい", "thin, slender"],
          ["ちかい", "near", "とおい", "far"],
          ["はやい", "fast, early", "おそい", "slow, late"],
          ["おおい", "many", "すくない", "few"],
          ["おもい", "heavy", "かるい", "light (weight)"],
          ["あかるい", "bright", "くらい", "dark"],
          ["ひろい", "wide, roomy", "せまい", "narrow, cramped"],
          ["つよい", "strong", "よわい", "weak"],
          ["おいしい", "delicious", "まずい", "bad-tasting"],
          ["あまい", "sweet", "からい", "spicy"],
          ["おもしろい", "interesting", "つまらない", "boring"],
          ["むずかしい", "difficult", "やさしい", "easy"],
          ["しろい", "white", "くろい", "black"]
        ],
        tip: "あつい has three meanings by sound alone (hot weather, hot to the touch, thick), so its opposite depends on which one you mean."
      },
      {
        h: "な-adjectives",
        headers: ["Word", "Meaning", "Opposite", "Meaning"],
        rows: [
          ["すき", "like", "きらい", "dislike"],
          ["じょうず", "good at", "へた", "bad at"],
          ["べんり", "convenient", "ふべん", "inconvenient"],
          ["にぎやか", "lively", "しずか", "quiet"],
          ["かんたん", "simple", "むずかしい", "difficult"],
          ["ひま", "free", "いそがしい", "busy"],
          ["きれい", "clean", "きたない", "dirty"],
          ["げんき", "well", "びょうき", "ill"]
        ],
        tip: "Some opposites cross types. いそがしい and むずかしい and きたない are い-adjectives, but ひま, かんたん and きれい are な-adjectives. びょうき is a noun."
      },
      {
        h: "Verbs",
        headers: ["Word", "Meaning", "Opposite", "Meaning"],
        rows: [
          ["いきます", "go", "きます", "come"],
          ["でかけます", "go out", "かえります", "go home"],
          ["おきます", "get up", "ねます", "go to bed"],
          ["あけます", "open", "しめます", "close"],
          ["あきます", "(something) opens", "しまります", "(something) closes"],
          ["つけます", "turn on", "けします", "turn off"],
          ["はじめます", "start", "おわります", "finish"],
          ["のります", "get on", "おります", "get off"],
          ["はいります", "enter", "でます", "leave"],
          ["たちます", "stand up", "すわります", "sit down"],
          ["かいます", "buy", "うります", "sell"],
          ["あげます", "give", "もらいます", "receive"],
          ["かします", "lend", "かります", "borrow"],
          ["おしえます", "teach", "ならいます", "learn"],
          ["おぼえます", "memorise", "わすれます", "forget"],
          ["かちます", "win", "まけます", "lose"],
          ["おします", "push", "ひきます", "pull"],
          ["はたらきます", "work", "やすみます", "rest"],
          ["ききます", "ask", "こたえます", "answer"],
          ["きます", "put on (shirt)", "ぬぎます", "take off (clothes)"],
          ["うまれます", "be born", "しにます", "die"]
        ],
        tip: "おきます also means 'put', which has no opposite here. かします and かります are easy to mix up: かします is giving and かります is taking."
      },
      {
        h: "Nouns and position words",
        headers: ["Word", "Meaning", "Opposite", "Meaning"],
        rows: [
          ["うえ", "above", "した", "below"],
          ["まえ", "in front", "うしろ", "behind"],
          ["みぎ", "right", "ひだり", "left"],
          ["なか", "inside", "そと", "outside"],
          ["きた", "north", "みなみ", "south"],
          ["ひがし", "east", "にし", "west"],
          ["いりぐち", "entrance", "でぐち", "exit"],
          ["はじめ", "the beginning", "おわり", "the end"],
          ["あさ", "morning", "ばん", "evening"],
          ["ごぜん", "a.m.", "ごご", "p.m."],
          ["なつ", "summer", "ふゆ", "winter"],
          ["おとこ", "man", "おんな", "woman"],
          ["おとこのこ", "boy", "おんなのこ", "girl"],
          ["おとな", "adult", "こども", "child"],
          ["ちち", "my father", "はは", "my mother"],
          ["あに", "my older brother", "おとうと", "my younger brother"],
          ["あね", "my older sister", "いもうと", "my younger sister"],
          ["せんせい", "teacher", "がくせい", "student"],
          ["しつもん", "question", "こたえ", "answer"],
          ["ほんとう", "truth", "うそ", "lie"],
          ["きのう", "yesterday", "あした", "tomorrow"],
          ["きょねん", "last year", "らいねん", "next year"]
        ]
      },
      {
        h: "Handy adverbs and answers",
        headers: ["Word", "Meaning", "Opposite", "Meaning"],
        rows: [
          ["はい", "yes", "いいえ", "no"],
          ["たくさん", "a lot", "すこし", "a little"],
          ["もう", "already", "まだ", "not yet"],
          ["いつも", "always", "ぜんぜん", "never (with a negative verb)"]
        ]
      }
    ]
  },

  // ───────────────────────── 11. KANA TIPS ─────────────────────────
  {
    id: "kana-tips",
    title: "Kana Tips",
    jp: "かな",
    intro: "Small details of spelling and sound change the meaning of a word. This page covers the ones that trip people up.",
    sections: [
      {
        h: "Long vowels in hiragana",
        note: "A long vowel lasts twice as long as a short one and takes up a whole extra letter.",
        headers: ["Sound", "Added letter", "Example", "Meaning"],
        rows: [
          ["Long a", "あ", "おかあさん", "mother"],
          ["Long i", "い", "おにいさん", "older brother"],
          ["Long u", "う", "くうこう", "airport"],
          ["Long e (a few words)", "え", "おねえさん", "older sister"],
          ["Long e (most words)", "い", "せんせい", "teacher"],
          ["Long o (most words)", "う", "おとうさん", "father"],
          ["Long o (a few words)", "お", "おおきい", "big"]
        ],
        tip: "Most long o sounds are spelled with う. Memorise the N5 ones spelled with お: おおきい, おおい, とおい, とお, おおぜい."
      },
      {
        h: "Long or short changes the word",
        headers: ["Short", "Meaning", "Long", "Meaning"],
        rows: [
          ["おばさん", "aunt", "おばあさん", "grandmother"],
          ["おじさん", "uncle", "おじいさん", "grandfather"],
          ["ここ", "here", "こうこう", "high school"],
          ["え", "picture", "ええ", "yes"],
          ["きて", "come", "きいて", "listen"],
          ["ビル", "building", "ビール", "beer"]
        ]
      },
      {
        h: "Small っ: a tiny pause",
        note: "Small っ is a silent beat. Stop for one beat, then hit the next consonant hard. In romaji it doubles that consonant.",
        headers: ["Without", "Meaning", "With", "Meaning"],
        rows: [
          ["おと", "sound", "おっと", "husband"],
          ["きて", "come", "きって", "stamp"],
          ["いて", "be", "いって", "go"],
          ["みつ", "honey", "みっつ", "three things"]
        ],
        tip: "When typing, double the next letter: kitte, zasshi, gakkou. Before ch, type tch or cch: matcha."
      },
      {
        h: "Small ゃ ゅ ょ: one beat, not two",
        note: "A small ゃ, ゅ or ょ joins the letter before it into one sound. A full-size one is its own beat.",
        headers: ["Full size", "Meaning", "Small", "Meaning"],
        rows: [
          ["びよういん", "beauty salon", "びょういん", "hospital"],
          ["じゆう", "freedom", "じゅう", "ten"],
          ["りよう", "use", "りょう", "dormitory"]
        ],
        tip: "びょういん has four beats: byo, u, i, n. Write the small one clearly smaller, or you've gone to the wrong building."
      },
      {
        h: "ん changes with the next sound",
        note: "ん is one full beat, and its sound shifts to match what comes next. You don't need to force this, but it explains what you hear.",
        headers: ["Next sound", "Sounds like", "Example", "Meaning"],
        rows: [
          ["m, b, p", "m", "しんぶん", "newspaper"],
          ["m, b, p", "m", "えんぴつ", "pencil"],
          ["t, d, n, r, s, z", "n", "ほんとう", "truth"],
          ["t, d, n, r, s, z", "n", "おんな", "woman"],
          ["k, g", "ng", "ぎんこう", "bank"],
          ["k, g", "ng", "にほんご", "Japanese language"],
          ["A vowel, y or w", "a nasal hum", "でんわ", "telephone"],
          ["End of a word", "a soft nasal n", "ほん", "book"]
        ],
        tip: "ん before a vowel or y stays separate: きんえん is ki-n-e-n and ほんや is ho-n-ya. When typing, use n' there: kin'en, hon'ya."
      },
      {
        h: "は, へ and を as particles",
        note: "Three letters read differently when they are particles.",
        headers: ["Letter", "As a particle", "Inside a word", "Example", "Meaning"],
        rows: [
          ["は", "wa", "ha", "ははは はなが すきです。", "My mother likes flowers."],
          ["へ", "e", "he", "へやへ いきます。", "I go to the room."],
          ["を", "o", "almost never used", "パンを たべます。", "I eat bread."]
        ],
        tip: "こんにちは and こんばんは keep the particle spelling, so they end in the sound wa. In the first example the word はは is 'mother' and the third は is the particle."
      },
      {
        h: "Romaji for し, ち, つ and friends",
        note: "Some kana don't follow the row's letter in the romaji this game shows. The game also accepts the second spelling when you type.",
        headers: ["Kana", "Romaji", "Also typed as", "Example", "Meaning"],
        rows: [
          ["し", "shi", "si", "しお", "salt"],
          ["ち", "chi", "ti", "ちず", "map"],
          ["つ", "tsu", "tu", "つくえ", "desk"],
          ["ふ", "fu", "hu", "ふゆ", "winter"],
          ["じ", "ji", "zi", "じしょ", "dictionary"],
          ["しゃ", "sha", "sya", "いしゃ", "doctor"],
          ["ちゃ", "cha", "tya", "おちゃ", "tea"],
          ["じゃ", "ja", "zya", "じゃ", "well then"]
        ],
        tip: "つ is one beat with the t and s said together. Keep it apart from す: つき is the moon."
      },
      {
        h: "ー in katakana",
        note: "Katakana marks a long vowel with a bar, not an extra vowel letter.",
        headers: ["Word", "Romaji", "Meaning"],
        rows: [
          ["コーヒー", "kōhī", "coffee"],
          ["ビール", "bīru", "beer"],
          ["ノート", "nōto", "notebook"],
          ["デパート", "depāto", "department store"],
          ["スーパー", "sūpā", "supermarket"],
          ["エレベーター", "erebētā", "elevator"],
          ["ケーキ", "kēki", "cake"]
        ],
        tip: "Small ッ and small ャ ュ ョ work just as they do in hiragana: ベッド, チケット, シャツ, ジャズ."
      },
      {
        h: "Look-alikes: hiragana",
        headers: ["Kana", "Reading", "How to tell", "Example", "Meaning"],
        rows: [
          ["ぬ", "nu", "Ends in a small loop at the bottom right", "いぬ", "dog"],
          ["め", "me", "Ends in an open tail with no loop", "あめ", "rain"],
          ["ね", "ne", "Ends in a small loop at the bottom right", "ねこ", "cat"],
          ["れ", "re", "Ends with a kick up and outwards", "これ", "this"],
          ["わ", "wa", "Ends curving back in, with no loop", "わたし", "I"],
          ["る", "ru", "Ends in a small loop", "はる", "spring"],
          ["ろ", "ro", "Ends open, with no loop", "しろ", "white"],
          ["は", "ha", "The right side has one crossbar, then a loop", "はな", "flower"],
          ["ほ", "ho", "The right side has two crossbars, then a loop", "ほん", "book"],
          ["あ", "a", "A cross on top of a looped body", "あさ", "morning"],
          ["お", "o", "A separate dot at the top right", "おちゃ", "tea"]
        ],
        tip: "For ぬ, ね and る, the loop at the end is the giveaway."
      },
      {
        h: "Look-alikes: katakana",
        headers: ["Kana", "Reading", "How to tell", "Example", "Meaning"],
        rows: [
          ["シ", "shi", "Short strokes stacked down the left and nearly flat; the long stroke sweeps up from the bottom", "シャツ", "shirt"],
          ["ツ", "tsu", "Short strokes lined up along the top and nearly upright; the long stroke sweeps down from the top", "ツアー", "tour"],
          ["ソ", "so", "A short stroke nearly upright; the long stroke sweeps down from the top", "ソフト", "software"],
          ["ン", "n", "A short stroke nearly flat; the long stroke sweeps up from the bottom", "パン", "bread"],
          ["ク", "ku", "Two strokes, and the top one bends down into a corner", "クラス", "class"],
          ["ケ", "ke", "Three strokes, and the flat top bar runs straight across and sticks out", "ケーキ", "cake"],
          ["ア", "a", "The second stroke drops down to the left from the middle", "アメリカ", "America"],
          ["マ", "ma", "The second stroke is a short flick down to the right", "マンガ", "manga"]
        ],
        tip: "The long stroke of シ and ン sweeps upward, like the end of hiragana し. The long stroke of ツ and ソ sweeps downward, like hiragana つ."
      }
    ]
  },

  // ───────────────────────── 12. EXAM ─────────────────────────
  {
    id: "exam",
    title: "JLPT N5 Exam",
    jp: "しけん",
    intro: "How the N5 test is set up and scored, what each question type asks you to do, and how to prepare. The facts here come from jlpt.jp, where you should check the current rules before you sign up.",
    sections: [
      {
        h: "What N5 tests",
        note: "N5 checks basic Japanese. You should be able to read common phrases and sentences in kana and simple kanji, and pick out key details from short, slow conversations about everyday life and the classroom."
      },
      {
        h: "The three test sections",
        note: "The test is 90 minutes of sitting time in three parts. Listening can run slightly differently depending on the length of the recording.",
        headers: ["Section", "Official name (kanji)", "Time", "What it covers"],
        rows: [
          ["Language Knowledge: Vocabulary", "言語知識（文字・語彙）", "20 minutes", "Reading kanji, spelling, and word meaning."],
          ["Language Knowledge: Grammar, and Reading", "言語知識（文法）・読解", "40 minutes", "Grammar in sentences and short texts, then reading passages."],
          ["Listening", "聴解", "30 minutes", "Recorded conversations and short exchanges."]
        ],
        tip: "All answers are multiple choice, on a computer-marked sheet. Most questions have four choices, and some Listening questions have three."
      },
      {
        h: "Scoring and pass marks",
        note: "Three sections are sat, but only two scores are reported: vocabulary, grammar and reading are combined into one.",
        headers: ["Scoring section", "Official name (kanji)", "Score range", "Minimum to pass"],
        rows: [
          ["Language Knowledge and Reading", "言語知識（文字・語彙・文法）・読解", "0 to 120", "38"],
          ["Listening", "聴解", "0 to 60", "19"],
          ["Total", "総合得点", "0 to 180", "80"]
        ],
        tip: "You must clear all three lines. A total of 100 is still a fail if Listening is 18."
      },
      {
        h: "How the rules work",
        headers: ["Rule", "What it means for you"],
        rows: [
          ["Scores are scaled", "The score comes from a statistical method, not from adding points per question, so you can't turn a number of right answers into an exact score."],
          ["You must sit every section", "Missing any section means you fail, and no scores are given for the sections you did take."],
          ["No partial retakes", "Each attempt is judged as a whole. You can't keep a good section from an earlier sitting."],
          ["Two sittings a year", "The test is held in July and December. Some cities overseas offer only one of them."],
          ["No official word list", "The organisers don't publish lists of vocabulary, kanji or grammar. Every N5 list, including the one in this game, is a best estimate."]
        ]
      },
      {
        h: "Vocabulary section: question types",
        headers: ["Part", "Official name (kanji)", "What you do"],
        rows: [
          ["1. Kanji reading", "漢字読み", "A word in a sentence is in kanji. Pick how it's read in hiragana."],
          ["2. Orthography", "表記", "A word is in hiragana. Pick how it's written in kanji or katakana."],
          ["3. Contextually-defined expressions", "文脈規定", "A sentence has a gap. Pick the word that fits the meaning."],
          ["4. Paraphrases", "言い換え類義", "Pick the sentence that means about the same as the one given."]
        ],
        tip: "Wrong choices in part 1 often differ by one small detail, such as a dakuten, a small っ or a long vowel."
      },
      {
        h: "Grammar section: question types",
        headers: ["Part", "Official name (kanji)", "What you do"],
        rows: [
          ["1. Sentential grammar 1", "文の文法1（文法形式の判断）", "A sentence has a gap. Pick the particle or form that fits."],
          ["2. Sentential grammar 2", "文の文法2（文の組み立て）", "Four pieces are jumbled. Put them in order and mark the one that lands on the star."],
          ["3. Text grammar", "文章の文法", "A short text has gaps. Pick what fits the flow of the text."]
        ],
        tip: "For the star question, build the full sentence first, then read off the piece on the star."
      },
      {
        h: "Reading section: question types",
        headers: ["Part", "Official name (kanji)", "What you do"],
        rows: [
          ["4. Comprehension (short passages)", "内容理解（短文）", "Read a text of about 80 characters on study, daily life or work, then answer."],
          ["5. Comprehension (mid-size passages)", "内容理解（中文）", "Read a text of about 250 characters on everyday topics, then answer."],
          ["6. Information retrieval", "情報検索", "Find what you need in something like a notice or timetable, about 250 characters long."]
        ],
        tip: "The numbering carries on from the grammar part, so reading starts at part 4."
      },
      {
        h: "Listening section: question types",
        headers: ["Part", "Official name (kanji)", "What you do"],
        rows: [
          ["1. Task-based comprehension", "課題理解", "Hear the question, then a conversation. Pick what the person should do next."],
          ["2. Comprehension of key points", "ポイント理解", "Hear the question first, then listen for that one detail."],
          ["3. Verbal expressions", "発話表現", "Look at a picture with an arrow on one person. Pick what that person should say."],
          ["4. Quick response", "即時応答", "Hear a short remark, then pick the best reply. Nothing is printed."]
        ],
        tip: "In parts 1 and 2 the question comes before the conversation, so you know what to listen for. Part 4 has no pictures, so you have to catch the words."
      },
      {
        h: "What each question looks like",
        note: "Made-up samples in the same style. Kanji is here on purpose, because the test uses it.",
        headers: ["Part", "Sample (with kanji)", "Answer (with kanji)", "Why"],
        rows: [
          ["Kanji reading", "水を のみます。", "みず", "The kanji for water."],
          ["Orthography", "やまに のぼります。", "山", "The kanji for mountain."],
          ["Contextual word", "デパートで シャツを（　　）。", "かいました", "Only this verb fits a shirt at a department store."],
          ["Paraphrase", "おととい がっこうへ いきました。", "ふつかまえに がっこうへ いきました。", "Both mean two days ago."],
          ["Sentential grammar 1", "まいあさ パン（　　） たべます。", "を", "Bread is the object."],
          ["Sentential grammar 2", "これは ＿ ＿ ★ ＿ です。（ともだち・ほん・に・もらった）", "もらった", "In order, the sentence means 'This is a book I got from a friend.'"],
          ["Text grammar", "にほんごを べんきょうして います。（　　）、まいにち かんじを かきます。", "そして", "The second sentence adds another fact."]
        ]
      },
      {
        h: "How the paper is written",
        note: "Knowing this in advance saves time on the day.",
        headers: ["Feature", "What to expect"],
        rows: [
          ["Spaces", "Sentences have spaces between phrases, like the Japanese in this game."],
          ["Vocabulary section", "Kanji has no reading printed above it, because reading it is the point."],
          ["Grammar and Reading section", "Kanji has small kana printed above it."],
          ["Instructions", "They are in Japanese. Learn the key words below so you don't have to work them out."]
        ]
      },
      {
        h: "Instruction words to know",
        headers: ["Japanese", "Meaning"],
        rows: [
          ["もんだい", "question, problem"],
          ["れい", "example"],
          ["ことば", "word"],
          ["ぶん", "sentence"],
          ["どう よみますか", "how do you read it?"],
          ["どう かきますか", "how do you write it?"],
          ["なにを いれますか", "what do you put in?"],
          ["いちばん いい もの", "the best one"],
          ["ひとつ えらんで ください", "please choose one"],
          ["ただしい こたえ", "the correct answer"],
          ["だいたい おなじ いみ", "about the same meaning"]
        ]
      },
      {
        h: "Study tips",
        headers: ["Area", "What to do"],
        rows: [
          ["Listening", "Practise it every day. It has its own pass mark, and a strong reading score can't rescue it."],
          ["Listening on the day", "Each recording plays once, so if you miss one, mark your best guess and move on to the next."],
          ["Numbers and time", "Drill dates, times and prices out loud. Listening questions often turn on them."],
          ["Vocabulary", "Learn the kanji reading and the kana spelling together, down to the long vowels and small letters."],
          ["Particles", "Learn them in whole sentences. Grammar part 1 often asks you to choose one."],
          ["Grammar and Reading", "This section's 40 minutes must cover both. Don't let grammar eat your reading time."],
          ["Information retrieval", "Read the question first, then search the notice for just that detail."],
          ["Practice tests", "Do at least one full run in real time. The N5 mock exam in this game is a good start."],
          ["Answer sheet", "Answer every question. A blank can't earn anything."]
        ]
      }
    ]
  }
];
