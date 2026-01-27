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
            audio3b: "audio/INSERT_ID/step3.mp3", // General audio if needed
            
            subPages: [
                { id: "step3a", label: "3A: Patterns" },
                { id: "step3b", label: "3B: Examples" },
                { id: "step3c", label: "3C: Practice" }
            ],

            // 3A: Explanations (Tabbed)
            patterns: [
                {
                    title: "INSERT_GRAMMAR_TOPIC",
                    // Use style='color:#0077b6; font-style:italic;' for translated explanation
                    explanation: "English Explanation.<br><br><span style='color:#0077b6; font-style:italic;'>(Explicação em Português.)</span>",
                    samples: [
                        { 
                            en: "English Example", 
                            pt: "<span style='color:#0077b6'>Exemplo em Português</span>" 
                        }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Title",
                    audio: "audio/INSERT_ID/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "A", 
                            text: "English Text", 
                            pt: "<span style='color:#0077b6'>Texto em Português</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Title",
                    audio: "audio/INSERT_ID/step3_dialogue2.mp3",
                    lines: []
                }
            ],

            // 3C: Grammar MCQ
            grammarDrills: [
                { 
                    type: "mcq", 
                    q: "INSERT_QUESTION_HERE", 
                    options: [ 
                        {t: "Right", c: true}, 
                        {t: "Wrong", c: false} 
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
                    // Add translation in small blue text
                    text: "English Sentence.<br><small style='color:#0077b6'>(Frase em Português)</small>", 
                    audio: "TTS: English Sentence.", 
                    arrow: "↘" // Use ↘ or ↗
                },
                { 
                    text: "Next Sentence.<br><small style='color:#0077b6'>(Próxima Frase)</small>", 
                    audio: "TTS: Next Sentence.", 
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
                // TYPE: TYPING
                {
                    type: "typing",
                    instruction: "Instruction text.",
                    audio: "TTS: Full audio text.",
                    text: "The sky is [blue] today." // [answer]
                },
                // TYPE: DROPDOWN
                {
                    type: "dropdown",
                    instruction: "Choose the correct option.",
                    audio: "audio/INSERT_ID/step5.mp3",
                    questions: [
                        { q: "Choose [Option A | Option B].", a: "Option A" }
                    ]
                },
                // TYPE: AUDIO CHOICE
                {
                    type: "audio-choice",
                    instruction: "Listen and choose.",
                    audio: "TTS: Audio content.",
                    options: [
                        { t: "Option 1", c: true },
                        { t: "Option 2", c: false }
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
                    title: "INSERT_TITLE",
                    // Use || to separate TTS backup from MP3 file if needed
                    audio: "TTS: Text content... || audio/INSERT_ID/text1.mp3",
                    body: "Long text goes here...",
                    questions: [
                        { 
                            q: "Question?", 
                            options: [ {t:"Yes", c:true}, {t:"No", c:false} ] 
                        }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 7: QUICK DRILLS
        // ======================================================
        {
            title: "Monkey see, Monkey do",
            drills: [
                // Matching
                {
                    type: "matching",
                    instruction: "Match the pairs.",
                    pairs: [
                        { left: "Word", right: "Definition", val: "1" },
                        { left: "Word2", right: "Def2", val: "2" }
                    ]
                },
                // Word Order
                {
                    type: "word-order",
                    instruction: "Unscramble.",
                    sentence: "is / name / My / John",
                    correct: "My name is John"
                },
                // Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the odd one.",
                    options: [
                        { t: "Apple", c: false },
                        { t: "Banana", c: false },
                        { t: "Car", c: true }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "English Instruction.<br><small><span style='color:#0077b6'>(Instrução em Português)</span></small>",
            example: "English Example.<br><small><span style='color:#0077b6'>(Exemplo em Português)</span></small>",
            prompts: [
                "Prompt 1. <br><span style='color:#0077b6'>(Dica 1)</span>",
                "Prompt 2."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                { 
                    term: "INSERT_TERM", 
                    definition: "English Definition.", 
                    defTrans: "Tradução da Definição", // Appears in italics on back
                    example: "English Example sentence.", 
                    audioFront: "TTS: Term",
                    audioBack: "TTS: English Example sentence." 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (New Format)
    // ======================================================
    glossary: [
        { 
            topic: "Topic Name", // Used for pagination grouping
            term: "word-key", 
            definition: "English Definition.", 
            translation: "Tradução" // Appears in glossary list
        }
    ]
});