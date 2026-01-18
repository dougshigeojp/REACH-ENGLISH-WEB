/**
 * REACH English - UNIVERSAL TEST DATA: sample.js
 * Use this to check all UI elements, scrolling, and logic.
 */

window.initLesson({
    lessonId: "sample",
    grade: "EXAMPLE grade",
    bimester: "X",
    chapter: "X",
    chapterTitle: "Example lesson title",
    
    steps: [
        // STEP 0: UNIT COVER
        {
            title: "Unit Cover",
            objectives: "Objective list ______ comes here. <br>• Point 1 ______ comes here.<br>• Point 2 ______ comes here.",
            welcome: "Welcome message from Mr. D ______ comes here. This box should have a play/pause button at the top right.",
            audio: {
                objectives: "audio/sample/p0_objectives.mp3",
                welcome: "audio/sample/p0_welcome.mp3 || TTS: Welcome from Mr.D... Welcome message from Mr. D comes here. This box should have a play or pause button at the top right."
            }
        },

        // STEP 1: WHAT'S UP TODAY? (Testing Tooltips)
        {
            title: "What’s up today?",
            context: "Contextual description ______ comes here. Testing the [Hello](tooltip:hello-key) tooltip and the [Dialogue](tooltip:dialogue-key) tooltip.",
            contextAudio: "audio/sample/p1_context.mp3",
            dialogue: [
                { speaker: "Speaker A", text: "Dialogue line 1 ______ comes here with a [Tooltip](tooltip:dialogue-key)." },
                { speaker: "Speaker B", text: "Dialogue line 2 ______ comes here. Testing the link to [Glossary](tooltip:glossary-key)." }
            ]
        },

        // STEP 2: SAY THE WORD (Testing Sub-nav and Areas)
        {
            title: "Say the word",
            audio2b: "audio/sample/p2b_examples.mp3", // Test sub-page audio
            subPages: [
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],
            areas: [
                {
                    title: "Verbs Area",
                    audio: "audio/sample/p2a_verbs.mp3",
                    items: [
                        { term: "Verb 1", trans: "Translation ______ comes here" },
                        { term: "Verb 2", trans: "Translation ______ comes here" }
                    ]
                },
                {
                    title: "Vocabulary Area",
                    audio: "audio/sample/p2a_vocab.mp3",
                    items: [
                        { term: "Noun 1", trans: "Translation ______ comes here" },
                        { term: "Noun 2", trans: "Translation ______ comes here" }
                    ]
                }
            ],
            examples: [
                { term: "Verb 1", sent: "Example sentence 1 ______ comes here.", trans: "Translation ______ comes here." },
                { term: "Noun 1", sent: "Example sentence 2 ______ comes here.", trans: "Translation ______ comes here." }
            ],
            drills: [
                { type: "mcq", q: "Practice MCQ 1 ______ comes here?", options: [ {t:"Incorrect", c:false}, {t:"Correct Answer", c:true} ] }
            ]
        },

        // STEP 3: FOLLOW THE PATTERN
        {
            title: "Follow the Pattern",
            audio3b: "audio/sample/p3b_dialogue.mp3",
            subPages: [
                { id: "step3a", label: "3A: Patterns" },
                { id: "step3b", label: "3B: Examples" },
                { id: "step3c", label: "3C: Practice" }
            ],
            patterns: [
                {
                    title: "Grammar Point 1",
                    explanation: "Explanation ______ comes here. (<i>Portuguese ______ comes here</i>)",
                    samples: [{ en: "English sample", pt: "Portuguese sample" }]
                }
            ],
            dialogueExamples: [
                { speaker: "Teacher", text: "Grammar Dialogue ______ comes here.", pt: "Translation ______ comes here." }
            ],
            grammarDrills: [
                { type: "mcq", q: "Grammar Practice MCQ ______ comes here?", options: [ {t:"Correct", c:true}, {t:"Incorrect", c:false} ] }
            ]
        },

        // STEP 4: SHADOWING
        {
            title: "Can you say that again?",
            sentences: [
                { text: "Shadowing sentence 1 ______ comes here.", audio: "audio/sample/p4_shadow_1.mp3", arrow: "↘" },
                { text: "Shadowing sentence 2 ______ comes here.", audio: "audio/sample/p4_shadow_2.mp3", arrow: "↗" }
            ]
        },

        // STEP 5: LISTENING
        {
            title: "Are you following me?",
            drills: [
                {
                    type: "typing",
                    instruction: "Typing Drill Instruction ______ comes here.",
                    audio: "audio/sample/p5_drill1.mp3",
                    text: "The secret word is [Correct]. Fill in ______ comes here."
                },
                {
                    type: "dropdown",
                    instruction: "Dropdown Drill Instruction ______ comes here.",
                    audio: "audio/sample/p5_drill2.mp3",
                    questions: [
                        { q: "Choose [Option A | Option B].", a: "Option A" }
                    ]
                }
            ]
        },

        // STEP 6: READING (Testing Split View and Independent Scrolling)
        {
            title: "Get the story",
            texts: [
                {
                    title: "Reading Text 1 title comes here",
                    body: "This is the text pane. It should scroll independently.<br><br>Line 1 comes here.<br>Line 2 comes here.<br>Line 3 comes here.<br>Line 4 comes here.<br>Line 5 comes here.<br>Line 6 comes here.<br>Line 7 comes here.<br>Line 8 comes here.<br>Line 9 comes here.<br>Line 10 comes here.",
                    questions: [
                        { q: "Question 1 for Text 1 ______ comes here?", options: [ {t:"Answer 1", c:true}, {t:"Answer 2", c:false} ] },
                        { q: "Question 2 for Text 1 ______ comes here?", options: [ {t:"Answer 1", c:false}, {t:"Answer 2", c:true} ] }
                    ]
                },
                {
                    title: "Reading Text 2 title comes here",
                    body: "Short body for Text 2 ______ comes here.",
                    questions: [
                        { q: "Question 1 for Text 2 ______ comes here?", options: [ {t:"True", c:true}, {t:"False", c:false} ] }
                    ]
                }
            ]
        },

        // STEP 7: QUICK DRILLS (Checking every single type)
        {
            title: "Monkey see, Monkey do",
            drills: [
                {
                    type: "matching",
                    instruction: "Type 1: Matching Column Drill ______ comes here.",
                    pairs: [
                        { left: "Left 1", right: "Right 1", val: "A" },
                        { left: "Left 2", right: "Right 2", val: "B" }
                    ]
                },
                {
                    type: "word-order",
                    instruction: "Type 2: Word Order / Unscramble Drill ______ comes here.",
                    sentence: "Correct / Order / Comes / Here.",
                    correct: "Correct Order Comes Here."
                },
                {
                    type: "odd-one-out",
                    instruction: "Type 3: Odd One Out Drill ______ comes here.",
                    options: [ {t:"Fruit", c:false}, {t:"Fruit", c:false}, {t:"Vegetable", c:true} ]
                },
                {
                    type: "memory-game",
                    instruction: "Type 4: Memory Game Drill ______ comes here.",
                    cards: [
                        { match: "1", text: "Pair A" }, { match: "1", text: "Pair A" },
                        { match: "2", text: "Pair B" }, { match: "2", text: "Pair B" }
                    ]
                },
                {
                    type: "true-false",
                    instruction: "Type 5: True or False",
                    questions: [
                        { text: "Apples are usually blue.", correct: "false" },
                        { text: "Fire is hot.", correct: "true" }
                    ]
                },
               {
    type: "clickable-error",
    instruction: "Type 6: Clickable Error",
    sentence: "They [is](error:are) [a](error:_) very happy today."
},
{
    type: "dialogue-scramble",
    instruction: "Type 7: Put the conversation in the correct order.",
    // The items to be shuffled
    items: [
        "A: Hi, how are you?",
        "B: I'm fine, thanks.",
        "A: That's great to hear!"
    ],
    // The strict correct order (must match items exactly)
    correctOrder: [
        "A: Hi, how are you?",
        "B: I'm fine, thanks.",
        "A: That's great to hear!"
    ]
},
                {
                    type: "multiple-correct",
                    instruction: "Type 8: Multiple Correct",
                    options: [ {t:"Fruit", c:true}, {t:"Rock", c:false}, {t:"Vegetable", c:true} ]
}, // End of multiple-correct
                {
                    type: "categorize",
                    instruction: "Type 9: Categorization (Drag & Drop)",
                    categories: [{id: "fruits", name: "Fruits"}, {id: "colors", name: "Colors"}],
                    items: [
                        {text: "Apple", catId: "fruits"},
                        {text: "Red", catId: "colors"},
                        {text: "Blue", catId: "colors"},
                        {text: "Banana", catId: "fruits"}
                    ]
                },



                // EXAMPLE 1: Typing (Fill in the blanks)
                {
                    type: "typing",
                    instruction: "Type the missing word (Hint: blue).",
                    audio: "audio/sample/p7_drill1.mp3 || TTS: The sky is blue today.",// The word inside [brackets] is the correct answer
                    text: "The sky is [blue] today."
                },

                // EXAMPLE 2: Dropdown
                {
                    type: "dropdown",
                    instruction: "Select the correct option.",
                    questions: [
                        // Options are separated by |, the 'a' field is the correct answer
                        { q: "I [ am | is | are ] a teacher.", a: "am" },
                        { q: "She [ have | has ] a car.", a: "has" }
                    ]
                },

                // EXAMPLE 3: Audio Choice
                {
                    type: "audio-choice",
                    instruction: "Listen and choose the correct word.",
                    audio: "audio/sample/p5_drill1.mp3|| TTS: Apple", // Make sure this file exists
                    options: [
                        { t: "Apple", c: true },  // c: true means correct
                        { t: "Banana", c: false }
                    ]
                }
            ]
        },









        // STEP 8: WRITING
        {
            title: "Tell your story",
            instruction: "Writing instruction ______ comes here.",
            example: "Example writing ______ comes here.",
            prompts: ["Prompt 1 ______ comes here", "Prompt 2 ______ comes here"]
        },

        // STEP 9: FLASHCARDS
{
            title: "Wrap it up",
            items: [
                { 
                    term: "To be", audioFront:"TTS: to be", 
                    definition: "Essential state verb", 
                    defTrans: "Verbo ser/estar", // Row 1
                    example: "I am a student.", audioBack:"TTS: I am a student." , // Row 2
                    exTrans: "Eu sou um estudante." // Row 3
                },
                { 
                    term: "Friend", audioFront:"TTS: Friend", 
                    definition: "A person you like", 
                    defTrans: "Amigo/a", 
                    example: "Albert is my friend.", 
                    exTrans: "Albert é meu amigo." 
                },
                { 
                    term: "Car", audioFront:"TTS: car",
                    definition: "A vehicle", 
                    example: "I drive a car.",
                    // Only the back button will appear (reading the definition)
                    audioBack: "TTS: A vehicle. I drive a car." 
                },
                { 
                    term: "Quiet", 
                    definition: "No sound", 
                    example: "Be quiet.",
                    audioFront: "TTS: quiet",
                    audioBack: "TTS: be quiet." 
                },
                { 
                    term: "House", 
                    definition: "A place to live", 
                    example: "My house is big.",
                    // Front uses MP3, Back uses TTS
                    audioFront: "TTS: .......House",
                    audioBack: "TTS: ....My house is big." 
                }
            ]
        }
    ],

    // UNIT GLOSSARY
    glossary: [
        { term: "hello-key", definition: "Definition for Hello ______ comes here." },
        { term: "dialogue-key", definition: "Definition for Dialogue ______ comes here." },
        { term: "glossary-key", definition: "Definition for Glossary ______ comes here." }
    ]
});