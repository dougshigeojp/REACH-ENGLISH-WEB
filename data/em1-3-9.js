/*/**
 * REACH English - LESSON DATA em1-3-9
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em1-3-9", 
    grade: "High School 1st Grade",       
    bimester: "3",   
    chapter: "9",    
    chapterTitle: "Brainiac Power: Discovering and Developing Your Intelligences", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Identify and discuss the [8 types of intelligence](tooltip:types-of-intelligence) based on [Howard Gardner's](tooltip:gardner) theory.<br>• Master all four [Conditionals](tooltip:conditional-sentences) (Zero, First, Second, and Third).<br>• Use [correlative conjunctions](tooltip:correlative-conjunctions) (Both...and, Either...or, Neither...nor).<br>• Express [purpose](tooltip:purpose) using linking words (So that, In order to, So as to).<br>• Use [phrasal verbs](tooltip:phrasal-verb) with TURN.",
            welcome: "Hello, future geniuses! I'm Mr. D!<br>Have you ever been told you are \"smart\"? But what does that really mean? Is it just a math grade? Not at all! Today, we are opening the door to your own [brain](tooltip:brain). We’ll discover that everyone is [intelligent](tooltip:smart) in different ways. Maybe you are a natural at [music](tooltip:musical-intelligence) or great at [understanding](tooltip:understand) people. We will master complex grammar so that you can talk about your [potential](tooltip:potential) like a pro. Get ready to discover your inner Brainiac! Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Identify and discuss the 8 types of intelligence based on Howard Gardner's theory. Master all four Conditionals: Zero, First, Second, and Third. Use correlative conjunctions like Both and, Either or, and Neither nor. Express purpose using linking words like So that, In order to, and So as to. Use phrasal verbs with TURN.",
                welcome: "TTS: Hello, future geniuses! I'm Mr. D! Have you ever been told you are smart? But what does that really mean? Is it just a math grade? Not at all! Today, we are opening the door to your own brain. We’ll discover that everyone is intelligent in different ways. Maybe you are a natural at music or great at understanding people. We will master complex grammar so that you can talk about your potential like a pro. Get ready to discover your inner Brainiac! Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "(Albert and Celine are in the school library. Albert is staring at a complicated logic puzzle on his tablet, looking slightly defeated. Celine is reading a psychology magazine.)", 
            contextAudio: "audio/em1-3-9/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "I feel [frustrated](tooltip:frustrated), Celine. I’m not doing well in math class. I [suppose](tooltip:suppose) I'm just not [intelligent](tooltip:smart)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Hey, don't [neglect](tooltip:neglect) your other [skills](tooltip:skill)! Remember [Multiple Intelligences](tooltip:multiple-intelligences)? If you [practice](tooltip:practice) a skill every day, you [get better](tooltip:get-better). It’s how the [brain](tooltip:brain) works!" 
                },
                { 
                    speaker: "Albert", 
                    text: "Maybe... but I failed the logic test yesterday. If I [had studied](tooltip:third-conditional) harder, I [would have passed](tooltip:third-conditional). I need to [focus](tooltip:focus) more." 
                },
                { 
                    speaker: "Celine", 
                    text: "I [understand](tooltip:understand), but you have amazing [Musical Intelligence](tooltip:musical-intelligence). You can play any [instrument](tooltip:instrument). [Both](tooltip:both-and) logic [and](tooltip:both-and) art are important." 
                },
                { 
                    speaker: "Albert", 
                    text: "If I [were](tooltip:second-conditional) you, I [would be](tooltip:second-conditional) optimistic too. I’ll join a [study group](tooltip:study-group) [in order to](tooltip:in-order-to) [improve](tooltip:improve)." 
                },
                { 
                    speaker: "Celine", 
                    text: "That’s a great choice! I’ll help you [so that](tooltip:so-that) you can [achieve](tooltip:achieve) your [goals](tooltip:goal). [Neither](tooltip:neither-nor) laziness [nor](tooltip:neither-nor) distraction will stop us." 
                },
                { 
                    speaker: "Albert", 
                    text: "Thanks! I want to [turn](tooltip:turn-into) my [potential](tooltip:potential) [into](tooltip:turn-into) [knowledge](tooltip:knowledge)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Perfect! Let’s work on this. Your grades will [turn around](tooltip:turn-around) soon!" 
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
                    title: "Verbs A-L",
                    audio: "TTS: Accept. Agree. Apologize. Ask. Be. Believe. Choose. Come. Communicate. Compare. Complain. Concentrate. Contribute. Create. Decide. Develop. Discover. Disturb. Do. Encourage. Expand. Explain. Explore. Fail. Feel. Find. Focus. Get. Give up. Go. Happen. Have. Hear. Help. Ignore. Imagine. Improve. Invent. Join. Keep. Know. Lead to. Learn. Leave. Love.",
                    items: [
                        { term: "Accept", trans: "aceitar" },
                        { term: "Agree", trans: "concordar" },
                        { term: "Apologize", trans: "desculpar-se" },
                        { term: "Ask", trans: "perguntar / pedir" },
                        { term: "Be", trans: "ser / estar" },
                        { term: "Believe", trans: "acreditar" },
                        { term: "Choose", trans: "escolher" },
                        { term: "Come", trans: "vir" },
                        { term: "Communicate", trans: "comunicar" },
                        { term: "Compare", trans: "comparar" },
                        { term: "Complain", trans: "reclamar" },
                        { term: "Concentrate", trans: "concentrar-se" },
                        { term: "Contribute", trans: "contribuir" },
                        { term: "Create", trans: "criar" },
                        { term: "Decide", trans: "decidir" },
                        { term: "Develop", trans: "desenvolver" },
                        { term: "Discover", trans: "descobrir" },
                        { term: "Disturb", trans: "perturbar" },
                        { term: "Do", trans: "fazer" },
                        { term: "Encourage", trans: "encorajar" },
                        { term: "Expand", trans: "expandir" },
                        { term: "Explain", trans: "explicar" },
                        { term: "Explore", trans: "explorar" },
                        { term: "Fail", trans: "falhar / reprovar" },
                        { term: "Feel", trans: "sentir" },
                        { term: "Find", trans: "encontrar" },
                        { term: "Focus", trans: "focar" },
                        { term: "Get", trans: "conseguir / obter" },
                        { term: "Give up", trans: "desistir" },
                        { term: "Go", trans: "ir" },
                        { term: "Happen", trans: "acontecer" },
                        { term: "Have", trans: "ter" },
                        { term: "Hear", trans: "ouvir" },
                        { term: "Help", trans: "ajudar" },
                        { term: "Ignore", trans: "ignorar" },
                        { term: "Imagine", trans: "imaginar" },
                        { term: "Improve", trans: "melhorar" },
                        { term: "Invent", trans: "inventar" },
                        { term: "Join", trans: "juntar-se" },
                        { term: "Keep", trans: "manter / guardar" },
                        { term: "Know", trans: "saber / conhecer" },
                        { term: "Lead to", trans: "levar a" },
                        { term: "Learn", trans: "aprender" },
                        { term: "Leave", trans: "sair / deixar" },
                        { term: "Love", trans: "amar" }
                    ]
                },
                {
                    title: "Verbs M-W",
                    audio: "TTS: Mean. Mention. Motivate. Move. Need. Neglect. Offer. Overcome. Pass. Praise. Practice. Read. Remember. Require. See. Seek. Show. Speak. Start. Stimulate. Struggle. Study. Succeed. Suggest. Support. Think. Touch upon. Travel. Turn. Understand. Value. Want. Work.",
                    items: [
                        { term: "Mean", trans: "significar" },
                        { term: "Mention", trans: "mencionar" },
                        { term: "Motivate", trans: "motivar" },
                        { term: "Move", trans: "mover-se" },
                        { term: "Need", trans: "precisar" },
                        { term: "Neglect", trans: "negligenciar" },
                        { term: "Offer", trans: "oferecer" },
                        { term: "Overcome", trans: "superar" },
                        { term: "Pass", trans: "passar" },
                        { term: "Praise", trans: "elogiar" },
                        { term: "Practice", trans: "praticar" },
                        { term: "Read", trans: "ler" },
                        { term: "Remember", trans: "lembrar" },
                        { term: "Require", trans: "exigir" },
                        { term: "See", trans: "ver" },
                        { term: "Seek", trans: "buscar" },
                        { term: "Show", trans: "mostrar" },
                        { term: "Speak", trans: "falar" },
                        { term: "Start", trans: "começar" },
                        { term: "Stimulate", trans: "estimular" },
                        { term: "Struggle", trans: "lutar / esforçar-se" },
                        { term: "Study", trans: "estudar" },
                        { term: "Succeed", trans: "ter sucesso" },
                        { term: "Suggest", trans: "sugerir" },
                        { term: "Support", trans: "apoiar" },
                        { term: "Think", trans: "pensar" },
                        { term: "Touch upon", trans: "tocar em (assunto)" },
                        { term: "Travel", trans: "viajar" },
                        { term: "Turn", trans: "virar / tornar-se" },
                        { term: "Understand", trans: "entender" },
                        { term: "Value", trans: "valorizar" },
                        { term: "Want", trans: "querer" },
                        { term: "Work", trans: "trabalhar" }
                    ]
                },
                {
                    title: "Intelligence & Learning",
                    audio: "TTS: Intelligence. Smart. Brain. Mind. Skill. Talent. Potential. Knowledge. Memory. Linguistic. Logical Mathematical. Spatial. Bodily Kinesthetic. Musical. Interpersonal. Intrapersonal. Naturalist. Existential. Bilingual.",
                    items: [
                        { term: "Intelligence", trans: "inteligência" },
                        { term: "Smart / Intelligent", trans: "inteligente" },
                        { term: "Brain", trans: "cérebro" },
                        { term: "Mind", trans: "mente" },
                        { term: "Skill", trans: "habilidade" },
                        { term: "Talent", trans: "talento" },
                        { term: "Potential", trans: "potencial" },
                        { term: "Knowledge", trans: "conhecimento" },
                        { term: "Memory", trans: "memória" },
                        { term: "Linguistic Int.", trans: "inteligência linguística" },
                        { term: "Logical-Mathematical Int.", trans: "inteligência lógica" },
                        { term: "Spatial Int.", trans: "inteligência espacial" },
                        { term: "Bodily-Kinesthetic Int.", trans: "inteligência corporal" },
                        { term: "Musical Int.", trans: "inteligência musical" },
                        { term: "Interpersonal Int.", trans: "inteligência interpessoal" },
                        { term: "Intrapersonal Int.", trans: "inteligência intrapessoal" },
                        { term: "Naturalist Int.", trans: "inteligência naturalista" },
                        { term: "Existential Int.", trans: "inteligência existencial" },
                        { term: "Bilingual", trans: "bilíngue" }
                    ]
                },
                {
                    title: "Phrasal Verbs with TURN",
                    audio: "TTS: Turn into. Turn down. Turn up. Turn on. Turn off. Turn out. Turn around. Turn to. Turn in. Turn over. Turn back.",
                    items: [
                        { term: "Turn into", trans: "transformar-se em" },
                        { term: "Turn down", trans: "recusar / abaixar (volume)" },
                        { term: "Turn up", trans: "aparecer / aumentar (volume)" },
                        { term: "Turn on / off", trans: "ligar / desligar" },
                        { term: "Turn out", trans: "acabar sendo / resultar" },
                        { term: "Turn around", trans: "virar o jogo / melhorar" },
                        { term: "Turn to", trans: "recorrer a" },
                        { term: "Turn in", trans: "entregar" },
                        { term: "Turn over", trans: "virar / entregar" },
                        { term: "Turn back", trans: "voltar" }
                    ]
                },
                {
                    title: "Expressions & Chunks",
                    audio: "TTS: Get smarter. In different ways. Types of intelligence. In order to. So that. Both and. Either or. Neither nor. If I were you. If I had known. Get better. Free time. Study group. Hard work.",
                    items: [
                        { term: "Get smarter", trans: "ficar mais inteligente" },
                        { term: "In different ways", trans: "de formas diferentes" },
                        { term: "Types of intelligence", trans: "tipos de inteligência" },
                        { term: "In order to", trans: "a fim de" },
                        { term: "So that", trans: "para que" },
                        { term: "Both...and", trans: "tanto... quanto" },
                        { term: "Either...or", trans: "ou... ou" },
                        { term: "Neither...nor", trans: "nem... nem" },
                        { term: "If I were you", trans: "se eu fosse você" },
                        { term: "If I had known", trans: "se eu soubesse" },
                        { term: "Get better", trans: "melhorar" },
                        { term: "Free time", trans: "tempo livre" },
                        { term: "Study group", trans: "grupo de estudos" },
                        { term: "Hard work", trans: "trabalho duro" }
                    ]
                }
            ], // Closes areas
            
            // 2B: Context Examples (Grouped & Tabbed) - EXHAUSTIVE LIST
            exampleGroups:[
                {
                    title: "Verbs A-L",
                    audio: "TTS: We must accept that every person has a unique intelligence. Celine agrees that everyone is smart. He apologized for claiming his brain was too tired. If you ask me, an open mind is the key. Be smart about your choices. I believe that coding is a vital skill. You can choose which talent you want to develop. Success comes to those who reach their full potential. Teachers communicate their knowledge. Don't compare your memory to a computer. He complained that his Linguistic Intelligence was low. You must concentrate using your logic. Artists contribute to society. Dancers create beauty. You must decide if you want to improve. It is hard to develop Interpersonal Intelligence if you never talk. Use meditation to discover your Intrapersonal Intelligence. Don't disturb the animals. Philosophers do a lot of research. My parents encourage me to become bilingual. You can expand your mind. He explained why he turned down the invitation. Let's explore the city. If you fail to turn on your focus, you won't pass. I feel better when I turn off the TV. I hope you find that the project turns out to be a success. You must focus in order to turn around your bad grades. I will get help. Never give up. Go to the next page. Mistakes happen. If you have discipline, you will get smarter. We hear and learn in different ways. Knowing the types of intelligence can help you study. Ignore the noise in order to concentrate. Imagine your goals. You can improve both your math and your art skills. You can either invent a new gadget or improve an old one. I will join a group. I would keep practicing every day. If I had known the answer, I would have said it. Practice leads to success. Use your free time to learn a new language. Don't leave the study group early tonight. I love the results of my hard work.",
                    items:[
                        { term: "Accept", sent: "We must accept that every person has a unique intelligence.", trans: "<span style='color:#0077b6'>Devemos aceitar que cada pessoa tem uma inteligência única.</span>" },
                        { term: "Agree", sent: "Celine agrees that everyone is smart in their own way.", trans: "<span style='color:#0077b6'>Celine concorda que todos são inteligentes à sua própria maneira.</span>" },
                        { term: "Apologize", sent: "He apologized for claiming his brain was too tired to study.", trans: "<span style='color:#0077b6'>Ele se desculpou por alegar que seu cérebro estava cansado demais para estudar.</span>" },
                        { term: "Ask", sent: "If you ask me, an open mind is the key to success.", trans: "<span style='color:#0077b6'>Se me perguntar, uma mente aberta é a chave para o sucesso.</span>" },
                        { term: "Be", sent: "Be smart about your choices.", trans: "<span style='color:#0077b6'>Seja inteligente sobre suas escolhas.</span>" },
                        { term: "Believe", sent: "I believe that coding is a vital skill for the future.", trans: "<span style='color:#0077b6'>Acredito que programar é uma habilidade vital para o futuro.</span>" },
                        { term: "Choose", sent: "You can choose which talent you want to develop.", trans: "<span style='color:#0077b6'>Você pode escolher qual talento quer desenvolver.</span>" },
                        { term: "Come", sent: "Success comes to those who reach their full potential.", trans: "<span style='color:#0077b6'>O sucesso vem para aqueles que atingem seu pleno potencial.</span>" },
                        { term: "Communicate", sent: "Teachers communicate their knowledge to students every day.", trans: "<span style='color:#0077b6'>Professores comunicam seu conhecimento aos alunos todos os dias.</span>" },
                        { term: "Compare", sent: "Don't compare your memory to a computer; you are human!", trans: "<span style='color:#0077b6'>Não compare sua memória a um computador; você é humano!</span>" },
                        { term: "Complain", sent: "He complained that his Linguistic Intelligence was low.", trans: "<span style='color:#0077b6'>Ele reclamou que sua Inteligência Linguística era baixa.</span>" },
                        { term: "Concentrate", sent: "To solve this, you must concentrate using your Logical-Mathematical Intelligence.", trans: "<span style='color:#0077b6'>Para resolver isto, você deve se concentrar usando sua Inteligência Lógico-Matemática.</span>" },
                        { term: "Contribute", sent: "Artists contribute to society through their Spatial Intelligence.", trans: "<span style='color:#0077b6'>Artistas contribuem para a sociedade através de sua Inteligência Espacial.</span>" },
                        { term: "Create", sent: "Dancers create beauty using Bodily-Kinesthetic Intelligence.", trans: "<span style='color:#0077b6'>Dançarinos criam beleza usando a Inteligência Corporal-Cinestésica.</span>" },
                        { term: "Decide", sent: "You must decide if you want to improve your Musical Intelligence.", trans: "<span style='color:#0077b6'>Você deve decidir se quer melhorar sua Inteligência Musical.</span>" },
                        { term: "Develop", sent: "It is hard to develop Interpersonal Intelligence if you never talk to people.", trans: "<span style='color:#0077b6'>É difícil desenvolver Inteligência Interpessoal se você nunca fala com as pessoas.</span>" },
                        { term: "Discover", sent: "Use meditation to discover your Intrapersonal Intelligence.", trans: "<span style='color:#0077b6'>Use a meditação para descobrir sua Inteligência Intrapessoal.</span>" },
                        { term: "Disturb", sent: "Don't disturb the animals when practicing your Naturalist Intelligence.", trans: "<span style='color:#0077b6'>Não perturbe os animais ao praticar sua Inteligência Naturalista.</span>" },
                        { term: "Do", sent: "Philosophers do a lot of research on Existential Intelligence.", trans: "<span style='color:#0077b6'>Filósofos fazem muita pesquisa sobre Inteligência Existencial.</span>" },
                        { term: "Encourage", sent: "My parents encourage me to become bilingual.", trans: "<span style='color:#0077b6'>Meus pais me encorajam a me tornar bilíngue.</span>" },
                        { term: "Expand", sent: "You can expand your mind and turn a hobby into a career.", trans: "<span style='color:#0077b6'>Você pode expandir sua mente e transformar um hobby em uma carreira.</span>" },
                        { term: "Explain", sent: "He explained why he turned down the invitation to the study group.", trans: "<span style='color:#0077b6'>Ele explicou por que recusou o convite para o grupo de estudos.</span>" },
                        { term: "Explore", sent: "Let's explore the city; maybe a new opportunity will turn up.", trans: "<span style='color:#0077b6'>Vamos explorar a cidade; talvez uma nova oportunidade apareça.</span>" },
                        { term: "Fail", sent: "If you fail to turn on your focus, you won't pass.", trans: "<span style='color:#0077b6'>Se você falhar em ligar seu foco, não passará.</span>" },
                        { term: "Feel", sent: "I feel better when I turn off the TV and read.", trans: "<span style='color:#0077b6'>Sinto-me melhor quando desligo a TV e leio.</span>" },
                        { term: "Find", sent: "I hope you find that the project turns out to be a success.", trans: "<span style='color:#0077b6'>Espero que você descubra que o projeto acaba sendo um sucesso.</span>" },
                        { term: "Focus", sent: "You must focus in order to turn around your bad grades.", trans: "<span style='color:#0077b6'>Você deve focar para dar a volta por cima em suas notas baixas.</span>" },
                        { term: "Get", sent: "I will get help and turn to my teacher for advice.", trans: "<span style='color:#0077b6'>Vou conseguir ajuda e recorrer ao meu professor para conselhos.</span>" },
                        { term: "Give up", sent: "Never give up, even when it's time to turn in the final exam.", trans: "<span style='color:#0077b6'>Nunca desista, mesmo quando for hora de entregar a prova final.</span>" },
                        { term: "Go", sent: "Go to the next page and turn over the worksheet.", trans: "<span style='color:#0077b6'>Vá para a próxima página e vire a folha de exercícios.</span>" },
                        { term: "Happen", sent: "Mistakes happen, but you can't turn back time.", trans: "<span style='color:#0077b6'>Erros acontecem, mas você não pode voltar no tempo.</span>" },
                        { term: "Have", sent: "If you have discipline, you will get smarter.", trans: "<span style='color:#0077b6'>Se você tiver disciplina, ficará mais inteligente.</span>" },
                        { term: "Hear", sent: "We hear and learn in different ways.", trans: "<span style='color:#0077b6'>Nós ouvimos e aprendemos de formas diferentes.</span>" },
                        { term: "Help", sent: "Knowing the types of intelligence can help you study.", trans: "<span style='color:#0077b6'>Conhecer os tipos de inteligência pode te ajudar a estudar.</span>" },
                        { term: "Ignore", sent: "Ignore the noise in order to concentrate.", trans: "<span style='color:#0077b6'>Ignore o barulho a fim de se concentrar.</span>" },
                        { term: "Imagine", sent: "Imagine your goals so that you can stay motivated.", trans: "<span style='color:#0077b6'>Imagine seus objetivos para que você possa se manter motivado.</span>" },
                        { term: "Improve", sent: "You can improve both your math and your art skills.", trans: "<span style='color:#0077b6'>Você pode melhorar tanto suas habilidades matemáticas quanto artísticas.</span>" },
                        { term: "Invent", sent: "You can either invent a new gadget or improve an old one.", trans: "<span style='color:#0077b6'>Você pode ou inventar um novo dispositivo ou melhorar um antigo.</span>" },
                        { term: "Join", sent: "I will join a group that is neither boring nor lazy.", trans: "<span style='color:#0077b6'>Vou me juntar a um grupo que não é nem chato nem preguiçoso.</span>" },
                        { term: "Keep", sent: "If I were you, I would keep practicing every day.", trans: "<span style='color:#0077b6'>Se eu fosse você, eu continuaria praticando todos os dias.</span>" },
                        { term: "Know", sent: "If I had known the answer, I would have said it.", trans: "<span style='color:#0077b6'>Se eu soubesse a resposta, teria dito.</span>" },
                        { term: "Lead to", sent: "Practice leads to success, and you will get better.", trans: "<span style='color:#0077b6'>A prática leva ao sucesso, e você vai melhorar.</span>" },
                        { term: "Learn", sent: "Use your free time to learn a new language.", trans: "<span style='color:#0077b6'>Use seu tempo livre para aprender uma nova língua.</span>" },
                        { term: "Leave", sent: "Don't leave the study group early tonight.", trans: "<span style='color:#0077b6'>Não saia do grupo de estudos cedo hoje à noite.</span>" },
                        { term: "Love", sent: "I love the results of my hard work.", trans: "<span style='color:#0077b6'>Amo os resultados do meu trabalho duro.</span>" }
                    ]
                },
                // ADD THIS TO Step 2B exampleGroups array:
                {
                    title: "Verbs M-W",
                    audio: "TTS: What did you mean when you mentioned Howard Gardner? Use music to motivate you to move your body. You need to study; don't neglect your education. The school offers resources to help you overcome challenges. If you pass the test, the teacher will praise you. You must practice and read every single day. Remember that big goals require many small steps. I see your potential, but you must seek your own path. Please show us how you speak English so fluently. Start a new hobby to stimulate your creativity. If you struggle, you should study with a partner. I suggest a plan so that you can succeed. I support your ideas, but I think we need more time. The book touches upon how scientists travel to learn. I want to turn my hobby into a talent. I understand why you value your privacy. I want to work at an international company.",
                    items:[
                        { term: "Mean", sent: "What did you mean when you mentioned Howard Gardner?", trans: "<span style='color:#0077b6'>O que você quis dizer quando mencionou Howard Gardner?</span>" },
                        { term: "Mention", sent: "What did you mean when you mentioned Howard Gardner?", trans: "<span style='color:#0077b6'>O que você quis dizer quando mencionou Howard Gardner?</span>" },
                        { term: "Motivate", sent: "Use music to motivate you to move your body.", trans: "<span style='color:#0077b6'>Use música para te motivar a mover seu corpo.</span>" },
                        { term: "Move", sent: "Use music to motivate you to move your body.", trans: "<span style='color:#0077b6'>Use música para te motivar a mover seu corpo.</span>" },
                        { term: "Need", sent: "You need to study; don't neglect your education.", trans: "<span style='color:#0077b6'>Você precisa estudar; não negligencie sua educação.</span>" },
                        { term: "Neglect", sent: "You need to study; don't neglect your education.", trans: "<span style='color:#0077b6'>Você precisa estudar; não negligencie sua educação.</span>" },
                        { term: "Offer", sent: "The school offers resources to help you overcome challenges.", trans: "<span style='color:#0077b6'>A escola oferece recursos para te ajudar a superar desafios.</span>" },
                        { term: "Overcome", sent: "The school offers resources to help you overcome challenges.", trans: "<span style='color:#0077b6'>A escola oferece recursos para te ajudar a superar desafios.</span>" },
                        { term: "Pass", sent: "If you pass the test, the teacher will praise you.", trans: "<span style='color:#0077b6'>Se você passar na prova, o professor vai te elogiar.</span>" },
                        { term: "Praise", sent: "If you pass the test, the teacher will praise you.", trans: "<span style='color:#0077b6'>Se você passar na prova, o professor vai te elogiar.</span>" },
                        { term: "Practice", sent: "You must practice and read every single day.", trans: "<span style='color:#0077b6'>Você deve praticar e ler todo santo dia.</span>" },
                        { term: "Read", sent: "You must practice and read every single day.", trans: "<span style='color:#0077b6'>Você deve praticar e ler todo santo dia.</span>" },
                        { term: "Remember", sent: "Remember that big goals require many small steps.", trans: "<span style='color:#0077b6'>Lembre-se que grandes objetivos exigem muitos pequenos passos.</span>" },
                        { term: "Require", sent: "Remember that big goals require many small steps.", trans: "<span style='color:#0077b6'>Lembre-se que grandes objetivos exigem muitos pequenos passos.</span>" },
                        { term: "See", sent: "I see your potential, but you must seek your own path.", trans: "<span style='color:#0077b6'>Vejo seu potencial, mas você deve buscar seu próprio caminho.</span>" },
                        { term: "Seek", sent: "I see your potential, but you must seek your own path.", trans: "<span style='color:#0077b6'>Vejo seu potencial, mas você deve buscar seu próprio caminho.</span>" },
                        { term: "Show", sent: "Please show us how you speak English so fluently.", trans: "<span style='color:#0077b6'>Por favor, nos mostre como você fala inglês tão fluentemente.</span>" },
                        { term: "Speak", sent: "Please show us how you speak English so fluently.", trans: "<span style='color:#0077b6'>Por favor, nos mostre como você fala inglês tão fluentemente.</span>" },
                        { term: "Start", sent: "Start a new hobby to stimulate your creativity.", trans: "<span style='color:#0077b6'>Comece um novo hobby para estimular sua criatividade.</span>" },
                        { term: "Stimulate", sent: "Start a new hobby to stimulate your creativity.", trans: "<span style='color:#0077b6'>Comece um novo hobby para estimular sua criatividade.</span>" },
                        { term: "Struggle", sent: "If you struggle, you should study with a partner.", trans: "<span style='color:#0077b6'>Se você tiver dificuldade, deve estudar com um parceiro.</span>" },
                        { term: "Study", sent: "If you struggle, you should study with a partner.", trans: "<span style='color:#0077b6'>Se você tiver dificuldade, deve estudar com um parceiro.</span>" },
                        { term: "Succeed", sent: "I suggest a plan so that you can succeed.", trans: "<span style='color:#0077b6'>Sugiro um plano para que você possa ter sucesso.</span>" },
                        { term: "Suggest", sent: "I suggest a plan so that you can succeed.", trans: "<span style='color:#0077b6'>Sugiro um plano para que você possa ter sucesso.</span>" },
                        { term: "Support", sent: "I support your ideas, but I think we need more time.", trans: "<span style='color:#0077b6'>Apoio suas ideias, mas acho que precisamos de mais tempo.</span>" },
                        { term: "Think", sent: "I support your ideas, but I think we need more time.", trans: "<span style='color:#0077b6'>Apoio suas ideias, mas acho que precisamos de mais tempo.</span>" },
                        { term: "Touch upon", sent: "The book touches upon how scientists travel to learn.", trans: "<span style='color:#0077b6'>O livro toca em como os cientistas viajam para aprender.</span>" },
                        { term: "Travel", sent: "The book touches upon how scientists travel to learn.", trans: "<span style='color:#0077b6'>O livro toca em como os cientistas viajam para aprender.</span>" },
                        { term: "Turn", sent: "I want to turn my hobby into a talent.", trans: "<span style='color:#0077b6'>Quero transformar meu hobby em um talento.</span>" },
                        { term: "Understand", sent: "I understand why you value your privacy.", trans: "<span style='color:#0077b6'>Entendo por que você valoriza sua privacidade.</span>" },
                        { term: "Value", sent: "I understand why you value your privacy.", trans: "<span style='color:#0077b6'>Entendo por que você valoriza sua privacidade.</span>" },
                        { term: "Want", sent: "I want to work at an international company.", trans: "<span style='color:#0077b6'>Quero trabalhar em uma empresa internacional.</span>" },
                        { term: "Work", sent: "I want to work at an international company.", trans: "<span style='color:#0077b6'>Quero trabalhar em uma empresa internacional.</span>" }
                    ]
                },
                // ADD THIS TO Step 2B exampleGroups array:
                {
                    title: "Intelligence & Learning",
                    audio: "TTS: Intelligence has many different forms. He is very smart at solving puzzles. The brain is a complex organ. Keep an open mind during the lecture. Drawing is a great spatial skill. She has a natural talent for music. Everyone has the potential to learn. Knowledge is the result of study. He has a perfect memory for faces. Poets use Linguistic Intelligence. Logical-Mathematical Intelligence helps in math. Artists use Spatial Intelligence to draw. Athletes have high Bodily-Kinesthetic Intelligence. Playing an instrument requires Musical Intelligence. Leaders use Interpersonal Intelligence with people. Self-awareness is part of Intrapersonal Intelligence. Biologists possess Naturalist Intelligence. Existential Intelligence involves deep thinking. Sofia is bilingual in English and Portuguese.",
                    items:[
                        { term: "Intelligence", sent: "Intelligence has many different forms.", trans: "<span style='color:#0077b6'>A inteligência tem muitas formas diferentes.</span>" },
                        { term: "Smart / Intelligent", sent: "He is very smart at solving puzzles.", trans: "<span style='color:#0077b6'>Ele é muito inteligente em resolver quebra-cabeças.</span>" },
                        { term: "Brain", sent: "The brain is a complex organ.", trans: "<span style='color:#0077b6'>O cérebro é um órgão complexo.</span>" },
                        { term: "Mind", sent: "Keep an open mind during the lecture.", trans: "<span style='color:#0077b6'>Mantenha a mente aberta durante a palestra.</span>" },
                        { term: "Skill", sent: "Drawing is a great spatial skill.", trans: "<span style='color:#0077b6'>Desenhar é uma ótima habilidade espacial.</span>" },
                        { term: "Talent", sent: "She has a natural talent for music.", trans: "<span style='color:#0077b6'>Ela tem um talento natural para a música.</span>" },
                        { term: "Potential", sent: "Everyone has the potential to learn.", trans: "<span style='color:#0077b6'>Todo mundo tem o potencial de aprender.</span>" },
                        { term: "Knowledge", sent: "Knowledge is the result of study.", trans: "<span style='color:#0077b6'>O conhecimento é o resultado do estudo.</span>" },
                        { term: "Memory", sent: "He has a perfect memory for faces.", trans: "<span style='color:#0077b6'>Ele tem uma memória perfeita para rostos.</span>" },
                        { term: "Linguistic Int.", sent: "Poets use Linguistic Intelligence.", trans: "<span style='color:#0077b6'>Poetas usam Inteligência Linguística.</span>" },
                        { term: "Logical-Mathematical Int.", sent: "Logical-Mathematical Intelligence helps in math.", trans: "<span style='color:#0077b6'>A Inteligência Lógico-Matemática ajuda em matemática.</span>" },
                        { term: "Spatial Int.", sent: "Artists use Spatial Intelligence to draw.", trans: "<span style='color:#0077b6'>Artistas usam Inteligência Espacial para desenhar.</span>" },
                        { term: "Bodily-Kinesthetic Int.", sent: "Athletes have high Bodily-Kinesthetic Intelligence.", trans: "<span style='color:#0077b6'>Atletas têm alta Inteligência Corporal-Cinestésica.</span>" },
                        { term: "Musical Int.", sent: "Playing an instrument requires Musical Intelligence.", trans: "<span style='color:#0077b6'>Tocar um instrumento exige Inteligência Musical.</span>" },
                        { term: "Interpersonal Int.", sent: "Leaders use Interpersonal Intelligence with people.", trans: "<span style='color:#0077b6'>Líderes usam Inteligência Interpessoal com as pessoas.</span>" },
                        { term: "Intrapersonal Int.", sent: "Self-awareness is part of Intrapersonal Intelligence.", trans: "<span style='color:#0077b6'>O autoconhecimento faz parte da Inteligência Intrapessoal.</span>" },
                        { term: "Naturalist Int.", sent: "Biologists possess Naturalist Intelligence.", trans: "<span style='color:#0077b6'>Biólogos possuem Inteligência Naturalista.</span>" },
                        { term: "Existential Int.", sent: "Existential Intelligence involves deep thinking.", trans: "<span style='color:#0077b6'>A Inteligência Existencial envolve pensamento profundo.</span>" },
                        { term: "Bilingual", sent: "Sofia is bilingual in English and Portuguese.", trans: "<span style='color:#0077b6'>Sofia é bilíngue em inglês e português.</span>" }
                    ]
                },
                // ADD THESE TO Step 2B exampleGroups array:
                {
                    title: "Phrasal Verbs (TURN)",
                    audio: "TTS: Practice can turn a hobby into a skill. Please turn down the volume. A new opportunity will turn up soon. Turn off the TV and focus on your work. The test turned out to be easy. We need to turn around our project results. I turn to my teacher for help. Remember to turn in your test. Turn over the page to read more. It is too late to turn back now.",
                    items:[
                        { term: "Turn into", sent: "Practice can turn a hobby into a skill.", trans: "<span style='color:#0077b6'>A prática pode transformar um hobby em uma habilidade.</span>" },
                        { term: "Turn down", sent: "Please turn down the volume.", trans: "<span style='color:#0077b6'>Por favor, abaixe o volume.</span>" },
                        { term: "Turn up", sent: "A new opportunity will turn up soon.", trans: "<span style='color:#0077b6'>Uma nova oportunidade vai aparecer em breve.</span>" },
                        { term: "Turn on / off", sent: "Turn off the TV and focus on your work.", trans: "<span style='color:#0077b6'>Desligue a TV e foque no seu trabalho.</span>" },
                        { term: "Turn out", sent: "The test turned out to be easy.", trans: "<span style='color:#0077b6'>O teste acabou sendo fácil.</span>" },
                        { term: "Turn around", sent: "We need to turn around our project results.", trans: "<span style='color:#0077b6'>Precisamos melhorar (virar o jogo) os resultados do nosso projeto.</span>" },
                        { term: "Turn to", sent: "I turn to my teacher for help.", trans: "<span style='color:#0077b6'>Eu recorro ao meu professor para ajuda.</span>" },
                        { term: "Turn in", sent: "Remember to turn in your test.", trans: "<span style='color:#0077b6'>Lembre-se de entregar sua prova.</span>" },
                        { term: "Turn over", sent: "Turn over the page to read more.", trans: "<span style='color:#0077b6'>Vire a página para ler mais.</span>" },
                        { term: "Turn back", sent: "It is too late to turn back now.", trans: "<span style='color:#0077b6'>É tarde demais para voltar agora.</span>" }
                    ]
                },
                {
                    title: "Expressions & Chunks",
                    audio: "TTS: I want to get smarter in my free time. We all learn in different ways. Knowing the types of intelligence can help you study. I study in order to improve my skills. I practice so that I can get better. She is both smart and kind. You can either study or play now. Neither laziness nor noise helps you. If I were you, I would practice more. If I had known, I wouldn't have failed. Practice leads to success, and you will get better. Use your free time to learn a new language. Albert decided to join the study group. I love the results of my hard work.",
                    items:[
                        { term: "Get smarter", sent: "I want to get smarter in my free time.", trans: "<span style='color:#0077b6'>Quero ficar mais inteligente no meu tempo livre.</span>" },
                        { term: "In different ways", sent: "We all learn in different ways.", trans: "<span style='color:#0077b6'>Todos nós aprendemos de formas diferentes.</span>" },
                        { term: "Types of intelligence", sent: "Knowing the types of intelligence can help you study.", trans: "<span style='color:#0077b6'>Saber os tipos de inteligência pode te ajudar a estudar.</span>" },
                        { term: "In order to", sent: "I study in order to improve my skills.", trans: "<span style='color:#0077b6'>Eu estudo a fim de melhorar minhas habilidades.</span>" },
                        { term: "So that", sent: "I practice so that I can get better.", trans: "<span style='color:#0077b6'>Eu pratico para que eu possa melhorar.</span>" },
                        { term: "Both...and", sent: "She is both smart and kind.", trans: "<span style='color:#0077b6'>Ela é tanto inteligente quanto gentil.</span>" },
                        { term: "Either...or", sent: "You can either study or play now.", trans: "<span style='color:#0077b6'>Você pode ou estudar ou brincar agora.</span>" },
                        { term: "Neither...nor", sent: "Neither laziness nor noise helps you.", trans: "<span style='color:#0077b6'>Nem a preguiça nem o barulho te ajudam.</span>" },
                        { term: "If I were you", sent: "If I were you, I would practice more.", trans: "<span style='color:#0077b6'>Se eu fosse você, eu praticaria mais.</span>" },
                        { term: "If I had known", sent: "If I had known, I wouldn't have failed.", trans: "<span style='color:#0077b6'>Se eu soubesse, não teria reprovado.</span>" },
                        { term: "Get better", sent: "Practice leads to success, and you will get better.", trans: "<span style='color:#0077b6'>A prática leva ao sucesso, e você vai melhorar.</span>" },
                        { term: "Free time", sent: "Use your free time to learn a new language.", trans: "<span style='color:#0077b6'>Use seu tempo livre para aprender um novo idioma.</span>" },
                        { term: "Study group", sent: "Albert decided to join the study group.", trans: "<span style='color:#0077b6'>Albert decidiu entrar para o grupo de estudos.</span>" },
                        { term: "Hard work", sent: "I love the results of my hard work.", trans: "<span style='color:#0077b6'>Eu amo os resultados do meu trabalho duro.</span>" }
                    ]
                }
            ], // This closes the exampleGroups array

            // 2C: Practice Drills (Tabbed - EXHAUSTIVE: 1 question per term)
            drillGroups:[
                {
                    title: "Verbs A-L",
                    drills: [
                        { q: "We must _______ that every person learns differently.", options:[{t: "accept", c: true}, {t: "ignore", c: false}, {t: "fail", c: false}, {t: "leave", c: false}], type: "mcq" },
                        { q: "Celine and Albert _______ on the importance of logic.", options:[{t: "agree", c: true}, {t: "disturb", c: false}, {t: "complain", c: false}, {t: "give up", c: false}], type: "mcq" },
                        { q: "You should always _______ when you make a mistake.", options:[{t: "apologize", c: true}, {t: "concentrate", c: false}, {t: "expand", c: false}, {t: "explore", c: false}], type: "mcq" },
                        { q: "If you don't know the answer, just _______ the teacher.", options:[{t: "ask", c: true}, {t: "be", c: false}, {t: "do", c: false}, {t: "get", c: false}], type: "mcq" },
                        { q: "It is important to _______ patient with yourself while learning.", options:[{t: "be", c: true}, {t: "have", c: false}, {t: "do", c: false}, {t: "come", c: false}], type: "mcq" },
                        { q: "I _______ that everyone has a hidden talent.", options:[{t: "believe", c: true}, {t: "compare", c: false}, {t: "fail", c: false}, {t: "ignore", c: false}], type: "mcq" },
                        { q: "You can _______ which skill you want to practice today.", options:[{t: "choose", c: true}, {t: "happen", c: false}, {t: "lead to", c: false}, {t: "leave", c: false}], type: "mcq" },
                        { q: "Great ideas _______ to those who have an open mind.", options:[{t: "come", c: true}, {t: "go", c: false}, {t: "disturb", c: false}, {t: "complain", c: false}], type: "mcq" },
                        { q: "Bilinguals can _______ in two different languages easily.", options:[{t: "communicate", c: true}, {t: "concentrate", c: false}, {t: "invent", c: false}, {t: "ignore", c: false}], type: "mcq" },
                        { q: "Do not _______ your progress to someone else's.", options:[{t: "compare", c: true}, {t: "create", c: false}, {t: "contribute", c: false}, {t: "do", c: false}], type: "mcq" },
                        { q: "Instead of trying to solve it, he just likes to _______.", options:[{t: "complain", c: true}, {t: "encourage", c: false}, {t: "develop", c: false}, {t: "expand", c: false}], type: "mcq" },
                        { q: "Turn off the TV so you can _______ on your homework.", options:[{t: "concentrate", c: true}, {t: "disturb", c: false}, {t: "give up", c: false}, {t: "leave", c: false}], type: "mcq" },
                        { q: "Everyone can _______ to a better learning environment.", options:[{t: "contribute", c: true}, {t: "compare", c: false}, {t: "complain", c: false}, {t: "fail", c: false}], type: "mcq" },
                        { q: "Use your imagination to _______ something completely new.", options:[{t: "create", c: true}, {t: "destroy", c: false}, {t: "ignore", c: false}, {t: "leave", c: false}], type: "mcq" },
                        { q: "You must _______ which intelligence to focus on first.", options:[{t: "decide", c: true}, {t: "disturb", c: false}, {t: "happen", c: false}, {t: "hear", c: false}], type: "mcq" },
                        { q: "Practice every day to _______ your skills.", options:[{t: "develop", c: true}, {t: "fail", c: false}, {t: "give up", c: false}, {t: "ignore", c: false}], type: "mcq" },
                        { q: "I want to _______ my true talents using this theory.", options:[{t: "discover", c: true}, {t: "disturb", c: false}, {t: "complain", c: false}, {t: "lose", c: false}], type: "mcq" },
                        { q: "Loud noises always _______ my concentration.", options:[{t: "disturb", c: true}, {t: "encourage", c: false}, {t: "develop", c: false}, {t: "improve", c: false}], type: "mcq" },
                        { q: "Albert likes to _______ logic puzzles in his free time.", options:[{t: "do", c: true}, {t: "be", c: false}, {t: "have", c: false}, {t: "hear", c: false}], type: "mcq" },
                        { q: "Teachers should always _______ their students to try harder.", options:[{t: "encourage", c: true}, {t: "disturb", c: false}, {t: "complain", c: false}, {t: "ignore", c: false}], type: "mcq" },
                        { q: "Reading helps you _______ your knowledge of the world.", options:[{t: "expand", c: true}, {t: "fail", c: false}, {t: "give up", c: false}, {t: "leave", c: false}], type: "mcq" },
                        { q: "Can you _______ this math formula to me?", options:[{t: "explain", c: true}, {t: "disturb", c: false}, {t: "ignore", c: false}, {t: "happen", c: false}], type: "mcq" },
                        { q: "We should _______ different ways of studying.", options:[{t: "explore", c: true}, {t: "complain", c: false}, {t: "fail", c: false}, {t: "ignore", c: false}], type: "mcq" },
                        { q: "If you don't study, you might _______ the test.", options:[{t: "fail", c: true}, {t: "improve", c: false}, {t: "develop", c: false}, {t: "succeed", c: false}], type: "mcq" },
                        { q: "I _______ smart when I solve a difficult puzzle.", options:[{t: "feel", c: true}, {t: "go", c: false}, {t: "come", c: false}, {t: "leave", c: false}], type: "mcq" },
                        { q: "You can _______ great information in the school library.", options:[{t: "find", c: true}, {t: "fail", c: false}, {t: "disturb", c: false}, {t: "ignore", c: false}], type: "mcq" },
                        { q: "I need to _______ on my linguistic intelligence right now.", options:[{t: "focus", c: true}, {t: "disturb", c: false}, {t: "complain", c: false}, {t: "fail", c: false}], type: "mcq" },
                        { q: "Practice helps you _______ better results.", options:[{t: "get", c: true}, {t: "give up", c: false}, {t: "leave", c: false}, {t: "ignore", c: false}], type: "mcq" },
                        { q: "Never _______ on your dreams, even if it is hard!", options:[{t: "give up", c: true}, {t: "develop", c: false}, {t: "improve", c: false}, {t: "create", c: false}], type: "mcq" },
                        { q: "Celine _______ to the study group every week.", options:[{t: "goes", c: true}, {t: "feels", c: false}, {t: "hears", c: false}, {t: "finds", c: false}], type: "mcq" },
                        { q: "Mistakes _______ when we are learning new things.", options:[{t: "happen", c: true}, {t: "focus", c: false}, {t: "concentrate", c: false}, {t: "improve", c: false}], type: "mcq" },
                        { q: "I _______ a natural talent for playing the guitar.", options:[{t: "have", c: true}, {t: "be", c: false}, {t: "do", c: false}, {t: "go", c: false}], type: "mcq" },
                        { q: "Did you _______ about Gardner's theory of multiple intelligences?", options:[{t: "hear", c: true}, {t: "feel", c: false}, {t: "do", c: false}, {t: "be", c: false}], type: "mcq" },
                        { q: "Friends can _______ each other get smarter.", options:[{t: "help", c: true}, {t: "disturb", c: false}, {t: "ignore", c: false}, {t: "complain", c: false}], type: "mcq" },
                        { q: "You must _______ the noise if you want to concentrate.", options:[{t: "ignore", c: true}, {t: "focus", c: false}, {t: "develop", c: false}, {t: "improve", c: false}], type: "mcq" },
                        { q: "Try to _______ your potential in the future!", options:[{t: "imagine", c: true}, {t: "disturb", c: false}, {t: "fail", c: false}, {t: "give up", c: false}], type: "mcq" },
                        { q: "I study hard to _______ my grades.", options:[{t: "improve", c: true}, {t: "fail", c: false}, {t: "disturb", c: false}, {t: "ignore", c: false}], type: "mcq" },
                        { q: "I want to _______ a new learning app for students.", options:[{t: "invent", c: true}, {t: "complain", c: false}, {t: "fail", c: false}, {t: "give up", c: false}], type: "mcq" },
                        { q: "Albert decided to _______ the study group to learn more.", options:[{t: "join", c: true}, {t: "leave", c: false}, {t: "ignore", c: false}, {t: "fail", c: false}], type: "mcq" },
                        { q: "You must _______ practicing every day to succeed.", options:[{t: "keep", c: true}, {t: "stop", c: false}, {t: "fail", c: false}, {t: "give up", c: false}], type: "mcq" },
                        { q: "Now I _______ how the brain works.", options:[{t: "know", c: true}, {t: "ignore", c: false}, {t: "fail", c: false}, {t: "disturb", c: false}], type: "mcq" },
                        { q: "Hard work will always _______ success.", options:[{t: "lead to", c: true}, {t: "fail", c: false}, {t: "give up", c: false}, {t: "ignore", c: false}], type: "mcq" },
                        { q: "We _______ new things every single day.", options:[{t: "learn", c: true}, {t: "forget", c: false}, {t: "ignore", c: false}, {t: "fail", c: false}], type: "mcq" },
                        { q: "Don't _______ the library before finishing your homework.", options:[{t: "leave", c: true}, {t: "join", c: false}, {t: "focus", c: false}, {t: "improve", c: false}], type: "mcq" },
                        { q: "I _______ developing my musical intelligence.", options:[{t: "love", c: true}, {t: "hate", c: false}, {t: "ignore", c: false}, {t: "fail", c: false}], type: "mcq" }
                    ]
                },
                // ADD THIS TO Step 2C drillGroups array:
                {
                    title: "Verbs M-W",
                    drills:[
                        { q: "What does 'being smart' _______ to you?", options:[{t: "mean", c: true}, {t: "make", c: false}, {t: "move", c: false}, {t: "meet", c: false}], type: "mcq" },
                        { q: "Celine _______ a study group earlier in the conversation.", options:[{t: "mentioned", c: true}, {t: "neglected", c: false}, {t: "meant", c: false}, {t: "motivated", c: false}], type: "mcq" },
                        { q: "Challenges _______ me to work harder and improve.", options:[{t: "motivate", c: true}, {t: "move", c: false}, {t: "mention", c: false}, {t: "neglect", c: false}], type: "mcq" },
                        { q: "Exercise helps you _______ and stay healthy.", options:[{t: "move", c: true}, {t: "mean", c: false}, {t: "mention", c: false}, {t: "motivate", c: false}], type: "mcq" },
                        { q: "I _______ to understand this complex logic puzzle.", options:[{t: "need", c: true}, {t: "neglect", c: false}, {t: "note", c: false}, {t: "name", c: false}], type: "mcq" },
                        { q: "Never _______ your mental health when studying hard.", options:[{t: "neglect", c: true}, {t: "need", c: false}, {t: "notice", c: false}, {t: "nurse", c: false}], type: "mcq" },
                        { q: "The school _______ many types of clubs for students.", options:[{t: "offers", c: true}, {t: "overcomes", c: false}, {t: "omits", c: false}, {t: "obeys", c: false}], type: "mcq" },
                        { q: "You can _______ any challenge with dedication and study.", options:[{t: "overcome", c: true}, {t: "offer", c: false}, {t: "overdo", c: false}, {t: "open", c: false}], type: "mcq" },
                        { q: "If you focus, you will definitely _______ the test.", options:[{t: "pass", c: true}, {t: "praise", c: false}, {t: "practice", c: false}, {t: "pause", c: false}], type: "mcq" },
                        { q: "Mrs. Canales _______ Albert's progress in math.", options:[{t: "praised", c: true}, {t: "passed", c: false}, {t: "practiced", c: false}, {t: "pushed", c: false}], type: "mcq" },
                        { q: "You must _______ so that you can succeed.", options:[{t: "practice", c: true}, {t: "praise", c: false}, {t: "pass", c: false}, {t: "point", c: false}], type: "mcq" },
                        { q: "Celine loves to _______ psychology books in her free time.", options:[{t: "read", c: true}, {t: "remember", c: false}, {t: "require", c: false}, {t: "ride", c: false}], type: "mcq" },
                        { q: "_______ to turn in your homework tomorrow morning.", options:[{t: "Remember", c: true}, {t: "Read", c: false}, {t: "Require", c: false}, {t: "Run", c: false}], type: "mcq" },
                        { q: "Success _______ a lot of hard work and patience.", options:[{t: "requires", c: true}, {t: "remembers", c: false}, {t: "reads", c: false}, {t: "rests", c: false}], type: "mcq" },
                        { q: "I _______ your potential, Albert!", options:[{t: "see", c: true}, {t: "seek", c: false}, {t: "show", c: false}, {t: "speak", c: false}], type: "mcq" },
                        { q: "Always _______ new knowledge to keep your brain active.", options:[{t: "seek", c: true}, {t: "see", c: false}, {t: "show", c: false}, {t: "stay", c: false}], type: "mcq" },
                        { q: "This puzzle _______ your logical and mathematical skills.", options:[{t: "shows", c: true}, {t: "seeks", c: false}, {t: "sees", c: false}, {t: "speaks", c: false}], type: "mcq" },
                        { q: "She _______ English and Portuguese fluently.", options:[{t: "speaks", c: true}, {t: "shows", c: false}, {t: "seeks", c: false}, {t: "sees", c: false}], type: "mcq" },
                        { q: "Let's _______ our study group right now.", options:[{t: "start", c: true}, {t: "stimulate", c: false}, {t: "struggle", c: false}, {t: "study", c: false}], type: "mcq" },
                        { q: "Puzzles _______ the human brain to think differently.", options:[{t: "stimulate", c: true}, {t: "struggle", c: false}, {t: "start", c: false}, {t: "study", c: false}], type: "mcq" },
                        { q: "Don't _______ alone; ask your friends for help.", options:[{t: "struggle", c: true}, {t: "stimulate", c: false}, {t: "succeed", c: false}, {t: "suggest", c: false}], type: "mcq" },
                        { q: "I need to _______ for my final grade tonight.", options:[{t: "study", c: true}, {t: "struggle", c: false}, {t: "succeed", c: false}, {t: "suggest", c: false}], type: "mcq" },
                        { q: "You will _______ if you are persistent and focused.", options:[{t: "succeed", c: true}, {t: "study", c: false}, {t: "struggle", c: false}, {t: "stimulate", c: false}], type: "mcq" },
                        { q: "I _______ we work on our project together.", options:[{t: "suggest", c: true}, {t: "succeed", c: false}, {t: "study", c: false}, {t: "support", c: false}], type: "mcq" },
                        { q: "We must _______ our community to grow together.", options:[{t: "support", c: true}, {t: "suggest", c: false}, {t: "succeed", c: false}, {t: "study", c: false}], type: "mcq" },
                        { q: "I _______ the universe is absolutely fascinating.", options:[{t: "think", c: true}, {t: "touch upon", c: false}, {t: "travel", c: false}, {t: "turn", c: false}], type: "mcq" },
                        { q: "The teacher _______ ethics today before ending the class.", options:[{t: "touched upon", c: true}, {t: "traveled", c: false}, {t: "turned", c: false}, {t: "thought", c: false}], type: "mcq" },
                        { q: "I want to _______ and learn about new cultures.", options:[{t: "travel", c: true}, {t: "touch upon", c: false}, {t: "turn", c: false}, {t: "think", c: false}], type: "mcq" },
                        { q: "I want to _______ my hobby into a talent.", options:[{t: "turn", c: true}, {t: "travel", c: false}, {t: "touch upon", c: false}, {t: "think", c: false}], type: "mcq" },
                        { q: "I finally _______ the second conditional!", options:[{t: "understand", c: true}, {t: "value", c: false}, {t: "want", c: false}, {t: "work", c: false}], type: "mcq" },
                        { q: "We should _______ our unique intelligences.", options:[{t: "value", c: true}, {t: "understand", c: false}, {t: "want", c: false}, {t: "work", c: false}], type: "mcq" },
                        { q: "I _______ to get smarter in math this semester.", options:[{t: "want", c: true}, {t: "work", c: false}, {t: "value", c: false}, {t: "understand", c: false}], type: "mcq" },
                        { q: "We _______ hard on our school project every day.", options:[{t: "work", c: true}, {t: "want", c: false}, {t: "value", c: false}, {t: "understand", c: false}], type: "mcq" }
                    ]
                },
                // ADD THIS TO Step 2C drillGroups array:
                {
                    title: "Intelligence & Learning",
                    drills:[
                        { q: "_______ has many different forms according to Howard Gardner.", options:[{t: "Intelligence", c: true}, {t: "Brain", c: false}, {t: "Memory", c: false}, {t: "Skill", c: false}], type: "mcq" },
                        { q: "He is very _______ at solving difficult logic puzzles.", options:[{t: "smart", c: true}, {t: "potential", c: false}, {t: "memory", c: false}, {t: "bilingual", c: false}], type: "mcq" },
                        { q: "The _______ is a complex organ that controls the body.", options:[{t: "brain", c: true}, {t: "talent", c: false}, {t: "skill", c: false}, {t: "mind", c: false}], type: "mcq" },
                        { q: "Keep an open _______ during the lecture to absorb new ideas.", options:[{t: "mind", c: true}, {t: "brain", c: false}, {t: "knowledge", c: false}, {t: "memory", c: false}], type: "mcq" },
                        { q: "Drawing effectively is a great spatial _______.", options:[{t: "skill", c: true}, {t: "intelligence", c: false}, {t: "brain", c: false}, {t: "bilingual", c: false}], type: "mcq" },
                        { q: "She has a natural _______ for playing music and singing.", options:[{t: "talent", c: true}, {t: "mind", c: false}, {t: "knowledge", c: false}, {t: "brain", c: false}], type: "mcq" },
                        { q: "Everyone has the _______ to learn and grow if they try.", options:[{t: "potential", c: true}, {t: "memory", c: false}, {t: "bilingual", c: false}, {t: "smart", c: false}], type: "mcq" },
                        { q: "_______ is the result of years of dedicated study.", options:[{t: "Knowledge", c: true}, {t: "Brain", c: false}, {t: "Potential", c: false}, {t: "Talent", c: false}], type: "mcq" },
                        { q: "He has a perfect _______ for remembering faces and names.", options:[{t: "memory", c: true}, {t: "intelligence", c: false}, {t: "skill", c: false}, {t: "mind", c: false}], type: "mcq" },
                        { q: "Poets and writers usually use _______ Intelligence.", options:[{t: "Linguistic", c: true}, {t: "Spatial", c: false}, {t: "Naturalist", c: false}, {t: "Existential", c: false}], type: "mcq" },
                        { q: "_______ Intelligence helps students solve complex math problems.", options:[{t: "Logical-Mathematical", c: true}, {t: "Musical", c: false}, {t: "Bodily-Kinesthetic", c: false}, {t: "Interpersonal", c: false}], type: "mcq" },
                        { q: "Artists use _______ Intelligence to draw and visualize 3D shapes.", options:[{t: "Spatial", c: true}, {t: "Naturalist", c: false}, {t: "Intrapersonal", c: false}, {t: "Linguistic", c: false}], type: "mcq" },
                        { q: "Athletes and dancers have high _______ Intelligence.", options:[{t: "Bodily-Kinesthetic", c: true}, {t: "Existential", c: false}, {t: "Musical", c: false}, {t: "Logical-Mathematical", c: false}], type: "mcq" },
                        { q: "Playing an instrument perfectly requires high _______ Intelligence.", options:[{t: "Musical", c: true}, {t: "Interpersonal", c: false}, {t: "Spatial", c: false}, {t: "Naturalist", c: false}], type: "mcq" },
                        { q: "Leaders use _______ Intelligence to communicate well with other people.", options:[{t: "Interpersonal", c: true}, {t: "Intrapersonal", c: false}, {t: "Bodily-Kinesthetic", c: false}, {t: "Existential", c: false}], type: "mcq" },
                        { q: "Self-awareness and knowing your own limits is part of _______ Intelligence.", options:[{t: "Intrapersonal", c: true}, {t: "Interpersonal", c: false}, {t: "Spatial", c: false}, {t: "Linguistic", c: false}], type: "mcq" },
                        { q: "Biologists and people who love nature possess _______ Intelligence.", options:[{t: "Naturalist", c: true}, {t: "Musical", c: false}, {t: "Logical-Mathematical", c: false}, {t: "Intrapersonal", c: false}], type: "mcq" },
                        { q: "_______ Intelligence involves deep thinking about life and the universe.", options:[{t: "Existential", c: true}, {t: "Bodily-Kinesthetic", c: false}, {t: "Spatial", c: false}, {t: "Interpersonal", c: false}], type: "mcq" },
                        { q: "Sofia is _______ in both English and Portuguese.", options:[{t: "bilingual", c: true}, {t: "smart", c: false}, {t: "intelligence", c: false}, {t: "memory", c: false}], type: "mcq" }
                    ]
                },
                // ADD THIS TO Step 2C drillGroups array:
                {
                    title: "Phrasals & Expressions",
                    drills:[
                        { q: "Practice can _______ a simple hobby into a professional skill.", options:[{t: "turn into", c: true}, {t: "turn down", c: false}, {t: "turn out", c: false}, {t: "turn around", c: false}], type: "mcq" },
                        { q: "Please _______ the volume on the TV; I am trying to study.", options:[{t: "turn down", c: true}, {t: "turn up", c: false}, {t: "turn over", c: false}, {t: "turn to", c: false}], type: "mcq" },
                        { q: "I'm sure a new job opportunity will _______ soon.", options:[{t: "turn up", c: true}, {t: "turn off", c: false}, {t: "turn back", c: false}, {t: "turn down", c: false}], type: "mcq" },
                        { q: "_______ the lights so we can see the presentation clearly.", options:[{t: "Turn on", c: true}, {t: "Turn off", c: false}, {t: "Turn in", c: false}, {t: "Turn over", c: false}], type: "mcq" },
                        { q: "The logic test _______ to be much easier than I expected.", options:[{t: "turned out", c: true}, {t: "turned back", c: false}, {t: "turned in", c: false}, {t: "turned up", c: false}], type: "mcq" },
                        { q: "If we study hard, we can _______ our bad grades.", options:[{t: "turn around", c: true}, {t: "turn to", c: false}, {t: "turn into", c: false}, {t: "turn off", c: false}], type: "mcq" },
                        { q: "When I need help with math, I always _______ my teacher.", options:[{t: "turn to", c: true}, {t: "turn back", c: false}, {t: "turn around", c: false}, {t: "turn over", c: false}], type: "mcq" },
                        { q: "It's time to _______ your final exam to the teacher.", options:[{t: "turn in", c: true}, {t: "turn down", c: false}, {t: "turn out", c: false}, {t: "turn up", c: false}], type: "mcq" },
                        { q: "Go to the next page and _______ the worksheet.", options:[{t: "turn over", c: true}, {t: "turn back", c: false}, {t: "turn to", c: false}, {t: "turn into", c: false}], type: "mcq" },
                        { q: "Mistakes happen, but you can't _______ time.", options:[{t: "turn back", c: true}, {t: "turn around", c: false}, {t: "turn up", c: false}, {t: "turn down", c: false}], type: "mcq" },
                        { q: "Reading difficult books helps you _______ over time.", options:[{t: "get smarter", c: true}, {t: "get better", c: false}, {t: "turn back", c: false}, {t: "turn down", c: false}], type: "mcq" },
                        { q: "We hear and learn _______ depending on our dominant intelligence.", options:[{t: "in different ways", c: true}, {t: "so that", c: false}, {t: "in order to", c: false}, {t: "hard work", c: false}], type: "mcq" },
                        { q: "Knowing the eight _______ can help you find the best way to study.", options:[{t: "types of intelligence", c: true}, {t: "free times", c: false}, {t: "study groups", c: false}, {t: "hard works", c: false}], type: "mcq" },
                        { q: "Ignore the noise _______ concentrate on your task.", options:[{t: "in order to", c: true}, {t: "so that", c: false}, {t: "both and", c: false}, {t: "either or", c: false}], type: "mcq" },
                        { q: "Imagine your goals _______ you can stay motivated every day.", options:[{t: "so that", c: true}, {t: "in order to", c: false}, {t: "neither nor", c: false}, {t: "both and", c: false}], type: "mcq" },
                        { q: "She is _______ smart _______ kind to everyone she meets.", options:[{t: "both...and", c: true}, {t: "either...or", c: false}, {t: "neither...nor", c: false}, {t: "if...then", c: false}], type: "mcq" },
                        { q: "You can _______ study now _______ play later.", options:[{t: "either...or", c: true}, {t: "both...and", c: false}, {t: "neither...nor", c: false}, {t: "in order to...so that", c: false}], type: "mcq" },
                        { q: "_______ laziness _______ distraction will help you learn English.", options:[{t: "Neither...nor", c: true}, {t: "Either...or", c: false}, {t: "Both...and", c: false}, {t: "If...then", c: false}], type: "mcq" },
                        { q: "_______, I would keep practicing every day to improve.", options:[{t: "If I were you", c: true}, {t: "If I had known", c: false}, {t: "In order to", c: false}, {t: "So that", c: false}], type: "mcq" },
                        { q: "_______ the answer, I would have definitely said it.", options:[{t: "If I had known", c: true}, {t: "If I were you", c: false}, {t: "In order to", c: false}, {t: "Both and", c: false}], type: "mcq" },
                        { q: "Practice leads to success, and eventually you will _______.", options:[{t: "get better", c: true}, {t: "get smarter", c: false}, {t: "turn back", c: false}, {t: "give up", c: false}], type: "mcq" },
                        { q: "Use your _______ to learn a new language or read a book.", options:[{t: "free time", c: true}, {t: "hard work", c: false}, {t: "study group", c: false}, {t: "memory", c: false}], type: "mcq" },
                        { q: "Albert decided to join the _______ to improve his grades.", options:[{t: "study group", c: true}, {t: "hard work", c: false}, {t: "free time", c: false}, {t: "intelligence", c: false}], type: "mcq" },
                        { q: "I love the results of my _______ when I see my good grades.", options:[{t: "hard work", c: true}, {t: "free time", c: false}, {t: "study group", c: false}, {t: "brain", c: false}], type: "mcq" }
                    ]
                }
            ] // This closes the drillGroups array
        }, // This closes Step 2

        
            // ======================================================
        // STEP 3: FOLLOW THE PATTERN (Grammar) - DETAILED
        // ======================================================
        {
            title: "Follow the Pattern",
            subPages: [
                { id: "step3a", label: "3A: Patterns" },
                { id: "step3b", label: "3B: Examples" },
                { id: "step3c", label: "3C: Practice" }
            ],

            // 3A: Explanations (Detailed Tabbed Boxes)
            patterns: [
                {
                    title: "Conditionals (Zero & First)",
                    audio: "TTS: Conditionals are used to show that one thing depends on another. Zero Conditional is for general truths and scientific facts. Structure: If plus Simple Present, Simple Present. For example: If you practice every day, you get better. First Conditional is for real possibilities in the future. Structure: If plus Simple Present, will plus Verb. For example: If I study hard, I will pass the test.",
                    explanation: "Conditionals are used to show that one thing depends on another. <br><br><span style='color:#0077b6; font-style:italic;'>(Condicionais são usados para mostrar que uma coisa depende de outra.)</span>",
                    samples: [
                        { en: "<b>Zero Conditional (Facts)</b>: If + Simple Present, Simple Present.", pt: "<span style='color:#0077b6'>(Verdades gerais e fatos científicos.)</span>" },
                        { en: "Ex: If you <b>practice</b> every day, you <b>get</b> better.", pt: "<span style='color:#0077b6'>(Se você pratica todo dia, você melhora.)</span>" },
                        { en: "<b>First Conditional (Possibilities)</b>: If + Simple Present, WILL + Verb.", pt: "<span style='color:#0077b6'>(Possibilidades reais no futuro.)</span>" },
                        { en: "Ex: If I <b>study</b> hard, I <b>will pass</b> the test.", pt: "<span style='color:#0077b6'>(Se eu estudar muito, passarei na prova.)</span>" }
                    ]
                },
                {
                    title: "Conditionals (Second & Third)",
                    audio: "TTS: Second Conditional is for hypothetical or imaginary situations now. Structure: If plus Simple Past, would plus Verb. For example: If I were you, I would seek help. Third Conditional is for regrets about the past. Structure: If plus Past Perfect, would have plus Participle. For example: If I had known about the talent show, I would have joined.",
                    explanation: "Advanced conditionals for imaginary situations and past regrets.<br><br><span style='color:#0077b6; font-style:italic;'>(Condicionais avançados para situações imaginárias e arrependimentos passados.)</span>",
                    samples: [
                        { en: "<b>Second Conditional (Hypothetical)</b>: If + Simple Past, WOULD + Verb.", pt: "<span style='color:#0077b6'>(Situações hipotéticas ou imaginárias agora.)</span>" },
                        { en: "Ex: If I <b>were</b> you, I <b>would seek</b> help.", pt: "<span style='color:#0077b6'>(Se eu fosse você, eu buscaria ajuda.)</span>" },
                        { en: "<b>Third Conditional (Regrets)</b>: If + Past Perfect, WOULD HAVE + Participle.", pt: "<span style='color:#0077b6'>(Arrependimentos sobre o passado.)</span>" },
                        { en: "Ex: If I <b>had known</b> about the talent show, I <b>would have joined</b>.", pt: "<span style='color:#0077b6'>(Se eu soubesse sobre o show de talentos, eu teria participado.)</span>" }
                    ]
                },
                {
                    title: "Correlative Conjunctions",
                    audio: "TTS: These words work in pairs to connect two balanced ideas. Both and includes two positive possibilities together. For example: She has both musical and logical intelligence. Either or presents a choice between two alternatives. For example: You can either focus or relax. Neither nor joins two negative possibilities. For example: Neither laziness nor distraction helps you learn.",
                    explanation: "These words work in pairs to connect two balanced ideas.<br><br><span style='color:#0077b6; font-style:italic;'>(Estas palavras trabalham em pares para conectar duas ideias equilibradas.)</span>",
                    samples: [
                        { en: "<b>BOTH...AND</b>: Includes two positive possibilities.", pt: "<span style='color:#0077b6'>(Inclui duas possibilidades positivas juntas.)</span>" },
                        { en: "Ex: She has <b>both</b> musical <b>and</b> logical intelligence.", pt: "<span style='color:#0077b6'>(Ela tem tanto inteligência musical quanto lógica.)</span>" },
                        { en: "<b>EITHER...OR</b>: Presents a choice between two alternatives.", pt: "<span style='color:#0077b6'>(Apresenta uma escolha entre duas alternativas.)</span>" },
                        { en: "Ex: You can <b>either</b> focus <b>or</b> relax.", pt: "<span style='color:#0077b6'>(Você pode ou se focar ou relaxar.)</span>" },
                        { en: "<b>NEITHER...NOR</b>: Joins two negative possibilities.", pt: "<span style='color:#0077b6'>(Une duas possibilidades negativas.)</span>" },
                        { en: "Ex: <b>Neither</b> laziness <b>nor</b> distraction helps you learn.", pt: "<span style='color:#0077b6'>(Nem a preguiça nem a distração te ajudam a aprender.)</span>" }
                    ]
                },
                {
                    title: "Linking Words - Purpose",
                    audio: "TTS: Linking words explain the reason why we do an action. Use To, In order to, or So as to followed by a base verb. Use So that followed by a clause. For example: I use puzzles to stimulate my brain. You must study in order to achieve your goals. Speak slowly so as to be understood. I practice daily so that I can improve my skill.",
                    explanation: "Used to explain the reason why we do an action.<br><br><span style='color:#0077b6; font-style:italic;'>(Usado para explicar a razão pela qual realizamos uma ação.)</span>",
                    samples: [
                        { en: "<b>TO</b>: I use puzzles <b>to</b> stimulate my brain.", pt: "<span style='color:#0077b6'>(Eu uso quebra-cabeças para estimular meu cérebro.)</span>" },
                        { en: "<b>IN ORDER TO</b>: You must study <b>in order to</b> achieve your goals.", pt: "<span style='color:#0077b6'>(Você deve estudar a fim de alcançar seus objetivos.)</span>" },
                        { en: "<b>SO AS TO</b>: Speak slowly <b>so as to</b> be understood.", pt: "<span style='color:#0077b6'>(Fale devagar de modo a ser entendido.)</span>" },
                        { en: "<b>SO THAT</b>: I practice daily <b>so that</b> I can improve my skill.", pt: "<span style='color:#0077b6'>(Eu pratico diariamente para que eu possa melhorar minha habilidade.)</span>" }
                    ]
                },
                {
                    title: "Phrasal Verbs (TURN)",
                    audio: "TTS: The verb Turn changes its meaning when combined with a particle. Turn into means to become something different. Turn down means to reject or lower volume. Turn up means to appear or increase volume. Turn in means to hand over or submit. Turn around means to improve a bad situation.",
                    explanation: "The verb 'turn' changes its meaning when combined with a particle.<br><br><span style='color:#0077b6; font-style:italic;'>(O verbo 'turn' muda seu significado quando combinado com uma partícula.)</span>",
                    samples: [
                        { en: "<b>TURN INTO</b>: Hard work can <b>turn</b> potential <b>into</b> success.", pt: "<span style='color:#0077b6'>(Trabalho duro pode transformar potencial em sucesso.)</span>" },
                        { en: "<b>TURN DOWN</b>: Albert <b>turned down</b> the loud music to study.", pt: "<span style='color:#0077b6'>(Albert abaixou a música alta para estudar.)</span>" },
                        { en: "<b>TURN UP</b>: I hope my missing notebook will <b>turn up</b> soon.", pt: "<span style='color:#0077b6'>(Espero que meu caderno perdido apareça logo.)</span>" },
                        { en: "<b>TURN IN</b>: Celine is going to <b>turn in</b> her project today.", pt: "<span style='color:#0077b6'>(Celine vai entregar seu projeto hoje.)</span>" },
                        { en: "<b>TURN AROUND</b>: You can <b>turn around</b> your bad grades.", pt: "<span style='color:#0077b6'>(Você pode reverter suas notas baixas.)</span>" }
                    ]
                }
            ],

            // 3B: Natural Examples (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Hypothetical Talents (Conditionals)",
                    audio: "audio/em1-3-9/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Celine, if you **were** a famous musician, **would** you still study?", 
                            pt: "<span style='color:#0077b6'>(Celine, se você fosse uma musicista famosa, você ainda estudaria?)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Yes! If I **succeed**, I **will** use my wealth to support others.", 
                            pt: "<span style='color:#0077b6'>(Sim! Se eu tiver sucesso, usarei minha riqueza para apoiar os outros.)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Regrets and Logic (Third Conditional & Purpose)",
                    audio: "audio/em1-3-9/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Mrs. Canales", 
                            text: "Albert, if you **had focused** more, you **would have understood** the puzzle.", 
                            pt: "<span style='color:#0077b6'>(Albert, se você tivesse focado mais, você teria entendido o quebra-cabeça.)</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I know. I’ll join a study group **so that** I can get smarter.", 
                            pt: "<span style='color:#0077b6'>(Eu sei. Vou entrar em um grupo de estudos para que eu possa ficar mais inteligente.)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Choices and Change (Correlatives & Phrasals)",
                    audio: "audio/em1-3-9/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "You can **either** complain **or** act. It's your choice.", 
                            pt: "<span style='color:#0077b6'>(Você pode ou reclamar ou agir. É sua escolha.)</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I'll act! I want to **turn** my hobby **into** a talent.", 
                            pt: "<span style='color:#0077b6'>(Vou agir! Quero transformar meu hobby em um talento.)</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice (Exhaustive - 30 items)
            grammarDrillGroups: [
                {
                    title: "Conditionals",
                    drills: [
                        { q: "If you _______ (heat) water to 100°C, it _______ (boil).", options: [{t: "heated / would boil", c: false}, {t: "heat / boils", c: true}, {t: "heat / will boil", c: false}, {t: "had heated / boils", c: false}] },
                        { q: "If Albert _______ (find) his notes, he _______ (study) tonight.", options: [{t: "finds / studies", c: false}, {t: "finds / will study", c: true}, {t: "found / will study", c: false}, {t: "finds / study", c: false}] },
                        { q: "If I _______ (have) more free time, I _______ (learn) a new language.", options: [{t: "have / will learn", c: false}, {t: "had / would learn", c: true}, {t: "had / will learn", c: false}, {t: "have / learned", c: false}] },
                        { q: "If they _______ (practice) more, they _______ (win) the game yesterday.", options: [{t: "practiced / would win", c: false}, {t: "had practiced / would have won", c: true}, {t: "practice / will win", c: false}, {t: "had practiced / won", c: false}] },
                        { q: "If you _______ (exercise) every day, your brain _______ (work) better.", options: [{t: "exercise / works", c: true}, {t: "exercises / work", c: false}, {t: "exercised / worked", c: false}, {t: "will exercise / works", c: false}] },
                        { q: "If she _______ (be) here, she _______ (help) us with the puzzle.", options: [{t: "is / will help", c: false}, {t: "were / would help", c: true}, {t: "was / will help", c: false}, {t: "were / will help", c: false}] },
                        { q: "We _______ (not fail) if we _______ (study) harder last week.", options: [{t: "won't fail / studied", c: false}, {t: "wouldn't have failed / had studied", c: true}, {t: "didn't fail / study", c: false}, {t: "wouldn't fail / had studied", c: false}] },
                        { q: "If it _______ (rain) tomorrow, the study group _______ (meet) online.", options: [{t: "rains / will meet", c: true}, {t: "rain / would meet", c: false}, {t: "rained / will meet", c: false}, {t: "rains / meets", c: false}] },
                        { q: "Plants _______ (die) if they _______ (not get) enough light.", options: [{t: "die / don't get", c: true}, {t: "died / didn't get", c: false}, {t: "will die / don't get", c: false}, {t: "die / won't get", c: false}] },
                        { q: "I _______ (buy) that book if I _______ (be) a millionaire.", options: [{t: "will buy / am", c: false}, {t: "would buy / were", c: true}, {t: "buy / were", c: false}, {t: "would buy / was", c: false}] }
                    ]
                },
                {
                    title: "Correlatives & Purpose",
                    drills: [
                        { q: "She is _______ smart _______ kind.", options: [{t: "both / and", c: true}, {t: "neither / nor", c: false}, {t: "either / or", c: false}, {t: "both / or", c: false}] },
                        { q: "You can _______ read a book _______ watch a documentary.", options: [{t: "both / and", c: false}, {t: "either / or", c: true}, {t: "neither / nor", c: false}, {t: "either / and", c: false}] },
                        { q: "He has _______ musical _______ spatial intelligence.", options: [{t: "either / or", c: false}, {t: "neither / nor", c: true}, {t: "both / and", c: false}, {t: "neither / or", c: false}] },
                        { q: "I read every day _______ expand my knowledge.", options: [{t: "so that", c: false}, {t: "to", c: true}, {t: "so as to", c: false}, {t: "for", c: false}] },
                        { q: "Celine practiced the piano _______ get a good grade.", options: [{t: "so that", c: false}, {t: "in order to", c: true}, {t: "neither", c: false}, {t: "both", c: false}] },
                        { q: "Speak slowly _______ be understood by everyone.", options: [{t: "so that", c: false}, {t: "so as to", c: true}, {t: "to", c: false}, {t: "neither", c: false}] },
                        { q: "Use a highlighter _______ you can remember the facts.", options: [{t: "in order to", c: false}, {t: "so that", c: true}, {t: "to", c: false}, {t: "so as to", c: false}] },
                        { q: "I'll help you _______ achieve your goals.", options: [{t: "so that", c: true}, {t: "to", c: false}, {t: "neither", c: false}, {t: "either", c: false}] },
                        { q: "The course is _______ expensive _______ difficult.", options: [{t: "neither / nor", c: true}, {t: "both / or", c: false}, {t: "either / nor", c: false}, {t: "neither / and", c: false}] },
                        { q: "I'll join the group _______ improve my math skills.", options: [{t: "so that", c: false}, {t: "in order to", c: true}, {t: "to", c: false}, {t: "both", c: false}] }
                    ]
                },
                {
                    title: "Phrasal Verbs (TURN)",
                    drills: [
                        { q: "It’s time to _______ (entregar) your homework.", options: [{t: "turn up", c: false}, {t: "turn in", c: true}, {t: "turn off", c: false}, {t: "turn back", c: false}] },
                        { q: "Technology can _______ (transformar) our lives.", options: [{t: "turn down", c: false}, {t: "turn into", c: true}, {t: "turn around", c: false}, {t: "turn up", c: false}] },
                        { q: "Please _______ (abaixar) the volume of the TV.", options: [{t: "turn around", c: false}, {t: "turn down", c: true}, {t: "turn in", c: false}, {t: "turn back", c: false}] },
                        { q: "He managed to _______ (melhorar) his situation with hard work.", options: [{t: "turn back", c: false}, {t: "turn around", c: true}, {t: "turn into", c: false}, {t: "turn in", c: false}] },
                        { q: "I hope the lost notebook will _______ (aparecer) soon.", options: [{t: "turn up", c: true}, {t: "turn down", c: false}, {t: "turn off", c: false}, {t: "turn out", c: false}] },
                        { q: "Please _______ the lights before you leave.", options: [{t: "turn off", c: true}, {t: "turn in", c: false}, {t: "turn down", c: false}, {t: "turn up", c: false}] },
                        { q: "The experiment _______ to be a great success.", options: [{t: "turned up", c: false}, {t: "turned out", c: true}, {t: "turned back", c: false}, {t: "turned in", c: false}] },
                        { q: "I always _______ my teacher when I have questions.", options: [{t: "turn to", c: true}, {t: "turn back", c: false}, {t: "turn into", c: false}, {t: "turn around", c: false}] },
                        { q: "_______ the page and read the next text.", options: [{t: "Turn over", c: true}, {t: "Turn back", c: false}, {t: "Turn down", c: false}, {t: "Turn in", c: false}] },
                        { q: "It's too late to _______ now; let's finish the project.", options: [{t: "turn around", c: false}, {t: "turn back", c: true}, {t: "turn into", c: false}, {t: "turn up", c: false}] }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 4: SHADOWING
        // ======================================================
        {
            title: "Can you say that again?",
            sentences: [
                { text: "If I were smart, would I struggle with this puzzle?<br><small style='color:#0077b6'>(Se eu fosse inteligente, eu teria dificuldade com este quebra-cabeça?)</small>", audio: "TTS: If I were smart, would I struggle with this puzzle?", arrow: "↗" },
                { text: "Albert, you have both talent and potential!<br><small style='color:#0077b6'>(Albert, você tem tanto talento quanto potencial!)</small>", audio: "TTS: Albert, you have both talent and potential!", arrow: "↘" },
                { text: "If I had known about Multiple Intelligences, I would have felt better.<br><small style='color:#0077b6'>(Se eu soubesse sobre as Inteligências Múltiplas, eu teria me sentido melhor.)</small>", audio: "TTS: If I had known about Multiple Intelligences, I would have felt better.", arrow: "↘" },
                { text: "You must study in order to develop your skills.<br><small style='color:#0077b6'>(Você deve estudar a fim de desenvolver suas habilidades.)</small>", audio: "TTS: You must study in order to develop your skills.", arrow: "↘" },
                { text: "Neither math nor logic defines your whole intelligence.<br><small style='color:#0077b6'>(Nem a matemática nem a lógica definem toda a sua inteligência.)</small>", audio: "TTS: Neither math nor logic defines your whole intelligence.", arrow: "↘" },
                { text: "If you practice, you will succeed.<br><small style='color:#0077b6'>(Se você praticar, você terá sucesso.)</small>", audio: "TTS: If you practice, you will succeed.", arrow: "↘" }
            ]
        },

        // ======================================================
        // STEP 5: LISTENING
        // ======================================================
        {
            title: "Are you following me?",
            drills: [
                // Drill 1: Typing (Albert talking about his study group)
                {
                    type: "typing",
                    instruction: "Listen to Albert and complete the text.<br><small style='color:#0077b6'>(Ouça Albert e complete o texto.)</small>",
                    audio: "TTS: I decided to join a study group in order to get better at math. If I had started earlier, I wouldn't have failed the test. Now, I use puzzles so that I can stimulate my brain every day. It's both challenging and fun!",
                    text: "I decided to join a [study group] [in order to] get better at math. [If] I [had started] earlier, I wouldn't have failed the [test]. Now, I use puzzles [so that] I can [stimulate] my [brain] every day. It's [both] challenging [and] fun!"
                },
                // Drill 2: Dropdown (Dialogue with The Joker)
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue and choose the best options.<br><small style='color:#0077b6'>(Ouça o diálogo e escolha as melhores opções.)</small>",
                    audio: "audio/em1-3-9/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: Teacher, [how* | what | why] can I [get smarter* | turn back | turn down] in science?", a: "how" },
                        { q: "Teacher: Well, [if* | unless | both] you [focus* | focused | focusing] on [naturalist* | musical | spatial] intelligence, you will understand the environment better.", a: "if" },
                        { q: "Celine: I’ll try that! I want to [turn* | choose | ask] my interest [into* | onto | to] a real skill.", a: "turn" }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen and choose the logical response based on the lesson.<br><small style='color:#0077b6'>(Ouça e escolha a resposta lógica.)</small>",
                    audio: "TTS: What would you do if you had more free time?",
                    options: [
                        { t: "I had known about the theory.", c: false },
                        { t: "If I had more free time, I would learn to play the piano.", c: true },
                        { t: "Neither laziness nor distraction helps.", c: false },
                        { t: "I turn off the lights.", c: false }
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
                    title: "Narration - The Theory of Many Smarts",
                    audio: "TTS: Howard Gardner is the scientist who created the theory of Multiple Intelligences. He believed that traditional tests only measure a small part of the human brain. According to his analysis, there are eight types of intelligence. For example, people with high Musical Intelligence understand rhythm and harmony easily. Others have Spatial Intelligence, which helps them visualize 3-D shapes. Gardner’s goal was to show that everyone has potential. If schools focus on both logic and creativity, students succeed more often. We must value every individual's unique mind. || audio/em1-3-9/p6_text1.mp3",
                    body: "[Howard Gardner](tooltip:gardner) is the scientist who [created](tooltip:create) the theory of [Multiple Intelligences](tooltip:multiple-intelligences). He believed that traditional [tests](tooltip:test) only [measure](tooltip:value) a small part of the human [brain](tooltip:brain). According to his [analysis](tooltip:analysis), there are eight [types of intelligence](tooltip:types-of-intelligence). For example, people with high [Musical Intelligence](tooltip:musical-intelligence) [understand](tooltip:understand) [rhythm](tooltip:rhythm) and [harmony](tooltip:harmony) easily. Others have [Spatial Intelligence](tooltip:spatial-intelligence), which helps them visualize 3D shapes. Gardner’s [goal](tooltip:goal) was to show that everyone has [potential](tooltip:potential). If schools [focus](tooltip:focus) on both [logic](tooltip:logic) and [creativity](tooltip:creativity), students [succeed](tooltip:succeed) more [often](tooltip:often). We must [value](tooltip:value) every [individual's](tooltip:individual) unique [mind](tooltip:mind).",
                    questions: [
                        { q: "What did Howard Gardner believe about traditional tests?", options: [{t: "They are the best way to measure a brain.", c: false}, {t: "They only measure a small part of intelligence.", c: true}, {t: "They are only useful for musical students.", c: false}, {t: "They show full human potential.", c: false}] },
                        { q: "Which intelligence helps people visualize 3D shapes?", options: [{t: "Naturalist Intelligence.", c: false}, {t: "Linguistic Intelligence.", c: false}, {t: "Spatial Intelligence.", c: true}, {t: "Musical Intelligence.", c: false}] },
                        { q: "What is the result if schools focus on logic and creativity?", options: [{t: "Students succeed more often.", c: true}, {t: "Students fail their grades.", c: false}, {t: "The potential remains hidden.", c: false}, {t: "Logic becomes less important.", c: false}] }
                    ]
                },
                {
                    title: "Dialogue - The Math Challenge",
                    audio: "audio/em1-3-9/p6_text2.mp3",
                    body: "<b>Albert:</b> Celine, I am so worried. If I fail this math test, my parents will be angry.<br><b>Celine:</b> Don't be so negative! Neither worrying nor [complaining](tooltip:complain) will change your grade.<br><b>Albert:</b> I know. If I [had focused](tooltip:third-conditional) during the [lecture](tooltip:lecture), I [would have understood](tooltip:third-conditional) the formula.<br><b>Celine:</b> You can either stay [frustrated](tooltip:frustrated) or [join](tooltip:join) my [study group](tooltip:study-group) this afternoon.<br><b>Albert:</b> I'll join you! I need to [practice](tooltip:practice) in order to [turn around](tooltip:turn-around) my results.<br><b>Celine:</b> Great. I'll [explain](tooltip:explain) the logic slowly so that you can [get better](tooltip:get-better).",
                    questions: [
                        { q: "What is Albert worried about?", options: [{t: "His musical talent.", c: false}, {t: "His math test and grade.", c: true}, {t: "His free time.", c: false}, {t: "His sister's help.", c: false}] },
                        { q: "What does Celine say about worrying?", options: [{t: "It is as important as respect.", c: false}, {t: "It won't change his grade.", c: true}, {t: "It helps him focus.", c: false}, {t: "It is a sign of intelligence.", c: false}] },
                        { q: "What is Albert's decision?", options: [{t: "To complain more.", c: false}, {t: "To join Celine's study group.", c: true}, {t: "To leave the school early.", c: false}, {t: "To ignore the formula.", c: false}] }
                    ]
                },
                {
                    title: "Description - The Bilingual Advantage",
                    audio: "TTS: Sofia is a bilingual student who speaks both Portuguese and English fluently. Research suggests that the bilingual brain is very flexible. Because she knows two languages, she can communicate in different ways with people from the whole world. If she hadn't learned English as a child, she wouldn't have so much knowledge today. She uses her linguistic intelligence every day so as to seek new opportunities. For Sofia, being smart means having the freedom to explore the universe of ideas. || audio/em1-3-9/p6_text3.mp3",
                    body: "Sofia is a [bilingual](tooltip:bilingual) student who [speaks](tooltip:speak) both Portuguese and English fluently. Research suggests that the [bilingual](tooltip:bilingual) [brain](tooltip:brain) is very [flexible](tooltip:flexible). Because she [knows](tooltip:know) two [languages](tooltip:language), she can [communicate](tooltip:communicate) [in different ways](tooltip:in-different-ways) with people from the whole world. If she [hadn't learned](tooltip:third-conditional) English as a child, she [wouldn't have](tooltip:third-conditional) so much [knowledge](tooltip:knowledge) today. She uses her [linguistic intelligence](tooltip:linguistic-intelligence) every day so as to [seek](tooltip:seek) new [opportunities](tooltip:opportunity). For Sofia, being [smart](tooltip:smart) means having the freedom to [explore](tooltip:explore) the [universe](tooltip:universe) of ideas.",
                    questions: [
                        { q: "What languages does Sofia speak?", options: [{t: "Only English.", c: false}, {t: "Both Portuguese and English.", c: true}, {t: "Neither Portuguese nor English.", c: false}, {t: "Only Spanish.", c: false}] },
                        { q: "What is a characteristic of the bilingual brain?", options: [{t: "It is very flexible.", c: true}, {t: "It is very lazy.", c: false}, {t: "It has low potential.", c: false}, {t: "It only works with music.", c: false}] },
                        { q: "Why does Sofia use her linguistic intelligence?", options: [{t: "In order to fail her tests.", c: false}, {t: "So that she can ignore people.", c: false}, {t: "So as to seek new opportunities.", c: true}, {t: "Because she hates reading.", c: false}] }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 7: MONKEY SEE, MONKEY DO (Mixed Interactive)
        // ======================================================
        {
            title: "Monkey see, Monkey do",
            drills: [
                // 1. Matching (Phrasal Verbs with TURN)
                {
                    type: "matching",
                    instruction: "Match the phrasal verb with its Portuguese meaning.<br><small style='color:#0077b6'>(Relacione o verbo frasal com seu significado em português.)</small>",
                    pairs: [
                        { left: "Turn into", right: "Transformar-se em", val: "1" },
                        { left: "Turn down", right: "Recusar / Abaixar", val: "2" },
                        { left: "Turn in", right: "Entregar (documentos/trabalhos)", val: "3" },
                        { left: "Turn around", right: "Melhorar / Virar o jogo", val: "4" }
                    ]
                },
                // 2. Word Order (Correlative Conjunctions)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "math and / Both / are / science / important / .",
                    correct: "Both math and science are important ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>",
                    sentence: "neither / He / is / lazy nor / distracted / .",
                    correct: "He is neither lazy nor distracted ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "either / study / You / can / or / play now / .",
                    correct: "You can either study or play now ."
                },
                // 5. Clickable Error (Zero & First Conditionals)
                {
                    type: "clickable-error",
                    instruction: "Identify and click on the incorrect word in the sentence.<br><small style='color:#0077b6'>(Identifique e clique na palavra incorreta na frase.)</small>",
                    sentence: "If you heat water, it [boil](error:boils)."
                },
                {
                    type: "clickable-error",
                    instruction: "Find the grammatical mistake.<br><small style='color:#0077b6'>(Encontre o erro gramatical.)</small>",
                    sentence: "If Albert finds his notes, he [studies](error:will study) tonight."
                },
                {
                    type: "clickable-error",
                    instruction: "Find the grammatical mistake.",
                    sentence: "If I [have](error:had) more free time, I would learn a new language."
                },
                {
                    type: "clickable-error",
                    instruction: "Find the grammatical mistake.",
                    sentence: "If they had practiced more, they [will](error:would) have won yesterday."
                },
                {
                    type: "clickable-error",
                    instruction: "Find the grammatical mistake.",
                    sentence: "If I were you, I [will](error:would) be optimistic."
                },
                {
                    type: "clickable-error",
                    instruction: "Find the grammatical mistake.",
                    sentence: "Success [require](error:requires) a lot of hard work."
                },
                // ADD TO STEP 7 -> drills: []

                // 11. Odd One Out (Intelligences vs traits)
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that doesn't fit the group of intelligences.<br><small style='color:#0077b6'>(Escolha a palavra que não se encaixa no grupo de inteligências.)</small>",
                    options: [
                        { t: "Musical", c: false },
                        { t: "Naturalist", c: false },
                        { t: "Spatial", c: false },
                        { t: "Laziness", c: true }
                    ]
                },
                // 12. Odd One Out (Head parts vs instruments)
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong to the functions of the head/mind.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence às funções da cabeça/mente.)</small>",
                    options: [
                        { t: "Brain", c: false },
                        { t: "Mind", c: false },
                        { t: "Memory", c: false },
                        { t: "Guitar", c: true }
                    ]
                },
                // 13. Matching (Linking Words of Purpose)
                {
                    type: "matching",
                    instruction: "Match the linking word with its grammatical requirement.<br><small style='color:#0077b6'>(Relacione a palavra de ligação com seu requisito gramatical.)</small>",
                    pairs: [
                        { left: "So that", right: "Followed by a clause with a modal", val: "A" },
                        { left: "In order to", right: "Followed by a base verb", val: "B" },
                        { left: "Both...and", right: "Used to join two positive ideas", val: "C" },
                        { left: "Neither...nor", right: "Used to join two negative ideas", val: "D" }
                    ]
                },
                // 14. Word Order (Conditionals)
                {
                    type: "word-order",
                    instruction: "Unscramble the sentence to form a hypothetical situation.<br><small style='color:#0077b6'>(Desembaralhe a frase para formar uma situação hipotética.)</small>",
                    sentence: "were / you, / I / If / I / help / would / seek / .",
                    correct: "If I were you, I would seek help ."
                },
                // 15. Word Order (Purpose)
                {
                    type: "word-order",
                    instruction: "Put the words in order to explain a reason.<br><small style='color:#0077b6'>(Coloque as palavras em ordem para explicar um motivo.)</small>",
                    sentence: "study / I / order / in / to / succeed / .",
                    correct: "I study in order to succeed ."
                },
                // 16. Clickable Error (Phrasal Verbs)
                {
                    type: "clickable-error",
                    instruction: "Identify and click on the incorrect phrasal verb particle.<br><small style='color:#0077b6'>(Identifique e clique na partícula incorreta do verbo frasal.)</small>",
                    sentence: "I want to turn my potential [onto](error:into) a real skill."
                },
                // 17. Clickable Error (Conditionals)
                {
                    type: "clickable-error",
                    instruction: "Find the error in the conditional structure.<br><small style='color:#0077b6'>(Encontre o erro na estrutura condicional.)</small>",
                    sentence: "If I [was](error:were) you, I would be optimistic."
                },
                // 18. True or False (Gardner's Theory)
                {
                    type: "true-false",
                    instruction: "Are these statements about the theory True or False?<br><small style='color:#0077b6'>(Estas afirmações sobre a teoria são Verdadeiras ou Falsas?)</small>",
                    questions: [
                        { text: "Howard Gardner created the theory of Multiple Intelligences.", correct: "true" },
                        { text: "Linguistic Intelligence is only used by math teachers.", correct: "false" }
                    ]
                },
                // 19. Odd One Out (Phrasal Verbs with TURN)
                {
                    type: "odd-one-out",
                    instruction: "Choose which is NOT the correct use of the verb 'TURN'.<br><small style='color:#0077b6'>(Escolha qual não é o uso correto do verbo 'TURN'.)</small>",
                    options: [
                        { t: "Turn around", c: false },
                        { t: "Turn into", c: false },
                        { t: "Turn down", c: false },
                        { t: "turn between", c: true }
                    ]
                },
                // 20. Word Order (Correlatives)
                {
                    type: "word-order",
                    instruction: "Form a balanced sentence using correlative conjunctions.<br><small style='color:#0077b6'>(Forme uma frase equilibrada usando conjunções correlativas.)</small>",
                    sentence: "Neither / laziness nor / noise / helps / you / .",
                    correct: "Neither laziness nor noise helps you ."
                }
                ,// ADD TO STEP 7 -> drills: []

                // 21. Clickable Error (Third Conditional - Regrets)
                {
                    type: "clickable-error",
                    instruction: "Identify and click on the error in the past regret.<br><small style='color:#0077b6'>(Identifique e clique no erro no arrependimento passado.)</small>",
                    sentence: "If I [have](error:had) known the answer, I would have said it."
                },
                // 22. Word Order (First Conditional - Possibilities)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a possibility.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma possibilidade.)</small>",
                    sentence: "If / I / study, / I / will / pass / the / test / .",
                    correct: "If I study, I will pass the test ."
                },
                // 23. Matching (Intelligence Dominance)
                {
                    type: "matching",
                    instruction: "Match the person with their likely dominant intelligence.<br><small style='color:#0077b6'>(Relacione a pessoa com sua inteligência dominante provável.)</small>",
                    pairs: [
                        { left: "Athlete", right: "Bodily-Kinesthetic", val: "A" },
                        { left: "Poet", right: "Linguistic", val: "B" },
                        { left: "Musician", right: "Musical", val: "C" },
                        { left: "Scientist", right: "Logical-Mathematical", val: "D" }
                    ]
                },
                // 24. Odd One Out (Grammar Tense - 4 alternatives)
                {
                    type: "odd-one-out",
                    instruction: "Choose the sentence that is NOT a conditional sentence.<br><small style='color:#0077b6'>(Escolha a frase que NÃO é uma frase condicional.)</small>",
                    options: [
                        { t: "If you heat water, it boils.", c: false },
                        { t: "If I were you, I would go.", c: false },
                        { t: "I am studying right now.", c: true },
                        { t: "If I fail, I will try again.", c: false }
                    ]
                },
                // 25. Clickable Error (Correlative Conjunctions)
                {
                    type: "clickable-error",
                    instruction: "Click on the word that breaks the correlative pair.<br><small style='color:#0077b6'>(Clique na palavra que quebra o par correlativo.)</small>",
                    sentence: "She is [or](error:either) smart [either](error:or) kind."
                },
                // 26. Word Order (Phrasal Verb Instruction)
                {
                    type: "word-order",
                    instruction: "Put the words in order to give an instruction.<br><small style='color:#0077b6'>(Coloque as palavras em ordem para dar uma instrução.)</small>",
                    sentence: "Turn / the / TV / off / and / focus.",
                    correct: "Turn off the TV and focus."
                },
                // 27. Odd One Out (Phrasal Verb Meanings - 4 alternatives)
                {
                    type: "odd-one-out",
                    instruction: "Choose the phrasal verb that does NOT mean to reject or stop.<br><small style='color:#0077b6'>(Escolha o verbo frasal que NÃO significa recusar ou parar.)</small>",
                    options: [
                        { t: "Turn down", c: false },
                        { t: "Turn off", c: false },
                        { t: "Turn in", c: true },
                        { t: "Give up", c: false }
                    ]
                },
                // 28. Matching (Situational Phrasals)
                {
                    type: "matching",
                    instruction: "Match the phrasal verb with the appropriate situation.<br><small style='color:#0077b6'>(Relacione o verbo frasal com a situação apropriada.)</small>",
                    pairs: [
                        { left: "Turn up", right: "A new opportunity appears", val: "S1" },
                        { left: "Turn out", right: "The final result of a test", val: "S2" },
                        { left: "Turn back", right: "Returning to a past time", val: "S3" },
                        { left: "Turn around", right: "Improving bad grades", val: "S4" }
                    ]
                },
                // 29. Multiple Choice (Purpose Logic - 4 alternatives)
                {
                    type: "mcq",
                    instruction: "Choose the correct word to express purpose before a clause.<br><small style='color:#0077b6'>(Escolha a palavra correta para expressar propósito antes de uma oração.)</small>",
                    q: "I study hard _______ I can get better grades.",
                    options: [
                        { t: "so that", c: true },
                        { t: "in order to", c: false },
                        { t: "to", c: false },
                        { t: "so as to", c: false }
                    ]
                },
                // 30. Word Order (Zero Conditional Fact)
                {
                    type: "word-order",
                    instruction: "Put the words in order to form a scientific fact.",
                    sentence: "water, / boils / heat / If / it / you / .",
                    correct: "If you heat water, it boils ."
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn to explore your own potential! Write a short text (5-7 sentences) about your strongest types of intelligence. Mention what you do to improve your skills.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas: Agora é a sua vez de explorar o seu próprio potencial! Escreva um pequeno texto (5-7 frases) sobre os seus tipos de inteligência mais fortes. Mencione o que você faz para melhorar suas habilidades.)</span></small>",
            example: "\"I believe my strongest trait is Musical Intelligence. I practice the piano every day in order to get better. Both music and art make me feel happy. If I had more free time, I would learn the violin too. I won't give up on my talent because I want to succeed in the future!\"<br><br><small><span style='color:#0077b6'>(Exemplo: Eu acredito que minha característica mais forte é a Inteligência Musical. Eu pratico piano todos os dias a fim de melhorar. Tanto a música quanto a arte me fazem sentir feliz...)</span></small>",
            prompts: [
                "Use at least one [Conditional] (Zero, First, Second, or Third). <br><small><span style='color:#0077b6'>(Use pelo menos uma Condicional.)</span></small>",
                "Use at least one [Correlative Conjunction] (e.g., both...and). <br><small><span style='color:#0077b6'>(Use pelo menos uma Conjunção Correlativa.)</span></small>",
                "Explain what you [do] to [improve]. <br><small><span style='color:#0077b6'>(Explique o que você faz para melhorar.)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Verbs A-L)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                { term: "Accept", definition: "To consent to receive or undertake something.", defTrans: "aceitar", example: "We must accept that everyone learns differently.", exTrans: "<span style='color:#0077b6'>(Devemos aceitar que todos aprendem de forma diferente.)</span>", audioFront: "TTS: Accept", audioBack: "TTS: We must accept that everyone learns differently." },
                { term: "Agree", definition: "To have the same opinion.", defTrans: "concordar", example: "Celine agrees that everyone is smart.", exTrans: "<span style='color:#0077b6'>(Celine concorda que todos são inteligentes.)</span>", audioFront: "TTS: Agree", audioBack: "TTS: Celine agrees that everyone is smart." },
                { term: "Apologize", definition: "To express regret for something that one has done wrong.", defTrans: "desculpar-se", example: "He apologized for claiming his brain was tired.", exTrans: "<span style='color:#0077b6'>(Ele se desculpou por alegar que seu cérebro estava cansado.)</span>", audioFront: "TTS: Apologize", audioBack: "TTS: He apologized for claiming his brain was tired." },
                { term: "Ask", definition: "To say something in order to obtain an answer.", defTrans: "perguntar / pedir", example: "If you ask me, an open mind is key.", exTrans: "<span style='color:#0077b6'>(Se me perguntar, uma mente aberta é a chave.)</span>", audioFront: "TTS: Ask", audioBack: "TTS: If you ask me, an open mind is key." },
                { term: "Be", definition: "To exist or occur.", defTrans: "ser / estar", example: "Be smart about your choices.", exTrans: "<span style='color:#0077b6'>(Seja inteligente sobre suas escolhas.)</span>", audioFront: "TTS: Be", audioBack: "TTS: Be smart about your choices." },
                { term: "Believe", definition: "To accept that something is true.", defTrans: "acreditar", example: "I believe that coding is a vital skill.", exTrans: "<span style='color:#0077b6'>(Acredito que programar é uma habilidade vital.)</span>", audioFront: "TTS: Believe", audioBack: "TTS: I believe that coding is a vital skill." },
                { term: "Choose", definition: "To pick out or select.", defTrans: "escolher", example: "You can choose which talent to develop.", exTrans: "<span style='color:#0077b6'>(Você pode escolher qual talento desenvolver.)</span>", audioFront: "TTS: Choose", audioBack: "TTS: You can choose which talent to develop." },
                { term: "Come", definition: "To move or travel towards a place.", defTrans: "vir", example: "Success comes to those who try.", exTrans: "<span style='color:#0077b6'>(O sucesso vem para aqueles que tentam.)</span>", audioFront: "TTS: Come", audioBack: "TTS: Success comes to those who try." },
                { term: "Communicate", definition: "To share or exchange information.", defTrans: "comunicar", example: "Teachers communicate knowledge daily.", exTrans: "<span style='color:#0077b6'>(Professores comunicam conhecimento diariamente.)</span>", audioFront: "TTS: Communicate", audioBack: "TTS: Teachers communicate knowledge daily." },
                { term: "Compare", definition: "To estimate the similarity or dissimilarity.", defTrans: "comparar", example: "Don't compare your memory to a computer.", exTrans: "<span style='color:#0077b6'>(Não compare sua memória a um computador.)</span>", audioFront: "TTS: Compare", audioBack: "TTS: Don't compare your memory to a computer." },
                { term: "Complain", definition: "To express dissatisfaction or annoyance.", defTrans: "reclamar", example: "He complained that his skills were low.", exTrans: "<span style='color:#0077b6'>(Ele reclamou que suas habilidades eram baixas.)</span>", audioFront: "TTS: Complain", audioBack: "TTS: He complained that his skills were low." },
                { term: "Concentrate", definition: "To focus all one's attention.", defTrans: "concentrar-se", example: "You must concentrate using logic.", exTrans: "<span style='color:#0077b6'>(Você deve se concentrar usando a lógica.)</span>", audioFront: "TTS: Concentrate", audioBack: "TTS: You must concentrate using logic." },
                { term: "Contribute", definition: "To give in order to help achieve something.", defTrans: "contribuir", example: "Artists contribute to society.", exTrans: "<span style='color:#0077b6'>(Artistas contribuem para a sociedade.)</span>", audioFront: "TTS: Contribute", audioBack: "TTS: Artists contribute to society." },
                { term: "Create", definition: "To bring something into existence.", defTrans: "criar", example: "Dancers create beauty.", exTrans: "<span style='color:#0077b6'>(Dançarinos criam beleza.)</span>", audioFront: "TTS: Create", audioBack: "TTS: Dancers create beauty." },
                { term: "Decide", definition: "To come to a resolution.", defTrans: "decidir", example: "You must decide if you want to improve.", exTrans: "<span style='color:#0077b6'>(Você deve decidir se quer melhorar.)</span>", audioFront: "TTS: Decide", audioBack: "TTS: You must decide if you want to improve." },
                { term: "Develop", definition: "To grow or cause to grow.", defTrans: "desenvolver", example: "It is hard to develop skills alone.", exTrans: "<span style='color:#0077b6'>(É difícil desenvolver habilidades sozinho.)</span>", audioFront: "TTS: Develop", audioBack: "TTS: It is hard to develop skills alone." },
                { term: "Discover", definition: "To find unexpectedly.", defTrans: "descobrir", example: "Use meditation to discover your mind.", exTrans: "<span style='color:#0077b6'>(Use a meditação para descobrir sua mente.)</span>", audioFront: "TTS: Discover", audioBack: "TTS: Use meditation to discover your mind." },
                { term: "Disturb", definition: "To interrupt the sleep, relaxation, or privacy of.", defTrans: "perturbar", example: "Don't disturb the animals.", exTrans: "<span style='color:#0077b6'>(Não perturbe os animais.)</span>", audioFront: "TTS: Disturb", audioBack: "TTS: Don't disturb the animals." },
                { term: "Do", definition: "To perform an action.", defTrans: "fazer", example: "Philosophers do a lot of research.", exTrans: "<span style='color:#0077b6'>(Filósofos fazem muita pesquisa.)</span>", audioFront: "TTS: Do", audioBack: "TTS: Philosophers do a lot of research." },
                { term: "Encourage", definition: "To give support, confidence, or hope.", defTrans: "encorajar", example: "My parents encourage me to study.", exTrans: "<span style='color:#0077b6'>(Meus pais me encorajam a estudar.)</span>", audioFront: "TTS: Encourage", audioBack: "TTS: My parents encourage me to study." },
                { term: "Expand", definition: "To make larger or more extensive.", defTrans: "expandir", example: "You can expand your mind.", exTrans: "<span style='color:#0077b6'>(Você pode expandir sua mente.)</span>", audioFront: "TTS: Expand", audioBack: "TTS: You can expand your mind." },
                { term: "Explain", definition: "To make an idea clear.", defTrans: "explicar", example: "He explained why he turned down the invite.", exTrans: "<span style='color:#0077b6'>(Ele explicou por que recusou o convite.)</span>", audioFront: "TTS: Explain", audioBack: "TTS: He explained why he turned down the invite." },
                { term: "Explore", definition: "To travel in or through an unfamiliar area.", defTrans: "explorar", example: "Let's explore the city.", exTrans: "<span style='color:#0077b6'>(Vamos explorar a cidade.)</span>", audioFront: "TTS: Explore", audioBack: "TTS: Let's explore the city." },
                { term: "Fail", definition: "To be unsuccessful.", defTrans: "falhar / reprovar", example: "If you lose focus, you won't pass.", exTrans: "<span style='color:#0077b6'>(Se você perder o foco, não passará.)</span>", audioFront: "TTS: Fail", audioBack: "TTS: If you lose focus, you won't pass." },
                { term: "Feel", definition: "To experience an emotion.", defTrans: "sentir", example: "I feel better when I read.", exTrans: "<span style='color:#0077b6'>(Sinto-me melhor quando leio.)</span>", audioFront: "TTS: Feel", audioBack: "TTS: I feel better when I read." },
                { term: "Find", definition: "To discover by chance or search.", defTrans: "encontrar", example: "I hope you find the project successful.", exTrans: "<span style='color:#0077b6'>(Espero que você ache o projeto bem-sucedido.)</span>", audioFront: "TTS: Find", audioBack: "TTS: I hope you find the project successful." },
                { term: "Focus", definition: "To pay particular attention to.", defTrans: "focar", example: "You must focus to improve.", exTrans: "<span style='color:#0077b6'>(Você deve focar para melhorar.)</span>", audioFront: "TTS: Focus", audioBack: "TTS: You must focus to improve." },
                { term: "Get", definition: "To come to have or hold.", defTrans: "conseguir / obter", example: "I will get help from my teacher.", exTrans: "<span style='color:#0077b6'>(Vou conseguir ajuda do meu professor.)</span>", audioFront: "TTS: Get", audioBack: "TTS: I will get help from my teacher." },
                { term: "Give up", definition: "To stop making an effort.", defTrans: "desistir", example: "Never give up on your goals.", exTrans: "<span style='color:#0077b6'>(Nunca desista dos seus objetivos.)</span>", audioFront: "TTS: Give up", audioBack: "TTS: Never give up on your goals." },
                { term: "Go", definition: "To move from one place to another.", defTrans: "ir", example: "Go to the next page.", exTrans: "<span style='color:#0077b6'>(Vá para a próxima página.)</span>", audioFront: "TTS: Go", audioBack: "TTS: Go to the next page." },
                { term: "Happen", definition: "To take place.", defTrans: "acontecer", example: "Mistakes happen.", exTrans: "<span style='color:#0077b6'>(Erros acontecem.)</span>", audioFront: "TTS: Happen", audioBack: "TTS: Mistakes happen." },
                { term: "Have", definition: "To possess, own, or hold.", defTrans: "ter", example: "If you have discipline, you get smarter.", exTrans: "<span style='color:#0077b6'>(Se você tiver disciplina, fica mais inteligente.)</span>", audioFront: "TTS: Have", audioBack: "TTS: If you have discipline, you get smarter." },
                { term: "Hear", definition: "To perceive with the ear.", defTrans: "ouvir", example: "We hear and learn in different ways.", exTrans: "<span style='color:#0077b6'>(Nós ouvimos e aprendemos de formas diferentes.)</span>", audioFront: "TTS: Hear", audioBack: "TTS: We hear and learn in different ways." },
                { term: "Help", definition: "To make it easier for someone.", defTrans: "ajudar", example: "Knowing the types can help you study.", exTrans: "<span style='color:#0077b6'>(Saber os tipos pode te ajudar a estudar.)</span>", audioFront: "TTS: Help", audioBack: "TTS: Knowing the types can help you study." },
                { term: "Ignore", definition: "To refuse to take notice of.", defTrans: "ignorar", example: "Ignore the noise to concentrate.", exTrans: "<span style='color:#0077b6'>(Ignore o barulho para se concentrar.)</span>", audioFront: "TTS: Ignore", audioBack: "TTS: Ignore the noise to concentrate." },
                { term: "Imagine", definition: "To form a mental image.", defTrans: "imaginar", example: "Imagine your goals.", exTrans: "<span style='color:#0077b6'>(Imagine seus objetivos.)</span>", audioFront: "TTS: Imagine", audioBack: "TTS: Imagine your goals." },
                { term: "Improve", definition: "To make or become better.", defTrans: "melhorar", example: "You can improve your math skills.", exTrans: "<span style='color:#0077b6'>(Você pode melhorar suas habilidades matemáticas.)</span>", audioFront: "TTS: Improve", audioBack: "TTS: You can improve your math skills." },
                { term: "Invent", definition: "To create or design.", defTrans: "inventar", example: "You can invent a new gadget.", exTrans: "<span style='color:#0077b6'>(Você pode inventar um novo aparelho.)</span>", audioFront: "TTS: Invent", audioBack: "TTS: You can invent a new gadget." },
                { term: "Join", definition: "To become a member of.", defTrans: "juntar-se", example: "I will join a group.", exTrans: "<span style='color:#0077b6'>(Vou me juntar a um grupo.)</span>", audioFront: "TTS: Join", audioBack: "TTS: I will join a group." },
                { term: "Keep", definition: "To continue a course of action.", defTrans: "manter / guardar", example: "I would keep practicing.", exTrans: "<span style='color:#0077b6'>(Eu continuaria praticando.)</span>", audioFront: "TTS: Keep", audioBack: "TTS: I would keep practicing." },
                { term: "Know", definition: "To be aware of.", defTrans: "saber / conhecer", example: "If I had known the answer.", exTrans: "<span style='color:#0077b6'>(Se eu soubesse a resposta.)</span>", audioFront: "TTS: Know", audioBack: "TTS: If I had known the answer." },
                { term: "Lead to", definition: "To result in.", defTrans: "levar a", example: "Practice leads to success.", exTrans: "<span style='color:#0077b6'>(A prática leva ao sucesso.)</span>", audioFront: "TTS: Lead to", audioBack: "TTS: Practice leads to success." },
                { term: "Learn", definition: "To gain knowledge.", defTrans: "aprender", example: "Use free time to learn.", exTrans: "<span style='color:#0077b6'>(Use o tempo livre para aprender.)</span>", audioFront: "TTS: Learn", audioBack: "TTS: Use free time to learn." },
                { term: "Leave", definition: "To go away from.", defTrans: "sair / deixar", example: "Don't leave early.", exTrans: "<span style='color:#0077b6'>(Não saia cedo.)</span>", audioFront: "TTS: Leave", audioBack: "TTS: Don't leave early." },
                { term: "Love", definition: "To feel deep affection.", defTrans: "amar", example: "I love the results.", exTrans: "<span style='color:#0077b6'>(Eu amo os resultados.)</span>", audioFront: "TTS: Love", audioBack: "TTS: I love the results." },
                // ADD THESE TO STEP 9 -> items: []

                { term: "Mean", definition: "To have as its explanation.", defTrans: "significar", example: "What did you mean by that?", exTrans: "<span style='color:#0077b6'>(O que você quis dizer com isso?)</span>", audioFront: "TTS: Mean", audioBack: "TTS: What did you mean by that?" },
                { term: "Mention", definition: "To refer to something briefly.", defTrans: "mencionar", example: "He mentioned the new rule.", exTrans: "<span style='color:#0077b6'>(Ele mencionou a nova regra.)</span>", audioFront: "TTS: Mention", audioBack: "TTS: He mentioned the new rule." },
                { term: "Motivate", definition: "To provide a reason for doing something.", defTrans: "motivar", example: "Music motivates me to move.", exTrans: "<span style='color:#0077b6'>(A música me motiva a me mexer.)</span>", audioFront: "TTS: Motivate", audioBack: "TTS: Music motivates me to move." },
                { term: "Move", definition: "To change position.", defTrans: "mover-se", example: "Exercise helps you move.", exTrans: "<span style='color:#0077b6'>(O exercício ajuda você a se mexer.)</span>", audioFront: "TTS: Move", audioBack: "TTS: Exercise helps you move." },
                { term: "Need", definition: "To require something because it is essential.", defTrans: "precisar", example: "You need to study.", exTrans: "<span style='color:#0077b6'>(Você precisa estudar.)</span>", audioFront: "TTS: Need", audioBack: "TTS: You need to study." },
                { term: "Neglect", definition: "To fail to care for properly.", defTrans: "negligenciar", example: "Don't neglect your education.", exTrans: "<span style='color:#0077b6'>(Não negligencie sua educação.)</span>", audioFront: "TTS: Neglect", audioBack: "TTS: Don't neglect your education." },
                { term: "Offer", definition: "To present something for acceptance.", defTrans: "oferecer", example: "The school offers resources.", exTrans: "<span style='color:#0077b6'>(A escola oferece recursos.)</span>", audioFront: "TTS: Offer", audioBack: "TTS: The school offers resources." },
                { term: "Overcome", definition: "To succeed in dealing with a problem.", defTrans: "superar", example: "Help you overcome challenges.", exTrans: "<span style='color:#0077b6'>(Ajudar você a superar desafios.)</span>", audioFront: "TTS: Overcome", audioBack: "TTS: Help you overcome challenges." },
                { term: "Pass", definition: "To be successful in a test.", defTrans: "passar", example: "If you focus, you pass.", exTrans: "<span style='color:#0077b6'>(Se você focar, você passa.)</span>", audioFront: "TTS: Pass", audioBack: "TTS: If you focus, you pass." },
                { term: "Praise", definition: "To express warm approval.", defTrans: "elogiar", example: "The teacher will praise you.", exTrans: "<span style='color:#0077b6'>(O professor vai te elogiar.)</span>", audioFront: "TTS: Praise", audioBack: "TTS: The teacher will praise you." },
                { term: "Practice", definition: "To perform an activity repeatedly.", defTrans: "praticar", example: "You must practice daily.", exTrans: "<span style='color:#0077b6'>(Você deve praticar diariamente.)</span>", audioFront: "TTS: Practice", audioBack: "TTS: You must practice daily." },
                { term: "Read", definition: "To look at and comprehend written words.", defTrans: "ler", example: "Read every single day.", exTrans: "<span style='color:#0077b6'>(Leia todo santo dia.)</span>", audioFront: "TTS: Read", audioBack: "TTS: Read every single day." },
                { term: "Remember", definition: "To bring a fact back into one's mind.", defTrans: "lembrar", example: "Remember that big goals take time.", exTrans: "<span style='color:#0077b6'>(Lembre-se que grandes objetivos levam tempo.)</span>", audioFront: "TTS: Remember", audioBack: "TTS: Remember that big goals take time." },
                { term: "Require", definition: "To need for a particular purpose.", defTrans: "exigir", example: "Goals require small steps.", exTrans: "<span style='color:#0077b6'>(Objetivos exigem pequenos passos.)</span>", audioFront: "TTS: Require", audioBack: "TTS: Goals require small steps." },
                { term: "See", definition: "To perceive with the eyes.", defTrans: "ver", example: "I see your potential.", exTrans: "<span style='color:#0077b6'>(Eu vejo seu potencial.)</span>", audioFront: "TTS: See", audioBack: "TTS: I see your potential." },
                { term: "Seek", definition: "To attempt to find.", defTrans: "buscar", example: "Seek your own path.", exTrans: "<span style='color:#0077b6'>(Busque seu próprio caminho.)</span>", audioFront: "TTS: Seek", audioBack: "TTS: Seek your own path." },
                { term: "Show", definition: "To allow to be seen.", defTrans: "mostrar", example: "Please show us how.", exTrans: "<span style='color:#0077b6'>(Por favor, nos mostre como.)</span>", audioFront: "TTS: Show", audioBack: "TTS: Please show us how." },
                { term: "Speak", definition: "To say words.", defTrans: "falar", example: "Speak English fluently.", exTrans: "<span style='color:#0077b6'>(Fale inglês fluentemente.)</span>", audioFront: "TTS: Speak", audioBack: "TTS: Speak English fluently." },
                { term: "Start", definition: "To begin.", defTrans: "começar", example: "Start a new hobby.", exTrans: "<span style='color:#0077b6'>(Comece um novo hobby.)</span>", audioFront: "TTS: Start", audioBack: "TTS: Start a new hobby." },
                { term: "Stimulate", definition: "To encourage development.", defTrans: "estimular", example: "Stimulate your creativity.", exTrans: "<span style='color:#0077b6'>(Estimule sua criatividade.)</span>", audioFront: "TTS: Stimulate", audioBack: "TTS: Stimulate your creativity." },
                { term: "Struggle", definition: "To make forceful efforts.", defTrans: "lutar / esforçar-se", example: "If you struggle, ask for help.", exTrans: "<span style='color:#0077b6'>(Se tiver dificuldade, peça ajuda.)</span>", audioFront: "TTS: Struggle", audioBack: "TTS: If you struggle, ask for help." },
                { term: "Study", definition: "To devote time to learning.", defTrans: "estudar", example: "Study with a partner.", exTrans: "<span style='color:#0077b6'>(Estude com um parceiro.)</span>", audioFront: "TTS: Study", audioBack: "TTS: Study with a partner." },
                { term: "Succeed", definition: "To achieve the desired aim.", defTrans: "ter sucesso", example: "You can succeed.", exTrans: "<span style='color:#0077b6'>(Você pode ter sucesso.)</span>", audioFront: "TTS: Succeed", audioBack: "TTS: You can succeed." },
                { term: "Suggest", definition: "To put forward for consideration.", defTrans: "sugerir", example: "I suggest a plan.", exTrans: "<span style='color:#0077b6'>(Eu sugiro um plano.)</span>", audioFront: "TTS: Suggest", audioBack: "TTS: I suggest a plan." },
                { term: "Support", definition: "To give assistance to.", defTrans: "apoiar", example: "I support your ideas.", exTrans: "<span style='color:#0077b6'>(Eu apoio suas ideias.)</span>", audioFront: "TTS: Support", audioBack: "TTS: I support your ideas." },
                { term: "Think", definition: "To have a particular opinion.", defTrans: "pensar", example: "I think we need time.", exTrans: "<span style='color:#0077b6'>(Acho que precisamos de tempo.)</span>", audioFront: "TTS: Think", audioBack: "TTS: I think we need time." },
                { term: "Touch upon", definition: "To mention briefly.", defTrans: "tocar em (assunto)", example: "The book touches upon travel.", exTrans: "<span style='color:#0077b6'>(O livro toca no assunto de viagem.)</span>", audioFront: "TTS: Touch upon", audioBack: "TTS: The book touches upon travel." },
                { term: "Travel", definition: "To make a journey.", defTrans: "viajar", example: "Scientists travel to learn.", exTrans: "<span style='color:#0077b6'>(Cientistas viajam para aprender.)</span>", audioFront: "TTS: Travel", audioBack: "TTS: Scientists travel to learn." },
                { term: "Turn", definition: "To change or transform.", defTrans: "virar / tornar-se", example: "Turn a hobby into a talent.", exTrans: "<span style='color:#0077b6'>(Transforme um hobby em um talento.)</span>", audioFront: "TTS: Turn", audioBack: "TTS: Turn a hobby into a talent." },
                { term: "Understand", definition: "To perceive the meaning of.", defTrans: "entender", example: "I understand why.", exTrans: "<span style='color:#0077b6'>(Eu entendo o porquê.)</span>", audioFront: "TTS: Understand", audioBack: "TTS: I understand why." },
                { term: "Value", definition: "To consider important.", defTrans: "valorizar", example: "Value your privacy.", exTrans: "<span style='color:#0077b6'>(Valorize sua privacidade.)</span>", audioFront: "TTS: Value", audioBack: "TTS: Value your privacy." },
                { term: "Want", definition: "To have a desire for.", defTrans: "querer", example: "I want to work.", exTrans: "<span style='color:#0077b6'>(Eu quero trabalhar.)</span>", audioFront: "TTS: Want", audioBack: "TTS: I want to work." },
                { term: "Work", definition: "To be engaged in activity.", defTrans: "trabalhar", example: "Work at a company.", exTrans: "<span style='color:#0077b6'>(Trabalhe em uma empresa.)</span>", audioFront: "TTS: Work", audioBack: "TTS: Work at a company." },
                // ADD THESE TO STEP 9 -> items: []

                // --- Topic 3: Intelligence & Learning ---
                { term: "Intelligence", definition: "The ability to acquire and apply knowledge.", defTrans: "inteligência", example: "Intelligence has many forms.", exTrans: "<span style='color:#0077b6'>(A inteligência tem muitas formas.)</span>", audioFront: "TTS: Intelligence", audioBack: "TTS: Intelligence has many forms." },
                { term: "Smart / Intelligent", definition: "Having or showing a quick-witted intelligence.", defTrans: "inteligente", example: "He is very smart at logic.", exTrans: "<span style='color:#0077b6'>(Ele é muito inteligente em lógica.)</span>", audioFront: "TTS: Smart or Intelligent", audioBack: "TTS: He is very smart at logic." },
                { term: "Brain", definition: "The organ that serves as the center of the nervous system.", defTrans: "cérebro", example: "The brain is complex.", exTrans: "<span style='color:#0077b6'>(O cérebro é complexo.)</span>", audioFront: "TTS: Brain", audioBack: "TTS: The brain is complex." },
                { term: "Mind", definition: "The element of a person that enables them to be aware.", defTrans: "mente", example: "Keep an open mind.", exTrans: "<span style='color:#0077b6'>(Mantenha a mente aberta.)</span>", audioFront: "TTS: Mind", audioBack: "TTS: Keep an open mind." },
                { term: "Skill", definition: "The ability to do something well.", defTrans: "habilidade", example: "Drawing is a skill.", exTrans: "<span style='color:#0077b6'>(Desenhar é uma habilidade.)</span>", audioFront: "TTS: Skill", audioBack: "TTS: Drawing is a skill." },
                { term: "Talent", definition: "Natural aptitude or skill.", defTrans: "talento", example: "She has a talent for music.", exTrans: "<span style='color:#0077b6'>(Ela tem um talento para a música.)</span>", audioFront: "TTS: Talent", audioBack: "TTS: She has a talent for music." },
                { term: "Potential", definition: "Having the capacity to become something in the future.", defTrans: "potencial", example: "Everyone has potential.", exTrans: "<span style='color:#0077b6'>(Todo mundo tem potencial.)</span>", audioFront: "TTS: Potential", audioBack: "TTS: Everyone has potential." },
                { term: "Knowledge", definition: "Facts, information, and skills acquired.", defTrans: "conhecimento", example: "Knowledge comes from study.", exTrans: "<span style='color:#0077b6'>(O conhecimento vem do estudo.)</span>", audioFront: "TTS: Knowledge", audioBack: "TTS: Knowledge comes from study." },
                { term: "Memory", definition: "The faculty by which the mind stores information.", defTrans: "memória", example: "He has a good memory.", exTrans: "<span style='color:#0077b6'>(Ele tem uma boa memória.)</span>", audioFront: "TTS: Memory", audioBack: "TTS: He has a good memory." },
                { term: "Linguistic Int.", definition: "Ability to use language effectively.", defTrans: "int. linguística", example: "Poets use Linguistic Intelligence.", exTrans: "<span style='color:#0077b6'>(Poetas usam Inteligência Linguística.)</span>", audioFront: "TTS: Linguistic Intelligence", audioBack: "TTS: Poets use Linguistic Intelligence." },
                { term: "Logical-Mathematical Int.", definition: "Ability to analyze problems logically.", defTrans: "int. lógico-matemática", example: "It helps in math.", exTrans: "<span style='color:#0077b6'>(Ajuda em matemática.)</span>", audioFront: "TTS: Logical Mathematical Intelligence", audioBack: "TTS: It helps in math." },
                { term: "Spatial Int.", definition: "Ability to visualize with the mind's eye.", defTrans: "int. espacial", example: "Artists use Spatial Intelligence.", exTrans: "<span style='color:#0077b6'>(Artistas usam Inteligência Espacial.)</span>", audioFront: "TTS: Spatial Intelligence", audioBack: "TTS: Artists use Spatial Intelligence." },
                { term: "Bodily-Kinesthetic Int.", definition: "Ability to control body movements.", defTrans: "int. corporal-cinestésica", example: "Athletes have this intelligence.", exTrans: "<span style='color:#0077b6'>(Atletas têm essa inteligência.)</span>", audioFront: "TTS: Bodily Kinesthetic Intelligence", audioBack: "TTS: Athletes have this intelligence." },
                { term: "Musical Int.", definition: "Ability to produce and appreciate rhythm and pitch.", defTrans: "int. musical", example: "Playing instruments requires it.", exTrans: "<span style='color:#0077b6'>(Tocar instrumentos exige isso.)</span>", audioFront: "TTS: Musical Intelligence", audioBack: "TTS: Playing instruments requires it." },
                { term: "Interpersonal Int.", definition: "Ability to understand others.", defTrans: "int. interpessoal", example: "Leaders use this.", exTrans: "<span style='color:#0077b6'>(Líderes usam isso.)</span>", audioFront: "TTS: Interpersonal Intelligence", audioBack: "TTS: Leaders use this." },
                { term: "Intrapersonal Int.", definition: "Ability to understand oneself.", defTrans: "int. intrapessoal", example: "Self-awareness is key.", exTrans: "<span style='color:#0077b6'>(Autoconhecimento é a chave.)</span>", audioFront: "TTS: Intrapersonal Intelligence", audioBack: "TTS: Self-awareness is key." },
                { term: "Naturalist Int.", definition: "Ability to identify elements of nature.", defTrans: "int. naturalista", example: "Biologists possess this.", exTrans: "<span style='color:#0077b6'>(Biólogos possuem isso.)</span>", audioFront: "TTS: Naturalist Intelligence", audioBack: "TTS: Biologists possess this." },
                { term: "Existential Int.", definition: "Ability to ponder deep questions.", defTrans: "int. existencial", example: "It involves deep thinking.", exTrans: "<span style='color:#0077b6'>(Envolve pensamento profundo.)</span>", audioFront: "TTS: Existential Intelligence", audioBack: "TTS: It involves deep thinking." },
                { term: "Bilingual", definition: "Able to speak two languages fluently.", defTrans: "bilíngue", example: "Sofia is bilingual.", exTrans: "<span style='color:#0077b6'>(Sofia é bilíngue.)</span>", audioFront: "TTS: Bilingual", audioBack: "TTS: Sofia is bilingual." },

                // --- Topic 4: Phrasal Verbs with TURN ---
                { term: "Turn into", definition: "To change or develop into something different.", defTrans: "transformar-se em", example: "Turn a hobby into a skill.", exTrans: "<span style='color:#0077b6'>(Transforme um hobby em uma habilidade.)</span>", audioFront: "TTS: Turn into", audioBack: "TTS: Turn a hobby into a skill." },
                { term: "Turn down", definition: "To reject or lower volume.", defTrans: "recusar / abaixar", example: "Turn down the music.", exTrans: "<span style='color:#0077b6'>(Abaixe a música.)</span>", audioFront: "TTS: Turn down", audioBack: "TTS: Turn down the music." },
                { term: "Turn up", definition: "To appear or increase volume.", defTrans: "aparecer / aumentar", example: "It will turn up soon.", exTrans: "<span style='color:#0077b6'>(Vai aparecer em breve.)</span>", audioFront: "TTS: Turn up", audioBack: "TTS: It will turn up soon." },
                { term: "Turn on / off", definition: "To start or stop a device.", defTrans: "ligar / desligar", example: "Turn off the TV.", exTrans: "<span style='color:#0077b6'>(Desligue a TV.)</span>", audioFront: "TTS: Turn on or off", audioBack: "TTS: Turn off the TV." },
                { term: "Turn out", definition: "To prove to be the case.", defTrans: "acabar sendo / resultar", example: "It turned out well.", exTrans: "<span style='color:#0077b6'>(Acabou sendo bom.)</span>", audioFront: "TTS: Turn out", audioBack: "TTS: It turned out well." },
                { term: "Turn around", definition: "To improve a situation.", defTrans: "virar o jogo / melhorar", example: "Turn around your grades.", exTrans: "<span style='color:#0077b6'>(Melhore suas notas.)</span>", audioFront: "TTS: Turn around", audioBack: "TTS: Turn around your grades." },
                { term: "Turn to", definition: "To go to someone for help.", defTrans: "recorrer a", example: "Turn to your teacher.", exTrans: "<span style='color:#0077b6'>(Recorra ao seu professor.)</span>", audioFront: "TTS: Turn to", audioBack: "TTS: Turn to your teacher." },
                { term: "Turn in", definition: "To submit work.", defTrans: "entregar", example: "Turn in your test.", exTrans: "<span style='color:#0077b6'>(Entregue sua prova.)</span>", audioFront: "TTS: Turn in", audioBack: "TTS: Turn in your test." },
                { term: "Turn over", definition: "To flip something.", defTrans: "virar / entregar", example: "Turn over the page.", exTrans: "<span style='color:#0077b6'>(Vire a página.)</span>", audioFront: "TTS: Turn over", audioBack: "TTS: Turn over the page." },
                { term: "Turn back", definition: "To go back.", defTrans: "voltar", example: "Don't turn back now.", exTrans: "<span style='color:#0077b6'>(Não volte agora.)</span>", audioFront: "TTS: Turn back", audioBack: "TTS: Don't turn back now." },

                // --- Topic 5: Expressions & Grammar ---
                { term: "Get smarter", definition: "To increase intelligence.", defTrans: "ficar mais inteligente", example: "I want to get smarter.", exTrans: "<span style='color:#0077b6'>(Quero ficar mais inteligente.)</span>", audioFront: "TTS: Get smarter", audioBack: "TTS: I want to get smarter." },
                { term: "In order to", definition: "For the purpose of.", defTrans: "a fim de", example: "Study in order to pass.", exTrans: "<span style='color:#0077b6'>(Estude a fim de passar.)</span>", audioFront: "TTS: In order to", audioBack: "TTS: Study in order to pass." },
                { term: "So that", definition: "For the purpose that.", defTrans: "para que", example: "Practice so that you improve.", exTrans: "<span style='color:#0077b6'>(Pratique para que você melhore.)</span>", audioFront: "TTS: So that", audioBack: "TTS: Practice so that you improve." },
                { term: "Both...and", definition: "Including two things.", defTrans: "tanto... quanto", example: "Both math and art.", exTrans: "<span style='color:#0077b6'>(Tanto matemática quanto arte.)</span>", audioFront: "TTS: Both and", audioBack: "TTS: Both math and art." },
                { term: "Neither...nor", definition: "Not the one nor the other.", defTrans: "nem... nem", example: "Neither lazy nor bored.", exTrans: "<span style='color:#0077b6'>(Nem preguiçoso nem entediado.)</span>", audioFront: "TTS: Neither nor", audioBack: "TTS: Neither lazy nor bored." },
                { term: "Zero Conditional", definition: "General truths (If + Present, Present).", defTrans: "Condicional Zero (Fatos)", example: "If you heat water, it boils.", exTrans: "<span style='color:#0077b6'>(Se você aquecer água, ela ferve.)</span>", audioFront: "TTS: Zero Conditional", audioBack: "TTS: If you heat water, it boils." },
                { term: "First Conditional", definition: "Real possibilities (If + Present, Will).", defTrans: "Primeira Condicional (Futuro)", example: "If I study, I will pass.", exTrans: "<span style='color:#0077b6'>(Se eu estudar, passarei.)</span>", audioFront: "TTS: First Conditional", audioBack: "TTS: If I study, I will pass." },
                { term: "Second Conditional", definition: "Hypothetical (If + Past, Would).", defTrans: "Segunda Condicional (Hipotético)", example: "If I were you, I would go.", exTrans: "<span style='color:#0077b6'>(Se eu fosse você, eu iria.)</span>", audioFront: "TTS: Second Conditional", audioBack: "TTS: If I were you, I would go." },
                { term: "Third Conditional", definition: "Regrets (If + Past Perfect, Would have).", defTrans: "Terceira Condicional (Arrependimento)", example: "If I had known, I would have gone.", exTrans: "<span style='color:#0077b6'>(Se eu soubesse, eu teria ido.)</span>", audioFront: "TTS: Third Conditional", audioBack: "TTS: If I had known, I would have gone." }
            ] // Closes items
        } // Closes Step 9
    ], // Closes steps

    // ======================================================
    // GLOSSARY (Part 1: Context, Intelligence, Phrasals)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { topic: "Context", term: "gardner", definition: "Howard Gardner, a psychologist who developed the theory of multiple intelligences.", translation: "Howard Gardner - Um psicólogo que desenvolveu a teoria das inteligências múltiplas." },
        { topic: "Context", term: "frustrated", definition: "Feeling annoyance or distress.", translation: "Frustrado" },
        { topic: "Context", term: "suppose", definition: "To think or assume that something is true.", translation: "Supor" },
        { topic: "Context", term: "neglect", definition: "To fail to care for properly.", translation: "Negligenciar" },
        { topic: "Context", term: "skill", definition: "The ability to do something well.", translation: "Habilidade" },
        { topic: "Context", term: "multiple-intelligences", definition: "The theory that there are different types of human intelligence.", translation: "Inteligências Múltiplas" },
        { topic: "Context", term: "practice", definition: "To perform an activity repeatedly to improve.", translation: "Praticar" },
        { topic: "Context", term: "get-better", definition: "To improve in skill or health.", translation: "Melhorar" },
        { topic: "Context", term: "brain", definition: "The organ that serves as the center of the nervous system.", translation: "Cérebro" },
        { topic: "Context", term: "focus", definition: "To pay particular attention to.", translation: "Focar" },
        { topic: "Context", term: "understand", definition: "To perceive the intended meaning.", translation: "Entender" },
        { topic: "Context", term: "musical-intelligence", definition: "Ability to produce and appreciate rhythm, pitch, and timbre.", translation: "Inteligência Musical" },
        { topic: "Context", term: "instrument", definition: "A tool or implement, especially for music.", translation: "Instrumento" },
        { topic: "Context", term: "study-group", definition: "A group of people who meet to study.", translation: "Grupo de estudos" },
        { topic: "Context", term: "improve", definition: "To make or become better.", translation: "Melhorar" },
        { topic: "Context", term: "achieve", definition: "To reach or attain a goal.", translation: "Alcançar" },
        { topic: "Context", term: "goal", definition: "The object of a person's ambition or effort.", translation: "Meta / Objetivo" },
        { topic: "Context", term: "potential", definition: "Having the capacity to become something in the future.", translation: "Potencial" },
        { topic: "Context", term: "knowledge", definition: "Facts and skills acquired through experience.", translation: "Conhecimento" },
        { topic: "Context", term: "turn-around", definition: "To improve a situation.", translation: "Melhorar / Virar o jogo" },
        { topic: "Context", term: "analysis", definition: "Detailed examination of the elements or structure of something.", translation: "Análise" },
        { topic: "Context", term: "rhythm", definition: "A strong, regular, repeated pattern of movement or sound.", translation: "Ritmo" },
        { topic: "Context", term: "harmony", definition: "The combination of simultaneously sounded musical notes to produce a pleasing effect.", translation: "Harmonia" },
        { topic: "Context", term: "often", definition: "Frequently or regularly.", translation: "Frequentemente" },
        { topic: "Context", term: "logic", definition: "Reasoning conducted according to strict principles of validity.", translation: "Lógica" },
        { topic: "Context", term: "creativity", definition: "The use of imagination to create something.", translation: "Criatividade" },
        { topic: "Context", term: "individual", definition: "Person considered separately from a group.", translation: "Indivíduo" },
        { topic: "Context", term: "lecture", definition: "An educational talk to an audience.", translation: "Palestra" },
        { topic: "Context", term: "flexible", definition: "Able to adapt to new situations.", translation: "Flexível" },
        { topic: "Context", term: "language", definition: "The method of human communication.", translation: "Língua" },
        { topic: "Context", term: "in-different-ways", definition: "Using various methods.", translation: "De formas diferentes" },
        { topic: "Context", term: "universe", definition: "All existing matter and space.", translation: "Universo" },
        { topic: "Context", term: "opportunity", definition: "A set of circumstances that makes it possible to do something.", translation: "Oportunidade" },
        { topic: "Context", term: "purpose", definition: "The reason for which something is done.", translation: "Propósito" },
        { topic: "Context", term: "test", definition: "A procedure intended to establish the quality of something.", translation: "Teste" },


        // --- TOPIC 2: INTELLIGENCE & LEARNING ---
        { topic: "Intelligence", term: "intelligence", definition: "The ability to acquire and apply knowledge.", translation: "Inteligência" },
        { topic: "Intelligence", term: "smart", definition: "Having or showing a quick-witted intelligence.", translation: "Inteligente" },
        { topic: "Intelligence", term: "mind", definition: "The element of a person that enables them to be aware.", translation: "Mente" },
        { topic: "Intelligence", term: "talent", definition: "Natural aptitude or skill.", translation: "Talento" },
        { topic: "Intelligence", term: "memory", definition: "The faculty by which the mind stores information.", translation: "Memória" },
        { topic: "Intelligence", term: "linguistic-intelligence", definition: "Ability to use language effectively.", translation: "Inteligência Linguística" },
        { topic: "Intelligence", term: "logical-mathematical-intelligence", definition: "Ability to analyze problems logically.", translation: "Inteligência Lógico-Matemática" },
        { topic: "Intelligence", term: "spatial-intelligence", definition: "Ability to visualize with the mind's eye.", translation: "Inteligência Espacial" },
        { topic: "Intelligence", term: "bodily-kinesthetic-intelligence", definition: "Ability to control body movements.", translation: "Inteligência Corporal-Cinestésica" },
        { topic: "Intelligence", term: "interpersonal-intelligence", definition: "Ability to understand others.", translation: "Inteligência Interpessoal" },
        { topic: "Intelligence", term: "intrapersonal-intelligence", definition: "Ability to understand oneself.", translation: "Inteligência Intrapessoal" },
        { topic: "Intelligence", term: "naturalist-intelligence", definition: "Ability to identify elements of nature.", translation: "Inteligência Naturalista" },
        { topic: "Intelligence", term: "existential-intelligence", definition: "Ability to ponder deep questions.", translation: "Inteligência Existencial" },
        { topic: "Intelligence", term: "bilingual", definition: "Able to speak two languages fluently.", translation: "Bilíngue" },

        // --- TOPIC 3: PHRASAL VERBS (TURN) ---
        { topic: "Phrasal Verbs", term: "phrasal-verb", definition: "A verb combined with a preposition or adverb.", translation: "Verbo frasal" },
        { topic: "Phrasal Verbs", term: "turn-into", definition: "To change or develop into something different.", translation: "Transformar-se em" },
        { topic: "Phrasal Verbs", term: "turn-down", definition: "To reject or lower volume.", translation: "Recusar / Abaixar" },
        { topic: "Phrasal Verbs", term: "turn-up", definition: "To appear or increase volume.", translation: "Aparecer / Aumentar" },
        { topic: "Phrasal Verbs", term: "turn-on", definition: "To start the operation of a device.", translation: "Ligar" },
        { topic: "Phrasal Verbs", term: "turn-off", definition: "To stop the operation of a device.", translation: "Desligar" },
        { topic: "Phrasal Verbs", term: "turn-out", definition: "To prove to be the case.", translation: "Acabar sendo / Resultar" },
        { topic: "Phrasal Verbs", term: "turn-to", definition: "To go to someone for help.", translation: "Recorrer a" },
        { topic: "Phrasal Verbs", term: "turn-in", definition: "To submit work.", translation: "Entregar" },
        { topic: "Phrasal Verbs", term: "turn-over", definition: "To flip something.", translation: "Virar / Entregar" },
        { topic: "Phrasal Verbs", term: "turn-back", definition: "To go back.", translation: "Voltar" },
        
        // --- TOPIC 4: EXPRESSIONS ---
        { topic: "Expressions", term: "get-smarter", definition: "To increase intelligence.", translation: "Ficar mais inteligente" },
        { topic: "Expressions", term: "in-different-ways", definition: "Using various methods.", translation: "De formas diferentes" },
        { topic: "Expressions", term: "types-of-intelligence", definition: "The categories identified in Gardner's theory.", translation: "Tipos de inteligência" },
        { topic: "Expressions", term: "free-time", definition: "Time not occupied by work or duty.", translation: "Tempo livre" },
        { topic: "Expressions", term: "hard-work", definition: "A great deal of effort.", translation: "Trabalho duro" },
        // ADD THESE TO glossary: []

        // --- TOPIC 5: VERBS (A-L) ---
        { topic: "Verbs (A-L)", term: "accept", definition: "To consent to receive or undertake something.", translation: "Aceitar" },
        { topic: "Verbs (A-L)", term: "agree", definition: "To have the same opinion.", translation: "Concordar" },
        { topic: "Verbs (A-L)", term: "apologize", definition: "To say sorry for a mistake.", translation: "Desculpar-se" },
        { topic: "Verbs (A-L)", term: "ask", definition: "To say something in order to obtain an answer or something.", translation: "Perguntar / Pedir" },
        { topic: "Verbs (A-L)", term: "be", definition: "To exist or occur.", translation: "Ser / Estar" },
        { topic: "Verbs (A-L)", term: "believe", definition: "To accept that something is true or exists.", translation: "Acreditar" },
        { topic: "Verbs (A-L)", term: "choose", definition: "To pick out or select.", translation: "Escolher" },
        { topic: "Verbs (A-L)", term: "come", definition: "To move or travel towards a place.", translation: "Vir" },
        { topic: "Verbs (A-L)", term: "communicate", definition: "To share or exchange information.", translation: "Comunicar" },
        { topic: "Verbs (A-L)", term: "compare", definition: "To estimate the similarity or dissimilarity between things.", translation: "Comparar" },
        { topic: "Verbs (A-L)", term: "complain", definition: "To express dissatisfaction or annoyance.", translation: "Reclamar" },
        { topic: "Verbs (A-L)", term: "concentrate", definition: "To focus all one's attention on a particular object or activity.", translation: "Concentrar-se" },
        { topic: "Verbs (A-L)", term: "contribute", definition: "To give in order to help achieve or provide something.", translation: "Contribuir" },
        { topic: "Verbs (A-L)", term: "create", definition: "To bring something into existence.", translation: "Criar" },
        { topic: "Verbs (A-L)", term: "decide", definition: "To come to a resolution in the mind.", translation: "Decidir" },
        { topic: "Verbs (A-L)", term: "develop", definition: "To grow or cause to grow and become more mature.", translation: "Desenvolver" },
        { topic: "Verbs (A-L)", term: "discover", definition: "To find unexpectedly or during a search.", translation: "Descobrir" },
        { topic: "Verbs (A-L)", term: "disturb", definition: "To interrupt the sleep, relaxation, or privacy of.", translation: "Perturbar" },
        { topic: "Verbs (A-L)", term: "do", definition: "To perform an action.", translation: "Fazer" },
        { topic: "Verbs (A-L)", term: "encourage", definition: "To give support, confidence, or hope to.", translation: "Encorajar" },
        { topic: "Verbs (A-L)", term: "expand", definition: "To make larger or more extensive.", translation: "Expandir" },
        { topic: "Verbs (A-L)", term: "explain", definition: "To make an idea clear to someone.", translation: "Explicar" },
        { topic: "Verbs (A-L)", term: "explore", definition: "To travel in or through an unfamiliar area.", translation: "Explorar" },
        { topic: "Verbs (A-L)", term: "fail", definition: "To be unsuccessful in achieving a goal.", translation: "Falhar / Reprovar" },
        { topic: "Verbs (A-L)", term: "feel", definition: "To experience an emotion or sensation.", translation: "Sentir" },
        { topic: "Verbs (A-L)", term: "find", definition: "To discover or perceive by chance.", translation: "Encontrar" },
        { topic: "Verbs (A-L)", term: "focus", definition: "To pay particular attention to.", translation: "Focar" },
        { topic: "Verbs (A-L)", term: "get", definition: "To come to have or hold something.", translation: "Conseguir / Obter" },
        { topic: "Verbs (A-L)", term: "give-up", definition: "To stop making an effort.", translation: "Desistir" },
        { topic: "Verbs (A-L)", term: "go", definition: "To move from one place to another.", translation: "Ir" },
        { topic: "Verbs (A-L)", term: "happen", definition: "To take place; occur.", translation: "Acontecer" },
        { topic: "Verbs (A-L)", term: "have", definition: "To possess, own, or hold.", translation: "Ter" },
        { topic: "Verbs (A-L)", term: "hear", definition: "To perceive with the ear.", translation: "Ouvir" },
        { topic: "Verbs (A-L)", term: "help", definition: "To make it easier for someone to do something.", translation: "Ajudar" },
        { topic: "Verbs (A-L)", term: "ignore", definition: "To refuse to take notice of.", translation: "Ignorar" },
        { topic: "Verbs (A-L)", term: "imagine", definition: "To form a mental image or concept.", translation: "Imaginar" },
        { topic: "Verbs (A-L)", term: "improve", definition: "To make or become better.", translation: "Melhorar" },
        { topic: "Verbs (A-L)", term: "invent", definition: "To create or design something new.", translation: "Inventar" },
        { topic: "Verbs (A-L)", term: "join", definition: "To become a member of a group.", translation: "Juntar-se / Entrar" },
        { topic: "Verbs (A-L)", term: "keep", definition: "To continue a course of action.", translation: "Manter / Guardar" },
        { topic: "Verbs (A-L)", term: "know", definition: "To be aware of through information.", translation: "Saber / Conhecer" },
        { topic: "Verbs (A-L)", term: "lead-to", definition: "To cause or result in.", translation: "Levar a" },
        { topic: "Verbs (A-L)", term: "learn", definition: "To gain or acquire knowledge.", translation: "Aprender" },
        { topic: "Verbs (A-L)", term: "leave", definition: "To go away from.", translation: "Sair / Deixar" },
        { topic: "Verbs (A-L)", term: "love", definition: "To feel deep affection for.", translation: "Amar" },
        // ADD THESE TO glossary: []

        // --- TOPIC 6: VERBS (M-W) ---
        { topic: "Verbs (M-W)", term: "mean", definition: "To have as its explanation or interpretation.", translation: "Significar" },
        { topic: "Verbs (M-W)", term: "mention", definition: "To refer to something briefly.", translation: "Mencionar" },
        { topic: "Verbs (M-W)", term: "motivate", definition: "To provide someone with a reason for doing something.", translation: "Motivar" },
        { topic: "Verbs (M-W)", term: "move", definition: "To change position or cause to change position.", translation: "Mover-se" },
        { topic: "Verbs (M-W)", term: "need", definition: "To require something because it is essential.", translation: "Precisar" },
        { topic: "Verbs (M-W)", term: "neglect", definition: "To fail to care for properly.", translation: "Negligenciar" },
        { topic: "Verbs (M-W)", term: "notice", definition: "To become aware of.", translation: "Notar" },
        { topic: "Verbs (M-W)", term: "offer", definition: "To present something for acceptance.", translation: "Oferecer" },
        { topic: "Verbs (M-W)", term: "overcome", definition: "To succeed in dealing with a problem.", translation: "Superar" },
        { topic: "Verbs (M-W)", term: "pass", definition: "To be successful in a test or exam.", translation: "Passar" },
        { topic: "Verbs (M-W)", term: "praise", definition: "To express warm approval or admiration.", translation: "Elogiar" },
        { topic: "Verbs (M-W)", term: "practice", definition: "To perform an activity repeatedly to improve.", translation: "Praticar" },
        { topic: "Verbs (M-W)", term: "read", definition: "To look at and comprehend written meaning.", translation: "Ler" },
        { topic: "Verbs (M-W)", term: "remember", definition: "To bring a fact back into one's mind.", translation: "Lembrar" },
        { topic: "Verbs (M-W)", term: "require", definition: "To need for a particular purpose.", translation: "Exigir" },
        { topic: "Verbs (M-W)", term: "see", definition: "To perceive with the eyes.", translation: "Ver" },
        { topic: "Verbs (M-W)", term: "seek", definition: "To attempt to find.", translation: "Buscar" },
        { topic: "Verbs (M-W)", term: "show", definition: "To allow to be seen.", translation: "Mostrar" },
        { topic: "Verbs (M-W)", term: "speak", definition: "To say something in order to convey information.", translation: "Falar" },
        { topic: "Verbs (M-W)", term: "start", definition: "To begin.", translation: "Começar" },
        { topic: "Verbs (M-W)", term: "stimulate", definition: "To encourage development or activity.", translation: "Estimular" },
        { topic: "Verbs (M-W)", term: "struggle", definition: "To make forceful efforts to get free of restraint.", translation: "Lutar / Esforçar-se" },
        { topic: "Verbs (M-W)", term: "study", definition: "To devote time to acquiring knowledge.", translation: "Estudar" },
        { topic: "Verbs (M-W)", term: "succeed", definition: "To achieve the desired aim or result.", translation: "Ter sucesso" },
        { topic: "Verbs (M-W)", term: "suggest", definition: "To put forward for consideration.", translation: "Sugerir" },
        { topic: "Verbs (M-W)", term: "support", definition: "To give assistance to.", translation: "Apoiar" },
        { topic: "Verbs (M-W)", term: "think", definition: "To have a particular opinion or belief.", translation: "Pensar" },
        { topic: "Verbs (M-W)", term: "touch-upon", definition: "To mention a subject briefly.", translation: "Tocar em (assunto)" },
        { topic: "Verbs (M-W)", term: "travel", definition: "To make a journey.", translation: "Viajar" },
        { topic: "Verbs (M-W)", term: "turn", definition: "To move in a circular direction.", translation: "Virar / Tornar-se" },
        { topic: "Verbs (M-W)", term: "understand", definition: "To perceive the intended meaning.", translation: "Entender" },
        { topic: "Verbs (M-W)", term: "value", definition: "To consider something to be important.", translation: "Valorizar" },
        { topic: "Verbs (M-W)", term: "want", definition: "To have a desire for.", translation: "Querer" },
        { topic: "Verbs (M-W)", term: "work", definition: "To be engaged in physical or mental activity.", translation: "Trabalhar" },
        // ADD THESE TO glossary: []

        // --- TOPIC 7: GRAMMAR POINTS ---
        { topic: "Grammar",
            term: "conditional-sentences",
            definition: "Sentences that express conditions and their consequences, often using 'if'.",
            translation: "Sentenças Condicionais"
        },
        { 
            topic: "Grammar", 
            term: "zero-conditional", 
            definition: "Used for general truths and scientific facts (If + Present, Present).", 
            translation: "Condicional Zero" 
        },
        { 
            topic: "Grammar", 
            term: "first-conditional", 
            definition: "Used for real possibilities in the future (If + Present, Will + Verb).", 
            translation: "Primeira Condicional" 
        },
        { 
            topic: "Grammar", 
            term: "second-conditional", 
            definition: "Used for hypothetical or imaginary situations (If + Past, Would + Verb).", 
            translation: "Segunda Condicional" 
        },
        { 
            topic: "Grammar", 
            term: "third-conditional", 
            definition: "Used for regrets about the past (If + Past Perfect, Would have + Participle).", 
            translation: "Terceira Condicional" 
        },
        {
            topic: "Grammar",
            term: "correlative-conjunctions",
            definition: "Pairs of conjunctions that work together to coordinate two elements in a sentence.",
            translation: "Conjunções Correlativas"
        },
        { 
            topic: "Grammar", 
            term: "both-and", 
            definition: "Correlative conjunction used to emphasize two positive items together.", 
            translation: "Tanto... quanto" 
        },
        { 
            topic: "Grammar", 
            term: "either-or", 
            definition: "Correlative conjunction used to present a choice between two alternatives.", 
            translation: "Ou... ou" 
        },
        { 
            topic: "Grammar", 
            term: "neither-nor", 
            definition: "Correlative conjunction used to connect two negative ideas.", 
            translation: "Nem... nem" 
        },
        { 
            topic: "Grammar", 
            term: "in-order-to", 
            definition: "Linking phrase used to express purpose followed by a base verb.", 
            translation: "A fim de" 
        },
        { 
            topic: "Grammar", 
            term: "so-as-to", 
            definition: "Linking phrase used to express purpose followed by a base verb.", 
            translation: "De modo a" 
        },
        { 
            topic: "Grammar", 
            term: "so-that", 
            definition: "Linking phrase used to express purpose followed by a clause.", 
            translation: "Para que" 
        }
    ]
});