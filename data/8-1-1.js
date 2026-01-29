/**
 * REACH English - LESSON DATA 8-1-1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "8-1-1", 
    grade: "8th Grade",       
    bimester: "1",   
    chapter: "1",    
    chapterTitle: "Let's Go Shopping!", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Name common gadgets and clothing items.<br>• Use adjectives to describe and compare things.<br>• Use comparatives (better, cheaper, more expensive).<br>• Use superlatives (the best, the cheapest, the most beautiful).<br>• Ask questions about shopping.",
            welcome: "Hello, Shoppers! It's Mr. D!<br><br>Welcome to \"Let's Go Shopping!\"! Today, we are going to the mall. We'll learn how to talk about the latest gadgets and stylish clothes. But more importantly, we'll learn how to compare them! Is this phone better than that one? Which dress is the most beautiful? We'll master comparatives and superlatives to become smart shoppers. Let's find the best deals!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Name common gadgets and clothing items. Use adjectives to describe and compare things. Use comparatives like better, cheaper, and more expensive. Use superlatives like the best, the cheapest, and the most beautiful. And ask questions about shopping.",
                welcome: "TTS: Hello, Shoppers! It's Mr. D! Welcome to Let's Go Shopping! Today, we are going to the mall. We'll learn how to talk about the latest gadgets and stylish clothes. But more importantly, we'll learn how to compare them! Is this phone better than that one? Which dress is the most beautiful? We'll master comparatives and superlatives to become smart shoppers. Let's find the best deals!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "(Sound of a busy shopping mall, beeping registers. Albert and Celine are looking at a display of electronics.)", 
            contextAudio: "audio/8-1-1/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Look at this [laptop](tooltip:laptop)! It is very [light](tooltip:light)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Yes, but [that one](tooltip:that-one) over there is [cheaper](tooltip:cheaper)." 
                },
                { 
                    speaker: "Celine", 
                    text: "True, but this one is [faster](tooltip:faster) and [more modern](tooltip:more-modern)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Hmm. [Which one](tooltip:which-one) is [better](tooltip:better)?" 
                },
                { 
                    speaker: "Celine", 
                    text: "I think this one is [the best](tooltip:the-best). It has [the biggest](tooltip:the-biggest) screen." 
                },
                { 
                    speaker: "Albert", 
                    text: "Okay. Now, let's look at [clothes](tooltip:clothes). I need a new [jacket](tooltip:jacket)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Let's go to that store. It has [the most stylish](tooltip:the-most-stylish) jackets in the mall!" 
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
                    title: "Gadgets",
                    audio: "TTS: Phone. Laptop. Headphones. Tablet. Smartwatch. Camera. Charger. Keyboard. Mouse. Screen.",
                    items: [
                        { term: "Phone", trans: "<small style='color:#0077b6'>Celular</small>" },
                        { term: "Laptop", trans: "<small style='color:#0077b6'>Notebook / Laptop</small>" },
                        { term: "Headphones", trans: "<small style='color:#0077b6'>Fones de ouvido</small>" },
                        { term: "Tablet", trans: "<small style='color:#0077b6'>Tablet</small>" },
                        { term: "Smartwatch", trans: "<small style='color:#0077b6'>Relógio inteligente</small>" },
                        { term: "Camera", trans: "<small style='color:#0077b6'>Câmera</small>" },
                        { term: "Charger", trans: "<small style='color:#0077b6'>Carregador</small>" },
                        { term: "Keyboard", trans: "<small style='color:#0077b6'>Teclado</small>" },
                        { term: "Mouse", trans: "<small style='color:#0077b6'>Mouse</small>" },
                        { term: "Screen", trans: "<small style='color:#0077b6'>Tela</small>" }
                    ]
                },
                {
                    title: "Clothes",
                    audio: "TTS: T-shirt. Jeans. Dress. Skirt. Jacket. Coat. Sneakers. Socks. Hat. Pants. Shorts. Shoes. Boots. Sweater. Hoodie. Belt. Scarf. Gloves. Sunglasses. Watch. Necklace.",
                    items: [
                        { term: "T-shirt", trans: "<small style='color:#0077b6'>Camiseta</small>" },
                        { term: "Jeans", trans: "<small style='color:#0077b6'>Jeans</small>" },
                        { term: "Dress", trans: "<small style='color:#0077b6'>Vestido</small>" },
                        { term: "Skirt", trans: "<small style='color:#0077b6'>Saia</small>" },
                        { term: "Jacket", trans: "<small style='color:#0077b6'>Jaqueta</small>" },
                        { term: "Coat", trans: "<small style='color:#0077b6'>Casaco</small>" },
                        { term: "Sneakers", trans: "<small style='color:#0077b6'>Tênis</small>" },
                        { term: "Socks", trans: "<small style='color:#0077b6'>Meias</small>" },
                        { term: "Hat", trans: "<small style='color:#0077b6'>Chapéu</small>" },
                        { term: "Pants", trans: "<small style='color:#0077b6'>Calças</small>" },
                        { term: "Shorts", trans: "<small style='color:#0077b6'>Shorts</small>" },
                        { term: "Shoes / Boots", trans: "<small style='color:#0077b6'>Sapatos / Botas</small>" },
                        { term: "Sweater / Hoodie", trans: "<small style='color:#0077b6'>Suéter / Moletom com capuz</small>" },
                        { term: "Belt", trans: "<small style='color:#0077b6'>Cinto</small>" },
                        { term: "Scarf", trans: "<small style='color:#0077b6'>Cachecol</small>" },
                        { term: "Gloves", trans: "<small style='color:#0077b6'>Luvas</small>" },
                        { term: "Sunglasses", trans: "<small style='color:#0077b6'>Óculos de sol</small>" },
                        { term: "Watch", trans: "<small style='color:#0077b6'>Relógio</small>" },
                        { term: "Necklace", trans: "<small style='color:#0077b6'>Colar</small>" }
                    ]
                },
                {
                    title: "Adjectives",
                    audio: "TTS: Cheap. Expensive. New. Old. Big. Small. Fast. Slow. Beautiful. Ugly. Good. Bad. Comfortable. Uncomfortable. Light. Heavy. Easy. Difficult. Stylish. Modern. Traditional. Useful. Powerful. Colorful.",
                    items: [
                        { term: "Cheap", trans: "<small style='color:#0077b6'>Barato(a)</small>" },
                        { term: "Expensive", trans: "<small style='color:#0077b6'>Caro(a)</small>" },
                        { term: "New / Old", trans: "<small style='color:#0077b6'>Novo(a) / Velho(a)</small>" },
                        { term: "Big / Small", trans: "<small style='color:#0077b6'>Grande / Pequeno(a)</small>" },
                        { term: "Fast / Slow", trans: "<small style='color:#0077b6'>Rápido(a) / Lento(a)</small>" },
                        { term: "Beautiful / Ugly", trans: "<small style='color:#0077b6'>Bonito(a) / Feio(a)</small>" },
                        { term: "Good / Bad", trans: "<small style='color:#0077b6'>Bom(Boa) / Ruim</small>" },
                        { term: "Comfortable", trans: "<small style='color:#0077b6'>Confortável</small>" },
                        { term: "Light / Heavy", trans: "<small style='color:#0077b6'>Leve / Pesado(a)</small>" },
                        { term: "Easy / Difficult", trans: "<small style='color:#0077b6'>Fácil / Difícil</small>" },
                        { term: "Stylish / Modern", trans: "<small style='color:#0077b6'>Estiloso(a) / Moderno(a)</small>" },
                        { term: "Traditional / Useful", trans: "<small style='color:#0077b6'>Tradicional / Útil</small>" },
                        { term: "Powerful / Colorful", trans: "<small style='color:#0077b6'>Poderoso(a) / Colorido(a)</small>" }
                    ]
                },
                {
                    title: "Shopping Verbs",
                    audio: "TTS: To buy. To sell. To choose. To try on. To pay. Price. Option. Decision.",
                    items: [
                        { term: "To buy / To sell", trans: "<small style='color:#0077b6'>Comprar / Vender</small>" },
                        { term: "To choose", trans: "<small style='color:#0077b6'>Escolher</small>" },
                        { term: "To try on", trans: "<small style='color:#0077b6'>Experimentar (roupa)</small>" },
                        { term: "To pay", trans: "<small style='color:#0077b6'>Pagar</small>" },
                        { term: "Price", trans: "<small style='color:#0077b6'>Preço</small>" },
                        { term: "Option / Decision", trans: "<small style='color:#0077b6'>Opção / Decisão</small>" }
                    ]
                },
                {
                    title: "Phrases",
                    audio: "TTS: How much is this? Can I try this on? It's too expensive. It's cheaper. What do you think about? It's very stylish. Where is the dressing room? This is the best.",
                    items: [
                        { term: "How much is this?", trans: "<small style='color:#0077b6'>Quanto custa isto?</small>" },
                        { term: "Can I try this on?", trans: "<small style='color:#0077b6'>Posso experimentar?</small>" },
                        { term: "It's too expensive", trans: "<small style='color:#0077b6'>É muito caro.</small>" },
                        { term: "It's cheaper", trans: "<small style='color:#0077b6'>É mais barato.</small>" },
                        { term: "What do you think...?", trans: "<small style='color:#0077b6'>O que você acha de...?</small>" },
                        { term: "It's very stylish", trans: "<small style='color:#0077b6'>É muito estiloso.</small>" },
                        { term: "Dressing room", trans: "<small style='color:#0077b6'>Provador</small>" },
                        { term: "This is the best", trans: "<small style='color:#0077b6'>Este é o melhor.</small>" }
                    ]
                }
            ],

            // ======================================================
            // 2B: Context Examples (Grouped & Tabbed)
            // ======================================================
            exampleGroups: [
                {
                    title: "Gadgets",
                    audio: "TTS: I use my phone to call friends. My laptop is new. These headphones have good sound. She plays games on her tablet. This smartwatch counts my steps. The camera takes great photos. I lost my charger. This keyboard is comfortable. The mouse is wireless. The screen is broken.",
                    items: [
                        { term: "Phone", sent: "I use my phone to call friends.", trans: "<span style='color:#0077b6'>Eu uso meu celular para ligar para amigos.</span>" },
                        { term: "Laptop", sent: "My laptop is new.", trans: "<span style='color:#0077b6'>Meu notebook é novo.</span>" },
                        { term: "Headphones", sent: "These headphones have good sound.", trans: "<span style='color:#0077b6'>Estes fones têm bom som.</span>" },
                        { term: "Tablet", sent: "She plays games on her tablet.", trans: "<span style='color:#0077b6'>Ela joga jogos no tablet dela.</span>" },
                        { term: "Smartwatch", sent: "This smartwatch counts my steps.", trans: "<span style='color:#0077b6'>Este relógio inteligente conta meus passos.</span>" },
                        { term: "Camera", sent: "The camera takes great photos.", trans: "<span style='color:#0077b6'>A câmera tira ótimas fotos.</span>" },
                        { term: "Charger", sent: "I lost my charger.", trans: "<span style='color:#0077b6'>Eu perdi meu carregador.</span>" },
                        { term: "Keyboard", sent: "This keyboard is comfortable.", trans: "<span style='color:#0077b6'>Este teclado é confortável.</span>" },
                        { term: "Mouse", sent: "The mouse is wireless.", trans: "<span style='color:#0077b6'>O mouse é sem fio.</span>" },
                        { term: "Screen", sent: "The screen is broken.", trans: "<span style='color:#0077b6'>A tela está quebrada.</span>" }
                    ]
                },
                {
                    title: "Clothes",
                    audio: "TTS: I bought a blue t-shirt. These jeans fit well. She is wearing a red dress. That skirt is stylish. Put on your jacket, it's cold. This coat is very warm. My sneakers are old. I need new socks. He wears a hat in the sun. These pants are too long.",
                    items: [
                        { term: "T-shirt", sent: "I bought a blue t-shirt.", trans: "<span style='color:#0077b6'>Eu comprei uma camiseta azul.</span>" },
                        { term: "Jeans", sent: "These jeans fit well.", trans: "<span style='color:#0077b6'>Estes jeans servem bem.</span>" },
                        { term: "Dress", sent: "She is wearing a red dress.", trans: "<span style='color:#0077b6'>Ela está usando um vestido vermelho.</span>" },
                        { term: "Skirt", sent: "That skirt is stylish.", trans: "<span style='color:#0077b6'>Aquela saia é estilosa.</span>" },
                        { term: "Jacket", sent: "Put on your jacket, it's cold.", trans: "<span style='color:#0077b6'>Vista sua jaqueta, está frio.</span>" },
                        { term: "Coat", sent: "This coat is very warm.", trans: "<span style='color:#0077b6'>Este casaco é muito quente.</span>" },
                        { term: "Sneakers", sent: "My sneakers are old.", trans: "<span style='color:#0077b6'>Meus tênis são velhos.</span>" },
                        { term: "Socks", sent: "I need new socks.", trans: "<span style='color:#0077b6'>Eu preciso de meias novas.</span>" },
                        { term: "Hat", sent: "He wears a hat in the sun.", trans: "<span style='color:#0077b6'>Ele usa um chapéu no sol.</span>" },
                        { term: "Pants", sent: "These pants are too long.", trans: "<span style='color:#0077b6'>Estas calças são muito compridas.</span>" }
                    ]
                },
                {
                    title: "Adjectives",
                    audio: "TTS: This pen is cheap. That car is expensive. I have a new bike. This book is old. It is a big store. The phone is small. This computer is fast. The internet is slow today. The dress is beautiful. I think this color is ugly. This is a good brand. The service was bad. This chair is comfortable. These shoes are uncomfortable. This laptop is light. The bag is heavy. You look stylish.",
                    items: [
                        { term: "Cheap", sent: "This pen is cheap.", trans: "<span style='color:#0077b6'>Esta caneta é barata.</span>" },
                        { term: "Expensive", sent: "That car is expensive.", trans: "<span style='color:#0077b6'>Aquele carro é caro.</span>" },
                        { term: "New", sent: "I have a new bike.", trans: "<span style='color:#0077b6'>Eu tenho uma bicicleta nova.</span>" },
                        { term: "Old", sent: "This book is old.", trans: "<span style='color:#0077b6'>Este livro é velho.</span>" },
                        { term: "Big", sent: "It is a big store.", trans: "<span style='color:#0077b6'>É uma loja grande.</span>" },
                        { term: "Small", sent: "The phone is small.", trans: "<span style='color:#0077b6'>O celular é pequeno.</span>" },
                        { term: "Fast", sent: "This computer is fast.", trans: "<span style='color:#0077b6'>Este computador é rápido.</span>" },
                        { term: "Slow", sent: "The internet is slow today.", trans: "<span style='color:#0077b6'>A internet está lenta hoje.</span>" },
                        { term: "Beautiful", sent: "The dress is beautiful.", trans: "<span style='color:#0077b6'>O vestido é bonito.</span>" },
                        { term: "Ugly", sent: "I think this color is ugly.", trans: "<span style='color:#0077b6'>Eu acho esta cor feia.</span>" },
                        { term: "Good", sent: "This is a good brand.", trans: "<span style='color:#0077b6'>Esta é uma boa marca.</span>" },
                        { term: "Bad", sent: "The service was bad.", trans: "<span style='color:#0077b6'>O serviço foi ruim.</span>" },
                        { term: "Comfortable", sent: "This chair is comfortable.", trans: "<span style='color:#0077b6'>Esta cadeira é confortável.</span>" },
                        { term: "Uncomfortable", sent: "These shoes are uncomfortable.", trans: "<span style='color:#0077b6'>Estes sapatos são desconfortáveis.</span>" },
                        { term: "Light", sent: "This laptop is light.", trans: "<span style='color:#0077b6'>Este notebook é leve.</span>" },
                        { term: "Heavy", sent: "The bag is heavy.", trans: "<span style='color:#0077b6'>A bolsa é pesada.</span>" },
                        { term: "Stylish", sent: "You look stylish.", trans: "<span style='color:#0077b6'>Você parece estiloso.</span>" }
                    ]
                },
                {
                    title: "Shopping Verbs",
                    audio: "TTS: I want to buy shoes. They sell flowers here. It's hard to choose. Can I try on this hat? Where do I pay? What is the price? That is a good option. Make a decision now.",
                    items: [
                        { term: "To buy", sent: "I want to buy shoes.", trans: "<span style='color:#0077b6'>Eu quero comprar sapatos.</span>" },
                        { term: "To sell", sent: "They sell flowers here.", trans: "<span style='color:#0077b6'>Eles vendem flores aqui.</span>" },
                        { term: "To choose", sent: "It's hard to choose.", trans: "<span style='color:#0077b6'>É difícil escolher.</span>" },
                        { term: "To try on", sent: "Can I try on this hat?", trans: "<span style='color:#0077b6'>Posso experimentar este chapéu?</span>" },
                        { term: "To pay", sent: "Where do I pay?", trans: "<span style='color:#0077b6'>Onde eu pago?</span>" },
                        { term: "Price", sent: "What is the price?", trans: "<span style='color:#0077b6'>Qual é o preço?</span>" },
                        { term: "Option", sent: "That is a good option.", trans: "<span style='color:#0077b6'>Essa é uma boa opção.</span>" },
                        { term: "Decision", sent: "Make a decision now.", trans: "<span style='color:#0077b6'>Tome uma decisão agora.</span>" }
                    ]
                },
                {
                    title: "Phrases",
                    audio: "TTS: How much is this? It is 20 dollars. Can I try this on? Sure, the fitting room is there. This is the best pizza.",
                    items: [
                        { term: "How much is this?", sent: "\"How much is this?\" \"It is 20 dollars.\"", trans: "<span style='color:#0077b6'>\"Quanto custa isto?\" \"Custa 20 dólares.\"</span>" },
                        { term: "Can I try this on?", sent: "\"Can I try this on?\" \"Sure, the fitting room is there.\"", trans: "<span style='color:#0077b6'>\"Posso experimentar?\" \"Claro, o provador é ali.\"</span>" },
                        { term: "The best", sent: "This is the best pizza.", trans: "<span style='color:#0077b6'>Esta é a melhor pizza.</span>" }
                    ]
                }
            ],

            // ======================================================
            // 2C: Practice Drills (24 MCQ Exercises)
            // ======================================================
            drills: [
                { 
                    type: "mcq", 
                    q: "Which device do you wear on your wrist?", 
                    options: [ {t: "Laptop", c: false}, {t: "Smartwatch", c: true}, {t: "Tablet", c: false}, {t: "Keyboard", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "You wear these on your feet to run.", 
                    options: [ {t: "Hat", c: false}, {t: "Gloves", c: false}, {t: "Sneakers", c: true}, {t: "Jacket", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "The opposite of 'Cheap' is...", 
                    options: [ {t: "New", c: false}, {t: "Expensive", c: true}, {t: "Ugly", c: false}, {t: "Light", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "The opposite of 'Heavy' is...", 
                    options: [ {t: "Light", c: true}, {t: "Big", c: false}, {t: "Fast", c: false}, {t: "Old", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "To put clothes on to see if they fit is...", 
                    options: [ {t: "To pay", c: false}, {t: "To buy", c: false}, {t: "To try on", c: true}, {t: "To sell", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "'_______ is this shirt?' 'It's $15.'", 
                    options: [ {t: "How many", c: false}, {t: "How much", c: true}, {t: "What time", c: false}, {t: "Where", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Something that looks good and fashionable is...", 
                    options: [ {t: "Ugly", c: false}, {t: "Stylish", c: true}, {t: "Slow", c: false}, {t: "Bad", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "You use this to type on a computer.", 
                    options: [ {t: "Screen", c: false}, {t: "Mouse", c: false}, {t: "Keyboard", c: true}, {t: "Charger", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "You wear these on your legs.", 
                    options: [ {t: "Jeans", c: true}, {t: "T-shirt", c: false}, {t: "Hat", c: false}, {t: "Scarf", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "A bed should be...", 
                    options: [ {t: "Uncomfortable", c: false}, {t: "Hard", c: false}, {t: "Comfortable", c: true}, {t: "Fast", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Which gadget do you use to take high-quality photos?", 
                    options: [ {t: "Charger", c: false}, {t: "Camera", c: true}, {t: "Mouse", c: false}, {t: "Screen", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "You wear these on your hands when it is cold.", 
                    options: [ {t: "Socks", c: false}, {t: "Gloves", c: true}, {t: "Jeans", c: false}, {t: "Belt", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "The opposite of 'Slow' is...", 
                    options: [ {t: "Fast", c: true}, {t: "Beautiful", c: false}, {t: "Easy", c: false}, {t: "Modern", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "To give money to a store to get a product is...", 
                    options: [ {t: "To sell", c: false}, {t: "To choose", c: false}, {t: "To pay", c: true}, {t: "To try on", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "You use these to listen to music privately.", 
                    options: [ {t: "Headphones", c: true}, {t: "Keyboard", c: false}, {t: "Smartwatch", c: false}, {t: "Camera", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "A casual shirt with short sleeves is a...", 
                    options: [ {t: "Coat", c: false}, {t: "T-shirt", c: true}, {t: "Dress", c: false}, {t: "Suit", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Where do you go to change clothes in a shop?", 
                    options: [ {t: "The counter", c: false}, {t: "The bathroom", c: false}, {t: "The dressing room", c: true}, {t: "The street", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "The opposite of 'Beautiful' is...", 
                    options: [ {t: "Ugly", c: true}, {t: "Big", c: false}, {t: "Good", c: false}, {t: "Colorful", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "A handheld computer with a touchscreen is a...", 
                    options: [ {t: "Mouse", c: false}, {t: "Charger", c: false}, {t: "Tablet", c: true}, {t: "Keyboard", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "You wear this around your neck to stay warm.", 
                    options: [ {t: "Belt", c: false}, {t: "Scarf", c: true}, {t: "Hat", c: false}, {t: "Socks", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "When a shop provides a product for money, they _______ it.", 
                    options: [ {t: "buy", c: false}, {t: "sell", c: true}, {t: "pay", c: false}, {t: "try on", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Something that uses the latest technology is...", 
                    options: [ {t: "Old", c: false}, {t: "Modern", c: true}, {t: "Traditional", c: false}, {t: "Ugly", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "If your phone battery is dead, you need a...", 
                    options: [ {t: "Mouse", c: false}, {t: "Keyboard", c: false}, {t: "Charger", c: true}, {t: "Screen", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "When an item is better than all others, it is...", 
                    options: [ {t: "The worst", c: false}, {t: "The best", c: true}, {t: "Cheap", c: false}, {t: "Small", c: false} ] 
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

            // 3A: Explanations (Tabbed Grammar Boxes)
            patterns: [
                {
                    title: "Comparative (Superiority)",
                    audio: "TTS: We use the Comparative of Superiority to compare two things. For short adjectives, add E R and than. Old becomes older than. For long adjectives, use more and than. Expensive becomes more expensive than. Irregular adjectives change completely. Good becomes better than. Bad becomes worse than. Far becomes further than.",
                    explanation: "We use this to compare two things or people, saying one is \"more\" than the other.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos isso para comparar duas coisas ou pessoas, dizendo que uma é 'mais' que a outra.)</span>",
                    samples: [
                        { en: "Old -> Older than (This phone is older than that one.)", pt: "<span style='color:#0077b6'>Velho -> Mais velho que (Este telefone é mais velho que aquele.)</span>" },
                        { en: "Expensive -> More expensive than (This car is more expensive than a bike.)", pt: "<span style='color:#0077b6'>Caro -> Mais caro que (Este carro é mais caro que uma bicicleta.)</span>" },
                        { en: "Good -> Better than / Bad -> Worse than", pt: "<span style='color:#0077b6'>Melhor que / Pior que</span>" }
                    ]
                },
                {
                    title: "Equality & Inferiority",
                    audio: "TTS: To say two things are equal, use as adjective as. This shirt is as cheap as that one. To say one is less than the other, use less adjective than. The blue hat is less stylish than the red one.",
                    explanation: "To compare items that are similar or less than others.<br><br><span style='color:#0077b6; font-style:italic;'>(Para comparar itens que são semelhantes ou 'menos' que outros.)</span>",
                    samples: [
                        { en: "Equality: as + adjective + as (as cheap as)", pt: "<span style='color:#0077b6'>Igualdade: tão... quanto (tão barato quanto)</span>" },
                        { en: "Inferiority: less + adjective + than (less stylish than)", pt: "<span style='color:#0077b6'>Inferioridade: menos... do que (menos estiloso do que)</span>" }
                    ]
                },
                {
                    title: "Superlative (Superiority)",
                    audio: "TTS: We use the superlative to compare one thing against a whole group. For short adjectives, use the plus adjective plus E S T. Old becomes the oldest. For long adjectives, use the most. Modern becomes the most modern. Good becomes the best. Bad becomes the worst.",
                    explanation: "We use this to compare one thing against a whole group (3 or more). It highlights the \"number one\".<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos isso para comparar uma coisa com um grupo inteiro. Destaca o 'número um'.)</span>",
                    samples: [
                        { en: "Short: the + adjective + -est (the oldest)", pt: "<span style='color:#0077b6'>Curto: o mais... (o mais velho)</span>" },
                        { en: "Long: the most + adjective (the most modern)", pt: "<span style='color:#0077b6'>Longo: o mais... (o mais moderno)</span>" },
                        { en: "Good -> The best / Bad -> The worst", pt: "<span style='color:#0077b6'>O melhor / O pior</span>" }
                    ]
                },
                {
                    title: "Superlative (Inferiority)",
                    audio: "TTS: To say something is the least in a group, use the least followed by the adjective. For example: the least expensive phone.",
                    explanation: "To say something is the \"least\" in a group.<br><br><span style='color:#0077b6; font-style:italic;'>(Para dizer que algo é o 'menos' em um grupo.)</span>",
                    samples: [
                        { en: "Structure: the least + adjective", pt: "<span style='color:#0077b6'>Estrutura: o menos...</span>" },
                        { en: "Example: The least expensive phone in the store.", pt: "<span style='color:#0077b6'>O telefone menos caro da loja.</span>" }
                    ]
                },
                {
                    title: "Spelling Rules",
                    audio: "TTS: When adding E R or E S T, check the spelling. Double the last letter for consonant-vowel-consonant words like big. Change Y to I for words like heavy. Just add R or S T if the word ends in E like nice.",
                    explanation: "When adding -er or -est, spelling can change.<br><br><span style='color:#0077b6; font-style:italic;'>(Ao adicionar -er ou -est, a ortografia pode mudar.)</span>",
                    samples: [
                        { en: "CVC: Big -> Bigger / The biggest", pt: "<span style='color:#0077b6'>Dobra a última letra.</span>" },
                        { en: "Ends in -Y: Heavy -> Heavier / The heaviest", pt: "<span style='color:#0077b6'>Troca 'y' por 'i'.</span>" },
                        { en: "Ends in -E: Nice -> Nicer / The nicest", pt: "<span style='color:#0077b6'>Apenas adicione 'r' ou 'st'.</span>" }
                    ]
                },
                {
                    title: "Comparing Quantity",
                    audio: "TTS: Use fewer to compare countable nouns like people, apples, or shirts. It means a smaller number. I bought fewer clothes than you.",
                    explanation: "Use 'fewer' to compare countable nouns (things you can count). It means a smaller number.<br><br><span style='color:#0077b6; font-style:italic;'>(Use 'fewer' para comparar substantivos contáveis. Significa um número menor.)</span>",
                    samples: [
                        { en: "Structure: Fewer + (plural noun) + than", pt: "<span style='color:#0077b6'>Estrutura: Menos + (substantivo) + do que</span>" },
                        { en: "Example: I bought fewer clothes than you.", pt: "<span style='color:#0077b6'>Eu comprei menos roupas do que você.</span>" }
                    ]
                }
            ],

            // ======================================================
            // 3B: Natural Examples (Dialogues Grouped in Boxes)
            // ======================================================
            dialogueGroups: [
                {
                    title: "Dialogue 1: Comparative (Superiority)",
                    audio: "audio/8-1-1/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Which phone should I buy?", 
                            pt: "<span style='color:#0077b6'>Qual telefone eu deveria comprar?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "The black one is faster than the white one. It is also more modern.", 
                            pt: "<span style='color:#0077b6'>O preto é mais rápido que o branco. Também é mais moderno.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Comparative (Equality/Inferiority)",
                    audio: "audio/8-1-1/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Look at these sneakers. They are as comfortable as my old ones.", 
                            pt: "<span style='color:#0077b6'>Olhe estes tênis. Eles são tão confortáveis quanto os meus velhos.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes, but they are less colorful than your old ones.", 
                            pt: "<span style='color:#0077b6'>Sim, mas eles são menos coloridos que os seus velhos.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Superlative (Best/Worst)",
                    audio: "audio/8-1-1/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Wow! This is the biggest TV in the mall.", 
                            pt: "<span style='color:#0077b6'>Uau! Esta é a maior TV do shopping.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "It is also the most expensive. It is the best quality.", 
                            pt: "<span style='color:#0077b6'>É também a mais cara. É a de melhor qualidade.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 4: Fewer (Quantity)",
                    audio: "audio/8-1-1/step3_dialogue4.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "This store is empty.", 
                            pt: "<span style='color:#0077b6'>Esta loja está vazia.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes, there are fewer people here than in the other store.", 
                            pt: "<span style='color:#0077b6'>Sim, tem menos pessoas aqui do que na outra loja.</span>" 
                        }
                    ]
                }
            ],

            // ======================================================
            // 3C: Grammar Practice (24 MCQ Exercises)
            // ======================================================
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Comparative (Short): 'Today is _______ (hot) than yesterday.'",
                    options: [ {t: "hoter", c: false}, {t: "more hot", c: false}, {t: "hotter", c: true}, {t: "hottest", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Comparative (Long): 'This dress is _______ (beautiful) than the skirt.'",
                    options: [ {t: "beautifuller", c: false}, {t: "more beautiful", c: true}, {t: "most beautiful", c: false}, {t: "as beautiful", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Comparative (Irregular): 'Your idea is _______ (good) than mine.'",
                    options: [ {t: "gooder", c: false}, {t: "best", c: false}, {t: "better", c: true}, {t: "more good", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Equality: 'My phone is _______ (expensive) yours.'",
                    options: [ {t: "as expensive as", c: true}, {t: "more expensive as", c: false}, {t: "expensive as", c: false}, {t: "as expensive than", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Superlative (Short): 'He is the _______ (fast) runner in the school.'",
                    options: [ {t: "faster", c: false}, {t: "most fast", c: false}, {t: "fastest", c: true}, {t: "fastest than", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Superlative (Long): 'This is the _______ (interesting) book.'",
                    options: [ {t: "most interesting", c: true}, {t: "more interesting", c: false}, {t: "interestiest", c: false}, {t: "best interesting", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Superlative (Irregular): 'That was the _______ (bad) movie ever!'",
                    options: [ {t: "badder", c: false}, {t: "worse", c: false}, {t: "worst", c: true}, {t: "baddest", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Inferiority: 'The blue car is _______ (fast) than the red car.' (It is slower).",
                    options: [ {t: "less fast", c: true}, {t: "least fast", c: false}, {t: "faster", c: false}, {t: "as fast", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Spelling Rules: What is the comparative of 'Heavy'?",
                    options: [ {t: "Heavyer", c: false}, {t: "Heavier", c: true}, {t: "More heavy", c: false}, {t: "Heavyest", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Fewer vs Less: 'I have _______ (games) than you.'",
                    options: [ {t: "less", c: false}, {t: "fewer", c: true}, {t: "minor", c: false}, {t: "little", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Comparative (Superiority): 'This smartwatch is _______ (modern) than that clock.'",
                    options: [ {t: "more modern", c: true}, {t: "moderner", c: false}, {t: "most modern", c: false}, {t: "as modern", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Superlative (Superiority): 'The Amazon is the _______ (long) river in the world.'",
                    options: [ {t: "longer", c: false}, {t: "longest", c: true}, {t: "most long", c: false}, {t: "longuest", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Irregular Superlative: 'This is the _______ (good) deal in the mall.'",
                    options: [ {t: "better", c: false}, {t: "goodest", c: false}, {t: "best", c: true}, {t: "more good", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Spelling Rule (CVC): 'My new bed is _______ (big) than my old one.'",
                    options: [ {t: "biger", c: false}, {t: "more big", c: false}, {t: "bigger", c: true}, {t: "biggest", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Superlative (Inferiority): 'This is the _______ (expensive) jacket; it's very cheap!'",
                    options: [ {t: "least expensive", c: true}, {t: "less expensive", c: false}, {t: "most expensive", c: false}, {t: "not expensive", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Comparative (Superiority): 'A laptop is _______ (useful) than a smartphone for typing.'",
                    options: [ {t: "usefuller", c: false}, {t: "more useful", c: true}, {t: "most useful", c: false}, {t: "less useful", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Spelling Rule: What is the Superlative of 'Heavy'?",
                    options: [ {t: "Heavyest", c: false}, {t: "Heaviest", c: true}, {t: "Most heavy", c: false}, {t: "Heavier", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Irregular Comparative: 'The traffic today is _______ (bad) than it was yesterday.'",
                    options: [ {t: "badder", c: false}, {t: "worst", c: false}, {t: "worse", c: true}, {t: "more bad", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Superlative (Short): 'Mt. Everest is the _______ (high) mountain in the world.'",
                    options: [ {t: "higher", c: false}, {t: "most high", c: false}, {t: "highest", c: true}, {t: "highest than", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Quantity: 'There are _______ (few) people in the store today than yesterday.'",
                    options: [ {t: "fewer", c: true}, {t: "less", c: false}, {t: "few", c: false}, {t: "fewest", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Inferiority: 'This computer is _______ (powerful) than the new supercomputer.'",
                    options: [ {t: "least powerful", c: false}, {t: "less powerful", c: true}, {t: "more powerful", c: false}, {t: "not powerful", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Superlative (Long): 'She is the _______ (stylish) girl in my class.'",
                    options: [ {t: "most stylish", c: true}, {t: "more stylish", c: false}, {t: "stylishest", c: false}, {t: "best stylish", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Spelling Rule (CVC): 'The sun is _______ (hot) than the moon.'",
                    options: [ {t: "hotter", c: true}, {t: "hoter", c: false}, {t: "more hot", c: false}, {t: "hottest", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Mixed Comparison: 'This car is _______ (fast) but it is _______ (comfortable) than yours.'",
                    options: [ 
                        {t: "fastest / comfortable", c: false}, 
                        {t: "fast / less comfortable", c: true}, 
                        {t: "faster / more comfortable", c: false}, 
                        {t: "as fast / more comfortable", c: false} 
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
                    text: "This phone is cheaper than that one.<br><small style='color:#0077b6'>(Este telefone é mais barato que aquele.)</small>", 
                    audio: "TTS: This phone is cheaper than that one.", 
                    arrow: "↘" 
                },
                { 
                    text: "Which laptop is the best?<br><small style='color:#0077b6'>(Qual notebook é o melhor?)</small>", 
                    audio: "TTS: Which laptop is the best?", 
                    arrow: "↘" 
                },
                { 
                    text: "This jacket is more comfortable.<br><small style='color:#0077b6'>(Esta jaqueta é mais confortável.)</small>", 
                    audio: "TTS: This jacket is more comfortable.", 
                    arrow: "↘" 
                },
                { 
                    text: "He is the fastest runner.<br><small style='color:#0077b6'>(Ele é o corredor mais rápido.)</small>", 
                    audio: "TTS: He is the fastest runner.", 
                    arrow: "↘" 
                },
                { 
                    text: "I have fewer games than you.<br><small style='color:#0077b6'>(Eu tenho menos jogos que você.)</small>", 
                    audio: "TTS: I have fewer games than you.", 
                    arrow: "↘" 
                },
                { 
                    text: "It is the most expensive item.<br><small style='color:#0077b6'>(É o item mais caro.)</small>", 
                    audio: "TTS: It is the most expensive item.", 
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
                    instruction: "Listen to Albert talking about headphones. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre fones de ouvido. Digite as palavras que faltam.)</small>",
                    audio: "TTS: I like these headphones. They are smaller than the others, but the sound is better. They are also cheaper.",
                    text: "I like these headphones. They are [smaller] than the others, but the sound is [better]. They are also [cheaper]."
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation between Celine and the shop assistant. Choose the correct option.<br><small style='color:#0077b6'>(Ouça a conversa entre Celine e o vendedor. Escolha a opção correta.)</small>",
                    audio: "audio/8-1-1/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: I want to try this [dress | shirt]. Do you have a [bigger | smaller] size?", a: "dress" },
                        { q: "Assistant: Yes, we do. Here is a [bigger | better] one.", a: "bigger" },
                        { q: "Celine: Thanks. This one is [more | less] comfortable.", a: "more" }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the description and choose the correct item.<br><small style='color:#0077b6'>(Ouça a descrição e escolha o item correto.)</small>",
                    audio: "TTS: This is the most important gadget. You use it to call people, take photos, and use the internet.",
                    options: [
                        { t: "A watch", c: false },
                        { t: "A camera", c: false },
                        { t: "A smartphone", c: true },
                        { t: "A laptop", c: false }
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
                    title: "Narration: Shopping for a Gift",
                    audio: "TTS: Tomorrow is my sister's birthday. I went to the mall to buy a gift. I looked at a smartwatch, but it was the most expensive item in the store. Then, I saw some headphones. They were cheaper than the watch and looked very stylish. Finally, I found a beautiful necklace. It was smaller than the headphones, but I think it is the best gift for her.",
                    body: "Tomorrow is my sister's birthday. I went to the mall to buy a gift. I looked at a smartwatch, but it was the most expensive item in the store. Then, I saw some headphones. They were cheaper than the watch and looked very stylish. Finally, I found a beautiful necklace. It was smaller than the headphones, but I think it is the best gift for her.",
                    questions: [
                        { 
                            q: "Why didn't the writer buy the smartwatch?", 
                            options: [ 
                                {t: "It was ugly.", c: false}, 
                                {t: "It was the most expensive.", c: true}, 
                                {t: "It was too big.", c: false},
                                {t: "It was old.", c: false}
                            ] 
                        },
                        { 
                            q: "How were the headphones compared to the watch?", 
                            options: [ 
                                {t: "More expensive", c: false}, 
                                {t: "Bigger", c: false}, 
                                {t: "Cheaper", c: true},
                                {t: "Worse", c: false}
                            ] 
                        },
                        { 
                            q: "What did the writer buy?", 
                            options: [ 
                                {t: "A necklace", c: true}, 
                                {t: "Headphones", c: false}, 
                                {t: "A smartwatch", c: false},
                                {t: "A phone", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: At the Shoe Store",
                    audio: "audio/8-1-1/p6_text2.mp3",
                    body: "<b>Albert:</b> I need new sneakers for school.<br><b>Celine:</b> Look at these red ones. They are very cool.<br><b>Albert:</b> Yes, but they are heavy. I want something lighter.<br><b>Celine:</b> What about these blue ones? They are the lightest sneakers here.<br><b>Albert:</b> Let me try them on. Wow! They are more comfortable than my old ones.<br><b>Celine:</b> And they are cheaper than the red ones!<br><b>Albert:</b> Perfect. I will take them.",
                    questions: [
                        { 
                            q: "What does Albert need?", 
                            options: [ 
                                {t: "Boots", c: false}, 
                                {t: "Sneakers", c: true}, 
                                {t: "Socks", c: false},
                                {t: "A hat", c: false}
                            ] 
                        },
                        { 
                            q: "Why didn't he like the red sneakers?", 
                            options: [ 
                                {t: "They were ugly.", c: false}, 
                                {t: "They were heavy.", c: true}, 
                                {t: "They were too small.", c: false},
                                {t: "They were expensive.", c: false}
                            ] 
                        },
                        { 
                            q: "Which sneakers were the lightest?", 
                            options: [ 
                                {t: "The red ones", c: false}, 
                                {t: "The old ones", c: false}, 
                                {t: "The blue ones", c: true},
                                {t: "The green ones", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: My New Laptop",
                    audio: "TTS: I bought a new laptop yesterday. My old laptop was very slow and heavy. The new one is much faster. It is also thinner and lighter, so I can carry it in my backpack easily. The screen is bigger, which is better for watching movies. It was more expensive than a tablet, but it is more useful for my homework. It is the best computer I have ever had.",
                    body: "I bought a new laptop yesterday. My old laptop was very slow and heavy. The new one is much faster. It is also thinner and lighter, so I can carry it in my backpack easily. The screen is bigger, which is better for watching movies. It was more expensive than a tablet, but it is more useful for my homework. It is the best computer I have ever had.",
                    questions: [
                        { 
                            q: "How is the new laptop compared to the old one?", 
                            options: [ 
                                {t: "Slower", c: false}, 
                                {t: "Heavier", c: false}, 
                                {t: "Faster", c: true},
                                {t: "Smaller", c: false}
                            ] 
                        },
                        { 
                            q: "Why is it good for movies?", 
                            options: [ 
                                {t: "The screen is bigger.", c: true}, 
                                {t: "It is cheaper.", c: false}, 
                                {t: "It is heavier.", c: false},
                                {t: "It is old.", c: false}
                            ] 
                        },
                        { 
                            q: "Is the laptop cheaper than a tablet?", 
                            options: [ 
                                {t: "Yes, it is.", c: false}, 
                                {t: "No, it is more expensive.", c: true}, 
                                {t: "It is the same price.", c: false},
                                {t: "The text doesn't say.", c: false}
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
                // Drill 1: Matching (Adjective -> Comparative)
                {
                    type: "matching",
                    instruction: "Match the adjective with its comparative form.<br><small style='color:#0077b6'>(Combine o adjetivo com sua forma comparativa.)</small>",
                    pairs: [
                        { left: "Good", right: "Better", val: "1" },
                        { left: "Bad", right: "Worse", val: "2" },
                        { left: "Big", right: "Bigger", val: "3" },
                        { left: "Expensive", right: "More expensive", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Unscramble)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "is / faster / car / This / that / than / one / .",
                    correct: "This car is faster than that one ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "the / best / is / She / singer / .",
                    correct: "She is the best singer ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "more / expensive / Gold / silver / is / than / .",
                    correct: "Gold is more expensive than silver ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "smallest / is / the / This / phone / .",
                    correct: "This is the smallest phone ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Bigger", c: false },
                        { t: "Faster", c: false },
                        { t: "Tall", c: true }, // Positive form, others are comparative
                        { t: "Slower", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Best", c: false },
                        { t: "Worst", c: false },
                        { t: "Most", c: false },
                        { t: "More", c: true } // Comparative marker, others are superlative markers
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Laptop", c: false },
                        { t: "Tablet", c: false },
                        { t: "Phone", c: false },
                        { t: "Shirt", c: true } // Clothing, others are gadgets
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Cheap", c: false },
                        { t: "Expensive", c: false },
                        { t: "Price", c: true }, // Noun, others are adjectives
                        { t: "Fast", c: false }
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown/Drag & Drop)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.<br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "This game is better [than | the | as | more] the old one.", a: "than" },
                        { q: "He is [the | than | as | more] fastest player.", a: "the" },
                        { q: "This dress is [more | the | than | as] beautiful than that one.", a: "more" },
                        { q: "I am [as | the | than | more] tall as you.", a: "as" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn! Compare two things you own (like gadgets, clothes, or shoes).<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas: Agora é a sua vez! Compare duas coisas que você possui, como aparelhos, roupas ou sapatos.)</span></small>",
            example: "\"I have an old tablet and a new phone. My phone is smaller than my tablet, but it is faster. The phone is more modern and more expensive. My phone is the best gadget I have.\"<br><br><small><span style='color:#0077b6'>(\"Eu tenho um tablet antigo e um celular novo. Meu celular é menor que meu tablet, mas é mais rápido. O celular é mais moderno e mais caro. Meu celular é o melhor aparelho que eu tenho.\")</span></small>",
            prompts: [
                "What are the two items? (My old phone and my new phone...) <br><span style='color:#0077b6'>(Quais são os dois itens?)</span>",
                "Compare them using short adjectives (bigger, smaller, faster...). <br><span style='color:#0077b6'>(Compare-os usando adjetivos curtos.)</span>",
                "Compare them using long adjectives (more expensive, more modern...). <br><span style='color:#0077b6'>(Compare-os usando adjetivos longos.)</span>",
                "Which one is the best? <br><span style='color:#0077b6'>(Qual deles é o melhor?)</span>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Gadgets & Clothes)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Gadgets ---
                { 
                    term: "Phone", 
                    definition: "A telephone, especially a mobile phone.", 
                    defTrans: "<span style='color:#0077b6'>Celular</span>",
                    example: "My phone has a good camera.", 
                    audioFront: "TTS: Phone",
                    audioBack: "TTS: My phone has a good camera." 
                },
                { 
                    term: "Laptop", 
                    definition: "A computer that is portable and suitable for use while traveling.", 
                    defTrans: "<span style='color:#0077b6'>Notebook / Laptop</span>",
                    example: "I use my laptop for homework.", 
                    audioFront: "TTS: Laptop",
                    audioBack: "TTS: I use my laptop for homework." 
                },
                { 
                    term: "Headphones", 
                    definition: "A pair of earphones joined by a band placed over the head.", 
                    defTrans: "<span style='color:#0077b6'>Fones de ouvido</span>",
                    example: "These headphones are loud.", 
                    audioFront: "TTS: Headphones",
                    audioBack: "TTS: These headphones are loud." 
                },
                { 
                    term: "Tablet", 
                    definition: "A portable PC, typically with a touchscreen display.", 
                    defTrans: "<span style='color:#0077b6'>Tablet</span>",
                    example: "She watches movies on her tablet.", 
                    audioFront: "TTS: Tablet",
                    audioBack: "TTS: She watches movies on her tablet." 
                },
                { 
                    term: "Smartwatch", 
                    definition: "A mobile device with a touchscreen display, designed to be worn on the wrist.", 
                    defTrans: "<span style='color:#0077b6'>Relógio inteligente</span>",
                    example: "His smartwatch tracks his steps.", 
                    audioFront: "TTS: Smartwatch",
                    audioBack: "TTS: His smartwatch tracks his steps." 
                },
                { 
                    term: "Camera", 
                    definition: "A device for recording visual images in the form of photographs or video.", 
                    defTrans: "<span style='color:#0077b6'>Câmera</span>",
                    example: "This camera takes clear photos.", 
                    audioFront: "TTS: Camera",
                    audioBack: "TTS: This camera takes clear photos." 
                },
                { 
                    term: "Charger", 
                    definition: "A device for charging a battery or battery-powered equipment.", 
                    defTrans: "<span style='color:#0077b6'>Carregador</span>",
                    example: "I need a charger for my phone.", 
                    audioFront: "TTS: Charger",
                    audioBack: "TTS: I need a charger for my phone." 
                },
                { 
                    term: "Keyboard", 
                    definition: "A panel of keys that operate a computer or typewriter.", 
                    defTrans: "<span style='color:#0077b6'>Teclado</span>",
                    example: "The keyboard is easy to type on.", 
                    audioFront: "TTS: Keyboard",
                    audioBack: "TTS: The keyboard is easy to type on." 
                },
                { 
                    term: "Mouse", 
                    definition: "A small handheld device used to move the cursor on a computer screen.", 
                    defTrans: "<span style='color:#0077b6'>Mouse</span>",
                    example: "Click with the mouse.", 
                    audioFront: "TTS: Mouse",
                    audioBack: "TTS: Click with the mouse." 
                },
                { 
                    term: "Screen", 
                    definition: "The flat panel on an electronic device where images are displayed.", 
                    defTrans: "<span style='color:#0077b6'>Tela</span>",
                    example: "The screen is very bright.", 
                    audioFront: "TTS: Screen",
                    audioBack: "TTS: The screen is very bright." 
                },

                // --- Clothes & Accessories ---
                { 
                    term: "T-shirt", 
                    definition: "A short-sleeved casual top, generally made of cotton.", 
                    defTrans: "<span style='color:#0077b6'>Camiseta</span>",
                    example: "I wear a t-shirt in summer.", 
                    audioFront: "TTS: T-shirt",
                    audioBack: "TTS: I wear a t-shirt in summer." 
                },
                { 
                    term: "Jeans", 
                    definition: "Hard-wearing trousers made of denim or other cotton fabric.", 
                    defTrans: "<span style='color:#0077b6'>Jeans</span>",
                    example: "Blue jeans are popular.", 
                    audioFront: "TTS: Jeans",
                    audioBack: "TTS: Blue jeans are popular." 
                },
                { 
                    term: "Dress", 
                    definition: "A one-piece garment for a woman or girl that extends down over the legs.", 
                    defTrans: "<span style='color:#0077b6'>Vestido</span>",
                    example: "She wore a lovely dress.", 
                    audioFront: "TTS: Dress",
                    audioBack: "TTS: She wore a lovely dress." 
                },
                { 
                    term: "Skirt", 
                    definition: "A garment fastened around the waist and hanging down around the legs.", 
                    defTrans: "<span style='color:#0077b6'>Saia</span>",
                    example: "The skirt is pink.", 
                    audioFront: "TTS: Skirt",
                    audioBack: "TTS: The skirt is pink." 
                },
                { 
                    term: "Jacket", 
                    definition: "An outer garment extending either to the waist or the hips.", 
                    defTrans: "<span style='color:#0077b6'>Jaqueta</span>",
                    example: "Put on your jacket.", 
                    audioFront: "TTS: Jacket",
                    audioBack: "TTS: Put on your jacket." 
                },
                { 
                    term: "Coat", 
                    definition: "An outer garment with sleeves, worn outdoors to protect against cold.", 
                    defTrans: "<span style='color:#0077b6'>Casaco</span>",
                    example: "This coat is for winter.", 
                    audioFront: "TTS: Coat",
                    audioBack: "TTS: This coat is for winter." 
                },
                { 
                    term: "Sneakers", 
                    definition: "Soft shoes worn for sports or casual occasions.", 
                    defTrans: "<span style='color:#0077b6'>Tênis</span>",
                    example: "I run in my sneakers.", 
                    audioFront: "TTS: Sneakers",
                    audioBack: "TTS: I run in my sneakers." 
                },
                { 
                    term: "Socks", 
                    definition: "A soft covering for the foot and lower leg.", 
                    defTrans: "<span style='color:#0077b6'>Meias</span>",
                    example: "He wears white socks.", 
                    audioFront: "TTS: Socks",
                    audioBack: "TTS: He wears white socks." 
                },
                { 
                    term: "Hat", 
                    definition: "A shaped covering for the head worn for warmth or fashion.", 
                    defTrans: "<span style='color:#0077b6'>Chapéu</span>",
                    example: "The hat protects from the sun.", 
                    audioFront: "TTS: Hat",
                    audioBack: "TTS: The hat protects from the sun." 
                },
                { 
                    term: "Pants", 
                    definition: "An outer garment covering the body from the waist to the ankles.", 
                    defTrans: "<span style='color:#0077b6'>Calças</span>",
                    example: "These pants are too long.", 
                    audioFront: "TTS: Pants",
                    audioBack: "TTS: These pants are too long." 
                },
                { 
                    term: "Shorts", 
                    definition: "Short trousers that reach only to the knees or thighs.", 
                    defTrans: "<span style='color:#0077b6'>Shorts</span>",
                    example: "I wear shorts to the beach.", 
                    audioFront: "TTS: Shorts",
                    audioBack: "TTS: I wear shorts to the beach." 
                },
                { 
                    term: "Shoes / Boots", 
                    definition: "Coverings for the foot, typically made of leather.", 
                    defTrans: "<span style='color:#0077b6'>Sapatos / Botas</span>",
                    example: "These boots are heavy.", 
                    audioFront: "TTS: Shoes Boots",
                    audioBack: "TTS: These boots are heavy." 
                },
                { 
                    term: "Sweater / Hoodie", 
                    definition: "A knitted garment for the upper body or a sweatshirt with a hood.", 
                    defTrans: "<span style='color:#0077b6'>Suéter / Moletom com capuz</span>",
                    example: "This sweater is warm.", 
                    audioFront: "TTS: Sweater Hoodie",
                    audioBack: "TTS: This sweater is warm." 
                },
                { 
                    term: "Belt", 
                    definition: "A strip of leather or other material worn around the waist.", 
                    defTrans: "<span style='color:#0077b6'>Cinto</span>",
                    example: "He wears a leather belt.", 
                    audioFront: "TTS: Belt",
                    audioBack: "TTS: He wears a leather belt." 
                },
                { 
                    term: "Scarf", 
                    definition: "A length of fabric worn around the neck or head.", 
                    defTrans: "<span style='color:#0077b6'>Cachecol</span>",
                    example: "Wrap the scarf around your neck.", 
                    audioFront: "TTS: Scarf",
                    audioBack: "TTS: Wrap the scarf around your neck." 
                },
                { 
                    term: "Gloves", 
                    definition: "Coverings for the hand worn for protection against cold or dirt.", 
                    defTrans: "<span style='color:#0077b6'>Luvas</span>",
                    example: "Gloves keep hands warm.", 
                    audioFront: "TTS: Gloves",
                    audioBack: "TTS: Gloves keep hands warm." 
                },
                { 
                    term: "Sunglasses", 
                    definition: "Glasses tinted to protect the eyes from sunlight or glare.", 
                    defTrans: "<span style='color:#0077b6'>Óculos de sol</span>",
                    example: "I need my sunglasses.", 
                    audioFront: "TTS: Sunglasses",
                    audioBack: "TTS: I need my sunglasses." 
                },
                { 
                    term: "Watch", 
                    definition: "A small timepiece worn typically on a strap on one's wrist.", 
                    defTrans: "<span style='color:#0077b6'>Relógio</span>",
                    example: "What time is it on your watch?", 
                    audioFront: "TTS: Watch",
                    audioBack: "TTS: What time is it on your watch?" 
                },
                { 
                    term: "Necklace", 
                    definition: "An ornamental chain worn around the neck.", 
                    defTrans: "<span style='color:#0077b6'>Colar</span>",
                    example: "That is a gold necklace.", 
                    audioFront: "TTS: Necklace",
                    audioBack: "TTS: That is a gold necklace." 
                },
                { 
                    term: "Cheap", 
                    definition: "Costing very little; relatively low in price.", 
                    defTrans: "<span style='color:#0077b6'>Barato(a)</span>",
                    example: "This pen is very cheap.", 
                    audioFront: "TTS: Cheap",
                    audioBack: "TTS: This pen is very cheap." 
                },
                { 
                    term: "Expensive", 
                    definition: "Costing a lot of money.", 
                    defTrans: "<span style='color:#0077b6'>Caro(a)</span>",
                    example: "That car is expensive.", 
                    audioFront: "TTS: Expensive",
                    audioBack: "TTS: That car is expensive." 
                },
                { 
                    term: "New", 
                    definition: "Not existing before; made or introduced recently.", 
                    defTrans: "<span style='color:#0077b6'>Novo(a)</span>",
                    example: "I bought a new book.", 
                    audioFront: "TTS: New",
                    audioBack: "TTS: I bought a new book." 
                },
                { 
                    term: "Old", 
                    definition: "Having lived or existed for a long time.", 
                    defTrans: "<span style='color:#0077b6'>Velho(a)</span>",
                    example: "This house is old.", 
                    audioFront: "TTS: Old",
                    audioBack: "TTS: This house is old." 
                },
                { 
                    term: "Big", 
                    definition: "Of considerable size, extent, or intensity.", 
                    defTrans: "<span style='color:#0077b6'>Grande</span>",
                    example: "Elephants are big.", 
                    audioFront: "TTS: Big",
                    audioBack: "TTS: Elephants are big." 
                },
                { 
                    term: "Small", 
                    definition: "Of a size that is less than normal or usual.", 
                    defTrans: "<span style='color:#0077b6'>Pequeno(a)</span>",
                    example: "Ants are small.", 
                    audioFront: "TTS: Small",
                    audioBack: "TTS: Ants are small." 
                },
                { 
                    term: "Fast", 
                    definition: "Moving or capable of moving at high speed.", 
                    defTrans: "<span style='color:#0077b6'>Rápido(a)</span>",
                    example: "This computer is fast.", 
                    audioFront: "TTS: Fast",
                    audioBack: "TTS: This computer is fast." 
                },
                { 
                    term: "Slow", 
                    definition: "Moving or operating at a low speed.", 
                    defTrans: "<span style='color:#0077b6'>Lento(a)</span>",
                    example: "The turtle is slow.", 
                    audioFront: "TTS: Slow",
                    audioBack: "TTS: The turtle is slow." 
                },
                { 
                    term: "Beautiful", 
                    definition: "Pleasing the senses or mind aesthetically.", 
                    defTrans: "<span style='color:#0077b6'>Bonito(a)</span>",
                    example: "The view is beautiful.", 
                    audioFront: "TTS: Beautiful",
                    audioBack: "TTS: The view is beautiful." 
                },
                { 
                    term: "Ugly", 
                    definition: "Unpleasant or repulsive, especially in appearance.", 
                    defTrans: "<span style='color:#0077b6'>Feio(a)</span>",
                    example: "The monster is ugly.", 
                    audioFront: "TTS: Ugly",
                    audioBack: "TTS: The monster is ugly." 
                },
                { 
                    term: "Good", 
                    definition: "To be desired or approved of.", 
                    defTrans: "<span style='color:#0077b6'>Bom / Boa</span>",
                    example: "This is a good movie.", 
                    audioFront: "TTS: Good",
                    audioBack: "TTS: This is a good movie." 
                },
                { 
                    term: "Bad", 
                    definition: "Of poor quality or a low standard.", 
                    defTrans: "<span style='color:#0077b6'>Ruim</span>",
                    example: "The weather is bad.", 
                    audioFront: "TTS: Bad",
                    audioBack: "TTS: The weather is bad." 
                },
                { 
                    term: "Comfortable", 
                    definition: "Providing physical ease and relaxation.", 
                    defTrans: "<span style='color:#0077b6'>Confortável</span>",
                    example: "This sofa is comfortable.", 
                    audioFront: "TTS: Comfortable",
                    audioBack: "TTS: This sofa is comfortable." 
                },
                { 
                    term: "Uncomfortable", 
                    definition: "Causing or feeling slight pain or physical discomfort.", 
                    defTrans: "<span style='color:#0077b6'>Desconfortável</span>",
                    example: "The chair is uncomfortable.", 
                    audioFront: "TTS: Uncomfortable",
                    audioBack: "TTS: The chair is uncomfortable." 
                },
                { 
                    term: "Light", 
                    definition: "Of little weight; not heavy.", 
                    defTrans: "<span style='color:#0077b6'>Leve</span>",
                    example: "A feather is light.", 
                    audioFront: "TTS: Light",
                    audioBack: "TTS: A feather is light." 
                },
                { 
                    term: "Heavy", 
                    definition: "Of great weight; difficult to lift or move.", 
                    defTrans: "<span style='color:#0077b6'>Pesado(a)</span>",
                    example: "This box is heavy.", 
                    audioFront: "TTS: Heavy",
                    audioBack: "TTS: This box is heavy." 
                },
                { 
                    term: "Easy", 
                    definition: "Achieved without great effort; presenting few difficulties.", 
                    defTrans: "<span style='color:#0077b6'>Fácil</span>",
                    example: "The test was easy.", 
                    audioFront: "TTS: Easy",
                    audioBack: "TTS: The test was easy." 
                },
                { 
                    term: "Difficult", 
                    definition: "Needing much effort or skill to accomplish or understand.", 
                    defTrans: "<span style='color:#0077b6'>Difícil</span>",
                    example: "Math can be difficult.", 
                    audioFront: "TTS: Difficult",
                    audioBack: "TTS: Math can be difficult." 
                },
                { 
                    term: "Stylish", 
                    definition: "Fashionably elegant and sophisticated.", 
                    defTrans: "<span style='color:#0077b6'>Estiloso(a)</span>",
                    example: "She is very stylish.", 
                    audioFront: "TTS: Stylish",
                    audioBack: "TTS: She is very stylish." 
                },
                { 
                    term: "Modern", 
                    definition: "Relating to the present or recent times.", 
                    defTrans: "<span style='color:#0077b6'>Moderno(a)</span>",
                    example: "The building is modern.", 
                    audioFront: "TTS: Modern",
                    audioBack: "TTS: The building is modern." 
                },
                { 
                    term: "Traditional", 
                    definition: "Existing in or as part of a tradition; long-established.", 
                    defTrans: "<span style='color:#0077b6'>Tradicional</span>",
                    example: "We wear traditional clothes.", 
                    audioFront: "TTS: Traditional",
                    audioBack: "TTS: We wear traditional clothes." 
                },
                { 
                    term: "Useful", 
                    definition: "Able to be used for a practical purpose.", 
                    defTrans: "<span style='color:#0077b6'>Útil</span>",
                    example: "This tool is useful.", 
                    audioFront: "TTS: Useful",
                    audioBack: "TTS: This tool is useful." 
                },
                { 
                    term: "Powerful", 
                    definition: "Having great power or strength.", 
                    defTrans: "<span style='color:#0077b6'>Poderoso(a) / Potente</span>",
                    example: "The engine is powerful.", 
                    audioFront: "TTS: Powerful",
                    audioBack: "TTS: The engine is powerful." 
                },
                { 
                    term: "Colorful", 
                    definition: "Having much or varied color; bright.", 
                    defTrans: "<span style='color:#0077b6'>Colorido(a)</span>",
                    example: "The painting is colorful.", 
                    audioFront: "TTS: Colorful",
                    audioBack: "TTS: The painting is colorful." 
                },
                // --- Shopping Verbs & Concepts ---
                { 
                    term: "To buy", 
                    definition: "To obtain in exchange for payment.", 
                    defTrans: "<span style='color:#0077b6'>Comprar</span>",
                    example: "I want to buy shoes.", 
                    audioFront: "TTS: To buy",
                    audioBack: "TTS: I want to buy shoes." 
                },
                { 
                    term: "To sell", 
                    definition: "To give or hand over something in exchange for money.", 
                    defTrans: "<span style='color:#0077b6'>Vender</span>",
                    example: "They sell flowers here.", 
                    audioFront: "TTS: To sell",
                    audioBack: "TTS: They sell flowers here." 
                },
                { 
                    term: "To choose", 
                    definition: "To pick out or select as being the best or most appropriate.", 
                    defTrans: "<span style='color:#0077b6'>Escolher</span>",
                    example: "It's hard to choose.", 
                    audioFront: "TTS: To choose",
                    audioBack: "TTS: It's hard to choose." 
                },
                { 
                    term: "To try on", 
                    definition: "To put on an item of clothing to see if it fits or looks good.", 
                    defTrans: "<span style='color:#0077b6'>Experimentar (roupa)</span>",
                    example: "Can I try on this hat?", 
                    audioFront: "TTS: To try on",
                    audioBack: "TTS: Can I try on this hat?" 
                },
                { 
                    term: "To pay", 
                    definition: "To give money for goods or services.", 
                    defTrans: "<span style='color:#0077b6'>Pagar</span>",
                    example: "Where do I pay?", 
                    audioFront: "TTS: To pay",
                    audioBack: "TTS: Where do I pay?" 
                },
                { 
                    term: "Price", 
                    definition: "The amount of money expected, required, or given in payment for something.", 
                    defTrans: "<span style='color:#0077b6'>Preço</span>",
                    example: "What is the price?", 
                    audioFront: "TTS: Price",
                    audioBack: "TTS: What is the price?" 
                },
                { 
                    term: "Option", 
                    definition: "A thing that is or may be chosen.", 
                    defTrans: "<span style='color:#0077b6'>Opção</span>",
                    example: "That is a good option.", 
                    audioFront: "TTS: Option",
                    audioBack: "TTS: That is a good option." 
                },
                { 
                    term: "Decision", 
                    definition: "A conclusion or resolution reached after consideration.", 
                    defTrans: "<span style='color:#0077b6'>Decisão</span>",
                    example: "Make a decision now.", 
                    audioFront: "TTS: Decision",
                    audioBack: "TTS: Make a decision now." 
                },

                // --- Phrases & Expressions ---
                { 
                    term: "How much is this?", 
                    definition: "Question used to ask for the price of an item.", 
                    defTrans: "<span style='color:#0077b6'>Quanto custa isto?</span>",
                    example: "How much is this shirt?", 
                    audioFront: "TTS: How much is this?",
                    audioBack: "TTS: How much is this shirt?" 
                },
                { 
                    term: "Can I try this on?", 
                    definition: "Question used to ask permission to put on clothes in a store.", 
                    defTrans: "<span style='color:#0077b6'>Posso experimentar?</span>",
                    example: "I like it. Can I try this on?", 
                    audioFront: "TTS: Can I try this on?",
                    audioBack: "TTS: I like it. Can I try this on?" 
                },
                { 
                    term: "It's too expensive", 
                    definition: "Stating that the price is higher than you want to pay.", 
                    defTrans: "<span style='color:#0077b6'>É muito caro.</span>",
                    example: "I can't buy it. It's too expensive.", 
                    audioFront: "TTS: It's too expensive",
                    audioBack: "TTS: I can't buy it. It's too expensive." 
                },
                { 
                    term: "It's cheaper", 
                    definition: "Stating that something costs less money.", 
                    defTrans: "<span style='color:#0077b6'>É mais barato.</span>",
                    example: "Buy this one. It's cheaper.", 
                    audioFront: "TTS: It's cheaper",
                    audioBack: "TTS: Buy this one. It's cheaper." 
                },
                { 
                    term: "What do you think about...?", 
                    definition: "Question asking for an opinion.", 
                    defTrans: "<span style='color:#0077b6'>O que você acha de...?</span>",
                    example: "What do you think about this color?", 
                    audioFront: "TTS: What do you think about...?",
                    audioBack: "TTS: What do you think about this color?" 
                },
                { 
                    term: "It's very stylish", 
                    definition: "Complimenting an item for looking fashionable.", 
                    defTrans: "<span style='color:#0077b6'>É muito estiloso.</span>",
                    example: "You look good. It's very stylish.", 
                    audioFront: "TTS: It's very stylish",
                    audioBack: "TTS: You look good. It's very stylish." 
                },
                { 
                    term: "Where is the dressing room?", 
                    definition: "Asking for the location of the room to change clothes.", 
                    defTrans: "<span style='color:#0077b6'>Onde fica o provador?</span>",
                    example: "Where is the dressing room? I have 2 items.", 
                    audioFront: "TTS: Where is the dressing room?",
                    audioBack: "TTS: Where is the dressing room? I have 2 items." 
                },
                { 
                    term: "This is the best", 
                    definition: "Stating that an item is superior to all others.", 
                    defTrans: "<span style='color:#0077b6'>Este é o melhor.</span>",
                    example: "I love it! This is the best.", 
                    audioFront: "TTS: This is the best",
                    audioBack: "TTS: I love it! This is the best." 
                },
                // --- Grammar Points ---
                { 
                    term: "Comparative (Superiority) - Short", 
                    definition: "Used to compare two things (adjective + -er + than).", 
                    defTrans: "<span style='color:#0077b6'>Adjetivo + er + than</span>",
                    example: "He is taller than me.", 
                    audioFront: "TTS: Comparative Superiority, Short",
                    audioBack: "TTS: He is taller than me." 
                },
                { 
                    term: "Comparative (Superiority) - Long", 
                    definition: "Used to compare two things (more + adjective + than).", 
                    defTrans: "<span style='color:#0077b6'>More + adjetivo + than</span>",
                    example: "It is more expensive than that.", 
                    audioFront: "TTS: Comparative Superiority, Long",
                    audioBack: "TTS: It is more expensive than that." 
                },
                { 
                    term: "Comparative (Equality)", 
                    definition: "Used to say two things are equal (as + adjective + as).", 
                    defTrans: "<span style='color:#0077b6'>As + adjetivo + as</span>",
                    example: "She is as fast as him.", 
                    audioFront: "TTS: Comparative Equality",
                    audioBack: "TTS: She is as fast as him." 
                },
                { 
                    term: "Comparative (Inferiority)", 
                    definition: "Used to say one thing has less of a quality (less + adjective + than).", 
                    defTrans: "<span style='color:#0077b6'>Less + adjetivo + than</span>",
                    example: "This is less interesting than the book.", 
                    audioFront: "TTS: Comparative Inferiority",
                    audioBack: "TTS: This is less interesting than the book." 
                },
                { 
                    term: "Superlative (Superiority) - Short", 
                    definition: "Used to say something is 'number one' (the + adjective + -est).", 
                    defTrans: "<span style='color:#0077b6'>The + adjetivo + est</span>",
                    example: "He is the fastest.", 
                    audioFront: "TTS: Superlative Superiority, Short",
                    audioBack: "TTS: He is the fastest." 
                },
                { 
                    term: "Superlative (Superiority) - Long", 
                    definition: "Used to say something is 'number one' (the most + adjective).", 
                    defTrans: "<span style='color:#0077b6'>The most + adjetivo</span>",
                    example: "This is the most beautiful painting.", 
                    audioFront: "TTS: Superlative Superiority, Long",
                    audioBack: "TTS: This is the most beautiful painting." 
                },
                { 
                    term: "Superlative (Inferiority)", 
                    definition: "Used to say something is the 'least' of a group (the least + adjective).", 
                    defTrans: "<span style='color:#0077b6'>The least + adjetivo</span>",
                    example: "It is the least expensive option.", 
                    audioFront: "TTS: Superlative Inferiority",
                    audioBack: "TTS: It is the least expensive option." 
                },
                { 
                    term: "Fewer (than)", 
                    definition: "Used to compare countable nouns, meaning a smaller number.", 
                    defTrans: "<span style='color:#0077b6'>Menos (para contáveis)</span>",
                    example: "I have fewer books than you.", 
                    audioFront: "TTS: Fewer than",
                    audioBack: "TTS: I have fewer books than you." 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Part 1: Context & Gadgets)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "laptop", 
            definition: "A computer that is portable and suitable for use while traveling.", 
            translation: "Notebook / Laptop" 
        },
        { 
            topic: "Context", 
            term: "light", 
            definition: "Of little weight; not heavy.", 
            translation: "Leve" 
        },
        { 
            topic: "Context", 
            term: "that-one", 
            definition: "Used to identify a specific person or thing at a distance.", 
            translation: "Aquele / Aquela" 
        },
        { 
            topic: "Context", 
            term: "cheaper", 
            definition: "Comparative form of 'cheap'; costing less than something else.", 
            translation: "Mais barato(a)" 
        },
        { 
            topic: "Context", 
            term: "faster", 
            definition: "Comparative form of 'fast'; moving at a higher speed.", 
            translation: "Mais rápido(a)" 
        },
        { 
            topic: "Context", 
            term: "more-modern", 
            definition: "Comparative of 'modern'; more up-to-date or contemporary.", 
            translation: "Mais moderno(a)" 
        },
        { 
            topic: "Context", 
            term: "which-one", 
            definition: "A question asking to specify one thing from a number of alternatives.", 
            translation: "Qual deles / Qual" 
        },
        { 
            topic: "Context", 
            term: "better", 
            definition: "Comparative of 'good'; of a more excellent or effective type or quality.", 
            translation: "Melhor" 
        },
        { 
            topic: "Context", 
            term: "the-best", 
            definition: "Superlative of 'good'; of the most excellent or effective type or quality.", 
            translation: "O melhor / A melhor" 
        },
        { 
            topic: "Context", 
            term: "the-biggest", 
            definition: "Superlative of 'big'; of the largest size.", 
            translation: "O maior / A maior" 
        },
        { 
            topic: "Context", 
            term: "clothes", 
            definition: "Items worn to cover the body.", 
            translation: "Roupas" 
        },
        { 
            topic: "Context", 
            term: "jacket", 
            definition: "An outer garment extending either to the waist or the hips.", 
            translation: "Jaqueta" 
        },
        { 
            topic: "Context", 
            term: "the-most-stylish", 
            definition: "Superlative of 'stylish'; the most fashionably elegant.", 
            translation: "O mais estiloso / A mais estilosa" 
        },

        // --- TOPIC 2: GADGETS ---
        { 
            topic: "Gadgets", 
            term: "Phone", 
            definition: "A telephone, especially a mobile phone.", 
            translation: "Celular" 
        },
        { 
            topic: "Gadgets", 
            term: "Laptop", 
            definition: "A portable computer suitable for use while traveling.", 
            translation: "Notebook / Laptop" 
        },
        { 
            topic: "Gadgets", 
            term: "Headphones", 
            definition: "A pair of earphones joined by a band placed over the head.", 
            translation: "Fones de ouvido" 
        },
        { 
            topic: "Gadgets", 
            term: "Tablet", 
            definition: "A portable PC, typically with a mobile operating system.", 
            translation: "Tablet" 
        },
        { 
            topic: "Gadgets", 
            term: "Smartwatch", 
            definition: "A mobile device designed to be worn on the wrist.", 
            translation: "Relógio inteligente" 
        },
        { 
            topic: "Gadgets", 
            term: "Camera", 
            definition: "A device for recording visual images (photographs, film, or video).", 
            translation: "Câmera" 
        },
        { 
            topic: "Gadgets", 
            term: "Charger", 
            definition: "A device for charging a battery or battery-powered equipment.", 
            translation: "Carregador" 
        },
        { 
            topic: "Gadgets", 
            term: "Keyboard", 
            definition: "A panel of keys that operate a computer or typewriter.", 
            translation: "Teclado" 
        },
        { 
            topic: "Gadgets", 
            term: "Mouse", 
            definition: "A small handheld device used to control a computer's cursor.", 
            translation: "Mouse" 
        },
        { 
            topic: "Gadgets", 
            term: "Screen", 
            definition: "The flat panel on an electronic device on which images are displayed.", 
            translation: "Tela" 
        },
        // --- TOPIC 3: CLOTHES & ACCESSORIES ---
        { 
            topic: "Clothes", 
            term: "T-shirt", 
            definition: "A short-sleeved casual top, generally made of cotton.", 
            translation: "Camiseta" 
        },
        { 
            topic: "Clothes", 
            term: "Jeans", 
            definition: "Hard-wearing trousers made of denim or other cotton fabric.", 
            translation: "Jeans" 
        },
        { 
            topic: "Clothes", 
            term: "Dress", 
            definition: "A one-piece garment for a woman or girl that covers the body and extends down over the legs.", 
            translation: "Vestido" 
        },
        { 
            topic: "Clothes", 
            term: "Skirt", 
            definition: "A garment fastened around the waist and hanging down around the legs.", 
            translation: "Saia" 
        },
        { 
            topic: "Clothes", 
            term: "Jacket", 
            definition: "An outer garment extending either to the waist or the hips.", 
            translation: "Jaqueta" 
        },
        { 
            topic: "Clothes", 
            term: "Coat", 
            definition: "An outer garment worn outdoors to protect against cold or rain.", 
            translation: "Casaco" 
        },
        { 
            topic: "Clothes", 
            term: "Sneakers", 
            definition: "Soft shoes worn for sports or casual occasions.", 
            translation: "Tênis" 
        },
        { 
            topic: "Clothes", 
            term: "Socks", 
            definition: "A soft covering for the foot and lower leg.", 
            translation: "Meias" 
        },
        { 
            topic: "Clothes", 
            term: "Hat", 
            definition: "A shaped covering for the head worn for warmth or fashion.", 
            translation: "Chapéu" 
        },
        { 
            topic: "Clothes", 
            term: "Pants", 
            definition: "An outer garment covering the body from the waist to the ankles.", 
            translation: "Calças" 
        },
        { 
            topic: "Clothes", 
            term: "Shorts", 
            definition: "Short trousers that reach only to the knees or thighs.", 
            translation: "Shorts" 
        },
        { 
            topic: "Clothes", 
            term: "Shoes / Boots", 
            definition: "Coverings for the foot, typically made of leather.", 
            translation: "Sapatos / Botas" 
        },
        { 
            topic: "Clothes", 
            term: "Sweater / Hoodie", 
            definition: "A knitted garment for the upper part of the body / A sweatshirt with a hood.", 
            translation: "Suéter / Moletom com capuz" 
        },
        { 
            topic: "Clothes", 
            term: "Belt", 
            definition: "A strip of leather or other material worn around the waist.", 
            translation: "Cinto" 
        },
        { 
            topic: "Clothes", 
            term: "Scarf", 
            definition: "A length of fabric worn around the neck or head.", 
            translation: "Cachecol" 
        },
        { 
            topic: "Clothes", 
            term: "Gloves", 
            definition: "Coverings for the hand worn for protection against cold or dirt.", 
            translation: "Luvas" 
        },
        { 
            topic: "Clothes", 
            term: "Sunglasses", 
            definition: "Glasses tinted to protect the eyes from sunlight or glare.", 
            translation: "Óculos de sol" 
        },
        { 
            topic: "Clothes", 
            term: "Watch", 
            definition: "A small timepiece worn typically on a strap on one's wrist.", 
            translation: "Relógio" 
        },
        { 
            topic: "Clothes", 
            term: "Necklace", 
            definition: "An ornamental chain or string of beads, jewels, or links worn round the neck.", 
            translation: "Colar" 
        },
        // --- TOPIC 4: ADJECTIVES ---
        { 
            topic: "Adjectives", 
            term: "Cheap", 
            definition: "Costing very little; relatively low in price.", 
            translation: "Barato(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "Expensive", 
            definition: "Costing a lot of money.", 
            translation: "Caro(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "New", 
            definition: "Not existing before; made, introduced, or discovered recently.", 
            translation: "Novo(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "Old", 
            definition: "Having lived for a long time; no longer new.", 
            translation: "Velho(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "Big", 
            definition: "Of considerable size, extent, or intensity.", 
            translation: "Grande" 
        },
        { 
            topic: "Adjectives", 
            term: "Small", 
            definition: "Of a size that is less than normal or usual.", 
            translation: "Pequeno(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "Fast", 
            definition: "Moving or capable of moving at high speed.", 
            translation: "Rápido(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "Slow", 
            definition: "Moving or operating at a low speed.", 
            translation: "Lento(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "Beautiful", 
            definition: "Pleasing the senses or mind aesthetically.", 
            translation: "Bonito(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "Ugly", 
            definition: "Unpleasant or repulsive, especially in appearance.", 
            translation: "Feio(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "Good", 
            definition: "To be desired or approved of.", 
            translation: "Bom / Boa" 
        },
        { 
            topic: "Adjectives", 
            term: "Bad", 
            definition: "Of poor quality or a low standard.", 
            translation: "Ruim" 
        },
        { 
            topic: "Adjectives", 
            term: "Comfortable", 
            definition: "Providing physical ease and relaxation.", 
            translation: "Confortável" 
        },
        { 
            topic: "Adjectives", 
            term: "Uncomfortable", 
            definition: "Causing or feeling slight pain or physical discomfort.", 
            translation: "Desconfortável" 
        },
        { 
            topic: "Adjectives", 
            term: "Light", 
            definition: "Of little weight; not heavy.", 
            translation: "Leve" 
        },
        { 
            topic: "Adjectives", 
            term: "Heavy", 
            definition: "Of great weight; difficult to lift or move.", 
            translation: "Pesado(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "Easy", 
            definition: "Achieved without great effort.", 
            translation: "Fácil" 
        },
        { 
            topic: "Adjectives", 
            term: "Difficult", 
            definition: "Needing much effort or skill to accomplish or understand.", 
            translation: "Difícil" 
        },
        { 
            topic: "Adjectives", 
            term: "Stylish", 
            definition: "Fashionably elegant and sophisticated.", 
            translation: "Estiloso(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "Modern", 
            definition: "Relating to the present or recent times.", 
            translation: "Moderno(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "Traditional", 
            definition: "Existing in or as part of a tradition.", 
            translation: "Tradicional" 
        },
        { 
            topic: "Adjectives", 
            term: "Useful", 
            definition: "Able to be used for a practical purpose or in several ways.", 
            translation: "Útil" 
        },
        { 
            topic: "Adjectives", 
            term: "Powerful", 
            definition: "Having great power or strength.", 
            translation: "Poderoso(a) / Potente" 
        },
        { 
            topic: "Adjectives", 
            term: "Colorful", 
            definition: "Having much or varied color; bright.", 
            translation: "Colorido(a)" 
        },
        // --- TOPIC 5: SHOPPING VERBS & CONCEPTS ---
        { 
            topic: "Shopping Verbs", 
            term: "To buy", 
            definition: "To obtain in exchange for payment.", 
            translation: "Comprar" 
        },
        { 
            topic: "Shopping Verbs", 
            term: "To sell", 
            definition: "To give or hand over something in exchange for money.", 
            translation: "Vender" 
        },
        { 
            topic: "Shopping Verbs", 
            term: "To choose", 
            definition: "To pick out or select as being the best or most appropriate.", 
            translation: "Escolher" 
        },
        { 
            topic: "Shopping Verbs", 
            term: "To try on", 
            definition: "To put on an item of clothing to see if it fits or looks good.", 
            translation: "Experimentar (roupa)" 
        },
        { 
            topic: "Shopping Verbs", 
            term: "To pay", 
            definition: "To give money for goods or services.", 
            translation: "Pagar" 
        },
        { 
            topic: "Shopping Verbs", 
            term: "Price", 
            definition: "The amount of money expected or required for something.", 
            translation: "Preço" 
        },
        { 
            topic: "Shopping Verbs", 
            term: "Option", 
            definition: "A thing that is or may be chosen.", 
            translation: "Opção" 
        },
        { 
            topic: "Shopping Verbs", 
            term: "Decision", 
            definition: "A conclusion or resolution reached after consideration.", 
            translation: "Decisão" 
        },

        // --- TOPIC 6: PHRASES & EXPRESSIONS ---
        { 
            topic: "Phrases", 
            term: "How much is this?", 
            definition: "A question used to ask for the price of an item.", 
            translation: "Quanto custa isto?" 
        },
        { 
            topic: "Phrases", 
            term: "Can I try this on?", 
            definition: "A question used to ask permission to put on clothes in a store.", 
            translation: "Posso experimentar?" 
        },
        { 
            topic: "Phrases", 
            term: "It's too expensive", 
            definition: "Stating that the price is higher than you want to pay.", 
            translation: "É muito caro." 
        },
        { 
            topic: "Phrases", 
            term: "It's cheaper", 
            definition: "Stating that something costs less money.", 
            translation: "É mais barato." 
        },
        { 
            topic: "Phrases", 
            term: "What do you think about...?", 
            definition: "A question asking for an opinion.", 
            translation: "O que você acha de...?" 
        },
        { 
            topic: "Phrases", 
            term: "It's very stylish", 
            definition: "Complimenting an item for looking fashionable.", 
            translation: "É muito estiloso." 
        },
        { 
            topic: "Phrases", 
            term: "Where is the dressing room?", 
            definition: "Asking for the location of the room to change clothes.", 
            translation: "Onde fica o provador?" 
        },
        { 
            topic: "Phrases", 
            term: "This is the best", 
            definition: "Stating that an item is superior to all others.", 
            translation: "Este é o melhor." 
        },

        // --- TOPIC 7: GRAMMAR SUMMARY ---
        { 
            topic: "Grammar", 
            term: "Comparative (Superiority)", 
            definition: "Used to compare two things where one has more of a quality (more...than / -er than).", 
            translation: "Comparativo de Superioridade" 
        },
        { 
            topic: "Grammar", 
            term: "Comparative (Equality)", 
            definition: "Used to say two things are equal (as...as).", 
            translation: "Comparativo de Igualdade" 
        },
        { 
            topic: "Grammar", 
            term: "Comparative (Inferiority)", 
            definition: "Used to say one thing has less of a quality than another (less...than).", 
            translation: "Comparativo de Inferioridade" 
        },
        { 
            topic: "Grammar", 
            term: "Superlative (Superiority)", 
            definition: "Compares one thing against a group, stating it is 'number one' (the most... / the -est).", 
            translation: "Superlativo de Superioridade" 
        },
        { 
            topic: "Grammar", 
            term: "Superlative (Inferiority)", 
            definition: "Compares one thing against a group, stating it has the least of a quality (the least...).", 
            translation: "Superlativo de Inferioridade" 
        },
        { 
            topic: "Grammar", 
            term: "Fewer", 
            definition: "Used to compare countable nouns, meaning a smaller number.", 
            translation: "Menos (para contáveis)" 
        }
    ] // Closes glossary array
}); // Closes initLesson object