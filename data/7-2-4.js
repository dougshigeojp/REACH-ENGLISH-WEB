/**
 * REACH English - LESSON DATA 7-2-4
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "7-2-4", 
    grade: "7th Grade",       
    bimester: "2",   
    chapter: "4",    
    chapterTitle: "Movie Time", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Talk about movies and cinema.<br>• Identify movie genres (comedy, horror, action).<br>• Describe movies using adjectives (funny, scary, boring).<br>• Use the Simple Past tense (Regular and Irregular verbs).<br>• Ask and answer questions about past events (\"Did you watch...?\").",
            welcome: "Hello, Movie Stars! It's Mr. D!<br><br>Welcome to \"Movie Time\"! Do you like popcorn and great stories? Today, we are going to the cinema! We will learn how to talk about our favorite movies, describe what we watched, and say if we liked it or not. We will also become time travelers by mastering the Simple Past tense to tell stories about yesterday, last week, and last year. Lights, camera, action!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about movies and cinema. Identify movie genres like comedy, horror, and action. Describe movies using adjectives like funny, scary, and boring. Use the Simple Past tense with regular and irregular verbs. And ask and answer questions about past events.",
                welcome: "TTS: Hello, Movie Stars! It's Mr. D! Welcome to Movie Time! Do you like popcorn and great stories? Today, we are going to the cinema! We will learn how to talk about our favorite movies, describe what we watched, and say if we liked it or not. We will also become time travelers by mastering the Simple Past tense to tell stories about yesterday, last week, and last year. Lights, camera, action!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Albert and Celine are walking out of a movie theater. Sound of people leaving and popcorn crunching.", 
            contextAudio: "audio/7-2-4/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "That movie was [amazing](tooltip:amazing)! Did you like it, Celine?" 
                },
                { 
                    speaker: "Celine", 
                    text: "Yes, I [liked](tooltip:liked) it a lot. The [special effects](tooltip:special-effects) were [cool](tooltip:cool)." 
                },
                { 
                    speaker: "Albert", 
                    text: "I [thought](tooltip:thought) it was a bit [scary](tooltip:scary)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Scary? No way! It was an [action](tooltip:action) movie, not a [horror](tooltip:horror) movie." 
                },
                { 
                    speaker: "Albert", 
                    text: "Well, I [ate](tooltip:ate) all my popcorn because I was [nervous](tooltip:nervous)!" 
                },
                { 
                    speaker: "Celine", 
                    text: "Haha. I [drank](tooltip:drank) all my [soda](tooltip:soda). Let's go home now." 
                },
                { 
                    speaker: "Albert", 
                    text: "Okay. I [bought](tooltip:bought) the [tickets](tooltip:ticket) [last time](tooltip:last-time), so you buy the snacks [next time](tooltip:next-time)!" 
                }
            ]
        },

        // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
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
                    title: "Verbs (Present - Past)",
                    audio: "TTS: Watch - Watched. Go - Went. See - Saw. Eat - Ate. Drink - Drank. Buy - Bought. Like - Liked. Love - Loved. Hate - Hated. Cry - Cried. Laugh - Laughed. Make - Made. Think - Thought. Say - Said. Read - Read.",
                    items: [
                        { term: "Watch - Watched", trans: "Assistir - Assistiu" },
                        { term: "Go - Went", trans: "Ir - Foi" },
                        { term: "See - Saw", trans: "Ver - Viu" },
                        { term: "Eat - Ate", trans: "Comer - Comeu" },
                        { term: "Drink - Drank", trans: "Beber - Bebeu" },
                        { term: "Buy - Bought", trans: "Comprar - Comprou" },
                        { term: "Like - Liked", trans: "Gostar - Gostou" },
                        { term: "Love - Loved", trans: "Amar - Amou" },
                        { term: "Hate - Hated", trans: "Odiar - Odiou" },
                        { term: "Cry - Cried", trans: "Chorar - Chorou" },
                        { term: "Laugh - Laughed", trans: "Rir - Riu" },
                        { term: "Make - Made", trans: "Fazer - Fez" },
                        { term: "Think - Thought", trans: "Pensar / Achar - Pensou / Achou" },
                        { term: "Say - Said", trans: "Dizer - Disse" },
                        { term: "Read - Read", trans: "Ler - Leu" }
                    ]
                },
                {
                    title: "Movie Vocabulary",
                    audio: "TTS: Movie or Film. Cinema or Movie Theater. Screen. Ticket. Popcorn. Soda or Soft drink. Seat. Poster. Actor or Actress. Subtitles. Plot.",
                    items: [
                        { term: "Movie / Film", trans: "Filme" },
                        { term: "Cinema / Movie Theater", trans: "Cinema" },
                        { term: "Screen", trans: "Tela / Telão" },
                        { term: "Ticket", trans: "Ingresso" },
                        { term: "Popcorn", trans: "Pipoca" },
                        { term: "Soda / Soft drink", trans: "Refrigerante" },
                        { term: "Seat", trans: "Assento / Poltrona" },
                        { term: "Poster", trans: "Cartaz" },
                        { term: "Actor / Actress", trans: "Ator / Atriz" },
                        { term: "Subtitles", trans: "Legendas" },
                        { term: "Plot", trans: "Enredo / História" }
                    ]
                },
                {
                    title: "Movie Genres",
                    audio: "TTS: Comedy. Action. Horror. Sci-Fi. Animation or Cartoon. Drama. Romance. Thriller.",
                    items: [
                        { term: "Comedy", trans: "Comédia" },
                        { term: "Action", trans: "Ação" },
                        { term: "Horror", trans: "Terror" },
                        { term: "Sci-Fi", trans: "Ficção Científica" },
                        { term: "Animation / Cartoon", trans: "Animação / Desenho" },
                        { term: "Drama", trans: "Drama" },
                        { term: "Romance", trans: "Romance" },
                        { term: "Thriller", trans: "Suspense" }
                    ]
                },
                {
                    title: "Adjectives (Describing Movies)",
                    audio: "TTS: Good. Bad. Funny. Scary. Boring. Exciting. Sad. Interesting. Great.",
                    items: [
                        { term: "Good", trans: "Bom" },
                        { term: "Bad", trans: "Ruim" },
                        { term: "Funny", trans: "Engraçado" },
                        { term: "Scary", trans: "Assustador" },
                        { term: "Boring", trans: "Chato / Entediante" },
                        { term: "Exciting", trans: "Empolgante" },
                        { term: "Sad", trans: "Triste" },
                        { term: "Interesting", trans: "Interessante" },
                        { term: "Great", trans: "Ótimo" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Let's go to the movies. I watched... It was... Did you like it?",
                    items: [
                        { term: "Let's go to the movies", trans: "Vamos ao cinema" },
                        { term: "I watched...", trans: "Eu assisti..." },
                        { term: "It was...", trans: "Foi..." },
                        { term: "Did you like it?", trans: "Você gostou?" }
                    ]
                }
            ], // This closes the areas array

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Verbs (Present - Past)",
                    audio: "TTS: I watched TV yesterday. He went to the park. We saw a good film. She ate popcorn. They drank soda. I bought the tickets. We liked the animation. She loved the actor. He hated the ending. I cried at the end. We laughed a lot. The director made a great movie. I thought it was funny. He said it was good. I read the subtitles.",
                    items: [
                        { term: "Watched", sent: "I watched TV yesterday.", trans: "<span style='color:#0077b6'>Eu assisti TV ontem.</span>" },
                        { term: "Went", sent: "He went to the park.", trans: "<span style='color:#0077b6'>Ele foi ao parque.</span>" },
                        { term: "Saw", sent: "We saw a good film.", trans: "<span style='color:#0077b6'>Nós vimos um bom filme.</span>" },
                        { term: "Ate", sent: "She ate popcorn.", trans: "<span style='color:#0077b6'>Ela comeu pipoca.</span>" },
                        { term: "Drank", sent: "They drank soda.", trans: "<span style='color:#0077b6'>Eles beberam refrigerante.</span>" },
                        { term: "Bought", sent: "I bought the tickets.", trans: "<span style='color:#0077b6'>Eu comprei os ingressos.</span>" },
                        { term: "Liked", sent: "We liked the animation.", trans: "<span style='color:#0077b6'>Nós gostamos da animação.</span>" },
                        { term: "Loved", sent: "She loved the actor.", trans: "<span style='color:#0077b6'>Ela amou o ator.</span>" },
                        { term: "Hated", sent: "He hated the ending.", trans: "<span style='color:#0077b6'>Ele odiou o final.</span>" },
                        { term: "Cried", sent: "I cried at the end.", trans: "<span style='color:#0077b6'>Eu chorei no final.</span>" },
                        { term: "Laughed", sent: "We laughed a lot.", trans: "<span style='color:#0077b6'>Nós rimos muito.</span>" },
                        { term: "Made", sent: "The director made a great movie.", trans: "<span style='color:#0077b6'>O diretor fez um ótimo filme.</span>" },
                        { term: "Thought", sent: "I thought it was funny.", trans: "<span style='color:#0077b6'>Eu achei que foi engraçado.</span>" },
                        { term: "Said", sent: "He said it was good.", trans: "<span style='color:#0077b6'>Ele disse que foi bom.</span>" },
                        { term: "Read", sent: "I read the subtitles.", trans: "<span style='color:#0077b6'>Eu li as legendas.</span>" }
                    ]
                },
                {
                    title: "Movie Vocabulary",
                    audio: "TTS: This movie is famous. The cinema is full. The screen is huge. One ticket, please. Popcorn is salty. I want a soda. My seat is G4. Look at that movie poster. He is a famous actor. The subtitles are in English. The plot was confusing.",
                    items: [
                        { term: "Movie", sent: "This movie is famous.", trans: "<span style='color:#0077b6'>Este filme é famoso.</span>" },
                        { term: "Cinema", sent: "The cinema is full.", trans: "<span style='color:#0077b6'>O cinema está cheio.</span>" },
                        { term: "Screen", sent: "The screen is huge.", trans: "<span style='color:#0077b6'>A tela é enorme.</span>" },
                        { term: "Ticket", sent: "One ticket, please.", trans: "<span style='color:#0077b6'>Um ingresso, por favor.</span>" },
                        { term: "Popcorn", sent: "Popcorn is salty.", trans: "<span style='color:#0077b6'>A pipoca é salgada.</span>" },
                        { term: "Soda", sent: "I want a soda.", trans: "<span style='color:#0077b6'>Eu quero um refrigerante.</span>" },
                        { term: "Seat", sent: "My seat is G4.", trans: "<span style='color:#0077b6'>Meu assento é G4.</span>" },
                        { term: "Poster", sent: "Look at that movie poster.", trans: "<span style='color:#0077b6'>Olhe aquele cartaz de filme.</span>" },
                        { term: "Actor", sent: "He is a famous actor.", trans: "<span style='color:#0077b6'>Ele é um ator famoso.</span>" },
                        { term: "Subtitles", sent: "The subtitles are in English.", trans: "<span style='color:#0077b6'>As legendas são em inglês.</span>" },
                        { term: "Plot", sent: "The plot was confusing.", trans: "<span style='color:#0077b6'>O enredo estava confuso.</span>" }
                    ]
                },
                {
                    title: "Movie Genres",
                    audio: "TTS: I love comedy. Action movies are fast. Horror movies are scary. Sci-Fi has aliens. Animation is fun. Drama makes me cry. It is a lovely romance. The thriller was intense.",
                    items: [
                        { term: "Comedy", sent: "I love comedy.", trans: "<span style='color:#0077b6'>Eu amo comédia.</span>" },
                        { term: "Action", sent: "Action movies are fast.", trans: "<span style='color:#0077b6'>Filmes de ação são rápidos.</span>" },
                        { term: "Horror", sent: "Horror movies are scary.", trans: "<span style='color:#0077b6'>Filmes de terror são assustadores.</span>" },
                        { term: "Sci-Fi", sent: "Sci-Fi has aliens.", trans: "<span style='color:#0077b6'>Ficção científica tem alienígenas.</span>" },
                        { term: "Animation", sent: "Animation is fun.", trans: "<span style='color:#0077b6'>Animação é divertido.</span>" },
                        { term: "Drama", sent: "Drama makes me cry.", trans: "<span style='color:#0077b6'>Drama me faz chorar.</span>" },
                        { term: "Romance", sent: "It is a lovely romance.", trans: "<span style='color:#0077b6'>É um romance adorável.</span>" },
                        { term: "Thriller", sent: "The thriller was intense.", trans: "<span style='color:#0077b6'>O suspense foi intenso.</span>" }
                    ]
                },
                {
                    title: "Adjectives (Describing Movies)",
                    audio: "TTS: The film was good. The acting was bad. It was very funny. The monster was scary. The story was boring. The end was exciting. It was a sad story. The documentary was interesting. We had a great time.",
                    items: [
                        { term: "Good", sent: "The film was good.", trans: "<span style='color:#0077b6'>O filme foi bom.</span>" },
                        { term: "Bad", sent: "The acting was bad.", trans: "<span style='color:#0077b6'>A atuação foi ruim.</span>" },
                        { term: "Funny", sent: "It was very funny.", trans: "<span style='color:#0077b6'>Foi muito engraçado.</span>" },
                        { term: "Scary", sent: "The monster was scary.", trans: "<span style='color:#0077b6'>O monstro era assustador.</span>" },
                        { term: "Boring", sent: "The story was boring.", trans: "<span style='color:#0077b6'>A história era chata.</span>" },
                        { term: "Exciting", sent: "The end was exciting.", trans: "<span style='color:#0077b6'>O final foi empolgante.</span>" },
                        { term: "Sad", sent: "It was a sad story.", trans: "<span style='color:#0077b6'>Foi uma história triste.</span>" },
                        { term: "Interesting", sent: "The documentary was interesting.", trans: "<span style='color:#0077b6'>O documentário foi interessante.</span>" },
                        { term: "Great", sent: "We had a great time.", trans: "<span style='color:#0077b6'>Nós nos divertimos muito.</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Let's go to the movies tonight. I watched Frozen. It was amazing. Did you like it? Yes, I did.",
                    items: [
                        { term: "Let's go...", sent: "Let's go to the movies tonight.", trans: "<span style='color:#0077b6'>Vamos ao cinema hoje à noite.</span>" },
                        { term: "I watched...", sent: "I watched Frozen.", trans: "<span style='color:#0077b6'>Eu assisti Frozen.</span>" },
                        { term: "It was...", sent: "It was amazing.", trans: "<span style='color:#0077b6'>Foi incrível.</span>" },
                        { term: "Did you like...?", sent: "\"Did you like it?\" \"Yes, I did.\"", trans: "<span style='color:#0077b6'>\"Você gostou?\" \"Sim, gostei.\"</span>" }
                    ]
                }
            ], // Closes exampleGroups

            // 2C: Practice Drills (Expanded to 24 exercises, 4 alternatives each)
            drills: [
                {
                    type: "mcq",
                    q: "What is the past of 'Go'?",
                    options: [
                        { t: "Goed", c: false }, { t: "Gone", c: false },
                        { t: "Went", c: true }, { t: "Goin", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What is the past of 'Watch'?",
                    options: [
                        { t: "Watchd", c: false }, { t: "Watching", c: false },
                        { t: "Watched", c: true }, { t: "Wrotch", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I _______ popcorn yesterday.'",
                    options: [
                        { t: "eat", c: false }, { t: "eated", c: false },
                        { t: "ate", c: true }, { t: "eating", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A movie with ghosts and monsters is...",
                    options: [
                        { t: "Comedy", c: false }, { t: "Horror", c: true },
                        { t: "Romance", c: false }, { t: "Animation", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A movie that makes you laugh is...",
                    options: [
                        { t: "Drama", c: false }, { t: "Sci-Fi", c: false },
                        { t: "Comedy", c: true }, { t: "Thriller", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The movie was not interesting. It was...",
                    options: [
                        { t: "Exciting", c: false }, { t: "Boring", c: true },
                        { t: "Great", c: false }, { t: "Funny", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The movie made me cry. It was...",
                    options: [
                        { t: "Funny", c: false }, { t: "Sad", c: true },
                        { t: "Happy", c: false }, { t: "Boring", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You buy this to enter the cinema:",
                    options: [
                        { t: "Screen", c: false }, { t: "Ticket", c: true },
                        { t: "Seat", c: false }, { t: "Poster", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You read these at the bottom of the screen:",
                    options: [
                        { t: "Actors", c: false }, { t: "Popcorn", c: false },
                        { t: "Subtitles", c: true }, { t: "Cameras", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: '_______ you like the movie?'",
                    options: [
                        { t: "Do", c: false }, { t: "Does", c: false },
                        { t: "Did", c: true }, { t: "Are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'She _______ a new car.' (Buy)",
                    options: [
                        { t: "buyed", c: false }, { t: "bought", c: true },
                        { t: "brought", c: false }, { t: "buying", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A person who acts in a movie is an...",
                    options: [
                        { t: "Director", c: false }, { t: "Actor", c: true },
                        { t: "Ticket", c: false }, { t: "Screen", c: false }
                    ]
                },
                // 2C: Practice Drills (Part 2: 13-24)
                {
                    type: "mcq",
                    q: "A movie about love and relationships is a...",
                    options: [
                        { t: "Thriller", c: false },
                        { t: "Romance", c: true },
                        { t: "Action", c: false },
                        { t: "Horror", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The movie was full of energy and surprises. It was...",
                    options: [
                        { t: "Boring", c: false },
                        { t: "Sad", c: false },
                        { t: "Exciting", c: true },
                        { t: "Bad", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What is the past tense of 'See'?",
                    options: [
                        { t: "Seed", c: false },
                        { t: "Seen", c: false },
                        { t: "Saw", c: true },
                        { t: "Sawn", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I am thirsty. I want a _______.'",
                    options: [
                        { t: "Popcorn", c: false },
                        { t: "Soda", c: true },
                        { t: "Ticket", c: false },
                        { t: "Poster", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A movie about space, aliens, and the future is...",
                    options: [
                        { t: "Comedy", c: false },
                        { t: "Romance", c: false },
                        { t: "Sci-Fi", c: true },
                        { t: "Drama", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past tense for 'Drink':",
                    options: [
                        { t: "Drinked", c: false },
                        { t: "Drank", c: true },
                        { t: "Drunk", c: false },
                        { t: "Dronk", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Where do you sit in the cinema?",
                    options: [
                        { t: "On the screen", c: false },
                        { t: "In the plot", c: false },
                        { t: "On a seat", c: true },
                        { t: "On a poster", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The documentary was very good. It was _______.",
                    options: [
                        { t: "Bad", c: false },
                        { t: "Great", c: true },
                        { t: "Scary", c: false },
                        { t: "Boring", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What is the past tense of 'Read'?",
                    options: [
                        { t: "Readed", c: false },
                        { t: "Read (pronounced red)", c: true },
                        { t: "Road", c: false },
                        { t: "Reading", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A large picture used to advertise a movie is a...",
                    options: [
                        { t: "Poster", c: true },
                        { t: "Subtitles", c: false },
                        { t: "Seat", c: false },
                        { t: "Popcorn", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A movie genre that is serious and emotional is...",
                    options: [
                        { t: "Animation", c: false },
                        { t: "Comedy", c: false },
                        { t: "Drama", c: true },
                        { t: "Action", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What is the past tense of 'Think'?",
                    options: [
                        { t: "Thinked", c: false },
                        { t: "Thank", c: false },
                        { t: "Thought", c: true },
                        { t: "Throught", c: false }
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
                    title: "Regular Verbs (+ed)",
                    audio: "TTS: For regular verbs in the past, we usually add ed. Watch becomes watched. Like becomes liked. Study becomes studied. Stop becomes stopped.",
                    explanation: "We use the Simple Past for actions that started and finished in the past. For regular verbs, we add <b>-ed</b>. <br><br><span style='color:#0077b6; font-style:italic;'>(Usamos o Passado Simples para ações que começaram e terminaram no passado. Para verbos regulares, adicionamos -ed.)</span>",
                    samples: [
                        { en: "General: watch -> watched / play -> played", pt: "<span style='color:#0077b6'>Regra Geral (+ed)</span>" },
                        { en: "Ending in 'e': like -> liked / love -> loved", pt: "<span style='color:#0077b6'>Terminados em 'e' (+d)</span>" },
                        { en: "Consonant + y: study -> studied / cry -> cried", pt: "<span style='color:#0077b6'>Consoante + 'y' (-y +ied)</span>" },
                        { en: "CVC: stop -> stopped / plan -> planned", pt: "<span style='color:#0077b6'>Consoante-Vogal-Consoante (Dobrar letra +ed)</span>" }
                    ]
                },
                {
                    title: "Irregular Verbs",
                    audio: "TTS: Many common verbs are irregular. They change completely and you must memorize them. Go becomes went. See becomes saw. Eat becomes ate. Buy becomes bought.",
                    explanation: "Irregular verbs do not follow the -ed rule. They change their form completely. <br><br><span style='color:#0077b6; font-style:italic;'>(Verbos irregulares não seguem a regra do -ed. Eles mudam sua forma completamente.)</span>",
                    samples: [
                        { en: "go -> went / see -> saw", pt: "<span style='color:#0077b6'>ir -> foi / ver -> viu</span>" },
                        { en: "eat -> ate / drink -> drank", pt: "<span style='color:#0077b6'>comer -> comeu / beber -> bebeu</span>" },
                        { en: "buy -> bought / have -> had", pt: "<span style='color:#0077b6'>comprar -> comprou / ter -> teve</span>" },
                        { en: "make -> made / think -> thought", pt: "<span style='color:#0077b6'>fazer -> fez / pensar -> pensou</span>" }
                    ]
                },
                {
                    title: "Negative Form",
                    audio: "TTS: To make negative sentences, use didn't plus the base form of the verb. I didn't watch TV. You didn't go out. He didn't like it.",
                    explanation: "Use <b>didn't</b> (did not) + the <b>BASE FORM</b> of the verb. Do not use the past form after didn't. <br><br><span style='color:#0077b6; font-style:italic;'>(Use 'didn't' + a FORMA BASE do verbo. Não use a forma passada depois de 'didn't'.)</span>",
                    samples: [
                        { en: "I didn't watch TV. (NOT: didn't watched)", pt: "<span style='color:#0077b6'>Eu não assisti TV.</span>" },
                        { en: "You didn't go out. (NOT: didn't went)", pt: "<span style='color:#0077b6'>Você não saiu.</span>" },
                        { en: "She didn't see him.", pt: "<span style='color:#0077b6'>Ela não o viu.</span>" },
                        { en: "They didn't eat lunch.", pt: "<span style='color:#0077b6'>Eles não almoçaram.</span>" }
                    ]
                },
                {
                    title: "Interrogative Form",
                    audio: "TTS: To ask questions, put Did before the subject and use the base form of the verb. Did you watch it? Did he go? Did she cry?",
                    explanation: "Put <b>Did</b> before the subject and keep the verb in the <b>BASE FORM</b>. <br><br><span style='color:#0077b6; font-style:italic;'>(Coloque 'Did' antes do sujeito e mantenha o verbo na FORMA BASE.)</span>",
                    samples: [
                        { en: "Did you watch the movie? -> Yes, I did.", pt: "<span style='color:#0077b6'>Você assistiu ao filme? -> Sim, assisti.</span>" },
                        { en: "Did he go to the park? -> No, he didn't.", pt: "<span style='color:#0077b6'>Ele foi ao parque? -> Não, não foi.</span>" },
                        { en: "Did they win the game?", pt: "<span style='color:#0077b6'>Eles ganharam o jogo?</span>" },
                        { en: "Did Celine like the popcorn?", pt: "<span style='color:#0077b6'>A Celine gostou da pipoca?</span>" }
                    ]
                },
                {
                    title: "TO BE in the Past",
                    audio: "TTS: The verb To Be is special. It does not use did. It changes to was or were. I was happy. They were tired. The movie was good.",
                    explanation: "The verb 'to be' is special. It does not use 'did'. It changes to <b>was</b> or <b>were</b>. <br><br><span style='color:#0077b6; font-style:italic;'>(O verbo 'to be' é especial. Ele não usa 'did'. Ele muda para 'was' ou 'were'.)</span>",
                    samples: [
                        { en: "I / He / She / It -> was / wasn't", pt: "<span style='color:#0077b6'>era / estava</span>" },
                        { en: "You / We / They -> were / weren't", pt: "<span style='color:#0077b6'>eram / estávamos</span>" },
                        { en: "The movie was good.", pt: "<span style='color:#0077b6'>O filme estava bom.</span>" },
                        { en: "They were happy.", pt: "<span style='color:#0077b6'>Eles estavam felizes.</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Regular Verbs",
                    audio: "audio/7-2-4/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "I watched a documentary yesterday.", 
                            pt: "<span style='color:#0077b6'>Eu assisti um documentário ontem.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Really? I played video games all day.", 
                            pt: "<span style='color:#0077b6'>Sério? Eu joguei videogame o dia todo.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Irregular Verbs",
                    audio: "audio/7-2-4/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Did you go to the cinema last weekend?", 
                            pt: "<span style='color:#0077b6'>Você foi ao cinema no fim de semana passado?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes. I went with my brother. We saw a comedy.", 
                            pt: "<span style='color:#0077b6'>Sim. Eu fui com meu irmão. Nós vimos uma comédia.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Negative Form",
                    audio: "audio/7-2-4/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Did you eat the popcorn?", 
                            pt: "<span style='color:#0077b6'>Você comeu a pipoca?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, I didn't eat it. I didn't like the taste.", 
                            pt: "<span style='color:#0077b6'>Não, eu não comi. Eu não gostei do gosto.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 4: To Be (Past)",
                    audio: "audio/7-2-4/step3_dialogue4.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Was the movie scary?", 
                            pt: "<span style='color:#0077b6'>O filme foi assustador?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "No, it wasn't. It was funny. The actors were great!", 
                            pt: "<span style='color:#0077b6'>Não, não foi. Foi engraçado. Os atores foram ótimos!</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice (Part 1: 1-12)
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Regular - Affirmative: Complete: 'We _______ (watch) a movie last night.'",
                    options: [
                        { t: "watch", c: false },
                        { t: "watching", c: false },
                        { t: "watched", c: true },
                        { t: "watches", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Irregular - Affirmative: Complete: 'She _______ (go) to the park yesterday.'",
                    options: [
                        { t: "goed", c: false },
                        { t: "go", c: false },
                        { t: "went", c: true },
                        { t: "goes", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative Form: 'I _______ (not/like) the horror movie.'",
                    options: [
                        { t: "no liked", c: false },
                        { t: "didn't liked", c: false },
                        { t: "didn't like", c: true },
                        { t: "not like", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Interrogative Form: '_______ (you/see) the new film?'",
                    options: [
                        { t: "Did you saw", c: false },
                        { t: "Do you see", c: false },
                        { t: "Did you see", c: true },
                        { t: "Saw you", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Short Answer: 'Did they eat popcorn?' 'Yes, _______.'",
                    options: [
                        { t: "they did", c: true },
                        { t: "they ate", c: false },
                        { t: "they do", c: false },
                        { t: "they didn't", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling Rules: What is the past of 'Study'?",
                    options: [
                        { t: "Studyed", c: false },
                        { t: "Studied", c: true },
                        { t: "Studyd", c: false },
                        { t: "Studies", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Irregular Verbs: Choose the correct past form of 'Buy':",
                    options: [
                        { t: "Buyed", c: false },
                        { t: "Bought", c: true },
                        { t: "Brought", c: false },
                        { t: "Buying", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To Be - Past: 'The tickets _______ expensive.'",
                    options: [
                        { t: "was", c: false },
                        { t: "did", c: false },
                        { t: "were", c: true },
                        { t: "are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Mixed Sentence: 'He _______ (drink) soda, but he _______ (not/eat) candy.'",
                    options: [
                        { t: "drinked / no eat", c: false },
                        { t: "drank / didn't eat", c: true },
                        { t: "drunk / didn't ate", c: false },
                        { t: "drank / not ate", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Subject Nouns: '_______ (Celine) cry at the end of the movie?'",
                    options: [
                        { t: "Did Celine", c: true },
                        { t: "Does Celine", c: false },
                        { t: "Was Celine", c: false },
                        { t: "Celine did", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling Rules (CVC): What is the past of 'Stop'?",
                    options: [
                        { t: "Stoped", c: false },
                        { t: "Stoppied", c: false },
                        { t: "Stopped", c: true },
                        { t: "Stopping", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Irregular Verbs: What is the past of 'Make'?",
                    options: [
                        { t: "Maked", c: false },
                        { t: "Made", c: true },
                        { t: "Mad", c: false },
                        { t: "Makes", c: false }
                    ]
                },
                // 3C: Grammar Practice (Part 2: 13-24)
                {
                    type: "mcq",
                    q: "Regular - Affirmative: 'We _______ (play) a fun video game yesterday.'",
                    options: [
                        { t: "play", c: false },
                        { t: "playied", c: false },
                        { t: "played", c: true },
                        { t: "plaied", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative Form: 'He _______ (not/watch) the thriller movie.'",
                    options: [
                        { t: "didn't watch", c: true },
                        { t: "don't watch", c: false },
                        { t: "didn't watched", c: false },
                        { t: "not watch", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Irregular Verbs: 'They _______ (see) a famous actor at the cinema.'",
                    options: [
                        { t: "seed", c: false },
                        { t: "saw", c: true },
                        { t: "seen", c: false },
                        { t: "see", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To Be - Past: 'The movie _______ very boring.'",
                    options: [
                        { t: "were", c: false },
                        { t: "did", c: false },
                        { t: "was", c: true },
                        { t: "is", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Interrogative Form: '_______ they arrive at the cinema on time?'",
                    options: [
                        { t: "Was", c: false },
                        { t: "Did", c: true },
                        { t: "Were", c: false },
                        { t: "Are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling Rules (Ending in 'e'): 'She _______ (love) the animation.'",
                    options: [
                        { t: "loved", c: true },
                        { t: "loveed", c: false },
                        { t: "loves", c: false },
                        { t: "loving", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Irregular Verbs: 'I _______ (think) the plot was great.'",
                    options: [
                        { t: "thinked", c: false },
                        { t: "thought", c: true },
                        { t: "thanks", c: false },
                        { t: "thinks", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To Be - Past (Plural): 'Celine and Albert _______ nervous during the horror film.'",
                    options: [
                        { t: "was", c: false },
                        { t: "am", c: false },
                        { t: "were", c: true },
                        { t: "did", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Short Answer: 'Did you like the popcorn?' 'No, I _______.'",
                    options: [
                        { t: "didn't", c: true },
                        { t: "don't", c: false },
                        { t: "wasn't", c: false },
                        { t: "did", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Irregular Verbs: 'The bird _______ (fly) away yesterday.'",
                    options: [
                        { t: "flyed", c: false },
                        { t: "flow", c: false },
                        { t: "flew", c: true },
                        { t: "flown", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative To Be: 'The seats _______ comfortable.'",
                    options: [
                        { t: "wasn't", c: false },
                        { t: "didn't", c: false },
                        { t: "weren't", c: true },
                        { t: "aren't", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Past of Invent: 'Who _______ (invent) the telephone?'",
                    options: [
                        { t: "invents", c: false },
                        { t: "inventing", c: false },
                        { t: "invented", c: true },
                        { t: "invent", c: false }
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
                    text: "I watched a movie yesterday.<br><small style='color:#0077b6'>(Eu assisti um filme ontem.)</small>", 
                    audio: "TTS: I watched a movie yesterday.", 
                    arrow: "↘" 
                },
                { 
                    text: "Did you like it?<br><small style='color:#0077b6'>(Você gostou?)</small>", 
                    audio: "TTS: Did you like it?", 
                    arrow: "↗" 
                },
                { 
                    text: "It was very funny.<br><small style='color:#0077b6'>(Foi muito engraçado.)</small>", 
                    audio: "TTS: It was very funny.", 
                    arrow: "↘" 
                },
                { 
                    text: "We went to the cinema.<br><small style='color:#0077b6'>(Nós fomos ao cinema.)</small>", 
                    audio: "TTS: We went to the cinema.", 
                    arrow: "↘" 
                },
                { 
                    text: "Was it scary?<br><small style='color:#0077b6'>(Foi assustador?)</small>", 
                    audio: "TTS: Was it scary?", 
                    arrow: "↗" 
                },
                { 
                    text: "She bought the tickets.<br><small style='color:#0077b6'>(Ela comprou os ingressos.)</small>", 
                    audio: "TTS: She bought the tickets.", 
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
                    instruction: "Listen to Albert talking about his movie night and type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre sua noite de cinema e digite as palavras que faltam.)</small>",
                    audio: "TTS: Last night, I watched a comedy. It was hilarious. I ate a lot of popcorn!",
                    text: "Last night, I [watched] a comedy. It [was] hilarious. I [ate] a lot of popcorn!"
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue and choose the correct option.<br><small style='color:#0077b6'>(Ouça o diálogo e escolha a opção correta.)</small>",
                    audio: "audio/7-2-4/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Celine: Did you [go | watch] to the cinema on Saturday?", 
                            a: "go" 
                        },
                        { 
                            q: "Albert: Yes, I [went | go] with my brother.", 
                            a: "went" 
                        },
                        { 
                            q: "Celine: What did you [see | saw]?", 
                            a: "see" 
                        },
                        { 
                            q: "Albert: We saw an [action | horror] movie. It was exciting.", 
                            a: "action" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer.<br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta correta.)</small>",
                    audio: "TTS: Did you buy the tickets?",
                    options: [
                        { t: "Yes, I did.", c: true },
                        { t: "No, I wasn't.", c: false },
                        { t: "I bought popcorn.", c: false },
                        { t: "Yes, it was.", c: false }
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
                    title: "My First Horror Movie",
                    audio: "TTS: When I was ten years old, I watched my first horror movie. I went to the cinema with my big sister. I bought a big soda and some candy. The movie was about a ghost in an old house. It was very scary! I closed my eyes many times. My sister laughed, but I screamed. I didn't like it at all. Now, I prefer comedies. || audio/7-2-4/p6_text1.mp3",
                    body: "When I was ten years old, I watched my first horror movie. I went to the cinema with my big sister. I bought a big soda and some candy. The movie was about a ghost in an old house. It was very scary! I closed my eyes many times. My sister laughed, but I screamed. I didn't like it at all. Now, I prefer comedies.",
                    questions: [
                        { 
                            q: "What genre was the movie?", 
                            options: [ 
                                {t: "Comedy", c: false}, 
                                {t: "Action", c: false}, 
                                {t: "Horror", c: true}, 
                                {t: "Romance", c: false} 
                            ] 
                        },
                        { 
                            q: "How did the writer feel?", 
                            options: [ 
                                {t: "Happy", c: false}, 
                                {t: "Scared", c: true}, 
                                {t: "Bored", c: false}, 
                                {t: "Excited", c: false} 
                            ] 
                        },
                        { 
                            q: "What did the writer do during the movie?", 
                            options: [ 
                                {t: "He laughed.", c: false}, 
                                {t: "He slept.", c: false}, 
                                {t: "He screamed.", c: true}, 
                                {t: "He left.", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "The Boring Film",
                    audio: "audio/7-2-4/p6_text2.mp3",
                    body: "<b>Albert:</b> Did you watch that new sci-fi movie?<br><b>Celine:</b> Yes, I watched it yesterday.<br><b>Albert:</b> Was it good?<br><b>Celine:</b> No, it wasn't. It was terrible! The plot was boring and the actors were bad.<br><b>Albert:</b> Really? I thought it was exciting.<br><b>Celine:</b> I nearly slept in the cinema. It was a waste of money.",
                    questions: [
                        { 
                            q: "What genre was the movie?", 
                            options: [ 
                                {t: "Sci-Fi", c: true}, 
                                {t: "Drama", c: false}, 
                                {t: "Comedy", c: false}, 
                                {t: "Animation", c: false} 
                            ] 
                        },
                        { 
                            q: "Did Celine like the movie?", 
                            options: [ 
                                {t: "Yes, she did.", c: false}, 
                                {t: "No, she didn't.", c: true}, 
                                {t: "She thought it was exciting.", c: false}, 
                                {t: "She loved the actors.", c: false} 
                            ] 
                        },
                        { 
                            q: "What did Celine almost do?", 
                            options: [ 
                                {t: "Leave", c: false}, 
                                {t: "Cry", c: false}, 
                                {t: "Sleep", c: true}, 
                                {t: "Eat", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "The Old Cinema",
                    audio: "TTS: There was an old cinema in my town called 'The Grand'. It was a beautiful building. It had a huge screen and comfortable red seats. The tickets were cheap, only five dollars. They sold the best popcorn in the city. Families went there every weekend. Sadly, it closed last year. Now, we watch movies on tablets at home. || audio/7-2-4/p6_text3.mp3",
                    body: "There was an old cinema in my town called \"The Grand\". It was a beautiful building. It had a huge screen and comfortable red seats. The tickets were cheap, only five dollars. They sold the best popcorn in the city. Families went there every weekend. Sadly, it closed last year. Now, we watch movies on tablets at home.",
                    questions: [
                        { 
                            q: "What was the name of the cinema?", 
                            options: [ 
                                {t: "The Big Screen", c: false}, 
                                {t: "The Grand", c: true}, 
                                {t: "The City Theater", c: false}, 
                                {t: "The Movie House", c: false} 
                            ] 
                        },
                        { 
                            q: "Were the tickets expensive?", 
                            options: [ 
                                {t: "Yes, they were.", c: false}, 
                                {t: "No, they were cheap.", c: true}, 
                                {t: "They were free.", c: false}, 
                                {t: "They were 50 dollars.", c: false} 
                            ] 
                        },
                        { 
                            q: "What did they sell there?", 
                            options: [ 
                                {t: "Pizza", c: false}, 
                                {t: "Soda only", c: false}, 
                                {t: "The best popcorn", c: true}, 
                                {t: "Ice cream", c: false} 
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
                // Drill 1: Matching
                {
                    type: "matching",
                    instruction: "Match the movie genre with a common adjective used to describe it.<br><small style='color:#0077b6'>(Combine o gênero do filme com um adjetivo comum usado para descrevê-lo.)</small>",
                    pairs: [
                        { left: "Comedy", right: "Funny", val: "1" },
                        { left: "Horror", right: "Scary", val: "2" },
                        { left: "Action", right: "Exciting", val: "3" },
                        { left: "Drama", right: "Sad", val: "4" }
                    ]
                },
                // Drill 2: Word Order
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "movie / watched / I / great / a / .",
                    correct: "I watched a great movie ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "you / Did / like / plot / the / ?",
                    correct: "Did you like the plot ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "was / The / boring / film / .",
                    correct: "The film was boring ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "go / didn't / We / yesterday / .",
                    correct: "We didn't go yesterday ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Watched", c: false },
                        { t: "Played", c: false },
                        { t: "Liked", c: false },
                        { t: "Went", c: true } // Irregular
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Comedy", c: false },
                        { t: "Horror", c: false },
                        { t: "Action", c: false },
                        { t: "Popcorn", c: true } // Food
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Funny", c: false },
                        { t: "Scary", c: false },
                        { t: "Boring", c: false },
                        { t: "Movie", c: true } // Noun
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Ticket", c: false },
                        { t: "Screen", c: false },
                        { t: "Seat", c: false },
                        { t: "Sing", c: true } // Verb
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.<br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "I [went | did | didn't | was] to the mall yesterday.", a: "went" },
                        { q: "[Did | went | didn't | was] you see the film?", a: "Did" },
                        { q: "No, I [didn't | went | did | was] watch it.", a: "didn't" },
                        { q: "It [was | went | did | didn't] very funny.", a: "was" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: The last movie you watched. Now it's your turn! Write about the last movie you watched.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: O último filme que você assistiu. Agora é a sua vez! Escreva sobre o último filme que você assistiu.)</span></small>",
            example: "\"I watched 'Spider-Man'. It is an action movie. I watched it at home with my brother. It was great because the special effects were amazing!\"<br><br><small><span style='color:#0077b6'>(\"Eu assisti 'Homem-Aranha'. É um filme de ação. Eu assisti em casa com meu irmão. Foi ótimo porque os efeitos especiais foram incríveis!\")</span></small>",
            prompts: [
                "What was the movie? <br><small><span style='color:#0077b6'>(Qual foi o filme?)</span></small>",
                "What genre was it? (Comedy, Action, Horror...) <br><small><span style='color:#0077b6'>(Qual era o gênero? Comédia, Ação, Terror...)</span></small>",
                "Where did you watch it? (Cinema, Home, TV...) <br><small><span style='color:#0077b6'>(Onde você assistiu? Cinema, Casa, TV...)</span></small>",
                "Did you like it? Why? <br><small><span style='color:#0077b6'>(Você gostou? Por quê?)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Verbs Present-Past)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                { 
                    term: "Watch - Watched", 
                    definition: "To look at or observe attentively over a period of time.", 
                    defTrans: "Assistir - Assistiu",
                    example: "I watched a movie yesterday.", 
                    audioFront: "TTS: Watch, Watched",
                    audioBack: "TTS: I watched a movie yesterday." 
                },
                { 
                    term: "Go - Went", 
                    definition: "To move from one place to another.", 
                    defTrans: "Ir - Foi",
                    example: "She went to the cinema.", 
                    audioFront: "TTS: Go, Went",
                    audioBack: "TTS: She went to the cinema." 
                },
                { 
                    term: "See - Saw", 
                    definition: "To perceive with the eyes; discern visually.", 
                    defTrans: "Ver - Viu",
                    example: "We saw the new film.", 
                    audioFront: "TTS: See, Saw",
                    audioBack: "TTS: We saw the new film." 
                },
                { 
                    term: "Eat - Ate", 
                    definition: "To put food into the mouth and swallow it.", 
                    defTrans: "Comer - Comeu",
                    example: "He ate all the popcorn.", 
                    audioFront: "TTS: Eat, Ate",
                    audioBack: "TTS: He ate all the popcorn." 
                },
                { 
                    term: "Drink - Drank", 
                    definition: "To take a liquid into the mouth and swallow it.", 
                    defTrans: "Beber - Bebeu",
                    example: "I drank a soda.", 
                    audioFront: "TTS: Drink, Drank",
                    audioBack: "TTS: I drank a soda." 
                },
                { 
                    term: "Buy - Bought", 
                    definition: "To obtain in exchange for payment.", 
                    defTrans: "Comprar - Comprou",
                    example: "They bought the tickets online.", 
                    audioFront: "TTS: Buy, Bought",
                    audioBack: "TTS: They bought the tickets online." 
                },
                { 
                    term: "Like - Liked", 
                    definition: "To find agreeable, enjoyable, or satisfactory.", 
                    defTrans: "Gostar - Gostou",
                    example: "I liked the plot.", 
                    audioFront: "TTS: Like, Liked",
                    audioBack: "TTS: I liked the plot." 
                },
                { 
                    term: "Love - Loved", 
                    definition: "To feel deep affection for or enjoy very much.", 
                    defTrans: "Amar - Amou",
                    example: "She loved the main actor.", 
                    audioFront: "TTS: Love, Loved",
                    audioBack: "TTS: She loved the main actor." 
                },
                { 
                    term: "Hate - Hated", 
                    definition: "To feel intense or passionate dislike for.", 
                    defTrans: "Odiar - Odiou",
                    example: "He hated the ending.", 
                    audioFront: "TTS: Hate, Hated",
                    audioBack: "TTS: He hated the ending." 
                },
                { 
                    term: "Cry - Cried", 
                    definition: "To shed tears, typically as an expression of distress or pain.", 
                    defTrans: "Chorar - Chorou",
                    example: "I cried at the end.", 
                    audioFront: "TTS: Cry, Cried",
                    audioBack: "TTS: I cried at the end." 
                },
                { 
                    term: "Laugh - Laughed", 
                    definition: "To make spontaneous sounds expressing amusement.", 
                    defTrans: "Rir - Riu",
                    example: "We laughed at the comedy.", 
                    audioFront: "TTS: Laugh, Laughed",
                    audioBack: "TTS: We laughed at the comedy." 
                },
                { 
                    term: "Make - Made", 
                    definition: "To form something by putting parts together; create.", 
                    defTrans: "Fazer - Fez",
                    example: "They made a great movie.", 
                    audioFront: "TTS: Make, Made",
                    audioBack: "TTS: They made a great movie." 
                },
                { 
                    term: "Think - Thought", 
                    definition: "To have a particular opinion, belief, or idea.", 
                    defTrans: "Pensar/Achar - Pensou/Achou",
                    example: "I thought it was boring.", 
                    audioFront: "TTS: Think, Thought",
                    audioBack: "TTS: I thought it was boring." 
                },
                { 
                    term: "Say - Said", 
                    definition: "To utter words to convey information.", 
                    defTrans: "Dizer - Disse",
                    example: "He said it was good.", 
                    audioFront: "TTS: Say, Said",
                    audioBack: "TTS: He said it was good." 
                },
                { 
                    term: "Read - Read", 
                    definition: "To look at and comprehend the meaning of written matter.", 
                    defTrans: "Ler - Leu",
                    example: "I read the subtitles.", 
                    audioFront: "TTS: Read, Read",
                    audioBack: "TTS: I read the subtitles." 
                },
                // --- Movie Vocabulary ---
                { 
                    term: "Movie / Film", 
                    definition: "A story or event recorded by a camera as a set of moving images.", 
                    defTrans: "Filme",
                    example: "This movie is famous.", 
                    audioFront: "TTS: Movie or Film",
                    audioBack: "TTS: This movie is famous." 
                },
                { 
                    term: "Cinema", 
                    definition: "A building where movies are shown.", 
                    defTrans: "Cinema",
                    example: "The cinema is full.", 
                    audioFront: "TTS: Cinema",
                    audioBack: "TTS: The cinema is full." 
                },
                { 
                    term: "Screen", 
                    definition: "A flat panel on which images and data are displayed.", 
                    defTrans: "Tela / Telão",
                    example: "The screen is huge.", 
                    audioFront: "TTS: Screen",
                    audioBack: "TTS: The screen is huge." 
                },
                { 
                    term: "Ticket", 
                    definition: "A piece of paper giving the holder a right to enter a place.", 
                    defTrans: "Ingresso",
                    example: "Here is my ticket.", 
                    audioFront: "TTS: Ticket",
                    audioBack: "TTS: Here is my ticket." 
                },
                { 
                    term: "Popcorn", 
                    definition: "Maize kernels that swell and burst when heated.", 
                    defTrans: "Pipoca",
                    example: "I love salty popcorn.", 
                    audioFront: "TTS: Popcorn",
                    audioBack: "TTS: I love salty popcorn." 
                },
                { 
                    term: "Soda", 
                    definition: "A sweet, carbonated drink.", 
                    defTrans: "Refrigerante",
                    example: "Do you want a soda?", 
                    audioFront: "TTS: Soda",
                    audioBack: "TTS: Do you want a soda?" 
                },
                { 
                    term: "Seat", 
                    definition: "A thing made or used for sitting on.", 
                    defTrans: "Assento / Poltrona",
                    example: "My seat is in the back row.", 
                    audioFront: "TTS: Seat",
                    audioBack: "TTS: My seat is in the back row." 
                },
                { 
                    term: "Poster", 
                    definition: "A large printed picture used for advertisement.", 
                    defTrans: "Cartaz",
                    example: "Look at that movie poster.", 
                    audioFront: "TTS: Poster",
                    audioBack: "TTS: Look at that movie poster." 
                },
                { 
                    term: "Actor / Actress", 
                    definition: "A person whose profession is acting.", 
                    defTrans: "Ator / Atriz",
                    example: "She is a great actress.", 
                    audioFront: "TTS: Actor, Actress",
                    audioBack: "TTS: She is a great actress." 
                },
                { 
                    term: "Subtitles", 
                    definition: "Captions displayed at the bottom of a movie screen.", 
                    defTrans: "Legendas",
                    example: "I prefer movies with subtitles.", 
                    audioFront: "TTS: Subtitles",
                    audioBack: "TTS: I prefer movies with subtitles." 
                },
                { 
                    term: "Plot", 
                    definition: "The main events of a play, novel, or movie.", 
                    defTrans: "Enredo / História",
                    example: "The plot was confusing.", 
                    audioFront: "TTS: Plot",
                    audioBack: "TTS: The plot was confusing." 
                },

                // --- Movie Genres ---
                { 
                    term: "Comedy", 
                    definition: "A movie intended to make an audience laugh.", 
                    defTrans: "Comédia",
                    example: "We watched a funny comedy.", 
                    audioFront: "TTS: Comedy",
                    audioBack: "TTS: We watched a funny comedy." 
                },
                { 
                    term: "Action", 
                    definition: "A genre typically including violence, fighting, and chases.", 
                    defTrans: "Ação",
                    example: "I like action movies with cars.", 
                    audioFront: "TTS: Action",
                    audioBack: "TTS: I like action movies with cars." 
                },
                { 
                    term: "Horror", 
                    definition: "A film genre that seeks to elicit fear.", 
                    defTrans: "Terror",
                    example: "Horror movies scare me.", 
                    audioFront: "TTS: Horror",
                    audioBack: "TTS: Horror movies scare me." 
                },
                { 
                    term: "Sci-Fi", 
                    definition: "Science fiction; films based on imagined future technology.", 
                    defTrans: "Ficção Científica",
                    example: "Star Wars is Sci-Fi.", 
                    audioFront: "TTS: Sci-Fi",
                    audioBack: "TTS: Star Wars is Sci-Fi." 
                },
                { 
                    term: "Animation", 
                    definition: "A film using drawings or puppets to create movement.", 
                    defTrans: "Animação / Desenho",
                    example: "My favorite animation is Shrek.", 
                    audioFront: "TTS: Animation",
                    audioBack: "TTS: My favorite animation is Shrek." 
                },
                { 
                    term: "Drama", 
                    definition: "A film genre dealing with realistic characters and emotions.", 
                    defTrans: "Drama",
                    example: "It was a serious drama.", 
                    audioFront: "TTS: Drama",
                    audioBack: "TTS: It was a serious drama." 
                },
                { 
                    term: "Romance", 
                    definition: "A film genre focused on love and relationships.", 
                    defTrans: "Romance",
                    example: "They watched a romance.", 
                    audioFront: "TTS: Romance",
                    audioBack: "TTS: They watched a romance." 
                },
                { 
                    term: "Thriller", 
                    definition: "A genre characterized by suspense and excitement.", 
                    defTrans: "Suspense",
                    example: "The thriller was very tense.", 
                    audioFront: "TTS: Thriller",
                    audioBack: "TTS: The thriller was very tense." 
                },
                // --- Adjectives (Describing Movies) ---
                { 
                    term: "Good", 
                    definition: "To be desired or approved of.", 
                    defTrans: "Bom",
                    example: "The film was good.", 
                    audioFront: "TTS: Good",
                    audioBack: "TTS: The film was good." 
                },
                { 
                    term: "Bad", 
                    definition: "Of poor quality or a low standard.", 
                    defTrans: "Ruim",
                    example: "The acting was bad.", 
                    audioFront: "TTS: Bad",
                    audioBack: "TTS: The acting was bad." 
                },
                { 
                    term: "Funny", 
                    definition: "Causing laughter or amusement.", 
                    defTrans: "Engraçado",
                    example: "He is very funny.", 
                    audioFront: "TTS: Funny",
                    audioBack: "TTS: He is very funny." 
                },
                { 
                    term: "Scary", 
                    definition: "Frightening; causing fear.", 
                    defTrans: "Assustador",
                    example: "The ghost was scary.", 
                    audioFront: "TTS: Scary",
                    audioBack: "TTS: The ghost was scary." 
                },
                { 
                    term: "Boring", 
                    definition: "Not interesting; tedious.", 
                    defTrans: "Chato / Entediante",
                    example: "The movie was long and boring.", 
                    audioFront: "TTS: Boring",
                    audioBack: "TTS: The movie was long and boring." 
                },
                { 
                    term: "Exciting", 
                    definition: "Causing great enthusiasm and eagerness.", 
                    defTrans: "Empolgante",
                    example: "The action scenes were exciting.", 
                    audioFront: "TTS: Exciting",
                    audioBack: "TTS: The action scenes were exciting." 
                },
                { 
                    term: "Sad", 
                    definition: "Feeling or showing sorrow; unhappy.", 
                    defTrans: "Triste",
                    example: "It was a sad story.", 
                    audioFront: "TTS: Sad",
                    audioBack: "TTS: It was a sad story." 
                },
                { 
                    term: "Interesting", 
                    definition: "Engaging or exciting and holding the attention.", 
                    defTrans: "Interessante",
                    example: "The documentary was interesting.", 
                    audioFront: "TTS: Interesting",
                    audioBack: "TTS: The documentary was interesting." 
                },
                { 
                    term: "Great", 
                    definition: "Of an extent or intensity considerably above the normal.", 
                    defTrans: "Ótimo",
                    example: "We had a great time.", 
                    audioFront: "TTS: Great",
                    audioBack: "TTS: We had a great time." 
                },

                // --- Phrases & Expressions ---
                { 
                    term: "Let's go to the movies", 
                    definition: "A suggestion to visit the cinema.", 
                    defTrans: "Vamos ao cinema",
                    example: "Let's go to the movies on Friday.", 
                    audioFront: "TTS: Let's go to the movies",
                    audioBack: "TTS: Let's go to the movies on Friday." 
                },
                { 
                    term: "I watched...", 
                    definition: "Stating what you viewed in the past.", 
                    defTrans: "Eu assisti...",
                    example: "I watched TV last night.", 
                    audioFront: "TTS: I watched...",
                    audioBack: "TTS: I watched TV last night." 
                },
                { 
                    term: "It was...", 
                    definition: "Describing something in the past.", 
                    defTrans: "Foi...",
                    example: "It was awesome.", 
                    audioFront: "TTS: It was...",
                    audioBack: "TTS: It was awesome." 
                },
                { 
                    term: "Did you like it?", 
                    definition: "Question asking for an opinion about a past event.", 
                    defTrans: "Você gostou?",
                    example: "I saw a movie. Did you like it?", 
                    audioFront: "TTS: Did you like it?",
                    audioBack: "TTS: I saw a movie. Did you like it?" 
                },

                // --- Grammar Points ---
                { 
                    term: "Simple Past (Regular)", 
                    definition: "Past tense verbs formed by adding -ed.", 
                    defTrans: "Passado Simples (Regular)",
                    example: "I played video games.", 
                    audioFront: "TTS: Simple Past Regular",
                    audioBack: "TTS: I played video games." 
                },
                { 
                    term: "Simple Past (Irregular)", 
                    definition: "Past tense verbs that change form completely.", 
                    defTrans: "Passado Simples (Irregular)",
                    example: "She went home.", 
                    audioFront: "TTS: Simple Past Irregular",
                    audioBack: "TTS: She went home." 
                },
                { 
                    term: "Simple Past (Negative)", 
                    definition: "Using 'did not' (didn't) + base verb.", 
                    defTrans: "Passado Simples (Negativa)",
                    example: "I didn't see it.", 
                    audioFront: "TTS: Simple Past Negative",
                    audioBack: "TTS: I didn't see it." 
                },
                { 
                    term: "Simple Past (Interrogative)", 
                    definition: "Using 'Did' + subject + base verb.", 
                    defTrans: "Passado Simples (Interrogativa)",
                    example: "Did you like the movie?", 
                    audioFront: "TTS: Simple Past Interrogative",
                    audioBack: "TTS: Did you like the movie?" 
                },
                { 
                    term: "Was / Were", 
                    definition: "Past forms of the verb 'to be'.", 
                    defTrans: "Era / Estava / Foi",
                    example: "The movie was funny.", 
                    audioFront: "TTS: Was, Were",
                    audioBack: "TTS: The movie was funny." 
                }
            ]
        }
    ], // This closes the steps array

    // ======================================================
    // GLOSSARY (Part 1: Context, Verbs, Movie Vocab)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "amazing", 
            definition: "Causing great surprise or wonder; astonishing.", 
            translation: "Incrível" 
        },
        { 
            topic: "Context", 
            term: "special-effects", 
            definition: "Illusions or visual tricks used in the film, television, theatre, video game, and simulator industries.", 
            translation: "Efeitos especiais" 
        },
        { 
            topic: "Context", 
            term: "cool", 
            definition: "Fashionable or impressive.", 
            translation: "Legal" 
        },
        { 
            topic: "Context", 
            term: "nervous", 
            definition: "Easily agitated or alarmed; anxious.", 
            translation: "Nervoso(a)" 
        },
        { 
            topic: "Context", 
            term: "last-time", 
            definition: "The previous occasion.", 
            translation: "Da última vez" 
        },
        { 
            topic: "Context", 
            term: "next-time", 
            definition: "The following occasion.", 
            translation: "Na próxima vez" 
        },
        // Note: Other Context words (liked, thought, scary, etc.) are covered in Verbs and Adjectives topics but mapped here for safety if needed, 
        // though the engine searches all topics.

        // --- TOPIC 2: VERBS (Present & Past) ---
        { 
            topic: "Verbs", 
            term: "watch", 
            definition: "To look at or observe attentively.", 
            translation: "Assistir" 
        },
        { 
            topic: "Verbs", 
            term: "watched", 
            definition: "Past form of watch.", 
            translation: "Assistiu / Assistiram" 
        },
        { 
            topic: "Verbs", 
            term: "go", 
            definition: "To move from one place to another.", 
            translation: "Ir" 
        },
        { 
            topic: "Verbs", 
            term: "went", 
            definition: "Past form of go.", 
            translation: "Foi / Foram" 
        },
        { 
            topic: "Verbs", 
            term: "see", 
            definition: "To perceive with the eyes.", 
            translation: "Ver" 
        },
        { 
            topic: "Verbs", 
            term: "saw", 
            definition: "Past form of see.", 
            translation: "Viu / Viram" 
        },
        { 
            topic: "Verbs", 
            term: "eat", 
            definition: "To put food into the mouth and swallow it.", 
            translation: "Comer" 
        },
        { 
            topic: "Verbs", 
            term: "ate", 
            definition: "Past form of eat.", 
            translation: "Comeu / Comeram" 
        },
        { 
            topic: "Verbs", 
            term: "drink", 
            definition: "To take a liquid into the mouth and swallow it.", 
            translation: "Beber" 
        },
        { 
            topic: "Verbs", 
            term: "drank", 
            definition: "Past form of drink.", 
            translation: "Bebeu / Beberam" 
        },
        { 
            topic: "Verbs", 
            term: "buy", 
            definition: "To obtain in exchange for payment.", 
            translation: "Comprar" 
        },
        { 
            topic: "Verbs", 
            term: "bought", 
            definition: "Past form of buy.", 
            translation: "Comprou / Compraram" 
        },
        { 
            topic: "Verbs", 
            term: "like", 
            definition: "To find agreeable or satisfactory.", 
            translation: "Gostar" 
        },
        { 
            topic: "Verbs", 
            term: "liked", 
            definition: "Past form of like.", 
            translation: "Gostou / Gostaram" 
        },
        { 
            topic: "Verbs", 
            term: "love", 
            definition: "To feel deep affection for.", 
            translation: "Amar" 
        },
        { 
            topic: "Verbs", 
            term: "loved", 
            definition: "Past form of love.", 
            translation: "Amou / Amaram" 
        },
        { 
            topic: "Verbs", 
            term: "hate", 
            definition: "To feel intense dislike for.", 
            translation: "Odiar" 
        },
        { 
            topic: "Verbs", 
            term: "hated", 
            definition: "Past form of hate.", 
            translation: "Odiou / Odiaram" 
        },
        { 
            topic: "Verbs", 
            term: "cry", 
            definition: "To shed tears.", 
            translation: "Chorar" 
        },
        { 
            topic: "Verbs", 
            term: "cried", 
            definition: "Past form of cry.", 
            translation: "Chorou / Choraram" 
        },
        { 
            topic: "Verbs", 
            term: "laugh", 
            definition: "To make sounds expressing amusement.", 
            translation: "Rir" 
        },
        { 
            topic: "Verbs", 
            term: "laughed", 
            definition: "Past form of laugh.", 
            translation: "Riu / Riram" 
        },
        { 
            topic: "Verbs", 
            term: "make", 
            definition: "To form or create.", 
            translation: "Fazer" 
        },
        { 
            topic: "Verbs", 
            term: "made", 
            definition: "Past form of make.", 
            translation: "Fez / Fizeram" 
        },
        { 
            topic: "Verbs", 
            term: "think", 
            definition: "To have a particular opinion.", 
            translation: "Pensar / Achar" 
        },
        { 
            topic: "Verbs", 
            term: "thought", 
            definition: "Past form of think.", 
            translation: "Pensou / Achou" 
        },
        { 
            topic: "Verbs", 
            term: "say", 
            definition: "To utter words.", 
            translation: "Dizer" 
        },
        { 
            topic: "Verbs", 
            term: "said", 
            definition: "Past form of say.", 
            translation: "Disse / Disseram" 
        },
        { 
            topic: "Verbs", 
            term: "read", 
            definition: "To look at and comprehend written matter.", 
            translation: "Ler" 
        },
        // 'Read' past is spelled the same but pronounced differently, managed in audio/context

        // --- TOPIC 3: MOVIE VOCABULARY ---
        { 
            topic: "Movie Vocab", 
            term: "movie", 
            definition: "A story recorded by a camera.", 
            translation: "Filme" 
        },
        { 
            topic: "Movie Vocab", 
            term: "film", 
            definition: "Synonym for movie.", 
            translation: "Filme" 
        },
        { 
            topic: "Movie Vocab", 
            term: "cinema", 
            definition: "A place where movies are shown.", 
            translation: "Cinema" 
        },
        { 
            topic: "Movie Vocab", 
            term: "screen", 
            definition: "A flat panel where images are displayed.", 
            translation: "Tela / Telão" 
        },
        { 
            topic: "Movie Vocab", 
            term: "ticket", 
            definition: "Paper giving right to enter.", 
            translation: "Ingresso" 
        },
        { 
            topic: "Movie Vocab", 
            term: "popcorn", 
            definition: "Snack made from corn.", 
            translation: "Pipoca" 
        },
        { 
            topic: "Movie Vocab", 
            term: "soda", 
            definition: "Sweet carbonated drink.", 
            translation: "Refrigerante" 
        },
        { 
            topic: "Movie Vocab", 
            term: "seat", 
            definition: "Something to sit on.", 
            translation: "Assento / Poltrona" 
        },
        { 
            topic: "Movie Vocab", 
            term: "poster", 
            definition: "Large printed picture for advertisement.", 
            translation: "Cartaz" 
        },
        { 
            topic: "Movie Vocab", 
            term: "actor", 
            definition: "Person who acts in a movie.", 
            translation: "Ator" 
        },
        { 
            topic: "Movie Vocab", 
            term: "actress", 
            definition: "Female person who acts in a movie.", 
            translation: "Atriz" 
        },
        { 
            topic: "Movie Vocab", 
            term: "subtitles", 
            definition: "Captions at the bottom of the screen.", 
            translation: "Legendas" 
        },
        { 
            topic: "Movie Vocab", 
            term: "plot", 
            definition: "The main events of a story.", 
            translation: "Enredo / História" 
        },
        // --- TOPIC 4: MOVIE GENRES ---
        { 
            topic: "Genres", 
            term: "comedy", 
            definition: "A movie, play, or broadcast program intended to make an audience laugh.", 
            translation: "Comédia" 
        },
        { 
            topic: "Genres", 
            term: "action", 
            definition: "A genre typically including violence, extended fighting, and frantic chases.", 
            translation: "Ação" 
        },
        { 
            topic: "Genres", 
            term: "horror", 
            definition: "A film genre that seeks to elicit fear or disgust.", 
            translation: "Terror" 
        },
        { 
            topic: "Genres", 
            term: "sci-fi", 
            definition: "Science fiction; films based on imagined future scientific advances.", 
            translation: "Ficção Científica" 
        },
        { 
            topic: "Genres", 
            term: "animation", 
            definition: "A film using a technique in which drawings or puppets create movement.", 
            translation: "Animação / Desenho" 
        },
        { 
            topic: "Genres", 
            term: "drama", 
            definition: "A film genre that depends on in-depth development of realistic characters.", 
            translation: "Drama" 
        },
        { 
            topic: "Genres", 
            term: "romance", 
            definition: "A film genre focused on passion and relationships.", 
            translation: "Romance" 
        },
        { 
            topic: "Genres", 
            term: "thriller", 
            definition: "A genre characterized by the moods they elicit: suspense and excitement.", 
            translation: "Suspense" 
        },

        // --- TOPIC 5: ADJECTIVES (Describing Movies) ---
        { 
            topic: "Adjectives", 
            term: "good", 
            definition: "To be desired or approved of.", 
            translation: "Bom" 
        },
        { 
            topic: "Adjectives", 
            term: "bad", 
            definition: "Of poor quality or a low standard.", 
            translation: "Ruim" 
        },
        { 
            topic: "Adjectives", 
            term: "funny", 
            definition: "Causing laughter or amusement.", 
            translation: "Engraçado" 
        },
        { 
            topic: "Adjectives", 
            term: "scary", 
            definition: "Frightening; causing fear.", 
            translation: "Assustador" 
        },
        { 
            topic: "Adjectives", 
            term: "boring", 
            definition: "Not interesting; tedious.", 
            translation: "Chato / Entediante" 
        },
        { 
            topic: "Adjectives", 
            term: "exciting", 
            definition: "Causing great enthusiasm and eagerness.", 
            translation: "Empolgante" 
        },
        { 
            topic: "Adjectives", 
            term: "sad", 
            definition: "Feeling or showing sorrow; unhappy.", 
            translation: "Triste" 
        },
        { 
            topic: "Adjectives", 
            term: "interesting", 
            definition: "Engaging or exciting and holding the attention.", 
            translation: "Interessante" 
        },
        { 
            topic: "Adjectives", 
            term: "great", 
            definition: "Of an extent, amount, or intensity considerably above the normal.", 
            translation: "Ótimo" 
        },

        // --- TOPIC 6: GRAMMAR & EXPRESSIONS ---
        { 
            topic: "Grammar", 
            term: "simple-past", 
            definition: "The tense used to talk about actions that started and finished in the past.", 
            translation: "Passado Simples" 
        },
        { 
            topic: "Grammar", 
            term: "regular-verbs", 
            definition: "Verbs that form the past tense by adding -ed.", 
            translation: "Verbos Regulares" 
        },
        { 
            topic: "Grammar", 
            term: "irregular-verbs", 
            definition: "Verbs that change their form completely in the past tense.", 
            translation: "Verbos Irregulares" 
        },
        { 
            topic: "Grammar", 
            term: "was-were", 
            definition: "The past forms of the verb 'to be'.", 
            translation: "Era / Estava / Foi" 
        },
        { 
            topic: "Grammar", 
            term: "did-you-like-it", 
            definition: "Question asking for an opinion about a past event.", 
            translation: "Você gostou?" 
        },
        { 
            topic: "Grammar", 
            term: "lets-go", 
            definition: "Used to express a suggestion.", 
            translation: "Vamos..." 
        }
    ]
});