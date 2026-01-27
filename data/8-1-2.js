/**
 * REACH English - LESSON DATA 8-1-2
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "8-1-2", 
    grade: "8th Grade",       
    bimester: "1",   
    chapter: "2",    
    chapterTitle: "Stand Up, Speak Out!", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss bullying and cyberbullying.<br>• Express feelings and emotions.<br>• Use time expressions for the future (tomorrow, next week).<br>• Differentiate between routines and actions happening now.<br>• Talk about future plans using \"going to\".",
            welcome: "Hello, Friends! It's Mr. D!<br><br>Welcome to \"Stand Up, Speak Out\"! Today, we are going to talk about a very important topic: bullying. We want everyone to feel safe and happy. We will learn words to describe our feelings and how to ask for help. We will also learn how to talk about our plans for a better future using \"going to\" and how to describe what is happening right now. Let's build a kinder world together!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss bullying and cyberbullying. Express feelings and emotions. Use time expressions for the future. Differentiate between routines and actions happening now. And talk about future plans using going to.",
                welcome: "TTS: Hello, Friends! It's Mr. D! Welcome to Stand Up, Speak Out! Today, we are going to talk about a very important topic: bullying. We want everyone to feel safe and happy. We will learn words to describe our feelings and how to ask for help. We will also learn how to talk about our plans for a better future using going to and how to describe what is happening right now. Let's build a kinder world together!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "(Sound of a school hallway. Albert is looking at his phone and looks sad. Celine approaches him.)", 
            contextAudio: "audio/8-1-2/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Hi Albert. [How are you feeling](tooltip:how-are-you-feeling)? You look [worried](tooltip:worried)." 
                },
                { 
                    speaker: "Albert", 
                    text: "I am [sad](tooltip:sad). Look at this [message](tooltip:message). Someone is [posting](tooltip:post) mean [comments](tooltip:comment) about me." 
                },
                { 
                    speaker: "Celine", 
                    text: "That is [cyberbullying](tooltip:cyberbullying)! You must [report](tooltip:report) it." 
                },
                { 
                    speaker: "Albert", 
                    text: "I know. I am [going to](tooltip:going-to) talk to Mrs. Canales [tomorrow](tooltip:tomorrow)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Good idea. I am [going to](tooltip:going-to) [support](tooltip:support) you. We don't [accept](tooltip:accept) bullying here." 
                },
                { 
                    speaker: "Albert", 
                    text: "Thanks, Celine. I am [feeling a little better](tooltip:im-feeling) now." 
                },
                { 
                    speaker: "Celine", 
                    text: "[Everything is going to be okay](tooltip:everything-is-okay). Let's go to class." 
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
                    title: "Verbs (Bullying & Support)",
                    audio: "TTS: Bully. Hurt. Stop. Help. Support. Report. Block. Respect. Accept. Trust.",
                    items: [
                        { term: "Bully", trans: "<small style='color:#0077b6'>Intimidar / Praticar bullying</small>" },
                        { term: "Hurt", trans: "<small style='color:#0077b6'>Machucar / Magoar</small>" },
                        { term: "Stop", trans: "<small style='color:#0077b6'>Parar</small>" },
                        { term: "Help", trans: "<small style='color:#0077b6'>Ajudar</small>" },
                        { term: "Support", trans: "<small style='color:#0077b6'>Apoiar</small>" },
                        { term: "Report", trans: "<small style='color:#0077b6'>Denunciar / Reportar</small>" },
                        { term: "Block", trans: "<small style='color:#0077b6'>Bloquear</small>" },
                        { term: "Respect", trans: "<small style='color:#0077b6'>Respeitar</small>" },
                        { term: "Accept", trans: "<small style='color:#0077b6'>Aceitar</small>" },
                        { term: "Trust", trans: "<small style='color:#0077b6'>Confiar</small>" }
                    ]
                },
                {
                    title: "Feelings (Adjectives)",
                    audio: "TTS: Happy. Sad. Angry. Scared. Worried. Frustrated. Lonely. Excited. Calm. Surprised. Confident.",
                    items: [
                        { term: "Happy", trans: "<small style='color:#0077b6'>Feliz</small>" },
                        { term: "Sad", trans: "<small style='color:#0077b6'>Triste</small>" },
                        { term: "Angry", trans: "<small style='color:#0077b6'>Bravo(a) / Com raiva</small>" },
                        { term: "Scared", trans: "<small style='color:#0077b6'>Assustado(a)</small>" },
                        { term: "Worried", trans: "<small style='color:#0077b6'>Preocupado(a)</small>" },
                        { term: "Frustrated", trans: "<small style='color:#0077b6'>Frustrado(a)</small>" },
                        { term: "Lonely", trans: "<small style='color:#0077b6'>Solitário(a)</small>" },
                        { term: "Excited", trans: "<small style='color:#0077b6'>Animado(a) / Empolgado(a)</small>" },
                        { term: "Calm", trans: "<small style='color:#0077b6'>Calmo(a)</small>" },
                        { term: "Surprised", trans: "<small style='color:#0077b6'>Surpreso(a)</small>" },
                        { term: "Confident", trans: "<small style='color:#0077b6'>Confiante</small>" }
                    ]
                },
                {
                    title: "Time Expressions (Future)",
                    audio: "TTS: Tomorrow. Next week. Next month. Next year. Tonight. Soon. Later. In the morning. In the afternoon. In the evening.",
                    items: [
                        { term: "Tomorrow", trans: "<small style='color:#0077b6'>Amanhã</small>" },
                        { term: "Next week", trans: "<small style='color:#0077b6'>Próxima semana</small>" },
                        { term: "Next month", trans: "<small style='color:#0077b6'>Próximo mês</small>" },
                        { term: "Next year", trans: "<small style='color:#0077b6'>Próximo ano</small>" },
                        { term: "Tonight", trans: "<small style='color:#0077b6'>Hoje à noite</small>" },
                        { term: "Soon", trans: "<small style='color:#0077b6'>Em breve</small>" },
                        { term: "Later", trans: "<small style='color:#0077b6'>Mais tarde</small>" },
                        { term: "In the morning", trans: "<small style='color:#0077b6'>De manhã</small>" },
                        { term: "In the afternoon", trans: "<small style='color:#0077b6'>À tarde</small>" },
                        { term: "In the evening", trans: "<small style='color:#0077b6'>De noite</small>" }
                    ]
                },
                {
                    title: "Routine Verbs (Review)",
                    audio: "TTS: Wake up. Get up. Eat breakfast. Go to school. Study. Have lunch. Finish school. Do homework. Have dinner. Go to bed.",
                    items: [
                        { term: "Wake up", trans: "<small style='color:#0077b6'>Acordar</small>" },
                        { term: "Get up", trans: "<small style='color:#0077b6'>Levantar-se</small>" },
                        { term: "Eat breakfast", trans: "<small style='color:#0077b6'>Tomar café da manhã</small>" },
                        { term: "Go to school", trans: "<small style='color:#0077b6'>Ir para a escola</small>" },
                        { term: "Study", trans: "<small style='color:#0077b6'>Estudar</small>" },
                        { term: "Have lunch", trans: "<small style='color:#0077b6'>Almoçar</small>" },
                        { term: "Finish school", trans: "<small style='color:#0077b6'>Terminar a escola</small>" },
                        { term: "Do homework", trans: "<small style='color:#0077b6'>Fazer o dever de casa</small>" },
                        { term: "Have dinner", trans: "<small style='color:#0077b6'>Jantar</small>" },
                        { term: "Go to bed", trans: "<small style='color:#0077b6'>Ir para cama</small>" }
                    ]
                },
                {
                    title: "Bullying Vocabulary",
                    audio: "TTS: Bullying. Cyberbullying. Message. Comment. Post. Rumor. Safe. Dangerous.",
                    items: [
                        { term: "Bullying", trans: "<small style='color:#0077b6'>Bullying</small>" },
                        { term: "Cyberbullying", trans: "<small style='color:#0077b6'>Cyberbullying (Bullying virtual)</small>" },
                        { term: "Message", trans: "<small style='color:#0077b6'>Mensagem</small>" },
                        { term: "Comment", trans: "<small style='color:#0077b6'>Comentário</small>" },
                        { term: "Post", trans: "<small style='color:#0077b6'>Publicação / Post</small>" },
                        { term: "Rumor", trans: "<small style='color:#0077b6'>Boato / Fofoca</small>" },
                        { term: "Safe", trans: "<small style='color:#0077b6'>Seguro(a)</small>" },
                        { term: "Dangerous", trans: "<small style='color:#0077b6'>Perigoso(a)</small>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: How are you feeling? I'm feeling... What are you doing? Everything is going to be okay. Don't be afraid. Can I help you? This isn't ok. We have to stop. Talk with someone you trust.",
                    items: [
                        { term: "How are you feeling?", trans: "<small style='color:#0077b6'>Como você está se sentindo?</small>" },
                        { term: "I'm feeling...", trans: "<small style='color:#0077b6'>Eu estou me sentindo...</small>" },
                        { term: "What are you doing?", trans: "<small style='color:#0077b6'>O que você está fazendo?</small>" },
                        { term: "Everything is going to be okay", trans: "<small style='color:#0077b6'>Tudo vai ficar bem.</small>" },
                        { term: "Don't be afraid", trans: "<small style='color:#0077b6'>Não tenha medo.</small>" },
                        { term: "Can I help you?", trans: "<small style='color:#0077b6'>Posso te ajudar?</small>" },
                        { term: "This isn't ok", trans: "<small style='color:#0077b6'>Isso não está certo.</small>" },
                        { term: "We have to stop", trans: "<small style='color:#0077b6'>Temos que parar.</small>" },
                        { term: "Talk with someone you trust", trans: "<small style='color:#0077b6'>Converse com alguém em que você confia.</small>" }
                    ]
                }
            ],

            // ======================================================
            // 2B: Context Examples (Grouped & Tabbed)
            // ======================================================
            exampleGroups: [
                {
                    title: "Verbs (Bullying & Support)",
                    audio: "TTS: Don't bully your classmates. Words can hurt people. We must stop cyberbullying. I will help you with this problem. Friends support each other. You should report mean comments. I blocked the rude user. We respect everyone at school. Accept people as they are. I trust my parents.",
                    items: [
                        { term: "Bully", sent: "Don't bully your classmates.", trans: "<span style='color:#0077b6'>Não intimide seus colegas.</span>" },
                        { term: "Hurt", sent: "Words can hurt people.", trans: "<span style='color:#0077b6'>Palavras podem magoar pessoas.</span>" },
                        { term: "Stop", sent: "We must stop cyberbullying.", trans: "<span style='color:#0077b6'>Nós devemos parar o cyberbullying.</span>" },
                        { term: "Help", sent: "I will help you with this problem.", trans: "<span style='color:#0077b6'>Eu vou te ajudar com este problema.</span>" },
                        { term: "Support", sent: "Friends support each other.", trans: "<span style='color:#0077b6'>Amigos apoiam uns aos outros.</span>" },
                        { term: "Report", sent: "You should report mean comments.", trans: "<span style='color:#0077b6'>Você deve denunciar comentários maldosos.</span>" },
                        { term: "Block", sent: "I blocked the rude user.", trans: "<span style='color:#0077b6'>Eu bloqueei o usuário rude.</span>" },
                        { term: "Respect", sent: "We respect everyone at school.", trans: "<span style='color:#0077b6'>Nós respeitamos todos na escola.</span>" },
                        { term: "Accept", sent: "Accept people as they are.", trans: "<span style='color:#0077b6'>Aceite as pessoas como elas são.</span>" },
                        { term: "Trust", sent: "I trust my parents.", trans: "<span style='color:#0077b6'>Eu confio nos meus pais.</span>" }
                    ]
                },
                {
                    title: "Feelings (Adjectives)",
                    audio: "TTS: She feels happy today. He is sad about the news. Don't be angry. The cat is scared. Mom is worried about you. I feel frustrated with math. He feels lonely at the new school. We are excited for the trip. Stay calm and breathe. I was surprised by the gift. Be confident in yourself.",
                    items: [
                        { term: "Happy", sent: "She feels happy today.", trans: "<span style='color:#0077b6'>Ela se sente feliz hoje.</span>" },
                        { term: "Sad", sent: "He is sad about the news.", trans: "<span style='color:#0077b6'>Ele está triste com a notícia.</span>" },
                        { term: "Angry", sent: "Don't be angry.", trans: "<span style='color:#0077b6'>Não fique bravo.</span>" },
                        { term: "Scared", sent: "The cat is scared.", trans: "<span style='color:#0077b6'>O gato está assustado.</span>" },
                        { term: "Worried", sent: "Mom is worried about you.", trans: "<span style='color:#0077b6'>Mamãe está preocupada com você.</span>" },
                        { term: "Frustrated", sent: "I feel frustrated with math.", trans: "<span style='color:#0077b6'>Eu me sinto frustrado com matemática.</span>" },
                        { term: "Lonely", sent: "He feels lonely at the new school.", trans: "<span style='color:#0077b6'>Ele se sente solitário na escola nova.</span>" },
                        { term: "Excited", sent: "We are excited for the trip.", trans: "<span style='color:#0077b6'>Nós estamos animados para a viagem.</span>" },
                        { term: "Calm", sent: "Stay calm and breathe.", trans: "<span style='color:#0077b6'>Fique calmo e respire.</span>" },
                        { term: "Surprised", sent: "I was surprised by the gift.", trans: "<span style='color:#0077b6'>Fiquei surpreso com o presente.</span>" },
                        { term: "Confident", sent: "Be confident in yourself.", trans: "<span style='color:#0077b6'>Seja confiante em si mesmo.</span>" }
                    ]
                },
                {
                    title: "Time Expressions (Future)",
                    audio: "TTS: I will see you tomorrow. We have a test next week. My birthday is next month. I will be in 9th grade next year. Let's watch a movie tonight. See you soon! I will call you later. I wake up in the morning. We play in the afternoon. We relax in the evening.",
                    items: [
                        { term: "Tomorrow", sent: "I will see you tomorrow.", trans: "<span style='color:#0077b6'>Eu verei você amanhã.</span>" },
                        { term: "Next week", sent: "We have a test next week.", trans: "<span style='color:#0077b6'>Temos um teste na próxima semana.</span>" },
                        { term: "Next month", sent: "My birthday is next month.", trans: "<span style='color:#0077b6'>Meu aniversário é no próximo mês.</span>" },
                        { term: "Next year", sent: "I will be in 9th grade next year.", trans: "<span style='color:#0077b6'>Eu estarei no 9º ano no ano que vem.</span>" },
                        { term: "Tonight", sent: "Let's watch a movie tonight.", trans: "<span style='color:#0077b6'>Vamos assistir um filme hoje à noite.</span>" },
                        { term: "Soon", sent: "See you soon!", trans: "<span style='color:#0077b6'>Até breve!</span>" },
                        { term: "Later", sent: "I will call you later.", trans: "<span style='color:#0077b6'>Eu te ligo mais tarde.</span>" },
                        { term: "In the morning", sent: "I wake up in the morning.", trans: "<span style='color:#0077b6'>Eu acordo de manhã.</span>" },
                        { term: "In the afternoon", sent: "We play in the afternoon.", trans: "<span style='color:#0077b6'>Nós brincamos à tarde.</span>" },
                        { term: "In the evening", sent: "We relax in the evening.", trans: "<span style='color:#0077b6'>Nós relaxamos de noite.</span>" }
                    ]
                },
                {
                    title: "Routine Verbs (Review)",
                    audio: "TTS: I wake up at 7 AM. Please get up now. I eat breakfast quickly. We go to school by bus. She studies hard. They have lunch at noon. I finish school at 3 PM. He does homework after school. We have dinner together. It's time to go to bed.",
                    items: [
                        { term: "Wake up", sent: "I wake up at 7 AM.", trans: "<span style='color:#0077b6'>Eu acordo às 7h.</span>" },
                        { term: "Get up", sent: "Please get up now.", trans: "<span style='color:#0077b6'>Por favor, levante-se agora.</span>" },
                        { term: "Eat breakfast", sent: "I eat breakfast quickly.", trans: "<span style='color:#0077b6'>Eu tomo café da manhã rapidamente.</span>" },
                        { term: "Go to school", sent: "We go to school by bus.", trans: "<span style='color:#0077b6'>Nós vamos para a escola de ônibus.</span>" },
                        { term: "Study", sent: "She studies hard.", trans: "<span style='color:#0077b6'>Ela estuda muito.</span>" },
                        { term: "Have lunch", sent: "They have lunch at noon.", trans: "<span style='color:#0077b6'>Eles almoçam ao meio-dia.</span>" },
                        { term: "Finish school", sent: "I finish school at 3 PM.", trans: "<span style='color:#0077b6'>Eu termino a escola às 15h.</span>" },
                        { term: "Do homework", sent: "He does homework after school.", trans: "<span style='color:#0077b6'>Ele faz o dever de casa depois da escola.</span>" },
                        { term: "Have dinner", sent: "We have dinner together.", trans: "<span style='color:#0077b6'>Nós jantamos juntos.</span>" },
                        { term: "Go to bed", sent: "It's time to go to bed.", trans: "<span style='color:#0077b6'>É hora de ir para a cama.</span>" }
                    ]
                },
                {
                    title: "Bullying Vocabulary",
                    audio: "TTS: Bullying is wrong. Cyberbullying happens online. I sent a message. Nice comment! I liked your post. Don't spread a rumor. This school is a safe place. The internet can be dangerous.",
                    items: [
                        { term: "Bullying", sent: "Bullying is wrong.", trans: "<span style='color:#0077b6'>Bullying é errado.</span>" },
                        { term: "Cyberbullying", sent: "Cyberbullying happens online.", trans: "<span style='color:#0077b6'>Cyberbullying acontece online.</span>" },
                        { term: "Message", sent: "I sent a message.", trans: "<span style='color:#0077b6'>Eu enviei uma mensagem.</span>" },
                        { term: "Comment", sent: "Nice comment!", trans: "<span style='color:#0077b6'>Belo comentário!</span>" },
                        { term: "Post", sent: "I liked your post.", trans: "<span style='color:#0077b6'>Eu curti sua publicação.</span>" },
                        { term: "Rumor", sent: "Don't spread a rumor.", trans: "<span style='color:#0077b6'>Não espalhe um boato.</span>" },
                        { term: "Safe", sent: "This school is a safe place.", trans: "<span style='color:#0077b6'>Esta escola é um lugar seguro.</span>" },
                        { term: "Dangerous", sent: "The internet can be dangerous.", trans: "<span style='color:#0077b6'>A internet pode ser perigosa.</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: How are you feeling? I am sad. I'm feeling happy. What are you doing? I am reading. Everything is going to be okay. Don't be afraid to speak up. Can I help you? Yes, please. This isn't ok. Stop it. We have to stop the bullies. Talk with someone you trust.",
                    items: [
                        { term: "How are you feeling?", sent: "\"How are you feeling?\" \"I am sad.\"", trans: "<span style='color:#0077b6'>\"Como você está se sentindo?\" \"Estou triste.\"</span>" },
                        { term: "I'm feeling...", sent: "I'm feeling happy.", trans: "<span style='color:#0077b6'>Estou me sentindo feliz.</span>" },
                        { term: "What are you doing?", sent: "\"What are you doing?\" \"I am reading.\"", trans: "<span style='color:#0077b6'>\"O que você está fazendo?\" \"Estou lendo.\"</span>" },
                        { term: "Everything... okay", sent: "Everything is going to be okay.", trans: "<span style='color:#0077b6'>Tudo vai ficar bem.</span>" },
                        { term: "Don't be afraid", sent: "Don't be afraid to speak up.", trans: "<span style='color:#0077b6'>Não tenha medo de falar.</span>" },
                        { term: "Can I help you?", sent: "\"Can I help you?\" \"Yes, please.\"", trans: "<span style='color:#0077b6'>\"Posso te ajudar?\" \"Sim, por favor.\"</span>" },
                        { term: "This isn't ok", sent: "This isn't ok. Stop it.", trans: "<span style='color:#0077b6'>Isso não está certo. Pare com isso.</span>" },
                        { term: "We have to stop", sent: "We have to stop the bullies.", trans: "<span style='color:#0077b6'>Temos que parar os agressores.</span>" },
                        { term: "Talk with someone...", sent: "Talk with someone you trust like a teacher.", trans: "<span style='color:#0077b6'>Converse com alguém em quem você confia, como um professor.</span>" }
                    ]
                }
            ],

            // ======================================================
            // 2C: Practice Drills (24 MCQ Exercises)
            // ======================================================
            drills: [
                { 
                    type: "mcq", 
                    q: "Choose the correct translation for 'Support'.", 
                    options: [ {t: "Machucar", c: false}, {t: "Apoiar", c: true}, {t: "Parar", c: false}, {t: "Bloquear", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: 'We must _______ bullying.'", 
                    options: [ {t: "start", c: false}, {t: "stop", c: true}, {t: "like", c: false}, {t: "play", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "How do you feel when you pass a test?", 
                    options: [ {t: "Sad", c: false}, {t: "Angry", c: false}, {t: "Happy", c: true}, {t: "Scared", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "The opposite of 'Calm' is...", 
                    options: [ {t: "Relaxed", c: false}, {t: "Nervous / Worried", c: true}, {t: "Happy", c: false}, {t: "Sleepy", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "What comes after 'today'?", 
                    options: [ {t: "Yesterday", c: false}, {t: "Tonight", c: false}, {t: "Tomorrow", c: true}, {t: "Last week", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: 'I will see you _______ week.'", 
                    options: [ {t: "next", c: true}, {t: "tomorrow", c: false}, {t: "later", c: false}, {t: "soon", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Routine Verb: 'I _______ up at 6:00 AM.'", 
                    options: [ {t: "go", c: false}, {t: "wake", c: true}, {t: "sleep", c: false}, {t: "do", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Routine Verb: 'She _______ to school every day.'", 
                    options: [ {t: "goes", c: true}, {t: "going", c: false}, {t: "go", c: false}, {t: "went", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Mean messages on the internet are called...", 
                    options: [ {t: "Support", c: false}, {t: "Cyberbullying", c: true}, {t: "Homework", c: false}, {t: "Respect", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Phrase: '_______ is going to be okay.'", 
                    options: [ {t: "Nothing", c: false}, {t: "Everything", c: true}, {t: "Someone", c: false}, {t: "Nobody", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Phrase: '_______ with someone you trust.'", 
                    options: [ {t: "Talk", c: true}, {t: "Fight", c: false}, {t: "Ignore", c: false}, {t: "Hide", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Phrase: 'What _______ you doing?'", 
                    options: [ {t: "is", c: false}, {t: "do", c: false}, {t: "are", c: true}, {t: "am", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Feeling: If you miss your family, you might feel _______.", 
                    options: [ {t: "Excited", c: false}, {t: "Lonely", c: true}, {t: "Angry", c: false}, {t: "Calm", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Action: If someone sends you a mean message, you should _______ it to a teacher.", 
                    options: [ {t: "Accept", c: false}, {t: "Report", c: true}, {t: "Trust", c: false}, {t: "Help", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Time: What is the day after tomorrow?", 
                    options: [ {t: "Soon", c: false}, {t: "Later", c: false}, {t: "In three days", c: false}, {t: "The day after tomorrow", c: true} ] 
                },
                { 
                    type: "mcq", 
                    q: "Routine: 'We _______ dinner at 8 PM.'", 
                    options: [ {t: "do", c: false}, {t: "have", c: true}, {t: "go", c: false}, {t: "eat", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Bullying Vocab: Spreading false information about someone is a _______.", 
                    options: [ {t: "Message", c: false}, {t: "Rumor", c: true}, {t: "Comment", c: false}, {t: "Post", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Phrase: 'Don't be _______ to ask for help.'", 
                    options: [ {t: "sad", c: false}, {t: "afraid", c: true}, {t: "happy", c: false}, {t: "calm", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Feeling: The opposite of 'Happy' is...", 
                    options: [ {t: "Sad", c: true}, {t: "Angry", c: false}, {t: "Excited", c: false}, {t: "Worried", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Action: To treat others with kindness is to show _______.", 
                    options: [ {t: "Bullying", c: false}, {t: "Respect", c: true}, {t: "Rumor", c: false}, {t: "Anger", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Time: 'I will see you later _______ the evening.'", 
                    options: [ {t: "on", c: false}, {t: "in", c: true}, {t: "at", c: false}, {t: "next", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Routine Verb: 'He _______ his homework every day.'", 
                    options: [ {t: "does", c: true}, {t: "makes", c: false}, {t: "has", c: false}, {t: "goes", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Bullying Vocab: A safe place has no _______.", 
                    options: [ {t: "danger", c: true}, {t: "friends", c: false}, {t: "teachers", c: false}, {t: "rules", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Phrase: 'I am _______ about the big test tomorrow.'", 
                    options: [ {t: "feeling worried", c: true}, {t: "feeling excited", c: false}, {t: "feeling calm", c: false}, {t: "feeling happy", c: false} ] 
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

            // 3A: Explanations (Tabbed Grammar Boxes)
            patterns: [
                {
                    title: "Simple Present vs. Present Continuous",
                    audio: "TTS: We compare these two tenses to show the difference between a routine and an action happening right now. Simple Present: I usually help my friends. Present Continuous: I am helping Albert now. Simple Present: He posts photos every day. Present Continuous: He is posting a photo.",
                    explanation: "We compare these to show the difference between a routine (Simple Present) and an action happening right now (Present Continuous).<br><br><small style='color:#0077b6; font-style:italic;'>(Comparamos estes dois tempos para mostrar a diferença entre uma rotina e uma ação acontecendo agora mesmo.)</small>",
                    samples: [
                        { en: "I usually help my friends. (Routine) vs. I am helping Albert now. (Now)", pt: "<small style='color:#0077b6'>Eu geralmente ajudo meus amigos. vs. Eu estou ajudando o Albert agora.</small>" },
                        { en: "He posts photos every day. (Routine) vs. He is posting a photo. (Now)", pt: "<small style='color:#0077b6'>Ele posta fotos todo dia. vs. Ele está postando uma foto.</small>" },
                        { en: "She never bullies people. (Routine) vs. She is bullying someone. (Now)", pt: "<small style='color:#0077b6'>Ela nunca faz bullying. vs. Ela está fazendo bullying com alguém.</small>" }
                    ]
                },
                {
                    title: "Present Continuous for Future",
                    audio: "TTS: We use the Present Continuous to talk about future plans that are already organized or fixed. I am meeting my friends tomorrow. He is playing in the match on Sunday. We are flying to Paris next month.",
                    explanation: "We use the Present Continuous to talk about future plans that are already organized or fixed (arrangements). We usually add a time expression.<br><br><small style='color:#0077b6; font-style:italic;'>(Usamos o Presente Contínuo para falar sobre planos futuros que já estão organizados ou fixados.)</small>",
                    samples: [
                        { en: "I am meeting my friends tomorrow.", pt: "<small style='color:#0077b6'>Eu vou encontrar meus amigos amanhã.</small>" },
                        { en: "He is playing in the match on Sunday.", pt: "<small style='color:#0077b6'>Ele vai jogar na partida no domingo.</small>" },
                        { en: "The school is closing early tomorrow.", pt: "<small style='color:#0077b6'>A escola vai fechar cedo amanhã.</small>" }
                    ]
                },
                {
                    title: "Future with 'Be Going To'",
                    audio: "TTS: We use be going to plus base verb for intentions or predictions based on evidence. I am going to stop bullying. You are going to be okay. He is going to report the message. They are going to support their friend.",
                    explanation: "We use 'be going to' + base verb for **intentions** (things we want to do) or **predictions** based on evidence (what we see).<br><br><small style='color:#0077b6; font-style:italic;'>(Usamos 'be going to' + verbo base para intenções ou previsões baseadas em evidências.)</small>",
                    samples: [
                        { en: "I am going to stop bullying. (Intention)", pt: "<small style='color:#0077b6'>Eu vou parar o bullying.</small>" },
                        { en: "You are going to be okay. (Prediction)", pt: "<small style='color:#0077b6'>Você vai ficar bem.</small>" },
                        { en: "He is going to report the message.", pt: "<small style='color:#0077b6'>Ele vai denunciar a mensagem.</small>" },
                        { en: "They are going to support their friend.", pt: "<small style='color:#0077b6'>Eles vão apoiar o amigo deles.</small>" }
                    ]
                },
                {
                    title: "Future: 'Going to' vs. Present Continuous",
                    audio: "TTS: Going to is for intentions or plans. I am going to watch TV. Present continuous is for fixed arrangements that are already scheduled. I am meeting Tom at 5.",
                    explanation: "We use 'Going to' for intentions/plans. We use Present Continuous for fixed, scheduled arrangements.<br><br><small style='color:#0077b6; font-style:italic;'>('Going to' é para intenções/planos. Presente Contínuo é para compromissos fixos e agendados.)</small>",
                    samples: [
                        { en: "Going to (Intention): I am going to watch TV.", pt: "<small style='color:#0077b6'>Eu vou assistir TV (decidi fazer isso).</small>" },
                        { en: "Present Continuous (Arrangement): I am meeting Tom at 5.", pt: "<small style='color:#0077b6'>Eu vou encontrar o Tom às 5 (está agendado).</small>" }
                    ]
                }
            ],

            // ======================================================
            // 3B: Natural Examples (Dialogues Grouped in Boxes)
            // ======================================================
            dialogueGroups: [
                {
                    title: "Dialogue 1: Routine vs. Now",
                    audio: "audio/8-1-2/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "I usually play games on Fridays, but today I am studying.", 
                            pt: "<span style='color:#0077b6'>Eu geralmente jogo jogos às sextas, mas hoje estou estudando.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Why? Do you have a test?", 
                            pt: "<span style='color:#0077b6'>Por quê? Você tem um teste?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes. My classmates are waiting for me in the library right now.", 
                            pt: "<span style='color:#0077b6'>Sim. Meus colegas estão me esperando na biblioteca agora mesmo.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Future Arrangements (Present Continuous)",
                    audio: "audio/8-1-2/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Are you doing anything this weekend?", 
                            pt: "<span style='color:#0077b6'>Você vai fazer alguma coisa neste fim de semana?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes. I am visiting my grandmother on Saturday. And we are having lunch together.", 
                            pt: "<span style='color:#0077b6'>Sim. Eu vou visitar minha avó no sábado. E nós vamos almoçar juntos.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Future Intentions (Going To)",
                    audio: "audio/8-1-2/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Look at those dark clouds. It is going to rain.", 
                            pt: "<span style='color:#0077b6'>Olhe aquelas nuvens escuras. Vai chover.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Oh no! I am going to get wet. I didn't bring my umbrella.", 
                            pt: "<span style='color:#0077b6'>Ah não! Eu vou me molhar. Não trouxe meu guarda-chuva.</span>" 
                        }
                    ]
                }
            ],

            // ======================================================
            // 3C: Grammar Practice (24 MCQ Exercises)
            // ======================================================
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Routine vs. Now: 'He usually _______ (sleep) early, but tonight he _______ (watch) a movie.'",
                    options: [ {t: "sleeps / is watching", c: true}, {t: "is sleeping / watches", c: false}, {t: "sleep / watch", c: false}, {t: "sleeping / watching", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Present Continuous (Future): 'We _______ (fly) to London next Friday.'",
                    options: [ {t: "fly", c: false}, {t: "are flying", c: true}, {t: "is flying", c: false}, {t: "flying", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Going To (Intention): 'I _______ (buy) a new phone soon.'",
                    options: [ {t: "am going to buy", c: true}, {t: "buy", c: false}, {t: "buying", c: false}, {t: "go buy", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Going To (Prediction): 'Look at the car! It _______ (crash)!'",
                    options: [ {t: "is going to crash", c: true}, {t: "crash", c: false}, {t: "crashes", c: false}, {t: "crashing", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Mixed Future: 'What _______ (you/do) tomorrow evening?'",
                    options: [ {t: "are you doing", c: true}, {t: "do you do", c: false}, {t: "are you do", c: false}, {t: "you doing", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Going To (Negative): 'She _______ (not/accept) the bullying.'",
                    options: [ {t: "isn't going to accept", c: true}, {t: "not going to accept", c: false}, {t: "doesn't going to accept", c: false}, {t: "don't accept", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Subject Pronouns: '_______ (The teachers) are going to help.'",
                    options: [ {t: "We", c: false}, {t: "They", c: true}, {t: "You", c: false}, {t: "It", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Interrogative: '_______ (he) going to report the problem?'",
                    options: [ {t: "Are", c: false}, {t: "Am", c: false}, {t: "Is", c: true}, {t: "Do", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Routine vs. Now: 'She _______ (not/work) today because she is sick.'",
                    options: [ {t: "doesn't work", c: false}, {t: "isn't working", c: true}, {t: "not works", c: false}, {t: "don't work", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Present Continuous (Future): 'He _______ (play) soccer with his friends this afternoon.'",
                    options: [ {t: "plays", c: false}, {t: "is playing", c: true}, {t: "play", c: false}, {t: "are playing", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Going To (Prediction): 'Be careful! You _______ (fall).'",
                    options: [ {t: "fall", c: false}, {t: "are falling", c: false}, {t: "are going to fall", c: true}, {t: "falls", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Routine: 'My friends and I _______ (chat) online every day.'",
                    options: [ {t: "chat", c: true}, {t: "chats", c: false}, {t: "are chatting", c: false}, {t: "is chatting", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Going To (Intention): 'We _______ (start) an anti-bullying campaign.'",
                    options: [ {t: "are going to start", c: true}, {t: "start", c: false}, {t: "are starting", c: false}, {t: "starts", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Present Continuous (Now): 'Why _______ (you/look) so sad right now?'",
                    options: [ {t: "do you look", c: false}, {t: "are you looking", c: true}, {t: "you are looking", c: false}, {t: "is you looking", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Routine vs. Now: 'I usually _______ (walk) to school, but today my dad _______ (drive) me.'",
                    options: [ {t: "walk / drives", c: false}, {t: "am walking / is driving", c: false}, {t: "walk / is driving", c: true}, {t: "am walking / drives", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Going To (Negative): 'They _______ (post) mean comments anymore.'",
                    options: [ {t: "aren't going to post", c: true}, {t: "don't post", c: false}, {t: "no post", c: false}, {t: "not going to post", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Present Continuous (Future): 'I _______ (meet) the school counselor on Monday.'",
                    options: [ {t: "meet", c: false}, {t: "am meeting", c: true}, {t: "going to meet", c: false}, {t: "meets", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Routine: 'He _______ (check) his notifications all the time.'",
                    options: [ {t: "is checking", c: false}, {t: "checks", c: true}, {t: "check", c: false}, {t: "are checking", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Going To (Intention): 'I _______ (talk) to my parents about it tonight.'",
                    options: [ {t: "talk", c: false}, {t: "am going to talk", c: true}, {t: "am talking", c: false}, {t: "will talk", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Present Continuous (Now): 'Be quiet! The baby _______ (sleep).'",
                    options: [ {t: "sleeps", c: false}, {t: "is sleeping", c: true}, {t: "sleep", c: false}, {t: "are sleeping", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Routine vs. Now: 'Where do you work? 'I normally _______ in an office, but I _______ from home today.'",
                    options: [ {t: "work / am working", c: true}, {t: "am working / work", c: false}, {t: "works / is working", c: false}, {t: "working / am working", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Going To (Prediction): 'Look at the sky! It _______ (be) a beautiful day.'",
                    options: [ {t: "is", c: false}, {t: "is being", c: false}, {t: "is going to be", c: true}, {t: "are going to be", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Present Continuous (Future): 'She _______ (have) a party next weekend.'",
                    options: [ {t: "has", c: false}, {t: "is having", c: true}, {t: "have", c: false}, {t: "going to have", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Routine: 'My phone _______ (not work) very well. It's old.'",
                    options: [ {t: "don't work", c: false}, {t: "isn't working", c: false}, {t: "doesn't work", c: true}, {t: "not work", c: false} ]
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
                    text: "I am going to report this.<br><small style='color:#0077b6'>(Eu vou denunciar isso.)</small>", 
                    audio: "TTS: I am going to report this.", 
                    arrow: "↘" 
                },
                { 
                    text: "She is feeling sad today.<br><small style='color:#0077b6'>(Ela está se sentindo triste hoje.)</small>", 
                    audio: "TTS: She is feeling sad today.", 
                    arrow: "↘" 
                },
                { 
                    text: "We don't accept bullying.<br><small style='color:#0077b6'>(Nós não aceitamos bullying.)</small>", 
                    audio: "TTS: We don't accept bullying.", 
                    arrow: "↘" 
                },
                { 
                    text: "Are you meeting him tomorrow?<br><small style='color:#0077b6'>(Você vai encontrar com ele amanhã?)</small>", 
                    audio: "TTS: Are you meeting him tomorrow?", 
                    arrow: "↗" 
                },
                { 
                    text: "He usually posts at night.<br><small style='color:#0077b6'>(Ele geralmente posta à noite.)</small>", 
                    audio: "TTS: He usually posts at night.", 
                    arrow: "↘" 
                },
                { 
                    text: "Everything is going to be okay.<br><small style='color:#0077b6'>(Tudo vai ficar bem.)</small>", 
                    audio: "TTS: Everything is going to be okay.", 
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
                    instruction: "Listen to Albert talking about his plan. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre o plano dele. Digite as palavras que faltam.)</small>",
                    audio: "TTS: Next week, I am going to talk to the teacher. I am feeling nervous, but I know it is the right thing to do.",
                    text: "Next week, I am [going to] talk to the teacher. I am [feeling] nervous, but I know it is the [right] thing to do."
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation between Celine and her mom. Choose the correct option.<br><small style='color:#0077b6'>(Ouça a conversa entre Celine e sua mãe. Escolha a opção correta.)</small>",
                    audio: "audio/8-1-2/step5_drill2.mp3",
                    questions: [
                        { q: "Mom: What are you [doing | do] tomorrow, Celine?", a: "doing" },
                        { q: "Celine: I am [meeting | meet] Sarah at the park.", a: "meeting" },
                        { q: "Mom: Are you [going to | go to] study?", a: "going to" },
                        { q: "Celine: No, we are going to [relax | work].", a: "relax" }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the statement and choose the correct feeling.<br><small style='color:#0077b6'>(Ouça a afirmação e escolha o sentimento correto.)</small>",
                    audio: "TTS: I have a big test tomorrow and I didn't study enough. My stomach hurts.",
                    options: [
                        { t: "He is happy.", c: false },
                        { t: "He is worried.", c: true },
                        { t: "He is excited.", c: false },
                        { t: "He is calm.", c: false }
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
                    title: "Narration: The Cyberbullying Incident",
                    audio: "TTS: Lucas is a student at REACH school. Usually, he is happy and outgoing. But this week, he is feeling lonely and sad. Some students are posting mean comments on his photos. It is cyberbullying. Lucas knows this is dangerous. He is not going to hide. Tomorrow, he is going to report the comments to the school counselor. He knows that he must stop this behavior. || audio/8-1-2/p6_text1.mp3",
                    body: "Lucas is a student at REACH school. Usually, he is happy and outgoing. But this week, he is feeling lonely and sad. Some students are posting mean comments on his photos. It is cyberbullying. Lucas knows this is dangerous. He is not going to hide. Tomorrow, he is going to report the comments to the school counselor. He knows that he must stop this behavior.",
                    questions: [
                        { 
                            q: "How is Lucas feeling this week?", 
                            options: [ 
                                {t: "Happy and outgoing", c: false}, 
                                {t: "Lonely and sad", c: true}, 
                                {t: "Excited and brave", c: false},
                                {t: "Angry and rude", c: false}
                            ] 
                        },
                        { 
                            q: "What is happening to Lucas?", 
                            options: [ 
                                {t: "He is failing math.", c: false}, 
                                {t: "He is fighting.", c: false}, 
                                {t: "People are posting mean comments.", c: true},
                                {t: "He lost his phone.", c: false}
                            ] 
                        },
                        { 
                            q: "What is he going to do tomorrow?", 
                            options: [ 
                                {t: "Hide in his room.", c: false}, 
                                {t: "Post mean comments back.", c: false}, 
                                {t: "Report it to the counselor.", c: true},
                                {t: "Leave the school.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: Supporting a Friend",
                    audio: "audio/8-1-2/p6_text2.mp3",
                    body: "<b>Celine:</b> Hi Albert. Are you okay? You seem quiet today.<br><b>Albert:</b> I am feeling frustrated. I blocked a bully online, but he created a new account.<br><b>Celine:</b> That is terrible. Are you going to tell your parents?<br><b>Albert:</b> Yes, I am going to tell them tonight. I need help.<br><b>Celine:</b> Good. You shouldn't deal with this alone. I am meeting Mrs. Canales later. Do you want to come?<br><b>Albert:</b> Yes, please. Thanks for your support, Celine.",
                    questions: [
                        { 
                            q: "Why is Albert frustrated?", 
                            options: [ 
                                {t: "He failed a test.", c: false}, 
                                {t: "The bully created a new account.", c: true}, 
                                {t: "He lost his phone.", c: false},
                                {t: "He is tired.", c: false}
                            ] 
                        },
                        { 
                            q: "When is Albert going to tell his parents?", 
                            options: [ 
                                {t: "Tomorrow", c: false}, 
                                {t: "Next week", c: false}, 
                                {t: "Tonight", c: true},
                                {t: "Now", c: false}
                            ] 
                        },
                        { 
                            q: "What is Celine doing later?", 
                            options: [ 
                                {t: "Meeting Mrs. Canales", c: true}, 
                                {t: "Going home", c: false}, 
                                {t: "Playing video games", c: false},
                                {t: "Studying math", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: Our Anti-Bullying Campaign",
                    audio: "TTS: Next month, our school is going to start a new campaign called Kindness First. We are going to have special classes about respect and empathy. We usually have assembly on Mondays, but next week, we are meeting on Tuesday to launch the project. The principal is going to speak about internet safety. We are feeling hopeful that this campaign will help everyone feel safe at school. || audio/8-1-2/p6_text3.mp3",
                    body: "Next month, our school is going to start a new campaign called \"Kindness First\". We are going to have special classes about respect and empathy. We usually have assembly on Mondays, but next week, we are meeting on Tuesday to launch the project. The principal is going to speak about internet safety. We are feeling hopeful that this campaign will help everyone feel safe at school.",
                    questions: [
                        { 
                            q: "What is the name of the campaign?", 
                            options: [ 
                                {t: "Stop Bullying", c: false}, 
                                {t: "Kindness First", c: true}, 
                                {t: "Be Safe", c: false},
                                {t: "School Rules", c: false}
                            ] 
                        },
                        { 
                            q: "When are they meeting to launch the project?", 
                            options: [ 
                                {t: "On Monday", c: false}, 
                                {t: "On Tuesday", c: true}, 
                                {t: "Next month", c: false},
                                {t: "Tomorrow", c: false}
                            ] 
                        },
                        { 
                            q: "How are they feeling about the campaign?", 
                            options: [ 
                                {t: "Worried", c: false}, 
                                {t: "Hopeful", c: true}, 
                                {t: "Sad", c: false},
                                {t: "Angry", c: false}
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
                // Drill 1: Matching (Feelings)
                {
                    type: "matching",
                    instruction: "Match the adjective with its definition.<br><small style='color:#0077b6'>(Combine o adjetivo com sua definição.)</small>",
                    pairs: [
                        { left: "Lonely", right: "Feeling alone and sad", val: "1" },
                        { left: "Confident", right: "Feeling sure of yourself", val: "2" },
                        { left: "Worried", right: "Thinking about problems", val: "3" },
                        { left: "Angry", right: "Feeling mad or upset", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Unscramble)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "going / to / report / I / am / it / .",
                    correct: "I am going to report it ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "you / doing / tomorrow / are / What / ?",
                    correct: "What are you doing tomorrow ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "feeling / is / She / sad / very / .",
                    correct: "She is feeling very sad ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "usually / up / wake / I / early / .",
                    correct: "I usually wake up early ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Happy", c: false },
                        { t: "Sad", c: false },
                        { t: "Tomorrow", c: true }, // Time expression, others are feelings
                        { t: "Angry", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Bully", c: true }, // Negative action, others are positive
                        { t: "Support", c: false },
                        { t: "Respect", c: false },
                        { t: "Help", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Going to", c: false },
                        { t: "Will", c: false },
                        { t: "Yesterday", c: true }, // Past time, others relate to Future
                        { t: "Tomorrow", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Wake up", c: false },
                        { t: "Sleep", c: false },
                        { t: "Eat", c: false },
                        { t: "Lonely", c: true } // Adjective, others are verbs
                    ]
                },
                // Drill 4: Fill in the Blanks
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.<br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "I [am | going | are | usually] meeting my friends later.", a: "am" },
                        { q: "We are [going | am | are | usually] to watch a movie.", a: "going" },
                        { q: "What [are | am | going | usually] you doing tonight?", a: "are" },
                        { q: "He [usually | am | going | are] plays soccer on Fridays.", a: "usually" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn! Write about your plans for next week.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas: Agora é a sua vez! Escreva sobre seus planos para a próxima semana.)</span></small>",
            example: "\"I am feeling excited about next week. I am going to study for my English test on Monday. On Wednesday, I am meeting my friends at the park. We are going to play basketball.\"<br><br><small><span style='color:#0077b6'>(\"Eu estou me sentindo animado para a próxima semana. Eu vou estudar para o meu teste de Inglês na segunda. Na quarta, eu vou encontrar meus amigos no parque. Nós vamos jogar basquete.\")</span></small>",
            prompts: [
                "How are you feeling about next week? (I am feeling...) <br><span style='color:#0077b6'>(Como você está se sentindo sobre a próxima semana?)</span>",
                "What are you going to do? (I am going to...) <br><span style='color:#0077b6'>(O que você vai fazer?)</span>",
                "Do you have any fixed arrangements? (I am meeting/playing...) <br><span style='color:#0077b6'>(Você tem algum compromisso fixo?)</span>"
            ]
        },
        

    // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Verbs & Feelings)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Verbs (Bullying & Support) ---
                { 
                    term: "Bully", 
                    definition: "To seek to harm, intimidate, or coerce someone.", 
                    defTrans: "<small style='color:#0077b6'>Intimidar / Praticar bullying</small>",
                    example: "It is wrong to bully others.", 
                    audioFront: "TTS: Bully",
                    audioBack: "TTS: It is wrong to bully others." 
                },
                { 
                    term: "Hurt", 
                    definition: "To cause physical pain or injury to; to cause mental pain.", 
                    defTrans: "<small style='color:#0077b6'>Machucar / Magoar</small>",
                    example: "Mean words can hurt feelings.", 
                    audioFront: "TTS: Hurt",
                    audioBack: "TTS: Mean words can hurt feelings." 
                },
                { 
                    term: "Stop", 
                    definition: "To come to an end; cease to happen.", 
                    defTrans: "<small style='color:#0077b6'>Parar</small>",
                    example: "We must stop the fighting.", 
                    audioFront: "TTS: Stop",
                    audioBack: "TTS: We must stop the fighting." 
                },
                { 
                    term: "Help", 
                    definition: "To make it easier for someone to do something.", 
                    defTrans: "<small style='color:#0077b6'>Ajudar</small>",
                    example: "Can I help you with that?", 
                    audioFront: "TTS: Help",
                    audioBack: "TTS: Can I help you with that?" 
                },
                { 
                    term: "Support", 
                    definition: "To give assistance, encouragement, or approval to.", 
                    defTrans: "<small style='color:#0077b6'>Apoiar</small>",
                    example: "Good friends support each other.", 
                    audioFront: "TTS: Support",
                    audioBack: "TTS: Good friends support each other." 
                },
                { 
                    term: "Report", 
                    definition: "To give a spoken or written account of something.", 
                    defTrans: "<small style='color:#0077b6'>Denunciar / Reportar</small>",
                    example: "You should report bad behavior.", 
                    audioFront: "TTS: Report",
                    audioBack: "TTS: You should report bad behavior." 
                },
                { 
                    term: "Block", 
                    definition: "To prevent someone from contacting you online.", 
                    defTrans: "<small style='color:#0077b6'>Bloquear</small>",
                    example: "I blocked the rude account.", 
                    audioFront: "TTS: Block",
                    audioBack: "TTS: I blocked the rude account." 
                },
                { 
                    term: "Respect", 
                    definition: "To have due regard for the feelings or rights of others.", 
                    defTrans: "<small style='color:#0077b6'>Respeitar</small>",
                    example: "We respect everyone here.", 
                    audioFront: "TTS: Respect",
                    audioBack: "TTS: We respect everyone here." 
                },
                { 
                    term: "Accept", 
                    definition: "To believe or come to recognize as valid or correct.", 
                    defTrans: "<small style='color:#0077b6'>Aceitar</small>",
                    example: "Please accept my apology.", 
                    audioFront: "TTS: Accept",
                    audioBack: "TTS: Please accept my apology." 
                },
                { 
                    term: "Trust", 
                    definition: "To believe in the reliability or truth of someone.", 
                    defTrans: "<small style='color:#0077b6'>Confiar</small>",
                    example: "Talk to an adult you trust.", 
                    audioFront: "TTS: Trust",
                    audioBack: "TTS: Talk to an adult you trust." 
                },

                // --- Feelings (Adjectives) ---
                { 
                    term: "Happy", 
                    definition: "Feeling or showing pleasure or contentment.", 
                    defTrans: "<small style='color:#0077b6'>Feliz</small>",
                    example: "She looks very happy today.", 
                    audioFront: "TTS: Happy",
                    audioBack: "TTS: She looks very happy today." 
                },
                { 
                    term: "Sad", 
                    definition: "Feeling or showing sorrow; unhappy.", 
                    defTrans: "<small style='color:#0077b6'>Triste</small>",
                    example: "He is sad about the news.", 
                    audioFront: "TTS: Sad",
                    audioBack: "TTS: He is sad about the news." 
                },
                { 
                    term: "Angry", 
                    definition: "Having a strong feeling of annoyance or hostility.", 
                    defTrans: "<small style='color:#0077b6'>Bravo(a) / Com raiva</small>",
                    example: "Don't get angry at him.", 
                    audioFront: "TTS: Angry",
                    audioBack: "TTS: Don't get angry at him." 
                },
                { 
                    term: "Scared", 
                    definition: "Fearful; frightened.", 
                    defTrans: "<small style='color:#0077b6'>Assustado(a)</small>",
                    example: "I am scared of the dark.", 
                    audioFront: "TTS: Scared",
                    audioBack: "TTS: I am scared of the dark." 
                },
                { 
                    term: "Worried", 
                    definition: "Anxious or troubled about actual or potential problems.", 
                    defTrans: "<small style='color:#0077b6'>Preocupado(a)</small>",
                    example: "Mom is worried about the test.", 
                    audioFront: "TTS: Worried",
                    audioBack: "TTS: Mom is worried about the test." 
                },
                { 
                    term: "Frustrated", 
                    definition: "Feeling distress and annoyance from inability to change something.", 
                    defTrans: "<small style='color:#0077b6'>Frustrado(a)</small>",
                    example: "I feel frustrated when I lose.", 
                    audioFront: "TTS: Frustrated",
                    audioBack: "TTS: I feel frustrated when I lose." 
                },
                { 
                    term: "Lonely", 
                    definition: "Sad because one has no friends or company.", 
                    defTrans: "<small style='color:#0077b6'>Solitário(a)</small>",
                    example: "He feels lonely at the new school.", 
                    audioFront: "TTS: Lonely",
                    audioBack: "TTS: He feels lonely at the new school." 
                },
                { 
                    term: "Excited", 
                    definition: "Very enthusiastic and eager.", 
                    defTrans: "<small style='color:#0077b6'>Animado(a) / Empolgado(a)</small>",
                    example: "We are excited for the party.", 
                    audioFront: "TTS: Excited",
                    audioBack: "TTS: We are excited for the party." 
                },
                { 
                    term: "Calm", 
                    definition: "Not showing or feeling nervousness or anger.", 
                    defTrans: "<small style='color:#0077b6'>Calmo(a)</small>",
                    example: "Stay calm and breathe.", 
                    audioFront: "TTS: Calm",
                    audioBack: "TTS: Stay calm and breathe." 
                },
                { 
                    term: "Surprised", 
                    definition: "Feeling or showing surprise.", 
                    defTrans: "<small style='color:#0077b6'>Surpreso(a)</small>",
                    example: "She was surprised by the gift.", 
                    audioFront: "TTS: Surprised",
                    audioBack: "TTS: She was surprised by the gift." 
                },
                { 
                    term: "Confident", 
                    definition: "Feeling or showing confidence in oneself.", 
                    defTrans: "<small style='color:#0077b6'>Confiante</small>",
                    example: "Be confident in yourself.", 
                    audioFront: "TTS: Confident",
                    audioBack: "TTS: Be confident in yourself." 
                },
                // --- Time Expressions (Future) ---
                { 
                    term: "Tomorrow", 
                    definition: "On the day after today.", 
                    defTrans: "<small style='color:#0077b6'>Amanhã</small>",
                    example: "See you tomorrow.", 
                    audioFront: "TTS: Tomorrow",
                    audioBack: "TTS: See you tomorrow." 
                },
                { 
                    term: "Next week", 
                    definition: "The week following the current one.", 
                    defTrans: "<small style='color:#0077b6'>Próxima semana</small>",
                    example: "We have a game next week.", 
                    audioFront: "TTS: Next week",
                    audioBack: "TTS: We have a game next week." 
                },
                { 
                    term: "Next month", 
                    definition: "The month following the current one.", 
                    defTrans: "<small style='color:#0077b6'>Próximo mês</small>",
                    example: "My birthday is next month.", 
                    audioFront: "TTS: Next month",
                    audioBack: "TTS: My birthday is next month." 
                },
                { 
                    term: "Next year", 
                    definition: "The year following the current one.", 
                    defTrans: "<small style='color:#0077b6'>Próximo ano</small>",
                    example: "I will travel next year.", 
                    audioFront: "TTS: Next year",
                    audioBack: "TTS: I will travel next year." 
                },
                { 
                    term: "Tonight", 
                    definition: "On the evening or night of the present day.", 
                    defTrans: "<small style='color:#0077b6'>Hoje à noite</small>",
                    example: "We are watching a movie tonight.", 
                    audioFront: "TTS: Tonight",
                    audioBack: "TTS: We are watching a movie tonight." 
                },
                { 
                    term: "Soon", 
                    definition: "In or after a short time.", 
                    defTrans: "<small style='color:#0077b6'>Em breve</small>",
                    example: "I will call you soon.", 
                    audioFront: "TTS: Soon",
                    audioBack: "TTS: I will call you soon." 
                },
                { 
                    term: "Later", 
                    definition: "At a time in the near future; after the present.", 
                    defTrans: "<small style='color:#0077b6'>Mais tarde</small>",
                    example: "Let's talk later.", 
                    audioFront: "TTS: Later",
                    audioBack: "TTS: Let's talk later." 
                },
                { 
                    term: "In the morning", 
                    definition: "Before noon.", 
                    defTrans: "<small style='color:#0077b6'>De manhã</small>",
                    example: "I study in the morning.", 
                    audioFront: "TTS: In the morning",
                    audioBack: "TTS: I study in the morning." 
                },
                { 
                    term: "In the afternoon", 
                    definition: "The time from noon or lunchtime to evening.", 
                    defTrans: "<small style='color:#0077b6'>À tarde</small>",
                    example: "We play in the afternoon.", 
                    audioFront: "TTS: In the afternoon",
                    audioBack: "TTS: We play in the afternoon." 
                },
                { 
                    term: "In the evening", 
                    definition: "The period of time at the end of the day.", 
                    defTrans: "<small style='color:#0077b6'>De noite</small>",
                    example: "I relax in the evening.", 
                    audioFront: "TTS: In the evening",
                    audioBack: "TTS: I relax in the evening." 
                },

                // --- Routine Verbs ---
                { 
                    term: "Wake up", 
                    definition: "To stop sleeping.", 
                    defTrans: "<small style='color:#0077b6'>Acordar</small>",
                    example: "I wake up early.", 
                    audioFront: "TTS: Wake up",
                    audioBack: "TTS: I wake up early." 
                },
                { 
                    term: "Get up", 
                    definition: "To rise from bed after sleeping.", 
                    defTrans: "<small style='color:#0077b6'>Levantar-se</small>",
                    example: "He gets up at 7.", 
                    audioFront: "TTS: Get up",
                    audioBack: "TTS: He gets up at 7." 
                },
                { 
                    term: "Eat breakfast", 
                    definition: "To eat the first meal of the day.", 
                    defTrans: "<small style='color:#0077b6'>Tomar café da manhã</small>",
                    example: "We eat breakfast together.", 
                    audioFront: "TTS: Eat breakfast",
                    audioBack: "TTS: We eat breakfast together." 
                },
                { 
                    term: "Go to school", 
                    definition: "To travel to the place of education.", 
                    defTrans: "<small style='color:#0077b6'>Ir para a escola</small>",
                    example: "She goes to school by bus.", 
                    audioFront: "TTS: Go to school",
                    audioBack: "TTS: She goes to school by bus." 
                },
                { 
                    term: "Study", 
                    definition: "To devote time and attention to acquiring knowledge.", 
                    defTrans: "<small style='color:#0077b6'>Estudar</small>",
                    example: "They study every day.", 
                    audioFront: "TTS: Study",
                    audioBack: "TTS: They study every day." 
                },
                { 
                    term: "Have lunch", 
                    definition: "To eat a meal in the middle of the day.", 
                    defTrans: "<small style='color:#0077b6'>Almoçar</small>",
                    example: "I have lunch at noon.", 
                    audioFront: "TTS: Have lunch",
                    audioBack: "TTS: I have lunch at noon." 
                },
                { 
                    term: "Finish school", 
                    definition: "To complete the school day.", 
                    defTrans: "<small style='color:#0077b6'>Terminar a escola</small>",
                    example: "I finish school at 3 PM.", 
                    audioFront: "TTS: Finish school",
                    audioBack: "TTS: I finish school at 3 PM." 
                },
                { 
                    term: "Do homework", 
                    definition: "To do schoolwork at home.", 
                    defTrans: "<small style='color:#0077b6'>Fazer o dever de casa</small>",
                    example: "He does homework after school.", 
                    audioFront: "TTS: Do homework",
                    audioBack: "TTS: He does homework after school." 
                },
                { 
                    term: "Have dinner", 
                    definition: "To eat the main meal of the day.", 
                    defTrans: "<small style='color:#0077b6'>Jantar</small>",
                    example: "We have dinner at 8 PM.", 
                    audioFront: "TTS: Have dinner",
                    audioBack: "TTS: We have dinner at 8 PM." 
                },
                { 
                    term: "Go to bed", 
                    definition: "To get into a bed to sleep.", 
                    defTrans: "<small style='color:#0077b6'>Ir para cama</small>",
                    example: "I go to bed at 10 PM.", 
                    audioFront: "TTS: Go to bed",
                    audioBack: "TTS: I go to bed at 10 PM." 
                },
                // --- Bullying Vocabulary ---
                { 
                    term: "Bullying", 
                    definition: "The use of force or coercion to abuse or intimidate.", 
                    defTrans: "<small style='color:#0077b6'>Bullying</small>",
                    example: "Bullying hurts everyone.", 
                    audioFront: "TTS: Bullying",
                    audioBack: "TTS: Bullying hurts everyone." 
                },
                { 
                    term: "Cyberbullying", 
                    definition: "Bullying that takes place over digital devices like phones and computers.", 
                    defTrans: "<small style='color:#0077b6'>Cyberbullying (Bullying virtual)</small>",
                    example: "Cyberbullying happens online.", 
                    audioFront: "TTS: Cyberbullying",
                    audioBack: "TTS: Cyberbullying happens online." 
                },
                { 
                    term: "Message", 
                    definition: "A verbal, written, or recorded communication.", 
                    defTrans: "<small style='color:#0077b6'>Mensagem</small>",
                    example: "I sent a text message.", 
                    audioFront: "TTS: Message",
                    audioBack: "TTS: I sent a text message." 
                },
                { 
                    term: "Comment", 
                    definition: "A verbal or written remark expressing an opinion.", 
                    defTrans: "<small style='color:#0077b6'>Comentário</small>",
                    example: "Don't write a mean comment.", 
                    audioFront: "TTS: Comment",
                    audioBack: "TTS: Don't write a mean comment." 
                },
                { 
                    term: "Post", 
                    definition: "A piece of writing, image, or other item of content published online.", 
                    defTrans: "<small style='color:#0077b6'>Publicação / Post</small>",
                    example: "I liked your post.", 
                    audioFront: "TTS: Post",
                    audioBack: "TTS: I liked your post." 
                },
                { 
                    term: "Rumor", 
                    definition: "A currently circulating story or report of uncertain truth.", 
                    defTrans: "<small style='color:#0077b6'>Boato / Fofoca</small>",
                    example: "That story is just a rumor.", 
                    audioFront: "TTS: Rumor",
                    audioBack: "TTS: That story is just a rumor." 
                },
                { 
                    term: "Safe", 
                    definition: "Protected from or not exposed to danger or risk.", 
                    defTrans: "<small style='color:#0077b6'>Seguro(a)</small>",
                    example: "This school is a safe place.", 
                    audioFront: "TTS: Safe",
                    audioBack: "TTS: This school is a safe place." 
                },
                { 
                    term: "Dangerous", 
                    definition: "Able or likely to cause harm or injury.", 
                    defTrans: "<small style='color:#0077b6'>Perigoso(a)</small>",
                    example: "Sharing passwords is dangerous.", 
                    audioFront: "TTS: Dangerous",
                    audioBack: "TTS: Sharing passwords is dangerous." 
                },

                // --- Phrases & Expressions ---
                { 
                    term: "How are you feeling?", 
                    definition: "A question used to ask about someone's emotional state.", 
                    defTrans: "<small style='color:#0077b6'>Como você está se sentindo?</small>",
                    example: "How are you feeling today?", 
                    audioFront: "TTS: How are you feeling?",
                    audioBack: "TTS: How are you feeling today?" 
                },
                { 
                    term: "I'm feeling...", 
                    definition: "Used to describe one's own emotions.", 
                    defTrans: "<small style='color:#0077b6'>Eu estou me sentindo...</small>",
                    example: "I'm feeling great.", 
                    audioFront: "TTS: I'm feeling...",
                    audioBack: "TTS: I'm feeling great." 
                },
                { 
                    term: "What are you doing?", 
                    definition: "A question used to ask about someone's current activity.", 
                    defTrans: "<small style='color:#0077b6'>O que você está fazendo?</small>",
                    example: "What are you doing right now?", 
                    audioFront: "TTS: What are you doing?",
                    audioBack: "TTS: What are you doing right now?" 
                },
                { 
                    term: "Everything is going to be okay", 
                    definition: "A phrase used to comfort someone about the future.", 
                    defTrans: "<small style='color:#0077b6'>Tudo vai ficar bem</small>",
                    example: "Don't worry, everything is going to be okay.", 
                    audioFront: "TTS: Everything is going to be okay",
                    audioBack: "TTS: Don't worry, everything is going to be okay." 
                },
                { 
                    term: "Don't be afraid", 
                    definition: "An imperative phrase encouraging courage.", 
                    defTrans: "<small style='color:#0077b6'>Não tenha medo</small>",
                    example: "Don't be afraid to ask for help.", 
                    audioFront: "TTS: Don't be afraid",
                    audioBack: "TTS: Don't be afraid to ask for help." 
                },
                { 
                    term: "Can I help you?", 
                    definition: "An offer of assistance.", 
                    defTrans: "<small style='color:#0077b6'>Posso te ajudar?</small>",
                    example: "You look sad. Can I help you?", 
                    audioFront: "TTS: Can I help you?",
                    audioBack: "TTS: You look sad. Can I help you?" 
                },
                { 
                    term: "This isn't ok", 
                    definition: "A statement that a situation is unacceptable.", 
                    defTrans: "<small style='color:#0077b6'>Isso não está certo</small>",
                    example: "Stop that. This isn't ok.", 
                    audioFront: "TTS: This isn't ok",
                    audioBack: "TTS: Stop that. This isn't ok." 
                },
                { 
                    term: "We have to stop", 
                    definition: "A statement of obligation to end something.", 
                    defTrans: "<small style='color:#0077b6'>Temos que parar</small>",
                    example: "We have to stop the bullying.", 
                    audioFront: "TTS: We have to stop",
                    audioBack: "TTS: We have to stop the bullying." 
                },
                { 
                    term: "Talk with someone you trust", 
                    definition: "Advice to communicate with a reliable person.", 
                    defTrans: "<small style='color:#0077b6'>Converse com alguém em que você confia</small>",
                    example: "If you are sad, talk with someone you trust.", 
                    audioFront: "TTS: Talk with someone you trust",
                    audioBack: "TTS: If you are sad, talk with someone you trust." 
                },
// --- Grammar Points ---
                { 
                    term: "Simple Present (Routine)", 
                    definition: "Tense used for habits and routines.", 
                    defTrans: "<small style='color:#0077b6'>Rotina (Eu faço...)</small>",
                    example: "I play soccer every Saturday.", 
                    audioFront: "TTS: Simple Present Routine",
                    audioBack: "TTS: I play soccer every Saturday." 
                },
                { 
                    term: "Present Continuous (Now)", 
                    definition: "Tense used for actions happening right now.", 
                    defTrans: "<small style='color:#0077b6'>Agora (Eu estou fazendo...)</small>",
                    example: "I am playing soccer now.", 
                    audioFront: "TTS: Present Continuous Now",
                    audioBack: "TTS: I am playing soccer now." 
                },
                { 
                    term: "Present Continuous (Future)", 
                    definition: "Tense used for fixed future arrangements.", 
                    defTrans: "<small style='color:#0077b6'>Futuro Agendado (Eu vou fazer...)</small>",
                    example: "I am playing soccer tomorrow.", 
                    audioFront: "TTS: Present Continuous Future",
                    audioBack: "TTS: I am playing soccer tomorrow." 
                },
                { 
                    term: "Going To (Intention)", 
                    definition: "Structure used for future plans and intentions.", 
                    defTrans: "<small style='color:#0077b6'>Futuro (Eu vou...)</small>",
                    example: "I am going to play soccer next week.", 
                    audioFront: "TTS: Going To",
                    audioBack: "TTS: I am going to play soccer next week." 
                }
            ] // Closes items array
        } // Closes Step 9 object
    ], // Closes steps array

    // ======================================================
    // GLOSSARY (Complete & Paginated)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "how-are-you-feeling", 
            definition: "A question used to ask about someone's emotional state.", 
            translation: "Como você está se sentindo?" 
        },
        { 
            topic: "Context", 
            term: "worried", 
            definition: "Anxious or troubled about actual or potential problems.", 
            translation: "Preocupado(a)" 
        },
        { 
            topic: "Context", 
            term: "sad", 
            definition: "Feeling or showing sorrow; unhappy.", 
            translation: "Triste" 
        },
        { 
            topic: "Context", 
            term: "message", 
            definition: "A verbal, written, or recorded communication.", 
            translation: "Mensagem" 
        },
        { 
            topic: "Context", 
            term: "post", 
            definition: "To publish a message or image on social media.", 
            translation: "Postar" 
        },
        { 
            topic: "Context", 
            term: "comment", 
            definition: "A verbal or written remark expressing an opinion.", 
            translation: "Comentário" 
        },
        { 
            topic: "Context", 
            term: "cyberbullying", 
            definition: "Bullying that takes place over digital devices like phones.", 
            translation: "Cyberbullying" 
        },
        { 
            topic: "Context", 
            term: "report", 
            definition: "To give a formal account of something to a person in authority.", 
            translation: "Denunciar / Reportar" 
        },
        { 
            topic: "Context", 
            term: "going-to", 
            definition: "Structure used to talk about future intentions or plans.", 
            translation: "Indica futuro (Vou...)" 
        },
        { 
            topic: "Context", 
            term: "tomorrow", 
            definition: "On the day after today.", 
            translation: "Amanhã" 
        },
        { 
            topic: "Context", 
            term: "support", 
            definition: "To give assistance, encouragement, or approval to.", 
            translation: "Apoiar" 
        },
        { 
            topic: "Context", 
            term: "accept", 
            definition: "To believe or come to recognize as valid or correct.", 
            translation: "Aceitar" 
        },
        { 
            topic: "Context", 
            term: "im-feeling", 
            definition: "Used to describe one's own emotions.", 
            translation: "Eu estou me sentindo..." 
        },
        { 
            topic: "Context", 
            term: "everything-is-okay", 
            definition: "A phrase used to comfort someone.", 
            translation: "Tudo vai ficar bem" 
        },

        // --- TOPIC 2: VERBS (BULLYING & SUPPORT) ---
        { topic: "Verbs", term: "bully", definition: "To seek to harm, intimidate, or coerce someone.", translation: "Intimidar" },
        { topic: "Verbs", term: "hurt", definition: "To cause physical or mental pain.", translation: "Machucar" },
        { topic: "Verbs", term: "stop", definition: "To come to an end; cease to happen.", translation: "Parar" },
        { topic: "Verbs", term: "help", definition: "To make it easier for someone to do something.", translation: "Ajudar" },
        { topic: "Verbs", term: "block", definition: "To prevent someone from contacting you online.", translation: "Bloquear" },
        { topic: "Verbs", term: "respect", definition: "To have due regard for the feelings of others.", translation: "Respeitar" },
        { topic: "Verbs", term: "trust", definition: "To believe in the reliability of someone.", translation: "Confiar" },

        // --- TOPIC 3: FEELINGS ---
        { topic: "Feelings", term: "happy", definition: "Feeling or showing pleasure.", translation: "Feliz" },
        { topic: "Feelings", term: "angry", definition: "Having a strong feeling of annoyance.", translation: "Bravo(a)" },
        { topic: "Feelings", term: "scared", definition: "Fearful; frightened.", translation: "Assustado(a)" },
        { topic: "Feelings", term: "frustrated", definition: "Feeling distress from inability to change something.", translation: "Frustrado(a)" },
        { topic: "Feelings", term: "lonely", definition: "Sad because one has no friends or company.", translation: "Solitário(a)" },
        { topic: "Feelings", term: "excited", definition: "Very enthusiastic and eager.", translation: "Animado(a)" },
        { topic: "Feelings", term: "calm", definition: "Not showing nervousness or anger.", translation: "Calmo(a)" },
        { topic: "Feelings", term: "surprised", definition: "Feeling or showing surprise.", translation: "Surpreso(a)" },
        { topic: "Feelings", term: "confident", definition: "Feeling sure of oneself.", translation: "Confiante" },

        // --- TOPIC 4: TIME EXPRESSIONS ---
        { topic: "Time", term: "next-week", definition: "The week following the current one.", translation: "Próxima semana" },
        { topic: "Time", term: "next-month", definition: "The month following the current one.", translation: "Próximo mês" },
        { topic: "Time", term: "tonight", definition: "On the evening or night of the present day.", translation: "Hoje à noite" },
        { topic: "Time", term: "soon", definition: "In or after a short time.", translation: "Em breve" },
        { topic: "Time", term: "later", definition: "At a time in the near future.", translation: "Mais tarde" },
        { topic: "Time", term: "in-the-morning", definition: "Before noon.", translation: "De manhã" },
        { topic: "Time", term: "in-the-afternoon", definition: "From noon to evening.", translation: "À tarde" },
        { topic: "Time", term: "in-the-evening", definition: "The end of the day.", translation: "De noite" },

        // --- TOPIC 5: ROUTINES ---
        { topic: "Routines", term: "wake-up", definition: "To stop sleeping.", translation: "Acordar" },
        { topic: "Routines", term: "get-up", definition: "To rise from bed.", translation: "Levantar-se" },
        { topic: "Routines", term: "study", definition: "To devote time to acquiring knowledge.", translation: "Estudar" },
        { topic: "Routines", term: "go-to-school", definition: "To travel to school.", translation: "Ir para a escola" },
        { topic: "Routines", term: "have-lunch", definition: "To eat the midday meal.", translation: "Almoçar" },
        { topic: "Routines", term: "do-homework", definition: "To do schoolwork at home.", translation: "Fazer lição de casa" },
        { topic: "Routines", term: "have-dinner", definition: "To eat the evening meal.", translation: "Jantar" },
        { topic: "Routines", term: "go-to-bed", definition: "To lie down to sleep.", translation: "Ir para a cama" },

        // --- TOPIC 6: VOCAB & PHRASES ---
        { topic: "Vocab", term: "rumor", definition: "A currently circulating story of uncertain truth.", translation: "Boato" },
        { topic: "Vocab", term: "safe", definition: "Protected from danger.", translation: "Seguro(a)" },
        { topic: "Vocab", term: "dangerous", definition: "Able or likely to cause harm.", translation: "Perigoso(a)" },
        { topic: "Vocab", term: "dont-be-afraid", definition: "Encouraging courage.", translation: "Não tenha medo" },
        { topic: "Vocab", term: "can-i-help-you", definition: "Offer of assistance.", translation: "Posso te ajudar?" },
        { topic: "Vocab", term: "this-isnt-ok", definition: "Statement of unacceptability.", translation: "Isso não está certo" },
        { topic: "Vocab", term: "talk-with-someone", definition: "Advice to communicate.", translation: "Converse com alguém" },

        // --- TOPIC 7: GRAMMAR ---
        { topic: "Grammar", term: "simple-present", definition: "Tense used for habits.", translation: "Presente Simples" },
        { topic: "Grammar", term: "present-continuous", definition: "Tense used for actions now or future arrangements.", translation: "Presente Contínuo" }
    ]
});