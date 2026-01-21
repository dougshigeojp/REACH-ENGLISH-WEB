/**
 * REACH English - LESSON DATA TEMPLATE
 * 1. Rename this file to match your lesson ID (e.g., "6-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "INSERT_FILENAME_HERE", // Must match filename exactly (no .js)
    grade: "INSERT_GRADE_HERE",       // e.g., "6th Grade"
    bimester: "INSERT_NUMBER_HERE",   // e.g., "1"
    chapter: "INSERT_NUMBER_HERE",    // e.g., "2"
    chapterTitle: "INSERT_CHAPTER_TITLE_HERE", // e.g., "My Family"
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            // You can use <br> for new lines
            objectives: "• INSERT_OBJECTIVE_1_HERE <br>• INSERT_OBJECTIVE_2_HERE",
            welcome: "INSERT_WELCOME_MESSAGE_HERE",
            audio: {
                // Use "TTS: Text..." OR "audio/folder/file.mp3"
                objectives: "TTS: INSERT_OBJECTIVES_AUDIO_TEXT_HERE",
                welcome: "TTS: INSERT_WELCOME_AUDIO_TEXT_HERE"
            }
        },

        // ======================================================
        // STEP 1: WHAT'S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            // Tooltip Syntax: [Word](tooltip:glossary-key)
            context: "INSERT_CONTEXT_TEXT_HERE", 
            contextAudio: "TTS: INSERT_CONTEXT_AUDIO_HERE",
            dialogue: [
                { speaker: "INSERT_NAME_A", text: "INSERT_DIALOGUE_TEXT_HERE" },
                { speaker: "INSERT_NAME_B", text: "INSERT_DIALOGUE_TEXT_HERE" }
            ]
        },

        // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
        // ======================================================
        {
            title: "Say the word",
            // Audio for the "Examples" page (2B)
            audio2b: "TTS: INSERT_AUDIO_FOR_EXAMPLES_PAGE_HERE",
            
            // DO NOT CHANGE THESE IDs
            subPages: [
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],

            // 2A: Vocabulary Lists
            areas: [
                {
                    title: "INSERT_GROUP_TITLE_HERE", // e.g., "Verbs"
                    audio: "TTS: INSERT_AUDIO_HERE",
                    items: [
                        { term: "INSERT_WORD_HERE", trans: "INSERT_TRANSLATION_HERE" },
                        { term: "INSERT_WORD_HERE", trans: "INSERT_TRANSLATION_HERE" }
                    ]
                }
            ],

            // 2B: Context Examples
            examples: [
                { 
                    term: "INSERT_WORD_HERE", 
                    sent: "INSERT_SENTENCE_HERE", 
                    trans: "INSERT_TRANSLATION_HERE" 
                }
            ],

            // 2C: Simple MCQ Drill
            drills: [
                { 
                    type: "mcq", 
                    q: "INSERT_QUESTION_HERE", 
                    options: [ 
                        {t: "INSERT_WRONG_ANSWER", c: false}, 
                        {t: "INSERT_RIGHT_ANSWER", c: true} 
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 3: FOLLOW THE PATTERN (Grammar)
        // ======================================================
        {
            title: "Follow the Pattern",
            audio3b: "TTS: INSERT_AUDIO_FOR_DIALOGUE_PAGE_HERE",
            
            subPages: [
                { id: "step3a", label: "3A: Patterns" },
                { id: "step3b", label: "3B: Examples" },
                { id: "step3c", label: "3C: Practice" }
            ],

            // 3A: Explanations
            patterns: [
                {
                    title: "INSERT_GRAMMAR_TOPIC_HERE",
                    explanation: "INSERT_EXPLANATION_HERE",
                    samples: [
                        { en: "INSERT_ENGLISH_EXAMPLE", pt: "INSERT_PORTUGUESE_EXAMPLE" }
                    ]
                }
            ],

            // 3B: Short Dialogues
            dialogueExamples: [
                { speaker: "A", text: "INSERT_TEXT_HERE", pt: "INSERT_TRANSLATION_HERE" },
                { speaker: "B", text: "INSERT_TEXT_HERE", pt: "INSERT_TRANSLATION_HERE" }
            ],

            // 3C: Grammar MCQ
            grammarDrills: [
                { 
                    type: "mcq", 
                    q: "INSERT_QUESTION_HERE", 
                    options: [ 
                        {t: "INSERT_RIGHT_ANSWER", c: true}, 
                        {t: "INSERT_WRONG_ANSWER", c: false} 
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
                    text: "INSERT_SENTENCE_HERE", 
                    audio: "TTS: INSERT_SENTENCE_HERE", 
                    arrow: "↘" // Use ↘ or ↗
                },
                { 
                    text: "INSERT_SENTENCE_HERE", 
                    audio: "TTS: INSERT_SENTENCE_HERE", 
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
                // TYPE: TYPING (Fill in the blank)
                {
                    type: "typing",
                    instruction: "INSERT_INSTRUCTION_HERE",
                    audio: "TTS: INSERT_FULL_SENTENCE_AUDIO_HERE",
                    // The word in brackets [] is the answer
                    text: "The sky is [blue] today."
                },
                // TYPE: DROPDOWN
                {
                    type: "dropdown",
                    instruction: "INSERT_INSTRUCTION_HERE",
                    audio: "TTS: INSERT_AUDIO_HERE",
                    questions: [
                        // Options separated by | . 'a' is the correct answer.
                        { q: "Choose [Option A | Option B].", a: "Option A" }
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
                    title: "INSERT_TEXT_TITLE_HERE",
                    // Use <br> for paragraphs
                    body: "INSERT_LONG_TEXT_HERE",
                    questions: [
                        { 
                            q: "INSERT_QUESTION_HERE", 
                            options: [ 
                                {t:"INSERT_ANSWER_A", c:true}, 
                                {t:"INSERT_ANSWER_B", c:false} 
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
                // --- COPY AND PASTE DRILL BLOCKS BELOW AS NEEDED ---

                // TYPE: MATCHING
                /*
                {
                    type: "matching",
                    instruction: "Match the pairs.",
                    pairs: [
                        { left: "INSERT_LEFT", right: "INSERT_RIGHT", val: "A" },
                        { left: "INSERT_LEFT", right: "INSERT_RIGHT", val: "B" }
                    ]
                },
                */

                // TYPE: WORD ORDER
                /*
                {
                    type: "word-order",
                    instruction: "Unscramble the sentence.",
                    sentence: "is / name / My / John",
                    correct: "My name is John"
                },
                */

                // TYPE: CLICKABLE ERROR
                /*
                {
                    type: "clickable-error",
                    instruction: "Find the mistake.",
                    // Syntax: [WrongWord](error:RightWord)
                    sentence: "He [go](error:goes) to school."
                },
                */

                // TYPE: TRUE OR FALSE
                /*
                {
                    type: "true-false",
                    instruction: "True or False?",
                    questions: [
                        { text: "INSERT_STATEMENT_HERE", correct: "true" },
                        { text: "INSERT_STATEMENT_HERE", correct: "false" }
                    ]
                },
                */

                // TYPE: DIALOGUE SCRAMBLE
                /*
                {
                    type: "dialogue-scramble",
                    instruction: "Order the conversation.",
                    items: ["Line 2", "Line 1"],
                    correctOrder: ["Line 1", "Line 2"]
                },
                */
               
               // TYPE: CATEGORIZE (Drag & Drop)
               /*
               {
                    type: "categorize",
                    instruction: "Sort the items.",
                    categories: [{id: "cat1", name: "Category 1"}, {id: "cat2", name: "Category 2"}],
                    items: [
                        {text: "Item A", catId: "cat1"},
                        {text: "Item B", catId: "cat2"}
                    ]
               }
               */
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "INSERT_INSTRUCTION_HERE",
            example: "INSERT_EXAMPLE_TEXT_HERE",
            prompts: [
                "INSERT_PROMPT_1_HERE",
                "INSERT_PROMPT_2_HERE"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                { 
                    term: "INSERT_TERM_HERE", 
                    definition: "INSERT_DEFINITION_HERE", 
                    defTrans: "INSERT_DEF_TRANSLATION_HERE",
                    example: "INSERT_EXAMPLE_SENTENCE_HERE", 
                    exTrans: "INSERT_EX_TRANSLATION_HERE",
                    // Use "TTS: text" or "audio/file.mp3"
                    audioFront: "TTS: INSERT_TERM_HERE",
                    audioBack: "TTS: INSERT_EXAMPLE_SENTENCE_HERE" 
                },
                // Copy block above for more cards
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (For Tooltips)
    // ======================================================
    glossary: [
        { term: "glossary-key", definition: "INSERT_DEFINITION_HERE" }
    ]
});