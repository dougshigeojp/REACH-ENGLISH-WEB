/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */
/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * GRADE 6, BIMESTER 2, CHAPTER 3
 * BATCH 1: TYPES 1 TO 5 (40 items each)
 */

window.initExercise({
    id: "6-2-3",
    grade: "6th Grade",
    bimester: "2",
    chapter: "3",
    title: "My House and Rooms",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES (40 ITEMS) ---
        1: [
            { words: ["my", "is", "This", "house"], correct: "This is my house" },
            { words: ["The", "is", "big", "living", "room"], correct: "The living room is big" },
            { words: ["yellow", "are", "walls", "The"], correct: "The walls are yellow" },
            { words: ["green", "a", "is", "There", "sofa"], correct: "There is a green sofa" },
            { words: ["there", "a", "Is", "garden", "?"], correct: "Is there a garden?" },
            { words: ["is", "It", "the", "kitchen", "behind"], correct: "It is behind the kitchen" },
            { words: ["bedrooms", "many", "are", "How", "there", "?"], correct: "How many bedrooms are there?" },
            { words: ["three", "upstairs", "are", "There", "bedrooms"], correct: "There are three bedrooms upstairs" },
            { words: ["room", "kitchen", "My", "the", "is", "favorite"], correct: "My favorite room is the kitchen" },
            { words: ["have", "I", "desk", "a", "room", "my", "in"], correct: "I have a desk in my room" },
            { words: ["in", "bed", "my", "I", "sleep"], correct: "I sleep in my bed" },
            { words: ["dinner", "We", "the", "make", "in", "kitchen"], correct: "We make dinner in the kitchen" },
            { words: ["you", "bathroom", "the", "find", "Can", "?"], correct: "Can you find the bathroom?" },
            { words: ["see", "lamp", "a", "I"], correct: "I see a lamp" },
            { words: ["explore", "the", "Let's", "garden"], correct: "Let's explore the garden" },
            { words: ["roof", "The", "from", "protects", "rain", "us"], correct: "The roof protects us from rain" },
            { words: ["apartment", "in", "They", "an", "live"], correct: "They live in an apartment" },
            { words: ["my", "study", "I", "desk", "at"], correct: "I study at my desk" },
            { words: ["kids", "The", "yard", "in", "play", "the"], correct: "The kids play in the yard" },
            { words: ["the", "talk", "We", "living", "room", "in"], correct: "We talk in the living room" },
            { words: ["is", "small", "room", "My"], correct: "My room is small" },
            { words: ["fridge", "the", "The", "kitchen", "is", "in"], correct: "The fridge is in the kitchen" },
            { words: ["wash", "your", "bathroom", "hands", "the", "in"], correct: "Wash your hands in the bathroom" },
            { words: ["is", "car", "The", "garage", "the", "in"], correct: "The car is in the garage" },
            { words: ["favorite", "What", "color", "your", "is", "?"], correct: "What is your favorite color?" },
            { words: ["sky", "blue", "is", "The"], correct: "The sky is blue" },
            { words: ["is", "The", "grass", "green"], correct: "The grass is green" },
            { words: ["door", "The", "brown", "is"], correct: "The door is brown" },
            { words: ["is", "cat", "The", "black"], correct: "The cat is black" },
            { words: ["white", "The", "is", "wall"], correct: "The wall is white" },
            { words: ["bed", "The", "soft", "is"], correct: "The bed is soft" },
            { words: ["wardrobe", "My", "are", "in", "clothes", "the"], correct: "My clothes are in the wardrobe" },
            { words: ["computer", "on", "is", "desk", "the", "My"], correct: "My computer is on the desk" },
            { words: ["is", "rug", "The", "floor", "the", "on"], correct: "The rug is on the floor" },
            { words: ["window", "Open", "the"], correct: "Open the window" },
            { words: ["books", "shelf", "The", "are", "on", "the"], correct: "The books are on the shelf" },
            { words: ["curtains", "blue", "The", "are"], correct: "The curtains are blue" },
            { words: ["clean", "The", "floor", "is"], correct: "The floor is clean" },
            { words: ["high", "ceiling", "The", "is"], correct: "The ceiling is high" },
            { words: ["up", "Go", "stairs", "the"], correct: "Go up the stairs" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES (40 ITEMS) ---
        2: [
            { lines: ["Yes, It is very big. Make yourself at home.", "Welcome to my house!", "Thank you! Is this the living room?", "Thank you very much."], order: [1, 2, 0, 3] },
            { lines: ["Yes, there is.", "Where is it?", "Is there a garden?", "It is behind the kitchen."], order: [2, 0, 1, 3] },
            { lines: ["There are three bedrooms upstairs.", "How many bedrooms are there?", "Is there a kitchen? My favorite room is the kitchen.", "Cool! Yeah, there is one kitchen downstairs."], order: [1, 0, 2, 3] },
            { lines: ["I have a desk in my room.", "What do you have in your room?", "I study at my desk.", "That is nice. What do you do there?"], order: [1, 0, 3, 2] },
            { lines: ["In my bed.", "It is very soft.", "Where do you sleep?", "Is the bed soft?"], order: [2, 0, 3, 1] },
            { lines: ["We make dinner in the kitchen.", "Oh, I see the fridge!", "Yes, the fridge is in the kitchen.", "Where do you make dinner?"], order: [3, 0, 1, 2] },
            { lines: ["It's upstairs.", "Thank you.", "Can you find the bathroom?", "No... Where is it?"], order: [2, 3, 0, 1] },
            { lines: ["What do you see?", "It is on the desk.", "I see a lamp.", "Where is the lamp?"], order: [0, 2, 3, 1] },
            { lines: ["The flowers are green and red.", "The garden is beautiful.", "Let's explore the garden.", "Look at the flowers!"], order: [2, 3, 0, 1] },
            { lines: ["Yes, it protects us from rain.", "And the roof is red!", "I love this house.", "Me too. Look at the roof outside."], order: [2, 3, 1, 0] },
            { lines: ["We eat in the dining room.", "And where is the food?", "Where do we eat?", "It is on the table."], order: [2, 0, 1, 3] },
            { lines: ["They live in an apartment.", "Are there two bedrooms?", "Where do they live?", "No, there aren't."], order: [2, 0, 1, 3] },
            { lines: ["Look, there are kids here.", "Really? Where do they play?", "The kids play in the yard.", "Wow! Let's play too!"], order: [0, 1, 2, 3] },
            { lines: ["No, we talk in the living room.", "Where is the living room?", "It is downstairs.", "Do we talk here?"], order: [3, 0, 1, 2] },
            { lines: ["Do you like this movie?", "Yes, we laugh a lot.", "Why do you laugh?", "Because the movie is funny!"], order: [0, 1, 2, 3] },
            { lines: ["Is your house big?", "Yes, my house is very big.", "Is your room big too?", "No, my room is small."], order: [0, 1, 2, 3] },
            { lines: ["It is in the garage.", "Where is the car?", "Oh, there is a big garage!", "Yes, and there is a new bicycle in the garage too."], order: [1, 0, 2, 3] },
            { lines: ["My favorite color is blue.", "What is your favorite color?", "Is the sky blue?", "Yes, the sky is blue."], order: [1, 0, 2, 3] },
            { lines: ["It is yellow.", "What color is the sun?", "And the grass?", "The grass is green."], order: [1, 0, 2, 3] },
            { lines: ["The door is brown.", "And what color is the wall?", "What color is the door?", "The wall is white."], order: [2, 0, 1, 3] },
            { lines: ["What color is the cat?", "Yes, there is one cat.", "The cat is black.", "Is there a cat in the house?"], order: [3, 1, 0, 2] },
            { lines: ["I sleep on a pillow.", "No, my blanket is warm.", "And are you cold?", "What do you sleep on?"], order: [3, 0, 2, 1] },
            { lines: ["Where are your clothes?", "My clothes are in the wardrobe.", "Yes, they are.", "Are they clean?"], order: [0, 1, 3, 2] },
            { lines: ["It is on the desk.", "Is the desk big?", "Where is your computer?", "Yes, it is big."], order: [2, 0, 1, 3] },
            { lines: ["Please, sit down.", "Where do I sit?", "Sit on the chair.", "OK, thank you."], order: [0, 1, 2, 3] },
            { lines: ["What is there on the floor?", "There is a rug on the floor.", "Is it a big rug?", "Yes, it is a big rug."], order:[0, 1, 2, 3] },
            { lines: ["Open the window.", "Why?", "OK, let's open it.", "Because it is hot."], order: [0, 1, 3, 2] },
            { lines: ["Are we ready to leave?", "Yes, we are.", "OK, close the door, please.", "All right! Closed! Now, let's go."], order:[0, 1, 2, 3] },
            { lines: ["Where are the books?", "Oh, I see them. A lot!", "They are on the shelf.", "Yes, there are many books."], order: [0, 2, 1, 3] },
            { lines: ["What color are the curtains?", "The curtains are blue.", "Yes, they are very nice.", "I like blue curtains."], order: [0, 1, 3, 2] },
            { lines: ["Turn on the lamp.", "OK, it is on.", "It is dark in here.", "Thank you."], order: [2, 0, 1, 3] },
            { lines: ["Is the floor clean?", "Wow, it is very clean!", "Look at the kitchen.", "Yes, the floor is clean."], order: [2, 0, 3, 1] },
            { lines: ["Look at the ceiling!", "Wow, it is very high.", "Yes, I like high ceilings.", "Me too. The house is beautiful."], order:[0, 1, 2, 3] },
            { lines: ["Where is the roof?", "The roof is outside.", "It is red.", "What color is it?"], order: [0, 1, 3, 2] },
            { lines: ["Oh! Let's go up the stairs.", "Where is your bedroom?", "It is upstairs.", "OK, I am going up."], order: [1, 2, 0, 3] },
            { lines: ["Where is she?", "She is on the balcony.", "Oh, do you see her?", "Yes, she is outside."], order: [0, 1, 2, 3] },
            { lines: ["Look! Smoke is coming from the chimney.", "Oh, I see it. Is there a fireplace inside?", "Yes, there is a big fireplace in the living room.", "That is nice for cold days."], order: [0, 1, 2, 3] },
            { lines: ["Are there two beds?", "No, there aren't.", "Oh, there is only one bed.", "Let's look in the bedroom."], order: [3, 0, 1, 2] },
            { lines: ["Is your house big?", "Yes! Let's count the rooms.", "Okay! One, two, three, four, five!", "Wow, there are five rooms!"], order:[0, 1, 2, 3] },
            { lines: ["There is a big window.", "What is in your room?", "Yeah, I like big windows.", "Wow, it is very bright."], order: [1, 0, 3, 2] }
        ],

        // --- TYPE 3: QUICK QUESTIONS (40 ITEMS) ---
        3: [
            { q: "Is there a big TV in the living room?", options: ["Yes, there is.", "Yes, there are.", "Yes, is there.", "Yes, it are."], a: "Yes, there is." },
            { q: "Are there three bedrooms upstairs?", options: ["Yes, there are.", "Yes, they is.", "Yes, are there.", "Yes, there is."], a: "Yes, there are." },
            { q: "Is there a garden behind the kitchen?", options: ["Yes, there is.", "No, there not is.", "No, there aren't.", "Yes, there a is garden."], a: "Yes, there is." },
            { q: "Are there windows in the bathroom?", options: ["No, there aren't.", "No, there isn't.", "No, aren't there windows.", "Not there are."], a: "No, there aren't." },
            { q: "Is the wall white?", options: ["Yes, it is.", "Yes, it are.", "Is white, yes.", "No, it not is."], a: "Yes, it is." },
            { q: "Are the walls yellow?", options: ["Yes, they are.", "Yes, they is.", "Yes, are yellow.", "No, they'm not."], a: "Yes, they are." },
            { q: "Is there a lamp on the desk?", options: ["Yes, there is.", "Yes, there are.", "Is a lamp, yes.", "No, isn't there."], a: "Yes, there is." },
            { q: "Are there books on the shelf?", options: ["Yes, there are.", "Yes, it is.", "Yes, are books.", "No, there not are."], a: "Yes, there are." },
            { q: "Is the floor clean?", options: ["Yes, it is.", "Are clean, yes.", "No, it not is.", "Yes, there is clean."], a: "Yes, it is." },
            { q: "Are there two children in the yard?", options: ["Yes, there are.", "Yes, is two children.", "Yes, there is.", "Are there, yes."], a: "Yes, there are." },
            { q: "Is there a car in the garage?", options: ["Yes, there is.", "Yes, car is.", "Yes, there are.", "No, there aren't."], a: "Yes, there is." },
            { q: "Are there two men on the roof?", options: ["Yes, there are.", "Yes, there is.", "Yes, they is.", "No, there isn't."], a: "Yes, there are." },
            { q: "Is it an old house?", options: ["Yes, it is.", "Yes, there is.", "Yes, it are.", "No, it isn't not."], a: "Yes, it is." },
            { q: "Are there boxes in the wardrobe?", options: ["No, there aren't.", "No, there isn't.", "No, they not are.", "No, aren't there."], a: "No, there aren't." },
            { q: "Is there an apple on the table?", options: ["Yes, there is.", "Yes, there are.", "Yes, it are.", "Yes, is there an apple."], a: "Yes, there is." },
            { q: "Is the ceiling high?", options: ["Yes, it is.", "Yes, there is.", "Yes, it are.", "No, it are not."], a: "Yes, it is." },
            { q: "Are the curtains blue?", options: ["Yes, they are.", "Yes, they is.", "Yes, it is.", "No, there aren't."], a: "Yes, they are." },
            { q: "Is there a green sofa?", options: ["Yes, there is.", "Yes, there are.", "Yes, is there.", "Yes, it are."], a: "Yes, there is." },
            { q: "Are there five rooms in the house?", options: ["Yes, there are.", "Yes, there is.", "Yes, are there.", "No, there isn't."], a: "Yes, there are." },
            { q: "Is the door brown?", options: ["Yes, it is.", "Yes, they are.", "Yes, it are.", "No, there isn't."], a: "Yes, it is." },
            { q: "Where do you sleep?", options: ["In the bedroom.", "On the ceiling.", "In the chimney.", "In the fridge."], a: "In the bedroom." },
            { q: "What protects the house from rain?", options: ["The roof.", "The rug.", "The lamp.", "The sofa."], a: "The roof." },
            { q: "Where do we park the car?", options: ["In the garage.", "In the bathroom.", "On the bed.", "In the dining room."], a: "In the garage." },
            { q: "What do you use to sleep on?", options: ["A bed and a pillow.", "A desk and a chair.", "A stove and a fridge.", "A wall and a door."], a: "A bed and a pillow." },
            { q: "What color is the sky?", options: ["Blue.", "Green.", "Brown.", "Black."], a: "Blue." },
            { q: "Where do we usually make dinner?", options: ["In the kitchen.", "In the bedroom.", "In the wardrobe.", "On the roof."], a: "In the kitchen." },
            { q: "What do you put on the floor?", options: ["A rug.", "A ceiling.", "A roof.", "A window."], a: "A rug." },
            { q: "What do you open to look outside?", options: ["A window.", "A pillow.", "A blanket.", "A shelf."], a: "A window." },
            { q: "What do children do in the yard?", options: ["They play.", "They sleep in beds.", "They take a shower.", "They cook food."], a: "They play." },
            { q: "What furniture is usually in the living room?", options: ["A sofa and a TV.", "A bed and a wardrobe.", "A toilet and a shower.", "A stove and a fridge."], a: "A sofa and a TV." },
            { q: "Where do you wash your hands?", options: ["In the bathroom.", "In the wardrobe.", "On the balcony.", "On the stairs."], a: "In the bathroom." },
            { q: "What comes from the chimney?", options: ["Smoke.", "Water.", "Grass.", "Cars."], a: "Smoke." },
            { q: "Where are the flowers?", options: ["In the garden.", "On the ceiling.", "In the fridge.", "Under the rug."], a: "In the garden." },
            { q: "What do we do at the desk?", options: ["We study.", "We take a shower.", "We cook dinner.", "We sleep all night."], a: "We study." },
            { q: "Where do you keep your clothes?", options: ["In the wardrobe.", "In the fridge.", "On the ceiling.", "In the garden."], a: "In the wardrobe." },
            { q: "What do you turn on to see in the dark?", options: ["A lamp.", "A chair.", "A blanket.", "A bed."], a: "A lamp." },
            { q: "What covers the top of the room inside?", options: ["The ceiling.", "The floor.", "The rug.", "The grass."], a: "The ceiling." },
            { q: "How do you go up to the second floor?", options: ["On the stairs.", "On the window.", "On the wall.", "On the door."], a: "On the stairs." },
            { q: "What do you use to stay warm in bed?", options: ["A blanket.", "A desk.", "A shelf.", "A picture."], a: "A blanket." },
            { q: "Where do you usually eat with your family?", options: ["In the dining room.", "In the garage.", "In the bathroom.", "On the roof."], a: "In the dining room." }
        ],

        // --- TYPE 4: FIND MEANING (40 ITEMS) ---
        4: [
            { sent: "The **kitchen** is my favorite room.", word: "kitchen", options: ["Quarto (de dormir)", "Cozinha", "Banheiro", "Sala de estar"], a: "Cozinha", def: "A room or area where food is prepared and cooked." },
            { sent: "My clothes are in the **wardrobe**.", word: "wardrobe", options: ["Cama", "Janela", "Guarda-roupa / Armário", "Prateleira"], a: "Guarda-roupa / Armário", def: "A large, tall cabinet in which clothes may be hung or stored." },
            { sent: "Let's **explore** the garden.", word: "explore", options: ["Comer", "Explorar", "Proteger", "Brincar"], a: "Explorar", def: "To travel through an unfamiliar area to learn about it." },
            { sent: "The **blanket** is warm.", word: "blanket", options: ["Travesseiro", "Cobertor", "Tapete", "Cortina"], a: "Cobertor", def: "A large piece of woolen or similar material used as a bed covering for warmth." },
            { sent: "Smoke comes from the **chimney**.", word: "chimney", options: ["Telhado", "Teto", "Sacada", "Chaminé"], a: "Chaminé", def: "A vertical channel or pipe that conducts smoke and combustion gases up from a fire or furnace." },
            { sent: "I sleep on a soft **pillow**.", word: "pillow", options: ["Cadeira", "Travesseiro", "Mesa", "Cama"], a: "Travesseiro", def: "A soft support for the head during sleep." },
            { sent: "The car is in the **garage**.", word: "garage", options: ["Jardim", "Cozinha", "Garagem", "Corredor"], a: "Garagem", def: "A building for housing a motor vehicle or vehicles." },
            { sent: "The books are on the **shelf**.", word: "shelf", options: ["Prateleira / Estante", "Parede", "Chão / Piso", "Porta"], a: "Prateleira / Estante", def: "A flat length of wood or rigid material attached to a wall or forming part of a piece of furniture, used to hold things." },
            { sent: "We **laugh** at the funny movie.", word: "laugh", options: ["Conversar", "Dizer", "Rir", "Ver"], a: "Rir", def: "To make sounds that show you think something is funny." },
            { sent: "The **ceiling** is high.", word: "ceiling", options: ["Telhado", "Parede", "Teto (interno)", "Escadas"], a: "Teto (interno)", def: "The upper interior surface of a room." },
            { sent: "The TV is in the **living room**.", word: "living room", options: ["Sala de jantar", "Cozinha", "Banheiro", "Sala de estar"], a: "Sala de estar", def: "A room in a house for general everyday use." },
            { sent: "Dinner is in the **dining room**.", word: "dining room", options: ["Garagem", "Sala de jantar", "Corredor", "Quarto (de dormir)"], a: "Sala de jantar", def: "A room in a house where meals are eaten." },
            { sent: "Wash your hands in the **bathroom**.", word: "bathroom", options: ["Sala de estar", "Banheiro", "Cozinha", "Garagem"], a: "Banheiro", def: "A room containing a toilet and sink and typically also a bathtub or shower." },
            { sent: "The flowers are in the **garden**.", word: "garden", options: ["Parede", "Chão / Piso", "Jardim / Quintal", "Telhado"], a: "Jardim / Quintal", def: "A piece of ground adjoining a house, used for growing flowers, fruit, or vegetables." },
            { sent: "Walk down the **hall**.", word: "hall", options: ["Escadas", "Corredor", "Sacada", "Parede"], a: "Corredor", def: "A passage or corridor in a building." },
            { sent: "The apple is **red**.", word: "red", options: ["Azul", "Verde", "Vermelho", "Amarelo"], a: "Vermelho", def: "The color of blood or fire." },
            { sent: "The sky is **blue**.", word: "blue", options: ["Rosa", "Azul", "Cinza", "Branco"], a: "Azul", def: "The color of the sky or sea." },
            { sent: "The sun is **yellow**.", word: "yellow", options: ["Amarelo", "Laranja", "Preto", "Marrom"], a: "Amarelo", def: "The color of the sun or a lemon." },
            { sent: "The grass is **green**.", word: "green", options: ["Azul", "Verde", "Vermelho", "Roxo"], a: "Verde", def: "The color of grass or leaves." },
            { sent: "The orange is **orange**.", word: "orange", options: ["Roxo", "Laranja", "Rosa", "Branco"], a: "Laranja", def: "The color of an orange fruit." },
            { sent: "The flower is **purple**.", word: "purple", options: ["Roxo", "Marrom", "Cinza", "Preto"], a: "Roxo", def: "A color intermediate between red and blue." },
            { sent: "The door is **brown**.", word: "brown", options: ["Branco", "Marrom", "Cinza", "Preto"], a: "Marrom", def: "The color of earth or wood." },
            { sent: "The cat is **black**.", word: "black", options: ["Azul", "Verde", "Preto", "Amarelo"], a: "Preto", def: "The darkest color, the result of the absence of light." },
            { sent: "The wall is **white**.", word: "white", options: ["Branco", "Rosa", "Cinza", "Marrom"], a: "Branco", def: "The color of milk or fresh snow." },
            { sent: "The cloud is **gray**.", word: "gray", options: ["Cinza", "Preto", "Azul", "Verde"], a: "Cinza", def: "An intermediate color between black and white." },
            { sent: "The pig is **pink**.", word: "pink", options: ["Roxo", "Laranja", "Rosa", "Amarelo"], a: "Rosa", def: "A pale red color." },
            { sent: "The **bed** is soft.", word: "bed", options: ["Mesa", "Cadeira", "Cama", "Porta"], a: "Cama", def: "A piece of furniture for sleeping or resting on." },
            { sent: "My computer is on the **desk**.", word: "desk", options: ["Escrivaninha", "Guarda-roupa", "Cama", "Janela"], a: "Escrivaninha", def: "A piece of furniture with a flat or sloping surface and typically with drawers, at which one can read, write, or do other work." },
            { sent: "Sit on the **chair**.", word: "chair", options: ["Tapete", "Cadeira", "Cama", "Escadas"], a: "Cadeira", def: "A separate seat for one person, typically with a back and four legs." },
            { sent: "The **rug** is on the floor.", word: "rug", options: ["Tapete", "Teto", "Telhado", "Parede"], a: "Tapete", def: "A floor covering." },
            { sent: "Open the **window**.", word: "window", options: ["Porta", "Janela", "Cama", "Cadeira"], a: "Janela", def: "An opening in the wall or roof of a building to admit light or air." },
            { sent: "Close the **door**.", word: "door", options: ["Janela", "Porta", "Parede", "Teto"], a: "Porta", def: "A movable barrier used to open and close an entrance." },
            { sent: "The **curtains** are blue.", word: "curtains", options: ["Cortinas", "Tapetes", "Cadeiras", "Camas"], a: "Cortinas", def: "A piece of material suspended at the top to form a covering or screen, typically at a window." },
            { sent: "Turn on the **lamp**.", word: "lamp", options: ["Cadeira", "Mesa", "Luminária / Abajur", "Guarda-roupa"], a: "Luminária / Abajur", def: "A device for giving light." },
            { sent: "The **wall** is white.", word: "wall", options: ["Parede", "Chão", "Teto", "Telhado"], a: "Parede", def: "A continuous vertical brick or stone structure that encloses or divides an area." },
            { sent: "The **floor** is clean.", word: "floor", options: ["Teto", "Parede", "Chão / Piso", "Porta"], a: "Chão / Piso", def: "The lower surface of a room, on which one may walk." },
            { sent: "The **roof** is red.", word: "roof", options: ["Parede", "Chão", "Telhado", "Sacada"], a: "Telhado", def: "The structure forming the upper covering of a building." },
            { sent: "Go up the **stairs**.", word: "stairs", options: ["Escadas", "Janelas", "Portas", "Chaminés"], a: "Escadas", def: "A set of steps leading from one floor of a building to another." },
            { sent: "She is on the **balcony**.", word: "balcony", options: ["Garagem", "Sacada / Varanda", "Cozinha", "Escada"], a: "Sacada / Varanda", def: "A platform enclosed by a wall or balustrade on the outside of a building." },
            { sent: "They **live** in an apartment.", word: "live", options: ["Viver / morar", "Estudar", "Brincar / jogar", "Dormir"], a: "Viver / morar", def: "To make one's home in a particular place." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 ITEMS) ---
        5: [
            { sent: "There **are** a bed in the room.", correct: "is" },
            { sent: "There **is** two chairs.", correct: "are" },
            { sent: "I see **a** orange car.", correct: "an" },
            { sent: "This is **an** house.", correct: "a" },
            { sent: "There are three **child** in the garden.", correct: "children" },
            { sent: "The **peoples** are in the living room.", correct: "people" },
            { sent: "I brush my **tooths** every day.", correct: "teeth" },
            { sent: "There **no is** a garage.", correct: "isn't" },
            { sent: "**Is there** two windows?", correct: "Are there" },
            { sent: "We have two **boxs**.", correct: "boxes" },
            { sent: "My room **are** small.", correct: "is" },
            { sent: "The walls **is** white.", correct: "are" },
            { sent: "There aren't **a** beds in the kitchen.", correct: "any" },
            { sent: "The cat is **on** the garage.", correct: "in" },
            { sent: "Two **man** are on the roof.", correct: "men" },
            { sent: "The baby has two small **foots**.", correct: "feet" },
            { sent: "I have three **familys**.", correct: "families" },
            { sent: "There **not are** windows.", correct: "aren't" },
            { sent: "This is a **apartament**.", correct: "an apartment" },
            { sent: "**Are there** a lamp on the desk?", correct: "Is there" },
            { sent: "There **is** five rooms in the house.", correct: "are" },
            { sent: "Look at the two **woman** in the garden.", correct: "women" },
            { sent: "I eat an apple and a **oranges**.", correct: "orange" },
            { sent: "**Are** there a TV?", correct: "Is" },
            { sent: "There **aren't** a computer on the desk.", correct: "isn't" },
            { sent: "The kids **plays** in the yard.", correct: "play" },
            { sent: "**Tem** a big window in my room.", correct: "There is" },
            { sent: "She have two **watchs**.", correct: "watches" },
            { sent: "I need **a** umbrella.", correct: "an" },
            { sent: "There are two **pillow** on the bed.", correct: "pillows" },
            { sent: "The house **have** a red roof.", correct: "has" },
            { sent: "There **isn't** two bathrooms.", correct: "aren't" },
            { sent: "The **childs** are happy.", correct: "children" },
            { sent: "We see **an** bird.", correct: "a" },
            { sent: "The two **person** are in the living room.", correct: "people" },
            { sent: "I have **a** old desk.", correct: "an" },
            { sent: "There **are not** a car in the garage.", correct: "is not" },
            { sent: "Look at the three **cat**.", correct: "cats" },
            { sent: "**Is** there books on the shelf?", correct: "Are" },
            { sent: "He has two **potato**.", correct: "potatoes" }
        ],

        
        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Group 1
            { pairs: [{a: "Where is the bathroom?", b: "It's upstairs."}, {a: "Is there a garage?", b: "Yes, there is."}, {a: "Are there two beds?", b: "No, there aren't."}, {a: "How many rooms are there?", b: "There are five."}, {a: "What color is the door?", b: "It's blue."}] },
            // Group 2
            { pairs: [{a: "Where do you sleep?", b: "In my bedroom."}, {a: "What do you make in the kitchen?", b: "We make dinner."}, {a: "Where is the car?", b: "In the garage."}, {a: "What color is a banana?", b: "It's yellow."}, {a: "What is on the floor?", b: "A rug."}] },
            // Group 3
            { pairs: [{a: "Is there a garden?", b: "Yes, it is behind the kitchen."}, {a: "Are there children in the house?", b: "No, there aren't."}, {a: "What is in the living room?", b: "A TV and a sofa."}, {a: "Where do you play?", b: "In the yard."}, {a: "What do you see?", b: "I see a lamp."}] },
            // Group 4
            { pairs: [{a: "Is the bed soft?", b: "Yes, it is."}, {a: "Are the curtains blue?", b: "Yes, they are."}, {a: "Where do you study?", b: "At my desk."}, {a: "What color is the sky?", b: "It's blue."}, {a: "Is the wall white?", b: "Yes, it is."}] },
            // Group 5
            { pairs: [{a: "Do you live in an apartment?", b: "Yes, I do."}, {a: "Where do people eat?", b: "In the dining room."}, {a: "What covers the house?", b: "The roof."}, {a: "How many bathrooms are there?", b: "There is one."}, {a: "What color is the cat?", b: "It is black."}] },
            // Group 6
            { pairs: [{a: "Is the floor clean?", b: "Yes, it is very clean."}, {a: "Where is the fridge?", b: "In the kitchen."}, {a: "Are there books on the shelf?", b: "Yes, there are."}, {a: "What is your favorite room?", b: "The bedroom."}, {a: "What do you wash in the bathroom?", b: "My hands."}] },
            // Group 7
            { pairs: [{a: "Are the walls yellow?", b: "Yes, they are yellow."}, {a: "Is the ceiling high?", b: "Yes, it is high."}, {a: "Where does smoke come from?", b: "From the chimney."}, {a: "What color is the pig?", b: "It is pink."}, {a: "Are there men on the roof?", b: "Yes, there are two men."}] },
            // Group 8
            { pairs: [{a: "Is this a big house?", b: "Yes, it is big."}, {a: "Where is the dog?", b: "On the rug."}, {a: "What do you do at the funny movie?", b: "We laugh."}, {a: "Where do you put your clothes?", b: "In the wardrobe."}, {a: "What color is an apple?", b: "It is red."}] },
            // Group 9
            { pairs: [{a: "What color is the grass?", b: "It is green."}, {a: "What do you use to see in the dark?", b: "A lamp."}, {a: "Where do you walk?", b: "Down the hall."}, {a: "What do you use to sleep?", b: "A pillow and a blanket."}, {a: "Is the house nice?", b: "Yes, it is very nice."}] },
            // Group 10
            { pairs: [{a: "Is she on the balcony?", b: "Yes, she is."}, {a: "Where do you go up?", b: "The stairs."}, {a: "Is the room small?", b: "Yes, my room is small."}, {a: "Are the flowers in the garden?", b: "Yes, they are."}, {a: "What color is the cloud?", b: "It is gray."}] },
            // Group 11
            { pairs: [{a: "This is", b: "the living room."}, {a: "Make yourself", b: "at home."}, {a: "There is", b: "a big window."}, {a: "My favorite room", b: "is the kitchen."}, {a: "Go up", b: "the stairs."}] },
            // Group 12
            { pairs: [{a: "I live in", b: "an apartment."}, {a: "The TV is", b: "in the living room."}, {a: "The fridge is", b: "in the kitchen."}, {a: "Wash your hands", b: "in the bathroom."}, {a: "The car is", b: "in the garage."}] },
            // Group 13
            { pairs: [{a: "The flowers are", b: "in the garden."}, {a: "Walk down", b: "the hall."}, {a: "The apple", b: "is red."}, {a: "The sun", b: "is yellow."}, {a: "The sky", b: "is blue."}] },
            // Group 14
            { pairs: [{a: "The grass", b: "is green."}, {a: "The door", b: "is brown."}, {a: "The cat", b: "is black."}, {a: "The wall", b: "is white."}, {a: "The cloud", b: "is gray."}] },
            // Group 15
            { pairs: [{a: "The bed", b: "is soft."}, {a: "I sleep on", b: "a pillow."}, {a: "The blanket", b: "is warm."}, {a: "My clothes are", b: "in the wardrobe."}, {a: "My computer is", b: "on the desk."}] },
            // Group 16
            { pairs: [{a: "Sit on", b: "the chair."}, {a: "The rug is", b: "on the floor."}, {a: "Open", b: "the window."}, {a: "Close", b: "the door."}, {a: "The books are", b: "on the shelf."}] },
            // Group 17
            { pairs: [{a: "The curtains", b: "are blue."}, {a: "Turn on", b: "the lamp."}, {a: "The floor", b: "is clean."}, {a: "The ceiling", b: "is high."}, {a: "The roof", b: "is red."}] },
            // Group 18
            { pairs: [{a: "She is on", b: "the balcony."}, {a: "Smoke comes from", b: "the chimney."}, {a: "We make dinner", b: "in the kitchen."}, {a: "Kids play", b: "in the yard."}, {a: "We laugh at", b: "the funny movie."}] },
            // Group 19
            { pairs: [{a: "There are three", b: "bedrooms upstairs."}, {a: "I see", b: "an orange rug."}, {a: "This is an", b: "old house."}, {a: "Let's explore", b: "the garden."}, {a: "The roof protects us", b: "from rain."}] },
            // Group 20
            { pairs: [{a: "Can you find", b: "the bathroom?"}, {a: "There is a green sofa", b: "and a TV."}, {a: "We talk in", b: "the living room."}, {a: "There are two men", b: "fixing the roof."}, {a: "I have two pillows", b: "and three watches."}] },
            // Group 21
            { pairs: [{a: "House", b: "Casa"}, {a: "Room", b: "Cômodo / Quarto"}, {a: "Living room", b: "Sala de estar"}, {a: "Dining room", b: "Sala de jantar"}, {a: "Kitchen", b: "Cozinha"}] },
            // Group 22
            { pairs: [{a: "Bedroom", b: "Quarto (de dormir)"}, {a: "Bathroom", b: "Banheiro"}, {a: "Garage", b: "Garagem"}, {a: "Garden", b: "Jardim / Quintal"}, {a: "Hall", b: "Corredor"}] },
            // Group 23
            { pairs: [{a: "Bed", b: "Cama"}, {a: "Pillow", b: "Travesseiro"}, {a: "Blanket", b: "Cobertor"}, {a: "Wardrobe", b: "Guarda-roupa / Armário"}, {a: "Desk", b: "Escrivaninha"}] },
            // Group 24
            { pairs: [{a: "Chair", b: "Cadeira"}, {a: "Rug", b: "Tapete"}, {a: "Window", b: "Janela"}, {a: "Door", b: "Porta"}, {a: "Shelf", b: "Prateleira / Estante"}] },
            // Group 25
            { pairs: [{a: "Curtains", b: "Cortinas"}, {a: "Lamp", b: "Luminária / Abajur"}, {a: "Wall", b: "Parede"}, {a: "Floor", b: "Chão / Piso"}, {a: "Ceiling", b: "Teto (interno)"}] },
            // Group 26
            { pairs: [{a: "Roof", b: "Telhado"}, {a: "Stairs", b: "Escadas"}, {a: "Balcony", b: "Sacada / Varanda"}, {a: "Chimney", b: "Chaminé"}, {a: "Color", b: "Cor"}] },
            // Group 27
            { pairs: [{a: "Red", b: "Vermelho"}, {a: "Blue", b: "Azul"}, {a: "Yellow", b: "Amarelo"}, {a: "Green", b: "Verde"}, {a: "Orange", b: "Laranja"}] },
            // Group 28
            { pairs: [{a: "Purple", b: "Roxo"}, {a: "Brown", b: "Marrom"}, {a: "Black", b: "Preto"}, {a: "White", b: "Branco"}, {a: "Gray", b: "Cinza"}] },
            // Group 29
            { pairs: [{a: "Pink", b: "Rosa"}, {a: "To be", b: "Ser / estar"}, {a: "Have", b: "Ter"}, {a: "Sleep", b: "Dormir"}, {a: "Make", b: "Fazer"}] },
            // Group 30
            { pairs: [{a: "Find", b: "Encontrar"}, {a: "See", b: "Ver"}, {a: "Say", b: "Dizer"}, {a: "Explore", b: "Explorar"}, {a: "Protect", b: "Proteger"}] },
            // Group 31
            { pairs: [{a: "Kitchen", b: "Onde preparamos e cozinhamos a comida."}, {a: "Bedroom", b: "O cômodo onde dormimos."}, {a: "Bathroom", b: "Onde lavamos as mãos e tomamos banho."}, {a: "Dining room", b: "Onde sentamos para comer as refeições."}, {a: "Living room", b: "Onde fica o sofá e a TV."}] },
            // Group 32
            { pairs: [{a: "Bed", b: "O móvel macio para deitar e dormir."}, {a: "Wardrobe", b: "O armário alto onde guardamos roupas."}, {a: "Desk", b: "A mesa onde estudamos ou usamos o computador."}, {a: "Chair", b: "O objeto onde nos sentamos."}, {a: "Shelf", b: "A prateleira onde colocamos livros."}] },
            // Group 33
            { pairs: [{a: "Window", b: "A abertura na parede para ver fora ou entrar ar."}, {a: "Door", b: "O que abrimos para entrar ou sair do quarto."}, {a: "Lamp", b: "O que ligamos para ter luz à noite."}, {a: "Rug", b: "O tapete que fica no chão."}, {a: "Pillow", b: "Onde apoiamos a cabeça para dormir."}] },
            // Group 34
            { pairs: [{a: "Blanket", b: "O cobertor que nos aquece na cama."}, {a: "Curtains", b: "O tecido que cobre a janela."}, {a: "Wall", b: "A parede que divide os cômodos."}, {a: "Floor", b: "O piso onde andamos dentro de casa."}, {a: "Ceiling", b: "O teto que vemos quando olhamos para cima no quarto."}] },
            // Group 35
            { pairs: [{a: "Roof", b: "O telhado do lado de fora que protege da chuva."}, {a: "Stairs", b: "Os degraus que usamos para subir para o outro andar."}, {a: "Balcony", b: "A sacada ou varanda do lado de fora."}, {a: "Chimney", b: "O tubo no telhado por onde sai a fumaça."}, {a: "Garage", b: "O lugar fechado onde guardamos o carro."}] },
            // Group 36
            { pairs: [{a: "Garden", b: "O quintal ou jardim com grama e flores."}, {a: "Red", b: "A cor da maçã ou do sangue."}, {a: "Yellow", b: "A cor do sol ou da banana."}, {a: "Blue", b: "A cor do céu e do mar."}, {a: "Green", b: "A cor da grama e das árvores."}] },
            // Group 37
            { pairs: [{a: "Orange", b: "A cor da laranja (fruta)."}, {a: "Purple", b: "A cor roxa, mistura de azul e vermelho."}, {a: "Brown", b: "A cor marrom, como a madeira ou terra."}, {a: "Black", b: "A cor preta, a mais escura."}, {a: "White", b: "A cor branca, como a neve ou o leite."}] },
            // Group 38
            { pairs: [{a: "Gray", b: "A cor cinza, como as nuvens de chuva."}, {a: "Pink", b: "A cor rosa, vermelho bem claro."}, {a: "Sleep", b: "Fechar os olhos e descansar na cama."}, {a: "Make", b: "Fazer, criar ou preparar algo."}, {a: "See", b: "Usar os olhos para enxergar."}] },
            // Group 39
            { pairs: [{a: "Eat", b: "Colocar comida na boca e comer."}, {a: "Laugh", b: "Rir de uma coisa muito engraçada."}, {a: "Play", b: "Brincar no jardim ou jogar um jogo."}, {a: "Study", b: "Estudar e aprender algo novo na escrivaninha."}, {a: "Talk", b: "Conversar e dizer palavras com outras pessoas."}] },
            // Group 40
            { pairs: [{a: "Find", b: "Encontrar algo que você estava procurando."}, {a: "Protect", b: "Proteger e manter seguro, como o telhado faz com a chuva."}, {a: "Live", b: "Morar ou viver em uma casa."}, {a: "Explore", b: "Explorar e conhecer um lugar diferente."}, {a: "Say", b: "Falar ou dizer \"olá\"."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 ITEMS) ---
        7: [
            { q: "Where do you sleep?", options: ["In the bedroom.", "In the fridge.", "On the roof.", "In the chimney."], a: "In the bedroom." },
            { q: "What color is the sky?", options: ["Blue.", "Brown.", "Green.", "Pink."], a: "Blue." },
            { q: "How many bedrooms are there?", options: ["There are three.", "It is green.", "Yes, there is.", "I like apples."], a: "There are three." },
            { q: "Where do we make dinner?", options: ["In the kitchen.", "In the garage.", "On the balcony.", "In the wardrobe."], a: "In the kitchen." },
            { q: "What is on the floor?", options: ["A rug.", "A cloud.", "The sun.", "A ceiling."], a: "A rug." },
            { q: "Where is the car?", options: ["In the garage.", "On the bed.", "In the bathroom.", "On the shelf."], a: "In the garage." },
            { q: "What color is an apple?", options: ["Red.", "Blue.", "Black.", "Gray."], a: "Red." },
            { q: "Where do you take a shower?", options: ["In the bathroom.", "In the kitchen.", "On the stairs.", "In the garden."], a: "In the bathroom." },
            { q: "What do you put on the bed to stay warm?", options: ["A blanket.", "A window.", "A desk.", "A wall."], a: "A blanket." },
            { q: "Where do kids usually play outside?", options: ["In the yard.", "In the fridge.", "On the ceiling.", "In the wardrobe."], a: "In the yard." },
            { q: "What protects the house from rain?", options: ["The roof.", "The rug.", "The bed.", "The lamp."], a: "The roof." },
            { q: "Where do you find a stove and a fridge?", options: ["In the kitchen.", "In the bedroom.", "In the hall.", "In the chimney."], a: "In the kitchen." },
            { q: "What color is the sun?", options: ["Yellow.", "Purple.", "Brown.", "Gray."], a: "Yellow." },
            { q: "Where do people eat together?", options: ["In the dining room.", "In the bathroom.", "In the chimney.", "In the closet."], a: "In the dining room." },
            { q: "What do you use to see in the dark?", options: ["A lamp.", "A chair.", "A rug.", "A shelf."], a: "A lamp." },
            { q: "What color is the grass?", options: ["Green.", "Red.", "Blue.", "Pink."], a: "Green." },
            { q: "Where are your clothes?", options: ["In the wardrobe.", "In the fridge.", "On the ceiling.", "In the window."], a: "In the wardrobe." },
            { q: "What do you read on the shelf?", options: ["Books.", "Rugs.", "Beds.", "Doors."], a: "Books." },
            { q: "Where is the TV?", options: ["In the living room.", "In the garden.", "On the roof.", "In the shower."], a: "In the living room." },
            { q: "What color is the cloud on a rainy day?", options: ["Gray.", "Pink.", "Yellow.", "Orange."], a: "Gray." },
            { q: "Where do you find flowers?", options: ["In the garden.", "On the ceiling.", "In the wardrobe.", "Under the stairs."], a: "In the garden." },
            { q: "What do you open to get air in the room?", options: ["The window.", "The rug.", "The floor.", "The wall."], a: "The window." },
            { q: "How do you go up to the second floor?", options: ["The stairs.", "The door.", "The window.", "The ceiling."], a: "The stairs." },
            { q: "What covers the window?", options: ["Curtains.", "Stairs.", "Beds.", "Pillows."], a: "Curtains." },
            { q: "What color is the darkest color?", options: ["Black.", "White.", "Yellow.", "Pink."], a: "Black." },
            { q: "Where do you sit when you study?", options: ["On a chair.", "On a lamp.", "On a wall.", "On a door."], a: "On a chair." },
            { q: "Where do you put your computer?", options: ["On the desk.", "On the ceiling.", "In the fridge.", "On the roof."], a: "On the desk." },
            { q: "What color is milk?", options: ["White.", "Green.", "Black.", "Orange."], a: "White." },
            { q: "What comes out of a chimney?", options: ["Smoke.", "Grass.", "Cars.", "Desks."], a: "Smoke." },
            { q: "Where do you go to sleep?", options: ["To my bedroom.", "To the garage.", "To the roof.", "To the chimney."], a: "To my bedroom." },
            { q: "What color is a pig?", options: ["Pink.", "Blue.", "Green.", "Yellow."], a: "Pink." },
            { q: "Where does the family talk and watch TV?", options: ["In the living room.", "On the stairs.", "In the garage.", "In the garden."], a: "In the living room." },
            { q: "What do you put your head on when you sleep?", options: ["A pillow.", "A chair.", "A desk.", "A window."], a: "A pillow." },
            { q: "How many rooms are in your house?", options: ["There are four rooms.", "It is red.", "No, it isn't.", "I like the dog."], a: "There are four rooms." },
            { q: "Where do you stand to look outside from upstairs?", options: ["On the balcony.", "In the fridge.", "Under the bed.", "In the wardrobe."], a: "On the balcony." },
            { q: "What is the color of wood or dirt?", options: ["Brown.", "Pink.", "White.", "Blue."], a: "Brown." },
            { q: "What do you walk down to go to other rooms?", options: ["The hall.", "The ceiling.", "The lamp.", "The curtain."], a: "The hall." },
            { q: "What is the upper interior surface of a room?", options: ["The ceiling.", "The floor.", "The rug.", "The garden."], a: "The ceiling." },
            { q: "What do you do at a funny movie?", options: ["I laugh.", "I take a shower.", "I cook dinner.", "I sleep on a desk."], a: "I laugh." },
            { q: "What is a piece of furniture with a flat surface for working?", options: ["A desk.", "A door.", "A wall.", "A roof."], a: "A desk." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 ITEMS) ---
        8: [
            { sent: "I cook dinner in the **bathroom**.", wrong: "bathroom", options: ["kitchen", "garden", "roof", "pillow"], a: "kitchen" },
            { sent: "I sleep on my **stove** every night.", wrong: "stove", options: ["bed", "garage", "fridge", "window"], a: "bed" },
            { sent: "We park the car in the **wardrobe**.", wrong: "wardrobe", options: ["garage", "living room", "ceiling", "plate"], a: "garage" },
            { sent: "Wash your hands in the **chimney**.", wrong: "chimney", options: ["bathroom", "stairs", "balcony", "cloud"], a: "bathroom" },
            { sent: "The beautiful flowers are in the **fridge**.", wrong: "fridge", options: ["garden", "ceiling", "rug", "desk"], a: "garden" },
            { sent: "Look at the TV in the **garden**.", wrong: "garden", options: ["living room", "roof", "sky", "window"], a: "living room" },
            { sent: "The books are on the **shower**.", wrong: "shower", options: ["shelf", "grass", "apple", "sun"], a: "shelf" },
            { sent: "I put my head on a soft **desk** to sleep.", wrong: "desk", options: ["pillow", "car", "stairs", "wall"], a: "pillow" },
            { sent: "Open the **floor** to let the air in.", wrong: "floor", options: ["window", "blanket", "chair", "cloud"], a: "window" },
            { sent: "The **grass** protects the house from the rain.", wrong: "grass", options: ["roof", "cat", "bed", "rug"], a: "roof" },
            { sent: "Close the **sun** when you leave the house.", wrong: "sun", options: ["door", "sky", "grass", "apple"], a: "door" },
            { sent: "I wear a warm **window** when it is cold in bed.", wrong: "window", options: ["blanket", "chair", "desk", "lamp"], a: "blanket" },
            { sent: "We eat dinner on the table in the **garage**.", wrong: "garage", options: ["dining room", "wardrobe", "stairs", "chimney"], a: "dining room" },
            { sent: "Turn on the **bed** so we can see in the dark.", wrong: "bed", options: ["lamp", "rug", "floor", "plant"], a: "lamp" },
            { sent: "I hang my clothes in the **fridge**.", wrong: "fridge", options: ["wardrobe", "roof", "garden", "desk"], a: "wardrobe" },
            { sent: "Walk down the **ceiling** to find the bedroom.", wrong: "ceiling", options: ["hall", "cloud", "sun", "tree"], a: "hall" },
            { sent: "The blue **ceiling** are on the floor.", wrong: "ceiling", options: ["rugs", "lamps", "windows", "roofs"], a: "rugs" },
            { sent: "The blue **doors** are on the window.", wrong: "doors", options: ["curtains", "chairs", "beds", "desks"], a: "curtains" },
            { sent: "The **sky** is brown and made of wood.", wrong: "sky", options: ["door", "cloud", "grass", "water"], a: "door" },
            { sent: "Go up the **balcony** to the second floor.", wrong: "balcony", options: ["stairs", "kitchen", "fridge", "lamp"], a: "stairs" },
            { sent: "Smoke comes out of the **wardrobe**.", wrong: "wardrobe", options: ["chimney", "sink", "bed", "desk"], a: "chimney" },
            { sent: "I sit on a **wall** at my desk to study.", wrong: "wall", options: ["chair", "ceiling", "roof", "cloud"], a: "chair" },
            { sent: "Look up at the white **floor** inside the room.", wrong: "floor", options: ["ceiling", "grass", "car", "fridge"], a: "ceiling" },
            { sent: "The **lamp** is green and grows in the yard.", wrong: "lamp", options: ["grass", "sky", "door", "roof"], a: "grass" },
            { sent: "The **apple** is a big animal that says meow.", wrong: "apple", options: ["cat", "wall", "window", "blanket"], a: "cat" },
            { sent: "The car drives on the **ceiling**.", wrong: "ceiling", options: ["floor", "sky", "wall", "roof"], a: "floor" },
            { sent: "I do my homework on the **shower**.", wrong: "shower", options: ["desk", "chimney", "ceiling", "fridge"], a: "desk" },
            { sent: "The family watches **books** in the living room.", wrong: "books", options: ["TV", "grass", "sky", "door"], a: "TV" },
            { sent: "The sky is very **green** today.", wrong: "green", options: ["blue", "wooden", "soft", "tall"], a: "blue" },
            { sent: "The sun is a bright **purple** star.", wrong: "purple", options: ["yellow", "black", "gray", "brown"], a: "yellow" },
            { sent: "My favorite **number** is the kitchen.", wrong: "number", options: ["room", "animal", "food", "sky"], a: "room" },
            { sent: "I see a big **cloud** on the floor of the living room.", wrong: "cloud", options: ["rug", "sky", "sun", "chimney"], a: "rug" },
            { sent: "The **cat** protects the house from rain.", wrong: "cat", options: ["roof", "fridge", "rug", "bed"], a: "roof" },
            { sent: "She is standing outside on the **fridge**.", wrong: "fridge", options: ["balcony", "stove", "sink", "wardrobe"], a: "balcony" },
            { sent: "They live in a tall **garden** in the city.", wrong: "garden", options: ["apartment", "bed", "chair", "desk"], a: "apartment" },
            { sent: "The wall is made of red **pillows**.", wrong: "pillows", options: ["bricks", "clouds", "sky", "water"], a: "bricks" },
            { sent: "We **sleep** our food in the dining room.", wrong: "sleep", options: ["eat", "jump", "fly", "swim"], a: "eat" },
            { sent: "Kids **study** with toys in the yard.", wrong: "study", options: ["play", "sleep", "cook", "read"], a: "play" },
            { sent: "The apple is a delicious red **furniture**.", wrong: "furniture", options: ["fruit", "animal", "building", "car"], a: "fruit" },
            { sent: "The **bed** gives light to the room.", wrong: "bed", options: ["lamp", "rug", "pillow", "chair"], a: "lamp" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 ITEMS) ---
        9: [
            { audio: "Where is the bathroom?", options: ["It is upstairs.", "It is green.", "In the fridge.", "On the ceiling."], a: "It is upstairs." },
            { audio: "Is there a garden?", options: ["Yes, there is.", "Yes, they are.", "No, it's a dog.", "Blue."], a: "Yes, there is." },
            { audio: "How many bedrooms are there?", options: ["There are three.", "It is very soft.", "Yes, there is.", "In the kitchen."], a: "There are three." },
            { audio: "What color is the door?", options: ["It is brown.", "Five rooms.", "A big window.", "Yes, it is."], a: "It is brown." },
            { audio: "Where is the car?", options: ["In the garage.", "In the wardrobe.", "On the desk.", "In the sky."], a: "In the garage." },
            { audio: "Where do you sleep?", options: ["In my bedroom.", "In the chimney.", "On the roof.", "In the shower."], a: "In my bedroom." },
            { audio: "What is on the desk?", options: ["A computer.", "A car.", "A garden.", "A roof."], a: "A computer." },
            { audio: "Is the wall white?", options: ["Yes, it is.", "Five.", "No, they aren't.", "In the hall."], a: "Yes, it is." },
            { audio: "Are there children in the house?", options: ["No, there aren't.", "Yes, it is.", "It is a cat.", "On the rug."], a: "No, there aren't." },
            { audio: "What do you do in the kitchen?", options: ["I make dinner.", "I take a shower.", "I sleep on a bed.", "I drive a car."], a: "I make dinner." },
            { audio: "What color is the sky?", options: ["Blue.", "Pink.", "Brown.", "Wooden."], a: "Blue." },
            { audio: "Where do you play?", options: ["In the yard.", "In the oven.", "On the lamp.", "In the wardrobe."], a: "In the yard." },
            { audio: "What do you see on the floor?", options: ["A big rug.", "A flying bird.", "A red sun.", "A high ceiling."], a: "A big rug." },
            { audio: "Is there a TV in the living room?", options: ["Yes, there is.", "No, it is a wall.", "Yes, they are red.", "Five TVs."], a: "Yes, there is." },
            { audio: "Where are your clothes?", options: ["In the wardrobe.", "In the garden.", "On the roof.", "In the chimney."], a: "In the wardrobe." },
            { audio: "What color is the sun?", options: ["Yellow.", "Black.", "Gray.", "Purple."], a: "Yellow." },
            { audio: "Where do you wash your hands?", options: ["In the bathroom.", "In the bedroom.", "On the balcony.", "In the garage."], a: "In the bathroom." },
            { audio: "What protects us from the rain?", options: ["The roof.", "The rug.", "The chair.", "The desk."], a: "The roof." },
            { audio: "Where are the books?", options: ["On the shelf.", "On the ceiling.", "In the fridge.", "On the roof."], a: "On the shelf." },
            { audio: "What color is the cat?", options: ["Black.", "Square.", "Three.", "Yes."], a: "Black." },
            { audio: "What is your favorite room?", options: ["The kitchen.", "The apple.", "The color blue.", "Five."], a: "The kitchen." },
            { audio: "Are there two beds?", options: ["No, there is only one.", "Yes, it is blue.", "On the floor.", "It is a dog."], a: "No, there is only one." },
            { audio: "What color is the grass?", options: ["Green.", "Red.", "Orange.", "White."], a: "Green." },
            { audio: "What do you turn on to see in the dark?", options: ["The lamp.", "The bed.", "The chair.", "The rug."], a: "The lamp." },
            { audio: "Where does smoke come from?", options: ["The chimney.", "The fridge.", "The wardrobe.", "The shower."], a: "The chimney." },
            { audio: "Are the curtains blue?", options: ["Yes, they are.", "Yes, it is.", "In the kitchen.", "Five curtains."], a: "Yes, they are." },
            { audio: "Where do you sit to study?", options: ["On a chair.", "On a lamp.", "On a door.", "On a ceiling."], a: "On a chair." },
            { audio: "What covers the window?", options: ["Curtains.", "Rugs.", "Pillows.", "Beds."], a: "Curtains." },
            { audio: "Where is the fridge?", options: ["In the kitchen.", "In the bathroom.", "In the wardrobe.", "On the stairs."], a: "In the kitchen." },
            { audio: "What color is the pig?", options: ["Pink.", "Green.", "Black.", "Blue."], a: "Pink." },
            { audio: "What do you open to look outside?", options: ["The window.", "The floor.", "The rug.", "The wall."], a: "The window." },
            { audio: "How do you go to the second floor?", options: ["Up the stairs.", "Down the chimney.", "Out the window.", "On the desk."], a: "Up the stairs." },
            { audio: "What color is an apple?", options: ["Red.", "Blue.", "Gray.", "White."], a: "Red." },
            { audio: "Where does the family eat?", options: ["In the dining room.", "In the garage.", "On the roof.", "In the closet."], a: "In the dining room." },
            { audio: "What covers the floor?", options: ["A rug.", "A ceiling.", "A lamp.", "A window."], a: "A rug." },
            { audio: "Where is the woman?", options: ["On the balcony.", "In the fridge.", "Under the rug.", "In the lamp."], a: "On the balcony." },
            { audio: "What do you use to stay warm in bed?", options: ["A blanket.", "A desk.", "A chair.", "A book."], a: "A blanket." },
            { audio: "What color is the cloud?", options: ["Gray.", "Green.", "Brown.", "Yellow."], a: "Gray." },
            { audio: "What do you put your head on in bed?", options: ["A pillow.", "A door.", "A shoe.", "A window."], a: "A pillow." },
            { audio: "Is the floor clean?", options: ["Yes, it is.", "Yes, they are.", "No, aren't.", "Five."], a: "Yes, it is." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 ITEMS) ---
        10: [
            { audio: "The walls are yellow and the door is brown.", sent: "The ___ are yellow and the ___ is brown.", blanks: ["walls", "door"] },
            { audio: "There is a big bed in the bedroom.", sent: "There is a big ___ in the ___.", blanks: ["bed", "bedroom"] },
            { audio: "The car is in the garage.", sent: "The ___ is in the ___.", blanks: ["car", "garage"] },
            { audio: "I have a desk and a chair.", sent: "I have a ___ and a ___.", blanks: ["desk", "chair"] },
            { audio: "We make dinner in the kitchen.", sent: "We make ___ in the ___.", blanks: ["dinner", "kitchen"] },
            { audio: "The sky is blue and the grass is green.", sent: "The sky is ___ and the grass is ___.", blanks: ["blue", "green"] },
            { audio: "Open the window and close the door.", sent: "Open the ___ and close the ___.", blanks: ["window", "door"] },
            { audio: "There are three bedrooms upstairs.", sent: "There are ___ bedrooms ___.", blanks: ["three", "upstairs"] },
            { audio: "The books are on the shelf.", sent: "The ___ are on the ___.", blanks: ["books", "shelf"] },
            { audio: "I sleep on a soft pillow.", sent: "I ___ on a soft ___.", blanks: ["sleep", "pillow"] },
            { audio: "The TV is in the living room.", sent: "The ___ is in the ___.", blanks: ["TV", "living room"] },
            { audio: "Wash your hands in the bathroom.", sent: "Wash your ___ in the ___.", blanks: ["hands", "bathroom"] },
            { audio: "The cat is black and small.", sent: "The cat is ___ and ___.", blanks: ["black", "small"] },
            { audio: "Kids play in the yard.", sent: "Kids ___ in the ___.", blanks: ["play", "yard"] },
            { audio: "My clothes are in the wardrobe.", sent: "My ___ are in the ___.", blanks: ["clothes", "wardrobe"] },
            { audio: "The floor is very clean today.", sent: "The ___ is very ___ today.", blanks: ["floor", "clean"] },
            { audio: "The ceiling is high in this room.", sent: "The ___ is ___ in this room.", blanks: ["ceiling", "high"] },
            { audio: "The red roof protects us from rain.", sent: "The red ___ protects us from ___.", blanks: ["roof", "rain"] },
            { audio: "Go up the stairs to the second floor.", sent: "Go up the ___ to the second ___.", blanks: ["stairs", "floor"] },
            { audio: "Smoke comes from the tall chimney.", sent: "___ comes from the tall ___.", blanks: ["Smoke", "chimney"] },
            { audio: "The flowers in the garden are pink.", sent: "The ___ in the garden are ___.", blanks: ["flowers", "pink"] },
            { audio: "Turn on the lamp in the dark.", sent: "Turn on the ___ in the ___.", blanks: ["lamp", "dark"] },
            { audio: "We laugh at the funny movie.", sent: "We ___ at the funny ___.", blanks: ["laugh", "movie"] },
            { audio: "She is standing on the balcony.", sent: "She is ___ on the ___.", blanks: ["standing", "balcony"] },
            { audio: "I see an orange rug on the floor.", sent: "I see an orange ___ on the ___.", blanks: ["rug", "floor"] },
            { audio: "The blue curtains are beautiful.", sent: "The ___ curtains are ___.", blanks: ["blue", "beautiful"] },
            { audio: "They live in a big apartment.", sent: "They ___ in a big ___.", blanks: ["live", "apartment"] },
            { audio: "My favorite room is the kitchen.", sent: "My ___ room is the ___.", blanks: ["favorite", "kitchen"] },
            { audio: "There is a green sofa here.", sent: "There is a ___ ___ here.", blanks: ["green", "sofa"] },
            { audio: "The apple is red and sweet.", sent: "The ___ is ___ and sweet.", blanks: ["apple", "red"] },
            { audio: "The warm blanket is on the bed.", sent: "The warm ___ is on the ___.", blanks: ["blanket", "bed"] },
            { audio: "I study at my computer desk.", sent: "I ___ at my computer ___.", blanks: ["study", "desk"] },
            { audio: "Walk down the long hall.", sent: "Walk ___ the long ___.", blanks: ["down", "hall"] },
            { audio: "There are two men on the roof.", sent: "There are two ___ on the ___.", blanks: ["men", "roof"] },
            { audio: "The children are in the garden.", sent: "The ___ are in the ___.", blanks: ["children", "garden"] },
            { audio: "We eat in the dining room.", sent: "We ___ in the ___ room.", blanks: ["eat", "dining"] },
            { audio: "There isn't a TV in my bedroom.", sent: "There ___ a TV in my ___.", blanks: ["isn't", "bedroom"] },
            { audio: "What color is the front door?", sent: "What ___ is the front ___?", blanks: ["color", "door"] },
            { audio: "Let's explore the big house.", sent: "Let's ___ the big ___.", blanks: ["explore", "house"] },
            { audio: "Make yourself at home, please.", sent: "___ yourself at ___, please.", blanks: ["Make", "home"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE (10 ITEMS) ---
        11: [
            {
                title: "Dialogue 1",
                lines: [
                    { speaker: "Albert", text: "Welcome to my ___!", options: ["house", "car", "wardrobe"], a: "house" },
                    { speaker: "Mrs. Canales", text: "Wow, this is the ___. It is very big.", options: ["living room", "fridge", "roof"], a: "living room" },
                    { speaker: "Albert", text: "Yes. There ___ a green sofa and a TV.", options: ["is", "are", "am"], a: "is" },
                    { speaker: "Mrs. Canales", text: "Is there a ___?", options: ["garden", "ceiling", "bed"], a: "garden" },
                    { speaker: "Albert", text: "Yes, there is. It is behind the ___.", options: ["kitchen", "blanket", "lamp"], a: "kitchen" }
                ]
            },
            {
                title: "Dialogue 2",
                lines: [
                    { speaker: "Mrs. Canales", text: "How many ___ are there?", options: ["bedrooms", "kitchens", "stairs"], a: "bedrooms" },
                    { speaker: "Albert", text: "There ___ three bedrooms upstairs.", options: ["is", "are", "play"], a: "are" },
                    { speaker: "Mrs. Canales", text: "Cool! My ___ room is the kitchen.", options: ["favorite", "white", "small"], a: "favorite" },
                    { speaker: "Albert", text: "Do you ___ in the kitchen?", options: ["eat", "explore", "sleep"], a: "eat" },
                    { speaker: "Mrs. Canales", text: "Yes! We eat and make dinner in the ___.", options: ["kitchen", "bathroom", "garage"], a: "kitchen" }
                ]
            },
            {
                title: "Dialogue 3",
                lines: [
                    { speaker: "Lucas", text: "I am tired. Where do you ___?", options: ["sleep", "find", "laugh"], a: "sleep" },
                    { speaker: "Albert", text: "I sleep in my ___.", options: ["bedroom", "garden", "roof"], a: "bedroom" },
                    { speaker: "Lucas", text: "Is the ___ soft?", options: ["bed", "wall", "door"], a: "bed" },
                    { speaker: "Albert", text: "Yes, it is. And I have a warm ___.", options: ["blanket", "desk", "chair"], a: "blanket" },
                    { speaker: "Lucas", text: "Nice! I sleep on a soft ___, too.", options: ["pillow", "floor", "window"], a: "pillow" }
                ]
            },
            {
                title: "Dialogue 4",
                lines: [
                    { speaker: "Albert", text: "___ is the bathroom?", options: ["Where", "What", "How"], a: "Where" },
                    { speaker: "Lucas", text: "It's ___. Go up the stairs.", options: ["upstairs", "garden", "green"], a: "upstairs" },
                    { speaker: "Albert", text: "Okay. Is there a shower in the ___?", options: ["bathroom", "kitchen", "dining room"], a: "bathroom" },
                    { speaker: "Lucas", text: "Yes, there is. Wash your ___ in the sink.", options: ["hands", "walls", "rugs"], a: "hands" },
                    { speaker: "Albert", text: "Thank you. The floor is very ___.", options: ["clean", "high", "black"], a: "clean" }
                ]
            },
            {
                title: "Dialogue 5",
                lines: [
                    { speaker: "Celine", text: "What ___ is your house?", options: ["color", "room", "house"], a: "color" },
                    { speaker: "Albert", text: "The ___ is white and the roof is red.", options: ["wall", "garden", "ceiling"], a: "wall" },
                    { speaker: "Celine", text: "What color is the ___?", options: ["door", "grass", "sky"], a: "door" },
                    { speaker: "Albert", text: "The door is ___.", options: ["brown", "square", "soft"], a: "brown" },
                    { speaker: "Celine", text: "I love your house. It is a nice ___.", options: ["house", "chimney", "fridge"], a: "house" }
                ]
            },
            {
                title: "Dialogue 6",
                lines: [
                    { speaker: "Albert", text: "Let's ___ the garden!", options: ["explore", "protect", "sleep"], a: "explore" },
                    { speaker: "Lucas", text: "OK! Look, the ___ is very green.", options: ["grass", "sky", "cloud"], a: "grass" },
                    { speaker: "Albert", text: "Are there ___ in the garden?", options: ["flowers", "stairs", "beds"], a: "flowers" },
                    { speaker: "Lucas", text: "Yes, there are pink and yellow flowers.", options: ["Yes", "No", "Blue"], a: "Yes" },
                    { speaker: "Albert", text: "The kids ___ in the yard here.", options: ["play", "wash", "talk"], a: "play" }
                ]
            },
            {
                title: "Dialogue 7",
                lines: [
                    { speaker: "Mrs. Canales", text: "Is there a ___ in the garage?", options: ["car", "rug", "tree"], a: "car" },
                    { speaker: "Albert", text: "Yes, ___ is.", options: ["there", "they", "it"], a: "there" },
                    { speaker: "Mrs. Canales", text: "How many cars are ___?", options: ["there", "here", "house"], a: "there" },
                    { speaker: "Albert", text: "There is ___ car.", options: ["one", "two", "three"], a: "one" },
                    { speaker: "Mrs. Canales", text: "Is it a big ___?", options: ["garage", "bathroom", "wardrobe"], a: "garage" }
                ]
            },
            {
                title: "Dialogue 8",
                lines:[
                    { speaker: "Lucas", text: "Look at the ___. Smoke comes from it.", options: ["chimney", "floor", "rug"], a: "chimney" },
                    { speaker: "Albert", text: "Yes. And the ___ protects us from rain.", options: ["roof", "fridge", "bed"], a: "roof" },
                    { speaker: "Lucas", text: "Who is on the ___?", options: ["balcony", "desk", "oven"], a: "balcony" },
                    { speaker: "Albert", text: "My sister. We can see the ___ from there.", options: ["sky", "floor", "ceiling"], a: "sky" },
                    { speaker: "Lucas", text: "The sky is very ___ today.", options: ["blue", "green", "brown"], a: "blue" }
                ]
            },
            {
                title: "Dialogue 9",
                lines: [
                    { speaker: "Celine", text: "I am hungry. Where do we ___?", options: ["eat", "sleep", "study"], a: "eat" },
                    { speaker: "Albert", text: "We eat in the ___ room.", options: ["dining", "living", "bath"], a: "dining" },
                    { speaker: "Celine", text: "Is there a big ___?", options: ["table", "bed", "shower"], a: "table" },
                    { speaker: "Albert", text: "Yes, and there are four ___.", options: ["chairs", "lamps", "doors"], a: "chairs" },
                    { speaker: "Celine", text: "Great! Let's have ___.", options: ["dinner", "books", "windows"], a: "dinner" }
                ]
            },
            {
                title: "Dialogue 10",
                lines: [
                    { speaker: "Lucas", text: "Where do you put your ___?", options: ["clothes", "roofs", "stairs"], a: "clothes" },
                    { speaker: "Albert", text: "They are in the ___.", options: ["wardrobe", "fridge", "chimney"], a: "wardrobe" },
                    { speaker: "Lucas", text: "And where is your ___?", options: ["computer", "shower", "grass"], a: "computer" },
                    { speaker: "Albert", text: "It is on the ___.", options: ["desk", "ceiling", "cloud"], a: "desk" },
                    { speaker: "Lucas", text: "Your room is very ___.", options: ["nice", "sky", "yard"], a: "nice" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER (10 ITEMS) ---
        12: [
            {
                title: "Text 1: The Yellow House",
                text: "My name is Anna. I live in a yellow house. The house has a red roof and a brown door. There is a small garden in front of the house. The grass is very green. There is a garage, but there isn't a car in it.",
                questions: [
                    { q: "What color is the house?", options: ["Red", "Yellow", "Brown"], a: "Yellow" },
                    { q: "What color is the roof?", options: ["Red", "Yellow", "Green"], a: "Red" },
                    { q: "Is there a garden?", options: ["Yes, there is.", "No, there isn't.", "Yes, there are."], a: "Yes, there is." },
                    { q: "Where is the garden?", options: ["In the garage.", "On the roof.", "In front of the house."], a: "In front of the house." },
                    { q: "Is there a car in the garage?", options: ["Yes, there is.", "No, there isn't.", "Yes, they are."], a: "No, there isn't." }
                ]
            },
            {
                title: "Text 2: The Big Living Room",
                text: "Welcome to my house. This is the living room. It is very big. The walls are white. There is a green sofa and a big TV. We sit on the sofa and we laugh at the funny movie. The rug on the floor is blue.",
                questions: [
                    { q: "What room is this?", options: ["The bathroom.", "The kitchen.", "The living room."], a: "The living room." },
                    { q: "What color are the walls?", options: ["White.", "Green.", "Blue."], a: "White." },
                    { q: "What furniture is in the living room?", options: ["A bed and a desk.", "A green sofa and a TV.", "A stove and a fridge."], a: "A green sofa and a TV." },
                    { q: "What do they do in the living room?", options: ["They sleep.", "They make dinner.", "They laugh at a movie."], a: "They laugh at a movie." },
                    { q: "Where is the blue rug?", options: ["On the ceiling.", "On the wall.", "On the floor."], a: "On the floor." }
                ]
            },
            {
                title: "Text 3: The Dining Room and Kitchen",
                text: "In my house, the kitchen is small. There is a white fridge and a stove. We make dinner in the kitchen. We eat in the dining room. There is a big table and four chairs in the dining room. My favorite room is the kitchen because I love food!",
                questions: [
                    { q: "Is the kitchen big?", options: ["Yes, it is.", "No, it is small.", "It is white."], a: "No, it is small." },
                    { q: "What is in the kitchen?", options: ["A fridge and a stove.", "A bed and a pillow.", "A TV and a sofa."], a: "A fridge and a stove." },
                    { q: "Where do they eat?", options: ["In the kitchen.", "In the dining room.", "In the garden."], a: "In the dining room." },
                    { q: "How many chairs are in the dining room?", options: ["Two.", "Three.", "Four."], a: "Four." },
                    { q: "Why is the kitchen the favorite room?", options: ["Because it is small.", "Because of the food.", "Because it is white."], a: "Because of the food." }
                ]
            },
            {
                title: "Text 4: A Messy Bedroom",
                text: "This is my bedroom. It is messy! There is a bed, but my clothes are on the bed. They are not in the wardrobe. My computer is on the desk. There are books on the shelf and on the floor. I sleep on a soft pillow and a warm blanket.",
                questions: [
                    { q: "Is the bedroom clean?", options: ["Yes, it is.", "No, it is messy.", "Yes, it is small."], a: "No, it is messy." },
                    { q: "Where are the clothes?", options: ["In the wardrobe.", "On the bed.", "On the desk."], a: "On the bed." },
                    { q: "Where is the computer?", options: ["On the desk.", "On the floor.", "On the shelf."], a: "On the desk." },
                    { q: "Where are the books?", options: ["Only on the shelf.", "Only on the floor.", "On the shelf and on the floor."], a: "On the shelf and on the floor." },
                    { q: "What does the person sleep on?", options: ["A soft pillow and a warm blanket.", "Books and a computer.", "Clothes and a desk."], a: "A soft pillow and a warm blanket." }
                ]
            },
            {
                title: "Text 5: The Bathroom Upstairs",
                text: "Walk down the hall and go up the stairs. The bathroom is upstairs. It is very clean. The floor is white and the walls are blue. There is a shower. Wash your hands in the bathroom. There is a small window in the bathroom.",
                questions: [
                    { q: "Where is the bathroom?", options: ["Downstairs.", "Upstairs.", "In the garden."], a: "Upstairs." },
                    { q: "What do you go up to find the bathroom?", options: ["The stairs.", "The wall.", "The window."], a: "The stairs." },
                    { q: "What color is the floor?", options: ["Blue.", "White.", "Green."], a: "White." },
                    { q: "What do you do in the bathroom?", options: ["Make dinner.", "Watch TV.", "Wash your hands."], a: "Wash your hands." },
                    { q: "Is there a window?", options: ["Yes, a small window.", "Yes, a big window.", "No, there isn't."], a: "Yes, a small window." }
                ]
            },
            {
                title: "Text 6: The Outside of the House",
                text: "Look at the house from the outside. The roof protects us from rain. Smoke comes from the chimney. There is a balcony. She is on the balcony. Kids play in the yard. The sky is gray today, so there is no sun.",
                questions: [
                    { q: "What protects the house from rain?", options: ["The balcony.", "The chimney.", "The roof."], a: "The roof." },
                    { q: "Where does smoke come from?", options: ["The window.", "The chimney.", "The door."], a: "The chimney." },
                    { q: "Who is on the balcony?", options: ["She is.", "The kids are.", "Smoke is."], a: "She is." },
                    { q: "Where do the kids play?", options: ["On the roof.", "In the yard.", "On the balcony."], a: "In the yard." },
                    { q: "What color is the sky?", options: ["Blue.", "Yellow.", "Gray."], a: "Gray." }
                ]
            },
            {
                title: "Text 7: Plurals in the House",
                text: "There are many things in the house. I have two watches on my desk. There are three boxes in the garage. There are two women in the kitchen. Look outside! The children are happy in the garden. They have two dogs.",
                questions: [
                    { q: "How many watches are there?", options: ["One.", "Two.", "Three."], a: "Two." },
                    { q: "Where are the watches?", options: ["On the desk.", "In the garage.", "In the kitchen."], a: "On the desk." },
                    { q: "What is in the garage?", options: ["Two women.", "Three boxes.", "Two dogs."], a: "Three boxes." },
                    { q: "Who is in the kitchen?", options: ["The children.", "Two men.", "Two women."], a: "Two women." },
                    { q: "Where are the children?", options: ["In the kitchen.", "In the garage.", "In the garden."], a: "In the garden." }
                ]
            },
            {
                title: "Text 8: The Apartment",
                text: "They live in an apartment. It is not a house. There is no garden and no garage. The apartment is small. There are two bedrooms, one bathroom, a living room, and a kitchen. The ceiling is high. There are big windows, so it is very bright.",
                questions: [
                    { q: "Do they live in a house?", options: ["Yes, they do.", "No, they live in an apartment.", "Yes, they live in a garden."], a: "No, they live in an apartment." },
                    { q: "Is there a garage?", options: ["Yes, there is.", "No, there isn't.", "Yes, there are two."], a: "No, there isn't." },
                    { q: "How many bedrooms are there?", options: ["One.", "Two.", "Three."], a: "Two." },
                    { q: "Is the ceiling low?", options: ["Yes, it is low.", "No, it is high.", "It is small."], a: "No, it is high." },
                    { q: "Why is the apartment bright?", options: ["Because of the big windows.", "Because of the high ceiling.", "Because it is small."], a: "Because of the big windows." }
                ]
            },
            {
                title: "Text 9: The Garage and Car",
                text: "My father is in the garage. The garage is next to the house. It is big and gray. There is a blue car inside. There are tools on the shelf. My father washes the car on Saturdays. The door of the garage is always open in the afternoon.",
                questions: [
                    { q: "Where is the father?", options: ["In the bedroom.", "In the garage.", "On the roof."], a: "In the garage." },
                    { q: "Where is the garage?", options: ["Next to the house.", "In the garden.", "Upstairs."], a: "Next to the house." },
                    { q: "What color is the car?", options: ["Gray.", "Blue.", "Red."], a: "Blue." },
                    { q: "What is on the shelf?", options: ["Tools.", "Books.", "Clothes."], a: "Tools." },
                    { q: "When does he wash the car?", options: ["In the afternoon.", "On Saturdays.", "Every day."], a: "On Saturdays." }
                ]
            },
            {
                title: "Text 10: My Family Home",
                text: "This is our family home. It is a big house. We have three bedrooms and two bathrooms. The kitchen is my mother's favorite room. The living room has a brown sofa and a pink rug. We have a small yard. We like to play games in the yard.",
                questions: [
                    { q: "Is the house big or small?", options: ["It is small.", "It is big.", "It is an apartment."], a: "It is big." },
                    { q: "How many bathrooms are there?", options: ["One.", "Two.", "Three."], a: "Two." },
                    { q: "What is the mother's favorite room?", options: ["The bedroom.", "The kitchen.", "The living room."], a: "The kitchen." },
                    { q: "What is in the living room?", options: ["A brown sofa and a pink rug.", "A big TV.", "A bed and a desk."], a: "A brown sofa and a pink rug." },
                    { q: "Where do they play games?", options: ["In the living room.", "In the yard.", "In the garage."], a: "In the yard." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER CONTEXT (10 ITEMS) ---
        13: [
            {
                title: "Audio Script 1",
                audio: "This is my house. The walls are yellow. The roof is brown. There is a big green garden. I love my house.",
                questions: [
                    { q: "What color are the walls?", options: ["Yellow.", "Brown.", "Green."], a: "Yellow." },
                    { q: "What color is the roof?", options: ["Yellow.", "Brown.", "Green."], a: "Brown." },
                    { q: "Is the garden small?", options: ["Yes, it is.", "No, it is big.", "It is yellow."], a: "No, it is big." },
                    { q: "What color is the garden?", options: ["Yellow.", "Brown.", "Green."], a: "Green." },
                    { q: "Does the person love the house?", options: ["Yes.", "No.", "They don't know."], a: "Yes." }
                ]
            },
            {
                title: "Audio Script 2",
                audio: "I am in the living room. There is a sofa and a TV. The curtains are blue. The rug is pink. My family talks here.",
                questions: [
                    { q: "Where is the person?", options: ["In the kitchen.", "In the bathroom.", "In the living room."], a: "In the living room." },
                    { q: "What is in the room?", options: ["A sofa and a TV.", "A bed and a desk.", "A stove and a fridge."], a: "A sofa and a TV." },
                    { q: "What color are the curtains?", options: ["Pink.", "Blue.", "Green."], a: "Blue." },
                    { q: "What color is the rug?", options: ["Pink.", "Blue.", "Brown."], a: "Pink." },
                    { q: "What does the family do here?", options: ["They sleep.", "They cook.", "They talk."], a: "They talk." }
                ]
            },
            {
                title: "Audio Script 3",
                audio: "My bedroom is upstairs. Go up the stairs. I have a soft bed. I sleep on a pillow. My clothes are in the wardrobe.",
                questions: [
                    { q: "Where is the bedroom?", options: ["Downstairs.", "Upstairs.", "Outside."], a: "Upstairs." },
                    { q: "How do you get there?", options: ["Go up the stairs.", "Open the window.", "Walk down the hall."], a: "Go up the stairs." },
                    { q: "Is the bed hard?", options: ["Yes, it is.", "No, it is soft.", "It is upstairs."], a: "No, it is soft." },
                    { q: "What does the person sleep on?", options: ["A desk.", "A wardrobe.", "A pillow."], a: "A pillow." },
                    { q: "Where are the clothes?", options: ["On the bed.", "In the wardrobe.", "On the stairs."], a: "In the wardrobe." }
                ]
            },
            {
                title: "Audio Script 4",
                audio: "We eat in the dining room. There are six chairs. The table is big. After dinner, we wash our hands in the bathroom.",
                questions: [
                    { q: "Where do they eat?", options: ["In the kitchen.", "In the dining room.", "In the living room."], a: "In the dining room." },
                    { q: "How many chairs are there?", options: ["Two.", "Four.", "Six."], a: "Six." },
                    { q: "Is the table small?", options: ["Yes, it is small.", "No, it is big.", "It is six."], a: "No, it is big." },
                    { q: "What do they do after dinner?", options: ["Sleep.", "Watch TV.", "Wash their hands."], a: "Wash their hands." },
                    { q: "Where do they wash their hands?", options: ["In the bathroom.", "In the dining room.", "In the kitchen."], a: "In the bathroom." }
                ]
            },
            {
                title: "Audio Script 5",
                audio: "The car is in the garage. The garage is gray. It is next to the house. There are three boxes in the garage too.",
                questions: [
                    { q: "Where is the car?", options: ["In the garden.", "In the garage.", "In the hall."], a: "In the garage." },
                    { q: "What color is the garage?", options: ["Gray.", "Brown.", "White."], a: "Gray." },
                    { q: "Where is the garage?", options: ["Inside the house.", "Upstairs.", "Next to the house."], a: "Next to the house." },
                    { q: "Are there boxes in the garage?", options: ["Yes, there are three.", "Yes, there is one.", "No, there aren't."], a: "Yes, there are three." },
                    { q: "What is in the boxes?", options: ["Cars.", "The audio doesn't say.", "Clothes."], a: "The audio doesn't say." }
                ]
            },
            {
                title: "Audio Script 6",
                audio: "Look at the sky. It is blue. The sun is yellow. The grass in the yard is green. Children play outside.",
                questions: [
                    { q: "What are they looking at?", options: ["The ceiling.", "The sky.", "The roof."], a: "The sky." },
                    { q: "What color is the sky?", options: ["Blue.", "Yellow.", "Green."], a: "Blue." },
                    { q: "What color is the sun?", options: ["Blue.", "Yellow.", "Green."], a: "Yellow." },
                    { q: "Where is the grass?", options: ["On the roof.", "In the yard.", "In the house."], a: "In the yard." },
                    { q: "Who plays outside?", options: ["Animals.", "Men.", "Children."], a: "Children." }
                ]
            },
            {
                title: "Audio Script 7",
                audio: "I study at my desk. My computer is on the desk. The lamp is on, too. The books are on the shelf.",
                questions: [
                    { q: "Where does the person study?", options: ["On the bed.", "At the desk.", "On the rug."], a: "At the desk." },
                    { q: "Where is the computer?", options: ["On the desk.", "On the shelf.", "On the floor."], a: "On the desk." },
                    { q: "Is the lamp on?", options: ["Yes, it is.", "No, it is off.", "There is no lamp."], a: "Yes, it is." },
                    { q: "Where are the books?", options: ["On the desk.", "On the computer.", "On the shelf."], a: "On the shelf." },
                    { q: "What is the person doing?", options: ["Sleeping.", "Studying.", "Eating."], a: "Studying." }
                ]
            },
            {
                title: "Audio Script 8",
                audio: "The ceiling is high. Open the window. The cat is black. It sleeps on the rug. The rug is on the floor.",
                questions: [
                    { q: "Is the ceiling low?", options: ["Yes, it is.", "No, it is high.", "It is black."], a: "No, it is high." },
                    { q: "What should you open?", options: ["The door.", "The window.", "The wardrobe."], a: "The window." },
                    { q: "What color is the cat?", options: ["Black.", "White.", "Gray."], a: "Black." },
                    { q: "What does the cat do?", options: ["It plays.", "It eats.", "It sleeps."], a: "It sleeps." },
                    { q: "Where is the rug?", options: ["On the ceiling.", "On the floor.", "On the window."], a: "On the floor." }
                ]
            },
            {
                title: "Audio Script 9",
                audio: "The bathroom is very clean. The walls are white and the door is brown. I wash my hands in the sink. There is a small window.",
                questions: [
                    { q: "Is the bathroom messy?", options: ["Yes, it is.", "No, it is very clean.", "It is brown."], a: "No, it is very clean." },
                    { q: "What color are the walls?", options: ["White.", "Brown.", "Blue."], a: "White." },
                    { q: "What color is the door?", options: ["White.", "Brown.", "Gray."], a: "Brown." },
                    { q: "Where does the person wash their hands?", options: ["In the shower.", "In the sink.", "In the yard."], a: "In the sink." },
                    { q: "Is there a window?", options: ["Yes, a small window.", "Yes, a big window.", "No, there isn't."], a: "Yes, a small window." }
                ]
            },
            {
                title: "Audio Script 10",
                audio: "My apartment is small. It has one bedroom and one bathroom. The living room and kitchen are together. I love my apartment.",
                questions: [
                    { q: "Is the apartment big?", options: ["Yes, it is big.", "No, it is small.", "It is outside."], a: "No, it is small." },
                    { q: "How many bedrooms does it have?", options: ["One.", "Two.", "Three."], a: "One." },
                    { q: "How many bathrooms does it have?", options: ["One.", "Two.", "None."], a: "One." },
                    { q: "What rooms are together?", options: ["The bedroom and bathroom.", "The living room and kitchen.", "The garage and garden."], a: "The living room and kitchen." },
                    { q: "Does the person like the apartment?", options: ["Yes.", "No.", "The audio doesn't say."], a: "Yes." }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT (10 ITEMS) ---
        14: [
            {
                title: "Text 1",
                text: "This is a nice house. The [1] (roof / rug / bed) is on top of the house. It protects us from [2] (rain / sun / floor). Smoke comes from the [3] (chimney / stairs / window). The house has a white [4] (wall / garden / car). We walk on the [5] (floor / ceiling / roof) inside.",
                answers: ["roof", "rain", "chimney", "wall", "floor"]
            },
            {
                title: "Text 2",
                text: "Welcome to the living room. There is a big [1] (TV / fridge / stove) here. We sit on the green [2] (sofa / ceiling / roof). We [3] (laugh / sleep / cook) at the funny movie. The blue [4] (curtains / grass / stairs) cover the window. Turn on the [5] (lamp / rug / bed) because it is dark.",
                answers: ["TV", "sofa", "laugh", "curtains", "lamp"]
            },
            {
                title: "Text 3",
                text: "This is my bedroom. I sleep in my [1] (bed / desk / wardrobe). My head is on a soft [2] (pillow / chair / door). The [3] (blanket / rug / shelf) is warm. My clothes are in the [4] (wardrobe / window / garden). I study at my [5] (desk / roof / fridge).",
                answers: ["bed", "pillow", "blanket", "wardrobe", "desk"]
            },
            {
                title: "Text 4",
                text: "My mom is in the [1] (kitchen / bathroom / garage). She makes [2] (dinner / books / beds) for the family. The food is in the [3] (fridge / wardrobe / TV). We eat in the [4] (dining room / bathroom / chimney). We sit on the [5] (chairs / rugs / windows) at the table.",
                answers: ["kitchen", "dinner", "fridge", "dining room", "chairs"]
            },
            {
                title: "Text 5",
                text: "Look at the colors! The sky is [1] (blue / brown / black). The sun is [2] (yellow / green / purple). The grass in the garden is [3] (green / gray / pink). The apple is [4] (red / black / blue). The dark cat is [5] (black / white / yellow).",
                answers: ["blue", "yellow", "green", "red", "black"]
            },
            {
                title: "Text 6",
                text: "Walk down the [1] (hall / desk / lamp). The bathroom is here. The [2] (floor / ceiling / roof) is clean. Wash your [3] (hands / clothes / walls) in the sink. Look at the [4] (ceiling / grass / sky), it is high. Open the [5] (window / rug / bed) to let air in.",
                answers: ["hall", "floor", "hands", "ceiling", "window"]
            },
            {
                title: "Text 7",
                text: "They live in an [1] (apartment / stairs / oven). It is very nice. Go up the [2] (stairs / floor / ceiling) to the second floor. There is a small [3] (balcony / chimney / roof) outside the living room. She is on the balcony. She can see the [4] (garden / fridge / bed) down below. There are many [5] (flowers / TVs / rugs) in it.",
                answers: ["apartment", "stairs", "balcony", "garden", "flowers"]
            },
            {
                title: "Text 8",
                text: "There are many things here. We have two [1] (watches / watchs / watch) on the table. There are three [2] (boxes / box / boxs) in the room. Look, there are two [3] (men / mans / man) fixing the door. The [4] (children / childs / child) play outside. They have strong white [5] (teeth / tooths / tooth).",
                answers: ["watches", "boxes", "men", "children", "teeth"]
            },
            {
                title: "Text 9",
                text: "My father is in the [1] (garage / kitchen / bedroom). He washes the blue [2] (car / sofa / bed). The tools are on the [3] (shelf / ceiling / window). The garage [4] (door / fridge / pillow) is big and open. Outside, the [5] (sky / grass / rug) is blue and clear.",
                answers: ["garage", "car", "shelf", "door", "sky"]
            },
            {
                title: "Text 10",
                text: "We [1] (talk / sleep / cook) in the living room. There is a big [2] (rug / sink / stove) on the floor. It is red and soft. The [3] (walls / roofs / grass) are painted white. I sit on the [4] (chair / lamp / cloud) and read a book. The book is about [5] (animals / kitchens / bathrooms).",
                answers: ["talk", "rug", "walls", "chair", "animals"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 ITEMS) ---
        15: [
            {
                title: "Audio Script 1",
                audio: "I see a black cat. It is in the living room. The cat sleeps on the green rug. The rug is on the floor. The cat is very soft.",
                text: "I see a [1] cat. It is in the [2] room. The cat [3] on the green rug. The rug is on the [4]. The cat is very [5].",
                answers: ["black", "living", "sleeps", "floor", "soft"]
            },
            {
                title: "Audio Script 2",
                audio: "The sun is yellow. The sky is blue today. The flowers are pink and red. The grass is very green. Let's explore the garden.",
                text: "The sun is [1]. The sky is [2] today. The flowers are pink and [3]. The grass is very [4]. Let's [5] the garden.",
                answers: ["yellow", "blue", "red", "green", "explore"]
            },
            {
                title: "Audio Script 3",
                audio: "I study at my desk. The computer is on the desk. Turn on the lamp. I read the books. The books are on the shelf.",
                text: "I [1] at my desk. The [2] is on the desk. Turn on the [3]. I read the [4]. The books are on the [5].",
                answers: ["study", "computer", "lamp", "books", "shelf"]
            },
            {
                title: "Audio Script 4",
                audio: "We live in a small apartment. There is no garage. There are two bedrooms. The bathroom is clean. We talk in the living room.",
                text: "We live in a small [1]. There is no [2]. There are two [3]. The bathroom is [4]. We talk in the [5] room.",
                answers: ["apartment", "garage", "bedrooms", "clean", "living"]
            },
            {
                title: "Audio Script 5",
                audio: "My clothes are in the wardrobe. The door is brown. Open the window. The curtains are blue. The bed is big.",
                text: "My [1] are in the wardrobe. The [2] is brown. Open the [3]. The curtains are [4]. The bed is [5].",
                answers: ["clothes", "door", "window", "blue", "big"]
            },
            {
                title: "Audio Script 6",
                audio: "The wall is white. The ceiling is high. Go up the stairs. Smoke comes from the chimney. The roof is red.",
                text: "The wall is [1]. The ceiling is [2]. Go up the [3]. Smoke comes from the [4]. The roof is [5].",
                answers: ["white", "high", "stairs", "chimney", "red"]
            },
            {
                title: "Audio Script 7",
                audio: "There are two women in the kitchen. They make dinner. The fridge is white. The dining room has a big table. We eat there.",
                text: "There are two [1] in the kitchen. They [2] dinner. The fridge is [3]. The dining room has a big [4]. We [5] there.",
                answers: ["women", "make", "white", "table", "eat"]
            },
            {
                title: "Audio Script 8",
                audio: "Is there a garden? Yes, there is. The kids play in the yard. They laugh and run. The house is very nice.",
                text: "[1] there a garden? Yes, there [2]. The kids [3] in the yard. They [4] and run. The house is very [5].",
                answers: ["Is", "is", "play", "laugh", "nice"]
            },
            {
                title: "Audio Script 9",
                audio: "The living room has a big sofa. The television is on the wall. We sit and watch movies. It is very comfortable.",
                text: "The living room has a big [1]. The television is on the [2]. We [3] and watch [4]. It is very [5].",
                answers: ["sofa", "wall", "sit", "movies", "comfortable"]
            },
            {
                title: "Audio Script 10",
                audio: "Look at the roof. It is red. The walls are gray. We walk on the clean floor. Open the door to go outside.",
                text: "Look at the [1]. It is red. The [2] are gray. We walk on the clean [3]. Open the [4] to go [5].",
                answers: ["roof", "walls", "floor", "door", "outside"]
            }
        ]
    }
});