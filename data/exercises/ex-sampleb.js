window.initExercise({
    grade: "6th Grade",
    bimester: "1",
    chapter: "1",
    
    // --- SIMPLE TYPES (Pool of 30 items each) ---
    simplePool: {
        // 1. Unscramble Sentences
        1: [
            { words: ["always", "I", "soccer", "play"], correct: "I always play soccer" },
            { words: ["don't", "We", "pizza", "like"], correct: "We don't like pizza" }
            // ... add 28 more
        ],
        // 2. Unscramble Dialogues
        2: [
            { lines: ["I am fine, thanks.", "How are you?", "Hi, John!"], order: [2, 1, 0] }, // Index of lines in correct order
            { lines: ["My name is Paul.", "What is your name?", "Nice to meet you."], order: [1, 0, 2] }
        ],
        // 3. Quick Questions (Mix of Yes/No and short answers)
        3: [
            { q: "Is 'Apple' a fruit?", options: ["Yes", "No"], a: "Yes" },
            { q: "What is 2 + 2?", options: ["3", "4", "5"], a: "4" }
        ],
        // 4. Find Meaning (Highlighted word)
        4: [
            { sent: "She is very **shy**.", word: "shy", options: ["Tímido", "Alto", "Bravo", "Feliz"], a: "Tímido", def: "Nervous or timid in the company of other people." },
            { sent: "I need to **study**.", word: "study", options: ["Comer", "Estudar", "Dormir", "Correr"], a: "Estudar", def: "Devote time to acquiring knowledge." }
        ],
        // 5. Correct the Sentence (Highlighted error)
        5: [
            { sent: "She **don't** like cats.", correct: "doesn't" },
            { sent: "We **is** happy.", correct: "are" }
        ],
        // 6. Match Sentences (5 pairs per item)
        6: [
            { 
                pairs: [
                    { a: "What is your name?", b: "My name is John." },
                    { a: "How old are you?", b: "I am 12." },
                    { a: "Where do you live?", b: "I live in Brazil." },
                    { a: "Do you like red?", b: "Yes, I do." },
                    { a: "Goodbye!", b: "See you later." }
                ]
            }
            // ... add 29 more sets of pairs
        ],
        // 7. Best Answer (WH Questions)
        7: [
            { q: "Where does she live?", options: ["She lives in New York.", "She live in New York.", "She is living New York."], a: "She lives in New York." },
            { q: "When is your birthday?", options: ["In Monday.", "On May 5th.", "At 5 o'clock."], a: "On May 5th." }
        ],
        // 8. Incorrect Vocabulary
        8: [
            { sent: "I play **tennis** in the pool.", wrong: "tennis", options: ["soccer", "swimming", "basketball"], a: "swimming" }, // "swimming" is the logical correction
            { sent: "I eat **soup** with a fork.", wrong: "soup", options: ["steak", "juice", "water"], a: "steak" }
        ],
        // 9. Listen and Answer
        9: [
            { audio: "audio/exercises/q9_1.mp3", q: "What is her favorite color?", options: ["Blue", "Red", "Green"], a: "Red" }
        ],
        // 10. Complete Sentences (Audio + 2 blanks)
        10: [
            { audio: "audio/exercises/q10_1.mp3", sent: "She ___ to the ___ every day.", blanks: ["goes", "park"] }
        ]
    },

    // --- CONTEXT TYPES (Pool of 8 items each) ---
    contextPool: {
        // 11. Complete Dialogue (5 blanks, options in parens)
        11: [
            {
                title: "At the Store",
                lines: [
                    { speaker: "A", text: "Can I ___ you?", options: ["help", "do"], a: "help" },
                    { speaker: "B", text: "Yes, I am ___ for a shirt.", options: ["looking", "watching"], a: "looking" },
                    { speaker: "A", text: "What ___ do you need?", options: ["size", "tall"], a: "size" },
                    { speaker: "B", text: "Medium, ___.", options: ["please", "thanks"], a: "please" },
                    { speaker: "A", text: "Here ___ are.", options: ["you", "we"], a: "you" }
                ]
            }
        ],
        // 12. Read and Answer (Text + 5 MCQs)
        12: [
            {
                title: "My Daily Routine",
                text: "My name is Sarah. I wake up at 6 AM...",
                questions: [
                    { q: "When does she wake up?", options: ["6 AM", "7 AM", "8 AM"], a: "6 AM" },
                    { q: "Who is the text about?", options: ["Sarah", "John", "Mary"], a: "Sarah" }
                    // ... 3 more
                ]
            }
        ],
        // 13. Listen and Answer (Audio + 5 MCQs)
        13: [
            {
                title: "A Phone Call",
                audio: "audio/exercises/ctx13_1.mp3",
                questions: [
                    { q: "Who is calling?", options: ["Mom", "Dad", "Sister"], a: "Mom" },
                    { q: "Where are they going?", options: ["Park", "School", "Mall"], a: "Mall" }
                    // ... 3 more
                ]
            }
        ],
        // 14. Complete Text (5 blanks)
        14: [
            {
                title: "My Dog",
                text: "I have a dog named Rex. He is very [1] (big/small). He likes to [2] (play/read) in the garden. He eats [3] (meat/candy) every day. He sleeps in his [4] (bed/chair). I [5] (love/hate) him.",
                answers: ["big", "play", "meat", "bed", "love"]
            }
        ],
        // 15. Listen and Complete Text (5 blanks, no options shown, pure listening)
        15: [
            {
                title: "The Weekend",
                audio: "audio/exercises/ctx15_1.mp3",
                text: "Last weekend I went to the [1]. It was very [2]. We ate [3]. We saw a [4]. It cost [5] dollars.",
                answers: ["beach", "hot", "pizza", "movie", "ten"]
            }
        ]
    }
});