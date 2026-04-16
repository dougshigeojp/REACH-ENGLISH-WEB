/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em2-4-11.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em2-4-11", 
    grade: "High School 2nd Grade",       
    bimester: "4",   
    chapter: "11",    
    chapterTitle: "The Hidden Numbers: Math in Our World", 
    
    steps:[
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Identify mathematical concepts like [fractals](tooltip:fractal) and the [Fibonacci sequence](tooltip:fibonacci-sequence) in nature and art.<br>• Express possibility and uncertainty using [modals](tooltip:modals-possibility) (MAY, MIGHT, COULD).<br>• Make logical [deductions](tooltip:modals-deduction) about the present and past using modals (MUST, CAN'T).<br>• Master [phrasal verbs](tooltip:phrasal-verbs) with MAKE and PUT.<br>• Use advanced vocabulary to describe [symmetry](tooltip:symmetry), [patterns](tooltip:pattern), and [calculations](tooltip:calculation).",
            welcome: "Hello, [logic](tooltip:logic) hunters! I'm Mr. D!<br>Have you ever thought that math is everywhere, not just in your textbook? From the beautiful [spiral](tooltip:spiral) of a [seashell](tooltip:seashell) to the incredible [animation](tooltip:animation) in a Pixar movie, math creates the patterns of our world. Today, we are going to open the door to a secret universe! We'll explore amazing [shapes](tooltip:shape) in nature and see how [equations](tooltip:equation) bring art to life. You will learn how to use \"might\" and \"must\" to [solve](tooltip:solve) mysteries like a real [detective](tooltip:detective). Get ready to see math [in a whole new light](tooltip:whole-new-light)! Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Identify mathematical concepts like fractals and the Fibonacci sequence in nature and art. Express possibility and uncertainty using modals. Make logical deductions about the present and past using modals. Master phrasal verbs with MAKE and PUT. Use advanced vocabulary to describe symmetry, patterns, and calculations.",
                welcome: "TTS: Hello, logic hunters! I'm Mr. D! Have you ever thought that math is everywhere, not just in your textbook? From the beautiful spiral of a seashell to the incredible animation in a Pixar movie, math creates the patterns of our world. Today, we are going to open the door to a secret universe! We'll explore amazing shapes in nature and see how equations bring art to life. You will learn how to use might and must to solve mysteries like a real detective. Get ready to see math in a whole new light! Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Albert and Celine are in the school's digital art studio. Albert is looking at a high-resolution image of a Romanesco broccoli on a screen, and Celine is reading about computer-generated imagery.", 
            contextAudio: "audio/em2-4-11/step1.mp3",
            dialogue:[
                { 
                    speaker: "Albert", 
                    text: "Celine, look at this [pattern](tooltip:pattern). It’s so complex. It [might be](tooltip:might-be) a [fractal](tooltip:fractal), don't you think?" 
                },
                { 
                    speaker: "Celine", 
                    text: "It definitely is, Albert! Nature is full of math. It [could be](tooltip:could-be) following the [Fibonacci sequence](tooltip:fibonacci-sequence), just like the [spiral](tooltip:spiral) of a [nautilus shell](tooltip:nautilus-shell)." 
                },
                { 
                    speaker: "Albert", 
                    text: "It [makes sense](tooltip:make-sense) now. I watched a video about Pixar movies. The [animation](tooltip:animation) is so realistic that the creators [must have used](tooltip:must-have-used) incredibly complex [mathematics](tooltip:mathematics)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Exactly! They [put together](tooltip:put-together) art and science. A single character [might have](tooltip:might-have) millions of [calculations](tooltip:calculation) just for their hair! I can't even [make out](tooltip:make-out) how they do it." 
                },
                { 
                    speaker: "Albert", 
                    text: "It [can't be](tooltip:cant-be) a coincidence that the [symmetry](tooltip:symmetry) is so perfect. I [must have missed](tooltip:must-have-missed) that in my last calculation. I [might have made](tooltip:might-have-made) a [mistake](tooltip:mistake) in my art project." 
                },
                { 
                    speaker: "Celine", 
                    text: "Don't [put](tooltip:put-down) yourself [down](tooltip:put-down)! You just need to [put forward](tooltip:put-forward) a new [theory](tooltip:theory). If the bees [must know](tooltip:must-know) that [hexagons](tooltip:hexagon) are the strongest [shape](tooltip:shape) for a [honeycomb](tooltip:honeycomb), you can learn this too!" 
                },
                { 
                    speaker: "Albert", 
                    text: "You're right. I shouldn't [put off](tooltip:put-off) studying [trigonometry](tooltip:trigonometry). It's clearly the language of the [universe](tooltip:universe)." 
                }
            ]
        },

        // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
        // ======================================================
        {
            title: "Say the word",
            subPages:[
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],

            // 2A: Vocabulary Lists (Tabbed)
            areas:[
                {
                    title: "Math & Science",
                    audio: "TTS: Mathematics. Application. Trigonometry. Fibonacci Sequence. Concentric Circles. Equation. Measurement. Calculation. Angle.",
                    items:[
                        { term: "Mathematics (Math)", trans: "Matemática" },
                        { term: "Application", trans: "Aplicação / Uso" },
                        { term: "Trigonometry", trans: "Trigonometria" },
                        { term: "Fibonacci Sequence", trans: "Sequência de Fibonacci" },
                        { term: "Concentric Circles", trans: "Círculos Concêntricos" },
                        { term: "Equation", trans: "Equação" },
                        { term: "Measurement", trans: "Medida / Medição" },
                        { term: "Calculation", trans: "Cálculo" },
                        { term: "Angle", trans: "Ângulo" }
                    ]
                },
                {
                    title: "Space, Nature & Shapes",
                    audio: "TTS: Animation. Outer Space. Pattern. Sequence. Fractal. Hexagon. Symmetry. Nature. Shape.",
                    items:[
                        { term: "Animation", trans: "Animação" },
                        { term: "Outer Space", trans: "Espaço Sideral" },
                        { term: "Pattern", trans: "Padrão" },
                        { term: "Sequence", trans: "Sequência" },
                        { term: "Fractal", trans: "Fractal" },
                        { term: "Hexagon", trans: "Hexágono" },
                        { term: "Symmetry", trans: "Simetria" },
                        { term: "Nature", trans: "Natureza" },
                        { term: "Shape", trans: "Forma / Formato" }
                    ]
                },
                {
                    title: "Mind & Intelligence",
                    audio: "TTS: Intelligence. Smart. Brain. Mind. Skill. Talent. Potential.",
                    items:[
                        { term: "Intelligence", trans: "Inteligência" },
                        { term: "Smart / Intelligent", trans: "Inteligente" },
                        { term: "Brain", trans: "Cérebro" },
                        { term: "Mind", trans: "Mente" },
                        { term: "Skill", trans: "Habilidade" },
                        { term: "Talent", trans: "Talento" },
                        { term: "Potential", trans: "Potencial" }
                    ]
                },
                {
                    title: "Phrasal Verbs: MAKE",
                    audio: "TTS: Make up. Make out. Make for. Make sense. Make up for. Make into.",
                    items:[
                        { term: "Make up", trans: "Inventar / Compor" },
                        { term: "Make out", trans: "Distinguir / Entender" },
                        { term: "Make for", trans: "Ir em direção a" },
                        { term: "Make sense", trans: "Fazer sentido" },
                        { term: "Make up for", trans: "Compensar por" },
                        { term: "Make into", trans: "Transformar em" }
                    ]
                },
                {
                    title: "Phrasal Verbs: PUT",
                    audio: "TTS: Put together. Put forward. Put off. Put up with. Put down. Put up.",
                    items:[
                        { term: "Put together", trans: "Montar / Juntar" },
                        { term: "Put forward", trans: "Propor / Apresentar" },
                        { term: "Put off", trans: "Adiar" },
                        { term: "Put up with", trans: "Tolerar / Aguentar" },
                        { term: "Put down", trans: "Anotar / Colocar no chão" },
                        { term: "Put up", trans: "Erguer / Construir" }
                    ]
                },
                {
                    title: "Expressions of Logic",
                    audio: "TTS: That pattern might be a fractal. It could be a Fibonacci sequence. The bees must know that hexagons are a strong shape. That can't be a random design; there must be a pattern. The animators must have used a lot of math. He might have made a mistake in his calculations.",
                    items:[
                        { term: "That pattern might be a fractal", trans: "Aquele padrão pode ser um fractal." },
                        { term: "It could be a Fibonacci sequence", trans: "Poderia ser uma sequência de Fibonacci." },
                        { term: "The bees must know that hexagons are a strong shape", trans: "As abelhas devem saber que hexágonos são uma forma resistente." },
                        { term: "That can't be a random design", trans: "Aquilo não pode ser um design aleatório." },
                        { term: "The animators must have used a lot of math", trans: "Os animadores devem ter usado muita matemática." },
                        { term: "He might have made a mistake in his calculations", trans: "Ele pode ter cometido um erro em seus cálculos." }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups:[
                {
                    title: "Math & Science",
                    audio: "TTS: Mathematics is the tool we use to understand physics. The practical application of math is everywhere. We use trigonometry to calculate the height of mountains. The Fibonacci sequence appears in the number of petals on a flower. Drop a stone in a lake to see concentric circles. Solve the equation to find the value of X. Precise measurement is vital for engineering. My calculation shows that we need more materials. The angle of the sun changes during the day.",
                    items:[
                        { term: "Mathematics", sent: "Mathematics is the tool we use to understand physics.", trans: "<span style='color:#0077b6'>A matemática é a ferramenta que usamos para entender a física.</span>" },
                        { term: "Application", sent: "The practical application of math is everywhere.", trans: "<span style='color:#0077b6'>A aplicação prática da matemática está em toda parte.</span>" },
                        { term: "Trigonometry", sent: "We use trigonometry to calculate the height of mountains.", trans: "<span style='color:#0077b6'>Usamos a trigonometria para calcular a altura das montanhas.</span>" },
                        { term: "Fibonacci Sequence", sent: "The Fibonacci sequence appears in the number of petals on a flower.", trans: "<span style='color:#0077b6'>A sequência de Fibonacci aparece no número de pétalas de uma flor.</span>" },
                        { term: "Concentric Circles", sent: "Drop a stone in a lake to see concentric circles.", trans: "<span style='color:#0077b6'>Jogue uma pedra em um lago para ver círculos concêntricos.</span>" },
                        { term: "Equation", sent: "Solve the equation to find the value of X.", trans: "<span style='color:#0077b6'>Resolva a equação para encontrar o valor de X.</span>" },
                        { term: "Measurement", sent: "Precise measurement is vital for engineering.", trans: "<span style='color:#0077b6'>A medição precisa é vital para a engenharia.</span>" },
                        { term: "Calculation", sent: "My calculation shows that we need more materials.", trans: "<span style='color:#0077b6'>Meu cálculo mostra que precisamos de mais materiais.</span>" },
                        { term: "Angle", sent: "The angle of the sun changes during the day.", trans: "<span style='color:#0077b6'>O ângulo do sol muda durante o dia.</span>" }
                    ]
                },
                {
                    title: "Space, Nature & Shapes",
                    audio: "TTS: Modern animation relies on complex code. Math is necessary to navigate outer space. Look at the repeating pattern on the zebra's skin. A geometric sequence follows a specific rule. A fractal looks the same even when you zoom in. A beehive is made of many tiny hexagons. Human faces usually have nearly perfect symmetry. Nature is full of mathematical wonders. What is the most efficient shape for a bridge?",
                    items:[
                        { term: "Animation", sent: "Modern animation relies on complex code.", trans: "<span style='color:#0077b6'>A animação moderna depende de código complexo.</span>" },
                        { term: "Outer Space", sent: "Math is necessary to navigate outer space.", trans: "<span style='color:#0077b6'>A matemática é necessária para navegar no espaço sideral.</span>" },
                        { term: "Pattern", sent: "Look at the repeating pattern on the zebra's skin.", trans: "<span style='color:#0077b6'>Olhe para o padrão repetitivo na pele da zebra.</span>" },
                        { term: "Sequence", sent: "A geometric sequence follows a specific rule.", trans: "<span style='color:#0077b6'>Uma sequência geométrica segue uma regra específica.</span>" },
                        { term: "Fractal", sent: "A fractal looks the same even when you zoom in.", trans: "<span style='color:#0077b6'>Um fractal parece o mesmo mesmo quando você aproxima.</span>" },
                        { term: "Hexagon", sent: "A beehive is made of many tiny hexagons.", trans: "<span style='color:#0077b6'>Uma colmeia é feita de muitos pequenos hexágonos.</span>" },
                        { term: "Symmetry", sent: "Human faces usually have nearly perfect symmetry.", trans: "<span style='color:#0077b6'>Rostos humanos geralmente têm simetria quase perfeita.</span>" },
                        { term: "Nature", sent: "Nature is full of mathematical wonders.", trans: "<span style='color:#0077b6'>A natureza está cheia de maravilhas matemáticas.</span>" },
                        { term: "Shape", sent: "What is the most efficient shape for a bridge?", trans: "<span style='color:#0077b6'>Qual é o formato mais eficiente para uma ponte?</span>" }
                    ]
                },
                {
                    title: "Mind & Intelligence",
                    audio: "TTS: Artificial intelligence relies on complex logic. He is a very smart student. The human brain is a biological computer. Keep an open mind when studying math. Problem-solving is a great skill. She has a natural talent for numbers. You have the potential to be a scientist.",
                    items:[
                        { term: "Intelligence", sent: "Artificial intelligence relies on complex logic.", trans: "<span style='color:#0077b6'>A inteligência artificial depende de lógica complexa.</span>" },
                        { term: "Smart / Intelligent", sent: "He is a very smart student.", trans: "<span style='color:#0077b6'>Ele é um aluno muito inteligente.</span>" },
                        { term: "Brain", sent: "The human brain is a biological computer.", trans: "<span style='color:#0077b6'>O cérebro humano é um computador biológico.</span>" },
                        { term: "Mind", sent: "Keep an open mind when studying math.", trans: "<span style='color:#0077b6'>Mantenha a mente aberta ao estudar matemática.</span>" },
                        { term: "Skill", sent: "Problem-solving is a great skill.", trans: "<span style='color:#0077b6'>A resolução de problemas é uma ótima habilidade.</span>" },
                        { term: "Talent", sent: "She has a natural talent for numbers.", trans: "<span style='color:#0077b6'>Ela tem um talento natural para números.</span>" },
                        { term: "Potential", sent: "You have the potential to be a scientist.", trans: "<span style='color:#0077b6'>Você tem o potencial para ser um cientista.</span>" }
                    ]
                },
                {
                    title: "Phrasal Verbs: MAKE",
                    audio: "TTS: The artist might make up a new fractal pattern. I can't make out the numbers from here. The satellite is making for outer space. This theory doesn't make sense to me. He studied all night to make up for the lost time. You can make these data into a clear graph.",
                    items:[
                        { term: "Make up", sent: "The artist might make up a new fractal pattern.", trans: "<span style='color:#0077b6'>O artista pode inventar um novo padrão fractal.</span>" },
                        { term: "Make out", sent: "I can't make out the numbers from here.", trans: "<span style='color:#0077b6'>Não consigo distinguir os números daqui.</span>" },
                        { term: "Make for", sent: "The satellite is making for outer space.", trans: "<span style='color:#0077b6'>O satélite está indo em direção ao espaço sideral.</span>" },
                        { term: "Make sense", sent: "This theory doesn't make sense to me.", trans: "<span style='color:#0077b6'>Esta teoria não faz sentido para mim.</span>" },
                        { term: "Make up for", sent: "He studied all night to make up for the lost time.", trans: "<span style='color:#0077b6'>Ele estudou a noite toda para compensar o tempo perdido.</span>" },
                        { term: "Make into", sent: "You can make these data into a clear graph.", trans: "<span style='color:#0077b6'>Você pode transformar esses dados em um gráfico claro.</span>" }
                    ]
                },
                {
                    title: "Phrasal Verbs: PUT",
                    audio: "TTS: Let's put together a team of mathematicians. She put forward a new theory about gravity. Don't put off your math homework! I can't put up with this loud noise anymore. Please put down the formula in your notebook. They will put up a new observatory on the hill.",
                    items:[
                        { term: "Put together", sent: "Let's put together a team of mathematicians.", trans: "<span style='color:#0077b6'>Vamos montar uma equipe de matemáticos.</span>" },
                        { term: "Put forward", sent: "She put forward a new theory about gravity.", trans: "<span style='color:#0077b6'>Ela propôs uma nova teoria sobre a gravidade.</span>" },
                        { term: "Put off", sent: "Don't put off your math homework!", trans: "<span style='color:#0077b6'>Não adie seu dever de casa de matemática!</span>" },
                        { term: "Put up with", sent: "I can't put up with this loud noise anymore.", trans: "<span style='color:#0077b6'>Não consigo mais aguentar este barulho alto.</span>" },
                        { term: "Put down", sent: "Please put down the formula in your notebook.", trans: "<span style='color:#0077b6'>Por favor, anote a fórmula em seu caderno.</span>" },
                        { term: "Put up", sent: "They will put up a new observatory on the hill.", trans: "<span style='color:#0077b6'>Eles vão erguer um novo observatório no morro.</span>" }
                    ]
                },
                {
                    title: "Expressions of Logic",
                    audio: "TTS: Albert: Is that a snowflake? Celine: Yes! That pattern might be a fractal. Albert: Look at the petals. Celine: It could be a Fibonacci sequence. Albert: Why do bees use that shape? Celine: The bees must know that hexagons are a strong shape. Albert: I found a structure in the desert. Celine: That can't be a random design; there must be a pattern. Albert: The water in the movie looks so real! Celine: The animators must have used a lot of math. Albert: He failed the logic test. Celine: He might have made a mistake in his calculations.",
                    items:[
                        { term: "That pattern might be a fractal", sent: "\"Is that a snowflake?\" \"Yes! That pattern might be a fractal.\"", trans: "<span style='color:#0077b6'>\"Isso é um floco de neve?\" \"Sim! Aquele padrão pode ser um fractal.\"</span>" },
                        { term: "It could be a Fibonacci sequence", sent: "\"Look at the petals.\" \"It could be a Fibonacci sequence.\"", trans: "<span style='color:#0077b6'>\"Olhe para as pétalas.\" \"Poderia ser uma sequência de Fibonacci.\"</span>" },
                        { term: "The bees must know...", sent: "\"Why do bees use that shape?\" \"The bees must know that hexagons are a strong shape.\"", trans: "<span style='color:#0077b6'>\"Por que as abelhas usam essa forma?\" \"As abelhas devem saber que hexágonos são uma forma resistente.\"</span>" },
                        { term: "That can't be a random design", sent: "\"I found a structure in the desert.\" \"That can't be a random design; there must be a pattern.\"", trans: "<span style='color:#0077b6'>\"Encontrei uma estrutura no deserto.\" \"Aquilo não pode ser um design aleatório; deve haver um padrão.\"</span>" },
                        { term: "The animators must have used...", sent: "\"The water in the movie looks so real!\" \"The animators must have used a lot of math.\"", trans: "<span style='color:#0077b6'>\"A água no filme parece tão real!\" \"Os animadores devem ter usado muita matemática.\"</span>" },
                        { term: "He might have made a mistake...", sent: "\"He failed the logic test.\" \"He might have made a mistake in his calculations.\"", trans: "<span style='color:#0077b6'>\"Ele reprovou no teste de lógica.\" \"Ele pode ter cometido um erro em seus cálculos.\"</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (Tabbed Version - Exactly 43 MCQs mapping to 2A)
            drillGroups:[
                {
                    title: "Math & Science",
                    drills:[
                        { type: "mcq", q: "Which tool do we use to understand the logic of physics?", options:[{t: "Mathematics", c: true}, {t: "Animation", c: false}, {t: "Outer Space", c: false}] },
                        { type: "mcq", q: "The practical _______ of math is seen in bridge construction.", options:[{t: "Application", c: true}, {t: "Equation", c: false}, {t: "Sequence", c: false}] },
                        { type: "mcq", q: "We use _______ to calculate the height of mountains.", options:[{t: "Trigonometry", c: true}, {t: "Concentric Circles", c: false}, {t: "Symmetry", c: false}] },
                        { type: "mcq", q: "The number of petals on a flower often follows the _______.", options:[{t: "Fibonacci Sequence", c: true}, {t: "Outer Space", c: false}, {t: "Equation", c: false}] },
                        { type: "mcq", q: "Dropping a stone in a lake creates _______.", options:[{t: "Concentric Circles", c: true}, {t: "Calculations", c: false}, {t: "Trigonometry", c: false}] },
                        { type: "mcq", q: "You must solve the _______ to find the value of X.", options:[{t: "Equation", c: true}, {t: "Measurement", c: false}, {t: "Angle", c: false}] },
                        { type: "mcq", q: "Precise _______ is vital when building a skyscraper.", options:[{t: "Measurement", c: true}, {t: "Animation", c: false}, {t: "Outer Space", c: false}] },
                        { type: "mcq", q: "My _______ shows that we need more materials.", options:[{t: "Calculation", c: true}, {t: "Angle", c: false}, {t: "Nature", c: false}] },
                        { type: "mcq", q: "The _______ of the sun changes throughout the day.", options:[{t: "Angle", c: true}, {t: "Equation", c: false}, {t: "Fractal", c: false}] }
                    ]
                },
                {
                    title: "Space, Nature & Shapes",
                    drills:[
                        { type: "mcq", q: "Modern 3D _______ relies on complex code and mathematics.", options:[{t: "Animation", c: true}, {t: "Trigonometry", c: false}, {t: "Sequence", c: false}] },
                        { type: "mcq", q: "Astronomers use math to navigate _______.", options:[{t: "Outer Space", c: true}, {t: "Shape", c: false}, {t: "Hexagons", c: false}] },
                        { type: "mcq", q: "Look at the repeating _______ on the zebra's skin.", options:[{t: "Pattern", c: true}, {t: "Equation", c: false}, {t: "Calculation", c: false}] },
                        { type: "mcq", q: "A geometric _______ follows a specific mathematical rule.", options:[{t: "Sequence", c: true}, {t: "Symmetry", c: false}, {t: "Outer Space", c: false}] },
                        { type: "mcq", q: "A _______ looks the same even when you zoom in.", options:[{t: "Fractal", c: true}, {t: "Hexagon", c: false}, {t: "Measurement", c: false}] },
                        { type: "mcq", q: "A beehive is made of many tiny _______.", options:[{t: "Hexagons", c: true}, {t: "Angles", c: false}, {t: "Sequences", c: false}] },
                        { type: "mcq", q: "Human faces usually have nearly perfect _______.", options:[{t: "Symmetry", c: true}, {t: "Fractal", c: false}, {t: "Animation", c: false}] },
                        { type: "mcq", q: "_______ is full of mathematical wonders, like leaves and shells.", options:[{t: "Nature", c: true}, {t: "Outer Space", c: false}, {t: "Trigonometry", c: false}] },
                        { type: "mcq", q: "What is the most efficient _______ for a bridge?", options:[{t: "Shape", c: true}, {t: "Symmetry", c: false}, {t: "Sequence", c: false}] }
                    ]
                },
                {
                    title: "Mind & Intelligence",
                    drills:[
                        { type: "mcq", q: "Artificial _______ relies on complex logic.", options:[{t: "Intelligence", c: true}, {t: "Brain", c: false}, {t: "Potential", c: false}] },
                        { type: "mcq", q: "He is a very _______ student who solves equations quickly.", options:[{t: "Smart", c: true}, {t: "Skill", c: false}, {t: "Mind", c: false}] },
                        { type: "mcq", q: "The human _______ is like a biological computer.", options:[{t: "Brain", c: true}, {t: "Talent", c: false}, {t: "Skill", c: false}] },
                        { type: "mcq", q: "Keep an open _______ when studying complex mathematics.", options:[{t: "Mind", c: true}, {t: "Potential", c: false}, {t: "Intelligence", c: false}] },
                        { type: "mcq", q: "Problem-solving is a great _______ for engineers.", options:[{t: "Skill", c: true}, {t: "Brain", c: false}, {t: "Mind", c: false}] },
                        { type: "mcq", q: "She has a natural _______ for understanding numbers.", options:[{t: "Talent", c: true}, {t: "Brain", c: false}, {t: "Smart", c: false}] },
                        { type: "mcq", q: "If you study hard, you have the _______ to be a scientist.", options:[{t: "Potential", c: true}, {t: "Skill", c: false}, {t: "Intelligence", c: false}] }
                    ]
                },
                {
                    title: "Phrasal Verbs: MAKE",
                    drills:[
                        { type: "mcq", q: "The artist might _______ a new fractal pattern.", options:[{t: "make up", c: true}, {t: "make out", c: false}, {t: "make for", c: false}] },
                        { type: "mcq", q: "I can't _______ the numbers on the board from here.", options:[{t: "make out", c: true}, {t: "make into", c: false}, {t: "make up for", c: false}] },
                        { type: "mcq", q: "The satellite is _______ outer space.", options:[{t: "making for", c: true}, {t: "making sense", c: false}, {t: "making out", c: false}] },
                        { type: "mcq", q: "This physics theory doesn't _______ to me.", options:[{t: "make sense", c: true}, {t: "make into", c: false}, {t: "make up", c: false}] },
                        { type: "mcq", q: "He studied all night to _______ the lost time.", options:[{t: "make up for", c: true}, {t: "make for", c: false}, {t: "make out", c: false}] },
                        { type: "mcq", q: "You can _______ these data _______ a clear graph.", options:[{t: "make / into", c: true}, {t: "make / out", c: false}, {t: "make / sense", c: false}] }
                    ]
                },
                {
                    title: "Phrasal Verbs: PUT",
                    drills:[
                        { type: "mcq", q: "Let's _______ a team of mathematicians.", options:[{t: "put together", c: true}, {t: "put down", c: false}, {t: "put off", c: false}] },
                        { type: "mcq", q: "She _______ a new theory about gravity at the meeting.", options:[{t: "put forward", c: true}, {t: "put up with", c: false}, {t: "put off", c: false}] },
                        { type: "mcq", q: "Don't _______ your math homework until the last minute!", options:[{t: "put off", c: true}, {t: "put down", c: false}, {t: "put together", c: false}] },
                        { type: "mcq", q: "I can't _______ this loud noise anymore while I study.", options:[{t: "put up with", c: true}, {t: "put forward", c: false}, {t: "put off", c: false}] },
                        { type: "mcq", q: "Please _______ the formula in your notebook.", options:[{t: "put down", c: true}, {t: "put up", c: false}, {t: "put together", c: false}] },
                        { type: "mcq", q: "They will _______ a new observatory on the hill.", options:[{t: "put up", c: true}, {t: "put off", c: false}, {t: "put forward", c: false}] }
                    ]
                },
                {
                    title: "Expressions of Logic",
                    drills:[
                        { type: "mcq", q: "I saw a beautiful snowflake. That pattern _______ a fractal.", options:[{t: "might be", c: true}, {t: "can't be", c: false}, {t: "must know", c: false}] },
                        { type: "mcq", q: "Look at the petals. It _______ a Fibonacci sequence.", options:[{t: "could be", c: true}, {t: "must know", c: false}, {t: "must have made", c: false}] },
                        { type: "mcq", q: "The bees _______ that hexagons are a strong shape.", options:[{t: "must know", c: true}, {t: "can't be", c: false}, {t: "might be", c: false}] },
                        { type: "mcq", q: "That _______ a random design; there must be a pattern.", options:[{t: "can't be", c: true}, {t: "might have", c: false}, {t: "must have used", c: false}] },
                        { type: "mcq", q: "The water looks so real! The animators _______ a lot of math.", options:[{t: "must have used", c: true}, {t: "might be", c: false}, {t: "could be", c: false}] },
                        { type: "mcq", q: "He failed the logic test. He _______ a mistake in his calculations.", options:[{t: "might have made", c: true}, {t: "can't be", c: false}, {t: "must know", c: false}] }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 3: FOLLOW THE PATTERN (Grammar)
        // ======================================================
        {
            title: "Follow the Pattern",
            subPages:[
                { id: "step3a", label: "3A: Patterns" },
                { id: "step3b", label: "3B: Examples" },
                { id: "step3c", label: "3C: Practice" }
            ],

            // 3A: Explanations (Tabbed)
            patterns:[
                {
                    title: "Modals of Possibility (MAY, MIGHT, COULD)",
                    audio: "TTS: We use these modals to talk about uncertainty or possibilities. Use MAY for a possibility that is quite likely. Use MIGHT for a smaller or more hypothetical chance. Use COULD for general possibility or one of many options.",
                    explanation: "We use these modals to talk about uncertainty or possibilities.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos estes modais para falar sobre incerteza ou possibilidades.)</span>",
                    samples:[
                        { en: "<b>MAY (Quite likely):</b> It <b>may</b> rain because the sky is dark.", pt: "<span style='color:#0077b6'>(Pode chover porque o céu está escuro.)</span>" },
                        { en: "<b>MIGHT (Smaller chance):</b> We <b>might</b> find life in outer space.", pt: "<span style='color:#0077b6'>(Talvez encontremos vida no espaço sideral.)</span>" },
                        { en: "<b>COULD (General possibility):</b> This shape <b>could</b> be a circle or a hexagon.", pt: "<span style='color:#0077b6'>(Esta forma poderia ser um círculo ou um hexágono.)</span>" }
                    ]
                },
                {
                    title: "Modals of Deduction (MUST / CAN'T)",
                    audio: "TTS: We use these to make logical guesses based on evidence. Use MUST when you are almost 100 percent sure something is true. Use CAN'T when you are almost 100 percent sure something is impossible.",
                    explanation: "We use these to make logical guesses based on strong evidence. They show our level of certainty.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos estes modais para fazer deduções lógicas baseadas em fortes evidências. Eles mostram nosso nível de certeza.)</span>",
                    samples:[
                        { en: "<b>MUST (Almost 100% true):</b> The animation is perfect; they <b>must</b> be experts.", pt: "<span style='color:#0077b6'>(A animação é perfeita; eles devem ser especialistas.)</span>" },
                        { en: "<b>CAN'T (Almost 100% impossible):</b> This <b>can't</b> be random; it has perfect symmetry.", pt: "<span style='color:#0077b6'>(Isso não pode ser aleatório; tem simetria perfeita.)</span>" },
                        { en: "<b>MUST (Current deduction):</b> She <b>must</b> know the equation.", pt: "<span style='color:#0077b6'>(Ela deve saber a equação.)</span>" }
                    ]
                },
                {
                    title: "Modals Across Time (Present vs. Past)",
                    audio: "TTS: To talk about the past, we don't change the modal itself; we add 'have' and the Past Participle. For example, 'She must know' becomes 'She must have known'. 'It can't be' becomes 'It can't have been'.",
                    explanation: "To talk about the past, we don't change the modal; we add <b>have</b> and the <b>Past Participle</b>. <br><br><span style='color:#0077b6; font-style:italic;'>(Para falar do passado, não mudamos o modal; adicionamos <b>have</b> e o <b>Particípio Passado</b>.)</span>",
                    samples:[
                        { en: "<b>Past Certainty (MUST):</b> They <b>must have used</b> trigonometry to build this.", pt: "<span style='color:#0077b6'>(Eles devem ter usado trigonometria para construir isso.)</span>" },
                        { en: "<b>Past Possibility (MIGHT):</b> He <b>might have made</b> a mistake in the calculation.", pt: "<span style='color:#0077b6'>(Ele pode ter cometido um erro no cálculo.)</span>" },
                        { en: "<b>Past Impossibility (CAN'T):</b> Ancient bees <b>can't have known</b> geometry.", pt: "<span style='color:#0077b6'>(As abelhas antigas não podem ter conhecido geometria.)</span>" }
                    ]
                },
                {
                    title: "Linking Words (Contrast & Consequence)",
                    audio: "TTS: These words connect ideas to show logic. For contrast, use However, On the other hand, or Nevertheless. For consequence or result, use Therefore, As a result, or Consequently.",
                    explanation: "These words connect ideas to show logic. Contrast shows opposing ideas, while consequence shows results.<br><br><span style='color:#0077b6; font-style:italic;'>(Estas palavras ligam ideias para mostrar lógica. O contraste mostra ideias opostas, enquanto a consequência mostra resultados.)</span>",
                    samples:[
                        { en: "<b>Contrast:</b> Math is hard. <b>However</b>, it is fascinating.", pt: "<span style='color:#0077b6'>(Matemática é difícil. No entanto, é fascinante.)</span>" },
                        { en: "<b>Contrast:</b> The calculation was hard. <b>Nevertheless</b>, he finished it.", pt: "<span style='color:#0077b6'>(O cálculo foi difícil. Contudo, ele o terminou.)</span>" },
                        { en: "<b>Contrast:</b> The project was challenging. <b>On the other hand</b>, it was rewarding.", pt: "<span style='color:#0077b6'>(O projeto foi desafiador. Por outro lado, foi recompensador.)</span>" },
                        { en: "<b>Consequence:</b> The symmetry is perfect; <b>therefore</b>, it is a fractal.", pt: "<span style='color:#0077b6'>(A simetria é perfeita; portanto, é um fractal.)</span>" },
                        { en: "<b>Consequence:</b> The design is efficient. <b>As a result</b>, it saves energy.", pt: "<span style='color:#0077b6'>(O design é eficiente. Como resultado, economiza energia.)</span>" },
                        { en: "<b>Consequence:</b> The algorithm failed. <b>Consequently</b>, the animation crashed.", pt: "<span style='color:#0077b6'>(O algoritmo falhou. Consequentemente, a animação travou.)</span>" }
                    ]
                },
                {
                    title: "Linking Words (Addition & Purpose)",
                    audio: "TTS: To add information, use Moreover, Furthermore, Also, In addition, or Besides. To show purpose, use So that.",
                    explanation: "Use these connectors to add more points to your argument or to show the goal of an action.<br><br><span style='color:#0077b6; font-style:italic;'>(Use esses conectivos para adicionar mais pontos ao seu argumento ou para mostrar o objetivo de uma ação.)</span>",
                    samples:[
                        { en: "<b>Addition:</b> Pigeons find their way. <b>Moreover</b>, they use magnetic fields.", pt: "<span style='color:#0077b6'>(Pombos encontram o caminho. Além disso, usam campos magnéticos.)</span>" },
                        { en: "<b>Addition:</b> A hexagon is strong. <b>Furthermore</b>, it is efficient.", pt: "<span style='color:#0077b6'>(Um hexágono é forte. Além disso, é eficiente.)</span>" },
                        { en: "<b>Addition:</b> The design is beautiful. <b>In addition</b>, it is functional.", pt: "<span style='color:#0077b6'>(O design é bonito. Além disso, é funcional.)</span>" },
                        { en: "<b>Addition:</b> The pattern is complex. <b>Also</b>, it is mesmerizing.", pt: "<span style='color:#0077b6'>(O padrão é complexo. Além disso, é hipnotizante.)</span>" },
                        { en: "<b>Addition:</b> The structure is stable. <b>Besides</b>, it is eco-friendly.", pt: "<span style='color:#0077b6'>(A estrutura é estável. Além disso, é ecológica.)</span>" },
                        { en: "<b>Purpose:</b> We use math <b>so that</b> characters look real.", pt: "<span style='color:#0077b6'>(Usamos matemática para que os personagens pareçam reais.)</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups:[
                {
                    title: "Dialogue 1: Mathematical Mysteries (Modals of Deduction)",
                    audio: "audio/em2-4-11/step3_dialogue1.mp3",
                    lines:[
                        { 
                            speaker: "Albert", 
                            text: "Look at the Great Pyramid. The builders [must have used](tooltip:must-have-used) advanced geometry.", 
                            pt: "<span style='color:#0077b6'>(Olhe para a Grande Pirâmide. Os construtores devem ter usado geometria avançada.)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "I agree. It [can't be](tooltip:cant-be) a coincidence that the measurements are so precise. They [might have had](tooltip:might-have) tools we don't know about.", 
                            pt: "<span style='color:#0077b6'>(Eu concordo. Não pode ser uma coincidência que as medidas sejam tão precisas. Eles podem ter tido ferramentas que não conhecemos.)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Presenting the Project (Linking Words)",
                    audio: "audio/em2-4-11/step3_dialogue2.mp3",
                    lines:[
                        { 
                            speaker: "Celine", 
                            text: "Our design is beautiful.[However](tooltip:however), it lacks symmetry. [Therefore](tooltip:therefore), we need to recalculate the angles.", 
                            pt: "<span style='color:#0077b6'>(Nosso design é bonito. No entanto, falta simetria. Portanto, precisamos recalcular os ângulos.)</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "You are right. [Moreover](tooltip:moreover), we should add a fractal pattern [so that](tooltip:so-that) it looks more like nature.", 
                            pt: "<span style='color:#0077b6'>(Você tem razão. Além disso, devemos adicionar um padrão fractal para que pareça mais com a natureza.)</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice (Tabbed Version - Exactly 40 MCQs)
            grammarDrillGroups:[
                {
                    title: "Modals of Possibility",
                    drills:[
                        { type: "mcq", q: "The sky is very dark. It _______ rain soon.", options:[{t: "may", c: true}, {t: "can't", c: false}, {t: "must", c: false}] },
                        { type: "mcq", q: "We _______ find life on Mars, but it's a very small chance.", options:[{t: "must", c: false}, {t: "might", c: true}, {t: "can't", c: false}] },
                        { type: "mcq", q: "This shape _______ be a hexagon or an octagon; I'm not sure.", options:[{t: "could", c: true}, {t: "must", c: false}, {t: "can't", c: false}] },
                        { type: "mcq", q: "She _______ come to the party if she finishes her calculations.", options:[{t: "may", c: true}, {t: "must", c: false}, {t: "couldn't", c: false}] },
                        { type: "mcq", q: "I don't know the answer. It _______ be 42, but I'm guessing.", options:[{t: "might", c: true}, {t: "must", c: false}, {t: "mustn't", c: false}] },
                        { type: "mcq", q: "They _______ have a solution, but we need to ask them.", options:[{t: "must", c: false}, {t: "could", c: true}, {t: "can't", c: false}] },
                        { type: "mcq", q: "Take an umbrella. It _______ rain later this evening.", options:[{t: "can't", c: false}, {t: "must", c: false}, {t: "may", c: true}] },
                        { type: "mcq", q: "This math problem _______ take hours to solve, or maybe just minutes.", options:[{t: "might", c: true}, {t: "must", c: false}, {t: "can't", c: false}] },
                        { type: "mcq", q: "You _______ use my calculator if you need it.", options:[{t: "must", c: false}, {t: "can't", c: false}, {t: "may", c: true}] },
                        { type: "mcq", q: "I _______ be wrong, but I think the answer is 12.", options:[{t: "could", c: true}, {t: "must", c: false}, {t: "can't", c: false}] }
                    ]
                },
                {
                    title: "Modals of Deduction",
                    drills:[
                        { type: "mcq", q: "He got 100% on the test. He _______ be very smart.", options:[{t: "must", c: true}, {t: "might", c: false}, {t: "can't", c: false}] },
                        { type: "mcq", q: "That _______ be Albert; Albert is in Europe right now!", options:[{t: "must", c: false}, {t: "can't", c: true}, {t: "might", c: false}] },
                        { type: "mcq", q: "The symmetry is absolutely perfect. It _______ be a random design.", options:[{t: "can't", c: true}, {t: "must", c: false}, {t: "could", c: false}] },
                        { type: "mcq", q: "Look at the snow! It _______ be freezing outside.", options:[{t: "might", c: false}, {t: "can't", c: false}, {t: "must", c: true}] },
                        { type: "mcq", q: "You have been studying all day. You _______ be exhausted.", options:[{t: "can't", c: false}, {t: "must", c: true}, {t: "might", c: false}] },
                        { type: "mcq", q: "This equation is 2+2=5. That _______ be correct!", options:[{t: "must", c: false}, {t: "can't", c: true}, {t: "might", c: false}] },
                        { type: "mcq", q: "The lights are off and no one is answering the door. They _______ be out.", options:[{t: "must", c: true}, {t: "can't", c: false}, {t: "could", c: false}] },
                        { type: "mcq", q: "He doesn't know what a fractal is. He _______ be a math expert.", options:[{t: "can't", c: true}, {t: "must", c: false}, {t: "might", c: false}] },
                        { type: "mcq", q: "The bees build perfect hexagons. They _______ have a natural instinct.", options:[{t: "must", c: true}, {t: "can't", c: false}, {t: "could", c: false}] },
                        { type: "mcq", q: "She just ate a huge pizza. She _______ be hungry again.", options:[{t: "might", c: false}, {t: "must", c: false}, {t: "can't", c: true}] }
                    ]
                },
                {
                    title: "Past Modals",
                    drills:[
                        { type: "mcq", q: "The streets are wet. It _______ rained last night.", options:[{t: "must have", c: true}, {t: "can't have", c: false}, {t: "must", c: false}] },
                        { type: "mcq", q: "He failed the test. He _______ a mistake in his calculations.", options:[{t: "can't have made", c: false}, {t: "might have made", c: true}, {t: "must made", c: false}] },
                        { type: "mcq", q: "The Egyptians didn't have computers. They _______ used modern tech to build pyramids.", options:[{t: "can't have", c: true}, {t: "must have", c: false}, {t: "might have", c: false}] },
                        { type: "mcq", q: "I can't find my keys. I _______ left them at the studio.", options:[{t: "can't have", c: false}, {t: "must have", c: true}, {t: "might had", c: false}] },
                        { type: "mcq", q: "The animation looks incredibly realistic. The creators _______ used a lot of math.", options:[{t: "must have", c: true}, {t: "can't have", c: false}, {t: "must had", c: false}] },
                        { type: "mcq", q: "She got a zero. She _______ understood the equations.", options:[{t: "must have", c: false}, {t: "can't have", c: true}, {t: "might had", c: false}] },
                        { type: "mcq", q: "I'm not sure where he went. He _______ gone to the library.", options:[{t: "must have", c: false}, {t: "might have", c: true}, {t: "can't have", c: false}] },
                        { type: "mcq", q: "The dinosaur bones are real. This _______ been a fake fossil.", options:[{t: "must have", c: false}, {t: "might have", c: false}, {t: "can't have", c: true}] },
                        { type: "mcq", q: "They arrived very early. They _______ driven fast.", options:[{t: "must have", c: true}, {t: "can't have", c: false}, {t: "might had", c: false}] },
                        { type: "mcq", q: "He didn't study at all, but he got an A. He _______ guessed the answers.", options:[{t: "must have", c: true}, {t: "can't have", c: false}, {t: "must", c: false}] }
                    ]
                },
                {
                    title: "Linking Words",
                    drills:[
                        { type: "mcq", q: "Math is difficult; _______, it is everywhere in nature.", options:[{t: "therefore", c: false}, {t: "nevertheless", c: true}, {t: "so that", c: false}] },
                        { type: "mcq", q: "He studied trigonometry. _______, he got an A on the test.", options:[{t: "However", c: false}, {t: "On the other hand", c: false}, {t: "As a result", c: true}] },
                        { type: "mcq", q: "A hexagon is strong. _______, it is very efficient for storing honey.", options:[{t: "Furthermore", c: true}, {t: "Consequently", c: false}, {t: "However", c: false}] },
                        { type: "mcq", q: "We use complex math _______ characters in the animation look real.", options:[{t: "so that", c: true}, {t: "therefore", c: false}, {t: "besides", c: false}] },
                        { type: "mcq", q: "The algorithm failed. _______, the software crashed.", options:[{t: "Consequently", c: true}, {t: "However", c: false}, {t: "Moreover", c: false}] },
                        { type: "mcq", q: "I like science. I _______ enjoy mathematics.", options:[{t: "also", c: true}, {t: "therefore", c: false}, {t: "nevertheless", c: false}] },
                        { type: "mcq", q: "The symmetry is perfect; _______, we conclude it is a fractal.", options:[{t: "therefore", c: true}, {t: "however", c: false}, {t: "so that", c: false}] },
                        { type: "mcq", q: "Nature is beautiful. _______, it is also highly mathematical.", options:[{t: "Consequently", c: false}, {t: "On the other hand", c: true}, {t: "As a result", c: false}] },
                        { type: "mcq", q: "We need the right tools. _______, we need the knowledge to use them.", options:[{t: "In addition", c: true}, {t: "However", c: false}, {t: "Therefore", c: false}] },
                        { type: "mcq", q: "_______ being a great artist, Leonardo da Vinci was a scientist.", options:[{t: "Besides", c: true}, {t: "However", c: false}, {t: "Consequently", c: false}] }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 4: SHADOWING (Recording)
        // ======================================================
        {
            title: "Can you say that again?",
            sentences:[
                { 
                    text: "That pattern might be a fractal, don't you think? ↗<br><small style='color:#0077b6'>(Aquele padrão pode ser um fractal, você não acha?)</small>", 
                    audio: "TTS: That pattern might be a fractal, don't you think?", 
                    arrow: "↗" 
                },
                { 
                    text: "Yes! The creators must have used complex math. ↘<br><small style='color:#0077b6'>(Sim! Os criadores devem ter usado matemática complexa.)</small>", 
                    audio: "TTS: Yes! The creators must have used complex math.", 
                    arrow: "↘" 
                },
                { 
                    text: "It can't be just a coincidence. ↘<br><small style='color:#0077b6'>(Não pode ser apenas uma coincidência.)</small>", 
                    audio: "TTS: It can't be just a coincidence.", 
                    arrow: "↘" 
                },
                { 
                    text: "Moreover, it makes sense when you study it! ↘<br><small style='color:#0077b6'>(Além disso, faz sentido quando você o estuda!)</small>", 
                    audio: "TTS: Moreover, it makes sense when you study it!", 
                    arrow: "↘" 
                },
                { 
                    text: "He might have made a mistake in his calculations. ↘<br><small style='color:#0077b6'>(Ele pode ter cometido um erro em seus cálculos.)</small>", 
                    audio: "TTS: He might have made a mistake in his calculations.", 
                    arrow: "↘" 
                }
            ]
        },

        // ======================================================
        // STEP 5: LISTENING
        // ======================================================
        {
            title: "Are you following me?",
            drills:[
                // Drill 1: Typing
                {
                    type: "typing",
                    instruction: "Listen to Albert talking about a seashell and type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre uma concha e digite as palavras que faltam.)</small>",
                    audio: "TTS: Look at this seashell. It might be related to the Fibonacci sequence. The spiral is so perfect that it can't be random. Nature must have chosen this shape for a reason. Therefore, every part of it follows a pattern.",
                    text: "Look at this seashell. It [might be] related to the[Fibonacci sequence]. The [spiral] is so perfect that it [can't be] random. Nature [must have] [chosen] this [shape] for a reason. [Therefore], every part of it follows a [pattern]."
                },
                // Drill 2: Dropdown
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue and choose the correct options.<br><small style='color:#0077b6'>(Ouça o diálogo e escolha as opções corretas.)</small>",
                    audio: "audio/em2-4-11/step5_drill2.mp3",
                    questions:[
                        { q: "Celine: Professor, [could* | must | can't] this be a [fractal* | sequence | hexagon]?", a: "" },
                        { q: "Professor: It [might be* | must have | couldn't].[However* | Moreover | Consequently], we need a precise [measurement* | pattern | sequence] to be sure.", a: "" },
                        { q: "Celine: If the calculation is wrong, I[must have made* | can't made | will made] a mistake earlier.", a: "" }
                    ]
                },
                // Drill 3: Audio Choice
                {
                    type: "audio-choice",
                    instruction: "Listen to the audio and choose the logical deduction.<br><small style='color:#0077b6'>(Ouça o áudio e escolha a dedução lógica.)</small>",
                    audio: "TTS: He got a zero on his trigonometry test.",
                    options:[
                        { t: "He must have studied a lot.", c: false },
                        { t: "He can't have understood the equations.", c: true },
                        { t: "He might have purchased a new device.", c: false },
                        { t: "He put up with the noise.", c: false }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 6: READING
        // ======================================================
        {
            title: "Get the story",
            texts:[
                {
                    title: "6a: Narration - The Golden Ratio",
                    audio: "TTS: In nature, a specific sequence of numbers often appears. It is the Fibonacci Sequence. As a result of this math, we see beautiful spirals in sunflowers and pinecones. It is believed that this pattern helps plants grow efficiently. Ancient architects must have noticed this symmetry too. For example, they might have used it to build temples. Furthermore, this Golden Ratio appears in human art. It just makes sense that our eyes love symmetry. || audio/em2-4-11/p6_text1.mp3",
                    body: "In nature, a specific [sequence](tooltip:sequence) of numbers often appears. It is the [Fibonacci Sequence](tooltip:fibonacci-sequence). [As a result](tooltip:as-a-result) of this math, we see beautiful spirals in [sunflowers](tooltip:sunflowers) and [pinecones](tooltip:pinecones). It is believed that this [pattern](tooltip:pattern) helps plants grow efficiently. Ancient architects [must have noticed](tooltip:must-have-noticed) this [symmetry](tooltip:symmetry) too. For example, they [might have used](tooltip:might-have-used) it to build temples. [Furthermore](tooltip:furthermore), this \"Golden Ratio\" appears in human art. It just [makes sense](tooltip:make-sense) that our eyes love [symmetry](tooltip:symmetry).",
                    questions:[
                        { 
                            q: "What result does the Fibonacci sequence create in nature?", 
                            options:[ 
                                {t: "It creates random shapes.", c: false}, 
                                {t: "It creates beautiful spirals.", c: true}, 
                                {t: "It creates pollution.", c: false} 
                            ] 
                        },
                        { 
                            q: "What deduction does the text make about ancient architects?", 
                            options:[ 
                                {t: "They can't have known about math.", c: false}, 
                                {t: "They must have noticed the symmetry in nature.", c: true}, 
                                {t: "They couldn't act fast.", c: false} 
                            ] 
                        },
                        { 
                            q: "Where else does the 'Golden Ratio' appear?", 
                            options:[ 
                                {t: "Only in outer space.", c: false}, 
                                {t: "In human art.", c: true}, 
                                {t: "In gasoline.", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "6b: Dialogue - Designing a Wave",
                    audio: "audio/em2-4-11/p6_text2.mp3",
                    body: "<b>Albert:</b> Celine, this [animation](tooltip:animation) of the ocean is perfect.<br><b>Celine:</b> I know! The team [must have been working](tooltip:must-have-been-working) on it for weeks.<br><b>Albert:</b> [Besides](tooltip:besides) the art, they [must](tooltip:must) use [equations](tooltip:equation) for water movement.<br><b>Celine:</b> True. [On the other hand](tooltip:on-the-other-hand), a small error [might have entered](tooltip:might-have-entered) the system yesterday.<br><b>Albert:</b> [Consequently](tooltip:consequently), the reflection looks a bit strange.<br><b>Celine:</b> Let’s [put together](tooltip:put-together) a [report](tooltip:report) for the teacher.",
                    questions:[
                        { 
                            q: "What is the deduction about the animation team's work?", 
                            options:[ 
                                {t: "They finished in one day.", c: false}, 
                                {t: "They must have been working for weeks.", c: true}, 
                                {t: "They forgot to use computers.", c: false} 
                            ] 
                        },
                        { 
                            q: "What does Celine think happened yesterday?", 
                            options:[ 
                                {t: "A mistake might have entered the system.", c: true}, 
                                {t: "The team achieved success.", c: false}, 
                                {t: "A drought started.", c: false} 
                            ] 
                        },
                        { 
                            q: "What is the consequence of the error?", 
                            options:[ 
                                {t: "The reflection looks strange.", c: true}, 
                                {t: "The software is free.", c: false}, 
                                {t: "The hardware is durable.", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "6c: Description - The Astronomer's Telescope",
                    audio: "TTS: An astronomer is looking at a new planet in outer space. The planet’s angle is unusual. She thinks there must be a large object nearby affecting its gravity. She is not sure yet; it could be a black hole or it might be a very large moon. She must have done hundreds of calculations to reach this conclusion. Therefore, she will put forward her new theory to other scientists tomorrow. || audio/em2-4-11/p6_text3.mp3",
                    body: "An astronomer is looking at a new planet in [outer space](tooltip:outer-space). The planet’s [angle](tooltip:angle) is unusual. She thinks [there must be](tooltip:there-must-be) a large object nearby affecting its gravity. She is not sure yet; it [could be](tooltip:could-be) a black hole or it [might be](tooltip:might-be) a very large moon. She [must have done](tooltip:must-have-done) hundreds of [calculations](tooltip:calculation) to reach this conclusion. [Therefore](tooltip:therefore), she will [put forward](tooltip:put-forward) her new [theory](tooltip:theory) to other scientists tomorrow.",
                    questions:[
                        { 
                            q: "Why does the astronomer think there is an object nearby?", 
                            options:[ 
                                {t: "Because the planet is extinct.", c: false}, 
                                {t: "Because the planet's angle is unusual.", c: true}, 
                                {t: "Because she had found a fossil.", c: false} 
                            ] 
                        },
                        { 
                            q: "What are the possibilities for the unseen object?", 
                            options:[ 
                                {t: "A hexagon or a fractal.", c: false}, 
                                {t: "A black hole or a large moon.", c: true}, 
                                {t: "A solar panel.", c: false} 
                            ] 
                        },
                        { 
                            q: "What must she have done to reach her conclusion?", 
                            options:[ 
                                {t: "Hundreds of calculations.", c: true}, 
                                {t: "A cleanup of the lab.", c: false}, 
                                {t: "Downloaded an app.", c: false} 
                            ] 
                        }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 7: QUICK DRILLS (Mixed Types - Flat Array, 40 Drills)
        // ======================================================
        {
            title: "Monkey see, Monkey do",
            drills:[
                // 1-5: Matching (Vocabulary & Phrasal Verbs)
                { type: "matching", instruction: "Match the phrasal verb with its meaning.<br><small style='color:#0077b6'>(Associe o verbo frasal ao seu significado.)</small>", pairs:[ {left: "Make up", right: "Inventar", val: "1"}, {left: "Make out", right: "Distinguir / Entender", val: "2"}, {left: "Put together", right: "Montar / Juntar", val: "3"}, {left: "Put off", right: "Adiar", val: "4"} ] },
                { type: "matching", instruction: "Match the phrasal verb with its meaning.<br><small style='color:#0077b6'>(Associe o verbo frasal ao seu significado.)</small>", pairs:[ {left: "Make sense", right: "Fazer sentido", val: "1"}, {left: "Make up for", right: "Compensar por", val: "2"}, {left: "Put down", right: "Anotar", val: "3"}, {left: "Put up with", right: "Tolerar", val: "4"} ] },
                { type: "matching", instruction: "Match the linking word to its function.<br><small style='color:#0077b6'>(Associe o conectivo à sua função.)</small>", pairs:[ {left: "Although", right: "Contrast", val: "1"}, {left: "Therefore", right: "Result/Consequence", val: "2"}, {left: "Moreover", right: "Addition", val: "3"}, {left: "So that", right: "Purpose", val: "4"} ] },
                { type: "matching", instruction: "Match the modal verb to its function.<br><small style='color:#0077b6'>(Associe o verbo modal à sua função.)</small>", pairs:[ {left: "Must", right: "Strong deduction (True)", val: "1"}, {left: "Can't", right: "Strong deduction (Impossible)", val: "2"}, {left: "Might", right: "Small possibility", val: "3"}, {left: "Must have", right: "Past deduction", val: "4"} ] },
                { type: "matching", instruction: "Match the math term to its translation.<br><small style='color:#0077b6'>(Associe o termo de matemática à sua tradução.)</small>", pairs:[ {left: "Equation", right: "Equação", val: "1"}, {left: "Measurement", right: "Medição", val: "2"}, {left: "Shape", right: "Forma", val: "3"}, {left: "Pattern", right: "Padrão", val: "4"} ] },
                
                // 6-15: Dropdowns (with randomized * positions)
                { type: "dropdown", instruction: "Select the correct modal of deduction.<br>The symmetry is 100% perfect. It _______ be a manual drawing.", questions: [{ q: "It [might | must | can't] be a manual drawing.", a: "can't" }] },
                { type: "dropdown", instruction: "Select the correct modal of deduction.<br>Albert is not in class. He _______ be in the library.", questions: [{ q: "He[can't | must | shouldn't] be in the library.", a: "must" }] },
                { type: "dropdown", instruction: "Select the correct past modal.<br>He got a zero. He _______ understood the lesson.", questions:[{ q: "He [must have | can't have | might have] understood the lesson.", a: "can't have" }] },
                { type: "dropdown", instruction: "Select the correct past modal.<br>The pyramids are huge. They _______ used geometry.", questions: [{ q: "They [can't have | might have | must have] used geometry.", a: "must have" }] },
                { type: "dropdown", instruction: "Select the correct linking word.<br>Math is difficult; _______, it is everywhere.", questions: [{ q: "Math is difficult; [nevertheless | therefore | so that], it is everywhere.", a: "nevertheless" }] },
                { type: "dropdown", instruction: "Select the correct linking word.<br>He studied hard _______ he could pass.", questions: [{ q: "He studied hard [however | so that | moreover] he could pass.", a: "so that" }] },
                { type: "dropdown", instruction: "Select the correct phrasal verb.<br>I can't _______ the numbers from here.", questions: [{ q: "I can't[make out | make up | make for] the numbers from here.", a: "make out" }] },
                { type: "dropdown", instruction: "Select the correct phrasal verb.<br>Don't _______ your math homework!", questions:[{ q: "Don't [put down | put up | put off] your math homework!", a: "put off" }] },
                { type: "dropdown", instruction: "Select the correct phrasal verb.<br>She _______ a new theory.", questions:[{ q: "She[put together | put forward | put up with] a new theory.", a: "put forward" }] },
                { type: "dropdown", instruction: "Select the correct vocabulary word.<br>A _______ is a shape that repeats at every scale.", questions:[{ q: "A [hexagon | sequence | fractal] is a shape that repeats.", a: "fractal" }] },

                // 16-25: Word Order
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "difficult / is / Math / . / it / is / everywhere / Nevertheless / , / .", correct: "Math is difficult . Nevertheless , it is everywhere ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "so that / He / studied / he / pass / could / .", correct: "He studied so that he could pass ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "have / They / used / must / math / .", correct: "They must have used math ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "can't / It / coincidence / be / a / .", correct: "It can't be a coincidence ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "might / He / made / mistake / a / have / .", correct: "He might have made a mistake ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "put / Let's / report / a / together / .", correct: "Let's put together a report ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "not / Do / off / studying / put / .", correct: "Do not put off studying ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "doesn't / theory / This / sense / make / .", correct: "This theory doesn't make sense ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "is / It / Fibonacci / a / sequence / .", correct: "It is a Fibonacci sequence ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "hexagon / A / a / shape / strong / is / .", correct: "A hexagon is a strong shape ." },

                // 26-30: Clickable Error (Grammar & Phrasal Verbs)
                { type: "clickable-error", instruction: "Find the grammatical mistake.<br><small style='color:#0077b6'>(Encontre o erro gramatical.)</small>", sentence: "They must [has](error:have) used trigonometry last year." },
                { type: "clickable-error", instruction: "Find the grammatical mistake.<br><small style='color:#0077b6'>(Encontre o erro gramatical.)</small>", sentence: "I might [had](error:have) made a mistake in the equation." },
                { type: "clickable-error", instruction: "Find the grammatical mistake.<br><small style='color:#0077b6'>(Encontre o erro gramatical.)</small>", sentence: "It [mustn't](error:can't) be true; it's impossible!" },
                { type: "clickable-error", instruction: "Find the grammatical mistake.<br><small style='color:#0077b6'>(Encontre o erro gramatical.)</small>", sentence: "He worked hard [nevertheless](error:so that) he could pass." },
                { type: "clickable-error", instruction: "Find the grammatical mistake.<br><small style='color:#0077b6'>(Encontre o erro gramatical.)</small>", sentence: "She [puts](error:put) forward a new theory yesterday." },

                // 31-40: MCQs (Using <br> formatting inside instruction)
                { type: "mcq", instruction: "Choose the odd one out.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence à categoria.)</small><br>[Hexagon | Circle | Square | Symmetry]", q: "", options:[{t: "Hexagon", c: false}, {t: "Circle", c: false}, {t: "Square", c: false}, {t: "Symmetry", c: true}] },
                { type: "mcq", instruction: "Choose the odd one out.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence à categoria.)</small><br>[Calculation | Measurement | Animation | Equation]", q: "", options:[{t: "Calculation", c: false}, {t: "Measurement", c: false}, {t: "Animation", c: true}, {t: "Equation", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>The _______ is a series of numbers where each number is the sum of the two before it.", q: "", options:[{t: "Concentric circles", c: false}, {t: "Fibonacci Sequence", c: true}, {t: "Trigonometry", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>Perfect _______ means that two halves of a shape are exactly the same.", q: "", options:[{t: "Sequence", c: false}, {t: "Pattern", c: false}, {t: "Symmetry", c: true}] },
                { type: "mcq", instruction: "Choose the correct option.<br>A _______ is a geometric shape with six sides.", q: "", options:[{t: "Square", c: false}, {t: "Triangle", c: false}, {t: "Hexagon", c: true}] },
                { type: "mcq", instruction: "Choose the correct option.<br>Scientists use _______ to measure the positions of stars in outer space.", q: "", options:[{t: "Trigonometry", c: true}, {t: "Animation", c: false}, {t: "Nature", c: false}] },
                { type: "mcq", instruction: "Choose the correct modal.<br>The animators _______ used a lot of math.", q: "", options:[{t: "must have", c: true}, {t: "can't have", c: false}, {t: "might", c: false}] },
                { type: "mcq", instruction: "Choose the correct modal.<br>He might _______ a mistake in his calculations.", q: "", options:[{t: "make", c: false}, {t: "have made", c: true}, {t: "had made", c: false}] },
                { type: "mcq", instruction: "Choose the correct linking word.<br>The calculation was hard. _______, he finished it.", q: "", options:[{t: "Nevertheless", c: true}, {t: "Therefore", c: false}, {t: "Also", c: false}] },
                { type: "mcq", instruction: "Choose the correct linking word.<br>The algorithm failed. _______, the animation crashed.", q: "", options:[{t: "Consequently", c: true}, {t: "However", c: false}, {t: "Besides", c: false}] }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn to be a math detective! Write a short paragraph (5-7 sentences) about a mystery or a historical site like Machu Picchu or the pyramids. <br><br><small><span style='color:#0077b6'>(Ilha de Idiomas: Agora é sua vez de ser um detetive da matemática! Escreva um pequeno parágrafo (5-7 frases) sobre um mistério ou sítio histórico como Machu Picchu ou as pirâmides.)</span></small>",
            example: "\"The ancient pyramids are a mathematical mystery. Engineers must have used advanced geometry to align the stones. Furthermore, they might have had a special measurement system. It can't have been an accident because the symmetry is perfect. Therefore, we know they were very intelligent. I wish I could understand their equations better!\"<br><br><small><span style='color:#0077b6'>(\"As antigas pirâmides são um mistério matemático. Os engenheiros devem ter usado geometria avançada para alinhar as pedras. Além disso, eles podem ter tido um sistema especial de medição. Não pode ter sido um acidente porque a simetria é perfeita. Portanto, sabemos que eles eram muito inteligentes. Gostaria de poder entender melhor as equações deles!\")</span></small>",
            prompts:[
                "Use [Modals of Deduction] (must have, might have, can't have) to explain how it was built. <br><small><span style='color:#0077b6'>(Use modais de dedução para explicar como foi construído.)</span></small>",
                "Use [Linking Words] (Furthermore, Therefore, However) to connect your ideas. <br><small><span style='color:#0077b6'>(Use palavras de ligação para conectar suas ideias.)</span></small>",
                "Include advanced [Math & Science Vocabulary]. <br><small><span style='color:#0077b6'>(Inclua vocabulário avançado de matemática e ciência.)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Wrap it up",
            items:[
                // --- 2A: Math & Science ---
                { term: "Mathematics", definition: "The abstract science of number, quantity, and space.", defTrans: "Matemática", example: "Mathematics is the language scientists use to explain the universe.", audioFront: "TTS: Mathematics", audioBack: "TTS: Mathematics is the language scientists use to explain the universe." },
                { term: "Application", definition: "The practical use of a concept or tool in real life.", defTrans: "Aplicação / Uso", example: "We study the real-life application of geometry.", audioFront: "TTS: Application", audioBack: "TTS: We study the real-life application of geometry." },
                { term: "Trigonometry", definition: "The branch of mathematics dealing with the relations of sides and angles.", defTrans: "Trigonometria", example: "Trigonometry helps us calculate the height of a tree.", audioFront: "TTS: Trigonometry", audioBack: "TTS: Trigonometry helps us calculate the height of a tree." },
                { term: "Fibonacci Sequence", definition: "A series of numbers found in nature where each number is the sum of the two preceding ones.", defTrans: "Sequência de Fibonacci", example: "The Fibonacci sequence appears in leaves.", audioFront: "TTS: Fibonacci Sequence", audioBack: "TTS: The Fibonacci sequence appears in leaves." },
                { term: "Concentric Circles", definition: "Circles with a common center.", defTrans: "Círculos Concêntricos", example: "The target has several concentric circles.", audioFront: "TTS: Concentric Circles", audioBack: "TTS: The target has several concentric circles." },
                { term: "Equation", definition: "A mathematical statement asserting equality.", defTrans: "Equação", example: "Can you solve this complex equation?", audioFront: "TTS: Equation", audioBack: "TTS: Can you solve this complex equation?" },
                { term: "Measurement", definition: "The action of measuring something.", defTrans: "Medida / Medição", example: "Precise measurement is the first step.", audioFront: "TTS: Measurement", audioBack: "TTS: Precise measurement is the first step." },
                { term: "Calculation", definition: "A mathematical determination of the size or number.", defTrans: "Cálculo", example: "According to my calculation, we have enough.", audioFront: "TTS: Calculation", audioBack: "TTS: According to my calculation, we have enough." },
                { term: "Angle", definition: "The space between two intersecting lines.", defTrans: "Ângulo", example: "Measure the angle of the sun.", audioFront: "TTS: Angle", audioBack: "TTS: Measure the angle of the sun." },

                // --- 2A: Space, Nature & Shapes ---
                { term: "Animation", definition: "The technique of creating an illusion of movement.", defTrans: "Animação", example: "Modern animation requires a lot of math.", audioFront: "TTS: Animation", audioBack: "TTS: Modern animation requires a lot of math." },
                { term: "Outer Space", definition: "The physical universe beyond the earth's atmosphere.", defTrans: "Espaço Sideral", example: "Math is essential for exploring outer space.", audioFront: "TTS: Outer Space", audioBack: "TTS: Math is essential for exploring outer space." },
                { term: "Pattern", definition: "A repeated decorative design or regular sequence.", defTrans: "Padrão", example: "Nature follows a repeating pattern.", audioFront: "TTS: Pattern", audioBack: "TTS: Nature follows a repeating pattern." },
                { term: "Sequence", definition: "A particular order in which things follow each other.", defTrans: "Sequência", example: "A numerical sequence can be found in a shell.", audioFront: "TTS: Sequence", audioBack: "TTS: A numerical sequence can be found in a shell." },
                { term: "Fractal", definition: "A curve or geometric figure that looks the same at any scale.", defTrans: "Fractal", example: "A fractal looks similar when you zoom in.", audioFront: "TTS: Fractal", audioBack: "TTS: A fractal looks similar when you zoom in." },
                { term: "Hexagon", definition: "A plane figure with six straight sides.", defTrans: "Hexágono", example: "The cell of a honeycomb is a perfect hexagon.", audioFront: "TTS: Hexagon", audioBack: "TTS: The cell of a honeycomb is a perfect hexagon." },
                { term: "Symmetry", definition: "The quality of being made up of exactly similar parts.", defTrans: "Simetria", example: "The symmetry of a snowflake is amazing.", audioFront: "TTS: Symmetry", audioBack: "TTS: The symmetry of a snowflake is amazing." },
                { term: "Nature", definition: "The physical world collectively.", defTrans: "Natureza", example: "Nature is full of hidden numbers.", audioFront: "TTS: Nature", audioBack: "TTS: Nature is full of hidden numbers." },
                { term: "Shape", definition: "The external form or appearance of something.", defTrans: "Forma / Formato", example: "What is the most efficient shape for a bridge?", audioFront: "TTS: Shape", audioBack: "TTS: What is the most efficient shape for a bridge?" },

                // --- 2A: Mind & Intelligence ---
                { term: "Intelligence", definition: "The ability to acquire and apply knowledge.", defTrans: "Inteligência", example: "Artificial intelligence uses complex logic.", audioFront: "TTS: Intelligence", audioBack: "TTS: Artificial intelligence uses complex logic." },
                { term: "Smart / Intelligent", definition: "Having or showing a quick-witted intelligence.", defTrans: "Inteligente", example: "She is a very smart scientist.", audioFront: "TTS: Smart, Intelligent", audioBack: "TTS: She is a very smart scientist." },
                { term: "Brain", definition: "The organ that serves as the center of the nervous system.", defTrans: "Cérebro", example: "The human brain is powerful.", audioFront: "TTS: Brain", audioBack: "TTS: The human brain is powerful." },
                { term: "Mind", definition: "The element of a person that enables them to be aware.", defTrans: "Mente", example: "Keep an open mind when learning.", audioFront: "TTS: Mind", audioBack: "TTS: Keep an open mind when learning." },
                { term: "Skill", definition: "The ability to do something well; expertise.", defTrans: "Habilidade", example: "Problem-solving is a crucial skill.", audioFront: "TTS: Skill", audioBack: "TTS: Problem-solving is a crucial skill." },
                { term: "Talent", definition: "Natural aptitude or skill.", defTrans: "Talento", example: "He has a natural talent for art.", audioFront: "TTS: Talent", audioBack: "TTS: He has a natural talent for art." },
                { term: "Potential", definition: "Having the capacity to become or develop into something.", defTrans: "Potencial", example: "You have great potential in mathematics.", audioFront: "TTS: Potential", audioBack: "TTS: You have great potential in mathematics." },

                // --- 2A: Phrasal Verbs (MAKE & PUT) ---
                { term: "Make up", definition: "To invent a story, excuse, or pattern.", defTrans: "Inventar / Compor", example: "The artist might make up a new pattern.", audioFront: "TTS: Make up", audioBack: "TTS: The artist might make up a new pattern." },
                { term: "Make out", definition: "To manage with difficulty to see or hear something.", defTrans: "Distinguir / Entender", example: "I can't make out the numbers from here.", audioFront: "TTS: Make out", audioBack: "TTS: I can't make out the numbers from here." },
                { term: "Make for", definition: "To move in the direction of a place.", defTrans: "Ir em direção a", example: "The satellite is making for deep space.", audioFront: "TTS: Make for", audioBack: "TTS: The satellite is making for deep space." },
                { term: "Make sense", definition: "To be intelligible or logical.", defTrans: "Fazer sentido", example: "This theory doesn't make sense.", audioFront: "TTS: Make sense", audioBack: "TTS: This theory doesn't make sense." },
                { term: "Make up for", definition: "To do something to correct a bad situation or lost time.", defTrans: "Compensar por", example: "I will study harder to make up for the lost time.", audioFront: "TTS: Make up for", audioBack: "TTS: I will study harder to make up for the lost time." },
                { term: "Make into", definition: "To change something so that it becomes something else.", defTrans: "Transformar em", example: "You can make these shapes into a character.", audioFront: "TTS: Make into", audioBack: "TTS: You can make these shapes into a character." },
                { term: "Put together", definition: "To assemble parts or data to create a whole.", defTrans: "Montar / Juntar", example: "Let's put together a team of scientists.", audioFront: "TTS: Put together", audioBack: "TTS: Let's put together a team of scientists." },
                { term: "Put forward", definition: "To suggest an idea or theory for consideration.", defTrans: "Propor / Apresentar", example: "She put forward a new theory.", audioFront: "TTS: Put forward", audioBack: "TTS: She put forward a new theory." },
                { term: "Put off", definition: "To delay an event or task.", defTrans: "Adiar", example: "Don't put off your studying.", audioFront: "TTS: Put off", audioBack: "TTS: Don't put off your studying." },
                { term: "Put up with", definition: "To accept an unpleasant situation without complaining.", defTrans: "Tolerar / Aguentar", example: "I can't put up with this noise anymore.", audioFront: "TTS: Put up with", audioBack: "TTS: I can't put up with this noise anymore." },
                { term: "Put down", definition: "To write something down on paper.", defTrans: "Anotar / Colocar no chão", example: "Please put down the formula in your notebooks.", audioFront: "TTS: Put down", audioBack: "TTS: Please put down the formula in your notebooks." },
                { term: "Put up", definition: "To build or erect a structure.", defTrans: "Erguer / Construir", example: "They will put up a new observatory.", audioFront: "TTS: Put up", audioBack: "TTS: They will put up a new observatory." },

                // --- 2A: Expressions of Logic ---
                { term: "That pattern might be a fractal", definition: "Expression of possibility using 'might'.", defTrans: "Aquele padrão pode ser um fractal.", example: "Look at the broccoli. That pattern might be a fractal.", audioFront: "TTS: That pattern might be a fractal", audioBack: "TTS: Look at the broccoli. That pattern might be a fractal." },
                { term: "It could be a Fibonacci sequence", definition: "Expression of possibility using 'could'.", defTrans: "Poderia ser uma sequência de Fibonacci.", example: "The number of petals is 5. It could be a Fibonacci sequence.", audioFront: "TTS: It could be a Fibonacci sequence", audioBack: "TTS: The number of petals is 5. It could be a Fibonacci sequence." },
                { term: "The bees must know...", definition: "Expression of deduction using 'must'.", defTrans: "As abelhas devem saber...", example: "The bees must know that hexagons are a strong shape.", audioFront: "TTS: The bees must know", audioBack: "TTS: The bees must know that hexagons are a strong shape." },
                { term: "That can't be a random design", definition: "Expression of deduction using 'can't'.", defTrans: "Aquilo não pode ser um design aleatório.", example: "The arrangement is too perfect. That can't be a random design.", audioFront: "TTS: That can't be a random design", audioBack: "TTS: The arrangement is too perfect. That can't be a random design." },
                { term: "The animators must have used...", definition: "Expression of past deduction using 'must have'.", defTrans: "Os animadores devem ter usado...", example: "The hair movement looks real. The animators must have used a lot of math.", audioFront: "TTS: The animators must have used", audioBack: "TTS: The hair movement looks real. The animators must have used a lot of math." },
                { term: "He might have made a mistake...", definition: "Expression of past possibility using 'might have'.", defTrans: "Ele pode ter cometido um erro...", example: "The result is incorrect. He might have made a mistake in his calculations.", audioFront: "TTS: He might have made a mistake", audioBack: "TTS: The result is incorrect. He might have made a mistake in his calculations." },

                // --- 3A: Grammar (Modals & Linking Words) ---
                { term: "MAY (Possibility)", definition: "Modal verb used for a quite likely possibility.", defTrans: "Pode (possibilidade alta)", example: "It may rain because the sky is dark.", audioFront: "TTS: MAY", audioBack: "TTS: It may rain because the sky is dark." },
                { term: "MIGHT (Possibility)", definition: "Modal verb used for a smaller or hypothetical chance.", defTrans: "Pode / Talvez (possibilidade menor)", example: "We might find life in outer space.", audioFront: "TTS: MIGHT", audioBack: "TTS: We might find life in outer space." },
                { term: "COULD (Possibility)", definition: "Modal verb used for general possibility or one of several options.", defTrans: "Poderia (possibilidade geral)", example: "This shape could be a circle.", audioFront: "TTS: COULD", audioBack: "TTS: This shape could be a circle." },
                { term: "MUST (Deduction)", definition: "Modal verb used when almost 100% sure something is true.", defTrans: "Deve (dedução lógica)", example: "They must be experts.", audioFront: "TTS: MUST", audioBack: "TTS: They must be experts." },
                { term: "CAN'T (Deduction)", definition: "Modal verb used when almost 100% sure something is impossible.", defTrans: "Não pode (impossibilidade)", example: "This can't be a random design.", audioFront: "TTS: CAN'T", audioBack: "TTS: This can't be a random design." },
                { term: "Past Modal + have + P.P.", definition: "Structure used for deductions or possibilities about finished events.", defTrans: "Modal + have + Particípio (dedução no passado)", example: "They must have used math.", audioFront: "TTS: Past Modal", audioBack: "TTS: They must have used math." },
                { term: "However / Nevertheless", definition: "Linking words used to show contrast between ideas.", defTrans: "No entanto / Contudo", example: "Math is hard. However, it is fascinating.", audioFront: "TTS: However, Nevertheless", audioBack: "TTS: Math is hard. However, it is fascinating." },
                { term: "Therefore / Consequently", definition: "Linking words used to introduce a logical consequence or result.", defTrans: "Portanto / Consequentemente", example: "He studied hard. Therefore, he succeeded.", audioFront: "TTS: Therefore, Consequently", audioBack: "TTS: He studied hard. Therefore, he succeeded." },
                { term: "Moreover / Furthermore", definition: "Linking words used to add extra information to an argument.", defTrans: "Além disso / Além do mais", example: "She is an artist. Moreover, she is a physicist.", audioFront: "TTS: Moreover, Furthermore", audioBack: "TTS: She is an artist. Moreover, she is a physicist." },
                { term: "So that", definition: "Linking phrase used to introduce a purpose or objective.", defTrans: "Para que", example: "I practice so that I can get smarter.", audioFront: "TTS: So that", audioBack: "TTS: I practice so that I can get smarter." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (For Tooltips & Reference)
    // ======================================================
    glossary:[
        // --- TOPIC 1: CONTEXT TOOLTIPS (From Step 0 & 1) ---
        { topic: "Context", term: "fractal", definition: "A curve or geometric figure, each part of which has the same statistical character as the whole.", translation: "Fractal" },
        { topic: "Context", term: "fibonacci-sequence", definition: "A series of numbers in which each number is the sum of the two preceding ones.", translation: "Sequência de Fibonacci" },
        { topic: "Context", term: "modals-possibility", definition: "Verbs like MAY, MIGHT, and COULD used to express uncertainty.", translation: "Modais de possibilidade" },
        { topic: "Context", term: "modals-deduction", definition: "Verbs like MUST and CAN'T used to make logical guesses.", translation: "Modais de dedução" },
        { topic: "Context", term: "phrasal-verbs", definition: "Verbs combined with another word, creating a new meaning.", translation: "Verbos Frasais" },
        { topic: "Context", term: "symmetry", definition: "The quality of being made up of exactly similar parts facing each other.", translation: "Simetria" },
        { topic: "Context", term: "pattern", definition: "A repeated decorative design or a regular sequence of events.", translation: "Padrão" },
        { topic: "Context", term: "calculation", definition: "A mathematical determination of the size or number of something.", translation: "Cálculo" },
        { topic: "Context", term: "logic", definition: "Reasoning conducted or assessed according to strict principles of validity.", translation: "Lógica" },
        { topic: "Context", term: "spiral", definition: "A curve which emanates from a point, moving farther away as it revolves.", translation: "Espiral" },
        { topic: "Context", term: "animation", definition: "The technique of photographing successive drawings or models to create movement.", translation: "Animação" },
        { topic: "Context", term: "equation", definition: "A mathematical statement that asserts the equality of two expressions.", translation: "Equação" },
        { topic: "Context", term: "detective", definition: "A person whose occupation is to investigate and solve crimes or mysteries.", translation: "Detetive" },
        { topic: "Context", term: "solve", definition: "To find an answer to a problem or mystery.", translation: "Resolver" },
        { topic: "Context", term: "whole-new-light", definition: "A new perspective or understanding.", translation: "Em uma nova luz" },
        { topic: "Context", term: "might-be", definition: "Modal indicating a possibility in the present.", translation: "Pode ser" },
        { topic: "Context", term: "could-be", definition: "Modal indicating a general possibility in the present.", translation: "Poderia ser" },
        { topic: "Context", term: "make-sense", definition: "To be intelligible, justifiable, or practicable.", translation: "Fazer sentido" },
        { topic: "Context", term: "must-have-used", definition: "Modal of deduction referring to a highly probable past action.", translation: "Devem ter usado" },
        { topic: "Context", term: "mathematics", definition: "The abstract science of number, quantity, and space.", translation: "Matemática" },
        { topic: "Context", term: "put-together", definition: "To assemble parts or data to create a whole.", translation: "Montar / Juntar" },
        { topic: "Context", term: "might-have-entered", definition: "Modal of past possibility about entering a place or state.", translation: "Pode ter entrado" },
        { topic: "Context", term: "make-out", definition: "To manage with difficulty to see, hear, or understand something.", translation: "Distinguir / Entender" },
        { topic: "Context", term: "cant-be", definition: "Modal of deduction referring to something almost certainly impossible.", translation: "Não pode ser" },
        { topic: "Context", term: "must-have-noticed", definition: "Modal of past deduction indicating a strong certainty about a past event.", translation: "Devem ter notado" },
        { topic: "Context", term: "must-have-done", definition: "Modal of past deduction indicating a strong certainty about a past action.", translation: "Devem ter feito" },
        { topic: "Context", term: "must-have-known", definition: "Modal of past deduction indicating a strong certainty about past knowledge.", translation: "Devem ter sabido" },
        { topic: "Context", term: "must-have-missed", definition: "Modal of past deduction indicating a strong certainty about a past oversight.", translation: "Devem ter perdido" },
        { topic: "Context", term: "must-have-been-working", definition: "Modal of past deduction indicating a strong certainty about a past ongoing action.", translation: "Devem ter estado trabalhando" },
        { topic: "Context", term: "might-have-made", definition: "Modal of past possibility about making a mistake.", translation: "Pode ter cometido" },
        { topic: "Context", term: "might-have-used", definition: "Modal of past possibility about using something.", translation: "Pode ter usado" },
        { topic: "Context", term: "mistake", definition: "An action or judgment that is misguided or wrong.", translation: "Erro" },
        { topic: "Context", term: "put-down", definition: "To criticize someone or oneself; also to write something down.", translation: "Criticar / Anotar" },
        { topic: "Context", term: "put-forward", definition: "To suggest an idea or theory for consideration.", translation: "Propor / Apresentar" },
        { topic: "Context", term: "theory", definition: "A system of ideas intended to explain something.", translation: "Teoria" },
        { topic: "Context", term: "must-know", definition: "Modal of present deduction indicating a strong certainty.", translation: "Devem saber" },
        { topic: "Context", term: "hexagon", definition: "A plane figure with six straight sides and angles.", translation: "Hexágono" },
        { topic: "Context", term: "shape", definition: "The external form or appearance of something.", translation: "Forma / Formato" },
        { topic: "Context", term: "honeycomb", definition: "A structure of hexagonal cells of wax, made by bees to store honey and eggs.", translation: "Favo de mel" },
        { topic: "Context", term: "put-off", definition: "To delay an event or task.", translation: "Adiar" },
        { topic: "Context", term: "trigonometry", definition: "The branch of mathematics dealing with the relations of sides and angles of triangles.", translation: "Trigonometria" },
        { topic: "Context", term: "universe", definition: "All existing matter and space considered as a whole; the cosmos.", translation: "Universo" },
        { topic: "Context", term: "seashell", definition: "The shell of a marine mollusk, often found on beaches.", translation: "Concha" },
        { topic: "Context", term: "nautilus-shell", definition: "A seashell with a logarithmic spiral shape.", translation: "Concha de náutilo" },
        { topic: "Context", term: "sunflowers", definition: "Plants with large, bright yellow flowers.", translation: "Girassóis" },
        { topic: "Context", term: "pinecones", definition: "The seed cones of pine trees.", translation: "Pinos" },
        { topic: "Context", term: "notice", definition: "To become aware of something or someone by sight or other senses.", translation: "Notar / Perceber" },
        { topic: "Context", term: "report", definition: "A written document containing information or findings.", translation: "Relatório" },
        { topic: "Context", term: "there-must-be", definition: "Modal of present deduction indicating a strong certainty about the existence of something.", translation: "Deve haver" },

        // --- TOPIC 2: MATH & SCIENCE ---
        { topic: "Math & Science", term: "application", definition: "The practical use of a concept or tool in real life.", translation: "Aplicação / Uso" },
        { topic: "Math & Science", term: "concentric-circles", definition: "Circles with a common center.", translation: "Círculos concêntricos" },
        { topic: "Math & Science", term: "measurement", definition: "The action of measuring something or the size found by measuring.", translation: "Medida / Medição" },
        { topic: "Math & Science", term: "angle", definition: "The space between two intersecting lines or surfaces.", translation: "Ângulo" },

        // --- TOPIC 3: SPACE, NATURE & SHAPES ---
        { topic: "Space & Shapes", term: "outer-space", definition: "The physical universe beyond the earth's atmosphere.", translation: "Espaço sideral" },
        { topic: "Space & Shapes", term: "sequence", definition: "A particular order in which related events, movements, or things follow each other.", translation: "Sequência" },

        // --- TOPIC 4: MIND & INTELLIGENCE ---
        { topic: "Mind & Intelligence", term: "intelligence", definition: "The ability to acquire and apply knowledge and skills.", translation: "Inteligência" },
        { topic: "Mind & Intelligence", term: "smart", definition: "Having or showing a quick-witted intelligence.", translation: "Inteligente" },
        { topic: "Mind & Intelligence", term: "brain", definition: "The organ that serves as the center of the nervous system.", translation: "Cérebro" },
        { topic: "Mind & Intelligence", term: "mind", definition: "The element of a person that enables them to be aware of the world.", translation: "Mente" },
        { topic: "Mind & Intelligence", term: "skill", definition: "The ability to do something well; expertise.", translation: "Habilidade" },
        { topic: "Mind & Intelligence", term: "talent", definition: "Natural aptitude or skill.", translation: "Talento" },
        { topic: "Mind & Intelligence", term: "potential", definition: "Having or showing the capacity to become or develop into something in the future.", translation: "Potencial" },

        // --- TOPIC 5: PHRASAL VERBS ---
        { topic: "Phrasal Verbs", term: "make-up", definition: "To invent a story, excuse, or pattern.", translation: "Inventar / Compor" },
        { topic: "Phrasal Verbs", term: "make-out", definition: "To manage with difficulty to see or hear something.", translation: "Distinguir / Entender" },
        { topic: "Phrasal Verbs", term: "make-for", definition: "To move in the direction of a place.", translation: "Ir em direção a" },
        { topic: "Phrasal Verbs", term: "make-sense", definition: "To be intelligible, justifiable, or practicable.", translation: "Fazer sentido" },
        { topic: "Phrasal Verbs", term: "make-up-for", definition: "To do something to correct a bad situation or lost time.", translation: "Compensar por" },
        { topic: "Phrasal Verbs", term: "make-into", definition: "To change something so that it becomes something else.", translation: "Transformar em" },
        { topic: "Phrasal Verbs", term: "put-together", definition: "To assemble parts or data to create a whole.", translation: "Montar / Juntar" },
        { topic: "Phrasal Verbs", term: "put-forward", definition: "To suggest an idea or theory for consideration.", translation: "Propor / Apresentar" },
        { topic: "Phrasal Verbs", term: "put-off", definition: "To delay an event or task.", translation: "Adiar" },
        { topic: "Phrasal Verbs", term: "put-up-with", definition: "To accept an unpleasant situation without complaining.", translation: "Tolerar / Aguentar" },
        { topic: "Phrasal Verbs", term: "put-down", definition: "To write something down on paper.", translation: "Anotar" },
        { topic: "Phrasal Verbs", term: "put-up", definition: "To build or erect a structure.", translation: "Erguer / Construir" },

        // --- TOPIC 6: EXPRESSIONS ---
        { topic: "Expressions", term: "that-pattern-might-be-a-fractal", definition: "Expression of possibility using 'might'.", translation: "Aquele padrão pode ser um fractal" },
        { topic: "Expressions", term: "it-could-be-a-fibonacci-sequence", definition: "Expression of possibility using 'could'.", translation: "Poderia ser uma sequência de Fibonacci" },
        { topic: "Expressions", term: "the-bees-must-know", definition: "Expression of deduction using 'must'.", translation: "As abelhas devem saber" },
        { topic: "Expressions", term: "that-cant-be-a-random-design", definition: "Expression of deduction using 'can't'.", translation: "Aquilo não pode ser um design aleatório" },
        { topic: "Expressions", term: "the-animators-must-have-used", definition: "Expression of past deduction using 'must have'.", translation: "Os animadores devem ter usado" },
        { topic: "Expressions", term: "he-might-have-made-a-mistake", definition: "Expression of past possibility using 'might have'.", translation: "Ele pode ter cometido um erro" },

        // --- TOPIC 7: GRAMMAR ---
        { topic: "Grammar", term: "may", definition: "Modal verb used for a quite likely possibility or formal permission.", translation: "Pode (possibilidade alta)" },
        { topic: "Grammar", term: "might", definition: "Modal verb used for a smaller or more hypothetical chance.", translation: "Pode / Talvez (possibilidade menor)" },
        { topic: "Grammar", term: "could", definition: "Modal verb used for general possibility or one of several options.", translation: "Poderia (possibilidade geral)" },
        { topic: "Grammar", term: "must", definition: "Modal verb used when you are almost 100% sure something is true.", translation: "Deve (dedução lógica)" },
        { topic: "Grammar", term: "cant", definition: "Modal verb used when you are almost 100% sure something is impossible.", translation: "Não pode (impossibilidade)" },
        { topic: "Grammar", term: "past-modals", definition: "Structure used for deductions or possibilities about finished events (Modal + have + P.P.).", translation: "Modais no passado" },
        { topic: "Grammar", term: "however", definition: "Linking word used to show contrast between ideas.", translation: "No entanto" },
        { topic: "Grammar", term: "nevertheless", definition: "Linking word used to show contrast, similar to 'however'.", translation: "Contudo / Todavia" },
        { topic: "Grammar", term: "on-the-other-hand", definition: "Linking phrase used to present a contrasting point of view.", translation: "Por outro lado" },
        { topic: "Grammar", term: "therefore", definition: "Linking word used to introduce a logical consequence or result.", translation: "Portanto" },
        { topic: "Grammar", term: "as-a-result", definition: "Linking phrase used to show the outcome of an action.", translation: "Como resultado" },
        { topic: "Grammar", term: "consequently", definition: "Linking word used to show a direct result of something.", translation: "Consequentemente" },
        { topic: "Grammar", term: "moreover", definition: "Linking word used to add extra information to an argument.", translation: "Além disso" },
        { topic: "Grammar", term: "furthermore", definition: "Linking word used to add more information in a formal way.", translation: "Além do mais" },
        { topic: "Grammar", term: "also", definition: "Linking word used to add another point.", translation: "Também" },
        { topic: "Grammar", term: "in-addition", definition: "Linking phrase used to add information.", translation: "Além disso" },
        { topic: "Grammar", term: "besides", definition: "Linking word used to add a related point.", translation: "Além de" },
        { topic: "Grammar", term: "so-that", definition: "Linking phrase used to introduce a purpose or objective.", translation: "Para que" }
    ]
});