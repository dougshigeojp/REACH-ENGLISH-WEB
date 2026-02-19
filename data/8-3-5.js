/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "8-3-5",
    grade: "8th Grade",
    bimester: "3",
    chapter: "5",
    chapterTitle: "Connected Generations",
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "In this lesson, you will learn to:<br><br>• Talk about different generations (Gen Z, Millennials).<br>• Discuss online habits and life experiences.<br>• Use the Present Perfect to talk about life experiences.<br>• Understand \"have gone\" vs. \"have been\".<br>• Use verbs for social media and technology.",
            welcome: "Hello, Digital Citizens! It's Mr. D!<br><br>Welcome to \"Connected Generations\"! Today, we are exploring how different people use the internet. Are you a digital native? How do your parents use technology? We will learn to talk about our life experiences online using the Present Perfect tense. We'll also clear up the confusion between \"have gone\" and \"have been\". Let's get connected!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about different generations like Gen Z and Millennials. Discuss online habits and life experiences. Use the Present Perfect to talk about life experiences. Understand the difference between have gone and have been. And use verbs for social media and technology.",
                welcome: "TTS: Hello, Digital Citizens! It's Mr. D! Welcome to Connected Generations! Today, we are exploring how different people use the internet. Are you a digital native? How do your parents use technology? We will learn to talk about our life experiences online using the Present Perfect tense. We'll also clear up the confusion between have gone and have been. Let's get connected!"
            }
        },

        // ======================================================
        // STEP 1: WHAT'S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of notifications popping up on a phone and keyboard typing. Albert and Celine are looking at a tablet.", 
            contextAudio: "audio/8-3-5/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Albert, have you ever seen this [meme](tooltip:meme)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "No, I haven't. I have never used that [app](tooltip:app)." 
                },
                { 
                    speaker: "Celine", 
                    text: "It's so funny! My grandma sent it to me. She [has learned](tooltip:present-perfect) how to use [social media](tooltip:social-media)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Wow! My parents [haven't adapted](tooltip:present-perfect) yet. They prefer [traditional media](tooltip:traditional-media)." 
                },
                { 
                    speaker: "Celine", 
                    text: "There is a big [generation gap](tooltip:generation-gap). Where is your brother?" 
                },
                { 
                    speaker: "Albert", 
                    text: "He [has gone](tooltip:have-gone) to the computer lab. He loves gaming." 
                },
                { 
                    speaker: "Celine", 
                    text: "I [have been](tooltip:have-been) there twice today. It's always full!" 
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
                    title: "Internet Verbs",
                    audio: "TTS: Connect. Share. Browse. Like. Search. Follow. Scroll. Click. Download. Upload. Stream. Post. Message. Chat. Comment.",
                    items: [
                        { term: "Connect", trans: "Conectar" },
                        { term: "Share", trans: "Compartilhar" },
                        { term: "Browse", trans: "Navegar" },
                        { term: "Like", trans: "Curtir / Curtida" },
                        { term: "Search", trans: "Pesquisar / Procurar" },
                        { term: "Follow", trans: "Seguir" },
                        { term: "Scroll", trans: "Rolar (a tela)" },
                        { term: "Click", trans: "Clicar" },
                        { term: "Download", trans: "Baixar" },
                        { term: "Upload", trans: "Enviar / Subir" },
                        { term: "Stream", trans: "Transmitir / Assistir online" },
                        { term: "Post", trans: "Postar / Postagem" },
                        { term: "Message", trans: "Enviar mensagem / Mensagem" },
                        { term: "Chat", trans: "Bater papo" },
                        { term: "Comment", trans: "Comentar / Comentário" }
                    ]
                },
                {
                    title: "Internet Vocabulary",
                    audio: "TTS: Internet. Website. Social Media. App. Online. Offline. Follower. Profile. Username. Password. Link. Meme. Viral.",
                    items: [
                        { term: "Internet", trans: "Internet" },
                        { term: "Website", trans: "Site" },
                        { term: "Social Media", trans: "Mídia Social" },
                        { term: "App", trans: "Aplicativo" },
                        { term: "Online", trans: "Online" },
                        { term: "Offline", trans: "Offline" },
                        { term: "Follower", trans: "Seguidor(a)" },
                        { term: "Profile", trans: "Perfil" },
                        { term: "Username", trans: "Nome de usuário" },
                        { term: "Password", trans: "Senha" },
                        { term: "Link", trans: "Link" },
                        { term: "Meme", trans: "Meme" },
                        { term: "Viral", trans: "Viral" }
                    ]
                },
                {
                    title: "Generations & Tech",
                    audio: "TTS: Generation. Generation Gap. Different. Similar. Habit. Custom. Technology. Device. Smartphone. Tablet. Computer. Digital Native. Adapt. Trend. News Source. Traditional Media.",
                    items: [
                        { term: "Generation", trans: "Geração" },
                        { term: "Generation Gap", trans: "Conflito de gerações" },
                        { term: "Different", trans: "Diferente" },
                        { term: "Similar", trans: "Similar / Parecido" },
                        { term: "Habit", trans: "Hábito" },
                        { term: "Custom", trans: "Costume" },
                        { term: "Technology", trans: "Tecnologia" },
                        { term: "Device", trans: "Dispositivo" },
                        { term: "Smartphone", trans: "Smartphone" },
                        { term: "Tablet", trans: "Tablet" },
                        { term: "Computer", trans: "Computador" },
                        { term: "Digital Native", trans: "Nativo Digital" },
                        { term: "Adapt", trans: "Adaptar-se" },
                        { term: "Trend", trans: "Tendência" },
                        { term: "News Source", trans: "Fonte de Notícias" },
                        { term: "Traditional Media", trans: "Mídia Tradicional" }
                    ]
                },
                {
                    title: "Generation Names",
                    audio: "TTS: Millennials. Generation Z. Generation Alpha.",
                    items: [
                        { term: "Millennials (Gen Y)", trans: "Millennials (1981-1996)" },
                        { term: "Generation Z", trans: "Geração Z (1997-2012)" },
                        { term: "Generation Alpha", trans: "Geração Alpha (2013-Presente)" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Have you ever used. I have posted. She hasn't seen. We have been. He has gone to. They have been to. How long.",
                    items: [
                        { term: "Have you ever used...?", trans: "Você já usou...?" },
                        { term: "I have posted...", trans: "Eu postei (já postei)..." },
                        { term: "She hasn't seen...", trans: "Ela não viu..." },
                        { term: "We have been...", trans: "Nós estivemos..." },
                        { term: "He has gone to...", trans: "Ele foi para... (ainda está lá)" },
                        { term: "They have been to...", trans: "Eles estiveram em... (foram e voltaram)" },
                        { term: "How long...?", trans: "Há quanto tempo...?" }
                    ]
                },
                {
                    title: "Irregular Verbs (1-15)",
                    audio: "TTS: Be, Was Were, Been. Have, Had, Had. Do, Did, Done. Say, Said, Said. Go, Went, Gone. Get, Got, Got. Make, Made, Made. Know, Knew, Known. Think, Thought, Thought. Take, Took, Taken. See, Saw, Seen. Come, Came, Come. Find, Found, Found. Give, Gave, Given. Tell, Told, Told.",
                    items: [
                        { term: "Be / Was/Were / Been", trans: "Ser / Estar" },
                        { term: "Have / Had / Had", trans: "Ter" },
                        { term: "Do / Did / Done", trans: "Fazer" },
                        { term: "Say / Said / Said", trans: "Dizer" },
                        { term: "Go / Went / Gone", trans: "Ir" },
                        { term: "Get / Got / Got", trans: "Obter / Conseguir" },
                        { term: "Make / Made / Made", trans: "Fazer / Criar" },
                        { term: "Know / Knew / Known", trans: "Saber / Conhecer" },
                        { term: "Think / Thought / Thought", trans: "Pensar" },
                        { term: "Take / Took / Taken", trans: "Pegar / Levar" },
                        { term: "See / Saw / Seen", trans: "Ver" },
                        { term: "Come / Came / Come", trans: "Vir" },
                        { term: "Find / Found / Found", trans: "Encontrar" },
                        { term: "Give / Gave / Given", trans: "Dar" },
                        { term: "Tell / Told / Told", trans: "Contar / Dizer" }
                    ]
                },
                {
                    title: "Irregular Verbs (16-30)",
                    audio: "TTS: Feel, Felt, Felt. Become, Became, Become. Leave, Left, Left. Put, Put, Put. Mean, Meant, Meant. Keep, Kept, Kept. Let, Let, Let. Begin, Began, Begun. Hear, Heard, Heard. Run, Ran, Run. Hold, Held, Held. Bring, Brought, Brought. Write, Wrote, Written. Sit, Sat, Sat. Stand, Stood, Stood.",
                    items: [
                        { term: "Feel / Felt / Felt", trans: "Sentir" },
                        { term: "Become / Became / Become", trans: "Tornar-se" },
                        { term: "Leave / Left / Left", trans: "Sair / Deixar" },
                        { term: "Put / Put / Put", trans: "Colocar" },
                        { term: "Mean / Meant / Meant", trans: "Significar" },
                        { term: "Keep / Kept / Kept", trans: "Manter / Guardar" },
                        { term: "Let / Let / Let", trans: "Deixar / Permitir" },
                        { term: "Begin / Began / Begun", trans: "Começar" },
                        { term: "Hear / Heard / Heard", trans: "Ouvir" },
                        { term: "Run / Ran / Run", trans: "Correr" },
                        { term: "Hold / Held / Held", trans: "Segurar" },
                        { term: "Bring / Brought / Brought", trans: "Trazer" },
                        { term: "Write / Wrote / Written", trans: "Escrever" },
                        { term: "Sit / Sat / Sat", trans: "Sentar" },
                        { term: "Stand / Stood / Stood", trans: "Ficar em pé" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Internet Verbs",
                    audio: "TTS: I connect to the wifi. She shares photos. We browse the web. Please like my video. Search for the answer. Follow me on Instagram. Don't scroll too fast. Click the link. I need to download the file. He uploads videos. They stream movies. I will post a status. Send me a message. Let's chat later. Leave a comment.",
                    items: [
                        { term: "Connect", sent: "I connect to the wifi.", trans: "<span style='color:#0077b6'>Eu me conecto ao wi-fi.</span>" },
                        { term: "Share", sent: "She shares photos.", trans: "<span style='color:#0077b6'>Ela compartilha fotos.</span>" },
                        { term: "Browse", sent: "We browse the web.", trans: "<span style='color:#0077b6'>Nós navegamos na web.</span>" },
                        { term: "Like", sent: "Please like my video.", trans: "<span style='color:#0077b6'>Por favor, curta meu vídeo.</span>" },
                        { term: "Search", sent: "Search for the answer.", trans: "<span style='color:#0077b6'>Pesquise a resposta.</span>" },
                        { term: "Follow", sent: "Follow me on Instagram.", trans: "<span style='color:#0077b6'>Siga-me no Instagram.</span>" },
                        { term: "Scroll", sent: "Don't scroll too fast.", trans: "<span style='color:#0077b6'>Não role muito rápido.</span>" },
                        { term: "Click", sent: "Click the link.", trans: "<span style='color:#0077b6'>Clique no link.</span>" },
                        { term: "Download", sent: "I need to download the file.", trans: "<span style='color:#0077b6'>Preciso baixar o arquivo.</span>" },
                        { term: "Upload", sent: "He uploads videos.", trans: "<span style='color:#0077b6'>Ele envia vídeos.</span>" },
                        { term: "Stream", sent: "They stream movies.", trans: "<span style='color:#0077b6'>Eles transmitem filmes.</span>" },
                        { term: "Post", sent: "I will post a status.", trans: "<span style='color:#0077b6'>Vou postar um status.</span>" },
                        { term: "Message", sent: "Send me a message.", trans: "<span style='color:#0077b6'>Me envie uma mensagem.</span>" },
                        { term: "Chat", sent: "Let's chat later.", trans: "<span style='color:#0077b6'>Vamos bater papo mais tarde.</span>" },
                        { term: "Comment", sent: "Leave a comment.", trans: "<span style='color:#0077b6'>Deixe um comentário.</span>" }
                    ]
                },
                {
                    title: "Internet Vocabulary",
                    audio: "TTS: The internet is fast. Visit our website. Social media connects us. Open the app. Are you online? I am offline now. I have one follower. Update your profile. Enter your username. Don't share your password. Click the link. That meme is funny. The video went viral.",
                    items: [
                        { term: "Internet", sent: "The internet is fast.", trans: "<span style='color:#0077b6'>A internet é rápida.</span>" },
                        { term: "Website", sent: "Visit our website.", trans: "<span style='color:#0077b6'>Visite nosso site.</span>" },
                        { term: "Social Media", sent: "Social media connects us.", trans: "<span style='color:#0077b6'>Mídia social nos conecta.</span>" },
                        { term: "App", sent: "Open the app.", trans: "<span style='color:#0077b6'>Abra o aplicativo.</span>" },
                        { term: "Online", sent: "Are you online?", trans: "<span style='color:#0077b6'>Você está online?</span>" },
                        { term: "Offline", sent: "I am offline now.", trans: "<span style='color:#0077b6'>Estou offline agora.</span>" },
                        { term: "Follower", sent: "I have one follower.", trans: "<span style='color:#0077b6'>Tenho um seguidor.</span>" },
                        { term: "Profile", sent: "Update your profile.", trans: "<span style='color:#0077b6'>Atualize seu perfil.</span>" },
                        { term: "Username", sent: "Enter your username.", trans: "<span style='color:#0077b6'>Digite seu nome de usuário.</span>" },
                        { term: "Password", sent: "Don't share your password.", trans: "<span style='color:#0077b6'>Não compartilhe sua senha.</span>" },
                        { term: "Link", sent: "Click the link.", trans: "<span style='color:#0077b6'>Clique no link.</span>" },
                        { term: "Meme", sent: "That meme is funny.", trans: "<span style='color:#0077b6'>Aquele meme é engraçado.</span>" },
                        { term: "Viral", sent: "The video went viral.", trans: "<span style='color:#0077b6'>O vídeo viralizou.</span>" }
                    ]
                },
                {
                    title: "Generations & Tech",
                    audio: "TTS: My generation loves tech. There is a generation gap. We are different. Our tastes are similar. Reading is a good habit. Technology changes fast. This device is new. I use a smartphone. Humans adapt quickly.",
                    items: [
                        { term: "Generation", sent: "My generation loves tech.", trans: "<span style='color:#0077b6'>Minha geração ama tecnologia.</span>" },
                        { term: "Gap", sent: "There is a generation gap.", trans: "<span style='color:#0077b6'>Há um conflito de gerações.</span>" },
                        { term: "Different", sent: "We are different.", trans: "<span style='color:#0077b6'>Nós somos diferentes.</span>" },
                        { term: "Similar", sent: "Our tastes are similar.", trans: "<span style='color:#0077b6'>Nossos gostos são parecidos.</span>" },
                        { term: "Habit", sent: "Reading is a good habit.", trans: "<span style='color:#0077b6'>Ler é um bom hábito.</span>" },
                        { term: "Technology", sent: "Technology changes fast.", trans: "<span style='color:#0077b6'>Tecnologia muda rápido.</span>" },
                        { term: "Device", sent: "This device is new.", trans: "<span style='color:#0077b6'>Este dispositivo é novo.</span>" },
                        { term: "Smartphone", sent: "I use a smartphone.", trans: "<span style='color:#0077b6'>Eu uso um smartphone.</span>" },
                        { term: "Adapt", sent: "Humans adapt quickly.", trans: "<span style='color:#0077b6'>Humanos se adaptam rápido.</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Have you ever played VR? I have posted a new photo. He has gone home. They have been to Paris.",
                    items: [
                        { term: "Have you ever...?", sent: "Have you ever played VR?", trans: "<span style='color:#0077b6'>Você já jogou RV?</span>" },
                        { term: "I have posted", sent: "I have posted a new photo.", trans: "<span style='color:#0077b6'>Eu postei uma foto nova.</span>" },
                        { term: "He has gone", sent: "Where is Tom? He has gone home.", trans: "<span style='color:#0077b6'>Onde está Tom? Ele foi para casa.</span>" },
                        { term: "They have been", sent: "They have been to Paris.", trans: "<span style='color:#0077b6'>Eles estiveram em Paris.</span>" }
                    ]
                },
                // --- New Irregular Verb Groups ---
                {
                    title: "Irregular Verbs (1-15)",
                    audio: "TTS: I have been to Paris. She has had this phone for a year. We have done our homework. He has said that before. They have gone to the mall. I have got a new app. She has made a viral video. We have known him for years. I have thought about the answer. He has taken a photo. I have seen that meme. She has come to visit us. They have found the link. I have given him the password. He has told me the truth.",
                    items: [
                        { term: "Be", sent: "I have been to Paris.", trans: "<span style='color:#0077b6'>Eu estive em Paris.</span>" },
                        { term: "Have", sent: "She has had this phone for a year.", trans: "<span style='color:#0077b6'>Ela tem este telefone há um ano.</span>" },
                        { term: "Do", sent: "We have done our homework.", trans: "<span style='color:#0077b6'>Nós fizemos nossa lição de casa.</span>" },
                        { term: "Say", sent: "He has said that before.", trans: "<span style='color:#0077b6'>Ele disse isso antes.</span>" },
                        { term: "Go", sent: "They have gone to the mall.", trans: "<span style='color:#0077b6'>Eles foram ao shopping.</span>" },
                        { term: "Get", sent: "I have got a new app.", trans: "<span style='color:#0077b6'>Eu consegui um novo aplicativo.</span>" },
                        { term: "Make", sent: "She has made a viral video.", trans: "<span style='color:#0077b6'>Ela fez um vídeo viral.</span>" },
                        { term: "Know", sent: "We have known him for years.", trans: "<span style='color:#0077b6'>Nós o conhecemos há anos.</span>" },
                        { term: "Think", sent: "I have thought about the answer.", trans: "<span style='color:#0077b6'>Eu pensei sobre a resposta.</span>" },
                        { term: "Take", sent: "He has taken a photo.", trans: "<span style='color:#0077b6'>Ele tirou uma foto.</span>" },
                        { term: "See", sent: "I have seen that meme.", trans: "<span style='color:#0077b6'>Eu vi aquele meme.</span>" },
                        { term: "Come", sent: "She has come to visit us.", trans: "<span style='color:#0077b6'>Ela veio nos visitar.</span>" },
                        { term: "Find", sent: "They have found the link.", trans: "<span style='color:#0077b6'>Eles encontraram o link.</span>" },
                        { term: "Give", sent: "I have given him the password.", trans: "<span style='color:#0077b6'>Eu dei a senha para ele.</span>" },
                        { term: "Tell", sent: "He has told me the truth.", trans: "<span style='color:#0077b6'>Ele me contou a verdade.</span>" }
                    ]
                },
                {
                    title: "Irregular Verbs (16-30)",
                    audio: "TTS: I have felt sick lately. The video has become popular. She has left the chat. I have put the file there. This gift has meant a lot to me. He has kept the secret. They have let us enter. The class has begun. Have you heard the news? He has run a marathon. I have held the baby. She has brought snacks. He has written a blog post. We have sat here for hours. He has stood up for his rights.",
                    items: [
                        { term: "Feel", sent: "I have felt sick lately.", trans: "<span style='color:#0077b6'>Tenho me sentido doente ultimamente.</span>" },
                        { term: "Become", sent: "The video has become popular.", trans: "<span style='color:#0077b6'>O vídeo se tornou popular.</span>" },
                        { term: "Leave", sent: "She has left the chat.", trans: "<span style='color:#0077b6'>Ela saiu do chat.</span>" },
                        { term: "Put", sent: "I have put the file there.", trans: "<span style='color:#0077b6'>Eu coloquei o arquivo lá.</span>" },
                        { term: "Mean", sent: "This gift has meant a lot to me.", trans: "<span style='color:#0077b6'>Este presente significou muito para mim.</span>" },
                        { term: "Keep", sent: "He has kept the secret.", trans: "<span style='color:#0077b6'>Ele guardou o segredo.</span>" },
                        { term: "Let", sent: "They have let us enter.", trans: "<span style='color:#0077b6'>Eles nos deixaram entrar.</span>" },
                        { term: "Begin", sent: "The class has begun.", trans: "<span style='color:#0077b6'>A aula começou.</span>" },
                        { term: "Hear", sent: "Have you heard the news?", trans: "<span style='color:#0077b6'>Você ouviu as novidades?</span>" },
                        { term: "Run", sent: "He has run a marathon.", trans: "<span style='color:#0077b6'>Ele correu uma maratona.</span>" },
                        { term: "Hold", sent: "I have held the baby.", trans: "<span style='color:#0077b6'>Eu segurei o bebê.</span>" },
                        { term: "Bring", sent: "She has brought snacks.", trans: "<span style='color:#0077b6'>Ela trouxe lanches.</span>" },
                        { term: "Write", sent: "He has written a blog post.", trans: "<span style='color:#0077b6'>Ele escreveu um post no blog.</span>" },
                        { term: "Sit", sent: "We have sat here for hours.", trans: "<span style='color:#0077b6'>Nós ficamos sentados aqui por horas.</span>" },
                        { term: "Stand", sent: "He has stood up for his rights.", trans: "<span style='color:#0077b6'>Ele defendeu (ficou de pé por) seus direitos.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills
            drills: [
                {
                    type: "mcq",
                    q: "Choose the correct translation for 'To download':",
                    options: [
                        { t: "Enviar", c: false },
                        { t: "Baixar", c: true },
                        { t: "Clicar", c: false },
                        { t: "Seguir", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "\"Please _______ the link to see the video.\"",
                    options: [
                        { t: "scroll", c: false },
                        { t: "click", c: true },
                        { t: "chat", c: false },
                        { t: "post", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A funny image that spreads online is a...",
                    options: [
                        { t: "Profile", c: false },
                        { t: "Meme", c: true },
                        { t: "Password", c: false },
                        { t: "Device", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To enter a site, you often need a username and a...",
                    options: [
                        { t: "Password", c: true },
                        { t: "Follower", c: false },
                        { t: "Hashtag", c: false },
                        { t: "Viral", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If you like someone's content, you can _______ them.",
                    options: [
                        { t: "block", c: false },
                        { t: "follow", c: true },
                        { t: "download", c: false },
                        { t: "browse", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "People born between 1997 and 2012 are called...",
                    options: [
                        { t: "Millennials", c: false },
                        { t: "Generation Z", c: true },
                        { t: "Generation Alpha", c: false },
                        { t: "Boomers", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Grammar: \"She isn't here. She _______ to the store.\"",
                    options: [
                        { t: "has been", c: false },
                        { t: "has gone", c: true },
                        { t: "have gone", c: false },
                        { t: "have been", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Grammar: \"I _______ to London twice. It's beautiful.\"",
                    options: [
                        { t: "have gone", c: false },
                        { t: "have been", c: true },
                        { t: "has gone", c: false },
                        { t: "has been", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Present Perfect: \"_______ you ever posted a video?\"",
                    options: [
                        { t: "Has", c: false },
                        { t: "Have", c: true },
                        { t: "Did", c: false },
                        { t: "Do", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A phone that connects to the internet is a...",
                    options: [
                        { t: "Smartphone", c: true },
                        { t: "Television", c: false },
                        { t: "Radio", c: false },
                        { t: "Calculator", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What is the past participle of 'Write'?",
                    options: [
                        { t: "Wrote", c: false },
                        { t: "Written", c: true },
                        { t: "Writed", c: false },
                        { t: "Writing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I have had this phone _______ two years.\"",
                    options: [
                        { t: "since", c: false },
                        { t: "for", c: true },
                        { t: "ago", c: false },
                        { t: "in", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "\"We have been online _______ 8 AM.\"",
                    options: [
                        { t: "for", c: false },
                        { t: "since", c: true },
                        { t: "in", c: false },
                        { t: "at", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which one is a technology problem?",
                    options: [
                        { t: "Convenience", c: false },
                        { t: "Efficiency", c: false },
                        { t: "Addiction", c: true },
                        { t: "Improvement", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I have _______ finished my homework.\" (It is done).",
                    options: [
                        { t: "already", c: true },
                        { t: "yet", c: false },
                        { t: "ever", c: false },
                        { t: "since", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To move through a list or feed on a screen is to...",
                    options: [
                        { t: "post", c: false },
                        { t: "click", c: false },
                        { t: "scroll", c: true },
                        { t: "upload", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When you send a file to the internet, you _______ it.",
                    options: [
                        { t: "download", c: false },
                        { t: "browse", c: false },
                        { t: "upload", c: true },
                        { t: "chat", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A person with no followers has no _______.",
                    options: [
                        { t: "internet", c: false },
                        { t: "audience", c: true },
                        { t: "computer", c: false },
                        { t: "keyboard", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A laptop is a type of _______.",
                    options: [
                        { t: "device", c: true },
                        { t: "website", c: false },
                        { t: "meme", c: false },
                        { t: "link", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "People born after 2013 belong to Generation _______.",
                    options: [
                        { t: "Z", c: false },
                        { t: "Millennial", c: false },
                        { t: "Alpha", c: true },
                        { t: "Beta", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The distance between two different generations is a generation _______.",
                    options: [
                        { t: "wall", c: false },
                        { t: "gap", c: true },
                        { t: "bridge", c: false },
                        { t: "road", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If something is 'similar', it is...",
                    options: [
                        { t: "different", c: false },
                        { t: "almost the same", c: true },
                        { t: "very fast", c: false },
                        { t: "broken", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To watch a video live online as it plays is to _______.",
                    options: [
                        { t: "print", c: false },
                        { t: "stream", c: true },
                        { t: "save", c: false },
                        { t: "install", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When you look at a screen for too long, you might get...",
                    options: [
                        { t: "eye strain", c: true },
                        { t: "high speed", c: false },
                        { t: "a username", c: false },
                        { t: "a browser", c: false }
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
                    title: "Present Perfect (Affirmative)",
                    audio: "TTS: We use the Present Perfect to talk about life experiences at an unspecified time, or actions that happened in the past but have a result in the present. Use have or has plus the past participle. For example: I have used the internet for years. She has created a profile.",
                    explanation: "We use the <b>Present Perfect</b> to talk about life experiences or actions that started in the past and are still relevant now. <br><br><b>Structure:</b> Subject + have/has + Past Participle.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos o Present Perfect para falar sobre experiências de vida ou ações que aconteceram no passado, mas têm um resultado no presente. Estrutura: Sujeito + have/has + Particípio Passado.)</span>",
                    samples: [
                        { en: "I have used the internet for years.", pt: "<span style='color:#0077b6'>Eu uso a internet há anos.</span>" },
                        { en: "You have seen this meme.", pt: "<span style='color:#0077b6'>Você viu este meme.</span>" },
                        { en: "She has blocked him.", pt: "<span style='color:#0077b6'>Ela bloqueou ele.</span>" },
                        { en: "It has changed the world.", pt: "<span style='color:#0077b6'>Isso mudou o mundo.</span>" }
                    ]
                },
                {
                    title: "Negative & Interrogative",
                    audio: "TTS: To make negative sentences, add not. I haven't shared it. She hasn't seen the video. To ask questions, put Have or Has before the subject. Have you tried VR? Has he bought a new phone?",
                    explanation: "To make negative sentences, use <b>haven't</b> or <b>hasn't</b>. To ask questions, place the auxiliary verb at the beginning.<br><br><span style='color:#0077b6; font-style:italic;'>(Para fazer frases negativas, use haven't ou hasn't. Para fazer perguntas, coloque o auxiliar no início da frase.)</span>",
                    samples: [
                        { en: "I haven't shared it.", pt: "<span style='color:#0077b6'>Eu não compartilhei isso.</span>" },
                        { en: "It hasn't loaded yet.", pt: "<span style='color:#0077b6'>Ainda não carregou.</span>" },
                        { en: "Have you ever used this app?", pt: "<span style='color:#0077b6'>Você já usou este aplicativo?</span>" },
                        { en: "Has she used TikTok?", pt: "<span style='color:#0077b6'>Ela usou o TikTok?</span>" }
                    ]
                },
                {
                    title: "Have Gone vs. Have Been",
                    audio: "TTS: Both talk about going places, but have gone means the person went and is still there. Have been means the person went and has returned. For example: He has gone to the store means he is not here now. I have been to London twice means I am back now.",
                    explanation: "<b>Have GONE:</b> The person went and is <b>still there</b>.<br><b>Have BEEN:</b> The person went and has <b>returned</b>.<br><br><span style='color:#0077b6; font-style:italic;'>(Have GONE: A pessoa foi e ainda está lá. Have BEEN: A pessoa foi e já voltou; refere-se à experiência de visitar.)</span>",
                    samples: [
                        { en: "He has gone to the cyber café. (He is not here)", pt: "<span style='color:#0077b6'>Ele foi para o cyber café. (Ainda não voltou)</span>" },
                        { en: "I have been to London twice. (I am here now)", pt: "<span style='color:#0077b6'>Eu estive em Londres duas vezes. (Experiência)</span>" }
                    ]
                },
                {
                    title: "Time Markers (Duration)",
                    audio: "TTS: Use FOR to talk about a period of time, like for two hours. Use SINCE for a specific starting point, like since Monday or since 2010. Use Already for things that happened sooner than expected, and Yet for things that haven't happened until now.",
                    explanation: "We use specific markers to show duration or context.<br><br><b>FOR:</b> Period of time.<br><b>SINCE:</b> Specific starting point.<br><b>YET:</b> Until now (used in negatives/questions).<br><br><span style='color:#0077b6; font-style:italic;'>(FOR: Período de tempo. SINCE: Ponto específico no tempo. YET: Até agora - usado em negativas e perguntas.)</span>",
                    samples: [
                        { en: "I have had this tablet for two years.", pt: "<span style='color:#0077b6'>Eu tenho este tablet há dois anos.</span>" },
                        { en: "He has lived here since 2010.", pt: "<span style='color:#0077b6'>Ele mora aqui desde 2010.</span>" },
                        { en: "We haven't finished yet.", pt: "<span style='color:#0077b6'>Nós não terminamos ainda.</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Present Perfect (Life Experiences)",
                    audio: "audio/8-3-5/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Have you ever used this new social network?", 
                            pt: "<span style='color:#0077b6'>Você já usou essa nova rede social?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "No, I haven't. But my sister has created an account. She says it's fun.", 
                            pt: "<span style='color:#0077b6'>Não, eu não usei. Mas minha irmã criou uma conta. Ela diz que é divertido.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Present Perfect (Present Result)",
                    audio: "audio/8-3-5/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Look! The video has gone viral!", 
                            pt: "<span style='color:#0077b6'>Olhe! O vídeo viralizou!</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Wow! It has reached one million views. I have shared it with all my friends.", 
                            pt: "<span style='color:#0077b6'>Uau! Alcançou um milhão de visualizações. Eu compartilhei com todos os meus amigos.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Have Gone vs. Have Been",
                    audio: "audio/8-3-5/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Where are your parents?", 
                            pt: "<span style='color:#0077b6'>Onde estão seus pais?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "They have gone to the store to buy a new tablet. They aren't home.", 
                            pt: "<span style='color:#0077b6'>Eles foram à loja comprar um tablet novo. Eles não estão em casa. (Ainda não voltaram)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Cool. Have they been to that new tech shop downtown?", 
                            pt: "<span style='color:#0077b6'>Legal. Eles já estiveram naquela nova loja de tecnologia no centro?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes, they have. They went there last week.", 
                            pt: "<span style='color:#0077b6'>Sim, eles já estiveram. Eles foram lá semana passada. (Já voltaram)</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice Drills
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Affirmative: \"She _______ (create) a new blog.\"",
                    options: [
                        {t: "have created", c: false},
                        {t: "has created", c: true},
                        {t: "has create", c: false},
                        {t: "created", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative: \"We _______ (not/see) that meme yet.\"",
                    options: [
                        {t: "haven't seen", c: true},
                        {t: "hasn't seen", c: false},
                        {t: "didn't saw", c: false},
                        {t: "don't see", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Interrogative: \"_______ (he) ever _______ (use) a typewriter?\"",
                    options: [
                        {t: "Have he / used", c: false},
                        {t: "Has he / use", c: false},
                        {t: "Has he / used", c: true},
                        {t: "Did he / used", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Participles: What is the past participle of 'Write'?",
                    options: [
                        {t: "Wrote", c: false},
                        {t: "Written", c: true},
                        {t: "Writed", c: false},
                        {t: "Writing", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Have Gone vs. Have Been: \"My brother isn't here. He _______ to the park.\"",
                    options: [
                        {t: "has been", c: false},
                        {t: "have gone", c: false},
                        {t: "has gone", c: true},
                        {t: "is gone", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Have Gone vs. Have Been: \"I _______ to France. It is a beautiful country.\" (I am back now).",
                    options: [
                        {t: "have been", c: true},
                        {t: "have gone", c: false},
                        {t: "has been", c: false},
                        {t: "has gone", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Subject Nouns: \"The app _______ (crash).\"",
                    options: [
                        {t: "have crashed", c: false},
                        {t: "has crashed", c: true},
                        {t: "has crash", c: false},
                        {t: "crashing", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Mixed: \"_______ (You) _______ (finish) the download?\"",
                    options: [
                        {t: "Has you / finished", c: false},
                        {t: "Do you / finish", c: false},
                        {t: "Have you / finished", c: true},
                        {t: "Have you / finish", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Duration: \"I have been online _______ 8 AM.\"",
                    options: [
                        {t: "for", c: false},
                        {t: "since", c: true},
                        {t: "ago", c: false},
                        {t: "yet", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Duration: \"They have studied English _______ five years.\"",
                    options: [
                        {t: "since", c: false},
                        {t: "for", c: true},
                        {t: "ago", c: false},
                        {t: "already", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Experience: \"I _______ (never/try) virtual reality games.\"",
                    options: [
                        {t: "never tried", c: false},
                        {t: "have never tried", c: true},
                        {t: "has never tried", c: false},
                        {t: "never have tried", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Expectation: \"Has the new software loaded _______?\"",
                    options: [
                        {t: "already", c: false},
                        {t: "just", c: false},
                        {t: "yet", c: true},
                        {t: "ever", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Recent Action: \"I _______ (just/update) my profile picture.\"",
                    options: [
                        {t: "have just updated", c: true},
                        {t: "has just updated", c: false},
                        {t: "just updated", c: false},
                        {t: "have update just", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Participles: What is the past participle of 'Be'?",
                    options: [
                        {t: "Was", c: false},
                        {t: "Were", c: false},
                        {t: "Been", c: true},
                        {t: "Being", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Experience: \"_______ you ever _______ (meet) an influencer?\"",
                    options: [
                        {t: "Have / met", c: true},
                        {t: "Has / met", c: false},
                        {t: "Did / meet", c: false},
                        {t: "Have / meet", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Expectation: \"He _______ (already/post) the video on YouTube.\"",
                    options: [
                        {t: "have already posted", c: false},
                        {t: "has already posted", c: true},
                        {t: "already has posted", c: false},
                        {t: "has posted already", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Participles: What is the past participle of 'See'?",
                    options: [
                        {t: "Saw", c: false},
                        {t: "Seed", c: false},
                        {t: "Seen", c: true},
                        {t: "Seeing", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Duration: \"We _______ (be) friends since school started.\"",
                    options: [
                        {t: "has been", c: false},
                        {t: "are", c: false},
                        {t: "have were", c: false},
                        {t: "have been", c: true}
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative: \"My parents _______ (not/adapt) to social media yet.\"",
                    options: [
                        {t: "haven't adapted", c: true},
                        {t: "hasn't adapted", c: false},
                        {t: "didn't adapt", c: false},
                        {t: "not adapted", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Experience: \"I _______ (never/break) a bone in my life.\"",
                    options: [
                        {t: "have never broken", c: true},
                        {t: "has never broken", c: false},
                        {t: "never broke", c: false},
                        {t: "have never broke", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Participles: What is the past participle of 'Go'?",
                    options: [
                        {t: "Went", c: false},
                        {t: "Gone", c: true},
                        {t: "Goed", c: false},
                        {t: "Going", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Recent Action: \"The battery _______ (just/die).\"",
                    options: [
                        {t: "have just died", c: false},
                        {t: "is just died", c: false},
                        {t: "has just died", c: true},
                        {t: "just died", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Mixed: \"How long _______ (she/have) that laptop?\"",
                    options: [
                        {t: "has she had", c: true},
                        {t: "have she had", c: false},
                        {t: "she has had", c: false},
                        {t: "did she have", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Experience: \"We _______ (already/be) to that shop downtown.\"",
                    options: [
                        {t: "already been", c: false},
                        {t: "have already been", c: true},
                        {t: "has already been", c: false},
                        {t: "were already", c: false}
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
                    audio: "audio/8-3-5/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: Have you [seen | see] the new sci-fi movie?", a: "seen" },
                        { q: "Albert: No, I [haven't | have]. Have you?", a: "haven't" },
                        { q: "Celine: Yes. It is the [best | worst] movie I have ever seen.", a: "best" }
                    ]
                },
                // Drill 3: Audio Choice (MP3)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer.<br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta correta.)</small>",
                    audio: "audio/8-3-5/step5_drill3.mp3",
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
                    audio: "TTS: The Digital Detox. Last month, I decided to try a digital detox. I have used smartphones since I was 10, so it was hard. For one week, I didn't use any social media. At first, I felt disconnected and bored. But after a few days, I noticed a change. I have read three books this week! I have also slept better. I have learned that life is good offline too. || audio/8-3-5/p6_text1.mp3",
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
                    audio: "audio/8-3-5/p6_text2.mp3",
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
                    audio: "TTS: The Smart Home. My uncle lives in a smart home. It is the most convenient house I have ever visited. He has connected everything to the internet. He can control the lights and the temperature with his phone. He has used this system since 2020. He says it has improved his quality of life. However, when the internet goes down, nothing works! That is a big hindrance. || audio/8-3-5/p6_text3.mp3",
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
                        { left: "Since", right: "Starting point", val: "1" },
                        { left: "For", right: "Duration", val: "2" },
                        { left: "Ever", right: "At any time", val: "3" },
                        { left: "Just", right: "Very short time ago", val: "4" }
                    ]
                },
                // Drill 2: Unscramble the Sentences (Present Perfect)
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
                    instruction: "Drag the correct word to complete the sentence.<br><small style='color:#0077b6'>(Arraste a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "I have known him [since | for | ever | never] school started.", a: "since" },
                        { q: "She has [never | ever | for | since] used a VR headset.", a: "never" },
                        { q: "Have you [ever | never | for | since] clicked a bad link?", a: "ever" },
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
            instruction: "Language Island - Topic: Experience with Technology. Now it's your turn! Write about your experience with technology.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Experiência com Tecnologia. Agora é a sua vez! Escreva sobre sua experiência com tecnologia.)</span></small>",
            example: "\"I have used Instagram and WhatsApp for three years. I have posted many photos of my dog. I have never made a viral video. The internet has helped me learn English and connect with friends.\"<br><br><small><span style='color:#0077b6'>(\"Eu uso o Instagram e o WhatsApp há três anos. Eu postei muitas fotos do meu cachorro. Nunca fiz um vídeo viral. A internet me ajudou a aprender inglês e a me conectar com amigos.\")</span></small>",
            prompts: [
                "Which social media apps have you used? (I have used...). <br><small><span style='color:#0077b6'>(Quais aplicativos de mídia social você já usou? Eu usei...)</span></small>",
                "Have you ever posted a video or photo? <br><small><span style='color:#0077b6'>(Você já postou um vídeo ou foto?)</span></small>",
                "How has the internet helped you? (It has helped me...). <br><small><span style='color:#0077b6'>(Como a internet te ajudou? Ela me ajudou...)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Internet Verbs & Vocabulary)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Topic 1: Internet Verbs ---
                { 
                    term: "Connect", 
                    definition: "To join together so as to provide access and communication.", 
                    defTrans: "Conectar",
                    example: "I can't connect to the wifi.", 
                    audioFront: "TTS: Connect",
                    audioBack: "TTS: I can't connect to the wifi." 
                },
                { 
                    term: "Share", 
                    definition: "To post or repost content on social media for others to see.", 
                    defTrans: "Compartilhar",
                    example: "She shares funny memes.", 
                    audioFront: "TTS: Share",
                    audioBack: "TTS: She shares funny memes." 
                },
                { 
                    term: "Browse", 
                    definition: "To look at information on the internet.", 
                    defTrans: "Navegar (na internet)",
                    example: "I browse the web every day.", 
                    audioFront: "TTS: Browse",
                    audioBack: "TTS: I browse the web every day." 
                },
                { 
                    term: "Like", 
                    definition: "To click a button to show you enjoy or agree with a post.", 
                    defTrans: "Curtir",
                    example: "Did you like my post?", 
                    audioFront: "TTS: Like",
                    audioBack: "TTS: Did you like my post?" 
                },
                { 
                    term: "Search", 
                    definition: "To look for information on a computer or the internet.", 
                    defTrans: "Pesquisar / Procurar",
                    example: "Search for the answer online.", 
                    audioFront: "TTS: Search",
                    audioBack: "TTS: Search for the answer online." 
                },
                { 
                    term: "Follow", 
                    definition: "To subscribe to an account to see their updates.", 
                    defTrans: "Seguir",
                    example: "I follow this influencer.", 
                    audioFront: "TTS: Follow",
                    audioBack: "TTS: I follow this influencer." 
                },
                { 
                    term: "Scroll", 
                    definition: "To move text or graphics up or down on a display screen.", 
                    defTrans: "Rolar (a tela)",
                    example: "I scroll through my feed quickly.", 
                    audioFront: "TTS: Scroll",
                    audioBack: "TTS: I scroll through my feed quickly." 
                },
                { 
                    term: "Click", 
                    definition: "To press a mouse button or tap a screen to select something.", 
                    defTrans: "Clicar",
                    example: "Click the link to open it.", 
                    audioFront: "TTS: Click",
                    audioBack: "TTS: Click the link to open it." 
                },
                { 
                    term: "Download", 
                    definition: "To copy data from the internet to your computer.", 
                    defTrans: "Baixar / Fazer download",
                    example: "I want to download this game.", 
                    audioFront: "TTS: Download",
                    audioBack: "TTS: I want to download this game." 
                },
                { 
                    term: "Upload", 
                    definition: "To transfer data from your computer to the internet.", 
                    defTrans: "Enviar / Subir",
                    example: "He is uploading a video.", 
                    audioFront: "TTS: Upload",
                    audioBack: "TTS: He is uploading a video." 
                },
                { 
                    term: "Stream", 
                    definition: "To transmit or receive data (video/audio) as a continuous flow.", 
                    defTrans: "Transmitir / Assistir online",
                    example: "We stream movies on Fridays.", 
                    audioFront: "TTS: Stream",
                    audioBack: "TTS: We stream movies on Fridays." 
                },
                { 
                    term: "Post", 
                    definition: "To publish a piece of writing or image online.", 
                    defTrans: "Postar",
                    example: "I will post a status.", 
                    audioFront: "TTS: Post",
                    audioBack: "TTS: I will post a status." 
                },
                { 
                    term: "Message", 
                    definition: "To send a written communication to someone.", 
                    defTrans: "Enviar mensagem",
                    example: "Send me a message.", 
                    audioFront: "TTS: Message",
                    audioBack: "TTS: Send me a message." 
                },
                { 
                    term: "Chat", 
                    definition: "To exchange messages online in real-time.", 
                    defTrans: "Bater papo",
                    example: "Let's chat on the app.", 
                    audioFront: "TTS: Chat",
                    audioBack: "TTS: Let's chat on the app." 
                },
                { 
                    term: "Comment", 
                    definition: "To express an opinion or reaction to a post.", 
                    defTrans: "Comentar",
                    example: "Leave a nice comment.", 
                    audioFront: "TTS: Comment",
                    audioBack: "TTS: Leave a nice comment." 
                },

                // --- Topic 2: Internet Vocabulary ---
                { 
                    term: "Website", 
                    definition: "A set of related web pages located under a single domain name.", 
                    defTrans: "Site / Website",
                    example: "This website is very useful.", 
                    audioFront: "TTS: Website",
                    audioBack: "TTS: This website is very useful." 
                },
                { 
                    term: "Social Media", 
                    definition: "Websites and applications that enable users to create and share content.", 
                    defTrans: "Mídia Social",
                    example: "Social media connects people.", 
                    audioFront: "TTS: Social Media",
                    audioBack: "TTS: Social media connects people." 
                },
                { 
                    term: "App", 
                    definition: "An application downloaded to a mobile device.", 
                    defTrans: "Aplicativo",
                    example: "This is my favorite app.", 
                    audioFront: "TTS: App",
                    audioBack: "TTS: This is my favorite app." 
                },
                { 
                    term: "Online", 
                    definition: "Connected to a computer network.", 
                    defTrans: "Online / Conectado",
                    example: "Are you online now?", 
                    audioFront: "TTS: Online",
                    audioBack: "TTS: Are you online now?" 
                },
                { 
                    term: "Offline", 
                    definition: "Not connected to a computer network.", 
                    defTrans: "Offline / Desconectado",
                    example: "The printer is offline.", 
                    audioFront: "TTS: Offline",
                    audioBack: "TTS: The printer is offline." 
                },
                { 
                    term: "Follower", 
                    definition: "Someone who tracks an account on social media.", 
                    defTrans: "Seguidor(a)",
                    example: "I have one follower.", 
                    audioFront: "TTS: Follower",
                    audioBack: "TTS: I have one follower." 
                },
                { 
                    term: "Profile", 
                    definition: "A user's summary of personal details on social media.", 
                    defTrans: "Perfil",
                    example: "Update your profile picture.", 
                    audioFront: "TTS: Profile",
                    audioBack: "TTS: Update your profile picture." 
                },
                { 
                    term: "Username", 
                    definition: "An identification used by a person to access an online service.", 
                    defTrans: "Nome de usuário",
                    example: "Choose a unique username.", 
                    audioFront: "TTS: Username",
                    audioBack: "TTS: Choose a unique username." 
                },
                { 
                    term: "Password", 
                    definition: "A secret word or phrase used to gain admission.", 
                    defTrans: "Senha",
                    example: "Keep your password secret.", 
                    audioFront: "TTS: Password",
                    audioBack: "TTS: Keep your password secret." 
                },
                { 
                    term: "Link", 
                    definition: "A code which connects one part of a program to another.", 
                    defTrans: "Link / Elo",
                    example: "Send me the link.", 
                    audioFront: "TTS: Link",
                    audioBack: "TTS: Send me the link." 
                },
                { 
                    term: "Meme", 
                    definition: "A humorous image or video spread rapidly by internet users.", 
                    defTrans: "Meme",
                    example: "That meme went viral.", 
                    audioFront: "TTS: Meme",
                    audioBack: "TTS: That meme went viral." 
                },
                // --- Topic 3: Generations & Tech ---
                { 
                    term: "Generation", 
                    definition: "All of the people born and living at about the same time.", 
                    defTrans: "Geração",
                    example: "My generation loves tech.", 
                    audioFront: "TTS: Generation",
                    audioBack: "TTS: My generation loves tech." 
                },
                { 
                    term: "Generation Gap", 
                    definition: "Differences of outlook or opinion between people of different generations.", 
                    defTrans: "Conflito de gerações",
                    example: "There is a generation gap in our family.", 
                    audioFront: "TTS: Generation Gap",
                    audioBack: "TTS: There is a generation gap in our family." 
                },
                { 
                    term: "Digital Native", 
                    definition: "A person born or brought up during the age of digital technology.", 
                    defTrans: "Nativo Digital",
                    example: "Gen Z is considered digital native.", 
                    audioFront: "TTS: Digital Native",
                    audioBack: "TTS: Gen Z is considered digital native." 
                },
                { 
                    term: "Trend", 
                    definition: "A general direction in which something is developing or changing.", 
                    defTrans: "Tendência",
                    example: "This is a popular trend.", 
                    audioFront: "TTS: Trend",
                    audioBack: "TTS: This is a popular trend." 
                },
                { 
                    term: "Millennials / Gen Y", 
                    definition: "People born approximately between 1981 and 1996.", 
                    defTrans: "Millennials / Geração Y",
                    example: "Millennials saw the rise of the internet.", 
                    audioFront: "TTS: Millennials. Gen Y.",
                    audioBack: "TTS: Millennials saw the rise of the internet." 
                },
                { 
                    term: "Generation Z", 
                    definition: "People born approximately between 1997 and 2012.", 
                    defTrans: "Geração Z",
                    example: "Generation Z grew up with smartphones.", 
                    audioFront: "TTS: Generation Z",
                    audioBack: "TTS: Generation Z grew up with smartphones." 
                },
                { 
                    term: "Technology", 
                    definition: "Machinery and equipment developed from scientific knowledge.", 
                    defTrans: "Tecnologia",
                    example: "Technology makes life easier.", 
                    audioFront: "TTS: Technology",
                    audioBack: "TTS: Technology makes life easier." 
                },
                { 
                    term: "Device", 
                    definition: "A piece of mechanical or electronic equipment.", 
                    defTrans: "Dispositivo / Aparelho",
                    example: "Turn off your electronic device.", 
                    audioFront: "TTS: Device",
                    audioBack: "TTS: Turn off your electronic device." 
                },
                { 
                    term: "Smartphone", 
                    definition: "A mobile phone that performs many of the functions of a computer.", 
                    defTrans: "Smartphone",
                    example: "My smartphone is essential.", 
                    audioFront: "TTS: Smartphone",
                    audioBack: "TTS: My smartphone is essential." 
                },
                { 
                    term: "Tablet", 
                    definition: "A portable PC with a touchscreen display.", 
                    defTrans: "Tablet",
                    example: "She reads books on a tablet.", 
                    audioFront: "TTS: Tablet",
                    audioBack: "TTS: She reads books on a tablet." 
                },
                { 
                    term: "Computer", 
                    definition: "An electronic device for storing and processing data.", 
                    defTrans: "Computador",
                    example: "I work on a computer.", 
                    audioFront: "TTS: Computer",
                    audioBack: "TTS: I work on a computer." 
                },

                // --- Topic 4: Grammar Points (Present Perfect) ---
                { 
                    term: "Present Perfect", 
                    definition: "Verb tense used to express actions at an unspecified time in the past.", 
                    defTrans: "Presente Perfeito",
                    example: "I have visited London.", 
                    audioFront: "TTS: Present Perfect",
                    audioBack: "TTS: I have visited London." 
                },
                { 
                    term: "Have Gone", 
                    definition: "Indicates someone went to a place and has not returned yet.", 
                    defTrans: "Foi (e ainda não voltou)",
                    example: "He has gone to the store.", 
                    audioFront: "TTS: Have Gone",
                    audioBack: "TTS: He has gone to the store." 
                },
                { 
                    term: "Have Been", 
                    definition: "Indicates someone went to a place and has returned (experience).", 
                    defTrans: "Esteve / Foi (e já voltou)",
                    example: "I have been to Brazil twice.", 
                    audioFront: "TTS: Have Been",
                    audioBack: "TTS: I have been to Brazil twice." 
                },
                { 
                    term: "Ever", 
                    definition: "At any time. Used in questions.", 
                    defTrans: "Alguma vez / Já",
                    example: "Have you ever seen a ghost?", 
                    audioFront: "TTS: Ever",
                    audioBack: "TTS: Have you ever seen a ghost?" 
                },
                { 
                    term: "Never", 
                    definition: "At no time in the past or future.", 
                    defTrans: "Nunca",
                    example: "I have never used that app.", 
                    audioFront: "TTS: Never",
                    audioBack: "TTS: I have never used that app." 
                },
                { 
                    term: "Just", 
                    definition: "Very recently; in the immediate past.", 
                    defTrans: "Acabou de (ação recente)",
                    example: "I have just arrived.", 
                    audioFront: "TTS: Just",
                    audioBack: "TTS: I have just arrived." 
                },
                { 
                    term: "Already", 
                    definition: "Before the time in question; sooner than expected.", 
                    defTrans: "Já (antes do esperado)",
                    example: "I have already done it.", 
                    audioFront: "TTS: Already",
                    audioBack: "TTS: I have already done it." 
                },
                { 
                    term: "Yet", 
                    definition: "Up until the present time (used in negative sentences).", 
                    defTrans: "Ainda / Já",
                    example: "Has he called yet?", 
                    audioFront: "TTS: Yet",
                    audioBack: "TTS: Has he called yet?" 
                },
                { 
                    term: "For (Duration)", 
                    definition: "Preposition used to indicate the duration of an action.", 
                    defTrans: "Por / Há (tempo)",
                    example: "I have waited for an hour.", 
                    audioFront: "TTS: For",
                    audioBack: "TTS: I have waited for an hour." 
                },
                { 
                    term: "Since (Duration)", 
                    definition: "Preposition used to indicate the starting point of an action.", 
                    defTrans: "Desde (ponto no tempo)",
                    example: "I have been here since 2 PM.", 
                    audioFront: "TTS: Since",
                    audioBack: "TTS: I have been here since 2 PM." 
                }
            ]
        }
    ], // Closes steps

    // ======================================================
    // GLOSSARY (Part 1: Context & Internet Vocabulary)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "meme", 
            definition: "An image, video, or text, typically humorous, that spreads rapidly online.", 
            translation: "meme" 
        },
        { 
            topic: "Context", 
            term: "app", 
            definition: "An application, especially as downloaded by a user to a mobile device.", 
            translation: "aplicativo" 
        },
        { 
            topic: "Context", 
            term: "social-media", 
            definition: "Websites and applications that enable users to create and share content.", 
            translation: "mídia social / rede social" 
        },
        { 
            topic: "Context", 
            term: "traditional-media", 
            definition: "Old forms of mass communication like TV, radio, and newspapers.", 
            translation: "mídia tradicional" 
        },
        { 
            topic: "Context", 
            term: "generation-gap", 
            definition: "Differences of outlook or opinion between people of different generations.", 
            translation: "conflito de gerações" 
        },
        { 
            topic: "Context", 
            term: "have-gone", 
            definition: "Indicates someone went to a place and has not returned yet (is not here).", 
            translation: "foi (e ainda não voltou)" 
        },
        { 
            topic: "Context", 
            term: "have-been", 
            definition: "Indicates someone went to a place and has returned (life experience).", 
            translation: "esteve / foi (e já voltou)" 
        },
        { 
            topic: "Context", 
            term: "present-perfect", 
            definition: "Verb tense used to express actions at an unspecified time in the past.", 
            translation: "presente perfeito" 
        },

        // --- TOPIC 2: INTERNET VOCABULARY ---
        { 
            topic: "Internet Vocab", 
            term: "Connect", 
            definition: "To join together so as to provide access and communication.", 
            translation: "Conectar" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Share", 
            definition: "To post or repost content on social media for others to see.", 
            translation: "Compartilhar" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Browse", 
            definition: "To look at information on the internet.", 
            translation: "Navegar (na internet)" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Like", 
            definition: "To click a button to show you enjoy or agree with a post.", 
            translation: "Curtir" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Search", 
            definition: "To look for information on a computer or the internet.", 
            translation: "Pesquisar" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Follow", 
            definition: "To subscribe to an account to see their updates.", 
            translation: "Seguir" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Scroll", 
            definition: "To move text or graphics up or down on a display screen.", 
            translation: "Rolar (a tela)" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Click", 
            definition: "To press a mouse button or tap a screen to select something.", 
            translation: "Clicar" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Download", 
            definition: "To copy data from the internet to your computer.", 
            translation: "Baixar / Fazer download" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Upload", 
            definition: "To transfer data from your computer to the internet.", 
            translation: "Enviar / Subir" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Stream", 
            definition: "To transmit or receive data (video/audio) as a continuous flow.", 
            translation: "Transmitir / Assistir online" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Post", 
            definition: "To publish a piece of writing or image online.", 
            translation: "Postar" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Message", 
            definition: "To send a written communication to someone.", 
            translation: "Enviar mensagem" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Chat", 
            definition: "To exchange messages online in real-time.", 
            translation: "Bater papo" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Comment", 
            definition: "To express an opinion or reaction to a post.", 
            translation: "Comentar" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Internet", 
            definition: "The global communication network that allows computers to connect.", 
            translation: "Internet" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Website", 
            definition: "A set of related web pages located under a single domain name.", 
            translation: "Site / Website" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Online", 
            definition: "Connected to a computer network.", 
            translation: "Online / Conectado" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Offline", 
            definition: "Not connected to a computer network.", 
            translation: "Offline / Desconectado" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Follower", 
            definition: "Someone who tracks an account on social media.", 
            translation: "Seguidor(a)" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Profile", 
            definition: "A user's summary of personal details on social media.", 
            translation: "Perfil" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Username", 
            definition: "An identification used by a person to access an online service.", 
            translation: "Nome de usuário" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Password", 
            definition: "A secret word or phrase used to gain admission.", 
            translation: "Senha" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Link", 
            definition: "A code which connects one part of a program to another.", 
            translation: "Link / Elo" 
        },
        { 
            topic: "Internet Vocab", 
            term: "Viral", 
            definition: "An image or video that circulates rapidly and widely online.", 
            translation: "Viral" 
        },
        // --- TOPIC 3: GENERATIONS & TECH ---
        { 
            topic: "Generations & Tech", 
            term: "Generation", 
            definition: "All of the people born and living at about the same time.", 
            translation: "Geração" 
        },
        { 
            topic: "Generations & Tech", 
            term: "Digital Native", 
            definition: "A person born during the age of digital technology.", 
            translation: "Nativo Digital" 
        },
        { 
            topic: "Generations & Tech", 
            term: "Trend", 
            definition: "A general direction in which something is developing or changing.", 
            translation: "Tendência" 
        },
        { 
            topic: "Generations & Tech", 
            term: "Millennials / Gen Y", 
            definition: "People born approximately between 1981 and 1996.", 
            translation: "Millennials / Geração Y" 
        },
        { 
            topic: "Generations & Tech", 
            term: "Generation Z", 
            definition: "People born approximately between 1997 and 2012.", 
            translation: "Geração Z" 
        },
        { 
            topic: "Generations & Tech", 
            term: "Generation Alpha", 
            definition: "People born from the early 2010s to mid-2020s.", 
            translation: "Geração Alpha" 
        },
        { 
            topic: "Generations & Tech", 
            term: "Technology", 
            definition: "Machinery and equipment developed from scientific knowledge.", 
            translation: "Tecnologia" 
        },
        { 
            topic: "Generations & Tech", 
            term: "Device", 
            definition: "A piece of mechanical or electronic equipment.", 
            translation: "Dispositivo" 
        },
        { 
            topic: "Generations & Tech", 
            term: "Smartphone", 
            definition: "A mobile phone that performs many of the functions of a computer.", 
            translation: "Smartphone" 
        },
        { 
            topic: "Generations & Tech", 
            term: "Tablet", 
            definition: "A portable PC with a touchscreen display.", 
            translation: "Tablet" 
        },
        { 
            topic: "Generations & Tech", 
            term: "Computer", 
            definition: "An electronic device for storing and processing data.", 
            translation: "Computador" 
        },
        { 
            topic: "Generations & Tech", 
            term: "Adapt", 
            definition: "To become adjusted to new conditions.", 
            translation: "Adaptar-se" 
        },

        // --- TOPIC 4: GRAMMAR POINTS ---
        { 
            topic: "Grammar", 
            term: "Past Participle", 
            definition: "The form of a verb used in forming perfect tenses (e.g., seen, gone).", 
            translation: "Particípio Passado" 
        },
        { 
            topic: "Grammar", 
            term: "Ever", 
            definition: "At any time (used in questions).", 
            translation: "Alguma vez / Já" 
        },
        { 
            topic: "Grammar", 
            term: "Never", 
            definition: "At no time in the past or future.", 
            translation: "Nunca" 
        },
        { 
            topic: "Grammar", 
            term: "Just", 
            definition: "Very recently; in the immediate past.", 
            translation: "Acabou de (ação recente)" 
        },
        { 
            topic: "Grammar", 
            term: "Already", 
            definition: "Before the time in question; sooner than expected.", 
            translation: "Já" 
        },
        { 
            topic: "Grammar", 
            term: "Yet", 
            definition: "Up until the present time (used in negatives/questions).", 
            translation: "Ainda / Já" 
        },
        { 
            topic: "Grammar", 
            term: "For", 
            definition: "Preposition used to indicate duration.", 
            translation: "Por / Há (tempo)" 
        },
        { 
            topic: "Grammar", 
            term: "Since", 
            definition: "Preposition used to indicate a starting point in time.", 
            translation: "Desde" 
        },
        // --- TOPIC 10: IRREGULAR VERBS 1 (Forms) ---
        { topic: "Irregular Verbs 1", term: "Be / Was/Were / Been", definition: "To exist or occur.", translation: "Ser / Estar" },
        { topic: "Irregular Verbs 1", term: "Have / Had / Had", definition: "To possess, own, or hold.", translation: "Ter" },
        { topic: "Irregular Verbs 1", term: "Do / Did / Done", definition: "To perform an action.", translation: "Fazer" },
        { topic: "Irregular Verbs 1", term: "Say / Said / Said", definition: "To utter words to convey information.", translation: "Dizer" },
        { topic: "Irregular Verbs 1", term: "Go / Went / Gone", definition: "To move from one place to another.", translation: "Ir" },
        { topic: "Irregular Verbs 1", term: "Get / Got / Got", definition: "To come to have or hold something; receive.", translation: "Obter / Conseguir" },
        { topic: "Irregular Verbs 1", term: "Make / Made / Made", definition: "To form something by putting parts together.", translation: "Fazer / Criar" },
        { topic: "Irregular Verbs 1", term: "Know / Knew / Known", definition: "To be aware of through observation or inquiry.", translation: "Saber / Conhecer" },
        { topic: "Irregular Verbs 1", term: "Think / Thought / Thought", definition: "To have a particular opinion, belief, or idea.", translation: "Pensar" },
        { topic: "Irregular Verbs 1", term: "Take / Took / Taken", definition: "To lay hold of something with one's hands.", translation: "Pegar / Levar" },
        { topic: "Irregular Verbs 1", term: "See / Saw / Seen", definition: "To perceive with the eyes.", translation: "Ver" },
        { topic: "Irregular Verbs 1", term: "Come / Came / Come", definition: "To move or travel towards or into a place.", translation: "Vir" },
        { topic: "Irregular Verbs 1", term: "Find / Found / Found", definition: "To discover or perceive by chance.", translation: "Encontrar" },
        { topic: "Irregular Verbs 1", term: "Give / Gave / Given", definition: "To freely transfer the possession of something.", translation: "Dar" },
        { topic: "Irregular Verbs 1", term: "Tell / Told / Told", definition: "To communicate information to someone.", translation: "Contar / Dizer" },

        // --- TOPIC 11: IRREGULAR VERBS 2 (Forms) ---
        { topic: "Irregular Verbs 2", term: "Feel / Felt / Felt", definition: "To experience an emotion or sensation.", translation: "Sentir" },
        { topic: "Irregular Verbs 2", term: "Become / Became / Become", definition: "To begin to be; turn into.", translation: "Tornar-se" },
        { topic: "Irregular Verbs 2", term: "Leave / Left / Left", definition: "To go away from.", translation: "Sair / Deixar" },
        { topic: "Irregular Verbs 2", term: "Put / Put / Put", definition: "To move something into a specific position.", translation: "Colocar" },
        { topic: "Irregular Verbs 2", term: "Mean / Meant / Meant", definition: "To intend to convey or refer to.", translation: "Significar" },
        { topic: "Irregular Verbs 2", term: "Keep / Kept / Kept", definition: "To retain possession of.", translation: "Manter / Guardar" },
        { topic: "Irregular Verbs 2", term: "Let / Let / Let", definition: "To not prevent or forbid; allow.", translation: "Deixar / Permitir" },
        { topic: "Irregular Verbs 2", term: "Begin / Began / Begun", definition: "To start; perform the first part of.", translation: "Começar" },
        { topic: "Irregular Verbs 2", term: "Hear / Heard / Heard", definition: "To perceive with the ear the sound made by someone.", translation: "Ouvir" },
        { topic: "Irregular Verbs 2", term: "Run / Ran / Run", definition: "To move at a speed faster than a walk.", translation: "Correr" },
        { topic: "Irregular Verbs 2", term: "Hold / Held / Held", definition: "To grasp, carry, or support with one's hands.", translation: "Segurar" },
        { topic: "Irregular Verbs 2", term: "Bring / Brought / Brought", definition: "To come to a place with (someone or something).", translation: "Trazer" },
        { topic: "Irregular Verbs 2", term: "Write / Wrote / Written", definition: "To mark (letters, words, or other symbols) on a surface.", translation: "Escrever" },
        { topic: "Irregular Verbs 2", term: "Sit / Sat / Sat", definition: "To be in a position in which one's weight is supported by one's buttocks.", translation: "Sentar" },
        { topic: "Irregular Verbs 2", term: "Stand / Stood / Stood", definition: "To have or maintain an upright position.", translation: "Ficar em pé" }
    ]
}); // Final closing of the lesson object