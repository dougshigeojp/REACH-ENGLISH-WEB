/**
 * REACH English - LESSON DATA 9-1-1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "9-1-1", 
    grade: "9th Grade",       
    bimester: "1",   
    chapter: "1",    
    chapterTitle: "Inventions Across Time", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Talk about great inventions and inventors.<br>• Use irregular verbs in the past (Simple Past and Past Participle).<br>• Use the Past Perfect tense (had done).<br>• Use the Present Perfect Continuous (have been doing).<br>• Connect past events to the present.",
            welcome: "Hello, Time Travelers! It's Mr. D!<br><br>Welcome to \"Inventions Across Time\"! Today, we are going to explore the amazing creations that changed our world. From the first airplane to the modern computer, we'll discover how they came to be. But to do that, we need to master time itself! We will learn how to use advanced past tenses to tell stories with precision. Are you ready to invent your future? Let's go!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about great inventions and inventors. Use irregular verbs in the past. Use the Past Perfect tense. Use the Present Perfect Continuous. And connect past events to the present.",
                welcome: "TTS: Hello, Time Travelers! It's Mr. D! Welcome to Inventions Across Time! Today, we are going to explore the amazing creations that changed our world. From the first airplane to the modern computer, we'll discover how they came to be. But to do that, we need to master time itself! We will learn how to use advanced past tenses to tell stories with precision. Are you ready to invent your future? Let's go!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "(Sound of a ticking clock and gears turning. Albert and Celine are in a science museum.)", 
            contextAudio: "audio/9-1-1/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "Wow, look at this old [airplane](tooltip:airplane)! The Wright Brothers [flew](tooltip:fly) it in 1903." 
                },
                { 
                    speaker: "Celine", 
                    text: "It looks so small! Technology [has been changing](tooltip:has-been-changing) so fast." 
                },
                { 
                    speaker: "Albert", 
                    text: "True. Before they invented it, people [had dreamed](tooltip:had-dreamed) of flying for centuries." 
                },
                { 
                    speaker: "Celine", 
                    text: "And look here. Alexander Graham Bell [invented](tooltip:invented) the telephone." 
                },
                { 
                    speaker: "Albert", 
                    text: "I [have been reading](tooltip:have-been-reading) about him. He [had worked](tooltip:had-worked) on it for years before it worked." 
                },
                { 
                    speaker: "Celine", 
                    text: "Now we have smartphones. Innovation never stops!" 
                },
                { 
                    speaker: "Albert", 
                    text: "[Have you seen](tooltip:have-you-seen) the new robot exhibit? Let's go!" 
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
                    title: "Irregular Verbs (Base-Past-Participle)",
                    audio: "TTS: Be, Was Were, Been. Become, Became, Become. Begin, Began, Begun. Break, Broke, Broken. Bring, Brought, Brought. Build, Built, Built. Buy, Bought, Bought. Choose, Chose, Chosen. Come, Came, Come. Cut, Cut, Cut. Do, Did, Done. Drink, Drank, Drunk. Drive, Drove, Driven. Eat, Ate, Eaten. Fall, Fell, Fallen. Find, Found, Found. Fly, Flew, Flown. Get, Got, Gotten. Give, Gave, Given. Go, Went, Gone. Have, Had, Had. Hear, Heard, Heard. Know, Knew, Known. Make, Made, Made. See, Saw, Seen.",
                    items: [
                        { term: "Be - Was/Were - Been", trans: "<small style='color:#0077b6'>Ser / Estar</small>" },
                        { term: "Become - Became - Become", trans: "<small style='color:#0077b6'>Tornar-se</small>" },
                        { term: "Begin - Began - Begun", trans: "<small style='color:#0077b6'>Começar</small>" },
                        { term: "Break - Broke - Broken", trans: "<small style='color:#0077b6'>Quebrar</small>" },
                        { term: "Bring - Brought - Brought", trans: "<small style='color:#0077b6'>Trazer</small>" },
                        { term: "Build - Built - Built", trans: "<small style='color:#0077b6'>Construir</small>" },
                        { term: "Buy - Bought - Bought", trans: "<small style='color:#0077b6'>Comprar</small>" },
                        { term: "Choose - Chose - Chosen", trans: "<small style='color:#0077b6'>Escolher</small>" },
                        { term: "Come - Came - Come", trans: "<small style='color:#0077b6'>Vir</small>" },
                        { term: "Cut - Cut - Cut", trans: "<small style='color:#0077b6'>Cortar</small>" },
                        { term: "Do - Did - Done", trans: "<small style='color:#0077b6'>Fazer</small>" },
                        { term: "Drink - Drank - Drunk", trans: "<small style='color:#0077b6'>Beber</small>" },
                        { term: "Drive - Drove - Driven", trans: "<small style='color:#0077b6'>Dirigir</small>" },
                        { term: "Eat - Ate - Eaten", trans: "<small style='color:#0077b6'>Comer</small>" },
                        { term: "Fall - Fell - Fallen", trans: "<small style='color:#0077b6'>Cair</small>" },
                        { term: "Find - Found - Found", trans: "<small style='color:#0077b6'>Encontrar</small>" },
                        { term: "Fly - Flew - Flown", trans: "<small style='color:#0077b6'>Voar</small>" },
                        { term: "Get - Got - Gotten/Got", trans: "<small style='color:#0077b6'>Pegar / Obter</small>" },
                        { term: "Give - Gave - Given", trans: "<small style='color:#0077b6'>Dar</small>" },
                        { term: "Go - Went - Gone", trans: "<small style='color:#0077b6'>Ir</small>" },
                        { term: "Have - Had - Had", trans: "<small style='color:#0077b6'>Ter</small>" },
                        { term: "Hear - Heard - Heard", trans: "<small style='color:#0077b6'>Ouvir</small>" },
                        { term: "Know - Knew - Known", trans: "<small style='color:#0077b6'>Saber / Conhecer</small>" },
                        { term: "Make - Made - Made", trans: "<small style='color:#0077b6'>Fazer (criar)</small>" },
                        { term: "See - Saw - Seen", trans: "<small style='color:#0077b6'>Ver</small>" }
                    ]
                },
                {
                    title: "Technology & Inventions",
                    audio: "TTS: Invention. Creator. AI models. Airplane. App. Blueprint. Code. Computer. Electricity. Equipment. Machine. Robot. Software. Technology. Tool. Universe.",
                    items: [
                        { term: "Invention", trans: "<small style='color:#0077b6'>Invenção</small>" },
                        { term: "Creator", trans: "<small style='color:#0077b6'>Criador(a)</small>" },
                        { term: "AI models", trans: "<small style='color:#0077b6'>Modelos de IA</small>" },
                        { term: "Airplane", trans: "<small style='color:#0077b6'>Avião</small>" },
                        { term: "App", trans: "<small style='color:#0077b6'>Aplicativo</small>" },
                        { term: "Blueprint", trans: "<small style='color:#0077b6'>Planta / Projeto</small>" },
                        { term: "Code", trans: "<small style='color:#0077b6'>Código</small>" },
                        { term: "Computer", trans: "<small style='color:#0077b6'>Computador</small>" },
                        { term: "Electricity", trans: "<small style='color:#0077b6'>Eletricidade</small>" },
                        { term: "Equipment", trans: "<small style='color:#0077b6'>Equipamento</small>" },
                        { term: "Machine", trans: "<small style='color:#0077b6'>Máquina</small>" },
                        { term: "Robot", trans: "<small style='color:#0077b6'>Robô</small>" },
                        { term: "Software", trans: "<small style='color:#0077b6'>Software / Programa</small>" },
                        { term: "Technology", trans: "<small style='color:#0077b6'>Tecnologia</small>" },
                        { term: "Tool", trans: "<small style='color:#0077b6'>Ferramenta</small>" },
                        { term: "Universe", trans: "<small style='color:#0077b6'>Universo</small>" }
                    ]
                },
                {
                    title: "Time Adverbs (Perfect Continuous)",
                    audio: "TTS: For. Since. All day. All week. How long.",
                    items: [
                        { term: "For", trans: "<small style='color:#0077b6'>Por (duração)</small>" },
                        { term: "Since", trans: "<small style='color:#0077b6'>Desde</small>" },
                        { term: "All day", trans: "<small style='color:#0077b6'>O dia todo</small>" },
                        { term: "All week", trans: "<small style='color:#0077b6'>A semana toda</small>" },
                        { term: "How long?", trans: "<small style='color:#0077b6'>Há quanto tempo?</small>" }
                    ]
                },
                {
                    title: "Idioms & Expressions",
                    audio: "TTS: A lightbulb moment. Reinvent the wheel. Ahead of one's time. It's not rocket science.",
                    items: [
                        { term: "A lightbulb moment", trans: "<small style='color:#0077b6'>Momento de inspiração</small>" },
                        { term: "Reinvent the wheel", trans: "<small style='color:#0077b6'>Reinventar a roda</small>" },
                        { term: "Ahead of one's time", trans: "<small style='color:#0077b6'>À frente do seu tempo</small>" },
                        { term: "It's not rocket science", trans: "<small style='color:#0077b6'>Não é bicho de sete cabeças (é simples)</small>" }
                    ]
                }
            ],

            // ======================================================
            // 2B: Context Examples (Grouped & Tabbed)
            // ======================================================
            exampleGroups: [
                {
                    title: "Irregular Verbs",
                    audio: "TTS: I was here yesterday. The caterpillar became a butterfly. Class began at 8. He broke the vase. She brought cake. They built a house. I bought a phone. He chose the red one. She came late. I cut the paper. I have done my homework. He drank all the water. She drove to work. We ate pizza yesterday. The leaves fell. I found my keys. The bird flew away. I got a new phone. He gave me a gift. We went to school. I had a good idea. I heard a noise. I knew the answer. She made a cake. I saw a movie.",
                    items: [
                        { term: "Be", sent: "I was here yesterday.", trans: "<span style='color:#0077b6'>Eu estive aqui ontem.</span>" },
                        { term: "Become", sent: "The caterpillar became a butterfly.", trans: "<span style='color:#0077b6'>A lagarta tornou-se uma borboleta.</span>" },
                        { term: "Begin", sent: "Class began at 8.", trans: "<span style='color:#0077b6'>A aula começou às 8.</span>" },
                        { term: "Break", sent: "He broke the vase.", trans: "<span style='color:#0077b6'>Ele quebrou o vaso.</span>" },
                        { term: "Bring", sent: "She brought cake.", trans: "<span style='color:#0077b6'>Ela trouxe bolo.</span>" },
                        { term: "Build", sent: "They built a house.", trans: "<span style='color:#0077b6'>Eles construíram uma casa.</span>" },
                        { term: "Buy", sent: "I bought a phone.", trans: "<span style='color:#0077b6'>Comprei um telefone.</span>" },
                        { term: "Choose", sent: "He chose the red one.", trans: "<span style='color:#0077b6'>Ele escolheu o vermelho.</span>" },
                        { term: "Come", sent: "She came late.", trans: "<span style='color:#0077b6'>Ela veio tarde.</span>" },
                        { term: "Cut", sent: "I cut the paper.", trans: "<span style='color:#0077b6'>Eu cortei o papel.</span>" },
                        { term: "Do", sent: "I have done my homework.", trans: "<span style='color:#0077b6'>Eu fiz minha lição de casa.</span>" },
                        { term: "Drink", sent: "He drank all the water.", trans: "<span style='color:#0077b6'>Ele bebeu toda a água.</span>" },
                        { term: "Drive", sent: "She drove to work.", trans: "<span style='color:#0077b6'>Ela dirigiu para o trabalho.</span>" },
                        { term: "Eat", sent: "We ate pizza yesterday.", trans: "<span style='color:#0077b6'>Nós comemos pizza ontem.</span>" },
                        { term: "Fall", sent: "The leaves fell.", trans: "<span style='color:#0077b6'>As folhas caíram.</span>" },
                        { term: "Find", sent: "I found my keys.", trans: "<span style='color:#0077b6'>Eu encontrei minhas chaves.</span>" },
                        { term: "Fly", sent: "The bird flew away.", trans: "<span style='color:#0077b6'>O pássaro voou.</span>" },
                        { term: "Get", sent: "I got a new phone.", trans: "<span style='color:#0077b6'>Eu ganhei/comprei um novo telefone.</span>" },
                        { term: "Give", sent: "He gave me a gift.", trans: "<span style='color:#0077b6'>Ele me deu um presente.</span>" },
                        { term: "Go", sent: "We went to school.", trans: "<span style='color:#0077b6'>Nós fomos para a escola.</span>" },
                        { term: "Have", sent: "I had a good idea.", trans: "<span style='color:#0077b6'>Eu tive uma boa ideia.</span>" },
                        { term: "Hear", sent: "I heard a noise.", trans: "<span style='color:#0077b6'>Eu ouvi um barulho.</span>" },
                        { term: "Know", sent: "I knew the answer.", trans: "<span style='color:#0077b6'>Eu sabia a resposta.</span>" },
                        { term: "Make", sent: "She made a cake.", trans: "<span style='color:#0077b6'>Ela fez um bolo.</span>" },
                        { term: "See", sent: "I saw a movie.", trans: "<span style='color:#0077b6'>Eu vi um filme.</span>" }
                    ]
                },
                {
                    title: "Technology & Inventions",
                    audio: "TTS: The wheel was a great invention. Who is the creator of this app? AI models learn fast. The airplane flies high. Download this app. Look at the blueprint. He writes computer code. I use a computer to work. Electricity powers our homes. The lab has new equipment. This machine is broken. The robot can walk. Update your software. Technology improves life. A hammer is a tool. The universe is huge.",
                    items: [
                        { term: "Invention", sent: "The wheel was a great invention.", trans: "<span style='color:#0077b6'>A roda foi uma grande invenção.</span>" },
                        { term: "Creator", sent: "Who is the creator of this app?", trans: "<span style='color:#0077b6'>Quem é o criador deste aplicativo?</span>" },
                        { term: "AI models", sent: "AI models learn fast.", trans: "<span style='color:#0077b6'>Modelos de IA aprendem rápido.</span>" },
                        { term: "Airplane", sent: "The airplane flies high.", trans: "<span style='color:#0077b6'>O avião voa alto.</span>" },
                        { term: "App", sent: "Download this app.", trans: "<span style='color:#0077b6'>Baixe este aplicativo.</span>" },
                        { term: "Blueprint", sent: "Look at the blueprint.", trans: "<span style='color:#0077b6'>Olhe para a planta/projeto.</span>" },
                        { term: "Code", sent: "He writes computer code.", trans: "<span style='color:#0077b6'>Ele escreve código de computador.</span>" },
                        { term: "Computer", sent: "I use a computer to work.", trans: "<span style='color:#0077b6'>Eu uso um computador para trabalhar.</span>" },
                        { term: "Electricity", sent: "Electricity powers our homes.", trans: "<span style='color:#0077b6'>A eletricidade alimenta nossas casas.</span>" },
                        { term: "Equipment", sent: "The lab has new equipment.", trans: "<span style='color:#0077b6'>O laboratório tem equipamentos novos.</span>" },
                        { term: "Machine", sent: "This machine is broken.", trans: "<span style='color:#0077b6'>Esta máquina está quebrada.</span>" },
                        { term: "Robot", sent: "The robot can walk.", trans: "<span style='color:#0077b6'>O robô consegue andar.</span>" },
                        { term: "Software", sent: "Update your software.", trans: "<span style='color:#0077b6'>Atualize seu software.</span>" },
                        { term: "Technology", sent: "Technology improves life.", trans: "<span style='color:#0077b6'>A tecnologia melhora a vida.</span>" },
                        { term: "Tool", sent: "A hammer is a tool.", trans: "<span style='color:#0077b6'>Um martelo é uma ferramenta.</span>" },
                        { term: "Universe", sent: "The universe is huge.", trans: "<span style='color:#0077b6'>O universo é imenso.</span>" }
                    ]
                },
                {
                    title: "Time Adverbs",
                    audio: "TTS: I have lived here for two years. I have been here since 8 AM. It rained all day. I worked all week. How long have you been waiting?",
                    items: [
                        { term: "For", sent: "I have lived here for two years.", trans: "<span style='color:#0077b6'>Eu moro aqui por dois anos.</span>" },
                        { term: "Since", sent: "I have been here since 8 AM.", trans: "<span style='color:#0077b6'>Estou aqui desde às 8 da manhã.</span>" },
                        { term: "All day", sent: "It rained all day.", trans: "<span style='color:#0077b6'>Choveu o dia todo.</span>" },
                        { term: "All week", sent: "I worked all week.", trans: "<span style='color:#0077b6'>Trabalhei a semana toda.</span>" },
                        { term: "How long?", sent: "How long have you been waiting?", trans: "<span style='color:#0077b6'>Há quanto tempo você está esperando?</span>" }
                    ]
                },
                {
                    title: "Idioms",
                    audio: "TTS: He had a lightbulb moment. Don't reinvent the wheel. Da Vinci was ahead of his time. Relax, it's not rocket science.",
                    items: [
                        { term: "Lightbulb moment", sent: "He had a lightbulb moment.", trans: "<span style='color:#0077b6'>Ele teve um momento de inspiração.</span>" },
                        { term: "Reinvent the wheel", sent: "Don't reinvent the wheel.", trans: "<span style='color:#0077b6'>Não reinvente a roda.</span>" },
                        { term: "Ahead of one's time", sent: "Da Vinci was ahead of his time.", trans: "<span style='color:#0077b6'>Da Vinci estava à frente do seu tempo.</span>" },
                        { term: "Not rocket science", sent: "Relax, it's not rocket science.", trans: "<span style='color:#0077b6'>Relaxe, não é bicho de sete cabeças.</span>" }
                    ]
                }
            ],

            // ======================================================
            // 2C: Practice Drills (30 MCQ Exercises)
            // ======================================================
            drills: [
                // --- Irregular Verbs (Forms) ---
                { 
                    type: "mcq", 
                    q: "Choose the Past Participle of 'Go':", 
                    options: [ {t: "Went", c: false}, {t: "Gone", c: true}, {t: "Goed", c: false}, {t: "Going", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the Simple Past of 'Buy':", 
                    options: [ {t: "Buyed", c: false}, {t: "Bought", c: true}, {t: "Brought", c: false}, {t: "Buying", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the Past Participle of 'Fly':", 
                    options: [ {t: "Flew", c: false}, {t: "Flown", c: true}, {t: "Flyed", c: false}, {t: "Flying", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the Simple Past of 'Build':", 
                    options: [ {t: "Builded", c: false}, {t: "Built", c: true}, {t: "Building", c: false}, {t: "Builder", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the Past Participle of 'Know':", 
                    options: [ {t: "Knew", c: false}, {t: "Known", c: true}, {t: "Knowed", c: false}, {t: "Knowing", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the Simple Past of 'See':", 
                    options: [ {t: "Seed", c: false}, {t: "Seen", c: false}, {t: "Saw", c: true}, {t: "Sees", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the Past Participle of 'Break':", 
                    options: [ {t: "Broke", c: false}, {t: "Broken", c: true}, {t: "Breaked", c: false}, {t: "Breaking", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the Simple Past of 'Eat':", 
                    options: [ {t: "Eaten", c: false}, {t: "Ate", c: true}, {t: "Eated", c: false}, {t: "Eating", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the Past Participle of 'Come':", 
                    options: [ {t: "Came", c: false}, {t: "Come", c: true}, {t: "Comed", c: false}, {t: "Coming", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the Simple Past of 'Begin':", 
                    options: [ {t: "Begun", c: false}, {t: "Began", c: true}, {t: "Beginned", c: false}, {t: "Beginned", c: false} ] 
                },

                // --- Technology & Inventions ---
                { 
                    type: "mcq", 
                    q: "A person who creates new things is an:", 
                    options: [ {t: "Actor", c: false}, {t: "Inventor", c: true}, {t: "Athlete", c: false}, {t: "Anchor", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "A detailed technical drawing or plan is a:", 
                    options: [ {t: "Code", c: false}, {t: "Blueprint", c: true}, {t: "Robot", c: false}, {t: "Tool", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Programs used by a computer are called:", 
                    options: [ {t: "Hardware", c: false}, {t: "Software", c: true}, {t: "Equipment", c: false}, {t: "Electricity", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "What do you use to type on a computer?", 
                    options: [ {t: "Screen", c: false}, {t: "Mouse", c: false}, {t: "Keyboard", c: true}, {t: "App", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "This powers our homes and lights.", 
                    options: [ {t: "Gravity", c: false}, {t: "Electricity", c: true}, {t: "Software", c: false}, {t: "Blueprint", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "A machine that can perform complex tasks automatically.", 
                    options: [ {t: "Robot", c: true}, {t: "Tool", c: false}, {t: "App", c: false}, {t: "Blueprint", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "A hammer is a type of...", 
                    options: [ {t: "Software", c: false}, {t: "App", c: false}, {t: "Tool", c: true}, {t: "Code", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Computer language used to create programs.", 
                    options: [ {t: "Blueprint", c: false}, {t: "Code", c: true}, {t: "Equipment", c: false}, {t: "Universe", c: false} ] 
                },

                // --- Time Adverbs & Idioms ---
                { 
                    type: "mcq", 
                    q: "I have lived here _______ 2010.", 
                    options: [ {t: "for", c: false}, {t: "since", c: true}, {t: "ago", c: false}, {t: "in", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "She has been working _______ two hours.", 
                    options: [ {t: "since", c: false}, {t: "for", c: true}, {t: "at", c: false}, {t: "on", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "_______ long have you been waiting?", 
                    options: [ {t: "What", c: false}, {t: "How", c: true}, {t: "When", c: false}, {t: "Where", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "It rained _______ day yesterday.", 
                    options: [ {t: "all", c: true}, {t: "for", c: false}, {t: "since", c: false}, {t: "every", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Idiom: 'It's easy. It's not _______.'", 
                    options: [ {t: "rocket science", c: true}, {t: "a lightbulb", c: false}, {t: "a wheel", c: false}, {t: "ahead of time", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Idiom: 'He had a sudden idea. A _______ moment.'", 
                    options: [ {t: "robot", c: false}, {t: "lightbulb", c: true}, {t: "wheel", c: false}, {t: "rocket", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Idiom: 'Don't _______ (waste time creating something that exists).'", 
                    options: [ {t: "break the ice", c: false}, {t: "reinvent the wheel", c: true}, {t: "miss the boat", c: false}, {t: "hit the road", c: false} ] 
                },

                // --- Mixed Verb Context ---
                { 
                    type: "mcq", 
                    q: "Complete: 'The Wright brothers _______ the first airplane.'", 
                    options: [ {t: "found", c: false}, {t: "flew", c: true}, {t: "drove", c: false}, {t: "swam", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: 'She _______ me a birthday gift.'", 
                    options: [ {t: "gave", c: true}, {t: "given", c: false}, {t: "gived", c: false}, {t: "give", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: 'I have _______ him for years.'", 
                    options: [ {t: "knew", c: false}, {t: "know", c: false}, {t: "known", c: true}, {t: "knowed", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: 'He _______ off his bike.'", 
                    options: [ {t: "fall", c: false}, {t: "fallen", c: false}, {t: "fell", c: true}, {t: "falled", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: 'They _______ the project yesterday.'", 
                    options: [ {t: "begun", c: false}, {t: "beginned", c: false}, {t: "began", c: true}, {t: "begin", c: false} ] 
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
                    title: "Simple Past (Review)",
                    audio: "TTS: We use the Simple Past for actions that started and finished at a specific time in the past. I invented a game. You saw the airplane. He built a robot. It flew high.",
                    explanation: "We use the Simple Past for actions that started and finished at a specific time in the past. We know 'when' it happened.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos o Passado Simples para ações que começaram e terminaram em um momento específico no passado.)</span>",
                    samples: [
                        { en: "I invented a new game yesterday.", pt: "<span style='color:#0077b6'>Eu inventei um jogo novo ontem.</span>" },
                        { en: "You saw the airplane.", pt: "<span style='color:#0077b6'>Você viu o avião.</span>" },
                        { en: "He built a robot.", pt: "<span style='color:#0077b6'>Ele construiu um robô.</span>" },
                        { en: "It flew high.", pt: "<span style='color:#0077b6'>Isso voou alto.</span>" }
                    ]
                },
                {
                    title: "Past Perfect (The Past of the Past)",
                    audio: "TTS: We use the Past Perfect to talk about an action that happened before another action in the past. Structure: Subject plus had plus Past Participle. I had finished the project. You had left when I arrived.",
                    explanation: "We use the Past Perfect to talk about an action that happened **before** another action in the past. It helps to order events.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos o Passado Perfeito para falar de uma ação que aconteceu antes de outra ação no passado.)</span>",
                    samples: [
                        { en: "I had finished the project before the deadline.", pt: "<span style='color:#0077b6'>Eu tinha terminado o projeto antes do prazo.</span>" },
                        { en: "You had left when I arrived.", pt: "<span style='color:#0077b6'>Você tinha saído quando eu cheguei.</span>" },
                        { en: "She had eaten dinner by 8 PM.", pt: "<span style='color:#0077b6'>Ela tinha jantado às 20h.</span>" },
                        { en: "They had already discovered the error.", pt: "<span style='color:#0077b6'>Eles já tinham descoberto o erro.</span>" }
                    ]
                },
                {
                    title: "Simple Past vs. Past Perfect",
                    audio: "TTS: When telling a story, we often mix these tenses. Action 1 is the Past Perfect. Action 2 is the Simple Past. When I arrived at the cinema, the movie had started.",
                    explanation: "When telling a story, we often mix these tenses.<br><b>Action 1 (Earlier):</b> Past Perfect (had done).<br><b>Action 2 (Later):</b> Simple Past (did).<br><br><span style='color:#0077b6; font-style:italic;'>(Ao contar uma história, frequentemente misturamos esses tempos. Ação 1 é o Passado Perfeito, Ação 2 é o Simples.)</span>",
                    samples: [
                        { en: "When I arrived (2), the movie had started (1).", pt: "<span style='color:#0077b6'>Quando eu cheguei, o filme tinha começado.</span>" },
                        { en: "She realized (2) that she had forgotten (1) her phone.", pt: "<span style='color:#0077b6'>Ela percebeu que tinha esquecido o telefone.</span>" }
                    ]
                },
                {
                    title: "Present Perfect Continuous",
                    audio: "TTS: We use this tense to emphasize the duration of an action that started in the past and continues to the present. Structure: Have or Has been plus verb ing. I have been working here for 10 years. She has been researching a cure.",
                    explanation: "We use this tense to emphasize the **duration** of an action that started in the past and continues to the present. It answers 'How long?'.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos este tempo para enfatizar a duração de uma ação que começou no passado e continua até o presente.)</span>",
                    samples: [
                        { en: "I have been working here for 10 years.", pt: "<span style='color:#0077b6'>Eu trabalho/tenho trabalhado aqui há 10 anos.</span>" },
                        { en: "You have been studying all day.", pt: "<span style='color:#0077b6'>Você tem estudado o dia todo.</span>" },
                        { en: "She has been researching a cure.", pt: "<span style='color:#0077b6'>Ela tem pesquisado uma cura.</span>" },
                        { en: "It has been raining since morning.", pt: "<span style='color:#0077b6'>Tem chovido desde de manhã.</span>" }
                    ]
                }
            ],

            // ======================================================
            // 3B: Natural Examples (Dialogues Grouped in Boxes)
            // ======================================================
            dialogueGroups: [
                {
                    title: "Dialogue 1: Simple Past vs. Past Perfect",
                    audio: "audio/9-1-1/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Why were you late for the presentation?", 
                            pt: "<span style='color:#0077b6'>Por que você estava atrasado para a apresentação?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Because I had missed the bus. By the time I got to the stop, it had already left.", 
                            pt: "<span style='color:#0077b6'>Porque eu tinha perdido o ônibus. Na hora que cheguei ao ponto, ele já tinha saído.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Present Perfect Continuous",
                    audio: "audio/9-1-1/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "You look tired, Celine. What have you been doing?", 
                            pt: "<span style='color:#0077b6'>Você parece cansada, Celine. O que você tem feito?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "I have been studying for the history test all day. I have been reading about the Industrial Revolution since 8 AM.", 
                            pt: "<span style='color:#0077b6'>Tenho estudado para a prova de história o dia todo. Estou lendo sobre a Revolução Industrial desde as 8 da manhã.</span>" 
                        }
                    ]
                }
            ],

            // ======================================================
            // 3C: Grammar Practice (30 MCQ Exercises)
            // ======================================================
            grammarDrills: [
                // --- Original Exercises (from PDF) ---
                {
                    type: "mcq",
                    q: "Past Perfect: 'When the police arrived, the thief _______ (escape).'",
                    options: [ {t: "escaped", c: false}, {t: "has escaped", c: false}, {t: "had escaped", c: true}, {t: "was escaping", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Mixed Tenses: 'I _______ (buy) the book because I _______ (hear) it was good.'",
                    options: [ {t: "bought / heard", c: false}, {t: "bought / had heard", c: true}, {t: "buy / had heard", c: false}, {t: "had bought / heard", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Present Perfect Continuous: 'She _______ (paint) her room all morning.'",
                    options: [ {t: "has painted", c: false}, {t: "is painting", c: false}, {t: "has been painting", c: true}, {t: "had been painting", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Duration Question: 'How long _______ (they/travel)?'",
                    options: [ {t: "have they been traveling", c: true}, {t: "did they travel", c: false}, {t: "do they travel", c: false}, {t: "are they traveling", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Structure: 'We had already eaten.' This sentence is in...",
                    options: [ {t: "Simple Past", c: false}, {t: "Present Perfect", c: false}, {t: "Past Perfect", c: true}, {t: "Past Continuous", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Context: 'Her eyes are red. She _______ (cry).'",
                    options: [ {t: "has been crying", c: true}, {t: "cries", c: false}, {t: "had cried", c: false}, {t: "cried", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Subject Nouns: '_______ (The inventors) have been working on this for years.'",
                    options: [ {t: "They", c: true}, {t: "We", c: false}, {t: "He", c: false}, {t: "It", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Time Markers: 'He has been sleeping _______ 2 PM.'",
                    options: [ {t: "for", c: false}, {t: "since", c: true}, {t: "ago", c: false}, {t: "in", c: false} ]
                },

                // --- Expanded Exercises (Past Perfect) ---
                {
                    type: "mcq",
                    q: "Past Perfect: 'She _______ (leave) before I arrived.'",
                    options: [ {t: "has left", c: false}, {t: "left", c: false}, {t: "had left", c: true}, {t: "leaves", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Past Perfect Negative: 'I _______ (not/finish) the test when the bell rang.'",
                    options: [ {t: "hadn't finished", c: true}, {t: "haven't finished", c: false}, {t: "didn't finish", c: false}, {t: "not finished", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Past Perfect: 'They _______ (never/see) a robot before that day.'",
                    options: [ {t: "have never seen", c: false}, {t: "had never seen", c: true}, {t: "didn't see", c: false}, {t: "never saw", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Timeline: 'I realized I _______ (forget) my keys.'",
                    options: [ {t: "forgot", c: false}, {t: "have forgotten", c: false}, {t: "had forgotten", c: true}, {t: "forget", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Structure: Past Perfect is formed by Subject + _______ + Past Participle.",
                    options: [ {t: "have", c: false}, {t: "has", c: false}, {t: "had", c: true}, {t: "was", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Mixed Tenses: 'The train _______ (leave) when we got to the station. We missed it.'",
                    options: [ {t: "left", c: false}, {t: "has left", c: false}, {t: "had left", c: true}, {t: "was leaving", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Past Perfect: 'He was hungry because he _______ (not/eat) anything.'",
                    options: [ {t: "didn't eat", c: false}, {t: "hadn't eaten", c: true}, {t: "hasn't eaten", c: false}, {t: "wasn't eating", c: false} ]
                },

                // --- Expanded Exercises (Present Perfect Continuous) ---
                {
                    type: "mcq",
                    q: "Pres. Perf. Cont.: 'We _______ (wait) for the bus for an hour.'",
                    options: [ {t: "are waiting", c: false}, {t: "have been waiting", c: true}, {t: "had waited", c: false}, {t: "wait", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Context: 'You look tired!' 'Yes, I _______ (run).'",
                    options: [ {t: "ran", c: false}, {t: "have been running", c: true}, {t: "had run", c: false}, {t: "am running", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Pres. Perf. Cont.: 'It _______ (rain) since last night.'",
                    options: [ {t: "is raining", c: false}, {t: "has been raining", c: true}, {t: "rained", c: false}, {t: "rains", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Duration: 'They _______ (learn) Spanish for five years.'",
                    options: [ {t: "learn", c: false}, {t: "are learning", c: false}, {t: "have been learning", c: true}, {t: "learned", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Structure: Pres. Perf. Cont. is: Have/Has + _______ + Verb-ing.",
                    options: [ {t: "had", c: false}, {t: "been", c: true}, {t: "be", c: false}, {t: "was", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Question: 'What _______ (you/do) lately?'",
                    options: [ {t: "have you been doing", c: true}, {t: "did you do", c: false}, {t: "are you doing", c: false}, {t: "had you done", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Pres. Perf. Cont.: 'I am wet because I _______ (walk) in the rain.'",
                    options: [ {t: "walked", c: false}, {t: "have been walking", c: true}, {t: "had walked", c: false}, {t: "walk", c: false} ]
                },

                // --- Expanded Exercises (Time Markers & Mixed) ---
                {
                    type: "mcq",
                    q: "Time Marker: 'I have been living here _______ 10 years.'",
                    options: [ {t: "since", c: false}, {t: "for", c: true}, {t: "ago", c: false}, {t: "during", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Time Marker: 'She has been working here _______ 2015.'",
                    options: [ {t: "for", c: false}, {t: "since", c: true}, {t: "at", c: false}, {t: "in", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Past Perfect: 'He felt sick because he _______ (eat) too much candy.'",
                    options: [ {t: "ate", c: false}, {t: "has eaten", c: false}, {t: "had eaten", c: true}, {t: "eats", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Mixed: 'Before I went to sleep, I _______ (lock) the door.'",
                    options: [ {t: "locked", c: false}, {t: "have locked", c: false}, {t: "had locked", c: true}, {t: "lock", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Time Marker: 'We have been studying _______ morning.'",
                    options: [ {t: "all", c: true}, {t: "every", c: false}, {t: "for", c: false}, {t: "in", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Sequence: First I _______ (finish) my work, then I went out.",
                    options: [ {t: "finish", c: false}, {t: "have finished", c: false}, {t: "had finished", c: true}, {t: "finishing", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Pres. Perf. Cont.: 'He _______ (play) video games all day.'",
                    options: [ {t: "has been playing", c: true}, {t: "played", c: false}, {t: "had played", c: false}, {t: "is playing", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Mixed: 'By the time we got there, the concert _______ (already/start).'",
                    options: [ {t: "started", c: false}, {t: "has already started", c: false}, {t: "had already started", c: true}, {t: "was starting", c: false} ]
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
                    text: "The train had already left.<br><small style='color:#0077b6'>(O trem já tinha partido.)</small>", 
                    audio: "TTS: The train had already left.", 
                    arrow: "↘" 
                },
                { 
                    text: "I have been working here for years.<br><small style='color:#0077b6'>(Eu trabalho aqui há anos.)</small>", 
                    audio: "TTS: I have been working here for years.", 
                    arrow: "↘" 
                },
                { 
                    text: "Who invented the telephone?<br><small style='color:#0077b6'>(Quem inventou o telefone?)</small>", 
                    audio: "TTS: Who invented the telephone?", 
                    arrow: "↘" 
                },
                { 
                    text: "She had finished the test when the bell rang.<br><small style='color:#0077b6'>(Ela tinha terminado a prova quando o sinal tocou.)</small>", 
                    audio: "TTS: She had finished the test when the bell rang.", 
                    arrow: "↘" 
                },
                { 
                    text: "How long have you been studying?<br><small style='color:#0077b6'>(Há quanto tempo você está estudando?)</small>", 
                    audio: "TTS: How long have you been studying?", 
                    arrow: "↗" 
                },
                { 
                    text: "They built the first airplane.<br><small style='color:#0077b6'>(Eles construíram o primeiro avião.)</small>", 
                    audio: "TTS: They built the first airplane.", 
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
                    instruction: "Listen to Albert talking about Thomas Edison. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre Thomas Edison. Digite as palavras que faltam.)</small>",
                    audio: "TTS: Thomas Edison was a great inventor. He had tried many times before he succeeded. He invented the lightbulb in 1879.",
                    text: "Thomas Edison was a great inventor. He [had tried] many times before he [succeeded]. He [invented] the lightbulb in 1879."
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation between Celine and Albert. Choose the correct option.<br><small style='color:#0077b6'>(Ouça a conversa entre Celine e Albert. Escolha a opção correta.)</small>",
                    audio: "audio/9-1-1/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: You look [tired | happy], Albert.", a: "tired" },
                        { q: "Albert: Yes. I [have been working | worked] on my science project all day.", a: "have been working" },
                        { q: "Celine: Have you finished it? <br> Albert: Not yet. I [had done | did] half of it when my computer crashed!", a: "had done" }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the sentence and choose the correct timeline.<br><small style='color:#0077b6'>(Ouça a frase e escolha a linha do tempo correta.)</small>",
                    audio: "TTS: When I arrived at the station, the bus had left.",
                    options: [
                        { t: "1. I arrived. 2. The bus left.", c: false },
                        { t: "1. The bus left. 2. I arrived.", c: true },
                        { t: "They happened at the same time.", c: false },
                        { t: "The bus didn't leave.", c: false }
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
                    title: "Narration: The Race for Flight",
                    audio: "TTS: For centuries, humans had dreamed of flying. Many inventors had tried to build flying machines, but they failed. Then, in 1903, the Wright Brothers changed history. They had been experimenting with gliders for years before they built the Flyer. On a cold December day, Orville Wright flew the plane for 12 seconds. It was a short flight, but it proved that humans could fly.",
                    body: "For centuries, humans had dreamed of flying. Many inventors had tried to build flying machines, but they failed. Then, in 1903, the Wright Brothers changed history. They had been experimenting with gliders for years before they built the \"Flyer\". On a cold December day, Orville Wright flew the plane for 12 seconds. It was a short flight, but it proved that humans could fly.",
                    questions: [
                        { 
                            q: "What had humans done for centuries?", 
                            options: [ 
                                {t: "Built cars", c: false}, 
                                {t: "Dreamed of flying", c: true}, 
                                {t: "Ignored the sky", c: false}, 
                                {t: "Flown in space", c: false}
                            ] 
                        },
                        { 
                            q: "What had the Wright Brothers been doing before 1903?", 
                            options: [ 
                                {t: "Sleeping", c: false}, 
                                {t: "Experimenting with gliders", c: true}, 
                                {t: "Building boats", c: false}, 
                                {t: "Driving cars", c: false}
                            ] 
                        },
                        { 
                            q: "How long was the first flight?", 
                            options: [ 
                                {t: "12 minutes", c: false}, 
                                {t: "12 hours", c: false}, 
                                {t: "12 seconds", c: true}, 
                                {t: "12 days", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: The Mystery Book",
                    audio: "audio/9-1-1/p6_text2.mp3",
                    body: "<b>Celine:</b> Albert, have you returned that library book?<br><b>Albert:</b> Oh no! I forgot. I have been reading it for two weeks.<br><b>Celine:</b> Is it good?<br><b>Albert:</b> Yes. It's about a scientist who invented a time machine.<br><b>Celine:</b> Cool. How does it end?<br><b>Albert:</b> I don't know yet. The scientist had just traveled to the future when the machine broke. I haven't finished the last chapter.",
                    questions: [
                        { 
                            q: "How long has Albert been reading the book?", 
                            options: [ 
                                {t: "For two days", c: false}, 
                                {t: "For two weeks", c: true}, 
                                {t: "Since yesterday", c: false}, 
                                {t: "For a year", c: false}
                            ] 
                        },
                        { 
                            q: "What did the scientist invent?", 
                            options: [ 
                                {t: "A robot", c: false}, 
                                {t: "A time machine", c: true}, 
                                {t: "A car", c: false}, 
                                {t: "A phone", c: false}
                            ] 
                        },
                        { 
                            q: "What happened in the book?", 
                            options: [ 
                                {t: "The machine broke.", c: true}, 
                                {t: "The scientist died.", c: false}, 
                                {t: "The machine flew.", c: false}, 
                                {t: "The scientist went home.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: The Evolution of Communication",
                    audio: "TTS: Communication has changed a lot. Before we had smartphones, people had used letters to communicate for centuries. Then, Alexander Graham Bell invented the telephone. It was a revolution. People could talk to each other from long distances. Now, we have been using the internet for a few decades. We can send messages instantly. It is amazing to see how far we have come.",
                    body: "Communication has changed a lot. Before we had smartphones, people had used letters to communicate for centuries. Then, Alexander Graham Bell invented the telephone. It was a revolution. People could talk to each other from long distances. Now, we have been using the internet for a few decades. We can send messages instantly. It is amazing to see how far we have come.",
                    questions: [
                        { 
                            q: "What did people use before phones?", 
                            options: [ 
                                {t: "Computers", c: false}, 
                                {t: "Letters", c: true}, 
                                {t: "Tablets", c: false}, 
                                {t: "Radios", c: false}
                            ] 
                        },
                        { 
                            q: "Who invented the telephone?", 
                            options: [ 
                                {t: "Steve Jobs", c: false}, 
                                {t: "Alexander Graham Bell", c: true}, 
                                {t: "The Wright Brothers", c: false}, 
                                {t: "Thomas Edison", c: false}
                            ] 
                        },
                        { 
                            q: "What have we been using for a few decades?", 
                            options: [ 
                                {t: "The internet", c: true}, 
                                {t: "Smoke signals", c: false}, 
                                {t: "Pigeons", c: false}, 
                                {t: "Telegrams", c: false}
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
                // Drill 1: Matching (Verbs -> Past Participle)
                {
                    type: "matching",
                    instruction: "Match the verb with its past participle.<br><small style='color:#0077b6'>(Combine o verbo com seu particípio passado.)</small>",
                    pairs: [
                        { left: "Fly", right: "Flown", val: "1" },
                        { left: "Build", right: "Built", val: "2" },
                        { left: "Know", right: "Known", val: "3" },
                        { left: "Write", right: "Written", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Unscramble)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order (Past Perfect).<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>",
                    sentence: "had / left / She / arrived / I / when / .",
                    correct: "She had left when I arrived ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "already / They / eaten / had / .",
                    correct: "They had already eaten ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order (Present Perfect Continuous).",
                    sentence: "raining / been / It / has / hours / for / .",
                    correct: "It has been raining for hours ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order (Question).",
                    sentence: "you / seen / Had / movie / that / before / ?",
                    correct: "Had you seen that movie before ?"
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Had", c: false },
                        { t: "Has", c: false },
                        { t: "Have", c: false },
                        { t: "Did", c: true } // Simple Past auxiliary, others are Perfect tenses
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Built", c: false },
                        { t: "Invented", c: false },
                        { t: "Created", c: false },
                        { t: "Destroyed", c: true } // Opposite meaning
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Since", c: false },
                        { t: "For", c: false },
                        { t: "Lately", c: false },
                        { t: "Ago", c: true } // Used with Simple Past, others with Perfect tenses
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Robot", c: false },
                        { t: "AI", c: false },
                        { t: "Software", c: false },
                        { t: "Banana", c: true } // Food, others are technology
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.<br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "I have been waiting [for | since | had | been] 20 minutes.", a: "for" },
                        { q: "She has been working here [since | for | had | been] 2010.", a: "since" },
                        { q: "When I woke up, the sun [had | for | since | been] already risen.", a: "had" },
                        { q: "What have you [been | had | for | since] doing?", a: "been" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn! Write about an invention you use every day.<br><br><small style='color:#0077b6'>(Ilha de Idiomas: Agora é a sua vez! Escreva sobre uma invenção que você usa todos os dias.)</small>",
            example: "\"I use a smartphone every day. I have been using it since I was 12. Before smartphones, people had used landline phones and letters to communicate.\"<br><br><small style='color:#0077b6'>(\"Eu uso um smartphone todo dia. Eu o uso desde que tinha 12 anos. Antes dos smartphones, as pessoas usavam telefones fixos e cartas para se comunicar.\")</small>",
            prompts: [
                "What is the invention? (I use...) <br><small style='color:#0077b6'>(Qual é a invenção?)</small>",
                "How long have you been using it? (I have been using it for/since...) <br><small style='color:#0077b6'>(Há quanto tempo você a usa?)</small>",
                "What had people done before this invention? (People had used...) <br><small style='color:#0077b6'>(O que as pessoas faziam antes dessa invenção?)</small>"
            ]
        },

        
                // ======================================================
                // STEP 9: FLASHCARDS (Part 1: Irregular Verbs A-L)
                // ======================================================
        {
            title: "Wrap it up",
            items: [
                { 
                    term: "Be - Was/Were - Been", 
                    definition: "To exist, occur, or take place.", 
                    defTrans: "<small style='color:#0077b6'>Ser / Estar</small>",
                    example: "I have been to London.", 
                    audioFront: "TTS: Be, Was Were, Been",
                    audioBack: "TTS: I have been to London." 
                },
                { 
                    term: "Become - Became - Become", 
                    definition: "To begin to be; to turn into.", 
                    defTrans: "<small style='color:#0077b6'>Tornar-se</small>",
                    example: "He became a scientist.", 
                    audioFront: "TTS: Become, Became, Become",
                    audioBack: "TTS: He became a scientist." 
                },
                { 
                    term: "Begin - Began - Begun", 
                    definition: "To start; to perform the first part of an action.", 
                    defTrans: "<small style='color:#0077b6'>Começar</small>",
                    example: "The rain began suddenly.", 
                    audioFront: "TTS: Begin, Began, Begun",
                    audioBack: "TTS: The rain began suddenly." 
                },
                { 
                    term: "Break - Broke - Broken", 
                    definition: "To separate into pieces as a result of a blow or shock.", 
                    defTrans: "<small style='color:#0077b6'>Quebrar</small>",
                    example: "She broke her glasses.", 
                    audioFront: "TTS: Break, Broke, Broken",
                    audioBack: "TTS: She broke her glasses." 
                },
                { 
                    term: "Bring - Brought - Brought", 
                    definition: "To take or go with (someone or something) to a place.", 
                    defTrans: "<small style='color:#0077b6'>Trazer</small>",
                    example: "He brought his laptop.", 
                    audioFront: "TTS: Bring, Brought, Brought",
                    audioBack: "TTS: He brought his laptop." 
                },
                { 
                    term: "Build - Built - Built", 
                    definition: "To construct by putting parts or material together.", 
                    defTrans: "<small style='color:#0077b6'>Construir</small>",
                    example: "They built a robot.", 
                    audioFront: "TTS: Build, Built, Built",
                    audioBack: "TTS: They built a robot." 
                },
                { 
                    term: "Buy - Bought - Bought", 
                    definition: "To obtain in exchange for payment.", 
                    defTrans: "<small style='color:#0077b6'>Comprar</small>",
                    example: "We bought a new car.", 
                    audioFront: "TTS: Buy, Bought, Bought",
                    audioBack: "TTS: We bought a new car." 
                },
                { 
                    term: "Choose - Chose - Chosen", 
                    definition: "To pick out or select as being the best.", 
                    defTrans: "<small style='color:#0077b6'>Escolher</small>",
                    example: "I chose the red one.", 
                    audioFront: "TTS: Choose, Chose, Chosen",
                    audioBack: "TTS: I chose the red one." 
                },
                { 
                    term: "Come - Came - Come", 
                    definition: "To move or travel toward or into a place.", 
                    defTrans: "<small style='color:#0077b6'>Vir</small>",
                    example: "She came to the party.", 
                    audioFront: "TTS: Come, Came, Come",
                    audioBack: "TTS: She came to the party." 
                },
                { 
                    term: "Cost - Cost - Cost", 
                    definition: "To require the payment of (a specified sum of money).", 
                    defTrans: "<small style='color:#0077b6'>Custar</small>",
                    example: "It cost ten dollars.", 
                    audioFront: "TTS: Cost, Cost, Cost",
                    audioBack: "TTS: It cost ten dollars." 
                },
                { 
                    term: "Cut - Cut - Cut", 
                    definition: "To make an opening or incision with a sharp tool.", 
                    defTrans: "<small style='color:#0077b6'>Cortar</small>",
                    example: "I cut the paper.", 
                    audioFront: "TTS: Cut, Cut, Cut",
                    audioBack: "TTS: I cut the paper." 
                },
                { 
                    term: "Do - Did - Done", 
                    definition: "To perform an action.", 
                    defTrans: "<small style='color:#0077b6'>Fazer</small>",
                    example: "I have done my homework.", 
                    audioFront: "TTS: Do, Did, Done",
                    audioBack: "TTS: I have done my homework." 
                },
                { 
                    term: "Draw - Drew - Drawn", 
                    definition: "To produce a picture or diagram by making lines.", 
                    defTrans: "<small style='color:#0077b6'>Desenhar</small>",
                    example: "He drew a picture.", 
                    audioFront: "TTS: Draw, Drew, Drawn",
                    audioBack: "TTS: He drew a picture." 
                },
                { 
                    term: "Drink - Drank - Drunk", 
                    definition: "To take liquid into the mouth and swallow.", 
                    defTrans: "<small style='color:#0077b6'>Beber</small>",
                    example: "He drank all the water.", 
                    audioFront: "TTS: Drink, Drank, Drunk",
                    audioBack: "TTS: He drank all the water." 
                },
                { 
                    term: "Drive - Drove - Driven", 
                    definition: "To operate and control a motor vehicle.", 
                    defTrans: "<small style='color:#0077b6'>Dirigir</small>",
                    example: "She drove to work.", 
                    audioFront: "TTS: Drive, Drove, Driven",
                    audioBack: "TTS: She drove to work." 
                },
                { 
                    term: "Eat - Ate - Eaten", 
                    definition: "To put food into the mouth and swallow it.", 
                    defTrans: "<small style='color:#0077b6'>Comer</small>",
                    example: "We ate pizza yesterday.", 
                    audioFront: "TTS: Eat, Ate, Eaten",
                    audioBack: "TTS: We ate pizza yesterday." 
                },
                { 
                    term: "Fall - Fell - Fallen", 
                    definition: "To move downward rapidly and freely.", 
                    defTrans: "<small style='color:#0077b6'>Cair</small>",
                    example: "The leaves fell down.", 
                    audioFront: "TTS: Fall, Fell, Fallen",
                    audioBack: "TTS: The leaves fell down." 
                },
                { 
                    term: "Feel - Felt - Felt", 
                    definition: "To experience an emotion or sensation.", 
                    defTrans: "<small style='color:#0077b6'>Sentir</small>",
                    example: "I felt happy.", 
                    audioFront: "TTS: Feel, Felt, Felt",
                    audioBack: "TTS: I felt happy." 
                },
                { 
                    term: "Find - Found - Found", 
                    definition: "To discover or perceive by chance or unexpectedly.", 
                    defTrans: "<small style='color:#0077b6'>Encontrar</small>",
                    example: "I found my keys.", 
                    audioFront: "TTS: Find, Found, Found",
                    audioBack: "TTS: I found my keys." 
                },
                { 
                    term: "Fly - Flew - Flown", 
                    definition: "To move through the air using wings or aircraft.", 
                    defTrans: "<small style='color:#0077b6'>Voar</small>",
                    example: "The bird flew away.", 
                    audioFront: "TTS: Fly, Flew, Flown",
                    audioBack: "TTS: The bird flew away." 
                },
                { 
                    term: "Forget - Forgot - Forgotten", 
                    definition: "To fail to remember.", 
                    defTrans: "<small style='color:#0077b6'>Esquecer</small>",
                    example: "She forgot her bag.", 
                    audioFront: "TTS: Forget, Forgot, Forgotten",
                    audioBack: "TTS: She forgot her bag." 
                },
                { 
                    term: "Get - Got - Gotten", 
                    definition: "To come to have or hold something; receive.", 
                    defTrans: "<small style='color:#0077b6'>Pegar / Obter / Conseguir</small>",
                    example: "I got a new phone.", 
                    audioFront: "TTS: Get, Got, Gotten",
                    audioBack: "TTS: I got a new phone." 
                },
                { 
                    term: "Give - Gave - Given", 
                    definition: "To freely transfer possession to someone.", 
                    defTrans: "<small style='color:#0077b6'>Dar</small>",
                    example: "He gave me a gift.", 
                    audioFront: "TTS: Give, Gave, Given",
                    audioBack: "TTS: He gave me a gift." 
                },
                { 
                    term: "Go - Went - Gone", 
                    definition: "To move from one place to another.", 
                    defTrans: "<small style='color:#0077b6'>Ir</small>",
                    example: "They went home.", 
                    audioFront: "TTS: Go, Went, Gone",
                    audioBack: "TTS: They went home." 
                },
                { 
                    term: "Have - Had - Had", 
                    definition: "To possess, own, or hold.", 
                    defTrans: "<small style='color:#0077b6'>Ter</small>",
                    example: "I had a good idea.", 
                    audioFront: "TTS: Have, Had, Had",
                    audioBack: "TTS: I had a good idea." 
                },
                { 
                    term: "Hear - Heard - Heard", 
                    definition: "To perceive with the ear the sound made by something.", 
                    defTrans: "<small style='color:#0077b6'>Ouvir</small>",
                    example: "I heard a noise.", 
                    audioFront: "TTS: Hear, Heard, Heard",
                    audioBack: "TTS: I heard a noise." 
                },
                { 
                    term: "Know - Knew - Known", 
                    definition: "To be aware of through observation or information.", 
                    defTrans: "<small style='color:#0077b6'>Saber / Conhecer</small>",
                    example: "I knew the answer.", 
                    audioFront: "TTS: Know, Knew, Known",
                    audioBack: "TTS: I knew the answer." 
                },
                { 
                    term: "Leave - Left - Left", 
                    definition: "To go away from.", 
                    defTrans: "<small style='color:#0077b6'>Sair / Deixar</small>",
                    example: "He left the room.", 
                    audioFront: "TTS: Leave, Left, Left",
                    audioBack: "TTS: He left the room." 
                },
                { 
                    term: "Lose - Lost - Lost", 
                    definition: "To be deprived of or cease to have.", 
                    defTrans: "<small style='color:#0077b6'>Perder</small>",
                    example: "I lost the game.", 
                    audioFront: "TTS: Lose, Lost, Lost",
                    audioBack: "TTS: I lost the game." 
                },
                    // ======================================================
                    // STEP 9: FLASHCARDS (Part 2: Irregular Verbs M-W)
                   // ======================================================
                    // Append these items to the "items" array
        
                { 
                    term: "Make - Made - Made", 
                    definition: "To form by putting parts together; create.", 
                    defTrans: "<small style='color:#0077b6'>Fazer (criar)</small>",
                    example: "She made a cake.", 
                    audioFront: "TTS: Make, Made, Made",
                    audioBack: "TTS: She made a cake." 
                },
                { 
                    term: "Meet - Met - Met", 
                    definition: "To come into the presence of someone.", 
                    defTrans: "<small style='color:#0077b6'>Conhecer / Encontrar</small>",
                    example: "We met yesterday.", 
                    audioFront: "TTS: Meet, Met, Met",
                    audioBack: "TTS: We met yesterday." 
                },
                { 
                    term: "Pay - Paid - Paid", 
                    definition: "To give money for goods or services.", 
                    defTrans: "<small style='color:#0077b6'>Pagar</small>",
                    example: "I paid the bill.", 
                    audioFront: "TTS: Pay, Paid, Paid",
                    audioBack: "TTS: I paid the bill." 
                },
                { 
                    term: "Put - Put - Put", 
                    definition: "To move something to a particular position.", 
                    defTrans: "<small style='color:#0077b6'>Colocar</small>",
                    example: "He put it on the table.", 
                    audioFront: "TTS: Put, Put, Put",
                    audioBack: "TTS: He put it on the table." 
                },
                { 
                    term: "Read - Read - Read", 
                    definition: "To look at and comprehend written matter.", 
                    defTrans: "<small style='color:#0077b6'>Ler</small>",
                    example: "I read that book.", 
                    audioFront: "TTS: Read, Read, Read",
                    audioBack: "TTS: I read that book." 
                },
                { 
                    term: "Run - Ran - Run", 
                    definition: "To move at a speed faster than walking.", 
                    defTrans: "<small style='color:#0077b6'>Correr</small>",
                    example: "They ran fast.", 
                    audioFront: "TTS: Run, Ran, Run",
                    audioBack: "TTS: They ran fast." 
                },
                { 
                    term: "Say - Said - Said", 
                    definition: "To utter words to convey information.", 
                    defTrans: "<small style='color:#0077b6'>Dizer</small>",
                    example: "She said hello.", 
                    audioFront: "TTS: Say, Said, Said",
                    audioBack: "TTS: She said hello." 
                },
                { 
                    term: "See - Saw - Seen", 
                    definition: "To perceive with the eyes.", 
                    defTrans: "<small style='color:#0077b6'>Ver</small>",
                    example: "I saw a movie.", 
                    audioFront: "TTS: See, Saw, Seen",
                    audioBack: "TTS: I saw a movie." 
                },
                { 
                    term: "Sell - Sold - Sold", 
                    definition: "To give something in exchange for money.", 
                    defTrans: "<small style='color:#0077b6'>Vender</small>",
                    example: "He sold his car.", 
                    audioFront: "TTS: Sell, Sold, Sold",
                    audioBack: "TTS: He sold his car." 
                },
                { 
                    term: "Send - Sent - Sent", 
                    definition: "To cause to go to a destination.", 
                    defTrans: "<small style='color:#0077b6'>Enviar</small>",
                    example: "I sent an email.", 
                    audioFront: "TTS: Send, Sent, Sent",
                    audioBack: "TTS: I sent an email." 
                },
                { 
                    term: "Sing - Sang - Sung", 
                    definition: "To make musical sounds with the voice.", 
                    defTrans: "<small style='color:#0077b6'>Cantar</small>",
                    example: "She sang a song.", 
                    audioFront: "TTS: Sing, Sang, Sung",
                    audioBack: "TTS: She sang a song." 
                },
                { 
                    term: "Sit - Sat - Sat", 
                    definition: "To adopt a resting position supported by the buttocks.", 
                    defTrans: "<small style='color:#0077b6'>Sentar</small>",
                    example: "We sat down.", 
                    audioFront: "TTS: Sit, Sat, Sat",
                    audioBack: "TTS: We sat down." 
                },
                { 
                    term: "Sleep - Slept - Slept", 
                    definition: "To rest with eyes closed.", 
                    defTrans: "<small style='color:#0077b6'>Dormir</small>",
                    example: "The baby slept well.", 
                    audioFront: "TTS: Sleep, Slept, Slept",
                    audioBack: "TTS: The baby slept well." 
                },
                { 
                    term: "Speak - Spoke - Spoken", 
                    definition: "To say something in order to convey information.", 
                    defTrans: "<small style='color:#0077b6'>Falar</small>",
                    example: "He spoke English.", 
                    audioFront: "TTS: Speak, Spoke, Spoken",
                    audioBack: "TTS: He spoke English." 
                },
                { 
                    term: "Spend - Spent - Spent", 
                    definition: "To pay out money; to pass time.", 
                    defTrans: "<small style='color:#0077b6'>Gastar / Passar tempo</small>",
                    example: "I spent all my money.", 
                    audioFront: "TTS: Spend, Spent, Spent",
                    audioBack: "TTS: I spent all my money." 
                },
                { 
                    term: "Stand - Stood - Stood", 
                    definition: "To be in an upright position.", 
                    defTrans: "<small style='color:#0077b6'>Ficar em pé</small>",
                    example: "He stood up.", 
                    audioFront: "TTS: Stand, Stood, Stood",
                    audioBack: "TTS: He stood up." 
                },
                { 
                    term: "Swim - Swam - Swum", 
                    definition: "To propel the body through water.", 
                    defTrans: "<small style='color:#0077b6'>Nadar</small>",
                    example: "We swam in the ocean.", 
                    audioFront: "TTS: Swim, Swam, Swum",
                    audioBack: "TTS: We swam in the ocean." 
                },
                { 
                    term: "Take - Took - Taken", 
                    definition: "To lay hold of something with one's hands.", 
                    defTrans: "<small style='color:#0077b6'>Pegar / Levar</small>",
                    example: "She took the bus.", 
                    audioFront: "TTS: Take, Took, Taken",
                    audioBack: "TTS: She took the bus." 
                },
                { 
                    term: "Teach - Taught - Taught", 
                    definition: "To show or explain to someone how to do something.", 
                    defTrans: "<small style='color:#0077b6'>Ensinar</small>",
                    example: "He taught math.", 
                    audioFront: "TTS: Teach, Taught, Taught",
                    audioBack: "TTS: He taught math." 
                },
                { 
                    term: "Tell - Told - Told", 
                    definition: "To communicate information.", 
                    defTrans: "<small style='color:#0077b6'>Contar / Dizer</small>",
                    example: "She told a story.", 
                    audioFront: "TTS: Tell, Told, Told",
                    audioBack: "TTS: She told a story." 
                },
                { 
                    term: "Think - Thought - Thought", 
                    definition: "To have a particular opinion or idea.", 
                    defTrans: "<small style='color:#0077b6'>Pensar / Achar</small>",
                    example: "I thought about it.", 
                    audioFront: "TTS: Think, Thought, Thought",
                    audioBack: "TTS: I thought about it." 
                },
                { 
                    term: "Understand - Understood", 
                    definition: "To perceive the intended meaning.", 
                    defTrans: "<small style='color:#0077b6'>Entender</small>",
                    example: "I understood the lesson.", 
                    audioFront: "TTS: Understand, Understood, Understood",
                    audioBack: "TTS: I understood the lesson." 
                },
                { 
                    term: "Wear - Wore - Worn", 
                    definition: "To have something on one's body as clothing.", 
                    defTrans: "<small style='color:#0077b6'>Vestir / Usar</small>",
                    example: "He wore a hat.", 
                    audioFront: "TTS: Wear, Wore, Worn",
                    audioBack: "TTS: He wore a hat." 
                },
                { 
                    term: "Win - Won - Won", 
                    definition: "To be successful or victorious.", 
                    defTrans: "<small style='color:#0077b6'>Vencer / Ganhar</small>",
                    example: "We won the game.", 
                    audioFront: "TTS: Win, Won, Won",
                    audioBack: "TTS: We won the game." 
                },
                { 
                    term: "Write - Wrote - Written", 
                    definition: "To mark letters or words on a surface.", 
                    defTrans: "<small style='color:#0077b6'>Escrever</small>",
                    example: "She wrote a letter.", 
                    audioFront: "TTS: Write, Wrote, Written",
                    audioBack: "TTS: She wrote a letter." 
                },
                    // ======================================================
                    // STEP 9: FLASHCARDS (Part 3: Tech, Idioms, Grammar)
                    // ======================================================
                    // Append these items to the "items" array in Step 9
        
                // --- Technology & Inventions ---
                { 
                    term: "Invention", 
                    definition: "A unique or novel device, method, or process.", 
                    defTrans: "<small style='color:#0077b6'>Invenção</small>",
                    example: "The wheel was a great invention.", 
                    audioFront: "TTS: Invention",
                    audioBack: "TTS: The wheel was a great invention." 
                },
                { 
                    term: "Creator", 
                    definition: "A person or thing that brings something into existence.", 
                    defTrans: "<small style='color:#0077b6'>Criador(a)</small>",
                    example: "Who is the creator of this app?", 
                    audioFront: "TTS: Creator",
                    audioBack: "TTS: Who is the creator of this app?" 
                },
                { 
                    term: "AI models", 
                    definition: "Artificial Intelligence programs designed to perform tasks.", 
                    defTrans: "<small style='color:#0077b6'>Modelos de IA</small>",
                    example: "AI models learn fast.", 
                    audioFront: "TTS: AI models",
                    audioBack: "TTS: A I models learn fast." 
                },
                { 
                    term: "Airplane", 
                    definition: "A powered flying vehicle with fixed wings.", 
                    defTrans: "<small style='color:#0077b6'>Avião</small>",
                    example: "The airplane flies high.", 
                    audioFront: "TTS: Airplane",
                    audioBack: "TTS: The airplane flies high." 
                },
                { 
                    term: "App", 
                    definition: "An application downloaded to a mobile device.", 
                    defTrans: "<small style='color:#0077b6'>Aplicativo</small>",
                    example: "Download this app.", 
                    audioFront: "TTS: App",
                    audioBack: "TTS: Download this app." 
                },
                { 
                    term: "Blueprint", 
                    definition: "A design plan or technical drawing.", 
                    defTrans: "<small style='color:#0077b6'>Planta / Projeto</small>",
                    example: "Look at the blueprint.", 
                    audioFront: "TTS: Blueprint",
                    audioBack: "TTS: Look at the blueprint." 
                },
                { 
                    term: "Code", 
                    definition: "Program instructions.", 
                    defTrans: "<small style='color:#0077b6'>Código</small>",
                    example: "He writes computer code.", 
                    audioFront: "TTS: Code",
                    audioBack: "TTS: He writes computer code." 
                },
                { 
                    term: "Computer", 
                    definition: "An electronic device for storing and processing data.", 
                    defTrans: "<small style='color:#0077b6'>Computador</small>",
                    example: "I use a computer to work.", 
                    audioFront: "TTS: Computer",
                    audioBack: "TTS: I use a computer to work." 
                },
                { 
                    term: "Electricity", 
                    definition: "Energy resulting from charged particles.", 
                    defTrans: "<small style='color:#0077b6'>Eletricidade</small>",
                    example: "Electricity powers our homes.", 
                    audioFront: "TTS: Electricity",
                    audioBack: "TTS: Electricity powers our homes." 
                },
                { 
                    term: "Equipment", 
                    definition: "The necessary items for a particular purpose.", 
                    defTrans: "<small style='color:#0077b6'>Equipamento</small>",
                    example: "The lab has new equipment.", 
                    audioFront: "TTS: Equipment",
                    audioBack: "TTS: The lab has new equipment." 
                },
                { 
                    term: "Machine", 
                    definition: "An apparatus using mechanical power.", 
                    defTrans: "<small style='color:#0077b6'>Máquina</small>",
                    example: "This machine is broken.", 
                    audioFront: "TTS: Machine",
                    audioBack: "TTS: This machine is broken." 
                },
                { 
                    term: "Robot", 
                    definition: "A machine capable of carrying out complex actions.", 
                    defTrans: "<small style='color:#0077b6'>Robô</small>",
                    example: "The robot can walk.", 
                    audioFront: "TTS: Robot",
                    audioBack: "TTS: The robot can walk." 
                },
                { 
                    term: "Software", 
                    definition: "Programs and operating information used by a computer.", 
                    defTrans: "<small style='color:#0077b6'>Software / Programa</small>",
                    example: "Update your software.", 
                    audioFront: "TTS: Software",
                    audioBack: "TTS: Update your software." 
                },
                { 
                    term: "Technology", 
                    definition: "The application of scientific knowledge.", 
                    defTrans: "<small style='color:#0077b6'>Tecnologia</small>",
                    example: "Technology improves life.", 
                    audioFront: "TTS: Technology",
                    audioBack: "TTS: Technology improves life." 
                },
                { 
                    term: "Tool", 
                    definition: "A device used to carry out a particular function.", 
                    defTrans: "<small style='color:#0077b6'>Ferramenta</small>",
                    example: "A hammer is a tool.", 
                    audioFront: "TTS: Tool",
                    audioBack: "TTS: A hammer is a tool." 
                },
                { 
                    term: "Universe", 
                    definition: "All existing matter and space.", 
                    defTrans: "<small style='color:#0077b6'>Universo</small>",
                    example: "The universe is huge.", 
                    audioFront: "TTS: Universe",
                    audioBack: "TTS: The universe is huge." 
                },

                // --- Time Adverbs (Perfect Continuous) ---
                { 
                    term: "For (Duration)", 
                    definition: "Preposition used to indicate a period of time.", 
                    defTrans: "<small style='color:#0077b6'>Por (duração)</small>",
                    example: "I have lived here for two years.", 
                    audioFront: "TTS: For, Duration",
                    audioBack: "TTS: I have lived here for two years." 
                },
                { 
                    term: "Since (Point in time)", 
                    definition: "Preposition used to indicate a starting point.", 
                    defTrans: "<small style='color:#0077b6'>Desde</small>",
                    example: "I have been here since 8 AM.", 
                    audioFront: "TTS: Since, Point in time",
                    audioBack: "TTS: I have been here since 8 A M." 
                },
                { 
                    term: "All day", 
                    definition: "Throughout the entire day.", 
                    defTrans: "<small style='color:#0077b6'>O dia todo</small>",
                    example: "It rained all day.", 
                    audioFront: "TTS: All day",
                    audioBack: "TTS: It rained all day." 
                },
                { 
                    term: "All week", 
                    definition: "Throughout the entire week.", 
                    defTrans: "<small style='color:#0077b6'>A semana toda</small>",
                    example: "I worked all week.", 
                    audioFront: "TTS: All week",
                    audioBack: "TTS: I worked all week." 
                },
                { 
                    term: "How long?", 
                    definition: "Question used to ask about duration.", 
                    defTrans: "<small style='color:#0077b6'>Há quanto tempo?</small>",
                    example: "How long have you been waiting?", 
                    audioFront: "TTS: How long?",
                    audioBack: "TTS: How long have you been waiting?" 
                },

                // --- Idioms ---
                { 
                    term: "Lightbulb moment", 
                    definition: "A moment of sudden inspiration.", 
                    defTrans: "<small style='color:#0077b6'>Momento de inspiração</small>",
                    example: "He had a lightbulb moment.", 
                    audioFront: "TTS: Lightbulb moment",
                    audioBack: "TTS: He had a lightbulb moment." 
                },
                { 
                    term: "Reinvent the wheel", 
                    definition: "To waste time creating something that already exists.", 
                    defTrans: "<small style='color:#0077b6'>Reinventar a roda</small>",
                    example: "Don't reinvent the wheel.", 
                    audioFront: "TTS: Reinvent the wheel",
                    audioBack: "TTS: Don't reinvent the wheel." 
                },
                { 
                    term: "Ahead of one's time", 
                    definition: "Too advanced to be understood by contemporaries.", 
                    defTrans: "<small style='color:#0077b6'>À frente do seu tempo</small>",
                    example: "Da Vinci was ahead of his time.", 
                    audioFront: "TTS: Ahead of one's time",
                    audioBack: "TTS: Da Vinci was ahead of his time." 
                },
                { 
                    term: "It's not rocket science", 
                    definition: "Used to say that something is simple.", 
                    defTrans: "<small style='color:#0077b6'>Não é bicho de sete cabeças</small>",
                    example: "Relax, it's not rocket science.", 
                    audioFront: "TTS: It's not rocket science",
                    audioBack: "TTS: Relax, it's not rocket science." 
                },

                // --- Grammar Points ---
                { 
                    term: "Simple Past", 
                    definition: "Verb tense used for actions completed in the past.", 
                    defTrans: "<small style='color:#0077b6'>Passado Simples</small>",
                    example: "I finished the work yesterday.", 
                    audioFront: "TTS: Simple Past",
                    audioBack: "TTS: I finished the work yesterday." 
                },
                { 
                    term: "Past Perfect", 
                    definition: "Verb tense for an action completed before another past action.", 
                    defTrans: "<small style='color:#0077b6'>Passado Perfeito</small>",
                    example: "She had left when I arrived.", 
                    audioFront: "TTS: Past Perfect",
                    audioBack: "TTS: She had left when I arrived." 
                },
                { 
                    term: "Present Perfect Continuous", 
                    definition: "Verb tense for an action that started in the past and continues.", 
                    defTrans: "<small style='color:#0077b6'>Presente Perfeito Contínuo</small>",
                    example: "I have been studying all day.", 
                    audioFront: "TTS: Present Perfect Continuous",
                    audioBack: "TTS: I have been studying all day." 
                }
            ] // Closes items array
        } // Closes Step 9 object
    ], // Closes steps array

    // ======================================================
    // GLOSSARY (Part 16: Context & Technology)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "airplane", 
            definition: "A powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.", 
            translation: "Avião" 
        },
        { 
            topic: "Context", 
            term: "fly", 
            definition: "To move through the air under control.", 
            translation: "Voar" 
        },
        { 
            topic: "Context", 
            term: "has-been-changing", 
            definition: "Present Perfect Continuous: An action that started in the past and is still happening.", 
            translation: "Tem mudado / Vem mudando" 
        },
        { 
            topic: "Context", 
            term: "had-dreamed", 
            definition: "Past Perfect: An action that happened before another action in the past.", 
            translation: "Tinha sonhado" 
        },
        { 
            topic: "Context", 
            term: "invented", 
            definition: "Simple Past: Created or designed something that did not exist before.", 
            translation: "Inventou" 
        },
        { 
            topic: "Context", 
            term: "have-been-reading", 
            definition: "Present Perfect Continuous: To have spent time looking at and understanding written matter.", 
            translation: "Tenho lido / Venho lendo" 
        },
        { 
            topic: "Context", 
            term: "had-worked", 
            definition: "Past Perfect: To have performed tasks or activities before a specific time.", 
            translation: "Tinha trabalhado" 
        },
        { 
            topic: "Context", 
            term: "have-you-seen", 
            definition: "Present Perfect: A question asking if someone perceived something with their eyes at an unspecified time.", 
            translation: "Você viu?" 
        },

        // --- TOPIC 2: TECHNOLOGY & INVENTIONS ---
        { 
            topic: "Technology", 
            term: "Invention", 
            definition: "A unique or novel device, method, composition, or process.", 
            translation: "Invenção" 
        },
        { 
            topic: "Technology", 
            term: "Creator", 
            definition: "A person or thing that brings something into existence.", 
            translation: "Criador(a)" 
        },
        { 
            topic: "Technology", 
            term: "AI models", 
            definition: "Artificial Intelligence programs designed to perform specific tasks.", 
            translation: "Modelos de IA" 
        },
        { 
            topic: "Technology", 
            term: "App", 
            definition: "An application, especially as downloaded by a user to a mobile device.", 
            translation: "Aplicativo" 
        },
        { 
            topic: "Technology", 
            term: "Blueprint", 
            definition: "A design plan or other technical drawing.", 
            translation: "Planta / Projeto" 
        },
        { 
            topic: "Technology", 
            term: "Code", 
            definition: "Program instructions.", 
            translation: "Código" 
        },
        { 
            topic: "Technology", 
            term: "Computer", 
            definition: "An electronic device for storing and processing data.", 
            translation: "Computador" 
        },
        { 
            topic: "Technology", 
            term: "Electricity", 
            definition: "A form of energy resulting from the existence of charged particles.", 
            translation: "Eletricidade" 
        },
        { 
            topic: "Technology", 
            term: "Equipment", 
            definition: "The necessary items for a particular purpose.", 
            translation: "Equipamento" 
        },
        { 
            topic: "Technology", 
            term: "Machine", 
            definition: "An apparatus using mechanical power and having several parts.", 
            translation: "Máquina" 
        },
        { 
            topic: "Technology", 
            term: "Robot", 
            definition: "A machine capable of carrying out a complex series of actions automatically.", 
            translation: "Robô" 
        },
        { 
            topic: "Technology", 
            term: "Software", 
            definition: "The programs and other operating information used by a computer.", 
            translation: "Software" 
        },
        { 
            topic: "Technology", 
            term: "Tool", 
            definition: "A device or implement, especially one held in the hand, used to carry out a function.", 
            translation: "Ferramenta" 
        },
        { 
            topic: "Technology", 
            term: "Universe", 
            definition: "All existing matter and space considered as a whole.", 
            translation: "Universo" 
        },
        // --- TOPIC 3: IRREGULAR VERBS (A - G) ---
        { 
            topic: "Irregular Verbs", 
            term: "be", 
            definition: "To exist, occur, or take place.", 
            translation: "Ser / Estar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "become", 
            definition: "To begin to be; to turn into.", 
            translation: "Tornar-se" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "begin", 
            definition: "To start; to perform the first part of an action.", 
            translation: "Começar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "break", 
            definition: "To separate into pieces as a result of a blow, shock, or strain.", 
            translation: "Quebrar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "bring", 
            definition: "To take or go with (someone or something) to a place.", 
            translation: "Trazer" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "build", 
            definition: "To construct (something, typically something large) by putting parts or material together.", 
            translation: "Construir" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "buy", 
            definition: "To obtain in exchange for payment.", 
            translation: "Comprar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "choose", 
            definition: "To pick out or select (someone or something) as being the best or most appropriate.", 
            translation: "Escolher" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "come", 
            definition: "To move or travel toward or into a place thought of as near or familiar to the speaker.", 
            translation: "Vir" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "cut", 
            definition: "To make an opening, incision, or wound in (something) with a sharp tool or object.", 
            translation: "Cortar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "do", 
            definition: "To perform an action.", 
            translation: "Fazer" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "drink", 
            definition: "To take (a liquid) into the mouth and swallow.", 
            translation: "Beber" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "drive", 
            definition: "To operate and control the direction and speed of a motor vehicle.", 
            translation: "Dirigir" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "eat", 
            definition: "To put (food) into the mouth and chew and swallow it.", 
            translation: "Comer" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "fall", 
            definition: "To move downward, typically rapidly and freely without control, from a higher to a lower level.", 
            translation: "Cair" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "find", 
            definition: "To discover or perceive by chance or unexpectedly.", 
            translation: "Encontrar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "fly", 
            definition: "To move through the air using wings or an aircraft.", 
            translation: "Voar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "get", 
            definition: "To come to have or hold (something); receive.", 
            translation: "Pegar / Obter / Conseguir" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "give", 
            definition: "To freely transfer the possession of something to someone.", 
            translation: "Dar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "go", 
            definition: "To move from one place to another; travel.", 
            translation: "Ir" 
        },
         // --- TOPIC 3: IRREGULAR VERBS (H - S) ---
        { 
            topic: "Irregular Verbs", 
            term: "have", 
            definition: "To possess, own, or hold.", 
            translation: "Ter" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "hear", 
            definition: "To perceive with the ear the sound made by someone or something.", 
            translation: "Ouvir" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "know", 
            definition: "To be aware of through observation, inquiry, or information.", 
            translation: "Saber / Conhecer" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "leave", 
            definition: "To go away from (a place or person).", 
            translation: "Sair / Deixar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "lose", 
            definition: "To be deprived of or cease to have or retain.", 
            translation: "Perder" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "make", 
            definition: "To form by putting parts together or combining substances; create.", 
            translation: "Fazer (criar)" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "meet", 
            definition: "To come into the presence or company of (someone) by chance or arrangement.", 
            translation: "Conhecer / Encontrar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "pay", 
            definition: "To give money in exchange for goods or services.", 
            translation: "Pagar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "put", 
            definition: "To move (something) to a particular position.", 
            translation: "Colocar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "read", 
            definition: "To look at and comprehend the meaning of (written or printed matter).", 
            translation: "Ler" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "run", 
            definition: "To move at a speed faster than a walk, never having both feet on the ground at once.", 
            translation: "Correr" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "say", 
            definition: "To utter words so as to convey information, an opinion, a feeling, or an instruction.", 
            translation: "Dizer" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "see", 
            definition: "To perceive with the eyes; discern visually.", 
            translation: "Ver" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "sell", 
            definition: "To give or hand over (something) in exchange for money.", 
            translation: "Vender" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "send", 
            definition: "To cause to go or be taken to a particular destination.", 
            translation: "Enviar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "sing", 
            definition: "To make musical sounds with the voice, especially a tune with words.", 
            translation: "Cantar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "sit", 
            definition: "To adopt or be in a position in which one's weight is supported by one's buttocks rather than one's feet.", 
            translation: "Sentar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "sleep", 
            definition: "To rest with the eyes closed and the mind and body inactive.", 
            translation: "Dormir" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "speak", 
            definition: "To say something in order to convey information or express a language.", 
            translation: "Falar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "spend", 
            definition: "To pay out (money) in buying or hiring goods or services.", 
            translation: "Gastar / Passar tempo" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "stand", 
            definition: "To have or maintain an upright position, supported by one's feet.", 
            translation: "Ficar em pé" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "swim", 
            definition: "To propel the body through water using the limbs.", 
            translation: "Nadar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "take", 
            definition: "To lay hold of (something) with one's hands; reach for and hold.", 
            translation: "Pegar / Levar" 
        },
        // --- TOPIC 3: IRREGULAR VERBS (T - W) ---
        { 
            topic: "Irregular Verbs", 
            term: "teach", 
            definition: "To show or explain to someone how to do something.", 
            translation: "Ensinar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "tell", 
            definition: "To communicate information, facts, or news to someone in spoken or written words.", 
            translation: "Contar / Dizer" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "think", 
            definition: "To have a particular opinion, belief, or idea about someone or something.", 
            translation: "Pensar / Achar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "understand", 
            definition: "To perceive the intended meaning of words, a language, or a speaker.", 
            translation: "Entender" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "wear", 
            definition: "To have something on one's body as clothing, decoration, or protection.", 
            translation: "Vestir / Usar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "win", 
            definition: "To be successful or victorious in a contest or conflict.", 
            translation: "Vencer / Ganhar" 
        },
        { 
            topic: "Irregular Verbs", 
            term: "write", 
            definition: "To mark letters, words, or other symbols on a surface.", 
            translation: "Escrever" 
        },

        // --- TOPIC 4: TIME ADVERBS & IDIOMS ---
        { 
            topic: "Time Adverbs & Idioms", 
            term: "for", 
            definition: "Preposition used to indicate duration.", 
            translation: "Por (duração)" 
        },
        { 
            topic: "Time Adverbs & Idioms", 
            term: "since", 
            definition: "Preposition used to indicate a starting point in time.", 
            translation: "Desde" 
        },
        { 
            topic: "Time Adverbs & Idioms", 
            term: "all-day", 
            definition: "Throughout the entire day.", 
            translation: "O dia todo" 
        },
        { 
            topic: "Time Adverbs & Idioms", 
            term: "all-week", 
            definition: "Throughout the entire week.", 
            translation: "A semana toda" 
        },
        { 
            topic: "Time Adverbs & Idioms", 
            term: "how-long", 
            definition: "Question used to ask about duration.", 
            translation: "Há quanto tempo?" 
        },
        { 
            topic: "Time Adverbs & Idioms", 
            term: "lightbulb-moment", 
            definition: "A moment of sudden inspiration or realization.", 
            translation: "Momento de inspiração" 
        },
        { 
            topic: "Time Adverbs & Idioms", 
            term: "reinvent-the-wheel", 
            definition: "To waste time creating something that already exists.", 
            translation: "Reinventar a roda" 
        },
        { 
            topic: "Time Adverbs & Idioms", 
            term: "ahead-of-one's-time", 
            definition: "Having ideas or attitudes that are too advanced to be acceptable or understood by contemporaries.", 
            translation: "À frente do seu tempo" 
        },
        { 
            topic: "Time Adverbs & Idioms", 
            term: "it's-not-rocket-science", 
            definition: "Used to say that something is not difficult to do or understand.", 
            translation: "Não é bicho de sete cabeças (é simples)" 
        },

        // --- TOPIC 5: GRAMMAR POINTS ---
        { 
            topic: "Grammar Points", 
            term: "simple-past", 
            definition: "Verb tense used for actions completed in the past at a specific time.", 
            translation: "Passado Simples" 
        },
        { 
            topic: "Grammar Points", 
            term: "past-perfect", 
            definition: "Verb tense used to express an action that was completed before another action in the past (had + past participle).", 
            translation: "Passado Perfeito" 
        },
        { 
            topic: "Grammar Points", 
            term: "present-perfect-continuous", 
            definition: "Verb tense used to express an action that started in the past and continues to the present, emphasizing duration (have/has + been + verb-ing).", 
            translation: "Presente Perfeito Contínuo" 
        }
    ] // Closes glossary array
}); // Closes initLesson object