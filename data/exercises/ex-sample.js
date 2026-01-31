window.initExercise({
    id: "ex-sample",
    grade: "7th Grade",
    bimester: "1",
    chapter: "2",
    title: "General Review",

    // ==========================================================
    // SIMPLE POOL (30 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES ---
        1: [
            { words: ["always", "I", "soccer", "play", "Sundays", "on"], correct: "I always play soccer on Sundays" },
            { words: ["don't", "We", "spicy", "like", "food"], correct: "We don't like spicy food" },
            { words: ["is", "She", "my", "best", "friend"], correct: "She is my best friend" },
            { words: ["you", "Do", "live", "Brazil", "in"], correct: "Do you live in Brazil" },
            { words: ["going", "I", "am", "the", "to", "park"], correct: "I am going to the park" },
            { words: ["can", "He", "speak", "English", "well"], correct: "He can speak English well" },
            { words: ["They", "are", "watching", "movie", "a"], correct: "They are watching a movie" },
            { words: ["did", "What", "you", "yesterday", "do"], correct: "What did you do yesterday" },
            { words: ["will", "It", "rain", "tomorrow"], correct: "It will rain tomorrow" },
            { words: ["must", "You", "your", "homework", "finish"], correct: "You must finish your homework" },
            { words: ["cat", "The", "sleeping", "is", "sofa", "the", "on"], correct: "The cat is sleeping on the sofa" },
            { words: ["never", "eat", "I", "breakfast", "morning", "in", "the"], correct: "I never eat breakfast in the morning" },
            { words: ["Does", "she", "have", "car", "a"], correct: "Does she have a car" },
            { words: ["favorite", "My", "color", "blue", "is"], correct: "My favorite color is blue" },
            { words: ["were", "Where", "you", "night", "last"], correct: "Where were you last night" },
            { words: ["should", "We", "save", "water", "more"], correct: "We should save more water" },
            { words: ["book", "This", "very", "is", "interesting"], correct: "This book is very interesting" },
            { words: ["not", "I", "am", "tired"], correct: "I am not tired" },
            { words: ["brother", "My", "plays", "guitar", "the"], correct: "My brother plays the guitar" },
            { words: ["time", "What", "is", "it"], correct: "What time is it" },
            { words: ["love", "I", "summer", "vacations"], correct: "I love summer vacations" },
            { words: ["dog", "Her", "is", "and", "small", "cute"], correct: "Her dog is small and cute" },
            { words: ["Can", "you", "help", "me"], correct: "Can you help me" },
            { words: ["sun", "The", "shining", "is", "brightly"], correct: "The sun is shining brightly" },
            { words: ["want", "I", "to", "be", "doctor", "a"], correct: "I want to be a doctor" },
            { words: ["running", "are", "They", "fast", "very"], correct: "They are running very fast" },
            { words: ["Please", "open", "door", "the"], correct: "Please open the door" },
            { words: ["father", "My", "works", "bank", "a", "in"], correct: "My father works in a bank" },
            { words: ["Are", "you", "ready", "go", "to"], correct: "Are you ready to go" },
            { words: ["happy", "I", "am", "very", "today"], correct: "I am very happy today" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES ---
        // 'order' represents the index of the lines in correct sequence (0 = first line provided)
        2: [
            { lines: ["I am fine, thanks.", "How are you?", "Hi, John!"], order: [2, 1, 0] },
            { lines: ["My name is Paul.", "What is your name?", "Nice to meet you."], order: [1, 0, 2] },
            { lines: ["It is 5 o'clock.", "Excuse me, what time is it?", "Thank you."], order: [1, 0, 2] },
            { lines: ["Yes, please.", "Would you like some water?", "Here you are."], order: [1, 0, 2] },
            { lines: ["I live in New York.", "Where do you live?", "That is a big city!"], order: [1, 0, 2] },
            { lines: ["See you later.", "Goodbye!", "Have a nice day."], order: [1, 2, 0] },
            { lines: ["No, I don't.", "Do you like fish?", "I prefer chicken."], order: [1, 0, 2] },
            { lines: ["He is my brother.", "Who is that boy?", "He looks like you."], order: [1, 0, 2] },
            { lines: ["It represents love.", "What does red mean?", "That is interesting."], order: [1, 0, 2] },
            { lines: ["I am 12.", "How old are you?", "Happy birthday!"], order: [1, 0, 2] },
            { lines: ["It's sunny.", "What's the weather like?", "Let's go to the beach."], order: [1, 0, 2] },
            { lines: ["Can I help you?", "Yes, I need a pen.", "Here is a blue one."], order: [0, 1, 2] },
            { lines: ["I'm sorry.", "You stepped on my foot!", "That's okay."], order: [1, 0, 2] },
            { lines: ["Let's watch a movie.", "I am bored.", "Good idea!"], order: [1, 0, 2] },
            { lines: ["Nice shoes.", "Thanks, they are new.", "Where did you buy them?"], order: [0, 1, 2] },
            { lines: ["Start the test.", "Please sit down.", "Open your books."], order: [1, 2, 0] },
            { lines: ["I go by bus.", "How do you go to school?", "Is it far?"], order: [1, 0, 2] },
            { lines: ["It is $10.", "How much is this?", "Here is the money."], order: [1, 0, 2] },
            { lines: ["I love it.", "What is your favorite color?", "Mine is green."], order: [1, 0, 2] },
            { lines: ["Are you ready?", "Not yet.", "Hurry up!"], order: [0, 1, 2] },
            { lines: ["It's delicious.", "Do you like the cake?", "I made it myself."], order: [1, 0, 2] },
            { lines: ["Where is the bathroom?", "It's over there.", "Thanks."], order: [0, 1, 2] },
            { lines: ["Congratulations!", "I passed the test.", "You studied hard."], order: [1, 0, 2] },
            { lines: ["Let's play.", "I have a ball.", "Okay, throw it."], order: [1, 0, 2] },
            { lines: ["I am lost.", "Where do you want to go?", "To the station."], order: [0, 1, 2] },
            { lines: ["Turn left.", "How do I get to the park?", "Then go straight."], order: [1, 0, 2] },
            { lines: ["What is that?", "It is a gift.", "For me?"], order: [0, 1, 2] },
            { lines: ["Can you swim?", "No, I can't.", "I can teach you."], order: [0, 1, 2] },
            { lines: ["Is this your bag?", "Yes, it is.", "Here you go."], order: [0, 1, 2] },
            { lines: ["What time does it start?", "At 8 PM.", "Don't be late."], order: [0, 1, 2] }
        ],

        // --- TYPE 3: QUICK QUESTIONS ---
        3: [
            { q: "Is a banana a fruit?", options: ["Yes", "No"], a: "Yes" },
            { q: "Do fish swim?", options: ["Yes", "No"], a: "Yes" },
            { q: "Is the sky green?", options: ["Yes", "No"], a: "No" },
            { q: "Do dogs meow?", options: ["Yes", "No"], a: "No" },
            { q: "Is fire hot?", options: ["Yes", "No"], a: "Yes" },
            { q: "Is ice cold?", options: ["Yes", "No"], a: "Yes" },
            { q: "Do birds fly?", options: ["Yes", "No"], a: "Yes" },
            { q: "Is 2+2 equal to 5?", options: ["Yes", "No"], a: "No" },
            { q: "Do you eat soup with a fork?", options: ["Yes", "No"], a: "No" },
            { q: "Is Brazil a country?", options: ["Yes", "No"], a: "Yes" },
            { q: "Do cars have wheels?", options: ["Yes", "No"], a: "Yes" },
            { q: "Is winter hot?", options: ["Yes", "No"], a: "No" },
            { q: "Are you a robot?", options: ["Yes", "No"], a: "No" },
            { q: "Is English a language?", options: ["Yes", "No"], a: "Yes" },
            { q: "Do cats bark?", options: ["Yes", "No"], a: "No" },
            { q: "What color is a lemon?", options: ["Yellow", "Blue", "Red"], a: "Yellow" },
            { q: "How many legs does a spider have?", options: ["6", "8", "10"], a: "8" },
            { q: "What is 5 + 5?", options: ["8", "10", "12"], a: "10" },
            { q: "Which animal says 'Moo'?", options: ["Cow", "Dog", "Cat"], a: "Cow" },
            { q: "What do you wear on your feet?", options: ["Hat", "Shoes", "Gloves"], a: "Shoes" },
            { q: "When do you sleep?", options: ["Morning", "Night", "Afternoon"], a: "Night" },
            { q: "Who teaches in a school?", options: ["Doctor", "Teacher", "Pilot"], a: "Teacher" },
            { q: "Where do fish live?", options: ["Sky", "Water", "Land"], a: "Water" },
            { q: "What shape is a ball?", options: ["Square", "Round", "Triangle"], a: "Round" },
            { q: "Which is a drink?", options: ["Bread", "Water", "Apple"], a: "Water" },
            { q: "What comes after Monday?", options: ["Tuesday", "Sunday", "Friday"], a: "Tuesday" },
            { q: "Opposite of Big?", options: ["Small", "Tall", "Fat"], a: "Small" },
            { q: "Opposite of Happy?", options: ["Sad", "Funny", "Good"], a: "Sad" },
            { q: "Which is red?", options: ["Grass", "Strawberry", "Sky"], a: "Strawberry" },
            { q: "How many fingers do you have?", options: ["5", "10", "20"], a: "10" }
        ],

        // --- TYPE 4: FIND MEANING ---
        4: [
            { sent: "She is very **shy**.", word: "shy", options: ["Tímido", "Alto", "Bravo", "Feliz"], a: "Tímido", def: "Nervous or timid in the company of other people." },
            { sent: "I need to **study**.", word: "study", options: ["Comer", "Estudar", "Dormir", "Correr"], a: "Estudar", def: "Devote time to acquiring knowledge." },
            { sent: "The car is **fast**.", word: "fast", options: ["Lento", "Rápido", "Velho", "Novo"], a: "Rápido", def: "Moving or capable of moving at high speed." },
            { sent: "He is **angry**.", word: "angry", options: ["Feliz", "Triste", "Bravo", "Cansado"], a: "Bravo", def: "Feeling or showing strong annoyance." },
            { sent: "The sky is **blue**.", word: "blue", options: ["Azul", "Verde", "Vermelho", "Preto"], a: "Azul", def: "A color intermediate between green and violet." },
            { sent: "I am **tired**.", word: "tired", options: ["Animado", "Cansado", "Doente", "Forte"], a: "Cansado", def: "In need of sleep or rest." },
            { sent: "The movie was **boring**.", word: "boring", options: ["Legal", "Chato", "Longo", "Curto"], a: "Chato", def: "Not interesting; tedious." },
            { sent: "She is **smart**.", word: "smart", options: ["Esperta", "Bonita", "Alta", "Baixa"], a: "Esperta", def: "Having or showing a quick-witted intelligence." },
            { sent: "It is **raining**.", word: "raining", options: ["Sol", "Chovendo", "Nevando", "Ventando"], a: "Chovendo", def: "Rain falling from the sky." },
            { sent: "The box is **heavy**.", word: "heavy", options: ["Leve", "Pesado", "Grande", "Pequeno"], a: "Pesado", def: "Of great weight; difficult to lift." },
            { sent: "He is **rich**.", word: "rich", options: ["Pobre", "Rico", "Jovem", "Velho"], a: "Rico", def: "Having a great deal of money or assets." },
            { sent: "The water is **cold**.", word: "cold", options: ["Quente", "Frio", "Sujo", "Limpo"], a: "Frio", def: "Of or at a low or relatively low temperature." },
            { sent: "I am **hungry**.", word: "hungry", options: ["Com fome", "Com sede", "Com sono", "Com medo"], a: "Com fome", def: "Feeling or displaying the need for food." },
            { sent: "The room is **messy**.", word: "messy", options: ["Limpo", "Bagunçado", "Grande", "Escuro"], a: "Bagunçado", def: "Untidy or dirty." },
            { sent: "This is **easy**.", word: "easy", options: ["Difícil", "Fácil", "Chato", "Legal"], a: "Fácil", def: "Achieved without great effort." },
            { sent: "They are **loud**.", word: "loud", options: ["Silenciosos", "Barulhentos", "Calmos", "Lentos"], a: "Barulhentos", def: "Producing or capable of producing much noise." },
            { sent: "The glass is **empty**.", word: "empty", options: ["Cheio", "Vazio", "Quebrado", "Novo"], a: "Vazio", def: "Containing nothing; not filled." },
            { sent: "She is **kind**.", word: "kind", options: ["Malvada", "Gentil", "Feia", "Rica"], a: "Gentil", def: "Having or showing a friendly, generous nature." },
            { sent: "The knife is **sharp**.", word: "sharp", options: ["Cego", "Afiado", "Grande", "Pequeno"], a: "Afiado", def: "Having an edge or point that is able to cut." },
            { sent: "He is **brave**.", word: "brave", options: ["Medroso", "Corajoso", "Fraco", "Tonto"], a: "Corajoso", def: "Ready to face and endure danger or pain." },
            { sent: "The apple is **sweet**.", word: "sweet", options: ["Azedo", "Doce", "Amargo", "Salgado"], a: "Doce", def: "Having the pleasant taste characteristic of sugar." },
            { sent: "I am **thirsty**.", word: "thirsty", options: ["Com fome", "Com sede", "Doente", "Triste"], a: "Com sede", def: "Feeling a need to drink." },
            { sent: "The road is **long**.", word: "long", options: ["Curto", "Longo", "Largo", "Estreito"], a: "Longo", def: "Measuring a great distance from end to end." },
            { sent: "It is **dark** outside.", word: "dark", options: ["Claro", "Escuro", "Frio", "Quente"], a: "Escuro", def: "With little or no light." },
            { sent: "The floor is **wet**.", word: "wet", options: ["Seco", "Molhado", "Limpo", "Sujo"], a: "Molhado", def: "Covered or saturated with water or another liquid." },
            { sent: "She is **young**.", word: "young", options: ["Velha", "Jovem", "Alta", "Magra"], a: "Jovem", def: "Having lived or existed for only a short time." },
            { sent: "The bed is **soft**.", word: "soft", options: ["Duro", "Macio", "Grande", "Novo"], a: "Macio", def: "Easy to mold, cut, compress, or fold." },
            { sent: "Please be **quiet**.", word: "quiet", options: ["Barulhento", "Quieto", "Rápido", "Lento"], a: "Quieto", def: "Making little or no noise." },
            { sent: "The gift is **cheap**.", word: "cheap", options: ["Caro", "Barato", "Bonito", "Feio"], a: "Barato", def: "Costing very little; low in price." },
            { sent: "He is **strong**.", word: "strong", options: ["Fraco", "Forte", "Gordo", "Magro"], a: "Forte", def: "Having the power to move heavy weights." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE ---
        5: [
            { sent: "She **don't** like cats.", correct: "doesn't" },
            { sent: "We **is** happy.", correct: "are" },
            { sent: "They **plays** soccer.", correct: "play" },
            { sent: "I **has** a dog.", correct: "have" },
            { sent: "He **go** to school.", correct: "goes" },
            { sent: "You **am** my friend.", correct: "are" },
            { sent: "It **are** raining.", correct: "is" },
            { sent: "She **run** fast.", correct: "runs" },
            { sent: "Do you **likes** pizza?", correct: "like" },
            { sent: "I **studies** English.", correct: "study" },
            { sent: "My mom **cook** well.", correct: "cooks" },
            { sent: "The birds **flies** high.", correct: "fly" },
            { sent: "We **doesn't** know.", correct: "don't" },
            { sent: "He **watching** TV.", correct: "is watching" },
            { sent: "Yesterday I **go** home.", correct: "went" },
            { sent: "She **didn't went** there.", correct: "didn't go" },
            { sent: "I **can swimming**.", correct: "can swim" },
            { sent: "They **was** here.", correct: "were" },
            { sent: "Where **you are**?", correct: "are you" },
            { sent: "She **is play** now.", correct: "is playing" },
            { sent: "He **have** two cars.", correct: "has" },
            { sent: "I **am study**.", correct: "am studying" },
            { sent: "The dog **eat** meat.", correct: "eats" },
            { sent: "We **are go** to the mall.", correct: "are going" },
            { sent: "She **don't** understand.", correct: "doesn't" },
            { sent: "He **walk** everyday.", correct: "walks" },
            { sent: "You **was** late.", correct: "were" },
            { sent: "I **no** like it.", correct: "don't" },
            { sent: "She **can sings**.", correct: "can sing" },
            { sent: "They **happy**.", correct: "are happy" }
        ],

        // --- TYPE 6: MATCH SENTENCES (30 SETS of 5 pairs) ---
        6: [
            { pairs: [{a:"What is your name?",b:"My name is John."},{a:"How old are you?",b:"I am 12."},{a:"Where do you live?",b:"In Brazil."},{a:"Do you like red?",b:"Yes, I do."},{a:"Goodbye!",b:"See you later."}] },
            { pairs: [{a:"Big",b:"Small"},{a:"Hot",b:"Cold"},{a:"Up",b:"Down"},{a:"Happy",b:"Sad"},{a:"Fast",b:"Slow"}] },
            { pairs: [{a:"One",b:"1"},{a:"Two",b:"2"},{a:"Three",b:"3"},{a:"Four",b:"4"},{a:"Five",b:"5"}] },
            { pairs: [{a:"Brazil",b:"Portuguese"},{a:"USA",b:"English"},{a:"France",b:"French"},{a:"Spain",b:"Spanish"},{a:"Japan",b:"Japanese"}] },
            { pairs: [{a:"I am",b:"I'm"},{a:"You are",b:"You're"},{a:"He is",b:"He's"},{a:"She is",b:"She's"},{a:"We are",b:"We're"}] },
            { pairs: [{a:"Red + Yellow",b:"Orange"},{a:"Blue + Yellow",b:"Green"},{a:"Red + White",b:"Pink"},{a:"Black + White",b:"Gray"},{a:"Red + Blue",b:"Purple"}] },
            { pairs: [{a:"Dog",b:"Bark"},{a:"Cat",b:"Meow"},{a:"Cow",b:"Moo"},{a:"Bird",b:"Chirp"},{a:"Lion",b:"Roar"}] },
            { pairs: [{a:"Morning",b:"Breakfast"},{a:"Afternoon",b:"Lunch"},{a:"Evening",b:"Dinner"},{a:"Night",b:"Sleep"},{a:"Gym",b:"Exercise"}] },
            { pairs: [{a:"Teacher",b:"School"},{a:"Doctor",b:"Hospital"},{a:"Chef",b:"Restaurant"},{a:"Pilot",b:"Airport"},{a:"Farmer",b:"Farm"}] },
            { pairs: [{a:"Monday",b:"Tuesday"},{a:"Wednesday",b:"Thursday"},{a:"Friday",b:"Saturday"},{a:"January",b:"February"},{a:"May",b:"June"}] },
            { pairs: [{a:"Eye",b:"See"},{a:"Ear",b:"Hear"},{a:"Nose",b:"Smell"},{a:"Mouth",b:"Taste"},{a:"Hand",b:"Touch"}] },
            { pairs: [{a:"Run",b:"Walk"},{a:"Scream",b:"Whisper"},{a:"Laugh",b:"Cry"},{a:"Open",b:"Close"},{a:"Push",b:"Pull"}] },
            { pairs: [{a:"I",b:"My"},{a:"You",b:"Your"},{a:"He",b:"His"},{a:"She",b:"Her"},{a:"We",b:"Our"}] },
            { pairs: [{a:"10",b:"Ten"},{a:"20",b:"Twenty"},{a:"30",b:"Thirty"},{a:"40",b:"Forty"},{a:"50",b:"Fifty"}] },
            { pairs: [{a:"Car",b:"Drive"},{a:"Plane",b:"Fly"},{a:"Boat",b:"Sail"},{a:"Bike",b:"Ride"},{a:"Bus",b:"Take"}] },
            { pairs: [{a:"Mother",b:"Father"},{a:"Sister",b:"Brother"},{a:"Aunt",b:"Uncle"},{a:"Grandma",b:"Grandpa"},{a:"Daughter",b:"Son"}] },
            { pairs: [{a:"Go",b:"Went"},{a:"Eat",b:"Ate"},{a:"See",b:"Saw"},{a:"Do",b:"Did"},{a:"Have",b:"Had"}] },
            { pairs: [{a:"Apple",b:"Fruit"},{a:"Carrot",b:"Vegetable"},{a:"Chicken",b:"Meat"},{a:"Milk",b:"Drink"},{a:"Cake",b:"Dessert"}] },
            { pairs: [{a:"Sunny",b:"Sun"},{a:"Rainy",b:"Rain"},{a:"Cloudy",b:"Cloud"},{a:"Windy",b:"Wind"},{a:"Snowy",b:"Snow"}] },
            { pairs: [{a:"Head",b:"Hat"},{a:"Foot",b:"Shoe"},{a:"Hand",b:"Glove"},{a:"Neck",b:"Scarf"},{a:"Leg",b:"Pants"}] },
            { pairs: [{a:"A",b:"B"},{a:"C",b:"D"},{a:"E",b:"F"},{a:"G",b:"H"},{a:"I",b:"J"}] },
            { pairs: [{a:"Good",b:"Bad"},{a:"Hard",b:"Soft"},{a:"Rich",b:"Pobre"},{a:"Young",b:"Old"},{a:"New",b:"Used"}] },
            { pairs: [{a:"Soccer",b:"Ball"},{a:"Tennis",b:"Racket"},{a:"Baseball",b:"Bat"},{a:"Swimming",b:"Pool"},{a:"Surfing",b:"Board"}] },
            { pairs: [{a:"Winter",b:"Cold"},{a:"Summer",b:"Hot"},{a:"Spring",b:"Flowers"},{a:"Fall",b:"Leaves"},{a:"Snow",b:"White"}] },
            { pairs: [{a:"Pen",b:"Write"},{a:"Book",b:"Read"},{a:"Scissors",b:"Cut"},{a:"Glue",b:"Stick"},{a:"Ruler",b:"Measure"}] },
            { pairs: [{a:"Always",b:"100%"},{a:"Usually",b:"80%"},{a:"Sometimes",b:"50%"},{a:"Rarely",b:"10%"},{a:"Never",b:"0%"}] },
            { pairs: [{a:"Love",b:"Like"},{a:"Hate",b:"Dislike"},{a:"Want",b:"Need"},{a:"Start",b:"Begin"},{a:"End",b:"Finish"}] },
            { pairs: [{a:"North",b:"South"},{a:"East",b:"West"},{a:"Up",b:"Down"},{a:"Left",b:"Right"},{a:"In",b:"Out"}] },
            { pairs: [{a:"Can",b:"Ability"},{a:"Must",b:"Obligation"},{a:"Should",b:"Advice"},{a:"Might",b:"Possibility"},{a:"Will",b:"Future"}] },
            { pairs: [{a:"Who",b:"Person"},{a:"Where",b:"Place"},{a:"When",b:"Time"},{a:"What",b:"Thing"},{a:"Why",b:"Reason"}] }
        ],

        // --- TYPE 7: BEST ANSWER (WH QUESTIONS) ---
        7: [
            { q: "Where does she live?", options: ["She lives in NY.", "She live in NY.", "She is living NY."], a: "She lives in NY." },
            { q: "When is your birthday?", options: ["In Monday.", "On May 5th.", "At 5 o'clock."], a: "On May 5th." },
            { q: "Who is that man?", options: ["He is my dad.", "It is a car.", "He is tall."], a: "He is my dad." },
            { q: "Why are you sad?", options: ["Because I lost my toy.", "Because I am happy.", "Yes, I am."], a: "Because I lost my toy." },
            { q: "What time is it?", options: ["It is 10 o'clock.", "It is Monday.", "It is sunny."], a: "It is 10 o'clock." },
            { q: "How do you go to school?", options: ["By bus.", "With bread.", "On Sunday."], a: "By bus." },
            { q: "How much is this?", options: ["It is 5 dollars.", "It is 5 o'clock.", "It is 5 years old."], a: "It is 5 dollars." },
            { q: "Where are you going?", options: ["To the park.", "I am playing.", "Yes, I go."], a: "To the park." },
            { q: "When do you wake up?", options: ["At 7 AM.", "In the kitchen.", "With my brother."], a: "At 7 AM." },
            { q: "Who is your teacher?", options: ["Mr. Smith.", "English.", "School."], a: "Mr. Smith." },
            { q: "What is your name?", options: ["My name is Paul.", "I am 10.", "I like blue."], a: "My name is Paul." },
            { q: "Why do you like summer?", options: ["Because it's hot.", "Because it's cold.", "No, I don't."], a: "Because it's hot." },
            { q: "How old are you?", options: ["I am 12.", "I have 12.", "I am fine."], a: "I am 12." },
            { q: "What are you doing?", options: ["I am reading.", "I do reading.", "I read."], a: "I am reading." },
            { q: "Where is the cat?", options: ["Under the table.", "It is a cat.", "Blue."], a: "Under the table." },
            { q: "When does the movie start?", options: ["At 8 PM.", "In the cinema.", "It is good."], a: "At 8 PM." },
            { q: "Who plays soccer?", options: ["My brother.", "A ball.", "Yesterday."], a: "My brother." },
            { q: "How are you?", options: ["I am fine.", "I am Paul.", "I am 10."], a: "I am fine." },
            { q: "Why is he running?", options: ["He is late.", "He likes food.", "He is sleeping."], a: "He is late." },
            { q: "What color is the sky?", options: ["Blue.", "Green.", "Yellow."], a: "Blue." },
            { q: "Where do fish live?", options: ["In water.", "In trees.", "In houses."], a: "In water." },
            { q: "When is Christmas?", options: ["In December.", "In June.", "In Monday."], a: "In December." },
            { q: "Who is singing?", options: ["Mary.", "The radio.", "A song."], a: "Mary." },
            { q: "How many apples?", options: ["Three.", "Red.", "Big."], a: "Three." },
            { q: "What is that?", options: ["It's a dog.", "It's Paul.", "It's running."], a: "It's a dog." },
            { q: "Where do you sleep?", options: ["In a bed.", "In a car.", "In a school."], a: "In a bed." },
            { q: "When do we eat lunch?", options: ["At noon.", "At night.", "In the morning."], a: "At noon." },
            { q: "Who cooks dinner?", options: ["My mom.", "The kitchen.", "Food."], a: "My mom." },
            { q: "How is the weather?", options: ["Sunny.", "Happy.", "Tall."], a: "Sunny." },
            { q: "Why are you laughing?", options: ["It's funny.", "It's sad.", "It's hard."], a: "It's funny." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY ---
        8: [
            { sent: "I play **tennis** in the pool.", wrong: "tennis", options: ["soccer", "swimming", "basketball"], a: "swimming" },
            { sent: "I eat **soup** with a fork.", wrong: "soup", options: ["steak", "juice", "water"], a: "steak" },
            { sent: "The **dog** meows loudly.", wrong: "dog", options: ["cat", "cow", "bird"], a: "cat" },
            { sent: "I wear **gloves** on my feet.", wrong: "gloves", options: ["hat", "shoes", "scarf"], a: "shoes" },
            { sent: "She writes with a **spoon**.", wrong: "spoon", options: ["pen", "fork", "plate"], a: "pen" },
            { sent: "The **car** flies in the sky.", wrong: "car", options: ["plane", "boat", "bus"], a: "plane" },
            { sent: "I sleep in the **kitchen**.", wrong: "kitchen", options: ["bedroom", "bathroom", "garage"], a: "bedroom" },
            { sent: "He drinks **bread** for breakfast.", wrong: "bread", options: ["milk", "cheese", "cake"], a: "milk" },
            { sent: "The sun is **green**.", wrong: "green", options: ["yellow", "purple", "black"], a: "yellow" },
            { sent: "I read a **chair**.", wrong: "chair", options: ["book", "table", "lamp"], a: "book" },
            { sent: "Fish walk on **land**.", wrong: "land", options: ["water", "air", "fire"], a: "water" },
            { sent: "I wash my hands with **dirt**.", wrong: "dirt", options: ["soap", "mud", "oil"], a: "soap" },
            { sent: "The **tree** barks at the mailman.", wrong: "tree", options: ["dog", "house", "flower"], a: "dog" },
            { sent: "I drive a **bicycle** on the highway.", wrong: "bicycle", options: ["car", "skateboard", "scooter"], a: "car" },
            { sent: "Ice cream is **hot**.", wrong: "hot", options: ["cold", "spicy", "dry"], a: "cold" },
            { sent: "I listen to music with my **eyes**.", wrong: "eyes", options: ["ears", "nose", "mouth"], a: "ears" },
            { sent: "The **teacher** fixes the car.", wrong: "teacher", options: ["mechanic", "doctor", "chef"], a: "mechanic" },
            { sent: "I cut paper with **glue**.", wrong: "glue", options: ["scissors", "tape", "ruler"], a: "scissors" },
            { sent: "Birds have **arms**.", wrong: "arms", options: ["wings", "fins", "hands"], a: "wings" },
            { sent: "The **moon** shines during the day.", wrong: "moon", options: ["sun", "star", "cloud"], a: "sun" },
            { sent: "I sit on the **table**.", wrong: "table", options: ["chair", "wall", "ceiling"], a: "chair" },
            { sent: "The **phone** cooks food.", wrong: "phone", options: ["stove", "fridge", "sink"], a: "stove" },
            { sent: "I brush my **hair** with a toothbrush.", wrong: "hair", options: ["teeth", "face", "hands"], a: "teeth" },
            { sent: "The **baby** drives the bus.", wrong: "baby", options: ["driver", "cat", "toy"], a: "driver" },
            { sent: "Apples are **blue**.", wrong: "blue", options: ["red", "purple", "black"], a: "red" },
            { sent: "I watch **radio**.", wrong: "radio", options: ["TV", "book", "music"], a: "TV" },
            { sent: "The **spider** has 2 legs.", wrong: "spider", options: ["human", "dog", "cat"], a: "human" },
            { sent: "It rains **candy** from the sky.", wrong: "candy", options: ["water", "rocks", "toys"], a: "water" },
            { sent: "I wear **shorts** in the winter.", wrong: "shorts", options: ["coat", "sandal", "t-shirt"], a: "coat" },
            { sent: "The **lion** eats grass.", wrong: "lion", options: ["cow", "tiger", "wolf"], a: "cow" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (Placeholder Audio) ---
        // --- TYPE 9: LISTEN AND ANSWER (TTS reads the 'q' field) ---
        9: [
            { audio: "Which fruit is usually red and round?", options: ["Apple", "Banana", "Grape"], a: "Apple" },
            { audio: "Where do you go to borrow books?", options: ["The Library", "The Bank", "The Gym"], a: "The Library" },
            { audio: "What is the opposite of the word cold?", options: ["Hot", "Tall", "Fast"], a: "Hot" }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (2 Blanks) ---
        10: [
            { audio: "She goes to the park every day.", sent: "She ___ to the ___ every day.", blanks: ["goes", "park"] },
            { audio: "I like to play soccer on Sundays.", sent: "I ___ play ___ on Sundays.", blanks: ["like", "soccer"] },
            { audio: "He has a blue car.", sent: "He ___ a ___ car.", blanks: ["has", "blue"] },
            { audio: "We are eating lunch.", sent: "We ___ ___ lunch.", blanks: ["are", "eating"] },
            { audio: "The cat is sleeping.", sent: "The ___ is ___.", blanks: ["cat", "sleeping"] },
            { audio: "Do you want water?", sent: "Do ___ want ___?", blanks: ["you", "water"] },
            { audio: "My name is Paul.", sent: "My ___ is ___.", blanks: ["name", "Paul"] },
            { audio: "It is raining today.", sent: "It ___ ___ today.", blanks: ["is", "raining"] },
            { audio: "They are very happy.", sent: "They ___ ___ happy.", blanks: ["are", "very"] },
            { audio: "She woke up late.", sent: "She ___ ___ late.", blanks: ["woke", "up"] },
            { audio: "I love pop music.", sent: "I ___ ___ music.", blanks: ["love", "pop"] },
            { audio: "The bird flies high.", sent: "The ___ ___ high.", blanks: ["bird", "flies"] },
            { audio: "We did our homework.", sent: "We ___ ___ homework.", blanks: ["did", "our"] },
            { audio: "He runs very fast.", sent: "He ___ ___ fast.", blanks: ["runs", "very"] },
            { audio: "Please open the door.", sent: "Please ___ the ___.", blanks: ["open", "door"] },
            { audio: "The sky is blue.", sent: "The ___ is ___.", blanks: ["sky", "blue"] },
            { audio: "I ate an apple.", sent: "I ___ ___ apple.", blanks: ["ate", "an"] },
            { audio: "She read a book.", sent: "She ___ ___ book.", blanks: ["read", "a"] },
            { audio: "They went back home.", sent: "They ___ ___ home.", blanks: ["went", "back"] },
            { audio: "My mom is nice.", sent: "My ___ ___ nice.", blanks: ["mom", "is"] },
            { audio: "The sun is hot.", sent: "The ___ ___ hot.", blanks: ["sun", "is"] },
            { audio: "We watched the TV.", sent: "We ___ ___ TV.", blanks: ["watched", "the"] },
            { audio: "He cannot even swim.", sent: "He ___ ___ swim.", blanks: ["cannot", "even"] },
            { audio: "I drink green tea.", sent: "I ___ ___ tea.", blanks: ["drink", "green"] },
            { audio: "She wore a dress.", sent: "She ___ ___ dress.", blanks: ["wore", "a"] },
            { audio: "The dog barked loudly.", sent: "The ___ ___ loud.", blanks: ["dog", "barked"] },
            { audio: "We won the game.", sent: "We ___ ___ game.", blanks: ["won", "the"] },
            { audio: "He threw the ball.", sent: "He ___ ___ ball.", blanks: ["threw", "the"] },
            { audio: "I felt so tired.", sent: "I ___ ___ tired.", blanks: ["felt", "so"] },
            { audio: "She sang a song.", sent: "She ___ ___ song.", blanks: ["sang", "a"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (8 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE ---
        11: [
            {
                title: "At the Store",
                lines: [
                    { speaker: "A", text: "Can I ___ you?", options: ["help", "do"], a: "help" },
                    { speaker: "B", text: "Yes, I am ___ for a shirt.", options: ["looking", "watching"], a: "looking" },
                    { speaker: "A", text: "What ___ do you need?", options: ["size", "tall"], a: "size" },
                    { speaker: "B", text: "Medium, ___.", options: ["please", "thanks"], a: "please" },
                    { speaker: "A", text: "Here ___ are.", options: ["you", "we"], a: "you" }
                ]
            },
            {
                title: "Meeting New Friends",
                lines: [
                    { speaker: "A", text: "Hello, my ___ is Tom.", options: ["name", "call"], a: "name" },
                    { speaker: "B", text: "Hi Tom, I ___ Sarah.", options: ["am", "is"], a: "am" },
                    { speaker: "A", text: "Nice to ___ you.", options: ["meet", "see"], a: "meet" },
                    { speaker: "B", text: "Where are you ___?", options: ["from", "go"], a: "from" },
                    { speaker: "A", text: "I am from ___.", options: ["Brazil", "Brazilian"], a: "Brazil" }
                ]
            },
            {
                title: "Ordering Food",
                lines: [
                    { speaker: "A", text: "Are you ready to ___?", options: ["order", "eat"], a: "order" },
                    { speaker: "B", text: "Yes, I would ___ a burger.", options: ["like", "want"], a: "like" },
                    { speaker: "A", text: "Anything to ___?", options: ["drink", "eat"], a: "drink" },
                    { speaker: "B", text: "Just ___, please.", options: ["water", "bread"], a: "water" },
                    { speaker: "A", text: "Coming right ___.", options: ["up", "down"], a: "up" }
                ]
            },
            {
                title: "Asking Directions",
                lines: [
                    { speaker: "A", text: "Excuse ___, where is the bank?", options: ["me", "you"], a: "me" },
                    { speaker: "B", text: "It is ___ the street.", options: ["across", "under"], a: "across" },
                    { speaker: "A", text: "Is it ___?", options: ["far", "long"], a: "far" },
                    { speaker: "B", text: "No, just 5 ___.", options: ["minutes", "hours"], a: "minutes" },
                    { speaker: "A", text: "Thank ___.", options: ["you", "him"], a: "you" }
                ]
            },
            {
                title: "Telephone Call",
                lines: [
                    { speaker: "A", text: "Hello, is John ___?", options: ["there", "here"], a: "there" },
                    { speaker: "B", text: "No, he is ___ out.", options: ["gone", "go"], a: "gone" },
                    { speaker: "A", text: "Can I leave a ___?", options: ["message", "letter"], a: "message" },
                    { speaker: "B", text: "Sure, go ___.", options: ["ahead", "back"], a: "ahead" },
                    { speaker: "A", text: "Tell him called ___.", options: ["later", "yesterday"], a: "later" }
                ]
            },
            {
                title: "Weekend Plans",
                lines: [
                    { speaker: "A", text: "What are you ___ this weekend?", options: ["doing", "do"], a: "doing" },
                    { speaker: "B", text: "I am going to the ___.", options: ["beach", "sand"], a: "beach" },
                    { speaker: "A", text: "That sounds ___.", options: ["fun", "bad"], a: "fun" },
                    { speaker: "B", text: "Do you want to ___?", options: ["come", "go"], a: "come" },
                    { speaker: "A", text: "I would ___ to.", options: ["love", "like"], a: "love" }
                ]
            },
            {
                title: "At the Library",
                lines: [
                    { speaker: "A", text: "I need a ___ on history.", options: ["book", "paper"], a: "book" },
                    { speaker: "B", text: "Check the second ___.", options: ["shelf", "floor"], a: "shelf" },
                    { speaker: "A", text: "Can I ___ it?", options: ["borrow", "buy"], a: "borrow" },
                    { speaker: "B", text: "Yes, for two ___.", options: ["weeks", "days"], a: "weeks" },
                    { speaker: "A", text: "Okay, ___ you.", options: ["thank", "thanks"], a: "thank" }
                ]
            },
            {
                title: "The Weather",
                lines: [
                    { speaker: "A", text: "It is very ___ today.", options: ["hot", "tall"], a: "hot" },
                    { speaker: "B", text: "Yes, I need ___ water.", options: ["some", "a"], a: "some" },
                    { speaker: "A", text: "Look at the ___.", options: ["sky", "ground"], a: "sky" },
                    { speaker: "B", text: "It looks like ___.", options: ["rain", "snow"], a: "rain" },
                    { speaker: "A", text: "Let's go ___.", options: ["inside", "outside"], a: "inside" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER ---
        12: [
            {
                title: "My Daily Routine",
                text: "My name is Sarah. I wake up at 6 AM. I eat toast for breakfast. I go to school by bus. I love my school.",
                questions: [
                    { q: "When does she wake up?", options: ["6 AM", "7 AM", "8 AM"], a: "6 AM" },
                    { q: "What does she eat?", options: ["Toast", "Eggs", "Cereal"], a: "Toast" },
                    { q: "How does she go to school?", options: ["Bus", "Car", "Walk"], a: "Bus" },
                    { q: "Does she like school?", options: ["Yes", "No", "Maybe"], a: "Yes" },
                    { q: "What is her name?", options: ["Sarah", "Mary", "Jane"], a: "Sarah" }
                ]
            },
            {
                title: "The Zoo",
                text: "Tom went to the zoo. He saw a big lion. The lion was sleeping. Tom also saw a monkey eating a banana.",
                questions: [
                    { q: "Where did Tom go?", options: ["Zoo", "Park", "School"], a: "Zoo" },
                    { q: "What did he see first?", options: ["Lion", "Tiger", "Bear"], a: "Lion" },
                    { q: "What was the lion doing?", options: ["Sleeping", "Running", "Eating"], a: "Sleeping" },
                    { q: "What was the monkey eating?", options: ["Banana", "Apple", "Orange"], a: "Banana" },
                    { q: "Was the lion small?", options: ["No", "Yes", "Maybe"], a: "No" }
                ]
            },
            {
                title: "My Favorite Sport",
                text: "I like soccer. I play every Saturday. My team is blue. I am the goalkeeper. It is fun.",
                questions: [
                    { q: "What sport does he like?", options: ["Soccer", "Tennis", "Golf"], a: "Soccer" },
                    { q: "When does he play?", options: ["Saturday", "Sunday", "Monday"], a: "Saturday" },
                    { q: "What color is his team?", options: ["Blue", "Red", "Green"], a: "Blue" },
                    { q: "What position does he play?", options: ["Goalkeeper", "Striker", "Coach"], a: "Goalkeeper" },
                    { q: "Is it boring?", options: ["No", "Yes", "A little"], a: "No" }
                ]
            },
            {
                title: "Making a Cake",
                text: "Mom is making a cake. She needs eggs, flour, and sugar. I help her mix it. We put it in the oven.",
                questions: [
                    { q: "What is Mom making?", options: ["Cake", "Pizza", "Soup"], a: "Cake" },
                    { q: "Does she need eggs?", options: ["Yes", "No", "Maybe"], a: "Yes" },
                    { q: "Who helps her?", options: ["I do", "Dad", "Nobody"], a: "I do" },
                    { q: "What do they do?", options: ["Mix it", "Eat it", "Throw it"], a: "Mix it" },
                    { q: "Where do they put it?", options: ["Oven", "Fridge", "Table"], a: "Oven" }
                ]
            },
            {
                title: "The Lost Dog",
                text: "I lost my dog, Rex. He is brown and white. I looked in the park. I found him under a tree.",
                questions: [
                    { q: "What is the dog's name?", options: ["Rex", "Spot", "Fido"], a: "Rex" },
                    { q: "What color is he?", options: ["Brown and white", "Black", "Gray"], a: "Brown and white" },
                    { q: "Where did I look?", options: ["Park", "School", "Store"], a: "Park" },
                    { q: "Where was he?", options: ["Under a tree", "In a car", "At home"], a: "Under a tree" },
                    { q: "Did I find him?", options: ["Yes", "No", "Maybe"], a: "Yes" }
                ]
            },
            {
                title: "My New Bike",
                text: "I got a new bike. It is red. It has two wheels. I ride it to the park. I wear a helmet.",
                questions: [
                    { q: "What is new?", options: ["Bike", "Car", "Skate"], a: "Bike" },
                    { q: "What color is it?", options: ["Red", "Blue", "Black"], a: "Red" },
                    { q: "How many wheels?", options: ["Two", "Four", "Three"], a: "Two" },
                    { q: "Where do I ride?", options: ["Park", "School", "Mall"], a: "Park" },
                    { q: "What do I wear?", options: ["Helmet", "Hat", "Cap"], a: "Helmet" }
                ]
            },
            {
                title: "Summer Vacation",
                text: "We went to the beach. The water was warm. We built a sandcastle. Dad bought ice cream. It was a great day.",
                questions: [
                    { q: "Where did they go?", options: ["Beach", "Mountain", "City"], a: "Beach" },
                    { q: "How was the water?", options: ["Warm", "Cold", "Hot"], a: "Warm" },
                    { q: "What did they build?", options: ["Sandcastle", "House", "Boat"], a: "Sandcastle" },
                    { q: "What did Dad buy?", options: ["Ice cream", "Pizza", "Soda"], a: "Ice cream" },
                    { q: "Was it a bad day?", options: ["No", "Yes", "Maybe"], a: "No" }
                ]
            },
            {
                title: "The Rainy Day",
                text: "It is raining today. I cannot play outside. I read a book in my room. My cat sleeps on my bed.",
                questions: [
                    { q: "What is the weather?", options: ["Raining", "Sunny", "Snowing"], a: "Raining" },
                    { q: "Can he play outside?", options: ["No", "Yes", "Maybe"], a: "No" },
                    { q: "What does he do?", options: ["Read", "Sleep", "Eat"], a: "Read" },
                    { q: "Where is the cat?", options: ["Bed", "Chair", "Floor"], a: "Bed" },
                    { q: "Is he happy?", options: ["Unknown", "Yes", "No"], a: "Unknown" }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER (TTS reads the 'text' passage) ---
        13: [
            {
                title: "The Zoo Visit",
                audio: "Yesterday, Tom went to the zoo with his family. He saw a huge lion sleeping under a tree. Later, he saw a monkey eating a yellow banana. It was a very sunny day.",
                questions: [
                    { q: "Where did Tom go yesterday?", options: ["The Zoo", "The Park", "The Beach"], a: "The Zoo" },
                    { q: "What was the lion doing?", options: ["Sleeping", "Running", "Eating"], a: "Sleeping" },
                    { q: "What was the monkey eating?", options: ["A banana", "An apple", "A carrot"], a: "A banana" }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT ---
        14: [
            {
                title: "My Dog",
                text: "I have a dog named Rex. He is very [1] (big/small). He likes to [2] (play/read) in the garden. He eats [3] (meat/candy) every day. He sleeps in his [4] (bed/chair). I [5] (love/hate) him.",
                answers: ["big", "play", "meat", "bed", "love"]
            },
            {
                title: "School Day",
                text: "I go to [1] (school/work) at 8 AM. My favorite [2] (subject/food) is Math. I have [3] (lunch/dinner) at noon. I play with my [4] (friends/parents). I go home by [5] (bus/plane).",
                answers: ["school", "subject", "lunch", "friends", "bus"]
            },
            {
                title: "Cooking",
                text: "Today I am [1] (cooking/running) pasta. I boil the [2] (water/milk). I add the [3] (sauce/juice). It smells [4] (good/bad). We eat [5] (together/alone).",
                answers: ["cooking", "water", "sauce", "good", "together"]
            },
            {
                title: "The Park",
                text: "The park is [1] (green/red). There are many [2] (trees/cars). Children [3] (play/work) on the swings. Dogs [4] (run/fly) on the grass. It is [5] (peaceful/noisy).",
                answers: ["green", "trees", "play", "run", "peaceful"]
            },
            {
                title: "My House",
                text: "I live in a [1] (house/boat). It has three [2] (rooms/wheels). The kitchen is [3] (small/fast). My room is [4] (blue/hot). I like to [5] (sleep/swim) there.",
                answers: ["house", "rooms", "small", "blue", "sleep"]
            },
            {
                title: "Winter",
                text: "Winter is [1] (cold/hot). It often [2] (snows/burns). We wear [3] (coats/shorts). We drink hot [4] (chocolate/water). We stay [5] (inside/outside).",
                answers: ["cold", "snows", "coats", "chocolate", "inside"]
            },
            {
                title: "Shopping",
                text: "I need to buy [1] (clothes/food). I go to the [2] (mall/park). I try on a [3] (shirt/apple). It fits [4] (well/bad). I [5] (pay/steal) for it.",
                answers: ["clothes", "mall", "shirt", "well", "pay"]
            },
            {
                title: "Travel",
                text: "I want to [1] (travel/sleep) to Japan. I will fly by [2] (plane/car). I will eat [3] (sushi/pizza). I will see [4] (temples/schools). It will be [5] (fun/sad).",
                answers: ["travel", "plane", "sushi", "temples", "fun"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT ---
        15: [
            {
                title: "The Weekend",
                audio: "Last weekend I went to the beach. It was very hot. We ate pizza. We saw a movie. It cost ten dollars.",
                text: "Last weekend I went to the [1]. It was very [2]. We ate [3]. We saw a [4]. It cost [5] dollars.",
                answers: ["beach", "hot", "pizza", "movie", "ten"]
            },
            {
                title: "My Family",
                audio: "My family is big. My dad is a doctor. My mom is a nurse. I have one brother. We live in London.",
                text: "My family is [1]. My dad is a [2]. My mom is a [3]. I have one [4]. We live in [5].",
                answers: ["big", "doctor", "nurse", "brother", "London"]
            },
            {
                title: "Breakfast",
                audio: "I eat eggs for breakfast. I drink juice. My brother eats toast. We sit at the table. We leave at eight.",
                text: "I eat [1] for breakfast. I drink [2]. My brother eats [3]. We sit at the [4]. We leave at [5].",
                answers: ["eggs", "juice", "toast", "table", "eight"]
            },
            {
                title: "Sports",
                audio: "I like to play soccer. I need a ball. I run fast. My team wins often. I am tired.",
                text: "I like to play [1]. I need a [2]. I run [3]. My team wins [4]. I am [5].",
                answers: ["soccer", "ball", "fast", "often", "tired"]
            },
            {
                title: "The Garden",
                audio: "The garden has flowers. They are red. The grass is green. I see a bee. It is small.",
                text: "The garden has [1]. They are [2]. The grass is [3]. I see a [4]. It is [5].",
                answers: ["flowers", "red", "green", "bee", "small"]
            },
            {
                title: "Shopping List",
                audio: "I need to buy milk. Also some bread. Don't forget eggs. Get a bag of chips. It is for lunch.",
                text: "I need to buy [1]. Also some [2]. Don't forget [3]. Get a bag of [4]. It is for [5].",
                answers: ["milk", "bread", "eggs", "chips", "lunch"]
            },
            {
                title: "My Cat",
                audio: "My cat is black. She likes to jump. She hates water. She sleeps on my bed. She purrs loudly.",
                text: "My cat is [1]. She likes to [2]. She hates [3]. She sleeps on my [4]. She purrs [5].",
                answers: ["black", "jump", "water", "bed", "loudly"]
            },
            {
                title: "Holiday",
                audio: "Christmas is in December. We get gifts. We decorate the tree. We sing songs. Everyone is happy.",
                text: "Christmas is in [1]. We get [2]. We decorate the [3]. We sing [4]. Everyone is [5].",
                answers: ["December", "gifts", "tree", "songs", "happy"]
            }
        ]
    }
});