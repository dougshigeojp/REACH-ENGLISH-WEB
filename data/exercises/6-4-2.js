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
 * GRADE 6, BIMESTER 4, CHAPTER 8
 * BATCH 1: TYPES 1 TO 5 (40 items each)
 */

window.initExercise({
    id: "6-4-8",
    grade: "6th Grade",
    bimester: "4",
    chapter: "8",
    title: "Directions and City Places",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES (40 ITEMS) ---
        1: [
            { words: ["ahead", "Go", "straight"], correct: "Go straight ahead" },
            { words: ["right", "the", "Turn", "at", "corner"], correct: "Turn right at the corner" },
            { words: ["me,", "is", "Excuse", "where", "museum", "the"], correct: "Excuse me, where is the museum?" },
            { words: ["do", "get", "library", "to", "How", "I", "the"], correct: "How do I get to the library?" },
            { words: ["bank", "The", "is", "next", "supermarket", "to", "the"], correct: "The bank is next to the supermarket" },
            { words: ["between", "park", "The", "school", "and", "the", "is", "the", "hospital"], correct: "The school is between the park and the hospital" },
            { words: ["across", "The", "is", "from", "hotel", "the", "street"], correct: "The hotel is across from the street" },
            { words: ["foot", "to", "school", "I", "go", "on"], correct: "I go to school on foot" },
            { words: ["subway", "takes", "She", "the", "city", "to", "the"], correct: "She takes the subway to the city" },
            { words: ["map", "Look", "the", "at"], correct: "Look at the map" },
            { words: ["left", "Turn", "bank", "the", "at"], correct: "Turn left at the bank" },
            { words: ["two", "blocks", "Go", "straight", "for", "ahead"], correct: "Go straight ahead for two blocks" },
            { words: ["corner", "is", "The", "post office", "the", "on"], correct: "The post office is on the corner" },
            { words: ["front", "The", "bus stop", "in", "of", "is", "museum", "the"], correct: "The bus stop is in front of the museum" },
            { words: ["behind", "restaurant", "The", "is", "library", "the"], correct: "The restaurant is behind the library" },
            { words: ["street", "cross", "Don't", "the", "here"], correct: "Don't cross the street here" },
            { words: ["past", "Go", "hospital", "the"], correct: "Go past the hospital" },
            { words: ["near", "My", "house", "is", "park", "the"], correct: "My house is near the park" },
            { words: ["tourist", "The", "a", "has", "camera"], correct: "The tourist has a camera" },
            { words: ["going", "We", "sightseeing", "are", "today"], correct: "We are going sightseeing today" },
            { words: ["car", "drives", "dad", "a", "My"], correct: "My dad drives a car" },
            { words: ["bicycle", "I", "my", "ride", "park", "to", "the"], correct: "I ride my bicycle to the park" },
            { words: ["motorcycle", "fast", "has", "a", "He"], correct: "He has a fast motorcycle" },
            { words: ["travel", "train", "by", "We"], correct: "We travel by train" },
            { words: ["high", "flies", "plane", "The"], correct: "The plane flies high" },
            { words: ["directions", "ask", "lost,", "you", "for", "If", "are"], correct: "If you are lost, ask for directions" },
            { words: ["give", "you", "Can", "directions", "me"], correct: "Can you give me directions?" },
            { words: ["walk", "is", "close,", "let's", "It"], correct: "It is close, let's walk" },
            { words: ["street", "This", "very", "quiet", "is"], correct: "This street is very quiet" },
            { words: ["big", "New York", "city", "is", "a"], correct: "New York is a big city" },
            { words: ["avenue", "on", "The", "shops", "the", "are"], correct: "The shops are on the avenue" },
            { words: ["money", "need", "from", "bank", "I", "the"], correct: "I need money from the bank" },
            { words: ["food", "buy", "at", "supermarket", "We", "the"], correct: "We buy food at the supermarket" },
            { words: ["children", "School", "to", "go"], correct: "Children go to school" },
            { words: ["work", "hospital", "Doctors", "the", "in"], correct: "Doctors work in the hospital" },
            { words: ["books", "Read", "library", "at", "the"], correct: "Read books at the library" },
            { words: ["train", "leaves", "The", "station", "from", "the"], correct: "The train leaves from the station" },
            { words: ["sleep", "Tourists", "a", "in", "hotel"], correct: "Tourists sleep in a hotel" },
            { words: ["stop", "at", "bus", "Wait", "the"], correct: "Wait at the bus stop" },
            { words: ["art", "museum", "The", "in", "is", "the"], correct: "The art is in the museum" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES (40 ITEMS) ---
        2: [
            { lines: ["Excuse me, where is the bank?", "It is not far from here.", "How do I get there?", "Go straight ahead for two blocks and turn left."], order: [0, 1, 2, 3] },
            { lines: ["Excuse me. How do I get to the museum?", "The museum is on Park Avenue.", "Is it next to the school?", "No, it is across from the big park."], order: [0, 1, 2, 3] },
            { lines: ["I think I am lost.", "Do you have a map?", "Yes, I have it on my phone.", "Let's check the map to find the library."], order: [0, 1, 2, 3] },
            { lines: ["Do you go to school by bus?", "No, I don't.", "How do you go to school?", "I go to school on foot because it is near."], order: [0, 1, 2, 3] },
            { lines: ["Excuse me, where is the supermarket?", "Go straight ahead and turn right at the corner.", "Is it next to the hospital?", "Yes, the supermarket is between the hospital and the bank."], order: [0, 1, 2, 3] },
            { lines: ["Where do you buy food?", "I buy food at the supermarket.", "How do you get there?", "I drive my car; it is five blocks away."], order: [0, 1, 2, 3] },
            { lines: ["The tourist has a camera.", "What is he doing?", "He is going sightseeing today.", "He wants to take photos of the city."], order: [0, 1, 2, 3] },
            { lines: ["How do we get to the train station?", "We can take the subway.", "Is the subway fast?", "Yes, the subway is very fast."], order: [0, 1, 2, 3] },
            { lines: ["Can you give me directions to the post office?", "Sure. Walk one block and cross the street.", "Is it behind the restaurant?", "No, it is in front of the restaurant."], order: [0, 1, 2, 3] },
            { lines: ["I need money from the bank.", "The bank is on the corner.", "Should I cross the avenue?", "Yes, cross the avenue carefully."], order: [0, 1, 2, 3] },
            { lines: ["Are you going to the hospital?", "Yes, I need to see a doctor.", "How do you travel there?", "I travel by bus."], order: [0, 1, 2, 3] },
            { lines: ["Is the park far from here?", "No, it is very close.", "Let's walk to the park.", "Okay, we can go on foot."], order: [0, 1, 2, 3] },
            { lines: ["Excuse me, how do I get to the hotel?", "Go past the museum.", "Then what do I do?", "Turn left, and the hotel is on your right."], order: [0, 1, 2, 3] },
            { lines: ["Where is the restaurant?", "It is between the bank and the library.", "Can we walk there?", "Yes, it is only one block away."], order: [0, 1, 2, 3] },
            { lines: ["Does your dad have a motorcycle?", "Yes, he has a fast motorcycle.", "Does he ride it to work?", "Yes, he rides it every day."], order: [0, 1, 2, 3] },
            { lines: ["I am looking for the library.", "Go straight ahead on this street.", "Is it near the school?", "Yes, it is right next to the school."], order: [0, 1, 2, 3] },
            { lines: ["How do we get to London?", "We can travel by plane.", "Does the plane fly high?", "Yes, it flies very high in the sky."], order: [0, 1, 2, 3] },
            { lines: ["Excuse me, where is the bus stop?", "It is in front of the supermarket.", "How many blocks is it?", "Go straight ahead for two blocks."], order: [0, 1, 2, 3] },
            { lines: ["Look at the map.", "We are on Main Street.", "We need to turn right here.", "Okay, let's cross the street first."], order: [0, 1, 2, 3] },
            { lines: ["Do tourists sleep in a hotel?", "Yes, they do.", "Where is the nearest hotel?", "It is across from the train station."], order: [0, 1, 2, 3] },
            { lines: ["I ride my bicycle to the park.", "Is there a bike path?", "Yes, it is very safe.", "I will ride my bike with you."], order: [0, 1, 2, 3] },
            { lines: ["Can you help me? I am lost.", "Where do you want to go?", "I want to go to the art museum.", "Turn left at the corner, and it is on your right."], order: [0, 1, 2, 3] },
            { lines: ["Is the post office open?", "I don't know. Let's check.", "Where is it located?", "It is behind the big hospital."], order: [0, 1, 2, 3] },
            { lines: ["Don't cross the street here!", "Why not?", "It is dangerous. Cross at the corner.", "Oh, I see the crosswalk now."], order: [0, 1, 2, 3] },
            { lines: ["Where do doctors work?", "They work in the hospital.", "I need to go there now.", "Take the subway; it is the fastest way."], order: [0, 1, 2, 3] },
            { lines: ["Let's eat at a restaurant.", "Which one is good?", "The Italian restaurant next to the bank.", "Let's go there on foot."], order: [0, 1, 2, 3] },
            { lines: ["The train leaves from the station.", "What time does it leave?", "It leaves at 5 PM.", "We should walk fast!"], order: [0, 1, 2, 3] },
            { lines: ["Read books at the library.", "I love reading books.", "Let's walk to the library together.", "Okay, it is only one block away."], order: [0, 1, 2, 3] },
            { lines: ["Go past the cinema.", "And then turn right?", "No, go straight ahead.", "The shop is on the corner."], order: [0, 1, 2, 3] },
            { lines: ["This street is very quiet.", "Yes, there are no cars here.", "It is nice for walking.", "Let's walk down the avenue."], order: [0, 1, 2, 3] },
            { lines: ["New York is a big city.", "There are many tall buildings.", "Tourists love sightseeing there.", "I want to visit New York one day."], order: [0, 1, 2, 3] },
            { lines: ["Are the shops on the avenue?", "Yes, they are.", "Let's go shopping.", "We can take the bus."], order: [0, 1, 2, 3] },
            { lines: ["Excuse me, where is the school?", "It is between the park and the museum.", "How do I get there?", "Go straight ahead and turn left."], order: [0, 1, 2, 3] },
            { lines: ["Is the bank next to the post office?", "No, it is across from it.", "Okay, I will cross the street.", "Be careful when you cross!"], order: [0, 1, 2, 3] },
            { lines: ["I need to buy a map.", "There is a shop near the museum.", "How many blocks is it?", "It is just one block away."], order: [0, 1, 2, 3] },
            { lines: ["Let's take a taxi.", "No, the subway is faster.", "Where is the subway station?", "It is behind the supermarket."], order: [0, 1, 2, 3] },
            { lines: ["Go straight ahead for three blocks.", "Then turn left at the hospital?", "Yes, the library is in front of you.", "Thank you for the directions."], order: [0, 1, 2, 3] },
            { lines: ["Tourists like sightseeing.", "What do they use to navigate?", "They usually use a map.", "And they ask for directions too."], order: [0, 1, 2, 3] },
            { lines: ["Do you travel by plane often?", "No, I usually travel by train.", "The train station is very close.", "Yes, I can go there on foot."], order: [0, 1, 2, 3] },
            { lines: ["Excuse me.", "Yes, how can I help you?", "How do I get to the park?", "Go straight ahead and cross the avenue."], order: [0, 1, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS (40 ITEMS) ---
        3: [
            { q: "Is the bank next to the school?", options: ["Yes, it is.", "Yes, it are.", "Yes, is it.", "Yes, it am."], a: "Yes, it is." },
            { q: "Do I turn left at the corner?", options: ["Yes, you do.", "Yes, you are.", "Yes, you does.", "Yes, do you."], a: "Yes, you do." },
            { q: "Is the hospital across from the park?", options: ["Yes, it is.", "Yes, it are.", "Yes, they is.", "No, it aren't."], a: "Yes, it is." },
            { q: "Do you go to school on foot?", options: ["Yes, I do.", "Yes, I am.", "Yes, I does.", "No, I don't not."], a: "Yes, I do." },
            { q: "Is the library between the bank and the cafe?", options: ["Yes, it is.", "Yes, it are.", "Yes, they are.", "Yes, it am."], a: "Yes, it is." },
            { q: "Should I go straight ahead?", options: ["Yes, you should.", "Yes, you do.", "Yes, you are.", "Yes, you should to."], a: "Yes, you should." },
            { q: "Is the bus stop in front of the museum?", options: ["Yes, it is.", "Yes, it are.", "No, it aren't.", "Yes, is it."], a: "Yes, it is." },
            { q: "Do we cross the street here?", options: ["Yes, we do.", "Yes, we are.", "Yes, we does.", "No, we aren't."], a: "Yes, we do." },
            { q: "Is the supermarket near the post office?", options: ["Yes, it is.", "Yes, it am.", "Yes, it are.", "No, it aren't."], a: "Yes, it is." },
            { q: "Do they travel by train?", options: ["Yes, they do.", "Yes, they are.", "Yes, they does.", "No, they doesn't."], a: "Yes, they do." },
            { q: "Is the park behind the school?", options: ["Yes, it is.", "Yes, they is.", "Yes, it are.", "No, it don't."], a: "Yes, it is." },
            { q: "Do I turn right at the traffic light?", options: ["Yes, you do.", "Yes, you are.", "Yes, you does.", "No, you doesn't."], a: "Yes, you do." },
            { q: "Is the car on the street?", options: ["Yes, it is.", "Yes, it are.", "Yes, it am.", "No, it aren't."], a: "Yes, it is." },
            { q: "Do you take the subway?", options: ["Yes, I do.", "Yes, I am.", "Yes, I takes.", "No, I doesn't."], a: "Yes, I do." },
            { q: "Is the restaurant on the corner?", options: ["Yes, it is.", "Yes, it are.", "Yes, they is.", "Yes, is it."], a: "Yes, it is." },
            { q: "Do we walk for two blocks?", options: ["Yes, we do.", "Yes, we are.", "Yes, we walks.", "No, we doesn't."], a: "Yes, we do." },
            { q: "Is the plane flying high?", options: ["Yes, it is.", "Yes, it are.", "Yes, it does.", "No, it aren't."], a: "Yes, it is." },
            { q: "Do you need a map?", options: ["Yes, I do.", "Yes, I am.", "Yes, I does.", "No, I don't not."], a: "Yes, I do." },
            { q: "Is he riding a motorcycle?", options: ["Yes, he is.", "Yes, he does.", "Yes, he are.", "No, he aren't."], a: "Yes, he is." },
            { q: "Do I go past the bank?", options: ["Yes, you do.", "Yes, you are.", "Yes, you does.", "No, you doesn't."], a: "Yes, you do." },
            { q: "Where do you buy food?", options: ["At the supermarket.", "At the hospital.", "On a bicycle.", "At the post office."], a: "At the supermarket." },
            { q: "Where do doctors work?", options: ["In a hospital.", "In a library.", "At a bus stop.", "On a plane."], a: "In a hospital." },
            { q: "Where do you read and borrow books?", options: ["At the library.", "At the supermarket.", "In a car.", "At the bank."], a: "At the library." },
            { q: "If you need money, where do you go?", options: ["To the bank.", "To the park.", "To the museum.", "To the train station."], a: "To the bank." },
            { q: "Where do children play with trees and grass?", options: ["In the park.", "In the post office.", "On the subway.", "In the hospital."], a: "In the park." },
            { q: "Where do you go to see old art and history?", options: ["To the museum.", "To the supermarket.", "To the restaurant.", "To the bus stop."], a: "To the museum." },
            { q: "Where do you go to send a letter?", options: ["To the post office.", "To the library.", "To the park.", "To the bank."], a: "To the post office." },
            { q: "Where do you eat a meal with your family?", options: ["At a restaurant.", "At a train station.", "In a subway.", "At a post office."], a: "At a restaurant." },
            { q: "What vehicle flies in the sky?", options: ["A plane.", "A car.", "A subway.", "A bicycle."], a: "A plane." },
            { q: "What vehicle goes underground in the city?", options: ["A subway.", "A motorcycle.", "A plane.", "A bus."], a: "A subway." },
            { q: "If you don't use a vehicle, you go...", options: ["On foot.", "By car.", "By train.", "By plane."], a: "On foot." },
            { q: "What do you use to find your way in a new city?", options: ["A map.", "A block.", "A restaurant.", "A museum."], a: "A map." },
            { q: "What do you say to be polite when asking a stranger for directions?", options: ["Excuse me.", "Turn left.", "Go straight.", "Cross the street."], a: "Excuse me." },
            { q: "What do tourists do when they visit interesting places?", options: ["Sightseeing.", "Sleeping.", "Shopping at the supermarket.", "Banking."], a: "Sightseeing." },
            { q: "Where do tourists usually sleep?", options: ["In a hotel.", "In a hospital.", "In a library.", "In a school."], a: "In a hotel." },
            { q: "What vehicle has two wheels and no motor?", options: ["A bicycle.", "A motorcycle.", "A car.", "A bus."], a: "A bicycle." },
            { q: "Where do you wait for a bus?", options: ["At the bus stop.", "At the bank.", "In the museum.", "In the hospital."], a: "At the bus stop." },
            { q: "If a building is NOT on the left or the right, but ahead of you, you...", options: ["Go straight ahead.", "Turn left.", "Turn right.", "Go back."], a: "Go straight ahead." },
            { q: "What is the place where two streets meet?", options: ["A corner.", "A park.", "A plane.", "A block."], a: "A corner." },
            { q: "If a place is very close, it is...", options: ["Near.", "Far.", "Between.", "Behind."], a: "Near." }
        ],

        // --- TYPE 4: FIND MEANING (40 ITEMS) ---
        4: [
            { sent: "New York is a big **city**.", word: "city", options: ["Rua", "Cidade", "Avenida", "Esquina"], a: "Cidade", def: "A large town." },
            { sent: "I live on this **street**.", word: "street", options: ["Rua", "Avenida", "Parque", "Banco"], a: "Rua", def: "A public road in a city or town." },
            { sent: "The shops are on the **avenue**.", word: "avenue", options: ["Esquina", "Avenida", "Museu", "Rua"], a: "Avenida", def: "A broad road in a town or city." },
            { sent: "Meet me at the **corner**.", word: "corner", options: ["Banco", "Esquina", "Parque", "Hotel"], a: "Esquina", def: "A place or angle where two or more sides or edges meet." },
            { sent: "I need money from the **bank**.", word: "bank", options: ["Escola", "Banco", "Supermercado", "Hospital"], a: "Banco", def: "A financial establishment that invests money." },
            { sent: "Mail the letter at the **post office**.", word: "post office", options: ["Correios", "Biblioteca", "Museu", "Parque"], a: "Correios", def: "The public department responsible for mail services." },
            { sent: "We buy food at the **supermarket**.", word: "supermarket", options: ["Supermercado", "Hospital", "Restaurante", "Hotel"], a: "Supermercado", def: "A large self-service store selling foods and household goods." },
            { sent: "Wait at the **bus stop**.", word: "bus stop", options: ["Estação de trem", "Ponto de ônibus", "Esquina", "Banco"], a: "Ponto de ônibus", def: "A place where a bus regularly stops." },
            { sent: "The art is in the **museum**.", word: "museum", options: ["Museu", "Parque", "Escola", "Biblioteca"], a: "Museu", def: "A building in which objects of historical or artistic interest are stored." },
            { sent: "Kids play in the **park**.", word: "park", options: ["Parque", "Rua", "Avenida", "Estação"], a: "Parque", def: "A large public green area in a town, used for recreation." },
            { sent: "Let's eat at a **restaurant**.", word: "restaurant", options: ["Hotel", "Restaurante", "Correios", "Escola"], a: "Restaurante", def: "A place where people pay to sit and eat meals." },
            { sent: "Tourists sleep in a **hotel**.", word: "hotel", options: ["Hospital", "Hotel", "Museu", "Banco"], a: "Hotel", def: "An establishment providing accommodations, meals, and other services." },
            { sent: "Students go to **school**.", word: "school", options: ["Escola", "Biblioteca", "Parque", "Rua"], a: "Escola", def: "An institution for educating children." },
            { sent: "Doctors work in the **hospital**.", word: "hospital", options: ["Restaurante", "Hospital", "Correios", "Supermercado"], a: "Hospital", def: "An institution providing medical and surgical treatment." },
            { sent: "Read books at the **library**.", word: "library", options: ["Biblioteca", "Museu", "Escola", "Banco"], a: "Biblioteca", def: "A building or room containing collections of books." },
            { sent: "The train leaves from the **train station**.", word: "train station", options: ["Ponto de ônibus", "Estação de trem", "Aeroporto", "Parque"], a: "Estação de trem", def: "A place on a railway line where trains stop." },
            { sent: "He drives a **car**.", word: "car", options: ["Ônibus", "Carro", "Trem", "Metrô"], a: "Carro", def: "A road vehicle, typically with four wheels." },
            { sent: "I ride my **bicycle** to school.", word: "bicycle", options: ["Moto", "Bicicleta", "Trem", "Carro"], a: "Bicicleta", def: "A vehicle composed of two wheels propelled by pedals." },
            { sent: "The **subway** is fast.", word: "subway", options: ["Metrô", "Ônibus", "Avião", "Carro"], a: "Metrô", def: "An underground electric railroad." },
            { sent: "She has a fast **motorcycle**.", word: "motorcycle", options: ["Bicicleta", "Moto", "Carro", "Trem"], a: "Moto", def: "A two-wheeled vehicle that is powered by a motor." },
            { sent: "Take the **bus** to the center.", word: "bus", options: ["Trem", "Ônibus", "Metrô", "Avião"], a: "Ônibus", def: "A large motor vehicle carrying passengers by road." },
            { sent: "We travel by **train**.", word: "train", options: ["Trem", "Ônibus", "Moto", "Carro"], a: "Trem", def: "A series of railroad cars moved as a unit." },
            { sent: "The **plane** flies high.", word: "plane", options: ["Avião", "Metrô", "Ônibus", "Trem"], a: "Avião", def: "A powered flying vehicle with fixed wings." },
            { sent: "We go **on foot**.", word: "on foot", options: ["De carro", "A pé", "De trem", "De ônibus"], a: "A pé", def: "Walking rather than travelling by vehicle." },
            { sent: "If you are lost, **ask for directions**.", word: "ask for directions", options: ["Pedir informações", "Dar informações", "Caminhar", "Atravessar"], a: "Pedir informações", def: "To request information about how to get to a place." },
            { sent: "Can you **give directions** to the park?", word: "give directions", options: ["Pedir informações", "Dar informações", "Passear", "Virar"], a: "Dar informações", def: "To tell someone how to get to a place." },
            { sent: "It is close, let's **walk**.", word: "walk", options: ["Correr", "Caminhar / Andar", "Pular", "Dirigir"], a: "Caminhar / Andar", def: "To move at a regular pace by lifting and setting down each foot in turn." },
            { sent: "**Cross** the street carefully.", word: "cross", options: ["Siga", "Atravessar", "Pare", "Volte"], a: "Atravessar", def: "To go from one side of something to the other." },
            { sent: "The **tourist** has a camera.", word: "tourist", options: ["Turista", "Morador", "Guia", "Motorista"], a: "Turista", def: "A person who is traveling or visiting a place for pleasure." },
            { sent: "We are going **sightseeing** today.", word: "sightseeing", options: ["Passeio turístico", "Dormir", "Fazer compras", "Comer"], a: "Passeio turístico", def: "The activity of visiting places of interest." },
            { sent: "Walk one **block**.", word: "block", options: ["Rua", "Quarteirão / Quadra", "Esquina", "Avenida"], a: "Quarteirão / Quadra", def: "The area bounded by four streets in a city." },
            { sent: "Look at the **map**.", word: "map", options: ["Livro", "Mapa", "Celular", "Foto"], a: "Mapa", def: "A diagrammatic representation of an area." },
            { sent: "**Go straight ahead** and stop.", word: "go straight ahead", options: ["Vire à direita", "Siga reto / Vá em frente", "Vire à esquerda", "Atravesse"], a: "Siga reto / Vá em frente", def: "To move forward without turning." },
            { sent: "**Turn left** at the bank.", word: "turn left", options: ["Vire à direita", "Vire à esquerda", "Siga reto", "Pare"], a: "Vire à esquerda", def: "To change direction to the left." },
            { sent: "**Turn right** at the light.", word: "turn right", options: ["Vire à esquerda", "Vire à direita", "Siga reto", "Atravesse"], a: "Vire à direita", def: "To change direction to the right." },
            { sent: "**Excuse me**, where is the museum?", word: "excuse me", options: ["Obrigado", "Com licença", "Por favor", "Desculpe"], a: "Com licença", def: "Used as a polite apology or to get someone's attention." },
            { sent: "The school is **next to** the park.", word: "next to", options: ["Atrás de", "Ao lado de", "Em frente de", "Entre"], a: "Ao lado de", def: "In or into a position immediately to one side of." },
            { sent: "I sit **between** Ana and Leo.", word: "between", options: ["Entre (dois)", "Atrás de", "Ao lado de", "Em frente de"], a: "Entre (dois)", def: "At, into, or across the space separating objects." },
            { sent: "The car is **in front of** the house.", word: "in front of", options: ["Atrás de", "Em frente de", "Ao lado de", "Entre"], a: "Em frente de", def: "In a position just ahead." },
            { sent: "The garden is **behind** the house.", word: "behind", options: ["Na frente de", "Atrás de", "Ao lado de", "Perto de"], a: "Atrás de", def: "At or to the far side of something." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 ITEMS) ---
        5: [
            { sent: "The hospital is next **from** the bank.", correct: "to" },
            { sent: "I go to school **by** foot.", correct: "on" },
            { sent: "**To go** straight ahead for two blocks.", correct: "Go" },
            { sent: "The park is in front **to** the museum.", correct: "of" },
            { sent: "The library is across **of** the street.", correct: "from" },
            { sent: "**Turning** left at the corner.", correct: "Turn" },
            { sent: "The bakery is **in** the right.", correct: "on" },
            { sent: "**Don't to** cross the street here.", correct: "Don't" },
            { sent: "The school is **between of** the bank and the park.", correct: "between" },
            { sent: "**Going** past the hospital.", correct: "Go" },
            { sent: "He travels **on** car to work.", correct: "by" },
            { sent: "The post office is **at** the corner of Main Street.", correct: "on" },
            { sent: "How do I **gets** to the museum?", correct: "get" },
            { sent: "**To turn** right at the traffic light.", correct: "Turn" },
            { sent: "She takes the subway **for** the city.", correct: "to" },
            { sent: "The museum is near **to** the park.", correct: "near" },
            { sent: "**Walks** one block and stop.", correct: "Walk" },
            { sent: "The tourist **ask** for directions.", correct: "asks" },
            { sent: "We are going **to sightseeing** today.", correct: "sightseeing" },
            { sent: "My house is **next** the library.", correct: "next to" },
            { sent: "They go to the supermarket **in** foot.", correct: "on" },
            { sent: "**Crossing** the avenue carefully.", correct: "Cross" },
            { sent: "The restaurant is across **to** the hospital.", correct: "across from" },
            { sent: "**Doesn't** turn left here.", correct: "Don't" },
            { sent: "He rides his bicycle **in** school.", correct: "to" },
            { sent: "The train station is **behind of** the hotel.", correct: "behind" },
            { sent: "**Look** the map!", correct: "Look at" },
            { sent: "The plane flies high **on** the sky.", correct: "in" },
            { sent: "I need money **of** the bank.", correct: "from" },
            { sent: "The shops are **in** the avenue.", correct: "on" },
            { sent: "How do I get **in** the hospital?", correct: "to" },
            { sent: "**Goes** straight ahead.", correct: "Go" },
            { sent: "The bus stop is **front of** the museum.", correct: "in front of" },
            { sent: "We travel **in** train.", correct: "by" },
            { sent: "The library is between **to** the school and the park.", correct: "between" },
            { sent: "**Not** turn right at the corner.", correct: "Don't" },
            { sent: "She drives **on** car.", correct: "by" },
            { sent: "The hotel is across **of** the street.", correct: "across from" },
            { sent: "**To cross** the street at the corner.", correct: "Cross" },
            { sent: "The supermarket is next **of** the bank.", correct: "next to" }
        ],

        
        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Group 1
            { pairs: [{a: "Where is the bank?", b: "It is next to the supermarket."}, {a: "How do I get to the park?", b: "Go straight ahead for two blocks."}, {a: "Is the hospital near here?", b: "Yes, it is very close."}, {a: "Where do you buy food?", b: "I buy food at the supermarket."}, {a: "How do you go to school?", b: "I go to school on foot."}] },
            // Group 2
            { pairs: [{a: "Where is the library?", b: "It is between the school and the post office."}, {a: "How do I get to the museum?", b: "Turn left at the corner."}, {a: "Is the restaurant across from the park?", b: "Yes, it is opposite the park."}, {a: "Where do tourists sleep?", b: "They sleep in a hotel."}, {a: "How do you travel to London?", b: "We travel by plane."}] },
            // Group 3
            { pairs: [{a: "Where is the bus stop?", b: "It is in front of the library."}, {a: "How do I get to the train station?", b: "Go past the bank and turn right."}, {a: "Is the school behind the hospital?", b: "No, it is next to the hospital."}, {a: "Where do doctors work?", b: "Doctors work in the hospital."}, {a: "How does your dad go to work?", b: "He drives a car."}] },
            // Group 4
            { pairs: [{a: "Where is the post office?", b: "It is on the corner of Main Street."}, {a: "How do I get to the avenue?", b: "Walk one block and cross the street."}, {a: "Is the subway fast?", b: "Yes, it is very fast."}, {a: "Where can I read books?", b: "You can read books at the library."}, {a: "How do you ride to the park?", b: "I ride my bicycle."}] },
            // Group 5
            { pairs: [{a: "Where is the car?", b: "It is in front of the house."}, {a: "How do I get to the supermarket?", b: "Go straight ahead and stop."}, {a: "Is the motorcycle fast?", b: "Yes, it is very fast."}, {a: "Where do we wait for the bus?", b: "We wait at the bus stop."}, {a: "How does the plane fly?", b: "The plane flies high in the sky."}] },
            // Group 6
            { pairs: [{a: "Where is the city museum?", b: "It is on Park Avenue."}, {a: "How do I get to the hospital?", b: "Turn right at the traffic light."}, {a: "Is the street quiet?", b: "Yes, the street is very quiet."}, {a: "Where do you walk?", b: "I walk on the street."}, {a: "How do we cross the avenue?", b: "Cross the avenue carefully."}] },
            // Group 7
            { pairs: [{a: "Where is the park?", b: "It is behind the library."}, {a: "How do I get to the city?", b: "Take the train."}, {a: "Is the tourist looking at a map?", b: "Yes, he is lost."}, {a: "Where are the shops?", b: "They are on the avenue."}, {a: "How do you travel underground?", b: "I travel by subway."}] },
            // Group 8
            { pairs: [{a: "Where is the train station?", b: "It is near the museum."}, {a: "How do I get to the hotel?", b: "Go straight ahead and cross the street."}, {a: "Is she going sightseeing?", b: "Yes, she has a camera."}, {a: "Where do you get money?", b: "I get money from the bank."}, {a: "How does she go to the supermarket?", b: "She goes on foot."}] },
            // Group 9
            { pairs: [{a: "Where is the restaurant?", b: "It is on the left."}, {a: "How do I get to the school?", b: "Go past the park."}, {a: "Is the bicycle red?", b: "Yes, it is a red bike."}, {a: "Where do you ask for directions?", b: "I ask a police officer on the street."}, {a: "How do you read the map?", b: "I look at it on my phone."}] },
            // Group 10
            { pairs: [{a: "Where is the big building?", b: "It is across from the bank."}, {a: "How do I get to the corner?", b: "Walk straight ahead for one block."}, {a: "Is the bus yellow?", b: "Yes, it is a yellow bus."}, {a: "Where do kids play?", b: "Kids play in the park."}, {a: "How do you cross the street?", b: "Look left and right, then walk."}] },
            // Group 11
            { pairs: [{a: "Excuse me, how do I", b: "get to the museum?"}, {a: "Go straight ahead", b: "for two blocks."}, {a: "Turn left", b: "at the corner."}, {a: "The bank is next", b: "to the supermarket."}, {a: "The school is between", b: "the park and the hospital."}] },
            // Group 12
            { pairs: [{a: "The hotel is across", b: "from the street."}, {a: "I go to school", b: "on foot."}, {a: "She takes the subway", b: "to the city."}, {a: "Look at", b: "the map."}, {a: "Turn right at", b: "the traffic light."}] },
            // Group 13
            { pairs: [{a: "The post office is", b: "on the corner."}, {a: "The bus stop is in", b: "front of the museum."}, {a: "The restaurant is behind", b: "the library."}, {a: "Don't cross the", b: "street here."}, {a: "Go past", b: "the hospital."}] },
            // Group 14
            { pairs: [{a: "My house is near", b: "the park."}, {a: "The tourist has", b: "a camera."}, {a: "We are going", b: "sightseeing today."}, {a: "My dad drives", b: "a car."}, {a: "I ride my bicycle", b: "to the park."}] },
            // Group 15
            { pairs: [{a: "He has a fast", b: "motorcycle."}, {a: "We travel", b: "by train."}, {a: "The plane flies", b: "high in the sky."}, {a: "Ask for directions", b: "if you are lost."}, {a: "It is close,", b: "let's walk."}] },
            // Group 16
            { pairs: [{a: "This street is", b: "very quiet."}, {a: "New York is a", b: "big city."}, {a: "The shops are", b: "on the avenue."}, {a: "I need money", b: "from the bank."}, {a: "We buy food", b: "at the supermarket."}] },
            // Group 17
            { pairs: [{a: "Children go", b: "to school."}, {a: "Doctors work in", b: "the hospital."}, {a: "Read books at", b: "the library."}, {a: "The train leaves", b: "from the station."}, {a: "Tourists sleep", b: "in a hotel."}] },
            // Group 18
            { pairs: [{a: "Wait at the", b: "bus stop."}, {a: "The art is", b: "in the museum."}, {a: "Can you give me", b: "directions?"}, {a: "Walk one", b: "block and turn left."}, {a: "She goes to the city", b: "by bus."}] },
            // Group 19
            { pairs: [{a: "The park is a good", b: "place to play."}, {a: "We cross the", b: "avenue carefully."}, {a: "Go up", b: "this street."}, {a: "Go down", b: "the avenue."}, {a: "The library is", b: "on the left."}] },
            // Group 20
            { pairs: [{a: "The hospital is", b: "on the right."}, {a: "Meet me at", b: "the corner."}, {a: "The subway is", b: "very fast."}, {a: "Don't walk", b: "fast."}] },
            // Group 21
            { pairs: [{a: "City", b: "Cidade"}, {a: "Street", b: "Rua"}, {a: "Avenue", b: "Avenida"}, {a: "Corner", b: "Esquina"}, {a: "Bank", b: "Banco"}] },
            // Group 22
            { pairs: [{a: "Post Office", b: "Correios"}, {a: "Supermarket", b: "Supermercado"}, {a: "Bus Stop", b: "Ponto de ônibus"}, {a: "Museum", b: "Museu"}, {a: "Park", b: "Parque"}] },
            // Group 23
            { pairs: [{a: "Restaurant", b: "Restaurante"}, {a: "Hotel", b: "Hotel"}, {a: "School", b: "Escola"}, {a: "Hospital", b: "Hospital"}, {a: "Library", b: "Biblioteca"}] },
            // Group 24
            { pairs: [{a: "Train Station", b: "Estação de trem"}, {a: "Car", b: "Carro"}, {a: "Bicycle / Bike", b: "Bicicleta"}, {a: "Subway", b: "Metrô"}, {a: "Motorcycle", b: "Moto"}] },
            // Group 25
            { pairs: [{a: "Bus", b: "Ônibus"}, {a: "Train", b: "Trem"}, {a: "Plane", b: "Avião"}, {a: "On foot", b: "A pé"}, {a: "Tourist", b: "Turista"}] },
            // Group 26
            { pairs: [{a: "Sightseeing", b: "Passeio turístico"}, {a: "Block", b: "Quarteirão / Quadra"}, {a: "Map", b: "Mapa"}, {a: "Ask for directions", b: "Pedir informações"}, {a: "Give directions", b: "Dar informações"}] },
            // Group 27
            { pairs: [{a: "Walk", b: "Caminhar / Andar"}, {a: "Cross", b: "Atravessar"}, {a: "Go straight ahead", b: "Siga reto / Vá em frente"}, {a: "Turn left", b: "Vire à esquerda"}, {a: "Turn right", b: "Vire à direita"}] },
            // Group 28
            { pairs: [{a: "Excuse me", b: "Com licença"}, {a: "How do I get to...?", b: "Como eu chego ao...?"}, {a: "Next to", b: "Ao lado de"}, {a: "Between", b: "Entre (dois)"}, {a: "In front of", b: "Em frente de"}] },
            // Group 29
            { pairs: [{a: "Behind", b: "Atrás de"}, {a: "Across from", b: "Do outro lado de / Em frente a"}, {a: "On the corner of", b: "Na esquina de"}, {a: "Near", b: "Perto de"}, {a: "Go past", b: "Passe por"}] },
            // Group 30
            { pairs: [{a: "Don't cross here.", b: "Não atravesse aqui."}, {a: "Look at the map.", b: "Olhe para o mapa."}, {a: "It is close.", b: "É perto."}, {a: "She takes the subway.", b: "Ela pega o metrô."}, {a: "We travel by train.", b: "Nós viajamos de trem."}] },
            // Group 31
            { pairs: [{a: "City", b: "Um lugar grande com muitos prédios (Cidade)."}, {a: "Street", b: "Onde os carros andam na cidade (Rua)."}, {a: "Avenue", b: "Uma rua grande e larga (Avenida)."}, {a: "Corner", b: "Onde duas ruas se encontram (Esquina)."}, {a: "Bank", b: "O lugar onde você guarda ou pega dinheiro (Banco)."}] },
            // Group 32
            { pairs: [{a: "Post Office", b: "O lugar para enviar cartas (Correios)."}, {a: "Supermarket", b: "O lugar onde compramos comida (Supermercado)."}, {a: "Bus Stop", b: "O lugar onde esperamos o ônibus (Ponto de ônibus)."}, {a: "Museum", b: "O lugar com arte e coisas antigas (Museu)."}, {a: "Park", b: "Um lugar com árvores e grama para brincar (Parque)."}] },
            // Group 33
            { pairs: [{a: "Restaurant", b: "O lugar onde você paga para comer (Restaurante)."}, {a: "Hotel", b: "O lugar onde turistas dormem (Hotel)."}, {a: "School", b: "O lugar onde crianças estudam (Escola)."}, {a: "Hospital", b: "O lugar com médicos para pessoas doentes (Hospital)."}, {a: "Library", b: "O lugar para ler e pegar livros (Biblioteca)."}] },
            // Group 34
            { pairs: [{a: "Train Station", b: "O lugar onde você pega o trem (Estação de trem)."}, {a: "Car", b: "Um veículo com quatro rodas que seu pai dirige (Carro)."}, {a: "Bicycle", b: "Um veículo com duas rodas e pedais (Bicicleta)."}, {a: "Subway", b: "Um trem que anda por baixo da terra (Metrô)."}, {a: "Motorcycle", b: "Uma moto rápida com duas rodas (Moto)."}] },
            // Group 35
            { pairs: [{a: "Bus", b: "Um carro grande amarelo que leva muitas pessoas (Ônibus)."}, {a: "Train", b: "Um veículo longo que anda em trilhos (Trem)."}, {a: "Plane", b: "Um veículo que voa alto no céu (Avião)."}, {a: "On foot", b: "Andar com os próprios pés (A pé)."}, {a: "Tourist", b: "Uma pessoa visitando a cidade com uma câmera (Turista)."}] },
            // Group 36
            { pairs: [{a: "Sightseeing", b: "Passear e ver as coisas bonitas da cidade (Passeio turístico)."}, {a: "Block", b: "Um pedaço da rua, um quarteirão (Quarteirão / Quadra)."}, {a: "Map", b: "O desenho no papel ou celular para não se perder (Mapa)."}, {a: "Walk", b: "Mover as pernas para ir a um lugar (Caminhar / Andar)."}, {a: "Cross", b: "Ir de um lado da rua para o outro (Atravessar)."}] },
            // Group 37
            { pairs: [{a: "Go straight ahead", b: "Andar para frente sem virar (Siga reto)."}, {a: "Turn left", b: "Mudar a direção para o lado esquerdo (Vire à esquerda)."}, {a: "Turn right", b: "Mudar a direção para o lado direito (Vire à direita)."}, {a: "Excuse me", b: "O que você diz para ser educado (Com licença)."}, {a: "How do I get to...?", b: "A pergunta para saber o caminho (Como eu chego ao...?)."}] },
            // Group 38
            { pairs: [{a: "Next to", b: "Ficar colado, ao lado (Ao lado de)."}, {a: "Between", b: "Ficar no meio de duas coisas (Entre)."}, {a: "In front of", b: "Ficar na frente de algo (Em frente de)."}, {a: "Behind", b: "Ficar nas costas de algo (Atrás de)."}, {a: "Across from", b: "Do outro lado da rua (Do outro lado de)."}] },
            // Group 39
            { pairs: [{a: "On the corner of", b: "Na ponta onde as ruas se cruzam (Na esquina de)."}, {a: "Near", b: "Muito perto, não é longe (Perto de)."}, {a: "Go past", b: "Passar pela frente de um prédio e continuar (Passe por)."}, {a: "Don't", b: "A palavra usada para dizer \"não faça isso\" (Não - Imperativo)."}, {a: "Ask for directions", b: "Pedir ajuda quando está perdido (Pedir informações)."}] },
            // Group 40
            { pairs: [{a: "Give directions", b: "Explicar o caminho para alguém (Dar informações)."}, {a: "Stop", b: "Não andar mais (Pare)."}, {a: "Drive", b: "O que você faz com o carro (Dirigir)."}, {a: "Ride", b: "O que você faz com a bicicleta (Andar de bicicleta)."}, {a: "Travel", b: "Ir para outra cidade ou país (Viajar)."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 ITEMS) ---
        7: [
            { q: "Where is the museum?", options: ["It is on Park Avenue.", "It is a bicycle.", "Turn right is.", "I like apples."], a: "It is on Park Avenue." },
            { q: "How do I get to the library?", options: ["Go straight ahead and turn left.", "The library is a book.", "Yes, I do.", "It is a plane."], a: "Go straight ahead and turn left." },
            { q: "What is next to the supermarket?", options: ["The bank is next to it.", "The car flies.", "The map is red.", "Turn left."], a: "The bank is next to it." },
            { q: "Where do you buy food?", options: ["At the supermarket.", "In the sky.", "On the bicycle.", "At the post office."], a: "At the supermarket." },
            { q: "How do you go to school?", options: ["I go on foot.", "I go on library.", "I go on museum.", "I go a map."], a: "I go on foot." },
            { q: "What is between the park and the hospital?", options: ["The school is between them.", "A tourist is between them.", "Go straight ahead.", "The bus is yellow."], a: "The school is between them." },
            { q: "Where is the bus stop?", options: ["It is in front of the museum.", "It is a car.", "It is a block.", "Yes, it is."], a: "It is in front of the museum." },
            { q: "Where do tourists sleep?", options: ["They sleep in a hotel.", "They sleep in a subway.", "They sleep in a map.", "They sleep in a bank."], a: "They sleep in a hotel." },
            { q: "How does the plane travel?", options: ["It flies high in the sky.", "It walks on the street.", "It reads a book.", "It goes straight ahead."], a: "It flies high in the sky." },
            { q: "What is on the corner?", options: ["The post office is on the corner.", "The subway is fast.", "Turn right.", "Excuse me."], a: "The post office is on the corner." },
            { q: "Where do you read books?", options: ["At the library.", "At the supermarket.", "On a motorcycle.", "In the sky."], a: "At the library." },
            { q: "How do we travel to the city?", options: ["We take the train.", "We cross the street.", "We buy food.", "We look at the museum."], a: "We take the train." },
            { q: "What is behind the library?", options: ["The restaurant is behind it.", "The bicycle is behind it.", "Go past it.", "Turn left."], a: "The restaurant is behind it." },
            { q: "Where do doctors work?", options: ["In the hospital.", "In the post office.", "On the corner.", "By train."], a: "In the hospital." },
            { q: "How many blocks do I go?", options: ["Go straight for two blocks.", "Go a museum.", "Go a bank.", "Go on foot."], a: "Go straight for two blocks." },
            { q: "What do you use when you are lost?", options: ["I use a map.", "I use a hospital.", "I use a hotel.", "I use an avenue."], a: "I use a map." },
            { q: "Where is your house?", options: ["It is near the park.", "It is a bicycle.", "It is a tourist.", "It is sightseeing."], a: "It is near the park." },
            { q: "What vehicle goes underground?", options: ["The subway.", "The plane.", "The museum.", "The block."], a: "The subway." },
            { q: "How do you ask a stranger for help?", options: ["You say \"Excuse me\".", "You say \"Turn right\".", "You say \"Go past\".", "You say \"On foot\"."], a: "You say \"Excuse me\"." },
            { q: "Where does the train leave from?", options: ["It leaves from the train station.", "It leaves from the supermarket.", "It leaves from the library.", "It leaves from the hospital."], a: "It leaves from the train station." },
            { q: "What vehicle has two wheels and no motor?", options: ["A bicycle.", "A car.", "A subway.", "A bus."], a: "A bicycle." },
            { q: "Where do you wait for a bus?", options: ["At the bus stop.", "At the bank.", "In the sky.", "In the hotel."], a: "At the bus stop." },
            { q: "How is the street today?", options: ["It is very quiet.", "It is a map.", "It is a tourist.", "It is an avenue."], a: "It is very quiet." },
            { q: "What does the tourist have?", options: ["He has a camera.", "He has a museum.", "He has a hospital.", "He has a corner."], a: "He has a camera." },
            { q: "Where are the shops?", options: ["They are on the avenue.", "They are in the sky.", "They are on the plane.", "They are on the subway."], a: "They are on the avenue." },
            { q: "What is across from the street?", options: ["The hotel is across from the street.", "Go straight ahead.", "The map is across.", "The foot is across."], a: "The hotel is across from the street." },
            { q: "How do you cross the street?", options: ["You cross it carefully.", "You cross it a bank.", "You cross it a post office.", "You cross it a library."], a: "You cross it carefully." },
            { q: "Where do kids play?", options: ["They play in the park.", "They play in the bank.", "They play in the post office.", "They play on the subway."], a: "They play in the park." },
            { q: "What do you say to give directions to turn?", options: ["Turn left or turn right.", "Museum or park.", "Car or bus.", "Bank or hospital."], a: "Turn left or turn right." },
            { q: "How do you travel by air?", options: ["By plane.", "By bicycle.", "By motorcycle.", "By subway."], a: "By plane." },
            { q: "Where do you get money?", options: ["From the bank.", "From the park.", "From the library.", "From the hospital."], a: "From the bank." },
            { q: "What is a big city?", options: ["New York is a big city.", "A bicycle is a big city.", "A map is a big city.", "A block is a big city."], a: "New York is a big city." },
            { q: "Where do you send a letter?", options: ["At the post office.", "At the supermarket.", "At the train station.", "At the bus stop."], a: "At the post office." },
            { q: "How do you travel if you don't have a car?", options: ["I go on foot or take the bus.", "I go on museum.", "I go on bank.", "I go on library."], a: "I go on foot or take the bus." },
            { q: "What do you do when you visit a new city?", options: ["I go sightseeing.", "I go sleeping.", "I go shopping for cars.", "I go planting trees."], a: "I go sightseeing." },
            { q: "Where do you eat food?", options: ["At a restaurant.", "At a library.", "At a post office.", "At a bank."], a: "At a restaurant." },
            { q: "How fast is the motorcycle?", options: ["It is very fast.", "It is a street.", "It is a corner.", "It is a map."], a: "It is very fast." },
            { q: "What do you do if you are lost?", options: ["I ask for directions.", "I buy food.", "I sleep in a hotel.", "I read a book."], a: "I ask for directions." },
            { q: "Where is the hospital?", options: ["Go past the park, it is on the right.", "It is a car.", "It is a plane.", "It is on foot."], a: "Go past the park, it is on the right." },
            { q: "What does \"Go past\" mean?", options: ["It means walk near it and continue.", "It means stop.", "It means turn left.", "It means cross the street."], a: "It means walk near it and continue." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 ITEMS) ---
        8: [
            { sent: "I need to buy food at the **bank**.", wrong: "bank", options: ["supermarket", "library", "museum", "park"], a: "supermarket" },
            { sent: "The children are playing on the **subway**.", wrong: "subway", options: ["park", "post office", "hospital", "hotel"], a: "park" },
            { sent: "The **plane** drives on the street.", wrong: "plane", options: ["car", "train", "subway", "ship"], a: "car" },
            { sent: "You can read books at the **restaurant**.", wrong: "restaurant", options: ["library", "supermarket", "bank", "bus stop"], a: "library" },
            { sent: "Go straight ahead for two **museums**.", wrong: "museums", options: ["blocks", "maps", "cars", "tourists"], a: "blocks" },
            { sent: "The doctors work in the **post office**.", wrong: "post office", options: ["hospital", "supermarket", "park", "library"], a: "hospital" },
            { sent: "I ride my **subway** to the park.", wrong: "subway", options: ["bicycle", "train", "plane", "museum"], a: "bicycle" },
            { sent: "Let's sleep in a **train station** tonight.", wrong: "train station", options: ["hotel", "library", "supermarket", "bank"], a: "hotel" },
            { sent: "**Turn** straight ahead at the corner.", wrong: "Turn", options: ["Go", "Walk", "Cross", "Stop"], a: "Go" },
            { sent: "The tourist is looking at the **block** to find the museum.", wrong: "block", options: ["map", "car", "bicycle", "street"], a: "map" },
            { sent: "She takes the **bicycle** to fly to London.", wrong: "bicycle", options: ["plane", "subway", "train", "bus"], a: "plane" },
            { sent: "I need money from the **library**.", wrong: "library", options: ["bank", "park", "supermarket", "museum"], a: "bank" },
            { sent: "We are going **shopping** to see the famous buildings.", wrong: "shopping", options: ["sightseeing", "sleeping", "walking", "eating"], a: "sightseeing" },
            { sent: "Send your letter at the **supermarket**.", wrong: "supermarket", options: ["post office", "bank", "hospital", "hotel"], a: "post office" },
            { sent: "**Cross** left at the traffic light.", wrong: "Cross", options: ["Turn", "Go", "Stop", "Walk"], a: "Turn" },
            { sent: "The subway goes **in the sky**.", wrong: "in the sky", options: ["underground", "on the street", "on the water", "in the trees"], a: "underground" },
            { sent: "I go to school on **car**.", wrong: "car", options: ["foot", "plane", "train", "subway"], a: "foot" },
            { sent: "Wait for the bus at the **museum**.", wrong: "museum", options: ["bus stop", "library", "post office", "hospital"], a: "bus stop" },
            { sent: "The school is **next of** the park.", wrong: "next of", options: ["next to", "next for", "next in", "next at"], a: "next to" },
            { sent: "The bank is **between** the street.", wrong: "between", options: ["across", "next", "near", "behind"], a: "across" },
            { sent: "I travel **on** train to the city.", wrong: "on", options: ["by", "in", "at", "with"], a: "by" },
            { sent: "The restaurant is **in front to** the hotel.", wrong: "in front to", options: ["in front of", "in front for", "in front at", "in front with"], a: "in front of" },
            { sent: "Meet me **in** the corner of Main Street.", wrong: "in", options: ["on", "at", "to", "for"], a: "on" },
            { sent: "She drives a **bicycle** to work.", wrong: "bicycle", options: ["car", "subway", "plane", "train"], a: "car" },
            { sent: "The **tourist** is an animal in the zoo.", wrong: "tourist", options: ["lion", "map", "camera", "block"], a: "lion" },
            { sent: "**Go** the street carefully.", wrong: "Go", options: ["Cross", "Turn", "Stop", "Walk"], a: "Cross" },
            { sent: "The art is in the **hospital**.", wrong: "hospital", options: ["museum", "bank", "post office", "supermarket"], a: "museum" },
            { sent: "The train leaves from the **bus stop**.", wrong: "bus stop", options: ["train station", "library", "hotel", "park"], a: "train station" },
            { sent: "He rides a fast **plane** on the avenue.", wrong: "plane", options: ["motorcycle", "subway", "train", "block"], a: "motorcycle" },
            { sent: "The hospital is **between** the library.", wrong: "between", options: ["near", "across", "behind", "in front of"], a: "near" },
            { sent: "**Excuse you**, where is the park?", wrong: "Excuse you", options: ["Excuse me", "Excuse us", "Excuse him", "Excuse them"], a: "Excuse me" },
            { sent: "The shop is **behind of** the library.", wrong: "behind of", options: ["behind", "back", "near to", "next"], a: "behind" },
            { sent: "How do I **take** to the museum?", wrong: "take", options: ["get", "go", "turn", "walk"], a: "get" },
            { sent: "I like eating at the **bank**.", wrong: "bank", options: ["restaurant", "post office", "library", "hospital"], a: "restaurant" },
            { sent: "A very wide road is called a **corner**.", wrong: "corner", options: ["avenue", "block", "map", "subway"], a: "avenue" },
            { sent: "The car is parked **on** the library.", wrong: "on", options: ["behind", "between", "next", "across"], a: "behind" },
            { sent: "We walk **by** foot.", wrong: "by", options: ["on", "with", "in", "at"], a: "on" },
            { sent: "He is holding a **subway** to take photos.", wrong: "subway", options: ["camera", "map", "block", "bus"], a: "camera" },
            { sent: "The big **village** has tall buildings like New York.", wrong: "village", options: ["city", "park", "street", "block"], a: "city" },
            { sent: "**Walk** left at the museum.", wrong: "Walk", options: ["Turn", "Go", "Stop", "Cross"], a: "Turn" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 ITEMS) ---
        9: [
            { audio: "How do I get to the museum?", options: ["Go straight ahead and turn left.", "It is a bicycle.", "Yes, I do.", "I like apples."], a: "Go straight ahead and turn left." },
            { audio: "Where is the supermarket?", options: ["It is next to the bank.", "The car flies.", "The map is red.", "Turn left."], a: "It is next to the bank." },
            { audio: "Where do you buy food?", options: ["At the supermarket.", "In the sky.", "On the bicycle.", "At the post office."], a: "At the supermarket." },
            { audio: "How do you go to school?", options: ["I go on foot.", "I go on library.", "I go on museum.", "I go a map."], a: "I go on foot." },
            { audio: "What is between the park and the hospital?", options: ["The school is between them.", "A tourist is between them.", "Go straight ahead.", "The bus is yellow."], a: "The school is between them." },
            { audio: "Where is the bus stop?", options: ["It is in front of the museum.", "It is a car.", "It is a block.", "Yes, it is."], a: "It is in front of the museum." },
            { audio: "Where do tourists sleep?", options: ["They sleep in a hotel.", "They sleep in a subway.", "They sleep in a map.", "They sleep in a bank."], a: "They sleep in a hotel." },
            { audio: "How does the plane travel?", options: ["It flies high in the sky.", "It walks on the street.", "It reads a book.", "It goes straight ahead."], a: "It flies high in the sky." },
            { audio: "What is on the corner?", options: ["The post office is on the corner.", "The subway is fast.", "Turn right.", "Excuse me."], a: "The post office is on the corner." },
            { audio: "Where do you read books?", options: ["At the library.", "At the supermarket.", "On a motorcycle.", "In the sky."], a: "At the library." },
            { audio: "How do we travel to the city?", options: ["We take the train.", "We cross the street.", "We buy food.", "We look at the museum."], a: "We take the train." },
            { audio: "What is behind the library?", options: ["The restaurant is behind it.", "The bicycle is behind it.", "Go past it.", "Turn left."], a: "The restaurant is behind it." },
            { audio: "Where do doctors work?", options: ["In the hospital.", "In the post office.", "On the corner.", "By train."], a: "In the hospital." },
            { audio: "How many blocks do I go?", options: ["Go straight for two blocks.", "Go a museum.", "Go a bank.", "Go on foot."], a: "Go straight for two blocks." },
            { audio: "What do you use when you are lost?", options: ["I use a map.", "I use a hospital.", "I use a hotel.", "I use an avenue."], a: "I use a map." },
            { audio: "Where is your house?", options: ["It is near the park.", "It is a bicycle.", "It is a tourist.", "It is sightseeing."], a: "It is near the park." },
            { audio: "What vehicle goes underground?", options: ["The subway.", "The plane.", "The museum.", "The block."], a: "The subway." },
            { audio: "How do you ask a stranger for help?", options: ["You say 'Excuse me'.", "You say 'Turn right'.", "You say 'Go past'.", "You say 'On foot'."], a: "You say 'Excuse me'." },
            { audio: "Where does the train leave from?", options: ["It leaves from the train station.", "It leaves from the supermarket.", "It leaves from the library.", "It leaves from the hospital."], a: "It leaves from the train station." },
            { audio: "What vehicle has two wheels and no motor?", options: ["A bicycle.", "A car.", "A subway.", "A bus."], a: "A bicycle." },
            { audio: "Where do you wait for a bus?", options: ["At the bus stop.", "At the bank.", "In the sky.", "In the hotel."], a: "At the bus stop." },
            { audio: "How is the street today?", options: ["It is very quiet.", "It is a map.", "It is a tourist.", "It is an avenue."], a: "It is very quiet." },
            { audio: "What does the tourist have?", options: ["He has a camera.", "He has a museum.", "He has a hospital.", "He has a corner."], a: "He has a camera." },
            { audio: "Where are the shops?", options: ["They are on the avenue.", "They are in the sky.", "They are on the plane.", "They are on the subway."], a: "They are on the avenue." },
            { audio: "What is across from the street?", options: ["The hotel is across from the street.", "Go straight ahead.", "The map is across.", "The foot is across."], a: "The hotel is across from the street." },
            { audio: "How do you cross the street?", options: ["You cross it carefully.", "You cross it a bank.", "You cross it a post office.", "You cross it a library."], a: "You cross it carefully." },
            { audio: "Where do kids play?", options: ["They play in the park.", "They play in the bank.", "They play in the post office.", "They play on the subway."], a: "They play in the park." },
            { audio: "What do you say to give directions to turn?", options: ["Turn left or turn right.", "Museum or park.", "Car or bus.", "Bank or hospital."], a: "Turn left or turn right." },
            { audio: "How do you travel by air?", options: ["By plane.", "By bicycle.", "By motorcycle.", "By subway."], a: "By plane." },
            { audio: "Where do you get money?", options: ["From the bank.", "From the park.", "From the library.", "From the hospital."], a: "From the bank." },
            { audio: "What is a big city?", options: ["New York is a big city.", "A bicycle is a big city.", "A map is a big city.", "A block is a big city."], a: "New York is a big city." },
            { audio: "Where do you send a letter?", options: ["At the post office.", "At the supermarket.", "At the train station.", "At the bus stop."], a: "At the post office." },
            { audio: "How do you travel if you don't have a car?", options: ["I go on foot or take the bus.", "I go on museum.", "I go on bank.", "I go on library."], a: "I go on foot or take the bus." },
            { audio: "What do you do when you visit a new city?", options: ["I go sightseeing.", "I go sleeping.", "I go shopping for cars.", "I go planting trees."], a: "I go sightseeing." },
            { audio: "Where do you eat food?", options: ["At a restaurant.", "At a library.", "At a post office.", "At a bank."], a: "At a restaurant." },
            { audio: "How fast is the motorcycle?", options: ["It is very fast.", "It is a street.", "It is a corner.", "It is a map."], a: "It is very fast." },
            { audio: "What do you do if you are lost?", options: ["I ask for directions.", "I buy food.", "I sleep in a hotel.", "I read a book."], a: "I ask for directions." },
            { audio: "Where is the hospital?", options: ["Go past the park, it is on the right.", "It is a car.", "It is a plane.", "It is on foot."], a: "Go past the park, it is on the right." },
            { audio: "What does 'Go past' mean?", options: ["It means walk near it and continue.", "It means stop.", "It means turn left.", "It means cross the street."], a: "It means walk near it and continue." },
            { audio: "Where is the museum located?", options: ["It is on the corner of the avenue.", "It is a bicycle.", "It flies high.", "It is on foot."], a: "It is on the corner of the avenue." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 ITEMS) ---
        10: [
            { audio: "Go straight ahead for two blocks.", sent: "___ straight ___ for two blocks.", blanks: ["Go", "ahead"] },
            { audio: "Turn left at the corner.", sent: "___ left at the ___.", blanks: ["Turn", "corner"] },
            { audio: "Excuse me, where is the museum?", sent: "___ me, where is the ___?", blanks: ["Excuse", "museum"] },
            { audio: "How do I get to the library?", sent: "How do I ___ to the ___?", blanks: ["get", "library"] },
            { audio: "The bank is next to the supermarket.", sent: "The bank is ___ ___ the supermarket.", blanks: ["next", "to"] },
            { audio: "The school is between the park and the hospital.", sent: "The school is ___ the park and the ___.", blanks: ["between", "hospital"] },
            { audio: "The hotel is across from the street.", sent: "The hotel is ___ ___ the street.", blanks: ["across", "from"] },
            { audio: "I go to school on foot.", sent: "I go to school ___ ___.", blanks: ["on", "foot"] },
            { audio: "She takes the subway to the city.", sent: "She takes the ___ to the ___.", blanks: ["subway", "city"] },
            { audio: "Look at the map.", sent: "___ at the ___.", blanks: ["Look", "map"] },
            { audio: "Turn right at the bank.", sent: "___ right at the ___.", blanks: ["Turn", "bank"] },
            { audio: "The post office is on the corner.", sent: "The post office is ___ the ___.", blanks: ["on", "corner"] },
            { audio: "The bus stop is in front of the museum.", sent: "The bus stop is in ___ ___ the museum.", blanks: ["front", "of"] },
            { audio: "The restaurant is behind the library.", sent: "The restaurant is ___ the ___.", blanks: ["behind", "library"] },
            { audio: "Don't cross the street here.", sent: "___ cross the ___ here.", blanks: ["Don't", "street"] },
            { audio: "Go past the hospital.", sent: "___ ___ the hospital.", blanks: ["Go", "past"] },
            { audio: "My house is near the park.", sent: "My house is ___ the ___.", blanks: ["near", "park"] },
            { audio: "The tourist has a camera.", sent: "The ___ has a ___.", blanks: ["tourist", "camera"] },
            { audio: "We are going sightseeing today.", sent: "We are going ___ ___.", blanks: ["sightseeing", "today"] },
            { audio: "My dad drives a car.", sent: "My dad ___ a ___.", blanks: ["drives", "car"] },
            { audio: "I ride my bicycle to the park.", sent: "I ride my ___ to the ___.", blanks: ["bicycle", "park"] },
            { audio: "He has a fast motorcycle.", sent: "He ___ a fast ___.", blanks: ["has", "motorcycle"] },
            { audio: "We travel by train.", sent: "We ___ ___ train.", blanks: ["travel", "by"] },
            { audio: "The plane flies high.", sent: "The ___ ___ high.", blanks: ["plane", "flies"] },
            { audio: "If you are lost, ask for directions.", sent: "If you are lost, ___ for ___.", blanks: ["ask", "directions"] },
            { audio: "Can you give me directions?", sent: "Can you ___ me ___?", blanks: ["give", "directions"] },
            { audio: "It is close, let's walk.", sent: "It is close, ___ ___.", blanks: ["let's", "walk"] },
            { audio: "This street is very quiet.", sent: "This ___ is very ___.", blanks: ["street", "quiet"] },
            { audio: "New York is a big city.", sent: "New York ___ a big ___.", blanks: ["is", "city"] },
            { audio: "The shops are on the avenue.", sent: "The shops are ___ the ___.", blanks: ["on", "avenue"] },
            { audio: "I need money from the bank.", sent: "I need ___ from the ___.", blanks: ["money", "bank"] },
            { audio: "We buy food at the supermarket.", sent: "We buy ___ at the ___.", blanks: ["food", "supermarket"] },
            { audio: "Children go to school.", sent: "Children ___ to ___.", blanks: ["go", "school"] },
            { audio: "Doctors work in the hospital.", sent: "Doctors ___ in the ___.", blanks: ["work", "hospital"] },
            { audio: "Read books at the library.", sent: "___ books at the ___.", blanks: ["Read", "library"] },
            { audio: "The train leaves from the station.", sent: "The train ___ from the ___.", blanks: ["leaves", "station"] },
            { audio: "Tourists sleep in a hotel.", sent: "Tourists ___ in a ___.", blanks: ["sleep", "hotel"] },
            { audio: "Wait at the bus stop.", sent: "___ at the bus ___.", blanks: ["Wait", "stop"] },
            { audio: "The art is in the museum.", sent: "The art is ___ the ___.", blanks: ["in", "museum"] },
            { audio: "Walk one block and stop.", sent: "___ one ___ and stop.", blanks: ["Walk", "block"] }
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
                    { speaker: "Tourist", text: "___ me. How do I get to the museum?", options: ["Excuse", "Thank", "Stop"], a: "Excuse" },
                    { speaker: "Albert", text: "Oh, it is not far. Go straight ___ for two blocks.", options: ["ahead", "left", "right"], a: "ahead" },
                    { speaker: "Tourist", text: "Do I ___ left at the bank?", options: ["turn", "walk", "go"], a: "turn" },
                    { speaker: "Albert", text: "Yes. The museum is ___ the park.", options: ["next to", "between", "on"], a: "next to" },
                    { speaker: "Tourist", text: "Thank you for the ___!", options: ["directions", "money", "cars"], a: "directions" } // Added filler line to match 5 blanks
                ]
            },
            {
                title: "Dialogue 2",
                lines: [
                    { speaker: "Celine", text: "I am lost. Can we look at the ___?", options: ["map", "car", "subway"], a: "map" },
                    { speaker: "Albert", text: "Sure. We are on Park ___ right now.", options: ["Avenue", "Corner", "Block"], a: "Avenue" },
                    { speaker: "Celine", text: "We need to find the hotel. Is it ___ here?", options: ["near", "across", "between"], a: "near" },
                    { speaker: "Albert", text: "Yes. We can go on ___ because it is very close.", options: ["foot", "car", "train"], a: "foot" },
                    { speaker: "Celine", text: "Great. Let's ___ the street carefully.", options: ["cross", "turn", "stop"], a: "cross" }
                ]
            },
            {
                title: "Dialogue 3",
                lines: [
                    { speaker: "Tourist", text: "Excuse me, can you give me ___ to the library?", options: ["directions", "blocks", "maps"], a: "directions" },
                    { speaker: "Celine", text: "Yes! Go ___ the supermarket.", options: ["past", "between", "behind"], a: "past" },
                    { speaker: "Tourist", text: "Is the library on the ___?", options: ["corner", "straight", "walk"], a: "corner" },
                    { speaker: "Celine", text: "No, it is ___ the school and the post office.", options: ["between", "next", "front"], a: "between" },
                    { speaker: "Tourist", text: "Thank you! I will ___ there now.", options: ["walk", "drive", "fly"], a: "walk" }
                ]
            },
            {
                title: "Dialogue 4",
                lines: [
                    { speaker: "Albert", text: "How do you go to the city center? Do you take a ___?", options: ["car", "foot", "block"], a: "car" },
                    { speaker: "Celine", text: "No, I take the ___. It is very fast.", options: ["subway", "plane", "map"], a: "subway" },
                    { speaker: "Albert", text: "Where is the subway ___?", options: ["station", "museum", "hospital"], a: "station" },
                    { speaker: "Celine", text: "It is ___ the big bank.", options: ["behind", "between", "cross"], a: "behind" },
                    { speaker: "Albert", text: "I see it! Let's ___ there together.", options: ["go", "turn", "cross"], a: "go" }
                ]
            },
            {
                title: "Dialogue 5",
                lines: [
                    { speaker: "Mother", text: "Remember, ___ cross the street here!", options: ["don't", "doesn't", "no"], a: "don't" },
                    { speaker: "Son", text: "Why not, Mom?", options: ["Okay", "Yes", "No"], a: "Okay" }, // Filler
                    { speaker: "Mother", text: "It is dangerous. We must cross at the ___.", options: ["corner", "straight", "map"], a: "corner" },
                    { speaker: "Son", text: "Okay. Is the toy shop ___ the restaurant?", options: ["in front of", "next", "between"], a: "in front of" },
                    { speaker: "Mother", text: "No, it is ___ the park.", options: ["across from", "between", "next"], a: "across from" }
                ]
            },
            {
                title: "Dialogue 6",
                lines: [
                    { speaker: "Tourist", text: "I want to go ___ today.", options: ["sightseeing", "sleeping", "reading"], a: "sightseeing" },
                    { speaker: "Albert", text: "You should visit the art ___.", options: ["museum", "supermarket", "hospital"], a: "museum" },
                    { speaker: "Tourist", text: "That sounds good. Should I travel by ___?", options: ["bus", "foot", "map"], a: "bus" },
                    { speaker: "Albert", text: "Yes, take the yellow bus. The ___ is right here.", options: ["bus stop", "train station", "plane"], a: "bus stop" },
                    { speaker: "Tourist", text: "Thank you. I have my ___ ready!", options: ["camera", "bicycle", "subway"], a: "camera" }
                ]
            },
            {
                title: "Dialogue 7",
                lines: [
                    { speaker: "Celine", text: "My dad bought a new ___.", options: ["motorcycle", "subway", "plane"], a: "motorcycle" },
                    { speaker: "Albert", text: "Wow, is it fast?", options: ["Yes", "No", "Maybe"], a: "Yes" }, // Filler
                    { speaker: "Celine", text: "Yes, he ___ it to work every day.", options: ["rides", "drives", "flies"], a: "rides" },
                    { speaker: "Albert", text: "Where does he work?", options: ["In", "At", "On"], a: "In" }, // Filler
                    { speaker: "Celine", text: "He is a doctor. He works in the ___.", options: ["hospital", "post office", "library"], a: "hospital" }
                ]
            },
            {
                title: "Dialogue 8",
                lines: [
                    { speaker: "Albert", text: "I need money. Where is the ___?", options: ["bank", "library", "museum"], a: "bank" },
                    { speaker: "Celine", text: "Go straight ahead for one ___.", options: ["block", "foot", "map"], a: "block" },
                    { speaker: "Albert", text: "Then do I turn ___?", options: ["right", "cross", "past"], a: "right" },
                    { speaker: "Celine", text: "Yes, turn right. It is ___ the corner.", options: ["on", "at", "in"], a: "on" },
                    { speaker: "Albert", text: "Thanks! I will go by ___ because I have it here.", options: ["bicycle", "plane", "subway"], a: "bicycle" }
                ]
            },
            {
                title: "Dialogue 9",
                lines: [
                    { speaker: "Tourist", text: "Excuse me, where do I buy food?", options: ["buy", "sell", "give"], a: "buy" }, // Filler
                    { speaker: "Celine", text: "At the ___. It is very close.", options: ["supermarket", "library", "museum"], a: "supermarket" },
                    { speaker: "Tourist", text: "Do I ___ straight ahead?", options: ["go", "turn", "cross"], a: "go" },
                    { speaker: "Celine", text: "Yes, go straight and ___ the avenue.", options: ["cross", "corner", "past"], a: "cross" },
                    { speaker: "Tourist", text: "Is it ___ the post office and the school?", options: ["between", "behind", "next"], a: "between" }
                ]
            },
            {
                title: "Dialogue 10",
                lines: [
                    { speaker: "Albert", text: "We are going to London for our vacation.", options: ["London", "Paris", "Rome"], a: "London" }, // Filler
                    { speaker: "Celine", text: "How do you travel to London? By ___?", options: ["plane", "subway", "bicycle"], a: "plane" },
                    { speaker: "Albert", text: "Yes, the plane flies very ___ in the sky.", options: ["high", "fast", "straight"], a: "high" },
                    { speaker: "Celine", text: "Where do you sleep when you are a ___?", options: ["tourist", "map", "block"], a: "tourist" },
                    { speaker: "Albert", text: "We sleep in a nice ___.", options: ["hotel", "school", "bank"], a: "hotel" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER (10 ITEMS) ---
        12: [
            {
                title: "Text 1: Finding the Museum",
                text: "The tourist is lost in the city. He wants to visit the art museum. He stops a police officer on the street and says, \"Excuse me, how do I get to the museum?\" The officer smiles and says, \"It is very close. Go straight ahead for two blocks. Then, turn left at the corner. The museum is on your right, next to the big park.\" The tourist thanks the officer and walks away.",
                questions: [
                    { q: "Who is lost in the city?", options: ["A police officer.", "A tourist.", "A student."], a: "A tourist." },
                    { q: "What does the tourist want to visit?", options: ["The hospital.", "The art museum.", "The supermarket."], a: "The art museum." },
                    { q: "How many blocks does he need to go straight ahead?", options: ["One block.", "Two blocks.", "Three blocks."], a: "Two blocks." },
                    { q: "Where does he need to turn left?", options: ["At the corner.", "At the bank.", "At the library."], a: "At the corner." },
                    { q: "What is next to the museum?", options: ["The hospital.", "The big park.", "The train station."], a: "The big park." }
                ]
            },
            {
                title: "Text 2: Celine's Neighborhood",
                text: "Celine lives on a very quiet street. Her house is near the school, so she goes to school on foot every day. Across from her house, there is a small library where she reads books. Between the library and the bank, there is a supermarket. Celine's mother drives her car to the supermarket to buy food. The neighborhood is very nice and clean.",
                questions: [
                    { q: "How is Celine's street?", options: ["Very noisy.", "Very quiet.", "Very big."], a: "Very quiet." },
                    { q: "How does Celine go to school?", options: ["By bus.", "On foot.", "By subway."], a: "On foot." },
                    { q: "What is across from her house?", options: ["A small library.", "A train station.", "A hospital."], a: "A small library." },
                    { q: "Where is the supermarket?", options: ["Behind the park.", "Between the library and the bank.", "Next to the school."], a: "Between the library and the bank." },
                    { q: "What does Celine's mother drive?", options: ["A motorcycle.", "A car.", "A train."], a: "A car." }
                ]
            },
            {
                title: "Text 3: Transportation in the City",
                text: "New York is a big city with many means of transportation. If you want to go fast, you can take the subway. It travels underground. If you want to see the streets, you can take a yellow bus. Many people also ride bicycles in the park. To travel to another country, you need to go to the airport and take a plane. Tourists love sightseeing in this city.",
                questions: [
                    { q: "What is New York?", options: ["A small street.", "A big city.", "A quiet park."], a: "A big city." },
                    { q: "What travels underground?", options: ["The subway.", "The plane.", "The bicycle."], a: "The subway." },
                    { q: "What color is the bus in the text?", options: ["Red.", "Yellow.", "Blue."], a: "Yellow." },
                    { q: "Where do many people ride bicycles?", options: ["In the sky.", "In the park.", "In the museum."], a: "In the park." },
                    { q: "What do you need to take to travel to another country?", options: ["A plane.", "A motorcycle.", "A subway."], a: "A plane." }
                ]
            },
            {
                title: "Text 4: A Day of Sightseeing",
                text: "Albert and his family are tourists in London. They have a map and a camera. First, they wait at the bus stop and take a red bus to the center. They get off the bus and go past the bank. They see a beautiful old museum. They take many photos there. Then, they cross the avenue carefully to eat at a restaurant. It is a great day!",
                questions: [
                    { q: "What do Albert and his family have?", options: ["A map and a camera.", "A bicycle and a plane.", "A book and a pen."], a: "A map and a camera." },
                    { q: "Where do they wait for the bus?", options: ["At the train station.", "At the bus stop.", "At the hotel."], a: "At the bus stop." },
                    { q: "What color is the bus?", options: ["Yellow.", "Red.", "Green."], a: "Red." },
                    { q: "What do they go past?", options: ["The museum.", "The bank.", "The supermarket."], a: "The bank." },
                    { q: "Where do they eat?", options: ["At a restaurant.", "At the hospital.", "In the library."], a: "At a restaurant." }
                ]
            },
            {
                title: "Text 5: The Busy Avenue",
                text: "Main Avenue is always busy. There are many cars and motorcycles. On the corner, there is a big post office. Next to the post office is a hospital. Doctors and nurses work there. Across from the hospital, you can see a train station. People travel by train to go to work. Do not cross the street here because there are too many cars.",
                questions: [
                    { q: "How is Main Avenue?", options: ["Very quiet.", "Always busy.", "Very small."], a: "Always busy." },
                    { q: "What is on the corner?", options: ["A big post office.", "A small library.", "A quiet park."], a: "A big post office." },
                    { q: "Who works in the hospital?", options: ["Tourists.", "Doctors and nurses.", "Teachers."], a: "Doctors and nurses." },
                    { q: "What is across from the hospital?", options: ["A train station.", "A supermarket.", "A museum."], a: "A train station." },
                    { q: "Why shouldn't you cross the street there?", options: ["Because there is a river.", "Because there are too many cars.", "Because it is dark."], a: "Because there are too many cars." }
                ]
            },
            {
                title: "Text 6: Going to the Bank",
                text: "Celine needs some money, so she asks her dad for directions to the bank. Her dad says, \"Go straight ahead on this street. Walk for one block. Then, turn right at the traffic light. The bank is on your left, between the bakery and the library.\" Celine says, \"Thank you, Dad. I will go on my bicycle.\"",
                questions: [
                    { q: "What does Celine need?", options: ["Food.", "Money.", "A book."], a: "Money." },
                    { q: "What does she ask her dad for?", options: ["A map.", "Directions.", "A camera."], a: "Directions." },
                    { q: "How many blocks does she need to walk?", options: ["One block.", "Two blocks.", "Three blocks."], a: "One block." },
                    { q: "Where does she turn right?", options: ["At the corner.", "At the traffic light.", "At the hospital."], a: "At the traffic light." },
                    { q: "How is Celine going to the bank?", options: ["On foot.", "On her bicycle.", "By subway."], a: "On her bicycle." }
                ]
            },
            {
                title: "Text 7: The Tourist's Mistake",
                text: "A tourist is holding a map upside down. He is looking for his hotel. He goes straight ahead and turns left. But he is not at the hotel; he is at the school! A teacher sees him and says, \"Excuse me, you are lost. The hotel is not here. It is behind the museum. Go past the park and you will see it.\" The tourist smiles and thanks the teacher.",
                questions: [
                    { q: "How is the tourist holding the map?", options: ["Perfectly.", "Upside down.", "In his pocket."], a: "Upside down." },
                    { q: "What is he looking for?", options: ["His hotel.", "The school.", "The bank."], a: "His hotel." },
                    { q: "Where does he arrive by mistake?", options: ["At the hospital.", "At the school.", "At the museum."], a: "At the school." },
                    { q: "Who helps the tourist?", options: ["A police officer.", "A teacher.", "A doctor."], a: "A teacher." },
                    { q: "Where is the hotel really located?", options: ["In front of the bank.", "Behind the museum.", "Next to the school."], a: "Behind the museum." }
                ]
            },
            {
                title: "Text 8: Different Ways to Travel",
                text: "There are many ways to travel. If a place is near, you can go on foot. Walking is good for you. If you want to exercise, you can ride a bike. In a big city, the subway is the best choice because it avoids traffic on the street. To visit a different city, you can take a train or drive a car. To cross the ocean, you must take a plane.",
                questions: [
                    { q: "How can you travel if a place is near?", options: ["On foot.", "By plane.", "By train."], a: "On foot." },
                    { q: "What is a good way to exercise while traveling?", options: ["Riding a bike.", "Taking the subway.", "Driving a car."], a: "Riding a bike." },
                    { q: "Why is the subway the best choice in a big city?", options: ["It flies in the sky.", "It avoids traffic on the street.", "It is very slow."], a: "It avoids traffic on the street." },
                    { q: "What can you take to visit a different city?", options: ["A train or a car.", "A bicycle or walk.", "A subway or on foot."], a: "A train or a car." },
                    { q: "What must you take to cross the ocean?", options: ["A bus.", "A plane.", "A motorcycle."], a: "A plane." }
                ]
            },
            {
                title: "Text 9: The Corner Shop",
                text: "At the corner of my street, there is a small shop. It is a supermarket. My family buys food there every day. In front of the supermarket, there is a bus stop. I wait there for the school bus every morning. Next to the shop, there is an old library. The neighborhood is very beautiful and everything is close.",
                questions: [
                    { q: "What is at the corner of the street?", options: ["A hospital.", "A small shop (supermarket).", "A train station."], a: "A small shop (supermarket)." },
                    { q: "What does the family buy there?", options: ["Books.", "Food.", "Cameras."], a: "Food." },
                    { q: "What is in front of the supermarket?", options: ["A bus stop.", "A museum.", "A park."], a: "A bus stop." },
                    { q: "What does the narrator wait for every morning?", options: ["The subway.", "The school bus.", "A taxi."], a: "The school bus." },
                    { q: "What is next to the shop?", options: ["An old library.", "A new hotel.", "A big bank."], a: "An old library." }
                ]
            },
            {
                title: "Text 10: Following the Map",
                text: "\"Look at the map,\" Albert says to Celine. \"We are at the post office. We need to go to the restaurant.\" Celine looks at the map. \"Okay, let's go straight ahead for two blocks. Then, we turn left. The restaurant is across from the park.\" They walk carefully and cross the avenue. They find the restaurant easily and eat a delicious pizza.",
                questions: [
                    { q: "What does Albert tell Celine to look at?", options: ["The camera.", "The map.", "The subway."], a: "The map." },
                    { q: "Where are Albert and Celine at the beginning?", options: ["At the post office.", "At the restaurant.", "At the park."], a: "At the post office." },
                    { q: "How many blocks do they go straight ahead?", options: ["One block.", "Two blocks.", "Three blocks."], a: "Two blocks." },
                    { q: "Where is the restaurant?", options: ["Across from the park.", "Behind the bank.", "Next to the school."], a: "Across from the park." },
                    { q: "What do they eat at the restaurant?", options: ["Apples.", "Pizza.", "Sandwiches."], a: "Pizza." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER CONTEXT (10 ITEMS) ---
        13: [
            {
                title: "Audio Script 1",
                audio: "Excuse me, where is the library? Oh, it is very near. Go straight ahead for one block and turn left. It is between the school and the post office.",
                questions: [
                    { q: "What place is the person looking for?", options: ["The hospital.", "The library.", "The bank."], a: "The library." },
                    { q: "Is the place near or far?", options: ["It is far.", "It is very near.", "It is in another city."], a: "It is very near." },
                    { q: "How many blocks should the person go straight?", options: ["One block.", "Two blocks.", "Three blocks."], a: "One block." },
                    { q: "Which direction should the person turn?", options: ["Turn right.", "Turn left.", "Go past."], a: "Turn left." },
                    { q: "Where is the library located?", options: ["Between the school and the post office.", "Across from the park.", "Next to the museum."], a: "Between the school and the post office." }
                ]
            },
            {
                title: "Audio Script 2",
                audio: "I am a tourist in New York. I have a map and a camera. Today, I want to go sightseeing. I will take the subway to the museum because the subway is fast.",
                questions: [
                    { q: "Who is the speaker?", options: ["A doctor.", "A tourist.", "A teacher."], a: "A tourist." },
                    { q: "What does the speaker have?", options: ["A bicycle and a book.", "A map and a camera.", "A car and a phone."], a: "A map and a camera." },
                    { q: "What does the speaker want to do today?", options: ["Sleep in the hotel.", "Go sightseeing.", "Read at the library."], a: "Go sightseeing." },
                    { q: "How will the speaker travel?", options: ["By subway.", "By bus.", "On foot."], a: "By subway." },
                    { q: "Why will the speaker take this transport?", options: ["Because it is slow.", "Because it is fast.", "Because it flies."], a: "Because it is fast." }
                ]
            },
            {
                title: "Audio Script 3",
                audio: "My dad drives his car to work every day. He works in a big hospital on Main Avenue. The hospital is across from a beautiful green park.",
                questions: [
                    { q: "How does the dad go to work?", options: ["He rides a bicycle.", "He drives a car.", "He takes a plane."], a: "He drives a car." },
                    { q: "How often does he drive to work?", options: ["Every week.", "Every day.", "On weekends."], a: "Every day." },
                    { q: "Where does he work?", options: ["In a supermarket.", "In a big hospital.", "In a bank."], a: "In a big hospital." },
                    { q: "What street is the workplace on?", options: ["Main Avenue.", "Park Street.", "Museum Corner."], a: "Main Avenue." },
                    { q: "What is across from the workplace?", options: ["A beautiful green park.", "A train station.", "A post office."], a: "A beautiful green park." }
                ]
            },
            {
                title: "Audio Script 4",
                audio: "Don't cross the street here! It is dangerous. Turn right and walk to the corner. You can cross the avenue safely at the traffic light.",
                questions: [
                    { q: "What does the speaker tell the person NOT to do?", options: ["Don't cross the street here.", "Don't turn left.", "Don't go straight."], a: "Don't cross the street here." },
                    { q: "Why shouldn't the person cross there?", options: ["Because it is quiet.", "Because it is dangerous.", "Because it is near."], a: "Because it is dangerous." },
                    { q: "Which way should the person turn?", options: ["Turn left.", "Turn right.", "Go past."], a: "Turn right." },
                    { q: "Where should the person walk to?", options: ["To the museum.", "To the corner.", "To the hotel."], a: "To the corner." },
                    { q: "Where can the person cross safely?", options: ["At the traffic light.", "Behind the bank.", "In front of the hospital."], a: "At the traffic light." }
                ]
            },
            {
                title: "Audio Script 5",
                audio: "To travel to London, we must go to the airport and take a plane. The plane flies high in the sky. When we arrive, we will sleep in a big hotel.",
                questions: [
                    { q: "Where are they traveling to?", options: ["To Paris.", "To London.", "To New York."], a: "To London." },
                    { q: "What means of transportation will they take?", options: ["A train.", "A plane.", "A subway."], a: "A plane." },
                    { q: "Where do they have to go to catch their transport?", options: ["The bus stop.", "The airport.", "The library."], a: "The airport." },
                    { q: "What does the transport do?", options: ["It travels underground.", "It flies high in the sky.", "It drives on the street."], a: "It flies high in the sky." },
                    { q: "Where will they sleep when they arrive?", options: ["In a park.", "In a big hotel.", "In a hospital."], a: "In a big hotel." }
                ]
            },
            {
                title: "Audio Script 6",
                audio: "I need some money to buy food. First, I will walk to the bank. It is next to the post office. Then, I will go to the supermarket. The supermarket is on the corner.",
                questions: [
                    { q: "What does the speaker need?", options: ["A map.", "Money.", "A book."], a: "Money." },
                    { q: "Why does the speaker need it?", options: ["To buy a car.", "To buy food.", "To take a bus."], a: "To buy food." },
                    { q: "Where will the speaker go first?", options: ["To the bank.", "To the museum.", "To the school."], a: "To the bank." },
                    { q: "Where is the first place located?", options: ["Next to the post office.", "Behind the park.", "Across from the hospital."], a: "Next to the post office." },
                    { q: "Where is the supermarket?", options: ["On the corner.", "In the sky.", "Underground."], a: "On the corner." }
                ]
            },
            {
                title: "Audio Script 7",
                audio: "Look at the map on my phone. We are here, in front of the school. The restaurant is behind the school. We can go on foot because it is very close.",
                questions: [
                    { q: "What is the speaker looking at?", options: ["A book.", "A map on the phone.", "A camera."], a: "A map on the phone." },
                    { q: "Where are they right now?", options: ["In front of the school.", "Next to the bank.", "Behind the museum."], a: "In front of the school." },
                    { q: "Where do they want to go?", options: ["To the library.", "To the restaurant.", "To the park."], a: "To the restaurant." },
                    { q: "Where is their destination located?", options: ["Behind the school.", "Across the avenue.", "On the corner."], a: "Behind the school." },
                    { q: "How will they get there?", options: ["By car.", "On foot.", "By motorcycle."], a: "On foot." }
                ]
            },
            {
                title: "Audio Script 8",
                audio: "The train leaves from the station at 5 PM. We travel by train to visit my grandmother. The train is very long and goes fast. I like looking out the window during the trip.",
                questions: [
                    { q: "What leaves from the station?", options: ["The bus.", "The train.", "The subway."], a: "The train." },
                    { q: "What time does it leave?", options: ["At 5 PM.", "At 8 AM.", "At noon."], a: "At 5 PM." },
                    { q: "Who are they going to visit?", options: ["A doctor.", "The grandmother.", "A tourist."], a: "The grandmother." },
                    { q: "How is the transport described?", options: ["Short and slow.", "Long and fast.", "Small and quiet."], a: "Long and fast." },
                    { q: "What does the speaker like to do during the trip?", options: ["Read a book.", "Look out the window.", "Sleep in a hotel."], a: "Look out the window." }
                ]
            },
            {
                title: "Audio Script 9",
                audio: "My brother has a red motorcycle. He rides it on the avenue. He goes past the museum and the big library every morning. He loves his motorcycle.",
                questions: [
                    { q: "What does the brother have?", options: ["A blue bicycle.", "A red motorcycle.", "A yellow car."], a: "A red motorcycle." },
                    { q: "Where does he ride it?", options: ["On the sidewalk.", "On the avenue.", "In the park."], a: "On the avenue." },
                    { q: "What does he go past every morning?", options: ["The museum and the library.", "The hospital and the bank.", "The supermarket and the post office."], a: "The museum and the library." },
                    { q: "When does he ride?", options: ["Every night.", "Every morning.", "Only on weekends."], a: "Every morning." },
                    { q: "How does he feel about his transport?", options: ["He hates it.", "He loves it.", "He is scared of it."], a: "He loves it." }
                ]
            },
            {
                title: "Audio Script 10",
                audio: "Excuse me, how do I get to the park? Go straight ahead for three blocks. Go past the bus stop. The park is very big, you can't miss it!",
                questions: [
                    { q: "What place is the person asking about?", options: ["The park.", "The hospital.", "The bank."], a: "The park." },
                    { q: "How does the person start the question politely?", options: ["\"Hello you.\"", "\"Excuse me.\"", "\"Hey.\""], a: "\"Excuse me.\"" },
                    { q: "How many blocks should they go straight ahead?", options: ["One block.", "Three blocks.", "Five blocks."], a: "Three blocks." },
                    { q: "What landmark should they go past?", options: ["The train station.", "The bus stop.", "The museum."], a: "The bus stop." },
                    { q: "How is the park described?", options: ["Very small.", "Very big.", "Very quiet."], a: "Very big." }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT (10 ITEMS) ---
        14: [
            {
                title: "Text 1: The City Center",
                text: "The city center is very busy. There are many cars on the [1] (avenue / plane / map). To cross the [2] (street / sky / foot) safely, you must wait at the corner. Next to the traffic light, there is a big [3] (bank / bicycle / tourist) where people get money. Behind it, you can see a beautiful [4] (park / subway / motorcycle) with green trees. We usually walk there on [5] (foot / car / train).",
                answers: ["avenue", "street", "bank", "park", "foot"]
            },
            {
                title: "Text 2: My Route to School",
                text: "Every morning, I go to [1] (school / museum / plane). I don't take the bus; I ride my [2] (bicycle / map / subway). I go [3] (straight / turn / cross) ahead for two blocks. Then, I [4] (turn / go / past) left at the post office. The school is right [5] (next / between / front) to the bakery.",
                answers: ["school", "bicycle", "straight", "turn", "next"]
            },
            {
                title: "Text 3: The Museum Visit",
                text: "Today, we are going [1] (sightseeing / sleeping / reading). We want to visit the art [2] (museum / supermarket / hospital). We take the [3] (subway / foot / map) because it travels fast underground. When we exit the station, the building is [4] (across / between / near) from us. A [5] (tourist / plane / corner) with a camera asks us for directions.",
                answers: ["sightseeing", "museum", "subway", "across", "tourist"]
            },
            {
                title: "Text 4: Traffic Rules",
                text: "When you drive a [1] (car / block / map), you must be careful. Do not drive fast near a [2] (hospital / sky / plane) because it must be quiet. Always stop at the [3] (corner / straight / walk) when the light is red. If people want to [4] (cross / turn / go) the street, wait for them. Safe driving is important in a big [5] (city / foot / train).",
                answers: ["car", "hospital", "corner", "cross", "city"]
            },
            {
                title: "Text 5: The Tourist Map",
                text: "\"Excuse me, can you give me [1] (directions / blocks / cars)?\" the tourist asks. He is looking at his [2] (map / bicycle / plane). I say, \"Yes. Go [3] (past / between / turn) the library. Then, turn [4] (right / cross / straight). The hotel is [5] (between / next / across) the bank and the restaurant.\"",
                answers: ["directions", "map", "past", "right", "between"]
            },
            {
                title: "Text 6: The Bakery and the Bank",
                text: "I need to buy food, so I go to the [1] (supermarket / train / subway). It is only one [2] (block / corner / foot) away. It is located [3] (in front / next / between) of the bus stop. After that, I need money, so I walk to the [4] (bank / park / hospital). The bank is [5] (near / across / past) the supermarket, just a short walk.",
                answers: ["supermarket", "block", "in front", "bank", "near"]
            },
            {
                title: "Text 7: Choosing Transportation",
                text: "If you travel far, you can take a [1] (plane / bicycle / foot). It flies high in the air. For traveling to another city, you can travel by [2] (train / subway / walk) from the train [3] (station / museum / hospital). If you like the wind, you can ride a fast [4] (motorcycle / map / block). But my favorite way to travel short distances is on [5] (foot / bus / car) because it is healthy.",
                answers: ["plane", "train", "station", "motorcycle", "foot"]
            },
            {
                title: "Text 8: The Corner Shop",
                text: "At the [1] (corner / straight / map) of my street, there is a small shop. It is a [2] (supermarket / train / plane) where my family buys food. [3] (In front / Next / Between) of the shop, there is a yellow bus. People wait at the bus [4] (stop / go / turn) every morning. The neighborhood is nice, and we love to [5] (walk / plane / subway) around it.",
                answers: ["corner", "supermarket", "In front", "stop", "walk"]
            },
            {
                title: "Text 9: A Walk in the Park",
                text: "It is Sunday. We are walking in the [1] (park / bank / subway). There are many trees and birds. The park is [2] (behind / between / cross) the big city library. My sister rides her [3] (bicycle / map / plane) on the path. We don't need a car today, we are here on [4] (foot / train / bus). It is a beautiful day for [5] (sightseeing / sleeping / crying) in nature.",
                answers: ["park", "behind", "bicycle", "foot", "sightseeing"]
            },
            {
                title: "Text 10: Getting to the Train Station",
                text: "\"How do I [1] (get / turn / cross) to the train station?\" Albert asks. Celine looks at her phone. \"Go [2] (straight / right / block) ahead on Main Street. Do not [3] (turn / straight / cross) left at the hospital. Go [4] (past / between / front) it. The station is on the right, [5] (next / across / between) to the post office.\"",
                answers: ["get", "straight", "turn", "past", "next"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 ITEMS) ---
        15: [
            {
                title: "Audio Script 1",
                audio: "Go straight ahead for two blocks. Then, turn left at the corner. The museum is on your right, next to the park.",
                text: "Go [1] ahead for two [2]. Then, [3] left at the corner. The [4] is on your right, [5] to the park.",
                answers: ["straight", "blocks", "turn", "museum", "next"]
            },
            {
                title: "Audio Script 2",
                audio: "Excuse me, how do I get to the library? Walk past the bank and cross the street. It is behind the supermarket.",
                text: "[1] me, how do I [2] to the library? Walk [3] the bank and [4] the street. It is [5] the supermarket.",
                answers: ["Excuse", "get", "past", "cross", "behind"]
            },
            {
                title: "Audio Script 3",
                audio: "My dad drives his car to the hospital every day. He is a doctor. The hospital is very big and is on the avenue.",
                text: "My dad [1] his [2] to the [3] every day. He is a doctor. The hospital is very [4] and is on the [5].",
                answers: ["drives", "car", "hospital", "big", "avenue"]
            },
            {
                title: "Audio Script 4",
                audio: "We are tourists in this beautiful city. We have a map and a camera. We love sightseeing on foot.",
                text: "We are [1] in this beautiful [2]. We have a [3] and a camera. We love [4] on [5].",
                answers: ["tourists", "city", "map", "sightseeing", "foot"]
            },
            {
                title: "Audio Script 5",
                audio: "The subway is very fast. It travels underground. We take the subway to the train station to visit my grandma.",
                text: "The [1] is very fast. It travels underground. We [2] the subway to the [3] [4] to visit my [5].",
                answers: ["subway", "take", "train", "station", "grandma"]
            },
            {
                title: "Audio Script 6",
                audio: "Don't cross the street here! It is dangerous. Turn right and walk to the corner.",
                text: "[1] cross the [2] here! It is dangerous. [3] right and [4] to the [5].",
                answers: ["Don't", "street", "Turn", "walk", "corner"]
            },
            {
                title: "Audio Script 7",
                audio: "I need money from the bank. The bank is between the post office and the restaurant. It is very close.",
                text: "I need money from the [1]. The bank is [2] the [3] office and the [4]. It is very [5].",
                answers: ["bank", "between", "post", "restaurant", "close"]
            },
            {
                title: "Audio Script 8",
                audio: "The plane flies high in the sky. It is faster than a bus or a train. We travel by plane to another country.",
                text: "The [1] flies high in the sky. It is faster than a [2] or a [3]. We [4] by plane to another [5].",
                answers: ["plane", "bus", "train", "travel", "country"]
            },
            {
                title: "Audio Script 9",
                audio: "I ride my bicycle to school. My school is across from the park. I park my bike near the gate.",
                text: "I [1] my [2] to school. My [3] is [4] from the [5].",
                answers: ["ride", "bicycle", "school", "across", "park"]
            },
            {
                title: "Audio Script 10",
                audio: "Wait at the bus stop. The yellow bus will come soon. You can ask the driver for directions if you are lost.",
                text: "[1] at the bus [2]. The yellow bus will come soon. You can [3] the driver for [4] if you are [5].",
                answers: ["Wait", "stop", "ask", "directions", "lost"]
            }
        ]
    }
});