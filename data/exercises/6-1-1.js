/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */

window.initExercise({
    id: "ex-template",
    grade: "Grade Level",
    bimester: "1",
    chapter: "1",
    title: "Chapter Title",

    // ==========================================================
    // SIMPLE POOL (1-10)
    // ==========================================================
    simplePool: {
        
        // TYPE 1: UNSCRAMBLE SENTENCES (Required: 40 items)
        1: [
            { words: ["word1", "word2", "word3"], correct: "word1 word2 word3" },
            // ... add 39 more
        ],

        // TYPE 2: UNSCRAMBLE DIALOGUES (Required: 40 items)
        2: [
            { lines: ["Line C", "Line B", "Line A"], order: [2, 1, 0] },
            // ... add 39 more
        ],

        // TYPE 3: QUICK QUESTIONS (Required: 40 items)
        3: [
            { q: "Is the sun hot?", options: ["Yes", "No"], a: "Yes" },
            // ... add 39 more
        ],

        // TYPE 4: FIND MEANING (Required: 40 items)
        4: [
            { sent: "The [word] is here.", word: "word", options: ["Option A", "Option B"], a: "Option A", def: "Dictionary definition here." },
            // ... add 39 more
        ],

        // TYPE 5: CORRECT THE SENTENCE (Required: 40 items)
        5: [
            { sent: "He **go** to school.", correct: "goes" },
            // ... add 39 more
        ],

        // TYPE 6: MATCH SENTENCES (Required: 40 sets of 5 pairs each)
        6: [
            { 
                pairs: [
                    { a: "Left 1", b: "Right 1" },
                    { a: "Left 2", b: "Right 2" },
                    { a: "Left 3", b: "Right 3" },
                    { a: "Left 4", b: "Right 4" },
                    { a: "Left 5", b: "Right 5" }
                ] 
            },
            // ... add 39 more sets
        ],

        // TYPE 7: BEST ANSWER (Required: 40 items)
        7: [
            { q: "How are you?", options: ["I am fine.", "I am blue.", "I am a cat."], a: "I am fine." },
            // ... add 39 more
        ],

        // TYPE 8: INCORRECT VOCABULARY (Required: 40 items)
        8: [
            { sent: "I wear **hats** on my feet.", wrong: "hats", options: ["shoes", "gloves", "socks"], a: "shoes" },
            // ... add 39 more
        ],

        // TYPE 9: LISTEN AND ANSWER (Required: 40 items)
        // Note: 'audio' field is read by TTS
        9: [
            { audio: "Type the full sentence for the computer to speak here.", options: ["Opt A", "Opt B", "Opt C"], a: "Opt A" },
            // ... add 39 more
        ],

        // TYPE 10: COMPLETE SENTENCES (Required: 40 items)
        // Note: 'audio' field is read by TTS. Use '___' in 'sent' for blanks.
        10: [
            { audio: "The full sentence for the computer to speak.", sent: "The ___ sentence for the ___ to speak.", blanks: ["full", "computer"] },
            // ... add 39 more
        ]
    },

    // ==========================================================
    // CONTEXT POOL (11-15)
    // ==========================================================
    contextPool: {

        // TYPE 11: COMPLETE DIALOGUE (Required: 10 items)
        11: [
            {
                title: "Dialogue Title",
                lines: [
                    { speaker: "A", text: "Hello, how ___ you?", options: ["are", "is"], a: "are" },
                    { speaker: "B", text: "I ___ fine.", options: ["am", "are"], a: "am" }
                ]
            },
            // ... add 9 more
        ],

        // TYPE 12: READ AND ANSWER (Required: 10 items)
        12: [
            {
                title: "Reading Title",
                text: "Full reading passage text goes here.",
                questions: [
                    { q: "Question 1?", options: ["A", "B", "C"], a: "A" },
                    { q: "Question 2?", options: ["A", "B", "C"], a: "A" },
                    { q: "Question 3?", options: ["A", "B", "C"], a: "A" },
                    { q: "Question 4?", options: ["A", "B", "C"], a: "A" },
                    { q: "Question 5?", options: ["A", "B", "C"], a: "B" }
                ]
            },
            // ... add 9 more
        ],

        // TYPE 13: LISTEN AND ANSWER (Required: 10 items)
        // Note: 'audio' field contains the full passage text for TTS
        13: [
            {
                title: "Listening Title",
                audio: "The full passage text that the student needs to listen to goes here.",
                questions: [
                    { q: "Question 1?", options: ["A", "B", "C"], a: "A" },
                    { q: "Question 2?", options: ["A", "B", "C"], a: "A" },                  
                    { q: "Question 3?", options: ["A", "B", "C"], a: "B" }
                ]
            },
            // ... add 9 more
        ],

        // TYPE 14: COMPLETE TEXT - SELECTION (Required: 10 items)
        // Use [1], [2], etc. in text. Provide options in (opt/opt).
        14: [
            {
                title: "Text Title",
                text: "This is a [1] (great/bad) template. It [2] (works/fails) well.",
                answers: ["great", "works"]
            },
            // ... add 9 more
        ],

        // TYPE 15: LISTEN AND COMPLETE - TYPING (Required: 10 items)
        // Note: 'audio' field is the script. 'text' field has [1], [2] for gaps.
        15: [
            {
                title: "Listening Completion Title",
                audio: "The full script the computer will speak.",
                text: "The full [1] the [2] will speak.",
                answers: ["script", "computer"]
            },
            // ... add 9 more
        ]
    }
});