/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "8-3-6",
    grade: "8th Grade",
    bimester: "3",
    chapter: "6",
    chapterTitle: "Living the Hi-Tech Life",
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "In this lesson, you will learn to:<br><br>• Talk about technology, gadgets, and modern life.<br>• Discuss the benefits and problems of technology.<br>• Use Present Perfect with \"Ever\", \"Never\", and \"Already\".<br>• Use \"For\" and \"Since\" to talk about duration.<br>• Use Present Perfect with Superlatives (\"The best... ever\").",
            welcome: "Hello, Tech Explorers! It's Mr. D!<br><br>Welcome to \"Living the Hi-Tech Life\"! Technology is amazing, right? Smartphones, VR, instant messages... but is it always good? Today, we will explore how gadgets change our lives. We'll learn to talk about our tech experiences using the Present Perfect. Have you ever used a VR headset? How long have you had your phone? Let's log in and find out!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about technology, gadgets, and modern life. Discuss the benefits and problems of technology. Use Present Perfect with Ever, Never, and Already. Use For and Since to talk about duration. And use Present Perfect with Superlatives, like The best ever.",
                welcome: "TTS: Hello, Tech Explorers! It's Mr. D! Welcome to Living the Hi-Tech Life! Technology is amazing, right? Smartphones, VR, instant messages... but is it always good? Today, we will explore how gadgets change our lives. We'll learn to talk about our tech experiences using the Present Perfect. Have you ever used a VR headset? How long have you had your phone? Let's log in and find out!"
            }
        },

        // ======================================================
        // STEP 1: WHAT'S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of electronic beeps and a futuristic game sound. Albert is wearing a headset, moving his arms. Celine watches him.", 
            contextAudio: "audio/8-3-6/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Albert! What are you [doing](tooltip:doing)? You look [funny](tooltip:funny)!" 
                },
                { 
                    speaker: "Albert", 
                    text: "Oh, hi Celine! I am [using](tooltip:using) my new [VR headset](tooltip:vr-headset). [Have you ever tried](tooltip:have-you-ever-tried) one?" 
                },
                { 
                    speaker: "Celine", 
                    text: "No, I [have never used](tooltip:have-never-used) [virtual reality](tooltip:virtual-reality). Is it [cool](tooltip:cool)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "It is the [most exciting](tooltip:most-exciting) thing I [have ever seen](tooltip:have-ever-seen)! I [have had](tooltip:have-had) it [since](tooltip:since) yesterday." 
                },
                { 
                    speaker: "Celine", 
                    text: "Wow. [How long](tooltip:how-long) have you been playing?" 
                },
                { 
                    speaker: "Albert", 
                    text: "[For](tooltip:for) two hours. But my eyes are tired. It causes [eye strain](tooltip:eye-strain)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Be careful! [Technology](tooltip:technology) is [convenient](tooltip:convenient), but it can be a [distraction](tooltip:distraction)." 
                }
            ]
        },

        // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
        // ======================================================
        {
            title: "Say the word",
            audio2b: "", // Will be provided in the next part
            subPages: [
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],

            // 2A: Vocabulary Lists (Tabbed)
            areas: [
                {
                    title: "Tech Verbs (Base - Participle)",
                    audio: "TTS: Use Used. Charge Charged. Download Downloaded. Upload Uploaded. Install Installed. Update Updated. Click Clicked. Browse Browsed. Search Searched. Stream Streamed. Connect Connected. Type Typed. Print Printed. Save Saved. Send Sent. Have Had. Buy Bought.",
                    items: [
                        { term: "Use - Used", trans: "Usar" },
                        { term: "Charge - Charged", trans: "Carregar (bateria)" },
                        { term: "Download - Downloaded", trans: "Baixar" },
                        { term: "Upload - Uploaded", trans: "Enviar (subir)" },
                        { term: "Install - Installed", trans: "Instalar" },
                        { term: "Update - Updated", trans: "Atualizar" },
                        { term: "Click - Clicked", trans: "Clicar" },
                        { term: "Browse - Browsed", trans: "Navegar (na internet)" },
                        { term: "Search - Searched", trans: "Pesquisar" },
                        { term: "Stream - Streamed", trans: "Transmitir / Assistir online" },
                        { term: "Connect - Connected", trans: "Conectar" },
                        { term: "Type - Typed", trans: "Digitar" },
                        { term: "Print - Printed", trans: "Imprimir" },
                        { term: "Save - Saved", trans: "Salvar" },
                        { term: "Send - Sent", trans: "Enviar" },
                        { term: "Have - Had", trans: "Ter" },
                        { term: "Buy - Bought", trans: "Comprar" }
                    ]
                },
                {
                    title: "Tech Nouns & Gadgets",
                    audio: "TTS: Technology. Device. Gadget. Smartphone. Computer. Laptop. Tablet. App. Internet. Website. Social Media. Wi-Fi. Screen. Keyboard. Mouse. Email. Message. Online game.",
                    items: [
                        { term: "Technology", trans: "Tecnologia" },
                        { term: "Device / Gadget", trans: "Dispositivo / Aparelho" },
                        { term: "Smartphone", trans: "Smartphone" },
                        { term: "Computer", trans: "Computador" },
                        { term: "Laptop", trans: "Notebook / Laptop" },
                        { term: "Tablet", trans: "Tablet" },
                        { term: "App (Application)", trans: "Aplicativo" },
                        { term: "Internet", trans: "Internet" },
                        { term: "Website", trans: "Site / Website" },
                        { term: "Social Media", trans: "Mídia Social" },
                        { term: "Wi-Fi", trans: "Wi-Fi" },
                        { term: "Screen", trans: "Tela" },
                        { term: "Keyboard", trans: "Teclado" },
                        { term: "Mouse", trans: "Mouse" },
                        { term: "Email", trans: "Email" },
                        { term: "Message", trans: "Mensagem" },
                        { term: "Online game", trans: "Jogo online" }
                    ]
                },
                {
                    title: "Quality of Life vs. Hindrances",
                    audio: "TTS: Quality of Life. Convenient. Easy. Fast. Connected. Access to information. Communication. Entertainment. Efficiency. Improvement. Hindrance. Inconvenient. Difficult. Slow. Isolated. Information overload. Distraction. Addiction. Eye strain. Dependence.",
                    items: [
                        { term: "Quality of Life", trans: "Qualidade de Vida" },
                        { term: "Convenient", trans: "Conveniente" },
                        { term: "Easy / Easier", trans: "Fácil / Mais fácil" },
                        { term: "Fast / Faster", trans: "Rápido / Mais rápido" },
                        { term: "Connected", trans: "Conectado" },
                        { term: "Access to information", trans: "Acesso à informação" },
                        { term: "Communication", trans: "Comunicação" },
                        { term: "Entertainment", trans: "Entretenimento" },
                        { term: "Efficiency", trans: "Eficiência" },
                        { term: "Improvement", trans: "Melhoria" },
                        { term: "Hindrance", trans: "Obstáculo / Desvantagem" },
                        { term: "Inconvenient", trans: "Inconveniente" },
                        { term: "Difficult / Harder", trans: "Difícil / Mais difícil" },
                        { term: "Slow / Slower", trans: "Lento / Mais lento" },
                        { term: "Isolated", trans: "Isolado" },
                        { term: "Information overload", trans: "Sobrecarga de informação" },
                        { term: "Distraction", trans: "Distração" },
                        { term: "Addiction", trans: "Vício" },
                        { term: "Eye strain", trans: "Cansaço visual" },
                        { term: "Dependence", trans: "Dependência" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Have you ever. I have never. She has already. Not yet. How long. I have had it for. Since.",
                    items: [
                        { term: "Have you ever...?", trans: "Você já...? (alguma vez)" },
                        { term: "I have never...", trans: "Eu nunca..." },
                        { term: "She has already...", trans: "Ela já..." },
                        { term: "Not yet", trans: "Ainda não" },
                        { term: "How long...?", trans: "Há quanto tempo...?" },
                        { term: "I have had it for...", trans: "Eu tenho isso por/há..." },
                        { term: "Since", trans: "Desde" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Tech Verbs",
                    audio: "TTS: I have used this app many times. Have you charged your phone? I have downloaded the game. She has uploaded the photos. We have installed the software. He has updated his profile. Have you clicked the link? I have browsed that site. They have searched for the answer. I have streamed a movie. We have connected to the Wi-Fi. She has typed the message. I have printed the document. He has saved his work. I have sent an email. We have had this computer for years. She has bought a new laptop.",
                    items: [
                        { term: "Use", sent: "I have used this app many times.", trans: "<span style='color:#0077b6'>Eu usei este aplicativo muitas vezes.</span>" },
                        { term: "Charge", sent: "Have you charged your phone?", trans: "<span style='color:#0077b6'>Você carregou seu telefone?</span>" },
                        { term: "Download", sent: "I have downloaded the game.", trans: "<span style='color:#0077b6'>Eu baixei o jogo.</span>" },
                        { term: "Upload", sent: "She has uploaded the photos.", trans: "<span style='color:#0077b6'>Ela enviou as fotos.</span>" },
                        { term: "Install", sent: "We have installed the software.", trans: "<span style='color:#0077b6'>Nós instalamos o software.</span>" },
                        { term: "Update", sent: "He has updated his profile.", trans: "<span style='color:#0077b6'>Ele atualizou o perfil dele.</span>" },
                        { term: "Click", sent: "Have you clicked the link?", trans: "<span style='color:#0077b6'>Você clicou no link?</span>" },
                        { term: "Browse", sent: "I have browsed that site.", trans: "<span style='color:#0077b6'>Eu naveguei naquele site.</span>" },
                        { term: "Search", sent: "They have searched for the answer.", trans: "<span style='color:#0077b6'>Eles pesquisaram a resposta.</span>" },
                        { term: "Stream", sent: "I have streamed a movie.", trans: "<span style='color:#0077b6'>Eu transmiti um filme.</span>" },
                        { term: "Connect", sent: "We have connected to the Wi-Fi.", trans: "<span style='color:#0077b6'>Nós conectamos ao Wi-Fi.</span>" },
                        { term: "Type", sent: "She has typed the message.", trans: "<span style='color:#0077b6'>Ela digitou a mensagem.</span>" },
                        { term: "Print", sent: "I have printed the document.", trans: "<span style='color:#0077b6'>Eu imprimi o documento.</span>" },
                        { term: "Save", sent: "He has saved his work.", trans: "<span style='color:#0077b6'>Ele salvou o trabalho dele.</span>" },
                        { term: "Send", sent: "I have sent an email.", trans: "<span style='color:#0077b6'>Eu enviei um e-mail.</span>" },
                        { term: "Have", sent: "We have had this computer for years.", trans: "<span style='color:#0077b6'>Nós temos este computador há anos.</span>" },
                        { term: "Buy", sent: "She has bought a new laptop.", trans: "<span style='color:#0077b6'>Ela comprou um laptop novo.</span>" }
                    ]
                },
                {
                    title: "Tech Nouns & Gadgets",
                    audio: "TTS: Technology makes life easier. My smartphone is essential. I work on my laptop. The tablet is great for reading. This app is very useful. The internet connects us. Is the Wi-Fi working? The screen is broken.",
                    items: [
                        { term: "Technology", sent: "Technology makes life easier.", trans: "<span style='color:#0077b6'>A tecnologia torna a vida mais fácil.</span>" },
                        { term: "Smartphone", sent: "My smartphone is essential.", trans: "<span style='color:#0077b6'>Meu smartphone é essencial.</span>" },
                        { term: "Laptop", sent: "I work on my laptop.", trans: "<span style='color:#0077b6'>Eu trabalho no meu laptop.</span>" },
                        { term: "Tablet", sent: "The tablet is great for reading.", trans: "<span style='color:#0077b6'>O tablet é ótimo para ler.</span>" },
                        { term: "App", sent: "This app is very useful.", trans: "<span style='color:#0077b6'>Este aplicativo é muito útil.</span>" },
                        { term: "Internet", sent: "The internet connects us.", trans: "<span style='color:#0077b6'>A internet nos conecta.</span>" },
                        { term: "Wi-Fi", sent: "Is the Wi-Fi working?", trans: "<span style='color:#0077b6'>O Wi-Fi está funcionando?</span>" },
                        { term: "Screen", sent: "The screen is broken.", trans: "<span style='color:#0077b6'>A tela está quebrada.</span>" }
                    ]
                },
                {
                    title: "Quality vs. Hindrances",
                    audio: "TTS: Online shopping is convenient. My phone is a big distraction. Tech addiction is real. I have eye strain from the screen.",
                    items: [
                        { term: "Convenient", sent: "Online shopping is convenient.", trans: "<span style='color:#0077b6'>Compras online são convenientes.</span>" },
                        { term: "Distraction", sent: "My phone is a big distraction.", trans: "<span style='color:#0077b6'>Meu telefone é uma grande distração.</span>" },
                        { term: "Addiction", sent: "Tech addiction is real.", trans: "<span style='color:#0077b6'>O vício em tecnologia é real.</span>" },
                        { term: "Eye strain", sent: "I have eye strain from the screen.", trans: "<span style='color:#0077b6'>Estou com cansaço visual por causa da tela.</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Have you ever played VR? I have never lost my phone. How long have you lived here? I have been here since 2010. I have studied English for two years.",
                    items: [
                        { term: "Have you ever...?", sent: "Have you ever played VR?", trans: "<span style='color:#0077b6'>Você já jogou RV?</span>" },
                        { term: "I have never...", sent: "I have never lost my phone.", trans: "<span style='color:#0077b6'>Eu nunca perdi meu telefone.</span>" },
                        { term: "How long...?", sent: "How long have you lived here?", trans: "<span style='color:#0077b6'>Há quanto tempo você mora aqui?</span>" },
                        { term: "Since", sent: "I have been here since 2010.", trans: "<span style='color:#0077b6'>Estou aqui desde 2010.</span>" },
                        { term: "For", sent: "I have studied English for two years.", trans: "<span style='color:#0077b6'>Eu estudo inglês há dois anos.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills
            drills: [
                {
                    type: "mcq",
                    q: "Choose the correct past participle for 'Write':",
                    options: [
                        {t: "Writed", c: false},
                        {t: "Wrote", c: false},
                        {t: "Written", c: true},
                        {t: "Writing", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I need to _______ the new game from the store.\"",
                    options: [
                        {t: "download", c: true},
                        {t: "charge", c: false},
                        {t: "click", c: false},
                        {t: "type", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A portable computer that you can carry in a bag is called a...",
                    options: [
                        {t: "Desktop", c: false},
                        {t: "Laptop", c: true},
                        {t: "Mouse", c: false},
                        {t: "Screen", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "When you look at a screen for too long, you might get _______.",
                    options: [
                        {t: "Eye strain", c: true},
                        {t: "Virus", c: false},
                        {t: "Wi-Fi", c: false},
                        {t: "Keyboard", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete the Present Perfect question: \"_______ you ever used a smartwatch?\"",
                    options: [
                        {t: "Has", c: false},
                        {t: "Do", c: false},
                        {t: "Have", c: true},
                        {t: "Did", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"She _______ never seen that movie before.\"",
                    options: [
                        {t: "have", c: false},
                        {t: "has", c: true},
                        {t: "is", c: false},
                        {t: "was", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I have had this phone _______ two years.\"",
                    options: [
                        {t: "since", c: false},
                        {t: "for", c: true},
                        {t: "ago", c: false},
                        {t: "in", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"We have been online _______ 8 AM this morning.\"",
                    options: [
                        {t: "for", c: false},
                        {t: "since", c: true},
                        {t: "in", c: false},
                        {t: "at", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Which of these is considered a technology problem?",
                    options: [
                        {t: "Convenience", c: false},
                        {t: "Efficiency", c: false},
                        {t: "Addiction", c: true},
                        {t: "Improvement", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I have _______ finished my homework. I am free now!\"",
                    options: [
                        {t: "already", c: true},
                        {t: "yet", c: false},
                        {t: "ever", c: false},
                        {t: "since", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past participle for 'Buy':",
                    options: [
                        {t: "Buyed", c: false},
                        {t: "Bought", c: true},
                        {t: "Boughten", c: false},
                        {t: "Buying", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past participle for 'See':",
                    options: [
                        {t: "Saw", c: false},
                        {t: "Seed", c: false},
                        {t: "Seen", c: true},
                        {t: "Seeing", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past participle for 'Take':",
                    options: [
                        {t: "Took", c: false},
                        {t: "Taked", c: false},
                        {t: "Taken", c: true},
                        {t: "Taking", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The wireless connection to the internet is called _______.",
                    options: [
                        {t: "Mouse", c: false},
                        {t: "Keyboard", c: false},
                        {t: "Screen", c: false},
                        {t: "Wi-Fi", c: true}
                    ]
                },
                {
                    type: "mcq",
                    q: "Facebook, Instagram, and TikTok are examples of _______.",
                    options: [
                        {t: "Social Media", c: true},
                        {t: "Hardware", c: false},
                        {t: "Offline tools", c: false},
                        {t: "Printers", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "When a system makes you feel alone even if you are connected, you feel _______.",
                    options: [
                        {t: "Efficient", c: false},
                        {t: "Isolated", c: true},
                        {t: "Convenient", c: false},
                        {t: "Fast", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A _______ is a problem or something that stops progress.",
                    options: [
                        {t: "Hindrance", c: true},
                        {t: "Strategy", c: false},
                        {t: "Technique", c: false},
                        {t: "Benefit", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Receiving too much information at once is called information _______.",
                    options: [
                        {t: "underload", c: false},
                        {t: "overload", c: true},
                        {t: "overtime", c: false},
                        {t: "loading", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "To watch a video as it plays live on the internet is to _______.",
                    options: [
                        {t: "stream", c: true},
                        {t: "print", c: false},
                        {t: "charge", c: false},
                        {t: "click", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Something that is easy and useful for you is _______.",
                    options: [
                        {t: "Difficult", c: false},
                        {t: "Convenient", c: true},
                        {t: "Slow", c: false},
                        {t: "Inconvenient", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past participle for 'Go':",
                    options: [
                        {t: "Went", c: false},
                        {t: "Goed", c: false},
                        {t: "Gone", c: true},
                        {t: "Going", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past participle for 'Do':",
                    options: [
                        {t: "Did", c: false},
                        {t: "Done", c: true},
                        {t: "Doed", c: false},
                        {t: "Doing", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A person born during the age of digital technology is a digital _______.",
                    options: [
                        {t: "alien", c: false},
                        {t: "native", c: true},
                        {t: "tourist", c: false},
                        {t: "stranger", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "To put a file or video onto the internet is to _______.",
                    options: [
                        {t: "upload", c: true},
                        {t: "download", c: false},
                        {t: "offline", c: false},
                        {t: "browse", c: false}
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
                    title: "Ever / Never",
                    audio: "TTS: We use the Present Perfect to talk about experiences in our lives without saying when they happened. Ever is used in questions to mean at any time. Never is used in affirmative sentences to give a negative meaning. For example: Have you ever played VR games? Or, I have never seen that movie.",
                    explanation: "We use the Present Perfect to talk about experiences in our lives up to now, without saying exactly <i>when</i> they happened.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos o Present Perfect para falar sobre experiências em nossas vidas até agora, sem dizer exatamente 'quando' aconteceram.)</span>",
                    samples: [
                        { en: "EVER: Used in questions (alguma vez / já). Have you ever lost your phone?", pt: "<span style='color:#0077b6'>Você já perdeu seu telefone?</span>" },
                        { en: "NEVER: Used for negative meanings (nunca). I have never used a typewriter.", pt: "<span style='color:#0077b6'>Eu nunca usei uma máquina de escrever.</span>" }
                    ]
                },
                {
                    title: "Just / Already / Yet",
                    audio: "TTS: We use these adverbs to talk about recent actions or expectations. Just means a very short time ago. Already means sooner than expected. Yet means until now and is used in negatives and questions. For example: I have just downloaded the app. He hasn't finished yet.",
                    explanation: "We use these adverbs to talk about recent actions or expectations.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos estes advérbios para falar de ações recentes ou expectativas.)</span>",
                    samples: [
                        { en: "JUST: A very short time ago (acabou de). I have just clicked the link.", pt: "<span style='color:#0077b6'>Eu acabei de clicar no link.</span>" },
                        { en: "ALREADY: Sooner than expected (já). You have already updated your profile.", pt: "<span style='color:#0077b6'>Você já atualizou seu perfil.</span>" },
                        { en: "YET: Until now (ainda / já). Used at the end of sentences. Has she arrived yet?", pt: "<span style='color:#0077b6'>Ela já chegou? / Ela não chegou ainda.</span>" }
                    ]
                },
                {
                    title: "For / Since",
                    audio: "TTS: We use these to talk about an action that started in the past and continues to the present. Use For with a period of time, like for two years. Use Since with a specific starting point, like since Monday or since 2010.",
                    explanation: "We use this to talk about an action that started in the past and <b>continues</b> to the present.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos isso para falar de uma ação que começou no passado e continua até o presente.)</span>",
                    samples: [
                        { en: "FOR: A period of time (por / há). I have had this tablet for two years.", pt: "<span style='color:#0077b6'>Eu tenho este tablet há dois anos.</span>" },
                        { en: "SINCE: A specific starting point (desde). My laptop has been slow since yesterday.", pt: "<span style='color:#0077b6'>Meu notebook está lento desde ontem.</span>" }
                    ]
                },
                {
                    title: "Superlative + Ever",
                    audio: "TTS: We use this structure to express that something is the best, worst, or most interesting experience in our lives. Structure: It is the plus superlative plus subject plus have plus ever plus participle. For example, This is the best game I have ever played.",
                    explanation: "We use this structure to express that something is the <b>best, worst, or most interesting</b> experience in our lives.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos esta estrutura para expressar que algo é a melhor, pior ou mais interessante experiência de nossas vidas.)</span>",
                    samples: [
                        { en: "This is the best phone I have ever had.", pt: "<span style='color:#0077b6'>Este é o melhor telefone que eu já tive.</span>" },
                        { en: "It is the worst app we have ever used.", pt: "<span style='color:#0077b6'>É o pior aplicativo que nós já usamos.</span>" },
                        { en: "That is the most expensive gadget she has ever bought.", pt: "<span style='color:#0077b6'>Aquele é o aparelho mais caro que ela já comprou.</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Ever / Never",
                    audio: "audio/8-3-6/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Have you ever used a 3D printer?", 
                            pt: "<span style='color:#0077b6'>Você já usou uma impressora 3D?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, I have never tried it. Have they created anything cool with it?", 
                            pt: "<span style='color:#0077b6'>Não, eu nunca tentei. Eles já criaram algo legal com isso?</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Just / Already / Yet",
                    audio: "audio/8-3-6/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Have you updated your software yet?", 
                            pt: "<span style='color:#0077b6'>Você já atualizou seu software?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes, I have already done it. I have just restarted the computer.", 
                            pt: "<span style='color:#0077b6'>Sim, eu já fiz isso. Eu acabei de reiniciar o computador.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: For / Since",
                    audio: "audio/8-3-6/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "How long have you had this smartwatch?", 
                            pt: "<span style='color:#0077b6'>Há quanto tempo você tem este relógio inteligente?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "I have had it since my birthday. I have worn it for three months.", 
                            pt: "<span style='color:#0077b6'>Eu o tenho desde o meu aniversário. Eu o uso há três meses.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 4: Superlative + Ever",
                    audio: "audio/8-3-6/step3_dialogue4.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Do you like this game?", 
                            pt: "<span style='color:#0077b6'>Você gosta deste jogo?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes! It is the most exciting game I have ever played.", 
                            pt: "<span style='color:#0077b6'>Sim! É o jogo mais empolgante que eu já joguei.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice Drills
            grammarDrills: [
                {
                    type: "mcq",
                    q: "\"I _______ (never/visit) a tech museum.\"",
                    options: [
                        {t: "has never visited", c: false},
                        {t: "have ever visited", c: false},
                        {t: "have never visited", c: true},
                        {t: "never have visited", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"She hasn't charged her phone _______.\"",
                    options: [
                        {t: "just", c: false},
                        {t: "already", c: false},
                        {t: "yet", c: true},
                        {t: "ever", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"We have been friends _______ ten years.\"",
                    options: [
                        {t: "since", c: false},
                        {t: "for", c: true},
                        {t: "ago", c: false},
                        {t: "in", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"He has worked here _______ 2018.\"",
                    options: [
                        {t: "for", c: false},
                        {t: "since", c: true},
                        {t: "during", c: false},
                        {t: "at", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"This is the fastest car I _______ driven.\"",
                    options: [
                        {t: "have never", c: false},
                        {t: "has ever", c: false},
                        {t: "have ever", c: true},
                        {t: "ever have", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"How long _______ (she/have) that laptop?\"",
                    options: [
                        {t: "how long she has", c: false},
                        {t: "has she had", c: true},
                        {t: "does she have", c: false},
                        {t: "how long she had", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Subject Nouns: \"The students _______ (finish) the test already.\"",
                    options: [
                        {t: "have finished", c: true},
                        {t: "has finished", c: false},
                        {t: "finished", c: false},
                        {t: "have finish", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Subject Pronouns: \"The battery _______ (not/last) for long.\"",
                    options: [
                        {t: "haven't lasted", c: false},
                        {t: "don't last", c: false},
                        {t: "hasn't lasted", c: true},
                        {t: "didn't lasted", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"Have you _______ tried using a VR headset?\"",
                    options: [
                        {t: "never", c: false},
                        {t: "yet", c: false},
                        {t: "ever", c: true},
                        {t: "for", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I have _______ bought a new tablet! It's right here.\"",
                    options: [
                        {t: "yet", c: false},
                        {t: "just", c: true},
                        {t: "ever", c: false},
                        {t: "since", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"It is the _______ movie I have ever watched!\"",
                    options: [
                        {t: "better", c: false},
                        {t: "best", c: true},
                        {t: "good", c: false},
                        {t: "bestest", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"We _______ (not/see) that trend on TikTok yet.\"",
                    options: [
                        {t: "hasn't seen", c: false},
                        {t: "didn't see", c: false},
                        {t: "haven't seen", c: true},
                        {t: "haven't saw", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"He has _______ updated his profile twice today.\"",
                    options: [
                        {t: "yet", c: false},
                        {t: "already", c: true},
                        {t: "ever", c: false},
                        {t: "for", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"She _______ (live) in London since 2015.\"",
                    options: [
                        {t: "has lived", c: true},
                        {t: "have lived", c: false},
                        {t: "lived", c: false},
                        {t: "has live", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"That is the _______ app I have ever downloaded!\"",
                    options: [
                        {t: "worst", c: true},
                        {t: "badder", c: false},
                        {t: "worse", c: false},
                        {t: "most bad", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"_______ has he used that computer?\" \"For three hours.\"",
                    options: [
                        {t: "How much", c: false},
                        {t: "How long", c: true},
                        {t: "How many", c: false},
                        {t: "How often", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"They _______ (just/install) the new Wi-Fi router.\"",
                    options: [
                        {t: "have just installed", c: true},
                        {t: "has just installed", c: false},
                        {t: "just installed", c: false},
                        {t: "have just install", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I have _______ been offline for a whole week.\"",
                    options: [
                        {t: "ever", c: false},
                        {t: "yet", c: false},
                        {t: "never", c: true},
                        {t: "for", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"The system _______ (be) slow for two days.\"",
                    options: [
                        {t: "have been", c: false},
                        {t: "is being", c: false},
                        {t: "has been", c: true},
                        {t: "was been", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"It is the _______ expensive device she has ever bought.\"",
                    options: [
                        {t: "more", c: false},
                        {t: "best", c: false},
                        {t: "most", c: true},
                        {t: "much", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"Has your brother _______ played online games?\"",
                    options: [
                        {t: "already", c: false},
                        {t: "ever", c: true},
                        {t: "yet", c: false},
                        {t: "since", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"We _______ (not/receive) any emails since yesterday.\"",
                    options: [
                        {t: "haven't received", c: true},
                        {t: "hasn't received", c: false},
                        {t: "didn't receive", c: false},
                        {t: "haven't receive", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"They have _______ finished the project on time.\"",
                    options: [
                        {t: "yet", c: false},
                        {t: "already", c: true},
                        {t: "ever", c: false},
                        {t: "since", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "\"How long _______ (you/know) your best friend?\"",
                    options: [
                        {t: "have you known", c: true},
                        {t: "has you known", c: false},
                        {t: "do you know", c: false},
                        {t: "you have known", c: false}
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
                    text: "I have had this phone for two years.<br><small style='color:#0077b6'>(Eu tenho este telefone há dois anos.)</small>", 
                    audio: "TTS: I have had this phone for two years.", 
                    arrow: "↘" 
                },
                { 
                    text: "Have you ever used a VR headset?<br><small style='color:#0077b6'>(Você já usou um headset de RV?)</small>", 
                    audio: "TTS: Have you ever used a VR headset?", 
                    arrow: "↗" 
                },
                { 
                    text: "She has already downloaded the app.<br><small style='color:#0077b6'>(Ela já baixou o aplicativo.)</small>", 
                    audio: "TTS: She has already downloaded the app.", 
                    arrow: "↘" 
                },
                { 
                    text: "This is the best game I have ever played.<br><small style='color:#0077b6'>(Este é o melhor jogo que eu já joguei.)</small>", 
                    audio: "TTS: This is the best game I have ever played.", 
                    arrow: "↘" 
                },
                { 
                    text: "How long have you lived here?<br><small style='color:#0077b6'>(Há quanto tempo você mora aqui?)</small>", 
                    audio: "TTS: How long have you lived here?", 
                    arrow: "↘" 
                },
                { 
                    text: "He hasn't updated his profile yet.<br><small style='color:#0077b6'>(Ele ainda não atualizou o perfil dele.)</small>", 
                    audio: "TTS: He hasn't updated his profile yet.", 
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
                    instruction: "Listen to Albert talking about his new computer. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre o computador novo dele. Digite as palavras que faltam.)</small>",
                    audio: "TTS: I have bought a new computer. I have used it for two weeks. It is very fast.",
                    text: "I have [bought] a new computer. I have [used] it [for] two weeks. It is very [fast]."
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation about a movie. Choose the correct option.<br><small style='color:#0077b6'>(Ouça a conversa sobre um filme. Escolha a opção correta.)</small>",
                    audio: "audio/8-3-6/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: Have you [seen | see | saw | seeing] the new sci-fi movie?", a: "seen" },
                        { q: "Albert: No, I [haven't | have | didn't | has]. Have you?", a: "haven't" },
                        { q: "Celine: Yes. It is the [best | worst | better | good] movie I have ever seen.", a: "best" }
                    ]
                },
                // Drill 3: Audio Choice (MP3)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer.<br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta correta.)</small>",
                    audio: "audio/8-3-6/step5_drill3.mp3",
                    options: [
                        { t: "She is offline.", c: false },
                        { t: "She has been online since 9 AM.", c: true },
                        { t: "She was online yesterday.", c: false },
                        { t: "She goes online every day.", c: false }
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
                    title: "Narration: The Digital Detox",
                    audio: "TTS: The Digital Detox. Last month, I decided to try a digital detox. I have used smartphones since I was 10, so it was hard. For one week, I didn't use any social media. At first, I felt disconnected and bored. But after a few days, I noticed a change. I have read three books this week! I have also slept better. I have learned that life is good offline too. || audio/8-3-6/p6_text1.mp3",
                    body: "Last month, I decided to try a \"digital detox\". I have used smartphones since I was 10, so it was hard. For one week, I didn't use any social media. At first, I felt disconnected and bored. But after a few days, I noticed a change. I have read three books this week! I have also slept better. I have learned that life is good offline too.",
                    questions: [
                        { 
                            q: "How long has the writer used smartphones?", 
                            options: [ 
                                {t: "Since last month", c: false}, 
                                {t: "Since he was 10", c: true}, 
                                {t: "For one week", c: false}, 
                                {t: "Never", c: false}
                            ] 
                        },
                        { 
                            q: "How long was the digital detox?", 
                            options: [ 
                                {t: "One month", c: false}, 
                                {t: "One day", c: false}, 
                                {t: "One week", c: true}, 
                                {t: "Three days", c: false}
                            ] 
                        },
                        { 
                            q: "What has he done during the detox?", 
                            options: [ 
                                {t: "Played video games", c: false}, 
                                {t: "Read three books", c: true}, 
                                {t: "Watched TV", c: false}, 
                                {t: "Used social media", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: Tech Trouble",
                    audio: "audio/8-3-6/p6_text2.mp3",
                    body: "<b>Albert:</b> Hi Celine. You look frustrated. What's wrong?<br><b>Celine:</b> My laptop is so slow! I have had it for five years.<br><b>Albert:</b> That is a long time for a laptop. Have you updated the software?<br><b>Celine:</b> Yes, I have already updated everything, but it is still slow.<br><b>Albert:</b> Maybe you need a new one. I have just bought a new tablet, and it is very fast.<br><b>Celine:</b> I haven't saved enough money yet. I need to wait.",
                    questions: [
                        { 
                            q: "How long has Celine had her laptop?", 
                            options: [ 
                                {t: "For one year", c: false}, 
                                {t: "Since yesterday", c: false}, 
                                {t: "For five years", c: true}, 
                                {t: "She doesn't have one", c: false}
                            ] 
                        },
                        { 
                            q: "Has she updated the software?", 
                            options: [ 
                                {t: "No, she hasn't.", c: false}, 
                                {t: "Yes, she has.", c: true}, 
                                {t: "She never updates.", c: false}, 
                                {t: "She doesn't know how.", c: false}
                            ] 
                        },
                        { 
                            q: "Why doesn't she buy a new one?", 
                            options: [ 
                                {t: "She hasn't saved enough money.", c: true}, 
                                {t: "She doesn't like tablets.", c: false}, 
                                {t: "She has already bought one.", c: false}, 
                                {t: "She prefers slow laptops.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: The Smart Home",
                    audio: "TTS: The Smart Home. My uncle lives in a smart home. It is the most convenient house I have ever visited. He has connected everything to the internet. He can control the lights and the temperature with his phone. He has used this system since 2020. He says it has improved his quality of life. However, when the internet goes down, nothing works! That is a big hindrance. || audio/8-3-6/p6_text3.mp3",
                    body: "My uncle lives in a \"smart home\". It is the most convenient house I have ever visited. He has connected everything to the internet. He can control the lights and the temperature with his phone. He has used this system since 2020. He says it has improved his quality of life. However, when the internet goes down, nothing works! That is a big hindrance.",
                    questions: [
                        { 
                            q: "What kind of house does the uncle live in?", 
                            options: [ 
                                {t: "An old house", c: false}, 
                                {t: "A smart home", c: true}, 
                                {t: "A disconnected house", c: false}, 
                                {t: "A small apartment", c: false}
                            ] 
                        },
                        { 
                            q: "How long has he used the system?", 
                            options: [ 
                                {t: "For 2020 years", c: false}, 
                                {t: "Since 2020", c: true}, 
                                {t: "Since yesterday", c: false}, 
                                {t: "For two months", c: false}
                            ] 
                        },
                        { 
                            q: "What is the hindrance (problem)?", 
                            options: [ 
                                {t: "It is too expensive.", c: false}, 
                                {t: "It is too hot.", c: false}, 
                                {t: "Nothing works without the internet.", c: true}, 
                                {t: "The lights are broken.", c: false}
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
                // Drill 1: Matching the Meanings (Time Words)
                {
                    type: "matching",
                    instruction: "Match the time word with its usage.<br><small style='color:#0077b6'>(Combine a palavra de tempo com seu uso.)</small>",
                    pairs: [
                        { left: "Since", right: "Starting point (e.g., 2010)", val: "1" },
                        { left: "For", right: "Duration (e.g., 2 years)", val: "2" },
                        { left: "Ever", right: "At any time (life experience)", val: "3" },
                        { left: "Just", right: "A very short time ago", val: "4" }
                    ]
                },
                // Drill 2: Unscramble the Sentences
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a Present Perfect sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase no Present Perfect.)</small>",
                    sentence: "lived / here / have / I / for / years / ten / .",
                    correct: "I have lived here for ten years ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "she / Has / seen / ever / movie / that / ?",
                    correct: "Has she ever seen that movie ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "best / This / the / is / app / ever / have / used / I / .",
                    correct: "This is the best app I have ever used ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "updated / haven't / We / software / the / yet / .",
                    correct: "We haven't updated the software yet ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Since", c: false },
                        { t: "For", c: false },
                        { t: "Already", c: false },
                        { t: "Tomorrow", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Convenient", c: false },
                        { t: "Fast", c: false },
                        { t: "Easy", c: false },
                        { t: "Hindrance", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Downloaded", c: false },
                        { t: "Uploaded", c: false },
                        { t: "Clicked", c: false },
                        { t: "Go", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Smartphone", c: false },
                        { t: "Tablet", c: false },
                        { t: "Laptop", c: false },
                        { t: "Internet", c: true }
                    ]
                },
                // Drill 4: Fill in the Blanks (Drag and Drop)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.<br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "I have known him [since | for | ever | never] school started.", a: "since" },
                        { q: "She has [never | ever | since | for] used a VR headset.", a: "never" },
                        { q: "Have you [ever | never | since | for] clicked a bad link?", a: "ever" },
                        { q: "We have waited [for | since | ever | never] two hours.", a: "for" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: Technology You Own. Now it's your turn! Write about a piece of technology you own (phone, computer, console).<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Tecnologia que Você Possui. Agora é sua vez! Escreva sobre uma tecnologia que você possui (celular, computador, console).)</span></small>",
            example: "\"I have a smartphone. I have had it for one year. It is the best phone I have ever used because the camera is amazing and it is very fast.\"<br><br><small><span style='color:#0077b6'>(\"Eu tenho um smartphone. Eu o tenho há um ano. É o melhor telefone que eu já usei porque a câmera é incrível e ele é muito rápido.\")</span></small>",
            prompts: [
                "What device do you have? (I have a...). <br><small><span style='color:#0077b6'>(Qual dispositivo você tem? Eu tenho um...)</span></small>",
                "How long have you had it? (I have had it for/since...). <br><small><span style='color:#0077b6'>(Há quanto tempo você o tem? Eu o tenho por/desde...)</span></small>",
                "Is it the best device you have ever used? Why? <br><small><span style='color:#0077b6'>(É o melhor dispositivo que você já usou? Por quê?)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Verbs & Gadgets)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- TOPIC 1: TECH VERBS ---
                { 
                    term: "Use", 
                    definition: "To take, hold, or deploy something for a purpose.", 
                    defTrans: "Usar",
                    example: "I use my phone every day.", 
                    audioFront: "TTS: Use",
                    audioBack: "TTS: I use my phone every day." 
                },
                { 
                    term: "Charge", 
                    definition: "To store electrical energy in a battery.", 
                    defTrans: "Carregar (bateria)",
                    example: "I need to charge my laptop.", 
                    audioFront: "TTS: Charge",
                    audioBack: "TTS: I need to charge my laptop." 
                },
                { 
                    term: "Download", 
                    definition: "To copy data from one computer system to another via the internet.", 
                    defTrans: "Baixar",
                    example: "Did you download the file?", 
                    audioFront: "TTS: Download",
                    audioBack: "TTS: Did you download the file?" 
                },
                { 
                    term: "Upload", 
                    definition: "To transfer data from one computer to another, typically to the internet.", 
                    defTrans: "Enviar / Subir",
                    example: "I am uploading a video.", 
                    audioFront: "TTS: Upload",
                    audioBack: "TTS: I am uploading a video." 
                },
                { 
                    term: "Install", 
                    definition: "To place or fix equipment or software in position ready for use.", 
                    defTrans: "Instalar",
                    example: "Install the new software.", 
                    audioFront: "TTS: Install",
                    audioBack: "TTS: Install the new software." 
                },
                { 
                    term: "Update", 
                    definition: "To make something more modern or up to date.", 
                    defTrans: "Atualizar",
                    example: "Please update your app.", 
                    audioFront: "TTS: Update",
                    audioBack: "TTS: Please update your app." 
                },
                { 
                    term: "Click", 
                    definition: "To press a mouse button or tap a screen to select something.", 
                    defTrans: "Clicar",
                    example: "Click the blue button.", 
                    audioFront: "TTS: Click",
                    audioBack: "TTS: Click the blue button." 
                },
                { 
                    term: "Browse", 
                    definition: "To survey or look at information on the internet.", 
                    defTrans: "Navegar (na internet)",
                    example: "I like to browse news sites.", 
                    audioFront: "TTS: Browse",
                    audioBack: "TTS: I like to browse news sites." 
                },
                { 
                    term: "Search", 
                    definition: "To look for information on a computer or the internet.", 
                    defTrans: "Pesquisar",
                    example: "Search for the answer online.", 
                    audioFront: "TTS: Search",
                    audioBack: "TTS: Search for the answer online." 
                },
                { 
                    term: "Stream", 
                    definition: "To transmit or receive data over the internet as a continuous flow.", 
                    defTrans: "Transmitir / Assistir online",
                    example: "We stream music all day.", 
                    audioFront: "TTS: Stream",
                    audioBack: "TTS: We stream music all day." 
                },
                { 
                    term: "Connect", 
                    definition: "To join together so as to provide access and communication.", 
                    defTrans: "Conectar",
                    example: "Connect to the Wi-Fi network.", 
                    audioFront: "TTS: Connect",
                    audioBack: "TTS: Connect to the Wi-Fi network." 
                },
                { 
                    term: "Type", 
                    definition: "To write something on a computer by pressing keys.", 
                    defTrans: "Digitar",
                    example: "She can type very fast.", 
                    audioFront: "TTS: Type",
                    audioBack: "TTS: She can type very fast." 
                },
                { 
                    term: "Print", 
                    definition: "To produce a text or picture on paper using a machine.", 
                    defTrans: "Imprimir",
                    example: "Print your homework.", 
                    audioFront: "TTS: Print",
                    audioBack: "TTS: Print your homework." 
                },
                { 
                    term: "Save", 
                    definition: "To keep data on a computer for future use.", 
                    defTrans: "Salvar",
                    example: "Don't forget to save the document.", 
                    audioFront: "TTS: Save",
                    audioBack: "TTS: Don't forget to save the document." 
                },
                { 
                    term: "Send", 
                    definition: "To cause a message or file to go to a destination.", 
                    defTrans: "Enviar",
                    example: "I will send you an email.", 
                    audioFront: "TTS: Send",
                    audioBack: "TTS: I will send you an email." 
                },

                // --- TOPIC 2: TECH NOUNS & GADGETS ---
                { 
                    term: "Technology", 
                    definition: "Machinery and equipment developed from scientific knowledge.", 
                    defTrans: "Tecnologia",
                    example: "Modern technology is amazing.", 
                    audioFront: "TTS: Technology",
                    audioBack: "TTS: Modern technology is amazing." 
                },
                { 
                    term: "Device / Gadget", 
                    definition: "A small mechanical or electronic device or tool.", 
                    defTrans: "Dispositivo / Aparelho",
                    example: "This gadget tracks my steps.", 
                    audioFront: "TTS: Device. Gadget.",
                    audioBack: "TTS: This gadget tracks my steps." 
                },
                { 
                    term: "Smartphone", 
                    definition: "A mobile phone that performs many functions of a computer.", 
                    defTrans: "Smartphone",
                    example: "My smartphone is new.", 
                    audioFront: "TTS: Smartphone",
                    audioBack: "TTS: My smartphone is new." 
                },
                { 
                    term: "Computer", 
                    definition: "An electronic device for storing and processing data.", 
                    defTrans: "Computador",
                    example: "I work on a computer.", 
                    audioFront: "TTS: Computer",
                    audioBack: "TTS: I work on a computer." 
                },
                { 
                    term: "Laptop", 
                    definition: "A computer that is portable and suitable for use while traveling.", 
                    defTrans: "Laptop / Notebook",
                    example: "He carries his laptop in a bag.", 
                    audioFront: "TTS: Laptop",
                    audioBack: "TTS: He carries his laptop in a bag." 
                },
                { 
                    term: "Tablet", 
                    definition: "A portable PC with a touchscreen display.", 
                    defTrans: "Tablet",
                    example: "Kids love playing on a tablet.", 
                    audioFront: "TTS: Tablet",
                    audioBack: "TTS: Kids love playing on a tablet." 
                },
                { 
                    term: "App", 
                    definition: "An application downloaded by a user to a mobile device.", 
                    defTrans: "Aplicativo",
                    example: "Download this app.", 
                    audioFront: "TTS: App",
                    audioBack: "TTS: Download this app." 
                },
                { 
                    term: "Internet", 
                    definition: "The global communication network that allows computers to connect.", 
                    defTrans: "Internet",
                    example: "The internet is slow today.", 
                    audioFront: "TTS: Internet",
                    audioBack: "TTS: The internet is slow today." 
                },
                { 
                    term: "Website", 
                    definition: "A set of related web pages under a single domain name.", 
                    defTrans: "Site / Website",
                    example: "Visit our website for info.", 
                    audioFront: "TTS: Website",
                    audioBack: "TTS: Visit our website for info." 
                },
                { 
                    term: "Social Media", 
                    definition: "Websites that enable users to create and share content.", 
                    defTrans: "Mídia Social",
                    example: "She posts on social media.", 
                    audioFront: "TTS: Social Media",
                    audioBack: "TTS: She posts on social media." 
                },
                { 
                    term: "Wi-Fi", 
                    definition: "Facility allowing devices to connect to the internet wirelessly.", 
                    defTrans: "Wi-Fi",
                    example: "What is the Wi-Fi password?", 
                    audioFront: "TTS: Wi Fi",
                    audioBack: "TTS: What is the Wi-Fi password?" 
                },
                { 
                    term: "Screen", 
                    definition: "The flat area on a device where images are displayed.", 
                    defTrans: "Tela",
                    example: "Don't touch the screen.", 
                    audioFront: "TTS: Screen",
                    audioBack: "TTS: Don't touch the screen." 
                },
                { 
                    term: "Keyboard", 
                    definition: "A panel of keys that operate a computer.", 
                    defTrans: "Teclado",
                    example: "This keyboard is comfortable.", 
                    audioFront: "TTS: Keyboard",
                    audioBack: "TTS: This keyboard is comfortable." 
                },
                { 
                    term: "Mouse", 
                    definition: "A handheld device used to move a cursor on a screen.", 
                    defTrans: "Mouse",
                    example: "Click the left mouse button.", 
                    audioFront: "TTS: Mouse",
                    audioBack: "TTS: Click the left mouse button." 
                },
                { 
                    term: "Email", 
                    definition: "Messages distributed by electronic means from one user to others.", 
                    defTrans: "Email",
                    example: "Check your email.", 
                    audioFront: "TTS: Email",
                    audioBack: "TTS: Check your email." 
                },
                { 
                    term: "Message", 
                    definition: "A verbal, written, or recorded communication sent to a recipient.", 
                    defTrans: "Mensagem",
                    example: "I received a message.", 
                    audioFront: "TTS: Message",
                    audioBack: "TTS: I received a message." 
                },
                { 
                    term: "Online game", 
                    definition: "A video game played through the Internet.", 
                    defTrans: "Jogo online",
                    example: "He plays an online game.", 
                    audioFront: "TTS: Online game",
                    audioBack: "TTS: He plays an online game." 
                },
                // --- TOPIC 3: QUALITY OF LIFE vs. HINDRANCES ---
                { 
                    term: "Quality of Life", 
                    definition: "The standard of health, comfort, and happiness experienced by a person.", 
                    defTrans: "Qualidade de Vida",
                    example: "Tech improves quality of life.", 
                    audioFront: "TTS: Quality of Life",
                    audioBack: "TTS: Tech improves quality of life." 
                },
                { 
                    term: "Convenient", 
                    definition: "Fitting in well with a person's needs, activities, and plans.", 
                    defTrans: "Conveniente",
                    example: "Online banking is convenient.", 
                    audioFront: "TTS: Convenient",
                    audioBack: "TTS: Online banking is convenient." 
                },
                { 
                    term: "Fast", 
                    definition: "Moving or capable of moving at high speed.", 
                    defTrans: "Rápido",
                    example: "This connection is fast.", 
                    audioFront: "TTS: Fast",
                    audioBack: "TTS: This connection is fast." 
                },
                { 
                    term: "Access to information", 
                    definition: "The ability to find and use information easily.", 
                    defTrans: "Acesso à informação",
                    example: "We have easy access to information.", 
                    audioFront: "TTS: Access to information",
                    audioBack: "TTS: We have easy access to information." 
                },
                { 
                    term: "Entertainment", 
                    definition: "The action of providing amusement or enjoyment.", 
                    defTrans: "Entretenimento",
                    example: "Games are good entertainment.", 
                    audioFront: "TTS: Entertainment",
                    audioBack: "TTS: Games are good entertainment." 
                },
                { 
                    term: "Efficiency", 
                    definition: "The state or quality of being productive without wasting effort.", 
                    defTrans: "Eficiência",
                    example: "Computers increase efficiency.", 
                    audioFront: "TTS: Efficiency",
                    audioBack: "TTS: Computers increase efficiency." 
                },
                { 
                    term: "Improvement", 
                    definition: "An example or instance of making something better.", 
                    defTrans: "Melhoria",
                    example: "Fast internet is a major improvement.", 
                    audioFront: "TTS: Improvement",
                    audioBack: "TTS: Fast internet is a major improvement." 
                },
                { 
                    term: "Hindrance", 
                    definition: "A thing that provides resistance, delay, or obstruction.", 
                    defTrans: "Obstáculo / Desvantagem",
                    example: "Slow internet is a hindrance.", 
                    audioFront: "TTS: Hindrance",
                    audioBack: "TTS: Slow internet is a hindrance." 
                },
                { 
                    term: "Inconvenient", 
                    definition: "Causing trouble, difficulties, or discomfort.", 
                    defTrans: "Inconveniente",
                    example: "A dead battery is inconvenient.", 
                    audioFront: "TTS: Inconvenient",
                    audioBack: "TTS: A dead battery is inconvenient." 
                },
                { 
                    term: "Slow", 
                    definition: "Moving or operating at a low speed.", 
                    defTrans: "Lento",
                    example: "The download is very slow.", 
                    audioFront: "TTS: Slow",
                    audioBack: "TTS: The download is very slow." 
                },
                { 
                    term: "Isolated", 
                    definition: "Feeling alone or having minimal contact with others.", 
                    defTrans: "Isolado",
                    example: "Too much tech makes you feel isolated.", 
                    audioFront: "TTS: Isolated",
                    audioBack: "TTS: Too much tech makes you feel isolated." 
                },
                { 
                    term: "Information overload", 
                    definition: "Exposure to an excessive amount of information or data.", 
                    defTrans: "Sobrecarga de informação",
                    example: "We suffer from information overload.", 
                    audioFront: "TTS: Information overload",
                    audioBack: "TTS: We suffer from information overload." 
                },
                { 
                    term: "Distraction", 
                    definition: "A thing that prevents someone from giving full attention to something.", 
                    defTrans: "Distração",
                    example: "Phones can be a distraction.", 
                    audioFront: "TTS: Distraction",
                    audioBack: "TTS: Phones can be a distraction." 
                },
                { 
                    term: "Addiction", 
                    definition: "The condition of being physically or mentally dependent on a substance or activity.", 
                    defTrans: "Vício",
                    example: "Phone addiction is a problem.", 
                    audioFront: "TTS: Addiction",
                    audioBack: "TTS: Phone addiction is a problem." 
                },
                { 
                    term: "Eye strain", 
                    definition: "Fatigue of the eyes caused by prolonged looking at screens.", 
                    defTrans: "Cansaço visual",
                    example: "Screens cause eye strain.", 
                    audioFront: "TTS: Eye strain",
                    audioBack: "TTS: Screens cause eye strain." 
                },
                { 
                    term: "Dependence", 
                    definition: "The state of relying on or being controlled by someone or something.", 
                    defTrans: "Dependência",
                    example: "We have a dependence on tech.", 
                    audioFront: "TTS: Dependence",
                    audioBack: "TTS: We have a dependence on tech." 
                },

                // --- TOPIC 4: PHRASES & GRAMMAR POINTS ---
                { 
                    term: "Have you ever...?", 
                    definition: "Question used to ask about life experiences at any time in the past.", 
                    defTrans: "Você já...?",
                    example: "Have you ever been to Japan?", 
                    audioFront: "TTS: Have you ever?",
                    audioBack: "TTS: Have you ever been to Japan?" 
                },
                { 
                    term: "How long...?", 
                    definition: "Question used to ask about the duration of an action or state.", 
                    defTrans: "Há quanto tempo...?",
                    example: "How long have you lived here?", 
                    audioFront: "TTS: How long?",
                    audioBack: "TTS: How long have you lived here?" 
                },
                { 
                    term: "Not yet", 
                    definition: "Used to say that something expected hasn't happened until now.", 
                    defTrans: "Ainda não",
                    example: "I haven't finished yet.", 
                    audioFront: "TTS: Not yet",
                    audioBack: "TTS: I haven't finished yet." 
                },
                { 
                    term: "Ever / Never", 
                    definition: "Ever: at any time. Never: at no time in the past.", 
                    defTrans: "Alguma vez / Nunca",
                    example: "I have never broken a bone.", 
                    audioFront: "TTS: Ever. Never.",
                    audioBack: "TTS: I have never broken a bone." 
                },
                { 
                    term: "Just", 
                    definition: "Used for actions that happened a very short time ago.", 
                    defTrans: "Acabou de",
                    example: "I have just arrived.", 
                    audioFront: "TTS: Just",
                    audioBack: "TTS: I have just arrived." 
                },
                { 
                    term: "Already", 
                    definition: "Used for actions that happened sooner than expected.", 
                    defTrans: "Já (antes do esperado)",
                    example: "I have already done it.", 
                    audioFront: "TTS: Already",
                    audioBack: "TTS: I have already done it." 
                },
                { 
                    term: "Yet", 
                    definition: "Used in negative sentences and questions to mean 'until now'.", 
                    defTrans: "Ainda / Já (final de frase)",
                    example: "Has he called yet?", 
                    audioFront: "TTS: Yet",
                    audioBack: "TTS: Has he called yet?" 
                },
                { 
                    term: "For / Since", 
                    definition: "For: period of time. Since: starting point in time.", 
                    defTrans: "Por / Desde",
                    example: "I have waited for an hour since 2 PM.", 
                    audioFront: "TTS: For. Since.",
                    audioBack: "TTS: I have waited for an hour since 2 PM." 
                },
                { 
                    term: "Superlative + Ever", 
                    definition: "Structure used to emphasize a unique or extreme experience.", 
                    defTrans: "O mais... que eu já...",
                    example: "This is the best game I have ever played.", 
                    audioFront: "TTS: Superlative and Ever",
                    audioBack: "TTS: This is the best game I have ever played." 
                }
            ]
        }
    ], // Closes steps

    // ======================================================
    // GLOSSARY (Part 1: Context, Tech Verbs & Gadgets)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "doing", 
            definition: "The act of performing an activity or task.", 
            translation: "fazendo" 
        },
        { 
            topic: "Context", 
            term: "funny", 
            definition: "Causing laughter or amusement; humorous.", 
            translation: "engraçado" 
        },
        { 
            topic: "Context", 
            term: "using", 
            definition: "The act of employing something for a purpose.", 
            translation: "usando" 
        },
        { 
            topic: "Context", 
            term: "vr-headset", 
            definition: "A device worn over the eyes that provides virtual reality images.", 
            translation: "headset de realidade virtual" 
        },
        { 
            topic: "Context", 
            term: "have-you-ever-tried", 
            definition: "Asking if someone has had the experience of trying something at any point.", 
            translation: "você já tentou / experimentou" 
        },
        { 
            topic: "Context", 
            term: "have-never-used", 
            definition: "Stating that someone has zero experience using something.", 
            translation: "nunca usei" 
        },
        { 
            topic: "Context", 
            term: "virtual-reality", 
            definition: "A computer-generated simulation of a three-dimensional environment.", 
            translation: "realidade virtual" 
        },
        { 
            topic: "Context", 
            term: "cool", 
            definition: "Slang for something that is fashionable, attractive, or impressive.", 
            translation: "legal / maneiro" 
        },
        { 
            topic: "Context", 
            term: "most-exciting", 
            definition: "The superlative form of exciting; causing great enthusiasm.", 
            translation: "mais empolgante" 
        },
        { 
            topic: "Context", 
            term: "have-ever-seen", 
            definition: "The most extreme experience of seeing something in one's life.", 
            translation: "já vi (na vida)" 
        },
        { 
            topic: "Context", 
            term: "have-had", 
            definition: "The present perfect form of the verb 'have', showing possession until now.", 
            translation: "tenho tido / tenho" 
        },
        { 
            topic: "Context", 
            term: "since", 
            definition: "In the intervening period between a specified time and the present.", 
            translation: "desde" 
        },
        { 
            topic: "Context", 
            term: "how-long", 
            definition: "Asking about the duration of time.", 
            translation: "há quanto tempo" 
        },
        { 
            topic: "Context", 
            term: "for", 
            definition: "Used to indicate the length of a period of time.", 
            translation: "por / há (tempo)" 
        },

        // --- TOPIC 2: TECH VERBS ---
        { 
            topic: "Tech Verbs", 
            term: "Charge", 
            definition: "To store electrical energy in a battery.", 
            translation: "carregar" 
        },
        { 
            topic: "Tech Verbs", 
            term: "Download", 
            definition: "To copy data from one computer system to another, typically over the internet.", 
            translation: "baixar" 
        },
        { 
            topic: "Tech Verbs", 
            term: "Upload", 
            definition: "To transfer data from one computer to another, typically to the internet.", 
            translation: "enviar / subir" 
        },
        { 
            topic: "Tech Verbs", 
            term: "Install", 
            definition: "To place or fix equipment or software in position ready for use.", 
            translation: "instalar" 
        },
        { 
            topic: "Tech Verbs", 
            term: "Update", 
            definition: "To make something more modern or up to date.", 
            translation: "atualizar" 
        },
        { 
            topic: "Tech Verbs", 
            term: "Stream", 
            definition: "To transmit or receive data over the internet as a steady, continuous flow.", 
            translation: "transmitir / assistir online" 
        },
        { 
            topic: "Tech Verbs", 
            term: "Type", 
            definition: "To write something on a typewriter or computer by pressing the keys.", 
            translation: "digitar" 
        },
        { 
            topic: "Tech Verbs", 
            term: "Save", 
            definition: "To keep data on a computer or for future use.", 
            translation: "salvar" 
        },

        // --- TOPIC 3: TECH NOUNS & GADGETS ---
        { 
            topic: "Gadgets", 
            term: "Technology", 
            definition: "Machinery and equipment developed from the application of scientific knowledge.", 
            translation: "tecnologia" 
        },
        { 
            topic: "Gadgets", 
            term: "Device / Gadget", 
            definition: "A small mechanical or electronic device or tool, especially an ingenious one.", 
            translation: "dispositivo / aparelho" 
        },
        { 
            topic: "Gadgets", 
            term: "Smartphone", 
            definition: "A mobile phone that performs many of the functions of a computer.", 
            translation: "smartphone" 
        },
        { 
            topic: "Gadgets", 
            term: "Computer", 
            definition: "An electronic device for storing and processing data.", 
            translation: "computador" 
        },
        { 
            topic: "Gadgets", 
            term: "Laptop / Notebook", 
            definition: "A computer that is portable and suitable for use while traveling.", 
            translation: "laptop / notebook" 
        },
        { 
            topic: "Gadgets", 
            term: "Tablet", 
            definition: "A portable PC, typically with a mobile operating system and LCD touchscreen.", 
            translation: "tablet" 
        },
        { 
            topic: "Gadgets", 
            term: "App", 
            definition: "An application, especially as downloaded by a user to a mobile device.", 
            translation: "aplicativo" 
        },
        { 
            topic: "Gadgets", 
            term: "Wi-Fi", 
            definition: "A facility allowing computers and smartphones to connect to the internet wirelessly.", 
            translation: "wi-fi" 
        },
        { 
            topic: "Gadgets", 
            term: "Screen", 
            definition: "The flat panel or area on an electronic device on which images and data are displayed.", 
            translation: "tela" 
        },
        { 
            topic: "Gadgets", 
            term: "Keyboard", 
            definition: "A panel of keys that operate a computer or typewriter.", 
            translation: "teclado" 
        },
        { 
            topic: "Gadgets", 
            term: "Mouse", 
            definition: "A handheld device used to move a cursor on a computer screen.", 
            translation: "mouse" 
        },
        // --- TOPIC 4: QUALITY OF LIFE vs. HINDRANCES ---
        { 
            topic: "Quality & Hindrances", 
            term: "eye-strain", 
            definition: "Fatigue of the eyes caused by prolonged close work or looking at screens.", 
            translation: "cansaço visual" 
        },
        { 
            topic: "Quality & Hindrances", 
            term: "distraction", 
            definition: "A thing that prevents someone from giving full attention to something else.", 
            translation: "distração" 
        },
        { 
            topic: "Quality & Hindrances", 
            term: "convenient", 
            definition: "Fitting in well with a person's needs, activities, and plans.", 
            translation: "conveniente" 
        },
        { 
            topic: "Quality & Hindrances", 
            term: "Quality of Life", 
            definition: "The standard of health, comfort, and happiness experienced by an individual.", 
            translation: "qualidade de vida" 
        },
        { 
            topic: "Quality & Hindrances", 
            term: "Efficiency", 
            definition: "The state or quality of being productive without wasting effort or expense.", 
            translation: "eficiência" 
        },
        { 
            topic: "Quality & Hindrances", 
            term: "Improvement", 
            definition: "An example or instance of making something better.", 
            translation: "melhoria" 
        },
        { 
            topic: "Quality & Hindrances", 
            term: "Hindrance", 
            definition: "A thing that provides resistance, delay, or obstruction to something or someone.", 
            translation: "obstáculo / desvantagem" 
        },
        { 
            topic: "Quality & Hindrances", 
            term: "Inconvenient", 
            definition: "Causing trouble, difficulties, or discomfort.", 
            translation: "inconveniente" 
        },
        { 
            topic: "Quality & Hindrances", 
            term: "Isolated", 
            definition: "Having minimal contact with others; feeling alone.", 
            translation: "isolado" 
        },
        { 
            topic: "Quality & Hindrances", 
            term: "Information overload", 
            definition: "Exposure to or provision of too much information or data.", 
            translation: "sobrecarga de informação" 
        },
        { 
            topic: "Quality & Hindrances", 
            term: "Addiction", 
            definition: "The condition of being addicted to a particular substance, thing, or activity.", 
            translation: "vício" 
        },
        { 
            topic: "Quality & Hindrances", 
            term: "Dependence", 
            definition: "The state of relying on or being controlled by someone or something else.", 
            translation: "dependência" 
        },

        // --- TOPIC 5: GRAMMAR POINTS ---
        { 
            topic: "Grammar", 
            term: "ever-grammar", 
            definition: "Used in questions to ask about experiences at any time in the past.", 
            translation: "alguma vez / já" 
        },
        { 
            topic: "Grammar", 
            term: "never-grammar", 
            definition: "Used to indicate that an action has not happened at any time.", 
            translation: "nunca" 
        },
        { 
            topic: "Grammar", 
            term: "just-grammar", 
            definition: "Used for actions that happened a very short time ago.", 
            translation: "acabou de" 
        },
        { 
            topic: "Grammar", 
            term: "already-grammar", 
            definition: "Used for actions that happened sooner than expected.", 
            translation: "já" 
        },
        { 
            topic: "Grammar", 
            term: "yet-grammar", 
            definition: "Used in negative sentences and questions to mean 'until now'.", 
            translation: "ainda / já" 
        },
        { 
            topic: "Grammar", 
            term: "for-grammar", 
            definition: "Preposition used to indicate the duration of a period of time.", 
            translation: "por / há (tempo)" 
        },
        { 
            topic: "Grammar", 
            term: "since-grammar", 
            definition: "Preposition used to indicate a specific starting point in time.", 
            translation: "desde" 
        },
        { 
            topic: "Grammar", 
            term: "superlative-ever", 
            definition: "Structure used to describe the most extreme experience in someone's life.", 
            translation: "o mais... que eu já..." 
        }
    ]
}); // Final closing for the Chapter 6 lesson object