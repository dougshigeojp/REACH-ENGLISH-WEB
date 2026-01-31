window.initExercise({
    id: "ex-6-1-1",
    title: "Daily Routines & Simple Present",
    grade: "6th Grade",
    instructions: "Complete the exercises to test your knowledge of daily habits.",
    config: {
        passScore: 70, // Percent needed to pass
        shuffle: true  // Randomize question order
    },
    questions: [
        {
            type: "mcq",
            q: "I ______ up at 7:00 AM every day.",
            options: [
                { t: "wakes", c: false },
                { t: "wake", c: true },
                { t: "waking", c: false }
            ]
        },
        {
            type: "mcq",
            q: "She ______ breakfast in the kitchen.",
            options: [
                { t: "eats", c: true },
                { t: "eat", c: false },
                { t: "eating", c: false }
            ]
        },
        {
            type: "word-order",
            q: "Arrange the sentence:",
            correct: "They do not play soccer on Mondays",
            words: ["They", "play", "not", "do", "soccer", "on", "Mondays"]
        },
        {
            type: "true-false",
            q: "Is this sentence correct? <br><em>'He don't like pizza.'</em>",
            correct: "false" // because it should be "doesn't"
        },
        {
            type: "fill-blank",
            q: "My brother [watch/watches] TV after school.",
            answer: "watches"
        }
    ]
});