/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */

window.initExercise({
    id: "8-1-1",
    grade: "8th Grade",
    bimester: "1",
    chapter: "1",
    title: "Gadgets and Shopping",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES ---
        1: [
            { words: ["than", "this", "is", "laptop", "faster", "that", "one"], correct: "This laptop is faster than that one" },
            { words: ["the", "mall", "stylish", "in", "most", "is", "dress", "this"], correct: "This dress is the most stylish in the mall" },
            { words: ["as", "phone", "is", "as", "expensive", "mine", "your"], correct: "Your phone is as expensive as mine" },
            { words: ["smallest", "is", "the", "smartwatch", "this", "gadget"], correct: "This smartwatch is the smallest gadget" },
            { words: ["than", "sneakers", "are", "those", "cheaper", "these"], correct: "Those sneakers are cheaper than these" },
            { words: ["most", "the", "is", "expensive", "camera", "this"], correct: "This is the most expensive camera" },
            { words: ["stylish", "less", "is", "that", "than", "jacket", "this", "one"], correct: "That jacket is less stylish than this one" },
            { words: ["has", "laptop", "screen", "the", "biggest", "this"], correct: "This laptop has the biggest screen" },
            { words: ["comfortable", "as", "as", "are", "jeans", "these", "those"], correct: "These jeans are as comfortable as those" },
            { words: ["than", "charger", "this", "is", "useful", "more", "that", "one"], correct: "This charger is more useful than that one" },
            { words: ["the", "laptop", "best", "mall", "is", "in", "this", "the"], correct: "This is the best laptop in the mall" },
            { words: ["fewer", "has", "Albert", "than", "Celine", "games"], correct: "Albert has fewer games than Celine" },
            { words: ["than", "traditional", "more", "is", "coat", "this", "that", "one"], correct: "This coat is more traditional than that one" },
            { words: ["is", "expensive", "least", "the", "hat", "this"], correct: "This is the least expensive hat" },
            { words: ["heavier", "are", "boots", "than", "sneakers"], correct: "Boots are heavier than sneakers" },
            { words: ["as", "modern", "that", "isn't", "as", "watch", "this", "one"], correct: "That watch isn't as modern as this one" },
            { words: ["powerful", "the", "computer", "is", "most", "this"], correct: "This is the most powerful computer" },
            { words: ["colorful", "more", "is", "necklace", "that", "than", "this"], correct: "That necklace is more colorful than this" },
            { words: ["than", "those", "worse", "are", "headphones", "these"], correct: "These headphones are worse than those" },
            { words: ["the", "mall", "in", "store", "is", "biggest", "which"], correct: "Which is the biggest store in the mall" },
            { words: ["as", "that", "is", "cheap", "as", "shirt", "this"], correct: "This shirt is as cheap as that one" },
            { words: ["expensive", "more", "are", "tablets", "than", "phones"], correct: "Tablets are more expensive than phones" },
            { words: ["the", "decision", "best", "is", "this"], correct: "This is the best decision" },
            { words: ["less", "is", "that", "useful", "than", "smartwatch", "this"], correct: "That smartwatch is less useful than this" },
            { words: ["the", "in", "necklace", "shop", "prettiest", "is", "the", "this"], correct: "This is the prettiest necklace in the shop" },
            { words: ["than", "easier", "is", "this", "mouse", "to", "use", "that", "one"], correct: "This mouse is easier to use than that one" },
            { words: ["stylish", "as", "as", "jackets", "those", "aren't", "these"], correct: "These jackets aren't as stylish as those" },
            { words: ["the", "price", "best", "what", "is"], correct: "What is the best price" },
            { words: ["than", "heavier", "is", "laptop", "this", "tablet", "that"], correct: "This laptop is heavier than that tablet" },
            { words: ["most", "the", "item", "is", "comfortable", "this"], correct: "This is the most comfortable item" },
            { words: ["fewer", "Celine", "socks", "than", "has", "me"], correct: "Celine has fewer socks than me" },
            { words: ["than", "better", "is", "idea", "your", "mine"], correct: "Your idea is better than mine" },
            { words: ["as", "colorful", "this", "isn't", "as", "tie", "that", "one"], correct: "This tie isn't as colorful as that one" },
            { words: ["is", "expensive", "laptop", "most", "the", "which"], correct: "Which laptop is the most expensive" },
            { words: ["than", "stylish", "more", "is", "scarf", "this", "that", "one"], correct: "This scarf is more stylish than that one" },
            { words: ["the", "least", "item", "is", "ugly", "this"], correct: "This is the least ugly item" },
            { words: ["than", "older", "that", "is", "computer", "this", "one"], correct: "That computer is older than this one" },
            { words: ["as", "simple", "isn't", "camera", "as", "that", "this"], correct: "This camera isn't as simple as that one" },
            { words: ["the", "modern", "most", "are", "these", "sneakers"], correct: "These are the most modern sneakers" },
            { words: ["than", "fewer", "has", "options", "he", "us"], correct: "He has fewer options than us" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES ---
        2: [
            { lines: ["It’s very light and modern.", "Look at this laptop!", "True, but that one is cheaper.", "Hmm. Which one is better?"], order: [1, 0, 2, 3] },
            { lines: ["I think these are as comfortable as my old ones.", "Let me try these blue sneakers on.", "And they are much more stylish, too!", "Great! They are the best sneakers in the store."], order: [1, 0, 2, 3] },
            { lines: ["It’s $1,000. It’s the most expensive phone here.", "Wow, that’s too expensive for me!", "How much is this new smartphone?", "I have a cheaper option for only $300."], order: [2, 0, 1, 3] },
            { lines: ["Yes, but the green one is more colorful.", "What do you think about this red dress?", "I think the red one is more traditional.", "I agree. The red one is the best choice."], order: [1, 0, 2, 3] },
            { lines: ["Where is the dressing room?", "It’s right over there, next to the jackets.", "I want to try this coat on.", "Thanks. I need to see if it fits well."], order: [2, 0, 1, 3] },
            { lines: ["Is this tablet as fast as that laptop?", "No, the laptop is much faster.", "But the tablet is more useful for travel.", "That's true. It is the lightest gadget we have."], order: [0, 1, 2, 3] },
            { lines: ["Look! These headphones are 50% off.", "Are they better than the black ones?", "Yes, the sound is much more powerful.", "Awesome, let's buy them now!"], order: [0, 1, 2, 3] },
            { lines: ["I need a new jacket for winter.", "This leather one is the warmest.", "But it is heavier than the blue one.", "Quality is more important than weight. Let's take it."], order: [0, 1, 2, 3] },
            { lines: ["I have fewer games than you on my phone.", "That's because my phone has a bigger memory.", "Is your phone more expensive than mine?", "Yes, it was the most expensive model last year."], order: [0, 1, 2, 3] },
            { lines: ["What is the price of this smartwatch?", "It is cheaper than a phone, but more expensive than a watch.", "Does it have a good screen?", "Yes, it has the brightest screen in the shop."], order: [0, 1, 2, 3] },
            { lines: ["These jeans are too small for me.", "Do you want to try a bigger size?", "Yes, please. This size is very uncomfortable.", "Here is the largest size we have."], order: [0, 1, 2, 3] },
            { lines: ["This camera is better than my old one.", "The resolution is much higher, right?", "Yes, and it is also easier to use.", "It's definitely the best camera for your trip."], order: [0, 1, 2, 3] },
            { lines: ["Which hat do you prefer?", "I like the yellow one. It's the most beautiful.", "But the black one is cheaper than the yellow one.", "Price doesn't matter; I want the stylish one!"], order: [0, 1, 2, 3] },
            { lines: ["Is the mall more crowded on Saturdays?", "Yes, there are fewer people on Mondays.", "Then let's go shopping on Monday afternoon.", "Good decision. It will be more comfortable."], order: [0, 1, 2, 3] },
            { lines: ["This keyboard is very traditional.", "I prefer that modern one over there.", "But the traditional one is more reliable.", "Maybe, but the modern one is much lighter."], order: [0, 1, 2, 3] },
            { lines: ["Can I try these boots on?", "Of course. Do you wear size 38?", "No, I need a smaller option. These are too big.", "Let me check the stock for a size 37."], order: [0, 1, 2, 3] },
            { lines: ["This smartwatch is more powerful than a normal watch.", "Can it track my steps?", "Yes, and it has the most useful apps.", "I think I will buy it today."], order: [0, 1, 2, 3] },
            { lines: ["This scarf is as soft as silk.", "How much does it cost?", "It’s the cheapest scarf in the store.", "Perfect! I need a nice gift for my mom."], order: [0, 1, 2, 3] },
            { lines: ["Is that store better than this one?", "Their clothes are more stylish, but also more expensive.", "Do they have a good dressing room?", "Yes, it's the biggest one in the mall."], order: [0, 1, 2, 3] },
            { lines: ["My laptop is dying. I need a new charger.", "This one is the fastest charger we have.", "Is it compatible with my laptop?", "Yes, it is the most useful model for all devices."], order: [0, 1, 2, 3] },
            { lines: ["These sunglasses are very ugly.", "I disagree. I think they are very modern.", "But they are more expensive than the beautiful ones!", "You’re right. Let’s look at another option."], order: [0, 1, 2, 3] },
            { lines: ["This necklace is the most colorful item here.", "It would look great with your new dress.", "Is it as expensive as the gold one?", "No, it’s much cheaper because it’s made of plastic."], order: [0, 1, 2, 3] },
            { lines: ["I have fewer shirts than my brother.", "Does he like shopping more than you?", "Yes, he is the most stylish person in our family.", "I prefer gadgets over clothes."], order: [0, 1, 2, 3] },
            { lines: ["This computer mouse is very uncomfortable.", "Why don't you buy a wireless one?", "Is it better for my hand?", "Yes, it's the most ergonomic option."], order: [0, 1, 2, 3] },
            { lines: ["Which is the fastest way to pay?", "Credit card is faster than cash.", "Is there a long line at the register?", "No, this is the least busy time of day."], order: [0, 1, 2, 3] },
            { lines: ["This belt is too long for these pants.", "We can find a shorter one in that section.", "Is it as cheap as this one?", "Yes, the price is exactly the same."], order: [0, 1, 2, 3] },
            { lines: ["Look at these socks! They have memes on them.", "Those are the funniest socks I’ve ever seen!", "Are they more expensive than plain socks?", "Yes, but they are much more original."], order: [0, 1, 2, 3] },
            { lines: ["I want to buy the most powerful gaming laptop.", "This one has the best graphics card.", "Is it heavier than a normal laptop?", "Yes, it’s the heaviest model in the store."], order: [0, 1, 2, 3] },
            { lines: ["What do you think about these shorts?", "They are less formal than the pants.", "True, but they are better for the beach.", "I think they are a great choice for summer."], order: [0, 1, 2, 3] },
            { lines: ["This screen is bigger than my TV at home!", "It's the newest technology available.", "Is it more expensive than the other monitors?", "Yes, but the image quality is the best."], order: [0, 1, 2, 3] },
            { lines: ["I need a new hat for the sun.", "This one is the most traditional style.", "I prefer something more modern and colorful.", "Try this one. It's the most popular this week."], order: [0, 1, 2, 3] },
            { lines: ["I have fewer apps on my tablet than on my phone.", "Is the tablet slower because of that?", "No, it’s actually faster than the phone.", "That’s good. I hate slow devices."], order: [0, 1, 2, 3] },
            { lines: ["These sneakers are the least expensive in the mall.", "Are they good for running?", "They are not as good as the professional ones.", "But for this price, they are the best deal!"], order: [0, 1, 2, 3] },
            { lines: ["The service in this store is very bad.", "I agree. The assistants are very unhelpful.", "Let's go to the other store across the hallway.", "Good idea. Their service is much better."], order: [0, 1, 2, 3] },
            { lines: ["This sweater is more comfortable than the hoodie.", "Is it also warmer?", "Yes, it's made of the best wool.", "I'll take it. I hate being cold."], order: [0, 1, 2, 3] },
            { lines: ["Can you help me choose a gift?", "Of course. Who is it for?", "For my sister. She likes stylish gadgets.", "This rose gold smartwatch is the most stylish option."], order: [0, 1, 2, 3] },
            { lines: ["I bought a new charger yesterday.", "Was it expensive?", "No, it was cheaper than the one at the mall.", "That was a smart decision."], order: [0, 1, 2, 3] },
            { lines: ["This dress is the most beautiful in the window.", "Do you want to try it on?", "Yes, where is the dressing room?", "Follow me. It’s the most comfortable room here."], order: [0, 1, 2, 3] },
            { lines: ["This laptop is the least useful for gaming.", "Why is that?", "Because it is the slowest model we have.", "Oh, I need something more powerful then."], order: [0, 1, 2, 3] },
            { lines: ["I have fewer options for pants in this store.", "That's because they sell more jeans than pants.", "Are the jeans better quality?", "Yes, they are the best-selling item here."], order: [0, 1, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS ---
        3: [
            { q: "Is this phone more expensive than that one?", options: ["Yes, it is.", "Yes, it more expensive.", "Yes, it are.", "No, it not is."], a: "Yes, it is." },
            { q: "Are these sneakers as comfortable as those?", options: ["Yes, they are.", "Yes, they is.", "Yes, these are as comfortable than those.", "No, they aren't as comfortable than those."], a: "Yes, they are." },
            { q: "Is he the tallest boy in class?", options: ["Yes, he is.", "Yes, he the tallest.", "Yes, he is the taller.", "No, he aren't."], a: "Yes, he is." },
            { q: "Is this laptop better than the old one?", options: ["Yes, it is.", "Yes, it is more good.", "Yes, it is more better.", "No, it doesn't."], a: "Yes, it is." },
            { q: "Are there fewer people in the store today?", options: ["Yes, there are.", "Yes, there is.", "Yes, there fewer.", "No, they aren't."], a: "Yes, there are." },
            { q: "Is this the most expensive item?", options: ["Yes, it is.", "Yes, it is the more expensive.", "Yes, it is the expensivest.", "No, it not."], a: "Yes, it is." },
            { q: "Is your watch as modern as mine?", options: ["No, it isn't.", "No, it isn't as modern than yours.", "No, it is as modern as.", "Yes, it am."], a: "No, it isn't." },
            { q: "Is she the best singer?", options: ["Yes, she is.", "Yes, she is the most good.", "Yes, she are.", "No, she not is."], a: "Yes, she is." },
            { q: "Are these jeans cheaper than the shorts?", options: ["No, they aren't.", "No, they aren't more cheap.", "No, they aren't cheapest.", "Yes, they is."], a: "No, they aren't." },
            { q: "Is the screen bigger than the tablet?", options: ["Yes, it is.", "Yes, it are.", "Yes, it is more big.", "No, its not."], a: "Yes, it is." },
            { q: "Do you have fewer games than Celine?", options: ["Yes, I do.", "Yes, I have fewer than.", "Yes, I am.", "No, I doesn't."], a: "Yes, I do." },
            { q: "Is that the least useful gadget?", options: ["Yes, it is.", "Yes, it is the less useful.", "Yes, it is the least useful than.", "No, it aren't."], a: "Yes, it is." },
            { q: "Is this jacket more stylish than that one?", options: ["Yes, it is.", "Yes, it is most stylish.", "Yes, it more stylish.", "No, it not is."], a: "Yes, it is." },
            { q: "Are the boots heavier than the sneakers?", options: ["Yes, they are.", "Yes, they are more heavy.", "Yes, them are.", "No, it isn't."], a: "Yes, they are." },
            { q: "Is this the fastest computer?", options: ["Yes, it is.", "Yes, it is the most fast.", "Yes, it are the fastest.", "No, he isn't."], a: "Yes, it is." },
            { q: "Is the necklace as colorful as the scarf?", options: ["No, it isn't.", "No, it isn't as colorful than.", "Yes, it are.", "No, it don't."], a: "No, it isn't." },
            { q: "Is your sister older than you?", options: ["Yes, she is.", "Yes, she is more old.", "Yes, she am.", "No, she not is."], a: "Yes, she is." },
            { q: "Are these the most comfortable shoes?", options: ["Yes, they are.", "Yes, these is.", "Yes, they are the more comfortable.", "No, them aren't."], a: "Yes, they are." },
            { q: "Is the red dress the most beautiful?", options: ["Yes, it is.", "Yes, it is the more beautiful.", "Yes, it the beautifulest.", "No, it aren't."], a: "Yes, it is." },
            { q: "Is the blue car less fast than the red one?", options: ["Yes, it is.", "Yes, it is the least fast.", "Yes, it is fast as.", "No, it not."], a: "Yes, it is." },
            { q: "Which laptop is the best?", options: ["The one with the biggest screen.", "In the morning.", "My name is Celine.", "Yes, I can sing."], a: "The one with the biggest screen." },
            { q: "How much is this t-shirt?", options: ["It is twenty dollars.", "It is a laptop.", "I am fine, thanks.", "Because it is red."], a: "It is twenty dollars." },
            { q: "Which sneakers are the lightest?", options: ["The blue ones made of fabric.", "They are in the kitchen.", "At 8 o'clock.", "I have two brothers."], a: "The blue ones made of fabric." },
            { q: "Where is the dressing room?", options: ["It’s next to the jackets.", "It’s more expensive than a phone.", "I am fourteen.", "No, it isn't a book."], a: "It’s next to the jackets." },
            { q: "Why is this phone the best?", options: ["Because it has the fastest processor.", "Because the sun is yellow.", "Yes, it is a smartphone.", "On Saturdays."], a: "Because it has the fastest processor." },
            { q: "Which dress is more stylish?", options: ["The one in the window.", "I study math.", "It is ten years old.", "From Brazil."], a: "The one in the window." },
            { q: "Is this charger useful?", options: ["Yes, it works for all gadgets.", "No, it is a cat.", "The world is big.", "I like pizza."], a: "Yes, it works for all gadgets." },
            { q: "Who has fewer books, you or Albert?", options: ["Albert has only two books.", "The books are on the desk.", "I am a student.", "Yes, they are colorful."], a: "Albert has only two books." },
            { q: "What do you think about this hat?", options: ["I think it is very traditional.", "I think it is 5 PM.", "I think I am at school.", "I think my dog is happy."], a: "I think it is very traditional." },
            { q: "Can I try this on?", options: ["Sure, the dressing room is there.", "No, I am not a teacher.", "My birthday is in May.", "It is one hundred."], a: "Sure, the dressing room is there." },
            { q: "Which is the most expensive gadget?", options: ["The professional camera.", "The blue socks.", "My mother is an artist.", "In the hallway."], a: "The professional camera." },
            { q: "Are these jeans comfortable?", options: ["Yes, the material is very soft.", "No, they are a laptop.", "I play the guitar.", "At noon."], a: "Yes, the material is very soft." },
            { q: "Which car is slower?", options: ["The old green car.", "The one with the biggest engine.", "I run very fast.", "In the garage."], a: "The old green car." },
            { q: "Is this the cheapest store?", options: ["Yes, everything is one dollar.", "No, it is a basketball.", "I am fifteen years old.", "Nice to meet you."], a: "Yes, everything is one dollar." },
            { q: "Which necklace is the most beautiful?", options: ["The gold one with pearls.", "The one that is heavy.", "I have a headache.", "Under the sofa."], a: "The gold one with pearls." },
            { q: "Why are you buying those sneakers?", options: ["Because they are the most modern.", "Because I am a student.", "Because the sky is high.", "Because I have a pen."], a: "Because they are the most modern." },
            { q: "Which watch is better?", options: ["The one that tracks your steps.", "The one that is broken.", "I am not late.", "From Japan."], a: "The one that tracks your steps." },
            { q: "Is this screen bright enough?", options: ["Yes, it’s the brightest one here.", "No, it’s a keyboard.", "I like the mall.", "On Friday."], a: "Yes, it’s the brightest one here." },
            { q: "Who is the most stylish student?", options: ["Sarah always wears cool clothes.", "The laptop is on the table.", "I am fourteen.", "From Australia."], a: "Sarah always wears cool clothes." },
            { q: "Which option is the worst?", options: ["Buying the expensive, broken phone.", "Eating a delicious cake.", "Going to the beach.", "Winning a gold medal."], a: "Buying the expensive, broken phone." }
        ],

        // --- TYPE 4: FIND MEANING ---
        4: [
            { sent: "I need a new **charger** for my phone.", word: "charger", options: ["Carregador", "Fone de ouvido", "Tela", "Teclado"], a: "Carregador", def: "A device for charging a battery or battery-powered equipment." },
            { sent: "This **smartwatch** tracks my steps perfectly.", word: "smartwatch", options: ["Relógio de parede", "Relógio inteligente", "Celular", "Câmera"], a: "Relógio inteligente", def: "A mobile device with a touchscreen display, designed to be worn on the wrist." },
            { sent: "The **screen** of the laptop is broken.", word: "screen", options: ["Teclado", "Mouse", "Tela", "Moldura"], a: "Tela", def: "The flat panel or area on an electronic device on which images and data are displayed." },
            { sent: "These **headphones** have great sound quality.", word: "headphones", options: ["Microfones", "Alto-falantes", "Fones de ouvido", "Carregadores"], a: "Fones de ouvido", def: "A pair of earphones joined by a band placed over the head for listening to audio." },
            { sent: "I bought a stylish **jacket** for winter.", word: "jacket", options: ["Camiseta", "Calça", "Jaqueta", "Meia"], a: "Jaqueta", def: "An outer garment extending either to the waist or the hips." },
            { sent: "These **sneakers** are very comfortable for running.", word: "sneakers", options: ["Botas", "Sapatos sociais", "Tênis", "Meias"], a: "Tênis", def: "Soft shoes worn for sports or casual occasions." },
            { sent: "She wore a lovely **dress** to the mall.", word: "dress", options: ["Saia", "Vestido", "Casaco", "Camiseta"], a: "Vestido", def: "A one-piece garment for a woman or girl that covers the body and extends down over the legs." },
            { sent: "My father wears a leather **belt**.", word: "belt", options: ["Colar", "Cinto", "Gravata", "Chapéu"], a: "Cinto", def: "A strip of leather or other material worn around the waist." },
            { sent: "It is cold, so I need my **scarf**.", word: "scarf", options: ["Cachecol", "Luvas", "Chapéu", "Cinto"], a: "Cachecol", def: "A length of fabric worn around the neck or head for warmth." },
            { sent: "This phone is too **expensive** for me.", word: "expensive", options: ["Barato", "Caro", "Novo", "Velho"], a: "Caro", def: "Costing a lot of money." },
            { sent: "This is a very **cheap** t-shirt; it costs only $5.", word: "cheap", options: ["Cara", "Barata", "Bonita", "Feia"], a: "Barata", def: "Costing very little; relatively low in price." },
            { sent: "The blue laptop is very **light**.", word: "light", options: ["Pesado", "Escuro", "Leve", "Rápido"], a: "Leve", def: "Of little weight; not heavy." },
            { sent: "This bag is too **heavy** to carry.", word: "heavy", options: ["Leve", "Grande", "Pesado", "Caro"], a: "Pesado", def: "Of great weight; difficult to lift or move." },
            { sent: "That building has a very **modern** design.", word: "modern", options: ["Antigo", "Tradicional", "Moderno", "Feio"], a: "Moderno", def: "Relating to the present or recent times." },
            { sent: "She looks very **stylish** in that hat.", word: "stylish", options: ["Elegante/Estiloso", "Bagunçado", "Triste", "Pobre"], a: "Elegante/Estiloso", def: "Fashionably elegant and sophisticated." },
            { sent: "I need to find the **dressing room**.", word: "dressing room", options: ["Banheiro", "Provador", "Caixa", "Saída"], a: "Provador", def: "A room in a store where you can try on clothes." },
            { sent: "This gadget is very **useful** for my homework.", word: "useful", options: ["Inútil", "Útil", "Caro", "Lento"], a: "Útil", def: "Able to be used for a practical purpose." },
            { sent: "He made a quick **decision** to buy the watch.", word: "decision", options: ["Pergunta", "Opção", "Decisão", "Compra"], a: "Decisão", def: "A conclusion or resolution reached after consideration." },
            { sent: "There are many **options** for smartphones here.", word: "options", options: ["Preços", "Opções", "Problemas", "Cores"], a: "Opções", def: "A thing that is or may be chosen." },
            { sent: "This is the **best** deal in the mall!", word: "best", options: ["Pior", "Melhor", "Mais caro", "Mais barato"], a: "Melhor", def: "Of the most excellent or desirable type or quality." },
            { sent: "I bought a warm **sweater** for the trip.", word: "sweater", options: ["Camiseta", "Suéter", "Jaqueta", "Calça"], a: "Suéter", def: "A knitted garment for the upper part of the body." },
            { sent: "Use the **keyboard** to type your text.", word: "keyboard", options: ["Monitor", "Teclado", "Mouse", "Impressora"], a: "Teclado", def: "A panel of keys that operate a computer." },
            { sent: "These **jeans** fit me perfectly.", word: "jeans", options: ["Calças jeans", "Saias", "Vestidos", "Bermudas"], a: "Calças jeans", def: "Hard-wearing trousers made of denim." },
            { sent: "I lost my computer **mouse**.", word: "mouse", options: ["Teclado", "Tela", "Mouse", "Fone"], a: "Mouse", def: "A small handheld device used to move the cursor on a computer screen." },
            { sent: "This **necklace** is made of gold.", word: "necklace", options: ["Colar", "Anel", "Pulseira", "Brinco"], a: "Colar", def: "An ornamental chain or string worn round the neck." },
            { sent: "I want to **buy** those boots.", word: "buy", options: ["Vender", "Comprar", "Trocar", "Alugar"], a: "Comprar", def: "To obtain in exchange for payment." },
            { sent: "The store clerk wants to **sell** the camera.", word: "sell", options: ["Comprar", "Vender", "Mostrar", "Guardar"], a: "Vender", def: "To give or hand over something in exchange for money." },
            { sent: "Can I **try on** this hoodie?", word: "try on", options: ["Comprar", "Experimentar", "Pagar", "Lavar"], a: "Experimentar", def: "To put on an item of clothing to see if it fits." },
            { sent: "The **price** of the tablet is $200.", word: "price", options: ["Tamanho", "Preço", "Cor", "Peso"], a: "Preço", def: "The amount of money expected in payment for something." },
            { sent: "This **tablet** is better for reading.", word: "tablet", options: ["Computador", "Celular", "Tablet", "Televisor"], a: "Tablet", def: "A portable computer with a touchscreen display." },
            { sent: "I need new **socks** for my sneakers.", word: "socks", options: ["Meias", "Luvas", "Gravatas", "Cintos"], a: "Meias", def: "A soft covering for the foot and lower leg." },
            { sent: "He is a very **powerful** athlete.", word: "powerful", options: ["Lento", "Fraco", "Poderoso/Forte", "Pequeno"], a: "Poderoso/Forte", def: "Having great power or strength." },
            { sent: "This painting is very **colorful**.", word: "colorful", options: ["Escura", "Colorida", "Triste", "Feia"], a: "Colorida", def: "Having much or varied color; bright." },
            { sent: "My grandfather lives in a **traditional** house.", word: "traditional", options: ["Moderna", "Tradicional", "Nova", "Pequena"], a: "Tradicional", def: "Existing in or as part of a tradition." },
            { sent: "This chair is very **uncomfortable**.", word: "uncomfortable", options: ["Confortável", "Desconfortável", "Cara", "Barata"], a: "Desconfortável", def: "Causing or feeling slight pain or physical discomfort." },
            { sent: "The internet is very **slow** today.", word: "slow", options: ["Rápida", "Lenta", "Cara", "Barata"], a: "Lenta", def: "Moving or operating at a low speed." },
            { sent: "He is the **fastest** runner in school.", word: "fastest", options: ["Mais lento", "Mais rápido", "Mais forte", "Mais alto"], a: "Mais rápido", def: "Moving or capable of moving at high speed." },
            { sent: "This is an **ugly** shirt.", word: "ugly", options: ["Bonita", "Feia", "Nova", "Cara"], a: "Feia", def: "Unpleasant or repulsive in appearance." },
            { sent: "The math test was very **easy**.", word: "easy", options: ["Difícil", "Fácil", "Longo", "Chato"], a: "Fácil", def: "Achieved without great effort." },
            { sent: "Math can be very **difficult**.", word: "difficult", options: ["Fácil", "Difícil", "Rápido", "Colorido"], a: "Difícil", def: "Needing much effort or skill to accomplish." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE ---
        5: [
            { sent: "This laptop is **more fast** than that one.", correct: "faster" },
            { sent: "That dress is **beautifuler** than the skirt.", correct: "more beautiful" },
            { sent: "My phone is **gooder** than yours.", correct: "better" },
            { sent: "This is the **most cheap** shirt in the store.", correct: "cheapest" },
            { sent: "He is the **baddest** player on the team.", correct: "worst" },
            { sent: "I have **less** books than Albert.", correct: "fewer" },
            { sent: "This tablet is **as more expensive as** that laptop.", correct: "expensive" },
            { sent: "The blue jacket is **stylish than** the red one.", correct: "more stylish than" },
            { sent: "My house is **bigest** than yours.", correct: "bigger" },
            { sent: "This is the **most modernest** computer.", correct: "most modern" },
            { sent: "The sneakers are **comfortabler** than the boots.", correct: "more comfortable" },
            { sent: "Yesterday was **hoter** than today.", correct: "hotter" },
            { sent: "This is the **most good** movie ever.", correct: "best" },
            { sent: "The movie was **worser** than the book.", correct: "worse" },
            { sent: "Your idea is **interestingest** than mine.", correct: "more interesting" },
            { sent: "My bag is **heavyer** than your bag.", correct: "heavier" },
            { sent: "Gold is more expensive **that** silver.", correct: "more expensive than" },
            { sent: "This is the **happyest** day of my life.", correct: "happiest" },
            { sent: "She is **less tall as** her sister.", correct: "less tall than" },
            { sent: "This is the **less useful** gadget I have.", correct: "least useful" },
            { sent: "I bought **fewer water** than you.", correct: "less" },
            { sent: "This bed is the **comfortablest** in the world.", correct: "most comfortable" },
            { sent: "He is **as fast than** a cheetah.", correct: "as fast as" },
            { sent: "This camera is **easyer** to use.", correct: "easier" },
            { sent: "The red dress is **most stylish than** the blue one.", correct: "more stylish" },
            { sent: "That was the **difficultest** test of the year.", correct: "most difficult" },
            { sent: "This phone has the **bigest** screen.", correct: "biggest" },
            { sent: "The turtle is **slowest than** the rabbit.", correct: "slower" },
            { sent: "This is the **worstest** result.", correct: "worst" },
            { sent: "I have **less games** on my phone than you.", correct: "fewer games" },
            { sent: "That laptop is **more powerfuler** than this one.", correct: "more powerful" },
            { sent: "The necklace is **colorfuler** than the scarf.", correct: "more colorful" },
            { sent: "Is this hat **as cheap than** that one?", correct: "as cheap as" },
            { sent: "He is the **most old** person here.", correct: "oldest" },
            { sent: "This is the **least uglyest** item.", correct: "least ugly" },
            { sent: "My watch is **more modern as** yours.", correct: "more modern than" },
            { sent: "He is **better as** me at math.", correct: "better than" },
            { sent: "This charger is **usefulest** than that one.", correct: "more useful" },
            { sent: "The weather today is **badder** than yesterday.", correct: "worse" },
            { sent: "This is the **most beautifulest** dress.", correct: "most beautiful" }
        ],


        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Type 6.1: Question to Answer (Groups 1-10)
            { pairs: [{a:"Which laptop is faster than the blue one?",b:"The silver one is much faster."}, {a:"How much is the most expensive smartwatch?",b:"It is exactly nine hundred dollars."}, {a:"Is this red dress as stylish as the green one?",b:"No, I think the green one is more stylish."}, {a:"Where is the most comfortable dressing room?",b:"It is at the back of the store, near the coats."}, {a:"Do you think this camera is better than mine?",b:"Yes, it has a much bigger screen."}] },
            { pairs: [{a:"Is that charger less useful than this one?",b:"No, they are both equally useful."}, {a:"Which store has the best deals in the mall?",b:"The electronics store near the entrance."}, {a:"Are these sneakers more comfortable than the boots?",b:"Yes, the material is much softer."}, {a:"What do you think about this colorful necklace?",b:"I think it is too traditional for me."}, {a:"Why is this phone cheaper than that one?",b:"Because it is an older model."}] },
            { pairs: [{a:"Can I try on this heavy leather jacket?",b:"Of course, the dressing room is open."}, {a:"Which of these two tablets is the lightest?",b:"The smaller one is definitely the lightest."}, {a:"Is the service in this shop as good as the other one?",b:"No, the service here is much worse."}, {a:"What is the most expensive item in your bag?",b:"It is my new digital camera."}, {a:"Do you have fewer options for jeans today?",b:"Yes, we have very few sizes left."}] },
            { pairs: [{a:"Is this keyboard more modern than the traditional one?",b:"Yes, it is wireless and very thin."}, {a:"How much are these stylish sunglasses?",b:"They are fifty dollars on sale."}, {a:"Which is the best smartphone for taking photos?",b:"The one with the most powerful lens."}, {a:"Is your old computer slower than this new laptop?",b:"Yes, my old one is the slowest."}, {a:"Why are there fewer people in the mall today?",b:"Because it is Monday morning."}] },
            { pairs: [{a:"Is this gold belt more expensive than the silver one?",b:"Yes, it costs twice as much."}, {a:"Which dress is the least beautiful in the window?",b:"I think the gray one is the least beautiful."}, {a:"Are these the most comfortable socks you have?",b:"Yes, they are made of very soft wool."}, {a:"What do you think about the price of this hat?",b:"I think it's too expensive for a simple hat."}, {a:"Is that laptop better for my homework?",b:"Yes, it is the most useful for students."}] },
            { pairs: [{a:"Which gadget is the most powerful in the store?",b:"The gaming desktop is the most powerful."}, {a:"Is the blue scarf as long as the yellow one?",b:"No, the yellow one is much longer."}, {a:"Where can I find the cheapest sneakers?",b:"Check the sports section on the second floor."}, {a:"Do you need a more useful charger for your trip?",b:"Yes, I need one that works with all my devices."}, {a:"Is this the most stylish coat in the mall?",b:"Celine says it is the best model this year."}] },
            { pairs: [{a:"Which mouse is easier to use for gaming?",b:"The ergonomic mouse is the best option."}, {a:"Is this necklace more colorful than that tie?",b:"Yes, it has all the colors of the rainbow."}, {a:"Are there fewer games on this tablet than on the phone?",b:"Yes, because the memory is smaller."}, {a:"What is the most difficult decision you made today?",b:"Choosing between the laptop and the tablet."}, {a:"Is this the largest screen available?",b:"No, we have a bigger one in the back."}] },
            { pairs: [{a:"Is the traditional house older than the modern one?",b:"Yes, it was built fifty years ago."}, {a:"Which of these headphones has the best sound?",b:"The over-ear headphones are the best."}, {a:"How much is the least expensive item here?",b:"The plastic keychains are only one dollar."}, {a:"Are these boots heavier than my old shoes?",b:"Yes, they are much heavier and stronger."}, {a:"Do you think this smartwatch is useful for athletes?",b:"Yes, it is the best for counting steps."}] },
            { pairs: [{a:"Which jeans fit better, the blue or the black ones?",b:"The blue ones are more comfortable."}, {a:"Is this the most modern camera in the shop?",b:"Yes, it was released only last week."}, {a:"Why is the internet slower on this phone?",b:"Because the processor is less powerful."}, {a:"Are those sneakers as cheap as these?",b:"No, those are much more expensive."}, {a:"What is the best way to pay for these clothes?",b:"Paying by credit card is the fastest way."}] },
            { pairs: [{a:"Which sweater is the warmest for winter?",b:"The thick wool sweater is the best."}, {a:"Is this belt as stylish as your leather one?",b:"No, your leather belt is much better."}, {a:"Do we have more options for shirts in that store?",b:"Yes, they have a larger collection."}, {a:"Is the price of the tablet lower than the laptop?",b:"Yes, it is the cheapest option for a computer."}, {a:"Who is the most stylish person in your family?",b:"My sister always wears the latest clothes."}] },

            // Type 6.2: 1st half to 2nd half of a sentence (Groups 11-20)
            { pairs: [{a:"This new laptop is much faster...",b:"...than my old desktop computer."}, {a:"That red dress is the most...",b:"...stylish item in the whole mall."}, {a:"My old smartphone is less...",b:"...useful than the new model."}, {a:"These sneakers are as comfortable...",b:"...as the ones I bought last year."}, {a:"The silver watch is better...",b:"...than the gold one for everyday use."}] },
            { pairs: [{a:"Albert has fewer games on...",b:"...his tablet than Celine has on hers."}, {a:"This camera is more expensive...",b:"...than a professional video camera."}, {a:"The smallest gadget in the store...",b:"...is the new digital smartwatch."}, {a:"That jacket is not as...",b:"...modern as the one in the window."}, {a:"We should buy the cheapest...",b:"...option if we want to save money."}] },
            { pairs: [{a:"The most powerful computer is...",b:"...the one used by professional gamers."}, {a:"This dressing room is larger...",b:"...than the one in the clothing shop."}, {a:"That colorful necklace is more...",b:"...beautiful than the simple one."}, {a:"My brother is the most...",b:"...stylish person I know at school."}, {a:"Those heavy boots are...",b:"...less comfortable than my sneakers."}] },
            { pairs: [{a:"Is this phone as modern...",b:"...as the one Celine bought today?"}, {a:"The screen of the laptop is...",b:"...bigger than the screen of the tablet."}, {a:"She wants to try on the...",b:"...most expensive dress in the store."}, {a:"I think this is the best...",b:"...decision for our school project."}, {a:"Traditional houses are usually...",b:"...older than modern buildings."}] },
            { pairs: [{a:"A smartwatch is more useful...",b:"...than a traditional watch for athletes."}, {a:"These blue jeans are cheaper...",b:"...than the black pants over there."}, {a:"The least expensive hat is...",b:"...the one made of simple fabric."}, {a:"My laptop is lighter than...",b:"...the heavy one I had before."}, {a:"That store has the worst...",b:"...service in the entire shopping mall."}] },
            { pairs: [{a:"If the price is lower...",b:"...then this deal is better for us."}, {a:"Although the camera is small...",b:"...it is more powerful than the big one."}, {a:"Because the mall is crowded...",b:"...there are fewer available dressing rooms."}, {a:"When I buy a new phone...",b:"...I always choose the fastest model."}, {a:"Since these shoes are heavy...",b:"...they are less useful for running fast."}] },
            { pairs: [{a:"This keyboard is as traditional...",b:"...as the one in the old office."}, {a:"He has fewer friends in...",b:"...this store than in the other one."}, {a:"The most beautiful necklace is...",b:"...the gold one with the small pearls."}, {a:"Your charger is more modern...",b:"...than the one I use for my tablet."}, {a:"My sister's belt is...",b:"...more stylish than my leather belt."}] },
            { pairs: [{a:"Which of these gadgets is...",b:"...the most useful for your homework?"}, {a:"The weather today is worse...",b:"...than it was on Sunday afternoon."}, {a:"This is the happiest day...",b:"...because I bought my new laptop."}, {a:"That scarf is more colorful...",b:"...than the one my mother wears."}, {a:"These jeans fit me...",b:"...better than the shorts I tried on."}] },
            { pairs: [{a:"I think this t-shirt is...",b:"...the least ugly option we have."}, {a:"The sound of these headphones...",b:"...is better than the old ones."}, {a:"That computer mouse is...",b:"...easier to use than a touchpad."}, {a:"We need a more powerful...",b:"...engine for the new racing car."}, {a:"The most difficult test...",b:"...was the one we had in January."}] },
            { pairs: [{a:"As much as I like...",b:"...this phone, it is too expensive."}, {a:"The best way to pay...",b:"...is using your new credit card."}, {a:"This smartwatch counts...",b:"...fewer steps than my old watch."}, {a:"That laptop has the...",b:"...brightest screen in the display."}, {a:"These sneakers are...",b:"...the most modern shoes in the shop."}] },

            // Type 6.3: English to Portuguese translation (Groups 21-30)
            { pairs: [{a:"This laptop is faster.",b:"Este notebook é mais rápido."}, {a:"That one is cheaper.",b:"Aquele ali é mais barato."}, {a:"Which one is better?",b:"Qual deles é melhor?"}, {a:"It has the biggest screen.",b:"Ele tem a maior tela."}, {a:"I need a new jacket.",b:"Eu preciso de uma jaqueta nova."}] },
            { pairs: [{a:"Most stylish jackets.",b:"As jaquetas mais estilosas."}, {a:"It's too expensive.",b:"É caro demais."}, {a:"Where is the dressing room?",b:"Onde fica o provador?"}, {a:"Can I try this on?",b:"Posso experimentar isto?"}, {a:"This is the best gift.",b:"Este é o melhor presente."}] },
            { pairs: [{a:"Smartphone and tablet.",b:"Celular e tablet."}, {a:"Headphones and charger.",b:"Fones de ouvido e carregador."}, {a:"Keyboard and mouse.",b:"Teclado e mouse."}, {a:"Smartwatch and camera.",b:"Relógio inteligente e câmera."}, {a:"Screen and gadgets.",b:"Tela e aparelhos/dispositivos."}] },
            { pairs: [{a:"T-shirt and jeans.",b:"Camiseta e calça jeans."}, {a:"Dress and skirt.",b:"Vestido e saia."}, {a:"Coat and sweater.",b:"Casaco e suéter."}, {a:"Sneakers and socks.",b:"Tênis e meias."}, {a:"Hat and belt.",b:"Chapéu e cinto."}] },
            { pairs: [{a:"Scarf and gloves.",b:"Cachecol e luvas."}, {a:"Sunglasses and watch.",b:"Óculos de sol e relógio."}, {a:"Necklace and jewelry.",b:"Colar e joias."}, {a:"Boots and shoes.",b:"Botas e sapatos."}, {a:"Pants and shorts.",b:"Calças e shorts."}] },
            { pairs: [{a:"Cheap and expensive.",b:"Barato e caro."}, {a:"New and old.",b:"Novo e velho."}, {a:"Big and small.",b:"Grande e pequeno."}, {a:"Fast and slow.",b:"Rápido e lento."}, {a:"Beautiful and ugly.",b:"Bonito e feio."}] },
            { pairs: [{a:"Comfortable and uncomfortable.",b:"Confortável e desconfortável."}, {a:"Light and heavy.",b:"Leve e pesado."}, {a:"Easy and difficult.",b:"Fácil e difícil."}, {a:"Modern and traditional.",b:"Moderno e tradicional."}, {a:"Useful and powerful.",b:"Útil e poderoso/potente."}] },
            { pairs: [{a:"To buy and to sell.",b:"Comprar e vender."}, {a:"To choose and to pay.",b:"Escolher e pagar."}, {a:"Price and option.",b:"Preço e opção."}, {a:"Decision and deal.",b:"Decisão e acordo/negócio."}, {a:"Stylish and colorful.",b:"Estiloso e colorido."}] },
            { pairs: [{a:"Better than.",b:"Melhor que."}, {a:"Worse than.",b:"Pior que."}, {a:"As fast as.",b:"Tão rápido quanto."}, {a:"The most modern.",b:"O mais moderno."}, {a:"The least useful.",b:"O menos útil."}] },
            { pairs: [{a:"I have fewer books.",b:"Eu tenho menos livros (contáveis)."}, {a:"It's more modern.",b:"É mais moderno."}, {a:"The brightest screen.",b:"A tela mais brilhante."}, {a:"Stylish sneakers.",b:"Tênis estilosos."}, {a:"Heavy boots.",b:"Botas pesadas."}] },

            // Type 6.4: Word to Simple Definition in Portuguese (Groups 31-40)
            { pairs: [{a:"Laptop",b:"Um computador portátil que você pode carregar."}, {a:"Smartwatch",b:"Um relógio com tela que se conecta à internet."}, {a:"Headphones",b:"Aparelho para ouvir música sem incomodar os outros."}, {a:"Charger",b:"Cabo usado para dar energia à bateria do celular."}, {a:"Keyboard",b:"Parte do computador com letras para digitar."}] },
            { pairs: [{a:"Sneakers",b:"Sapatos macios usados para esportes."}, {a:"Dress",b:"Roupa feminina de peça única."}, {a:"Jacket",b:"Roupa usada por cima para proteger do frio."}, {a:"Jeans",b:"Calças feitas de um tecido azul resistente (denim)."}, {a:"Scarf",b:"Tecido longo usado ao redor do pescoço."}] },
            { pairs: [{a:"Faster",b:"Que tem mais velocidade que outro."}, {a:"Cheaper",b:"Que tem o preço menor que outro."}, {a:"Better",b:"Que tem qualidade superior a outro."}, {a:"More stylish",b:"Que é mais elegante que outro."}, {a:"Less expensive",b:"O mesmo que mais barato (menos caro)."}] },
            { pairs: [{a:"The best",b:"O número um em qualidade."}, {a:"The cheapest",b:"O que custa menos dinheiro de todos."}, {a:"The most modern",b:"O que tem a tecnologia mais nova."}, {a:"The heaviest",b:"O que tem o maior peso de todos."}, {a:"The fastest",b:"O que tem a maior velocidade."}] },
            { pairs: [{a:"Expensive",b:"O oposto de barato."}, {a:"Heavy",b:"O oposto de leve."}, {a:"Ugly",b:"O oposto de bonito."}, {a:"Uncomfortable",b:"O oposto de confortável."}, {a:"Slow",b:"O oposto de rápido."}] },
            { pairs: [{a:"Buy",b:"Dar dinheiro para levar um produto."}, {a:"Sell",b:"Entregar um produto e receber dinheiro."}, {a:"Pay",b:"O ato final de dar o dinheiro no caixa."}, {a:"Try on",b:"Vestir a roupa no provador para ver se serve."}, {a:"Choose",b:"Olhar as opções e pegar a preferida."}] },
            { pairs: [{a:"Dressing room",b:"Lugar pequeno na loja para trocar de roupa."}, {a:"Price tag",b:"Etiqueta que diz quanto o produto custa."}, {a:"Mall",b:"Centro comercial com muitas lojas."}, {a:"Deal",b:"Um bom preço ou oportunidade de compra."}, {a:"Option",b:"Uma das escolhas disponíveis."}] },
            { pairs: [{a:"Fewer",b:"Uma quantidade menor de itens contáveis."}, {a:"As... as",b:"Usado para dizer que dois itens são iguais."}, {a:"More... than",b:"Usado para dizer que um item é superior."}, {a:"The most...",b:"O nível máximo de uma qualidade."}, {a:"The least...",b:"O nível mínimo de uma qualidade."}] },
            { pairs: [{a:"Sunglasses",b:"Proteção para os olhos contra o sol."}, {a:"Necklace",b:"Joia ou acessório usado no pescoço."}, {a:"Belt",b:"Acessório para segurar as calças na cintura."}, {a:"Gloves",b:"Proteção para as mãos contra o frio."}, {a:"Hat",b:"Acessório usado na cabeça."}] },
            { pairs: [{a:"Screen",b:"A parte do aparelho onde vemos as imagens."}, {a:"Mouse",b:"Objeto para mover a seta no computador."}, {a:"Cable",b:"O fio que conecta os aparelhos."}, {a:"Resolution",b:"A qualidade da imagem em uma tela ou câmera."}, {a:"Battery",b:"O que guarda a energia do dispositivo."}] }
        ],

        // --- TYPE 7: BEST ANSWER ---
        7: [
            { q: "Which laptop is the fastest in the store?", options: ["The one with the newest processor.", "I am fourteen years old.", "In the hallway.", "Yes, I can sing."], a: "The one with the newest processor." },
            { q: "How much is this stylish red dress?", options: ["It costs eighty dollars.", "It is in the dressing room.", "My name is Celine.", "I prefer the blue one."], a: "It costs eighty dollars." },
            { q: "Where can I find the cheapest sneakers?", options: ["In the sports section on the second floor.", "They are more comfortable than boots.", "Tomorrow morning at 8:00.", "Because they are on sale."], a: "In the sports section on the second floor." },
            { q: "Who is the most stylish person in your class?", options: ["Sarah always wears the best clothes.", "The laptop is very light.", "From Brazil.", "It is a colorful necklace."], a: "Sarah always wears the best clothes." },
            { q: "Why is this phone better than that one?", options: ["Because it has the biggest screen and a better camera.", "It is fifty dollars.", "In the mall.", "No, it isn't."], a: "Because it has the biggest screen and a better camera." },
            { q: "Which gadget is the most useful for your homework?", options: ["My new laptop is the most useful.", "I study in the afternoon.", "It is very expensive.", "At school."], a: "My new laptop is the most useful." },
            { q: "How much are those leather boots?", options: ["They are one hundred dollars.", "They are heavier than my sneakers.", "Yes, they are.", "I wear them in winter."], a: "They are one hundred dollars." },
            { q: "Where is the most comfortable sofa in the mall?", options: ["It is in the furniture store near the cinema.", "It is more comfortable than the chair.", "I am sitting now.", "Because it is soft."], a: "It is in the furniture store near the cinema." },
            { q: "Who has the most expensive smartwatch?", options: ["Albert bought the gold one yesterday.", "It tracks my steps.", "In the electronics shop.", "It is more modern than a watch."], a: "Albert bought the gold one yesterday." },
            { q: "Why are these jeans more expensive than those?", options: ["Because they are made of a more traditional material.", "They fit me well.", "At the mall.", "Twenty dollars."], a: "Because they are made of a more traditional material." },
            { q: "Which store has the worst service?", options: ["The small clothing shop near the exit.", "I am a student.", "It is ten o'clock.", "Yes, I do."], a: "The small clothing shop near the exit." },
            { q: "How much is the fastest charger?", options: ["It is fifteen dollars.", "It is faster than the old one.", "On the desk.", "To charge my phone."], a: "It is fifteen dollars." },
            { q: "Where is the dressing room?", options: ["It is next to the jackets and coats.", "It is very small.", "I want to try this on.", "No, it isn't."], a: "It is next to the jackets and coats." },
            { q: "Who is the best gamer in your family?", options: ["My brother is the fastest and the best.", "We have a powerful computer.", "In the bedroom.", "On Saturdays."], a: "My brother is the fastest and the best." },
            { q: "Why are there fewer people here today?", options: ["Because the store is closing early.", "I see ten people.", "At 9:00 PM.", "Yes, there are."], a: "Because the store is closing early." },
            { q: "Which necklace is more colorful?", options: ["The one with the rainbow beads.", "It is a gift for my mom.", "It is twenty dollars.", "From Italy."], a: "The one with the rainbow beads." },
            { q: "How much weight is in that heavy bag?", options: ["It has ten kilograms of books.", "It is heavier than mine.", "Under the table.", "Because I am traveling."], a: "It has ten kilograms of books." },
            { q: "Where did you buy that modern smartwatch?", options: ["I bought it at the new electronics store.", "It is more useful than my phone.", "Yesterday afternoon.", "For two hundred dollars."], a: "I bought it at the new electronics store." },
            { q: "Who made the best decision?", options: ["Celine did; she bought the cheapest and best laptop.", "It was a very difficult decision.", "No, I didn't.", "At the mall."], a: "Celine did; she bought the cheapest and best laptop." },
            { q: "Why is this keyboard less comfortable?", options: ["Because the keys are too small and hard.", "I am typing now.", "It is a modern keyboard.", "Fifty dollars."], a: "Because the keys are too small and hard." },
            { q: "Which hat is the most traditional?", options: ["The one made of brown leather.", "I wear it on my head.", "In the winter.", "It is ten dollars."], a: "The one made of brown leather." },
            { q: "How much are these colorful socks?", options: ["They are five dollars a pair.", "They are the most beautiful socks.", "On my feet.", "Because they are new."], a: "They are five dollars a pair." },
            { q: "Where can I find a more powerful camera?", options: ["In the professional photography shop.", "It takes great photos.", "I am an artist.", "No, I can't."], a: "In the professional photography shop." },
            { q: "Who is the tallest student?", options: ["Leo is the tallest person in the room.", "He is fifteen years old.", "From England.", "Yes, he is."], a: "Leo is the tallest person in the room." },
            { q: "Why are those sneakers the best deal?", options: ["Because they are the cheapest and have the best quality.", "I am running fast.", "In the box.", "On Mondays."], a: "Because they are the cheapest and have the best quality." },
            { q: "Which option is the least expensive?", options: ["The small tablet is the cheapest option.", "I like the big screen.", "My dad is a manager.", "In the morning."], a: "The small tablet is the cheapest option." },
            { q: "How much is the difference in price?", options: ["The new one is ten dollars more expensive.", "It is a very big difference.", "In my wallet.", "No, thank you."], a: "The new one is ten dollars more expensive." },
            { q: "Where is the most stylish jacket?", options: ["It is in the window of the boutique.", "It is more stylish than the coat.", "I am wearing it now.", "Because I like fashion."], a: "It is in the window of the boutique." },
            { q: "Who has fewer followers than Sarah?", options: ["Albert has fewer followers because he posts less.", "Sarah is a famous influencer.", "On Instagram.", "Yes, she does."], a: "Albert has fewer followers because he posts less." },
            { q: "Why is the screen so bright?", options: ["Because it is the most modern OLED model.", "I am looking at the screen.", "In the bedroom.", "One hundred percent."], a: "Because it is the most modern OLED model." },
            { q: "Which scarf is the warmest?", options: ["The heavy one made of wool.", "It is yellow and blue.", "Around my neck.", "Ten dollars."], a: "The heavy one made of wool." },
            { q: "How much does the heaviest box weigh?", options: ["It weighs twenty kilograms.", "It is heavier than the other one.", "In the garage.", "Because it is full of books."], a: "It weighs twenty kilograms." },
            { q: "Where is the mall located?", options: ["It is in the center of the city.", "It is the biggest mall.", "I go there on Saturdays.", "With my friends."], a: "It is in the center of the city." },
            { q: "Who can help me choose the best gift?", options: ["The store assistant is very helpful.", "It is a beautiful necklace.", "For my sister's birthday.", "Yes, please."], a: "The store assistant is very helpful." },
            { q: "Why is the laptop better than the tablet?", options: ["Because the keyboard makes it easier to type.", "It is on the table.", "In the afternoon.", "Two hundred dollars."], a: "Because the keyboard makes it easier to type." },
            { q: "Which jeans are the most comfortable?", options: ["The loose blue ones are the most comfortable.", "They are more expensive than the black ones.", "In the closet.", "Yes, they are."], a: "The loose blue ones are the most comfortable." },
            { q: "How much time do you spend shopping?", options: ["I usually spend two hours at the mall.", "I like shopping for gadgets.", "With my best friend.", "Because I need clothes."], a: "I usually spend two hours at the mall." },
            { q: "Where is the most traditional restaurant?", options: ["It is in the old part of the mall.", "It serves the best food.", "I am hungry.", "On the menu."], a: "It is in the old part of the mall." },
            { q: "Who bought the most colorful shirt?", options: ["Mike chose the one with the most colors.", "It is more colorful than mine.", "In the shop.", "Yes, he did."], a: "Mike chose the one with the most colors." },
            { q: "Why is that computer the slowest?", options: ["Because it is the oldest model in the store.", "It is a desktop computer.", "Under the desk.", "No, it isn't."], a: "Because it is the oldest model in the store." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY ---
        8: [
            { sent: "I wear my **laptop** on my feet to run fast.", wrong: "laptop", options: ["Sneakers", "Headphones", "Belt", "Scarf"], a: "Sneakers" },
            { sent: "The **smartwatch** has a 15-inch screen and a physical keyboard.", wrong: "smartwatch", options: ["Laptop", "Necklace", "Hat", "Dress"], a: "Laptop" },
            { sent: "Use the **socks** to listen to music privately.", wrong: "socks", options: ["Headphones", "Jeans", "Charger", "Belt"], a: "Headphones" },
            { sent: "I put a leather **camera** around my waist to hold my pants.", wrong: "camera", options: ["Belt", "Necklace", "Scarf", "Screen"], a: "Belt" },
            { sent: "This **t-shirt** is for women; it is a one-piece that covers the legs.", wrong: "t-shirt", options: ["Dress", "Jacket", "Hat", "Mouse"], a: "Dress" },
            { sent: "My phone is dying. I need a **keyboard** to give it energy.", wrong: "keyboard", options: ["Charger", "Tablet", "Sneakers", "Necklace"], a: "Charger" },
            { sent: "It is very cold, so I am wearing a **shorts** and a swimsuit.", wrong: "shorts", options: ["Coat/Jacket", "Camera", "Mouse", "Screen"], a: "Coat/Jacket" },
            { sent: "I use the computer **necklace** to move the cursor on the screen.", wrong: "necklace", options: ["Mouse", "Charger", "Hat", "Jeans"], a: "Mouse" },
            { sent: "Sarah is wearing a beautiful gold **smartwatch** around her neck.", wrong: "smartwatch", options: ["Necklace", "Belt", "Boot", "T-shirt"], a: "Necklace" },
            { sent: "The **dressing room** of the phone is very bright and has high resolution.", wrong: "dressing room", options: ["Screen", "Scarf", "Jacket", "Option"], a: "Screen" },
            { sent: "I am wearing **sunglasses** on my feet because they are heavy.", wrong: "sunglasses", options: ["Boots", "Gloves", "Hats", "Keyboards"], a: "Boots" },
            { sent: "This store **buys** very expensive clothes to the customers.", wrong: "buys", options: ["Sells", "Tries on", "Chooses", "Colors"], a: "Sells" },
            { sent: "I am going to the **keyboard** to try on these jeans.", wrong: "keyboard", options: ["Dressing room", "Laptop", "Mouse", "Belt"], a: "Dressing room" },
            { sent: "The **price** of this movie is very funny; I am laughing a lot.", wrong: "price", options: ["Story/Script", "Charger", "Jacket", "Screen"], a: "Story/Script" },
            { sent: "My father wears a **skirt** with his suit to go to work.", wrong: "skirt", options: ["Tie/Belt", "Necklace", "Dress", "Smartwatch"], a: "Tie/Belt" },
            { sent: "I use the **charger** to type my name on the laptop.", wrong: "charger", options: ["Keyboard", "Mouse", "Belt", "Scarf"], a: "Keyboard" },
            { sent: "These **headphones** are too tight on my waist.", wrong: "headphones", options: ["Jeans/Pants", "Tablets", "Cameras", "Chargers"], a: "Jeans/Pants" },
            { sent: "This **tablet** is very stylish; it has two sleeves and a zipper.", wrong: "tablet", options: ["Jacket/Coat", "Smartwatch", "Necklace", "Mouse"], a: "Jacket/Coat" },
            { sent: "I need to **pay** these shoes to see if they fit my size.", wrong: "pay", options: ["Try on", "Sell", "Download", "Break"], a: "Try on" },
            { sent: "The **hat** of the car is very powerful; it goes very fast.", wrong: "hat", options: ["Engine", "Scarf", "Necklace", "Dress"], a: "Engine" },
            { sent: "I bought a **camera** to keep my neck warm in winter.", wrong: "camera", options: ["Scarf", "Tablet", "Mouse", "Keyboard"], a: "Scarf" },
            { sent: "This **sneaker** is made of gold and hangs from my ear.", wrong: "sneaker", options: ["Earring/Jewelry", "Laptop", "Belt", "Jacket"], a: "Earring/Jewelry" },
            { sent: "I use my **shorts** to protect my eyes from the sun.", wrong: "shorts", options: ["Sunglasses", "Socks", "Boots", "Chargers"], a: "Sunglasses" },
            { sent: "The **laptop** is ringing; someone is calling me.", wrong: "laptop", options: ["Phone", "Dress", "Necklace", "Belt"], a: "Phone" },
            { sent: "I am wearing **gloves** on my head to protect me from the rain.", wrong: "gloves", options: ["A hat", "Socks", "Jeans", "A mouse"], a: "A hat" },
            { sent: "This **necklace** has many apps and a touchscreen.", wrong: "necklace", options: ["Smartwatch/Tablet", "Scarf", "Belt", "Jacket"], a: "Smartwatch/Tablet" },
            { sent: "I need to **sell** for the clothes at the cash register.", wrong: "sell", options: ["Pay", "Try on", "Choose", "Wear"], a: "Pay" },
            { sent: "The **charger** of the jacket is broken, so I can't close it.", wrong: "charger", options: ["Zipper/Button", "Screen", "Mouse", "Keyboard"], a: "Zipper/Button" },
            { sent: "I have **fewer water** in my bottle than you.", wrong: "fewer water", options: ["Less", "More", "The most", "Better"], a: "Less" },
            { sent: "This **mouse** is very warm; it is made of wool and has a hood.", wrong: "mouse", options: ["Sweater/Hoodie", "Laptop", "Camera", "Necklace"], a: "Sweater/Hoodie" },
            { sent: "I use the **screen** to take photos of my friends.", wrong: "screen", options: ["Camera", "Belt", "Scarf", "Sock"], a: "Camera" },
            { sent: "These **jeans** are for my hands because it is snowing.", wrong: "jeans", options: ["Gloves", "Sneakers", "Laptops", "Tablets"], a: "Gloves" },
            { sent: "The **price tag** told me that I made a good decision.", wrong: "price tag", options: ["Friend/Assistant", "Charger", "Mouse", "Keyboard"], a: "Friend/Assistant" },
            { sent: "I wear a **smartwatch** on my feet to play soccer.", wrong: "smartwatch", options: ["Sneakers/Cleats", "Headphones", "Necklace", "Screen"], a: "Sneakers/Cleats" },
            { sent: "This **socks** is too expensive; I only have five dollars.", wrong: "socks", options: ["Shirt/Jacket", "Tablet", "Mouse", "Charger"], a: "Shirt/Jacket" },
            { sent: "I am **uploading** these sneakers in the dressing room.", wrong: "uploading", options: ["Trying on", "Buying", "Selling", "Charging"], a: "Trying on" },
            { sent: "The **necklace** of the computer is where I see the images.", wrong: "necklace", options: ["Screen/Monitor", "Belt", "Scarf", "Hat"], a: "Screen/Monitor" },
            { sent: "I use **headphones** on my legs when I go to the beach.", wrong: "headphones", options: ["Shorts", "Laptops", "Cameras", "Mice"], a: "Shorts" },
            { sent: "This **charger** is very stylish; it is a long blue skirt.", wrong: "charger", options: ["Skirt", "Tablet", "Mouse", "Keyboard"], a: "Skirt" },
            { sent: "I bought a **mouse** to protect my neck from the sun.", wrong: "mouse", options: ["Scarf/Hat", "Laptop", "Camera", "Belt"], a: "Scarf/Hat" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 items) ---
        9: [
            { audio: "Which laptop is the best?", options: ["The one with the biggest screen.", "In the morning.", "Yes, I can sing."], a: "The one with the biggest screen." },
            { audio: "How much is this smartwatch?", options: ["It is two hundred dollars.", "It is more modern.", "My name is Albert."], a: "It is two hundred dollars." },
            { audio: "Is this dress as stylish as the blue one?", options: ["No, the blue one is more stylish.", "It is ten o'clock.", "From Brazil."], a: "No, the blue one is more stylish." },
            { audio: "Where is the dressing room?", options: ["It is next to the jackets.", "It is the most expensive.", "No, thank you."], a: "It is next to the jackets." },
            { audio: "Why are these sneakers cheaper?", options: ["Because they are an older model.", "I am running fast.", "On Saturdays."], a: "Because they are an older model." },
            { audio: "Who has the fastest computer?", options: ["Mike has the fastest one.", "The computer is on the desk.", "Yes, it is."], a: "Mike has the fastest one." },
            { audio: "Which store has the best deals?", options: ["The electronics store near the exit.", "I am a student.", "Tomorrow."], a: "The electronics store near the exit." },
            { audio: "How much are these jeans?", options: ["They are forty-five dollars.", "They fit me well.", "With a belt."], a: "They are forty-five dollars." },
            { audio: "Is that laptop heavier than this one?", options: ["Yes, it weighs three kilograms.", "It is faster than mine.", "No, I don't."], a: "Yes, it weighs three kilograms." },
            { audio: "Where can I find a modern camera?", options: ["At the photography shop on floor 1.", "It takes beautiful photos.", "At 5 o'clock."], a: "At the photography shop on floor 1." },
            { audio: "What is the most expensive item here?", options: ["The professional gaming laptop.", "It is very stylish.", "In the hallway."], a: "The professional gaming laptop." },
            { audio: "Are these boots more comfortable than sneakers?", options: ["No, sneakers are the most comfortable.", "They are more expensive.", "Yes, I am."], a: "No, sneakers are the most comfortable." },
            { audio: "Why did you choose the blue shirt?", options: ["Because it was the cheapest option.", "I am wearing it now.", "No, it isn't."], a: "Because it was the cheapest option." },
            { audio: "Which tablet is the lightest?", options: ["The one made of thin plastic.", "It has a big screen.", "Fifty dollars."], a: "The one made of thin plastic." },
            { audio: "How much is the fastest charger?", options: ["It is twenty dollars.", "It is faster than the white one.", "To charge my phone."], a: "It is twenty dollars." },
            { audio: "Who is the most stylish person you know?", options: ["My sister Celine is very stylish.", "She is fifteen years old.", "Yes, she is."], a: "My sister Celine is very stylish." },
            { audio: "Where did you see that colorful necklace?", options: ["In the store window.", "It is more beautiful.", "For my mother."], a: "In the store window." },
            { audio: "Is this the best price available?", options: ["Yes, it's the cheapest in the mall.", "It is a very high price.", "In January."], a: "Yes, it's the cheapest in the mall." },
            { audio: "Why are those headphones better?", options: ["Because the sound is more powerful.", "They are blue and black.", "I am listening to music."], a: "Because the sound is more powerful." },
            { audio: "Which jacket is the warmest?", options: ["The heavy leather one.", "It is very stylish.", "For the winter."], a: "The heavy leather one." },
            { audio: "How much are the most traditional hats?", options: ["They are thirty dollars each.", "They are older than modern hats.", "Because they are classic."], a: "They are thirty dollars each." },
            { audio: "Where is the largest electronics store?", options: ["It is on the top floor.", "It is more modern.", "Open until 10 PM."], a: "It is on the top floor." },
            { audio: "Who has fewer games than you?", options: ["Albert has only two games.", "I play every Saturday.", "No, he doesn't."], a: "Albert has only two games." },
            { audio: "What is the most useful gadget you own?", options: ["My smartphone is the most useful.", "It is very small.", "From Japan."], a: "My smartphone is the most useful." },
            { audio: "Is the silver watch as modern as the gold one?", options: ["Yes, they use the same technology.", "It is cheaper than the gold one.", "No, it isn't a book."], a: "Yes, they use the same technology." },
            { audio: "Why is the mall so crowded today?", options: ["Because there are many big sales.", "It is a very large mall.", "Yes, it is."], a: "Because there are many big sales." },
            { audio: "Which mouse is easier to use?", options: ["The wireless one is much easier.", "It is on the mousepad.", "Ten dollars."], a: "The wireless one is much easier." },
            { audio: "How much is the least expensive t-shirt?", options: ["It is only seven dollars.", "It is the least beautiful.", "Small, medium, or large."], a: "It is only seven dollars." },
            { audio: "Where can I try on these pants?", options: ["In the dressing room over there.", "They are more comfortable.", "Because they are too long."], a: "In the dressing room over there." },
            { audio: "Who is the owner of this shop?", options: ["Mr. D is the owner.", "The shop is very stylish.", "Yes, it is."], a: "Mr. D is the owner." },
            { audio: "Why are these jeans less comfortable?", options: ["Because the material is too heavy.", "I am wearing them now.", "Thirty dollars."], a: "Because the material is too heavy." },
            { audio: "Which screen has the best resolution?", options: ["The most expensive monitor has it.", "It is a 24-inch screen.", "On the wall."], a: "The most expensive monitor has it." },
            { audio: "How much are the colorful socks?", options: ["They are three dollars a pair.", "They are more colorful.", "To wear with sneakers."], a: "They are three dollars a pair." },
            { audio: "Where did you find that traditional belt?", options: ["In the vintage section of the store.", "It is older than my other belt.", "For my father."], a: "In the vintage section of the store." },
            { audio: "Who bought the most powerful laptop?", options: ["My brother bought the gaming model.", "The laptop is very fast.", "Yesterday."], a: "My brother bought the gaming model." },
            { audio: "Why is this camera the best for travel?", options: ["Because it is the lightest and smallest.", "I am going to France.", "Yes, it is."], a: "Because it is the lightest and smallest." },
            { audio: "Which headphones are the cheapest?", options: ["The small white ones are only $10.", "They have the worst sound.", "For the gym."], a: "The small white ones are only $10." },
            { audio: "How much time is left until the mall closes?", options: ["We have exactly thirty minutes.", "The mall is very big.", "Because it is late."], a: "We have exactly thirty minutes." },
            { audio: "Where is the most stylish dress?", options: ["It is in the window of the first store.", "It is more stylish than the skirt.", "With the necklace."], a: "It is in the window of the first store." },
            { audio: "Who is the most helpful assistant?", options: ["The tall man with the glasses is great.", "He works in the clothing section.", "Yes, he is."], a: "The tall man with the glasses is great." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 items) ---
        10: [
            { audio: "This laptop is faster than the old one.", sent: "This ___ is ___ than the old one.", blanks: ["laptop", "faster"] },
            { audio: "That red dress is the most stylish.", sent: "That red ___ is the ___ stylish.", blanks: ["dress", "most"] },
            { audio: "The smartwatch is as expensive as the phone.", sent: "The ___ is as ___ as the phone.", blanks: ["smartwatch", "expensive"] },
            { audio: "These sneakers are cheaper than those boots.", sent: "These ___ are ___ than those boots.", blanks: ["sneakers", "cheaper"] },
            { audio: "Where is the most comfortable dressing room?", sent: "Where is the ___ comfortable ___ room?", blanks: ["most", "dressing"] },
            { audio: "My camera is better than yours.", sent: "My ___ is ___ than yours.", blanks: ["camera", "better"] },
            { audio: "I have fewer games than Celine.", sent: "I have ___ games than ___.", blanks: ["fewer", "Celine"] },
            { audio: "This charger is the least useful gadget.", sent: "This ___ is the ___ useful gadget.", blanks: ["charger", "least"] },
            { audio: "The screen is bigger on this model.", sent: "The ___ is ___ on this model.", blanks: ["screen", "bigger"] },
            { audio: "Is this jacket more stylish than that one?", sent: "Is this ___ more ___ than that one?", blanks: ["jacket", "stylish"] },
            { audio: "The boots are heavier than the sneakers.", sent: "The ___ are ___ than the sneakers.", blanks: ["boots", "heavier"] },
            { audio: "This is the best store in the mall.", sent: "This is the ___ store in the ___.", blanks: ["best", "mall"] },
            { audio: "The necklace is more colorful than the scarf.", sent: "The ___ is more ___ than the scarf.", blanks: ["necklace", "colorful"] },
            { audio: "My old computer is the slowest.", sent: "My ___ computer is the ___.", blanks: ["old", "slowest"] },
            { audio: "This keyboard is as traditional as mine.", sent: "This ___ is as ___ as mine.", blanks: ["keyboard", "traditional"] },
            { audio: "We found the cheapest gadgets on Monday.", sent: "We found the ___ gadgets on ___.", blanks: ["cheapest", "Monday"] },
            { audio: "The mall is more crowded on Saturdays.", sent: "The ___ is ___ crowded on Saturdays.", blanks: ["mall", "more"] },
            { audio: "I need a more powerful computer.", sent: "I need a ___ powerful ___.", blanks: ["more", "computer"] },
            { audio: "These jeans are less expensive than those.", sent: "These ___ are ___ expensive than those.", blanks: ["jeans", "less"] },
            { audio: "The assistant was the most helpful person.", sent: "The ___ was the ___ helpful person.", blanks: ["assistant", "most"] },
            { audio: "The blue shirt is cheaper than the green one.", sent: "The ___ shirt is ___ than the green one.", blanks: ["blue", "cheaper"] },
            { audio: "This is the most modern smartwatch.", sent: "This is the ___ modern ___.", blanks: ["most", "smartwatch"] },
            { audio: "I have fewer options in this store.", sent: "I have ___ options in this ___.", blanks: ["fewer", "store"] },
            { audio: "The resolution is better on the new camera.", sent: "The ___ is ___ on the new camera.", blanks: ["resolution", "better"] },
            { audio: "This mouse is easier to use.", sent: "This ___ is ___ to use.", blanks: ["mouse", "easier"] },
            { audio: "The leather belt is more stylish.", sent: "The ___ belt is ___ stylish.", blanks: ["leather", "more"] },
            { audio: "Is the hat as cheap as the scarf?", sent: "Is the ___ as ___ as the scarf?", blanks: ["hat", "cheap"] },
            { audio: "This is the worst deal in the shop.", sent: "This is the ___ deal in the ___.", blanks: ["worst", "shop"] },
            { audio: "The tablet is thinner and lighter.", sent: "The ___ is ___ and lighter.", blanks: ["tablet", "thinner"] },
            { audio: "I bought fewer shirts during the sale.", sent: "I bought ___ shirts during the ___.", blanks: ["fewer", "sale"] },
            { audio: "This computer is the most powerful.", sent: "This ___ is the ___ powerful.", blanks: ["computer", "most"] },
            { audio: "The socks are as soft as a cloud.", sent: "The ___ are as ___ as a cloud.", blanks: ["socks", "soft"] },
            { audio: "Which jacket is the least expensive?", sent: "Which ___ is the ___ expensive?", blanks: ["jacket", "least"] },
            { audio: "The camera is more useful for my trip.", sent: "The ___ is ___ useful for my trip.", blanks: ["camera", "more"] },
            { audio: "I made the best decision at the mall.", sent: "I made the ___ decision at the ___.", blanks: ["best", "mall"] },
            { audio: "This screen is the brightest one here.", sent: "This ___ is the ___ one here.", blanks: ["screen", "brightest"] },
            { audio: "The boots are worse than my old ones.", sent: "The ___ are ___ than my old ones.", blanks: ["boots", "worse"] },
            { audio: "The mall has the most stylish clothes.", sent: "The ___ has the ___ stylish clothes.", blanks: ["mall", "most"] },
            { audio: "I found a cheaper option for the charger.", sent: "I found a ___ option for the ___.", blanks: ["cheaper", "charger"] },
            { audio: "These sneakers are the lightest ones.", sent: "These ___ are the ___ ones.", blanks: ["sneakers", "lightest"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE ---
        11: [
            {
                title: "Choosing a Gaming Laptop",
                lines: [
                    { speaker: "Celine", text: "I see, but look at the silver one. It is ___ than the black one.", options: ["faster", "fast"], a: "faster" },
                    { speaker: "Albert", text: "True, but the black one is ___ than all the others.", options: ["more modern", "as modern as"], a: "more modern" },
                    { speaker: "Celine", text: "The silver one is ___ than the black one, so you save money.", options: ["less expensive", "expensive"], a: "less expensive" },
                    { speaker: "Albert", text: "Which one has ___ screen resolution for my games?", options: ["the best", "the better"], a: "the best" },
                    { speaker: "Celine", text: "The silver one is ___ because it has an 4K display.", options: ["the best", "better"], a: "the best" }
                ]
            },
            {
                title: "Shopping for a School Dance",
                lines: [
                    { speaker: "Sarah", text: "The mall is so crowded! Everything is so ___.", options: ["expensive", "cheap"], a: "expensive" },
                    { speaker: "Shop Assistant", text: "Hello! We have many ___ in the window.", options: ["options", "decisions"], a: "options" },
                    { speaker: "Sarah", text: "I like the red one, but is it ___ the blue dress?", options: ["as stylish as", "more stylish"], a: "as stylish as" },
                    { speaker: "Shop Assistant", text: "The blue one is ___ dress in the store right now.", options: ["the most stylish", "more stylish"], a: "the most stylish" },
                    { speaker: "Sarah", text: "Can I ___ both of them? I need to check the comfort.", options: ["try on", "to try on"], a: "try on" }
                ]
            },
            {
                title: "Tech Comparison",
                lines: [
                    { speaker: "Mike", text: "That smartwatch looks much ___ than your old one.", options: ["more powerful", "most powerful"], a: "more powerful" },
                    { speaker: "Leo", text: "Yes! It is ___ than my old watch, but it is much faster.", options: ["smaller", "the smallest"], a: "smaller" },
                    { speaker: "Mike", text: "Does it have ___ apps than your smartphone?", options: ["fewer", "less"], a: "fewer" },
                    { speaker: "Leo", text: "Yes, it has ___ apps, but they are great for athletes.", options: ["fewer", "least"], a: "fewer" },
                    { speaker: "Mike", text: "They are the ___ ones for someone like me!", options: ["most useful", "usefulest"], a: "most useful" }
                ]
            },
            {
                title: "Sneakers for the Gym",
                lines: [
                    { speaker: "Albert", text: "My old sneakers are ___ than I thought. My feet hurt.", options: ["worse", "the worst"], a: "worse" },
                    { speaker: "Celine", text: "These green ones are ___ sneakers in the mall.", options: ["the lightest", "lighter"], a: "the lightest" },
                    { speaker: "Albert", text: "Are they ___ the leather ones?", options: ["as comfortable as", "more comfortable"], a: "as comfortable as" },
                    { speaker: "Celine", text: "They are ___ the leather because the material is soft.", options: ["more comfortable than", "the most comfortable"], a: "more comfortable than" },
                    { speaker: "Albert", text: "But the leather ones look ___.", options: ["better", "the best"], a: "better" }
                ]
            },
            {
                title: "Mall vs. Online Shopping",
                lines: [
                    { speaker: "Dad", text: "Online stores have ___ prices.", options: ["the cheapest", "cheaper"], a: "the cheapest" },
                    { speaker: "Son", text: "In the mall, there are ___ risks of buying the wrong size.", options: ["fewer", "less"], a: "fewer" },
                    { speaker: "Dad", text: "But the mall is ___ than our living room!", options: ["more crowded", "crowdedest"], a: "more crowded" },
                    { speaker: "Son", text: "There are ___ people in the morning.", options: ["fewer", "less"], a: "fewer" },
                    { speaker: "Dad", text: "Choosing a gift will be the ___ part!", options: ["most difficult", "more difficult"], a: "most difficult" }
                ]
            },
            {
                title: "Buying Headphones",
                lines: [
                    { speaker: "Customer", text: "I am looking for headphones with ___ sound quality.", options: ["the best", "better"], a: "the best" },
                    { speaker: "Clerk", text: "These are ___ than the small earbuds.", options: ["more powerful", "most powerful"], a: "more powerful" },
                    { speaker: "Customer", text: "But they are ___ than the ones I have.", options: ["heavier", "the heaviest"], a: "heavier" },
                    { speaker: "Clerk", text: "True, but they are ___ for long trips.", options: ["less uncomfortable", "least uncomfortable"], a: "less uncomfortable" },
                    { speaker: "Customer", text: "I hope they aren't ___ item in the shop.", options: ["the most expensive", "more expensive"], a: "the most expensive" }
                ]
            },
            {
                title: "Accessories and Gifts",
                lines: [
                    { speaker: "Celine", text: "This gold necklace is ___ my monthly budget!", options: ["more expensive than", "most expensive"], a: "more expensive than" },
                    { speaker: "Albert", text: "This colorful one is ___ piece of jewelry here.", options: ["the most beautiful", "beautifuler"], a: "the most beautiful" },
                    { speaker: "Celine", text: "It is also ___ to wear with a summer dress.", options: ["lighter", "lightest"], a: "lighter" },
                    { speaker: "Albert", text: "Is it ___ the gold one?", options: ["as traditional as", "traditionalest"], a: "as traditional as" },
                    { speaker: "Celine", text: "I think it’s ___ option for my sister.", options: ["the best", "better"], a: "the best" }
                ]
            },
            {
                title: "At the Register",
                lines: [
                    { speaker: "Cashier", text: "Have you made a ___ yet?", options: ["decision", "price"], a: "decision" },
                    { speaker: "Customer", text: "Yes, these jeans are ___ than the other pair.", options: ["better", "best"], a: "better" },
                    { speaker: "Cashier", text: "These socks are ___ today because of the sale.", options: ["cheaper", "cheapest"], a: "cheaper" },
                    { speaker: "Customer", text: "I have ___ socks at home, so I will take two.", options: ["fewer", "less"], a: "fewer" },
                    { speaker: "Cashier", text: "This is the ___ way to pay.", options: ["fastest", "fast"], a: "fastest" }
                ]
            },
            {
                title: "Mall Crowds",
                lines: [
                    { speaker: "A", text: "The mall is ___ today than yesterday.", options: ["busier", "the busiest"], a: "busier" },
                    { speaker: "B", text: "Yes, it is the ___ day of the week.", options: ["most crowded", "more crowded"], a: "most crowded" },
                    { speaker: "A", text: "Let's find a ___ store.", options: ["quieter", "quietest"], a: "quieter" },
                    { speaker: "B", text: "This one has ___ customers than that one.", options: ["fewer", "less"], a: "fewer" },
                    { speaker: "A", text: "The service here is also ___.", options: ["better", "more good"], a: "better" }
                ]
            },
            {
                title: "New Gadget Advice",
                lines: [
                    { speaker: "A", text: "Is a tablet ___ a laptop for school?", options: ["as useful as", "usefuler than"], a: "as useful as" },
                    { speaker: "B", text: "The laptop is ___ for typing essays.", options: ["better", "best"], a: "better" },
                    { speaker: "A", text: "But the tablet is ___ to carry.", options: ["lighter", "the lightest"], a: "lighter" },
                    { speaker: "B", text: "Modern tablets are ___ as some computers.", options: ["as fast", "faster"], a: "as fast" },
                    { speaker: "A", text: "I will make the ___ decision for my budget.", options: ["best", "better"], a: "best" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER ---
        12: [
            {
                title: "The New Electronics Mega-Store",
                text: "Last weekend, I visited 'TechWorld,' the newest and largest electronics store in the city. Compared to the old shops downtown, TechWorld is much more modern and organized. I was looking for a new laptop for my 8th-grade projects. I found two great options: the 'Speedy-X' and the 'Ultra-Tab.' The Speedy-X is faster and more powerful, but it is also the heaviest laptop I have ever held. On the other hand, the Ultra-Tab is as light as a notebook, but its screen is smaller. After a long time, I made the best decision: I bought the Speedy-X because performance is more important to me than weight.",
                questions: [
                    { q: "How is TechWorld compared to the old shops?", options: ["It is smaller.", "It is much more modern and organized.", "It is cheaper but messy."], a: "It is much more modern and organized." },
                    { q: "What is the main characteristic of the Speedy-X?", options: ["It is the lightest laptop.", "It is faster and more powerful but very heavy.", "It has the smallest screen."], a: "It is faster and more powerful but very heavy." },
                    { q: "How does the Ultra-Tab feel in terms of weight?", options: ["It is heavier.", "It is as light as a notebook.", "It is the heaviest."], a: "It is as light as a notebook." },
                    { q: "Which item was more important to the writer?", options: ["Having a light laptop.", "Having the best performance.", "Buying the cheapest gadget."], a: "Having the best performance." },
                    { q: "What decision did the writer make?", options: ["He bought the Ultra-Tab.", "He bought the Speedy-X.", "He didn't buy anything."], a: "He bought the Speedy-X." }
                ]
            },
            {
                title: "Sarah’s Shopping List",
                text: "Sarah needs new clothes for the winter. She went to the mall to buy a jacket, boots, and a scarf. First, she tried on a leather jacket, but it was less comfortable than the wool coat. The wool coat was also warmer and cheaper. Next, she looked at the boots. The leather boots were more expensive than the sneakers, but they were the best option for the snow. Finally, she found a colorful scarf that was as soft as a cloud. Sarah had fewer bags than her friend Celine, but her items were the most stylish ones in the mall!",
                questions: [
                    { q: "Why did Sarah prefer the wool coat?", options: ["It was more expensive.", "It was more comfortable, warmer, and cheaper.", "It was lighter."], a: "It was more comfortable, warmer, and cheaper." },
                    { q: "How were the leather boots compared to the sneakers?", options: ["They were cheaper.", "They were more expensive but better for snow.", "They were as comfortable as socks."], a: "They were more expensive but better for snow." },
                    { q: "What was special about the scarf?", options: ["It was as soft as a cloud.", "It was the most expensive.", "It was less colorful."], a: "It was as soft as a cloud." },
                    { q: "Who had more bags at the end of the day?", options: ["Sarah.", "Celine.", "They had the same number."], a: "Celine." },
                    { q: "How is Sarah’s style described?", options: ["Traditional and old.", "The most stylish in the mall.", "Very ugly and cheap."], a: "The most stylish in the mall." }
                ]
            },
            {
                title: "The Tablet vs. The Laptop",
                text: "In the 8th grade, many students ask: 'Which is better, a tablet or a laptop?' Laptops are usually more powerful and better for typing long essays because they have physical keyboards. However, tablets are more useful for drawing and are much lighter to carry in a backpack. The most modern tablets are now as fast as some laptops, but they are often more expensive when you buy the extra accessories. For students who have fewer books and travel often, the tablet is the best choice. But for those who need to do complex homework, the laptop remains the superior gadget.",
                questions: [
                    { q: "Why are laptops better for typing?", options: ["Because they have physical keyboards.", "Because they are cheaper.", "Because they are smaller."], a: "Because they have physical keyboards." },
                    { q: "What is an advantage of using a tablet?", options: ["They are heavier.", "They are useful for drawing and very light.", "They have the largest keyboards."], a: "They are useful for drawing and very light." },
                    { q: "How is the speed of modern tablets described?", options: ["They are the slowest.", "They are as fast as some laptops.", "They are faster than any computer."], a: "They are as fast as some laptops." },
                    { q: "When can a tablet become more expensive?", options: ["When you buy a cheaper model.", "When you add extra accessories.", "When the screen is smaller."], a: "When you add extra accessories." },
                    { q: "Who should choose a tablet according to the text?", options: ["Students who do complex homework.", "Students who have fewer books and travel a lot.", "Students who want the traditional option."], a: "Students who have fewer books and travel a lot." }
                ]
            },
            {
                title: "A Review of the SmartWatch Pro",
                text: "I am testing the new 'SmartWatch Pro' this week. It is more stylish than my previous watch, but is it more useful? The screen is the brightest I have ever seen, which is great for sunny days. It also has the most accurate sensor for counting steps. However, the battery life is worse than the older models; it lasts only one day. Also, it is less comfortable than a traditional watch because the charger port is quite heavy. Even though it is the most modern gadget in my collection, I think my traditional watch is still better for long trips.",
                questions: [
                    { q: "What is the best feature of the SmartWatch Pro?", options: ["The battery life.", "The brightest screen and accurate sensor.", "The traditional design."], a: "The brightest screen and accurate sensor." },
                    { q: "How is the battery life compared to older models?", options: ["It is better.", "It is worse.", "It is the same."], a: "It is worse." },
                    { q: "Why is the watch less comfortable?", options: ["Because the screen is too small.", "Because the charger port is heavy.", "Because it is made of gold."], a: "Because the charger port is heavy." },
                    { q: "Is this the newest gadget the writer has?", options: ["Yes, it is the most modern in his collection.", "No, he has a better laptop.", "The text doesn't say."], a: "Yes, it is the most modern in his collection." },
                    { q: "What is the writer's final opinion?", options: ["The SmartWatch Pro is the best for everything.", "The traditional watch is better for long trips.", "He hates all modern gadgets."], a: "The traditional watch is better for long trips." }
                ]
            },
            {
                title: "Dressing for the Weather",
                text: "Choosing the right clothes in April is difficult because the weather is unpredictable. Usually, a light jacket is enough, but today is colder than yesterday. I am wearing my heaviest coat and a traditional wool hat. My sister is wearing a sweater that is as warm as mine, but her boots are much more stylish. We are going to the mall to buy some summer clothes because they are the cheapest items during this season. There are fewer people in the stores now, so we can find the best deals without waiting in long lines for the dressing room.",
                questions: [
                    { q: "Why is choosing clothes difficult in April?", options: ["Because it is always hot.", "Because the weather is unpredictable.", "Because there are no stores."], a: "Because the weather is unpredictable." },
                    { q: "What is the speaker wearing today?", options: ["A light t-shirt.", "The heaviest coat and a traditional hat.", "A stylish dress."], a: "The heaviest coat and a traditional hat." },
                    { q: "How does the sister's sweater compare to the speaker's?", options: ["It is as warm as the speaker's.", "It is less warm.", "It is the warmest in the family."], a: "It is as warm as the speaker's." },
                    { q: "Why are they buying summer clothes now?", options: ["Because they are the most expensive.", "Because they are the cheapest items this season.", "Because it is very hot today."], a: "Because they are the cheapest items this season." },
                    { q: "What is the advantage of shopping now?", options: ["There are more people.", "There are fewer people and no lines.", "The mall is closing."], a: "There are fewer people and no lines." }
                ]
            },
            {
                title: "The 'Best Deal' Store",
                text: "'The Best Deal' is a famous shop in our neighborhood. They sell gadgets and clothes at lower prices than the big mall. Yesterday, I saw a keyboard that was fifty percent cheaper than the one at the electronics store. However, the quality is not always the best. My brother bought a mouse there, but it was less reliable than his old one. The staff is the most helpful in the area, but the store is the smallest. If you want to save money and don't need the most modern technology, this is a good option for you.",
                questions: [
                    { q: "Where are the prices lower?", options: ["At the big mall.", "At 'The Best Deal' shop.", "In the city center."], a: "At 'The Best Deal' shop." },
                    { q: "How was the keyboard price?", options: ["It was more expensive.", "It was fifty percent cheaper.", "It was the same price."], a: "It was fifty percent cheaper." },
                    { q: "What is a disadvantage of this store?", options: ["The staff is bad.", "The quality is not always the best.", "It is too big."], a: "The quality is not always the best." },
                    { q: "How is the staff described?", options: ["The most helpful in the area.", "Very traditional and slow.", "The worst assistants."], a: "The most helpful in the area." },
                    { q: "Who should shop at this store?", options: ["People who want the most modern technology.", "People who want to save money.", "People who like big stores."], a: "People who want to save money." }
                ]
            },
            {
                title: "Accessories and Quality",
                text: "When you buy accessories, you must think about quality and price. For example, a gold necklace is more expensive than a silver one, but it is also more traditional and lasts longer. A smartwatch is more useful than a normal watch, but it is also more difficult to use. In the mall, I found a belt that was the least expensive in the store, but it was also the ugliest. My mother always says: 'The most expensive item is not always the best.' I think she is right. It is better to choose something comfortable and useful.",
                questions: [
                    { q: "Which necklace lasts longer?", options: ["The silver one.", "The gold one.", "The colorful one."], a: "The gold one." },
                    { q: "What is a problem with the smartwatch?", options: ["It is too cheap.", "It is more difficult to use.", "It is as traditional as the gold necklace."], a: "It is more difficult to use." },
                    { q: "What was the problem with the cheapest belt?", options: ["It was the most beautiful.", "It was the ugliest.", "It was too powerful."], a: "It was the ugliest." },
                    { q: "What does the mother think about expensive items?", options: ["They are always the best.", "They are not always the best.", "They are as cheap as toys."], a: "They are not always the best." },
                    { q: "What is the writer’s final conclusion?", options: ["Buy the most expensive thing.", "Choose something comfortable and useful.", "Don't buy anything."], a: "Choose something comfortable and useful." }
                ]
            },
            {
                title: "Buying a Camera for a Trip",
                text: "Next month, my family is flying to Italy. I want to buy a new camera to take the most beautiful photos of our trip. I saw a professional DSLR camera, but it was the heaviest and most expensive option. Then, I found a small digital camera. It was much lighter and easier to carry. The professional camera has the best resolution, but the small one is more useful for a tourist. Also, the small camera was cheaper than the DSLR. I made my decision: I bought the small one because it fits in my jacket pocket!",
                questions: [
                    { q: "Where is the family going?", options: ["France.", "Italy.", "England."], a: "Italy." },
                    { q: "What was the problem with the professional camera?", options: ["It was the cheapest.", "It was the heaviest and most expensive.", "It had the worst resolution."], a: "It was the heaviest and most expensive." },
                    { q: "Why is the small camera better for a tourist?", options: ["Because it is lighter and easier to carry.", "Because it is as heavy as a laptop.", "Because it is more traditional."], a: "Because it is lighter and easier to carry." },
                    { q: "Which camera has the best resolution?", options: ["The small digital camera.", "The professional DSLR.", "The smartphone."], a: "The professional DSLR." },
                    { q: "Why did the writer choose the small camera?", options: ["Because it fits in his jacket pocket.", "Because it was more expensive.", "Because it was the most powerful."], a: "Because it fits in his jacket pocket." }
                ]
            },
            {
                title: "The Tallest Athlete",
                text: "In the 8th grade sports competition, Albert and Leo are the stars. Albert is the tallest student in the class, so he is best at basketball. Leo is smaller, but he is the fastest runner. They use the most modern equipment. Albert has the newest sneakers and Leo has a professional smartwatch. They both think that training is more important than having the most expensive gadgets.",
                questions: [
                    { q: "Who is the tallest student?", options: ["Albert", "Leo", "The teacher"], a: "Albert" },
                    { q: "What is Leo's specialty?", options: ["Basketball", "He is the fastest runner.", "Drawing"], a: "He is the fastest runner." },
                    { q: "Who has the newest sneakers?", options: ["Leo", "Albert", "Celine"], a: "Albert" },
                    { q: "What gadget does Leo use?", options: ["A laptop", "A professional smartwatch.", "A camera"], a: "A professional smartwatch." },
                    { q: "What is more important than gadgets according to them?", options: ["The price", "Training", "The mall"], a: "Training" }
                ]
            },
            {
                title: "Keyboard Comfort",
                text: "I am comparing two keyboards: the 'Tradition-10' and the 'Modern-X.' The Tradition-10 is as heavy as a book and it is the most reliable model. However, the Modern-X is much more stylish and it is the lightest keyboard available. The Modern-X is more expensive, but its keys are more comfortable for typing. For my homework, I think the Modern-X is the best decision.",
                questions: [
                    { q: "Which keyboard is the most reliable?", options: ["Modern-X", "Tradition-10", "A tablet"], a: "Tradition-10" },
                    { q: "What is an advantage of the Modern-X?", options: ["It is heavy.", "It is the lightest and more stylish.", "It is the cheapest."], a: "It is the lightest and more stylish." },
                    { q: "Which one is more expensive?", options: ["Modern-X", "Tradition-10", "They are same."], a: "Modern-X" },
                    { q: "Why are the Modern-X keys better?", options: ["They are colorful.", "They are more comfortable for typing.", "They are bigger."], a: "They are more comfortable for typing." },
                    { q: "What did the writer decide?", options: ["To buy the traditional one.", "The Modern-X is the best decision.", "To use a mouse."], a: "The Modern-X is the best decision." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER ---
        13: [
            {
                title: "The New Gadget",
                audio: "Last week, I finally went to the mall to buy a new smartphone. I looked at two models: the 'X-Phone' and the 'Y-Phone'. The X-Phone is much faster and has the biggest screen in the store, but it is also the most expensive option. On the other hand, the Y-Phone is as stylish as the X-Phone, but its camera is worse. After talking to the assistant, I made a decision. I bought the Y-Phone because it was cheaper and lighter to carry in my jacket pocket.",
                questions: [
                    { q: "What was the writer looking for at the mall?", options: ["A new laptop.", "A new smartphone.", "A new jacket."], a: "A new smartphone." },
                    { q: "How is the X-Phone described?", options: ["The cheapest.", "The fastest with the biggest screen.", "The most traditional."], a: "The fastest with the biggest screen." },
                    { q: "How is the Y-Phone similar to the X-Phone?", options: ["It is just as stylish.", "It is just as fast.", "It has the same price."], a: "It is just as stylish." },
                    { q: "What is a disadvantage of the Y-Phone?", options: ["Screen too big.", "Its camera is worse.", "It is very heavy."], a: "Its camera is worse." },
                    { q: "Why did the writer choose the Y-Phone?", options: ["Most expensive.", "Cheaper and lighter.", "Best camera."], a: "Cheaper and lighter." }
                ]
            },
            {
                title: "Shopping with Celine",
                audio: "Celine and I are at the clothing store today. She wants to find the most stylish dress for her birthday party. She tried on a red dress, but it was too expensive and quite uncomfortable. Then, she tried a blue one. The blue dress was more comfortable than the red one and it was also cheaper. Celine thinks the blue dress is the best choice because it is more modern. There are fewer dresses in our size today, so she decided to buy it immediately.",
                questions: [
                    { q: "Why are they at the store?", options: ["Buy gift.", "Find dress for Celine's birthday.", "Buy laptop."], a: "Find dress for Celine's birthday." },
                    { q: "What was the problem with the red dress?", options: ["Too cheap.", "Expensive and uncomfortable.", "Too small."], a: "Expensive and uncomfortable." },
                    { q: "How was the blue dress compared to the red one?", options: ["More expensive.", "More comfortable and cheaper.", "Less stylish."], a: "More comfortable and cheaper." },
                    { q: "Why does Celine like the blue dress?", options: ["More traditional.", "More modern.", "Heaviest."], a: "More modern." },
                    { q: "Why did she buy it immediately?", options: ["Closing.", "Fewer dresses in her size.", "Most expensive."], a: "Fewer dresses in her size." }
                ]
            },
            {
                title: "The Electronics Display",
                audio: "Look at this electronics display! These are the most powerful laptops available this year. This silver one is more modern than the black one, but the black laptop is actually faster for gaming. The black one also has the brightest screen I have ever seen. However, it requires a very heavy charger. My brother says that the silver laptop is the best for school because it is the lightest. I agree with him; I prefer useful gadgets over heavy ones.",
                questions: [
                    { q: "What is being described in the audio?", options: ["Clothing.", "Electronics display.", "Library."], a: "Electronics display." },
                    { q: "Which laptop is more modern?", options: ["Black one.", "Silver one.", "They are same."], a: "Silver one." },
                    { q: "What is a benefit of the black laptop?", options: ["Cheapest.", "Faster for gaming and bright screen.", "Light charger."], a: "Faster for gaming and bright screen." },
                    { q: "Why does the brother prefer the silver laptop?", options: ["Fastest.", "Lightest and best for school.", "Expensive."], a: "Lightest and best for school." },
                    { q: "What does the writer prefer?", options: ["Heavy laptops.", "Useful, light gadgets.", "Traditional ones."], a: "Useful, light gadgets." }
                ]
            },
            {
                title: "Winter Sales",
                audio: "Winter is coming, and the mall has the best deals right now. I need new boots and a warm coat. I found some leather boots that are much more traditional than my old sneakers, but they are also heavier. The coat I chose is the most comfortable item I own. It was less expensive than the jacket I saw yesterday, but the quality is better. I am very happy with my decisions because I saved fifty dollars today!",
                questions: [
                    { q: "Why are there good deals at the mall?", options: ["Summer.", "Winter is coming.", "Closing."], a: "Winter is coming." },
                    { q: "How are the new leather boots described?", options: ["Modern.", "More traditional but heavier.", "Cheapest."], a: "More traditional but heavier." },
                    { q: "How is the coat compared to the jacket from yesterday?", options: ["More expensive.", "Less expensive but better quality.", "Less comfortable."], a: "Less expensive but better quality." },
                    { q: "How does the speaker feel?", options: ["Sad.", "Happy with decisions.", "Bored."], a: "Happy with decisions." },
                    { q: "How much money did the speaker save?", options: ["$15.", "$50.", "$100."], a: "$50." }
                ]
            },
            {
                title: "The Smart Shopper",
                audio: "To be a smart shopper, you must compare prices and quality. Sometimes the cheapest option is not the best. For example, I saw a computer mouse that was very cheap, but it felt very uncomfortable in my hand. I decided to buy a more expensive one because it was more ergonomic and easier to use. Also, always check the dressing room before you buy clothes. Last week, Sarah bought a skirt without trying it on, and it was too small. Now she has to return it!",
                questions: [
                    { q: "What is the first rule?", options: ["Buy expensive.", "Compare prices and quality.", "Buy online."], a: "Compare prices and quality." },
                    { q: "Why didn't the writer buy the cheapest mouse?", options: ["Too fast.", "Uncomfortable.", "Blue."], a: "Uncomfortable." },
                    { q: "Which mouse did the writer choose?", options: ["Cheapest.", "More expensive, ergonomic one.", "Traditional."], a: "More expensive, ergonomic one." },
                    { q: "What happened to Sarah's skirt?", options: ["Too big.", "Too small (no dressing room).", "Wrong color."], a: "Too small (no dressing room)." },
                    { q: "What is the advice for clothes?", options: ["Buy quickly.", "Always use the dressing room.", "Only stylish."], a: "Always use the dressing room." }
                ]
            },
            {
                title: "Gadget Resolution",
                audio: "I am an artist, so I need a camera with the best resolution. I am comparing the 'Pro-Cam' and the 'Easy-Shot'. The Pro-Cam has the most powerful lens and takes the most beautiful photos. However, it is much heavier and more difficult to use than the Easy-Shot. The Easy-Shot is the smallest camera in the store, and it is as light as a smartphone. For my trip, I think the Easy-Shot is more useful, even if the Pro-Cam is better.",
                questions: [
                    { q: "Why need camera?", options: ["Student.", "Artist.", "Gamer."], a: "Artist." },
                    { q: "Which takes most beautiful photos?", options: ["Easy-Shot.", "Pro-Cam.", "Smartphone."], a: "Pro-Cam." },
                    { q: "What is disadvantage of Pro-Cam?", options: ["Too light.", "Heavier and difficult to use.", "Bad lens."], a: "Heavier and difficult to use." },
                    { q: "How light is Easy-Shot?", options: ["Laptop.", "Smartphone.", "Heaviest."], a: "Smartphone." },
                    { q: "Which chosen for trip?", options: ["Pro-Cam.", "Easy-Shot.", "Neither."], a: "Easy-Shot." }
                ]
            },
            {
                title: "The Crowded Mall",
                audio: "Saturdays are the most crowded days at the mall. There are more people in the stores and longer lines at the registers. I usually prefer to go on Mondays because there are fewer shoppers and the service is better. Today, I am looking for a new keyboard. I found one that is more modern than my old one, but it is also noisier. I think I will look for a quieter option in a different store where it is less crowded.",
                questions: [
                    { q: "Which day most crowded?", options: ["Monday.", "Saturday.", "Friday."], a: "Saturday." },
                    { q: "Why prefer Mondays?", options: ["Closed.", "Fewer shoppers/better service.", "Expensive."], a: "Fewer shoppers/better service." },
                    { q: "What looking for?", options: ["Mouse.", "Keyboard.", "Monitor."], a: "Keyboard." },
                    { q: "Problem with new keyboard?", options: ["Traditional.", "Noisier.", "Cheap."], a: "Noisier." },
                    { q: "Speaker's plan?", options: ["Buy noisy one.", "Look for quieter option.", "Go home."], a: "Look for quieter option." }
                ]
            },
            {
                title: "Headphones Comparison",
                audio: "Headphones are very useful for studying in the library. I have two pairs. My blue headphones are smaller and lighter, making them easier to carry in my backpack. However, my black headphones have the best sound quality and are much more powerful. Although the black ones are more expensive than the blue ones, they are the most comfortable for long hours of study. I think the black ones are the best investment I made this year.",
                questions: [
                    { q: "Where useful?", options: ["Park.", "Library.", "Kitchen."], a: "Library." },
                    { q: "Advantage of blue ones?", options: ["Best sound.", "Smaller and lighter.", "Expensive."], a: "Smaller and lighter." },
                    { q: "Which more powerful?", options: ["Blue.", "Black.", "Equal."], a: "Black." },
                    { q: "Why black better for long study?", options: ["Cheap.", "Most comfortable.", "Smaller."], a: "Most comfortable." },
                    { q: "Final opinion of black ones?", options: ["Bad decision.", "Best investment.", "Too heavy."], a: "Best investment." }
                ]
            },
            {
                title: "Smartphone Sizes",
                audio: "I want a new smartphone. I am comparing the 'Max' and the 'Mini'. The Max has the largest screen and the best resolution, but it is the least comfortable to hold with one hand. The Mini is as small as my wallet and it is the lightest model. My brother thinks the Mini is better for travel, but I want the best screen for videos. I think the Max is more useful for me.",
                questions: [
                    { q: "What are the models?", options: ["Pro/Slim", "Max/Mini", "Big/Small"], a: "Max/Mini" },
                    { q: "Advantage of Max?", options: ["Smallest.", "Largest screen and best resolution.", "Cheap."], a: "Largest screen and best resolution." },
                    { q: "Disadvantage of Max?", options: ["Small screen.", "Least comfortable to hold.", "Heavy battery."], a: "Least comfortable to hold." },
                    { q: "How light is Mini?", options: ["Wallet.", "Lightest model.", "Heaviest."], a: "Lightest model." },
                    { q: "Which chosen?", options: ["Mini.", "Max.", "Neither."], a: "Max." }
                ]
            },
            {
                title: "Choosing a Belt",
                audio: "I need a belt for my jeans. The brown one is more traditional and it is made of leather. The black one is less expensive and it is made of plastic. The leather belt is heavier, but it is also more stylish. My mother says the leather belt is the best option because it lasts longer. I think she is right!",
                questions: [
                    { q: "What is needed?", options: ["Jeans.", "Belt.", "Hat."], a: "Belt." },
                    { q: "Material of brown belt?", options: ["Plastic.", "Leather.", "Fabric."], a: "Leather." },
                    { q: "Which is less expensive?", options: ["Brown.", "Black.", "Same."], a: "Black." },
                    { q: "Why leather belt better?", options: ["Lighter.", "More stylish and lasts longer.", "Traditionalest."], a: "More stylish and lasts longer." },
                    { q: "Final decision?", options: ["Buy black.", "Buy leather (mother right).", "Buy neither."], a: "Buy leather (mother right)." }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT ---
        14: [
            {
                title: "The Best Laptop for School",
                text: "I am looking for a new laptop. I found two models. The first one is [1] (faster than / the fastest / as fast as) my old computer, but it is very heavy. The second model is [2] (lighter / light / the lightest) laptop in the store, so it is easier to carry. The screen is [3] (smaller than / smallest / as small as) the heavy model, but the resolution is [4] (better / more good / best). I chose the lighter one because it is the [5] (most useful / usefuler / less useful) option.",
                answers: ["faster than", "the lightest", "smaller than", "better", "most useful"]
            },
            {
                title: "Winter Shopping",
                text: "Sarah found a jacket that was [1] (more stylish / the most stylish / stylish than) dress in the mall! It was [2] (warmer than / the warmest / warm) her old coat. Celine looked at some boots, but they were [3] (more expensive / expensivest / expensive as) than she expected. She bought a [4] (cheaper / cheapest / more cheap) pair that was just as comfortable. At the end, they had [5] (fewer / less / more) money, but they were happy.",
                answers: ["the most stylish", "warmer than", "more expensive", "cheaper", "less"]
            },
            {
                title: "Tech Comparison",
                text: "My brother needs [1] (most powerful / more powerful / powerfuler) computer available. His new desktop is much [2] (faster / fast / the fastest) than his old laptop. It has [3] (biggest / bigger / big) screen I have ever seen! However, his new mouse is [4] (less comfortable / least comfortable / as comfortable) than his old one. Performance is [5] (more important than / most important / as important as) comfort for games.",
                answers: ["the most powerful", "faster", "the biggest", "less comfortable", "more important than"]
            },
            {
                title: "The Smartwatch Decision",
                text: "Buying a smartwatch was a [1] (difficult / more difficult / most difficult) decision. I wanted a gadget that was [2] (as useful as / more useful / usefulest) a smartphone. I saw a gold model that was [3] (most expensive / more expensive / expensive) item in the display. Then, I found a black one that was [4] (cheaper / cheapest / more cheap) and had more apps. The black watch is [5] (better / gooder / best) for tracking steps.",
                answers: ["difficult", "as useful as", "the most expensive", "cheaper", "better"]
            },
            {
                title: "Mall Service",
                text: "The service in the big mall is usually [1] (better / more good / best) than in local shops. The assistants are [2] (most helpful / more helpful / helpfuler) people I know. However, the mall is also [3] (more crowded / crowdedest / as crowded) than the small stores downtown. There are [4] (fewer / less / more) available dressing rooms on Saturdays. My mother thinks local shops are [5] (more traditional / traditionaler / most traditional), but I prefer the mall.",
                answers: ["better", "the most helpful", "more crowded", "fewer", "more traditional"]
            },
            {
                title: "Camera Resolution",
                text: "As a photographer, I need a camera with [1] (highest / higher / high) resolution. Professional cameras are [2] (more expensive / expensivest / expensive than) than simple ones, but the quality is [3] (better / gooder / best). This new model is [4] (as light as / lighter / lightest) a feather, which is perfect for travel. It is [5] (most modern / more modern / modernest) gadget in my bag.",
                answers: ["the highest", "more expensive", "better", "as light as", "the most modern"]
            },
            {
                title: "Shoe Store Experience",
                text: "I went to the shoe store. The red ones were [1] (more stylish / stylishest / as stylish) than the blue ones, but they were also [2] (heavier / heavyer / heaviest). I need [3] (lightest / lighter / light) shoes possible for the marathon. The assistant showed me a third option that was [4] (as comfortable as / more comfortable / most comfortable) the others. It was [5] (cheapest / cheaper / cheap) of all three.",
                answers: ["more stylish", "heavier", "the lightest", "as comfortable as", "the cheapest"]
            },
            {
                title: "Accessories and Prices",
                text: "In the jewelry store, I saw a necklace that was [1] (more colorful / colorfulest / the most colorful) than my sister's scarf. It was [2] (as beautiful as / more beautiful / beautifuler) a work of art. The price was [3] (less / fewer / least) than I thought, so it was a great deal. My brother bought a leather belt that was [4] (most traditional / more traditional / traditionalest) style. We made [5] (better / gooder / best) decisions than our cousins.",
                answers: ["more colorful", "as beautiful as", "less", "the most traditional", "better"]
            },
            {
                title: "Mall Gadgets",
                text: "This shop has [1] (more gadgets than / most gadgets / as gadget as) the other one. The [2] (newest / newer / new) tablet is here. It is [3] (thinner than / thin / the thinnest) my smartphone! The screen is [4] (brighter / brightest / bright) than my TV. It is the [5] (best / better / more good) gadget for school.",
                answers: ["more gadgets than", "newest", "thinner than", "brighter", "best"]
            },
            {
                title: "Comparing Sizes",
                text: "My bag is [1] (bigger than / the biggest / as big as) yours. I have [2] (more books / most books / book) inside. However, your backpack is [3] (more stylish / stylishest / stylish) because it has [4] (colorfulest / more colorful / colorful) designs. My father says a heavy bag is [5] (worse / badder / worst) for the back.",
                answers: ["bigger than", "more books", "more stylish", "more colorful", "worse"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT ---
        15: [
            {
                title: "Laptop Choice",
                audio: "This laptop is faster than the old one. It is also lighter, so I can carry it easily. It has the biggest screen in the store. I think it is the best choice for me.",
                text: "This [1] is [2] than the old one. It is also [3], so I can carry it easily. It has the [4] screen in the store. I think it is the [5] choice for me.",
                answers: ["laptop", "faster", "lighter", "biggest", "best"]
            },
            {
                title: "Stylishest Girl",
                audio: "Celine bought the most stylish dress today. It was cheaper than the red one and much more comfortable. She is the happiest girl in the mall.",
                text: "Celine bought the [1] stylish [2] today. It was [3] than the red one and much [4] comfortable. She is the [5] girl in the mall.",
                answers: ["most", "dress", "cheaper", "more", "happiest"]
            },
            {
                title: "New Smartwatch",
                audio: "The smartwatch is as useful as a phone. It is smaller and more modern. It is the newest gadget in the electronics shop.",
                text: "The [1] is as [2] as a phone. It is [3] and more [4]. It is the [5] gadget in the electronics shop.",
                answers: ["smartwatch", "useful", "smaller", "modern", "newest"]
            },
            {
                title: "Running Shoes",
                audio: "These sneakers are better for running than boots. They are the lightest shoes I own. They are also less expensive than the professional models.",
                text: "These [1] are [2] for running than boots. They are the [3] shoes I own. They are also [4] expensive than the [5] models.",
                answers: ["sneakers", "better", "lightest", "less", "professional"]
            },
            {
                title: "Mall Crowds",
                audio: "The mall is more crowded on Saturdays. There are fewer people on Mondays. The service is best in the morning.",
                text: "The [1] is [2] crowded on Saturdays. There are [3] people on [4]. The service is [5] in the morning.",
                answers: ["mall", "more", "fewer", "Mondays", "best"]
            },
            {
                title: "Camera Resolution",
                audio: "My camera has the highest resolution. It is more powerful than a smartphone. It is the most useful tool for an artist.",
                text: "My [1] has the [2] resolution. It is [3] powerful than a [4]. It is the [5] useful tool for an artist.",
                answers: ["camera", "highest", "more", "smartphone", "most"]
            },
            {
                title: "Prettiest Necklace",
                audio: "This necklace is more colorful than the scarf. It is the prettiest item in the window. The price is the cheapest I found.",
                text: "This [1] is more [2] than the scarf. It is the [3] item in the window. The [4] is the [5] I found.",
                answers: ["necklace", "colorful", "prettiest", "price", "cheapest"]
            },
            {
                title: "Better Keyboard",
                audio: "The keyboard is easier to use than the mouse. It is the most comfortable model. It is a smart decision for your homework.",
                text: "The [1] is [2] to use than the mouse. It is the [3] comfortable model. It is a [4] decision for your [5].",
                answers: ["keyboard", "easier", "most", "smart", "homework"]
            },
            {
                title: "Warm Winter",
                audio: "The wool coat is warmer than the jacket. It is the heaviest item for winter. It is also more traditional and cheaper.",
                text: "The wool [1] is [2] than the jacket. It is the [3] item for winter. It is also [4] traditional and [5].",
                answers: ["coat", "warmer", "heaviest", "more", "cheaper"]
            },
            {
                title: "Best Gadgets",
                audio: "I have many gadgets. My laptop is more powerful than my tablet, but the tablet is more portable. My phone is the newest device I have.",
                text: "I have many [1]. My laptop is [2] powerful than my [3], but the tablet is more [4]. My phone is the [5] device I have.",
                answers: ["gadgets", "more", "tablet", "portable", "newest"]
            }
        ]
    }
});