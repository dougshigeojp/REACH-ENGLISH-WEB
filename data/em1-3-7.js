/**
 * REACH English - LESSON DATA em1-3-7
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em1-3-7", 
    grade: "High School 1st Grade",       
    bimester: "3",   
    chapter: "7",    
    chapterTitle: "#FollowMe: Understanding the Social Media Era", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss the [pros and cons](tooltip:pros-and-cons) of the social media era.<br>• Use [prepositions of place and time](tooltip:prepositions-of-place-and-time) (IN, ON, AT) accurately.<br>• Master [countable nouns](tooltip:countable-nouns) and [uncountable nouns](tooltip:uncountable-nouns) and their [quantifiers](tooltip:quantifiers).<br>• Correctly apply [irregular plural](tooltip:irregular-plural) rules.<br>• Use [indefinite pronouns](tooltip:indefinite-pronouns) like [somebody](tooltip:somebody), [anything](tooltip:anything), and [everyone](tooltip:everyone).<br>• Use [phrasal verbs](tooltip:phrasal-verbs) with GET in everyday contexts.",
            welcome: "Hello, digital natives! I'm Mr. D!<br>Welcome to the [#HashtagEra!](tooltip:hashtag-era) Today, we’re diving deep into the world that lives right in your pocket. Social media connects [millions](tooltip:millions) of people every second, but how do we talk about it effectively in English? We are going to explore everything from [going viral](tooltip:go-viral) to the importance of [privacy](tooltip:privacy). You’ll learn how to count your [followers](tooltip:follower), share your [content](tooltip:content), and navigate the [internet](tooltip:internet) like a pro. Are you ready to level up your digital presence? Let's get scrolling!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss the pros and cons of the social media era. Use prepositions of place and time IN, ON, and AT accurately. Master countable and uncountable nouns and their quantifiers. Correctly apply irregular plural rules. Use indefinite pronouns like somebody, anything, and everyone. Use phrasal verbs with GET in everyday contexts.",
                welcome: "TTS: Hello, digital natives! I'm Mr. D! Welcome to the Hashtag Era! Today, we’re diving deep into the world that lives right in your pocket. Social media connects millions of people every second, but how do we talk about it effectively in English? We are going to explore everything from going viral to the importance of privacy. You’ll learn how to count your followers, share your content, and navigate the internet like a pro. Are you ready to level up your digital presence? Let's get scrolling!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "(Albert and Celine are sitting in the school cafeteria during lunch. Celine is busy taking a photo of her healthy meal, while Albert is looking at a tech magazine.)", 
            contextAudio: "audio/em1-3-7/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Albert, wait! Don’t eat yet. I need to [post](tooltip:post) a [story](tooltip:story) on my [profile](tooltip:profile). I want to share some [content](tooltip:content) about healthy habits [at](tooltip:at-place) school." 
                },
                { 
                    speaker: "Albert", 
                    text: "You're always [scrolling through](tooltip:scroll-through) your [feed](tooltip:feed), Celine. I think social media [addiction](tooltip:addiction) is a real problem in our [community](tooltip:community)." 
                },
                { 
                    speaker: "Celine", 
                    text: "I know, but I [get along with](tooltip:get-along-with) so many [people](tooltip:people) online! Look, [somebody](tooltip:somebody) just [commented](tooltip:comment) on my latest [photo](tooltip:photo). They say this [video](tooltip:video) might [go viral](tooltip:go-viral)!" 
                },
                { 
                    speaker: "Albert", 
                    text: "That's cool, but did you check if the [information](tooltip:information) is real? There is much [fake news](tooltip:fake-news) on the [internet](tooltip:internet) these days." 
                },
                { 
                    speaker: "Celine", 
                    text: "Good point. I try to be careful. I [upload](tooltip:upload) my [photos](tooltip:photo) but I always check my [privacy](tooltip:privacy) settings. Oh, look! [Everyone](tooltip:everyone) is talking about the new [app](tooltip:app) at the moment." 
                },
                { 
                    speaker: "Albert", 
                    text: "I [downloaded](tooltip:download) it [on](tooltip:on-time) Monday. It has [a few](tooltip:a-few) interesting [features](tooltip:feature), but I have [little](tooltip:little) time to use it. I prefer to [get together](tooltip:get-together) with [friends](tooltip:friend) in the real world." 
                },
                { 
                    speaker: "Celine", 
                    text: "I agree. Let's finish lunch and [get away](tooltip:get-away) from the screens for a while. We can go to the [park](tooltip:park). There isn't [any](tooltip:any-compound) [traffic](tooltip:traffic) there!" 
                },
                { 
                    speaker: "Albert", 
                    text: "Great idea. I need to [get up](tooltip:get-up) and walk anyway. My [feet](tooltip:feet) are tired from sitting all morning!" 
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
                    audio: "TTS: Post. Share. Like. Comment. Follow. Unfollow. Go viral. Connect. Interact. Scroll through. Upload. Download.",
                    items: [
                        { term: "Post", trans: "postar" },
                        { term: "Share", trans: "compartilhar" },
                        { term: "Like", trans: "curtir" },
                        { term: "Comment", trans: "comentar" },
                        { term: "Follow / Unfollow", trans: "seguir / deixar de seguir" },
                        { term: "Go viral", trans: "viralizar" },
                        { term: "Connect", trans: "conectar" },
                        { term: "Interact", trans: "interagir" },
                        { term: "Scroll through", trans: "rolar (a tela)" },
                        { term: "Upload / Download", trans: "carregar / baixar" }
                    ]
                },
                {
                    title: "Social Media Vocabulary",
                    audio: "TTS: Social Media. Platform. Account. Profile. Feed. Influencer. Hashtag. Content. Meme. Notification. Privacy. Fake news. Cyberbullying. Addiction.",
                    items: [
                        { term: "Social Media", trans: "mídia social" },
                        { term: "Platform", trans: "plataforma" },
                        { term: "Account", trans: "conta" },
                        { term: "Profile", trans: "perfil" },
                        { term: "Feed", trans: "feed / linha do tempo" },
                        { term: "Influencer", trans: "influenciador(a)" },
                        { term: "Hashtag (#)", trans: "hashtag" },
                        { term: "Content", trans: "conteúdo" },
                        { term: "Meme", trans: "meme" },
                        { term: "Notification", trans: "notificação" },
                        { term: "Privacy", trans: "privacidade" },
                        { term: "Fake news", trans: "notícias falsas" },
                        { term: "Cyberbullying", trans: "cyberbullying" },
                        { term: "Addiction", trans: "vício" }
                    ]
                },
                {
                    title: "Irregular Plurals",
                    audio: "TTS: Children. Men. Women. People. Feet. Teeth. Mice. Geese. Oxen. Leaves.",
                    items: [
                        { term: "Children (Child)", trans: "crianças" },
                        { term: "Men (Man)", trans: "homens" },
                        { term: "Women (Woman)", trans: "mulheres" },
                        { term: "People (Person)", trans: "pessoas" },
                        { term: "Feet (Foot)", trans: "pés" },
                        { term: "Teeth (Tooth)", trans: "dentes" },
                        { term: "Mice (Mouse)", trans: "ratos" },
                        { term: "Geese (Goose)", trans: "gansos" },
                        { term: "Oxen (Ox)", trans: "bois" },
                        { term: "Leaves (Leaf)", trans: "folhas" }
                    ]
                },
                {
                    title: "Phrasal Verbs with GET",
                    audio: "TTS: Get up. Get along. Get over. Get through. Get away. Get back. Get together.",
                    items: [
                        { term: "Get up", trans: "levantar-se" },
                        { term: "Get along (with)", trans: "dar-se bem (com)" },
                        { term: "Get over", trans: "superar" },
                        { term: "Get through", trans: "passar por / concluir" },
                        { term: "Get away (with)", trans: "sair impune / tirar férias" },
                        { term: "Get back", trans: "voltar" },
                        { term: "Get together", trans: "reunir-se" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Let me check my feed. Did you see my latest post? This video might go viral! How many followers does she have? How much time do you spend online? I spend a lot of time on Instagram. There is not much interesting content today. There are a few comments on the photo. I have little information about that influencer. Do you have any advice for me? Somebody tagged me in a photo at the party. I did not see anything interesting on TV. Everyone uses social media at school. He works at Google in California. She is working on a new project at the moment.",
                    items: [
                        { term: "Let me check my feed", trans: "Deixa eu checar meu feed" },
                        { term: "Did you see my latest post?", trans: "Você viu minha última postagem?" },
                        { term: "This video might go viral!", trans: "Este vídeo pode viralizar!" },
                        { term: "How many followers does she have?", trans: "Quantos seguidores ela tem?" },
                        { term: "How much time do you spend online?", trans: "Quanto tempo você passa online?" },
                        { term: "I spend a lot of time on Instagram", trans: "Eu passo muito tempo no Instagram" },
                        { term: "There isn't much interesting content today", trans: "Não há muito conteúdo interessante hoje" },
                        { term: "There are a few comments on the photo", trans: "Há alguns comentários na foto" },
                        { term: "I have little information about that influencer", trans: "Tenho pouca informação sobre aquele influencer" },
                        { term: "Do you have any advice for me?", trans: "Você tem algum conselho para mim?" },
                        { term: "Somebody tagged me in a photo at the party", trans: "Alguém me marcou em uma foto na festa" },
                        { term: "I didn't see anything interesting on TV", trans: "Não vi nada interessante na TV" },
                        { term: "Everyone uses social media at school", trans: "Todo mundo usa mídia social na escola" },
                        { term: "He works at Google in California", trans: "Ele trabalha no Google na Califórnia" },
                        { term: "She is working on a new project at the moment", trans: "Ela está trabalhando em um novo projeto no momento" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Verbs & Actions",
                    audio: "TTS: I always post photos of my travel. Please share this important news. Don't forget to like the video! You can comment your opinion below. I follow my favorite artists. Funny memes usually go viral quickly. Social media helps us connect with family. It's important to interact with your followers. I scroll through the news every morning. It takes a long time to upload large videos. I downloaded a new app on Monday.",
                    items: [
                        { term: "Post", sent: "I always post photos of my travel.", trans: "<span style='color:#0077b6'>Eu sempre posto fotos da minha viagem.</span>" },
                        { term: "Share", sent: "Please share this important news.", trans: "<span style='color:#0077b6'>Por favor, compartilhe esta notícia importante.</span>" },
                        { term: "Like", sent: "Don't forget to like the video!", trans: "<span style='color:#0077b6'>Não esqueça de curtir o vídeo!</span>" },
                        { term: "Comment", sent: "You can comment your opinion below.", trans: "<span style='color:#0077b6'>Você pode comentar sua opinião abaixo.</span>" },
                        { term: "Follow", sent: "I follow my favorite artists.", trans: "<span style='color:#0077b6'>Eu sigo meus artistas favoritos.</span>" },
                        { term: "Go viral", sent: "Funny memes usually go viral quickly.", trans: "<span style='color:#0077b6'>Memes engraçados costumam viralizar rápido.</span>" },
                        { term: "Connect", sent: "Social media helps us connect with family.", trans: "<span style='color:#0077b6'>A mídia social nos ajuda a conectar com a família.</span>" },
                        { term: "Interact", sent: "It's important to interact with your followers.", trans: "<span style='color:#0077b6'>É importante interagir com seus seguidores.</span>" },
                        { term: "Scroll", sent: "I scroll through the news every morning.", trans: "<span style='color:#0077b6'>Eu rolo as notícias toda manhã.</span>" },
                        { term: "Upload", sent: "It takes a long time to upload large videos.", trans: "<span style='color:#0077b6'>Leva muito tempo para carregar vídeos grandes.</span>" },
                        { term: "Download", sent: "I downloaded a new app on Monday.", trans: "<span style='color:#0077b6'>Eu baixei um novo aplicativo na segunda-feira.</span>" }
                    ]
                },
                 {
                    title: "Digital Vocabulary",
                    audio: "TTS: Instagram is a popular social media. TikTok is a video-sharing platform. I have a private account. Your profile picture looks great! My feed is full of cat memes. That influencer has millions of fans. Use a hashtag to find topics. This website has useful content. I sent a funny meme to my friend. I received a notification on my phone. We must respect people's privacy. Be careful with fake news on the internet. Schools must fight cyberbullying. Screen time addiction is dangerous.",
                    items: [
                        { term: "Social Media", sent: "Instagram is a popular social media.", trans: "<span style='color:#0077b6'>Instagram é uma mídia social popular.</span>" },
                        { term: "Platform", sent: "TikTok is a video-sharing platform.", trans: "<span style='color:#0077b6'>TikTok é uma plataforma de compartilhamento de vídeos.</span>" },
                        { term: "Account", sent: "I have a private account.", trans: "<span style='color:#0077b6'>Eu tenho uma conta privada.</span>" },
                        { term: "Profile", sent: "Your profile picture looks great!", trans: "<span style='color:#0077b6'>Sua foto de perfil está ótima!</span>" },
                        { term: "Feed", sent: "My feed is full of cat memes.", trans: "<span style='color:#0077b6'>Meu feed está cheio de memes de gatos.</span>" },
                        { term: "Influencer", sent: "That influencer has millions of fans.", trans: "<span style='color:#0077b6'>Aquele influenciador tem milhões de fãs.</span>" },
                        { term: "Hashtag", sent: "Use a hashtag to find topics.", trans: "<span style='color:#0077b6'>Use uma hashtag para encontrar tópicos.</span>" },
                        { term: "Content", sent: "This website has useful content.", trans: "<span style='color:#0077b6'>Este site tem conteúdo útil.</span>" },
                        { term: "Meme", sent: "I sent a funny meme to my friend.", trans: "<span style='color:#0077b6'>Eu enviei um meme engraçado para meu amigo.</span>" },
                        { term: "Notification", sent: "I received a notification on my phone.", trans: "<span style='color:#0077b6'>Recebi uma notificação no meu celular.</span>" },
                        { term: "Privacy", sent: "We must respect people's privacy.", trans: "<span style='color:#0077b6'>Devemos respeitar a privacidade das pessoas.</span>" },
                        { term: "Fake news", sent: "Be careful with fake news on the internet.", trans: "<span style='color:#0077b6'>Cuidado com notícias falsas na internet.</span>" },
                        { term: "Cyberbullying", sent: "Schools must fight cyberbullying.", trans: "<span style='color:#0077b6'>As escolas devem combater o cyberbullying.</span>" },
                        { term: "Addiction", sent: "Screen time addiction is dangerous.", trans: "<span style='color:#0077b6'>O vício em tempo de tela é perigoso.</span>" }
                    ]
                },
                {
                    title: "Plurals in Context",
                    audio: "TTS: The children are playing online games. Those men work at the tech company. Many women are leaders in marketing. People spend a lot of time on their phones. My feet are cold. Brush your teeth after eating. The computer mice are broken. The leaves are falling from the trees.",
                    items: [
                        { term: "Children", sent: "The children are playing online games.", trans: "<span style='color:#0077b6'>As crianças estão jogando jogos online.</span>" },
                        { term: "Men", sent: "Those men work at the tech company.", trans: "<span style='color:#0077b6'>Aqueles homens trabalham na empresa de tecnologia.</span>" },
                        { term: "Women", sent: "Many women are leaders in digital marketing.", trans: "<span style='color:#0077b6'>Muitas mulheres são líderes no marketing digital.</span>" },
                        { term: "People", sent: "People spend a lot of time on their phones.", trans: "<span style='color:#0077b6'>As pessoas passam muito tempo em seus telefones.</span>" },
                        { term: "Feet", sent: "My feet are cold.", trans: "<span style='color:#0077b6'>Meus pés estão gelados.</span>" },
                        { term: "Teeth", sent: "Brush your teeth after eating.", trans: "<span style='color:#0077b6'>Escove seus dentes após comer.</span>" },
                        { term: "Mice", sent: "The computer mice are broken.", trans: "<span style='color:#0077b6'>Os mouses do computador estão quebrados.</span>" },
                        { term: "Leaves", sent: "The leaves are falling from the trees.", trans: "<span style='color:#0077b6'>As folhas estão caindo das árvores.</span>" }
                    ]
                },
                {
                    title: "GET Examples",
                    audio: "TTS: I get up early to check my messages. I get along well with my classmates. It's hard to get over a breakup. We will get through this difficult exam. They want to get away for the holidays. When will you get back from London? Let's get together this weekend!",
                    items: [
                        { term: "Get up", sent: "I get up early to check my messages.", trans: "<span style='color:#0077b6'>Eu me levanto cedo para checar minhas mensagens.</span>" },
                        { term: "Get along", sent: "I get along well with my classmates.", trans: "<span style='color:#0077b6'>Eu me dou bem com meus colegas de classe.</span>" },
                        { term: "Get over", sent: "It's hard to get over a breakup.", trans: "<span style='color:#0077b6'>É difícil superar um término.</span>" },
                        { term: "Get through", sent: "We will get through this difficult exam.", trans: "<span style='color:#0077b6'>Nós vamos passar por este exame difícil.</span>" },
                        { term: "Get away", sent: "They want to get away for the holidays.", trans: "<span style='color:#0077b6'>Eles querem viajar nas férias.</span>" },
                        { term: "Get back", sent: "When will you get back from London?", trans: "<span style='color:#0077b6'>Quando você vai voltar de Londres?</span>" },
                        { term: "Get together", sent: "Let's get together this weekend!", trans: "<span style='color:#0077b6'>Vamos nos reunir este fim de semana!</span>" }
                        
                    ]
                },
                {
                    title: "Expressions & Context",
                    audio: "TTS: I spend a lot of time on Instagram. There isn't much interesting content today. There are a few comments on the photo. I have little information about that influencer. Do you have any advice for me? Somebody tagged me in a photo at the party. I didn't see anything interesting on TV. Everyone uses social media at school. He works at Google in California. She is working on a new project at the moment.",
                    items: [
                        { term: "Usage", sent: "I spend a lot of time on Instagram.", trans: "<span style='color:#0077b6'>Eu passo muito tempo no Instagram.</span>" },
                        { term: "Usage", sent: "There isn't much interesting content today.", trans: "<span style='color:#0077b6'>Não há muito conteúdo interessante hoje.</span>" },
                        { term: "Usage", sent: "There are a few comments on the photo.", trans: "<span style='color:#0077b6'>Há alguns comentários na foto.</span>" },
                        { term: "Usage", sent: "I have little information about that influencer.", trans: "<span style='color:#0077b6'>Tenho pouca informação sobre aquele influenciador.</span>" },
                        { term: "Usage", sent: "Do you have any advice for me?", trans: "<span style='color:#0077b6'>Você tem algum conselho para mim?</span>" },
                        { term: "Usage", sent: "Somebody tagged me in a photo at the party.", trans: "<span style='color:#0077b6'>Alguém me marcou em uma foto na festa.</span>" },
                        { term: "Usage", sent: "I didn't see anything interesting on TV.", trans: "<span style='color:#0077b6'>Não vi nada interessante na TV.</span>" },
                        { term: "Usage", sent: "Everyone uses social media at school.", trans: "<span style='color:#0077b6'>Todo mundo usa mídia social na escola.</span>" },
                        { term: "Usage", sent: "He works at Google in California.", trans: "<span style='color:#0077b6'>Ele trabalha no Google na Califórnia.</span>" },
                        { term: "Usage", sent: "She is working on a new project at the moment.", trans: "<span style='color:#0077b6'>Ela está trabalhando em um novo projeto no momento.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (Tabbed Version - Expanded to 30 items)
            drillGroups: [
                {
                    title: "Verbs & Actions",
                    drills: [
                        {
                            type: "mcq",
                            q: "To _______ means to put a file from your computer onto the internet.",
                            options: [{t: "Download", c: false}, {t: "Upload", c: true}, {t: "Scroll", c: false}, {t: "Follow", c: false}]
                        },
                        {
                            type: "mcq",
                            q: "If a video is very popular and spreads fast, it will _______.",
                            options: [{t: "Connect", c: false}, {t: "Go viral", c: true}, {t: "Unfollow", c: false}, {t: "Like", c: false}]
                        },
                        {
                            type: "mcq",
                            q: "I always _______ through my feed to see new posts.",
                            options: [{t: "Interact", c: false}, {t: "Scroll", c: true}, {t: "Connect", c: false}, {t: "Share", c: false}]
                        },
                        {
                            type: "mcq",
                            q: "Please _______ on my post if you have any questions!",
                            options: [{t: "Like", c: false}, {t: "Comment", c: true}, {t: "Download", c: false}, {t: "Post", c: false}]
                        },
                        {
                            type: "mcq",
                            q: "If you don't like his content anymore, you can _______ him.",
                            options: [{t: "Follow", c: false}, {t: "Unfollow", c: true}, {t: "Upload", c: false}, {t: "Tag", c: false}]
                        },
                        {
                            type: "mcq",
                            q: "To _______ a file means to take it from the internet and put it on your phone.",
                            options: [{t: "Download", c: true}, {t: "Upload", c: false}, {t: "Post", c: false}, {t: "Like", c: false}]
                        },
                        {
                            type: "mcq",
                            q: "It is important to _______ with your followers by answering their questions.",
                            options: [{t: "Scroll", c: false}, {t: "Interact", c: true}, {t: "Unfollow", c: false}, {t: "Download", c: false}]
                        },
                        {
                            type: "mcq",
                            q: "Social media helps us _______ with friends who live far away.",
                            options: [{t: "Connect", c: true}, {t: "Scroll", c: false}, {t: "Download", c: false}, {t: "Post", c: false}]
                        },
                        {
                            type: "mcq",
                            q: "I am going to _______ a new photo on my profile today.",
                            options: [{t: "Comment", c: false}, {t: "Post", c: true}, {t: "Unfollow", c: false}, {t: "Scroll", c: false}]
                        },
                        {
                            type: "mcq",
                            q: "Don't forget to _______ my photo so I know you saw it!",
                            options: [{t: "Tag", c: true}, {t: "Download", c: false}, {t: "Unfollow", c: false}, {t: "Scroll", c: false}]
                        }
                    ]
                },
                {
                    title: "Vocabulary & GET",
                    drills: [
                        {
                            type: "mcq",
                            q: "Instagram is a very famous _______.",
                            options: [{t: "Notification", c: false}, {t: "Platform", c: true}, {t: "Addiction", c: false}, {t: "Meme", c: false}]
                        },
                        {
                            type: "mcq",
                            q: "You should keep your password secret to protect your _______.",
                            options: [{t: "Feed", c: false}, {t: "Privacy", c: true}, {t: "Influencer", c: false}, {t: "Account", c: false}]
                        },
                        {
                            type: "mcq",
                            q: "A funny image with text that people share is called a _______.",
                            options: [{t: "Profile", c: false}, {t: "Meme", c: true}, {t: "Fake news", c: false}, {t: "Notification", c: false}]
                        },
                        {
                            type: "mcq",
                            q: "Being unable to stop using your phone is a sign of _______.",
                            options: [{t: "Addiction", c: true}, {t: "Content", c: false}, {t: "Hashtag", c: false}, {t: "Platform", c: false}]
                        },
                        {
                            type: "mcq",
                            q: "An _______ is a person with many followers who influences others.",
                            options: [{t: "Account", c: false}, {t: "Influencer", c: true}, {t: "Profile", c: false}, {t: "Feed", c: false}]
                        },
                        {
                            type: "mcq",
                            q: "I need to _______ early to check my messages.",
                            options: [{t: "Get along", c: false}, {t: "Get up", c: true}]
                        },
                        {
                            type: "mcq",
                            q: "Do you _______ well with your neighbors?",
                            options: [{t: "Get through", c: false}, {t: "Get along", c: true}]
                        },
                        {
                            type: "mcq",
                            q: "It took her a month to _______ the flu.",
                            options: [{t: "Get away", c: false}, {t: "Get over", c: true}]
                        },
                        {
                            type: "mcq",
                            q: "We finally _______ the forest after hours of walking.",
                            options: [{t: "Get together", c: false}, {t: "Get through", c: true}]
                        },
                        {
                            type: "mcq",
                            q: "Let's _______ for coffee tomorrow.",
                            options: [{t: "Get back", c: false}, {t: "Get together", c: true}]
                        }
                    ]
                },
                {
                    title: "Plurals & Expressions",
                    drills: [
                        {
                            type: "mcq",
                            q: "Many _______ (person) are online right now.",
                            options: [{t: "Persons", c: false}, {t: "People", c: true}]
                        },
                        {
                            type: "mcq",
                            q: "The _______ (child) love watching TikTok videos.",
                            options: [{t: "Childs", c: false}, {t: "Children", c: true}]
                        },
                        {
                            type: "mcq",
                            q: "Both _______ (man) and _______ (woman) use social media.",
                            options: [{t: "Mans / Womans", c: false}, {t: "Men / Women", c: true}]
                        },
                        {
                            type: "mcq",
                            q: "Be careful! There are _______ (mouse) in the basement.",
                            options: [{t: "Mouses", c: false}, {t: "Mice", c: true}]
                        },
                        {
                            type: "mcq",
                            q: "My _______ (foot) hurt after running.",
                            options: [{t: "Foots", c: false}, {t: "Feet", c: true}]
                        },
                        {
                            type: "mcq",
                            q: "I saw some _______ (goose) swimming in the park.",
                            options: [{t: "Gooses", c: false}, {t: "Geese", c: true}]
                        },
                        {
                            type: "mcq",
                            q: "The _______ (leaf) are falling because it is autumn.",
                            options: [{t: "Leafs", c: false}, {t: "Leaves", c: true}]
                        },
                        {
                            type: "mcq",
                            q: "Translate: 'Quanto tempo você passa online?'",
                            options: [{t: "How many followers do you have?", c: false}, {t: "How much time do you spend online?", c: true}]
                        },
                        {
                            type: "mcq",
                            q: "Translate: 'Alguém me marcou em uma foto.'",
                            options: [{t: "Alguém me seguiu em uma foto.", c: false}, {t: "Somebody tagged me in a photo.", c: true}]
                        },
                        {
                            type: "mcq",
                            q: "Translate: 'Não há muito conteúdo interessante hoje.'",
                            options: [{t: "There isn't much interesting content today.", c: true}, {t: "There are a few comments on the photo.", c: false}]
                        }
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
                    title: "Prepositions of Place (IN, ON, AT)",
                    audio: "TTS: Use IN for larger areas, cities, and countries. Use ON for surfaces and digital screens or platforms. Use AT for specific points, locations, or addresses.",
                    explanation: "We use these prepositions to describe where something or someone is.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos estas preposições para descrever onde algo ou alguém está.)</span>",
                    samples: [
                        { en: "Celine is <b>in</b> Brazil at the moment.", pt: "<span style='color:#0077b6'>(Celine está no Brasil no momento.)</span>" },
                        { en: "Albert posted a meme <b>on</b> Instagram.", pt: "<span style='color:#0077b6'>(Albert postou um meme no Instagram.)</span>" },
                        { en: "Let’s meet <b>at</b> the school entrance.", pt: "<span style='color:#0077b6'>(Vamos nos encontrar na entrada da escola.)</span>" }
                    ]
                },
                {
                    title: "Prepositions of Time (IN, ON, AT)",
                    audio: "TTS: Use IN for months, years, seasons, and parts of the day. Use ON for specific days of the week and dates. Use AT for specific clock times and points in time.",
                    explanation: "These prepositions are used to indicate when an action happens.<br><br><span style='color:#0077b6; font-style:italic;'>(Estas preposições são usadas para indicar quando uma ação acontece.)</span>",
                    samples: [
                        { en: "I check my feed <b>in</b> the morning.", pt: "<span style='color:#0077b6'>(Eu checo meu feed de manhã.)</span>" },
                        { en: "She uploaded the video <b>on</b> Monday.", pt: "<span style='color:#0077b6'>(Ela carregou o vídeo na segunda-feira.)</span>" },
                        { en: "The live stream starts <b>at</b> 8 PM.", pt: "<span style='color:#0077b6'>(A transmissão ao vivo começa às 20h.)</span>" }
                    ]
                },
                {
                    title: "Special Uses (Work & Places)",
                    audio: "TTS: Use AT for companies. Use IN for fields or cities. Use ON for specific projects. For places, IN means you are there for the primary purpose, while AT indicates just the location.",
                    explanation: "Specific rules for workplaces and institutional locations.<br><br><span style='color:#0077b6; font-style:italic;'>(Regras específicas para locais de trabalho e localizações institucionais.)</span>",
                    samples: [
                        { en: "He works <b>at</b> Google <b>in</b> the IT department.", pt: "<span style='color:#0077b6'>(Ele trabalha no Google no departamento de TI.)</span>" },
                        { en: "Albert is <b>in</b> school studying.", pt: "<span style='color:#0077b6'>(Albert está na escola estudando - propósito primário.)</span>" },
                        { en: "His dad is <b>at</b> the school to pick him up.", pt: "<span style='color:#0077b6'>(O pai dele está na escola para buscá-lo - apenas localização.)</span>" }
                    ]
                },
                {
                    title: "Countable vs. Uncountable",
                    audio: "TTS: Countable nouns are things we can count, and they have plural forms. Uncountable nouns are things we cannot count individually and usually have no plural form.",
                    explanation: "Nouns are categorized by whether they can be counted as individual units.<br><br><span style='color:#0077b6; font-style:italic;'>(Substantivos são categorizados se podem ser contados como unidades individuais.)</span>",
                    samples: [
                        { en: "<b>Countable</b>: One photo, two photos.", pt: "<span style='color:#0077b6'>(Contável: Uma foto, duas fotos.)</span>" },
                        { en: "<b>Uncountable</b>: Information, privacy, fake news.", pt: "<span style='color:#0077b6'>(Incontável: Informação, privacidade, notícias falsas.)</span>" }
                    ]
                },
                {
                    title: "Quantifiers",
                    audio: "TTS: Use MANY for countable and MUCH for uncountable. Use A FEW for a positive small amount of countable nouns, and A LITTLE for uncountable. Use FEW or LITTLE for negative ideas meaning not enough.",
                    explanation: "Words used to express quantity depending on the noun type.<br><br><span style='color:#0077b6; font-style:italic;'>(Palavras usadas para expressar quantidade dependendo do tipo de substantivo.)</span>",
                    samples: [
                        { en: "There are <b>many</b> followers, but not <b>much</b> content.", pt: "<span style='color:#0077b6'>(Há muitos seguidores, mas não muito conteúdo.)</span>" },
                        { en: "I have <b>a few</b> friends and <b>a little</b> free time.", pt: "<span style='color:#0077b6'>(Eu tenho alguns amigos e um pouco de tempo livre.)</span>" },
                        { en: "There is <b>little</b> privacy online.", pt: "<span style='color:#0077b6'>(Há pouca privacidade online - ideia negativa.)</span>" }
                    ]
                },
                {
                    title: "Indefinite Pronouns",
                    audio: "TTS: SOME compounds are used in affirmative sentences. ANY compounds are used in negative sentences and questions. NO compounds give a negative meaning in affirmative sentences. EVERY refers to all.",
                    explanation: "Used to refer to people or things non-specifically.<br><br><span style='color:#0077b6; font-style:italic;'>(Usado para se referir a pessoas ou coisas de forma não específica.)</span>",
                    samples: [
                        { en: "<b>Somebody</b> liked your post.", pt: "<span style='color:#0077b6'>(Alguém curtiu sua postagem.)</span>" },
                        { en: "Is there <b>anything</b> interesting on the feed?", pt: "<span style='color:#0077b6'>(Tem algo interessante no feed?)</span>" },
                        { en: "<b>Nobody</b> commented on the photo.", pt: "<span style='color:#0077b6'>(Ninguém comentou na foto.)</span>" },
                        { en: "<b>Everyone</b> is online right now.", pt: "<span style='color:#0077b6'>(Todo mundo está online agora.)</span>" }
                    ]
                }
            ],

            // 3B: Natural Examples (Grouped)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Location and Time",
                    audio: "audio/em1-3-7/step3_dialogue1.mp3",
                    lines: [
                        { speaker: "Albert", text: "Celine, where are you? I’m **at** the library.", pt: "<span style='color:#0077b6'>(Celine, onde você está? Estou na biblioteca.)</span>" },
                        { speaker: "Celine", text: "I’m **in** the cafeteria. I’ll meet you **at** 2 PM **on** Tuesday to work **on** our project.", pt: "<span style='color:#0077b6'>(Estou na cafeteria. Te encontro às 14h na terça-feira para trabalhar no nosso projeto.)</span>" }
                    ]
                },
                {
                    title: "Dialogue 2: Counting the Digital World",
                    audio: "audio/em1-3-7/step3_dialogue2.mp3",
                    lines: [
                        { speaker: "Albert", text: "Do you have **much** information about that influencer?", pt: "<span style='color:#0077b6'>(Você tem muita informação sobre aquela influenciadora?)</span>" },
                        { speaker: "Celine", text: "No, but there are **a few** comments on her profile. **Few** people actually know her.", pt: "<span style='color:#0077b6'>(Não, mas há alguns comentários no perfil dela. Poucas pessoas realmente a conhecem.)</span>" }
                    ]
                },
                {
                    title: "Dialogue 3: Finding Somebody Online",
                    audio: "audio/em1-3-7/step3_dialogue3.mp3",
                    lines: [
                        { speaker: "Celine", text: "**Everyone** loves this new meme! Has **anybody** shared it with you?", pt: "<span style='color:#0077b6'>(Todo mundo ama esse meme novo! Alguém compartilhou com você?)</span>" },
                        { speaker: "Albert", text: "No, **nobody** sent it to me, but I saw **something** similar **on** Twitter.", pt: "<span style='color:#0077b6'>(Não, ninguém me mandou, mas vi algo parecido no Twitter.)</span>" }
                    ]
                }
            ],

            // 3C: Grammar Practice (Expanded to 30 items)
            grammarDrillGroups: [
                {
                    title: "Prepositions (IN, ON, AT)",
                    drills: [
                        { q: "I saw your new photo _______ Instagram.", options: [{t: "in", c: false}, {t: "on", c: true}, {t: "at", c: false}] },
                        { q: "Many digital influencers live _______ Los Angeles.", options: [{t: "in", c: true}, {t: "on", c: false}, {t: "at", c: false}] },
                        { q: "I don't usually check my notifications _______ night.", options: [{t: "in", c: false}, {t: "on", c: false}, {t: "at", c: true}] },
                        { q: "The new platform launched _______ 2023.", options: [{t: "in", c: true}, {t: "on", c: false}, {t: "at", c: false}] },
                        { q: "My brother works _______ Google _______ a new app.", options: [{t: "in / at", c: false}, {t: "at / on", c: true}, {t: "on / in", c: false}] },
                        { q: "Celine is _______ school studying for her finals.", options: [{t: "in", c: true}, {t: "on", c: false}, {t: "at", c: false}] },
                        { q: "The meeting is _______ Tuesday _______ 2 PM.", options: [{t: "on / at", c: true}, {t: "at / in", c: false}, {t: "in / on", c: false}] },
                        { q: "I like to scroll through my feed _______ the morning.", options: [{t: "in", c: true}, {t: "on", c: false}, {t: "at", c: false}] },
                        { q: "Wait for me _______ the bus stop.", options: [{t: "in", c: false}, {t: "on", c: false}, {t: "at", c: true}] },
                        { q: "She lives _______ a very large city in Europe.", options: [{t: "in", c: true}, {t: "on", c: false}, {t: "at", c: false}] }
                    ]
                },
                {
                    title: "Nouns & Quantifiers",
                    drills: [
                        { q: "There is too much _______ on the internet today.", options: [{t: "posts", c: false}, {t: "fake news", c: true}] },
                        { q: "How many _______ did you receive on your profile?", options: [{t: "notifications", c: true}, {t: "privacy", c: false}] },
                        { q: "I have _______ (small amount/positive) time, so I can check your post.", options: [{t: "a little", c: true}, {t: "little", c: false}, {t: "a few", c: false}] },
                        { q: "_______ (not many/negative) people understand how the algorithm works.", options: [{t: "A few", c: false}, {t: "Few", c: true}, {t: "Much", c: false}] },
                        { q: "We don't have _______ information about the new update yet.", options: [{t: "many", c: false}, {t: "much", c: true}, {t: "few", c: false}] },
                        { q: "I have _______ friends who don't use social media at all.", options: [{t: "a little", c: false}, {t: "a few", c: true}, {t: "much", c: false}] },
                        { q: "There is _______ addiction to smartphones in our class.", options: [{t: "many", c: false}, {t: "much", c: true}] },
                        { q: "I need _______ advice on my privacy settings.", options: [{t: "a few", c: false}, {t: "a little", c: true}] },
                        { q: "How _______ memes do you share every day?", options: [{t: "many", c: true}, {t: "much", c: false}] },
                        { q: "There are _______ comments on my latest story.", options: [{t: "a little", c: false}, {t: "a few", c: true}] }
                    ]
                },
                {
                    title: "Pronouns & Plurals",
                    drills: [
                        { q: "I didn't see _______ interesting on my feed today.", options: [{t: "something", c: false}, {t: "anything", c: true}] },
                        { q: "_______ wants to go viral these days.", options: [{t: "Everyone", c: true}, {t: "Anyone", c: false}] },
                        { q: "The _______ (child) are learning about cyberbullying.", options: [{t: "childs", c: false}, {t: "children", c: true}] },
                        { q: "I think _______ is calling you on your phone.", options: [{t: "somebody", c: true}, {t: "anybody", c: false}] },
                        { q: "_______ commented on my photo. It has zero likes.", options: [{t: "Anyone", c: false}, {t: "Nobody", c: true}] },
                        { q: "The _______ (man) and _______ (woman) are in a meeting.", options: [{t: "men / women", c: true}, {t: "mans / womans", c: false}] },
                        { q: "My _______ (foot) are tired after walking in the park.", options: [{t: "foots", c: false}, {t: "feet", c: true}] },
                        { q: "Are there _______ (mouse) in the tech lab?", options: [{t: "mouses", c: false}, {t: "mice", c: true}] },
                        { q: "I saw some _______ (goose) near the cafeteria.", options: [{t: "gooses", c: false}, {t: "geese", c: true}] },
                        { q: "Do you have _______ to tell me about the new app?", options: [{t: "anything", c: true}, {t: "nothing", c: false}] }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 4: SHADOWING
        // ======================================================
        {
            title: "Can you say that again?",
            sentences: [
                { text: "I spend a lot of time on Instagram.<br><small style='color:#0077b6'>(Eu passo muito tempo no Instagram.)</small>", audio: "TTS: I spend a lot of time on Instagram.", arrow: "↘" },
                { text: "Is there anything interesting on your feed?<br><small style='color:#0077b6'>(Tem algo interessante no seu feed?)</small>", audio: "TTS: Is there anything interesting on your feed?", arrow: "↗" },
                { text: "Everyone is online at school today.<br><small style='color:#0077b6'>(Todo mundo está online na escola hoje.)</small>", audio: "TTS: Everyone is online at school today.", arrow: "↘" },
                { text: "Do you get along with your followers?<br><small style='color:#0077b6'>(Você se dá bem com seus seguidores?)</small>", audio: "TTS: Do you get along with your followers?", arrow: "↗" },
                { text: "There isn't much information about that app.<br><small style='color:#0077b6'>(Não há muita informação sobre aquele aplicativo.)</small>", audio: "TTS: There isn't much information about that app.", arrow: "↘" },
                { text: "We need to get away from the screens.<br><small style='color:#0077b6'>(Nós precisamos nos afastar das telas.)</small>", audio: "TTS: We need to get away from the screens.", arrow: "↘" }
            ]
        },

        // ======================================================
        // STEP 5: LISTENING
        // ======================================================
        {
            title: "Are you following me?",
            drills: [
                {
                    type: "typing",
                    instruction: "Listen to Albert and complete the text.<br><small style='color:#0077b6'>(Ouça Albert e complete o texto.)</small>",
                    audio: "TTS: I usually get up at 7 AM and check my notifications immediately. Everyone in my house is on their phones during breakfast. My dad works at a tech company, so he has many devices on the table. I only have a little time to scroll through my feed before class starts.",
                    text: "I usually [get up] at 7 AM and check my [notifications] immediately. [Everyone] in my house is [on] their phones during breakfast. My dad works [at] a tech company, so he has [many] [devices] on the table. I only have [a little] time to [scroll] through my [feed] before class starts."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue and choose the correct options.<br><small style='color:#0077b6'>(Ouça o diálogo e escolha as opções corretas.)</small>",
                    audio: "audio/em1-3-7/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: Do you have [any* | many | some] [advice* | advices | informing] about internet [privacy* | profile | account]?", a: "any" },
                        { q: "Expert: Yes, [everyone* | nobody | somebody] should use strong passwords.", a: "everyone" },
                        { q: "Celine: There is [much* | many | a few] [fake news* | memes | stories] on this [platform* | feed | notification].", a: "much" },
                        { q: "Expert: True. You should check [everything* | anything | nothing] before you share.", a: "everything" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen and choose the logical response.<br><small style='color:#0077b6'>(Ouça e escolha a resposta lógica.)</small>",
                    audio: "TTS: How much time do you spend online on the weekend?",
                    options: [
                        { t: "I follow many influencers.", c: false },
                        { t: "I spend a lot of hours on TikTok.", c: true },
                        { t: "Somebody tagged me in a photo.", c: false },
                        { t: "My feet are very tired.", c: false }
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
                    title: "Narration - The Viral Challenge",
                    audio: "TTS: In the Hashtag Era, trends change every day. Last week, a video of children planting trees went viral. Many people shared the content on Facebook and Twitter. However, there was little information about where the event happened. Some users thought it was fake news. Eventually, a famous influencer confirmed the story. Now, everyone wants to participate in the next initiative. || audio/em1-3-7/p6_text1.mp3",
                    body: "In the #HashtagEra, trends change every day. Last week, a [video](tooltip:video) of [children](tooltip:children) planting trees [went viral](tooltip:go-viral). Many people shared the [content](tooltip:content) on Facebook and Twitter. However, there was [little](tooltip:little) [information](tooltip:information) about where the event happened. Some users thought it was [fake news](tooltip:fake-news). Eventually, a famous [influencer](tooltip:influencer) confirmed the story. Now, [everyone](tooltip:everyone) wants to participate in the next [initiative](tooltip:initiative).",
                    questions: [
                        { q: "What happened to the video of the children?", options: [{t: "It was deleted.", c: false}, {t: "It went viral.", c: true}, {t: "It had no comments.", c: false}] },
                        { q: "Where was the video shared?", options: [{t: "Only in books.", c: false}, {t: "At the hospital.", c: false}, {t: "On Facebook and Twitter.", c: true}] },
                        { q: "Was the information clear at the beginning?", options: [{t: "Yes, there was a lot of data.", c: false}, {t: "No, there was little information.", c: true}, {t: "Everyone knew where it was.", c: false}] }
                    ]
                },
                {
                    title: "Dialogue - Digital Detox",
                    audio: "audio/em1-3-7/p6_text2.mp3",
                    body: "<b>Celine:</b> Albert, you look tired. Did you [get up](tooltip:get-up) late?<br><b>Albert:</b> Yes, I stayed up until 2 AM [scrolling through](tooltip:scroll-through) memes. I think I have a screen [addiction](tooltip:addiction).<br><b>Celine:</b> That’s not good! There is too much [waste](tooltip:waste) of time online. You need to [get away](tooltip:get-away-from) from your phone.<br><b>Albert:</b> I know. Nobody in my family talks anymore because we are [always](tooltip:always) on the [internet](tooltip:internet).<br><b>Celine:</b> Let’s [get together](tooltip:get-together) at the [park](tooltip:park) tomorrow. We can see the [leaves](tooltip:leaves) falling and talk in person.<br><b>Albert:</b> [That makes sense](tooltip:that-makes-sense). I'll [unfollow](tooltip:unfollow) some [accounts](tooltip:account) and join you!",
                    questions: [
                        { q: "Why is Albert tired?", options: [{t: "He was working at Google.", c: false}, {t: "He was scrolling through memes all night.", c: true}, {t: "He was running in the park.", c: false}] },
                        { q: "What does Celine suggest?", options: [{t: "Buying a new phone.", c: false}, {t: "Getting away from the phone.", c: true}, {t: "Posting more stories.", c: false}] },
                        { q: "Where will they meet tomorrow?", options: [{t: "On a platform.", c: false}, {t: "At school.", c: false}, {t: "At the park.", c: true}] }
                    ]
                },
                {
                    title: "Description - An Influencer's Life",
                    audio: "TTS: Mariana is a successful influencer. Her profile has millions of followers. She works at home and posts content in the morning. She gets along with her fans, but she has few real friends because she is always busy. Mariana is worried about her privacy. Somebody recently downloaded her private photos. She tries to get over the problems, but cyberbullying is a challenge for everyone on the internet. || audio/em1-1-3/p6_text3.mp3",
                    body: "Mariana is a successful [influencer](tooltip:influencer). Her [profile](tooltip:profile) has [millions](tooltip:millions) of [followers](tooltip:follower). She works at home and [posts](tooltip:post) [content](tooltip:content) in the morning. She [gets along with](tooltip:get-along-with) her fans, but she has [few](tooltip:few) real friends because she is [always](tooltip:always) busy. Mariana is worried about her [privacy](tooltip:privacy). [Somebody](tooltip:somebody) recently [downloaded](tooltip:download) her private [photos](tooltip:photo). She tries to [get over](tooltip:get-over) the problems, but [cyberbullying](tooltip:cyberbullying) is a [challenge](tooltip:challenge) for [everyone](tooltip:everyone) on the [internet](tooltip:internet).",
                    questions: [
                        { q: "When does Mariana post her content?", options: [{t: "At night.", c: false}, {t: "On the weekend.", c: false}, {t: "In the morning.", c: true}] },
                        { q: "How many real friends does Mariana have?", options: [{t: "Millions.", c: false}, {t: "A few.", c: true}, {t: "None.", c: false}] },
                        { q: "What is Mariana's current concern?", options: [{t: "Her battery.", c: false}, {t: "Her privacy.", c: true}, {t: "Her tooth.", c: false}] }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 7: QUICK DRILLS
        // ======================================================
        {
            title: "Monkey see, Monkey do",
            drills: [
                {
                    type: "matching",
                    instruction: "Match the phrasal verb with its meaning.<br><small style='color:#0077b6'>(Associe o verbo frasal ao seu significado.)</small>",
                    pairs: [
                        { left: "Get over", right: "Recover from a problem", val: "1" },
                        { left: "Get along", right: "Have a good relationship", val: "2" },
                        { left: "Get back", right: "Return to a place", val: "3" },
                        { left: "Get through", right: "Survive something difficult", val: "4" }
                    ]
                },
                {
                    type: "word-order",
                    instruction: "Put the words in order to form a correct sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem para formar uma frase correta.)</small>",
                    sentence: "posted / story / She / a / Instagram / on / .",
                    correct: "She posted a story on Instagram ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in order.",
                    sentence: "at / works / my / Google / brother / .",
                    correct: "My brother works at Google ."
                },
                {
                    type: "dropdown",
                    instruction: "Fill in the blanks with the correct quantifier.<br><small style='color:#0077b6'>(Preencha as lacunas com o quantificador correto.)</small>",
                    questions: [
                        { q: "I don't have [much* | many] time to check my feed today.", a: "much" },
                        { q: "There are [many* | much] people online right now.", a: "many" },
                        { q: "I have [a little* | a few] information about the new platform.", a: "a little" },
                        { q: "I received [a few* | a little] notifications on my account.", a: "a few" }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that doesn't fit the category.<br><small style='color:#0077b6'>(Escolha a palavra que não se encaixa na categoria.)</small>",
                    options: [{t: "Post", c: false}, {t: "Like", c: false}, {t: "Comment", c: false}, {t: "Privacy", c: true}]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the singular word among plurals.",
                    options: [{t: "Children", c: false}, {t: "People", c: false}, {t: "Feet", c: false}, {t: "Person", c: true}]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Describe your social media habits. Write 4-6 sentences explaining which platforms you use, when you check them, and if you have many followers.<br><br><small><span style='color:#0077b6'>(Descreva seus hábitos nas redes sociais. Escreva de 4 a 6 frases explicando quais plataformas você usa, quando as checa e se tem muitos seguidores.)</span></small>",
            example: "\"I use social media every day. I usually check my feed on Instagram in the morning. Everyone in my class has an account. I don't have many followers, but I share a few photos of my friends. I like to interact with people online.\"<br><br><small><span style='color:#0077b6'>(\"Eu uso redes sociais todos os dias. Eu geralmente checo meu feed no Instagram de manhã. Todo mundo na minha classe tem uma conta...\")</span></small>",
            prompts: [
                "Use at least one [Indefinite Pronoun] (e.g. everyone, somebody). <br><small><span style='color:#0077b6'>(Use pelo menos um Pronome Indefinido.)</span></small>",
                "Use two [Prepositions] (IN, ON, AT). <br><small><span style='color:#0077b6'>(Use duas Preposições.)</span></small>",
                "Use one [Quantifier] (e.g. many, much, a few). <br><small><span style='color:#0077b6'>(Use um Quantificador.)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Area 1: Social Media Verbs ---
                { term: "Post", definition: "To publish something online.", defTrans: "postar", example: "I need to post a story on my profile.", exTrans: "Eu preciso postar um story no meu perfil.", audioFront: "TTS: Post", audioBack: "TTS: I need to post a story on my profile." },
                { term: "Share", definition: "To give a portion of something to others.", defTrans: "compartilhar", example: "Please share this funny video with your friends.", exTrans: "Por favor, compartilhe este vídeo engraçado com seus amigos.", audioFront: "TTS: Share", audioBack: "TTS: Please share this funny video with your friends." },
                { term: "Like", definition: "To show approval of a post digitally.", defTrans: "curtir", example: "Many people liked her latest photo.", exTrans: "Muitas pessoas curtiram a última foto dela.", audioFront: "TTS: Like", audioBack: "TTS: Many people liked her latest photo." },
                { term: "Comment", definition: "To express an opinion in writing on a post.", defTrans: "comentar", example: "Don't forget to comment on the post!", exTrans: "Não esqueça de comentar na postagem!", audioFront: "TTS: Comment", audioBack: "TTS: Don't forget to comment on the post!" },
                { term: "Follow", definition: "To subscribe to someone's updates.", defTrans: "seguir", example: "I follow my favorite tech influencers.", exTrans: "Eu sigo meus influenciadores de tecnologia favoritos.", audioFront: "TTS: Follow", audioBack: "TTS: I follow my favorite tech influencers." },
                { term: "Go viral", definition: "To become very popular very quickly.", defTrans: "viralizar", example: "His dance video is going to go viral.", exTrans: "O vídeo de dança dele vai viralizar.", audioFront: "TTS: Go viral", audioBack: "TTS: His dance video is going to go viral." },
                { term: "Upload", definition: "To transfer data from a local device to the internet.", defTrans: "carregar / enviar", example: "Wait a moment, I'm uploading a new video.", exTrans: "Espere um momento, estou carregando um novo vídeo.", audioFront: "TTS: Upload", audioBack: "TTS: Wait a moment, I'm uploading a new video." },
                { term: "Download", definition: "To copy data from the internet to a local device.", defTrans: "baixar", example: "I downloaded a new app on Monday.", exTrans: "Eu baixei um novo aplicativo na segunda-feira.", audioFront: "TTS: Download", audioBack: "TTS: I downloaded a new app on Monday." },
                { term: "Unfollow", definition: "To stop following an account.", defTrans: "deixar de seguir", example: "I decided to unfollow accounts that are not useful.", exTrans: "Eu decidi deixar de seguir contas que não são úteis.", audioFront: "TTS: Unfollow", audioBack: "TTS: I decided to unfollow accounts that are not useful." },
                { term: "Connect", definition: "To join or link together.", defTrans: "conectar", example: "Social media helps us connect with people worldwide.", exTrans: "As redes sociais nos ajudam a conectar com pessoas no mundo todo.", audioFront: "TTS: Connect", audioBack: "TTS: Social media helps us connect with people worldwide." },
                { term: "Interact", definition: "To communicate or be involved with others.", defTrans: "interagir", example: "It's good to interact with your followers.", exTrans: "É bom interagir com seus seguidores.", audioFront: "TTS: Interact", audioBack: "TTS: It's good to interact with your followers." },
                { term: "Scroll (through)", definition: "To move through content on a screen.", defTrans: "rolar (a tela)", example: "I often scroll through my feed for hours.", exTrans: "Eu costumo rolar meu feed por horas.", audioFront: "TTS: Scroll through", audioBack: "TTS: I often scroll through my feed for hours." },


                // --- Area 2: Social Media Vocab ---
                { term: "Influencer", definition: "A person with the ability to influence public opinion.", defTrans: "influenciador(a)", example: "That influencer has millions of followers.", exTrans: "Aquele influenciador tem milhões de seguidores.", audioFront: "TTS: Influencer", audioBack: "TTS: That influencer has millions of followers." },
                { term: "Privacy", definition: "The state of being free from public attention.", defTrans: "privacidade", example: "You must protect your privacy online.", exTrans: "Você deve proteger sua privacidade online.", audioFront: "TTS: Privacy", audioBack: "TTS: You must protect your privacy online." },
                { term: "Fake news", definition: "False information circulated as news.", defTrans: "notícias falsas", example: "Be careful with fake news on the internet.", exTrans: "Cuidado com notícias falsas na internet.", audioFront: "TTS: Fake news", audioBack: "TTS: Be careful with fake news on the internet." },
                { term: "Addiction", definition: "Being physically and mentally dependent on something.", defTrans: "vício", example: "Screen time addiction is a serious problem.", exTrans: "O vício em tempo de tela é um problema sério.", audioFront: "TTS: Addiction", audioBack: "TTS: Screen time addiction is a serious problem." },
                { term: "Social Media", definition: "Websites and apps that enable users to create and share content.", defTrans: "mídia social", example: "Social media is everywhere these days.", exTrans: "As redes sociais estão em toda parte hoje em dia.", audioFront: "TTS: Social Media", audioBack: "TTS: Social media is everywhere these days." },
                { term: "Platform", definition: "A base of technologies on which other technologies are built.", defTrans: "plataforma", example: "TikTok is a very popular platform for teens.", exTrans: "O TikTok é uma plataforma muito popular para adolescentes.", audioFront: "TTS: Platform", audioBack: "TTS: TikTok is a very popular platform for teens." },
                { term: "Account", definition: "A personal profile on a social media platform.", defTrans: "conta", example: "I have a private account on Instagram.", exTrans: "Eu tenho uma conta privada no Instagram.", audioFront: "TTS: Account", audioBack: "TTS: I have a private account on Instagram." },
                { term: "Profile", definition: "A user's personal page or identity on a site.", defTrans: "perfil", example: "Your profile picture looks very professional.", exTrans: "Sua foto de perfil parece muito profissional.", audioFront: "TTS: Profile", audioBack: "TTS: Your profile picture looks very professional." },
                { term: "Feed", definition: "A list of newly updated content.", defTrans: "feed / linha do tempo", example: "Let me check my feed for updates.", exTrans: "Deixa eu checar meu feed para ver atualizações.", audioFront: "TTS: Feed", audioBack: "TTS: Let me check my feed for updates." },
                { term: "Hashtag (#)", definition: "A word preceded by a hash sign to identify messages.", defTrans: "hashtag", example: "Use a hashtag to find related content.", exTrans: "Use uma hashtag para encontrar conteúdo relacionado.", audioFront: "TTS: Hashtag", audioBack: "TTS: Use a hashtag to find related content." },
                { term: "Content", definition: "Information, images, or videos shared on digital platforms.", defTrans: "conteúdo", example: "There isn't much interesting content today.", exTrans: "Não há muito conteúdo interessante hoje.", audioFront: "TTS: Content", audioBack: "TTS: There isn't much interesting content today." },
                { term: "Meme", definition: "A humorous image, video, or text spread rapidly.", defTrans: "meme", example: "Albert sent me a very funny meme.", exTrans: "Albert me mandou um meme muito engraçado.", audioFront: "TTS: Meme", audioBack: "TTS: Albert sent me a very funny meme." },
                { term: "Notification", definition: "A message from an app that appears on your screen.", defTrans: "notificação", example: "I received a notification that you tagged me.", exTrans: "Eu recebi uma notificação de que você me marcou.", audioFront: "TTS: Notification", audioBack: "TTS: I received a notification that you tagged me." },
                { term: "Cyberbullying", definition: "Using electronic communication to bully or intimidate.", defTrans: "cyberbullying", example: "We must stop cyberbullying in our schools.", exTrans: "Devemos parar o cyberbullying em nossas escolas.", audioFront: "TTS: Cyberbullying", audioBack: "TTS: We must stop cyberbullying in our schools." },

                // --- Area 3: Irregular Plurals ---
                { term: "Children", definition: "The irregular plural of child.", defTrans: "crianças", example: "Many children use tablets at school.", exTrans: "Muitas crianças usam tablets na escola.", audioFront: "TTS: Children", audioBack: "TTS: Many children use tablets at school." },
                { term: "People", definition: "The irregular plural of person.", defTrans: "pessoas", example: "Many people spend too much time online.", exTrans: "Muitas pessoas passam tempo demais online.", audioFront: "TTS: People", audioBack: "TTS: Many people spend too much time online." },
                { term: "Feet", definition: "The irregular plural of foot.", defTrans: "pés", example: "My feet are tired from walking in the park.", exTrans: "Meus pés estão cansados de andar no parque.", audioFront: "TTS: Feet", audioBack: "TTS: My feet are tired from walking in the park." },
                { term: "Men", definition: "The plural of man.", defTrans: "homens", example: "The men are working on the new app.", exTrans: "Os homens estão trabalhando no novo aplicativo.", audioFront: "TTS: Men", audioBack: "TTS: The men are working on the new app." },
                { term: "Women", definition: "The plural of woman.", defTrans: "mulheres", example: "The women created a social movement online.", exTrans: "As mulheres criaram um movimento social online.", audioFront: "TTS: Women", audioBack: "TTS: The women created a social movement online." },
                { term: "Teeth", definition: "The plural of tooth.", defTrans: "dentes", example: "Brush your teeth while you listen to music.", exTrans: "Escove seus dentes enquanto ouve música.", audioFront: "TTS: Teeth", audioBack: "TTS: Brush your teeth while you listen to music." },
                { term: "Mice", definition: "The plural of mouse.", defTrans: "ratos / mouses", example: "There are two computer mice on the desk.", exTrans: "Há dois mouses de computador na mesa.", audioFront: "TTS: Mice", audioBack: "TTS: There are two computer mice on the desk." },
                { term: "Geese", definition: "The plural of goose.", defTrans: "gansos", example: "I saw some geese in the green space.", exTrans: "Eu vi alguns gansos no espaço verde.", audioFront: "TTS: Geese", audioBack: "TTS: I saw some geese in the green space." },
                { term: "Oxen", definition: "The plural of ox.", defTrans: "bois", example: "The farmers used oxen in the past.", exTrans: "Os fazendeiros usavam bois no passado.", audioFront: "TTS: Oxen", audioBack: "TTS: The farmers used oxen in the past." },
                { term: "Leaves", definition: "The plural of leaf.", defTrans: "folhas", example: "The leaves are falling in the neighborhood.", exTrans: "As folhas estão caindo na vizinhança.", audioFront: "TTS: Leaves", audioBack: "TTS: The leaves are falling in the neighborhood." },

                // --- Area 4: Phrasal Verbs with GET ---
                { term: "Get along (with)", definition: "To have a friendly relationship with someone.", defTrans: "dar-se bem (com)", example: "Do you get along with your followers?", exTrans: "Você se dá bem com seus seguidores?", audioFront: "TTS: Get along with", audioBack: "TTS: Do you get along with your followers?" },
                { term: "Get through", definition: "To survive or finish something difficult.", defTrans: "passar por / concluir", example: "We got through the weekend without internet.", exTrans: "Passamos o fim de semana sem internet.", audioFront: "TTS: Get through", audioBack: "TTS: We got through the weekend without internet." },
                { term: "Get up", definition: "To leave your bed after waking up.", defTrans: "levantar-se", example: "I get up early to check my messages.", exTrans: "Eu me levanto cedo para checar minhas mensagens.", audioFront: "TTS: Get up", audioBack: "TTS: I get up early to check my messages." },
                { term: "Get over", definition: "To recover from an illness, sadness, or a problem.", defTrans: "superar", example: "It took time to get over the negative comments.", exTrans: "Levou tempo para superar os comentários negativos.", audioFront: "TTS: Get over", audioBack: "TTS: It took time to get over the negative comments." },
                { term: "Get away (with)", definition: "To escape punishment for a mistake or go on vacation.", defTrans: "sair impune / escapar", example: "You can't post fake news and get away with it.", exTrans: "Você não pode postar notícias falsas e sair impune.", audioFront: "TTS: Get away with", audioBack: "TTS: You can't post fake news and get away with it." },
                { term: "Get together", definition: "To meet socially with other people.", defTrans: "reunir-se", example: "Friends get together after connecting online.", exTrans: "Amigos se reúnem depois de se conectarem online.", audioFront: "TTS: Get together", audioBack: "TTS: Friends get together after connecting online." },

                // --- Area 5: Phrases & Expressions (Exhaustive List) ---
                { term: "Let me check my feed", definition: "Used when you want to look at your updates.", defTrans: "Deixa eu checar meu feed", example: "Hold on, let me check my feed for a second.", exTrans: "Espere, deixe-me checar meu feed por um segundo.", audioFront: "TTS: Let me check my feed", audioBack: "TTS: Hold on, let me check my feed for a second." },
                { term: "Did you see my latest post?", definition: "Asking if someone saw your most recent content.", defTrans: "Você viu minha última postagem?", example: "Hey, did you see my latest post about the party?", exTrans: "Ei, você viu minha última postagem sobre a festa?", audioFront: "TTS: Did you see my latest post?", audioBack: "TTS: Hey, did you see my latest post about the party?" },
                { term: "How many followers...?", definition: "Asking about the quantity of subscribers.", defTrans: "Quantos seguidores...?", example: "How many followers does she have?", exTrans: "Quantos seguidores ela tem?", audioFront: "TTS: How many followers does she have?", audioBack: "TTS: How many followers does she have?" },
                { term: "I spend a lot of time on...", definition: "Indicating a high duration of use.", defTrans: "Eu passo muito tempo no...", example: "I spend a lot of time on Instagram watching stories.", exTrans: "Eu passo muito tempo no Instagram assistindo stories.", audioFront: "TTS: I spend a lot of time on", audioBack: "TTS: I spend a lot of time on Instagram watching stories." },
                { term: "Do you have any advice?", definition: "Asking for a recommendation or guide.", defTrans: "Você tem algum conselho?", example: "I want to grow my account. Do you have any advice for me?", exTrans: "Eu quero crescer minha conta. Você tem algum conselho para mim?", audioFront: "TTS: Do you have any advice for me?", audioBack: "TTS: I want to grow my account. Do you have any advice for me?" },
                { term: "Somebody tagged me", definition: "When someone identifies you in a photo or post.", defTrans: "Alguém me marcou", example: "Somebody tagged me in a photo at the party last night.", exTrans: "Alguém me marcou em uma foto na festa ontem à noite.", audioFront: "TTS: Somebody tagged me", audioBack: "TTS: Somebody tagged me in a photo at the party last night." },

                // --- Grammar: Prepositions & Quantifiers ---
                { term: "AT (Place)", definition: "Used for specific points or locations.", defTrans: "Pontos específicos", example: "Meet me at the bus stop.", exTrans: "Encontre-me no ponto de ônibus.", audioFront: "TTS: At for place", audioBack: "TTS: Meet me at the bus stop." },
                { term: "AT (Time)", definition: "Used for specific clock times.", defTrans: "Horas específicas", example: "I don't check notifications at night.", exTrans: "Eu não checo notificações à noite.", audioFront: "TTS: At for time", audioBack: "TTS: I don't check notifications at night." },
                { term: "IN (Place)", definition: "Countries, cities, enclosed spaces.", defTrans: "Países, cidades, espaços fechados", example: "She is in Brazil, in a room.", exTrans: "Ela está no Brasil, em uma sala.", audioFront: "TTS: In for place", audioBack: "TTS: She is in Brazil, in a room." },
                { term: "IN (Time)", definition: "Months, years, centuries.", defTrans: "Meses, anos, séculos", example: "I started using social media in 2010.", exTrans: "Eu comecei a usar redes sociais em 2010.", audioFront: "TTS: In for time", audioBack: "TTS: I started using social media in 2010." },
                { term: "ON (Place)", definition: "Used for surfaces and public transportation.", defTrans: "Superfícies e transporte público", example: "The photo is on the table. I am on the bus.", exTrans: "A foto está na mesa. Eu estou no ônibus.", audioFront: "TTS: On for place", audioBack: "TTS: The photo is on the table. I am on the bus." },
                { term: "ON (Time)", definition: "Days of the week, specific dates.", defTrans: "Dias da semana, datas específicas", example: "She uploaded the video on Monday.", exTrans: "Ela postou o vídeo na segunda-feira.", audioFront: "TTS: On for time", audioBack: "TTS: She uploaded the video on Monday." },
                { term: "Work (AT/IN/ON)", definition: "AT (Company), IN (Field/City), ON (Project).", defTrans: "Regras de trabalho", example: "He works at Google, in tech, on a project.", exTrans: "Ele trabalha no Google, em tecnologia, em um projeto.", audioFront: "TTS: Prepositions for work", audioBack: "TTS: He works at Google, in tech, on a project." },
                { term: "Uncountable Nouns", definition: "Nouns that cannot be counted individually (no plural).", defTrans: "Substantivos Incontáveis", example: "I have little information about that influencer.", exTrans: "Tenho pouca informação sobre aquela influenciadora.", audioFront: "TTS: Uncountable Nouns", audioBack: "TTS: I have little information about that influencer." },
                { term: "MANY vs MUCH", definition: "MANY (Countable), MUCH (Uncountable).", defTrans: "Contáveis vs Incontáveis", example: "Many followers, much content.", exTrans: "Muitos seguidores, muito conteúdo.", audioFront: "TTS: Many versus Much", audioBack: "TTS: Many followers, much content." },
                { term: "A FEW vs A LITTLE", definition: "Positive small amount: A FEW (Countable), A LITTLE (Uncountable).", defTrans: "Alguns vs Um pouco (Positivo)", example: "A few friends and a little advice.", exTrans: "Alguns amigos e um pouco de conselho.", audioFront: "TTS: A few versus A little", audioBack: "TTS: A few friends and a little advice." },
                { term: "FEW vs LITTLE", definition: "Negative idea (not enough): FEW (Countable), LITTLE (Uncountable).", defTrans: "Poucos vs Pouco (Negativo)", example: "Few people know her and there is little privacy.", exTrans: "Poucas pessoas a conhecem e há pouca privacidade.", audioFront: "TTS: Few versus Little", audioBack: "TTS: Few people know her and there is little privacy." },
                { term: "ANY- compounds", definition: "Used in negative sentences and questions.", defTrans: "Usado em negativas e perguntas", example: "I didn't see anyone. Is there anything interesting?", exTrans: "Eu não vi ninguém. Tem algo interessante?", audioFront: "TTS: Any compounds", audioBack: "TTS: I didn't see anyone. Is there anything interesting?" },
                { term: "EVERY- compounds", definition: "Refers to all people or things in a group.", defTrans: "Refere-se a todos", example: "Everyone is online at school right now.", exTrans: "Todo mundo está online na escola agora.", audioFront: "TTS: Every compounds", audioBack: "TTS: Everyone is online at school right now." }

                
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Complete & Paginated)
    // ======================================================
    glossary: [
        // TOPIC 1: CONTEXT
        { topic: "Context", term: "post", definition: "To publish content on a social media site.", translation: "postar" },
        { topic: "Context", term: "story", definition: "A feature where content disappears after 24 hours.", translation: "story / história" },
        { topic: "Context", term: "profile", definition: "A user's personal page or identity on a platform.", translation: "perfil" },
        { topic: "Context", term: "content", definition: "Information or images shared on digital platforms.", translation: "conteúdo" },
        { topic: "Context", term: "scroll-through", definition: "To move through content on a screen.", translation: "rolar (a tela)" },
        { topic: "Context", term: "feed", definition: "A list of newly updated content on a platform.", translation: "feed / linha do tempo" },
        { topic: "Context", term: "community", definition: "A group of people with a trait in common.", translation: "comunidade" },
        { topic: "Context", term: "that-makes-sense", definition: "Used to say that something is logical.", translation: "isso faz sentido" },
        { topic: "Context", term: "follower", definition: "People who subscribe to someone's updates on social media.", translation: "seguidor" },
        { topic: "Context", term: "pros-and-cons", definition: "The advantages and disadvantages of something.", translation: "prós e contras" },
        { topic: "Context", term: "millions", definition: "A very large number, often used to describe followers.", translation: "milhões" },
        { topic: "Context", term: "initiative", definition: "A new plan or process to achieve something.", translation: "iniciativa" },
        { topic: "context", term: "always", definition: "At all times; on all occasions.", translation: "sempre" },
        { topic: "Context", term: "waste", definition: "To use something carelessly or without purpose.", translation: "desperdiçar" },
        { topic: "Context", term: "challenge", definition: "A task or situation that tests someone's abilities.", translation: "desafio" },
        {
    topic: "Context", 
    term: "hashtag-era", 
    definition: "A term referring to the current period dominated by social media interaction.", 
    translation: "era das hashtags" 
},
{ 
    topic: "Context", 
    term: "career", 
    definition: "An occupation undertaken for a significant period of a person's life.", 
    translation: "carreira" 
},
{ 
    topic: "Context", 
    term: "how-important-is", 
    definition: "An expression used to ask about the degree of significance of something.", 
    translation: "quão importante é" 
},
{ 
    topic: "Context", 
    term: "in-my-opinion", 
    definition: "Used to introduce a personal belief or judgment.", 
    translation: "na minha opinião" 
},
{ 
    topic: "Context", 
    term: "whatever", 
    definition: "Used to emphasize a lack of restriction in referring to any thing or amount.", 
    translation: "o que quer que seja" 
},
{ 
    topic: "Context", 
    term: "company", 
    definition: "A commercial business or organization.", 
    translation: "empresa" 
},
{ 
    topic: "Context", 
    term: "commented", 
    definition: "The act of expressing an opinion or reaction in writing on a post.", 
    translation: "comentou" 
},
{ 
    topic: "Context", 
    term: "go-viral", 
    definition: "To become very popular very quickly on the internet.", 
    translation: "viralizar" 
},
{ 
    topic: "Context", 
    term: "information", 
    definition: "Facts provided or learned about something or someone.", 
    translation: "informação" 
},
{ 
    topic: "Context", 
    term: "app", 
    definition: "Short for application; software designed for a specific purpose on a mobile device.", 
    translation: "aplicativo" 
},
{ 
    topic: "Context", 
    term: "feature", 
    definition: "A distinctive attribute or aspect of a software or platform.", 
    translation: "recurso / funcionalidade" 
},
{ 
    topic: "Context", 
    term: "friend", 
    definition: "A person with whom one has a bond of mutual affection.", 
    translation: "amigo(a)" 
},
{ 
    topic: "Context", 
    term: "park", 
    definition: "A large public garden or area of land used for recreation.", 
    translation: "parque" 
},
{ 
    topic: "Context", 
    term: "traffic", 
    definition: "The messages or data transmitted through a network; also congestion.", 
    translation: "tráfego / trânsito" 
},


        // TOPIC 2: SOCIAL MEDIA
        { topic: "Social Media", term: "internet", definition: "A global network connecting millions of computers.", translation: "internet" },
        { topic: "Social Media", term: "platform", definition: "A base of technologies on which apps are built.", translation: "plataforma" },
        { topic: "Social Media", term: "account", definition: "A personal profile on a digital service.", translation: "conta" },
        { topic: "Social Media", term: "influencer", definition: "A person with the ability to influence public opinion.", translation: "influenciador(a)" },
        { topic: "Social Media", term: "hashtag", definition: "A word preceded by '#' to identify a topic.", translation: "hashtag" },
        { topic: "Social Media", term: "video", definition: "A recording of moving visual images.", translation: "vídeo" },
        { topic: "Social Media", term: "photo", definition: "A picture made using a camera.", translation: "foto" },
        { topic: "Social Media", term: "meme", definition: "A humorous image or text spread rapidly online.", translation: "meme" },
        { topic: "Social Media", term: "privacy", definition: "The state of being free from public attention.", translation: "privacidade" },
        { topic: "Social Media", term: "fake-news", definition: "False information circulated as news.", translation: "notícias falsas" },
        { topic: "Social Media", term: "cyberbullying", definition: "Using digital communication to bully or intimidate.", translation: "cyberbullying" },
        { topic: "Social Media", term: "addiction", definition: "Physical and mental dependence on something.", translation: "vício" },
        { topic: "Social Media", term: "upload", definition: "To transfer data from a local device to the internet.", translation: "carregar / enviar" },
        { topic: "Social Media", term: "download", definition: "To copy data from the internet to a local device.", translation: "baixar" },
        { topic: "Social Media", term: "comment", definition: "To express an opinion in writing on a post.", translation: "comentar" },

        { 
    topic: "Social Media", 
    term: "like", 
    definition: "To show approval of a post digitally.", 
    translation: "curtir" 
},
{ 
    topic: "Social Media", 
    term: "follow", 
    definition: "To subscribe to someone's updates on social media.", 
    translation: "seguir" 
},
{ 
    topic: "Social Media", 
    term: "unfollow", 
    definition: "To stop following an account on a social media platform.", 
    translation: "deixar de seguir" 
},
{ 
    topic: "Social Media", 
    term: "connect", 
    definition: "To join or link together; to establish a communication link.", 
    translation: "conectar" 
},
{ 
    topic: "Social Media", 
    term: "interact", 
    definition: "To communicate or be involved with others digitally.", 
    translation: "interagir" 
},

        // TOPIC 3: PLURALS & PHRASAL VERBS
        { topic: "Plurals", term: "children", definition: "The irregular plural of child.", translation: "crianças" },
        { topic: "Plurals", term: "people", definition: "The irregular plural of person.", translation: "pessoas" },
        { topic: "Plurals", term: "feet", definition: "The irregular plural of foot.", translation: "pés" },
        { topic: "Plurals", term: "leaves", definition: "The irregular plural of leaf.", translation: "folhas" },
        { 
    topic: "Plurals", 
    term: "teeth", 
    definition: "The irregular plural form of 'tooth'.", 
    translation: "dentes" 
},
{ 
    topic: "Plurals", 
    term: "mice", 
    definition: "The irregular plural form of 'mouse'.", 
    translation: "ratos" 
},
{ 
    topic: "Plurals", 
    term: "geese", 
    definition: "The irregular plural form of 'goose'.", 
    translation: "gansos" 
},
{ 
    topic: "Plurals", 
    term: "oxen", 
    definition: "The irregular plural form of 'ox'.", 
    translation: "bois" 
},
{ 
    topic: "Phrasals", 
    term: "get-back", 
    definition: "To return to a place or a state, such as being back online.", 
    translation: "voltar / retornar" 
},
{ 
    topic: "Phrasals", 
    term: "get-through", 
    definition: "To survive or finish something difficult.", 
    translation: "passar por / concluir" 
},
        { topic: "Phrasals", term: "get-up", definition: "To leave your bed after waking up.", translation: "levantar-se" },
        { topic: "Phrasals", term: "get-along-with", definition: "To have a friendly relationship with someone.", translation: "dar-se bem (com)" },
        { topic: "Phrasals", term: "get-over", definition: "To recover from an illness or problem.", translation: "superar / recuperar-se" },
        { topic: "Phrasals", term: "get-together", definition: "To meet socially.", translation: "reunir-se" },
        { topic: "Phrasals", term: "get-away-with", definition: "To escape punishment for an action.", translation: "sair impune" },
        { topic: "Phrasals", term: "get-away", definition: "To go on vacation or escape.", translation: "sair / escapar" },
        { topic: "Phrasals", term: "get-away-from", definition: "To escape from a place or situation.", translation: "escapar de" },

        // TOPIC 4: GRAMMAR
        { topic: "Grammar", term: "at-place", definition: "Preposition used for specific points or addresses.", translation: "em / no / na" },
        { 
    topic: "Grammar", 
    term: "in-place", 
    definition: "Preposition used for larger areas like cities, countries, or enclosed spaces.", 
    translation: "em / no / na" 
},
{ 
    topic: "Grammar", 
    term: "on-place", 
    definition: "Preposition used for surfaces, lines, and digital screens/platforms.", 
    translation: "em / no / na" 
},
{ 
    topic: "Grammar", 
    term: "at-time", 
    definition: "Preposition used for specific clock times and exact points in time like 'at night'.", 
    translation: "às / no / na" 
},
{ 
    topic: "Grammar", 
    term: "in-time", 
    definition: "Preposition used for months, years, seasons, and parts of the day.", 
    translation: "em / no / na" 
},
{ 
    topic: "Grammar", 
    term: "on-time", 
    definition: "Preposition used for specific days of the week and dates.", 
    translation: "em / no / na" 
},
        { topic: "Grammar", term: "irregular-plural", definition: "Nouns that do not follow the regular plural '-s' pattern.", translation: "plurais irregulares" },
        { topic: "Grammar", term: "phrasal-verbs", definition: "Verbs combined with prepositions or adverbs that create new meanings.", translation: "phrasal verbs" },
        { topic: "Grammar", term: "indefinite-pronouns", definition: "Words that refer to non-specific people or things (somebody, anything, etc).", translation: "pronomes indefinidos" },
        { topic: "Grammar", term: "prepositions-of-place-and-time", definition: "Words that show relationships of place and time (at, in, on).", translation: "preposições de lugar e tempo" },
        { topic: "Grammar", term: "countable-nouns", definition: "Nouns that can be counted and have plural forms.", translation: "substantivos contáveis" },
        { topic: "Grammar", term: "uncountable-nouns", definition: "Nouns that cannot be counted individually.", translation: "substantivos incontáveis" },
        { topic: "Grammar", term: "quantifiers", definition: "Words used to express quantity (many, much, etc).", translation: "quantificadores" },
        { topic: "Grammar", term: "somebody", definition: "An unspecified person in affirmative sentences.", translation: "alguém" },
        { topic: "Grammar", term: "anything", definition: "Indefinite pronoun used in questions or negatives.", translation: "qualquer coisa / nada" },
        { topic: "Grammar", term: "everyone", definition: "All people in a group; uses a singular verb.", translation: "todo mundo" },
        { 
    topic: "Grammar", 
    term: "many-vs-much", 
    definition: "Quantifier rule: MANY for countable items; MUCH for uncountable items.", 
    translation: "muitos vs muito" 
},
{ 
    topic: "Grammar", 
    term: "a-few", 
    definition: "Quantifier used with countable nouns to indicate a positive small amount.", 
    translation: "alguns / algumas" 
},
{ 
    topic: "Grammar", 
    term: "a-little", 
    definition: "Quantifier used with uncountable nouns to indicate a positive small amount.", 
    translation: "um pouco de" 
},
{ 
    topic: "Grammar", 
    term: "few", 
    definition: "Quantifier used with countable nouns to indicate not many, implying a problem.", 
    translation: "poucos / poucas" 
},
{ 
    topic: "Grammar", 
    term: "little", 
    definition: "Quantifier used with uncountable nouns to indicate not much, implying a problem.", 
    translation: "pouco / quase nada" 
},
{ 
    topic: "Grammar", 
    term: "some-compound", 
    definition: "Indefinite pronouns (like somebody) used in affirmative sentences and offers.", 
    translation: "compostos de SOME" 
},
{ 
    topic: "Grammar", 
    term: "no-compound", 
    definition: "Indefinite pronouns (like nobody) used in affirmative sentences to give a negative meaning.", 
    translation: "compostos de NO" 
},
{ 
    topic: "Grammar", 
    term: "every-compound", 
    definition: "Indefinite pronouns (like everyone) that refer to all; uses a singular verb.", 
    translation: "compostos de EVERY" 
},
        { topic: "Grammar", term: "any-compound", definition: "Words like anyone/anything used in negatives/questions.", translation: "compostos de ANY" }
    ]
});