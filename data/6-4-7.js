/**
 * REACH English - LESSON DATA 6-4-7
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "6-4-7", 
    grade: "6th Grade",       
    bimester: "4",   
    chapter: "7",    
    chapterTitle: "Our Planet is Calling", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "In this lesson, you will learn to:<br><br>• Talk about the environment and nature.<br>• Identify actions that help or hurt the planet.<br>• Use the Present Continuous tense (I am helping).<br>• Add \"-ing\" to verbs correctly (recycling, planting).<br>• Ask questions about what is happening now.<br>• Understand verbs not used in continuous forms.",
            welcome: "Hello, Earth Heroes! It's Mr. D!<br><br>Welcome to \"Our Planet is Calling\"! Today, we are going to talk about our beautiful home, Earth. We will learn how to describe what is happening to our planet right now—both the good and the bad. We'll master the Present Continuous tense to talk about actions in progress, like \"We are recycling\" or \"They are planting trees.\" Let's learn how to be champions for the environment!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about the environment and nature. Identify actions that help or hurt the planet. Use the Present Continuous tense. Add I N G to verbs correctly. Ask questions about what is happening now. Understand verbs not used in continuous forms.",
                welcome: "TTS: Hello, Earth Heroes! It's Mr. D! Welcome to Our Planet is Calling! Today, we are going to talk about our beautiful home, Earth. We will learn how to describe what is happening to our planet right now, both the good and the bad. We'll master the Present Continuous tense to talk about actions in progress, like We are recycling or They are planting trees. Let's learn how to be champions for the environment!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of birds chirping and rustling leaves. Celine and Albert are in a park, holding trash bags.", 
            contextAudio: "audio/6-4-7/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "Celine, look at all this [garbage](tooltip:garbage)! What are you [doing](tooltip:doing)?" 
                },
                { 
                    speaker: "Celine", 
                    text: "I am [collecting](tooltip:collect) the plastic bottles. I am [recycling](tooltip:recycle) them." 
                },
                { 
                    speaker: "Albert", 
                    text: "That is great! The volunteers over there are [planting](tooltip:plant) new trees." 
                },
                { 
                    speaker: "Celine", 
                    text: "Yes, they are [helping](tooltip:help) nature. But look at that man... he is [throwing away](tooltip:throw-away) a bag!" 
                },
                { 
                    speaker: "Albert", 
                    text: "Oh no! He is [polluting](tooltip:pollute) the park. We need to tell him to stop." 
                },
                { 
                    speaker: "Celine", 
                    text: "[Are you coming](tooltip:coming)? We are [making a difference](tooltip:make-difference) today!" 
                },
                { 
                    speaker: "Albert", 
                    text: "Yes, I [am coming](tooltip:coming)! Let's go." 
                }
            ]
        },

        // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
        // ======================================================
        {
            title: "Say the word",
            audio2b: "", 
            subPages: [
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],

            // 2A: Vocabulary Lists (Tabbed)
            areas: [
                {
                    title: "Verbs (Helping & Hurting)",
                    audio: "TTS: Help. Protect. Save. Recycle. Reuse. Reduce. Clean. Plant. Pollute. Waste. Throw away.",
                    items: [
                        { term: "Help", trans: "ajudar" },
                        { term: "Protect", trans: "proteger" },
                        { term: "Save", trans: "salvar / economizar" },
                        { term: "Recycle", trans: "reciclar" },
                        { term: "Reuse", trans: "reutilizar" },
                        { term: "Reduce", trans: "reduzir" },
                        { term: "Clean", trans: "limpar" },
                        { term: "Plant", trans: "plantar" },
                        { term: "Pollute", trans: "poluir" },
                        { term: "Waste", trans: "desperdiçar" },
                        { term: "Throw away", trans: "jogar fora" }
                    ]
                },
                {
                    title: "The Natural World",
                    audio: "TTS: Environment. Planet. World. Nature. Tree. Plant. Animal. Earth. Water. Air. River.",
                    items: [
                        { term: "Environment", trans: "meio ambiente" },
                        { term: "Planet", trans: "planeta" },
                        { term: "World", trans: "mundo" },
                        { term: "Nature", trans: "natureza" },
                        { term: "Tree", trans: "árvore" },
                        { term: "Plant (Noun)", trans: "planta" },
                        { term: "Animal", trans: "animal" },
                        { term: "Earth", trans: "Terra" },
                        { term: "Water", trans: "água" },
                        { term: "Air", trans: "ar" },
                        { term: "River", trans: "rio" }
                    ]
                },
                {
                    title: "Waste & Pollution",
                    audio: "TTS: Garbage. Trash. Pollution. Plastic. Bottle. Bag. Consumerism.",
                    items: [
                        { term: "Garbage / Trash", trans: "lixo" },
                        { term: "Pollution", trans: "poluição" },
                        { term: "Plastic", trans: "plástico" },
                        { term: "Bottle", trans: "garrafa" },
                        { term: "Bag", trans: "sacola" },
                        { term: "Consumerism", trans: "consumismo" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Right now. At this moment. Look around you. Make a difference. Take action. Plastic bags. Reusable bag.",
                    items: [
                        { term: "Right now", trans: "agora mesmo" },
                        { term: "At this moment", trans: "neste momento" },
                        { term: "Look around you", trans: "olhe ao seu redor" },
                        { term: "Make a difference", trans: "fazer a diferença" },
                        { term: "Take action", trans: "agir / tomar atitude" },
                        { term: "Plastic bags", trans: "sacolas plásticas" },
                        { term: "Reusable bag", trans: "sacola reutilizável" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Verbs (Helping & Hurting)",
                    audio: "TTS: We help the animals. You must protect the forest. Please save water. I recycle paper and glass. We reuse old jars. Try to reduce plastic use. She cleans the park. They plant flowers in the garden. Cars pollute the air. Don't waste food. He throws away the wrapper.",
                    items: [
                        { term: "Help", sent: "We help the animals.", trans: "<span style='color:#0077b6'>Nós ajudamos os animais.</span>" },
                        { term: "Protect", sent: "You must protect the forest.", trans: "<span style='color:#0077b6'>Você deve proteger a floresta.</span>" },
                        { term: "Save", sent: "Please save water.", trans: "<span style='color:#0077b6'>Por favor, economize água.</span>" },
                        { term: "Recycle", sent: "I recycle paper and glass.", trans: "<span style='color:#0077b6'>Eu reciclo papel e vidro.</span>" },
                        { term: "Reuse", sent: "We reuse old jars.", trans: "<span style='color:#0077b6'>Nós reutilizamos potes velhos.</span>" },
                        { term: "Reduce", sent: "Try to reduce plastic use.", trans: "<span style='color:#0077b6'>Tente reduzir o uso de plástico.</span>" },
                        { term: "Clean", sent: "She cleans the park.", trans: "<span style='color:#0077b6'>Ela limpa o parque.</span>" },
                        { term: "Plant", sent: "They plant flowers in the garden.", trans: "<span style='color:#0077b6'>Eles plantam flores no jardim.</span>" },
                        { term: "Pollute", sent: "Cars pollute the air.", trans: "<span style='color:#0077b6'>Carros poluem o ar.</span>" },
                        { term: "Waste", sent: "Don't waste food.", trans: "<span style='color:#0077b6'>Não desperdice comida.</span>" },
                        { term: "Throw away", sent: "He throws away the wrapper.", trans: "<span style='color:#0077b6'>Ele joga fora a embalagem.</span>" }
                    ]
                },
                {
                    title: "The Natural World",
                    audio: "TTS: We care about the environment. Earth is our planet. People all over the world help. I love spending time in nature. That is a tall tree. This plant needs water. The tiger is a wild animal. We live on Earth. Drink plenty of water. The air is fresh today. The river flows to the sea.",
                    items: [
                        { term: "Environment", sent: "We care about the environment.", trans: "<span style='color:#0077b6'>Nós nos importamos com o meio ambiente.</span>" },
                        { term: "Planet", sent: "Earth is our planet.", trans: "<span style='color:#0077b6'>A Terra é o nosso planeta.</span>" },
                        { term: "World", sent: "People all over the world help.", trans: "<span style='color:#0077b6'>Pessoas de todo o mundo ajudam.</span>" },
                        { term: "Nature", sent: "I love spending time in nature.", trans: "<span style='color:#0077b6'>Eu amo passar tempo na natureza.</span>" },
                        { term: "Tree", sent: "That is a tall tree.", trans: "<span style='color:#0077b6'>Aquela é uma árvore alta.</span>" },
                        { term: "Plant", sent: "This plant needs water.", trans: "<span style='color:#0077b6'>Esta planta precisa de água.</span>" },
                        { term: "Animal", sent: "The tiger is a wild animal.", trans: "<span style='color:#0077b6'>O tigre é um animal selvagem.</span>" },
                        { term: "Earth", sent: "We live on Earth.", trans: "<span style='color:#0077b6'>Nós vivemos na Terra.</span>" },
                        { term: "Water", sent: "Drink plenty of water.", trans: "<span style='color:#0077b6'>Beba bastante água.</span>" },
                        { term: "Air", sent: "The air is fresh today.", trans: "<span style='color:#0077b6'>O ar está fresco hoje.</span>" },
                        { term: "River", sent: "The river flows to the sea.", trans: "<span style='color:#0077b6'>O rio corre para o mar.</span>" }
                    ]
                },
                {
                    title: "Waste & Pollution",
                    audio: "TTS: Put the garbage in the bin. Pollution is bad for health. This toy is made of plastic. Can I have a bottle of water? I need a bag for my groceries. Consumerism affects the planet.",
                    items: [
                        { term: "Garbage/Trash", sent: "Put the garbage in the bin.", trans: "<span style='color:#0077b6'>Coloque o lixo na lixeira.</span>" },
                        { term: "Pollution", sent: "Pollution is bad for health.", trans: "<span style='color:#0077b6'>Poluição é ruim para a saúde.</span>" },
                        { term: "Plastic", sent: "This toy is made of plastic.", trans: "<span style='color:#0077b6'>Este brinquedo é feito de plástico.</span>" },
                        { term: "Bottle", sent: "Can I have a bottle of water?", trans: "<span style='color:#0077b6'>Posso pegar uma garrafa de água?</span>" },
                        { term: "Bag", sent: "I need a bag for my groceries.", trans: "<span style='color:#0077b6'>Eu preciso de uma sacola para minhas compras.</span>" },
                        { term: "Consumerism", sent: "Consumerism affects the planet.", trans: "<span style='color:#0077b6'>O consumismo afeta o planeta.</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: I am studying right now. She is sleeping at this moment. Look around you and see the beauty. You can make a difference. It is time to take action. Say no to plastic bags. Use a reusable bag for shopping.",
                    items: [
                        { term: "Right now", sent: "I am studying right now.", trans: "<span style='color:#0077b6'>Eu estou estudando agora mesmo.</span>" },
                        { term: "At this moment", sent: "She is sleeping at this moment.", trans: "<span style='color:#0077b6'>Ela está dormindo neste momento.</span>" },
                        { term: "Look around you", sent: "Look around you and see the beauty.", trans: "<span style='color:#0077b6'>Olhe ao seu redor e veja a beleza.</span>" },
                        { term: "Make a difference", sent: "You can make a difference.", trans: "<span style='color:#0077b6'>Você pode fazer a diferença.</span>" },
                        { term: "Take action", sent: "It is time to take action.", trans: "<span style='color:#0077b6'>É hora de agir.</span>" },
                        { term: "Plastic bags", sent: "Say no to plastic bags.", trans: "<span style='color:#0077b6'>Diga não às sacolas plásticas.</span>" },
                        { term: "Reusable bag", sent: "Use a reusable bag for shopping.", trans: "<span style='color:#0077b6'>Use uma sacola reutilizável para compras.</span>" }
                    ]
                }
            ],

            // 2C: Practice MCQ Drills (Expanded to 24)
            drills: [
                {
                    type: "mcq",
                    q: "Choose the correct translation for 'To recycle':",
                    options: [
                        { t: "Poluir", c: false },
                        { t: "Reciclar", c: true },
                        { t: "Gastar", c: false },
                        { t: "Comprar", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'We must _______ water, not waste it.'",
                    options: [
                        { t: "pollute", c: false },
                        { t: "save", c: true },
                        { t: "throw away", c: false },
                        { t: "destroy", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Where do fish live?",
                    options: [
                        { t: "In the air", c: false },
                        { t: "In the tree", c: false },
                        { t: "In the river", c: true },
                        { t: "In the bag", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What do we plant in the ground?",
                    options: [
                        { t: "Plastic", c: false },
                        { t: "Trees", c: true },
                        { t: "Air", c: false },
                        { t: "Pollution", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What material are water bottles usually made of?",
                    options: [
                        { t: "Paper", c: false },
                        { t: "Wood", c: false },
                        { t: "Plastic", c: true },
                        { t: "Food", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'Don't throw trash on the floor. Put it in the _______.'",
                    options: [
                        { t: "river", c: false },
                        { t: "garbage bin", c: true },
                        { t: "sky", c: false },
                        { t: "table", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "I am studying _______ (neste momento).",
                    options: [
                        { t: "yesterday", c: false },
                        { t: "right now", c: true },
                        { t: "every day", c: false },
                        { t: "last week", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "We can _______ (fazer a diferença) by recycling.",
                    options: [
                        { t: "make a mistake", c: false },
                        { t: "make a difference", c: true },
                        { t: "do a homework", c: false },
                        { t: "take a nap", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the opposite of 'Protect':",
                    options: [
                        { t: "Save", c: false },
                        { t: "Help", c: false },
                        { t: "Destroy", c: true },
                        { t: "Clean", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'The _______ is our home.'",
                    options: [
                        { t: "Moon", c: false },
                        { t: "Earth", c: true },
                        { t: "Mars", c: false },
                        { t: "Sun", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct translation for 'Environment':",
                    options: [
                        { t: "Mundo", c: false },
                        { t: "Meio ambiente", c: true },
                        { t: "Natureza", c: false },
                        { t: "Planeta", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "We can _______ old jars to keep pencils.",
                    options: [
                        { t: "pollute", c: false },
                        { t: "reuse", c: true },
                        { t: "waste", c: false },
                        { t: "throw away", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Cars _______ the air with smoke.",
                    options: [
                        { t: "clean", c: false },
                        { t: "pollute", c: true },
                        { t: "save", c: false },
                        { t: "protect", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "I love the fresh _______ in the morning.",
                    options: [
                        { t: "trash", c: false },
                        { t: "plastic", c: false },
                        { t: "air", c: true },
                        { t: "garbage", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If you observe the things around you, you _______.",
                    options: [
                        { t: "take action", c: false },
                        { t: "look around you", c: true },
                        { t: "make a difference", c: false },
                        { t: "recycle", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Use a _______ instead of plastic bags.",
                    options: [
                        { t: "paper bag", c: false },
                        { t: "reusable bag", c: true },
                        { t: "trash bag", c: false },
                        { t: "bottle", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The _______ flows to the sea.",
                    options: [
                        { t: "park", c: false },
                        { t: "mountain", c: false },
                        { t: "river", c: true },
                        { t: "tree", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "I love spending time in _______ (natureza).",
                    options: [
                        { t: "consumerism", c: false },
                        { t: "pollution", c: false },
                        { t: "nature", c: true },
                        { t: "trash", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "We must _______ the animals.",
                    options: [
                        { t: "pollute", c: false },
                        { t: "help", c: true },
                        { t: "waste", c: false },
                        { t: "throw away", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Try to _______ (reduzir) plastic use.",
                    options: [
                        { t: "increase", c: false },
                        { t: "reduce", c: true },
                        { t: "save", c: false },
                        { t: "make", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "She _______ (limpa) the park every Saturday.",
                    options: [
                        { t: "pollutes", c: false },
                        { t: "cleans", c: true },
                        { t: "plants", c: false },
                        { t: "watches", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Excessive buying and waste is called _______.",
                    options: [
                        { t: "recycling", c: false },
                        { t: "consumerism", c: true },
                        { t: "nature", c: false },
                        { t: "action", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "It is time to _______ (tomar atitude) now.",
                    options: [
                        { t: "look around", c: false },
                        { t: "make a difference", c: false },
                        { t: "take action", c: true },
                        { t: "recycle", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Don't _______ (desperdiçar) food.",
                    options: [
                        { t: "save", c: false },
                        { t: "eat", c: false },
                        { t: "waste", c: true },
                        { t: "protect", c: false }
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
                    title: "Present Continuous (Affirmative)",
                    audio: "TTS: I am helping. You are learning. He is planting. She is working. It is raining. We are cleaning. They are recycling.",
                    explanation: "We use the Present Continuous to talk about actions that are happening right now, at this exact moment. We use the verb 'to be' (am, is, are) + the main verb with -ing.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos o Presente Contínuo para falar de ações que estão acontecendo agora mesmo. Usamos o verbo 'to be' + o verbo principal com -ing.)</span>",
                    samples: [
                        { en: "I am (I'm) helping.", pt: "<span style='color:#0077b6'>Eu estou ajudando.</span>" },
                        { en: "She is (She's) working.", pt: "<span style='color:#0077b6'>Ela está trabalhando.</span>" },
                        { en: "The students are recycling.", pt: "<span style='color:#0077b6'>Os alunos estão reciclando.</span>" },
                        { en: "The volunteers are working in the park.", pt: "<span style='color:#0077b6'>Os voluntários estão trabalhando no parque.</span>" }
                    ]
                },
                {
                    title: "Negative & Interrogative",
                    audio: "TTS: I am not wasting. You are not listening. Is he throwing? Is it growing? Are we polluting? Are they helping?",
                    explanation: "To make negative sentences, add 'not' after the verb 'to be'. To ask questions, put the verb 'to be' before the subject.<br><br><span style='color:#0077b6; font-style:italic;'>(Para frases negativas, adicione 'not' depois do verbo 'to be'. Para perguntas, coloque o verbo 'to be' antes do sujeito.)</span>",
                    samples: [
                        { en: "I am not (I'm not) wasting.", pt: "<span style='color:#0077b6'>Eu não estou desperdiçando.</span>" },
                        { en: "Are you recycling plastic?", pt: "<span style='color:#0077b6'>Você está reciclando plástico?</span>" },
                        { en: "He is not (isn't) throwing trash.", pt: "<span style='color:#0077b6'>Ele não está jogando lixo.</span>" },
                        { en: "Are they cleaning the beach?", pt: "<span style='color:#0077b6'>Eles estão limpando a praia?</span>" }
                    ]
                },
                {
                    title: "Spelling Rules (-ing)",
                    audio: "TTS: Help, helping. Protect, protecting. Make, making. Save, saving. Sit, sitting. Run, running. Stop, stopping.",
                    explanation: "When adding -ing to verbs, sometimes the spelling changes.<br><br><span style='color:#0077b6; font-style:italic;'>(Ao adicionar -ing aos verbos, às vezes a ortografia muda.)</span>",
                    samples: [
                        { en: "General Rule: Just add -ing (help -> helping).", pt: "<span style='color:#0077b6'>(Regra Geral: Apenas adicione -ing).</span>" },
                        { en: "Silent 'E': Remove the 'e' (make -> making).", pt: "<span style='color:#0077b6'>(E mudo: remova o 'e').</span>" },
                        { en: "CVC Rule: Double the last letter (sit -> sitting).", pt: "<span style='color:#0077b6'>(Consoante-Vogal-Consoante: dobre a última letra).</span>" }
                    ]
                },
                {
                    title: "State Verbs",
                    audio: "TTS: Like, love, hate, want, need, know, understand, believe. We use the Simple Present for these verbs.",
                    explanation: "Some verbs describe feelings, thoughts, or states, not actions. We usually do not use them in the Present Continuous. We use the Simple Present instead.<br><br><span style='color:#0077b6; font-style:italic;'>(Alguns verbos descrevem sentimentos ou estados, não ações. Geralmente não os usamos com -ing; usamos o Presente Simples.)</span>",
                    samples: [
                        { en: "Correct: I want to help. / She loves nature.", pt: "<span style='color:#0077b6'>(Correto: Eu quero ajudar / Ela ama a natureza.)</span>" },
                        { en: "Incorrect: I am wanting to help.", pt: "<span style='color:#0077b6'>(Incorreto: Eu estou querendo ajudar.)</span>" }
                    ]
                },
                {
                    title: "WH- Questions",
                    audio: "TTS: What are you doing? Why is he running? Where are they planting the trees?",
                    explanation: "To ask for specific information, we put the WH- word (What, Where, Why) before the verb 'to be'.<br><br><span style='color:#0077b6; font-style:italic;'>(Para pedir informações específicas, colocamos a palavra WH antes do verbo 'to be'.)</span>",
                    samples: [
                        { en: "What are you doing?", pt: "<span style='color:#0077b6'>O que você está fazendo?</span>" },
                        { en: "Why is he running?", pt: "<span style='color:#0077b6'>Por que ele está correndo?</span>" },
                        { en: "Where are they planting trees?", pt: "<span style='color:#0077b6'>Onde eles estão plantando árvores?</span>" }
                    ]
                }
            ],

            // 3B: Natural Examples (Dialogues Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Present Continuous (Affirmative)",
                    audio: "audio/6-4-7/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Look at Celine. She is picking up trash.", 
                            pt: "<span style='color:#0077b6'><i>Olhe para a Celine. Ela está recolhendo lixo.</i></span>" 
                        },
                        { 
                            speaker: "Mrs. Canales", 
                            text: "Yes, she is helping the environment.", 
                            pt: "<span style='color:#0077b6'><i>Sim, ela está ajudando o meio ambiente.</i></span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Negative & Interrogative",
                    audio: "audio/6-4-7/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Are you wasting water, Albert?", 
                            pt: "<span style='color:#0077b6'><i>Você está desperdiçando água, Albert?</i></span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "No, I am not wasting water. I am turning off the tap.", 
                            pt: "<span style='color:#0077b6'><i>Não, não estou desperdiçando água. Estou fechando a torneira.</i></span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Spelling Rules (-ing)",
                    audio: "audio/6-4-7/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Why is that man running?", 
                            pt: "<span style='color:#0077b6'><i>Por que aquele homem está correndo?</i></span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "He is chasing his dog. The dog is swimming in the river!", 
                            pt: "<span style='color:#0077b6'><i>Ele está perseguindo o cachorro dele. O cachorro está nadando no rio!</i></span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 4: State Verbs",
                    audio: "audio/6-4-7/step3_dialogue4.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "I love this park. It is so green.", 
                            pt: "<span style='color:#0077b6'><i>Eu amo este parque. É tão verde.</i></span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I know. I want to protect it forever.", 
                            pt: "<span style='color:#0077b6'><i>Eu sei. Eu quero protegê-lo para sempre.</i></span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 5: WH- Questions",
                    audio: "audio/6-4-7/step3_dialogue5.mp3",
                    lines: [
                        { 
                            speaker: "Mrs. Canales", 
                            text: "What are you doing with those bottles?", 
                            pt: "<span style='color:#0077b6'><i>O que vocês estão fazendo com essas garrafas?</i></span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "We are recycling them. Why are people throwing them on the floor?", 
                            pt: "<span style='color:#0077b6'><i>Nós estamos reciclando elas. Por que as pessoas estão jogando elas no chão?</i></span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ Drills (Expanded to 24)
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Present Continuous (Affirmative): Complete: 'We _______ new trees today.'",
                    options: [
                        { t: "are plant", c: false },
                        { t: "is planting", c: false },
                        { t: "are planting", c: true },
                        { t: "planting", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Present Continuous (Negative): Complete: 'He _______ the environment.'",
                    options: [
                        { t: "is not protecting", c: true },
                        { t: "not protecting", c: false },
                        { t: "no is protecting", c: false },
                        { t: "are not protecting", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Present Continuous (Interrogative): Choose the correct question.",
                    options: [
                        { t: "You are recycling?", c: false },
                        { t: "Are you recycle?", c: false },
                        { t: "Is you recycling?", c: false },
                        { t: "Are you recycling?", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling Rules: Choose the correct -ing form for 'Stop'.",
                    options: [
                        { t: "Stoping", c: false },
                        { t: "Stopping", c: true },
                        { t: "Stopeing", c: false },
                        { t: "Stopiyng", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling Rules: Choose the correct -ing form for 'Make'.",
                    options: [
                        { t: "Makeing", c: false },
                        { t: "Making", c: true },
                        { t: "Makking", c: false },
                        { t: "Maiking", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "State Verbs: Choose the correct sentence.",
                    options: [
                        { t: "I am liking nature.", c: false },
                        { t: "I am wanting to help.", c: false },
                        { t: "I like nature.", c: true },
                        { t: "I liking nature.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "WH- Questions: '_______ is she crying?' 'Because she is sad.'",
                    options: [
                        { t: "What", c: false },
                        { t: "Where", c: false },
                        { t: "Why", c: true },
                        { t: "Who", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "WH- Questions: '_______ are they going?' 'To the park.'",
                    options: [
                        { t: "What", c: false },
                        { t: "Where", c: true },
                        { t: "Why", c: false },
                        { t: "When", c: false }
                    ]
                },
                // --- Expanded Exercises ---
                {
                    type: "mcq",
                    q: "Affirmative: 'Look! The bus _______.'",
                    options: [
                        { t: "is coming", c: true },
                        { t: "are coming", c: false },
                        { t: "coming", c: false },
                        { t: "is come", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Affirmative: 'I _______ to music right now.'",
                    options: [
                        { t: "am listen", c: false },
                        { t: "am listening", c: true },
                        { t: "is listening", c: false },
                        { t: "listening", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative: 'They _______ TV. They are studying.'",
                    options: [
                        { t: "isn't watching", c: false },
                        { t: "aren't watching", c: true },
                        { t: "not watching", c: false },
                        { t: "don't watching", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative: 'It _______ today. The sun is shining.'",
                    options: [
                        { t: "aren't raining", c: false },
                        { t: "no raining", c: false },
                        { t: "isn't raining", c: true },
                        { t: "isn't rain", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Interrogative: '_______ he playing soccer?'",
                    options: [
                        { t: "Are", c: false },
                        { t: "Is", c: true },
                        { t: "Am", c: false },
                        { t: "Do", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Interrogative: '_______ we helping the planet?'",
                    options: [
                        { t: "Is", c: false },
                        { t: "Am", c: false },
                        { t: "Are", c: true },
                        { t: "Do", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling Rules: 'Sit' becomes _______.",
                    options: [
                        { t: "Siting", c: false },
                        { t: "Siiting", c: false },
                        { t: "Siteing", c: false },
                        { t: "Sitting", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling Rules: 'Use' becomes _______.",
                    options: [
                        { t: "Useing", c: false },
                        { t: "Using", c: true },
                        { t: "Usjing", c: false },
                        { t: "Ussing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling Rules: 'Run' becomes _______.",
                    options: [
                        { t: "Runing", c: false },
                        { t: "Running", c: true },
                        { t: "Runeing", c: false },
                        { t: "Runnig", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "State Verb: 'She _______ the answer.' (Know)",
                    options: [
                        { t: "is knowing", c: false },
                        { t: "knows", c: true },
                        { t: "knowing", c: false },
                        { t: "know", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "State Verb: 'We _______ to save water.' (Want)",
                    options: [
                        { t: "are wanting", c: false },
                        { t: "wanting", c: false },
                        { t: "want", c: true },
                        { t: "wants", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "WH- Questions: '_______ is he running?' 'Because he is late.'",
                    options: [
                        { t: "Where", c: false },
                        { t: "Who", c: false },
                        { t: "Why", c: true },
                        { t: "What", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "WH- Questions: '_______ are you going?' 'To school.'",
                    options: [
                        { t: "Where", c: true },
                        { t: "What", c: false },
                        { t: "Who", c: false },
                        { t: "Why", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "WH- Questions: '_______ is eating my sandwich?' 'The dog!'",
                    options: [
                        { t: "Where", c: false },
                        { t: "Who", c: true },
                        { t: "Why", c: false },
                        { t: "When", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Context: 'Listen! The birds _______.'",
                    options: [
                        { t: "singing", c: false },
                        { t: "is singing", c: false },
                        { t: "are singing", c: true },
                        { t: "are sing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Context: 'I am busy. I _______ my homework.'",
                    options: [
                        { t: "am doing", c: true },
                        { t: "doing", c: false },
                        { t: "is doing", c: false },
                        { t: "am do", c: false }
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
                    text: "I am recycling the bottles.<br><small style='color:#0077b6'>(Eu estou reciclando as garrafas.)</small>", 
                    audio: "TTS: I am recycling the bottles.", 
                    arrow: "↘" 
                },
                { 
                    text: "She is planting a tree.<br><small style='color:#0077b6'>(Ela está plantando uma árvore.)</small>", 
                    audio: "TTS: She is planting a tree.", 
                    arrow: "↘" 
                },
                { 
                    text: "We are saving water.<br><small style='color:#0077b6'>(Nós estamos economizando água.)</small>", 
                    audio: "TTS: We are saving water.", 
                    arrow: "↘" 
                },
                { 
                    text: "Why is he running?<br><small style='color:#0077b6'>(Por que ele está correndo?)</small>", 
                    audio: "TTS: Why is he running?", 
                    arrow: "↘" 
                },
                { 
                    text: "Are you helping the planet?<br><small style='color:#0077b6'>(Você está ajudando o planeta?)</small>", 
                    audio: "TTS: Are you helping the planet?", 
                    arrow: "↗" 
                },
                { 
                    text: "They are cleaning the park.<br><small style='color:#0077b6'>(Eles estão limpando o parque.)</small>", 
                    audio: "TTS: They are cleaning the park.", 
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
                    instruction: "Listen to Albert describing what he sees. Type the missing words. <br><small style='color:#0077b6'>(Ouça Albert descrevendo o que ele vê. Digite as palavras que faltam.)</small>",
                    audio: "TTS: Look! That man is throwing trash on the floor. He is polluting the street. We are cleaning it up right now.",
                    text: "Look! That man is [throwing] trash on the floor. He is [polluting] the street. We are [cleaning] it up right now."
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation and choose the correct option. <br><small style='color:#0077b6'>(Ouça a conversa e escolha a opção correta.)</small>",
                    audio: "audio/6-4-7/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Mom: Celine, what are you [doing | do]?", 
                            a: "doing" 
                        },
                        { 
                            q: "Celine: I am [planting | plant] flowers in the garden.", 
                            a: "planting" 
                        },
                        { 
                            q: "Mom: Is your brother [help | helping]?", 
                            a: "helping" 
                        },
                        { 
                            q: "Celine: No, he [isn't | aren't]. He is sleeping.", 
                            a: "isn't" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer. <br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta correta.)</small>",
                    audio: "TTS: Why are they using reusable bags?",
                    options: [
                        { t: "Because they are wasting money.", c: false },
                        { t: "Because they are reducing plastic waste.", c: true },
                        { t: "Because they are sleeping.", c: false },
                        { t: "Because they like pollution.", c: false }
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
                    title: "Narration: The Green Club",
                    audio: "TTS: It is Saturday morning. The students of the Green Club are at school. They are not studying math today; they are working outside. Some students are collecting garbage from the playground. Others are planting small trees near the gate. Mrs. Canales is helping them. She is holding a big bag for the plastic bottles. Everyone is working hard to protect the environment. || audio/6-4-7/p6_text1.mp3",
                    body: "It is Saturday morning. The students of the Green Club are at school. They are not studying math today; they are working outside. Some students are collecting garbage from the playground. Others are planting small trees near the gate. Mrs. Canales is helping them. She is holding a big bag for the plastic bottles. Everyone is working hard to protect the environment.",
                    questions: [
                        { 
                            q: "What are the students doing?", 
                            options: [ 
                                {t: "Studying math", c: false}, 
                                {t: "Sleeping", c: false}, 
                                {t: "Working outside", c: true}, 
                                {t: "Watching TV", c: false}
                            ] 
                        },
                        { 
                            q: "What is Mrs. Canales doing?", 
                            options: [ 
                                {t: "She is planting trees.", c: false}, 
                                {t: "She is holding a bag.", c: true}, 
                                {t: "She is throwing trash.", c: false}, 
                                {t: "She is running.", c: false}
                            ] 
                        },
                        { 
                            q: "When is this happening?", 
                            options: [ 
                                {t: "On Monday", c: false}, 
                                {t: "At night", c: false}, 
                                {t: "On Saturday morning", c: true}, 
                                {t: "In the winter", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: At the Beach",
                    audio: "audio/6-4-7/p6_text2.mp3",
                    body: "<b>Albert:</b> Look at the ocean, Celine. It is beautiful, but there is some trash on the sand.<br><b>Celine:</b> Yes, I see it. People are leaving bottles and bags here.<br><b>Albert:</b> That is terrible. The plastic is polluting the water.<br><b>Celine:</b> Let's take action! I am picking up this bottle.<br><b>Albert:</b> Good idea. I am helping you. We are cleaning the beach together.<br><b>Celine:</b> We are saving the sea animals!",
                    questions: [
                        { 
                            q: "What is on the sand?", 
                            options: [ 
                                {t: "Trees", c: false}, 
                                {t: "Trash", c: true}, 
                                {t: "Cars", c: false}, 
                                {t: "Beds", c: false}
                            ] 
                        },
                        { 
                            q: "What is the plastic doing?", 
                            options: [ 
                                {t: "Helping the water", c: false}, 
                                {t: "Cleaning the beach", c: false}, 
                                {t: "Polluting the water", c: true}, 
                                {t: "Saving animals", c: false}
                            ] 
                        },
                        { 
                            q: "What are Albert and Celine doing?", 
                            options: [ 
                                {t: "Swimming", c: false}, 
                                {t: "Cleaning the beach", c: true}, 
                                {t: "Sleeping", c: false}, 
                                {t: "Eating lunch", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: A Busy Park",
                    audio: "TTS: The park is very busy today. The sun is shining. Many people are enjoying nature. Some children are running on the grass. A group of friends is recycling cans near the bench. A gardener is watering the plants. He is not wasting water; he is using a watering can. Two birds are sitting in a tree. The park looks clean and green. || audio/6-4-7/p6_text3.mp3",
                    body: "The park is very busy today. The sun is shining. Many people are enjoying nature. Some children are running on the grass. A group of friends is recycling cans near the bench. A gardener is watering the plants. He is not wasting water; he is using a watering can. Two birds are sitting in a tree. The park looks clean and green.",
                    questions: [
                        { 
                            q: "What are the children doing?", 
                            options: [ 
                                {t: "Sleeping", c: false}, 
                                {t: "Recycling", c: false}, 
                                {t: "Running on the grass", c: true}, 
                                {t: "Watering plants", c: false}
                            ] 
                        },
                        { 
                            q: "What is the gardener doing?", 
                            options: [ 
                                {t: "Wasting water", c: false}, 
                                {t: "Watering the plants", c: true}, 
                                {t: "Sitting in a tree", c: false}, 
                                {t: "Running", c: false}
                            ] 
                        },
                        { 
                            q: "Is the gardener wasting water?", 
                            options: [ 
                                {t: "Yes, he is.", c: false}, 
                                {t: "No, he isn't.", c: true}, 
                                {t: "He is drinking water.", c: false}, 
                                {t: "He is polluting.", c: false}
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
                // Drill 1: Multiple Choice (Grammar in Context)
                {
                    type: "mcq",
                    instruction: "Choose the correct form:<br><small>'Look! She _______ a new tree.'</small>",               
                    options: [
                        { t: "planting", c: false },
                        { t: "is plant", c: false },
                        { t: "is planting", c: true },
                        { t: "are planting", c: false }
                    ]
                },
                {
                    type: "mcq",
                    instruction: "Choose the correct form:<br><small>'They _______ the environment.'</small>",               
                    options: [
                        { t: "is helping", c: false },
                        { t: "are helping", c: true },
                        { t: "helping", c: false },
                        { t: "are help", c: false }
                    ]
                },
                // Drill 2: Categorize (Drag & Drop)
                {
                    type: "categorize",
                    instruction: "Group the actions into 'Good for Earth' or 'Bad for Earth'. <br><small style='color:#0077b6'>(Agrupe as ações em 'Bom para a Terra' ou 'Ruim para a Terra'.)</small>",
                    categories: [
                        { id: "good", name: "Good for Earth" },
                        { id: "bad", name: "Bad for Earth" }
                    ],
                    items: [
                        { text: "Recycling", catId: "good" },
                        { text: "Planting trees", catId: "good" },
                        { text: "Saving water", catId: "good" },
                        { text: "Polluting", catId: "bad" },
                        { text: "Wasting water", catId: "bad" },
                        { text: "Throwing trash", catId: "bad" }
                    ]
                },
                // Drill 3: True or False (Continuous Action Logic)
                {
                    type: "true-false",
                    instruction: "Does the sentence describe a continuous action happening NOW? (True = Yes, False = No/State/Habit). <br><small style='color:#0077b6'>(A frase descreve uma ação contínua acontecendo AGORA?)</small>",
                    questions: [
                        { text: "I am reading a book.", correct: "true" },
                        { text: "She likes ice cream.", correct: "false" },
                        { text: "They are reducing waste.", correct: "true" },
                        { text: "We recycle every day.", correct: "false" }
                    ]
                },
                // Drill 4: Dialogue Scramble
                {
                    type: "dialogue-scramble",
                    instruction: "Put the conversation in the correct order. <br><small style='color:#0077b6'>(Coloque a conversa na ordem correta.)</small>",
                    items: [
                        "I am sorting the trash.",
                        "Because I am recycling.",
                        "What are you doing?",
                        "Why are you doing that?"
                    ],
                    correctOrder: [
                        "What are you doing?",
                        "I am sorting the trash.",
                        "Why are you doing that?",
                        "Because I am recycling."
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: Helping the Environment. Now it's your turn! Describe what you and your family (or friends) are doing right now to help the environment.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Ajudando o Meio Ambiente. Agora é sua vez! Descreva o que você e sua família (ou amigos) estão fazendo agora mesmo para ajudar o meio ambiente.)</span></small>",
            example: "\"Right now, I am turning off the lights to save energy. My mother is separating the garbage for recycling. My brother is using a reusable bag. We are helping the planet!\"<br><br><small><span style='color:#0077b6'>(\"Agora mesmo, estou desligando as luzes para economizar energia. Minha mãe está separando o lixo para reciclagem. Meu irmão está usando uma sacola reutilizável. Nós estamos ajudando o planeta!\")</span></small>",
            prompts: [
                "What are you doing? (I am...) <br><small><span style='color:#0077b6'>(O que você está fazendo? Eu estou...)</span></small>",
                "What is a family member doing? (He/She is...) <br><small><span style='color:#0077b6'>(O que um membro da família está fazendo? Ele/Ela está...)</span></small>",
                "Are you using plastic? (We are/aren't...) <br><small><span style='color:#0077b6'>(Vocês estão usando plástico? Nós estamos/não estamos...)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Verbs & Natural World)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Verbs (Helping & Hurting) ---
                { 
                    term: "Help", 
                    definition: "To give assistance or support to someone.", 
                    defTrans: "ajudar",
                    example: "We are helping the animals.", 
                    exTrans: "Nós estamos ajudando os animais.",
                    audioFront: "TTS: Help",
                    audioBack: "TTS: We are helping the animals." 
                },
                { 
                    term: "Protect", 
                    definition: "To keep safe from harm or injury.", 
                    defTrans: "proteger",
                    example: "She is protecting the forest.", 
                    exTrans: "Ela está protegendo a floresta.",
                    audioFront: "TTS: Protect",
                    audioBack: "TTS: She is protecting the forest." 
                },
                { 
                    term: "Save", 
                    definition: "To keep safe; to avoid wasting something.", 
                    defTrans: "salvar / economizar",
                    example: "I am saving water.", 
                    exTrans: "Eu estou economizando água.",
                    audioFront: "TTS: Save",
                    audioBack: "TTS: I am saving water." 
                },
                { 
                    term: "Recycle", 
                    definition: "To convert waste into reusable material.", 
                    defTrans: "reciclar",
                    example: "They are recycling paper.", 
                    exTrans: "Eles estão reciclando papel.",
                    audioFront: "TTS: Recycle",
                    audioBack: "TTS: They are recycling paper." 
                },
                { 
                    term: "Reuse", 
                    definition: "To use something again or more than once.", 
                    defTrans: "reutilizar",
                    example: "We are reusing glass jars.", 
                    exTrans: "Nós estamos reutilizando potes de vidro.",
                    audioFront: "TTS: Reuse",
                    audioBack: "TTS: We are reusing glass jars." 
                },
                { 
                    term: "Reduce", 
                    definition: "To make smaller or less in amount or degree.", 
                    defTrans: "reduzir",
                    example: "He is reducing plastic use.", 
                    exTrans: "Ele está reduzindo o uso de plástico.",
                    audioFront: "TTS: Reduce",
                    audioBack: "TTS: He is reducing plastic use." 
                },
                { 
                    term: "Clean", 
                    definition: "To remove dirt, marks, or mess from something.", 
                    defTrans: "limpar",
                    example: "The students are cleaning the park.", 
                    exTrans: "Os alunos estão limpando o parque.",
                    audioFront: "TTS: Clean",
                    audioBack: "TTS: The students are cleaning the park." 
                },
                { 
                    term: "Plant", 
                    definition: "To put a seed or plant in the ground so it grows.", 
                    defTrans: "plantar",
                    example: "She is planting a flower.", 
                    exTrans: "Ela está plantando uma flor.",
                    audioFront: "TTS: Plant",
                    audioBack: "TTS: She is planting a flower." 
                },
                { 
                    term: "Pollute", 
                    definition: "To contaminate with harmful or poisonous substances.", 
                    defTrans: "poluir",
                    example: "Cars are polluting the air.", 
                    exTrans: "Carros estão poluindo o ar.",
                    audioFront: "TTS: Pollute",
                    audioBack: "TTS: Cars are polluting the air." 
                },
                { 
                    term: "Waste", 
                    definition: "To use or expend carelessly or to no purpose.", 
                    defTrans: "desperdiçar",
                    example: "Don't waste food.", 
                    exTrans: "Não desperdice comida.",
                    audioFront: "TTS: Waste",
                    audioBack: "TTS: Don't waste food." 
                },
                { 
                    term: "Throw away", 
                    definition: "To discard something as useless or unwanted.", 
                    defTrans: "jogar fora",
                    example: "He is throwing away the trash.", 
                    exTrans: "Ele está jogando o lixo fora.",
                    audioFront: "TTS: Throw away",
                    audioBack: "TTS: He is throwing away the trash." 
                },

                // --- The Natural World ---
                { 
                    term: "Environment", 
                    definition: "The surroundings or conditions in which a person lives.", 
                    defTrans: "meio ambiente",
                    example: "We care about the environment.", 
                    exTrans: "Nós nos importamos com o meio ambiente.",
                    audioFront: "TTS: Environment",
                    audioBack: "TTS: We care about the environment." 
                },
                { 
                    term: "Planet", 
                    definition: "A celestial body moving in an orbit around a star.", 
                    defTrans: "planeta",
                    example: "Earth is our planet.", 
                    exTrans: "A Terra é o nosso planeta.",
                    audioFront: "TTS: Planet",
                    audioBack: "TTS: Earth is our planet." 
                },
                { 
                    term: "World", 
                    definition: "The earth, together with all of its countries and peoples.", 
                    defTrans: "mundo",
                    example: "People all over the world help.", 
                    exTrans: "Pessoas de todo o mundo ajudam.",
                    audioFront: "TTS: World",
                    audioBack: "TTS: People all over the world help." 
                },
                { 
                    term: "Nature", 
                    definition: "The physical world including plants, animals, and landscapes.", 
                    defTrans: "natureza",
                    example: "I love spending time in nature.", 
                    exTrans: "Eu amo passar tempo na natureza.",
                    audioFront: "TTS: Nature",
                    audioBack: "TTS: I love spending time in nature." 
                },
                { 
                    term: "Tree", 
                    definition: "A woody perennial plant with a trunk and branches.", 
                    defTrans: "árvore",
                    example: "The tree is very tall.", 
                    exTrans: "A árvore é muito alta.",
                    audioFront: "TTS: Tree",
                    audioBack: "TTS: The tree is very tall." 
                },
                { 
                    term: "Plant (Noun)", 
                    definition: "A living organism such as trees, shrubs, and herbs.", 
                    defTrans: "planta",
                    example: "This plant needs water.", 
                    exTrans: "Esta planta precisa de água.",
                    audioFront: "TTS: Plant",
                    audioBack: "TTS: This plant needs water." 
                },
                { 
                    term: "Animal", 
                    definition: "A living organism that feeds on organic matter.", 
                    defTrans: "animal",
                    example: "The lion is a wild animal.", 
                    exTrans: "O leão é um animal selvagem.",
                    audioFront: "TTS: Animal",
                    audioBack: "TTS: The lion is a wild animal." 
                },
                { 
                    term: "Earth", 
                    definition: "The planet on which we live.", 
                    defTrans: "Terra",
                    example: "We live on Earth.", 
                    exTrans: "Nós vivemos na Terra.",
                    audioFront: "TTS: Earth",
                    audioBack: "TTS: We live on Earth." 
                },
                { 
                    term: "Water", 
                    definition: "A colorless, transparent liquid vital for life.", 
                    defTrans: "água",
                    example: "Drink plenty of water.", 
                    exTrans: "Beba bastante água.",
                    audioFront: "TTS: Water",
                    audioBack: "TTS: Drink plenty of water." 
                },
                { 
                    term: "Air", 
                    definition: "The invisible gaseous substance surrounding the earth.", 
                    defTrans: "ar",
                    example: "The air is fresh today.", 
                    exTrans: "O ar está fresco hoje.",
                    audioFront: "TTS: Air",
                    audioBack: "TTS: The air is fresh today." 
                },
                { 
                    term: "River", 
                    definition: "A large natural stream of water flowing to the sea.", 
                    defTrans: "rio",
                    example: "The river is clean.", 
                    exTrans: "O rio está limpo.",
                    audioFront: "TTS: River",
                    audioBack: "TTS: The river is clean." 
                },
                // --- Waste & Pollution ---
                { 
                    term: "Garbage / Trash", 
                    definition: "Wasted or spoiled food and other refuse.", 
                    defTrans: "lixo",
                    example: "Pick up the garbage.", 
                    exTrans: "Recolha o lixo.",
                    audioFront: "TTS: Garbage or Trash",
                    audioBack: "TTS: Pick up the garbage." 
                },
                { 
                    term: "Pollution", 
                    definition: "The presence of harmful substances in the environment.", 
                    defTrans: "poluição",
                    example: "Pollution is bad for us.", 
                    exTrans: "A poluição é ruim para nós.",
                    audioFront: "TTS: Pollution",
                    audioBack: "TTS: Pollution is bad for us." 
                },
                { 
                    term: "Plastic", 
                    definition: "A synthetic material made from organic polymers.", 
                    defTrans: "plástico",
                    example: "Avoid using plastic.", 
                    exTrans: "Evite usar plástico.",
                    audioFront: "TTS: Plastic",
                    audioBack: "TTS: Avoid using plastic." 
                },
                { 
                    term: "Bottle", 
                    definition: "A container with a narrow neck, used for storing liquids.", 
                    defTrans: "garrafa",
                    example: "Recycle this water bottle.", 
                    exTrans: "Recicle esta garrafa de água.",
                    audioFront: "TTS: Bottle",
                    audioBack: "TTS: Recycle this water bottle." 
                },
                { 
                    term: "Bag", 
                    definition: "A container made of flexible material used for carrying things.", 
                    defTrans: "sacola",
                    example: "I have a reusable bag.", 
                    exTrans: "Eu tenho uma sacola reutilizável.",
                    audioFront: "TTS: Bag",
                    audioBack: "TTS: I have a reusable bag." 
                },
                { 
                    term: "Consumerism", 
                    definition: "The preoccupation of society with the acquisition of goods.", 
                    defTrans: "consumismo",
                    example: "Consumerism creates waste.", 
                    exTrans: "O consumismo gera lixo.",
                    audioFront: "TTS: Consumerism",
                    audioBack: "TTS: Consumerism creates waste." 
                },

                // --- Phrases & Expressions ---
                { 
                    term: "Right now", 
                    definition: "At this precise moment.", 
                    defTrans: "agora mesmo",
                    example: "I am studying right now.", 
                    exTrans: "Estou estudando agora mesmo.",
                    audioFront: "TTS: Right now",
                    audioBack: "TTS: I am studying right now." 
                },
                { 
                    term: "At this moment", 
                    definition: "Currently; happening now.", 
                    defTrans: "neste momento",
                    example: "She is working at this moment.", 
                    exTrans: "Ela está trabalhando neste momento.",
                    audioFront: "TTS: At this moment",
                    audioBack: "TTS: She is working at this moment." 
                },
                { 
                    term: "Look around you", 
                    definition: "To observe the things or people in your vicinity.", 
                    defTrans: "olhe ao seu redor",
                    example: "Look around you and see nature.", 
                    exTrans: "Olhe ao seu redor e veja a natureza.",
                    audioFront: "TTS: Look around you",
                    audioBack: "TTS: Look around you and see nature." 
                },
                { 
                    term: "Make a difference", 
                    definition: "To have a significant effect on a person or situation.", 
                    defTrans: "fazer a diferença",
                    example: "You can make a difference.", 
                    exTrans: "Você pode fazer a diferença.",
                    audioFront: "TTS: Make a difference",
                    audioBack: "TTS: You can make a difference." 
                },
                { 
                    term: "Take action", 
                    definition: "To do something to achieve an aim or deal with a problem.", 
                    defTrans: "agir / tomar atitude",
                    example: "We must take action now.", 
                    exTrans: "Devemos agir agora.",
                    audioFront: "TTS: Take action",
                    audioBack: "TTS: We must take action now." 
                },
                { 
                    term: "Plastic bags", 
                    definition: "Bags made of thin plastic material.", 
                    defTrans: "sacolas plásticas",
                    example: "We don't use plastic bags.", 
                    exTrans: "Nós não usamos sacolas plásticas.",
                    audioFront: "TTS: Plastic bags",
                    audioBack: "TTS: We don't use plastic bags." 
                },
                { 
                    term: "Reusable bag", 
                    definition: "A bag that can be used many times.", 
                    defTrans: "sacola reutilizável",
                    example: "Bring your reusable bag.", 
                    exTrans: "Traga sua sacola reutilizável.",
                    audioFront: "TTS: Reusable bag",
                    audioBack: "TTS: Bring your reusable bag." 
                },

                // --- Grammar Points ---
                { 
                    term: "Present Continuous (Affirmative)", 
                    definition: "am/is/are + verb-ing (Actions now).", 
                    defTrans: "Presente Contínuo (Afirmativo)",
                    example: "She is helping.", 
                    exTrans: "Ela está ajudando.",
                    audioFront: "TTS: Present Continuous Affirmative",
                    audioBack: "TTS: She is helping." 
                },
                { 
                    term: "Present Continuous (Negative)", 
                    definition: "am/is/are + NOT + verb-ing.", 
                    defTrans: "Presente Contínuo (Negativo)",
                    example: "I am not wasting water.", 
                    exTrans: "Eu não estou desperdiçando água.",
                    audioFront: "TTS: Present Continuous Negative",
                    audioBack: "TTS: I am not wasting water." 
                },
                { 
                    term: "Present Continuous (Interrogative)", 
                    definition: "Am/Is/Are + Subject + verb-ing?", 
                    defTrans: "Presente Contínuo (Interrogativo)",
                    example: "Are you recycling?", 
                    exTrans: "Você está reciclando?",
                    audioFront: "TTS: Present Continuous Interrogative",
                    audioBack: "TTS: Are you recycling?" 
                },
                { 
                    term: "Spelling Rules (-ing)", 
                    definition: "Rules for adding -ing (e.g. drop 'e', double consonant).", 
                    defTrans: "Regras de Ortografia (-ing)",
                    example: "He is running.", 
                    exTrans: "Ele está correndo.",
                    audioFront: "TTS: Spelling Rules I N G",
                    audioBack: "TTS: He is running." 
                },
                { 
                    term: "State Verbs", 
                    definition: "Verbs that describe a state, not an action (no -ing).", 
                    defTrans: "Verbos de Estado",
                    example: "I want to help.", 
                    exTrans: "Eu quero ajudar.",
                    audioFront: "TTS: State Verbs",
                    audioBack: "TTS: I want to help." 
                },
                { 
                    term: "WH- Questions", 
                    definition: "Questions asking for specific info (What, Where, Why).", 
                    defTrans: "Perguntas WH",
                    example: "What are you doing?", 
                    exTrans: "O que você está fazendo?",
                    audioFront: "TTS: W H Questions",
                    audioBack: "TTS: What are you doing?" 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Part 1: Context, Verbs, Nature)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "doing", 
            definition: "Performing an action or activity.", 
            translation: "Fazendo" 
        },
        { 
            topic: "Context", 
            term: "collecting", 
            definition: "Gathering things together from different places.", 
            translation: "Coletando / Recolhendo" 
        },
        { 
            topic: "Context", 
            term: "coming", 
            definition: "Moving or traveling towards the speaker.", 
            translation: "Vindo" 
        },
        { 
            topic: "Context", 
            term: "make-difference", 
            definition: "To have a significant effect on a person or situation.", 
            translation: "Fazer a diferença" 
        },

        // --- TOPIC 2: VERBS (HELPING & HURTING) ---
        { 
            topic: "Verbs", 
            term: "help", 
            definition: "To give assistance or support to someone.", 
            translation: "Ajudar" 
        },
        { 
            topic: "Verbs", 
            term: "protect", 
            definition: "To keep safe from harm or injury.", 
            translation: "Proteger" 
        },
        { 
            topic: "Verbs", 
            term: "save", 
            definition: "To keep safe; to avoid wasting something.", 
            translation: "Salvar / Economizar" 
        },
        { 
            topic: "Verbs", 
            term: "recycle", 
            definition: "To convert waste into reusable material.", 
            translation: "Reciclar" 
        },
        { 
            topic: "Verbs", 
            term: "reuse", 
            definition: "To use something again or more than once.", 
            translation: "Reutilizar" 
        },
        { 
            topic: "Verbs", 
            term: "reduce", 
            definition: "To make smaller or less in amount or degree.", 
            translation: "Reduzir" 
        },
        { 
            topic: "Verbs", 
            term: "clean", 
            definition: "To remove dirt, marks, or mess from something.", 
            translation: "Limpar" 
        },
        { 
            topic: "Verbs", 
            term: "plant", 
            definition: "To put a seed, bulb, or plant in the ground so that it can grow.", 
            translation: "Plantar" 
        },
        { 
            topic: "Verbs", 
            term: "pollute", 
            definition: "To contaminate water, air, or a place with harmful substances.", 
            translation: "Poluir" 
        },
        { 
            topic: "Verbs", 
            term: "waste", 
            definition: "To use or expend carelessly, extravagantly, or to no purpose.", 
            translation: "Desperdiçar" 
        },
        { 
            topic: "Verbs", 
            term: "throw-away", 
            definition: "To discard something as useless or unwanted.", 
            translation: "Jogar fora" 
        },

        // --- TOPIC 3: THE NATURAL WORLD ---
        { 
            topic: "Nature", 
            term: "environment", 
            definition: "The surroundings or conditions in which a person, animal, or plant lives.", 
            translation: "Meio ambiente" 
        },
        { 
            topic: "Nature", 
            term: "planet", 
            definition: "A celestial body moving in an elliptical orbit around a star.", 
            translation: "Planeta" 
        },
        { 
            topic: "Nature", 
            term: "world", 
            definition: "The earth, together with all of its countries, peoples, and natural features.", 
            translation: "Mundo" 
        },
        { 
            topic: "Nature", 
            term: "nature", 
            definition: "The phenomena of the physical world collectively, including plants, animals, and the landscape.", 
            translation: "Natureza" 
        },
        { 
            topic: "Nature", 
            term: "tree", 
            definition: "A woody perennial plant, typically having a single stem or trunk.", 
            translation: "Árvore" 
        },
        { 
            topic: "Nature", 
            term: "plant-noun", 
            definition: "A living organism of the kind exemplified by trees, shrubs, herbs, etc.", 
            translation: "Planta" 
        },
        { 
            topic: "Nature", 
            term: "animal", 
            definition: "A living organism that feeds on organic matter.", 
            translation: "Animal" 
        },
        { 
            topic: "Nature", 
            term: "earth", 
            definition: "The planet on which we live.", 
            translation: "Terra" 
        },
        { 
            topic: "Nature", 
            term: "water", 
            definition: "A colorless, transparent, odorless liquid.", 
            translation: "Água" 
        },
        // --- TOPIC 4: WASTE & POLLUTION ---
        { 
            topic: "Waste & Pollution", 
            term: "garbage", 
            definition: "Wasted or spoiled food and other refuse, as from a kitchen or household.", 
            translation: "lixo" 
        },
        { 
            topic: "Waste & Pollution", 
            term: "pollution", 
            definition: "The presence in the environment of a substance that has harmful effects.", 
            translation: "poluição" 
        },
        { 
            topic: "Waste & Pollution", 
            term: "plastic", 
            definition: "A synthetic material made from a wide range of organic polymers.", 
            translation: "plástico" 
        },
        { 
            topic: "Waste & Pollution", 
            term: "bottle", 
            definition: "A container, typically made of glass or plastic, used for storing drinks.", 
            translation: "garrafa" 
        },
        { 
            topic: "Waste & Pollution", 
            term: "bag", 
            definition: "A container made of flexible material with an opening at the top.", 
            translation: "sacola" 
        },
        { 
            topic: "Waste & Pollution", 
            term: "consumerism", 
            definition: "The preoccupation of society with the acquisition of consumer goods.", 
            translation: "consumismo" 
        },

        // --- TOPIC 5: PHRASES & EXPRESSIONS ---
        { 
            topic: "Phrases", 
            term: "right-now", 
            definition: "At this precise moment.", 
            translation: "agora mesmo" 
        },
        { 
            topic: "Phrases", 
            term: "at-this-moment", 
            definition: "Currently; happening now.", 
            translation: "neste momento" 
        },
        { 
            topic: "Phrases", 
            term: "look-around-you", 
            definition: "To observe the things or people in your vicinity.", 
            translation: "olhe ao seu redor" 
        },
        { 
            topic: "Phrases", 
            term: "make-difference", 
            definition: "To have a significant effect on a person or situation.", 
            translation: "fazer a diferença" 
        },
        { 
            topic: "Phrases", 
            term: "take-action", 
            definition: "To do something to achieve an aim or deal with a problem.", 
            translation: "agir / tomar atitude" 
        },
        { 
            topic: "Phrases", 
            term: "plastic-bags", 
            definition: "Bags made of thin plastic material, often used for shopping.", 
            translation: "sacolas plásticas" 
        },
        { 
            topic: "Phrases", 
            term: "reusable-bag", 
            definition: "A bag that can be used many times, often made of cloth.", 
            translation: "sacola reutilizável" 
        },
        // --- TOPIC 6: GRAMMAR POINTS ---
        { 
            topic: "Grammar", 
            term: "present-continuous-affirmative", 
            definition: "Verb tense for actions happening now (Subject + am/is/are + verb-ing).", 
            translation: "Presente Contínuo (Afirmativa)" 
        },
        { 
            topic: "Grammar", 
            term: "present-continuous-negative", 
            definition: "Verb tense for actions NOT happening now (Subject + am/is/are + not + verb-ing).", 
            translation: "Presente Contínuo (Negativa)" 
        },
        { 
            topic: "Grammar", 
            term: "present-continuous-interrogative", 
            definition: "Question form for actions happening now (Am/Is/Are + Subject + verb-ing?).", 
            translation: "Presente Contínuo (Interrogativa)" 
        },
        { 
            topic: "Grammar", 
            term: "spelling-rules-ing", 
            definition: "Rules for adding '-ing' to verbs (e.g., removing 'e', doubling consonants).", 
            translation: "Regras de Ortografia (-ing)" 
        },
        { 
            topic: "Grammar", 
            term: "state-verbs", 
            definition: "Verbs describing a state (feeling/thought), not used in continuous forms.", 
            translation: "Verbos de Estado (não usam -ing)" 
        },
        { 
            topic: "Grammar", 
            term: "wh-questions-continuous", 
            definition: "Questions starting with What, Where, Why, asking about current actions.", 
            translation: "Perguntas WH (Contínuo)" 
        }
    ] // This closes the glossary array
}); 