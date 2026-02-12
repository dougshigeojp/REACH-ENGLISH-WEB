/**
 * REACH English - LESSON DATA 6-2-3
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "6-2-3", 
    grade: "6th Grade",       
    bimester: "2",   
    chapter: "3",    
    chapterTitle: "My Sweet Home", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "In this lesson, you will learn to:<br><br>• Identify and name different rooms in a house.<br>• Name common colors.<br>• List objects found in a bedroom.<br>• Name parts of a house (wall, roof, etc.).<br>• Use \"There is\" and \"There are\" to describe what exists.<br>• Use indefinite articles \"a\" and \"an\".<br>• Use singular and plural nouns.",
            welcome: "Hello, future architect! It's Mr. D!<br><br>Welcome to \"My Sweet Home\"! Today, we are taking a grand tour. You will become an expert at describing where you live. From the cozy bedroom to the busy kitchen, we'll learn the names of rooms, furniture, and colors. We will also master the magic words \"There is\" and \"There are\" to describe everything we see. Let's open the door and step inside!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Identify and name different rooms in a house. Name common colors. List objects found in a bedroom. Name parts of a house. Use There is and There are to describe what exists. Use indefinite articles a and an. Use singular and plural nouns.",
                welcome: "TTS: Hello, future architect! It's Mr. D! Welcome to My Sweet Home! Today, we are taking a grand tour. You will become an expert at describing where you live. From the cozy bedroom to the busy kitchen, we'll learn the names of rooms, furniture, and colors. We will also master the magic words There is and There are to describe everything we see. Let's open the door and step inside!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of a door opening and footsteps echoing. Mrs. Canales is welcoming Albert to her home for a study group visit.", 
            contextAudio: "audio/6-2-3/step1.mp3",
            dialogue: [
                { 
                    speaker: "Mrs. Canales", 
                    text: "Welcome to my house, Albert! Make yourself at home." 
                },
                { 
                    speaker: "Albert", 
                    text: "Wow, this is the [living room](tooltip:living-room)! It is very big. The [walls](tooltip:wall) are [yellow](tooltip:yellow)." 
                },
                { 
                    speaker: "Mrs. Canales", 
                    text: "Yes. There is a [green](tooltip:green) [sofa](tooltip:sofa) and a [TV](tooltip:tv)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Is there a [garden](tooltip:garden)?" 
                },
                { 
                    speaker: "Mrs. Canales", 
                    text: "Yes, there is. It is behind the [kitchen](tooltip:kitchen)." 
                },
                { 
                    speaker: "Albert", 
                    text: "And how many [bedrooms](tooltip:bedroom) are there?" 
                },
                { 
                    speaker: "Mrs. Canales", 
                    text: "There are three [bedrooms](tooltip:bedroom) upstairs." 
                },
                { 
                    speaker: "Albert", 
                    text: "Cool! My favorite room is the [kitchen](tooltip:kitchen). I love food!" 
                }
            ]
        },

        // // ======================================================
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
                    title: "Verbs",
                    audio: "TTS: To be. Have. Sleep. Make. Find. See. Say. Explore. Protect. Eat. Live. Study. Play. Talk. Laugh.",
                    items: [
                        { term: "To be", trans: "ser / estar" },
                        { term: "Have", trans: "ter" },
                        { term: "Sleep", trans: "dormir" },
                        { term: "Make", trans: "fazer" },
                        { term: "Find", trans: "encontrar" },
                        { term: "See", trans: "ver" },
                        { term: "Say", trans: "dizer" },
                        { term: "Explore", trans: "explorar" },
                        { term: "Protect", trans: "proteger" },
                        { term: "Eat", trans: "comer" },
                        { term: "Live", trans: "viver / morar" },
                        { term: "Study", trans: "estudar" },
                        { term: "Play", trans: "brincar / jogar" },
                        { term: "Talk", trans: "conversar" },
                        { term: "Laugh", trans: "rir" }
                    ]
                },
                {
                    title: "Rooms of the House",
                    audio: "TTS: House. Room. Living room. Dining room. Kitchen. Bedroom. Bathroom. Garage. Garden. Yard. Hall. Hallway.",
                    items: [
                        { term: "House", trans: "Casa" },
                        { term: "Room", trans: "Cômodo / Quarto" },
                        { term: "Living room", trans: "Sala de estar" },
                        { term: "Dining room", trans: "Sala de jantar" },
                        { term: "Kitchen", trans: "Cozinha" },
                        { term: "Bedroom", trans: "Quarto (de dormir)" },
                        { term: "Bathroom", trans: "Banheiro" },
                        { term: "Garage", trans: "Garagem" },
                        { term: "Garden / Yard", trans: "Jardim / Quintal" },
                        { term: "Hall / Hallway", trans: "Corredor" }
                    ]
                },
                {
                    title: "Colors",
                    audio: "TTS: Color. Red. Blue. Yellow. Green. Orange. Purple. Brown. Black. White. Gray. Grey. Pink.",
                    items: [
                        { term: "Color", trans: "Cor" },
                        { term: "Red", trans: "Vermelho" },
                        { term: "Blue", trans: "Azul" },
                        { term: "Yellow", trans: "Amarelo" },
                        { term: "Green", trans: "Verde" },
                        { term: "Orange", trans: "Laranja" },
                        { term: "Purple", trans: "Roxo" },
                        { term: "Brown", trans: "Marrom" },
                        { term: "Black", trans: "Preto" },
                        { term: "White", trans: "Branco" },
                        { term: "Gray / Grey", trans: "Cinza" },
                        { term: "Pink", trans: "Rosa" }
                    ]
                },
                {
                    title: "Things in the Bedroom",
                    audio: "TTS: Bed. Pillow. Blanket. Wardrobe. Closet. Desk. Chair. Rug. Carpet. Window. Door. Shelf. Bookshelf. Curtains. Lamp.",
                    items: [
                        { term: "Bed", trans: "Cama" },
                        { term: "Pillow", trans: "Travesseiro" },
                        { term: "Blanket", trans: "Cobertor" },
                        { term: "Wardrobe / Closet", trans: "Guarda-roupa / Armário" },
                        { term: "Desk", trans: "Escrivaninha" },
                        { term: "Chair", trans: "Cadeira" },
                        { term: "Rug / Carpet", trans: "Tapete" },
                        { term: "Window", trans: "Janela" },
                        { term: "Door", trans: "Porta" },
                        { term: "Shelf / Bookshelf", trans: "Prateleira / Estante" },
                        { term: "Curtains", trans: "Cortinas" },
                        { term: "Lamp", trans: "Luminária / Abajur" }
                    ]
                },
                {
                    title: "Parts of a House",
                    audio: "TTS: Wall. Floor. Ceiling. Roof. Stairs. Balcony. Chimney.",
                    items: [
                        { term: "Wall", trans: "Parede" },
                        { term: "Floor", trans: "Chão / Piso" },
                        { term: "Ceiling", trans: "Teto (interno)" },
                        { term: "Roof", trans: "Telhado" },
                        { term: "Stairs", trans: "Escadas" },
                        { term: "Balcony", trans: "Sacada / Varanda" },
                        { term: "Chimney", trans: "Chaminé" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Welcome to my house! Make yourself at home. This is the living room. Where is the bathroom? Is there a...? Are there...? How many rooms are there? What color is the...? There is a big window. My favorite room is...",
                    items: [
                        { term: "Welcome to my house!", trans: "Bem-vindo(a) à minha casa!" },
                        { term: "Make yourself at home.", trans: "Sinta-se em casa." },
                        { term: "This is the living room.", trans: "Esta é a sala de estar." },
                        { term: "Where is the bathroom?", trans: "Onde é o banheiro?" },
                        { term: "Is there a...?", trans: "Tem um(a)...?" },
                        { term: "Are there...?", trans: "Tem...? (plural)" },
                        { term: "How many rooms are there?", trans: "Quantos cômodos tem?" },
                        { term: "What color is the...?", trans: "Qual é a cor do...?" },
                        { term: "There is a big window.", trans: "Tem uma janela grande." },
                        { term: "My favorite room is...", trans: "Meu cômodo favorito é..." }
                    ]
                }
            ], // This closes the areas array

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Verbs",
                    audio: "TTS: The house is big. I have a desk in my room. I sleep in my bed. We make dinner in the kitchen. Can you find the bathroom? I see a lamp. Say hello to mom. Let's explore the garden. The roof protects us from rain. We eat in the dining room. They live in an apartment. I study at my desk. Kids play in the yard. We talk in the living room. We laugh at the funny movie.",
                    items: [
                        { term: "To be", sent: "The house is big.", trans: "<span style='color:#0077b6'>A casa é grande.</span>" },
                        { term: "Have", sent: "I have a desk in my room.", trans: "<span style='color:#0077b6'>Eu tenho uma escrivaninha no meu quarto.</span>" },
                        { term: "Sleep", sent: "I sleep in my bed.", trans: "<span style='color:#0077b6'>Eu durmo na minha cama.</span>" },
                        { term: "Make", sent: "We make dinner in the kitchen.", trans: "<span style='color:#0077b6'>Nós fazemos o jantar na cozinha.</span>" },
                        { term: "Find", sent: "Can you find the bathroom?", trans: "<span style='color:#0077b6'>Você consegue encontrar o banheiro?</span>" },
                        { term: "See", sent: "I see a lamp.", trans: "<span style='color:#0077b6'>Eu vejo uma luminária.</span>" },
                        { term: "Say", sent: "Say 'hello' to mom.", trans: "<span style='color:#0077b6'>Diga 'olá' para a mamãe.</span>" },
                        { term: "Explore", sent: "Let's explore the garden.", trans: "<span style='color:#0077b6'>Vamos explorar o jardim.</span>" },
                        { term: "Protect", sent: "The roof protects us from rain.", trans: "<span style='color:#0077b6'>O telhado nos protege da chuva.</span>" },
                        { term: "Eat", sent: "We eat in the dining room.", trans: "<span style='color:#0077b6'>Nós comemos na sala de jantar.</span>" },
                        { term: "Live", sent: "They live in an apartment.", trans: "<span style='color:#0077b6'>Eles moram em um apartamento.</span>" },
                        { term: "Study", sent: "I study at my desk.", trans: "<span style='color:#0077b6'>Eu estudo na minha escrivaninha.</span>" },
                        { term: "Play", sent: "Kids play in the yard.", trans: "<span style='color:#0077b6'>Crianças brincam no quintal.</span>" },
                        { term: "Talk", sent: "We talk in the living room.", trans: "<span style='color:#0077b6'>Nós conversamos na sala de estar.</span>" },
                        { term: "Laugh", sent: "We laugh at the funny movie.", trans: "<span style='color:#0077b6'>Nós rimos do filme engraçado.</span>" }
                    ]
                },
                {
                    title: "Rooms of the House",
                    audio: "TTS: This is my house. My room is small. The TV is in the living room. Dinner is in the dining room. The fridge is in the kitchen. My bed is in the bedroom. Wash your hands in the bathroom. The car is in the garage. The flowers are in the garden. Walk down the hall.",
                    items: [
                        { term: "House", sent: "This is my house.", trans: "<span style='color:#0077b6'>Esta é minha casa.</span>" },
                        { term: "Room", sent: "My room is small.", trans: "<span style='color:#0077b6'>Meu quarto é pequeno.</span>" },
                        { term: "Living room", sent: "The TV is in the living room.", trans: "<span style='color:#0077b6'>A TV está na sala de estar.</span>" },
                        { term: "Dining room", sent: "Dinner is in the dining room.", trans: "<span style='color:#0077b6'>O jantar é na sala de jantar.</span>" },
                        { term: "Kitchen", sent: "The fridge is in the kitchen.", trans: "<span style='color:#0077b6'>A geladeira está na cozinha.</span>" },
                        { term: "Bedroom", sent: "My bed is in the bedroom.", trans: "<span style='color:#0077b6'>Minha cama está no quarto.</span>" },
                        { term: "Bathroom", sent: "Wash your hands in the bathroom.", trans: "<span style='color:#0077b6'>Lave suas mãos no banheiro.</span>" },
                        { term: "Garage", sent: "The car is in the garage.", trans: "<span style='color:#0077b6'>O carro está na garagem.</span>" },
                        { term: "Garden", sent: "The flowers are in the garden.", trans: "<span style='color:#0077b6'>As flores estão no jardim.</span>" },
                        { term: "Hall", sent: "Walk down the hall.", trans: "<span style='color:#0077b6'>Caminhe pelo corredor.</span>" }
                    ]
                },
                {
                    title: "Colors",
                    audio: "TTS: What is your favorite color? The apple is red. The sky is blue. The sun is yellow. The grass is green. The orange is orange. The flower is purple. The door is brown. The cat is black. The wall is white. The cloud is gray. The pig is pink.",
                    items: [
                        { term: "Color", sent: "What is your favorite color?", trans: "<span style='color:#0077b6'>Qual é sua cor favorita?</span>" },
                        { term: "Red", sent: "The apple is red.", trans: "<span style='color:#0077b6'>A maçã é vermelha.</span>" },
                        { term: "Blue", sent: "The sky is blue.", trans: "<span style='color:#0077b6'>O céu é azul.</span>" },
                        { term: "Yellow", sent: "The sun is yellow.", trans: "<span style='color:#0077b6'>O sol é amarelo.</span>" },
                        { term: "Green", sent: "The grass is green.", trans: "<span style='color:#0077b6'>A grama é verde.</span>" },
                        { term: "Orange", sent: "The orange is orange.", trans: "<span style='color:#0077b6'>A laranja é laranja.</span>" },
                        { term: "Purple", sent: "The flower is purple.", trans: "<span style='color:#0077b6'>A flor é roxa.</span>" },
                        { term: "Brown", sent: "The door is brown.", trans: "<span style='color:#0077b6'>A porta é marrom.</span>" },
                        { term: "Black", sent: "The cat is black.", trans: "<span style='color:#0077b6'>O gato é preto.</span>" },
                        { term: "White", sent: "The wall is white.", trans: "<span style='color:#0077b6'>A parede é branca.</span>" },
                        { term: "Gray", sent: "The cloud is gray.", trans: "<span style='color:#0077b6'>A nuvem é cinza.</span>" },
                        { term: "Pink", sent: "The pig is pink.", trans: "<span style='color:#0077b6'>O porco é rosa.</span>" }
                    ]
                },
                {
                    title: "Things in the Bedroom",
                    audio: "TTS: The bed is soft. I sleep on a pillow. The blanket is warm. My clothes are in the wardrobe. My computer is on the desk. Sit on the chair. The rug is on the floor. Open the window. Close the door. The books are on the shelf. The curtains are blue. Turn on the lamp.",
                    items: [
                        { term: "Bed", sent: "The bed is soft.", trans: "<span style='color:#0077b6'>A cama é macia.</span>" },
                        { term: "Pillow", sent: "I sleep on a pillow.", trans: "<span style='color:#0077b6'>Eu durmo em um travesseiro.</span>" },
                        { term: "Blanket", sent: "The blanket is warm.", trans: "<span style='color:#0077b6'>O cobertor é quente.</span>" },
                        { term: "Wardrobe", sent: "My clothes are in the wardrobe.", trans: "<span style='color:#0077b6'>Minhas roupas estão no guarda-roupa.</span>" },
                        { term: "Desk", sent: "My computer is on the desk.", trans: "<span style='color:#0077b6'>Meu computador está na escrivaninha.</span>" },
                        { term: "Chair", sent: "Sit on the chair.", trans: "<span style='color:#0077b6'>Sente-se na cadeira.</span>" },
                        { term: "Rug", sent: "The rug is on the floor.", trans: "<span style='color:#0077b6'>O tapete está no chão.</span>" },
                        { term: "Window", sent: "Open the window.", trans: "<span style='color:#0077b6'>Abra a janela.</span>" },
                        { term: "Door", sent: "Close the door.", trans: "<span style='color:#0077b6'>Feche a porta.</span>" },
                        { term: "Shelf", sent: "The books are on the shelf.", trans: "<span style='color:#0077b6'>Os livros estão na prateleira.</span>" },
                        { term: "Curtains", sent: "The curtains are blue.", trans: "<span style='color:#0077b6'>As cortinas são azuis.</span>" },
                        { term: "Lamp", sent: "Turn on the lamp.", trans: "<span style='color:#0077b6'>Ligue a luminária.</span>" }
                    ]
                },
                {
                    title: "Parts of a House",
                    audio: "TTS: The wall is white. The floor is clean. The ceiling is high. The roof is red. Go up the stairs. She is on the balcony. Smoke comes from the chimney.",
                    items: [
                        { term: "Wall", sent: "The wall is white.", trans: "<span style='color:#0077b6'>A parede é branca.</span>" },
                        { term: "Floor", sent: "The floor is clean.", trans: "<span style='color:#0077b6'>O chão está limpo.</span>" },
                        { term: "Ceiling", sent: "The ceiling is high.", trans: "<span style='color:#0077b6'>O teto é alto.</span>" },
                        { term: "Roof", sent: "The roof is red.", trans: "<span style='color:#0077b6'>O telhado é vermelho.</span>" },
                        { term: "Stairs", sent: "Go up the stairs.", trans: "<span style='color:#0077b6'>Suba as escadas.</span>" },
                        { term: "Balcony", sent: "She is on the balcony.", trans: "<span style='color:#0077b6'>Ela está na sacada.</span>" },
                        { term: "Chimney", sent: "Smoke comes from the chimney.", trans: "<span style='color:#0077b6'>Fumaça sai da chaminé.</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Welcome to my house! Thank you. Please, make yourself at home. This is the living room. It has a TV. Where is the bathroom? It's upstairs. Is there a garage? Yes, there is. Are there two beds? No, there aren't. How many rooms are there? There are five. What color is the door? It's blue. There is a big window in my room. My favorite room is my bedroom.",
                    items: [
                        { term: "Welcome...", sent: "'Welcome to my house!' 'Thank you.'", trans: "<span style='color:#0077b6'>'Bem-vindo à minha casa!' 'Obrigado.'</span>" },
                        { term: "Make yourself...", sent: "Please, make yourself at home.", trans: "<span style='color:#0077b6'>Por favor, sinta-se em casa.</span>" },
                        { term: "This is...", sent: "This is the living room. It has a TV.", trans: "<span style='color:#0077b6'>Esta é a sala de estar. Tem uma TV.</span>" },
                        { term: "Where is...", sent: "'Where is the bathroom?' 'It's upstairs.'", trans: "<span style='color:#0077b6'>'Onde é o banheiro?' 'É lá em cima.'</span>" },
                        { term: "Is there...", sent: "'Is there a garage?' 'Yes, there is.'", trans: "<span style='color:#0077b6'>'Tem garagem?' 'Sim, tem.'</span>" },
                        { term: "Are there...", sent: "'Are there two beds?' 'No, there aren't.'", trans: "<span style='color:#0077b6'>'Tem duas camas?' 'Não, não tem.'</span>" },
                        { term: "How many...", sent: "'How many rooms are there?' 'There are five.'", trans: "<span style='color:#0077b6'>'Quantos cômodos tem?' 'Tem cinco.'</span>" },
                        { term: "What color...", sent: "'What color is the door?' 'It's blue.'", trans: "<span style='color:#0077b6'>'Qual é a cor da porta?' 'É azul.'</span>" },
                        { term: "There is a...", sent: "There is a big window in my room.", trans: "<span style='color:#0077b6'>Tem uma janela grande no meu quarto.</span>" },
                        { term: "My favorite...", sent: "My favorite room is my bedroom.", trans: "<span style='color:#0077b6'>Meu cômodo favorito é meu quarto.</span>" }
                    ]
                }
            ],

            // 2C: Practice MCQ Drills
            drills: [
                {
                    type: "mcq",
                    q: "Choose the correct translation for 'Sleep':",
                    options: [
                        { t: "Comer", c: false },
                        { t: "Dormir", c: true },
                        { t: "Fazer", c: false },
                        { t: "Ver", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I _____ dinner in the kitchen.'",
                    options: [
                        { t: "sleep", c: false },
                        { t: "cook / make", c: true },
                        { t: "fly", c: false },
                        { t: "bed", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Where do you sleep?",
                    options: [
                        { t: "Kitchen", c: false },
                        { t: "Bedroom", c: true },
                        { t: "Garage", c: false },
                        { t: "Garden", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Where do you shower?",
                    options: [
                        { t: "Living room", c: false },
                        { t: "Bathroom", c: true },
                        { t: "Hall", c: false },
                        { t: "Dining room", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Where is the car?",
                    options: [
                        { t: "Garage", c: true },
                        { t: "Bedroom", c: false },
                        { t: "Attic", c: false },
                        { t: "Roof", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What color is a banana?",
                    options: [
                        { t: "Red", c: false },
                        { t: "Blue", c: false },
                        { t: "Yellow", c: true },
                        { t: "Purple", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What color is the sky?",
                    options: [
                        { t: "Green", c: false },
                        { t: "Blue", c: true },
                        { t: "Orange", c: false },
                        { t: "Brown", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which is a dark color?",
                    options: [
                        { t: "White", c: false },
                        { t: "Pink", c: false },
                        { t: "Black", c: true },
                        { t: "Yellow", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You put your head on this when you sleep:",
                    options: [
                        { t: "Desk", c: false },
                        { t: "Pillow", c: true },
                        { t: "Lamp", c: false },
                        { t: "Window", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You keep your clothes in this:",
                    options: [
                        { t: "Shelf", c: false },
                        { t: "Wardrobe", c: true },
                        { t: "Rug", c: false },
                        { t: "Curtain", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You turn this on to see in the dark:",
                    options: [
                        { t: "Chair", c: false },
                        { t: "Bed", c: false },
                        { t: "Lamp", c: true },
                        { t: "Door", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "It covers the top of the house (outside):",
                    options: [
                        { t: "Floor", c: false },
                        { t: "Wall", c: false },
                        { t: "Roof", c: true },
                        { t: "Stairs", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You walk on this:",
                    options: [
                        { t: "Ceiling", c: false },
                        { t: "Floor", c: true },
                        { t: "Chimney", c: false },
                        { t: "Window", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: '_______ to my house!'",
                    options: [
                        { t: "Hello", c: false },
                        { t: "Welcome", c: true },
                        { t: "Goodbye", c: false },
                        { t: "Thanks", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: '_______ yourself at home.'",
                    options: [
                        { t: "Do", c: false },
                        { t: "Make", c: true },
                        { t: "Have", c: false },
                        { t: "Be", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: '_______ is the kitchen? It's over there.'",
                    options: [
                        { t: "What", c: false },
                        { t: "Who", c: false },
                        { t: "Where", c: true },
                        { t: "When", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: '_______ many chairs are there?'",
                    options: [
                        { t: "Who", c: false },
                        { t: "What", c: false },
                        { t: "How", c: true },
                        { t: "Where", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'Is _______ a TV in the room?'",
                    options: [
                        { t: "there", c: true },
                        { t: "their", c: false },
                        { t: "they", c: false },
                        { t: "this", c: false }
                    ]
                },
                // --- Expanded Exercises ---
                {
                    type: "mcq",
                    q: "I eat lunch with my family in the _______.",
                    options: [
                        { t: "Bathroom", c: false },
                        { t: "Dining room", c: true },
                        { t: "Garage", c: false },
                        { t: "Attic", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What color is the grass?",
                    options: [
                        { t: "Pink", c: false },
                        { t: "Green", c: true },
                        { t: "Blue", c: false },
                        { t: "Black", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You go to the second floor using the _______.",
                    options: [
                        { t: "Window", c: false },
                        { t: "Stairs", c: true },
                        { t: "Chimney", c: false },
                        { t: "Wall", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "I look through the _______ to see the garden.",
                    options: [
                        { t: "Window", c: true },
                        { t: "Door", c: false },
                        { t: "Wall", c: false },
                        { t: "Floor", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The flowers are in the _______ behind the house.",
                    options: [
                        { t: "Kitchen", c: false },
                        { t: "Garage", c: false },
                        { t: "Garden", c: true },
                        { t: "Bathroom", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Smoke comes out of the _______.",
                    options: [
                        { t: "Roof", c: false },
                        { t: "Balcony", c: false },
                        { t: "Chimney", c: true },
                        { t: "Floor", c: false }
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
                    title: "There is / There are (Affirmative)",
                    audio: "TTS: We use There is and There are to say that something exists. There is a bed in the room. There are two chairs.",
                    explanation: "We use 'There is' and 'There are' to say that something exists in a specific place. It is similar to 'Tem' or 'Há' in Portuguese.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos 'There is' e 'There are' para dizer que algo existe em um lugar específico. É semelhante a 'Tem' ou 'Há' em português.)</span>",
                    samples: [
                        { en: "There is + Singular noun (one thing).", pt: "<span style='color:#0077b6'>(Para uma coisa).</span>" },
                        { en: "There are + Plural noun (two or more things).", pt: "<span style='color:#0077b6'>(Para duas ou mais coisas).</span>" },
                        { en: "There is a bed in the room.", pt: "<span style='color:#0077b6'>Tem uma cama no quarto.</span>" },
                        { en: "There are two chairs.", pt: "<span style='color:#0077b6'>Tem duas cadeiras.</span>" }
                    ]
                },
                {
                    title: "Negative & Interrogative",
                    audio: "TTS: To make negative sentences, we add not. There isn't a TV. To ask questions, we change the order. Are there windows? Is there a garage?",
                    explanation: "To make negative sentences, we add 'not'. To ask questions, we change the order.<br><br><span style='color:#0077b6; font-style:italic;'>(Para frases negativas, adicionamos 'not'. Para perguntar, mudamos a ordem.)</span>",
                    samples: [
                        { en: "Negative: There is not (isn't) / There are not (aren't).", pt: "<span style='color:#0077b6'>(Negativo: Não tem / Não há.)</span>" },
                        { en: "Interrogative: Is there...? / Are there...?", pt: "<span style='color:#0077b6'>(Interrogativo: Tem...? / Há...?)</span>" },
                        { en: "There isn't a TV.", pt: "<span style='color:#0077b6'>Não tem uma TV.</span>" },
                        { en: "Are there windows?", pt: "<span style='color:#0077b6'>Tem janelas?</span>" }
                    ]
                },
                {
                    title: "Indefinite Articles (a / an)",
                    audio: "TTS: We use a and an before singular nouns. A house. An old house. A bed. An orange rug.",
                    explanation: "We use 'a' and 'an' before singular nouns. They mean 'um' or 'uma'. The choice depends on the sound of the next word.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos 'a' e 'an' antes de substantivos singulares. Eles significam 'um' ou 'uma'. A escolha depende do som da próxima palavra.)</span>",
                    samples: [
                        { en: "a + consonant sound (a house, a bed).", pt: "<span style='color:#0077b6'>(Antes de som de consoante).</span>" },
                        { en: "an + vowel sound (an old house, an orange rug).", pt: "<span style='color:#0077b6'>(Antes de som de vogal).</span>" }
                    ]
                },
                {
                    title: "Plurals (Regular)",
                    audio: "TTS: To talk about more than one thing, we usually add s. Book, books. Box, boxes. Family, families.",
                    explanation: "To talk about more than one thing, we usually add -s. There are some spelling rules.<br><br><span style='color:#0077b6; font-style:italic;'>(Para falar de mais de uma coisa, geralmente adicionamos -s. Existem algumas regras de ortografia.)</span>",
                    samples: [
                        { en: "General: Add -s (book -> books).", pt: "<span style='color:#0077b6'>(Geral: Adicione -s).</span>" },
                        { en: "Ends in -ch, -sh, -s, -x, -o: Add -es (box -> boxes).", pt: "<span style='color:#0077b6'>(Terminados em -ch, -sh, -s, -x, -o: Adicione -es).</span>" },
                        { en: "Consonant + y: Remove -y and add -ies (family -> families).", pt: "<span style='color:#0077b6'>(Consoante + y: Remova o -y e adicione -ies).</span>" }
                    ]
                },
                {
                    title: "Plurals (Irregular)",
                    audio: "TTS: Some words change completely in the plural. Child, children. Person, people. Man, men. Woman, women. Foot, feet. Tooth, teeth.",
                    explanation: "Some words change completely in the plural. You must memorize them!<br><br><span style='color:#0077b6; font-style:italic;'>(Algumas palavras mudam completamente no plural. Você deve memorizá-las!)</span>",
                    samples: [
                        { en: "Child -> Children", pt: "<span style='color:#0077b6'>(Criança -> Crianças)</span>" },
                        { en: "Person -> People", pt: "<span style='color:#0077b6'>(Pessoa -> Pessoas)</span>" },
                        { en: "Tooth -> Teeth", pt: "<span style='color:#0077b6'>(Dente -> Dentes)</span>" },
                        { en: "Foot -> Feet", pt: "<span style='color:#0077b6'>(Pé -> Pés)</span>" }
                    ]
                }
            ],

            // 3B: Natural Examples (Dialogues Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: There is / There are + Articles",
                    audio: "audio/6-2-3/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Is there a TV in the living room?", 
                            pt: "<span style='color:#0077b6'>Tem uma TV na sala de estar?</span>" 
                        },
                        { 
                            speaker: "Mrs. Canales", 
                            text: "Yes, there is. There is a big TV and an armchair.", 
                            pt: "<span style='color:#0077b6'>Sim, tem. Tem uma TV grande e uma poltrona.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Plurals (Regular & Irregular)",
                    audio: "audio/6-2-3/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Mrs. Canales", 
                            text: "Upstairs, there are three bedrooms.", 
                            pt: "<span style='color:#0077b6'>Lá em cima, tem três quartos.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Are there children in the house?", 
                            pt: "<span style='color:#0077b6'>Tem crianças na casa?</span>" 
                        },
                        { 
                            speaker: "Mrs. Canales", 
                            text: "No, there aren't. But there are two men fixing the roof.", 
                            pt: "<span style='color:#0077b6'>Não, não tem. Mas tem dois homens consertando o telhado.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ Drills
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Complete: '_______ a lamp on the desk.'",
                    options: [
                        { t: "There are", c: false },
                        { t: "There is", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: '_______ two beds in the room.'",
                    options: [
                        { t: "There is", c: false },
                        { t: "There aren't", c: false },
                        { t: "There are", c: true },
                        { t: "Is there", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative: 'No, _______ a garage.'",
                    options: [
                        { t: "there aren't", c: false },
                        { t: "there isn't", c: true },
                        { t: "there is", c: false },
                        { t: "there not", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Interrogative: '_______ a pillow on the bed?'",
                    options: [
                        { t: "There is", c: false },
                        { t: "Are there", c: false },
                        { t: "Is there", c: true },
                        { t: "There are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Articles: 'I see _______ orange rug.'",
                    options: [
                        { t: "a", c: false },
                        { t: "an", c: true },
                        { t: "two", c: false },
                        { t: "are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Articles: 'This is _______ nice house.'",
                    options: [
                        { t: "a", c: true },
                        { t: "an", c: false },
                        { t: "one", c: false },
                        { t: "are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct plural for 'Bus':",
                    options: [
                        { t: "Buss", c: false },
                        { t: "Buses", c: true },
                        { t: "Busies", c: false },
                        { t: "Bus", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct plural for 'Baby':",
                    options: [
                        { t: "Babys", c: false },
                        { t: "Babies", c: true },
                        { t: "Babyes", c: false },
                        { t: "Babeis", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Irregular Plurals: 'There are five _______ in the kitchen.'",
                    options: [
                        { t: "childs", c: false },
                        { t: "child", c: false },
                        { t: "children", c: true },
                        { t: "childrens", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Irregular Plurals: 'I brush my _______.'",
                    options: [
                        { t: "tooths", c: false },
                        { t: "teeth", c: true },
                        { t: "toothes", c: false },
                        { t: "teeths", c: false }
                    ]
                },
                // --- Expanded Exercises ---
                {
                    type: "mcq",
                    q: "Complete: 'There _______ many windows in the house.'",
                    options: [
                        { t: "is", c: false },
                        { t: "are", c: true },
                        { t: "am", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Interrogative: '_______ there a sofa in the garden?'",
                    options: [
                        { t: "Is", c: true },
                        { t: "Are", c: false },
                        { t: "There", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative: 'There _______ not any cats in the yard.'",
                    options: [
                        { t: "is", c: false },
                        { t: "are", c: true },
                        { t: "am", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Interrogative: '_______ there two bathrooms upstairs?'",
                    options: [
                        { t: "Is", c: false },
                        { t: "Are", c: true },
                        { t: "Am", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Articles: 'There is _______ armchair in the living room.'",
                    options: [
                        { t: "a", c: false },
                        { t: "an", c: true },
                        { t: "the", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Articles: 'Mrs. Canales has _______ small kitchen.'",
                    options: [
                        { t: "a", c: true },
                        { t: "an", c: false },
                        { t: "some", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Articles: 'Albert sees _______ egg on the table.'",
                    options: [
                        { t: "a", c: false },
                        { t: "an", c: true },
                        { t: "two", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Articles: 'My house has _______ blue door.'",
                    options: [
                        { t: "a", c: true },
                        { t: "an", c: false },
                        { t: "any", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct plural for 'Box':",
                    options: [
                        { t: "Boxs", c: false },
                        { t: "Boxes", c: true },
                        { t: "Boxies", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct plural for 'Man':",
                    options: [
                        { t: "Mans", c: false },
                        { t: "Mens", c: false },
                        { t: "Men", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct plural for 'City':",
                    options: [
                        { t: "Citys", c: false },
                        { t: "Cities", c: true },
                        { t: "Cityes", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct plural for 'Foot':",
                    options: [
                        { t: "Foots", c: false },
                        { t: "Feet", c: true },
                        { t: "Feets", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct plural for 'Person':",
                    options: [
                        { t: "Persons", c: false },
                        { t: "People", c: true },
                        { t: "Peoples", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I have two _______ on my shelf.'",
                    options: [
                        { t: "watch", c: false },
                        { t: "watches", c: true },
                        { t: "watchs", c: false }
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
                    text: "Welcome to my house.<br><small style='color:#0077b6'>(Bem-vindo à minha casa.)</small>", 
                    audio: "TTS: Welcome to my house.", 
                    arrow: "↘" 
                },
                { 
                    text: "There is a big kitchen.<br><small style='color:#0077b6'>(Tem uma cozinha grande.)</small>", 
                    audio: "TTS: There is a big kitchen.", 
                    arrow: "↘" 
                },
                { 
                    text: "Is there a garden?<br><small style='color:#0077b6'>(Tem um jardim?)</small>", 
                    audio: "TTS: Is there a garden?", 
                    arrow: "↗" 
                },
                { 
                    text: "Yes, there is.<br><small style='color:#0077b6'>(Sim, tem.)</small>", 
                    audio: "TTS: Yes, there is.", 
                    arrow: "↘" 
                },
                { 
                    text: "There are two bedrooms upstairs.<br><small style='color:#0077b6'>(Tem dois quartos lá em cima.)</small>", 
                    audio: "TTS: There are two bedrooms upstairs.", 
                    arrow: "↘" 
                },
                { 
                    text: "Make yourself at home.<br><small style='color:#0077b6'>(Sinta-se em casa.)</small>", 
                    audio: "TTS: Make yourself at home.", 
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
                    instruction: "Listen to Albert describing his bedroom. Type the missing words. <br><small style='color:#0077b6'>(Ouça Albert descrevendo seu quarto. Digite as palavras que faltam.)</small>",
                    audio: "TTS: In my bedroom, there is a bed and a desk. The walls are blue. There are two windows.",
                    text: "In my bedroom, there is a [bed] and a [desk]. The walls are [blue]. There are two [windows]."
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation and choose the correct option. <br><small style='color:#0077b6'>(Ouça a conversa e escolha a opção correta.)</small>",
                    audio: "audio/6-2-3/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Albert: Is there a [garage | kitchen]?", 
                            a: "garage" 
                        },
                        { 
                            q: "Mrs. Canales: No, there [is | isn't]. But there is a garden.", 
                            a: "isn't" 
                        },
                        { 
                            q: "Albert: How many [bathrooms | bedrooms] are there?", 
                            a: "bathrooms" 
                        },
                        { 
                            q: "Mrs. Canales: There [is | are] two bathrooms.", 
                            a: "are" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer. <br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta correta.)</small>",
                    audio: "TTS: What is in the living room?",
                    options: [
                        { t: "There is a fridge and a stove.", c: false },
                        { t: "There is a sofa and a TV.", c: true },
                        { t: "There is a bed and a pillow.", c: false },
                        { t: "There is a shower.", c: false }
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
                    title: "Narration: The Blue House",
                    audio: "TTS: The blue house is very beautiful. On the first floor, there is a big living room and a kitchen. The walls in the kitchen are yellow. There isn't a dining room, so people eat in the kitchen. Upstairs, there are three bedrooms and one bathroom. The bathroom is white. Outside, there is a small garden with red flowers. It is a lovely place to live. || audio/6-2-3/p6_text1.mp3",
                    body: "The blue house is very beautiful. On the first floor, there is a big living room and a kitchen. The walls in the kitchen are yellow. There isn't a dining room, so people eat in the kitchen. Upstairs, there are three bedrooms and one bathroom. The bathroom is white. Outside, there is a small garden with red flowers. It is a lovely place to live.",
                    questions: [
                        { 
                            q: "What color is the house?", 
                            options: [ 
                                {t: "Yellow", c: false}, 
                                {t: "Blue", c: true}, 
                                {t: "White", c: false},
                                {t: "Red", c: false}
                            ] 
                        },
                        { 
                            q: "Where do people eat?", 
                            options: [ 
                                {t: "In the dining room", c: false}, 
                                {t: "In the garden", c: false}, 
                                {t: "In the kitchen", c: true},
                                {t: "In the bedroom", c: false}
                            ] 
                        },
                        { 
                            q: "How many bathrooms are there?", 
                            options: [ 
                                {t: "One", c: true}, 
                                {t: "Two", c: false}, 
                                {t: "Three", c: false},
                                {t: "None", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: Where is the cat?",
                    audio: "audio/6-2-3/p6_text2.mp3",
                    body: "<b>Albert:</b> Mrs. Canales, where is your cat?<br><b>Mrs. Canales:</b> I don't know, Albert. Is he in the living room?<br><b>Albert:</b> No, there isn't a cat here. There is only a dog on the rug.<br><b>Mrs. Canales:</b> Look in the kitchen. Maybe he is eating.<br><b>Albert:</b> Ah, yes! There he is. He is under the table.<br><b>Mrs. Canales:</b> Good! He loves that spot.",
                    questions: [
                        { 
                            q: "Who are they looking for?", 
                            options: [ 
                                {t: "A dog", c: false}, 
                                {t: "A bird", c: false}, 
                                {t: "A cat", c: true},
                                {t: "A mouse", c: false}
                            ] 
                        },
                        { 
                            q: "What is on the rug in the living room?", 
                            options: [ 
                                {t: "A cat", c: false}, 
                                {t: "A dog", c: true}, 
                                {t: "A book", c: false},
                                {t: "A lamp", c: false}
                            ] 
                        },
                        { 
                            q: "Where is the cat?", 
                            options: [ 
                                {t: "In the living room", c: false}, 
                                {t: "On the sofa", c: false}, 
                                {t: "Under the table", c: true},
                                {t: "In the garden", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: My Messy Bedroom",
                    audio: "TTS: Hi, I am Lucas. My bedroom is a bit messy today. There is a bed, but there are many clothes on it. There is a desk with a computer, but there are also books on the floor. There isn't a lamp on the desk. There are two windows, but the curtains are closed. I need to clean my room! || audio/6-2-3/p6_text3.mp3",
                    body: "Hi, I am Lucas. My bedroom is a bit messy today. There is a bed, but there are many clothes on it. There is a desk with a computer, but there are also books on the floor. There isn't a lamp on the desk. There are two windows, but the curtains are closed. I need to clean my room!",
                    questions: [
                        { 
                            q: "Where are the clothes?", 
                            options: [ 
                                {t: "In the wardrobe", c: false}, 
                                {t: "On the floor", c: false}, 
                                {t: "On the bed", c: true},
                                {t: "On the desk", c: false}
                            ] 
                        },
                        { 
                            q: "Is there a lamp on the desk?", 
                            options: [ 
                                {t: "Yes, there is.", c: false}, 
                                {t: "No, there isn't.", c: true}
                            ] 
                        },
                        { 
                            q: "What is on the floor?", 
                            options: [ 
                                {t: "Clothes", c: false}, 
                                {t: "Books", c: true}, 
                                {t: "A computer", c: false},
                                {t: "A rug", c: false}
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
                // Drill 1: Categorize (Drag and Drop)
                {
                    type: "categorize",
                    instruction: "Group the words into 'Rooms' or 'Furniture/Objects'. <br><small style='color:#0077b6'>(Agrupe as palavras em 'Cômodos' ou 'Móveis/Objetos'.)</small>",
                    categories: [
                        { id: "rooms", name: "Rooms" },
                        { id: "objects", name: "Furniture/Objects" }
                    ],
                    items: [
                        { text: "Kitchen", catId: "rooms" },
                        { text: "Garage", catId: "rooms" },
                        { text: "Bedroom", catId: "rooms" },
                        { text: "Bathroom", catId: "rooms" },
                        { text: "Sofa", catId: "objects" },
                        { text: "Lamp", catId: "objects" },
                        { text: "Pillow", catId: "objects" },
                        { text: "Table", catId: "objects" }
                    ]
                },
                // Drill 2: Word Order (Unscramble)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order. <br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>",
                    sentence: "is / There / a / living room / sofa / in / the",
                    correct: "There is a sofa in the living room"
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the question.",
                    sentence: "many / are / How / there / chairs / ?",
                    correct: "How many chairs are there ?"
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the sentence.",
                    sentence: "are / There / two / in / windows / house / the",
                    correct: "There are two windows in the house"
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the negative sentence.",
                    sentence: "isn't / a / There / garage",
                    correct: "There isn't a garage"
                },
                // Drill 3: True or False (Logic Check)
                {
                    type: "true-false",
                    instruction: "Read and decide if it is logical (True) or not (False). <br><small style='color:#0077b6'>(Leia e decida se é lógico ou não.)</small>",
                    questions: [
                        { text: "We sleep in the kitchen.", correct: "false" },
                        { text: "There is a shower in the bathroom.", correct: "true" },
                        { text: "The car is in the bedroom.", correct: "false" },
                        { text: "We cook food on the stove.", correct: "true" },
                        { text: "The fridge is in the living room.", correct: "false" },
                        { text: "There are beds in the bedroom.", correct: "true" }
                    ]
                },
                // Drill 4: Multiple Choice (Completion)
                {
                    type: "mcq",
                    q: "There are three _______ in the house.",
                    options: [
                        { t: "child", c: false },
                        { t: "childs", c: false },
                        { t: "children", c: true },
                        { t: "baby", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "I see _______ orange lamp.",
                    options: [
                        { t: "a", c: false },
                        { t: "an", c: true },
                        { t: "two", c: false },
                        { t: "are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Where is the garden? It is _______ the kitchen.",
                    options: [
                        { t: "under", c: false },
                        { t: "inside", c: false },
                        { t: "behind", c: true },
                        { t: "between", c: false }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: My Sweet Home. Now it's your turn! Describe your house or apartment.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Meu Doce Lar. Agora é sua vez! Descreva sua casa ou apartamento.)</span></small>",
            example: "\"I live in an apartment. There are four rooms: a kitchen, a living room, a bathroom, and a bedroom. In my bedroom, there is a bed and a wardrobe. There are many books on the shelf. I like my home!\"<br><br><small><span style='color:#0077b6'>(\"Eu moro em um apartamento. Tem quatro cômodos: uma cozinha, uma sala de estar, um banheiro e um quarto. No meu quarto, tem uma cama e um guarda-roupa. Tem muitos livros na prateleira. Eu gosto da minha casa!\")</span></small>",
            prompts: [
                "Do you live in a house or an apartment? <br><small><span style='color:#0077b6'>(Você mora em uma casa ou em um apartamento?)</span></small>",
                "How many rooms are there? <br><small><span style='color:#0077b6'>(Quantos cômodos tem?)</span></small>",
                "What is in your bedroom? (Use \"There is...\" and \"There are...\"). <br><small><span style='color:#0077b6'>(O que tem no seu quarto? Use \"There is...\" e \"There are...\").</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Verbs, Rooms, and Colors)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Verbs ---
                { 
                    term: "To be", 
                    definition: "To exist, occur, or take place.", 
                    defTrans: "Ser / Estar",
                    example: "The house is big.", 
                    exTrans: "A casa é grande.",
                    audioFront: "TTS: To be",
                    audioBack: "TTS: The house is big." 
                },
                { 
                    term: "Have", 
                    definition: "To possess, own, or hold.", 
                    defTrans: "Ter",
                    example: "I have a desk in my room.", 
                    exTrans: "Eu tenho uma escrivaninha no meu quarto.",
                    audioFront: "TTS: Have",
                    audioBack: "TTS: I have a desk in my room." 
                },
                { 
                    term: "Sleep", 
                    definition: "To rest your mind and body by closing your eyes.", 
                    defTrans: "Dormir",
                    example: "I sleep in my bed.", 
                    exTrans: "Eu durmo na minha cama.",
                    audioFront: "TTS: Sleep",
                    audioBack: "TTS: I sleep in my bed." 
                },
                { 
                    term: "Make", 
                    definition: "To create or form something by putting parts together.", 
                    defTrans: "Fazer",
                    example: "We make dinner in the kitchen.", 
                    exTrans: "Nós fazemos o jantar na cozinha.",
                    audioFront: "TTS: Make",
                    audioBack: "TTS: We make dinner in the kitchen." 
                },
                { 
                    term: "Find", 
                    definition: "To discover something by looking for it.", 
                    defTrans: "Encontrar",
                    example: "Can you find the bathroom?", 
                    exTrans: "Você consegue encontrar o banheiro?",
                    audioFront: "TTS: Find",
                    audioBack: "TTS: Can you find the bathroom?" 
                },
                { 
                    term: "See", 
                    definition: "To perceive with the eyes.", 
                    defTrans: "Ver",
                    example: "I see a lamp.", 
                    exTrans: "Eu vejo uma luminária.",
                    audioFront: "TTS: See",
                    audioBack: "TTS: I see a lamp." 
                },
                { 
                    term: "Say", 
                    definition: "To speak words.", 
                    defTrans: "Dizer",
                    example: "Say 'hello' to mom.", 
                    exTrans: "Diga 'olá' para a mamãe.",
                    audioFront: "TTS: Say",
                    audioBack: "TTS: Say 'hello' to mom." 
                },
                { 
                    term: "Explore", 
                    definition: "To travel through an unfamiliar area to learn about it.", 
                    defTrans: "Explorar",
                    example: "Let's explore the garden.", 
                    exTrans: "Vamos explorar o jardim.",
                    audioFront: "TTS: Explore",
                    audioBack: "TTS: Let's explore the garden." 
                },
                { 
                    term: "Protect", 
                    definition: "To keep safe from harm or injury.", 
                    defTrans: "Proteger",
                    example: "The roof protects us from rain.", 
                    exTrans: "O telhado nos protege da chuva.",
                    audioFront: "TTS: Protect",
                    audioBack: "TTS: The roof protects us from rain." 
                },
                { 
                    term: "Eat", 
                    definition: "To put food into the mouth and swallow it.", 
                    defTrans: "Comer",
                    example: "We eat in the dining room.", 
                    exTrans: "Nós comemos na sala de jantar.",
                    audioFront: "TTS: Eat",
                    audioBack: "TTS: We eat in the dining room." 
                },
                { 
                    term: "Live", 
                    definition: "To make one's home in a particular place.", 
                    defTrans: "Viver / Morar",
                    example: "They live in an apartment.", 
                    exTrans: "Eles moram em um apartamento.",
                    audioFront: "TTS: Live",
                    audioBack: "TTS: They live in an apartment." 
                },
                { 
                    term: "Study", 
                    definition: "To learn about a subject, usually at school.", 
                    defTrans: "Estudar",
                    example: "I study at my desk.", 
                    exTrans: "Eu estudo na minha escrivaninha.",
                    audioFront: "TTS: Study",
                    audioBack: "TTS: I study at my desk." 
                },
                { 
                    term: "Play", 
                    definition: "To engage in activity for enjoyment.", 
                    defTrans: "Brincar / Jogar",
                    example: "Kids play in the yard.", 
                    exTrans: "Crianças brincam no quintal.",
                    audioFront: "TTS: Play",
                    audioBack: "TTS: Kids play in the yard." 
                },
                { 
                    term: "Talk", 
                    definition: "To speak in order to give information or express ideas.", 
                    defTrans: "Conversar",
                    example: "We talk in the living room.", 
                    exTrans: "Nós conversamos na sala de estar.",
                    audioFront: "TTS: Talk",
                    audioBack: "TTS: We talk in the living room." 
                },
                { 
                    term: "Laugh", 
                    definition: "To make sounds that show you think something is funny.", 
                    defTrans: "Rir",
                    example: "We laugh at the funny movie.", 
                    exTrans: "Nós rimos do filme engraçado.",
                    audioFront: "TTS: Laugh",
                    audioBack: "TTS: We laugh at the funny movie." 
                },

                // --- Rooms of the House ---
                { 
                    term: "House", 
                    definition: "A building for human habitation.", 
                    defTrans: "Casa",
                    example: "This is my house.", 
                    exTrans: "Esta é minha casa.",
                    audioFront: "TTS: House",
                    audioBack: "TTS: This is my house." 
                },
                { 
                    term: "Room", 
                    definition: "A part or division of a building enclosed by walls.", 
                    defTrans: "Cômodo / Quarto",
                    example: "My room is small.", 
                    exTrans: "Meu quarto é pequeno.",
                    audioFront: "TTS: Room",
                    audioBack: "TTS: My room is small." 
                },
                { 
                    term: "Living room", 
                    definition: "A room in a house for general everyday use.", 
                    defTrans: "Sala de estar",
                    example: "The TV is in the living room.", 
                    exTrans: "A TV está na sala de estar.",
                    audioFront: "TTS: Living room",
                    audioBack: "TTS: The TV is in the living room." 
                },
                { 
                    term: "Dining room", 
                    definition: "A room in a house where meals are eaten.", 
                    defTrans: "Sala de jantar",
                    example: "Dinner is in the dining room.", 
                    exTrans: "O jantar é na sala de jantar.",
                    audioFront: "TTS: Dining room",
                    audioBack: "TTS: Dinner is in the dining room." 
                },
                { 
                    term: "Kitchen", 
                    definition: "A room or area where food is prepared and cooked.", 
                    defTrans: "Cozinha",
                    example: "The fridge is in the kitchen.", 
                    exTrans: "A geladeira está na cozinha.",
                    audioFront: "TTS: Kitchen",
                    audioBack: "TTS: The fridge is in the kitchen." 
                },
                { 
                    term: "Bedroom", 
                    definition: "A room for sleeping in.", 
                    defTrans: "Quarto (de dormir)",
                    example: "My bed is in the bedroom.", 
                    exTrans: "Minha cama está no quarto.",
                    audioFront: "TTS: Bedroom",
                    audioBack: "TTS: My bed is in the bedroom." 
                },
                { 
                    term: "Bathroom", 
                    definition: "A room containing a toilet and sink.", 
                    defTrans: "Banheiro",
                    example: "Wash your hands in the bathroom.", 
                    exTrans: "Lave suas mãos no banheiro.",
                    audioFront: "TTS: Bathroom",
                    audioBack: "TTS: Wash your hands in the bathroom." 
                },
                { 
                    term: "Garage", 
                    definition: "A building for housing a motor vehicle.", 
                    defTrans: "Garagem",
                    example: "The car is in the garage.", 
                    exTrans: "O carro está na garagem.",
                    audioFront: "TTS: Garage",
                    audioBack: "TTS: The car is in the garage." 
                },
                { 
                    term: "Garden / Yard", 
                    definition: "A piece of ground used for growing flowers or play.", 
                    defTrans: "Jardim / Quintal",
                    example: "The flowers are in the garden.", 
                    exTrans: "As flores estão no jardim.",
                    audioFront: "TTS: Garden or Yard",
                    audioBack: "TTS: The flowers are in the garden." 
                },
                { 
                    term: "Hall / Hallway", 
                    definition: "A passage or corridor in a building.", 
                    defTrans: "Corredor",
                    example: "Walk down the hall.", 
                    exTrans: "Caminhe pelo corredor.",
                    audioFront: "TTS: Hallway",
                    audioBack: "TTS: Walk down the hall." 
                },

                // --- Colors ---
                { 
                    term: "Color", 
                    definition: "Sensations on the eye reflected by light.", 
                    defTrans: "Cor",
                    example: "What is your favorite color?", 
                    exTrans: "Qual é sua cor favorita?",
                    audioFront: "TTS: Color",
                    audioBack: "TTS: What is your favorite color?" 
                },
                { 
                    term: "Red", 
                    definition: "The color of blood or fire.", 
                    defTrans: "Vermelho",
                    example: "The apple is red.", 
                    exTrans: "A maçã é vermelha.",
                    audioFront: "TTS: Red",
                    audioBack: "TTS: The apple is red." 
                },
                { 
                    term: "Blue", 
                    definition: "The color of the sky or sea.", 
                    defTrans: "Azul",
                    example: "The sky is blue.", 
                    exTrans: "O céu é azul.",
                    audioFront: "TTS: Blue",
                    audioBack: "TTS: The sky is blue." 
                },
                { 
                    term: "Yellow", 
                    definition: "The color of the sun or a lemon.", 
                    defTrans: "Amarelo",
                    example: "The sun is yellow.", 
                    exTrans: "O sol é amarelo.",
                    audioFront: "TTS: Yellow",
                    audioBack: "TTS: The sun is yellow." 
                },
                { 
                    term: "Green", 
                    definition: "The color of grass or leaves.", 
                    defTrans: "Verde",
                    example: "The grass is green.", 
                    exTrans: "A grama é verde.",
                    audioFront: "TTS: Green",
                    audioBack: "TTS: The grass is green." 
                },
                { 
                    term: "Orange", 
                    definition: "The color of an orange fruit.", 
                    defTrans: "Laranja",
                    example: "The orange is orange.", 
                    exTrans: "A laranja é laranja.",
                    audioFront: "TTS: Orange",
                    audioBack: "TTS: The orange is orange." 
                },
                { 
                    term: "Purple", 
                    definition: "A color between red and blue.", 
                    defTrans: "Roxo",
                    example: "The flower is purple.", 
                    exTrans: "A flor é roxa.",
                    audioFront: "TTS: Purple",
                    audioBack: "TTS: The flower is purple." 
                },
                { 
                    term: "Brown", 
                    definition: "The color of earth or wood.", 
                    defTrans: "Marrom",
                    example: "The door is brown.", 
                    exTrans: "A porta é marrom.",
                    audioFront: "TTS: Brown",
                    audioBack: "TTS: The door is brown." 
                },
                { 
                    term: "Black", 
                    definition: "The darkest color, the result of the absence of light.", 
                    defTrans: "Preto",
                    example: "The cat is black.", 
                    exTrans: "O gato é preto.",
                    audioFront: "TTS: Black",
                    audioBack: "TTS: The cat is black." 
                },
                { 
                    term: "White", 
                    definition: "The color of milk or fresh snow.", 
                    defTrans: "Branco",
                    example: "The wall is white.", 
                    exTrans: "A parede é branca.",
                    audioFront: "TTS: White",
                    audioBack: "TTS: The wall is white." 
                },
                { 
                    term: "Gray / Grey", 
                    definition: "An intermediate color between black and white.", 
                    defTrans: "Cinza",
                    example: "The cloud is gray.", 
                    exTrans: "A nuvem é cinza.",
                    audioFront: "TTS: Gray",
                    audioBack: "TTS: The cloud is gray." 
                },
                { 
                    term: "Pink", 
                    definition: "A pale red color.", 
                    defTrans: "Rosa",
                    example: "The pig is pink.", 
                    exTrans: "O porco é rosa.",
                    audioFront: "TTS: Pink",
                    audioBack: "TTS: The pig is pink." 
                },
                // --- Things in the Bedroom ---
                { 
                    term: "Bed", 
                    definition: "A piece of furniture for sleeping or resting on.", 
                    defTrans: "Cama",
                    example: "The bed is soft.", 
                    exTrans: "A cama é macia.",
                    audioFront: "TTS: Bed",
                    audioBack: "TTS: The bed is soft." 
                },
                { 
                    term: "Pillow", 
                    definition: "A soft support for the head during sleep.", 
                    defTrans: "Travesseiro",
                    example: "I sleep on a pillow.", 
                    exTrans: "Eu durmo em um travesseiro.",
                    audioFront: "TTS: Pillow",
                    audioBack: "TTS: I sleep on a pillow." 
                },
                { 
                    term: "Blanket", 
                    definition: "A large piece of material used as a bed covering for warmth.", 
                    defTrans: "Cobertor",
                    example: "The blanket is warm.", 
                    exTrans: "O cobertor é quente.",
                    audioFront: "TTS: Blanket",
                    audioBack: "TTS: The blanket is warm." 
                },
                { 
                    term: "Wardrobe / Closet", 
                    definition: "A large, tall cabinet in which clothes may be hung or stored.", 
                    defTrans: "Guarda-roupa / Armário",
                    example: "My clothes are in the wardrobe.", 
                    exTrans: "Minhas roupas estão no guarda-roupa.",
                    audioFront: "TTS: Wardrobe or Closet",
                    audioBack: "TTS: My clothes are in the wardrobe." 
                },
                { 
                    term: "Desk", 
                    definition: "A piece of furniture with a flat surface for reading or writing.", 
                    defTrans: "Escrivaninha",
                    example: "My computer is on the desk.", 
                    exTrans: "Meu computador está na escrivaninha.",
                    audioFront: "TTS: Desk",
                    audioBack: "TTS: My computer is on the desk." 
                },
                { 
                    term: "Chair", 
                    definition: "A separate seat for one person, typically with a back and four legs.", 
                    defTrans: "Cadeira",
                    example: "Sit on the chair.", 
                    exTrans: "Sente-se na cadeira.",
                    audioFront: "TTS: Chair",
                    audioBack: "TTS: Sit on the chair." 
                },
                { 
                    term: "Rug / Carpet", 
                    definition: "A floor covering.", 
                    defTrans: "Tapete",
                    example: "The rug is on the floor.", 
                    exTrans: "O tapete está no chão.",
                    audioFront: "TTS: Rug or Carpet",
                    audioBack: "TTS: The rug is on the floor." 
                },
                { 
                    term: "Window", 
                    definition: "An opening in the wall or roof of a building to admit light or air.", 
                    defTrans: "Janela",
                    example: "Open the window.", 
                    exTrans: "Abra a janela.",
                    audioFront: "TTS: Window",
                    audioBack: "TTS: Open the window." 
                },
                { 
                    term: "Door", 
                    definition: "A movable barrier used to open and close an entrance.", 
                    defTrans: "Porta",
                    example: "Close the door.", 
                    exTrans: "Feche a porta.",
                    audioFront: "TTS: Door",
                    audioBack: "TTS: Close the door." 
                },
                { 
                    term: "Shelf / Bookshelf", 
                    definition: "A flat length of wood attached to a wall, used to hold things.", 
                    defTrans: "Prateleira / Estante",
                    example: "The books are on the shelf.", 
                    exTrans: "Os livros estão na prateleira.",
                    audioFront: "TTS: Shelf or Bookshelf",
                    audioBack: "TTS: The books are on the shelf." 
                },
                { 
                    term: "Curtains", 
                    definition: "A piece of material suspended at the top to form a screen at a window.", 
                    defTrans: "Cortinas",
                    example: "The curtains are blue.", 
                    exTrans: "As cortinas são azuis.",
                    audioFront: "TTS: Curtains",
                    audioBack: "TTS: The curtains are blue." 
                },
                { 
                    term: "Lamp", 
                    definition: "A device for giving light.", 
                    defTrans: "Luminária / Abajur",
                    example: "Turn on the lamp.", 
                    exTrans: "Ligue a luminária.",
                    audioFront: "TTS: Lamp",
                    audioBack: "TTS: Turn on the lamp." 
                },

                // --- Parts of a House ---
                { 
                    term: "Wall", 
                    definition: "A continuous vertical brick or stone structure that encloses an area.", 
                    defTrans: "Parede",
                    example: "The wall is white.", 
                    exTrans: "A parede é branca.",
                    audioFront: "TTS: Wall",
                    audioBack: "TTS: The wall is white." 
                },
                { 
                    term: "Floor", 
                    definition: "The lower surface of a room, on which one may walk.", 
                    defTrans: "Chão / Piso",
                    example: "The floor is clean.", 
                    exTrans: "O chão está limpo.",
                    audioFront: "TTS: Floor",
                    audioBack: "TTS: The floor is clean." 
                },
                { 
                    term: "Ceiling", 
                    definition: "The upper interior surface of a room.", 
                    defTrans: "Teto (interno)",
                    example: "The ceiling is high.", 
                    exTrans: "O teto é alto.",
                    audioFront: "TTS: Ceiling",
                    audioBack: "TTS: The ceiling is high." 
                },
                { 
                    term: "Roof", 
                    definition: "The structure forming the upper covering of a building.", 
                    defTrans: "Telhado",
                    example: "The roof is red.", 
                    exTrans: "O telhado é vermelho.",
                    audioFront: "TTS: Roof",
                    audioBack: "TTS: The roof is red." 
                },
                { 
                    term: "Stairs", 
                    definition: "A set of steps leading from one floor of a building to another.", 
                    defTrans: "Escadas",
                    example: "Go up the stairs.", 
                    exTrans: "Suba as escadas.",
                    audioFront: "TTS: Stairs",
                    audioBack: "TTS: Go up the stairs." 
                },
                { 
                    term: "Balcony", 
                    definition: "A platform enclosed by a wall on the outside of a building.", 
                    defTrans: "Sacada / Varanda",
                    example: "She is on the balcony.", 
                    exTrans: "Ela está na sacada.",
                    audioFront: "TTS: Balcony",
                    audioBack: "TTS: She is on the balcony." 
                },
                { 
                    term: "Chimney", 
                    definition: "A vertical channel that conducts smoke up from a fire.", 
                    defTrans: "Chaminé",
                    example: "Smoke comes from the chimney.", 
                    exTrans: "Fumaça sai da chaminé.",
                    audioFront: "TTS: Chimney",
                    audioBack: "TTS: Smoke comes from the chimney." 
                },

                // --- Phrases & Expressions ---
                { 
                    term: "Welcome to my house!", 
                    definition: "A polite greeting to someone arriving at your home.", 
                    defTrans: "Bem-vindo(a) à minha casa!",
                    example: "Welcome to my house! Come in.", 
                    exTrans: "Bem-vindo à minha casa! Entre.",
                    audioFront: "TTS: Welcome to my house!",
                    audioBack: "TTS: Welcome to my house! Come in." 
                },
                { 
                    term: "Make yourself at home.", 
                    definition: "An expression telling a guest to feel comfortable.", 
                    defTrans: "Sinta-se em casa.",
                    example: "Please, make yourself at home.", 
                    exTrans: "Por favor, sinta-se em casa.",
                    audioFront: "TTS: Make yourself at home.",
                    audioBack: "TTS: Please, make yourself at home." 
                },
                { 
                    term: "Where is the bathroom?", 
                    definition: "Asking for the location of the bathroom.", 
                    defTrans: "Onde é o banheiro?",
                    example: "Where is the bathroom? It's upstairs.", 
                    exTrans: "Onde é o banheiro? É lá em cima.",
                    audioFront: "TTS: Where is the bathroom?",
                    audioBack: "TTS: Where is the bathroom? It's upstairs." 
                },
                { 
                    term: "Of course", 
                    definition: "Phrase expressing certainty or agreement.", 
                    defTrans: "É claro / Com certeza",
                    example: "Can I come in? Of course!", 
                    exTrans: "Posso entrar? Com certeza!",
                    audioFront: "TTS: Of course",
                    audioBack: "TTS: Can I come in? Of course!" 
                },

                // --- Grammar Points ---
                { 
                    term: "There is", 
                    definition: "Used to say that a singular thing exists.", 
                    defTrans: "Tem / Há (singular)",
                    example: "There is a bed.", 
                    exTrans: "Tem uma cama.",
                    audioFront: "TTS: There is",
                    audioBack: "TTS: There is a bed." 
                },
                { 
                    term: "There are", 
                    definition: "Used to say that plural things exist.", 
                    defTrans: "Tem / Há (plural)",
                    example: "There are two chairs.", 
                    exTrans: "Tem duas cadeiras.",
                    audioFront: "TTS: There are",
                    audioBack: "TTS: There are two chairs." 
                },
                { 
                    term: "A / An", 
                    definition: "Indefinite articles used before singular nouns.", 
                    defTrans: "Um / Uma",
                    example: "It is an apple. It is a book.", 
                    exTrans: "É uma maçã. É um livro.",
                    audioFront: "TTS: A or An",
                    audioBack: "TTS: It is an apple. It is a book." 
                },
                { 
                    term: "Regular Plurals", 
                    definition: "Nouns that form the plural by adding -s or -es.", 
                    defTrans: "Plurais Regulares",
                    example: "I have two watches.", 
                    exTrans: "Eu tenho dois relógios.",
                    audioFront: "TTS: Regular Plurals",
                    audioBack: "TTS: I have two watches." 
                },
                { 
                    term: "Irregular Plurals", 
                    definition: "Nouns that change form completely in the plural.", 
                    defTrans: "Plurais Irregulares",
                    example: "The children are happy.", 
                    exTrans: "As crianças estão felizes.",
                    audioFront: "TTS: Irregular Plurals",
                    audioBack: "TTS: The children are happy." 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Part 1: Verbs and Rooms)
    // ======================================================
    glossary: [
        // --- TOPIC 1: VERBS ---
        { 
            topic: "Verbs", 
            term: "to-be", 
            definition: "To exist, occur, or take place.", 
            translation: "ser / estar" 
        },
        { 
            topic: "Verbs", 
            term: "have", 
            definition: "To possess, own, or hold.", 
            translation: "ter" 
        },
        { 
            topic: "Verbs", 
            term: "sleep", 
            definition: "To rest your mind and body by closing your eyes.", 
            translation: "dormir" 
        },
        { 
            topic: "Verbs", 
            term: "make", 
            definition: "To create or form something by putting parts together.", 
            translation: "fazer" 
        },
        { 
            topic: "Verbs", 
            term: "find", 
            definition: "To discover something by looking for it.", 
            translation: "encontrar" 
        },
        { 
            topic: "Verbs", 
            term: "see", 
            definition: "To perceive with the eyes.", 
            translation: "ver" 
        },
        { 
            topic: "Verbs", 
            term: "say", 
            definition: "To speak words.", 
            translation: "dizer" 
        },
        { 
            topic: "Verbs", 
            term: "explore", 
            definition: "To travel through an unfamiliar area to learn about it.", 
            translation: "explorar" 
        },
        { 
            topic: "Verbs", 
            term: "protect", 
            definition: "To keep safe from harm or injury.", 
            translation: "proteger" 
        },
        { 
            topic: "Verbs", 
            term: "eat", 
            definition: "To put food into the mouth and swallow it.", 
            translation: "comer" 
        },
        { 
            topic: "Verbs", 
            term: "live", 
            definition: "To make one's home in a particular place.", 
            translation: "viver / morar" 
        },
        { 
            topic: "Verbs", 
            term: "study", 
            definition: "To learn about a subject, usually at school.", 
            translation: "estudar" 
        },
        { 
            topic: "Verbs", 
            term: "play", 
            definition: "To engage in activity for enjoyment.", 
            translation: "brincar / jogar" 
        },
        { 
            topic: "Verbs", 
            term: "talk", 
            definition: "To speak in order to give information or express ideas.", 
            translation: "conversar" 
        },
        { 
            topic: "Verbs", 
            term: "laugh", 
            definition: "To make sounds that show you think something is funny.", 
            translation: "rir" 
        },

        // --- TOPIC 2: ROOMS OF THE HOUSE ---
        { 
            topic: "Rooms", 
            term: "house", 
            definition: "A building for human habitation.", 
            translation: "Casa" 
        },
        { 
            topic: "Rooms", 
            term: "room", 
            definition: "A part or division of a building enclosed by walls.", 
            translation: "Cômodo / Quarto" 
        },
        { 
            topic: "Rooms", 
            term: "living-room", 
            definition: "A room in a house for general everyday use.", 
            translation: "Sala de estar" 
        },
        { 
            topic: "Rooms", 
            term: "dining-room", 
            definition: "A room in a house where meals are eaten.", 
            translation: "Sala de jantar" 
        },
        { 
            topic: "Rooms", 
            term: "kitchen", 
            definition: "A room or area where food is prepared and cooked.", 
            translation: "Cozinha" 
        },
        { 
            topic: "Rooms", 
            term: "bedroom", 
            definition: "A room for sleeping in.", 
            translation: "Quarto (de dormir)" 
        },
        { 
            topic: "Rooms", 
            term: "bathroom", 
            definition: "A room containing a toilet and sink.", 
            translation: "Banheiro" 
        },
        { 
            topic: "Rooms", 
            term: "garage", 
            definition: "A building for housing a motor vehicle.", 
            translation: "Garagem" 
        },
        { 
            topic: "Rooms", 
            term: "garden", 
            definition: "A piece of ground used for growing flowers or vegetables.", 
            translation: "Jardim" 
        },
        { 
            topic: "Rooms", 
            term: "hallway", 
            definition: "A passage or corridor in a building.", 
            translation: "Corredor" 
        },
        // --- TOPIC 3: COLORS ---
        { 
            topic: "Colors", 
            term: "color", 
            definition: "The property possessed by an object of producing different sensations on the eye as a result of the way it reflects or emits light.", 
            translation: "Cor" 
        },
        { 
            topic: "Colors", 
            term: "red", 
            definition: "The color of blood or fire.", 
            translation: "Vermelho" 
        },
        { 
            topic: "Colors", 
            term: "blue", 
            definition: "The color of the sky or sea.", 
            translation: "Azul" 
        },
        { 
            topic: "Colors", 
            term: "yellow", 
            definition: "The color of the sun or a lemon.", 
            translation: "Amarelo" 
        },
        { 
            topic: "Colors", 
            term: "green", 
            definition: "The color of grass or leaves.", 
            translation: "Verde" 
        },
        { 
            topic: "Colors", 
            term: "orange", 
            definition: "The color of an orange fruit.", 
            translation: "Laranja" 
        },
        { 
            topic: "Colors", 
            term: "purple", 
            definition: "A color intermediate between red and blue.", 
            translation: "Roxo" 
        },
        { 
            topic: "Colors", 
            term: "brown", 
            definition: "The color of earth or wood.", 
            translation: "Marrom" 
        },
        { 
            topic: "Colors", 
            term: "black", 
            definition: "The darkest color, the result of the absence of light.", 
            translation: "Preto" 
        },
        { 
            topic: "Colors", 
            term: "white", 
            definition: "The color of milk or fresh snow.", 
            translation: "Branco" 
        },
        { 
            topic: "Colors", 
            term: "gray", 
            definition: "An intermediate color between black and white.", 
            translation: "Cinza" 
        },
        { 
            topic: "Colors", 
            term: "pink", 
            definition: "A pale red color.", 
            translation: "Rosa" 
        },
        // --- TOPIC 4: THINGS IN THE BEDROOM ---
        { 
            topic: "Items & Parts", 
            term: "bed", 
            definition: "A piece of furniture for sleeping or resting on.", 
            translation: "Cama" 
        },
        { 
            topic: "Items & Parts", 
            term: "pillow", 
            definition: "A soft support for the head during sleep.", 
            translation: "Travesseiro" 
        },
        { 
            topic: "Items & Parts", 
            term: "blanket", 
            definition: "A large piece of woolen or similar material used as a bed covering for warmth.", 
            translation: "Cobertor" 
        },
        { 
            topic: "Items & Parts", 
            term: "wardrobe", 
            definition: "A large, tall cabinet in which clothes may be hung or stored.", 
            translation: "Guarda-roupa / Armário" 
        },
        { 
            topic: "Items & Parts", 
            term: "desk", 
            definition: "A piece of furniture with a flat surface at which one can read, write, or work.", 
            translation: "Escrivaninha" 
        },
        { 
            topic: "Items & Parts", 
            term: "chair", 
            definition: "A separate seat for one person, typically with a back and four legs.", 
            translation: "Cadeira" 
        },
        { 
            topic: "Items & Parts", 
            term: "rug", 
            definition: "A floor covering; a carpet.", 
            translation: "Tapete" 
        },
        { 
            topic: "Items & Parts", 
            term: "window", 
            definition: "An opening in the wall or roof of a building to admit light or air.", 
            translation: "Janela" 
        },
        { 
            topic: "Items & Parts", 
            term: "door", 
            definition: "A movable barrier used to open and close an entrance.", 
            translation: "Porta" 
        },
        { 
            topic: "Items & Parts", 
            term: "shelf", 
            definition: "A flat length of wood attached to a wall, used to hold things.", 
            translation: "Prateleira / Estante" 
        },
        { 
            topic: "Items & Parts", 
            term: "curtains", 
            definition: "A piece of material suspended at the top to form a screen at a window.", 
            translation: "Cortinas" 
        },
        { 
            topic: "Items & Parts", 
            term: "lamp", 
            definition: "A device for giving light.", 
            translation: "Luminária / Abajur" 
        },

        // --- PARTS OF A HOUSE ---
        { 
            topic: "Items & Parts", 
            term: "wall", 
            definition: "A continuous vertical brick or stone structure that encloses or divides an area.", 
            translation: "Parede" 
        },
        { 
            topic: "Items & Parts", 
            term: "floor", 
            definition: "The lower surface of a room, on which one may walk.", 
            translation: "Chão / Piso" 
        },
        { 
            topic: "Items & Parts", 
            term: "ceiling", 
            definition: "The upper interior surface of a room.", 
            translation: "Teto (interno)" 
        },
        { 
            topic: "Items & Parts", 
            term: "roof", 
            definition: "The structure forming the upper covering of a building.", 
            translation: "Telhado" 
        },
        { 
            topic: "Items & Parts", 
            term: "stairs", 
            definition: "A set of steps leading from one floor of a building to another.", 
            translation: "Escadas" 
        },
        { 
            topic: "Items & Parts", 
            term: "balcony", 
            definition: "A platform enclosed by a wall on the outside of a building.", 
            translation: "Sacada / Varanda" 
        },
        { 
            topic: "Items & Parts", 
            term: "chimney", 
            definition: "A vertical channel that conducts smoke up from a fire.", 
            translation: "Chaminé" 
        },
        // --- TOPIC 5: PHRASES & EXPRESSIONS ---
        { 
            topic: "Phrases & Grammar", 
            term: "welcome-to-my-house", 
            definition: "A polite greeting to someone arriving at your home.", 
            translation: "Bem-vindo(a) à minha casa!" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "make-yourself-at-home", 
            definition: "An expression telling a guest to feel comfortable.", 
            translation: "Sinta-se em casa." 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "where-is-the-bathroom", 
            definition: "Asking for the location of the bathroom.", 
            translation: "Onde é o banheiro?" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "is-there-a", 
            definition: "Asking if a singular item exists.", 
            translation: "Tem um(a)...?" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "are-there", 
            definition: "Asking if plural items exist.", 
            translation: "Tem...? / Há...?" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "how-many-rooms", 
            definition: "Asking about the quantity of rooms in a building.", 
            translation: "Quantos cômodos tem?" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "what-color-is", 
            definition: "Asking about the specific color of an object.", 
            translation: "Qual é a cor do...?" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "my-favorite-room", 
            definition: "Stating preference for a specific area of the house.", 
            translation: "Meu cômodo favorito é..." 
        },

        // --- GRAMMAR POINTS ---
        { 
            topic: "Phrases & Grammar", 
            term: "there-is", 
            definition: "Used to say that a singular thing exists (Tem / Há).", 
            translation: "Tem / Há (singular)" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "there-are", 
            definition: "Used to say that plural things exist (Tem / Há).", 
            translation: "Tem / Há (plural)" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "indefinite-articles", 
            definition: "Words like 'a' and 'an' used before singular nouns to refer to them generally.", 
            translation: "Artigos Indefinidos (um / uma)" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "regular-plurals", 
            definition: "Nouns that form the plural by adding -s or -es (e.g., house -> houses).", 
            translation: "Plurais Regulares" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "irregular-plurals", 
            definition: "Nouns that change form completely in the plural (e.g., child -> children).", 
            translation: "Plurais Irregulares" 
        }
    ] // This closes the glossary array
}); // This closes the initLesson object