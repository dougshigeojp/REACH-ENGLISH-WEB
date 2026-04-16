/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em2-4-10.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em2-4-10", 
    grade: "High School 2nd Grade",       
    bimester: "4",   
    chapter: "10",    
    chapterTitle: "A World of Polymers: Is a Plastic-Free Future Possible?", 
    
    steps:[
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss the science of [polymers](tooltip:polymer) and their environmental [impact](tooltip:impact).<br>• Identify different types of [plastic](tooltip:plastic) and their pros and cons.<br>• Use [phrasal verbs](tooltip:phrasal-verbs) with CALL and GET in scientific and social contexts.<br>• Form [Indirect Questions](tooltip:indirect-question) to communicate more politely and thoughtfully.<br>• Debate the possibility of a [plastic-free](tooltip:plastic-free) future.",
            welcome: "Hello, future [scientists](tooltip:scientist) and [activists](tooltip:activist)! I'm Mr. D!<br>Welcome to a journey into the very building blocks of our modern [world](tooltip:world)! From your favorite sneakers to the [device](tooltip:device) you are using right now, we are surrounded by [polymers](tooltip:polymer). But does this \"supermaterial\" have a dark side? Today, we are going to open the door to the science of plastics and their global [pollution](tooltip:pollution) challenge. You will learn how to ask complex questions with elegance and how to [get](tooltip:get-across) your ideas [across](tooltip:get-across) effectively. Are you ready to help [reshape](tooltip:reshape) our future? Let’s dive in!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss the science of polymers and their environmental impact. Identify different types of plastic and their pros and cons. Use phrasal verbs with CALL and GET in scientific and social contexts. Form Indirect Questions to communicate more politely and thoughtfully. Debate the possibility of a plastic-free future.",
                welcome: "TTS: Hello, future scientists and activists! I'm Mr. D! Welcome to a journey into the very building blocks of our modern world! From your favorite sneakers to the device you are using right now, we are surrounded by polymers. But does this supermaterial have a dark side? Today, we are going to open the door to the science of plastics and their global pollution challenge. You will learn how to ask complex questions with elegance and how to get your ideas across effectively. Are you ready to help reshape our future? Let’s dive in!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Celine and Albert are standing on a small bridge over a local river. Celine looks distressed as she points to the water, while Albert is taking photos with his phone for a school project.", 
            contextAudio: "audio/em2-4-10/step1.mp3",
            dialogue:[
                { 
                    speaker: "Celine", 
                    text: "Albert, have you seen the river lately? It’s full of [plastic](tooltip:plastic) bottles and bags. It’s terrible! I [wonder](tooltip:wonder) about it." 
                },
                { 
                    speaker: "Albert", 
                    text: "I know. It feels like such a big problem to [solve](tooltip:solve). I’d like to know [how we can get rid of](tooltip:how-we-can-get-rid-of) all that trash. We can’t just [call off](tooltip:call-off) our responsibility." 
                },
                { 
                    speaker: "Celine", 
                    text: "Exactly. This situation [calls for](tooltip:call-for) innovative solutions. We should [get together](tooltip:get-together) with other [students](tooltip:student) and organize a [cleanup](tooltip:cleanup) day." 
                },
                { 
                    speaker: "Albert", 
                    text: "That's a good idea. But first, [do you have any idea](tooltip:do-you-have-any-idea) where all this plastic comes from? Is it [single-use](tooltip:single-use) items from the local market?" 
                },
                { 
                    speaker: "Celine", 
                    text: "I'm not sure. We could ask Mrs. Canales. [I bet she knows](tooltip:i-bet-she-knows) what the main sources of pollution are." 
                },
                { 
                    speaker: "Albert", 
                    text: "Perfect. If we understand the source, we can try to [get](tooltip:get-across) our ideas [across](tooltip:get-across) to the school [community](tooltip:community) more effectively. We need to find [materials](tooltip:material) that are [biodegradable](tooltip:biodegradable)." 
                },
                { 
                    speaker: "Celine", 
                    text: "I agree. [Could you tell me](tooltip:could-you-tell-me) what material it uses? I mean, [3D printing](tooltip:3d-printing) uses [polymers](tooltip:polymer), right? Maybe we can find a [reusable](tooltip:reusable) alternative." 
                },
                { 
                    speaker: "Albert", 
                    text: "Let's find out. [The question is whether](tooltip:the-question-is-whether) we can [get by](tooltip:get-by) without so much [disposable](tooltip:disposable) material in our lives." 
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
                    title: "Plastics & Environment",
                    audio: "TTS: Polymer. Plastic. Material. Durable. Lightweight. Single-use. Fossil fuels. To decompose. Landfill. Pollution. To recycle. Reusable. Disposable. 3D Printing. Biodegradable. Global.",
                    items:[
                        { term: "Polymer", trans: "Polímero" },
                        { term: "Plastic", trans: "Plástico" },
                        { term: "Material", trans: "Material" },
                        { term: "Durable", trans: "Durável" },
                        { term: "Lightweight", trans: "Leve" },
                        { term: "Single-use", trans: "De uso único" },
                        { term: "Fossil fuels", trans: "Combustíveis fósseis" },
                        { term: "To decompose", trans: "Decompor-se" },
                        { term: "Landfill", trans: "Aterro sanitário" },
                        { term: "Pollution", trans: "Poluição" },
                        { term: "To recycle", trans: "Reciclar" },
                        { term: "Reusable", trans: "Reutilizável" },
                        { term: "Disposable", trans: "Descartável" },
                        { term: "3D Printing", trans: "Impressão 3D" },
                        { term: "Biodegradable", trans: "Biodegradável" },
                        { term: "Global", trans: "Global / Mundial" }
                    ]
                },
                {
                    title: "Types of Plastic",
                    audio: "TTS: PET - Polyethylene Terephthalate. PE - Polyethylene. PVC - Polyvinyl Chloride. PP - Polypropylene. PS - Polystyrene. PC - Polycarbonate. PU - Polyurethane.",
                    items:[
                        { term: "PET - Polyethylene Terephthalate", trans: "PET - Tereftalato de polietileno" },
                        { term: "PE - Polyethylene", trans: "PE - Polietileno" },
                        { term: "PVC - Polyvinyl Chloride", trans: "PVC - Policloreto de vinila" },
                        { term: "PP - Polypropylene", trans: "PP - Polipropileno" },
                        { term: "PS - Polystyrene", trans: "PS - Poliestireno" },
                        { term: "PC - Polycarbonate", trans: "PC - Policarbonato" },
                        { term: "PU - Polyurethane", trans: "PU - Poliuretano" }
                    ]
                },
                {
                    title: "Phrasal Verbs: CALL",
                    audio: "TTS: Call for. Call off. Call on. Call out. Call back. Call in.",
                    items:[
                        { term: "Call for", trans: "Exigir / Requerer" },
                        { term: "Call off", trans: "Cancelar" },
                        { term: "Call on", trans: "Recorrer a / Pedir ajuda" },
                        { term: "Call out", trans: "Criticar / Expor" },
                        { term: "Call back", trans: "Ligar de volta" },
                        { term: "Call in", trans: "Chamar (um especialista)" }
                    ]
                },
                {
                    title: "Phrasal Verbs: GET",
                    audio: "TTS: Get rid of. Get by. Get around to. Get together. Get across. Get through.",
                    items:[
                        { term: "Get rid of", trans: "Livrar-se de" },
                        { term: "Get by", trans: "Dar um jeito / Se virar" },
                        { term: "Get around to", trans: "Finalmente fazer algo" },
                        { term: "Get together", trans: "Reunir-se" },
                        { term: "Get across", trans: "Comunicar / Fazer entender" },
                        { term: "Get through", trans: "Superar / Passar por" }
                    ]
                },
                {
                    title: "Indirect Expressions",
                    audio: "TTS: Could you tell me. I wonder if. Do you know where. I'd like to know. Can you explain why. The question is whether. Do you have any idea. I bet she knows.",
                    items:[
                        { term: "Could you tell me...", trans: "Você poderia me dizer..." },
                        { term: "I wonder if...", trans: "Eu me pergunto se..." },
                        { term: "Do you know where...", trans: "Você sabe onde..." },
                        { term: "I'd like to know...", trans: "Eu gostaria de saber..." },
                        { term: "Can you explain why...", trans: "Você pode explicar por que..." },
                        { term: "The question is whether...", trans: "A questão é se..." },
                        { term: "Do you have any idea...", trans: "Você tem alguma ideia..." },
                        { term: "I bet she knows...", trans: "Eu aposto que ela sabe..." }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups:[
                {
                    title: "Plastics & Environment",
                    audio: "TTS: A polymer is a long chain of repeating molecules. Most plastic is made from petroleum. Is this material strong enough for the project? This reusable cup is very durable. Plastic is a lightweight material used in planes. We should avoid single-use items like straws. Plastic production relies heavily on fossil fuels. Plastic can take 500 years to decompose. Millions of bottles end up in the landfill every day. Ocean pollution is a global issue. Can you show me how to recycle this properly? Use a reusable water bottle to help the planet. Disposable utensils are very convenient but wasteful. 3D Printing allows us to create custom parts. This bag is biodegradable and safe for the soil. We need a global solution for climate change.",
                    items:[
                        { term: "Polymer", sent: "A polymer is a long chain of repeating molecules.", trans: "<span style='color:#0077b6'>Um polímero é uma longa cadeia de moléculas repetidas.</span>" },
                        { term: "Plastic", sent: "Most plastic is made from petroleum.", trans: "<span style='color:#0077b6'>A maioria do plástico é feita de petróleo.</span>" },
                        { term: "Material", sent: "Is this material strong enough for the project?", trans: "<span style='color:#0077b6'>Este material é forte o suficiente para o projeto?</span>" },
                        { term: "Durable", sent: "This reusable cup is very durable.", trans: "<span style='color:#0077b6'>Este copo reutilizável é muito durável.</span>" },
                        { term: "Lightweight", sent: "Plastic is a lightweight material used in planes.", trans: "<span style='color:#0077b6'>O plástico é um material leve usado em aviões.</span>" },
                        { term: "Single-use", sent: "We should avoid single-use items like straws.", trans: "<span style='color:#0077b6'>Devemos evitar itens de uso único como canudos.</span>" },
                        { term: "Fossil fuels", sent: "Plastic production relies heavily on fossil fuels.", trans: "<span style='color:#0077b6'>A produção de plástico depende muito de combustíveis fósseis.</span>" },
                        { term: "To decompose", sent: "Plastic can take 500 years to decompose.", trans: "<span style='color:#0077b6'>O plástico pode levar 500 anos para se decompor.</span>" },
                        { term: "Landfill", sent: "Millions of bottles end up in the landfill every day.", trans: "<span style='color:#0077b6'>Milhões de garrafas param no aterro sanitário todos os dias.</span>" },
                        { term: "Pollution", sent: "Ocean pollution is a global issue.", trans: "<span style='color:#0077b6'>A poluição do oceano é um problema global.</span>" },
                        { term: "To recycle", sent: "Can you show me how to recycle this properly?", trans: "<span style='color:#0077b6'>Você pode me mostrar como reciclar isso corretamente?</span>" },
                        { term: "Reusable", sent: "Use a reusable water bottle to help the planet.", trans: "<span style='color:#0077b6'>Use uma garrafa de água reutilizável para ajudar o planeta.</span>" },
                        { term: "Disposable", sent: "Disposable utensils are very convenient but wasteful.", trans: "<span style='color:#0077b6'>Utensílios descartáveis são muito convenientes, mas desperdiçam muito.</span>" },
                        { term: "3D Printing", sent: "3D Printing allows us to create custom parts.", trans: "<span style='color:#0077b6'>A impressão 3D nos permite criar peças personalizadas.</span>" },
                        { term: "Biodegradable", sent: "This bag is biodegradable and safe for the soil.", trans: "<span style='color:#0077b6'>Esta sacola é biodegradável e segura para o solo.</span>" },
                        { term: "Global", sent: "We need a global solution for climate change.", trans: "<span style='color:#0077b6'>Precisamos de uma solução global para a mudança climática.</span>" }
                    ]
                },
                {
                    title: "Types of Plastic",
                    audio: "TTS: PET is the most commonly recycled plastic. Grocery bags are usually made of PE. These water pipes are made of durable PVC. PP is a heat-resistant plastic used for pots. PS is often used to make styrofoam. My eyeglasses have strong PC lenses. Many sponges are made from PU foam.",
                    items:[
                        { term: "PET", sent: "PET is the most commonly recycled plastic like bottles.", trans: "<span style='color:#0077b6'>PET é o plástico mais comumente reciclado como garrafas.</span>" },
                        { term: "PE", sent: "Grocery bags are usually made of PE. It is also used for plastic wrap.", trans: "<span style='color:#0077b6'>Sacolas de mercado são geralmente feitas de PE. Também é usado para filme plástico.</span>" },
                        { term: "PVC", sent: "Water pipes and window frames are made of PVC.", trans: "<span style='color:#0077b6'>Canos de água e estruturas de janelas são feitos de PVC.</span>" },
                        { term: "PP", sent: "PP is a heat-resistant plastic used for pots.", trans: "<span style='color:#0077b6'>PP é um plástico resistente ao calor usado para potes.</span>" },
                        { term: "PS", sent: "PS is often used to make styrofoam.", trans: "<span style='color:#0077b6'>PS é frequentemente usado para fazer isopor.</span>" },
                        { term: "PC", sent: "PC is used for eyeglasses.", trans: "<span style='color:#0077b6'>PC é usado para óculos.</span>" },
                        { term: "PU", sent: "Many sponges are made from PU foam.", trans: "<span style='color:#0077b6'>Muitas esponjas são feitas de espuma de PU.</span>" }
                    ]
                },
                {
                    title: "Phrasal Verbs: CALL",
                    audio: "TTS: This crisis calls for urgent action. They called off the event because of the storm. We should call on Mr. Davison for help. She called out the company for wasting water. I left a message, I hope he calls back soon. We need to call in a specialist.",
                    items:[
                        { term: "Call for", sent: "This crisis calls for urgent action.", trans: "<span style='color:#0077b6'>Esta crise exige uma ação urgente.</span>" },
                        { term: "Call off", sent: "They called off the event because of the storm.", trans: "<span style='color:#0077b6'>Eles cancelaram o evento por causa da tempestade.</span>" },
                        { term: "Call on", sent: "We should call on Mr. Davison for help.", trans: "<span style='color:#0077b6'>Deveríamos recorrer ao Sr. Davison para obter ajuda.</span>" },
                        { term: "Call out", sent: "She called out the company for wasting water.", trans: "<span style='color:#0077b6'>Ela criticou a empresa por desperdiçar água.</span>" },
                        { term: "Call back", sent: "I left a message, I hope he calls back soon.", trans: "<span style='color:#0077b6'>Deixei uma mensagem, espero que ele ligue de volta logo.</span>" },
                        { term: "Call in", sent: "We need to call in a specialist.", trans: "<span style='color:#0077b6'>Precisamos chamar um especialista.</span>" }
                    ]
                },
                {
                    title: "Phrasal Verbs: GET",
                    audio: "TTS: How can we get rid of this waste? It's hard, but we can get by with less. I finally got around to sorting my trash this morning. Let's get together to discuss the project. It’s hard to get the message across. We will get through it if we work together.",
                    items:[
                        { term: "Get rid of", sent: "How can we get rid of this waste?", trans: "<span style='color:#0077b6'>Como podemos nos livrar desse lixo?</span>" },
                        { term: "Get by", sent: "It's hard, but we can get by with less.", trans: "<span style='color:#0077b6'>É difícil, mas podemos dar um jeito com menos.</span>" },
                        { term: "Get around to", sent: "I finally got around to sorting my trash this morning.", trans: "<span style='color:#0077b6'>Eu finalmente arrumei tempo para separar meu lixo esta manhã.</span>" },
                        { term: "Get together", sent: "Let's get together to discuss the project.", trans: "<span style='color:#0077b6'>Vamos nos reunir para discutir o projeto.</span>" },
                        { term: "Get across", sent: "It’s hard to get the message across.", trans: "<span style='color:#0077b6'>É difícil fazer a mensagem ser entendida.</span>" },
                        { term: "Get through", sent: "We will get through it if we work together.", trans: "<span style='color:#0077b6'>Nós vamos superar isso se trabalharmos juntos.</span>" }
                    ]
                },
                {
                    title: "Indirect Expressions",
                    audio: "TTS: Could you tell me if this bottle is PET? I wonder if a plastic-free world is possible. Do you know where the landfill is? I'd like to know how 3D printing works. Can you explain why recycling is so important? The question is whether we can change our habits. Do you have any idea where this comes from? I bet she knows the answer.",
                    items:[
                        { term: "Could you tell me...", sent: "Could you tell me if this bottle is PET?", trans: "<span style='color:#0077b6'>Você poderia me dizer se esta garrafa é PET?</span>" },
                        { term: "I wonder if...", sent: "I wonder if a plastic-free world is possible.", trans: "<span style='color:#0077b6'>Eu me pergunto se um mundo sem plástico é possível.</span>" },
                        { term: "Do you know where...", sent: "Do you know where the landfill is?", trans: "<span style='color:#0077b6'>Você sabe onde fica o aterro sanitário?</span>" },
                        { term: "I'd like to know...", sent: "I'd like to know how 3D printing works.", trans: "<span style='color:#0077b6'>Eu gostaria de saber como a impressão 3D funciona.</span>" },
                        { term: "Can you explain why...", sent: "Can you explain why recycling is so important?", trans: "<span style='color:#0077b6'>Você pode explicar por que a reciclagem é tão importante?</span>" },
                        { term: "The question is whether...", sent: "The question is whether we can change our habits.", trans: "<span style='color:#0077b6'>A questão é se podemos mudar nossos hábitos.</span>" },
                        { term: "Do you have any idea...", sent: "Do you have any idea where this comes from?", trans: "<span style='color:#0077b6'>Você tem alguma ideia de onde isso vem?</span>" },
                        { term: "I bet she knows...", sent: "I bet she knows the answer.", trans: "<span style='color:#0077b6'>Eu aposto que ela sabe a resposta.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (Tabbed Version - Exactly 50 MCQs)
            drillGroups:[
                {
                    title: "Plastics & Environment",
                    drills:[
                        { type: "mcq", q: "A _______ is a very long molecule made of repeating parts.", options:[{t: "Polymer", c: true}, {t: "Landfill", c: false}, {t: "Pollution", c: false}] },
                        { type: "mcq", q: "Most _______ is made from petroleum.", options:[{t: "Plastic", c: true}, {t: "Biodegradable", c: false}, {t: "Reusable", c: false}] },
                        { type: "mcq", q: "Is this _______ strong enough for the project?", options:[{t: "Disposable", c: false}, {t: "Material", c: true}, {t: "Landfill", c: false}] },
                        { type: "mcq", q: "A reusable cup is usually very _______.", options:[{t: "Durable", c: true}, {t: "Single-use", c: false}, {t: "Pollution", c: false}] },
                        { type: "mcq", q: "Plastic is a _______ material often used in airplanes to save fuel.", options:[{t: "Lightweight", c: true}, {t: "Fossil fuel", c: false}, {t: "Decompose", c: false}] },
                        { type: "mcq", q: "We should avoid _______ items like plastic straws.", options:[{t: "Reusable", c: false}, {t: "Single-use", c: true}, {t: "Durable", c: false}] },
                        { type: "mcq", q: "Plastic production relies heavily on _______ like coal and oil.", options:[{t: "Fossil fuels", c: true}, {t: "3D Printing", c: false}, {t: "Biodegradable", c: false}] },
                        { type: "mcq", q: "It takes hundreds of years for plastic to _______ in nature.", options:[{t: "Decompose", c: true}, {t: "Recycle", c: false}, {t: "Reuse", c: false}] },
                        { type: "mcq", q: "Millions of bottles end up in the _______ every single day.", options:[{t: "Landfill", c: true}, {t: "Polymer", c: false}, {t: "Durable", c: false}] },
                        { type: "mcq", q: "Ocean _______ is a huge problem caused by plastic waste.", options:[{t: "Pollution", c: true}, {t: "Material", c: false}, {t: "Lightweight", c: false}] },
                        { type: "mcq", q: "Can you show me how to _______ this bottle properly?", options:[{t: "Recycle", c: true}, {t: "Decompose", c: false}, {t: "Landfill", c: false}] },
                        { type: "mcq", q: "A glass water bottle is _______.", options:[{t: "Reusable", c: true}, {t: "Single-use", c: false}, {t: "Disposable", c: false}] },
                        { type: "mcq", q: "_______ utensils are convenient but create too much waste.", options:[{t: "Durable", c: false}, {t: "Disposable", c: true}, {t: "Biodegradable", c: false}] },
                        { type: "mcq", q: "_______ allows us to create custom parts layer by layer.", options:[{t: "3D Printing", c: true}, {t: "Pollution", c: false}, {t: "Fossil fuels", c: false}] },
                        { type: "mcq", q: "A paper bag is usually _______ and safe for the soil.", options:[{t: "Biodegradable", c: true}, {t: "Plastic", c: false}, {t: "Polymer", c: false}] },
                        { type: "mcq", q: "We need a _______ solution because this affects the whole world.", options:[{t: "Global", c: true}, {t: "Disposable", c: false}, {t: "Single-use", c: false}] }
                    ]
                },
                {
                    title: "Types of Plastic",
                    drills:[
                        { type: "mcq", q: "Clear plastic water and soda bottles are usually made of _______.", options:[{t: "PET", c: true}, {t: "PVC", c: false}, {t: "PU", c: false}] },
                        { type: "mcq", q: "Grocery bags are frequently made of _______.", options:[{t: "PE", c: true}, {t: "PC", c: false}, {t: "PS", c: false}] },
                        { type: "mcq", q: "Water pipes and vinyl flooring are made from durable _______.", options:[{t: "PVC", c: true}, {t: "PP", c: false}, {t: "PET", c: false}] },
                        { type: "mcq", q: "Yogurt pots require a heat-resistant plastic like _______.", options:[{t: "PP", c: true}, {t: "PU", c: false}, {t: "PS", c: false}] },
                        { type: "mcq", q: "Styrofoam cups are made of _______.", options:[{t: "PS", c: true}, {t: "PE", c: false}, {t: "PC", c: false}] },
                        { type: "mcq", q: "Eyeglasses have strong lenses made of _______.", options:[{t: "PC", c: true}, {t: "PVC", c: false}, {t: "PP", c: false}] },
                        { type: "mcq", q: "Sponges and foams are often made from _______.", options:[{t: "PU", c: true}, {t: "PET", c: false}, {t: "PS", c: false}] }
                    ]
                },
                {
                    title: "Phrasal Verbs (CALL & GET)",
                    drills:[
                        { type: "mcq", q: "This pollution crisis _______ urgent action from the government.", options:[{t: "calls for", c: true}, {t: "calls off", c: false}, {t: "calls back", c: false}] },
                        { type: "mcq", q: "They had to _______ the beach cleanup due to the storm.", options:[{t: "call off", c: true}, {t: "call in", c: false}, {t: "get rid of", c: false}] },
                        { type: "mcq", q: "We should _______ scientists to find better alternatives.", options:[{t: "call on", c: true}, {t: "get away", c: false}, {t: "call out", c: false}] },
                        { type: "mcq", q: "She _______ the company for their excessive packaging.", options:[{t: "called out", c: true}, {t: "got by", c: false}, {t: "called back", c: false}] },
                        { type: "mcq", q: "I hope the expert _______ you _______ soon.", options:[{t: "calls / back", c: true}, {t: "gets / together", c: false}, {t: "calls / in", c: false}] },
                        { type: "mcq", q: "We need to _______ a specialist to fix the system.", options:[{t: "call in", c: true}, {t: "call off", c: false}, {t: "get rid of", c: false}] },
                        { type: "mcq", q: "How can we _______ all this plastic waste in the river?", options:[{t: "get rid of", c: true}, {t: "get together", c: false}, {t: "call on", c: false}] },
                        { type: "mcq", q: "It's hard, but we can _______ with fewer single-use plastics.", options:[{t: "get by", c: true}, {t: "get across", c: false}, {t: "call off", c: false}] },
                        { type: "mcq", q: "I finally _______ sorting my trash for recycling this morning.", options:[{t: "got around to", c: true}, {t: "got through", c: false}, {t: "called in", c: false}] },
                        { type: "mcq", q: "Let's _______ this weekend to organize a cleanup day.", options:[{t: "get together", c: true}, {t: "get rid of", c: false}, {t: "call out", c: false}] },
                        { type: "mcq", q: "It’s hard to _______ the message of sustainability to everyone.", options:[{t: "get across", c: true}, {t: "get by", c: false}, {t: "call back", c: false}] },
                        { type: "mcq", q: "We will _______ this environmental challenge if we work as a team.", options:[{t: "get through", c: true}, {t: "call off", c: false}, {t: "get around to", c: false}] }
                    ]
                },
                {
                    title: "Indirect Expressions",
                    drills:[
                        { type: "mcq", q: "_______ if this bottle is made of PET?", options:[{t: "Could you tell me", c: true}, {t: "I wonder if", c: false}, {t: "I bet she knows", c: false}] },
                        { type: "mcq", q: "_______ a plastic-free world is actually possible.", options:[{t: "I wonder if", c: true}, {t: "Do you know where", c: false}, {t: "Can you explain why", c: false}] },
                        { type: "mcq", q: "_______ the nearest landfill is located?", options:[{t: "Do you know where", c: true}, {t: "I'd like to know", c: false}, {t: "The question is whether", c: false}] },
                        { type: "mcq", q: "_______ how exactly 3D printing works.", options:[{t: "I'd like to know", c: true}, {t: "Could you tell me", c: false}, {t: "Can you explain why", c: false}] },
                        { type: "mcq", q: "_______ recycling is so important for the ocean?", options:[{t: "Can you explain why", c: true}, {t: "I wonder if", c: false}, {t: "I'd like to know", c: false}] },
                        { type: "mcq", q: "_______ we can change our consumption habits in time.", options:[{t: "The question is whether", c: true}, {t: "Do you have any idea", c: false}, {t: "Do you know where", c: false}] },
                        { type: "mcq", q: "_______ where all this trash comes from?", options:[{t: "Do you have any idea", c: true}, {t: "I bet she knows", c: false}, {t: "I'd like to know", c: false}] },
                        { type: "mcq", q: "Let's ask the teacher. _______ the main sources of pollution are.", options:[{t: "I bet she knows", c: true}, {t: "Can you explain why", c: false}, {t: "The question is whether", c: false}] },
                        { type: "mcq", q: "_______ if this bag is biodegradable or not?", options:[{t: "Could you tell me", c: true}, {t: "I'd like to know", c: false}, {t: "I wonder if", c: false}] },
                        { type: "mcq", q: "_______ we can get by without disposable plastics.", options:[{t: "The question is whether", c: true}, {t: "Do you know where", c: false}, {t: "Can you explain why", c: false}] },
                        { type: "mcq", q: "_______ how to recycle these PC lenses properly?", options:[{t: "Do you have any idea", c: true}, {t: "I wonder if", c: false}, {t: "I'd like to know", c: false}] },
                        { type: "mcq", q: "_______ a new solution will be presented tomorrow.", options:[{t: "I wonder if", c: true}, {t: "Could you tell me", c: false}, {t: "Do you know where", c: false}] },
                        { type: "mcq", q: "_______ the new environmental laws work.", options:[{t: "I'd like to know", c: true}, {t: "Do you have any idea", c: false}, {t: "Can you explain why", c: false}] },
                        { type: "mcq", q: "_______ it takes 500 years for this material to decompose?", options:[{t: "Can you explain why", c: true}, {t: "The question is whether", c: false}, {t: "I bet she knows", c: false}] },
                        { type: "mcq", q: "_______ the local recycling center is?", options:[{t: "Do you know where", c: true}, {t: "I wonder if", c: false}, {t: "The question is whether", c: false}] }
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
                    title: "Indirect Questions (Wh- Words)",
                    audio: "TTS: We use indirect questions, also called embedded questions, to be more polite, formal, or less confrontational. They are questions inside another statement or question. In these cases, the word order changes to a normal statement, which is Subject plus Verb. We do NOT use the auxiliary verbs do, does, or did. For example, 'Why is plastic a problem?' becomes 'Can you explain why plastic is a problem?'",
                    explanation: "We use indirect questions (embedded questions) to be more polite, formal, or less confrontational. They are questions inside another statement. The word order changes to a normal statement (<b>Subject + Verb</b>). We <b>do NOT</b> use the auxiliary verbs <i>do, does, or did</i>.<br><br><span style='color:#0077b6; font-style:italic;'>(Nós usamos perguntas indiretas para sermos mais educados, formais ou menos diretos. Elas são perguntas dentro de outra frase. A ordem das palavras muda para a de uma frase afirmativa (<b>Sujeito + Verbo</b>). <b>NÃO</b> usamos os auxiliares do, does ou did.)</span>",
                    samples:[
                        { en: "<b>Direct:</b> Why <b>is plastic</b> a problem? <br><b>Indirect:</b> Can you explain why <b>plastic is</b> a problem?", pt: "<span style='color:#0077b6'>(Você pode explicar por que o plástico é um problema?)</span>" },
                        { en: "<b>Direct:</b> How <b>does 3D printing work</b>? <br><b>Indirect:</b> I'd like to know how <b>3D printing works</b>.", pt: "<span style='color:#0077b6'>(Gostaria de saber como a impressão 3D funciona. *Note que o 'does' some e o verbo ganha 's')</span>" },
                        { en: "<b>Direct:</b> Where <b>do bags end up</b>? <br><b>Indirect:</b> Do you know where all the <b>bags end up</b>?", pt: "<span style='color:#0077b6'>(Você sabe onde as sacolas vão parar?)</span>" },
                        { en: "<b>Direct:</b> When <b>did they call off</b> the cleanup? <br><b>Indirect:</b> I wonder when <b>they called off</b> the cleanup.", pt: "<span style='color:#0077b6'>(Eu me pergunto quando eles cancelaram a limpeza. *O 'did' some e o verbo vai pro passado)</span>" }
                    ]
                },
                {
                    title: "Indirect Questions (Yes/No)",
                    audio: "TTS: When the direct question is a Yes or No question starting with a verb, we use 'if' or 'whether' to introduce the indirect question. The word order also follows the Subject plus Verb pattern. For example: 'Is a plastic-free world possible?' becomes 'I wonder if a plastic-free world is possible.'",
                    explanation: "When the direct question is a Yes/No question (it starts with an auxiliary verb or 'to be'), we use <b>if</b> or <b>whether</b> to connect it to the introductory phrase. The word order stays <b>Subject + Verb</b>.<br><br><span style='color:#0077b6; font-style:italic;'>(Quando a pergunta direta é de Sim/Não, usamos <b>if</b> ou <b>whether (se)</b> para introduzir a pergunta indireta. A ordem das palavras também segue o padrão Sujeito + Verbo.)</span>",
                    samples:[
                        { en: "<b>Direct:</b> <b>Is</b> a plastic-free world possible? <br><b>Indirect:</b> I wonder <b>if a plastic-free world is</b> possible.", pt: "<span style='color:#0077b6'>(Eu me pergunto se um mundo sem plástico é possível.)</span>" },
                        { en: "<b>Direct:</b> <b>Can</b> we get by without PET? <br><b>Indirect:</b> The question is <b>whether we can</b> get by without PET.", pt: "<span style='color:#0077b6'>(A questão é se conseguimos nos virar sem PET.)</span>" },
                        { en: "<b>Direct:</b> <b>Does</b> this material decompose? <br><b>Indirect:</b> I'd like to know <b>if this material decomposes</b>.", pt: "<span style='color:#0077b6'>(Gostaria de saber se este material se decompõe.)</span>" },
                        { en: "<b>Direct:</b> <b>Are</b> they using fossil fuels? <br><b>Indirect:</b> Could you tell me <b>whether they are using</b> fossil fuels?", pt: "<span style='color:#0077b6'>(Você poderia me dizer se eles estão usando combustíveis fósseis?)</span>" }
                    ]
                },
                {
                    title: "Common Introductory Phrases",
                    audio: "TTS: We use specific phrases to introduce an indirect question politely. Some examples are: Could you tell me, Do you know, I wonder, I'd like to know, The question is, Can you explain, and Do you have any idea.",
                    explanation: "These are the most common phrases used to start an indirect question. Some of them make the sentence a question (requiring a question mark), while others make it a statement (requiring a period).<br><br><span style='color:#0077b6; font-style:italic;'>(Estas são as frases mais usadas para iniciar uma pergunta indireta. Algumas as transformam em perguntas (com ponto de interrogação), outras em afirmações (com ponto final).)</span>",
                    samples:[
                        { en: "<b>Could you tell me...?</b> (Polite request)", pt: "<span style='color:#0077b6'>(Você poderia me dizer...? *Leva ponto de interrogação)</span>" },
                        { en: "<b>Do you know...? / Do you have any idea...?</b> (Direct inquiry)", pt: "<span style='color:#0077b6'>(Você sabe...? / Você tem alguma ideia...? *Leva ponto de interrogação)</span>" },
                        { en: "<b>I wonder... / I'd like to know...</b> (Expressing curiosity)", pt: "<span style='color:#0077b6'>(Eu me pergunto... / Eu gostaria de saber... *Leva ponto final)</span>" },
                        { en: "<b>Can you explain...?</b> (Asking for logic)", pt: "<span style='color:#0077b6'>(Você pode explicar...? *Leva ponto de interrogação)</span>" },
                        { en: "<b>The question is...</b> (Stating a dilemma)", pt: "<span style='color:#0077b6'>(A questão é... *Leva ponto final)</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups:[
                {
                    title: "Dialogue 1: Exploring Technology",
                    audio: "audio/em2-4-10/step3_dialogue1.mp3",
                    lines:[
                        { 
                            speaker: "Albert", 
                            text: "Mrs. Canales, I was reading about [3D printing](tooltip:3d-printing).[Could you tell me](tooltip:could-you-tell-me) what material it uses?", 
                            pt: "<span style='color:#0077b6'>(Sra. Canales, eu estava lendo sobre impressão 3D. Você poderia me dizer que material ela usa?)</span>" 
                        },
                        { 
                            speaker: "Mrs. Canales", 
                            text: "That's a great question, Albert. [I'd like to know](tooltip:id-like-to-know) if you realize how it can change the world? It could reduce waste massively.", 
                            pt: "<span style='color:#0077b6'>(Essa é uma ótima pergunta, Albert. Gostaria de saber se você percebe como isso pode mudar o mundo? Poderia reduzir o lixo massivamente.)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Environmental Solutions",
                    audio: "audio/em2-4-10/step3_dialogue2.mp3",
                    lines:[
                        { 
                            speaker: "Celine", 
                            text: "Albert, look at the river! [Do you have any idea](tooltip:do-you-have-any-idea) where all this plastic comes from?", 
                            pt: "<span style='color:#0077b6'>(Albert, olhe para o rio! Você tem alguma ideia de onde vem todo esse plástico?)</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I'm not sure. [The question is whether](tooltip:the-question-is-whether) we can [get together](tooltip:get-together) to organize a [cleanup](tooltip:cleanup) day. We need to [get our ideas across](tooltip:get-across).", 
                            pt: "<span style='color:#0077b6'>(Não tenho certeza. A questão é se podemos nos reunir para organizar um dia de limpeza. Precisamos fazer com que nossas ideias sejam compreendidas.)</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice (Tabbed Version - Exactly 40 MCQs)
            grammarDrillGroups:[
                {
                    title: "Indirect Wh- Questions",
                    drills:[
                        { type: "mcq", q: "Direct: 'Why is PET plastic so common?' &rarr; Indirect: 'I'd like to know _______ common.'", options:[{t: "why is PET plastic so", c: false}, {t: "why PET plastic is so", c: true}, {t: "why plastic PET is so", c: false}] },
                        { type: "mcq", q: "Direct: 'How much does this material cost?' &rarr; Indirect: 'Could you tell me _______?'", options:[{t: "how much does this material cost", c: false}, {t: "how much this material costs", c: true}, {t: "how much costs this material", c: false}] },
                        { type: "mcq", q: "Direct: 'Where is the nearest landfill?' &rarr; Indirect: 'Do you know _______?'", options:[{t: "where is the nearest landfill", c: false}, {t: "where the nearest landfill is", c: true}, {t: "where nearest landfill is", c: false}] },
                        { type: "mcq", q: "Direct: 'What are the main sources of pollution?' &rarr; Indirect: 'Can you explain _______?'", options:[{t: "what the main sources of pollution are", c: true}, {t: "what are the main sources of pollution", c: false}, {t: "what are main sources", c: false}] },
                        { type: "mcq", q: "Direct: 'When did they discover this polymer?' &rarr; Indirect: 'I wonder _______.'", options:[{t: "when did they discover this polymer", c: false}, {t: "when they discovered this polymer", c: true}, {t: "when discovered they this polymer", c: false}] },
                        { type: "mcq", q: "Direct: 'How does 3D printing work?' &rarr; Indirect: 'I'd like to know _______.'", options:[{t: "how 3D printing works", c: true}, {t: "how does 3D printing work", c: false}, {t: "how works 3D printing", c: false}] },
                        { type: "mcq", q: "Direct: 'Why did she call off the meeting?' &rarr; Indirect: 'Could you explain _______?'", options:[{t: "why she called off the meeting", c: true}, {t: "why did she call off the meeting", c: false}, {t: "why called off she the meeting", c: false}] },
                        { type: "mcq", q: "Direct: 'Where do fossil fuels come from?' &rarr; Indirect: 'Do you have any idea _______?'", options:[{t: "where fossil fuels come from", c: true}, {t: "where do fossil fuels come from", c: false}, {t: "where comes fossil fuels from", c: false}] },
                        { type: "mcq", q: "Direct: 'What material does it use?' &rarr; Indirect: 'Do you know _______?'", options:[{t: "what material does it use", c: false}, {t: "what material it uses", c: true}, {t: "what material uses it", c: false}] },
                        { type: "mcq", q: "Direct: 'How can we get rid of this?' &rarr; Indirect: 'I wonder _______.'", options:[{t: "how we can get rid of this", c: true}, {t: "how can we get rid of this", c: false}, {t: "how do we get rid of this", c: false}] }
                    ]
                },
                {
                    title: "Indirect Yes/No Questions",
                    drills:[
                        { type: "mcq", q: "Direct: 'Is biodegradable plastic the best solution?' &rarr; Indirect: 'I wonder _______ the best solution.'", options:[{t: "is biodegradable plastic", c: false}, {t: "if biodegradable plastic is", c: true}, {t: "whether is biodegradable plastic", c: false}] },
                        { type: "mcq", q: "Direct: 'Can we get by without single-use items?' &rarr; Indirect: 'The question is _______ without single-use items.'", options:[{t: "whether we can get by", c: true}, {t: "can we get by", c: false}, {t: "if can we get by", c: false}] },
                        { type: "mcq", q: "Direct: 'Does this bottle decompose in the ocean?' &rarr; Indirect: 'I'd like to know _______ in the ocean.'", options:[{t: "if does this bottle decompose", c: false}, {t: "whether decomposes this bottle", c: false}, {t: "if this bottle decomposes", c: true}] },
                        { type: "mcq", q: "Direct: 'Did they call off the beach cleanup?' &rarr; Indirect: 'Do you know _______ the beach cleanup?'", options:[{t: "if they called off", c: true}, {t: "if did they call off", c: false}, {t: "whether called they off", c: false}] },
                        { type: "mcq", q: "Direct: 'Are polymers always plastic?' &rarr; Indirect: 'I wonder _______ always plastic.'", options:[{t: "if polymers are", c: true}, {t: "are polymers", c: false}, {t: "whether are polymers", c: false}] },
                        { type: "mcq", q: "Direct: 'Is 3D printing expensive?' &rarr; Indirect: 'Could you tell me _______ expensive?'", options:[{t: "whether 3D printing is", c: true}, {t: "is 3D printing", c: false}, {t: "if is 3D printing", c: false}] },
                        { type: "mcq", q: "Direct: 'Do you recycle?' &rarr; Indirect: 'I'd like to know _______.'", options:[{t: "if you recycle", c: true}, {t: "do you recycle", c: false}, {t: "whether do you recycle", c: false}] },
                        { type: "mcq", q: "Direct: 'Has she found a solution?' &rarr; Indirect: 'Do you know _______ a solution?'", options:[{t: "has she found", c: false}, {t: "whether she has found", c: true}, {t: "if she found has", c: false}] },
                        { type: "mcq", q: "Direct: 'Can fossil fuels be replaced?' &rarr; Indirect: 'The question is _______ replaced.'", options:[{t: "whether fossil fuels can be", c: true}, {t: "can fossil fuels be", c: false}, {t: "if can fossil fuels be", c: false}] },
                        { type: "mcq", q: "Direct: 'Did the students get together?' &rarr; Indirect: 'I wonder _______.'", options:[{t: "if the students got together", c: true}, {t: "if did the students get together", c: false}, {t: "whether got together the students", c: false}] }
                    ]
                },
                {
                    title: "Spot the Mistake",
                    drills:[
                        { type: "mcq", q: "Which sentence is CORRECT?", options:[{t: "I wonder where do all the bags end up.", c: false}, {t: "I wonder where all the bags end up.", c: true}, {t: "I wonder where end up all the bags.", c: false}] },
                        { type: "mcq", q: "Which sentence is CORRECT?", options:[{t: "Could you tell me what this plastic is made of?", c: true}, {t: "Could you tell me what is this plastic made of?", c: false}, {t: "Could you tell me what does this plastic make of?", c: false}] },
                        { type: "mcq", q: "Which sentence is CORRECT?", options:[{t: "Can you explain why is recycling important?", c: false}, {t: "Can you explain why does recycling be important?", c: false}, {t: "Can you explain why recycling is important?", c: true}] },
                        { type: "mcq", q: "Which sentence is CORRECT?", options:[{t: "I'd like to know if you have any advice for me.", c: true}, {t: "I'd like to know do you have any advice for me.", c: false}, {t: "I'd like to know whether do you have any advice.", c: false}] },
                        { type: "mcq", q: "Which sentence has a MISTAKE?", options:[{t: "Do you know where the landfill is?", c: false}, {t: "I wonder if we can get by without plastic.", c: false}, {t: "Can you tell me how does 3D printing work?", c: true}] },
                        { type: "mcq", q: "Which sentence has a MISTAKE?", options:[{t: "I'd like to know why did they call off the event.", c: true}, {t: "The question is whether they called off the event.", c: false}, {t: "Do you have any idea why they called off the event?", c: false}] },
                        { type: "mcq", q: "Which sentence is CORRECT?", options:[{t: "I bet she knows what the main sources are.", c: true}, {t: "I bet she knows what are the main sources.", c: false}, {t: "I bet she knows what do the main sources be.", c: false}] },
                        { type: "mcq", q: "Which sentence is CORRECT?", options:[{t: "Could you tell me if this bottle decomposes?", c: true}, {t: "Could you tell me if does this bottle decompose?", c: false}, {t: "Could you tell me whether decomposes this bottle?", c: false}] },
                        { type: "mcq", q: "Which sentence has a MISTAKE?", options:[{t: "I wonder if a plastic-free world is possible.", c: false}, {t: "I wonder whether a plastic-free world is possible.", c: false}, {t: "I wonder is a plastic-free world possible.", c: true}] },
                        { type: "mcq", q: "Which sentence is CORRECT?", options:[{t: "Do you have any idea how much costs this?", c: false}, {t: "Do you have any idea how much this costs?", c: true}, {t: "Do you have any idea how much does this cost?", c: false}] }
                    ]
                },
                {
                    title: "Mixed Indirect Rules",
                    drills:[
                        { type: "mcq", q: "What is missing? 'Could you tell me _______ you bought this reusable bag?'", options:[{t: "did", c: false}, {t: "where", c: true}, {t: "do", c: false}] },
                        { type: "mcq", q: "What is missing? 'I wonder _______ biodegradable plastic is the best solution.'", options:[{t: "if", c: true}, {t: "what", c: false}, {t: "does", c: false}] },
                        { type: "mcq", q: "What is missing? 'The question is _______ we can get our ideas across.'", options:[{t: "did", c: false}, {t: "how", c: true}, {t: "are", c: false}] },
                        { type: "mcq", q: "If the direct question starts with 'Did', the indirect question will use:", options:[{t: "did + verb", c: false}, {t: "the past simple of the verb", c: true}, {t: "do + verb", c: false}] },
                        { type: "mcq", q: "If the direct question starts with 'Does', the indirect question will use:", options:[{t: "the verb with -s or -es", c: true}, {t: "does + verb", c: false}, {t: "did + verb", c: false}] },
                        { type: "mcq", q: "Direct: 'Is it durable?' &rarr; 'I'd like to know _______.'", options:[{t: "is it durable", c: false}, {t: "whether it is durable", c: true}, {t: "if is it durable", c: false}] },
                        { type: "mcq", q: "Direct: 'What does PU stand for?' &rarr; 'Can you explain _______?'", options:[{t: "what PU stands for", c: true}, {t: "what does PU stand for", c: false}, {t: "what stands PU for", c: false}] },
                        { type: "mcq", q: "Direct: 'Why did they use fossil fuels?' &rarr; 'I wonder _______.'", options:[{t: "why did they use fossil fuels", c: false}, {t: "why they used fossil fuels", c: true}, {t: "why used they fossil fuels", c: false}] },
                        { type: "mcq", q: "Direct: 'Are there any disposable items?' &rarr; 'Do you know _______?'", options:[{t: "if there are any disposable items", c: true}, {t: "are there any disposable items", c: false}, {t: "whether are there any disposable items", c: false}] },
                        { type: "mcq", q: "Which introductory phrase asks for a reason or logic?", options:[{t: "Do you know where...", c: false}, {t: "Can you explain why...", c: true}, {t: "I wonder if...", c: false}] }
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
                    text: "Could you tell me what material it uses? ↘<br><small style='color:#0077b6'>(Você poderia me dizer que material ele usa?)</small>", 
                    audio: "TTS: Could you tell me what material it uses?", 
                    arrow: "↘" 
                },
                { 
                    text: "I wonder if a plastic-free world is really possible. ↘<br><small style='color:#0077b6'>(Eu me pergunto se um mundo sem plástico é realmente possível.)</small>", 
                    audio: "TTS: I wonder if a plastic-free world is really possible.", 
                    arrow: "↘" 
                },
                { 
                    text: "Do you know where all the plastic bags end up? ↗<br><small style='color:#0077b6'>(Você sabe onde todas as sacolas plásticas vão parar?)</small>", 
                    audio: "TTS: Do you know where all the plastic bags end up?", 
                    arrow: "↗" 
                },
                { 
                    text: "Can you explain why recycling is so important? ↘<br><small style='color:#0077b6'>(Você pode explicar por que a reciclagem é tão importante?)</small>", 
                    audio: "TTS: Can you explain why recycling is so important?", 
                    arrow: "↘" 
                },
                { 
                    text: "The question is whether we can get by without plastic. ↘<br><small style='color:#0077b6'>(A questão é se nós conseguimos nos virar sem plástico.)</small>", 
                    audio: "TTS: The question is whether we can get by without plastic.", 
                    arrow: "↘" 
                },
                { 
                    text: "This situation really calls for a new solution. ↘<br><small style='color:#0077b6'>(Esta situação realmente exige uma nova solução.)</small>", 
                    audio: "TTS: This situation really calls for a new solution.", 
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
                // Drill 1: Typing
                {
                    type: "typing",
                    instruction: "Listen to Albert describing a lab experiment and type the missing words.<br><small style='color:#0077b6'>(Ouça Albert descrevendo um experimento de laboratório e digite as palavras que faltam.)</small>",
                    audio: "TTS: Today, we are going to carry out an experiment with polymers. I want to get across the idea that not all plastic is the same. I wonder if you know how long PET takes to decompose. If we don't get rid of single-use items, they will stay in the landfill for centuries. We need to call on everyone to help.",
                    text: "Today, we are going to[carry out] an experiment with [polymers]. I want to [get across] the idea that not all [plastic] is the same. I [wonder if] you know how long [PET] takes to [decompose]. If we don't [get rid of] [single-use] items, they will stay in the [landfill] for centuries. We need to [call on] everyone to help."
                },
                // Drill 2: Dropdown (with Randomized Asterisks)
                {
                    type: "dropdown",
                    instruction: "Listen to a dialogue between Celine and a Scientist and choose the correct options.<br><small style='color:#0077b6'>(Ouça o diálogo entre Celine e um Cientista e escolha as opções corretas.)</small>",
                    audio: "audio/em2-4-10/step5_drill2.mp3",
                    questions:[
                        { q: "Celine: Could you tell me [if* | why | what][biodegradable* | disposable | reusable] plastic is the best [breakthrough | landfill | solution*]?", a: "" },
                        { q: "Scientist: It’s a [controversial* | disposable | lightweight] topic. People often[call back | call for* | call out] more research.", a: "" },
                        { q: "Celine: I'd like to know [how | why | whether*] it can [decompose | recycle | contaminate*] regular[recycling* | durable | polymer] systems.", a: "" },
                        { q: "Scientist: Yes, it can. We must[get through | get by | get together*] to discuss better sorting methods.", a: "" }
                    ]
                },
                // Drill 3: Audio Choice
                {
                    type: "audio-choice",
                    instruction: "Listen to the audio question and choose the correct logical answer.<br><small style='color:#0077b6'>(Ouça a pergunta em áudio e escolha a resposta lógica correta.)</small>",
                    audio: "TTS: Do you have any idea where the nearest recycling center is?",
                    options:[
                        { t: "I had my photo taken for my passport.", c: false },
                        { t: "I'm not sure where the center is, but I can check.", c: true },
                        { t: "It is a lightweight material.", c: false },
                        { t: "We need to get through this crisis.", c: false }
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
                    title: "6a: Narration - The 3D Printing Breakthrough",
                    audio: "TTS: Scientists have achieved a major breakthrough in manufacturing. They are now using 3D printing to create durable medical equipment. Could you tell me how it works? Instead of large factories that use fossil fuels, these printers use specialized polymers. This technology allows hospitals to print items only when they need them. People wonder if this will reduce waste in the long run. The question is whether every home will have one in the future. || audio/em2-4-10/p6_text1.mp3",
                    body: "Scientists have achieved a major [breakthrough](tooltip:breakthrough) in manufacturing. They are now using [3D printing](tooltip:3d-printing) to create [durable](tooltip:durable) medical equipment. <b>Could you tell me how it [works](tooltip:work)?</b> Instead of large factories that use [fossil fuels](tooltip:fossil-fuels), these printers use specialized [polymers](tooltip:polymer). This technology allows hospitals to print items only when they need them. People <b>[wonder if](tooltip:wonder-if) this will reduce waste</b> in the long run. <b>[The question is whether](tooltip:the-question-is-whether) every home will have one</b> in the future.",
                    questions:[
                        { 
                            q: "What is a major benefit of 3D printing mentioned in the text?", 
                            options:[ 
                                {t: "It uses more fossil fuels.", c: false}, 
                                {t: "It can reduce waste by printing items on demand.", c: true}, 
                                {t: "It only creates single-use plastic.", c: false} 
                            ] 
                        },
                        { 
                            q: "What materials are used in these 3D printers?", 
                            options:[ 
                                {t: "Gasoline and oil.", c: false}, 
                                {t: "Fossils from the landfill.", c: false}, 
                                {t: "Specialized polymers.", c: true} 
                            ] 
                        },
                        { 
                            q: "What are people wondering about 3D printing?", 
                            options:[ 
                                {t: "If it will reduce waste.", c: true}, 
                                {t: "Why it is so eye-catching.", c: false}, 
                                {t: "Where the optometrist is.", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "6b: Dialogue - A Local Pollution Issue",
                    audio: "audio/em2-4-10/p6_text2.mp3",
                    body: "<b>Celine:</b> Albert, I finally [got around to](tooltip:get-around-to) researching the river [pollution](tooltip:pollution).<br><b>Albert:</b> That’s great. <b>[Can you explain why](tooltip:can-you-explain-why) it is so bad?</b><br><b>Celine:</b> It [calls for](tooltip:call-for) immediate action. Most of the trash is [single-use](tooltip:single-use) [PE](tooltip:pe) bags and [PET](tooltip:pet) bottles.<br><b>Albert:</b> <b>[I'd like to know if](tooltip:id-like-to-know) the community [realizes](tooltip:realize) the danger.</b><br><b>Celine:</b> I don't think so. We need to [get](tooltip:get-across) our ideas [across](tooltip:get-across) at the next meeting.<br><b>Albert:</b> I agree. <b>[Do you know when](tooltip:do-you-know-when) the next meeting is?</b><br><b>Celine:</b> It’s next Monday. Let's [get together](tooltip:get-together) this weekend to prepare.",
                    questions:[
                        { 
                            q: "What are the main types of plastic found in the river?", 
                            options:[ 
                                {t: "PU and PVC.", c: false}, 
                                {t: "PE and PET.", c: true}, 
                                {t: "Biodegradable resins.", c: false} 
                            ] 
                        },
                        { 
                            q: "What does Celine think about the community's awareness?", 
                            options:[ 
                                {t: "She thinks everyone knows the danger.", c: false}, 
                                {t: "She thinks they don't realize the danger.", c: true}, 
                                {t: "She thinks it's a meme.", c: false} 
                            ] 
                        },
                        { 
                            q: "What is their plan for the weekend?", 
                            options:[ 
                                {t: "To call off the project.", c: false}, 
                                {t: "To get together and prepare for the meeting.", c: true}, 
                                {t: "To download a new app.", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "6c: Description - The Truth About Biodegradable Plastic",
                    audio: "TTS: Many people think that biodegradable plastic is a perfect solution. I wonder if you know how it decomposes? In reality, it needs very specific industrial conditions to decompose correctly. If it ends up in the ocean, it can be just as dangerous as regular material. Can you explain why it can be problematic for recycling? Because it looks like regular plastic, it often contaminates the recycling stream. The question is whether we should focus on reusable items instead. || audio/em2-4-10/p6_text3.mp3",
                    body: "Many people think that [biodegradable](tooltip:biodegradable) plastic is a perfect solution. <b>[I wonder if](tooltip:i-wonder-if) you know how it decomposes.</b> In reality, it needs very specific industrial conditions to [decompose](tooltip:decompose) correctly. If it ends up in the ocean, it can be just as dangerous as regular [material](tooltip:material). <b>[Can you explain why](tooltip:can-you-explain-why) it can be problematic for recycling?</b> Because it looks like regular plastic, it often contaminates the [recycling](tooltip:recycle) stream. <b>[The question is whether](tooltip:the-question-is-whether) we should focus on reusable items</b> instead.",
                    questions:[
                        { 
                            q: "Does biodegradable plastic decompose easily in the ocean?", 
                            options:[ 
                                {t: "Yes, it is very fast.", c: false}, 
                                {t: "No, it needs specific industrial conditions.", c: true}, 
                                {t: "It never decomposes.", c: false} 
                            ] 
                        },
                        { 
                            q: "Why is it a problem for the recycling system?", 
                            options:[ 
                                {t: "Because it is too durable.", c: false}, 
                                {t: "Because it can contaminate the regular plastic stream.", c: true}, 
                                {t: "Because it gives off a clear light.", c: false} 
                            ] 
                        },
                        { 
                            q: "What alternative does the text suggest considering?", 
                            options:[ 
                                {t: "Single-use items.", c: false}, 
                                {t: "Reusable items.", c: true}, 
                                {t: "Disposable PS cups.", c: false} 
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
                // 1-5: Matching (Phrasal Verbs & Vocab)
                { type: "matching", instruction: "Match the phrasal verb with its definition.<br><small style='color:#0077b6'>(Associe o verbo frasal à sua definição.)</small>", pairs:[ {left: "Get rid of", right: "To finally find time to do something", val: "1"}, {left: "Get across", right: "To stop using or throw something away", val: "2"}, {left: "Get around to", right: "To manage or survive with few resources", val: "3"}, {left: "Get by", right: "To make someone understand an idea", val: "4"} ] },
                { type: "matching", instruction: "Match the plastic type to its use.<br><small style='color:#0077b6'>(Associe o tipo de plástico ao seu uso.)</small>", pairs:[ {left: "PVC", right: "Pipes and flooring", val: "1"}, {left: "PS", right: "Styrofoam cups", val: "2"}, {left: "PP", right: "Yogurt pots and furniture", val: "3"}, {left: "PET", right: "Soda and water bottles", val: "4"} ] },
                { type: "matching", instruction: "Match the phrasal verb with its meaning.<br><small style='color:#0077b6'>(Associe o verbo frasal ao seu significado.)</small>", pairs:[ {left: "Call for", right: "Exigir", val: "1"}, {left: "Call off", right: "Cancelar", val: "2"}, {left: "Call on", right: "Recorrer a / Pedir ajuda", val: "3"}, {left: "Call out", right: "Criticar / Expor", val: "4"} ] },
                { type: "matching", instruction: "Match the vocabulary word with its translation.<br><small style='color:#0077b6'>(Associe a palavra à sua tradução.)</small>", pairs:[ {left: "Polymer", right: "Polímero", val: "1"}, {left: "Landfill", right: "Aterro sanitário", val: "2"}, {left: "Single-use", right: "De uso único", val: "3"}, {left: "Fossil fuels", right: "Combustíveis fósseis", val: "4"} ] },
                { type: "matching", instruction: "Match the introductory phrase with its translation.<br><small style='color:#0077b6'>(Associe a frase introdutória com sua tradução.)</small>", pairs:[ {left: "Could you tell me...", right: "Você poderia me dizer...", val: "1"}, {left: "I wonder if...", right: "Eu me pergunto se...", val: "2"}, {left: "I'd like to know...", right: "Eu gostaria de saber...", val: "3"}, {left: "The question is whether...", right: "A questão é se...", val: "4"} ] },
                
                // 6-15: Word Order (Indirect Questions)
                { type: "word-order", instruction: "Put the words in order to form a correct Indirect Question.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "tell / you / Could / works / me / 3D printing / how / ?", correct: "Could you tell me how 3D printing works ?" },
                { type: "word-order", instruction: "Put the words in order to form a correct Indirect Question.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "is / know / landfill / you / Do / where / the / ?", correct: "Do you know where the landfill is ?" },
                { type: "word-order", instruction: "Put the words in order to form a correct Indirect Question.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "wonder / plastic / if / decompose / I / this / will / .", correct: "I wonder if this plastic will decompose ." },
                { type: "word-order", instruction: "Put the words in order to form a correct Indirect Question.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "explain / you / is / why / important / Can / recycling / ?", correct: "Can you explain why recycling is important ?" },
                { type: "word-order", instruction: "Put the words in order to form a correct Indirect Question.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "like / what / made / is / I'd / to / know / of / it / .", correct: "I'd like to know what it is made of ." },
                { type: "word-order", instruction: "Put the words in order to form a correct Indirect Question.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "idea / Do / you / have / comes / any / it / from / where / ?", correct: "Do you have any idea where it comes from ?" },
                { type: "word-order", instruction: "Put the words in order to form a correct Indirect Question.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "question / The / is / whether / get / can / we / by / .", correct: "The question is whether we can get by ." },
                { type: "word-order", instruction: "Put the words in order to form a correct Indirect Question.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "bet / knows / I / she / the / what / is / answer / .", correct: "I bet she knows what the answer is ." },
                { type: "word-order", instruction: "Put the words in order to form a correct Indirect Question.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "tell / Could / me / you / called / why / off / it / they / ?", correct: "Could you tell me why they called it off ?" },
                { type: "word-order", instruction: "Put the words in order to form a correct Indirect Question.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "know / Do / you / if / reusable / are / they / ?", correct: "Do you know if they are reusable ?" },

                // 16-25: Clickable Error (Indirect Questions)
                { type: "clickable-error", instruction: "Identify the incorrect word in the sentence.<br><small style='color:#0077b6'>(Identifique a palavra incorreta na frase.)</small>", sentence: "I wonder [does](error:if) this material decompose in water." },
                { type: "clickable-error", instruction: "Identify the incorrect word in the sentence.<br><small style='color:#0077b6'>(Identifique a palavra incorreta na frase.)</small>", sentence: "Can you explain why [is](error:PET) [PET](error:is) so common?" }, // Formatted for "why PET is so common" removal of the first 'is'
                { type: "clickable-error", instruction: "Identify the incorrect word in the sentence.<br><small style='color:#0077b6'>(Identifique a palavra incorreta na frase.)</small>", sentence: "Do you know where [did](error:) they [go](error:went)?" },
                { type: "clickable-error", instruction: "Identify the incorrect word in the sentence.<br><small style='color:#0077b6'>(Identifique a palavra incorreta na frase.)</small>", sentence: "I'd like to know what [does](error:) it [mean](error:means) ." },
                { type: "clickable-error", instruction: "Identify the incorrect word in the sentence.<br><small style='color:#0077b6'>(Identifique a palavra incorreta na frase.)</small>", sentence: "Could you tell me how much [does](error:) it [cost](error:costs) ?" },
                { type: "clickable-error", instruction: "Identify the incorrect word in the sentence.<br><small style='color:#0077b6'>(Identifique a palavra incorreta na frase.)</small>", sentence: "I wonder if [is](error:it) [it](error:is) possible." },
                { type: "clickable-error", instruction: "Identify the incorrect word in the sentence.<br><small style='color:#0077b6'>(Identifique a palavra incorreta na frase.)</small>", sentence: "The question is whether [can](error:we) [we](error:can) get by." },
                { type: "clickable-error", instruction: "Identify the incorrect word in the sentence.<br><small style='color:#0077b6'>(Identifique a palavra incorreta na frase.)</small>", sentence: "Do you have any idea why [did](error:) she [call](error:called) off the meeting?" },
                { type: "clickable-error", instruction: "Identify the incorrect word in the sentence.<br><small style='color:#0077b6'>(Identifique a palavra incorreta na frase.)</small>", sentence: "I bet she knows when [will](error:the) [the](error:meeting) [meeting](error:will) start." },
                { type: "clickable-error", instruction: "Identify the incorrect word in the sentence.<br><small style='color:#0077b6'>(Identifique a palavra incorreta na frase.)</small>", sentence: "Can you explain how [do](error:) you recycle this?" },

                // 26-40: MCQs & Dropdowns (using <br> inside instruction)
                { type: "mcq", instruction: "Choose the correct alternative.<br>A _______ is a very long molecule made of repeating parts.", q: "", options:[{t: "Meme", c: false}, {t: "Polymer", c: true}, {t: "Well", c: false}, {t: "Drought", c: false}] },
                { type: "mcq", instruction: "Choose the correct alternative.<br>Something that is _______ is designed to be thrown away after one use.", q: "", options:[{t: "Durable", c: false}, {t: "Reusable", c: false}, {t: "Disposable", c: true}, {t: "Global", c: false}] },
                { type: "mcq", instruction: "Choose the correct alternative.<br>It takes a long time for plastic to _______ in the environment.", q: "", options:[{t: "Recycle", c: false}, {t: "Decompose", c: true}, {t: "Upload", c: false}, {t: "Connect", c: false}] },
                { type: "mcq", instruction: "Choose the correct alternative.<br>_______ are used to produce most modern plastics.", q: "", options:[{t: "Biodegradables", c: false}, {t: "Fossil fuels", c: true}, {t: "Lenses", c: false}, {t: "Trees", c: false}] },
                { type: "mcq", instruction: "Choose the correct alternative.<br>PET is a very _______ type of plastic because it is lightweight.", q: "", options:[{t: "Wasteful", c: false}, {t: "Useful", c: true}, {t: "Short", c: false}, {t: "Heavy", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>We need to _______ (recorrer a) experts to find a solution.", q: "", options:[{t: "Call off", c: false}, {t: "Call on", c: true}, {t: "Get by", c: false}, {t: "Call back", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>It's difficult to _______ (livrar-se de) all plastic in our lives.", q: "", options:[{t: "Get through", c: false}, {t: "Get rid of", c: true}, {t: "Get around to", c: false}, {t: "Get across", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>They had to _______ (cancelar) the cleanup due to the rain.", q: "", options:[{t: "Call in", c: false}, {t: "Call off", c: true}, {t: "Call out", c: false}, {t: "Get together", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>How can we _______ (comunicar) the importance of sustainability?", q: "", options:[{t: "Get through", c: false}, {t: "Get together", c: false}, {t: "Get across", c: true}, {t: "Call in", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>This pollution problem _______ (exige) immediate action.", q: "", options:[{t: "Calls back", c: false}, {t: "Calls for", c: true}, {t: "Gets by", c: false}, {t: "Calls out", c: false}] },
                { type: "mcq", instruction: "Choose the best translation.<br>'I wonder if it's possible.'", q: "", options:[{t: "Eu me pergunto se é possível.", c: true}, {t: "Eu gostaria de saber se é possível.", c: false}, {t: "Você sabe se é possível?", c: false}] },
                { type: "mcq", instruction: "Choose the best translation.<br>'Could you tell me how it works?'", q: "", options:[{t: "Você pode explicar como funciona?", c: false}, {t: "Você poderia me dizer como isso funciona?", c: true}, {t: "Eu me pergunto como funciona.", c: false}] },
                { type: "mcq", instruction: "Choose the best translation.<br>'The question is whether we can change.'", q: "", options:[{t: "A pergunta é por que podemos mudar.", c: false}, {t: "Nós podemos mudar?", c: false}, {t: "A questão é se nós podemos mudar.", c: true}] },
                { type: "odd-one-out", instruction: "Choose the word that doesn't belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>", options:[{t: "Durable", c: false}, {t: "Lightweight", c: false}, {t: "Reusable", c: false}, {t: "Landfill", c: true}] },
                { type: "odd-one-out", instruction: "Choose the word that doesn't belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>", options:[{t: "Call for", c: false}, {t: "Call off", c: false}, {t: "Call back", c: false}, {t: "Call than", c: true}] }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn to be a science reporter! Write a short text (5-7 sentences) about the plastic problem in your city or school. <br><br><small><span style='color:#0077b6'>(Ilha de Idiomas: Agora é sua vez de ser um repórter científico! Escreva um pequeno texto (5-7 frases) sobre o problema do plástico na sua cidade ou escola.)</span></small>",
            example: "\"In my school, I see too many single-use PET bottles in the trash. I wonder if we can get rid of these items forever. I'd like to know what the best alternatives are. We should get together to call for a better recycling system. The question is whether the principal will support us. I finally got around to writing a letter about this issue!\"<br><br><small><span style='color:#0077b6'>(\"Na minha escola, vejo muitas garrafas PET de uso único no lixo. Eu me pergunto se podemos nos livrar desses itens para sempre. Eu gostaria de saber quais são as melhores alternativas. Nós deveríamos nos reunir para exigir um sistema de reciclagem melhor. A questão é se a diretora vai nos apoiar. Eu finalmente arranjei tempo para escrever uma carta sobre este problema!\")</span></small>",
            prompts: [
                "Use [Indirect Questions] to express your doubts and suggestions. <br><small><span style='color:#0077b6'>(Use Perguntas Indiretas para expressar suas dúvidas e sugestões.)</span></small>",
                "Include at least two [Phrasal Verbs] from this lesson. <br><small><span style='color:#0077b6'>(Inclua pelo menos dois Verbos Frasais desta lição.)</span></small>",
                "Include one [Type of Plastic]. <br><small><span style='color:#0077b6'>(Inclua um Tipo de Plástico.)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Wrap it up",
            items:[
                // --- 2A: Plastics & Environment ---
                { term: "Polymer", definition: "A chain of identical repeating molecules.", defTrans: "Polímero", example: "A polymer is a long chain of molecules.", audioFront: "TTS: Polymer", audioBack: "TTS: A polymer is a long chain of molecules." },
                { term: "Plastic", definition: "A synthetic material made from polymers.", defTrans: "Plástico", example: "Most plastic is made from petroleum.", audioFront: "TTS: Plastic", audioBack: "TTS: Most plastic is made from petroleum." },
                { term: "Material", definition: "The matter from which a thing is made.", defTrans: "Material", example: "Is this material strong enough?", audioFront: "TTS: Material", audioBack: "TTS: Is this material strong enough?" },
                { term: "Durable", definition: "Able to withstand wear or damage.", defTrans: "Durável", example: "This reusable cup is very durable.", audioFront: "TTS: Durable", audioBack: "TTS: This reusable cup is very durable." },
                { term: "Lightweight", definition: "Thin and easy to carry; having little weight.", defTrans: "Leve", example: "Plastic is a lightweight material.", audioFront: "TTS: Lightweight", audioBack: "TTS: Plastic is a lightweight material." },
                { term: "Single-use", definition: "Designed to be used once and thrown away.", defTrans: "De uso único", example: "We should avoid single-use items.", audioFront: "TTS: Single-use", audioBack: "TTS: We should avoid single-use items." },
                { term: "Fossil fuels", definition: "Natural fuels like coal or gas.", defTrans: "Combustíveis fósseis", example: "Production relies heavily on fossil fuels.", audioFront: "TTS: Fossil fuels", audioBack: "TTS: Production relies heavily on fossil fuels." },
                { term: "To decompose", definition: "To decay or break down naturally.", defTrans: "Decompor-se", example: "Plastic can take 500 years to decompose.", audioFront: "TTS: To decompose", audioBack: "TTS: Plastic can take 500 years to decompose." },
                { term: "Landfill", definition: "A place to dispose of waste by burying it.", defTrans: "Aterro sanitário", example: "Bottles end up in the landfill every day.", audioFront: "TTS: Landfill", audioBack: "TTS: Bottles end up in the landfill every day." },
                { term: "Pollution", definition: "The presence of harmful substances in the environment.", defTrans: "Poluição", example: "Ocean pollution is a global issue.", audioFront: "TTS: Pollution", audioBack: "TTS: Ocean pollution is a global issue." },
                { term: "To recycle", definition: "To convert waste into reusable material.", defTrans: "Reciclar", example: "Show me how to recycle this properly.", audioFront: "TTS: To recycle", audioBack: "TTS: Show me how to recycle this properly." },
                { term: "Reusable", definition: "Able to be used again.", defTrans: "Reutilizável", example: "Use a reusable water bottle.", audioFront: "TTS: Reusable", audioBack: "TTS: Use a reusable water bottle." },
                { term: "Disposable", definition: "Intended to be used once and thrown away.", defTrans: "Descartável", example: "Disposable utensils are very wasteful.", audioFront: "TTS: Disposable", audioBack: "TTS: Disposable utensils are very wasteful." },
                { term: "3D Printing", definition: "Making a physical object from a digital model.", defTrans: "Impressão 3D", example: "3D Printing allows us to create custom parts.", audioFront: "TTS: 3D Printing", audioBack: "TTS: 3D Printing allows us to create custom parts." },
                { term: "Biodegradable", definition: "Capable of being decomposed by bacteria.", defTrans: "Biodegradável", example: "This bag is biodegradable and safe.", audioFront: "TTS: Biodegradable", audioBack: "TTS: This bag is biodegradable and safe." },
                { term: "Global", definition: "Relating to the whole world.", defTrans: "Global / Mundial", example: "We need a global solution.", audioFront: "TTS: Global", audioBack: "TTS: We need a global solution." },

                // --- 2A: Types of Plastic ---
                { term: "PET", definition: "Polyethylene Terephthalate.", defTrans: "PET (Tereftalato de polietileno)", example: "PET is commonly recycled.", audioFront: "TTS: PET", audioBack: "TTS: PET is commonly recycled." },
                { term: "PE", definition: "Polyethylene.", defTrans: "PE (Polietileno)", example: "Bags are usually made of PE.", audioFront: "TTS: PE", audioBack: "TTS: Bags are usually made of PE." },
                { term: "PVC", definition: "Polyvinyl Chloride.", defTrans: "PVC (Policloreto de vinila)", example: "Water pipes are made of PVC.", audioFront: "TTS: PVC", audioBack: "TTS: Water pipes are made of PVC." },
                { term: "PP", definition: "Polypropylene.", defTrans: "PP (Polipropileno)", example: "PP is used for yogurt pots.", audioFront: "TTS: PP", audioBack: "TTS: PP is used for yogurt pots." },
                { term: "PS", definition: "Polystyrene.", defTrans: "PS (Poliestireno)", example: "PS is often used to make styrofoam.", audioFront: "TTS: PS", audioBack: "TTS: PS is often used to make styrofoam." },
                { term: "PC", definition: "Polycarbonate.", defTrans: "PC (Policarbonato)", example: "My eyeglasses have PC lenses.", audioFront: "TTS: PC", audioBack: "TTS: My eyeglasses have PC lenses." },
                { term: "PU", definition: "Polyurethane.", defTrans: "PU (Poliuretano)", example: "Many sponges are made from PU foam.", audioFront: "TTS: PU", audioBack: "TTS: Many sponges are made from PU foam." },

                // --- 2A: Phrasal Verbs (CALL & GET) ---
                { term: "Call for", definition: "To demand or require.", defTrans: "Exigir", example: "This crisis calls for urgent action.", audioFront: "TTS: Call for", audioBack: "TTS: This crisis calls for urgent action." },
                { term: "Call off", definition: "To cancel an event.", defTrans: "Cancelar", example: "They called off the beach cleanup.", audioFront: "TTS: Call off", audioBack: "TTS: They called off the beach cleanup." },
                { term: "Call on", definition: "To ask someone for help.", defTrans: "Recorrer a", example: "We should call on scientists for help.", audioFront: "TTS: Call on", audioBack: "TTS: We should call on scientists for help." },
                { term: "Call out", definition: "To draw attention to bad behavior.", defTrans: "Criticar / Expor", example: "She called out the company.", audioFront: "TTS: Call out", audioBack: "TTS: She called out the company." },
                { term: "Call back", definition: "To return a phone call.", defTrans: "Ligar de volta", example: "I hope the expert calls you back soon.", audioFront: "TTS: Call back", audioBack: "TTS: I hope the expert calls you back soon." },
                { term: "Call in", definition: "To ask an expert to come help.", defTrans: "Chamar (especialista)", example: "We need to call in a specialist.", audioFront: "TTS: Call in", audioBack: "TTS: We need to call in a specialist." },
                { term: "Get rid of", definition: "To throw away or eliminate.", defTrans: "Livrar-se de", example: "How can we get rid of this waste?", audioFront: "TTS: Get rid of", audioBack: "TTS: How can we get rid of this waste?" },
                { term: "Get by", definition: "To manage or survive with a limited amount.", defTrans: "Dar um jeito", example: "We can get by with fewer plastic products.", audioFront: "TTS: Get by", audioBack: "TTS: We can get by with fewer plastic products." },
                { term: "Get around to", definition: "To finally find time to do something.", defTrans: "Finalmente fazer algo", example: "I got around to sorting my trash.", audioFront: "TTS: Get around to", audioBack: "TTS: I got around to sorting my trash." },
                { term: "Get together", definition: "To meet with other people.", defTrans: "Reunir-se", example: "Let's get together to discuss the project.", audioFront: "TTS: Get together", audioBack: "TTS: Let's get together to discuss the project." },
                { term: "Get across", definition: "To successfully communicate an idea.", defTrans: "Comunicar / Fazer entender", example: "It’s hard to get the message across.", audioFront: "TTS: Get across", audioBack: "TTS: It’s hard to get the message across." },
                { term: "Get through", definition: "To survive a difficult situation.", defTrans: "Superar / Passar por", example: "We will get through this challenge together.", audioFront: "TTS: Get through", audioBack: "TTS: We will get through this challenge together." },

                // --- 3A: Indirect Questions Expressions ---
                { term: "Could you tell me...?", definition: "A polite person asking for information.", defTrans: "Você poderia me dizer...?", example: "Could you tell me what material it uses?", audioFront: "TTS: Could you tell me", audioBack: "TTS: Could you tell me what material it uses?" },
                { term: "I wonder if...", definition: "A person with a thinking bubble.", defTrans: "Eu me pergunto se...", example: "I wonder if a plastic-free world is possible.", audioFront: "TTS: I wonder if", audioBack: "TTS: I wonder if a plastic-free world is possible." },
                { term: "Do you know where...?", definition: "Asking for a location.", defTrans: "Você sabe onde...?", example: "Do you know where the landfill is?", audioFront: "TTS: Do you know where", audioBack: "TTS: Do you know where the landfill is?" },
                { term: "I'd like to know...", definition: "Expressing a desire for information.", defTrans: "Eu gostaria de saber...", example: "I'd like to know how 3D printing works.", audioFront: "TTS: I'd like to know", audioBack: "TTS: I'd like to know how 3D printing works." },
                { term: "Can you explain why...?", definition: "Asking for logic or reason.", defTrans: "Você pode explicar por que...?", example: "Can you explain why recycling is important?", audioFront: "TTS: Can you explain why", audioBack: "TTS: Can you explain why recycling is important?" },
                { term: "The question is whether...", definition: "Presenting a central problem or alternative.", defTrans: "A questão é se...", example: "The question is whether we can change our habits.", audioFront: "TTS: The question is whether", audioBack: "TTS: The question is whether we can change our habits." },
                { term: "Indirect Question (Wh- word)", definition: "Phrase + Wh- word + Subject + Verb (No aux).", defTrans: "Pergunta indireta (Ordem afirmativa)", example: "I'd like to know what the problem is.", audioFront: "TTS: Indirect Question with Wh- word", audioBack: "TTS: I'd like to know what the problem is." },
                { term: "Indirect Question (Yes/No)", definition: "Phrase + if/whether + Subject + Verb.", defTrans: "Pergunta indireta (Sim/Não)", example: "I wonder if it is possible.", audioFront: "TTS: Indirect Question Yes or No", audioBack: "TTS: I wonder if it is possible." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (For Tooltips & Reference)
    // ======================================================
    glossary:[
        // --- TOPIC 1: CONTEXT (Step 0 & 1 Tooltips) ---
        { topic: "Context", term: "polymer", definition: "A large molecule made of many repeating units; the basis for all plastics.", translation: "Polímero" },
        { topic: "Context", term: "impact", definition: "A marked effect or influence of one thing on another.", translation: "Impacto" },
        { topic: "Context", term: "plastic", definition: "A versatile synthetic material made from polymers.", translation: "Plástico" },
        { topic: "Context", term: "phrasal-verbs", definition: "Verbs combined with an adverb or a preposition to give a new meaning.", translation: "Verbos Frasais" },
        { topic: "Context", term: "indirect-question", definition: "A more polite way of asking a question, placed inside another sentence.", translation: "Pergunta Indireta" },
        { topic: "Context", term: "plastic-free", definition: "Describing an environment or lifestyle that does not use plastic.", translation: "Sem plástico" },
        { topic: "Context", term: "scientist", definition: "A person who is studying or has expert knowledge of one or more of the natural or physical sciences.", translation: "Cientista" },
        { topic: "Context", term: "activist", definition: "A person who campaigns to bring about political or social change.", translation: "Ativista" },
        { topic: "Context", term: "world", definition: "The earth, together with all of its countries, peoples, and natural features.", translation: "Mundo" },
        { topic: "Context", term: "device", definition: "A piece of mechanical or electronic equipment made for a particular purpose.", translation: "Dispositivo / Aparelho" },
        { topic: "Context", term: "pollution", definition: "The presence of harmful or poisonous substances in the environment.", translation: "Poluição" },
        { topic: "Context", term: "get-across", definition: "To successfully communicate an idea to other people.", translation: "Comunicar / Fazer entender" },
        { topic: "Context", term: "reshape", definition: "To change the shape or character of something.", translation: "Remoldar" },
        { topic: "Context", term: "wonder", definition: "To feel curious or puzzled about something.", translation: "Perguntar-se / Ficar imaginando" },
        { topic: "Context", term: "solve", definition: "To find an answer to, or a way of dealing with, a problem.", translation: "Resolver" },
        { topic: "Context", term: "how-we-can-get-rid-of", definition: "Indirect question form expressing a desire to eliminate something.", translation: "Como podemos nos livrar de" },
        { topic: "Context", term: "call-off", definition: "To decide that a planned event will not take place; to cancel.", translation: "Cancelar" },
        { topic: "Context", term: "call-for", definition: "To demand or require a specific action or solution.", translation: "Exigir" },
        { topic: "Context", term: "get-together", definition: "To meet with other people to discuss or do something.", translation: "Reunir-se" },
        { topic: "Context", term: "student", definition: "A person who is studying at a school or college.", translation: "Estudante" },
        { topic: "Context", term: "cleanup", definition: "The act of removing trash or pollution from an area.", translation: "Limpeza" },
        { topic: "Context", term: "do-you-have-any-idea", definition: "Introductory phrase used to ask about a piece of information.", translation: "Você tem alguma ideia" },
        { topic: "Context", term: "single-use", definition: "Designed to be used once and then thrown away.", translation: "De uso único" },
        { topic: "Context", term: "i-bet-she-knows", definition: "An expression of certainty about someone else's knowledge.", translation: "Aposto que ela sabe" },
        { topic: "Context", term: "community", definition: "A group of people living in the same place or having a particular characteristic in common.", translation: "Comunidade" },
        { topic: "Context", term: "material", definition: "The matter from which a thing is or can be made.", translation: "Material" },
        { topic: "Context", term: "biodegradable", definition: "Capable of being decomposed by bacteria or other living organisms.", translation: "Biodegradável" },
        { topic: "Context", term: "could-you-tell-me", definition: "Polite introductory phrase for an indirect question.", translation: "Você poderia me dizer" },
        { topic: "Context", term: "3d-printing", definition: "The action or process of making a physical object from a three-dimensional digital model.", translation: "Impressão 3D" },
        { topic: "Context", term: "reusable", definition: "Able to be used again or more than once.", translation: "Reutilizável" },
        { topic: "Context", term: "the-question-is-whether", definition: "Introductory phrase used to present a central problem or alternative.", translation: "A questão é se" },
        { topic: "Context", term: "get-by", definition: "To manage or survive with a limited amount of something.", translation: "Dar um jeito / Se virar" },
        { topic: "Context", term: "disposable", definition: "Intended to be used once and then thrown away.", translation: "Descartável" },
        { topic: "Context", term: "breakthrough", definition: "A sudden, dramatic, and important discovery or development.", translation: "Avanço / Descoberta" },
        { topic: "Context", term: "realize", definition: "To become fully aware of something as a fact; understand clearly.", translation: "Perceber / Compreender" },
        { topic: "Context", term: "work", definition: "To function or operate in a specified way.", translation: "Funcionar" },
        { topic: "Context", term: "iq-1", definition: "Indirect question: Could you tell me what material it uses?", translation: "Você poderia me dizer que material usa?" },
        { topic: "Context", term: "iq-2", definition: "Indirect question: Can you explain why it is so bad?", translation: "Você pode explicar por que é tão ruim?" },
        { topic: "Context", term: "iq-3", definition: "Indirect question: Do you have any idea where all this plastic comes from?", translation: "Você tem ideia de onde vem todo esse plástico?" },
        { topic: "Context", term: "iq-4", definition: "Indirect question: Do you know when the next meeting is?", translation: "Você sabe quando é a próxima reunião?" },
        { topic: "Context", term: "iq-5", definition: "Indirect question: I wonder if you know how it decomposes?", translation: "Me pergunto se você sabe como se decompõe?" },
        { topic: "Context", term: "iq-6", definition: "Indirect question: Can you explain why it can be problematic for recycling?", translation: "Você pode explicar por que pode ser problemático para a reciclagem?" },

        // --- TOPIC 2: VERBS (From 2A) ---
        { topic: "Verbs", term: "decompose", definition: "To decay or break down naturally over a long period.", translation: "Decompor-se" },
        { topic: "Verbs", term: "recycle", definition: "The process of converting waste into reusable material.", translation: "Reciclar" },
        { topic: "Verbs", term: "call-for", definition: "To demand or require a specific action or solution.", translation: "Exigir" },
        { topic: "Verbs", term: "call-off", definition: "To decide that a planned event will not take place.", translation: "Cancelar" },
        { topic: "Verbs", term: "call-on", definition: "To ask someone for help or for their expertise.", translation: "Recorrer a / Pedir ajuda" },
        { topic: "Verbs", term: "call-out", definition: "To draw attention to someone's bad behavior or a company's poor practices.", translation: "Criticar / Expor" },
        { topic: "Verbs", term: "call-back", definition: "To return a telephone call.", translation: "Ligar de volta" },
        { topic: "Verbs", term: "call-in", definition: "To ask an expert or professional to come and provide help.", translation: "Chamar (especialista)" },
        { topic: "Verbs", term: "get-rid-of", definition: "To throw away or eliminate something you no longer want.", translation: "Livrar-se de" },
        { topic: "Verbs", term: "get-by", definition: "To manage or survive with a limited amount of something.", translation: "Dar um jeito / Se virar" },
        { topic: "Verbs", term: "get-around-to", definition: "To finally find the time to do a task you have intended to do.", translation: "Finalmente fazer algo" },
        { topic: "Verbs", term: "get-together", definition: "To meet with other people to discuss or do something.", translation: "Reunir-se" },
        { topic: "Verbs", term: "get-across", definition: "To successfully communicate an idea to other people.", translation: "Comunicar / Fazer entender" },
        { topic: "Verbs", term: "get-through", definition: "To finish or survive a difficult situation or task.", translation: "Superar / Passar por" },

        // --- TOPIC 3: PLASTICS & ENVIRONMENT ---
        { topic: "Plastics & Environment", term: "durable", definition: "Able to withstand wear, pressure, or damage; hard-wearing.", translation: "Durável" },
        { topic: "Plastics & Environment", term: "lightweight", definition: "Thin and easy to carry; having little weight.", translation: "Leve" },
        { topic: "Plastics & Environment", term: "fossil-fuels", definition: "Natural fuels such as coal or gas, formed in the geological past from living organisms.", translation: "Combustíveis fósseis" },
        { topic: "Plastics & Environment", term: "landfill", definition: "A place to dispose of waste material by burying it and covering it over with soil.", translation: "Aterro sanitário" },
        { topic: "Plastics & Environment", term: "pet", definition: "Polyethylene Terephthalate; common plastic used for soda and water bottles.", translation: "PET (Tereftalato de polietileno)" },
        { topic: "Plastics & Environment", term: "pe", definition: "Polyethylene; common plastic used for grocery bags and films.", translation: "PE (Polietileno)" },
        { topic: "Plastics & Environment", term: "pvc", definition: "Polyvinyl Chloride; durable plastic used for pipes, flooring, and toys.", translation: "PVC (Policloreto de vinila)" },
        { topic: "Plastics & Environment", term: "pp", definition: "Polypropylene; heat-resistant plastic used for containers and furniture.", translation: "PP (Polipropileno)" },
        { topic: "Plastics & Environment", term: "ps", definition: "Polystyrene; lightweight plastic used for styrofoam and disposable cups.", translation: "PS (Poliestireno)" },
        { topic: "Plastics & Environment", term: "pc", definition: "Polycarbonate; strong, transparent plastic used for eyeglasses and CDs.", translation: "PC (Policarbonato)" },
        { topic: "Plastics & Environment", term: "pu", definition: "Polyurethane; versatile plastic used for foams and coatings.", translation: "PU (Poliuretano)" },

        // --- TOPIC 4: GRAMMAR (Step 3A Rules) ---
        { topic: "Grammar", term: "indirect-question", definition: "A more polite way of asking a question, placed inside another sentence.", translation: "Pergunta indireta" },
        { topic: "Grammar", term: "could-you-tell-me", definition: "Polite introductory phrase for an indirect question.", translation: "Você poderia me dizer..." },
        { topic: "Grammar", term: "i-wonder-if", definition: "Introductory phrase used to express curiosity.", translation: "Eu me pergunto se..." },
        { topic: "Grammar", term: "do-you-know-when", definition: "Introductory phrase used to ask about a time.", translation: "Você sabe quando..." },
        { topic: "Grammar", term: "id-like-to-know", definition: "Introductory phrase used to express a desire for information.", translation: "Eu gostaria de saber..." },
        { topic: "Grammar", term: "can-you-explain-why", definition: "Introductory phrase used to ask for a reason or logic.", translation: "Você pode explicar por que..." },
        { topic: "Grammar", term: "the-question-is-whether", definition: "Introductory phrase used to present a central problem or alternative.", translation: "A questão é se..." },
        { topic: "Grammar", term: "word-order", definition: "In indirect questions, the word order changes to Subject + Verb.", translation: "Ordem das palavras" },
        { topic: "Grammar", term: "no-auxiliary", definition: "Indirect questions do NOT use do, does, or did.", translation: "Sem auxiliar" },
        { topic: "Grammar", term: "yes-no-questions", definition: "Use 'if' or 'whether' for questions that require a yes or no answer.", translation: "Perguntas de Sim/Não" }
    ]
});