/**
 * REACH English - LESSON DATA 9-3-5
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "9-3-5", 
    grade: "9th Grade",       
    bimester: "3",   
    chapter: "5",    
    chapterTitle: "Inspire Change", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Talk about advertising and marketing.<br>• Discuss campaigns and social causes.<br>• Use Zero Conditional for facts (If you heat ice, it melts).<br>• Use First Conditional for possibilities (If we try, we will succeed).<br>• Use Reflexive Pronouns (myself, yourself, themselves).",
            welcome: "Hello, Changemakers! It's Mr. D!<br><br>Welcome to \"Inspire Change\"! Have you ever seen an ad that made you want to buy something immediately? Or a campaign that made you think about the world? Today, we are exploring the power of ideas. We'll learn how to analyze advertisements, separate reality from fiction, and create our own campaigns. We'll also master the logic of \"If...\" sentences to talk about cause and effect. Let's make a difference!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about advertising and marketing. Discuss campaigns and social causes. Use Zero Conditional for facts. Use First Conditional for possibilities. Use Reflexive Pronouns.",
                welcome: "TTS: Hello, Changemakers! It's Mr. D! Welcome to Inspire Change! Have you ever seen an ad that made you want to buy something immediately? Or a campaign that made you think about the world? Today, we are exploring the power of ideas. We'll learn how to analyze advertisements, separate reality from fiction, and create our own campaigns. We'll also master the logic of If sentences to talk about cause and effect. Let's make a difference!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of upbeat music from a TV commercial, then clicking off. Albert and Celine are sitting with a sketchbook.", 
            contextAudio: "audio/9-3-5/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Did you see that [ad](tooltip:ad) for the new sneakers? It says, \"If you wear them, you will fly!\"" 
                },
                { 
                    speaker: "Albert", 
                    text: "Haha. That is just [advertising](tooltip:advertising). It is not [reality](tooltip:reality). They want to [persuade](tooltip:persuade) us to buy them." 
                },
                { 
                    speaker: "Celine", 
                    text: "I know. But we need a good [slogan](tooltip:slogan) for our school [campaign](tooltip:campaign)." 
                },
                { 
                    speaker: "Albert", 
                    text: "If we want to [raise awareness](tooltip:raise-awareness) about recycling, we need a strong [message](tooltip:message)." 
                },
                { 
                    speaker: "Celine", 
                    text: "How about: \"[Help yourself](tooltip:help-yourself) by helping the planet\"?" 
                },
                { 
                    speaker: "Albert", 
                    text: "I like it! We can design the [posters](tooltip:posters) ourselves." 
                },
                { 
                    speaker: "Celine", 
                    text: "Great. If we [start](tooltip:start) now, we will [finish](tooltip:finish) by lunch." 
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
                    title: "Advertising Verbs",
                    audio: "TTS: Advertise. Persuade. Influence. Promote. Attract. Exaggerate. Compare. Promise. Buy. Sell. Show.",
                    items: [
                        { term: "Advertise", trans: "Anunciar / Fazer propaganda" },
                        { term: "Persuade", trans: "Persuadir / Convencer" },
                        { term: "Influence", trans: "Influenciar" },
                        { term: "Promote", trans: "Promover" },
                        { term: "Attract", trans: "Atrair" },
                        { term: "Exaggerate", trans: "Exagerar" },
                        { term: "Compare", trans: "Comparar" },
                        { term: "Promise", trans: "Prometer" },
                        { term: "Buy", trans: "Comprar" },
                        { term: "Sell", trans: "Vender" },
                        { term: "Show", trans: "Mostrar" }
                    ]
                },
                {
                    title: "Advertising Nouns",
                    audio: "TTS: Advertisement. Ad. Brand. Product. Service. Target Audience. Slogan. Tagline. Image. Reality. Truth. Misleading.",
                    items: [
                        { term: "Advertisement / Ad", trans: "Anúncio / Propaganda" },
                        { term: "Brand", trans: "Marca" },
                        { term: "Product", trans: "Produto" },
                        { term: "Service", trans: "Serviço" },
                        { term: "Target Audience", trans: "Público-alvo" },
                        { term: "Slogan / Tagline", trans: "Slogan / Lema" },
                        { term: "Image", trans: "Imagem" },
                        { term: "Reality", trans: "Realidade" },
                        { term: "Truth", trans: "Verdade" },
                        { term: "Misleading", trans: "Enganoso(a)" }
                    ]
                },
                {
                    title: "Campaign & Social Action",
                    audio: "TTS: Campaign. Idea. Goal. Aim. Message. Action. Impact. Solution. Community. Create. Inspire. Change. Volunteer. Raise awareness. Support.",
                    items: [
                        { term: "Campaign", trans: "Campanha" },
                        { term: "Idea", trans: "Ideia" },
                        { term: "Goal / Aim", trans: "Meta / Objetivo" },
                        { term: "Message", trans: "Mensagem" },
                        { term: "Action", trans: "Ação" },
                        { term: "Impact", trans: "Impacto" },
                        { term: "Solution", trans: "Solução" },
                        { term: "Community", trans: "Comunidade" },
                        { term: "Create", trans: "Criar" },
                        { term: "Inspire", trans: "Inspirar" },
                        { term: "Change", trans: "Mudar / Mudança" },
                        { term: "Volunteer", trans: "Voluntariar-se / Voluntário" },
                        { term: "Raise awareness", trans: "Conscientizar / Chamar atenção" },
                        { term: "Support", trans: "Apoiar / Apoio" }
                    ]
                },
                {
                    title: "Reflexive Pronouns",
                    audio: "TTS: Myself. Yourself. Himself. Herself. Itself. Ourselves. Yourselves. Themselves.",
                    items: [
                        { term: "Myself", trans: "Eu mesmo(a)" },
                        { term: "Yourself", trans: "Você mesmo(a)" },
                        { term: "Himself", trans: "Ele mesmo" },
                        { term: "Herself", trans: "Ela mesma" },
                        { term: "Itself", trans: "Ele/Ela mesmo(a) (coisa)" },
                        { term: "Ourselves", trans: "Nós mesmos(as)" },
                        { term: "Yourselves", trans: "Vocês mesmos(as)" },
                        { term: "Themselves", trans: "Eles/Elas mesmos(as)" }
                    ]
                },
                {
                    title: "Conditionals Phrases",
                    audio: "TTS: If you. What happens if? If we create. If it works.",
                    items: [
                        { term: "If you...", trans: "Se você..." },
                        { term: "What happens if...?", trans: "O que acontece se...?" },
                        { term: "If we create...", trans: "Se criarmos..." },
                        { term: "If it works...", trans: "Se funcionar..." }
                    ]
                }
            ],

            // 2B: Context Examples (Expanded & Grouped) - CORRECTED for CHAPTER 5
            exampleGroups: [
                {
                    title: "Advertising & Marketing Verbs",
                    audio: "TTS: Companies advertise on TV. The ad tries to persuade you. Friends influence our choices. They promote healthy eating. Bright colors attract attention. The ad exaggerates the results. Compare the price before buying. The cream promises to stop aging. I want to buy this product. They sell recycled bags. The video shows the reality.",
                    items: [
                        { term: "Advertise", sent: "Companies advertise on TV.", trans: "<span style='color:#0077b6'>Empresas anunciam na TV.</span>" },
                        { term: "Persuade", sent: "The ad tries to persuade you to buy.", trans: "<span style='color:#0077b6'>O anúncio tenta te persuadir a comprar.</span>" },
                        { term: "Influence", sent: "Friends influence our choices.", trans: "<span style='color:#0077b6'>Amigos influenciam nossas escolhas.</span>" },
                        { term: "Promote", sent: "They promote healthy eating.", trans: "<span style='color:#0077b6'>Eles promovem alimentação saudável.</span>" },
                        { term: "Attract", sent: "Bright colors attract attention.", trans: "<span style='color:#0077b6'>Cores vivas atraem atenção.</span>" },
                        { term: "Exaggerate", sent: "The ad exaggerates the results.", trans: "<span style='color:#0077b6'>O anúncio exagera os resultados.</span>" },
                        { term: "Compare", sent: "Compare the price before buying.", trans: "<span style='color:#0077b6'>Compare o preço antes de comprar.</span>" },
                        { term: "Promise", sent: "The cream promises to stop aging.", trans: "<span style='color:#0077b6'>O creme promete parar o envelhecimento.</span>" },
                        { term: "Buy", sent: "I want to buy this product.", trans: "<span style='color:#0077b6'>Eu quero comprar este produto.</span>" },
                        { term: "Sell", sent: "They sell recycled bags.", trans: "<span style='color:#0077b6'>Eles vendem sacolas recicladas.</span>" },
                        { term: "Show", sent: "The video shows the reality.", trans: "<span style='color:#0077b6'>O vídeo mostra a realidade.</span>" }
                    ]
                },
                {
                    title: "Advertising Nouns",
                    audio: "TTS: I saw a funny ad on TV. What is your favorite shoe brand? This product is eco-friendly. They offer a cleaning service. Teenagers are the target audience. The slogan is very catchy. The image looks photoshopped. Ads don't always show reality. Tell the truth in your campaign. That information is misleading.",
                    items: [
                        { term: "Advertisement / Ad", sent: "I saw an ad for a car.", trans: "<span style='color:#0077b6'>Eu vi um anúncio de um carro.</span>" },
                        { term: "Brand", sent: "Nike is a famous brand.", trans: "<span style='color:#0077b6'>Nike é uma marca famosa.</span>" },
                        { term: "Product", sent: "This product is eco-friendly.", trans: "<span style='color:#0077b6'>Este produto é ecológico.</span>" },
                        { term: "Service", sent: "They offer a cleaning service.", trans: "<span style='color:#0077b6'>Eles oferecem um serviço de limpeza.</span>" },
                        { term: "Target Audience", sent: "Teenagers are the target audience.", trans: "<span style='color:#0077b6'>Adolescentes são o público-alvo.</span>" },
                        { term: "Slogan / Tagline", sent: "The slogan is catchy.", trans: "<span style='color:#0077b6'>O slogan é cativante.</span>" },
                        { term: "Image", sent: "The image looks photoshopped.", trans: "<span style='color:#0077b6'>A imagem parece photoshopada.</span>" },
                        { term: "Reality", sent: "VR is virtual reality.", trans: "<span style='color:#0077b6'>RV é realidade virtual.</span>" },
                        { term: "Truth", sent: "Tell the truth.", trans: "<span style='color:#0077b6'>Diga a verdade.</span>" },
                        { term: "Misleading", sent: "The photo is misleading.", trans: "<span style='color:#0077b6'>A foto é enganosa.</span>" }
                    ]
                },
                {
                    title: "Campaign & Social Action",
                    audio: "TTS: We started a recycling campaign. That is a great idea. Our goal is to help people. The message must be clear. We need to take action now. Small acts have a big impact. We found a solution. Help your local community. We create art. Her speech inspired us. We want to change the world. I volunteer at the shelter. The campaign raises awareness. Please support our cause.",
                    items: [
                        { term: "Campaign", sent: "We started a recycling campaign.", trans: "<span style='color:#0077b6'>Iniciamos uma campanha de reciclagem.</span>" },
                        { term: "Idea", sent: "That is a great idea for a campaign.", trans: "<span style='color:#0077b6'>Essa é uma ótima ideia para uma campanha.</span>" },
                        { term: "Goal / Aim", sent: "Our goal is to help people.", trans: "<span style='color:#0077b6'>Nossa meta é ajudar as pessoas.</span>" },
                        { term: "Message", sent: "The message must be clear.", trans: "<span style='color:#0077b6'>A mensagem deve ser clara.</span>" },
                        { term: "Action", sent: "We need to take action now.", trans: "<span style='color:#0077b6'>Precisamos agir agora.</span>" },
                        { term: "Impact", sent: "Small acts have a big impact.", trans: "<span style='color:#0077b6'>Pequenos atos têm um grande impacto.</span>" },
                        { term: "Solution", sent: "We found a solution to the problem.", trans: "<span style='color:#0077b6'>Encontramos uma solução para o problema.</span>" },
                        { term: "Community", sent: "Help your local community.", trans: "<span style='color:#0077b6'>Ajude sua comunidade local.</span>" },
                        { term: "Create", sent: "We create art.", trans: "<span style='color:#0077b6'>Nós criamos arte.</span>" },
                        { term: "Inspire", sent: "Her speech inspired us.", trans: "<span style='color:#0077b6'>O discurso dela nos inspirou.</span>" },
                        { term: "Change", sent: "We want to change the world.", trans: "<span style='color:#0077b6'>Queremos mudar o mundo.</span>" },
                        { term: "Volunteer", sent: "I volunteer at the shelter.", trans: "<span style='color:#0077b6'>Eu sou voluntário no abrigo.</span>" },
                        { term: "Raise awareness", sent: "The campaign raises awareness.", trans: "<span style='color:#0077b6'>A campanha conscientiza/chama atenção.</span>" },
                        { term: "Support", sent: "Please support our cause.", trans: "<span style='color:#0077b6'>Por favor, apoie nossa causa.</span>" }
                    ]
                },
                {
                    title: "Reflexive Pronouns",
                    audio: "TTS: I taught myself guitar. Take care of yourself. He hurt himself. She looked at herself. The problem resolved itself. We enjoyed ourselves. You can help yourselves to the food. They organized it themselves.",
                    items: [
                        { term: "Myself", sent: "I taught myself guitar.", trans: "<span style='color:#0077b6'>Eu ensinei a mim mesmo violão.</span>" },
                        { term: "Yourself", sent: "Take care of yourself.", trans: "<span style='color:#0077b6'>Cuide de você mesmo.</span>" },
                        { term: "Himself", sent: "He hurt himself.", trans: "<span style='color:#0077b6'>Ele se machucou.</span>" },
                        { term: "Herself", sent: "She looked at herself.", trans: "<span style='color:#0077b6'>Ela olhou para si mesma.</span>" },
                        { term: "Itself", sent: "The problem resolved itself.", trans: "<span style='color:#0077b6'>O problema se resolveu sozinho.</span>" },
                        { term: "Ourselves", sent: "We enjoyed ourselves.", trans: "<span style='color:#0077b6'>Nós nos divertimos.</span>" },
                        { term: "Yourselves", sent: "You can help yourselves to the food.", trans: "<span style='color:#0077b6'>Vocês podem se servir da comida.</span>" },
                        { term: "Themselves", sent: "They organized it themselves.", trans: "<span style='color:#0077b6'>Eles organizaram isso eles mesmos.</span>" }
                    ]
                },
                {
                    title: "Conditionals Phrases",
                    audio: "TTS: If you study, you learn. What happens if it rains? If we create a campaign, we will succeed. If it works, many people will benefit.",
                    items: [
                        { term: "If you...", sent: "\"If you study, you learn.\"", trans: "<span style='color:#0077b6'>\"Se você estuda, você aprende.\"</span>" },
                        { term: "What happens if...", sent: "\"What happens if it rains?\"", trans: "<span style='color:#0077b6'>\"O que acontece se chover?\"</span>" },
                        { term: "If we create...", sent: "If we create a campaign, people will help.", trans: "<span style='color:#0077b6'>Se nós criarmos uma campanha, as pessoas ajudarão.</span>" },
                        { term: "If it works...", sent: "If it works, we can solve the problem.", trans: "<span style='color:#0077b6'>Se funcionar, nós podemos resolver o problema.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (Expanded to 24 Questions)
            drills: [
                // ADVERTISING VERBS (1-6)
                {
                    type: "mcq",
                    q: "To make someone believe something or do something is to:",
                    options: [
                        { t: "Buy", c: false },
                        { t: "Persuade", c: true },
                        { t: "Volunteer", c: false },
                        { t: "Create", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To support or actively encourage a product or cause is to:",
                    options: [
                        { t: "Promote", c: true },
                        { t: "Exaggerate", c: false },
                        { t: "Compare", c: false },
                        { t: "Hide", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To represent something as being better or larger than it really is:",
                    options: [
                        { t: "Verify", c: false },
                        { t: "Exaggerate", c: true },
                        { t: "Attract", c: false },
                        { t: "Support", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To cause people to come to a place or like a product is to:",
                    options: [
                        { t: "Attract", c: true },
                        { t: "Deny", c: false },
                        { t: "Volunteer", c: false },
                        { t: "Waste", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To have an effect on someone's behavior or choices is to:",
                    options: [
                        { t: "Influence", c: true },
                        { t: "Buy", c: false },
                        { t: "Sell", c: false },
                        { t: "Exaggerate", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To estimate the similarity or dissimilarity between things is to:",
                    options: [
                        { t: "Promote", c: false },
                        { t: "Advertise", c: false },
                        { t: "Compare", c: true },
                        { t: "Attract", c: false }
                    ]
                },

                // ADVERTISING NOUNS (7-12)
                {
                    type: "mcq",
                    q: "A short, memorable phrase used in advertising is a:",
                    options: [
                        { t: "Brand", c: false },
                        { t: "Product", c: false },
                        { t: "Slogan", c: true },
                        { t: "Service", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The name or symbol of a product that distinguishes it from others:",
                    options: [
                        { t: "Brand", c: true },
                        { t: "Ad", c: false },
                        { t: "Target", c: false },
                        { t: "Reality", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The specific group of people an advertisement wants to reach:",
                    options: [
                        { t: "Influencers", c: false },
                        { t: "Target Audience", c: true },
                        { t: "Volunteers", c: false },
                        { t: "Creators", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A notice promoting a product or service (short form):",
                    options: [
                        { t: "Ad", c: true },
                        { t: "Cv", c: false },
                        { t: "Slogan", c: false },
                        { t: "Idea", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "An ad that gives the wrong idea or lies is:",
                    options: [
                        { t: "Honest", c: false },
                        { t: "Misleading", c: true },
                        { t: "Real", c: false },
                        { t: "Creative", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The state of things as they actually exist, not fiction:",
                    options: [
                        { t: "Image", c: false },
                        { t: "Reality", c: true },
                        { t: "Dream", c: false },
                        { t: "Idea", c: false }
                    ]
                },

                // SOCIAL ACTION & CAMPAIGNS (13-18)
                {
                    type: "mcq",
                    q: "An organized course of action to achieve a goal is a:",
                    options: [
                        { t: "Campaign", c: true },
                        { t: "Slogan", c: false },
                        { t: "Brand", c: false },
                        { t: "Product", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To freely offer to do something without payment is to:",
                    options: [
                        { t: "Sell", c: false },
                        { t: "Buy", c: false },
                        { t: "Volunteer", c: true },
                        { t: "Exaggerate", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To make people know about a problem or cause is to:",
                    options: [
                        { t: "Raise awareness", c: true },
                        { t: "Hide", c: false },
                        { t: "Deny", c: false },
                        { t: "Compare", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To give assistance or approval to a cause is to:",
                    options: [
                        { t: "Attack", c: false },
                        { t: "Support", c: true },
                        { t: "Ignore", c: false },
                        { t: "Doubt", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The object of a person's ambition or effort is their:",
                    options: [
                        { t: "Goal", c: true },
                        { t: "Risk", c: false },
                        { t: "Fear", c: false },
                        { t: "Past", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A significant point or central theme of a campaign is the:",
                    options: [
                        { t: "Message", c: true },
                        { t: "Image", c: false },
                        { t: "Cost", c: false },
                        { t: "Time", c: false }
                    ]
                },

                // REFLEXIVE PRONOUNS (19-24)
                {
                    type: "mcq",
                    q: "I cut _______ while cooking dinner.",
                    options: [
                        { t: "me", c: false },
                        { t: "myself", c: true },
                        { t: "my", c: false },
                        { t: "I", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "She prepared the presentation _______.",
                    options: [
                        { t: "herself", c: true },
                        { t: "she", c: false },
                        { t: "her", c: false },
                        { t: "himself", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "He hurt _______ playing soccer.",
                    options: [
                        { t: "himself", c: true },
                        { t: "his", c: false },
                        { t: "he", c: false },
                        { t: "itself", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "We built the model _______.",
                    options: [
                        { t: "ourselves", c: true },
                        { t: "us", c: false },
                        { t: "ourself", c: false },
                        { t: "we", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The students organized the party _______.",
                    options: [
                        { t: "themselves", c: true },
                        { t: "them", c: false },
                        { t: "theirselves", c: false },
                        { t: "they", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You must believe in _______.",
                    options: [
                        { t: "yourself", c: true },
                        { t: "you", c: false },
                        { t: "yours", c: false },
                        { t: "myself", c: false }
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
                    title: "Zero Conditional (Facts)",
                    audio: "TTS: We use the Zero Conditional to talk about general truths, scientific facts, and habits. In these sentences, the result is always true if the condition is met. Structure: If plus Simple Present, comma, Simple Present. For example: If you heat ice, it melts.",
                    explanation: "We use the Zero Conditional for general truths and scientific facts. The result is always true.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos a Condicional Zero para verdades gerais e fatos científicos. O resultado é sempre verdadeiro.)</span>",
                    samples: [
                        { en: "<b>If</b> you <b>heat</b> ice, it <b>melts</b>.", pt: "<span style='color:#0077b6'>Se você aquecer o gelo, ele derrete.</span>" },
                        { en: "<b>If</b> babies <b>are</b> hungry, they <b>cry</b>.", pt: "<span style='color:#0077b6'>Se bebês estão com fome, eles choram.</span>" },
                        { en: "<b>If</b> I <b>see</b> a fake ad, I <b>ignore</b> it.", pt: "<span style='color:#0077b6'>Se eu vejo um anúncio falso, eu ignoro.</span>" }
                    ]
                },
                {
                    title: "First Conditional (Possibility)",
                    audio: "TTS: We use the First Conditional to talk about things that are possible or likely to happen in the future. It describes a real situation and its probable result. Structure: If plus Simple Present, comma, will plus base verb. For example: If you study, you will pass.",
                    explanation: "We use the First Conditional for real possibilities in the future.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos a Primeira Condicional para possibilidades reais no futuro.)</span>",
                    samples: [
                        { en: "<b>If</b> we <b>create</b> a campaign, people <b>will help</b>.", pt: "<span style='color:#0077b6'>Se criarmos uma campanha, as pessoas ajudarão.</span>" },
                        { en: "<b>If</b> you <b>don't check</b> the source, you <b>will believe</b> the lie.", pt: "<span style='color:#0077b6'>Se você não checar a fonte, acreditará na mentira.</span>" },
                        { en: "<b>If</b> she <b>studies</b> marketing, she <b>will be</b> successful.", pt: "<span style='color:#0077b6'>Se ela estudar marketing, será bem-sucedida.</span>" }
                    ]
                },
                {
                    title: "Reflexive Pronouns",
                    audio: "TTS: We use Reflexive Pronouns when the subject and the object are the same person. We also use them to emphasize that someone did something alone. I taught myself. He hurt himself. We enjoyed ourselves.",
                    explanation: "Used when the subject and object are the same person, or to emphasize independence.<br><br><span style='color:#0077b6; font-style:italic;'>(Usado quando sujeito e objeto são a mesma pessoa, ou para enfatizar independência.)</span>",
                    samples: [
                        { en: "I taught <b>myself</b> how to edit videos.", pt: "<span style='color:#0077b6'>Eu ensinei a mim mesmo a editar vídeos.</span>" },
                        { en: "You must believe in <b>yourself</b>.", pt: "<span style='color:#0077b6'>Você deve acreditar em si mesmo.</span>" },
                        { en: "She designed the poster <b>herself</b>.", pt: "<span style='color:#0077b6'>Ela mesma desenhou o cartaz.</span>" },
                        { en: "We organized the party <b>ourselves</b>.", pt: "<span style='color:#0077b6'>Nós mesmos organizamos a festa.</span>" }
                    ]
                }
            ],

           // 3B: Natural Examples (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Zero Conditional (Facts)",
                    audio: "audio/9-3-5/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "What happens if you click this suspicious link?", 
                            pt: "<span style='color:#0077b6'>O que acontece se você clicar neste link suspeito?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "If you click it, you get a virus. It is a fact!", 
                            pt: "<span style='color:#0077b6'>Se você clicar, você pega um vírus. É um fato!</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: First Conditional (Possibilities)",
                    audio: "audio/9-3-5/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "We need to finish the poster today.", 
                            pt: "<span style='color:#0077b6'>Precisamos terminar o cartaz hoje.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Don't worry. If we work hard, we will finish on time.", 
                            pt: "<span style='color:#0077b6'>Não se preocupe. Se trabalharmos duro, terminaremos a tempo.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "And if the campaign is good, everyone will participate.", 
                            pt: "<span style='color:#0077b6'>E se a campanha for boa, todo mundo vai participar.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Reflexive Pronouns",
                    audio: "audio/9-3-5/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Did anyone help you write that slogan?", 
                            pt: "<span style='color:#0077b6'>Alguém te ajudou a escrever esse slogan?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, I wrote it myself. Did you draw the logo?", 
                            pt: "<span style='color:#0077b6'>Não, eu escrevi sozinha. Você desenhou o logotipo?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes. I taught myself how to design last year.", 
                            pt: "<span style='color:#0077b6'>Sim. Eu ensinei a mim mesmo a desenhar ano passado.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "We should be proud of ourselves.", 
                            pt: "<span style='color:#0077b6'>Nós deveríamos estar orgulhosos de nós mesmos.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ (Expanded to 24 Questions)
            grammarDrills: [
                // ZERO CONDITIONAL (Facts & Habits) - Questions 1-8
                {
                    type: "mcq",
                    q: "Zero Conditional: 'If you heat ice, it _______.'",
                    options: [
                        { t: "melts", c: true },
                        { t: "melted", c: false },
                        { t: "will melt", c: false },
                        { t: "melting", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Zero Conditional: 'If you mix red and blue, you _______ purple.'",
                    options: [
                        { t: "got", c: false },
                        { t: "will get", c: false },
                        { t: "get", c: true },
                        { t: "getting", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Zero Conditional: 'Plants die if they _______ water.'",
                    options: [
                        { t: "don't get", c: true },
                        { t: "didn't get", c: false },
                        { t: "won't get", c: false },
                        { t: "not get", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Zero Conditional: 'If babies are hungry, they _______.'",
                    options: [
                        { t: "cried", c: false },
                        { t: "cry", c: true },
                        { t: "will cry", c: false },
                        { t: "cries", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Zero Conditional: 'If I drink coffee at night, I _______ sleep.'",
                    options: [
                        { t: "doesn't", c: false },
                        { t: "don't", c: true },
                        { t: "didn't", c: false },
                        { t: "won't", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Zero Conditional: 'Water boils if it _______ 100 degrees Celsius.'",
                    options: [
                        { t: "reaches", c: true },
                        { t: "reach", c: false },
                        { t: "will reach", c: false },
                        { t: "reached", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Zero Conditional: 'If you touch fire, you _______ burned.'",
                    options: [
                        { t: "gets", c: false },
                        { t: "got", c: false },
                        { t: "get", c: true },
                        { t: "getting", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Zero Conditional: 'My parents get angry if I _______ home late.'",
                    options: [
                        { t: "come", c: true },
                        { t: "came", c: false },
                        { t: "will come", c: false },
                        { t: "comes", c: false }
                    ]
                },

                // FIRST CONDITIONAL (Possibilities) - Questions 9-16
                {
                    type: "mcq",
                    q: "First Conditional: 'If it rains tomorrow, we _______ the event.'",
                    options: [
                        { t: "cancel", c: false },
                        { t: "will cancel", c: true },
                        { t: "canceled", c: false },
                        { t: "canceling", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "First Conditional: 'If she _______ (not/study), she won't pass.'",
                    options: [
                        { t: "don't study", c: false },
                        { t: "won't study", c: false },
                        { t: "doesn't study", c: true },
                        { t: "didn't study", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "First Conditional: 'I _______ you if I have time.'",
                    options: [
                        { t: "call", c: false },
                        { t: "called", c: false },
                        { t: "will call", c: true },
                        { t: "calling", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "First Conditional: 'If we create a good ad, people _______ it.'",
                    options: [
                        { t: "will buy", c: true },
                        { t: "buys", c: false },
                        { t: "buy", c: false },
                        { t: "bought", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "First Conditional: 'If you don't hurry, you _______ the bus.'",
                    options: [
                        { t: "miss", c: false },
                        { t: "missed", c: false },
                        { t: "will miss", c: true },
                        { t: "missing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "First Conditional: 'What _______ you do if you lose your phone?'",
                    options: [
                        { t: "do", c: false },
                        { t: "did", c: false },
                        { t: "will", c: true },
                        { t: "are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "First Conditional: 'If he _______ to the party, I will be happy.'",
                    options: [
                        { t: "comes", c: true },
                        { t: "will come", c: false },
                        { t: "come", c: false },
                        { t: "came", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "First Conditional: 'If they _______ hard, they will succeed.'",
                    options: [
                        { t: "worked", c: false },
                        { t: "will work", c: false },
                        { t: "works", c: false },
                        { t: "work", c: true }
                    ]
                },

                // REFLEXIVE PRONOUNS (17-24)
                {
                    type: "mcq",
                    q: "I cut _______ while cooking.",
                    options: [
                        { t: "me", c: false },
                        { t: "my", c: false },
                        { t: "myself", c: true },
                        { t: "I", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "He looked at _______ in the mirror.",
                    options: [
                        { t: "him", c: false },
                        { t: "himself", c: true },
                        { t: "his", c: false },
                        { t: "he", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "She prepared the presentation _______.",
                    options: [
                        { t: "herself", c: true },
                        { t: "her", c: false },
                        { t: "she", c: false },
                        { t: "it", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "We organized the party _______.",
                    options: [
                        { t: "us", c: false },
                        { t: "ourself", c: false },
                        { t: "ourselves", c: true },
                        { t: "we", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "They built the model _______.",
                    options: [
                        { t: "themselves", c: true },
                        { t: "theirselves", c: false },
                        { t: "them", c: false },
                        { t: "they", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You (singular) must believe in _______.",
                    options: [
                        { t: "yourself", c: true },
                        { t: "you", c: false },
                        { t: "yours", c: false },
                        { t: "yourselves", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The cat cleaned _______.",
                    options: [
                        { t: "it", c: false },
                        { t: "itself", c: true },
                        { t: "himself", c: false },
                        { t: "herself", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You (plural) can help _______ to the food.",
                    options: [
                        { t: "you", c: false },
                        { t: "yourself", c: false },
                        { t: "yourselves", c: true },
                        { t: "yours", c: false }
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
                    text: "We organized the event ourselves.<br><small style='color:#0077b6'>(Nós mesmos organizamos o evento.)</small>", 
                    audio: "TTS: We organized the event ourselves.", 
                    arrow: "↘" 
                },
                { 
                    text: "If we try hard, we will succeed.<br><small style='color:#0077b6'>(Se nos esforçarmos, teremos sucesso.)</small>", 
                    audio: "TTS: If we try hard, we will succeed.", 
                    arrow: "↘" 
                },
                { 
                    text: "She taught herself to play guitar.<br><small style='color:#0077b6'>(Ela aprendeu sozinha a tocar violão.)</small>", 
                    audio: "TTS: She taught herself to play guitar.", 
                    arrow: "↘" 
                },
                { 
                    text: "What happens if you click the link?<br><small style='color:#0077b6'>(O que acontece se você clicar no link?)</small>", 
                    audio: "TTS: What happens if you click the link?", 
                    arrow: "↗" 
                },
                { 
                    text: "He cut himself while cooking.<br><small style='color:#0077b6'>(Ele se cortou enquanto cozinhava.)</small>", 
                    audio: "TTS: He cut himself while cooking.", 
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
                    instruction: "Listen to Albert talking about a school project. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre um projeto escolar. Digite as palavras que faltam.)</small>",
                    audio: "TTS: We need a good idea. If we create a catchy slogan, people will remember our campaign. We can design the posters ourselves.",
                    text: "We need a good idea. [If] we create a catchy [slogan], people [will] remember our campaign. We can design the posters [ourselves]."
                },
                // Drill 2: Listen and Complete (Dropdown) - MP3
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation about an ad. Choose the correct option.<br><small style='color:#0077b6'>(Ouça a conversa sobre um anúncio. Escolha a opção correta.)</small>",
                    audio: "audio/9-3-5/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: It says if you drink this juice, you will become a [genius | strong].", a: "genius" },
                        { q: "Albert: That is [misleading | true]. It is not true.", a: "misleading" },
                        { q: "Celine: If I buy it, I will [waste | save] my money.", a: "waste" }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the conditional sentence and choose the correct meaning.<br><small style='color:#0077b6'>(Ouça a frase condicional e escolha o significado correto.)</small>",
                    audio: "TTS: If it rains tomorrow, we will cancel the picnic.",
                    options: [
                        { t: "We cancelled the picnic yesterday.", c: false },
                        { t: "The picnic depends on the weather.", c: true },
                        { t: "It is raining right now.", c: false },
                        { t: "We will go to the picnic if it rains.", c: false }
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
                    title: "Narration: The Recycling Campaign",
                    audio: "TTS: The students in Grade 9 wanted to change their school. They noticed too much plastic waste. They decided to launch a campaign called 'Green Future'. They said, 'If we work together, we will make a difference.' They designed the logos themselves. They also recorded a video to raise awareness. The principal promised: 'If the students collect 100kg of plastic, the school will buy new sports equipment.' Everyone is excited to help. || audio/9-3-5/p6_text1.mp3",
                    body: "The students in Grade 9 wanted to change their school. They noticed too much plastic waste. They decided to launch a campaign called \"Green Future\". They said, \"If we work together, we will make a difference.\" They designed the logos themselves. They also recorded a video to raise awareness. The principal promised: \"If the students collect 100kg of plastic, the school will buy new sports equipment.\" Everyone is excited to help.",
                    questions: [
                        { 
                            q: "What is the goal of the campaign?", 
                            options: [ 
                                {t: "To buy new computers", c: false}, 
                                {t: "To reduce plastic waste", c: true}, 
                                {t: "To change the school name", c: false},
                                {t: "To paint the walls", c: false}
                            ] 
                        },
                        { 
                            q: "Who designed the logos?", 
                            options: [ 
                                {t: "The teachers", c: false}, 
                                {t: "The students themselves", c: true}, 
                                {t: "A professional designer", c: false},
                                {t: "The principal", c: false}
                            ] 
                        },
                        { 
                            q: "What will happen if they collect 100kg of plastic?", 
                            options: [ 
                                {t: "The school will close.", c: false}, 
                                {t: "They will get homework.", c: false}, 
                                {t: "The school will buy sports equipment.", c: true},
                                {t: "Nothing will happen.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: Is it Real?",
                    audio: "audio/9-3-5/p6_text2.mp3",
                    body: "<b>Albert:</b> Celine, look at this magazine. This cream promises to make you look 10 years younger in one day!<br><b>Celine:</b> Really? That sounds impossible. If it were true, everyone would use it.<br><b>Albert:</b> The ad uses a famous celebrity. She says she uses it herself.<br><b>Celine:</b> Advertisers often exaggerate. If you believe everything, you will be disappointed.<br><b>Albert:</b> You are right. It is probably misleading.<br><b>Celine:</b> We should trust facts, not just pretty images.",
                    questions: [
                        { 
                            q: "What does the cream promise?", 
                            options: [ 
                                {t: "To make you taller.", c: false}, 
                                {t: "To make you look younger.", c: true}, 
                                {t: "To clean your skin.", c: false},
                                {t: "To make you rich.", c: false}
                            ] 
                        },
                        { 
                            q: "Does Celine believe the ad?", 
                            options: [ 
                                {t: "Yes, she does.", c: false}, 
                                {t: "No, she thinks it is impossible.", c: true}, 
                                {t: "She wants to buy it.", c: false},
                                {t: "She knows the celebrity.", c: false}
                            ] 
                        },
                        { 
                            q: "What does the celebrity say?", 
                            options: [ 
                                {t: "She hates it.", c: false}, 
                                {t: "She sells it.", c: false}, 
                                {t: "She uses it herself.", c: true},
                                {t: "She doesn't know.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: The DIY (Do It Yourself) Movement",
                    audio: "TTS: The DIY movement is becoming very popular. It encourages people to create things themselves instead of buying them. If you make a gift yourself, it feels more special. You can learn many skills online. For example, if you watch a tutorial, you can learn to fix things. People feel proud of themselves when they finish a project. It also saves money. If you try it, you might like it! || audio/9-3-5/p6_text3.mp3",
                    body: "The DIY movement is becoming very popular. It encourages people to create things themselves instead of buying them. If you make a gift yourself, it feels more special. You can learn many skills online. For example, if you watch a tutorial, you can learn to fix things. People feel proud of themselves when they finish a project. It also saves money. If you try it, you might like it!",
                    questions: [
                        { 
                            q: "What does DIY stand for?", 
                            options: [ 
                                {t: "Do It Yesterday", c: false}, 
                                {t: "Do It Yourself", c: true}, 
                                {t: "Don't Ignore You", c: false},
                                {t: "Drive It Yourself", c: false}
                            ] 
                        },
                        { 
                            q: "Why is a DIY gift special?", 
                            options: [ 
                                {t: "It is expensive.", c: false}, 
                                {t: "It is bought in a store.", c: false}, 
                                {t: "You make it yourself.", c: true},
                                {t: "It is big.", c: false}
                            ] 
                        },
                        { 
                            q: "How do people feel when they finish a project?", 
                            options: [ 
                                {t: "Sad", c: false}, 
                                {t: "Proud of themselves", c: true}, 
                                {t: "Angry", c: false},
                                {t: "Confused", c: false}
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
                // Drill 1: Matching (Adjective + Preposition)
                {
                    type: "matching",
                    instruction: "Match the adjective to the correct preposition.<br><small style='color:#0077b6'>(Combine o adjetivo com a preposição correta.)</small>",
                    pairs: [
                        { left: "Good", right: "at", val: "1" },
                        { left: "Interested", right: "in", val: "2" },
                        { left: "Responsible", right: "for", val: "3" },
                        { left: "Afraid", right: "of", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Unscramble)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "be / He / boss / must / the / .",
                    correct: "He must be the boss ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "study / should / more / You / .",
                    correct: "You should study more ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "at / good / am / I / math / .",
                    correct: "I am good at math ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "might / rain / It / later / .",
                    correct: "It might rain later ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "rains / If / it / stay / we / home / will / .",
                    correct: "If it rains we will stay home ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "myself / I / taught / cook / to / .",
                    correct: "I taught myself to cook ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "themselves / They / project / the / did / .",
                    correct: "They did the project themselves ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Myself", c: false },
                        { t: "Yourself", c: false },
                        { t: "Him", c: true },
                        { t: "Ourselves", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "If", c: false },
                        { t: "When", c: false },
                        { t: "Unless", c: false },
                        { t: "But", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Ad", c: false },
                        { t: "Slogan", c: false },
                        { t: "Logo", c: false },
                        { t: "Tree", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Real", c: false },
                        { t: "True", c: false },
                        { t: "Fact", c: false },
                        { t: "Fake", c: true }
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Drag the correct word to complete the sentence.<br><small style='color:#0077b6'>(Arraste a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "If ice gets hot, it [melts | will | yourself | ourselves].", a: "melts" },
                        { q: "If you study hard, you [will | melts | yourself | ourselves] pass.", a: "will" },
                        { q: "We cooked the dinner [ourselves | will | yourself | melts].", a: "ourselves" },
                        { q: "You must believe in [yourself | will | melts | ourselves].", a: "yourself" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Now it's your turn! Create a slogan and a short description for a campaign to help your school or community.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Agora é a sua vez! Crie um slogan e uma breve descrição para uma campanha para ajudar sua escola ou comunidade.)</span></small>",
            example: "\"Problem: Too much plastic in the cafeteria. Slogan: 'Plastic Free is the Way to Be!' Plan: If students use reusable bottles, we will reduce waste. We will organize the collection ourselves.\"<br><br><small><span style='color:#0077b6'>(\"Problema: Muito plástico na cantina. Slogan: 'Ser Livre de Plástico é o Caminho!' Plano: Se os alunos usarem garrafas reutilizáveis, reduziremos o lixo. Nós mesmos organizaremos a coleta.\")</span></small>",
            prompts: [
                "What is the problem? (Pollution / Bullying / Waste...)<br><small><span style='color:#0077b6'>(Qual é o problema?)</span></small>",
                "What is your slogan? (Catchy phrase)<br><small><span style='color:#0077b6'>(Qual é o seu slogan?)</span></small>",
                "What will happen if people help? (First Conditional: If people help, we will...)<br><small><span style='color:#0077b6'>(O que acontecerá se as pessoas ajudarem?)</span></small>",
                "Who will organize it? (Reflexive: We will do it ourselves...)<br><small><span style='color:#0077b6'>(Quem vai organizar?)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Advertising Vocab)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Topic 1: Advertising & Marketing Verbs ---
                { term: "Advertise", definition: "To draw attention to a product or service to promote sales.", defTrans: "Anunciar / Fazer propaganda", example: "Companies advertise on social media.", audioFront: "TTS: Advertise", audioBack: "TTS: Companies advertise on social media." },
                { term: "Persuade", definition: "To cause someone to do something through reasoning.", defTrans: "Persuadir / Convencer", example: "The ad tries to persuade you to buy.", audioFront: "TTS: Persuade", audioBack: "TTS: The ad tries to persuade you to buy." },
                { term: "Influence", definition: "To have an effect on the character or behavior of someone.", defTrans: "Influenciar", example: "Influencers can influence your style.", audioFront: "TTS: Influence", audioBack: "TTS: Influencers can influence your style." },
                { term: "Promote", definition: "To support or actively encourage a cause or venture.", defTrans: "Promover", example: "We need to promote healthy eating.", audioFront: "TTS: Promote", audioBack: "TTS: We need to promote healthy eating." },
                { term: "Attract", definition: "To cause to come to a place or participate in a venture.", defTrans: "Atrair", example: "Bright colors attract attention.", audioFront: "TTS: Attract", audioBack: "TTS: Bright colors attract attention." },
                { term: "Exaggerate", definition: "To represent something as being larger or better than it really is.", defTrans: "Exagerar", example: "Don't exaggerate the benefits.", audioFront: "TTS: Exaggerate", audioBack: "TTS: Don't exaggerate the benefits." },
                { term: "Compare", definition: "To note the similarity or dissimilarity between.", defTrans: "Comparar", example: "Compare the price before buying.", audioFront: "TTS: Compare", audioBack: "TTS: Compare the price before buying." },
                { term: "Promise", definition: "To assure someone that one will do something.", defTrans: "Prometer", example: "The cream promises to stop aging.", audioFront: "TTS: Promise", audioBack: "TTS: The cream promises to stop aging." },
                { term: "Buy", definition: "To obtain in exchange for payment.", defTrans: "Comprar", example: "I want to buy this product.", audioFront: "TTS: Buy", audioBack: "TTS: I want to buy this product." },
                { term: "Sell", definition: "To give something in exchange for money.", defTrans: "Vender", example: "They sell recycled bags.", audioFront: "TTS: Sell", audioBack: "TTS: They sell recycled bags." },
                { term: "Show", definition: "To allow or cause something to be visible.", defTrans: "Mostrar", example: "The video shows the reality.", audioFront: "TTS: Show", audioBack: "TTS: The video shows the reality." },

                // --- Topic 2: Advertising Nouns & Adjectives ---
                { term: "Advertisement / Ad", definition: "A notice or announcement promoting a product.", defTrans: "Anúncio / Propaganda", example: "I saw a funny ad on TV.", audioFront: "TTS: Advertisement or Ad", audioBack: "TTS: I saw a funny ad on TV." },
                { term: "Brand", definition: "A type of product made by a particular company.", defTrans: "Marca", example: "What is your favorite shoe brand?", audioFront: "TTS: Brand", audioBack: "TTS: What is your favorite shoe brand?" },
                { term: "Product", definition: "An article that is manufactured or refined for sale.", defTrans: "Produto", example: "This product is eco-friendly.", audioFront: "TTS: Product", audioBack: "TTS: This product is eco-friendly." },
                { term: "Service", definition: "The action of helping or doing work for someone.", defTrans: "Serviço", example: "They offer a cleaning service.", audioFront: "TTS: Service", audioBack: "TTS: They offer a cleaning service." },
                { term: "Target Audience", definition: "A particular group at which a product is aimed.", defTrans: "Público-alvo", example: "Teenagers are the target audience.", audioFront: "TTS: Target Audience", audioBack: "TTS: Teenagers are the target audience." },
                { term: "Slogan", definition: "A short and memorable phrase used in advertising.", defTrans: "Slogan / Lema", example: "The slogan is very catchy.", audioFront: "TTS: Slogan", audioBack: "TTS: The slogan is very catchy." },
                { term: "Image", definition: "A representation of the external form of a person or thing.", defTrans: "Imagem", example: "The image looks photoshopped.", audioFront: "TTS: Image", audioBack: "TTS: The image looks photoshopped." },
                { term: "Reality", definition: "The state of things as they actually exist.", defTrans: "Realidade", example: "Ads don't always show reality.", audioFront: "TTS: Reality", audioBack: "TTS: Ads don't always show reality." },
                { term: "Truth", definition: "The quality or state of being true.", defTrans: "Verdade", example: "Tell the truth in your campaign.", audioFront: "TTS: Truth", audioBack: "TTS: Tell the truth in your campaign." },
                { term: "Misleading", definition: "Giving the wrong idea or impression.", defTrans: "Enganoso(a)", example: "That information is misleading.", audioFront: "TTS: Misleading", audioBack: "TTS: That information is misleading." },
                // --- Topic 3: Campaign & Social Action ---
                { term: "Campaign", definition: "An organized course of action to achieve a goal.", defTrans: "Campanha", example: "We started a campaign against bullying.", audioFront: "TTS: Campaign", audioBack: "TTS: We started a campaign against bullying." },
                { term: "Idea", definition: "A thought or suggestion for a possible course of action.", defTrans: "Ideia", example: "That is a great idea!", audioFront: "TTS: Idea", audioBack: "TTS: That is a great idea!" },
                { term: "Goal / Aim", definition: "The object of a person's ambition; a desired result.", defTrans: "Meta / Objetivo", example: "Our goal is to help people.", audioFront: "TTS: Goal or Aim", audioBack: "TTS: Our goal is to help people." },
                { term: "Message", definition: "A significant point or central theme.", defTrans: "Mensagem", example: "The message must be clear.", audioFront: "TTS: Message", audioBack: "TTS: The message must be clear." },
                { term: "Action", definition: "The process of doing something to achieve an aim.", defTrans: "Ação", example: "We need to take action now.", audioFront: "TTS: Action", audioBack: "TTS: We need to take action now." },
                { term: "Impact", definition: "A marked effect or influence.", defTrans: "Impacto", example: "Small acts have a big impact.", audioFront: "TTS: Impact", audioBack: "TTS: Small acts have a big impact." },
                { term: "Solution", definition: "A means of solving a problem.", defTrans: "Solução", example: "We found a solution to the problem.", audioFront: "TTS: Solution", audioBack: "TTS: We found a solution to the problem." },
                { term: "Community", definition: "A group of people living in the same place.", defTrans: "Comunidade", example: "Help your local community.", audioFront: "TTS: Community", audioBack: "TTS: Help your local community." },
                { term: "Create", definition: "To bring something into existence.", defTrans: "Criar", example: "Let's create a poster.", audioFront: "TTS: Create", audioBack: "TTS: Let's create a poster." },
                { term: "Inspire", definition: "To fill someone with the urge to do something creative.", defTrans: "Inspirar", example: "You inspire me to be better.", audioFront: "TTS: Inspire", audioBack: "TTS: You inspire me to be better." },
                { term: "Change", definition: "To make or become different.", defTrans: "Mudar / Mudança", example: "We can change the world.", audioFront: "TTS: Change", audioBack: "TTS: We can change the world." },
                { term: "Volunteer", definition: "To freely offer to do something.", defTrans: "Voluntariar-se / Voluntário", example: "She is a volunteer at the hospital.", audioFront: "TTS: Volunteer", audioBack: "TTS: She is a volunteer at the hospital." },
                { term: "Raise awareness", definition: "To increase knowledge of a situation or fact.", defTrans: "Conscientizar", example: "The video raises awareness about plastic.", audioFront: "TTS: Raise awareness", audioBack: "TTS: The video raises awareness about plastic." },
                { term: "Support", definition: "To give assistance, approval, or encouragement to.", defTrans: "Apoiar / Apoio", example: "Please support our cause.", audioFront: "TTS: Support", audioBack: "TTS: Please support our cause." },
                // --- Topic 4: Reflexive Pronouns ---
                { term: "Myself", definition: "Reflexive pronoun for 'I'.", defTrans: "Eu mesmo(a)", example: "I taught myself to code.", audioFront: "TTS: Myself", audioBack: "TTS: I taught myself to code." },
                { term: "Yourself", definition: "Reflexive pronoun for 'You' (singular).", defTrans: "Você mesmo(a)", example: "Did you hurt yourself?", audioFront: "TTS: Yourself", audioBack: "TTS: Did you hurt yourself?" },
                { term: "Himself", definition: "Reflexive pronoun for 'He'.", defTrans: "Ele mesmo", example: "He introduced himself.", audioFront: "TTS: Himself", audioBack: "TTS: He introduced himself." },
                { term: "Herself", definition: "Reflexive pronoun for 'She'.", defTrans: "Ela mesma", example: "She made the dress herself.", audioFront: "TTS: Herself", audioBack: "TTS: She made the dress herself." },
                { term: "Itself", definition: "Reflexive pronoun for 'It'.", defTrans: "Ele/Ela mesmo(a) (coisa)", example: "The door closed by itself.", audioFront: "TTS: Itself", audioBack: "TTS: The door closed by itself." },
                { term: "Ourselves", definition: "Reflexive pronoun for 'We'.", defTrans: "Nós mesmos(as)", example: "We enjoyed ourselves at the party.", audioFront: "TTS: Ourselves", audioBack: "TTS: We enjoyed ourselves at the party." },
                { term: "Yourselves", definition: "Reflexive pronoun for 'You' (plural).", defTrans: "Vocês mesmos(as)", example: "You can help yourselves to the food.", audioFront: "TTS: Yourselves", audioBack: "TTS: You can help yourselves to the food." },
                { term: "Themselves", definition: "Reflexive pronoun for 'They'.", defTrans: "Eles/Elas mesmos(as)", example: "They organized it themselves.", audioFront: "TTS: Themselves", audioBack: "TTS: They organized it themselves." },

                // --- Topic 5: Grammar Points (Conditionals) ---
                { term: "Zero Conditional", definition: "Structure for facts (If + Present, Present).", defTrans: "Condicional Zero (Fatos)", example: "If you heat ice, it melts.", audioFront: "TTS: Zero Conditional", audioBack: "TTS: If you heat ice, it melts." },
                { term: "First Conditional", definition: "Structure for real possibilities (If + Present, Will).", defTrans: "Primeira Condicional (Possibilidades)", example: "If you study, you will pass.", audioFront: "TTS: First Conditional", audioBack: "TTS: If you study, you will pass." }
            ]
        }
    ], // This closes the steps array

    // ======================================================
    // GLOSSARY (Complete & Paginated)
    // ======================================================
    glossary: [
        // PAGE 1: CONTEXT (Step 1 Tooltips)
        { topic: "Context", term: "ad", definition: "A notice or announcement in a public medium promoting a product.", translation: "Anúncio / Propaganda" },
        { topic: "Context", term: "advertising", definition: "The activity of producing advertisements for commercial products.", translation: "Publicidade" },
        { topic: "Context", term: "reality", definition: "The state of things as they actually exist.", translation: "Realidade" },
        { topic: "Context", term: "persuade", definition: "To cause someone to do something through reasoning or argument.", translation: "Persuadir" },
        { topic: "Context", term: "slogan", definition: "A short and striking or memorable phrase used in advertising.", translation: "Slogan / Lema" },
        { topic: "Context", term: "campaign", definition: "An organized course of action to achieve a particular goal.", translation: "Campanha" },
        { topic: "Context", term: "raise-awareness", definition: "To increase knowledge or perception of a situation or fact.", translation: "Conscientizar / Chamar atenção" },
        { topic: "Context", term: "message", definition: "A significant point or central theme.", translation: "Mensagem" },
        { topic: "Context", term: "help-yourself", definition: "A reflexive expression meaning to take something for oneself.", translation: "Sirva-se / Ajude a si mesmo" },
        { topic: "Context", term: "posters", definition: "A large printed picture used for decoration or advertising.", translation: "Cartazes" },
        { topic: "Context", term: "ourselves", definition: "Reflexive pronoun for 'we'; used to emphasize that we did it alone.", translation: "Nós mesmos" },
        { topic: "Context", term: "start", definition: "To begin an action or process.", translation: "Começar" },
        { topic: "Context", term: "finish", definition: "To bring a task or activity to an end.", translation: "Terminar" },

        // PAGE 2: ADVERTISING VERBS
        { topic: "Ad Verbs", term: "advertise", definition: "To describe or draw attention to a product in a public medium.", translation: "Anunciar / Fazer propaganda" },
        { topic: "Ad Verbs", term: "influence", definition: "To have an effect on the character or behavior of someone.", translation: "Influenciar" },
        { topic: "Ad Verbs", term: "promote", definition: "To support or actively encourage a cause or product.", translation: "Promover" },
        { topic: "Ad Verbs", term: "attract", definition: "To cause something to come to a place.", translation: "Atrair" },
        { topic: "Ad Verbs", term: "exaggerate", definition: "To represent something as being larger or better than it really is.", translation: "Exagerar" },
        { topic: "Ad Verbs", term: "compare", definition: "To estimate or note the similarity between things.", translation: "Comparar" },
        { topic: "Ad Verbs", term: "promise", definition: "To assure someone that one will do something.", translation: "Prometer" },
        { topic: "Ad Verbs", term: "buy", definition: "To obtain in exchange for payment.", translation: "Comprar" },
        { topic: "Ad Verbs", term: "sell", definition: "To give something in exchange for money.", translation: "Vender" },
        { topic: "Ad Verbs", term: "show", definition: "To allow or cause something to be visible.", translation: "Mostrar" },

        // PAGE 3: ADVERTISING NOUNS
        { topic: "Ad Nouns", term: "brand", definition: "A type of product manufactured by a particular company.", translation: "Marca" },
        { topic: "Ad Nouns", term: "product", definition: "An article or substance manufactured for sale.", translation: "Produto" },
        { topic: "Ad Nouns", term: "service", definition: "The action of helping or doing work for someone.", translation: "Serviço" },
        { topic: "Ad Nouns", term: "target-audience", definition: "A particular group at which a product is aimed.", translation: "Público-alvo" },
        { topic: "Ad Nouns", term: "image", definition: "A representation of the external form of a person or thing.", translation: "Imagem" },
        { topic: "Ad Nouns", term: "truth", definition: "The quality or state of being true.", translation: "Verdade" },
        { topic: "Ad Nouns", term: "misleading", definition: "Giving the wrong idea or impression.", translation: "Enganoso(a)" },

        // PAGE 4: SOCIAL ACTION
        { topic: "Social Action", term: "idea", definition: "A thought or suggestion for a possible course of action.", translation: "Ideia" },
        { topic: "Social Action", term: "goal", definition: "The object of a person's ambition or effort; an aim.", translation: "Meta / Objetivo" },
        { topic: "Social Action", term: "action", definition: "The fact or process of doing something to achieve an aim.", translation: "Ação" },
        { topic: "Social Action", term: "impact", definition: "A marked effect or influence.", translation: "Impacto" },
        { topic: "Social Action", term: "solution", definition: "A means of solving a problem.", translation: "Solução" },
        { topic: "Social Action", term: "community", definition: "A group of people living in the same place.", translation: "Comunidade" },
        { topic: "Social Action", term: "create", definition: "To bring something into existence.", translation: "Criar" },
        { topic: "Social Action", term: "inspire", definition: "To fill someone with the urge to do something creative.", translation: "Inspirar" },
        { topic: "Social Action", term: "change", definition: "To make or become different.", translation: "Mudar / Mudança" },
        { topic: "Social Action", term: "volunteer", definition: "To freely offer to do something.", translation: "Voluntariar-se / Voluntário" },
        { topic: "Social Action", term: "support", definition: "To give assistance, approval, or encouragement to.", translation: "Apoiar / Apoio" },

        // PAGE 5: PRONOUNS & CONDITIONALS
        { topic: "Grammar", term: "myself", definition: "Reflexive pronoun for 'I'.", translation: "Eu mesmo(a)" },
        { topic: "Grammar", term: "yourself", definition: "Reflexive pronoun for 'You' (singular).", translation: "Você mesmo(a)" },
        { topic: "Grammar", term: "himself", definition: "Reflexive pronoun for 'He'.", translation: "Ele mesmo" },
        { topic: "Grammar", term: "herself", definition: "Reflexive pronoun for 'She'.", translation: "Ela mesma" },
        { topic: "Grammar", term: "itself", definition: "Reflexive pronoun for 'It'.", translation: "Ele/ela mesmo(a) (coisa)" },
        { topic: "Grammar", term: "ourselves", definition: "Reflexive pronoun for 'We'.", translation: "Nós mesmos(as)" },
        { topic: "Grammar", term: "yourselves", definition: "Reflexive pronoun for 'You' (plural).", translation: "Vocês mesmos(as)" },
        { topic: "Grammar", term: "themselves", definition: "Reflexive pronoun for 'They'.", translation: "Eles/elas mesmos(as)" },
        { topic: "Grammar", term: "zero-conditional", definition: "Structure for general truths (If + Present, Present).", translation: "Condicional Zero (Fatos)" },
        { topic: "Grammar", term: "first-conditional", definition: "Structure for real possibilities (If + Present, Will).", translation: "Primeira Condicional (Possibilidades)" }
    ]
});