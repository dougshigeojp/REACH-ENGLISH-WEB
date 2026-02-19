/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em1-2-5", 
    grade: "High School 1st Grade",       
    bimester: "2",   
    chapter: "5",    
    chapterTitle: "Be the Change: Global Goals", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss the 17 Sustainable Development Goals (SDGs).<br>• Use the Simple Past to describe completed actions.<br>• Use the Present Perfect to share life experiences and recent results.<br>• Use the Present Perfect Continuous to emphasize the duration of your efforts.<br>• Use prepositions of time (for, since, in, on, at) and linking words (besides, furthermore, as well as).",
            welcome: "Hello, future leaders! I'm Mr. D!<br>Welcome to an adventure that is larger than life! Today, we are opening a door to the whole world. Have you ever wondered how we can end poverty or stop climate change? The United Nations created a plan called the Global Goals, and today you will learn how to talk about them in English! You will learn how to describe what you have been doing to help and how to inspire others. It’s time to raise awareness and be the change you want to see! Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss the 17 Sustainable Development Goals. Use the Simple Past to describe completed actions. Use the Present Perfect to share life experiences and recent results. Use the Present Perfect Continuous to emphasize the duration of your efforts. Use prepositions of time and linking words like besides, furthermore, and as well as.",
                welcome: "TTS: Hello, future leaders! I'm Mr. D! Welcome to an adventure that is larger than life! Today, we are opening a door to the whole world. Have you ever wondered how we can end poverty or stop climate change? The United Nations created a plan called the Global Goals, and today you will learn how to talk about them in English! You will learn how to describe what you have been doing to help and how to inspire others. It’s time to raise awareness and be the change you want to see! Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Albert and Celine are at the city's 'Youth for Sustainability' center. Celine is organizing a stack of flyers while Albert looks at a digital map showing world progress on the SDGs.", 
            contextAudio: "audio/em1-2-5/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Albert, look at these results! Our community [has achieved](tooltip:present-perfect) so much since we [started](tooltip:simple-past) the [initiative](tooltip:initiative)." 
                },
                { 
                    speaker: "Albert", 
                    text: "It’s incredible, Celine. I [read](tooltip:simple-past) an [article](tooltip:article) [last Saturday](tooltip:last-saturday) about Goal 7: Affordable and [Clean Energy](tooltip:clean-energy). I didn't realize that many countries [adopted](tooltip:adopt) solar power so quickly." 
                },
                { 
                    speaker: "Celine", 
                    text: "Yes! I [have been volunteering](tooltip:present-perfect-continuous) with this [NGO](tooltip:ngo) [for several years](tooltip:for-several-years). We [have been focusing](tooltip:present-perfect-continuous) on [Gender Equality](tooltip:gender-equality) and [Quality Education](tooltip:quality-education) [since](tooltip:since) the project [began](tooltip:simple-past)." 
                },
                { 
                    speaker: "Albert", 
                    text: "How long [have you been working](tooltip:present-perfect-continuous) on the [clean water](tooltip:clean-water) project? [Besides](tooltip:besides) education, I think [sanitation](tooltip:sanitation) is vital for [health](tooltip:health)." 
                },
                { 
                    speaker: "Celine", 
                    text: "I have been doing that since January. [Furthermore](tooltip:furthermore), we organized a [cleanup](tooltip:cleanup) at the local river last year. We [collected](tooltip:simple-past) a hundred bags of [waste](tooltip:waste)." 
                },
                { 
                    speaker: "Albert", 
                    text: "I want to [make a difference](tooltip:make-a-difference) too. I haven't finished my research on [biodiversity](tooltip:biodiversity) yet, but I [plan](tooltip:plan) to [act](tooltip:act) soon." 
                },
                { 
                    speaker: "Celine", 
                    text: "That’s the spirit! Every small action counts. [Shall we](tooltip:shall) [discuss](tooltip:discuss) our [partnership](tooltip:partnership) with the school tomorrow?" 
                },
                { 
                    speaker: "Albert", 
                    text: "Definitely. [Be the change](tooltip:be-the-change) you want to see, right? Let's [improve](tooltip:improve) our [planet](tooltip:planet) together!" 
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
                    title: "The 17 SDGs - (Sustainable Development Goals)",
                    audio: "TTS: SDGs - Sustainable Development Goals. 1 - No Poverty. 2 - Zero Hunger. 3 - Good Health and Well-being. 4 - Quality Education. 5 - Gender Equality. 6 - Clean Water and Sanitation. 7 - Affordable and Clean Energy. 8 - Decent Work and Economic Growth. 9 - Industry, Innovation and Infrastructure. 10 - Reduced Inequality. 11 - Sustainable Cities and Communities. 12 - Responsible Consumption and Production. 13 - Climate Action. 14 - Life Below Water. 15 - Life on Land. 16 - Peace, Justice and Strong Institutions. 17 - Partnerships for the Goals.",
                    items: [
                        { term: "SDGs - Sustainable Development Goals", trans: "Objetivos de Desenvolvimento Sustentável" },
                        { term: "1 - No Poverty", trans: "Erradicação da pobreza" },
                        { term: "2 - Zero Hunger", trans: "Fome zero" },
                        { term: "3 - Good Health and Well-being", trans: "Saúde e bem-estar" },
                        { term: "4 - Quality Education", trans: "Educação de qualidade" },
                        { term: "5 - Gender Equality", trans: "Igualdade de gênero" },
                        { term: "6 - Clean Water and Sanitation", trans: "Água limpa e saneamento" },
                        { term: "7 - Affordable and Clean Energy", trans: "Energia limpa e acessível" },
                        { term: "8 - Decent Work and Economic Growth", trans: "Trabalho decente e crescimento econômico" },
                        { term: "9 - Industry, Innovation and Infrastructure", trans: "Indústria, inovação e infraestrutura" },
                        { term: "10 - Reduced Inequality", trans: "Redução das desigualdades" },
                        { term: "11 - Sustainable Cities and Communities", trans: "Cidades e comunidades sustentáveis" },
                        { term: "12 - Responsible Consumption and Production", trans: "Consumo e produção responsáveis" },
                        { term: "13 - Climate Action", trans: "Ação contra a mudança global do clima" },
                        { term: "14 - Life Below Water", trans: "Vida na água" },
                        { term: "15 - Life on Land", trans: "Vida terrestre" },
                        { term: "16 - Peace, Justice and Strong Institutions", trans: "Paz, justiça e instituições eficazes" },
                        { term: "17 - Partnerships for the Goals", trans: "Parcerias e meios de implementação" }
                    ]
                },

                {
                    title: "Core Verbs (A-C)",
                    audio: "TTS: Achieve. Act. Add. Adopt. Advise. Affect. Agree. Believe. Bring. Change. Clean. Contact. Contribute. Create.",
                    items: [
                        { term: "Achieve", trans: "Alcançar / Atingir" },
                        { term: "Act", trans: "Agir" },
                        { term: "Add", trans: "Adicionar" },
                        { term: "Adopt", trans: "Adotar" },
                        { term: "Advise", trans: "Aconselhar" },
                        { term: "Affect", trans: "Afetar" },
                        { term: "Agree", trans: "Concordar" },
                        { term: "Believe", trans: "Acreditar" },
                        { term: "Bring", trans: "Trazer" },
                        { term: "Change", trans: "Mudar" },
                        { term: "Clean", trans: "Limpar" },
                        { term: "Contact", trans: "Contatar" },
                        { term: "Contribute", trans: "Contribuir" },
                        { term: "Create", trans: "Criar" }
                    ]
                },
                {
                    title: "Core Verbs (D-L)",
                    audio: "TTS: Decide. Dedicate. Develop. Discuss. End. Fight. Finish. Focus. Forget. Give. Help. Implement. Improve. Invest. Know. Last. Learn. Live.",
                    items: [
                        { term: "Decide", trans: "Decidir" },
                        { term: "Dedicate", trans: "Dedicar" },
                        { term: "Develop", trans: "Desenvolver" },
                        { term: "Discuss", trans: "Discutir" },
                        { term: "End", trans: "Terminar / Acabar" },
                        { term: "Fight", trans: "Lutar" },
                        { term: "Finish", trans: "Finalizar" },
                        { term: "Focus", trans: "Focar" },
                        { term: "Forget", trans: "Esquecer" },
                        { term: "Give", trans: "Dar" },
                        { term: "Help", trans: "Ajudar" },
                        { term: "Implement", trans: "Implementar" },
                        { term: "Improve", trans: "Melhorar" },
                        { term: "Invest", trans: "Investir" },
                        { term: "Know", trans: "Saber / Conhecer" },
                        { term: "Last", trans: "Durar" },
                        { term: "Learn", trans: "Aprender" },
                        { term: "Live", trans: "Viver" }
                    ]
                },

                {
                    title: "Core Verbs (M-R)",
                    audio: "TTS: Make. Mean. Meet. Need. Notice. Organize. Own. Pay. Plan. Plant. Post. Prefer. Prioritize. Protect. Provide. Raise. Reach. Read. Realize. Receive. Reduce. Remain. Remember. Run.",
                    items: [
                        { term: "Make", trans: "Fazer / Criar" },
                        { term: "Mean", trans: "Significar" },
                        { term: "Meet", trans: "Encontrar / Conhecer" },
                        { term: "Need", trans: "Precisar" },
                        { term: "Notice", trans: "Notar / Perceber" },
                        { term: "Organize", trans: "Organizar" },
                        { term: "Own", trans: "Possuir" },
                        { term: "Pay", trans: "Pagar" },
                        { term: "Plan", trans: "Planejar" },
                        { term: "Plant", trans: "Plantar" },
                        { term: "Post", trans: "Postar" },
                        { term: "Prefer", trans: "Preferir" },
                        { term: "Prioritize", trans: "Priorizar" },
                        { term: "Protect", trans: "Proteger" },
                        { term: "Provide", trans: "Fornecer" },
                        { term: "Raise", trans: "Levantar / Aumentar" },
                        { term: "Reach", trans: "Alcançar" },
                        { term: "Read", trans: "Ler" },
                        { term: "Realize", trans: "Perceber / Dar-se conta" },
                        { term: "Receive", trans: "Receber" },
                        { term: "Reduce", trans: "Reduzir" },
                        { term: "Remain", trans: "Permanecer" },
                        { term: "Remember", trans: "Lembrar" },
                        { term: "Run", trans: "Correr" }
                    ]
                },
                {
                    title: "Core Verbs (S-W)",
                    audio: "TTS: See. Seem. Separate. Solve. Speak. Start. Stop. Support. Suppose. Taste. Teach. Think. Understand. Volunteer. Want. Warn. Weigh. Wish. Work.",
                    items: [
                        { term: "See", trans: "Ver" },
                        { term: "Seem", trans: "Parecer" },
                        { term: "Separate", trans: "Separar" },
                        { term: "Solve", trans: "Resolver" },
                        { term: "Speak", trans: "Falar" },
                        { term: "Start", trans: "Começar" },
                        { term: "Stop", trans: "Parar" },
                        { term: "Support", trans: "Apoiar" },
                        { term: "Suppose", trans: "Supor" },
                        { term: "Taste", trans: "Provar / Ter gosto" },
                        { term: "Teach", trans: "Ensinar" },
                        { term: "Think", trans: "Pensar" },
                        { term: "Understand", trans: "Entender" },
                        { term: "Volunteer", trans: "Voluntariar-se" },
                        { term: "Want", trans: "Querer" },
                        { term: "Warn", trans: "Avisar / Alertar" },
                        { term: "Weigh", trans: "Pesar" },
                        { term: "Wish", trans: "Desejar" },
                        { term: "Work", trans: "Trabalhar" }
                    ]
                },
                {
                    title: "Objectives & Concepts",
                    audio: "TTS: Awareness. Biodiversity. Climate. Consumption. Education. Energy. Environment. Equality. Gender. Goal. Growth. Health. Hunger. Inequality. Infrastructure. Innovation. Justice. Literacy. Peace. Poverty. Sanitation. Sustainability. Well-being. Initiative. Partnership. UN. Forest. Ocean. Planet. River. Activist. Community. NGO. Student. Expert.",
                    items: [
                        { term: "Awareness", trans: "Conscientização" },
                        { term: "Biodiversity", trans: "Biodiversidade" },
                        { term: "Climate", trans: "Clima" },
                        { term: "Consumption", trans: "Consumo" },
                        { term: "Education", trans: "Educação" },
                        { term: "Energy", trans: "Energia" },
                        { term: "Environment", trans: "Meio ambiente" },
                        { term: "Equality", trans: "Igualdade" },
                        { term: "Gender", trans: "Gênero" },
                        { term: "Goal", trans: "Meta / Objetivo" },
                        { term: "Growth", trans: "Crescimento" },
                        { term: "Health", trans: "Saúde" },
                        { term: "Hunger", trans: "Fome" },
                        { term: "Inequality", trans: "Desigualdade" },
                        { term: "Infrastructure", trans: "Infraestrutura" },
                        { term: "Innovation", trans: "Inovação" },
                        { term: "Justice", trans: "Justiça" },
                        { term: "Literacy", trans: "Alfabetização" },
                        { term: "Peace", trans: "Paz" },
                        { term: "Poverty", trans: "Pobreza" },
                        { term: "Sanitation", trans: "Saneamento" },
                        { term: "Sustainability", trans: "Sustentabilidade" },
                        { term: "Well-being", trans: "Bem-estar" },
                        { term: "Initiative", trans: "Iniciativa" },
                        { term: "Partnership", trans: "Parceria" },
                        { term: "UN", trans: "ONU" },
                        { term: "Forest", trans: "Floresta" },
                        { term: "Ocean", trans: "Oceano" },
                        { term: "Planet", trans: "Planeta" },
                        { term: "River", trans: "Rio" },
                        { term: "Activist", trans: "Ativista" },
                        { term: "Community", trans: "Comunidade" },
                        { term: "NGO", trans: "ONG" },
                        { term: "Student", trans: "Estudante" },
                        { term: "Expert", trans: "Especialista" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Make a difference. Raise awareness. Global Goals. Clean water. As well as. For several years. Last Saturday. A long way to go. Be the change.",
                    items: [
                        { term: "Make a difference", trans: "Fazer a diferença" },
                        { term: "Raise awareness", trans: "Aumentar a conscientização" },
                        { term: "Global Goals", trans: "Metas Globais" },
                        { term: "Clean water", trans: "Água limpa" },
                        { term: "As well as", trans: "Bem como" },
                        { term: "For several years", trans: "Por vários anos" },
                        { term: "Last Saturday", trans: "Sábado passado" },
                        { term: "A long way to go", trans: "Um longo caminho a percorrer" },
                        { term: "Be the change", trans: "Seja a mudança" }
                    ]
                }
            ], // End of Part 2A Areas

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Verbs (A-C)",
                    audio: "TTS: You can achieve your goals if you work hard. Don't just watch, you must act now. Please add more details to your report. Many countries adopted the initiative last year. I advise you to recycle more. The climate affects the ocean. Do you agree with the UN plan? I believe we can end poverty. This project will bring peace. We need to change the world together. We are going to clean the beach. You should contact a local NGO. How can I contribute to Goal 5? Let's create a recycling initiative.",
                    items: [
                        { term: "Achieve", sent: "You can achieve your goals if you work hard.", trans: "<span style='color:#0077b6'>Você pode alcançar seus objetivos se trabalhar duro.</span>" },
                        { term: "Act", sent: "Don't just watch, you must act now!", trans: "<span style='color:#0077b6'>Não apenas observe, você deve agir agora!</span>" },
                        { term: "Add", sent: "Please add more details to your report.", trans: "<span style='color:#0077b6'>Por favor, adicione mais detalhes ao seu relatório.</span>" },
                        { term: "Adopt", sent: "Many countries adopted the initiative last year.", trans: "<span style='color:#0077b6'>Muitos países adotaram a iniciativa no ano passado.</span>" },
                        { term: "Advise", sent: "I advise you to recycle more.", trans: "<span style='color:#0077b6'>Eu aconselho você a reciclar mais.</span>" },
                        { term: "Affect", sent: "The climate affects the ocean.", trans: "<span style='color:#0077b6'>O clima afeta o oceano.</span>" },
                        { term: "Agree", sent: "Do you agree with the UN plan?", trans: "<span style='color:#0077b6'>Você concorda com o plano da ONU?</span>" },
                        { term: "Believe", sent: "I believe we can end poverty.", trans: "<span style='color:#0077b6'>Eu acredito que podemos acabar com a pobreza.</span>" },
                        { term: "Bring", sent: "This project will bring peace.", trans: "<span style='color:#0077b6'>Este projeto trará paz.</span>" },
                        { term: "Change", sent: "We need to change the world together.", trans: "<span style='color:#0077b6'>Precisamos mudar o mundo juntos.</span>" },
                        { term: "Clean", sent: "We are going to clean the beach.", trans: "<span style='color:#0077b6'>Nós vamos limpar a praia.</span>" },
                        { term: "Contact", sent: "You should contact a local NGO.", trans: "<span style='color:#0077b6'>Você deveria contatar uma ONG local.</span>" },
                        { term: "Contribute", sent: "How can I contribute to Goal 5?", trans: "<span style='color:#0077b6'>Como posso contribuir para a Meta 5?</span>" },
                        { term: "Create", sent: "Let's create a recycling initiative.", trans: "<span style='color:#0077b6'>Vamos criar uma iniciativa de reciclagem.</span>" }
                    ]
                },
                {
                    title: "Verbs (D-L)",
                    audio: "TTS: The UN decided to prioritize peace. She dedicated her life to education. We need to develop clean energy. Shall we discuss the climate crisis? We want to end world hunger. Activists fight for gender equality. I haven't finished my research yet. We must focus on biodiversity. Don't forget to save water. They give support to poor communities. Technology can help the environment. They implemented the plan last year. We want to improve global health. We should invest in innovation. I know all seventeen goals. The meeting lasted for two hours. You should learn about sustainability. We want to live in a peaceful world.",
                    items: [
                        { term: "Decide", sent: "The UN decided to prioritize peace.", trans: "<span style='color:#0077b6'>A ONU decidiu priorizar a paz.</span>" },
                        { term: "Dedicate", sent: "She dedicated her life to education.", trans: "<span style='color:#0077b6'>Ela dedicou sua vida à educação.</span>" },
                        { term: "Develop", sent: "We need to develop clean energy.", trans: "<span style='color:#0077b6'>Precisamos desenvolver energia limpa.</span>" },
                        { term: "Discuss", sent: "Shall we discuss the climate crisis?", trans: "<span style='color:#0077b6'>Vamos discutir a crise climática?</span>" },
                        { term: "End", sent: "We want to end world hunger.", trans: "<span style='color:#0077b6'>Queremos acabar com a fome mundial.</span>" },
                        { term: "Fight", sent: "Activists fight for gender equality.", trans: "<span style='color:#0077b6'>Ativistas lutam pela igualdade de gênero.</span>" },
                        { term: "Finish", sent: "I haven't finished my research yet.", trans: "<span style='color:#0077b6'>Eu ainda não terminei minha pesquisa.</span>" },
                        { term: "Focus", sent: "We must focus on biodiversity.", trans: "<span style='color:#0077b6'>Devemos focar na biodiversidade.</span>" },
                        { term: "Forget", sent: "Don't forget to save water.", trans: "<span style='color:#0077b6'>Não esqueça de economizar água.</span>" },
                        { term: "Give", sent: "They give support to poor communities.", trans: "<span style='color:#0077b6'>Eles dão apoio a comunidades pobres.</span>" },
                        { term: "Help", sent: "Technology can help the environment.", trans: "<span style='color:#0077b6'>A tecnologia pode ajudar o meio ambiente.</span>" },
                        { term: "Implement", sent: "They implemented the plan last year.", trans: "<span style='color:#0077b6'>Eles implementaram o plano no ano passado.</span>" },
                        { term: "Improve", sent: "We want to improve global health.", trans: "<span style='color:#0077b6'>Queremos melhorar a saúde global.</span>" },
                        { term: "Invest", sent: "We should invest in innovation.", trans: "<span style='color:#0077b6'>Deveríamos investir em inovação.</span>" },
                        { term: "Know", sent: "I know all seventeen goals.", trans: "<span style='color:#0077b6'>Eu conheço todas as dezessete metas.</span>" },
                        { term: "Last", sent: "The meeting lasted for two hours.", trans: "<span style='color:#0077b6'>A reunião durou duas horas.</span>" },
                        { term: "Learn", sent: "You should learn about sustainability.", trans: "<span style='color:#0077b6'>Você deveria aprender sobre sustentabilidade.</span>" },
                        { term: "Live", sent: "We want to live in a peaceful world.", trans: "<span style='color:#0077b6'>Queremos viver em um mundo pacífico.</span>" }
                    ]
                },
                {
                    title: "Verbs (M-W)",
                    audio: "TTS: Small steps make a big impact. What does Goal 16 mean? I want to meet other activists. We need clean water and sanitation. I noticed the progress today. Let's organize a volunteer group. Does she own that NGO? We must pay attention to climate. We are planning a new initiative. Students planted trees last Saturday. Celine posted about the SDGs. I prefer solar energy. We prioritize education and health. We must protect the ocean. The project provides literacy classes. We need to raise awareness. We want to reach our goals by 2030. Have you read the article? I realized that inequality is a big challenge. They received a lot of support. You must reduce your waste. The problem remained for years. Remember to recycle! The project runs since 2015. I see a better future. It seems like a good initiative. Please separate your garbage. How can we solve world hunger? Activists speak for the environment. Let's start now! We must stop pollution. I support the United Nations. I suppose we can achieve Goal 1. The fresh water tastes good. Teachers teach about sustainability. What do you think about Goal 5? I understand the impact of my actions. Celine volunteered at the school. I want to be the change. Scientists warned us about Goal 13. How much does the garbage weigh? I wish for world peace. They work together in a global partnership.",
                    items: [
                        { term: "Make", sent: "Small steps make a big impact.", trans: "<span style='color:#0077b6'>Pequenos passos causam um grande impacto.</span>" },
                        { term: "Mean", sent: "What does Goal 16 mean?", trans: "<span style='color:#0077b6'>O que significa a Meta 16?</span>" },
                        { term: "Need", sent: "We need clean water and sanitation.", trans: "<span style='color:#0077b6'>Precisamos de água limpa e saneamento.</span>" },
                        { term: "Organize", sent: "Let's organize a volunteer group.", trans: "<span style='color:#0077b6'>Vamos organizar um grupo de voluntários.</span>" },
                        { term: "Plan", sent: "We are planning a new initiative.", trans: "<span style='color:#0077b6'>Estamos planejando uma nova iniciativa.</span>" },
                        { term: "Protect", sent: "We must protect the ocean.", trans: "<span style='color:#0077b6'>Devemos proteger o oceano.</span>" },
                        { term: "Raise", sent: "We need to raise awareness.", trans: "<span style='color:#0077b6'>Precisamos aumentar a conscientização.</span>" },
                        { term: "Reach", sent: "We want to reach our goals by 2030.", trans: "<span style='color:#0077b6'>Queremos atingir nossas metas até 2030.</span>" },
                        { term: "Reduce", sent: "You must reduce your waste.", trans: "<span style='color:#0077b6'>Você deve reduzir seu lixo.</span>" },
                        { term: "Solve", sent: "How can we solve world hunger?", trans: "<span style='color:#0077b6'>Como podemos resolver a fome mundial?</span>" },
                        { term: "Support", sent: "I support the United Nations.", trans: "<span style='color:#0077b6'>Eu apoio as Nações Unidas.</span>" },
                        { term: "Understand", sent: "I understand the impact of my actions.", trans: "<span style='color:#0077b6'>Entendo o impacto das minhas ações.</span>" },
                        { term: "Work", sent: "They work together in a global partnership.", trans: "<span style='color:#0077b6'>Eles trabalham juntos em uma parceria global.</span>" }
                    ]
                },
                {
                    title: "The 17 Goals",
                    audio: "TTS: We must work to ensure No Poverty in our world. Goal 2 is Zero Hunger for every child. Clean water leads to Good Health. Every student needs Quality Education. Gender Equality is a basic human right. We need Clean Water for all rivers. Solar and wind are types of Clean Energy. We want economic growth and sustainability. Our city needs better infrastructure. We must reduce inequality in our society. We are building Sustainable Cities. Responsible consumption reduces waste. It is time for urgent Climate Action. Plastic pollutes Life Below Water. We must protect Life on Land and forests. We dream of world peace and justice. Global partnerships are necessary to reach the goals.",
                    items: [
                        { term: "1 - No Poverty", sent: "We must work to ensure No Poverty in our world.", trans: "<span style='color:#0077b6'>Devemos trabalhar para garantir a erradicação da pobreza.</span>" },
                        { term: "2 - Zero Hunger", sent: "Goal 2 is Zero Hunger for every child.", trans: "<span style='color:#0077b6'>A Meta 2 é Fome Zero para cada criança.</span>" },
                        { term: "3 - Good Health", sent: "Clean water leads to Good Health.", trans: "<span style='color:#0077b6'>Água limpa leva à saúde.</span>" },
                        { term: "4 - Quality Education", sent: "Every student needs Quality Education.", trans: "<span style='color:#0077b6'>Todo estudante precisa de educação de qualidade.</span>" },
                        { term: "5 - Gender Equality", sent: "Gender Equality is a basic human right.", trans: "<span style='color:#0077b6'>A igualdade de gênero é um direito humano básico.</span>" },
                        { term: "6 - Clean Water and Sanitation", sent: "We need Clean Water for all people.", trans: "<span style='color:#0077b6'>Precisamos de água limpa e saneamento para todas as pessoas.</span>" },
                        { term: "7 - Affordable and Clean Energy", sent: "Solar and wind are types of Clean Energy.", trans: "<span style='color:#0077b6'>Solar e eólica são tipos de energia limpa.</span>" },
                        { term: "8 - Decent Work and Economic Growth", sent: "We want economic growth and sustainability.", trans: "<span style='color:#0077b6'>Queremos crescimento econômico e sustentabilidade.</span>" },
                        { term: "9 - Industry, Innovation and Infrastructure", sent: "Our city needs better infrastructure.", trans: "<span style='color:#0077b6'>Nossa cidade precisa de melhor infraestrutura.</span>" },
                        { term: "10 - Reduced Inequality", sent: "We must reduce inequality in our society.", trans: "<span style='color:#0077b6'>Devemos reduzir a desigualdade em nossa sociedade.</span>" },
                        { term: "11 - Sustainable Cities and Communities", sent: "We are building Sustainable Cities.", trans: "<span style='color:#0077b6'>Estamos construindo cidades sustentáveis.</span>" },
                        { term: "12 - Responsible Consumption and Production", sent: "Responsible consumption reduces waste.", trans: "<span style='color:#0077b6'>O consumo responsável reduz o desperdício.</span>" },
                        { term: "13 - Climate Action", sent: "It is time for urgent Climate Action.", trans: "<span style='color:#0077b6'>É hora de uma ação climática urgente.</span>" },
                        { term: "14 - Life Below Water", sent: "Plastic pollutes Life Below Water.", trans: "<span style='color:#0077b6'>O plástico polui a vida na água.</span>" },
                        { term: "15 - Life on Land", sent: "We must protect Life on Land and forests.", trans: "<span style='color:#0077b6'>Devemos proteger a vida terrestre e as florestas.</span>" },
                        { term: "16 - Peace, Justice and Strong Institutions", sent: "We dream of world peace and justice.", trans: "<span style='color:#0077b6'>Sonhamos com a paz mundial e justiça.</span>" },
                        { term: "17 - Partnerships for the Goals", sent: "Global partnerships are necessary to reach the goals.", trans: "<span style='color:#0077b6'>Parcerias globais são necessárias para alcançar as metas.</span>" }
                    ]
                },
                {
                    title: "Key Phrases",
                    audio: "TTS: One small action can make a difference! Why are you talking to the students? To raise awareness about poverty. What are the Global Goals? They are the seventeen SDGs by the UN. Goal 6 is about clean water. Yes, everyone needs it to stay healthy. We need peace as well as justice. I agree, they are both very important. How long have you lived here? I have lived here for several years. When was the workshop? It happened last Saturday. Did we solve the problem yet? No, we still have a long way to go. I want to help the environment. Then be the change you want to see!",
                    items: [
                        { term: "Make a difference", sent: "One small action can make a difference!", trans: "<span style='color:#0077b6'>Uma pequena ação pode fazer a diferença!</span>" },
                        { term: "Global Goals", sent: "They are the seventeen SDGs by the UN.", trans: "<span style='color:#0077b6'>São os dezessete ODS da ONU.</span>" },
                        { term: "As well as", sent: "We need peace as well as justice.", trans: "<span style='color:#0077b6'>Precisamos de paz bem como de justiça.</span>" },
                        { term: "Long way to go", sent: "No, we still have a long way to go.", trans: "<span style='color:#0077b6'>Não, ainda temos um longo caminho a percorrer.</span>" },
                        { term: "Be the change", sent: "Then be the change you want to see!", trans: "<span style='color:#0077b6'>Então seja a mudança que você quer ver!</span>" }
                    ]
                }
            ], // Closes exampleGroups

            // 2C: Practice Drills (Exhaustive Vocabulary - 30 Questions)
            drills: [
                {
                    type: "mcq",
                    q: "To _______ Goal 1, we must help people in need around the world.",
                    options: [
                        {t: "Achieve", c: true},
                        {t: "Forget", c: false},
                        {t: "Smell", c: false},
                        {t: "Pay", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The government _______ the new plan for renewable energy in 2015.",
                    options: [
                        {t: "Adopted", c: true},
                        {t: "Ended", c: false},
                        {t: "Supported", c: false},
                        {t: "Realized", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I _______ at the animal shelter every week to help the community.",
                    options: [
                        {t: "Solve", c: false},
                        {t: "Volunteer", c: true},
                        {t: "Agree", c: false},
                        {t: "Learn", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We must _______ our waste to save the planet from heavy pollution.",
                    options: [
                        {t: "Reduce", c: true},
                        {t: "Taste", c: false},
                        {t: "Weigh", c: false},
                        {t: "Reach", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Can you _______ my homework to see if there are any mistakes?",
                    options: [
                        {t: "Look at", c: true},
                        {t: "Forget", c: false},
                        {t: "Adopt", c: false},
                        {t: "Support", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We should _______ more trees in the urban parks to improve air quality.",
                    options: [
                        {t: "Plant", c: true},
                        {t: "Discuss", c: false},
                        {t: "Pay", c: false},
                        {t: "Mean", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "New technology can _______ our lives and make them more sustainable.",
                    options: [
                        {t: "Improve", c: true},
                        {t: "Last", c: false},
                        {t: "Taste", c: false},
                        {t: "Act", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I _______ we can reach the Global Goals by the year 2030.",
                    options: [
                        {t: "Believe", c: true},
                        {t: "Separate", c: false},
                        {t: "Warn", c: false},
                        {t: "Clean", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Scientists _______ us about the urgent dangers of climate change.",
                    options: [
                        {t: "Warned", c: true},
                        {t: "Achieved", c: false},
                        {t: "Collected", c: false},
                        {t: "Helped", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Let's _______ the new project with the teacher during the next class.",
                    options: [
                        {t: "Discuss", c: true},
                        {t: "Separate", c: false},
                        {t: "Wish", c: false},
                        {t: "Weigh", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Goal 13 is specifically about _______ Action.",
                    options: [
                        {t: "Climate", c: true},
                        {t: "Hunger", c: false},
                        {t: "Justice", c: false},
                        {t: "Energy", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We need a global _______ between countries to solve world problems.",
                    options: [
                        {t: "Partnership", c: true},
                        {t: "Goal", c: false},
                        {t: "Student", c: false},
                        {t: "Forest", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Protecting _______ is vital for our ecosystem and variety of life.",
                    options: [
                        {t: "Biodiversity", c: true},
                        {t: "Poverty", c: false},
                        {t: "Literacy", c: false},
                        {t: "Equality", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Every child deserves a good _______ to have a successful life.",
                    options: [
                        {t: "Education", c: true},
                        {t: "Waste", c: false},
                        {t: "Hunger", c: false},
                        {t: "Inequality", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The Amazon is a huge _______ that helps the entire world's air.",
                    options: [
                        {t: "Forest", c: true},
                        {t: "Ocean", c: false},
                        {t: "River", c: false},
                        {t: "Planet", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "What does the phrase 'A long way to go' mean?",
                    options: [
                        {t: "Já terminamos o trabalho.", c: false},
                        {t: "Um longo caminho a percorrer.", c: true},
                        {t: "O caminho é curto e fácil.", c: false},
                        {t: "Estamos perdidos no mapa.", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "What does 'Raise awareness' mean?",
                    options: [
                        {t: "Aumentar a conscientização.", c: true},
                        {t: "Levantar a mão para falar.", c: false},
                        {t: "Diminuir o conhecimento.", c: false},
                        {t: "Falar mais alto com todos.", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "What does 'Be the change' mean?",
                    options: [
                        {t: "Seja a mudança.", c: true},
                        {t: "Mude de roupa agora.", c: false},
                        {t: "Mantenha o troco da compra.", c: false},
                        {t: "Não mude nada no mundo.", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Which time expression means 'Sábado passado'?",
                    options: [
                        {t: "Last Saturday", c: true},
                        {t: "Next Saturday", c: false},
                        {t: "Every Saturday", c: false},
                        {t: "Today morning", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Gender _______ means that men and women have the same opportunities.",
                    options: [
                        {t: "Equality", c: true},
                        {t: "Inequality", c: false},
                        {t: "Education", c: false},
                        {t: "Justice", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A person who works hard for a social cause is an _______.",
                    options: [
                        {t: "Activist", c: true},
                        {t: "Expert", c: false},
                        {t: "Student", c: false},
                        {t: "Officer", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A non-governmental organization is often called an _______.",
                    options: [
                        {t: "NGO", c: true},
                        {t: "UN", c: false},
                        {t: "SDG", c: false},
                        {t: "Goal", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Goal 6 focuses on Clean Water and _______ systems.",
                    options: [
                        {t: "Sanitation", c: true},
                        {t: "Pollution", c: false},
                        {t: "Waste", c: false},
                        {t: "Hunger", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The act of gathering garbage to clean a local area is a _______.",
                    options: [
                        {t: "Cleanup", c: true},
                        {t: "Design", c: false},
                        {t: "Breakthrough", c: false},
                        {t: "Solution", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The Sustainable Development Goals are also known as the _______.",
                    options: [
                        {t: "Global Goals", c: true},
                        {t: "Local Rules", c: false},
                        {t: "Business Plans", c: false},
                        {t: "School Tasks", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "To _______ a plan means to put that plan into real action.",
                    options: [
                        {t: "Implement", c: true},
                        {t: "Forget", c: false},
                        {t: "Expect", c: false},
                        {t: "Smell", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The state of being comfortable, healthy, or happy is your _______.",
                    options: [
                        {t: "Well-being", c: true},
                        {t: "Sanitation", c: false},
                        {t: "Poverty", c: false},
                        {t: "Consumption", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Does she _______ that big NGO or is she just a volunteer?",
                    options: [
                        {t: "Own", c: true},
                        {t: "Teach", c: false},
                        {t: "Wait", c: false},
                        {t: "Ask", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Goal 2 aims to end world _______ and ensure everyone has enough food.",
                    options: [
                        {t: "Hunger", c: true},
                        {t: "Pollution", c: false},
                        {t: "Inequality", c: false},
                        {t: "Energy", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The Global Goals are also called 'Metas Globais', or the seventeen _______.",
                    options: [
                        {t: "Targets", c: true},
                        {t: "Grades", c: false},
                        {t: "Lessons", c: false},
                        {t: "Books", c: false}
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
                    title: "Past Simple vs. Present Perfect",
                    audio: "TTS: Use Simple Past for finished actions at a specific time. Use Present Perfect for experiences or actions with a result in the present. The UN adopted the SDGs in 2015. Many countries have signed the agreement.",
                    explanation: "Simple Past is for finished time (2015, yesterday). Present Perfect is for unspecified time or life results.<br><br><span style='color:#0077b6; font-style:italic;'>(O Passado Simples é para tempo terminado. O Presente Perfeito é para tempo não especificado ou resultados atuais.)</span>",
                    samples: [
                        { en: "The UN adopted the SDGs in 2015.", pt: "<span style='color:#0077b6'>A ONU adotou os ODS em 2015. (Specific year)</span>" },
                        { en: "We volunteered last Saturday.", pt: "<span style='color:#0077b6'>Nós fomos voluntários no sábado passado. (Finished moment)</span>" },
                        { en: "Many countries have signed the agreement.", pt: "<span style='color:#0077b6'>Muitos países assinaram o acordo. (Result now)</span>" },
                        { en: "I have never seen this initiative.", pt: "<span style='color:#0077b6'>Eu nunca vi esta iniciativa. (Life experience)</span>" }
                    ]
                },
                {
                    title: "Present Perfect Continuous",
                    audio: "TTS: This tense focuses on the duration of an action that started in the past and continues to the present. They have been working on clean energy for ten years. She has been volunteering since she finished school.",
                    explanation: "Focuses on the duration of an ongoing action. Structure: have/has + been + verb-ing.<br><br><span style='color:#0077b6; font-style:italic;'>(Foca na duração de uma ação contínua. Estrutura: have/has + been + verbo com -ing.)</span>",
                    samples: [
                        { en: "They have been working on clean energy for ten years.", pt: "<span style='color:#0077b6'>Eles têm trabalhado em energia limpa por dez anos.</span>" },
                        { en: "She has been volunteering since she finished school.", pt: "<span style='color:#0077b6'>Ela tem sido voluntária desde que terminou a escola.</span>" },
                        { en: "Why is the park clean? Because volunteers have been cleaning it all morning.", pt: "<span style='color:#0077b6'>Por que o parque está limpo? Porque os voluntários estiveram limpando-o a manhã toda.</span>" }
                    ]
                },
                {
                    title: "State Verbs",
                    audio: "TTS: State verbs like know, believe, understand, and seem describe states and are not usually used in the continuous form. I understand the goal now. This seems like a good solution.",
                    explanation: "These verbs describe states and are NOT usually used in continuous (-ing) forms.<br><br><span style='color:#0077b6; font-style:italic;'>(Estes verbos descrevem estados e NÃO são usados geralmente em formas contínuas com -ing.)</span>",
                    samples: [
                        { en: "I understand Goal 10 now.", pt: "<span style='color:#0077b6'>Eu entendo a Meta 10 agora. (NOT: I am understanding)</span>" },
                        { en: "This seems like a good solution.", pt: "<span style='color:#0077b6'>Isso parece uma boa solução.</span>" },
                        { en: "We believe we can make a difference.", pt: "<span style='color:#0077b6'>Nós acreditamos que podemos fazer a diferença.</span>" }
                    ]
                },
                {
                    title: "Prepositions of Time",
                    audio: "TTS: Use IN for months, years and seasons. Use ON for days and specific dates. Use AT for specific times and holidays. Use FOR for duration and SINCE for a starting point.",
                    explanation: "Prepositions define exactly when or for how long an action occurs.<br><br><span style='color:#0077b6; font-style:italic;'>(Preposições definem exatamente quando ou por quanto tempo uma ação ocorre.)</span>",
                    samples: [
                        { en: "In July, in 2030, in summer.", pt: "<span style='color:#0077b6'>Em julho, em 2030, no verão.</span>" },
                        { en: "On Monday, on January 1st.", pt: "<span style='color:#0077b6'>Na segunda-feira, em primeiro de janeiro.</span>" },
                        { en: "At 5 PM, at night, at Christmas.", pt: "<span style='color:#0077b6'>Às 17h, à noite, no Natal.</span>" },
                        { en: "For ten years. / Since 2015.", pt: "<span style='color:#0077b6'>Por dez anos. / Desde 2015.</span>" }
                    ]
                },
                {
                    title: "Linking Words: Addition",
                    audio: "TTS: Use AND, ALSO, TOO, and AS WELL to add information. Use BESIDES, FURTHERMORE, and MOREOVER for formal addition at the start of a sentence.",
                    explanation: "These words connect ideas and add extra points to your arguments.<br><br><span style='color:#0077b6; font-style:italic;'>(Estas palavras conectam ideias e adicionam pontos extras aos seus argumentos.)</span>",
                    samples: [
                        { en: "Health is also crucial.", pt: "<span style='color:#0077b6'>A saúde também é crucial.</span>" },
                        { en: "We support Goal 2 too / as well.", pt: "<span style='color:#0077b6'>Nós apoiamos a Meta 2 também.</span>" },
                        { en: "In addition to recycling, we save water.", pt: "<span style='color:#0077b6'>Além da reciclagem, economizamos água.</span>" },
                        { en: "Furthermore, they must be safe.", pt: "<span style='color:#0077b6'>Além disso, eles devem estar seguros. (Formal)</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Comparing Progress",
                    audio: "audio/em1-2-5/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "I volunteered last Saturday, but I have not seen much progress yet.", 
                            pt: "<span style='color:#0077b6'>Eu fui voluntária no sábado passado, mas não vi muito progresso ainda.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I understand. I read the article yesterday, and it says many countries have adopted the plan.", 
                            pt: "<span style='color:#0077b6'>Eu entendo. Li o artigo ontem, e ele diz que muitos países adotaram o plano.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Duration and States",
                    audio: "audio/em1-2-5/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "I have been focusing on quality education for three hours.", 
                            pt: "<span style='color:#0077b6'>Tenho focado em educação de qualidade por três horas.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I believe you! I have been studying the Global Goals since Monday.", 
                            pt: "<span style='color:#0077b6'>Acredito em você! Tenho estudado as Metas Globais desde segunda-feira.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Expanding the Plan",
                    audio: "audio/em1-2-5/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "We need peace and justice. Furthermore, we need partnerships.", 
                            pt: "<span style='color:#0077b6'>Precisamos de paz e justiça. Além disso, precisamos de parcerias.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Correct. Besides that, we must improve our infrastructure as well.", 
                            pt: "<span style='color:#0077b6'>Correto. Além disso, devemos melhorar nossa infraestrutura também.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Practice (Expanded to 30 Grammar Questions)
            grammarDrills: [
                {
                    type: "mcq",
                    q: "(Finished Time) The United Nations _______ the Global Goals in 2015.",
                    options: [
                        {t: "have adopted", c: false},
                        {t: "adopted", c: true},
                        {t: "was adopting", c: false},
                        {t: "has adopted", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Result now) Albert _______ reading about Goal 13 yet.",
                    options: [
                        {t: "didn't finish", c: false},
                        {t: "doesn't finish", c: false},
                        {t: "hasn't finished", c: true},
                        {t: "not finished", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Specific past) Celine _______ an environmental activist last Saturday.",
                    options: [
                        {t: "has met", c: false},
                        {t: "met", c: true},
                        {t: "was meeting", c: false},
                        {t: "meets", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Recent action) Many countries _______ the new agreement recently.",
                    options: [
                        {t: "have signed", c: true},
                        {t: "signed", c: false},
                        {t: "signing", c: false},
                        {t: "has signed", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Duration) How long _______ you _______ on this clean water initiative?",
                    options: [
                        {t: "did / work", c: false},
                        {t: "are / working", c: false},
                        {t: "have / been working", c: true},
                        {t: "have / worked", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Emphasis on duration) Volunteers _______ cleaning the local river all morning.",
                    options: [
                        {t: "were", c: false},
                        {t: "have been", c: true},
                        {t: "have", c: false},
                        {t: "are", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "She _______ planting trees since 8 AM! She is very tired.",
                    options: [
                        {t: "has been", c: true},
                        {t: "is", c: false},
                        {t: "was", c: false},
                        {t: "has", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Recent activity) Why are you so dirty? Because I _______ working in the community garden.",
                    options: [
                        {t: "worked", c: false},
                        {t: "was working", c: false},
                        {t: "have been", c: true},
                        {t: "am", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(State Verb) I _______ that we can make a difference if we work together.",
                    options: [
                        {t: "am believing", c: false},
                        {t: "believe", c: true},
                        {t: "have been believing", c: false},
                        {t: "was believing", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(State Verb) This project _______ very important for our neighborhood.",
                    options: [
                        {t: "is seeming", c: false},
                        {t: "seems", c: true},
                        {t: "has been seeming", c: false},
                        {t: "seemed", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(State Verb) Do you _______ the impact of Climate Action?",
                    options: [
                        {t: "understanding", c: false},
                        {t: "understand", c: true},
                        {t: "are understanding", c: false},
                        {t: "have been understanding", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(State Verb) He _______ like an expert on sustainability.",
                    options: [
                        {t: "is appearing", c: false},
                        {t: "appears", c: true},
                        {t: "has been appearing", c: false},
                        {t: "appearing", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Preposition) The climate workshop will happen _______ Friday afternoon.",
                    options: [
                        {t: "in", c: false},
                        {t: "at", c: false},
                        {t: "on", c: true},
                        {t: "since", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Preposition) They have worked at the center _______ several years.",
                    options: [
                        {t: "since", c: false},
                        {t: "for", c: true},
                        {t: "during", c: false},
                        {t: "in", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Preposition) He has lived in this sustainable city _______ 2020.",
                    options: [
                        {t: "since", c: true},
                        {t: "for", c: false},
                        {t: "in", c: false},
                        {t: "at", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Preposition) The project began _______ March last year.",
                    options: [
                        {t: "on", c: false},
                        {t: "at", c: false},
                        {t: "in", c: true},
                        {t: "since", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Preposition) The meeting starts _______ 10 AM.",
                    options: [
                        {t: "on", c: false},
                        {t: "in", c: false},
                        {t: "at", c: true},
                        {t: "for", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Linking Word) I support Goal 5, and I support Goal 16 _______.",
                    options: [
                        {t: "furthermore", c: false},
                        {t: "besides", c: false},
                        {t: "as well", c: true},
                        {t: "moreover", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Linking Word) _______ recycling, we also save energy at home.",
                    options: [
                        {t: "Furthermore", c: false},
                        {t: "Besides", c: true},
                        {t: "Too", c: false},
                        {t: "And", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Linking Word) Goal 1 is vital. Goal 2 is _______ very important.",
                    options: [
                        {t: "also", c: true},
                        {t: "too", c: false},
                        {t: "as well", c: false},
                        {t: "besides", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Linking Word) We need clean water _______ sanitation for everyone.",
                    options: [
                        {t: "and", c: true},
                        {t: "too", c: false},
                        {t: "furthermore", c: false},
                        {t: "besides", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Linking Word) _______, we must end world hunger to achieve peace.",
                    options: [
                        {t: "Also", c: false},
                        {t: "As well", c: false},
                        {t: "Furthermore", c: true},
                        {t: "And", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Experience) I _______ that sustainable initiative before.",
                    options: [
                        {t: "saw", c: false},
                        {t: "have seen", c: true},
                        {t: "see", c: false},
                        {t: "was seeing", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "They _______ for three hours when it started to rain.",
                    options: [
                        {t: "were working", c: false},
                        {t: "have been working", c: true},
                        {t: "worked", c: false},
                        {t: "work", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I _______ the activist since we met in 2015.",
                    options: [
                        {t: "know", c: true},
                        {t: "am knowing", c: false},
                        {t: "have been knowing", c: false},
                        {t: "known", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The event happened _______ Christmas Eve.",
                    options: [
                        {t: "at", c: false},
                        {t: "in", c: false},
                        {t: "on", c: true},
                        {t: "for", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We signed the treaty _______ April 15th.",
                    options: [
                        {t: "in", c: false},
                        {t: "on", c: true},
                        {t: "at", c: false},
                        {t: "since", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Climate Action is urgent. _______, it is necessary for survival.",
                    options: [
                        {t: "Moreover", c: true},
                        {t: "Too", c: false},
                        {t: "And", c: false},
                        {t: "As well", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Finished Time) Julia _______ at the center all through last year.",
                    options: [
                        {t: "has volunteered", c: false},
                        {t: "volunteered", c: true},
                        {t: "is volunteering", c: false},
                        {t: "volunteers", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "They _______ a new project since Monday morning.",
                    options: [
                        {t: "planned", c: false},
                        {t: "plan", c: false},
                        {t: "have been planning", c: true},
                        {t: "are planning", c: false}
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
                    text: "Albert, have you started your research on the Global Goals yet?<br><small style='color:#0077b6'>(Albert, você já começou sua pesquisa sobre as Metas Globais?)</small>", 
                    audio: "TTS: Albert, have you started your research on the Global Goals yet?", 
                    arrow: "↗" 
                },
                { 
                    text: "Yes, I read an article on Monday, but I haven't finished it.<br><small style='color:#0077b6'>(Sim, eu li um artigo na segunda-feira, mas não o terminei.)</small>", 
                    audio: "TTS: Yes, I read an article on Monday, but I haven't finished it.", 
                    arrow: "↘" 
                },
                { 
                    text: "I have been volunteering for the UN initiative since January!<br><small style='color:#0077b6'>(Eu tenho sido voluntária para a iniciativa da ONU desde janeiro!)</small>", 
                    audio: "TTS: I have been volunteering for the UN initiative since January!", 
                    arrow: "↘" 
                },
                { 
                    text: "That's great! Besides recycling, have you achieved progress with clean water?<br><small style='color:#0077b6'>(Que ótimo! Além da reciclagem, você alcançou progresso com a água limpa?)</small>", 
                    audio: "TTS: That's great! Besides recycling, have you achieved progress with clean water?", 
                    arrow: "↗" 
                },
                { 
                    text: "Yes! We have been focusing on sanitation for several years.<br><small style='color:#0077b6'>(Sim! Nós temos focado em saneamento por vários anos.)</small>", 
                    audio: "TTS: Yes! We have been focusing on sanitation for several years.", 
                    arrow: "↘" 
                },
                { 
                    text: "I believe we can make a difference as well as improve our planet.<br><small style='color:#0077b6'>(Eu acredito que podemos fazer a diferença bem como melhorar nosso planeta.)</small>", 
                    audio: "TTS: I believe we can make a difference as well as improve our planet.", 
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
                    instruction: "Listen to Albert talking about his weekend and type the missing words.",
                    audio: "TTS: Hi! Last Saturday, I met a climate activist. We discussed Goal 13: Climate Action. I have been studying the 17 goals since then. Furthermore, I decided to join an NGO next month.",
                    text: "Hi! Last Saturday, I [met] a climate [activist]. We [discussed] Goal 13: [Climate Action]. I [have been studying] the 17 goals [since] then. [Furthermore], I decided to join an [NGO] next month."
                },
                // Drill 2: Dropdown (MP3) - Combined context for engine safety
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue between Celine and a UN Expert and choose the best options.",
                    audio: "audio/em1-2-5/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: How long [has | have | had] the UN [been working | worked | works] on No Poverty?", a: "has" },
                        { q: "Expert: We [started | have started | starting] the new framework in 2015.", a: "started" },
                        { q: "Celine: [Besides | And | But] that, [did | have | do] you [achieved | achieve | achieving] results in education?", a: "Besides" },
                        { q: "Expert: Yes, literacy rates [improved | have improved | improve] significantly.", a: "have improved" }
                    ]
                },
                // Drill 3: Audio Choice (MP3)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer.",
                    audio: "audio/em1-2-5/step5_drill3.mp3", // Question: Why are you so tired, Albert?
                    options: [
                        { t: "Because I have achieved Goal 1.", c: false },
                        { t: "Because I have been planting trees in the forest all morning.", c: true },
                        { t: "I met an expert at the meeting last Saturday.", c: false },
                        { t: "Yes, I agree with the United Nations.", c: false }
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
                    title: "6a: Narration - Celine’s Journey",
                    audio: "TTS: Celine is a dedicated student and a young activist. She has been volunteering for a local NGO for several years. Last year, she started a new initiative to improve literacy in her community. She visited five different schools during the summer. She believes that Goal 4: Quality Education is the key to peace and equality. Furthermore, she has already raised awareness about Gender Equality using social media. || audio/em1-2-5/p6_text1.mp3",
                    body: "Celine is a dedicated student and a young activist. She has been volunteering for a local NGO for several years. Last year, she started a new initiative to improve literacy in her community. She visited five different schools during the summer. She believes that Goal 4: Quality Education is the key to peace and equality. Furthermore, she has already raised awareness about Gender Equality using social media.",
                    questions: [
                        { 
                            q: "How long has Celine been volunteering?", 
                            options: [ 
                                {t: "Since last Saturday.", c: false}, 
                                {t: "For several years.", c: true}, 
                                {t: "She started yesterday.", c: false},
                                {t: "Since 2010.", c: false}
                            ] 
                        },
                        { 
                            q: "What did Celine do last year?", 
                            options: [ 
                                {t: "She joined the UN.", c: false}, 
                                {t: "She started a literacy initiative.", c: true}, 
                                {t: "She moved to a new community.", c: false},
                                {t: "She graduated from university.", c: false}
                            ] 
                        },
                        { 
                            q: "What does she believe is the key to peace?", 
                            options: [ 
                                {t: "Quality Education.", c: true}, 
                                {t: "Life Below Water.", c: false}, 
                                {t: "Economic Growth.", c: false},
                                {t: "A clean river.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "6b: Dialogue - Discussing the Goals",
                    audio: "audio/em1-2-5/p6_text2.mp3",
                    body: "<b>Albert:</b> Hi Celine! I read that article you provided last Saturday.<br><b>Celine:</b> Great! Did you understand the impact of Climate Action?<br><b>Albert:</b> Yes. I have been researching biodiversity since I finished the text. Besides climate, I am worried about Life Below Water.<br><b>Celine:</b> I know. Our ocean needs our help. The UN adopted the Global Goals to solve these challenges.<br><b>Albert:</b> I agree. We must prioritize sustainability as well as global partnerships.",
                    questions: [
                        { 
                            q: "When did Albert read the article?", 
                            options: [ 
                                {t: "On Monday.", c: false}, 
                                {t: "Last Saturday.", c: true}, 
                                {t: "He hasn't read it yet.", c: false},
                                {t: "Two years ago.", c: false}
                            ] 
                        },
                        { 
                            q: "What has Albert been doing since he finished the text?", 
                            options: [ 
                                {t: "He has been volunteering at an NGO.", c: false}, 
                                {t: "He has been researching biodiversity.", c: true}, 
                                {t: "He has been cleaning the river.", c: false},
                                {t: "He has been working on sanitation.", c: false}
                            ] 
                        },
                        { 
                            q: "What goals do they mention are important?", 
                            options: [ 
                                {t: "Goal 1 and Goal 2.", c: false}, 
                                {t: "Goal 13 and Goal 14.", c: true}, 
                                {t: "Only Goal 4.", c: false},
                                {t: "All the 17 goals.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "6c: Description - A Green Plan",
                    audio: "TTS: Mr. Silva is an expert in sustainability. He has worked with the United Nations in the past, but now he is developing a plan for Sustainable Cities. He noticed that pollution has affected the local rivers recently. His team has been implementing new sanitation systems since 2022. He knows that we have a long way to go, but the progress seems good. Moreover, he advises everyone to be the change they want to see in their neighborhood. || audio/em1-2-5/p6_text3.mp3",
                    body: "Mr. Silva is an expert in sustainability. He has worked with the United Nations in the past, but now he is developing a plan for Sustainable Cities. He noticed that pollution has affected the local rivers recently. His team has been implementing new sanitation systems since 2022. He knows that we have a long way to go, but the progress seems good. Moreover, he advises everyone to be the change they want to see in their neighborhood.",
                    questions: [
                        { 
                            q: "Who is Mr. Silva?", 
                            options: [ 
                                {t: "A student volunteer.", c: false}, 
                                {t: "An expert in sustainability.", c: true}, 
                                {t: "A local mayor.", c: false},
                                {t: "A newspaper journalist.", c: false}
                            ] 
                        },
                        { 
                            q: "What has Mr. Silva's team been doing since 2022?", 
                            options: [ 
                                {t: "Implementing sanitation systems.", c: true}, 
                                {t: "Adopting the Global Goals.", c: false}, 
                                {t: "Building new schools.", c: false},
                                {t: "Cleaning the air.", c: false}
                            ] 
                        },
                        { 
                            q: "What is his advice to the community?", 
                            options: [ 
                                {t: "To wait for the UN.", c: false}, 
                                {t: "To be the change they want to see.", c: true}, 
                                {t: "To ignore the pollution.", c: false},
                                {t: "To move to a sustainable city.", c: false}
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
                // Drill 1: Match the Meanings (Word -> Translation)
                {
                    type: "matching",
                    instruction: "Match the English word with its Portuguese meaning.<br><small style='color:#0077b6'>(Relacione a palavra em inglês com seu significado em português.)</small>",
                    pairs: [
                        { left: "Sustainability", right: "Sustentabilidade", val: "1" },
                        { left: "Raise awareness", right: "Aumentar a conscientização", val: "2" },
                        { left: "Achieve", right: "Alcançar / Atingir", val: "3" },
                        { left: "Partnership", right: "Parceria", val: "4" }
                    ]
                },
                // Drill 2: Unscramble - Organize the sentence
                {
                    type: "word-order",
                    instruction: "Put the words in order to form a correct sentence using the Present Perfect Continuous.<br><small style='color:#0077b6'>(Coloque as palavras em ordem para formar uma frase correta.)</small>",
                    sentence: "been / since / working / morning / have / I / this / .",
                    correct: "I have been working since this morning ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in order to form a correct sentence using the Present Perfect Continuous.<br><small style='color:#0077b6'>(Coloque as palavras em ordem para formar uma frase correta.)</small>",
                    sentence: "volunteering / years / she / has / several / been / for / .",
                    correct: "She has been volunteering for several years ."
                },
                // Drill 3: Sentence Halves Match (Linking Words)
                {
                    type: "matching",
                    instruction: "Connect the first half of the sentence to the second half using linking words.<br><small style='color:#0077b6'>(Conecte a primeira metade da frase à segunda usando os conectivos.)</small>",
                    pairs: [
                        { left: "We need clean water...", right: "...as well as sanitation.", val: "A" },
                        { left: "She supports Goal 4...", right: "...furthermore, she volunteers.", val: "B" },
                        { left: "We must plant trees...", right: "...besides recycling.", val: "C" }
                    ]
                },
                // Drill 4: Clickable Error (Find the Mistake)
                {
                    type: "clickable-error",
                    instruction: "Identify and correct the grammar mistake in the sentence.<br><small style='color:#0077b6'>(Identifique e corrija o erro gramatical na frase.)</small>",
                    sentence: "I [am](error:) [knowing](error:know) the 17 Global Goals since 2015.",
                },
                {
                    type: "clickable-error",
                    instruction: "Identify and correct the grammar mistake in the sentence.<br><small style='color:#0077b6'>(Identifique e corrija o erro gramatical na frase.)</small>",
                    sentence: "Celine [has](error:) volunteered at the center last Saturday.",
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Imagine you are a global citizen! Write a short paragraph (4-6 sentences) about a global goal that is important to you. Mention how long you have been interested in it and what you did in the past to help.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Imagine que você é um cidadão global! Escreva um pequeno parágrafo (4-6 frases) sobre um objetivo global que é importante para você. Mencione há quanto tempo você se interessa por ele e o que você fez no passado para ajudar.)</span></small>",
            example: "\"I am very interested in Goal 14: Life Below Water. I have been reading about oceans since I was a child. Last year, I joined a beach cleanup. Furthermore, I always try to reduce my plastic consumption.\"<br><br><small><span style='color:#0077b6'>(\"Eu estou muito interessado no Objetivo 14: Vida na Água. Eu tenho lido sobre os oceanos desde que era criança. No ano passado, participei de uma limpeza na praia. Além disso, sempre tento reduzir meu consumo de plástico.\")</span></small>",
            prompts: [
                "Use at least one Simple Past verb. <br><small><span style='color:#0077b6'>(Use pelo menos um verbo no Passado Simples).</span></small>",
                "Use at least one Present Perfect Continuous verb. <br><small><span style='color:#0077b6'>(Use pelo menos um verbo no Presente Perfeito Contínuo).</span></small>",
                "Use at least one linking word (Besides, Furthermore, As well as). <br><small><span style='color:#0077b6'>(Use pelo menos um conectivo).</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Exhaustive Chapter 5)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // Area 1: The SDGs (Selection of Key Goals)
                { term: "No Poverty", definition: "Goal 1: Ending poverty in all its forms everywhere.", defTrans: "Erradicação da pobreza", example: "Goal 1 aims for No Poverty around the world.", audioFront: "TTS: No Poverty", audioBack: "TTS: Goal 1 aims for No Poverty around the world." },
                { term: "Zero Hunger", definition: "Goal 2: Ending hunger and promoting sustainable agriculture.", defTrans: "Fome zero", example: "We must work together to reach Zero Hunger.", audioFront: "TTS: Zero Hunger", audioBack: "TTS: We must work together to reach Zero Hunger." },
                { term: "Good Health and Well-being", definition: "Goal 3: Ensuring healthy lives and promoting well-being.", defTrans: "Saúde e bem-estar", example: "Clean water is essential for Good Health and Well-being.", audioFront: "TTS: Good Health and Well-being", audioBack: "TTS: Clean water is essential for Good Health and Well-being." },
                { term: "Quality Education", definition: "Goal 4: Ensuring inclusive and equitable quality education.", defTrans: "Educação de qualidade", example: "Every child deserves a Quality Education.", audioFront: "TTS: Quality Education", audioBack: "TTS: Every child deserves a Quality Education." },
                { term: "Gender Equality", definition: "Goal 5: Achieving gender equality and empowering all women.", defTrans: "Igualdade de gênero", example: "We fight for Gender Equality in the workplace.", audioFront: "TTS: Gender Equality", audioBack: "TTS: We fight for Gender Equality in the workplace." },
                { term: "Clean Water and Sanitation", definition: "Goal 6: Ensuring availability of water and sanitation.", defTrans: "Água limpa e saneamento", example: "Goal 6 provides Clean Water and Sanitation for all.", audioFront: "TTS: Clean Water and Sanitation", audioBack: "TTS: Goal 6 provides Clean Water and Sanitation for all." },
                { term: "Affordable and Clean Energy", definition: "Goal 7: Ensuring access to affordable and modern energy.", defTrans: "Energia limpa e acessível", example: "Solar power is a type of Affordable and Clean Energy.", audioFront: "TTS: Affordable and Clean Energy", audioBack: "TTS: Solar power is a type of Affordable and Clean Energy." },
                { term: "Decent Work and Economic Growth", definition: "Goal 8: Promoting inclusive and sustainable economic growth.", defTrans: "Trabalho decente e crescimento econômico", example: "Innovation brings Decent Work and Economic Growth.", audioFront: "TTS: Decent Work and Economic Growth", audioBack: "TTS: Innovation brings Decent Work and Economic Growth." },
                { term: "Industry, Innovation and Infrastructure", definition: "Goal 9: Building resilient infrastructure and fostering innovation.", defTrans: "Indústria, inovação e infraestrutura", example: "Goal 9 focuses on Industry, Innovation and Infrastructure.", audioFront: "TTS: Industry, Innovation and Infrastructure", audioBack: "TTS: Goal 9 focuses on Industry, Innovation and Infrastructure." },
                { term: "Reduced Inequality", definition: "Goal 10: Reducing inequality within and among countries.", defTrans: "Redução das desigualdades", example: "We want Reduced Inequality in our society.", audioFront: "TTS: Reduced Inequality", audioBack: "TTS: We want Reduced Inequality in our society." },
                { term: "Sustainable Cities and Communities", definition: "Goal 11: Making cities inclusive, safe, and resilient.", defTrans: "Cidades e comunidades sustentáveis", example: "Goal 11 builds Sustainable Cities and Communities.", audioFront: "TTS: Sustainable Cities and Communities", audioBack: "TTS: Goal 11 builds Sustainable Cities and Communities." },
                { term: "Responsible Consumption and Production", definition: "Goal 12: Ensuring sustainable consumption and production patterns.", defTrans: "Consumo e produção responsáveis", example: "Goal 12 teaches us about Responsible Consumption and Production.", audioFront: "TTS: Responsible Consumption and Production", audioBack: "TTS: Goal 12 teaches us about Responsible Consumption and Production." },
                { term: "Climate Action", definition: "Goal 13: Taking urgent action to combat climate change.", defTrans: "Ação climática", example: "It is time for urgent Climate Action.", audioFront: "TTS: Climate Action", audioBack: "TTS: It is time for urgent Climate Action." },
                { term: "Life Below Water", definition: "Goal 14: Conserving the oceans, seas, and marine resources.", defTrans: "Vida na água", example: "We must protect Life Below Water from plastic.", audioFront: "TTS: Life Below Water", audioBack: "TTS: We must protect Life Below Water from plastic." },
                { term: "Life on Land", definition: "Goal 15: Protecting and restoring terrestrial ecosystems.", defTrans: "Vida terrestre", example: "Preserve Life on Land by protecting the forests.", audioFront: "TTS: Life on Land", audioBack: "TTS: Preserve Life on Land by protecting the forests." },
                { term: "Peace, Justice and Strong Institutions", definition: "Goal 16: Promoting peaceful societies and access to justice.", defTrans: "Paz, justiça e instituições eficazes", example: "Goal 16 seeks Peace, Justice and Strong Institutions.", audioFront: "TTS: Peace, Justice and Strong Institutions", audioBack: "TTS: Goal 16 seeks Peace, Justice and Strong Institutions." },
                { term: "Partnerships for the Goals", definition: "Goal 17: Strengthening the means of implementation.", defTrans: "Parcerias para as metas", example: "Goal 17 creates global Partnerships for the Goals.", audioFront: "TTS: Partnerships for the Goals", audioBack: "TTS: Goal 17 creates global Partnerships for the Goals." },

                // Area 2: Core Verbs
                { term: "Achieve", definition: "To successfully finish or reach something.", defTrans: "Alcançar / Atingir", example: "We can achieve our goals together.", audioFront: "TTS: Achieve", audioBack: "TTS: We can achieve our goals together." },
                { term: "Adopt", definition: "To start to use or follow a plan or method.", defTrans: "Adotar", example: "Nations adopted the SDGs in 2015.", audioFront: "TTS: Adopt", audioBack: "TTS: Nations adopted the SDGs in 2015." },
                { term: "Contribute", definition: "To give something in order to help achieve something.", defTrans: "Contribuir", example: "Every student can contribute a little.", audioFront: "TTS: Contribute", audioBack: "TTS: Every student can contribute a little." },
                { term: "Implement", definition: "To put a decision or plan into effect.", defTrans: "Implementar", example: "They implemented the plan last year.", audioFront: "TTS: Implement", audioBack: "TTS: They implemented the plan last year." },
                { term: "Prioritize", definition: "To designate something as being very important.", defTrans: "Priorizar", example: "Sustainable cities prioritize people.", audioFront: "TTS: Prioritize", audioBack: "TTS: Sustainable cities prioritize people." },
                { term: "Realize", definition: "To become fully aware of something as a fact.", defTrans: "Perceber / Dar-se conta", example: "I realized that energy is vital.", audioFront: "TTS: Realize", audioBack: "TTS: I realized that energy is vital." },

                // --- Important Lesson Vocabulary ---
                { term: "Sustainability", definition: "The ability to maintain a process continuously without harming the environment.", defTrans: "Sustentabilidade", example: "Sustainability is the key to our future.", audioFront: "TTS: Sustainability", audioBack: "TTS: Sustainability is the key to our future." },
                { term: "Infrastructure", definition: "The basic physical structures like buildings and roads needed for a society.", defTrans: "Infraestrutura", example: "Our infrastructure needs a total update.", audioFront: "TTS: Infrastructure", audioBack: "TTS: Our infrastructure needs a total update." },
                { term: "Initiative", definition: "An act or strategy intended to resolve a difficulty or improve a situation.", defTrans: "Iniciativa", example: "That was a great initiative to clean the river.", audioFront: "TTS: Initiative", audioBack: "TTS: That was a great initiative to clean the river." },
                { term: "Partnership", definition: "An association of two or more people or organizations as partners.", defTrans: "Parceria", example: "Global partnerships are necessary to reach the goals.", audioFront: "TTS: Partnership", audioBack: "TTS: Global partnerships are necessary to reach the goals." },
                { term: "Activist", definition: "A person who campaigns to bring about political or social change.", defTrans: "Ativista", example: "She is a young activist fighting for the climate.", audioFront: "TTS: Activist", audioBack: "TTS: She is a young activist fighting for the climate." },
                { term: "NGO", definition: "A non-governmental organization; usually a non-profit group.", defTrans: "ONG", example: "He works for an NGO that helps children.", audioFront: "TTS: NGO", audioBack: "TTS: He works for an NGO that helps children." },
                { term: "Biodiversity", definition: "The variety of plant and animal life in a particular habitat.", defTrans: "Biodiversidade", example: "We must save our biodiversity.", audioFront: "TTS: Biodiversity", audioBack: "TTS: We must save our biodiversity." },
                { term: "Sanitation", definition: "Conditions relating to public health, especially clean drinking water.", defTrans: "Saneamento", example: "Goal 6 focuses on water and sanitation.", audioFront: "TTS: Sanitation", audioBack: "TTS: Goal 6 focuses on water and sanitation." },
                { term: "Well-being", definition: "The state of being comfortable, healthy, or happy.", defTrans: "Bem-estar", example: "Prioritize your well-being.", audioFront: "TTS: Well-being", audioBack: "TTS: Prioritize your well-being." },

                // --- Phrases & Expressions ---
                { term: "Make a difference", definition: "To have a significant effect on a person or situation.", defTrans: "Fazer a diferença", example: "You can make a difference!", audioFront: "TTS: Make a difference", audioBack: "TTS: You can make a difference!" },
                { term: "Raise awareness", definition: "To increase the knowledge or understanding of a specific issue.", defTrans: "Aumentar a conscientização", example: "Let's raise awareness about poverty.", audioFront: "TTS: Raise awareness", audioBack: "TTS: Let's raise awareness about poverty." },
                { term: "Be the change", definition: "A phrase encouraging individuals to take personal action to improve the world.", defTrans: "Seja a mudança", example: "Be the change you want to see!", audioFront: "TTS: Be the change", audioBack: "TTS: Be the change you want to see!" },
                { term: "A long way to go", definition: "Expression meaning that much more work or effort is still needed.", defTrans: "Um longo caminho a percorrer", example: "We still have a long way to go with our project.", audioFront: "TTS: A long way to go", audioBack: "TTS: We still have a long way to go with our project." },
                { term: "As well as", definition: "Used to add an extra point; in addition to.", defTrans: "Bem como", example: "We need peace as well as justice.", audioFront: "TTS: As well as", audioBack: "TTS: We need peace as well as justice." },
                { term: "For several years", definition: "An expression of duration used to show how long an action has lasted.", defTrans: "Por vários anos", example: "I have lived here for several years.", audioFront: "TTS: For several years", audioBack: "TTS: I have lived here for several years." },

                // --- Tense Contrasts ---
                { term: "Simple Past", definition: "Verb tense used for actions completed at a specific, finished time in the past.", defTrans: "Passado Simples (Tempo Terminado)", example: "The UN adopted the SDGs in 2015.", audioFront: "TTS: Simple Past", audioBack: "TTS: The UN adopted the SDGs in 2015." },
                { term: "Present Perfect", definition: "Tense used for life experiences or actions at an unspecified time with results now.", defTrans: "Presente Perfeito (Experiências e Resultados)", example: "Many countries have signed the agreement.", audioFront: "TTS: Present Perfect", audioBack: "TTS: Many countries have signed the agreement." },
                { term: "Pres. Perf. Continuous", definition: "Tense focusing on the duration of an action that started in the past and continues now.", defTrans: "Presente Perfeito Contínuo (Duração)", example: "They have been working on clean energy for ten years.", audioFront: "TTS: Present Perfect Continuous", audioBack: "TTS: They have been working on clean energy for ten years." },
                
                // --- State Verbs ---
                { term: "State Verbs", definition: "Verbs describing states (know, believe, understand) that are not usually used in -ing forms.", defTrans: "Verbos de Estado", example: "I understand the impact of my actions now.", audioFront: "TTS: State Verbs", audioBack: "TTS: I understand the impact of my actions now." },
                
                // --- Prepositions of Time ---
                { term: "Preposition: IN", definition: "Used for non-specific times during a day, month, season, or year.", defTrans: "Preposição: IN (Meses, anos, estações)", example: "The project began in 2015.", audioFront: "TTS: Preposition IN", audioBack: "TTS: The project began in 2015." },
                { term: "Preposition: ON", definition: "Used for specific days of the week and specific calendar dates.", defTrans: "Preposição: ON (Dias e datas)", example: "We have a meeting on Friday.", audioFront: "TTS: Preposition ON", audioBack: "TTS: We have a meeting on Friday." },
                { term: "Preposition: AT", definition: "Used for precise times, night, and specific holiday periods.", defTrans: "Preposição: AT (Horas e momentos específicos)", example: "The workshop starts at 10 AM.", audioFront: "TTS: Preposition AT", audioBack: "TTS: The workshop starts at 10 AM." },
                { term: "Preposition: SINCE", definition: "Used to indicate the starting point of an action that continues to the present.", defTrans: "Preposição: SINCE (Ponto de partida)", example: "She has been volunteering since January.", audioFront: "TTS: Preposition SINCE", audioBack: "TTS: She has been volunteering since January." },
                { term: "Preposition: FOR", definition: "Used to indicate the duration of an action that continues to the present.", defTrans: "Preposição: FOR (Duração)", example: "She has been volunteering for three weeks.", audioFront: "TTS: Preposition FOR", audioBack: "TTS: She has been volunteering for three weeks." }, 
                { term: "FOR vs. SINCE", definition: "FOR indicates a period of duration; SINCE indicates a specific starting point in time.", defTrans: "Duração vs. Ponto de Partida", example: "She has been volunteering for three weeks since January.", audioFront: "TTS: For versus Since", audioBack: "TTS: She has been volunteering for three weeks since January." },
                
                // --- Linking Words & Suggestions ---
                { term: "Furthermore / Moreover", definition: "Formal linking words used at the start of a sentence to add information.", defTrans: "Além disso / Ademais (Adição formal)", example: "Furthermore, we must protect the forests.", audioFront: "TTS: Furthermore and Moreover", audioBack: "TTS: Furthermore, we must protect the forests." },
                { term: "Shall (Suggestions)", definition: "A formal way to make offers or suggestions with I or WE.", defTrans: "Sugestão ou oferta formal", example: "Shall we discuss the new initiative tomorrow?", audioFront: "TTS: Shall for suggestions", audioBack: "TTS: Shall we discuss the new initiative tomorrow?" },
                { term: "Besides", definition: "Used to add an extra point or as a synonym for 'in addition to'.", defTrans: "Além de / Além disso", example: "Besides recycling, we should reduce water waste.", audioFront: "TTS: Besides", audioBack: "TTS: Besides recycling, we should reduce water waste." }
            ] // This closes the items array
        } // This closes the Step 9 object

    ], // Closes steps array

    // ======================================================
    // GLOSSARY (Exhaustive & Paginated) - Part 1
    // ======================================================
    glossary: [
        // TOPIC 1: CONTEXT (Step 1 tooltips)
        { topic: "Context", term: "initiative", definition: "An act or strategy intended to resolve a difficulty.", translation: "Iniciativa" },
        { topic: "Context", term: "article", definition: "A piece of writing included in a publication.", translation: "Artigo" },
        { topic: "Context", term: "last-saturday", definition: "A specific time expression used with the Simple Past.", translation: "Sábado passado" },
        { topic: "Context", term: "clean-energy", translation: "Energia limpa", definition: "Energy from renewable, non-polluting sources." },
        { topic: "Context", term: "ngo", definition: "Non-governmental organization; usually a non-profit group.", translation: "ONG" },
        { topic: "Context", term: "for-several-years", definition: "Expression used with Present Perfect to show duration.", translation: "Por vários anos" },
        { topic: "Context", term: "partnership", definition: "An association of two or more people as partners.", translation: "Parceria" },
        { topic: "Context", term: "cleanup", translation: "Limpeza", definition: "The act of removing waste or pollution from a place." },
        { topic: "Context", term: "waste", translation: "Lixo / Resíduo", definition: "Material that is not wanted or no longer useful." },
        { topic: "Context", term: "biodiversity", translation: "Biodiversidade", definition: "The variety of plant and animal life in a habitat." },
        { topic: "Context", term: "planet", translation: "Planeta", definition: "A celestial body moving in orbit round a star." },

        // TOPIC 2: THE 17 GLOBAL GOALS
        { topic: "The 17 Goals", term: "no-poverty", definition: "Goal 1: Ending poverty in all its forms everywhere.", translation: "Erradicação da pobreza" },
        { topic: "The 17 Goals", term: "zero-hunger", definition: "Goal 2: Ending hunger and promoting sustainable agriculture.", translation: "Fome zero" },
        { topic: "The 17 Goals", term: "good-health", definition: "Goal 3: Ensuring healthy lives and well-being.", translation: "Saúde e bem-estar" },
        { topic: "The 17 Goals", term: "quality-education", definition: "Goal 4: Ensuring inclusive and equitable education.", translation: "Educação de qualidade" },
        { topic: "The 17 Goals", term: "gender-equality", definition: "Goal 5: Achieving equality for all women and girls.", translation: "Igualdade de gênero" },
        { topic: "The 17 Goals", term: "clean-water", definition: "Goal 6: Ensuring availability of sustainable water.", translation: "Água limpa e saneamento" },
        { topic: "The 17 Goals", term: "sdg7", definition: "Goal 7: Ensuring access to affordable, modern energy.", translation: "Energia limpa" },
        { topic: "The 17 Goals", term: "decent-work", definition: "Goal 8: Promoting inclusive economic growth.", translation: "Trabalho decente" },
        { topic: "The 17 Goals", term: "industry-innovation", definition: "Goal 9: Building resilient infrastructure.", translation: "Indústria e inovação" },
        { topic: "The 17 Goals", term: "reduced-inequality", definition: "Goal 10: Reducing inequality within countries.", translation: "Redução das desigualdades" },
        { topic: "The 17 Goals", term: "sustainable-cities", definition: "Goal 11: Making cities inclusive, safe, and resilient.", translation: "Cidades sustentáveis" },
        { topic: "The 17 Goals", term: "responsible-consumption", definition: "Goal 12: Ensuring sustainable consumption patterns.", translation: "Consumo responsável" },
        { topic: "The 17 Goals", term: "climate-action", definition: "Goal 13: Taking action to combat climate change.", translation: "Ação climática" },
        { topic: "The 17 Goals", term: "life-below-water", definition: "Goal 14: Conserving the oceans and seas.", translation: "Vida na água" },
        { topic: "The 17 Goals", term: "life-on-land", definition: "Goal 15: Protecting and restoring ecosystems.", translation: "Vida terrestre" },
        { topic: "The 17 Goals", term: "peace-justice", definition: "Goal 16: Promoting peaceful societies.", translation: "Paz e justiça" },
        { topic: "The 17 Goals", term: "partnerships", definition: "Goal 17: Strengthening global partnerships.", translation: "Parcerias" },
        // TOPIC 3: CORE VERBS (A-L)
        { topic: "Verbs (A-L)", term: "achieve", definition: "To successfully finish or reach something.", translation: "Alcançar / Atingir" },
        { topic: "Verbs (A-L)", term: "act", definition: "To do something for a particular purpose.", translation: "Agir" },
        { topic: "Verbs (A-L)", term: "adopt", definition: "To start to use or follow a plan or method.", translation: "Adotar" },
        { topic: "Verbs (A-L)", term: "affect", definition: "To have an influence on someone or something.", translation: "Afetar" },
        { topic: "Verbs (A-L)", term: "agree", definition: "To have the same opinion as someone else.", translation: "Concordar" },
        { topic: "Verbs (A-L)", term: "believe", definition: "To accept something as true.", translation: "Acreditar" },
        { topic: "Verbs (A-L)", term: "change", definition: "To make or become different.", translation: "Mudar" },
        { topic: "Verbs (A-L)", term: "clean", definition: "To remove dirt or waste from a place.", translation: "Limpar" },
        { topic: "Verbs (A-L)", term: "contribute", definition: "To give something in order to help achieve something.", translation: "Contribuir" },
        { topic: "Verbs (A-L)", term: "create", definition: "To bring something into existence.", translation: "Criar" },
        { topic: "Verbs (A-L)", term: "decide", definition: "To make a choice from a number of alternatives.", translation: "Decidir" },
        { topic: "Verbs (A-L)", term: "develop", definition: "To grow or cause to grow and become more advanced.", translation: "Desenvolver" },
        { topic: "Verbs (A-L)", term: "discuss", definition: "To talk about something with other people.", translation: "Discutir" },

        // TOPIC 4: CORE VERBS (M-W)
        { topic: "Verbs (M-W)", term: "improve", definition: "To make something better than it was before.", translation: "Melhorar" },
        { topic: "Verbs (M-W)", term: "invest", definition: "To put money, effort, or time into something.", translation: "Investir" },
        { topic: "Verbs (M-W)", term: "know", definition: "To be aware of through inquiry or information.", translation: "Saber / Conhecer" },
        { topic: "Verbs (M-W)", term: "learn", definition: "To acquire knowledge or skill in something.", translation: "Aprender" },
        { topic: "Verbs (M-W)", term: "organize", definition: "To arrange into a structured whole.", translation: "Organizar" },
        { topic: "Verbs (M-W)", term: "plan", definition: "A detailed proposal for achieving something.", translation: "Planejar" },
        { topic: "Verbs (M-W)", term: "prioritize", definition: "To designate something as being very important.", translation: "Priorizar" },
        { topic: "Verbs (M-W)", term: "protect", definition: "To keep safe from harm or injury.", translation: "Proteger" },
        { topic: "Verbs (M-W)", term: "provide", definition: "To make available for use; supply.", translation: "Fornecer" },
        { topic: "Verbs (M-W)", term: "reach", definition: "To arrive at a goal or destination.", translation: "Alcançar" },
        { topic: "Verbs (M-W)", term: "realize", definition: "To become fully aware of something as a fact.", translation: "Perceber" },
        { topic: "Verbs (M-W)", term: "reduce", definition: "To make smaller or less in amount or degree.", translation: "Reduzir" },
        { topic: "Verbs (M-W)", term: "solve", definition: "To find an answer or a solution to a problem.", translation: "Resolver" },
        { topic: "Verbs (M-W)", term: "support", definition: "To give assistance or approval to.", translation: "Apoiar" },
        { topic: "Verbs (M-W)", term: "understand", definition: "To perceive the intended meaning of something.", translation: "Entender" },
        { topic: "Verbs (M-W)", term: "volunteer", definition: "To freely offer to take part in an enterprise.", translation: "Voluntariar-se" },
        { topic: "Verbs (M-W)", term: "work", definition: "To engage in physical or mental activity to achieve a result.", translation: "Trabalhar" },

        // TOPIC 5: GLOBAL CONCEPTS & PHRASES
        { topic: "Concepts", term: "awareness", definition: "Knowledge or perception of a situation or fact.", translation: "Conscientização" },
        { topic: "Concepts", term: "sanitation", definition: "Conditions relating to public health.", translation: "Saneamento" },
        { topic: "Concepts", term: "sustainability", definition: "The quality of not being harmful to the environment.", translation: "Sustentabilidade" },
        { topic: "Concepts", term: "well-being", definition: "The state of being comfortable, healthy, or happy.", translation: "Bem-estar" },
        { topic: "Concepts", term: "be-the-change", definition: "Phrase encouraging individual action.", translation: "Seja a mudança" },
        { topic: "Concepts", term: "make-a-difference", definition: "To have a significant effect on a situation.", translation: "Fazer a diferença" },

        // TOPIC 6: GRAMMAR POINTS
        { topic: "Grammar", term: "simple-past", definition: "Tense used to describe a finished action.", translation: "Passado simples" },
        { topic: "Grammar", term: "present-perfect", definition: "Tense for experiences or actions with a result now.", translation: "Presente perfeito" },
        { topic: "Grammar", term: "present-perfect-continuous", definition: "Tense used to emphasize duration.", translation: "Presente perfeito contínuo" },
        { topic: "Grammar", term: "state-verbs", definition: "Verbs that describe states and are not used in -ing.", translation: "Verbos de estado" },
        { topic: "Grammar", term: "besides", definition: "Used to add an extra point; in addition to.", translation: "Além de" },
        { topic: "Grammar", term: "furthermore", definition: "Used to introduce a formal fresh consideration.", translation: "Além disso" },
        { topic: "Grammar", term: "shall", definition: "A formal way to make a suggestion or an offer.", translation: "Deveríamos / Vamos" }
    ]
});