/**
 * REACH English - LESSON DATA em2-1-1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em2-1-1", 
    grade: "High School 2nd Grade",       
    bimester: "1",   
    chapter: "1",    
    chapterTitle: "DNA and Evolution", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss the complex concepts of DNA and evolution.<br>• Use Perfect Tenses (Present, Past, Future, and Conditional) to describe scientific processes.<br>• Use time adverbs like already, yet, and just correctly.<br>• Identify and describe species adaptation and extinction.",
            welcome: "Hello, young scientists! I'm Mr. D!<br>Today, we are embarking on an incredible journey through time! We are going to open the door to the secrets of life itself. You will learn how genes and mutations have shaped every living thing on Earth. We’ll use advanced grammar to talk about what has changed over millions of years. It’s going to be a fascinating exploration of our past and our future. Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss the complex concepts of DNA and evolution. Use Perfect Tenses, Present, Past, Future, and Conditional, to describe scientific processes. Use time adverbs like already, yet, and just correctly. Identify and describe species adaptation and extinction.",
                welcome: "TTS: Hello, young scientists! I'm Mr. D! Today, we are embarking on an incredible journey through time! We are going to open the door to the secrets of life itself. You will learn how genes and mutations have shaped every living thing on Earth. We’ll use advanced grammar to talk about what has changed over millions of years. It’s going to be a fascinating exploration of our past and our future. Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Albert and Celine are visiting a Natural History Museum. They are standing in front of a giant display about human ancestry and a DNA helix model.", 
            contextAudio: "audio/em2-1-1/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "Wow, Celine! Look at this. I have never seen such a detailed model of a [DNA](tooltip:dna) molecule before. It’s crazy how much [species](tooltip:species) [have evolved](tooltip:present-perfect) over time." 
                },
                { 
                    speaker: "Celine", 
                    text: "It really is, Albert! By the time we finish this tour, we [will have learned](tooltip:future-perfect) so much about our [common ancestors](tooltip:common-ancestor). Evidence shows that our [genetic code](tooltip:genetic-code) is very similar to other primates." 
                },
                { 
                    speaker: "Albert", 
                    text: "I read that scientists [had already discovered](tooltip:past-perfect) many of these [fossils](tooltip:fossil) before they could even sequence the genome. Technology [has changed](tooltip:present-perfect) dramatically in recent years." 
                },
                { 
                    speaker: "Celine", 
                    text: "Exactly. If we [hadn't developed](tooltip:past-perfect) these new tools, we [wouldn't have understood](tooltip:conditional-perfect) the impact of [mutations](tooltip:mutation) so clearly. Through genetic studies, we now know how [natural selection](tooltip:natural-selection) works." 
                },
                { 
                    speaker: "Albert", 
                    text: "I [have just learned](tooltip:present-perfect) that some [traits](tooltip:trait) are actually [adaptations](tooltip:adaptation) to the environment. It’s sad that many species have gone into [extinction](tooltip:extinction) because they couldn't adapt fast enough." 
                },
                { 
                    speaker: "Celine", 
                    text: "It is believed that [biodiversity](tooltip:biodiversity) is essential for a healthy planet. Has there been an [evolution](tooltip:evolution) in how we protect these species?" 
                },
                { 
                    speaker: "Albert", 
                    text: "I hope so! We [have not saved](tooltip:present-perfect) every species [yet](tooltip:yet), but our understanding has been studied extensively [lately](tooltip:lately)." 
                }
            ]
        },

        // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
        // ======================================================
        {
            title: "Say the word",
            // Audio 2B is now inside the groups below, leave empty or remove if unused globally
            audio2b: "", 
            
            subPages: [
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],

            // 2A: Vocabulary Lists (Tabbed)
            areas: [
                {
                    title: "Verbs (Ações Científicas)",
                    audio: "TTS: Study. Affect. Allow. Understand. Change. Develop. Discover. Modify. Evolve. Experiment.",
                    items: [
                        { term: "Study", trans: "Estudar" },
                        { term: "Affect", trans: "Afetar" },
                        { term: "Allow", trans: "Permitir / Deixar" },
                        { term: "Understand", trans: "Entender / Compreender" },
                        { term: "Change", trans: "Mudar / Alterar" },
                        { term: "Develop", trans: "Desenvolver" },
                        { term: "Discover", trans: "Descobrir" },
                        { term: "Modify", trans: "Modificar" },
                        { term: "Evolve", trans: "Evoluir" },
                        { term: "Experiment", trans: "Experimentar / Fazer testes" }
                    ]
                },
                {
                    title: "Vocabularies (Evolução e Genética)",
                    audio: "TTS: DNA. Evolution. Species. Gene. Mutation. Adaptation. Natural selection. Ancestor. Fossil. Trait. Common ancestor. Genetic code. Extinction. Biodiversity.",
                    items: [
                        { term: "DNA", trans: "DNA" },
                        { term: "Evolution", trans: "Evolução" },
                        { term: "Species", trans: "Espécies" },
                        { term: "Gene", trans: "Gene" },
                        { term: "Mutation", trans: "Mutação" },
                        { term: "Adaptation", trans: "Adaptação" },
                        { term: "Natural selection", trans: "Seleção natural" },
                        { term: "Ancestor", trans: "Ancestral" },
                        { term: "Fossil", trans: "Fóssil" },
                        { term: "Trait", trans: "Característica / Traço" },
                        { term: "Common ancestor", trans: "Ancestral comum" },
                        { term: "Genetic code", trans: "Código genético" },
                        { term: "Extinction", trans: "Extinção" },
                        { term: "Biodiversity", trans: "Biodiversidade" }
                    ]
                },
                {
                    title: "Expressions & Questions",
                    audio: "TTS: Over time. Has changed dramatically. Has been studied. In recent years. For millions of years. Evidence shows that. It is believed that. Through genetic studies. How has DNA affected...? What has changed? What is known about...? Has there been an evolution? We have not... yet. I have just learned. Have you ever...? Have you already...? I've never seen...",
                    items: [
                        { term: "Over time", trans: "Ao longo do tempo" },
                        { term: "Has changed dramatically", trans: "Mudou drasticamente" },
                        { term: "Has been studied", trans: "Tem sido estudado" },
                        { term: "In recent years", trans: "Nos últimos anos" },
                        { term: "For millions of years", trans: "Por milhões de anos" },
                        { term: "Evidence shows that", trans: "As evidências mostram que" },
                        { term: "It is believed that", trans: "Acredita-se que" },
                        { term: "Through genetic studies", trans: "Através de estudos genéticos" },
                        { term: "How has DNA affected...?", trans: "Como o DNA tem afetado...?" },
                        { term: "What has changed?", trans: "O que mudou?" },
                        { term: "What is known about...?", trans: "O que se sabe sobre...?" },
                        { term: "Has there been an evolution?", trans: "Houve alguma evolução?" },
                        { term: "We have not... yet", trans: "Nós ainda não..." },
                        { term: "I have just learned", trans: "Acabei de aprender" },
                        { term: "Have you ever...?", trans: "Você já...?" },
                        { term: "Have you already...?", trans: "Você já...?" },
                        { term: "I've never seen...", trans: "Eu nunca vi..." }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            // Use <span style='color:#0077b6'> for blue translations
            exampleGroups: [
                {
                    title: "Verbs (Scientific)",
                    audio: "TTS: I want to study genetics at university. Mutations can affect how an animal looks. This discovery allows us to understand our past. It’s hard to understand the scale of time. Life on Earth continues to change. Scientists develop new theories every year. Did they discover a new fossil? We can modify crops to be more resistant. Humans and chimpanzees evolved differently. Don't experiment without safety gear.",
                    items: [
                        { term: "Study", sent: "I want to study genetics at university.", trans: "<span style='color:#0077b6'>Eu quero estudar genética na universidade.</span>" },
                        { term: "Affect", sent: "Mutations can affect how an animal looks.", trans: "<span style='color:#0077b6'>Mutações podem afetar a aparência de um animal.</span>" },
                        { term: "Allow", sent: "This discovery allows us to understand our past.", trans: "<span style='color:#0077b6'>Esta descoberta nos permite entender nosso passado.</span>" },
                        { term: "Understand", sent: "It’s hard to understand the scale of time.", trans: "<span style='color:#0077b6'>É difícil entender a escala do tempo.</span>" },
                        { term: "Change", sent: "Life on Earth continues to change.", trans: "<span style='color:#0077b6'>A vida na Terra continua a mudar.</span>" },
                        { term: "Develop", sent: "Scientists develop new theories every year.", trans: "<span style='color:#0077b6'>Cientistas desenvolvem novas teorias todos os anos.</span>" },
                        { term: "Discover", sent: "Did they discover a new fossil?", trans: "<span style='color:#0077b6'>Eles descobriram um novo fóssil?</span>" },
                        { term: "Modify", sent: "We can modify crops to be more resistant.", trans: "<span style='color:#0077b6'>Podemos modificar plantações para serem mais resistentes.</span>" },
                        { term: "Evolve", sent: "Humans and chimpanzees evolved differently.", trans: "<span style='color:#0077b6'>Humanos e chimpanzés evoluíram de forma diferente.</span>" },
                        { term: "Experiment", sent: "Don't experiment without safety gear.", trans: "<span style='color:#0077b6'>Não faça experimentos sem equipamento de segurança.</span>" }
                    ]
                },
                {
                    title: "Science Vocab",
                    audio: "TTS: My DNA contains info from my parents. Darwin’s theory of evolution is famous. There are many species of cats. This gene makes my hair curly. A mutation can be helpful or harmful. The bird's beak is an adaptation. Natural selection favors the strongest. My ancestors came from Italy. We found a trilobite fossil. Eye color is a hereditary trait. All mammals share a common ancestor. The genetic code is a set of rules. The extinction of the dodo was sad. We must protect the Amazon's biodiversity.",
                    items: [
                        { term: "DNA", sent: "My DNA contains info from my parents.", trans: "<span style='color:#0077b6'>(Meu DNA contém informações dos meus pais.)</span>" },
                        { term: "Evolution", sent: "Darwin’s theory of evolution is famous.", trans: "<span style='color:#0077b6'>(A teoria da evolução de Darwin é famosa.)</span>" },
                        { term: "Species", sent: "There are many species of cats.", trans: "<span style='color:#0077b6'>(Existem muitas espécies de gatos.)</span>" },
                        { term: "Gene", sent: "This gene makes my hair curly.", trans: "<span style='color:#0077b6'>(Este gene faz meu cabelo ser cacheado.)</span>" },
                        { term: "Mutation", sent: "A mutation can be helpful or harmful.", trans: "<span style='color:#0077b6'>(Uma mutação pode ser útil ou prejudicial.)</span>" },
                        { term: "Adaptation", sent: "The bird's beak is an adaptation.", trans: "<span style='color:#0077b6'>(O bico do pássaro é uma adaptação.)</span>" },
                        { term: "Natural selection", sent: "Natural selection favors the strongest.", trans: "<span style='color:#0077b6'>(A seleção natural favorece os mais fortes.)</span>" },
                        { term: "Ancestor", sent: "My ancestors came from Italy.", trans: "<span style='color:#0077b6'>(Meus ancestrais vieram da Itália.)</span>" },
                        { term: "Fossil", sent: "We found a trilobite fossil.", trans: "<span style='color:#0077b6'>(Encontramos um fóssil de trilobita.)</span>" },
                        { term: "Trait", sent: "Eye color is a hereditary trait.", trans: "<span style='color:#0077b6'>(A cor dos olhos é um traço hereditário.)</span>" },
                        { term: "Common ancestor", sent: "All mammals share a common ancestor.", trans: "<span style='color:#0077b6'>(Todos os mamíferos compartilham um ancestral comum.)</span>" },
                        { term: "Genetic code", sent: "The genetic code is a set of rules.", trans: "<span style='color:#0077b6'>(O código genético é um conjunto de regras.)</span>" },
                        { term: "Extinction", sent: "The extinction of the dodo was sad.", trans: "<span style='color:#0077b6'>(A extinção do dodô foi triste.)</span>" },
                        { term: "Biodiversity", sent: "We must protect the Amazon's biodiversity.", trans: "<span style='color:#0077b6'>(Devemos proteger a biodiversidade da Amazônia.)</span>" }
                    ]
                },
                {
                    title: "Expressions & Questions",
                    audio: "TTS: Life has changed a lot over time. The landscape has changed dramatically. This fossil has been studied by experts. Science has progressed in recent years. Dinosaurs ruled for millions of years. Evidence shows that climate is changing. It is believed that life started in the water. Through genetic studies, we found the link. How has DNA affected our medicine? What has changed is our ability to cure diseases. What is known about the early humans? Has there been an evolution in their tools? We have not found a solution yet. I have just learned about mutations. Have you ever seen a real fossil? I've never seen such a large bone!",
                    items: [
                        { term: "Over time", sent: "Albert: Life has changed a lot over time. Celine: Yes, for millions of years actually.", trans: "<span style='color:#0077b6'>(A vida mudou muito ao longo do tempo.)</span>" },
                        { term: "Has changed dramatically", sent: "Albert: The landscape has changed dramatically. Celine: It used to be an ocean here!", trans: "<span style='color:#0077b6'>(A paisagem mudou drasticamente.)</span>" },
                        { term: "Has been studied", sent: "Albert: This fossil has been studied by experts. Celine: And they found amazing data!", trans: "<span style='color:#0077b6'>(Este fóssil tem sido estudado por especialistas.)</span>" },
                        { term: "In recent years", sent: "Albert: Science has progressed in recent years. Celine: Technology is getting faster too.", trans: "<span style='color:#0077b6'>(A ciência progrediu nos últimos anos.)</span>" },
                        { term: "For millions of years", sent: "Albert: Dinosaurs ruled for millions of years. Celine: Until they went extinct.", trans: "<span style='color:#0077b6'>(Dinossauros governaram por milhões de anos.)</span>" },
                        { term: "Evidence shows that", sent: "Albert: Evidence shows that climate is changing. Celine: We need to act now.", trans: "<span style='color:#0077b6'>(Evidências mostram que o clima está mudando.)</span>" },
                        { term: "It is believed that", sent: "Albert: It is believed that life started in the water. Celine: Many scientists agree with that.", trans: "<span style='color:#0077b6'>(Acredita-se que a vida começou na água.)</span>" },
                        { term: "Through genetic studies", sent: "Albert: Through genetic studies, we found the link. Celine: DNA is like a history book.", trans: "<span style='color:#0077b6'>(Através de estudos genéticos, encontramos o elo.)</span>" },
                        { term: "How has DNA affected...?", sent: "Albert: How has DNA affected our medicine? Celine: What has changed is our ability to cure diseases.", trans: "<span style='color:#0077b6'>(Como o DNA afetou nossa medicina?)</span>" },
                        { term: "What is known about...?", sent: "Albert: What is known about the early humans? Celine: Has there been an evolution in their tools?", trans: "<span style='color:#0077b6'>(O que se sabe sobre os primeiros humanos?)</span>" },
                        { term: "We have not... yet", sent: "Albert: We have not found a solution yet. Celine: We need to keep searching.", trans: "<span style='color:#0077b6'>(Nós ainda não encontramos uma solução.)</span>" },
                        { term: "I have just learned", sent: "Albert: I have just learned about mutations. Celine: It's a fascinating topic, isn't it?", trans: "<span style='color:#0077b6'>(Acabei de aprender sobre mutações.)</span>" },
                        { term: "Have you ever...?", sent: "Albert: Have you ever seen a real fossil? Celine: Have you already visited the museum?", trans: "<span style='color:#0077b6'>(Você já viu um fóssil real?)</span>" },
                        { term: "I've never seen...", sent: "Albert: I've never seen such a large bone! Celine: It must belong to a whale.", trans: "<span style='color:#0077b6'>(Eu nunca vi um osso tão grande!)</span>" }
                    ]
                }
            ],

            // 2C: Simple MCQ Drill
            drills: [
                // Exercise 1: Verbs (MCQ)
                {
                    type: "mcq",
                    q: "Choose the correct translation for the verb 'To Discover':",
                    options: [
                        { t: "Desenvolver", c: false },
                        { t: "Descobrir", c: true },
                        { t: "Estudar", c: false },
                        { t: "Mudar", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct translation for the verb 'To Evolve':",
                    options: [
                        { t: "Evoluir", c: true },
                        { t: "Afetar", c: false },
                        { t: "Permitir", c: false },
                        { t: "Entender", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct translation for the verb 'To Modify':",
                    options: [
                        { t: "Descobrir", c: false },
                        { t: "Desenvolver", c: false },
                        { t: "Modificar", c: true },
                        { t: "Experimentar", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct translation for the verb 'To Allow':",
                    options: [
                        { t: "Mudar", c: false },
                        { t: "Estudar", c: false },
                        { t: "Compreender", c: false },
                        { t: "Permitir", c: true }
                    ]
                },

                // Exercise 2: Vocabularies (MCQ)
                {
                    type: "mcq",
                    q: "Which term refers to the hereditary information in our cells?",
                    options: [
                        { t: "Fossil", c: false },
                        { t: "DNA", c: true },
                        { t: "Extinction", c: false },
                        { t: "Adaptation", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What do we call a change in the genetic code?",
                    options: [
                        { t: "Species", c: false },
                        { t: "Ancestor", c: false },
                        { t: "Mutation", c: true },
                        { t: "Biodiversity", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What is the process where the best-adapted individuals survive?",
                    options: [
                        { t: "Natural selection", c: true },
                        { t: "Extinction", c: false },
                        { t: "Mutation", c: false },
                        { t: "Genetic code", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What is it called when a whole species dies out completely?",
                    options: [
                        { t: "Evolution", c: false },
                        { t: "Extinction", c: true },
                        { t: "Trait", c: false },
                        { t: "Gene", c: false }
                    ]
                },

                // Exercise 3: Expressions (Matching)
                {
                    type: "matching",
                    instruction: "Match the phrase with its correct meaning.",
                    pairs: [
                        { left: "I have just learned", right: "Aconteceu recentemente", val: "1" },
                        { left: "For millions of years", right: "Um longo período de tempo", val: "2" },
                        { left: "Evidence shows that", right: "Baseado em fatos provados", val: "3" },
                        { left: "We have not... yet", right: "Algo que ainda vai acontecer", val: "4" }
                    ]
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