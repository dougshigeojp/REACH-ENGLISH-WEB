/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */

window.initExercise({
    id: "em1-1-1",
    grade: "EM 1st grade",
    bimester: "1",
    chapter: "1",
    title: "English, Technology and Innovation",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES ---
        1: [
            { words: ["decide", "whatever", "to", "do", "I", "English", "need", "will", "I"], correct: "Whatever I decide to do I will need English" },
            { words: ["influence", "its", "owing", "to", "connects", "cultures", "English"], correct: "English connects cultures owing to its influence" },
            { words: ["himself", "Albert", "code", "taught", "to", "tutorials", "using", "English"], correct: "Albert taught himself to code using English tutorials" },
            { words: ["go", "wherever", "you", "speakers", "find", "will", "English", "you"], correct: "Wherever you go you will find English speakers" },
            { words: ["skills", "consequently", "improve", "your", "to", "need", "you", "it", "study"], correct: "Consequently you need to study it to improve your skills" },
            { words: ["creates", "uses", "technology", "whoever", "English"], correct: "Whoever creates technology uses English" },
            { words: ["language", "English", "communication", "global", "is", "of", "the"], correct: "English is the language of global communication" },
            { words: ["yourself", "do", "you", "believe", "in"], correct: "Do you believe in yourself" },
            { words: ["long", "is", "how", "movie", "the"], correct: "How long is the movie" },
            { words: ["raining", "we", "was", "stayed", "since", "it", "indoors"], correct: "Since it was raining we stayed indoors" },
            { words: ["opinion", "in", "English", "my", "essential", "is"], correct: "In my opinion English is essential" },
            { words: ["however", "want", "dress", "can", "you", "you"], correct: "You can dress however you want" },
            { words: ["result", "worked", "as", "hard", "a", "he", "succeeded"], correct: "He worked hard as a result he succeeded" },
            { words: ["far", "airport", "how", "the", "is"], correct: "How far is the airport" },
            { words: ["ourselves", "the", "prepared", "we", "project"], correct: "We prepared the project ourselves" },
            { words: ["whenever", "can", "call", "you", "me"], correct: "Call me whenever you can" },
            { words: ["tall", "building", "how", "is", "the"], correct: "How tall is the building" },
            { words: ["studied", "hard", "he", "therefore", "passed", "exam", "the"], correct: "He studied hard therefore he passed the exam" },
            { words: ["whichever", "choose", "color", "prefer", "you"], correct: "Choose whichever color you prefer" },
            { words: ["expensive", "is", "how", "car", "that"], correct: "How expensive is that car" },
            { words: ["herself", "Celine", "mirror", "the", "in", "looked"], correct: "Celine looked at herself in the mirror" },
            { words: ["traffic", "to", "owing", "I", "late", "was"], correct: "Owing to the traffic I was late" },
            { words: ["many", "are", "how", "there", "people"], correct: "How many people are there" },
            { words: ["themselves", "students", "the", "introduced"], correct: "The students introduced themselves" },
            { words: ["much", "time", "have", "how", "we", "do"], correct: "How much time do we have" },
            { words: ["rain", "due", "was", "the", "cancelled", "to", "match"], correct: "The match was cancelled due to rain" },
            { words: ["often", "you", "do", "how", "practice"], correct: "How often do you practice" },
            { words: ["myself", "I", "hurt", "cooking", "while"], correct: "I hurt myself while cooking" },
            { words: ["fast", "run", "can", "how", "you"], correct: "How fast can you run" },
            { words: ["result", "practiced", "daily", "she", "as", "a", "won", "she"], correct: "She practiced daily as a result she won" },
            { words: ["problem", "solve", "however", "you", "the", "can"], correct: "Solve the problem however you can" },
            { words: ["important", "how", "English", "is"], correct: "How important is English" },
            { words: ["itself", "oven", "the", "turns", "off"], correct: "The oven turns itself off" },
            { words: ["sick", "was", "he", "consequently", "absent", "was", "he"], correct: "He was sick consequently he was absent" },
            { words: ["useful", "tool", "how", "this", "is"], correct: "How useful is this tool" },
            { words: ["yourself", "enjoy", "did", "you"], correct: "Did you enjoy yourself" },
            { words: ["study", "therefore", "useful", "English", "is", "we", "it"], correct: "English is useful therefore we study it" },
            { words: ["whoever", "smart", "did", "this", "is"], correct: "Whoever did this is smart" },
            { words: ["large", "how", "pitch", "the", "is"], correct: "How large is the pitch" },
            { words: ["yourselves", "help", "food", "to", "the"], correct: "Help yourselves to the food" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES ---
        2: [
            { lines: ["Whatever I decide to do, I will need it.", "That makes sense. English is a global language.", "Albert, how important is English for your future?", "In my opinion, it is absolutely essential."], order: [2, 3, 0, 1] },
            { lines: ["Whoever creates technology uses English.", "Truly. English is the language of communication worldwide.", "I taught myself to code using English tutorials.", "Wherever you go, you find someone who speaks it."], order: [1, 3, 2, 0] },
            { lines: ["Therefore, let’s practice our speech today.", "You both have a point.", "If you want to improve, you need to invest in learning.", "English connects different cultures owing to its influence."], order: [3, 2, 1, 0] },
            { lines: ["I hurt myself while I was practicing.", "How did you get that bandage on your knee?", "As a result, I can't play on the pitch today.", "That is too bad. Take care of yourself."], order: [1, 0, 2, 3] },
            { lines: ["How far is the library from here?", "It’s quite far, but you can go whenever you want.", "Does the library have books about careers?", "Yes, whoever goes there finds great resources."], order: [0, 1, 2, 3] },
            { lines: ["English is very effective for business.", "Consequently, many companies require it.", "Therefore, I am taking an online course.", "That is a very smart strategy."], order: [0, 1, 2, 3] },
            { lines: ["How long is the English lecture?", "It’s two hours long. You can leave whenever you need.", "I will stay. I want to learn about pronouns by myself.", "Good. Whoever studies hard succeeds."], order: [0, 1, 2, 3] },
            { lines: ["Due to the storm, the conference was cancelled.", "Oh no! I was looking forward to the topic.", "Thus, we have to stay home today.", "We can study by ourselves instead."], order: [0, 1, 2, 3] },
            { lines: ["How much time do you spend reading articles?", "I rarely read them. I prefer watching YouTubers.", "But reading is more efficient for vocabulary.", "In my opinion, both methods work well."], order: [0, 1, 2, 3] },
            { lines: ["Whichever path you choose, English will help.", "How useful is English for a scientist?", "It is the language of most research papers.", "That makes sense. I need to improve mine."], order: [1, 2, 3, 0] },
            { lines: ["She introduced herself to the whole company.", "How confident was the new manager?", "Very! She gave a great speech without notes.", "She is definitely a motivation for us."], order: [1, 2, 0, 3] },
            { lines: ["I prefer coffee, but take whichever you like.", "Do you want tea or coffee?", "Since you are offering, I’ll have a coffee.", "Here it is. Help yourself!"], order: [1, 0, 2, 3] },
            { lines: ["How expensive is that English course?", "It’s quite expensive, but it’s very effective.", "Therefore, it is a good investment.", "Yes, I agree with your opinion."], order: [0, 1, 2, 3] },
            { lines: ["Can you explain the rule for reflexive pronouns?", "Sure. We use them when the subject and object are the same.", "How important is it to use them correctly?", "In conclusion, it makes your speech more precise."], order: [0, 1, 2, 3] },
            { lines: ["Look at that building! How tall is it?", "It’s the tallest in the city. It’s a big company.", "Wherever you look, you see technology.", "True. Innovation is everywhere today."], order: [0, 1, 2, 3] },
            { lines: ["I find it helpful to record my voice.", "That sounds interesting! How often do you do it?", "I do it whenever I learn a new word.", "Consequently, your pronunciation is perfect."], order: [0, 1, 2, 3] },
            { lines: ["Do you like working by yourself?", "Sometimes, but I often prefer to discuss ideas.", "Why is that better for you?", "Because of the different opinions I can hear."], order: [0, 1, 2, 3] },
            { lines: ["How fast can that robot move?", "It moves very quickly. Whoever designed it is a genius.", "I wish I knew more about robotics.", "You can learn it however you want online."], order: [0, 1, 2, 3] },
            { lines: ["Did you enjoy yourself at the party?", "Yes, but I was tired owing to the long trip.", "Therefore, you should go to bed early.", "That makes sense. Goodnight!"], order: [0, 1, 2, 3] },
            { lines: ["Whatever you do, don't forget your homework.", "I'm sorry. I forgot it because of the storm.", "That is no pretext. You must be more organized.", "I agree. I will improve my discipline."], order: [0, 1, 2, 3] },
            { lines: ["How important is communication in your career?", "It is vital. Most business is done in English.", "Consequently, the popularity of the language is growing.", "Thus, we must continue to practice."], order: [0, 1, 2, 3] },
            { lines: ["Which sandwich do you want?", "Whichever one has more cheese!", "I’ll take the burger, therefore you have the sandwich.", "That works for me. Thanks!"], order: [0, 1, 2, 3] },
            { lines: ["Look! The bird is feeding itself.", "How beautiful nature is!", "Wherever there are trees, there is life.", "We should take care of our world."], order: [0, 1, 2, 3] },
            { lines: ["How often do you study grammar?", "Every day. In my opinion, it is the foundation.", "I rarely study it, so I fail some tests.", "You need a better study method then."], order: [0, 1, 2, 3] },
            { lines: ["Is the exam difficult?", "No, it’s not rocket science. Just review the topics.", "I will. I’ll study by myself tonight.", "Good. Whoever prepares well gets a high grade."], order: [0, 1, 2, 3] },
            { lines: ["How far is your house from the school?", "It’s near the soccer pitch.", "So you can walk whenever you want.", "Exactly. It's a great place to live."], order: [0, 1, 2, 3] },
            { lines: ["I heard a strange noise in the computer.", "Maybe the software is updating itself.", "That sounds plausible. Let's wait.", "In conclusion, technology is unpredictable."], order: [0, 1, 2, 3] },
            { lines: ["Why are you angry?", "Because of the prejudice I saw today.", "Sarah, we must fight against it together.", "I agree. Respect is essential."], order: [0, 1, 2, 3] },
            { lines: ["How long did you study for the essay?", "I studied all week.", "As a result, your writing is excellent.", "Thank you. I tried to express my ideas clearly."], order: [0, 1, 2, 3] },
            { lines: ["Do whatever you think is right.", "I'm considering two career paths.", "Which one do you prefer?", "The one that allows me to travel."], order: [1, 2, 0, 3] },
            { lines: ["Whoever finishes first wins a prize.", "How many exercises do we have to do?", "Twenty. Start right now!", "I will do them by myself."], order: [1, 2, 0, 3] },
            { lines: ["The weather is terrible.", "Yes, it’s a strong storm.", "Consequently, we must stay inside.", "Tell me more about your plans for today then."], order: [0, 1, 2, 3] },
            { lines: ["How important is English in technology?", "Very. Coding relies heavily on it.", "Therefore, whoever knows English has an advantage.", "That makes sense to me."], order: [0, 1, 2, 3] },
            { lines: ["I saw myself in the video.", "How did you feel?", "A bit embarrassed, actually.", "Don't worry. You gave a great speech."], order: [0, 1, 2, 3] },
            { lines: ["Whichever book you pick, read it carefully.", "I am looking for a book about influence.", "There is a great article about it here.", "Thanks. I find it helpful to read every day."], order: [1, 2, 0, 3] },
            { lines: ["How expensive is the new smartphone?", "It’s too expensive, so I bought a used one.", "As a consequence, you saved a lot of money.", "Exactly. It was a good decision."], order: [0, 1, 2, 3] },
            { lines: ["Tell me more about your career goals.", "I want to work in communication.", "English will be vital for you then.", "I know. That's why I study so hard."], order: [0, 1, 2, 3] },
            { lines: ["The dog is scratching itself.", "How long has it been doing that?", "Since this morning. We should call the vet.", "I agree. Let’s go now."], order: [0, 1, 2, 3] },
            { lines: ["Wherever you find a goal, you find a path.", "That is a very deep idea.", "It motivates me to work harder.", "Me too. Let’s keep going!"], order: [0, 1, 2, 3] },
            { lines: ["How useful is this app for learning?", "It is very effective for memorizing words.", "Consequently, I will download it right now.", "You won't regret it. It works!"], order: [0, 1, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS ---
        3: [
            { q: "Did Albert teach himself to code?", options: ["Yes, he taught himself.", "Yes, he taught him.", "Yes, he taught his.", "Yes, he taught hisself."], a: "Yes, he taught himself." },
            { q: "Does the book belong to her?", options: ["Yes, it is hers.", "Yes, it is she.", "Yes, it is hers book.", "Yes, it is her's."], a: "Yes, it is hers." },
            { q: "Can you go whenever you want?", options: ["Yes, I can go whenever.", "Yes, I can go when.", "Yes, I can go whatever.", "Yes, I can go wherever time."], a: "Yes, I can go whenever." },
            { q: "Is the project theirs?", options: ["Yes, it is theirs.", "Yes, it is they.", "Yes, it is their's.", "Yes, it is them."], a: "Yes, it is theirs." },
            { q: "Did Sarah look at herself in the mirror?", options: ["Yes, she looked at herself.", "Yes, she looked at her.", "Yes, she looked at she.", "Yes, she looked at herself mirror."], a: "Yes, she looked at herself." },
            { q: "Was the flight delayed owing to bad weather?", options: ["Yes, it was delayed owing to the weather.", "Yes, it was delayed therefore the weather.", "Yes, it was delayed so the weather.", "Yes, it was delayed because the weather."], a: "Yes, it was delayed owing to the weather." },
            { q: "Is English a global language?", options: ["Yes, it is.", "Yes, he is.", "Yes, they is.", "Yes, its is."], a: "Yes, it is." },
            { q: "Did they prepare the party themselves?", options: ["Yes, they did it themselves.", "Yes, they did it theirselves.", "Yes, they did it them.", "Yes, they did it they."], a: "Yes, they did it themselves." },
            { q: "Do you have his phone number?", options: ["Yes, I have his number.", "Yes, I have he number.", "Yes, I have him number.", "Yes, I have its number."], a: "Yes, I have his number." },
            { q: "Was he late due to the traffic?", options: ["Yes, he was late due to traffic.", "Yes, he was late consequently traffic.", "Yes, he was late therefore traffic.", "Yes, he was late so traffic."], a: "Yes, he was late due to traffic." },
            { q: "Can I take whichever I want?", options: ["Yes, you can take whichever.", "Yes, you can take who.", "Yes, you can take whatever one.", "Yes, you can take whichever you wanting."], a: "Yes, you can take whichever." },
            { q: "Is that car mine?", options: ["Yes, it is yours.", "Yes, it is you.", "Yes, it is your.", "Yes, it is you're."], a: "Yes, it is yours." },
            { q: "Did the oven turn itself off?", options: ["Yes, it turned itself off.", "Yes, it turned it off.", "Yes, it turned he off.", "Yes, it turned its off."], a: "Yes, it turned itself off." },
            { q: "Did he study hard; therefore he passed?", options: ["Yes, he studied hard; therefore he passed.", "Yes, he passed therefore he studied.", "Yes, he studied hard because he passed.", "Yes, he studied hard; consequently he passed."], a: "Yes, he studied hard; therefore he passed." },
            { q: "Is English spoken wherever you go?", options: ["Yes, it is spoken wherever.", "Yes, it is spoken whatever.", "Yes, it is spoken whenever.", "Yes, it is spoken whoever."], a: "Yes, it is spoken wherever." },
            { q: "Did you enjoy yourself?", options: ["Yes, I enjoyed myself.", "Yes, I enjoyed me.", "Yes, I enjoyed my.", "Yes, I enjoyed mine."], a: "Yes, I enjoyed myself." },
            { q: "Is that bag hers?", options: ["Yes, it is hers.", "Yes, it is her.", "Yes, it is she.", "Yes, it is hers bag."], a: "Yes, it is hers." },
            { q: "Are we doing the project ourselves?", options: ["Yes, we are doing it ourselves.", "Yes, we are doing it us.", "Yes, we are doing it ourself.", "Yes, we are doing it we."], a: "Yes, we are doing it ourselves." },
            { q: "Is the lecture two hours long?", options: ["Yes, it is two hours long.", "Yes, it is two hours longly.", "Yes, it is how long two hours.", "Yes, it is two hours how."], a: "Yes, it is two hours long." },
            { q: "Should you speak English whenever possible?", options: ["Yes, you should speak it whenever.", "Yes, you should speak it whoever.", "Yes, you should speak it whichever.", "Yes, you should speak it however."], a: "Yes, you should speak it whenever." },
            { q: "How important is English?", options: ["It is essential for global communication.", "It is a blue sandwich on the pitch.", "It is three miles tall in the storm.", "It is whenever I hear a burger."], a: "It is essential for global communication." },
            { q: "What happens wherever you go?", options: ["You can find English speakers.", "You can find a flying keyboard.", "You can find an angry electricity.", "You can find a motivated turtle."], a: "You can find English speakers." },
            { q: "Who uses English in technology?", options: ["Whoever creates technology uses it.", "Whichever burger uses English.", "Whatever storm uses English.", "Whenever a pen uses English."], a: "Whoever creates technology uses it." },
            { q: "Why was the match cancelled?", options: ["Due to the heavy rain.", "Due to the speaking article.", "Due to the reflexive pronoun.", "Due to the global career."], a: "Due to the heavy rain." },
            { q: "How tall is that building?", options: ["It is fifty stories high.", "It is very motivated today.", "It is whichever sandwich you like.", "It is owing to the cat."], a: "It is fifty stories high." },
            { q: "What works for you in studying?", options: ["Flashcards work well for me.", "A purple storm works for me.", "A talkative burger works for me.", "An evidence of socks works for me."], a: "Flashcards work well for me." },
            { q: "How far is the moon?", options: ["It is very far from the Earth.", "It is quite delicious with cheese.", "It is in my opinion a pronoun.", "It is whichever career you want."], a: "It is very far from the Earth." },
            { q: "When can you call me?", options: ["Call me whenever you are free.", "Call me whichever color you want.", "Call me however expensive it is.", "Call me whoever created the oven."], a: "Call me whenever you are free." },
            { q: "How expensive is that laptop?", options: ["It costs one thousand dollars.", "It is very tall and green.", "It is due to the sandwich.", "It is by myself in the storm."], a: "It costs one thousand dollars." },
            { q: "Why do people study English?", options: ["Owing to its global popularity.", "Owing to the pitch of the burger.", "Owing to the reflexive costume.", "Owing to the whichever storm."], a: "Owing to its global popularity." },
            { q: "What do you do if you hurt yourself?", options: ["I go to the doctor.", "I eat a reflexive pronoun.", "I call the whichever career.", "I sleep in the opinion of the cat."], a: "I go to the doctor." },
            { q: "How long is the course?", options: ["It lasts for six weeks.", "It is very tall and stylish.", "It is due to the burger.", "It is whoever creates the storm."], a: "It lasts for six weeks." },
            { q: "Which book should I buy?", options: ["Buy whichever you find interesting.", "Buy whenever you find a sandwich.", "Buy however you find a building.", "Buy whoever finds a burger."], a: "Buy whichever you find interesting." },
            { q: "How often do you practice English?", options: ["I practice it every day.", "I practice it tall and far.", "I practice it owing to the cheese.", "I practice it wherever the pen is."], a: "I practice it every day." },
            { q: "Why are you tired?", options: ["Because I studied all night.", "Because the pronoun is blue.", "Because the pitch is motivated.", "Because the burger is whoever."], a: "Because I studied all night." },
            { q: "How useful is this tool?", options: ["It is very effective for coding.", "It is very far from the storm.", "It is however the burger likes.", "It is whatever the career says."], a: "It is very effective for coding." },
            { q: "What makes sense to you?", options: ["Learning a global language makes sense.", "Eating a reflexive storm makes sense.", "Flying a whichever burger makes sense.", "Crying in the how tall building makes sense."], a: "Learning a global language makes sense." },
            { q: "How fast can you run?", options: ["I can run 10 kilometers per hour.", "I can run very traditional and old.", "I can run due to the burger.", "I can run whatever the pen thinks."], a: "I can run 10 kilometers per hour." },
            { q: "What is your opinion on career paths?", options: ["In my opinion, focus is necessary.", "In my opinion, burgers are reflexive.", "In my opinion, storms are pronouns.", "In my opinion, technology is how far."], a: "In my opinion, focus is necessary." },
            { q: "Why did sales drop?", options: ["Prices rose; consequently, sales dropped.", "The cat slept; consequently, the burger flew.", "English is global; consequently, the oven broke.", "I hurt myself; consequently, the cloud talked."], a: "Prices rose; consequently, sales dropped." }
        ],

        // --- TYPE 4: FIND MEANING (40 items) ---
        4: [
            { sent: "I **agree** with your opinion about the project.", word: "agree", options: ["Concordar", "Discutir", "Explicar", "Sentir"], a: "Concordar", def: "To have the same opinion about something." },
            { sent: "You should **consider** all the available options.", word: "consider", options: ["Ignorar", "Considerar", "Comprar", "Falar"], a: "Considerar", def: "To think carefully about something, typically before making a decision." },
            { sent: "Let's **discuss** the new career paths today.", word: "discuss", options: ["Discutir / Debater", "Aprender", "Gostar", "Precisar"], a: "Discutir / Debater", def: "To talk about something with another person or group." },
            { sent: "Can you **explain** this grammar rule to me?", word: "explain", options: ["Ouvir", "Sentir", "Explicar", "Saber"], a: "Explicar", def: "To make an idea clear to someone by describing it in detail." },
            { sent: "I **feel** very motivated to learn English.", word: "feel", options: ["Ouvir", "Saber", "Sentir", "Amar"], a: "Sentir", def: "To experience an emotion or sensation." },
            { sent: "Did you **hear** the president's speech?", word: "hear", options: ["Falar", "Ouvir", "Ler", "Estudar"], a: "Ouvir", def: "To perceive with the ear the sound made by something." },
            { sent: "Do you **know** the answer to this question?", word: "know", options: ["Saber / Conhecer", "Aprender", "Esquecer", "Duvidar"], a: "Saber / Conhecer", def: "To be aware of through observation, inquiry, or information." },
            { sent: "Students **learn** new strategies every week.", word: "learn", options: ["Ensinam", "Aprendem", "Esquecem", "Brincam"], a: "Aprendem", def: "To gain or acquire knowledge or skill." },
            { sent: "Many people **motivate** themselves by setting goals.", word: "motivate", options: ["Desanimam", "Motivam", "Surpreendem", "Preferem"], a: "Motivam", def: "To provide someone with a motive for doing something." },
            { sent: "We **need** evidence to prove our theory.", word: "need", options: ["Queremos", "Precisamos", "Sentimos", "Ouvimos"], a: "Precisamos", def: "To require something because it is essential." },
            { sent: "I **prefer** studying with music.", word: "prefer", options: ["Prefiro", "Gosto", "Amo", "Odeio"], a: "Prefiro", def: "To like one thing or person better than another." },
            { sent: "You should **read** this article about science.", word: "read", options: ["Escrever", "Ler", "Falar", "Ver"], a: "Ler", def: "To look at and comprehend the meaning of written matter." },
            { sent: "It is easy to **speak** English in a global company.", word: "speak", options: ["Ouvir", "Falar", "Ler", "Escrever"], a: "Falar", def: "To say words in order to convey information." },
            { sent: "They **study** hard to pass the exam.", word: "study", options: ["Brincam", "Estudam", "Trabalham", "Viajam"], a: "Estudam", def: "To devote time and attention to acquiring knowledge." },
            { sent: "The news will **surprise** everyone.", word: "surprise", options: ["Surpreender", "Motivar", "Entristecer", "Acalmar"], a: "Surpreender", def: "To cause someone to feel mild astonishment or shock." },
            { sent: "Let's **talk** about your future plans.", word: "talk", options: ["Pensar", "Conversar", "Agir", "Mudar"], a: "Conversar", def: "To speak in order to give information or express ideas." },
            { sent: "Can you **tell** me a story?", word: "tell", options: ["Ouvir", "Contar / Dizer", "Ler", "Escrever"], a: "Contar / Dizer", def: "To communicate information, facts, or news to someone." },
            { sent: "What do you **think** about this method?", word: "think", options: ["Acha / Pensa", "Sente", "Ouve", "Sabe"], a: "Acha / Pensa", def: "To have a particular opinion, belief, or idea." },
            { sent: "English has a massive **influence** worldwide.", word: "influence", options: ["Influência", "Decisão", "Problema", "Carreira"], a: "Influência", def: "The capacity to have an effect on the character or behavior of something." },
            { sent: "We need to find the **reason** for the delay.", word: "reason", options: ["Razão / Motivo", "Lugar", "Caminho", "Tempo"], a: "Razão / Motivo", def: "A cause, explanation, or justification for an action or event." },
            { sent: "What is your **opinion** on this topic?", word: "opinion", options: ["Opinião", "Fato", "Mentira", "Estudo"], a: "Opinião", def: "A view or judgment formed about something." },
            { sent: "You must follow the right **path**.", word: "path", options: ["Caminho", "Plano", "Carro", "Lugar"], a: "Caminho", def: "A course of action or conduct." },
            { sent: "This app is very **effective** for learning.", word: "effective", options: ["Eficaz", "Lento", "Caro", "Ruim"], a: "Eficaz", def: "Successful in producing a desired or intended result." },
            { sent: "Be **efficient** with your study time.", word: "efficient", options: ["Eficiente", "Preguiçoso", "Atrasado", "Rápido"], a: "Eficiente", def: "Achieving maximum productivity with minimum wasted effort." },
            { sent: "She wants a successful **career**.", word: "career", options: ["Carreira", "Empresa", "Escola", "Viagem"], a: "Carreira", def: "An occupation undertaken for a significant period of a person's life." },
            { sent: "He works for a global **company**.", word: "company", options: ["Empresa", "Faculdade", "Cidade", "Família"], a: "Empresa", def: "A commercial business." },
            { sent: "I attended a **conference** yesterday.", word: "conference", options: ["Conferência", "Aula", "Festa", "Reunião"], a: "Conferência", def: "A formal meeting for discussion." },
            { sent: "This **article** is very interesting.", word: "article", options: ["Artigo", "Livro", "Redação", "Letra"], a: "Artigo", def: "A piece of writing included in a newspaper or magazine." },
            { sent: "I have to write an **essay** for school.", word: "essay", options: ["Redação / Ensaio", "Artigo", "Letra", "Palavra"], a: "Redação / Ensaio", def: "A short piece of writing on a particular subject." },
            { sent: "Listening is an important **skill**.", word: "skill", options: ["Habilidade", "Tarefa", "Opção", "Ideia"], a: "Habilidade", def: "The ability to do something well; expertise." },
            { sent: "Her **pronunciation** is perfect.", word: "pronunciation", options: ["Pronúncia", "Escrita", "Leitura", "Fala"], a: "Pronúncia", def: "The way in which a word is pronounced." },
            { sent: "That sounds **interesting**!", word: "interesting", options: ["Interessante", "Chato", "Difícil", "Comum"], a: "Interessante", def: "Arousing curiosity or interest." },
            { sent: "Your opinion makes **sense**.", word: "sense", options: ["Faz sentido", "É errada", "É longa", "É barulhenta"], a: "Faz sentido", def: "Logical or understandable." },
            { sent: "This **content** is useful for the test.", word: "content", options: ["Conteúdo", "Tópico", "Ideia", "Futuro"], a: "Conteúdo", def: "The material dealt with in a speech or text." },
            { sent: "Is there any **evidence** for this?", word: "evidence", options: ["Evidência", "Razão", "Opção", "Pretexto"], a: "Evidência", def: "Facts or information indicating whether a belief is valid." },
            { sent: "Think about your **future**.", word: "future", options: ["Futuro", "Passado", "Presente", "Dia"], a: "Futuro", def: "The time following the moment of speaking." },
            { sent: "He had a great **idea**.", word: "idea", options: ["Ideia", "Plano", "Sonho", "Desafio"], a: "Ideia", def: "A thought or suggestion as to a possible course of action." },
            { sent: "Life is **beautiful**.", word: "life", options: ["Vida", "Morte", "Saúde", "Alegria"], a: "Vida", def: "The existence of an individual human being or animal." },
            { sent: "What is your **topic** of study?", word: "topic", options: ["Tópico / Assunto", "Carreira", "Skill", "Método"], a: "Tópico / Assunto", def: "A matter dealt with in a text or conversation." },
            { sent: "Respect is a vital **word**.", word: "word", options: ["Palavra", "Frase", "Discurso", "Pronúncia"], a: "Palavra", def: "A single distinct meaningful element of speech or writing." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 items) ---
        5: [
            { sent: "Albert taught **him** how to code.", correct: "himself" },
            { sent: "Celine looked at **her** in the mirror.", correct: "herself" },
            { sent: "This is **I** book.", correct: "my" },
            { sent: "Is this car **your**?", correct: "yours" },
            { sent: "I will go **whatever** you go.", correct: "wherever" },
            { sent: "You can call me **whichever** you like.", correct: "whenever" },
            { sent: "The match was cancelled **therefore** the rain.", correct: "because of" },
            { sent: "He studied hard. **Because**, he passed.", correct: "Therefore" },
            { sent: "How **far** is the building?", correct: "How tall" },
            { sent: "How **tall** is the airport?", correct: "How far" },
            { sent: "How **many** time do we have?", correct: "How much" },
            { sent: "How **much** books did you buy?", correct: "How many" },
            { sent: "We did the project by **us**.", correct: "ourselves" },
            { sent: "They introduced **them** to the class.", correct: "themselves" },
            { sent: "I hurt **me** while cooking.", correct: "myself" },
            { sent: "Give the pen to **I**.", correct: "me" },
            { sent: "She loves **he**.", correct: "him" },
            { sent: "He loves **she**.", correct: "her" },
            { sent: "**Whoever** color you prefer, take it.", correct: "Whichever" },
            { sent: "**However** does this, is smart.", correct: "Whoever" },
            { sent: "Solve the problem **whenever** you want.", correct: "however" },
            { sent: "Owing **of** the traffic, I was late.", correct: "to" },
            { sent: "Due **of** the storm, we stayed home.", correct: "to" },
            { sent: "It was cold. **As a result**, I wore a coat.", correct: "Since" },
            { sent: "Ah, that makes **does** sense now.", correct: "makes" },
            { sent: "In **me** opinion, it is good.", correct: "my" },
            { sent: "How **expensive** is the movie?", correct: "How long" },
            { sent: "The oven turns **it** off automatically.", correct: "itself" },
            { sent: "Did you enjoy **you** at the party?", correct: "yourself" },
            { sent: "Help **your** to the food.", correct: "yourselves" },
            { sent: "**Since** it was raining, so we stayed home.", correct: "Since" },
            { sent: "English is a global language **thus** its popularity.", correct: "owing to" },
            { sent: "That car is not **our**.", correct: "ours" },
            { sent: "Is that bag **her**?", correct: "hers" },
            { sent: "I **rarely** miss a class.", correct: "always" },
            { sent: "I **always** go to the gym.", correct: "never" },
            { sent: "**Whichever** you do, don't give up.", correct: "Whatever" },
            { sent: "**However** calls, say I am busy.", correct: "Whoever" },
            { sent: "How **tall** is the movie?", correct: "How long" },
            { sent: "How **far** is he?", correct: "How old" }
        ],


        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Type 6.1: Question to Answer (Groups 1-10)
            { pairs: [{a: "How important is English for your career?", b: "It is absolutely essential for global communication."}, {a: "Did you teach yourself how to code?", b: "Yes, I used English tutorials by myself."}, {a: "How far is the new company from here?", b: "It’s about twenty miles away."}, {a: "Who is going to give the speech today?", b: "Whoever is ready first will speak."}, {a: "How old is that traditional building?", b: "It is over one hundred years old."}] },
            { pairs: [{a: "How useful is this new software?", b: "It is very effective for managing content."}, {a: "Is this book mine or yours?", b: "That one is mine, but this one is yours."}, {a: "How often do you discuss career paths?", b: "We debate them once a month in class."}, {a: "Whatever happened to your old laptop?", b: "It turned itself off and never worked again."}, {a: "How expensive is the English course?", b: "It costs a lot, but it is a great investment."}] },
            { pairs: [{a: "How tall is the principal of the school?", b: "He is nearly six feet tall."}, {a: "Did you find the evidence you needed?", b: "Yes, I found it by myself in the library."}, {a: "Why was the flight delayed yesterday?", b: "It was delayed owing to the heavy storm."}, {a: "How much time do we have for the test?", b: "We have exactly forty-five minutes."}, {a: "Can I sit wherever I want in the lab?", b: "Yes, sit wherever you feel comfortable."}] },
            { pairs: [{a: "How long is the lecture about AI?", b: "It lasts for two hours."}, {a: "Is that bag hers or his?", b: "It belongs to her; it’s hers."}, {a: "How fast can that new robot move?", b: "It moves faster than a human can walk."}, {a: "Does this idea make sense to you?", b: "Yes, in my opinion, it is very logical."}, {a: "How many people are at the conference?", b: "There are a lot of people from different countries."}] },
            { pairs: [{a: "How difficult is it to learn coding?", b: "It’s not rocket science if you practice."}, {a: "Which path should I choose for my future?", b: "Choose whichever makes you feel motivated."}, {a: "Why did she fail the exam last week?", b: "Because she didn't study hard enough."}, {a: "How useful are these language strategies?", b: "They are very efficient for memorizing words."}, {a: "Did they enjoy themselves at the mall?", b: "Yes, they had a great time together."}] },
            { pairs: [{a: "How much money do they invest in tech?", b: "They invest millions of dollars every year."}, {a: "Is the car itself very expensive?", b: "Yes, and its maintenance is also high."}, {a: "How often do you hear from your cousin?", b: "I rarely hear from him lately."}, {a: "Why are the streets blocked today?", b: "Due to the construction on the main road."}, {a: "How important is pronunciation to you?", b: "It is vital for effective communication."}] },
            { pairs: [{a: "How far can you travel with this ticket?", b: "You can go wherever the train stops."}, {a: "Whose idea was it to start the project?", b: "It was his idea; it was his."}, {a: "How long have you known Mrs. Canales?", b: "I have known her since I was a child."}, {a: "Why did the sales drop so suddenly?", b: "Prices rose; consequently, sales dropped."}, {a: "How useful is English in your field of study?", b: "It is the most important language for research."}] },
            { pairs: [{a: "How often do you use reflexive pronouns?", b: "Whenever I want to emphasize an action."}, {a: "Did the children behave themselves?", b: "Yes, they were very quiet and polite."}, {a: "How deep is your interest in science?", b: "I find it very interesting and motivating."}, {a: "What happens whenever she speaks?", b: "Everyone listens because she has influence."}, {a: "How expensive is it to live abroad?", b: "It depends on the country you choose."}] },
            { pairs: [{a: "How much information is in the article?", b: "It contains a lot of useful evidence."}, {a: "Is that house ours or theirs?", b: "It is theirs; they bought it last year."}, {a: "How fast did the storm approach?", b: "It moved very quickly across the sky."}, {a: "Why do you need a better method?", b: "Since I am failing, I need to improve."}, {a: "How tall is the building on the corner?", b: "It is the tallest structure in the neighborhood."}] },
            { pairs: [{a: "How useful is the dictionary to you?", b: "I use it whenever I see a new word."}, {a: "Did you cut yourself with the scissors?", b: "No, I was very careful while working."}, {a: "How far is the goal from the pitch?", b: "It is at the very end of the field."}, {a: "Why are you so confident today?", b: "Because I prepared myself for the talk."}, {a: "How many words are in your essay?", b: "There are approximately five hundred words."}] },

            // Type 6.2: 1st half to 2nd half of a sentence (Groups 11-20)
            { pairs: [{a: "Whatever you decide to do in the future...", b: "...you will definitely need English skills."}, {a: "English connects different cultures...", b: "...owing to its massive global influence."}, {a: "Albert taught himself how to code...", b: "...using English tutorials he found online."}, {a: "Wherever you travel in the world...", b: "...you will find someone who speaks English."}, {a: "Celine looked at herself in the mirror...", b: "...before she left for the important conference."}] },
            { pairs: [{a: "Consequently, if you want to improve...", b: "...you need to invest time in learning."}, {a: "Whoever creates new technology...", b: "...uses English as their primary language."}, {a: "In my opinion, English is...", b: "...the most essential language for communication."}, {a: "Therefore, let's practice our speech...", b: "...to prepare ourselves for the presentation."}, {a: "Since it was raining very hard...", b: "...we decided to stay indoors all afternoon."}] },
            { pairs: [{a: "The match was cancelled...", b: "...due to the strong storm last night."}, {a: "He studied hard for weeks...", b: "...therefore, he passed the final exam."}, {a: "You can dress however you want...", b: "...because there is no formal dress code."}, {a: "He worked hard as a result...", b: "...he succeeded in his new career path."}, {a: "I hurt myself while I...", b: "...was playing soccer on the pitch yesterday."}] },
            { pairs: [{a: "Call me whenever you...", b: "...need help with your English homework."}, {a: "The oven turns itself off...", b: "...to prevent any dangerous accidents."}, {a: "Choose whichever color you...", b: "...prefer for the new company logo."}, {a: "We prepared the project ourselves...", b: "...without any help from the teacher."}, {a: "Prices rose very quickly...", b: "...consequently, the popularity of the product dropped."}] },
            { pairs: [{a: "I find it helpful to...", b: "...record my own voice to check pronunciation."}, {a: "That makes sense because...", b: "...English is a global tool for trade."}, {a: "In conclusion, learning English...", b: "...opens many doors for your career."}, {a: "Thanks to your advice...", b: "...I made a very smart decision today."}, {a: "I am considering two...", b: "...different career paths for my future."}] },
            { pairs: [{a: "The building is how tall...", b: "...compared to the small houses nearby?"}, {a: "The traffic was heavy...", b: "...thus, I arrived late for the lecture."}, {a: "A lot of people believe...", b: "...that innovation comes from curiosity."}, {a: "She realized the bag was hers...", b: "...after she checked the name on the tag."}, {a: "The cat washed itself...", b: "...after it finished eating its dinner."}] },
            { pairs: [{a: "How useful is this tool...", b: "...for your specific field of study?"}, {a: "Whoever did this is smart...", b: "...because the solution is very efficient."}, {a: "I taught myself English...", b: "...by reading articles and watching videos."}, {a: "The storm was strong...", b: "...so we stayed home by ourselves."}, {a: "As a result of his...", b: "...daily practice, his skills improved quickly."}] },
            { pairs: [{a: "How far is the airport...", b: "...from the center of the global city?"}, {a: "English is useful therefore...", b: "...we study it every day at school."}, {a: "Help yourselves to the...", b: "...sandwiches on the table in the kitchen."}, {a: "Whichever path you take...", b: "...English will be a vital part of it."}, {a: "In my opinion, a point...", b: "...is only valid if you have evidence."}] },
            { pairs: [{a: "How important is it to...", b: "...understand the different types of pronouns?"}, {a: "Owing to the influence of...", b: "...technology, the world is more connected."}, {a: "The project is theirs and...", b: "...they worked on it for three months."}, {a: "Innovation never stops and...", b: "...it motivates us to keep learning."}, {a: "She enjoys herself when...", b: "...she is reading a very interesting book."}] },
            { pairs: [{a: "How much time do we...", b: "...need to finish the writing task?"}, {a: "Since you are busy now...", b: "...we can discuss the topic later tonight."}, {a: "The computer crashed therefore...", b: "...I lost all the code I had written."}, {a: "However you do it...", b: "...just make sure the result is effective."}, {a: "I know the answer myself...", b: "...so I don't need your help, thanks."}] },

            // Type 6.3: English word/sentence to Portuguese translation (Groups 21-30)
            { pairs: [{a: "English is a global language.", b: "O inglês é uma língua global."}, {a: "Whatever I decide to do.", b: "O que quer que eu decida fazer."}, {a: "Whoever creates technology.", b: "Quem quer que crie tecnologia."}, {a: "Wherever you go.", b: "Onde quer que você vá."}, {a: "Whenever you can.", b: "Quando quer que você possa."}] },
            { pairs: [{a: "In my opinion, it is essential.", b: "Na minha opinião, é essencial."}, {a: "That makes sense.", b: "Isso faz sentido."}, {a: "I taught myself to code.", b: "Eu aprendi sozinho a programar."}, {a: "Owing to its influence.", b: "Devido à sua influência."}, {a: "Consequently, you need to invest.", b: "Consequentemente, você precisa investir."}] },
            { pairs: [{a: "As a result, he won.", b: "Como resultado, ele ganhou."}, {a: "Due to the heavy rain.", b: "Devido à chuva pesada."}, {a: "Since it is late.", b: "Já que está tarde."}, {a: "Therefore, let's practice.", b: "Portanto, vamos praticar."}, {a: "Thus, he failed.", b: "Assim, ele falhou."}] },
            { pairs: [{a: "I hurt myself cooking.", b: "Eu me machuquei cozinhando."}, {a: "They introduced themselves.", b: "Eles se apresentaram."}, {a: "She looked at herself.", b: "Ela se olhou."}, {a: "We did it ourselves.", b: "Nós mesmos fizemos isso."}, {a: "Help yourselves.", b: "Sirvam-se."}] },
            { pairs: [{a: "How far is it?", b: "Qual a distância?"}, {a: "How tall is he?", b: "Qual a altura dele?"}, {a: "How long is the movie?", b: "Qual a duração do filme?"}, {a: "How often do you study?", b: "Com que frequência você estuda?"}, {a: "How expensive is it?", b: "Quão caro é?"}] },
            { pairs: [{a: "Discussion and career.", b: "Discussão e carreira."}, {a: "Evidence and future.", b: "Evidência e futuro."}, {a: "Content and culture.", b: "Conteúdo e cultura."}, {a: "Opinion and reason.", b: "Opinião e razão."}, {a: "Strategy and method.", b: "Estratégia e método."}] },
            { pairs: [{a: "To agree and to disagree.", b: "Concordar e discordar."}, {a: "To explain and to understand.", b: "Explicar e entender."}, {a: "To learn and to motivate.", b: "Aprender e motivar."}, {a: "To hear and to listen.", b: "Ouvir e escutar."}, {a: "To prefer and to choose.", b: "Preferir e escolher."}] },
            { pairs: [{a: "By myself.", b: "Por mim mesmo (sozinho)."}, {a: "By yourself.", b: "Por você mesmo (sozinho)."}, {a: "It makes sense now.", b: "Faz sentido agora."}, {a: "Tell me more.", b: "Conte-me mais."}, {a: "In conclusion.", b: "Em conclusão."}] },
            { pairs: [{a: "Global company.", b: "Empresa global."}, {a: "Field of study.", b: "Área de estudo."}, {a: "Language of communication.", b: "Língua de comunicação."}, {a: "Highly effective.", b: "Altamente eficaz."}, {a: "Social popularity.", b: "Popularidade social."}] },
            { pairs: [{a: "Whichever you prefer.", b: "Qualquer que você prefira."}, {a: "However you can.", b: "De qualquer maneira que puder."}, {a: "Whatever happens.", b: "O que quer que aconteça."}, {a: "Whoever calls.", b: "Quem quer que ligue."}, {a: "Wherever possible.", b: "Onde quer que seja possível."}] },

            // Type 6.4: Word to Simple Definition in English (Groups 31-40)
            { pairs: [{a: "Career", b: "A job you do for a long time."}, {a: "Company", b: "A business that sells products or services."}, {a: "Global", b: "Relating to the whole world."}, {a: "Career path", b: "The sequence of jobs in a person's life."}, {a: "Influence", b: "The power to change how someone thinks."}] },
            { pairs: [{a: "Pronoun", b: "A word used instead of a noun."}, {a: "Reflexive", b: "A type of pronoun where action returns to subject."}, {a: "Strategy", b: "A plan of action to achieve a goal."}, {a: "Technique", b: "A specific way of doing a task."}, {a: "Method", b: "A systematic procedure for doing something."}] },
            { pairs: [{a: "Article", b: "A piece of writing in a magazine or newspaper."}, {a: "Essay", b: "A short piece of writing on a school topic."}, {a: "Lecture", b: "A formal talk to students or an audience."}, {a: "Subtitle", b: "Words at the bottom of a movie screen."}, {a: "Lyrics", b: "The words of a popular song."}] },
            { pairs: [{a: "Motivate", b: "To give someone a reason to work hard."}, {a: "Memorize", b: "To learn something perfectly by heart."}, {a: "Understand", b: "To know the meaning of something clearly."}, {a: "Discuss", b: "To talk about a topic with others."}, {a: "Agree", b: "To have the same opinion as someone else."}] },
            { pairs: [{a: "Consequence", b: "A result of an action, often negative."}, {a: "Result", b: "Something that happens because of something else."}, {a: "Cause", b: "The person or thing that makes something happen."}, {a: "Evidence", b: "Facts that show something is true."}, {a: "Reason", b: "An explanation for why something happened."}] },
            { pairs: [{a: "Efficient", b: "Working well without wasting any time."}, {a: "Effective", b: "Successful in reaching a desired result."}, {a: "Essential", b: "Something that is absolutely necessary."}, {a: "Useful", b: "Something that helps you do a task."}, {a: "Interesting", b: "Something that holds your attention."}] },
            { pairs: [{a: "Wherever", b: "In or to any place."}, {a: "Whenever", b: "At any time or every time."}, {a: "Whatever", b: "Anything or everything."}, {a: "Whoever", b: "Any person or every person."}, {a: "However", b: "In any way or manner."}] },
            { pairs: [{a: "Opinion", b: "What you think about a specific subject."}, {a: "Decision", b: "A choice you make after thinking."}, {a: "Pretext", b: "A false reason given to hide the truth."}, {a: "Topic", b: "The main subject of a conversation."}, {a: "Principle", b: "A basic truth or rule."}] },
            { pairs: [{a: "Innovation", b: "The creation of new ideas or methods."}, {a: "Technology", b: "Scientific knowledge used in practical ways."}, {a: "Resource", b: "A supply of materials or money you can use."}, {a: "Skill", b: "An ability that you learn through practice."}, {a: "Potential", b: "The possibility of future success."}] },
            { pairs: [{a: "Pitch", b: "An area of ground for a sports game."}, {a: "Storm", b: "Very bad weather with rain and wind."}, {a: "Burger", b: "A round piece of meat in a bun."}, {a: "Sandwich", b: "Two pieces of bread with a filling."}, {a: "Costume", b: "Clothes worn to look like someone else."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 items) ---
        7: [
            { q: "How far is the international airport from the city center?", options: ["It is about thirty kilometers away.", "Yes, it is very far.", "I go there whenever I can.", "It is very tall."], a: "It is about thirty kilometers away." },
            { q: "How important do you think English is for a career in technology?", options: ["In my opinion, it is absolutely essential.", "English is a global language.", "Whoever studies hard.", "It is two hours long."], a: "In my opinion, it is absolutely essential." },
            { q: "How tall is the new company headquarters?", options: ["It has fifty floors and is very modern.", "It is very far from the pitch.", "It is due to the architect.", "Since last year."], a: "It has fifty floors and is very modern." },
            { q: "How much time do we need to finish the essay?", options: ["We need at least two more hours.", "There are a lot of students.", "Whatever you decide.", "By myself."], a: "We need at least two more hours." },
            { q: "How long was the lecture given by the guest speaker?", options: ["It lasted for ninety minutes.", "It was very tall and stylish.", "Due to the subject.", "Whenever he speaks."], a: "It lasted for ninety minutes." },
            { q: "How often do you practice your pronunciation?", options: ["I practice it every day using an app.", "It is perfect and effective.", "Whoever wants to learn.", "In the mirror."], a: "I practice it every day using an app." },
            { q: "How useful is this software for your field of study?", options: ["It is very effective for managing data.", "It is mine, not yours.", "Because of the innovation.", "How many people."], a: "It is very effective for managing data." },
            { q: "How many employees work at that global company?", options: ["There are more than five hundred people.", "It is very expensive to work there.", "Whichever career they choose.", "By themselves."], a: "There are more than five hundred people." },
            { q: "How expensive is the tuition at that private college?", options: ["It costs ten thousand dollars per semester.", "It is a global language.", "Owing to the popularity.", "It is how far."], a: "It costs ten thousand dollars per semester." },
            { q: "How fast can you type your articles?", options: ["I can type about sixty words per minute.", "I type however I can.", "The article is interesting.", "Since 9 AM."], a: "I can type about sixty words per minute." },
            { q: "How long have you been studying reflexive pronouns?", options: ["I have been studying them all week.", "They are very useful.", "How important is it?", "Myself and yourself."], a: "I have been studying them all week." },
            { q: "How far is the soccer pitch from the school?", options: ["It's just a five-minute walk.", "It's very large and green.", "Because of the game.", "Whichever you prefer."], a: "It's just a five-minute walk." },
            { q: "How useful are these English tutorials for beginners?", options: ["They are highly effective and easy to follow.", "They taught themselves.", "In my opinion, yes.", "Whatever happens."], a: "They are highly effective and easy to follow." },
            { q: "How many languages does the new student speak?", options: ["She speaks three: English, Spanish, and French.", "She is very motivated.", "Whoever calls her.", "Herself."], a: "She speaks three: English, Spanish, and French." },
            { q: "How tall is the oak tree in the garden?", options: ["It is nearly fifteen meters high.", "It is very traditional and old.", "Due to the rain.", "Whenever it grows."], a: "It is nearly fifteen meters high." },
            { q: "How much evidence did the jury consider?", options: ["They considered a lot of clear evidence.", "They considered themselves.", "As a result, they were guilty.", "How long?"], a: "They considered a lot of clear evidence." },
            { q: "How often does the company update its software?", options: ["They update it once a month.", "It is a very efficient process.", "Consequently, it works well.", "Whichever version."], a: "They update it once a month." },
            { q: "How important is empathy in a global company?", options: ["It is vital for understanding different cultures.", "Empathy is a complex word.", "Wherever you go.", "In conclusion."], a: "It is vital for understanding different cultures." },
            { q: "How long is the flight to London?", options: ["It takes about eleven hours.", "It was delayed owing to rain.", "The airplane is hers.", "How far?"], a: "It takes about eleven hours." },
            { q: "How useful is it to memorize the lyrics?", options: ["It helps a lot with your vocabulary.", "The lyrics are in the article.", "Whoever sings well.", "By yourself."], a: "It helps a lot with your vocabulary." },
            { q: "How far is the library from the cafeteria?", options: ["It's right across the hallway.", "It has many books.", "Whenever you are hungry.", "It is a quiet place."], a: "It's right across the hallway." },
            { q: "How much money do they invest in innovation?", options: ["They invest a significant portion of their profit.", "Innovation never stops.", "Therefore, they are successful.", "Whatever they buy."], a: "They invest a significant portion of their profit." },
            { q: "How often do you find yourself thinking about the future?", options: ["I think about it almost every day.", "The future is interesting.", "As a result, I am busy.", "How old are you?"], a: "I think about it almost every day." },
            { q: "How useful is the subtitle for understanding the movie?", options: ["It is essential if you don't speak the language.", "The movie is two hours long.", "Whichever movie you watch.", "By themselves."], a: "It is essential if you don't speak the language." },
            { q: "How many people attended the conference?", options: ["About two hundred experts were there.", "The conference was effective.", "Owing to the popularity.", "However you go."], a: "About two hundred experts were there." },
            { q: "How tall are you compared to your brother?", options: ["I am slightly taller than him.", "My brother is a student.", "We are ourselves.", "Since 2005."], a: "I am slightly taller than him." },
            { q: "How expensive is it to live in a global city?", options: ["The cost of living is extremely high.", "The city is very far.", "Consequently, people move.", "Wherever you live."], a: "The cost of living is extremely high." },
            { q: "How important is it to discuss career paths?", options: ["It is crucial for making an informed decision.", "My career is in science.", "Whatever I decide.", "In my opinion."], a: "It is crucial for making an informed decision." },
            { q: "How long have you lived in this house?", options: ["We have lived here since 2010.", "The house is hers.", "Therefore, it is old.", "How much?"], a: "We have lived here since 2010." },
            { q: "How often do you check your emails?", options: ["I check them whenever I have a break.", "The emails are useful.", "Whoever sends them.", "By myself."], a: "I check them whenever I have a break." },
            { q: "How far did the storm spread?", options: ["It covered the entire state.", "It was a very strong storm.", "Due to the wind.", "As a result, it rained."], a: "It covered the entire state." },
            { q: "How useful is your imagination for solving problems?", options: ["It is very helpful for finding creative solutions.", "My imagination is vivid.", "However you think.", "In conclusion."], a: "It is very helpful for finding creative solutions." },
            { q: "How many words are in the English dictionary?", options: ["There are hundreds of thousands of words.", "The dictionary is yours.", "Whichever you choose.", "By yourself."], a: "There are hundreds of thousands of words." },
            { q: "How tall is the Eiffel Tower?", options: ["It is 330 meters tall.", "It is in Paris.", "Owing to its design.", "Whenever you visit."], a: "It is 330 meters tall." },
            { q: "How much does it cost to study abroad?", options: ["It depends on the university and the country.", "I wish I were rich.", "Since last month.", "How long?"], a: "It depends on the university and the country." },
            { q: "How long is the essay you have to write?", options: ["It must be at least five pages.", "I have to write it myself.", "Whatever the topic is.", "At 8 PM."], a: "It must be at least five pages." },
            { q: "How often do you see prejudice in the world?", options: ["Unfortunately, I see it quite frequently.", "Prejudice is an unfair opinion.", "We must fight it.", "Whoever is biased."], a: "Unfortunately, I see it quite frequently." },
            { q: "How important is it to have a plan for your career?", options: ["It is the best way to achieve your goals.", "My plan is a secret.", "Whichever path.", "In conclusion."], a: "It is the best way to achieve your goals." },
            { q: "How useful is English in the field of medicine?", options: ["It is a global tool for sharing research.", "The doctor is busy.", "Due to the influence.", "By themselves."], a: "It is a global tool for sharing research." },
            { q: "How far can technology go in the future?", options: ["Innovation is infinite, so it can go very far.", "Technology helps us every day.", "Consequently, we improve.", "Whatever we create."], a: "Innovation is infinite, so it can go very far." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 items) ---
        8: [
            { sent: "English is the language of communication **worldwide**; however, you find someone who speaks it.", wrong: "worldwide", options: ["wherever", "whichever", "whatever", "himself"], a: "wherever" },
            { sent: "She looked at **hers** in the mirror to check her makeup.", wrong: "hers", options: ["herself", "she", "hers", "mine"], a: "herself" },
            { sent: "He studied very hard; **since**, he passed the exam easily.", wrong: "since", options: ["therefore", "owing to", "because", "as"], a: "therefore" },
            { sent: "I taught **me** how to play the electric guitar.", wrong: "me", options: ["myself", "mine", "my", "I"], a: "myself" },
            { sent: "The flight was delayed **consequently** the heavy storm.", wrong: "consequently", options: ["due to", "thus", "therefore", "so"], a: "due to" },
            { sent: "You can choose **whatever** path you prefer: engineering or medicine.", wrong: "whatever", options: ["whichever", "whoever", "however", "whenever"], a: "whichever" },
            { sent: "In my **reason**, English is essential for your future.", wrong: "reason", options: ["opinion", "pretext", "result", "evidence"], a: "opinion" },
            { sent: "The company invested poorly; **as a result**, they faced difficulties.", wrong: "as a result", options: ["owing to", "because", "since", "due"], a: "owing to" },
            { sent: "**Whoever** you decide to do, I will support you.", wrong: "Whoever", options: ["Whatever", "Whichever", "Wherever", "Whenever"], a: "Whatever" },
            { sent: "The students prepared the presentation **theirselves**.", wrong: "theirselves", options: ["themselves", "they", "theirs", "them"], a: "themselves" },
            { sent: "My sister goes to **factory** to study law.", wrong: "factory", options: ["college", "fabric", "lecture", "prejudice"], a: "college" },
            { sent: "I bought some **college** to make a new dress.", wrong: "college", options: ["fabric", "factory", "lecture", "prejudice"], a: "fabric" },
            { sent: "The professor gave an interesting **reading** at the university.", wrong: "reading", options: ["lecture", "article", "essay", "lyrics"], a: "lecture" },
            { sent: "We must fight against **pretext** in our society.", wrong: "pretext", options: ["prejudice", "opinion", "influence", "reason"], a: "prejudice" },
            { sent: "It was a real **storm** moment; consequently, I solved the problem.", wrong: "storm", options: ["lightbulb", "sandwich", "costume", "pitch"], a: "lightbulb" },
            { sent: "**However** calls, tell them I am in a meeting.", wrong: "However", options: ["Whoever", "Whatever", "Wherever", "Whenever"], a: "Whoever" },
            { sent: "I hurt **himself** while playing on the pitch.", wrong: "himself", options: ["myself", "me", "mine", "my"], a: "myself" },
            { sent: "How **expensive** is the building? (Asking about height).", wrong: "expensive", options: ["How tall", "How far", "How long", "How often"], a: "How tall" },
            { sent: "English is a global language **thus** its popularity.", wrong: "thus", options: ["owing to", "therefore", "so", "result"], a: "owing to" },
            { sent: "That car is **hers**; it belongs to my brother.", wrong: "hers", options: ["his", "mine", "yours", "theirs"], a: "his" },
            { sent: "I will find you **whatever** you go.", wrong: "whatever", options: ["wherever", "whenever", "whichever", "however"], a: "wherever" },
            { sent: "The cat washed **himself** after eating the sandwich.", wrong: "himself", options: ["itself", "herself", "themselves", "yourself"], a: "itself" },
            { sent: "This is **mine** pen.", wrong: "mine", options: ["my", "me", "I", "myself"], a: "my" },
            { sent: "Is that project **you**?", wrong: "you", options: ["yours", "your", "you're", "yourself"], a: "yours" },
            { sent: "The match was cancelled **as a result** the rain.", wrong: "as a result", options: ["because of", "therefore", "consequently", "thus"], a: "because of" },
            { sent: "How **many** milk do you want?", wrong: "many", options: ["How much", "How often", "How tall", "How long"], a: "How much" },
            { sent: "How **much** books did you read?", wrong: "much", options: ["How many", "How useful", "How important", "How expensive"], a: "How many" },
            { sent: "Call me **whatever** you need help.", wrong: "whatever", options: ["whenever", "whoever", "wherever", "whichever"], a: "whenever" },
            { sent: "Solve the problem **whenever** you can. (Manner context).", wrong: "whenever", options: ["however", "whatever", "wherever", "whoever"], a: "however" },
            { sent: "In **consequence**, English connects cultures. (Opinion context).", wrong: "consequence", options: ["my opinion", "result", "pretext", "evidence"], a: "my opinion" },
            { sent: "I am **rarely** working on a project. (Error: currently)", wrong: "rarely", options: ["currently", "always", "never", "often"], a: "currently" },
            { sent: "The team trained hard; **since** they won.", wrong: "since", options: ["as a result", "because", "due", "as"], a: "as a result" },
            { sent: "Help **yourself** to the food, boys!", wrong: "yourself", options: ["yourselves", "ourselves", "themselves", "itself"], a: "yourselves" },
            { sent: "How **far** is the film? (Duration context).", wrong: "far", options: ["How long", "How tall", "How much", "How useful"], a: "How long" },
            { sent: "The evidence was clear; **because**, the jury found him guilty.", wrong: "because", options: ["thus", "as", "since", "owing to"], a: "thus" },
            { sent: "Whatever I **think** to do, I will need it.", wrong: "think", options: ["decide", "hear", "explain", "agree"], a: "decide" },
            { sent: "English is the language of **discuss** worldwide.", wrong: "discuss", options: ["communication", "topic", "content", "evidence"], a: "communication" },
            { sent: "He has a lot of **opinion** in the company. (Power/Influence context).", wrong: "opinion", options: ["influence", "pretext", "career", "word"], a: "influence" },
            { sent: "We stayed inside **due** the storm.", wrong: "due", options: ["due to", "therefore", "so", "thus"], a: "due to" },
            { sent: "How **important** is the airport? (Distance context).", wrong: "important", options: ["How far", "How tall", "How long", "How many"], a: "How far" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 items) ---
        9: [
            { audio: "How important is English for your future career?", options: ["It is absolutely essential in my opinion.", "It is about five miles away.", "Yes, I am.", "Whoever decides."], a: "It is absolutely essential in my opinion." },
            { audio: "Who taught you how to code?", options: ["I taught myself using online tutorials.", "It is a global company.", "Whichever you like.", "Since 2010."], a: "I taught myself using online tutorials." },
            { audio: "How far is the library from the main gate?", options: ["It’s a ten-minute walk from here.", "It’s very tall and modern.", "Due to the traffic.", "Yes, it is hers."], a: "It’s a ten-minute walk from here." },
            { audio: "Did you enjoy yourself at the international conference?", options: ["Yes, it was very interesting and motivating.", "In my opinion, English is global.", "Whatever happens.", "He taught himself."], a: "Yes, it was very interesting and motivating." },
            { audio: "What happens wherever you go in the world?", options: ["You can always find someone who speaks English.", "The building is very tall.", "Since it was raining.", "Yourself."], a: "You can always find someone who speaks English." },
            { audio: "How often do you discuss career paths in class?", options: ["We debate them once a month.", "They are very effective.", "Whoever finishes first.", "In conclusion."], a: "We debate them once a month." },
            { audio: "Why was the flight to London delayed?", options: ["Owing to the heavy fog at the airport.", "It takes eleven hours.", "Whichever path you choose.", "Themselves."], a: "Owing to the heavy fog at the airport." },
            { audio: "How useful is this software for your essay?", options: ["It helps me organize the content efficiently.", "I study at the college.", "Wherever you sit.", "By myself."], a: "It helps me organize the content efficiently." },
            { audio: "Whose book is on the desk, mine or yours?", options: ["It's mine; I left it there earlier.", "It's how tall.", "Due to the storm.", "Whatever you want."], a: "It's mine; I left it there earlier." },
            { audio: "How long did the professor's lecture last?", options: ["It lasted for over two hours.", "It was about the future of AI.", "Whoever listened learned a lot.", "In the cafeteria."], a: "It lasted for over two hours." },
            { audio: "How tall is the statue in the park?", options: ["It is approximately three meters high.", "It is very traditional.", "Owing to its history.", "Whenever you want to see it."], a: "It is approximately three meters high." },
            { audio: "Did the students introduce themselves to the new teacher?", options: ["Yes, they did it before the lecture started.", "In my opinion, she is nice.", "As a result, they were late.", "Whichever student."], a: "Yes, they did it before the lecture started." },
            { audio: "How much time is left before the exam ends?", options: ["We have exactly fifteen minutes remaining.", "It is a very difficult topic.", "Since 8 AM.", "The exam is ours."], a: "We have exactly fifteen minutes remaining." },
            { audio: "Why did you stay indoors all afternoon?", options: ["Since it was raining, we couldn't go to the pitch.", "It is a large field.", "Whoever wants to play.", "By ourselves."], a: "Since it was raining, we couldn't go to the pitch." },
            { audio: "How often do you check the evidence in your research?", options: ["I review the data every single week.", "The evidence is clear.", "Whatever the reason is.", "Herself."], a: "I review the data every single week." },
            { audio: "Can I take whichever seat is free?", options: ["Yes, sit wherever you prefer.", "It is very far.", "Due to the rules.", "As a result, you are here."], a: "Yes, sit wherever you prefer." },
            { audio: "How important is technology in your life?", options: ["It plays a big role in my daily routine.", "Technology is how tall.", "Since I bought a laptop.", "Whatever you say."], a: "It plays a big role in my daily routine." },
            { audio: "Did the oven turn itself off automatically?", options: ["Yes, it has a built-in safety feature.", "In my opinion, it is hot.", "Therefore, we ate.", "Whichever oven."], a: "Yes, it has a built-in safety feature." },
            { audio: "How useful are subtitles for learning English?", options: ["They are very effective for connecting words to sounds.", "The lyrics are beautiful.", "Whoever watches movies.", "By yourselves."], a: "They are very effective for connecting words to sounds." },
            { audio: "How many countries have you visited by yourself?", options: ["I have traveled to five countries alone.", "Travel is my career.", "Owing to the influence.", "Whatever path."], a: "I have traveled to five countries alone." },
            { audio: "Why are you so confident about the speech?", options: ["Because I practiced it in front of the mirror myself.", "The speech is twenty minutes long.", "Since you are here.", "Whichever topic."], a: "Because I practiced it in front of the mirror myself." },
            { audio: "How far can we walk before it gets dark?", options: ["We can probably reach the oak tree.", "It is how tall.", "Due to the sun.", "Wherever you want."], a: "We can probably reach the oak tree." },
            { audio: "Who creates the most interesting content online?", options: ["Whoever has the most creativity and innovation.", "Content is useful.", "Consequently, they are famous.", "Themselves."], a: "Whoever has the most creativity and innovation." },
            { audio: "How often do you hear from your friends abroad?", options: ["I hear from them whenever they are online.", "They are very far.", "Since last year.", "Whichever friend."], a: "I hear from them whenever they are online." },
            { audio: "What is your opinion on the new career strategy?", options: ["In my opinion, it is very efficient and smart.", "It is about a lot of people.", "Therefore, I agree.", "By yourself."], a: "In my opinion, it is very efficient and smart." },
            { audio: "How much does a new smartphone cost these days?", options: ["It depends on whichever brand you choose.", "It is very useful for coding.", "Owing to technology.", "Yourself."], a: "It depends on whichever brand you choose." },
            { audio: "Why did the sales drop for that company?", options: ["Because the prices rose; consequently, sales dropped.", "The company is global.", "Wherever they sell.", "Whatever."], a: "Because the prices rose; consequently, sales dropped." },
            { audio: "How useful is this method for memorizing words?", options: ["I find it helpful to use flashcards every day.", "The method is hers.", "Since I am learning.", "How long?"], a: "I find it helpful to use flashcards every day." },
            { audio: "How long is the bridge connecting the two cities?", options: ["It is nearly two miles long.", "It is very tall and powerful.", "Due to the engineering.", "Whenever you cross."], a: "It is nearly two miles long." },
            { audio: "Who is responsible for the broken equipment?", options: ["Whoever used it last must take responsibility.", "The equipment is expensive.", "Consequently, it's broken.", "In my opinion."], a: "Whoever used it last must take responsibility." },
            { audio: "How important is communication in a team?", options: ["It is the reason why most projects succeed.", "Communication is global.", "Wherever we work.", "Themselves."], a: "It is the reason why most projects succeed." },
            { audio: "Did you finish the essay by yourself?", options: ["Yes, I wrote the entire content alone.", "The essay is about culture.", "Since it was easy.", "Whichever topic."], a: "Yes, I wrote the entire content alone." },
            { audio: "How often does the sun shine in this part of the world?", options: ["It shines almost every day during the summer.", "The sun is hot.", "Owing to the weather.", "Whatever."], a: "It shines almost every day during the summer." },
            { audio: "Why are you considering a career in science?", options: ["Because I have always been motivated by discovery.", "Science is difficult.", "Since 2020.", "Whichever path."], a: "Because I have always been motivated by discovery." },
            { audio: "How far is the moon from the Earth?", options: ["It is about 384,400 kilometers away.", "It is very bright tonight.", "Due to the universe.", "Whenever it is full."], a: "It is about 384,400 kilometers away." },
            { audio: "Who told you the secret about the project?", options: ["Whoever told you was probably joking.", "The project is theirs.", "Consequently, I know.", "Myself."], a: "Whoever told you was probably joking." },
            { audio: "How useful is a dictionary during a lecture?", options: ["It is very effective for checking unknown words.", "The lecture is long.", "Since I am listening.", "By yourselves."], a: "It is very effective for checking unknown words." },
            { audio: "How long is the queue for the conference?", options: ["There are a lot of people, so it’s quite long.", "The conference is interesting.", "Owing to the popularity.", "Whichever person."], a: "There are a lot of people, so it’s quite long." },
            { audio: "Why did he fail the English test?", options: ["He didn't study; thus, he failed.", "English is global.", "Wherever he goes.", "Himself."], a: "He didn't study; thus, he failed." },
            { audio: "How much evidence is enough to prove the theory?", options: ["You need clear facts; therefore, you need more data.", "The theory is mine.", "Since it is true.", "Whatever."], a: "You need clear facts; therefore, you need more data." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 items) ---
        10: [
            { audio: "Whatever I decide to do, I will need English.", sent: "Whatever I ___ to do, I will ___ English.", blanks: ["decide", "need"] },
            { audio: "English connects cultures owing to its influence.", sent: "English ___ cultures owing to its ___.", blanks: ["connects", "influence"] },
            { audio: "Albert taught himself to code using English tutorials.", sent: "Albert taught ___ to code using English ___.", blanks: ["himself", "tutorials"] },
            { audio: "Wherever you go, you find someone who speaks it.", sent: "Wherever you ___, you find someone who ___ it.", blanks: ["go", "speaks"] },
            { audio: "He studied hard; therefore, he passed the exam.", sent: "He studied ___; therefore, he passed the ___.", blanks: ["hard", "exam"] },
            { audio: "Whoever creates technology uses English.", sent: "___ creates technology uses ___.", blanks: ["Whoever", "English"] },
            { audio: "The match was cancelled due to the heavy rain.", sent: "The match was ___ due to the heavy ___.", blanks: ["cancelled", "rain"] },
            { audio: "I hurt myself while I was cooking dinner.", sent: "I hurt ___ while I was ___ dinner.", blanks: ["myself", "cooking"] },
            { audio: "How far is the airport from the center?", sent: "How ___ is the airport from the ___?", blanks: ["far", "center"] },
            { audio: "In my opinion, English is essential for the future.", sent: "In my ___, English is ___ for the future.", blanks: ["opinion", "essential"] },
            { audio: "They introduced themselves at the start of the conference.", sent: "They ___ themselves at the start of the ___.", blanks: ["introduced", "conference"] },
            { audio: "Prices rose; consequently, sales dropped.", sent: "Prices ___; consequently, sales ___.", blanks: ["rose", "dropped"] },
            { audio: "How tall is that modern building?", sent: "How ___ is that modern ___?", blanks: ["tall", "building"] },
            { audio: "We prepared the project ourselves last night.", sent: "We ___ the project ___ last night.", blanks: ["prepared", "ourselves"] },
            { audio: "Call me whenever you have a question.", sent: "Call me ___ you have a ___.", blanks: ["whenever", "question"] },
            { audio: "She looked at herself in the mirror.", sent: "She ___ at herself in the ___.", blanks: ["looked", "mirror"] },
            { audio: "How long is the movie about innovation?", sent: "How ___ is the movie about ___?", blanks: ["long", "innovation"] },
            { audio: "Since it was raining, we stayed indoors.", sent: "Since it was ___, we stayed ___.", blanks: ["raining", "indoors"] },
            { audio: "How often do you check your notifications?", sent: "How ___ do you check your ___?", blanks: ["often", "notifications"] },
            { audio: "English is useful; therefore, we study it.", sent: "English is ___; therefore, we ___ it.", blanks: ["useful", "study"] },
            { audio: "Whatever happens, don't give up.", sent: "___ happens, don't give ___.", blanks: ["Whatever", "up"] },
            { audio: "How useful is this new software?", sent: "How ___ is this new ___?", blanks: ["useful", "software"] },
            { audio: "The oven turns itself off automatically.", sent: "The oven ___ itself ___ automatically.", blanks: ["turns", "off"] },
            { audio: "Owing to the traffic, I was late.", sent: "Owing to the ___, I was ___.", blanks: ["traffic", "late"] },
            { audio: "Choose whichever color you prefer.", sent: "Choose ___ color you ___.", blanks: ["whichever", "prefer"] },
            { audio: "How much money do you invest?", sent: "How ___ money do you ___?", blanks: ["much", "invest"] },
            { audio: "He taught himself to speak Spanish.", sent: "He ___ himself to ___ Spanish.", blanks: ["taught", "speak"] },
            { audio: "The evidence was clear; thus, he was guilty.", sent: "The evidence was ___; thus, he was ___.", blanks: ["clear", "guilty"] },
            { audio: "How many people are in the hallway?", sent: "How ___ people are in the ___?", blanks: ["many", "hallway"] },
            { audio: "Innovation comes from curiosity and hard work.", sent: "Innovation comes from ___ and ___ work.", blanks: ["curiosity", "hard"] },
            { audio: "Help yourselves to the sandwiches.", sent: "Help ___ to the ___.", blanks: ["yourselves", "sandwiches"] },
            { audio: "How important is global communication?", sent: "How ___ is global ___?", blanks: ["important", "communication"] },
            { audio: "That makes sense because English is popular.", sent: "That makes ___ because English is ___.", blanks: ["sense", "popular"] },
            { audio: "I find it helpful to record my voice.", sent: "I find it ___ to ___ my voice.", blanks: ["helpful", "record"] },
            { audio: "How fast can you run the lap?", sent: "How ___ can you ___ the lap?", blanks: ["fast", "run"] },
            { audio: "She realized the bag was hers.", sent: "She ___ the bag was ___.", blanks: ["realized", "hers"] },
            { audio: "Whoever did this did a great job.", sent: "___ did this did a ___ job.", blanks: ["Whoever", "great"] },
            { audio: "How expensive is that smartwatch?", sent: "How ___ is that ___?", blanks: ["expensive", "smartwatch"] },
            { audio: "Take care of yourself.", sent: "Take ___ of ___.", blanks: ["care", "yourself"] },
            { audio: "English connects you to the future.", sent: "English ___ you to the ___.", blanks: ["connects", "future"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE ---
        11: [
            {
                title: "Career Aspirations",
                lines: [
                    { speaker: "Celine", text: "Albert, I was reading an article about global ___ paths.", options: ["career", "storm"], a: "career" },
                    { speaker: "Albert", text: "In your opinion, ___ is English for someone who wants to work in tech?", options: ["how important", "how tall"], a: "how important" },
                    { speaker: "Celine", text: "It’s vital! ___ creates a new software nowadays relies on English.", options: ["Whoever", "Whichever"], a: "Whoever" },
                    { speaker: "Albert", text: "___, if we want to succeed, we must invest in our skills.", options: ["Consequently", "Since"], a: "Consequently" },
                    { speaker: "Celine", text: "Exactly. I even taught ___ how to use a new language last week.", options: ["myself", "me"], a: "myself" }
                ]
            },
            {
                title: "Choosing a University",
                lines: [
                    { speaker: "John", text: "I am considering several colleges. ___ university I choose, I want a strong innovation department.", options: ["Whichever", "Whatever"], a: "Whichever" },
                    { speaker: "Mary", text: "Have you checked ___ the tuition is at the State College?", options: ["how expensive", "how far"], a: "how expensive" },
                    { speaker: "John", text: "It is quite high. ___, I am looking for a scholarship.", options: ["Therefore", "Due to"], a: "Therefore" },
                    { speaker: "Mary", text: "I find it helpful to discuss options with a counselor. They can ___ the details.", options: ["explain", "agree"], a: "explain" },
                    { speaker: "John", text: "That sounds ___! I will book a meeting.", options: ["interesting", "conclusion"], a: "interesting" }
                ]
            },
            {
                title: "Global Travel",
                lines: [
                    { speaker: "Celine", text: "___ you travel these days, you notice that English is the bridge.", options: ["Wherever", "Whenever"], a: "Wherever" },
                    { speaker: "Albert", text: "True. ___ its popularity, people use it for trade and tourism.", options: ["Owing to", "Thus"], a: "Owing to" },
                    { speaker: "Celine", text: "I’m curious, ___ is the flight from Brazil to England?", options: ["how long", "how tall"], a: "how long" },
                    { speaker: "Albert", text: "It takes about twelve hours. ___ you travel, make sure to take a book.", options: ["However", "As a result"], a: "However" },
                    { speaker: "Celine", text: "I will, so I can enjoy ___ during the journey.", options: ["myself", "yourself"], a: "yourself" }
                ]
            },
            {
                title: "Scientific Evidence",
                lines: [
                    { speaker: "A", text: "Do we have enough ___ to support our idea at the conference?", options: ["evidence", "opinion"], a: "evidence" },
                    { speaker: "B", text: "Yes, the data is clear. ___, we can conclude the method is effective.", options: ["Thus", "Because"], a: "Thus" },
                    { speaker: "A", text: "___ is this tool for analyzing the results?", options: ["How useful", "How often"], a: "How useful" },
                    { speaker: "B", text: "It is the best one we have. We developed the algorithm ___.", options: ["ourselves", "themselves"], a: "ourselves" },
                    { speaker: "A", text: "In my opinion, this is a real ___ moment for the project.", options: ["lightbulb", "rocket"], a: "lightbulb" }
                ]
            },
            {
                title: "A Difficult Decision",
                lines: [
                    { speaker: "Albert", text: "I am frustrated. ___ I try to solve it, the result is always wrong.", options: ["Whatever", "Whichever"], a: "Whatever" },
                    { speaker: "Celine", text: "Don't be so hard on ___. Maybe the problem is the method.", options: ["yourself", "yourselves"], a: "yourself" },
                    { speaker: "Albert", text: "___ I don't understand the formula, I can't finish the exercise.", options: ["Since", "Consequently"], a: "Since" },
                    { speaker: "Celine", text: "___ you have a doubt, you can ask me for an explanation.", options: ["Whenever", "However"], a: "Whenever" },
                    { speaker: "Albert", text: "Thanks! ___ you find a goal, you find a path.", options: ["Wherever", "Whoever"], a: "Wherever" }
                ]
            },
            {
                title: "The Innovation Lecture",
                lines: [
                    { speaker: "Sarah", text: "___ was the lecture about the history of technology?", options: ["How long", "How far"], a: "How long" },
                    { speaker: "John", text: "It was long, but the ___ was fascinating.", options: ["content", "word"], a: "content" },
                    { speaker: "Sarah", text: "___ attended the talk learned a lot about the future of AI.", options: ["Whoever", "Whatever"], a: "Whoever" },
                    { speaker: "John", text: "I agree. ___ of the presentation, I am motivated to study more.", options: ["As a result", "Due to"], a: "As a result" },
                    { speaker: "Sarah", text: "That’s a great ___. It will help your career.", options: ["decision", "pretext"], a: "decision" }
                ]
            },
            {
                title: "Weather and Plans",
                lines: [
                    { speaker: "Mary", text: "The sky looks dark. ___ the storm, we should cancel practice.", options: ["Due to", "Therefore"], a: "Due to" },
                    { speaker: "John", text: "That’s a shame. ___ it rains, our plans are ruined!", options: ["Whenever", "Whichever"], a: "Whenever" },
                    { speaker: "Mary", text: "___ is this practice for the team?", options: ["How important", "How tall"], a: "How important" },
                    { speaker: "John", text: "___ the championship is next week, we need every hour.", options: ["Since", "Thus"], a: "Since" },
                    { speaker: "Mary", text: "We'll have to study the strategy by ___ then.", options: ["ourselves", "themselves"], a: "ourselves" }
                ]
            },
            {
                title: "Language and Identity",
                lines: [
                    { speaker: "Celine", text: "I saw Sarah looking at ___ in the mirror and practicing.", options: ["herself", "itself"], a: "herself" },
                    { speaker: "Albert", text: "___ she wants to achieve, she works hard for it.", options: ["Whatever", "Whoever"], a: "Whatever" },
                    { speaker: "Celine", text: "___, her pronunciation is becoming perfect.", options: ["In my opinion", "As a result"], a: "In my opinion" },
                    { speaker: "Albert", text: "___ does she record her own voice to review her progress?", options: ["How often", "How far"], a: "How often" },
                    { speaker: "Celine", text: "Every day. ___, her confidence is growing rapidly.", options: ["Consequently", "Since"], a: "Consequently" }
                ]
            },
            {
                title: "The Mobile Project",
                lines: [
                    { speaker: "A", text: "How ___ is the office from the city center?", options: ["far", "long"], a: "far" },
                    { speaker: "B", text: "It's near. I can go there ___ I have free time.", options: ["whenever", "whoever"], a: "whenever" },
                    { speaker: "A", text: "The team developed the app ___ without outside help.", options: ["themselves", "ourselves"], a: "themselves" },
                    { speaker: "B", text: "___, they didn't have to share the profits.", options: ["Therefore", "Due to"], a: "Therefore" },
                    { speaker: "A", text: "___ created this idea is definitely a genius.", options: ["Whoever", "Whatever"], a: "Whoever" }
                ]
            },
            {
                title: "Exam Preparation",
                lines: [
                    { speaker: "A", text: "Did you prepare ___ for the final English exam?", options: ["yourself", "himself"], a: "yourself" },
                    { speaker: "B", text: "Yes, I studied all night. ___, I am quite tired now.", options: ["Consequently", "Owing to"], a: "Consequently" },
                    { speaker: "A", text: "___ difficult do you think the grammar section is?", options: ["How", "What"], a: "How" },
                    { speaker: "B", text: "It's not rocket ___. I practiced with reflexive pronouns.", options: ["science", "art"], a: "science" },
                    { speaker: "A", text: "___ studies the most usually gets the highest score.", options: ["Whoever", "Whichever"], a: "Whoever" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER ---
        12: [
            {
                title: "The Wright Brothers' Triumph",
                text: "By the time Wilbur and Orville Wright arrived at Kitty Hawk in 1903, they had already spent years studying the flights of birds and the designs of other inventors. They had been experimenting with gliders since 1899 to understand how to control a machine in the air. Many people at the time believed that human flight was impossible, but the brothers didn't listen to the skeptics. On December 17, 1903, Orville finally flew the 'Flyer' for 12 seconds. Although the flight was short, it changed the world forever. Before that day, humans had only dreamed of soaring through the clouds; after that day, the sky was no longer the limit.",
                questions: [
                    { q: "What had the brothers been doing since 1899?", options: ["Building the first airport", "Experimenting with gliders", "Selling bicycles in Paris"], a: "Experimenting with gliders" },
                    { q: "What was the general opinion about human flight before 1903?", options: ["It was easy", "It was impossible", "Everyone had seen a plane"], a: "It was impossible" },
                    { q: "How long did the first flight last?", options: ["12 minutes", "12 seconds", "12 hours"], a: "12 seconds" },
                    { q: "What had humans done for centuries before 1903?", options: ["Flown to the moon", "Dreamed of soaring through the clouds", "Used smartphones"], a: "Dreamed of soaring through the clouds" },
                    { q: "What does the text imply about the Wright Brothers?", options: ["They were lucky beginners", "They were persistent and ignored skeptics", "They invented the telephone"], a: "They were persistent and ignored skeptics" }
                ]
            },
            {
                title: "Alexander Graham Bell’s Persistence",
                text: "Alexander Graham Bell is widely known as the creator of the telephone, but his journey to success was long and difficult. By 1876, the year he received his patent, he had been working on 'harmonic telegraphy' for several years. He had wanted to find a way to transmit the human voice through wires. Before his famous success, Bell had faced many technical failures. However, he had a 'lightbulb moment' when he realized that a current could represent sound waves. Since that day, communication technology has been changing at an incredible speed. Today, we have moved from landlines to AI-powered smartphones, but it all began with Bell’s determination.",
                questions: [
                    { q: "When did Bell receive his patent?", options: ["1903", "1876", "1879"], a: "1876" },
                    { q: "What had Bell been researching for several years?", options: ["AI models", "Harmonic telegraphy", "Flying machines"], a: "Harmonic telegraphy" },
                    { q: "What happened before Bell’s famous success?", options: ["He became a billionaire", "He faced many technical failures", "He moved to the moon"], a: "He faced many technical failures" },
                    { q: "What was Bell’s 'lightbulb moment'?", options: ["Invented the lightbulb", "Realized current represented sound", "He saw an airplane"], a: "Realized current represented sound" },
                    { q: "How has technology been changing since Bell’s invention?", options: ["Stopped changing", "Changing at an incredible speed", "Becoming more traditional"], a: "Changing at an incredible speed" }
                ]
            },
            {
                title: "The Visionary Blueprints of Da Vinci",
                text: "Leonardo da Vinci was a man who was truly ahead of his time. When modern scientists studied his journals centuries after his death, they discovered that he had designed blueprints for helicopters, tanks, and even a type of solar power. Da Vinci had been observing nature and the laws of physics with extreme precision his entire life. However, because the necessary materials and engines hadn't been developed in the 15th century, he could never build his most advanced machines. Nonetheless, his sketches show that he had understood the basic principles of aerodynamics long before the industrial revolution began. His creativity remains an inspiration for every modern creator.",
                questions: [
                    { q: "When did scientists discover the depth of his designs?", options: ["During his life", "Centuries after his death", "In 1903"], a: "Centuries after his death" },
                    { q: "What had Da Vinci been doing throughout his life?", options: ["Building robots", "Observing nature and physics", "Writing software"], a: "Observing nature and physics" },
                    { q: "Why couldn't he build his advanced machines?", options: ["No pen", "Materials and engines weren't developed", "He was lazy"], a: "Materials and engines weren't developed" },
                    { q: "What did his sketches prove?", options: ["Understood aerodynamics early", "Invented the internet", "Had seen the future"], a: "Understood aerodynamics early" },
                    { q: "Which idiom best describes Leonardo da Vinci?", options: ["Ahead of his time", "Reinventing the wheel", "Rocket science"], a: "Ahead of his time" }
                ]
            },
            {
                title: "The Evolution of Artificial Intelligence",
                text: "Artificial Intelligence (AI) is not as new as many people think. Computer scientists have been developing AI models for several decades. In the 1950s, early researchers had already begun to imagine machines that could 'think.' However, for a long time, the software was too simple and the equipment was too slow. By the time the 21st century arrived, the power of processors had increased significantly. Since then, AI has been evolving rapidly, and it is now integrated into our smartphones and apps. Today, we use AI to solve problems that we had once thought were impossible for machines to handle.",
                questions: [
                    { q: "How long have scientists been developing AI?", options: ["One week", "For several decades", "For centuries"], a: "For several decades" },
                    { q: "What had researchers already done in the 1950s?", options: ["Built a time machine", "Imagined thinking machines", "Invented the telephone"], a: "Imagined thinking machines" },
                    { q: "What was the problem with early AI?", options: ["Too expensive", "Software too simple and slow equipment", "No electricity"], a: "Software too simple and slow equipment" },
                    { q: "What changed in the 21st century?", options: ["People stopped using computers", "Processor power increased significantly", "Wrights flew again"], a: "Processor power increased significantly" },
                    { q: "How is AI used today?", options: ["Reinvent the wheel", "Solve complex problems", "Stop technology"], a: "Solve complex problems" }
                ]
            },
            {
                title: "Thomas Edison’s Laboratory",
                text: "Thomas Edison is often called the greatest inventor in history. Before he successfully created a long-lasting lightbulb in 1879, he had tried over a thousand different materials for the filament. He famously said that he hadn't failed, but that he had simply found a thousand ways that didn't work. Edison and his team had been working in his famous laboratory in Menlo Park for years before they achieved their biggest breakthroughs. Since the invention of the lightbulb, electricity has been powering our homes and changing the way we live. Edison showed us that innovation requires patience and a constant desire to learn.",
                questions: [
                    { q: "What happened in 1879?", options: ["Edison flew", "Edison created the lightbulb", "AI was invented"], a: "Edison created the lightbulb" },
                    { q: "How many materials had Edison tried?", options: ["Ten", "Over a thousand", "None"], a: "Over a thousand" },
                    { q: "What was Edison's philosophy on failure?", options: ["Failure was the end", "Saw it as finding ways that didn't work", "Never failed"], a: "Saw it as finding ways that didn't work" },
                    { q: "How long had the team been working?", options: ["For years", "For one day", "Since 2010"], a: "For years" },
                    { q: "What has electricity been doing since his invention?", options: ["Disappearing", "Powering homes and changing lives", "Reinventing the wheel"], a: "Powering homes and changing lives" }
                ]
            },
            {
                title: "From Blueprints to Reality",
                text: "Every great machine starts with a blueprint. A blueprint is a detailed technical drawing that guides the construction process. For example, before engineers built the first modern computer, they had spent months designing the hardware and writing the basic code. Lately, software engineers have been using digital blueprints to create complex AI models more efficiently. These creators must think about every detail, from the tools they need to the potential errors they might encounter. If they didn't follow the blueprints, many of the gadgets we use today would have failed during development. It is through this careful planning that we have been reaching new frontiers in science.",
                questions: [
                    { q: "What is a blueprint?", options: ["A blue car", "A detailed technical drawing", "A computer virus"], a: "A detailed technical drawing" },
                    { q: "What had engineers done before the first computer?", options: ["Went to the beach", "Spent months designing hardware/code", "Saw a robot"], a: "Spent months designing hardware/code" },
                    { q: "What have software engineers been using lately?", options: ["Paper and pencils", "Digital blueprints for AI", "Ancient tools"], a: "Digital blueprints for AI" },
                    { q: "What must creators think about during development?", options: ["The price", "Tools and potential errors", "Lunch routine"], a: "Tools and potential errors" },
                    { q: "What would happen without blueprints?", options: ["Gadgets more stylish", "Many gadgets would have failed", "Innovation faster"], a: "Many gadgets would have failed" }
                ]
            },
            {
                title: "Ancient Inventions and Modern Life",
                text: "We often think that ancient people had simple technology, but some of their creations were remarkably advanced. For instance, the Romans had developed complex systems for plumbing and architecture! Take the Antikythera mechanism; it was an ancient computer designed to track the stars. It was so advanced that it was practically ahead of its time by a thousand years. Since its discovery, scientists have been trying to understand how the Greeks built such a complicated machine without modern tools. It reminds us that humanity has been innovating since the beginning of history.",
                questions: [
                    { q: "What did the Romans develop?", options: ["Smartphones", "Plumbing and architecture", "AI models"], a: "Plumbing and architecture" },
                    { q: "What was the Antikythera mechanism?", options: ["Type of airplane", "Ancient computer to track stars", "Modern software"], a: "Ancient computer to track stars" },
                    { q: "Why was this mechanism 'ahead of its time'?", options: ["Built last year", "Incredibly advanced for its period", "Made of gold"], a: "Incredibly advanced for its period" },
                    { q: "What have scientists been doing since its discovery?", options: ["Hiding it", "Trying to understand how it was built", "Reinventing the wheel"], a: "Trying to understand how it was built" },
                    { q: "What does the text say about humanity?", options: ["Only started in 1903", "Innovating since the beginning", "Stopping innovation"], a: "Innovating since the beginning" }
                ]
            },
            {
                title: "The Speed of Change",
                text: "In the 21st century, technology has been changing so fast that it is sometimes difficult to keep up. Before the first smartphone was launched in 2007, people had used separate devices for music, photography, and calls. Now, all these tools are inside one small gadget. For young people, or 'digital natives,' using a computer is not rocket science; it is a natural part of life. Nonetheless, we must remember the creators who had worked in cold laboratories and small workshops centuries ago. Their 'lightbulb moments' were the foundation of our modern universe.",
                questions: [
                    { q: "How has technology been changing recently?", options: ["Very slowly", "So fast it's hard to keep up", "It hasn't changed"], a: "So fast it's hard to keep up" },
                    { q: "What had people done before the 2007 smartphone?", options: ["Used separate devices for music/photos", "Lived in space", "Never spoken"], a: "Used separate devices for music/photos" },
                    { q: "What characterizes our current world?", options: ["Digital and connected", "Reinventing the wheel daily", "Going back to 19th century"], a: "Digital and connected" },
                    { q: "What does 'not rocket science' mean?", options: ["Using computers is very easy", "They are all rocket scientists", "They don't like computers"], a: "Using computers is very easy" },
                    { q: "Why should we remember past creators?", options: ["They were very rich", "Their work is the foundation of our world", "They invented the wheel"], a: "Their work is the foundation of our world" }
                ]
            },
            {
                title: "The Logic of Efficiency",
                text: "A productive life relies on being efficient. It is not rocket science: you just need to manage yourself effectively. Whoever spends time planning their day usually reaches their goals much faster. This is because they use their resources without wasting any effort. Consequently, they find time to relax and enjoy themselves after a hard day of work. In my opinion, this method is essential for success.",
                questions: [
                    { q: "What does a productive life rely on?", options: ["Rockets", "Being efficient", "Storms"], a: "Being efficient" },
                    { q: "What is the result of planning your day?", options: ["Reaching goals faster", "Failure", "Being late"], a: "Reaching goals faster" },
                    { q: "How should you manage your time?", options: ["By yourself", "Effectively", "Owing to the sun"], a: "Effectively" },
                    { q: "What is the consequence of being efficient?", options: ["Wasting effort", "Finding time to relax", "Reinventing the wheel"], a: "Finding time to relax" },
                    { q: "What is the author's opinion?", options: ["It's boring", "It's essential for success", "It's difficult"], a: "It's essential for success" }
                ]
            },
            {
                title: "Technological Influence",
                text: "English has a massive influence on the world of tech. Whenever a new app is developed, the code is usually written in English first. This creates a global language of communication for programmers. Whichever country you are in, if you know the English terms, you can understand how a machine works. It is truly the foundation of our digital universe.",
                questions: [
                    { q: "What has a massive influence on tech?", options: ["Burgers", "English", "Costumes"], a: "English" },
                    { q: "When is the code written in English?", options: ["Whenever a new app is developed", "Only on Sundays", "Since 1903"], a: "Whenever a new app is developed" },
                    { q: "What does this create for programmers?", options: ["A global language", "A difficult barrier", "A sandwich"], a: "A global language" },
                    { q: "Where can you understand machines if you know English?", options: ["Only in USA", "Whichever country you are in", "Only in labs"], a: "Whichever country you are in" },
                    { q: "What is English called in the text?", options: ["A rocket", "The foundation of our digital universe", "A blueprint"], a: "The foundation of our digital universe" }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER (Context) ---
        13: [
            {
                title: "The Wright Brothers’ Success",
                audio: "Before the Wright Brothers flew their first powered airplane in 1903, they had spent years studying the flights of birds. They had been building and testing gliders since 1899 at Kitty Hawk. Many people had told them that human flight was impossible, but they didn't listen to the skeptics. By the time Orville finally took off, the brothers had already solved most of the control problems. This persistent experimentation is why we can fly across the world today.",
                questions: [
                    { q: "What had the brothers been doing since 1899?", options: ["Traveling the ocean", "Building and testing gliders", "Writing software"], a: "Building and testing gliders" },
                    { q: "What had skeptics told the brothers?", options: ["Plane was too expensive", "Human flight was impossible", "Birds couldn't fly"], a: "Human flight was impossible" },
                    { q: "When did the first flight happen?", options: ["1899", "1903", "1876"], a: "1903" },
                    { q: "What had the brothers done before takeoff?", options: ["Solved control problems", "Bought a computer", "Reinvented the wheel"], a: "Solved control problems" },
                    { q: "How has technology changed since then?", options: ["Stopped changing", "Changed incredibly fast", "Become traditional"], a: "Changed incredibly fast" }
                ]
            },
            {
                title: "Communication Evolution",
                audio: "Communication has undergone a massive transformation. For centuries, people had used letters and messengers to send information. By the time Alexander Graham Bell invented the telephone, he had been researching sound waves for over a decade. He had already developed the blueprint for the telephone when he had a lightbulb moment regarding electricity. Lately, we have been using the internet and smartphones for interaction.",
                questions: [
                    { q: "What did people use for communication for centuries?", options: ["AI models", "Letters and messengers", "Telegrams"], a: "Letters and messengers" },
                    { q: "How long had Bell been researching sound waves?", options: ["One year", "For over a decade", "Two days"], a: "For over a decade" },
                    { q: "What had Bell developed before his lightbulb moment?", options: ["A computer", "The telephone blueprint", "A new airplane"], a: "The telephone blueprint" },
                    { q: "What have we been using lately for interaction?", options: ["Landlines only", "The internet and smartphones", "Paper blueprints"], a: "The internet and smartphones" },
                    { q: "What was impossible before the 19th century?", options: ["Writing code", "Hearing a voice from miles away", "Seeing a robot"], a: "Hearing a voice from miles away" }
                ]
            },
            {
                title: "The Lab Routine",
                audio: "The lead scientist looked very tired this morning. He had been working in the laboratory all night to finish the AI model. Before he took a break, he had already checked the code for errors five times. He realized that the equipment had broken down twice during the experiment. Since Monday, the team has been trying to find a solution to the hardware problem. It is not rocket science, but it requires patience.",
                questions: [
                    { q: "Why did the scientist look tired?", options: ["Working all night", "Playing games", "Was at a party"], a: "Working all night" },
                    { q: "How many times had he checked the code?", options: ["One time", "Five times", "One hundred times"], a: "Five times" },
                    { q: "What had happened to the equipment during the experiment?", options: ["Finished task", "Broken down twice", "Flew away"], a: "Broken down twice" },
                    { q: "What has the team been doing since Monday?", options: ["Looking for a solution", "Sleeping", "Building a house"], a: "Looking for a solution" },
                    { q: "What is the scientist's opinion about the work?", options: ["It is impossible", "Not rocket science, but requires patience", "Too simple"], a: "Not rocket science, but requires patience" }
                ]
            },
            {
                title: "Da Vinci the Visionary",
                audio: "Leonardo da Vinci was a creator who was truly ahead of his time. He had designed complex machines long before the technology to build them existed. He had been observing the anatomy of birds and the laws of the universe with incredible detail. By the time he died, he had already drawn blueprints for a helicopter and a tank. Since the 20th century, engineers have been using his ideas to build working models.",
                questions: [
                    { q: "Why was Da Vinci 'ahead of his time'?", options: ["Always late", "Designed machines technology couldn't build yet", "Lived in 1903"], a: "Designed machines technology couldn't build yet" },
                    { q: "What had he been observing with detail?", options: ["AI models", "Bird anatomy and laws of universe", "Computer code"], a: "Bird anatomy and laws of universe" },
                    { q: "What had he drawn before he died?", options: ["A smartphone", "Blueprints for a helicopter and tank", "A telephone"], a: "Blueprints for a helicopter and tank" },
                    { q: "What have engineers been doing since the 20th century?", options: ["Using his ideas to build models", "Forgotten his name", "Reinventing the wheel"], a: "Using his ideas to build models" },
                    { q: "Where can innovation start according to the text?", options: ["Only in a lab", "With a simple drawing and a dream", "In a factory"], a: "With a simple drawing and a dream" }
                ]
            },
            {
                title: "The Software Update",
                audio: "The company has been developing this software since 2015. Before they launched the current version, they had already tested ten different AI models. The programmers had been writing the code for two years before they finally found the best solution. However, yesterday they realized they had forgotten to update the security protocols. Now, the team has been working all day to fix the error.",
                questions: [
                    { q: "How long has the company been developing the software?", options: ["Since 1903", "Since 2015", "Since yesterday"], a: "Since 2015" },
                    { q: "What had they done before launching the version?", options: ["Tested ten AI models", "Sold the company", "Built an airplane"], a: "Tested ten AI models" },
                    { q: "How long had the programmers been writing the code?", options: ["Two months", "Two years", "Two decades"], a: "Two years" },
                    { q: "What had they forgotten to do?", options: ["Buy a new computer", "Update the security protocols", "To eat lunch"], a: "Update the security protocols" },
                    { q: "What has the team been doing all day today?", options: ["Working to fix the error", "Celebrating", "Gone home"], a: "Working to fix the error" }
                ]
            },
            {
                title: "Exploration and Discovery",
                audio: "Before we sent the first man to space, scientists had been studying the stars for centuries. They had already built powerful telescopes to look deep into the universe. By the time the first rocket left the Earth, researchers had already calculated the distance to the moon. Lately, space agencies have been sending robots to other planets to seek signs of life. Innovation is the tool that allows us to dream big.",
                questions: [
                    { q: "How long have scientists been studying the stars?", options: ["For a few decades", "For centuries", "Since 2020"], a: "For centuries" },
                    { q: "What had they built before sending a man to space?", options: ["Airplanes", "Powerful telescopes", "Smartwatches"], a: "Powerful telescopes" },
                    { q: "What had researchers calculated before the first rocket launch?", options: ["Price of the moon", "Distance to the moon", "Name of the creator"], a: "Distance to the moon" },
                    { q: "What have space agencies been doing lately?", options: ["Sending robots to other planets", "Stopped exploring", "Reinventing the wheel"], a: "Sending robots to other planets" },
                    { q: "According to the text, what is innovation?", options: ["A difficult code", "The tool that allows us to dream big", "A lightbulb"], a: "The tool that allows us to dream big" }
                ]
            },
            {
                title: "The Industrial Revolution",
                audio: "The Industrial Revolution was a period of massive innovation. Before it began, people had worked mostly by hand in small workshops. They had been using simple tools for generations. Then, James Watt invented the steam engine. By 1850, factories had already replaced many traditional methods. Since then, the world has been moving toward total automation. Workers faced challenges because they had to adapt quickly.",
                questions: [
                    { q: "How had people worked before the Industrial Revolution?", options: ["With AI models", "By hand in small workshops", "In big factories"], a: "By hand in small workshops" },
                    { q: "What had they been using for generations?", options: ["Computers", "Simple tools", "Airplanes"], a: "Simple tools" },
                    { q: "What had happened by 1850?", options: ["Factories replaced methods", "Innovation had stopped", "People started using smartphones"], a: "Factories replaced methods" },
                    { q: "What has the world been doing since the revolution?", options: ["Moving toward total automation", "Going back to simple tools", "Reinventing the wheel"], a: "Moving toward total automation" },
                    { q: "Why was it a challenge for the workers?", options: ["They were bored", "They had to adapt to a new environment quickly", "Machines were too slow"], a: "They had to adapt to a new environment quickly" }
                ]
            },
            {
                title: "The Ancient Computer",
                audio: "The Greeks had built a computer over two thousand years ago called the Antikythera mechanism. Before it was discovered, scientists had no idea that such advanced equipment existed in the ancient world. The Greeks had designed a complex system of gears that was ahead of its time by centuries. Since its discovery, researchers have been using X-rays to look inside. They try to understand how it was created.",
                questions: [
                    { q: "When was the ancient computer built?", options: ["In 1903", "Over two thousand years ago", "In the 18th century"], a: "Over two thousand years ago" },
                    { q: "Where was the Antikythera mechanism found?", options: ["In a library", "In a shipwreck", "In a laboratory"], a: "In a shipwreck" },
                    { q: "What had the Greeks been using it for?", options: ["To write code", "To track the movements of planets", "To fly"], a: "To track the movements of planets" },
                    { q: "What have researchers been using lately to study it?", options: ["Blueprints", "X-rays", "Smartwatches"], a: "X-rays" },
                    { q: "Why is the machine so impressive?", options: ["It is made of software", "It is sophisticated and built without modern tools", "It uses AI"], a: "It is sophisticated and built without modern tools" }
                ]
            },
            {
                title: "The Global Impact of English",
                audio: "In the modern world, English has become a vital resource. Owing to its global influence, international companies use it as their primary language. Consequently, if you wish to reach your full potential, you must invest time in improving your skills. Whatever field you choose, English will be essential. In my opinion, students who teach themselves are always ahead of their time.",
                questions: [
                    { q: "Why do companies use English?", options: ["Easy to learn", "Owing to its global influence", "It's traditional"], a: "Owing to its global influence" },
                    { q: "What is a consequence of English being global?", options: ["People stop studying", "Must invest in learning to reach potential", "Tech fails"], a: "Must invest in learning to reach potential" },
                    { q: "Where is English important?", options: ["Burger shops", "Any field of research and innovation", "Only museums"], a: "Any field of research and innovation" },
                    { q: "What does speaker think of self-taught students?", options: ["Wasting time", "They are ahead of their time", "Very lonely"], a: "They are ahead of their time" },
                    { q: "What is the main topic?", options: ["History of ovens", "Importance of English for the future", "How to use a mirror"], a: "Importance of English for the future" }
                ]
            },
            {
                title: "Scientific Research",
                audio: "The researcher is working on a new task in the laboratory. He has been collecting evidence to support his theory for months. Since the project began, he has been using digital blueprints to speed up the process. He hasn't finished yet, but he has been making great progress. Innovation requires a systematic method and a lot of patience.",
                questions: [
                    { q: "What is the researcher doing?", options: ["Cooking burgers", "Working on a new task", "Buying a costume"], a: "Working on a new task" },
                    { q: "What has he been collecting?", options: ["Pretexts", "Evidence", "Blueprints"], a: "Evidence" },
                    { q: "What has he been using lately?", options: ["Traditional tools", "Digital blueprints", "Sandwiches"], a: "Digital blueprints" },
                    { q: "Has he finished the project?", options: ["Yes", "No", "He failed"], a: "No" },
                    { q: "What does innovation require?", options: ["Rocket science", "Method and patience", "Luck"], a: "Method and patience" }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT ---
        14: [
            {
                title: "My Science Project",
                text: "I am very proud of my science project. I [1] (have been working / had been working) on it all week. Before the presentation today, I [2] (had already tested / have already tested) the robot ten times. My teacher was surprised because she [3] (had never seen / has never seen) a project so detailed. I explained that I [4] (had researched / have been researching) AI models for months. It was not [5] (rocket science / reinventing the wheel), but it was very difficult!",
                answers: ["have been working", "had already tested", "had never seen", "had researched", "rocket science"]
            },
            {
                title: "The History of Flight",
                text: "The Wright Brothers are legendary. By the time they built the 'Flyer', they [1] (had been experimenting / have been experimenting) with gliders for a long time. They [2] (had failed / have failed) many times before they finally succeeded. Since that day in 1903, the way we travel [3] (has been changing / had been changing) fast. Before their invention, people [4] (had only dreamed / have only dreamed) of flying. They were truly [5] (ahead of their time / reinventing the wheel).",
                answers: ["had been experimenting", "had failed", "has been changing", "had only dreamed", "ahead of their time"]
            },
            {
                title: "The Broken Machine",
                text: "We had a problem in the laboratory yesterday. The main [1] (machine / universe) had broken down before we could finish. We [2] (had been waiting / have been waiting) for the results all afternoon. The engineer realized that he [3] (had forgotten / has forgotten) to check the electricity. Lately, the [4] (equipment / code) has been giving us many problems. We need to find a [5] (solution / creator) soon!",
                answers: ["machine", "had been waiting", "had forgotten", "equipment", "solution"]
            },
            {
                title: "A Moment of Inspiration",
                text: "Thomas Edison [1] (had tried / has tried) many different materials before he invented the lightbulb. He [2] (had been researching / has been researching) for years in his lab. Suddenly, he had a [3] (lightbulb moment / rocket science) and found the right filament. Since then, his [4] (invention / creator) has been changing the world. It’s amazing how one person's [5] (innovation / equipment) can power our homes today.",
                answers: ["had tried", "had been researching", "lightbulb moment", "invention", "innovation"]
            },
            {
                title: "Software Development",
                text: "My sister is a programmer. She [1] (has been coding / had been coding) a new game since January. Before she started this project, she [2] (had developed / has developed) three other apps. She says it is [3] (not rocket science / reinventing the wheel), but she still works very hard. She [4] (had already written / has already written) most of the code, but she still needs to test the [5] (software / universe) for errors.",
                answers: ["has been coding", "had developed", "not rocket science", "had already written", "software"]
            },
            {
                title: "The Architect's Blueprint",
                text: "The engineer looked at the [1] (blueprint / robot) carefully. He [2] (had been designing / has been designing) the building for months. Before he began the construction, he [3] (had already consulted / have already consulted) other experts. Lately, he [4] (has been using / had been using) new AI models to check for mistakes. He doesn't want to [5] (reinvent the wheel / be ahead of his time); he just wants to do a good job.",
                answers: ["blueprint", "had been designing", "had already consulted", "has been using", "reinvent the wheel"]
            },
            {
                title: "Exploring the Universe",
                text: "Humans [1] (have been exploring / had been exploring) the stars for a long time. Before we had modern telescopes, astronomers [2] (had studied / have studied) the sky with simple tools. They [3] (had already discovered / have already discovered) many planets before the 20th century. Lately, technology [4] (has been evolving / had been evolving) so fast that we can see deep into the [5] (universe / machine).",
                answers: ["have been exploring", "had studied", "had already discovered", "has been evolving", "universe"]
            },
            {
                title: "Alexander Graham Bell",
                text: "When Alexander Graham Bell [1] (invented / has invented) the telephone, he changed history. He [2] (had been working / has been working) on the project for years. Before his success, many other [3] (creators / blueprints) had failed to send voices through wires. Since his discovery, communication [4] (has been connecting / had been connecting) people everywhere. It was a true [5] (lightbulb moment / rocket science) for humanity.",
                answers: ["invented", "had been working", "creators", "has been connecting", "lightbulb moment"]
            },
            {
                title: "Effective Study",
                text: "In my opinion, English is [1] (essential / boring). [2] (Whoever / Whichever) wants a career must learn it. [3] (Wherever / Whenever) you travel, you find speakers. [4] (Owing to / Therefore) its popularity, it removes barriers. You can even teach [5] (yourself / himself) with the right motivation.",
                answers: ["essential", "Whoever", "Wherever", "Owing to", "yourself"]
            },
            {
                title: "Problem Solving",
                text: "When you have a problem, you must [1] (consider / ignore) all options. Don't [2] (reinvent the wheel / have a point). Using an [3] (efficient / expensive) strategy saves time. You can solve it [4] (however / whoever) you like. [5] (Consequently / Due to), you will achieve your goals.",
                answers: ["consider", "reinvent the wheel", "efficient", "however", "Consequently"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT ---
        15: [
            {
                title: "Project Progress",
                audio: "Albert had already finished the science project before Celine arrived. He has been studying all day long. He is very proud of the robot he built.",
                text: "Albert had already [1] the science project before Celine [2]. He has been [3] all day long. He is very proud of the [4] he [5].",
                answers: ["finished", "arrived", "studying", "robot", "built"]
            },
            {
                title: "Modern Evolution",
                audio: "Technology has been changing very fast lately. Before 1903, the Wright Brothers had experimented with gliders. They had dreamed of flying for centuries. Now, we use modern software.",
                text: "Technology has been [1] very fast lately. Before 1903, the Wright Brothers had [2] with gliders. They had [3] of flying for [4]. Now, we use modern [5].",
                answers: ["changing", "experimented", "dreamed", "centuries", "software"]
            },
            {
                title: "Bell’s History",
                audio: "Alexander Graham Bell invented the telephone in 1876. He had worked on it for years. Lately, we have been using smartphones. Innovation never stops in our universe.",
                text: "Alexander Graham Bell [1] the telephone in 1876. He had [2] on it for years. Lately, we have been [3] smartphones. Innovation [4] stops in our [5].",
                answers: ["invented", "worked", "using", "never", "universe"]
            },
            {
                title: "The Morning Wait",
                audio: "I have been waiting for the bus since 8 AM. I had forgotten my umbrella at home. It has been raining all morning. I wish I had checked the weather.",
                text: "I have been [1] for the bus since 8 AM. I had [2] my umbrella at home. It has been [3] all morning. I wish I had [4] the [5].",
                answers: ["waiting", "forgotten", "raining", "checked", "weather"]
            },
            {
                title: "The Designer's Work",
                audio: "The engineer had designed the blueprint before he built the machine. He has been coding for three hours. He had a lightbulb moment when he solved the problem.",
                text: "The engineer had [1] the [2] before he built the machine. He has been [3] for three hours. He had a [4] moment when he [5] the problem.",
                answers: ["designed", "blueprint", "coding", "lightbulb", "solved"]
            },
            {
                title: "The Medical Breakthrough",
                audio: "The scientist has been researching a cure since January. She had discovered the error before the test. She had tried many times. Now, she has succeeded in her work.",
                text: "The scientist has been [1] a cure since January. She had [2] the error before the [3]. She had [4] many times. Now, she has [5] in her work.",
                answers: ["researching", "discovered", "test", "tried", "succeeded"]
            },
            {
                title: "Simple Tech",
                audio: "It is not rocket science to use this equipment. You must follow the code. We have been exploring new ideas. We had already found the answer.",
                text: "It is not [1] science to use this [2]. You must follow the [3]. We have been [4] new ideas. We had [5] found the answer.",
                answers: ["rocket", "equipment", "code", "exploring", "already"]
            },
            {
                title: "Visionary Science",
                audio: "Da Vinci was ahead of his time. He had drawn plans for a helicopter. Engineers have been studying his work. He had understood the laws of physics.",
                text: "Da Vinci was [1] of his time. He had [2] plans for a [3]. Engineers have been [4] his work. He had [5] the laws of physics.",
                answers: ["ahead", "drawn", "helicopter", "studying", "understood"]
            },
            {
                title: "Language Foundation",
                audio: "English is a global language. It has a lot of influence on careers. Whatever you decide to do, you will need it. In my opinion, it is essential.",
                text: "English is a [1] language of communication. It has a lot of [2] on our future [3]. [4] you decide to do, you will [5] it.",
                answers: ["global", "influence", "careers", "Whatever", "need"]
            },
            {
                title: "Lab Cleanup",
                audio: "The match was cancelled due to the storm. Therefore, we stayed indoors. We prepared the project ourselves.",
                text: "The match was [1] due to the [2]. [3], we stayed [4]. We prepared the project [5].",
                answers: ["cancelled", "storm", "Therefore", "indoors", "ourselves"]
            }
        ]
    }
});