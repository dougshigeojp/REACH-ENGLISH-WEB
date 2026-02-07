/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */

window.initExercise({
    id: "7-1-2",
    grade: "7th Grade",
    bimester: "1",
    chapter: "2",
    title: "Daily Routine and Digital Life",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES ---
        1: [
            { words: ["posting", "am", "a", "I", "photo", "right", "now"], correct: "I am posting a photo right now" },
            { words: ["usually", "checks", "feed", "She", "her", "the", "morning", "in"], correct: "She usually checks her feed in the morning" },
            { words: ["is", "uploading", "He", "a", "video", "new"], correct: "He is uploading a new video" },
            { words: ["don't", "I", "fake", "share", "news"], correct: "I don't share fake news" },
            { words: ["using", "Are", "you", "laptop", "your"], correct: "Are you using your laptop" },
            { words: ["at", "night", "We", "chat", "online"], correct: "We chat online at night" },
            { words: ["doesn't", "She", "use", "TikTok"], correct: "She doesn't use TikTok" },
            { words: ["are", "tagging", "They", "friends", "their"], correct: "They are tagging their friends" },
            { words: ["Monday", "on", "I", "post", "stories"], correct: "I post stories on Monday" },
            { words: ["is", "loading", "The", "file"], correct: "The file is loading" },
            { words: ["at", "7:00 AM", "wake", "up", "I"], correct: "I wake up at 7:00 AM" },
            { words: ["watching", "am", "I", "a", "funny", "meme"], correct: "I am watching a funny meme" },
            { words: ["often", "How", "you", "do", "post"], correct: "How often do you post" },
            { words: ["not", "listening", "am", "I"], correct: "I am not listening" },
            { words: ["usually", "play", "We", "games", "Friday", "on"], correct: "We usually play games on Friday" },
            { words: ["smartphone", "uses", "her", "She", "for", "everything"], correct: "She uses her smartphone for everything" },
            { words: ["is", "calling", "mom", "My", "me"], correct: "My mom is calling me" },
            { words: ["school", "starts", "at", "8:00 AM"], correct: "School starts at 8:00 AM" },
            { words: ["checking", "is", "he", "his", "notifications"], correct: "Is he checking his notifications" },
            { words: ["May", "in", "birthday", "is", "My"], correct: "My birthday is in May" },
            { words: ["download", "Can", "the", "game", "you"], correct: "Can you download the game" },
            { words: ["blocked", "He", "the", "spam", "account"], correct: "He blocked the spam account" },
            { words: ["are", "chatting", "We", "right", "now"], correct: "We are chatting right now" },
            { words: ["doesn't", "like", "brother", "My", "Instagram"], correct: "My brother doesn't like Instagram" },
            { words: ["night", "browse", "at", "I", "internet", "the"], correct: "I browse the internet at night" },
            { words: ["recording", "is", "she", "a", "story"], correct: "Is she recording a story" },
            { words: ["send", "me", "a", "message", "Please"], correct: "Please send me a message" },
            { words: ["always", "online", "is", "He"], correct: "He is always online" },
            { words: ["usually", "I", "check", "feed", "my"], correct: "I usually check my feed" },
            { words: ["at", "the", "moment", "watching", "is", "TV", "She"], correct: "She is watching TV at the moment" },
            { words: ["do", "like", "you", "TikTok"], correct: "Do you like TikTok" },
            { words: ["working", "is", "wifi", "The", "not"], correct: "The wifi is not working" },
            { words: ["afternoon", "the", "in", "We", "study"], correct: "We study in the afternoon" },
            { words: ["your", "profile", "picture", "is", "cool"], correct: "Your profile picture is cool" },
            { words: ["followers", "She", "has", "many"], correct: "She has many followers" },
            { words: ["recording", "are", "we", "a", "video"], correct: "Are we recording a video" },
            { words: ["October", "in", "birthday", "her", "is"], correct: "Her birthday is in October" },
            { words: ["looking", "am", "I", "at", "your", "post"], correct: "I am looking at your post" },
            { words: ["often", "do", "post", "you", "stories", "how"], correct: "How often do you post stories" },
            { words: ["offline", "I", "am", "on", "weekends"], correct: "I am offline on weekends" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES ---
        2: [
            { lines: ["I am posting a photo on Instagram.", "Hi Celine! What are you doing?", "That's cool! I usually check my feed in the morning.", "Me too, but I am busy right now."], order: [1, 0, 2, 3] },
            { lines: ["It is 'Student123'.", "Do you have the wifi password?", "Thanks! I need to upload my homework.", "You're welcome. Are you using your laptop?"], order: [1, 0, 2, 3] },
            { lines: ["No, I'm watching a video. LOL!", "Are you studying, Celine?", "Is it funny?", "Yes, look at this cat meme!"], order: [1, 0, 2, 3] },
            { lines: ["I usually go online at 7 PM.", "When do you usually go online?", "Do you chat with friends then?", "Yes, we chat on WhatsApp every night."], order: [1, 0, 2, 3] },
            { lines: ["He is a digital influencer now.", "Did you see that video of the dancing dog?", "Yes! It is going viral right now.", "Wow! Look at the views."], order: [1, 2, 3, 0] },
            { lines: ["I post new photos every week.", "How often do you post on Instagram?", "Do you tag your friends?", "Yes, I always tag my best friends."], order: [1, 0, 2, 3] },
            { lines: ["I am sending the file now.", "Are you using your smartphone?", "No, I am using my laptop for homework.", "Great, thanks for the help!"], order: [1, 2, 0, 3] },
            { lines: ["I study English in the afternoon.", "What do you usually do in the afternoon?", "Are you studying right now?", "No, I am checking my notifications."], order: [1, 0, 2, 3] },
            { lines: ["Because I prefer Instagram.", "Do you use Twitter, Albert?", "No, I don't.", "Why not?"], order: [1, 2, 3, 0] },
            { lines: ["She is recording a story for TBT.", "Where is Sarah?", "Is she online?", "Yes, look at her profile."], order: [1, 2, 3, 0] },
            { lines: ["I need water, BRB.", "What are you doing?", "I am playing online games.", "Okay, I will wait for you."], order: [1, 2, 0, 3] },
            { lines: ["I don't know (IDK) the answer.", "Can you help me with this app?", "Is it difficult to use?", "Yes, I am trying to login."], order: [1, 0, 2, 3] },
            { lines: ["At 9:00 PM.", "When do you usually sleep?", "Are you tired now?", "Yes, I am going to sleep."], order: [1, 0, 2, 3] },
            { lines: ["It disappears in 24 hours.", "Did you see my story?", "Not yet. Is it still online?", "Yes, but check it fast!"], order: [1, 2, 3, 0] },
            { lines: ["I am blocking it right now.", "This account is sending spam.", "That is annoying. Are you blocking it?", "Good idea. I hate spam."], order: [1, 2, 0, 3] },
            { lines: ["On Saturdays.", "When do you usually post photos?", "Do you get many likes?", "Yes, my followers are very nice."], order: [1, 0, 2, 3] },
            { lines: ["Because I am at school.", "Why are you offline?", "Do you check your phone at lunch?", "Yes, I check my feed then."], order: [1, 0, 2, 3] },
            { lines: ["I am downloading a new game.", "What are you doing on your tablet?", "Is the download fast?", "No, it is moving very slowly."], order: [1, 0, 2, 3] },
            { lines: ["In January.", "When is your birthday?", "Is there a party on your birthday?", "Yes, usually on the weekend."], order: [1, 0, 2, 3] },
            { lines: ["I am scrolling through my feed.", "You look busy, Celine.", "Are you looking for news?", "No, just looking at photos."], order: [1, 0, 2, 3] },
            { lines: ["He is tagging me in a meme.", "Why is your phone ringing?", "Is it a message from Albert?", "Yes, it's a funny notification."], order: [1, 2, 3, 0] },
            { lines: ["I unfollow boring pages.", "You have few followers. Why?", "Do you like my profile?", "Yes, your photos are great."], order: [1, 0, 2, 3] },
            { lines: ["No, I am offline on weekends.", "Do you study on Sunday?", "What do you do then?", "I usually play in the park."], order: [1, 0, 2, 3] },
            { lines: ["Oh, My God (OMG)! Look at this!", "What happened?", "The video has one million views.", "That is incredible!"], order: [0, 1, 2, 3] },
            { lines: ["No, I'm checking my email.", "Are you recording a video?", "Is it for your teacher?", "Yes, I am sending my homework."], order: [1, 0, 2, 3] },
            { lines: ["I usually wake up at 6 AM.", "How do you wake up so early?", "I use my smartphone alarm.", "I prefer to wake up at 8 AM."], order: [1, 0, 2, 3] },
            { lines: ["No, I don't like cyberbullying.", "Do you comment on every post?", "Me neither. I only post nice things.", "That is a good habit."], order: [1, 0, 2, 3] },
            { lines: ["I am using my laptop.", "Where is your smartphone?", "It is charging in my bedroom.", "Do you need it now?"], order: [1, 2, 0, 3] },
            { lines: ["Every morning.", "How often do you check notifications?", "Do you have many apps?", "Yes, I have twenty apps."], order: [1, 0, 2, 3] },
            { lines: ["He is browsing the internet.", "What is your brother doing?", "Is he studying for the test?", "No, he usually studies at night."], order: [1, 0, 2, 3] },
            { lines: ["I'm watching a movie on my tablet.", "Where are you?", "In the living room. What are you doing?", "I am reading a book."], order: [1, 2, 0, 3] },
            { lines: ["No, the wifi isn't working.", "Are you online?", "That is bad. Are you using data?", "Yes, but it is very slow."], order: [1, 0, 2, 3] },
            { lines: ["In May.", "When do you have holidays?", "Do you travel then?", "Yes, I usually go to the beach."], order: [1, 0, 2, 3] },
            { lines: ["I am editing a photo for Instagram.", "You look very concentrated.", "Are you using a new app?", "Yes, it has cool filters."], order: [1, 0, 2, 3] },
            { lines: ["I'm tagging my friends in a photo.", "What's up?", "Cool! Is it from the party?", "Yes, look at Albert's face!"], order: [1, 0, 2, 3] },
            { lines: ["I usually play on Friday night.", "When do you play video games?", "Are you playing right now?", "No, I'm doing my homework."], order: [1, 0, 2, 3] },
            { lines: ["He is downloading a big file.", "Why is the computer slow?", "Is it a movie?", "Yes, it is for his project."], order: [1, 0, 2, 3] },
            { lines: ["I check notifications immediately.", "You are a digital native!", "Do you like technology?", "Yes, I love my smartphone."], order: [0, 1, 2, 3] },
            { lines: ["No, I'm watching a documentary.", "Are you gaming again?", "Is it for school?", "Yes, it is about the world."], order: [1, 0, 2, 3] },
            { lines: ["At 10 PM.", "When do you go offline?", "Do you sleep well?", "Yes, I leave my phone in the kitchen."], order: [1, 0, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS ---
        3: [
            { q: "Are you posting a photo now?", options: ["Yes, I am.", "Yes, I posting.", "Yes, I am post.", "Yes, I am posting now yes."], a: "Yes, I am." },
            { q: "Does she use Instagram every day?", options: ["Yes, she does.", "Yes, she using.", "Yes, she do.", "Yes, she uses every day yes."], a: "Yes, she does." },
            { q: "Is the wifi working at the moment?", options: ["No, it isn't.", "No, it not working.", "No, it don't.", "No, it aren't."], a: "No, it isn't." },
            { q: "Do they share fake news?", options: ["No, they don't.", "No, they isn't.", "No, they not share.", "No, they doesn't."], a: "No, they don't." },
            { q: "Am I chatting with you right now?", options: ["Yes, you are.", "Yes, you am.", "Yes, you is.", "Yes, you chatting."], a: "Yes, you are." },
            { q: "Is he uploading a video today?", options: ["Yes, he is.", "Yes, he does.", "Yes, he upload.", "Yes, he uploading."], a: "Yes, he is." },
            { q: "Do you wake up at 7 AM?", options: ["Yes, I do.", "Yes, I am.", "Yes, I wakes up.", "Yes, me do."], a: "Yes, I do." },
            { q: "Are we recording a story now?", options: ["Yes, we are.", "Yes, we is.", "Yes, us are.", "Yes, we does."], a: "Yes, we are." },
            { q: "Does your phone have many apps?", options: ["Yes, it does.", "Yes, it have.", "Yes, it has.", "Yes, it do."], a: "Yes, it does." },
            { q: "Is Sarah scrolling through her feed?", options: ["No, she isn't.", "No, she don't.", "No, she doesn't.", "No, she not scrolling."], a: "No, she isn't." },
            { q: "Do you usually play games on Friday?", options: ["Yes, I do.", "Yes, I am.", "Yes, I usually playing.", "Yes, me usually do."], a: "Yes, I do." },
            { q: "Are the notifications turned on?", options: ["Yes, they are.", "Yes, it is.", "Yes, they is.", "Yes, them are."], a: "Yes, they are." },
            { q: "Does he block spam accounts?", options: ["Yes, he does.", "Yes, he blocks.", "Yes, he is.", "Yes, him does."], a: "Yes, he does." },
            { q: "Is it raining in the morning?", options: ["No, it isn't.", "No, it don't.", "No, it not.", "No, it am not."], a: "No, it isn't." },
            { q: "Do we have school on Sundays?", options: ["No, we don't.", "No, we aren't.", "No, we hasn't.", "No, us don't."], a: "No, we don't." },
            { q: "Are you checking your email at night?", options: ["Yes, I am.", "Yes, I do.", "Yes, I is.", "Yes, me am."], a: "Yes, I am." },
            { q: "Does your birthday fall in May?", options: ["Yes, it does.", "Yes, it is.", "Yes, it in May.", "Yes, it do."], a: "Yes, it does." },
            { q: "Is Albert sending the file now?", options: ["Yes, he is.", "Yes, he does.", "Yes, he sending.", "Yes, him is."], a: "Yes, he is." },
            { q: "Do you like watching funny memes?", options: ["Yes, I do.", "Yes, I am.", "Yes, me like.", "Yes, I likes."], a: "Yes, I do." },
            { q: "Are they following the influencer?", options: ["Yes, they are.", "Yes, they follow.", "Yes, them are.", "Yes, they is."], a: "Yes, they are." },
            { q: "What are you doing?", options: ["I am posting a story.", "I post a story usually.", "Today is Tuesday.", "My name is Celine."], a: "I am posting a story." },
            { q: "When do you check your feed?", options: ["I check it in the morning.", "I am checking it right now.", "It is a smartphone.", "Yes, I do."], a: "I check it in the morning." },
            { q: "Are you online?", options: ["Yes, my green dot is on.", "No, I am a laptop.", "I have twenty followers.", "LOL!"], a: "Yes, my green dot is on." },
            { q: "Do you have the wifi password?", options: ["Yes, it is 'Password123'.", "I am using my smartphone.", "It is in October.", "No, I am offline."], a: "Yes, it is 'Password123'." },
            { q: "What does 'LOL' mean?", options: ["It means I am laughing.", "It is a new tablet.", "I usually check it at night.", "On Monday."], a: "It means I am laughing." },
            { q: "Why is he blocked?", options: ["Because he sends spam.", "He is my brother.", "At 8 o'clock.", "Yes, he is."], a: "Because he sends spam." },
            { q: "Is your laptop new?", options: ["Yes, the screen is big.", "No, I am watching a video.", "I check it in January.", "Thanks!"], a: "Yes, the screen is big." },
            { q: "How often do you post?", options: ["I post twice a week.", "I am posting now.", "My phone is black.", "On the desk."], a: "I post twice a week." },
            { q: "What is she doing on her tablet?", options: ["She is downloading an app.", "She usually plays games.", "In the living room.", "Her name is Sara."], a: "She is downloading an app." },
            { q: "Are you using your smartphone for homework?", options: ["No, I'm using my laptop.", "Yes, I wake up at 7.", "My feed is full.", "BRB!"], a: "No, I'm using my laptop." },
            { q: "Is the video viral?", options: ["Yes, it has millions of views.", "No, it is in English.", "I am tagging you.", "In the morning."], a: "Yes, it has millions of views." },
            { q: "When do you usually browse the internet?", options: ["I browse it at night.", "Yes, I do.", "My smartphone is new.", "It is an app."], a: "I browse it at night." },
            { q: "Do you like TikTok?", options: ["Yes, the videos are funny.", "I am recording a video.", "In July.", "No, I'm not."], a: "Yes, the videos are funny." },
            { q: "What is in your hand?", options: ["My smartphone.", "I am chatting.", "At lunch.", "Usually."], a: "My smartphone." },
            { q: "Is he always online?", options: ["Yes, he never goes offline.", "No, he is a digital native.", "He has a laptop.", "In 2025."], a: "Yes, he never goes offline." },
            { q: "Can you send me the link?", options: ["Sure, I'm sending it now.", "I usually post stories.", "My profile is private.", "OMG!"], a: "Sure, I'm sending it now." },
            { q: "Are you tagging me?", options: ["Yes, look at your notification.", "I have ten friends.", "At school.", "No, I am not tagging."], a: "Yes, look at your notification." },
            { q: "What is that notification?", options: ["It is a message from Mom.", "I check my phone often.", "It is on Monday.", "I am busy."], a: "It is a message from Mom." },
            { q: "Do you use your laptop at night?", options: ["No, I prefer my smartphone.", "Yes, I am using it now.", "My laptop is on the desk.", "In the morning."], a: "No, I prefer my smartphone." },
            { q: "Are we busy right now?", options: ["Yes, we are studying.", "We usually study in the afternoon.", "The wifi is working.", "LOL!"], a: "Yes, we are studying." }
        ],

       // --- TYPE 4: FIND MEANING (40 items) ---
        4: [
            { sent: "I usually **post** photos every day.", word: "post", options: ["Postar", "Apagar", "Curtir", "Seguir"], a: "Postar", def: "To publish a message or image on social media." },
            { sent: "Please **share** this video.", word: "share", options: ["Bloquear", "Compartilhar", "Comentar", "Carregar"], a: "Compartilhar", def: "To repost or send content to others." },
            { sent: "Did you **like** my picture?", word: "like", options: ["Curtir", "Marcar", "Baixar", "Enviar"], a: "Curtir", def: "To show approval of content by clicking a button." },
            { sent: "Don't forget to **comment**.", word: "comment", options: ["Seguir", "Comentar", "Postar", "Olhar"], a: "Comentar", def: "To write a response or opinion on a post." },
            { sent: "I **follow** many singers.", word: "follow", options: ["Sigo", "Deixo de seguir", "Bloqueio", "Marco"], a: "Sigo", def: "To subscribe to someone's updates on social media." },
            { sent: "I **unfollow** boring pages.", word: "unfollow", options: ["Sigo", "Deixo de seguir", "Comento", "Compartilho"], a: "Deixo de seguir", def: "To stop subscribing to someone's updates." },
            { sent: "**Tag** me in the photo.", word: "tag", options: ["Marcar", "Bloquear", "Postar", "Curtir"], a: "Marcar", def: "To link a person's profile to a photo or post." },
            { sent: "I am **uploading** a video.", word: "uploading", options: ["Baixando", "Carregando/Subindo", "Apagando", "Comentando"], a: "Carregando/Subindo", def: "To transfer data from your device to the internet." },
            { sent: "You can **download** the game.", word: "download", options: ["Baixar", "Subir", "Marcar", "Seguir"], a: "Baixar", def: "To transfer data from the internet to your device." },
            { sent: "I am going to **send** a message.", word: "send", options: ["Receber", "Enviar", "Bloquear", "Ler"], a: "Enviar", def: "To cause a message to go to a destination." },
            { sent: "We often **chat** online.", word: "chat", options: ["Estudamos", "Conversamos/Batemos papo", "Trabalhamos", "Dormimos"], a: "Conversamos/Batemos papo", def: "To exchange messages online in real-time." },
            { sent: "He **blocked** the account.", word: "blocked", options: ["Seguiu", "Bloqueou", "Marcou", "Curtiu"], a: "Bloqueou", def: "To prevent a user from contacting you or seeing your content." },
            { sent: "Your **profile** picture is cool!", word: "profile", options: ["Perfil", "Mensagem", "Foto", "Conta"], a: "Perfil", def: "A user's personal page containing their information." },
            { sent: "I am scrolling through my **feed**.", word: "feed", options: ["Perfil", "Feed (Linha do tempo)", "Galeria", "Configurações"], a: "Feed (Linha do tempo)", def: "The stream of content you see from accounts you follow." },
            { sent: "I watched her **story**.", word: "story", options: ["História/Story", "Perfil", "Mensagem", "Aplicativo"], a: "História/Story", def: "A photo or video visible for only 24 hours." },
            { sent: "I have a new **message**.", word: "message", options: ["Notificação", "Mensagem", "Chamada", "Hashtag"], a: "Mensagem", def: "A private communication sent between users." },
            { sent: "Use the **hashtag** #summer.", word: "hashtag", options: ["Etiqueta", "Hashtag", "Título", "Link"], a: "Hashtag", def: "A word preceded by a hash sign (#) to identify a topic." },
            { sent: "Turn on the **notifications**.", word: "notifications", options: ["Sons", "Notificações", "Luzes", "Atualizações"], a: "Notificações", def: "An alert informing you about activity on your account." },
            { sent: "Create a new **account**.", word: "account", options: ["Foto", "Conta", "Senha", "Nome"], a: "Conta", def: "A user's registration and presence on a platform." },
            { sent: "She has many **followers**.", word: "followers", options: ["Amigos", "Seguidores", "Postagens", "Curtidas"], a: "Seguidores", def: "Someone who subscribes to your account." },
            { sent: "He is a famous **influencer**.", word: "influencer", options: ["Professor", "Influenciador", "Atleta", "Cantor"], a: "Influenciador", def: "A person who can influence others' opinions or purchases." },
            { sent: "This cat **meme** is hilarious!", word: "meme", options: ["Meme", "Vídeo", "Desenho", "Texto"], a: "Meme", def: "A humorous image or video spread rapidly online." },
            { sent: "I use my **smartphone** for everything.", word: "smartphone", options: ["Computador", "Smartphone/Celular", "Tablet", "Relógio"], a: "Smartphone/Celular", def: "A mobile phone that performs many computer functions." },
            { sent: "The **tablet** has a big screen.", word: "tablet", options: ["Celular", "Tablet", "Notebook", "Monitor"], a: "Tablet", def: "A portable computer with a touchscreen display." },
            { sent: "I do homework on my **laptop**.", word: "laptop", options: ["Notebook/Laptop", "Celular", "Televisão", "Rádio"], a: "Notebook/Laptop", def: "A computer that is portable and suitable for travel." },
            { sent: "Is there **wifi** here?", word: "wifi", options: ["Bateria", "Wi-fi (Internet sem fio)", "Tomada", "Sinal"], a: "Wi-fi (Internet sem fio)", def: "A facility allowing devices to connect to the internet wirelessly." },
            { sent: "Sara is **online** now.", word: "online", options: ["Dormindo", "Conectada/Online", "Estudando", "Offline"], a: "Conectada/Online", def: "Connected to the internet." },
            { sent: "I am **offline** on weekends.", word: "offline", options: ["Conectado", "Desconectado/Offline", "Brincando", "Trabalhando"], a: "Desconectado/Offline", def: "Not connected to the internet." },
            { sent: "That joke was funny, **LOL**!", word: "LOL", options: ["Rindo muito", "Triste", "Bravo", "Surpreso"], a: "Rindo muito", def: "Laughing Out Loud; used for something funny." },
            { sent: "**OMG**, look at those views!", word: "OMG", options: ["Meu Deus", "Com certeza", "Talvez", "Nunca"], a: "Meu Deus", def: "Oh My God; used to express surprise." },
            { sent: "**IDK** the password.", word: "IDK", options: ["Eu sei", "Eu não sei", "Eu quero", "Eu preciso"], a: "Eu não sei", def: "I Don't Know." },
            { sent: "I'm going to the kitchen, **BRB**.", word: "BRB", options: ["Volto logo", "Tchau", "Bom dia", "Até amanhã"], a: "Volto logo", def: "Be Right Back; used when leaving for a short time." },
            { sent: "Post a photo for **TBT**.", word: "TBT", options: ["Quinta-feira do retorno (Foto antiga)", "Foto nova", "Amanhã", "Hoje"], a: "Quinta-feira do retorno (Foto antiga)", def: "Throwback Thursday; used when posting old photos." },
            { sent: "I usually **wake up** at 7 AM.", word: "wake up", options: ["Acordo", "Durmo", "Almoço", "Saio"], a: "Acordo", def: "To stop sleeping." },
            { sent: "I **get up** immediately.", word: "get up", options: ["Deito", "Levanto-me", "Sonho", "Corro"], a: "Levanto-me", def: "To rise from bed." },
            { sent: "They **study** English every Monday.", word: "study", options: ["Brincam", "Estudam", "Trabalham", "Cantam"], a: "Estudam", def: "To devote time to acquiring knowledge." },
            { sent: "We **watch** series on Netflix.", word: "watch", options: ["Ouvimos", "Assistimos", "Lemos", "Escrevemos"], a: "Assistimos", def: "To look at attentively." },
            { sent: "My birthday is **in** May.", word: "in", options: ["Em", "No (dia)", "Às", "De"], a: "Em", def: "Preposition used for months." },
            { sent: "I post photos **on** Saturdays.", word: "on", options: ["Em", "Aos/Nos (dias da semana)", "Às (horas)", "Por"], a: "Aos/Nos (dias da semana)", def: "Preposition used for days of the week." },
            { sent: "I sleep **at** 10 PM.", word: "at", options: ["Em", "Nos", "Às (horas específicas)", "No"], a: "Às (horas específicas)", def: "Preposition used for specific clock times." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 items) ---
        5: [
            { sent: "I **posts** photos every day.", correct: "post" },
            { sent: "She **am posting** a video now.", correct: "is posting" },
            { sent: "We usually **checking** our feed.", correct: "usually check" },
            { sent: "They **is chatting** right now.", correct: "are chatting" },
            { sent: "He **doesn't uses** TikTok.", correct: "doesn't use" },
            { sent: "I sleep **in** 10 PM.", correct: "at" },
            { sent: "My birthday is **on** October.", correct: "in" },
            { sent: "We have school **at** Mondays.", correct: "on" },
            { sent: "What **are you doing** every morning?", correct: "do you do" },
            { sent: "I **study** right now.", correct: "am studying" },
            { sent: "She **checking** her notifications.", correct: "is checking" },
            { sent: "He **blocks** that account now.", correct: "is blocking" },
            { sent: "I usually **watching** series at night.", correct: "watch" },
            { sent: "They **dont** share fake news.", correct: "don't" },
            { sent: "Look! The file **loads**.", correct: "is loading" },
            { sent: "Sarah **get up** at 7 AM.", correct: "gets up" },
            { sent: "Are you **listen** to me?", correct: "listening" },
            { sent: "I browse the internet **on** night.", correct: "at" },
            { sent: "New Year is **at** January.", correct: "in" },
            { sent: "I usually go online **at** Sundays.", correct: "on" },
            { sent: "**Do** he play video games?", correct: "Does" },
            { sent: "We **am recording** a story.", correct: "are recording" },
            { sent: "I **no like** cyberbullying.", correct: "don't like" },
            { sent: "**Is** you using the wifi?", correct: "Are" },
            { sent: "She **study** math every day.", correct: "studies" },
            { sent: "They are **runing** away.", correct: "running" },
            { sent: "I **upload** a new video at the moment.", correct: "am uploading" },
            { sent: "My mom **call** me now.", correct: "is calling" },
            { sent: "He **always is** online.", correct: "is always" },
            { sent: "We **chats** every night.", correct: "chat" },
            { sent: "**Does** they have an account?", correct: "Do" },
            { sent: "I wake up **on** the morning.", correct: "in" },
            { sent: "The class starts **in** 8 o'clock.", correct: "at" },
            { sent: "I **not am** reading.", correct: "am not" },
            { sent: "She **don't post** very often.", correct: "doesn't post" },
            { sent: "**Are** Sarah watching TV?", correct: "Is" },
            { sent: "I **sending** the file now.", correct: "am sending" },
            { sent: "We play games **at** Fridays.", correct: "on" },
            { sent: "I **checking** my email right now.", correct: "am checking" },
            { sent: "He **watchs** funny memes.", correct: "watches" }
        ],

        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Type 6.1: Question to Answer (Groups 1-10)
            { pairs: [{a: "What are you doing?", b: "I am posting a photo."}, {a: "Do you have an Instagram account?", b: "Yes, I have one."}, {a: "How often do you post?", b: "I usually post every week."}, {a: "Is the wifi working?", b: "No, I am offline now."}, {a: "What is the wifi password?", b: "It is 'Student123'."}] },
            { pairs: [{a: "Are you using your laptop?", b: "No, I'm using my smartphone."}, {a: "What does 'LOL' mean?", b: "It means laughing out loud."}, {a: "Do you usually check your feed?", b: "Yes, every morning."}, {a: "Is he recording a story?", b: "Yes, look at his phone."}, {a: "When is your birthday?", b: "It is in January."}] },
            { pairs: [{a: "Why did you block that account?", b: "Because it sends spam."}, {a: "Are they chatting on WhatsApp?", b: "Yes, they are online now."}, {a: "What is she doing on her tablet?", b: "She is watching a video."}, {a: "Do you like funny memes?", b: "Yes, they are hilarious!"}, {a: "When do you go offline?", b: "I go offline at night."}] },
            { pairs: [{a: "What are you uploading?", b: "I am uploading a video."}, {a: "Do you tag your friends?", b: "Yes, I always tag them."}, {a: "Is your profile picture new?", b: "Yes, I changed it today."}, {a: "When do you study English?", b: "I study in the afternoon."}, {a: "Are you busy right now?", b: "Yes, I am doing homework."}] },
            { pairs: [{a: "Does she have many followers?", b: "Yes, she is an influencer."}, {a: "What happened to the video?", b: "It is going viral!"}, {a: "Do you check notifications?", b: "Yes, I check immediately."}, {a: "Is he always online?", b: "Yes, he never sleeps!"}, {a: "Can you send me the link?", b: "Sure, BRB!"}] },
            { pairs: [{a: "What do you do on Fridays?", b: "I usually play games."}, {a: "Are you listening to me?", b: "Sorry, I am reading a post."}, {a: "Do you use Twitter?", b: "No, I prefer Instagram."}, {a: "Is the file loading?", b: "Yes, but it's very slow."}, {a: "What is the hashtag?", b: "It is #summer."}] },
            { pairs: [{a: "Why is she busy?", b: "She is editing a photo."}, {a: "Do you comment on posts?", b: "Only on my friends' posts."}, {a: "Is he using his tablet?", b: "No, it is in his backpack."}, {a: "When does the class start?", b: "It starts at 8 o'clock."}, {a: "Do you like technology?", b: "Yes, I love gadgets!"}] },
            { pairs: [{a: "Are we online now?", b: "Yes, the green dot is on."}, {a: "What does 'IDK' mean?", b: "It means 'I don't know'."}, {a: "Do you study on Sundays?", b: "No, I am offline then."}, {a: "Is she tagging Albert?", b: "Yes, in her new photo."}, {a: "What are they watching?", b: "They are watching a meme."}] },
            { pairs: [{a: "When is the party?", b: "It is on Saturday."}, {a: "Do you have a laptop?", b: "Yes, I do my work on it."}, {a: "Is the computer on the desk?", b: "Yes, it's next to the lamp."}, {a: "Why are you laughing?", b: "Because this cat is funny!"}, {a: "Are you recording a video?", b: "No, I am sending a message."}] },
            { pairs: [{a: "How often do you post stories?", b: "I post them every day."}, {a: "Is your mom calling you?", b: "Yes, I need to go. BRB!"}, {a: "Do you follow famous people?", b: "Yes, I follow influencers."}, {a: "When do you wake up?", b: "I wake up at 7 AM."}, {a: "Is the app working?", b: "No, it needs an update."}] },

            // Type 6.2: 1st half to 2nd half (Groups 11-20)
            { pairs: [{a: "I am posting...", b: "...a photo right now."}, {a: "She usually checks...", b: "...her feed in the morning."}, {a: "We are chatting...", b: "...on WhatsApp at night."}, {a: "He doesn't use...", b: "...TikTok very often."}, {a: "They always tag...", b: "...their friends in memes."}] },
            { pairs: [{a: "My birthday is...", b: "...in October."}, {a: "The class starts...", b: "...at 8:00 AM."}, {a: "We play games...", b: "...on Fridays."}, {a: "I wake up...", b: "...at 7 o'clock."}, {a: "New Year is...", b: "...in January."}] },
            { pairs: [{a: "I am recording...", b: "...a story for TBT."}, {a: "Sarah usually wears...", b: "...glasses at school."}, {a: "Right now, she is wearing...", b: "...contact lenses for the party."}, {a: "He usually plays...", b: "...offline games."}, {a: "Today, he is playing...", b: "...online with friends."}] },
            { pairs: [{a: "Don't forget to...", b: "...turn on notifications."}, {a: "I need to...", b: "...upload my homework."}, {a: "Please help me...", b: "...fix my laptop."}, {a: "I am sending...", b: "...the file now."}, {a: "You can download...", b: "...the new app for free."}] },
            { pairs: [{a: "The video is...", b: "...going viral today."}, {a: "He blocked...", b: "...the spam account."}, {a: "She has...", b: "...many followers on Instagram."}, {a: "I usually scroll...", b: "...through my feed."}, {a: "We are watching...", b: "...a funny cat meme."}] },
            { pairs: [{a: "I am offline...", b: "...on the weekend."}, {a: "We chat...", b: "...online every night."}, {a: "He uses his...", b: "...smartphone for everything."}, {a: "She is editing...", b: "...a photo with filters."}, {a: "They are browsing...", b: "...the internet for news."}] },
            { pairs: [{a: "I sent a letter...", b: "...by post."}, {a: "I made a new...", b: "...post on my profile."}, {a: "Don't feed...", b: "...the animals."}, {a: "Scroll down...", b: "...the news feed."}, {a: "I like...", b: "...pizza and soda."}] },
            { pairs: [{a: "I wake up...", b: "...at 7 AM."}, {a: "I get up...", b: "...immediately after."}, {a: "I study...", b: "...math in the afternoon."}, {a: "I watch...", b: "...series on Netflix."}, {a: "I sleep...", b: "...eight hours a night."}] },
            { pairs: [{a: "The tablet has...", b: "...a big touchscreen."}, {a: "The laptop is...", b: "...portable and light."}, {a: "The computer is...", b: "...on the desk."}, {a: "The smartphone has...", b: "...a good camera."}, {a: "The wifi is...", b: "...working perfectly."}] },
            { pairs: [{a: "I don't share...", b: "...fake news."}, {a: "He is a...", b: "...famous digital influencer."}, {a: "She is a...", b: "...popular YouTuber."}, {a: "They broadcast...", b: "...their games online."}, {a: "We use...", b: "...hashtags to find topics."}] },

            // Type 6.3: English to Portuguese translation (Groups 21-30)
            { pairs: [{a: "I am posting a photo.", b: "Eu estou postando uma foto."}, {a: "I post photos every day.", b: "Eu posto fotos todo dia."}, {a: "She is uploading a video.", b: "Ela está carregando um vídeo."}, {a: "She uploads videos often.", b: "Ela carrega vídeos com frequência."}, {a: "Are you using the wifi?", b: "Você está usando o wi-fi?"}] },
            { pairs: [{a: "My birthday is in May.", b: "Meu aniversário é em maio."}, {a: "I post on Saturdays.", b: "Eu posto aos sábados."}, {a: "Class is at 8 o'clock.", b: "A aula é às 8 horas."}, {a: "I study in the morning.", b: "Eu estudo de manhã."}, {a: "I chat at night.", b: "Eu converso à noite."}] },
            { pairs: [{a: "Turn on notifications.", b: "Ligue as notificações."}, {a: "Block the spam account.", b: "Bloqueie a conta de spam."}, {a: "Check your feed.", b: "Verifique seu feed."}, {a: "Tag your friends.", b: "Marque seus amigos."}, {a: "Share the video.", b: "Compartilhe o vídeo."}] },
            { pairs: [{a: "Smartphone", b: "Celular inteligente."}, {a: "Laptop", b: "Computador portátil."}, {a: "Tablet", b: "Tablet."}, {a: "Headphones", b: "Fones de ouvido."}, {a: "Desktop computer", b: "Computador de mesa."}] },
            { pairs: [{a: "Digital native", b: "Nativo digital."}, {a: "Viral video", b: "Vídeo viral."}, {a: "Fake news", b: "Notícias falsas."}, {a: "Followers", b: "Seguidores."}, {a: "Social media", b: "Redes sociais."}] },
            { pairs: [{a: "I am laughing out loud.", b: "Estou rindo muito (LOL)."}, {a: "I don't know.", b: "Eu não sei (IDK)."}, {a: "Be right back.", b: "Volto já (BRB)."}, {a: "Oh my God.", b: "Oh meu Deus (OMG)."}, {a: "Throwback Thursday.", b: "Quinta-feira do retorno (TBT)."}] },
            { pairs: [{a: "I am online now.", b: "Eu estou online agora."}, {a: "I am offline today.", b: "Eu estou offline hoje."}, {a: "The wifi is working.", b: "O wi-fi está funcionando."}, {a: "The file is loading.", b: "O arquivo está carregando."}, {a: "Create an account.", b: "Crie uma conta."}] },
            { pairs: [{a: "I usually wake up early.", b: "Eu costumo acordar cedo."}, {a: "I get up immediately.", b: "Eu levanto imediatamente."}, {a: "I study English.", b: "Eu estudo inglês."}, {a: "I watch funny memes.", b: "Eu assisto memes engraçados."}, {a: "I sleep well.", b: "Eu durmo bem."}] },
            { pairs: [{a: "Use a hashtag.", b: "Use uma hashtag."}, {a: "Edit a photo.", b: "Edite uma foto."}, {a: "Watch a story.", b: "Assista a um story."}, {a: "Send a message.", b: "Envie uma mensagem."}, {a: "Browse the internet.", b: "Navegue na internet."}] },
            { pairs: [{a: "I prefer Instagram.", b: "Eu prefiro o Instagram."}, {a: "Boring pages.", b: "Páginas entediantes."}, {a: "Famous influencer.", b: "Influenciador famoso."}, {a: "Hilarious cat.", b: "Gato hilário."}, {a: "Cool profile.", b: "Perfil legal."}] },

            // Type 6.4: Word to Simple Definition (Groups 31-40)
            { pairs: [{a: "Simple Present", b: "Usado para rotinas e hábitos."}, {a: "Present Continuous", b: "Usado para ações agora."}, {a: "Preposition 'In'", b: "Usada para meses e anos."}, {a: "Preposition 'On'", b: "Usada para dias e datas."}, {a: "Preposition 'At'", b: "Usada para horas específicas."}] },
            { pairs: [{a: "Post", b: "Publicar algo na internet."}, {a: "Share", b: "Enviar o conteúdo de outro."}, {a: "Like", b: "Gostar de uma postagem."}, {a: "Comment", b: "Escrever uma opinião."}, {a: "Tag", b: "Mencionar alguém em foto."}] },
            { pairs: [{a: "Follow", b: "Acompanhar as postagens."}, {a: "Unfollow", b: "Parar de acompanhar alguém."}, {a: "Block", b: "Impedir alguém de ver perfil."}, {a: "Online", b: "Conectado à internet."}, {a: "Offline", b: "Desconectado da internet."}] },
            { pairs: [{a: "Feed", b: "Fluxo de postagens que vê."}, {a: "Story", b: "Foto ou vídeo de 24 horas."}, {a: "Profile", b: "Sua página pessoal na rede."}, {a: "Message", b: "Texto privado para alguém."}, {a: "Notification", b: "Aviso de nova atividade."}] },
            { pairs: [{a: "Hashtag", b: "Símbolo # usado para temas."}, {a: "Viral", b: "Algo que se espalha rápido."}, {a: "Meme", b: "Imagem ou vídeo engraçado."}, {a: "Followers", b: "Pessoas que assinam conta."}, {a: "Digital Influencer", b: "Pessoa com muitos seguidores."}] },
            { pairs: [{a: "Smartphone", b: "Telefone com internet e apps."}, {a: "Laptop", b: "Computador que pode carregar."}, {a: "Tablet", b: "Tela portátil maior que celular."}, {a: "Headphones", b: "Aparelho para ouvir música."}, {a: "Desktop", b: "Computador de mesa."}] },
            { pairs: [{a: "Upload", b: "Enviar algo do celular à rede."}, {a: "Download", b: "Trazer algo da rede ao celular."}, {a: "Wifi", b: "Sinal de internet sem fio."}, {a: "Login", b: "Entrar em uma conta."}, {a: "Account", b: "Seu registro em um aplicativo."}] },
            { pairs: [{a: "Morning", b: "Período do começo do dia."}, {a: "Afternoon", b: "Período depois do almoço."}, {a: "Night", b: "Período do fim do dia."}, {a: "Weekend", b: "Sábado e domingo."}, {a: "Every day", b: "Todos os dias da semana."}] },
            { pairs: [{a: "Wake up", b: "Deixar de estar dormindo."}, {a: "Get up", b: "Sair da cama fisicamente."}, {a: "Study", b: "Aprender algo novo."}, {a: "Watch", b: "Olhar para uma tela ou cena."}, {a: "Sleep", b: "Descansar durante a noite."}] },
            { pairs: [{a: "LOL", b: "Rindo muito."}, {a: "OMG", b: "Meu Deus (surpresa)."}, {a: "IDK", b: "Eu não sei."}, {a: "BRB", b: "Volto logo."}, {a: "TBT", b: "Postar lembrança antiga."}] }
        ],


        // --- TYPE 7: BEST ANSWER (WH QUESTIONS) (40 items) ---
        7: [
            { q: "What are you doing on Instagram right now?", options: ["I am posting a photo of my cat.", "I usually post every morning.", "Yes, I am online.", "My smartphone is black."], a: "I am posting a photo of my cat." },
            { q: "When is your birthday?", options: ["It is in May.", "I am fourteen years old.", "At 7 o'clock.", "On the desk."], a: "It is in May." },
            { q: "How often do you check your feed?", options: ["I check it three times a day.", "I am checking it now.", "Because I like news.", "With my headphones."], a: "I check it three times a day." },
            { q: "Why is the computer so slow?", options: ["Because it is downloading a big file.", "Yes, it is very slow.", "It is a laptop.", "In the afternoon."], a: "Because it is downloading a big file." },
            { q: "Where is your smartphone?", options: ["A) It is charging in my bedroom.", "B) It has a good camera.", "C) I use it for everything.", "D) No, I don't have it."], a: "A) It is charging in my bedroom." },
            { q: "What time do you usually wake up?", options: ["I usually wake up at 6:00 AM.", "I am waking up now.", "In January.", "Because I have school."], a: "I usually wake up at 6:00 AM." },
            { q: "Who are you tagging in this photo?", options: ["I am tagging my best friends.", "It is a funny meme.", "On Friday.", "Yes, I am."], a: "I am tagging my best friends." },
            { q: "How do you usually go to school?", options: ["I usually go by bus.", "I am going now.", "At 8 o'clock.", "To study English."], a: "I usually go by bus." },
            { q: "When do you usually go offline?", options: ["I go offline at 10:00 PM.", "I am offline on weekends.", "Because I need to sleep.", "My laptop is off."], a: "I go offline at 10:00 PM." },
            { q: "What does 'IDK' mean in internet slang?", options: ["It means 'I don't know'.", "It is a funny video.", "I use it on WhatsApp.", "No, I don't."], a: "It means 'I don't know'." },
            { q: "Who is your favorite digital influencer?", options: ["My favorite is a gamer named Leo.", "She has many followers.", "On YouTube.", "Because he is funny."], a: "My favorite is a gamer named Leo." },
            { q: "Why are you blocking that account?", options: ["Because it is sending me spam.", "I am using my smartphone.", "At night.", "Yes, I am blocking it."], a: "Because it is sending me spam." },
            { q: "Where can I find the wifi password?", options: ["It is on the back of the router.", "It is 'Student123'.", "I am online now.", "No, I don't know it."], a: "It is on the back of the router." },
            { q: "What are they watching on the tablet?", options: ["They are watching a viral video.", "They usually watch TV.", "In the living room.", "Yes, they are."], a: "They are watching a viral video." },
            { q: "How often do you record stories for TBT?", options: ["I record them every Thursday.", "I am recording one now.", "It is an old photo.", "On the weekend."], a: "I record them every Thursday." },
            { q: "When does the school holiday start?", options: ["It starts in July.", "At 8:00 AM.", "We are going to the beach.", "Yes, it does."], a: "It starts in July." },
            { q: "What are you using to listen to music?", options: ["I am using my new headphones.", "I like pop music.", "Very loudly.", "Every day."], a: "I am using my new headphones." },
            { q: "Who is calling you right now?", options: ["My mom is calling me.", "I am answering the phone.", "It is a smartphone.", "No, it isn't."], a: "My mom is calling me." },
            { q: "Why is Sarah wearing contact lenses today?", options: ["Because she is going to a party.", "She usually wears glasses.", "They are blue.", "In her eyes."], a: "Because she is going to a party." },
            { q: "Where do you usually study?", options: ["I usually study in the library.", "I am studying math now.", "On Mondays.", "With my friends."], a: "I usually study in the library." },
            { q: "What is the hashtag for the school event?", options: ["It is #REACHTalentShow.", "I am using a hashtag.", "It is very popular.", "On Instagram."], a: "It is #REACHTalentShow." },
            { q: "When do you check your email?", options: ["I check it every morning at 7.", "I am checking it right now.", "It is a message from school.", "Yes, I do."], a: "I check it every morning at 7." },
            { q: "How is the wifi connection today?", options: ["It is very fast and stable.", "It is in the kitchen.", "I have the password.", "No, it isn't."], a: "It is very fast and stable." },
            { q: "Who helps you with your videos?", options: ["My brother helps me edit them.", "I am a YouTuber.", "On my laptop.", "Because it is hard."], a: "My brother helps me edit them." },
            { q: "What is he uploading to the cloud?", options: ["He is uploading his project files.", "He usually uploads on Friday.", "Yes, he is.", "At the moment."], a: "He is uploading his project files." },
            { q: "Why are you offline on Sundays?", options: ["Because I spend time with my family.", "I am using my tablet.", "In the park.", "No, I'm not."], a: "Because I spend time with my family." },
            { q: "Where is the funny meme you mentioned?", options: ["It is in our group chat.", "It is hilarious, LOL!", "I am sending it now.", "Yes, I saw it."], a: "It is in our group chat." },
            { q: "How often does he play online games?", options: ["He plays them almost every night.", "He is playing Minecraft now.", "With his cousins.", "On his computer."], a: "He plays them almost every night." },
            { q: "What do you usually do at lunch?", options: ["I usually check my notifications.", "I am eating a sandwich.", "At 12:30 PM.", "In the cafeteria."], a: "I usually check my notifications." },
            { q: "When is the next live stream?", options: ["It is on Saturday at 8 PM.", "I am watching the stream.", "He is a famous streamer.", "Yes, I am ready."], a: "It is on Saturday at 8 PM." },
            { q: "Who is the person in your profile picture?", options: ["It is my sister and me.", "It is a cool picture.", "I changed it yesterday.", "On my account."], a: "It is my sister and me." },
            { q: "Why are you recording a video in the park?", options: ["Because the light is beautiful here.", "I am using my smartphone.", "Every weekend.", "Yes, I am."], a: "Because the light is beautiful here." },
            { q: "Where is the best place to use the laptop?", options: ["On the desk in my bedroom.", "It is a portable computer.", "I am doing my homework.", "At 4 o'clock."], a: "On the desk in my bedroom." },
            { q: "What are you editing on your phone?", options: ["I am editing a video for TikTok.", "I use a special app.", "It is very easy.", "No, I'm not."], a: "I am editing a video for TikTok." },
            { q: "How do you feel when you get many likes?", options: ["I feel very happy and excited.", "I have one hundred likes.", "On my new post.", "Because it is viral."], a: "I feel very happy and excited." },
            { q: "When do we use the hashtag #TBT?", options: ["We use it on Thursdays.", "It means 'Throwback Thursday'.", "For old photos.", "Yes, we do."], a: "We use it on Thursdays." },
            { q: "Who sends you the most messages?", options: ["My best friend Celine does.", "I have many messages.", "On WhatsApp.", "Every ten minutes."], a: "My best friend Celine does." },
            { q: "Why is he unfollowing that page?", options: ["Because it posts too many ads.", "He is clicking the button.", "No, he isn't.", "On his feed."], a: "Because it posts too many ads." },
            { q: "Where are the students chatting?", options: ["They are chatting in the hallway.", "They are chatting about the test.", "They chat every break time.", "Yes, they are online."], a: "They are chatting in the hallway." },
            { q: "How many followers does the influencer have?", options: ["She has over one million followers.", "She is very famous.", "On Instagram and YouTube.", "Because she is an artist."], a: "She has over one million followers." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 items) ---
        8: [
            { sent: "I am **downloading** a video to YouTube so my friends can see it.", wrong: "downloading", options: ["Uploading", "Tagging", "Blocking", "Sleeping"], a: "Uploading" },
            { sent: "My birthday is **at** January.", wrong: "at", options: ["In", "On", "Under", "By"], a: "In" },
            { sent: "Use the **laptop** to listen to music privately.", wrong: "laptop", options: ["Headphones", "Tablet", "Wifi", "Account"], a: "Headphones" },
            { sent: "I usually **wake up** from my bed at 7:15 after the alarm.", wrong: "wake up", options: ["Get up", "Sleep", "Post", "Like"], a: "Get up" },
            { sent: "He is **scrolling** through his laptop to find the keys.", wrong: "scrolling", options: ["Looking", "Password", "Meme", "Story"], a: "Looking" },
            { sent: "I am **liking** a new video to my channel now.", wrong: "liking", options: ["Uploading", "Following", "Blocking", "Downloading"], a: "Uploading" },
            { sent: "The wifi is **online**, so I cannot connect to the internet.", wrong: "online", options: ["Offline/Down", "Working", "Fast", "Blue"], a: "Offline/Down" },
            { sent: "I need to **comment** my friends in this funny photo.", wrong: "comment", options: ["Tag", "Share", "Download", "Unfollow"], a: "Tag" },
            { sent: "Sarah usually **is wearing** glasses, but today she has contacts.", wrong: "is wearing", options: ["Wears", "Wearing", "Wear", "Wore"], a: "Wears" },
            { sent: "The class starts **on** 8:00 AM.", wrong: "on", options: ["At", "In", "To", "For"], a: "At" },
            { sent: "I am **reading** a message on WhatsApp to my best friend.", wrong: "reading", options: ["Sending/Writing", "Tagging", "Blocking", "Downloading"], a: "Sending/Writing" },
            { sent: "This **hashtag** of the dancing dog is going viral.", wrong: "hashtag", options: ["Video/Meme", "Profile", "Account", "Wifi"], a: "Video/Meme" },
            { sent: "I am **offline** right now because I am chatting with you.", wrong: "offline", options: ["Online", "Busy", "Downloading", "Sleeping"], a: "Online" },
            { sent: "We have school **in** Mondays and Wednesdays.", wrong: "in", options: ["On", "At", "By", "For"], a: "On" },
            { sent: "I **unfollow** my favorite singer because I love her songs.", wrong: "unfollow", options: ["Follow", "Block", "Tag", "Share"], a: "Follow" },
            { sent: "My mom is **calling** a photo on Instagram.", wrong: "calling", options: ["Posting", "Ringing", "Chatting", "Recording"], a: "Posting" },
            { sent: "I use my **headphones** to do my homework and type essays.", wrong: "headphones", options: ["Laptop/Computer", "Smartphone", "Tablet", "Router"], a: "Laptop/Computer" },
            { sent: "He **blocks** everyone he knows because he is very friendly.", wrong: "blocks", options: ["Follows/Tags", "Unfollows", "Downloads", "Uploads"], a: "Follows/Tags" },
            { sent: "I am **checking** a story on my phone right now for my followers.", wrong: "checking", options: ["Recording/Posting", "Reading", "Blocking", "Deleting"], a: "Recording/Posting" },
            { sent: "The **notification** is on the desk; it is a portable computer.", wrong: "notification", options: ["Laptop", "Feed", "Message", "Story"], a: "Laptop" },
            { sent: "I usually **am chatting** with my friends at night.", wrong: "am chatting", options: ["Chat", "Chatting", "Chats", "To chat"], a: "Chat" },
            { sent: "My sister is a famous **follower**; she has one million fans.", wrong: "follower", options: ["Influencer", "Account", "Hashtag", "Meme"], a: "Influencer" },
            { sent: "I sleep **on** night.", wrong: "on", options: ["At", "In", "By", "To"], a: "At" },
            { sent: "Don't forget to **feed** your new video so people can see it.", wrong: "feed", options: ["Post/Upload", "Like", "Follow", "Download"], a: "Post/Upload" },
            { sent: "I am **tagging** through my feed to see the latest news.", wrong: "tagging", options: ["Scrolling", "Sending", "Blocking", "Downloading"], a: "Scrolling" },
            { sent: "We are having breakfast **in** 7:30 AM.", wrong: "in", options: ["At", "On", "From", "For"], a: "At" },
            { sent: "This **smartphone** has a 10-inch screen and a pen.", wrong: "smartphone", options: ["Tablet", "Laptop", "Headphones", "Desktop"], a: "Tablet" },
            { sent: "I am **sharing** a joke, so I am laughing out loud.", wrong: "sharing", options: ["Reading/Hearing", "Posting", "Blocking", "Tagging"], a: "Reading/Hearing" },
            { sent: "The **password** is ringing; someone is calling you.", wrong: "password", options: ["Smartphone/Phone", "Notification", "Wifi", "Laptop"], a: "Smartphone/Phone" },
            { sent: "I use **OMG** when I don't know the answer to a question.", wrong: "OMG", options: ["IDK", "LOL", "BRB", "TBT"], a: "IDK" },
            { sent: "I am **studying** a video on YouTube for fun.", wrong: "studying", options: ["Watching", "Uploading", "Downloading", "Tagging"], a: "Watching" },
            { sent: "My laptop is **online**, so I am working in the park without wifi.", wrong: "online", options: ["Offline", "Working", "Fast", "New"], a: "Offline" },
            { sent: "I **always am** checking my notifications.", wrong: "always am", options: ["Am always", "Checking always", "Always check", "Checks always"], a: "Am always" },
            { sent: "I'm going to the bathroom, **IDK**.", wrong: "IDK", options: ["BRB", "LOL", "OMG", "TBT"], a: "BRB" },
            { sent: "The **story** is turned off, so I don't hear when I get a message.", wrong: "story", options: ["Sound/Notification", "Profile", "Feed", "Account"], a: "Sound/Notification" },
            { sent: "I usually **post** my friends when I see them at school.", wrong: "post", options: ["Chat with / Meet", "Tag", "Like", "Follow"], a: "Chat with / Meet" },
            { sent: "We are **uploading** a game from the App Store.", wrong: "uploading", options: ["Downloading", "Sharing", "Tagging", "Blocking"], a: "Downloading" },
            { sent: "He is **recording** a letter to his grandmother.", wrong: "recording", options: ["Writing", "Posting", "Sending", "Tagging"], a: "Writing" },
            { sent: "I am **tagging** a funny photo for TBT today.", wrong: "tagging", options: ["Posting/Sharing", "Downloading", "Blocking", "Unfollowing"], a: "Posting/Sharing" },
            { sent: "The **account** is very slow today; I can't browse any pages.", wrong: "account", options: ["Internet/Wifi", "Smartphone", "Laptop", "Profile"], a: "Internet/Wifi" }
        ],

       
        // --- TYPE 9: LISTEN AND ANSWER (40 items) ---
        9: [
            { audio: "What are you doing on your laptop right now?", options: ["I am uploading my homework.", "I usually check my feed at 7 AM.", "My laptop is on the desk.", "In January."], a: "I am uploading my homework." },
            { audio: "How often do you post stories?", options: ["I post stories every day.", "I am posting a story now.", "Yes, I like stories.", "On the smartphone."], a: "I post stories every day." },
            { audio: "When is the school party?", options: ["It is on Friday.", "It is in the classroom.", "I am going to the party.", "BRB!"], a: "It is on Friday." },
            { audio: "Are you using the wifi at the moment?", options: ["Yes, I am.", "I usually use the wifi.", "The password is secret.", "In the afternoon."], a: "Yes, I am." },
            { audio: "What time do you usually wake up?", options: ["I wake up at 6:30 AM.", "I am waking up now.", "On Monday.", "With my phone."], a: "I wake up at 6:30 AM." },
            { audio: "Why are you blocking that account?", options: ["Because it sends too much spam.", "I am blocking it with my finger.", "At 8 o'clock.", "No, I am not."], a: "Because it sends too much spam." },
            { audio: "Where do you usually check your notifications?", options: ["I check them in my bedroom.", "I am checking them now.", "Every ten minutes.", "Yes, I have many."], a: "I check them in my bedroom." },
            { audio: "What does 'IDK' mean?", options: ["It means 'I don't know'.", "I am using internet slang.", "It is very funny, LOL!", "In the chat."], a: "It means 'I don't know'." },
            { audio: "Is Sarah recording a video today?", options: ["Yes, she is.", "She usually records videos.", "Sarah is a student.", "In May."], a: "Yes, she is." },
            { audio: "When do you go offline on weekends?", options: ["I go offline at night.", "I am offline now.", "Because I am busy.", "On my tablet."], a: "I go offline at night." },
            { audio: "Who are you tagging in the meme?", options: ["I am tagging Albert and Celine.", "It is a hilarious meme.", "On Instagram.", "Yes, I am."], a: "I am tagging Albert and Celine." },
            { audio: "How is the internet connection in the library?", options: ["It is very slow today.", "I am in the library.", "At 2 PM.", "To do homework."], a: "It is very slow today." },
            { audio: "Do you usually use a tablet for school?", options: ["No, I prefer my laptop.", "I am using a tablet now.", "It is a big screen.", "TBT!"], a: "No, I prefer my laptop." },
            { audio: "What are they doing in the computer lab?", options: ["They are browsing the internet.", "They usually go there on Tuesdays.", "The lab is big.", "With the teacher."], a: "They are browsing the internet." },
            { audio: "When is your next English test?", options: ["It is in October.", "I am studying for the test.", "It is a difficult test.", "In the classroom."], a: "It is in October." },
            { audio: "Why is he offline right now?", options: ["Because he is sleeping.", "He usually goes online at 7.", "At home.", "Yes, he is."], a: "Because he is sleeping." },
            { audio: "How often do you change your profile picture?", options: ["I change it once a month.", "I am changing it now.", "It is a cool picture.", "On my account."], a: "I change it once a month." },
            { audio: "What is the wifi password for the students?", options: ["It is 'REACH2025'.", "I am using the wifi.", "It is working well.", "On the wall."], a: "It is 'REACH2025'." },
            { audio: "Are you listening to music with headphones?", options: ["Yes, I am.", "I usually listen to pop.", "The headphones are new.", "At night."], a: "Yes, I am." },
            { audio: "When do you usually check your email?", options: ["I check it in the morning.", "I am checking it now.", "It is a message from Albert.", "Yes, I do."], a: "I check it in the morning." },
            { audio: "Who is the owner of this profile?", options: ["It is Sarah's profile.", "It has many followers.", "I am following her.", "On TikTok."], a: "It is Sarah's profile." },
            { audio: "What are you sending to our group chat?", options: ["I am sending a funny video.", "I usually send messages.", "On WhatsApp.", "OMG!"], a: "I am sending a funny video." },
            { audio: "Why are you using your smartphone in class?", options: ["Because I need to upload a file.", "I am a digital native.", "At 10 o'clock.", "No, I'm not."], a: "Because I need to upload a file." },
            { audio: "How often does she unfollow people?", options: ["She rarely unfollows anyone.", "She is unfollowing them now.", "Because they are boring.", "No, she doesn't."], a: "She rarely unfollows anyone." },
            { audio: "Where is the new app?", options: ["It is on the App Store.", "It is very useful.", "I am downloading it.", "In May."], a: "It is on the App Store." },
            { audio: "What time does your alarm ring?", options: ["It rings at 7:00 AM.", "I wake up immediately.", "On my smartphone.", "Yes, it does."], a: "It rings at 7:00 AM." },
            { audio: "Are we meeting online tonight?", options: ["Yes, we are.", "We usually meet on Mondays.", "The internet is fast.", "IDK."], a: "Yes, we are." },
            { audio: "Who is watching your live stream?", options: ["My followers are watching it.", "I am a famous streamer.", "It is on YouTube.", "Every Saturday."], a: "My followers are watching it." },
            { audio: "Why is your phone making that sound?", options: ["Because I have a new notification.", "It is a smartphone.", "At lunch.", "Yes, it is."], a: "Because I have a new notification." },
            { audio: "What are you recording with your camera?", options: ["I am recording a vlog.", "I usually record on my phone.", "The camera is expensive.", "Tomorrow."], a: "I am recording a vlog." },
            { audio: "When do you usually study for tests?", options: ["I usually study in the afternoon.", "I am studying English now.", "The test is difficult.", "In the library."], a: "I usually study in the afternoon." },
            { audio: "How many likes does your post have?", options: ["It has fifty likes.", "I like your post, too.", "It is a viral post.", "On my feed."], a: "It has fifty likes." },
            { audio: "Are you using filters on your photos?", options: ["No, I am not.", "I usually use black and white.", "The filters are cool.", "On Saturday."], a: "No, I am not." },
            { audio: "Why are you sending a TBT photo today?", options: ["Because today is Thursday.", "It is an old photo.", "I am posting it now.", "Yes, I am."], a: "Because today is Thursday." },
            { audio: "Where is your brother gaming?", options: ["He is gaming in his bedroom.", "He is a pro gamer.", "He usually plays at night.", "No, he isn't."], a: "He is gaming in his bedroom." },
            { audio: "What is the hashtag for the photo?", options: ["It is #FriendsForever.", "I am using a hashtag.", "It is a popular topic.", "On Instagram."], a: "It is #FriendsForever." },
            { audio: "Is the wifi working in the garden?", options: ["No, it isn't.", "I am in the garden.", "The wifi password is long.", "Every day."], a: "No, it isn't." },
            { audio: "Who is calling Celine right now?", options: ["Her brother is calling her.", "She is answering the phone.", "It is a notification.", "At 3 o'clock."], a: "Her brother is calling her." },
            { audio: "How often do you browse the internet?", options: ["I browse it every night.", "I am browsing for news.", "The internet is fast.", "In my bedroom."], a: "I browse it every night." },
            { audio: "When do you usually get up on Sundays?", options: ["I usually get up at 9 AM.", "I am getting up now.", "Because I am tired.", "In the bed."], a: "I usually get up at 9 AM." }
        ],


        // --- TYPE 10: COMPLETE SENTENCES (40 items - 2 blanks each) ---
        10: [
            { audio: "I am posting a photo right now.", sent: "I am ___ a photo ___ now.", blanks: ["posting", "right"] },
            { audio: "She usually checks her feed in the morning.", sent: "She usually ___ her feed in the ___.", blanks: ["checks", "morning"] },
            { audio: "He is uploading a new video.", sent: "He is ___ a new ___.", blanks: ["uploading", "video"] },
            { audio: "I don't share fake news.", sent: "I ___ share ___ news.", blanks: ["don't", "fake"] },
            { audio: "Are you using your laptop?", sent: "Are ___ using your ___?", blanks: ["you", "laptop"] },
            { audio: "We chat online at night.", sent: "We ___ online ___ night.", blanks: ["chat", "at"] },
            { audio: "She doesn't use TikTok.", sent: "She ___ ___ TikTok.", blanks: ["doesn't", "use"] },
            { audio: "They are tagging their friends.", sent: "They are ___ their ___.", blanks: ["tagging", "friends"] },
            { audio: "I post stories on Monday.", sent: "I ___ stories ___ Monday.", blanks: ["post", "on"] },
            { audio: "The file is loading.", sent: "The ___ is ___.", blanks: ["file", "loading"] },
            { audio: "I wake up at 7:00 AM.", sent: "I ___ ___ at 7:00 AM.", blanks: ["wake", "up"] },
            { audio: "I am watching a funny meme.", sent: "I am ___ a funny ___.", blanks: ["watching", "meme"] },
            { audio: "How often do you post?", sent: "How ___ do you ___?", blanks: ["often", "post"] },
            { audio: "I am not listening.", sent: "I am ___ ___.", blanks: ["not", "listening"] },
            { audio: "We usually play games on Friday.", sent: "We usually ___ games ___ Friday.", blanks: ["play", "on"] },
            { audio: "She uses her smartphone for everything.", sent: "She ___ her ___ for everything.", blanks: ["uses", "smartphone"] },
            { audio: "My mom is calling me.", sent: "My ___ is ___ me.", blanks: ["mom", "calling"] },
            { audio: "School starts at 8:00 AM.", sent: "School ___ ___ 8:00 AM.", blanks: ["starts", "at"] },
            { audio: "Is he checking his notifications?", sent: "Is he ___ his ___?", blanks: ["checking", "notifications"] },
            { audio: "My birthday is in May.", sent: "My ___ is ___ May.", blanks: ["birthday", "in"] },
            { audio: "Can you download the game?", sent: "Can you ___ the ___?", blanks: ["download", "game"] },
            { audio: "He blocked the spam account.", sent: "He ___ the ___ account.", blanks: ["blocked", "spam"] },
            { audio: "We are chatting right now.", sent: "We are ___ ___ now.", blanks: ["chatting", "right"] },
            { audio: "My brother doesn't like Instagram.", sent: "My brother ___ ___ Instagram.", blanks: ["doesn't", "like"] },
            { audio: "I browse the internet at night.", sent: "I ___ the internet ___ night.", blanks: ["browse", "at"] },
            { audio: "Is she recording a story?", sent: "Is she ___ a ___?", blanks: ["recording", "story"] },
            { audio: "Please send me a message.", sent: "Please ___ me a ___.", blanks: ["send", "message"] },
            { audio: "He is always online.", sent: "He is ___ ___.", blanks: ["always", "online"] },
            { audio: "I usually check my feed.", sent: "I ___ ___ my feed.", blanks: ["usually", "check"] },
            { audio: "She is watching TV at the moment.", sent: "She is ___ TV at the ___.", blanks: ["watching", "moment"] },
            { audio: "Do you like TikTok?", sent: "Do you ___ ___?", blanks: ["like", "TikTok"] },
            { audio: "The wifi is not working.", sent: "The ___ is not ___.", blanks: ["wifi", "working"] },
            { audio: "We study in the afternoon.", sent: "We ___ in the ___.", blanks: ["study", "afternoon"] },
            { audio: "Your profile picture is cool.", sent: "Your ___ ___ is cool.", blanks: ["profile", "picture"] },
            { audio: "She has many followers.", sent: "She ___ many ___.", blanks: ["has", "followers"] },
            { audio: "Are we recording a video?", sent: "Are we ___ a ___?", blanks: ["recording", "video"] },
            { audio: "Her birthday is in October.", sent: "Her ___ is ___ October.", blanks: ["birthday", "in"] },
            { audio: "I am looking at your post.", sent: "I am ___ at your ___.", blanks: ["looking", "post"] },
            { audio: "How often do you post stories?", sent: "How ___ do you post ___?", blanks: ["often", "stories"] },
            { audio: "I am offline on weekends.", sent: "I am ___ on ___.", blanks: ["offline", "weekends"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (11-15)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE (10 items) ---
        11: [
            {
                title: "Morning Routines",
                lines: [
                    { speaker: "A", text: "Hi Celine! What time ___ you wake up?", options: ["do", "are"], a: "do" },
                    { speaker: "B", text: "I usually wake up ___ 6:30 AM.", options: ["at", "on"], a: "at" },
                    { speaker: "A", text: "___ you playing video games last night?", options: ["Are", "Do"], a: "Are" },
                    { speaker: "B", text: "No, I usually ___ my notifications.", options: ["check", "checking"], a: "check" },
                    { speaker: "A", text: "Turn ___ your phone before you sleep!", options: ["off", "on"], a: "off" }
                ]
            },
            {
                title: "Tech Troubles",
                lines: [
                    { speaker: "A", text: "Sarah, ___ the wifi working?", options: ["is", "are"], a: "is" } ,
                    { speaker: "B", text: "No, I ___ using my data right now.", options: ["am", "use"], a: "am" },
                    { speaker: "A", text: "I need to ___ a big file.", options: ["upload", "tag"], a: "upload" },
                    { speaker: "B", text: "The connection is better ___ the afternoon.", options: ["in", "at"], a: "in" },
                    { speaker: "A", text: "I ___ going to the lab now.", options: ["am", "go"], a: "am" }
                ]
            },
            {
                title: "Going Viral",
                lines: [
                    { speaker: "A", text: "Look at this ___! It is hilarious.", options: ["meme", "account"], a: "meme" },
                    { speaker: "B", text: "Wow! Is it ___ viral?", options: ["going", "goes"], a: "going" },
                    { speaker: "A", text: "Yes, everyone ___ it right now.", options: ["is sharing", "share"], a: "is sharing" },
                    { speaker: "B", text: "___ me the link on WhatsApp!", options: ["Send", "Post"], a: "Send" },
                    { speaker: "A", text: "Sure, ___! I need to find the button.", options: ["BRB", "IDK"], a: "BRB" }
                ]
            },
            {
                title: "Instagram Habits",
                lines: [
                    { speaker: "A", text: "How often do you ___ on your feed?", options: ["post", "posting"], a: "post" },
                    { speaker: "B", text: "I usually post ___ Saturdays.", options: ["on", "in"], a: "on" },
                    { speaker: "A", text: "Why are you ___ a new story?", options: ["recording", "record"], a: "recording" },
                    { speaker: "B", text: "I am ___ all our friends!", options: ["tagging", "tag"], a: "tagging" },
                    { speaker: "A", text: "I will ___ your photo right now.", options: ["like", "login"], a: "like" }
                ]
            },
            {
                title: "The Digital Native",
                lines: [
                    { speaker: "A", text: "Paul, what are you ___?", options: ["doing", "do"], a: "doing" },
                    { speaker: "B", text: "I ___ studying English online.", options: ["am", "is"], a: "am" },
                    { speaker: "A", text: "Do you ___ study on Sunday?", options: ["usually", "now"], a: "usually" },
                    { speaker: "B", text: "No, but I ___ a test tomorrow.", options: ["have", "am having"], a: "have" },
                    { speaker: "A", text: "The test is ___ 8 o'clock.", options: ["at", "on"], a: "at" }
                ]
            },
            {
                title: "Privacy Settings",
                lines: [
                    { speaker: "A", text: "Celine, did you ___ me?", options: ["block", "tag"], a: "block" },
                    { speaker: "B", text: "No! My ___ is private now.", options: ["account", "laptop"], a: "account" },
                    { speaker: "A", text: "Oh! ___! I thought you were angry.", options: ["LOL", "IDK"], a: "LOL" },
                    { speaker: "B", text: "I just ___ like strangers looking at me.", options: ["don't", "not"], a: "don't" },
                    { speaker: "A", text: "I usually ___ people I don't know.", options: ["block", "tag"], a: "block" }
                ]
            },
            {
                title: "Homework and Slang",
                lines: [
                    { speaker: "A", text: "Are you ___ your laptop?", options: ["using", "use"], a: "using" },
                    { speaker: "B", text: "Yes, I am ___ the internet.", options: ["browsing", "browse"], a: "browsing" },
                    { speaker: "A", text: "Is the essay hard?", options: ["Yes", "No"], a: "Yes" },
                    { speaker: "B", text: "___, I am still in the beginning.", options: ["IDK", "BRB"], a: "IDK" },
                    { speaker: "A", text: "I usually ___ my work in the evening.", options: ["finish", "finishing"], a: "finish" }
                ]
            },
            {
                title: "The Photo Edit",
                lines: [
                    { speaker: "A", text: "___ it a new filter?", options: ["Is", "Are"], a: "Is" },
                    { speaker: "B", text: "Yes, I am ___ this photo for TBT.", options: ["editing", "edit"], a: "editing" },
                    { speaker: "A", text: "You post TBT ___ Thursdays, right?", options: ["on", "at"], a: "on" },
                    { speaker: "B", text: "I am ___ it for tomorrow morning.", options: ["saving", "save"], a: "saving" },
                    { speaker: "A", text: "Post it ___ 7 o'clock!", options: ["at", "in"], a: "at" }
                ]
            },
            {
                title: "Digital Distractions",
                lines: [
                    { speaker: "A", text: "What are you ___ right now?", options: ["watching", "watch"], a: "watching" },
                    { speaker: "B", text: "I ___ looking at cat memes.", options: ["am", "is"], a: "am" },
                    { speaker: "A", text: "Why aren't you ___ for the test?", options: ["studying", "study"], a: "studying" },
                    { speaker: "B", text: "___... I am very distracted today.", options: ["IDK", "LOL"], a: "IDK" },
                    { speaker: "A", text: "You should turn ___ your wifi.", options: ["off", "on"], a: "off" }
                ]
            },
            {
                title: "New Follower",
                lines: [
                    { speaker: "A", text: "Did you check your ___?", options: ["notifications", "laptop"], a: "notifications" },
                    { speaker: "B", text: "Yes! I have a new ___.", options: ["follower", "feed"], a: "follower" },
                    { speaker: "A", text: "Is he a famous ___?", options: ["influencer", "meme"], a: "influencer" },
                    { speaker: "B", text: "Yes! He is ___ a live stream now.", options: ["recording", "record"], a: "recording" },
                    { speaker: "A", text: "That is ___!", options: ["incredible", "spam"], a: "incredible" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER ---
        12: [
            {
                title: "Sarah’s Digital Day",
                text: "My name is Sarah, and I am a digital native. I wake up at 7 AM and check my notifications immediately. During breakfast, I scroll through my feed to see what my friends are doing. I go to school in the morning, so I am usually offline until 12 PM. But right now, it is 3 PM, and I am sitting in my bedroom. I am uploading a new video to my YouTube channel. My followers love my vlogs!",
                questions: [
                    { q: "What time does Sarah check her notifications?", options: ["At 7 AM.", "In the afternoon.", "On the weekend."], a: "At 7 AM." },
                    { q: "What does Sarah do during breakfast?", options: ["She uploads a video.", "She scrolls through her feed.", "She studies English."], a: "She scrolls through her feed." },
                    { q: "Why is Sarah offline in the morning?", options: ["Because she is sleeping.", "Because she is at school.", "Because her wifi is broken."], a: "Because she is at school." },
                    { q: "What is Sarah doing at 3 PM?", options: ["She is checking her email.", "She is uploading a video.", "She is waking up."], a: "She is uploading a video." },
                    { q: "Does Sarah have a YouTube channel?", options: ["Yes, and her followers like her vlogs.", "No, she prefers Instagram.", "She doesn't know (IDK)."], a: "Yes, and her followers like her vlogs." }
                ]
            },
            {
                title: "The Viral Dancing Dog",
                text: "Albert is browsing the internet on his laptop. Suddenly, he sees a video of a dog dancing to pop music. 'OMG!' he says. The video is going viral. At this moment, it has five hundred thousand views and thousands of likes. Albert is sharing the link with Celine on WhatsApp. Celine is watching the video now and laughing out loud (LOL). They both think the meme is hilarious.",
                questions: [
                    { q: "What device is Albert using?", options: ["A smartphone.", "A laptop.", "A tablet."], a: "A laptop." },
                    { q: "Why does Albert say 'OMG'?", options: ["Because he is angry.", "Because he is surprised by the video.", "Because he is tired."], a: "Because he is surprised by the video." },
                    { q: "How many views does the video have at the moment?", options: ["One million.", "Five hundred thousand.", "One hundred."], a: "Five hundred thousand." },
                    { q: "How is Albert sending the link to Celine?", options: ["By email.", "On WhatsApp.", "In a letter."], a: "On WhatsApp." },
                    { q: "What is Celine doing right now?", options: ["She is posting a photo.", "She is watching the video and laughing.", "She is sleeping."], a: "She is watching the video and laughing." }
                ]
            },
            {
                title: "Technology in the Classroom",
                text: "At REACH school, technology is very important. In the morning, students usually use their laptops for research. Today is Friday, and the students are in the computer lab. They are not playing games; they are creating a digital family tree. Mike is tagging his classmates in a group project photo. Mrs. Canales is helping them. She says, 'Please, work carefully and don't share your passwords with anyone.'",
                questions: [
                    { q: "When do students usually use laptops for research?", options: ["At night.", "In the morning.", "On Sundays."], a: "In the morning." },
                    { q: "Where are the students today?", options: ["In the hallway.", "In the computer lab.", "At the park."], a: "In the computer lab." },
                    { q: "What are they doing at the moment?", options: ["Playing games.", "Creating a digital family tree.", "Browsing TikTok."], a: "Creating a digital family tree." },
                    { q: "Who is Mike tagging in the photo?", options: ["His teacher.", "His classmates.", "His parents."], a: "His classmates." },
                    { q: "What is the teacher’s advice?", options: ["To work fast.", "To be careful and not share passwords.", "To turn off the computer."], a: "To be careful and not share passwords." }
                ]
            },
            {
                title: "Celine’s Smartphone Habits",
                text: "Celine loves her smartphone, but she has strict rules. She goes online at 7 PM every evening. She usually chats with her cousins in Brazil for one hour. She doesn't like cyberbullying, so she blocks rude people and unfollows boring pages. Right now, she is not chatting. She is editing a photo with a cool filter for her TBT post tomorrow. Her birthday is in October, and she wants to post a special story then.",
                questions: [
                    { q: "When does Celine go online?", options: ["In the morning.", "At 7 PM.", "On the weekend."], a: "At 7 PM." },
                    { q: "Who does she usually chat with?", options: ["Her teachers.", "Her cousins in Brazil.", "Her followers."], a: "Her cousins in Brazil." },
                    { q: "What does Celine do with rude people?", options: ["She tags them.", "She blocks them.", "She follows them."], a: "She blocks them." },
                    { q: "What is Celine doing right now?", options: ["She is chatting.", "She is editing a photo.", "She is downloading a game."], a: "She is editing a photo." },
                    { q: "When is Celine's birthday?", options: ["In May.", "In October.", "On Thursday."], a: "In October." }
                ]
            },
            {
                title: "Weekend Offline",
                text: "Most students are always online, but Leo is different. On Saturdays, he usually goes to the park to play soccer. He leaves his phone at home because he wants to be offline. 'It is good to breathe fresh air,' he says. Today is Saturday, and Leo is running in the park with his dog, Max. He is not checking his feed or watching stories. He is happy and active. He only goes back online on Monday morning.",
                questions: [
                    { q: "What does Leo usually do on Saturdays?", options: ["He plays video games.", "He goes to the park to play soccer.", "He uploads videos."], a: "He goes to the park to play soccer." },
                    { q: "Why does he leave his phone at home?", options: ["Because it is broken.", "Because he wants to be offline.", "Because he doesn't have an account."], a: "Because he wants to be offline." },
                    { q: "What is Leo doing right now?", options: ["He is checking his notifications.", "He is running in the park with his dog.", "He is recording a story."], a: "He is running in the park with his dog." },
                    { q: "Is Leo checking his feed at the moment?", options: ["Yes, he is.", "No, he isn't.", "IDK."], a: "No, he isn't." },
                    { q: "When does Leo go online again?", options: ["On Sunday night.", "On Monday morning.", "In January."], a: "On Monday morning." }
                ]
            },
            {
                title: "The PhotoShare App",
                text: "PhotoShare is a very popular app among teenagers. Users can edit pictures, add filters, and tag friends. I usually post one photo every week, usually on Friday evening. My friends always comment nice things and give me many likes. However, sometimes the app is slow. Right now, I am trying to login, but the screen is loading very slowly. I think the wifi is not working well today.",
                questions: [
                    { q: "What can users do on PhotoShare?", options: ["Cook pasta.", "Edit pictures, add filters, and tag friends.", "Ride a bike."], a: "Edit pictures, add filters, and tag friends." },
                    { q: "How often does the writer post a photo?", options: ["Every day.", "Once a week.", "In October."], a: "Once a week." },
                    { q: "When does the writer usually post?", options: ["At 7 AM.", "On Friday evening.", "On Sundays."], a: "On Friday evening." },
                    { q: "What is happening with the app right now?", options: ["It is going viral.", "The screen is loading slowly.", "It is sending spam."], a: "The screen is loading slowly." },
                    { q: "What is the problem according to the writer?", options: ["The smartphone is old.", "The wifi is not working well.", "He forgot the password."], a: "The wifi is not working well." }
                ]
            },
            {
                title: "Headphones and Homework",
                text: "It is 8 PM on Tuesday. Sarah is in her bedroom doing her math homework on her laptop. She is wearing her new headphones because her brother is playing the drums in the next room. Sarah usually studies in silence, but today she is listening to lo-fi music to concentrate. She needs to send her assignment to the teacher by email before 10 PM. She is typing very fast!",
                questions: [
                    { q: "What day and time is it?", options: ["Monday at 7 PM.", "Tuesday at 8 PM.", "Friday at 10 PM."], a: "Tuesday at 8 PM." },
                    { q: "Why is Sarah wearing headphones?", options: ["Because she is recording a video.", "Because her brother is playing the drums.", "Because she is offline."], a: "Because her brother is playing the drums." },
                    { q: "Does Sarah usually listen to music while studying?", options: ["Yes, always.", "No, she usually studies in silence.", "Only on weekends."], a: "No, she usually studies in silence." },
                    { q: "How does Sarah need to send her homework?", options: ["On WhatsApp.", "By email.", "For TBT."], a: "By email." },
                    { q: "How is Sarah typing?", options: ["Very slowly.", "Very fast.", "Badly."], a: "Very fast." }
                ]
            },
            {
                title: "Mr. D’s Tech Advice",
                text: "Hello, Digital Natives! This is Mr. D. Technology is awesome, but we must use it safely. Always check your privacy settings in your profile. Don't post personal information like your address or phone number. I usually spend two hours online every day, and then I go offline to read a book. At the moment, I am recording this message for you. Are you listening carefully? Turn off your notifications sometimes and enjoy the real world!",
                questions: [
                    { q: "Who is the 'Digital Native' Mr. D is talking to?", options: ["The parents.", "The students.", "His followers."], a: "The students." },
                    { q: "What should you check in your profile?", options: ["Your likes.", "Your privacy settings.", "Your hashtag."], a: "Your privacy settings." },
                    { q: "How long does Mr. D usually stay online?", options: ["All day.", "Two hours every day.", "Only in January."], a: "Two hours every day." },
                    { q: "What is Mr. D doing at the moment?", options: ["He is reading a book.", "He is recording a message.", "He is browsing the internet."], a: "He is recording a message." },
                    { q: "What does he suggest you do with notifications?", options: ["Turn them on.", "Turn them off sometimes.", "Download more."], a: "Turn them off sometimes." }
                ]
            },
            {
                title: "Digital Manners",
                text: "When you are online, it is important to have good manners. Do not post mean comments on other people's photos. If you see cyberbullying, you should tell a teacher or your parents. I usually think carefully before I share a post. Right now, I am reading about internet safety. It is important to be a good digital citizen!",
                questions: [
                    { q: "What is the text about?", options: ["Buying a laptop.", "Digital manners.", "Playing games."], a: "Digital manners." },
                    { q: "What should you avoid doing?", options: ["Posting mean comments.", "Editing photos.", "Checking notifications."], a: "Posting mean comments." },
                    { q: "Who should you tell if you see cyberbullying?", options: ["No one.", "A teacher or parents.", "The influencer."], a: "A teacher or parents." },
                    { q: "What does the writer do before sharing a post?", options: ["Tag friends.", "Think carefully.", "LOL."], a: "Think carefully." },
                    { q: "What is the writer doing right now?", options: ["Sharing a meme.", "Reading about safety.", "Browsing TikTok."], a: "Reading about safety." }
                ]
            },
            {
                title: "The New App",
                text: "There is a new app called 'SchoolSync'. Students use it to check their grades and talk to teachers. My friend Albert is using it now to download a history file. I usually check SchoolSync in the evening at 7 PM. It is working very fast today! I am currently uploading my art project to my profile. Technology makes school life easier.",
                questions: [
                    { q: "What is 'SchoolSync'?", options: ["A social media app.", "An educational app.", "A viral video."], a: "An educational app." },
                    { q: "What is Albert doing right now?", options: ["Uploading a meme.", "Downloading a file.", "Posting a photo."], a: "Downloading a file." },
                    { q: "When does the writer usually check the app?", options: ["At 7 AM.", "In the evening.", "On weekends."], a: "In the evening." },
                    { q: "How is the app working today?", options: ["Very slowly.", "Very fast.", "It isn't working."], a: "Very fast." },
                    { q: "What is the writer doing at the moment?", options: ["Chatting with friends.", "Uploading an art project.", "Checking notifications."], a: "Uploading an art project." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER (10 items) ---
        13: [
            { title: "The Morning Routine", audio: "Hello! My name is Sarah. I usually wake up at 6:30 AM on weekdays. I immediately check my smartphone for new notifications. Today is Tuesday, and right now I am having breakfast. I am not watching TV; I am scrolling through my Instagram feed to see my friends' stories. I usually go online for thirty minutes before school starts at 8:00 AM.", questions: [
                { q: "What time does Sarah usually wake up?", options: ["At 6:30 AM.", "At 8:00 AM.", "At 7:00 AM."], a: "At 6:30 AM." },
                { q: "What does she check immediately?", options: ["Her laptop.", "Her notifications.", "Her homework."], a: "Her notifications." },
                { q: "What is Sarah doing right now?", options: ["Watching TV.", "Having breakfast.", "Sleeping."], a: "Having breakfast." },
                { q: "Which social media is she using at the moment?", options: ["TikTok.", "WhatsApp.", "Instagram."], a: "Instagram." },
                { q: "When does her school start?", options: ["In the afternoon.", "At 8:00 AM.", "On the weekend."], a: "At 8:00 AM." }
            ]},
            { title: "The Viral Video", audio: "Albert is in the computer lab at REACH school. He usually studies history on Monday afternoons, but today he is excited. He is watching a video that is going viral on the internet. It is a meme of a cat playing the piano! Albert is laughing out loud (LOL) and tagging his friend Celine in the comments. The video already has two million views!", questions: [
                { q: "Where is Albert right now?", options: ["At home.", "In the computer lab.", "In the library."], a: "In the computer lab." },
                { q: "What does he usually do on Monday afternoons?", options: ["Plays games.", "Studies history.", "Records stories."], a: "Studies history." },
                { q: "What is happening to the video he is watching?", options: ["It is being deleted.", "It is going viral.", "It is loading slowly."], a: "It is going viral." },
                { q: "What slang does Albert use because he is happy?", options: ["OMG.", "BRB.", "LOL."], a: "LOL." },
                { q: "Who is Albert tagging in the comments?", options: ["His teacher.", "Celine.", "His mom."], a: "Celine." }
            ]},
            { title: "Digital Influencers", audio: "My sister Mia is a famous digital influencer. She has over five hundred thousand followers on TikTok. She usually posts three videos every week, mostly on Wednesdays and Fridays. Right now, she is very busy in her bedroom. She is recording a new story to thank her fans for the likes. She says, 'OMG, I love my followers!' She is always online during the day.", questions: [
                { q: "What is Mia’s profession?", options: ["Teacher.", "Digital influencer.", "Doctor."], a: "Digital influencer." },
                { q: "How many followers does she have?", options: ["Fifty thousand.", "Five hundred thousand.", "Five million."], a: "Five hundred thousand." },
                { q: "When does she usually post her videos?", options: ["On Mondays.", "On Wednesdays and Fridays.", "Only on weekends."], a: "On Wednesdays and Fridays." },
                { q: "What is she doing at this moment?", options: ["Sleeping.", "Recording a new story.", "Checking her feed."], a: "Recording a new story." },
                { q: "Is Mia offline right now?", options: ["Yes, she is.", "No, she is always online during the day.", "IDK."], a: "No, she is always online during the day." }
            ]},
            { title: "Tech Problems", audio: "Mike is trying to do his homework on his laptop, but he has a problem. The wifi in his house is not working well today. The files are loading very slowly. He is sending a message to his teacher on WhatsApp to explain the situation. He writes: 'BRB, I am going to my cousin's house to use his internet.' Mike usually finishes his work at 5:00 PM, but today he is late.", questions: [
                { q: "What device is Mike using for his homework?", options: ["A tablet.", "A laptop.", "A smartphone."], a: "A laptop." },
                { q: "What is the problem with the internet?", options: ["It is too fast.", "It is not working well.", "There is no password."], a: "It is not working well." },
                { q: "How is Mike communicating with his teacher?", options: ["By email.", "On WhatsApp.", "By post."], a: "On WhatsApp." },
                { q: "Where is Mike going right now?", options: ["To school.", "To his cousin's house.", "To the park."], a: "To his cousin's house." },
                { q: "Is Mike on time with his work today?", options: ["Yes, he is.", "No, he is late.", "He is offline."], a: "No, he is late." }
            ]},
            { title: "Weekend Habits", audio: "On Saturdays, Celine usually goes to the beach with her family. She loves to swim, but she always leaves her smartphone in the car. She prefers to be offline during the weekend. However, this Saturday is different because it is raining. Right now, Celine is sitting on the sofa with her tablet. She is downloading a new movie to watch with her brother. They are having a great time together.", questions: [
                { q: "Where does Celine usually go on Saturdays?", options: ["To school.", "To the beach.", "To the mall."], a: "To the beach." },
                { q: "What is her habit regarding her phone on weekends?", options: ["She is always online.", "She prefers to be offline.", "She records many stories."], a: "She prefers to be offline." },
                { q: "Why is this Saturday different?", options: ["Because she is traveling.", "Because it is raining.", "Because it is her birthday."], a: "Because it is raining." },
                { q: "What is Celine doing right now?", options: ["Swimming.", "Downloading a movie on her tablet.", "Tagging friends."], a: "Downloading a movie on her tablet." },
                { q: "Who is Celine with at the moment?", options: ["Her cousins.", "Her brother.", "Her teacher."], a: "Her brother." }
            ]},
            { title: "Throwback Thursday", audio: "Today is Thursday, so it is TBT day! Many people are posting old photos on social media. Sarah is looking at her photo gallery right now. She is choosing a picture from her trip to France in 2023. She is editing the photo with a beautiful filter. She is writing a caption with the hashtag #TBT and #France. She usually gets many comments on her TBT posts because her photos are very professional.", questions: [
                { q: "Why is today a special day for social media?", options: ["It is New Year.", "It is TBT day (Thursday).", "It is a holiday."], a: "It is TBT day (Thursday)." },
                { q: "What is Sarah doing at the moment?", options: ["Taking a new photo.", "Looking at her photo gallery.", "Browsing TikTok."], a: "Looking at her photo gallery." },
                { q: "Where was the photo taken?", options: ["In Brazil.", "In France.", "In Australia."], a: "In France." },
                { q: "What is Sarah doing to the photo before posting?", options: ["Deleting it.", "Editing it with a filter.", "Printing it."], a: "Editing it with a filter." },
                { q: "What does she include in her post?", options: ["A link.", "Hashtags like #TBT.", "Her wifi password."], a: "Hashtags like #TBT." }
            ]},
            { title: "The Online Gamer", audio: "Leo is a pro gamer. He usually plays video games for five hours every day. He has an expensive desktop computer with two monitors. At this moment, he is not playing; he is broadcasting a live stream to his followers. He is wearing his headphones and chatting with people from all over the world. He often uses slang like 'OMG' when something exciting happens in the stream.", questions: [
                { q: "What is Leo’s hobby/job?", options: ["YouTuber.", "Pro gamer.", "Student."], a: "Pro gamer." },
                { q: "How long does he usually play every day?", options: ["One hour.", "Five hours.", "All night."], a: "Five hours." },
                { q: "What is Leo doing right now?", options: ["Playing offline.", "Broadcasting a live stream.", "Sleeping."], a: "Broadcasting a live stream." },
                { q: "What is Leo wearing at the moment?", options: ["A uniform.", "Headphones.", "Glasses."], a: "Headphones." },
                { q: "Who is Leo chatting with?", options: ["Only his brother.", "People from all over the world.", "His teacher."], a: "People from all over the world." }
            ]},
            { title: "Mr. D’s Digital Life", audio: "Hello again! It's Mr. D. I am a digital native, but I also like the real world. I usually check my email at 9:00 AM and then I work on my laptop. In the afternoon, I often go for a walk and stay offline for two hours. Right now, I am sitting in a cafe. I am using the public wifi to upload a new lesson for you. I hope you are studying carefully! See you online!", questions: [
                { q: "What time does Mr. D usually check his email?", options: ["At 7:00 AM.", "At 9:00 AM.", "At night."], a: "At 9:00 AM." },
                { q: "What device does he use for work?", options: ["A tablet.", "A laptop.", "A smartphone."], a: "A laptop." },
                { q: "What does he do in the afternoon to stay offline?", options: ["He watches TV.", "He goes for a walk.", "He plays games."], a: "He goes for a walk." },
                { q: "Where is Mr. D at the moment?", options: ["In the classroom.", "In a cafe.", "At home."], a: "In a cafe." },
                { q: "What is he doing right now?", options: ["Having lunch.", "Uploading a new lesson.", "Recording a story."], a: "Uploading a new lesson." }
            ]},
            { title: "Cyber Safety", audio: "It is important to use strong passwords for your accounts. I usually change my password every six months. Right now, I am updating my security settings. My brother is helping me because he is a programmer. He always says: 'Don't share your private data with strangers online!'", questions: [
                { q: "What is important for accounts?", options: ["A funny profile picture.", "Strong passwords.", "Many followers."], a: "Strong passwords." },
                { q: "How often does the speaker change passwords?", options: ["Every week.", "Every six months.", "Never."], a: "Every six months." },
                { q: "What is the speaker doing right now?", options: ["Playing a game.", "Updating security settings.", "Checking notifications."], a: "Updating security settings." },
                { q: "Who is helping the speaker?", options: ["The teacher.", "His brother.", "Mr. D."], a: "His brother." },
                { q: "What is the brother's job?", options: ["A manager.", "A programmer.", "A firefighter."], a: "A programmer." }
            ]},
            { title: "Digital Distractions", audio: "I usually study for two hours at night. However, right now I am not studying; I am watching hilarious cat memes. My phone is ringing, but I am not answering it. I need to focus! I usually leave my phone in another room when I study, but tonight I am distracted.", questions: [
                { q: "When does the speaker usually study?", options: ["In the morning.", "At night.", "On weekends."], a: "At night." },
                { q: "What is the speaker doing right now?", options: ["Studying math.", "Watching hilarious memes.", "Uploading a video."], a: "Watching hilarious memes." },
                { q: "Is the phone ringing?", options: ["Yes, it is.", "No, it isn't.", "IDK."], a: "Yes, it is." },
                { q: "What is the speaker's habit for focusing?", options: ["Turn off the wifi.", "Leave the phone in another room.", "Wear headphones."], a: "Leave the phone in another room." },
                { q: "Is the speaker focusing well tonight?", options: ["Yes, very well.", "No, he is distracted.", "Yes, he is studying."], a: "No, he is distracted." }
            ]}
        ],

        // --- TYPE 14: COMPLETE TEXT (10 items) ---
        14: [
            { title: "My Social Media Habits", text: "I am a very active user on social media. I [1] (usually/am usually/now) post two photos every week on my feed. I love when my friends [2] (like/likes/am liking) my pictures and write nice comments. Right now, I [3] (am sharing/share/shares) a funny video of a dancing cat with my best friend. It is [4] (going/goes/go) viral very fast! I am also [5] (tagging/tag/tags) my sister because she loves cats.", answers: ["usually", "like", "am sharing", "going", "tagging"] },
            { title: "Technology at Home", text: "In my house, we have many devices. My father [1] (uses/is using/use) a desktop computer for work in the morning. My sister has a [2] (tablet/story/hashtag) with a big screen for watching movies. Right now, she [3] (is watching/watches/watch) a series on Netflix. I am using my [4] (laptop/headphones/app) to do my homework because it is portable. I am [5] (online/offline/download) at the moment, but I go offline at 10 PM.", answers: ["uses", "tablet", "is watching", "laptop", "online"] },
            { title: "Routine vs. Now", text: "Sarah [1] (usually wears/is usually wearing/wears) glasses when she [2] (studies/is studying/study). But look at her today! She [3] (is wearing/wears/wear) contact lenses because she is going to a party. She is also [4] (recording/records/record) a story for Instagram right now to show her new look. Her friends [5] (are commenting/comment/comments) how beautiful she looks at this moment.", answers: ["usually wears", "studies", "is wearing", "recording", "are commenting"] },
            { title: "Prepositions of Time", text: "My digital life is organized. I check my notifications [1] (in/on/at) the morning, right after I wake up [2] (in/on/at) 7:15. I usually post photos [3] (in/on/at) Saturdays because I have more free time. My birthday is [4] (in/on/at) May, and I always have a big online celebration with my family. [5] (In/On/At) night, I always turn off my wifi to sleep well.", answers: ["in", "at", "on", "in", "At"] },
            { title: "Internet Slang", text: "I am chatting with Albert on WhatsApp. He sent me a [1] (meme/account/laptop) and it is so funny! I wrote '[2] (LOL/BRB/IDK)' because I am laughing a lot. Then, I saw a strange message. '[3] (OMG/BRB/TBT)', look at this! I [4] (IDK/LOL/OMG) what to do, so I am asking my brother for help. He says: 'Wait a minute, [5] (BRB/LOL/TBT)', I am going to the kitchen.", answers: ["meme", "LOL", "OMG", "IDK", "BRB"] },
            { title: "Managing My Profile", text: "Celine is very careful with her [1] (profile/hashtag/tablet). She [2] (usually blocks/is usually blocking/blocks) spam accounts immediately. She [3] (follows/is following/follow) only her real friends and famous [4] (influencers/memes/logins) she likes. Right now, she [5] (is unfollowing/unfollows/unfollow) a page because it posts too many ads. She likes to keep her feed clean and interesting.", answers: ["profile", "usually blocks", "follows", "influencers", "is unfollowing"] },
            { title: "The Life Online", text: "Being a [1] (digital/digit/digitally) native is fun! We are always [2] (online/offline/download) to talk to our friends. But it is important to be [3] (offline/online/hashtag) sometimes. I [4] (usually stay/am usually staying/stays) away from my phone [5] (in/on/at) Sundays. I prefer to play soccer in the park with my dog.", answers: ["digital", "online", "offline", "usually stay", "on"] },
            { title: "Loading Problems", text: "The wifi at school is very [1] (slow/fast/online) today. I am trying to [2] (download/tag/like) a new app, but the file is [3] (loading/loads/load) very slowly. Albert [4] (is uploading/uploads/upload) his project right now, and he is very nervous. 'Please, work!' he says. We [5] (usually use/are usually using/uses) the computer lab when the wifi is bad.", answers: ["slow", "download", "loading", "is uploading", "usually use"] },
            { title: "Tech Skills", text: "My brother [1] (is/are/am) a pro gamer. He [2] (usually/right now) plays games on his computer. At the moment, he [3] (is broadcasting/broadcasts/broadcast) a stream. He [4] (is wearing/wears/wear) his headphones to listen [5] (carefully/slowly/badly).", answers: ["is", "usually", "is broadcasting", "is wearing", "carefully"] },
            { title: "Viral Content", text: "Look! This video [1] (is going/goes/go) viral. It [2] (has/is having/have) millions of views [3] (now/usually). I [4] (am sharing/share/shares) it on my feed [5] (right now/on Fridays).", answers: ["is going", "has", "now", "am sharing", "right now"] }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 items - narrative format) ---
        15: [
            {
                title: "Social Media Morning",
                audio: "I am posting a new photo on Instagram. I usually check my feed in the morning. Right now, I am tagging my best friends.",
                text: "I am [1] a new photo on [2]. I usually [3] my feed in the [4]. Right now, I am [5] my best friends.",
                answers: ["posting", "Instagram", "check", "morning", "tagging"]
            },
            {
                title: "Slow Connection",
                audio: "The wifi is not working well at the moment. I am uploading a video, but it is loading very slowly.",
                text: "The [1] is not working well at the [2]. I am [3] a video, but it is [4] very [5].",
                answers: ["wifi", "moment", "uploading", "loading", "slowly"]
            },
            {
                title: "The Party Look",
                audio: "Sarah usually wears glasses at school. But today she is wearing contact lenses for the party.",
                text: "Sarah [1] wears [2] at school. But [3] she is wearing contact [4] for the [5].",
                answers: ["usually", "glasses", "today", "lenses", "party"]
            },
            {
                title: "Birthday Plans",
                audio: "My birthday is in October. I usually have a party on Saturday at 7:00 PM.",
                text: "My [1] is in [2]. I usually [3] a party on [4] at [5] 7:00 PM.",
                answers: ["birthday", "October", "have", "Saturday", "at"]
            },
            {
                title: "The Influencer",
                audio: "He is a famous digital influencer. He has many followers. He is recording a new story right now.",
                text: "He is a [1] digital [2]. He has many [3]. He is [4] a new [5] right now.",
                answers: ["famous", "influencer", "followers", "recording", "story"]
            },
            {
                title: "Chatting Online",
                audio: "I use internet slang like LOL and OMG. I am chatting with my friends on WhatsApp.",
                text: "I use [1] slang like [2] and [3]. I am [4] with my [5] on WhatsApp.",
                answers: ["internet", "LOL", "OMG", "chatting", "friends"]
            },
            {
                title: "Weekend Habits",
                audio: "I am offline on the weekend. I usually go to the park to play soccer.",
                text: "I am [1] on the [2]. I [3] go to the [4] to play [5].",
                answers: ["offline", "weekend", "usually", "park", "soccer"]
            },
            {
                title: "Internet Safety",
                audio: "Please don't share fake news. You should block spam accounts on your profile.",
                text: "Please don't [1] [2] news. You should [3] [4] accounts on your [5].",
                answers: ["share", "fake", "block", "spam", "profile"]
            },
            {
                title: "Getting Ready",
                audio: "I usually wake up at 7 AM. At the moment I am getting up from my bed.",
                text: "I [1] wake up at [2] AM. At the [3] I am [4] up from my [5].",
                answers: ["usually", "7", "moment", "getting", "bed"]
            },
            {
                title: "School App",
                audio: "The computer is slow today. He is downloading a big file for school. It is loading now.",
                text: "The [1] is [2] today. He is [3] a big file for [4]. It is [5] now.",
                answers: ["computer", "slow", "downloading", "school", "loading"]
            }
        ]
    }
});