/**
 * REACH English - LESSON DATA 6-4-8
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "6-4-8", 
    grade: "6th Grade",       
    bimester: "4",   
    chapter: "8",    
    chapterTitle: "How Do I Get There?", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "In this lesson, you will learn to:<br><br>• Name common places in a city.<br>• Ask for and give directions.<br>• Use the imperative form (\"Turn left\", \"Go straight\").<br>• Use prepositions of place and direction (\"next to\", \"between\").<br>• Identify means of transportation.",
            welcome: "Hello, Explorers! It's Mr. D!<br><br>Welcome to \"How Do I Get There?\". Imagine you are in a new city and want to find a museum or a park. Today, we will learn how to ask for help and give directions like a pro! We'll master words for places, transportation, and the special grammar we use to guide people. Grab your map, and let's explore the city together!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Name common places in a city. Ask for and give directions. Use the imperative form, such as Turn left or Go straight. Use prepositions of place and direction, like next to or between. Identify means of transportation.",
                welcome: "TTS: Hello, Explorers! It's Mr. D! Welcome to How Do I Get There? Imagine you are in a new city and want to find a museum or a park. Today, we will learn how to ask for help and give directions like a pro! We'll master words for places, transportation, and the special grammar we use to guide people. Grab your map, and let's explore the city together!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of city traffic and people walking. Celine is holding a map, looking confused. Albert walks up to her.", 
            contextAudio: "audio/6-4-8/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Excuse me. How do I get to the [City Museum](tooltip:city-museum)? I think I am [lost](tooltip:lost)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Oh, it is not far. We are on [Park Avenue](tooltip:avenue) now." 
                },
                { 
                    speaker: "Celine", 
                    text: "Okay. Do I [go straight ahead](tooltip:go-straight-ahead)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "Yes. [Go straight ahead](tooltip:go-straight-ahead) for two [blocks](tooltip:block). Then, [turn left](tooltip:turn-left) at the [corner](tooltip:corner)." 
                },
                { 
                    speaker: "Celine", 
                    text: "[Turn left](tooltip:turn-left). Is it [next to](tooltip:next-to) the [bank](tooltip:bank)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "No, it is [across from](tooltip:across-from) the [park](tooltip:park). You can't miss it!" 
                },
                { 
                    speaker: "Celine", 
                    text: "Thank you! I can [walk](tooltip:walk) there easily." 
                },
                { 
                    speaker: "Albert", 
                    text: "You're welcome. Enjoy the [sightseeing](tooltip:sightseeing)!" 
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
                    title: "Places Around a City",
                    audio: "TTS: City. Street. Avenue. Corner. Bank. Post Office. Supermarket. Bus Stop. Museum. Park. Restaurant. Hotel. School. Hospital. Library. Train Station.",
                    items: [
                        { term: "City", trans: "Cidade" },
                        { term: "Street", trans: "Rua" },
                        { term: "Avenue", trans: "Avenida" },
                        { term: "Corner", trans: "Esquina" },
                        { term: "Bank", trans: "Banco" },
                        { term: "Post Office", trans: "Correios" },
                        { term: "Supermarket", trans: "Supermercado" },
                        { term: "Bus Stop", trans: "Ponto de ônibus" },
                        { term: "Museum", trans: "Museu" },
                        { term: "Park", trans: "Parque" },
                        { term: "Restaurant", trans: "Restaurante" },
                        { term: "Hotel", trans: "Hotel" },
                        { term: "School", trans: "Escola" },
                        { term: "Hospital", trans: "Hospital" },
                        { term: "Library", trans: "Biblioteca" },
                        { term: "Train Station", trans: "Estação de trem" }
                    ]
                },
                {
                    title: "Sightseeing Verbs",
                    audio: "TTS: Ask for directions. Give directions. Walk. Cross. Tourist. Sightseeing. Block. Map.",
                    items: [
                        { term: "Ask for directions", trans: "Pedir informações" },
                        { term: "Give directions", trans: "Dar informações" },
                        { term: "Walk", trans: "Caminhar / Andar" },
                        { term: "Cross", trans: "Atravessar" },
                        { term: "Tourist", trans: "Turista" },
                        { term: "Sightseeing", trans: "Passeio turístico" },
                        { term: "Block", trans: "Quarteirão / Quadra" },
                        { term: "Map", trans: "Mapa" }
                    ]
                },
                {
                    title: "Means of Transportation",
                    audio: "TTS: Car. Bicycle. Bike. Subway. Motorcycle. Bus. Train. Plane. On foot.",
                    items: [
                        { term: "Car", trans: "Carro" },
                        { term: "Bicycle / Bike", trans: "Bicicleta" },
                        { term: "Subway", trans: "Metrô" },
                        { term: "Motorcycle", trans: "Moto" },
                        { term: "Bus", trans: "Ônibus" },
                        { term: "Train", trans: "Trem" },
                        { term: "Plane", trans: "Avião" },
                        { term: "On foot", trans: "A pé" }
                    ]
                },
                {
                    title: "Phrases (Imperatives)",
                    audio: "TTS: Go straight ahead. Turn left. Turn right. Excuse me. How do I get to?",
                    items: [
                        { term: "Go straight ahead", trans: "Siga reto / Vá em frente" },
                        { term: "Turn left", trans: "Vire à esquerda" },
                        { term: "Turn right", trans: "Vire à direita" },
                        { term: "Excuse me", trans: "Com licença" },
                        { term: "How do I get to...?", trans: "Como eu chego ao...?" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Places Around a City",
                    audio: "TTS: New York is a big city. I live on this street. The shops are on the avenue. Meet me at the corner. I need money from the bank. Mail the letter at the post office. We buy food at the supermarket. Wait at the bus stop. The art is in the museum. Kids play in the park. Let's eat at a restaurant. Tourists sleep in a hotel. Students go to school. Doctors work in the hospital. Read books at the library. The train leaves from the station.",
                    items: [
                        { term: "City", sent: "New York is a big city.", trans: "<span style='color:#0077b6'>Nova York é uma cidade grande.</span>" },
                        { term: "Street", sent: "I live on this street.", trans: "<span style='color:#0077b6'>Eu moro nesta rua.</span>" },
                        { term: "Avenue", sent: "The shops are on the avenue.", trans: "<span style='color:#0077b6'>As lojas ficam na avenida.</span>" },
                        { term: "Corner", sent: "Meet me at the corner.", trans: "<span style='color:#0077b6'>Me encontre na esquina.</span>" },
                        { term: "Bank", sent: "I need money from the bank.", trans: "<span style='color:#0077b6'>Preciso de dinheiro do banco.</span>" },
                        { term: "Post Office", sent: "Mail the letter at the post office.", trans: "<span style='color:#0077b6'>Envie a carta nos correios.</span>" },
                        { term: "Supermarket", sent: "We buy food at the supermarket.", trans: "<span style='color:#0077b6'>Nós compramos comida no supermercado.</span>" },
                        { term: "Bus Stop", sent: "Wait at the bus stop.", trans: "<span style='color:#0077b6'>Espere no ponto de ônibus.</span>" },
                        { term: "Museum", sent: "The art is in the museum.", trans: "<span style='color:#0077b6'>A arte está no museu.</span>" },
                        { term: "Park", sent: "Kids play in the park.", trans: "<span style='color:#0077b6'>Crianças brincam no parque.</span>" },
                        { term: "Restaurant", sent: "Let's eat at a restaurant.", trans: "<span style='color:#0077b6'>Vamos comer em um restaurante.</span>" },
                        { term: "Hotel", sent: "Tourists sleep in a hotel.", trans: "<span style='color:#0077b6'>Turistas dormem em um hotel.</span>" },
                        { term: "School", sent: "Students go to school.", trans: "<span style='color:#0077b6'>Estudantes vão para a escola.</span>" },
                        { term: "Hospital", sent: "Doctors work in the hospital.", trans: "<span style='color:#0077b6'>Médicos trabalham no hospital.</span>" },
                        { term: "Library", sent: "Read books at the library.", trans: "<span style='color:#0077b6'>Leia livros na biblioteca.</span>" },
                        { term: "Train Station", sent: "The train leaves from the station.", trans: "<span style='color:#0077b6'>O trem sai da estação.</span>" }
                    ]
                },
                {
                    title: "Sightseeing Verbs",
                    audio: "TTS: If you are lost, ask for directions. Can you give directions to the park? It is close, let's walk. Cross the street carefully. The tourist has a camera. We are going sightseeing today. Walk one block. Look at the map.",
                    items: [
                        { term: "Ask for directions", sent: "If you are lost, ask for directions.", trans: "<span style='color:#0077b6'>Se você estiver perdido, peça informações.</span>" },
                        { term: "Give directions", sent: "Can you give directions to the park?", trans: "<span style='color:#0077b6'>Você pode dar informações para o parque?</span>" },
                        { term: "Walk", sent: "It is close, let's walk.", trans: "<span style='color:#0077b6'>É perto, vamos andar.</span>" },
                        { term: "Cross", sent: "Cross the street carefully.", trans: "<span style='color:#0077b6'>Atravesse a rua com cuidado.</span>" },
                        { term: "Tourist", sent: "The tourist has a camera.", trans: "<span style='color:#0077b6'>O turista tem uma câmera.</span>" },
                        { term: "Sightseeing", sent: "We are going sightseeing today.", trans: "<span style='color:#0077b6'>Nós vamos fazer um passeio turístico hoje.</span>" },
                        { term: "Block", sent: "Walk one block.", trans: "<span style='color:#0077b6'>Ande um quarteirão.</span>" },
                        { term: "Map", sent: "Look at the map.", trans: "<span style='color:#0077b6'>Olhe para o mapa.</span>" }
                    ]
                },
                {
                    title: "Means of Transportation",
                    audio: "TTS: He drives a car. I ride my bicycle to school. The subway is fast. She has a fast motorcycle. Take the bus to the center. We travel by train. The plane flies high. We go on foot.",
                    items: [
                        { term: "Car", sent: "He drives a car.", trans: "<span style='color:#0077b6'>Ele dirige um carro.</span>" },
                        { term: "Bicycle", sent: "I ride my bicycle to school.", trans: "<span style='color:#0077b6'>Eu vou de bicicleta para a escola.</span>" },
                        { term: "Subway", sent: "The subway is fast.", trans: "<span style='color:#0077b6'>O metrô é rápido.</span>" },
                        { term: "Motorcycle", sent: "She has a fast motorcycle.", trans: "<span style='color:#0077b6'>Ela tem uma moto rápida.</span>" },
                        { term: "Bus", sent: "Take the bus to the center.", trans: "<span style='color:#0077b6'>Pegue o ônibus para o centro.</span>" },
                        { term: "Train", sent: "We travel by train.", trans: "<span style='color:#0077b6'>Nós viajamos de trem.</span>" },
                        { term: "Plane", sent: "The plane flies high.", trans: "<span style='color:#0077b6'>O avião voa alto.</span>" },
                        { term: "On foot", sent: "We go on foot.", trans: "<span style='color:#0077b6'>Nós vamos a pé.</span>" }
                    ]
                },
                {
                    title: "Phrases (Imperatives)",
                    audio: "TTS: Go straight ahead and stop. Turn left at the bank. Turn right at the light. Excuse me, where is the museum? How do I get to the hotel?",
                    items: [
                        { term: "Go straight ahead", sent: "Go straight ahead and stop.", trans: "<span style='color:#0077b6'>Siga em frente e pare.</span>" },
                        { term: "Turn left", sent: "Turn left at the bank.", trans: "<span style='color:#0077b6'>Vire à esquerda no banco.</span>" },
                        { term: "Turn right", sent: "Turn right at the light.", trans: "<span style='color:#0077b6'>Vire à direita no semáforo.</span>" },
                        { term: "Excuse me", sent: "Excuse me, where is the museum?", trans: "<span style='color:#0077b6'>Com licença, onde fica o museu?</span>" },
                        { term: "How do I get to...?", sent: "How do I get to the hotel?", trans: "<span style='color:#0077b6'>Como eu chego ao hotel?</span>" }
                    ]
                }
            ],

            // 2C: Practice MCQ Drills (24 Exercises, 4 Options Each)
            drills: [
                {
                    type: "mcq",
                    q: "Where do you buy food?",
                    options: [
                        { t: "Bank", c: false },
                        { t: "Library", c: false },
                        { t: "Supermarket", c: true },
                        { t: "Post Office", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Where do you go when you are sick?",
                    options: [
                        { t: "Park", c: false },
                        { t: "Hospital", c: true },
                        { t: "Museum", c: false },
                        { t: "School", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the opposite of 'Turn left':",
                    options: [
                        { t: "Go straight", c: false },
                        { t: "Turn right", c: true },
                        { t: "Cross", c: false },
                        { t: "Stop", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which one flies in the air?",
                    options: [
                        { t: "Bus", c: false },
                        { t: "Subway", c: false },
                        { t: "Plane", c: true },
                        { t: "Bicycle", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If you walk, you go...",
                    options: [
                        { t: "on foot", c: true },
                        { t: "by car", c: false },
                        { t: "on train", c: false },
                        { t: "by bus", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To go forward without turning, you...",
                    options: [
                        { t: "turn left", c: false },
                        { t: "turn right", c: false },
                        { t: "go straight ahead", c: true },
                        { t: "cross", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A person visiting a new city is a...",
                    options: [
                        { t: "Driver", c: false },
                        { t: "Tourist", c: true },
                        { t: "Doctor", c: false },
                        { t: "Teacher", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You use this to find your way:",
                    options: [
                        { t: "Book", c: false },
                        { t: "Map", c: true },
                        { t: "Menu", c: false },
                        { t: "Ticket", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A polite way to start a question to a stranger:",
                    options: [
                        { t: "Hello you", c: false },
                        { t: "Excuse me", c: true },
                        { t: "Listen", c: false },
                        { t: "Hey", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Where can you borrow books?",
                    options: [
                        { t: "Bank", c: false },
                        { t: "Library", c: true },
                        { t: "Hotel", c: false },
                        { t: "Restaurant", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which place is used for mailing letters?",
                    options: [
                        { t: "Bank", c: false },
                        { t: "Post Office", c: true },
                        { t: "Avenue", c: false },
                        { t: "Corner", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Where do tourists usually stay to sleep?",
                    options: [
                        { t: "Museum", c: false },
                        { t: "Supermarket", c: false },
                        { t: "Hotel", c: true },
                        { t: "Corner", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The train leaves from the train _______.",
                    options: [
                        { t: "Stop", c: false },
                        { t: "Avenue", c: false },
                        { t: "Station", c: true },
                        { t: "Corner", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If you move from one side of the street to the other, you _______.",
                    options: [
                        { t: "cross", c: true },
                        { t: "turn", c: false },
                        { t: "stop", c: false },
                        { t: "stay", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A very wide road with trees is usually called an _______.",
                    options: [
                        { t: "Aisle", c: false },
                        { t: "Avenue", c: true },
                        { t: "Corner", c: false },
                        { t: "Block", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which vehicle has only two wheels and a motor?",
                    options: [
                        { t: "Car", c: false },
                        { t: "Subway", c: false },
                        { t: "Motorcycle", c: true },
                        { t: "Bus", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Where two streets meet, we call it a _______.",
                    options: [
                        { t: "Block", c: false },
                        { t: "Avenue", c: false },
                        { t: "Corner", c: true },
                        { t: "City", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "We wait for the bus at the bus _______.",
                    options: [
                        { t: "Corner", c: false },
                        { t: "Stop", c: true },
                        { t: "Station", c: false },
                        { t: "City", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A large public garden is a _______.",
                    options: [
                        { t: "Park", c: true },
                        { t: "Hotel", c: false },
                        { t: "School", c: false },
                        { t: "Museum", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The underground train is called the _______.",
                    options: [
                        { t: "Plane", c: false },
                        { t: "Subway", c: true },
                        { t: "Bicycle", c: false },
                        { t: "Car", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What do we call a square area with buildings and four streets around it?",
                    options: [
                        { t: "Corner", c: false },
                        { t: "Avenue", c: false },
                        { t: "Block", c: true },
                        { t: "City", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which vehicle travels on tracks (trilhos)?",
                    options: [
                        { t: "Car", c: false },
                        { t: "Subway", c: false },
                        { t: "Train", c: true },
                        { t: "Plane", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What is the opposite of 'Turn right'?",
                    options: [
                        { t: "Turn left", c: true },
                        { t: "Go past", c: false },
                        { t: "Walk", c: false },
                        { t: "Cross", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To see ancient objects and history, you visit a _______.",
                    options: [
                        { t: "Supermarket", c: false },
                        { t: "Bank", c: false },
                        { t: "Museum", c: true },
                        { t: "Bus Stop", c: false }
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
                    title: "The Imperative Form",
                    audio: "TTS: We use the imperative to give instructions, directions, and commands. It is very simple because we don't use a subject. The verb comes first. Turn right. Go straight. Cross the street. Don't turn left. Don't walk fast.",
                    explanation: "We use the imperative to give instructions, directions, and commands. It's very simple because we don't use a subject (like 'you'). The verb comes first!<br><br><span style='color:#0077b6; font-style:italic;'>(Nós usamos o imperativo para dar instruções, direções e comandos. É muito simples porque não usamos um sujeito (como 'você'). O verbo vem primeiro!)</span>",
                    samples: [
                        { en: "Affirmative: Use the base verb (e.g., Turn right, Go straight).", pt: "<span style='color:#0077b6'>(Afirmativa: Use o verbo base).</span>" },
                        { en: "Negative: Use Don't + base verb (e.g., Don't turn left).", pt: "<span style='color:#0077b6'>(Negativa: Use Don't + verbo base).</span>" },
                        { en: "Walk two blocks. Don't run.", pt: "<span style='color:#0077b6'>Caminhe dois quarteirões. Não corra.</span>" }
                    ]
                },
                {
                    title: "Prepositions of Place",
                    audio: "TTS: We use these prepositions to say exactly where a place is. Next to. Between. In front of. Behind. Across from. On the corner of. Near.",
                    explanation: "We use these prepositions to say exactly where a place is in relation to another place.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos essas preposições para dizer exatamente onde um lugar está em relação a outro lugar.)</span>",
                    samples: [
                        { en: "Next to: The bank is next to the hotel.", pt: "<span style='color:#0077b6'>(Ao lado de).</span>" },
                        { en: "Between: The school is between the park and the museum.", pt: "<span style='color:#0077b6'>(Entre dois).</span>" },
                        { en: "Across from / Opposite: The library is across from the station.", pt: "<span style='color:#0077b6'>(Do outro lado de / Em frente a).</span>" },
                        { en: "On the corner of: The bakery is on the corner of Main St.", pt: "<span style='color:#0077b6'>(Na esquina de).</span>" }
                    ]
                },
                {
                    title: "Prepositions of Direction",
                    audio: "TTS: When giving directions, we use prepositions that show movement. Go up the street. Turn left at the light. Go straight ahead for two blocks. Cross the avenue. Go past the cinema.",
                    explanation: "When giving directions, we use prepositions that show movement.<br><br><span style='color:#0077b6; font-style:italic;'>(Ao dar direções, usamos preposições que mostram movimento.)</span>",
                    samples: [
                        { en: "Go up / Go down: Go down this street.", pt: "<span style='color:#0077b6'>(Suba / Desça a rua).</span>" },
                        { en: "Turn left / right: Turn right at the light.", pt: "<span style='color:#0077b6'>(Vire à esquerda / direita).</span>" },
                        { en: "Go straight ahead: Go straight ahead for two blocks.", pt: "<span style='color:#0077b6'>(Siga em frente).</span>" },
                        { en: "Go past: Go past the cinema.", pt: "<span style='color:#0077b6'>(Passe por / Passe direto pelo).</span>" }
                    ]
                }
            ],

            // 3B: Natural Examples (Dialogues Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: The Imperative (Instructions)",
                    audio: "audio/6-4-8/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "How do I start the car?", 
                            pt: "<span style='color:#0077b6'><i>Como eu ligo o carro?</i></span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "First, put on your seatbelt. Don't touch the radio yet. Turn the key.", 
                            pt: "<span style='color:#0077b6'><i>Primeiro, coloque o cinto. Não toque no rádio ainda. Gire a chave.</i></span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Prepositions of Place (Location)",
                    audio: "audio/6-4-8/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Tourist", 
                            text: "Excuse me, where is the Italian restaurant?", 
                            pt: "<span style='color:#0077b6'><i>Com licença, onde fica o restaurante italiano?</i></span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "It is next to the cinema. It is across from the big park.", 
                            pt: "<span style='color:#0077b6'><i>Fica ao lado do cinema. Fica em frente ao grande parque.</i></span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Giving Directions",
                    audio: "audio/6-4-8/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "How do I get to the library?", 
                            pt: "<span style='color:#0077b6'><i>Como eu chego à biblioteca?</i></span>" 
                        },
                        { 
                            speaker: "Mrs. Canales", 
                            text: "Go straight ahead on this street. Turn right at the corner. The library is on the left, between the school and the post office.", 
                            pt: "<span style='color:#0077b6'><i>Siga em frente nesta rua. Vire à direita na esquina. A biblioteca fica à esquerda, entre a escola e os correios.</i></span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ Drills (Expanded to 24)
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Imperative (Affirmative): Complete: '_______ straight ahead.'",
                    options: [
                        { t: "Goes", c: false },
                        { t: "Going", c: false },
                        { t: "Go", c: true },
                        { t: "To go", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Imperative (Negative): Complete: '_______ turn right! It's the wrong way.'",
                    options: [
                        { t: "No", c: false },
                        { t: "Not", c: false },
                        { t: "Don't", c: true },
                        { t: "Doesn't", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions (Place): 'The bank is _______ the post office and the cafe.'",
                    options: [
                        { t: "next to", c: false },
                        { t: "between", c: true },
                        { t: "on the corner", c: false },
                        { t: "behind", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions (Place): 'The school is _______ the park (on the other side of the street).'",
                    options: [
                        { t: "in front of", c: false },
                        { t: "across from", c: true },
                        { t: "between", c: false },
                        { t: "on", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions (Place): 'The bus stop is _______ the museum (at the front).'",
                    options: [
                        { t: "behind", c: false },
                        { t: "in front of", c: true },
                        { t: "between", c: false },
                        { t: "under", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Directions: '_______ the street at the traffic light.'",
                    options: [
                        { t: "Cross", c: true },
                        { t: "Across", c: false },
                        { t: "Crossing", c: false },
                        { t: "Crosses", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Directions: '_______ left at the bank.'",
                    options: [
                        { t: "Go", c: false },
                        { t: "Turn", c: true },
                        { t: "Walk", c: false },
                        { t: "Run", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Mixed: 'Where is the hotel?' 'It's _______ the corner.'",
                    options: [
                        { t: "in", c: false },
                        { t: "at", c: false },
                        { t: "on", c: true },
                        { t: "to", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Mixed: '_______ walk on the grass!'",
                    options: [
                        { t: "Not", c: false },
                        { t: "No", c: false },
                        { t: "Don't", c: true },
                        { t: "Doesn't", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Directions: 'Go _______ the supermarket and stop.'",
                    options: [
                        { t: "past", c: true },
                        { t: "passed", c: false },
                        { t: "pass", c: false },
                        { t: "passing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions (Place): 'The library is _______ to the school.'",
                    options: [
                        { t: "between", c: false },
                        { t: "behind", c: false },
                        { t: "next", c: true },
                        { t: "across", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Directions: '_______ (suba) the street to the museum.'",
                    options: [
                        { t: "Go down", c: false },
                        { t: "Go up", c: true },
                        { t: "Turn", c: false },
                        { t: "Cross", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions (Place): 'My house is _______ (atrás de) the park.'",
                    options: [
                        { t: "near", c: false },
                        { t: "between", c: false },
                        { t: "behind", c: true },
                        { t: "opposite", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Imperative: '_______ (não ande) fast. The street is wet.'",
                    options: [
                        { t: "No walk", c: false },
                        { t: "Don't walk", c: true },
                        { t: "Not walk", c: false },
                        { t: "Doesn't walk", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions (Place): 'The hotel is _______ (perto de) the station.'",
                    options: [
                        { t: "near", c: true },
                        { t: "on", c: false },
                        { t: "at", c: false },
                        { t: "between", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Directions: '_______ (desça) for three blocks.'",
                    options: [
                        { t: "Go up", c: false },
                        { t: "Go down", c: true },
                        { t: "Turn", c: false },
                        { t: "Cross", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Directions: '_______ right at the corner.'",
                    options: [
                        { t: "Walk", c: false },
                        { t: "Go", c: false },
                        { t: "Turn", c: true },
                        { t: "Past", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions (Place): 'The bakery is _______ the hospital and the school.'",
                    options: [
                        { t: "next to", c: false },
                        { t: "between", c: true },
                        { t: "across", c: false },
                        { t: "on", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions (Place): 'The library is _______ the bank (opposite).'",
                    options: [
                        { t: "behind", c: false },
                        { t: "near", c: false },
                        { t: "across from", c: true },
                        { t: "between", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Directions: '_______ (siga em frente) until the park.'",
                    options: [
                        { t: "Turn left", c: false },
                        { t: "Go straight ahead", c: true },
                        { t: "Cross", c: false },
                        { t: "Go past", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Imperative: '_______ (não corra) in the museum!'",
                    options: [
                        { t: "No run", c: false },
                        { t: "Not run", c: false },
                        { t: "Don't run", c: true },
                        { t: "Doesn't run", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions: 'The pharmacy is _______ the corner of Main St.'",
                    options: [
                        { t: "at", c: false },
                        { t: "between", c: false },
                        { t: "on", c: true },
                        { t: "in", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions (Place): 'The car is _______ the house.'",
                    options: [
                        { t: "between", c: false },
                        { t: "in front of", c: true },
                        { t: "on", c: false },
                        { t: "at", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions: 'The museum is _______ (em frente a) the theater.'",
                    options: [
                        { t: "opposite", c: true },
                        { t: "next", c: false },
                        { t: "behind", c: false },
                        { t: "under", c: false }
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
                    text: "Excuse me, where is the bank?<br><small style='color:#0077b6'>(Com licença, onde fica o banco?)</small>", 
                    audio: "TTS: Excuse me, where is the bank?", 
                    arrow: "↗" 
                },
                { 
                    text: "Go straight ahead for two blocks.<br><small style='color:#0077b6'>(Siga em frente por dois quarteirões.)</small>", 
                    audio: "TTS: Go straight ahead for two blocks.", 
                    arrow: "↘" 
                },
                { 
                    text: "Turn left at the corner.<br><small style='color:#0077b6'>(Vire à esquerda na esquina.)</small>", 
                    audio: "TTS: Turn left at the corner.", 
                    arrow: "↘" 
                },
                { 
                    text: "The hospital is across from the park.<br><small style='color:#0077b6'>(O hospital fica em frente ao parque.)</small>", 
                    audio: "TTS: The hospital is across from the park.", 
                    arrow: "↘" 
                },
                { 
                    text: "Don't cross the street here.<br><small style='color:#0077b6'>(Não atravesse a rua aqui.)</small>", 
                    audio: "TTS: Don't cross the street here.", 
                    arrow: "↘" 
                },
                { 
                    text: "It is between the school and the library.<br><small style='color:#0077b6'>(Fica entre a escola e a biblioteca.)</small>", 
                    audio: "TTS: It is between the school and the library.", 
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
                    instruction: "Listen to Albert giving directions to his house. Type the missing words. <br><small style='color:#0077b6'>(Ouça Albert dando instruções para sua casa. Digite as palavras que faltam.)</small>",
                    audio: "TTS: To get to my house, go straight on Main Street. Then, turn right. My house is next to the bakery.",
                    text: "To get to my house, [go] straight on Main Street. Then, [turn] right. My house is [next to] the bakery."
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation and choose the correct option. <br><small style='color:#0077b6'>(Ouça a conversa e escolha a opção correta.)</small>",
                    audio: "audio/6-4-8/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Celine: Excuse me. Is there a [subway | bus] station near here?", 
                            a: "subway" 
                        },
                        { 
                            q: "Officer: Yes. Go down this street and [turn | look] left.", 
                            a: "turn" 
                        },
                        { 
                            q: "Celine: Is it [far | close]?", 
                            a: "far" 
                        },
                        { 
                            q: "Officer: No, it is on the [corner | block].", 
                            a: "corner" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the instruction and choose the correct sign description. <br><small style='color:#0077b6'>(Ouça a instrução e escolha a descrição correta da placa.)</small>",
                    audio: "TTS: Don't turn right.",
                    options: [
                        { t: "Turn Left", c: false },
                        { t: "Do Not Turn Right", c: true },
                        { t: "Go Straight", c: false },
                        { t: "Crosswalk Ahead", c: false }
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
                    title: "Narration: A Day in the Big City",
                    audio: "TTS: Welcome to Metro City! It is a very busy place. There are many tall buildings and wide avenues. To explore the city, you can take the subway or a bus. The subway is very fast. The most famous place is the City Museum. It is next to the Central Park. Tourists love to walk in the park and eat at the restaurants across the street. Remember: cross the streets carefully! || audio/6-4-8/p6_text1.mp3",
                    body: "Welcome to Metro City! It is a very busy place. There are many tall buildings and wide avenues. To explore the city, you can take the subway or a bus. The subway is very fast. The most famous place is the City Museum. It is next to the Central Park. Tourists love to walk in the park and eat at the restaurants across the street. Remember: cross the streets carefully!",
                    questions: [
                        { 
                            q: "What is next to the Central Park?", 
                            options: [ 
                                {t: "The subway", c: false}, 
                                {t: "The City Museum", c: true}, 
                                {t: "A bank", c: false},
                                {t: "A school", c: false}
                            ] 
                        },
                        { 
                            q: "Where are the restaurants?", 
                            options: [ 
                                {t: "Inside the park", c: false}, 
                                {t: "Across the street", c: true}, 
                                {t: "Behind the museum", c: false},
                                {t: "On the corner", c: false}
                            ] 
                        },
                        { 
                            q: "How is the subway described?", 
                            options: [ 
                                {t: "Slow", c: false}, 
                                {t: "Fast", c: true}, 
                                {t: "Old", c: false},
                                {t: "Small", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: Finding the Hotel",
                    audio: "audio/6-4-8/p6_text2.mp3",
                    body: "<b>Tourist:</b> Excuse me. Can you help me?<br><b>Albert:</b> Sure! What do you need?<br><b>Tourist:</b> I am looking for the Grand Hotel.<br><b>Albert:</b> Ah, I know where it is. Go straight ahead on this avenue for three blocks.<br><b>Tourist:</b> Three blocks. Okay.<br><b>Albert:</b> Then, turn right at the supermarket. The hotel is on the left, between the bank and the post office.<br><b>Tourist:</b> Thank you very much!",
                    questions: [
                        { 
                            q: "What is the tourist looking for?", 
                            options: [ 
                                {t: "The bank", c: false}, 
                                {t: "The Grand Hotel", c: true}, 
                                {t: "The supermarket", c: false},
                                {t: "The post office", c: false}
                            ] 
                        },
                        { 
                            q: "How many blocks does he need to go straight?", 
                            options: [ 
                                {t: "One", c: false}, 
                                {t: "Two", c: false}, 
                                {t: "Three", c: true},
                                {t: "Four", c: false}
                            ] 
                        },
                        { 
                            q: "Where is the hotel located?", 
                            options: [ 
                                {t: "Next to the supermarket", c: false}, 
                                {t: "Between the bank and the post office", c: true}, 
                                {t: "Across from the park", c: false},
                                {t: "Behind the school", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: My Neighborhood Map",
                    audio: "TTS: I live in a quiet neighborhood. My school is very close to my house. It is on the corner of Elm Street and First Avenue. Across from the school, there is a small library. I love reading books there. Next to the library, there is a bakery. They sell delicious bread. Behind the school, there is a playground where we play soccer. I usually go to school on foot because it is so near. || audio/6-4-8/p6_text3.mp3",
                    body: "I live in a quiet neighborhood. My school is very close to my house. It is on the corner of Elm Street and First Avenue. Across from the school, there is a small library. I love reading books there. Next to the library, there is a bakery. They sell delicious bread. Behind the school, there is a playground where we play soccer. I usually go to school on foot because it is so near.",
                    questions: [
                        { 
                            q: "Where is the school?", 
                            options: [ 
                                {t: "Next to the bakery", c: false}, 
                                {t: "On the corner of Elm Street and First Avenue", c: true}, 
                                {t: "Behind the library", c: false},
                                {t: "Far from the house", c: false}
                            ] 
                        },
                        { 
                            q: "What is across from the school?", 
                            options: [ 
                                {t: "A library", c: true}, 
                                {t: "A bakery", c: false}, 
                                {t: "A playground", c: false},
                                {t: "A hospital", c: false}
                            ] 
                        },
                        { 
                            q: "How does the writer go to school?", 
                            options: [ 
                                {t: "By car", c: false}, 
                                {t: "By bus", c: false}, 
                                {t: "On foot", c: true},
                                {t: "By bike", c: false}
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
                // Drill 1: Matching (Prepositions)
                {
                    type: "matching",
                    instruction: "Match the preposition with its meaning. <br><small style='color:#0077b6'>(Combine a preposição com seu significado.)</small>",
                    pairs: [
                        { left: "Behind", right: "Atrás de", val: "1" },
                        { left: "Between", right: "Entre (dois)", val: "2" },
                        { left: "Next to", right: "Ao lado de", val: "3" },
                        { left: "Across from", right: "Em frente a", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Directions)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a direction. <br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma direção.)</small>",
                    sentence: "left / Turn / the / at / corner",
                    correct: "Turn left at the corner"
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the sentence.",
                    sentence: "straight / ahead / Go / blocks / two / for",
                    correct: "Go straight ahead for two blocks"
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the negative sentence.",
                    sentence: "park / Don't / the / in / run",
                    correct: "Don't run in the park"
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the question.",
                    sentence: "is / Where / station / the / train / ?",
                    correct: "Where is the train station ?"
                },
                // Drill 3: Odd One Out (Ensuring 4 items per group)
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group. <br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Car", c: false },
                        { t: "Bus", c: false },
                        { t: "Library", c: true }, // Place vs Transportation
                        { t: "Bike", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Turn", c: false },
                        { t: "Go", c: false },
                        { t: "Cross", c: false },
                        { t: "Street", c: true } // Noun vs Imperative Verbs
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Between", c: false },
                        { t: "Behind", c: false },
                        { t: "Next to", c: false },
                        { t: "Walk", c: true } // Verb vs Prepositions
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Museum", c: false },
                        { t: "Park", c: false },
                        { t: "School", c: false },
                        { t: "Left", c: true } // Direction vs Places
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown with 4 options)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence. <br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "[Excuse | Turn | Between | On] me, where is the bank?", a: "Excuse" },
                        { q: "The school is [on | at | in | between] the corner.", a: "on" },
                        { q: "Please [turn | go | cross | walk] right here.", a: "turn" },
                        { q: "I sit [between | next | near | behind] Albert and Celine.", a: "between" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: Giving Directions. Now it's your turn! Give directions from your school to a nearby place (like a park, a bakery, or your home).<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Dando Direções. Agora é a sua vez! Dê instruções da sua escola para um lugar próximo, como um parque, uma padaria ou sua casa.)</span></small>",
            example: "\"To get to the bakery from school, go straight ahead for one block. Then, turn left. The bakery is on the right, next to the bank.\"<br><br><small><span style='color:#0077b6'>(\"Para chegar à padaria saindo da escola, siga em frente por um quarteirão. Depois, vire à esquerda. A padaria fica à direita, ao lado do banco.\")</span></small>",
            prompts: [
                "Where do you want to go? (To the...) <br><small><span style='color:#0077b6'>(Para onde você quer ir? Para o/a...)</span></small>",
                "What are the directions? (Go straight, turn left/right...) <br><small><span style='color:#0077b6'>(Quais são as direções? Siga em frente, vire à esquerda/direita...)</span></small>",
                "Where is it located? (It is next to/across from...) <br><small><span style='color:#0077b6'>(Onde fica localizado? É ao lado de/em frente a...)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: City Places & Sightseeing)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Places Around a City ---
                { 
                    term: "City", 
                    definition: "A large town.", 
                    defTrans: "Cidade",
                    example: "New York is a famous city.", 
                    audioFront: "TTS: City",
                    audioBack: "TTS: New York is a famous city." 
                },
                { 
                    term: "Street", 
                    definition: "A public road in a city or town with buildings on the sides.", 
                    defTrans: "Rua",
                    example: "My street is very quiet.", 
                    audioFront: "TTS: Street",
                    audioBack: "TTS: My street is very quiet." 
                },
                { 
                    term: "Avenue", 
                    definition: "A broad road in a town or city, typically having trees.", 
                    defTrans: "Avenida",
                    example: "The parade is on the avenue.", 
                    audioFront: "TTS: Avenue",
                    audioBack: "TTS: The parade is on the avenue." 
                },
                { 
                    term: "Corner", 
                    definition: "A place or angle where two or more sides or edges meet.", 
                    defTrans: "Esquina",
                    example: "Wait for me at the corner.", 
                    audioFront: "TTS: Corner",
                    audioBack: "TTS: Wait for me at the corner." 
                },
                { 
                    term: "Bank", 
                    definition: "A financial establishment where you invest or withdraw money.", 
                    defTrans: "Banco",
                    example: "I need to go to the bank.", 
                    audioFront: "TTS: Bank",
                    audioBack: "TTS: I need to go to the bank." 
                },
                { 
                    term: "Post Office", 
                    definition: "The public department responsible for mail services.", 
                    defTrans: "Correios",
                    example: "The post office is closed.", 
                    audioFront: "TTS: Post Office",
                    audioBack: "TTS: The post office is closed." 
                },
                { 
                    term: "Supermarket", 
                    definition: "A large self-service store selling foods and household goods.", 
                    defTrans: "Supermercado",
                    example: "We buy food at the supermarket.", 
                    audioFront: "TTS: Supermarket",
                    audioBack: "TTS: We buy food at the supermarket." 
                },
                { 
                    term: "Bus Stop", 
                    definition: "A place where a bus regularly stops, usually marked by a sign.", 
                    defTrans: "Ponto de ônibus",
                    example: "The bus stop is near here.", 
                    audioFront: "TTS: Bus Stop",
                    audioBack: "TTS: The bus stop is near here." 
                },
                { 
                    term: "Museum", 
                    definition: "A building where objects of historical or artistic interest are exhibited.", 
                    defTrans: "Museu",
                    example: "I like art, so I visit the museum.", 
                    audioFront: "TTS: Museum",
                    audioBack: "TTS: I like art, so I visit the museum." 
                },
                { 
                    term: "Park", 
                    definition: "A large public green area in a town, used for recreation.", 
                    defTrans: "Parque",
                    example: "Let's walk in the park.", 
                    audioFront: "TTS: Park",
                    audioBack: "TTS: Let's walk in the park." 
                },
                { 
                    term: "Restaurant", 
                    definition: "A place where people pay to sit and eat meals cooked on the premises.", 
                    defTrans: "Restaurante",
                    example: "The Italian restaurant is good.", 
                    audioFront: "TTS: Restaurant",
                    audioBack: "TTS: The Italian restaurant is good." 
                },
                { 
                    term: "Hotel", 
                    definition: "An establishment providing accommodations, meals, and other services.", 
                    defTrans: "Hotel",
                    example: "Tourists stay in a hotel.", 
                    audioFront: "TTS: Hotel",
                    audioBack: "TTS: Tourists stay in a hotel." 
                },
                { 
                    term: "School", 
                    definition: "An institution for educating children.", 
                    defTrans: "Escola",
                    example: "I walk to school every day.", 
                    audioFront: "TTS: School",
                    audioBack: "TTS: I walk to school every day." 
                },
                { 
                    term: "Hospital", 
                    definition: "An institution providing medical treatment for sick or injured people.", 
                    defTrans: "Hospital",
                    example: "Doctors work in the hospital.", 
                    audioFront: "TTS: Hospital",
                    audioBack: "TTS: Doctors work in the hospital." 
                },
                { 
                    term: "Library", 
                    definition: "A building or room containing collections of books for people to read.", 
                    defTrans: "Biblioteca",
                    example: "Be quiet in the library.", 
                    audioFront: "TTS: Library",
                    audioBack: "TTS: Be quiet in the library." 
                },
                { 
                    term: "Train Station", 
                    definition: "A place on a railway line where trains regularly stop.", 
                    defTrans: "Estação de trem",
                    example: "The train station is busy.", 
                    audioFront: "TTS: Train Station",
                    audioBack: "TTS: The train station is busy." 
                },

                // --- Sightseeing Verbs & Vocabulary ---
                { 
                    term: "Ask for directions", 
                    definition: "To request information about how to get to a place.", 
                    defTrans: "Pedir informações",
                    example: "If you are lost, ask for directions.", 
                    audioFront: "TTS: Ask for directions",
                    audioBack: "TTS: If you are lost, ask for directions." 
                },
                { 
                    term: "Give directions", 
                    definition: "To tell someone how to get to a place.", 
                    defTrans: "Dar informações",
                    example: "Can you give directions to the tourists?", 
                    audioFront: "TTS: Give directions",
                    audioBack: "TTS: Can you give directions to the tourists?" 
                },
                { 
                    term: "Walk", 
                    definition: "To move at a regular pace by lifting and setting down each foot.", 
                    defTrans: "Caminhar / Andar",
                    example: "We walk to the park.", 
                    audioFront: "TTS: Walk",
                    audioBack: "TTS: We walk to the park." 
                },
                { 
                    term: "Cross", 
                    definition: "To go from one side of something to the other.", 
                    defTrans: "Atravessar",
                    example: "Cross the street carefully.", 
                    audioFront: "TTS: Cross",
                    audioBack: "TTS: Cross the street carefully." 
                },
                { 
                    term: "Tourist", 
                    definition: "A person who is traveling or visiting a place for pleasure.", 
                    defTrans: "Turista",
                    example: "The tourist has a map.", 
                    audioFront: "TTS: Tourist",
                    audioBack: "TTS: The tourist has a map." 
                },
                { 
                    term: "Sightseeing", 
                    definition: "The activity of visiting places of interest in a particular location.", 
                    defTrans: "Passeio turístico",
                    example: "We are going sightseeing in London.", 
                    audioFront: "TTS: Sightseeing",
                    audioBack: "TTS: We are going sightseeing in London." 
                },
                { 
                    term: "Block", 
                    definition: "The area bounded by four streets in a city.", 
                    defTrans: "Quarteirão / Quadra",
                    example: "Walk one block and turn right.", 
                    audioFront: "TTS: Block",
                    audioBack: "TTS: Walk one block and turn right." 
                },
                { 
                    term: "Map", 
                    definition: "A diagrammatic representation of an area showing physical features.", 
                    defTrans: "Mapa",
                    example: "I check the map on my phone.", 
                    audioFront: "TTS: Map",
                    audioBack: "TTS: I check the map on my phone." 
                },
                // --- Means of Transportation ---
                { 
                    term: "Car", 
                    definition: "A road vehicle, typically with four wheels.", 
                    defTrans: "Carro",
                    example: "My dad drives a car.", 
                    audioFront: "TTS: Car",
                    audioBack: "TTS: My dad drives a car." 
                },
                { 
                    term: "Bicycle / Bike", 
                    definition: "A vehicle with two wheels held in a frame, propelled by pedals.", 
                    defTrans: "Bicicleta",
                    example: "I ride my bike to school.", 
                    audioFront: "TTS: Bicycle",
                    audioBack: "TTS: I ride my bike to school." 
                },
                { 
                    term: "Subway", 
                    definition: "An underground electric railroad.", 
                    defTrans: "Metrô",
                    example: "The subway is very fast.", 
                    audioFront: "TTS: Subway",
                    audioBack: "TTS: The subway is very fast." 
                },
                { 
                    term: "Motorcycle", 
                    definition: "A two-wheeled vehicle that is powered by a motor.", 
                    defTrans: "Moto",
                    example: "He has a black motorcycle.", 
                    audioFront: "TTS: Motorcycle",
                    audioBack: "TTS: He has a black motorcycle." 
                },
                { 
                    term: "Bus", 
                    definition: "A large motor vehicle carrying passengers by road.", 
                    defTrans: "Ônibus",
                    example: "Take the bus to the city center.", 
                    audioFront: "TTS: Bus",
                    audioBack: "TTS: Take the bus to the city center." 
                },
                { 
                    term: "Train", 
                    definition: "A series of railroad cars moved by a locomotive.", 
                    defTrans: "Trem",
                    example: "We travel by train.", 
                    audioFront: "TTS: Train",
                    audioBack: "TTS: We travel by train." 
                },
                { 
                    term: "Plane", 
                    definition: "A powered flying vehicle with fixed wings.", 
                    defTrans: "Avião",
                    example: "The plane flies in the sky.", 
                    audioFront: "TTS: Plane",
                    audioBack: "TTS: The plane flies in the sky." 
                },
                { 
                    term: "On foot", 
                    definition: "Walking rather than travelling by vehicle.", 
                    defTrans: "A pé",
                    example: "It is close, so I go on foot.", 
                    audioFront: "TTS: On foot",
                    audioBack: "TTS: It is close, so I go on foot." 
                },

                // --- Phrases & Expressions ---
                { 
                    term: "Excuse me", 
                    definition: "Used as a polite apology or to get someone's attention.", 
                    defTrans: "Com licença",
                    example: "Excuse me, where is the bank?", 
                    audioFront: "TTS: Excuse me",
                    audioBack: "TTS: Excuse me, where is the bank?" 
                },
                { 
                    term: "How do I get to...?", 
                    definition: "Question used to ask for directions to a specific place.", 
                    defTrans: "Como eu chego ao...?",
                    example: "How do I get to the museum?", 
                    audioFront: "TTS: How do I get to?",
                    audioBack: "TTS: How do I get to the museum?" 
                },

                // --- Grammar Points ---
                { 
                    term: "Go straight ahead", 
                    definition: "To move forward without turning.", 
                    defTrans: "Siga reto / Vá em frente",
                    example: "Go straight ahead for two blocks.", 
                    audioFront: "TTS: Go straight ahead",
                    audioBack: "TTS: Go straight ahead for two blocks." 
                },
                { 
                    term: "Turn left", 
                    definition: "To change direction to the left.", 
                    defTrans: "Vire à esquerda",
                    example: "Turn left at the corner.", 
                    audioFront: "TTS: Turn left",
                    audioBack: "TTS: Turn left at the corner." 
                },
                { 
                    term: "Turn right", 
                    definition: "To change direction to the right.", 
                    defTrans: "Vire à direita",
                    example: "Turn right at the traffic light.", 
                    audioFront: "TTS: Turn right",
                    audioBack: "TTS: Turn right at the traffic light." 
                },
                { 
                    term: "Don't", 
                    definition: "Negative imperative form used for commands.", 
                    defTrans: "Não (faça algo)",
                    example: "Don't cross the street here.", 
                    audioFront: "TTS: Don't",
                    audioBack: "TTS: Don't cross the street here." 
                },
                { 
                    term: "Next to", 
                    definition: "In or into a position immediately to one side of.", 
                    defTrans: "Ao lado de",
                    example: "The school is next to the park.", 
                    audioFront: "TTS: Next to",
                    audioBack: "TTS: The school is next to the park." 
                },
                { 
                    term: "Between", 
                    definition: "At or across the space separating two objects.", 
                    defTrans: "Entre (dois)",
                    example: "I sit between Ana and Leo.", 
                    audioFront: "TTS: Between",
                    audioBack: "TTS: I sit between Ana and Leo." 
                },
                { 
                    term: "In front of", 
                    definition: "In a position just ahead of someone or something.", 
                    defTrans: "Em frente de",
                    example: "The car is in front of the house.", 
                    audioFront: "TTS: In front of",
                    audioBack: "TTS: The car is in front of the house." 
                },
                { 
                    term: "Behind", 
                    definition: "At or to the far side of something.", 
                    defTrans: "Atrás de",
                    example: "The garden is behind the house.", 
                    audioFront: "TTS: Behind",
                    audioBack: "TTS: The garden is behind the house." 
                },
                { 
                    term: "Across from", 
                    definition: "On the opposite side of the street or area.", 
                    defTrans: "Do outro lado de / Em frente a",
                    example: "The bank is across from the bakery.", 
                    audioFront: "TTS: Across from",
                    audioBack: "TTS: The bank is across from the bakery." 
                },
                { 
                    term: "On the corner of", 
                    definition: "Located at the intersection of two streets.", 
                    defTrans: "Na esquina de",
                    example: "The shop is on the corner of Main Street.", 
                    audioFront: "TTS: On the corner of",
                    audioBack: "TTS: The shop is on the corner of Main Street." 
                },
                { 
                    term: "Near", 
                    definition: "At or to a short distance away; nearby.", 
                    defTrans: "Perto de",
                    example: "My house is near the school.", 
                    audioFront: "TTS: Near",
                    audioBack: "TTS: My house is near the school." 
                },
                { 
                    term: "Go past", 
                    definition: "To move past a specific point or landmark.", 
                    defTrans: "Passe por",
                    example: "Go past the cinema and stop.", 
                    audioFront: "TTS: Go past",
                    audioBack: "TTS: Go past the cinema and stop." 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Part 1: Context & City Places)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "city-museum", 
            definition: "A building where objects of historical or artistic interest of the city are exhibited.", 
            translation: "Museu da Cidade" 
        },
        { 
            topic: "Context", 
            term: "lost", 
            definition: "Unable to find one's way; not knowing one's current location.", 
            translation: "Perdido(a)" 
        },
        { 
            topic: "Context", 
            term: "go-straight-ahead", 
            definition: "To continue moving forward in the same direction without turning.", 
            translation: "Siga reto / Vá em frente" 
        },
        { 
            topic: "Context", 
            term: "block", 
            definition: "The area bounded by four streets in a city or town.", 
            translation: "Quarteirão / Quadra" 
        },
        { 
            topic: "Context", 
            term: "turn-left", 
            definition: "To change direction toward the left side.", 
            translation: "Vire à esquerda" 
        },
        { 
            topic: "Context", 
            term: "next-to", 
            definition: "In or into a position immediately to one side of; beside.", 
            translation: "Ao lado de" 
        },
        { 
            topic: "Context", 
            term: "across-from", 
            definition: "On the opposite side of a street or area.", 
            translation: "Do outro lado de / Em frente a" 
        },

        // --- TOPIC 2: PLACES AROUND A CITY ---
        { 
            topic: "City Places", 
            term: "city", 
            definition: "A large town.", 
            translation: "cidade" 
        },
        { 
            topic: "City Places", 
            term: "street", 
            definition: "A public road in a city or town, typically with houses and buildings on one or both sides.", 
            translation: "rua" 
        },
        { 
            topic: "City Places", 
            term: "avenue", 
            definition: "A broad road in a town or city, typically having trees at regular intervals along its sides.", 
            translation: "avenida" 
        },
        { 
            topic: "City Places", 
            term: "corner", 
            definition: "A place or angle where two or more sides or edges meet.", 
            translation: "esquina" 
        },
        { 
            topic: "City Places", 
            term: "bank", 
            definition: "A financial establishment that invests money deposited by customers, pays it out when required, and makes loans.", 
            translation: "banco" 
        },
        { 
            topic: "City Places", 
            term: "post-office", 
            definition: "The public department or corporation responsible for mail services.", 
            translation: "correios" 
        },
        { 
            topic: "City Places", 
            term: "supermarket", 
            definition: "A large self-service store selling foods and household goods.", 
            translation: "supermercado" 
        },
        { 
            topic: "City Places", 
            term: "bus-stop", 
            definition: "A place where a bus regularly stops, usually marked by a sign.", 
            translation: "ponto de ônibus" 
        },
        { 
            topic: "City Places", 
            term: "museum", 
            definition: "A building in which objects of historical, scientific, artistic, or cultural interest are stored and exhibited.", 
            translation: "museu" 
        },
        { 
            topic: "City Places", 
            term: "park", 
            definition: "A large public green area in a town, used for recreation.", 
            translation: "parque" 
        },
        { 
            topic: "City Places", 
            term: "restaurant", 
            definition: "A place where people pay to sit and eat meals that are cooked and served on the premises.", 
            translation: "restaurante" 
        },
        { 
            topic: "City Places", 
            term: "hotel", 
            definition: "An establishment providing accommodations, meals, and other services for travelers and tourists.", 
            translation: "hotel" 
        },
        { 
            topic: "City Places", 
            term: "school", 
            definition: "An institution for educating children.", 
            translation: "escola" 
        },
        { 
            topic: "City Places", 
            term: "hospital", 
            definition: "An institution providing medical and surgical treatment and nursing care for sick or injured people.", 
            translation: "hospital" 
        },
        { 
            topic: "City Places", 
            term: "library", 
            definition: "A building or room containing collections of books, periodicals, and sometimes films for people to read or borrow.", 
            translation: "biblioteca" 
        },
        { 
            topic: "City Places", 
            term: "train-station", 
            definition: "A place on a railway line where trains regularly stop so that passengers can get on or off.", 
            translation: "estação de trem" 
        },
        // --- TOPIC 3: SIGHTSEEING & TRANSPORTATION ---
        { 
            topic: "Sightseeing & Transp.", 
            term: "ask-for-directions", 
            definition: "To request information about how to get to a place.", 
            translation: "pedir informações" 
        },
        { 
            topic: "Sightseeing & Transp.", 
            term: "give-directions", 
            definition: "To tell someone how to get to a place.", 
            translation: "dar informações" 
        },
        { 
            topic: "Sightseeing & Transp.", 
            term: "walk", 
            definition: "To move at a regular pace by lifting and setting down each foot in turn.", 
            translation: "caminhar / andar" 
        },
        { 
            topic: "Sightseeing & Transp.", 
            term: "cross", 
            definition: "To go from one side of something to the other.", 
            translation: "atravessar" 
        },
        { 
            topic: "Sightseeing & Transp.", 
            term: "tourist", 
            definition: "A person who is traveling or visiting a place for pleasure.", 
            translation: "turista" 
        },
        { 
            topic: "Sightseeing & Transp.", 
            term: "sightseeing", 
            definition: "The activity of visiting places of interest in a particular location.", 
            translation: "passeio turístico" 
        },
        { 
            topic: "Sightseeing & Transp.", 
            term: "map", 
            definition: "A diagrammatic representation of an area showing physical features, cities, and roads.", 
            translation: "mapa" 
        },
        { 
            topic: "Sightseeing & Transp.", 
            term: "car", 
            definition: "A road vehicle, typically with four wheels, powered by an internal engine.", 
            translation: "carro" 
        },
        { 
            topic: "Sightseeing & Transp.", 
            term: "bicycle-bike", 
            definition: "A vehicle with two wheels held in a frame, propelled by pedals.", 
            translation: "bicicleta" 
        },
        { 
            topic: "Sightseeing & Transp.", 
            term: "subway", 
            definition: "An underground electric railroad.", 
            translation: "metrô" 
        },
        { 
            topic: "Sightseeing & Transp.", 
            term: "motorcycle", 
            definition: "A two-wheeled vehicle that is powered by a motor and has no pedals.", 
            translation: "moto" 
        },
        { 
            topic: "Sightseeing & Transp.", 
            term: "bus", 
            definition: "A large motor vehicle carrying passengers by road on a fixed route.", 
            translation: "ônibus" 
        },
        { 
            topic: "Sightseeing & Transp.", 
            term: "train", 
            definition: "A series of railroad cars moved as a unit by a locomotive.", 
            translation: "trem" 
        },
        { 
            topic: "Sightseeing & Transp.", 
            term: "plane", 
            definition: "A powered flying vehicle with fixed wings.", 
            translation: "avião" 
        },
        { 
            topic: "Sightseeing & Transp.", 
            term: "on-foot", 
            definition: "Walking rather than travelling by vehicle.", 
            translation: "a pé" 
        },
        // --- TOPIC 4: DIRECTIONS & GRAMMAR ---
        { 
            topic: "Directions & Grammar", 
            term: "go-straight-ahead", 
            definition: "To move forward without turning.", 
            translation: "siga reto / vá em frente" 
        },
        { 
            topic: "Directions & Grammar", 
            term: "turn-left", 
            definition: "To change direction to the left.", 
            translation: "vire à esquerda" 
        },
        { 
            topic: "Directions & Grammar", 
            term: "turn-right", 
            definition: "To change direction to the right.", 
            translation: "vire à direita" 
        },
        { 
            topic: "Directions & Grammar", 
            term: "excuse-me", 
            definition: "Used as a polite apology or to get someone's attention.", 
            translation: "com licença" 
        },
        { 
            topic: "Directions & Grammar", 
            term: "how-do-i-get-to", 
            definition: "A question used to ask for directions to a specific place.", 
            translation: "como eu chego ao...?" 
        },
        { 
            topic: "Directions & Grammar", 
            term: "next-to", 
            definition: "In or into a position immediately to one side of; beside.", 
            translation: "ao lado de" 
        },
        { 
            topic: "Directions & Grammar", 
            term: "between", 
            definition: "At, into, or across the space separating two objects or regions.", 
            translation: "entre (dois)" 
        },
        { 
            topic: "Directions & Grammar", 
            term: "in-front-of", 
            definition: "In a position just ahead or at the front part of someone or something.", 
            translation: "em frente de" 
        },
        { 
            topic: "Directions & Grammar", 
            term: "behind", 
            definition: "At or to the far side of something, typically so as to be hidden by it.", 
            translation: "atrás de" 
        },
        { 
            topic: "Directions & Grammar", 
            term: "across-from", 
            definition: "On the opposite side of the street or area.", 
            translation: "do outro lado de / em frente a" 
        },
        { 
            topic: "Directions & Grammar", 
            term: "on-the-corner-of", 
            definition: "Located at the intersection of two streets.", 
            translation: "na esquina de" 
        },
        { 
            topic: "Directions & Grammar", 
            term: "near", 
            definition: "At or to a short distance away; nearby.", 
            translation: "perto de" 
        },
        { 
            topic: "Directions & Grammar", 
            term: "go-past", 
            definition: "To move past a specific point or landmark.", 
            translation: "passe por" 
        },
        { 
            topic: "Directions & Grammar", 
            term: "imperative-form", 
            definition: "Used to give commands or instructions (e.g., 'Go', 'Turn', 'Stop').", 
            translation: "Forma Imperativa" 
        }
    ] // This closes the glossary array
}); // This closes the window.initLesson object