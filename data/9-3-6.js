/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "INSERT_FILENAME_HERE", // Must match filename exactly (no .js)
    grade: "High School 1st Grade",   // e.g., "High School 1st Grade"
    bimester: "INSERT_NUMBER_HERE",   // e.g., "1"
    chapter: "INSERT_NUMBER_HERE",    // e.g., "2"
    chapterTitle: "INSERT_CHAPTER_TITLE_HERE", // e.g., "Innovation"
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            // Use <br> for line breaks
            objectives: "• INSERT_OBJECTIVE_1 <br>• INSERT_OBJECTIVE_2",
            welcome: "INSERT_WELCOME_MESSAGE",
            audio: {
                // Use "TTS: text..." for text-to-speech
                objectives: "TTS: INSERT_OBJECTIVES_TEXT_HERE",
                welcome: "TTS: INSERT_WELCOME_TEXT_HERE"
            }
        },

        // ======================================================
        // STEP 1: WHAT'S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            // Tooltip Syntax: [Word](tooltip:glossary-key)
            context: "INSERT_CONTEXT_DESCRIPTION", 
            contextAudio: "audio/INSERT_ID/step1.mp3",
            dialogue: [
                { 
                    speaker: "INSERT_NAME_A", 
                    text: "Hello! [Word](tooltip:key) is highlighted." 
                },
                { 
                    speaker: "INSERT_NAME_B", 
                    text: "INSERT_DIALOGUE_TEXT" 
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
                    title: "INSERT_TAB_TITLE_1", // e.g., "Verbs"
                    audio: "TTS: INSERT_LIST_OF_WORDS_HERE",
                    items: [
                        { term: "INSERT_WORD", trans: "INSERT_TRANSLATION" },
                        { term: "INSERT_WORD", trans: "INSERT_TRANSLATION" }
                    ]
                },
                {
                    title: "INSERT_TAB_TITLE_2",
                    audio: "TTS: ...",
                    items: []
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            // Use <span style='color:#0077b6'> for blue translations
            exampleGroups: [
                {
                    title: "INSERT_TAB_TITLE_1", // Matches Area 1
                    audio: "TTS: INSERT_SENTENCES_AUDIO_HERE",
                    items: [
                        { 
                            term: "INSERT_WORD", 
                            sent: "INSERT_SENTENCE_HERE", 
                            trans: "<span style='color:#0077b6'>INSERT_TRANSLATION</span>" 
                        }
                    ]
                },
                {
                    title: "INSERT_TAB_TITLE_2",
                    audio: "TTS: ...",
                    items: []
                }
            ],

            // 2C: Simple MCQ Drill
            drills: [
                { 
                    type: "mcq", 
                    q: "INSERT_QUESTION_HERE", 
                    options: [ 
                        {t: "Wrong Answer", c: false}, 
                        {t: "Right Answer", c: true} 
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