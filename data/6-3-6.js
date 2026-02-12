/**
 * REACH English - LESSON DATA 6-3-6
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "6-3-6", 
    grade: "6th Grade",       
    bimester: "3",   
    chapter: "6",    
    chapterTitle: "My Busy Week", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "In this lesson, you will learn to:<br><br>• Describe your daily activities and habits.<br>• Say the days of the week.<br>• Tell and ask the time.<br>• Use adverbs of frequency (always, sometimes, never).<br>• Use expressions of frequency (every day, once a week).<br>• Ask \"How often\" and \"What time\" questions.",
            welcome: "Hello, busy bees! It's Mr. D!<br><br>Welcome to \"My Busy Week\"! Do you have a busy life? Between school, homework, and fun, we do a lot of things! Today, we are going to organize our time. We will learn how to talk about our daily routines, tell the time perfectly, and say how often we do things. Get your schedules ready, and let's manage our time together!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Describe your daily activities and habits. Say the days of the week. Tell and ask the time. Use adverbs of frequency, always, sometimes, and never. Use expressions of frequency, like every day and once a week. Ask How often and What time questions.",
                welcome: "TTS: Hello, busy bees! It's Mr. D! Welcome to My Busy Week! Do you have a busy life? Between school, homework, and fun, we do a lot of things! Today, we are going to organize our time. We will learn how to talk about our daily routines, tell the time perfectly, and say how often we do things. Get your schedules ready, and let's manage our time together!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of a school bell ringing and students packing bags. Albert and Celine are walking out of class looking at their schedules.", 
            contextAudio: "audio/6-3-6/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "Phew! What a long day. [What time is it](tooltip:what-time-is-it)?" 
                },
                { 
                    speaker: "Celine", 
                    text: "It is [half past three](tooltip:half-past-three). I [go home](tooltip:go-home) now. I [always](tooltip:always) [have a snack](tooltip:have-breakfast) at [4 PM](tooltip:pm)." 
                },
                { 
                    speaker: "Albert", 
                    text: "I [usually](tooltip:usually) [play video games](tooltip:play) after school. What do you do on [Fridays](tooltip:friday)?" 
                },
                { 
                    speaker: "Celine", 
                    text: "I have [piano classes](tooltip:guitar-piano). I [never](tooltip:never) [watch TV](tooltip:watch-tv) on [Fridays](tooltip:friday)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Wow, you are busy! [How often](tooltip:how-often) do you [relax](tooltip:relax)?" 
                },
                { 
                    speaker: "Celine", 
                    text: "On [weekends](tooltip:weekend)! I [sleep](tooltip:sleep) a lot on [Sundays](tooltip:sunday)." 
                }
            ]
        },

        // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
        // ======================================================
        {
            title: "Say the word",
            subPages: [
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],

            // 2A: Vocabulary Lists (Tabbed)
            areas: [
                {
                    title: "Daily Activities (Verbs)",
                    audio: "TTS: Wake up. Get up. Have breakfast. Go to school. Have classes. Study. Have lunch. Go home. Do homework. Watch TV. Watch movies. Play video games. Play sports. Listen to music. Use the computer. Use the internet. Have dinner. Read a book. Go to bed. Sleep. Brush teeth. Take a shower. Take a bath. Help at home.",
                    items: [
                        { term: "Wake up", trans: "acordar" },
                        { term: "Get up", trans: "levantar-se" },
                        { term: "Have breakfast", trans: "tomar café da manhã" },
                        { term: "Go to school", trans: "ir para a escola" },
                        { term: "Have classes / Study", trans: "ter aulas / estudar" },
                        { term: "Have lunch", trans: "almoçar" },
                        { term: "Go home", trans: "ir para casa" },
                        { term: "Do homework", trans: "fazer lição de casa" },
                        { term: "Watch TV / movies", trans: "assistir TV / filmes" },
                        { term: "Play (video games/sports)", trans: "jogar (videogame/esportes)" },
                        { term: "Listen to music", trans: "ouvir música" },
                        { term: "Use the computer/internet", trans: "usar o computador/internet" },
                        { term: "Have dinner", trans: "jantar" },
                        { term: "Read a book", trans: "ler um livro" },
                        { term: "Go to bed / Sleep", trans: "ir para a cama / dormir" },
                        { term: "Brush teeth", trans: "escovar os dentes" },
                        { term: "Take a shower/bath", trans: "tomar banho/ducha" },
                        { term: "Help at home", trans: "ajudar em casa" }
                    ]
                },
                {
                    title: "Days of the Week & Time",
                    audio: "TTS: Monday. Tuesday. Wednesday. Thursday. Friday. Saturday. Sunday. Week. Weekend. Weekdays.",
                    items: [
                        { term: "Monday", trans: "Segunda-feira" },
                        { term: "Tuesday", trans: "Terça-feira" },
                        { term: "Wednesday", trans: "Quarta-feira" },
                        { term: "Thursday", trans: "Quinta-feira" },
                        { term: "Friday", trans: "Sexta-feira" },
                        { term: "Saturday", trans: "Sábado" },
                        { term: "Sunday", trans: "Domingo" },
                        { term: "Week", trans: "Semana" },
                        { term: "Weekend", trans: "Fim de semana" },
                        { term: "Weekdays", trans: "Dias de semana" }
                    ]
                },
                {
                    title: "Adverbs of Frequency",
                    audio: "TTS: Always. Usually. Often. Sometimes. Rarely. Seldom. Never.",
                    items: [
                        { term: "Always", trans: "sempre (100%)" },
                        { term: "Usually", trans: "geralmente / usualmente (~90%)" },
                        { term: "Often", trans: "frequentemente / muitas vezes (~70%)" },
                        { term: "Sometimes", trans: "às vezes (~50%)" },
                        { term: "Rarely / Seldom", trans: "raramente (~10%)" },
                        { term: "Never", trans: "nunca (0%)" }
                    ]
                },
                {
                    title: "Expressions of Frequency",
                    audio: "TTS: Every day. Once a week. Twice a month. Three times a year. On Mondays.",
                    items: [
                        { term: "Every day", trans: "todo dia / todos os dias" },
                        { term: "Once a week", trans: "uma vez por semana" },
                        { term: "Twice a month", trans: "duas vezes por mês" },
                        { term: "Three times a year", trans: "três vezes por ano" },
                        { term: "On Mondays", trans: "às segundas-feiras" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: What time is it? It's o'clock. It's half past. What time do you? How often? She is always punctual. I have a busy life.",
                    items: [
                        { term: "What time is it?", trans: "Que horas são?" },
                        { term: "It's ... o'clock", trans: "São ... em ponto." },
                        { term: "It's half past...", trans: "São ... e meia." },
                        { term: "What time do you...?", trans: "Que horas você...?" },
                        { term: "How often...?", trans: "Com que frequência...?" },
                        { term: "She is always punctual.", trans: "Ela é sempre pontual." },
                        { term: "I have a busy life.", trans: "Eu tenho uma vida ocupada." }
                    ]
                }
            ], // This closes the areas array

            // 2B: Context Examples (Grouped & Tabbed) - PART 1
            exampleGroups: [
                {
                    title: "Daily Activities (Verbs)",
                    audio: "TTS: I wake up at 6:00 AM. She gets up late on Sundays. We have breakfast together. He goes to school by bus. They study English. I have lunch at 12:00. After school, I go home. She does homework in her room. We watch TV at night. He plays soccer. I listen to rock music. Do you use the computer? We have dinner at 7 PM. She reads a book in bed. I sleep early. He brushes his teeth twice a day. I take a shower in the morning. I help my mom.",
                    items: [
                        { term: "Wake up", sent: "I wake up at 6:00 AM.", trans: "<span style='color:#0077b6'>Eu acordo às 6:00 da manhã.</span>" },
                        { term: "Get up", sent: "She gets up late on Sundays.", trans: "<span style='color:#0077b6'>Ela levanta tarde aos domingos.</span>" },
                        { term: "Have breakfast", sent: "We have breakfast together.", trans: "<span style='color:#0077b6'>Nós tomamos café da manhã juntos.</span>" },
                        { term: "Go to school", sent: "He goes to school by bus.", trans: "<span style='color:#0077b6'>Ele vai para a escola de ônibus.</span>" },
                        { term: "Study", sent: "They study English.", trans: "<span style='color:#0077b6'>Eles estudam inglês.</span>" },
                        { term: "Have lunch", sent: "I have lunch at 12:00.", trans: "<span style='color:#0077b6'>Eu almoço ao meio-dia.</span>" },
                        { term: "Go home", sent: "After school, I go home.", trans: "<span style='color:#0077b6'>Depois da escola, eu vou para casa.</span>" },
                        { term: "Do homework", sent: "She does homework in her room.", trans: "<span style='color:#0077b6'>Ela faz a lição de casa no quarto dela.</span>" },
                        { term: "Watch TV", sent: "We watch TV at night.", trans: "<span style='color:#0077b6'>Nós assistimos TV à noite.</span>" },
                        { term: "Play", sent: "He plays soccer.", trans: "<span style='color:#0077b6'>Ele joga futebol.</span>" },
                        { term: "Listen", sent: "I listen to rock music.", trans: "<span style='color:#0077b6'>Eu ouço rock.</span>" },
                        { term: "Use", sent: "Do you use the computer?", trans: "<span style='color:#0077b6'>Você usa o computador?</span>" },
                        { term: "Have dinner", sent: "We have dinner at 7 PM.", trans: "<span style='color:#0077b6'>Nós jantamos às 19h.</span>" },
                        { term: "Read", sent: "She reads a book in bed.", trans: "<span style='color:#0077b6'>Ela lê um livro na cama.</span>" },
                        { term: "Sleep", sent: "I sleep early.", trans: "<span style='color:#0077b6'>Eu durmo cedo.</span>" },
                        { term: "Brush teeth", sent: "He brushes his teeth twice a day.", trans: "<span style='color:#0077b6'>Ele escova os dentes duas vezes ao dia.</span>" },
                        { term: "Take a shower", sent: "I take a shower in the morning.", trans: "<span style='color:#0077b6'>Eu tomo banho de manhã.</span>" },
                        { term: "Help", sent: "I help my mom.", trans: "<span style='color:#0077b6'>Eu ajudo minha mãe.</span>" }
                    ]
                },
                {
                    title: "Days of the Week & Time",
                    audio: "TTS: I have gym on Monday. Tuesday is after Monday. We eat pizza on Wednesday. I study history on Thursday. Friday is my favorite day. I play on Saturday. We relax on Sunday. I love the weekend.",
                    items: [
                        { term: "Monday", sent: "I have gym on Monday.", trans: "<span style='color:#0077b6'>Eu tenho ginástica na segunda-feira.</span>" },
                        { term: "Tuesday", sent: "Tuesday is after Monday.", trans: "<span style='color:#0077b6'>Terça-feira é depois de segunda-feira.</span>" },
                        { term: "Wednesday", sent: "We eat pizza on Wednesday.", trans: "<span style='color:#0077b6'>Nós comemos pizza na quarta-feira.</span>" },
                        { term: "Thursday", sent: "I study history on Thursday.", trans: "<span style='color:#0077b6'>Eu estudo história na quinta-feira.</span>" },
                        { term: "Friday", sent: "Friday is my favorite day.", trans: "<span style='color:#0077b6'>Sexta-feira é meu dia favorito.</span>" },
                        { term: "Saturday", sent: "I play on Saturday.", trans: "<span style='color:#0077b6'>Eu brinco no sábado.</span>" },
                        { term: "Sunday", sent: "We relax on Sunday.", trans: "<span style='color:#0077b6'>Nós relaxamos no domingo.</span>" },
                        { term: "Weekend", sent: "I love the weekend.", trans: "<span style='color:#0077b6'>Eu amo o fim de semana.</span>" }
                    ]
                },
                {
                    title: "Adverbs of Frequency",
                    audio: "TTS: I always brush my teeth. She usually walks to school. We often eat pasta. He sometimes plays games. I rarely drink soda. They never arrive late.",
                    items: [
                        { term: "Always", sent: "I always brush my teeth.", trans: "<span style='color:#0077b6'>Eu sempre escovo meus dentes.</span>" },
                        { term: "Usually", sent: "She usually walks to school.", trans: "<span style='color:#0077b6'>Ela geralmente caminha para a escola.</span>" },
                        { term: "Often", sent: "We often eat pasta.", trans: "<span style='color:#0077b6'>Nós frequentemente comemos massa.</span>" },
                        { term: "Sometimes", sent: "He sometimes plays games.", trans: "<span style='color:#0077b6'>Ele às vezes joga jogos.</span>" },
                        { term: "Rarely", sent: "I rarely drink soda.", trans: "<span style='color:#0077b6'>Eu raramente bebo refrigerante.</span>" },
                        { term: "Never", sent: "They never arrive late.", trans: "<span style='color:#0077b6'>Eles nunca chegam atrasados.</span>" }
                    ]
                },
                {
                    title: "Expressions of Frequency",
                    audio: "TTS: I study every day. I swim once a week.",
                    items: [
                        { term: "Every day", sent: "I study every day.", trans: "<span style='color:#0077b6'>Eu estudo todo dia.</span>" },
                        { term: "Once a week", sent: "I swim once a week.", trans: "<span style='color:#0077b6'>Eu nado uma vez por semana.</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: What time is it? It is 2 o'clock. How often do you read? Every night.",
                    items: [
                        { term: "What time is it?", sent: "'What time is it?' 'It's 2 o'clock.'", trans: "<span style='color:#0077b6'>'Que horas são?' 'São 2 horas.'</span>" },
                        { term: "How often...?", sent: "'How often do you read?' 'Every night.'", trans: "<span style='color:#0077b6'>'Com que frequência você lê?' 'Toda noite.'</span>" }
                    ]
                }
            ], // This closes the exampleGroups array

            // 2C: Practice MCQ Drills
            drills: [
                {
                    type: "mcq",
                    q: "Choose the correct translation for 'Wake up':",
                    options: [
                        { t: "Dormir", c: false },
                        { t: "Acordar", c: true },
                        { t: "Estudar", c: false },
                        { t: "Jantar", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I _______ my teeth every morning.'",
                    options: [
                        { t: "wash", c: false },
                        { t: "brush", c: true },
                        { t: "watch", c: false },
                        { t: "play", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What day comes after Friday?",
                    options: [
                        { t: "Sunday", c: false },
                        { t: "Thursday", c: false },
                        { t: "Saturday", c: true },
                        { t: "Monday", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Saturday and Sunday are the...",
                    options: [
                        { t: "Weekdays", c: false },
                        { t: "Weekend", c: true },
                        { t: "Month", c: false },
                        { t: "Year", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which word means '100% of the time'?",
                    options: [
                        { t: "Never", c: false },
                        { t: "Sometimes", c: false },
                        { t: "Always", c: true },
                        { t: "Rarely", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which word means '0% of the time'?",
                    options: [
                        { t: "Always", c: false },
                        { t: "Often", c: false },
                        { t: "Never", c: true },
                        { t: "Usually", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I have English classes twice _______ week.'",
                    options: [
                        { t: "a", c: true },
                        { t: "in", c: false },
                        { t: "the", c: false },
                        { t: "on", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Question: '_______ time is it?'",
                    options: [
                        { t: "Who", c: false },
                        { t: "Where", c: false },
                        { t: "What", c: true },
                        { t: "How", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Question: '_______ often do you play sports?'",
                    options: [
                        { t: "What", c: false },
                        { t: "When", c: false },
                        { t: "How", c: true },
                        { t: "Who", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Time: 'It is 3 _______.' (3:00)",
                    options: [
                        { t: "hour", c: false },
                        { t: "time", c: false },
                        { t: "o'clock", c: true },
                        { t: "clock", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Time: 'It is 2:30.' -> 'It is _______.'",
                    options: [
                        { t: "half past two", c: true },
                        { t: "quarter to two", c: false },
                        { t: "two and thirty", c: false },
                        { t: "half two", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What day comes before Tuesday?",
                    options: [
                        { t: "Monday", c: true },
                        { t: "Wednesday", c: false },
                        { t: "Sunday", c: false },
                        { t: "Friday", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I usually _______ my homework after school.'",
                    options: [
                        { t: "make", c: false },
                        { t: "do", c: true },
                        { t: "play", c: false },
                        { t: "study", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which frequency adverb means 'about 50% of the time'?",
                    options: [
                        { t: "Always", c: false },
                        { t: "Sometimes", c: true },
                        { t: "Rarely", c: false },
                        { t: "Never", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'She _______ late for class. She is very punctual.'",
                    options: [
                        { t: "is always", c: false },
                        { t: "is never", c: true },
                        { t: "never is", c: false },
                        { t: "always is", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Frequency: 'I visit my friends three _______ a year.'",
                    options: [
                        { t: "time", c: false },
                        { t: "times", c: true },
                        { t: "day", c: false },
                        { t: "week", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Time: '8:00 AM' is in the _______.",
                    options: [
                        { t: "Evening", c: false },
                        { t: "Afternoon", c: false },
                        { t: "Morning", c: true },
                        { t: "Night", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Time: '10:00 PM' is in the _______.",
                    options: [
                        { t: "Morning", c: false },
                        { t: "Night", c: true },
                        { t: "Noon", c: false },
                        { t: "Afternoon", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which day is in the middle of the week (Wednesday)?",
                    options: [
                        { t: "Quarta-feira", c: true },
                        { t: "Quinta-feira", c: false },
                        { t: "Terça-feira", c: false },
                        { t: "Segunda-feira", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I _______ (tomar banho) in the morning.'",
                    options: [
                        { t: "take a shower", c: true },
                        { t: "clean the house", c: false },
                        { t: "go to bed", c: false },
                        { t: "have breakfast", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Expression: 'I have a _______ life. I study and play sports.'",
                    options: [
                        { t: "lazy", c: false },
                        { t: "busy", c: true },
                        { t: "slow", c: false },
                        { t: "quiet", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which word means 'frequentemente' (~70%)?",
                    options: [
                        { t: "Rarely", c: false },
                        { t: "Often", c: true },
                        { t: "Never", c: false },
                        { t: "Usually", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'We _______ (almoçar) at 12 PM.'",
                    options: [
                        { t: "have breakfast", c: false },
                        { t: "have dinner", c: false },
                        { t: "have lunch", c: true },
                        { t: "have classes", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What do you do on _______ (Sábados)?",
                    options: [
                        { t: "Saturdays", c: true },
                        { t: "Sundays", c: false },
                        { t: "Mondays", c: false },
                        { t: "Tuesdays", c: false }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 3: FOLLOW THE PATTERN (Grammar)
        // ======================================================
        {
            title: "Follow the Pattern",
            subPages: [
                { id: "step3a", label: "3A: Patterns" },
                { id: "step3b", label: "3B: Examples" },
                { id: "step3c", label: "3C: Practice" }
            ],

            // 3A: Explanations (Tabbed)
            patterns: [
                {
                    title: "Telling the Time",
                    audio: "TTS: We use What time is it? to ask the time. To answer, use It is. Use AT for specific times. It is 7 o'clock. It is half past 8. The live stream starts at 8 PM.",
                    explanation: "We use 'What time is it?' to ask the time. To say the time, we use 'It is...'. Use the preposition AT for specific times.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos 'What time is it?' para perguntar as horas. Para dizer as horas, usamos 'It is...'. Usamos a preposição AT para momentos e horas específicas.)</span>",
                    samples: [
                        { en: "O'clock: Exact hour (e.g., It is 7 o'clock).", pt: "<span style='color:#0077b6'>(São 7 em ponto).</span>" },
                        { en: "Half past: 30 minutes (e.g., It is half past 8).", pt: "<span style='color:#0077b6'>(São 8 e meia).</span>" },
                        { en: "Digital: Hour + Minutes (e.g., It is six forty).", pt: "<span style='color:#0077b6'>(São seis e quarenta).</span>" },
                        { en: "Preposition AT: I wake up at 6:00.", pt: "<span style='color:#0077b6'>(Eu acordo às 6:00).</span>" },
                        { en: "AM: Morning / PM: Afternoon-Evening.", pt: "<span style='color:#0077b6'>(AM: Manhã / PM: Tarde-Noite).</span>" }
                    ]
                },
                {
                    title: "Days of the Week (ON)",
                    audio: "TTS: To talk about routines on specific days, use the preposition ON plus the day. I play soccer on Mondays. She has class on Tuesdays. We relax on weekends.",
                    explanation: "To talk about routines on specific days, we use ON + the day. If we do it every week on that day, we make the day plural (add -s).<br><br><span style='color:#0077b6; font-style:italic;'>(Para falar de rotinas em dias específicos, usamos ON + o dia. Se fazemos isso 'toda' semana naquele dia, colocamos o dia no plural.)</span>",
                    samples: [
                        { en: "I play soccer on Mondays. (= Every Monday)", pt: "<span style='color:#0077b6'>(Eu jogo futebol às segundas-feiras).</span>" },
                        { en: "She has English class on Tuesdays.", pt: "<span style='color:#0077b6'>(Ela tem aula de inglês às terças-feiras).</span>" },
                        { en: "We relax on weekends.", pt: "<span style='color:#0077b6'>(Nós relaxamos nos fins de semana).</span>" }
                    ]
                },
                {
                    title: "Adverbs Position",
                    audio: "TTS: Adverbs go before main verbs like play or study, but they go after the verb To Be. I always brush my teeth. My friends never call me late. I am always happy. They are usually tired.",
                    explanation: "The position of adverbs (always, usually, etc.) changes depending on the verb.<br><br><span style='color:#0077b6; font-style:italic;'>(A posição dos advérbios muda dependendo do verbo.)</span>",
                    samples: [
                        { en: "Rule A: BEFORE main verbs (e.g., I always brush my teeth).", pt: "<span style='color:#0077b6'>(Antes de verbos principais).</span>" },
                        { en: "Rule B: AFTER the verb 'To Be' (e.g., I am always happy).", pt: "<span style='color:#0077b6'>(Depois do verbo To Be).</span>" }
                    ]
                },
                {
                    title: "WH Questions",
                    audio: "TTS: Use specific question words for routines. What time asks for a clock time. How often asks for frequency. When asks for a day or time.",
                    explanation: "We use specific question words to ask about routines.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos palavras interrogativas específicas para perguntar sobre rotinas.)</span>",
                    samples: [
                        { en: "What time does he wake up? (Clock time).", pt: "<span style='color:#0077b6'>(Que horas ele acorda?)</span>" },
                        { en: "How often do you study? (Frequency).", pt: "<span style='color:#0077b6'>(Com que frequência você estuda?)</span>" },
                        { en: "When do they play? (Day or time).", pt: "<span style='color:#0077b6'>(Quando eles jogam?)</span>" }
                    ]
                }
            ],

            // 3B: Natural Examples (Dialogues Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Telling Time & Days",
                    audio: "audio/6-3-6/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "What time is it, Celine?", 
                            pt: "<span style='color:#0077b6'><i>Que horas são, Celine?</i></span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "It is half past four. I have piano class on Fridays at 5 PM.", 
                            pt: "<span style='color:#0077b6'><i>São quatro e meia. Eu tenho aula de piano às sextas-feiras às 17h.</i></span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Adverbs of Frequency (Main Verb)",
                    audio: "audio/6-3-6/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "How often do you clean your room?", 
                            pt: "<span style='color:#0077b6'><i>Com que frequência você limpa seu quarto?</i></span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I usually clean it on Saturdays. But my brother never cleans his room!", 
                            pt: "<span style='color:#0077b6'><i>Eu geralmente limpo aos sábados. Mas meu irmão nunca limpa o quarto dele!</i></span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Adverbs of Frequency (Verb To Be)",
                    audio: "audio/6-3-6/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Why is Mrs. Canales here so early?", 
                            pt: "<span style='color:#0077b6'><i>Por que a Sra. Canales está aqui tão cedo?</i></span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "She is always punctual. She is never late for class.", 
                            pt: "<span style='color:#0077b6'><i>Ela é sempre pontual. Ela nunca está atrasada para a aula.</i></span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 4: Expressions of Frequency",
                    audio: "audio/6-3-6/step3_dialogue4.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Do you play sports?", 
                            pt: "<span style='color:#0077b6'><i>Você pratica esportes?</i></span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Yes. I swim twice a week. And you?", 
                            pt: "<span style='color:#0077b6'><i>Sim. Eu nado duas vezes por semana. E você?</i></span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I run every day in the morning.", 
                            pt: "<span style='color:#0077b6'><i>Eu corro todo dia de manhã.</i></span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ Drills (24 Exercises, 4 Options Each)
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Time Preposition: Complete: 'I go to school _____ 7 o'clock.'",
                    options: [
                        { t: "in", c: false },
                        { t: "on", c: false },
                        { t: "at", c: true },
                        { t: "to", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Days Preposition: Complete: 'We visit grandma _____ Sundays.'",
                    options: [
                        { t: "at", c: false },
                        { t: "in", c: false },
                        { t: "on", c: true },
                        { t: "the", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Adverb Position (Main Verb): Choose the correct sentence.",
                    options: [
                        { t: "I go always to the park.", c: false },
                        { t: "Always I go to the park.", c: false },
                        { t: "I always go to the park.", c: true },
                        { t: "I go to the park always.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Adverb Position (Verb To Be): Choose the correct sentence.",
                    options: [
                        { t: "She is usually happy.", c: true },
                        { t: "She usually is happy.", c: false },
                        { t: "She is happy usually.", c: false },
                        { t: "Usually she is happy.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "WH Questions: '_______ do you wake up?' 'At 6 AM.'",
                    options: [
                        { t: "How often", c: false },
                        { t: "What time", c: true },
                        { t: "Where", c: false },
                        { t: "Who", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "WH Questions: '_______ do you wash the car?' 'Once a week.'",
                    options: [
                        { t: "What time", c: false },
                        { t: "When", c: false },
                        { t: "How often", c: true },
                        { t: "What", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Subject Nouns + Adverbs: 'The bus _______ late.'",
                    options: [
                        { t: "never is", c: false },
                        { t: "is never", c: true },
                        { t: "never are", c: false },
                        { t: "are never", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Subject Nouns + Routine: 'My parents _______ TV in the evening.'",
                    options: [
                        { t: "watches often", c: false },
                        { t: "often watch", c: true },
                        { t: "often watches", c: false },
                        { t: "watch often", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Frequency Expressions: 'I brush my teeth _______.'",
                    options: [
                        { t: "always day", c: false },
                        { t: "every day", c: true },
                        { t: "once day", c: false },
                        { t: "day every", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Time: 'It is 2:30.' -> 'It is _______.'",
                    options: [
                        { t: "half past two", c: true },
                        { t: "quarter to two", c: false },
                        { t: "two and thirty", c: false },
                        { t: "half two", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions: 'I have breakfast _______ 8:00 AM.'",
                    options: [
                        { t: "on", c: false },
                        { t: "at", c: true },
                        { t: "in", c: false },
                        { t: "by", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions: 'We don't have school _______ Saturdays.'",
                    options: [
                        { t: "in", c: false },
                        { t: "at", c: false },
                        { t: "on", c: true },
                        { t: "the", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions: 'What do you do _______ Fridays?'",
                    options: [
                        { t: "on", c: true },
                        { t: "in", c: false },
                        { t: "at", c: false },
                        { t: "to", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Adverb Position (Main Verb): 'My brother _______ in the morning.'",
                    options: [
                        { t: "never studies", c: true },
                        { t: "studies never", c: false },
                        { t: "is never study", c: false },
                        { t: "never is study", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Adverb Position (Verb To Be): 'I _______ tired after school.'",
                    options: [
                        { t: "am always", c: true },
                        { t: "always am", c: false },
                        { t: "always", c: false },
                        { t: "am ever", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Adverb Position (Verb To Be): 'You _______ late for soccer.'",
                    options: [
                        { t: "usually are", c: false },
                        { t: "are usually", c: true },
                        { t: "usually", c: false },
                        { t: "is usually", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "WH Questions: '_______ do you wash your hair?' 'Three times a week.'",
                    options: [
                        { t: "What time", c: false },
                        { t: "How often", c: true },
                        { t: "When", c: false },
                        { t: "How many", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "WH Questions: '_______ does the movie start?' 'At 9 PM.'",
                    options: [
                        { t: "What time", c: true },
                        { t: "How often", c: false },
                        { t: "Who", c: false },
                        { t: "Where", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "WH Questions: '_______ is your piano class?' 'On Monday.'",
                    options: [
                        { t: "When", c: true },
                        { t: "What time", c: false },
                        { t: "How often", c: false },
                        { t: "How", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Telling Time: 'It is 10:30.' -> 'It is _______.'",
                    options: [
                        { t: "ten o'clock", c: false },
                        { t: "half past ten", c: true },
                        { t: "half past eleven", c: false },
                        { t: "ten and half", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Telling Time: 'It is 5:00.' -> 'It is _______.'",
                    options: [
                        { t: "five time", c: false },
                        { t: "five o'clock", c: true },
                        { t: "half past five", c: false },
                        { t: "five hour", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Verb Forms: 'She _______ her teeth three times a day.'",
                    options: [
                        { t: "brush", c: false },
                        { t: "brushes", c: true },
                        { t: "brushing", c: false },
                        { t: "brushs", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Verb Forms: 'We _______ to the gym twice a week.'",
                    options: [
                        { t: "go", c: true },
                        { t: "goes", c: false },
                        { t: "going", c: false },
                        { t: "gos", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Adverb Position: 'My father _______ punctual.'",
                    options: [
                        { t: "is always", c: true },
                        { t: "always is", c: false },
                        { t: "is never", c: false }, // distractor
                        { t: "always", c: false }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 4: SHADOWING (Recording)
        // ======================================================
        {
            title: "Can you say that again?",
            sentences: [
                { 
                    text: "I always wake up at six o'clock.<br><small style='color:#0077b6'>(Eu sempre acordo às seis horas.)</small>", 
                    audio: "TTS: I always wake up at six o'clock.", 
                    arrow: "↘" 
                },
                { 
                    text: "What time is it?<br><small style='color:#0077b6'>(Que horas são?)</small>", 
                    audio: "TTS: What time is it?", 
                    arrow: "↘" 
                },
                { 
                    text: "It is half past two.<br><small style='color:#0077b6'>(São duas e meia.)</small>", 
                    audio: "TTS: It is half past two.", 
                    arrow: "↘" 
                },
                { 
                    text: "She is never late for school.<br><small style='color:#0077b6'>(Ela nunca está atrasada para a escola.)</small>", 
                    audio: "TTS: She is never late for school.", 
                    arrow: "↘" 
                },
                { 
                    text: "I play video games on Saturdays.<br><small style='color:#0077b6'>(Eu jogo videogame aos sábados.)</small>", 
                    audio: "TTS: I play video games on Saturdays.", 
                    arrow: "↘" 
                },
                { 
                    text: "How often do you study?<br><small style='color:#0077b6'>(Com que frequência você estuda?)</small>", 
                    audio: "TTS: How often do you study?", 
                    arrow: "↗" 
                }
            ]
        },

        // ======================================================
        // STEP 5: LISTENING
        // ======================================================
        {
            title: "Are you following me?",
            drills: [
                // Drill 1: Typing (TTS)
                {
                    type: "typing",
                    instruction: "Listen to Albert describing his morning. Type the missing words. <br><small style='color:#0077b6'>(Ouça Albert descrevendo sua manhã. Digite as palavras que faltam.)</small>",
                    audio: "TTS: I have a busy morning. I get up at 7 AM. I have breakfast with my family. Then, I go to school by bus.",
                    text: "I have a busy morning. I [get up] at 7 AM. I [have] breakfast with my family. Then, I [go] to school by bus."
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation and choose the correct option. <br><small style='color:#0077b6'>(Ouça a conversa e escolha a opção correta.)</small>",
                    audio: "audio/6-3-6/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Celine: What do you do on [Sundays | Saturdays], Albert?", 
                            a: "Sundays" 
                        },
                        { 
                            q: "Albert: I usually relax. I [watch | play] TV.", 
                            a: "watch" 
                        },
                        { 
                            q: "Celine: Do you [study | sleep]?", 
                            a: "study" 
                        },
                        { 
                            q: "Albert: No, [never | always]. I study on weekdays.", 
                            a: "never" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer. <br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta correta.)</small>",
                    audio: "TTS: How often do you brush your teeth?",
                    options: [
                        { t: "I brush my teeth at 7 PM.", c: false },
                        { t: "I brush my teeth in the kitchen.", c: false },
                        { t: "I always brush my teeth.", c: true },
                        { t: "No, I don't.", c: false }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 6: READING
        // ======================================================
        {
            title: "Get the story",
            texts: [
                {
                    title: "Narration: Mrs. Canales' Routine",
                    audio: "TTS: Mrs. Canales is a teacher. She has a very organized routine. She always gets up at 6:00 AM. She has coffee and reads a book. She goes to school at 7:30 AM. She teaches English classes every morning. She has lunch at school with other teachers. She usually goes home at 4:00 PM. In the evening, she corrects homework. She is tired but happy. || audio/6-3-6/p6_text1.mp3",
                    body: "Mrs. Canales is a teacher. She has a very organized routine. She always gets up at 6:00 AM. She has coffee and reads a book. She goes to school at 7:30 AM. She teaches English classes every morning. She has lunch at school with other teachers. She usually goes home at 4:00 PM. In the evening, she corrects homework. She is tired but happy.",
                    questions: [
                        { 
                            q: "What time does Mrs. Canales get up?", 
                            options: [ 
                                {t: "At 7:30 AM", c: false}, 
                                {t: "At 6:00 AM", c: true}, 
                                {t: "At 4:00 PM", c: false},
                                {t: "At 7:00 AM", c: false}
                            ] 
                        },
                        { 
                            q: "What does she do in the evening?", 
                            options: [ 
                                {t: "She watches TV.", c: false}, 
                                {t: "She goes to school.", c: false}, 
                                {t: "She corrects homework.", c: true},
                                {t: "She reads a book.", c: false}
                            ] 
                        },
                        { 
                            q: "How often does she teach English classes?", 
                            options: [ 
                                {t: "Every morning", c: true}, 
                                {t: "Once a week", c: false}, 
                                {t: "Never", c: false},
                                {t: "On Sundays", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: Busy Tuesday",
                    audio: "audio/6-3-6/p6_text2.mp3",
                    body: "<b>Albert:</b> Hi Celine. Can we play video games today?<br><b>Celine:</b> Hi Albert. No, I can't. Today is Tuesday.<br><b>Albert:</b> What do you do on Tuesdays?<br><b>Celine:</b> I have a busy day. I go to school in the morning. In the afternoon, I have piano lessons at 2 PM.<br><b>Albert:</b> And after that?<br><b>Celine:</b> I usually do my homework. I only play games on weekends.",
                    questions: [
                        { 
                            q: "What day is it in the dialogue?", 
                            options: [ 
                                {t: "Monday", c: false}, 
                                {t: "Friday", c: false}, 
                                {t: "Sunday", c: false},
                                {t: "Tuesday", c: true}
                            ] 
                        },
                        { 
                            q: "What does Celine have at 2 PM?", 
                            options: [ 
                                {t: "School", c: false}, 
                                {t: "Piano lessons", c: true}, 
                                {t: "Video games", c: false},
                                {t: "Homework", c: false}
                            ] 
                        },
                        { 
                            q: "When does Celine play games?", 
                            options: [ 
                                {t: "On Tuesdays", c: false}, 
                                {t: "Every day", c: false}, 
                                {t: "On weekends", c: true},
                                {t: "In the morning", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: My Lazy Cat",
                    audio: "TTS: My cat's name is Luna. She has a very funny routine. She sleeps almost all day. She usually wakes up to eat in the morning. Then, she sleeps on the sofa. In the afternoon, she plays in the garden for ten minutes. She never chases birds. At night, she sleeps on my bed. Luna is very lazy, but I love her. || audio/6-3-6/p6_text3.mp3",
                    body: "My cat's name is Luna. She has a very funny routine. She sleeps almost all day. She usually wakes up to eat in the morning. Then, she sleeps on the sofa. In the afternoon, she plays in the garden for ten minutes. She never chases birds. At night, she sleeps on my bed. Luna is very lazy, but I love her.",
                    questions: [
                        { 
                            q: "How often does Luna sleep?", 
                            options: [ 
                                {t: "Rarely", c: false}, 
                                {t: "Almost all day", c: true}, 
                                {t: "Never", c: false},
                                {t: "Once a week", c: false}
                            ] 
                        },
                        { 
                            q: "What does she do in the afternoon?", 
                            options: [ 
                                {t: "She eats.", c: false}, 
                                {t: "She chases birds.", c: false}, 
                                {t: "She plays in the garden.", c: true},
                                {t: "She watches TV.", c: false}
                            ] 
                        },
                        { 
                            q: "Does Luna chase birds?", 
                            options: [ 
                                {t: "Yes, always.", c: false}, 
                                {t: "Sometimes.", c: false}, 
                                {t: "Usually.", c: false},
                                {t: "No, never.", c: true}
                            ] 
                        }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 7: QUICK DRILLS (Mixed Types)
        // ======================================================
        {
            title: "Monkey see, Monkey do",
            drills: [
                // Drill 1: Matching (Day -> Translation)
                {
                    type: "matching",
                    instruction: "Match the day of the week with its Portuguese translation. <br><small style='color:#0077b6'>(Combine o dia da semana com sua tradução em português.)</small>",
                    pairs: [
                        { left: "Monday", right: "Segunda-feira", val: "1" },
                        { left: "Wednesday", right: "Quarta-feira", val: "2" },
                        { left: "Thursday", right: "Quinta-feira", val: "3" },
                        { left: "Sunday", right: "Domingo", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Unscramble)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence. <br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "always / I / breakfast / have / .",
                    correct: "I always have breakfast ."
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the question.",
                    sentence: "time / What / is / ? / it",
                    correct: "What time is it ?"
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the sentence.",
                    sentence: "usually / late / is / She / .",
                    correct: "She is usually late ."
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the question.",
                    sentence: "you / often / How / do / study / ?",
                    correct: "How often do you study ?"
                },
                // Drill 3: Odd One Out (Ensuring 4 items per group)
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group. <br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Monday", c: false },
                        { t: "Tuesday", c: false },
                        { t: "January", c: true }, // Month vs Days
                        { t: "Friday", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Always", c: false },
                        { t: "Never", c: false },
                        { t: "Sometimes", c: false },
                        { t: "Happy", c: true } // Adjective vs Adverbs
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Wake up", c: false },
                        { t: "Bed", c: true }, // Noun vs Verbs
                        { t: "Sleep", c: false },
                        { t: "Eat", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "One", c: false },
                        { t: "Two", c: false },
                        { t: "Twice", c: true }, // Frequency vs Numbers
                        { t: "Three", c: false }
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown with 4 options)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence. <br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "I get up [at | on | never | often] 7 o'clock.", a: "at" },
                        { q: "We play soccer [on | at | never | often] Saturdays.", a: "on" },
                        { q: "He hates fish. He [never | at | on | often] eats sushi.", a: "never" },
                        { q: "How [often | at | on | never] do you read?", a: "often" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: My typical Friday routine. Now it's your turn! Describe your typical Friday routine.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Minha rotina de sexta-feira. Agora é sua vez! Descreva sua rotina típica de sexta-feira.)</span></small>",
            example: "\"On Fridays, I get up at 6:30 AM. I go to school in the morning. I usually have lunch at home. In the afternoon, I do my homework. In the evening, I play video games with my friends.\"<br><br><small><span style='color:#0077b6'>(\"Nas sextas-feiras, eu acordo às 6h30 da manhã. Eu vou para a escola de manhã. Eu geralmente almoço em casa. À tarde, eu faço minha lição de casa. À noite, eu jogo videogame com meus amigos.\")</span></small>",
            prompts: [
                "What time do you get up? <br><small><span style='color:#0077b6'>(A que horas você acorda?)</span></small>",
                "What do you do in the morning/afternoon? <br><small><span style='color:#0077b6'>(O que você faz de manhã/à tarde?)</span></small>",
                "What do you do in the evening? <br><small><span style='color:#0077b6'>(O que você faz à noite?)</span></small>",
                "Use at least one adverb of frequency (always, usually, etc.). <br><small><span style='color:#0077b6'>(Use pelo menos um advérbio de frequência (always, usually, etc.).)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Verbs and Days/Time)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Daily Activities (Verbs) ---
                { 
                    term: "Wake up", 
                    definition: "To stop sleeping and open your eyes.", 
                    defTrans: "acordar",
                    example: "I wake up at 6:00 AM.", 
                    audioFront: "TTS: Wake up",
                    audioBack: "TTS: I wake up at 6:00 AM." 
                },
                { 
                    term: "Get up", 
                    definition: "To rise from bed after sleeping.", 
                    defTrans: "levantar-se",
                    example: "She gets up late on Sundays.", 
                    audioFront: "TTS: Get up",
                    audioBack: "TTS: She gets up late on Sundays." 
                },
                { 
                    term: "Have breakfast", 
                    definition: "To eat the first meal of the day.", 
                    defTrans: "tomar café da manhã",
                    example: "We have breakfast in the kitchen.", 
                    audioFront: "TTS: Have breakfast",
                    audioBack: "TTS: We have breakfast in the kitchen." 
                },
                { 
                    term: "Go to school", 
                    definition: "To travel to the place where you study.", 
                    defTrans: "ir para a escola",
                    example: "He goes to school by bus.", 
                    audioFront: "TTS: Go to school",
                    audioBack: "TTS: He goes to school by bus." 
                },
                { 
                    term: "Have classes / Study", 
                    definition: "To attend lessons or spend time learning a subject.", 
                    defTrans: "ter aulas / estudar",
                    example: "I have classes all morning.", 
                    audioFront: "TTS: Have classes or Study",
                    audioBack: "TTS: I have classes all morning." 
                },
                { 
                    term: "Have lunch", 
                    definition: "To eat a meal in the middle of the day.", 
                    defTrans: "almoçar",
                    example: "They have lunch at school.", 
                    audioFront: "TTS: Have lunch",
                    audioBack: "TTS: They have lunch at school." 
                },
                { 
                    term: "Go home", 
                    definition: "To return to the place where you live.", 
                    defTrans: "ir para casa",
                    example: "I go home at 4 PM.", 
                    audioFront: "TTS: Go home",
                    audioBack: "TTS: I go home at 4 PM." 
                },
                { 
                    term: "Do homework", 
                    definition: "To do schoolwork at home.", 
                    defTrans: "fazer lição de casa",
                    example: "She does homework after school.", 
                    audioFront: "TTS: Do homework",
                    audioBack: "TTS: She does homework after school." 
                },
                { 
                    term: "Watch TV / movies", 
                    definition: "To look at television programs or films.", 
                    defTrans: "assistir TV / filmes",
                    example: "We watch movies on Fridays.", 
                    audioFront: "TTS: Watch TV or movies",
                    audioBack: "TTS: We watch movies on Fridays." 
                },
                { 
                    term: "Play (video games/sports)", 
                    definition: "To engage in games or physical activities for fun.", 
                    defTrans: "jogar (videogame/esportes)",
                    example: "He plays video games every day.", 
                    audioFront: "TTS: Play video games or sports",
                    audioBack: "TTS: He plays video games every day." 
                },
                { 
                    term: "Listen to music", 
                    definition: "To pay attention to sounds or songs.", 
                    defTrans: "ouvir música",
                    example: "I listen to music on the bus.", 
                    audioFront: "TTS: Listen to music",
                    audioBack: "TTS: I listen to music on the bus." 
                },
                { 
                    term: "Use the computer/internet", 
                    definition: "To operate a computer or browse the web.", 
                    defTrans: "usar o computador/internet",
                    example: "Do you use the computer for homework?", 
                    audioFront: "TTS: Use the computer or internet",
                    audioBack: "TTS: Do you use the computer for homework?" 
                },
                { 
                    term: "Have dinner", 
                    definition: "To eat the main meal of the evening.", 
                    defTrans: "jantar",
                    example: "We have dinner at 7 PM.", 
                    audioFront: "TTS: Have dinner",
                    audioBack: "TTS: We have dinner at 7 PM." 
                },
                { 
                    term: "Read a book", 
                    definition: "To look at and comprehend written words in a book.", 
                    defTrans: "ler um livro",
                    example: "She reads a book before bed.", 
                    audioFront: "TTS: Read a book",
                    audioBack: "TTS: She reads a book before bed." 
                },
                { 
                    term: "Go to bed / Sleep", 
                    definition: "To get into bed to rest or sleep.", 
                    defTrans: "ir para a cama / dormir",
                    example: "I go to bed early.", 
                    audioFront: "TTS: Go to bed or Sleep",
                    audioBack: "TTS: I go to bed early." 
                },
                { 
                    term: "Brush teeth", 
                    definition: "To clean your teeth with a toothbrush.", 
                    defTrans: "escovar os dentes",
                    example: "Always brush your teeth.", 
                    audioFront: "TTS: Brush teeth",
                    audioBack: "TTS: Always brush your teeth." 
                },
                { 
                    term: "Take a shower/bath", 
                    definition: "To wash your body with water.", 
                    defTrans: "tomar banho/ducha",
                    example: "I take a shower in the morning.", 
                    audioFront: "TTS: Take a shower or bath",
                    audioBack: "TTS: I take a shower in the morning." 
                },
                { 
                    term: "Help at home", 
                    definition: "To assist with household chores.", 
                    defTrans: "ajudar em casa",
                    example: "I help at home on weekends.", 
                    audioFront: "TTS: Help at home",
                    audioBack: "TTS: I help at home on weekends." 
                },

                // --- Days of the Week & Time ---
                { 
                    term: "Monday", 
                    definition: "The first day of the working week.", 
                    defTrans: "Segunda-feira",
                    example: "School starts on Monday.", 
                    audioFront: "TTS: Monday",
                    audioBack: "TTS: School starts on Monday." 
                },
                { 
                    term: "Tuesday", 
                    definition: "The second day of the working week.", 
                    defTrans: "Terça-feira",
                    example: "I have piano on Tuesday.", 
                    audioFront: "TTS: Tuesday",
                    audioBack: "TTS: I have piano on Tuesday." 
                },
                { 
                    term: "Wednesday", 
                    definition: "The third day of the working week.", 
                    defTrans: "Quarta-feira",
                    example: "Wednesday is the middle of the week.", 
                    audioFront: "TTS: Wednesday",
                    audioBack: "TTS: Wednesday is the middle of the week." 
                },
                { 
                    term: "Thursday", 
                    definition: "The fourth day of the working week.", 
                    defTrans: "Quinta-feira",
                    example: "We play soccer on Thursday.", 
                    audioFront: "TTS: Thursday",
                    audioBack: "TTS: We play soccer on Thursday." 
                },
                { 
                    term: "Friday", 
                    definition: "The fifth day of the working week.", 
                    defTrans: "Sexta-feira",
                    example: "Friday is my favorite day.", 
                    audioFront: "TTS: Friday",
                    audioBack: "TTS: Friday is my favorite day." 
                },
                { 
                    term: "Saturday", 
                    definition: "The sixth day of the week, part of the weekend.", 
                    defTrans: "Sábado",
                    example: "I relax on Saturday.", 
                    audioFront: "TTS: Saturday",
                    audioBack: "TTS: I relax on Saturday." 
                },
                { 
                    term: "Sunday", 
                    definition: "The seventh day of the week, part of the weekend.", 
                    defTrans: "Domingo",
                    example: "We visit grandma on Sunday.", 
                    audioFront: "TTS: Sunday",
                    audioBack: "TTS: We visit grandma on Sunday." 
                },
                { 
                    term: "Week", 
                    definition: "A period of seven days.", 
                    defTrans: "Semana",
                    example: "There are seven days in a week.", 
                    audioFront: "TTS: Week",
                    audioBack: "TTS: There are seven days in a week." 
                },
                { 
                    term: "Weekend", 
                    definition: "Saturday and Sunday.", 
                    defTrans: "Fim de semana",
                    example: "I love the weekend.", 
                    audioFront: "TTS: Weekend",
                    audioBack: "TTS: I love the weekend." 
                },
                { 
                    term: "Weekdays", 
                    definition: "The days from Monday to Friday.", 
                    defTrans: "Dias de semana",
                    example: "I study on weekdays.", 
                    audioFront: "TTS: Weekdays",
                    audioBack: "TTS: I study on weekdays." 
                },
                // --- Adverbs & Expressions of Frequency ---
                { 
                    term: "Always", 
                    definition: "At all times; on all occasions (100%).", 
                    defTrans: "sempre",
                    example: "I always wake up at 7.", 
                    audioFront: "TTS: Always",
                    audioBack: "TTS: I always wake up at seven." 
                },
                { 
                    term: "Usually", 
                    definition: "Under normal conditions; generally (~90%).", 
                    defTrans: "geralmente / usualmente",
                    example: "She usually walks to school.", 
                    audioFront: "TTS: Usually",
                    audioBack: "TTS: She usually walks to school." 
                },
                { 
                    term: "Often", 
                    definition: "Frequently; many times (~70%).", 
                    defTrans: "frequentemente / muitas vezes",
                    example: "We often eat pizza.", 
                    audioFront: "TTS: Often",
                    audioBack: "TTS: We often eat pizza." 
                },
                { 
                    term: "Sometimes", 
                    definition: "Occasionally; not all the time (~50%).", 
                    defTrans: "às vezes",
                    example: "He sometimes plays tennis.", 
                    audioFront: "TTS: Sometimes",
                    audioBack: "TTS: He sometimes plays tennis." 
                },
                { 
                    term: "Rarely / Seldom", 
                    definition: "Not often; infrequently (~10%).", 
                    defTrans: "raramente",
                    example: "I rarely watch horror movies.", 
                    audioFront: "TTS: Rarely or Seldom",
                    audioBack: "TTS: I rarely watch horror movies." 
                },
                { 
                    term: "Never", 
                    definition: "At no time; not ever (0%).", 
                    defTrans: "nunca",
                    example: "They never arrive late.", 
                    audioFront: "TTS: Never",
                    audioBack: "TTS: They never arrive late." 
                },
                { 
                    term: "Every day", 
                    definition: "Each day; daily; all days.", 
                    defTrans: "todo dia / todos os dias",
                    example: "I study English every day.", 
                    audioFront: "TTS: Every day",
                    audioBack: "TTS: I study English every day." 
                },
                { 
                    term: "Once a week", 
                    definition: "One time in a seven-day period.", 
                    defTrans: "uma vez por semana",
                    example: "I swim once a week.", 
                    audioFront: "TTS: Once a week",
                    audioBack: "TTS: I swim once a week." 
                },
                { 
                    term: "Twice a month", 
                    definition: "Two times within a monthly period.", 
                    defTrans: "duas vezes por mês",
                    example: "We visit them twice a month.", 
                    audioFront: "TTS: Twice a month",
                    audioBack: "TTS: We visit them twice a month." 
                },
                { 
                    term: "Three times a year", 
                    definition: "Occurring on three occasions within a year.", 
                    defTrans: "três vezes por ano",
                    example: "We travel three times a year.", 
                    audioFront: "TTS: Three times a year",
                    audioBack: "TTS: We travel three times a year." 
                },
                { 
                    term: "On Mondays", 
                    definition: "Happening every Monday.", 
                    defTrans: "às segundas-feiras",
                    example: "I have gym on Mondays.", 
                    audioFront: "TTS: On Mondays",
                    audioBack: "TTS: I have gym on Mondays." 
                },

                // --- Phrases & Expressions ---
                { 
                    term: "What time is it?", 
                    definition: "Question used to ask the current time.", 
                    defTrans: "Que horas são?",
                    example: "What time is it? It's 2 PM.", 
                    audioFront: "TTS: What time is it?",
                    audioBack: "TTS: What time is it? It is two P M." 
                },
                { 
                    term: "It's ... o'clock", 
                    definition: "Used to state the exact hour.", 
                    defTrans: "São ... em ponto.",
                    example: "It's 5 o'clock.", 
                    audioFront: "TTS: It is ... o'clock",
                    audioBack: "TTS: It is five o'clock." 
                },
                { 
                    term: "It's half past...", 
                    definition: "Used to state 30 minutes past the hour.", 
                    defTrans: "São ... e meia.",
                    example: "It's half past three.", 
                    audioFront: "TTS: It is half past",
                    audioBack: "TTS: It is half past three." 
                },
                { 
                    term: "She is always punctual.", 
                    definition: "Statement meaning someone is never late.", 
                    defTrans: "Ela é sempre pontual.",
                    example: "She is always punctual for class.", 
                    audioFront: "TTS: She is always punctual.",
                    audioBack: "TTS: She is always punctual for class." 
                },
                { 
                    term: "I have a busy life.", 
                    definition: "Statement meaning someone has many things to do.", 
                    defTrans: "Eu tenho uma vida ocupada.",
                    example: "I have a busy life with school and sports.", 
                    audioFront: "TTS: I have a busy life.",
                    audioBack: "TTS: I have a busy life with school and sports." 
                },

                // --- Grammar Points ---
                { 
                    term: "Telling Time (AT)", 
                    definition: "Using the preposition 'at' for specific clock times.", 
                    defTrans: "Preposição para horas específicas (às)",
                    example: "I get up at 6:00.", 
                    audioFront: "TTS: Telling Time with A T",
                    audioBack: "TTS: I get up at six." 
                },
                { 
                    term: "Days of the Week (ON)", 
                    definition: "Using the preposition 'on' for specific days.", 
                    defTrans: "Preposição para dias (nos/nas)",
                    example: "I play on Saturdays.", 
                    audioFront: "TTS: Days of the Week with O N",
                    audioBack: "TTS: I play on Saturdays." 
                },
                { 
                    term: "Adverb Position (Main Verb)", 
                    definition: "Frequency adverbs go BEFORE the main verb.", 
                    defTrans: "Antes do verbo principal",
                    example: "I always study.", 
                    audioFront: "TTS: Adverb Position Main Verb",
                    audioBack: "TTS: I always study." 
                },
                { 
                    term: "Adverb Position (To Be)", 
                    definition: "Frequency adverbs go AFTER the verb 'To Be'.", 
                    defTrans: "Depois do verbo To Be",
                    example: "She is never sad.", 
                    audioFront: "TTS: Adverb Position To Be",
                    audioBack: "TTS: She is never sad." 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Part 1: Daily Activities / Verbs)
    // ======================================================
    glossary: [
        // --- TOPIC 1: DAILY ACTIVITIES ---
        { 
            topic: "Activities", 
            term: "wake-up", 
            definition: "To stop sleeping and open your eyes.", 
            translation: "acordar" 
        },
        { 
            topic: "Activities", 
            term: "get-up", 
            definition: "To rise from bed after sleeping.", 
            translation: "levantar-se" 
        },
        { 
            topic: "Activities", 
            term: "have-breakfast", 
            definition: "To eat the first meal of the day.", 
            translation: "tomar café da manhã" 
        },
        { 
            topic: "Activities", 
            term: "go-to-school", 
            definition: "To travel to the place where you study.", 
            translation: "ir para a escola" 
        },
        { 
            topic: "Activities", 
            term: "study-classes", 
            definition: "To attend lessons or spend time learning a subject.", 
            translation: "ter aulas / estudar" 
        },
        { 
            topic: "Activities", 
            term: "have-lunch", 
            definition: "To eat a meal in the middle of the day.", 
            translation: "almoçar" 
        },
        { 
            topic: "Activities", 
            term: "go-home", 
            definition: "To return to the place where you live.", 
            translation: "ir para casa" 
        },
        { 
            topic: "Activities", 
            term: "do-homework", 
            definition: "To do schoolwork at home.", 
            translation: "fazer lição de casa" 
        },
        { 
            topic: "Activities", 
            term: "watch-tv", 
            definition: "To look at television programs or films.", 
            translation: "assistir TV / filmes" 
        },
        { 
            topic: "Activities", 
            term: "play", 
            definition: "To engage in games or physical activities for fun.", 
            translation: "jogar (videogame/esportes)" 
        },
        { 
            topic: "Activities", 
            term: "listen-to-music", 
            definition: "To pay attention to sounds or songs.", 
            translation: "ouvir música" 
        },
        { 
            topic: "Activities", 
            term: "use-computer", 
            definition: "To operate a computer or browse the web.", 
            translation: "usar o computador/internet" 
        },
        { 
            topic: "Activities", 
            term: "have-dinner", 
            definition: "To eat the main meal of the evening.", 
            translation: "jantar" 
        },
        { 
            topic: "Activities", 
            term: "read-book", 
            definition: "To look at and comprehend written words in a book.", 
            translation: "ler um livro" 
        },
        { 
            topic: "Activities", 
            term: "sleep", 
            definition: "To get into bed to rest / to be in a state of rest.", 
            translation: "ir para a cama / dormir" 
        },
        { 
            topic: "Activities", 
            term: "brush-teeth", 
            definition: "To clean your teeth with a toothbrush.", 
            translation: "escovar os dentes" 
        },
        { 
            topic: "Activities", 
            term: "take-shower", 
            definition: "To wash your body standing under a spray of water or in a tub.", 
            translation: "tomar banho/ducha" 
        },
        { 
            topic: "Activities", 
            term: "help-at-home", 
            definition: "To assist with household chores.", 
            translation: "ajudar em casa" 
        },
        // --- TOPIC 2: DAYS OF THE WEEK & TIME ---
        { 
            topic: "Time & Days", 
            term: "monday", 
            definition: "The first day of the working week.", 
            translation: "Segunda-feira" 
        },
        { 
            topic: "Time & Days", 
            term: "tuesday", 
            definition: "The second day of the working week.", 
            translation: "Terça-feira" 
        },
        { 
            topic: "Time & Days", 
            term: "wednesday", 
            definition: "The third day of the working week.", 
            translation: "Quarta-feira" 
        },
        { 
            topic: "Time & Days", 
            term: "thursday", 
            definition: "The fourth day of the working week.", 
            translation: "Quinta-feira" 
        },
        { 
            topic: "Time & Days", 
            term: "friday", 
            definition: "The fifth day of the working week.", 
            translation: "Sexta-feira" 
        },
        { 
            topic: "Time & Days", 
            term: "saturday", 
            definition: "The sixth day of the week, part of the weekend.", 
            translation: "Sábado" 
        },
        { 
            topic: "Time & Days", 
            term: "sunday", 
            definition: "The seventh day of the week, part of the weekend.", 
            translation: "Domingo" 
        },
        { 
            topic: "Time & Days", 
            term: "week", 
            definition: "A period of seven days.", 
            translation: "Semana" 
        },
        { 
            topic: "Time & Days", 
            term: "weekend", 
            definition: "Saturday and Sunday.", 
            translation: "Fim de semana" 
        },
        { 
            topic: "Time & Days", 
            term: "weekdays", 
            definition: "The days from Monday to Friday.", 
            translation: "Dias de semana" 
        },
        { 
            topic: "Time & Days", 
            term: "date", 
            definition: "A specific day of the month or year.", 
            translation: "data" 
        },
        { 
            topic: "Time & Days", 
            term: "month", 
            definition: "Each of the twelve named periods into which a year is divided.", 
            translation: "mês" 
        },
        // --- TOPIC 3: ADVERBS & EXPRESSIONS OF FREQUENCY ---
        { 
            topic: "Frequency & Grammar", 
            term: "always", 
            definition: "At all times; on all occasions (100%).", 
            translation: "sempre" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "usually", 
            definition: "Under normal conditions; generally (~90%).", 
            translation: "geralmente / usualmente" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "often", 
            definition: "Frequently; many times (~70%).", 
            translation: "frequentemente / muitas vezes" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "sometimes", 
            definition: "Occasionally; rather than all the time (~50%).", 
            translation: "às vezes" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "rarely", 
            definition: "Not often; infrequently (~10%).", 
            translation: "raramente" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "never", 
            definition: "At no time in the past or future; not ever (0%).", 
            translation: "nunca" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "every-day", 
            definition: "Each day; daily.", 
            translation: "todo dia / todos os dias" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "once-a-week", 
            definition: "One time in a seven-day period.", 
            translation: "uma vez por semana" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "twice-a-month", 
            definition: "Two times within a monthly period.", 
            translation: "duas vezes por mês" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "three-times-a-year", 
            definition: "Occurring on three occasions within a year.", 
            translation: "três vezes por ano" 
        },

        // --- TOPIC 4: PHRASES & GRAMMAR ---
        { 
            topic: "Frequency & Grammar", 
            term: "what-time-is-it", 
            definition: "Question used to ask the current time.", 
            translation: "Que horas são?" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "o-clock", 
            definition: "Used to state the exact hour (no minutes).", 
            translation: "em ponto" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "half-past", 
            definition: "Used to state 30 minutes past the hour.", 
            translation: "e meia" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "how-often", 
            definition: "Question used to ask about the frequency of an action.", 
            translation: "Com que frequência...?" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "punctual", 
            definition: "Happening or doing something at the agreed or proper time.", 
            translation: "pontual" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "busy-life", 
            definition: "A life full of activities or work.", 
            translation: "vida ocupada" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "telling-time-at", 
            definition: "Rule: Use the preposition 'at' for specific clock times.", 
            translation: "Dizendo as horas (às)" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "days-on", 
            definition: "Rule: Use the preposition 'on' for specific days of the week.", 
            translation: "Dias da semana (em/no/na)" 
        },
        { 
            topic: "Frequency & Grammar", 
            term: "adverb-position", 
            definition: "The correct placement of frequency adverbs (before main verbs / after To Be).", 
            translation: "Posição do Advérbio" 
        }
    ] // This closes the glossary array
}); // This closes the window.initLesson object