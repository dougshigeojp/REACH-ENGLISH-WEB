/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "8-2-4",
    grade: "8th Grade",
    bimester: "2",
    chapter: "4",
    chapterTitle: "Ready to Order?",
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "In this lesson, you will learn to:<br><br>• Order food and drinks in a restaurant.<br>• Use polite requests with \"Would like\".<br>• Differentiate between countable and uncountable foods.<br>• Use quantifiers (many, much, a lot of, some, any).<br>• Ask \"How much?\" and \"How many?\".",
            welcome: "Hello, Foodies! It's Mr. D!<br><br>Welcome to \"Ready to Order?\"! Today, we are going to a restaurant! We'll learn all the delicious words for food, drinks, and desserts. But more importantly, we'll learn how to order politely like a true gentleman or lady using \"Would like\". We will also solve the mystery of counting things (can you count water?) and ask about quantities. Bon appétit!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Order food and drinks in a restaurant. Use polite requests with Would like. Differentiate between countable and uncountable foods. Use quantifiers like many, much, a lot of, some, and any. And ask How much and How many.",
                welcome: "TTS: Hello, Foodies! It's Mr. D! Welcome to Ready to Order? Today, we are going to a restaurant! We'll learn all the delicious words for food, drinks, and desserts. But more importantly, we'll learn how to order politely like a true gentleman or lady using Would like. We will also solve the mystery of counting things and ask about quantities. Bon appétit!"
            }
        },

        // ======================================================
        // STEP 1: WHAT'S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of a busy restaurant, plates clinking. Celine and Albert are sitting at a table looking at menus.", 
            contextAudio: "audio/8-2-4/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "The [menu](tooltip:menu) looks great. Are you [ready to order](tooltip:ready-to-order)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "Yes. I [would like](tooltip:would-like) the [steak](tooltip:steak) with [French fries](tooltip:French fries / Chips). I am very hungry!" 
                },
                { 
                    speaker: "Celine", 
                    text: "That sounds good. I would like the [chicken](tooltip:chicken) [salad](tooltip:salad). It is a healthy [meal](tooltip:meal)." 
                },
                { 
                    speaker: "Albert", 
                    text: "[How much](tooltip:how-much) [soda](tooltip:Soda / Soft drink) do you want?" 
                },
                { 
                    speaker: "Celine", 
                    text: "Just [a little](tooltip:little). I [prefer](tooltip:prefer) [water](tooltip:water)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Okay. Oh, look! The [waiter](tooltip:waiter) is coming." 
                },
                { 
                    speaker: "Celine", 
                    text: "Great. Can we ask for the [bill](tooltip:bill) later?" 
                },
                { 
                    speaker: "Albert", 
                    text: "Sure. I have [some](tooltip:some) [money](tooltip:money) for the [tip](tooltip:tip)." 
                }
            ]
        },

        // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
        // ======================================================
        {
            title: "Say the word",
            audio2b: "", // Provided in the next part
            subPages: [
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],

            // 2A: Vocabulary Lists (Tabbed)
            areas: [
                {
                    title: "General Eating Out",
                    audio: "TTS: Restaurant. Cafe. Coffee Shop. Fast food restaurant. Menu. Waiter. Waitress. Server. Chef. Order. Bill. Check. Tip. Table. Chair. Plate. Bowl. Fork. Knife. Spoon. Glass. Cup. Napkin. Kitchen.",
                    items: [
                        { term: "Restaurant", trans: "Restaurante" },
                        { term: "Cafe / Coffee Shop", trans: "Cafeteria / Café" },
                        { term: "Fast food restaurant", trans: "Lanchonete" },
                        { term: "Menu", trans: "Cardápio" },
                        { term: "Waiter / Waitress", trans: "Garçom / Garçonete" },
                        { term: "Server", trans: "Garçom (neutro)" },
                        { term: "Chef", trans: "Chef / Cozinheiro(a)" },
                        { term: "Order", trans: "Pedido / Pedir" },
                        { term: "Bill / Check", trans: "Conta" },
                        { term: "Tip", trans: "Gorjeta" },
                        { term: "Table", trans: "Mesa" },
                        { term: "Chair", trans: "Cadeira" },
                        { term: "Plate", trans: "Prato" },
                        { term: "Bowl", trans: "Tigela" },
                        { term: "Fork", trans: "Garfo" },
                        { term: "Knife", trans: "Faca" },
                        { term: "Spoon", trans: "Colher" },
                        { term: "Glass", trans: "Copo" },
                        { term: "Cup", trans: "Xícara" },
                        { term: "Napkin", trans: "Guardanapo" },
                        { term: "Kitchen", trans: "Cozinha" }
                    ]
                },
                {
                    title: "Foods & Courses",
                    audio: "TTS: Food. Meal. Appetizer. Starter. Main course. Side dish. Soup. Salad. Bread. Rice. Beans. Pasta. Pizza. Hamburger. Sandwich. French fries. Chips. Vegetables.",
                    items: [
                        { term: "Food", trans: "Comida" },
                        { term: "Meal", trans: "Refeição" },
                        { term: "Appetizer / Starter", trans: "Entrada / Aperitivo" },
                        { term: "Main course", trans: "Prato principal" },
                        { term: "Side dish", trans: "Acompanhamento" },
                        { term: "Soup", trans: "Sopa" },
                        { term: "Salad", trans: "Salada" },
                        { term: "Bread", trans: "Pão" },
                        { term: "Rice", trans: "Arroz" },
                        { term: "Beans", trans: "Feijão" },
                        { term: "Pasta", trans: "Massa" },
                        { term: "Pizza", trans: "Pizza" },
                        { term: "Hamburger", trans: "Hambúrguer" },
                        { term: "Sandwich", trans: "Sanduíche" },
                        { term: "French fries / Chips", trans: "Batatas fritas" },
                        { term: "Vegetables", trans: "Legumes / Verduras" }
                    ]
                },
                {
                    title: "Drinks & Desserts",
                    audio: "TTS: Drink. Beverage. Water. Juice. Soda. Soft drink. Coffee. Tea. Milk. Dessert. Cake. Ice cream. Fruit. Pie. Pudding. Chocolate.",
                    items: [
                        { term: "Drink / Beverage", trans: "Bebida" },
                        { term: "Water", trans: "Água" },
                        { term: "Juice", trans: "Suco" },
                        { term: "Soda / Soft drink", trans: "Refrigerante" },
                        { term: "Coffee", trans: "Café" },
                        { term: "Tea", trans: "Chá" },
                        { term: "Milk", trans: "Leite" },
                        { term: "Dessert", trans: "Sobremesa" },
                        { term: "Cake", trans: "Bolo" },
                        { term: "Ice cream", trans: "Sorvete" },
                        { term: "Fruit", trans: "Fruta" },
                        { term: "Pie", trans: "Torta" },
                        { term: "Pudding", trans: "Pudim" },
                        { term: "Chocolate", trans: "Chocolate" }
                    ]
                },
                {
                    title: "Types of Meat",
                    audio: "TTS: Meat. Beef. Steak. Chicken. Pork. Fish. Lamb. Sausage.",
                    items: [
                        { term: "Meat", trans: "Carne" },
                        { term: "Beef", trans: "Carne bovina" },
                        { term: "Steak", trans: "Bife / Filé" },
                        { term: "Chicken", trans: "Frango" },
                        { term: "Pork", trans: "Carne suína" },
                        { term: "Fish", trans: "Peixe" },
                        { term: "Lamb", trans: "Cordeiro" },
                        { term: "Sausage", trans: "Linguiça / Salsicha" }
                    ]
                },
                {
                    title: "Verbs (Eating Out)",
                    audio: "TTS: Eat. Drink. Order. Pay. Ask for. Want. Would like.",
                    items: [
                        { term: "Eat", trans: "Comer" },
                        { term: "Drink", trans: "Beber" },
                        { term: "Order", trans: "Pedir / Fazer o pedido" },
                        { term: "Pay", trans: "Pagar" },
                        { term: "Ask for", trans: "Pedir (solicitar algo)" },
                        { term: "Want", trans: "Querer" },
                        { term: "Would like", trans: "Gostaria de" }
                    ]
                },
                {
                    title: "Quantity & Phrases",
                    audio: "TTS: How many. How much. Many. Much. A lot of. Some. Any. Can I see the menu. I would like. Are you ready to order.",
                    items: [
                        { term: "How many?", trans: "Quantos/as?" },
                        { term: "How much?", trans: "Quanto/a?" },
                        { term: "Many / Much", trans: "Muitos / Muito" },
                        { term: "A lot of", trans: "Muito / Muitos" },
                        { term: "Some / Any", trans: "Algum / Nenhum" },
                        { term: "Can I see the menu?", trans: "Posso ver o cardápio?" },
                        { term: "I would like...", trans: "Eu gostaria de..." },
                        { term: "Are you ready to order?", trans: "Você está pronto para pedir?" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "General Eating Out",
                    audio: "TTS: We eat at a restaurant on Fridays. Let's drink coffee at the cafe. I love burgers from fast food places. Please read the menu. The waiter brought the food. The waitress is very nice. The chef cooks delicious meals. Can I take your order? Dad paid the bill. We left a tip on the table. The table is reserved. Sit on this chair. My plate is empty. I eat soup in a bowl. Use a fork to eat pasta. Cut the meat with a knife. Use a spoon for the soup. Can I have a glass of water? I want a cup of tea. Use a napkin to clean your mouth. The food comes from the kitchen.",
                    items: [
                        { term: "Restaurant", sent: "We eat at a restaurant on Fridays.", trans: "<span style='color:#0077b6'>Comemos em um restaurante às sextas.</span>" },
                        { term: "Cafe", sent: "Let's drink coffee at the cafe.", trans: "<span style='color:#0077b6'>Vamos tomar café na cafeteria.</span>" },
                        { term: "Fast food", sent: "I love burgers from fast food places.", trans: "<span style='color:#0077b6'>Eu amo hambúrgueres de lanchonetes.</span>" },
                        { term: "Menu", sent: "Please read the menu.", trans: "<span style='color:#0077b6'>Por favor, leia o cardápio.</span>" },
                        { term: "Waiter", sent: "The waiter brought the food.", trans: "<span style='color:#0077b6'>O garçom trouxe a comida.</span>" },
                        { term: "Waitress", sent: "The waitress is very nice.", trans: "<span style='color:#0077b6'>A garçonete é muito simpática.</span>" },
                        { term: "Chef", sent: "The chef cooks delicious meals.", trans: "<span style='color:#0077b6'>O chef cozinha refeições deliciosas.</span>" },
                        { term: "Order", sent: "Can I take your order?", trans: "<span style='color:#0077b6'>Posso anotar seu pedido?</span>" },
                        { term: "Bill", sent: "Dad paid the bill.", trans: "<span style='color:#0077b6'>Papai pagou a conta.</span>" },
                        { term: "Tip", sent: "We left a tip on the table.", trans: "<span style='color:#0077b6'>Deixamos uma gorjeta na mesa.</span>" },
                        { term: "Table", sent: "The table is reserved.", trans: "<span style='color:#0077b6'>A mesa está reservada.</span>" },
                        { term: "Chair", sent: "Sit on this chair.", trans: "<span style='color:#0077b6'>Sente-se nesta cadeira.</span>" },
                        { term: "Plate", sent: "My plate is empty.", trans: "<span style='color:#0077b6'>Meu prato está vazio.</span>" },
                        { term: "Bowl", sent: "I eat soup in a bowl.", trans: "<span style='color:#0077b6'>Eu tomo sopa em uma tigela.</span>" },
                        { term: "Fork", sent: "Use a fork to eat pasta.", trans: "<span style='color:#0077b6'>Use um garfo para comer macarrão.</span>" },
                        { term: "Knife", sent: "Cut the meat with a knife.", trans: "<span style='color:#0077b6'>Corte a carne com uma faca.</span>" },
                        { term: "Spoon", sent: "Use a spoon for the soup.", trans: "<span style='color:#0077b6'>Use uma colher para a sopa.</span>" },
                        { term: "Glass", sent: "Can I have a glass of water?", trans: "<span style='color:#0077b6'>Posso pedir um copo d'água?</span>" },
                        { term: "Cup", sent: "I want a cup of tea.", trans: "<span style='color:#0077b6'>Eu quero uma xícara de chá.</span>" },
                        { term: "Napkin", sent: "Use a napkin to clean your mouth.", trans: "<span style='color:#0077b6'>Use um guardanapo para limpar sua boca.</span>" },
                        { term: "Kitchen", sent: "The food comes from the kitchen.", trans: "<span style='color:#0077b6'>A comida vem da cozinha.</span>" }
                    ]
                },
                {
                    title: "Foods & Courses",
                    audio: "TTS: Italian food is my favorite. Lunch is a big meal. We ordered nachos as an appetizer. The main course is steak. I want salad as a side dish. Tomato soup is hot. Salad is healthy. Fresh bread smells good. Rice and beans are popular. I like black beans. Pasta with cheese is yummy. Let's order a pizza. A hamburger has meat and bread. I made a ham sandwich. I love french fries with ketchup. Eat your vegetables!",
                    items: [
                        { term: "Food", sent: "Italian food is my favorite.", trans: "<span style='color:#0077b6'>Comida italiana é minha favorita.</span>" },
                        { term: "Meal", sent: "Lunch is a big meal.", trans: "<span style='color:#0077b6'>O almoço é uma grande refeição.</span>" },
                        { term: "Appetizer", sent: "We ordered nachos as an appetizer.", trans: "<span style='color:#0077b6'>Pedimos nachos como entrada.</span>" },
                        { term: "Main course", sent: "The main course is steak.", trans: "<span style='color:#0077b6'>O prato principal é bife.</span>" },
                        { term: "Side dish", sent: "I want salad as a side dish.", trans: "<span style='color:#0077b6'>Eu quero salada como acompanhamento.</span>" },
                        { term: "Soup", sent: "Tomato soup is hot.", trans: "<span style='color:#0077b6'>Sopa de tomate é quente.</span>" },
                        { term: "Salad", sent: "Salad is healthy.", trans: "<span style='color:#0077b6'>A salada é saudável.</span>" },
                        { term: "Bread", sent: "Fresh bread smells good.", trans: "<span style='color:#0077b6'>Pão fresco cheira bem.</span>" },
                        { term: "Rice", sent: "Rice and beans are popular.", trans: "<span style='color:#0077b6'>Arroz e feijão são populares.</span>" },
                        { term: "Beans", sent: "I like black beans.", trans: "<span style='color:#0077b6'>Eu gosto de feijão preto.</span>" },
                        { term: "Pasta", sent: "Pasta with cheese is yummy.", trans: "<span style='color:#0077b6'>Macarrão com queijo é delicioso.</span>" },
                        { term: "Pizza", sent: "Let's order a pizza.", trans: "<span style='color:#0077b6'>Vamos pedir uma pizza.</span>" },
                        { term: "Hamburger", sent: "A hamburger has meat and bread.", trans: "<span style='color:#0077b6'>Um hambúrguer tem carne e pão.</span>" },
                        { term: "Sandwich", sent: "I made a ham sandwich.", trans: "<span style='color:#0077b6'>Eu fiz um sanduíche de presunto.</span>" },
                        { term: "French fries", sent: "I love french fries with ketchup.", trans: "<span style='color:#0077b6'>Eu amo batatas fritas com ketchup.</span>" },
                        { term: "Vegetables", sent: "Eat your vegetables!", trans: "<span style='color:#0077b6'>Coma seus legumes!</span>" }
                    ]
                },
                {
                    title: "Drinks & Desserts",
                    audio: "TTS: What drink do you want? Water is good for you. Orange juice is sweet. Don't drink too much soda. Dad drinks coffee in the morning. British people love tea. The cat drinks milk. Chocolate cake is a great dessert. Happy birthday! Here is your cake. Vanilla ice cream is cold. An apple is a fruit. I like apple pie. This pudding is soft. I ate a bar of chocolate.",
                    items: [
                        { term: "Drink", sent: "What drink do you want?", trans: "<span style='color:#0077b6'>Qual bebida você quer?</span>" },
                        { term: "Water", sent: "Water is good for you.", trans: "<span style='color:#0077b6'>Água é bom para você.</span>" },
                        { term: "Juice", sent: "Orange juice is sweet.", trans: "<span style='color:#0077b6'>Suco de laranja é doce.</span>" },
                        { term: "Soda", sent: "Don't drink too much soda.", trans: "<span style='color:#0077b6'>Não beba muito refrigerante.</span>" },
                        { term: "Coffee", sent: "Dad drinks coffee in the morning.", trans: "<span style='color:#0077b6'>Papai bebe café de manhã.</span>" },
                        { term: "Tea", sent: "British people love tea.", trans: "<span style='color:#0077b6'>Britânicos amam chá.</span>" },
                        { term: "Milk", sent: "The cat drinks milk.", trans: "<span style='color:#0077b6'>O gato bebe leite.</span>" },
                        { term: "Dessert", sent: "Chocolate cake is a great dessert.", trans: "<span style='color:#0077b6'>Bolo de chocolate é uma ótima sobremesa.</span>" },
                        { term: "Cake", sent: "Happy birthday! Here is your cake.", trans: "<span style='color:#0077b6'>Feliz aniversário! Aqui está seu bolo.</span>" },
                        { term: "Ice cream", sent: "Vanilla ice cream is cold.", trans: "<span style='color:#0077b6'>Sorvete de baunilha é gelado.</span>" },
                        { term: "Fruit", sent: "An apple is a fruit.", trans: "<span style='color:#0077b6'>Uma maçã é uma fruta.</span>" },
                        { term: "Pie", sent: "I like apple pie.", trans: "<span style='color:#0077b6'>Eu gosto de torta de maçã.</span>" },
                        { term: "Pudding", sent: "This pudding is soft.", trans: "<span style='color:#0077b6'>Este pudim é macio.</span>" },
                        { term: "Chocolate", sent: "I ate a bar of chocolate.", trans: "<span style='color:#0077b6'>Eu comi uma barra de chocolate.</span>" }
                    ]
                },
                {
                    title: "Types of Meat",
                    audio: "TTS: Vegetarians don't eat meat. Beef comes from cows. I like my steak well done. Fried chicken is crispy. Bacon is pork. Fish live in water. Lamb is popular in some countries. I ate a sausage dog.",
                    items: [
                        { term: "Meat", sent: "Vegetarians don't eat meat.", trans: "<span style='color:#0077b6'>Vegetarianos não comem carne.</span>" },
                        { term: "Beef", sent: "Beef comes from cows.", trans: "<span style='color:#0077b6'>Carne bovina vem das vacas.</span>" },
                        { term: "Steak", sent: "I like my steak well done.", trans: "<span style='color:#0077b6'>Eu gosto do meu bife bem passado.</span>" },
                        { term: "Chicken", sent: "Fried chicken is crispy.", trans: "<span style='color:#0077b6'>Frango frito é crocante.</span>" },
                        { term: "Pork", sent: "Bacon is pork.", trans: "<span style='color:#0077b6'>Bacon é carne suína.</span>" },
                        { term: "Fish", sent: "Fish live in water.", trans: "<span style='color:#0077b6'>Peixes vivem na água.</span>" },
                        { term: "Lamb", sent: "Lamb is popular in some countries.", trans: "<span style='color:#0077b6'>Cordeiro é popular em alguns países.</span>" },
                        { term: "Sausage", sent: "I ate a sausage dog.", trans: "<span style='color:#0077b6'>Eu comi um cachorro-quente de salsicha.</span>" }
                    ]
                },
                {
                    title: "Verbs & Quantity",
                    audio: "TTS: We eat together. I drink water. I will pay the bill. Ask for the bill. I would like the menu. How many apples are there? How much water do you need? I have a lot of friends. I want some bread. Do you have any salt?",
                    items: [
                        { term: "Eat", sent: "We eat together.", trans: "<span style='color:#0077b6'>Nós comemos juntos.</span>" },
                        { term: "Drink", sent: "I drink water.", trans: "<span style='color:#0077b6'>Eu bebo água.</span>" },
                        { term: "Pay", sent: "I will pay the bill.", trans: "<span style='color:#0077b6'>Eu vou pagar a conta.</span>" },
                        { term: "Ask for", sent: "Ask for the bill.", trans: "<span style='color:#0077b6'>Peça a conta.</span>" },
                        { term: "Would like", sent: "I would like the menu.", trans: "<span style='color:#0077b6'>Eu gostaria do cardápio.</span>" },
                        { term: "How many", sent: "How many apples are there?", trans: "<span style='color:#0077b6'>Quantas maçãs tem aí?</span>" },
                        { term: "How much", sent: "How much water do you need?", trans: "<span style='color:#0077b6'>Quanta água você precisa?</span>" },
                        { term: "A lot of", sent: "I have a lot of friends.", trans: "<span style='color:#0077b6'>Eu tenho muitos amigos.</span>" },
                        { term: "Some", sent: "I want some bread.", trans: "<span style='color:#0077b6'>Eu quero um pouco de pão.</span>" },
                        { term: "Any", sent: "Do you have any salt?", trans: "<span style='color:#0077b6'>Você tem algum sal?</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills
            drills: [
                {
                    type: "mcq",
                    q: "Where do you go to eat a meal and pay for it?",
                    options: [
                        { t: "Library", c: false },
                        { t: "Restaurant", c: true },
                        { t: "Bank", c: false },
                        { t: "Hospital", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Who brings food to your table?",
                    options: [
                        { t: "Chef", c: false },
                        { t: "Waiter", c: true },
                        { t: "Driver", c: false },
                        { t: "Doctor", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You use this to cut meat:",
                    options: [
                        { t: "Spoon", c: false },
                        { t: "Fork", c: false },
                        { t: "Knife", c: true },
                        { t: "Napkin", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which one is a dessert?",
                    options: [
                        { t: "Steak", c: false },
                        { t: "Ice cream", c: true },
                        { t: "Soup", c: false },
                        { t: "Salad", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which one is a type of meat?",
                    options: [
                        { t: "Rice", c: false },
                        { t: "Chicken", c: true },
                        { t: "Bread", c: false },
                        { t: "Cheese", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which drink is hot?",
                    options: [
                        { t: "Soda", c: false },
                        { t: "Coffee", c: true },
                        { t: "Juice", c: false },
                        { t: "Water", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When you finish eating, you ask for the...",
                    options: [
                        { t: "Menu", c: false },
                        { t: "Order", c: false },
                        { t: "Bill", c: true },
                        { t: "Table", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ water do you drink? (Uncountable)",
                    options: [
                        { t: "How many", c: false },
                        { t: "How much", c: true },
                        { t: "A lot", c: false },
                        { t: "Many", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ apples are on the table? (Countable)",
                    options: [
                        { t: "How much", c: false },
                        { t: "How many", c: true },
                        { t: "Any", c: false },
                        { t: "Much", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Polite Request: 'I _______ the pasta, please.'",
                    options: [
                        { t: "want", c: false },
                        { t: "would like", c: true },
                        { t: "like", c: false },
                        { t: "eat", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Grammar: 'Do you have _______ vegetarian options?'",
                    options: [
                        { t: "some", c: false },
                        { t: "any", c: true },
                        { t: "a", c: false },
                        { t: "an", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You read this to choose your food:",
                    options: [
                        { t: "Bill", c: false },
                        { t: "Menu", c: true },
                        { t: "Napkin", c: false },
                        { t: "Plate", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Where is the food prepared?",
                    options: [
                        { t: "In the table", c: false },
                        { t: "In the menu", c: false },
                        { t: "In the kitchen", c: true },
                        { t: "In the bowl", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which one is NOT a meat?",
                    options: [
                        { t: "Pork", c: false },
                        { t: "Beef", c: false },
                        { t: "Lamb", c: false },
                        { t: "Lettuce", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "I need a _______ to eat my soup.",
                    options: [
                        { t: "Fork", c: false },
                        { t: "Knife", c: false },
                        { t: "Spoon", c: true },
                        { t: "Cup", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Breakfast, lunch, and dinner are types of _______.",
                    options: [
                        { t: "Meals", c: true },
                        { t: "Drinks", c: false },
                        { t: "Napkins", c: false },
                        { t: "Waiters", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A small restaurant that sells coffee and snacks is a...",
                    options: [
                        { t: "Kitchen", c: false },
                        { t: "Cafe", c: true },
                        { t: "Landfill", c: false },
                        { t: "Plate", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You use this to wipe your mouth after eating:",
                    options: [
                        { t: "Menu", c: false },
                        { t: "Bowl", c: false },
                        { t: "Fork", c: false },
                        { t: "Napkin", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Orange _______ is a popular fruit drink.",
                    options: [
                        { t: "Soda", c: false },
                        { t: "Water", c: false },
                        { t: "Juice", c: true },
                        { t: "Milk", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Before the main course, we usually have an...",
                    options: [
                        { t: "Appetizer", c: true },
                        { t: "Bill", c: false },
                        { t: "Kitchen", c: false },
                        { t: "Tip", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "I'd like to _______ my food now, please.",
                    options: [
                        { t: "Pay", c: false },
                        { t: "Cook", c: false },
                        { t: "Order", c: true },
                        { t: "Clean", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Extra money you give for good service is called a...",
                    options: [
                        { t: "Bill", c: false },
                        { t: "Tip", c: true },
                        { t: "Check", c: false },
                        { t: "Menu", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which one is a grain?",
                    options: [
                        { t: "Chicken", c: false },
                        { t: "Rice", c: true },
                        { t: "Salad", c: false },
                        { t: "Soda", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Pasta and pizza are famous _______ food.",
                    options: [
                        { t: "American", c: false },
                        { t: "French", c: false },
                        { t: "Italian", c: true },
                        { t: "Chinese", c: false }
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
                    title: "Polite Requests: WOULD LIKE",
                    audio: "TTS: We use would like or the short form d-like to say what we want politely, especially in restaurants. It is more polite than I want. Affirmative: I would like a salad. Question: Would you like some water? Or, What would you like to drink?",
                    explanation: "We use <b>would like</b> (or the short form <b>'d like</b>) to say what we want politely. It is more polite than 'I want'.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos 'would like' ou a forma curta ''d like' para dizer o que queremos educadamente. É mais educado que 'I want'.)</span>",
                    samples: [
                        { en: "I would like (I'd like) a salad.", pt: "<span style='color:#0077b6'>Eu gostaria de uma salada.</span>" },
                        { en: "Would you like some water?", pt: "<span style='color:#0077b6'>Você gostaria de um pouco de água?</span>" },
                        { en: "What would you like to drink?", pt: "<span style='color:#0077b6'>O que você gostaria de beber?</span>" }
                    ]
                },
                {
                    title: "Countable vs. Uncountable",
                    audio: "TTS: Nouns can be countable or uncountable. This changes how we talk about quantity. Countable things we can count, like one burger or two burgers. They have a plural form. Uncountable things we cannot count individually, like water, rice, sugar, or money. They usually have only a singular form.",
                    explanation: "Nouns are divided into two types. This affects how we use plural forms and quantifiers.<br><br><span style='color:#0077b6; font-style:italic;'>(Os substantivos são divididos em dois tipos. Isso afeta como usamos as formas plurais e os quantificadores.)</span>",
                    samples: [
                        { en: "COUNTABLE: One burger, two burgers. One napkin, three napkins.", pt: "<span style='color:#0077b6'>Contáveis: Têm forma singular e plural.</span>" },
                        { en: "UNCOUNTABLE: Water, rice, sugar, money.", pt: "<span style='color:#0077b6'>Incontáveis: Não têm plural. (Não se diz: two rices).</span>" }
                    ]
                },
                {
                    title: "Quantifiers: Many, Much, A lot of",
                    audio: "TTS: We use these words to talk about large quantities. Use Many with Countable Plural nouns. For example: many chairs. Use Much with Uncountable nouns, usually in negatives and questions. For example: We don't have much time. Use A lot of with both Countable and Uncountable nouns, usually in affirmative sentences. For example: I eat a lot of pizza.",
                    explanation: "We use these words to talk about large quantities.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos estas palavras para falar de grandes quantidades.)</span>",
                    samples: [
                        { en: "MANY: There are many chairs. (Countable Plural)", pt: "<span style='color:#0077b6'>Muitas: Usado com contáveis no plural.</span>" },
                        { en: "MUCH: We don't have much time. (Uncountable)", pt: "<span style='color:#0077b6'>Muito: Usado com incontáveis - negativas/perguntas.</span>" },
                        { en: "A LOT OF: I eat a lot of pizza. (Both types)", pt: "<span style='color:#0077b6'>Muito/Muitos: Usado com ambos - frases afirmativas.</span>" }
                    ]
                },
                {
                    title: "How many vs. How much",
                    audio: "TTS: To ask about quantity, we choose based on the noun. Use How many for Countable nouns. How many apples do you want? Use How much for Uncountable nouns and for Price. How much sugar is in this? Or, How much is the bill?",
                    explanation: "To ask about quantity, we choose based on the noun type.<br><br><span style='color:#0077b6; font-style:italic;'>(Para perguntar sobre quantidade, escolhemos com base no tipo de substantivo.)</span>",
                    samples: [
                        { en: "How many apples do you want? (Countable)", pt: "<span style='color:#0077b6'>Quantas maçãs você quer?</span>" },
                        { en: "How much sugar is in this? (Uncountable)", pt: "<span style='color:#0077b6'>Quanto açúcar tem nisso?</span>" },
                        { en: "How much is the bill? (Price)", pt: "<span style='color:#0077b6'>Quanto é a conta? (Preço)</span>" }
                    ]
                },
                {
                    title: "Some vs. Any",
                    audio: "TTS: We use these for indefinite quantities. Some is used in Affirmative sentences and for Offers or Requests. I have some money. Would you like some coffee? Any is used in Negative sentences and General Questions. I don't have any cash. Do you have any vegan dishes?",
                    explanation: "We use these for indefinite quantities (a little / a few).<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos estes para quantidades indefinidas - um pouco / alguns.)</span>",
                    samples: [
                        { en: "SOME: I have some money. Would you like some coffee? (Offer)", pt: "<span style='color:#0077b6'>Algum/Pouco: Afirmativas e Ofertas.</span>" },
                        { en: "ANY: I don't have any cash. Do you have any vegan dishes?", pt: "<span style='color:#0077b6'>Algum/Nenhum: Negativas e Perguntas gerais.</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Polite Requests (Would like)",
                    audio: "audio/8-2-4/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Waiter", 
                            text: "What would you like to order?", 
                            pt: "<span style='color:#0077b6'>O que você gostaria de pedir?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "I would like the steak, please. And he would like the pasta.", 
                            pt: "<span style='color:#0077b6'>Eu gostaria do bife, por favor. E ele gostaria do macarrão.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Countable vs. Uncountable",
                    audio: "audio/8-2-4/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Look at the table. There are three forks (countable) but no water (uncountable).", 
                            pt: "<span style='color:#0077b6'>Olhe para a mesa. Tem três garfos (contável), mas não tem água (incontável).</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "I will ask the waiter for some water.", 
                            pt: "<span style='color:#0077b6'>Vou pedir um pouco de água ao garçom.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Quantity (How much/many & Some/Any)",
                    audio: "audio/8-2-4/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "How many slices of pizza did you eat?", 
                            pt: "<span style='color:#0077b6'>Quantas fatias de pizza você comeu?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I ate four! How much soda is left?", 
                            pt: "<span style='color:#0077b6'>Eu comi quatro! Quanto refrigerante sobrou?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Not much. Just a little. Do we have any napkins?", 
                            pt: "<span style='color:#0077b6'>Não muito. Só um pouco. Nós temos algum guardanapo?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "No, we don't have any. But we have some wipes in my bag.", 
                            pt: "<span style='color:#0077b6'>Não, não temos nenhum. Mas temos alguns lenços na minha bolsa.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice Drills
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Choose the most polite way to order:",
                    options: [
                        {t: "I want pizza.", c: false},
                        {t: "Give me pizza.", c: false},
                        {t: "I would like a pizza.", c: true},
                        {t: "I like pizza.", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Which noun is Uncountable?",
                    options: [
                        {t: "Burger", c: false},
                        {t: "Tomato", c: false},
                        {t: "Rice", c: true},
                        {t: "Carrot", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Which noun is Countable?",
                    options: [
                        {t: "Milk", c: false},
                        {t: "Sandwich", c: true},
                        {t: "Soup", c: false},
                        {t: "Cheese", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"There are _______ people in the restaurant.\"",
                    options: [
                        {t: "much", c: false},
                        {t: "many", c: true},
                        {t: "any", c: false},
                        {t: "a lot", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I don't have _______ money.\"",
                    options: [
                        {t: "many", c: false},
                        {t: "much", c: true},
                        {t: "some", c: false},
                        {t: "a", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"_______ water do you drink?\"",
                    options: [
                        {t: "How many", c: false},
                        {t: "How much", c: true},
                        {t: "How long", c: false},
                        {t: "How often", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"_______ cookies are in the jar?\"",
                    options: [
                        {t: "How much", c: false},
                        {t: "How many", c: true},
                        {t: "How long", c: false},
                        {t: "What", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative: \"There isn't _______ bread left.\"",
                    options: [
                        {t: "some", c: false},
                        {t: "any", c: true},
                        {t: "many", c: false},
                        {t: "a", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Offer: \"Would you like _______ coffee?\"",
                    options: [
                        {t: "any", c: false},
                        {t: "many", c: false},
                        {t: "some", c: true},
                        {t: "a", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I _______ (would like) to pay. _______ (How much) is the bill?\"",
                    options: [
                        {t: "want / How many", c: false},
                        {t: "'d like / How much", c: true},
                        {t: "like / How much", c: false},
                        {t: "want / How much", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Which sentence is plural countable?",
                    options: [
                        {t: "Two waters", c: false},
                        {t: "Two rices", c: false},
                        {t: "Two burgers", c: true},
                        {t: "Two sugars", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Affirmative: \"We have _______ tomatoes for the salad.\"",
                    options: [
                        {t: "any", c: false},
                        {t: "much", c: false},
                        {t: "some", c: true},
                        {t: "a lot", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Question: \"Do you have _______ orange juice?\"",
                    options: [
                        {t: "some", c: false},
                        {t: "any", c: true},
                        {t: "many", c: false},
                        {t: "a", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"How _______ is the steak?\" \"It is 15 dollars.\"",
                    options: [
                        {t: "much", c: true},
                        {t: "many", c: false},
                        {t: "money", c: false},
                        {t: "price", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I eat _______ of fruit every morning.\"",
                    options: [
                        {t: "many", c: false},
                        {t: "much", c: false},
                        {t: "any", c: false},
                        {t: "a lot", c: true}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"We don't need _______ eggs for the cake.\"",
                    options: [
                        {t: "much", c: false},
                        {t: "many", c: true},
                        {t: "some", c: false},
                        {t: "a little", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"There isn't _______ sugar in my coffee.\"",
                    options: [
                        {t: "any", c: true},
                        {t: "some", c: false},
                        {t: "many", c: false},
                        {t: "a", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Which sentence is correct?",
                    options: [
                        {t: "I want two beefs.", c: false},
                        {t: "I would like two rices.", c: false},
                        {t: "I would like some rice.", c: true},
                        {t: "I want many juice.", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"How _______ bottles of soda do we need?\"",
                    options: [
                        {t: "much", c: false},
                        {t: "many", c: true},
                        {t: "any", c: false},
                        {t: "some", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Offer: \"Can I get you _______ dessert?\"",
                    options: [
                        {t: "any", c: false},
                        {t: "some", c: true},
                        {t: "many", c: false},
                        {t: "much", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"Is there _______ meat in the soup?\"",
                    options: [
                        {t: "many", c: false},
                        {t: "any", c: true},
                        {t: "a", c: false},
                        {t: "some", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"We have _______ of time before the movie.\"",
                    options: [
                        {t: "many", c: false},
                        {t: "much", c: false},
                        {t: "a lot", c: true},
                        {t: "any", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"How _______ cups of coffee do you drink?\"",
                    options: [
                        {t: "much", c: false},
                        {t: "many", c: true},
                        {t: "a lot", c: false},
                        {t: "any", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"She _______ (would like) a glass of milk.\"",
                    options: [
                        {t: "wants", c: false},
                        {t: "likes", c: false},
                        {t: "would likes", c: false},
                        {t: "would like", c: true}
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
                    text: "I would like a salad, please.<br><small style='color:#0077b6'>(Eu gostaria de uma salada, por favor.)</small>", 
                    audio: "TTS: I would like a salad, please.", 
                    arrow: "↘" 
                },
                { 
                    text: "How much water do you drink?<br><small style='color:#0077b6'>(Quanta água você bebe?)</small>", 
                    audio: "TTS: How much water do you drink?", 
                    arrow: "↘" 
                },
                { 
                    text: "Can I see the menu?<br><small style='color:#0077b6'>(Posso ver o cardápio?)</small>", 
                    audio: "TTS: Can I see the menu?", 
                    arrow: "↗" 
                },
                { 
                    text: "There aren't many tables left.<br><small style='color:#0077b6'>(Não sobraram muitas mesas.)</small>", 
                    audio: "TTS: There aren't many tables left.", 
                    arrow: "↘" 
                },
                { 
                    text: "Would you like some dessert?<br><small style='color:#0077b6'>(Você gostaria de um pouco de sobremesa?)</small>", 
                    audio: "TTS: Would you like some dessert?", 
                    arrow: "↗" 
                },
                { 
                    text: "I don't eat much meat.<br><small style='color:#0077b6'>(Eu não como muita carne.)</small>", 
                    audio: "TTS: I don't eat much meat.", 
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
                    instruction: "Listen to Albert ordering his lunch. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert pedindo o almoço dele. Digite as palavras que faltam.)</small>",
                    audio: "TTS: Hello. I would like a chicken sandwich and some water, please. I don't want any soda today. The service is very fast here!",
                    text: "Hello. I [would like] a chicken [sandwich] and some [water], please. I don't want any [soda] today. The [service] is very fast here!"
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation between Celine and the waiter. Choose the correct option.<br><small style='color:#0077b6'>(Ouça a conversa entre Celine e o garçom. Escolha a opção correta.)</small>",
                    audio: "audio/8-2-4/step5_drill2.mp3",
                    questions: [
                        { q: "Waiter: Are you ready to [order | pay]?", a: "order" },
                        { q: "Celine: Yes. I'd like the [pasta | pizza] with tomato sauce.", a: "pasta" },
                        { q: "Waiter: Would you like anything to [eat | drink]?", a: "drink" },
                        { q: "Celine: Just [some | any] orange juice, please.", a: "some" }
                    ]
                },
                // Drill 3: Audio Choice (TTS) - UPDATED
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer.<br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta correta.)</small>",
                    audio: "TTS: How many people are at the table?",
                    options: [
                        { t: "There is much people.", c: false },
                        { t: "There are four people.", c: true },
                        { t: "It is 20 dollars.", c: false },
                        { t: "I would like a table.", c: false }
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
                    title: "Narration: The Family Dinner",
                    audio: "TTS: The Family Dinner. Last Friday, the Silva family went to a new Italian restaurant. It was very crowded, so there weren't many tables available. They waited for ten minutes. When they sat down, the waiter brought the menu. Mr. Silva ordered a steak, and Mrs. Silva asked for some fish. The children wanted pizza. They ate a lot of food! At the end, Mr. Silva asked for the bill. It was expensive, but the meal was delicious. || audio/8-2-4/p6_text1.mp3",
                    body: "Last Friday, the Silva family went to a new Italian restaurant. It was very crowded, so there weren't many tables available. They waited for ten minutes. When they sat down, the waiter brought the menu. Mr. Silva ordered a steak, and Mrs. Silva asked for some fish. The children wanted pizza. They ate a lot of food! At the end, Mr. Silva asked for the bill. It was expensive, but the meal was delicious.",
                    questions: [
                        { 
                            q: "Were there many tables available?", 
                            options: [ 
                                {t: "Yes, there were.", c: false}, 
                                {t: "No, there weren't.", c: true}, 
                                {t: "There was one table.", c: false},
                                {t: "It was empty.", c: false}
                            ] 
                        },
                        { 
                            q: "What did the children want?", 
                            options: [ 
                                {t: "Steak", c: false}, 
                                {t: "Fish", c: false}, 
                                {t: "Pizza", c: true},
                                {t: "Pasta", c: false}
                            ] 
                        },
                        { 
                            q: "How was the meal?", 
                            options: [ 
                                {t: "Terrible", c: false}, 
                                {t: "Cheap", c: false}, 
                                {t: "Delicious", c: true},
                                {t: "Cold", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: Choosing a Pizza",
                    audio: "audio/8-2-4/p6_text2.mp3",
                    body: "<b>Albert:</b> Let's order a pizza. What toppings would you like?<br><b>Celine:</b> I'd like some cheese and tomatoes.<br><b>Albert:</b> Okay. Do you want any onions?<br><b>Celine:</b> No, I don't like onions. How much is the large pizza?<br><b>Albert:</b> It's 25 dollars. That's not too much.<br><b>Celine:</b> Great. Let's get some soda too.<br><b>Albert:</b> How many cans should we buy?<br><b>Celine:</b> Two cans are enough.",
                    questions: [
                        { 
                            q: "What toppings does Celine want?", 
                            options: [ 
                                {t: "Onions and peppers", c: false}, 
                                {t: "Cheese and tomatoes", c: true}, 
                                {t: "Chicken and corn", c: false},
                                {t: "Ham and eggs", c: false}
                            ] 
                        },
                        { 
                            q: "Does Celine like onions?", 
                            options: [ 
                                {t: "Yes, she does.", c: false}, 
                                {t: "No, she doesn't.", c: true}, 
                                {t: "She loves them.", c: false},
                                {t: "She wants some.", c: false}
                            ] 
                        },
                        { 
                            q: "How much is the pizza?", 
                            options: [ 
                                {t: "15 dollars", c: false}, 
                                {t: "20 dollars", c: false}, 
                                {t: "25 dollars", c: true},
                                {t: "30 dollars", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: My Favorite Cafe",
                    audio: "TTS: My Favorite Cafe. My favorite place to eat is 'The Cozy Cup'. It is a small coffee shop near my school. They serve the best hot chocolate. I usually go there with my friends. We don't spend much money because the prices are low. I like to order a slice of cake and some tea. The waiters are very friendly. There aren't many chairs, so sometimes we have to wait, but it is worth it. || audio/8-2-4/p6_text3.mp3",
                    body: "My favorite place to eat is \"The Cozy Cup\". It is a small coffee shop near my school. They serve the best hot chocolate. I usually go there with my friends. We don't spend much money because the prices are low. I like to order a slice of cake and some tea. The waiters are very friendly. There aren't many chairs, so sometimes we have to wait, but it is worth it.",
                    questions: [
                        { 
                            q: "What is the name of the place?", 
                            options: [ 
                                {t: "The Big Burger", c: false}, 
                                {t: "The Cozy Cup", c: true}, 
                                {t: "The Pizza Place", c: false},
                                {t: "The Salad Bar", c: false}
                            ] 
                        },
                        { 
                            q: "Why don't they spend much money?", 
                            options: [ 
                                {t: "Because the prices are low.", c: true}, 
                                {t: "Because they are rich.", c: false}, 
                                {t: "Because they don't eat.", c: false},
                                {t: "Because it is free.", c: false}
                            ] 
                        },
                        { 
                            q: "What is the problem with the cafe?", 
                            options: [ 
                                {t: "The food is bad.", c: false}, 
                                {t: "The waiters are rude.", c: false}, 
                                {t: "There aren't many chairs.", c: true},
                                {t: "There is no tea.", c: false}
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
                // Drill 1: Matching the Meanings (Quantifiers)
                {
                    type: "matching",
                    instruction: "Match the quantifier with its usage.<br><small style='color:#0077b6'>(Combine o quantificador com seu uso.)</small>",
                    pairs: [
                        { left: "Many", right: "Countable Plural", val: "1" },
                        { left: "Much", right: "Uncountable", val: "2" },
                        { left: "Some", right: "Affirmative / Offers", val: "3" },
                        { left: "Any", right: "Negative / Questions", val: "4" }
                    ]
                },
                // Drill 2: Unscramble the Sentences (Polite Requests)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a polite request.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar um pedido educado.)</small>",
                    sentence: "like / I / would / salad / a / .",
                    correct: "I would like a salad ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "much / is / How / burger / the / ?",
                    correct: "How much is the burger ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "any / don't / We / sugar / have / .",
                    correct: "We don't have any sugar ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "you / Would / like / coffee / some / ?",
                    correct: "Would you like some coffee ?"
                },
                // Drill 3: Odd One Out (Countable vs Uncountable)
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Apple", c: false },
                        { t: "Burger", c: false },
                        { t: "Water", c: true },
                        { t: "Chair", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Rice", c: false },
                        { t: "Sugar", c: false },
                        { t: "Milk", c: false },
                        { t: "Banana", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Many", c: false },
                        { t: "Few", c: false },
                        { t: "One", c: false },
                        { t: "Much", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Dollar", c: false },
                        { t: "Euro", c: false },
                        { t: "Money", c: true },
                        { t: "Coin", c: false }
                    ]
                },
                // Drill 4: Fill in the Blanks (Quantifiers)
                {
                    type: "dropdown",
                    instruction: "Choose the correct word to complete the sentence.<br><small style='color:#0077b6'>(Escolha a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "How [many | much] apples are there?", a: "many" },
                        { q: "I don't have [much | many] time.", a: "much" },
                        { q: "There is [some | any] water in the glass.", a: "some" },
                        { q: "Are there [any | some] sandwiches left?", a: "any" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: Ordering Food. Now it's your turn! Write a dialogue ordering food at a restaurant.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Pedindo Comida. Agora é a sua vez! Escreva um diálogo pedindo comida em um restaurante.)</span></small>",
            example: "\"Waiter: Hello. Are you ready? / Customer: Yes, I would like a burger and some fries, please. / Waiter: Anything to drink? / Customer: I'd like a soda. How much is it? / Waiter: It's $2.\"<br><br><small><span style='color:#0077b6'>(\"Garçom: Olá. Você está pronto? / Cliente: Sim, eu gostaria de um hambúrguer e algumas batatas fritas, por favor. / Garçom: Algo para beber? / Cliente: Eu gostaria de um refrigerante. Quanto custa? / Garçom: São 2 dólares.\")</span></small>",
            prompts: [
                "Who is ordering? (Customer and Waiter). <br><small><span style='color:#0077b6'>(Quem está pedindo? Cliente e Garçom).</span></small>",
                "What does the customer want to eat and drink? (Use 'I would like...'). <br><small><span style='color:#0077b6'>(O que o cliente quer comer e beber? Use 'I would like...').</span></small>",
                "Ask about the price. (How much is...?). <br><small><span style='color:#0077b6'>(Pergunte sobre o preço. Quanto custa...?).</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: General Eating Out)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                { 
                    term: "Restaurant", 
                    definition: "A place where people pay to sit and eat meals.", 
                    defTrans: "Restaurante",
                    example: "We are eating at a restaurant.", 
                    audioFront: "TTS: Restaurant",
                    audioBack: "TTS: We are eating at a restaurant." 
                },
                { 
                    term: "Cafe / Coffee Shop", 
                    definition: "A small restaurant selling light meals and drinks.", 
                    defTrans: "Cafeteria / Café",
                    example: "Let's meet at the cafe.", 
                    audioFront: "TTS: Cafe. Coffee Shop.",
                    audioBack: "TTS: Let's meet at the cafe." 
                },
                { 
                    term: "Fast food restaurant", 
                    definition: "A restaurant that serves food very quickly.", 
                    defTrans: "Lanchonete / Fast food",
                    example: "I want a burger from a fast food restaurant.", 
                    audioFront: "TTS: Fast food restaurant",
                    audioBack: "TTS: I want a burger from a fast food restaurant." 
                },
                { 
                    term: "Menu", 
                    definition: "A list of dishes available in a restaurant.", 
                    defTrans: "Cardápio / Menu",
                    example: "Can I see the menu, please?", 
                    audioFront: "TTS: Menu",
                    audioBack: "TTS: Can I see the menu, please?" 
                },
                { 
                    term: "Waiter", 
                    definition: "A man whose job is to serve customers in a restaurant.", 
                    defTrans: "Garçom",
                    example: "The waiter is bringing our food.", 
                    audioFront: "TTS: Waiter",
                    audioBack: "TTS: The waiter is bringing our food." 
                },
                { 
                    term: "Waitress", 
                    definition: "A woman whose job is to serve customers.", 
                    defTrans: "Garçonete",
                    example: "The waitress took our order.", 
                    audioFront: "TTS: Waitress",
                    audioBack: "TTS: The waitress took our order." 
                },
                { 
                    term: "Server", 
                    definition: "A person who serves food and drink (neutral term).", 
                    defTrans: "Garçom / Garçonete",
                    example: "Ask the server for water.", 
                    audioFront: "TTS: Server",
                    audioBack: "TTS: Ask the server for water." 
                },
                { 
                    term: "Chef", 
                    definition: "A professional cook.", 
                    defTrans: "Chef / Cozinheiro(a)",
                    example: "The chef cooks very well.", 
                    audioFront: "TTS: Chef",
                    audioBack: "TTS: The chef cooks very well." 
                },
                { 
                    term: "Order", 
                    definition: "A request for food or drink in a restaurant.", 
                    defTrans: "Pedido / Pedir",
                    example: "Are you ready to order?", 
                    audioFront: "TTS: Order",
                    audioBack: "TTS: Are you ready to order?" 
                },
                { 
                    term: "Bill / Check", 
                    definition: "A statement of the money owed for goods or services.", 
                    defTrans: "Conta",
                    example: "Can we have the bill, please?", 
                    audioFront: "TTS: Bill. Check.",
                    audioBack: "TTS: Can we have the bill, please?" 
                },
                { 
                    term: "Tip", 
                    definition: "A sum of money given as a reward for service.", 
                    defTrans: "Gorjeta",
                    example: "We left a nice tip.", 
                    audioFront: "TTS: Tip",
                    audioBack: "TTS: We left a nice tip." 
                },
                { 
                    term: "Table", 
                    definition: "A piece of furniture with a flat top and legs.", 
                    defTrans: "Mesa",
                    example: "Our table is near the window.", 
                    audioFront: "TTS: Table",
                    audioBack: "TTS: Our table is near the window." 
                },
                { 
                    term: "Chair", 
                    definition: "A separate seat for one person.", 
                    defTrans: "Cadeira",
                    example: "This chair is comfortable.", 
                    audioFront: "TTS: Chair",
                    audioBack: "TTS: This chair is comfortable." 
                },
                { 
                    term: "Plate", 
                    definition: "A flat dish from which food is eaten.", 
                    defTrans: "Prato",
                    example: "Put the food on the plate.", 
                    audioFront: "TTS: Plate",
                    audioBack: "TTS: Put the food on the plate." 
                },
                { 
                    term: "Bowl", 
                    definition: "A round, deep dish used for food or liquid.", 
                    defTrans: "Tigela",
                    example: "I need a bowl for my soup.", 
                    audioFront: "TTS: Bowl",
                    audioBack: "TTS: I need a bowl for my soup." 
                },
                { 
                    term: "Fork", 
                    definition: "An implement with prongs used for lifting food.", 
                    defTrans: "Garfo",
                    example: "We eat pasta with a fork.", 
                    audioFront: "TTS: Fork",
                    audioBack: "TTS: We eat pasta with a fork." 
                },
                { 
                    term: "Knife", 
                    definition: "An instrument with a blade used for cutting.", 
                    defTrans: "Faca",
                    example: "Use a knife to cut the meat.", 
                    audioFront: "TTS: Knife",
                    audioBack: "TTS: Use a knife to cut the meat." 
                },
                { 
                    term: "Spoon", 
                    definition: "An implement with a small bowl used for eating soup.", 
                    defTrans: "Colher",
                    example: "Eat your ice cream with a spoon.", 
                    audioFront: "TTS: Spoon",
                    audioBack: "TTS: Eat your ice cream with a spoon." 
                },
                { 
                    term: "Glass", 
                    definition: "A drinking container made of glass.", 
                    defTrans: "Copo",
                    example: "A glass of juice, please.", 
                    audioFront: "TTS: Glass",
                    audioBack: "TTS: A glass of juice, please." 
                },
                { 
                    term: "Cup", 
                    definition: "A small bowl-shaped container for drinking.", 
                    defTrans: "Xícara",
                    example: "I would like a cup of coffee.", 
                    audioFront: "TTS: Cup",
                    audioBack: "TTS: I would like a cup of coffee." 
                },
                { 
                    term: "Napkin", 
                    definition: "A piece of cloth or paper used to wipe the fingers or lips.", 
                    defTrans: "Guardanapo",
                    example: "Please pass me a napkin.", 
                    audioFront: "TTS: Napkin",
                    audioBack: "TTS: Please pass me a napkin." 
                },
                // --- Part 2: Foods, Courses, Drinks & Desserts ---
                { 
                    term: "Food", 
                    definition: "Any nutritious substance that people or animals eat or drink.", 
                    defTrans: "Comida",
                    example: "This food is delicious.", 
                    audioFront: "TTS: Food",
                    audioBack: "TTS: This food is delicious." 
                },
                { 
                    term: "Meal", 
                    definition: "An occasion when food is eaten, such as breakfast or dinner.", 
                    defTrans: "Refeição",
                    example: "Dinner is my favorite meal.", 
                    audioFront: "TTS: Meal",
                    audioBack: "TTS: Dinner is my favorite meal." 
                },
                { 
                    term: "Appetizer / Starter", 
                    definition: "A small dish of food taken before a meal or the main course.", 
                    defTrans: "Entrada / Aperitivo",
                    example: "We ordered salad as an appetizer.", 
                    audioFront: "TTS: Appetizer. Starter.",
                    audioBack: "TTS: We ordered salad as an appetizer." 
                },
                { 
                    term: "Main course", 
                    definition: "The most substantial course of a meal.", 
                    defTrans: "Prato principal",
                    example: "The main course is steak.", 
                    audioFront: "TTS: Main course",
                    audioBack: "TTS: The main course is steak." 
                },
                { 
                    term: "Side dish", 
                    definition: "A dish served as subsidiary to the main one.", 
                    defTrans: "Acompanhamento",
                    example: "I want fries as a side dish.", 
                    audioFront: "TTS: Side dish",
                    audioBack: "TTS: I want fries as a side dish." 
                },
                { 
                    term: "Soup", 
                    definition: "A liquid dish, typically made by boiling meat, fish, or vegetables.", 
                    defTrans: "Sopa",
                    example: "Vegetable soup is hot.", 
                    audioFront: "TTS: Soup",
                    audioBack: "TTS: Vegetable soup is hot." 
                },
                { 
                    term: "Salad", 
                    definition: "A cold dish of various mixtures of raw or cooked vegetables.", 
                    defTrans: "Salada",
                    example: "I eat a salad every day.", 
                    audioFront: "TTS: Salad",
                    audioBack: "TTS: I eat a salad every day." 
                },
                { 
                    term: "Bread", 
                    definition: "Food made of flour, water, and yeast mixed together and baked.", 
                    defTrans: "Pão",
                    example: "Fresh bread smells good.", 
                    audioFront: "TTS: Bread",
                    audioBack: "TTS: Fresh bread smells good." 
                },
                { 
                    term: "Rice", 
                    definition: "A swamp grass that is widely cultivated as a source of food.", 
                    defTrans: "Arroz",
                    example: "We eat rice and beans.", 
                    audioFront: "TTS: Rice",
                    audioBack: "TTS: We eat rice and beans." 
                },
                { 
                    term: "Beans", 
                    definition: "Edible seeds that grow in long pods.", 
                    defTrans: "Feijão",
                    example: "I like black beans.", 
                    audioFront: "TTS: Beans",
                    audioBack: "TTS: I like black beans." 
                },
                { 
                    term: "Pasta", 
                    definition: "A dish originally from Italy consisting of dough made from durum wheat.", 
                    defTrans: "Massa / Macarrão",
                    example: "Italian pasta is famous.", 
                    audioFront: "TTS: Pasta",
                    audioBack: "TTS: Italian pasta is famous." 
                },
                { 
                    term: "Pizza", 
                    definition: "A dish of Italian origin consisting of a flat, round base of dough baked with toppings.", 
                    defTrans: "Pizza",
                    example: "Let's order a pepperoni pizza.", 
                    audioFront: "TTS: Pizza",
                    audioBack: "TTS: Let's order a pepperoni pizza." 
                },
                { 
                    term: "Hamburger", 
                    definition: "A round patty of ground beef, fried or grilled and typically served on a bun.", 
                    defTrans: "Hambúrguer",
                    example: "This hamburger is huge.", 
                    audioFront: "TTS: Hamburger",
                    audioBack: "TTS: This hamburger is huge." 
                },
                { 
                    term: "Sandwich", 
                    definition: "An item of food consisting of two pieces of bread with meat, cheese, or filling.", 
                    defTrans: "Sanduíche",
                    example: "I packed a sandwich for lunch.", 
                    audioFront: "TTS: Sandwich",
                    audioBack: "TTS: I packed a sandwich for lunch." 
                },
                { 
                    term: "French fries / Chips", 
                    definition: "Potatoes cut into strips and deep-fried.", 
                    defTrans: "Batatas fritas",
                    example: "I love salty french fries.", 
                    audioFront: "TTS: French fries. Chips.",
                    audioBack: "TTS: I love salty french fries." 
                },
                { 
                    term: "Vegetables", 
                    definition: "A plant or part of a plant used as food.", 
                    defTrans: "Legumes / Verduras",
                    example: "Eat your vegetables to be healthy.", 
                    audioFront: "TTS: Vegetables",
                    audioBack: "TTS: Eat your vegetables to be healthy." 
                },
                { 
                    term: "Drink / Beverage", 
                    definition: "A liquid that can be swallowed as refreshment or nourishment.", 
                    defTrans: "Bebida",
                    example: "What drink would you like?", 
                    audioFront: "TTS: Drink. Beverage.",
                    audioBack: "TTS: What drink would you like?" 
                },
                { 
                    term: "Water", 
                    definition: "A colorless, transparent, odorless liquid.", 
                    defTrans: "Água",
                    example: "Drink plenty of water.", 
                    audioFront: "TTS: Water",
                    audioBack: "TTS: Drink plenty of water." 
                },
                { 
                    term: "Juice", 
                    definition: "The liquid obtained from or present in fruit or vegetables.", 
                    defTrans: "Suco",
                    example: "Orange juice is sweet.", 
                    audioFront: "TTS: Juice",
                    audioBack: "TTS: Orange juice is sweet." 
                },
                { 
                    term: "Soda / Soft drink", 
                    definition: "A sweet, carbonated drink.", 
                    defTrans: "Refrigerante",
                    example: "One can of soda, please.", 
                    audioFront: "TTS: Soda. Soft drink.",
                    audioBack: "TTS: One can of soda, please." 
                },
                { 
                    term: "Coffee", 
                    definition: "A hot drink made from the roasted and ground seeds of a tropical shrub.", 
                    defTrans: "Café",
                    example: "I drink coffee in the morning.", 
                    audioFront: "TTS: Coffee",
                    audioBack: "TTS: I drink coffee in the morning." 
                },
                { 
                    term: "Tea", 
                    definition: "A hot drink made by infusing the dried crushed leaves of the tea plant.", 
                    defTrans: "Chá",
                    example: "Would you like some tea?", 
                    audioFront: "TTS: Tea",
                    audioBack: "TTS: Would you like some tea?" 
                },
                { 
                    term: "Milk", 
                    definition: "An opaque white fluid rich in fat and protein.", 
                    defTrans: "Leite",
                    example: "The cat likes milk.", 
                    audioFront: "TTS: Milk",
                    audioBack: "TTS: The cat likes milk." 
                },
                { 
                    term: "Dessert", 
                    definition: "The sweet course eaten at the end of a meal.", 
                    defTrans: "Sobremesa",
                    example: "Ice cream is a great dessert.", 
                    audioFront: "TTS: Dessert",
                    audioBack: "TTS: Ice cream is a great dessert." 
                },
                { 
                    term: "Cake", 
                    definition: "An item of soft, sweet food made from a mixture of flour, sugar, and eggs.", 
                    defTrans: "Bolo",
                    example: "It is a chocolate cake.", 
                    audioFront: "TTS: Cake",
                    audioBack: "TTS: It is a chocolate cake." 
                },
                { 
                    term: "Ice cream", 
                    definition: "A soft frozen food made with sweetened and flavored milk fat.", 
                    defTrans: "Sorvete",
                    example: "I want vanilla ice cream.", 
                    audioFront: "TTS: Ice cream",
                    audioBack: "TTS: I want vanilla ice cream." 
                },
                { 
                    term: "Fruit", 
                    definition: "The sweet and fleshy product of a tree or other plant.", 
                    defTrans: "Fruta",
                    example: "An apple is a fruit.", 
                    audioFront: "TTS: Fruit",
                    audioBack: "TTS: An apple is a fruit." 
                },
                { 
                    term: "Pie", 
                    definition: "A baked dish of fruit, or meat and vegetables, typically with a base of pastry.", 
                    defTrans: "Torta",
                    example: "My grandma makes apple pie.", 
                    audioFront: "TTS: Pie",
                    audioBack: "TTS: My grandma makes apple pie." 
                },
                { 
                    term: "Pudding", 
                    definition: "A dessert with a creamy consistency.", 
                    defTrans: "Pudim",
                    example: "This pudding is creamy.", 
                    audioFront: "TTS: Pudding",
                    audioBack: "TTS: This pudding is creamy." 
                },
                { 
                    term: "Chocolate", 
                    definition: "A food preparation in the form of a paste or solid block made from roasted cacao seeds.", 
                    defTrans: "Chocolate",
                    example: "I love dark chocolate.", 
                    audioFront: "TTS: Chocolate",
                    audioBack: "TTS: I love dark chocolate." 
                },
                // --- Part 3: Meats, Verbs, Phrases & Grammar ---
                { 
                    term: "Meat", 
                    definition: "The flesh of an animal used as food.", 
                    defTrans: "Carne",
                    example: "Vegetarians don't eat meat.", 
                    audioFront: "TTS: Meat",
                    audioBack: "TTS: Vegetarians don't eat meat." 
                },
                { 
                    term: "Beef", 
                    definition: "The flesh of a cow, bull, or ox, used as food.", 
                    defTrans: "Carne bovina",
                    example: "Beef comes from cows.", 
                    audioFront: "TTS: Beef",
                    audioBack: "TTS: Beef comes from cows." 
                },
                { 
                    term: "Steak", 
                    definition: "High-quality beef taken from the hindquarters of the animal.", 
                    defTrans: "Bife / Filé",
                    example: "I like my steak well done.", 
                    audioFront: "TTS: Steak",
                    audioBack: "TTS: I like my steak well done." 
                },
                { 
                    term: "Chicken", 
                    definition: "A domestic fowl kept for its eggs or meat.", 
                    defTrans: "Frango",
                    example: "Fried chicken is tasty.", 
                    audioFront: "TTS: Chicken",
                    audioBack: "TTS: Fried chicken is tasty." 
                },
                { 
                    term: "Pork", 
                    definition: "The flesh of a pig used as food.", 
                    defTrans: "Carne suína",
                    example: "Bacon is pork.", 
                    audioFront: "TTS: Pork",
                    audioBack: "TTS: Bacon is pork." 
                },
                { 
                    term: "Fish", 
                    definition: "A limbless cold-blooded vertebrate animal with gills living in water.", 
                    defTrans: "Peixe",
                    example: "Grilled fish is healthy.", 
                    audioFront: "TTS: Fish",
                    audioBack: "TTS: Grilled fish is healthy." 
                },
                { 
                    term: "Lamb", 
                    definition: "A young sheep; the flesh of a young sheep used as food.", 
                    defTrans: "Cordeiro",
                    example: "Lamb is popular in spring.", 
                    audioFront: "TTS: Lamb",
                    audioBack: "TTS: Lamb is popular in spring." 
                },
                { 
                    term: "Sausage", 
                    definition: "An item of food in the form of a cylindrical length of minced pork.", 
                    defTrans: "Linguiça / Salsicha",
                    example: "I ate a sausage dog.", 
                    audioFront: "TTS: Sausage",
                    audioBack: "TTS: I ate a sausage dog." 
                },
                { 
                    term: "Eat", 
                    definition: "To put food into the mouth and chew and swallow it.", 
                    defTrans: "Comer",
                    example: "We eat together.", 
                    audioFront: "TTS: Eat",
                    audioBack: "TTS: We eat together." 
                },
                { 
                    term: "Drink", 
                    definition: "To take a liquid into the mouth and swallow.", 
                    defTrans: "Beber",
                    example: "I drink water every day.", 
                    audioFront: "TTS: Drink",
                    audioBack: "TTS: I drink water every day." 
                },
                { 
                    term: "Pay", 
                    definition: "To give money that is due for work done or goods received.", 
                    defTrans: "Pagar",
                    example: "I will pay with cash.", 
                    audioFront: "TTS: Pay",
                    audioBack: "TTS: I will pay with cash." 
                },
                { 
                    term: "Ask for", 
                    definition: "To request something.", 
                    defTrans: "Pedir (solicitar)",
                    example: "Ask for the bill.", 
                    audioFront: "TTS: Ask for",
                    audioBack: "TTS: Ask for the bill." 
                },
                { 
                    term: "Can I see the menu?", 
                    definition: "Polite request to view the food list.", 
                    defTrans: "Posso ver o cardápio?",
                    example: "Can I see the menu? I am hungry.", 
                    audioFront: "TTS: Can I see the menu?",
                    audioBack: "TTS: Can I see the menu? I am hungry." 
                },
                { 
                    term: "Are you ready to order?", 
                    definition: "Question asking if the customer has decided what to eat.", 
                    defTrans: "Você está pronto para pedir?",
                    example: "Are you ready to order now?", 
                    audioFront: "TTS: Are you ready to order?",
                    audioBack: "TTS: Are you ready to order now?" 
                },
                { 
                    term: "Would like", 
                    definition: "A polite way to say want.", 
                    defTrans: "Gostaria de (Polido)",
                    example: "I would like a salad.", 
                    audioFront: "TTS: Would like",
                    audioBack: "TTS: I would like a salad." 
                },
                { 
                    term: "Countable Nouns", 
                    definition: "Nouns that can be counted individually (1, 2, 3...).", 
                    defTrans: "Contáveis",
                    example: "Apples are countable.", 
                    audioFront: "TTS: Countable Nouns",
                    audioBack: "TTS: Apples are countable." 
                },
                { 
                    term: "Uncountable Nouns", 
                    definition: "Things we cannot count individually (liquids, powders).", 
                    defTrans: "Incontáveis",
                    example: "Water is uncountable.", 
                    audioFront: "TTS: Uncountable Nouns",
                    audioBack: "TTS: Water is uncountable." 
                },
                { 
                    term: "Many", 
                    definition: "A large number of (used for countable).", 
                    defTrans: "Muitos/as",
                    example: "There are many chairs.", 
                    audioFront: "TTS: Many",
                    audioBack: "TTS: There are many chairs." 
                },
                { 
                    term: "Much", 
                    definition: "A large amount of (used for uncountable).", 
                    defTrans: "Muito/a",
                    example: "We don't have much time.", 
                    audioFront: "TTS: Much",
                    audioBack: "TTS: We don't have much time." 
                },
                { 
                    term: "A lot of", 
                    definition: "A large number or amount (used for both).", 
                    defTrans: "Muito/Muitos",
                    example: "I eat a lot of fruit.", 
                    audioFront: "TTS: A lot of",
                    audioBack: "TTS: I eat a lot of fruit." 
                },
                { 
                    term: "How many...?", 
                    definition: "Used to ask about quantity for countable nouns.", 
                    defTrans: "Quantos/as...?",
                    example: "How many apples?", 
                    audioFront: "TTS: How many?",
                    audioBack: "TTS: How many apples?" 
                },
                { 
                    term: "How much...?", 
                    definition: "Used to ask about quantity for uncountable nouns and price.", 
                    defTrans: "Quanto/a...?",
                    example: "How much water?", 
                    audioFront: "TTS: How much?",
                    audioBack: "TTS: How much water?" 
                },
                { 
                    term: "Some", 
                    definition: "An unspecified amount or number of (Affirmative/Offer).", 
                    defTrans: "Algum/ns",
                    example: "I have some money.", 
                    audioFront: "TTS: Some",
                    audioBack: "TTS: I have some money." 
                },
                { 
                    term: "Any", 
                    definition: "One or some, no matter how much (Negative/Question).", 
                    defTrans: "Algum/Nenhum",
                    example: "I don't have any cash.", 
                    audioFront: "TTS: Any",
                    audioBack: "TTS: I don't have any cash." 
                }
            ]
        }
    ], // Closes steps

    // ======================================================
    // GLOSSARY (Part 1: Context, Restaurant, Tableware & Food)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        {
            topic: "Context",
            term: "menu",
            definition: "A list of dishes available in a restaurant.",
            translation: "cardápio / menu"
        },
        { 
            topic: "Context", 
            term: "ready-to-order", 
            definition: "Prepared to tell the waiter what food you want.", 
            translation: "pronto para pedir" 
        },
        { 
            topic: "Context", 
            term: "would-like", 
            definition: "A polite way of saying 'want'.", 
            translation: "gostaria de" 
        },
        { 
            topic: "Context", 
            term: "how-much", 
            definition: "Asking about the quantity of uncountable things or price.", 
            translation: "quanto / quanto custa" 
        },
        { 
            topic: "Context", 
            term: "little", 
            definition: "A small amount of something.", 
            translation: "um pouco" 
        },
        { 
            topic: "Context", 
            term: "prefer", 
            definition: "To like one thing or person better than another.", 
            translation: "preferir" 
        },
        { 
            topic: "Context", 
            term: "some", 
            definition: "An unspecified amount or number of something.", 
            translation: "algum / um pouco de" 
        },
        { 
            topic: "Context", 
            term: "money", 
            definition: "Coins or banknotes used to pay for things.", 
            translation: "dinheiro" 
        },
        {
            topic: "Context",
            term: "bill",
            definition: "A statement of the money owed for goods or services.",
            translation: "conta"
        },
        {
            topic: "Context",
            term: "tip",
            definition: "A sum of money given as a reward for service.",
            translation: "gorjeta"
        },

        // --- TOPIC 2: THE RESTAURANT (Places & People) ---
        { 
            topic: "Restaurant", 
            term: "Restaurant", 
            definition: "A place where people pay to sit and eat meals cooked on the premises.", 
            translation: "restaurante" 
        },
        { 
            topic: "Restaurant", 
            term: "Cafe / Coffee Shop", 
            definition: "A small restaurant selling light meals and drinks.", 
            translation: "cafeteria / café" 
        },
        { 
            topic: "Restaurant", 
            term: "Fast food restaurant", 
            definition: "A restaurant that serves food that is served very quickly.", 
            translation: "lanchonete" 
        },
        { 
            topic: "Restaurant", 
            term: "Waiter", 
            definition: "A person whose job is to serve customers at their tables.", 
            translation: "garçom" 
        },
        {
            topic: "Restaurant",
            term: "Waitress",
            definition: "A woman whose job is to serve customers at their tables.",
            translation: "garçonete"
        },
        { 
            topic: "Restaurant", 
            term: "Chef", 
            definition: "A professional cook, typically the chief cook in a restaurant.", 
            translation: "chef" 
        },
        { 
            topic: "Restaurant", 
            term: "Kitchen", 
            definition: "A room or area where food is prepared and cooked.", 
            translation: "cozinha" 
        },

        // --- TOPIC 3: TABLEWARE & FURNITURE ---
        { 
            topic: "Tableware", 
            term: "Table", 
            definition: "A piece of furniture with a flat top and legs used for eating.", 
            translation: "mesa" 
        },
        { 
            topic: "Tableware", 
            term: "Chair", 
            definition: "A separate seat for one person, typically with a back and four legs.", 
            translation: "cadeira" 
        },
        { 
            topic: "Tableware", 
            term: "Plate", 
            definition: "A flat dish, typically circular, from which food is eaten.", 
            translation: "prato" 
        },
        { 
            topic: "Tableware", 
            term: "Bowl", 
            definition: "A round, deep dish used for food or liquid.", 
            translation: "tigela" 
        },
        { 
            topic: "Tableware", 
            term: "Fork", 
            definition: "An implement with two or more prongs used for lifting food to the mouth.", 
            translation: "garfo" 
        },
        { 
            topic: "Tableware", 
            term: "Knife", 
            definition: "An instrument composed of a blade fixed into a handle, used for cutting.", 
            translation: "faca" 
        },
        { 
            topic: "Tableware", 
            term: "Spoon", 
            definition: "An implement consisting of a small, shallow oval bowl on a long handle.", 
            translation: "colher" 
        },
        { 
            topic: "Tableware", 
            term: "Glass", 
            definition: "A drinking container made of glass.", 
            translation: "copo" 
        },
        { 
            topic: "Tableware", 
            term: "Cup", 
            definition: "A small bowl-shaped container for drinking, typically having a handle.", 
            translation: "xícara" 
        },
        { 
            topic: "Tableware", 
            term: "Napkin", 
            definition: "A square piece of cloth or paper used at a meal to wipe the fingers or lips.", 
            translation: "guardanapo" 
        },

        // --- TOPIC 4: FOOD (Courses & Staples) ---
        {
            topic: "Food",
            term: "Meal",
            definition: "An occasion when food is eaten, such as breakfast, lunch, or dinner.",
            translation: "refeição"
        },
        { 
            topic: "Food", 
            term: "Appetizer / Starter", 
            definition: "A small dish of food taken before a meal or the main course.", 
            translation: "entrada / aperitivo" 
        },
        { 
            topic: "Food", 
            term: "Main course", 
            definition: "The most substantial course of a meal.", 
            translation: "prato principal" 
        },
        { 
            topic: "Food", 
            term: "Side dish", 
            definition: "A dish served as subsidiary to the main one.", 
            translation: "acompanhamento" 
        },
        { 
            topic: "Food", 
            term: "Bread", 
            definition: "Food made of flour, water, and yeast, mixed together and baked.", 
            translation: "pão" 
        },
        { 
            topic: "Food", 
            term: "Rice", 
            definition: "A swamp grass that is widely cultivated as a source of food.", 
            translation: "arroz" 
        },
        { 
            topic: "Food", 
            term: "Beans", 
            definition: "Edible seeds that grow in long pods.", 
            translation: "feijão" 
        },
        { 
            topic: "Food", 
            term: "Pasta", 
            definition: "A dish originally from Italy consisting of dough made from durum wheat.", 
            translation: "massa / macarrão" 
        },
        { 
            topic: "Food", 
            term: "Pizza", 
            definition: "A flat round base of dough baked with a topping of tomato sauce and cheese.", 
            translation: "pizza" 
        },
        { 
            topic: "Food", 
            term: "Hamburger", 
            definition: "A round patty of ground beef, fried or grilled and served on a bun.", 
            translation: "hambúrguer" 
        },
        {
            topic: "Food",
            term: "French fries / Chips",
            definition: "Potatoes cut into strips and deep-fried.",
            translation: "batatas fritas"
        },
        {
            topic: "Food",
            term: "Vegetables",
            definition: "A plant or part of a plant used as food.",
            translation: "legumes / verduras"
        },
        {
            topic: "Food",
            term: "Fruit",
            definition: "The sweet and fleshy product of a tree or other plant that contains seed.",
            translation: "fruta"
        },
        {
            topic: "Food",
            term: "Soup",
            definition: "A liquid dish, typically made by boiling meat, fish, or vegetables.",
            translation: "sopa"
        },
        {
            topic: "Food",
            term: "Salad",
            definition: "A cold dish of various mixtures of raw or cooked vegetables.",
            translation: "salada"
        },
        // --- TOPIC 5: DRINKS & DESSERTS ---
        { 
            topic: "Drinks & Desserts", 
            term: "Water", 
            definition: "A colorless, transparent, odorless liquid essential for life.", 
            translation: "água" 
        },
        { 
            topic: "Drinks & Desserts", 
            term: "Juice", 
            definition: "The liquid obtained from or present in fruit or vegetables.", 
            translation: "suco" 
        },
        { 
            topic: "Drinks & Desserts", 
            term: "Soda / Soft drink", 
            definition: "A sweet, carbonated non-alcoholic beverage.", 
            translation: "refrigerante" 
        },
        { 
            topic: "Drinks & Desserts", 
            term: "Coffee", 
            definition: "A hot drink made from the roasted and ground seeds of a tropical shrub.", 
            translation: "café" 
        },
        { 
            topic: "Drinks & Desserts", 
            term: "Tea", 
            definition: "A hot drink made by infusing dried crushed leaves in boiling water.", 
            translation: "chá" 
        },
        { 
            topic: "Drinks & Desserts", 
            term: "Milk", 
            definition: "An opaque white fluid rich in fat and protein secreted by female mammals.", 
            translation: "leite" 
        },
        { 
            topic: "Drinks & Desserts", 
            term: "Dessert", 
            definition: "The sweet course eaten at the end of a meal.", 
            translation: "sobremesa" 
        },
        { 
            topic: "Drinks & Desserts", 
            term: "Ice cream", 
            definition: "A soft frozen food made with sweetened and flavored milk fat.", 
            translation: "sorvete" 
        },
        { 
            topic: "Drinks & Desserts", 
            term: "Fruit", 
            definition: "The sweet and fleshy product of a tree or other plant that contains seed.", 
            translation: "fruta" 
        },
        { 
            topic: "Drinks & Desserts", 
            term: "Chocolate", 
            definition: "A food preparation in the form of a paste or solid block made from roasted cacao seeds.", 
            translation: "chocolate" 
        },

        // --- TOPIC 6: TYPES OF MEAT ---
        { 
            topic: "Meats", 
            term: "Meat", 
            definition: "The flesh of an animal (especially a mammal or bird) as food.", 
            translation: "carne" 
        },
        { 
            topic: "Meats", 
            term: "Beef", 
            definition: "The flesh of a cow, bull, or ox, used as food.", 
            translation: "carne bovina" 
        },
        { 
            topic: "Meats", 
            term: "Steak", 
            definition: "High-quality beef taken from the hindquarters of the animal.", 
            translation: "bife / filé" 
        },
        { 
            topic: "Meats", 
            term: "Chicken", 
            definition: "A domestic fowl kept for its eggs or meat.", 
            translation: "frango" 
        },
        { 
            topic: "Meats", 
            term: "Pork", 
            definition: "The flesh of a pig used as food.", 
            translation: "carne suína" 
        },
        { 
            topic: "Meats", 
            term: "Fish", 
            definition: "A limbless cold-blooded vertebrate animal with gills living in water.", 
            translation: "peixe" 
        },
        { 
            topic: "Meats", 
            term: "Lamb", 
            definition: "A young sheep; the flesh of a young sheep used as food.", 
            translation: "cordeiro" 
        },
        { 
            topic: "Meats", 
            term: "Sausage", 
            definition: "An item of food in the form of a cylindrical length of minced pork or other meat.", 
            translation: "linguiça / salsicha" 
        },

        // --- TOPIC 7: VERBS & PHRASES ---
        { 
            topic: "Verbs & Phrases", 
            term: "Eat", 
            definition: "To put food into the mouth and chew and swallow it.", 
            translation: "comer" 
        },
        { 
            topic: "Verbs & Phrases", 
            term: "Order", 
            definition: "A request for food or drink in a restaurant.", 
            translation: "pedido / pedir" 
        },
        { 
            topic: "Verbs & Phrases", 
            term: "Pay", 
            definition: "To give money that is due for work done or goods received.", 
            translation: "pagar" 
        },
        { 
            topic: "Verbs & Phrases", 
            term: "Ask for", 
            definition: "To request something, like the bill or a glass of water.", 
            translation: "pedir / solicitar" 
        },
        { 
            topic: "Verbs & Phrases", 
            term: "Can I see the menu?", 
            definition: "A polite request to view the list of available food.", 
            translation: "posso ver o cardápio?" 
        },
        { 
            topic: "Verbs & Phrases", 
            term: "Are you ready to order?", 
            definition: "A question asking if the customer has decided what to eat.", 
            translation: "você está pronto para pedir?" 
        },

        // --- TOPIC 8: GRAMMAR POINTS ---
        { 
            topic: "Grammar Points", 
            term: "would-like-grammar", 
            definition: "Polite request form used to say what we want in a restaurant.", 
            translation: "gostaria de" 
        },
        { 
            topic: "Grammar Points", 
            term: "countable-nouns", 
            definition: "Nouns that can be counted individually (e.g., apple, burger).", 
            translation: "substantivos contáveis" 
        },
        { 
            topic: "Grammar Points", 
            term: "uncountable-nouns", 
            definition: "Nouns that cannot be counted individually (e.g., water, rice).", 
            translation: "substantivos incontáveis" 
        },
        { 
            topic: "Grammar Points", 
            term: "quantifiers", 
            definition: "Words used to describe large or indefinite quantities (many, much, some).", 
            translation: "quantificadores" 
        },
        { 
            topic: "Grammar Points", 
            term: "how-many-question", 
            definition: "Used to ask about quantity for countable nouns.", 
            translation: "quantos / quantas" 
        },
        { 
            topic: "Grammar Points", 
            term: "how-much-question", 
            definition: "Used to ask about quantity for uncountable nouns and price.", 
            translation: "quanto / quanta" 
        }
    ]
}); // Final closing of the lesson object