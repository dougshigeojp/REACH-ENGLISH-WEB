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
 * GRADE 7, BIMESTER 2, CHAPTER 3
 * BATCH 1: TYPES 1 TO 5 (40 items each)
 */

window.initExercise({
    id: "7-2-3",
    grade: "7th Grade",
    bimester: "2",
    chapter: "3",
    title: "Travel, Vacations, and Problems",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES (40 ITEMS) ---
        1: [
            { words: ["your", "How", "vacation", "was", "?"], correct: "How was your vacation?" },
            { words: ["was", "terrible", "It", "disaster", "a"], correct: "It was a terrible disaster" },
            { words: ["the", "was", "flight", "delayed", "First,"], correct: "First, the flight was delayed" },
            { words: ["a", "There", "problem", "was", "the", "with", "hotel"], correct: "There was a problem with the hotel" },
            { words: ["hotel", "expensive", "Was", "the", "?"], correct: "Was the hotel expensive?" },
            { words: ["in", "were", "room", "no", "towels", "There", "the"], correct: "There were no towels in the room" },
            { words: ["suitcase", "Whose", "this", "is", "?"], correct: "Whose suitcase is this?" },
            { words: ["is", "mine", "suitcase", "That"], correct: "That suitcase is mine" },
            { words: ["for", "lost", "was", "It", "days", "two"], correct: "It was lost for two days" },
            { words: ["great", "vacation", "My", "was"], correct: "My vacation was great" },
            { words: ["The", "good", "weather", "was"], correct: "The weather was good" },
            { words: ["travelled", "to", "Spain", "We", "year", "last"], correct: "We travelled to Spain last year" },
            { words: ["the", "arrived", "late", "He", "airport", "at"], correct: "He arrived late at the airport" },
            { words: ["keys", "my", "lost", "I", "yesterday"], correct: "I lost my keys yesterday" },
            { words: ["found", "restaurant", "She", "a", "nice"], correct: "She found a nice restaurant" },
            { words: ["went", "the", "They", "beach", "to"], correct: "They went to the beach" },
            { words: ["hotel", "We", "online", "booked", "the"], correct: "We booked the hotel online" },
            { words: ["at", "I", "stayed", "home", "day", "all"], correct: "I stayed at home all day" },
            { words: ["left", "The", "bus", "8 PM", "at"], correct: "The bus left at 8 PM" },
            { words: ["visited", "museum", "We", "the"], correct: "We visited the museum" },
            { words: ["away", "The", "flew", "bird"], correct: "The bird flew away" },
            { words: ["passport", "his", "forgot", "He"], correct: "He forgot his passport" },
            { words: ["dad", "for", "My", "drove", "hours", "six"], correct: "My dad drove for six hours" },
            { words: ["broke", "phone", "My"], correct: "My phone broke" },
            { words: ["suitcase", "her", "packed", "She"], correct: "She packed her suitcase" },
            { words: ["helped", "guide", "us", "The"], correct: "The guide helped us" },
            { words: ["heavy", "is", "suitcase", "My"], correct: "My suitcase is heavy" },
            { words: ["carry", "I", "backpack", "my"], correct: "I carry my backpack" },
            { words: ["ticket", "your", "Here", "is", "bus"], correct: "Here is your bus ticket" },
            { words: ["at", "map", "Look", "the"], correct: "Look at the map" },
            { words: ["hotel", "was", "The", "clean"], correct: "The hotel was clean" },
            { words: ["is", "airport", "big", "The"], correct: "The airport is big" },
            { words: ["sunny", "beach", "The", "was"], correct: "The beach was sunny" },
            { words: ["problem", "with", "car", "We", "had", "a", "the"], correct: "We had a problem with the car" },
            { words: ["bad", "weather", "The", "was"], correct: "The weather was bad" },
            { words: ["terrible", "food", "The", "was"], correct: "The food was terrible" },
            { words: ["trip", "great", "The", "was"], correct: "The trip was great" },
            { words: ["crowded", "bus", "The", "was"], correct: "The bus was crowded" },
            { words: ["yours", "Are", "sunglasses", "these", "?"], correct: "Are these sunglasses yours?" },
            { words: ["blue", "ones", "are", "The", "hers"], correct: "The blue ones are hers" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES (40 ITEMS) ---
        2: [
            { lines: ["How was your vacation, Celine?", "It was a disaster!", "Really? What happened?", "The flight was delayed and my bag was lost."], order: [0, 1, 2, 3] },
            { lines: ["Was the hotel nice?", "No, it was bad.", "There were no towels in the room!", "That is terrible!"], order:[0, 1, 2, 3] },
            { lines: ["Look at this photo.", "Whose suitcase is this?", "It is mine. It was lost for two days.", "Oh no, poor you!"], order:[0, 1, 2, 3] },
            { lines: ["My vacation was great.", "Did you go to the beach?", "Yes, we went to the beach.", "The weather was very good."], order: [0, 1, 2, 3] },
            { lines: ["Did you travel last year?", "Yes, we travelled to Spain.", "Was it a good trip?", "It was amazing!"], order: [0, 1, 2, 3] },
            { lines: ["I forgot my passport!", "Oh no! Where did you leave it?", "I don't know, it is lost!", "We need to find it fast."], order: [0, 1, 2, 3] },
            { lines: ["We booked the hotel online.", "Was it expensive?", "No, it was very cheap.", "That is great!"], order: [0, 1, 2, 3] },
            { lines: ["Where were you yesterday?", "I stayed at home all day.", "Why didn't you go out?", "The weather was terrible."], order: [0, 1, 2, 3] },
            { lines: ["What time did you leave?", "The bus left at 8 PM.", "Were there many people?", "Yes, the station was crowded."], order: [0, 1, 2, 3] },
            { lines: ["Did you pack your suitcase?", "Yes, I packed it last night.", "Is it heavy?", "No, it is very light."], order: [0, 1, 2, 3] },
            { lines: ["I broke my phone on the trip.", "Oh no, what happened?", "It fell on the floor.", "Now you need a new one."], order: [0, 1, 2, 3] },
            { lines: ["Look at this extra ticket.", "Whose ticket is this?", "It is yours.", "Thank you so much!"], order: [0, 1, 2, 3] },
            { lines: ["We need to use the map.", "Are we lost?", "Yes, I can't find the hotel.", "Let me look at it."], order: [0, 1, 2, 3] },
            { lines: ["Take a photo with the camera.", "Okay, smile!", "The photo is great.", "Send it to me later."], order: [0, 1, 2, 3] },
            { lines: ["Did you buy a souvenir?", "Yes, I bought this magnet.", "Is it for me?", "No, it is mine!"], order: [0, 1, 2, 3] },
            { lines: ["Can I pay with a credit card?", "No, we only take cash.", "Oh, I need more money.", "There is a bank at the station."], order: [0, 1, 2, 3] },
            { lines: ["Meet me at the train station.", "Okay, what time?", "I will arrive at 3 PM.", "See you there!"], order: [0, 1, 2, 3] },
            { lines: ["How was the airport?", "It was very big and crowded.", "Was your flight delayed?", "Yes, we waited for two hours."], order: [0, 1, 2, 3] },
            { lines: ["New York is a big city.", "Did you visit the museums?", "Yes, we visited three museums.", "That sounds like a great trip."], order: [0, 1, 2, 3] },
            { lines: ["We had a problem with the car.", "What happened to it?", "My dad drove for six hours and it broke.", "Oh, that is a disaster."], order: [0, 1, 2, 3] },
            { lines: ["How was the food at the hotel?", "It was terrible!", "Did you eat it?", "No, we found a good restaurant."], order: [0, 1, 2, 3] },
            { lines: ["The flight is cancelled!", "What? Why?", "The weather is too bad to fly.", "Now our trip is ruined!"], order: [0, 1, 2, 3] },
            { lines: ["The street was empty.", "Why was nobody there?", "It was very cold outside.", "Oh, I understand."], order: [0, 1, 2, 3] },
            { lines: ["Is this bag yours?", "No, that isn't mine.", "Whose is it then?", "I think it is his."], order: [0, 1, 2, 3] },
            { lines: ["Were you at the beach last week?", "Yes, I was.", "Was the water warm?", "No, the water wasn't warm."], order: [0, 1, 2, 3] },
            { lines: ["Was there a gym in your hotel?", "No, there wasn't.", "Was there a pool?", "Yes, there were two swimming pools."], order: [0, 1, 2, 3] },
            { lines: ["I lost my sunglasses.", "Are these yours?", "No, those aren't mine.", "My sunglasses are blue."], order: [0, 1, 2, 3] },
            { lines: ["Whose passports are these?", "They are ours.", "Please keep them safe.", "I will put them in my backpack."], order: [0, 1, 2, 3] },
            { lines: ["That was a great idea.", "Yes, the decision was theirs.", "They always plan good trips.", "I want to travel with them again."], order: [0, 1, 2, 3] },
            { lines: ["She was very happy with the trip.", "Why was she happy?", "Because she found her lost luggage.", "That is great news!"], order: [0, 1, 2, 3] },
            { lines: ["Were they at the airport on time?", "No, they were late.", "Did they miss the flight?", "No, the flight was delayed."], order: [0, 1, 2, 3] },
            { lines: ["There was a lot of traffic on the road.", "Were you driving?", "Yes, I drove slowly.", "Good thing you were careful."], order: [0, 1, 2, 3] },
            { lines: ["There weren't any cheap tickets left.", "So what did you do?", "We bought the expensive ones.", "Wow, that costs a lot of money."], order: [0, 1, 2, 3] },
            { lines: ["That is their car.", "Which one?", "The red one is theirs.", "It looks very fast."], order: [0, 1, 2, 3] },
            { lines: ["The hotel room wasn't clean.", "Did you complain?", "Yes, and they changed our room.", "That was a good solution."], order: [0, 1, 2, 3] },
            { lines: ["Whose money is this on the table?", "I think it is his.", "Did he forget it here?", "Yes, I need to give it back to him."], order:[0, 1, 2, 3] },
            { lines: ["The trip was exhausting.", "Why? Where were you?", "We were at the city center.", "Oh, it is always crowded there."], order: [0, 1, 2, 3] },
            { lines: ["Was the hotel expensive?", "No, it wasn't. It was cheap.", "That is a surprise!", "Yes, we were lucky."], order: [0, 1, 2, 3] },
            { lines: ["My trip to London was great.", "What was the weather like?", "It was cold, but sunny.", "I love sunny days in winter."], order: [0, 1, 2, 3] },
            { lines: ["I visited many museums.", "In London?", "Yes, it was a nice vacation.", "I want to visit London too!"], order: [0, 1, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS (40 ITEMS) ---
        3: [
            { q: "Was your vacation terrible?", options: ["Yes, it was.", "Yes, it were.", "Yes, was it.", "No, it not was."], a: "Yes, it was." },
            { q: "Were there towels in the room?", options: ["No, there weren't.", "No, there wasn't.", "No, they wasn't.", "Not there were."], a: "No, there weren't." },
            { q: "Was the hotel expensive?", options: ["Yes, it was.", "Yes, he was.", "Yes, it were.", "Yes, was it."], a: "Yes, it was." },
            { q: "Were the tickets cheap?", options: ["Yes, they were.", "Yes, they was.", "Yes, it were.", "No, they not were."], a: "Yes, they were." },
            { q: "Was the flight delayed?", options: ["Yes, it was.", "Yes, it were.", "Yes, they was.", "No, it weren't."], a: "Yes, it was." },
            { q: "Were you at the beach last week?", options: ["Yes, I was.", "Yes, I were.", "Yes, we was.", "No, I weren't."], a: "Yes, I was." },
            { q: "Was there a gym in your hotel?", options: ["No, there wasn't.", "No, there weren't.", "No, wasn't there.", "Not there was."], a: "No, there wasn't." },
            { q: "Were there swimming pools?", options: ["Yes, there were.", "Yes, there was.", "Yes, they was.", "No, there wasn't."], a: "Yes, there were." },
            { q: "Was the food terrible?", options: ["Yes, it was.", "Yes, they were.", "Yes, it were.", "No, it not was."], a: "Yes, it was." },
            { q: "Were they late for the flight?", options: ["Yes, they were.", "Yes, they was.", "Yes, it were.", "No, they wasn't."], a: "Yes, they were." },
            { q: "Was the museum crowded?", options: ["Yes, it was.", "Yes, it were.", "Yes, they was.", "No, it not was."], a: "Yes, it was." },
            { q: "Were the streets empty?", options: ["Yes, they were.", "Yes, they was.", "Yes, it were.", "No, they wasn't."], a: "Yes, they were." },
            { q: "Was the weather good?", options: ["No, it wasn't.", "No, it weren't.", "No, they wasn't.", "Not it was."], a: "No, it wasn't." },
            { q: "Were you happy with the trip?", options: ["Yes, we were.", "Yes, we was.", "Yes, it were.", "No, we wasn't."], a: "Yes, we were." },
            { q: "Was there a problem with the car?", options: ["Yes, there was.", "Yes, there were.", "Yes, it was there.", "No, there weren't."], a: "Yes, there was." },
            { q: "Were the souvenirs expensive?", options: ["No, they weren't.", "No, they wasn't.", "No, it weren't.", "Not they were."], a: "No, they weren't." },
            { q: "Was the guide helpful?", options: ["Yes, he was.", "Yes, he were.", "Yes, they was.", "No, he weren't."], a: "Yes, he was." },
            { q: "Were you lost in the city?", options: ["Yes, I was.", "Yes, I were.", "Yes, we was.", "No, I weren't."], a: "Yes, I was." },
            { q: "Was the room clean?", options: ["Yes, it was.", "Yes, it were.", "Yes, they was.", "No, it not was."], a: "Yes, it was." },
            { q: "Were there many tourists at the station?", options: ["Yes, there were.", "Yes, there was.", "Yes, they was.", "No, there wasn't."], a: "Yes, there were." },
            { q: "Where do you go to catch a flight?", options: ["To the airport.", "To the suitcase.", "To the souvenir.", "To the weather."], a: "To the airport." },
            { q: "What do you need to travel to another country?", options: ["A passport.", "A crowded hotel.", "A delayed train.", "A broken window."], a: "A passport." },
            { q: "Where do you pack your clothes for a trip?", options: ["In a suitcase.", "In a ticket.", "In a map.", "In a passport."], a: "In a suitcase." },
            { q: "What do you use to buy souvenirs?", options: ["Money or a credit card.", "A ticket or a map.", "A beach or a city.", "A disaster or a problem."], a: "Money or a credit card." },
            { q: "What do you look at when you are lost?", options: ["A map.", "A souvenir.", "A suitcase.", "A weather."], a: "A map." },
            { q: "Where do you sleep when you are on vacation?", options: ["In a hotel.", "In an airport.", "In a credit card.", "In a passport."], a: "In a hotel." },
            { q: "If there are too many people in a room, the room is...", options: ["Crowded.", "Empty.", "Cheap.", "Lost."], a: "Crowded." },
            { q: "If a hotel costs a lot of money, it is...", options: ["Expensive.", "Cheap.", "Empty.", "Broken."], a: "Expensive." },
            { q: "If your flight does not leave on time, it is...", options: ["Delayed.", "Crowded.", "Cheap.", "Found."], a: "Delayed." },
            { q: "What do you take photos with?", options: ["A camera or a phone.", "A ticket or a passport.", "A suitcase or a backpack.", "A hotel or a station."], a: "A camera or a phone." },
            { q: "What do you buy to remember your trip?", options: ["A souvenir.", "A problem.", "A disaster.", "A flight."], a: "A souvenir." },
            { q: "If a trip was very bad, it was a...", options: ["Disaster.", "Great time.", "Souvenir.", "Beach."], a: "Disaster." },
            { q: "Whose suitcase is this?", options: ["It is mine.", "It is expensive.", "It is a hotel.", "It is weather."], a: "It is mine." },
            { q: "If the weather is sunny and hot, where is a good place to go?", options: ["The beach.", "The airport.", "The station.", "The passport."], a: "The beach." },
            { q: "The opposite of 'lost' is...", options: ["Found.", "Broken.", "Delayed.", "Expensive."], a: "Found." },
            { q: "The opposite of 'cheap' is...", options: ["Expensive.", "Crowded.", "Empty.", "Terrible."], a: "Expensive." },
            { q: "The opposite of 'empty' is...", options: ["Crowded.", "Broken.", "Hot.", "Lost."], a: "Crowded." },
            { q: "If the train doesn't run anymore, the trip is...", options: ["Cancelled.", "Cheap.", "Crowded.", "Sunny."], a: "Cancelled." },
            { q: "What do you show before getting on a plane?", options: ["A ticket and a passport.", "A map and a souvenir.", "A beach and a city.", "A weather and a disaster."], a: "A ticket and a passport." },
            { q: "Where do trains stop for people to get on?", options: ["At the station.", "At the beach.", "At the camera.", "At the backpack."], a: "At the station." }
        ],

        // --- TYPE 4: FIND MEANING (40 ITEMS) ---
        4: [
            { sent: "I carry my clothes in a **suitcase**.", word: "suitcase", options: ["Mochila", "Mala / Bagagem", "Passaporte", "Passagem"], a: "Mala / Bagagem", def: "Bags or cases used for carrying clothing and other personal effects during travel." },
            { sent: "Don't forget your **passport** at the airport.", word: "passport", options: ["Passagem", "Câmera", "Passaporte", "Mapa"], a: "Passaporte", def: "An official document issued by a government, certifying the holder's identity and citizenship." },
            { sent: "He bought a **ticket** for the bus.", word: "ticket", options: ["Dinheiro", "Cartão de crédito", "Lembrancinha", "Passagem / Bilhete"], a: "Passagem / Bilhete", def: "A piece of paper or electronic record giving the holder a certain right, such as travel." },
            { sent: "The flight was **delayed** by two hours.", word: "delayed", options: ["Atrasado(a)", "Cancelado(a)", "Perdido(a)", "Quebrado(a)"], a: "Atrasado(a)", def: "Late or slow; happening at a later time than expected." },
            { sent: "We booked a nice **hotel** online.", word: "hotel", options: ["Aeroporto", "Estação", "Hotel", "Cidade"], a: "Hotel", def: "An establishment providing accommodations, meals, and other services for travelers." },
            { sent: "The **weather** was sunny and hot.", word: "weather", options: ["Viagem", "Problema", "Desastre", "Tempo / Clima"], a: "Tempo / Clima", def: "The state of the atmosphere at a place and time." },
            { sent: "The trip was a **disaster**.", word: "disaster", options: ["Viagem", "Desastre", "Problema", "Férias"], a: "Desastre", def: "A sudden event that causes great damage or loss." },
            { sent: "We bought a small **souvenir** for you.", word: "souvenir", options: ["Câmera", "Mapa", "Lembrancinha", "Mochila"], a: "Lembrancinha", def: "A thing that is kept as a reminder of a person, place, or event." },
            { sent: "The bus was very **crowded**.", word: "crowded", options: ["Vazio(a)", "Lotado(a)", "Caro(a)", "Barato(a)"], a: "Lotado(a)", def: "Full of people, leaving little or no room for movement." },
            { sent: "That restaurant is too **expensive**.", word: "expensive", options: ["Barato(a)", "Caro(a)", "Ruim", "Ótimo"], a: "Caro(a)", def: "Costing a lot of money." },
            { sent: "She packed her **backpack** for school.", word: "backpack", options: ["Mala", "Passaporte", "Mochila", "Mapa"], a: "Mochila", def: "A bag with shoulder straps, carried on the back." },
            { sent: "Look at the **map** to find the museum.", word: "map", options: ["Celular", "Câmera", "Passagem", "Mapa"], a: "Mapa", def: "A diagrammatic representation of an area of land or sea." },
            { sent: "I took a photo with my new **camera**.", word: "camera", options: ["Celular", "Câmera fotográfica", "Cartão de crédito", "Dinheiro"], a: "Câmera fotográfica", def: "A device for recording visual images." },
            { sent: "My **phone** broke yesterday.", word: "phone", options: ["Celular / telefone", "Câmera", "Mapa", "Passaporte"], a: "Celular / telefone", def: "A telephone, especially a mobile phone." },
            { sent: "I need more **money** to buy this.", word: "money", options: ["Cartão de crédito", "Dinheiro", "Lembrancinha", "Passagem"], a: "Dinheiro", def: "A current medium of exchange in the form of coins and banknotes." },
            { sent: "You can pay with a **credit card**.", word: "credit card", options: ["Dinheiro", "Cartão de crédito", "Passaporte", "Mapa"], a: "Cartão de crédito", def: "A small plastic card issued by a bank, allowing the holder to purchase goods on credit." },
            { sent: "The plane landed at the **airport**.", word: "airport", options: ["Estação", "Hotel", "Aeroporto", "Praia"], a: "Aeroporto", def: "A complex of runways and buildings for the takeoff, landing, and maintenance of civil aircraft." },
            { sent: "The train is arriving at the **station**.", word: "station", options: ["Hotel", "Estação (trem/ônibus)", "Cidade", "Aeroporto"], a: "Estação (trem/ônibus)", def: "A place on a railway line where trains regularly stop." },
            { sent: "We went to the **beach** on Sunday.", word: "beach", options: ["Praia", "Cidade", "Hotel", "Viagem"], a: "Praia", def: "A pebbly or sandy shore by the ocean." },
            { sent: "New York is a very big **city**.", word: "city", options: ["Férias", "Cidade", "Praia", "Estação"], a: "Cidade", def: "A large town." },
            { sent: "I love summer **vacation**.", word: "vacation", options: ["Viagem", "Férias / Feriado", "Problema", "Tempo"], a: "Férias / Feriado", def: "An extended period of leisure and recreation." },
            { sent: "How was your **trip**?", word: "trip", options: ["Viagem", "Férias", "Desastre", "Problema"], a: "Viagem", def: "An act of going to a place and returning; a journey." },
            { sent: "We had a **problem** with the reservation.", word: "problem", options: ["Desastre", "Problema", "Viagem", "Tempo"], a: "Problema", def: "A matter or situation regarded as unwelcome or harmful." },
            { sent: "The food at the hotel was **terrible**.", word: "terrible", options: ["Ótimo", "Ruim / Terrível", "Caro(a)", "Barato(a)"], a: "Ruim / Terrível", def: "Of poor quality or low standard; extremely unpleasant." },
            { sent: "We had a **great** time.", word: "great", options: ["Terrível", "Bom / Ótimo", "Vazio", "Lotado"], a: "Bom / Ótimo", def: "To be desired or approved of." },
            { sent: "My passport is **lost**.", word: "lost", options: ["Achado", "Perdido(a)", "Quebrado(a)", "Atrasado(a)"], a: "Perdido(a)", def: "Unable to find one's way; not knowing one's whereabouts." },
            { sent: "The window was **broken**.", word: "broken", options: ["Quebrado(a)", "Perdido(a)", "Cancelado(a)", "Vazio(a)"], a: "Quebrado(a)", def: "Having been fractured or damaged and no longer in one piece." },
            { sent: "The flight was **cancelled** due to snow.", word: "cancelled", options: ["Atrasado(a)", "Cancelado(a)", "Lotado(a)", "Barato(a)"], a: "Cancelado(a)", def: "Decided or announced that an arranged or planned event will not take place." },
            { sent: "The streets were completely **empty**.", word: "empty", options: ["Lotado(a)", "Vazio(a)", "Caro(a)", "Quente"], a: "Vazio(a)", def: "Containing nothing; not filled or occupied." },
            { sent: "This souvenir is very **cheap**.", word: "cheap", options: ["Caro(a)", "Barato(a)", "Frio", "Quente"], a: "Barato(a)", def: "Costing little money or less than is usual or expected." },
            { sent: "It is very **hot** in Brazil in January.", word: "hot", options: ["Frio", "Quente", "Lotado", "Vazio"], a: "Quente", def: "Having a high degree of heat or a high temperature." },
            { sent: "The water at the beach was **cold**.", word: "cold", options: ["Quente", "Frio", "Caro", "Barato"], a: "Frio", def: "Of or at a low or relatively low temperature." },
            { sent: "That bag is **mine**.", word: "mine", options: ["Seu / Sua", "Meu / Minha", "Dele", "Dela"], a: "Meu / Minha", def: "Possessive pronoun indicating belonging to the speaker." },
            { sent: "Are these tickets **yours**?", word: "yours", options: ["Seu / Sua", "Meu / Minha", "Nosso / Nossa", "Deles / Delas"], a: "Seu / Sua", def: "Possessive pronoun indicating belonging to the person spoken to." },
            { sent: "The camera is **his**.", word: "his", options: ["Dele", "Dela", "Nosso", "Deles"], a: "Dele", def: "Possessive pronoun indicating belonging to a male." },
            { sent: "This seat is **hers**.", word: "hers", options: ["Dele", "Dela", "Meu", "Seu"], a: "Dela", def: "Possessive pronoun indicating belonging to a female." },
            { sent: "The passports are **ours**.", word: "ours", options: ["Meu / Minha", "Nosso / Nossa", "Seu / Sua", "Deles / Delas"], a: "Nosso / Nossa", def: "Possessive pronoun indicating belonging to us." },
            { sent: "The decision was **theirs**.", word: "theirs", options: ["Nosso", "Deles / Delas", "Dele", "Dela"], a: "Deles / Delas", def: "Possessive pronoun indicating belonging to them." },
            { sent: "They **arrived** at the hotel late.", word: "arrived", options: ["Viajou / viajaram", "Chegou / chegaram", "Perdeu / perderam", "Achou / encontraram"], a: "Chegou / chegaram", def: "Past form of arrive." },
            { sent: "We **travelled** to Europe last year.", word: "travelled", options: ["Viajou / viajaram", "Chegou / chegaram", "Foi / foram", "Ficou / ficaram"], a: "Viajou / viajaram", def: "Past form of travel." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 ITEMS) ---
        5: [
            { sent: "The trip **were** very expensive.", correct: "was" },
            { sent: "I **were** at the beach last week.", correct: "was" },
            { sent: "There **was** two problems with the room.", correct: "were" },
            { sent: "The suitcase is **my**.", correct: "mine" },
            { sent: "Is this passport **your**?", correct: "yours" },
            { sent: "The keys are **their**.", correct: "theirs" },
            { sent: "The hotel **weren't** cheap.", correct: "wasn't" },
            { sent: "**Was** there any tickets left?", correct: "Were" },
            { sent: "He **forget** his camera yesterday.", correct: "forgot" },
            { sent: "We **flyed** to Paris.", correct: "flew" },
            { sent: "He **leved** the station early.", correct: "left" },
            { sent: "She **finded** her lost luggage.", correct: "found" },
            { sent: "They **goed** to the museum.", correct: "went" },
            { sent: "The weather **are** terrible yesterday.", correct: "was" },
            { sent: "This ticket is **her**.", correct: "hers" },
            { sent: "The seats are **our**.", correct: "ours" },
            { sent: "I **loset** my map.", correct: "lost" },
            { sent: "My dad **drived** the car.", correct: "drove" },
            { sent: "My phone **breaked**.", correct: "broke" },
            { sent: "I **help** him yesterday.", correct: "helped" },
            { sent: "We **stay** at a hotel last night.", correct: "stayed" },
            { sent: "There **wasn't** any good restaurants.", correct: "weren't" },
            { sent: "The bag is **he**.", correct: "his" },
            { sent: "**Were** the flight delayed?", correct: "Was" },
            { sent: "There **were** a disaster on the trip.", correct: "was" },
            { sent: "You **was** late for the train.", correct: "were" },
            { sent: "The tourists **was** tired.", correct: "were" },
            { sent: "She **visit** the city center last summer.", correct: "visited" },
            { sent: "I **pack** my suitcase yesterday.", correct: "packed" },
            { sent: "The room **was** empty?", correct: "Was the room" },
            { sent: "The tickets **was** expensive.", correct: "were" },
            { sent: "**Was** we at the right airport?", correct: "Were" },
            { sent: "There **is** a problem yesterday.", correct: "was" },
            { sent: "The bus **were** crowded.", correct: "was" },
            { sent: "It **weren't** my fault.", correct: "wasn't" },
            { sent: "Are these bags **your**?", correct: "yours" },
            { sent: "I am sure it is **they** car.", correct: "their" },
            { sent: "No, the car is **them**.", correct: "theirs" },
            { sent: "The big suitcase is **me**.", correct: "mine" },
            { sent: "My vacation **were** great.", correct: "was" }
        ],

        
        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Group 1
            { pairs: [{a: "How was your vacation?", b: "It was terrible!"}, {a: "What happened?", b: "The flight was delayed."}, {a: "Was the hotel expensive?", b: "Yes, it was very expensive."}, {a: "Were there towels in the room?", b: "No, there weren't."}, {a: "Whose suitcase is this?", b: "It is mine."}] },
            // Group 2
            { pairs: [{a: "Where did you go?", b: "I went to the beach."}, {a: "How was the weather?", b: "It was sunny and hot."}, {a: "Did you lose your passport?", b: "Yes, I lost it at the airport."}, {a: "Was there a problem?", b: "Yes, there was a big problem."}, {a: "Whose tickets are these?", b: "They are ours."}] },
            // Group 3
            { pairs: [{a: "Did you fly to the city?", b: "Yes, the plane flew over the ocean."}, {a: "Was the train crowded?", b: "Yes, there were many people."}, {a: "Did she find her camera?", b: "Yes, she found it in the bag."}, {a: "Were you at the station?", b: "No, we were at the airport."}, {a: "Whose phone is broken?", b: "It is his."}] },
            // Group 4
            { pairs: [{a: "Why was the trip a disaster?", b: "Because it rained all week."}, {a: "Did you pack your backpack?", b: "Yes, I packed it last night."}, {a: "Was the museum empty?", b: "No, it was crowded with tourists."}, {a: "Where did he leave his map?", b: "He left it in the hotel."}, {a: "Are these souvenirs yours?", b: "No, they are hers."}] },
            // Group 5
            { pairs: [{a: "How long did he drive?", b: "He drove for six hours."}, {a: "Did you book the hotel?", b: "Yes, I booked it online."}, {a: "Was the food good?", b: "No, the food was terrible."}, {a: "Were there any cheap tickets?", b: "No, they were all expensive."}, {a: "Whose credit card is this?", b: "It is theirs."}] },
            // Group 6
            { pairs: [{a: "Did you stay at a hotel?", b: "Yes, we stayed near the beach."}, {a: "Was the airport big?", b: "Yes, it was huge."}, {a: "Did they help you?", b: "Yes, the guide helped us."}, {a: "Were there any good restaurants?", b: "Yes, there were two."}, {a: "Whose money is on the table?", b: "It is mine."}] },
            // Group 7
            { pairs: [{a: "Did you visit the city?", b: "Yes, we visited the center."}, {a: "Was the water cold?", b: "Yes, it was very cold."}, {a: "What did you buy?", b: "I bought a small souvenir."}, {a: "Were the bags heavy?", b: "Yes, my luggage was very heavy."}, {a: "Are these seats ours?", b: "Yes, those are ours."}] },
            // Group 8
            { pairs: [{a: "Did she forget her ticket?", b: "Yes, she forgot it at home."}, {a: "Was the vacation fun?", b: "Yes, we had a great time."}, {a: "Were there cars on the street?", b: "No, the street was empty."}, {a: "Did you take photos?", b: "Yes, I took photos with my camera."}, {a: "Whose map is this?", b: "It is his map."}] },
            // Group 9
            { pairs: [{a: "Was the flight cancelled?", b: "Yes, because of the bad weather."}, {a: "Did he break his phone?", b: "Yes, his phone broke yesterday."}, {a: "Were there problems with the room?", b: "Yes, it was dirty."}, {a: "Did they arrive late?", b: "Yes, they arrived at 9 PM."}, {a: "Is this bag yours?", b: "Yes, it is mine."}] },
            // Group 10
            { pairs: [{a: "Where was the museum?", b: "It was in the city."}, {a: "Was the trip long?", b: "Yes, it was a long journey."}, {a: "Did you use your credit card?", b: "Yes, to pay for the hotel."}, {a: "Were the tickets cheap?", b: "No, they were expensive."}, {a: "Whose passports are lost?", b: "Theirs are lost."}] },
            // Group 11
            { pairs: [{a: "My vacation was", b: "a complete disaster."}, {a: "First, the flight", b: "was delayed."}, {a: "There was a problem", b: "with the hotel."}, {a: "The hotel was", b: "very expensive."}, {a: "There were no towels", b: "in the bathroom."}] },
            // Group 12
            { pairs: [{a: "Whose suitcase is", b: "in the photo?"}, {a: "That suitcase is", b: "mine."}, {a: "It was lost for", b: "two days."}, {a: "The weather was", b: "sunny and good."}, {a: "We travelled to Spain", b: "last year."}] },
            // Group 13
            { pairs: [{a: "He arrived late at", b: "the airport."}, {a: "I lost my keys", b: "yesterday."}, {a: "She found a nice", b: "restaurant in the city."}, {a: "They went to", b: "the beach."}, {a: "We booked the hotel", b: "online."}] },
            // Group 14
            { pairs: [{a: "I stayed at home", b: "all day."}, {a: "The bus left", b: "at 8 PM."}, {a: "We visited the", b: "old museum."}, {a: "The bird flew", b: "far away."}, {a: "He forgot his", b: "passport at home."}] },
            // Group 15
            { pairs: [{a: "My dad drove for", b: "six hours."}, {a: "My new phone", b: "broke."}, {a: "She packed her", b: "heavy suitcase."}, {a: "The tour guide", b: "helped us."}, {a: "I carry my backpack", b: "everywhere."}] },
            // Group 16
            { pairs: [{a: "Here is your bus", b: "ticket."}, {a: "Look at the", b: "map to find the station."}, {a: "Take a photo with", b: "the camera."}, {a: "I bought a souvenir", b: "for my friend."}, {a: "Can I pay with", b: "a credit card?"}] },
            // Group 17
            { pairs: [{a: "The train is at", b: "the station."}, {a: "I need more", b: "money for the trip."}, {a: "The hotel room", b: "was clean."}, {a: "New York is a", b: "big city."}, {a: "The flight was", b: "cancelled."}] },
            // Group 18
            { pairs: [{a: "The bus was very", b: "crowded."}, {a: "The street was", b: "empty."}, {a: "The food was", b: "terrible."}, {a: "We had a great", b: "time on vacation."}, {a: "The room was", b: "too cold."}] },
            // Group 19
            { pairs: [{a: "The tickets were", b: "expensive."}, {a: "This souvenir is", b: "cheap."}, {a: "It was very hot", b: "yesterday."}, {a: "I lost my", b: "luggage at the airport."}, {a: "The shower in the room", b: "was broken."}] },
            // Group 20
            { pairs: [{a: "We had a problem", b: "with the car."}, {a: "The holiday was", b: "a disaster."}, {a: "These sunglasses are", b: "mine."}, {a: "The blue ones are", b: "hers."}, {a: "The decision was", b: "theirs."}] },
            // Group 21
            { pairs: [{a: "Travel", b: "Viajar"}, {a: "Arrive", b: "Chegar"}, {a: "Lose", b: "Perder"}, {a: "Find", b: "Achar / Encontrar"}, {a: "Go", b: "Ir"}] },
            // Group 22
            { pairs: [{a: "Book", b: "Reservar"}, {a: "Stay", b: "Ficar / Hospedar-se"}, {a: "Leave", b: "Sair / Partir"}, {a: "Visit", b: "Visitar"}, {a: "Fly", b: "Voar"}] },
            // Group 23
            { pairs: [{a: "Forget", b: "Esquecer"}, {a: "Drive", b: "Dirigir"}, {a: "Break", b: "Quebrar"}, {a: "Pack", b: "Fazer as malas / Empacotar"}, {a: "Help", b: "Ajudar"}] },
            // Group 24
            { pairs: [{a: "Travelled", b: "Viajou / Viajaram"}, {a: "Arrived", b: "Chegou / Chegaram"}, {a: "Lost", b: "Perdeu / Perderam"}, {a: "Found", b: "Achou / Encontraram"}, {a: "Went", b: "Foi / Foram"}] },
            // Group 25
            { pairs: [{a: "Booked", b: "Reservou / Reservaram"}, {a: "Stayed", b: "Ficou / Ficaram"}, {a: "Left", b: "Saiu / Saíram"}, {a: "Visited", b: "Visitou / Visitaram"}, {a: "Flew", b: "Voou / Voaram"}] },
            // Group 26
            { pairs: [{a: "Forgot", b: "Esqueceu / Esqueceram"}, {a: "Drove", b: "Dirigiu / Dirigiram"}, {a: "Broke", b: "Quebrou / Quebraram"}, {a: "Packed", b: "Fez as malas"}, {a: "Helped", b: "Ajudou / Ajudaram"}] },
            // Group 27
            { pairs: [{a: "Suitcase / Luggage", b: "Mala / Bagagem"}, {a: "Backpack", b: "Mochila"}, {a: "Passport", b: "Passaporte"}, {a: "Ticket", b: "Passagem / Bilhete"}, {a: "Map", b: "Mapa"}] },
            // Group 28
            { pairs: [{a: "Camera", b: "Câmera fotográfica"}, {a: "Phone", b: "Celular / Telefone"}, {a: "Souvenir", b: "Lembrancinha"}, {a: "Money / Cash", b: "Dinheiro"}, {a: "Credit Card", b: "Cartão de crédito"}] },
            // Group 29
            { pairs: [{a: "Hotel", b: "Hotel"}, {a: "Airport", b: "Aeroporto"}, {a: "Station", b: "Estação (trem/ônibus)"}, {a: "Beach", b: "Praia"}, {a: "City", b: "Cidade"}] },
            // Group 30
            { pairs: [{a: "Vacation / Holiday", b: "Férias / Feriado"}, {a: "Trip / Journey", b: "Viagem"}, {a: "Problem", b: "Problema"}, {a: "Disaster", b: "Desastre"}, {a: "Weather", b: "Tempo / Clima"}] },
            // Group 31
            { pairs: [{a: "Bad / Terrible", b: "Ruim ou de péssima qualidade."}, {a: "Good / Great", b: "Muito bom, excelente."}, {a: "Lost", b: "Quando você não sabe onde algo está."}, {a: "Broken", b: "Quando algo cai e não funciona mais (quebrado)."}, {a: "Delayed", b: "Quando um voo ou ônibus está atrasado."}] },
            // Group 32
            { pairs: [{a: "Cancelled", b: "Quando uma viagem ou evento não vai mais acontecer."}, {a: "Crowded", b: "Um lugar com muitas pessoas, lotado."}, {a: "Empty", b: "Um lugar sem pessoas ou coisas, vazio."}, {a: "Expensive", b: "Algo que custa muito dinheiro, caro."}, {a: "Cheap", b: "Algo que custa pouco dinheiro, barato."}] },
            // Group 33
            { pairs: [{a: "Hot", b: "Quando a temperatura está alta, quente."}, {a: "Cold", b: "Quando a temperatura está baixa, frio."}, {a: "Mine", b: "Pronome que significa que algo é meu."}, {a: "Yours", b: "Pronome que significa que algo é seu."}, {a: "His", b: "Pronome que significa que algo é dele."}] },
            // Group 34
            { pairs: [{a: "Hers", b: "Pronome que significa que algo é dela."}, {a: "Ours", b: "Pronome que significa que algo é nosso."}, {a: "Theirs", b: "Pronome que significa que algo é deles ou delas."}, {a: "Was", b: "Passado do verbo \"to be\" para I, He, She, It (era/estava)."}, {a: "Were", b: "Passado do verbo \"to be\" para You, We, They (eram/estavam)."}] },
            // Group 35
            { pairs: [{a: "There was", b: "Expressão para dizer que \"havia\" ou \"tinha\" algo (singular)."}, {a: "There were", b: "Expressão para dizer que \"havia\" ou \"tinham\" várias coisas (plural)."}, {a: "Suitcase", b: "A mala grande onde colocamos as roupas para viajar."}, {a: "Passport", b: "O documento oficial para viajar para outro país."}, {a: "Ticket", b: "O papel que você compra para entrar no avião ou ônibus."}] },
            // Group 36
            { pairs: [{a: "Map", b: "O desenho que mostra ruas e cidades para você não se perder."}, {a: "Camera", b: "O aparelho usado para tirar fotos nas férias."}, {a: "Phone", b: "O celular usado para ligar ou usar o GPS."}, {a: "Souvenir", b: "O presente pequeno que compramos em uma viagem."}, {a: "Money", b: "As notas e moedas que usamos para comprar coisas."}] },
            // Group 37
            { pairs: [{a: "Credit Card", b: "O cartão de plástico usado para pagar o hotel ou compras."}, {a: "Airport", b: "O lugar grande onde os aviões decolam e pousam."}, {a: "Station", b: "O lugar onde as pessoas esperam o trem ou ônibus."}, {a: "Hotel", b: "O lugar onde alugamos um quarto para dormir na viagem."}, {a: "Beach", b: "O lugar com areia e mar para nadar no verão."}] },
            // Group 38
            { pairs: [{a: "City", b: "Um lugar grande com muitos prédios e ruas, como Nova York."}, {a: "Vacation", b: "O tempo em que não trabalhamos ou estudamos, as férias."}, {a: "Trip", b: "O ato de viajar para um lugar e voltar."}, {a: "Problem", b: "Uma situação ruim que precisamos resolver na viagem."}, {a: "Disaster", b: "Um evento terrível que estraga tudo, um desastre."}] },
            // Group 39
            { pairs: [{a: "Travelled", b: "O passado de viajar."}, {a: "Arrived", b: "O passado de chegar ao destino."}, {a: "Left", b: "O passado de sair de um lugar."}, {a: "Stayed", b: "O passado de ficar hospedado em um hotel."}, {a: "Flew", b: "O passado de voar de avião."}] },
            // Group 40
            { pairs: [{a: "Forgot", b: "O passado de esquecer algo importante."}, {a: "Found", b: "O passado de achar ou encontrar o que estava perdido."}, {a: "Packed", b: "O passado de fazer as malas."}, {a: "Drove", b: "O passado de dirigir o carro."}, {a: "Booked", b: "O passado de reservar um hotel ou passagem."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 ITEMS) ---
        7: [
            { q: "Where did you go on your vacation?", options: ["To the beach.", "To the passport.", "To the weather.", "To the suitcase."], a: "To the beach." },
            { q: "How was your flight?", options: ["It was delayed.", "It was a camera.", "It was a map.", "It was ours."], a: "It was delayed." },
            { q: "What happened at the airport?", options: ["I lost my luggage.", "I lost my weather.", "I lost my hot.", "I lost my delayed."], a: "I lost my luggage." },
            { q: "Whose suitcase is this?", options: ["It is mine.", "It is expensive.", "It is empty.", "It is a hotel."], a: "It is mine." },
            { q: "Was the hotel expensive?", options: ["Yes, it was very expensive.", "Yes, it was a map.", "No, it was a disaster.", "No, it was a souvenir."], a: "Yes, it was very expensive." },
            { q: "Where did you stay in the city?", options: ["At a hotel.", "At a credit card.", "At a ticket.", "At a backpack."], a: "At a hotel." },
            { q: "Who helped you with the bags?", options: ["The guide helped us.", "The map helped us.", "The weather helped us.", "The flight helped us."], a: "The guide helped us." },
            { q: "When did the bus leave?", options: ["It left at 8 PM.", "It left at the beach.", "It left at the passport.", "It left at yours."], a: "It left at 8 PM." },
            { q: "Why was the trip a disaster?", options: ["Because the weather was terrible.", "Because the map was mine.", "Because the camera was good.", "Because the ticket was cheap."], a: "Because the weather was terrible." },
            { q: "What did you buy at the store?", options: ["I bought a souvenir.", "I bought an airport.", "I bought a disaster.", "I bought a delayed."], a: "I bought a souvenir." },
            { q: "Where did you find your passport?", options: ["In my backpack.", "In the weather.", "In the crowded.", "In the expensive."], a: "In my backpack." },
            { q: "How long did your dad drive?", options: ["He drove for six hours.", "He drove for six souvenirs.", "He drove for six suitcases.", "He drove for six hotels."], a: "He drove for six hours." },
            { q: "Whose money is on the table?", options: ["It is his.", "It is a station.", "It is a beach.", "It is cancelled."], a: "It is his." },
            { q: "What did you use to pay for the hotel?", options: ["A credit card.", "A trip.", "A disaster.", "A problem."], a: "A credit card." },
            { q: "Were there any towels in the room?", options: ["No, there weren't.", "No, it wasn't.", "No, they wasn't.", "No, there wasn't towels."], a: "No, there weren't." },
            { q: "How was the food at the restaurant?", options: ["It was great.", "It was a passport.", "It was a station.", "It was empty."], a: "It was great." },
            { q: "Where do the planes land?", options: ["At the airport.", "At the suitcase.", "At the souvenir.", "At the camera."], a: "At the airport." },
            { q: "What did she pack yesterday?", options: ["She packed her suitcase.", "She packed her weather.", "She packed her hotel.", "She packed her delay."], a: "She packed her suitcase." },
            { q: "Why didn't you take photos?", options: ["Because my camera broke.", "Because my camera was cheap.", "Because my camera was a city.", "Because my camera was yours."], a: "Because my camera broke." },
            { q: "Whose passports are these?", options: ["They are theirs.", "They are expensive.", "They are delayed.", "They are crowded."], a: "They are theirs." },
            { q: "Was the street crowded?", options: ["No, it was empty.", "No, it was a station.", "No, it was a map.", "No, it was a flight."], a: "No, it was empty." },
            { q: "Where did they visit?", options: ["They visited the museum.", "They visited the ticket.", "They visited the money.", "They visited the ours."], a: "They visited the museum." },
            { q: "What did you forget at home?", options: ["I forgot my ticket.", "I forgot my weather.", "I forgot my vacation.", "I forgot my delayed."], a: "I forgot my ticket." },
            { q: "How did you book the room?", options: ["I booked it online.", "I booked it cold.", "I booked it expensive.", "I booked it broken."], a: "I booked it online." },
            { q: "Was there a swimming pool?", options: ["Yes, there was.", "Yes, there were.", "Yes, it was.", "Yes, they were."], a: "Yes, there was." },
            { q: "Where did you wait for the train?", options: ["At the station.", "At the passport.", "At the souvenir.", "At the camera."], a: "At the station." },
            { q: "Whose car is parked outside?", options: ["It is ours.", "It is an airport.", "It is a disaster.", "It is cancelled."], a: "It is ours." },
            { q: "What happened to your phone?", options: ["I lost it.", "I flew it.", "I stayed it.", "I booked it."], a: "I lost it." },
            { q: "Was the weather hot?", options: ["Yes, it was very hot.", "Yes, it was very cheap.", "Yes, it was very crowded.", "Yes, it was very lost."], a: "Yes, it was very hot." },
            { q: "Were the tickets cheap?", options: ["No, they were expensive.", "No, they were airports.", "No, they were suitcases.", "No, they were weather."], a: "No, they were expensive." },
            { q: "Who did you travel with?", options: ["With my family.", "With my luggage.", "With my delayed.", "With my broken."], a: "With my family." },
            { q: "Where did the bird fly?", options: ["It flew over the ocean.", "It flew over the passport.", "It flew over the cheap.", "It flew over the mine."], a: "It flew over the ocean." },
            { q: "What was the problem with the room?", options: ["The shower was broken.", "The shower was a ticket.", "The shower was a map.", "The shower was yours."], a: "The shower was broken." },
            { q: "How was the beach?", options: ["It was beautiful and sunny.", "It was a credit card.", "It was a flight.", "It was a camera."], a: "It was beautiful and sunny." },
            { q: "Whose sunglasses are those?", options: ["They are hers.", "They are cities.", "They are stations.", "They are holidays."], a: "They are hers." },
            { q: "Were there many people at the museum?", options: ["Yes, it was crowded.", "Yes, it was empty.", "Yes, it was cancelled.", "Yes, it was broken."], a: "Yes, it was crowded." },
            { q: "What did you look at to find the hotel?", options: ["I looked at the map.", "I looked at the suitcase.", "I looked at the souvenir.", "I looked at the weather."], a: "I looked at the map." },
            { q: "Why was the flight cancelled?", options: ["Because of a terrible storm.", "Because of a cheap ticket.", "Because of a lost camera.", "Because of a packed bag."], a: "Because of a terrible storm." },
            { q: "Where did you put your clothes?", options: ["In the suitcase.", "In the passport.", "In the ticket.", "In the airport."], a: "In the suitcase." },
            { q: "Was the trip good?", options: ["No, it was a disaster.", "No, it was a city.", "No, it was a map.", "No, it was a cash."], a: "No, it was a disaster." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 ITEMS) ---
        8: [
            { sent: "My flight was **delicious** because of the rain.", wrong: "delicious", options: ["delayed", "empty", "cheap", "broken"], a: "delayed" },
            { sent: "We booked a nice **passport** to sleep in for three nights.", wrong: "passport", options: ["hotel", "ticket", "map", "camera"], a: "hotel" },
            { sent: "I packed all my clothes in my **weather**.", wrong: "weather", options: ["suitcase", "station", "souvenir", "disaster"], a: "suitcase" },
            { sent: "The train leaves from the **beach** at 9 PM.", wrong: "beach", options: ["station", "airport", "phone", "credit card"], a: "station" },
            { sent: "I forgot my **hotel** so I couldn't board the plane.", wrong: "hotel", options: ["passport", "souvenir", "weather", "city"], a: "passport" },
            { sent: "The museum was very **empty**, there were thousands of tourists!", wrong: "empty", options: ["crowded", "cheap", "delayed", "lost"], a: "crowded" },
            { sent: "We swam in the ocean at the **airport**.", wrong: "airport", options: ["beach", "station", "city", "hotel"], a: "beach" },
            { sent: "This room costs $500, it is very **cheap**.", wrong: "cheap", options: ["expensive", "crowded", "broken", "lost"], a: "expensive" },
            { sent: "My dad drove the **plane** on the road for six hours.", wrong: "plane", options: ["car", "train", "boat", "ticket"], a: "car" },
            { sent: "The flight was **found** so we had to go back home.", wrong: "found", options: ["cancelled", "cheap", "hot", "empty"], a: "cancelled" },
            { sent: "Whose bag is this? It is **me**.", wrong: "me", options: ["mine", "my", "your", "their"], a: "mine" },
            { sent: "I bought a beautiful **disaster** for my mom at the gift shop.", wrong: "disaster", options: ["souvenir", "problem", "weather", "airport"], a: "souvenir" },
            { sent: "We had a huge **vacation** with the rental car, it wouldn't start.", wrong: "vacation", options: ["problem", "trip", "ticket", "map"], a: "problem" },
            { sent: "The **map** took amazing photos of the mountains.", wrong: "map", options: ["camera", "suitcase", "passport", "ticket"], a: "camera" },
            { sent: "Look at the **souvenir** to find the right street.", wrong: "souvenir", options: ["map", "phone", "cash", "credit card"], a: "map" },
            { sent: "I don't have cash, can I pay with my **city**?", wrong: "city", options: ["credit card", "passport", "weather", "flight"], a: "credit card" },
            { sent: "The trip was a complete **hotel**; everything went wrong!", wrong: "hotel", options: ["disaster", "beach", "airport", "station"], a: "disaster" },
            { sent: "I called my mom on my **suitcase**.", wrong: "suitcase", options: ["phone", "backpack", "map", "ticket"], a: "phone" },
            { sent: "The **ticket** was sunny and hot every day.", wrong: "ticket", options: ["weather", "flight", "passport", "souvenir"], a: "weather" },
            { sent: "They are not your keys, they are **our**.", wrong: "our", options: ["ours", "we", "us", "our's"], a: "ours" },
            { sent: "I couldn't find my way because I was **expensive**.", wrong: "expensive", options: ["lost", "cheap", "broken", "crowded"], a: "lost" },
            { sent: "The shower didn't work because it was **found**.", wrong: "found", options: ["broken", "delayed", "cancelled", "empty"], a: "broken" },
            { sent: "It was snowing, so the city was very **hot**.", wrong: "hot", options: ["cold", "cheap", "expensive", "crowded"], a: "cold" },
            { sent: "She **flyed** to Paris last week.", wrong: "flyed", options: ["flew", "flown", "flys", "flied"], a: "flew" },
            { sent: "The bird **drove** away into the sky.", wrong: "drove", options: ["flew", "stayed", "packed", "booked"], a: "flew" },
            { sent: "I **forgetted** my money at home.", wrong: "forgetted", options: ["forgot", "forgets", "forgotten", "forgetting"], a: "forgot" },
            { sent: "We **leaved** the hotel very early.", wrong: "leaved", options: ["left", "leaves", "leaven", "leaving"], a: "left" },
            { sent: "The planes land at the big **station**.", wrong: "station", options: ["airport", "beach", "hotel", "city"], a: "airport" },
            { sent: "He carried his books in his **map**.", wrong: "map", options: ["backpack", "passport", "ticket", "credit card"], a: "backpack" },
            { sent: "We **buyed** the tickets online.", wrong: "buyed", options: ["bought", "buy", "buys", "buying"], a: "bought" },
            { sent: "The tickets were $5, they were very **expensive**.", wrong: "expensive", options: ["cheap", "hot", "broken", "lost"], a: "cheap" },
            { sent: "The streets were **crowded**, there was nobody outside.", wrong: "crowded", options: ["empty", "expensive", "delayed", "cancelled"], a: "empty" },
            { sent: "She **finded** her lost luggage after two days.", wrong: "finded", options: ["found", "finds", "finding", "finder"], a: "found" },
            { sent: "They **goed** to the museum in the city.", wrong: "goed", options: ["went", "gone", "goes", "going"], a: "went" },
            { sent: "The car is not his, it is **she**.", wrong: "she", options: ["hers", "her", "she's", "him"], a: "hers" },
            { sent: "There **was** two problems with the room.", wrong: "was", options: ["were", "are", "is", "am"], a: "were" },
            { sent: "The decision was **their**.", wrong: "their", options: ["theirs", "them", "they", "their's"], a: "theirs" },
            { sent: "The food at the hotel was **broken**, it tasted awful.", wrong: "broken", options: ["terrible", "empty", "lost", "crowded"], a: "terrible" },
            { sent: "Are these sunglasses **your**?", wrong: "your", options: ["yours", "you", "your's", "yourself"], a: "yours" },
            { sent: "We **stay** at a lovely beach resort last summer.", wrong: "stay", options: ["stayed", "staying", "stays", "stayen"], a: "stayed" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 ITEMS) ---
        9: [
            { audio: "How was your vacation?", options: ["It was a disaster.", "It is a passport.", "In the suitcase.", "The weather is."], a: "It was a disaster." },
            { audio: "Was the hotel expensive?", options: ["Yes, it was very expensive.", "Yes, it is a map.", "No, it is a delayed.", "Because it was a flight."], a: "Yes, it was very expensive." },
            { audio: "What happened at the airport?", options: ["My flight was delayed.", "I am a souvenir.", "Yes, it was crowded.", "To the beach."], a: "My flight was delayed." },
            { audio: "Whose suitcase is this?", options: ["It is mine.", "It is a hotel.", "In the city.", "Yes, there were."], a: "It is mine." },
            { audio: "Were there towels in the room?", options: ["No, there weren't.", "No, it wasn't.", "No, it is a disaster.", "Yes, it was hot."], a: "No, there weren't." },
            { audio: "Where did you go for the holiday?", options: ["I went to the beach.", "I went to the passport.", "I went to the credit card.", "I went to the ticket."], a: "I went to the beach." },
            { audio: "Did you lose your passport?", options: ["Yes, I lost it.", "Yes, it is a station.", "No, they were crowded.", "No, it was a weather."], a: "Yes, I lost it." },
            { audio: "Was the weather good?", options: ["No, it rained all day.", "No, it is a camera.", "Yes, they were cheap.", "Yes, it is a map."], a: "No, it rained all day." },
            { audio: "Whose tickets are these?", options: ["They are ours.", "They are airports.", "They are disasters.", "They are cancelled."], a: "They are ours." },
            { audio: "Did you buy a souvenir?", options: ["Yes, I bought a magnet.", "Yes, I am a flight.", "No, it was empty.", "No, they were yours."], a: "Yes, I bought a magnet." },
            { audio: "Was the bus crowded?", options: ["Yes, there were many people.", "Yes, it was a suitcase.", "No, it was a camera.", "No, they were hers."], a: "Yes, there were many people." },
            { audio: "Where is the train station?", options: ["It is in the city center.", "It is a backpack.", "It is delayed.", "It is mine."], a: "It is in the city center." },
            { audio: "Did you pack your backpack?", options: ["Yes, I packed it.", "Yes, it is a flight.", "No, it was expensive.", "No, they were his."], a: "Yes, I packed it." },
            { audio: "Why was the flight cancelled?", options: ["Because the weather was terrible.", "Because the map was lost.", "Because the souvenir was cheap.", "Because the ticket was mine."], a: "Because the weather was terrible." },
            { audio: "Can I pay with a credit card?", options: ["Yes, you can.", "Yes, it is a beach.", "No, it is a hotel.", "No, they were crowded."], a: "Yes, you can." },
            { audio: "Was there a problem with the room?", options: ["Yes, the shower was broken.", "Yes, the airport was big.", "No, the passport was his.", "No, the money was lost."], a: "Yes, the shower was broken." },
            { audio: "Whose camera is on the table?", options: ["It is his.", "It is an airport.", "It is a delayed flight.", "It is a sunny weather."], a: "It is his." },
            { audio: "Did you book the hotel online?", options: ["Yes, I did.", "Yes, it is a disaster.", "No, they were empty.", "No, it was a station."], a: "Yes, I did." },
            { audio: "Was the food terrible?", options: ["Yes, it was very bad.", "Yes, it was a suitcase.", "No, it is a map.", "No, they are ours."], a: "Yes, it was very bad." },
            { audio: "Are these sunglasses yours?", options: ["No, they are hers.", "No, they are beaches.", "Yes, it is a flight.", "Yes, it is a ticket."], a: "No, they are hers." },
            { audio: "Did you visit the museum?", options: ["Yes, we visited it yesterday.", "Yes, we are passports.", "No, it is a credit card.", "No, they were delayed."], a: "Yes, we visited it yesterday." },
            { audio: "How long did you drive?", options: ["We drove for six hours.", "We drove for six souvenirs.", "We drove for six weather.", "We drove for six luggage."], a: "We drove for six hours." },
            { audio: "Where did the bird fly?", options: ["It flew away.", "It flew a ticket.", "It flew a station.", "It flew a hotel."], a: "It flew away." },
            { audio: "Did you forget your money?", options: ["Yes, I forgot it at home.", "Yes, I am an airport.", "No, it was crowded.", "No, they are theirs."], a: "Yes, I forgot it at home." },
            { audio: "Was the street empty?", options: ["Yes, there was nobody there.", "Yes, there was a passport.", "No, it was a suitcase.", "No, it was a flight."], a: "Yes, there was nobody there." },
            { audio: "Were the tickets cheap?", options: ["No, they were expensive.", "No, it was a disaster.", "Yes, it is a map.", "Yes, they are airports."], a: "No, they were expensive." },
            { audio: "What time did the train leave?", options: ["It left at 9 PM.", "It left at the beach.", "It left at the camera.", "It left at yours."], a: "It left at 9 PM." },
            { audio: "Whose map are you using?", options: ["I am using mine.", "I am using a hotel.", "I am using a weather.", "I am using an empty."], a: "I am using mine." },
            { audio: "Was it cold at the beach?", options: ["Yes, the water was very cold.", "Yes, the ticket was a camera.", "No, the station was crowded.", "No, the luggage was lost."], a: "Yes, the water was very cold." },
            { audio: "Did she find her phone?", options: ["Yes, she found it in her bag.", "Yes, she found an airport.", "No, she found a flight.", "No, she found an expensive."], a: "Yes, she found it in her bag." },
            { audio: "Were there many tourists?", options: ["Yes, the city was crowded.", "Yes, the city was a passport.", "No, the city was a suitcase.", "No, the city was a ticket."], a: "Yes, the city was crowded." },
            { audio: "Whose car broke down?", options: ["It was theirs.", "It was a souvenir.", "It was a credit card.", "It was a delayed."], a: "It was theirs." },
            { audio: "Did you stay at home?", options: ["Yes, I stayed home all day.", "Yes, I am a hotel.", "No, it was a beach.", "No, they were empty."], a: "Yes, I stayed home all day." },
            { audio: "Was there a swimming pool?", options: ["Yes, there was a big pool.", "Yes, there were a ticket.", "No, it is a map.", "No, they are ours."], a: "Yes, there was a big pool." },
            { audio: "What did you take photos of?", options: ["I took photos of the city.", "I took photos of the delayed.", "I took photos of the expensive.", "I took photos of the cancelled."], a: "I took photos of the city." },
            { audio: "Did the guide help you?", options: ["Yes, he helped us a lot.", "Yes, he is a suitcase.", "No, it is a disaster.", "No, they were weather."], a: "Yes, he helped us a lot." },
            { audio: "Whose luggage is lost?", options: ["Mine is lost.", "The airport is lost.", "The station is lost.", "The ticket is lost."], a: "Mine is lost." },
            { audio: "Was the trip a disaster?", options: ["Yes, everything went wrong.", "Yes, the camera is his.", "No, the passport is hers.", "No, the flight is ours."], a: "Yes, everything went wrong." },
            { audio: "Did you fly to Europe?", options: ["Yes, we flew there last year.", "Yes, we are a map.", "No, it was crowded.", "No, they were cheap."], a: "Yes, we flew there last year." },
            { audio: "Were they late for the bus?", options: ["Yes, they arrived after it left.", "Yes, they are souvenirs.", "No, it is a hotel.", "No, they are weather."], a: "Yes, they arrived after it left." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 ITEMS) ---
        10: [
            { audio: "The flight was delayed for two hours.", sent: "The ___ was ___ for two hours.", blanks: ["flight", "delayed"] },
            { audio: "My vacation was a terrible disaster.", sent: "My ___ was a terrible ___.", blanks: ["vacation", "disaster"] },
            { audio: "There was a big problem with the hotel.", sent: "There was a big ___ with the ___.", blanks: ["problem", "hotel"] },
            { audio: "Whose suitcase is this in the photo?", sent: "Whose ___ is this in the ___?", blanks: ["suitcase", "photo"] },
            { audio: "The tickets were very expensive.", sent: "The ___ were very ___.", blanks: ["tickets", "expensive"] },
            { audio: "The weather was sunny and hot.", sent: "The ___ was sunny and ___.", blanks: ["weather", "hot"] },
            { audio: "I lost my passport at the airport.", sent: "I lost my ___ at the ___.", blanks: ["passport", "airport"] },
            { audio: "We visited the city and bought a souvenir.", sent: "We visited the ___ and bought a ___.", blanks: ["city", "souvenir"] },
            { audio: "The train station was very crowded.", sent: "The train ___ was very ___.", blanks: ["station", "crowded"] },
            { audio: "She packed her clothes in a backpack.", sent: "She ___ her clothes in a ___.", blanks: ["packed", "backpack"] },
            { audio: "Can I pay with a credit card?", sent: "Can I pay with a ___ ___?", blanks: ["credit", "card"] },
            { audio: "Look at the map to find the beach.", sent: "Look at the ___ to find the ___.", blanks: ["map", "beach"] },
            { audio: "The shower in the room was broken.", sent: "The shower in the ___ was ___.", blanks: ["room", "broken"] },
            { audio: "He drove the car for six hours.", sent: "He ___ the car for six ___.", blanks: ["drove", "hours"] },
            { audio: "The flight was cancelled because of the rain.", sent: "The flight was ___ because of the ___.", blanks: ["cancelled", "rain"] },
            { audio: "I took a photo with my camera.", sent: "I took a ___ with my ___.", blanks: ["photo", "camera"] },
            { audio: "The streets were empty and cold.", sent: "The streets were ___ and ___.", blanks: ["empty", "cold"] },
            { audio: "They found their lost luggage.", sent: "They ___ their lost ___.", blanks: ["found", "luggage"] },
            { audio: "My dad forgot his phone at home.", sent: "My dad ___ his ___ at home.", blanks: ["forgot", "phone"] },
            { audio: "We stayed at a cheap hotel.", sent: "We ___ at a ___ hotel.", blanks: ["stayed", "cheap"] },
            { audio: "That bag is mine, not yours.", sent: "That bag is ___, not ___.", blanks: ["mine", "yours"] },
            { audio: "The blue sunglasses are hers.", sent: "The blue ___ are ___.", blanks: ["sunglasses", "hers"] },
            { audio: "Our trip to London was great.", sent: "Our ___ to London was ___.", blanks: ["trip", "great"] },
            { audio: "The bird flew away into the sky.", sent: "The bird ___ away into the ___.", blanks: ["flew", "sky"] },
            { audio: "He arrived late at the station.", sent: "He ___ late at the ___.", blanks: ["arrived", "station"] },
            { audio: "We booked the tickets online yesterday.", sent: "We ___ the tickets online ___.", blanks: ["booked", "yesterday"] },
            { audio: "The bus left the city at night.", sent: "The bus ___ the ___ at night.", blanks: ["left", "city"] },
            { audio: "I need more money for the trip.", sent: "I need more ___ for the ___.", blanks: ["money", "trip"] },
            { audio: "There were no towels in the bathroom.", sent: "There ___ no ___ in the bathroom.", blanks: ["were", "towels"] },
            { audio: "The food at the restaurant was terrible.", sent: "The ___ at the restaurant was ___.", blanks: ["food", "terrible"] },
            { audio: "The tour guide helped us a lot.", sent: "The tour ___ ___ us a lot.", blanks: ["guide", "helped"] },
            { audio: "The decision was theirs to make.", sent: "The decision was ___ to ___.", blanks: ["theirs", "make"] },
            { audio: "Was there a gym in your hotel?", sent: "___ there a ___ in your hotel?", blanks: ["Was", "gym"] },
            { audio: "We travelled to Europe last year.", sent: "We ___ to Europe last ___.", blanks: ["travelled", "year"] },
            { audio: "The car is his, not ours.", sent: "The car is ___, not ___.", blanks: ["his", "ours"] },
            { audio: "My phone broke on the beach.", sent: "My ___ ___ on the beach.", blanks: ["phone", "broke"] },
            { audio: "There wasn't any hot water.", sent: "There ___ any hot ___.", blanks: ["wasn't", "water"] },
            { audio: "The people were shouting all night.", sent: "The people were ___ all ___.", blanks: ["shouting", "night"] },
            { audio: "I was tired after the long journey.", sent: "I was ___ after the long ___.", blanks: ["tired", "journey"] },
            { audio: "We found a nice restaurant near the hotel.", sent: "We ___ a nice ___ near the hotel.", blanks: ["found", "restaurant"] }
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
                    { speaker: "Albert", text: "How ___ your vacation, Celine?", options: ["was", "were", "am"], a: "was" },
                    { speaker: "Celine", text: "It was a ___! Everything went wrong.", options: ["disaster", "beach", "passport"], a: "disaster" },
                    { speaker: "Albert", text: "Really? What ___?", options: ["happened", "travelled", "packed"], a: "happened" },
                    { speaker: "Celine", text: "First, the ___ was terrible. It rained all week.", options: ["weather", "suitcase", "ticket"], a: "weather" },
                    { speaker: "Albert", text: "Oh no. ___ there a problem with the hotel too?", options: ["Were", "Was", "Did"], a: "Was" }
                ]
            },
            {
                title: "Dialogue 2",
                lines: [
                    { speaker: "Celine", text: "I couldn't find my bag at the ___.", options: ["airport", "map", "souvenir"], a: "airport" },
                    { speaker: "Albert", text: "That is bad! Was your bag ___?", options: ["lost", "broken", "cheap"], a: "lost" },
                    { speaker: "Celine", text: "Yes, it was! And there ___ many people looking for their bags.", options: ["were", "was", "is"], a: "were" },
                    { speaker: "Albert", text: "Whose bag was the red one? Was it ___?", options: ["yours", "your", "you"], a: "yours" },
                    { speaker: "Celine", text: "No, that bag was ___. Mine is blue.", options: ["hers", "her", "she"], a: "hers" }
                ]
            },
            {
                title: "Dialogue 3",
                lines: [
                    { speaker: "Albert", text: "We ___ at a hotel in the city center.", options: ["stayed", "left", "flew"], a: "stayed" },
                    { speaker: "Celine", text: "Was the hotel ___?", options: ["expensive", "crowded", "delayed"], a: "expensive" },
                    { speaker: "Albert", text: "No, it was very ___. But it was a bad idea.", options: ["cheap", "empty", "broken"], a: "cheap" },
                    { speaker: "Celine", text: "Why? ___ there problems in the room?", options: ["Were", "Was", "Are"], a: "Were" },
                    { speaker: "Albert", text: "Yes, there ___ no towels and the shower was broken.", options: ["were", "was", "wasn't"], a: "were" }
                ]
            },
            {
                title: "Dialogue 4",
                lines: [
                    { speaker: "Celine", text: "Our flight to Paris was ___ for five hours!", options: ["delayed", "cheap", "lost"], a: "delayed" },
                    { speaker: "Albert", text: "Wow. Were you at the ___ all day?", options: ["station", "airport", "beach"], a: "airport" },
                    { speaker: "Celine", text: "Yes, we were. It was very ___ and noisy.", options: ["crowded", "empty", "broken"], a: "crowded" },
                    { speaker: "Albert", text: "Did you buy any food with your ___?", options: ["credit card", "passport", "map"], a: "credit card" },
                    { speaker: "Celine", text: "Yes, but the food was ___ and expensive.", options: ["terrible", "great", "good"], a: "terrible" }
                ]
            },
            {
                title: "Dialogue 5",
                lines: [
                    { speaker: "Albert", text: "Did you pack your ___ yesterday?", options: ["suitcase", "camera", "souvenir"], a: "suitcase" },
                    { speaker: "Celine", text: "Yes, but I ___ my passport at home!", options: ["forgot", "found", "helped"], a: "forgot" },
                    { speaker: "Albert", text: "Oh no! You need your ___ to travel.", options: ["passport", "ticket", "money"], a: "passport" },
                    { speaker: "Celine", text: "I know. My dad ___ back to get it.", options: ["drove", "flew", "visited"], a: "drove" },
                    { speaker: "Albert", text: "That was a big ___.", options: ["problem", "weather", "journey"], a: "problem" }
                ]
            },
            {
                title: "Dialogue 6",
                lines: [
                    { speaker: "Celine", text: "We ___ three museums in the city.", options: ["visited", "booked", "arrived"], a: "visited" },
                    { speaker: "Albert", text: "Were the tickets ___?", options: ["expensive", "cold", "delayed"], a: "expensive" },
                    { speaker: "Celine", text: "Yes, they were. We used all our ___.", options: ["money", "maps", "weather"], a: "money" },
                    { speaker: "Albert", text: "Did you take photos with your ___?", options: ["camera", "ticket", "passport"], a: "camera" },
                    { speaker: "Celine", text: "No, my camera was ___.", options: ["broken", "cheap", "crowded"], a: "broken" }
                ]
            },
            {
                title: "Dialogue 7",
                lines: [
                    { speaker: "Albert", text: "My trip to the ___ was great.", options: ["beach", "station", "flight"], a: "beach" },
                    { speaker: "Celine", text: "Was it ___?", options: ["hot", "cold", "empty"], a: "hot" },
                    { speaker: "Albert", text: "Yes, the weather was sunny and hot. We had a ___ time.", options: ["good", "bad", "lost"], a: "good" },
                    { speaker: "Celine", text: "Are these cool sunglasses ___?", options: ["yours", "mine", "our"], a: "yours" },
                    { speaker: "Albert", text: "Yes, they are ___. I bought them there.", options: ["mine", "my", "me"], a: "mine" }
                ]
            },
            {
                title: "Dialogue 8",
                lines: [
                    { speaker: "Celine", text: "Look at this ___. I bought it for you.", options: ["souvenir", "disaster", "weather"], a: "souvenir" },
                    { speaker: "Albert", text: "Thank you! I love it. Is this extra ticket ___?", options: ["his", "he", "him"], a: "his" },
                    { speaker: "Celine", text: "No, the tickets are ___. We bought two.", options: ["ours", "our", "we"], a: "ours" },
                    { speaker: "Albert", text: "The train ___ at 9 AM, right?", options: ["left", "flew", "packed"], a: "left" },
                    { speaker: "Celine", text: "Yes, we ___ at the station very early.", options: ["arrived", "visited", "lost"], a: "arrived" }
                ]
            },
            {
                title: "Dialogue 9",
                lines: [
                    { speaker: "Albert", text: "Why are you back so early? Was the train ___?", options: ["cancelled", "sunny", "cheap"], a: "cancelled" },
                    { speaker: "Celine", text: "No, but I lost my ___.", options: ["ticket", "airport", "beach"], a: "ticket" },
                    { speaker: "Albert", text: "Did you look in your ___?", options: ["backpack", "train", "hotel"], a: "backpack" },
                    { speaker: "Celine", text: "Yes, it was ___. I have no money.", options: ["empty", "crowded", "delayed"], a: "empty" },
                    { speaker: "Albert", text: "Don't worry, the extra money on the table is ___.", options: ["theirs", "our", "they"], a: "theirs" }
                ]
            },
            {
                title: "Dialogue 10",
                lines: [
                    { speaker: "Celine", text: "How was the ___ guide?", options: ["tour", "suitcase", "flight"], a: "tour" },
                    { speaker: "Albert", text: "He was great! He ___ us find the museum.", options: ["helped", "broke", "lost"], a: "helped" },
                    { speaker: "Celine", text: "Was the museum ___?", options: ["crowded", "terrible", "weather"], a: "crowded" },
                    { speaker: "Albert", text: "No, it was quiet. But the souvenirs were very ___.", options: ["expensive", "cheap", "delayed"], a: "expensive" },
                    { speaker: "Celine", text: "Did you use your ___ card?", options: ["credit", "passport", "map"], a: "credit" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER (10 ITEMS) ---
        12: [
            {
                title: "Text 1: A Terrible Hotel",
                text: "My family travelled to the city last weekend. We booked a hotel online. The pictures were beautiful, but the real hotel was a disaster. There were no towels in the bathroom, and the shower was broken. The room was very cold, and there wasn't any hot water. It was a terrible experience, but the hotel was cheap.",
                questions: [
                    { q: "Where did the family travel?", options: ["To the beach.", "To the city.", "To the airport."], a: "To the city." },
                    { q: "How did they book the hotel?", options: ["By phone.", "At the station.", "Online."], a: "Online." },
                    { q: "What was broken in the room?", options: ["The shower.", "The door.", "The bed."], a: "The shower." },
                    { q: "Was there any hot water?", options: ["Yes, there was.", "No, there wasn't.", "Yes, there were."], a: "No, there wasn't." },
                    { q: "Was the hotel expensive?", options: ["Yes, it was expensive.", "No, it was cheap.", "It was empty."], a: "No, it was cheap." }
                ]
            },
            {
                title: "Text 2: The Lost Luggage",
                text: "We arrived at the airport at 7 AM. Our flight was delayed for three hours. It was a very crowded airport. When we finally arrived in Spain, there was a big problem. My suitcase was lost! All my clothes and my camera were in it. The blue suitcase on the carousel wasn't mine; it was hers. I found my bag two days later.",
                questions: [
                    { q: "What time did they arrive at the airport?", options: ["At 7 AM.", "At 3 PM.", "At 9 AM."], a: "At 7 AM." },
                    { q: "Was the flight on time?", options: ["Yes, it was early.", "No, it was delayed.", "No, it was cancelled."], a: "No, it was delayed." },
                    { q: "What was lost?", options: ["The passport.", "The flight.", "The suitcase."], a: "The suitcase." },
                    { q: "Whose was the blue suitcase?", options: ["It was his.", "It was hers.", "It was mine."], a: "It was hers." },
                    { q: "When did the person find the bag?", options: ["Two days later.", "Two hours later.", "Yesterday."], a: "Two days later." }
                ]
            },
            {
                title: "Text 3: A Sunny Vacation",
                text: "Last summer, we went to the beach. The weather was great! It was sunny and hot every day. There were many people on the beach; it was very crowded. We stayed at a hotel near the ocean. The food was good, but the souvenirs were very expensive. I bought a map of the city and a t-shirt.",
                questions: [
                    { q: "How was the weather?", options: ["Sunny and hot.", "Cold and rainy.", "Terrible and cloudy."], a: "Sunny and hot." },
                    { q: "Was the beach empty?", options: ["Yes, it was empty.", "No, it was crowded.", "No, it was delayed."], a: "No, it was crowded." },
                    { q: "Where did they stay?", options: ["At a station.", "At a hotel near the ocean.", "In an airport."], a: "At a hotel near the ocean." },
                    { q: "Were the souvenirs cheap?", options: ["Yes, they were.", "No, they were very expensive.", "No, they were broken."], a: "No, they were very expensive." },
                    { q: "What did the person buy?", options: ["A map and a t-shirt.", "A camera and a phone.", "A suitcase and a ticket."], a: "A map and a t-shirt." }
                ]
            },
            {
                title: "Text 4: The Old Museum",
                text: "Yesterday, I visited the city museum with my friends. The tickets were cheap, only three dollars. There were many old things to see. I took photos with my phone because I forgot my camera at home. There was a small shop, and the souvenirs were great. Our trip was short but very interesting.",
                questions: [
                    { q: "Where did the person visit?", options: ["The city museum.", "The train station.", "The new airport."], a: "The city museum." },
                    { q: "Were the tickets expensive?", options: ["Yes, they were $30.", "No, they were cheap.", "No, they were free."], a: "No, they were cheap." },
                    { q: "What did the person use to take photos?", options: ["A camera.", "A tablet.", "A phone."], a: "A phone." },
                    { q: "What did the person forget at home?", options: ["The passport.", "The camera.", "The tickets."], a: "The camera." },
                    { q: "How were the souvenirs?", options: ["They were great.", "They were broken.", "They were lost."], a: "They were great." }
                ]
            },
            {
                title: "Text 5: The Broken Car",
                text: "Our road trip was a disaster. My dad drove for two hours, and then the car broke. We were in the middle of a small, empty street. There wasn't any phone signal, so my phone was useless. We waited for a long time. Finally, a police officer helped us. We didn't arrive at the hotel that night.",
                questions: [
                    { q: "Who drove the car?", options: ["The police officer.", "The dad.", "The friends."], a: "The dad." },
                    { q: "What happened to the car?", options: ["It flew away.", "It got lost.", "It broke."], a: "It broke." },
                    { q: "Was the street crowded?", options: ["Yes, it was very crowded.", "No, it was empty.", "Yes, there were many tourists."], a: "No, it was empty." },
                    { q: "Why was the phone useless?", options: ["It was broken.", "There wasn't any signal.", "It was lost."], a: "There wasn't any signal." },
                    { q: "Who helped the family?", options: ["A police officer.", "A tourist.", "A guide."], a: "A police officer." }
                ]
            },
            {
                title: "Text 6: The Wrong Backpack",
                text: "I packed my backpack for the trip. It was very heavy. At the station, I left my bag on a chair. When I returned, there was a black backpack on the chair, but it wasn't mine. Mine was green! Whose bag was it? It was his bag, a boy sitting near the window. He had my bag by mistake. We changed bags and laughed.",
                questions: [
                    { q: "What did the person pack?", options: ["A suitcase.", "A backpack.", "A souvenir."], a: "A backpack." },
                    { q: "Where did the person leave the bag?", options: ["On a chair at the station.", "On the train.", "In the hotel."], a: "On a chair at the station." },
                    { q: "What color was the person's real bag?", options: ["Black.", "Green.", "Red."], a: "Green." },
                    { q: "Whose bag was the black one?", options: ["It was hers.", "It was mine.", "It was his."], a: "It was his." },
                    { q: "What did they do at the end?", options: ["They changed bags and laughed.", "They cried and went home.", "They called the police."], a: "They changed bags and laughed." }
                ]
            },
            {
                title: "Text 7: Flight Cancelled",
                text: "We arrived at the airport with our passports and tickets. We were ready for our vacation. Suddenly, there was a message on the screen. Our flight was cancelled! The weather was terrible; there was a big storm. The airport was crowded with angry people. We stayed at an airport hotel that night. It was very sad.",
                questions: [
                    { q: "What did they have at the airport?", options: ["Passports and tickets.", "Maps and souvenirs.", "Cameras and backpacks."], a: "Passports and tickets." },
                    { q: "What happened to the flight?", options: ["It was early.", "It was delayed.", "It was cancelled."], a: "It was cancelled." },
                    { q: "Why was the flight cancelled?", options: ["The plane was broken.", "The weather was terrible.", "The airport was closed."], a: "The weather was terrible." },
                    { q: "How was the airport?", options: ["Empty and quiet.", "Crowded with angry people.", "Cheap and clean."], a: "Crowded with angry people." },
                    { q: "Where did they stay that night?", options: ["At their own home.", "At an airport hotel.", "At the station."], a: "At an airport hotel." }
                ]
            },
            {
                title: "Text 8: Buying Souvenirs",
                text: "On our last day in the city, we visited a big market. There were many beautiful things. I found a nice shirt, but I didn't have any cash. I asked the man, \"Can I pay with a credit card?\" He said yes. The shirt was $20. The decision to buy it was mine. I bought the souvenir and we left the city.",
                questions: [
                    { q: "Where did they go on the last day?", options: ["To the beach.", "To a big market.", "To the airport."], a: "To a big market." },
                    { q: "What did the person find?", options: ["A nice shirt.", "A lost camera.", "A cheap ticket."], a: "A nice shirt." },
                    { q: "What didn't the person have?", options: ["A credit card.", "Cash.", "A passport."], a: "Cash." },
                    { q: "How did the person pay?", options: ["With cash.", "With a credit card.", "With a ticket."], a: "With a credit card." },
                    { q: "Whose decision was it to buy the shirt?", options: ["It was his.", "It was hers.", "It was mine."], a: "It was mine." }
                ]
            },
            {
                title: "Text 9: The Train Ride",
                text: "We booked our train tickets online. When we arrived at the station, it was very crowded. We couldn't find our seats. Finally, a nice woman helped us. Her seat was next to ours. The journey was long, but we looked at the map and planned our city tour. It was a good trip.",
                questions: [
                    { q: "How did they book the tickets?", options: ["At the station.", "Online.", "With cash."], a: "Online." },
                    { q: "How was the station?", options: ["Empty.", "Crowded.", "Cheap."], a: "Crowded." },
                    { q: "Who helped them?", options: ["A police officer.", "A tour guide.", "A nice woman."], a: "A nice woman." },
                    { q: "Whose seat was next to theirs?", options: ["Hers.", "His.", "Mine."], a: "Hers." },
                    { q: "What did they look at during the journey?", options: ["The camera.", "The map.", "The passport."], a: "The map." }
                ]
            },
            {
                title: "Text 10: The Winter Cabin",
                text: "My family rented a cabin in the mountains. We drove for five hours. The weather was very cold and snowy. When we arrived, there was a problem. The door was broken! My dad called the owner, and he fixed it. The rest of the vacation was perfect. We stayed by the fire and drank hot tea.",
                questions: [
                    { q: "Where did the family go?", options: ["To the beach.", "To the city.", "To the mountains."], a: "To the mountains." },
                    { q: "How was the weather?", options: ["Hot and sunny.", "Cold and snowy.", "Warm and rainy."], a: "Cold and snowy." },
                    { q: "What was the problem?", options: ["The car broke.", "The door was broken.", "The luggage was lost."], a: "The door was broken." },
                    { q: "Who fixed the door?", options: ["The dad.", "The police.", "The owner."], a: "The owner." },
                    { q: "How was the rest of the vacation?", options: ["Terrible.", "Perfect.", "Crowded."], a: "Perfect." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER CONTEXT (10 ITEMS) ---
        13: [
            {
                title: "Audio Script 1",
                audio: "Our trip to the mountains was cold. The weather was terrible. There was snow everywhere. The roads were closed. We stayed in the hotel for two days. It was very boring, but the room was warm.",
                questions: [
                    { q: "Where did they take a trip to?", options: ["The beach.", "The city.", "The mountains."], a: "The mountains." },
                    { q: "How was the weather?", options: ["Hot and sunny.", "Terrible and cold.", "Warm and dry."], a: "Terrible and cold." },
                    { q: "What was everywhere?", options: ["Rain.", "Snow.", "Souvenirs."], a: "Snow." },
                    { q: "How long did they stay in the hotel?", options: ["Two hours.", "Two days.", "Two weeks."], a: "Two days." },
                    { q: "How was the room?", options: ["Warm.", "Cold.", "Broken."], a: "Warm." }
                ]
            },
            {
                title: "Audio Script 2",
                audio: "I arrived at the train station at 8 AM. I looked in my pocket. My ticket wasn't there. It was lost! I bought a new ticket with my credit card. The new ticket was very expensive. It was a bad morning.",
                questions: [
                    { q: "What time did the person arrive at the station?", options: ["7 AM.", "8 AM.", "9 AM."], a: "8 AM." },
                    { q: "What was lost?", options: ["The passport.", "The luggage.", "The ticket."], a: "The ticket." },
                    { q: "How did the person pay for the new ticket?", options: ["With cash.", "With a credit card.", "With a map."], a: "With a credit card." },
                    { q: "Was the new ticket cheap?", options: ["Yes, it was cheap.", "No, it was expensive.", "No, it was free."], a: "No, it was expensive." },
                    { q: "How was the morning?", options: ["Great.", "Bad.", "Sunny."], a: "Bad." }
                ]
            },
            {
                title: "Audio Script 3",
                audio: "My dad packed the suitcases in the car. We drove to the beach. The journey was long. We listened to music. When we arrived, the beach was empty. It was perfect. The water was great.",
                questions: [
                    { q: "Who packed the suitcases?", options: ["The mom.", "The kids.", "The dad."], a: "The dad." },
                    { q: "Where did they drive?", options: ["To the beach.", "To the airport.", "To the museum."], a: "To the beach." },
                    { q: "Was the journey short?", options: ["Yes, it was.", "No, it was long.", "It was cancelled."], a: "No, it was long." },
                    { q: "Was the beach crowded?", options: ["Yes, it was crowded.", "No, it was empty.", "It was a disaster."], a: "No, it was empty." },
                    { q: "How was the water?", options: ["Terrible.", "Great.", "Broken."], a: "Great." }
                ]
            },
            {
                title: "Audio Script 4",
                audio: "We flew to London last week. The flight was great. But the airport in London was a disaster. There were thousands of people. It was very crowded. We waited for our luggage for four hours.",
                questions: [
                    { q: "Where did they fly?", options: ["To Paris.", "To London.", "To Spain."], a: "To London." },
                    { q: "How was the flight?", options: ["Delayed.", "Cancelled.", "Great."], a: "Great." },
                    { q: "What was a disaster?", options: ["The flight.", "The airport.", "The hotel."], a: "The airport." },
                    { q: "Was the airport empty?", options: ["No, it was very crowded.", "Yes, it was empty.", "It was closed."], a: "No, it was very crowded." },
                    { q: "How long did they wait for luggage?", options: ["One hour.", "Two hours.", "Four hours."], a: "Four hours." }
                ]
            },
            {
                title: "Audio Script 5",
                audio: "This camera is not mine. My camera is black. This one is silver. Oh, I think it is his. Yes, my brother lost his camera yesterday. I found it in my backpack. He will be happy.",
                questions: [
                    { q: "Is the camera the speaker's?", options: ["Yes, it is mine.", "No, it isn't mine.", "Yes, it is ours."], a: "No, it isn't mine." },
                    { q: "What color is the speaker's camera?", options: ["Black.", "Silver.", "Red."], a: "Black." },
                    { q: "Whose camera is the silver one?", options: ["It is hers.", "It is theirs.", "It is his."], a: "It is his." },
                    { q: "When did the brother lose his camera?", options: ["Today.", "Yesterday.", "Last week."], a: "Yesterday." },
                    { q: "Where was the camera found?", options: ["In the hotel.", "In the suitcase.", "In the backpack."], a: "In the backpack." }
                ]
            },
            {
                title: "Audio Script 6",
                audio: "The weather was terrible in the city. There was a lot of rain. We stayed inside the hotel. There was a good restaurant in the hotel. We ate pizza and watched TV. The vacation wasn't bad.",
                questions: [
                    { q: "How was the weather in the city?", options: ["Sunny and hot.", "Terrible and rainy.", "Cold and snowy."], a: "Terrible and rainy." },
                    { q: "Where did they stay?", options: ["At the beach.", "Inside the hotel.", "At the station."], a: "Inside the hotel." },
                    { q: "Was there a restaurant in the hotel?", options: ["Yes, there was a good one.", "No, there wasn't.", "Yes, but it was closed."], a: "Yes, there was a good one." },
                    { q: "What did they eat?", options: ["Souvenirs.", "Pizza.", "Passports."], a: "Pizza." },
                    { q: "Was the vacation bad?", options: ["Yes, it was a disaster.", "No, it wasn't bad.", "It was expensive."], a: "No, it wasn't bad." }
                ]
            },
            {
                title: "Audio Script 7",
                audio: "I booked a tour to the museum. But when I arrived, there was a sign on the door. The tour was cancelled. The museum was broken. I was very sad. I went back to the hotel.",
                questions: [
                    { q: "What did the person book?", options: ["A flight.", "A hotel room.", "A tour to the museum."], a: "A tour to the museum." },
                    { q: "What was on the door?", options: ["A ticket.", "A map.", "A sign."], a: "A sign." },
                    { q: "What happened to the tour?", options: ["It was delayed.", "It was cancelled.", "It was crowded."], a: "It was cancelled." },
                    { q: "Why was it cancelled?", options: ["The museum was broken.", "The weather was bad.", "The guide was lost."], a: "The museum was broken." },
                    { q: "How did the person feel?", options: ["Happy.", "Sad.", "Hot."], a: "Sad." }
                ]
            },
            {
                title: "Audio Script 8",
                audio: "We left the hotel at 10 AM. We visited the old city. We bought some cheap souvenirs. I used my cash. There were many interesting things. The trip was a great success.",
                questions: [
                    { q: "What time did they leave the hotel?", options: ["8 AM.", "9 AM.", "10 AM."], a: "10 AM." },
                    { q: "What did they visit?", options: ["The airport.", "The old city.", "The beach."], a: "The old city." },
                    { q: "Were the souvenirs expensive?", options: ["Yes, they were.", "No, they were cheap.", "They were broken."], a: "No, they were cheap." },
                    { q: "How did the person pay?", options: ["With cash.", "With a credit card.", "With a ticket."], a: "With cash." },
                    { q: "How was the trip?", options: ["A disaster.", "A problem.", "A great success."], a: "A great success." }
                ]
            },
            {
                title: "Audio Script 9",
                audio: "The bus to the beach was delayed. We waited at the station for an hour. When it arrived, it was very crowded. There were no empty seats. My dad stood up the whole time.",
                questions: [
                    { q: "Where was the bus going?", options: ["To the airport.", "To the beach.", "To the museum."], a: "To the beach." },
                    { q: "What happened to the bus?", options: ["It was early.", "It was broken.", "It was delayed."], a: "It was delayed." },
                    { q: "How was the bus when it arrived?", options: ["Empty.", "Crowded.", "Cheap."], a: "Crowded." },
                    { q: "Were there empty seats?", options: ["Yes, many.", "No, there were no empty seats.", "Only one."], a: "No, there were no empty seats." },
                    { q: "What did the dad do?", options: ["He drove.", "He stood up.", "He slept."], a: "He stood up." }
                ]
            },
            {
                title: "Audio Script 10",
                audio: "I lost my passport at the hotel. I looked everywhere. I looked in my suitcase and my backpack. Finally, I found it! It was under the bed. I was very happy.",
                questions: [
                    { q: "What was lost?", options: ["The ticket.", "The camera.", "The passport."], a: "The passport." },
                    { q: "Where was the person?", options: ["At the airport.", "At the hotel.", "At the station."], a: "At the hotel." },
                    { q: "Where did the person look?", options: ["In the fridge.", "In the suitcase and backpack.", "In the car."], a: "In the suitcase and backpack." },
                    { q: "Where was the passport?", options: ["Under the bed.", "On the desk.", "In the bag."], a: "Under the bed." },
                    { q: "How did the person feel at the end?", options: ["Sad.", "Angry.", "Happy."], a: "Happy." }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT (10 ITEMS) ---
        14: [
            {
                title: "Text 1",
                text: "My vacation to the [1] (city / beach / flight) was amazing. The [2] (weather / ticket / passport) was sunny every day. We stayed at a beautiful [3] (hotel / station / suitcase). There [4] (was / were / am) two big swimming pools. The food was [5] (great / terrible / broken), and I ate a lot.",
                answers: ["beach", "weather", "hotel", "were", "great"]
            },
            {
                title: "Text 2",
                text: "The trip started with a [1] (disaster / souvenir / camera). The taxi was [2] (delayed / cheap / hot), so we arrived late at the [3] (airport / map / room). Our flight was [4] (cancelled / crowded / good) because of the rain. We [5] (stayed / left / visited) at the airport for ten hours!",
                answers: ["disaster", "delayed", "airport", "cancelled", "stayed"]
            },
            {
                title: "Text 3",
                text: "I lost my [1] (passport / weather / trip) at the station. I was very nervous. I looked in my [2] (backpack / ticket / cash), but it wasn't there. Then, a police officer [3] (helped / broke / flew) me. He [4] (found / packed / drove) it on a chair. I was so [5] (happy / sad / cold)!",
                answers: ["passport", "backpack", "helped", "found", "happy"]
            },
            {
                title: "Text 4",
                text: "We went to the new museum in the [1] (city / suitcase / weather). It was very [2] (crowded / empty / cheap). There [3] (were / was / is) too many people inside. I took photos with my [4] (camera / map / ticket). After that, we bought a small [5] (souvenir / credit card / airport) at the shop.",
                answers: ["city", "crowded", "were", "camera", "souvenir"]
            },
            {
                title: "Text 5",
                text: "[1] (Whose / Who / What) suitcase is this? It is not [2] (mine / my / me). My suitcase is [3] (red / blue / green). This one is black. I think it is [4] (his / he / him). Yes, he is looking for a black bag. Let's give it to him. The bags [5] (were / was / am) mixed up.",
                answers: ["Whose", "mine", "red", "his", "were"]
            },
            {
                title: "Text 6",
                text: "My dad [1] (drove / flew / visited) our car to the mountains. The road was [2] (empty / crowded / broken), so it was a fast trip. We [3] (arrived / left / forgot) at the cabin at night. It was very [4] (cold / hot / cheap) outside. We [5] (stayed / booked / left) warm inside.",
                answers: ["drove", "empty", "arrived", "cold", "stayed"]
            },
            {
                title: "Text 7",
                text: "I [1] (booked / flew / broke) the hotel online last month. The pictures were nice, but the real place was [2] (terrible / great / cheap). The door was [3] (broken / delayed / crowded). There [4] (was / were / are) no hot water in the shower. We [5] (left / arrived / visited) the hotel immediately and found another one.",
                answers: ["booked", "terrible", "broken", "was", "left"]
            },
            {
                title: "Text 8",
                text: "We [1] (flew / drove / stayed) to New York yesterday. We didn't have any [2] (cash / souvenirs / tickets), so we used a [3] (credit card / passport / map) to pay for the taxi. The city is very [4] (expensive / cheap / empty). Everything costs a lot of money. But the trip was [5] (great / bad / broken)!",
                answers: ["flew", "cash", "credit card", "expensive", "great"]
            },
            {
                title: "Text 9",
                text: "The [1] (train / airport / flight) left the station at 3 PM. It was very [2] (crowded / empty / broken) inside. I didn't have a seat. I looked for my [3] (tickets / passport / souvenir) in my bag, but they were [4] (lost / cheap / hot). The conductor helped me. He found them on the [5] (floor / ceiling / window).",
                answers: ["train", "crowded", "tickets", "lost", "floor"]
            },
            {
                title: "Text 10",
                text: "We visited the big [1] (museum / beach / hotel) on Saturday. It was [2] (closed / sunny / cold) for renovations. We [3] (walked / drove / flew) back to the city center. We sat in a beautiful [4] (park / passport / map). It was very [5] (sunny / broken / expensive) and we ate ice cream.",
                answers: ["museum", "closed", "walked", "park", "sunny"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 ITEMS) ---
        15: [
            {
                title: "Audio Script 1",
                audio: "Our flight was cancelled because the weather was a disaster. The airport was very crowded. We stayed there all night. It was terrible.",
                text: "Our [1] was cancelled because the [2] was a [3]. The airport was very [4]. We [5] there all night. It was terrible.",
                answers: ["flight", "weather", "disaster", "crowded", "stayed"]
            },
            {
                title: "Audio Script 2",
                audio: "I packed my suitcase for the trip. But I forgot my passport at home. I left my house in a hurry. My dad drove fast to help me.",
                text: "I [1] my [2] for the trip. But I [3] my passport at home. I [4] my house in a hurry. My dad [5] fast to help me.",
                answers: ["packed", "suitcase", "forgot", "left", "drove"]
            },
            {
                title: "Audio Script 3",
                audio: "The hotel was very cheap. But there were many problems. The window was broken. There was no hot water. The room was cold.",
                text: "The [1] was very [2]. But there [3] many problems. The window was [4]. There [5] no hot water. The room was cold.",
                answers: ["hotel", "cheap", "were", "broken", "was"]
            },
            {
                title: "Audio Script 4",
                audio: "We went to the beach. The weather was hot and sunny. The beach was empty in the morning. We found a great place to sit.",
                text: "We went to the [1]. The weather was [2] and sunny. The beach was [3] in the morning. We [4] a [5] place to sit.",
                answers: ["beach", "hot", "empty", "found", "great"]
            },
            {
                title: "Audio Script 5",
                audio: "Whose ticket is this? It is not mine. Mine is in my backpack. I think the ticket is hers. She lost it at the station.",
                text: "[1] ticket is this? It is not [2]. Mine is in my [3]. I think the ticket is [4]. She [5] it at the station.",
                answers: ["Whose", "mine", "backpack", "hers", "lost"]
            },
            {
                title: "Audio Script 6",
                audio: "We visited the old city center. I bought a small souvenir with cash. I didn't use my credit card. The trip was very interesting.",
                text: "We [1] the old city center. I bought a small [2] with [3]. I didn't use my [4] card. The [5] was very interesting.",
                answers: ["visited", "souvenir", "cash", "credit", "trip"]
            },
            {
                title: "Audio Script 7",
                audio: "I looked at the map. We were lost in the big city. My phone was dead. A guide helped us find our hotel. It was a stressful day.",
                text: "I looked at the [1]. We were [2] in the big [3]. My phone was dead. A guide [4] us find our hotel. It was a stressful [5].",
                answers: ["map", "lost", "city", "helped", "day"]
            },
            {
                title: "Audio Script 8",
                audio: "The camera is his. The passports are ours. We booked everything online. The vacation was amazing. We travelled to many beautiful places.",
                text: "The camera is [1]. The passports are [2]. We [3] everything online. The [4] was amazing. We [5] to many beautiful places.",
                answers: ["his", "ours", "booked", "vacation", "travelled"]
            },
            {
                title: "Audio Script 9",
                audio: "The rain was heavy. It was very cold in the museum. We bought tickets at the door. They were cheap and we enjoyed the tour.",
                text: "The [1] was heavy. It was very [2] in the [3]. We bought [4] at the door. They were [5] and we enjoyed the tour.",
                answers: ["rain", "cold", "museum", "tickets", "cheap"]
            },
            {
                title: "Audio Script 10",
                audio: "The bus to the airport was delayed for two hours. We were very hungry. We ate at a restaurant near the station.",
                text: "The [1] to the airport was [2] for two [3]. We were very [4]. We ate at a [5] near the station.",
                answers: ["bus", "delayed", "hours", "hungry", "restaurant"]
            }
        ]
    }
});