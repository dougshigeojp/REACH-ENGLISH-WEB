/**
 * REACH English - LESSON DATA 9-4-8
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "9-4-8", 
    grade: "9th Grade",       
    bimester: "4",   
    chapter: "8",    
    chapterTitle: "Green: The Color of Hope for Our Planet", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER - CORRECTED CHAPTER 8
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss environmental problems and sustainable solutions.<br>• Use verbs followed by infinitives (like want to help).<br>• Use verbs followed by gerunds (like enjoy recycling).<br>• Connect ideas with linking words for addition, contrast, and result.<br>• Understand and use idioms about nature.",
            welcome: "Hello, my friend! I'm Mr. D!<br><br>Welcome to our final mission! When you think of green, do you think of nature? Today, we are going to explore how we can be heroes for our planet. We will talk about big challenges like pollution and deforestation, but also about hope and solutions like the Sustainable Development Goals. You'll learn how to express your plans to save the Earth using special verb patterns and connecting words. Are you ready to speak up for our future? Let's go green!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss environmental problems and sustainable solutions. Use verbs followed by infinitives. Use verbs followed by gerunds. Connect ideas with linking words for addition, contrast, and result. Understand and use idioms about nature.",
                welcome: "TTS: Hello, my friend! I'm Mr. D! Welcome to our final mission! When you think of green, do you think of nature? Today, we are going to explore how we can be heroes for our planet. We will talk about big challenges like pollution and deforestation, but also about hope and solutions like the Sustainable Development Goals. You'll learn how to express your plans to save the Earth using special verb patterns and connecting words. Are you ready to speak up for our future? Let's go green!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context) - CORRECTED CHAPTER 8
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of birds chirping and leaves rustling, then a sigh. Albert and Celine are walking in a park, picking up litter.", 
            contextAudio: "audio/9-4-8/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Phew! This park is beautiful, but there is so much [garbage](tooltip:garbage) everywhere. It makes me sad." 
                },
                { 
                    speaker: "Albert", 
                    text: "I know. It seems like people [avoid taking action](tooltip:avoid-taking-action). They just drop their trash and leave." 
                },
                { 
                    speaker: "Celine", 
                    text: "Well, I [refuse](tooltip:refuse) to accept it. That's why I [decided to organize](tooltip:decide-to-do) this cleanup. Every bottle we recycle helps, even if it feels like a [drop in the ocean](tooltip:a-drop-in-the-ocean)." 
                },
                { 
                    speaker: "Albert", 
                    text: "You're right. [Besides](tooltip:besides), cleaning up is better than [doing nothing](tooltip:doing-nothing). I [enjoy helping](tooltip:enjoy-doing) you, and it's good exercise!" 
                },
                { 
                    speaker: "Celine", 
                    text: "Thanks, Albert. We need to [raise awareness](tooltip:to-raise-awareness) so more students [offer to help](tooltip:offer-to-do) next time." 
                },
                { 
                    speaker: "Albert", 
                    text: "Totally. We can [make a difference](tooltip:make-a-difference). The pollution here is just the [tip of the iceberg](tooltip:the-tip-of-the-iceberg), but we have to start somewhere." 
                }
            ]
        },

        // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary) - ACTUAL CHAPTER 8
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
                    title: "Environment & Nature",
                    audio: "TTS: Environment. Sustainable. Development. Garbage. Trash. Deforestation. Pollution. Climate Change. Planet. Renewable Energy. Carbon footprint.",
                    items: [
                        { term: "Environment", trans: "Meio ambiente" },
                        { term: "Sustainable", trans: "Sustentável" },
                        { term: "Development", trans: "Desenvolvimento" },
                        { term: "Garbage / Trash", trans: "Lixo" },
                        { term: "Deforestation", trans: "Desmatamento" },
                        { term: "Pollution", trans: "Poluição" },
                        { term: "Climate Change", trans: "Mudança Climática" },
                        { term: "Planet", trans: "Planeta" },
                        { term: "Renewable Energy", trans: "Energia Renovável" },
                        { term: "Carbon footprint", trans: "Pegada de carbono" }
                    ]
                },
                {
                    title: "Actions & Solutions",
                    audio: "TTS: To Recycle. To Reduce. To Reuse. To Protect. To Save. To go green. To take action. To raise awareness. To sort the trash. To run out of.",
                    items: [
                        { term: "To Recycle", trans: "Reciclar" },
                        { term: "To Reduce", trans: "Reduzir" },
                        { term: "To Reuse", trans: "Reutilizar" },
                        { term: "To Protect", trans: "Proteger" },
                        { term: "To Save", trans: "Salvar / Economizar" },
                        { term: "To go green", trans: "Adotar um estilo de vida ecológico" },
                        { term: "To take action", trans: "Agir / Tomar uma atitude" },
                        { term: "To raise awareness", trans: "Conscientizar / Chamar atenção" },
                        { term: "To sort the trash", trans: "Separar o lixo" },
                        { term: "To run out of", trans: "Ficar sem (recursos)" }
                    ]
                },
                {
                    title: "Idioms about Nature",
                    audio: "TTS: A drop in the ocean. The tip of the iceberg. To be out of the woods. Once in a blue moon. Come rain or shine. A breath of fresh air.",
                    items: [
                        { term: "A drop in the ocean", trans: "Uma gota no oceano (parte muito pequena)" },
                        { term: "The tip of the iceberg", trans: "A ponta do iceberg (apenas uma pequena parte visível)" },
                        { term: "To be out of the woods", trans: "Estar fora de perigo" },
                        { term: "Once in a blue moon", trans: "Muito raramente / Uma vez na vida" },
                        { term: "Come rain or shine", trans: "Faça chuva ou faça sol (não importa o que aconteça)" },
                        { term: "A breath of fresh air", trans: "Um sopro de ar fresco (algo novo e refrescante)" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed) - ACTUAL CHAPTER 8
            exampleGroups: [
                {
                    title: "Environment & Nature",
                    audio: "TTS: We must protect the environment for future generations. Solar power is a sustainable energy source. Sustainable development helps people and the planet. Please put your garbage in the bin. Deforestation destroys the homes of many animals. Air pollution is a big problem in cities. We need to act now to stop climate change. Earth is the only planet we have. Wind and sun provide renewable energy. Walking instead of driving reduces your carbon footprint.",
                    items: [
                        { term: "Environment", sent: "We must protect the environment for future generations.", trans: "<span style='color:#0077b6'>Devemos proteger o meio ambiente para as gerações futuras.</span>" },
                        { term: "Sustainable", sent: "Solar power is a sustainable energy source.", trans: "<span style='color:#0077b6'>Energia solar é uma fonte de energia sustentável.</span>" },
                        { term: "Development", sent: "Sustainable development helps people and the planet.", trans: "<span style='color:#0077b6'>O desenvolvimento sustentável ajuda as pessoas e o planeta.</span>" },
                        { term: "Garbage / Trash", sent: "Please put your garbage in the bin.", trans: "<span style='color:#0077b6'>Por favor, coloque seu lixo na lixeira.</span>" },
                        { term: "Deforestation", sent: "Deforestation destroys the homes of many animals.", trans: "<span style='color:#0077b6'>O desmatamento destrói as casas de muitos animais.</span>" },
                        { term: "Pollution", sent: "Air pollution is a big problem in cities.", trans: "<span style='color:#0077b6'>A poluição do ar é um grande problema nas cidades.</span>" },
                        { term: "Climate Change", sent: "We need to act now to stop climate change.", trans: "<span style='color:#0077b6'>Precisamos agir agora para parar a mudança climática.</span>" },
                        { term: "Planet", sent: "Earth is the only planet we have.", trans: "<span style='color:#0077b6'>A Terra é o único planeta que temos.</span>" },
                        { term: "Renewable Energy", sent: "Wind and sun provide renewable energy.", trans: "<span style='color:#0077b6'>Vento e sol fornecem energia renovável.</span>" },
                        { term: "Carbon footprint", sent: "Walking instead of driving reduces your carbon footprint.", trans: "<span style='color:#0077b6'>Caminhar em vez de dirigir reduz sua pegada de carbono.</span>" }
                    ]
                },
                {
                    title: "Actions & Solutions",
                    audio: "TTS: Remember to recycle paper and plastic. We should reduce the amount of water we waste. You can reuse glass jars for storage. It is our duty to protect nature. Turn off the lights to save energy. My family decided to go green. Politicians need to take action on climate issues. The campaign aims to raise awareness about recycling. It takes time to sort the trash. We are running out of clean water.",
                    items: [
                        { term: "To Recycle", sent: "Remember to recycle paper and plastic.", trans: "<span style='color:#0077b6'>Lembre-se de reciclar papel e plástico.</span>" },
                        { term: "To Reduce", sent: "We should reduce the amount of water we waste.", trans: "<span style='color:#0077b6'>Devemos reduzir a quantidade de água que desperdiçamos.</span>" },
                        { term: "To Reuse", sent: "You can reuse glass jars for storage.", trans: "<span style='color:#0077b6'>Você pode reutilizar potes de vidro para armazenamento.</span>" },
                        { term: "To Protect", sent: "It is our duty to protect nature.", trans: "<span style='color:#0077b6'>É nosso dever proteger a natureza.</span>" },
                        { term: "To Save", sent: "Turn off the lights to save energy.", trans: "<span style='color:#0077b6'>Apague as luzes para economizar energia.</span>" },
                        { term: "To go green", sent: "My family decided to go green.", trans: "<span style='color:#0077b6'>Minha família decidiu adotar um estilo de vida ecológico.</span>" },
                        { term: "To take action", sent: "Politicians need to take action on climate issues.", trans: "<span style='color:#0077b6'>Políticos precisam tomar uma atitude sobre questões climáticas.</span>" },
                        { term: "To raise awareness", sent: "The campaign aims to raise awareness about recycling.", trans: "<span style='color:#0077b6'>A campanha visa conscientizar sobre a reciclagem.</span>" },
                        { term: "To sort the trash", sent: "It takes time to sort the trash.", trans: "<span style='color:#0077b6'>Leva tempo para separar o lixo.</span>" },
                        { term: "To run out of", sent: "We are running out of clean water.", trans: "<span style='color:#0077b6'>Estamos ficando sem água limpa.</span>" }
                    ]
                },
                {
                    title: "Idioms about Nature",
                    audio: "TTS: One donation feels like a drop in the ocean. The plastic on the beach is just the tip of the iceberg. The fire is out, but we are not out of the woods yet. I see a shooting star once in a blue moon. We will plant trees tomorrow, come rain or shine. His new idea was a breath of fresh air for the project.",
                    items: [
                        { term: "A drop in the ocean", sent: "One donation feels like a drop in the ocean.", trans: "<span style='color:#0077b6'>Uma doação parece uma gota no oceano.</span>" },
                        { term: "The tip of the iceberg", sent: "The plastic on the beach is just the tip of the iceberg.", trans: "<span style='color:#0077b6'>O plástico na praia é apenas a ponta do iceberg.</span>" },
                        { term: "To be out of the woods", sent: "The fire is out, but we are not out of the woods yet.", trans: "<span style='color:#0077b6'>O fogo apagou, mas ainda não estamos fora de perigo.</span>" },
                        { term: "Once in a blue moon", sent: "I see a shooting star once in a blue moon.", trans: "<span style='color:#0077b6'>Eu vejo uma estrela cadente muito raramente.</span>" },
                        { term: "Come rain or shine", sent: "We will plant trees tomorrow, come rain or shine.", trans: "<span style='color:#0077b6'>Nós plantaremos árvores amanhã, faça chuva ou faça sol.</span>" },
                        { term: "A breath of fresh air", sent: "His new idea was a breath of fresh air for the project.", trans: "<span style='color:#0077b6'>A nova ideia dele foi um sopro de ar fresco para o projeto.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (Expanded to 24 Questions) - ACTUAL CHAPTER 8
            drills: [
                // ENVIRONMENT & NATURE (1-8)
                {
                    type: "mcq",
                    q: "Choose the correct translation for 'Deforestation':",
                    options: [
                        { t: "Poluição", c: false },
                        { t: "Desmatamento", c: true },
                        { t: "Desenvolvimento", c: false },
                        { t: "Meio ambiente", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Global warming is a direct result of:",
                    options: [
                        { t: "Climate change", c: true },
                        { t: "Recycling", c: false },
                        { t: "Protection", c: false },
                        { t: "Sustainability", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What do we call energy generated from the sun or wind?",
                    options: [
                        { t: "Fossil fuel", c: false },
                        { t: "Renewable energy", c: true },
                        { t: "Garbage", c: false },
                        { t: "Carbon footprint", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The surroundings or conditions in which a person, animal, or plant lives:",
                    options: [
                        { t: "Sustainable", c: false },
                        { t: "Pollution", c: false },
                        { t: "Environment", c: true },
                        { t: "Trash", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Something that can be maintained at a certain level without exhausting resources:",
                    options: [
                        { t: "Sustainable", c: true },
                        { t: "Polluted", c: false },
                        { t: "Dangerous", c: false },
                        { t: "Wasteful", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The presence of harmful or poisonous substances in the environment is:",
                    options: [
                        { t: "Development", c: false },
                        { t: "Protection", c: false },
                        { t: "Pollution", c: true },
                        { t: "Energy", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The 'impact of your activities on the environment' is your:",
                    options: [
                        { t: "Climate change", c: false },
                        { t: "Carbon footprint", c: true },
                        { t: "Renewable energy", c: false },
                        { t: "Development", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What is the name of the place where we all live?",
                    options: [
                        { t: "Planet", c: true },
                        { t: "Moon", c: false },
                        { t: "Garbage", c: false },
                        { t: "Factory", c: false }
                    ]
                },

                // ACTIONS & SOLUTIONS (9-16)
                {
                    type: "mcq",
                    q: "Complete: 'We need to _____ the trash before recycling.'",
                    options: [
                        { t: "sort", c: true },
                        { t: "pollute", c: false },
                        { t: "waste", c: false },
                        { t: "destroy", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To adopt an eco-friendly lifestyle is to:",
                    options: [
                        { t: "go green", c: true },
                        { t: "run out of", c: false },
                        { t: "take action", c: false },
                        { t: "raise awareness", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which word means 'to keep safe from harm or injury'?",
                    options: [
                        { t: "To destroy", c: false },
                        { t: "To protect", c: true },
                        { t: "To pollute", c: false },
                        { t: "To waste", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To make people understand an environmental problem is to:",
                    options: [
                        { t: "raise awareness", c: true },
                        { t: "sort the trash", c: false },
                        { t: "run out of", c: false },
                        { t: "save the planet", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What is the action of using something again?",
                    options: [
                        { t: "Reduce", c: false },
                        { t: "Recycle", c: false },
                        { t: "Reuse", c: true },
                        { t: "Refuse", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'We ran out of water' means:",
                    options: [
                        { t: "We have a lot of water.", c: false },
                        { t: "We have no more water.", c: true },
                        { t: "We bought water.", c: false },
                        { t: "We recycled water.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To fix a problem or deal with a situation is to:",
                    options: [
                        { t: "ignore", c: false },
                        { t: "take action", c: true },
                        { t: "pollute", c: false },
                        { t: "wait", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To use less of something is to:",
                    options: [
                        { t: "increase", c: false },
                        { t: "reduce", c: true },
                        { t: "waste", c: false },
                        { t: "pollute", c: false }
                    ]
                },

                // IDIOMS (17-24)
                {
                    type: "mcq",
                    q: "If an event happens 'very rarely', it happens:",
                    options: [
                        { t: "come rain or shine", c: false },
                        { t: "once in a blue moon", c: true },
                        { t: "out of the woods", c: false },
                        { t: "a drop in the ocean", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If a problem is much bigger than what you can see, the visible part is:",
                    options: [
                        { t: "a breath of fresh air", c: false },
                        { t: "the tip of the iceberg", c: true },
                        { t: "out of the woods", c: false },
                        { t: "a drop in the ocean", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To be 'safe from a dangerous situation' means to be:",
                    options: [
                        { t: "out of the woods", c: true },
                        { t: "a drop in the ocean", c: false },
                        { t: "once in a blue moon", c: false },
                        { t: "the tip of the iceberg", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I will help you, no matter what happens\" is expressed by:",
                    options: [
                        { t: "A breath of fresh air", c: false },
                        { t: "Come rain or shine", c: true },
                        { t: "Once in a blue moon", c: false },
                        { t: "The tip of the iceberg", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "\"His positive attitude was a pleasant change\" can be described as:",
                    options: [
                        { t: "A drop in the ocean", c: false },
                        { t: "A breath of fresh air", c: true },
                        { t: "Out of the woods", c: false },
                        { t: "Once in a blue moon", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "\"One person recycling seems small compared to the world.\" This is:",
                    options: [
                        { t: "It's a drop in the ocean", c: true },
                        { t: "It's out of the woods", c: false },
                        { t: "It's come rain or shine", c: false },
                        { t: "It's a breath of fresh air", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If you are almost out of a problem but not completely, you are not yet:",
                    options: [
                        { t: "out of the woods", c: true },
                        { t: "in a blue moon", c: false },
                        { t: "a breath of fresh air", c: false },
                        { t: "a drop in the ocean", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Renewable energy is a great alternative to:",
                    options: [
                        { t: "Fossil fuels", c: true },
                        { t: "Planting trees", c: false },
                        { t: "Recycling paper", c: false },
                        { t: "Saving water", c: false }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 3: FOLLOW THE PATTERN (Grammar) - ACTUAL CHAPTER 8
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
                    title: "Verbs + Infinitive (to do)",
                    audio: "TTS: Certain verbs are followed by the infinitive form with to. These usually relate to future plans, decisions, or hopes. For example: We agreed to clean the park. I choose to walk to school. Other verbs include: decide, expect, hope, learn, manage, need, offer, plan, promise, refuse, and want.",
                    explanation: "Certain verbs in English are always followed by the infinitive form (to + base verb). These verbs usually relate to future plans, decisions, hopes, or necessities.<br><br><span style='color:#0077b6; font-style:italic;'>(Certos verbos em inglês são sempre seguidos pela forma infinitiva (to + verbo base). Esses verbos geralmente se relacionam a planos futuros, decisões, esperanças ou necessidades.)</span>",
                    samples: [
                        { en: "We <b>agreed to clean</b> the park.", pt: "<span style='color:#0077b6'>Nós concordamos em limpar o parque.</span>" },
                        { en: "I <b>choose to walk</b> to school.", pt: "<span style='color:#0077b6'>Eu escolho andar para a escola.</span>" },
                        { en: "They <b>decided to plant</b> a garden.", pt: "<span style='color:#0077b6'>Eles decidiram plantar um jardim.</span>" },
                        { en: "I <b>hope to save</b> the turtles.", pt: "<span style='color:#0077b6'>Eu espero salvar as tartarugas.</span>" }
                    ]
                },
                {
                    title: "Verbs + Gerund (-ing)",
                    audio: "TTS: These verbs are followed by the gerund form ending in I-N-G. These often relate to likes, dislikes, or opinions about actions. For example: He admitted throwing trash. You should avoid buying plastic. Other verbs include: consider, deny, discuss, enjoy, finish, imagine, keep, mind, miss, practice, quit, and suggest.",
                    explanation: "Certain verbs are always followed by the gerund form (verb + -ing). These verbs frequently relate to likes/dislikes, starting/stopping, or opinions about actions.<br><br><span style='color:#0077b6; font-style:italic;'>(Certos verbos são sempre seguidos pela forma de gerúndio (verbo + -ing). Esses verbos frequentemente se relacionam a gostos/desgostos, começar/parar ou opiniões sobre ações.)</span>",
                    samples: [
                        { en: "He <b>admitted throwing</b> trash.", pt: "<span style='color:#0077b6'>Ele admitiu jogar lixo.</span>" },
                        { en: "You should <b>avoid buying</b> plastic.", pt: "<span style='color:#0077b6'>Você deve evitar comprar plástico.</span>" },
                        { en: "Have you <b>considered going</b> vegan?", pt: "<span style='color:#0077b6'>Você já considerou tornar-se vegano?</span>" },
                        { en: "I <b>dislike seeing</b> litter everywhere.", pt: "<span style='color:#0077b6'>Eu não gosto de ver lixo em todo lugar.</span>" }
                    ]
                },
                {
                    title: "Infinitive vs. Gerund",
                    audio: "TTS: Some verbs change their meaning depending on the form that follows them. Stop to do means pause to do something else. Stop doing means quit an action. Remember to do means don't forget a task. Remember doing means recall a memory.",
                    explanation: "Some verbs change their meaning depending on whether an infinitive or a gerund follows them.<br><br><span style='color:#0077b6; font-style:italic;'>(Alguns verbos mudam de significado dependendo da forma que os segue.)</span>",
                    samples: [
                        { en: "I <b>stopped to drink</b> water. <small>(Pause an action to drink)</small>", pt: "<span style='color:#0077b6'>Parei para beber água. (Pausa)</span>" },
                        { en: "I <b>stopped drinking</b> soda. <small>(Quit the habit)</small>", pt: "<span style='color:#0077b6'>Parei de beber refrigerante. (Desistir)</span>" },
                        { en: "<b>Remember to turn off</b> the light. <small>(Don't forget the task)</small>", pt: "<span style='color:#0077b6'>Lembre-se de apagar a luz. (Tarefa)</span>" },
                        { en: "I <b>remember turning off</b> the light. <small>(Recall the memory)</small>", pt: "<span style='color:#0077b6'>Lembro-me de ter apagado a luz. (Memória)</span>" }
                    ]
                },
                {
                    title: "Linking Words",
                    audio: "TTS: Connectors help organize your ideas. Addition: besides, moreover, furthermore. Contrast: however, although, despite. Result: therefore, as a result, so that.",
                    explanation: "Connectors help organize your ideas and make your speech more fluid. They are divided into Addition, Contrast, and Result.<br><br><span style='color:#0077b6; font-style:italic;'>(Conectivos ajudam a organizar suas ideias e tornar sua fala mais fluida. Eles são divididos em Adição, Contraste e Resultado.)</span>",
                    samples: [
                        { en: "Solar power is clean; <b>moreover</b>, it is renewable.", pt: "<span style='color:#0077b6'>Energia solar é limpa; além do mais, é renovável. (Adição)</span>" },
                        { en: "We want to help, <b>but</b> it is difficult.", pt: "<span style='color:#0077b6'>Queremos ajudar, mas é difícil. (Contraste)</span>" },
                        { en: "The air is dirty; <b>therefore</b>, we wear masks.", pt: "<span style='color:#0077b6'>O ar está sujo; portanto, usamos máscaras. (Resultado)</span>" }
                    ]
                }
            ],

            // 3B: Natural Examples (Grouped in Boxes) - ACTUAL CHAPTER 8
            dialogueGroups: [
                {
                    title: "Dialogue 1: Infinitive vs. Gerund",
                    audio: "audio/9-4-8/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "I want to start a composting bin at school.", 
                            pt: "<span style='color:#0077b6'>Eu quero começar uma composteira na escola.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "That's great! I suggest asking the principal first. He might refuse to let us do it alone.", 
                            pt: "<span style='color:#0077b6'>Isso é ótimo! Eu sugiro pedir ao diretor primeiro. Ele pode se recusar a nos deixar fazer isso sozinhos.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Meaning Change",
                    audio: "audio/9-4-8/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Did you remember to bring the reusable bags?", 
                            pt: "<span style='color:#0077b6'>Você lembrou de trazer as sacolas reutilizáveis?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Oh no! I forgot to put them in the car. I remember taking them out of the closet, though.", 
                            pt: "<span style='color:#0077b6'>Ah não! Eu esqueci de colocá-las no carro. Eu lembro de tê-las tirado do armário, no entanto.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Linking Words (Contrast)",
                    audio: "audio/9-4-8/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Mrs. Canales", 
                            text: "Many people claim they care about nature. However, they continue to buy single-use plastics.", 
                            pt: "<span style='color:#0077b6'>Muitas pessoas alegam que se importam com a natureza. No entanto, elas continuam a comprar plásticos de uso único.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "It's true. Although they know it's bad, they don't change their habits.", 
                            pt: "<span style='color:#0077b6'>É verdade. Embora elas saibam que é ruim, elas não mudam seus hábitos.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 4: Linking Words (Addition & Result)",
                    audio: "audio/9-4-8/step3_dialogue4.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "We organized a cleanup. Furthermore, we planted new flowers.", 
                            pt: "<span style='color:#0077b6'>Nós organizamos uma limpeza. Além disso, plantamos novas flores.</span>" 
                        },
                        { 
                            speaker: "Mrs. Canales", 
                            text: "You worked very hard. As a result, the park looks beautiful.", 
                            pt: "<span style='color:#0077b6'>Vocês trabalharam muito duro. Como resultado, o parque está lindo.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ (Expanded to 24 Questions) - ACTUAL CHAPTER 8
            grammarDrills: [
                // VERBS + INFINITIVE (1-6)
                {
                    type: "mcq",
                    q: "I promised _______ the environment by recycling more.",
                    options: [
                        { t: "helping", c: false },
                        { t: "to help", c: true },
                        { t: "help", c: false },
                        { t: "helped", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The school board decided _______ solar panels on the roof.",
                    options: [
                        { t: "to install", c: true },
                        { t: "installing", c: false },
                        { t: "install", c: false },
                        { t: "installation", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "We expect _______ positive results from the cleanup soon.",
                    options: [
                        { t: "seeing", c: false },
                        { t: "to see", c: true },
                        { t: "see", c: false },
                        { t: "saw", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "I really hope _______ the endangered sea turtles.",
                    options: [
                        { t: "to save", c: true },
                        { t: "saving", c: false },
                        { t: "save", c: false },
                        { t: "saved", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Politicians need _______ immediate action on climate change.",
                    options: [
                        { t: "taking", c: false },
                        { t: "to take", c: true },
                        { t: "take", c: false },
                        { t: "took", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Finally, our community managed _______ its total waste.",
                    options: [
                        { t: "reducing", c: false },
                        { t: "to reduce", c: true },
                        { t: "reduce", c: false },
                        { t: "reduced", c: false }
                    ]
                },

                // VERBS + GERUND (7-12)
                {
                    type: "mcq",
                    q: "Do you mind _______ the window? It's very hot in here.",
                    options: [
                        { t: "to open", c: false },
                        { t: "open", c: false },
                        { t: "opening", c: true },
                        { t: "opened", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "He keeps _______ his trash on the floor instead of the bin.",
                    options: [
                        { t: "to throw", c: false },
                        { t: "throw", c: false },
                        { t: "throwing", c: true },
                        { t: "threw", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "We should avoid _______ single-use plastic bottles.",
                    options: [
                        { t: "buying", c: true },
                        { t: "to buy", c: false },
                        { t: "buy", c: false },
                        { t: "bought", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The students really enjoyed _______ in the community garden.",
                    options: [
                        { t: "to work", c: false },
                        { t: "work", c: false },
                        { t: "worked", c: false },
                        { t: "working", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "I suggest _______ the bus instead of driving a car.",
                    options: [
                        { t: "taking", c: true },
                        { t: "to take", c: false },
                        { t: "take", c: false },
                        { t: "to taking", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Have you finished _______ the trash into categories?",
                    options: [
                        { t: "to sort", c: false },
                        { t: "sorting", c: true },
                        { t: "sort", c: false },
                        { t: "sorted", c: false }
                    ]
                },

                // MEANING CHANGES: INF vs GERUND (13-18)
                {
                    type: "mcq",
                    q: "Which means 'I paused my activity to eat lunch'?",
                    options: [
                        { t: "I stopped to eat lunch.", c: true },
                        { t: "I stopped eating lunch.", c: false },
                        { t: "I finish to eat lunch.", c: false },
                        { t: "I remember to eat lunch.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which means 'I have a memory of visiting the park'?",
                    options: [
                        { t: "I remember to visit the park.", c: false },
                        { t: "I remember visiting the park.", c: true },
                        { t: "I forgot visiting the park.", c: false },
                        { t: "I stopped visiting the park.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "I forgot _______ the door, so I left it open by mistake.",
                    options: [
                        { t: "locking", c: false },
                        { t: "to lock", c: true },
                        { t: "lock", c: false },
                        { t: "to locking", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "I'll never forget _______ the Amazon rainforest last year.",
                    options: [
                        { t: "to visit", c: false },
                        { t: "visit", c: false },
                        { t: "visiting", c: true },
                        { t: "visited", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "I tried _______ the heavy box, but it was too much for me.",
                    options: [
                        { t: "to lift", c: true },
                        { t: "lifting", c: false },
                        { t: "lift", c: false },
                        { t: "lifted", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Try _______ vinegar to clean the jars; it works very well.",
                    options: [
                        { t: "to use", c: false },
                        { t: "use", c: false },
                        { t: "using", c: true },
                        { t: "used", c: false }
                    ]
                },

                // LINKING WORDS (19-24)
                {
                    type: "mcq",
                    q: "It was raining, _______ we went to the park anyway.",
                    options: [
                        { t: "so", c: false },
                        { t: "therefore", c: false },
                        { t: "but", c: true },
                        { t: "moreover", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Plastic is bad for nature; _______, it kills many sea animals.",
                    options: [
                        { t: "however", c: false },
                        { t: "moreover", c: true },
                        { t: "although", c: false },
                        { t: "despite", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "He wasted a lot of water; _______, his water bill was very high.",
                    options: [
                        { t: "therefore", c: true },
                        { t: "but", c: false },
                        { t: "besides", c: false },
                        { t: "although", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ being tired, she spent the afternoon sorting the recycling.",
                    options: [
                        { t: "However", c: false },
                        { t: "Although", c: false },
                        { t: "Despite", c: true },
                        { t: "So", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "I study hard _______ I can get a good job in the future.",
                    options: [
                        { t: "because", c: false },
                        { t: "so that", c: true },
                        { t: "however", c: false },
                        { t: "therefore", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Solar power is clean; _______, it is a renewable energy source.",
                    options: [
                        { t: "but", c: false },
                        { t: "although", c: false },
                        { t: "however", c: false },
                        { t: "furthermore", c: true }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 4: SHADOWING (Recording) - ACTUAL CHAPTER 8
        // ======================================================
        {
            title: "Can you say that again?",
            sentences: [
                { 
                    text: "I decided to start a recycling club.<br><small style='color:#0077b6'>(Eu decidi começar um clube de reciclagem.)</small>", 
                    audio: "TTS: I decided to start a recycling club.", 
                    arrow: "↘" 
                },
                { 
                    text: "She enjoys walking in the forest.<br><small style='color:#0077b6'>(Ela gosta de caminhar na floresta.)</small>", 
                    audio: "TTS: She enjoys walking in the forest.", 
                    arrow: "↘" 
                },
                { 
                    text: "We stopped buying plastic bottles.<br><small style='color:#0077b6'>(Nós paramos de comprar garrafas de plástico.)</small>", 
                    audio: "TTS: We stopped buying plastic bottles.", 
                    arrow: "↘" 
                },
                { 
                    text: "Please remember to turn off the lights.<br><small style='color:#0077b6'>(Por favor, lembre-se de apagar as luzes.)</small>", 
                    audio: "TTS: Please remember to turn off the lights.", 
                    arrow: "↗" 
                },
                { 
                    text: "It is hard work; however, it is necessary.<br><small style='color:#0077b6'>(É trabalho duro; no entanto, é necessário.)</small>", 
                    audio: "TTS: It is hard work; however, it is necessary.", 
                    arrow: "↘" 
                }
            ]
        },

        // ======================================================
        // STEP 5: LISTENING - CORRECTED CHAPTER 8
        // ======================================================
        {
            title: "Are you following me?",
            drills: [
                // Drill 1: Typing (TTS) - Albert talking about new habits
                {
                    type: "typing",
                    instruction: "Listen to Albert talking about his new habits. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre seus novos hábitos. Digite as palavras que faltam.)</small>",
                    audio: "TTS: I want to help the planet, so I made some changes. I stopped using plastic straws. I also suggest taking the bus instead of the car. It is a small change; however, it makes a difference.",
                    text: "I want [to help] the planet, so I made some changes. I stopped [using] plastic straws. I also suggest [taking] the bus instead of the car. It is a small change; [however], it makes a difference."
                },
                // Drill 2: Listen and Complete (Dropdown) - CORRECTED VERSION (Celine & Dad)
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue and choose the correct option.<br><small style='color:#0077b6'>(Ouça o diálogo e escolha a opção correta.)</small>",
                    audio: "audio/9-4-8/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Celine: Dad, we need to water the plants. <br> Dad: I know, but we must avoid [wasting | to waste | waste] water.", 
                            a: "wasting" 
                        },
                        { 
                            q: "Celine: I agree. I plan [to collect | collecting | collect] rainwater in a bucket.", 
                            a: "to collect" 
                        },
                        { 
                            q: "Dad: That's a great idea. [Therefore | Although | But], we can save money on the bill too.", 
                            a: "Therefore" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the sentence and choose the correct meaning.<br><small style='color:#0077b6'>(Ouça a frase e escolha o significado correto.)</small>",
                    audio: "TTS: I stopped to look at the beautiful tree.",
                    options: [
                        { t: "I stopped walking because I wanted to look at the tree.", c: true },
                        { t: "I don't look at the tree anymore.", c: false },
                        { t: "I dislike the tree.", c: false },
                        { t: "I am looking for the tree.", c: false }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 6: READING - ACTUAL CHAPTER 8
        // ======================================================
        {
            title: "Get the story",
            texts: [
                {
                    title: "Narration: The Beach Cleanup",
                    audio: "TTS: Last Saturday, the students decided to organize a beach cleanup. They expected to find some trash, but they were shocked by the amount of plastic. They found bottles, bags, and even old tires. They worked all morning. It was hot and tiring; however, they didn't stop working. They managed to fill fifty bags with garbage. After they finished cleaning, they stopped to drink some water and look at the clean sand. They promised to return next month to keep the beach beautiful. || audio/9-4-8/p6_text1.mp3",
                    body: "Last Saturday, the students decided to organize a beach cleanup. They expected to find some trash, but they were shocked by the amount of plastic. They found bottles, bags, and even old tires. They worked all morning. It was hot and tiring; however, they didn't stop working. They managed to fill fifty bags with garbage. After they finished cleaning, they stopped to drink some water and look at the clean sand. They promised to return next month to keep the beach beautiful.",
                    questions: [
                        { 
                            q: "What did the students decide to do?", 
                            options: [ 
                                {t: "To go swimming.", c: false}, 
                                {t: "To organize a beach cleanup.", c: true}, 
                                {t: "To play volleyball.", c: false},
                                {t: "To have a picnic.", c: false}
                            ] 
                        },
                        { 
                            q: "How did they feel about the work?", 
                            options: [ 
                                {t: "It was easy and fun.", c: false}, 
                                {t: "It was hot and tiring.", c: true}, 
                                {t: "It was boring.", c: false},
                                {t: "It was quick.", c: false}
                            ] 
                        },
                        { 
                            q: "What did they do after they finished cleaning?", 
                            options: [ 
                                {t: "They stopped drinking water.", c: false}, 
                                {t: "They stopped to drink water.", c: true}, 
                                {t: "They went home immediately.", c: false},
                                {t: "They collected more tires.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: Community Garden",
                    audio: "audio/9-4-8/p6_text2.mp3",
                    body: "<b>Mrs. Canales:</b> We have an empty space behind the school. I suggest creating a community garden.<br><b>Albert:</b> That sounds amazing! I love gardening. We can plant vegetables and flowers.<br><b>Mrs. Canales:</b> Yes, and we can learn to compost our organic waste there.<br><b>Albert:</b> It will require a lot of effort. Besides, we need tools and seeds.<br><b>Mrs. Canales:</b> I know. Although it is difficult, I believe we can manage to do it. We can ask parents for donations.<br><b>Albert:</b> I agree. If we start planning now, we can plant the seeds in spring.",
                    questions: [
                        { 
                            q: "What does Mrs. Canales suggest?", 
                            options: [ 
                                {t: "Building a gym.", c: false}, 
                                {t: "Creating a community garden.", c: true}, 
                                {t: "Selling the school.", c: false},
                                {t: "Cleaning the classroom.", c: false}
                            ] 
                        },
                        { 
                            q: "What does Albert mention as a challenge?", 
                            options: [ 
                                {t: "They don't like vegetables.", c: false}, 
                                {t: "They need tools and seeds.", c: true}, 
                                {t: "There is no space.", c: false},
                                {t: "The students are lazy.", c: false}
                            ] 
                        },
                        { 
                            q: "What linking word does Mrs. Canales use to show contrast?", 
                            options: [ 
                                {t: "Therefore", c: false}, 
                                {t: "Besides", c: false}, 
                                {t: "Although", c: true},
                                {t: "So", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: The Eco-Friendly House",
                    audio: "TTS: My dream is to live in an eco-friendly house. I want to install solar panels so that I can produce my own energy. I also plan to avoid using air conditioning. Instead, I will design big windows to let the wind in. I enjoy growing my own food, so I will have a big vegetable patch. Living sustainably is important to me; therefore, I will use recycled materials to build the house. It might cost more at first, but it will save money in the long run. || audio/9-4-8/p6_text3.mp3",
                    body: "My dream is to live in an eco-friendly house. I want to install solar panels so that I can produce my own energy. I also plan to avoid using air conditioning. Instead, I will design big windows to let the wind in. I enjoy growing my own food, so I will have a big vegetable patch. Living sustainably is important to me; therefore, I will use recycled materials to build the house. It might cost more at first, but it will save money in the long run.",
                    questions: [
                        { 
                            q: "Why does the writer want solar panels?", 
                            options: [ 
                                {t: "To look cool.", c: false}, 
                                {t: "To produce their own energy.", c: true}, 
                                {t: "To heat the swimming pool.", c: false},
                                {t: "To block the sun.", c: false}
                            ] 
                        },
                        { 
                            q: "What does the writer enjoy doing?", 
                            options: [ 
                                {t: "Growing their own food.", c: true}, 
                                {t: "Using air conditioning.", c: false}, 
                                {t: "Wasting water.", c: false},
                                {t: "Driving cars.", c: false}
                            ] 
                        },
                        { 
                            q: "Why will the writer use recycled materials?", 
                            options: [ 
                                {t: "Because they are expensive.", c: false}, 
                                {t: "Because living sustainably is important to them.", c: true}, 
                                {t: "Because they are new.", c: false},
                                {t: "Because they are heavy.", c: false}
                            ] 
                        }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 7: QUICK DRILLS (Mixed Types) - ACTUAL CHAPTER 8
        // ======================================================
        {
            title: "Monkey see, Monkey do",
            drills: [
                // Drill 1: Matching (Idioms & Vocab)
                {
                    type: "matching",
                    instruction: "Match the idiom or word to its definition.<br><small style='color:#0077b6'>(Combine o idioma ou palavra com sua definição.)</small>",
                    pairs: [
                        { left: "A drop in the ocean", right: "A very small part of a big problem", val: "1" },
                        { left: "To go green", right: "To adopt an eco-friendly lifestyle", val: "2" },
                        { left: "Renewable energy", right: "Power from sources like sun and wind", val: "3" },
                        { left: "Deforestation", right: "Cutting down trees in a large area", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Verb Patterns & Linking Words)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>",
                    sentence: "to / promised / help / She / .",
                    correct: "She promised to help ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "playing / stopped / He / games / video / .",
                    correct: "He stopped playing video games ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "hard / worked / ; / therefore / succeeded / they / .",
                    correct: "They worked hard ; therefore they succeeded ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "rain / shine / or / Come / .",
                    correct: "Come rain or shine ."
                },
                // Drill 3: Odd One Out (Grammar Categories)
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Want", c: false },
                        { t: "Decide", c: false },
                        { t: "Plan", c: false },
                        { t: "Enjoy", c: true } // Gerund vs Infinitive
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Avoid", c: false },
                        { t: "Finish", c: false },
                        { t: "Suggest", c: false },
                        { t: "Hope", c: true } // Infinitive vs Gerund
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Moreover", c: false },
                        { t: "Besides", c: false },
                        { t: "Furthermore", c: false },
                        { t: "But", c: true } // Contrast vs Addition
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "So", c: false },
                        { t: "Therefore", c: false },
                        { t: "As a result", c: false },
                        { t: "Although", c: true } // Contrast vs Result
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Select the correct verb form or linking word.<br><small style='color:#0077b6'>(Selecione a forma verbal ou conectivo correto.)</small>",
                    questions: [
                        { q: "We need [to protect | protecting | protect] the forests.", a: "to protect" },
                        { q: "He admits [recycling | to recycle | recycle] is difficult sometimes.", a: "recycling" },
                        { q: "I like this car; [however | so | and], it uses too much gas.", a: "however" },
                        { q: "It was sunny, [so | but | although] we went for a walk.", a: "so" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Topic: My Green Promise. Now it's your turn! Write 3-4 sentences about what you want to do to help the environment. <br><br><small><span style='color:#0077b6'>(Tópico: Minha Promessa Verde. Agora é a sua vez! Escreva de 3 a 4 frases sobre o que você quer fazer para ajudar o meio ambiente.)</span></small>",
            example: "\"I have decided to start a recycling club at school. I enjoy helping nature and I want to encourage my friends. However, it might be difficult to get everyone involved at first.\" <br><br><small><span style='color:#0077b6'>(\"Eu decidi começar um clube de reciclagem na escola. Eu gosto de ajudar a natureza e quero incentivar meus amigos. No entanto, pode ser difícil envolver todos no início.\")</span></small>",
            prompts: [
                "Use at least one verb followed by an infinitive (e.g., decide to, plan to). <br><small><span style='color:#0077b6'>(Use pelo menos um verbo seguido de infinitivo.)</span></small>",
                "Use at least one verb followed by a gerund (e.g., enjoy, avoid). <br><small><span style='color:#0077b6'>(Use pelo menos um verbo seguido de gerúndio.)</span></small>",
                "Use one linking word (however, therefore, besides). <br><small><span style='color:#0077b6'>(Use uma palavra de ligação.)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Environment & Solutions)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Environment & Nature ---
                { term: "Environment", definition: "The surroundings or conditions in which a person, animal, or plant lives.", defTrans: "Meio ambiente", example: "We must protect the environment for future generations.", audioFront: "TTS: Environment", audioBack: "TTS: We must protect the environment for future generations." },
                { term: "Sustainable", definition: "Able to be maintained at a certain rate or level.", defTrans: "Sustentável", example: "Solar power is a sustainable energy source.", audioFront: "TTS: Sustainable", audioBack: "TTS: Solar power is a sustainable energy source." },
                { term: "Development", definition: "The process of developing or being developed.", defTrans: "Desenvolvimento", example: "Sustainable development helps people and the planet.", audioFront: "TTS: Development", audioBack: "TTS: Sustainable development helps people and the planet." },
                { term: "Garbage / Trash", definition: "Wasted or spoiled food and other refuse.", defTrans: "Lixo", example: "Please put your garbage in the bin.", audioFront: "TTS: Garbage or Trash", audioBack: "TTS: Please put your garbage in the bin." },
                { term: "Deforestation", definition: "The action of clearing a wide area of trees.", defTrans: "Desmatamento", example: "Deforestation destroys the homes of many animals.", audioFront: "TTS: Deforestation", audioBack: "TTS: Deforestation destroys the homes of many animals." },
                { term: "Pollution", definition: "The presence of substances that have harmful effects on the environment.", defTrans: "Poluição", example: "Air pollution is a big problem in cities.", audioFront: "TTS: Pollution", audioBack: "TTS: Air pollution is a big problem in cities." },
                { term: "Climate Change", definition: "A change in global or regional climate patterns.", defTrans: "Mudança Climática", example: "We need to act now to stop climate change.", audioFront: "TTS: Climate Change", audioBack: "TTS: We need to act now to stop climate change." },
                { term: "Planet", definition: "A celestial body moving in an elliptical orbit around a star.", defTrans: "Planeta", example: "Earth is the only planet we have.", audioFront: "TTS: Planet", audioBack: "TTS: Earth is the only planet we have." },
                { term: "Renewable Energy", definition: "Energy from a source that is not depleted when used.", defTrans: "Energia Renovável", example: "Wind and sun provide renewable energy.", audioFront: "TTS: Renewable Energy", audioBack: "TTS: Wind and sun provide renewable energy." },
                { term: "Carbon footprint", definition: "The amount of carbon dioxide emitted due to your activities.", defTrans: "Pegada de carbono", example: "Walking reduces your carbon footprint.", audioFront: "TTS: Carbon footprint", audioBack: "TTS: Walking reduces your carbon footprint." },

                // --- Actions & Solutions ---
                { term: "To Recycle", definition: "To convert waste into reusable material.", defTrans: "Reciclar", example: "Remember to recycle paper and plastic.", audioFront: "TTS: To Recycle", audioBack: "TTS: Remember to recycle paper and plastic." },
                { term: "To Reduce", definition: "To make smaller or less in amount, degree, or size.", defTrans: "Reduzir", example: "We should reduce the amount of water we waste.", audioFront: "TTS: To Reduce", audioBack: "TTS: We should reduce the amount of water we waste." },
                { term: "To Reuse", definition: "To use again or more than once.", defTrans: "Reutilizar", example: "You can reuse glass jars for storage.", audioFront: "TTS: To Reuse", audioBack: "TTS: You can reuse glass jars for storage." },
                { term: "To Protect", definition: "To keep safe from harm or injury.", defTrans: "Proteger", example: "It is our duty to protect nature.", audioFront: "TTS: To Protect", audioBack: "TTS: It is our duty to protect nature." },
                { term: "To Save", definition: "To avoid wasting something.", defTrans: "Salvar / Economizar", example: "Turn off the lights to save energy.", audioFront: "TTS: To Save", audioBack: "TTS: Turn off the lights to save energy." },
                { term: "To go green", definition: "To adopt an eco-friendly lifestyle.", defTrans: "Adotar um estilo de vida ecológico", example: "My family decided to go green.", audioFront: "TTS: To go green", audioBack: "TTS: My family decided to go green." },
                { term: "To take action", definition: "To do something to achieve an aim or deal with a problem.", defTrans: "Agir / Tomar uma atitude", example: "Politicians need to take action on climate issues.", audioFront: "TTS: To take action", audioBack: "TTS: Politicians need to take action on climate issues." },
                { term: "To raise awareness", definition: "To increase knowledge of a situation or fact among people.", defTrans: "Conscientizar", example: "The campaign aims to raise awareness about recycling.", audioFront: "TTS: To raise awareness", audioBack: "TTS: The campaign aims to raise awareness about recycling." },
                { term: "To sort the trash", definition: "To separate waste into different categories.", defTrans: "Separar o lixo", example: "It takes time to sort the trash, but it's important.", audioFront: "TTS: To sort the trash", audioBack: "TTS: It takes time to sort the trash, but it's important." },
                { term: "To run out of", definition: "To use up the supply of something.", defTrans: "Ficar sem (recursos)", example: "We are running out of clean water.", audioFront: "TTS: To run out of", audioBack: "TTS: We are running out of clean water." },
                // --- Topic 3: Idioms ---
                { term: "A drop in the ocean", definition: "A very small amount compared to the amount needed.", defTrans: "Uma gota no oceano", example: "One donation feels like a drop in the ocean.", audioFront: "TTS: A drop in the ocean", audioBack: "TTS: One donation feels like a drop in the ocean." },
                { term: "The tip of the iceberg", definition: "The small, visible part of a much larger problem.", defTrans: "A ponta do iceberg", example: "This problem is just the tip of the iceberg.", audioFront: "TTS: The tip of the iceberg", audioBack: "TTS: This problem is just the tip of the iceberg." },
                { term: "To be out of the woods", definition: "To be out of danger or difficulty.", defTrans: "Estar fora de perigo", example: "The fire is out, but we are not out of the woods yet.", audioFront: "TTS: To be out of the woods", audioBack: "TTS: The fire is out, but we are not out of the woods yet." },
                { term: "Once in a blue moon", definition: "Very rarely.", defTrans: "Muito raramente", example: "I see a shooting star once in a blue moon.", audioFront: "TTS: Once in a blue moon", audioBack: "TTS: I see a shooting star once in a blue moon." },
                { term: "Come rain or shine", definition: "Whatever happens; no matter the weather.", defTrans: "Faça chuva ou faça sol", example: "We will plant trees, come rain or shine.", audioFront: "TTS: Come rain or shine", audioBack: "TTS: We will plant trees, come rain or shine." },
                { term: "A breath of fresh air", definition: "Someone or something that is new and refreshing.", defTrans: "Um sopro de ar fresco", example: "His idea was a breath of fresh air.", audioFront: "TTS: A breath of fresh air", audioBack: "TTS: His idea was a breath of fresh air." },

                // --- Topic 4: Grammar - Verbs + Infinitive ---
                { term: "Agree (+ to do)", definition: "To have the same opinion about something.", defTrans: "Concordar", example: "She agreed to help us.", audioFront: "TTS: Agree", audioBack: "TTS: She agreed to help us." },
                { term: "Choose (+ to do)", definition: "To pick out or select.", defTrans: "Escolher", example: "I choose to walk to school.", audioFront: "TTS: Choose", audioBack: "TTS: I choose to walk to school." },
                { term: "Decide (+ to do)", definition: "To come to a resolution after consideration.", defTrans: "Decidir", example: "We decided to plant a garden.", audioFront: "TTS: Decide", audioBack: "TTS: We decided to plant a garden." },
                { term: "Expect (+ to do)", definition: "To regard something as likely to happen.", defTrans: "Esperar (expectativa)", example: "Scientists expect to see changes.", audioFront: "TTS: Expect", audioBack: "TTS: Scientists expect to see changes." },
                { term: "Hope (+ to do)", definition: "To want something to happen.", defTrans: "Esperar (esperança)", example: "I hope to save the turtles.", audioFront: "TTS: Hope", audioBack: "TTS: I hope to save the turtles." },
                { term: "Learn (+ to do)", definition: "To gain or acquire knowledge or skill.", defTrans: "Aprender", example: "She learned to recycle correctly.", audioFront: "TTS: Learn", audioBack: "TTS: She learned to recycle correctly." },
                { term: "Manage (+ to do)", definition: "To succeed in doing something difficult.", defTrans: "Conseguir (lidar)", example: "We managed to reduce waste.", audioFront: "TTS: Manage", audioBack: "TTS: We managed to reduce waste." },
                { term: "Need (+ to do)", definition: "To require something essential.", defTrans: "Precisar", example: "You need to save water.", audioFront: "TTS: Need", audioBack: "TTS: You need to save water." },
                { term: "Offer (+ to do)", definition: "To present or proffer something to be accepted.", defTrans: "Oferecer", example: "He offered to help us.", audioFront: "TTS: Offer", audioBack: "TTS: He offered to help us." },
                { term: "Plan (+ to do)", definition: "To decide on and arrange in advance.", defTrans: "Planejar", example: "We plan to use solar energy.", audioFront: "TTS: Plan", audioBack: "TTS: We plan to use solar energy." },
                { term: "Promise (+ to do)", definition: "To assure someone that one will do something.", defTrans: "Prometer", example: "She promised to fix the leak.", audioFront: "TTS: Promise", audioBack: "TTS: She promised to fix the leak." },
                { term: "Refuse (+ to do)", definition: "To indicate that one is not willing to do something.", defTrans: "Recusar", example: "They refuse to use plastic.", audioFront: "TTS: Refuse", audioBack: "TTS: They refuse to use plastic." },
                { term: "Want (+ to do)", definition: "To have a desire to possess or do something.", defTrans: "Querer", example: "I want to protect nature.", audioFront: "TTS: Want", audioBack: "TTS: I want to protect nature." },
                // --- Topic 5: Grammar - Verbs + Gerund (-ing) ---
                { term: "Admit (+ doing)", definition: "To confess to be true or to be the case.", defTrans: "Admitir", example: "He admitted throwing trash.", audioFront: "TTS: Admit", audioBack: "TTS: He admitted throwing trash." },
                { term: "Avoid (+ doing)", definition: "To keep away from or stop oneself from doing something.", defTrans: "Evitar", example: "You should avoid buying plastic.", audioFront: "TTS: Avoid", audioBack: "TTS: You should avoid buying plastic." },
                { term: "Consider (+ doing)", definition: "To think carefully about something before making a decision.", defTrans: "Considerar", example: "Have you considered going vegan?", audioFront: "TTS: Consider", audioBack: "TTS: Have you considered going vegan?" },
                { term: "Deny (+ doing)", definition: "To state that one refuses to admit the truth or existence of.", defTrans: "Negar", example: "They denied polluting the river.", audioFront: "TTS: Deny", audioBack: "TTS: They denied polluting the river." },
                { term: "Discuss (+ doing)", definition: "To talk about something with another person or group.", defTrans: "Discutir", example: "We discussed changing the laws.", audioFront: "TTS: Discuss", audioBack: "TTS: We discussed changing the laws." },
                { term: "Dislike (+ doing)", definition: "To feel distaste for or hostility toward.", defTrans: "Não gostar / desgostar", example: "I dislike seeing litter.", audioFront: "TTS: Dislike", audioBack: "TTS: I dislike seeing litter." },
                { term: "Enjoy (+ doing)", definition: "To take delight or pleasure in an activity.", defTrans: "Gostar / Curtir", example: "She enjoys working in the garden.", audioFront: "TTS: Enjoy", audioBack: "TTS: She enjoys working in the garden." },
                { term: "Finish (+ doing)", definition: "To bring a task or activity to an end.", defTrans: "Terminar", example: "Have you finished sorting the trash?", audioFront: "TTS: Finish", audioBack: "TTS: Have you finished sorting the trash?" },
                { term: "Imagine (+ doing)", definition: "To form a mental image or concept of.", defTrans: "Imaginar", example: "Imagine living in a clean city.", audioFront: "TTS: Imagine", audioBack: "TTS: Imagine living in a clean city." },
                { term: "Keep (+ doing)", definition: "To continue in a specified condition or course.", defTrans: "Continuar / Manter", example: "Please keep trying to help.", audioFront: "TTS: Keep", audioBack: "TTS: Please keep trying to help." },
                { term: "Mind (+ doing)", definition: "To be distressed, annoyed, or worried by.", defTrans: "Importar-se", example: "Do you mind helping me?", audioFront: "TTS: Mind", audioBack: "TTS: Do you mind helping me?" },
                { term: "Miss (+ doing)", definition: "To feel regret or sadness at no longer having something.", defTrans: "Sentir falta", example: "I miss seeing green forests.", audioFront: "TTS: Miss", audioBack: "TTS: I miss seeing green forests." },
                { term: "Practice (+ doing)", definition: "To perform an activity or exercise repeatedly to improve.", defTrans: "Praticar", example: "We practice reusing jars.", audioFront: "TTS: Practice", audioBack: "TTS: We practice reusing jars." },
                { term: "Quit (+ doing)", definition: "To stop or discontinue an action or activity.", defTrans: "Parar / Desistir", example: "He quit smoking.", audioFront: "TTS: Quit", audioBack: "TTS: He quit smoking." },
                { term: "Suggest (+ doing)", definition: "To put forward for consideration.", defTrans: "Sugerir", example: "I suggest taking the bus.", audioFront: "TTS: Suggest", audioBack: "TTS: I suggest taking the bus." },

                // --- Topic 6: Grammar - Meaning Changes ---
                { term: "Stop to do vs. doing", definition: "To pause to do something else VS. to quit an action entirely.", defTrans: "Parar para fazer vs. Parar de fazer", example: "I stopped to drink water / I stopped drinking soda.", audioFront: "TTS: Stop to do versus stop doing", audioBack: "TTS: I stopped to drink water. I stopped drinking soda." },
                { term: "Remember to do vs. doing", definition: "To not forget a task VS. to have a memory of a past action.", defTrans: "Lembrar de fazer vs. Lembrar de ter feito", example: "Remember to turn off the light / I remember turning off the light.", audioFront: "TTS: Remember to do versus remember doing", audioBack: "TTS: Remember to turn off the light. I remember turning off the light." },
                { term: "Forget to do vs. doing", definition: "To fail to do a task VS. to lose the memory of an action.", defTrans: "Esquecer de fazer vs. Esquecer que fez", example: "I forgot to lock the door / I'll never forget visiting the Amazon.", audioFront: "TTS: Forget to do versus forget doing", audioBack: "TTS: I forgot to lock the door. I will never forget visiting the Amazon." },
                { term: "Try to do vs. doing", definition: "To make an effort VS. to experiment with a method.", defTrans: "Tentar fazer vs. Experimentar", example: "I tried to lift the box / Try using vinegar.", audioFront: "TTS: Try to do versus try doing", audioBack: "TTS: I tried to lift the box. Try using vinegar." },

                // --- Topic 7: Linking Words ---
                { term: "Addition Connectors", definition: "Used to connect words or add information (And, Besides, Moreover, Furthermore).", defTrans: "Conectivos de Adição", example: "Besides, it is eco-friendly.", audioFront: "TTS: Addition Connectors", audioBack: "TTS: Besides, it is eco-friendly." },
                { term: "Contrast Connectors", definition: "Used to introduce a phrase contrasting with something else (But, However, Although, Despite).", defTrans: "Conectivos de Contraste", example: "However, we must try.", audioFront: "TTS: Contrast Connectors", audioBack: "TTS: However, we must try." },
                { term: "Result Connectors", definition: "Used to show a result or purpose (So, Therefore, As a result, So that).", defTrans: "Conectivos de Resultado", example: "As a result, the air is cleaner.", audioFront: "TTS: Result Connectors", audioBack: "TTS: As a result, the air is cleaner." }
            ]
        }
    ], // Closes the steps array

    // ======================================================
    // GLOSSARY (Complete & Paginated) - ACTUAL CHAPTER 8
    // ======================================================
    glossary: [
        // PAGE 1: CONTEXT (Step 1 Dialogue Tooltips)
        { topic: "Context", term: "garbage", definition: "Wasted or spoiled food and other refuse; litter.", translation: "Lixo" },
        { topic: "Context", term: "avoid-taking-action", definition: "To stay away from doing something about a situation.", translation: "Evitar tomar atitude" },
        { topic: "Context", term: "refuse", definition: "To indicate that one is not willing to do something.", translation: "Recusar-se" },
        { topic: "Context", term: "decide-to-do", definition: "Verb followed by an infinitive to show a choice.", translation: "Decidir fazer" },
        { topic: "Context", term: "doing-nothing", definition: "The act of remaining passive instead of helping.", translation: "Não fazer nada" },
        { topic: "Context", term: "enjoy-doing", definition: "Verb followed by a gerund to show a preference.", translation: "Gostar de fazer" },
        { topic: "Context", term: "offer-to-do", definition: "To present something to be accepted or rejected.", translation: "Oferecer-se para fazer" },
        { topic: "Context", term: "make-a-difference", definition: "To have a significant effect on a person or situation.", translation: "Fazer a diferença" },
        
        // PAGE 1: ENVIRONMENT & NATURE
        { topic: "Environment", term: "environment", definition: "The surroundings or conditions in which a person, animal, or plant lives.", translation: "meio ambiente" },
        { topic: "Environment", term: "sustainable", definition: "Able to be maintained at a certain rate or level.", translation: "sustentável" },
        { topic: "Environment", term: "development", definition: "The process of developing or being developed.", translation: "desenvolvimento" },
        { topic: "Environment", term: "garbage / trash", definition: "Wasted or spoiled food and other refuse.", translation: "lixo" },
        { topic: "Environment", term: "deforestation", definition: "The action of clearing a wide area of trees.", translation: "desmatamento" },
        { topic: "Environment", term: "pollution", definition: "The presence in or introduction into the environment of harmful substances.", translation: "poluição" },
        { topic: "Environment", term: "climate-change", definition: "A change in global or regional climate patterns.", translation: "mudança climática" },
        { topic: "Environment", term: "renewable-energy", definition: "Energy from a source that is not depleted when used.", translation: "energia renovável" },
        { topic: "Environment", term: "carbon-footprint", definition: "The amount of carbon dioxide emitted due to the consumption of fossil fuels.", translation: "pegada de carbono" },

        // PAGE 2: ACTIONS & SOLUTIONS
        { topic: "Actions", term: "to-recycle", definition: "To convert (waste) into reusable material.", translation: "reciclar" },
        { topic: "Actions", term: "to-reduce", definition: "To make smaller or less in amount, degree, or size.", translation: "reduzir" },
        { topic: "Actions", term: "to-reuse", definition: "To use again or more than once.", translation: "reutilizar" },
        { topic: "Actions", term: "to-protect", definition: "To keep safe from harm or injury.", translation: "proteger" },
        { topic: "Actions", term: "to-save", definition: "To keep safe or rescue from harm; to avoid wasting.", translation: "salvar / economizar" },
        { topic: "Actions", term: "to-go-green", definition: "To pursue knowledge and practices that lead to eco-friendly decisions.", translation: "adotar um estilo de vida ecológico" },
        { topic: "Actions", term: "to-take-action", definition: "To do something to achieve an aim or deal with a problem.", translation: "agir / tomar uma atitude" },
        { topic: "Actions", term: "to-raise-awareness", definition: "To increase knowledge or perception of a situation or fact.", translation: "conscientizar" },
        { topic: "Actions", term: "to-sort-the-trash", definition: "To separate waste into different categories (plastic, paper, etc).", translation: "separar o lixo" },
        { topic: "Actions", term: "to-run-out-of", definition: "To use up the entire supply of something.", translation: "Ficar sem" },

        // PAGE 3: NATURE IDIOMS
        { topic: "Idioms", term: "a-drop-in-the-ocean", definition: "A very small amount compared to the amount needed.", translation: "uma gota no oceano" },
        { topic: "Idioms", term: "the-tip-of-the-iceberg", definition: "The small, visible part of a much larger problem.", translation: "a ponta do iceberg" },
        { topic: "Idioms", term: "to-be-out-of-the-woods", definition: "To be out of danger or difficulty.", translation: "estar fora de perigo" },
        { topic: "Idioms", term: "once-in-a-blue-moon", definition: "Very rarely.", translation: "muito raramente" },
        { topic: "Idioms", term: "come-rain-or-shine", definition: "Whatever happens; regardless of circumstances.", translation: "faça chuva ou faça sol" },
        { topic: "Idioms", term: "a-breath-of-fresh-air", definition: "Someone or something that is new and refreshing.", translation: "um sopro de ar fresco" },
        

        // PAGE 4: VERBS + INFINITIVE
        { topic: "Verb + Inf", term: "agree", definition: "To have the same opinion about something.", translation: "concordar" },
        { topic: "Verb + Inf", term: "decide", definition: "To come to a resolution in the mind as a result of consideration.", translation: "decidir" },
        { topic: "Verb + Inf", term: "expect", definition: "To regard something as likely to happen.", translation: "esperar (expectativa)" },
        { topic: "Verb + Inf", term: "hope", definition: "To want something to happen or be the case.", translation: "esperar (esperança)" },
        { topic: "Verb + Inf", term: "manage", definition: "To succeed in achieving something despite difficulty.", translation: "conseguir (lidar)" },
        { topic: "Verb + Inf", term: "refuse", definition: "To indicate or show that one is not willing to do something.", translation: "recusar-se" },

        // PAGE 5: VERBS + GERUND
        { topic: "Verb + Gerund", term: "admit", definition: "To confess to be true or to be the case.", translation: "admitir" },
        { topic: "Verb + Gerund", term: "avoid", definition: "To keep away from or stop oneself from doing something.", translation: "evitar" },
        { topic: "Verb + Gerund", term: "consider", definition: "To think carefully about something, typically before a decision.", translation: "considerar" },
        { topic: "Verb + Gerund", term: "deny", definition: "To state that one refuses to admit the truth of something.", translation: "negar" },
        { topic: "Verb + Gerund", term: "dislike", definition: "To feel distaste for or hostility toward.", translation: "não gostar" },
        { topic: "Verb + Gerund", term: "enjoy", definition: "To take delight or pleasure in (an activity).", translation: "gostar / curtir" },
        { topic: "Verb + Gerund", term: "suggest", definition: "To put forward for consideration.", translation: "sugerir" },

        // PAGE 6: VERB PATTERN CHANGES
        { topic: "Verb Patterns", term: "stop-to-do", definition: "To pause an action in order to do something else.", translation: "parar para fazer algo" },
        { topic: "Verb Patterns", term: "stop-doing", definition: "To quit an action entirely.", translation: "parar de fazer algo" },
        { topic: "Verb Patterns", term: "remember-to-do", definition: "To not forget to perform a task.", translation: "lembrar de fazer (tarefa)" },
        { topic: "Verb Patterns", term: "remember-doing", definition: "To have a memory of a past action.", translation: "lembrar de ter feito (memória)" },
        { topic: "Verb Patterns", term: "forget-to-do", definition: "To fail to perform a task because of memory.", translation: "esquecer de fazer" },
        { topic: "Verb Patterns", term: "try-to-do", definition: "To make an effort to achieve something difficult.", translation: "tentar (esforço)" },
        { topic: "Verb Patterns", term: "try-doing", definition: "To experiment with a method to see if it works.", translation: "experimentar" },

        // PAGE 7: LINKING WORDS
        { topic: "Linking Words", term: "besides", definition: "Addition: used to add a further point.", translation: "Além disso" },
        { topic: "Linking Words", term: "moreover", definition: "Addition: as a further matter.", translation: "Além do mais" },
        { topic: "Linking Words", term: "although", definition: "Contrast: in spite of the fact that.", translation: "Embora" },
        { topic: "Linking Words", term: "however", definition: "Contrast: in whatever way; nevertheless.", translation: "No entanto" },
        { topic: "Linking Words", term: "therefore", definition: "Result: for that reason; consequently.", translation: "Portanto" },
        { topic: "Linking Words", term: "as-a-result", definition: "Result: showing the consequence of an action.", translation: "Como resultado" },
        { topic: "Linking Words", term: "so-that", definition: "Purpose: used to express an intent or result.", translation: "Para que" }
    ]
});