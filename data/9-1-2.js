/**
 * REACH English - LESSON DATA 9-1-2
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "9-1-2", 
    grade: "9th Grade",       
    bimester: "1",   
    chapter: "2",    
    chapterTitle: "Journeys Without Boundaries!", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss migration, refugees, and living abroad.<br>• Identify challenges like culture shock and language barriers.<br>• Use \"Must\" and \"Have to\" to talk about obligations.<br>• Express wishes about the present (I wish I knew...)<br>• Express regrets about the past (If only I had known...).",
            welcome: "Hello, Global Citizens! It's Mr. D!<br><br>Welcome to \"Journeys Without Boundaries\"! Today, we are exploring the brave journeys people make to find a safe home or a better life. We will talk about the challenges of moving to a new country and the hope for a fresh start. We'll also master how to talk about rules and obligations, and how to express our deepest wishes and regrets. Let's open our hearts and minds!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss migration, refugees, and living abroad. Identify challenges like culture shock and language barriers. Use Must and Have to to talk about obligations. Express wishes about the present. Express regrets about the past.",
                welcome: "TTS: Hello, Global Citizens! It's Mr. D! Welcome to Journeys Without Boundaries! Today, we are exploring the brave journeys people make to find a safe home or a better life. We will talk about the challenges of moving to a new country and the hope for a fresh start. We'll also master how to talk about rules and obligations, and how to express our deepest wishes and regrets. Let's open our hearts and minds!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "(Sound of a school cafeteria background noise. Albert and Celine are having lunch.)", 
            contextAudio: "audio/9-1-2/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Albert, have you met the [newcomer](tooltip:newcomer)? His name is Ahmed." 
                },
                { 
                    speaker: "Albert", 
                    text: "Yes. He is a [refugee](tooltip:refugee). He had to [flee](tooltip:flee) his country because of the [conflict](tooltip:conflict)." 
                },
                { 
                    speaker: "Celine", 
                    text: "That is so [sad](tooltip:sad). He must feel very [lonely](tooltip:lonely)." 
                },
                { 
                    speaker: "Albert", 
                    text: "He does. He is struggling with the [language barrier](tooltip:language-barrier) and [culture shock](tooltip:culture-shock)." 
                },
                { 
                    speaker: "Celine", 
                    text: "I [wish I could](tooltip:wish-i-could) speak his language to [help](tooltip:help) him." 
                },
                { 
                    speaker: "Albert", 
                    text: "Me too. But we [have to](tooltip:have-to) be patient. He needs time to [adapt](tooltip:adapt)." 
                },
                { 
                    speaker: "Celine", 
                    text: "If [only he had](tooltip:if-only-he-had) arrived earlier, he could have joined the soccer team." 
                },
                { 
                    speaker: "Albert", 
                    text: "We can still invite him. Everyone deserves a [better life](tooltip:better-life)." 
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
                    title: "Migration & Refugees",
                    audio: "TTS: Refugee. Asylum seeker. Migrant. Immigration. Emigration. Border. Conflict. Flee. Escape. Newcomer.",
                    items: [
                        { term: "Refugee", trans: "<small style='color:#0077b6'>Refugiado(a)</small>" },
                        { term: "Asylum seeker", trans: "<small style='color:#0077b6'>Solicitante de asilo</small>" },
                        { term: "Migrant", trans: "<small style='color:#0077b6'>Migrante</small>" },
                        { term: "Immigration", trans: "<small style='color:#0077b6'>Imigração (Entrada)</small>" },
                        { term: "Emigration", trans: "<small style='color:#0077b6'>Emigração (Saída)</small>" },
                        { term: "Border", trans: "<small style='color:#0077b6'>Fronteira</small>" },
                        { term: "Conflict", trans: "<small style='color:#0077b6'>Conflito</small>" },
                        { term: "Flee", trans: "<small style='color:#0077b6'>Fugir (de perigo)</small>" },
                        { term: "Escape", trans: "<small style='color:#0077b6'>Escapar</small>" },
                        { term: "Newcomer", trans: "<small style='color:#0077b6'>Recém-chegado</small>" }
                    ]
                },
                {
                    title: "Challenges of Living Abroad",
                    audio: "TTS: Living Abroad. Culture shock. Homesick. Language barrier. Discrimination. Visa issues. Bureaucracy. Job scarcity. Lack of integration. Loneliness.",
                    items: [
                        { term: "Living Abroad", trans: "<small style='color:#0077b6'>Morando no Exterior</small>" },
                        { term: "Culture shock", trans: "<small style='color:#0077b6'>Choque cultural</small>" },
                        { term: "Homesick", trans: "<small style='color:#0077b6'>Saudades de casa</small>" },
                        { term: "Language barrier", trans: "<small style='color:#0077b6'>Barreira linguística</small>" },
                        { term: "Discrimination", trans: "<small style='color:#0077b6'>Discriminação</small>" },
                        { term: "Visa issues", trans: "<small style='color:#0077b6'>Problemas com visto</small>" },
                        { term: "Bureaucracy", trans: "<small style='color:#0077b6'>Burocracia</small>" },
                        { term: "Job scarcity", trans: "<small style='color:#0077b6'>Escassez de emprego</small>" },
                        { term: "Lack of integration", trans: "<small style='color:#0077b6'>Falta de integração</small>" },
                        { term: "Loneliness", trans: "<small style='color:#0077b6'>Solidão</small>" }
                    ]
                },
                {
                    title: "Opportunities & Growth",
                    audio: "TTS: Seeking Opportunities. Education. Better life. Career development. Work experience. Skills. New environment. Growth. Challenge. Potential. Resources.",
                    items: [
                        { term: "Seeking Opportunities", trans: "<small style='color:#0077b6'>Buscando Oportunidades</small>" },
                        { term: "Education", trans: "<small style='color:#0077b6'>Educação</small>" },
                        { term: "Better life", trans: "<small style='color:#0077b6'>Vida melhor</small>" },
                        { term: "Career development", trans: "<small style='color:#0077b6'>Desenvolvimento profissional</small>" },
                        { term: "Work experience", trans: "<small style='color:#0077b6'>Experiência de trabalho</small>" },
                        { term: "Skills", trans: "<small style='color:#0077b6'>Habilidades</small>" },
                        { term: "New environment", trans: "<small style='color:#0077b6'>Novo ambiente</small>" },
                        { term: "Growth", trans: "<small style='color:#0077b6'>Crescimento</small>" },
                        { term: "Challenge", trans: "<small style='color:#0077b6'>Desafio</small>" },
                        { term: "Potential", trans: "<small style='color:#0077b6'>Potencial</small>" },
                        { term: "Resources", trans: "<small style='color:#0077b6'>Recursos</small>" }
                    ]
                },
                {
                    title: "Verbs & Grammar Words",
                    audio: "TTS: Adapt. Seek. Leave. Must. Have to. Mustn't. Don't have to. Wish. If only.",
                    items: [
                        { term: "Adapt", trans: "<small style='color:#0077b6'>Adaptar-se</small>" },
                        { term: "Seek", trans: "<small style='color:#0077b6'>Buscar / Procurar</small>" },
                        { term: "Leave", trans: "<small style='color:#0077b6'>Deixar / Sair</small>" },
                        { term: "Must", trans: "<small style='color:#0077b6'>Dever (Obrigação Interna / Forte)</small>" },
                        { term: "Have to", trans: "<small style='color:#0077b6'>Ter que (Obrigação Externa / Regra)</small>" },
                        { term: "Mustn't", trans: "<small style='color:#0077b6'>Proibição (Não deve)</small>" },
                        { term: "Don't have to", trans: "<small style='color:#0077b6'>Não é necessário (Opcional)</small>" },
                        { term: "Wish", trans: "<small style='color:#0077b6'>Desejo (no presente ou passado)</small>" },
                        { term: "If only", trans: "<small style='color:#0077b6'>Se ao menos (Arrependimento)</small>" }
                    ]
                }
            ],

            // ======================================================
            // 2B: Context Examples (Grouped & Tabbed)
            // ======================================================
            exampleGroups: [
                {
                    title: "Migration & Refugees",
                    audio: "TTS: A refugee needs a safe place. He is an asylum seeker waiting for papers. Many migrants move to find work. Immigration lines are long. Emigration happens when people leave their country. They crossed the border at night. The conflict destroyed the city. They had to flee their home. She managed to escape the danger. We welcomed the newcomer to our class.",
                    items: [
                        { term: "Refugee", sent: "A refugee needs a safe place.", trans: "<span style='color:#0077b6'>O refugiado precisa de um lugar seguro.</span>" },
                        { term: "Asylum seeker", sent: "He is an asylum seeker waiting for papers.", trans: "<span style='color:#0077b6'>Ele é um solicitante de asilo esperando por documentos.</span>" },
                        { term: "Migrant", sent: "Many migrants move to find work.", trans: "<span style='color:#0077b6'>Muitos migrantes mudam-se a trabalho.</span>" },
                        { term: "Immigration", sent: "Immigration lines are long.", trans: "<span style='color:#0077b6'>As filas de imigração são longas.</span>" },
                        { term: "Emigration", sent: "Emigration happens when people leave their country.", trans: "<span style='color:#0077b6'>Emigração acontece quando pessoas deixam seu país.</span>" },
                        { term: "Border", sent: "They crossed the border at night.", trans: "<span style='color:#0077b6'>Eles cruzaram a fronteira à noite.</span>" },
                        { term: "Conflict", sent: "The conflict destroyed the city.", trans: "<span style='color:#0077b6'>O conflito destruiu a cidade.</span>" },
                        { term: "Flee", sent: "They had to flee their home.", trans: "<span style='color:#0077b6'>Eles tiveram que fugir de casa.</span>" },
                        { term: "Escape", sent: "She managed to escape the danger.", trans: "<span style='color:#0077b6'>Ela conseguiu escapar do perigo.</span>" },
                        { term: "Newcomer", sent: "We welcomed the newcomer to our class.", trans: "<span style='color:#0077b6'>Demos as boas-vindas ao recém-chegado à aula.</span>" }
                    ]
                },
                {
                    title: "Challenges of Living Abroad",
                    audio: "TTS: Living abroad can be difficult but rewarding. I experienced culture shock in Japan. He feels homesick during the holidays. The language barrier makes it hard to communicate. We must fight against discrimination. She can't work because of visa issues. There is too much bureaucracy to get papers. Job scarcity is a big problem. Lack of integration makes people feel isolated. Loneliness is feeling alone.",
                    items: [
                        { term: "Living Abroad", sent: "Living abroad can be difficult but rewarding.", trans: "<span style='color:#0077b6'>Morando no exterior pode ser difícil mas recompensador.</span>" },
                        { term: "Culture shock", sent: "I experienced culture shock in Japan.", trans: "<span style='color:#0077b6'>Eu experimentei choque cultural no Japão.</span>" },
                        { term: "Homesick", sent: "He feels homesick during the holidays.", trans: "<span style='color:#0077b6'>Ele sente saudades de casa durante as férias.</span>" },
                        { term: "Language barrier", sent: "The language barrier makes it hard to communicate.", trans: "<span style='color:#0077b6'>A barreira linguística torna difícil a comunicação.</span>" },
                        { term: "Discrimination", sent: "We must fight against discrimination.", trans: "<span style='color:#0077b6'>Devemos lutar contra a discriminação.</span>" },
                        { term: "Visa issues", sent: "She can't work because of visa issues.", trans: "<span style='color:#0077b6'>Ela não pode trabalhar por causa de problemas com visto.</span>" },
                        { term: "Bureaucracy", sent: "There is too much bureaucracy to get papers.", trans: "<span style='color:#0077b6'>Há muita burocracia para conseguir documentos.</span>" },
                        { term: "Job scarcity", sent: "Job scarcity is a big problem there.", trans: "<span style='color:#0077b6'>A escassez de emprego é um grande problema lá.</span>" },
                        { term: "Lack of integration", sent: "Lack of integration makes people feel isolated.", trans: "<span style='color:#0077b6'>A falta de integração faz as pessoas se sentirem isoladas.</span>" },
                        { term: "Loneliness", sent: "Loneliness is feeling alone.", trans: "<span style='color:#0077b6'>Solidão é se sentir sozinho.</span>" }
                    ]
                },
                {
                    title: "Opportunities & Growth",
                    audio: "TTS: They are seeking opportunities for a better life. Access to education is a right. Everyone wants a better life. This job is good for my career development. I have five years of work experience. She has great computer skills. Adapting to a new environment takes time. Personal growth is important. Learning a language is a big challenge. You have the potential to succeed. The country has natural resources.",
                    items: [
                        { term: "Seeking Opportunities", sent: "They are seeking opportunities for a better life.", trans: "<span style='color:#0077b6'>Eles estão buscando oportunidades para uma vida melhor.</span>" },
                        { term: "Education", sent: "Access to education is a right.", trans: "<span style='color:#0077b6'>Acesso à educação é um direito.</span>" },
                        { term: "Better life", sent: "Everyone wants a better life.", trans: "<span style='color:#0077b6'>Todos querem uma vida melhor.</span>" },
                        { term: "Career development", sent: "This job is good for my career development.", trans: "<span style='color:#0077b6'>Este emprego é bom para o meu desenvolvimento de carreira.</span>" },
                        { term: "Work experience", sent: "I have five years of work experience.", trans: "<span style='color:#0077b6'>Eu tenho cinco anos de experiência de trabalho.</span>" },
                        { term: "Skills", sent: "She has great computer skills.", trans: "<span style='color:#0077b6'>Ela tem ótimas habilidades de informática.</span>" },
                        { term: "New environment", sent: "Adapting to a new environment takes time.", trans: "<span style='color:#0077b6'>Adaptar-se a um novo ambiente leva tempo.</span>" },
                        { term: "Growth", sent: "Personal growth is important.", trans: "<span style='color:#0077b6'>Crescimento pessoal é importante.</span>" },
                        { term: "Challenge", sent: "Learning a language is a big challenge.", trans: "<span style='color:#0077b6'>Aprender um idioma é um grande desafio.</span>" },
                        { term: "Potential", sent: "You have the potential to succeed.", trans: "<span style='color:#0077b6'>Você tem o potencial para ter sucesso.</span>" },
                        { term: "Resources", sent: "The country has natural resources.", trans: "<span style='color:#0077b6'>O país tem recursos naturais.</span>" }
                    ]
                },
                {
                    title: "Verbs & Grammar Words",
                    audio: "TTS: Humans can adapt to many climates. They seek asylum in Europe. They had to leave their belongings behind. I must study harder. You have to have a visa. You mustn't smoke here. We don't have to go if we don't want to. I wish I had a car. If only I knew the answer.",
                    items: [
                        { term: "Adapt", sent: "Humans can adapt to many climates.", trans: "<span style='color:#0077b6'>Humanos conseguem se adaptar a muitos climas.</span>" },
                        { term: "Seek", sent: "They seek asylum in Europe.", trans: "<span style='color:#0077b6'>Eles buscam asilo na Europa.</span>" },
                        { term: "Leave", sent: "They had to leave their belongings behind.", trans: "<span style='color:#0077b6'>Eles tiveram que deixar seus pertences para trás.</span>" },
                        { term: "Must", sent: "I must study harder.", trans: "<span style='color:#0077b6'>Eu devo estudar mais.</span>" },
                        { term: "Have to", sent: "You have to have a visa.", trans: "<span style='color:#0077b6'>Você tem que ter um visto.</span>" },
                        { term: "Mustn't", sent: "You mustn't smoke here.", trans: "<span style='color:#0077b6'>Você não deve fumar aqui.</span>" },
                        { term: "Don't have to", sent: "We don't have to go if we don't want to.", trans: "<span style='color:#0077b6'>Nós não precisamos ir se não quisermos.</span>" },
                        { term: "Wish", sent: "I wish I had a car.", trans: "<span style='color:#0077b6'>Eu gostaria de ter um carro.</span>" },
                        { term: "If only", sent: "If only I knew the answer.", trans: "<span style='color:#0077b6'>Se ao menos eu soubesse a resposta.</span>" }
                    ]
                }
            ],

            // ======================================================
            // 2C: Practice Drills (24 MCQ Exercises)
            // ======================================================
            drills: [
                { 
                    type: "mcq", 
                    q: "Migration: A person who leaves their country due to danger is a...", 
                    options: [ {t: "Tourist", c: false}, {t: "Refugee", c: true}, {t: "Student", c: false}, {t: "Manager", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Challenges: Feeling sad because you miss your home is called...", 
                    options: [ {t: "Homesick", c: true}, {t: "Culture shock", c: false}, {t: "Bureaucracy", c: false}, {t: "Growth", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Vocabulary - Verbs: To run away from a dangerous place is to...", 
                    options: [ {t: "Adapt", c: false}, {t: "Flee", c: true}, {t: "Seek", c: false}, {t: "Arrive", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Challenges: When you can't communicate because of different languages, it's a...", 
                    options: [ {t: "Visa issues", c: false}, {t: "Language barrier", c: true}, {t: "Job scarcity", c: false}, {t: "Skills", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Opportunities: Learning new things to get a better job is...", 
                    options: [ {t: "Career development", c: true}, {t: "Discrimination", c: false}, {t: "Conflict", c: false}, {t: "Loneliness", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Grammar - Must/Have to: 'This is a law. You _______ have a visa.'", 
                    options: [ {t: "wish", c: false}, {t: "has to", c: false}, {t: "have to", c: true}, {t: "if only", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Grammar - Wish: 'I don't have a car. I _______ I had one.'", 
                    options: [ {t: "wish", c: true}, {t: "hope", c: false}, {t: "must", c: false}, {t: "have to", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Vocabulary - Nouns: The line that separates two countries is the...", 
                    options: [ {t: "Border", c: true}, {t: "Resource", c: false}, {t: "Environment", c: false}, {t: "Bureaucracy", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Grammar - Past Regret: 'I didn't go to the party. If only I _______ gone.'", 
                    options: [ {t: "have", c: false}, {t: "had", c: true}, {t: "has", c: false}, {t: "was", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Vocabulary - General: 'He is _______ asylum in a new country.'", 
                    options: [ {t: "seeking", c: true}, {t: "fleeing", c: false}, {t: "escaping", c: false}, {t: "losing", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Which word means 'feeling sad and alone because you miss your home'?", 
                    options: [ {t: "Culture shock", c: false}, {t: "Loneliness", c: false}, {t: "Homesick", c: true}, {t: "Frustrated", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "When people are treated unfairly because of their background, it is called...", 
                    options: [ {t: "Conflict", c: false}, {t: "Discrimination", c: true}, {t: "Bureaucracy", c: false}, {t: "Job scarcity", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "What is the opposite of 'Mustn't' (prohibition)?", 
                    options: [ {t: "Must", c: false}, {t: "Don't have to", c: true}, {t: "Have to", c: false}, {t: "Should", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Which verb describes 'looking for something'?", 
                    options: [ {t: "Adapt", c: false}, {t: "Leave", c: false}, {t: "Seek", c: true}, {t: "Flee", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "If you have a lot of complex rules and procedures to follow, you are dealing with...", 
                    options: [ {t: "Job scarcity", c: false}, {t: "Culture shock", c: false}, {t: "Bureaucracy", c: true}, {t: "Skills", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Which phrase means 'I regret something about the past'?", 
                    options: [ {t: "I wish I knew", c: false}, {t: "If only I had known", c: true}, {t: "I have to know", c: false}, {t: "I must know", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "To get used to a new situation or environment is to...", 
                    options: [ {t: "Escape", c: false}, {t: "Adapt", c: true}, {t: "Leave", c: false}, {t: "Flee", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Which of these is NOT a challenge of living abroad?", 
                    options: [ {t: "Language barrier", c: false}, {t: "Culture shock", c: false}, {t: "Resources", c: true}, {t: "Job scarcity", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Which verb indicates a strong, internal obligation?", 
                    options: [ {t: "Have to", c: false}, {t: "Must", c: true}, {t: "Should", c: false}, {t: "Can", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Which term describes 'a new setting or surrounding conditions'?", 
                    options: [ {t: "Growth", c: false}, {t: "Potential", c: false}, {t: "New environment", c: true}, {t: "Resources", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "If you want to express a desire for the present that is not currently true, you use...", 
                    options: [ {t: "If only", c: false}, {t: "I wish", c: true}, {t: "I have to", c: false}, {t: "I must", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Which phrase indicates that something is NOT necessary, but optional?", 
                    options: [ {t: "Mustn't", c: false}, {t: "Don't have to", c: true}, {t: "Have to", c: false}, {t: "Wish", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "The line separating two political or geographical areas is a...", 
                    options: [ {t: "Migrant", c: false}, {t: "Refugee", c: false}, {t: "Border", c: true}, {t: "Asylum", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Which term describes 'looking for chances to improve one's situation'?", 
                    options: [ {t: "Loneliness", c: false}, {t: "Lack of integration", c: false}, {t: "Seeking Opportunities", c: true}, {t: "Work experience", c: false} ] 
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
                    title: "MUST (Obligation & Prohibition)",
                    audio: "TTS: We use MUST when the speaker thinks it is necessary, like a personal obligation or strong advice. I must study hard. He must be careful. The negative MUSTN'T means something is prohibited. You mustn't smoke here. She mustn't leave.",
                    explanation: "We use MUST when the speaker thinks it is necessary (personal obligation) or for strong advice. The negative MUSTN'T means something is prohibited.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos MUST quando o falante acha que é necessário (obrigação pessoal) ou para conselhos fortes. O negativo MUSTN'T significa que algo é proibido.)</span>",
                    samples: [
                        { en: "I must study hard.", pt: "<span style='color:#0077b6'>Eu devo estudar muito.</span>" },
                        { en: "He must be careful.", pt: "<span style='color:#0077b6'>Ele deve ser cuidadoso.</span>" },
                        { en: "You mustn't smoke here.", pt: "<span style='color:#0077b6'>Você não deve/está proibido de fumar aqui.</span>" },
                        { en: "She mustn't leave.", pt: "<span style='color:#0077b6'>Ela não deve sair.</span>" }
                    ]
                },
                {
                    title: "HAVE TO (External Obligation)",
                    audio: "TTS: We use HAVE TO when the obligation comes from outside, like a law, a rule, or a boss. I have to show a passport. He has to wear a uniform. The negative DON'T HAVE TO means something is not necessary; it is optional. I don't have to pay. He doesn't have to work today.",
                    explanation: "We use HAVE TO when the obligation comes from outside (a law, a rule, a boss). The negative DON'T HAVE TO means something is NOT necessary (it is optional).<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos HAVE TO quando a obrigação vem de fora (uma lei, uma regra, um chefe). O negativo DON'T HAVE TO significa que algo NÃO é necessário.)</span>",
                    samples: [
                        { en: "I have to show a passport. (Law)", pt: "<span style='color:#0077b6'>Nós temos que mostrar o passaporte. (Lei)</span>" },
                        { en: "He has to wear a uniform. (Rule)", pt: "<span style='color:#0077b6'>Ele tem que usar uniforme. (Regra)</span>" },
                        { en: "I don't have to pay. (Optional)", pt: "<span style='color:#0077b6'>Nós não temos que/precisamos pagar. (Opcional)</span>" },
                        { en: "Do you have to leave?", pt: "<span style='color:#0077b6'>Você tem que ir?</span>" }
                    ]
                },
                {
                    title: "Wish (Present Desire)",
                    audio: "TTS: We use Wish plus the Simple Past to talk about things we want to be different now. It describes an imaginary situation. I wish I spoke French. I wish you were here. She wishes she had more money. If only we knew the answer.",
                    explanation: "We use **Wish / If only + Simple Past** to talk about things we want to be different now. It describes an imaginary or unreal situation in the present.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos esta estrutura para falar sobre coisas que queremos que sejam diferentes agora. Descreve uma situação imaginária no presente.)</span>",
                    samples: [
                        { en: "I wish I spoke French. (I don't speak it now)", pt: "<span style='color:#0077b6'>Eu queria falar francês. (Eu não falo agora)</span>" },
                        { en: "I wish you were here.", pt: "<span style='color:#0077b6'>Eu queria que você estivesse aqui.</span>" },
                        { en: "She wishes she had more money.", pt: "<span style='color:#0077b6'>Ela queria ter mais dinheiro.</span>" },
                        { en: "If only we knew the answer.", pt: "<span style='color:#0077b6'>Se ao menos nós soubéssemos a resposta.</span>" }
                    ]
                },
                {
                    title: "Wish (Past Regret)",
                    audio: "TTS: We use Wish plus the Past Perfect to express a regret about something that happened or didn't happen in the past. We cannot change it. I wish I had studied more. He wishes he hadn't said that. We wish we had travelled last year. If only they had helped us.",
                    explanation: "We use **Wish / If only + Past Perfect** (had + participle) to express a regret about the past. We cannot change what happened.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos esta estrutura para expressar um arrependimento sobre algo que aconteceu no passado. Não podemos mudar isso.)</span>",
                    samples: [
                        { en: "I wish I had studied more. (I didn't study)", pt: "<span style='color:#0077b6'>Eu queria ter estudado mais. (Eu não estudei)</span>" },
                        { en: "He wishes he hadn't said that.", pt: "<span style='color:#0077b6'>Ele queria não ter dito aquilo.</span>" },
                        { en: "We wish we had travelled last year.", pt: "<span style='color:#0077b6'>Nós queríamos ter viajado ano passado.</span>" },
                        { en: "If only they had helped us.", pt: "<span style='color:#0077b6'>Se ao menos eles tivessem nos ajudado.</span>" }
                    ]
                }
            ],

            // ======================================================
            // 3B: Natural Examples (Dialogues Grouped in Boxes)
            // ======================================================
            dialogueGroups: [
                {
                    title: "Dialogue 1: Must vs. Have to",
                    audio: "audio/9-1-2/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "I must finish this project tonight. It is important to me.", 
                            pt: "<span style='color:#0077b6'>Eu devo terminar este projeto hoje à noite. É importante para mim. (Obrigação pessoal)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "But do you have to finish it today? Is it a rule?", 
                            pt: "<span style='color:#0077b6'>Mas você tem que terminar hoje? É uma regra?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "No, I don't have to submit it until Friday. But I want to do it.", 
                            pt: "<span style='color:#0077b6'>Não, eu não tenho que enviar até sexta. Mas eu quero fazer.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Mustn't (Prohibition)",
                    audio: "audio/9-1-2/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Teacher", 
                            text: "You mustn't use your phone during the test. It is forbidden.", 
                            pt: "<span style='color:#0077b6'>Você não deve usar seu telefone durante a prova. É proibido.</span>" 
                        },
                        { 
                            speaker: "Student", 
                            text: "Sorry. I have to turn it off.", 
                            pt: "<span style='color:#0077b6'>Desculpe. Eu tenho que desligá-lo.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Wish (Present & Past)",
                    audio: "audio/9-1-2/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "I am so tired. I wish I were at the beach right now.", 
                            pt: "<span style='color:#0077b6'>Estou tão cansada. Eu queria estar na praia agora mesmo. (Situação irreal)</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Me too. If only we had planned a trip last weekend.", 
                            pt: "<span style='color:#0077b6'>Eu também. Se ao menos tivéssemos planejado uma viagem no fim de semana passado. (Arrependimento)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Yes. I wish I hadn't spent all my money on clothes.", 
                            pt: "<span style='color:#0077b6'>Sim. Eu queria não ter gasto todo meu dinheiro em roupas.</span>" 
                        }
                    ]
                }
            ],

            // ======================================================
            // 3C: Grammar Practice (24 MCQ Exercises)
            // ======================================================
            grammarDrills: [
                // --- Original Exercises (from PDF) ---
                {
                    type: "mcq",
                    q: "Must vs. Have to: 'It is a hospital rule. You _______ be quiet.'",
                    options: [ {t: "don't have to", c: false}, {t: "have to", c: true}, {t: "wish", c: false}, {t: "has to", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Prohibition: 'You _______ smoke in the school. It is dangerous.'",
                    options: [ {t: "mustn't", c: true}, {t: "don't have to", c: false}, {t: "haven't to", c: false}, {t: "not must", c: false} ]
                },
                {
                    type: "mcq",
                    q: "No Obligation: 'Tomorrow is Sunday. We _______ go to school.'",
                    options: [ {t: "mustn't", c: false}, {t: "don't have to", c: true}, {t: "have to", c: false}, {t: "doesn't have to", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Wish - Present: 'I live in a small apartment. I wish I _______ in a big house.'",
                    options: [ {t: "live", c: false}, {t: "lived", c: true}, {t: "living", c: false}, {t: "have lived", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Wish - Present 'To Be': 'He is short. He wishes he _______ tall.'",
                    options: [ {t: "is", c: false}, {t: "was", c: false}, {t: "were", c: true}, {t: "are", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Wish - Past Regret: 'I failed the exam. I wish I _______ harder.'",
                    options: [ {t: "study", c: false}, {t: "studied", c: false}, {t: "had studied", c: true}, {t: "have studied", c: false} ]
                },
                {
                    type: "mcq",
                    q: "If only - Past: 'We missed the bus. If only we _______ earlier.'",
                    options: [ {t: "had left", c: true}, {t: "left", c: false}, {t: "leave", c: false}, {t: "have left", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Subject Nouns: '_______ (The doctor) says I _______ take this medicine.' (Obligation)",
                    options: [ {t: "He / don't have to", c: false}, {t: "She / have to", c: false}, {t: "He / has to", c: true}, {t: "They / must", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Interrogative Obligation: '_______ (you) _______ wear a tie to work?'",
                    options: [ {t: "Do / have to", c: true}, {t: "Must / have", c: false}, {t: "Have / to", c: false}, {t: "Does / have to", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Structure Identification: 'I wish I had known.' This sentence expresses...",
                    options: [ {t: "A future plan", c: false}, {t: "A present desire", c: false}, {t: "A past regret", c: true}, {t: "An obligation", c: false} ]
                },

                // --- Expanded Exercises (Obligation & Wish) ---
                {
                    type: "mcq",
                    q: "Prohibition: 'The sign says 'No Entry'. We _______ go inside.'",
                    options: [ {t: "mustn't", c: true}, {t: "don't have to", c: false}, {t: "have to", c: false}, {t: "wish", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Wish - Present Ability: 'I can't swim. I wish I _______ swim.'",
                    options: [ {t: "can", c: false}, {t: "could", c: true}, {t: "am", c: false}, {t: "had", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Past Regret: 'I am so tired today. If only I _______ to bed earlier last night.'",
                    options: [ {t: "went", c: false}, {t: "have gone", c: false}, {t: "had gone", c: true}, {t: "go", c: false} ]
                },
                {
                    type: "mcq",
                    q: "External Obligation: 'In the UK, drivers _______ drive on the left.'",
                    options: [ {t: "wish", c: false}, {t: "mustn't", c: false}, {t: "have to", c: true}, {t: "don't have to", c: false} ]
                },
                {
                    type: "mcq",
                    q: "No Obligation: 'I _______ cook tonight. My mom ordered pizza.'",
                    options: [ {t: "mustn't", c: false}, {t: "don't have to", c: true}, {t: "haven't to", c: false}, {t: "have to", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Wish - Present 'To Be': 'I am at work. I wish I _______ at home.'",
                    options: [ {t: "am", c: false}, {t: "was", c: false}, {t: "were", c: true}, {t: "be", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Past Regret: 'I lost my phone. I wish I _______ more careful.'",
                    options: [ {t: "am", c: false}, {t: "was", c: false}, {t: "had been", c: true}, {t: "been", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Internal Necessity: 'I _______ remember to call my parents. It's their anniversary.'",
                    options: [ {t: "must", c: true}, {t: "mustn't", c: false}, {t: "don't have to", c: false}, {t: "wish", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Question: '_______ Ahmed _______ adapt to the new school?'",
                    options: [ {t: "Does / has to", c: false}, {t: "Does / have to", c: true}, {t: "Do / have to", c: false}, {t: "Is / have to", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Wish - Present Possession: 'She is lonely. She wishes she _______ a pet.'",
                    options: [ {t: "has", c: false}, {t: "had", c: true}, {t: "is having", c: false}, {t: "have", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Prohibition: 'You _______ tell anyone. It's a secret!'",
                    options: [ {t: "mustn't", c: true}, {t: "don't have to", c: false}, {t: "must", c: false}, {t: "have to", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Past Regret: 'If only I _______ (listen) to your advice!'",
                    options: [ {t: "listened", c: false}, {t: "have listened", c: false}, {t: "had listened", c: true}, {t: "listen", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Strong Necessity: 'My tooth hurts. I _______ see a dentist today.'",
                    options: [ {t: "must", c: true}, {t: "mustn't", c: false}, {t: "don't have to", c: false}, {t: "wished", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Wish - Present: 'My neighbors are loud. I wish they _______ so much noise.'",
                    options: [ {t: "don't make", c: false}, {t: "didn't make", c: true}, {t: "not make", c: false}, {t: "haven't made", c: false} ]
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
                    text: "I wish I were at home.<br><small style='color:#0077b6'>(Eu queria estar em casa.)</small>", 
                    audio: "TTS: I wish I were at home.", 
                    arrow: "↘" 
                },
                { 
                    text: "You must respect the local laws.<br><small style='color:#0077b6'>(Você deve respeitar as leis locais.)</small>", 
                    audio: "TTS: You must respect the local laws.", 
                    arrow: "↘" 
                },
                { 
                    text: "If only I had learned the language.<br><small style='color:#0077b6'>(Se ao menos eu tivesse aprendido a língua.)</small>", 
                    audio: "TTS: If only I had learned the language.", 
                    arrow: "↘" 
                },
                { 
                    text: "She has to apply for a visa.<br><small style='color:#0077b6'>(Ela tem que solicitar um visto.)</small>", 
                    audio: "TTS: She has to apply for a visa.", 
                    arrow: "↘" 
                },
                { 
                    text: "They don't have to leave.<br><small style='color:#0077b6'>(Eles não precisam ir embora.)</small>", 
                    audio: "TTS: They don't have to leave.", 
                    arrow: "↘" 
                },
                { 
                    text: "He feels homesick sometimes.<br><small style='color:#0077b6'>(Ele sente saudades de casa às vezes.)</small>", 
                    audio: "TTS: He feels homesick sometimes.", 
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
                    instruction: "Listen to Albert talking about a documentary he watched. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre um documentário que ele assistiu. Digite as palavras que faltam.)</small>",
                    audio: "TTS: I watched a sad movie. The family had to flee their country because of the conflict. They crossed the border at night. They wanted to be safe.",
                    text: "I watched a sad movie. The family had to [flee] their country because of the conflict. They crossed the [border] at night. They wanted to be [safe]."
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation between Celine and Albert about school rules. Choose the correct option.<br><small style='color:#0077b6'>(Ouça a conversa entre Celine e Albert sobre as regras da escola. Escolha a opção correta.)</small>",
                    audio: "audio/9-1-2/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: Do we [have to | must] wear a uniform tomorrow?", a: "have to" },
                        { q: "Albert: No, we [don't have to | mustn't]. It's a free day.", a: "don't have to" },
                        { q: "Celine: Great! I [wish | hope] I had a new dress.", a: "wish" }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the sentence and choose the correct meaning.<br><small style='color:#0077b6'>(Ouça a frase e escolha o significado correto.)</small>",
                    audio: "TTS: I wish I had brought my umbrella.",
                    options: [
                        { t: "I have my umbrella.", c: false },
                        { t: "I didn't bring my umbrella (Regret).", c: true },
                        { t: "I will bring my umbrella.", c: false },
                        { t: "I don't need an umbrella.", c: false }
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
                    title: "Narration: Finding a New Home",
                    audio: "TTS: Layla is a refugee. Last year, she had to leave her home because of a war. It was very dangerous, so she couldn't stay. She crossed the border with her family to seek asylum. The journey was long and difficult. Now, she lives in a new country. She feels safe, but she misses her friends. She wishes she could see them again. She is learning the new language to adapt.",
                    body: "Layla is a refugee. Last year, she had to leave her home because of a war. It was very dangerous, so she couldn't stay. She crossed the border with her family to seek asylum. The journey was long and difficult. Now, she lives in a new country. She feels safe, but she misses her friends. She wishes she could see them again. She is learning the new language to adapt.",
                    questions: [
                        { 
                            q: "Why did Layla leave her home?", 
                            options: [ 
                                {t: "To go on vacation", c: false}, 
                                {t: "Because of a war", c: true}, 
                                {t: "To study English", c: false},
                                {t: "She wanted to travel", c: false}
                            ] 
                        },
                        { 
                            q: "What did she seek in the new country?", 
                            options: [ 
                                {t: "A job", c: false}, 
                                {t: "A conflict", c: false}, 
                                {t: "Asylum", c: true},
                                {t: "A car", c: false}
                            ] 
                        },
                        { 
                            q: "What does she wish?", 
                            options: [ 
                                {t: "She wishes she were rich.", c: false}, 
                                {t: "She wishes she could see her friends.", c: true}, 
                                {t: "She wishes she had a cat.", c: false},
                                {t: "She wishes she didn't have to learn.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: Culture Shock",
                    audio: "audio/9-1-2/p6_text2.mp3",
                    body: "<b>Albert:</b> How is your cousin doing in Japan?<br><b>Celine:</b> He is okay, but he is facing some challenges.<br><b>Albert:</b> Is it the language barrier?<br><b>Celine:</b> Yes, and the culture shock. He says there are so many rules. He has to take off his shoes everywhere!<br><b>Albert:</b> Does he regret going?<br><b>Celine:</b> Sometimes. He says, 'If only I had studied Japanese more before I came.'",
                    questions: [
                        { 
                            q: "What challenges is the cousin facing?", 
                            options: [ 
                                {t: "Job scarcity", c: false}, 
                                {t: "Language barrier and culture shock", c: true}, 
                                {t: "Visa issues", c: false},
                                {t: "Bureaucracy", c: false}
                            ] 
                        },
                        { 
                            q: "What is a rule he has to follow?", 
                            options: [ 
                                {t: "Wear a uniform", c: false}, 
                                {t: "Take off his shoes", c: true}, 
                                {t: "Speak English", c: false},
                                {t: "Eat sushi", c: false}
                            ] 
                        },
                        { 
                            q: "What is his regret?", 
                            options: [ 
                                {t: "Not studying Japanese more", c: true}, 
                                {t: "Not bringing money", c: false}, 
                                {t: "Going to Japan", c: false},
                                {t: "Buying a house", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: The Dream Job",
                    audio: "TTS: Maria is an engineer. She wants to work abroad to find better opportunities. She believes she must improve her skills to compete in the global market. She is seeking a job in Canada. However, the process is not easy. There is a lot of bureaucracy and she has to get a visa. She wishes the process were simpler. She is determined to overcome these obstacles for a better life.",
                    body: "Maria is an engineer. She wants to work abroad to find better opportunities. She believes she must improve her skills to compete in the global market. She is seeking a job in Canada. However, the process is not easy. There is a lot of bureaucracy and she has to get a visa. She wishes the process were simpler. She is determined to overcome these obstacles for a better life.",
                    questions: [
                        { 
                            q: "Why does Maria want to work abroad?", 
                            options: [ 
                                {t: "To find better opportunities", c: true}, 
                                {t: "To escape a war", c: false}, 
                                {t: "To learn to cook", c: false},
                                {t: "To visit friends", c: false}
                            ] 
                        },
                        { 
                            q: "What does she believe she must do?", 
                            options: [ 
                                {t: "Buy a new computer", c: false}, 
                                {t: "Improve her skills", c: true}, 
                                {t: "Stay at home", c: false},
                                {t: "Give up", c: false}
                            ] 
                        },
                        { 
                            q: "What does she wish about the process?", 
                            options: [ 
                                {t: "She wishes it were harder.", c: false}, 
                                {t: "She wishes it were simpler.", c: true}, 
                                {t: "She wishes she didn't have to work.", c: false},
                                {t: "She wishes she had a visa already.", c: false}
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
                // Drill 1: Matching (Vocab)
                {
                    type: "matching",
                    instruction: "Match the word with its definition.<br><small style='color:#0077b6'>(Combine a palavra com sua definição.)</small>",
                    pairs: [
                        { left: "Refugee", right: "Person fleeing danger", val: "1" },
                        { left: "Border", right: "Line between countries", val: "2" },
                        { left: "Visa", right: "Document to enter a country", val: "3" },
                        { left: "Homesick", right: "Sad about being away from home", val: "4" }
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
                // Drill 4: Fill in the Blanks (Dropdown)
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
            instruction: "Language Island: Now it's your turn! Write about a wish for the present and a regret about the past.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas: Agora é a sua vez! Escreva sobre um desejo para o presente e um arrependimento sobre o passado.)</span></small>",
            example: "\"I wish I had a new laptop because mine is slow. If only I had saved more money last year! Now, I have to work hard to buy one.\"<br><br><small><span style='color:#0077b6'>(\"Eu gostaria de ter um notebook novo porque o meu está lento. Se ao menos eu tivesse guardado mais dinheiro ano passado! Agora, eu tenho que trabalhar duro para comprar um.\")</span></small>",
            prompts: [
                "What do you wish were different now? (I wish I had/were...) <br><small><span style='color:#0077b6'>(O que você gostaria que fosse diferente agora?)</span></small>",
                "What do you regret from the past? (If only I had/hadn't...) <br><small><span style='color:#0077b6'>(Do que você se arrepende em relação ao passado?)</span></small>",
                "What do you have to do to achieve your goals? (I have to...) <br><small><span style='color:#0077b6'>(O que você tem que fazer para alcançar seus objetivos?)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Migration & Challenges)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Migration & Refugees ---
                { 
                    term: "Refugee", 
                    definition: "A person forced to leave their country to escape war or disaster.", 
                    defTrans: "<span style='color:#0077b6'>Refugiado(a)</span>",
                    example: "The refugee needed a safe home.", 
                    audioFront: "TTS: Refugee",
                    audioBack: "TTS: The refugee needed a safe home." 
                },
                { 
                    term: "Asylum seeker", 
                    definition: "A person who has left their home country as a political refugee.", 
                    defTrans: "<span style='color:#0077b6'>Solicitante de asilo</span>",
                    example: "He is an asylum seeker from a war zone.", 
                    audioFront: "TTS: Asylum seeker",
                    audioBack: "TTS: He is an asylum seeker from a war zone." 
                },
                { 
                    term: "Migrant", 
                    definition: "A person who moves from one place to another to find work.", 
                    defTrans: "<span style='color:#0077b6'>Migrante</span>",
                    example: "Migrants move to find work.", 
                    audioFront: "TTS: Migrant",
                    audioBack: "TTS: Migrants move to find work." 
                },
                { 
                    term: "Immigration", 
                    definition: "The action of coming to live permanently in a foreign country.", 
                    defTrans: "<span style='color:#0077b6'>Imigração (Entrada)</span>",
                    example: "The immigration officer checked my passport.", 
                    audioFront: "TTS: Immigration",
                    audioBack: "TTS: The immigration officer checked my passport." 
                },
                { 
                    term: "Emigration", 
                    definition: "The act of leaving one's own country to settle in another.", 
                    defTrans: "<span style='color:#0077b6'>Emigração (Saída)</span>",
                    example: "Emigration happens when people leave their country.", 
                    audioFront: "TTS: Emigration",
                    audioBack: "TTS: Emigration happens when people leave their country." 
                },
                { 
                    term: "Border", 
                    definition: "A line separating two political or geographical areas.", 
                    defTrans: "<span style='color:#0077b6'>Fronteira</span>",
                    example: "They crossed the border at night.", 
                    audioFront: "TTS: Border",
                    audioBack: "TTS: They crossed the border at night." 
                },
                { 
                    term: "Conflict", 
                    definition: "A serious disagreement or argument; a prolonged struggle.", 
                    defTrans: "<span style='color:#0077b6'>Conflito</span>",
                    example: "They fled because of the conflict.", 
                    audioFront: "TTS: Conflict",
                    audioBack: "TTS: They fled because of the conflict." 
                },
                { 
                    term: "Flee", 
                    definition: "To run away from a place or situation of danger.", 
                    defTrans: "<span style='color:#0077b6'>Fugir (de perigo)</span>",
                    example: "They had to flee their home.", 
                    audioFront: "TTS: Flee",
                    audioBack: "TTS: They had to flee their home." 
                },
                { 
                    term: "Escape", 
                    definition: "To break free from confinement or control.", 
                    defTrans: "<span style='color:#0077b6'>Escapar</span>",
                    example: "She managed to escape the danger.", 
                    audioFront: "TTS: Escape",
                    audioBack: "TTS: She managed to escape the danger." 
                },
                { 
                    term: "Newcomer", 
                    definition: "A person who has recently arrived in a place or group.", 
                    defTrans: "<span style='color:#0077b6'>Recém-chegado</span>",
                    example: "We welcomed the newcomer to our class.", 
                    audioFront: "TTS: Newcomer",
                    audioBack: "TTS: We welcomed the newcomer to our class." 
                },

                // --- Challenges of Living Abroad ---
                { 
                    term: "Living Abroad", 
                    definition: "Residing in a foreign country.", 
                    defTrans: "<span style='color:#0077b6'>Morando no Exterior</span>",
                    example: "Living abroad can be difficult but rewarding.", 
                    audioFront: "TTS: Living Abroad",
                    audioBack: "TTS: Living abroad can be difficult but rewarding." 
                },
                { 
                    term: "Culture shock", 
                    definition: "The feeling of disorientation when subjected to an unfamiliar culture.", 
                    defTrans: "<span style='color:#0077b6'>Choque cultural</span>",
                    example: "I experienced culture shock in Japan.", 
                    audioFront: "TTS: Culture shock",
                    audioBack: "TTS: I experienced culture shock in Japan." 
                },
                { 
                    term: "Homesick", 
                    definition: "Experiencing a longing for one's home during an absence from it.", 
                    defTrans: "<span style='color:#0077b6'>Saudades de casa</span>",
                    example: "He feels homesick during the holidays.", 
                    audioFront: "TTS: Homesick",
                    audioBack: "TTS: He feels homesick during the holidays." 
                },
                { 
                    term: "Language barrier", 
                    definition: "A barrier to communication between people who speak different languages.", 
                    defTrans: "<span style='color:#0077b6'>Barreira linguística</span>",
                    example: "The language barrier makes it hard to communicate.", 
                    audioFront: "TTS: Language barrier",
                    audioBack: "TTS: The language barrier makes it hard to communicate." 
                },
                { 
                    term: "Discrimination", 
                    definition: "The unjust treatment of different categories of people.", 
                    defTrans: "<span style='color:#0077b6'>Discriminação</span>",
                    example: "We must fight against discrimination.", 
                    audioFront: "TTS: Discrimination",
                    audioBack: "TTS: We must fight against discrimination." 
                },
                { 
                    term: "Visa issues", 
                    definition: "Problems related to the official document allowing entry to a country.", 
                    defTrans: "<span style='color:#0077b6'>Problemas com visto</span>",
                    example: "She can't work because of visa issues.", 
                    audioFront: "TTS: Visa issues",
                    audioBack: "TTS: She can't work because of visa issues." 
                },
                { 
                    term: "Bureaucracy", 
                    definition: "Excessively complicated administrative procedure.", 
                    defTrans: "<span style='color:#0077b6'>Burocracia</span>",
                    example: "There is too much bureaucracy to get papers.", 
                    audioFront: "TTS: Bureaucracy",
                    audioBack: "TTS: There is too much bureaucracy to get papers." 
                },
                { 
                    term: "Job scarcity", 
                    definition: "A situation where there are not enough jobs.", 
                    defTrans: "<span style='color:#0077b6'>Escassez de emprego</span>",
                    example: "Job scarcity is a big problem there.", 
                    audioFront: "TTS: Job scarcity",
                    audioBack: "TTS: Job scarcity is a big problem there." 
                },
                { 
                    term: "Loneliness", 
                    definition: "Sadness because one has no friends or company.", 
                    defTrans: "<span style='color:#0077b6'>Solidão</span>",
                    example: "Loneliness is common when you move alone.", 
                    audioFront: "TTS: Loneliness",
                    audioBack: "TTS: Loneliness is common when you move alone." 
                },
                { 
                    term: "Lack of integration", 
                    definition: "Failure to mix with and join a new society.", 
                    defTrans: "<span style='color:#0077b6'>Falta de integração</span>",
                    example: "Lack of integration makes people feel isolated.", 
                    audioFront: "TTS: Lack of integration",
                    audioBack: "TTS: Lack of integration makes people feel isolated." 
                },
                // ======================================================
        // STEP 9: FLASHCARDS (Part 2: Opportunities & Verbs)
        // ======================================================
        // Append these items to the "items" array in Step 9
        
                // --- Opportunities & Growth ---
                { 
                    term: "Seeking Opportunities", 
                    definition: "Looking for chances to improve one's situation.", 
                    defTrans: "<span style='color:#0077b6'>Buscando Oportunidades</span>",
                    example: "They are seeking opportunities for a better life.", 
                    audioFront: "TTS: Seeking Opportunities",
                    audioBack: "TTS: They are seeking opportunities for a better life." 
                },
                { 
                    term: "Education", 
                    definition: "The process of receiving or giving systematic instruction.", 
                    defTrans: "<span style='color:#0077b6'>Educação</span>",
                    example: "Access to education is a right.", 
                    audioFront: "TTS: Education",
                    audioBack: "TTS: Access to education is a right." 
                },
                { 
                    term: "Better life", 
                    definition: "An improved standard of living.", 
                    defTrans: "<span style='color:#0077b6'>Vida melhor</span>",
                    example: "Everyone wants a better life.", 
                    audioFront: "TTS: Better life",
                    audioBack: "TTS: Everyone wants a better life." 
                },
                { 
                    term: "Career development", 
                    definition: "The process of managing your life, learning, and work.", 
                    defTrans: "<span style='color:#0077b6'>Desenvolvimento profissional</span>",
                    example: "This job is good for my career development.", 
                    audioFront: "TTS: Career development",
                    audioBack: "TTS: This job is good for my career development." 
                },
                { 
                    term: "Work experience", 
                    definition: "Short-term experience of employment.", 
                    defTrans: "<span style='color:#0077b6'>Experiência de trabalho</span>",
                    example: "I have five years of work experience.", 
                    audioFront: "TTS: Work experience",
                    audioBack: "TTS: I have five years of work experience." 
                },
                { 
                    term: "Skills", 
                    definition: "The ability to do something well.", 
                    defTrans: "<span style='color:#0077b6'>Habilidades</span>",
                    example: "She has great computer skills.", 
                    audioFront: "TTS: Skills",
                    audioBack: "TTS: She has great computer skills." 
                },
                { 
                    term: "New environment", 
                    definition: "A new setting or surrounding conditions.", 
                    defTrans: "<span style='color:#0077b6'>Novo ambiente</span>",
                    example: "Adapting to a new environment takes time.", 
                    audioFront: "TTS: New environment",
                    audioBack: "TTS: Adapting to a new environment takes time." 
                },
                { 
                    term: "Growth", 
                    definition: "The process of developing physically, mentally, or spiritually.", 
                    defTrans: "<span style='color:#0077b6'>Crescimento</span>",
                    example: "Personal growth is important.", 
                    audioFront: "TTS: Growth",
                    audioBack: "TTS: Personal growth is important." 
                },
                { 
                    term: "Challenge", 
                    definition: "A task or situation that tests someone's abilities.", 
                    defTrans: "<span style='color:#0077b6'>Desafio</span>",
                    example: "Learning a language is a big challenge.", 
                    audioFront: "TTS: Challenge",
                    audioBack: "TTS: Learning a language is a big challenge." 
                },
                { 
                    term: "Potential", 
                    definition: "Latent qualities or abilities that may be developed.", 
                    defTrans: "<span style='color:#0077b6'>Potencial</span>",
                    example: "You have the potential to succeed.", 
                    audioFront: "TTS: Potential",
                    audioBack: "TTS: You have the potential to succeed." 
                },
                { 
                    term: "Resources", 
                    definition: "A stock or supply of money, materials, staff, and other assets.", 
                    defTrans: "<span style='color:#0077b6'>Recursos</span>",
                    example: "The country has natural resources.", 
                    audioFront: "TTS: Resources",
                    audioBack: "TTS: The country has natural resources." 
                },

                // --- Verbs ---
                { 
                    term: "Adapt", 
                    definition: "To become adjusted to new conditions.", 
                    defTrans: "<span style='color:#0077b6'>Adaptar-se</span>",
                    example: "Humans can adapt to many climates.", 
                    audioFront: "TTS: Adapt",
                    audioBack: "TTS: Humans can adapt to many climates." 
                },
                { 
                    term: "Seek", 
                    definition: "To attempt to find something.", 
                    defTrans: "<span style='color:#0077b6'>Buscar / Procurar</span>",
                    example: "They seek asylum in Europe.", 
                    audioFront: "TTS: Seek",
                    audioBack: "TTS: They seek asylum in Europe." 
                },
                { 
                    term: "Leave", 
                    definition: "To go away from.", 
                    defTrans: "<span style='color:#0077b6'>Deixar / Sair</span>",
                    example: "They had to leave their belongings behind.", 
                    audioFront: "TTS: Leave",
                    audioBack: "TTS: They had to leave their belongings behind." 
                },
                // ======================================================
        // STEP 9: FLASHCARDS (Part 3: Grammar Points)
        // ======================================================
        // Append these final items to the "items" array in Step 9
        
                { 
                    term: "Must (Obligation)", 
                    definition: "Modal verb used to express internal obligation or strong necessity.", 
                    defTrans: "<span style='color:#0077b6'>Dever (Obrigação Interna / Forte)</span>",
                    example: "I must study harder.", 
                    audioFront: "TTS: Must, Obligation",
                    audioBack: "TTS: I must study harder." 
                },
                { 
                    term: "Have to (Obligation)", 
                    definition: "Modal verb used to express external obligation like rules or laws.", 
                    defTrans: "<span style='color:#0077b6'>Ter que (Obrigação Externa / Regra)</span>",
                    example: "You have to have a visa.", 
                    audioFront: "TTS: Have to, Obligation",
                    audioBack: "TTS: You have to have a visa." 
                },
                { 
                    term: "Mustn't (Prohibition)", 
                    definition: "Used to express that something is not allowed.", 
                    defTrans: "<span style='color:#0077b6'>Proibição (Não deve)</span>",
                    example: "You mustn't smoke here.", 
                    audioFront: "TTS: Mustn't, Prohibition",
                    audioBack: "TTS: You mustn't smoke here." 
                },
                { 
                    term: "Don't have to (No Obligation)", 
                    definition: "Used to express lack of obligation; it is not necessary.", 
                    defTrans: "<span style='color:#0077b6'>Não é necessário (Opcional)</span>",
                    example: "We don't have to go if we don't want to.", 
                    audioFront: "TTS: Don't have to, No Obligation",
                    audioBack: "TTS: We don't have to go if we don't want to." 
                },
                { 
                    term: "Wish + Simple Past", 
                    definition: "Structure used to talk about things we want to be different in the present.", 
                    defTrans: "<span style='color:#0077b6'>Desejo no presente (Situação Irreal)</span>",
                    example: "I wish I had a car.", 
                    audioFront: "TTS: Wish plus Simple Past",
                    audioBack: "TTS: I wish I had a car." 
                },
                { 
                    term: "Wish + Past Perfect", 
                    definition: "Structure used to talk about regrets about the past.", 
                    defTrans: "<span style='color:#0077b6'>Arrependimento no passado</span>",
                    example: "I wish I had studied more.", 
                    audioFront: "TTS: Wish plus Past Perfect",
                    audioBack: "TTS: I wish I had studied more." 
                },
                { 
                    term: "If only...", 
                    definition: "Used to express a strong wish or a regret.", 
                    defTrans: "<span style='color:#0077b6'>Se ao menos... (Desejo forte)</span>",
                    example: "If only I knew the answer.", 
                    audioFront: "TTS: If only",
                    audioBack: "TTS: If only I knew the answer." 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Part 16: Context, Migration & Challenges)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "newcomer", 
            definition: "A person or thing that has recently arrived in a place or joined a group.", 
            translation: "Recém-chegado" 
        },
        { 
            topic: "Context", 
            term: "refugee", 
            definition: "A person forced to leave their country to escape war, persecution, or disaster.", 
            translation: "Refugiado(a)" 
        },
        { 
            topic: "Context", 
            term: "flee", 
            definition: "To run away from a place or situation of danger.", 
            translation: "Fugir" 
        },
        { 
            topic: "Context", 
            term: "conflict", 
            definition: "A serious disagreement or argument; a prolonged armed struggle.", 
            translation: "Conflito" 
        },
        { 
            topic: "Context", 
            term: "sad", 
            definition: "Feeling or showing sorrow; unhappy.", 
            translation: "Triste" 
        },
        { 
            topic: "Context", 
            term: "lonely", 
            definition: "Sad because one has no friends or company.", 
            translation: "Solitário(a)" 
        },
        { 
            topic: "Context", 
            term: "language-barrier", 
            definition: "A barrier to communication between people who do not speak a common language.", 
            translation: "Barreira linguística" 
        },
        { 
            topic: "Context", 
            term: "culture-shock", 
            definition: "Disorientation experienced by someone subjected to an unfamiliar culture.", 
            translation: "Choque cultural" 
        },
        { 
            topic: "Context", 
            term: "wish-i-could", 
            definition: "Expressing a strong desire for something that is not currently true.", 
            translation: "Queria poder" 
        },
        { 
            topic: "Context", 
            term: "have-to", 
            definition: "Used to express external obligation or necessity.", 
            translation: "Ter que" 
        },
        { 
            topic: "Context", 
            term: "adapt", 
            definition: "To become adjusted to new conditions.", 
            translation: "Adaptar-se" 
        },
        { 
            topic: "Context", 
            term: "if-only-he-had", 
            definition: "Used to express a regret about a past action that did not happen.", 
            translation: "Se ao menos ele tivesse" 
        },
        { 
            topic: "Context", 
            term: "better-life", 
            definition: "An improved standard of living or general well-being.", 
            translation: "Vida melhor" 
        },

        // --- TOPIC 2: MIGRATION & REFUGEES ---
        { 
            topic: "Migration", 
            term: "Asylum seeker", 
            definition: "A person who has left their home country as a political refugee and is seeking protection.", 
            translation: "Solicitante de asilo" 
        },
        { 
            topic: "Migration", 
            term: "Migrant", 
            definition: "A person who moves from one place to another, especially to find work.", 
            translation: "Migrante" 
        },
        { 
            topic: "Migration", 
            term: "Immigration", 
            definition: "The action of coming to live permanently in a foreign country.", 
            translation: "Imigração" 
        },
        { 
            topic: "Migration", 
            term: "Emigration", 
            definition: "The act of leaving one's own country to settle permanently in another.", 
            translation: "Emigração" 
        },
        { 
            topic: "Migration", 
            term: "Border", 
            definition: "A line separating two political or geographical areas, especially countries.", 
            translation: "Fronteira" 
        },
        { 
            topic: "Migration", 
            term: "Escape", 
            definition: "To break free from confinement or control.", 
            translation: "Escapar" 
        },

        // --- TOPIC 3: CHALLENGES OF LIVING ABROAD ---
        { 
            topic: "Challenges", 
            term: "Living Abroad", 
            definition: "Residing in a foreign country.", 
            translation: "Morando no Exterior" 
        },
        { 
            topic: "Challenges", 
            term: "Homesick", 
            definition: "Longing for one's home during a period of absence from it.", 
            translation: "Saudades de casa" 
        },
        { 
            topic: "Challenges", 
            term: "Discrimination", 
            definition: "The unjust or prejudicial treatment of different categories of people.", 
            translation: "Discriminação" 
        },
        { 
            topic: "Challenges", 
            term: "Visa issues", 
            definition: "Problems related to the official document allowing you to enter or stay in a country.", 
            translation: "Problemas com visto" 
        },
        { 
            topic: "Challenges", 
            term: "Bureaucracy", 
            definition: "Excessively complicated administrative procedure.", 
            translation: "Burocracia" 
        },
        { 
            topic: "Challenges", 
            term: "Job scarcity", 
            definition: "A situation where there are not enough jobs.", 
            translation: "Escassez de emprego" 
        },
        { 
            topic: "Challenges", 
            term: "Lack of integration", 
            definition: "Failure to mix with and join society or a group of people.", 
            translation: "Falta de integração" 
        },
        { 
            topic: "Challenges", 
            term: "Loneliness", 
            definition: "Sadness because one has no friends or company.", 
            translation: "Solidão" 
        },
        // --- TOPIC 4: OPPORTUNITIES & GROWTH ---
        { 
            topic: "Opportunities", 
            term: "Seeking Opportunities", 
            definition: "Looking for chances to improve one's situation.", 
            translation: "Buscando Oportunidades" 
        },
        { 
            topic: "Opportunities", 
            term: "Education", 
            definition: "The process of receiving or giving systematic instruction, especially at a school.", 
            translation: "Educação" 
        },
        { 
            topic: "Opportunities", 
            term: "Better life", 
            definition: "An improved standard of living or general well-being.", 
            translation: "Vida melhor" 
        },
        { 
            topic: "Opportunities", 
            term: "Career development", 
            definition: "The process of managing your life, learning, and work over the lifespan.", 
            translation: "Desenvolvimento profissional" 
        },
        { 
            topic: "Opportunities", 
            term: "Work experience", 
            definition: "Experience of employment, typically for a short period of time.", 
            translation: "Experiência de trabalho" 
        },
        { 
            topic: "Opportunities", 
            term: "Skills", 
            definition: "The ability to do something well; expertise.", 
            translation: "Habilidades" 
        },
        { 
            topic: "Opportunities", 
            term: "New environment", 
            definition: "A new setting or surrounding conditions.", 
            translation: "Novo ambiente" 
        },
        { 
            topic: "Opportunities", 
            term: "Growth", 
            definition: "The process of developing physically, mentally, or spiritually.", 
            translation: "Crescimento" 
        },
        { 
            topic: "Opportunities", 
            term: "Challenge", 
            definition: "A task or situation that tests someone's abilities.", 
            translation: "Desafio" 
        },
        { 
            topic: "Opportunities", 
            term: "Potential", 
            definition: "Latent qualities or abilities that may be developed and lead to future success.", 
            translation: "Potencial" 
        },
        { 
            topic: "Opportunities", 
            term: "Resources", 
            definition: "A stock or supply of money, materials, staff, and other assets that can be drawn on.", 
            translation: "Recursos" 
        },

        // --- TOPIC 5: VERBS & GRAMMAR SUMMARY ---
        { 
            topic: "Verbs & Grammar", 
            term: "Must", 
            definition: "Modal verb used to express internal obligation or strong necessity.", 
            translation: "Dever (obrigação interna)" 
        },
        { 
            topic: "Verbs & Grammar", 
            term: "Have to", 
            definition: "Modal verb used to express external obligation (rules, laws).", 
            translation: "Ter que (obrigação externa)" 
        },
        { 
            topic: "Verbs & Grammar", 
            term: "Mustn't", 
            definition: "Used to express prohibition (it is not allowed).", 
            translation: "Não deve (proibição)" 
        },
        { 
            topic: "Verbs & Grammar", 
            term: "Don't have to", 
            definition: "Used to express lack of obligation (it is not necessary/optional).", 
            translation: "Não precisar (opcional)" 
        },
        { 
            topic: "Verbs & Grammar", 
            term: "Wish", 
            definition: "Used to express a strong desire or hope for something that is not currently true.", 
            translation: "Desejar / 'Quem dera'" 
        },
        { 
            topic: "Verbs & Grammar", 
            term: "If only", 
            definition: "Used to express a wish, especially one that is impossible or unlikely to happen.", 
            translation: "Se ao menos" 
        }
    ] // Closes glossary array
}); // Closes initLesson object