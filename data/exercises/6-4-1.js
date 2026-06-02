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
 * GRADE 6, BIMESTER 4, CHAPTER 7
 * BATCH 1: TYPES 1 TO 5 (40 items each)
 */

window.initExercise({
    id: "6-4-7",
    grade: "6th Grade",
    bimester: "4",
    chapter: "7",
    title: "The Environment and Present Continuous",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES (40 ITEMS) ---
        1: [
            { words: ["am", "I", "the", "environment", "helping"], correct: "I am helping the environment" },
            { words: ["plastic", "They", "recycling", "bottles", "are"], correct: "They are recycling plastic bottles" },
            { words: ["planting", "is", "She", "tree", "a"], correct: "She is planting a tree" },
            { words: ["not", "We", "wasting", "water", "are"], correct: "We are not wasting water" },
            { words: ["river", "polluting", "He", "the", "is"], correct: "He is polluting the river" },
            { words: ["action", "taking", "right", "We", "are", "now"], correct: "We are taking action right now" },
            { words: ["looking", "are", "What", "you", "at"], correct: "What are you looking at?" },
            { words: ["love", "nature", "I"], correct: "I love nature" },
            { words: ["want", "help", "They", "to"], correct: "They want to help" },
            { words: ["bag", "using", "a", "reusable", "is", "He"], correct: "He is using a reusable bag" },
            { words: ["the", "clean", "are", "We", "keeping", "park"], correct: "We are keeping the park clean" },
            { words: ["throwing", "garbage", "She", "away", "is"], correct: "She is throwing away garbage" },
            { words: ["the", "protecting", "Are", "planet", "you"], correct: "Are you protecting the planet?" },
            { words: ["is", "difference", "a", "making", "Celine"], correct: "Celine is making a difference" },
            { words: ["swimming", "dog", "river", "in", "the", "is", "The"], correct: "The dog is swimming in the river" },
            { words: ["running", "Why", "man", "is", "that"], correct: "Why is that man running?" },
            { words: ["bags", "need", "plastic", "We", "not", "do"], correct: "We do not need plastic bags" },
            { words: ["earth", "our", "The", "home", "is"], correct: "The earth is our home" },
            { words: ["at", "sleeping", "this", "is", "moment", "He"], correct: "He is sleeping at this moment" },
            { words: ["water", "drinking", "are", "birds", "The"], correct: "The birds are drinking water" },
            { words: ["reducing", "am", "I", "waste"], correct: "I am reducing waste" },
            { words: ["old", "reusing", "are", "jars", "They"], correct: "They are reusing old jars" },
            { words: ["air", "dirty", "is", "The"], correct: "The air is dirty" },
            { words: ["know", "answer", "the", "I"], correct: "I know the answer" },
            { words: ["is", "factory", "The", "smoke", "making"], correct: "The factory is making smoke" },
            { words: ["are", "volunteers", "The", "helping"], correct: "The volunteers are helping" },
            { words: ["not", "am", "I", "paper", "wasting"], correct: "I am not wasting paper" },
            { words: ["you", "turning", "the", "tap", "off", "Are"], correct: "Are you turning off the tap?" },
            { words: ["the", "picking", "She", "trash", "up", "is"], correct: "She is picking up the trash" },
            { words: ["collecting", "We", "cans", "are"], correct: "We are collecting cans" },
            { words: ["beautiful", "The", "is", "world"], correct: "The world is beautiful" },
            { words: ["stopping", "is", "pollution", "He"], correct: "He is stopping pollution" },
            { words: ["understand", "I", "problem", "the"], correct: "I understand the problem" },
            { words: ["animals", "wild", "protecting", "are", "They"], correct: "They are protecting wild animals" },
            { words: ["believe", "I", "you"], correct: "I believe you" },
            { words: ["making", "a", "are", "difference", "You"], correct: "You are making a difference" },
            { words: ["doing", "are", "What", "they"], correct: "What are they doing?" },
            { words: ["nature", "hurting", "is", "Consumerism"], correct: "Consumerism is hurting nature" },
            { words: ["fresh", "air", "the", "Is"], correct: "Is the air fresh?" },
            { words: ["right", "working", "am", "I", "now"], correct: "I am working right now" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES (40 ITEMS) ---
        2: [
            { lines: ["What are you doing?", "I am collecting plastic bottles.", "Why are you doing that?", "I am recycling them."], order: [0, 1, 2, 3] },
            { lines: ["Look at that man over there!", "What is he doing?", "He is throwing away a plastic bag.", "Oh no! He is polluting the park."], order: [0, 1, 2, 3] },
            { lines: ["Are the volunteers planting trees?", "Yes, they are.", "They are helping nature a lot.", "Let's go and help them!"], order: [0, 1, 2, 3] },
            { lines: ["Why are you using a glass jar?", "Because I am reusing it for my pens.", "That is a great idea.", "Yes, I am reducing waste."], order: [0, 1, 2, 3] },
            { lines: ["Is your brother helping in the garden?", "No, he isn't.", "What is he doing at this moment?", "He is sleeping."], order: [0, 1, 2, 3] },
            { lines: ["Look around you!", "Nature is beautiful right now.", "Yes, the river is very clean.", "I love spending time here."], order: [0, 1, 2, 3] },
            { lines: ["Are you wasting water, Albert?", "No, I am not wasting water.", "What are you doing then?", "I am turning off the tap."], order: [0, 1, 2, 3] },
            { lines: ["Do you want a plastic bag?", "No, thank you. I do not need it.", "How are you carrying your groceries?", "I am using a reusable bag."], order: [0, 1, 2, 3] },
            { lines: ["Are we making a difference today?", "Yes, we are cleaning the beach.", "Look, the sea is blue!", "We are protecting the sea animals."], order: [0, 1, 2, 3] },
            { lines: ["Why is that man running?", "He is chasing his dog.", "Where is the dog?", "The dog is swimming in the river!"], order: [0, 1, 2, 3] },
            { lines: ["What is happening to the planet?", "Consumerism is hurting the Earth.", "We need to take action right now.", "I agree, we must protect our world."], order: [0, 1, 2, 3] },
            { lines: ["Are they recycling the paper?", "Yes, they are putting it in the blue bin.", "That helps save the trees.", "Yes, planting trees is very important too."], order: [0, 1, 2, 3] },
            { lines: ["I am throwing away this old toy.", "Wait! Don't put it in the garbage.", "Why not? It is made of plastic.", "We can recycle it or donate it."], order: [0, 1, 2, 3] },
            { lines: ["The air is very dirty today.", "Yes, the factories are polluting the sky.", "I want to breathe fresh air.", "We must stop this pollution."], order: [0, 1, 2, 3] },
            { lines: ["Are you coming to the park?", "Yes, I am coming!", "We are collecting trash right now.", "Okay, I have my reusable gloves ready."], order: [0, 1, 2, 3] },
            { lines: ["I love this forest.", "I know. It is so green and full of life.", "The birds are singing at this moment.", "I want to protect it forever."], order: [0, 1, 2, 3] },
            { lines: ["What are the children doing?", "They are picking up the trash.", "Are they helping the environment?", "Yes, they are making a big difference."], order: [0, 1, 2, 3] },
            { lines: ["Is she planting a flower?", "No, she is planting a small tree.", "That is great for nature.", "Trees clean the air we breathe."], order: [0, 1, 2, 3] },
            { lines: ["Do you understand the problem?", "Yes, I understand it perfectly.", "We are wasting too much water.", "We need to turn off the tap when we brush our teeth."], order: [0, 1, 2, 3] },
            { lines: ["Look at the river.", "The water is flowing so fast.", "Are there any fish in it?", "Yes, the fish are swimming happily."], order: [0, 1, 2, 3] },
            { lines: ["What is she doing with the glass bottle?", "She is washing it.", "Is she reusing it?", "Yes, she is making a flower vase."], order: [0, 1, 2, 3] },
            { lines: ["Are you saving energy?", "Yes, I am turning off the lights.", "That is a very good habit.", "We must protect the planet's resources."], order: [0, 1, 2, 3] },
            { lines: ["I am wanting a plastic bag, please.", "Wait! \"Want\" is a state verb.", "Oh, you are right. I want a plastic bag.", "But you should use a reusable bag instead!"], order: [0, 1, 2, 3] },
            { lines: ["What are they doing with the garbage?", "They are putting it in the correct bins.", "Are they separating plastic and paper?", "Yes, they are sorting everything."], order: [0, 1, 2, 3] },
            { lines: ["Is the cat sleeping?", "No, it is running in the garden.", "Why is it running?", "It is chasing a butterfly."], order: [0, 1, 2, 3] },
            { lines: ["Consumerism is a big problem.", "People are buying too many things.", "And they are throwing away a lot of trash.", "We need to reduce what we buy."], order: [0, 1, 2, 3] },
            { lines: ["I believe we can help the Earth.", "Yes, every small action counts.", "I am picking up garbage on my street.", "You are a true Earth Hero!"], order: [0, 1, 2, 3] },
            { lines: ["What is the factory doing?", "It is making a lot of smoke.", "It is polluting the air we breathe.", "We must tell them to stop."], order: [0, 1, 2, 3] },
            { lines: ["Are you drinking water from a plastic bottle?", "No, I am using my reusable bottle.", "That is much better for the environment.", "I know. I hate plastic pollution."], order: [0, 1, 2, 3] },
            { lines: ["Why are you stopping the car?", "I am stopping because there is an animal.", "Oh, I see it! It is a wild fox.", "We must protect wild animals."], order: [0, 1, 2, 3] },
            { lines: ["What is Celine doing right now?", "She is writing a letter about nature.", "Who is she writing to?", "She is writing to the mayor."], order: [0, 1, 2, 3] },
            { lines: ["The students are studying the environment.", "Are they learning about recycling?", "Yes, they are reading a book about it.", "That is very important for their future."], order: [0, 1, 2, 3] },
            { lines: ["Do you need a ride to the park?", "No, I am riding my bicycle.", "That is a great way to save energy.", "Yes, and it does not pollute the air!"], order: [0, 1, 2, 3] },
            { lines: ["I love this beautiful planet.", "Me too. We live in a wonderful world.", "But we are destroying it with garbage.", "We must clean it up at this moment."], order: [0, 1, 2, 3] },
            { lines: ["Is he watering the plants?", "Yes, he is taking care of the garden.", "The plants are growing fast.", "They love the fresh water."], order: [0, 1, 2, 3] },
            { lines: ["What are the volunteers doing at the beach?", "They are picking up plastic bags.", "It is sad that people throw trash in the sand.", "Yes, but the volunteers are doing a great job."], order: [0, 1, 2, 3] },
            { lines: ["I know the answer to the problem.", "What is the solution?", "We must stop using single-use plastic.", "I completely agree with you."], order: [0, 1, 2, 3] },
            { lines: ["Are they making a new park here?", "Yes, they are planting many trees.", "That will bring more birds to the area.", "Nature is coming back to the city!"], order: [0, 1, 2, 3] },
            { lines: ["Why is she washing that old bottle?", "She is cleaning it so she can reuse it.", "That is a very smart idea.", "Reusing is as important as recycling."], order: [0, 1, 2, 3] },
            { lines: ["Are you listening to the birds?", "Yes, they are chirping in the trees.", "The sound of nature is so relaxing.", "We must protect their home."], order: [0, 1, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS (40 ITEMS) ---
        3: [
            { q: "Are you recycling the plastic bottles?", options: ["Yes, I am.", "Yes, I recycling.", "Yes, I is.", "Yes, I are."], a: "Yes, I am." },
            { q: "Is he throwing away the bag?", options: ["Yes, he is.", "Yes, he are.", "Yes, he throwing.", "Yes, he be."], a: "Yes, he is." },
            { q: "Are they planting trees now?", options: ["Yes, they are.", "Yes, they is.", "Yes, they am.", "Yes, they planting."], a: "Yes, they are." },
            { q: "Is it raining at this moment?", options: ["No, it isn't.", "No, it aren't.", "No, it not.", "No, it don't."], a: "No, it isn't." },
            { q: "Am I helping the planet?", options: ["Yes, you are.", "Yes, you am.", "Yes, you is.", "Yes, you be."], a: "Yes, you are." },
            { q: "Is she cleaning the park?", options: ["Yes, she is.", "Yes, she are.", "Yes, she clean.", "Yes, she am."], a: "Yes, she is." },
            { q: "Are we making a difference?", options: ["Yes, we are.", "Yes, we am.", "Yes, we is.", "Yes, we making."], a: "Yes, we are." },
            { q: "Is the man polluting the river?", options: ["Yes, he is.", "Yes, the man are.", "No, he aren't.", "Yes, he polluting."], a: "Yes, he is." },
            { q: "Are you using a reusable bag?", options: ["Yes, I am.", "Yes, I is.", "Yes, I using.", "No, I am."], a: "Yes, I am." },
            { q: "Is the cat drinking water?", options: ["Yes, it is.", "Yes, it am.", "Yes, it are.", "Yes, it drink."], a: "Yes, it is." },
            { q: "Are the children playing?", options: ["Yes, they are.", "Yes, they is.", "Yes, they am.", "Yes, they play."], a: "Yes, they are." },
            { q: "Is the teacher helping?", options: ["Yes, she is.", "Yes, she am.", "Yes, she are.", "Yes, she help."], a: "Yes, she is." },
            { q: "Are you taking action?", options: ["Yes, I am.", "Yes, I are.", "Yes, I is.", "Yes, I take."], a: "Yes, I am." },
            { q: "Is the planet Earth calling?", options: ["Yes, it is.", "Yes, it am.", "Yes, it are.", "No, it aren't."], a: "Yes, it is." },
            { q: "Are the birds singing?", options: ["Yes, they are.", "Yes, they is.", "Yes, they am.", "Yes, they sing."], a: "Yes, they are." },
            { q: "Is the river flowing?", options: ["Yes, it is.", "Yes, it are.", "Yes, it am.", "Yes, it flowing."], a: "Yes, it is." },
            { q: "Are we saving energy?", options: ["Yes, we are.", "Yes, we is.", "Yes, we am.", "Yes, we save."], a: "Yes, we are." },
            { q: "Is the sun shining?", options: ["Yes, it is.", "Yes, it are.", "Yes, it am.", "Yes, it shine."], a: "Yes, it is." },
            { q: "Are the volunteers picking up trash?", options: ["Yes, they are.", "Yes, they is.", "Yes, they am.", "Yes, they be."], a: "Yes, they are." },
            { q: "Is the garbage bin overflowing?", options: ["Yes, it is.", "Yes, it are.", "Yes, it am.", "Yes, it be."], a: "Yes, it is." },
            { q: "What are the volunteers planting in the park?", options: ["Trees.", "Plastic bags.", "Cars.", "Trash."], a: "Trees." },
            { q: "Where do wild fish live?", options: ["In the river.", "In the tree.", "In the air.", "In the garbage bin."], a: "In the river." },
            { q: "Why are you using a reusable bag?", options: ["To protect the planet.", "To pollute the water.", "To throw away food.", "To waste energy."], a: "To protect the planet." },
            { q: "What is the boy doing with his trash?", options: ["Putting it in the garbage bin.", "Planting it in the ground.", "Drinking it.", "Wearing it."], a: "Putting it in the garbage bin." },
            { q: "Which one of these is a wild animal?", options: ["A tiger.", "A plastic bottle.", "A tree.", "A river."], a: "A tiger." },
            { q: "What happens when factories produce dark smoke?", options: ["They pollute the air.", "They clean the park.", "They save the water.", "They recycle paper."], a: "They pollute the air." },
            { q: "Why do we recycle paper and glass?", options: ["To help the environment.", "To destroy nature.", "To waste water.", "To increase consumerism."], a: "To help the environment." },
            { q: "If you want to save water, what do you do?", options: ["Turn off the tap.", "Leave the tap open.", "Pollute the river.", "Throw away plastic."], a: "Turn off the tap." },
            { q: "Who is considered a champion for the environment?", options: ["A person who recycles.", "A person who throws trash on the floor.", "A person who wastes water.", "A person who cuts down trees."], a: "A person who recycles." },
            { q: "Is the Earth our home planet?", options: ["Yes, it is where we live.", "No, we live on the sun.", "Yes, it is a plastic bag.", "No, it is a garbage bin."], a: "Yes, it is where we live." },
            { q: "What is the exact opposite of \"Save\"?", options: ["Waste.", "Help.", "Protect.", "Recycle."], a: "Waste." },
            { q: "What material is a disposable water bottle usually made of?", options: ["Plastic.", "Nature.", "Air.", "Water."], a: "Plastic." },
            { q: "Why do we turn off the lights when we leave a room?", options: ["To save energy.", "To see the stars better.", "To plant flowers.", "To waste money."], a: "To save energy." },
            { q: "Is a plastic bottle good for the environment if thrown in the sea?", options: ["No, it is pollution.", "Yes, fish eat it.", "Yes, it cleans the water.", "No, it is a tree."], a: "No, it is pollution." },
            { q: "Where should garbage go?", options: ["In the trash can.", "In the river.", "In the sky.", "On the grass."], a: "In the trash can." },
            { q: "What do plants need to grow?", options: ["Water and soil.", "Plastic and smog.", "Garbage and smoke.", "Consumerism."], a: "Water and soil." },
            { q: "Is air pollution good for your health?", options: ["No, it is very bad.", "Yes, it is healthy.", "Yes, it is fresh.", "No, it is a flower."], a: "No, it is very bad." },
            { q: "What do we do with a reusable bag?", options: ["Use it many times for shopping.", "Throw it in the ocean.", "Eat it for lunch.", "Burn it in a fire."], a: "Use it many times for shopping." },
            { q: "Can a tree help the planet?", options: ["Yes, it gives us fresh air.", "No, it pollutes the river.", "Yes, it produces plastic.", "No, it creates garbage."], a: "Yes, it gives us fresh air." },
            { q: "How can we protect wild animals?", options: ["By protecting their natural environment.", "By polluting the air they breathe.", "By wasting water in the rivers.", "By throwing trash in the forests."], a: "By protecting their natural environment." }
        ],

        // --- TYPE 4: FIND MEANING (40 ITEMS) ---
        4: [
            { sent: "We must **protect** the forest from fires.", word: "protect", options: ["Destruir", "Proteger", "Poluir", "Desperdiçar"], a: "Proteger", def: "To keep safe from harm or injury." },
            { sent: "Please **save** water when you brush your teeth.", word: "save", options: ["Gastar", "Salvar / Economizar", "Sujar", "Quebrar"], a: "Salvar / Economizar", def: "To avoid wasting something." },
            { sent: "I always **recycle** my plastic bottles.", word: "recycle", options: ["Compro", "Reciclar", "Jogo fora", "Queimo"], a: "Reciclar", def: "To convert waste into reusable material." },
            { sent: "They are **planting** new trees in the park.", word: "planting", options: ["Cortando", "Plantar", "Olhando", "Pintando"], a: "Plantar", def: "To put a seed or plant in the ground so that it can grow." },
            { sent: "Cars **pollute** the air we breathe.", word: "pollute", options: ["Limpar", "Poluir", "Respirar", "Soprar"], a: "Poluir", def: "To contaminate with harmful or poisonous substances." },
            { sent: "We live on **planet** Earth.", word: "planet", options: ["Carro", "Planeta", "Casa", "Estrela"], a: "Planeta", def: "A celestial body moving in an orbit round a star." },
            { sent: "Pick up the **garbage** from the floor.", word: "garbage", options: ["Flores", "Lixo", "Árvores", "Água"], a: "Lixo", def: "Wasted or spoiled food and other refuse." },
            { sent: "The fish live in the **river**.", word: "river", options: ["Estrada", "Rio", "Montanha", "Lagoa"], a: "Rio", def: "A large natural stream of water flowing in a channel to the sea." },
            { sent: "I use a reusable **bag** for groceries.", word: "bag", options: ["Sapato", "Sacola", "Chapéu", "Caneta"], a: "Sacola", def: "A container made of flexible material with an opening at the top." },
            { sent: "We love spending time in **nature**.", word: "nature", options: ["Cidade", "Natureza", "Escola", "Fábrica"], a: "Natureza", def: "The phenomena of the physical world collectively, including plants and animals." },
            { sent: "Can you **help** me pick up this trash?", word: "help", options: ["Ajudar", "Ignorar", "Quebrar", "Rir"], a: "Ajudar", def: "To give assistance or support to someone." },
            { sent: "We can **reuse** this glass jar.", word: "reuse", options: ["Quebrar", "Reutilizar", "Jogar fora", "Esconder"], a: "Reutilizar", def: "To use something again or more than once." },
            { sent: "We must **reduce** the amount of plastic we use.", word: "reduce", options: ["Aumentar", "Reduzir", "Criar", "Comprar"], a: "Reduzir", def: "To make smaller or less in amount or degree." },
            { sent: "The volunteers will **clean** the beach.", word: "clean", options: ["Sujar", "Limpar", "Pintar", "Nadar"], a: "Limpar", def: "To remove dirt, marks, or mess from something." },
            { sent: "Do not **waste** food!", word: "waste", options: ["Comer", "Desperdiçar", "Cozinhar", "Guardar"], a: "Desperdiçar", def: "To use or expend carelessly or to no purpose." },
            { sent: "He wants to **throw away** the old toys.", word: "throw away", options: ["Guardar", "Jogar fora", "Lavar", "Doar"], a: "Jogar fora", def: "To discard something as useless or unwanted." },
            { sent: "We must protect our **environment**.", word: "environment", options: ["Dinheiro", "Meio ambiente", "Carro", "Prédio"], a: "Meio ambiente", def: "The surroundings or conditions in which a person, animal, or plant lives." },
            { sent: "The **world** is very big.", word: "world", options: ["Mundo", "País", "Cidade", "Rua"], a: "Mundo", def: "The earth, together with all of its countries and peoples." },
            { sent: "That is a very tall **tree**.", word: "tree", options: ["Árvore", "Flor", "Pedra", "Casa"], a: "Árvore", def: "A woody perennial plant with a single stem or trunk." },
            { sent: "This **plant** needs more water to grow.", word: "plant", options: ["Planta", "Pedra", "Animal", "Nuvem"], a: "Planta", def: "A living organism such as trees, shrubs, and grasses." },
            { sent: "The lion is a beautiful **animal**.", word: "animal", options: ["Inseto", "Animal", "Planta", "Pedra"], a: "Animal", def: "A living organism that feeds on organic matter." },
            { sent: "We live on **Earth**.", word: "Earth", options: ["Marte", "Terra", "Lua", "Sol"], a: "Terra", def: "The planet on which we live." },
            { sent: "I need to drink some **water**.", word: "water", options: ["Leite", "Água", "Suco", "Refrigerante"], a: "Água", def: "A colorless, transparent liquid that forms the seas and rivers." },
            { sent: "The **air** is fresh today.", word: "air", options: ["Água", "Ar", "Fogo", "Terra"], a: "Ar", def: "The invisible gaseous substance surrounding the earth." },
            { sent: "The **trash** smells bad.", word: "trash", options: ["Lixo", "Perfume", "Comida", "Flor"], a: "Lixo", def: "Waste material or things that are no longer wanted." },
            { sent: "There is too much **pollution** in the city.", word: "pollution", options: ["Poluição", "Limpeza", "Água", "Natureza"], a: "Poluição", def: "The presence of harmful substances in the environment." },
            { sent: "This toy is made of **plastic**.", word: "plastic", options: ["Vidro", "Plástico", "Madeira", "Papel"], a: "Plástico", def: "A synthetic material made from a wide range of organic polymers." },
            { sent: "Can I have a **bottle** of water?", word: "bottle", options: ["Copo", "Garrafa", "Prato", "Faca"], a: "Garrafa", def: "A container, typically made of glass or plastic, used for storing liquids." },
            { sent: "Excessive **consumerism** damages the planet.", word: "consumerism", options: ["Consumismo", "Reciclagem", "Proteção", "Limpeza"], a: "Consumismo", def: "The preoccupation of society with the acquisition of consumer goods." },
            { sent: "I am studying **right now**.", word: "right now", options: ["Ontem", "Agora mesmo", "Amanhã", "Mais tarde"], a: "Agora mesmo", def: "At this precise moment." },
            { sent: "She is sleeping **at this moment**.", word: "at this moment", options: ["Neste momento", "Nunca", "Sempre", "No passado"], a: "Neste momento", def: "Currently; happening now." },
            { sent: "Just **look around you** and see the beauty.", word: "look around you", options: ["Feche os olhos", "Olhe ao seu redor", "Corra rápido", "Fale alto"], a: "Olhe ao seu redor", def: "To observe the things or people in your vicinity." },
            { sent: "You can **make a difference** by recycling.", word: "make a difference", options: ["Fazer igual", "Fazer a diferença", "Ignorar tudo", "Causar problemas"], a: "Fazer a diferença", def: "To have a significant positive effect on a situation." },
            { sent: "It is time to **take action** to save the Earth.", word: "take action", options: ["Dormir muito", "Agir / Tomar atitude", "Chorar", "Fugir"], a: "Agir / Tomar atitude", def: "To do something to achieve an aim or deal with a problem." },
            { sent: "Say no to single-use **plastic bags**.", word: "plastic bags", options: ["Sacolas plásticas", "Garrafas de vidro", "Caixas de papelão", "Sacolas de pano"], a: "Sacolas plásticas", def: "Bags made of thin plastic material, often used for shopping." },
            { sent: "Bring your **reusable bag** to the supermarket.", word: "reusable bag", options: ["Sacola reutilizável", "Saco de lixo", "Garrafa plástica", "Copo de vidro"], a: "Sacola reutilizável", def: "A bag that can be used many times, often made of cloth." },
            { sent: "The Earth is our beautiful **home**.", word: "home", options: ["Casa / Lar", "Escola", "Carro", "Loja"], a: "Casa / Lar", def: "The place where one lives permanently." },
            { sent: "They are **helping** the animals.", word: "helping", options: ["Machucando", "Ajudando", "Ignorando", "Comendo"], a: "Ajudando", def: "Giving assistance or support to someone or something." },
            { sent: "The smoke is **polluting** the sky.", word: "polluting", options: ["Limpando", "Poluindo", "Pintando", "Escondendo"], a: "Poluindo", def: "Contaminating the environment with harmful substances." },
            { sent: "He is **wasting** fresh water.", word: "wasting", options: ["Desperdiçando", "Poupando", "Bebendo", "Fervendo"], a: "Desperdiçando", def: "Using or expending carelessly." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 ITEMS) ---
        5: [
            { sent: "I am **makeing** a difference today.", correct: "making" },
            { sent: "She **are** planting a tree in the garden.", correct: "is" },
            { sent: "They are **stoping** the pollution.", correct: "stopping" },
            { sent: "We are **no** wasting water.", correct: "not" },
            { sent: "**Is** you helping the environment?", correct: "Are" },
            { sent: "He **am** cleaning the playground.", correct: "is" },
            { sent: "What **is** they doing with the trash?", correct: "are" },
            { sent: "I am **saveing** energy right now.", correct: "saving" },
            { sent: "You are **throw** away the plastic bag!", correct: "throwing" },
            { sent: "She is **puting** the garbage in the bin.", correct: "putting" },
            { sent: "It **are** raining heavily today.", correct: "is" },
            { sent: "I am **wanting** to help the animals.", correct: "want" },
            { sent: "They are **useing** reusable bags at the store.", correct: "using" },
            { sent: "We **is** recycling paper and glass.", correct: "are" },
            { sent: "He **not is** wasting food.", correct: "is not" },
            { sent: "**Are** she **comeing** to the park?", correct: "Is she coming" },
            { sent: "I am **colect** the plastic bottles.", correct: "collecting" },
            { sent: "The volunteers **is** helping nature.", correct: "are" },
            { sent: "We are **reuseing** the old glass jars.", correct: "reusing" },
            { sent: "**Am** they taking action right now?", correct: "Are" },
            { sent: "I **is** looking around the beautiful forest.", correct: "am" },
            { sent: "She is **polute** the clean river.", correct: "polluting" },
            { sent: "The world **are** changing very fast.", correct: "is" },
            { sent: "You **am help** the planet.", correct: "are helping" },
            { sent: "They **is** not throwing trash on the floor.", correct: "are" },
            { sent: "He is **runing** in the park to pick up litter.", correct: "running" },
            { sent: "She **is know** the answer to the problem.", correct: "knows" },
            { sent: "We are **planing** a new garden.", correct: "planning" },
            { sent: "I **am loveing** this green nature.", correct: "love" },
            { sent: "They **is** cleaning the beach this morning.", correct: "are" },
            { sent: "Are you **recycle** those aluminum cans?", correct: "recycling" },
            { sent: "The man **are** throwing garbage out the window.", correct: "is" },
            { sent: "We **am plant** beautiful flowers.", correct: "are planting" },
            { sent: "I **is protect** the wild animals.", correct: "am protecting" },
            { sent: "She **are save** the ocean.", correct: "is saving" },
            { sent: "They **am clean** the dirty street.", correct: "are cleaning" },
            { sent: "He is **desperdiçando** fresh water!", correct: "wasting" },
            { sent: "The factory is **poluindo** the fresh air.", correct: "polluting" },
            { sent: "You **is takeing** action today.", correct: "are taking" },
            { sent: "We **are need** a clean environment.", correct: "need" }
        ],

        
        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Group 1
            { pairs: [{a: "What are you doing?", b: "I am collecting plastic bottles."}, {a: "Is he throwing away garbage?", b: "Yes, he is polluting the park."}, {a: "Are they planting trees?", b: "Yes, they are helping nature."}, {a: "Do you like nature?", b: "Yes, I love this park."}, {a: "Why is she running?", b: "She is chasing her dog."}] },
            // Group 2
            { pairs: [{a: "What is Celine recycling?", b: "She is recycling plastic and glass."}, {a: "Are we saving water right now?", b: "Yes, we are turning off the tap."}, {a: "Is it raining at this moment?", b: "No, the sun is shining."}, {a: "Do you want to protect the planet?", b: "Yes, I want to make a difference."}, {a: "What are the volunteers doing?", b: "They are picking up the trash."}] },
            // Group 3
            { pairs: [{a: "Are you using a plastic bag?", b: "No, I am using a reusable bag."}, {a: "Why are the birds flying away?", b: "Because the factory is making smoke."}, {a: "What is he planting?", b: "He is planting a beautiful flower."}, {a: "Do you understand the problem?", b: "Yes, I know we are wasting water."}, {a: "Are they throwing garbage in the river?", b: "Yes, and that is very bad."}] },
            // Group 4
            { pairs: [{a: "What are we doing today?", b: "We are cleaning the beach."}, {a: "Is she saving energy?", b: "Yes, she is turning off the lights."}, {a: "Does he want to help?", b: "Yes, he wants to take action."}, {a: "Why are you stopping?", b: "Because I see a wild animal."}, {a: "Is the air fresh today?", b: "No, cars are polluting the air."}] },
            // Group 5
            { pairs: [{a: "What is the dog doing?", b: "It is swimming in the river."}, {a: "Are you reducing waste?", b: "Yes, I am reusing old jars."}, {a: "Do you believe we can save the Earth?", b: "Yes, I believe we can."}, {a: "Is the baby sleeping?", b: "Yes, he is sleeping at this moment."}, {a: "Why are they collecting cans?", b: "Because they are recycling them."}] },
            // Group 6
            { pairs: [{a: "What are you looking at?", b: "I am looking at the green trees."}, {a: "Is Consumerism hurting the planet?", b: "Yes, we are buying too many things."}, {a: "Are we making a difference?", b: "Yes, our actions are helping the world."}, {a: "Do you know the answer?", b: "Yes, I understand the lesson."}, {a: "What is she washing?", b: "She is washing a glass bottle to reuse it."}] },
            // Group 7
            { pairs: [{a: "Why is the water dirty?", b: "Because people are throwing trash in it."}, {a: "Are you protecting the forest?", b: "Yes, we are planting new plants."}, {a: "What are the children doing?", b: "They are playing in the clean park."}, {a: "Do you love the Earth?", b: "Yes, it is our beautiful home."}, {a: "Is he wasting food?", b: "Yes, he is throwing away his lunch."}] },
            // Group 8
            { pairs: [{a: "What is polluting the sky?", b: "The smoke from the factory is polluting it."}, {a: "Are they taking action right now?", b: "Yes, they are cleaning the street."}, {a: "Why are you buying a reusable bag?", b: "To stop using plastic bags."}, {a: "Do you need a plastic bottle?", b: "No, I have my own water bottle."}, {a: "What is the gardener doing?", b: "He is watering the green plants."}] },
            // Group 9
            { pairs: [{a: "Are you coming to the park?", b: "Yes, I am coming right now."}, {a: "What is the earth calling for?", b: "It is calling for our help."}, {a: "Is she picking up the plastic?", b: "Yes, she is separating the garbage."}, {a: "Do you believe in nature?", b: "Yes, I think nature is amazing."}, {a: "What are the fish doing?", b: "They are swimming in the clean river."}] },
            // Group 10
            { pairs: [{a: "Are we throwing away paper?", b: "No, we are recycling it."}, {a: "What are the cars doing?", b: "They are polluting the fresh air."}, {a: "Is the world changing?", b: "Yes, the environment is getting worse."}, {a: "Do you want to clean the playground?", b: "Yes, I want to help the school."}, {a: "Why are you looking around?", b: "I am seeing the beauty of nature."}] },
            // Group 11
            { pairs: [{a: "Look at all this", b: "garbage on the floor!"}, {a: "I am collecting the", b: "plastic bottles to recycle."}, {a: "The volunteers over there", b: "are planting new trees."}, {a: "We are making", b: "a difference today."}, {a: "He is polluting", b: "the park with his trash."}] },
            // Group 12
            { pairs: [{a: "Right now, I am", b: "studying in the library."}, {a: "At this moment, she", b: "is sleeping in her bed."}, {a: "Look around you and", b: "see the beauty of nature."}, {a: "It is time to", b: "take action and help."}, {a: "Say no to", b: "single-use plastic bags."}] },
            // Group 13
            { pairs: [{a: "We are turning off", b: "the tap to save water."}, {a: "The dog is swimming", b: "in the clean river."}, {a: "I am using a", b: "reusable bag for shopping."}, {a: "The factory is producing", b: "dark smoke in the air."}, {a: "The earth is our", b: "beautiful planet and home."}] },
            // Group 14
            { pairs: [{a: "I love spending time", b: "in nature."}, {a: "They are picking up", b: "the trash from the sand."}, {a: "We are reducing", b: "plastic waste every day."}, {a: "She is reusing", b: "an old glass jar."}, {a: "I want to protect", b: "the wild animals."}] },
            // Group 15
            { pairs: [{a: "The birds are singing", b: "in the tall trees."}, {a: "We are not wasting", b: "water or energy."}, {a: "He is throwing away", b: "a food wrapper."}, {a: "You are protecting", b: "the green forest."}, {a: "I know that we", b: "must save the earth."}] },
            // Group 16
            { pairs: [{a: "The air is very", b: "dirty because of the cars."}, {a: "The water is flowing", b: "fast in the river."}, {a: "Consumerism is hurting", b: "the natural environment."}, {a: "We are sorting the", b: "garbage into correct bins."}, {a: "She is watering the", b: "plants in the garden."}] },
            // Group 17
            { pairs: [{a: "I understand the", b: "problem with pollution."}, {a: "They are making a", b: "great difference in the world."}, {a: "I am looking at", b: "the beautiful landscape."}, {a: "We do not need", b: "any more plastic bottles."}, {a: "He is chasing his", b: "dog in the park."}] },
            // Group 18
            { pairs: [{a: "The children are running", b: "on the green grass."}, {a: "I believe we can", b: "help the planet right now."}, {a: "She is cleaning the", b: "playground at the school."}, {a: "We are collecting", b: "cans and paper."}, {a: "The world is changing", b: "very fast today."}] },
            // Group 19
            { pairs: [{a: "Are you helping", b: "the environment today?"}, {a: "I am bringing my", b: "own water bottle."}, {a: "They are stopping", b: "the car to look at the animal."}, {a: "We are turning off", b: "the lights to save energy."}, {a: "Nature needs our", b: "help at this moment."}] },
            // Group 20
            { pairs: [{a: "The man is dropping", b: "trash on the street."}, {a: "We are planting a", b: "small tree in the yard."}, {a: "She is washing the", b: "bottle to reuse it."}, {a: "I want to breathe", b: "fresh and clean air."}, {a: "The fish are swimming", b: "in the clear water."}] },
            // Group 21
            { pairs: [{a: "Help", b: "Ajudar"}, {a: "Protect", b: "Proteger"}, {a: "Save", b: "Salvar / economizar"}, {a: "Recycle", b: "Reciclar"}, {a: "Reuse", b: "Reutilizar"}] },
            // Group 22
            { pairs: [{a: "Reduce", b: "Reduzir"}, {a: "Clean", b: "Limpar"}, {a: "Plant", b: "Plantar"}, {a: "Pollute", b: "Poluir"}, {a: "Waste", b: "Desperdiçar"}] },
            // Group 23
            { pairs: [{a: "Throw away", b: "Jogar fora"}, {a: "Environment", b: "Meio ambiente"}, {a: "Planet", b: "Planeta"}, {a: "World", b: "Mundo"}, {a: "Nature", b: "Natureza"}] },
            // Group 24
            { pairs: [{a: "Tree", b: "Árvore"}, {a: "Plant (Noun)", b: "Planta"}, {a: "Animal", b: "Animal"}, {a: "Earth", b: "Terra"}, {a: "Water", b: "Água"}] },
            // Group 25
            { pairs: [{a: "Air", b: "Ar"}, {a: "River", b: "Rio"}, {a: "Garbage / Trash", b: "Lixo"}, {a: "Pollution", b: "Poluição"}, {a: "Plastic", b: "Plástico"}] },
            // Group 26
            { pairs: [{a: "Bottle", b: "Garrafa"}, {a: "Bag", b: "Sacola"}, {a: "Consumerism", b: "Consumismo"}, {a: "Right now", b: "Agora mesmo"}, {a: "At this moment", b: "Neste momento"}] },
            // Group 27
            { pairs: [{a: "Look around you", b: "Olhe ao seu redor"}, {a: "Make a difference", b: "Fazer a diferença"}, {a: "Take action", b: "Agir / tomar atitude"}, {a: "Plastic bags", b: "Sacolas plásticas"}, {a: "Reusable bag", b: "Sacola reutilizável"}] },
            // Group 28
            { pairs: [{a: "I am recycling", b: "Eu estou reciclando"}, {a: "We are helping", b: "Nós estamos ajudando"}, {a: "She is planting", b: "Ela está plantando"}, {a: "They are polluting", b: "Eles estão poluindo"}, {a: "He is throwing away", b: "Ele está jogando fora"}] },
            // Group 29
            { pairs: [{a: "Stop", b: "Parar"}, {a: "Look", b: "Olhar"}, {a: "Swimming", b: "Nadando"}, {a: "Running", b: "Correndo"}, {a: "Making", b: "Fazendo"}] },
            // Group 30
            { pairs: [{a: "I love nature", b: "Eu amo a natureza"}, {a: "I want to help", b: "Eu quero ajudar"}, {a: "I know the answer", b: "Eu sei a resposta"}, {a: "I believe you", b: "Eu acredito em você"}, {a: "I understand", b: "Eu entendo"}] },
            // Group 31
            { pairs: [{a: "Help", b: "Fazer algo bom por alguém ou pelo planeta (Ajudar)."}, {a: "Protect", b: "Manter a salvo, defender a floresta (Proteger)."}, {a: "Save", b: "Não gastar tudo, economizar água (Economizar/Salvar)."}, {a: "Recycle", b: "Fazer algo novo com lixo velho, como papel (Reciclar)."}, {a: "Reuse", b: "Usar a mesma coisa de novo, como um pote (Reutilizar)."}] },
            // Group 32
            { pairs: [{a: "Reduce", b: "Usar menos coisas, como menos plástico (Reduzir)."}, {a: "Clean", b: "Tirar a sujeira de um lugar, como o parque (Limpar)."}, {a: "Plant", b: "Colocar uma sementinha na terra para crescer (Plantar)."}, {a: "Pollute", b: "Sujar a água ou o ar com fumaça e lixo (Poluir)."}, {a: "Waste", b: "Gastar sem precisar, como deixar a água cair (Desperdiçar)."}] },
            // Group 33
            { pairs: [{a: "Throw away", b: "Colocar algo no lixo porque não quer mais (Jogar fora)."}, {a: "Environment", b: "O lugar onde as plantas, animais e nós vivemos (Meio ambiente)."}, {a: "Planet", b: "A Terra é o nosso, um grande globo no espaço (Planeta)."}, {a: "World", b: "Todos os países e pessoas juntos (Mundo)."}, {a: "Nature", b: "As árvores, rios e animais livres (Natureza)."}] },
            // Group 34
            { pairs: [{a: "Tree", b: "Uma planta muito grande e alta, com folhas verdes (Árvore)."}, {a: "Plant (Noun)", b: "O que cresce na terra e precisa de água (Planta)."}, {a: "Animal", b: "O cachorro, o leão, o peixe; não é planta (Animal)."}, {a: "Earth", b: "O chão que pisamos ou o nome do nosso planeta (Terra)."}, {a: "Water", b: "O líquido transparente que bebemos e que está nos rios (Água)."}] },
            // Group 35
            { pairs: [{a: "Air", b: "O que nós respiramos; não podemos ver (Ar)."}, {a: "River", b: "Muita água correndo até chegar ao mar (Rio)."}, {a: "Garbage", b: "O lixo que sobra das casas e escolas (Lixo)."}, {a: "Pollution", b: "A sujeira ruim que faz mal para a saúde (Poluição)."}, {a: "Plastic", b: "O material de que são feitas as garrafas de refrigerante (Plástico)."}] },
            // Group 36
            { pairs: [{a: "Bottle", b: "Um objeto usado para colocar água ou suco dentro (Garrafa)."}, {a: "Bag", b: "Usado para carregar compras do supermercado (Sacola)."}, {a: "Right now", b: "Acontece neste exato minuto (Agora mesmo)."}, {a: "Take action", b: "Levantar e fazer algo bom agora (Agir)."}, {a: "Difference", b: "Fazer algo que melhora o mundo (Diferença)."}] },
            // Group 37
            { pairs: [{a: "Present Continuous", b: "Usado para ações que estão acontecendo agora (am/is/are + ing)."}, {a: "State Verbs", b: "Verbos como \"love\" e \"want\" que não usam -ing (Verbos de estado)."}, {a: "I am", b: "Eu estou (fazendo algo agora)."}, {a: "She is", b: "Ela está (fazendo algo agora)."}, {a: "They are", b: "Eles estão (fazendo algo agora)."}] },
            // Group 38
            { pairs: [{a: "Stopping", b: "Parando (Ação de parar agora, note o duplo 'p')."}, {a: "Running", b: "Correndo (Ação de correr agora, note o duplo 'n')."}, {a: "Making", b: "Fazendo (Ação de fazer agora, sem o 'e' no final)."}, {a: "Love", b: "Amar (Sentimento, verbo de estado, não usa -ing)."}, {a: "Want", b: "Querer (Desejo, verbo de estado, não usa -ing)."}] },
            // Group 39
            { pairs: [{a: "Know", b: "Saber (Conhecimento, verbo de estado)."}, {a: "Believe", b: "Acreditar (Pensamento, verbo de estado)."}, {a: "Understand", b: "Entender (Compreensão, verbo de estado)."}, {a: "What", b: "O que (Usado em perguntas para saber uma coisa)."}, {a: "Why", b: "Por que (Usado em perguntas para saber o motivo)."}] },
            // Group 40
            { pairs: [{a: "Where", b: "Onde (Usado em perguntas para saber o lugar)."}, {a: "Who", b: "Quem (Usado em perguntas para saber a pessoa)."}, {a: "Are you?", b: "Você está? (Início de pergunta contínua)."}, {a: "Is he?", b: "Ele está? (Início de pergunta contínua)."}, {a: "Are they?", b: "Eles estão? (Início de pergunta contínua)."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 ITEMS) ---
        7: [
            { q: "What are you doing with those plastic bottles?", options: ["I am recycling them.", "I am a tree.", "They is plastic.", "We wants to help."], a: "I am recycling them." },
            { q: "Why is that man running?", options: ["He is chasing his dog.", "He want a dog.", "The dog are swimming.", "Because a tree."], a: "He is chasing his dog." },
            { q: "Where are they planting the new trees?", options: ["They are planting them in the park.", "They is planting in the park.", "I am plant a tree.", "In the garbage."], a: "They are planting them in the park." },
            { q: "What is Celine collecting?", options: ["She is collecting trash.", "She am collecting trash.", "She collect trash now.", "Trash is tree."], a: "She is collecting trash." },
            { q: "Why are we turning off the tap?", options: ["We are saving water.", "We is saving water.", "We saving water.", "Water are saving."], a: "We are saving water." },
            { q: "What is the factory doing?", options: ["It is polluting the air.", "It are polluting the air.", "It pollute the air right now.", "The air are dirty."], a: "It is polluting the air." },
            { q: "Who is helping nature?", options: ["The volunteers are helping nature.", "The volunteers is helping.", "Nature are helping.", "They helps nature now."], a: "The volunteers are helping nature." },
            { q: "What are you looking at?", options: ["I am looking at the beautiful river.", "I is looking at the river.", "I looking at the river.", "The river are clean."], a: "I am looking at the beautiful river." },
            { q: "Why are they using reusable bags?", options: ["Because they are reducing plastic waste.", "Because they is reducing waste.", "Because waste are bad.", "Because they reduces waste now."], a: "Because they are reducing plastic waste." },
            { q: "What is she throwing away?", options: ["She is throwing away a plastic bag.", "She are throwing away a bag.", "She throwing away a bag.", "The bag are throwing."], a: "She is throwing away a plastic bag." },
            { q: "Where is the dog swimming?", options: ["It is swimming in the clean river.", "It are swimming in the river.", "It swim in the river now.", "The river are swimming."], a: "It is swimming in the clean river." },
            { q: "What are we making today?", options: ["We are making a difference.", "We is making a difference.", "We making a difference.", "Difference are making."], a: "We are making a difference." },
            { q: "Why are you picking up the garbage?", options: ["Because I am cleaning the beach.", "Because I is cleaning.", "Because garbage are bad.", "Because I cleans now."], a: "Because I am cleaning the beach." },
            { q: "What is the boy planting?", options: ["He is planting a beautiful flower.", "He are planting a flower.", "He plant a flower now.", "The flower are planting."], a: "He is planting a beautiful flower." },
            { q: "Who is wasting water?", options: ["The man is wasting water.", "The man are wasting.", "Water are wasting.", "The man waste now."], a: "The man is wasting water." },
            { q: "Why is the planet calling?", options: ["Because it needs our help right now.", "Because it are calling.", "Because planet is help.", "Because it am calling."], a: "Because it needs our help right now." },
            { q: "What are they reusing?", options: ["They are reusing old glass jars.", "They is reusing jars.", "They reusing jars.", "The jars is old."], a: "They are reusing old glass jars." },
            { q: "Where are we taking action?", options: ["We are taking action in our city.", "We is taking action.", "We takes action now.", "City are taking action."], a: "We are taking action in our city." },
            { q: "Why are the birds singing?", options: ["Because they are happy in nature.", "Because they is happy.", "Because nature are beautiful.", "Because they sings now."], a: "Because they are happy in nature." },
            { q: "What is he stopping?", options: ["He is stopping the car.", "He are stopping the car.", "He stopping the car.", "The car are stopping."], a: "He is stopping the car." },
            { q: "What do you want to do?", options: ["I want to protect the earth.", "I am wanting to protect the earth.", "I wants to protect.", "I is want to protect."], a: "I want to protect the earth." },
            { q: "Why do you love nature?", options: ["Because it is beautiful.", "Because I am loving it.", "Because it are beautiful.", "Because nature love I."], a: "Because it is beautiful." },
            { q: "What are they collecting in the bags?", options: ["They are collecting plastic bottles.", "They is collecting plastic bottles.", "They collect plastic now.", "The bottles is plastic."], a: "They are collecting plastic bottles." },
            { q: "Where is she cleaning?", options: ["She is cleaning the school playground.", "She are cleaning.", "She clean the playground now.", "The playground are dirty."], a: "She is cleaning the school playground." },
            { q: "Why are we reducing consumerism?", options: ["Because it is hurting the planet.", "Because it are hurting the planet.", "Because it hurting.", "Because consumerism are bad."], a: "Because it is hurting the planet." },
            { q: "What is the smoke doing to the air?", options: ["It is polluting the fresh air.", "It are polluting the air.", "It pollute the air now.", "The air are smoke."], a: "It is polluting the fresh air." },
            { q: "Who is protecting the wild animals?", options: ["The volunteers are protecting them.", "The volunteers is protecting them.", "The animals is wild.", "The volunteers protects them now."], a: "The volunteers are protecting them." },
            { q: "What are you drinking?", options: ["I am drinking fresh water.", "I is drinking fresh water.", "I drink water now.", "Water are fresh."], a: "I am drinking fresh water." },
            { q: "Why is she turning off the lights?", options: ["She is saving energy.", "She are saving energy.", "She saving energy.", "Energy are saving."], a: "She is saving energy." },
            { q: "What do you know about recycling?", options: ["I know that it helps the earth.", "I am knowing that it helps.", "I knows it helps.", "Recycling are good."], a: "I know that it helps the earth." },
            { q: "Where is the trash going?", options: ["It is going into the garbage bin.", "It are going into the bin.", "It go into the bin now.", "The bin are full."], a: "It is going into the garbage bin." },
            { q: "Why are they running?", options: ["They are running to catch the bus.", "They is running.", "They runs now.", "The bus are fast."], a: "They are running to catch the bus." },
            { q: "What is the earth doing?", options: ["It is crying for our help.", "It are crying for help.", "It cry right now.", "The earth am big."], a: "It is crying for our help." },
            { q: "Do you believe we can save the world?", options: ["Yes, I believe we can.", "Yes, I am believing we can.", "Yes, I believes we can.", "Yes, the world are saved."], a: "Yes, I believe we can." },
            { q: "What are the cars doing to the street?", options: ["They are making a lot of noise.", "They is making noise.", "They makes noise now.", "The street are noisy."], a: "They are making a lot of noise." },
            { q: "Why are you picking up the plastic?", options: ["I am protecting the sea animals.", "I is protecting the animals.", "I protect animals now.", "The animals is sea."], a: "I am protecting the sea animals." },
            { q: "What is she carrying?", options: ["She is carrying a reusable bag.", "She are carrying a bag.", "She carry a bag now.", "The bag are reusable."], a: "She is carrying a reusable bag." },
            { q: "Where are the birds flying?", options: ["They are flying in the clean air.", "They is flying.", "They flies now.", "The air are clean."], a: "They are flying in the clean air." },
            { q: "What do you understand from this lesson?", options: ["I understand that nature is important.", "I am understanding that nature is important.", "I understands it.", "Nature are important."], a: "I understand that nature is important." },
            { q: "Why is the water dropping from the tap?", options: ["Because he is wasting water.", "Because he are wasting water.", "Because he waste water now.", "The water are dropping."], a: "Because he is wasting water." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 ITEMS) ---
        8: [
            { sent: "Look at all this **tree** on the floor! Put it in the bin.", wrong: "tree", options: ["garbage / trash", "planet", "air", "river"], a: "garbage / trash" },
            { sent: "We are **polluting** new trees in the park today.", wrong: "polluting", options: ["planting", "throwing", "wasting", "reducing"], a: "planting" },
            { sent: "Please turn off the tap. You are **protecting** water!", wrong: "protecting", options: ["wasting", "recycling", "helping", "saving"], a: "wasting" },
            { sent: "The volunteers are **wasting** the environment by cleaning the beach.", wrong: "wasting", options: ["protecting", "throwing", "polluting", "reducing"], a: "protecting" },
            { sent: "I am using a **plastic** bag so I can use it again tomorrow.", wrong: "plastic", options: ["reusable", "garbage", "wild", "dirty"], a: "reusable" },
            { sent: "The smoke from the cars is **cleaning** the fresh air.", wrong: "cleaning", options: ["polluting", "planting", "saving", "reusing"], a: "polluting" },
            { sent: "We must **destroy** the earth because it is our home.", wrong: "destroy", options: ["protect", "pollute", "waste", "throw away"], a: "protect" },
            { sent: "I am **throwing** old glass jars to hold my pencils.", wrong: "throwing", options: ["reusing", "wasting", "planting", "polluting"], a: "reusing" },
            { sent: "Let's pick up the **planet** from the sand.", wrong: "planet", options: ["garbage", "nature", "river", "air"], a: "garbage" },
            { sent: "The fish are swimming in the clean **air**.", wrong: "air", options: ["river", "tree", "bag", "garbage"], a: "river" },
            { sent: "She is **saving** the trash away in the bin.", wrong: "saving", options: ["throwing", "protecting", "helping", "reusing"], a: "throwing" },
            { sent: "We must **increase** the amount of plastic we use.", wrong: "increase", options: ["reduce", "pollute", "plant", "waste"], a: "reduce" },
            { sent: "The bird is sitting on the tall **water**.", wrong: "water", options: ["tree", "planet", "garbage", "plastic"], a: "tree" },
            { sent: "Consumerism helps the environment grow green.", wrong: "Consumerism", options: ["Nature", "Pollution", "Garbage", "Waste"], a: "Nature" },
            { sent: "I want to breathe fresh **plastic** in the morning.", wrong: "plastic", options: ["air", "water", "bag", "river"], a: "air" },
            { sent: "The **animal** is a beautiful planet we live on.", wrong: "animal", options: ["Earth", "tree", "river", "garbage"], a: "Earth" },
            { sent: "He is **recycling** the beautiful flowers in the garden.", wrong: "recycling", options: ["planting", "wasting", "polluting", "throwing"], a: "planting" },
            { sent: "We are taking **garbage** to make a difference!", wrong: "garbage", options: ["action", "pollution", "plastic", "smoke"], a: "action" },
            { sent: "Look around you and see the beauty of **pollution**.", wrong: "pollution", options: ["nature", "trash", "plastic", "waste"], a: "nature" },
            { sent: "Are you **polluting** energy by turning off the lights?", wrong: "polluting", options: ["saving", "wasting", "throwing", "planting"], a: "saving" },
            { sent: "I am **drinking** the garbage into the correct bins.", wrong: "drinking", options: ["collecting", "planting", "wasting", "polluting"], a: "collecting" },
            { sent: "The lion is a wild **plant**.", wrong: "plant", options: ["animal", "tree", "river", "earth"], a: "animal" },
            { sent: "She is washing the **tree** so she can drink water from it.", wrong: "tree", options: ["bottle", "bag", "air", "planet"], a: "bottle" },
            { sent: "We are **hurting** the animals by cleaning the forest.", wrong: "hurting", options: ["helping", "wasting", "polluting", "throwing"], a: "helping" },
            { sent: "I am **wanting** to save the planet. (State verb)", wrong: "wanting", options: ["want", "wants", "wanted", "wanting to"], a: "want" },
            { sent: "I am **loving** this green park. (State verb error)", wrong: "loving", options: ["love", "loves", "loved", "loving"], a: "love" },
            { sent: "The factory makes too much **nature** in the sky.", wrong: "nature", options: ["smoke", "water", "tree", "animal"], a: "smoke" },
            { sent: "The **river** is shining brightly today.", wrong: "river", options: ["sun", "tree", "plastic", "bag"], a: "sun" },
            { sent: "We do not need single-use **reusable** bags.", wrong: "reusable", options: ["plastic", "green", "wild", "clean"], a: "plastic" },
            { sent: "They are **saving** the park by leaving trash everywhere.", wrong: "saving", options: ["polluting", "helping", "planting", "cleaning"], a: "polluting" },
            { sent: "I **am believing** that we can make a difference. (State verb error)", wrong: "am believing", options: ["believe", "believes", "believed", "believing"], a: "believe" },
            { sent: "The students are **wasting** the playground with brooms.", wrong: "wasting", options: ["cleaning", "polluting", "planting", "throwing"], a: "cleaning" },
            { sent: "Drink plenty of fresh **air** to stay hydrated.", wrong: "air", options: ["water", "plastic", "tree", "earth"], a: "water" },
            { sent: "He is **planting** away the old wrapper.", wrong: "planting", options: ["throwing", "saving", "protecting", "reusing"], a: "throwing" },
            { sent: "The **planet** are singing in the forest.", wrong: "planet", options: ["birds", "rivers", "bottles", "bags"], a: "birds" },
            { sent: "We are **reducing** old cans to make new things.", wrong: "reducing", options: ["recycling", "wasting", "polluting", "planting"], a: "recycling" },
            { sent: "I **am knowing** the answer to this problem. (State verb error)", wrong: "am knowing", options: ["know", "knows", "knew", "knowing"], a: "know" },
            { sent: "The tiger is a beautiful **tree**.", wrong: "tree", options: ["animal", "plant", "river", "planet"], a: "animal" },
            { sent: "She is **reusing** the tap because the water is running.", wrong: "reusing", options: ["turning off", "polluting", "wasting", "throwing"], a: "turning off" },
            { sent: "At this **world**, I am studying English.", wrong: "world", options: ["moment", "planet", "nature", "environment"], a: "moment" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 ITEMS) ---
        9: [
            { audio: "What are you doing with those plastic bottles?", options: ["I am recycling them.", "I am a tree.", "They is plastic.", "We wants to help."], a: "I am recycling them." },
            { audio: "Why is that man running?", options: ["He is chasing his dog.", "He want a dog.", "The dog are swimming.", "Because a tree."], a: "He is chasing his dog." },
            { audio: "Where are they planting the new trees?", options: ["They are planting them in the park.", "They is planting in the park.", "I am plant a tree.", "In the garbage."], a: "They are planting them in the park." },
            { audio: "What is Celine collecting?", options: ["She is collecting trash.", "She am collecting trash.", "She collect trash now.", "Trash is tree."], a: "She is collecting trash." },
            { audio: "Why are we turning off the tap?", options: ["Because we are saving water.", "We is saving water.", "We saving water.", "Water are saving."], a: "Because we are saving water." },
            { audio: "What is the factory doing?", options: ["It is polluting the air.", "It are polluting the air.", "It pollute the air right now.", "The air are dirty."], a: "It is polluting the air." },
            { audio: "Who is helping nature today?", options: ["The volunteers are helping nature.", "The volunteers is helping.", "Nature are helping.", "They helps nature now."], a: "The volunteers are helping nature." },
            { audio: "What are you looking at right now?", options: ["I am looking at the beautiful river.", "I is looking at the river.", "I looking at the river.", "The river are clean."], a: "I am looking at the beautiful river." },
            { audio: "Why are they using reusable bags?", options: ["Because they are reducing plastic waste.", "Because they is reducing waste.", "Because waste are bad.", "Because they reduces waste now."], a: "Because they are reducing plastic waste." },
            { audio: "What is she throwing away?", options: ["She is throwing away a plastic bag.", "She are throwing away a bag.", "She throwing away a bag.", "The bag are throwing."], a: "She is throwing away a plastic bag." },
            { audio: "Where is the dog swimming?", options: ["It is swimming in the clean river.", "It are swimming in the river.", "It swim in the river now.", "The river are swimming."], a: "It is swimming in the clean river." },
            { audio: "What are we making today?", options: ["We are making a difference.", "We is making a difference.", "We making a difference.", "Difference are making."], a: "We are making a difference." },
            { audio: "Why are you picking up the garbage?", options: ["Because I am cleaning the beach.", "Because I is cleaning.", "Because garbage are bad.", "Because I cleans now."], a: "Because I am cleaning the beach." },
            { audio: "What is the boy planting in the garden?", options: ["He is planting a beautiful flower.", "He are planting a flower.", "He plant a flower now.", "The flower are planting."], a: "He is planting a beautiful flower." },
            { audio: "Who is wasting water in the bathroom?", options: ["The man is wasting water.", "The man are wasting.", "Water are wasting.", "The man waste now."], a: "The man is wasting water." },
            { audio: "Why is the planet calling?", options: ["Because it needs our help right now.", "Because it are calling.", "Because planet is help.", "Because it am calling."], a: "Because it needs our help right now." },
            { audio: "What are they reusing in the kitchen?", options: ["They are reusing old glass jars.", "They is reusing jars.", "They reusing jars.", "The jars is old."], a: "They are reusing old glass jars." },
            { audio: "Where are we taking action?", options: ["We are taking action in our city.", "We is taking action.", "We takes action now.", "City are taking action."], a: "We are taking action in our city." },
            { audio: "Why are the birds singing?", options: ["Because they are happy in nature.", "Because they is happy.", "Because nature are beautiful.", "Because they sings now."], a: "Because they are happy in nature." },
            { audio: "What is he stopping right now?", options: ["He is stopping the car.", "He are stopping the car.", "He stopping the car.", "The car are stopping."], a: "He is stopping the car." },
            { audio: "What do you want to do for the environment?", options: ["I want to protect the earth.", "I am wanting to protect the earth.", "I wants to protect.", "I is want to protect."], a: "I want to protect the earth." },
            { audio: "Why do you love nature?", options: ["Because it is beautiful.", "Because I am loving it.", "Because it are beautiful.", "Because nature love I."], a: "Because it is beautiful." },
            { audio: "What are they collecting in the bags?", options: ["They are collecting plastic bottles.", "They is collecting plastic bottles.", "They collect plastic now.", "The bottles is plastic."], a: "They are collecting plastic bottles." },
            { audio: "Where is she cleaning today?", options: ["She is cleaning the school playground.", "She are cleaning.", "She clean the playground now.", "The playground are dirty."], a: "She is cleaning the school playground." },
            { audio: "Why are we reducing consumerism?", options: ["Because it is hurting the planet.", "Because it are hurting the planet.", "Because it hurting.", "Because consumerism are bad."], a: "Because it is hurting the planet." },
            { audio: "What is the smoke doing to the air?", options: ["It is polluting the fresh air.", "It are polluting the air.", "It pollute the air now.", "The air are smoke."], a: "It is polluting the fresh air." },
            { audio: "Who is protecting the wild animals?", options: ["The volunteers are protecting them.", "The volunteers is protecting them.", "The animals is wild.", "The volunteers protects them now."], a: "The volunteers are protecting them." },
            { audio: "What are you drinking right now?", options: ["I am drinking fresh water.", "I is drinking fresh water.", "I drink water now.", "Water are fresh."], a: "I am drinking fresh water." },
            { audio: "Why is she turning off the lights?", options: ["She is saving energy.", "She are saving energy.", "She saving energy.", "Energy are saving."], a: "She is saving energy." },
            { audio: "What do you know about recycling?", options: ["I know that it helps the earth.", "I am knowing that it helps.", "I knows it helps.", "Recycling are good."], a: "I know that it helps the earth." },
            { audio: "Where is the trash going?", options: ["It is going into the garbage bin.", "It are going into the bin.", "It go into the bin now.", "The bin are full."], a: "It is going into the garbage bin." },
            { audio: "Why are they running so fast?", options: ["They are running to catch the bus.", "They is running.", "They runs now.", "The bus are fast."], a: "They are running to catch the bus." },
            { audio: "What is the earth doing right now?", options: ["It is crying for our help.", "It are crying for help.", "It cry right now.", "The earth am big."], a: "It is crying for our help." },
            { audio: "Do you believe we can save the world?", options: ["Yes, I believe we can.", "Yes, I am believing we can.", "Yes, I believes we can.", "Yes, the world are saved."], a: "Yes, I believe we can." },
            { audio: "What are the cars doing to the street?", options: ["They are making a lot of noise.", "They is making noise.", "They makes noise now.", "The street are noisy."], a: "They are making a lot of noise." },
            { audio: "Why are you picking up the plastic?", options: ["I am protecting the sea animals.", "I is protecting the animals.", "I protect animals now.", "The animals is sea."], a: "I am protecting the sea animals." },
            { audio: "What is she carrying in her hand?", options: ["She is carrying a reusable bag.", "She are carrying a bag.", "She carry a bag now.", "The bag are reusable."], a: "She is carrying a reusable bag." },
            { audio: "Where are the birds flying?", options: ["They are flying in the clean air.", "They is flying.", "They flies now.", "The air are clean."], a: "They are flying in the clean air." },
            { audio: "What do you understand from this lesson?", options: ["I understand that nature is important.", "I am understanding that nature is important.", "I understands it.", "Nature are important."], a: "I understand that nature is important." },
            { audio: "Why is the water dropping from the tap?", options: ["Because he is wasting water.", "Because he are wasting water.", "Because he waste water now.", "The water are dropping."], a: "Because he is wasting water." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 ITEMS) ---
        10: [
            { audio: "I am collecting the plastic bottles.", sent: "I ___ ___ the plastic bottles.", blanks: ["am", "collecting"] },
            { audio: "They are planting new trees in the park.", sent: "They ___ ___ new trees in the park.", blanks: ["are", "planting"] },
            { audio: "We are not wasting water right now.", sent: "We ___ not ___ water right now.", blanks: ["are", "wasting"] },
            { audio: "She is helping nature today.", sent: "She ___ ___ nature today.", blanks: ["is", "helping"] },
            { audio: "Is he throwing away garbage?", sent: "___ he ___ away garbage?", blanks: ["Is", "throwing"] },
            { audio: "They are polluting the clean river.", sent: "They ___ ___ the clean river.", blanks: ["are", "polluting"] },
            { audio: "I am reusing old glass jars.", sent: "I ___ ___ old glass jars.", blanks: ["am", "reusing"] },
            { audio: "We are making a big difference.", sent: "We ___ ___ a big difference.", blanks: ["are", "making"] },
            { audio: "You are protecting the beautiful planet.", sent: "You ___ ___ the beautiful planet.", blanks: ["are", "protecting"] },
            { audio: "It is raining right now.", sent: "It ___ ___ right now.", blanks: ["is", "raining"] },
            { audio: "Are you saving energy at home?", sent: "___ you ___ energy at home?", blanks: ["Are", "saving"] },
            { audio: "He is cleaning the dirty street.", sent: "He ___ ___ the dirty street.", blanks: ["is", "cleaning"] },
            { audio: "She is using a reusable bag.", sent: "She ___ ___ a reusable bag.", blanks: ["is", "using"] },
            { audio: "We are helping the wild animals.", sent: "We ___ ___ the wild animals.", blanks: ["are", "helping"] },
            { audio: "I am looking at nature.", sent: "I ___ ___ at nature.", blanks: ["am", "looking"] },
            { audio: "They are recycling paper and plastic.", sent: "They ___ ___ paper and plastic.", blanks: ["are", "recycling"] },
            { audio: "We are not polluting the fresh air.", sent: "We ___ not ___ the fresh air.", blanks: ["are", "polluting"] },
            { audio: "He is picking up the trash.", sent: "He ___ picking ___ the trash.", blanks: ["is", "up"] },
            { audio: "You are taking action right now.", sent: "You ___ ___ action right now.", blanks: ["are", "taking"] },
            { audio: "I am studying at this moment.", sent: "I ___ ___ at this moment.", blanks: ["am", "studying"] },
            { audio: "The world is changing very fast.", sent: "The world ___ ___ very fast.", blanks: ["is", "changing"] },
            { audio: "They are planting beautiful flowers.", sent: "They ___ ___ beautiful flowers.", blanks: ["are", "planting"] },
            { audio: "I am using a water bottle.", sent: "I ___ ___ a water bottle.", blanks: ["am", "using"] },
            { audio: "The Earth is calling for our help.", sent: "The Earth ___ ___ for our help.", blanks: ["is", "calling"] },
            { audio: "We are reducing plastic waste.", sent: "We ___ ___ plastic waste.", blanks: ["are", "reducing"] },
            { audio: "Look around you right now!", sent: "___ ___ you right now!", blanks: ["Look", "around"] },
            { audio: "Is she throwing plastic bags?", sent: "___ she ___ plastic bags?", blanks: ["Is", "throwing"] },
            { audio: "Volunteers are protecting the green forest.", sent: "Volunteers ___ ___ the green forest.", blanks: ["are", "protecting"] },
            { audio: "We care about the natural environment.", sent: "We ___ ___ the natural environment.", blanks: ["care", "about"] },
            { audio: "They are cleaning the playground now.", sent: "They ___ ___ the playground now.", blanks: ["are", "cleaning"] },
            { audio: "Can you make a big difference?", sent: "Can you ___ a big ___?", blanks: ["make", "difference"] },
            { audio: "The river is flowing to the sea.", sent: "The river ___ ___ to the sea.", blanks: ["is", "flowing"] },
            { audio: "Lions are wild and strong animals.", sent: "Lions ___ wild and strong ___.", blanks: ["are", "animals"] },
            { audio: "I love spending time in nature.", sent: "I ___ spending time in ___.", blanks: ["love", "nature"] },
            { audio: "He is putting the garbage in the bin.", sent: "He ___ ___ the garbage in the bin.", blanks: ["is", "putting"] },
            { audio: "The air is fresh and clean today.", sent: "The air ___ fresh and clean ___.", blanks: ["is", "today"] },
            { audio: "What are you doing with that bottle?", sent: "What ___ you ___ with that bottle?", blanks: ["are", "doing"] },
            { audio: "Why is he running so fast?", sent: "Why ___ he ___ so fast?", blanks: ["is", "running"] },
            { audio: "We are stopping consumerism today.", sent: "We ___ ___ consumerism today.", blanks: ["are", "stopping"] },
            { audio: "Nature is amazing and beautiful.", sent: "___ is amazing and ___.", blanks: ["Nature", "beautiful"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE (10 ITEMS) ---
        11: [
            {
                title: "Dialogue 1: Planting Trees",
                lines: [
                    { speaker: "Albert", text: "Look at the volunteers! What are they ___?", options: ["do", "doing", "does"], a: "doing" },
                    { speaker: "Celine", text: "They are ___ a new tree.", options: ["planting", "plant", "plants"], a: "planting" },
                    { speaker: "Albert", text: "That is great! They are ___ the environment.", options: ["help", "helping", "helps"], a: "helping" },
                    { speaker: "Celine", text: "I ___ to help too.", options: ["want", "wanting", "am wanting"], a: "want" },
                    { speaker: "Albert", text: "Let's go! We can save ___ together.", options: ["nature", "plastic", "pollution"], a: "nature" }
                ]
            },
            {
                title: "Dialogue 2: Wasting Water",
                lines: [
                    { speaker: "Celine", text: "Albert, are you ___ water?", options: ["wasting", "waste", "wastes"], a: "wasting" },
                    { speaker: "Albert", text: "No, I am ___ wasting water.", options: ["not", "no", "don't"], a: "not" },
                    { speaker: "Celine", text: "What are you doing at this ___?", options: ["moment", "nature", "planet"], a: "moment" },
                    { speaker: "Albert", text: "I am ___ the tap.", options: ["turning off", "turn off", "turns off"], a: "turning off" },
                    { speaker: "Celine", text: "Good! We must ___ our water.", options: ["protect", "pollute", "throw"], a: "protect" }
                ]
            },
            {
                title: "Dialogue 3: Recycling",
                lines: [
                    { speaker: "Albert", text: "Why are you separating the ___?", options: ["garbage", "tree", "animal"], a: "garbage" },
                    { speaker: "Celine", text: "Because I am ___ the paper and glass.", options: ["recycling", "recycle", "recycles"], a: "recycling" },
                    { speaker: "Albert", text: "Do you reuse plastic bottles too?", options: ["Yes", "No", "Maybe"], a: "Yes" }, // Filler
                    { speaker: "Celine", text: "Yes, I use a reusable ___ for my shopping.", options: ["bag", "river", "air"], a: "bag" },
                    { speaker: "Albert", text: "You are ___ a big difference!", options: ["making", "make", "makes"], a: "making" }
                ]
            },
            {
                title: "Dialogue 4: The Polluter",
                lines: [
                    { speaker: "Celine", text: "Look at that man. He is ___ trash on the floor!", options: ["throwing away", "throw away", "throws away"], a: "throwing away" },
                    { speaker: "Albert", text: "Oh no! He is ___ the park.", options: ["polluting", "pollute", "pollutes"], a: "polluting" },
                    { speaker: "Celine", text: "We need to tell him to ___.", options: ["stop", "stopping", "stops"], a: "stop" },
                    { speaker: "Albert", text: "I ___. It is very bad for the earth.", options: ["know", "am knowing", "knows"], a: "know" },
                    { speaker: "Celine", text: "Let's take ___ right now!", options: ["action", "plastic", "pollution"], a: "action" }
                ]
            },
            {
                title: "Dialogue 5: Loving Nature",
                lines: [
                    { speaker: "Albert", text: "Do you ___ spending time in the forest?", options: ["love", "loving", "are loving"], a: "love" },
                    { speaker: "Celine", text: "Yes! I ___ nature is beautiful.", options: ["believe", "am believing", "believes"], a: "believe" },
                    { speaker: "Albert", text: "Look, the birds ___ singing in the trees.", options: ["are", "am", "is"], a: "are" },
                    { speaker: "Celine", text: "And the wild ___ are running on the grass.", options: ["animals", "plastics", "garbage"], a: "animals" },
                    { speaker: "Albert", text: "I ___ why we must save the planet.", options: ["understand", "am understanding", "understands"], a: "understand" }
                ]
            },
            {
                title: "Dialogue 6: At the River",
                lines: [
                    { speaker: "Celine", text: "What ___ you looking at, Albert?", options: ["are", "is", "am"], a: "are" },
                    { speaker: "Albert", text: "I am ___ at the river.", options: ["looking", "look", "looks"], a: "looking" },
                    { speaker: "Celine", text: "Is the water ___ fast?", options: ["flowing", "flow", "flows"], a: "flowing" },
                    { speaker: "Albert", text: "Yes, and I can see fish. The river is very ___.", options: ["clean", "dirty", "plastic"], a: "clean" },
                    { speaker: "Celine", text: "I am happy that people are not ___ it.", options: ["polluting", "pollute", "pollutes"], a: "polluting" }
                ]
            },
            {
                title: "Dialogue 7: Consumerism",
                lines: [
                    { speaker: "Albert", text: "Why is consumerism ___ the world?", options: ["hurting", "hurt", "hurts"], a: "hurting" },
                    { speaker: "Celine", text: "Because people are ___ too many things.", options: ["buying", "buy", "buys"], a: "buying" },
                    { speaker: "Albert", text: "And they are producing a lot of ___.", options: ["trash", "trees", "rivers"], a: "trash" },
                    { speaker: "Celine", text: "Yes. We are ___ our waste at home.", options: ["reducing", "reduce", "reduces"], a: "reducing" },
                    { speaker: "Albert", text: "That is a great way to ___ the Earth.", options: ["save", "throw", "pollute"], a: "save" }
                ]
            },
            {
                title: "Dialogue 8: Reusable Items",
                lines: [
                    { speaker: "Celine", text: "Are you ___ a plastic bottle?", options: ["using", "use", "uses"], a: "using" },
                    { speaker: "Albert", text: "No, this is a reusable ___.", options: ["bottle", "air", "smoke"], a: "bottle" },
                    { speaker: "Celine", text: "That is fantastic. Plastic ___ the ocean.", options: ["pollutes", "polluting", "are polluting"], a: "pollutes" },
                    { speaker: "Albert", text: "I ___. I don't want to hurt the sea animals.", options: ["know", "knowing", "am knowing"], a: "know" },
                    { speaker: "Celine", text: "We are keeping the water ___.", options: ["clean", "dirty", "garbage"], a: "clean" }
                ]
            },
            {
                title: "Dialogue 9: The Factory",
                lines: [
                    { speaker: "Albert", text: "The sky looks very grey. The factory is making ___.", options: ["smoke", "water", "animals"], a: "smoke" },
                    { speaker: "Celine", text: "Yes, the factories are ___ the air.", options: ["polluting", "protect", "save"], a: "polluting" },
                    { speaker: "Albert", text: "We need fresh ___ to breathe.", options: ["air", "plastic", "trash"], a: "air" },
                    { speaker: "Celine", text: "I ___ to live in a healthy environment.", options: ["want", "am wanting", "wants"], a: "want" },
                    { speaker: "Albert", text: "We are ___ action to stop this!", options: ["taking", "take", "takes"], a: "taking" }
                ]
            },
            {
                title: "Dialogue 10: Stop for the Animal",
                lines: [
                    { speaker: "Celine", text: "Why ___ the car stopping?", options: ["is", "are", "am"], a: "is" },
                    { speaker: "Albert", text: "The driver is ___ because there is an animal.", options: ["stopping", "stoping", "stopeing"], a: "stopping" },
                    { speaker: "Celine", text: "Oh, look! A little dog is ___ across the street.", options: ["running", "runing", "run"], a: "running" },
                    { speaker: "Albert", text: "I ___ dogs. I am glad the driver stopped.", options: ["love", "am loving", "loves"], a: "love" },
                    { speaker: "Celine", text: "Yes, protecting animals is important ___.", options: ["right now", "yesterday", "tomorrow"], a: "right now" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER (10 ITEMS) ---
        12: [
            {
                title: "Text 1: The Green Club",
                text: "It is Saturday morning. The students of the Green Club are at school. They are not studying math today; they are working outside. Some students are collecting garbage from the playground. Others are planting small trees near the gate. Mrs. Canales is helping them. She is holding a big bag for the plastic bottles. Everyone is working hard to protect the environment.",
                questions: [
                    { q: "What are the students doing?", options: ["Sleeping", "Working outside", "Watching TV"], a: "Working outside" },
                    { q: "What are some students collecting?", options: ["Flowers", "Garbage", "Books"], a: "Garbage" },
                    { q: "What is Mrs. Canales doing?", options: ["She is helping them.", "She is throwing trash.", "She is running."], a: "She is helping them." },
                    { q: "What is Mrs. Canales holding?", options: ["A big bag for plastic bottles.", "A wild animal.", "A small tree."], a: "A big bag for plastic bottles." },
                    { q: "When is this happening?", options: ["On Monday", "On Saturday morning", "In the winter"], a: "On Saturday morning" }
                ]
            },
            {
                title: "Text 2: At the Beach",
                text: "Albert: Look at the ocean, Celine. It is beautiful, but there is some trash on the sand.\nCeline: Yes, I see it. People are leaving bottles and bags here.\nAlbert: That is terrible. The plastic is polluting the water.\nCeline: Let's take action! I am picking up this bottle.\nAlbert: Good idea. I am helping you. We are cleaning the beach together.\nCeline: We are saving the sea animals!",
                questions: [
                    { q: "Where are Albert and Celine?", options: ["At the school.", "At the beach.", "In the forest."], a: "At the beach." },
                    { q: "What is on the sand?", options: ["Trees", "Trash", "Beds"], a: "Trash" },
                    { q: "What is the plastic doing?", options: ["Helping the water.", "Polluting the water.", "Cleaning the sand."], a: "Polluting the water." },
                    { q: "What is Celine doing right now?", options: ["She is picking up a bottle.", "She is swimming.", "She is sleeping."], a: "She is picking up a bottle." },
                    { q: "What are they saving?", options: ["The sea animals.", "The plastic bags.", "The garbage bins."], a: "The sea animals." }
                ]
            },
            {
                title: "Text 3: A Busy Park",
                text: "The park is very busy today. The sun is shining. Many people are enjoying nature. Some children are running on the grass. A group of friends is recycling cans near the bench. A gardener is watering the plants. He is not wasting water; he is using a watering can. Two birds are sitting in a tree. The park looks clean and green.",
                questions: [
                    { q: "How is the weather?", options: ["It is raining.", "The sun is shining.", "It is snowing."], a: "The sun is shining." },
                    { q: "What are the children doing?", options: ["Sleeping", "Running on the grass", "Watering plants"], a: "Running on the grass" },
                    { q: "What is the group of friends doing?", options: ["Recycling cans.", "Throwing garbage.", "Polluting the park."], a: "Recycling cans." },
                    { q: "What is the gardener doing?", options: ["Wasting water", "Watering the plants", "Sitting in a tree"], a: "Watering the plants" },
                    { q: "Is the gardener wasting water?", options: ["Yes, he is.", "No, he isn't.", "He is drinking water."], a: "No, he isn't." }
                ]
            },
            {
                title: "Text 4: The River Cleanup",
                text: "The river in our city is very dirty. Factories are making smoke and polluting the air and the water. Today, a group of volunteers is taking action. They are cleaning the river. One boy is collecting plastic bottles. A girl is picking up old shoes and bags. They want to protect the fish and frogs. I understand the problem, so I am helping them.",
                questions: [
                    { q: "How is the river?", options: ["Very clean.", "Very dirty.", "Very dry."], a: "Very dirty." },
                    { q: "What are the factories doing?", options: ["Polluting the air and water.", "Planting trees.", "Recycling plastic."], a: "Polluting the air and water." },
                    { q: "What is the group of volunteers doing?", options: ["Cleaning the river.", "Making smoke.", "Wasting water."], a: "Cleaning the river." },
                    { q: "What is the boy collecting?", options: ["Plastic bottles.", "Fresh air.", "Wild animals."], a: "Plastic bottles." },
                    { q: "Why are they cleaning the river?", options: ["To protect the fish and frogs.", "To throw away garbage.", "To waste water."], a: "To protect the fish and frogs." }
                ]
            },
            {
                title: "Text 5: Saving Energy at Home",
                text: "I am at home with my family. We love the earth, so we are saving energy right now. My mom is turning off the lights in the living room. My dad is not watching TV; he is reading a book. I am turning off the tap because I am not using the water. We believe that small actions make a big difference. We do not need to waste our planet's resources.",
                questions: [
                    { q: "Where is the family?", options: ["At the park.", "At home.", "At school."], a: "At home." },
                    { q: "What are they doing right now?", options: ["Saving energy.", "Wasting water.", "Polluting the air."], a: "Saving energy." },
                    { q: "What is the mom doing?", options: ["Turning off the lights.", "Watching TV.", "Throwing away trash."], a: "Turning off the lights." },
                    { q: "What is the dad doing?", options: ["He is watching TV.", "He is reading a book.", "He is planting a tree."], a: "He is reading a book." },
                    { q: "Why is the narrator turning off the tap?", options: ["Because the water is dirty.", "Because they are not using the water.", "Because it is broken."], a: "Because they are not using the water." }
                ]
            },
            {
                title: "Text 6: The Reusable Bag",
                text: "Consumerism is hurting our world. People buy too many things and use too many plastic bags. Right now, Celine is at the supermarket. She is not using plastic bags. She is carrying her groceries in a beautiful reusable bag. It has a picture of a green tree on it. She knows that plastic is bad for the environment. She wants to reduce waste.",
                questions: [
                    { q: "What is hurting our world?", options: ["Planting trees.", "Consumerism.", "Reusable bags."], a: "Consumerism." },
                    { q: "Where is Celine right now?", options: ["At the supermarket.", "At the beach.", "In the river."], a: "At the supermarket." },
                    { q: "Is Celine using plastic bags?", options: ["Yes, she is.", "No, she is not.", "She is buying plastic."], a: "No, she is not." },
                    { q: "What does her reusable bag have on it?", options: ["A picture of a green tree.", "A picture of a plastic bottle.", "A picture of a car."], a: "A picture of a green tree." },
                    { q: "What does she want to do?", options: ["Reduce waste.", "Throw away food.", "Pollute the park."], a: "Reduce waste." }
                ]
            },
            {
                title: "Text 7: A Wild Animal Rescue",
                text: "Look around you! We are in the forest. A small bird is hurt. It is not flying. Two volunteers are helping the bird. They are putting the bird in a safe box. They are taking it to the animal hospital. They love nature and they want to protect wild animals. The forest is a very important environment for the animals.",
                questions: [
                    { q: "Where are they?", options: ["In the forest.", "In the city.", "At the supermarket."], a: "In the forest." },
                    { q: "What is wrong with the bird?", options: ["It is flying high.", "It is hurt.", "It is singing."], a: "It is hurt." },
                    { q: "Who is helping the bird?", options: ["Two wild animals.", "Two volunteers.", "Two cars."], a: "Two volunteers." },
                    { q: "Where are they taking the bird?", options: ["To the animal hospital.", "To the river.", "To the garbage bin."], a: "To the animal hospital." },
                    { q: "Why are they helping?", options: ["Because they want to protect wild animals.", "Because they hate nature.", "Because they are throwing away trash."], a: "Because they want to protect wild animals." }
                ]
            },
            {
                title: "Text 8: Planting a Garden",
                text: "Today is a beautiful day. My school is making a new green garden. I am planting a small tree. My friend Lucas is planting colourful flowers. We are using rich soil and fresh water. We are not wasting water; we are using just a little bit. The teacher is watching us. She believes we are making a big difference for the planet.",
                questions: [
                    { q: "What is the school making?", options: ["A new green garden.", "A plastic bottle.", "A big factory."], a: "A new green garden." },
                    { q: "What is the narrator planting?", options: ["Colorful flowers.", "A small tree.", "Plastic bags."], a: "A small tree." },
                    { q: "What is Lucas planting?", options: ["Colourful flowers.", "A big tree.", "Garbage."], a: "Colourful flowers." },
                    { q: "Are they wasting water?", options: ["Yes, they are.", "No, they are using just a little bit.", "The water is dirty."], a: "No, they are using just a little bit." },
                    { q: "What does the teacher believe?", options: ["They are making a big difference.", "They are polluting the school.", "They are sleeping."], a: "They are making a big difference." }
                ]
            },
            {
                title: "Text 9: The Pollution Problem",
                text: "Albert and Celine are walking in the city. The air is not fresh. Cars and buses are making a lot of smoke. The smoke is going up into the sky. \"The city is polluting the air,\" Albert says. \"I know,\" Celine replies. \"I hate pollution. We need to ride bicycles.\" They are looking at the cars. They understand that the world is changing, and we must stop pollution right now.",
                questions: [
                    { q: "Where are Albert and Celine walking?", options: ["In the forest.", "In the city.", "At the beach."], a: "In the city." },
                    { q: "How is the air?", options: ["It is very fresh.", "It is not fresh.", "It is very clean."], a: "It is not fresh." },
                    { q: "What is making a lot of smoke?", options: ["Cars and buses.", "Trees and plants.", "Birds and fish."], a: "Cars and buses." },
                    { q: "What does Celine hate?", options: ["Bicycles.", "Pollution.", "The sky."], a: "Pollution." },
                    { q: "What do they understand?", options: ["That we must stop pollution right now.", "That smoke is good for the earth.", "That cars are helping nature."], a: "That we must stop pollution right now." }
                ]
            },
            {
                title: "Text 10: Earth Heroes",
                text: "We are all Earth Heroes. At this moment, millions of people are protecting the environment. Some people are picking up garbage in the streets. Other people are recycling plastic bottles and paper. Many children are using reusable bags. We love our planet. The earth is our home, and we want to keep it clean and safe. Take action today!",
                questions: [
                    { q: "Who are the Earth Heroes?", options: ["Only the volunteers.", "We are all Earth Heroes.", "The factories."], a: "We are all Earth Heroes." },
                    { q: "What are millions of people doing at this moment?", options: ["Protecting the environment.", "Throwing away trash.", "Wasting water."], a: "Protecting the environment." },
                    { q: "What are some people picking up?", options: ["Flowers.", "Garbage in the streets.", "Cars."], a: "Garbage in the streets." },
                    { q: "What are children using?", options: ["Reusable bags.", "Plastic bags.", "Smoke."], a: "Reusable bags." },
                    { q: "Why do they want to keep the earth clean?", options: ["Because it is our home.", "Because they hate nature.", "Because consumerism is good."], a: "Because it is our home." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER CONTEXT (10 ITEMS) ---
        13: [
            {
                title: "Audio Script 1",
                audio: "Look at my sister. She is in the garden right now. She is planting a small tree. She loves nature very much. She is not wasting water. She is giving the tree just a little water.",
                questions: [
                    { q: "Where is the sister?", options: ["In the garden.", "In the house.", "At the beach."], a: "In the garden." },
                    { q: "What is she doing?", options: ["She is planting a small tree.", "She is picking up trash.", "She is sleeping."], a: "She is planting a small tree." },
                    { q: "Does she love nature?", options: ["Yes, very much.", "No, she hates it.", "The audio doesn't say."], a: "Yes, very much." },
                    { q: "Is she wasting water?", options: ["Yes, she is.", "No, she is not.", "She is drinking it."], a: "No, she is not." },
                    { q: "How much water is she giving the tree?", options: ["A lot of water.", "Just a little water.", "No water."], a: "Just a little water." }
                ]
            },
            {
                title: "Audio Script 2",
                audio: "I am holding a plastic bottle. I am not throwing it away. I am cleaning it. I want to reuse this bottle for my juice. Reusing plastic is a great way to protect the environment and reduce waste.",
                questions: [
                    { q: "What is the speaker holding?", options: ["A plastic bag.", "A plastic bottle.", "A glass jar."], a: "A plastic bottle." },
                    { q: "Is the speaker throwing the bottle away?", options: ["Yes, he is.", "No, he is not.", "He is polluting."], a: "No, he is not." },
                    { q: "What is the speaker doing to the bottle?", options: ["He is cleaning it.", "He is burning it.", "He is throwing it."], a: "He is cleaning it." },
                    { q: "What does the speaker want to do with the bottle?", options: ["Reuse it for his juice.", "Put it in the garbage bin.", "Plant a tree in it."], a: "Reuse it for his juice." },
                    { q: "Why is reusing plastic a great way?", options: ["It protects the environment and reduces waste.", "It pollutes the river.", "It hurts wild animals."], a: "It protects the environment and reduces waste." }
                ]
            },
            {
                title: "Audio Script 3",
                audio: "My family is taking action today. We are at home. My father is turning off the TV to save energy. My brother is separating the garbage into plastic and paper. We believe we are making a difference.",
                questions: [
                    { q: "What is the family doing today?", options: ["Taking action.", "Wasting water.", "Sleeping."], a: "Taking action." },
                    { q: "Where are they?", options: ["At the park.", "At home.", "At the supermarket."], a: "At home." },
                    { q: "What is the father doing?", options: ["Turning off the TV.", "Throwing away garbage.", "Planting a tree."], a: "Turning off the TV." },
                    { q: "Why is he doing that?", options: ["To save energy.", "To waste water.", "To pollute the air."], a: "To save energy." },
                    { q: "What is the brother separating?", options: ["The garbage into plastic and paper.", "The wild animals.", "The reusable bags."], a: "The garbage into plastic and paper." }
                ]
            },
            {
                title: "Audio Script 4",
                audio: "We are looking at the river. It is very sad. People are throwing trash in the water. The water is dirty, and the fish are suffering. We must stop polluting the river right now.",
                questions: [
                    { q: "What are they looking at?", options: ["The sky.", "The river.", "The forest."], a: "The river." },
                    { q: "How do they feel?", options: ["Very happy.", "Very sad.", "Very energetic."], a: "Very sad." },
                    { q: "What are people doing?", options: ["Throwing trash in the water.", "Cleaning the water.", "Planting trees."], a: "Throwing trash in the water." },
                    { q: "How is the water?", options: ["Very clean.", "Very dirty.", "Very fresh."], a: "Very dirty." },
                    { q: "What must we stop doing right now?", options: ["Polluting the river.", "Helping the fish.", "Protecting the environment."], a: "Polluting the river." }
                ]
            },
            {
                title: "Audio Script 5",
                audio: "I am at the supermarket with my mom. She is not using plastic bags. She is putting the food in a cloth bag. It is a reusable bag. She knows that consumerism creates a lot of garbage.",
                questions: [
                    { q: "Where is the speaker?", options: ["At the supermarket.", "At the park.", "In the river."], a: "At the supermarket." },
                    { q: "Is the mom using plastic bags?", options: ["Yes, she is.", "No, she is not.", "She is throwing them away."], a: "No, she is not." },
                    { q: "Where is she putting the food?", options: ["In a plastic bag.", "In a cloth bag.", "In a trash can."], a: "In a cloth bag." },
                    { q: "What kind of bag is it?", options: ["A reusable bag.", "A garbage bag.", "A dirty bag."], a: "A reusable bag." },
                    { q: "What does consumerism create?", options: ["Fresh air.", "A lot of garbage.", "Wild animals."], a: "A lot of garbage." }
                ]
            },
            {
                title: "Audio Script 6",
                audio: "Look at the volunteers on the beach! They are making a huge difference. They are picking up plastic bottles and old bags from the sand. They are working hard to save the ocean and the animals.",
                questions: [
                    { q: "Who is on the beach?", options: ["The volunteers.", "The animals.", "The factories."], a: "The volunteers." },
                    { q: "What are they making?", options: ["A huge difference.", "A lot of smoke.", "Plastic bags."], a: "A huge difference." },
                    { q: "What are they picking up?", options: ["Plastic bottles and old bags.", "Clean water.", "Fresh air."], a: "Plastic bottles and old bags." },
                    { q: "Where are they picking the trash from?", options: ["The sand.", "The trees.", "The sky."], a: "The sand." },
                    { q: "What are they trying to save?", options: ["The ocean and the animals.", "The plastic bottles.", "The garbage bins."], a: "The ocean and the animals." }
                ]
            },
            {
                title: "Audio Script 7",
                audio: "The earth is our planet, and it is calling for our help. We are destroying nature with our garbage. I understand the problem, and I want to protect the world. I am recycling my paper right now.",
                questions: [
                    { q: "What is the earth calling for?", options: ["Our help.", "More garbage.", "More pollution."], a: "Our help." },
                    { q: "What are we destroying nature with?", options: ["Our garbage.", "Our fresh air.", "Our reusable bags."], a: "Our garbage." },
                    { q: "Does the speaker understand the problem?", options: ["Yes, he does.", "No, he doesn't.", "He is confused."], a: "Yes, he does." },
                    { q: "What does the speaker want to do?", options: ["Protect the world.", "Pollute the river.", "Throw away the paper."], a: "Protect the world." },
                    { q: "What is the speaker doing right now?", options: ["Recycling his paper.", "Wasting water.", "Sleeping."], a: "Recycling his paper." }
                ]
            },
            {
                title: "Audio Script 8",
                audio: "The dog is running in the park. It is a hot day, so the dog is swimming in the clean river. The water is cool and fresh. We love this park because there is no pollution here.",
                questions: [
                    { q: "What is the dog doing first?", options: ["Running in the park.", "Flying in the sky.", "Planting a tree."], a: "Running in the park." },
                    { q: "How is the weather?", options: ["It is a hot day.", "It is raining.", "It is snowing."], a: "It is a hot day." },
                    { q: "What is the dog doing in the river?", options: ["It is swimming.", "It is picking up trash.", "It is polluting the water."], a: "It is swimming." },
                    { q: "How is the river water?", options: ["Cool and fresh.", "Dirty and hot.", "Full of garbage."], a: "Cool and fresh." },
                    { q: "Why do they love the park?", options: ["Because there is no pollution there.", "Because there are many factories.", "Because people throw trash there."], a: "Because there is no pollution there." }
                ]
            },
            {
                title: "Audio Script 9",
                audio: "Look at that factory. It is producing a lot of smoke. The smoke is going up into the air. It is polluting our environment. We do not want to breathe dirty air. We need to stop this.",
                questions: [
                    { q: "What is the factory producing?", options: ["A lot of smoke.", "Fresh water.", "Reusable bags."], a: "A lot of smoke." },
                    { q: "Where is the smoke going?", options: ["Up into the air.", "Into the river.", "Into the garbage bin."], a: "Up into the air." },
                    { q: "What is the smoke doing to the environment?", options: ["It is polluting it.", "It is cleaning it.", "It is protecting it."], a: "It is polluting it." },
                    { q: "What do we not want to breathe?", options: ["Dirty air.", "Fresh air.", "Clean water."], a: "Dirty air." },
                    { q: "What do we need to do?", options: ["Stop this.", "Make more smoke.", "Throw away garbage."], a: "Stop this." }
                ]
            },
            {
                title: "Audio Script 10",
                audio: "We are taking action today! Everyone is helping. Some people are planting trees, and others are reducing their waste. I believe that together we can save our beautiful planet. Are you coming to help?",
                questions: [
                    { q: "When are they taking action?", options: ["Today!", "Yesterday!", "Tomorrow!"], a: "Today!" },
                    { q: "Who is helping?", options: ["Everyone.", "No one.", "Only the animals."], a: "Everyone." },
                    { q: "What are some people doing?", options: ["Planting trees.", "Making smoke.", "Polluting the river."], a: "Planting trees." },
                    { q: "What does the speaker believe?", options: ["That together we can save the planet.", "That the planet is garbage.", "That we must waste water."], a: "That together we can save the planet." },
                    { q: "What is the speaker asking at the end?", options: ["\"Are you coming to help?\"", "\"Are you wasting energy?\"", "\"Are you throwing away plastic?\""], a: "\"Are you coming to help?\"" }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT (10 ITEMS) ---
        14: [
            {
                title: "Text 1: Cleaning the Park",
                text: "Right now, Albert and Celine [1] (is / are / am) in the park. They are [2] (collect / collecting / collects) all the trash from the grass. Celine is putting the [3] (plastic / nature / air) bottles in a blue bag. She is [4] (recycling / throwing / wasting) them. Albert is very happy because they are [5] (helping / hurting / polluting) the environment.",
                answers: ["are", "collecting", "plastic", "recycling", "helping"]
            },
            {
                title: "Text 2: State Verbs vs Continuous",
                text: "I [1] (love / am loving / loves) our planet Earth. I [2] (know / am knowing / knows) that pollution is very bad for us. We [3] (are taking / take / taking) action right now to stop it. I [4] (want / am wanting / wants) to breathe fresh air. At this moment, we [5] (are cleaning / clean / cleans) the local river.",
                answers: ["love", "know", "are taking", "want", "are cleaning"]
            },
            {
                title: "Text 3: Water Conservation",
                text: "Look at the bathroom! The tap is open and the water is [1] (flowing / flow / flows). The boy is [2] (wasting / saving / protecting) a lot of water. We [3] (need / are needing / needs) to tell him to stop. I am [4] (turning off / turn off / turns off) the tap right now. We must [5] (save / pollute / throw) our water for the future.",
                answers: ["flowing", "wasting", "need", "turning off", "save"]
            },
            {
                title: "Text 4: Plastic Pollution",
                text: "There is a big problem in the ocean. People are [1] (throwing away / picking up / planting) too many plastic bags. The wild sea [2] (animals / trees / plants) are eating the plastic. This is [3] (polluting / cleaning / protecting) their home. We [4] (are reducing / reduce / reduces) our plastic use today. We are using [5] (reusable / plastic / dirty) bags instead.",
                answers: ["throwing away", "animals", "polluting", "are reducing", "reusable"]
            },
            {
                title: "Text 5: Wild Animals",
                text: "Look around you in the forest. The birds are [1] (singing / sing / sings) in the tall trees. A wild lion is [2] (sleeping / sleep / sleeps) under a tree at this moment. The forest is their [3] (home / trash / plastic). We [4] (want / are wanting / wants) to protect them. We are not [5] (destroying / saving / helping) their natural habitat.",
                answers: ["singing", "sleeping", "home", "want", "destroying"]
            },
            {
                title: "Text 6: Earth Day",
                text: "Today is Earth Day. The volunteers are [1] (making / make / makes) a big difference in the city. They are [2] (planting / plant / plants) new trees and flowers. The sun is [3] (shining / shine / shines) brightly in the sky. I [4] (understand / am understanding / understands) why nature is so important. We are [5] (protecting / polluting / wasting) our beautiful world.",
                answers: ["making", "planting", "shining", "understand", "protecting"]
            },
            {
                title: "Text 7: Air Pollution",
                text: "Look at that big factory! What is it [1] (doing / do / does)? It is [2] (producing / produce / produces) a lot of dark smoke. The smoke is [3] (polluting / cleaning / saving) the fresh air. The people in the city are [4] (coughing / laugh / smile) because the air is dirty. We [5] (believe / are believing / believes) we must stop this pollution.",
                answers: ["doing", "producing", "polluting", "coughing", "believe"]
            },
            {
                title: "Text 8: Consumerism",
                text: "Consumerism is [1] (hurting / help / saves) the planet. People are [2] (buying / buy / buys) too many things they do not need. Then, they are [3] (throwing away / keeping / reusing) the old things into the garbage. The garbage bins are [4] (overflowing / empty / clean). We are [5] (learning / learn / learns) to reduce our waste today.",
                answers: ["hurting", "buying", "throwing away", "overflowing", "learning"]
            },
            {
                title: "Text 9: Reusing Things",
                text: "Celine is in her kitchen. She is [1] (washing / wash / washes) an old glass jar. She is not [2] (wasting / wasting / waste) it. She is [3] (reusing / throw / pollute) the jar to put her pencils inside. This is a great way to [4] (save / destroy / hurt) the environment. She [5] (loves / is loving / love) recycling and reusing.",
                answers: ["washing", "wasting", "reusing", "save", "loves"]
            },
            {
                title: "Text 10: Taking Action Today",
                text: "We are [1] (taking / take / takes) action right now! I am [2] (picking up / pick up / picks up) the trash from the street. My friends are [3] (separating / separate / separates) the plastic from the paper. We [4] (know / are knowing / knows) that our planet needs help. The Earth is [5] (calling / call / calls) us to be Earth Heroes!",
                answers: ["taking", "picking up", "separating", "know", "calling"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 ITEMS) ---
        15: [
            {
                title: "Audio Script 1",
                audio: "I am collecting the garbage from the park. We are putting the plastic bottles in the blue bin. We are making a big difference today.",
                text: "I am [1] the garbage from the park. We are [2] the plastic [3] in the blue bin. We are [4] a big [5] today.",
                answers: ["collecting", "putting", "bottles", "making", "difference"]
            },
            {
                title: "Audio Script 2",
                audio: "The volunteers are planting new trees in the forest. They are helping nature to grow. We want to protect the wild animals.",
                text: "The volunteers are [1] new trees in the [2]. They are [3] nature to grow. We [4] to [5] the wild animals.",
                answers: ["planting", "forest", "helping", "want", "protect"]
            },
            {
                title: "Audio Script 3",
                audio: "Look at that factory. It is polluting the fresh air with smoke. We do not need more pollution. The world is changing.",
                text: "Look at that factory. It is [1] the fresh [2] with smoke. We do not [3] more [4]. The world is [5].",
                answers: ["polluting", "air", "need", "pollution", "changing"]
            },
            {
                title: "Audio Script 4",
                audio: "Are you wasting water? Please turn off the tap. We are saving energy and water right now. I love our planet.",
                text: "Are you [1] water? Please turn off the [2]. We are [3] energy and water right [4]. I [5] our planet.",
                answers: ["wasting", "tap", "saving", "now", "love"]
            },
            {
                title: "Audio Script 5",
                audio: "She is reusing an old glass jar. She is not throwing it away. Reducing consumerism is very important for the earth.",
                text: "She is [1] an old glass jar. She is not [2] it away. [3] consumerism is very [4] for the [5].",
                answers: ["reusing", "throwing", "Reducing", "important", "earth"]
            },
            {
                title: "Audio Script 6",
                audio: "The dog is swimming in the clean river. The birds are singing in the trees. Nature is amazing at this moment.",
                text: "The dog is [1] in the clean [2]. The birds are [3] in the trees. [4] is amazing at this [5].",
                answers: ["swimming", "river", "singing", "Nature", "moment"]
            },
            {
                title: "Audio Script 7",
                audio: "I am using a reusable bag at the supermarket. I am not buying plastic bags. Plastic is hurting the sea animals.",
                text: "I am [1] a [2] bag at the supermarket. I am not buying [3] bags. Plastic is [4] the sea [5].",
                answers: ["using", "reusable", "plastic", "hurting", "animals"]
            },
            {
                title: "Audio Script 8",
                audio: "We are taking action to clean the beach. People are picking up the trash from the sand. We understand the problem.",
                text: "We are [1] action to [2] the beach. People are [3] up the [4] from the sand. We [5] the problem.",
                answers: ["taking", "clean", "picking", "trash", "understand"]
            },
            {
                title: "Audio Script 9",
                audio: "What are you doing right now? Look around you. The environment needs our help. I believe we can save the world.",
                text: "What are you [1] right now? Look [2] you. The environment needs our [3]. I [4] we can [5] the world.",
                answers: ["doing", "around", "help", "believe", "save"]
            },
            {
                title: "Audio Script 10",
                audio: "He is recycling the paper in the correct bin. They are reducing their waste. We care about our beautiful home, Earth.",
                text: "He is [1] the paper in the correct [2]. They are [3] their waste. We [4] about our beautiful home, [5].",
                answers: ["recycling", "bin", "reducing", "care", "Earth"]
            }
        ]
    }
});