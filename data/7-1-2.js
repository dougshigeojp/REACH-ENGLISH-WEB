/**
 * REACH English - LESSON DATA 7-1-2
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "7-1-2", 
    grade: "7th Grade",       
    bimester: "1",   
    chapter: "2",    
    chapterTitle: "The Life Online", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Talk about social media and technology.<br>• Describe what you are doing right now (Present Continuous).<br>• Describe your daily habits (Simple Present).<br>• Use internet slang like LOL and OMG.<br>• Use prepositions of time (IN, ON, AT).",
            welcome: "Hello, Digital Natives! It's Mr. D!<br><br>Welcome to \"The Life Online\"! Today, we are logging into the world of social media, apps, and gadgets. We will learn how to share what is happening right now versus what we usually do. We'll also decode internet slang and master the tricky prepositions of time. Get your smartphones ready, and let's post some knowledge!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about social media and technology. Describe what you are doing right now using the Present Continuous. Describe your daily habits using the Simple Present. Use internet slang like LOL and OMG. And use prepositions of time: IN, ON, and AT.",
                welcome: "TTS: Hello, Digital Natives! It's Mr. D! Welcome to The Life Online! Today, we are logging into the world of social media, apps, and gadgets. We will learn how to share what is happening right now versus what we usually do. We'll also decode internet slang and master the tricky prepositions of time. Get your smartphones ready, and let's post some knowledge!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "(Sound of typing on a phone keyboard and a notification ping. Albert and Celine are sitting on a bench during break time.)", 
            contextAudio: "audio/7-1-2/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "Hi Celine! What are you [doing](tooltip:doing)? You look [busy](tooltip:busy)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Hey Albert. I am [posting](tooltip:post) a photo on Instagram. I am [tagging](tooltip:tag) my friends." 
                },
                { 
                    speaker: "Albert", 
                    text: "Cool! I [usually](tooltip:usually) [check](tooltip:check) my [feed](tooltip:feed) in the morning. I don't [post](tooltip:post) very [often](tooltip:often)." 
                },
                { 
                    speaker: "Celine", 
                    text: "I love [sharing](tooltip:share) [stories](tooltip:story). Look, this is a funny [meme](tooltip:meme). [LOL](tooltip:lol)!" 
                },
                { 
                    speaker: "Albert", 
                    text: "That is funny! By the way, do you have the [wifi](tooltip:wifi) password? I need to [upload](tooltip:upload) my [homework](tooltip:homework)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Yes, it is 'Student123'. Are you [using](tooltip:use) your [laptop](tooltip:laptop)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "No, just my [smartphone](tooltip:smartphone). I am [sending](tooltip:send) the file [now](tooltip:now). Thanks!" 
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
                    title: "Social Media Verbs",
                    audio: "TTS: Post. Share. Like. Comment. Follow. Unfollow. Tag. Upload. Download. Send. Chat. Block.",
                    items: [
                        { term: "Post", trans: "<small style='color:#0077b6'>postar / publicar</small>" },
                        { term: "Share", trans: "<small style='color:#0077b6'>compartilhar</small>" },
                        { term: "Like", trans: "<small style='color:#0077b6'>curtir</small>" },
                        { term: "Comment", trans: "<small style='color:#0077b6'>comentar</small>" },
                        { term: "Follow", trans: "<small style='color:#0077b6'>seguir</small>" },
                        { term: "Unfollow", trans: "<small style='color:#0077b6'>deixar de seguir</small>" },
                        { term: "Tag", trans: "<small style='color:#0077b6'>marcar (alguém)</small>" },
                        { term: "Upload", trans: "<small style='color:#0077b6'>carregar / subir (arquivos)</small>" },
                        { term: "Download", trans: "<small style='color:#0077b6'>baixar</small>" },
                        { term: "Send", trans: "<small style='color:#0077b6'>enviar</small>" },
                        { term: "Chat", trans: "<small style='color:#0077b6'>conversar / bater papo</small>" },
                        { term: "Block", trans: "<small style='color:#0077b6'>bloquear</small>" }
                    ]
                },
                {
                    title: "Social Media Vocabulary",
                    audio: "TTS: Profile. Feed. Story. Message. Hashtag. Notification. Account. Follower. Influencer. Meme.",
                    items: [
                        { term: "Profile", trans: "<small style='color:#0077b6'>perfil</small>" },
                        { term: "Feed", trans: "<small style='color:#0077b6'>feed (linha do tempo)</small>" },
                        { term: "Story", trans: "<small style='color:#0077b6'>história (story)</small>" },
                        { term: "Message", trans: "<small style='color:#0077b6'>mensagem</small>" },
                        { term: "Hashtag", trans: "<small style='color:#0077b6'>hashtag (#)</small>" },
                        { term: "Notification", trans: "<small style='color:#0077b6'>notificação</small>" },
                        { term: "Account", trans: "<small style='color:#0077b6'>conta</small>" },
                        { term: "Follower", trans: "<small style='color:#0077b6'>seguidor</small>" },
                        { term: "Influencer", trans: "<small style='color:#0077b6'>influenciador(a)</small>" },
                        { term: "Meme", trans: "<small style='color:#0077b6'>meme</small>" }
                    ]
                },
                {
                    title: "Technology & Devices",
                    audio: "TTS: Smartphone. Tablet. Laptop. Computer. Headphones. App. Wifi. Online. Offline.",
                    items: [
                        { term: "Smartphone", trans: "<small style='color:#0077b6'>smartphone / celular</small>" },
                        { term: "Tablet", trans: "<small style='color:#0077b6'>tablet</small>" },
                        { term: "Laptop", trans: "<small style='color:#0077b6'>notebook / laptop</small>" },
                        { term: "Computer", trans: "<small style='color:#0077b6'>computador</small>" },
                        { term: "Headphones", trans: "<small style='color:#0077b6'>fones de ouvido</small>" },
                        { term: "App", trans: "<small style='color:#0077b6'>aplicativo</small>" },
                        { term: "Wifi", trans: "<small style='color:#0077b6'>wi-fi</small>" },
                        { term: "Online", trans: "<small style='color:#0077b6'>online / conectado</small>" },
                        { term: "Offline", trans: "<small style='color:#0077b6'>offline / desconectado</small>" }
                    ]
                },
                {
                    title: "Internet Slang",
                    audio: "TTS: LOL. OMG. IDK. BRB. TBT.",
                    items: [
                        { term: "LOL", trans: "<small style='color:#0077b6'>Rindo muito (Laughing Out Loud)</small>" },
                        { term: "OMG", trans: "<small style='color:#0077b6'>Oh meu Deus (Oh My God)</small>" },
                        { term: "IDK", trans: "<small style='color:#0077b6'>Eu não sei (I Don't Know)</small>" },
                        { term: "BRB", trans: "<small style='color:#0077b6'>Volto logo (Be Right Back)</small>" },
                        { term: "TBT", trans: "<small style='color:#0077b6'>Quinta-feira do retorno (Throwback Thursday)</small>" }
                    ]
                },
                {
                    title: "Polysemy (Double Meanings)",
                    audio: "TTS: Post. Like. Feed.",
                    items: [
                        { term: "Post", trans: "<small style='color:#0077b6'>Correio (carta) vs. Publicação (internet)</small>" },
                        { term: "Like", trans: "<small style='color:#0077b6'>Gostar (sentimento) vs. Curtida (botão)</small>" },
                        { term: "Feed", trans: "<small style='color:#0077b6'>Alimentar (animal) vs. Feed (conteúdo)</small>" }
                    ]
                },
                {
                    title: "Habit Verbs",
                    audio: "TTS: Wake up. Get up. Study. Work. Watch. Sleep.",
                    items: [
                        { term: "Wake up", trans: "<small style='color:#0077b6'>acordar</small>" },
                        { term: "Get up", trans: "<small style='color:#0077b6'>levantar-se</small>" },
                        { term: "Study", trans: "<small style='color:#0077b6'>estudar</small>" },
                        { term: "Work", trans: "<small style='color:#0077b6'>trabalhar</small>" },
                        { term: "Watch", trans: "<small style='color:#0077b6'>assistir</small>" },
                        { term: "Sleep", trans: "<small style='color:#0077b6'>dormir</small>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: What are you doing? I usually. How often. Do you like.",
                    items: [
                        { term: "What are you doing?", trans: "<small style='color:#0077b6'>O que você está fazendo?</small>" },
                        { term: "I usually...", trans: "<small style='color:#0077b6'>Eu geralmente...</small>" },
                        { term: "How often...?", trans: "<small style='color:#0077b6'>Com que frequência...?</small>" },
                        { term: "Do you like...?", trans: "<small style='color:#0077b6'>Você gosta de...?</small>" }
                    ]
                }
            ],

            // ======================================================
            // 2B: Context Examples (Grouped & Tabbed)
            // ======================================================
            exampleGroups: [
                {
                    title: "Social Media Verbs",
                    audio: "TTS: I post photos every day. Please share this video. Did you like my comment? Write a nice comment. I follow my favorite singer. I unfollow boring pages. Tag me in the picture! I am uploading a new video. You can download the game. Send me a message. We chat online at night. He blocked the spam account.",
                    items: [
                        { term: "Post", sent: "I post photos every day.", trans: "<span style='color:#0077b6'>Eu posto fotos todo dia.</span>" },
                        { term: "Share", sent: "Please share this video.", trans: "<span style='color:#0077b6'>Por favor, compartilhe este vídeo.</span>" },
                        { term: "Like", sent: "Did you like my comment?", trans: "<span style='color:#0077b6'>Você curtiu meu comentário?</span>" },
                        { term: "Comment", sent: "Write a nice comment.", trans: "<span style='color:#0077b6'>Escreva um comentário legal.</span>" },
                        { term: "Follow", sent: "I follow my favorite singer.", trans: "<span style='color:#0077b6'>Eu sigo meu cantor favorito.</span>" },
                        { term: "Unfollow", sent: "I unfollow boring pages.", trans: "<span style='color:#0077b6'>Eu deixo de seguir páginas chatas.</span>" },
                        { term: "Tag", sent: "Tag me in the picture!", trans: "<span style='color:#0077b6'>Me marque na foto!</span>" },
                        { term: "Upload", sent: "I am uploading a new video.", trans: "<span style='color:#0077b6'>Estou carregando um vídeo novo.</span>" },
                        { term: "Download", sent: "You can download the game.", trans: "<span style='color:#0077b6'>Você pode baixar o jogo.</span>" },
                        { term: "Send", sent: "Send me a message.", trans: "<span style='color:#0077b6'>Me envie uma mensagem.</span>" },
                        { term: "Chat", sent: "We chat online at night.", trans: "<span style='color:#0077b6'>Nós conversamos online à noite.</span>" },
                        { term: "Block", sent: "He blocked the spam account.", trans: "<span style='color:#0077b6'>Ele bloqueou a conta de spam.</span>" }
                    ]
                },
                {
                    title: "Social Media Vocabulary",
                    audio: "TTS: Your profile picture is cool. Check your feed for news. I watched her story. I have a new message. Use the hashtag summer. Turn on the notifications. I have an Instagram account. She has many followers. He is a famous influencer. This meme is so funny!",
                    items: [
                        { term: "Profile", sent: "Your profile picture is cool.", trans: "<span style='color:#0077b6'>Sua foto de perfil é legal.</span>" },
                        { term: "Feed", sent: "Check your feed for news.", trans: "<span style='color:#0077b6'>Verifique seu feed para novidades.</span>" },
                        { term: "Story", sent: "I watched her story.", trans: "<span style='color:#0077b6'>Eu assisti o story dela.</span>" },
                        { term: "Message", sent: "I have a new message.", trans: "<span style='color:#0077b6'>Eu tenho uma nova mensagem.</span>" },
                        { term: "Hashtag", sent: "Use the hashtag summer.", trans: "<span style='color:#0077b6'>Use a hashtag verão.</span>" },
                        { term: "Notification", sent: "Turn on the notifications.", trans: "<span style='color:#0077b6'>Ligue as notificações.</span>" },
                        { term: "Account", sent: "I have an Instagram account.", trans: "<span style='color:#0077b6'>Eu tenho uma conta no Instagram.</span>" },
                        { term: "Follower", sent: "She has many followers.", trans: "<span style='color:#0077b6'>Ela tem muitos seguidores.</span>" },
                        { term: "Influencer", sent: "He is a famous influencer.", trans: "<span style='color:#0077b6'>Ele é um influenciador famoso.</span>" },
                        { term: "Meme", sent: "This meme is so funny!", trans: "<span style='color:#0077b6'>Esse meme é muito engraçado!</span>" }
                    ]
                },
                {
                    title: "Technology & Devices",
                    audio: "TTS: I use my smartphone for everything. The tablet has a big screen. I do homework on my laptop. The computer is on the desk. I listen to music with headphones. Download the new app. Is there wifi here? She is online now. The game works offline.",
                    items: [
                        { term: "Smartphone", sent: "I use my smartphone for everything.", trans: "<span style='color:#0077b6'>Eu uso meu smartphone para tudo.</span>" },
                        { term: "Tablet", sent: "The tablet has a big screen.", trans: "<span style='color:#0077b6'>O tablet tem uma tela grande.</span>" },
                        { term: "Laptop", sent: "I do homework on my laptop.", trans: "<span style='color:#0077b6'>Eu faço lição de casa no meu notebook.</span>" },
                        { term: "Computer", sent: "The computer is on the desk.", trans: "<span style='color:#0077b6'>O computador está na mesa.</span>" },
                        { term: "Headphones", sent: "I listen to music with headphones.", trans: "<span style='color:#0077b6'>Eu ouço música com fones de ouvido.</span>" },
                        { term: "App", sent: "Download the new app.", trans: "<span style='color:#0077b6'>Baixe o novo aplicativo.</span>" },
                        { term: "Wifi", sent: "Is there wifi here?", trans: "<span style='color:#0077b6'>Tem wi-fi aqui?</span>" },
                        { term: "Online", sent: "She is online now.", trans: "<span style='color:#0077b6'>Ela está online agora.</span>" },
                        { term: "Offline", sent: "The game works offline.", trans: "<span style='color:#0077b6'>O jogo funciona offline.</span>" }
                    ]
                },
                {
                    title: "Internet Slang",
                    audio: "TTS: That joke was great, LOL! OMG, look at that! IDK the answer. I need water, BRB. Posting a photo from 2010 for TBT.",
                    items: [
                        { term: "LOL", sent: "That joke was great, LOL!", trans: "<span style='color:#0077b6'>Aquela piada foi ótima, rsrsrs!</span>" },
                        { term: "OMG", sent: "OMG, look at that!", trans: "<span style='color:#0077b6'>Oh meu Deus, olhe aquilo!</span>" },
                        { term: "IDK", sent: "IDK the answer.", trans: "<span style='color:#0077b6'>Eu não sei a resposta.</span>" },
                        { term: "BRB", sent: "I need water, BRB.", trans: "<span style='color:#0077b6'>Preciso de água, volto já.</span>" },
                        { term: "TBT", sent: "Posting a photo from 2010 for TBT.", trans: "<span style='color:#0077b6'>Postando uma foto de 2010 para o TBT.</span>" }
                    ]
                },
                {
                    title: "Polysemy",
                    audio: "TTS: I sent a letter by post. I made a new post. I like pizza. Give me a like. Don't feed the animals. Scroll down the feed.",
                    items: [
                        { term: "Post", sent: "I sent a letter by post. / I made a new post.", trans: "<span style='color:#0077b6'>Enviei uma carta pelo correio. / Fiz um novo post.</span>" },
                        { term: "Like", sent: "I like pizza. / Give me a like.", trans: "<span style='color:#0077b6'>Eu gosto de pizza. / Me dê uma curtida.</span>" },
                        { term: "Feed", sent: "Don't feed the animals. / Scroll down the feed.", trans: "<span style='color:#0077b6'>Não alimente os animais. / Role o feed para baixo.</span>" }
                    ]
                },
                {
                    title: "Habit Verbs",
                    audio: "TTS: I wake up at 7 AM. I get up immediately. She studies math. They work hard. We watch series. I sleep eight hours.",
                    items: [
                        { term: "Wake up", sent: "I wake up at 7 AM.", trans: "<span style='color:#0077b6'>Eu acordo às 7 da manhã.</span>" },
                        { term: "Get up", sent: "I get up immediately.", trans: "<span style='color:#0077b6'>Eu levanto imediatamente.</span>" },
                        { term: "Study", sent: "She studies math.", trans: "<span style='color:#0077b6'>Ela estuda matemática.</span>" },
                        { term: "Work", sent: "They work hard.", trans: "<span style='color:#0077b6'>Eles trabalham duro.</span>" },
                        { term: "Watch", sent: "We watch series.", trans: "<span style='color:#0077b6'>Nós assistimos séries.</span>" },
                        { term: "Sleep", sent: "I sleep eight hours.", trans: "<span style='color:#0077b6'>Eu durmo oito horas.</span>" }
                    ]
                },
                {
                    title: "Expressions",
                    audio: "TTS: What are you doing? I am reading. I usually play games on Friday. How often do you post? Do you like TikTok?",
                    items: [
                        { term: "What are you doing?", sent: "\"What are you doing?\" \"I'm reading.\"", trans: "<span style='color:#0077b6'>\"O que você está fazendo?\" \"Estou lendo.\"</span>" },
                        { term: "I usually...", sent: "I usually play games on Friday.", trans: "<span style='color:#0077b6'>Eu geralmente jogo jogos na sexta.</span>" },
                        { term: "How often...", sent: "How often do you post?", trans: "<span style='color:#0077b6'>Com que frequência você posta?</span>" },
                        { term: "Do you like...", sent: "Do you like TikTok?", trans: "<span style='color:#0077b6'>Você gosta de TikTok?</span>" }
                    ]
                }
            ],

            // ======================================================
            // 2C: Practice Drills (16 MCQ Exercises)
            // ======================================================
            drills: [
                { 
                    type: "mcq", 
                    q: "Choose the correct translation for 'Share':", 
                    options: [ {t: "Curtir", c: false}, {t: "Compartilhar", c: true}, {t: "Seguir", c: false}, {t: "Bloquear", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the correct translation for 'Upload':", 
                    options: [ {t: "Baixar", c: false}, {t: "Carregar/Subir", c: true}, {t: "Digitar", c: false}, {t: "Excluir", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the correct translation for 'Follow':", 
                    options: [ {t: "Seguir", c: true}, {t: "Parar", c: false}, {t: "Falar", c: false}, {t: "Ver", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the correct translation for 'Tag':", 
                    options: [ {t: "Marcar", c: true}, {t: "Tocar", c: false}, {t: "Apagar", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Where do you see a list of posts?", 
                    options: [ {t: "Profile", c: false}, {t: "Feed", c: true}, {t: "Message", c: false}, {t: "Notification", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "What do you use to log in?", 
                    options: [ {t: "Hashtag", c: false}, {t: "Account", c: true}, {t: "Story", c: false}, {t: "Meme", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "A funny image with text is a...", 
                    options: [ {t: "Notification", c: false}, {t: "Meme", c: true}, {t: "Wifi", c: false}, {t: "Setting", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "A portable computer is a...", 
                    options: [ {t: "Desktop", c: false}, {t: "Laptop", c: true}, {t: "Mouse", c: false}, {t: "Screen", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "You use these to listen to music privately.", 
                    options: [ {t: "Headphones", c: true}, {t: "Speakers", c: false}, {t: "Microphones", c: false}, {t: "Tablets", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "What does 'LOL' mean?", 
                    options: [ {t: "Lots of Love", c: false}, {t: "Laughing Out Loud", c: true} ] 
                },
                { 
                    type: "mcq", 
                    q: "What does 'IDK' mean?", 
                    options: [ {t: "I Don't Know", c: true}, {t: "I Do Know", c: false}, {t: "I Don't Care", c: false}, {t: "In Da Kitchen", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "'To give food' and 'A timeline of content' are definitions for:", 
                    options: [ {t: "Like", c: false}, {t: "Post", c: false}, {t: "Feed", c: true}, {t: "Share", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: 'I _______ up at 6:00 AM.'", 
                    options: [ {t: "wake", c: true}, {t: "sleep", c: false}, {t: "go", c: false}, {t: "watch", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: 'She _______ TV every night.'", 
                    options: [ {t: "watches", c: true}, {t: "sees", c: false}, {t: "looks", c: false}, {t: "observes", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: '_______ are you doing?'", 
                    options: [ {t: "When", c: false}, {t: "Where", c: false}, {t: "What", c: true}, {t: "Who", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: '_______ often do you use Instagram?'", 
                    options: [ {t: "What", c: false}, {t: "How", c: true}, {t: "When", c: false}, {t: "Where", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "I want to save a video from the internet to my phone. I need to _______ it.", 
                    options: [ {t: "Upload", c: false}, {t: "Download", c: true}, {t: "Block", c: false}, {t: "Tag", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "The place where you put your photo and information on social media is your:", 
                    options: [ {t: "Feed", c: false}, {t: "Hashtag", c: false}, {t: "Profile", c: true}, {t: "Meme", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "I don't want to see posts from this person anymore. I will _______ them.", 
                    options: [ {t: "Unfollow", c: true}, {t: "Like", c: false}, {t: "Share", c: false}, {t: "Comment", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Slang: If you need to leave the computer for a minute, you type:", 
                    options: [ {t: "TBT", c: false}, {t: "IDK", c: false}, {t: "BRB", c: true}, {t: "OMG", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "A person with many followers who influences others is an:", 
                    options: [ {t: "Influencer", c: true}, {t: "Unfollower", c: false}, {t: "Accountant", c: false}, {t: "Slang", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "We use the '#' symbol to create a _______.", 
                    options: [ {t: "Message", c: false}, {t: "Hashtag", c: true}, {t: "Story", c: false}, {t: "Profile", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Double Meaning: 'I sent a letter by _______' or 'I made a new _______ on Facebook.'", 
                    options: [ {t: "Like", c: false}, {t: "Feed", c: false}, {t: "Post", c: true}, {t: "Chat", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "My phone is _______ because I turned off the internet.", 
                    options: [ {t: "Online", c: false}, {t: "Offline", c: true}, {t: "Wifi", c: false}, {t: "App", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "I am using my _______ to do homework because it is portable and has a keyboard.", 
                    options: [ {t: "Smartphone", c: false}, {t: "Headphones", c: false}, {t: "Laptop", c: true}, {t: "TV", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Habits: 'I _______ at 7:00 AM, but I stay in bed for 10 minutes.'", 
                    options: [ {t: "Wake up", c: true}, {t: "Sleep", c: false}, {t: "Watch", c: false}, {t: "Work", c: false} ] 
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
                    title: "Simple Present (Habits)",
                    audio: "TTS: We use the Simple Present to talk about things we do regularly, habits, and general facts. Affirmative: I post photos. He posts photos. Negative: I don't share fake news. He doesn't use TikTok. Interrogative: Do you follow him? Does she like the video?",
                    explanation: "We use the Simple Present to talk about things we do regularly, habits, and general facts. Add -s for He/She/It in the affirmative.<br><br><small style='color:#0077b6; font-style:italic;'>(Usamos o Presente Simples para falar sobre coisas que fazemos regularmente, hábitos e fatos gerais. Adicione -s para Ele/Ela na afirmativa.)</small>",
                    samples: [
                        { en: "I post photos.", pt: "<small style='color:#0077b6'>Eu posto fotos.</small>" },
                        { en: "He posts photos.", pt: "<small style='color:#0077b6'>Ele posta fotos.</small>" },
                        { en: "I don't share fake news.", pt: "<small style='color:#0077b6'>Eu não compartilho notícias falsas.</small>" },
                        { en: "He doesn't use TikTok.", pt: "<small style='color:#0077b6'>Ele não usa o TikTok.</small>" },
                        { en: "Do you follow him?", pt: "<small style='color:#0077b6'>Você segue ele?</small>" },
                        { en: "Does she like the video?", pt: "<small style='color:#0077b6'>Ela gosta do vídeo?</small>" }
                    ]
                },
                {
                    title: "Present Continuous (Now)",
                    audio: "TTS: We use the Present Continuous to talk about actions happening exactly at this moment. We use the verb to be and the verb with I N G. Affirmative: I am watching a video. He is loading. We are chatting. Negative: I am not listening. She isn't recording. Interrogative: Are you gaming?",
                    explanation: "We use the Present Continuous to talk about actions happening exactly at this moment. We use the verb **to be + verb-ing**.<br><br><small style='color:#0077b6; font-style:italic;'>(Usamos o Presente Contínuo para falar de ações acontecendo exatamente neste momento. Usamos o verbo 'to be' + verbo com -ing.)</small>",
                    samples: [
                        { en: "I am watching a video.", pt: "<small style='color:#0077b6'>Eu estou assistindo um vídeo.</small>" },
                        { en: "He is loading.", pt: "<small style='color:#0077b6'>Ele está carregando.</small>" },
                        { en: "We are chatting.", pt: "<small style='color:#0077b6'>Nós estamos conversando.</small>" },
                        { en: "I am not listening.", pt: "<small style='color:#0077b6'>Eu não estou ouvindo.</small>" },
                        { en: "She isn't recording.", pt: "<small style='color:#0077b6'>Ela não está gravando.</small>" },
                        { en: "Are you gaming?", pt: "<small style='color:#0077b6'>Você está jogando?</small>" }
                    ]
                },
                {
                    title: "Present Simple vs. Continuous",
                    audio: "TTS: We compare these to show the difference between a routine and a temporary action. Routine: words like usually, always, every day. Now: words like now, at the moment, today. Example: I usually post text, but today I am posting a video.",
                    explanation: "We compare these to show the difference between a routine and a temporary action.<br><br><small style='color:#0077b6; font-style:italic;'>(Comparamos estes dois para mostrar a diferença entre uma rotina e uma ação temporária.)</small>",
                    samples: [
                        { en: "Routine: usually, always, every day, often", pt: "<small style='color:#0077b6'>Rotina: palavras como geralmente, sempre, todo dia.</small>" },
                        { en: "Now: now, at the moment, right now, today", pt: "<small style='color:#0077b6'>Agora: palavras como agora, no momento, hoje.</small>" },
                        { en: "I usually post text, but today I am posting a video.", pt: "<small style='color:#0077b6'>Eu geralmente posto texto, mas hoje eu estou postando um vídeo.</small>" }
                    ]
                },
                {
                    title: "Prepositions of Time (IN/ON/AT)",
                    audio: "TTS: We use different prepositions for specific times. Use I N for periods like months, years, or parts of the day. Use O N for days and dates. Use A T for specific moments like clock time or night.",
                    explanation: "We use different prepositions for specific times.<br><br><small style='color:#0077b6; font-style:italic;'>(Usamos preposições diferentes para tempos específicos.)</small>",
                    samples: [
                        { en: "IN: in January, in 2025, in the morning", pt: "<small style='color:#0077b6'>Períodos: meses, anos, partes do dia.</small>" },
                        { en: "ON: on Monday, on my birthday, on July 4th", pt: "<small style='color:#0077b6'>Dias e Datas: dias da semana, datas específicas.</small>" },
                        { en: "AT: at 9:00 PM, at night, at lunch", pt: "<small style='color:#0077b6'>Momentos Específicos: horas, noite, horários de refeição.</small>" }
                    ]
                }
            ],

            // ======================================================
            // 3B: Natural Examples (Dialogues Grouped in Boxes)
            // ======================================================
            dialogueGroups: [
                {
                    title: "Dialogue 1: Simple Present (Routine)",
                    audio: "audio/7-1-2/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Do you use Twitter?", 
                            pt: "<span style='color:#0077b6'>Você usa o Twitter?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, I don't. I prefer Instagram. I check it every morning. Does your brother have an account?", 
                            pt: "<span style='color:#0077b6'>Não, eu não uso. Eu prefiro o Instagram. Eu checo toda manhã. O seu irmão tem uma conta?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes, he does. He posts memes every day.", 
                            pt: "<span style='color:#0077b6'>Sim, ele tem. Ele posta memes todo dia.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Present Continuous (Now)",
                    audio: "audio/7-1-2/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Are you listening to me, Albert?", 
                            pt: "<span style='color:#0077b6'>Você está me ouvindo, Albert?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Sorry, I am not. I am reading a comment on my post.", 
                            pt: "<span style='color:#0077b6'>Desculpe, não estou. Estou lendo um comentário no meu post.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Is your phone ringing?", 
                            pt: "<span style='color:#0077b6'>Seu telefone está tocando?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes, it is. My mom is calling me.", 
                            pt: "<span style='color:#0077b6'>Sim, está. Minha mãe está me ligando.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Comparison (Routine vs. Now)",
                    audio: "audio/7-1-2/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "I usually play offline games, but today I am playing online with friends.", 
                            pt: "<span style='color:#0077b6'>Eu geralmente jogo jogos offline, mas hoje estou jogando online com amigos.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Look! Sarah usually wears glasses, but she is wearing contact lenses in this photo.", 
                            pt: "<span style='color:#0077b6'>Olhe! Sarah geralmente usa óculos, mas ela está usando lentes de contato nesta foto.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 4: Prepositions (IN/ON/AT)",
                    audio: "audio/7-1-2/step3_dialogue4.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "When do you usually go online?", 
                            pt: "<span style='color:#0077b6'>Quando você costuma entrar na internet?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I usually go online in the evening, at 7 o'clock. And you?", 
                            pt: "<span style='color:#0077b6'>Eu geralmente fico online à noite, às 7 horas. E você?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "I prefer weekends. I post a lot on Saturdays.", 
                            pt: "<span style='color:#0077b6'>Eu prefiro fins de semana. Eu posto muito aos sábados.</span>" 
                        }
                    ]
                }
            ],

            // ======================================================
            // 3C: Grammar Practice (20 MCQ Exercises)
            // ======================================================
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Simple Present: Complete: 'She _______ many followers.'",
                    options: [ {t: "have", c: false}, {t: "having", c: false}, {t: "has", c: true}, {t: "haved", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Simple Present Negative: 'We _______ like cyberbullying.'",
                    options: [ {t: "doesn't", c: false}, {t: "not", c: false}, {t: "don't", c: true}, {t: "aren't", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Present Continuous: 'They _______ a new video right now.'",
                    options: [ {t: "watch", c: false}, {t: "are watching", c: true}, {t: "is watching", c: false}, {t: "watches", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Present Continuous Question: '_______ you using the wifi?'",
                    options: [ {t: "Do", c: false}, {t: "Is", c: false}, {t: "Are", c: true}, {t: "Does", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Comparison: 'He usually _______ (chat), but now he _______ (study).'",
                    options: [ 
                        {t: "chat / studying", c: false}, 
                        {t: "chats / studies", c: false}, 
                        {t: "chats / is studying", c: true}, 
                        {t: "chatting / is studying", c: false} 
                    ]
                },
                {
                    type: "mcq",
                    q: "Preposition AT: 'I wake up _______ 6:00 AM.'",
                    options: [ {t: "in", c: false}, {t: "on", c: false}, {t: "at", c: true}, {t: "to", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Preposition ON: 'We don't have school _______ Sundays.'",
                    options: [ {t: "at", c: false}, {t: "in", c: false}, {t: "on", c: true}, {t: "the", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Preposition IN: 'My birthday is _______ October.'",
                    options: [ {t: "on", c: false}, {t: "at", c: false}, {t: "in", c: true}, {t: "of", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Simple Present Question: '_______ your brother have a TikTok account?'",
                    options: [ {t: "Do", c: false}, {t: "Is", c: false}, {t: "Does", c: true}, {t: "Are", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Present Continuous Negative: 'I _______ sending the file at the moment.'",
                    options: [ {t: "am not", c: true}, {t: "don't", c: false}, {t: "not", c: false}, {t: "isn't", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Routine: 'Celine _______ her feed every morning.'",
                    options: [ {t: "check", c: false}, {t: "checks", c: true}, {t: "is checking", c: false}, {t: "checking", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Preposition: 'We usually chat online _______ night.'",
                    options: [ {t: "in", c: false}, {t: "on", c: false}, {t: "at", c: true}, {t: "for", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Present Continuous: 'Listen! My phone _______.'",
                    options: [ {t: "rings", c: false}, {t: "is ringing", c: true}, {t: "ringing", c: false}, {t: "are ringing", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Simple Present: 'Influencers _______ many photos to Instagram.'",
                    options: [ {t: "post", c: true}, {t: "posts", c: false}, {t: "posting", c: false}, {t: "is post", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Preposition: 'I check my email _______ the afternoon.'",
                    options: [ {t: "at", c: false}, {t: "on", c: false}, {t: "in", c: true}, {t: "to", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Comparison: 'They _______ (play) video games right now.'",
                    options: [ {t: "plays", c: false}, {t: "are playing", c: true}, {t: "play", c: false}, {t: "is playing", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Simple Present Negative: 'My laptop _______ work without the charger.'",
                    options: [ {t: "don't", c: false}, {t: "isn't", c: false}, {t: "doesn't", c: true}, {t: "no", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Preposition: 'The online meeting is _______ Friday.'",
                    options: [ {t: "at", c: false}, {t: "in", c: false}, {t: "on", c: true}, {t: "for", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Present Continuous Question: 'Why _______ they tagging me in this photo?'",
                    options: [ {t: "do", c: false}, {t: "are", c: true}, {t: "is", c: false}, {t: "am", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Preposition: 'The class starts _______ 8 o'clock.'",
                    options: [ {t: "on", c: false}, {t: "in", c: false}, {t: "at", c: true}, {t: "the", c: false} ]
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
                    text: "I am posting a photo.<br><small style='color:#0077b6'>(Eu estou postando uma foto.)</small>", 
                    audio: "TTS: I am posting a photo.", 
                    arrow: "↘" 
                },
                { 
                    text: "Do you use Instagram?<br><small style='color:#0077b6'>(Você usa o Instagram?)</small>", 
                    audio: "TTS: Do you use Instagram?", 
                    arrow: "↗" 
                },
                { 
                    text: "She is online right now.<br><small style='color:#0077b6'>(Ela está online agora mesmo.)</small>", 
                    audio: "TTS: She is online right now.", 
                    arrow: "↘" 
                },
                { 
                    text: "I usually chat at night.<br><small style='color:#0077b6'>(Eu geralmente converso à noite.)</small>", 
                    audio: "TTS: I usually chat at night.", 
                    arrow: "↘" 
                },
                { 
                    text: "He posts on Fridays.<br><small style='color:#0077b6'>(Ele posta às sextas-feiras.)</small>", 
                    audio: "TTS: He posts on Fridays.", 
                    arrow: "↘" 
                },
                { 
                    text: "My birthday is in June.<br><small style='color:#0077b6'>(Meu aniversário é em junho.)</small>", 
                    audio: "TTS: My birthday is in June.", 
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
                    instruction: "Listen to Albert talking about his digital habits. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre seus hábitos digitais. Digite as palavras que faltam.)</small>",
                    audio: "TTS: I use my smartphone every day. I like to chat with friends on WhatsApp. I usually check my feed in the morning.",
                    text: "I use my [smartphone] every day. I like to [chat] with friends on WhatsApp. I usually check my [feed] in the morning."
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation between Celine and her brother. Choose the correct option.<br><small style='color:#0077b6'>(Ouça a conversa entre Celine e seu irmão. Escolha a opção correta.)</small>",
                    audio: "audio/7-1-2/step5_drill2.mp3",
                    questions: [
                        { q: "Brother: Celine, are you [studying | playing]?", a: "studying" },
                        { q: "Celine: No, I am [not | yes]. I am watching a video.", a: "not" },
                        { q: "Brother: Is it [funny | sad]?", a: "funny" },
                        { q: "Celine: Yes, [LOL | BRB]! Look at this cat.", a: "LOL" }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer.<br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta correta.)</small>",
                    audio: "TTS: When does the class start?",
                    options: [
                        { t: "It starts on the table.", c: false },
                        { t: "It starts at 8 o'clock.", c: true },
                        { t: "It starts in the house.", c: false },
                        { t: "It starts with a friend.", c: false }
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
                    title: "Narration: A Digital Day",
                    audio: "TTS: My name is Sarah. I am a digital native. I wake up at 7 AM and check my notifications immediately. I usually have breakfast with my smartphone in my hand. I like to scroll through my feed and like photos. I go to school in the morning, so I am offline then. But in the afternoon, I am always online. I chat with my best friend and we share funny memes. I love technology! || audio/7-1-2/p6_text1.mp3",
                    body: "My name is Sarah. I am a digital native. I wake up at 7 AM and check my notifications immediately. I usually have breakfast with my smartphone in my hand. I like to scroll through my feed and like photos. I go to school in the morning, so I am offline then. But in the afternoon, I am always online. I chat with my best friend and we share funny memes. I love technology!",
                    questions: [
                        { 
                            q: "When does Sarah wake up?", 
                            options: [ 
                                {t: "At 6 AM", c: false}, 
                                {t: "At 7 AM", c: true}, 
                                {t: "In the afternoon", c: false},
                                {t: "At night", c: false}
                            ] 
                        },
                        { 
                            q: "What does she do at breakfast?", 
                            options: [ 
                                {t: "She watches TV.", c: false}, 
                                {t: "She sleeps.", c: false}, 
                                {t: "She checks her smartphone.", c: true},
                                {t: "She studies math.", c: false}
                            ] 
                        },
                        { 
                            q: "What does she share with her friend?", 
                            options: [ 
                                {t: "Homework", c: false}, 
                                {t: "Emails", c: false}, 
                                {t: "Funny memes", c: true},
                                {t: "Food", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: The Viral Video",
                    audio: "audio/7-1-2/p6_text2.mp3",
                    body: "<b>Albert:</b> Hey Celine! Did you see that video of the dancing dog?<br><b>Celine:</b> No, I didn't. Is it on TikTok?<br><b>Albert:</b> Yes! It is going viral right now. Everyone is sharing it.<br><b>Celine:</b> Send me the link, please. I want to watch it.<br><b>Albert:</b> Okay, I am sending it now. OMG, look at the views! One million!<br><b>Celine:</b> Wow! That dog is a famous influencer now.",
                    questions: [
                        { 
                            q: "What is the video about?", 
                            options: [ 
                                {t: "A singing cat", c: false}, 
                                {t: "A dancing dog", c: true}, 
                                {t: "A flying bird", c: false},
                                {t: "A cooking chef", c: false}
                            ] 
                        },
                        { 
                            q: "What is happening to the video?", 
                            options: [ 
                                {t: "It is being deleted.", c: false}, 
                                {t: "It is going viral.", c: true}, 
                                {t: "It is offline.", c: false},
                                {t: "It is boring.", c: false}
                            ] 
                        },
                        { 
                            q: "How many views does it have?", 
                            options: [ 
                                {t: "One hundred", c: false}, 
                                {t: "One thousand", c: false}, 
                                {t: "One million", c: true},
                                {t: "Ten", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: My Favorite App",
                    audio: "TTS: My favorite app is called PhotoShare. It is very popular. I use it to edit my pictures. It has many filters that make the photos look beautiful. I can also tag my friends and add a location. I usually post one photo on Saturdays. My friends comment nice things. It makes me happy. I don't like negative comments, so I block rude people. || audio/7-1-2/p6_text3.mp3",
                    body: "My favorite app is called \"PhotoShare\". It is very popular. I use it to edit my pictures. It has many filters that make the photos look beautiful. I can also tag my friends and add a location. I usually post one photo on Saturdays. My friends comment nice things. It makes me happy. I don't like negative comments, so I block rude people.",
                    questions: [
                        { 
                            q: "What does the app do?", 
                            options: [ 
                                {t: "It plays music.", c: false}, 
                                {t: "It edits pictures.", c: true}, 
                                {t: "It orders food.", c: false},
                                {t: "It helps with math.", c: false}
                            ] 
                        },
                        { 
                            q: "When does the writer usually post?", 
                            options: [ 
                                {t: "On Mondays", c: false}, 
                                {t: "Every day", c: false}, 
                                {t: "On Saturdays", c: true},
                                {t: "In the morning", c: false}
                            ] 
                        },
                        { 
                            q: "What does the writer do with rude people?", 
                            options: [ 
                                {t: "Follows them", c: false}, 
                                {t: "Likes them", c: false}, 
                                {t: "Blocks them", c: true},
                                {t: "Tags them", c: false}
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
                // Drill 1: Matching (Slang -> Definition)
                {
                    type: "matching",
                    instruction: "Match the internet slang with its meaning.<br><small style='color:#0077b6'>(Combine a gíria da internet com seu significado.)</small>",
                    pairs: [
                        { left: "LOL", right: "Laughing Out Loud", val: "1" },
                        { left: "OMG", right: "Oh My God", val: "2" },
                        { left: "IDK", right: "I Don't Know", val: "3" },
                        { left: "BRB", right: "Be Right Back", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Unscramble)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "posting / I / am / photo / a / .",
                    correct: "I am posting a photo ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "usually / She / checks / feed / her / .",
                    correct: "She usually checks her feed ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "you / Are / wifi / using / the / ?",
                    correct: "Are you using the wifi ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "birthday / My / in / is / March / .",
                    correct: "My birthday is in March ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Download", c: false },
                        { t: "Upload", c: false },
                        { t: "Post", c: false },
                        { t: "Banana", c: true } // Food, others are tech verbs
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Smartphone", c: false },
                        { t: "Tablet", c: false },
                        { t: "Laptop", c: false },
                        { t: "Tree", c: true } // Nature, others are devices
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "In", c: false },
                        { t: "On", c: false },
                        { t: "At", c: false },
                        { t: "Like", c: true } // Verb, others are prepositions
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "LOL", c: false },
                        { t: "OMG", c: false },
                        { t: "IDK", c: false },
                        { t: "Bus", c: true } // Transport, others are slang
                    ]
                },
                // Drill 4: Fill in the Blanks (Prepositions)
                {
                    type: "dropdown",
                    instruction: "Select the correct preposition to complete the sentence.<br><small style='color:#0077b6'>(Selecione a preposição correta para completar a frase.)</small>",
                    questions: [
                        { q: "I sleep [at | in | on] night.", a: "at" },
                        { q: "Her party is [on | in | at] Saturday.", a: "on" },
                        { q: "My birthday is [in | on | at] October.", a: "in" },
                        { q: "School starts [at | in | on] 8:00 AM.", a: "at" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn! Describe your digital life.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas: Agora é a sua vez! Descreva sua vida digital.)</span></small>",
            example: "\"I use a smartphone and a laptop. My favorite app is YouTube because I love watching videos. Right now, I am studying English online. I usually go online in the evening at 7 PM.\"<br><br><small><span style='color:#0077b6'>(\"Eu uso um smartphone e um notebook. Meu aplicativo favorito é o YouTube porque eu amo assistir vídeos. Agora, eu estou estudando inglês online. Eu geralmente entro na internet à noite às 19h.\")</span></small>",
            prompts: [
                "What devices do you use? (I use a...) <br><span style='color:#0077b6'>(Quais dispositivos você usa?)</span>",
                "What are your favorite apps? <br><span style='color:#0077b6'>(Quais são seus aplicativos favoritos?)</span>",
                "What are you doing on the internet right now? (I am reading/watching...) <br><span style='color:#0077b6'>(O que você está fazendo na internet agora?)</span>",
                "When do you usually go online? (Use IN, ON, or AT). <br><span style='color:#0077b6'>(Quando você costuma entrar na internet?)</span>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Social Media & Tech)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Social Media Verbs ---
                { 
                    term: "Post", 
                    definition: "To publish a message or image on social media.", 
                    defTrans: "postar / publicar",
                    example: "I post new photos every week.", 
                    audioFront: "TTS: Post",
                    audioBack: "TTS: I post new photos every week." 
                },
                { 
                    term: "Share", 
                    definition: "To repost or send content to others.", 
                    defTrans: "compartilhar",
                    example: "Share this video with friends.", 
                    audioFront: "TTS: Share",
                    audioBack: "TTS: Share this video with friends." 
                },
                { 
                    term: "Like", 
                    definition: "To show approval of content by clicking a button.", 
                    defTrans: "curtir",
                    example: "Did you like my status?", 
                    audioFront: "TTS: Like",
                    audioBack: "TTS: Did you like my status?" 
                },
                { 
                    term: "Comment", 
                    definition: "To write a response or opinion on a post.", 
                    defTrans: "comentar",
                    example: "Leave a nice comment.", 
                    audioFront: "TTS: Comment",
                    audioBack: "TTS: Leave a nice comment." 
                },
                { 
                    term: "Follow", 
                    definition: "To subscribe to someone's updates on social media.", 
                    defTrans: "seguir",
                    example: "I follow many celebrities.", 
                    audioFront: "TTS: Follow",
                    audioBack: "TTS: I follow many celebrities." 
                },
                { 
                    term: "Unfollow", 
                    definition: "To stop subscribing to someone's updates.", 
                    defTrans: "deixar de seguir",
                    example: "I unfollow accounts I don't like.", 
                    audioFront: "TTS: Unfollow",
                    audioBack: "TTS: I unfollow accounts I don't like." 
                },
                { 
                    term: "Tag", 
                    definition: "To link a person's profile to a photo or post.", 
                    defTrans: "marcar (alguém)",
                    example: "Please tag me in the photo.", 
                    audioFront: "TTS: Tag",
                    audioBack: "TTS: Please tag me in the photo." 
                },
                { 
                    term: "Upload", 
                    definition: "To transfer data from your device to the internet.", 
                    defTrans: "carregar / subir (arquivos)",
                    example: "I am uploading a file.", 
                    audioFront: "TTS: Upload",
                    audioBack: "TTS: I am uploading a file." 
                },
                { 
                    term: "Download", 
                    definition: "To transfer data from the internet to your device.", 
                    defTrans: "baixar",
                    example: "You can download the app here.", 
                    audioFront: "TTS: Download",
                    audioBack: "TTS: You can download the app here." 
                },
                { 
                    term: "Send", 
                    definition: "To cause a message or file to go to a destination.", 
                    defTrans: "enviar",
                    example: "Send me a message later.", 
                    audioFront: "TTS: Send",
                    audioBack: "TTS: Send me a message later." 
                },

                // --- Technology & Devices ---
                { 
                    term: "Smartphone", 
                    definition: "A mobile phone that performs many functions of a computer.", 
                    defTrans: "smartphone / celular",
                    example: "My smartphone has a good camera.", 
                    audioFront: "TTS: Smartphone",
                    audioBack: "TTS: My smartphone has a good camera." 
                },
                { 
                    term: "Tablet", 
                    definition: "A portable computer with a touchscreen display.", 
                    defTrans: "tablet",
                    example: "I watch movies on my tablet.", 
                    audioFront: "TTS: Tablet",
                    audioBack: "TTS: I watch movies on my tablet." 
                },
                { 
                    term: "Laptop", 
                    definition: "A computer that is portable and suitable for travel.", 
                    defTrans: "notebook / laptop",
                    example: "I take my laptop to school.", 
                    audioFront: "TTS: Laptop",
                    audioBack: "TTS: I take my laptop to school." 
                },
                { 
                    term: "Wifi", 
                    definition: "A facility allowing devices to connect to the internet wirelessly.", 
                    defTrans: "wi-fi",
                    example: "Is the wifi working?", 
                    audioFront: "TTS: Wifi",
                    audioBack: "TTS: Is the wifi working?" 
                },
                // --- Social Media Vocabulary ---
                { 
                    term: "Profile", 
                    definition: "A user's personal page on social media containing their information.", 
                    defTrans: "perfil",
                    example: "Your profile picture is cool.", 
                    audioFront: "TTS: Profile",
                    audioBack: "TTS: Your profile picture is cool." 
                },
                { 
                    term: "Feed", 
                    definition: "The stream of content you see from accounts you follow.", 
                    defTrans: "feed (linha do tempo)",
                    example: "Refresh your feed to see updates.", 
                    audioFront: "TTS: Feed",
                    audioBack: "TTS: Refresh your feed to see updates." 
                },
                { 
                    term: "Story", 
                    definition: "A photo or video that is visible for only 24 hours.", 
                    defTrans: "história (story)",
                    example: "This story disappears in 24 hours.", 
                    audioFront: "TTS: Story",
                    audioBack: "TTS: This story disappears in 24 hours." 
                },
                { 
                    term: "Message", 
                    definition: "A private communication sent between users.", 
                    defTrans: "mensagem",
                    example: "I sent you a direct message.", 
                    audioFront: "TTS: Message",
                    audioBack: "TTS: I sent you a direct message." 
                },
                { 
                    term: "Hashtag", 
                    definition: "A word preceded by a hash sign (#) used to identify messages on a specific topic.", 
                    defTrans: "hashtag (#)",
                    example: "Use the hashtag #summer.", 
                    audioFront: "TTS: Hashtag",
                    audioBack: "TTS: Use the hashtag summer." 
                },
                { 
                    term: "Notification", 
                    definition: "An alert informing you about activity on your account.", 
                    defTrans: "notificação",
                    example: "You have a new notification.", 
                    audioFront: "TTS: Notification",
                    audioBack: "TTS: You have a new notification." 
                },
                { 
                    term: "Account", 
                    definition: "A user's registration and presence on a social media platform.", 
                    defTrans: "conta",
                    example: "Create a new account to log in.", 
                    audioFront: "TTS: Account",
                    audioBack: "TTS: Create a new account to log in." 
                },
                { 
                    term: "Follower", 
                    definition: "Someone who subscribes to your account.", 
                    defTrans: "seguidor",
                    example: "She has 1000 followers.", 
                    audioFront: "TTS: Follower",
                    audioBack: "TTS: She has one thousand followers." 
                },
                { 
                    term: "Influencer", 
                    definition: "A person with a large following who can influence others.", 
                    defTrans: "influenciador(a)",
                    example: "He wants to be a digital influencer.", 
                    audioFront: "TTS: Influencer",
                    audioBack: "TTS: He wants to be a digital influencer." 
                },
                { 
                    term: "Meme", 
                    definition: "An image or text, typically humorous, that is spread rapidly by users.", 
                    defTrans: "meme",
                    example: "This cat meme is hilarious.", 
                    audioFront: "TTS: Meme",
                    audioBack: "TTS: This cat meme is hilarious." 
                },

                // --- Remaining Technology & Devices ---
                { 
                    term: "Computer", 
                    definition: "An electronic device for storing and processing data.", 
                    defTrans: "computador",
                    example: "The computer is on the desk.", 
                    audioFront: "TTS: Computer",
                    audioBack: "TTS: The computer is on the desk." 
                },
                { 
                    term: "Headphones", 
                    definition: "A pair of listening devices worn on the head over the ears.", 
                    defTrans: "fones de ouvido",
                    example: "Put on your headphones.", 
                    audioFront: "TTS: Headphones",
                    audioBack: "TTS: Put on your headphones." 
                },
                { 
                    term: "App", 
                    definition: "An application, especially as downloaded to a mobile device.", 
                    defTrans: "aplicativo",
                    example: "What is your favorite app?", 
                    audioFront: "TTS: App",
                    audioBack: "TTS: What is your favorite app?" 
                },
                { 
                    term: "Online", 
                    definition: "Connected to the internet.", 
                    defTrans: "online / conectado",
                    example: "She is online now.", 
                    audioFront: "TTS: Online",
                    audioBack: "TTS: She is online now." 
                },
                { 
                    term: "Offline", 
                    definition: "Not connected to the internet.", 
                    defTrans: "offline / desconectado",
                    example: "I am offline on weekends.", 
                    audioFront: "TTS: Offline",
                    audioBack: "TTS: I am offline on weekends." 
                },
                // --- Internet Slang ---
                { 
                    term: "LOL", 
                    definition: "Laughing Out Loud; used to indicate something is funny.", 
                    defTrans: "Rindo muito",
                    example: "That joke was funny, LOL!", 
                    audioFront: "TTS: LOL",
                    audioBack: "TTS: That joke was funny, L O L!" 
                },
                { 
                    term: "OMG", 
                    definition: "Oh My God; used to express surprise or excitement.", 
                    defTrans: "Oh meu Deus",
                    example: "OMG! Look at this!", 
                    audioFront: "TTS: OMG",
                    audioBack: "TTS: O M G! Look at this!" 
                },
                { 
                    term: "IDK", 
                    definition: "I Don't Know.", 
                    defTrans: "Eu não sei",
                    example: "IDK the answer.", 
                    audioFront: "TTS: IDK",
                    audioBack: "TTS: I D K the answer." 
                },
                { 
                    term: "BRB", 
                    definition: "Be Right Back; used when leaving for a short time.", 
                    defTrans: "Volto logo",
                    example: "Wait here, BRB.", 
                    audioFront: "TTS: BRB",
                    audioBack: "TTS: Wait here, B R B." 
                },
                { 
                    term: "TBT", 
                    definition: "Throwback Thursday; used when posting old photos.", 
                    defTrans: "Quinta-feira do retorno",
                    example: "Posting a baby photo for TBT.", 
                    audioFront: "TTS: TBT",
                    audioBack: "TTS: Posting a baby photo for T B T." 
                },

                // --- Habit Verbs ---
                { 
                    term: "Wake up", 
                    definition: "To stop sleeping.", 
                    defTrans: "acordar",
                    example: "I wake up at 6 AM.", 
                    audioFront: "TTS: Wake up",
                    audioBack: "TTS: I wake up at 6 AM." 
                },
                { 
                    term: "Get up", 
                    definition: "To rise from bed.", 
                    defTrans: "levantar-se",
                    example: "I get up immediately.", 
                    audioFront: "TTS: Get up",
                    audioBack: "TTS: I get up immediately." 
                },
                { 
                    term: "Study", 
                    definition: "To devote time and attention to acquiring knowledge.", 
                    defTrans: "estudar",
                    example: "I study English every day.", 
                    audioFront: "TTS: Study",
                    audioBack: "TTS: I study English every day." 
                },
                { 
                    term: "Work", 
                    definition: "To engage in physical or mental activity to achieve a result.", 
                    defTrans: "trabalhar",
                    example: "They work in an office.", 
                    audioFront: "TTS: Work",
                    audioBack: "TTS: They work in an office." 
                },
                { 
                    term: "Watch", 
                    definition: "To look at or observe attentively.", 
                    defTrans: "assistir",
                    example: "We watch series on the tablet.", 
                    audioFront: "TTS: Watch",
                    audioBack: "TTS: We watch series on the tablet." 
                },
                { 
                    term: "Sleep", 
                    definition: "To rest by closing eyes and becoming unconscious.", 
                    defTrans: "dormir",
                    example: "I sleep eight hours.", 
                    audioFront: "TTS: Sleep",
                    audioBack: "TTS: I sleep eight hours." 
                },
                // --- Polysemy (Double Meanings) ---
                { 
                    term: "Post (Word)", 
                    definition: "The official mail system OR a digital publication.", 
                    defTrans: "Correio ou Publicação",
                    example: "I sent a letter by post. / Look at my new post.", 
                    audioFront: "TTS: Post",
                    audioBack: "TTS: I sent a letter by post. Look at my new post." 
                },
                { 
                    term: "Like (Word)", 
                    definition: "To enjoy something OR a digital indicator of approval.", 
                    defTrans: "Gostar ou Curtida",
                    example: "I like you. / Leave a like on the video.", 
                    audioFront: "TTS: Like",
                    audioBack: "TTS: I like you. Leave a like on the video." 
                },
                { 
                    term: "Feed (Word)", 
                    definition: "To give food to someone/animal OR a digital stream of content.", 
                    defTrans: "Alimentar ou Feed de notícias",
                    example: "Feed the dog. / Scroll the feed.", 
                    audioFront: "TTS: Feed",
                    audioBack: "TTS: Feed the dog. Scroll the feed." 
                },

                // --- Grammar Points ---
                { 
                    term: "Simple Present", 
                    definition: "Verb tense used for habits, routines, and general truths.", 
                    defTrans: "Rotinas / Hábitos",
                    example: "I use Instagram every day.", 
                    audioFront: "TTS: Simple Present",
                    audioBack: "TTS: I use Instagram every day." 
                },
                { 
                    term: "Present Continuous", 
                    definition: "Verb tense used for actions happening exactly right now.", 
                    defTrans: "Ações agora (to be + ing)",
                    example: "I am posting a photo now.", 
                    audioFront: "TTS: Present Continuous",
                    audioBack: "TTS: I am posting a photo now." 
                },
                { 
                    term: "IN (Time)", 
                    definition: "Preposition used for months, years, and long periods.", 
                    defTrans: "Em (Meses, Anos, Períodos)",
                    example: "My birthday is in May.", 
                    audioFront: "TTS: Preposition IN",
                    audioBack: "TTS: My birthday is in May." 
                },
                { 
                    term: "ON (Time)", 
                    definition: "Preposition used for specific days and dates.", 
                    defTrans: "Em / No / Na (Dias, Datas)",
                    example: "See you on Monday.", 
                    audioFront: "TTS: Preposition ON",
                    audioBack: "TTS: See you on Monday." 
                },
                { 
                    term: "AT (Time)", 
                    definition: "Preposition used for specific clock times and specific moments.", 
                    defTrans: "Às (Horas, Momentos)",
                    example: "I sleep at 10 PM.", 
                    audioFront: "TTS: Preposition AT",
                    audioBack: "TTS: I sleep at 10 PM." 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Part 13: Context & Social Media)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Dialogue Tooltips) ---
        { 
            topic: "Context", 
            term: "doing", 
            definition: "The act of performing a task or activity at the moment.", 
            translation: "Fazendo" 
        },
        { 
            topic: "Context", 
            term: "busy", 
            definition: "Having a lot of things to do; occupied.", 
            translation: "Ocupado(a)" 
        },
        { 
            topic: "Context", 
            term: "post", 
            definition: "To publish a message, image, or video on a social media platform.", 
            translation: "Postar / Publicar" 
        },
        { 
            topic: "Context", 
            term: "tag", 
            definition: "To link a person's profile to a specific photo or post.", 
            translation: "Marcar (alguém)" 
        },
        { 
            topic: "Context", 
            term: "usually", 
            definition: "Under normal conditions; most of the time.", 
            translation: "Geralmente" 
        },
        { 
            topic: "Context", 
            term: "check", 
            definition: "To examine or look at something to get information.", 
            translation: "Checar / Verificar" 
        },
        { 
            topic: "Context", 
            term: "feed", 
            definition: "The updated stream of content you see on social media.", 
            translation: "Feed / Linha do tempo" 
        },
        { 
            topic: "Context", 
            term: "often", 
            definition: "Many times; frequently.", 
            translation: "Frequentemente" 
        },
        { 
            topic: "Context", 
            term: "share", 
            definition: "To repost or send digital content to other people.", 
            translation: "Compartilhar" 
        },
        { 
            topic: "Context", 
            term: "story", 
            definition: "A photo or video update that is visible for only 24 hours.", 
            translation: "História / Story" 
        },
        { 
            topic: "Context", 
            term: "meme", 
            definition: "A funny image or piece of text spread rapidly by internet users.", 
            translation: "Meme" 
        },
        { 
            topic: "Context", 
            term: "lol", 
            definition: "Abbreviation for 'Laughing Out Loud'; used when something is funny.", 
            translation: "Rindo muito" 
        },
        { 
            topic: "Context", 
            term: "wifi", 
            definition: "A facility allowing devices to connect to the internet wirelessly.", 
            translation: "Wi-fi" 
        },
        { 
            topic: "Context", 
            term: "upload", 
            definition: "To transfer data or files from your device to the internet.", 
            translation: "Carregar / Subir" 
        },
        { 
            topic: "Context", 
            term: "homework", 
            definition: "Schoolwork that a student is given to do at home.", 
            translation: "Lição de casa" 
        },
        { 
            topic: "Context", 
            term: "use", 
            definition: "To operate or employ something for a specific purpose.", 
            translation: "Usar" 
        },
        { 
            topic: "Context", 
            term: "laptop", 
            definition: "A portable computer suitable for use while traveling.", 
            translation: "Notebook / Laptop" 
        },
        { 
            topic: "Context", 
            term: "smartphone", 
            definition: "A mobile phone that performs many functions of a computer.", 
            translation: "Smartphone / Celular" 
        },
        { 
            topic: "Context", 
            term: "send", 
            definition: "To cause a message or file to go to a destination digitally.", 
            translation: "Enviar" 
        },
        { 
            topic: "Context", 
            term: "now", 
            definition: "At the present time or moment.", 
            translation: "Agora" 
        },

        // --- TOPIC 2: SOCIAL MEDIA ---
        { 
            topic: "Social Media", 
            term: "profile", 
            definition: "A page providing information about a specific user.", 
            translation: "Perfil" 
        },
        { 
            topic: "Social Media", 
            term: "comment", 
            definition: "A written response or opinion left on a post.", 
            translation: "Comentar" 
        },
        { 
            topic: "Social Media", 
            term: "follow", 
            definition: "To subscribe to see updates from a specific account.", 
            translation: "Seguir" 
        },
        { 
            topic: "Social Media", 
            term: "unfollow", 
            definition: "To stop subscribing to an account's updates.", 
            translation: "Deixar de seguir" 
        },
        { 
            topic: "Social Media", 
            term: "download", 
            definition: "To transfer data from the internet to your own device.", 
            translation: "Baixar" 
        },
        { 
            topic: "Social Media", 
            term: "chat", 
            definition: "To talk to other people in real-time over the internet.", 
            translation: "Conversar / Bater papo" 
        },
        { 
            topic: "Social Media", 
            term: "block", 
            definition: "To prevent a specific user from contacting you or seeing your content.", 
            translation: "Bloquear" 
        },
        { 
            topic: "Social Media", 
            term: "notification", 
            definition: "An automated message informing you of new activity.", 
            translation: "Notificação" 
        },
        { 
            topic: "Social Media", 
            term: "account", 
            definition: "A user's registered identity on a platform.", 
            translation: "Conta" 
        },
        { 
            topic: "Social Media", 
            term: "follower", 
            definition: "A person who subscribes to your social media updates.", 
            translation: "Seguidor(a)" 
        },
        { 
            topic: "Social Media", 
            term: "influencer", 
            definition: "A person with the ability to influence potential buyers or public opinion.", 
            translation: "Influenciador(a)" 
        },
        // --- TOPIC 3: TECHNOLOGY & DEVICES ---
        { 
            topic: "Tech & Devices", 
            term: "tablet", 
            definition: "A portable computer with a touchscreen display.", 
            translation: "Tablet" 
        },
        { 
            topic: "Tech & Devices", 
            term: "computer", 
            definition: "An electronic device for storing and processing data.", 
            translation: "Computador" 
        },
        { 
            topic: "Tech & Devices", 
            term: "headphones", 
            definition: "A pair of listening devices worn over the ears.", 
            translation: "Fones de ouvido" 
        },
        { 
            topic: "Tech & Devices", 
            term: "app", 
            definition: "Short for application; a program downloaded to a device.", 
            translation: "Aplicativo / App" 
        },
        { 
            topic: "Tech & Devices", 
            term: "online", 
            definition: "Connected to the internet.", 
            translation: "Online / Conectado" 
        },
        { 
            topic: "Tech & Devices", 
            term: "offline", 
            definition: "Not connected to the internet.", 
            translation: "Offline / Desconectado" 
        },

        // --- TOPIC 4: SLANG & DOUBLE MEANINGS ---
        { 
            topic: "Slang & Polysemy", 
            term: "omg", 
            definition: "Abbreviation for 'Oh My God'; used to express surprise.", 
            translation: "Oh meu Deus" 
        },
        { 
            topic: "Slang & Polysemy", 
            term: "idk", 
            definition: "Abbreviation for 'I Don't Know'.", 
            translation: "Eu não sei" 
        },
        { 
            topic: "Slang & Polysemy", 
            term: "brb", 
            definition: "Abbreviation for 'Be Right Back'; used when leaving for a moment.", 
            translation: "Volto já" 
        },
        { 
            topic: "Slang & Polysemy", 
            term: "tbt", 
            definition: "Throwback Thursday; used when sharing old memories.", 
            translation: "Quinta-feira do retorno" 
        },
        { 
            topic: "Slang & Polysemy", 
            term: "post-meaning", 
            definition: "Can mean the physical mail system or a digital publication.", 
            translation: "Correio vs. Publicação" 
        },
        { 
            topic: "Slang & Polysemy", 
            term: "like-meaning", 
            definition: "Can mean to enjoy something or a digital button of approval.", 
            translation: "Gostar vs. Curtida" 
        },
        { 
            topic: "Slang & Polysemy", 
            term: "feed-meaning", 
            definition: "Can mean to give food to an animal or a stream of content.", 
            translation: "Alimentar vs. Feed" 
        },

        // --- TOPIC 5: HABIT VERBS & EXPRESSIONS ---
        { 
            topic: "Habits & Expressions", 
            term: "wake-up", 
            definition: "To stop sleeping and become conscious.", 
            translation: "Acordar" 
        },
        { 
            topic: "Habits & Expressions", 
            term: "get-up", 
            definition: "To physically rise from bed.", 
            translation: "Levantar-se" 
        },
        { 
            topic: "Habits & Expressions", 
            term: "study", 
            definition: "To devote time to acquiring knowledge.", 
            translation: "Estudar" 
        },
        { 
            topic: "Habits & Expressions", 
            term: "work", 
            definition: "To engage in physical or mental activity to achieve a result.", 
            translation: "Trabalhar" 
        },
        { 
            topic: "Habits & Expressions", 
            term: "watch", 
            definition: "To look at or observe something attentively for a period of time.", 
            translation: "Assistir" 
        },
        { 
            topic: "Habits & Expressions", 
            term: "sleep", 
            definition: "A natural state of rest for the body and mind.", 
            translation: "Dormir" 
        },
        { 
            topic: "Habits & Expressions", 
            term: "how-often", 
            definition: "A question used to ask about the frequency of an action.", 
            translation: "Com que frequência" 
        },
        { 
            topic: "Habits & Expressions", 
            term: "do-you-like", 
            definition: "A question used to ask about someone's preferences.", 
            translation: "Você gosta de" 
        },
        // --- TOPIC 6: DIGITAL LIFE (Step 6 Phrases) ---
        { 
            topic: "Digital Life", 
            term: "digital-native", 
            definition: "A person born or brought up during the age of digital technology.", 
            translation: "Nativo digital" 
        },
        { 
            topic: "Digital Life", 
            term: "scroll-through", 
            definition: "To move through text or images on a screen to view different parts.", 
            translation: "Rolar / Percorrer" 
        },
        { 
            topic: "Digital Life", 
            term: "immediately", 
            definition: "At once; instantly; without any delay.", 
            translation: "Imediatamente" 
        },
        { 
            topic: "Digital Life", 
            term: "viral", 
            definition: "An image, video, or piece of information that is circulated rapidly on the internet.", 
            translation: "Viral" 
        },
        { 
            topic: "Digital Life", 
            term: "views", 
            definition: "The number of times a digital post or video has been watched.", 
            translation: "Visualizações" 
        },
        { 
            topic: "Digital Life", 
            term: "filters", 
            definition: "Software effects used to change the appearance of a photo.", 
            translation: "Filtros" 
        },
        { 
            topic: "Digital Life", 
            term: "location", 
            definition: "A particular place or position.", 
            translation: "Localização" 
        },
        { 
            topic: "Digital Life", 
            term: "negative-comments", 
            definition: "Unkind or critical remarks left on a digital post.", 
            translation: "Comentários negativos" 
        },
        { 
            topic: "Digital Life", 
            term: "rude-people", 
            definition: "Individuals who are impolite or offensive in their behavior.", 
            translation: "Pessoas rudes" 
        },

        // --- TOPIC 7: GRAMMAR POINTS ---
        { 
            topic: "Grammar Summary", 
            term: "simple-present", 
            definition: "Verb tense used for habits, routines, and general truths.", 
            translation: "Presente Simples" 
        },
        { 
            topic: "Grammar Summary", 
            term: "present-continuous", 
            definition: "Verb tense used for actions happening right now (to be + verb-ing).", 
            translation: "Presente Contínuo" 
        },
        { 
            topic: "Grammar Summary", 
            term: "prepositions-of-time", 
            definition: "Words like IN, ON, and AT used to indicate when an action happens.", 
            translation: "Preposições de Tempo" 
        }
    ] // Closes glossary array
}); // Closes initLesson object