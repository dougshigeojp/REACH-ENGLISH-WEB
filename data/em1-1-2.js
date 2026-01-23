/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em1-1-2", 
    grade: "High School 1st Grade",       
    bimester: "1",   
    chapter: "2",    
    chapterTitle: "English: Strategies for Success!", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss learning styles and strategies.<br>• Talk about habits using the Simple Present and Adverbs of Frequency.<br>• Describe current actions using the Present Continuous.<br>• Use time expressions like \"currently,\" \"now,\" and \"at the moment.\"<br>• Give advice using the Imperative.",
            welcome: "Hello, my friend! I'm Mr. D!<br>Welcome to a lesson that will change how you learn! Today, we are unlocking the secrets to success. We'll discover different methods to improve your English and figure out what works best for you. We will become grammar experts by mastering the difference between what you usually do (habits) and what you are doing right now (actions in progress). Let's find your personal learning style and boost your journey!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss learning styles and strategies. Talk about habits using the Simple Present and Adverbs of Frequency. Describe current actions using the Present Continuous. Use time expressions like currently, now, and at the moment. Give advice using the Imperative.",
                welcome: "TTS: Hello, my friend! I'm Mr. D! Welcome to a lesson that will change how you learn! Today, we are unlocking the secrets to success. We'll discover different methods to improve your English and figure out what works best for you. We will become grammar experts by mastering the difference between what you usually do, habits, and what you are doing right now, actions in progress. Let's find your personal learning style and boost your journey!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of a library or study room. Pages turning. Celine approaches Albert, who is wearing headphones and looking at a tablet.", 
            contextAudio: "audio/em1-1-2/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Hey Albert! What are you [working on right now](tooltip:working-on-right-now)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "Oh, hi Celine. I am [watching](tooltip:watching) a video by a famous YouTuber. He teaches English [pronunciation](tooltip:pronunciation). I [always](tooltip:always) watch his videos before class." 
                },
                { 
                    speaker: "Celine", 
                    text: "That sounds interesting! I [usually](tooltip:usually) just listen to music to [improve](tooltip:improve) my [listening skills](tooltip:listening-skills)." 
                },
                { 
                    speaker: "Albert", 
                    text: "That's a good [method](tooltip:method) too. But I find it helpful to [memorize](tooltip:memorize) the mouth movements. What [works for you](tooltip:works-for-you)?" 
                },
                { 
                    speaker: "Celine", 
                    text: "Well, [currently](tooltip:currently), I am [reading](tooltip:reading) an [article](tooltip:article) online. I [rarely](tooltip:rarely) use videos. I prefer to read." 
                },
                { 
                    speaker: "Albert", 
                    text: "I see. Everyone has a different [learning style](tooltip:learning-style). We should [review](tooltip:review) together sometime!" 
                },
                { 
                    speaker: "Celine", 
                    text: "Great idea! Let's [make a plan](tooltip:make-a-plan) for this week." 
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

            // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
        // ======================================================
        
            title: "Say the word",
            subPages: [
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],

            // 2A: Vocabulary Lists (Tabbed)
            areas: [
                {
                    title: "Adverbs of Frequency",
                    audio: "TTS: Always. Usually. Often. Sometimes. Rarely. Never.",
                    items: [
                        { term: "Always", trans: "Sempre" },
                        { term: "Usually", trans: "Geralmente" },
                        { term: "Often", trans: "Frequentemente" },
                        { term: "Sometimes", trans: "Às vezes" },
                        { term: "Rarely", trans: "Raramente" },
                        { term: "Never", trans: "Nunca" }
                    ]
                },
                {
                    title: "Frequency Habits",
                    audio: "TTS: Every day. Every week. Every month. Once a week. Twice a month.",
                    items: [
                        { term: "Every day", trans: "Todo dia" },
                        { term: "Every week", trans: "Toda semana" },
                        { term: "Every month", trans: "Todo mês" },
                        { term: "Once a week", trans: "Uma vez por semana" },
                        { term: "Twice a month", trans: "Duas vezes por mês" }
                    ]
                },
                {
                    title: "Adverbs of Time",
                    audio: "TTS: Now. Right now. At the moment. Currently. Today. This week.",
                    items: [
                        { term: "Now", trans: "Agora" },
                        { term: "Right now", trans: "Agora mesmo" },
                        { term: "At the moment", trans: "No momento" },
                        { term: "Currently", trans: "Atualmente" },
                        { term: "Today", trans: "Hoje" },
                        { term: "This week", trans: "Essa semana" }
                    ]
                },
                {
                    title: "Learning Strategies & Concepts",
                    audio: "TTS: Strategy. Technique. Method. Learning Style. Practice. Improve. Review. Memorize. Understand. Effective. Efficient.",
                    items: [
                        { term: "Strategy", trans: "Estratégia" },
                        { term: "Technique", trans: "Técnica" },
                        { term: "Method", trans: "Método" },
                        { term: "Learning Style", trans: "Estilo de Aprendizagem" },
                        { term: "Practice", trans: "Prática / Praticar" },
                        { term: "Improve", trans: "Melhorar" },
                        { term: "Review", trans: "Revisar" },
                        { term: "Memorize", trans: "Memorizar" },
                        { term: "Understand", trans: "Entender" },
                        { term: "Effective", trans: "Eficaz" },
                        { term: "Efficient", trans: "Eficiente" }
                    ]
                },
                {
                    title: "Media & Study Tools",
                    audio: "TTS: Subtitle. YouTuber. Lyrics. Article. Essay. Skill. Pronunciation.",
                    items: [
                        { term: "Subtitle", trans: "Legenda" },
                        { term: "YouTuber", trans: "Criador de conteúdo do YouTube" },
                        { term: "Lyrics", trans: "Letra (de música)" },
                        { term: "Article", trans: "Artigo" },
                        { term: "Essay", trans: "Redação / Ensaio" },
                        { term: "Skill", trans: "Habilidade" },
                        { term: "Pronunciation", trans: "Pronúncia" }
                    ]
                },
                {
                    title: "Expressions",
                    audio: "TTS: What works for you? I find it helpful to... That sounds interesting!",
                    items: [
                        { term: "What works for you?", trans: "O que funciona para você?" },
                        { term: "I find it helpful to...", trans: "Eu acho útil..." },
                        { term: "That sounds interesting!", trans: "Isso parece interessante!" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Adverbs of Frequency",
                    audio: "TTS: I always do my homework. She usually studies in the library. We often watch movies in English. Sometimes I read comics. He rarely misses a class. They never speak Portuguese in class.",
                    items: [
                        { term: "Always", sent: "I always do my homework.", trans: "<span style='color:#0077b6'>Eu sempre faço minha lição de casa.</span>" },
                        { term: "Usually", sent: "She usually studies in the library.", trans: "<span style='color:#0077b6'>Ela geralmente estuda na biblioteca.</span>" },
                        { term: "Often", sent: "We often watch movies in English.", trans: "<span style='color:#0077b6'>Nós frequentemente assistimos filmes em inglês.</span>" },
                        { term: "Sometimes", sent: "Sometimes I read comics.", trans: "<span style='color:#0077b6'>Às vezes eu leio quadrinhos.</span>" },
                        { term: "Rarely", sent: "He rarely misses a class.", trans: "<span style='color:#0077b6'>Ele raramente perde uma aula.</span>" },
                        { term: "Never", sent: "They never speak Portuguese in class.", trans: "<span style='color:#0077b6'>Eles nunca falam português na aula.</span>" }
                    ]
                },
                {
                    title: "Frequency Habits",
                    audio: "TTS: I practice English every day. We have a test every week. She buys a new book every month. I play soccer once a week. We visit our grandma twice a month.",
                    items: [
                        { term: "Every day", sent: "I practice English every day.", trans: "<span style='color:#0077b6'>Eu pratico inglês todo dia.</span>" },
                        { term: "Every week", sent: "We have a test every week.", trans: "<span style='color:#0077b6'>Nós temos um teste toda semana.</span>" },
                        { term: "Every month", sent: "She buys a new book every month.", trans: "<span style='color:#0077b6'>Ela compra um livro novo todo mês.</span>" },
                        { term: "Once a week", sent: "I play soccer once a week.", trans: "<span style='color:#0077b6'>Eu jogo futebol uma vez por semana.</span>" },
                        { term: "Twice a month", sent: "We visit our grandma twice a month.", trans: "<span style='color:#0077b6'>Nós visitamos nossa avó duas vezes por mês.</span>" }
                    ]
                },
                {
                    title: "Adverbs of Time",
                    audio: "TTS: I am studying now. She is sleeping right now. He is busy at the moment. They are currently working on a project. We are learning new words today. I am reading a long book this week.",
                    items: [
                        { term: "Now", sent: "I am studying now.", trans: "<span style='color:#0077b6'>Estou estudando agora.</span>" },
                        { term: "Right now", sent: "She is sleeping right now.", trans: "<span style='color:#0077b6'>Ela está dormindo agora mesmo.</span>" },
                        { term: "At the moment", sent: "He is busy at the moment.", trans: "<span style='color:#0077b6'>Ele está ocupado no momento.</span>" },
                        { term: "Currently", sent: "They are currently working on a project.", trans: "<span style='color:#0077b6'>Eles estão atualmente trabalhando em um projeto.</span>" },
                        { term: "Today", sent: "We are learning new words today.", trans: "<span style='color:#0077b6'>Nós estamos aprendendo palavras novas hoje.</span>" },
                        { term: "This week", sent: "I am reading a long book this week.", trans: "<span style='color:#0077b6'>Estou lendo um livro longo essa semana.</span>" }
                    ]
                },
                {
                    title: "Learning Strategies",
                    audio: "TTS: Writing words down is a good strategy. Shadowing is a useful technique. What is your study method? My learning style is visual. You need to practice speaking. I want to improve my grades. Let's review the lesson. It is hard to memorize long lists. Do you understand the grammar? This app is very effective. Be efficient with your time.",
                    items: [
                        { term: "Strategy", sent: "Writing words down is a good strategy.", trans: "<span style='color:#0077b6'>Escrever as palavras é uma boa estratégia.</span>" },
                        { term: "Technique", sent: "Shadowing is a useful technique.", trans: "<span style='color:#0077b6'>Shadowing é uma técnica útil.</span>" },
                        { term: "Method", sent: "What is your study method?", trans: "<span style='color:#0077b6'>Qual é o seu método de estudo?</span>" },
                        { term: "Learning Style", sent: "My learning style is visual.", trans: "<span style='color:#0077b6'>Meu estilo de aprendizagem é visual.</span>" },
                        { term: "Practice", sent: "You need to practice speaking.", trans: "<span style='color:#0077b6'>Você precisa praticar a fala.</span>" },
                        { term: "Improve", sent: "I want to improve my grades.", trans: "<span style='color:#0077b6'>Eu quero melhorar minhas notas.</span>" },
                        { term: "Review", sent: "Let's review the lesson.", trans: "<span style='color:#0077b6'>Vamos revisar a lição.</span>" },
                        { term: "Memorize", sent: "It is hard to memorize long lists.", trans: "<span style='color:#0077b6'>É difícil memorizar listas longas.</span>" },
                        { term: "Understand", sent: "Do you understand the grammar?", trans: "<span style='color:#0077b6'>Você entende a gramática?</span>" },
                        { term: "Effective", sent: "This app is very effective.", trans: "<span style='color:#0077b6'>Este aplicativo é muito eficaz.</span>" },
                        { term: "Efficient", sent: "Be efficient with your time.", trans: "<span style='color:#0077b6'>Seja eficiente com seu tempo.</span>" }
                    ]
                },
                {
                    title: "Media & Study Tools",
                    audio: "TTS: I watch movies with English subtitles. That YouTuber is very funny. I learned the lyrics to the song. Read this article about science. I have to write an essay. Listening is an important skill. Her pronunciation is perfect.",
                    items: [
                        { term: "Subtitle", sent: "I watch movies with English subtitles.", trans: "<span style='color:#0077b6'>Eu assisto filmes com legendas em inglês.</span>" },
                        { term: "YouTuber", sent: "That YouTuber is very funny.", trans: "<span style='color:#0077b6'>Aquele YouTuber é muito engraçado.</span>" },
                        { term: "Lyrics", sent: "I learned the lyrics to the song.", trans: "<span style='color:#0077b6'>Eu aprendi a letra da música.</span>" },
                        { term: "Article", sent: "Read this article about science.", trans: "<span style='color:#0077b6'>Leia este artigo sobre ciência.</span>" },
                        { term: "Essay", sent: "I have to write an essay.", trans: "<span style='color:#0077b6'>Eu tenho que escrever uma redação.</span>" },
                        { term: "Skill", sent: "Listening is an important skill.", trans: "<span style='color:#0077b6'>Escutar é uma habilidade importante.</span>" },
                        { term: "Pronunciation", sent: "Her pronunciation is perfect.", trans: "<span style='color:#0077b6'>A pronúncia dela é perfeita.</span>" }
                    ]
                },
                {
                    title: "Expressions",
                    audio: "TTS: I like flashcards. What works for you? I find it helpful to record my voice. I learn with video games. That sounds interesting!",
                    items: [
                        { term: "What works for you?", sent: "\"I like flashcards.\" \"What works for you?\"", trans: "<span style='color:#0077b6'>\"Eu gosto de cartões de memória.\" \"O que funciona para você?\"</span>" },
                        { term: "I find it helpful to...", sent: "I find it helpful to record my voice.", trans: "<span style='color:#0077b6'>Eu acho útil gravar minha voz.</span>" },
                        { term: "That sounds interesting!", sent: "\"I learn with video games.\" \"That sounds interesting!\"", trans: "<span style='color:#0077b6'>\"Eu aprendo com videogames.\" \"Isso parece interessante!\"</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills
            drills: [
                {
                    type: "mcq",
                    q: "Choose the correct Adverb of Frequency: 'I _____ eat breakfast at 7 AM.' (100% of the time)",
                    options: [
                        { t: "never", c: false },
                        { t: "rarely", c: false },
                        { t: "always", c: true },
                        { t: "sometimes", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete the Frequency Habit: 'We go to the cinema _____.'",
                    options: [
                        { t: "once a week", c: true },
                        { t: "always", c: false },
                        { t: "never", c: false },
                        { t: "rarely", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Select the correct Time Marker: 'She is working _____.'",
                    options: [
                        { t: "yesterday", c: false },
                        { t: "every day", c: false },
                        { t: "right now", c: true },
                        { t: "usually", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Learning Strategies: 'Using flashcards is a good _____ to remember words.'",
                    options: [
                        { t: "strategy", c: true },
                        { t: "receipt", c: false },
                        { t: "consumer", c: false },
                        { t: "complaint", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Media Vocab: 'I like to read the _____ while I listen to the song.'",
                    options: [
                        { t: "subtitles", c: false },
                        { t: "lyrics", c: true },
                        { t: "essay", c: false },
                        { t: "article", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which verb fits? 'You need to _____ your vocabulary.'",
                    options: [
                        { t: "improve", c: true },
                        { t: "spend", c: false },
                        { t: "buy", c: false },
                        { t: "shop", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Adjectives: 'This method works very well. It is _____.'",
                    options: [
                        { t: "effective", c: true },
                        { t: "boring", c: false },
                        { t: "expensive", c: false },
                        { t: "rarely", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Time Markers: '_____ , I am focusing on grammar.'",
                    options: [
                        { t: "Currently", c: true },
                        { t: "Always", c: false },
                        { t: "Every week", c: false },
                        { t: "Never", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Expressions: 'I use apps.' '_______!'",
                    options: [
                        { t: "That sounds interesting", c: true },
                        { t: "I usually", c: false },
                        { t: "Right now", c: false },
                        { t: "Every day", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Adverbs of Frequency: 'He hates fish. He _____ eats it.'",
                    options: [
                        { t: "always", c: false },
                        { t: "usually", c: false },
                        { t: "often", c: false },
                        { t: "never", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "General Nouns: 'The teacher gave us a new _____.'",
                    options: [
                        { t: "task", c: true },
                        { t: "price", c: false },
                        { t: "aisle", c: false },
                        { t: "brand", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Learning: 'What is your favorite learning _____?'",
                    options: [
                        { t: "style", c: true },
                        { t: "spree", c: false },
                        { t: "refund", c: false },
                        { t: "sale", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Verbs: 'I can't _____ this math problem.'",
                    options: [
                        { t: "understand", c: true },
                        { t: "listen", c: false },
                        { t: "look", c: false },
                        { t: "meet", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Media: 'Did you read the _____ in the newspaper?'",
                    options: [
                        { t: "essay", c: false },
                        { t: "article", c: true },
                        { t: "lyric", c: false },
                        { t: "subtitle", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Skills: 'Speaking is a difficult _____.'",
                    options: [
                        { t: "skill", c: true },
                        { t: "method", c: false },
                        { t: "review", c: false },
                        { t: "plan", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Frequency: 'I visit my parents _____.' (2 times/month)",
                    options: [
                        { t: "twice a month", c: true },
                        { t: "every day", c: false },
                        { t: "now", c: false },
                        { t: "currently", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Verbs: 'We need to _____ for the test.'",
                    options: [
                        { t: "review", c: true },
                        { t: "shop", c: false },
                        { t: "complain", c: false },
                        { t: "refund", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Time Markers: 'I am busy _____.'",
                    options: [
                        { t: "at the moment", c: true },
                        { t: "every day", c: false },
                        { t: "usually", c: false },
                        { t: "often", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Verbs: 'Try to _____ these new words.'",
                    options: [
                        { t: "memorize", c: true },
                        { t: "purchase", c: false },
                        { t: "fit", c: false },
                        { t: "cost", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Expressions: 'Reading books really _____ for me.'",
                    options: [
                        { t: "works", c: true },
                        { t: "does", c: false },
                        { t: "makes", c: false },
                        { t: "goes", c: false }
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
                    title: "The Imperative",
                    audio: "TTS: We use the Imperative to give instructions, orders, advice, or suggestions. Affirmative: Read the text carefully. Negative: Don't forget your homework.",
                    explanation: "We use the Imperative to give instructions, orders, advice, or suggestions. There is no subject. For negative sentences, we use Don't.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos o Imperativo para dar instruções, ordens, conselhos ou sugestões. Não há sujeito. Para frases negativas, usamos Don't.)</span>",
                    samples: [
                        { en: "Read the text carefully.", pt: "<span style='color:#0077b6'>Leia o texto cuidadosamente.</span>" },
                        { en: "Don't forget your homework.", pt: "<span style='color:#0077b6'>Não esqueça sua lição de casa.</span>" },
                        { en: "Listen to the teacher.", pt: "<span style='color:#0077b6'>Ouça o professor.</span>" },
                        { en: "Don't speak Portuguese in class.", pt: "<span style='color:#0077b6'>Não fale português na aula.</span>" }
                    ]
                },
                {
                    title: "Simple Present",
                    audio: "TTS: We use the Simple Present to talk about habits and facts. I study English. She watches videos. They don't like math. Do you practice every day?",
                    explanation: "We use the Simple Present to talk about habits, routines, general truths, and permanent situations. Add -s or -es for He, She, and It.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos o Simple Present para falar sobre hábitos, rotinas, verdades gerais e situações permanentes. Adicione -s ou -es para He, She e It.)</span>",
                    samples: [
                        { en: "We study English.", pt: "<span style='color:#0077b6'>Nós estudamos inglês.</span>" },
                        { en: "She watches videos.", pt: "<span style='color:#0077b6'>Ela assiste vídeos.</span>" },
                        { en: "They don't like math.", pt: "<span style='color:#0077b6'>Eles não gostam de matemática.</span>" },
                        { en: "Do you practice every day?", pt: "<span style='color:#0077b6'>Você pratica todo dia?</span>" }
                    ]
                },
                {
                    title: "Adverbs Position",
                    audio: "TTS: Adverbs come before main verbs but after the verb To Be. I always do my homework. He is usually happy. They are rarely late.",
                    explanation: "Position Rule: Adverbs come BEFORE main verbs, but AFTER the verb 'To Be' (am, is, are).<br><br><span style='color:#0077b6; font-style:italic;'>(Regra de Posição: Advérbios vêm ANTES de verbos principais, mas DEPOIS do verbo 'To Be'.)</span>",
                    samples: [
                        { en: "I always do my homework.", pt: "<span style='color:#0077b6'>Eu sempre faço minha lição de casa.</span>" },
                        { en: "We often listen to music.", pt: "<span style='color:#0077b6'>Nós frequentemente ouvimos música.</span>" },
                        { en: "He is usually happy.", pt: "<span style='color:#0077b6'>Ele geralmente está feliz.</span>" },
                        { en: "They are rarely late.", pt: "<span style='color:#0077b6'>Eles raramente estão atrasados.</span>" }
                    ]
                },
                {
                    title: "Present Continuous",
                    audio: "TTS: We use the Present Continuous for actions happening right now. I am reading. She is sleeping. They aren't playing. Are we learning?",
                    explanation: "We use the Present Continuous to describe actions happening right now or temporary situations. Structure: Be (am/is/are) + verb-ing.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos o Present Continuous para descrever ações acontecendo agora mesmo ou situações temporárias. Estrutura: Be + verbo com -ing.)</span>",
                    samples: [
                        { en: "I am reading.", pt: "<span style='color:#0077b6'>Eu estou lendo.</span>" },
                        { en: "He is sleeping.", pt: "<span style='color:#0077b6'>Ele está dormindo.</span>" },
                        { en: "They aren't playing.", pt: "<span style='color:#0077b6'>Eles não estão brincando.</span>" },
                        { en: "Are we learning?", pt: "<span style='color:#0077b6'>Nós estamos aprendendo?</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: The Imperative",
                    audio: "audio/em1-1-2/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Mrs. Canales", 
                            text: "Albert, please open your book to page 10. Don't talk to Celine right now.", 
                            pt: "<span style='color:#0077b6'>Albert, por favor abra seu livro na página 10. Não fale com a Celine agora mesmo.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Sorry, Mrs. Canales. I was just asking for a pen.", 
                            pt: "<span style='color:#0077b6'>Desculpe, Sra. Canales. Eu estava apenas pedindo uma caneta.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Simple Present",
                    audio: "audio/em1-1-2/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Does Albert speak French?", 
                            pt: "<span style='color:#0077b6'>O Albert fala francês?</span>" 
                        },
                        { 
                            speaker: "Mrs. Canales", 
                            text: "No, he doesn't speak French. He speaks English and Portuguese. We practice together sometimes.", 
                            pt: "<span style='color:#0077b6'>Não, ele não fala francês. Ele fala inglês e português. Nós praticamos juntos às vezes.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Simple Present + Adverbs of Frequency",
                    audio: "audio/em1-1-2/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "I always listen to music when I study. It helps me focus.", 
                            pt: "<span style='color:#0077b6'>Eu sempre escuto música quando estudo. Isso me ajuda a focar.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Really? I never do that. It is usually too distracting for me. I often need silence.", 
                            pt: "<span style='color:#0077b6'>Sério? Eu nunca faço isso. É geralmente muito distrativo para mim. Eu frequentemente preciso de silêncio.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 4: Present Continuous",
                    audio: "audio/em1-1-2/step3_dialogue4.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Hi Albert! Where are you?", 
                            pt: "<span style='color:#0077b6'>Oi Albert! Onde você está?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I'm in my room. I am writing an essay for school at the moment. My sister is helping me. We are looking for information online.", 
                            pt: "<span style='color:#0077b6'>Estou no meu quarto. Estou escrevendo uma redação para a escola no momento. Minha irmã está me ajudando. Nós estamos procurando informações online.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Choose the correct sentence to give advice (Imperative):",
                    options: [
                        { t: "You study hard.", c: false },
                        { t: "Studying hard.", c: false },
                        { t: "Study hard!", c: true },
                        { t: "To study hard.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Simple Present (He/She/It): Complete: 'She _____ English very well.'",
                    options: [
                        { t: "speak", c: false },
                        { t: "speaking", c: false },
                        { t: "is speak", c: false },
                        { t: "speaks", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Simple Present (Negative): Complete: 'They _____ like spicy food.'",
                    options: [
                        { t: "doesn't", c: false },
                        { t: "not", c: false },
                        { t: "don't", c: true },
                        { t: "aren't", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct order (Adverbs of Frequency + Main Verb):",
                    options: [
                        { t: "He reads often books.", c: false },
                        { t: "He often is reading books.", c: false },
                        { t: "He often reads books.", c: true },
                        { t: "Often he reads books.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct order (Adverbs of Frequency + To Be):",
                    options: [
                        { t: "I late am always.", c: false },
                        { t: "I am always late.", c: true },
                        { t: "I always am late.", c: false },
                        { t: "Always I am late.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Present Continuous (Affirmative): 'Look! It _____.'",
                    options: [
                        { t: "rains", c: false },
                        { t: "raining", c: false },
                        { t: "is raining", c: true },
                        { t: "rain", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Present Continuous (Interrogative): '_____ they _____ to the teacher?'",
                    options: [
                        { t: "Do / listening", c: false },
                        { t: "Are / listen", c: false },
                        { t: "Are / listening", c: true },
                        { t: "Is / listening", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Tense Comparison: 'I usually _____ (drive) to work, but today I _____ (walk).'",
                    options: [
                        { t: "drive / walk", c: false },
                        { t: "am driving / walking", c: false },
                        { t: "drive / am walking", c: true },
                        { t: "driving / walk", c: false }
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
                    text: "I always watch movies with subtitles.<br><small style='color:#0077b6'>(Eu sempre assisto filmes com legendas.)</small>", 
                    audio: "TTS: I always watch movies with subtitles.", 
                    arrow: "↘" 
                },
                { 
                    text: "She is reading an article right now.<br><small style='color:#0077b6'>(Ela está lendo um artigo agora mesmo.)</small>", 
                    audio: "TTS: She is reading an article right now.", 
                    arrow: "↘" 
                },
                { 
                    text: "Don't forget to practice every day!<br><small style='color:#0077b6'>(Não esqueça de praticar todo dia!)</small>", 
                    audio: "TTS: Don't forget to practice every day!", 
                    arrow: "↗" 
                },
                { 
                    text: "We are learning new strategies.<br><small style='color:#0077b6'>(Nós estamos aprendendo novas estratégias.)</small>", 
                    audio: "TTS: We are learning new strategies.", 
                    arrow: "↘" 
                },
                { 
                    text: "He never studies on Sundays.<br><small style='color:#0077b6'>(Ele nunca estuda aos domingos.)</small>", 
                    audio: "TTS: He never studies on Sundays.", 
                    arrow: "↘" 
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
                    instruction: "Listen to the audio and type the missing words in the blanks.",
                    audio: "TTS: I want to improve my English. I usually listen to music in the morning. It helps me with pronunciation. Currently, I am reading a book in English. I try to read two pages every day. My teacher says it is an effective method.",
                    text: "I want to improve my English. I usually [listen] to music in the morning. It helps me with pronunciation. Currently, I am [reading] a book in English. I try to read two pages [every] day. My teacher says it is an [effective] method."
                },
                // Drill 2: Listen and Complete (Dropdown) - FIXED VERSION
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue and choose the correct option.<br><small style='color:#0077b6'>(Ouça o diálogo e escolha a opção correta.)</small>",
                    audio: "audio/em1-1-2/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Mrs. Canales: Albert, what are you doing? <br> Albert: I am [writing | reading | listening] an essay for history class.", 
                            a: "writing" 
                        },
                        { 
                            q: "Mrs. Canales: Good. Do you often study here? <br> Albert: Yes, I [always | never | currently] come here after school.", 
                            a: "always" 
                        },
                        { 
                            q: "Mrs. Canales: That is a good habit. [Don't | Do | Please] stop!", 
                            a: "Don't" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the sentence and choose the correct situation.",
                    audio: "TTS: I am playing video games.",
                    options: [
                        { t: "This is a habit. (Routine)", c: false },
                        { t: "This is happening right now. (Current Action)", c: true },
                        { t: "This happened yesterday. (Past)", c: false },
                        { t: "This is an instruction. (Imperative)", c: false }
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
                    title: "Narration (The Flashcard Method)",
                    audio: "TTS: Lucas wants to learn new vocabulary. He has a specific method. He writes a word on one side of a card and the translation on the other. He reviews these cards every day. He thinks this technique is very efficient. Right now, he is making new cards for his biology class. He is writing the definitions carefully. He rarely forgets the words because he practices so often. He believes that memorizing is a key skill. || audio/em1-1-2/p6_text1.mp3",
                    body: "Lucas wants to learn new vocabulary. He has a specific method. He writes a word on one side of a card and the translation on the other. He reviews these cards every day. He thinks this technique is very efficient. Right now, he is making new cards for his biology class. He is writing the definitions carefully. He rarely forgets the words because he practices so often. He believes that memorizing is a key skill.",
                    questions: [
                        { 
                            q: "What does Lucas do every day?", 
                            options: [ 
                                {t: "He writes essays.", c: false}, 
                                {t: "He reviews his cards.", c: true}, 
                                {t: "He forgets words.", c: false},
                                {t: "He watches videos.", c: false}
                            ] 
                        },
                        { 
                            q: "What is Lucas doing right now?", 
                            options: [ 
                                {t: "He is making new cards.", c: true}, 
                                {t: "He is sleeping.", c: false}, 
                                {t: "He is playing games.", c: false},
                                {t: "He is reading a book.", c: false}
                            ] 
                        },
                        { 
                            q: "What does Lucas think about his method?", 
                            options: [ 
                                {t: "It is boring.", c: false}, 
                                {t: "It is efficient.", c: true}, 
                                {t: "It is difficult.", c: false},
                                {t: "It is useless.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue (Study Buddies)",
                    audio: "audio/em1-1-2/p6_text2.mp3",
                    body: "<b>Celine:</b> Hi Albert! Are you busy?<br><b>Albert:</b> Yes, I am working on my math homework. I usually do it in the evening, but I have football practice tonight.<br><b>Celine:</b> Oh, I understand. I am practicing my French pronunciation. I listen to a podcast and repeat the words.<br><b>Albert:</b> That sounds interesting. Does it work?<br><b>Celine:</b> Yes, it is very effective. You should try it for your Spanish class.<br><b>Albert:</b> Good idea. Send me the link, please.<br><b>Celine:</b> Okay. Check your messages now!",
                    questions: [
                        { 
                            q: "What is Albert doing?", 
                            options: [ 
                                {t: "He is playing football.", c: false}, 
                                {t: "He is working on math homework.", c: true}, 
                                {t: "He is practicing French.", c: false},
                                {t: "He is sleeping.", c: false}
                            ] 
                        },
                        { 
                            q: "When does Albert usually do his homework?", 
                            options: [ 
                                {t: "In the morning.", c: false}, 
                                {t: "In the evening.", c: true}, 
                                {t: "At night.", c: false},
                                {t: "Before school.", c: false}
                            ] 
                        },
                        { 
                            q: "What advice does Celine give Albert?", 
                            options: [ 
                                {t: "To play football.", c: false}, 
                                {t: "To stop studying.", c: false}, 
                                {t: "To try the podcast method for Spanish.", c: true},
                                {t: "To read a book.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description (The Visual Learner)",
                    audio: "TTS: Ana is a visual learner. She understands things better when she sees images or diagrams. She always uses colorful pens to take notes. She rarely reads long texts without pictures. Currently, she is studying for a geography test. She is drawing a map of the world to help her memorize the countries. She finds it helpful to create charts and graphs. For her, watching a video is more effective than listening to a lecture. || audio/em1-1-2/p6_text3.mp3",
                    body: "Ana is a visual learner. She understands things better when she sees images or diagrams. She always uses colorful pens to take notes. She rarely reads long texts without pictures. Currently, she is studying for a geography test. She is drawing a map of the world to help her memorize the countries. She finds it helpful to create charts and graphs. For her, watching a video is more effective than listening to a lecture.",
                    questions: [
                        { 
                            q: "What kind of learner is Ana?", 
                            options: [ 
                                {t: "Auditory.", c: false}, 
                                {t: "Visual.", c: true}, 
                                {t: "Kinesthetic.", c: false},
                                {t: "Social.", c: false}
                            ] 
                        },
                        { 
                            q: "What does Ana rarely do?", 
                            options: [ 
                                {t: "Uses colorful pens.", c: false}, 
                                {t: "Draws maps.", c: false}, 
                                {t: "Reads long texts without pictures.", c: true},
                                {t: "Watches videos.", c: false}
                            ] 
                        },
                        { 
                            q: "What is she doing right now?", 
                            options: [ 
                                {t: "She is listening to a lecture.", c: false}, 
                                {t: "She is drawing a map.", c: true}, 
                                {t: "She is sleeping.", c: false},
                                {t: "She is writing an essay.", c: false}
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
                // Drill 1: Matching
                {
                    type: "matching",
                    instruction: "Match the word to its definition.",
                    pairs: [
                        { left: "Lyrics", right: "The words of a song", val: "1" },
                        { left: "Subtitle", right: "Text at the bottom of a movie", val: "2" },
                        { left: "Strategy", right: "A plan to achieve a goal", val: "3" },
                        { left: "Efficient", right: "Working well without wasting time", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Unscramble)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "often / We / movies / watch / .",
                    correct: "We often watch movies ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "right / is / She / sleeping / now / .",
                    correct: "She is sleeping right now ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "to / Please / the / listen / teacher / .",
                    correct: "Please listen to the teacher ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "never / I / late / am / class / for / .",
                    correct: "I am never late for class ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not fit (Frequency vs Time markers).",
                    options: [
                        { t: "Now", c: false },
                        { t: "Currently", c: false },
                        { t: "Usually", c: true },
                        { t: "At the moment", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not fit (Time markers vs Frequency).",
                    options: [
                        { t: "Always", c: false },
                        { t: "Never", c: false },
                        { t: "Often", c: false },
                        { t: "Today", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not fit (Verbs vs Adjectives).",
                    options: [
                        { t: "Read", c: false },
                        { t: "Write", c: false },
                        { t: "Listen", c: false },
                        { t: "Efficient", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not fit (Imperatives vs Simple Present).",
                    options: [
                        { t: "Don't talk", c: false },
                        { t: "Listen", c: false },
                        { t: "Open", c: false },
                        { t: "She plays", c: true }
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.",
                    questions: [
                        { q: "I [usually | reading | read | now] wake up at 7 AM.", a: "usually" },
                        { q: "Look! He is [reading | read | usually | now] a comic book.", a: "reading" },
                        { q: "We are busy right [now | usually | reading | read].", a: "now" },
                        { q: "They [read | reading | usually | now] the news every morning.", a: "read" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: My Learning Style. Now it's your turn! Write a short text (3-4 sentences) about how you study English.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Meu Estilo de Aprendizagem. Agora é sua vez! Escreva um pequeno texto (3-4 frases) sobre como você estuda inglês.)</span></small>",
            example: "\"I usually watch videos on YouTube to learn English. I always write down new words in my notebook. Currently, I am listening to music in English every day. I think this method is very fun and effective.\"<br><br><small><span style='color:#0077b6'>(\"Eu geralmente assisto vídeos no YouTube para aprender inglês. Eu sempre anoto palavras novas no meu caderno. Atualmente, estou ouvindo música em inglês todos os dias. Eu acho este método muito divertido e eficaz.\")</span></small>",
            prompts: [
                "What do you usually do? (Use Simple Present + Adverb of Frequency). <br><small><span style='color:#0077b6'>(O que você costuma fazer? Use o Presente Simples + Advérbio de Frequência).</span></small>",
                "What are you doing these days to improve? (Use Present Continuous). <br><small><span style='color:#0077b6'>(O que você está fazendo ultimamente para melhorar? Use o Presente Contínuo).</span></small>",
                "What works for you? <br><small><span style='color:#0077b6'>(O que funciona para você?)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Adverbs of Frequency ---
                { 
                    term: "Always", 
                    definition: "At all times; on all occasions.", 
                    defTrans: "Sempre",
                    example: "I always do my homework.", 
                    audioFront: "TTS: Always",
                    audioBack: "TTS: I always do my homework." 
                },
                { 
                    term: "Usually", 
                    definition: "Under normal conditions; generally.", 
                    defTrans: "Geralmente",
                    example: "She usually studies in the library.", 
                    audioFront: "TTS: Usually",
                    audioBack: "TTS: She usually studies in the library." 
                },
                { 
                    term: "Often", 
                    definition: "Frequently; many times.", 
                    defTrans: "Frequentemente",
                    example: "We often watch movies in English.", 
                    audioFront: "TTS: Often",
                    audioBack: "TTS: We often watch movies in English." 
                },
                { 
                    term: "Sometimes", 
                    definition: "Occasionally; rather than all the time.", 
                    defTrans: "Às vezes",
                    example: "Sometimes I read comics.", 
                    audioFront: "TTS: Sometimes",
                    audioBack: "TTS: Sometimes I read comics." 
                },
                { 
                    term: "Rarely", 
                    definition: "Not often; seldom.", 
                    defTrans: "Raramente",
                    example: "He rarely misses a class.", 
                    audioFront: "TTS: Rarely",
                    audioBack: "TTS: He rarely misses a class." 
                },
                { 
                    term: "Never", 
                    definition: "At no time in the past or future.", 
                    defTrans: "Nunca",
                    example: "They never speak Portuguese in class.", 
                    audioFront: "TTS: Never",
                    audioBack: "TTS: They never speak Portuguese in class." 
                },

                // --- Frequency Habits ---
                { 
                    term: "Every day", 
                    definition: "Each day; daily.", 
                    defTrans: "Todo dia",
                    example: "I practice English every day.", 
                    audioFront: "TTS: Every day",
                    audioBack: "TTS: I practice English every day." 
                },
                { 
                    term: "Every week", 
                    definition: "Each week; weekly.", 
                    defTrans: "Toda semana",
                    example: "We have a test every week.", 
                    audioFront: "TTS: Every week",
                    audioBack: "TTS: We have a test every week." 
                },
                { 
                    term: "Every month", 
                    definition: "Each month; monthly.", 
                    defTrans: "Todo mês",
                    example: "She buys a new book every month.", 
                    audioFront: "TTS: Every month",
                    audioBack: "TTS: She buys a new book every month." 
                },
                { 
                    term: "Once a week", 
                    definition: "One time in a week.", 
                    defTrans: "Uma vez por semana",
                    example: "I play soccer once a week.", 
                    audioFront: "TTS: Once a week",
                    audioBack: "TTS: I play soccer once a week." 
                },
                { 
                    term: "Twice a month", 
                    definition: "Two times in a month.", 
                    defTrans: "Duas vezes por mês",
                    example: "We visit our grandma twice a month.", 
                    audioFront: "TTS: Twice a month",
                    audioBack: "TTS: We visit our grandma twice a month." 
                },

                // --- Adverbs of Time (Actions Now) ---
                { 
                    term: "Now", 
                    definition: "At the present time or moment.", 
                    defTrans: "Agora",
                    example: "I am studying now.", 
                    audioFront: "TTS: Now",
                    audioBack: "TTS: I am studying now." 
                },
                { 
                    term: "Right now", 
                    definition: "At this exact moment.", 
                    defTrans: "Agora mesmo",
                    example: "She is sleeping right now.", 
                    audioFront: "TTS: Right now",
                    audioBack: "TTS: She is sleeping right now." 
                },
                { 
                    term: "At the moment", 
                    definition: "Currently; at this time.", 
                    defTrans: "No momento",
                    example: "He is busy at the moment.", 
                    audioFront: "TTS: At the moment",
                    audioBack: "TTS: He is busy at the moment." 
                },
                { 
                    term: "Currently", 
                    definition: "At the present time.", 
                    defTrans: "Atualmente",
                    example: "They are currently working on a project.", 
                    audioFront: "TTS: Currently",
                    audioBack: "TTS: They are currently working on a project." 
                },
                { 
                term: "Today", 
                definition: "On or in the course of this present day.", 
                defTrans: "Hoje",
                example: "We are learning new words today.", 
                audioFront: "TTS: Today",
                audioBack: "TTS: We are learning new words today." 
                },
                { 
                term: "This week", 
                definition: "During the current week.", 
                defTrans: "Essa semana",
                example: "I am reading a long book this week.", 
                audioFront: "TTS: This week",
                audioBack: "TTS: I am reading a long book this week." 
                 },

                // --- Learning Strategies & Concepts ---
                { 
                    term: "Strategy", 
                    definition: "A plan of action to achieve a major aim.", 
                    defTrans: "Estratégia",
                    example: "Writing words down is a good strategy.", 
                    audioFront: "TTS: Strategy",
                    audioBack: "TTS: Writing words down is a good strategy." 
                },
                { 
                    term: "Technique", 
                    definition: "A way of carrying out a particular task.", 
                    defTrans: "Técnica",
                    example: "Shadowing is a useful technique.", 
                    audioFront: "TTS: Technique",
                    audioBack: "TTS: Shadowing is a useful technique." 
                },
                { 
                    term: "Method", 
                    definition: "A particular form of procedure.", 
                    defTrans: "Método",
                    example: "What is your study method?", 
                    audioFront: "TTS: Method",
                    audioBack: "TTS: What is your study method?" 
                },
                { 
                    term: "Learning Style", 
                    definition: "An individual's unique approach to learning.", 
                    defTrans: "Estilo de Aprendizagem",
                    example: "My learning style is visual.", 
                    audioFront: "TTS: Learning Style",
                    audioBack: "TTS: My learning style is visual." 
                },
                { 
                    term: "Improve", 
                    definition: "To make or become better.", 
                    defTrans: "Melhorar",
                    example: "I want to improve my grades.", 
                    audioFront: "TTS: Improve",
                    audioBack: "TTS: I want to improve my grades." 
                },
                { 
                    term: "Memorize", 
                    definition: "To commit to memory; learn by heart.", 
                    defTrans: "Memorizar",
                    example: "It is hard to memorize long lists.", 
                    audioFront: "TTS: Memorize",
                    audioBack: "TTS: It is hard to memorize long lists." 
                },
                { 
                    term: "Effective", 
                    definition: "Successful in producing a desired result.", 
                    defTrans: "Eficaz",
                    example: "This app is very effective.", 
                    audioFront: "TTS: Effective",
                    audioBack: "TTS: This app is very effective." 
                },
                { 
                    term: "Efficient", 
                    definition: "Achieving maximum productivity with minimum waste.", 
                    defTrans: "Eficiente",
                    example: "Be efficient with your time.", 
                    audioFront: "TTS: Efficient",
                    audioBack: "TTS: Be efficient with your time." 
                },
                { 
                    term: "Practice", 
                    definition: "The actual application or use of an idea, belief, or method.", 
                    defTrans: "Prática / Praticar",
                    example: "You need to practice speaking.", 
                    audioFront: "TTS: Practice",
                    audioBack: "TTS: You need to practice speaking." 
                },
                { 
                    term: "Review", 
                    definition: "To examine or assess something formally with the possibility of change.", 
                    defTrans: "Revisar",
                    example: "Let's review the lesson.", 
                    audioFront: "TTS: Review",
                    audioBack: "TTS: Let's review the lesson." 
                },
                { 
                    term: "Understand", 
                    definition: "To perceive the intended meaning of words or a speaker.", 
                    defTrans: "Entender",
                    example: "Do you understand the grammar?", 
                    audioFront: "TTS: Understand",
                    audioBack: "TTS: Do you understand the grammar?" 
                },

                // --- Media & Study Tools ---
                { 
                    term: "Subtitle", 
                    definition: "Captions displayed at the bottom of a movie.", 
                    defTrans: "Legenda",
                    example: "I watch movies with English subtitles.", 
                    audioFront: "TTS: Subtitle",
                    audioBack: "TTS: I watch movies with English subtitles." 
                },
                { 
                    term: "Lyrics", 
                    definition: "The words of a song.", 
                    defTrans: "Letra (de música)",
                    example: "I learned the lyrics to the song.", 
                    audioFront: "TTS: Lyrics",
                    audioBack: "TTS: I learned the lyrics to the song." 
                },
                { 
                    term: "Article", 
                    definition: "A piece of writing included in a publication.", 
                    defTrans: "Artigo",
                    example: "Read this article about science.", 
                    audioFront: "TTS: Article",
                    audioBack: "TTS: Read this article about science." 
                },
                { 
                    term: "Essay", 
                    definition: "A short piece of writing on a particular subject.", 
                    defTrans: "Redação / Ensaio",
                    example: "I have to write an essay.", 
                    audioFront: "TTS: Essay",
                    audioBack: "TTS: I have to write an essay." 
                },
                { 
                    term: "Pronunciation", 
                    definition: "The way in which a word is pronounced.", 
                    defTrans: "Pronúncia",
                    example: "Her pronunciation is perfect.", 
                    audioFront: "TTS: Pronunciation",
                    audioBack: "TTS: Her pronunciation is perfect." 
                },
                { 
                    term: "Skill", 
                    definition: "The ability to do something well; expertise.", 
                    defTrans: "Habilidade",
                    example: "Listening is an important skill.", 
                    audioFront: "TTS: Skill",
                    audioBack: "TTS: Listening is an important skill." 
                },
                { 
    term: "Task", 
    definition: "A piece of work to be done or undertaken.", 
    defTrans: "Tarefa",
    example: "The teacher gave us a new task.", 
    audioFront: "TTS: Task",
    audioBack: "TTS: The teacher gave us a new task." 
},
{ 
    term: "Price", 
    definition: "The amount of money expected or required in payment for something.", 
    defTrans: "Preço",
    example: "The price of the book is high.", 
    audioFront: "TTS: Price",
    audioBack: "TTS: The price of the book is high." 
},
{ 
    term: "Aisle", 
    definition: "A passage between rows of seats or shelves (like in a supermarket).", 
    defTrans: "Corredor",
    example: "The milk is in the third aisle.", 
    audioFront: "TTS: Aisle",
    audioBack: "TTS: The milk is in the third aisle." 
},
{ 
    term: "Brand", 
    definition: "A type of product manufactured by a particular company.", 
    defTrans: "Marca",
    example: "What is your favorite clothing brand?", 
    audioFront: "TTS: Brand",
    audioBack: "TTS: What is your favorite clothing brand?" 
},
{ 
    term: "Style", 
    definition: "A particular manner or way of doing something.", 
    defTrans: "Estilo",
    example: "Everyone has a different learning style.", 
    audioFront: "TTS: Style",
    audioBack: "TTS: Everyone has a different learning style." 
},
{ 
    term: "Spree", 
    definition: "A sustained period of unrestrained activity (usually shopping).", 
    defTrans: "Farra / Sessão (de compras)",
    example: "She went on a shopping spree yesterday.", 
    audioFront: "TTS: Spree",
    audioBack: "TTS: She went on a shopping spree yesterday." 
},
{ 
    term: "Refund", 
    definition: "A repayment of a sum of money, typically to a dissatisfied customer.", 
    defTrans: "Reembolso",
    example: "I would like a refund for this broken toy.", 
    audioFront: "TTS: Refund",
    audioBack: "TTS: I would like a refund for this broken toy." 
},
{ 
    term: "Sale", 
    definition: "A period during which a retailer sells goods at reduced prices.", 
    defTrans: "Liquidação / Promoção / Venda",
    example: "There is a big sale at the mall this week.", 
    audioFront: "TTS: Sale",
    audioBack: "TTS: There is a big sale at the mall this week." 
},
                { 
    term: "Agree", 
    definition: "To have the same opinion about something.", 
    defTrans: "Concordar",
    example: "I agree with your opinion.", 
    audioFront: "TTS: Agree",
    audioBack: "TTS: I agree with your opinion." 
},
{ 
    term: "Be", 
    definition: "To exist or occur.", 
    defTrans: "Ser / Estar",
    example: "Be yourself.", 
    audioFront: "TTS: Be",
    audioBack: "TTS: Be yourself." 
},
{ 
    term: "Do", 
    definition: "To perform an action.", 
    defTrans: "Fazer",
    example: "I do my homework every day.", 
    audioFront: "TTS: Do",
    audioBack: "TTS: I do my homework every day." 
},
{ 
    term: "Explain", 
    definition: "To make an idea, situation, or problem clear.", 
    defTrans: "Explicar",
    example: "Can you explain the rule?", 
    audioFront: "TTS: Explain",
    audioBack: "TTS: Can you explain the rule?" 
},
{ 
    term: "Find", 
    definition: "To discover or perceive by chance or unexpectedly.", 
    defTrans: "Encontrar / Achar",
    example: "I find it helpful to record my voice.", 
    audioFront: "TTS: Find",
    audioBack: "TTS: I find it helpful to record my voice." 
},
{ 
    term: "Get", 
    definition: "To come to have or hold (something); receive.", 
    defTrans: "Obter / Conseguir / Entender",
    example: "I get it now!", 
    audioFront: "TTS: Get",
    audioBack: "TTS: I get it now!" 
},
{ 
    term: "Go", 
    definition: "To move from one place to another.", 
    defTrans: "Ir",
    example: "Let's go home.", 
    audioFront: "TTS: Go",
    audioBack: "TTS: Let's go home." 
},
{ 
    term: "Grow", 
    definition: "To undergo natural development by increasing in size.", 
    defTrans: "Crescer",
    example: "Plants grow in the sun.", 
    audioFront: "TTS: Grow",
    audioBack: "TTS: Plants grow in the sun." 
},
{ 
    term: "Help", 
    definition: "To make it easier for (someone) to do something.", 
    defTrans: "Ajudar",
    example: "Can you help me?", 
    audioFront: "TTS: Help",
    audioBack: "TTS: Can you help me?" 
},
{ 
    term: "Learn", 
    definition: "To gain or acquire knowledge or skill.", 
    defTrans: "Aprender",
    example: "We learn English at school.", 
    audioFront: "TTS: Learn",
    audioBack: "TTS: We learn English at school." 
},
{ 
    term: "Like", 
    definition: "To find agreeable, enjoyable, or satisfactory.", 
    defTrans: "Gostar",
    example: "I like pop music.", 
    audioFront: "TTS: Like",
    audioBack: "TTS: I like pop music." 
},
{ 
    term: "Listen", 
    definition: "To give one's attention to a sound.", 
    defTrans: "Escutar",
    example: "I listen to a podcast.", 
    audioFront: "TTS: Listen",
    audioBack: "TTS: I listen to a podcast." 
},
{ 
    term: "Look", 
    definition: "To direct one's gaze toward someone or something.", 
    defTrans: "Olhar",
    example: "Look at this photo.", 
    audioFront: "TTS: Look",
    audioBack: "TTS: Look at this photo." 
},
{ 
    term: "Love", 
    definition: "To feel deep affection for.", 
    defTrans: "Amar",
    example: "I love learning about culture.", 
    audioFront: "TTS: Love",
    audioBack: "TTS: I love learning about culture." 
},
{ 
    term: "Paint", 
    definition: "To apply paint to a surface.", 
    defTrans: "Pintar",
    example: "She likes to paint.", 
    audioFront: "TTS: Paint",
    audioBack: "TTS: She likes to paint." 
},
{ 
    term: "Pay", 
    definition: "To give money in exchange for goods or services.", 
    defTrans: "Pagar",
    example: "I pay for my books in cash.", 
    audioFront: "TTS: Pay",
    audioBack: "TTS: I pay for my books in cash." 
},
{ 
    term: "Plan", 
    definition: "To decide on and arrange in advance.", 
    defTrans: "Planejar",
    example: "Let's make a plan for this week.", 
    audioFront: "TTS: Plan",
    audioBack: "TTS: Let's make a plan for this week." 
},
{ 
    term: "Prefer", 
    definition: "To like (one thing or person) better than another.", 
    defTrans: "Preferir",
    example: "I prefer to read articles online.", 
    audioFront: "TTS: Prefer",
    audioBack: "TTS: I prefer to read articles online." 
},
{ 
    term: "Read", 
    definition: "To look at and comprehend the meaning of written matter.", 
    defTrans: "Ler",
    example: "I am reading a long book this week.", 
    audioFront: "TTS: Read",
    audioBack: "TTS: I am reading a long book this week." 
},
{ 
    term: "Say", 
    definition: "To utter words so as to convey information.", 
    defTrans: "Dizer",
    example: "What did the teacher say?", 
    audioFront: "TTS: Say",
    audioBack: "TTS: What did the teacher say?" 
},
{ 
    term: "See", 
    definition: "To perceive with the eyes; discern visually.", 
    defTrans: "Ver",
    example: "I see. Everyone has a different style.", 
    audioFront: "TTS: See",
    audioBack: "TTS: I see. Everyone has a different style." 
},
{ 
    term: "Sound", 
    definition: "To convey a specified impression when heard.", 
    defTrans: "Soar / Parecer (pelo som)",
    example: "That sounds interesting!", 
    audioFront: "TTS: Sound",
    audioBack: "TTS: That sounds interesting!" 
},
{ 
    term: "Speak", 
    definition: "To say something in order to convey information.", 
    defTrans: "Falar",
    example: "They speak Spanish at home.", 
    audioFront: "TTS: Speak",
    audioBack: "TTS: They speak Spanish at home." 
},
{ 
    term: "Study", 
    definition: "To devote time and attention to acquiring knowledge.", 
    defTrans: "Estudar",
    example: "You must study hard to succeed.", 
    audioFront: "TTS: Study",
    audioBack: "TTS: You must study hard to succeed." 
},
{ 
    term: "Suppose", 
    definition: "To assume that something is the case without proof.", 
    defTrans: "Supor",
    example: "I suppose the exam will be difficult.", 
    audioFront: "TTS: Suppose",
    audioBack: "TTS: I suppose the exam will be difficult." 
},
{ 
    term: "Take care", 
    definition: "To be cautious; to look after.", 
    defTrans: "Cuidar",
    example: "Take care of your health.", 
    audioFront: "TTS: Take care",
    audioBack: "TTS: Take care of your health." 
},
{ 
    term: "Teach", 
    definition: "To show or explain to someone how to do something.", 
    defTrans: "Ensinar",
    example: "He teaches English pronunciation.", 
    audioFront: "TTS: Teach",
    audioBack: "TTS: He teaches English pronunciation." 
},
{ 
    term: "Try", 
    definition: "To make an attempt or effort to do something.", 
    defTrans: "Tentar / Experimentar",
    example: "Try to repeat the words aloud.", 
    audioFront: "TTS: Try",
    audioBack: "TTS: Try to repeat the words aloud." 
},
{ 
    term: "Want", 
    definition: "To have a desire to possess or do something.", 
    defTrans: "Querer",
    example: "I want to improve my listening skills.", 
    audioFront: "TTS: Want",
    audioBack: "TTS: I want to improve my listening skills." 
},
{ 
    term: "Work", 
    definition: "To be engaged in physical or mental activity.", 
    defTrans: "Trabalhar",
    example: "He works in an office every day.", 
    audioFront: "TTS: Work",
    audioBack: "TTS: He works in an office every day." 
},

                // --- Expressions ---
                { 
                    term: "What works for you?", 
                    definition: "A question asking about the most effective method.", 
                    defTrans: "O que funciona para você?",
                    example: "Everyone is different. What works for you?", 
                    audioFront: "TTS: What works for you?",
                    audioBack: "TTS: Everyone is different. What works for you?" 
                },
                { 
                    term: "That sounds interesting!", 
                    definition: "An expression of interest or curiosity.", 
                    defTrans: "Isso parece interessante!",
                    example: "You learn with games? That sounds interesting!", 
                    audioFront: "TTS: That sounds interesting!",
                    audioBack: "TTS: You learn with games? That sounds interesting!" 
                },
                { 
                    term: "I find it helpful to...", 
                    definition: "A phrase used to express personal opinion on the utility of an action.", 
                    defTrans: "Eu acho útil...",
                    example: "I find it helpful to record my voice.", 
                    audioFront: "TTS: I find it helpful to...",
                    audioBack: "TTS: I find it helpful to record my voice." 
                },

                // --- Grammar Points ---
                { 
                    term: "Imperative", 
                    definition: "Verb form used for commands or advice.", 
                    defTrans: "Imperativo",
                    example: "Read the text carefully.", 
                    audioFront: "TTS: Imperative",
                    audioBack: "TTS: Read the text carefully." 
                },
                { 
                    term: "Simple Present", 
                    definition: "Tense used for habits and general truths.", 
                    defTrans: "Presente Simples",
                    example: "I study English every day.", 
                    audioFront: "TTS: Simple Present",
                    audioBack: "TTS: I study English every day." 
                },
                { 
                    term: "Present Continuous", 
                    definition: "Tense used for actions happening now.", 
                    defTrans: "Presente Contínuo",
                    example: "I am reading a book now.", 
                    audioFront: "TTS: Present Continuous",
                    audioBack: "TTS: I am reading a book now." 
                },
                { 
                    term: "Adverb Position (To Be)", 
                    definition: "Adverbs of frequency come AFTER the verb 'To Be'.", 
                    defTrans: "Depois do verbo To Be",
                    example: "He is usually happy.", 
                    audioFront: "TTS: Adverb Position after the verb To Be",
                    audioBack: "TTS: He is usually happy." 
                },
                { 
                    term: "Adverb Position (Main Verb)", 
                    definition: "Adverbs of frequency come BEFORE the main verb.", 
                    defTrans: "Antes do verbo principal",
                    example: "I always do my homework.", 
                    audioFront: "TTS: Adverb Position before the main verb",
                    audioBack: "TTS: I always do my homework." 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (New Format)
    // ======================================================
        glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 tooltips) ---
        { 
            topic: "Context", 
            term: "working-on-right-now", 
            definition: "The act of performing a specific task at the current moment.", 
            translation: "Trabalhando em agora" 
        },
        { 
            topic: "Context", 
            term: "watching", 
            definition: "Looking at or observing something over a period of time.", 
            translation: "Assistindo" 
        },
        { 
            topic: "Context", 
            term: "pronunciation", 
            definition: "The way in which a word or a language is spoken.", 
            translation: "Pronúncia" 
        },
        { 
            topic: "Context", 
            term: "listening-skills", 
            definition: "The ability to accurately receive and interpret audio messages.", 
            translation: "Habilidades de escuta" 
        },
        { 
            topic: "Context", 
            term: "works-for-you", 
            definition: "Something that is effective, suitable, or successful for a specific person.", 
            translation: "Funciona para você" 
        },
        { 
            topic: "Context", 
            term: "reading", 
            definition: "The action or skill of reading written or printed matter silently or aloud.", 
            translation: "Lendo" 
        },
        { 
            topic: "Context", 
            term: "make-a-plan", 
            definition: "To decide on and arrange a set of actions in advance.", 
            translation: "Fazer um plano" 
        },

        // --- TOPIC 2: FREQUENCY & HABITS ---
        { 
            topic: "Frequency & Habits", 
            term: "Always", 
            definition: "At all times; on all occasions; 100% of the time.", 
            translation: "Sempre" 
        },
        { 
            topic: "Frequency & Habits", 
            term: "Usually", 
            definition: "Under normal conditions; generally.", 
            translation: "Geralmente" 
        },
        { 
            topic: "Frequency & Habits", 
            term: "Often", 
            definition: "Frequently; many times.", 
            translation: "Frequentemente" 
        },
        { 
            topic: "Frequency & Habits", 
            term: "Sometimes", 
            definition: "Occasionally; rather than all the time.", 
            translation: "Às vezes" 
        },
        { 
            topic: "Frequency & Habits", 
            term: "Rarely", 
            definition: "Not often; seldom.", 
            translation: "Raramente" 
        },
        { 
            topic: "Frequency & Habits", 
            term: "Never", 
            definition: "At no time in the past or future.", 
            translation: "Nunca" 
        },
        { 
            topic: "Frequency & Habits", 
            term: "Every day", 
            definition: "Happening or used each day; daily.", 
            translation: "Todo dia" 
        },
        { 
            topic: "Frequency & Habits", 
            term: "Every week", 
            definition: "Happening once a week.", 
            translation: "Toda semana" 
        },
        { 
            topic: "Frequency & Habits", 
            term: "Every month", 
            definition: "Happening or produced once every month.", 
            translation: "Todo mês" 
        },
        { 
            topic: "Frequency & Habits", 
            term: "Once a week", 
            definition: "One time in a seven-day period.", 
            translation: "Uma vez por semana" 
        },
        { 
            topic: "Frequency & Habits", 
            term: "Twice a month", 
            definition: "Two times within a monthly period.", 
            translation: "Duas vezes por mês" 
        },

        // --- TOPIC 3: TIME MARKERS ---
        { 
            topic: "Time Markers", 
            term: "Now", 
            definition: "At the present time or moment.", 
            translation: "Agora" 
        },
        { 
            topic: "Time Markers", 
            term: "Right now", 
            definition: "At this exact moment.", 
            translation: "Agora mesmo" 
        },
        { 
            topic: "Time Markers", 
            term: "At the moment", 
            definition: "Currently; at this time.", 
            translation: "No momento" 
        },
        { 
            topic: "Time Markers", 
            term: "Currently", 
            definition: "At the present time.", 
            translation: "Atualmente" 
        },
        { 
            topic: "Time Markers", 
            term: "Today", 
            definition: "On or in the course of this present day.", 
            translation: "Hoje" 
        },
        { 
            topic: "Time Markers", 
            term: "This week", 
            definition: "During the current week.", 
            translation: "Essa semana" 
        },

        // --- TOPIC 4: STRATEGIES & CONCEPTS ---
        { 
            topic: "Strategies", 
            term: "Strategy", 
            definition: "A plan of action or policy designed to achieve a major or overall aim.", 
            translation: "Estratégia" 
        },
        { 
            topic: "Strategies", 
            term: "Technique", 
            definition: "A way of carrying out a particular task.", 
            translation: "Técnica" 
        },
        { 
            topic: "Strategies", 
            term: "Method", 
            definition: "A particular form of procedure for accomplishing something.", 
            translation: "Método" 
        },
        { 
            topic: "Strategies", 
            term: "Learning-Style", 
            definition: "An individual's unique approach to learning based on strengths.", 
            translation: "Estilo de Aprendizagem" 
        },
        { 
            topic: "Strategies", 
            term: "Practice", 
            definition: "To perform an activity repeatedly in order to improve.", 
            translation: "Praticar" 
        },
        { 
            topic: "Strategies", 
            term: "Improve", 
            definition: "To make or become better.", 
            translation: "Melhorar" 
        },
        { 
            topic: "Strategies", 
            term: "Review", 
            definition: "To examine or assess something formally with the possibility of change.", 
            translation: "Revisar" 
        },
        { 
            topic: "Strategies", 
            term: "Memorize", 
            definition: "To commit to memory; learn by heart.", 
            translation: "Memorizar" 
        },
        { 
            topic: "Strategies", 
            term: "Understand", 
            definition: "To perceive the intended meaning of words or a speaker.", 
            translation: "Entender" 
        },
        { 
            topic: "Strategies", 
            term: "Effective", 
            definition: "Successful in producing a desired or intended result.", 
            translation: "Eficaz" 
        },
        { 
            topic: "Strategies", 
            term: "Efficient", 
            definition: "Achieving maximum productivity with minimum wasted effort.", 
            translation: "Eficiente" 
        },
        // --- TOPIC 5: MEDIA & STUDY TOOLS ---
        { 
            topic: "Media & Tools", 
            term: "Subtitle", 
            definition: "Captions displayed at the bottom of a movie or television screen.", 
            translation: "Legenda" 
        },
        { 
            topic: "Media & Tools", 
            term: "YouTuber", 
            definition: "A person who uploads, produces, or appears in videos on YouTube.", 
            translation: "Criador de conteúdo do YouTube" 
        },
        { 
            topic: "Media & Tools", 
            term: "Lyrics", 
            definition: "The words of a song.", 
            translation: "Letra (de música)" 
        },
        { 
            topic: "Media & Tools", 
            term: "Article", 
            definition: "A piece of writing included with others in a newspaper or magazine.", 
            translation: "Artigo" 
        },
        { 
            topic: "Media & Tools", 
            term: "Essay", 
            definition: "A short piece of writing on a particular subject.", 
            translation: "Redação / Ensaio" 
        },
        { 
            topic: "Media & Tools", 
            term: "podcast", 
            definition: "A digital audio file available on the internet for downloading.", 
            translation: "Podcast" 
        },
        { 
            topic: "Media & Tools", 
            term: "flashcards", 
            definition: "Cards containing a small amount of information as an aid to learning.", 
            translation: "Cartões de memória" 
        },
        { 
            topic: "Media & Tools", 
            term: "Skill", 
            definition: "The ability to do something well; expertise.", 
            translation: "Habilidade" 
        },

        // --- TOPIC 6: VERBS (Action & Communication) ---
        { 
            topic: "Verbs", 
            term: "agree", 
            definition: "To have the same opinion about something.", 
            translation: "Concordar" 
        },
        { 
            topic: "Verbs", 
            term: "be", 
            definition: "To exist or occur.", 
            translation: "Ser / Estar" 
        },
        { 
            topic: "Verbs", 
            term: "become", 
            definition: "To begin to be; turn into.", 
            translation: "Tornar-se" 
        },
        { 
            topic: "Verbs", 
            term: "buy", 
            definition: "To obtain in exchange for payment.", 
            translation: "Comprar" 
        },
        { 
            topic: "Verbs", 
            term: "choose", 
            definition: "To pick out or select.", 
            translation: "Escolher" 
        },
        { 
            topic: "Verbs", 
            term: "come", 
            definition: "To move or travel towards or into a place.", 
            translation: "Vir" 
        },
        { 
            topic: "Verbs", 
            term: "Compare", 
            definition: "To estimate, measure, or note the similarity or dissimilarity between.", 
            translation: "Comparar" 
        },
        { 
            topic: "Verbs", 
            term: "connect", 
            definition: "To bring together or into contact so that a link is established.", 
            translation: "Conectar" 
        },
        { 
            topic: "Verbs", 
            term: "create", 
            definition: "To bring something into existence.", 
            translation: "Criar" 
        },
        { 
            topic: "Verbs", 
            term: "decide", 
            definition: "To come to a resolution in the mind as a result of consideration.", 
            translation: "Decidir" 
        },
        { 
            topic: "Verbs", 
            term: "Describe", 
            definition: "To give an account in words, including all relevant characteristics.", 
            translation: "Descrever" 
        },
        { 
            topic: "Verbs", 
            term: "Develop", 
            definition: "To grow or cause to grow and become more mature or advanced.", 
            translation: "Desenvolver" 
        },
        { 
            topic: "Verbs", 
            term: "Discover", 
            definition: "To find something unexpectedly or in the course of a search.", 
            translation: "Descobrir" 
        },
        { 
            topic: "Verbs", 
            term: "do", 
            definition: "To perform an action.", 
            translation: "Fazer" 
        },
        { 
            topic: "Verbs", 
            term: "Expect", 
            definition: "To regard something as likely to happen.", 
            translation: "Esperar (expectativa)" 
        },
        { 
            topic: "Verbs", 
            term: "explain", 
            definition: "To make an idea, situation, or problem clear to someone.", 
            translation: "Explicar" 
        },
        { 
            topic: "Verbs", 
            term: "explore", 
            definition: "To travel in or through an unfamiliar area in order to learn about it.", 
            translation: "Explorar" 
        },
        { 
            topic: "Verbs", 
            term: "fail", 
            definition: "To be unsuccessful in achieving one's goal.", 
            translation: "Falhar / Reprovar" 
        },
        { 
            topic: "Verbs", 
            term: "find", 
            definition: "To discover or perceive by chance or unexpectedly.", 
            translation: "Encontrar / Achar" 
        },
        { 
            topic: "Verbs", 
            term: "fix", 
            definition: "To mend or repair.", 
            translation: "Consertar" 
        },
        { 
            topic: "Verbs", 
            term: "follow", 
            definition: "To go or move behind or in the same direction as.", 
            translation: "Seguir" 
        },
        { 
            topic: "Verbs", 
            term: "get", 
            definition: "To come to have or hold (something); receive.", 
            translation: "Obter / Conseguir / Entender" 
        },
        { 
            topic: "Verbs", 
            term: "go", 
            definition: "To move from one place to another.", 
            translation: "Ir" 
        },
        { 
            topic: "Verbs", 
            term: "grow", 
            definition: "To undergo natural development by increasing in size.", 
            translation: "Crescer" 
        },
        { 
            topic: "Verbs", 
            term: "help", 
            definition: "To make it easier for (someone) to do something.", 
            translation: "Ajudar" 
        },
        { 
            topic: "Verbs", 
            term: "learn", 
            definition: "To gain or acquire knowledge or skill by study.", 
            translation: "Aprender" 
        },
        { 
            topic: "Verbs", 
            term: "like", 
            definition: "To find agreeable, enjoyable, or satisfactory.", 
            translation: "Gostar" 
        },
        { 
            topic: "Verbs", 
            term: "listen", 
            definition: "To give one's attention to a sound.", 
            translation: "Escutar" 
        },
        { 
            topic: "Verbs", 
            term: "look", 
            definition: "To direct one's gaze toward someone or something.", 
            translation: "Olhar" 
        },
        { 
            topic: "Verbs", 
            term: "love", 
            definition: "To have a deep affection for.", 
            translation: "Amar" 
        },
        { 
            topic: "Verbs", 
            term: "paint", 
            definition: "To apply paint to a surface.", 
            translation: "Pintar" 
        },
        { 
            topic: "Verbs", 
            term: "pay", 
            definition: "To give money in exchange for goods or services.", 
            translation: "Pagar" 
        },
        { 
            topic: "Verbs", 
            term: "plan", 
            definition: "To decide on and arrange in advance.", 
            translation: "Planejar" 
        },
        { 
            topic: "Verbs", 
            term: "practice", 
            definition: "To perform an activity repeatedly to improve proficiency.", 
            translation: "Praticar" 
        },
        { 
            topic: "Verbs", 
            term: "prefer", 
            definition: "To like (one thing or person) better than another.", 
            translation: "Preferir" 
        },
        { 
            topic: "Verbs", 
            term: "read", 
            definition: "To look at and comprehend the meaning of written matter.", 
            translation: "Ler" 
        },
        { 
            topic: "Verbs", 
            term: "say", 
            definition: "To utter words so as to convey information.", 
            translation: "Dizer" 
        },
        { 
            topic: "Verbs", 
            term: "see", 
            definition: "To perceive with the eyes; discern visually.", 
            translation: "Ver" 
        },
        { 
            topic: "Verbs", 
            term: "Share", 
            definition: "To have a portion of something with another or others.", 
            translation: "Compartilhar" 
        },
        { 
            topic: "Verbs", 
            term: "sound", 
            definition: "To convey a specified impression when heard.", 
            translation: "Soar / Parecer (pelo som)" 
        },
        { 
            topic: "Verbs", 
            term: "speak", 
            definition: "To say something in order to convey information.", 
            translation: "Falar" 
        },
        { 
            topic: "Verbs", 
            term: "study", 
            definition: "To devote time and attention to acquiring knowledge.", 
            translation: "Estudar" 
        },
        { 
            topic: "Verbs", 
            term: "suppose", 
            definition: "To assume that something is the case without proof.", 
            translation: "Supor" 
        },
        { 
            topic: "Verbs", 
            term: "take-care", 
            definition: "To be cautious; to look after.", 
            translation: "Cuidar" 
        },
        { 
            topic: "Verbs", 
            term: "teach", 
            definition: "To show or explain to someone how to do something.", 
            translation: "Ensinar" 
        },
        { 
            topic: "Verbs", 
            term: "try", 
            definition: "To make an attempt or effort to do something.", 
            translation: "Tentar / Experimentar" 
        },
        { 
            topic: "Verbs", 
            term: "want", 
            definition: "To have a desire to possess or do something.", 
            translation: "Querer" 
        },
        { 
            topic: "Verbs", 
            term: "work", 
            definition: "To be engaged in physical or mental activity.", 
            translation: "Trabalhar" 
        },


        // --- TOPIC 7: EXPRESSIONS ---
        { 
            topic: "Expressions", 
            term: "What works for you?", 
            definition: "A question asking about the most effective method for a specific person.", 
            translation: "O que funciona para você?" 
        },
        { 
            topic: "Expressions", 
            term: "I find it helpful to...", 
            definition: "A phrase used to express personal opinion on the utility of an action.", 
            translation: "Eu acho útil..." 
        },
        { 
            topic: "Expressions", 
            term: "That sounds interesting!", 
            definition: "An expression used to show interest or curiosity.", 
            translation: "Isso parece interessante!" 
        },

        // --- TOPIC 8: GRAMMAR POINTS ---
        { 
            topic: "Grammar", 
            term: "Imperative", 
            definition: "The verb form used for commands, requests, or advice.", 
            translation: "Imperativo" 
        },
        { 
            topic: "Grammar", 
            term: "Simple Present", 
            definition: "The tense used to describe habits, general truths, and fixed arrangements.", 
            translation: "Presente simples" 
        },
        { 
            topic: "Grammar", 
            term: "Present Continuous", 
            definition: "The tense used to describe actions happening now or temporary situations.", 
            translation: "Presente contínuo" 
        },
        { 
            topic: "Grammar", 
            term: "Adverb Position", 
            definition: "The rule stating adverbs come before main verbs but after the verb 'To Be'.", 
            translation: "Posição do advérbio" 
        },
        { 
    topic: "General Nouns", 
    term: "task", 
    definition: "A piece of work to be done or undertaken.", 
    translation: "Tarefa" 
},
{ 
    topic: "General Nouns", 
    term: "price", 
    definition: "The amount of money expected or required in payment for something.", 
    translation: "Preço" 
},
{ 
    topic: "General Nouns", 
    term: "aisle", 
    definition: "A passage between rows of seats or shelves (like in a supermarket).", 
    translation: "Corredor" 
},
{ 
    topic: "General Nouns", 
    term: "brand", 
    definition: "A type of product manufactured by a particular company.", 
    translation: "Marca" 
},
{ 
    topic: "General Nouns", 
    term: "style", 
    definition: "A particular manner or way of doing something.", 
    translation: "Estilo" 
},
{ 
    topic: "General Nouns", 
    term: "spree", 
    definition: "A sustained period of unrestrained activity (usually shopping).", 
    translation: "Farra / Sessão (de compras)" 
},
{ 
    topic: "General Nouns", 
    term: "refund", 
    definition: "A repayment of a sum of money, typically to a dissatisfied customer.", 
    translation: "Reembolso" 
},
{ 
    topic: "General Nouns", 
    term: "sale", 
    definition: "A period during which a retailer sells goods at reduced prices.", 
    translation: "Liquidação / Promoção" 
}
    ]

});