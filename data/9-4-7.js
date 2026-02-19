/**
 * REACH English - LESSON DATA 9-4-7
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "9-4-7", 
    grade: "9th Grade",       
    bimester: "4",   
    chapter: "7",    
    chapterTitle: "Shop Smart: Your Choices, Your Power", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Talk about shopping habits and consumer rights.<br>• Use common idioms and expressions about shopping.<br>• Distinguish between \"Do\" and \"Make\" in common phrases.<br>• Use verbs that require specific prepositions.<br>• Use the Causative form to describe services you arrange.",
            welcome: "Hello, my friend! I'm Mr. D!<br>Welcome to a very important lesson! We are all consumers, but are we smart consumers? Today, we are going to learn how to make the best choices when we shop. You will learn the words to talk about your rights, how to find a bargain, and how not to pay \"an arm and a leg\" for things! We will also master some tricky verbs and learn how to say you had something done for you. Let's take control of our shopping habits! Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about shopping habits and consumer rights. Use common idioms and expressions about shopping. Distinguish between Do and Make in common phrases. Use verbs that require specific prepositions. Use the Causative form to describe services you arrange.",
                welcome: "TTS: Hello, my friend! I'm Mr. D! Welcome to a very important lesson! We are all consumers, but are we smart consumers? Today, we are going to learn how to make the best choices when we shop. You will learn the words to talk about your rights, how to find a bargain, and how not to pay an arm and a leg for things! We will also master some tricky verbs and learn how to say you had something done for you. Let's take control of our shopping habits! Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of a busy shopping mall background ambience. Celine looks frustrated while holding a phone box, and Albert walks up to her holding a bag.", 
            contextAudio: "audio/9-4-7/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Albert, I'm so upset! I went on a [shopping spree](tooltip:shopping-spree) last weekend and bought this new phone, but it's a total [rip-off](tooltip:rip-off). The camera is broken!" 
                },
                { 
                    speaker: "Albert", 
                    text: "Oh no, Celine! That phone [costs an arm and a leg](tooltip:costs-an-arm-and-a-leg)! Did you do [research](tooltip:do-research) before you bought it? You should always [shop around](tooltip:shop-around) first." 
                },
                { 
                    speaker: "Celine", 
                    text: "I know, I [made a mistake](tooltip:make-a-mistake). I just saw it was [on sale](tooltip:on-sale) and wanted to [buy](tooltip:buy) it. Now I need to go back to the store and [make a complaint](tooltip:make-a-complaint) about it." 
                },
                { 
                    speaker: "Albert", 
                    text: "Definitely. You paid a lot, so you can't just [complain about](tooltip:complain-about) it to me. You need to [have the manager check](tooltip:have-something-done) the device. Do you have the [receipt](tooltip:receipt)?" 
                },
                { 
                    speaker: "Celine", 
                    text: "Yes, I do. I want to [get them to give](tooltip:get-someone-to-do-something) me a full [refund](tooltip:refund). Or at least I need to [have it repaired](tooltip:have-something-done) immediately." 
                },
                { 
                    speaker: "Albert", 
                    text: "Don't worry. Last month, I [had my tablet fixed](tooltip:have-something-done) at this same store. I [got the technician to explain](tooltip:get-someone-to-do-something) the problem, and they were very [rely on](tooltip:rely-on) them." 
                },
                { 
                    speaker: "Celine", 
                    text: "Okay, I'll go there now. I hope I can [make them understand](tooltip:make-someone-understand) the issue. Thanks for [listening to](tooltip:listen-to) me vent, Albert!" 
                },
                { 
                    speaker: "Albert", 
                    text: "No problem! Just [do your best](tooltip:do-your-best) to stay calm. Let's go!" 
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
                    title: "Shopping Vocabulary",
                    audio: "TTS: Consumer. Rights. Habit. Brand. Price. Complaint. Aisle. Bargain. On sale. Discount. Receipt. Refund. To purchase. Fitting room.",
                    items: [
                        { term: "Consumer", trans: "Consumidor(a)" },
                        { term: "Rights", trans: "Direitos" },
                        { term: "Habit", trans: "Hábito" },
                        { term: "Brand", trans: "Marca" },
                        { term: "Price", trans: "Preço" },
                        { term: "Complaint", trans: "Reclamação" },
                        { term: "Aisle", trans: "Corredor (de loja)" },
                        { term: "Bargain", trans: "Pechincha / Bom negócio" },
                        { term: "On sale", trans: "Em promoção / Em oferta" },
                        { term: "Discount", trans: "Desconto" },
                        { term: "Receipt", trans: "Recibo / Nota fiscal" },
                        { term: "Refund", trans: "Reembolso" },
                        { term: "To purchase", trans: "Comprar / Adquirir" },
                        { term: "Fitting room", trans: "Provador" }
                    ]
                },
                {
                    title: "Idioms & Expressions",
                    audio: "TTS: To shop till you drop. A shopping spree. It costs an arm and a leg. It's a rip-off. To fit like a glove. Window shopping. To shop around.",
                    items: [
                        { term: "To shop till you drop", trans: "Comprar até não aguentar mais" },
                        { term: "A shopping spree", trans: "Um ataque de compras / Comprar compulsivamente" },
                        { term: "It costs an arm and a leg", trans: "Custa os olhos da cara / Custa uma fortuna" },
                        { term: "It's a rip-off", trans: "É um roubo / É um assalto (preço muito alto)" },
                        { term: "To fit like a glove", trans: "Servir como uma luva / Cair perfeitamente" },
                        { term: "Window shopping", trans: "Só olhar as vitrines (sem intenção de comprar)" },
                        { term: "To shop around", trans: "Pesquisar preços (em várias lojas)" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Shopping Vocabulary",
                    audio: "TTS: The consumer has the right to return bad products. You should know your rights before buying expensive things. Checking the receipt is a good habit. Do you prefer a specific brand of shoes? The price of this jacket is too high. He made a complaint about the poor service. The pasta is in aisle four. This car was a real bargain! Look! Those video games are on sale. Students get a 10% discount here. Keep your receipt in case you need to return it. If the machine is broken, I want a refund. Click here to purchase the item. Can I try this on? Where is the fitting room?",
                    items: [
                        { term: "Consumer", sent: "The consumer has the right to return bad products.", trans: "<span style='color:#0077b6'>O consumidor tem o direito de devolver produtos ruins.</span>" },
                        { term: "Rights", sent: "You should know your rights before buying expensive things.", trans: "<span style='color:#0077b6'>Você deve conhecer seus direitos antes de comprar coisas caras.</span>" },
                        { term: "Habit", sent: "Checking the receipt is a good habit.", trans: "<span style='color:#0077b6'>Verificar o recibo é um bom hábito.</span>" },
                        { term: "Brand", sent: "Do you prefer a specific brand of shoes?", trans: "<span style='color:#0077b6'>Você prefere uma marca específica de sapatos?</span>" },
                        { term: "Price", sent: "The price of this jacket is too high.", trans: "<span style='color:#0077b6'>O preço desta jaqueta está muito alto.</span>" },
                        { term: "Complaint", sent: "He made a complaint about the poor service.", trans: "<span style='color:#0077b6'>Ele fez uma reclamação sobre o serviço ruim.</span>" },
                        { term: "Aisle", sent: "The pasta is in aisle four.", trans: "<span style='color:#0077b6'>O macarrão está no corredor quatro.</span>" },
                        { term: "Bargain", sent: "This car was a real bargain!", trans: "<span style='color:#0077b6'>Este carro foi uma verdadeira pechincha!</span>" },
                        { term: "On sale", sent: "Look! Those video games are on sale.", trans: "<span style='color:#0077b6'>Olhe! Aqueles videogames estão em promoção.</span>" },
                        { term: "Discount", sent: "Students get a 10% discount here.", trans: "<span style='color:#0077b6'>Estudantes ganham 10% de desconto aqui.</span>" },
                        { term: "Receipt", sent: "Keep your receipt in case you need to return it.", trans: "<span style='color:#0077b6'>Guarde seu recibo caso precise devolvê-lo.</span>" },
                        { term: "Refund", sent: "If the machine is broken, I want a refund.", trans: "<span style='color:#0077b6'>Se a máquina está quebrada, eu quero um reembolso.</span>" },
                        { term: "To purchase", sent: "Click here to purchase the item.", trans: "<span style='color:#0077b6'>Clique aqui para adquirir o item.</span>" },
                        { term: "Fitting room", sent: "Can I try this on? Where is the fitting room?", trans: "<span style='color:#0077b6'>Posso experimentar isto? Onde fica o provador?</span>" }
                    ]
                },
                {
                    title: "Idioms & Expressions",
                    audio: "TTS: We are going to the mall to shop till you drop! She went on a shopping spree after she got paid. That designer bag costs an arm and a leg. Ten dollars for a bottle of water? That's a rip-off! I love these jeans; they fit like a glove. I don't have money, so I'm just window shopping. Don't buy the first one you see; shop around first.",
                    items: [
                        { term: "To shop till you drop", sent: "We are going to the mall to shop till you drop!", trans: "<span style='color:#0077b6'>Nós vamos ao shopping para comprar até não aguentar mais!</span>" },
                        { term: "A shopping spree", sent: "She went on a shopping spree after she got paid.", trans: "<span style='color:#0077b6'>Ela teve um ataque de compras depois que recebeu o pagamento.</span>" },
                        { term: "It costs an arm and a leg", sent: "That designer bag costs an arm and a leg.", trans: "<span style='color:#0077b6'>Aquela bolsa de marca custa os olhos da cara.</span>" },
                        { term: "It's a rip-off", sent: "$10 for a bottle of water? That's a rip-off!", trans: "<span style='color:#0077b6'>$10 por uma garrafa de água? Isso é um roubo!</span>" },
                        { term: "To fit like a glove", sent: "I love these jeans; they fit like a glove.", trans: "<span style='color:#0077b6'>Eu amo esse jeans; ele serve como uma luva.</span>" },
                        { term: "Window shopping", sent: "I don't have money today, so I'm just window shopping.", trans: "<span style='color:#0077b6'>Eu não tenho dinheiro hoje, então estou só olhando as vitrines.</span>" },
                        { term: "To shop around", sent: "Don't buy the first one you see; shop around first.", trans: "<span style='color:#0077b6'>Não compre o primeiro que você vir; pesquise preços primeiro.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (Expanded to 24 Questions)
            drills: [
                // SHOPPING VOCABULARY (1-12)
                {
                    type: "mcq",
                    q: "Choose the correct definition for \"Consumer\":",
                    options: [
                        { t: "A person who sells things.", c: false },
                        { t: "A person who buys goods or services.", c: true },
                        { t: "A manager of a store.", c: false },
                        { t: "A product on a shelf.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: \"Consumers have _______ that protect them.\"",
                    options: [
                        { t: "prices", c: false },
                        { t: "rights", c: true },
                        { t: "aisles", c: false },
                        { t: "sales", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the best translation for \"Habit\":",
                    options: [
                        { t: "Hábito", c: true },
                        { t: "Roupa", c: false },
                        { t: "Loja", c: false },
                        { t: "Preço", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: \"Nike and Adidas are famous _______.\"",
                    options: [
                        { t: "receipts", c: false },
                        { t: "brands", c: true },
                        { t: "refunds", c: false },
                        { t: "bargains", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What do you look at to know how much something costs?",
                    options: [
                        { t: "The receipt", c: false },
                        { t: "The brand", c: false },
                        { t: "The price", c: true },
                        { t: "The aisle", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If you are unhappy with a product, you make a _______.",
                    options: [
                        { t: "bargain", c: false },
                        { t: "complaint", c: true },
                        { t: "discount", c: false },
                        { t: "purchase", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: \"Excuse me, which _______ is the milk in?\"",
                    options: [
                        { t: "fitting room", c: false },
                        { t: "aisle", c: true },
                        { t: "receipt", c: false },
                        { t: "habit", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If you buy something valuable for a very low price, it is a...",
                    options: [
                        { t: "rip-off", c: false },
                        { t: "bargain", c: true },
                        { t: "refund", c: false },
                        { t: "brand", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When a store reduces prices for a special event, the items are...",
                    options: [
                        { t: "on sale", c: true },
                        { t: "expensive", c: false },
                        { t: "broken", c: false },
                        { t: "full price", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: \"This coupon gives you a $5 _______.\"",
                    options: [
                        { t: "refund", c: false },
                        { t: "discount", c: true },
                        { t: "price", c: false },
                        { t: "habit", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What paper proves you bought something?",
                    options: [
                        { t: "A recipe", c: false },
                        { t: "A receipt", c: true },
                        { t: "A refund", c: false },
                        { t: "A list", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: \"The phone doesn't work. I want my money back. I want a _______.\"",
                    options: [
                        { t: "receipt", c: false },
                        { t: "refund", c: true },
                        { t: "purchase", c: false },
                        { t: "discount", c: false }
                    ]
                },

                // IDIOMS & EXPRESSIONS (13-24)
                {
                    type: "mcq",
                    q: "Another word for \"to buy\" is to:",
                    options: [
                        { t: "to sell", c: false },
                        { t: "to purchase", c: true },
                        { t: "to refund", c: false },
                        { t: "to complain", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Where do you try on clothes?",
                    options: [
                        { t: "In the aisle", c: false },
                        { t: "In the fitting room", c: true },
                        { t: "At the counter", c: false },
                        { t: "In the window", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "\"To shop for a very long time until you are tired\" means:",
                    options: [
                        { t: "To drop your shopping bags.", c: false },
                        { t: "To shop till you drop.", c: true },
                        { t: "To stop shopping immediately.", c: false },
                        { t: "To shop only for necessities.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: \"He spent all his money on a huge _______.\"",
                    options: [
                        { t: "shopping spree", c: true },
                        { t: "window shopping", c: false },
                        { t: "fitting room", c: false },
                        { t: "consumer", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If something is very expensive, you say:",
                    options: [
                        { t: "It's a bargain.", c: false },
                        { t: "It costs an arm and a leg.", c: true },
                        { t: "It fits like a glove.", c: false },
                        { t: "It's on sale.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: \"That sandwich was tiny and cost $20! It was a _______!\"",
                    options: [
                        { t: "bargain", c: false },
                        { t: "rip-off", c: true },
                        { t: "refund", c: false },
                        { t: "discount", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If a dress fits perfectly, you say:",
                    options: [
                        { t: "It fits like a glove.", c: true },
                        { t: "It costs an arm and a leg.", c: false },
                        { t: "It's a rip-off.", c: false },
                        { t: "It's window shopping.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Looking at products without buying them is called...",
                    options: [
                        { t: "shopping spree", c: false },
                        { t: "window shopping", c: true },
                        { t: "shopping around", c: false },
                        { t: "grocery shopping", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: \"Before buying a car, you should _______ to find the best deal.\"",
                    options: [
                        { t: "shop till you drop", c: false },
                        { t: "shop around", c: true },
                        { t: "fit like a glove", c: false },
                        { t: "rip off", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which of these is NOT a shopping-related idiom?",
                    options: [
                        { t: "A shopping spree", c: false },
                        { t: "It costs an arm and a leg", c: false },
                        { t: "To turn over a new leaf", c: true }, // Distractor related to another idiom
                        { t: "To shop around", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If a discount is applied, the price of an item is:",
                    options: [
                        { t: "Increased", c: false },
                        { t: "Reduced", c: true },
                        { t: "Fixed", c: false },
                        { t: "Ignored", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which verb describes the action of going to different shops to compare prices?",
                    options: [
                        { t: "To purchase", c: false },
                        { t: "To buy", c: false },
                        { t: "To shop around", c: true },
                        { t: "To sell", c: false }
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
                    title: "Grammar Point 1: Do vs. Make",
                    audio: "TTS: These two verbs are often confused. Generally, we use DO for actions and repetitive tasks, and MAKE for creating or producing something. For example: Do business. Make a choice.",
                    explanation: "These two verbs are often confused. Generally, we use <b>DO</b> for actions, obligations, and repetitive tasks (it doesn't produce a new physical object). We use <b>MAKE</b> for creating, producing, or constructing something (it often results in a new object or a reaction).<br><br><span style='color:#0077b6; font-style:italic;'>(Estes dois verbos são frequentemente confundidos. Geralmente, usamos DO para ações e tarefas repetitivas, e MAKE para criar ou produzir algo.)</span>",
                    samples: [
                        { en: "<b>DO:</b> do business, do homework, do the dishes, do exercise, do research, do the shopping, do damage, do a good job, do a favor, do your best.", pt: "<span style='color:#0077b6'>fazer negócios, fazer lição de casa, lavar a louça, fazer exercício, fazer pesquisa, fazer as compras, causar dano, fazer um bom trabalho, fazer um favor, fazer o seu melhor.</span>" },
                        { en: "<b>MAKE:</b> make a choice, make a complaint, make a decision, make friends, make money, make a mistake, make a phone call, make a plan, make a promise, make sure.", pt: "<span style='color:#0077b6'>fazer uma escolha, fazer uma reclamação, tomar uma decisão, fazer amigos, ganhar dinheiro, cometer um erro, fazer uma ligação, fazer um plano, fazer uma promessa, ter certeza.</span>" }
                    ]
                },
                {
                    title: "Grammar Point 2: Verbs with Prepositions",
                    audio: "TTS: Some verbs always need a specific preposition before an object to be complete. You need to memorize them as a set phrase. For example: Agree with. Believe in. Look for. Rely on. Think about. Wait for.",
                    explanation: "Certain verbs in English always need a specific preposition before an object to be complete. You need to memorize them as a set phrase.<br><br><span style='color:#0077b6; font-style:italic;'>(Alguns verbos em inglês sempre precisam de uma preposição específica antes de um objeto para estarem completos. Você precisa memorizá-los como uma frase feita.)</span>",
                    samples: [
                        { en: "<b>agree with</b> (concordar com)", pt: "<span style='color:#0077b6'>I agree with your idea.</span>" },
                        { en: "<b>apologize for</b> (pedir desculpas por)", pt: "<span style='color:#0077b6'>He apologized for being late.</span>" },
                        { en: "<b>ask for</b> (pedir por)", pt: "<span style='color:#0077b6'>She asked for the bill.</span>" },
                        { en: "<b>believe in</b> (acreditar em)", pt: "<span style='color:#0077b6'>Do you believe in aliens?</span>" },
                        { en: "<b>complain about</b> (reclamar de)", pt: "<span style='color:#0077b6'>Stop complaining about the weather!</span>" },
                        { en: "<b>rely on</b> (contar com / depender de)", pt: "<span style='color:#0077b6'>You can rely on us.</span>" },
                        { en: "<b>look for</b> (procurar por)", pt: "<span style='color:#0077b6'>I am looking for my glasses.</span>" }
                    ]
                },
                {
                    title: "Grammar Point 3: Causative Passive (Have/Get)",
                    audio: "TTS: We use this structure when we arrange for someone else to do a service for us. The focus is on the result. Structure: Subject plus Have or Get, plus Object, plus Past Participle. For example: I had my watch repaired. We are getting the roof repaired.",
                    explanation: "We use this structure when we arrange for someone else to do a service for us. The focus is on the result.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos essa estrutura quando arranjamos para outra pessoa fazer um serviço para nós. O foco é no resultado.)</span>",
                    samples: [
                        { en: "I <b>have</b> my car <b>washed</b> every week.", pt: "<span style='color:#0077b6'>Eu mando lavar meu carro toda semana.</span>" },
                        { en: "She <b>got</b> her hair <b>cut</b> yesterday.", pt: "<span style='color:#0077b6'>Ela cortou o cabelo ontem (alguém cortou para ela).</span>" }
                    ]
                },
                {
                    title: "Grammar Point 4: Causative Active (Have/Get)",
                    audio: "TTS: Used when we mention the person who performs the action. Have means instruction or request. Get means persuasion. Structure: Have or Get, plus Person, plus Base Verb or TO plus Verb. For example: I had the cleaner clean my house. I got my brother to help me.",
                    explanation: "Used when we mention the person (agent) who performs the action. <b>Have</b> = instruction/request. <b>Get</b> = persuasion.<br><br><span style='color:#0077b6; font-style:italic;'>(Usado quando mencionamos a pessoa que faz a ação. Have = instrução. Get = persuasão.)</span>",
                    samples: [
                        { en: "I <b>have</b> the cleaner <b>clean</b> my house.", pt: "<span style='color:#0077b6'>Eu peço para o faxineiro limpar minha casa.</span>" },
                        { en: "I am going to <b>get</b> my brother <b>to help</b> me.", pt: "<span style='color:#0077b6'>Eu vou convencer meu irmão a me ajudar.</span>" }
                    ]
                }
            ],

            // 3B: Natural Examples (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Do vs. Make",
                    audio: "audio/9-4-7/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Albert, did you do the dishes yet?", 
                            pt: "<span style='color:#0077b6'>Albert, você já lavou a louça?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Not yet. I was busy trying to make a plan for our school project.", 
                            pt: "<span style='color:#0077b6'>Ainda não. Eu estava ocupado tentando fazer um plano para nosso projeto escolar.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Verbs with Prepositions",
                    audio: "audio/9-4-7/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Mrs. Canales", 
                            text: "Celine, you must concentrate on your studies if you want to pass.", 
                            pt: "<span style='color:#0077b6'>Celine, você deve se concentrar nos seus estudos se quiser passar.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "I know. I don't want to depend on luck during the exam.", 
                            pt: "<span style='color:#0077b6'>Eu sei. Eu não quero depender da sorte durante a prova.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Causative Passive (Service)",
                    audio: "audio/9-4-7/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Nice phone! Did you fix the screen yourself?", 
                            pt: "<span style='color:#0077b6'>Celular legal! Você consertou a tela sozinho?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, I had it repaired at the mall. It was cheap!", 
                            pt: "<span style='color:#0077b6'>Não, eu mandei consertar no shopping. Foi barato!</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 4: Causative Active (Agent)",
                    audio: "audio/9-4-7/step3_dialogue4.mp3",
                    lines: [
                        { 
                            speaker: "Mrs. Canales", 
                            text: "The classroom looks clean! Did you clean it?", 
                            pt: "<span style='color:#0077b6'>A sala de aula parece limpa! Você limpou?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I got my classmates to help me clean it up after the party.", 
                            pt: "<span style='color:#0077b6'>Eu convenci meus colegas a me ajudarem a limpar depois da festa.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ (Expanded to 24 Questions)
            grammarDrills: [
                // DO vs. MAKE (1-8)
                {
                    type: "mcq",
                    q: "Do vs. Make: 'Please don't _______ a noise, the baby is sleeping.'",
                    options: [
                        { t: "do", c: false },
                        { t: "make", c: true },
                        { t: "doing", c: false },
                        { t: "making", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Do vs. Make: 'Our company wants to _______ business with you.'",
                    options: [
                        { t: "make", c: false },
                        { t: "do", c: true },
                        { t: "making", c: false },
                        { t: "doing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Do vs. Make: 'It's hard to _______ a decision when you have so many options.'",
                    options: [
                        { t: "do", c: false },
                        { t: "make", c: true },
                        { t: "doing", c: false },
                        { t: "making", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Do vs. Make: 'Can you _______ me a favor?'",
                    options: [
                        { t: "make", c: false },
                        { t: "do", c: true },
                        { t: "making", c: false },
                        { t: "doing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Do vs. Make: 'I need to _______ some research before I buy this laptop.'",
                    options: [
                        { t: "make", c: false },
                        { t: "do", c: true },
                        { t: "making", c: false },
                        { t: "doing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Do vs. Make: 'It's a pleasure to _______ business with you.'",
                    options: [
                        { t: "make", c: false },
                        { t: "do", c: true },
                        { t: "making", c: false },
                        { t: "doing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Do vs. Make: 'You need to _______ a choice now.'",
                    options: [
                        { t: "do", c: false },
                        { t: "make", c: true },
                        { t: "doing", c: false },
                        { t: "making", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Do vs. Make: 'He finds it easy to _______ friends.'",
                    options: [
                        { t: "do", c: false },
                        { t: "make", c: true },
                        { t: "doing", c: false },
                        { t: "making", c: false }
                    ]
                },

                // VERBS WITH PREPOSITIONS (9-16)
                {
                    type: "mcq",
                    q: "Verbs with Prepositions: 'She spends a lot of money _______ clothes.'",
                    options: [
                        { t: "on", c: true },
                        { t: "for", c: false },
                        { t: "in", c: false },
                        { t: "at", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Verbs with Prepositions: 'I don't believe _______ aliens.'",
                    options: [
                        { t: "on", c: false },
                        { t: "at", c: false },
                        { t: "in", c: true },
                        { t: "with", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Verbs with Prepositions: 'This bag belongs _______ me.'",
                    options: [
                        { t: "for", c: false },
                        { t: "to", c: true },
                        { t: "with", c: false },
                        { t: "on", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Verbs with Prepositions: 'He apologized _______ the mistake.'",
                    options: [
                        { t: "for", c: true },
                        { t: "to", c: false },
                        { t: "about", c: false },
                        { t: "on", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Verbs with Prepositions: 'Stop complaining _______ the weather!'",
                    options: [
                        { t: "for", c: false },
                        { t: "about", c: true },
                        { t: "on", c: false },
                        { t: "with", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Verbs with Prepositions: 'I need to _______ on my work.'",
                    options: [
                        { t: "concentrate", c: true },
                        { t: "complain", c: false },
                        { t: "dream", c: false },
                        { t: "laugh", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Verbs with Prepositions: 'It depends _______ the weather.'",
                    options: [
                        { t: "in", c: false },
                        { t: "on", c: true },
                        { t: "about", c: false },
                        { t: "with", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Verbs with Prepositions: 'I dreamt _______ flying last night.'",
                    options: [
                        { t: "on", c: false },
                        { t: "in", c: false },
                        { t: "about", c: true },
                        { t: "with", c: false }
                    ]
                },

                // CAUSATIVE (17-24)
                {
                    type: "mcq",
                    q: "Causative Passive: 'I need to have my eyes _______.'",
                    options: [
                        { t: "test", c: false },
                        { t: "testing", c: false },
                        { t: "tested", c: true },
                        { t: "to test", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Causative Passive: 'We are getting the roof _______ right now.'",
                    options: [
                        { t: "repair", c: false },
                        { t: "repaired", c: true },
                        { t: "to repair", c: false },
                        { t: "repairing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Causative Passive: 'She had her hair _______ yesterday.'",
                    options: [
                        { t: "cutted", c: false },
                        { t: "cut", c: true },
                        { t: "to cut", c: false },
                        { t: "cutting", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Causative Passive: 'Where did you get your car _______?'",
                    options: [
                        { t: "wash", c: false },
                        { t: "washed", c: true },
                        { t: "to wash", c: false },
                        { t: "washing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Causative Active (Have): 'The teacher had the students _______ an essay.'",
                    options: [
                        { t: "write", c: true },
                        { t: "to write", c: false },
                        { t: "writing", c: false },
                        { t: "wrote", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Causative Active (Get): 'I'll get my brother _______ me with the bags.'",
                    options: [
                        { t: "help", c: false },
                        { t: "to help", c: true },
                        { t: "helping", c: false },
                        { t: "helped", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Causative Active (Have): 'I had the mechanic _______ the brakes.'",
                    options: [
                        { t: "check", c: true },
                        { t: "to check", c: false },
                        { t: "checking", c: false },
                        { t: "checked", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Causative Active (Get): 'We finally got the manager _______ us a refund.'",
                    options: [
                        { t: "give", c: false },
                        { t: "to give", c: true },
                        { t: "giving", c: false },
                        { t: "gave", c: false }
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
                    text: "I need to make a complaint about this phone.<br><small style='color:#0077b6'>(Eu preciso fazer uma reclamação sobre este telefone.)</small>", 
                    audio: "TTS: I need to make a complaint about this phone.", 
                    arrow: "↘" 
                },
                { 
                    text: "Did you do your research before buying it?<br><small style='color:#0077b6'>(Você fez sua pesquisa antes de comprá-lo?)</small>", 
                    audio: "TTS: Did you do your research before buying it?", 
                    arrow: "↗" 
                },
                { 
                    text: "That designer bag costs an arm and a leg!<br><small style='color:#0077b6'>(Aquela bolsa de marca custa os olhos da cara!)</small>", 
                    audio: "TTS: That designer bag costs an arm and a leg!", 
                    arrow: "↘" 
                },
                { 
                    text: "She had her wedding dress made by a professional.<br><small style='color:#0077b6'>(Ela mandou fazer o vestido de noiva por um profissional.)</small>", 
                    audio: "TTS: She had her wedding dress made by a professional.", 
                    arrow: "↘" 
                },
                { 
                    text: "Can you get the manager to help us?<br><small style='color:#0077b6'>(Você consegue fazer com que o gerente nos ajude?)</small>", 
                    audio: "TTS: Can you get the manager to help us?", 
                    arrow: "↗" 
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
                    instruction: "Listen to Albert talking about his weekend. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre o fim de semana dele. Digite as palavras que faltam.)</small>",
                    audio: "TTS: I went to the mall yesterday. I didn't want to spend much money, so I was just window shopping. But then I saw a great pair of sneakers on sale! They were a real bargain. I tried them on in the fitting room, and they fit like a glove. I had to buy them!",
                    text: "I went to the mall yesterday. I didn't want to spend much money, so I was just [window] shopping. But then I saw a great pair of sneakers [on] sale! They were a real [bargain]. I tried them on in the [fitting] room, and they fit like a [glove]. I had to buy them!"
                },
                // Drill 2: Listen and Complete (Dropdown) - MP3
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation between Celine and the Clerk about a return. Choose the correct option.<br><small style='color:#0077b6'>(Ouça a conversa entre Celine e o balconista sobre uma devolução. Escolha a opção correta.)</small>",
                    audio: "audio/9-4-7/step5_drill2.mp3",
                    questions: [
                        { q: "Clerk: Do you have the [receipt | recipe | refund]?", a: "receipt" },
                        { q: "Celine: No, I just changed my mind. I'd like a [discount | refund | brand].", a: "refund" }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the best answer.<br><small style='color:#0077b6'>(Ouça a pergunta e escolha a melhor resposta.)</small>",
                    audio: "TTS: My car is making a strange noise. What should I do?",
                    options: [
                        { t: "You should do your homework.", c: false },
                        { t: "You should make a cake.", c: false },
                        { t: "You should have it checked by a mechanic.", c: true },
                        { t: "You should get it to clean.", c: false }
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
                    title: "Narration: The Smart Consumer",
                    audio: "TTS: Sarah is a very careful shopper. She never buys things on impulse. Last week, her washing machine broke. Instead of just buying the first one she saw, she did a lot of research online. She compared prices and brands. She found a great model that was on sale at a local store. However, the store didn't offer delivery. Sarah didn't have a big car, so she had the machine delivered by a delivery service. It cost a little extra, but it was worth it. She knows how to make good decisions. || audio/9-4-7/p6_text1.mp3",
                    body: "Sarah is a very careful shopper. She never buys things on impulse. Last week, her washing machine broke. Instead of just buying the first one she saw, she did a lot of research online. She compared prices and brands. She found a great model that was on sale at a local store. However, the store didn't offer delivery. Sarah didn't have a big car, so she had the machine delivered by a delivery service. It cost a little extra, but it was worth it. She knows how to make good decisions.",
                    questions: [
                        { 
                            q: "What did Sarah do before buying the machine?", 
                            options: [ 
                                {t: "She went on a shopping spree.", c: false}, 
                                {t: "She did research.", c: true}, 
                                {t: "She made a complaint.", c: false},
                                {t: "She made a mistake.", c: false}
                            ] 
                        },
                        { 
                            q: "Why did she buy that specific model?", 
                            options: [ 
                                {t: "It cost an arm and a leg.", c: false}, 
                                {t: "It was a rip-off.", c: false}, 
                                {t: "It was on sale.", c: true},
                                {t: "It was a bad brand.", c: false}
                            ] 
                        },
                        { 
                            q: "How did she get the machine home?", 
                            options: [ 
                                {t: "She carried it herself.", c: false}, 
                                {t: "She had it delivered.", c: true}, 
                                {t: "She got her friend to carry it.", c: false},
                                {t: "She didn't buy it.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: The Rip-off",
                    audio: "audio/9-4-7/p6_text2.mp3",
                    body: "<b>Tom:</b> Hey, look at this watch! It's only $50.<br><b>Jerry:</b> That brand usually costs an arm and a leg. Are you sure it's real?<br><b>Tom:</b> I don't know. The seller said it's a bargain.<br><b>Jerry:</b> I think it's a rip-off. It looks fake. You should shop around before you waste your money.<br><b>Tom:</b> Maybe you're right. I don't want to make a mistake.<br><b>Jerry:</b> Exactly. Let's go to the official store and compare the prices.<br><b>Tom:</b> Good idea. I don't want to have to ask for a refund later.",
                    questions: [
                        { 
                            q: "What does Jerry think about the watch?", 
                            options: [ 
                                {t: "It fits like a glove.", c: false}, 
                                {t: "It is a bargain.", c: false}, 
                                {t: "It is a rip-off.", c: true},
                                {t: "It is authentic.", c: false}
                            ] 
                        },
                        { 
                            q: "What advice does Jerry give Tom?", 
                            options: [ 
                                {t: "To shop around.", c: true}, 
                                {t: "To shop till he drops.", c: false}, 
                                {t: "To make a complaint.", c: false},
                                {t: "To buy it immediately.", c: false}
                            ] 
                        },
                        { 
                            q: "Why does Tom decide not to buy it yet?", 
                            options: [ 
                                {t: "He doesn't have money.", c: false}, 
                                {t: "He doesn't want to make a mistake.", c: true}, 
                                {t: "He wants to buy a phone instead.", c: false},
                                {t: "He hates watches.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: The New Mall",
                    audio: "TTS: The new shopping mall in the city center is amazing. It has five floors and hundreds of aisles to explore. On the first floor, there are expensive luxury brands. I usually just go window shopping there because everything costs an arm and a leg. The second floor is better; there are often discounts and things on sale. There is also a service center where you can have your phone repaired or get your watch fixed. It is a very convenient place for consumers. || audio/9-4-7/p6_text3.mp3",
                    body: "The new shopping mall in the city center is amazing. It has five floors and hundreds of aisles to explore. On the first floor, there are expensive luxury brands. I usually just go window shopping there because everything costs an arm and a leg. The second floor is better; there are often discounts and things on sale. There is also a service center where you can have your phone repaired or get your watch fixed. It is a very convenient place for consumers.",
                    questions: [
                        { 
                            q: "What does the narrator do on the first floor?", 
                            options: [ 
                                {t: "He goes on a shopping spree.", c: false}, 
                                {t: "He goes window shopping.", c: true}, 
                                {t: "He gets a refund.", c: false},
                                {t: "He buys luxury items.", c: false}
                            ] 
                        },
                        { 
                            q: "Why does he like the second floor?", 
                            options: [ 
                                {t: "It has fitting rooms.", c: false}, 
                                {t: "It has expensive brands.", c: false}, 
                                {t: "It often has discounts.", c: true},
                                {t: "It has a food court.", c: false}
                            ] 
                        },
                        { 
                            q: "What can you do at the service center?", 
                            options: [ 
                                {t: "Have things repaired.", c: true}, 
                                {t: "Buy groceries.", c: false}, 
                                {t: "Do homework.", c: false},
                                {t: "Make friends.", c: false}
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
                // Drill 1: Matching (Idioms)
                {
                    type: "matching",
                    instruction: "Match the idiom to its definition.<br><small style='color:#0077b6'>(Combine a expressão idiomática com sua definição.)</small>",
                    pairs: [
                        { left: "To shop till you drop", right: "To shop until you are exhausted", val: "1" },
                        { left: "It costs an arm and a leg", right: "It is very expensive", val: "2" },
                        { left: "To fit like a glove", right: "To fit perfectly", val: "3" },
                        { left: "A rip-off", right: "A bad deal; too expensive", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Causative & Collocations)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>",
                    sentence: "repaired / I / car / my / had / .",
                    correct: "I had my car repaired ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "get / Did / you / him / help / to / ?",
                    correct: "Did you get him to help ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "complaint / a / make / to / I / want / .",
                    correct: "I want to make a complaint ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "research / always / Do / buying / before / .",
                    correct: "Do research before buying ."
                },
                // Drill 3: Prepositions (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Complete the sentences with the correct preposition.<br><small style='color:#0077b6'>(Complete as frases com a preposição correta.)</small>",
                    questions: [
                        { q: "She spends too much money [on | for | in | about] shoes.", a: "on" },
                        { q: "I need to ask [for | on | in | about] a receipt.", a: "for" },
                        { q: "We don't believe [in | for | on | about] those rumors.", a: "in" },
                        { q: "He complained [about | for | on | in] the cold soup.", a: "about" }
                    ]
                },
                // Drill 4: True or False
                {
                    type: "true-false",
                    instruction: "Read the sentence and decide if it is logical.<br><small style='color:#0077b6'>(Leia a frase e decida se é lógica.)</small>",
                    questions: [
                        { text: "If you want to save money, you should buy things that cost an arm and a leg.", correct: "false" },
                        { text: "\"Do your best\" means you should try very hard.", correct: "true" },
                        { text: "We use \"make\" for homework and \"do\" for cakes.", correct: "false" },
                        { text: "If you \"have your house painted,\" you paint it yourself.", correct: "false" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Now it's your turn! Write a short text (3-4 sentences) about a time you bought something. Answer these questions in your text:<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Agora é sua vez! Escreva um texto curto (3-4 frases) sobre uma vez que você comprou algo. Responda a estas perguntas no seu texto:</span></small>",
            example: "\"Last month, I bought a new suit for a wedding. It was on sale, so it didn't cost an arm and a leg. However, the pants were too long. I had them shortened by a tailor. Now they fit like a glove!\"",
            prompts: [
                "Did you do research? <br><small><span style='color:#0077b6'>(Você pesquisou?)</span></small>",
                "Was it on sale or a rip-off? <br><small><span style='color:#0077b6'>(Estava em promoção ou era um roubo?)</span></small>",
                "Did you have to get it fixed or adjusted? <br><small><span style='color:#0077b6'>(Você teve que mandar consertar ou ajustar?)</span></small>",
                "Use at least one 'Causative' sentence (have/get something done) and one idiom. <br><small><span style='color:#0077b6'>(Use pelo menos uma frase Causativa e um idioma.)</span></small>"
            ]
        },
        
        // ======================================================
        // STEP 9: FLASHCARDS - CORRECTED CHAPTER 7
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Topic 1: Vocabulary & Idioms ---
                { term: "Consumer", definition: "A person who buys goods or services.", defTrans: "Consumidor(a)", example: "The consumer has the right to return bad products.", audioFront: "TTS: Consumer", audioBack: "TTS: The consumer has the right to return bad products." },
                { term: "Rights", definition: "Moral or legal entitlements to have or do something.", defTrans: "Direitos", example: "You should know your rights before buying expensive things.", audioFront: "TTS: Rights", audioBack: "TTS: You should know your rights before buying expensive things." },
                { term: "Habit", definition: "A settled or regular tendency or practice.", defTrans: "Hábito", example: "Checking the receipt is a good habit.", audioFront: "TTS: Habit", audioBack: "TTS: Checking the receipt is a good habit." },
                { term: "Brand", definition: "A type of product made by a particular company.", defTrans: "Marca", example: "Do you prefer a specific brand of shoes?", audioFront: "TTS: Brand", audioBack: "TTS: Do you prefer a specific brand of shoes?" },
                { term: "Price", definition: "The amount of money required for payment.", defTrans: "Preço", example: "The price of this jacket is too high.", audioFront: "TTS: Price", audioBack: "TTS: The price of this jacket is too high." },
                { term: "Complaint", definition: "A statement that a situation is unsatisfactory.", defTrans: "Reclamação", example: "He made a complaint about the poor service.", audioFront: "TTS: Complaint", audioBack: "TTS: He made a complaint about the poor service." },
                { term: "Aisle", definition: "A passage between shelves in a supermarket.", defTrans: "Corredor (de loja)", example: "The pasta is in aisle four.", audioFront: "TTS: Aisle", audioBack: "TTS: The pasta is in aisle four." },
                { term: "Bargain", definition: "A thing bought for a cheaper price than usual.", defTrans: "Pechincha / Bom negócio", example: "This car was a real bargain!", audioFront: "TTS: Bargain", audioBack: "TTS: This car was a real bargain!" },
                { term: "On sale", definition: "Offered at a reduced price.", defTrans: "Em promoção / Em oferta", example: "Look! Those video games are on sale.", audioFront: "TTS: On sale", audioBack: "TTS: Look! Those video games are on sale." },
                { term: "Discount", definition: "A deduction from the usual cost of something.", defTrans: "Desconto", example: "Students get a 10% discount here.", audioFront: "TTS: Discount", audioBack: "TTS: Students get a 10% discount here." },
                { term: "Receipt", definition: "A statement acknowledging payment.", defTrans: "Recibo / Nota fiscal", example: "Keep your receipt in case you need to return it.", audioFront: "TTS: Receipt", audioBack: "TTS: Keep your receipt in case you need to return it." },
                { term: "Refund", definition: "A repayment of a sum of money.", defTrans: "Reembolso", example: "If the machine is broken, I want a refund.", audioFront: "TTS: Refund", audioBack: "TTS: If the machine is broken, I want a refund." },
                { term: "To purchase", definition: "To acquire something by paying for it; to buy.", defTrans: "Comprar / Adquirir", example: "Click here to purchase the item.", audioFront: "TTS: To purchase", audioBack: "TTS: Click here to purchase the item." },
                { term: "Fitting room", definition: "A room in a shop where you can try on clothes.", defTrans: "Provador", example: "Where is the fitting room?", audioFront: "TTS: Fitting room", audioBack: "TTS: Where is the fitting room?" },
                { term: "To shop till you drop", definition: "To shop for a very long time, until exhausted.", defTrans: "Comprar até não aguentar mais", example: "We are going to shop till you drop!", audioFront: "TTS: To shop till you drop", audioBack: "TTS: We are going to shop till you drop!" },
                { term: "A shopping spree", definition: "A short period of buying a lot of things.", defTrans: "Um ataque de compras", example: "She went on a shopping spree.", audioFront: "TTS: A shopping spree", audioBack: "TTS: She went on a shopping spree." },
                { term: "It costs an arm and a leg", definition: "To be very expensive.", defTrans: "Custa os olhos da cara", example: "That designer bag costs an arm and a leg.", audioFront: "TTS: It costs an arm and a leg", audioBack: "TTS: That designer bag costs an arm and a leg." },
                { term: "It's a rip-off", definition: "Something that is far too expensive; a fraud.", defTrans: "É um roubo", example: "$10 for water? That's a rip-off!", audioFront: "TTS: It's a rip-off", audioBack: "TTS: Ten dollars for water? That's a rip-off!" },
                { term: "To fit like a glove", definition: "To be the perfect size and shape.", defTrans: "Servir como uma luva", example: "These jeans fit like a glove.", audioFront: "TTS: To fit like a glove", audioBack: "TTS: These jeans fit like a glove." },
                { term: "Window shopping", definition: "Looking at goods without intending to buy.", defTrans: "Só olhar as vitrines", example: "I'm just window shopping.", audioFront: "TTS: Window shopping", audioBack: "TTS: I'm just window shopping." },
                { term: "To shop around", definition: "To compare prices before buying something.", defTrans: "Pesquisar preços", example: "You should shop around first.", audioFront: "TTS: To shop around", audioBack: "TTS: You should shop around first." },

                // --- Topic 2: Grammar - Do vs. Make ---
                { term: "Do business", definition: "To engage in commercial activity.", defTrans: "Fazer negócios", example: "It's a pleasure to do business with you.", audioFront: "TTS: Do business", audioBack: "TTS: It's a pleasure to do business with you." },
                { term: "Do a favor", definition: "To do something helpful for someone.", defTrans: "Fazer um favor", example: "Can you do me a favor?", audioFront: "TTS: Do a favor", audioBack: "TTS: Can you do me a favor?" },
                { term: "Do your best", definition: "To try as hard as possible.", defTrans: "Fazer o seu melhor", example: "Just relax and do your best.", audioFront: "TTS: Do your best", audioBack: "TTS: Just relax and do your best." },
                { term: "Do homework", definition: "To do schoolwork at home.", defTrans: "Fazer lição de casa", example: "I have to do my homework now.", audioFront: "TTS: Do homework", audioBack: "TTS: I have to do my homework now." },
                { term: "Do the dishes", definition: "To wash plates, cups, and cutlery.", defTrans: "Lavar a louça", example: "I'll cook if you do the dishes.", audioFront: "TTS: Do the dishes", audioBack: "TTS: I'll cook if you do the dishes." },
                { term: "Do exercise", definition: "To engage in physical activity.", defTrans: "Fazer exercício", example: "You should do exercise to stay healthy.", audioFront: "TTS: Do exercise", audioBack: "TTS: You should do exercise to stay healthy." },
                { term: "Do research", definition: "To investigate materials and sources.", defTrans: "Fazer pesquisa", example: "I need to do research on this product.", audioFront: "TTS: Do research", audioBack: "TTS: I need to do research on this product." },
                { term: "Do the shopping", definition: "To buy regular household items like food.", defTrans: "Fazer as compras (rotina)", example: "My mom does the shopping on Saturdays.", audioFront: "TTS: Do the shopping", audioBack: "TTS: My mom does the shopping on Saturdays." },
                { term: "Make a choice", definition: "To select from a range of possibilities.", defTrans: "Fazer uma escolha", example: "You need to make a choice now.", audioFront: "TTS: Make a choice", audioBack: "TTS: You need to make a choice now." },
                { term: "Make a complaint", definition: "To formally express dissatisfaction.", defTrans: "Fazer uma reclamação", example: "I want to make a complaint to the manager.", audioFront: "TTS: Make a complaint", audioBack: "TTS: I want to make a complaint to the manager." },
                { term: "Make a decision", definition: "To reach a conclusion after consideration.", defTrans: "Tomar uma decisão", example: "Have you made a decision yet?", audioFront: "TTS: Make a decision", audioBack: "TTS: Have you made a decision yet?" },
                { term: "Make friends", definition: "To become friendly with people.", defTrans: "Fazer amigos", example: "He finds it easy to make friends.", audioFront: "TTS: Make friends", audioBack: "TTS: He finds it easy to make friends." },
                { term: "Make money", definition: "To earn or gain money.", defTrans: "Ganhar dinheiro", example: "They make a lot of money selling cars.", audioFront: "TTS: Make money", audioBack: "TTS: They make a lot of money selling cars." },
                { term: "Make a mistake", definition: "To do something wrong or incorrect.", defTrans: "Cometer um erro", example: "Don't worry, everyone makes mistakes.", audioFront: "TTS: Make a mistake", audioBack: "TTS: Don't worry, everyone makes mistakes." },
                { term: "Make sure", definition: "To ensure that something is done or happens.", defTrans: "Ter certeza / Garantir", example: "Make sure you lock the door.", audioFront: "TTS: Make sure", audioBack: "TTS: Make sure you lock the door." },

                // --- Topic 3: Grammar - Verbs with Prepositions ---
                { term: "Agree with", definition: "To have the same opinion as another person.", defTrans: "Concordar com", example: "I agree with your idea.", audioFront: "TTS: Agree with", audioBack: "TTS: I agree with your idea." },
                { term: "Apologize for", definition: "To express regret for something one has done wrong.", defTrans: "Pedir desculpas por", example: "He apologized for being late.", audioFront: "TTS: Apologize for", audioBack: "TTS: He apologized for being late." },
                { term: "Ask for", definition: "To request something.", defTrans: "Pedir por", example: "She asked for the bill.", audioFront: "TTS: Ask for", audioBack: "TTS: She asked for the bill." },
                { term: "Believe in", definition: "To have faith in the truth or existence of something.", defTrans: "Acreditar em", example: "Do you believe in magic?", audioFront: "TTS: Believe in", audioBack: "TTS: Do you believe in magic?" },
                { term: "Complain about", definition: "To express dissatisfaction about something.", defTrans: "Reclamar de", example: "Stop complaining about the rain.", audioFront: "TTS: Complain about", audioBack: "TTS: Stop complaining about the rain." },
                { term: "Concentrate on", definition: "To focus all one's attention on a particular object.", defTrans: "Concentrar-se em", example: "I need to concentrate on my work.", audioFront: "TTS: Concentrate on", audioBack: "TTS: I need to concentrate on my work." },
                { term: "Depend on", definition: "To be controlled or determined by.", defTrans: "Depender de", example: "It depends on the weather.", audioFront: "TTS: Depend on", audioBack: "TTS: It depends on the weather." },
                { term: "Listen to", definition: "To give one's attention to a sound.", defTrans: "Escutar", example: "Listen to this song!", audioFront: "TTS: Listen to", audioBack: "TTS: Listen to this song!" },
                { term: "Look for", definition: "To attempt to find someone or something.", defTrans: "Procurar por", example: "I am looking for my glasses.", audioFront: "TTS: Look for", audioBack: "TTS: I am looking for my glasses." },
                { term: "Rely on", definition: "To depend on with full trust or confidence.", defTrans: "Contar com / Depender de", example: "You can rely on us.", audioFront: "TTS: Rely on", audioBack: "TTS: You can rely on us." },
                { term: "Wait for", definition: "To stay where one is until something happens.", defTrans: "Esperar por", example: "Wait for me!", audioFront: "TTS: Wait for", audioBack: "TTS: Wait for me!" },

                // --- Topic 4: Grammar - Causative ---
                { term: "Causative Passive", definition: "Structure used when we arrange for someone else to do a service for us.", defTrans: "Causativa Passiva", example: "I had my watch repaired.", audioFront: "TTS: Causative Passive", audioBack: "TTS: I had my watch repaired." },
                { term: "Causative Active (Have)", definition: "Structure used to instruct someone to do something.", defTrans: "Causativa Ativa (com Have)", example: "I had the mechanic check the car.", audioFront: "TTS: Causative Active with Have", audioBack: "TTS: I had the mechanic check the car." },
                { term: "Causative Active (Get)", definition: "Structure used to persuade someone to do something.", defTrans: "Causativa Ativa (com Get)", example: "I got my brother to help me.", audioFront: "TTS: Causative Active with Get", audioBack: "TTS: I got my brother to help me." }
            ]
        }
    ], // Closes the steps array

    // ======================================================
    // GLOSSARY (Complete & Corrected for Chapter 7)
    // ======================================================
    glossary: [
        // PAGE 1: CONTEXT (Step 1 Tooltips)
        { topic: "Context", term: "shopping-spree", definition: "A short period of time in which someone buys a lot of things.", translation: "Um ataque de compras" },
        { topic: "Context", term: "rip-off", definition: "A fraud or swindle; something that is far too expensive.", translation: "É um roubo / assalto" },
        { topic: "Context", term: "costs-an-arm-and-a-leg", definition: "To be very expensive.", translation: "Custa os olhos da cara" },
        { topic: "Context", term: "do-research", definition: "To investigate materials and sources to establish facts.", translation: "Fazer pesquisa" },
        { topic: "Context", term: "shop-around", definition: "To go to different shops to compare prices before buying.", translation: "Pesquisar preços" },
        { topic: "Context", term: "make-a-mistake", definition: "To do something wrong or incorrect.", translation: "Cometer um erro" },
        { topic: "Context", term: "on-sale", definition: "Offered for purchase at a reduced price.", translation: "Em promoção / Em oferta" },
        { topic: "Context", term: "buy", definition: "To obtain in exchange for payment.", translation: "Comprar" },
        { topic: "Context", term: "make-a-complaint", definition: "To formally express dissatisfaction.", translation: "Fazer uma reclamação" },
        { topic: "Context", term: "complain-about", definition: "To express dissatisfaction or annoyance about something.", translation: "Reclamar de" },
        { topic: "Context", term: "have-something-done", definition: "Causative Passive: Arranging for a service to be done by someone else.", translation: "Mandar fazer algo" },
        { topic: "Context", term: "receipt", definition: "A printed statement acknowledging that something has been paid for.", translation: "Recibo" },
        { topic: "Context", term: "get-someone-to-do-something", definition: "Causative Active: Persuading or convincing someone to perform an action.", translation: "Conseguir que alguém faça algo" },
        { topic: "Context", term: "refund", definition: "A repayment of a sum of money, typically to a dissatisfied customer.", translation: "Reembolso" },
        { topic: "Context", term: "rely-on", definition: "To depend on with full trust or confidence.", translation: "Contar com / Depender de" },
        { topic: "Context", term: "make-someone-understand", definition: "To cause someone to perceive the meaning of something.", translation: "Fazer entender" },
        { topic: "Context", term: "listen-to", definition: "To give one's attention to a sound.", translation: "Escutar" },
        { topic: "Context", term: "do-your-best", definition: "To try as hard as possible.", translation: "Fazer o seu melhor" },

        // PAGE 2: SHOPPING VOCABULARY
        { topic: "Shopping Vocab", term: "Consumer", definition: "A person who buys goods or services.", translation: "Consumidor(a)" },
        { topic: "Shopping Vocab", term: "Rights", definition: "Moral or legal entitlements to have or obtain something.", translation: "Direitos" },
        { topic: "Shopping Vocab", term: "Habit", definition: "A settled or regular tendency or practice.", translation: "Hábito" },
        { topic: "Shopping Vocab", term: "Brand", definition: "A type of product made by a particular company.", translation: "Marca" },
        { topic: "Shopping Vocab", term: "Price", definition: "The amount of money required for payment.", translation: "Preço" },
        { topic: "Shopping Vocab", term: "Aisle", definition: "A passage between shelves of goods in a supermarket.", translation: "Corredor" },
        { topic: "Shopping Vocab", term: "Bargain", definition: "A thing bought more cheaply than is usual.", translation: "Pechincha" },
        { topic: "Shopping Vocab", term: "Discount", definition: "A deduction from the usual cost of something.", translation: "Desconto" },
        { topic: "Shopping Vocab", term: "To purchase", definition: "To acquire something by paying for it; to buy.", translation: "Comprar / Adquirir" },
        { topic: "Shopping Vocab", term: "Fitting room", definition: "A room in a shop where you can try on clothes.", translation: "Provador" },
        
        // PAGE 3: DO vs. MAKE
        { topic: "Do vs Make", term: "Do homework", definition: "To do schoolwork at home.", translation: "Fazer lição de casa" },
        { topic: "Do vs Make", term: "Do the dishes", definition: "To wash plates, cups, and cutlery.", translation: "Lavar a louça" },
        { topic: "Do vs Make", term: "Do exercise", definition: "To engage in physical activity to improve health.", translation: "Fazer exercício" },
        { topic: "Do vs Make", term: "Do damage", definition: "To cause physical harm or injury to something.", translation: "Causar dano" },
        { topic: "Do vs Make", term: "Do a good job", definition: "To perform a task well.", translation: "Fazer um bom trabalho" },
        { topic: "Do vs Make", term: "Make a plan", definition: "To decide on and arrange a method for doing something.", translation: "Fazer um plano" },
        { topic: "Do vs Make", term: "Make a promise", definition: "To assure someone that one will definitely do something.", translation: "Fazer uma promessa" },

        // PAGE 4: VERBS + PREPOSITIONS
        { topic: "Prepositions", term: "Consist of", definition: "To be composed or made up of.", translation: "Consistir em" },
        { topic: "Prepositions", term: "Dream about", definition: "To experience dreams during sleep regarding a specific topic.", translation: "Sonhar com" },
        { topic: "Prepositions", term: "Laugh at", definition: "To make sounds showing you think something is funny.", translation: "Rir de" },
        { topic: "Prepositions", term: "Pay for", definition: "To give money in exchange for goods or services.", translation: "Pagar por" },
        { topic: "Prepositions", term: "Prepare for", definition: "To make ready or suitable in advance.", translation: "Preparar-se para" },
        { topic: "Prepositions", term: "Search for", definition: "To try to find something by looking carefully.", translation: "Procurar / Buscar por" },
        { topic: "Prepositions", term: "Think about", definition: "To consider or have on one's mind.", translation: "Pensar sobre / em" },
        { topic: "Prepositions", term: "Wait for", definition: "To stay where one is until something happens.", translation: "Esperar por" },

        // PAGE 5: GRAMMAR & CAUSATIVE
        { topic: "Grammar", term: "Causative Passive", definition: "A structure used when we arrange for someone else to do a service for us (Have/Get + Object + Past Participle).", translation: "Causativa Passiva" },
        { topic: "Grammar", term: "Causative Active (Have)", definition: "A structure used to instruct or ask someone to do something (Have + Person + Base Verb).", translation: "Causativa Ativa (Have)" },
        { topic: "Grammar", term: "Causative Active (Get)", definition: "A structure used to persuade or convince someone to do something (Get + Person + To + Verb).", translation: "Causativa Ativa (Get)" }
    ]
});