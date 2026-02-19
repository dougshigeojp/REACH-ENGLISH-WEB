/**
 * REACH English - LESSON DATA 7-3-6
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "7-3-6", 
    grade: "7th Grade",       
    bimester: "3",   
    chapter: "6",    
    chapterTitle: "They Made It!", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Talk about inspirational life stories and challenges.<br>• Describe emotions and feelings in the past.<br>• Use the Past Continuous tense (I was working).<br>• Connect past actions using \"when\" and \"while\".<br>• Differentiate between Simple Past and Past Continuous.",
            welcome: "Hello, Dreamers! It's Mr. D!<br><br>Welcome to \"They Made It!\". Today, we are going to get inspired! We will talk about amazing people who overcame huge difficulties to achieve their dreams. We'll learn words to describe deep feelings like pride, determination, and hope. To tell these stories, we will master the Past Continuous tense to describe what was happening in the past. Let's learn how to never give up!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about inspirational life stories and challenges. Describe emotions and feelings in the past. Use the Past Continuous tense. Connect past actions using when and while. And differentiate between Simple Past and Past Continuous.",
                welcome: "TTS: Hello, Dreamers! It's Mr. D! Welcome to They Made It! Today, we are going to get inspired! We will talk about amazing people who overcame huge difficulties to achieve their dreams. We'll learn words to describe deep feelings like pride, determination, and hope. To tell these stories, we will master the Past Continuous tense to describe what was happening in the past. Let's learn how to never give up!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Celine is reading a biography in a library or quiet study room. She looks emotional as Albert approaches her.", 
            contextAudio: "audio/7-3-6/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "Hey Celine. What were you [reading](tooltip:reading)? You look [surprised](tooltip:surprised)." 
                },
                { 
                    speaker: "Celine", 
                    text: "I was reading a [life story](tooltip:life-story) about a famous athlete. She [faced](tooltip:faced) many [obstacles](tooltip:obstacles)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Really? What happened?" 
                },
                { 
                    speaker: "Celine", 
                    text: "[While](tooltip:while) she was [training](tooltip:training) for the Olympics, she [broke](tooltip:broke) her leg." 
                },
                { 
                    speaker: "Albert", 
                    text: "Oh no! Did she [give up](tooltip:give-up)?" 
                },
                { 
                    speaker: "Celine", 
                    text: "No! She was feeling [sad](tooltip:sad), but she [kept trying](tooltip:kept-trying). She [overcame](tooltip:overcome) the [difficulty](tooltip:difficulty)." 
                },
                { 
                    speaker: "Albert", 
                    text: "That is incredible. She was very [determined](tooltip:determined)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Yes. She [achieved](tooltip:achieved) her [goal](tooltip:goal) in the end." 
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
                    title: "Verbs (Challenges & Success)",
                    audio: "TTS: Overcome. Succeed. Achieve. Try. Practice. Work hard. Give up. Believe. Support. Dream. Fail. Face.",
                    items: [
                        { term: "Overcome", trans: "Superar" },
                        { term: "Succeed", trans: "Ter sucesso" },
                        { term: "Achieve", trans: "Alcançar / Conquistar" },
                        { term: "Try", trans: "Tentar" },
                        { term: "Practice", trans: "Praticar" },
                        { term: "Work hard", trans: "Trabalhar duro" },
                        { term: "Give up", trans: "Desistir" },
                        { term: "Believe", trans: "Acreditar" },
                        { term: "Support", trans: "Apoiar" },
                        { term: "Dream", trans: "Sonhar" },
                        { term: "Fail", trans: "Falhar / Fracassar" },
                        { term: "Face", trans: "Enfrentar / Encarar" }
                    ]
                },
                {
                    title: "Emotions & Feelings",
                    audio: "TTS: Happy. Sad. Excited. Tired. Worried. Scared. Afraid. Surprised. Proud. Confident. Nervous. Hopeful. Determined. Brave.",
                    items: [
                        { term: "Happy", trans: "Feliz" },
                        { term: "Sad", trans: "Triste" },
                        { term: "Excited", trans: "Empolgada / Animada" },
                        { term: "Tired", trans: "Cansada" },
                        { term: "Worried", trans: "Preocupada" },
                        { term: "Scared / Afraid", trans: "Assustada / Com medo" },
                        { term: "Surprised", trans: "Surpresa" },
                        { term: "Proud", trans: "Orgulhosa" },
                        { term: "Confident", trans: "Confiante" },
                        { term: "Nervous", trans: "Nervosa" },
                        { term: "Hopeful", trans: "Esperançosa" },
                        { term: "Determined", trans: "Determinada" },
                        { term: "Brave", trans: "Corajosa" }
                    ]
                },
                {
                    title: "Life & Success Nouns",
                    audio: "TTS: Life Story. Challenge. Difficulty. Obstacle. Problem. Goal. Dream. Success. Failure. Inspiration. Amazing. Incredible.",
                    items: [
                        { term: "Life Story", trans: "História de vida" },
                        { term: "Challenge", trans: "Desafio" },
                        { term: "Difficulty", trans: "Dificuldade" },
                        { term: "Obstacle", trans: "Obstáculo" },
                        { term: "Problem", trans: "Problema" },
                        { term: "Goal / Dream", trans: "Meta / Sonho" },
                        { term: "Success", trans: "Sucesso" },
                        { term: "Failure", trans: "Fracasso / Falha" },
                        { term: "Inspiration", trans: "Inspiração" },
                        { term: "Amazing", trans: "Incrível / Impressionante" },
                        { term: "Incredible", trans: "Incrível" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Never give up. Believe in yourself. What were you doing? While. When.",
                    items: [
                        { term: "Never give up", trans: "Nunca desista" },
                        { term: "Believe in yourself", trans: "Acredite em si mesmo" },
                        { term: "What were you doing?", trans: "O que você estava fazendo?" },
                        { term: "While...", trans: "Enquanto..." },
                        { term: "When...", trans: "Quando..." }
                    ]
                }
            ], // This closes the areas array in Step 2

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Verbs (Challenges & Success)",
                    audio: "TTS: He overcame his fear. She succeeded in the test. We achieved our goal. I tried to help. They practiced every day. You must work hard. Don't give up now! I believe in you. My family supports me. He dreamed of winning. Don't be afraid to fail. She faced the problem.",
                    items: [
                        { term: "Overcome", sent: "He overcame his fear.", trans: "<span style='color:#0077b6'>Ele superou o medo dele.</span>" },
                        { term: "Succeed", sent: "She succeeded in the test.", trans: "<span style='color:#0077b6'>Ela teve sucesso no teste.</span>" },
                        { term: "Achieve", sent: "We achieved our goal.", trans: "<span style='color:#0077b6'>Nós alcançamos nossa meta.</span>" },
                        { term: "Try", sent: "I tried to help.", trans: "<span style='color:#0077b6'>Eu tentei ajudar.</span>" },
                        { term: "Practice", sent: "They practiced every day.", trans: "<span style='color:#0077b6'>Eles praticaram todo dia.</span>" },
                        { term: "Work hard", sent: "You must work hard.", trans: "<span style='color:#0077b6'>Você deve trabalhar duro.</span>" },
                        { term: "Give up", sent: "Don't give up now!", trans: "<span style='color:#0077b6'>Não desista agora!</span>" },
                        { term: "Believe", sent: "I believe in you.", trans: "<span style='color:#0077b6'>Eu acredito em você.</span>" },
                        { term: "Support", sent: "My family supports me.", trans: "<span style='color:#0077b6'>Minha família me apoia.</span>" },
                        { term: "Dream", sent: "He dreamed of winning.", trans: "<span style='color:#0077b6'>Ele sonhou em ganhar.</span>" },
                        { term: "Fail", sent: "Don't be afraid to fail.", trans: "<span style='color:#0077b6'>Não tenha medo de falhar.</span>" },
                        { term: "Face", sent: "She faced the problem.", trans: "<span style='color:#0077b6'>Ela encarou o problema.</span>" }
                    ]
                },
                {
                    title: "Emotions & Feelings",
                    audio: "TTS: I was happy yesterday. The movie was sad. We were excited about the trip. He is tired after work. Mom was worried. Are you scared? I was surprised by the news. She is proud of her son. Be confident! He felt nervous before the game. I am hopeful for the future. She was determined to win. The firefighter was brave.",
                    items: [
                        { term: "Happy", sent: "I was happy yesterday.", trans: "<span style='color:#0077b6'>Eu estava feliz ontem.</span>" },
                        { term: "Sad", sent: "The movie was sad.", trans: "<span style='color:#0077b6'>O filme foi triste.</span>" },
                        { term: "Excited", sent: "We were excited about the trip.", trans: "<span style='color:#0077b6'>Nós estávamos empolgados com a viagem.</span>" },
                        { term: "Tired", sent: "He is tired after work.", trans: "<span style='color:#0077b6'>Ele está cansado depois do trabalho.</span>" },
                        { term: "Worried", sent: "Mom was worried.", trans: "<span style='color:#0077b6'>Mamãe estava preocupada.</span>" },
                        { term: "Scared", sent: "Are you scared?", trans: "<span style='color:#0077b6'>Você está com medo?</span>" },
                        { term: "Surprised", sent: "I was surprised by the news.", trans: "<span style='color:#0077b6'>Fiquei surpreso com a notícia.</span>" },
                        { term: "Proud", sent: "She is proud of her son.", trans: "<span style='color:#0077b6'>Ela está orgulhosa do filho dela.</span>" },
                        { term: "Confident", sent: "Be confident!", trans: "<span style='color:#0077b6'>Seja confiante!</span>" },
                        { term: "Nervous", sent: "He felt nervous before the game.", trans: "<span style='color:#0077b6'>Ele se sentiu nervoso antes do jogo.</span>" },
                        { term: "Hopeful", sent: "I am hopeful for the future.", trans: "<span style='color:#0077b6'>Estou esperançoso para o futuro.</span>" },
                        { term: "Determined", sent: "She was determined to win.", trans: "<span style='color:#0077b6'>Ela estava determinada a vencer.</span>" },
                        { term: "Brave", sent: "The firefighter was brave.", trans: "<span style='color:#0077b6'>O bombeiro foi corajoso.</span>" }
                    ]
                },
                {
                    title: "Life & Success Nouns",
                    audio: "TTS: This book is her life story. It was a big challenge. He had some difficulty. We moved the obstacle. Can you solve the problem? My goal is to learn English. The party was a success. Failure is part of learning. You are an inspiration. The view is amazing. That story is incredible.",
                    items: [
                        { term: "Life Story", sent: "This book is her life story.", trans: "<span style='color:#0077b6'>Este livro é a história de vida dela.</span>" },
                        { term: "Challenge", sent: "It was a big challenge.", trans: "<span style='color:#0077b6'>Foi um grande desafio.</span>" },
                        { term: "Difficulty", sent: "He had some difficulty.", trans: "<span style='color:#0077b6'>Ele teve alguma dificuldade.</span>" },
                        { term: "Obstacle", sent: "We moved the obstacle.", trans: "<span style='color:#0077b6'>Nós movemos o obstáculo.</span>" },
                        { term: "Problem", sent: "Can you solve the problem?", trans: "<span style='color:#0077b6'>Você consegue resolver o problema?</span>" },
                        { term: "Goal", sent: "My goal is to learn English.", trans: "<span style='color:#0077b6'>Minha meta é aprender inglês.</span>" },
                        { term: "Success", sent: "The party was a success.", trans: "<span style='color:#0077b6'>A festa foi um sucesso.</span>" },
                        { term: "Failure", sent: "Failure is part of learning.", trans: "<span style='color:#0077b6'>O fracasso é parte do aprendizado.</span>" },
                        { term: "Inspiration", sent: "You are an inspiration.", trans: "<span style='color:#0077b6'>Você é uma inspiração.</span>" },
                        { term: "Amazing", sent: "The view is amazing.", trans: "<span style='color:#0077b6'>A vista é incrível.</span>" },
                        { term: "Incredible", sent: "That story is incredible.", trans: "<span style='color:#0077b6'>Aquela história é incrível.</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Never give up on your dreams. What were you doing at 8 PM? While I was sleeping, it rained.",
                    items: [
                        { term: "Never give up", sent: "Never give up on your dreams.", trans: "<span style='color:#0077b6'>Nunca desista dos seus sonhos.</span>" },
                        { term: "What were you doing?", sent: "What were you doing at 8 PM?", trans: "<span style='color:#0077b6'>O que você estava fazendo às 20h?</span>" },
                        { term: "While...", sent: "While I was sleeping, it rained.", trans: "<span style='color:#0077b6'>Enquanto eu estava dormindo, choveu.</span>" }
                    ]
                }
            ], // This closes the exampleGroups array

            // 2C: Practice Drills (Part 1: 1-12)
            drills: [
                {
                    type: "mcq",
                    q: "Choose the past form of 'Overcome':",
                    options: [
                        { t: "Overcomed", c: false },
                        { t: "Overcame", c: true },
                        { t: "Overcoming", c: false },
                        { t: "Overcomes", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the synonym for 'Quit':",
                    options: [
                        { t: "Succeed", c: false },
                        { t: "Give up", c: true },
                        { t: "Try", c: false },
                        { t: "Achieve", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If you achieve your goal, you feel...",
                    options: [
                        { t: "Sad", c: false },
                        { t: "Proud", c: true },
                        { t: "Worried", c: false },
                        { t: "Scared", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Before a big test, you might feel...",
                    options: [
                        { t: "Nervous", c: true },
                        { t: "Brave", c: false },
                        { t: "Tired", c: false },
                        { t: "Happy", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Something that blocks your way is an...",
                    options: [
                        { t: "Inspiration", c: false },
                        { t: "Obstacle", c: true },
                        { t: "Goal", c: false },
                        { t: "Success", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A story about a person's life is a...",
                    options: [
                        { t: "Life Story", c: true },
                        { t: "Failure", c: false },
                        { t: "Dream", c: false },
                        { t: "Fiction", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Something very good and surprising is...",
                    options: [
                        { t: "Terrible", c: false },
                        { t: "Incredible", c: true },
                        { t: "Boring", c: false },
                        { t: "Sad", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: '_______ I was walking, I saw a dog.'",
                    options: [
                        { t: "When", c: false },
                        { t: "While", c: true },
                        { t: "Where", c: false },
                        { t: "What", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'She _______ (trabalhou duro) to win.'",
                    options: [
                        { t: "worked hard", c: true },
                        { t: "gave up", c: false },
                        { t: "failed", c: false },
                        { t: "slept", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'You must _______ in yourself.'",
                    options: [
                        { t: "believe", c: true },
                        { t: "fear", c: false },
                        { t: "worry", c: false },
                        { t: "give up", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past form of 'Succeed':",
                    options: [
                        { t: "Succeed", c: false },
                        { t: "Succeeds", c: false },
                        { t: "Succeeded", c: true },
                        { t: "Succeeden", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past form of 'Achieve':",
                    options: [
                        { t: "Achieve", c: false },
                        { t: "Achieved", c: true },
                        { t: "Achieving", c: false },
                        { t: "Acheve", c: false }
                    ]
                },
                // 2C: Practice Drills (Part 2: 13-24)
                {
                    type: "mcq",
                    q: "Choose the synonym for 'Afraid':",
                    options: [
                        { t: "Happy", c: false },
                        { t: "Scared", c: true },
                        { t: "Proud", c: false },
                        { t: "Brave", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'The view from the top was _______.'",
                    options: [
                        { t: "Failure", c: false },
                        { t: "Boring", c: false },
                        { t: "Amazing", c: true },
                        { t: "Sad", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I _______ to help him with the bags.'",
                    options: [
                        { t: "tried", c: true },
                        { t: "tries", c: false },
                        { t: "tryed", c: false },
                        { t: "trying", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If you are anxious about a test, you are:",
                    options: [
                        { t: "Confident", c: false },
                        { t: "Happy", c: false },
                        { t: "Worried", c: true },
                        { t: "Tired", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'Failure is part of _______.'",
                    options: [
                        { t: "Learning", c: true },
                        { t: "Successing", c: false },
                        { t: "Obstacles", c: false },
                        { t: "Emotions", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The final part of the movie was very _______.",
                    options: [
                        { t: "Sad", c: false },
                        { t: "Exciting", c: true },
                        { t: "Obstacle", c: false },
                        { t: "Believe", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'They _______ the dance for weeks.'",
                    options: [
                        { t: "practice", c: false },
                        { t: "practiced", c: true },
                        { t: "practicing", c: false },
                        { t: "practicet", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Expression: 'Never _______ on your dreams.'",
                    options: [
                        { t: "fail", c: false },
                        { t: "face", c: false },
                        { t: "give up", c: true },
                        { t: "try", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'Can you solve this math _______?'",
                    options: [
                        { t: "Success", c: false },
                        { t: "Problem", c: true },
                        { t: "Goal", c: false },
                        { t: "Brave", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A person who faces danger with courage is:",
                    options: [
                        { t: "Nervous", c: false },
                        { t: "Scared", c: false },
                        { t: "Brave", c: true },
                        { t: "Tired", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past form of 'Dream':",
                    options: [
                        { t: "Dreaming", c: false },
                        { t: "Dreamed", c: true },
                        { t: "Dreams", c: false },
                        { t: "Dreamen", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'You are an _______ to all of us.'",
                    options: [
                        { t: "Difficulty", c: false },
                        { t: "Obstacle", c: false },
                        { t: "Inspiration", c: true },
                        { t: "Nervous", c: false }
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
                    title: "Past Continuous (Affirmative)",
                    audio: "TTS: We use the Past Continuous to talk about actions that were in progress at a specific time in the past. Use was or were plus the verb ending in i n g. I was working. They were studying.",
                    explanation: "We use the <b>Past Continuous</b> to talk about actions that were in progress (happening) at a specific time in the past. It emphasizes the duration of the action.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos o Past Continuous para falar de ações que estavam em progresso em um momento específico no passado. Ele enfatiza a duração da ação.)</span>",
                    samples: [
                        { en: "I / He / She / It + was + verb-ing", pt: "<span style='color:#0077b6'>I was working. (Eu estava trabalhando.)</span>" },
                        { en: "You / We / They + were + verb-ing", pt: "<span style='color:#0077b6'>They were studying. (Eles estavam estudando.)</span>" },
                        { en: "It was raining all day yesterday.", pt: "<span style='color:#0077b6'>Estava chovendo o dia todo ontem.</span>" }
                    ]
                },
                {
                    title: "Negative & Interrogative",
                    audio: "TTS: To make negative sentences, add not after was or were. I wasn't sleeping. To ask questions, put was or were before the subject. Were you listening?",
                    explanation: "For negative sentences, add <b>not</b> after was/were. For questions, put <b>Was/Were</b> before the subject.<br><br><span style='color:#0077b6; font-style:italic;'>(Para frases negativas, adicione 'not' depois de was/were. Para perguntas, coloque Was/Were antes do sujeito.)</span>",
                    samples: [
                        { en: "I was not (wasn't) sleeping.", pt: "<span style='color:#0077b6'>Eu não estava dormindo.</span>" },
                        { en: "We were not (weren't) studying.", pt: "<span style='color:#0077b6'>Nós não estávamos estudando.</span>" },
                        { en: "Was I dreaming?", pt: "<span style='color:#0077b6'>Eu estava sonhando?</span>" },
                        { en: "Were we playing?", pt: "<span style='color:#0077b6'>Nós estávamos brincando?</span>" }
                    ]
                },
                {
                    title: "Simple Past vs. Past Continuous",
                    audio: "TTS: The Past Continuous describes a long action or the background scene. The Simple Past describes a short action that interrupted it. I was watching TV when the lights went out.",
                    explanation: "The <b>Past Continuous</b> describes a longer action (the background). The <b>Simple Past</b> describes a shorter action that happened suddenly or interrupted the longer one.<br><br><span style='color:#0077b6; font-style:italic;'>(O Past Continuous descreve uma ação longa (o fundo). O Simple Past descreve uma ação curta que aconteceu de repente ou interrompeu a ação longa.)</span>",
                    samples: [
                        { en: "Past Continuous (Process): I was reading.", pt: "<span style='color:#0077b6'>Ação em progresso.</span>" },
                        { en: "Simple Past (Completed): I read the book.", pt: "<span style='color:#0077b6'>Ação concluída.</span>" },
                        { en: "I was watching TV when the phone rang.", pt: "<span style='color:#0077b6'>Eu estava assistindo TV quando o telefone tocou.</span>" }
                    ]
                },
                {
                    title: "When vs. While",
                    audio: "TTS: Use When to introduce the short action in the simple past. Use While to introduce the long action in the past continuous. While I was sleeping, he arrived.",
                    explanation: "<b>When</b> usually introduces the Simple Past (short action). <b>While</b> usually introduces the Past Continuous (long action) or simultaneous actions.<br><br><span style='color:#0077b6; font-style:italic;'>('When' geralmente introduz o Simple Past. 'While' geralmente introduz o Past Continuous ou ações simultâneas.)</span>",
                    samples: [
                        { en: "She was sleeping WHEN he arrived.", pt: "<span style='color:#0077b6'>Ela estava dormindo QUANDO ele chegou.</span>" },
                        { en: "He arrived WHILE she was sleeping.", pt: "<span style='color:#0077b6'>Ele chegou ENQUANTO ela estava dormindo.</span>" },
                        { en: "He was cooking WHILE she was reading.", pt: "<span style='color:#0077b6'>Dois processos ao mesmo tempo.</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Past Continuous (Affirmative)",
                    audio: "audio/7-3-6/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "I called you yesterday, but you didn't answer.", 
                            pt: "<span style='color:#0077b6'>Eu te liguei ontem, mas você não atendeu.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Sorry! I was practicing the piano. My brother was doing his homework.", 
                            pt: "<span style='color:#0077b6'>Desculpe! Eu estava praticando piano. Meu irmão estava fazendo a lição de casa dele.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Past Continuous (Negative & Question)",
                    audio: "audio/7-3-6/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Were you sleeping in class today?", 
                            pt: "<span style='color:#0077b6'>Você estava dormindo na aula hoje?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "No, I wasn't sleeping! I was thinking about my project.", 
                            pt: "<span style='color:#0077b6'>Não, eu não estava dormindo! Eu estava pensando no meu projeto.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Simple Past vs. Past Continuous (When/While)",
                    audio: "audio/7-3-6/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "How did you break your leg?", 
                            pt: "<span style='color:#0077b6'>Como você quebrou sua perna?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "I was running when I fell. It happened while I was training for the race.", 
                            pt: "<span style='color:#0077b6'>Eu estava correndo quando caí. Aconteceu enquanto eu estava treinando para a corrida.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice (Part 1: 1-12)
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Past Continuous - Affirmative: Complete: 'She _______ (work) all night.'",
                    options: [
                        { t: "worked", c: false },
                        { t: "was working", c: true },
                        { t: "is working", c: false },
                        { t: "were working", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Past Continuous - Negative: Complete: 'We _______ (not/play) games.'",
                    options: [
                        { t: "wasn't playing", c: false },
                        { t: "not playing", c: false },
                        { t: "weren't playing", c: true },
                        { t: "didn't playing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Past Continuous - Question: '_______ (he/feel) nervous?'",
                    options: [
                        { t: "Did he feel", c: false },
                        { t: "Was he feeling", c: true },
                        { t: "Is he feeling", c: false },
                        { t: "Were he feeling", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When vs. While: 'I was studying _______ my mom called.'",
                    options: [
                        { t: "while", c: false },
                        { t: "when", c: true },
                        { t: "where", c: false },
                        { t: "what", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When vs. While: 'The accident happened _______ he was driving.'",
                    options: [
                        { t: "when", c: false },
                        { t: "while", c: true },
                        { t: "where", c: false },
                        { t: "who", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Mixed Tenses: 'She _______ (sleep) when the alarm _______ (ring).'",
                    options: [
                        { t: "slept / rang", c: false },
                        { t: "was sleeping / ringing", c: false },
                        { t: "was sleeping / rang", c: true },
                        { t: "slept / was ringing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Subject Nouns: 'The students _______ (listen) to the teacher.'",
                    options: [
                        { t: "was listening", c: false },
                        { t: "were listening", c: true },
                        { t: "listened", c: false },
                        { t: "is listening", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Simultaneous Actions: 'He was reading _______ she was cooking.'",
                    options: [
                        { t: "when", c: false },
                        { t: "while", c: true },
                        { t: "but", c: false },
                        { t: "so", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I _______ (have) a beautiful dream when the phone rang.'",
                    options: [
                        { t: "had", c: false },
                        { t: "was having", c: true },
                        { t: "am having", c: false },
                        { t: "were having", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative form: 'They _______ (not/study) when I entered the room.'",
                    options: [
                        { t: "wasn't studying", c: false },
                        { t: "weren't studying", c: true },
                        { t: "didn't studying", c: false },
                        { t: "don't study", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Question: '_______ you _______ (watch) TV at 10 PM yesterday?'",
                    options: [
                        { t: "Were / watching", c: true },
                        { t: "Was / watching", c: false },
                        { t: "Did / watch", c: false },
                        { t: "Are / watching", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Mixed Tenses: 'While they _______ (walk), it started to rain.'",
                    options: [
                        { t: "walked", c: false },
                        { t: "were walking", c: true },
                        { t: "was walking", c: false },
                        { t: "are walking", c: false }
                    ]
                },
                // 3C: Grammar Practice (Part 2: 13-24)
                {
                    type: "mcq",
                    q: "Simultaneous Actions: 'My brother _______ (do) his homework while I _______ (practice) the piano.'",
                    options: [
                        { t: "did / practiced", c: false },
                        { t: "was doing / was practicing", c: true },
                        { t: "is doing / is practicing", c: false },
                        { t: "was doing / practiced", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Interruption: 'We _______ (eat) dinner when the electricity _______ (go) out.'",
                    options: [
                        { t: "ate / went", c: false },
                        { t: "were eating / was going", c: false },
                        { t: "were eating / went", c: true },
                        { t: "ate / was going", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative form: 'I _______ (not/sleep) when you called me.'",
                    options: [
                        { t: "wasn't sleeping", c: true },
                        { t: "weren't sleeping", c: false },
                        { t: "didn't sleeping", c: false },
                        { t: "don't sleep", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Question: 'What _______ you _______ (do) at 8 PM last night?'",
                    options: [
                        { t: "was / doing", c: false },
                        { t: "were / doing", c: true },
                        { t: "did / do", c: false },
                        { t: "are / doing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Agreement: 'Celine _______ (read) a life story about a famous athlete.'",
                    options: [
                        { t: "was reading", c: true },
                        { t: "were reading", c: false },
                        { t: "readed", c: false },
                        { t: "is reading", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling: 'While she _______ (train) for the Olympics, she broke her leg.'",
                    options: [
                        { t: "traind", c: false },
                        { t: "was trainning", c: false },
                        { t: "was training", c: true },
                        { t: "were training", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Mixed Tenses: 'The phone _______ (ring) while I _______ (take) a shower.'",
                    options: [
                        { t: "rang / was taking", c: true },
                        { t: "was ringing / took", c: false },
                        { t: "rang / took", c: false },
                        { t: "was ringing / was taking", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct word: 'I was feeling happy _______ I won the race.'",
                    options: [
                        { t: "while", c: false },
                        { t: "but", c: false },
                        { t: "when", c: true },
                        { t: "so", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct word: '_______ my friends were sleeping, I was running.'",
                    options: [
                        { t: "When", c: false },
                        { t: "While", c: true },
                        { t: "But", c: false },
                        { t: "So", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative Agreement: 'They _______ (not/working) hard enough.'",
                    options: [
                        { t: "wasn't working", c: false },
                        { t: "weren't working", c: true },
                        { t: "not were working", c: false },
                        { t: "didn't working", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Question: '_______ it _______ (rain) all day yesterday?'",
                    options: [
                        { t: "Was / raining", c: true },
                        { t: "Were / raining", c: false },
                        { t: "Did / rain", c: false },
                        { t: "Was / rain", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Context: 'She _______ (face) many obstacles to achieve her goal.'",
                    options: [
                        { t: "faced", c: true },
                        { t: "was face", c: false },
                        { t: "facing", c: false },
                        { t: "faces", c: false }
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
                    text: "I was studying all night.<br><small style='color:#0077b6'>(Eu estava estudando a noite toda.)</small>", 
                    audio: "TTS: I was studying all night.", 
                    arrow: "↘" 
                },
                { 
                    text: "She was feeling nervous.<br><small style='color:#0077b6'>(Ela estava se sentindo nervosa.)</small>", 
                    audio: "TTS: She was feeling nervous.", 
                    arrow: "↘" 
                },
                { 
                    text: "Were you working yesterday?<br><small style='color:#0077b6'>(Você estava trabalhando ontem?)</small>", 
                    audio: "TTS: Were you working yesterday?", 
                    arrow: "↗" 
                },
                { 
                    text: "He called while I was sleeping.<br><small style='color:#0077b6'>(Ele ligou enquanto eu estava dormindo.)</small>", 
                    audio: "TTS: He called while I was sleeping.", 
                    arrow: "↘" 
                },
                { 
                    text: "We were playing when it rained.<br><small style='color:#0077b6'>(Nós estávamos brincando quando choveu.)</small>", 
                    audio: "TTS: We were playing when it rained.", 
                    arrow: "↘" 
                },
                { 
                    text: "They never gave up.<br><small style='color:#0077b6'>(Eles nunca desistiram.)</small>", 
                    audio: "TTS: They never gave up.", 
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
                    instruction: "Listen to Albert talking about learning to skate and type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre aprender a andar de skate e digite as palavras que faltam.)</small>",
                    audio: "TTS: I wanted to learn to skate. I was practicing every day. I fell down many times, but I didn't give up.",
                    text: "I wanted to learn to skate. I [was practicing] every day. I [fell] down many times, but I didn't [give up]."
                },
                // Drill 2: Dropdown (MP3) - Combined context for engine stability
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue and choose the correct option.<br><small style='color:#0077b6'>(Ouça o diálogo e escolha a opção correta.)</small>",
                    audio: "audio/7-3-6/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Celine: What were you [doing | do] at 8 PM?", 
                            a: "doing" 
                        },
                        { 
                            q: "Albert: I was [watching | watch] a movie about a hero.", 
                            a: "watching" 
                        },
                        { 
                            q: "Celine: Was it [inspiring | boring]?", 
                            a: "inspiring" 
                        },
                        { 
                            q: "Albert: Yes, he [overcame | overcome] many obstacles.", 
                            a: "overcame" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the description and choose the correct feeling.<br><small style='color:#0077b6'>(Ouça a descrição e escolha o sentimento correto.)</small>",
                    audio: "TTS: She studied for weeks, and she passed the test with a perfect score. She smiled big.",
                    options: [
                        { t: "She was sad.", c: false },
                        { t: "She was worried.", c: false },
                        { t: "She was proud.", c: true },
                        { t: "She was tired.", c: false }
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
                    title: "The Big Race",
                    audio: "TTS: Sarah wanted to win the school race. She was determined. Every morning, she was running in the park while her friends were sleeping. One day, while she was training, she hurt her leg. She was feeling sad and worried. I can't run, she thought. But her dad supported her. Don't give up, he said. Sarah rested for a week. On the day of the race, she was nervous, but she ran fast and achieved her goal. || audio/7-3-6/p6_text1.mp3",
                    body: "Sarah wanted to win the school race. She was determined. Every morning, she was running in the park while her friends were sleeping. One day, while she was training, she hurt her leg. She was feeling sad and worried. \"I can't run,\" she thought. But her dad supported her. \"Don't give up,\" he said. Sarah rested for a week. On the day of the race, she was nervous, but she ran fast and achieved her goal.",
                    questions: [
                        { 
                            q: "What was Sarah doing every morning?", 
                            options: [ 
                                {t: "Sleeping", c: false}, 
                                {t: "Running", c: true}, 
                                {t: "Eating", c: false}, 
                                {t: "Studying", c: false} 
                            ] 
                        },
                        { 
                            q: "What happened while she was training?", 
                            options: [ 
                                {t: "It rained", c: false}, 
                                {t: "She won", c: false}, 
                                {t: "She hurt her leg", c: true}, 
                                {t: "She saw a friend", c: false} 
                            ] 
                        },
                        { 
                            q: "How did she feel on the day of the race?", 
                            options: [ 
                                {t: "Confident", c: false}, 
                                {t: "Happy", c: false}, 
                                {t: "Nervous", c: true}, 
                                {t: "Tired", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "A Hero's Story",
                    audio: "audio/7-3-6/p6_text2.mp3",
                    body: "<b>Albert:</b> Celine, I read a book about Thomas Edison.<br><b>Celine:</b> The inventor? What did it say?<br><b>Albert:</b> He failed many times while he was inventing the lightbulb.<br><b>Celine:</b> Really? I didn't know that.<br><b>Albert:</b> Yes. People were laughing at him, but he kept trying.<br><b>Celine:</b> That is amazing. He was very brave and determined.<br><b>Albert:</b> Exactly. He believed in himself when others didn't.",
                    questions: [
                        { 
                            q: "Who is Albert talking about?", 
                            options: [ 
                                {t: "Albert Einstein", c: false}, 
                                {t: "Thomas Edison", c: true}, 
                                {t: "His teacher", c: false}, 
                                {t: "A superhero", c: false} 
                            ] 
                        },
                        { 
                            q: "What happened while Edison was inventing?", 
                            options: [ 
                                {t: "He failed many times", c: true}, 
                                {t: "He slept a lot", c: false}, 
                                {t: "He gave up", c: false}, 
                                {t: "He was always happy", c: false} 
                            ] 
                        },
                        { 
                            q: "What did Celine think about him?", 
                            options: [ 
                                {t: "He was funny", c: false}, 
                                {t: "He was lucky", c: false}, 
                                {t: "He was brave and determined", c: true}, 
                                {t: "He was sad", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "A Busy Afternoon",
                    audio: "TTS: Yesterday afternoon was very chaotic at my house. Everyone was doing something different. My mom was cooking dinner in the kitchen. The radio was playing loud music. My brother was practicing the drums in his room. I was trying to study for a math test, but it was hard to concentrate. Suddenly, the electricity went out while we were all busy. The house became quiet. || audio/7-3-6/p6_text3.mp3",
                    body: "Yesterday afternoon was very chaotic at my house. Everyone was doing something different. My mom was cooking dinner in the kitchen. The radio was playing loud music. My brother was practicing the drums in his room. I was trying to study for a math test, but it was hard to concentrate. Suddenly, the electricity went out while we were all busy. The house became quiet.",
                    questions: [
                        { 
                            q: "What was the mom doing?", 
                            options: [ 
                                {t: "Practicing drums", c: false}, 
                                {t: "Studying", c: false}, 
                                {t: "Cooking dinner", c: true}, 
                                {t: "Sleeping", c: false} 
                            ] 
                        },
                        { 
                            q: "Why was it hard to study?", 
                            options: [ 
                                {t: "It was dark", c: false}, 
                                {t: "It was quiet", c: false}, 
                                {t: "It was noisy", c: true}, 
                                {t: "He was tired", c: false} 
                            ] 
                        },
                        { 
                            q: "What happened suddenly?", 
                            options: [ 
                                {t: "The phone rang", c: false}, 
                                {t: "The electricity went out", c: true}, 
                                {t: "Someone knocked on the door", c: false}, 
                                {t: "Dinner was ready", c: false} 
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
                    instruction: "Match the feeling with a similar meaning or description.<br><small style='color:#0077b6'>(Combine o sentimento com um significado ou descrição semelhante.)</small>",
                    pairs: [
                        { left: "Scared", right: "Afraid", val: "1" },
                        { left: "Happy", right: "Glad / Cheerful", val: "2" },
                        { left: "Determined", right: "Focused on a goal", val: "3" },
                        { left: "Worried", right: "Anxious / Nervous", val: "4" }
                    ]
                },
                // Drill 2: Word Order
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "reading / I / when / fell / was / I / .",
                    correct: "I was reading when I fell ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "were / They / hard / working / .",
                    correct: "They were working hard ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "she / crying / Was / ?",
                    correct: "Was she crying ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "called / cooking / while / He / was / she / .",
                    correct: "He called while she was cooking ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Happy", c: false },
                        { t: "Sad", c: false },
                        { t: "Run", c: true }, // Verb
                        { t: "Excited", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "When", c: false },
                        { t: "While", c: false },
                        { t: "But", c: false },
                        { t: "Car", c: true } // Noun
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Was", c: false },
                        { t: "Were", c: false },
                        { t: "Did", c: false },
                        { t: "Been", c: true } // Participle
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Success", c: false },
                        { t: "Goal", c: false },
                        { t: "Dream", c: false },
                        { t: "Table", c: true } // Object
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.<br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "I [was | were | when | while] sleeping at 10 PM.", a: "was" },
                        { q: "They [were | was | when | while] playing soccer.", a: "were" },
                        { q: "She arrived [when | while | was | were] I was leaving.", a: "when" },
                        { q: "He studied [while | when | was | were] I cooked.", a: "while" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: Overcoming a Challenge. Now it's your turn! Write a short story about a time you faced a challenge or difficulty.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Superando um Desafio. Agora é a sua vez! Escreva uma pequena história sobre uma vez em que você enfrentou um desafio ou dificuldade.)</span></small>",
            example: "\"I had a big math test last year. I was very worried. I was studying every night for a week. On the day of the test, I was nervous, but I remembered my studies. I got a good grade and felt proud.\"<br><br><small><span style='color:#0077b6'>(\"Eu tive uma grande prova de matemática no ano passado. Eu estava muito preocupado. Eu estava estudando todas as noites durante uma semana. No dia da prova, eu estava nervoso, mas lembrei dos meus estudos. Tirei uma nota boa e me senti orgulhoso.\")</span></small>",
            prompts: [
                "What was the challenge? (I had to...) <br><small><span style='color:#0077b6'>(Qual foi o desafio? Eu tive que...)</span></small>",
                "What were you doing? (I was practicing/studying...) <br><small><span style='color:#0077b6'>(O que você estava fazendo? Eu estava praticando/estudando...)</span></small>",
                "How did you feel? (I was nervous/scared...) <br><small><span style='color:#0077b6'>(Como você se sentiu? Eu estava nervoso/com medo...)</span></small>",
                "What happened in the end? (I succeeded/learned...) <br><small><span style='color:#0077b6'>(O que aconteceu no final? Eu consegui/aprendi...)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Verbs)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                { 
                    term: "Overcome", 
                    definition: "To succeed in dealing with a problem or difficulty.", 
                    defTrans: "Superar",
                    example: "He overcame many obstacles.", 
                    audioFront: "TTS: Overcome",
                    audioBack: "TTS: He overcame many obstacles." 
                },
                { 
                    term: "Succeed", 
                    definition: "To achieve the desired aim or result.", 
                    defTrans: "Ter sucesso",
                    example: "If you try, you can succeed.", 
                    audioFront: "TTS: Succeed",
                    audioBack: "TTS: If you try, you can succeed." 
                },
                { 
                    term: "Achieve", 
                    definition: "To reach or attain a desired objective by effort.", 
                    defTrans: "Alcançar / Conquistar",
                    example: "She achieved her dream.", 
                    audioFront: "TTS: Achieve",
                    audioBack: "TTS: She achieved her dream." 
                },
                { 
                    term: "Try", 
                    definition: "To make an attempt or effort to do something.", 
                    defTrans: "Tentar",
                    example: "Always try your best.", 
                    audioFront: "TTS: Try",
                    audioBack: "TTS: Always try your best." 
                },
                { 
                    term: "Practice", 
                    definition: "To perform an activity or exercise repeatedly.", 
                    defTrans: "Praticar",
                    example: "I practice guitar every day.", 
                    audioFront: "TTS: Practice",
                    audioBack: "TTS: I practice guitar every day." 
                },
                { 
                    term: "Work hard", 
                    definition: "To put a lot of effort into a task.", 
                    defTrans: "Trabalhar duro",
                    example: "They work hard at school.", 
                    audioFront: "TTS: Work hard",
                    audioBack: "TTS: They work hard at school." 
                },
                { 
                    term: "Give up", 
                    definition: "To cease making an effort; resign oneself to failure.", 
                    defTrans: "Desistir",
                    example: "Never give up on your goals.", 
                    audioFront: "TTS: Give up",
                    audioBack: "TTS: Never give up on your goals." 
                },
                { 
                    term: "Believe", 
                    definition: "To accept something as true; feel sure of the truth of.", 
                    defTrans: "Acreditar",
                    example: "I believe in you.", 
                    audioFront: "TTS: Believe",
                    audioBack: "TTS: I believe in you." 
                },
                { 
                    term: "Support", 
                    definition: "To give assistance, encouragement, or approval to.", 
                    defTrans: "Apoiar",
                    example: "My friends support me.", 
                    audioFront: "TTS: Support",
                    audioBack: "TTS: My friends support me." 
                },
                { 
                    term: "Dream", 
                    definition: "To contemplate the possibility of doing something.", 
                    defTrans: "Sonhar",
                    example: "She dreams of being a doctor.", 
                    audioFront: "TTS: Dream",
                    audioBack: "TTS: She dreams of being a doctor." 
                },
                { 
                    term: "Fail", 
                    definition: "To be unsuccessful in achieving one's goal.", 
                    defTrans: "Falhar / Fracassar",
                    example: "Don't be afraid to fail.", 
                    audioFront: "TTS: Fail",
                    audioBack: "TTS: Don't be afraid to fail." 
                },
                { 
                    term: "Face", 
                    definition: "To confront and deal with or accept.", 
                    defTrans: "Enfrentar / Encarar",
                    example: "You must face your fears.", 
                    audioFront: "TTS: Face",
                    audioBack: "TTS: You must face your fears." 
                },
                // --- Emotions & Feelings ---
                { 
                    term: "Happy", 
                    definition: "Feeling or showing pleasure or contentment.", 
                    defTrans: "Feliz",
                    example: "I felt happy when I won.", 
                    audioFront: "TTS: Happy",
                    audioBack: "TTS: I felt happy when I won." 
                },
                { 
                    term: "Sad", 
                    definition: "Feeling or showing sorrow; unhappy.", 
                    defTrans: "Triste",
                    example: "He was sad about the news.", 
                    audioFront: "TTS: Sad",
                    audioBack: "TTS: He was sad about the news." 
                },
                { 
                    term: "Excited", 
                    definition: "Very enthusiastic and eager.", 
                    defTrans: "Empolgado(a) / Animado(a)",
                    example: "We are excited for the trip.", 
                    audioFront: "TTS: Excited",
                    audioBack: "TTS: We are excited for the trip." 
                },
                { 
                    term: "Tired", 
                    definition: "In need of sleep or rest; weary.", 
                    defTrans: "Cansado(a)",
                    example: "I was tired after running.", 
                    audioFront: "TTS: Tired",
                    audioBack: "TTS: I was tired after running." 
                },
                { 
                    term: "Worried", 
                    definition: "Anxious or troubled about actual or potential problems.", 
                    defTrans: "Preocupado(a)",
                    example: "She is worried about the test.", 
                    audioFront: "TTS: Worried",
                    audioBack: "TTS: She is worried about the test." 
                },
                { 
                    term: "Scared / Afraid", 
                    definition: "Fearful; frightened.", 
                    defTrans: "Assustado(a) / Com medo",
                    example: "Are you scared of spiders?", 
                    audioFront: "TTS: Scared or Afraid",
                    audioBack: "TTS: Are you scared of spiders?" 
                },
                { 
                    term: "Surprised", 
                    definition: "Feeling or showing surprise.", 
                    defTrans: "Surpreso(a)",
                    example: "I was surprised by the party.", 
                    audioFront: "TTS: Surprised",
                    audioBack: "TTS: I was surprised by the party." 
                },
                { 
                    term: "Proud", 
                    definition: "Feeling deep pleasure or satisfaction from one's own achievements.", 
                    defTrans: "Orgulhoso(a)",
                    example: "My parents are proud of me.", 
                    audioFront: "TTS: Proud",
                    audioBack: "TTS: My parents are proud of me." 
                },
                { 
                    term: "Confident", 
                    definition: "Feeling or showing confidence in oneself; self-assured.", 
                    defTrans: "Confiante",
                    example: "Be confident when you speak.", 
                    audioFront: "TTS: Confident",
                    audioBack: "TTS: Be confident when you speak." 
                },
                { 
                    term: "Nervous", 
                    definition: "Easily agitated or alarmed; anxious.", 
                    defTrans: "Nervoso(a)",
                    example: "He felt nervous on stage.", 
                    audioFront: "TTS: Nervous",
                    audioBack: "TTS: He felt nervous on stage." 
                },
                { 
                    term: "Hopeful", 
                    definition: "Feeling or inspiring optimism about a future event.", 
                    defTrans: "Esperançoso(a)",
                    example: "I am hopeful for good results.", 
                    audioFront: "TTS: Hopeful",
                    audioBack: "TTS: I am hopeful for good results." 
                },
                { 
                    term: "Determined", 
                    definition: "Having made a firm decision and being resolved not to change it.", 
                    defTrans: "Determinado(a)",
                    example: "She was determined to finish.", 
                    audioFront: "TTS: Determined",
                    audioBack: "TTS: She was determined to finish." 
                },
                { 
                    term: "Brave", 
                    definition: "Ready to face and endure danger or pain; showing courage.", 
                    defTrans: "Corajoso(a)",
                    example: "The hero was very brave.", 
                    audioFront: "TTS: Brave",
                    audioBack: "TTS: The hero was very brave." 
                },

                // --- Life & Success Nouns ---
                { 
                    term: "Life Story", 
                    definition: "The series of events making up a person's life.", 
                    defTrans: "História de vida",
                    example: "Her life story is inspiring.", 
                    audioFront: "TTS: Life Story",
                    audioBack: "TTS: Her life story is inspiring." 
                },
                { 
                    term: "Challenge", 
                    definition: "A task or situation that tests someone's abilities.", 
                    defTrans: "Desafio",
                    example: "This game is a big challenge.", 
                    audioFront: "TTS: Challenge",
                    audioBack: "TTS: This game is a big challenge." 
                },
                { 
                    term: "Difficulty", 
                    definition: "A thing that is hard to accomplish, deal with, or understand.", 
                    defTrans: "Dificuldade",
                    example: "He faced the difficulty with courage.", 
                    audioFront: "TTS: Difficulty",
                    audioBack: "TTS: He faced the difficulty with courage." 
                },
                { 
                    term: "Obstacle", 
                    definition: "A thing that blocks one's way or prevents progress.", 
                    defTrans: "Obstáculo",
                    example: "We jumped over the obstacle.", 
                    audioFront: "TTS: Obstacle",
                    audioBack: "TTS: We jumped over the obstacle." 
                },
                { 
                    term: "Problem", 
                    definition: "A matter regarded as unwelcome or harmful and needing to be dealt with.", 
                    defTrans: "Problema",
                    example: "Can you solve the problem?", 
                    audioFront: "TTS: Problem",
                    audioBack: "TTS: Can you solve the problem?" 
                },
                { 
                    term: "Goal / Dream", 
                    definition: "The object of a person's ambition or effort; an aim or desired result.", 
                    defTrans: "Meta / Sonho",
                    example: "My goal is to travel.", 
                    audioFront: "TTS: Goal or Dream",
                    audioBack: "TTS: My goal is to travel." 
                },
                { 
                    term: "Success", 
                    definition: "The accomplishment of an aim or purpose.", 
                    defTrans: "Sucesso",
                    example: "The project was a success.", 
                    audioFront: "TTS: Success",
                    audioBack: "TTS: The project was a success." 
                },
                { 
                    term: "Failure", 
                    definition: "Lack of success.", 
                    defTrans: "Fracasso / Falha",
                    example: "Failure helps us learn.", 
                    audioFront: "TTS: Failure",
                    audioBack: "TTS: Failure helps us learn." 
                },
                { 
                    term: "Inspiration", 
                    definition: "The process of being mentally stimulated to do or feel something creative.", 
                    defTrans: "Inspiração",
                    example: "You are an inspiration to us.", 
                    audioFront: "TTS: Inspiration",
                    audioBack: "TTS: You are an inspiration to us." 
                },
                { 
                    term: "Amazing", 
                    definition: "Causing great surprise or wonder; astonishing.", 
                    defTrans: "Incrível / Impressionante",
                    example: "The view was amazing.", 
                    audioFront: "TTS: Amazing",
                    audioBack: "TTS: The view was amazing." 
                },
                { 
                    term: "Incredible", 
                    definition: "Impossible to believe; extraordinary.", 
                    defTrans: "Incrível",
                    example: "That was an incredible story.", 
                    audioFront: "TTS: Incredible",
                    audioBack: "TTS: That was an incredible story." 
                },
                // --- Phrases & Expressions ---
                { 
                    term: "Never give up", 
                    definition: "Do not stop trying, even if it is difficult.", 
                    defTrans: "Nunca desista",
                    example: "It's hard, but never give up.", 
                    audioFront: "TTS: Never give up",
                    audioBack: "TTS: It's hard, but never give up." 
                },
                { 
                    term: "Believe in yourself", 
                    definition: "To have confidence in your own abilities.", 
                    defTrans: "Acredite em si mesmo",
                    example: "You must believe in yourself.", 
                    audioFront: "TTS: Believe in yourself",
                    audioBack: "TTS: You must believe in yourself." 
                },
                { 
                    term: "What were you doing?", 
                    definition: "Question asking about an action in progress in the past.", 
                    defTrans: "O que você estava fazendo?",
                    example: "What were you doing yesterday?", 
                    audioFront: "TTS: What were you doing?",
                    audioBack: "TTS: What were you doing yesterday?" 
                },
                { 
                    term: "While...", 
                    definition: "During the time that; at the same time as.", 
                    defTrans: "Enquanto...",
                    example: "I read while I waited.", 
                    audioFront: "TTS: While",
                    audioBack: "TTS: I read while I waited." 
                },
                { 
                    term: "When...", 
                    definition: "At or during the time that.", 
                    defTrans: "Quando...",
                    example: "I was sleeping when you called.", 
                    audioFront: "TTS: When",
                    audioBack: "TTS: I was sleeping when you called." 
                },

                // --- Grammar Points ---
                { 
                    term: "Past Continuous (Affirmative)", 
                    definition: "Subject + was/were + verb-ing.", 
                    defTrans: "Passado Contínuo (Afirmativa)",
                    example: "I was studying all night.", 
                    audioFront: "TTS: Past Continuous Affirmative",
                    audioBack: "TTS: I was studying all night." 
                },
                { 
                    term: "Past Continuous (Negative)", 
                    definition: "Subject + wasn't/weren't + verb-ing.", 
                    defTrans: "Passado Contínuo (Negativa)",
                    example: "They weren't playing.", 
                    audioFront: "TTS: Past Continuous Negative",
                    audioBack: "TTS: They weren't playing." 
                },
                { 
                    term: "Past Continuous (Interrogative)", 
                    definition: "Was/Were + subject + verb-ing?", 
                    defTrans: "Passado Contínuo (Interrogativa)",
                    example: "Were you sleeping?", 
                    audioFront: "TTS: Past Continuous Interrogative",
                    audioBack: "TTS: Were you sleeping?" 
                },
                { 
                    term: "Simple Past vs. Past Continuous", 
                    definition: "Interruption vs. Background Action.", 
                    defTrans: "Passado Simples vs. Passado Contínuo",
                    example: "I was reading when he arrived.", 
                    audioFront: "TTS: Simple Past versus Past Continuous",
                    audioBack: "TTS: I was reading when he arrived." 
                },
                { 
                    term: "WHEN (Connector)", 
                    definition: "Introduces the Simple Past (short action).", 
                    defTrans: "Quando (Conector)",
                    example: "She fell when she ran.", 
                    audioFront: "TTS: WHEN Connector",
                    audioBack: "TTS: She fell when she ran." 
                },
                { 
                    term: "WHILE (Connector)", 
                    definition: "Introduces the Past Continuous (long action).", 
                    defTrans: "Enquanto (Conector)",
                    example: "He arrived while I was cooking.", 
                    audioFront: "TTS: WHILE Connector",
                    audioBack: "TTS: He arrived while I was cooking." 
                }
            ]
        }
    ], // This closes the steps array

    // ======================================================
    // GLOSSARY (Part 1: Context, Verbs, Emotions)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { topic: "Context", term: "reading", definition: "Looking at and comprehending the meaning of written text.", translation: "Lendo" },
        { topic: "Context", term: "surprised", definition: "Feeling mild astonishment or shock.", translation: "Surpreso(a)" },
        { topic: "Context", term: "life-story", definition: "The series of events that make up a person's life.", translation: "História de vida" },
        { topic: "Context", term: "faced", definition: "Confronted and dealt with a difficulty.", translation: "Enfrentou / Encarou" },
        { topic: "Context", term: "obstacles", definition: "Things that block one's way or prevent progress.", translation: "Obstáculos" },
        { topic: "Context", term: "while", definition: "During the time that; at the same time as.", translation: "Enquanto" },
        { topic: "Context", term: "training", definition: "The action of teaching a person a particular skill or type of behavior.", translation: "Treinando" },
        { topic: "Context", term: "broke", definition: "Past tense of break; separated into pieces.", translation: "Quebrou" },
        { topic: "Context", term: "give-up", definition: "To cease making an effort; to quit.", translation: "Desistir" },
        { topic: "Context", term: "sad", definition: "Feeling or showing sorrow; unhappy.", translation: "Triste" },
        { topic: "Context", term: "kept-trying", definition: "Continued to make an effort.", translation: "Continuou tentando" },
        { topic: "Context", term: "overcome", definition: "To succeed in dealing with a problem or difficulty.", translation: "Superar" },
        { topic: "Context", term: "difficulty", definition: "A thing that is hard to accomplish or understand.", translation: "Dificuldade" },
        { topic: "Context", term: "determined", definition: "Having made a firm decision and being resolved not to change it.", translation: "Determinado(a)" },
        { topic: "Context", term: "achieved", definition: "Past tense of achieve; successfully reached a desired objective.", translation: "Alcançou / Conquistou" },
        { topic: "Context", term: "goal", definition: "The object of a person's ambition or effort; an aim.", translation: "Meta / Objetivo" },
        { topic: "Context", term: "incredible", definition: "Impossible to believe; extraordinary.", translation: "Incrível" },

        // --- TOPIC 2: VERBS (Challenges & Success) ---
        { topic: "Verbs", term: "succeed", definition: "To achieve the desired aim or result.", translation: "Ter sucesso" },
        { topic: "Verbs", term: "achieve", definition: "To reach a desired objective by effort.", translation: "Alcançar / Conquistar" },
        { topic: "Verbs", term: "try", definition: "To make an attempt or effort to do something.", translation: "Tentar" },
        { topic: "Verbs", term: "practice", definition: "To perform an activity repeatedly to improve.", translation: "Praticar" },
        { topic: "Verbs", term: "work-hard", definition: "To put a lot of effort into a task.", translation: "Trabalhar duro" },
        { topic: "Verbs", term: "believe", definition: "To accept something as true.", translation: "Acreditar" },
        { topic: "Verbs", term: "support", definition: "To give assistance or encouragement.", translation: "Apoiar" },
        { topic: "Verbs", term: "dream", definition: "To contemplate the possibility of doing something.", translation: "Sonhar" },
        { topic: "Verbs", term: "fail", definition: "To be unsuccessful in achieving one's goal.", translation: "Falhar / Fracassar" },
        { topic: "Verbs", term: "face", definition: "To confront and deal with or accept.", translation: "Enfrentar / Encarar" },

        // --- TOPIC 3: EMOTIONS & FEELINGS ---
        { topic: "Emotions", term: "happy", definition: "Feeling or showing pleasure or contentment.", translation: "Feliz" },
        { topic: "Emotions", term: "excited", definition: "Very enthusiastic and eager.", translation: "Empolgado(a) / Animado(a)" },
        { topic: "Emotions", term: "tired", definition: "In need of sleep or rest; weary.", translation: "Cansado(a)" },
        { topic: "Emotions", term: "worried", definition: "Anxious or troubled about potential problems.", translation: "Preocupado(a)" },
        { topic: "Emotions", term: "scared", definition: "Fearful; frightened.", translation: "Assustado(a) / Com medo" },
        { topic: "Emotions", term: "proud", definition: "Feeling deep pleasure or satisfaction.", translation: "Orgulhoso(a)" },
        { topic: "Emotions", term: "confident", definition: "Feeling or showing confidence in oneself.", translation: "Confiante" },
        { topic: "Emotions", term: "nervous", definition: "Easily agitated or alarmed; anxious.", translation: "Nervoso(a)" },
        { topic: "Emotions", term: "hopeful", definition: "Feeling or inspiring optimism about the future.", translation: "Esperançoso(a)" },
        { topic: "Emotions", term: "brave", definition: "Ready to face and endure danger or pain.", translation: "Corajoso(a)" },
        // --- TOPIC 4: LIFE & SUCCESS NOUNS ---
        { 
            topic: "Success Nouns", 
            term: "life-story", 
            definition: "The series of events making up a person's life.", 
            translation: "História de vida" 
        },
        { 
            topic: "Success Nouns", 
            term: "challenge", 
            definition: "A task or situation that tests someone's abilities.", 
            translation: "Desafio" 
        },
        { 
            topic: "Success Nouns", 
            term: "difficulty", 
            definition: "A thing that is hard to accomplish, deal with, or understand.", 
            translation: "Dificuldade" 
        },
        { 
            topic: "Success Nouns", 
            term: "obstacle", 
            definition: "A thing that blocks one's way or prevents progress.", 
            translation: "Obstáculo" 
        },
        { 
            topic: "Success Nouns", 
            term: "problem", 
            definition: "A matter regarded as unwelcome or harmful.", 
            translation: "Problema" 
        },
        { 
            topic: "Success Nouns", 
            term: "goal", 
            definition: "The object of a person's ambition or effort; an aim.", 
            translation: "Meta / Sonho" 
        },
        { 
            topic: "Success Nouns", 
            term: "success", 
            definition: "The accomplishment of an aim or purpose.", 
            translation: "Sucesso" 
        },
        { 
            topic: "Success Nouns", 
            term: "failure", 
            definition: "Lack of success.", 
            translation: "Fracasso / Falha" 
        },
        { 
            topic: "Success Nouns", 
            term: "inspiration", 
            definition: "The process of being mentally stimulated to do something creative.", 
            translation: "Inspiração" 
        },
        { 
            topic: "Success Nouns", 
            term: "amazing", 
            definition: "Causing great surprise or wonder; astonishing.", 
            translation: "Incrível / Impressionante" 
        },

        // --- TOPIC 5: PHRASES & EXPRESSIONS ---
        { 
            topic: "Expressions", 
            term: "never-give-up", 
            definition: "Do not stop trying, even if it is difficult.", 
            translation: "Nunca desista" 
        },
        { 
            topic: "Expressions", 
            term: "believe-in-yourself", 
            definition: "To have confidence in your own abilities.", 
            translation: "Acredite em si mesmo" 
        },
        { 
            topic: "Expressions", 
            term: "what-were-you-doing", 
            definition: "Question asking about an action in progress in the past.", 
            translation: "O que você estava fazendo?" 
        },
        { 
            topic: "Expressions", 
            term: "kept-trying", 
            definition: "To continue making an effort, even after failing.", 
            translation: "Continuou tentando" 
        },

        // --- TOPIC 6: GRAMMAR POINTS ---
        { 
            topic: "Grammar", 
            term: "past-continuous", 
            definition: "Verb tense for actions in progress in the past (was/were + verb-ing).", 
            translation: "Passado Contínuo" 
        },
        { 
            topic: "Grammar", 
            term: "simple-past-vs-past-continuous", 
            definition: "Comparing completed actions (Simple Past) with actions in progress (Past Continuous).", 
            translation: "Passado Simples vs. Passado Contínuo" 
        },
        { 
            topic: "Grammar", 
            term: "when-connector", 
            definition: "Used to connect two past actions, often introducing the shorter, interrupting action.", 
            translation: "Quando (Conector)" 
        },
        { 
            topic: "Grammar", 
            term: "while-connector", 
            definition: "Used to connect two past actions, often introducing the longer, background action.", 
            translation: "Enquanto (Conector)" 
        }
    ]
});