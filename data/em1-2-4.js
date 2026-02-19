/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em1-2-4", 
    grade: "High School 1st Grade",       
    bimester: "2",   
    chapter: "4",    
    chapterTitle: "Future Cities: Urban Challenges", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss urban challenges and sustainable solutions.<br>• Use phrasal verbs with 'run' and 'put' in city contexts.<br>• Differentiate between four ways to talk about the future.<br>• Use modals and semi-modals to express advice, obligation, and possibility.",
            welcome: "Hello, future city planners! I'm Mr. D!<br>Welcome to a journey into the cities of tomorrow! Have you ever been stuck in a traffic jam and thought: \"There must be a better way\"? Today, we are going to explore the sustainability of our urban world. We'll learn how to talk about big ideas like renewable energy and infrastructure. It’s time to take charge and discuss how we can build a greener, better world. Let's get to work!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss urban challenges and sustainable solutions. Use phrasal verbs with run and put in city contexts. Differentiate between four ways to talk about the future. Use modals and semi-modals to express advice, obligation, and possibility.",
                welcome: "TTS: Hello, future city planners! I'm Mr. D! Welcome to a journey into the cities of tomorrow! Have you ever been stuck in a traffic jam and thought: There must be a better way? Today, we are going to explore the sustainability of our urban world. We'll learn how to talk about big ideas like renewable energy and infrastructure. It’s time to take charge and discuss how we can build a greener, better world. Let's get to work!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context) - Character Fix
        // ======================================================
        {
            title: "What’s up today?",
            context: "Celine and Mrs. Canales are in the school library discussing a geography project about future cities and sustainability.", 
            contextAudio: "audio/em1-2-4/step1.mp3",
            dialogue: [
                { 
                    speaker: "Mrs. Canales", 
                    text: "Celine, tell the class about your research. How are cities changing?" 
                },
                { 
                    speaker: "Celine", 
                    text: "Well, my [hometown](tooltip:hometown) in Australia [is starting](tooltip:starting) a new project to become a [sustainable city](tooltip:sustainable-city). They [are going to](tooltip:be-going-to) [build](tooltip:build) a huge [renewable energy](tooltip:renewable-energy) plant!" 
                },
                { 
                    speaker: "Mrs. Canales", 
                    text: "That's cool! Canada also has some [big cities](tooltip:big-city) that [invest](tooltip:invest) heavily in [green spaces](tooltip:green-spaces). But honestly, many people can't [put up with](tooltip:put-up-with) the [pollution](tooltip:pollution) in most [urban areas](tooltip:urban-area) anymore." 
                },
                { 
                    speaker: "Celine", 
                    text: "I know! And we [mustn't](tooltip:mustn-t) [put off](tooltip:put-off) solving these problems. If we don't [improve](tooltip:improve) our [infrastructure](tooltip:infrastructure), we [will](tooltip:will) [run out of](tooltip:run-out-of) clean air soon." 
                },
                { 
                    speaker: "Mrs. Canales", 
                    text: "True. The [public transport](tooltip:public-transport) here [arrives](tooltip:arrive) every ten minutes, but it's not enough for the [overpopulation](tooltip:overpopulation). We [should](tooltip:should) [plan](tooltip:plan) a city where people [would rather](tooltip:would-rather) cycle than drive." 
                },
                { 
                    speaker: "Celine", 
                    text: "Exactly! If we [limit](tooltip:limit) private cars, the [traffic jams](tooltip:traffic-jam) will disappear. We [could](tooltip:could) even [develop](tooltip:develop) more [affordable housing](tooltip:affordable-housing) near the [parks](tooltip:park)." 
                },
                { 
                    speaker: "Mrs. Canales", 
                    text: "I [admit](tooltip:admit) that sounds like a great [opportunity](tooltip:opportunity). I'll [put on](tooltip:put-on) my researcher hat and help you find more data!" 
                },
                { 
                    speaker: "Celine", 
                    text: "Great! We [may](tooltip:may) [run into](tooltip:run-into) some [challenges](tooltip:challenge), but we are going to [make a difference](tooltip:make-a-difference)!" 
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
                    title: "Urban Verbs",
                    audio: "TTS: Develop. Improve. Reduce. Solve. Plan. Build. Limit. Invest. Conserve. Prioritize.",
                    items: [
                        { term: "Develop", trans: "Desenvolver" },
                        { term: "Improve", trans: "Melhorar" },
                        { term: "Reduce", trans: "Reduzir" },
                        { term: "Solve", trans: "Resolver" },
                        { term: "Plan", trans: "Planejar" },
                        { term: "Build", trans: "Construir" },
                        { term: "Limit", trans: "Limitar" },
                        { term: "Invest", trans: "Investir" },
                        { term: "Conserve", trans: "Conservar" },
                        { term: "Prioritize", trans: "Priorizar" }
                    ]
                },
                {
                    title: "City & Sustainability",
                    audio: "TTS: Big City. Urban Area. Challenge. Opportunity. Pollution. Traffic Jam. Congestion. Public Transport. Waste. Garbage. Waste Management. Recycling. Housing. Overpopulation. Green Spaces. Parks. Renewable Energy. Sustainability. Infrastructure.",
                    items: [
                        { term: "Big City / Urban Area", trans: "Cidade grande / Área urbana" },
                        { term: "Challenge", trans: "Desafio" },
                        { term: "Opportunity", trans: "Oportunidade" },
                        { term: "Pollution", trans: "Poluição" },
                        { term: "Traffic Jam / Congestion", trans: "Congestionamento / Trânsito" },
                        { term: "Public Transport", trans: "Transporte público" },
                        { term: "Waste / Garbage", trans: "Lixo / Resíduo" },
                        { term: "Waste Management", trans: "Gerenciamento de resíduos" },
                        { term: "Recycling", trans: "Reciclagem" },
                        { term: "Housing", trans: "Moradia / Habitação" },
                        { term: "Overpopulation", trans: "Superpopulação" },
                        { term: "Green Spaces / Parks", trans: "Espaços verdes / Parques" },
                        { term: "Renewable Energy", trans: "Energia renovável" },
                        { term: "Sustainability", trans: "Sustentabilidade" },
                        { term: "Infrastructure", trans: "Infraestrutura" }
                    ]
                },
                {
                    title: "Phrasal Verbs (RUN)",
                    audio: "TTS: Run out of. Run into. Run over. Run after. Run away.",
                    items: [
                        { term: "Run out of", trans: "Ficar sem / Esgotar" },
                        { term: "Run into", trans: "Encontrar por acaso" },
                        { term: "Run over", trans: "Atropelar" },
                        { term: "Run after", trans: "Correr atrás" },
                        { term: "Run away", trans: "Fugir de" }
                    ]
                },
                {
                    title: "Phrasal Verbs (PUT)",
                    audio: "TTS: Put up with. Put off. Put out. Put away. Put on. Put down.",
                    items: [
                        { term: "Put up with", trans: "Tolerar / Aguentar" },
                        { term: "Put off", trans: "Adiar" },
                        { term: "Put out", trans: "Apagar (fogo)" },
                        { term: "Put away", trans: "Guardar (lugar certo)" },
                        { term: "Put on", trans: "Vestir / Ligar" },
                        { term: "Put down", trans: "Colocar no chão / Insultar" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Urban Verbs",
                    audio: "TTS: We need to develop new technologies for the future. The city must improve the bus system. You should reduce your energy consumption. How can we solve the water problem? They are going to plan the new park tomorrow. The government will build a new metro. We must limit the number of cars. It's important to invest in education. We had better conserve our resources. Sustainable cities prioritize people over cars.",
                    items: [
                        { term: "Develop", sent: "We need to develop new technologies for the future.", trans: "<span style='color:#0077b6'>Nós precisamos desenvolver novas tecnologias para o futuro.</span>" },
                        { term: "Improve", sent: "The city must improve the bus system.", trans: "<span style='color:#0077b6'>A cidade deve melhorar o sistema de ônibus.</span>" },
                        { term: "Reduce", sent: "You should reduce your energy consumption.", trans: "<span style='color:#0077b6'>Você deveria reduzir seu consumo de energia.</span>" },
                        { term: "Solve", sent: "How can we solve the water problem?", trans: "<span style='color:#0077b6'>Como podemos resolver o problema da água?</span>" },
                        { term: "Plan", sent: "They are going to plan the new park tomorrow.", trans: "<span style='color:#0077b6'>Eles vão planejar o novo parque amanhã.</span>" },
                        { term: "Build", sent: "The government will build a new metro.", trans: "<span style='color:#0077b6'>O governo construirá um novo metrô.</span>" },
                        { term: "Limit", sent: "We must limit the number of cars.", trans: "<span style='color:#0077b6'>Nós devemos limitar o número de carros.</span>" },
                        { term: "Invest", sent: "It's important to invest in education.", trans: "<span style='color:#0077b6'>É importante investir em educação.</span>" },
                        { term: "Conserve", sent: "We had better conserve our resources.", trans: "<span style='color:#0077b6'>É melhor conservarmos nossos recursos.</span>" },
                        { term: "Prioritize", sent: "Sustainable cities prioritize people over cars.", trans: "<span style='color:#0077b6'>Cidades sustentáveis priorizam pessoas em vez de carros.</span>" }
                    ]
                },
                {
                    title: "City & Sustainability",
                    audio: "TTS: Tokyo is a very big city. Traffic is a major challenge in São Paulo. Moving to the city is a big opportunity. Air pollution is bad for our health. I was late because of a traffic jam. I use public transport to go to school. Don't throw waste on the street. Efficient waste management reduces landfills. Recycling plastic is essential. The city needs more affordable housing. Overpopulation causes many urban issues. We need more green spaces to breathe. Solar power is a type of renewable energy. Sustainability is the key to our future. Our infrastructure needs a total update.",
                    items: [
                        { term: "Big City", sent: "Tokyo is a very big city.", trans: "<span style='color:#0077b6'>Tóquio é uma cidade muito grande.</span>" },
                        { term: "Challenge", sent: "Traffic is a major challenge in São Paulo.", trans: "<span style='color:#0077b6'>O trânsito é um grande desafio em São Paulo.</span>" },
                        { term: "Opportunity", sent: "Moving to the city is a big opportunity.", trans: "<span style='color:#0077b6'>Mudar-se para a cidade é uma grande oportunidade.</span>" },
                        { term: "Pollution", sent: "Air pollution is bad for our health.", trans: "<span style='color:#0077b6'>A poluição do ar é ruim para nossa saúde.</span>" },
                        { term: "Traffic Jam", sent: "I was late because of a traffic jam.", trans: "<span style='color:#0077b6'>Eu estava atrasado por causa de um congestionamento.</span>" },
                        { term: "Public Transport", sent: "I use public transport to go to school.", trans: "<span style='color:#0077b6'>Eu uso transporte público para ir à escola.</span>" },
                        { term: "Waste", sent: "Don't throw waste on the street.", trans: "<span style='color:#0077b6'>Não jogue lixo na rua.</span>" },
                        { term: "Waste Management", sent: "Efficient waste management reduces landfills.", trans: "<span style='color:#0077b6'>O gerenciamento de resíduos eficiente reduz os aterros sanitários.</span>" },
                        { term: "Recycling", sent: "Recycling plastic is essential.", trans: "<span style='color:#0077b6'>Reciclar plástico é essencial.</span>" },
                        { term: "Housing", sent: "The city needs more affordable housing.", trans: "<span style='color:#0077b6'>A cidade precisa de moradias mais acessíveis.</span>" },
                        { term: "Overpopulation", sent: "Overpopulation causes many urban issues.", trans: "<span style='color:#0077b6'>A superpopulação causa muitos problemas urbanos.</span>" },
                        { term: "Green Spaces", sent: "We need more green spaces to breathe.", trans: "<span style='color:#0077b6'>Precisamos de mais espaços verdes para respirar.</span>" },
                        { term: "Renewable Energy", sent: "Solar power is a type of renewable energy.", trans: "<span style='color:#0077b6'>Energia solar é um tipo de energia renovável.</span>" },
                        { term: "Sustainability", sent: "Sustainability is the key to our future.", trans: "<span style='color:#0077b6'>A sustentabilidade é a chave para o nosso futuro.</span>" },
                        { term: "Infrastructure", sent: "Our infrastructure needs a total update.", trans: "<span style='color:#0077b6'>Nossa infraestrutura precisa de uma atualização total.</span>" }
                    ]
                },
                {
                    title: "RUN (Examples)",
                    audio: "TTS: We are going to run out of batteries for the drone! I ran into him near the city hall. Be careful! A bike almost ran you over. Why is that man running? He is running after the bus! Why are the birds leaving? They usually run away from noisy construction sites.",
                    items: [
                        { term: "Run out of", sent: "We are going to run out of batteries for the drone!", trans: "<span style='color:#0077b6'>Ficaremos sem baterias para o drone!</span>" },
                        { term: "Run into", sent: "I ran into him near the city hall.", trans: "<span style='color:#0077b6'>Eu o encontrei por acaso perto da prefeitura.</span>" },
                        { term: "Run over", sent: "Be careful! A bike almost ran you over.", trans: "<span style='color:#0077b6'>Cuidado! Uma bicicleta quase te atropelou.</span>" },
                        { term: "Run after", sent: "He is running after the bus!", trans: "<span style='color:#0077b6'>Ele está correndo atrás do ônibus!</span>" },
                        { term: "Run away", sent: "They usually run away from noisy construction sites.", trans: "<span style='color:#0077b6'>Eles geralmente fogem de canteiros de obras barulhentos.</span>" }
                    ]
                },
                {
                    title: "PUT (Examples)",
                    audio: "TTS: How can you put up with this noise? We can't put off our project anymore. Please put out that candle before you leave. Where should I put away these bottles? It's getting dark. Can you put on the lights? Just put the map down on the table.",
                    items: [
                        { term: "Put up with", sent: "How can you put up with this noise?", trans: "<span style='color:#0077b6'>Como você consegue aguentar esse barulho?</span>" },
                        { term: "Put off", sent: "We can't put off our project anymore.", trans: "<span style='color:#0077b6'>Não podemos mais adiar nosso projeto.</span>" },
                        { term: "Put out", sent: "Please put out that candle before you leave.", trans: "<span style='color:#0077b6'>Por favor, apague aquela vela antes de sair.</span>" },
                        { term: "Put away", sent: "Where should I put away these bottles?", trans: "<span style='color:#0077b6'>Onde devo guardar essas garrafas?</span>" },
                        { term: "Put on", sent: "Can you put on the lights?", trans: "<span style='color:#0077b6'>Você pode ligar as luzes?</span>" },
                        { term: "Put down", sent: "Just put the map down on the table.", trans: "<span style='color:#0077b6'>Apenas coloque o mapa sobre a mesa.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (Expanded to 30 Vocabulary Questions)
            drills: [
                {
                    type: "mcq",
                    q: "To make a city better, we must _______ the public transport system.",
                    options: [
                        {t: "Limit", c: false},
                        {t: "Improve", c: true},
                        {t: "Waste", c: false},
                        {t: "Run over", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Scientists need to _______ a way to use less plastic in urban areas.",
                    options: [
                        {t: "Build", c: false},
                        {t: "Invest", c: false},
                        {t: "Develop", c: true},
                        {t: "Put out", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "If we don't _______ our water and energy, we will have a global crisis.",
                    options: [
                        {t: "Conserve", c: true},
                        {t: "Solve", c: false},
                        {t: "Reduce", c: false},
                        {t: "Put down", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The government decided to _______ a new bridge to reduce congestion.",
                    options: [
                        {t: "Build", c: true},
                        {t: "Prioritize", c: false},
                        {t: "Improve", c: false},
                        {t: "Run into", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Solar and wind power are excellent examples of _______ energy.",
                    options: [
                        {t: "Garbage", c: false},
                        {t: "Renewable", c: true},
                        {t: "Housing", c: false},
                        {t: "Polluted", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Too many people living in one small area is called _______.",
                    options: [
                        {t: "Infrastructure", c: false},
                        {t: "Overpopulation", c: true},
                        {t: "Sustainability", c: false},
                        {t: "Green space", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We need more _______ like parks and gardens to help the city breathe.",
                    options: [
                        {t: "Traffic jams", c: false},
                        {t: "Public transport", c: false},
                        {t: "Green spaces", c: true},
                        {t: "Infrastructure", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ is the process of converting waste into reusable material.",
                    options: [
                        {t: "Recycling", c: true},
                        {t: "Pollution", c: false},
                        {t: "Waste Management", c: false},
                        {t: "Overpopulation", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I can't _______ so much smoke and noise in the air anymore!",
                    options: [
                        {t: "Put out", c: false},
                        {t: "Put up with", c: true},
                        {t: "Run into", c: false},
                        {t: "Put away", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We might _______ clean water if we don't stop wasting it now.",
                    options: [
                        {t: "Run out of", c: true},
                        {t: "Run after", c: false},
                        {t: "Put away", c: false},
                        {t: "Put off", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Don't _______ the meeting about the new park; it is very urgent!",
                    options: [
                        {t: "Put on", c: false},
                        {t: "Put off", c: true},
                        {t: "Run away", c: false},
                        {t: "Put out", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I hope I don't _______ my old teacher while I'm walking downtown.",
                    options: [
                        {t: "Run into", c: true},
                        {t: "Run after", c: false},
                        {t: "Put down", c: false},
                        {t: "Run over", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Be careful! That fast car almost _______ that poor cat.",
                    options: [
                        {t: "Ran after", c: false},
                        {t: "Ran over", c: true},
                        {t: "Put out", c: false},
                        {t: "Ran away", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The firefighter worked hard to _______ the fire in the building.",
                    options: [
                        {t: "Put up with", c: false},
                        {t: "Put out", c: true},
                        {t: "Run out of", c: false},
                        {t: "Put off", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Please _______ your recyclables in the correct bin over there.",
                    options: [
                        {t: "Put away", c: true},
                        {t: "Put on", c: false},
                        {t: "Run into", c: false},
                        {t: "Put down", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "It's getting dark; please _______ the lights so we can see the map.",
                    options: [
                        {t: "Put down", c: false},
                        {t: "Put on", c: true},
                        {t: "Run after", c: false},
                        {t: "Put off", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "You should never _______ someone just because they are different.",
                    options: [
                        {t: "Put off", c: false},
                        {t: "Put down", c: true},
                        {t: "Run into", c: false},
                        {t: "Put out", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The birds _______ from the city because of the loud construction noise.",
                    options: [
                        {t: "Ran out of", c: false},
                        {t: "Ran away", c: true},
                        {t: "Put on", c: false},
                        {t: "Put away", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ is the ability to maintain a process without harming the planet.",
                    options: [
                        {t: "Overpopulation", c: false},
                        {t: "Sustainability", c: true},
                        {t: "Infrastructure", c: false},
                        {t: "Congestion", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "When a highway is full of cars and no one can move, it's a _______.",
                    options: [
                        {t: "Traffic jam", c: true},
                        {t: "Public transport", c: false},
                        {t: "Green space", c: false},
                        {t: "Hometown", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Buildings, roads, and power lines are part of a city's _______.",
                    options: [
                        {t: "Waste", c: false},
                        {t: "Sustainability", c: false},
                        {t: "Infrastructure", c: true},
                        {t: "Pollution", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "In a sustainable city, we must _______ people over private cars.",
                    options: [
                        {t: "Solve", c: false},
                        {t: "Prioritize", c: true},
                        {t: "Limit", c: false},
                        {t: "Invest", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ includes anything we throw away that is no longer useful.",
                    options: [
                        {t: "Housing", c: false},
                        {t: "Infrastructure", c: false},
                        {t: "Waste", c: true},
                        {t: "Opportunity", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The town or city where you were born and grew up is your _______.",
                    options: [
                        {t: "Urban Area", c: false},
                        {t: "Hometown", c: true},
                        {t: "Park", c: false},
                        {t: "Sustainable city", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "To make a city better, we need to _______ more money in education.",
                    options: [
                        {t: "Waste", c: false},
                        {t: "Limit", c: false},
                        {t: "Invest", c: true},
                        {t: "Admit", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "To make something smaller in amount, degree, or size is to _______.",
                    options: [
                        {t: "Reduce", c: true},
                        {t: "Build", c: false},
                        {t: "Develop", c: false},
                        {t: "Improve", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The city provides _______ like buses and trains for the public.",
                    options: [
                        {t: "Public transport", c: true},
                        {t: "Waste management", c: false},
                        {t: "Green spaces", c: false},
                        {t: "Affordable housing", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A detailed proposal for achieving a goal in the city is a _______.",
                    options: [
                        {t: "Challenge", c: false},
                        {t: "Opportunity", c: false},
                        {t: "Plan", c: true},
                        {t: "Problem", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "To find an answer or a solution to an urban problem is to _______ it.",
                    options: [
                        {t: "Limit", c: false},
                        {t: "Solve", c: true},
                        {t: "Conserve", c: false},
                        {t: "Improve", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "To _______ means to agree that something is true, even if it's difficult.",
                    options: [
                        {t: "Admit", c: true},
                        {t: "Solve", c: false},
                        {t: "Plan", c: false},
                        {t: "Build", c: false}
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
                    title: "Talking about the Future",
                    audio: "TTS: We use different structures for the future. Use WILL for predictions or instant decisions. Use BE GOING TO for prior plans or evidence. Use Present Continuous for fixed arrangements. Use Simple Present for official schedules.",
                    explanation: "English uses different structures for the future depending on certainty and context.<br><br><span style='color:#0077b6; font-style:italic;'>(O inglês usa estruturas diferentes para o futuro, dependendo da certeza e do contexto.)</span>",
                    samples: [
                        { en: "I think cities will save the planet.", pt: "<span style='color:#0077b6'>Eu acho que as cidades salvarão o planeta. (WILL - Prediction)</span>" },
                        { en: "We are going to develop a new park.", pt: "<span style='color:#0077b6'>Nós vamos desenvolver um novo parque. (BE GOING TO - Plan)</span>" },
                        { en: "They are meeting the mayor tomorrow.", pt: "<span style='color:#0077b6'>Eles vão se encontrar com o prefeito amanhã. (Pres. Cont. - Arrangement)</span>" },
                        { en: "The bus leaves at 8 PM.", pt: "<span style='color:#0077b6'>O ônibus parte às 20h. (Simple Pres. - Schedule)</span>" }
                    ]
                },
                {
                    title: "Modals: Ability & Permission",
                    audio: "TTS: CAN and COULD are used for ability. CAN is for the present and COULD is for the past. MAY and CAN are used for permission. MAY is formal and CAN is informal.",
                    explanation: "Modal verbs add specific meaning like ability or permission to the main verb.<br><br><span style='color:#0077b6; font-style:italic;'>(Verbos modais adicionam um sentido específico, como habilidade ou permissão, ao verbo principal.)</span>",
                    samples: [
                        { en: "We can cycle to school.", pt: "<span style='color:#0077b6'>Nós podemos pedalar para a escola. (Present Ability)</span>" },
                        { en: "He could swim when he was five.", pt: "<span style='color:#0077b6'>Ele conseguia nadar quando tinha cinco anos. (Past Ability)</span>" },
                        { en: "May I suggest a solution?", pt: "<span style='color:#0077b6'>Posso sugerir uma solução? (Formal Permission)</span>" },
                        { en: "Can I park here?", pt: "<span style='color:#0077b6'>Posso estacionar aqui? (Informal Permission)</span>" }
                    ]
                },
                {
                    title: "Modals: Obligation & Advice",
                    audio: "TTS: MUST and HAVE TO express obligation. MUSTN'T is for prohibition. SHOULD and OUGHT TO are for advice. WOULD RATHER expresses preference.",
                    explanation: "These modals help express how necessary or recommended an action is.<br><br><span style='color:#0077b6; font-style:italic;'>(Estes modais ajudam a expressar o quão necessária ou recomendada uma ação é.)</span>",
                    samples: [
                        { en: "We must reduce waste.", pt: "<span style='color:#0077b6'>Nós devemos reduzir o lixo. (Strong Obligation)</span>" },
                        { en: "You mustn't throw garbage on the floor.", pt: "<span style='color:#0077b6'>Você não deve jogar lixo no chão. (Prohibition)</span>" },
                        { en: "Cities should invest in green spaces.", pt: "<span style='color:#0077b6'>As cidades deveriam investir em espaços verdes. (Advice)</span>" },
                        { en: "I would rather live in a sustainable city.", pt: "<span style='color:#0077b6'>Eu preferiria morar em uma cidade sustentável. (Preference)</span>" }
                    ]
                },
                {
                    title: "Semi-modals & Special Cases",
                    audio: "TTS: USED TO is for past habits. NEEDN'T means something is not required. HAD BETTER is for strong advice with a warning. SHALL is for formal suggestions with I or WE.",
                    explanation: "These structures behave like modals in specific situations.<br><br><span style='color:#0077b6; font-style:italic;'>(Estas estruturas se comportam como modais em situações específicas.)</span>",
                    samples: [
                        { en: "People used to produce less waste.", pt: "<span style='color:#0077b6'>As pessoas costumavam produzir menos lixo. (Past Habit)</span>" },
                        { en: "You needn't drive; we can walk.", pt: "<span style='color:#0077b6'>Você não precisa dirigir; podemos caminhar. (No Necessity)</span>" },
                        { en: "You had better improve your recycling habits.", pt: "<span style='color:#0077b6'>É melhor você melhorar seus hábitos de reciclagem. (Strong Advice)</span>" },
                        { en: "Shall we solve this challenge today?", pt: "<span style='color:#0077b6'>Vamos resolver este desafio hoje? (Suggestion)</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Talking about the Future",
                    audio: "audio/em1-2-4/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Albert, the public transport seminar starts at 2 PM. Are you ready?", 
                            pt: "<span style='color:#0077b6'>Albert, o seminário de transporte público começa às 14h. Você está pronto?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Oh! I am meeting my tutor at that time. I will call him and change the time right now!", 
                            pt: "<span style='color:#0077b6'>Oh! Vou me encontrar com meu tutor a essa hora. Vou ligar para ele e mudar o horário agora mesmo!</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Modals for the Environment",
                    audio: "audio/em1-2-4/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Mrs. Canales", 
                            text: "Students, we must conserve water. You should turn off the tap while brushing your teeth.", 
                            pt: "<span style='color:#0077b6'>Alunos, devemos conservar a água. Vocês deveriam fechar a torneira enquanto escovam os dentes.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "I agree, teacher. We could also build a rainwater collection system for the garden!", 
                            pt: "<span style='color:#0077b6'>Concordo, professora. Poderíamos também construir um sistema de coleta de água da chuva para o jardim!</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Strong Advice and Past Habits",
                    audio: "audio/em1-2-4/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "People used to ignore air pollution, but now it's a big challenge.", 
                            pt: "<span style='color:#0077b6'>As pessoas costumavam ignorar a poluição do ar, mas agora é um grande desafio.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Yes, and the air is bad today. You had better put on a mask if you go outside.", 
                            pt: "<span style='color:#0077b6'>Sim, e o ar está ruim hoje. É melhor você colocar uma máscara se for lá fora.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Practice (Expanded to 30 Grammar Questions)
            grammarDrills: [
                {
                    type: "mcq",
                    q: "(Schedule) The next seminar on sustainable cities _______ at 10 AM tomorrow.",
                    options: [
                        {t: "is starting", c: false},
                        {t: "will start", c: false},
                        {t: "starts", c: true},
                        {t: "starting", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Evidence) Look at those solar panels! The factory _______ generate its own power soon.",
                    options: [
                        {t: "is going to", c: true},
                        {t: "will", c: false},
                        {t: "leaves", c: false},
                        {t: "shall", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Fixed Arrangement) I _______ the mayor at 3 PM to discuss the new park.",
                    options: [
                        {t: "will meet", c: false},
                        {t: "am meeting", c: true},
                        {t: "meet", c: false},
                        {t: "meeting", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Spontaneous) The traffic is terrible! I _______ cycle to work instead.",
                    options: [
                        {t: "am going to", c: false},
                        {t: "will", c: true},
                        {t: "cycling", c: false},
                        {t: "shall", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Prohibition) You _______ throw plastic in the regular garbage bin.",
                    options: [
                        {t: "shouldn't", c: false},
                        {t: "mustn't", c: true},
                        {t: "needn't", c: false},
                        {t: "would rather not", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Polite Permission) _______ I ask a question about the new infrastructure plan?",
                    options: [
                        {t: "Must", c: false},
                        {t: "May", c: true},
                        {t: "Should", c: false},
                        {t: "Had better", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Advice) You _______ try to use public transport more often.",
                    options: [
                        {t: "must", c: false},
                        {t: "ought to", c: true},
                        {t: "can", c: false},
                        {t: "would rather", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Preference) I _______ live in a small town than a crowded city.",
                    options: [
                        {t: "would rather", c: true},
                        {t: "had better", c: false},
                        {t: "should", c: false},
                        {t: "must", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Urgent Advice) You _______ hurry! The last train leaves in five minutes.",
                    options: [
                        {t: "used to", c: false},
                        {t: "had better", c: true},
                        {t: "needn't", c: false},
                        {t: "shall", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Past Habit) People _______ rely on coal for energy, but now we have solar power.",
                    options: [
                        {t: "used to", c: true},
                        {t: "shall", c: false},
                        {t: "had better", c: false},
                        {t: "are starting", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(No Necessity) You _______ bring a car; the library is within walking distance.",
                    options: [
                        {t: "mustn't", c: false},
                        {t: "needn't", c: true},
                        {t: "ought not", c: false},
                        {t: "had better", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Suggestion) _______ we start our research on renewable energy today?",
                    options: [
                        {t: "Must", c: false},
                        {t: "Shall", c: true},
                        {t: "Need", c: false},
                        {t: "Ought", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Past Ability) He _______ cycle 50 kilometers in a day when he was younger.",
                    options: [
                        {t: "can", c: false},
                        {t: "could", c: true},
                        {t: "may", c: false},
                        {t: "might", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Possibility) The air quality _______ improve if we plant more trees.",
                    options: [
                        {t: "might", c: true},
                        {t: "must", c: false},
                        {t: "shall", c: false},
                        {t: "ought", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(External Rule) Drivers _______ follow the speed limit in urban areas.",
                    options: [
                        {t: "has to", c: false},
                        {t: "have to", c: true},
                        {t: "might", c: false},
                        {t: "would rather", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "In the future, I think cities _______ be much cleaner than today.",
                    options: [
                        {t: "will", c: true},
                        {t: "are", c: false},
                        {t: "starts", c: false},
                        {t: "used to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The city _______ a new recycling program next January.",
                    options: [
                        {t: "starts", c: true},
                        {t: "will started", c: false},
                        {t: "was starting", c: false},
                        {t: "used to start", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Celine _______ her project tonight because it's due tomorrow.",
                    options: [
                        {t: "finishes", c: false},
                        {t: "is finishing", c: true},
                        {t: "finish", c: false},
                        {t: "shall finish", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I _______ to have a bike when I lived in Australia.",
                    options: [
                        {t: "did use", c: false},
                        {t: "used", c: true},
                        {t: "use", c: false},
                        {t: "was using", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We _______ not put off the decision any longer.",
                    options: [
                        {t: "had better", c: true},
                        {t: "used to", c: false},
                        {t: "shall", c: false},
                        {t: "would rather", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "You _______ use your tablet during the exam; it's prohibited.",
                    options: [
                        {t: "needn't", c: false},
                        {t: "mustn't", c: true},
                        {t: "ought not", c: false},
                        {t: "shouldn't", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I _______ walk than take a bus in this traffic jam.",
                    options: [
                        {t: "would rather", c: true},
                        {t: "had better", c: false},
                        {t: "should", c: false},
                        {t: "can", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ we help you with the waste management project?",
                    options: [
                        {t: "Must", c: false},
                        {t: "Shall", c: true},
                        {t: "Need", c: false},
                        {t: "May", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The town center _______ much more crowded these days.",
                    options: [
                        {t: "is getting", c: true},
                        {t: "will gets", c: false},
                        {t: "starts", c: false},
                        {t: "used to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "You _______ pay for the public transport today; it's a holiday.",
                    options: [
                        {t: "mustn't", c: false},
                        {t: "needn't", c: true},
                        {t: "ought not", c: false},
                        {t: "should", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I _______ to believe that pollution was impossible to solve.",
                    options: [
                        {t: "use", c: false},
                        {t: "used", c: true},
                        {t: "am using", c: false},
                        {t: "will have", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The expert _______ arrive at any moment now.",
                    options: [
                        {t: "could", c: true},
                        {t: "mustn't", c: false},
                        {t: "used to", c: false},
                        {t: "ought", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We _______ prioritize green spaces in our new plan.",
                    options: [
                        {t: "should", c: true},
                        {t: "may", c: false},
                        {t: "could", c: false},
                        {t: "needn't", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I _______ study for the urban planning test tonight.",
                    options: [
                        {t: "have to", c: true},
                        {t: "starts", c: false},
                        {t: "will to", c: false},
                        {t: "shall to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The mayor _______ a new bridge downtown next month.",
                    options: [
                        {t: "is building", c: true},
                        {t: "builds", c: false},
                        {t: "will to build", c: false},
                        {t: "built", c: false}
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
                    text: "We must do something about the traffic jam!<br><small style='color:#0077b6'>(Nós devemos fazer algo sobre o congestionamento!)</small>", 
                    audio: "TTS: We must do something about the traffic jam!", 
                    arrow: "↘" 
                },
                { 
                    text: "They are going to build a new metro line.<br><small style='color:#0077b6'>(Eles vão construir uma nova linha de metrô.)</small>", 
                    audio: "TTS: They are going to build a new metro line.", 
                    arrow: "↘" 
                },
                { 
                    text: "Could I use this recycling bin?<br><small style='color:#0077b6'>(Eu poderia usar esta lixeira de reciclagem?)</small>", 
                    audio: "TTS: Could I use this recycling bin?", 
                    arrow: "↗" 
                },
                { 
                    text: "You had better wear a mask today.<br><small style='color:#0077b6'>(Seria melhor você usar uma máscara hoje.)</small>", 
                    audio: "TTS: You had better wear a mask today.", 
                    arrow: "↘" 
                },
                { 
                    text: "Shall we start the cleanup project?<br><small style='color:#0077b6'>(Vamos começar o projeto de limpeza?)</small>", 
                    audio: "TTS: Shall we start the cleanup project?", 
                    arrow: "↗" 
                },
                { 
                    text: "I would rather cycle than sit in traffic.<br><small style='color:#0077b6'>(Eu preferiria pedalar do que ficar sentado no trânsito.)</small>", 
                    audio: "TTS: I would rather cycle than sit in traffic.", 
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
                    instruction: "Listen to Albert describing his project and type the missing words.",
                    audio: "TTS: For my project, I decided that the government is going to build more green spaces. We must reduce pollution because the air quality is terrible. In my vision, the last bus leaves at midnight, so everyone can use public transport.",
                    text: "For my project, I decided that the government [is going to] build more [green spaces]. We [must] reduce [pollution] because the air quality is terrible. In my vision, the last bus [leaves] at midnight, so everyone can use [public transport]."
                },
                // Drill 2: Dropdown (MP3) - Combined context to ensure brackets are present
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue between Celine and a City Planner and choose the correct options.",
                    audio: "audio/em1-2-4/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: Excuse me, [will | shall | must] we discuss the new [renewable energy | waste | housing] plant?", a: "shall" },
                        { q: "Planner: Yes! We [are starting | start | started] the construction next month.", a: "are starting" },
                        { q: "Celine: That's great! People [used to | use to | are using] rely on coal, but now we need better options.", a: "used to" }
                    ]
                },
                // Drill 3: Audio Choice (MP3)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the logical response.",
                    audio: "audio/em1-2-4/step5_drill3.mp3", // Question: Are you going to run out of materials for the park?
                    options: [
                        { t: "Yes, I ran into my teacher.", c: false },
                        { t: "No, we have plenty of bricks and wood.", c: true },
                        { t: "I would rather cycle.", c: false },
                        { t: "You mustn't put off the meeting.", c: false }
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
                    title: "Narration: The Big Change",
                    audio: "TTS: Julia and Marcos were looking at the crowded streets of their urban area. Julia said they must find a way to improve the infrastructure because the overpopulation is a huge challenge. Marcos agreed and mentioned that the city is starting a recycling program next week. He thinks it will help reduce the amount of garbage in the parks. Julia suggested that they should also invest in renewable energy. They both believe they are going to make a difference if they work together. || audio/em1-2-4/p6_text1.mp3",
                    body: "Julia and Marcos were looking at the crowded streets of their urban area. Julia said they must find a way to improve the infrastructure because the overpopulation is a huge challenge. Marcos agreed and mentioned that the city is starting a recycling program next week. He thinks it will help reduce the amount of garbage in the parks. Julia suggested that they should also invest in renewable energy. They both believe they are going to make a difference if they work together.",
                    questions: [
                        { 
                            q: "What is starting next week?", 
                            options: [ 
                                {t: "A construction project.", c: false}, 
                                {t: "A recycling program.", c: true}, 
                                {t: "A new school year.", c: false},
                                {t: "A marathon.", c: false}
                            ] 
                        },
                        { 
                            q: "What does Marcos think the program will do?", 
                            options: [ 
                                {t: "Increase the overpopulation.", c: false}, 
                                {t: "Build a new infrastructure.", c: false}, 
                                {t: "Reduce the amount of garbage.", c: true},
                                {t: "Buy more trucks.", c: false}
                            ] 
                        },
                        { 
                            q: "What is Julia's suggestion for the city?", 
                            options: [ 
                                {t: "Investing in renewable energy.", c: true}, 
                                {t: "Buying more cars.", c: false}, 
                                {t: "Closing the parks.", c: false},
                                {t: "Building more malls.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: Planning the Future",
                    audio: "audio/em1-2-4/p6_text2.mp3",
                    body: "<b>Ana:</b> Bruno, look at this map! The city is going to limit cars in the center next month.<br><b>Bruno:</b> Really? I would rather walk anyway. The traffic jams are getting worse.<br><b>Ana:</b> Me too. But we need to improve the public transport. My bus usually arrives late.<br><b>Bruno:</b> True. We had better write a letter to the mayor. We ought to demand more green spaces too.<br><b>Ana:</b> Shall we meet at the library to start the letter?<br><b>Bruno:</b> Perfect! I am meeting my brother there at 3 PM, so we can work after that.",
                    questions: [
                        { 
                            q: "What is the city going to do next month?", 
                            options: [ 
                                {t: "Build a new library.", c: false}, 
                                {t: "Limit cars in the center.", c: true}, 
                                {t: "Increase the bus price.", c: false},
                                {t: "Paint the roads.", c: false}
                            ] 
                        },
                        { 
                            q: "What is Bruno's preference for moving around?", 
                            options: [ 
                                {t: "Driving his car.", c: false}, 
                                {t: "Walking.", c: true}, 
                                {t: "Taking a taxi.", c: false},
                                {t: "Cycling fast.", c: false}
                            ] 
                        },
                        { 
                            q: "Where are Ana and Bruno going to meet?", 
                            options: [ 
                                {t: "At the city center.", c: false}, 
                                {t: "At the mayor's office.", c: false}, 
                                {t: "At the library.", c: true},
                                {t: "At the bus stop.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: Ms. Oliveira's Vision",
                    audio: "TTS: Ms. Oliveira is an urban planner with a big dream. She believes every urban area can become a sustainable city. In her vision, people won't use gas cars; instead, they will use vehicles that run on renewable energy. She thinks we must prioritize sustainability to save the planet. Her new project starts next January. She knows she might run into challenges with the budget, but she says we mustn't put off solving the climate crisis. || audio/em1-2-4/p6_text3.mp3",
                    body: "Ms. Oliveira is an urban planner with a big dream. She believes every urban area can become a sustainable city. In her vision, people won't use gas cars; instead, they will use vehicles that run on renewable energy. She thinks we must prioritize sustainability to save the planet. Her new project starts next January. She knows she might run into challenges with the budget, but she says we mustn't put off solving the climate crisis.",
                    questions: [
                        { 
                            q: "What does Ms. Oliveira believe about urban areas?", 
                            options: [ 
                                {t: "They are impossible to change.", c: false}, 
                                {t: "They can become sustainable cities.", c: true}, 
                                {t: "They should have more parking lots.", c: false},
                                {t: "They are already perfect.", c: false}
                            ] 
                        },
                        { 
                            q: "What kind of energy will vehicles use in her vision?", 
                            options: [ 
                                {t: "Fossil fuels.", c: false}, 
                                {t: "Renewable energy.", c: true}, 
                                {t: "Coal.", c: false},
                                {t: "No energy.", c: false}
                            ] 
                        },
                        { 
                            q: "When does her new project start?", 
                            options: [ 
                                {t: "This month.", c: false}, 
                                {t: "Next week.", c: false}, 
                                {t: "Next January.", c: true},
                                {t: "In two years.", c: false}
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
                // Drill 1: Multiple Choice (MCQ) - Expanded to 4 alternatives
                {
                    type: "mcq",
                    instruction: "Choose the correct alternative to complete the sentence.<br><small style='color:#0077b6'>(Escolha a alternativa correta para completar a frase.)</small><br>Be careful! That car is moving fast and might _______ you over!",
                    q: "Be careful! That car is moving fast and might _______ you over!",
                    options: [
                        {t: "Put", c: false},
                        {t: "Run", c: true},
                        {t: "Solve", c: false},
                        {t: "Build", c: false}
                    ]
                },
                {
                    type: "mcq",
                    instruction: "We _______ conserve our natural resources. It's our duty.",
                    options: [
                        {t: "must", c: true},
                        {t: "needn't", c: false},
                        {t: "used to", c: false},
                        {t: "shall", c: false}
                    ]
                },

                // Drill 2: Word Order
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "meet / We / at / are / 5 PM / the / at / going / to / park / .",
                    correct: "We are going to meet at the park at 5 PM ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "rather / would / cycle / I / drive / than / .",
                    correct: "I would rather cycle than drive ."
                },

                // Drill 3: Clickable Error (Find the Mistake)
                {
                    type: "clickable-error",
                    instruction: "Identify and correct the mistake in the sentence.<br><small style='color:#0077b6'>(Identifique e corrija o erro na frase.)</small>",
                    sentence: "The train [is](error:) [leaving](error:leaves) at 8 AM every day.",
                },
                {
                    type: "clickable-error",
                    instruction: "Identify and correct the mistake in the sentence.<br><small style='color:#0077b6'>(Identifique e corrija o erro na frase.)</small>",
                    sentence: "You had better [to](error:) put away your toys.",
                },

                // Drill 4: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that doesn't belong to the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        {t: "Pollution", c: false},
                        {t: "Sustainability", c: true}, // Solution vs Problems
                        {t: "Waste", c: false},
                        {t: "Traffic Jam", c: false}
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that doesn't belong to the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        {t: "Solar power", c: false},
                        {t: "Wind power", c: false},
                        {t: "Coal", c: true}, // Non-renewable vs Renewables
                        {t: "Renewable energy", c: false}
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Imagine you are a mayor planning your future city. Write a short paragraph (4-5 sentences) about what you are going to change.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Imagine que você é um prefeito planejando sua cidade futura. Escreva um pequeno parágrafo (4-5 frases) sobre o que você vai mudar.)</span></small>",
            example: "\"My city is going to become a [sustainable city]. We [will] [build] more [cycle lanes] because we must [reduce] [pollution]. I believe the [infrastructure] will be much better in five years!\"<br><br><small><span style='color:#0077b6'>(\"Minha cidade vai se tornar uma [cidade sustentável]. Nós [vamos] [construir] mais [ciclovias] porque devemos [reduzir] a [poluição]. Eu acredito que a [infraestrutura] será muito melhor em cinco anos!\")</span></small>",
            prompts: [
                "Use at least one future form (Will, Going to, etc.). <br><small><span style='color:#0077b6'>(Use pelo menos uma forma de futuro).</span></small>",
                "Use at least one modal verb (Must, Should, etc.). <br><small><span style='color:#0077b6'>(Use pelo menos um verbo modal).</span></small>",
                "Use at least two urban vocabulary words. <br><small><span style='color:#0077b6'>(Use pelo menos duas palavras do vocabulário urbano).</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Exhaustive Part 1: Areas 1 & 2)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // Area 1: Urban Verbs
                { term: "Develop", definition: "To grow or cause to grow and become more mature or advanced.", defTrans: "Desenvolver", example: "We need to develop new technologies for the future.", audioFront: "TTS: Develop", audioBack: "TTS: We need to develop new technologies for the future." },
                { term: "Improve", definition: "To make something better than it was before.", defTrans: "Melhorar", example: "The city must improve the bus system.", audioFront: "TTS: Improve", audioBack: "TTS: The city must improve the bus system." },
                { term: "Reduce", definition: "To make something smaller or less in amount, degree, or size.", defTrans: "Reduzir", example: "You should reduce your energy consumption.", audioFront: "TTS: Reduce", audioBack: "TTS: You should reduce your energy consumption." },
                { term: "Solve", definition: "To find an answer to, or a way of dealing with, a problem.", defTrans: "Resolver", example: "How can we solve the water problem?", audioFront: "TTS: Solve", audioBack: "TTS: How can we solve the water problem?" },
                { term: "Plan", definition: "A detailed proposal for doing or achieving something.", defTrans: "Planejar", example: "They are going to plan the new park tomorrow.", audioFront: "TTS: Plan", audioBack: "TTS: They are going to plan the new park tomorrow." },
                { term: "Build", definition: "To construct something by putting parts together.", defTrans: "Construir", example: "The government will build a new metro line.", audioFront: "TTS: Build", audioBack: "TTS: The government will build a new metro line." },
                { term: "Limit", definition: "A point or level beyond which something may not extend.", defTrans: "Limitar", example: "We must limit the number of private cars.", audioFront: "TTS: Limit", audioBack: "TTS: We must limit the number of private cars." },
                { term: "Invest", definition: "To put money or effort into something to make it better.", defTrans: "Investir", example: "It's important to invest in education.", audioFront: "TTS: Invest", audioBack: "TTS: It's important to invest in education." },
                { term: "Conserve", definition: "To protect something from harm or destruction.", defTrans: "Conservar", example: "We had better conserve our natural resources.", audioFront: "TTS: Conserve", audioBack: "TTS: We had better conserve our natural resources." },
                { term: "Prioritize", definition: "To treat something as being more important than others.", defTrans: "Priorizar", example: "Sustainable cities prioritize people over cars.", audioFront: "TTS: Prioritize", audioBack: "TTS: Sustainable cities prioritize people over cars." },

                // Area 2: Urban Life & Sustainability
                { term: "Big City", definition: "A large urban center with many people and buildings.", defTrans: "Cidade grande", example: "Tokyo is a very big city.", audioFront: "TTS: Big City", audioBack: "TTS: Tokyo is a very big city." },
                { term: "Challenge", definition: "A task or situation that tests someone's abilities.", defTrans: "Desafio", example: "Traffic is a major challenge in São Paulo.", audioFront: "TTS: Challenge", audioBack: "TTS: Traffic is a major challenge in São Paulo." },
                { term: "Opportunity", definition: "A set of circumstances that makes it possible to do something.", defTrans: "Oportunidade", example: "Moving to the city is a big opportunity.", audioFront: "TTS: Opportunity", audioBack: "TTS: Moving to the city is a big opportunity." },
                { term: "Pollution", definition: "The presence of harmful substances in the environment.", defTrans: "Poluição", example: "Air pollution is bad for our health.", audioFront: "TTS: Pollution", audioBack: "TTS: Air pollution is bad for our health." },
                { term: "Traffic Jam", definition: "A situation where many vehicles are stuck and cannot move.", defTrans: "Congestionamento", example: "I was late because of a traffic jam.", audioFront: "TTS: Traffic Jam", audioBack: "TTS: I was late because of a traffic jam." },
                { term: "Public Transport", definition: "Buses, trains, and subways used by the general public.", defTrans: "Transporte público", example: "I use public transport to go to school.", audioFront: "TTS: Public Transport", audioBack: "TTS: I use public transport to go to school." },
                { term: "Waste / Garbage", definition: "Material that is not wanted or no longer useful.", defTrans: "Lixo / Resíduo", example: "Don't throw waste on the street.", audioFront: "TTS: Waste or Garbage", audioBack: "TTS: Don't throw waste on the street." },
                { term: "Recycling", definition: "The process of converting waste into reusable material.", defTrans: "Reciclagem", example: "Recycling plastic is essential for the planet.", audioFront: "TTS: Recycling", audioBack: "TTS: Recycling plastic is essential for the planet." },
                { term: "Housing", definition: "Houses and apartments considered collectively.", defTrans: "Moradia / Habitação", example: "The city needs more affordable housing.", audioFront: "TTS: Housing", audioBack: "TTS: The city needs more affordable housing." },
                { term: "Overpopulation", definition: "When there are too many people living in one area.", defTrans: "Superpopulação", example: "Overpopulation causes many urban issues.", audioFront: "TTS: Overpopulation", audioBack: "TTS: Overpopulation causes many urban issues." },
                { term: "Green Spaces", definition: "Areas of grass or trees set apart for recreation.", defTrans: "Espaços verdes", example: "We need more green spaces to breathe better.", audioFront: "TTS: Green Spaces", audioBack: "TTS: We need more green spaces to breathe better." },
                { term: "Renewable Energy", definition: "Energy from a source that is not depleted when used.", defTrans: "Energia renovável", example: "Solar power is a type of renewable energy.", audioFront: "TTS: Renewable Energy", audioBack: "TTS: Solar power is a type of renewable energy." },
                { term: "Sustainability", definition: "The ability to maintain a process without harming the planet.", defTrans: "Sustentabilidade", example: "Sustainability is the key to our future.", audioFront: "TTS: Sustainability", audioBack: "TTS: Sustainability is the key to our future." },
                { term: "Infrastructure", definition: "The basic physical structures needed for a city.", defTrans: "Infraestrutura", example: "Our infrastructure needs a total update.", audioFront: "TTS: Infrastructure", audioBack: "TTS: Our infrastructure needs a total update." },

                // Area 3: Phrasal Verbs (RUN)
                { term: "Run out of", definition: "To have no more of something left.", defTrans: "Ficar sem / Esgotar", example: "The city might run out of clean water.", audioFront: "TTS: Run out of", audioBack: "TTS: The city might run out of clean water." },
                { term: "Run into", definition: "To meet someone unexpectedly on the street.", defTrans: "Encontrar por acaso", example: "I ran into my old teacher downtown.", audioFront: "TTS: Run into", audioBack: "TTS: I ran into my old teacher downtown." },
                { term: "Run over", definition: "To hit someone or something with a vehicle.", defTrans: "Atropelar", example: "Be careful, or a car could run you over!", audioFront: "TTS: Run over", audioBack: "TTS: Be careful, or a car could run you over!" },
                { term: "Run after", definition: "To chase someone or something.", defTrans: "Correr atrás / Perseguir", example: "The police ran after the thief.", audioFront: "TTS: Run after", audioBack: "TTS: The police ran after the thief." },
                { term: "Run away", definition: "To leave a place quickly to escape danger.", defTrans: "Fugir (de)", example: "Many people run away from noisy cities.", audioFront: "TTS: Run away", audioBack: "TTS: Many people run away from noisy cities." },

                // Area 4: Phrasal Verbs (PUT)
                { term: "Put up with", definition: "To accept an unpleasant situation without complaining.", defTrans: "Tolerar / Aguentar", example: "We mustn't put up with so much pollution.", audioFront: "TTS: Put up with", audioBack: "TTS: We mustn't put up with so much pollution." },
                { term: "Put off", definition: "To postpone or delay doing something.", defTrans: "Adiar", example: "They put off the meeting about the new park.", audioFront: "TTS: Put off", audioBack: "TTS: They put off the meeting about the new park." },
                { term: "Put out", definition: "To stop a fire or light from burning.", defTrans: "Apagar (fogo/luz)", example: "Firefighters put out the fire quickly.", audioFront: "TTS: Put out", audioBack: "TTS: Firefighters put out the fire quickly." },
                { term: "Put away", definition: "To return something to its correct place.", defTrans: "Guardar (lugar certo)", example: "You should put away your recyclables properly.", audioFront: "TTS: Put away", audioBack: "TTS: You should put away your recyclables properly." },
                { term: "Put on", definition: "To place clothing on the body or turn on a device.", defTrans: "Vestir / Ligar", example: "He put on a jacket because it was cold.", audioFront: "TTS: Put on", audioBack: "TTS: He put on a jacket because it was cold." },
                { term: "Put down", definition: "To place something down or to disparage someone.", defTrans: "Colocar no chão / Insultar", example: "Just put the map down on the table.", audioFront: "TTS: Put down", audioBack: "TTS: Just put the map down on the table." },

                // Grammar Summary (Future & Modals)
                { term: "Will", definition: "Future for predictions based on opinion or instant decisions.", defTrans: "Futuro (Previsão/Instante)", example: "I think cities will become greener.", audioFront: "TTS: Will", audioBack: "TTS: I think cities will become greener." },
                { term: "Be Going To", definition: "Future for intended plans or evidence in the present.", defTrans: "Futuro (Intenção/Evidência)", example: "We are going to start a community garden.", audioFront: "TTS: Be Going To", audioBack: "TTS: We are going to start a community garden." },
                { term: "Must / Mustn't", definition: "Strong obligation or something strictly forbidden.", defTrans: "Obrigação / Proibição", example: "We must reduce pollution. You mustn't throw trash.", audioFront: "TTS: Must and Mustn't", audioBack: "TTS: We must reduce pollution. You mustn't throw trash." },
                { term: "Should / Ought to", definition: "Used to give recommendations or advice.", defTrans: "Conselho / Recomendação", example: "You should use public transport more often.", audioFront: "TTS: Should and Ought to", audioBack: "TTS: You should use public transport more often." },
                { term: "Had Better", definition: "Urgent advice with a potential warning.", defTrans: "Seria melhor / É bom (Aviso)", example: "You had better wear a mask today.", audioFront: "TTS: Had Better", audioBack: "TTS: You had better wear a mask today." },
                { term: "Would Rather", definition: "Used to express a specific preference between options.", defTrans: "Preferiria", example: "I would rather cycle than sit in traffic.", audioFront: "TTS: Would Rather", audioBack: "TTS: I would rather cycle than sit in traffic." },
                { term: "Used to", definition: "Describes a past habit or state that is no longer true.", defTrans: "Costumava", example: "People used to produce less waste.", audioFront: "TTS: Used to", audioBack: "TTS: People used to produce less waste." },
                { term: "Shall", definition: "Formal way to make a suggestion or an offer with I or WE.", defTrans: "Sugestão / Oferta formal", example: "Shall we discuss waste management solutions now?", audioFront: "TTS: Shall", audioBack: "TTS: Shall we discuss waste management solutions now?" }
            ]
        }

    ],

    // ======================================================
    // GLOSSARY (Exhaustive Part 1: Topics 1, 2, and 3)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT & CORE URBAN ---
        { 
            topic: "Context", 
            term: "hometown", 
            definition: "The town or city where a person was born or grew up.", 
            translation: "Cidade natal" 
        },
        { 
            topic: "Context", 
            term: "urban-area", 
            definition: "A geographical area constituting a city or town.", 
            translation: "Área urbana" 
        },
        { 
            topic: "Context", 
            term: "sustainable-city", 
            definition: "A city designed to maintain processes without harming the environment.", 
            translation: "Cidade sustentável" 
        },
        { 
            topic: "Context", 
            term: "infrastructure", 
            definition: "The basic physical structures like buildings and roads needed for a city.", 
            translation: "Infraestrutura" 
        },
        { 
            topic: "Context", 
            term: "public-transport", 
            definition: "Buses, trains, and subways used by the general public.", 
            translation: "Transporte público" 
        },
        { 
            topic: "Context", 
            term: "starting", 
            definition: "Use of Present Continuous to talk about a fixed arrangement in the future.", 
            translation: "Está começando / Vai começar" 
        },
        { 
            topic: "Context", 
            term: "arrives", 
            definition: "Use of Simple Present to talk about scheduled events in the future.", 
            translation: "Chega" 
        },
        {
            topic: "Context",
            term: "should",
            definition: "A modal verb used to give advice or recommendations.",
            translation: "Deveria"
        },
        {
            topic: "Context",
            term: "may",
            definition: "A modal verb used to express possibility or permission.",
            translation: "Pode (possibilidade/permissão)"
        },
        {
            topic: "Context",
            term: "could",
            definition: "A modal verb used to express possibility or past ability.",
            translation: "Poderia"
        },
        { 
            topic: "Context", 
            term: "build", 
            definition: "To construct or create something like a building or a system.", 
            translation: "Construir" 
        },
        { 
            topic: "Context", 
            term: "big-city", 
            definition: "A large urban center with many people and buildings.", 
            translation: "Cidade grande" 
        },
        { 
            topic: "Context", 
            term: "invest", 
            definition: "To put money, effort, or time into something to make it better.", 
            translation: "Investir" 
        },
        {
            topic: "Context",
            term: "plan",
            definition: "A detailed proposal for doing or achieving something.",
            translation: "Planejar"
        },
        { 
            topic: "Context", 
            term: "green-spaces", 
            definition: "Areas of grass or trees set apart for recreation in a city.", 
            translation: "Espaços verdes" 
        },

        // --- TOPIC 2: SUSTAINABILITY & PROBLEMS ---
        { 
            topic: "Sustainability", 
            term: "overpopulation", 
            definition: "A condition when there are too many people living in one area.", 
            translation: "Superpopulação" 
        },
        { 
            topic: "Sustainability", 
            term: "pollution", 
            definition: "Harmful substances in the air, water, or ground.", 
            translation: "Poluição" 
        },
        { 
            topic: "Sustainability", 
            term: "traffic-jam", 
            definition: "A situation where many vehicles are stuck and cannot move.", 
            translation: "Congestionamento" 
        },
        { 
            topic: "Sustainability", 
            term: "renewable-energy", 
            definition: "Energy from a source that is not depleted when used (e.g. solar).", 
            translation: "Energia renovável" 
        },
        { 
            topic: "Sustainability", 
            term: "affordable-housing", 
            definition: "Homes that are reasonably priced for low-income people.", 
            translation: "Moradia acessível" 
        },
        { 
            topic: "Sustainability", 
            term: "waste-management", 
            definition: "The collection, transport, and disposal of garbage.", 
            translation: "Gerenciamento de resíduos" 
        },
        { 
            topic: "Sustainability", 
            term: "recycling", 
            definition: "The process of converting waste into reusable material.", 
            translation: "Reciclagem" 
        },
        { 
            topic: "Sustainability", 
            term: "congestion", 
            definition: "The state of being too full of traffic.", 
            translation: "Congestionamento / Trânsito" 
        },
        { 
            topic: "Sustainability", 
            term: "make-a-difference", 
            definition: "To have a positive effect on a situation.", 
            translation: "Fazer a diferença" 
        },

        // --- TOPIC 3: PHRASAL VERBS ---
        { 
            topic: "Phrasal Verbs", 
            term: "run-out-of", 
            definition: "To have no more of something left.", 
            translation: "Ficar sem / Esgotar" 
        },
        { 
            topic: "Phrasal Verbs", 
            term: "run-into", 
            definition: "To meet someone unexpectedly on the street.", 
            translation: "Encontrar por acaso" 
        },
        { 
            topic: "Phrasal Verbs", 
            term: "run-over", 
            definition: "To hit someone or something with a vehicle.", 
            translation: "Atropelar" 
        },
        { 
            topic: "Phrasal Verbs", 
            term: "run-after", 
            definition: "To chase someone or something.", 
            translation: "Correr atrás" 
        },
        { 
            topic: "Phrasal Verbs", 
            term: "run-away", 
            definition: "To leave a place quickly to escape danger.", 
            translation: "Fugir" 
        },
        { 
            topic: "Phrasal Verbs", 
            term: "put-up-with", 
            definition: "To accept an unpleasant situation without complaining.", 
            translation: "Tolerar / Aguentar" 
        },
        { 
            topic: "Phrasal Verbs", 
            term: "put-off", 
            definition: "To postpone or delay doing something.", 
            translation: "Adiar" 
        },
        { 
            topic: "Phrasal Verbs", 
            term: "put-out", 
            definition: "To stop a fire or light from burning.", 
            translation: "Apagar" 
        },
        { 
            topic: "Phrasal Verbs", 
            term: "put-away", 
            definition: "To return something to its correct place.", 
            translation: "Guardar" 
        },
        { 
            topic: "Phrasal Verbs", 
            term: "put-on", 
            definition: "To place clothing on the body or turn on a device.", 
            translation: "Vestir / Ligar" 
        },
        { 
            topic: "Phrasal Verbs", 
            term: "put-down", 
            definition: "To place something down or to disparage someone.", 
            translation: "Colocar no chão / Insultar" 
        },

// --- TOPIC 4: GRAMMAR ---
        { 
            topic: "Grammar", 
            term: "future", 
            definition: "Grammatical structures used to describe actions that haven't happened yet.", 
            translation: "Futuro" 
        },
        {   
            topic: "Grammar",
            term: "will", 
            definition: "Used for predictions based on opinion or instant decisions.", 
            translation: "Futuro (Previsão/Instante)"
        },
        {
            topic: "Grammar",
            term: "simple-present", 
            definition: "Used for scheduled events in the future, especially with timetables.", 
            translation: "Presente simples (No futuro, apenas para eventos programados)"
        },
        { 
            topic: "Grammar", 
            term: "be-going-to", 
            definition: "Used for intentions or plans decided before speaking, or predictions with evidence.", 
            translation: "Vai / Vou (Futuro planejado)" 
        },
        { 
            topic: "Grammar", 
            term: "modals", 
            definition: "Helping verbs that express necessity, ability, permission, or possibility.", 
            translation: "Verbos modais" 
        },
        { 
            topic: "Grammar", 
            term: "semi-modals", 
            definition: "Verbs like 'used to' or 'need' that act similarly to modal verbs.", 
            translation: "Semimodais" 
        },
        { 
            topic: "Grammar", 
            term: "phrasal-verb", 
            definition: "A verb combined with an adverb or a preposition that creates a new meaning.", 
            translation: "Verbo frasal" 
        },
        { 
            topic: "Grammar", 
            term: "used-to", 
            definition: "Describes a past habit or state that is no longer true.", 
            translation: "Costumava" 
        },
        { 
            topic: "Grammar", 
            term: "needn-t", 
            definition: "Expressing that something is not necessary or not required.", 
            translation: "Não precisa" 
        },
        { 
            topic: "Grammar", 
            term: "had-better", 
            definition: "A strong way to give advice with a warning about consequences.", 
            translation: "Seria melhor / É bom" 
        },
        { 
            topic: "Grammar", 
            term: "shall", 
            definition: "A formal way to make a suggestion or an offer with I or WE.", 
            translation: "Vamos? / Deveríamos?" 
        },
        { 
            topic: "Grammar", 
            term: "mustn-t", 
            definition: "Used for things that are strictly forbidden or prohibited.", 
            translation: "Não deve / Não pode" 
        },

        // --- TOPIC 5: CONCEPTS & DEFINITIONS ---
        { 
            topic: "Concepts", 
            term: "challenge", 
            definition: "A problem or difficulty related to living or building in a city.", 
            translation: "Desafio" 
        },
        { 
            topic: "Concepts", 
            term: "solve", 
            definition: "To find an answer or a solution to a problem.", 
            translation: "Resolver" 
        },
        { 
            topic: "Concepts", 
            term: "improve", 
            definition: "To make something better than it was before.", 
            translation: "Melhorar" 
        },
        { 
            topic: "Concepts", 
            term: "would-rather", 
            definition: "Used to express a specific preference between different options.", 
            translation: "Preferiria" 
        },
        { 
            topic: "Concepts", 
            term: "limit", 
            definition: "A point or level beyond which something may not extend.", 
            translation: "Limitar" 
        },
        { 
            topic: "Concepts", 
            term: "develop", 
            definition: "To grow or cause something to become more advanced.", 
            translation: "Desenvolver" 
        },
        { 
            topic: "Concepts", 
            term: "park", 
            definition: "A large public garden used for recreation in a city.", 
            translation: "Parque" 
        },
        { 
            topic: "Concepts", 
            term: "admit", 
            definition: "To agree that something is true, often reluctantly.", 
            translation: "Admitir" 
        },
        { 
            topic: "Concepts", 
            term: "opportunity", 
            definition: "A set of circumstances that makes it possible to do something.", 
            translation: "Oportunidade" 
        },
        { 
            topic: "Concepts", 
            term: "waste", 
            definition: "Material that is not wanted; the unusable remains of something.", 
            translation: "Lixo / Resíduo" 
        },
        { 
            topic: "Concepts", 
            term: "garbage", 
            definition: "Wasted or spoiled food and other refuse.", 
            translation: "Lixo" 
        }
    ]
});