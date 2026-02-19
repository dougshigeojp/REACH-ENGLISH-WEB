/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "8-2-3",
    grade: "8th Grade",
    bimester: "2",
    chapter: "3",
    chapterTitle: "Our Planet, Our Future!",
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "In this lesson, you will learn to:<br><br>• Talk about environmental problems (pollution, waste).<br>• Discuss solutions like the 3 Rs (Reduce, Reuse, Recycle).<br>• Use \"WILL\" for predictions and promises.<br>• Use \"GOING TO\" for plans and evidence.<br>• Use relative pronouns (who, which, that, whose).",
            welcome: "Hello, Eco-Heroes! It's Mr. D!<br><br>Welcome to \"Our Planet, Our Future!\" Today, we have a very important mission. We are going to learn how to save our planet! We'll talk about problems like pollution and waste, but also about solutions like recycling. We will become grammar experts by using the future tense (Will vs. Going to) to make plans for a better world. Let's take action!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about environmental problems like pollution and waste. Discuss solutions like the 3 Rs: Reduce, Reuse, and Recycle. Use WILL for predictions and promises. Use GOING TO for plans and evidence. And use relative pronouns like who, which, that, and whose.",
                welcome: "TTS: Hello, Eco-Heroes! It's Mr. D! Welcome to Our Planet, Our Future! Today, we have a very important mission. We are going to learn how to save our planet! We'll talk about problems like pollution and waste, but also about solutions like recycling. We will become grammar experts by using the future tense, Will versus Going to, to make plans for a better world. Let's take action!"
            }
        },

        // ======================================================
        // STEP 1: WHAT'S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of birds chirping and rustling leaves, then a plastic bottle crunching sound. Albert and Celine are walking in a park.", 
            contextAudio: "audio/8-2-3/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Look at this park, Albert. There is so much [trash](tooltip:trash)!" 
                },
                { 
                    speaker: "Albert", 
                    text: "It's terrible. People [throw away](tooltip:throw-away) [plastic](tooltip:plastic) bottles everywhere." 
                },
                { 
                    speaker: "Celine", 
                    text: "We need to do something. I [am going to](tooltip:going-to) [organize](tooltip:organize) a [cleanup](tooltip:cleanup) next week." 
                },
                { 
                    speaker: "Albert", 
                    text: "That's a great idea! I [will](tooltip:will) help you." 
                },
                { 
                    speaker: "Celine", 
                    text: "Thanks! We can [recycle](tooltip:recycle) the bottles and [cans](tooltip:bin)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Look at that [bin](tooltip:bin). It is full. [Who](tooltip:who) is [responsible](tooltip:responsible) for this?" 
                },
                { 
                    speaker: "Celine", 
                    text: "The city council. But it is also our responsibility. We will [make a difference](tooltip:make-a-difference)!" 
                }
            ]
        },

        // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
        // ======================================================
        {
            title: "Say the word",
            audio2b: "", // Will be provided in the next part
            subPages: [
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],

            // 2A: Vocabulary Lists (Tabbed)
            areas: [
                {
                    title: "Environmental Problems",
                    audio: "TTS: Environment. Pollution. Climate Change. Global Warming. Waste. Trash. Garbage. Deforestation. Endangered Animals. Danger.",
                    items: [
                        { term: "Environment", trans: "Meio ambiente" },
                        { term: "Pollution", trans: "Poluição" },
                        { term: "Climate Change", trans: "Mudança Climática" },
                        { term: "Global Warming", trans: "Aquecimento Global" },
                        { term: "Waste / Trash / Garbage", trans: "Lixo / Resíduo" },
                        { term: "Deforestation", trans: "Desmatamento" },
                        { term: "Endangered Animals", trans: "Animais em Extinção" },
                        { term: "Danger", trans: "Perigo" }
                    ]
                },
                {
                    title: "Solutions & Actions (Verbs)",
                    audio: "TTS: Reduce. Reuse. Recycle. Protect. Save. Plant. Clean up. Sort. Help. Take action. Throw away.",
                    items: [
                        { term: "Reduce", trans: "Reduzir" },
                        { term: "Reuse", trans: "Reutilizar" },
                        { term: "Recycle", trans: "Reciclar" },
                        { term: "Protect", trans: "Proteger" },
                        { term: "Save", trans: "Salvar / Economizar" },
                        { term: "Plant", trans: "Plantar" },
                        { term: "Clean up", trans: "Limpar" },
                        { term: "Sort", trans: "Separar (o lixo)" },
                        { term: "Help", trans: "Ajudar" },
                        { term: "Take action", trans: "Agir / Tomar atitude" },
                        { term: "Throw away", trans: "Jogar fora" }
                    ]
                },
                {
                    title: "Waste Disposal",
                    audio: "TTS: Waste disposal. Bin. Trash can. Landfill. Recycling center. Organic waste. Recyclable waste. Compost. Plastic.",
                    items: [
                        { term: "Waste disposal", trans: "Descarte de lixo" },
                        { term: "Bin / Trash can", trans: "Lixeira / Lata de lixo" },
                        { term: "Landfill", trans: "Aterro sanitário" },
                        { term: "Recycling center", trans: "Centro de reciclagem" },
                        { term: "Organic waste", trans: "Lixo orgânico" },
                        { term: "Recyclable waste", trans: "Lixo reciclável" },
                        { term: "Compost", trans: "Composto / Adubo" },
                        { term: "Plastic", trans: "Plástico" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: We need to protect. Let's reduce. I will recycle. We are going to plant. What will happen?",
                    items: [
                        { term: "We need to protect...", trans: "Precisamos proteger..." },
                        { term: "Let's reduce...", trans: "Vamos reduzir..." },
                        { term: "I will recycle...", trans: "Eu vou reciclar..." },
                        { term: "We are going to plant...", trans: "Nós vamos plantar..." },
                        { term: "What will happen?", trans: "O que vai acontecer?" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Environmental Problems",
                    audio: "TTS: We must care for the environment. Pollution makes the air dirty. Don't create so much waste. Deforestation hurts animals. Tigers are endangered animals. The forest is in danger.",
                    items: [
                        { term: "Environment", sent: "We must care for the environment.", trans: "<span style='color:#0077b6'>Devemos cuidar do meio ambiente.</span>" },
                        { term: "Pollution", sent: "Pollution makes the air dirty.", trans: "<span style='color:#0077b6'>A poluição deixa o ar sujo.</span>" },
                        { term: "Waste", sent: "Don't create so much waste.", trans: "<span style='color:#0077b6'>Não crie tanto lixo.</span>" },
                        { term: "Deforestation", sent: "Deforestation hurts animals.", trans: "<span style='color:#0077b6'>O desmatamento machuca os animais.</span>" },
                        { term: "Endangered", sent: "Tigers are endangered animals.", trans: "<span style='color:#0077b6'>Tigres são animais em extinção.</span>" },
                        { term: "Danger", sent: "The forest is in danger.", trans: "<span style='color:#0077b6'>A floresta está em perigo.</span>" }
                    ]
                },
                {
                    title: "Solutions & Actions (Verbs)",
                    audio: "TTS: Reduce your water use. Reuse old bags. Please recycle bottles. Protect the forests. Turn off lights to save energy. Let's plant a tree today. Help clean up the beach. Sort your trash correctly. Students must take action now. Don't throw away batteries.",
                    items: [
                        { term: "Reduce", sent: "Reduce your water use.", trans: "<span style='color:#0077b6'>Reduza seu uso de água.</span>" },
                        { term: "Reuse", sent: "Reuse old bags.", trans: "<span style='color:#0077b6'>Reutilize sacolas velhas.</span>" },
                        { term: "Recycle", sent: "Please recycle bottles.", trans: "<span style='color:#0077b6'>Por favor, recicle garrafas.</span>" },
                        { term: "Protect", sent: "Protect the forests.", trans: "<span style='color:#0077b6'>Proteja as florestas.</span>" },
                        { term: "Save", sent: "Turn off the lights to save energy.", trans: "<span style='color:#0077b6'>Desligue as luzes para economizar energia.</span>" },
                        { term: "Plant", sent: "Let's plant a tree today.", trans: "<span style='color:#0077b6'>Vamos plantar uma árvore hoje.</span>" },
                        { term: "Clean up", sent: "Help clean up the beach.", trans: "<span style='color:#0077b6'>Ajude a limpar a praia.</span>" },
                        { term: "Sort", sent: "Sort your trash correctly.", trans: "<span style='color:#0077b6'>Separe seu lixo corretamente.</span>" },
                        { term: "Take action", sent: "Students must take action now.", trans: "<span style='color:#0077b6'>Os estudantes devem agir agora.</span>" },
                        { term: "Throw away", sent: "Don't throw away batteries.", trans: "<span style='color:#0077b6'>Não jogue fora pilhas.</span>" }
                    ]
                },
                {
                    title: "Waste Disposal",
                    audio: "TTS: Put paper in the blue bin. Most trash goes to a landfill. We make compost for the garden. Avoid single-use plastic.",
                    items: [
                        { term: "Bin", sent: "Put paper in the blue bin.", trans: "<span style='color:#0077b6'>Coloque papel na lixeira azul.</span>" },
                        { term: "Landfill", sent: "Most trash goes to a landfill.", trans: "<span style='color:#0077b6'>A maioria do lixo vai para um aterro sanitário.</span>" },
                        { term: "Compost", sent: "We make compost for the garden.", trans: "<span style='color:#0077b6'>Nós fazemos adubo para o jardim.</span>" },
                        { term: "Plastic", sent: "Avoid single-use plastic.", trans: "<span style='color:#0077b6'>Evite plástico de uso único.</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: We need to protect the ocean. Let's reduce plastic. I will recycle this can. We are going to plant a tree. What will happen if we don't act?",
                    items: [
                        { term: "We need to protect", sent: "We need to protect the ocean.", trans: "<span style='color:#0077b6'>Precisamos proteger o oceano.</span>" },
                        { term: "Let's reduce", sent: "Let's reduce plastic.", trans: "<span style='color:#0077b6'>Vamos reduzir o plástico.</span>" },
                        { term: "I will recycle", sent: "I will recycle this can.", trans: "<span style='color:#0077b6'>Vou reciclar esta lata.</span>" },
                        { term: "We are going to plant", sent: "We are going to plant a tree.", trans: "<span style='color:#0077b6'>Nós vamos plantar uma árvore.</span>" },
                        { term: "What will happen?", sent: "What will happen if we don't act?", trans: "<span style='color:#0077b6'>O que vai acontecer se não agirmos?</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills
            drills: [
                {
                    type: "mcq",
                    q: "Choose the correct translation for 'To reduce':",
                    options: [
                        {t: "Reciclar", c: false},
                        {t: "Reduzir", c: true},
                        {t: "Reutilizar", c: false},
                        {t: "Jogar fora", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Don't _______ trash in the river.",
                    options: [
                        {t: "save", c: false},
                        {t: "throw away", c: true},
                        {t: "plant", c: false},
                        {t: "protect", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Where do we put recyclable items?",
                    options: [
                        {t: "Landfill", c: false},
                        {t: "Recycling bin", c: true},
                        {t: "Compost", c: false},
                        {t: "Ocean", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ is a big problem for the air in large cities.",
                    options: [
                        {t: "Planting", c: false},
                        {t: "Pollution", c: true},
                        {t: "Recycling", c: false},
                        {t: "Water", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We should _______ the lights to save energy.",
                    options: [
                        {t: "turn on", c: false},
                        {t: "turn off", c: true},
                        {t: "open", c: false},
                        {t: "close", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "To use something again instead of throwing it away is to...",
                    options: [
                        {t: "Recycle", c: false},
                        {t: "Reduce", c: false},
                        {t: "Reuse", c: true},
                        {t: "Refuse", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Soda cans and water bottles are often made of _______.",
                    options: [
                        {t: "Plastic", c: true},
                        {t: "Air", c: false},
                        {t: "Water", c: false},
                        {t: "Soil", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete the sentence: 'We _______ going to help the planet.'",
                    options: [
                        {t: "is", c: false},
                        {t: "are", c: true},
                        {t: "will", c: false},
                        {t: "can", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Please _______ the trash into different categories (paper, glass, etc.).",
                    options: [
                        {t: "mix", c: false},
                        {t: "sort", c: true},
                        {t: "pollute", c: false},
                        {t: "waste", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Animals that are at risk of disappearing are _______ animals.",
                    options: [
                        {t: "dangerous", c: false},
                        {t: "endangered", c: true},
                        {t: "polluted", c: false},
                        {t: "clean", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A place where trash is buried in the ground is a...",
                    options: [
                        {t: "Garden", c: false},
                        {t: "Recycling center", c: false},
                        {t: "Landfill", c: true},
                        {t: "Bin", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Cutting down too many trees in a forest is called...",
                    options: [
                        {t: "Planting", c: false},
                        {t: "Deforestation", c: true},
                        {t: "Waste disposal", c: false},
                        {t: "Reuse", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The _______ warming is causing the ice to melt.",
                    options: [
                        {t: "World", c: false},
                        {t: "Global", c: true},
                        {t: "Circle", c: false},
                        {t: "Trash", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The natural world around us is the _______.",
                    options: [
                        {t: "Deforestation", c: false},
                        {t: "Pollution", c: false},
                        {t: "Environment", c: true},
                        {t: "Compost", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Turning waste material like glass or paper into new products is to...",
                    options: [
                        {t: "Recycle", c: true},
                        {t: "Throw away", c: false},
                        {t: "Waste", c: false},
                        {t: "Eat", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Banana peels and apple cores are examples of _______ waste.",
                    options: [
                        {t: "Plastic", c: false},
                        {t: "Glass", c: false},
                        {t: "Organic", c: true},
                        {t: "Chemical", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We must _______ the forests and the animals living there.",
                    options: [
                        {t: "Protect", c: true},
                        {t: "Sort", c: false},
                        {t: "Waste", c: false},
                        {t: "Hurt", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The process of getting rid of trash is called waste _______.",
                    options: [
                        {t: "disposal", c: true},
                        {t: "creation", c: false},
                        {t: "danger", c: false},
                        {t: "pollution", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Let's _______ the beach by picking up all the plastic bottles.",
                    options: [
                        {t: "plant", c: false},
                        {t: "clean up", c: true},
                        {t: "pollute", c: false},
                        {t: "throw", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "You can make _______ for your garden using organic waste.",
                    options: [
                        {t: "trash", c: false},
                        {t: "plastic", c: false},
                        {t: "compost", c: true},
                        {t: "smoke", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We must _______ water by taking shorter showers.",
                    options: [
                        {t: "waste", c: false},
                        {t: "throw away", c: false},
                        {t: "save", c: true},
                        {t: "mix", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I'm going to _______ a tree in my backyard today.",
                    options: [
                        {t: "recycle", c: false},
                        {t: "reuse", c: false},
                        {t: "plant", c: true},
                        {t: "throw", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "If we all help, we can _______ a difference in the world.",
                    options: [
                        {t: "do", c: false},
                        {t: "be", c: false},
                        {t: "make", c: true},
                        {t: "give", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Pollution and climate change put our planet in _______.",
                    options: [
                        {t: "danger", c: true},
                        {t: "recycle", c: false},
                        {t: "safety", c: false},
                        {t: "compost", c: false}
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
                    title: "Future with WILL",
                    audio: "TTS: We use WILL to talk about the future when we make predictions, spontaneous decisions, or promises. Structure: Subject plus will plus base verb. For example: I will help you. It will rain. Negative: will not becomes won't.",
                    explanation: "We use <b>WILL</b> to talk about the future when we make predictions (often with 'I think'), spontaneous decisions (made at the moment), or promises.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos WILL para falar do futuro quando fazemos previsões (frequentemente com 'I think'), decisões espontâneas (feitas no momento) ou promessas.)</span><br><br><b>Structure:</b> Subject + will + base verb.",
                    samples: [
                        { en: "I will help you. (Promise)", pt: "<span style='color:#0077b6'>Eu vou te ajudar. (Promessa)</span>" },
                        { en: "You will see. (Prediction)", pt: "<span style='color:#0077b6'>Você vai ver. (Previsão)</span>" },
                        { en: "He will recycle.", pt: "<span style='color:#0077b6'>Ele vai reciclar.</span>" },
                        { en: "It will rain. (Prediction)", pt: "<span style='color:#0077b6'>Vai chover. (Previsão)</span>" },
                        { en: "We will clean it. (Spontaneous)", pt: "<span style='color:#0077b6'>Nós vamos limpar isso. (Decisão espontânea)</span>" },
                        { en: "They will arrive soon.", pt: "<span style='color:#0077b6'>Eles chegarão em breve.</span>" }
                    ]
                },
                {
                    title: "Future with GOING TO",
                    audio: "TTS: We use BE GOING TO to talk about plans and intentions decided before speaking, or predictions based on evidence that we can see. Structure: Subject plus am, is, or are plus going to plus base verb. For example: I am going to plant a tree.",
                    explanation: "We use <b>BE GOING TO</b> to talk about plans/intentions (decided before speaking) or predictions based on evidence (we can see it coming).<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos BE GOING TO para falar de planos/intenções (decididos antes de falar) ou previsões baseadas em evidências (podemos ver acontecendo).)</span><br><br><b>Structure:</b> Subject + am/is/are + going to + base verb.",
                    samples: [
                        { en: "I am going to plant a tree. (Plan)", pt: "<span style='color:#0077b6'>Eu vou plantar uma árvore. (Plano)</span>" },
                        { en: "You are going to drop that. (Evidence)", pt: "<span style='color:#0077b6'>Você vai derrubar isso. (Evidência)</span>" },
                        { en: "He is going to reuse it.", pt: "<span style='color:#0077b6'>Ele vai reutilizar isso.</span>" },
                        { en: "She is going to sort the trash.", pt: "<span style='color:#0077b6'>Ela vai separar o lixo.</span>" },
                        { en: "We are going to save water.", pt: "<span style='color:#0077b6'>Nós vamos economizar água.</span>" },
                        { en: "They are going to visit the park.", pt: "<span style='color:#0077b6'>Eles vão visitar o parque.</span>" }
                    ]
                },
                {
                    title: "WILL vs. GOING TO",
                    audio: "TTS: Compare the usage. Decisions. Will is for decisions made now. I'll do it now. Going to is for plans made before. I am going to do it tomorrow. Predictions. Will is for opinions. I think it will rain. Going to is for evidence. Look at the clouds, it is going to rain.",
                    explanation: "<b>Decision:</b> Use WILL for decisions made now. Use GOING TO for plans already made.<br><b>Prediction:</b> Use WILL for personal opinions. Use GOING TO when there is clear evidence.<br><br><span style='color:#0077b6; font-style:italic;'>(Decisão: Use WILL para decisões tomadas agora. Use GOING TO para planos já feitos. Previsão: Use WILL para opiniões pessoais. Use GOING TO quando houver evidência clara.)</span>",
                    samples: [
                        { en: "I'll do it now! (Sudden decision)", pt: "<span style='color:#0077b6'>Vou fazer agora! (Decidi agora)</span>" },
                        { en: "I'm going to do it tomorrow. (Planned)", pt: "<span style='color:#0077b6'>Vou fazer amanhã. (Já planejei)</span>" },
                        { en: "I think it will rain later. (Opinion)", pt: "<span style='color:#0077b6'>Acho que vai chover mais tarde. (Opinião)</span>" },
                        { en: "Look at the clouds! It is going to rain. (Evidence)", pt: "<span style='color:#0077b6'>Olhe as nuvens! Vai chover. (Evidência)</span>" }
                    ]
                },
                {
                    title: "Relative Pronouns",
                    audio: "TTS: We use relative pronouns to give more information about a noun. Who is for people. Which is for things or animals. That can replace who or which in informal contexts. Whose shows possession.",
                    explanation: "We use relative pronouns to give more information about a noun without starting a new sentence.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos pronomes relativos para dar mais informações sobre um substantivo sem começar uma nova frase.)</span>",
                    samples: [
                        { en: "WHO: The student who recycles is cool.", pt: "<span style='color:#0077b6'>O aluno que recicla é legal. (Pessoas)</span>" },
                        { en: "WHICH: The bag which I bought is reusable.", pt: "<span style='color:#0077b6'>A sacola que eu comprei é reutilizável. (Coisas/Animais)</span>" },
                        { en: "THAT: The tree that we planted grew.", pt: "<span style='color:#0077b6'>A árvore que plantamos cresceu. (Informal)</span>" },
                        { en: "WHOSE: The man whose car is electric is my neighbor.", pt: "<span style='color:#0077b6'>O homem cujo carro é elétrico é meu vizinho. (Posse)</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Plans vs. Spontaneous Decisions",
                    audio: "audio/8-2-3/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "What are your plans for the weekend?", 
                            pt: "<span style='color:#0077b6'>Quais são os seus planos para o fim de semana?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I am going to volunteer at the recycling center.", 
                            pt: "<span style='color:#0077b6'>Eu vou ser voluntário no centro de reciclagem. (Plano)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "That sounds hard. I will come with you and help!", 
                            pt: "<span style='color:#0077b6'>Isso parece difícil. Eu vou com você e ajudo! (Decisão espontânea)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Predictions (Evidence vs. Opinion)",
                    audio: "audio/8-2-3/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Look at all that smoke. The air quality is going to be bad today.", 
                            pt: "<span style='color:#0077b6'>Olhe toda aquela fumaça. A qualidade do ar vai ficar ruim hoje. (Evidência)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Yes. I think the government will create stricter laws soon.", 
                            pt: "<span style='color:#0077b6'>Sim. Eu acho que o governo criará leis mais rígidas em breve. (Opinião)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Using Relative Pronouns",
                    audio: "audio/8-2-3/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Who is that woman?", 
                            pt: "<span style='color:#0077b6'>Quem é aquela mulher?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "She is the scientist who discovered a new way to clean the ocean.", 
                            pt: "<span style='color:#0077b6'>Ela é a cientista que descobriu uma nova maneira de limpar o oceano.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Is she the one whose invention won a prize?", 
                            pt: "<span style='color:#0077b6'>É ela cuja invenção ganhou um prêmio?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes! It is a machine which collects plastic from the water.", 
                            pt: "<span style='color:#0077b6'>Sim! É uma máquina que coleta plástico da água.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice Drills
            grammarDrills: [
                {
                    type: "mcq",
                    q: "\"I forgot my wallet.\" \"Don't worry, I _______ pay for the tickets.\"",
                    options: [
                        {t: "am going to", c: false},
                        {t: "will", c: true},
                        {t: "go", c: false},
                        {t: "am", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"We made a plan. We _______ plant a garden on Sunday.\"",
                    options: [
                        {t: "will", c: false},
                        {t: "are going to", c: true},
                        {t: "going to", c: false},
                        {t: "is going to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The boy _______ picked up the trash is my friend.",
                    options: [
                        {t: "which", c: false},
                        {t: "who", c: true},
                        {t: "whose", c: false},
                        {t: "where", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The bottle _______ is on the floor is plastic.",
                    options: [
                        {t: "who", c: false},
                        {t: "whose", c: false},
                        {t: "which", c: true},
                        {t: "where", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The activist _______ speech was on TV is famous.",
                    options: [
                        {t: "who", c: false},
                        {t: "that", c: false},
                        {t: "whose", c: true},
                        {t: "which", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Look at the sun! It _______ (be) a beautiful day.",
                    options: [
                        {t: "is going to be", c: true},
                        {t: "will be", c: false},
                        {t: "is being", c: false},
                        {t: "be", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "They _______ help us clean the park later.",
                    options: [
                        {t: "will", c: true},
                        {t: "going to", c: false},
                        {t: "am going to", c: false},
                        {t: "is will", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The animals _______ live in the forest are in danger.",
                    options: [
                        {t: "who", c: false},
                        {t: "that", c: true},
                        {t: "whose", c: false},
                        {t: "where", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I _______ always protect the environment. I promise!",
                    options: [
                        {t: "am going to", c: false},
                        {t: "will", c: true},
                        {t: "going to", c: false},
                        {t: "was going to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I think it _______ rain later today because the sky is dark.",
                    options: [
                        {t: "will", c: true},
                        {t: "going to", c: false},
                        {t: "is will", c: false},
                        {t: "am going to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"There is no milk!\" \"Oh, I _______ go to the store and buy some.\"",
                    options: [
                        {t: "am going to", c: false},
                        {t: "will", c: true},
                        {t: "go", c: false},
                        {t: "going to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Next week, she _______ volunteer at the animal shelter.",
                    options: [
                        {t: "will", c: false},
                        {t: "is going to", c: true},
                        {t: "going to", c: false},
                        {t: "am going to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Watch out! You _______ trip over that trash on the floor.",
                    options: [
                        {t: "will", c: false},
                        {t: "are going to", c: true},
                        {t: "going to", c: false},
                        {t: "is going to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The neighbor _______ lives next door helps with the garden.",
                    options: [
                        {t: "which", c: false},
                        {t: "who", c: true},
                        {t: "whose", c: false},
                        {t: "where", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "This is the yellow bin _______ is used for metal items.",
                    options: [
                        {t: "who", c: false},
                        {t: "whose", c: false},
                        {t: "which", c: true},
                        {t: "where", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The girl _______ mother is a scientist loves nature.",
                    options: [
                        {t: "who", c: false},
                        {t: "that", c: false},
                        {t: "whose", c: true},
                        {t: "which", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I found a book _______ explains climate change perfectly.",
                    options: [
                        {t: "who", c: false},
                        {t: "that", c: true},
                        {t: "whose", c: false},
                        {t: "where", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The students _______ cleaned the beach were very tired.",
                    options: [
                        {t: "which", c: false},
                        {t: "who", c: true},
                        {t: "whose", c: false},
                        {t: "where", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The planet _______ we live on needs our protection.",
                    options: [
                        {t: "who", c: false},
                        {t: "whose", c: false},
                        {t: "which", c: true},
                        {t: "where", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Experts believe that we _______ find solutions for pollution soon.",
                    options: [
                        {t: "are going to", c: false},
                        {t: "will", c: true},
                        {t: "going to", c: false},
                        {t: "is will", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We _______ have a meeting about the park cleanup at 5 PM tomorrow.",
                    options: [
                        {t: "will", c: false},
                        {t: "are going to", c: true},
                        {t: "going to", c: false},
                        {t: "am", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The forest _______ was destroyed is being replanted now.",
                    options: [
                        {t: "who", c: false},
                        {t: "whose", c: false},
                        {t: "which", c: true},
                        {t: "where", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "He is the hero _______ actions saved many birds.",
                    options: [
                        {t: "who", c: false},
                        {t: "that", c: false},
                        {t: "whose", c: true},
                        {t: "which", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Climate change _______ affect everyone in the future.",
                    options: [
                        {t: "will", c: true},
                        {t: "is go to", c: false},
                        {t: "going to", c: false},
                        {t: "am going to", c: false}
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
                    text: "We are going to clean the park.<br><small style='color:#0077b6'>(Nós vamos limpar o parque.)</small>", 
                    audio: "TTS: We are going to clean the park.", 
                    arrow: "↘" 
                },
                { 
                    text: "I will help you sort the trash.<br><small style='color:#0077b6'>(Eu vou te ajudar a separar o lixo.)</small>", 
                    audio: "TTS: I will help you sort the trash.", 
                    arrow: "↘" 
                },
                { 
                    text: "This is the bin which is for glass.<br><small style='color:#0077b6'>(Esta é a lixeira que é para vidro.)</small>", 
                    audio: "TTS: This is the bin which is for glass.", 
                    arrow: "↘" 
                },
                { 
                    text: "She is the student who organized the event.<br><small style='color:#0077b6'>(Ela é a aluna que organizou o evento.)</small>", 
                    audio: "TTS: She is the student who organized the event.", 
                    arrow: "↘" 
                },
                { 
                    text: "Look at the pollution! It is going to damage the river.<br><small style='color:#0077b6'>(Olhe a poluição! Vai danificar o rio.)</small>", 
                    audio: "TTS: Look at the pollution! It is going to damage the river.", 
                    arrow: "↘" 
                },
                { 
                    text: "Maybe people will recycle more in the future.<br><small style='color:#0077b6'>(Talvez as pessoas reciclem mais no futuro.)</small>", 
                    audio: "TTS: Maybe people will recycle more in the future.", 
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
                // Drill 1: Typing (TTS)
                {
                    type: "typing",
                    instruction: "Listen to Albert talking about his weekend plans. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre seus planos para o fim de semana. Digite as palavras que faltam.)</small>",
                    audio: "TTS: Next Saturday, I am going to volunteer at the beach. We are going to collect plastic bottles. I think it will be hard work, but important.",
                    text: "Next Saturday, I am [going to] volunteer at the beach. We are going to [collect] plastic bottles. I think it [will] be hard work, but important."
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation about the weather. Choose the correct option.<br><small style='color:#0077b6'>(Ouça a conversa sobre o tempo. Escolha a opção correta.)</small>",
                    audio: "audio/8-2-3/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: Look at those grey [clouds | birds], Albert.", a: "clouds" },
                        { q: "Albert: Oh no. It is [going to | will] rain soon.", a: "going to" },
                        { q: "Celine: Don't worry. I [will | am going to] lend you my umbrella.", a: "will" }
                    ]
                },
                // Drill 3: Audio Choice (MP3)
                {
                    type: "audio-choice",
                    instruction: "Listen to the description and choose the correct person.<br><small style='color:#0077b6'>(Ouça a descrição e escolha a pessoa correta.)</small>",
                    audio: "audio/8-2-3/step5_drill3.mp3",
                    options: [
                        { t: "A scientist in a lab.", c: false },
                        { t: "A person throwing trash.", c: false },
                        { t: "A girl speaking at a microphone.", c: true },
                        { t: "A boy playing soccer.", c: false }
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
                    title: "Narration: The School Garden Project",
                    audio: "TTS: The School Garden Project. Last month, our class decided to make a change. We are going to build a school garden. First, we talked to the principal, who gave us permission. Next week, we are going to plant vegetables and flowers. We think this project will help the environment. The student whose idea it was, Sarah, is very excited. She believes we will learn a lot about nature. || audio/8-2-3/p6_text1.mp3",
                    body: "Last month, our class decided to make a change. We are going to build a school garden. First, we talked to the principal, who gave us permission. Next week, we are going to plant vegetables and flowers. We think this project will help the environment. The student whose idea it was, Sarah, is very excited. She believes we will learn a lot about nature.",
                    questions: [
                        { 
                            q: "What are they going to build?", 
                            options: [ 
                                {t: "A recycling center", c: false}, 
                                {t: "A school garden", c: true}, 
                                {t: "A new classroom", c: false},
                                {t: "A playground", c: false}
                            ] 
                        },
                        { 
                            q: "Who is Sarah?", 
                            options: [ 
                                {t: "The principal", c: false}, 
                                {t: "The teacher", c: false}, 
                                {t: "The student whose idea it was", c: true},
                                {t: "A gardener", c: false}
                            ] 
                        },
                        { 
                            q: "What do they think will happen?", 
                            options: [ 
                                {t: "They will waste time.", c: false}, 
                                {t: "It will rain.", c: false}, 
                                {t: "They will learn about nature.", c: true},
                                {t: "They are going to stop.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: Choosing the Right Bin",
                    audio: "audio/8-2-3/p6_text2.mp3",
                    body: "<b>Albert:</b> I finished my soda. Where do I put the can?<br><b>Celine:</b> Don't throw it in the trash! That is waste.<br><b>Albert:</b> So, which bin do I use?<br><b>Celine:</b> Use the yellow bin. It is the one which is for metal.<br><b>Albert:</b> Okay. And what about this paper?<br><b>Celine:</b> That goes in the blue bin. We are going to recycle everything today!<br><b>Albert:</b> Great. I hope everyone will do the same.",
                    questions: [
                        { 
                            q: "What does Albert want to throw away?", 
                            options: [ 
                                {t: "A soda can", c: true}, 
                                {t: "A plastic bottle", c: false}, 
                                {t: "An apple core", c: false},
                                {t: "Glass", c: false}
                            ] 
                        },
                        { 
                            q: "Which bin is for metal?", 
                            options: [ 
                                {t: "The blue one", c: false}, 
                                {t: "The green one", c: false}, 
                                {t: "The yellow one", c: true},
                                {t: "The red one", c: false}
                            ] 
                        },
                        { 
                            q: "What does Albert hope?", 
                            options: [ 
                                {t: "That the bins are full.", c: false}, 
                                {t: "That everyone will recycle.", c: true}, 
                                {t: "That he can go home.", c: false},
                                {t: "That Celine will help him.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: The Great Pacific Garbage Patch",
                    audio: "TTS: The Great Pacific Garbage Patch. There is a place in the ocean which is very sad to see. It is called the Great Pacific Garbage Patch. It is a huge area where plastic trash collects. The water currents bring the waste there. It is dangerous for animals that live in the sea. They eat the plastic or get stuck in it. Scientists are working on solutions. They are going to use new technology to clean it up, but it will take a long time. || audio/8-2-3/p6_text3.mp3",
                    body: "There is a place in the ocean which is very sad to see. It is called the Great Pacific Garbage Patch. It is a huge area where plastic trash collects. The water currents bring the waste there. It is dangerous for animals that live in the sea. They eat the plastic or get stuck in it. Scientists are working on solutions. They are going to use new technology to clean it up, but it will take a long time.",
                    questions: [
                        { 
                            q: "What is the Great Pacific Garbage Patch?", 
                            options: [ 
                                {t: "A beautiful island", c: false}, 
                                {t: "A huge area of plastic trash", c: true}, 
                                {t: "A recycling center", c: false},
                                {t: "A clean ocean", c: false}
                            ] 
                        },
                        { 
                            q: "Who is in danger?", 
                            options: [ 
                                {t: "Scientists", c: false}, 
                                {t: "Animals that live in the sea", c: true}, 
                                {t: "People on boats", c: false},
                                {t: "The water currents", c: false}
                            ] 
                        },
                        { 
                            q: "What are scientists going to do?", 
                            options: [ 
                                {t: "Leave it there.", c: false}, 
                                {t: "Use new technology to clean it.", c: true}, 
                                {t: "Make more plastic.", c: false},
                                {t: "Stop the water currents.", c: false}
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
                // Drill 1: Matching the Meanings (3 Rs)
                {
                    type: "matching",
                    instruction: "Match the action with its definition.<br><small style='color:#0077b6'>(Combine a ação com sua definição.)</small>",
                    pairs: [
                        { left: "Reduce", right: "Use less of something", val: "1" },
                        { left: "Reuse", right: "Use something again", val: "2" },
                        { left: "Recycle", right: "Turn waste into new material", val: "3" },
                        { left: "Pollute", right: "Make dirty or harmful", val: "4" }
                    ]
                },
                // Drill 2: Unscramble the Sentences
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "going / to / plant / I / am / tree / a / .",
                    correct: "I am going to plant a tree ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "will / help / environment / We / the / .",
                    correct: "We will help the environment ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "is / the / This / boy / who / helped / .",
                    correct: "This is the boy who helped ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "bin / Which / for / is / plastic / ?",
                    correct: "Which bin is for plastic ?"
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Plastic", c: false },
                        { t: "Paper", c: false },
                        { t: "Glass", c: false },
                        { t: "Pizza", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Will", c: false },
                        { t: "Going to", c: false },
                        { t: "Yesterday", c: true },
                        { t: "Next week", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Who", c: false },
                        { t: "Which", c: false },
                        { t: "What", c: true },
                        { t: "That", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Save", c: false },
                        { t: "Protect", c: false },
                        { t: "Help", c: false },
                        { t: "Pollute", c: true }
                    ]
                },
                // Drill 4: Fill in the Blanks (Relative Pronouns)
                {
                    type: "dropdown",
                    instruction: "Drag and drop the correct relative pronoun to complete the sentence.<br><small style='color:#0077b6'>(Arraste o pronome relativo correto para completar a frase.)</small>",
                    questions: [
                        { q: "The girl [who | which | whose | where] recycles is my friend.", a: "who" },
                        { q: "The car [which | who | whose | where] is electric saves energy.", a: "which" },
                        { q: "The man [whose | who | which | where] house has solar panels is smart.", a: "whose" },
                        { q: "This is the park [where | who | which | whose] we planted trees.", a: "where" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: Helping the Environment. Now it's your turn! Write about your plans to help the environment.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Ajudando o Meio Ambiente. Agora é a sua vez! Escreva sobre seus planos para ajudar o meio ambiente.)</span></small>",
            example: "\"I see a lot of plastic bottles in the street. I am going to buy a reusable water bottle. I think the streets will be cleaner if we all recycle.\"<br><br><small><span style='color:#0077b6'>(\"Eu vejo muitas garrafas de plástico na rua. Eu vou comprar uma garrafa de água reutilizável. Eu acho que as ruas ficarão mais limpas se todos nós reciclarmos.\")</span></small>",
            prompts: [
                "What is one environmental problem you see? <br><small><span style='color:#0077b6'>(Qual é um problema ambiental que você vê?)</span></small>",
                "What are you going to do to help? (Use 'Going to' for plans). <br><small><span style='color:#0077b6'>(O que você vai fazer para ajudar? Use 'Going to' para planos.)</span></small>",
                "What do you think will happen in the future? (Use 'Will' for predictions). <br><small><span style='color:#0077b6'>(O que você acha que vai acontecer no futuro? Use 'Will' para previsões.)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Problems & Solutions)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Topic 1: Environmental Problems ---
                { 
                    term: "Environment", 
                    definition: "The natural world, as a whole or in a particular geographical area.", 
                    defTrans: "Meio ambiente",
                    example: "We must protect the environment.", 
                    audioFront: "TTS: Environment",
                    audioBack: "TTS: We must protect the environment." 
                },
                { 
                    term: "Pollution", 
                    definition: "The presence of substances in the environment that have harmful effects.", 
                    defTrans: "Poluição",
                    example: "Cars cause air pollution.", 
                    audioFront: "TTS: Pollution",
                    audioBack: "TTS: Cars cause air pollution." 
                },
                { 
                    term: "Climate Change", 
                    definition: "A change in global or regional climate patterns.", 
                    defTrans: "Mudança Climática",
                    example: "Climate change affects the weather.", 
                    audioFront: "TTS: Climate Change",
                    audioBack: "TTS: Climate change affects the weather." 
                },
                { 
                    term: "Global Warming", 
                    definition: "A gradual increase in the overall temperature of the earth's atmosphere.", 
                    defTrans: "Aquecimento Global",
                    example: "Global warming melts the ice.", 
                    audioFront: "TTS: Global Warming",
                    audioBack: "TTS: Global warming melts the ice." 
                },
                { 
                    term: "Waste / Trash", 
                    definition: "Unwanted or unusable material and substances.", 
                    defTrans: "Lixo / Resíduo",
                    example: "There is too much waste in the ocean.", 
                    audioFront: "TTS: Waste. Trash.",
                    audioBack: "TTS: There is too much waste in the ocean." 
                },
                { 
                    term: "Deforestation", 
                    definition: "The action of clearing a wide area of trees.", 
                    defTrans: "Desmatamento",
                    example: "Deforestation destroys animal homes.", 
                    audioFront: "TTS: Deforestation",
                    audioBack: "TTS: Deforestation destroys animal homes." 
                },
                { 
                    term: "Endangered Animals", 
                    definition: "A species of animal seriously at risk of extinction.", 
                    defTrans: "Animais em Extinção",
                    example: "Pandas are endangered animals.", 
                    audioFront: "TTS: Endangered Animals",
                    audioBack: "TTS: Pandas are endangered animals." 
                },
                { 
                    term: "Danger", 
                    definition: "The possibility of suffering harm or injury.", 
                    defTrans: "Perigo",
                    example: "The forest is in danger.", 
                    audioFront: "TTS: Danger",
                    audioBack: "TTS: The forest is in danger." 
                },

                // --- Topic 2: Solutions & Actions (Verbs) ---
                { 
                    term: "Reduce", 
                    definition: "To make smaller or less in amount, degree, or size.", 
                    defTrans: "Reduzir",
                    example: "We should reduce water use.", 
                    audioFront: "TTS: Reduce",
                    audioBack: "TTS: We should reduce water use." 
                },
                { 
                    term: "Reuse", 
                    definition: "To use something again or more than once.", 
                    defTrans: "Reutilizar",
                    example: "Reuse your old bags.", 
                    audioFront: "TTS: Reuse",
                    audioBack: "TTS: Reuse your old bags." 
                },
                { 
                    term: "Recycle", 
                    definition: "To convert waste into reusable material.", 
                    defTrans: "Reciclar",
                    example: "Can you recycle this bottle?", 
                    audioFront: "TTS: Recycle",
                    audioBack: "TTS: Can you recycle this bottle?" 
                },
                { 
                    term: "Protect", 
                    definition: "To keep safe from harm or injury.", 
                    defTrans: "Proteger",
                    example: "We need to protect nature.", 
                    audioFront: "TTS: Protect",
                    audioBack: "TTS: We need to protect nature." 
                },
                { 
                    term: "Save", 
                    definition: "To avoid wasting something or to keep safe.", 
                    defTrans: "Salvar / Economizar",
                    example: "Turn off the lights to save energy.", 
                    audioFront: "TTS: Save",
                    audioBack: "TTS: Turn off the lights to save energy." 
                },
                { 
                    term: "Plant", 
                    definition: "To place a seed or bulb in the ground so that it can grow.", 
                    defTrans: "Plantar",
                    example: "They plant trees every year.", 
                    audioFront: "TTS: Plant",
                    audioBack: "TTS: They plant trees every year." 
                },
                { 
                    term: "Clean up", 
                    definition: "To make a place tidy and free of dirt.", 
                    defTrans: "Limpar",
                    example: "Let's clean up the beach.", 
                    audioFront: "TTS: Clean up",
                    audioBack: "TTS: Let's clean up the beach." 
                },
                { 
                    term: "Sort", 
                    definition: "To arrange systematically in groups; separate according to type.", 
                    defTrans: "Separar (o lixo)",
                    example: "Sort the glass and paper.", 
                    audioFront: "TTS: Sort",
                    audioBack: "TTS: Sort the glass and paper." 
                },
                { 
                    term: "Help", 
                    definition: "To make it easier for someone to do something.", 
                    defTrans: "Ajudar",
                    example: "I want to help the planet.", 
                    audioFront: "TTS: Help",
                    audioBack: "TTS: I want to help the planet." 
                },
                { 
                    term: "Take action", 
                    definition: "To do something to achieve an aim or deal with a problem.", 
                    defTrans: "Agir / Tomar atitude",
                    example: "Students must take action now.", 
                    audioFront: "TTS: Take action",
                    audioBack: "TTS: Students must take action now." 
                },
                { 
                    term: "Throw away", 
                    definition: "To discard something as useless or unwanted.", 
                    defTrans: "Jogar fora",
                    example: "Don't throw away good food.", 
                    audioFront: "TTS: Throw away",
                    audioBack: "TTS: Don't throw away good food." 
                },
                // --- Topic 3: Waste Disposal ---
                { 
                    term: "Bin / Trash can", 
                    definition: "A container for waste.", 
                    defTrans: "Lixeira / Lata de lixo",
                    example: "Put it in the recycling bin.", 
                    audioFront: "TTS: Bin. Trash can.",
                    audioBack: "TTS: Put it in the recycling bin." 
                },
                { 
                    term: "Landfill", 
                    definition: "A place to dispose of refuse by burying it and covering it with soil.", 
                    defTrans: "Aterro sanitário",
                    example: "Plastic stays in the landfill for years.", 
                    audioFront: "TTS: Landfill",
                    audioBack: "TTS: Plastic stays in the landfill for years." 
                },
                { 
                    term: "Recycling center", 
                    definition: "A facility used to recycle materials.", 
                    defTrans: "Centro de reciclagem",
                    example: "Take the metal to the recycling center.", 
                    audioFront: "TTS: Recycling center",
                    audioBack: "TTS: Take the metal to the recycling center." 
                },
                { 
                    term: "Organic waste", 
                    definition: "Biodegradable waste that comes from either a plant or an animal.", 
                    defTrans: "Lixo orgânico",
                    example: "Banana peels are organic waste.", 
                    audioFront: "TTS: Organic waste",
                    audioBack: "TTS: Banana peels are organic waste." 
                },
                { 
                    term: "Recyclable waste", 
                    definition: "Waste materials that can be converted into new materials or objects.", 
                    defTrans: "Lixo reciclável",
                    example: "Separate the recyclable waste.", 
                    audioFront: "TTS: Recyclable waste",
                    audioBack: "TTS: Separate the recyclable waste." 
                },
                { 
                    term: "Compost", 
                    definition: "Decayed organic material used as a plant fertilizer.", 
                    defTrans: "Composto / Adubo",
                    example: "We use compost in the garden.", 
                    audioFront: "TTS: Compost",
                    audioBack: "TTS: We use compost in the garden." 
                },
                { 
                    term: "Plastic", 
                    definition: "A synthetic material made from a wide range of organic polymers.", 
                    defTrans: "Plástico",
                    example: "This cup is made of plastic.", 
                    audioFront: "TTS: Plastic",
                    audioBack: "TTS: This cup is made of plastic." 
                },

                // --- Topic 4: Grammar Points ---
                { 
                    term: "Will (Future)", 
                    definition: "Used for predictions based on opinion, promises, or spontaneous decisions.", 
                    defTrans: "Previsão / Promessa / Decisão rápida",
                    example: "I will help you later.", 
                    audioFront: "TTS: Will",
                    audioBack: "TTS: I will help you later." 
                },
                { 
                    term: "Going to (Future)", 
                    definition: "Used for plans, intentions, or predictions based on present evidence.", 
                    defTrans: "Plano / Intenção / Evidência",
                    example: "I am going to recycle this.", 
                    audioFront: "TTS: Going to",
                    audioBack: "TTS: I am going to recycle this." 
                },
                { 
                    term: "Who (Relative Pronoun)", 
                    definition: "Used to introduce a clause about people.", 
                    defTrans: "Que / Quem (para pessoas)",
                    example: "The girl who helped me is nice.", 
                    audioFront: "TTS: Who",
                    audioBack: "TTS: The girl who helped me is nice." 
                },
                { 
                    term: "Which (Relative Pronoun)", 
                    definition: "Used to introduce a clause about animals or things.", 
                    defTrans: "Que / O qual (para coisas/animais)",
                    example: "The car which is green is electric.", 
                    audioFront: "TTS: Which",
                    audioBack: "TTS: The car which is green is electric." 
                },
                { 
                    term: "That (Relative Pronoun)", 
                    definition: "Used to introduce a clause about people, animals, or things.", 
                    defTrans: "Que (Pessoas/Coisas - Informal)",
                    example: "The tree that we planted is tall.", 
                    audioFront: "TTS: That",
                    audioBack: "TTS: The tree that we planted is tall." 
                },
                { 
                    term: "Whose (Relative Pronoun)", 
                    definition: "Used to indicate possession.", 
                    defTrans: "Cujo / De quem (Posse)",
                    example: "The boy whose bike is blue is my friend.", 
                    audioFront: "TTS: Whose",
                    audioBack: "TTS: The boy whose bike is blue is my friend." 
                }
            ] // Closes items array
        } // Closes Step 9
    ], // Closes steps array

    // ======================================================
    // GLOSSARY (Part 1: Context and Problems & Solutions)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "trash", 
            definition: "Waste material; things that are no longer useful and are thrown away.", 
            translation: "lixo" 
        },
        { 
            topic: "Context", 
            term: "throw-away", 
            definition: "To discard something; to put something in the garbage.", 
            translation: "jogar fora" 
        },
        { 
            topic: "Context", 
            term: "plastic", 
            definition: "A synthetic material that can be shaped when soft and then hardened.", 
            translation: "plástico" 
        },
        { 
            topic: "Context", 
            term: "going-to", 
            definition: "Future form used to express plans or intentions decided before speaking.", 
            translation: "vou / vamos (futuro planejado)" 
        },
        { 
            topic: "Context", 
            term: "organize", 
            definition: "To plan and prepare an event or activity.", 
            translation: "organizar" 
        },
        { 
            topic: "Context", 
            term: "cleanup", 
            definition: "The act of cleaning a place or a specific area.", 
            translation: "limpeza / mutirão" 
        },
        { 
            topic: "Context", 
            term: "will", 
            definition: "Future form used for spontaneous decisions, promises, or predictions.", 
            translation: "vou / farei (futuro imediato/promessa)" 
        },
        { 
            topic: "Context", 
            term: "recycle", 
            definition: "To process used materials into new products to prevent waste.", 
            translation: "reciclar" 
        },
        { 
            topic: "Context", 
            term: "bin", 
            definition: "A container for waste or things to be recycled.", 
            translation: "lixeira / cesto" 
        },
        { 
            topic: "Context", 
            term: "who", 
            definition: "A relative pronoun used to give more information about a person.", 
            translation: "que / quem" 
        },
        { 
            topic: "Context", 
            term: "responsible", 
            definition: "Having the duty or obligation to take care of something.", 
            translation: "responsável" 
        },
        { 
            topic: "Context", 
            term: "make-a-difference", 
            definition: "To have a positive effect or impact on a situation.", 
            translation: "fazer a diferença" 
        },

        // --- TOPIC 2: PROBLEMS & SOLUTIONS ---
        { 
            topic: "Problems & Solutions", 
            term: "Environment", 
            definition: "The natural world, as a whole or in a particular geographical area.", 
            translation: "meio ambiente" 
        },
        { 
            topic: "Problems & Solutions", 
            term: "Pollution", 
            definition: "The presence in the environment of substances that have harmful effects.", 
            translation: "poluição" 
        },
        { 
            topic: "Problems & Solutions", 
            term: "Climate Change", 
            definition: "A long-term change in the earth's climate, especially due to temperature.", 
            translation: "mudança climática" 
        },
        { 
            topic: "Problems & Solutions", 
            term: "Global Warming", 
            definition: "The gradual increase in the overall temperature of the earth's atmosphere.", 
            translation: "aquecimento global" 
        },
        { 
            topic: "Problems & Solutions", 
            term: "Waste", 
            definition: "Unwanted or unusable material and substances.", 
            translation: "lixo / resíduo" 
        },
        { 
            topic: "Problems & Solutions", 
            term: "Deforestation", 
            definition: "The action of clearing a wide area of trees.", 
            translation: "desmatamento" 
        },
        { 
            topic: "Problems & Solutions", 
            term: "Endangered Animals", 
            definition: "A species of animal that is seriously at risk of extinction.", 
            translation: "animais em extinção" 
        },
        { 
            topic: "Problems & Solutions", 
            term: "Danger", 
            definition: "The possibility of suffering harm or injury.", 
            translation: "perigo" 
        },
        { 
            topic: "Problems & Solutions", 
            term: "Reduce", 
            definition: "To make smaller or less in amount, degree, or size.", 
            translation: "reduzir" 
        },
        { 
            topic: "Problems & Solutions", 
            term: "Reuse", 
            definition: "To use something again or more than once.", 
            translation: "reutilizar" 
        },
        { 
            topic: "Problems & Solutions", 
            term: "Protect", 
            definition: "To keep safe from harm or injury.", 
            translation: "proteger" 
        },
        { 
            topic: "Problems & Solutions", 
            term: "Save", 
            definition: "To avoid wasting something or to keep it safe.", 
            translation: "salvar / economizar" 
        },
        { 
            topic: "Problems & Solutions", 
            term: "Plant", 
            definition: "To place a seed or bulb in the ground so that it can grow.", 
            translation: "plantar" 
        },
        { 
            topic: "Problems & Solutions", 
            term: "Sort", 
            definition: "To arrange systematically in groups; separate according to type.", 
            translation: "separar / classificar" 
        },
        { 
            topic: "Problems & Solutions", 
            term: "Take action", 
            definition: "To do something to achieve an aim or deal with a problem.", 
            translation: "agir / tomar atitude" 
        },
        // --- TOPIC 3: WASTE DISPOSAL & MATERIALS ---
        { 
            topic: "Waste & Materials", 
            term: "waste-disposal", 
            definition: "The process of getting rid of unwanted materials and trash.", 
            translation: "descarte de lixo" 
        },
        { 
            topic: "Waste & Materials", 
            term: "landfill", 
            definition: "A place to dispose of refuse and other waste material by burying it and covering it over with soil.", 
            translation: "aterro sanitário" 
        },
        { 
            topic: "Waste & Materials", 
            term: "recycling-center", 
            definition: "A facility used to process waste materials into new, reusable objects.", 
            translation: "centro de reciclagem" 
        },
        { 
            topic: "Waste & Materials", 
            term: "organic-waste", 
            definition: "Biodegradable waste that comes from either a plant or an animal.", 
            translation: "lixo orgânico" 
        },
        { 
            topic: "Waste & Materials", 
            term: "recyclable-waste", 
            definition: "Waste materials that can be converted into new materials or objects.", 
            translation: "lixo reciclável" 
        },
        { 
            topic: "Waste & Materials", 
            term: "compost", 
            definition: "Decayed organic material used as a plant fertilizer.", 
            translation: "composto / adubo" 
        },

        // --- TOPIC 4: GRAMMAR POINTS ---
        { 
            topic: "Grammar Points", 
            term: "will-future", 
            definition: "Used for predictions based on opinion, promises, or spontaneous decisions.", 
            translation: "futuro com WILL" 
        },
        { 
            topic: "Grammar Points", 
            term: "going-to-future", 
            definition: "Used for plans, intentions, or predictions based on present evidence.", 
            translation: "futuro com GOING TO" 
        },
        { 
            topic: "Grammar Points", 
            term: "who-relative", 
            definition: "A relative pronoun used to introduce a clause about people.", 
            translation: "que / quem (pronome relativo)" 
        },
        { 
            topic: "Grammar Points", 
            term: "which-relative", 
            definition: "A relative pronoun used to introduce a clause about animals or things.", 
            translation: "que / o qual (pronome relativo)" 
        },
        { 
            topic: "Grammar Points", 
            term: "that-relative", 
            definition: "A relative pronoun used for people, animals, or things (can replace who or which).", 
            translation: "que (pronome relativo)" 
        },
        { 
            topic: "Grammar Points", 
            term: "whose-relative", 
            definition: "A relative pronoun used to indicate possession.", 
            translation: "cujo / de quem (pronome relativo)" 
        }
    ] // Closes glossary array
}); // Closes window.initLesson