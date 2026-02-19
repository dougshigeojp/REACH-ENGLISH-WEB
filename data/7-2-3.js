/**
 * REACH English - LESSON DATA 7-2-3
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "7-2-3", 
    grade: "7th Grade",       
    bimester: "2",   
    chapter: "3",    
    chapterTitle: "Oh No! My Vacation Was a Mess!", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Talk about vacations and travel.<br>• Use travel vocabulary (suitcase, passport, flight).<br>• Use the past tense of \"to be\" (was/were).<br>• Use \"there was\" and \"there were\" to describe the past.<br>• Use possessive pronouns (mine, yours, his, hers...).",
            welcome: "Hello, Travelers! It's Mr. D!<br><br>Welcome to \"Oh No! My Vacation Was a Mess!\" Today, we are going on a journey—a journey to the past! We'll talk about vacations that were amazing, and some that were... well, disastrous. We'll learn how to tell these stories using the past tense and describe what happened with new vocabulary. Let's pack our bags and get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about vacations and travel. Use travel vocabulary like suitcase, passport, and flight. Use the past tense of to be, was and were. Use there was and there were to describe the past. Use possessive pronouns like mine, yours, his, and hers.",
                welcome: "TTS: Hello, Travelers! It's Mr. D! Welcome to Oh No! My Vacation Was a Mess! Today, we are going on a journey—a journey to the past! We'll talk about vacations that were amazing, and some that were... well, disastrous. We'll learn how to tell these stories using the past tense and describe what happened with new vocabulary. Let's pack our bags and get started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Albert and Celine are looking at photos on a phone. Sound of rain falling and a sigh of disappointment.", 
            contextAudio: "audio/7-2-3/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "How [was](tooltip:was) your [vacation](tooltip:vacation), Celine?" 
                },
                { 
                    speaker: "Celine", 
                    text: "Oh, Albert. It was [terrible](tooltip:terrible)! It was a [disaster](tooltip:disaster)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Really? What [happened](tooltip:happened)?" 
                },
                { 
                    speaker: "Celine", 
                    text: "First, the [flight](tooltip:flight) was [delayed](tooltip:delayed). Then, [there was](tooltip:there-was) a problem with the [hotel](tooltip:hotel)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Oh no! Was the hotel [expensive](tooltip:expensive)?" 
                },
                { 
                    speaker: "Celine", 
                    text: "Yes, it was. And there were no [towels](tooltip:towels) in the room!" 
                },
                { 
                    speaker: "Albert", 
                    text: "That is bad. [Whose](tooltip:whose) [suitcase](tooltip:suitcase) is this in the photo?" 
                },
                { 
                    speaker: "Celine", 
                    text: "That is [mine](tooltip:mine). It [was lost](tooltip:was-lost) for two days!" 
                },
                { 
                    speaker: "Albert", 
                    text: "Poor Celine! My vacation was [great](tooltip:great). The [weather](tooltip:weather) was good." 
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
                    title: "Travel Verbs (Present - Past)",
                    audio: "TTS: Travel - Travelled. Arrive - Arrived. Lose - Lost. Find - Found. Go - Went. Book - Booked. Stay - Stayed. Leave - Left. Visit - Visited. Fly - Flew. Forget - Forgot. Drive - Drove. Break - Broke. Pack - Packed. Help - Helped.",
                    items: [
                        { term: "Travel - Travelled", trans: "Viajar - Viajou" },
                        { term: "Arrive - Arrived", trans: "Chegar - Chegou" },
                        { term: "Lose - Lost", trans: "Perder - Perdeu" },
                        { term: "Find - Found", trans: "Achar - Achou" },
                        { term: "Go - Went", trans: "Ir - Foi" },
                        { term: "Book - Booked", trans: "Reservar - Reservou" },
                        { term: "Stay - Stayed", trans: "Ficar/Hospedar-se - Ficou" },
                        { term: "Leave - Left", trans: "Sair/Partir - Saiu" },
                        { term: "Visit - Visited", trans: "Visitar - Visitou" },
                        { term: "Fly - Flew", trans: "Voar - Voou" },
                        { term: "Forget - Forgot", trans: "Esquecer - Esqueceu" },
                        { term: "Drive - Drove", trans: "Dirigir - Dirigiu" },
                        { term: "Break - Broke", trans: "Quebrar - Quebrou" },
                        { term: "Pack - Packed", trans: "Fazer as malas - Fez as malas" },
                        { term: "Help - Helped", trans: "Ajudar - Ajudou" }
                    ]
                },
                {
                    title: "Travel Objects",
                    audio: "TTS: Suitcase or Luggage. Backpack. Passport. Ticket. Map. Camera. Phone. Souvenir. Money or Cash. Credit Card.",
                    items: [
                        { term: "Suitcase / Luggage", trans: "Mala / Bagagem" },
                        { term: "Backpack", trans: "Mochila" },
                        { term: "Passport", trans: "Passaporte" },
                        { term: "Ticket", trans: "Passagem" },
                        { term: "Map", trans: "Mapa" },
                        { term: "Camera", trans: "Câmera" },
                        { term: "Phone", trans: "Celular" },
                        { term: "Souvenir", trans: "Lembrancinha" },
                        { term: "Money / Cash", trans: "Dinheiro" },
                        { term: "Credit Card", trans: "Cartão de crédito" }
                    ]
                },
                {
                    title: "Places & Concepts",
                    audio: "TTS: Hotel. Airport. Station. Beach. City. Vacation or Holiday. Trip or Journey. Problem. Disaster. Weather.",
                    items: [
                        { term: "Hotel", trans: "Hotel" },
                        { term: "Airport", trans: "Aeroporto" },
                        { term: "Station", trans: "Estação" },
                        { term: "Beach", trans: "Praia" },
                        { term: "City", trans: "Cidade" },
                        { term: "Vacation / Holiday", trans: "Férias" },
                        { term: "Trip / Journey", trans: "Viagem" },
                        { term: "Problem", trans: "Problema" },
                        { term: "Disaster", trans: "Desastre" },
                        { term: "Weather", trans: "Tempo / Clima" }
                    ]
                },
                {
                    title: "Adjectives",
                    audio: "TTS: Bad. Terrible. Good. Great. Lost. Broken. Delayed. Cancelled. Crowded. Empty. Expensive. Cheap. Hot. Cold.",
                    items: [
                        { term: "Bad / Terrible", trans: "Ruim / Terrível" },
                        { term: "Good / Great", trans: "Bom / Ótimo" },
                        { term: "Lost", trans: "Perdido(a)" },
                        { term: "Broken", trans: "Quebrado(a)" },
                        { term: "Delayed", trans: "Atrasado(a)" },
                        { term: "Cancelled", trans: "Cancelado(a)" },
                        { term: "Crowded", trans: "Lotado(a)" },
                        { term: "Empty", trans: "Vazio(a)" },
                        { term: "Expensive", trans: "Caro(a)" },
                        { term: "Cheap", trans: "Barato(a)" },
                        { term: "Hot", trans: "Quente" },
                        { term: "Cold", trans: "Frio" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: How was your vacation?. It was terrible!. What happened?. There was a big problem.. Whose suitcase was this?. It was mine.",
                    items: [
                        { term: "How was your vacation?", trans: "Como foram suas férias?" },
                        { term: "It was terrible!", trans: "Foi terrível!" },
                        { term: "What happened?", trans: "O que aconteceu?" },
                        { term: "There was a big problem.", trans: "Houve um grande problema." },
                        { term: "Whose suitcase was this?", trans: "De quem era esta mala?" },
                        { term: "It was mine.", trans: "Era minha." }
                    ]
                }
            ], // This closes the areas array

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Travel Verbs (Present - Past)",
                    audio: "TTS: We travelled to Spain last year. He arrived late at the airport. I lost my keys yesterday. She found a nice restaurant. They went to the beach. We booked the hotel online. I stayed at home all day. The bus left at 8 PM. We visited the museum. The bird flew away. He forgot his passport. My dad drove for six hours. My phone broke. She packed her suitcase. The guide helped us.",
                    items: [
                        { term: "Travelled", sent: "We travelled to Spain last year.", trans: "<span style='color:#0077b6'>Nós viajamos para a Espanha ano passado.</span>" },
                        { term: "Arrived", sent: "He arrived late at the airport.", trans: "<span style='color:#0077b6'>Ele chegou atrasado no aeroporto.</span>" },
                        { term: "Lost", sent: "I lost my keys yesterday.", trans: "<span style='color:#0077b6'>Eu perdi minhas chaves ontem.</span>" },
                        { term: "Found", sent: "She found a nice restaurant.", trans: "<span style='color:#0077b6'>Ela achou um restaurante legal.</span>" },
                        { term: "Went", sent: "They went to the beach.", trans: "<span style='color:#0077b6'>Eles foram para a praia.</span>" },
                        { term: "Booked", sent: "We booked the hotel online.", trans: "<span style='color:#0077b6'>Nós reservamos o hotel online.</span>" },
                        { term: "Stayed", sent: "I stayed at home all day.", trans: "<span style='color:#0077b6'>Eu fiquei em casa o dia todo.</span>" },
                        { term: "Left", sent: "The bus left at 8 PM.", trans: "<span style='color:#0077b6'>O ônibus partiu às 20h.</span>" },
                        { term: "Visited", sent: "We visited the museum.", trans: "<span style='color:#0077b6'>Nós visitamos o museu.</span>" },
                        { term: "Flew", sent: "The bird flew away.", trans: "<span style='color:#0077b6'>O pássaro voou para longe.</span>" },
                        { term: "Forgot", sent: "He forgot his passport.", trans: "<span style='color:#0077b6'>Ele esqueceu o passaporte dele.</span>" },
                        { term: "Drove", sent: "My dad drove for six hours.", trans: "<span style='color:#0077b6'>Meu pai dirigiu por seis horas.</span>" },
                        { term: "Broke", sent: "My phone broke.", trans: "<span style='color:#0077b6'>Meu celular quebrou.</span>" },
                        { term: "Packed", sent: "She packed her suitcase.", trans: "<span style='color:#0077b6'>Ela fez a mala dela.</span>" },
                        { term: "Helped", sent: "The guide helped us.", trans: "<span style='color:#0077b6'>O guia nos ajudou.</span>" }
                    ]
                },
                {
                    title: "Travel Objects",
                    audio: "TTS: My suitcase is heavy. I carry my backpack everywhere. Do you have your passport? Here is your bus ticket. Look at the map. Take a photo with the camera. I bought a souvenir for you. Can I pay with a credit card?",
                    items: [
                        { term: "Suitcase", sent: "My suitcase is heavy.", trans: "<span style='color:#0077b6'>Minha mala está pesada.</span>" },
                        { term: "Backpack", sent: "I carry my backpack everywhere.", trans: "<span style='color:#0077b6'>Eu carrego minha mochila em todos os lugares.</span>" },
                        { term: "Passport", sent: "Do you have your passport?", trans: "<span style='color:#0077b6'>Você tem seu passaporte?</span>" },
                        { term: "Ticket", sent: "Here is your bus ticket.", trans: "<span style='color:#0077b6'>Aqui está sua passagem de ônibus.</span>" },
                        { term: "Map", sent: "Look at the map.", trans: "<span style='color:#0077b6'>Olhe para o mapa.</span>" },
                        { term: "Camera", sent: "Take a photo with the camera.", trans: "<span style='color:#0077b6'>Tire uma foto com a câmera.</span>" },
                        { term: "Souvenir", sent: "I bought a souvenir for you.", trans: "<span style='color:#0077b6'>Eu comprei uma lembrancinha para você.</span>" },
                        { term: "Credit Card", sent: "Can I pay with a credit card?", trans: "<span style='color:#0077b6'>Posso pagar com cartão de crédito?</span>" }
                    ]
                },
                {
                    title: "Places & Concepts",
                    audio: "TTS: The hotel was clean. The airport is big. Meet me at the train station. The beach was sunny. I love summer vacation. We had a problem with the car. The weather was bad.",
                    items: [
                        { term: "Hotel", sent: "The hotel was clean.", trans: "<span style='color:#0077b6'>(O hotel estava limpo.)</span>" },
                        { term: "Airport", sent: "The airport is big.", trans: "<span style='color:#0077b6'>(O aeroporto é grande.)</span>" },
                        { term: "Station", sent: "Meet me at the train station.", trans: "<span style='color:#0077b6'>(Me encontre na estação de trem.)</span>" },
                        { term: "Beach", sent: "The beach was sunny.", trans: "<span style='color:#0077b6'>(A praia estava ensolarada.)</span>" },
                        { term: "Vacation", sent: "I love summer vacation.", trans: "<span style='color:#0077b6'>(Eu amo férias de verão.)</span>" },
                        { term: "Problem", sent: "We had a problem with the car.", trans: "<span style='color:#0077b6'>(Tivemos um problema com o carro.)</span>" },
                        { term: "Weather", sent: "The weather was bad.", trans: "<span style='color:#0077b6'>(O tempo estava ruim.)</span>" }
                    ]
                },
                {
                    title: "Adjectives",
                    audio: "TTS: The food was terrible. The trip was great. The flight was delayed. The bus was crowded. This hotel is too expensive.",
                    items: [
                        { term: "Terrible", sent: "The food was terrible.", trans: "<span style='color:#0077b6'>(A comida estava terrível.)</span>" },
                        { term: "Great", sent: "The trip was great.", trans: "<span style='color:#0077b6'>(A viagem foi ótima.)</span>" },
                        { term: "Delayed", sent: "The flight was delayed.", trans: "<span style='color:#0077b6'>(O voo estava atrasado.)</span>" },
                        { term: "Crowded", sent: "The bus was crowded.", trans: "<span style='color:#0077b6'>(O ônibus estava lotado.)</span>" },
                        { term: "Expensive", sent: "This hotel is too expensive.", trans: "<span style='color:#0077b6'>(Este hotel é muito caro.)</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: How was your vacation? It was fun! Whose bag is this? It was mine.",
                    items: [
                        { term: "How was your vacation?", sent: "\"How was your vacation?\" \"It was fun!\"", trans: "<span style='color:#0077b6'>(Como foram suas férias? Foi divertido!)</span>" },
                        { term: "It was mine", sent: "\"Whose bag is this?\" \"It was mine.\"", trans: "<span style='color:#0077b6'>(De quem é esta bolsa? Era minha.)</span>" }
                    ]
                }
            ], // This closes the exampleGroups array

            // 2C: Practice Drills (Part 1: 1-12)
            drills: [
                {
                    type: "mcq",
                    q: "Choose the correct past tense for 'Go':",
                    options: [
                        { t: "Goed", c: false },
                        { t: "Gone", c: false },
                        { t: "Went", c: true },
                        { t: "Goin", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete the sentence: 'I _______ my passport at home!'",
                    options: [
                        { t: "forget", c: false },
                        { t: "forgot", c: true },
                        { t: "forgets", c: false },
                        { t: "forgetted", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You put your clothes in this when you travel:",
                    options: [
                        { t: "Ticket", c: false },
                        { t: "Map", c: false },
                        { t: "Suitcase", c: true },
                        { t: "Camera", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You need this document to travel to another country:",
                    options: [
                        { t: "Passport", c: true },
                        { t: "Souvenir", c: false },
                        { t: "Backpack", c: false },
                        { t: "Credit Card", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Where do planes land?",
                    options: [
                        { t: "Station", c: false },
                        { t: "Airport", c: true },
                        { t: "Hotel", c: false },
                        { t: "Beach", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The opposite of 'Cheap' is:",
                    options: [
                        { t: "Good", c: false },
                        { t: "Crowded", c: false },
                        { t: "Expensive", c: true },
                        { t: "Empty", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When there are too many people, the place is:",
                    options: [
                        { t: "Empty", c: false },
                        { t: "Crowded", c: true },
                        { t: "Delayed", c: false },
                        { t: "Broken", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: '_______ was your trip?' 'It was great!'",
                    options: [
                        { t: "What", c: false },
                        { t: "Who", c: false },
                        { t: "How", c: true },
                        { t: "Where", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'We _______ at the hotel for three nights.'",
                    options: [
                        { t: "stayed", c: true },
                        { t: "stay", c: false },
                        { t: "staying", c: false },
                        { t: "stand", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'Whose ticket was this?' 'It was _______.'",
                    options: [
                        { t: "my", c: false },
                        { t: "mine", c: true },
                        { t: "me", c: false },
                        { t: "I", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What is the opposite of 'Good'?",
                    options: [
                        { t: "Great", c: false },
                        { t: "Bad", c: true },
                        { t: "Expensive", c: false },
                        { t: "Hot", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past tense for 'Fly':",
                    options: [
                        { t: "Flown", c: false },
                        { t: "Flyed", c: false },
                        { t: "Flew", c: true },
                        { t: "Flow", c: false }
                    ]
                },
                // 2C: Practice Drills (Part 2: 13-24)
                {
                    type: "mcq",
                    q: "Choose the correct past tense for 'Book':",
                    options: [
                        { t: "Booked", c: true },
                        { t: "Boke", c: false },
                        { t: "Booken", c: false },
                        { t: "Bought", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Another word for 'Vacation' is:",
                    options: [
                        { t: "Work", c: false },
                        { t: "Holiday", c: true },
                        { t: "Meeting", c: false },
                        { t: "Problem", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You use this to take a photo of a monument:",
                    options: [
                        { t: "Passport", c: false },
                        { t: "Ticket", c: false },
                        { t: "Map", c: false },
                        { t: "Camera", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past tense for 'Drive':",
                    options: [
                        { t: "Drived", c: false },
                        { t: "Drove", c: true },
                        { t: "Driven", c: false },
                        { t: "Droven", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A pebbly or sandy shore by the ocean is a:",
                    options: [
                        { t: "Airport", c: false },
                        { t: "Beach", c: true },
                        { t: "Station", c: false },
                        { t: "City", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'The police officer _______ us.'",
                    options: [
                        { t: "helped", c: true },
                        { t: "halp", c: false },
                        { t: "helps", c: false },
                        { t: "helpt", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If a flight is late, it is:",
                    options: [
                        { t: "Crowded", c: false },
                        { t: "Broken", c: false },
                        { t: "Delayed", c: true },
                        { t: "Great", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past tense for 'Leave':",
                    options: [
                        { t: "Leaved", c: false },
                        { t: "Left", c: true },
                        { t: "Leaf", c: false },
                        { t: "Lost", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Where do you check your location or direction?",
                    options: [
                        { t: "On a ticket", c: false },
                        { t: "On a map", c: true },
                        { t: "On a camera", c: false },
                        { t: "On a suitcase", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past tense for 'Arrive':",
                    options: [
                        { t: "Arroved", c: false },
                        { t: "Arriving", c: false },
                        { t: "Arrived", c: true },
                        { t: "Arrive", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct translation for 'Minhas férias foram terríveis':",
                    options: [
                        { t: "My vacation was bad.", c: false },
                        { t: "My vacation was terrible.", c: true },
                        { t: "My vacation was great.", c: false },
                        { t: "My vacation was hot.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'The bus _______ at 8 PM.'",
                    options: [
                        { t: "left", c: true },
                        { t: "leaves", c: false },
                        { t: "leaved", c: false },
                        { t: "lose", c: false }
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
                    title: "TO BE in the Past",
                    audio: "TTS: We use Was and Were to talk about states, feelings, or locations in the past. They are the past forms of am, is, and are. I, He, She, and It use was. You, We, and They use were.",
                    explanation: "We use <b>Was</b> and <b>Were</b> to talk about states, feelings, or locations in the past. They are the past forms of 'am, is, are'. We do not use 'did' with these verbs.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos Was e Were para falar sobre estados, sentimentos ou localizações no passado. Eles são as formas passadas de 'am, is, are'. Não usamos 'did' com esses verbos.)</span>",
                    samples: [
                        { en: "I was tired.", pt: "<span style='color:#0077b6'>Eu estava cansado.</span>" },
                        { en: "He was at the hotel.", pt: "<span style='color:#0077b6'>Ele estava no hotel.</span>" },
                        { en: "She was happy.", pt: "<span style='color:#0077b6'>Ela estava feliz.</span>" },
                        { en: "It was cold.", pt: "<span style='color:#0077b6'>Estava frio.</span>" },
                        { en: "You were late.", pt: "<span style='color:#0077b6'>Você estava atrasado.</span>" },
                        { en: "We were lost.", pt: "<span style='color:#0077b6'>Nós estávamos perdidos.</span>" },
                        { en: "They were expensive.", pt: "<span style='color:#0077b6'>Eles eram caros.</span>" }
                    ]
                },
                {
                    title: "There was / There were",
                    audio: "TTS: This is the past tense of There is and There are. We use it to say that something existed in a specific place in the past. There was is for singular and There were is for plural.",
                    explanation: "This is the past tense of 'There is / There are'. We use it to say that something existed or was present in a specific place in the past.<br><br><span style='color:#0077b6; font-style:italic;'>(Este é o passado de 'There is / There are'. Usamos para dizer que algo existia ou estava presente em um lugar específico no passado.)</span>",
                    samples: [
                        { en: "There was a problem.", pt: "<span style='color:#0077b6'>Havia/Tinha um problema. (Singular)</span>" },
                        { en: "There were many people.", pt: "<span style='color:#0077b6'>Havia/Tinha muitas pessoas. (Plural)</span>" },
                        { en: "There wasn't a pool.", pt: "<span style='color:#0077b6'>Não tinha uma piscina.</span>" },
                        { en: "There weren't any maps.", pt: "<span style='color:#0077b6'>Não tinha nenhum mapa.</span>" },
                        { en: "Was there a delay?", pt: "<span style='color:#0077b6'>Houve um atraso?</span>" },
                        { en: "Were there souvenirs?", pt: "<span style='color:#0077b6'>Havia lembrancinhas?</span>" }
                    ]
                },
                {
                    title: "Possessive Pronouns",
                    audio: "TTS: Possessive pronouns show ownership and replace the noun to avoid repetition. They stand alone. Mine, yours, his, hers, ours, and theirs.",
                    explanation: "These words show ownership and replace the noun phrase to avoid repetition. They stand alone.<br><br><span style='color:#0077b6; font-style:italic;'>(Estas palavras mostram posse e substituem a frase nominal para evitar repetição. Elas ficam sozinhas.)</span>",
                    samples: [
                        { en: "This is mine.", pt: "<span style='color:#0077b6'>Isso é meu.</span>" },
                        { en: "That is yours.", pt: "<span style='color:#0077b6'>Aquilo é seu.</span>" },
                        { en: "The car is his.", pt: "<span style='color:#0077b6'>O carro é dele.</span>" },
                        { en: "The seat is hers.", pt: "<span style='color:#0077b6'>O assento é dela.</span>" },
                        { en: "The house is ours.", pt: "<span style='color:#0077b6'>A casa é nossa.</span>" },
                        { en: "The decision was theirs.", pt: "<span style='color:#0077b6'>A decisão foi deles.</span>" }
                    ]
                },
                {
                    title: "Adjectives vs. Pronouns",
                    audio: "TTS: Use Adjectives before the noun. Use Pronouns instead of the noun. For example, My bag becomes Mine.",
                    explanation: "Rule: Use <b>Adjectives</b> before the noun. Use <b>Pronouns</b> instead of the noun.<br><br><span style='color:#0077b6; font-style:italic;'>(Regra: Use Adjetivos antes do substantivo. Use Pronomes no lugar do substantivo.)</span>",
                    samples: [
                        { en: "My bag -> This bag is mine.", pt: "<span style='color:#0077b6'>Minha bolsa -> Esta bolsa é minha.</span>" },
                        { en: "Your ticket -> This ticket is yours.", pt: "<span style='color:#0077b6'>Seu ingresso -> Este ingresso é seu.</span>" },
                        { en: "His camera -> This camera is his.", pt: "<span style='color:#0077b6'>A câmera dele -> Esta câmera é dele.</span>" },
                        { en: "Her seat -> That seat is hers.", pt: "<span style='color:#0077b6'>O assento dela -> Aquele assento é dela.</span>" },
                        { en: "Our passports -> These are ours.", pt: "<span style='color:#0077b6'>Nossos passaportes -> Estes são nossos.</span>" },
                        { en: "Their idea -> That idea was theirs.", pt: "<span style='color:#0077b6'>A ideia deles -> Aquela ideia foi deles.</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: TO BE in the Past",
                    audio: "audio/7-2-3/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Were you at the beach last week?", 
                            pt: "<span style='color:#0077b6'>Você estava na praia semana passada?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes, I was. The weather was fantastic, but the water wasn't warm.", 
                            pt: "<span style='color:#0077b6'>Sim, eu estava. O tempo estava fantástico, mas a água não estava quente.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: There was / There were",
                    audio: "audio/7-2-3/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Was there a gym in your hotel?", 
                            pt: "<span style='color:#0077b6'>Tinha uma academia no seu hotel?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, there wasn't. But there were two big swimming pools.", 
                            pt: "<span style='color:#0077b6'>Não, não tinha. Mas havia duas grandes piscinas.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Possessive Comparisons",
                    audio: "audio/7-2-3/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "I lost my sunglasses. Are these yours?", 
                            pt: "<span style='color:#0077b6'>Eu perdi meus óculos de sol. Estes são seus?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "No, those aren't mine. My sunglasses are blue. Those are hers.", 
                            pt: "<span style='color:#0077b6'>Não, esses não são meus. Meus óculos de sol são azuis. Aqueles são dela.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice (Part 1: 1-12)
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Complete the sentence: 'I _______ very happy with the trip.'",
                    options: [
                        { t: "were", c: false },
                        { t: "was", c: true },
                        { t: "is", c: false },
                        { t: "are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Past of To Be: '_______ they at the airport on time?'",
                    options: [
                        { t: "Was", c: false },
                        { t: "Did", c: false },
                        { t: "Were", c: true },
                        { t: "Are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "There was/were: '_______ a lot of traffic on the road.'",
                    options: [
                        { t: "There were", c: false },
                        { t: "There was", c: true },
                        { t: "There are", c: false },
                        { t: "Was there", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative form: '_______ any cheap tickets left.'",
                    options: [
                        { t: "There wasn't", c: false },
                        { t: "There weren't", c: true },
                        { t: "There isn't", c: false },
                        { t: "There not", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Comparison: 'This isn't my bag. It's _______.'",
                    options: [
                        { t: "your", c: false },
                        { t: "yours", c: true },
                        { t: "you", c: false },
                        { t: "my", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Mixed Comparison: 'That is _______ car. The red one is _______.'",
                    options: [
                        { t: "their / ours", c: true },
                        { t: "theirs / our", c: false },
                        { t: "their / our", c: false },
                        { t: "theirs / ours", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative To Be: 'The hotel room _______ clean.'",
                    options: [
                        { t: "weren't", c: false },
                        { t: "wasn't", c: true },
                        { t: "isn't", c: false },
                        { t: "didn't", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Pronouns: 'Whose money is this? It is _______.'",
                    options: [
                        { t: "his", c: true },
                        { t: "he", c: false },
                        { t: "him", c: false },
                        { t: "she", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'She _______ lost in the city center yesterday.'",
                    options: [
                        { t: "was", c: true },
                        { t: "were", c: false },
                        { t: "been", c: false },
                        { t: "is", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'We _______ at the beach last weekend.'",
                    options: [
                        { t: "was", c: false },
                        { t: "were", c: true },
                        { t: "are", c: false },
                        { t: "been", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Interrogative: '_______ there a pool in the hotel?'",
                    options: [
                        { t: "Was", c: true },
                        { t: "Were", c: false },
                        { t: "Is", c: false },
                        { t: "Are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessives: 'These tickets are _______, not mine.'",
                    options: [
                        { t: "your", c: false },
                        { t: "you", c: false },
                        { t: "yours", c: true },
                        { t: "mine", c: false }
                    ]
                },
                // 3C: Grammar Practice (Part 2: 13-24)
                {
                    type: "mcq",
                    q: "Complete: 'This camera belongs to Sarah. It's _______.'",
                    options: [
                        { t: "her", c: false },
                        { t: "hers", c: true },
                        { t: "she", c: false },
                        { t: "herself", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative form: 'They _______ happy with the delayed flight.'",
                    options: [
                        { t: "wasn't", c: false },
                        { t: "weren't", c: true },
                        { t: "don't", c: false },
                        { t: "not were", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "There was/were: '_______ many tourists at the train station.'",
                    options: [
                        { t: "There was", c: false },
                        { t: "There were", c: true },
                        { t: "Was there", c: false },
                        { t: "There are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessives: 'Is this your suitcase? No, it's _______.'",
                    options: [
                        { t: "he", c: false },
                        { t: "him", c: false },
                        { t: "his", c: true },
                        { t: "hirs", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Question: '_______ the weather hot during your vacation?'",
                    options: [
                        { t: "Was", c: true },
                        { t: "Were", c: false },
                        { t: "Did", c: false },
                        { t: "Is", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative: '_______ a restaurant inside the museum.'",
                    options: [
                        { t: "There wasn't", c: true },
                        { t: "There weren't", c: false },
                        { t: "Wasn't there", c: false },
                        { t: "Not was", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Pronouns: 'That seat is for me. It is _______.'",
                    options: [
                        { t: "my", c: false },
                        { t: "me", c: false },
                        { t: "mine", c: true },
                        { t: "I", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To Be Past: 'We _______ at the airport for five hours!'",
                    options: [
                        { t: "was", c: false },
                        { t: "were", c: true },
                        { t: "are", c: false },
                        { t: "been", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Interrogative: '_______ many towels in the room?'",
                    options: [
                        { t: "Was there", c: false },
                        { t: "Were there", c: true },
                        { t: "There were", c: false },
                        { t: "Are there", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessives: 'The red passports are _______ (belong to us).'",
                    options: [
                        { t: "our", c: false },
                        { t: "ourselves", c: false },
                        { t: "ours", c: true },
                        { t: "us", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To Be Past: 'It _______ a stressful start to the trip.'",
                    options: [
                        { t: "were", c: false },
                        { t: "was", c: true },
                        { t: "did", c: false },
                        { t: "is", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Comparison: 'Whose ticket is this? It's _______.'",
                    options: [
                        { t: "yours", c: true },
                        { t: "you", c: false },
                        { t: "your", c: false },
                        { t: "yourself", c: false }
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
                    text: "My vacation was terrible.<br><small style='color:#0077b6'>(Minhas férias foram terríveis.)</small>", 
                    audio: "TTS: My vacation was terrible.", 
                    arrow: "↘" 
                },
                { 
                    text: "There were too many people.<br><small style='color:#0077b6'>(Havia gente demais.)</small>", 
                    audio: "TTS: There were too many people.", 
                    arrow: "↘" 
                },
                { 
                    text: "Was the hotel expensive?<br><small style='color:#0077b6'>(O hotel era caro?)</small>", 
                    audio: "TTS: Was the hotel expensive?", 
                    arrow: "↗" 
                },
                { 
                    text: "No, it wasn't. It was cheap.<br><small style='color:#0077b6'>(Não, não era. Era barato.)</small>", 
                    audio: "TTS: No, it wasn't. It was cheap.", 
                    arrow: "↘" 
                },
                { 
                    text: "Whose suitcase is this?<br><small style='color:#0077b6'>(De quem é esta mala?)</small>", 
                    audio: "TTS: Whose suitcase is this?", 
                    arrow: "↘" 
                },
                { 
                    text: "It is mine.<br><small style='color:#0077b6'>(É minha.)</small>", 
                    audio: "TTS: It is mine.", 
                    arrow: "↘" 
                },
                { 
                    text: "The weather was sunny.<br><small style='color:#0077b6'>(O tempo estava ensolarado.)</small>", 
                    audio: "TTS: The weather was sunny.", 
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
                    instruction: "Listen to Albert talking about his trip and type the missing words.",
                    audio: "TTS: My trip to London was great. The weather was cold, but sunny. I visited many museums. It was a nice vacation.",
                    text: "My trip to London [was] great. The weather was cold, but sunny. I [visited] many museums. It was a nice [vacation]."
                },
                // Drill 2: Dropdown (MP3) - Combined context to prevent engine crash
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue and choose the correct option.",
                    audio: "audio/7-2-3/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Celine: Where [were | was] you yesterday?", 
                            a: "were" 
                        },
                        { 
                            q: "Albert: I was at the [airport | hotel] all day.", 
                            a: "airport" 
                        },
                        { 
                            q: "Celine: Was the flight on [time | bus]?", 
                            a: "time" 
                        },
                        { 
                            q: "Albert: No, it was [delayed | cancelled] for five hours!", 
                            a: "delayed" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer.",
                    audio: "TTS: Whose passport is this?",
                    options: [
                        { t: "It is mine.", c: true },
                        { t: "Yes, it was.", c: false },
                        { t: "I was tired.", c: false },
                        { t: "It was a disaster.", c: false }
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
                    title: "The Lost Luggage",
                    audio: "TTS: Last summer, the Silva family travelled to the beach. They were very excited. But when they arrived at the airport, there was a big problem. Their luggage was not there! It was lost. Mrs. Silva was worried because her favorite dress was in the suitcase. Whose bag is that? asked Mr. Silva. It isn't ours, said the kids. Finally, after two hours, they found their bags. It was a stressful start to the vacation. || audio/7-2-3/p6_text1.mp3",
                    body: "Last summer, the Silva family travelled to the beach. They were very excited. But when they arrived at the airport, there was a big problem. Their luggage was not there! It was lost. Mrs. Silva was worried because her favorite dress was in the suitcase. \"Whose bag is that?\" asked Mr. Silva. \"It isn't ours,\" said the kids. Finally, after two hours, they found their bags. It was a stressful start to the vacation.",
                    questions: [
                        { 
                            q: "Where did the family travel to?", 
                            options: [ 
                                {t: "To the mountains", c: false}, 
                                {t: "To the city", c: false}, 
                                {t: "To the beach", c: true}, 
                                {t: "To the farm", c: false} 
                            ] 
                        },
                        { 
                            q: "What was the problem?", 
                            options: [ 
                                {t: "The flight was cancelled.", c: false}, 
                                {t: "The luggage was lost.", c: true}, 
                                {t: "The weather was bad.", c: false}, 
                                {t: "The hotel was dirty.", c: false} 
                            ] 
                        },
                        { 
                            q: "Was Mrs. Silva worried?", 
                            options: [ 
                                {t: "No, she wasn't.", c: false}, 
                                {t: "Yes, she was.", c: true}, 
                                {t: "She was happy.", c: false}, 
                                {t: "She was tired.", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "A Bad Hotel",
                    audio: "audio/7-2-3/p6_text2.mp3",
                    body: "<b>Albert:</b> Hi Celine. You look tired.<br><b>Celine:</b> I am. My weekend trip was a disaster.<br><b>Albert:</b> Why? Was the hotel bad?<br><b>Celine:</b> Yes, it was terrible. The room was dirty and there wasn't any hot water.<br><b>Albert:</b> Oh no! Was it expensive?<br><b>Celine:</b> No, it was cheap, but it was noisy. There were people shouting all night.<br><b>Albert:</b> That sounds awful.",
                    questions: [
                        { 
                            q: "How was Celine's trip?", 
                            options: [ 
                                {t: "Great", c: false}, 
                                {t: "Relaxing", c: false}, 
                                {t: "A disaster", c: true}, 
                                {t: "Expensive", c: false} 
                            ] 
                        },
                        { 
                            q: "What was the problem with the water?", 
                            options: [ 
                                {t: "There wasn't any water.", c: false}, 
                                {t: "It was too hot.", c: false}, 
                                {t: "There wasn't any hot water.", c: true}, 
                                {t: "It was dirty.", c: false} 
                            ] 
                        },
                        { 
                            q: "Why was it noisy?", 
                            options: [ 
                                {t: "There was a party.", c: false}, 
                                {t: "There were cars.", c: false}, 
                                {t: "There were people shouting.", c: true}, 
                                {t: "There was a dog barking.", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "The Old Train Station",
                    audio: "TTS: Yesterday, I visited an old train station in the city center. It was very interesting. There were many old trains from the past. There was a small museum inside the station. The station was crowded with tourists taking photos. There wasn't a restaurant, but there was a small cafe. The ticket to enter was cheap. It was a good experience. || audio/7-2-3/p6_text3.mp3",
                    body: "Yesterday, I visited an old train station in the city center. It was very interesting. There were many old trains from the past. There was a small museum inside the station. The station was crowded with tourists taking photos. There wasn't a restaurant, but there was a small cafe. The ticket to enter was cheap. It was a good experience.",
                    questions: [
                        { 
                            q: "What did the writer visit?", 
                            options: [ 
                                {t: "An airport", c: false}, 
                                {t: "A bus station", c: false}, 
                                {t: "An old train station", c: true}, 
                                {t: "A new hotel", c: false} 
                            ] 
                        },
                        { 
                            q: "Was the station empty?", 
                            options: [ 
                                {t: "Yes, it was.", c: false}, 
                                {t: "No, it was crowded.", c: true}, 
                                {t: "It was closed.", c: false}, 
                                {t: "It was quiet.", c: false} 
                            ] 
                        },
                        { 
                            q: "Was there a restaurant?", 
                            options: [ 
                                {t: "Yes, there was.", c: false}, 
                                {t: "No, there wasn't.", c: true}, 
                                {t: "There were two restaurants.", c: false}, 
                                {t: "There was a big restaurant.", c: false} 
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
                    instruction: "Match the adjective with its opposite.<br><small style='color:#0077b6'>(Combine o adjetivo com seu oposto.)</small>",
                    pairs: [
                        { left: "Good", right: "Bad", val: "1" },
                        { left: "Expensive", right: "Cheap", val: "2" },
                        { left: "Crowded", right: "Empty", val: "3" },
                        { left: "Lost", right: "Found", val: "4" }
                    ]
                },
                // Drill 2: Word Order
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>",
                    sentence: "was / flight / The / delayed / .",
                    correct: "The flight was delayed ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "there / Was / problem / a / ?",
                    correct: "Was there a problem ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "mine / bag / is / That / .",
                    correct: "That bag is mine ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "weren't / We / with / happy / hotel / the / .",
                    correct: "We weren't happy with the hotel ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Was", c: false },
                        { t: "Were", c: false },
                        { t: "Is", c: false },
                        { t: "Delayed", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Mine", c: false },
                        { t: "Yours", c: false },
                        { t: "My", c: true },
                        { t: "Hers", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Suitcase", c: false },
                        { t: "Passport", c: false },
                        { t: "Ticket", c: false },
                        { t: "Went", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Terrible", c: false },
                        { t: "Disaster", c: false },
                        { t: "Great", c: true },
                        { t: "Bad", c: false }
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.<br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "The weather [was | were | wasn't | theirs] sunny yesterday.", a: "was" },
                        { q: "We [were | was | wasn't | theirs] late for the bus.", a: "were" },
                        { q: "It [wasn't | was | were | theirs] a good trip; it was bad.", a: "wasn't" },
                        { q: "Those tickets are [theirs | was | were | wasn't].", a: "theirs" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: A trip you took in the past. Now it's your turn! Write about a trip you took in the past (it can be real or imaginary).<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Uma viagem que você fez no passado. Agora é a sua vez! Escreva sobre uma viagem que você fez no passado - pode ser real ou imaginária.)</span></small>",
            example: "\"I went to the mountains last winter. The weather was very cold. There was a lot of snow. The hotel was nice, but the food was expensive. I liked the trip because I played in the snow.\"<br><br><small><span style='color:#0077b6'>(\"Eu fui para as montanhas no inverno passado. O tempo estava muito frio. Tinha muita neve. O hotel era legal, mas a comida era cara. Eu gostei da viagem porque brinquei na neve.\")</span></small>",
            prompts: [
                "Where did you go? (I went to...) <br><small><span style='color:#0077b6'>(Para onde você foi?)</span></small>",
                "How was the weather? (It was...) <br><small><span style='color:#0077b6'>(Como estava o tempo?)</span></small>",
                "Was there a problem? (There was/wasn't...) <br><small><span style='color:#0077b6'>(Houve algum problema?)</span></small>",
                "Did you like it? <br><small><span style='color:#0077b6'>(Você gostou?)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Travel Verbs)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                { 
                    term: "Travel - Travelled", 
                    definition: "To make a journey, typically of some length or abroad.", 
                    defTrans: "Viajar - Viajou",
                    example: "We travelled to Europe last year.", 
                    audioFront: "TTS: Travel, Travelled",
                    audioBack: "TTS: We travelled to Europe last year." 
                },
                { 
                    term: "Arrive - Arrived", 
                    definition: "To reach a place at the end of a journey.", 
                    defTrans: "Chegar - Chegou",
                    example: "They arrived at the hotel late.", 
                    audioFront: "TTS: Arrive, Arrived",
                    audioBack: "TTS: They arrived at the hotel late." 
                },
                { 
                    term: "Lose - Lost", 
                    definition: "To be unable to find something or someone.", 
                    defTrans: "Perder - Perdeu",
                    example: "I lost my passport.", 
                    audioFront: "TTS: Lose, Lost",
                    audioBack: "TTS: I lost my passport." 
                },
                { 
                    term: "Find - Found", 
                    definition: "To discover or perceive by chance or unexpectedly.", 
                    defTrans: "Achar - Achou",
                    example: "She found her ticket.", 
                    audioFront: "TTS: Find, Found",
                    audioBack: "TTS: She found her ticket." 
                },
                { 
                    term: "Go - Went", 
                    definition: "To move from one place to another.", 
                    defTrans: "Ir - Foi",
                    example: "He went to the beach.", 
                    audioFront: "TTS: Go, Went",
                    audioBack: "TTS: He went to the beach." 
                },
                { 
                    term: "Book - Booked", 
                    definition: "To reserve accommodations, a place, etc.", 
                    defTrans: "Reservar - Reservou",
                    example: "We booked a room online.", 
                    audioFront: "TTS: Book, Booked",
                    audioBack: "TTS: We booked a room online." 
                },
                { 
                    term: "Stay - Stayed", 
                    definition: "To live somewhere temporarily as a visitor or guest.", 
                    defTrans: "Ficar / Hospedar-se - Ficou",
                    example: "I stayed at my grandma's house.", 
                    audioFront: "TTS: Stay, Stayed",
                    audioBack: "TTS: I stayed at my grandma's house." 
                },
                { 
                    term: "Leave - Left", 
                    definition: "To go away from.", 
                    defTrans: "Sair / Partir - Saiu",
                    example: "The train left at 9 PM.", 
                    audioFront: "TTS: Leave, Left",
                    audioBack: "TTS: The train left at 9 PM." 
                },
                { 
                    term: "Visit - Visited", 
                    definition: "To go to see and spend time with.", 
                    defTrans: "Visitar - Visitou",
                    example: "We visited the museum.", 
                    audioFront: "TTS: Visit, Visited",
                    audioBack: "TTS: We visited the museum." 
                },
                { 
                    term: "Fly - Flew", 
                    definition: "To move through the air using wings or an aircraft.", 
                    defTrans: "Voar - Voou",
                    example: "The plane flew over the ocean.", 
                    audioFront: "TTS: Fly, Flew",
                    audioBack: "TTS: The plane flew over the ocean." 
                },
                { 
                    term: "Forget - Forgot", 
                    definition: "To fail to remember.", 
                    defTrans: "Esquecer - Esqueceu",
                    example: "He forgot his camera.", 
                    audioFront: "TTS: Forget, Forgot",
                    audioBack: "TTS: He forgot his camera." 
                },
                { 
                    term: "Drive - Drove", 
                    definition: "To operate and control the direction and speed of a motor vehicle.", 
                    defTrans: "Dirigir - Dirigiu",
                    example: "My dad drove for hours.", 
                    audioFront: "TTS: Drive, Drove",
                    audioBack: "TTS: My dad drove for hours." 
                },
                { 
                    term: "Break - Broke", 
                    definition: "To separate into pieces as a result of a blow, shock, or strain.", 
                    defTrans: "Quebrar - Quebrou",
                    example: "My suitcase broke.", 
                    audioFront: "TTS: Break, Broke",
                    audioBack: "TTS: My suitcase broke." 
                },
                { 
                    term: "Pack - Packed", 
                    definition: "To fill a suitcase or bag with clothes and other items for travel.", 
                    defTrans: "Fazer as malas - Fez as malas",
                    example: "I packed my bags yesterday.", 
                    audioFront: "TTS: Pack, Packed",
                    audioBack: "TTS: I packed my bags yesterday." 
                },
                { 
                    term: "Help - Helped", 
                    definition: "To make it easier for someone to do something.", 
                    defTrans: "Ajudar - Ajudou",
                    example: "The police officer helped us.", 
                    audioFront: "TTS: Help, Helped",
                    audioBack: "TTS: The police officer helped us." 
                },
                // --- Travel Objects ---
                { 
                    term: "Backpack", 
                    definition: "A bag with shoulder straps, carried on the back.", 
                    defTrans: "Mochila",
                    example: "I carry my backpack everywhere.", 
                    audioFront: "TTS: Backpack",
                    audioBack: "TTS: I carry my backpack everywhere." 
                },
                { 
                    term: "Passport", 
                    definition: "An official document issued by a government for international travel.", 
                    defTrans: "Passaporte",
                    example: "Show your passport at the gate.", 
                    audioFront: "TTS: Passport",
                    audioBack: "TTS: Show your passport at the gate." 
                },
                { 
                    term: "Ticket", 
                    definition: "A piece of paper or electronic record giving the right to travel.", 
                    defTrans: "Passagem / Bilhete",
                    example: "This is my bus ticket.", 
                    audioFront: "TTS: Ticket",
                    audioBack: "TTS: This is my bus ticket." 
                },
                { 
                    term: "Map", 
                    definition: "A diagrammatic representation of an area of land or sea.", 
                    defTrans: "Mapa",
                    example: "Look at the map to find the museum.", 
                    audioFront: "TTS: Map",
                    audioBack: "TTS: Look at the map to find the museum." 
                },
                { 
                    term: "Camera", 
                    definition: "A device for recording visual images or photographs.", 
                    defTrans: "Câmera fotográfica",
                    example: "Take a photo with the camera.", 
                    audioFront: "TTS: Camera",
                    audioBack: "TTS: Take a photo with the camera." 
                },
                { 
                    term: "Phone", 
                    definition: "A telephone, especially a mobile phone.", 
                    defTrans: "Celular / Telefone",
                    example: "My phone has GPS.", 
                    audioFront: "TTS: Phone",
                    audioBack: "TTS: My phone has GPS." 
                },
                { 
                    term: "Souvenir", 
                    definition: "A thing that is kept as a reminder of a person, place, or event.", 
                    defTrans: "Lembrancinha",
                    example: "I bought a souvenir for you.", 
                    audioFront: "TTS: Souvenir",
                    audioBack: "TTS: I bought a souvenir for you." 
                },
                { 
                    term: "Money / Cash", 
                    definition: "A current medium of exchange in the form of coins and banknotes.", 
                    defTrans: "Dinheiro",
                    example: "I need more money for the trip.", 
                    audioFront: "TTS: Money or Cash",
                    audioBack: "TTS: I need more money for the trip." 
                },
                { 
                    term: "Credit Card", 
                    definition: "A small plastic card allowing the holder to purchase goods on credit.", 
                    defTrans: "Cartão de crédito",
                    example: "Pay with a credit card.", 
                    audioFront: "TTS: Credit Card",
                    audioBack: "TTS: Pay with a credit card." 
                },

                // --- Places & Concepts ---
                { 
                    term: "Hotel", 
                    definition: "An establishment providing accommodations and meals for travelers.", 
                    defTrans: "Hotel",
                    example: "The hotel was clean.", 
                    audioFront: "TTS: Hotel",
                    audioBack: "TTS: The hotel was clean." 
                },
                { 
                    term: "Airport", 
                    definition: "A complex of runways and buildings for takeoff and landing.", 
                    defTrans: "Aeroporto",
                    example: "We waited at the airport.", 
                    audioFront: "TTS: Airport",
                    audioBack: "TTS: We waited at the airport." 
                },
                { 
                    term: "Station", 
                    definition: "A place on a railway line where trains regularly stop.", 
                    defTrans: "Estação",
                    example: "The train is at the station.", 
                    audioFront: "TTS: Station",
                    audioBack: "TTS: The train is at the station." 
                },
                { 
                    term: "Beach", 
                    definition: "A pebbly or sandy shore, especially by the ocean.", 
                    defTrans: "Praia",
                    example: "It was hot at the beach.", 
                    audioFront: "TTS: Beach",
                    audioBack: "TTS: It was hot at the beach." 
                },
                { 
                    term: "City", 
                    definition: "A large and important town.", 
                    defTrans: "Cidade",
                    example: "New York is a big city.", 
                    audioFront: "TTS: City",
                    audioBack: "TTS: New York is a big city." 
                },
                { 
                    term: "Vacation / Holiday", 
                    definition: "An extended period of leisure and recreation.", 
                    defTrans: "Férias / Feriado",
                    example: "My vacation was great.", 
                    audioFront: "TTS: Vacation or Holiday",
                    audioBack: "TTS: My vacation was great." 
                },
                { 
                    term: "Trip / Journey", 
                    definition: "An act of going to a place and returning.", 
                    defTrans: "Viagem",
                    example: "How was your trip?", 
                    audioFront: "TTS: Trip or Journey",
                    audioBack: "TTS: How was your trip?" 
                },
                { 
                    term: "Problem", 
                    definition: "A matter or situation regarded as unwelcome or harmful.", 
                    defTrans: "Problema",
                    example: "We had a problem with the car.", 
                    audioFront: "TTS: Problem",
                    audioBack: "TTS: We had a problem with the car." 
                },
                { 
                    term: "Disaster", 
                    definition: "A sudden event that causes great damage or loss.", 
                    defTrans: "Desastre",
                    example: "The holiday was a disaster.", 
                    audioFront: "TTS: Disaster",
                    audioBack: "TTS: The holiday was a disaster." 
                },
                { 
                    term: "Weather", 
                    definition: "The state of the atmosphere at a place and time.", 
                    defTrans: "Tempo / Clima",
                    example: "The weather was sunny.", 
                    audioFront: "TTS: Weather",
                    audioBack: "TTS: The weather was sunny." 
                },
                // --- Adjectives ---
                { 
                    term: "Bad / Terrible", 
                    definition: "Of poor quality or extremely unpleasant.", 
                    defTrans: "Ruim / Terrível",
                    example: "The food was terrible.", 
                    audioFront: "TTS: Bad, Terrible",
                    audioBack: "TTS: The food was terrible." 
                },
                { 
                    term: "Good / Great", 
                    definition: "To be desired or approved of; of a high standard.", 
                    defTrans: "Bom / Ótimo",
                    example: "We had a great time.", 
                    audioFront: "TTS: Good, Great",
                    audioBack: "TTS: We had a great time." 
                },
                { 
                    term: "Lost", 
                    definition: "Unable to find one's way.", 
                    defTrans: "Perdido(a)",
                    example: "We got lost in the city.", 
                    audioFront: "TTS: Lost",
                    audioBack: "TTS: We got lost in the city." 
                },
                { 
                    term: "Broken", 
                    definition: "Having been fractured or damaged; not working.", 
                    defTrans: "Quebrado(a)",
                    example: "The shower was broken.", 
                    audioFront: "TTS: Broken",
                    audioBack: "TTS: The shower was broken." 
                },
                { 
                    term: "Delayed", 
                    definition: "Late or slow; happening at a later time than expected.", 
                    defTrans: "Atrasado(a)",
                    example: "The flight is delayed.", 
                    audioFront: "TTS: Delayed",
                    audioBack: "TTS: The flight is delayed." 
                },
                { 
                    term: "Cancelled", 
                    definition: "Decided or announced that an event will not take place.", 
                    defTrans: "Cancelado(a)",
                    example: "The tour was cancelled.", 
                    audioFront: "TTS: Cancelled",
                    audioBack: "TTS: The tour was cancelled." 
                },
                { 
                    term: "Crowded", 
                    definition: "Full of people, leaving little or no room for movement.", 
                    defTrans: "Lotado(a)",
                    example: "The bus was crowded.", 
                    audioFront: "TTS: Crowded",
                    audioBack: "TTS: The bus was crowded." 
                },
                { 
                    term: "Empty", 
                    definition: "Containing nothing; not filled or occupied.", 
                    defTrans: "Vazio(a)",
                    example: "The street was empty.", 
                    audioFront: "TTS: Empty",
                    audioBack: "TTS: The street was empty." 
                },
                { 
                    term: "Expensive", 
                    definition: "Costing a lot of money.", 
                    defTrans: "Caro(a)",
                    example: "Tickets were expensive.", 
                    audioFront: "TTS: Expensive",
                    audioBack: "TTS: Tickets were expensive." 
                },
                { 
                    term: "Cheap", 
                    definition: "Costing little money; low in price.", 
                    defTrans: "Barato(a)",
                    example: "This souvenir is cheap.", 
                    audioFront: "TTS: Cheap",
                    audioBack: "TTS: This souvenir is cheap." 
                },
                { 
                    term: "Hot", 
                    definition: "Having a high degree of heat or temperature.", 
                    defTrans: "Quente",
                    example: "It was very hot yesterday.", 
                    audioFront: "TTS: Hot",
                    audioBack: "TTS: It was very hot yesterday." 
                },
                { 
                    term: "Cold", 
                    definition: "Of or at a low or relatively low temperature.", 
                    defTrans: "Frio",
                    example: "The room was cold.", 
                    audioFront: "TTS: Cold",
                    audioBack: "TTS: The room was cold." 
                },

                // --- Grammar Points ---
                { 
                    term: "Was", 
                    definition: "Past tense of 'am' and 'is' (Singular).", 
                    defTrans: "Era / Estava",
                    example: "She was happy.", 
                    audioFront: "TTS: Was",
                    audioBack: "TTS: She was happy." 
                },
                { 
                    term: "Were", 
                    definition: "Past tense of 'are' (Plural and You).", 
                    defTrans: "Eram / Estavam",
                    example: "They were tired.", 
                    audioFront: "TTS: Were",
                    audioBack: "TTS: They were tired." 
                },
                { 
                    term: "Wasn't / Weren't", 
                    definition: "Negative past forms of the verb 'to be'.", 
                    defTrans: "Não era / Não estava",
                    example: "It wasn't fun.", 
                    audioFront: "TTS: Wasn't, Weren't",
                    audioBack: "TTS: It wasn't fun." 
                },
                { 
                    term: "There was / There were", 
                    definition: "Used to say that something existed in the past.", 
                    defTrans: "Havia / Tinha",
                    example: "There was a problem.", 
                    audioFront: "TTS: There was, There were",
                    audioBack: "TTS: There was a problem." 
                },

                // --- Possessive Pronouns ---
                { 
                    term: "Mine", 
                    definition: "Used to indicate that something belongs to the speaker.", 
                    defTrans: "Meu / Minha",
                    example: "The bag is mine.", 
                    audioFront: "TTS: Mine",
                    audioBack: "TTS: The bag is mine." 
                },
                { 
                    term: "Yours", 
                    definition: "Used to indicate that something belongs to the person being addressed.", 
                    defTrans: "Seu / Sua",
                    example: "Is this ticket yours?", 
                    audioFront: "TTS: Yours",
                    audioBack: "TTS: Is this ticket yours?" 
                },
                { 
                    term: "His / Hers", 
                    definition: "Indicates that something belongs to a male or female person.", 
                    defTrans: "Dele / Dela",
                    example: "The car is his.", 
                    audioFront: "TTS: His, Hers",
                    audioBack: "TTS: The car is his." 
                },
                { 
                    term: "Ours", 
                    definition: "Indicates that something belongs to the speaker and others.", 
                    defTrans: "Nosso / Nossa",
                    example: "The house is ours.", 
                    audioFront: "TTS: Ours",
                    audioBack: "TTS: The house is ours." 
                },
                { 
                    term: "Theirs", 
                    definition: "Indicates that something belongs to two or more people.", 
                    defTrans: "Deles / Delas",
                    example: "The decision was theirs.", 
                    audioFront: "TTS: Theirs",
                    audioBack: "TTS: The decision was theirs." 
                }
            ]
        }
    ], // This closes the steps array

    // ======================================================
    // GLOSSARY (Part 1: Context & Travel Verbs)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "vacation", 
            definition: "An extended period of leisure and recreation, especially one spent away from home.", 
            translation: "Férias" 
        },
        { 
            topic: "Context", 
            term: "terrible", 
            definition: "Extremely bad or serious.", 
            translation: "Terrível" 
        },
        { 
            topic: "Context", 
            term: "disaster", 
            definition: "A sudden event that causes great damage or loss.", 
            translation: "Desastre" 
        },
        { 
            topic: "Context", 
            term: "happened", 
            definition: "Past form of happen; to take place; occur.", 
            translation: "Aconteceu" 
        },
        {
            topic: "Context",
            term: "flight",
            definition: "The act of flying or the path taken by an aircraft.",
            translation: "Voo"
        },
        { 
            topic: "Context", 
            term: "delayed", 
            definition: "Late or slow; happening at a later time than expected.", 
            translation: "Atrasado(a)" 
        },
        { 
            topic: "Context", 
            term: "expensive", 
            definition: "Costing a lot of money.", 
            translation: "Caro(a)" 
        },
        { 
            topic: "Context", 
            term: "towels", 
            definition: "Pieces of thick absorbent cloth or paper used for drying.", 
            translation: "Toalhas" 
        },
        { 
            topic: "Context", 
            term: "suitcase", 
            definition: "A case used for carrying clothes and personal effects when travelling.", 
            translation: "Mala" 
        },
        { 
            topic: "Context", 
            term: "was-lost", 
            definition: "Stating that something could not be found in the past.", 
            translation: "Estava perdido / Foi perdido" 
        },
        { 
            topic: "Context", 
            term: "weather", 
            definition: "The state of the atmosphere at a place and time regarding heat, dryness, sunshine, wind, rain, etc.", 
            translation: "Tempo / Clima" 
        },

        // --- TOPIC 2: TRAVEL VERBS (Present & Past) ---
        { 
            topic: "Travel Verbs", 
            term: "travel", 
            definition: "To make a journey, typically of some length or abroad.", 
            translation: "Viajar" 
        },
        { 
            topic: "Travel Verbs", 
            term: "travelled", 
            definition: "Past form of travel.", 
            translation: "Viajou / Viajaram" 
        },
        { 
            topic: "Travel Verbs", 
            term: "arrive", 
            definition: "To reach a place at the end of a journey.", 
            translation: "Chegar" 
        },
        { 
            topic: "Travel Verbs", 
            term: "arrived", 
            definition: "Past form of arrive.", 
            translation: "Chegou / Chegaram" 
        },
        { 
            topic: "Travel Verbs", 
            term: "lose", 
            definition: "To be unable to find something or someone.", 
            translation: "Perder" 
        },
        { 
            topic: "Travel Verbs", 
            term: "lost", 
            definition: "Past form of lose.", 
            translation: "Perdeu / Perderam" 
        },
        { 
            topic: "Travel Verbs", 
            term: "find", 
            definition: "To discover or perceive by chance or unexpectedly.", 
            translation: "Achar / Encontrar" 
        },
        { 
            topic: "Travel Verbs", 
            term: "found", 
            definition: "Past form of find.", 
            translation: "Achou / Encontraram" 
        },
        { 
            topic: "Travel Verbs", 
            term: "go", 
            definition: "To move from one place to another.", 
            translation: "Ir" 
        },
        { 
            topic: "Travel Verbs", 
            term: "went", 
            definition: "Past form of go.", 
            translation: "Foi / Foram" 
        },
        { 
            topic: "Travel Verbs", 
            term: "book", 
            definition: "To reserve accommodations, a place, etc.", 
            translation: "Reservar" 
        },
        { 
            topic: "Travel Verbs", 
            term: "booked", 
            definition: "Past form of book.", 
            translation: "Reservou / Reservaram" 
        },
        { 
            topic: "Travel Verbs", 
            term: "stay", 
            definition: "To live somewhere temporarily as a visitor or guest.", 
            translation: "Ficar / Hospedar-se" 
        },
        { 
            topic: "Travel Verbs", 
            term: "stayed", 
            definition: "Past form of stay.", 
            translation: "Ficou / Ficaram" 
        },
        { 
            topic: "Travel Verbs", 
            term: "leave", 
            definition: "To go away from.", 
            translation: "Sair / Partir" 
        },
        { 
            topic: "Travel Verbs", 
            term: "left", 
            definition: "Past form of leave.", 
            translation: "Saiu / Saíram" 
        },
        // --- TOPIC 2: TRAVEL VERBS (Continued) ---
        { topic: "Travel Verbs", term: "visit", definition: "To go to see and spend time with someone or a place.", translation: "Visitar" },
        { topic: "Travel Verbs", term: "visited", definition: "Past form of visit.", translation: "Visitou / Visitaram" },
        { topic: "Travel Verbs", term: "fly", definition: "To move through the air using wings or an aircraft.", translation: "Voar" },
        { topic: "Travel Verbs", term: "flew", definition: "Past form of fly.", translation: "Voou / Voaram" },
        { topic: "Travel Verbs", term: "forget", definition: "To fail to remember.", translation: "Esquecer" },
        { topic: "Travel Verbs", term: "forgot", definition: "Past form of forget.", translation: "Esqueceu / Esqueceram" },
        { topic: "Travel Verbs", term: "drive", definition: "To operate and control a motor vehicle.", translation: "Dirigir" },
        { topic: "Travel Verbs", term: "drove", definition: "Past form of drive.", translation: "Dirigiu / Dirigiram" },
        { topic: "Travel Verbs", term: "break", definition: "To separate into pieces as a result of a blow or strain.", translation: "Quebrar" },
        { topic: "Travel Verbs", term: "broke", definition: "Past form of break.", translation: "Quebrou / Quebraram" },
        { topic: "Travel Verbs", term: "pack", definition: "To fill a suitcase or bag for travel.", translation: "Fazer as malas" },
        { topic: "Travel Verbs", term: "packed", definition: "Past form of pack.", translation: "Fez as malas / Fizeram as malas" },
        { topic: "Travel Verbs", term: "help", definition: "To make it easier for someone to do something.", translation: "Ajudar" },
        { topic: "Travel Verbs", term: "helped", definition: "Past form of help.", translation: "Ajudou / Ajudaram" },
        { topic: "Travel Verbs", term: "watch", definition: "To look at or observe attentively over a period of time.", translation: "Assistir" },
        { topic: "Travel Verbs", term: "watched", definition: "Past form of watch.", translation: "Assistiu / Assistiram" },
        { topic: "Travel Verbs", term: "eat", definition: "To put food into the mouth and swallow it.", translation: "Comer" },
        { topic: "Travel Verbs", term: "ate", definition: "Past form of eat.", translation: "Comeu / Comeram" },
        { topic: "Travel Verbs", term: "drink", definition: "To take a liquid into the mouth and swallow it.", translation: "Beber" },
        { topic: "Travel Verbs", term: "drank", definition: "Past form of drink.", translation: "Bebeu / Beberam" },

        // --- TOPIC 3: TRAVEL OBJECTS & PLACES ---
        { topic: "Travel Objects", term: "backpack", definition: "A bag with shoulder straps, carried on the back.", translation: "Mochila" },
        { topic: "Travel Objects", term: "passport", definition: "Official document for international travel.", translation: "Passaporte" },
        { topic: "Travel Objects", term: "ticket", definition: "Paper or record giving the right to travel.", translation: "Passagem / Bilhete" },
        { topic: "Travel Objects", term: "map", definition: "A diagrammatic representation of an area of land.", translation: "Mapa" },
        { topic: "Travel Objects", term: "camera", definition: "Device for recording visual images.", translation: "Câmera" },
        { topic: "Travel Objects", term: "phone", definition: "A mobile telephone.", translation: "Celular" },
        { topic: "Travel Objects", term: "souvenir", definition: "A thing kept as a reminder of a place or event.", translation: "Lembrancinha" },
        { topic: "Travel Objects", term: "money", definition: "Coins and banknotes used to pay for things.", translation: "Dinheiro" },
        { topic: "Travel Objects", term: "hotel", definition: "Establishment providing accommodations.", translation: "Hotel" },
        { topic: "Travel Objects", term: "airport", definition: "Runways and buildings for takeoff and landing.", translation: "Aeroporto" },
        { topic: "Travel Objects", term: "station", definition: "Place where trains or buses stop regularly.", translation: "Estação" },
        { topic: "Travel Objects", term: "beach", definition: "Pebbly or sandy shore by the ocean.", translation: "Praia" },

        // --- TOPIC 4: ADJECTIVES ---
        { topic: "Adjectives", term: "great", definition: "Of an extent or intensity above the normal; very good.", translation: "Ótimo" },
        { topic: "Adjectives", term: "funny", definition: "Causing laughter or amusement.", translation: "Engraçado" },
        { topic: "Adjectives", term: "scary", definition: "Frightening; causing fear.", translation: "Assustador" },
        { topic: "Adjectives", term: "boring", definition: "Not interesting; tedious.", translation: "Chato / Entediante" },
        { topic: "Adjectives", term: "interesting", definition: "Engaging or exciting and holding the attention.", translation: "Interessante" },
        { topic: "Adjectives", term: "crowded", definition: "Full of people, leaving little room for movement.", translation: "Lotado" },
        { topic: "Adjectives", term: "empty", definition: "Containing nothing; not occupied.", translation: "Vazio" },

        // --- TOPIC 5: GRAMMAR & MISC ---
        { topic: "Grammar", term: "was", definition: "Past tense of 'am' and 'is'.", translation: "Era / Estava" },
        { topic: "Grammar", term: "were", definition: "Past tense of 'are'.", translation: "Eram / Estavam" },
        { topic: "Grammar", term: "there-was", definition: "Past tense of 'There is'; singular existence.", translation: "Havia / Tinha (singular)" },
        { topic: "Grammar", term: "there-were", definition: "Past tense of 'There are'; plural existence.", translation: "Havia / Tinha (plural)" },
        { topic: "Grammar", term: "mine", definition: "Belonging to me.", translation: "Meu / Minha" },
        { topic: "Grammar", term: "yours", definition: "Belonging to you.", translation: "Seu / Sua" },
        { topic: "Grammar", term: "his", definition: "Belonging to him.", translation: "Dele" },
        { topic: "Grammar", term: "hers", definition: "Belonging to her.", translation: "Dela" },
        { topic: "Grammar", term: "ours", definition: "Belonging to us.", translation: "Nosso / Nossa" },
        { topic: "Grammar", term: "theirs", definition: "Belonging to them.", translation: "Deles / Delas" },
        { topic: "Grammar", term: "whose", definition: "Question word used to ask about ownership.", translation: "De quem" }
    ]
});