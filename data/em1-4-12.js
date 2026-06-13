/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-4-12.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em1-4-12", 
    grade: "High School 1st Grade",       
    bimester: "4",   
    chapter: "12",    
    chapterTitle: "Born to Shop? The Conscious Consumer's Guide", 
    
    steps:[
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss the [impact](tooltip:impact) of a [consumer society](tooltip:consumer-society).<br>• Use advanced [discourse markers](tooltip:discourse-markers) to build strong arguments.<br>• Master [phrasal verbs](tooltip:phrasal-verbs) with BRING, GIVE, and LOOK.<br>• Review and apply 12 major [grammar tenses](tooltip:grammar-tenses) correctly.<br>• Distinguish between [sustainable](tooltip:sustainable) and [fast fashion](tooltip:fast-fashion) habits.",
            welcome: "Hello, smart [shoppers](tooltip:shoppers)! I'm Mr. D!<br>Welcome to the ultimate guide to the modern world! From the latest [gadgets](tooltip:gadgets) to the trendiest [brands](tooltip:brand), we live in a world filled with things to buy. But are we born to shop, or can we shop to save the planet? Today, we are going to open the door to [conscious consumption](tooltip:conscious-consumption). You will learn how to connect your ideas like a master debater and review all your grammar superpowers! Are you ready to think before you shop? Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss the impact of a consumer society. Use advanced discourse markers to build strong arguments. Master phrasal verbs with BRING, GIVE, and LOOK. Review and apply 12 major grammar tenses correctly. Distinguish between sustainable and fast fashion habits.",
                welcome: "TTS: Hello, smart shoppers! I'm Mr. D! Welcome to the ultimate guide to the modern world! From the latest gadgets to the trendiest brands, we live in a world filled with things to buy. But are we born to shop, or can we shop to save the planet? Today, we are going to open the door to conscious consumption. You will learn how to connect your ideas like a master debater and review all your grammar superpowers! Are you ready to think before you shop? Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Celine and Albert are at a local sustainable market. Celine is looking at a jacket made of recycled fabric, while Albert is checking an advertisement on his phone.", 
            contextAudio: "audio/em1-4-12/step1.mp3",
            dialogue:[
                { 
                    speaker: "Celine", 
                    text: "Albert, look at this! I [have been looking for](tooltip:have-been-looking-for) a [sustainable](tooltip:sustainable) [brand](tooltip:brand) for weeks. This jacket [is made of](tooltip:is-made-of) 100% recycled [waste](tooltip:waste)!" 
                },
                { 
                    speaker: "Albert", 
                    text: "That's cool, Celine! [In fact](tooltip:in-fact), I [was just thinking](tooltip:was-just-thinking) about our [consumer society](tooltip:consumer-society). This [advertisement](tooltip:advertisement) makes everything look perfect, [as if](tooltip:as-if) a new phone [will solve](tooltip:will-solve) all your problems." 
                },
                { 
                    speaker: "Celine", 
                    text: "I know. [Although](tooltip:although) new things are exciting, we [must](tooltip:must) question if we [purchase](tooltip:purchase) too much. [Not only](tooltip:not-only) does it hurt the [environment](tooltip:environment), [but also](tooltip:but-also) it creates a huge negative [impact](tooltip:impact)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Exactly! [Moreover](tooltip:moreover), my current phone [is working](tooltip:is-working) perfectly. I think I [will give up](tooltip:give-up) the idea of buying a new one [in order to](tooltip:in-order-to) save money." 
                },
                { 
                    speaker: "Celine", 
                    text: "That's a good point. If we don't [give in](tooltip:give-in) to every sale, we [make](tooltip:make) a more [conscious](tooltip:conscious) [choice](tooltip:choice). [Therefore](tooltip:therefore), the planet [will benefit](tooltip:will-benefit)." 
                },
                { 
                    speaker: "Albert", 
                    text: "You’re right. [As soon as](tooltip:as-soon-as) I [get](tooltip:get) home, I will [look up](tooltip:look-up) more info on how to [reduce](tooltip:reduce) my [consumption](tooltip:consumption)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Great! We [had already decided](tooltip:had-already-decided) to be more [conscious consumers](tooltip:conscious-consumer), didn't we? Let's find a [product](tooltip:product) that really lasts!" 
                }
            ]
        },

        // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
        // ======================================================
        {
            title: "Say the word",
            subPages:[
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],

            // 2A: Vocabulary Lists (Tabbed)
            areas:[
                {
                    title: "Verbs of Consumption",
                    audio: "TTS: To reduce. To recycle. To purchase. To reuse.",
                    items:[
                        { term: "To reduce", trans: "Reduzir" },
                        { term: "To recycle", trans: "Reciclar" },
                        { term: "To purchase", trans: "Comprar / Adquirir" },
                        { term: "To reuse", trans: "Reutilizar" }
                    ]
                },
                {
                    title: "Consumption Vocabulary",
                    audio: "TTS: Consumer. Consumption. Sustainable. Environment. Advertisement. Brand. Conscious. Impact. Waste. Product. Habit. Choice.",
                    items:[
                        { term: "Consumer", trans: "Consumidor(a)" },
                        { term: "Consumption", trans: "Consumo" },
                        { term: "Sustainable", trans: "Sustentável" },
                        { term: "Environment", trans: "Meio ambiente" },
                        { term: "Advertisement", trans: "Propaganda / Anúncio" },
                        { term: "Brand", trans: "Marca" },
                        { term: "Conscious", trans: "Consciente" },
                        { term: "Impact", trans: "Impacto" },
                        { term: "Waste", trans: "Desperdício / Lixo" },
                        { term: "Product", trans: "Produto" },
                        { term: "Habit", trans: "Hábito" },
                        { term: "Choice", trans: "Escolha" }
                    ]
                },
                {
                    title: "Phrasal Verbs: BRING",
                    audio: "TTS: Bring up. Bring about. Bring back. Bring down. Bring in. Bring on.",
                    items:[
                        { term: "Bring up", trans: "Mencionar (um assunto)" },
                        { term: "Bring about", trans: "Causar / Provocar" },
                        { term: "Bring back", trans: "Trazer de volta (memória)" },
                        { term: "Bring down", trans: "Reduzir / Baixar" },
                        { term: "Bring in", trans: "Introduzir" },
                        { term: "Bring on", trans: "Provocar (algo negativo)" }
                    ]
                },
                {
                    title: "Phrasal Verbs: GIVE",
                    audio: "TTS: Give up. Give back. Give in. Give away. Give out. Give off.",
                    items:[
                        { term: "Give up", trans: "Desistir de / Parar de" },
                        { term: "Give back", trans: "Devolver" },
                        { term: "Give in", trans: "Ceder" },
                        { term: "Give away", trans: "Doar / Dar (de graça)" },
                        { term: "Give out", trans: "Distribuir" },
                        { term: "Give off", trans: "Emitir / Exalar" }
                    ]
                },
                {
                    title: "Phrasal Verbs: LOOK",
                    audio: "TTS: Look for. Look after. Look up. Look forward to. Look into. Look down on.",
                    items:[
                        { term: "Look for", trans: "Procurar por" },
                        { term: "Look after", trans: "Cuidar de" },
                        { term: "Look up", trans: "Pesquisar informação" },
                        { term: "Look forward to", trans: "Esperar ansiosamente por" },
                        { term: "Look into", trans: "Investigar" },
                        { term: "Look down on", trans: "Menosprezar" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups:[
                {
                    title: "Verbs of Consumption",
                    audio: "TTS: You should reduce the amount of plastic you use. It's important to recycle paper and glass. I want to purchase a new laptop next month. We can reuse old glass jars for storage.",
                    items:[
                        { term: "To reduce", sent: "You should reduce the amount of plastic you use.", trans: "<span style='color:#0077b6'>Você deve reduzir a quantidade de plástico que usa.</span>" },
                        { term: "To recycle", sent: "It's important to recycle paper and glass.", trans: "<span style='color:#0077b6'>É importante reciclar papel e vidro.</span>" },
                        { term: "To purchase", sent: "I want to purchase a new laptop next month.", trans: "<span style='color:#0077b6'>Eu quero comprar um novo laptop no mês que vem.</span>" },
                        { term: "To reuse", sent: "We can reuse old glass jars for storage.", trans: "<span style='color:#0077b6'>Podemos reutilizar potes de vidro velhos para armazenamento.</span>" }
                    ]
                },
                {
                    title: "Consumption Vocabulary",
                    audio: "TTS: Every consumer has the power to change the market. Excessive consumption is bad for the planet. We need to find sustainable ways to produce energy. We must protect our environment. That advertisement is very creative. I only buy from this brand because it's ethical. Be a conscious shopper and think twice. Our choices have a big impact on nature. Don't throw away food; it's a huge waste. This product is made of organic cotton. Buying local is a very healthy habit. Choosing second-hand is a great choice.",
                    items:[
                        { term: "Consumer", sent: "Every consumer has the power to change the market.", trans: "<span style='color:#0077b6'>Todo consumidor tem o poder de mudar o mercado.</span>" },
                        { term: "Consumption", sent: "Excessive consumption is bad for the planet.", trans: "<span style='color:#0077b6'>O consumo excessivo é ruim para o planeta.</span>" },
                        { term: "Sustainable", sent: "We need to find sustainable ways to produce energy.", trans: "<span style='color:#0077b6'>Precisamos encontrar formas sustentáveis de produzir energia.</span>" },
                        { term: "Environment", sent: "We must protect our environment.", trans: "<span style='color:#0077b6'>Devemos proteger nosso meio ambiente.</span>" },
                        { term: "Advertisement", sent: "That advertisement is very creative.", trans: "<span style='color:#0077b6'>Aquela propaganda é muito criativa.</span>" },
                        { term: "Brand", sent: "I only buy from this brand because it's ethical.", trans: "<span style='color:#0077b6'>Eu só compro desta marca porque ela é ética.</span>" },
                        { term: "Conscious", sent: "Be a conscious shopper and think twice.", trans: "<span style='color:#0077b6'>Seja um comprador consciente e pense duas vezes.</span>" },
                        { term: "Impact", sent: "Our choices have a big impact on nature.", trans: "<span style='color:#0077b6'>Nossas escolhas têm um grande impacto na natureza.</span>" },
                        { term: "Waste", sent: "Don't throw away food; it's a huge waste.", trans: "<span style='color:#0077b6'>Não jogue comida fora; é um grande desperdício.</span>" },
                        { term: "Product", sent: "This product is made of organic cotton.", trans: "<span style='color:#0077b6'>Este produto é feito de algodão orgânico.</span>" },
                        { term: "Habit", sent: "Buying local is a very healthy habit.", trans: "<span style='color:#0077b6'>Comprar do comércio local é um hábito muito saudável.</span>" },
                        { term: "Choice", sent: "Choosing second-hand is a great choice.", trans: "<span style='color:#0077b6'>Escolher itens de segunda mão é uma ótima escolha.</span>" }
                    ]
                },
                {
                    title: "Phrasal Verbs: BRING",
                    audio: "TTS: Did the teacher bring up the environment? Yes, she mentioned it. Can one person bring about change? Yes, one person can start a movement! Does this brand bring back memories? Yes, it reminds me of my grandmother's house. They need to bring down the prices. I agree, sustainable items are too expensive. The school will bring in new recycling bins. That is excellent news! Fast fashion can bring on environmental disasters. True, the pollution is terrible.",
                    items:[
                        { term: "Bring up", sent: "Did the teacher bring up the environment?", trans: "<span style='color:#0077b6'>O professor mencionou o meio ambiente?</span>" },
                        { term: "Bring about", sent: "Can one person bring about change?", trans: "<span style='color:#0077b6'>Uma pessoa pode provocar mudanças?</span>" },
                        { term: "Bring back", sent: "Does this brand bring back memories?", trans: "<span style='color:#0077b6'>Esta marca traz de volta memórias?</span>" },
                        { term: "Bring down", sent: "They need to bring down the prices.", trans: "<span style='color:#0077b6'>Eles precisam baixar os preços.</span>" },
                        { term: "Bring in", sent: "The school will bring in new recycling bins.", trans: "<span style='color:#0077b6'>A escola vai introduzir novas lixeiras de reciclagem.</span>" },
                        { term: "Bring on", sent: "Fast fashion can bring on environmental disasters.", trans: "<span style='color:#0077b6'>A moda descartável pode provocar desastres ambientais.</span>" }
                    ]
                },
                {
                    title: "Phrasal Verbs: GIVE",
                    audio: "TTS: Did you give up eating junk food? Yes, I stopped last week. I need to give back this book to the library. I tried not to buy the shoes, but I gave in. I will give away my old toys to the hospital. The store is giving out free samples. This plastic bag gives off a strange smell.",
                    items:[
                        { term: "Give up", sent: "Did you give up eating junk food?", trans: "<span style='color:#0077b6'>Você parou de comer porcaria?</span>" },
                        { term: "Give back", sent: "I need to give back this book to the library.", trans: "<span style='color:#0077b6'>Eu preciso devolver este livro para a biblioteca.</span>" },
                        { term: "Give in", sent: "I tried not to buy the shoes, but I gave in.", trans: "<span style='color:#0077b6'>Tentei não comprar os sapatos, mas eu cedi.</span>" },
                        { term: "Give away", sent: "I will give away my old toys to the hospital.", trans: "<span style='color:#0077b6'>Eu vou doar meus brinquedos velhos para o hospital.</span>" },
                        { term: "Give out", sent: "The store is giving out free samples.", trans: "<span style='color:#0077b6'>A loja está distribuindo amostras grátis.</span>" },
                        { term: "Give off", sent: "This plastic bag gives off a strange smell.", trans: "<span style='color:#0077b6'>Este saco plástico emite um cheiro estranho.</span>" }
                    ]
                },
                {
                    title: "Phrasal Verbs: LOOK",
                    audio: "TTS: What are you looking for? I'm searching for a second-hand store. We must look after our community. Can you look up the price of this jacket? I look forward to the zero-waste fair. The city will look into the trash problem. Some people look down on recycled products.",
                    items:[
                        { term: "Look for", sent: "What are you looking for?", trans: "<span style='color:#0077b6'>O que você está procurando?</span>" },
                        { term: "Look after", sent: "We must look after our community.", trans: "<span style='color:#0077b6'>Nós devemos cuidar da nossa comunidade.</span>" },
                        { term: "Look up", sent: "Can you look up the price of this jacket?", trans: "<span style='color:#0077b6'>Você pode pesquisar o preço desta jaqueta?</span>" },
                        { term: "Look forward to", sent: "I look forward to the zero-waste fair.", trans: "<span style='color:#0077b6'>Estou esperando ansiosamente pela feira lixo-zero.</span>" },
                        { term: "Look into", sent: "The city will look into the trash problem.", trans: "<span style='color:#0077b6'>A cidade vai investigar o problema do lixo.</span>" },
                        { term: "Look down on", sent: "Some people look down on recycled products.", trans: "<span style='color:#0077b6'>Algumas pessoas menosprezam produtos reciclados.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (Tabbed Version - Exactly 50 MCQs)
            drillGroups:[
                {
                    title: "Verbs of Consumption",
                    drills:[
                        { type: "mcq", q: "To _______ means to make smaller or less in amount.", options:[{t: "purchase", c: false}, {t: "reduce", c: true}, {t: "reuse", c: false}] },
                        { type: "mcq", q: "We must _______ the amount of plastic we throw away.", options:[{t: "reduce", c: true}, {t: "purchase", c: false}, {t: "recycle", c: false}] },
                        { type: "mcq", q: "To _______ means to convert waste into reusable material.", options:[{t: "reduce", c: false}, {t: "reuse", c: false}, {t: "recycle", c: true}] },
                        { type: "mcq", q: "Don't throw away that glass! You can _______ it.", options:[{t: "purchase", c: false}, {t: "recycle", c: true}, {t: "reduce", c: false}] },
                        { type: "mcq", q: "To _______ means to acquire something by paying for it.", options:[{t: "reuse", c: false}, {t: "reduce", c: false}, {t: "purchase", c: true}] },
                        { type: "mcq", q: "I decided to _______ a sustainable jacket online.", options:[{t: "purchase", c: true}, {t: "recycle", c: false}, {t: "reuse", c: false}] },
                        { type: "mcq", q: "To _______ means to use something again or more than once.", options:[{t: "reduce", c: false}, {t: "reuse", c: true}, {t: "purchase", c: false}] },
                        { type: "mcq", q: "Instead of throwing away the jar, she decided to _______ it.", options:[{t: "reuse", c: true}, {t: "purchase", c: false}, {t: "reduce", c: false}] }
                    ]
                },
                {
                    title: "Consumption Vocabulary",
                    drills:[
                        { type: "mcq", q: "A person who buys things is a _______.", options:[{t: "Seller", c: false}, {t: "Consumer", c: true}, {t: "Product", c: false}] },
                        { type: "mcq", q: "Excessive _______ is destroying natural resources.", options:[{t: "consumption", c: true}, {t: "brand", c: false}, {t: "habit", c: false}] },
                        { type: "mcq", q: "We need more _______ methods to protect the Earth.", options:[{t: "wasteful", c: false}, {t: "impact", c: false}, {t: "sustainable", c: true}] },
                        { type: "mcq", q: "It is our duty to protect the _______ for future generations.", options:[{t: "advertisement", c: false}, {t: "environment", c: true}, {t: "brand", c: false}] },
                        { type: "mcq", q: "That funny _______ about shopping went viral on TV.", options:[{t: "advertisement", c: true}, {t: "waste", c: false}, {t: "impact", c: false}] },
                        { type: "mcq", q: "I love this clothing _______ because it is very ethical.", options:[{t: "impact", c: false}, {t: "brand", c: true}, {t: "habit", c: false}] },
                        { type: "mcq", q: "Before buying, you should make a _______ decision.", options:[{t: "waste", c: false}, {t: "conscious", c: true}, {t: "brand", c: false}] },
                        { type: "mcq", q: "Plastic pollution has a terrible _______ on ocean life.", options:[{t: "impact", c: true}, {t: "choice", c: false}, {t: "habit", c: false}] },
                        { type: "mcq", q: "Fast fashion creates a lot of unnecessary _______.", options:[{t: "environment", c: false}, {t: "product", c: false}, {t: "waste", c: true}] },
                        { type: "mcq", q: "This new _______ is made from 100% recycled materials.", options:[{t: "product", c: true}, {t: "consumption", c: false}, {t: "habit", c: false}] },
                        { type: "mcq", q: "Checking labels before buying is a very healthy _______.", options:[{t: "habit", c: true}, {t: "waste", c: false}, {t: "brand", c: false}] },
                        { type: "mcq", q: "Choosing to repair clothes instead of throwing them away is a wise _______.", options:[{t: "choice", c: true}, {t: "impact", c: false}, {t: "advertisement", c: false}] }
                    ]
                },
                {
                    title: "Phrasal Verbs (BRING)",
                    drills:[
                        { type: "mcq", q: "During the meeting, she decided to _______ the issue of pollution.", options:[{t: "bring up", c: true}, {t: "bring down", c: false}, {t: "bring off", c: false}] },
                        { type: "mcq", q: "I didn't want to _______ the bad news during dinner.", options:[{t: "bring back", c: false}, {t: "bring up", c: true}, {t: "bring in", c: false}] },
                        { type: "mcq", q: "The new laws will _______ positive changes for the climate.", options:[{t: "bring out", c: false}, {t: "bring about", c: true}, {t: "bring down", c: false}] },
                        { type: "mcq", q: "His inspiring speech will _______ a revolution in consumerism.", options:[{t: "bring about", c: true}, {t: "bring back", c: false}, {t: "bring up", c: false}] },
                        { type: "mcq", q: "That old 90s commercial _______ so many good memories.", options:[{t: "brings down", c: false}, {t: "brings back", c: true}, {t: "brings in", c: false}] },
                        { type: "mcq", q: "This classic design _______ the style of the early 2000s.", options:[{t: "brings back", c: true}, {t: "brings on", c: false}, {t: "brings up", c: false}] },
                        { type: "mcq", q: "The store needs a big sale to _______ the prices.", options:[{t: "bring down", c: true}, {t: "bring up", c: false}, {t: "bring back", c: false}] },
                        { type: "mcq", q: "The economic crisis will definitely _______ corporate profits.", options:[{t: "bring in", c: false}, {t: "bring down", c: true}, {t: "bring about", c: false}] },
                        { type: "mcq", q: "The government decided to _______ new recycling regulations.", options:[{t: "bring in", c: true}, {t: "bring out", c: false}, {t: "bring off", c: false}] },
                        { type: "mcq", q: "They will _______ an expert to evaluate the factory waste.", options:[{t: "bring back", c: false}, {t: "bring in", c: true}, {t: "bring down", c: false}] },
                        { type: "mcq", q: "Excessive stress can _______ serious health issues.", options:[{t: "bring up", c: false}, {t: "bring down", c: false}, {t: "bring on", c: true}] },
                        { type: "mcq", q: "The pollution will _______ terrible consequences for the city.", options:[{t: "bring on", c: true}, {t: "bring in", c: false}, {t: "bring back", c: false}] }
                    ]
                },
                {
                    title: "Phrasal Verbs (GIVE)",
                    drills:[
                        { type: "mcq", q: "She decided to _______ eating fast food to be healthier.", options:[{t: "give back", c: false}, {t: "give up", c: true}, {t: "give off", c: false}] },
                        { type: "mcq", q: "It's hard to _______ a bad shopping habit.", options:[{t: "give up", c: true}, {t: "give in", c: false}, {t: "give away", c: false}] },
                        { type: "mcq", q: "Please _______ the book you borrowed from the library.", options:[{t: "give out", c: false}, {t: "give back", c: true}, {t: "give in", c: false}] },
                        { type: "mcq", q: "We must _______ to the community by volunteering.", options:[{t: "give off", c: false}, {t: "give up", c: false}, {t: "give back", c: true}] },
                        { type: "mcq", q: "I tried to resist the sale, but eventually I _______ and bought it.", options:[{t: "gave in", c: true}, {t: "gave off", c: false}, {t: "gave away", c: false}] },
                        { type: "mcq", q: "Don't _______ to peer pressure when choosing a brand.", options:[{t: "give back", c: false}, {t: "give in", c: true}, {t: "give out", c: false}] },
                        { type: "mcq", q: "I will _______ all my old clothes to the charity shop.", options:[{t: "give up", c: false}, {t: "give away", c: true}, {t: "give off", c: false}] },
                        { type: "mcq", q: "The company decided to _______ free samples today.", options:[{t: "give away", c: true}, {t: "give back", c: false}, {t: "give in", c: false}] },
                        { type: "mcq", q: "The promotional team is _______ flyers at the mall.", options:[{t: "giving off", c: false}, {t: "giving back", c: false}, {t: "giving out", c: true}] },
                        { type: "mcq", q: "The plastic burning in the factory is _______ toxic fumes.", options:[{t: "giving off", c: true}, {t: "giving up", c: false}, {t: "giving in", c: false}] }
                    ]
                },
                {
                    title: "Phrasal Verbs (LOOK)",
                    drills:[
                        { type: "mcq", q: "What are you _______? I lost my keys.", options:[{t: "looking after", c: false}, {t: "looking for", c: true}, {t: "looking down on", c: false}] },
                        { type: "mcq", q: "He spent an hour _______ the perfect sustainable jacket.", options:[{t: "looking for", c: true}, {t: "looking into", c: false}, {t: "looking up", c: false}] },
                        { type: "mcq", q: "We must all _______ our natural resources.", options:[{t: "look up", c: false}, {t: "look after", c: true}, {t: "look into", c: false}] },
                        { type: "mcq", q: "She stayed home to _______ her sick dog.", options:[{t: "look after", c: true}, {t: "look for", c: false}, {t: "look forward to", c: false}] },
                        { type: "mcq", q: "If you don't know the word, _______ it _______ in the dictionary.", options:[{t: "look / into", c: false}, {t: "look / after", c: false}, {t: "look / up", c: true}] },
                        { type: "mcq", q: "I will _______ the brand's history on the internet.", options:[{t: "look up", c: true}, {t: "look down on", c: false}, {t: "look for", c: false}] },
                        { type: "mcq", q: "I really _______ the zero-waste fair next weekend.", options:[{t: "look into", c: false}, {t: "look forward to", c: true}, {t: "look after", c: false}] },
                        { type: "mcq", q: "The government will _______ the pollution problem.", options:[{t: "look into", c: true}, {t: "look up", c: false}, {t: "look down on", c: false}] }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 3: FOLLOW THE PATTERN (Grammar)
        // ======================================================
        {
            title: "Follow the Pattern",
            subPages:[
                { id: "step3a", label: "3A: Patterns" },
                { id: "step3b", label: "3B: Examples" },
                { id: "step3c", label: "3C: Practice" }
            ],

            // 3A: Explanations (Tabbed)
            patterns:[
                {
                    title: "Discourse Markers (Contrast & Reason)",
                    audio: "TTS: Discourse markers connect ideas. For contrast, use although, even though, however, nevertheless, despite, or whereas. For reason, use because, since, due to, or owing to.",
                    explanation: "Discourse markers connect ideas and show the logic of a sentence. We use these specific markers to show contrast or to explain reasons.<br><br><span style='color:#0077b6; font-style:italic;'>(Conectivos ligam ideias e mostram a lógica da frase. Usamos estes conectivos específicos para mostrar contraste ou explicar razões.)</span>",
                    samples:[
                        { en: "<b>Although / Even though:</b> <b>Although</b> it’s expensive, it’s eco-friendly.", pt: "<span style='color:#0077b6'>(Embora seja caro, é ecológico.)</span>" },
                        { en: "<b>However / Nevertheless:</b> Consumption is high; <b>nevertheless</b>, people are changing.", pt: "<span style='color:#0077b6'>(O consumo é alto; contudo, as pessoas estão mudando.)</span>" },
                        { en: "<b>Despite / In spite of:</b> <b>Despite</b> the sale, I didn't buy anything.", pt: "<span style='color:#0077b6'>(Apesar da promoção, não comprei nada.)</span>" },
                        { en: "<b>Whereas / While:</b> I like reusing, <b>whereas</b> he prefers recycling.", pt: "<span style='color:#0077b6'>(Eu gosto de reutilizar, ao passo que ele prefere reciclar.)</span>" },
                        { en: "<b>Because / Since:</b> I shop locally <b>since</b> it supports the environment.", pt: "<span style='color:#0077b6'>(Eu compro localmente já que isso ajuda o meio ambiente.)</span>" },
                        { en: "<b>Due to / Because of:</b> <b>Due to</b> the impact, I stopped buying that brand.", pt: "<span style='color:#0077b6'>(Devido ao impacto, parei de comprar aquela marca.)</span>" }
                    ]
                },
                {
                    title: "Discourse Markers (Addition & Condition)",
                    audio: "TTS: To add information, use besides, moreover, furthermore, or not only... but also. To set a condition, use if, whether, unless, or as long as.",
                    explanation: "We use addition markers to build stronger arguments, and condition markers to state rules or requirements.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos conectivos de adição para construir argumentos mais fortes, e conectivos de condição para estabelecer regras ou requisitos.)</span>",
                    samples:[
                        { en: "<b>Moreover / Furthermore:</b> <b>Furthermore</b>, we must reduce waste.", pt: "<span style='color:#0077b6'>(Além disso, devemos reduzir o desperdício.)</span>" },
                        { en: "<b>Not only... but also:</b> This is <b>not only</b> cheap <b>but also</b> sustainable.", pt: "<span style='color:#0077b6'>(Isso não é apenas barato, mas também sustentável.)</span>" },
                        { en: "<b>Unless:</b> I won't buy it <b>unless</b> I really need it.", pt: "<span style='color:#0077b6'>(Não comprarei a menos que realmente precise.)</span>" },
                        { en: "<b>Provided that / As long as:</b> You can buy it <b>provided that</b> it's durable.", pt: "<span style='color:#0077b6'>(Você pode comprar contanto que seja durável.)</span>" }
                    ]
                },
                {
                    title: "Discourse Markers (Result, Purpose, Time)",
                    audio: "TTS: For results, use therefore, thus, or as a result. For purpose, use in order to or so that. For time, use as soon as or until.",
                    explanation: "These markers help conclude a thought, explain a goal, or define a timeline.<br><br><span style='color:#0077b6; font-style:italic;'>(Estes conectivos ajudam a concluir um pensamento, explicar um objetivo ou definir uma linha do tempo.)</span>",
                    samples:[
                        { en: "<b>Therefore / Thus:</b> Prices are down; <b>therefore</b>, people buy more.", pt: "<span style='color:#0077b6'>(Os preços baixaram; portanto, as pessoas compram mais.)</span>" },
                        { en: "<b>In order to / So that:</b> We shop carefully <b>in order to</b> save money.", pt: "<span style='color:#0077b6'>(Compramos com cuidado para economizar dinheiro.)</span>" },
                        { en: "<b>Until:</b> I'll wait <b>until</b> the price goes down.", pt: "<span style='color:#0077b6'>(Vou esperar até que o preço baixe.)</span>" },
                        { en: "<b>In fact:</b> The ad is misleading. <b>In fact</b>, it's a rip-off.", pt: "<span style='color:#0077b6'>(A propaganda é enganosa. Na verdade, é um roubo.)</span>" }
                    ]
                },
                {
                    title: "Tense Review (Present & Past)",
                    audio: "TTS: Let's review the present and past tenses. Present Simple for habits. Present Continuous for actions happening now. Present Perfect for past actions with present results. Present Perfect Continuous for duration. Past Simple for finished actions. Past Continuous for past actions in progress. Past Perfect for an action before another past action.",
                    explanation: "Use this guide to choose the right structure for any present or past situation.<br><br><span style='color:#0077b6; font-style:italic;'>(Use este guia para escolher a estrutura correta para qualquer situação presente ou passada.)</span>",
                    samples:[
                        { en: "<b>Present Simple:</b> I <b>shop</b> for sustainable products every week.", pt: "<span style='color:#0077b6'>(Hábito: Eu compro produtos sustentáveis toda semana.)</span>" },
                        { en: "<b>Present Continuous:</b> She <b>is looking</b> for a jacket right now.", pt: "<span style='color:#0077b6'>(Ação no momento: Ela está procurando...)</span>" },
                        { en: "<b>Present Perfect:</b> I <b>have</b> already <b>purchased</b> a bag.", pt: "<span style='color:#0077b6'>(Relevância presente: Eu já comprei...)</span>" },
                        { en: "<b>Present Perf. Cont.:</b> They <b>have been trying</b> to reduce waste for years.", pt: "<span style='color:#0077b6'>(Duração: Eles vêm tentando...)</span>" },
                        { en: "<b>Past Simple:</b> I <b>gave in</b> and bought it yesterday.", pt: "<span style='color:#0077b6'>(Passado concluído: Eu cedi e comprei...)</span>" },
                        { en: "<b>Past Continuous:</b> Albert <b>was reading</b> when I arrived.", pt: "<span style='color:#0077b6'>(Ação em progresso no passado: Albert estava lendo...)</span>" },
                        { en: "<b>Past Perfect:</b> I <b>had</b> already <b>decided</b> before the ad.", pt: "<span style='color:#0077b6'>(Ação antes de outra: Eu já tinha decidido...)</span>" }
                    ]
                },
                {
                    title: "Tense Review (Future & Conditional)",
                    audio: "TTS: Future Simple for predictions. Future Continuous for actions in progress in the future. Future Perfect for actions completed by a future point. Conditional for imaginary situations.",
                    explanation: "Use this guide for future expectations and hypothetical scenarios.<br><br><span style='color:#0077b6; font-style:italic;'>(Use este guia para expectativas futuras e cenários hipotéticos.)</span>",
                    samples:[
                        { en: "<b>Future Simple:</b> I think prices <b>will bring down</b> in January.", pt: "<span style='color:#0077b6'>(Previsão: Acho que os preços vão cair...)</span>" },
                        { en: "<b>Future Continuous:</b> Next year, I <b>will be living</b> in a green city.", pt: "<span style='color:#0077b6'>(Progresso no futuro: Estarei vivendo...)</span>" },
                        { en: "<b>Future Perfect:</b> By 2030, we <b>will have changed</b> our habits.", pt: "<span style='color:#0077b6'>(Concluído antes do futuro: Teremos mudado...)</span>" },
                        { en: "<b>Conditional:</b> I <b>would purchase</b> it if it were ethical.", pt: "<span style='color:#0077b6'>(Hipotético: Eu compraria se...)</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups:[
                {
                    title: "Dialogue 1: Fast Fashion vs. Quality",
                    audio: "audio/em1-4-12/step3_dialogue1.mp3",
                    lines:[
                        { 
                            speaker: "Celine", 
                            text: "Albert, I [have been reading](tooltip:present-perfect-continuous) a lot about the [impact](tooltip:impact) of clothing. [Although](tooltip:although) fast fashion is cheap, it creates too much [waste](tooltip:waste).", 
                            pt: "<span style='color:#0077b6'>(Albert, tenho lido muito sobre o impacto do vestuário. Embora a moda descartável seja barata, ela cria muito lixo.)</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I agree. [In fact](tooltip:in-fact), I [had already decided](tooltip:past-perfect) to stop buying low-quality [products](tooltip:product) before we met. [Either](tooltip:either-or) we buy less or we destroy the [environment](tooltip:environment).", 
                            pt: "<span style='color:#0077b6'>(Eu concordo. Na verdade, eu já tinha decidido parar de comprar produtos de baixa qualidade antes de nos conhecermos. Ou compramos menos ou destruímos o meio ambiente.)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Planning the Purchase",
                    audio: "audio/em1-4-12/step3_dialogue2.mp3",
                    lines:[
                        { 
                            speaker: "Celine", 
                            text: "I [will be going](tooltip:future-continuous) to the mall later. Do you want anything?", 
                            pt: "<span style='color:#0077b6'>(Eu estarei indo ao shopping mais tarde. Você quer alguma coisa?)</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "No, thanks. I won't buy anything [until](tooltip:until) I [look up](tooltip:look-up) the company's history. [Due to](tooltip:due-to) recent news, I want to be more [conscious](tooltip:conscious).", 
                            pt: "<span style='color:#0077b6'>(Não, obrigado. Não comprarei nada até pesquisar a história da empresa. Devido às notícias recentes, quero ser mais consciente.)</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice (Tabbed Version - Exactly 40 MCQs)
            grammarDrillGroups:[
                {
                    title: "Discourse Markers 1",
                    drills:[
                        { type: "mcq", q: "I tried to resist the sale; _______, I gave in at the last minute.", options:[{t: "besides", c: false}, {t: "however", c: true}, {t: "since", c: false}] },
                        { type: "mcq", q: "We should shop at local markets _______ support our community.", options:[{t: "so that", c: false}, {t: "in order to", c: true}, {t: "due to", c: false}] },
                        { type: "mcq", q: "_______ you buy sustainable brands, you are helping the planet. (Condition)", options:[{t: "Unless", c: false}, {t: "As long as", c: true}, {t: "Whereas", c: false}] },
                        { type: "mcq", q: "The advertisement was very loud; _______, I turned off the TV.", options:[{t: "although", c: false}, {t: "therefore", c: true}, {t: "but", c: false}] },
                        { type: "mcq", q: "_______ the rain, the outdoor market was very crowded.", options:[{t: "Even if", c: false}, {t: "Despite", c: true}, {t: "Because", c: false}] },
                        { type: "mcq", q: "_______ he is rich, he never wastes money on fast fashion.", options:[{t: "Because", c: false}, {t: "Even though", c: true}, {t: "Therefore", c: false}] },
                        { type: "mcq", q: "The company failed _______ poor management.", options:[{t: "because", c: false}, {t: "due to", c: true}, {t: "although", c: false}] },
                        { type: "mcq", q: "She loves reading, _______ her brother hates it.", options:[{t: "whereas", c: true}, {t: "in addition", c: false}, {t: "thus", c: false}] },
                        { type: "mcq", q: "He doesn't eat meat. _______, he avoids dairy products.", options:[{t: "However", c: false}, {t: "Furthermore", c: true}, {t: "Unless", c: false}] },
                        { type: "mcq", q: "I won't go to the mall _______ you come with me.", options:[{t: "provided that", c: false}, {t: "unless", c: true}, {t: "therefore", c: false}] }
                    ]
                },
                {
                    title: "Discourse Markers 2",
                    drills:[
                        { type: "mcq", q: "She speaks _______ she knew everything about sustainability.", options:[{t: "so that", c: false}, {t: "as if", c: true}, {t: "due to", c: false}] },
                        { type: "mcq", q: "I'll check the product reviews _______ I get home. (Time)", options:[{t: "until", c: false}, {t: "as soon as", c: true}, {t: "whereas", c: false}] },
                        { type: "mcq", q: "He is _______ a consumer nor a seller; he is an activist.", options:[{t: "either", c: false}, {t: "neither", c: true}, {t: "both", c: false}] },
                        { type: "mcq", q: "Production is increasing; _______, waste management is now a priority.", options:[{t: "because", c: false}, {t: "hence", c: true}, {t: "unless", c: false}] },
                        { type: "mcq", q: "_______ we improve our habits, the planet will suffer.", options:[{t: "If", c: false}, {t: "Unless", c: true}, {t: "Provided that", c: false}] },
                        { type: "mcq", q: "I will lend you the money _______ you pay me back next week.", options:[{t: "provided that", c: true}, {t: "even though", c: false}, {t: "because of", c: false}] },
                        { type: "mcq", q: "The product is _______ cheap but also sustainable.", options:[{t: "either", c: false}, {t: "not only", c: true}, {t: "neither", c: false}] },
                        { type: "mcq", q: "It is a rip-off. _______, it's terrible for the environment.", options:[{t: "Moreover", c: true}, {t: "Although", c: false}, {t: "Thus", c: false}] },
                        { type: "mcq", q: "_______ his high salary, he struggles to pay his debts.", options:[{t: "In spite of", c: true}, {t: "Because of", c: false}, {t: "Therefore", c: false}] },
                        { type: "mcq", q: "I save money _______ I can travel next year.", options:[{t: "so that", c: true}, {t: "due to", c: false}, {t: "unless", c: false}] }
                    ]
                },
                {
                    title: "Tense Review (Present/Past)",
                    drills:[
                        { type: "mcq", q: "By the time I arrived at the store, they _______ all the eco-friendly bags.", options:[{t: "have sold", c: false}, {t: "had sold", c: true}, {t: "sell", c: false}] },
                        { type: "mcq", q: "Look at the data! People _______ more conscious consumers lately.", options:[{t: "became", c: false}, {t: "are becoming", c: true}, {t: "have become", c: false}] },
                        { type: "mcq", q: "He _______ through his feed for two hours when his phone battery died.", options:[{t: "has been scrolling", c: false}, {t: "had been scrolling", c: true}, {t: "scrolls", c: false}] },
                        { type: "mcq", q: "I _______ for sustainable products every weekend.", options:[{t: "shop", c: true}, {t: "am shopping", c: false}, {t: "have shopped", c: false}] },
                        { type: "mcq", q: "She _______ a new jacket right now.", options:[{t: "buys", c: false}, {t: "is buying", c: true}, {t: "bought", c: false}] },
                        { type: "mcq", q: "I _______ already _______ my old clothes.", options:[{t: "have / recycled", c: true}, {t: "had / recycle", c: false}, {t: "am / recycling", c: false}] },
                        { type: "mcq", q: "They _______ to reduce waste for five years now.", options:[{t: "tried", c: false}, {t: "have been trying", c: true}, {t: "are trying", c: false}] },
                        { type: "mcq", q: "I _______ in to the sale and bought a phone yesterday.", options:[{t: "gave", c: true}, {t: "have given", c: false}, {t: "give", c: false}] },
                        { type: "mcq", q: "Albert _______ an advertisement when I arrived.", options:[{t: "reads", c: false}, {t: "was reading", c: true}, {t: "had read", c: false}] },
                        { type: "mcq", q: "She _______ money for months before she finally bought the car.", options:[{t: "has been saving", c: false}, {t: "had been saving", c: true}, {t: "is saving", c: false}] }
                    ]
                },
                {
                    title: "Tense Review (Future/Cond)",
                    drills:[
                        { type: "mcq", q: "If I had more money, I _______ a solar panel for my house.", options:[{t: "will purchase", c: false}, {t: "would purchase", c: true}, {t: "purchased", c: false}] },
                        { type: "mcq", q: "Next month, I _______ my own sustainable garden for exactly one year.", options:[{t: "am starting", c: false}, {t: "will have had", c: true}, {t: "have", c: false}] },
                        { type: "mcq", q: "I think the new laws _______ positive changes soon.", options:[{t: "will bring about", c: true}, {t: "are bringing about", c: false}, {t: "brought about", c: false}] },
                        { type: "mcq", q: "This time next year, we _______ in a greener city.", options:[{t: "will live", c: false}, {t: "will be living", c: true}, {t: "live", c: false}] },
                        { type: "mcq", q: "By 2050, we _______ many natural resources if we don't stop.", options:[{t: "destroy", c: false}, {t: "will have destroyed", c: true}, {t: "are destroying", c: false}] },
                        { type: "mcq", q: "If they offered a discount, I _______ it.", options:[{t: "will buy", c: false}, {t: "would buy", c: true}, {t: "buy", c: false}] },
                        { type: "mcq", q: "Right now, more people _______ conscious about their habits.", options:[{t: "became", c: false}, {t: "are becoming", c: true}, {t: "will become", c: false}] },
                        { type: "mcq", q: "I promise I _______ my plastic consumption.", options:[{t: "reduce", c: false}, {t: "will reduce", c: true}, {t: "reduced", c: false}] },
                        { type: "mcq", q: "At 8 PM tomorrow, I _______ a documentary about the environment.", options:[{t: "watch", c: false}, {t: "will be watching", c: true}, {t: "watched", c: false}] },
                        { type: "mcq", q: "By the time you wake up, I _______ the house.", options:[{t: "will leave", c: false}, {t: "will have left", c: true}, {t: "leave", c: false}] }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 4: SHADOWING (Recording)
        // ======================================================
        {
            title: "Can you say that again?",
            sentences:[
                { 
                    text: "Although shopping can be fun, consumerism has a dark side. ↘<br><small style='color:#0077b6'>(Embora fazer compras possa ser divertido, o consumismo tem um lado sombrio.)</small>", 
                    audio: "TTS: Although shopping can be fun, consumerism has a dark side.", 
                    arrow: "↘" 
                },
                { 
                    text: "He wants a new phone; however, his current one works perfectly. ↘<br><small style='color:#0077b6'>(Ele quer um telefone novo; no entanto, o atual dele funciona perfeitamente.)</small>", 
                    audio: "TTS: He wants a new phone; however, his current one works perfectly.", 
                    arrow: "↘" 
                },
                { 
                    text: "We should shop consciously in order to protect the environment. ↘<br><small style='color:#0077b6'>(Devemos comprar conscientemente para proteger o meio ambiente.)</small>", 
                    audio: "TTS: We should shop consciously in order to protect the environment.", 
                    arrow: "↘" 
                },
                { 
                    text: "I'm looking for a brand that uses recycled materials. ↘<br><small style='color:#0077b6'>(Estou procurando por uma marca que usa materiais reciclados.)</small>", 
                    audio: "TTS: I'm looking for a brand that uses recycled materials.", 
                    arrow: "↘" 
                },
                { 
                    text: "Did you see that influencer's post yesterday? ↗<br><small style='color:#0077b6'>(Você viu a postagem daquele influenciador ontem?)</small>", 
                    audio: "TTS: Did you see that influencer's post yesterday?", 
                    arrow: "↗" 
                },
                { 
                    text: "I'll buy this as long as it's made from recycled waste. ↘<br><small style='color:#0077b6'>(Eu vou comprar isto contanto que seja feito de resíduos reciclados.)</small>", 
                    audio: "TTS: I'll buy this as long as it's made from recycled waste.", 
                    arrow: "↘" 
                }
            ]
        },

        // ======================================================
        // STEP 5: LISTENING
        // ======================================================
        {
            title: "Are you following me?",
            drills:[
                // Drill 1: Typing (TTS)
                {
                    type: "typing",
                    instruction: "Listen to Albert talking about his shopping trip and type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre sua ida às compras e digite as palavras que faltam.)</small>",
                    audio: "TTS: I went to the mall yesterday because the advertisement showed a huge sale. I almost gave in and bought a new product, but I had already decided to be a conscious consumer. I will look for better alternatives until I find a sustainable brand.",
                    text: "I went to the mall yesterday because the [advertisement] showed a huge sale. I almost [gave in] and bought a new [product], but I [had already decided] to be a [conscious] [consumer]. I will [look for] better alternatives [until] I find a [sustainable][brand]."
                },
                // Drill 2: Dropdown (with Randomized Asterisks)
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue between Celine and a Store Clerk and choose the correct options.<br><small style='color:#0077b6'>(Ouça o diálogo e escolha as opções corretas.)</small>",
                    audio: "audio/em1-4-12/step5_drill2.mp3",
                    questions:[
                        { q: "Celine: Hello! I am [looking for* | looking after | looking into] a jacket. Is this one [wasteful | sustainable* | misleading]?", a: "" },
                        { q: "Clerk: Yes! We [brought in | bring in | are bringing in*] new items made from organic cotton.", a: "" },
                        { q: "Celine: That's great! [Moreover* | Since | However], I noticed you [give back | give off | give out*] recycled bags.", a: "" },
                        { q: "Clerk: Exactly. We want to [recycle | reduce* | purchase] our [habit | impact* | brand] on the environment.", a: "" }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer based on the lesson logic.<br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta correta baseada na lógica da lição.)</small>",
                    audio: "TTS: Why did Celine decide to give away her older jacket?",
                    options:[
                        { t: "Because she gave in to the sale.", c: false },
                        { t: "Because she wants to look after her money.", c: false },
                        { t: "In order to be more sustainable and help someone.", c: true },
                        { t: "Because it gives off a strange smell.", c: false }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 6: READING
        // ======================================================
        {
            title: "Get the story",
            texts:[
                {
                    title: "6a: Narration - The Conscious Shift",
                    audio: "TTS: In today's consumer society, many people are changing their habits. By 2030, many companies will have changed their packaging because consumers are more conscious now. In fact, my friend Leo has become an activist. Whereas he used to buy new clothes every month, now he only shops at second-hand stores. He had been saving money for a year before he bought his first recycled product. Therefore, he is a true example of how we can reduce our waste. || audio/em1-4-12/p6_text1.mp3",
                    body: "In today's [consumer society](tooltip:consumer-society), many people are changing their [habits](tooltip:habit). By 2030, many companies <b>will have changed</b> their packaging because [consumers](tooltip:consumer) are more [conscious](tooltip:conscious) now. <b>In fact</b>, my friend Leo <b>has become</b> an activist. <b>[Whereas](tooltip:whereas)</b> he used to buy new clothes every month, now he only shops at second-hand stores. He <b>had been saving</b> money for a year before he bought his first recycled [product](tooltip:product). <b>[Therefore](tooltip:therefore)</b>, he is a true example of how we can [reduce](tooltip:reduce) our [waste](tooltip:waste).",
                    questions:[
                        { 
                            q: "What is expected to happen by 2030?", 
                            options:[ 
                                {t: "People will stop buying clothes.", c: false}, 
                                {t: "Companies will have changed their packaging.", c: true}, 
                                {t: "Consumerism will end completely.", c: false} 
                            ] 
                        },
                        { 
                            q: "What was Leo's past habit?", 
                            options:[ 
                                {t: "He only bought second-hand items.", c: false}, 
                                {t: "He used to buy new clothes every month.", c: true}, 
                                {t: "He worked for an advertisement agency.", c: false} 
                            ] 
                        },
                        { 
                            q: "Why is Leo a good example?", 
                            options:[ 
                                {t: "Because he is an influencer.", c: false}, 
                                {t: "Because he shows how to reduce waste.", c: true}, 
                                {t: "Because he spends all his money.", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "6b: Dialogue - The Shopping Debate",
                    audio: "audio/em1-4-12/p6_text2.mp3",
                    body: "<b>Albert:</b> Celine, did you see that [advertisement](tooltip:advertisement)? It says this phone <b>will [bring about](tooltip:bring-about)</b> a revolution in your life!<br><b>Celine:</b> Don't believe it, Albert. It's just a [brand](tooltip:brand) trying to make you [purchase](tooltip:purchase) things you don't need.<br><b>Albert:</b> <b>[However](tooltip:however)</b>, the discount is amazing. I might [give in](tooltip:give-in) this time.<br><b>Celine:</b> <b>If I were you</b>, I <b>would [look into](tooltip:look-into)</b> the company's [sustainable](tooltip:sustainable) practices first. <b>Neither</b> the price <b>nor</b> the look is more important than the [environment](tooltip:environment).<br><b>Albert:</b> That's a good point. I <b>will [look up](tooltip:look-up)</b> their history <b>as soon as</b> I finish my lunch.<br><b>Celine:</b> Good! <b>Not only</b> will you save money, <b>but also</b> you will feel better about your [choice](tooltip:choice).",
                    questions:[
                        { 
                            q: "What is Albert's initial reaction to the advertisement?", 
                            options:[ 
                                {t: "He thinks it is a rip-off.", c: false}, 
                                {t: "He is tempted to give in because of the discount.", c: true}, 
                                {t: "He wants to give away his old phone.", c: false} 
                            ] 
                        },
                        { 
                            q: "What does Celine advise Albert to do?", 
                            options:[ 
                                {t: "To buy the phone immediately.", c: false}, 
                                {t: "To investigate the company's sustainable practices.", c: true}, 
                                {t: "To unfollow the brand.", c: false} 
                            ] 
                        },
                        { 
                            q: "What two benefits does Celine mention for being conscious?", 
                            options:[ 
                                {t: "Saving money and feeling better.", c: true}, 
                                {t: "Getting a discount and a new phone.", c: false}, 
                                {t: "Becoming an influencer and famous.", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "6c: Description - A Sustainable Startup",
                    audio: "TTS: A new startup in the city is trying to bring about a change. The company is being managed by two friends who have been working on this project for years. Both the clothes and the products are made from 100% recycled waste. Furthermore, they give back 10% of their profits to the community. Despite the high costs, they have already achieved great success. They act as though every small choice impacts the entire planet. || audio/em1-4-12/p6_text3.mp3",
                    body: "A new startup in the city is trying to [bring about](tooltip:bring-about) a change. The company <b>is being [managed](tooltip:manage)</b> by two friends who <b>have been working</b> on this project for years. <b>Both</b> the clothes <b>and</b> the [products](tooltip:product) are made from 100% recycled [waste](tooltip:waste). <b>[Furthermore](tooltip:furthermore)</b>, they [give back](tooltip:give-back) 10% of their [profits](tooltip:profit) to the community. <b>[Despite](tooltip:despite)</b> the high costs, they <b>have already achieved</b> great success. They act <b>as though</b> every small [choice](tooltip:choice) [impacts](tooltip:impact) the entire planet.",
                    questions:[
                        { 
                            q: "How long have the friends been working on the project?", 
                            options:[ 
                                {t: "Since yesterday.", c: false}, 
                                {t: "For years.", c: true}, 
                                {t: "They just started.", c: false} 
                            ] 
                        },
                        { 
                            q: "What is the source of their materials?", 
                            options:[ 
                                {t: "New plastic.", c: false}, 
                                {t: "100% recycled waste.", c: true}, 
                                {t: "They don't mention it.", c: false} 
                            ] 
                        },
                        { 
                            q: "What do they do with part of their profits?", 
                            options:[ 
                                {t: "They give it back to the community.", c: true}, 
                                {t: "They spend it on advertisements.", c: false}, 
                                {t: "They buy more fast fashion.", c: false} 
                            ] 
                        }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 7: QUICK DRILLS (Mixed Types - Flat Array, 40 Drills)
        // ======================================================
        {
            title: "Monkey see, Monkey do",
            drills:[
                // 1-5: Matching (Vocabulary / Phrasal Verbs)
                { type: "matching", instruction: "Match the phrasal verb with its meaning.<br><small style='color:#0077b6'>(Associe o verbo frasal ao seu significado.)</small>", pairs:[ {left: "Bring about", right: "Causar", val: "1"}, {left: "Give up", right: "Desistir", val: "2"}, {left: "Look into", right: "Investigar", val: "3"}, {left: "Bring down", right: "Reduzir", val: "4"} ] },
                { type: "matching", instruction: "Match the phrasal verb with its meaning.<br><small style='color:#0077b6'>(Associe o verbo frasal ao seu significado.)</small>", pairs:[ {left: "Look forward to", right: "Esperar ansiosamente", val: "1"}, {left: "Give away", right: "Doar", val: "2"}, {left: "Bring back", right: "Trazer à memória", val: "3"}, {left: "Look down on", right: "Menosprezar", val: "4"} ] },
                { type: "matching", instruction: "Match the discourse marker with its function.<br><small style='color:#0077b6'>(Associe o conectivo à sua função.)</small>", pairs:[ {left: "Although", right: "Contrast", val: "1"}, {left: "Therefore", right: "Result", val: "2"}, {left: "Moreover", right: "Addition", val: "3"}, {left: "Because", right: "Reason", val: "4"} ] },
                { type: "matching", instruction: "Match the discourse marker with its translation.<br><small style='color:#0077b6'>(Associe o conectivo à sua tradução.)</small>", pairs:[ {left: "Provided that", right: "Contanto que", val: "1"}, {left: "In order to", right: "A fim de", val: "2"}, {left: "As soon as", right: "Assim que", val: "3"}, {left: "As if", right: "Como se", val: "4"} ] },
                { type: "matching", instruction: "Match the term with its translation.<br><small style='color:#0077b6'>(Associe o termo à sua tradução.)</small>", pairs:[ {left: "Waste", right: "Desperdício", val: "1"}, {left: "Brand", right: "Marca", val: "2"}, {left: "Purchase", right: "Adquirir", val: "3"}, {left: "Habit", right: "Hábito", val: "4"} ] },
                
                // 6-15: Word Order (Tenses & Grammar)
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "to / save / in order / money / I / shop / carefully / .", correct: "I shop carefully in order to save money ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "as / I / get / as / call / soon / home / will / you / I / .", correct: "I will call you as soon as I get home ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "the / looking / am / I / for / jacket / .", correct: "I am looking for the jacket ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "had / decided / already / She / stop / to / .", correct: "She had already decided to stop ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "bring / The / down / sale / prices / will / .", correct: "The sale will bring down prices ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "gave / and / in / I / it / bought / .", correct: "I gave in and bought it ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "only / is / cheap / Not / it / sustainable / also / but / .", correct: "Not only is it cheap but also sustainable ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "working / phone / My / perfectly / is / .", correct: "My phone is working perfectly ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "give / my / to / clothes / away / I / will / charity / .", correct: "I will give away my clothes to charity ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "have / trying / We / been / reduce / to / waste / .", correct: "We have been trying to reduce waste ." },

                // 16-25: Clickable Error (Grammar & Phrasal Verbs)
                { type: "clickable-error", instruction: "Find the grammatical mistake.<br><small style='color:#0077b6'>(Encontre o erro gramatical.)</small>", sentence: "She acts [as](error:as_if) she were the boss." },
                { type: "clickable-error", instruction: "Find the grammatical mistake.<br><small style='color:#0077b6'>(Encontre o erro gramatical.)</small>", sentence: "He [gives](error:gave) in and bought the phone yesterday." },
                { type: "clickable-error", instruction: "Find the grammatical mistake.<br><small style='color:#0077b6'>(Encontre o erro gramatical.)</small>", sentence: "I will call you [until](error:as_soon_as) I arrive." },
                { type: "clickable-error", instruction: "Find the grammatical mistake.<br><small style='color:#0077b6'>(Encontre o erro gramatical.)</small>", sentence: "The store is [giving](error:giving_out) free samples." },
                { type: "clickable-error", instruction: "Find the grammatical mistake.<br><small style='color:#0077b6'>(Encontre o erro gramatical.)</small>", sentence: "He was [read](error:reading) the article when I called." },
                { type: "clickable-error", instruction: "Find the grammatical mistake.<br><small style='color:#0077b6'>(Encontre o erro gramatical.)</small>", sentence: "They [has](error:have) been saving money for years." },
                { type: "clickable-error", instruction: "Find the grammatical mistake.<br><small style='color:#0077b6'>(Encontre o erro gramatical.)</small>", sentence: "I [looking](error:am_looking) for a sustainable brand." },
                { type: "clickable-error", instruction: "Find the grammatical mistake.<br><small style='color:#0077b6'>(Encontre o erro gramatical.)</small>", sentence: "We must [brings](error:bring) about a positive change." },
                { type: "clickable-error", instruction: "Find the grammatical mistake.<br><small style='color:#0077b6'>(Encontre o erro gramatical.)</small>", sentence: "She had already [purchase](error:purchased) it before the sale." },
                { type: "clickable-error", instruction: "Find the grammatical mistake.<br><small style='color:#0077b6'>(Encontre o erro gramatical.)</small>", sentence: "I look forward [for](error:to) the new eco-friendly products." },

                // 26-40: MCQs (Using <br> formatting inside instruction)
                { type: "mcq", instruction: "Choose the correct option.<br>By 2050, we _______ many natural resources if we don't stop.", q: "", options:[{t: "destroy", c: false}, {t: "will have destroyed", c: true}, {t: "are destroying", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>Right now, more people _______ conscious about their habits.", q: "", options:[{t: "became", c: false}, {t: "are becoming", c: true}, {t: "have become", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>I tried to resist the sale; _______, I gave in at the last minute.", q: "", options:[{t: "besides", c: false}, {t: "however", c: true}, {t: "since", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>We should shop at local markets _______ support our community.", q: "", options:[{t: "so that", c: false}, {t: "in order to", c: true}, {t: "due to", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>_______ you buy sustainable brands, you are helping the planet.", q: "", options:[{t: "Unless", c: false}, {t: "As long as", c: true}, {t: "Whereas", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>The advertisement was very loud; _______, I turned off the TV.", q: "", options:[{t: "although", c: false}, {t: "therefore", c: true}, {t: "but", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>_______ the rain, the outdoor market was very crowded.", q: "", options:[{t: "Even if", c: false}, {t: "Despite", c: true}, {t: "Because", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>By the time I arrived, they _______ all the eco-friendly bags.", q: "", options:[{t: "have sold", c: false}, {t: "had sold", c: true}, {t: "sell", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>Look at the data! People _______ more conscious consumers lately.", q: "", options:[{t: "became", c: false}, {t: "are becoming", c: true}, {t: "will become", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>If I had more money, I _______ a solar panel for my house.", q: "", options:[{t: "will purchase", c: false}, {t: "would purchase", c: true}, {t: "purchased", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>Next month, I _______ my sustainable garden for exactly one year.", q: "", options:[{t: "am starting", c: false}, {t: "will have had", c: true}, {t: "have", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>He _______ through his feed for two hours when his phone died.", q: "", options:[{t: "has been scrolling", c: false}, {t: "had been scrolling", c: true}, {t: "scrolls", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>I won't go to the mall _______ you come with me.", q: "", options:[{t: "provided that", c: false}, {t: "unless", c: true}, {t: "if", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>She speaks _______ she knew everything about sustainability.", q: "", options:[{t: "so that", c: false}, {t: "as if", c: true}, {t: "due to", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>I'll check the product reviews _______ I get home.", q: "", options:[{t: "until", c: false}, {t: "as soon as", c: true}, {t: "whereas", c: false}] }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn to build a strong argument! Write a short text (5-7 sentences) describing your shopping habits. Are you a conscious consumer? What are you looking for when you go to the mall?<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas: Agora é sua vez de construir um argumento forte! Escreva um pequeno texto (5-7 frases) descrevendo seus hábitos de compra. Você é um consumidor consciente? O que você procura quando vai ao shopping?)</span></small>",
            example: "\"I am trying to be a conscious consumer because I care about the impact on the environment. Although I like new brands, I bought a second-hand jacket last week. I will always check the label in order to find sustainable materials. I believe we can make a difference together!\"<br><br><small><span style='color:#0077b6'>(\"Eu estou tentando ser um consumidor consciente porque me importo com o impacto no meio ambiente. Embora eu goste de marcas novas, eu comprei uma jaqueta de segunda mão semana passada. Eu sempre checarei a etiqueta a fim de encontrar materiais sustentáveis. Acredito que podemos fazer a diferença juntos!\")</span></small>",
            prompts: [
                "Use at least two [Discourse Markers] (Although, In fact, Therefore, etc.). <br><small><span style='color:#0077b6'>(Use pelo menos dois Conectivos do Discurso.)</span></small>",
                "Use two different [Grammar Tenses]. <br><small><span style='color:#0077b6'>(Use dois Tempos Verbais diferentes.)</span></small>",
                "Include at least one [Phrasal Verb] (look for, give up, etc.). <br><small><span style='color:#0077b6'>(Inclua pelo menos um Verbo Frasal.)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Wrap it up",
            items:[
                // --- 2A: Verbs of Consumption ---
                { term: "To reduce", definition: "To make smaller or less in amount, degree, or size.", defTrans: "Reduzir", example: "Albert wants to reduce his daily plastic use.", audioFront: "TTS: To reduce", audioBack: "TTS: Albert wants to reduce his daily plastic use." },
                { term: "To recycle", definition: "To convert waste into reusable material.", defTrans: "Reciclar", example: "We should recycle every glass bottle we buy.", audioFront: "TTS: To recycle", audioBack: "TTS: We should recycle every glass bottle we buy." },
                { term: "To purchase", definition: "The act of buying something.", defTrans: "Comprar / Adquirir", example: "Celine decided to purchase a sustainable bag.", audioFront: "TTS: To purchase", audioBack: "TTS: Celine decided to purchase a sustainable bag." },
                { term: "To reuse", definition: "To use something again or more than once.", defTrans: "Reutilizar", example: "You can reuse old jars to store pens.", audioFront: "TTS: To reuse", audioBack: "TTS: You can reuse old jars to store pens." },

                // --- 2A: Consumption Vocabulary ---
                { term: "Consumer", definition: "A person who purchases goods and services.", defTrans: "Consumidor(a)", example: "Every consumer has power in the market.", audioFront: "TTS: Consumer", audioBack: "TTS: Every consumer has power in the market." },
                { term: "Consumption", definition: "The action of using up a resource.", defTrans: "Consumo", example: "High consumption of fast fashion hurts the planet.", audioFront: "TTS: Consumption", audioBack: "TTS: High consumption of fast fashion hurts the planet." },
                { term: "Sustainable", definition: "Able to be maintained at a certain rate or level.", defTrans: "Sustentável", example: "This brand uses sustainable materials.", audioFront: "TTS: Sustainable", audioBack: "TTS: This brand uses sustainable materials." },
                { term: "Environment", definition: "The natural world, as a whole or in a particular geographical area.", defTrans: "Meio ambiente", example: "Pollution is a major threat to the environment.", audioFront: "TTS: Environment", audioBack: "TTS: Pollution is a major threat to the environment." },
                { term: "Advertisement", definition: "A notice or announcement in a public medium.", defTrans: "Propaganda / Anúncio", example: "I saw an advertisement for eco-friendly shoes.", audioFront: "TTS: Advertisement", audioBack: "TTS: I saw an advertisement for eco-friendly shoes." },
                { term: "Brand", definition: "A type of product manufactured by a particular company.", defTrans: "Marca", example: "Celine only supports an ethical brand.", audioFront: "TTS: Brand", audioBack: "TTS: Celine only supports an ethical brand." },
                { term: "Conscious", definition: "Aware of and responding to one's surroundings.", defTrans: "Consciente", example: "Albert is trying to be a more conscious buyer.", audioFront: "TTS: Conscious", audioBack: "TTS: Albert is trying to be a more conscious buyer." },
                { term: "Impact", definition: "The action of one object coming forcibly into contact with another.", defTrans: "Impacto", example: "Our choices have a significant impact on nature.", audioFront: "TTS: Impact", audioBack: "TTS: Our choices have a significant impact on nature." },
                { term: "Waste", definition: "Unwanted or unusable material, substances, or by-products.", defTrans: "Desperdício / Lixo", example: "Don't throw that away; it is a waste of resources.", audioFront: "TTS: Waste", audioBack: "TTS: Don't throw that away; it is a waste of resources." },
                { term: "Product", definition: "An article or substance that is manufactured or refined for sale.", defTrans: "Produto", example: "This product is made from recycled waste.", audioFront: "TTS: Product", audioBack: "TTS: This product is made from recycled waste." },
                { term: "Habit", definition: "A settled or regular tendency or practice.", defTrans: "Hábito", example: "Recycling should be a regular habit.", audioFront: "TTS: Habit", audioBack: "TTS: Recycling should be a regular habit." },
                { term: "Choice", definition: "An act of selecting or making a decision.", defTrans: "Escolha", example: "Repairing your clothes is a wise choice.", audioFront: "TTS: Choice", audioBack: "TTS: Repairing your clothes is a wise choice." },

                // --- 2A: Phrasal Verbs ---
                { term: "Bring up", definition: "To mention a topic during a conversation.", defTrans: "Mencionar", example: "Albert brought up the topic of global warming.", audioFront: "TTS: Bring up", audioBack: "TTS: Albert brought up the topic of global warming." },
                { term: "Bring about", definition: "To cause something to happen.", defTrans: "Causar / Provocar", example: "New laws can bring about positive changes.", audioFront: "TTS: Bring about", audioBack: "TTS: New laws can bring about positive changes." },
                { term: "Bring back", definition: "To cause someone to remember something.", defTrans: "Trazer de volta", example: "That old logo brings back memories.", audioFront: "TTS: Bring back", audioBack: "TTS: That old logo brings back memories." },
                { term: "Bring down", definition: "To cause a price or level to decrease.", defTrans: "Reduzir / Baixar", example: "Sales can bring down the price of electronics.", audioFront: "TTS: Bring down", audioBack: "TTS: Sales can bring down the price of electronics." },
                { term: "Bring in", definition: "To introduce a new law, system, or product.", defTrans: "Introduzir", example: "The city will bring in a new recycling system.", audioFront: "TTS: Bring in", audioBack: "TTS: The city will bring in a new recycling system." },
                { term: "Bring on", definition: "To cause something unpleasant to happen.", defTrans: "Provocar (algo negativo)", example: "Overspending can bring on financial stress.", audioFront: "TTS: Bring on", audioBack: "TTS: Overspending can bring on financial stress." },
                { term: "Give up", definition: "To stop doing something, especially a habit.", defTrans: "Desistir / Parar de", example: "Celine decided to give up fast fashion.", audioFront: "TTS: Give up", audioBack: "TTS: Celine decided to give up fast fashion." },
                { term: "Give back", definition: "To return something to its owner.", defTrans: "Devolver", example: "Please give back the books you borrowed.", audioFront: "TTS: Give back", audioBack: "TTS: Please give back the books you borrowed." },
                { term: "Give in", definition: "To finally agree to do something you didn't want to do.", defTrans: "Ceder", example: "I tried to resist the sale, but I gave in.", audioFront: "TTS: Give in", audioBack: "TTS: I tried to resist the sale, but I gave in." },
                { term: "Give away", definition: "To give something to someone for free.", defTrans: "Doar / Dar", example: "Albert will give away his old clothes.", audioFront: "TTS: Give away", audioBack: "TTS: Albert will give away his old clothes." },
                { term: "Give out", definition: "To give something to many people.", defTrans: "Distribuir", example: "They are giving out free organic samples.", audioFront: "TTS: Give out", audioBack: "TTS: They are giving out free organic samples." },
                { term: "Give off", definition: "To produce something like a smell, light, or heat.", defTrans: "Emitir / Exalar", example: "Cheap plastic often gives off a strange smell.", audioFront: "TTS: Give off", audioBack: "TTS: Cheap plastic often gives off a strange smell." },
                { term: "Look for", definition: "To search for something.", defTrans: "Procurar por", example: "Celine is looking for a second-hand store.", audioFront: "TTS: Look for", audioBack: "TTS: Celine is looking for a second-hand store." },
                { term: "Look after", definition: "To take care of someone or something.", defTrans: "Cuidar de", example: "We must look after our natural resources.", audioFront: "TTS: Look after", audioBack: "TTS: We must look after our natural resources." },
                { term: "Look up", definition: "To search for information.", defTrans: "Pesquisar", example: "I will look up the brand's history online.", audioFront: "TTS: Look up", audioBack: "TTS: I will look up the brand's history online." },
                { term: "Look forward to", definition: "To feel excited about something that is going to happen.", defTrans: "Esperar ansiosamente por", example: "I look forward to a greener future.", audioFront: "TTS: Look forward to", audioBack: "TTS: I look forward to a greener future." },
                { term: "Look into", definition: "To examine the facts about a problem.", defTrans: "Investigar", example: "The government will look into the pollution.", audioFront: "TTS: Look into", audioBack: "TTS: The government will look into the pollution." },
                { term: "Look down on", definition: "To think that someone or something is inferior.", defTrans: "Menosprezar", example: "Don't look down on recycled products.", audioFront: "TTS: Look down on", audioBack: "TTS: Don't look down on recycled products." },

                // --- 3A: Discourse Markers ---
                { term: "Although / Though", definition: "Used to introduce a statement that makes the main statement surprising.", defTrans: "Embora", example: "Although it's expensive, I'll buy the ethical brand.", audioFront: "TTS: Although, Though", audioBack: "TTS: Although it's expensive, I'll buy the ethical brand." },
                { term: "However / Nevertheless", definition: "Used to show contrast between two sentences.", defTrans: "No entanto", example: "Sales are high; however, waste is increasing.", audioFront: "TTS: However, Nevertheless", audioBack: "TTS: Sales are high; however, waste is increasing." },
                { term: "Despite / In spite of", definition: "Used to show contrast, followed by a noun or -ing.", defTrans: "Apesar de", example: "I bought it despite the high price.", audioFront: "TTS: Despite, In spite of", audioBack: "TTS: I bought it despite the high price." },
                { term: "Whereas", definition: "Used to contrast two facts or situations.", defTrans: "Ao passo que / Enquanto", example: "I save money, whereas he spends it all.", audioFront: "TTS: Whereas", audioBack: "TTS: I save money, whereas he spends it all." },
                { term: "Due to / Because of", definition: "Used to explain the cause, followed by a noun.", defTrans: "Devido a / Por causa de", example: "The event was cancelled due to the rain.", audioFront: "TTS: Due to, Because of", audioBack: "TTS: The event was cancelled due to the rain." },
                { term: "Moreover / Furthermore", definition: "Used to add extra information to an argument.", defTrans: "Além disso", example: "Recycling is key; moreover, we must reduce.", audioFront: "TTS: Moreover, Furthermore", audioBack: "TTS: Recycling is key; moreover, we must reduce." },
                { term: "Provided that / As long as", definition: "Used to set a specific requirement.", defTrans: "Contanto que / Desde que", example: "I'll go as long as the market is sustainable.", audioFront: "TTS: Provided that, As long as", audioBack: "TTS: I'll go as long as the market is sustainable." },
                { term: "Therefore / As a result", definition: "Used to show the consequence.", defTrans: "Portanto / Como resultado", example: "It was a rip-off; therefore, I returned it.", audioFront: "TTS: Therefore, As a result", audioBack: "TTS: It was a rip-off; therefore, I returned it." },
                { term: "In order to", definition: "Used to show the goal or purpose of an action.", defTrans: "Para / A fim de", example: "We shop carefully in order to save the planet.", audioFront: "TTS: In order to", audioBack: "TTS: We shop carefully in order to save the planet." },
                { term: "Either...or", definition: "Used to present a choice between two alternatives.", defTrans: "Ou... ou", example: "You can either repair it or reuse it.", audioFront: "TTS: Either or", audioBack: "TTS: You can either repair it or reuse it." },
                { term: "Neither...nor", definition: "Used to join two negative alternatives.", defTrans: "Nem... nem", example: "Neither Albert nor Celine likes fast fashion.", audioFront: "TTS: Neither nor", audioBack: "TTS: Neither Albert nor Celine likes fast fashion." },
                { term: "As soon as", definition: "Used to show that one thing happens immediately after another.", defTrans: "Assim que", example: "I will call you as soon as I get home.", audioFront: "TTS: As soon as", audioBack: "TTS: I will call you as soon as I get home." },
                { term: "As if / As though", definition: "Used to describe how a situation seems or feels.", defTrans: "Como se", example: "She acts as if she were an activist.", audioFront: "TTS: As if, As though", audioBack: "TTS: She acts as if she were an activist." },
                { term: "In fact / Indeed", definition: "Used to emphasize a statement or provide more detail.", defTrans: "Na verdade / De fato", example: "In fact, that brand is not sustainable.", audioFront: "TTS: In fact, Indeed", audioBack: "TTS: In fact, that brand is not sustainable." },

                // --- 3A: Grammar Tense Review ---
                { term: "Present Simple", definition: "Used for habits, facts, and routines.", defTrans: "Presente Simples", example: "I shop consciously every week.", audioFront: "TTS: Present Simple", audioBack: "TTS: I shop consciously every week." },
                { term: "Present Continuous", definition: "Used for actions happening now or near future plans.", defTrans: "Presente Contínuo", example: "People are becoming more aware.", audioFront: "TTS: Present Continuous", audioBack: "TTS: People are becoming more aware." },
                { term: "Present Perfect", definition: "Used for past actions with present relevance.", defTrans: "Presente Perfeito", example: "I have already purchased a recycled shirt.", audioFront: "TTS: Present Perfect", audioBack: "TTS: I have already purchased a recycled shirt." },
                { term: "Present Perfect Cont.", definition: "Used for duration of ongoing actions.", defTrans: "Presente Perfeito Contínuo", example: "They have been trying to recycle for years.", audioFront: "TTS: Present Perfect Continuous", audioBack: "TTS: They have been trying to recycle for years." },
                { term: "Past Simple", definition: "Used for finished past actions at a specific time.", defTrans: "Passado Simples", example: "I bought this jacket yesterday.", audioFront: "TTS: Past Simple", audioBack: "TTS: I bought this jacket yesterday." },
                { term: "Past Continuous", definition: "Used for actions in progress at a past moment.", defTrans: "Passado Contínuo", example: "Celine was looking for a sale when I called.", audioFront: "TTS: Past Continuous", audioBack: "TTS: Celine was looking for a sale when I called." },
                { term: "Past Perfect", definition: "Used for an action before another past action.", defTrans: "Passado Perfeito", example: "I had already decided before the ad.", audioFront: "TTS: Past Perfect", audioBack: "TTS: I had already decided before the ad." },
                { term: "Past Perfect Cont.", definition: "Used for a long action before another past point.", defTrans: "Passado Perfeito Contínuo", example: "She had been saving for months before buying it.", audioFront: "TTS: Past Perfect Continuous", audioBack: "TTS: She had been saving for months before buying it." },
                { term: "Future Simple", definition: "Used for predictions and spontaneous decisions.", defTrans: "Futuro Simples", example: "I think prices will bring down soon.", audioFront: "TTS: Future Simple", audioBack: "TTS: I think prices will bring down soon." },
                { term: "Future Continuous", definition: "Used for future actions in progress.", defTrans: "Futuro Contínuo", example: "I will be living in a green city next year.", audioFront: "TTS: Future Continuous", audioBack: "TTS: I will be living in a green city next year." },
                { term: "Future Perfect", definition: "Used for actions completed by a future point.", defTrans: "Futuro Perfeito", example: "We will have changed our habits by 2030.", audioFront: "TTS: Future Perfect", audioBack: "TTS: We will have changed our habits by 2030." },
                { term: "Conditional", definition: "Used for imaginary or hypothetical situations.", defTrans: "Condicional", example: "I would purchase more if I had a higher salary.", audioFront: "TTS: Conditional", audioBack: "TTS: I would purchase more if I had a higher salary." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Reorganized)
    // ======================================================
    glossary:[
        // --- TOPIC: CONTEXT (Tooltips from Step 0 & 1 not covered in vocabulary) ---
        { topic: "Context", term: "grammar-tenses", definition: "The different forms of verbs used to indicate time.", translation: "Tempos Verbais" },
        { topic: "Context", term: "discourse-markers", definition: "Words that connect ideas and show the logic of a sentence.", translation: "Conectivos do Discurso" },
        { topic: "Context", term: "phrasal-verbs", definition: "Verbs combined with a preposition or adverb to create a new meaning.", translation: "Verbos Frasais" },
        { topic: "Context", term: "fast-fashion", definition: "Inexpensive clothing produced rapidly by mass-market retailers.", translation: "Moda rápida / Descartável" },
        { topic: "Context", term: "conscious-consumption", definition: "The act of buying and using goods in a way that minimizes environmental harm.", translation: "Consumo Consciente" },
        { topic: "Context", term: "consumer-society", definition: "A society in which people often buy new goods, especially ones they do not need.", translation: "Sociedade de consumo" },
        { topic: "Context", term: "shoppers", definition: "People who are buying goods from stores.", translation: "Compradores" },
        { topic: "Context", term: "gadgets", definition: "Small mechanical or electronic devices or tools.", translation: "Aparelhos / Dispositivos" },
        { topic: "Context", term: "have-been-looking-for", definition: "Present Perfect Continuous: Shows an ongoing action starting in the past.", translation: "Tenho procurado" },
        { topic: "Context", term: "is-made-of", definition: "Passive Voice: Shows the material a product consists of.", translation: "É feito de" },
        { topic: "Context", term: "was-just-thinking", definition: "Past Continuous: Shows an action that was happening around a past time.", translation: "Estava justamente pensando" },
        { topic: "Context", term: "will-solve", definition: "Future Simple: Used here to make a prediction.", translation: "Vai resolver" },
        { topic: "Context", term: "must", definition: "Modal verb used to express strong obligation or necessity.", translation: "Devemos" },
        { topic: "Context", term: "not-only", definition: "Part of a correlative conjunction adding emphasis.", translation: "Não apenas" },
        { topic: "Context", term: "but-also", definition: "The second part of the correlative conjunction adding emphasis.", translation: "Mas também" },
        { topic: "Context", term: "is-working", definition: "Present Continuous: Shows a temporary current state.", translation: "Está funcionando" },
        { topic: "Context", term: "in-order-to", definition: "Discourse marker showing purpose.", translation: "A fim de" },
        { topic: "Context", term: "don't-give-in", definition: "Phrasal verb meaning to not surrender or yield.", translation: "Não cedermos" },
        { topic: "Context", term: "make", definition: "To form something by putting parts together or combining substances.", translation: "Fazemos" },
        { topic: "Context", term: "will-benefit", definition: "Future Simple prediction of receiving an advantage.", translation: "Se beneficiará" },
        { topic: "Context", term: "as-soon-as", definition: "Discourse marker showing immediate sequence of events.", translation: "Assim que" },
        { topic: "Context", term: "get", definition: "To reach or arrive at a certain state or place.", translation: "Chegar" },
        { topic: "Context", term: "will-look-up", definition: "Phrasal verb in the future simple meaning to search for info.", translation: "Vou pesquisar" },
        { topic: "Context", term: "had-already-decided", definition: "Past Perfect: An action completed before another past action.", translation: "Já tínhamos decidido" },
        { topic: "Context", term: "conscious-consumer", definition: "Buyers who consider the environmental and social impacts of their purchases.", translation: "Consumidores conscientes" },
        { topic: "Context", term: "rip-off", definition: "A product that is not worth the price paid for it.", translation: "Roubo / Exploração" },
        { topic: "Context", term: "manage", definition: "To succeed in doing something, especially something difficult./ To be in charge of.", translation: "Conseguir / Gerenciar" },
        { topic: "Context", term: "profit", definition: "The financial gain made in a transaction.", translation: "Lucro" },

        // --- TOPIC: VERBS (From 2A) ---
        { topic: "Verbs", term: "reduce", definition: "To make smaller or less in amount, degree, or size.", translation: "Reduzir" },
        { topic: "Verbs", term: "recycle", definition: "To convert waste into reusable material.", translation: "Reciclar" },
        { topic: "Verbs", term: "purchase", definition: "The act of buying something.", translation: "Comprar / Adquirir" },
        { topic: "Verbs", term: "reuse", definition: "To use something again or more than once.", translation: "Reutilizar" },

        // --- TOPIC: VOCABULARY (From 2A) ---
        { topic: "Vocabulary", term: "consumer", definition: "A person who purchases goods and services for personal use.", translation: "Consumidor(a)" },
        { topic: "Vocabulary", term: "consumption", definition: "The action of using up a resource or buying goods.", translation: "Consumo" },
        { topic: "Vocabulary", term: "sustainable", definition: "Able to be maintained without exhausting natural resources.", translation: "Sustentável" },
        { topic: "Vocabulary", term: "environment", definition: "The natural world, especially as affected by human activity.", translation: "Meio ambiente" },
        { topic: "Vocabulary", term: "advertisement", definition: "A notice or announcement in a public medium promoting a product.", translation: "Propaganda / Anúncio" },
        { topic: "Vocabulary", term: "brand", definition: "A type of product manufactured by a particular company.", translation: "Marca" },
        { topic: "Vocabulary", term: "conscious", definition: "Having knowledge of and being aware of the impact of one's actions.", translation: "Consciente" },
        { topic: "Vocabulary", term: "impact", definition: "The effect or influence of one person or thing on another.", translation: "Impacto" },
        { topic: "Vocabulary", term: "waste", definition: "Unwanted or unusable materials; the act of using something inefficiently.", translation: "Desperdício / Lixo" },
        { topic: "Vocabulary", term: "product", definition: "An article or substance that is manufactured or refined for sale.", translation: "Produto" },
        { topic: "Vocabulary", term: "habit", definition: "A settled or regular tendency or practice.", translation: "Hábito" },
        { topic: "Vocabulary", term: "choice", definition: "An act of selecting or making a decision when faced with possibilities.", translation: "Escolha" },

        // --- TOPIC: PHRASAL VERBS (From 2A) ---
        { topic: "Phrasal Verbs", term: "bring-up", definition: "To mention a topic during a conversation or debate.", translation: "Mencionar" },
        { topic: "Phrasal Verbs", term: "bring-about", definition: "To cause something to happen.", translation: "Causar / Provocar" },
        { topic: "Phrasal Verbs", term: "bring-back", definition: "To cause someone to remember something from the past.", translation: "Trazer de volta" },
        { topic: "Phrasal Verbs", term: "bring-down", definition: "To cause a price or level to decrease.", translation: "Reduzir / Baixar" },
        { topic: "Phrasal Verbs", term: "bring-in", definition: "To introduce a new law, system, or product.", translation: "Introduzir" },
        { topic: "Phrasal Verbs", term: "bring-on", definition: "To cause something unpleasant to happen.", translation: "Provocar (algo negativo)" },
        { topic: "Phrasal Verbs", term: "give-up", definition: "To stop doing something, especially a habit.", translation: "Desistir de / Parar de" },
        { topic: "Phrasal Verbs", term: "give-back", definition: "To return something to its owner or origin.", translation: "Devolver" },
        { topic: "Phrasal Verbs", term: "give-in", definition: "To finally agree to do something you didn't want to do, like buying during a sale.", translation: "Ceder" },
        { topic: "Phrasal Verbs", term: "give-away", definition: "To give something to someone for free.", translation: "Doar / Dar" },
        { topic: "Phrasal Verbs", term: "give-out", definition: "To give something to many people.", translation: "Distribuir" },
        { topic: "Phrasal Verbs", term: "give-off", definition: "To produce something like a smell, light, or heat.", translation: "Emitir / Exalar" },
        { topic: "Phrasal Verbs", term: "look-for", definition: "To search for something.", translation: "Procurar por" },
        { topic: "Phrasal Verbs", term: "look-after", definition: "To take care of someone or something, like the planet.", translation: "Cuidar de" },
        { topic: "Phrasal Verbs", term: "look-up", definition: "To search for information in a book, on a website, etc.", translation: "Pesquisar informação" },
        { topic: "Phrasal Verbs", term: "look-forward-to", definition: "To feel excited about something that is going to happen.", translation: "Esperar ansiosamente por" },
        { topic: "Phrasal Verbs", term: "look-into", definition: "To examine the facts about a problem or situation.", translation: "Investigar" },
        { topic: "Phrasal Verbs", term: "look-down-on", definition: "To think that someone or something is inferior or not important.", translation: "Menosprezar" },

        // --- TOPIC: GRAMMAR (From 3A) ---
        { topic: "Grammar", term: "although", definition: "Discourse marker used to introduce a statement that makes the main statement surprising.", translation: "Embora" },
        { topic: "Grammar", term: "however", definition: "Discourse marker used to show contrast between two sentences.", translation: "No entanto / Contudo / Mas" },
        { topic: "Grammar", term: "despite", definition: "Discourse marker used to show contrast, followed by a noun or -ing.", translation: "Apesar de" },
        { topic: "Grammar", term: "whereas", definition: "Discourse marker used to contrast two facts or situations.", translation: "Enquanto que / Ao passo que" },
        { topic: "Grammar", term: "because", definition: "Discourse marker used to explain the reason or cause.", translation: "Porque / Pois / Já que" },
        { topic: "Grammar", term: "due-to", definition: "Discourse marker followed by a noun to explain cause.", translation: "Devido a / Por causa de" },
        { topic: "Grammar", term: "moreover", definition: "Discourse marker used to add extra information to an argument.", translation: "Além disso / Ademais" },
        { topic: "Grammar", term: "furthermore", definition: "Discourse marker used to add extra information to an argument.", translation: "Além disso / Ademais" },
        { topic: "Grammar", term: "both-and", definition: "Correlative conjunction used to join two balanced positive ideas.", translation: "Tanto... quanto" },
        { topic: "Grammar", term: "if", definition: "Discourse marker used to introduce a condition.", translation: "Se" },
        { topic: "Grammar", term: "provided-that", definition: "Discourse marker used to set a specific requirement.", translation: "Contanto que / Desde que" },
        { topic: "Grammar", term: "therefore", definition: "Discourse marker used to show the consequence.", translation: "Portanto / Então / Como resultado" },
        { topic: "Grammar", term: "either-or", definition: "Correlative conjunction used to present a choice between two alternatives.", translation: "Ou... ou" },
        { topic: "Grammar", term: "as-if", definition: "Discourse marker used to describe how a situation seems or feels.", translation: "Como se" },
        { topic: "Grammar", term: "in-fact", definition: "Discourse marker used to emphasize a statement or provide more detail.", translation: "De fato / Na verdade" },
        { topic: "Grammar", term: "present-simple", definition: "Grammar tense used for habits, facts, and routines.", translation: "Presente Simples" },
        { topic: "Grammar", term: "present-continuous", definition: "Grammar tense used for actions happening exactly now.", translation: "Presente Contínuo" },
        { topic: "Grammar", term: "present-perfect", definition: "Grammar tense used for past actions with relevance in the present.", translation: "Presente Perfeito" },
        { topic: "Grammar", term: "present-perfect-continuous", definition: "Grammar tense used for actions that started in the past and continue now.", translation: "Presente Perfeito Contínuo" },
        { topic: "Grammar", term: "past-simple", definition: "Grammar tense used for finished actions at a specific time in the past.", translation: "Passado Simples" },
        { topic: "Grammar", term: "past-continuous", definition: "Grammar tense used for actions that were in progress at a past moment.", translation: "Passado Contínuo" },
        { topic: "Grammar", term: "past-perfect", definition: "Grammar tense used for an action that happened before another past action.", translation: "Passado Perfeito" },
        { topic: "Grammar", term: "past-perfect-continuous", definition: "Grammar tense used for long actions before another point in the past.", translation: "Passado Perfeito Contínuo" },
        { topic: "Grammar", term: "future-simple", definition: "Grammar tense used for predictions and spontaneous decisions.", translation: "Futuro Simples" },
        { topic: "Grammar", term: "future-continuous", definition: "Grammar tense used for actions in progress at a specific time in the future.", translation: "Futuro Contínuo" },
        { topic: "Grammar", term: "future-perfect", definition: "Grammar tense used for actions that will be finished before a future point.", translation: "Futuro Perfeito" },
        { topic: "Grammar", term: "conditional", definition: "Grammar tense used to talk about hypothetical or imaginary situations.", translation: "Condicional" }
    ]
});