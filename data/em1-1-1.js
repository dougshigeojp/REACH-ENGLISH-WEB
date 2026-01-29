/**
 * REACH English - LESSON DATA TEMPLATE
 * 1. Rename this file to match your lesson ID (e.g., "6-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em1-1-1", 
    grade: "High School 1st Grade",       
    bimester: "1",   
    chapter: "1",    
    chapterTitle: "English Connecting the World", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Understand why English is a global language.<br>• Use Subject, Object, Possessive, and Reflexive pronouns correctly.<br>• Use \"Wh-\" words with \"-ever\" (whoever, whatever, etc.).<br>• Ask questions about degree using \"How + Adjective\".<br>• Connect ideas using Cause and Consequence linking words.",
            welcome: "Hello, my friend! I'm Mr. D!<br>Welcome to High School! Today, we are exploring how English became such a powerful language around the world. We’re going to learn about the different types of pronouns (there are many!), how to use advanced \"wh-\" words to be more general, and how to connect our ideas logically with linking words. We’ll also discuss the reasons why learning English connects you to the future. Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Understand why English is a global language. Use Subject, Object, Possessive, and Reflexive pronouns correctly. Use Wh- words with -ever. Ask questions about degree using How plus Adjective. Connect ideas using Cause and Consequence linking words.",
                welcome: "TTS: Hello, my friend! I'm Mr. D! Welcome to High School! Today, we are exploring how English became such a powerful language around the world. We’re going to learn about the different types of pronouns, how to use advanced wh- words to be more general, and how to connect our ideas logically with linking words. We’ll also discuss the reasons why learning English connects you to the future. Let's get started!"
            }
        },

// ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context) - Character Fix
        // ======================================================
        {
            title: "What’s up today?",
            context: "Mrs. Canales and Celine are talking in the classroom about their future plans and the role of English in the world.", 
            contextAudio: "audio/em1-1-1/step1.mp3",
            dialogue: [
                { 
                    speaker: "Mrs. Canales", 
                    text: "Hello, class! Today we are discussing [career](tooltip:career) paths. Celine, [how important is](tooltip:how-important-is) English for your future?" 
                },
                { 
                    speaker: "Celine", 
                    text: "[In my opinion](tooltip:in-my-opinion), it is essential. [Whatever](tooltip:whatever) I decide to do, I will need it. I want to work in a global [company](tooltip:company)." 
                },
                { 
                    speaker: "Mrs. Canales", 
                    text: "[That makes sense](tooltip:that-makes-sense). English is the [language](tooltip:language) of [communication](tooltip:communication) worldwide. [Wherever](tooltip:wherever) you go, you find someone who speaks it." 
                },
                { 
                    speaker: "Celine", 
                    text: "Exactly. And [owing to](tooltip:owing-to) its [influence](tooltip:influence), it connects cultures. I [taught myself](tooltip:taught-myself) to code using English tutorials." 
                },
                { 
                    speaker: "Mrs. Canales", 
                    text: "[Whoever](tooltip:whoever) creates technology uses English. [Consequently](tooltip:consequently), if you want to [improve](tooltip:improve) your skills, you need to [invest](tooltip:invest) in learning it." 
                },
                { 
                    speaker: "Celine", 
                    text: "You [have a point](tooltip:have-a-point). [Therefore](tooltip:therefore), let's [practice](tooltip:practice) our [speech](tooltip:speech) today!" 
                }
            ]
        },

// ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
        // ======================================================
        {
            title: "Say the word",
audio2b: "TTS: I agree with your opinion. We must consider all options. Let's discuss the project. Can you explain the rule? I feel happy today. Did you hear the news? I know the answer. We learn English at school. I like pop music. She loves her family. Teachers motivate students. I need help. I prefer coffee. He reads books every day. They speak Spanish. You must study hard. The gift will surprise him. Can we talk later? Tell me a story. I think it's a good idea. I want a pizza. We welcome new students. He works in an office. She is a doctor. He wants to become a pilot. I will buy a car. Choose the correct answer. Come here, please. Technology connects us. Artists create beauty. Decide what you want. He did his homework. Let's explore the city. Don't be afraid to fail. I can't find my keys. He can fix the computer. Follow the instructions. Please give me a pen. Let's go home. Plants grow in the sun. I have a question. Can you help me? My leg hurts. Practice to improve. Prices increase every year. Invest in your future. I will invite my friends. She likes to paint. We practice English. Use your imagination. Whoever calls, tell them I'm busy. Do whatever you like. Choose whichever color you prefer. I will go wherever you go. Call me whenever you can. You can dress however you want. The flight was delayed owing to bad weather. The match was postponed due to the soaked pitch. He couldn't come because of a prior appointment. Since it was raining, we stayed indoors. As I was feeling unwell, I decided to stay home. The company invested poorly; as a consequence, they faced difficulties. The team trained hard; as a result, they won the championship. The storm was severe; consequently, trees were uprooted. The evidence was clear; thus, the jury found him guilty. She missed the bus; therefore, she was late. I was hungry, so I made a sandwich.",
            
            subPages: [
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],

            // 2A: Vocabulary Lists
            areas: [
                {
                    title: "Verbs (Communication & Mental)",
                    audio: "TTS: Agree. Consider. Discuss. Explain. Feel. Hear. Know. Learn. Like. Love. Motivate. Need. Prefer. Read. Speak. Study. Surprise. Talk. Tell. Think. Want. Welcome. Work.",
                    items: [
                        { term: "Agree", trans: "Concordar" },
                        { term: "Consider", trans: "Considerar" },
                        { term: "Discuss", trans: "Discutir / Debater" },
                        { term: "Explain", trans: "Explicar" },
                        { term: "Feel", trans: "Sentir" },
                        { term: "Hear", trans: "Ouvir" },
                        { term: "Know", trans: "Saber / Conhecer" },
                        { term: "Learn", trans: "Aprender" },
                        { term: "Like", trans: "Gostar" },
                        { term: "Love", trans: "Amar" },
                        { term: "Motivate", trans: "Motivar" },
                        { term: "Need", trans: "Precisar" },
                        { term: "Prefer", trans: "Preferir" },
                        { term: "Read", trans: "Ler" },
                        { term: "Speak", trans: "Falar" },
                        { term: "Study", trans: "Estudar" },
                        { term: "Surprise", trans: "Surpreender" },
                        { term: "Talk", trans: "Conversar" },
                        { term: "Tell", trans: "Contar / Dizer" },
                        { term: "Think", trans: "Pensar" },
                        { term: "Want", trans: "Querer" },
                        { term: "Welcome", trans: "Receber / Dar as boas-vindas" },
                        { term: "Work", trans: "Trabalhar" }
                    ]
                },
                {
                    title: "Verbs (Action & Change)",
                    audio: "TTS: Be. Become. Buy. Choose. Come. Connect. Create. Decide. Did. Explore. Fail. Find. Fix. Follow. Give. Go. Grow. Have. Help. Hurt. Improve. Increase. Invest. Invite. Paint. Practice. Use.",
                    items: [
                        { term: "Be", trans: "Ser / Estar" },
                        { term: "Become", trans: "Tornar-se" },
                        { term: "Buy", trans: "Comprar" },
                        { term: "Choose", trans: "Escolher" },
                        { term: "Come", trans: "Vir" },
                        { term: "Connect", trans: "Conectar" },
                        { term: "Create", trans: "Criar" },
                        { term: "Decide", trans: "Decidir" },
                        { term: "Did", trans: "Fez (Passado de Do)" },
                        { term: "Explore", trans: "Explorar" },
                        { term: "Fail", trans: "Falhar / Reprovar" },
                        { term: "Find", trans: "Encontrar" },
                        { term: "Fix", trans: "Consertar" },
                        { term: "Follow", trans: "Seguir" },
                        { term: "Give", trans: "Dar" },
                        { term: "Go", trans: "Ir" },
                        { term: "Grow", trans: "Crescer" },
                        { term: "Have", trans: "Ter" },
                        { term: "Help", trans: "Ajudar" },
                        { term: "Hurt", trans: "Machucar" },
                        { term: "Improve", trans: "Melhorar" },
                        { term: "Increase", trans: "Aumentar" },
                        { term: "Invest", trans: "Investir" },
                        { term: "Invite", trans: "Convidar" },
                        { term: "Paint", trans: "Pintar" },
                        { term: "Practice", trans: "Praticar" },
                        { term: "Use", trans: "Usar" }
                    ]
                },
                {
                    title: "Vocabularies (Language & Work)",
                    audio: "TTS: Communication. English. Language. Pronoun. Speech. Word. Writing. Career. Company. Conference. Course. Exercise. Student. Topic.",
                    items: [
                        { term: "Communication", trans: "Comunicação" },
                        { term: "English", trans: "Inglês" },
                        { term: "Language", trans: "Língua / Idioma" },
                        { term: "Pronoun", trans: "Pronome" },
                        { term: "Speech", trans: "Discurso / Fala" },
                        { term: "Word", trans: "Palavra" },
                        { term: "Writing", trans: "Escrita" },
                        { term: "Career", trans: "Carreira" },
                        { term: "Company", trans: "Empresa" },
                        { term: "Conference", trans: "Conferência" },
                        { term: "Course", trans: "Curso" },
                        { term: "Exercise", trans: "Exercício" },
                        { term: "Student", trans: "Estudante" },
                        { term: "Topic", trans: "Tópico / Assunto" }
                    ]
                },
                {
                    title: "Vocabularies (Ideas & Concepts)",
                    audio: "TTS: Content. Culture. Evidence. Future. Idea. Influence. Life. Opinion. Path. Plan. Popularity. Pretext. Reason. Role. Technology. Time.",
                    items: [
                        { term: "Content", trans: "Conteúdo" },
                        { term: "Culture", trans: "Cultura" },
                        { term: "Evidence", trans: "Evidência" },
                        { term: "Future", trans: "Futuro" },
                        { term: "Idea", trans: "Ideia" },
                        { term: "Influence", trans: "Influência" },
                        { term: "Life", trans: "Vida" },
                        { term: "Opinion", trans: "Opinião" },
                        { term: "Path", trans: "Caminho" },
                        { term: "Plan", trans: "Plano" },
                        { term: "Popularity", trans: "Popularidade" },
                        { term: "Pretext", trans: "Pretexto" },
                        { term: "Reason", trans: "Razão / Motivo" },
                        { term: "Role", trans: "Papel (função)" },
                        { term: "Technology", trans: "Tecnologia" },
                        { term: "Time", trans: "Tempo" }
                    ]
                },
                {
                    title: "General Nouns (Objects & Places)",
                    audio: "TTS: Book. Burger. Costume. Gift. House. Pen. Pitch. Place. Sandwich. Storm. Trade. Tree. Weather. World.",
                    items: [
                        { term: "Book", trans: "Livro" },
                        { term: "Burger", trans: "Hambúrguer" },
                        { term: "Costume", trans: "Fantasia" },
                        { term: "Gift", trans: "Presente" },
                        { term: "House", trans: "Casa" },
                        { term: "Pen", trans: "Caneta" },
                        { term: "Pitch", trans: "Campo (de futebol)" },
                        { term: "Place", trans: "Lugar" },
                        { term: "Sandwich", trans: "Sanduíche" },
                        { term: "Storm", trans: "Tempestade" },
                        { term: "Trade", trans: "Comércio" },
                        { term: "Tree", trans: "Árvore" },
                        { term: "Weather", trans: "Clima / Tempo" },
                        { term: "World", trans: "Mundo" }
                    ]
                },
                {
                    title: "Wh- Words with -ever",
                    audio: "TTS: Whoever. Whatever. Whichever. Wherever. Whenever. However.",
                    items: [
                        { term: "Whoever", trans: "Quem quer que seja" },
                        { term: "Whatever", trans: "O que quer que seja" },
                        { term: "Whichever", trans: "Qualquer um (que seja)" },
                        { term: "Wherever", trans: "Onde quer que seja" },
                        { term: "Whenever", trans: "Quando quer que seja" },
                        { term: "However", trans: "Como quer que seja / De qualquer maneira" }
                    ]
                },
                {
                    title: "Linking Words",
                    audio: "TTS: Owing to. Due to. Because of. Since. As. As a consequence. As a result. Consequently. Thus. Therefore. So.",
                    items: [
                        { term: "Owing to", trans: "Devido a" },
                        { term: "Due to", trans: "Devido a" },
                        { term: "Because of", trans: "Por causa de" },
                        { term: "Since", trans: "Já que / Desde que" },
                        { term: "As", trans: "Como / Já que" },
                        { term: "As a consequence", trans: "Como consequência" },
                        { term: "As a result", trans: "Como resultado" },
                        { term: "Consequently", trans: "Consequentemente" },
                        { term: "Thus", trans: "Assim / Desta forma" },
                        { term: "Therefore", trans: "Portanto" },
                        { term: "So", trans: "Então" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: That makes sense. In my opinion. In conclusion. Thanks to. How important is...?. How useful is...?. By ourselves / by myself. Tell me more. Have a point. Field of study. A lot of people.",
                    items: [
                        { term: "That makes sense", trans: "Isso faz sentido" },
                        { term: "In my opinion", trans: "Na minha opinião" },
                        { term: "In conclusion", trans: "Em conclusão" },
                        { term: "Thanks to", trans: "Graças a" },
                        { term: "How important is...?", trans: "Quão importante é...?" },
                        { term: "How useful is...?", trans: "Quão útil é...?" },
                        { term: "By ourselves / by myself", trans: "Sozinhos / Sozinho" },
                        { term: "Tell me more", trans: "Conte-me mais" },
                        { term: "Have a point", trans: "Ter razão / Ter um ponto" },
                        { term: "Field of study", trans: "Área de estudo" },
                        { term: "A lot of people", trans: "Muitas pessoas" }
                    ]
                }
            ],
// 2B: Context Examples (Grouped)
            exampleGroups: [
                {
                    title: "Verbs (Comm & Mental)",
                    audio: "TTS: I agree with your opinion. We must consider all options. Let's discuss the project. Can you explain the rule? I feel happy today. Did you hear the news? I know the answer. We learn English at school. I like pop music. She loves her family. Teachers motivate students. I need help. I prefer coffee. He reads books every day. They speak Spanish. You must study hard. The gift will surprise him. Can we talk later? Tell me a story. I think it's a good idea. I want a pizza. We welcome new students. He works in an office.",
                    items: [
                        { term: "Agree", sent: "I agree with your opinion.", trans: "<span style='color:#0077b6'>Eu concordo com sua opinião.</span>" },
                        { term: "Consider", sent: "We must consider all options.", trans: "<span style='color:#0077b6'>Devemos considerar todas as opções.</span>" },
                        { term: "Discuss", sent: "Let's discuss the project.", trans: "<span style='color:#0077b6'>Vamos discutir o projeto.</span>" },
                        { term: "Explain", sent: "Can you explain the rule?", trans: "<span style='color:#0077b6'>Você pode explicar a regra?</span>" },
                        { term: "Feel", sent: "I feel happy today.", trans: "<span style='color:#0077b6'>Eu me sinto feliz hoje.</span>" },
                        { term: "Hear", sent: "Did you hear the news?", trans: "<span style='color:#0077b6'>Você ouviu as notícias?</span>" },
                        { term: "Know", sent: "I know the answer.", trans: "<span style='color:#0077b6'>Eu sei a resposta.</span>" },
                        { term: "Learn", sent: "We learn English at school.", trans: "<span style='color:#0077b6'>Nós aprendemos inglês na escola.</span>" },
                        { term: "Like", sent: "I like pop music.", trans: "<span style='color:#0077b6'>Eu gosto de música pop.</span>" },
                        { term: "Love", sent: "She loves her family.", trans: "<span style='color:#0077b6'>Ela ama a família dela.</span>" },
                        { term: "Motivate", sent: "Teachers motivate students.", trans: "<span style='color:#0077b6'>Professores motivam estudantes.</span>" },
                        { term: "Need", sent: "I need help.", trans: "<span style='color:#0077b6'>Eu preciso de ajuda.</span>" },
                        { term: "Prefer", sent: "I prefer coffee.", trans: "<span style='color:#0077b6'>Eu prefiro café.</span>" },
                        { term: "Read", sent: "He reads books every day.", trans: "<span style='color:#0077b6'>Ele lê livros todo dia.</span>" },
                        { term: "Speak", sent: "They speak Spanish.", trans: "<span style='color:#0077b6'>Eles falam espanhol.</span>" },
                        { term: "Study", sent: "You must study hard.", trans: "<span style='color:#0077b6'>Você deve estudar muito.</span>" },
                        { term: "Surprise", sent: "The gift will surprise him.", trans: "<span style='color:#0077b6'>O presente vai surpreendê-lo.</span>" },
                        { term: "Talk", sent: "Can we talk later?", trans: "<span style='color:#0077b6'>Podemos conversar mais tarde?</span>" },
                        { term: "Tell", sent: "Tell me a story.", trans: "<span style='color:#0077b6'>Conte-me uma história.</span>" },
                        { term: "Think", sent: "I think it's a good idea.", trans: "<span style='color:#0077b6'>Eu acho que é uma boa ideia.</span>" },
                        { term: "Want", sent: "I want a pizza.", trans: "<span style='color:#0077b6'>Eu quero uma pizza.</span>" },
                        { term: "Welcome", sent: "We welcome new students.", trans: "<span style='color:#0077b6'>Nós damos as boas-vindas a novos alunos.</span>" },
                        { term: "Work", sent: "He works in an office.", trans: "<span style='color:#0077b6'>Ele trabalha em um escritório.</span>" }
                    ]
                },
                {
                    title: "Verbs (Action & Change)",
                    audio: "TTS: She is a doctor. He wants to become a pilot. I will buy a car. Choose the correct answer. Come here, please. Technology connects us. Artists create beauty. Decide what you want. He did his homework. Let's explore the city. Don't be afraid to fail. I can't find my keys. He can fix the computer. Follow the instructions. Please give me a pen. Let's go home. Plants grow in the sun. I have a question. Can you help me? My leg hurts. Practice to improve. Prices increase every year. Invest in your future. I will invite my friends. She likes to paint. We practice English. Use your imagination.",
                    items: [
                        { term: "Be", sent: "She is a doctor.", trans: "<span style='color:#0077b6'>Ela é médica.</span>" },
                        { term: "Become", sent: "He wants to become a pilot.", trans: "<span style='color:#0077b6'>Ele quer se tornar um piloto.</span>" },
                        { term: "Buy", sent: "I will buy a car.", trans: "<span style='color:#0077b6'>Eu vou comprar um carro.</span>" },
                        { term: "Choose", sent: "Choose the correct answer.", trans: "<span style='color:#0077b6'>Escolha a resposta correta.</span>" },
                        { term: "Come", sent: "Come here, please.", trans: "<span style='color:#0077b6'>Venha aqui, por favor.</span>" },
                        { term: "Connect", sent: "Technology connects us.", trans: "<span style='color:#0077b6'>A tecnologia nos conecta.</span>" },
                        { term: "Create", sent: "Artists create beauty.", trans: "<span style='color:#0077b6'>Artistas criam beleza.</span>" },
                        { term: "Decide", sent: "Decide what you want.", trans: "<span style='color:#0077b6'>Decida o que você quer.</span>" },
                        { term: "Did", sent: "He did his homework.", trans: "<span style='color:#0077b6'>Ele fez a lição de casa dele.</span>" },
                        { term: "Explore", sent: "Let's explore the city.", trans: "<span style='color:#0077b6'>Vamos explorar a cidade.</span>" },
                        { term: "Fail", sent: "Don't be afraid to fail.", trans: "<span style='color:#0077b6'>Não tenha medo de falhar.</span>" },
                        { term: "Find", sent: "I can't find my keys.", trans: "<span style='color:#0077b6'>Eu não consigo encontrar minhas chaves.</span>" },
                        { term: "Fix", sent: "He can fix the computer.", trans: "<span style='color:#0077b6'>Ele consegue consertar o computador.</span>" },
                        { term: "Follow", sent: "Follow the instructions.", trans: "<span style='color:#0077b6'>Siga as instruções.</span>" },
                        { term: "Give", sent: "Please give me a pen.", trans: "<span style='color:#0077b6'>Por favor, me dê uma caneta.</span>" },
                        { term: "Go", sent: "Let's go home.", trans: "<span style='color:#0077b6'>Vamos para casa.</span>" },
                        { term: "Grow", sent: "Plants grow in the sun.", trans: "<span style='color:#0077b6'>Plantas crescem no sol.</span>" },
                        { term: "Have", sent: "I have a question.", trans: "<span style='color:#0077b6'>Eu tenho uma pergunta.</span>" },
                        { term: "Help", sent: "Can you help me?", trans: "<span style='color:#0077b6'>Você pode me ajudar?</span>" },
                        { term: "Hurt", sent: "My leg hurts.", trans: "<span style='color:#0077b6'>Minha perna dói.</span>" },
                        { term: "Improve", sent: "Practice to improve.", trans: "<span style='color:#0077b6'>Pratique para melhorar.</span>" },
                        { term: "Increase", sent: "Prices increase every year.", trans: "<span style='color:#0077b6'>Preços aumentam todo ano.</span>" },
                        { term: "Invest", sent: "Invest in your future.", trans: "<span style='color:#0077b6'>Invista no seu futuro.</span>" },
                        { term: "Invite", sent: "I will invite my friends.", trans: "<span style='color:#0077b6'>Vou convidar meus amigos.</span>" },
                        { term: "Paint", sent: "She likes to paint.", trans: "<span style='color:#0077b6'>Ela gosta de pintar.</span>" },
                        { term: "Practice", sent: "We practice English.", trans: "<span style='color:#0077b6'>Nós praticamos inglês.</span>" },
                        { term: "Use", sent: "Use your imagination.", trans: "<span style='color:#0077b6'>Use sua imaginação.</span>" }
                    ]
                },
                {
                    title: "Vocab (Lang/Work)",
                    audio: "TTS: Communication is key. Do you speak English? English is a global language. He is a pronoun. The president gave a speech. What does this word mean? Her writing is beautiful. Focus on your career. He works for a big company. I attended a conference. I am taking an English course. This exercise is easy. The student asked a question. The topic is interesting.",
                    items: [
                        { term: "Communication", sent: "Communication is key.", trans: "<span style='color:#0077b6'>Comunicação é a chave.</span>" },
                        { term: "English", sent: "Do you speak English?", trans: "<span style='color:#0077b6'>Você fala inglês?</span>" },
                        { term: "Language", sent: "English is a global language.", trans: "<span style='color:#0077b6'>Inglês é uma língua global.</span>" },
                        { term: "Pronoun", sent: "\"He\" is a pronoun.", trans: "<span style='color:#0077b6'>'Ele' é um pronome.</span>" },
                        { term: "Speech", sent: "The president gave a speech.", trans: "<span style='color:#0077b6'>O presidente fez um discurso.</span>" },
                        { term: "Word", sent: "What does this word mean?", trans: "<span style='color:#0077b6'>O que essa palavra significa?</span>" },
                        { term: "Writing", sent: "Her writing is beautiful.", trans: "<span style='color:#0077b6'>A escrita dela é bonita.</span>" },
                        { term: "Career", sent: "Focus on your career.", trans: "<span style='color:#0077b6'>Foque na sua carreira.</span>" },
                        { term: "Company", sent: "He works for a big company.", trans: "<span style='color:#0077b6'>Ele trabalha para uma grande empresa.</span>" },
                        { term: "Conference", sent: "I attended a conference.", trans: "<span style='color:#0077b6'>Eu participei de uma conferência.</span>" },
                        { term: "Course", sent: "I am taking an English course.", trans: "<span style='color:#0077b6'>Estou fazendo um curso de inglês.</span>" },
                        { term: "Exercise", sent: "This exercise is easy.", trans: "<span style='color:#0077b6'>Este exercício é fácil.</span>" },
                        { term: "Student", sent: "The student asked a question.", trans: "<span style='color:#0077b6'>O estudante fez uma pergunta.</span>" },
                        { term: "Topic", sent: "The topic is interesting.", trans: "<span style='color:#0077b6'>O tópico é interessante.</span>" }
                    ]
                },
                {
                    title: "Vocab (Ideas)",
                    audio: "TTS: The content is useful. I love learning about culture. Where is the evidence? Think about your future. That is a great idea! He has a lot of influence. Life is beautiful. In my opinion, it's good. Choose the right path. What is your plan? Its popularity is growing. It was just a pretext. What is the reason? English plays a big role. Technology helps us. We don't have much time.",
                    items: [
                        { term: "Content", sent: "The content is useful.", trans: "<span style='color:#0077b6'>O conteúdo é útil.</span>" },
                        { term: "Culture", sent: "I love learning about culture.", trans: "<span style='color:#0077b6'>Eu amo aprender sobre cultura.</span>" },
                        { term: "Evidence", sent: "Where is the evidence?", trans: "<span style='color:#0077b6'>Onde está a evidência?</span>" },
                        { term: "Future", sent: "Think about your future.", trans: "<span style='color:#0077b6'>Pense no seu futuro.</span>" },
                        { term: "Idea", sent: "That is a great idea!", trans: "<span style='color:#0077b6'>Essa é uma ótima ideia!</span>" },
                        { term: "Influence", sent: "He has a lot of influence.", trans: "<span style='color:#0077b6'>Ele tem muita influência.</span>" },
                        { term: "Life", sent: "Life is beautiful.", trans: "<span style='color:#0077b6'>A vida é bela.</span>" },
                        { term: "Opinion", sent: "In my opinion, it's good.", trans: "<span style='color:#0077b6'>Na minha opinião, é bom.</span>" },
                        { term: "Path", sent: "Choose the right path.", trans: "<span style='color:#0077b6'>Escolha o caminho certo.</span>" },
                        { term: "Plan", sent: "What is your plan?", trans: "<span style='color:#0077b6'>Qual é o seu plano?</span>" },
                        { term: "Popularity", sent: "Its popularity is growing.", trans: "<span style='color:#0077b6'>Sua popularidade está crescendo.</span>" },
                        { term: "Pretext", sent: "It was just a pretext.", trans: "<span style='color:#0077b6'>Foi apenas um pretexto.</span>" },
                        { term: "Reason", sent: "What is the reason?", trans: "<span style='color:#0077b6'>Qual é a razão?</span>" },
                        { term: "Role", sent: "English plays a big role.", trans: "<span style='color:#0077b6'>O inglês desempenha um grande papel.</span>" },
                        { term: "Technology", sent: "Technology helps us.", trans: "<span style='color:#0077b6'>A tecnologia nos ajuda.</span>" },
                        { term: "Time", sent: "We don't have much time.", trans: "<span style='color:#0077b6'>Não temos muito tempo.</span>" }
                    ]
                },
                {
                    title: "General Nouns",
                    audio: "TTS: Read this book. I ate a burger. Nice Halloween costume. I bought a gift. My house is near. Can I borrow a pen? The players are on the pitch. This is a nice place. I made a sandwich. The storm was scary. International trade is important. That tree is old. How is the weather? We live in a big world.",
                    items: [
                        { term: "Book", sent: "Read this book.", trans: "<span style='color:#0077b6'>Leia este livro.</span>" },
                        { term: "Burger", sent: "I ate a burger.", trans: "<span style='color:#0077b6'>Eu comi um hambúrguer.</span>" },
                        { term: "Costume", sent: "Nice Halloween costume.", trans: "<span style='color:#0077b6'>Bela fantasia de Halloween.</span>" },
                        { term: "Gift", sent: "I bought a gift.", trans: "<span style='color:#0077b6'>Eu comprei um presente.</span>" },
                        { term: "House", sent: "My house is near.", trans: "<span style='color:#0077b6'>Minha casa é perto.</span>" },
                        { term: "Pen", sent: "Can I borrow a pen?", trans: "<span style='color:#0077b6'>Posso pegar uma caneta emprestada?</span>" },
                        { term: "Pitch", sent: "The players are on the pitch.", trans: "<span style='color:#0077b6'>Os jogadores estão no campo.</span>" },
                        { term: "Place", sent: "This is a nice place.", trans: "<span style='color:#0077b6'>Este é um lugar legal.</span>" },
                        { term: "Sandwich", sent: "I made a sandwich.", trans: "<span style='color:#0077b6'>Eu fiz um sanduíche.</span>" },
                        { term: "Storm", sent: "The storm was scary.", trans: "<span style='color:#0077b6'>A tempestade foi assustadora.</span>" },
                        { term: "Trade", sent: "International trade is important.", trans: "<span style='color:#0077b6'>O comércio internacional é importante.</span>" },
                        { term: "Tree", sent: "That tree is old.", trans: "<span style='color:#0077b6'>Aquela árvore é velha.</span>" },
                        { term: "Weather", sent: "How is the weather?", trans: "<span style='color:#0077b6'>Como está o clima?</span>" },
                        { term: "World", sent: "We live in a big world.", trans: "<span style='color:#0077b6'>Nós vivemos em um mundo grande.</span>" }
                    ]
                },
                {
                    title: "Wh- Words with -ever",
                    audio: "TTS: Whoever calls, tell them I'm busy. Do whatever you like. Choose whichever color you prefer. I will go wherever you go. Call me whenever you can. You can dress however you want.",
                    items: [
                        { term: "Whoever", sent: "Whoever calls, tell them I'm busy.", trans: "<span style='color:#0077b6'>Quem quer que ligue, diga que estou ocupado.</span>" },
                        { term: "Whatever", sent: "Do whatever you like.", trans: "<span style='color:#0077b6'>Faça o que quer que você goste.</span>" },
                        { term: "Whichever", sent: "Choose whichever color you prefer.", trans: "<span style='color:#0077b6'>Escolha qualquer cor que você preferir.</span>" },
                        { term: "Wherever", sent: "I will go wherever you go.", trans: "<span style='color:#0077b6'>Eu irei onde quer que você vá.</span>" },
                        { term: "Whenever", sent: "Call me whenever you can.", trans: "<span style='color:#0077b6'>Ligue-me quando puder.</span>" },
                        { term: "However", sent: "You can dress however you want.", trans: "<span style='color:#0077b6'>Você pode se vestir como quiser.</span>" }
                    ]
                },
                {
                    title: "Linking Words",
                    audio: "TTS: The flight was delayed owing to bad weather. The match was postponed due to the soaked pitch. He couldn't come because of a prior appointment. Since it was raining, we stayed indoors. As I was feeling unwell, I decided to stay home. The company invested poorly; as a consequence, they faced difficulties. The team trained hard; as a result, they won the championship. The storm was severe; consequently, trees were uprooted. The evidence was clear; thus, the jury found him guilty. She missed the bus; therefore, she was late. I was hungry, so I made a sandwich.",
                    items: [
                        { term: "Owing to", sent: "The flight was delayed owing to bad weather.", trans: "<span style='color:#0077b6'>O voo atrasou devido ao mau tempo.</span>" },
                        { term: "Due to", sent: "The match was postponed due to the soaked pitch.", trans: "<span style='color:#0077b6'>A partida foi adiada devido ao campo encharcado.</span>" },
                        { term: "Because of", sent: "He couldn't come because of a prior appointment.", trans: "<span style='color:#0077b6'>Ele não pôde vir por causa de um compromisso anterior.</span>" },
                        { term: "Since", sent: "Since it was raining, we stayed indoors.", trans: "<span style='color:#0077b6'>Já que estava chovendo, ficamos em casa.</span>" },
                        { term: "As", sent: "As I was feeling unwell, I decided to stay home.", trans: "<span style='color:#0077b6'>Como eu estava me sentindo mal, decidi ficar em casa.</span>" },
                        { term: "As a consequence", sent: "The company invested poorly; as a consequence, they faced difficulties.", trans: "<span style='color:#0077b6'>A empresa investiu mal; como consequência, enfrentaram dificuldades.</span>" },
                        { term: "As a result", sent: "The team trained hard; as a result, they won the championship.", trans: "<span style='color:#0077b6'>O time treinou muito; como resultado, eles ganharam o campeonato.</span>" },
                        { term: "Consequently", sent: "The storm was severe; consequently, trees were uprooted.", trans: "<span style='color:#0077b6'>A tempestade foi severa; consequentemente, árvores foram arrancadas.</span>" },
                        { term: "Thus", sent: "The evidence was clear; thus, the jury found him guilty.", trans: "<span style='color:#0077b6'>A evidência era clara; assim, o júri o considerou culpado.</span>" },
                        { term: "Therefore", sent: "She missed the bus; therefore, she was late.", trans: "<span style='color:#0077b6'>Ela perdeu o ônibus; portanto, se atrasou.</span>" },
                        { term: "So", sent: "I was hungry, so I made a sandwich.", trans: "<span style='color:#0077b6'>Eu estava com fome, então fiz um sanduíche.</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Ah, that makes sense now. In my opinion, it is good. In conclusion, we must act. Thanks to you, we won. How important is English? How useful is this tool? We did it by ourselves. That's interesting, tell me more. You have a point there. My field of study is biology. A lot of people speak English.",
                    items: [
                        { term: "That makes sense", sent: "Ah, that makes sense now.", trans: "<span style='color:#0077b6'>Ah, isso faz sentido agora.</span>" },
                        { term: "In my opinion", sent: "In my opinion, it is good.", trans: "<span style='color:#0077b6'>Na minha opinião, é bom.</span>" },
                        { term: "In conclusion", sent: "In conclusion, we must act.", trans: "<span style='color:#0077b6'>Em conclusão, devemos agir.</span>" },
                        { term: "Thanks to", sent: "Thanks to you, we won.", trans: "<span style='color:#0077b6'>Graças a você, nós ganhamos.</span>" },
                        { term: "How important is...?", sent: "How important is English?", trans: "<span style='color:#0077b6'>Quão importante é o inglês?</span>" },
                        { term: "How useful is...?", sent: "How useful is this tool?", trans: "<span style='color:#0077b6'>Quão útil é esta ferramenta?</span>" },
                        { term: "By ourselves / by myself", sent: "We did it by ourselves.", trans: "<span style='color:#0077b6'>Nós fizemos isso sozinhos.</span>" },
                        { term: "Tell me more", sent: "That's interesting, tell me more.", trans: "<span style='color:#0077b6'>Isso é interessante, conte-me mais.</span>" },
                        { term: "Have a point", sent: "You have a point there.", trans: "<span style='color:#0077b6'>Você tem um ponto aí.</span>" },
                        { term: "Field of study", sent: "My field of study is biology.", trans: "<span style='color:#0077b6'>Minha área de estudo é biologia.</span>" },
                        { term: "A lot of people", sent: "A lot of people speak English.", trans: "<span style='color:#0077b6'>Muitas pessoas falam inglês.</span>" }
                    ]
                }
            ],

// 2C: Practice Drills
            drills: [
                {
                    type: "mcq",
                    q: "Choose the correct translation for 'To Agree'.",
                    options: [
                        { t: "Discutir", c: false },
                        { t: "Concordar", c: true },
                        { t: "Aprender", c: false },
                        { t: "Gostar", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I need to _____ for the test.'",
                    options: [
                        { t: "study", c: true },
                        { t: "surprise", c: false },
                        { t: "speak", c: false },
                        { t: "welcome", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which verb means 'To Create'?",
                    options: [
                        { t: "Criar", c: true },
                        { t: "Comprar", c: false },
                        { t: "Escolher", c: false },
                        { t: "Vir", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'English is a global _______.'",
                    options: [
                        { t: "word", c: false },
                        { t: "speech", c: false },
                        { t: "language", c: true },
                        { t: "writing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'He works for a big tech _______.'",
                    options: [
                        { t: "company", c: true },
                        { t: "career", c: false },
                        { t: "student", c: false },
                        { t: "exercise", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'That is a great _______!'",
                    options: [
                        { t: "idea", c: true },
                        { t: "future", c: false },
                        { t: "time", c: false },
                        { t: "culture", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'I ate a _______ for lunch.'",
                    options: [
                        { t: "sandwich", c: true },
                        { t: "world", c: false },
                        { t: "storm", c: false },
                        { t: "pitch", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'You can sit _______ you like.'",
                    options: [
                        { t: "whoever", c: false },
                        { t: "wherever", c: true },
                        { t: "whatever", c: false },
                        { t: "whichever", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'The flight was cancelled _______ the storm.'",
                    options: [
                        { t: "due to", c: true },
                        { t: "therefore", c: false },
                        { t: "so", c: false },
                        { t: "thus", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'He studied hard. _______, he passed the exam.'",
                    options: [
                        { t: "Because", c: false },
                        { t: "Therefore", c: true },
                        { t: "Since", c: false },
                        { t: "Owing to", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'_______, learning English is vital.'",
                    options: [
                        { t: "In my opinion", c: true },
                        { t: "Have a point", c: false },
                        { t: "Tell me more", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'She bought _______ a new book.' (Reflexive)",
                    options: [
                        { t: "herself", c: true },
                        { t: "himself", c: false },
                        { t: "myself", c: false },
                        { t: "itself", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'_______ is the Eiffel Tower?' 'It's very tall.'",
                    options: [
                        { t: "How tall", c: true },
                        { t: "How old", c: false },
                        { t: "How much", c: false },
                        { t: "How many", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'I _______ my arm playing soccer.'",
                    options: [
                        { t: "hurt", c: true },
                        { t: "help", c: false },
                        { t: "grow", c: false },
                        { t: "go", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'Can you _______ the problem?'",
                    options: [
                        { t: "fix", c: true },
                        { t: "fail", c: false },
                        { t: "fall", c: false },
                        { t: "feel", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'The _______ was very strong last night.'",
                    options: [
                        { t: "storm", c: true },
                        { t: "tree", c: false },
                        { t: "pen", c: false },
                        { t: "gift", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'That _______ sense.'",
                    options: [
                        { t: "makes", c: true },
                        { t: "does", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'_______ did this did a good job.'",
                    options: [
                        { t: "Whoever", c: true },
                        { t: "However", c: false },
                        { t: "Wherever", c: false },
                        { t: "Whenever", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'We didn't play football _______ it was raining.'",
                    options: [
                        { t: "since", c: true },
                        { t: "therefore", c: false },
                        { t: "consequently", c: false },
                        { t: "so", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'Please _______ the instructions.'",
                    options: [
                        { t: "follow", c: true },
                        { t: "find", c: false },
                        { t: "feel", c: false },
                        { t: "fail", c: false }
                    ]
                }
            ]
        },

// ======================================================
        // STEP 3: FOLLOW THE PATTERN (Grammar)
        // ======================================================
        {
            title: "Follow the Pattern",
            audio3b: "audio/em1-1-1/step3.mp3", // Will be filled in the next step
            
            subPages: [
                { id: "step3a", label: "3A: Patterns" },
                { id: "step3b", label: "3B: Examples" },
                { id: "step3c", label: "3C: Practice" }
            ],

            // 3A: Explanations
            patterns: [
                {
                    title: "Definite and Indefinite Articles",
                    explanation: "We use A/AN (Indefinite) when talking about something general. Use A before consonant sounds and AN before vowel sounds. We use THE (Definite) when talking about something specific or unique.<br><span style='color:#0077b6; font-style:italic;'>(Usamos A/AN (Indefinido) ao falar de algo geral. Use A antes de sons consonantais e AN antes de sons vocálicos. Usamos THE (Definido) ao falar de algo específico ou único.)</span>",
                    samples: [
                        { en: "A book / An apple", pt: "<span style='color:#0077b6'>Um livro / Uma maçã (Geral)</span>" },
                        { en: "The book on the table", pt: "<span style='color:#0077b6'>O livro na mesa (Específico)</span>" }
                    ]
                },
                {
                    title: "Subject vs. Object Pronouns",
                    explanation: "Subject Pronouns do the action (come before the verb). Object Pronouns receive the action (come after the verb/preposition).<br><span style='color:#0077b6; font-style:italic;'>(Pronomes Sujeito realizam a ação (vêm antes do verbo). Pronomes Objeto recebem a ação (vêm depois do verbo/preposição).)</span>",
                    samples: [
                        { en: "I called her. / She called me.", pt: "<span style='color:#0077b6'>Eu liguei para ela. / Ela ligou para mim.</span>" },
                        { en: "You saw him. / He saw you.", pt: "<span style='color:#0077b6'>Você o viu. / Ele viu você.</span>" },
                        { en: "He loves us. / We love him.", pt: "<span style='color:#0077b6'>Ele nos ama. / Nós o amamos.</span>" },
                        { en: "She helped them. / They helped her.", pt: "<span style='color:#0077b6'>Ela os ajudou. / Eles a ajudaram.</span>" },
                        { en: "It (the dog) bit me. / I fed it.", pt: "<span style='color:#0077b6'>Ele (o cachorro) me mordeu. / Eu o alimentei.</span>" }
                    ]
                },
                {
                    title: "Possessive Adjectives vs. Possessive Pronouns",
                    explanation: "Adjectives come before the noun. Pronouns replace the noun and stand alone.<br><span style='color:#0077b6; font-style:italic;'>(Adjetivos vêm antes do substantivo. Pronomes substituem o substantivo e ficam sozinhos.)</span>",
                    samples: [
                        { en: "This is my pen. / This pen is mine.", pt: "<span style='color:#0077b6'>Esta é minha caneta. / Esta caneta é minha.</span>" },
                        { en: "Is this your car? / Is this car yours?", pt: "<span style='color:#0077b6'>Este é seu carro? / Este carro é seu?</span>" },
                        { en: "It is his book. / The book is his.", pt: "<span style='color:#0077b6'>É o livro dele. / O livro é dele.</span>" },
                        { en: "It is her bag. / The bag is hers.", pt: "<span style='color:#0077b6'>É a bolsa dela. / A bolsa é dela.</span>" },
                        { en: "It is our house. / The house is ours.", pt: "<span style='color:#0077b6'>É nossa casa. / A casa é nossa.</span>" },
                        { en: "It is their project. / The project is theirs.", pt: "<span style='color:#0077b6'>É o projeto deles. / O projeto é deles.</span>" }
                    ]
                },
                {
                    title: "Reflexive Pronouns",
                    explanation: "Used when subject and object are the same, or for emphasis.<br><span style='color:#0077b6; font-style:italic;'>(Usado quando sujeito e objeto são os mesmos, ou para ênfase.)</span>",
                    samples: [
                        { en: "I hurt myself cooking.", pt: "<span style='color:#0077b6'>Eu me machuquei cozinhando.</span>" },
                        { en: "Did you enjoy yourself?", pt: "<span style='color:#0077b6'>Você se divertiu?</span>" },
                        { en: "He taught himself Spanish.", pt: "<span style='color:#0077b6'>Ele aprendeu espanhol sozinho.</span>" },
                        { en: "She looked at herself in the mirror.", pt: "<span style='color:#0077b6'>Ela se olhou no espelho.</span>" },
                        { en: "The oven turns itself off.", pt: "<span style='color:#0077b6'>O forno desliga sozinho.</span>" },
                        { en: "We prepared the party ourselves.", pt: "<span style='color:#0077b6'>Nós mesmos preparamos a festa.</span>" },
                        { en: "Help yourselves to the food.", pt: "<span style='color:#0077b6'>Sirvam-se da comida.</span>" },
                        { en: "They introduced themselves.", pt: "<span style='color:#0077b6'>Eles se apresentaram.</span>" }
                    ]
                },
                {
                    title: "\"Wh-\" words with \"-ever\"",
                    explanation: "These words express the idea of \"it doesn't matter which/who/where/etc.\"<br><span style='color:#0077b6; font-style:italic;'>(Estas palavras expressam a ideia de 'não importa qual/quem/onde/etc.'.)</span>",
                    samples: [
                        { en: "Whoever calls, say I'm busy.", pt: "<span style='color:#0077b6'>Quem quer que ligue, diga que estou ocupado.</span>" },
                        { en: "Do whatever makes you happy.", pt: "<span style='color:#0077b6'>Faça o que quer que te faça feliz.</span>" },
                        { en: "Buy whichever you prefer.", pt: "<span style='color:#0077b6'>Compre qualquer um que você preferir.</span>" },
                        { en: "I will find you wherever you go.", pt: "<span style='color:#0077b6'>Eu te encontrarei onde quer que você vá.</span>" },
                        { en: "Visit us whenever you can.", pt: "<span style='color:#0077b6'>Visite-nos quando quer que você possa.</span>" },
                        { en: "Solve the problem however you can.", pt: "<span style='color:#0077b6'>Resolva o problema de qualquer maneira que puder.</span>" }
                    ]
                },
                {
                    title: "How + Adjective",
                    explanation: "Used to ask about the specific degree or level of a quality.<br><span style='color:#0077b6; font-style:italic;'>(Usado para perguntar sobre o grau específico ou nível de uma qualidade.)</span>",
                    samples: [
                        { en: "How old is she?", pt: "<span style='color:#0077b6'>Quantos anos ela tem?</span>" },
                        { en: "How tall is the building?", pt: "<span style='color:#0077b6'>Qual a altura do prédio?</span>" },
                        { en: "How far is the airport?", pt: "<span style='color:#0077b6'>Qual a distância do aeroporto?</span>" },
                        { en: "How long is the movie?", pt: "<span style='color:#0077b6'>Qual a duração do filme?</span>" },
                        { en: "How fast can you run?", pt: "<span style='color:#0077b6'>Quão rápido você pode correr?</span>" },
                        { en: "How often do you study?", pt: "<span style='color:#0077b6'>Com que frequência você estuda?</span>" },
                        { en: "How expensive is it?", pt: "<span style='color:#0077b6'>Quão caro é isso?</span>" },
                        { en: "How much time? / How many books?", pt: "<span style='color:#0077b6'>Quanto tempo? / Quantos livros?</span>" }
                    ]
                },
                {
                    title: "Linking Words (Cause and Consequence)",
                    explanation: "Connectors that show why something happens (Cause) or the result of it (Consequence).<br><span style='color:#0077b6; font-style:italic;'>(Conectivos que mostram por que algo acontece (Causa) ou o resultado disso (Consequência).)</span>",
                    samples: [
                        { en: "The game was cancelled because of rain.", pt: "<span style='color:#0077b6'>O jogo foi cancelado por causa da chuva.</span>" },
                        { en: "His success was due to hard work.", pt: "<span style='color:#0077b6'>O sucesso dele foi devido ao trabalho duro.</span>" },
                        { en: "Owing to the traffic, I was late.", pt: "<span style='color:#0077b6'>Devido ao trânsito, eu me atrasei.</span>" },
                        { en: "It was cold; therefore, I wore a coat.", pt: "<span style='color:#0077b6'>Estava frio; portanto, vesti um casaco.</span>" },
                        { en: "I was tired, so I slept.", pt: "<span style='color:#0077b6'>Eu estava cansado, então dormi.</span>" },
                        { en: "He didn't study; thus, he failed.", pt: "<span style='color:#0077b6'>Ele não estudou; assim, ele reprovou.</span>" },
                        { en: "Prices rose; consequently, sales dropped.", pt: "<span style='color:#0077b6'>Os preços subiram; consequentemente, as vendas caíram.</span>" },
                        { en: "He practiced daily. As a result, he won.", pt: "<span style='color:#0077b6'>Ele praticou diariamente. Como resultado, ele ganhou.</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Simple Past",
                    audio: "audio/em1-1-1/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Did you hear about the first computer?", 
                            pt: "<span style='color:#0077b6'>Você ouviu falar sobre o primeiro computador?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Yes. Engineers built it in the 1940s. It was huge and didn't work very fast.", 
                            pt: "<span style='color:#0077b6'>Sim. Engenheiros o construíram na década de 1940. Era enorme e não funcionava muito rápido.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Past Continuous",
                    audio: "audio/em1-1-1/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Why didn't you answer my call yesterday?", 
                            pt: "<span style='color:#0077b6'>Por que você não atendeu minha ligação ontem?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Sorry! I was designing a new logo all afternoon. My phone was charging in the other room.", 
                            pt: "<span style='color:#0077b6'>Desculpe! Eu estava desenhando um novo logotipo a tarde toda. Meu telefone estava carregando no outro quarto.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Mixed Tenses (When/While)",
                    audio: "audio/em1-1-1/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "How did you break your glasses?", 
                            pt: "<span style='color:#0077b6'>Como você quebrou seus óculos?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "It happened while I was cleaning them. I dropped them when the cat jumped on me.", 
                            pt: "<span style='color:#0077b6'>Aconteceu enquanto eu os estava limpando. Eu os derrubei quando o gato pulou em mim.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 4: Used To",
                    audio: "audio/em1-1-1/step3_dialogue4.mp3",
                    lines: [
                        { 
                            speaker: "Mrs. Canales", 
                            text: "Technology changes everything. We used to go to the library to find information.", 
                            pt: "<span style='color:#0077b6'>A tecnologia muda tudo. Nós costumávamos ir à biblioteca para encontrar informações.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Really? I didn't use to like reading, but now I do because of e-books.", 
                            pt: "<span style='color:#0077b6'>Sério? Eu não costumava gostar de ler, mas agora eu gosto por causa dos e-books.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Choose the correct article. 'It is _____ honor to meet you.'",
                    options: [
                        { t: "an", c: true },
                        { t: "a", c: false },
                        { t: "the", c: false },
                        { t: "(no article)", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct article. '_____ moon is bright tonight.'",
                    options: [
                        { t: "The", c: true },
                        { t: "A", c: false },
                        { t: "An", c: false },
                        { t: "(no article)", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete the sentence. '_____ are going to the cinema.'",
                    options: [
                        { t: "We", c: true },
                        { t: "Us", c: false },
                        { t: "Them", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete the sentence. 'Please give the book to _____.'",
                    options: [
                        { t: "me", c: true },
                        { t: "I", c: false },
                        { t: "my", c: false },
                        { t: "mine", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'I lost _____ keys.'",
                    options: [
                        { t: "my", c: true },
                        { t: "mine", c: false },
                        { t: "me", c: false },
                        { t: "I", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'That car is not ours. It is _____.'",
                    options: [
                        { t: "theirs", c: true },
                        { t: "their", c: false },
                        { t: "them", c: false },
                        { t: "they", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'He cut _____ while shaving.'",
                    options: [
                        { t: "himself", c: true },
                        { t: "him", c: false },
                        { t: "his", c: false },
                        { t: "he", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'They built the house _____.' (Emphasis)",
                    options: [
                        { t: "themselves", c: true },
                        { t: "theirs", c: false },
                        { t: "them", c: false },
                        { t: "theirselves", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'_____ you do, don't give up.'",
                    options: [
                        { t: "Whatever", c: true },
                        { t: "Whoever", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'You can sit _____ you find a chair.'",
                    options: [
                        { t: "wherever", c: true },
                        { t: "however", c: false },
                        { t: "whichever", c: false },
                        { t: "whoever", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'_____ is the journey?' 'It takes two hours.'",
                    options: [
                        { t: "How long", c: true },
                        { t: "How far", c: false },
                        { t: "How much", c: false },
                        { t: "How often", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'_____ apples did you buy?'",
                    options: [
                        { t: "How many", c: true },
                        { t: "How much", c: false },
                        { t: "How old", c: false },
                        { t: "How fast", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'The flight was canceled _____ the fog.'",
                    options: [
                        { t: "due to", c: true },
                        { t: "because", c: false },
                        { t: "since", c: false },
                        { t: "therefore", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'_____ it was raining, we stayed inside.'",
                    options: [
                        { t: "Since", c: true },
                        { t: "Because of", c: false },
                        { t: "Consequently", c: false },
                        { t: "Thus", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'He didn't study; _____, he failed the test.'",
                    options: [
                        { t: "therefore", c: true },
                        { t: "because", c: false },
                        { t: "owing to", c: false },
                        { t: "as", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'The traffic was heavy. _____, I arrived late.'",
                    options: [
                        { t: "As a result", c: true },
                        { t: "Because of", c: false },
                        { t: "Since", c: false },
                        { t: "Due to", c: false }
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
                    text: "I taught myself to speak English.<br><small style='color:#0077b6'>(Eu ensinei a mim mesmo a falar inglês.)</small>", 
                    audio: "TTS: I taught myself to speak English.", 
                    arrow: "↘" 
                },
                { 
                    text: "How important is learning a second language?<br><small style='color:#0077b6'>(Quão importante é aprender uma segunda língua?)</small>", 
                    audio: "TTS: How important is learning a second language?", 
                    arrow: "↗" 
                },
                { 
                    text: "Whoever works hard can succeed.<br><small style='color:#0077b6'>(Quem quer que trabalhe duro pode ter sucesso.)</small>", 
                    audio: "TTS: Whoever works hard can succeed.", 
                    arrow: "↘" 
                },
                { 
                    text: "English is useful; therefore, we study it.<br><small style='color:#0077b6'>(Inglês é útil; portanto, nós o estudamos.)</small>", 
                    audio: "TTS: English is useful; therefore, we study it.", 
                    arrow: "↘" 
                },
                { 
                    text: "We stayed inside due to the storm.<br><small style='color:#0077b6'>(Nós ficamos dentro de casa devido à tempestade.)</small>", 
                    audio: "TTS: We stayed inside due to the storm.", 
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
                // Drill 1: Typing
                {
                    type: "typing",
                    instruction: "Listen to the audio and type the missing words in the blanks.",
                    audio: "TTS: I want to learn English because it is a global language. However, it is not easy. I need to study every day. Therefore, I will improve my skills.",
                    text: "I want to [learn] English because it is a global [language]. [However], it is not easy. I need to [study] every day. [Therefore], I will improve my skills."
                },
                // Drill 2: Dropdown
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue and choose the correct option.",
                    audio: "audio/em1-1-1/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: Mrs. Canales, I did the project by [myself | me | my].", a: "myself" },
                        { q: "Mrs. Canales: Good job, Celine. [How long | How much | How old] did it take?", a: "How long" },
                        { q: "Celine: Two hours. I was tired, [so | because | due to] I went to sleep early.", a: "so" },
                        { q: "Mrs. Canales: That is good. [Whatever | Wherever | However] you do, always do your best.", a: "Whatever" }
                    ]
                },
                // Drill 3: Audio Choice
                {
                    type: "audio-choice",
                    instruction: "Listen to the sentence and choose the correct reason.",
                    audio: "TTS: The bus has stopped.",
                    options: [
                        { t: "Because of the food.", c: false },
                        { t: "Because of the heavy traffic.", c: true },
                        { t: "Because of the content.", c: false },
                        { t: "Because of the conference.", c: false }
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
                    title: "Narration (The Exchange Student)",
                    audio: "TTS: Lucas decided to become an exchange student. He wanted to learn English; therefore, he traveled to the USA. When he arrived, he introduced himself to his host family. Hello, my name is Lucas, he said. The family welcomed him warmly. At school, Lucas noticed that English was spoken wherever he went. He studied hard every day. As a result, his English improved quickly. He learned that whoever tries hard can achieve their goals.",
                    body: "Lucas decided to become an exchange student. He wanted to learn English; therefore, he traveled to the USA. When he arrived, he introduced himself to his host family. \"Hello, my name is Lucas,\" he said. The family welcomed him warmly. At school, Lucas noticed that English was spoken wherever he went. He studied hard every day. As a result, his English improved quickly. He learned that whoever tries hard can achieve their goals.",
                    questions: [
                        {
                            q: "Why did Lucas travel to the USA?",
                            options: [
                                { t: "To visit his family.", c: false },
                                { t: "To learn English.", c: true },
                                { t: "To play soccer.", c: false },
                                { t: "To buy a house.", c: false }
                            ]
                        },
                        {
                            q: "Who did Lucas introduce himself to?",
                            options: [
                                { t: "The teacher.", c: false },
                                { t: "His host family.", c: true },
                                { t: "The taxi driver.", c: false },
                                { t: "Himself.", c: false }
                            ]
                        },
                        {
                            q: "What was the result of his hard work?",
                            options: [
                                { t: "He went home.", c: false },
                                { t: "He forgot English.", c: false },
                                { t: "His English improved quickly.", c: true },
                                { t: "He failed the test.", c: false }
                            ]
                        }
                    ]
                },
                {
                    title: "Dialogue (Choosing a Course)",
                    audio: "audio/em1-1-1/p6_text2.mp3",
                    body: "<b>Albert:</b> Celine, how good is your French?<br><b>Celine:</b> It's okay, but I want to improve it. I am considering taking a course.<br><b>Albert:</b> That's a great idea. Which course will you choose?<br><b>Celine:</b> I'm not sure. I can choose whichever fits my schedule.<br><b>Albert:</b> You should look for an online course. You can study whenever you have time.<br><b>Celine:</b> That makes sense. Since I am busy, flexibility is important.<br><b>Albert:</b> Exactly. However, you need discipline to study by yourself.",
                    questions: [
                        {
                            q: "What does Celine want to do?",
                            options: [
                                { t: "Teach French.", c: false },
                                { t: "Improve her French.", c: true },
                                { t: "Stop studying.", c: false },
                                { t: "Travel to France.", c: false }
                            ]
                        },
                        {
                            q: "What does Albert suggest?",
                            options: [
                                { t: "An online course.", c: true },
                                { t: "A book.", c: false },
                                { t: "A private teacher.", c: false },
                                { t: "A trip.", c: false }
                            ]
                        },
                        {
                            q: "Why is flexibility important for Celine?",
                            options: [
                                { t: "Because she is lazy.", c: false },
                                { t: "Because she is rich.", c: false },
                                { t: "Because she is busy.", c: true },
                                { t: "Because she is young.", c: false }
                            ]
                        }
                    ]
                },
                {
                    title: "Description (English in the World)",
                    audio: "TTS: English is often called a global language. It is used in business, science, and travel. Owing to its popularity, millions of people study it. It connects people from different cultures. For example, a person from Japan can communicate with a person from Brazil using English. Thus, it removes barriers. Technology also relies on English. Most coding languages use English words. Consequently, knowing English opens many doors for your career. It creates opportunities for whoever speaks it.",
                    body: "English is often called a global language. It is used in business, science, and travel. Owing to its popularity, millions of people study it. It connects people from different cultures. For example, a person from Japan can communicate with a person from Brazil using English. Thus, it removes barriers. Technology also relies on English. Most coding languages use English words. Consequently, knowing English opens many doors for your career. It creates opportunities for whoever speaks it.",
                    questions: [
                        {
                            q: "Why do millions of people study English?",
                            options: [
                                { t: "Owing to its difficulty.", c: false },
                                { t: "Owing to its popularity.", c: true },
                                { t: "Because of the weather.", c: false },
                                { t: "Due to the food.", c: false }
                            ]
                        },
                        {
                            q: "What does English do for people from different cultures?",
                            options: [
                                { t: "It separates them.", c: false },
                                { t: "It confuses them.", c: false },
                                { t: "It connects them.", c: true },
                                { t: "It ignores them.", c: false }
                            ]
                        },
                        {
                            q: "What is a consequence of knowing English?",
                            options: [
                                { t: "It opens doors for your career.", c: true },
                                { t: "It closes opportunities.", c: false },
                                { t: "It removes technology.", c: false },
                                { t: "It creates barriers.", c: false }
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
                    instruction: "Match the 'Wh-ever' word to its meaning.",
                    pairs: [
                        { left: "Whoever", right: "Any person", val: "1" },
                        { left: "Wherever", right: "Any place", val: "2" },
                        { left: "Whenever", right: "Any time", val: "3" },
                        { left: "Whatever", right: "Any thing", val: "4" }
                    ]
                },
                // Drill 2: Word Order
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "myself / I / the / fixed / car / .",
                    correct: "I fixed the car myself ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "tall / How / he / is / ?",
                    correct: "How tall is he ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "hard / studied / He / ; / therefore / passed / he / .",
                    correct: "He studied hard ; therefore he passed ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "want / You / go / wherever / can / you / .",
                    correct: "You can go wherever you want ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group (Object pronoun vs Reflexive).",
                    options: [
                        { t: "Myself", c: false },
                        { t: "Yourself", c: false },
                        { t: "Him", c: true },
                        { t: "Ourselves", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group (Cause vs Result).",
                    options: [
                        { t: "Therefore", c: false },
                        { t: "So", c: false },
                        { t: "Thus", c: false },
                        { t: "Because", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group (Result vs Cause).",
                    options: [
                        { t: "Since", c: false },
                        { t: "Due to", c: false },
                        { t: "As a result", c: true },
                        { t: "Because of", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group (Wh-ever vs Frequency).",
                    options: [
                        { t: "Whoever", c: false },
                        { t: "Whatever", c: false },
                        { t: "Never", c: true },
                        { t: "Wherever", c: false }
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.",
                    questions: [
                        { q: "They enjoyed [themselves | how | due to | so] at the party.", a: "themselves" },
                        { q: "[How | Themselves | Due to | So] deep is the ocean?", a: "How" },
                        { q: "The game was cancelled [due to | how | themselves | so] rain.", a: "due to" },
                        { q: "I was hungry, [so | how | due to | themselves] I ate an apple.", a: "so" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: The Importance of English. Write a short text (3-4 sentences) about why English is important to you.<br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: A Importância do Inglês. Escreva um pequeno texto (3-4 frases) sobre por que o inglês é importante para você.)</small></span>",
            example: "English is very important to me because I want to travel. How far can I go with English? Everywhere! I want to teach myself to speak fluently so I can work in a big company.<br><small><span style='color:#0077b6'>(O inglês é muito importante para mim porque eu quero viajar. Quão longe posso ir com o inglês? A todo lugar! Quero aprender a falar fluentemente sozinho para poder trabalhar em uma grande empresa.)</small></span>",
            prompts: [
                "Use at least one linking word (because, therefore, so, however). <br><span style='color:#0077b6'>(Use pelo menos uma palavra de ligação.)</span>",
                "Use one \"how + adjective\" phrase or a reflexive pronoun. <br><span style='color:#0077b6'>(Use uma frase \"how + adjetivo\" ou um pronome reflexivo.)</span>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Verbs: Communication & Mental ---
                { term: "Agree", definition: "To have the same opinion about something.", defTrans: "Concordar", example: "I agree with your opinion.", audioFront: "TTS: Agree", audioBack: "TTS: I agree with your opinion." },
                { term: "Consider", definition: "To think carefully about something.", defTrans: "Considerar", example: "We must consider all options.", audioFront: "TTS: Consider", audioBack: "TTS: We must consider all options." },
                { term: "Discuss", definition: "To talk about something with another person.", defTrans: "Discutir / Debater", example: "Let's discuss the project.", audioFront: "TTS: Discuss", audioBack: "TTS: Let's discuss the project." },
                { term: "Explain", definition: "To make an idea clear to someone.", defTrans: "Explicar", example: "Can you explain the rule?", audioFront: "TTS: Explain", audioBack: "TTS: Can you explain the rule?" },
                { term: "Feel", definition: "To experience an emotion or sensation.", defTrans: "Sentir", example: "I feel happy today.", audioFront: "TTS: Feel", audioBack: "TTS: I feel happy today." },
                { term: "Hear", definition: "To perceive sound with the ear.", defTrans: "Ouvir", example: "Did you hear the news?", audioFront: "TTS: Hear", audioBack: "TTS: Did you hear the news?" },
                { term: "Know", definition: "To be aware of through observation.", defTrans: "Saber / Conhecer", example: "I know the answer.", audioFront: "TTS: Know", audioBack: "TTS: I know the answer." },
                { term: "Learn", definition: "To gain knowledge or skill.", defTrans: "Aprender", example: "We learn English at school.", audioFront: "TTS: Learn", audioBack: "TTS: We learn English at school." },
                { term: "Like", definition: "To find agreeable or enjoyable.", defTrans: "Gostar", example: "I like pop music.", audioFront: "TTS: Like", audioBack: "TTS: I like pop music." },
                { term: "Love", definition: "To have a deep affection for.", defTrans: "Amar", example: "She loves her family.", audioFront: "TTS: Love", audioBack: "TTS: She loves her family." },
                { term: "Motivate", definition: "To provide a motive for doing something.", defTrans: "Motivar", example: "Teachers motivate students.", audioFront: "TTS: Motivate", audioBack: "TTS: Teachers motivate students." },
                { term: "Need", definition: "To require something essential.", defTrans: "Precisar", example: "I need help.", audioFront: "TTS: Need", audioBack: "TTS: I need help." },
                { term: "Prefer", definition: "To like one thing better than another.", defTrans: "Preferir", example: "I prefer coffee.", audioFront: "TTS: Prefer", audioBack: "TTS: I prefer coffee." },
                { term: "Read", definition: "To look at and comprehend written matter.", defTrans: "Ler", example: "He reads books every day.", audioFront: "TTS: Read", audioBack: "TTS: He reads books every day." },
                { term: "Speak", definition: "To say something in order to convey information.", defTrans: "Falar", example: "They speak Spanish.", audioFront: "TTS: Speak", audioBack: "TTS: They speak Spanish." },
                { term: "Study", definition: "To devote time to acquiring knowledge.", defTrans: "Estudar", example: "You must study hard.", audioFront: "TTS: Study", audioBack: "TTS: You must study hard." },
                { term: "Surprise", definition: "To cause someone to feel mild astonishment.", defTrans: "Surpreender", example: "The gift will surprise him.", audioFront: "TTS: Surprise", audioBack: "TTS: The gift will surprise him." },
                { term: "Talk", definition: "To speak in order to give information.", defTrans: "Conversar", example: "Can we talk later?", audioFront: "TTS: Talk", audioBack: "TTS: Can we talk later?" },
                { term: "Tell", definition: "To communicate information or news.", defTrans: "Contar / Dizer", example: "Tell me a story.", audioFront: "TTS: Tell", audioBack: "TTS: Tell me a story." },
                { term: "Think", definition: "To have a particular opinion or belief.", defTrans: "Pensar / Achar", example: "I think it's a good idea.", audioFront: "TTS: Think", audioBack: "TTS: I think it's a good idea." },
                { term: "Want", definition: "To have a desire to possess something.", defTrans: "Querer", example: "I want a pizza.", audioFront: "TTS: Want", audioBack: "TTS: I want a pizza." },
                { term: "Welcome", definition: "To greet someone arriving politely.", defTrans: "Receber / Dar as boas-vindas", example: "We welcome new students.", audioFront: "TTS: Welcome", audioBack: "TTS: We welcome new students." },
                { term: "Work", definition: "To be engaged in physical or mental activity.", defTrans: "Trabalhar", example: "He works in an office.", audioFront: "TTS: Work", audioBack: "TTS: He works in an office." },

                // --- Verbs: Action & Change ---
                { term: "Be", definition: "To exist or occur.", defTrans: "Ser / Estar", example: "She is a doctor.", audioFront: "TTS: Be", audioBack: "TTS: She is a doctor." },
                { term: "Become", definition: "To begin to be; turn into.", defTrans: "Tornar-se", example: "He wants to become a pilot.", audioFront: "TTS: Become", audioBack: "TTS: He wants to become a pilot." },
                { term: "Buy", definition: "To obtain in exchange for payment.", defTrans: "Comprar", example: "I will buy a car.", audioFront: "TTS: Buy", audioBack: "TTS: I will buy a car." },
                { term: "Choose", definition: "To pick out or select.", defTrans: "Escolher", example: "Choose the correct answer.", audioFront: "TTS: Choose", audioBack: "TTS: Choose the correct answer." },
                { term: "Come", definition: "To move towards a place.", defTrans: "Vir", example: "Come here, please.", audioFront: "TTS: Come", audioBack: "TTS: Come here, please." },
                { term: "Connect", definition: "To bring together into contact.", defTrans: "Conectar", example: "Technology connects us.", audioFront: "TTS: Connect", audioBack: "TTS: Technology connects us." },
                { term: "Create", definition: "To bring something into existence.", defTrans: "Criar", example: "Artists create beauty.", audioFront: "TTS: Create", audioBack: "TTS: Artists create beauty." },
                { term: "Decide", definition: "To come to a resolution.", defTrans: "Decidir", example: "Decide what you want.", audioFront: "TTS: Decide", audioBack: "TTS: Decide what you want." },
                { term: "Did", definition: "Past tense of 'do'.", defTrans: "Fez (Passado de Do)", example: "He did his homework.", audioFront: "TTS: Did", audioBack: "TTS: He did his homework." },
                { term: "Explore", definition: "To travel through an unfamiliar area.", defTrans: "Explorar", example: "Let's explore the city.", audioFront: "TTS: Explore", audioBack: "TTS: Let's explore the city." },
                { term: "Fail", definition: "To be unsuccessful in a goal.", defTrans: "Falhar / Reprovar", example: "Don't be afraid to fail.", audioFront: "TTS: Fail", audioBack: "TTS: Don't be afraid to fail." },
                { term: "Find", definition: "To discover by chance.", defTrans: "Encontrar", example: "I can't find my keys.", audioFront: "TTS: Find", audioBack: "TTS: I can't find my keys." },
                { term: "Fix", definition: "To mend or repair.", defTrans: "Consertar", example: "He can fix the computer.", audioFront: "TTS: Fix", audioBack: "TTS: He can fix the computer." },
                { term: "Follow", definition: "To go or move behind.", defTrans: "Seguir", example: "Follow the instructions.", audioFront: "TTS: Follow", audioBack: "TTS: Follow the instructions." },
                { term: "Give", definition: "To transfer possession to someone.", defTrans: "Dar", example: "Please give me a pen.", audioFront: "TTS: Give", audioBack: "TTS: Please give me a pen." },
                { term: "Go", definition: "To move from one place to another.", defTrans: "Ir", example: "Let's go home.", audioFront: "TTS: Go", audioBack: "TTS: Let's go home." },
                { term: "Grow", definition: "To increase in size.", defTrans: "Crescer", example: "Plants grow in the sun.", audioFront: "TTS: Grow", audioBack: "TTS: Plants grow in the sun." },
                { term: "Have", definition: "To possess, own, or hold.", defTrans: "Ter", example: "I have a question.", audioFront: "TTS: Have", audioBack: "TTS: I have a question." },
                { term: "Help", definition: "To make it easier for someone.", defTrans: "Ajudar", example: "Can you help me?", audioFront: "TTS: Help", audioBack: "TTS: Can you help me?" },
                { term: "Hurt", definition: "To cause physical pain.", defTrans: "Machucar / Doer", example: "My leg hurts.", audioFront: "TTS: Hurt", audioBack: "TTS: My leg hurts." },
                { term: "Improve", definition: "To make better.", defTrans: "Melhorar", example: "Practice to improve.", audioFront: "TTS: Improve", audioBack: "TTS: Practice to improve." },
                { term: "Increase", definition: "To become greater in size or amount.", defTrans: "Aumentar", example: "Prices increase every year.", audioFront: "TTS: Increase", audioBack: "TTS: Prices increase every year." },
                { term: "Invest", definition: "To put money or effort into something.", defTrans: "Investir", example: "Invest in your future.", audioFront: "TTS: Invest", audioBack: "TTS: Invest in your future." },
                { term: "Invite", definition: "To request someone to go somewhere.", defTrans: "Convidar", example: "I will invite my friends.", audioFront: "TTS: Invite", audioBack: "TTS: I will invite my friends." },
                { term: "Paint", definition: "To apply paint to a surface.", defTrans: "Pintar", example: "She likes to paint.", audioFront: "TTS: Paint", audioBack: "TTS: She likes to paint." },
                { term: "Practice", definition: "To perform an activity repeatedly.", defTrans: "Praticar", example: "We practice English.", audioFront: "TTS: Practice", audioBack: "TTS: We practice English." },
                { term: "Use", definition: "To employ something for a purpose.", defTrans: "Usar", example: "Use your imagination.", audioFront: "TTS: Use", audioBack: "TTS: Use your imagination." },

                // --- Vocabulary: Language, Work & Ideas ---
                { term: "Communication", definition: "The exchanging of information.", defTrans: "Comunicação", example: "Communication is key.", audioFront: "TTS: Communication", audioBack: "TTS: Communication is key." },
                { term: "English", definition: "The language of England.", defTrans: "Inglês", example: "Do you speak English?", audioFront: "TTS: English", audioBack: "TTS: Do you speak English?" },
                { term: "Language", definition: "A method of human communication.", defTrans: "Língua / Idioma", example: "English is a global language.", audioFront: "TTS: Language", audioBack: "TTS: English is a global language." },
                { term: "Pronoun", definition: "A word that substitutes a noun.", defTrans: "Pronome", example: "\"He\" is a pronoun.", audioFront: "TTS: Pronoun", audioBack: "TTS: He is a pronoun." },
                { term: "Speech", definition: "A formal address to an audience.", defTrans: "Discurso / Fala", example: "The president gave a speech.", audioFront: "TTS: Speech", audioBack: "TTS: The president gave a speech." },
                { term: "Word", definition: "A single element of speech or writing.", defTrans: "Palavra", example: "What does this word mean?", audioFront: "TTS: Word", audioBack: "TTS: What does this word mean?" },
                { term: "Writing", definition: "The activity of marking words on paper.", defTrans: "Escrita", example: "Her writing is beautiful.", audioFront: "TTS: Writing", audioBack: "TTS: Her writing is beautiful." },
                { term: "Career", definition: "An occupation undertaken for a significant period.", defTrans: "Carreira", example: "Focus on your career.", audioFront: "TTS: Career", audioBack: "TTS: Focus on your career." },
                { term: "Company", definition: "A commercial business.", defTrans: "Empresa", example: "He works for a big company.", audioFront: "TTS: Company", audioBack: "TTS: He works for a big company." },
                { term: "Conference", definition: "A formal meeting for discussion.", defTrans: "Conferência", example: "I attended a conference.", audioFront: "TTS: Conference", audioBack: "TTS: I attended a conference." },
                { term: "Course", definition: "A series of lectures or lessons.", defTrans: "Curso", example: "I am taking an English course.", audioFront: "TTS: Course", audioBack: "TTS: I am taking an English course." },
                { term: "Exercise", definition: "Activity requiring physical effort.", defTrans: "Exercício", example: "This exercise is easy.", audioFront: "TTS: Exercise", audioBack: "TTS: This exercise is easy." },
                { term: "Student", definition: "A person studying at a school.", defTrans: "Estudante", example: "The student asked a question.", audioFront: "TTS: Student", audioBack: "TTS: The student asked a question." },
                { term: "Topic", definition: "A matter dealt with in a text.", defTrans: "Tópico / Assunto", example: "The topic is interesting.", audioFront: "TTS: Topic", audioBack: "TTS: The topic is interesting." },
                { term: "Content", definition: "The material in a speech or work.", defTrans: "Conteúdo", example: "The content is useful.", audioFront: "TTS: Content", audioBack: "TTS: The content is useful." },
                { term: "Culture", definition: "The customs and arts of a nation.", defTrans: "Cultura", example: "I love learning about culture.", audioFront: "TTS: Culture", audioBack: "TTS: I love learning about culture." },
                { term: "Evidence", definition: "Facts indicating if a belief is true.", defTrans: "Evidência", example: "Where is the evidence?", audioFront: "TTS: Evidence", audioBack: "TTS: Where is the evidence?" },
                { term: "Future", definition: "Time following the moment of speaking.", defTrans: "Futuro", example: "Think about your future.", audioFront: "TTS: Future", audioBack: "TTS: Think about your future." },
                { term: "Idea", definition: "A thought or suggestion.", defTrans: "Ideia", example: "That is a great idea!", audioFront: "TTS: Idea", audioBack: "TTS: That is a great idea!" },
                { term: "Influence", definition: "The capacity to have an effect on character.", defTrans: "Influência", example: "He has a lot of influence.", audioFront: "TTS: Influence", audioBack: "TTS: He has a lot of influence." },
                { term: "Life", definition: "The existence of an individual.", defTrans: "Vida", example: "Life is beautiful.", audioFront: "TTS: Life", audioBack: "TTS: Life is beautiful." },
                { term: "Opinion", definition: "A view or judgment about something.", defTrans: "Opinião", example: "In my opinion, it's good.", audioFront: "TTS: Opinion", audioBack: "TTS: In my opinion, it's good." },
                { term: "Path", definition: "A course of action.", defTrans: "Caminho", example: "Choose the right path.", audioFront: "TTS: Path", audioBack: "TTS: Choose the right path." },
                { term: "Plan", definition: "A detailed proposal for doing something.", defTrans: "Plano", example: "What is your plan?", audioFront: "TTS: Plan", audioBack: "TTS: What is your plan?" },
                { term: "Popularity", definition: "The state of being liked by many.", defTrans: "Popularidade", example: "Its popularity is growing.", audioFront: "TTS: Popularity", audioBack: "TTS: Its popularity is growing." },
                { term: "Pretext", definition: "A false reason given for an action.", defTrans: "Pretexto", example: "It was just a pretext.", audioFront: "TTS: Pretext", audioBack: "TTS: It was just a pretext." },
                { term: "Reason", definition: "A cause or explanation.", defTrans: "Razão / Motivo", example: "What is the reason?", audioFront: "TTS: Reason", audioBack: "TTS: What is the reason?" },
                { term: "Role", definition: "The function assumed by a person.", defTrans: "Papel (função)", example: "English plays a big role.", audioFront: "TTS: Role", audioBack: "TTS: English plays a big role." },
                { term: "Technology", definition: "Application of scientific knowledge.", defTrans: "Tecnologia", example: "Technology helps us.", audioFront: "TTS: Technology", audioBack: "TTS: Technology helps us." },
                { term: "Time", definition: "The continued progress of existence.", defTrans: "Tempo", example: "We don't have much time.", audioFront: "TTS: Time", audioBack: "TTS: We don't have much time." },

                // --- General Nouns ---
                { term: "Book", definition: "A written work with pages.", defTrans: "Livro", example: "Read this book.", audioFront: "TTS: Book", audioBack: "TTS: Read this book." },
                { term: "Burger", definition: "A hamburger.", defTrans: "Hambúrguer", example: "I ate a burger.", audioFront: "TTS: Burger", audioBack: "TTS: I ate a burger." },
                { term: "Costume", definition: "A set of clothes for a specific style.", defTrans: "Fantasia", example: "Nice Halloween costume.", audioFront: "TTS: Costume", audioBack: "TTS: Nice Halloween costume." },
                { term: "Gift", definition: "A present given willingly.", defTrans: "Presente", example: "I bought a gift.", audioFront: "TTS: Gift", audioBack: "TTS: I bought a gift." },
                { term: "House", definition: "A building for habitation.", defTrans: "Casa", example: "My house is near.", audioFront: "TTS: House", audioBack: "TTS: My house is near." },
                { term: "Pen", definition: "An instrument for writing with ink.", defTrans: "Caneta", example: "Can I borrow a pen?", audioFront: "TTS: Pen", audioBack: "TTS: Can I borrow a pen?" },
                { term: "Pitch", definition: "An area used for outdoor team games.", defTrans: "Campo (de futebol)", example: "The players are on the pitch.", audioFront: "TTS: Pitch", audioBack: "TTS: The players are on the pitch." },
                { term: "Place", definition: "A particular position or point.", defTrans: "Lugar", example: "This is a nice place.", audioFront: "TTS: Place", audioBack: "TTS: This is a nice place." },
                { term: "Sandwich", definition: "Two pieces of bread with filling.", defTrans: "Sanduíche", example: "I made a sandwich.", audioFront: "TTS: Sandwich", audioBack: "TTS: I made a sandwich." },
                { term: "Storm", definition: "Violent weather with wind and rain.", defTrans: "Tempestade", example: "The storm was scary.", audioFront: "TTS: Storm", audioBack: "TTS: The storm was scary." },
                { term: "Trade", definition: "Buying and selling goods.", defTrans: "Comércio", example: "International trade is important.", audioFront: "TTS: Trade", audioBack: "TTS: International trade is important." },
                { term: "Tree", definition: "A woody perennial plant.", defTrans: "Árvore", example: "That tree is old.", audioFront: "TTS: Tree", audioBack: "TTS: That tree is old." },
                { term: "Weather", definition: "The state of the atmosphere.", defTrans: "Clima / Tempo", example: "How is the weather?", audioFront: "TTS: Weather", audioBack: "TTS: How is the weather?" },
                { term: "World", definition: "The earth and its features.", defTrans: "Mundo", example: "We live in a big world.", audioFront: "TTS: World", audioBack: "TTS: We live in a big world." },

                // --- Wh- words & Linking Words ---
                { term: "Whoever", definition: "Any person who.", defTrans: "Quem quer que seja", example: "Whoever did this is smart.", audioFront: "TTS: Whoever", audioBack: "TTS: Whoever did this is smart." },
                { term: "Whatever", definition: "Anything; no matter what.", defTrans: "O que quer que seja", example: "Do whatever you want.", audioFront: "TTS: Whatever", audioBack: "TTS: Do whatever you want." },
                { term: "Whichever", definition: "Any one from a set.", defTrans: "Qualquer um (que seja)", example: "Choose whichever you like.", audioFront: "TTS: Whichever", audioBack: "TTS: Choose whichever you like." },
                { term: "Wherever", definition: "In any place.", defTrans: "Onde quer que seja", example: "I'll go wherever you go.", audioFront: "TTS: Wherever", audioBack: "TTS: I'll go wherever you go." },
                { term: "Whenever", definition: "At any time.", defTrans: "Quando quer que seja", example: "Call me whenever.", audioFront: "TTS: Whenever", audioBack: "TTS: Call me whenever." },
                { term: "However", definition: "In whatever way.", defTrans: "Como quer que seja / De qualquer maneira", example: "Do it however you can.", audioFront: "TTS: However", audioBack: "TTS: Do it however you can." },
                { term: "Owing to / Due to", definition: "Because of; on account of.", defTrans: "Devido a (Causa)", example: "Delayed due to rain.", audioFront: "TTS: Owing to. Due to.", audioBack: "TTS: Delayed due to rain." },
                { term: "Because of", definition: "By reason of.", defTrans: "Por causa de (Causa)", example: "I stayed because of you.", audioFront: "TTS: Because of", audioBack: "TTS: I stayed because of you." },
                { term: "Since / As", definition: "Used to indicate a reason.", defTrans: "Já que / Como (Causa)", example: "Since you are here, help me.", audioFront: "TTS: Since. As.", audioBack: "TTS: Since you are here, help me." },
                { term: "Therefore / Thus / So", definition: "For that reason.", defTrans: "Portanto / Assim / Então (Consequência)", example: "I think, therefore I am.", audioFront: "TTS: Therefore. Thus. So.", audioBack: "TTS: I think, therefore I am." },
                { term: "Consequently / As a result", definition: "As an effect.", defTrans: "Consequentemente / Como resultado", example: "He studied; as a result, he passed.", audioFront: "TTS: Consequently. As a result.", audioBack: "TTS: He studied; as a result, he passed." },

                // --- Phrases & Expressions ---
                { term: "That makes sense", definition: "Used to say something is logical.", defTrans: "Isso faz sentido", example: "Ah, that makes sense now.", audioFront: "TTS: That makes sense", audioBack: "TTS: Ah, that makes sense now." },
                { term: "In my opinion", definition: "Used to introduce a belief.", defTrans: "Na minha opinião", example: "In my opinion, it is good.", audioFront: "TTS: In my opinion", audioBack: "TTS: In my opinion, it is good." },
                { term: "In conclusion", definition: "Lastly; to sum up.", defTrans: "Em conclusão", example: "In conclusion, we must act.", audioFront: "TTS: In conclusion", audioBack: "TTS: In conclusion, we must act." },
                { term: "Thanks to", definition: "Because of (positive).", defTrans: "Graças a", example: "Thanks to you, we won.", audioFront: "TTS: Thanks to", audioBack: "TTS: Thanks to you, we won." },
                { term: "How important is...?", definition: "Asking about significance.", defTrans: "Quão importante é...?", example: "How important is English?", audioFront: "TTS: How important is...?", audioBack: "TTS: How important is English?" },
                { term: "How useful is...?", definition: "Asking about utility.", defTrans: "Quão útil é...?", example: "How useful is this tool?", audioFront: "TTS: How useful is...?", audioBack: "TTS: How useful is this tool?" },
                { term: "By ourselves / by myself", definition: "Without help; alone.", defTrans: "Sozinhos / Sozinho", example: "We did it by ourselves.", audioFront: "TTS: By ourselves", audioBack: "TTS: We did it by ourselves." },
                { term: "Tell me more", definition: "A request for more info.", defTrans: "Conte-me mais", example: "That's interesting, tell me more.", audioFront: "TTS: Tell me more", audioBack: "TTS: That's interesting, tell me more." },
                { term: "Have a point", definition: "To have a valid opinion.", defTrans: "Ter razão / Ter um ponto", example: "You have a point there.", audioFront: "TTS: Have a point", audioBack: "TTS: You have a point there." },
                { term: "Field of study", definition: "Area of academic interest.", defTrans: "Área de estudo", example: "My field of study is biology.", audioFront: "TTS: Field of study", audioBack: "TTS: My field of study is biology." },
                { term: "A lot of people", definition: "Many individuals.", defTrans: "Muitas pessoas", example: "A lot of people speak English.", audioFront: "TTS: A lot of people", audioBack: "TTS: A lot of people speak English." },

                // --- Grammar Points ---
                { term: "Definite Article (The)", definition: "Used for specific nouns.", defTrans: "O, A, Os, As (Específico)", example: "The book on the table.", audioFront: "TTS: Definite Article (The)", audioBack: "TTS: The book on the table." },
                { term: "Indefinite Article (A/An)", definition: "Used for general nouns.", defTrans: "Um, Uma (Geral)", example: "I saw an elephant.", audioFront: "TTS: Indefinite Article (A/An)", audioBack: "TTS: I saw an elephant." },
                { term: "Subject Pronouns", definition: "Perform the action (I, You, He...).", defTrans: "Pronomes Sujeito (Eu, Tu, Ele...)", example: "She loves music.", audioFront: "TTS: Subject Pronouns", audioBack: "TTS: She loves music." },
                { term: "Object Pronouns", definition: "Receive the action (Me, You, Him...).", defTrans: "Pronomes Objeto (Me, Te, O...)", example: "Call me later.", audioFront: "TTS: Object Pronouns", audioBack: "TTS: Call me later." },
                { term: "Possessive Adjectives", definition: "Show ownership before noun (My, Your...).", defTrans: "Adjetivos Possessivos (Meu, Seu...)", example: "This is my car.", audioFront: "TTS: Possessive Adjectives", audioBack: "TTS: This is my car." },
                { term: "Possessive Pronouns", definition: "Replace noun to show ownership (Mine, Yours...).", defTrans: "Pronomes Possessivos (O meu, O seu...)", example: "This car is mine.", audioFront: "TTS: Possessive Pronouns", audioBack: "TTS: This car is mine." },
                { term: "Reflexive Pronouns", definition: "Subject and object are same (Myself, Yourself...).", defTrans: "Pronomes Reflexivos (Me, Se, Si...)", example: "I cut myself.", audioFront: "TTS: Reflexive Pronouns", audioBack: "TTS: I cut myself." },
                { term: "How + Adjective", definition: "Ask about degree (How old...).", defTrans: "Pergunta sobre grau/nível", example: "How old are you?", audioFront: "TTS: How + Adjective", audioBack: "TTS: How old are you?" }
            ]
        }
    ],

// ======================================================
    // GLOSSARY (For Tooltips)
    // ======================================================
    glossary: [
        // Page 1: Step 1 Context
        { topic: "Context", term: "how-important-is", definition: "A question asking about the degree of significance.", translation: "Quão importante é" },
        { topic: "Context", term: "in-my-opinion", definition: "Used to introduce a personal belief or judgment.", translation: "Na minha opinião" },
        { topic: "Context", term: "that-makes-sense", definition: "Used to say that something is logical or understandable.", translation: "Isso faz sentido" },
        { topic: "Context", term: "owing-to", definition: "Because of or on account of.", translation: "Devido a" },
        { topic: "Context", term: "taught-myself", definition: "To learn a skill without a teacher (Reflexive action).", translation: "Ensinei a mim mesmo" },
        { topic: "Context", term: "have-a-point", definition: "To have a valid or meaningful opinion.", translation: "Ter razão / Ter um ponto" },
        { topic: "Context", term: "career", definition: "An occupation undertaken for a significant period.", translation: "Carreira" },
        { topic: "Context", term: "company", definition: "A commercial business.", translation: "Empresa" },
        { topic: "Context", term: "language", definition: "The principal method of human communication.", translation: "Língua / Idioma" },
        { topic: "Context", term: "communication", definition: "The exchanging of information or news.", translation: "Comunicação" },
        { topic: "Context", term: "wherever", definition: "In or to whatever place.", translation: "Onde quer que seja" },
        { topic: "Context", term: "influence", definition: "The capacity to have an effect on character.", translation: "Influência" },
        { topic: "Context", term: "whoever", definition: "The person or people who; any person who.", translation: "Quem quer que seja" },
        { topic: "Context", term: "consequently", definition: "As a result.", translation: "Consequentemente" },
        { topic: "Context", term: "improve", definition: "To make or become better.", translation: "Melhorar" },
        { topic: "Context", term: "invest", definition: "To put money or effort into something.", translation: "Investir" },
        { topic: "Context", term: "therefore", definition: "For that reason; consequently.", translation: "Portanto" },
        { topic: "Context", term: "practice", definition: "To perform an activity repeatedly.", translation: "Praticar" },
        { topic: "Context", term: "speech", definition: "A formal address or discourse.", translation: "Discurso / Fala" },

        // Page 2: Verbs (Communication & Mental)
        { topic: "Verbs (Comm & Mental)", term: "Agree", definition: "To have the same opinion about something.", translation: "Concordar" },
        { topic: "Verbs (Comm & Mental)", term: "Consider", definition: "To think carefully about something.", translation: "Considerar" },
        { topic: "Verbs (Comm & Mental)", term: "Discuss", definition: "To talk about something with another person.", translation: "Discutir / Debater" },
        { topic: "Verbs (Comm & Mental)", term: "Explain", definition: "To make an idea clear to someone.", translation: "Explicar" },
        { topic: "Verbs (Comm & Mental)", term: "Feel", definition: "To experience an emotion or sensation.", translation: "Sentir" },
        { topic: "Verbs (Comm & Mental)", term: "Hear", definition: "To perceive sound with the ear.", translation: "Ouvir" },
        { topic: "Verbs (Comm & Mental)", term: "Know", definition: "To be aware of through observation.", translation: "Saber / Conhecer" },
        { topic: "Verbs (Comm & Mental)", term: "Learn", definition: "To gain knowledge or skill.", translation: "Aprender" },
        { topic: "Verbs (Comm & Mental)", term: "Like", definition: "To find agreeable or enjoyable.", translation: "Gostar" },
        { topic: "Verbs (Comm & Mental)", term: "Love", definition: "To have a deep affection for.", translation: "Amar" },
        { topic: "Verbs (Comm & Mental)", term: "Motivate", definition: "To provide a motive for doing something.", translation: "Motivar" },
        { topic: "Verbs (Comm & Mental)", term: "Need", definition: "To require something essential.", translation: "Precisar" },
        { topic: "Verbs (Comm & Mental)", term: "Prefer", definition: "To like one thing better than another.", translation: "Preferir" },
        { topic: "Verbs (Comm & Mental)", term: "Read", definition: "To look at and comprehend written matter.", translation: "Ler" },
        { topic: "Verbs (Comm & Mental)", term: "Speak", definition: "To say something in order to convey information.", translation: "Falar" },
        { topic: "Verbs (Comm & Mental)", term: "Study", definition: "To devote time to acquiring knowledge.", translation: "Estudar" },
        { topic: "Verbs (Comm & Mental)", term: "Surprise", definition: "To cause someone to feel mild astonishment.", translation: "Surpreender" },
        { topic: "Verbs (Comm & Mental)", term: "Talk", definition: "To speak in order to give information.", translation: "Conversar" },
        { topic: "Verbs (Comm & Mental)", term: "Tell", definition: "To communicate information or news.", translation: "Contar / Dizer" },
        { topic: "Verbs (Comm & Mental)", term: "Think", definition: "To have a particular opinion or belief.", translation: "Pensar / Achar" },
        { topic: "Verbs (Comm & Mental)", term: "Want", definition: "To have a desire to possess something.", translation: "Querer" },
        { topic: "Verbs (Comm & Mental)", term: "Welcome", definition: "To greet someone arriving politely.", translation: "Receber / Dar as boas-vindas" },
        { topic: "Verbs (Comm & Mental)", term: "Work", definition: "To be engaged in physical or mental activity.", translation: "Trabalhar" },

        // Page 3: Verbs (Action & Change)
        { topic: "Verbs (Action)", term: "Be", definition: "To exist or occur.", translation: "Ser / Estar" },
        { topic: "Verbs (Action)", term: "Become", definition: "To begin to be; turn into.", translation: "Tornar-se" },
        { topic: "Verbs (Action)", term: "Buy", definition: "To obtain in exchange for payment.", translation: "Comprar" },
        { topic: "Verbs (Action)", term: "Choose", definition: "To pick out or select.", translation: "Escolher" },
        { topic: "Verbs (Action)", term: "Come", definition: "To move towards a place.", translation: "Vir" },
        { topic: "Verbs (Action)", term: "Connect", definition: "To bring together into contact.", translation: "Conectar" },
        { topic: "Verbs (Action)", term: "Create", definition: "To bring something into existence.", translation: "Criar" },
        { topic: "Verbs (Action)", term: "Decide", definition: "To come to a resolution.", translation: "Decidir" },
        { topic: "Verbs (Action)", term: "Did", definition: "Past tense of 'do'.", translation: "Fez (Passado de Do)" },
        { topic: "Verbs (Action)", term: "Explore", definition: "To travel through an unfamiliar area.", translation: "Explorar" },
        { topic: "Verbs (Action)", term: "Fail", definition: "To be unsuccessful in a goal.", translation: "Falhar / Reprovar" },
        { topic: "Verbs (Action)", term: "Find", definition: "To discover by chance.", translation: "Encontrar" },
        { topic: "Verbs (Action)", term: "Fix", definition: "To mend or repair.", translation: "Consertar" },
        { topic: "Verbs (Action)", term: "Follow", definition: "To go or move behind.", translation: "Seguir" },
        { topic: "Verbs (Action)", term: "Give", definition: "To transfer possession to someone.", translation: "Dar" },
        { topic: "Verbs (Action)", term: "Go", definition: "To move from one place to another.", translation: "Ir" },
        { topic: "Verbs (Action)", term: "Grow", definition: "To increase in size.", translation: "Crescer" },
        { topic: "Verbs (Action)", term: "Have", definition: "To possess, own, or hold.", translation: "Ter" },
        { topic: "Verbs (Action)", term: "Help", definition: "To make it easier for someone.", translation: "Ajudar" },
        { topic: "Verbs (Action)", term: "Hurt", definition: "To cause physical pain.", translation: "Machucar / Doer" },
        { topic: "Verbs (Action)", term: "Improve", definition: "To make better.", translation: "Melhorar" },
        { topic: "Verbs (Action)", term: "Increase", definition: "To become greater in size or amount.", translation: "Aumentar" },
        { topic: "Verbs (Action)", term: "Invest", definition: "To put money or effort into something.", translation: "Investir" },
        { topic: "Verbs (Action)", term: "Invite", definition: "To request someone to go somewhere.", translation: "Convidar" },
        { topic: "Verbs (Action)", term: "Paint", definition: "To apply paint to a surface.", translation: "Pintar" },
        { topic: "Verbs (Action)", term: "Practice", definition: "To perform an activity repeatedly.", translation: "Praticar" },
        { topic: "Verbs (Action)", term: "Use", definition: "To employ something for a purpose.", translation: "Usar" },

        // Page 4: Language, Work & Ideas
        { topic: "Vocab (Lang/Work)", term: "English", definition: "The language of England.", translation: "Inglês" },
        { topic: "Vocab (Lang/Work)", term: "Pronoun", definition: "A word that substitutes a noun.", translation: "Pronome" },
        { topic: "Vocab (Lang/Work)", term: "Word", definition: "A single element of speech or writing.", translation: "Palavra" },
        { topic: "Vocab (Lang/Work)", term: "Writing", definition: "The activity of marking words on paper.", translation: "Escrita" },
        { topic: "Vocab (Lang/Work)", term: "Conference", definition: "A formal meeting for discussion.", translation: "Conferência" },
        { topic: "Vocab (Lang/Work)", term: "Course", definition: "A series of lectures or lessons.", translation: "Curso" },
        { topic: "Vocab (Lang/Work)", term: "Exercise", definition: "Activity requiring physical effort.", translation: "Exercício" },
        { topic: "Vocab (Lang/Work)", term: "Student", definition: "A person studying at a school.", translation: "Estudante" },
        { topic: "Vocab (Lang/Work)", term: "Topic", definition: "A matter dealt with in a text.", translation: "Tópico / Assunto" },
        { topic: "Vocab (Lang/Work)", term: "Content", definition: "The material in a speech or work.", translation: "Conteúdo" },
        { topic: "Vocab (Lang/Work)", term: "Culture", definition: "The customs and arts of a nation.", translation: "Cultura" },
        { topic: "Vocab (Lang/Work)", term: "Evidence", definition: "Facts indicating if a belief is true.", translation: "Evidência" },
        { topic: "Vocab (Lang/Work)", term: "Future", definition: "Time following the moment of speaking.", translation: "Futuro" },
        { topic: "Vocab (Lang/Work)", term: "Idea", definition: "A thought or suggestion.", translation: "Ideia" },
        { topic: "Vocab (Lang/Work)", term: "Life", definition: "The existence of an individual.", translation: "Vida" },
        { topic: "Vocab (Lang/Work)", term: "Opinion", definition: "A view or judgment about something.", translation: "Opinião" },
        { topic: "Vocab (Lang/Work)", term: "Path", definition: "A course of action.", translation: "Caminho" },
        { topic: "Vocab (Lang/Work)", term: "Plan", definition: "A detailed proposal for doing something.", translation: "Plano" },
        { topic: "Vocab (Lang/Work)", term: "Popularity", definition: "The state of being liked by many.", translation: "Popularidade" },
        { topic: "Vocab (Lang/Work)", term: "Pretext", definition: "A false reason given for an action.", translation: "Pretexto" },
        { topic: "Vocab (Lang/Work)", term: "Reason", definition: "A cause or explanation.", translation: "Razão / Motivo" },
        { topic: "Vocab (Lang/Work)", term: "Role", definition: "The function assumed by a person.", translation: "Papel (função)" },
        { topic: "Vocab (Lang/Work)", term: "Technology", definition: "Application of scientific knowledge.", translation: "Tecnologia" },
        { topic: "Vocab (Lang/Work)", term: "Time", definition: "The continued progress of existence.", translation: "Tempo" },

        // Page 5: General Nouns
        { topic: "Nouns", term: "Book", definition: "A written work with pages.", translation: "Livro" },
        { topic: "Nouns", term: "Burger", definition: "A hamburger.", translation: "Hambúrguer" },
        { topic: "Nouns", term: "Costume", definition: "A set of clothes for a specific style.", translation: "Fantasia" },
        { topic: "Nouns", term: "Gift", definition: "A present given willingly.", translation: "Presente" },
        { topic: "Nouns", term: "House", definition: "A building for habitation.", translation: "Casa" },
        { topic: "Nouns", term: "Pen", definition: "An instrument for writing with ink.", translation: "Caneta" },
        { topic: "Nouns", term: "Pitch", definition: "An area used for outdoor team games.", translation: "Campo (de futebol)" },
        { topic: "Nouns", term: "Place", definition: "A particular position or point.", translation: "Lugar" },
        { topic: "Nouns", term: "Sandwich", definition: "Two pieces of bread with filling.", translation: "Sanduíche" },
        { topic: "Nouns", term: "Storm", definition: "Violent weather with wind and rain.", translation: "Tempestade" },
        { topic: "Nouns", term: "Trade", definition: "Buying and selling goods.", translation: "Comércio" },
        { topic: "Nouns", term: "Tree", definition: "A woody perennial plant.", translation: "Árvore" },
        { topic: "Nouns", term: "Weather", definition: "The state of the atmosphere.", translation: "Clima / Tempo" },
        { topic: "Nouns", term: "World", definition: "The earth and its features.", translation: "Mundo" },

        // Page 6: Wh- & Linking
        { topic: "Wh- & Linking", term: "Whatever", definition: "Anything; no matter what.", translation: "O que quer que seja" },
        { topic: "Wh- & Linking", term: "Whichever", definition: "Any one from a set.", translation: "Qualquer um (que seja)" },
        { topic: "Wh- & Linking", term: "Whenever", definition: "At any time.", translation: "Quando quer que seja" },
        { topic: "Wh- & Linking", term: "However", definition: "In whatever way.", translation: "Como quer que seja / De qualquer maneira" },
        { topic: "Wh- & Linking", term: "due-to", definition: "Caused by or ascribable to.", translation: "Devido a" },
        { topic: "Wh- & Linking", term: "because-of", definition: "On account of; by reason of.", translation: "Por causa de" },
        { topic: "Wh- & Linking", term: "since", definition: "Used to indicate a reason.", translation: "Já que" },
        { topic: "Wh- & Linking", term: "as", definition: "Used to indicate the reason for something.", translation: "Como / Já que" },
        { topic: "Wh- & Linking", term: "as-a-consequence", definition: "As a result or effect.", translation: "Como consequência" },
        { topic: "Wh- & Linking", term: "as-a-result", definition: "Because of something that has happened.", translation: "Como resultado" },
        { topic: "Wh- & Linking", term: "thus", definition: "As a result or consequence of this; therefore.", translation: "Assim / Desta forma" },
        { topic: "Wh- & Linking", term: "so", definition: "And for this reason; therefore.", translation: "Então" },

        // Page 7: Phrases
        { topic: "Phrases", term: "in-conclusion", definition: "Lastly; to sum up.", translation: "Em conclusão" },
        { topic: "Phrases", term: "thanks-to", definition: "Due to; because of (often positive).", translation: "Graças a" },
        { topic: "Phrases", term: "how-useful-is", definition: "Asking about utility.", translation: "Quão útil é...?" },
        { topic: "Phrases", term: "by-ourselves", definition: "Without help; alone.", translation: "Sozinhos" },
        { topic: "Phrases", term: "tell-me-more", definition: "A request for more info.", translation: "Conte-me mais" },
        { topic: "Phrases", term: "field-of-study", definition: "Area of academic interest.", translation: "Área de estudo" },
        { topic: "Phrases", term: "a-lot-of-people", definition: "Many individuals.", translation: "Muitas pessoas" },

        // Page 8: Grammar
        { topic: "Grammar", term: "Definite Article (The)", definition: "Used for specific nouns.", translation: "O, A, Os, As (Específico)" },
        { topic: "Grammar", term: "Indefinite Article (A/An)", definition: "Used for general nouns.", translation: "Um, Uma (Geral)" },
        { topic: "Grammar", term: "Subject Pronouns", definition: "Perform the action (I, You, He...).", translation: "Pronomes Sujeito" },
        { topic: "Grammar", term: "Object Pronouns", definition: "Receive the action (Me, You, Him...).", translation: "Pronomes Objeto" },
        { topic: "Grammar", term: "Possessive Adjectives", definition: "Show ownership before noun (My, Your...).", translation: "Adjetivos Possessivos" },
        { topic: "Grammar", term: "Possessive Pronouns", definition: "Replace noun to show ownership (Mine, Yours...).", translation: "Pronomes Possessivos" },
        { topic: "Grammar", term: "Reflexive Pronouns", definition: "Subject and object are same (Myself, Yourself...).", translation: "Pronomes Reflexivos" },
        { topic: "Grammar", term: "How + Adjective", definition: "Ask about degree (How old...).", translation: "Pergunta sobre grau/nível" }
    ]
});