/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */
/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * GRADE 8, BIMESTER 3, CHAPTER 5
 * BATCH 1: TYPES 1 TO 5 (40 items each)
 */

window.initExercise({
    id: "8-3-5",
    grade: "8th Grade",
    bimester: "3",
    chapter: "5",
    title: "Technology and Present Perfect",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES (40 ITEMS) ---
        1: [
            { words: ["ever", "you", "seen", "Have", "meme", "this"], correct: "Have you ever seen this meme" },
            { words: ["never", "used", "I", "have", "app", "that"], correct: "I have never used that app" },
            { words: ["has", "She", "to", "use", "learned", "social", "media"], correct: "She has learned how to use social media" },
            { words: ["adapted", "Parents", "haven't", "my", "yet"], correct: "My parents haven't adapted yet" },
            { words: ["lab", "gone", "brother", "My", "has", "to", "the"], correct: "My brother has gone to the lab" },
            { words: ["been", "I", "there", "have", "twice", "today"], correct: "I have been there twice today" },
            { words: ["shared", "you", "Have", "the", "yet", "link"], correct: "Have you shared the link yet" },
            { words: ["already", "He", "downloaded", "has", "game", "the"], correct: "He has already downloaded the game" },
            { words: ["never", "They", "an", "online", "played", "game", "have"], correct: "They have never played an online game" },
            { words: ["yet", "hasn't", "She", "updated", "profile", "her"], correct: "She hasn't updated her profile yet" },
            { words: ["just", "I", "uploaded", "have", "video", "the"], correct: "I have just uploaded the video" },
            { words: ["ever", "Has", "viral", "gone", "post", "your"], correct: "Has your post ever gone viral" },
            { words: ["since", "known", "him", "have", "I", "2010"], correct: "I have known him since 2010" },
            { words: ["ten", "had", "for", "She", "has", "laptop", "that", "years"], correct: "She has had that laptop for ten years" },
            { words: ["has", "grandma", "My", "digital", "become", "native", "a"], correct: "My grandma has become a digital native" },
            { words: ["gap", "is", "a", "big", "generation", "There"], correct: "There is a big generation gap" },
            { words: ["typed", "have", "message", "they", "the"], correct: "Have they typed the message" },
            { words: ["many", "downloaded", "I", "files", "have"], correct: "I have downloaded many files" },
            { words: ["clicked", "already", "has", "the", "He", "link"], correct: "He has already clicked the link" },
            { words: ["to", "Japan", "been", "they", "Have", "ever"], correct: "Have they ever been to Japan" },
            { words: ["gone", "cinema", "has", "to", "She", "the"], correct: "She has gone to the cinema" },
            { words: ["haven't", "We", "our", "checked", "emails"], correct: "We haven't checked our emails" },
            { words: ["just", "started", "meeting", "The", "has"], correct: "The meeting has just started" },
            { words: ["how", "long", "lived", "you", "have", "here"], correct: "How long have you lived here" },
            { words: ["has", "He", "influencer", "an", "become"], correct: "He has become an influencer" },
            { words: ["password", "you", "Have", "changed", "your"], correct: "Have you changed your password" },
            { words: ["a", "long", "worked", "there", "for", "I", "have", "time"], correct: "I have worked there for a long time" },
            { words: ["seen", "She", "that", "hasn't", "movie"], correct: "She hasn't seen that movie" },
            { words: ["a", "created", "new", "We", "have", "profile"], correct: "We have created a new profile" },
            { words: ["just", "the", "updated", "app", "has"], correct: "He has just updated the app" }, // Adjusted subject based on logic
            { words: ["already", "scrolled", "I", "have", "feed", "the"], correct: "I have already scrolled the feed" },
            { words: ["been", "has", "she", "offline", "all", "day"], correct: "She has been offline all day" },
            { words: ["reached", "million", "has", "a", "views", "It"], correct: "It has reached a million views" },
            { words: ["never", "followed", "I", "have", "him"], correct: "I have never followed him" },
            { words: ["a", "sent", "message", "she", "Has"], correct: "Has she sent a message" },
            { words: ["has", "to", "He", "school", "gone"], correct: "He has gone to school" },
            { words: ["been", "have", "We", "London", "to", "twice"], correct: "We have been to London twice" },
            { words: ["any", "post", "seen", "you", "Have"], correct: "Have you seen any post" },
            { words: ["not", "yet", "finished", "I", "have"], correct: "I have not finished yet" },
            { words: ["since", "here", "been", "has", "She", "morning"], correct: "She has been here since morning" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES (40 ITEMS) ---
        2: [
            { lines: ["Have you seen the new meme?", "No, I haven't.", "My grandma sent it.", "She is a digital native now."], order: [0, 1, 2, 3] },
            { lines: ["Where is your brother?", "He has gone to the lab.", "Has he finished his project?", "Not yet."], order: [0, 1, 2, 3] },
            { lines: ["I have been to Paris twice.", "Wow! Did you like it?", "Yes, I loved the food.", "I have never been there."], order: [0, 1, 2, 3] },
            { lines: ["Have you updated your profile?", "Yes, I have already done it.", "It looks very similar to mine.", "We have similar tastes!"], order: [0, 1, 2, 3] },
            { lines: ["Did you see my comment?", "I haven't checked my feed yet.", "I am offline today.", "You should log in now."], order: [0, 1, 2, 3] },
            { lines: ["Has the video gone viral?", "Yes, it has reached a million views.", "I have already shared it.", "That is amazing!"], order: [0, 1, 2, 3] },
            { lines: ["How long have you had this tablet?", "I have had it for two years.", "Is it still fast?", "Yes, it works perfectly."], order: [0, 1, 2, 3] },
            { lines: ["Have you ever used VR?", "No, I have never tried it.", "It is a great experience.", "I want to try it today."], order: [0, 1, 2, 3] },
            { lines: ["My parents haven't adapted to tech.", "There is a big generation gap.", "They still use traditional media.", "My grandma is different; she loves apps."], order: [0, 1, 2, 3] },
            { lines: ["Has she sent the message?", "No, she hasn't typed it yet.", "Tell her to hurry up.", "I have just called her."], order: [0, 1, 2, 3] },
            { lines: ["Have you ever met an influencer?", "Yes, I met one last year.", "Was it cool?", "I have already posted the photo."], order: [0, 1, 2, 3] },
            { lines: ["Where is Celine?", "She has gone to the store.", "Has she been there long?", "No, she has just left."], order: [0, 1, 2, 3] },
            { lines: ["I have never seen this website.", "It is a new news source.", "Have you registered yet?", "No, I haven't."], order: [0, 1, 2, 3] },
            { lines: ["How long have you been online?", "I have been here since 8 AM.", "You need a digital detox.", "I agree, my eyes are tired."], order: [0, 1, 2, 3] },
            { lines: ["Have you downloaded the file?", "Yes, I have already done it.", "Can you share it with me?", "I have just sent it to your email."], order: [0, 1, 2, 3] },
            { lines: ["Has the printer worked today?", "No, it has been offline all morning.", "Have you called the technician?", "I have already sent a message."], order: [0, 1, 2, 3] },
            { lines: ["Have you ever used a typewriter?", "No, I have never seen one.", "My parents had one for years.", "That is traditional media!"], order: [0, 1, 2, 3] },
            { lines: ["Have they arrived at the party?", "Yes, they have been there for an hour.", "Have you seen them?", "No, I haven't arrived yet."], order: [0, 1, 2, 3] },
            { lines: ["Have you ever eaten sushi?", "Yes, I have tried it once.", "Did you like it?", "No, I have never liked raw fish."], order: [0, 1, 2, 3] },
            { lines: ["Has the app crashed?", "Yes, it has crashed twice today.", "Have you updated it?", "No, I haven't updated it yet."], order: [0, 1, 2, 3] },
            { lines: ["I have just seen a great meme.", "Can you share it?", "I have already posted it on my story.", "I will check it now."], order: [0, 1, 2, 3] },
            { lines: ["Where is the teacher?", "She has gone to the principal's office.", "Has she been there long?", "I have no idea."], order: [0, 1, 2, 3] },
            { lines: ["Have you ever lost your phone?", "Yes, I have lost it once.", "Did you find it?", "No, I have bought a new one."], order: [0, 1, 2, 3] },
            { lines: ["Have you browsed the new site?", "No, I have never heard of it.", "It has many learning opportunities.", "I will check it tonight."], order: [0, 1, 2, 3] },
            { lines: ["Has the sun set yet?", "Yes, it has been dark for an hour.", "Have you turned on the lights?", "I have just done it."], order: [0, 1, 2, 3] },
            { lines: ["Have you ever visited London?", "I have been there three times.", "Is it a big city?", "Yes, it is incredible."], order: [0, 1, 2, 3] },
            { lines: ["Have you seen the generation gap?", "Yes, my parents don't use TikTok.", "I have already explained it to them.", "But they haven't adapted yet."], order: [0, 1, 2, 3] },
            { lines: ["Has she typed her username?", "Yes, she has just entered the site.", "Has she found her profile?", "Yes, it has already loaded."], order: [0, 1, 2, 3] },
            { lines: ["Have you ever used a laptop?", "Yes, I have used one for years.", "Do you prefer a tablet?", "No, I have never liked small screens."], order: [0, 1, 2, 3] },
            { lines: ["Have they streamed the movie?", "No, they haven't started yet.", "I have already watched it.", "Don't tell me the ending!"], order: [0, 1, 2, 3] },
            { lines: ["Have you ever broken a bone?", "No, I have never been to a hospital.", "You are lucky!", "I have always been very careful."], order: [0, 1, 2, 3] },
            { lines: ["Have you updated the software?", "No, it has been installing for hours.", "Is your internet slow?", "Yes, it has been a hindrance."], order: [0, 1, 2, 3] },
            { lines: ["Have you seen my message?", "No, I haven't opened my app yet.", "I sent it two hours ago.", "I have been very busy."], order: [0, 1, 2, 3] },
            { lines: ["Have you ever played this game?", "I have played it many times.", "Is it easy?", "No, I have never won."], order: [0, 1, 2, 3] },
            { lines: ["Where has Sarah gone?", "She has gone to the library.", "Has she been there before?", "Yes, many times."], order: [0, 1, 2, 3] },
            { lines: ["Have you seen the viral video?", "Yes, I have already watched it twice.", "Was it funny?", "It was the best thing ever."], order: [0, 1, 2, 3] },
            { lines: ["How long has he lived in Italy?", "He has been there since 2015.", "Has he learned the language?", "Yes, he has learned a lot."], order: [0, 1, 2, 3] },
            { lines: ["Have you checked the source?", "No, I have never seen this blog.", "It looks like fake news.", "I will search for the truth."], order: [0, 1, 2, 3] },
            { lines: ["Has your brother bought a laptop?", "No, he has bought a tablet.", "Is it convenient?", "Yes, it has improved his life."], order: [0, 1, 2, 3] },
            { lines: ["Have you ever used a 3D printer?", "No, I haven't tried it yet.", "It is a great technology.", "I have always wanted to see one."], order: [0, 1, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS (40 ITEMS) ---
        3: [
            { q: "Have you ever seen a viral video?", options: ["Yes, I have.", "Yes, I has.", "Yes, I saw.", "Yes, I having."], a: "Yes, I have." },
            { q: "Has she updated her profile yet?", options: ["No, she hasn't.", "No, she haven't.", "No, she don't.", "No, she not."], a: "No, she hasn't." },
            { q: "Have they gone to the lab?", options: ["Yes, they have.", "Yes, they has.", "Yes, they gone.", "Yes, they go."], a: "Yes, they have." },
            { q: "Has it rained today?", options: ["No, it hasn't.", "No, it haven't.", "No, it doesn't.", "No, it not has."], a: "No, it hasn't." },
            { q: "Have we met before?", options: ["Yes, we have.", "Yes, we met.", "Yes, we has.", "Yes, we having."], a: "Yes, we have." },
            { q: "Has your cat ever caught a mouse?", options: ["Yes, it has.", "Yes, it have.", "Yes, he does.", "Yes, it did."], a: "Yes, it has." },
            { q: "Have you finished your homework?", options: ["No, I haven't.", "No, I didn't.", "No, I has not.", "No, I'm not."], a: "No, I haven't." },
            { q: "Has Albert ever used that app?", options: ["Yes, he has.", "Yes, he have.", "Yes, he do.", "Yes, he used."], a: "Yes, he has." },
            { q: "Have your parents adapted to tech?", options: ["No, they haven't.", "No, they hasn't.", "No, they don't.", "No, they not."], a: "No, they haven't." },
            { q: "Has the video gone viral?", options: ["Yes, it has.", "Yes, it have.", "Yes, he has.", "Yes, it goes."], a: "Yes, it has." },
            { q: "Have you ever been to Japan?", options: ["Yes, I have.", "Yes, I has.", "No, I ever.", "Yes, I'm been."], a: "Yes, I have." },
            { q: "Has she typed the email?", options: ["Yes, she has.", "Yes, she have.", "Yes, she did.", "No, she not."], a: "Yes, she has." },
            { q: "Have they already downloaded the app?", options: ["Yes, they have.", "Yes, they has.", "No, they don't.", "Yes, they already."], a: "Yes, they have." },
            { q: "Has he been to London?", options: ["No, he hasn't.", "No, he haven't.", "No, he isn't.", "No, he don't."], a: "No, he hasn't." },
            { q: "Have you ever shared a meme?", options: ["Yes, I have.", "Yes, I'm shared.", "No, I've.", "Yes, I has."], a: "Yes, I have." },
            { q: "Has the meeting started?", options: ["Yes, it has.", "Yes, it have.", "Yes, he has.", "No, it not."], a: "Yes, it has." },
            { q: "Have we been offline all day?", options: ["Yes, we have.", "No, we hasn't.", "Yes, we were.", "No, we haven't been."], a: "Yes, we have." },
            { q: "Has she learned to use social media?", options: ["Yes, she has.", "Yes, she have.", "No, she don't.", "Yes, she learned."], a: "Yes, she has." },
            { q: "Have you ever used VR?", options: ["No, I haven't.", "No, I hasn't.", "No, I never.", "No, I don't."], a: "No, I haven't." },
            { q: "Has the generation gap affected you?", options: ["Yes, it has.", "Yes, it have.", "No, it don't.", "Yes, it does."], a: "Yes, it has." },
            { q: "If someone went to a place and stayed there, we say:", options: ["They have gone.", "They have been.", "They are here.", "They has gone."], a: "They have gone." },
            { q: "If someone visited a place and is back now, we say:", options: ["They have been.", "They have gone.", "They were there.", "They has been."], a: "They have been." },
            { q: "Millennials were born:", options: ["Between 1981-1996.", "After 2013.", "In 1950.", "Today."], a: "Between 1981-1996." },
            { q: "A 'digital native' is someone who:", options: ["Grew up with technology.", "Hates the internet.", "Doesn't have a phone.", "Is very old."], a: "Grew up with technology." },
            { q: "Eye strain is caused by:", options: ["Looking at screens too long.", "Eating sushi.", "Going to Paris.", "Sleeping too much."], a: "Looking at screens too long." },
            { q: "If you have 'never' done something, it means:", options: ["Zero times.", "Many times.", "Once.", "Yesterday."], a: "Zero times." },
            { q: "A 'meme' is usually:", options: ["A funny image or video.", "A physical newspaper.", "A type of laptop.", "A generation name."], a: "A funny image or video." },
            { q: "To 'download' means to:", options: ["Get a file from the internet.", "Send a file to the internet.", "Delete a file.", "Break a computer."], a: "Get a file from the internet." },
            { q: "To 'upload' means to:", options: ["Send a file to the internet.", "Get a file from the internet.", "Buy a new phone.", "Scroll a feed."], a: "Send a file to the internet." },
            { q: "If a video is 'viral', it:", options: ["Spreads very fast online.", "Is a secret.", "Is very slow.", "Is broken."], a: "Spreads very fast online." },
            { q: "'Yet' is usually used in:", options: ["Negatives and questions.", "Affirmatives only.", "The middle of a sentence.", "Past tense."], a: "Negatives and questions." },
            { q: "'Already' means:", options: ["Sooner than expected.", "At no time.", "In the future.", "Never."], a: "Sooner than expected." },
            { q: "Generation Alpha starts in:", options: ["2013.", "1980.", "1997.", "2000."], a: "2013." },
            { q: "A 'generation gap' refers to:", options: ["Differences between age groups.", "A broken bridge.", "A fast internet.", "A news source."], a: "Differences between age groups." },
            { q: "If you 'scrolled' your feed, you:", options: ["Moved the screen up/down.", "Deleted your account.", "Bought a tablet.", "Called a friend."], a: "Moved the screen up/down." },
            { q: "'Have you ever...?' asks about:", options: ["Life experiences.", "Tomorrow's plans.", "A specific time yesterday.", "Physical health."], a: "Life experiences." },
            { q: "A 'hindrance' is something that:", options: ["Makes things difficult.", "Helps you win.", "Is very fast.", "Is digital."], a: "Makes things difficult." },
            { q: "To 'stream' a movie means to:", options: ["Watch it online as it loads.", "Download it first.", "Buy it at a store.", "Read the book."], a: "Watch it online as it loads." },
            { q: "'Since' is used for:", options: ["A starting point in time.", "A duration of time.", "A future date.", "A place."], a: "A starting point in time." },
            { q: "'For' is used for:", options: ["A duration of time.", "A starting point.", "A person.", "A reason."], a: "A duration of time." }
        ],

        // --- TYPE 4: FIND MEANING (40 ITEMS) ---
        4: [
            { sent: "The **generation gap** is clear between us.", word: "generation gap", options: ["Diferença de idade", "Conflito de gerações", "Grupo de amigos", "Falta de internet"], a: "Conflito de gerações", def: "Differences in perspective or opinion between people of different generations." },
            { sent: "He is a **digital native**.", word: "digital native", options: ["Pessoa analógica", "Nativo digital", "Usuário de rádio", "Programador"], a: "Nativo digital", def: "A person born or brought up during the age of digital technology." },
            { sent: "I love this **meme**.", word: "meme", options: ["Piada", "Meme", "Foto de perfil", "Vídeo longo"], a: "Meme", def: "An image, video, or piece of text, typically humorous in nature, that is copied and spread rapidly by internet users." },
            { sent: "My phone **crashed**.", word: "crashed", options: ["Quebrou", "Travou / Falhou", "Sumiu", "Carregou"], a: "Travou / Falhou", def: "When an application or system suddenly stops working." },
            { sent: "This is a new **trend**.", word: "trend", options: ["Notícia", "Tendência", "Marca", "Fofoca"], a: "Tendência", def: "A general direction in which something is developing or changing." },
            { sent: "She is an **influencer**.", word: "influencer", options: ["Seguidora", "Influenciadora", "Atriz", "Professora"], a: "Influenciadora", def: "A person with many followers who influences opinions and behaviors." },
            { sent: "I need a **digital detox**.", word: "digital detox", options: ["Limpeza de disco", "Desintoxicação digital", "Novo celular", "Mais internet"], a: "Desintoxicação digital", def: "A period of time when a person refrains from using electronic devices." },
            { sent: "Technology is **convenient**.", word: "convenient", options: ["Difícil", "Conveniente", "Cara", "Lenta"], a: "Conveniente", def: "Something that fits well with a person's needs, activities, and plans." },
            { sent: "Constant notifications are a **distraction**.", word: "distraction", options: ["Diversão", "Distração", "Ajuda", "Notícia"], a: "Distração", def: "Something that prevents someone from giving full attention to something else." },
            { sent: "I have **eye strain**.", word: "eye strain", options: ["Dor de cabeça", "Cansaço visual", "Visão perfeita", "Sono"], a: "Cansaço visual", def: "Eye fatigue caused by prolonged use of screens." },
            { sent: "**Millennials** remember life before smartphones.", word: "Millennials", options: ["Idosos", "Millennials (Geração Y)", "Crianças", "Nativos digitais"], a: "Millennials (Geração Y)", def: "People born approximately between 1981 and 1996." },
            { sent: "I need to **upload** this photo.", word: "upload", options: ["Baixar", "Carregar / Subir", "Deletar", "Tirar"], a: "Carregar / Subir", def: "To transfer data from a computer or device to the internet." },
            { sent: "Let's **stream** the concert.", word: "stream", options: ["Gravar", "Transmitir / Assistir online", "Baixar", "Comprar"], a: "Transmitir / Assistir online", def: "To transmit or receive data as a continuous flow over the internet." },
            { sent: "Please **scrolled** through your feed.", word: "scrolled", options: ["Olhou", "Rolou (a tela)", "Apagou", "Curtiu"], a: "Rolou (a tela)", def: "To move text or graphics up or down on a screen." },
            { sent: "This video went **viral**.", word: "viral", options: ["Sumiu", "Viralizou", "Foi bloqueado", "Foi editado"], a: "Viralizou", def: "Circulated rapidly and widely from one internet user to another." },
            { sent: "The internet connects the **worldwide** community.", word: "worldwide", options: ["Local", "Mundial / No mundo todo", "Pequena", "Digital"], a: "Mundial / No mundo todo", def: "Extending or reaching throughout the whole world." },
            { sent: "I use **traditional media**.", word: "traditional media", options: ["TikTok", "Mídia tradicional", "Realidade virtual", "Apps"], a: "Mídia tradicional", def: "Means of communication such as television and printed newspapers." },
            { sent: "Enter your **username**.", word: "username", options: ["Senha", "Nome de usuário", "Email", "Perfil"], a: "Nome de usuário", def: "An identification used by a person with access to a computer or online service." },
            { sent: "Slow internet is a **hindrance**.", word: "hindrance", options: ["Ajuda", "Obstáculo / Desvantagem", "Benefício", "Diversão"], a: "Obstáculo / Desvantagem", def: "Something that provides resistance, delay, or obstruction to something or someone." },
            { sent: "I have a **dependence** on my phone.", word: "dependence", options: ["Indiferença", "Dependência", "Ódio", "Medo"], a: "Dependência", def: "The state of relying on or being controlled by someone or something." },
            { sent: "Use a strong **password**.", word: "password", options: ["Nome", "Senha", "Link", "Aplicativo"], a: "Senha", def: "A secret word or phrase used to gain admission to something." },
            { sent: "**Browse** the web for info.", word: "Browse", options: ["Feche", "Navegue", "Destrua", "Digite"], a: "Navegue", def: "To search for information on the internet." },
            { sent: "**Click** the button.", word: "Click", options: ["Role", "Clique", "Arraste", "Digite"], a: "Clique", def: "To press a mouse button or tap a screen to select something." },
            { sent: "The computer is **offline**.", word: "offline", options: ["Conectado", "Desconectado", "Novo", "Rápido"], a: "Desconectado", def: "Not connected to a computer or computer network." },
            { sent: "Your **profile** is private.", word: "profile", options: ["Foto", "Perfil", "Nome", "Amigo"], a: "Perfil", def: "A summary of a user's personal details on a social network." },
            { sent: "He has one **follower**.", word: "follower", options: ["Amigo", "Seguidor", "Inimigo", "Líder"], a: "Seguidor", def: "Someone who tracks a person or organization on a social network." },
            { sent: "**Link** the accounts.", word: "Link", options: ["Separe", "Vincule / Ligue", "Apague", "Crie"], a: "Vincule / Ligue", def: "A code or instruction that connects one part of a program or website to another." },
            { sent: "Use an **app**.", word: "app", options: ["Site", "Aplicativo", "Computador", "Peça"], a: "Aplicativo", def: "A software program, especially one downloaded by a user to a mobile device." },
            { sent: "**Type** your name.", word: "Type", options: ["Fale", "Digite", "Escreva", "Desenhe"], a: "Digite", def: "To write something on a computer by pressing the keys." },
            { sent: "The **generation** gap.", word: "generation", options: ["Família", "Geração", "Idade", "Tempo"], a: "Geração", def: "All of the people born and living at about the same time." },
            { sent: "I'll **chat** with you later.", word: "chat", options: ["Gritar", "Bater papo / Conversar", "Ligar", "Ver"], a: "Bater papo / Conversar", def: "To exchange messages online in real-time." },
            { sent: "**Download** the movie.", word: "Download", options: ["Envie", "Baixe", "Assista", "Delete"], a: "Baixe", def: "To copy data from a computer system to another, usually over the internet." },
            { sent: "**Charge** your battery.", word: "Charge", options: ["Use", "Carregue", "Quebre", "Venda"], a: "Carregue", def: "To store electrical energy in a battery." },
            { sent: "**Install** the program.", word: "Install", options: ["Remova", "Instale", "Use", "Abra"], a: "Instale", def: "To place or fix equipment or software in position ready for use." },
            { sent: "**Update** your status.", word: "Update", options: ["Mantenha", "Atualize", "Apague", "Esconda"], a: "Atualize", def: "To make something more modern or up to date." },
            { sent: "**Connect** to the Wi-Fi.", word: "Connect", options: ["Fuja", "Conecte", "Desligue", "Ignore"], a: "Conecte", def: "To join together to provide access and communication." },
            { sent: "**Search** for the link.", word: "Search", options: ["Perca", "Pesquise / Procure", "Ache", "Use"], a: "Pesquise / Procure", def: "To look for information on a computer or on the internet." },
            { sent: "**Share** the news.", word: "Share", options: ["Esconda", "Compartilhe", "Leia", "Nega"], a: "Compartilhe", def: "To post or repost content on social media for others to see." },
            { sent: "**Comment** on the post.", word: "Comment", options: ["Curta", "Comente", "Ignore", "Delete"], a: "Comente", def: "To express an opinion or reaction to a post." },
            { sent: "**Like** the photo.", word: "Like", options: ["Ignore", "Curta", "Salve", "Compartilhe"], a: "Curta", def: "To click a button to show that you enjoyed a post." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 ITEMS) ---
        5: [
            { sent: "I have **see** that meme before.", correct: "seen" },
            { sent: "She **have** used social media.", correct: "has" },
            { sent: "They **has** gone to the computer lab.", correct: "have" },
            { sent: "I have **be** there twice.", correct: "been" },
            { sent: "He has **gone** to London twice. (He is back now)", correct: "been" },
            { sent: "We haven't **adapting** yet.", correct: "adapted" },
            { sent: "**Has** you ever used that app?", correct: "Have" },
            { sent: "She has **write** many emails.", correct: "written" },
            { sent: "I have never **using** VR.", correct: "used" },
            { sent: "Tom has **went** to the store.", correct: "gone" },
            { sent: "They have **did** the project.", correct: "done" },
            { sent: "Have you **ate** lunch?", correct: "eaten" },
            { sent: "I have lived here **since** two years.", correct: "for" },
            { sent: "She has worked there **for** 2015.", correct: "since" },
            { sent: "Has he **finish** yet?", correct: "finished" },
            { sent: "We **has** learned a lot.", correct: "have" },
            { sent: "I have just **download** the file.", correct: "downloaded" },
            { sent: "Has she ever **gone** to Japan? (Experience)", correct: "been" },
            { sent: "My brother has **go** home.", correct: "gone" },
            { sent: "I haven't **saw** the video.", correct: "seen" },
            { sent: "They have scrolled the feed **since** an hour.", correct: "for" },
            { sent: "I have had this phone **for** January.", correct: "since" },
            { sent: "**Have** the app crashed?", correct: "Has" },
            { sent: "She **have** already updated her profile.", correct: "has" },
            { sent: "I have never **spoke** to him.", correct: "spoken" },
            { sent: "They **has** reached a million views.", correct: "have" },
            { sent: "**Did** you ever used this app?", correct: "Have" },
            { sent: "She has just **upload** the selfie.", correct: "uploaded" },
            { sent: "I have **know** him for years.", correct: "known" },
            { sent: "We **has been** to that park.", correct: "have been" },
            { sent: "He has **been** to the library. (He is there now)", correct: "gone" },
            { sent: "Have they **post** the status?", correct: "posted" },
            { sent: "I haven't typed the message **already**.", correct: "yet" },
            { sent: "She has **yet** typed it.", correct: "already" },
            { sent: "It is the best game I have **never** played.", correct: "ever" },
            { sent: "They have **streaming** the movie.", correct: "streamed" },
            { sent: "He has installed the app **since** 10 minutes.", correct: "for" },
            { sent: "I have browsed the web **for** 9 o'clock.", correct: "since" },
            { sent: "**Have** your battery charged?", correct: "Has" },
            { sent: "We **has shared** the link.", correct: "have shared" }
        ],

        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Group 1
            { pairs: [{a: "Have you ever seen this meme?", b: "Yes, my grandma sent it to me."}, {a: "Have you ever used that app?", b: "No, I have never used it."}, {a: "Has she learned how to use social media?", b: "Yes, she has learned a lot."}, {a: "Have your parents adapted to tech yet?", b: "No, they haven't adapted yet."}, {a: "Where is your brother?", b: "He has gone to the computer lab."}] },
            // Group 2
            { pairs: [{a: "Have you been to the lab today?", b: "Yes, I have been there twice."}, {a: "Have you shared the link yet?", b: "No, I haven't shared it yet."}, {a: "Has he already downloaded the game?", b: "Yes, he has already done it."}, {a: "Have they ever played an online game?", b: "No, they have never tried it."}, {a: "Has she updated her profile yet?", b: "No, she hasn't updated it yet."}] },
            // Group 3
            { pairs: [{a: "How long have you known him?", b: "I have known him since 2010."}, {a: "How long has she had that laptop?", b: "She has had it for ten years."}, {a: "Have you ever been to London?", b: "Yes, I have been there twice."}, {a: "Has the meeting started yet?", b: "Yes, it has just started."}, {a: "Have you changed your password?", b: "Yes, I have already changed it."}] },
            // Group 4
            { pairs: [{a: "Have you scrolled through your feed?", b: "Yes, I have already scrolled it."}, {a: "Has she been offline all day?", b: "Yes, she hasn't connected today."}, {a: "Has the video reached a million views?", b: "Yes, it has just gone viral."}, {a: "Have you ever met an influencer?", b: "Yes, I have met one once."}, {a: "Has Celine gone to the store?", b: "Yes, she has just left."}] },
            // Group 5
            { pairs: [{a: "Have you downloaded the file?", b: "Yes, I have just finished it."}, {a: "Has the printer worked today?", b: "No, it has been offline."}, {a: "Have you ever used a typewriter?", b: "No, I have never seen one."}, {a: "Have they arrived at the party?", b: "Yes, they have been there for an hour."}, {a: "Have you ever eaten sushi?", b: "Yes, I have tried it once."}] },
            // Group 6
            { pairs: [{a: "Has the app crashed today?", b: "Yes, it has crashed twice."}, {a: "Have you updated the software?", b: "No, I haven't updated it yet."}, {a: "Have you seen the new post?", b: "No, I haven't opened my feed."}, {a: "Have you typed the message?", b: "Yes, I have just sent it."}, {a: "Have you ever lost your phone?", b: "No, I have never lost it."}] },
            // Group 7
            { pairs: [{a: "Have you browsed the new site?", b: "No, I haven't seen it yet."}, {a: "Has the sun set yet?", b: "Yes, it has been dark for a while."}, {a: "Have you ever broken a bone?", b: "No, I have never been to a hospital."}, {a: "Have you seen my message?", b: "No, I have been very busy."}, {a: "How long has he lived in Italy?", b: "He has been there since 2015."}] },
            // Group 8
            { pairs: [{a: "Have you checked the source?", b: "No, I have never seen this blog."}, {a: "Has your brother bought a laptop?", b: "No, he has bought a tablet."}, {a: "Have you ever used a 3D printer?", b: "No, I haven't tried it yet."}, {a: "Has she posted the photo?", b: "Yes, she has already uploaded it."}, {a: "Have you ever seen a ghost?", b: "No, I have never seen one."}] },
            // Group 9
            { pairs: [{a: "Have you been online since 8 AM?", b: "Yes, I have been working all morning."}, {a: "Has she found her profile?", b: "Yes, it has already loaded."}, {a: "Have they streamed the movie?", b: "No, they haven't started yet."}, {a: "Have you ever played this game?", b: "Yes, I have played it many times."}, {a: "Has Sarah gone to the library?", b: "Yes, she is there now."}] },
            // Group 10
            { pairs: [{a: "Have you ever used VR?", b: "No, I have never used virtual reality."}, {a: "How long have you lived here?", b: "I have lived here for five years."}, {a: "Has the video gone viral?", b: "Yes, it has reached a million views."}, {a: "Have you ever shared a meme?", b: "Yes, I have shared many."}, {a: "Has he already updated the app?", b: "Yes, he has just done it."}] },
            // Group 11
            { pairs: [{a: "I have never", b: "used that specific app."}, {a: "My brother has", b: "gone to the computer lab."}, {a: "We have been", b: "to Paris twice this year."}, {a: "She has already", b: "updated her social profile."}, {a: "They haven't", b: "finished the project yet."}] },
            // Group 12
            { pairs: [{a: "I have known him", b: "since we were children."}, {a: "She has had that phone", b: "for three years."}, {a: "My parents haven't", b: "adapted to new technology."}, {a: "My grandma has", b: "learned how to use social media."}, {a: "There is a big", b: "generation gap in our family."}] },
            // Group 13
            { pairs: [{a: "The video has", b: "reached one million views."}, {a: "I have shared it", b: "with all my digital friends."}, {a: "He has just", b: "uploaded a new video."}, {a: "I have been", b: "there twice today."}, {a: "We have never", b: "seen this meme before."}] },
            // Group 14
            { pairs: [{a: "She has blocked", b: "him on all social media."}, {a: "My dad has", b: "downloaded the new banking app."}, {a: "The students", b: "have finished the group project."}, {a: "He has created", b: "a new profile on Instagram."}, {a: "It has changed", b: "the world completely."}] },
            // Group 15
            { pairs: [{a: "I have had this tablet", b: "for two months now."}, {a: "You have been online", b: "since this morning."}, {a: "He has lived here", b: "for a very long time."}, {a: "It has been broken", b: "for a whole week."}, {a: "We have studied English", b: "since 2015."}] },
            // Group 16
            { pairs: [{a: "I have just", b: "downloaded the latest version."}, {a: "You have already", b: "updated your profile status."}, {a: "He hasn't", b: "finished his homework yet."}, {a: "Has she", b: "arrived at the office yet?"}, {a: "We haven't", b: "saved the file yet."}] },
            // Group 17
            { pairs: [{a: "This is the best phone", b: "I have ever had."}, {a: "That is the most expensive gadget", b: "she has ever bought."}, {a: "It is the worst app", b: "we have ever used."}, {a: "This is the funniest meme", b: "I have ever seen."}, {a: "That was the fastest internet", b: "I have ever used."}] },
            // Group 18
            { pairs: [{a: "I have never", b: "broken a bone in my life."}, {a: "Have you ever", b: "tried virtual reality?"}, {a: "Has she ever", b: "met a famous influencer?"}, {a: "We have never", b: "been offline for a week."}, {a: "Has the computer", b: "ever crashed before?"}] },
            // Group 19
            { pairs: [{a: "My laptop has", b: "been slow since yesterday."}, {a: "They have worked here", b: "for a very long time."}, {a: "She has been to", b: "Brazil three times."}, {a: "He has gone to", b: "the store to buy a tablet."}, {a: "I have been", b: "to that tech shop downtown."}] },
            // Group 20
            { pairs: [{a: "Humans adapt", b: "quickly to new inventions."}, {a: "Technology makes", b: "our lives much easier."}, {a: "My smartphone is", b: "essential for my work."}, {a: "The tablet is", b: "great for reading e-books."}, {a: "Online shopping is", b: "very convenient today."}] },
            // Group 21
            { pairs: [{a: "Connect", b: "Conectar"}, {a: "Share", b: "Compartilhar"}, {a: "Browse", b: "Navegar"}, {a: "Like", b: "Curtir"}, {a: "Search", b: "Pesquisar"}] },
            // Group 22
            { pairs: [{a: "Follow", b: "Seguir"}, {a: "Scroll", b: "Rolar (a tela)"}, {a: "Click", b: "Clicar"}, {a: "Download", b: "Baixar"}, {a: "Upload", b: "Enviar / Carregar"}] },
            // Group 23
            { pairs: [{a: "Stream", b: "Transmitir / Assistir online"}, {a: "Post", b: "Postar / Postagem"}, {a: "Message", b: "Mensagem"}, {a: "Chat", b: "Bater papo"}, {a: "Comment", b: "Comentar"}] },
            // Group 24
            { pairs: [{a: "Internet", b: "Internet"}, {a: "Website", b: "Site / Website"}, {a: "Social Media", b: "Mídia Social"}, {a: "App", b: "Aplicativo"}, {a: "Online", b: "Conectado"}] },
            // Group 25
            { pairs: [{a: "Offline", b: "Desconectado"}, {a: "Follower", b: "Seguidor(a)"}, {a: "Profile", b: "Perfil"}, {a: "Username", b: "Nome de usuário"}, {a: "Password", b: "Senha"}] },
            // Group 26
            { pairs: [{a: "Link", b: "Link / Elo"}, {a: "Meme", b: "Meme"}, {a: "Viral", b: "Viral"}, {a: "Generation", b: "Geração"}, {a: "Generation Gap", b: "Conflito de gerações"}] },
            // Group 27
            { pairs: [{a: "Different", b: "Diferente"}, {a: "Similar", b: "Similar / Parecido"}, {a: "Habit", b: "Hábito"}, {a: "Custom", b: "Costume"}, {a: "Technology", b: "Tecnologia"}] },
            // Group 28
            { pairs: [{a: "Device", b: "Dispositivo / Aparelho"}, {a: "Smartphone", b: "Smartphone"}, {a: "Tablet", b: "Tablet"}, {a: "Computer", b: "Computador"}, {a: "Digital Native", b: "Nativo Digital"}] },
            // Group 29
            { pairs: [{a: "Adapt", b: "Adaptar-se"}, {a: "Trend", b: "Tendência"}, {a: "News Source", b: "Fonte de notícias"}, {a: "Traditional Media", b: "Mídia Tradicional"}, {a: "Millennials", b: "Geração Y (1981-1996)"}] },
            // Group 30
            { pairs: [{a: "Have you ever?", b: "Você já...?"}, {a: "I have never.", b: "Eu nunca."}, {a: "Not yet.", b: "Ainda não."}, {a: "Since", b: "Desde"}, {a: "For", b: "Por / Há (duração)"}] },
            // Group 31
            { pairs: [{a: "Download", b: "To copy data from the internet to a computer."}, {a: "Upload", b: "To transfer data from a computer to the internet."}, {a: "Browse", b: "To look at information on the internet."}, {a: "Stream", b: "To watch video or listen to audio online."}, {a: "Search", b: "To look for information on a computer."}] },
            // Group 32
            { pairs: [{a: "Username", b: "A name used to enter a computer system."}, {a: "Password", b: "A secret word to enter a site."}, {a: "Link", b: "A code that connects parts of a program."}, {a: "App", b: "A software program for a mobile device."}, {a: "Profile", b: "A summary of a user's details online."}] },
            // Group 33
            { pairs: [{a: "Meme", b: "A funny image spread by internet users."}, {a: "Viral", b: "An image or video that spreads very fast."}, {a: "Feed", b: "A screen that shows recent posts."}, {a: "Follower", b: "Someone who tracks a person's social account."}, {a: "Hashtag", b: "A label used to categorize topics online."}] },
            // Group 34
            { pairs: [{a: "Digital Native", b: "A person who grew up with technology."}, {a: "Generation Gap", b: "Differences between young and old people."}, {a: "Millennials", b: "People born between 1981 and 1996."}, {a: "Generation Z", b: "People born between 1997 and 2012."}, {a: "Generation Alpha", b: "People born after 2013."}] },
            // Group 35
            { pairs: [{a: "Efficiency", b: "The state of being very productive."}, {a: "Hindrance", b: "Something that makes things difficult."}, {a: "Convenience", b: "Something that fits well with your needs."}, {a: "Quality of Life", b: "The standard of health and happiness."}, {a: "Addiction", b: "Being dependent on a substance or activity."}] },
            // Group 36
            { pairs: [{a: "Eye strain", b: "Tired eyes from looking at screens."}, {a: "Dependence", b: "Relying on or being controlled by something."}, {a: "Distraction", b: "Something that takes away your attention."}, {a: "Isolation", b: "The state of being alone or separate."}, {a: "Adapt", b: "To become adjusted to new conditions."}] },
            // Group 37
            { pairs: [{a: "Ever", b: "At any time in your life."}, {a: "Never", b: "At no time in your life."}, {a: "Already", b: "Sooner than people expected."}, {a: "Just", b: "A very short time ago."}, {a: "Yet", b: "Up until the present time."}] },
            // Group 38
            { pairs: [{a: "Social Media", b: "Websites for social networking."}, {a: "Traditional Media", b: "Newspapers, TV, and radio."}, {a: "News Source", b: "Where you get information about events."}, {a: "Online Game", b: "A video game played over the internet."}, {a: "Smartphone", b: "A mobile phone with many functions."}] },
            // Group 39
            { pairs: [{a: "Scroll", b: "To move text up or down on a screen."}, {a: "Click", b: "To press a button to select something."}, {a: "Chat", b: "To talk to people online in real-time."}, {a: "Like", b: "To click a button to show you enjoy a post."}, {a: "Share", b: "To post or re-post content for others."}] },
            // Group 40
            { pairs: [{a: "Laptop", b: "A portable computer."}, {a: "Tablet", b: "A portable PC with a touchscreen."}, {a: "Keyboard", b: "A panel of keys used to type."}, {a: "Mouse", b: "A device used to move a cursor."}, {a: "Screen", b: "The display part of an electronic device."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 ITEMS) ---
        7: [
            { q: "Where has Albert gone?", options: ["He has gone to the computer lab. [Correct]", "He has gone since two hours.", "He has gone because he is happy.", "He has gone yesterday."], a: "He has gone to the computer lab." },
            { q: "How long have you had that smartphone?", options: ["I have had it for two years. [Correct]", "I have had it with my hands.", "I have had it to the store.", "I have had it a million views."], a: "I have had it for two years." },
            { q: "What have they just downloaded?", options: ["They have just downloaded a new game. [Correct]", "They have just downloaded since morning.", "They have just downloaded twice today.", "They have just downloaded to Japan."], a: "They have just downloaded a new game." },
            { q: "Who has learned how to use social media?", options: ["My grandma has learned it. [Correct]", "A password has learned it.", "A digital native has learned for years.", "The internet has learned it."], a: "My grandma has learned it." },
            { q: "Why haven't your parents adapted to tech yet?", options: ["Because they prefer traditional media. [Correct]", "Because they have been to London.", "Because they are in the computer lab.", "Because they have just arrived."], a: "Because they prefer traditional media." },
            { q: "How many times has Celine been to the lab today?", options: ["She has been there twice. [Correct]", "She has been there for two years.", "She has been there since January.", "She has been there with a meme."], a: "She has been there twice." },
            { q: "What has reached a million views?", options: ["The viral video has reached them. [Correct]", "The generation gap has reached them.", "The password has reached them.", "The eye strain has reached them."], a: "The viral video has reached them." },
            { q: "Where have you been since 8 AM?", options: ["I have been at school. [Correct]", "I have been for three hours.", "I have been since yesterday.", "I have been already."], a: "I have been at school." },
            { q: "Which app have you ever used?", options: ["I have used Instagram. [Correct]", "I have used since 2010.", "I have used for my profile.", "I have used already."], a: "I have used Instagram." },
            { q: "How long has it been broken?", options: ["It has been broken for a week. [Correct]", "It has been broken to the technician.", "It has been broken because of the virus.", "It has been broken since two times."], a: "It has been broken for a week." },
            { q: "Who has already updated their profile?", options: ["Sarah has. [Correct]", "A hashtag has.", "A link has.", "A keyboard has."], a: "Sarah has." },
            { q: "What have you never tried?", options: ["I have never tried virtual reality. [Correct]", "I have never tried for a month.", "I have never tried since 2015.", "I have never tried yet."], a: "I have never tried virtual reality." },
            { q: "Why has the computer crashed?", options: ["Because of an unverified link. [Correct]", "Because it has gone to the store.", "Because it has been there twice.", "Because it is a digital native."], a: "Because of an unverified link." },
            { q: "How has technology changed our lives?", options: ["It has made communication faster. [Correct]", "It has made since 1990.", "It has made for several years.", "It has made already."], a: "It has made communication faster." },
            { q: "Where has the influencer gone?", options: ["She has gone to an event in Paris. [Correct]", "She has gone since Monday.", "She has gone for a million followers.", "She has gone yet."], a: "She has gone to an event in Paris." },
            { q: "What has happened to the generation gap?", options: ["It has increased because of technology. [Correct]", "It has increased for two years.", "It has increased since the lab.", "It has increased twice."], a: "It has increased because of technology." },
            { q: "How long have they worked here?", options: ["They have worked here since 2018. [Correct]", "They have worked here to the office.", "They have worked here a new message.", "They have worked here with a mouse."], a: "They have worked here since 2018." },
            { q: "Who has just sent you a message?", options: ["My best friend has. [Correct]", "A digital detox has.", "An app has.", "A hindrance has."], a: "My best friend has." },
            { q: "What have you already browsed today?", options: ["I have already browsed several news sites. [Correct]", "I have already browsed since 7 AM.", "I have already browsed for an hour.", "I have already browsed yet."], a: "I have already browsed several news sites." },
            { q: "Where have they been for the last hour?", options: ["They have been in a meeting. [Correct]", "They have been since noon.", "They have been for ten years.", "They have been already."], a: "They have been in a meeting." },
            { q: "How many followers has he gained today?", options: ["He has gained over a thousand. [Correct]", "He has gained for his profile.", "He has gained since yesterday.", "He has gained already."], a: "He has gained over a thousand." },
            { q: "What has she just typed?", options: ["She has just typed her password. [Correct]", "She has just typed for ten minutes.", "She has just typed since the morning.", "She has just typed to the computer."], a: "She has just typed her password." },
            { q: "Why have you started a digital detox?", options: ["Because I felt too isolated. [Correct]", "Because I have been to London.", "Because I have had this phone for years.", "Because I have just updated the app."], a: "Because I felt too isolated." },
            { q: "How long has she been offline?", options: ["She has been offline for two days. [Correct]", "She has been offline to the beach.", "She has been offline a new meme.", "She has been offline already."], a: "She has been offline for two days." },
            { q: "Who has never seen Star Wars?", options: ["Albert hasn't. [Correct]", "A laptop hasn't.", "A Wi-Fi hasn't.", "An email hasn't."], a: "Albert hasn't." },
            { q: "What has caused your eye strain?", options: ["Too much screen time has. [Correct]", "A digital native has.", "A news source has.", "A generation gap has."], a: "Too much screen time has." },
            { q: "Where have you stored the files?", options: ["I have stored them on my laptop. [Correct]", "I have stored them since Friday.", "I have stored them for a month.", "I have stored them yet."], a: "I have stored them on my laptop." },
            { q: "What has she already uploaded?", options: ["She has already uploaded the video. [Correct]", "She has already uploaded since 9 AM.", "She has already uploaded for her fans.", "She has already uploaded yet."], a: "She has already uploaded the video." },
            { q: "Which city have they been to recently?", options: ["They have been to Tokyo. [Correct]", "They have been since last month.", "They have been for a week.", "They have been already."], a: "They have been to Tokyo." },
            { q: "How many messages have you received?", options: ["I have received fifty messages. [Correct]", "I have received since I woke up.", "I have received for my birthday.", "I have received yet."], a: "I have received fifty messages." },
            { q: "Why has the video gone viral?", options: ["Because it is very funny. [Correct]", "Because it has been to Japan.", "Because it is since 2020.", "Because it has had a laptop."], a: "Because it is very funny." },
            { q: "Who has just installed the software?", options: ["The technician has. [Correct]", "The username has.", "The app has.", "The password has."], a: "The technician has." },
            { q: "What has your brother bought?", options: ["He has bought a new tablet. [Correct]", "He has bought since yesterday.", "He has bought for two years.", "He has bought already."], a: "He has bought a new tablet." },
            { q: "Where has the link gone?", options: ["It has gone to my spam folder. [Correct]", "It has gone since a minute ago.", "It has gone for his email.", "It has gone already."], a: "It has gone to my spam folder." },
            { q: "How long has he known the truth?", options: ["He has known it since last night. [Correct]", "He has known it to his friend.", "He has known it a new laptop.", "He has known it already."], a: "He has known it since last night." },
            { q: "What have we achieved today?", options: ["We have finished the project. [Correct]", "We have achieved since 8 AM.", "We have achieved for three hours.", "We have achieved yet."], a: "We have finished the project." },
            { q: "Which generation has grown up with the internet?", options: ["Generation Z has. [Correct]", "Traditional media has.", "A hindrance has.", "An eye strain has."], a: "Generation Z has." },
            { q: "How has she improved her profile?", options: ["She has posted better photos. [Correct]", "She has improved since last week.", "She has improved for her followers.", "She has improved yet."], a: "She has posted better photos." },
            { q: "Who hasn't replied yet?", options: ["Tom hasn't. [Correct]", "A screen hasn't.", "A meme hasn't.", "A gadget hasn't."], a: "Tom hasn't." },
            { q: "What has been the biggest hindrance?", options: ["Slow Wi-Fi has been. [Correct]", "A digital native has been.", "A smartphone has been.", "A follower has been."], a: "Slow Wi-Fi has been." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 ITEMS) ---
        8: [
            { sent: "My grandma has learned how to use **traditional** media like Instagram.", wrong: "traditional", options: ["social", "digital", "physical", "old"], a: "social" },
            { sent: "The video went **offline** and reached a million views in one day.", wrong: "offline", options: ["viral", "digital", "similar", "local"], a: "viral" },
            { sent: "I have had this **username** for two years; it is a very fast laptop.", wrong: "username", options: ["device", "password", "profile", "link"], a: "device" },
            { sent: "There is a big generation **link** between my parents and me.", wrong: "link", options: ["gap", "habit", "custom", "app"], a: "gap" },
            { sent: "I need to **upload** the game from the store to my computer.", wrong: "upload", options: ["download", "stream", "browse", "scroll"], a: "download" },
            { sent: "Celine has **gone** to London three times; she is here with us now.", wrong: "gone", options: ["been", "stayed", "lived", "worked"], a: "been" },
            { sent: "He has **been** to the store to buy bread; he will be back in ten minutes.", wrong: "been", options: ["gone", "seen", "liked", "used"], a: "gone" },
            { sent: "I have **eye strain** because I have used a typewriter all day.", wrong: "eye strain", options: ["a smartphone", "a custom", "a generation", "a meme"], a: "a smartphone" },
            { sent: "Technology is a **hindrance** because it makes life much easier.", wrong: "hindrance", options: ["convenience", "distraction", "addiction", "problem"], a: "convenience" },
            { sent: "Gen Z are called **traditional** natives because they grew up with tech.", wrong: "traditional", options: ["digital", "social", "manual", "old"], a: "digital" },
            { sent: "Please **click** through your feed to see the latest posts.", wrong: "click", options: ["scroll", "download", "install", "charge"], a: "scroll" },
            { sent: "I have **installed** my phone battery; it is now at 100%.", wrong: "installed", options: ["charged", "updated", "uploaded", "shared"], a: "charged" },
            { sent: "She has **searched** a movie on Netflix for two hours.", wrong: "searched", options: ["streamed", "clicked", "scrolled", "typed"], a: "streamed" },
            { sent: "Enter your **password** like \"User123\" to identify yourself.", wrong: "password", options: ["username", "meme", "hashtag", "link"], a: "username" },
            { sent: "I am **online** because my router is broken and I have no signal.", wrong: "online", options: ["offline", "connected", "digital", "viral"], a: "offline" },
            { sent: "This **tablet** is very comfortable to type on with all ten fingers.", wrong: "tablet", options: ["keyboard", "mouse", "screen", "link"], a: "keyboard" },
            { sent: "I always **like** for the answer on Google.", wrong: "like", options: ["search", "share", "post", "browse"], a: "search" },
            { sent: "Digital **customs** are people born after 2013.", wrong: "customs", options: ["Alpha", "Natives", "Millennials", "Z"], a: "Alpha" },
            { sent: "Social **websites** like TikTok connect people worldwide.", wrong: "websites", options: ["media", "habits", "devices", "gaps"], a: "media" },
            { sent: "I have a tech **efficiency**; I can't stop checking my phone.", wrong: "efficiency", options: ["addiction", "quality", "convenience", "improvement"], a: "addiction" },
            { sent: "This is a very funny **link**; I laughed a lot!", wrong: "link", options: ["meme", "password", "laptop", "device"], a: "meme" },
            { sent: "I have just **typed** a new photo to my profile.", wrong: "typed", options: ["uploaded", "searched", "downloaded", "clicked"], a: "uploaded" },
            { sent: "The internet **connects** us to the latest news source.", wrong: "connects", options: ["(No change)", "blocks", "deletes", "installs"], a: "(No change)" },
            { sent: "We have a **similar** taste in music; we like completely different things.", wrong: "similar", options: ["different", "similar (no change)", "same", "digital"], a: "different" },
            { sent: "Use a **hashtag** to protect your account from hackers.", wrong: "hashtag", options: ["password", "username", "profile", "feed"], a: "password" },
            { sent: "I have **browsed** the link to open the website.", wrong: "browsed", options: ["clicked", "scrolled", "streamed", "charged"], a: "clicked" },
            { sent: "**Millennials** were born after 2013.", wrong: "Millennials", options: ["Generation Alpha", "Gen Z", "Boomers", "Natives"], a: "Generation Alpha" },
            { sent: "My **feed** is a summary of my personal details online.", wrong: "feed", options: ["profile", "meme", "link", "app"], a: "profile" },
            { sent: "I need to **update** my laptop; the screen is too dark.", wrong: "update", options: ["charge", "click", "share", "download"], a: "charge" },
            { sent: "The **digital divide** is the standard of health and comfort.", wrong: "digital divide", options: ["quality of life", "generation gap", "tech addiction", "information overload"], a: "quality of life" },
            { sent: "Too many emails cause **convenience**.", wrong: "convenience", options: ["information overload", "eye strain", "digital native", "online game"], a: "information overload" },
            { sent: "I use my **mouse** to click on icons on the screen.", wrong: "mouse", options: ["(No change)", "keyboard", "printer", "cable"], a: "(No change)" },
            { sent: "Technology **adapts** fast; it changes every month.", wrong: "adapts", options: ["changes / evolves", "stops", "breaks", "fails"], a: "changes / evolves" },
            { sent: "I have **seen** a message to my teacher.", wrong: "seen", options: ["sent", "liked", "clicked", "searched"], a: "sent" },
            { sent: "It is a local **habit** to bow in Japan.", wrong: "habit", options: ["custom / tradition", "gadget", "device", "app"], a: "custom / tradition" },
            { sent: "I have **had** this app since five minutes.", wrong: "had", options: ["for", "since (no change)", "in", "at"], a: "for" },
            { sent: "She has lived here **for** 2015.", wrong: "for", options: ["since", "for (no change)", "during", "ago"], a: "since" },
            { sent: "Have you **ever** finished the download yet?", wrong: "ever", options: ["already", "never", "since", "for"], a: "already" },
            { sent: "I have **just** been to London twice in my life.", wrong: "just", options: ["(remove just)", "already", "yet", "gone"], a: "(remove just)" },
            { sent: "He has **gone** to the library many times, and he is here now.", wrong: "gone", options: ["been", "worked", "liked", "seen"], a: "been" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 ITEMS) ---
        9: [
            { audio: "Have you ever seen this viral meme?", options: ["Yes, I have.", "I am offline.", "It is a tablet.", "For two years."], a: "Yes, I have." },
            { audio: "How long have you lived in this city?", options: ["Since 2015.", "Yes, I have.", "I have gone home.", "By smartphone."], a: "Since 2015." },
            { audio: "Has Albert already updated his profile?", options: ["Yes, he has just done it.", "No, he never.", "It is a laptop.", "Since Monday."], a: "Yes, he has just done it." },
            { audio: "Where has your brother gone?", options: ["He has gone to the lab.", "He has been there.", "No, he hasn't.", "For an hour."], a: "He has gone to the lab." },
            { audio: "Have they finished the project yet?", options: ["No, not yet.", "Yes, they never.", "Since yesterday.", "With a mouse."], a: "No, not yet." },
            { audio: "Have you ever used a 3D printer?", options: ["No, I have never tried it.", "It is on the desk.", "For ten minutes.", "Since January."], a: "No, I have never tried it." },
            { audio: "How long has the internet been slow?", options: ["It has been slow all day.", "Yes, it has.", "To the website.", "By clicking."], a: "It has been slow all day." },
            { audio: "Has she already sent the email?", options: ["Yes, she has already sent it.", "No, she just.", "Since 9 AM.", "In the inbox."], a: "Yes, she has already sent it." },
            { audio: "Have you been to the new tech shop downtown?", options: ["Yes, I have been there once.", "No, I have gone.", "For two weeks.", "It is convenient."], a: "Yes, I have been there once." },
            { audio: "Has the video gone viral yet?", options: ["Yes, it has reached millions of views.", "No, it has been.", "Since last Saturday.", "By scrolling."], a: "Yes, it has reached millions of views." },
            { audio: "What have you just downloaded?", options: ["I have just downloaded a new app.", "For five minutes.", "Yes, I have.", "Since 2020."], a: "I have just downloaded a new app." },
            { audio: "Have your parents adapted to social media?", options: ["No, they haven't adapted yet.", "Yes, they were.", "Since the morning.", "To the laptop."], a: "No, they haven't adapted yet." },
            { audio: "How long have they been offline?", options: ["They have been offline for an hour.", "Yes, they have.", "In the park.", "By charging."], a: "They have been offline for an hour." },
            { audio: "Have you ever lost your password?", options: ["Yes, I have lost it twice.", "No, I'm online.", "It is a secret.", "Since last year."], a: "Yes, I have lost it twice." },
            { audio: "Has the app crashed again?", options: ["Yes, it has just happened.", "No, it isn't.", "For ten seconds.", "To the cloud."], a: "Yes, it has just happened." },
            { audio: "Who has created this new profile?", options: ["My sister has created it.", "Since yesterday.", "For her friends.", "Already."], a: "My sister has created it." },
            { audio: "What has caused your eye strain?", options: ["Too much screen time has.", "A digital native has.", "For three hours.", "Since Monday."], a: "Too much screen time has." },
            { audio: "Have they ever been to Japan?", options: ["No, they have never been there.", "Yes, they have gone.", "For a week.", "Since 2012."], a: "No, they have never been there." },
            { audio: "Has he just clicked the link?", options: ["Yes, he has.", "No, he never.", "Since a minute.", "To the site."], a: "Yes, he has." },
            { audio: "How long has she had that tablet?", options: ["She has had it since her birthday.", "Yes, she has.", "It is a gadget.", "For her work."], a: "She has had it since her birthday." },
            { audio: "Have you ever met a famous influencer?", options: ["Yes, I met one last month.", "No, I never.", "It is viral.", "Since 2021."], a: "Yes, I met one last month." },
            { audio: "What has changed in your life recently?", options: ["I have started a new habit.", "For two weeks.", "Since January.", "Already."], a: "I have started a new habit." },
            { audio: "Has the sun set already?", options: ["Yes, it has been dark for a while.", "No, it hasn't yet.", "Since 6 PM.", "To the horizon."], a: "Yes, it has been dark for a while." },
            { audio: "Have you ever shared a meme on your story?", options: ["Yes, many times.", "No, it's fake.", "For an hour.", "Since today."], a: "Yes, many times." },
            { audio: "How long have we been connected to the Wi-Fi?", options: ["We have been connected for two hours.", "Yes, we have.", "To the router.", "By clicking."], a: "We have been connected for two hours." },
            { audio: "Has she ever played an online game?", options: ["No, she has never played one.", "Yes, she has gone.", "Since last year.", "It is fun."], a: "No, she has never played one." },
            { audio: "What have they just uploaded?", options: ["They have just uploaded a video.", "For ten minutes.", "Since the party.", "To the profile."], a: "They have just uploaded a video." },
            { audio: "Have you updated your software yet?", options: ["No, I haven't done it yet.", "Yes, I never.", "Since Friday.", "To the latest version."], a: "No, I haven't done it yet." },
            { audio: "How long has he lived in Italy?", options: ["He has lived there for five years.", "Yes, he has.", "To Rome.", "By plane."], a: "He has lived there for five years." },
            { audio: "Has Sarah gone to the library?", options: ["Yes, she is there now.", "No, she has been.", "Since 10 AM.", "For a book."], a: "Yes, she is there now." },
            { audio: "Have you ever broken your smartphone screen?", options: ["Yes, I have broken it once.", "No, it's a device.", "For a month.", "Since yesterday."], a: "Yes, I have broken it once." },
            { audio: "What has been your biggest distraction lately?", options: ["Social media has been.", "For two hours.", "Since last week.", "Already."], a: "Social media has been." },
            { audio: "Has she already chosen a username?", options: ["Yes, she has already picked one.", "No, she just.", "Since the morning.", "To the system."], a: "Yes, she has already picked one." },
            { audio: "Have you been to the computer lab today?", options: ["Yes, I have been there twice.", "No, I have gone.", "For an hour.", "Since the lesson."], a: "Yes, I have been there twice." },
            { audio: "How long have you used this app?", options: ["I have used it since 2020.", "Yes, I have.", "It is useful.", "For my work."], a: "I have used it since 2020." },
            { audio: "Has he ever shared his password with you?", options: ["No, he has never shared it.", "Yes, it is secret.", "Since last month.", "By message."], a: "No, he has never shared it." },
            { audio: "What has been the result of the new initiative?", options: ["It has improved the quality of life.", "For a year.", "Since the start.", "Already."], a: "It has improved the quality of life." },
            { audio: "Have you ever browsed this website before?", options: ["No, I have never seen it.", "Yes, it's online.", "For a minute.", "Since yesterday."], a: "No, I have never seen it." },
            { audio: "Has the generation gap decreased recently?", options: ["No, it has increased.", "Yes, it was.", "Since 2015.", "To the family."], a: "No, it has increased." },
            { audio: "How long has she been a digital native?", options: ["She has been one since she was a baby.", "Yes, she has.", "It is a generation.", "For the internet."], a: "She has been one since she was a baby." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 ITEMS) ---
        10: [
            { audio: "I have used this app many times.", sent: "I ___ ___ this app many times.", blanks: ["have", "used"] },
            { audio: "She has updated her profile today.", sent: "She ___ ___ her profile today.", blanks: ["has", "updated"] },
            { audio: "They have gone to the store.", sent: "They ___ ___ to the store.", blanks: ["have", "gone"] },
            { audio: "We have been to Paris twice.", sent: "We ___ ___ to Paris twice.", blanks: ["have", "been"] },
            { audio: "Have you ever seen a viral video?", sent: "___ you ___ seen a viral video?", blanks: ["Have", "ever"] },
            { audio: "I have never used VR.", sent: "I ___ ___ used VR.", blanks: ["have", "never"] },
            { audio: "Has she arrived yet?", sent: "___ she ___ yet?", blanks: ["Has", "arrived"] },
            { audio: "I have just downloaded the file.", sent: "I ___ ___ downloaded the file.", blanks: ["have", "just"] },
            { audio: "He has already finished his work.", sent: "He ___ ___ finished his work.", blanks: ["has", "already"] },
            { audio: "How long have you lived here?", sent: "___ ___ have you lived here?", blanks: ["How", "long"] },
            { audio: "I have lived here since 2010.", sent: "I have lived here ___ ___.", blanks: ["since", "2010"] },
            { audio: "She has had this phone for two years.", sent: "She has ___ this phone ___ two years.", blanks: ["had", "for"] },
            { audio: "Have they ever met an influencer?", sent: "___ they ___ met an influencer?", blanks: ["Have", "ever"] },
            { audio: "My parents haven't adapted yet.", sent: "My parents ___ ___ yet.", blanks: ["haven't", "adapted"] },
            { audio: "The video has gone viral.", sent: "The video ___ ___ viral.", blanks: ["has", "gone"] },
            { audio: "I have been there twice today.", sent: "I ___ ___ there twice today.", blanks: ["have", "been"] },
            { audio: "Has she typed the message?", sent: "___ she ___ the message?", blanks: ["Has", "typed"] },
            { audio: "We have just clicked the link.", sent: "We ___ ___ clicked the link.", blanks: ["have", "just"] },
            { audio: "He has gone to the computer lab.", sent: "He ___ ___ to the computer lab.", blanks: ["has", "gone"] },
            { audio: "I have never seen this meme.", sent: "I ___ ___ seen this meme.", blanks: ["have", "never"] },
            { audio: "How long has it been broken?", sent: "How long ___ it ___ broken?", blanks: ["has", "been"] },
            { audio: "She hasn't updated her feed yet.", sent: "She ___ ___ her feed yet.", blanks: ["hasn't", "updated"] },
            { audio: "Have you ever lost your password?", sent: "___ you ___ lost your password?", blanks: ["Have", "ever"] },
            { audio: "I have just shared the post.", sent: "I ___ ___ shared the post.", blanks: ["have", "just"] },
            { audio: "He has been online for hours.", sent: "He ___ ___ online for hours.", blanks: ["has", "been"] },
            { audio: "They have never played this game.", sent: "They ___ ___ played this game.", blanks: ["have", "never"] },
            { audio: "Has the app crashed today?", sent: "___ the app ___ today?", blanks: ["Has", "crashed"] },
            { audio: "I have already scrolled the feed.", sent: "I ___ ___ scrolled the feed.", blanks: ["have", "already"] },
            { audio: "She has gone home now.", sent: "She ___ ___ home now.", blanks: ["has", "gone"] },
            { audio: "We have been to that site.", sent: "We ___ ___ to that site.", blanks: ["have", "been"] },
            { audio: "Have they arrived yet?", sent: "___ they ___ yet?", blanks: ["Have", "arrived"] },
            { audio: "I have just charged my phone.", sent: "I ___ ___ charged my phone.", blanks: ["have", "just"] },
            { audio: "He has had a computer for years.", sent: "He ___ ___ a computer for years.", blanks: ["has", "had"] },
            { audio: "She has known him since January.", sent: "She ___ ___ him since January.", blanks: ["has", "known"] },
            { audio: "Has she ever used a tablet?", sent: "___ she ___ used a tablet?", blanks: ["Has", "ever"] },
            { audio: "I have never been to London.", sent: "I ___ ___ been to London.", blanks: ["have", "never"] },
            { audio: "We have already seen that movie.", sent: "We ___ ___ seen that movie.", blanks: ["have", "already"] },
            { audio: "He has just updated the software.", sent: "He ___ ___ updated the software.", blanks: ["has", "just"] },
            { audio: "Have you ever tried sushi?", sent: "___ you ___ tried sushi?", blanks: ["Have", "ever"] },
            { audio: "It has been slow since yesterday.", sent: "It ___ ___ slow since yesterday.", blanks: ["has", "been"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE (10 ITEMS) ---
        11: [
            {
                title: "Dialogue 1: The New Meme",
                lines: [
                    { speaker: "Celine", text: "Albert, ___ seen this meme?", options: ["have you ever", "did you ever", "has you ever"], a: "have you ever" },
                    { speaker: "Albert", text: "No, I ___. I have never used that specific app.", options: ["haven't", "hasn't", "haven't been"], a: "haven't" },
                    { speaker: "Celine", text: "It's so funny! My grandma sent it to me. She ___ how to use social media recently.", options: ["has learned", "learned", "have learned"], a: "has learned" },
                    { speaker: "Albert", text: "Wow! My parents haven't ___ yet. They still prefer traditional media.", options: ["adapted", "adapt", "adapting"], a: "adapted" },
                    { speaker: "Celine", text: "Your grandma is a real digital native now!", options: ["Yes", "No", "Maybe"], a: "Yes" } // Filler to make 5 lines
                ]
            },
            {
                title: "Dialogue 2: At the Lab",
                lines: [
                    { speaker: "Celine", text: "Where is your brother? I ___ him today.", options: ["haven't seen", "didn't see", "hasn't seen"], a: "haven't seen" },
                    { speaker: "Albert", text: "He ___ to the computer lab. He has had a lot of work to do.", options: ["has gone", "has been", "was"], a: "has gone" },
                    { speaker: "Celine", text: "I ___ there twice today, but it was too crowded.", options: ["have been", "have gone", "went"], a: "have been" },
                    { speaker: "Albert", text: "Yes, he ___ there since 8 AM. He really loves gaming!", options: ["has been", "was", "had"], a: "has been" },
                    { speaker: "Celine", text: "I hope he finishes his project soon.", options: ["Yes", "No", "Maybe"], a: "Yes" } // Filler
                ]
            },
            {
                title: "Dialogue 3: Profile Update",
                lines: [
                    { speaker: "Albert", text: "___ your sister already updated her profile?", options: ["Has", "Have", "Did"], a: "Has" },
                    { speaker: "Celine", text: "Yes, she ___ changed her picture.", options: ["has just", "have just", "just"], a: "has just" },
                    { speaker: "Albert", text: "___ her new post?", options: ["Have you seen", "Did you see", "Has you seen"], a: "Have you seen" },
                    { speaker: "Celine", text: "Not ___. I have been offline for a few hours.", options: ["yet", "already", "just"], a: "yet" },
                    { speaker: "Albert", text: "You should check it. It ___ a lot of likes already.", options: ["has reached", "reached", "has reach"], a: "has reached" }
                ]
            },
            {
                title: "Dialogue 4: Old Tech",
                lines: [
                    { speaker: "Celine", text: "How long ___ this laptop?", options: ["have you had", "did you have", "has you had"], a: "have you had" },
                    { speaker: "Albert", text: "I have had it ___ three years.", options: ["for", "since", "in"], a: "for" },
                    { speaker: "Celine", text: "It ___ a bit slow, hasn't it?", options: ["has become", "become", "has became"], a: "has become" },
                    { speaker: "Albert", text: "Yes, I ___ the software recently.", options: ["haven't updated", "haven't update", "didn't updated"], a: "haven't updated" },
                    { speaker: "Celine", text: "You should do it. It’s a good ___ to keep your devices ready.", options: ["habit", "custom", "generation"], a: "habit" }
                ]
            },
            {
                title: "Dialogue 5: Virtual Reality",
                lines: [
                    { speaker: "Albert", text: "Have you ___ used virtual reality?", options: ["ever", "already", "yet"], a: "ever" },
                    { speaker: "Celine", text: "No, I have ___ tried it. Is it cool?", options: ["never", "ever", "just"], a: "never" },
                    { speaker: "Albert", text: "It's the most exciting thing I ___!", options: ["have ever seen", "ever saw", "has ever seen"], a: "have ever seen" },
                    { speaker: "Celine", text: "How long ___ playing with it?", options: ["have you been", "were you", "has you been"], a: "have you been" },
                    { speaker: "Albert", text: "I have had this headset ___ yesterday.", options: ["since", "for", "during"], a: "since" }
                ]
            },
            {
                title: "Dialogue 6: Social Media Drama",
                lines: [
                    { speaker: "Celine", text: "Why ___ blocked you?", options: ["have they", "has they", "did they"], a: "have they" },
                    { speaker: "Albert", text: "I don't know! I ___ anything bad.", options: ["haven't posted", "haven't post", "didn't posted"], a: "haven't posted" },
                    { speaker: "Celine", text: "Maybe they ___ your last comment.", options: ["have misunderstood", "misunderstood", "has misunderstood"], a: "have misunderstood" },
                    { speaker: "Albert", text: "I ___ sent a message to ask them.", options: ["have just", "has just", "just"], a: "have just" },
                    { speaker: "Celine", text: "I hope they ___ ignored you yet.", options: ["haven't", "hasn't", "won't"], a: "haven't" }
                ]
            },
            {
                title: "Dialogue 7: A Viral Video",
                lines: [
                    { speaker: "Albert", text: "Have you ___ the news today?", options: ["checked", "check", "checking"], a: "checked" },
                    { speaker: "Celine", text: "No, I ___ the web yet.", options: ["haven't browsed", "haven't browse", "didn't browsed"], a: "haven't browsed" },
                    { speaker: "Albert", text: "A video of a cat ___ viral!", options: ["has gone", "has been", "gone"], a: "has gone" },
                    { speaker: "Celine", text: "Oh, I ___ that one already! My cousin shared it.", options: ["have seen", "has seen", "saw"], a: "have seen" },
                    { speaker: "Albert", text: "It ___ two million views since this morning.", options: ["has reached", "reaches", "reached"], a: "has reached" }
                ]
            },
            {
                title: "Dialogue 8: Meeting an Influencer",
                lines: [
                    { speaker: "Celine", text: "___ met a famous influencer?", options: ["Have you ever", "Did you ever", "Has you ever"], a: "Have you ever" },
                    { speaker: "Albert", text: "Yes, I ___ one at a tech event last year.", options: ["met", "have met", "has met"], a: "met" },
                    { speaker: "Celine", text: "___ posted anything with you?", options: ["Has he", "Have he", "Did he"], a: "Has he" },
                    { speaker: "Albert", text: "No, but I ___ him since that day.", options: ["have followed", "has followed", "following"], a: "have followed" },
                    { speaker: "Celine", text: "That’s cool. I ___ met anyone famous.", options: ["have never", "never", "has never"], a: "have never" }
                ]
            },
            {
                title: "Dialogue 9: Tech Hindrance",
                lines: [
                    { speaker: "Albert", text: "My internet ___ very slow today.", options: ["has been", "was", "is being"], a: "has been" },
                    { speaker: "Celine", text: "___ called the provider yet?", options: ["Have you", "Has you", "Did you"], a: "Have you" },
                    { speaker: "Albert", text: "Yes, I ___ spoken to them.", options: ["have already", "already", "has just"], a: "have already" },
                    { speaker: "Celine", text: "___ have you had this problem?", options: ["How long", "Since when", "For when"], a: "How long" },
                    { speaker: "Albert", text: "It has been a hindrance ___ two hours.", options: ["for", "since", "in"], a: "for" }
                ]
            },
            {
                title: "Dialogue 10: New Upload",
                lines: [
                    { speaker: "Celine", text: "Look! Albert ___ uploaded a new video.", options: ["has just", "just", "have just"], a: "has just" },
                    { speaker: "Albert", text: "Yes, I ___ on it all week.", options: ["have worked", "worked", "has worked"], a: "have worked" },
                    { speaker: "Celine", text: "___ finished uploading?", options: ["Has it", "Have it", "Did it"], a: "Has it" },
                    { speaker: "Albert", text: "Yes, and ___ friends have already liked it.", options: ["some", "any", "much"], a: "some" },
                    { speaker: "Celine", text: "Your profile ___ a lot this month!", options: ["has grown", "grew", "have grown"], a: "has grown" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER (10 ITEMS) ---
        12: [
            {
                title: "Text 1: The Digital Native",
                text: "Lucas is 14 years old and belongs to Generation Z. He is a true digital native because he has used technology since he was a small child. He has already learned how to code and has created two mobile apps. Unlike his parents, who prefer traditional media, Lucas has never read a physical newspaper. He gets all his information online.",
                questions: [
                    { q: "Which generation does Lucas belong to?", options: ["Millennials.", "Generation Z.", "Generation Alpha."], a: "Generation Z." },
                    { q: "Why is he called a 'digital native'?", options: ["Because he hates tech.", "Because he has used tech since childhood.", "Because he lives in a lab."], a: "Because he has used tech since childhood." },
                    { q: "What has he already done?", options: ["Bought a laptop.", "Created two apps.", "Met an influencer."], a: "Created two apps." },
                    { q: "Does Lucas read physical newspapers?", options: ["Yes, every day.", "No, never.", "Sometimes."], a: "No, never." },
                    { q: "Where does he get his news?", options: ["Radio.", "Online.", "From his parents."], a: "Online." }
                ]
            },
            {
                title: "Text 2: Grandma’s New Habit",
                text: "Mrs. Jones is 70 years old. There is a big generation gap between her and her grandkids, but she has recently decided to adapt. She has bought a tablet and has learned how to use social media. She has already seen many funny memes and has even posted a photo of her garden. She has been much happier since she connected with her family online.",
                questions: [
                    { q: "How old is Mrs. Jones?", options: ["14.", "70.", "80."], a: "70." },
                    { q: "What has she decided to do?", options: ["Stop using tech.", "Adapt and use a tablet.", "Move to Japan."], a: "Adapt and use a tablet." },
                    { q: "What has she already seen online?", options: ["Viral videos.", "Funny memes.", "Fake news."], a: "Funny memes." },
                    { q: "What has she posted?", options: ["A video.", "A photo of her garden.", "A comment."], a: "A photo of her garden." },
                    { q: "How has she felt since connecting online?", options: ["Isolated.", "Happier.", "Tired."], a: "Happier." }
                ]
            },
            {
                title: "Text 3: The Broken Smartphone",
                text: "Albert has had his smartphone for three years. It has been a very convenient device, but yesterday it crashed. He hasn't fixed it yet because he is considering a digital detox. He has been offline for 24 hours now. He has realized that he has a dependence on technology, and this situation is a real hindrance to his social life.",
                questions: [
                    { q: "How long has Albert had his phone?", options: ["For three years.", "Since yesterday.", "For a month."], a: "For three years." },
                    { q: "What happened yesterday?", options: ["He lost it.", "The phone crashed.", "He updated it."], a: "The phone crashed." },
                    { q: "Why hasn't he fixed it yet?", options: ["He has no money.", "He is considering a digital detox.", "He is in Japan."], a: "He is considering a digital detox." },
                    { q: "How long has he been offline?", options: ["A week.", "24 hours.", "Two years."], a: "24 hours." },
                    { q: "What has he realized?", options: ["He loves gaming.", "He has a dependence on tech.", "He is a digital native."], a: "He has a dependence on tech." }
                ]
            },
            {
                title: "Text 4: The Viral Video",
                text: "Last week, a student from our school uploaded a video of her dog. Something amazing has happened: the video has gone viral! It has reached over five million views in just five days. Many famous influencers have shared the link on their profiles. The student hasn't returned to school yet because she has gone to a TV studio for an interview.",
                questions: [
                    { q: "What was the video about?", options: ["A cat.", "A dog.", "A game."], a: "A dog." },
                    { q: "What has happened to the video?", options: ["It was deleted.", "It went viral.", "It crashed."], a: "It went viral." },
                    { q: "How many views has it reached?", options: ["One million.", "Over five million.", "Ten."], a: "Over five million." },
                    { q: "Who has shared the link?", options: ["Teachers.", "Famous influencers.", "Nobody."], a: "Famous influencers." },
                    { q: "Where is the student now?", options: ["In the lab.", "At a TV studio.", "At home."], a: "At a TV studio." }
                ]
            },
            {
                title: "Text 5: Generation Alpha",
                text: "Generation Alpha consists of people born after 2013. They are the first generation to be entirely born in the 21st century. They have never known a world without tablets and streaming services. Most of them have already used AI in school. Experts say that the generation gap between them and Millennials will be significant because technology changes so fast.",
                questions: [
                    { q: "When was Generation Alpha born?", options: ["Before 1980.", "After 2013.", "Between 1997-2012."], a: "After 2013." },
                    { q: "What have they never known?", options: ["The internet.", "A world without tablets/streaming.", "Schools."], a: "A world without tablets/streaming." },
                    { q: "What have most of them already used in school?", options: ["Typewriters.", "AI.", "Physical maps."], a: "AI." },
                    { q: "Why will the generation gap be significant?", options: ["Because of the weather.", "Because technology changes fast.", "Because of food."], a: "Because technology changes fast." },
                    { q: "Which generation are they compared to?", options: ["Millennials.", "Gen Z.", "Boomers."], a: "Millennials." }
                ]
            },
            {
                title: "Text 6: Digital Privacy",
                text: "Celine is very careful with her digital life. She has never shared her password with anyone. She has already updated her privacy settings on every app. Recently, she has noticed that many people have lost their accounts to hackers. She has just finished a course on cyber security. She believes that being online is convenient, but safety is essential.",
                questions: [
                    { q: "Is Celine careful with her digital life?", options: ["No.", "Yes.", "She doesn't have a digital life."], a: "Yes." },
                    { q: "What has she never shared?", options: ["Photos.", "Her password.", "Memes."], a: "Her password." },
                    { q: "What has she already updated?", options: ["Her hardware.", "Her privacy settings.", "Her username."], a: "Her privacy settings." },
                    { q: "What has she noticed recently?", options: ["People losing accounts to hackers.", "Slow internet.", "Viral videos."], a: "People losing accounts to hackers." },
                    { q: "What has she just finished?", options: ["A game.", "A course on cyber security.", "A movie."], a: "A course on cyber security." }
                ]
            },
            {
                title: "Text 7: The Journey to London",
                text: "My cousins have gone to London for the summer. They have been there for two weeks now. They have visited the Big Ben and have streamed many videos of their trip. I have never been to the UK, but I have already searched for flights online. I have saved some money, so I hope to visit them next month!",
                questions: [
                    { q: "Where have the cousins gone?", options: ["Paris.", "London.", "Tokyo."], a: "London." },
                    { q: "How long have they been there?", options: ["Two days.", "Two weeks.", "A year."], a: "Two weeks." },
                    { q: "What have they streamed?", options: ["Movies.", "Videos of their trip.", "Online games."], a: "Videos of their trip." },
                    { q: "Has the author ever been to the UK?", options: ["Yes, once.", "No, never.", "Twice."], a: "No, never." },
                    { q: "What has the author already done?", options: ["Bought a ticket.", "Searched for flights.", "Packed a bag."], a: "Searched for flights." }
                ]
            },
            {
                title: "Text 8: Tech in the Classroom",
                text: "Our school has changed a lot since 2015. The teachers have installed interactive boards in every room. We have used tablets for our history projects this month. I have just finished a presentation about digital natives. Some older teachers haven't adapted yet, but they have tried their best. Technology has improved our efficiency.",
                questions: [
                    { q: "When did the school start changing?", options: ["2010.", "2015.", "Last week."], a: "2015." },
                    { q: "What have teachers installed?", options: ["New chairs.", "Interactive boards.", "Typewriters."], a: "Interactive boards." },
                    { q: "What have students used for projects this month?", options: ["Paper.", "Tablets.", "Smartphones."], a: "Tablets." },
                    { q: "What has the author just finished?", options: ["A game.", "A presentation.", "A book."], a: "A presentation." },
                    { q: "Have all teachers adapted?", options: ["Yes, all of them.", "No, some haven't yet.", "Only the young ones."], a: "No, some haven't yet." }
                ]
            },
            {
                title: "Text 9: Social Media Distraction",
                text: "I have realized that social media is a big distraction. I have checked my phone fifty times today! I have already wasted three hours on my feed. My parents have warned me about this habit for a long time. I haven't started my homework yet because I have been stuck on TikTok. I need to change my behavior.",
                questions: [
                    { q: "What has the author realized?", options: ["Social media is a distraction.", "The internet is fast.", "He loves math."], a: "Social media is a distraction." },
                    { q: "How many times has he checked his phone today?", options: ["Five.", "Fifty.", "Twice."], a: "Fifty." },
                    { q: "How much time has he already wasted?", options: ["Ten minutes.", "Three hours.", "A whole day."], a: "Three hours." },
                    { q: "Who has warned him about this?", options: ["His friends.", "His parents.", "His teacher."], a: "His parents." },
                    { q: "Has he started his homework?", options: ["Yes, he finished.", "No, not yet.", "He is doing it now."], a: "No, not yet." }
                ]
            },
            {
                title: "Text 10: The Evolution of Gaming",
                text: "Gaming has evolved massively. My father used to play very simple games. Now, I have played VR games that feel real. I have already bought a new console this year. My sister hasn't tried it yet because she prefers mobile games. We have had many discussions about which platform is better. Gaming has become a global trend.",
                questions: [
                    { q: "How has gaming changed according to the text?", options: ["It stayed the same.", "It evolved massively.", "It disappeared."], a: "It evolved massively." },
                    { q: "What kind of games has the author played?", options: ["Simple games.", "VR games.", "Card games."], a: "VR games." },
                    { q: "What has the author already bought this year?", options: ["A smartphone.", "A new console.", "A tablet."], a: "A new console." },
                    { q: "Why hasn't the sister tried it yet?", options: ["She is busy.", "She prefers mobile games.", "She is scared."], a: "She prefers mobile games." },
                    { q: "Gaming has become a...", options: ["Hindrance.", "Global trend.", "Secret."], a: "Global trend." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER CONTEXT (10 ITEMS) ---
        13: [
            {
                title: "Audio Script 1",
                audio: "I have been a digital native since I was born in 2005. I have used a computer for ten years. I have already learned how to use many different apps. However, I have never used a 3D printer. I think technology is very convenient.",
                questions: [
                    { q: "When was the speaker born?", options: ["1980.", "2005.", "2015."], a: "2005." },
                    { q: "How long has the speaker used a computer?", options: ["Two years.", "Ten years.", "Since yesterday."], a: "Ten years." },
                    { q: "What has the speaker already learned?", options: ["How to cook.", "How to use different apps.", "How to fix a phone."], a: "How to use different apps." },
                    { q: "What has the speaker never used?", options: ["A tablet.", "A 3D printer.", "A smartphone."], a: "A 3D printer." },
                    { q: "What is the speaker's opinion of technology?", options: ["It's a hindrance.", "It's convenient.", "It's boring."], a: "It's convenient." }
                ]
            },
            {
                title: "Audio Script 2",
                audio: "Celine has gone to the store to buy a new charger. She has been away for thirty minutes. She hasn't returned yet because the shop is crowded. I have stayed home to finish my project. I have already typed five pages.",
                questions: [
                    { q: "Where has Celine gone?", options: ["To the lab.", "To the store.", "To London."], a: "To the store." },
                    { q: "Why is she going there?", options: ["To buy a phone.", "To buy a charger.", "To meet a friend."], a: "To buy a charger." },
                    { q: "Has she returned yet?", options: ["Yes.", "No.", "She is at the door."], a: "No." },
                    { q: "Why is she late?", options: ["She is lost.", "The shop is crowded.", "She is chatting."], a: "The shop is crowded." },
                    { q: "How many pages has the speaker already typed?", options: ["Two.", "Five.", "Ten."], a: "Five." }
                ]
            },
            {
                title: "Audio Script 3",
                audio: "My brother has just uploaded a video to YouTube. It has already reached ten thousand views! He has been very excited all day. He has never had a viral video before. He has worked on this for two weeks.",
                questions: [
                    { q: "What has the brother just done?", options: ["Bought a camera.", "Uploaded a video.", "Deleted a post."], a: "Uploaded a video." },
                    { q: "How many views has it reached?", options: ["One hundred.", "Ten thousand.", "A million."], a: "Ten thousand." },
                    { q: "How has he felt all day?", options: ["Nervous.", "Excited.", "Tired."], a: "Excited." },
                    { q: "Has he had a viral video before?", options: ["Yes, many.", "No, never.", "Once."], a: "No, never." },
                    { q: "How long has he worked on this?", options: ["Two days.", "Two weeks.", "A month."], a: "Two weeks." }
                ]
            },
            {
                title: "Audio Script 4",
                audio: "I have lived in this city since 2018. I have been to the central park many times. I have even met an influencer there once! I have never seen a more beautiful place. I have had many great experiences here.",
                questions: [
                    { q: "Since when has the speaker lived in the city?", options: ["2010.", "2018.", "Last year."], a: "2018." },
                    { q: "Where has the speaker been many times?", options: ["The lab.", "Central park.", "The store."], a: "Central park." },
                    { q: "Who did the speaker meet there?", options: ["A teacher.", "An influencer.", "A cousin."], a: "An influencer." },
                    { q: "Has the speaker seen a more beautiful place?", options: ["Yes.", "No.", "In Japan."], a: "No." },
                    { q: "How does the speaker describe their experiences?", options: ["Bad.", "Great.", "Boring."], a: "Great." }
                ]
            },
            {
                title: "Audio Script 5",
                audio: "Technology has improved our quality of life, but it has also caused eye strain. I have used my tablet for five hours today. I have already felt a bit of pain. I have decided to start a digital detox tomorrow. I haven't planned my day yet, but I want to be offline.",
                questions: [
                    { q: "What has technology caused besides improvement?", options: ["Happiness.", "Eye strain.", "Wealth."], a: "Eye strain." },
                    { q: "How long has the speaker used the tablet today?", options: ["One hour.", "Five hours.", "Ten hours."], a: "Five hours." },
                    { q: "What has the speaker already felt?", options: ["Joy.", "A bit of pain.", "Hunger."], a: "A bit of pain." },
                    { q: "When will the digital detox start?", options: ["Today.", "Tomorrow.", "Next week."], a: "Tomorrow." },
                    { q: "Does the speaker have a plan for tomorrow yet?", options: ["Yes.", "No.", "Maybe."], a: "No." }
                ]
            },
            {
                title: "Audio Script 6",
                audio: "My father is a Millennial and he has adapted well to new tech. He has already created a professional profile on LinkedIn. He has used a smartphone for years. However, he has never played an online game. He prefers reading news source apps.",
                questions: [
                    { q: "To which generation does the father belong?", options: ["Gen Z.", "Millennial.", "Alpha."], a: "Millennial." },
                    { q: "What has he already created?", options: ["A game.", "A professional profile.", "A meme."], a: "A professional profile." },
                    { q: "How long has he used a smartphone?", options: ["For years.", "Since yesterday.", "A month."], a: "For years." },
                    { q: "What has he never done?", options: ["Used an app.", "Played an online game.", "Called a friend."], a: "Played an online game." },
                    { q: "What does he prefer?", options: ["TikTok.", "News source apps.", "Traditional radio."], a: "News source apps." }
                ]
            },
            {
                title: "Audio Script 7",
                audio: "We have just installed the new Wi-Fi router. It has been much faster than the old one. We have already connected all our devices. I have downloaded a large file in seconds! We haven't had any connection issues yet.",
                questions: [
                    { q: "What have they just installed?", options: ["A computer.", "A Wi-Fi router.", "A printer."], a: "A Wi-Fi router." },
                    { q: "How is the new router compared to the old one?", options: ["Slower.", "Much faster.", "The same."], a: "Much faster." },
                    { q: "Have they connected their devices yet?", options: ["Yes, all of them.", "Only one.", "No."], a: "Yes, all of them." },
                    { q: "What has the speaker downloaded?", options: ["A photo.", "A large file.", "A game."], a: "A large file." },
                    { q: "Have they had any problems yet?", options: ["Yes.", "No.", "Sometimes."], a: "No." }
                ]
            },
            {
                title: "Audio Script 8",
                audio: "Sarah has been to Japan twice. She has learned a lot about Japanese customs. She has even tried traditional food like sushi. She has just posted a story about her trip. I haven't seen it yet, but I'm sure it's amazing.",
                questions: [
                    { q: "How many times has Sarah been to Japan?", options: ["Once.", "Twice.", "Three times."], a: "Twice." },
                    { q: "What has she learned about?", options: ["Math.", "Japanese customs.", "Technology."], a: "Japanese customs." },
                    { q: "What food has she tried?", options: ["Pizza.", "Sushi.", "Pasta."], a: "Sushi." },
                    { q: "What has she just posted?", options: ["A comment.", "A story.", "A blog."], a: "A story." },
                    { q: "Has the speaker seen the post yet?", options: ["Yes.", "No.", "He is looking now."], a: "No." }
                ]
            },
            {
                title: "Audio Script 9",
                audio: "I have worked at this tech company since 2010. I have seen many changes in technology. We have developed many popular apps. I have already received a promotion this year. I have never been more proud of my team.",
                questions: [
                    { q: "Since when has the speaker worked at the company?", options: ["2000.", "2010.", "2020."], a: "2010." },
                    { q: "What has the speaker seen?", options: ["Nothing.", "Many changes in tech.", "A ghost."], a: "Many changes in tech." },
                    { q: "What has the company developed?", options: ["Cars.", "Popular apps.", "Traditional media."], a: "Popular apps." },
                    { q: "What has the speaker already received this year?", options: ["A bonus.", "A promotion.", "A new phone."], a: "A promotion." },
                    { q: "How does the speaker feel about the team?", options: ["Bored.", "Proud.", "Worried."], a: "Proud." }
                ]
            },
            {
                title: "Audio Script 10",
                audio: "The generation gap can be a hindrance to communication. My parents have never used a smartphone. They have had the same old phone for fifteen years! They haven't adapted to the digital world yet. I have tried to help them, but they prefer traditional methods.",
                questions: [
                    { q: "What can be a hindrance to communication?", options: ["Fast internet.", "The generation gap.", "New apps."], a: "The generation gap." },
                    { q: "Have the parents ever used a smartphone?", options: ["Yes.", "No.", "Only once."], a: "No." },
                    { q: "How long have they had their old phone?", options: ["Five years.", "Fifteen years.", "Two days."], a: "Fifteen years." },
                    { q: "Have they adapted to the digital world?", options: ["Yes.", "No.", "Almost."], a: "No." },
                    { q: "What do they prefer?", options: ["New technology.", "Traditional methods.", "Gaming."], a: "Traditional methods." }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT (10 ITEMS) ---
        14: [
            {
                title: "Text 1",
                text: "Lucas is a digital native. He [1] (has used / used / use) the internet since he was five. He [2] (has already created / already create / has creating) his own website. He [3] (has never / never / has ever) read a physical book because he prefers his tablet. He [4] (has just started / just start / starts) a new online course. It [5] (has been / was / is) very convenient for him.",
                answers: ["has used", "has already created", "has never", "has just started", "has been"]
            },
            {
                title: "Text 2",
                text: "My parents [1] (haven't adapted / haven't adapt / didn't adapt) to social media yet. There is a big generation [2] (gap / elo / link) in our family. I [3] (have tried / tried / has tried) to show them how to use apps, but they prefer traditional media. However, my grandma [4] (has learned / learned / have learned) how to use WhatsApp! She [5] (has just sent / just send / has send) me a message.",
                answers: ["haven't adapted", "gap", "have tried", "has learned", "has just sent"]
            },
            {
                title: "Text 3",
                text: "The video [1] (has gone / gone / has been) viral today. It [2] (has reached / reached / has reach) one million views [3] (since / for / in) this morning. I [4] (have already shared / shared / has already share) it with my followers. [5] (Have you seen / Did you see / Has you see) it yet? It is the funniest thing I have ever seen.",
                answers: ["has gone", "has reached", "since", "have already shared", "Have you seen"]
            },
            {
                title: "Text 4",
                text: "I [1] (have had / had / has had) this smartphone [2] (for / since / in) two years. The screen [3] (has cracked / cracked / has crack) recently. I [4] (haven't fixed / hasn't fix / didn't fixed) it yet because it is expensive. This [5] (hindrance / convenience / efficiency) makes it difficult to read my feed. I have decided to buy a new one soon.",
                answers: ["have had", "for", "has cracked", "haven't fixed", "hindrance"]
            },
            {
                title: "Text 5",
                text: "We [1] (have been / have gone / were) to the computer lab twice today. Albert [2] (has gone / has been / was) there now to finish his project. He [3] (has worked / worked / has work) on it [4] (since / for / in) 9 AM. I [5] (have already finished / finished / has already finish) mine. I have just uploaded the file to the cloud.",
                answers: ["have been", "has gone", "has worked", "since", "have already finished"]
            },
            {
                title: "Text 6",
                text: "[1] (Have you ever / Did you ever / Has you ever) tried a digital detox? I [2] (have stayed / stay / has stayed) offline for a week. It [3] (has been / was / is) a great experience. I [4] (have read / read / has read) three books during that time. I [5] (have never felt / never felt / has never feel) so relaxed before.",
                answers: ["Have you ever", "have stayed", "has been", "have read", "have never felt"]
            },
            {
                title: "Text 7",
                text: "Technology [1] (has improved / improve / has improving) our efficiency. We [2] (have used / use / has used) many new devices in the office. The manager [3] (has just announced / just announce / has announce) a new initiative. We [4] (have worked / work / has work) together [5] (since / for / in) January. Everyone has adapted well.",
                answers: ["has improved", "have used", "has just announced", "have worked", "since"]
            },
            {
                title: "Text 8",
                text: "She [1] (has been / has gone / was) to London three times. She [2] (has learned / learned / has learn) a lot about the culture there. She [3] (has already visited / visited / has already visit) the most famous museums. She [4] (has never forgotten / never forget / has never forget) her first trip. She [5] (has just booked / just book / has book) another flight for December.",
                answers: ["has been", "has learned", "has already visited", "has never forgotten", "has just booked"]
            },
            {
                title: "Text 9",
                text: "Too much screen time [1] (has caused / caused / has cause) eye strain for me. I [2] (have had / had / has had) this problem [3] (for / since / in) a few weeks. I [4] (haven't seen / didn't see / hasn't see) a doctor yet. I [5] (have decided / decided / has decide) to limit my use of social media. I have already started a new routine.",
                answers: ["has caused", "have had", "for", "haven't seen", "have decided"]
            },
            {
                title: "Text 10",
                text: "[1] (Has he / Have he / Did he) ever played that online game? No, he [2] (has never / never / hasn't never) liked gaming. He [3] (has preferred / prefer / has prefer) to browse the internet for news. He [4] (has already searched / search / has already search) for information about Generation Z. He [5] (has just finished / just finish / has finish) his research.",
                answers: ["Has he", "has never", "has preferred", "has already searched", "has just finished"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 ITEMS) ---
        15: [
            {
                title: "Audio Script 1",
                audio: "I have used this app for two years. It has already helped me. I have just finished the last lesson. I have never seen a better platform. It has been very convenient.",
                text: "I have [1] this app for two years. It has [2] helped me. I have [3] finished the last lesson. I have [4] seen a better platform. It [5] been very convenient.",
                answers: ["used", "already", "just", "never", "has"]
            },
            {
                title: "Audio Script 2",
                audio: "My parents haven't adapted to technology yet. They have had the same television since 2005. They have never used a smartphone. There is a big generation gap between us. I have tried to explain the internet to them many times.",
                text: "My parents [1] adapted yet. They have [2] the same TV since 2005. They have [3] used a smartphone. There is a big generation [4]. I have [5] to explain the internet.",
                answers: ["haven't", "had", "never", "gap", "tried"]
            },
            {
                title: "Audio Script 3",
                audio: "Has the video gone viral? Yes, it has reached a million views. Many followers have already shared it. I have just seen it on my feed. It has been a huge success online.",
                text: "Has the video [1] viral? Yes, it has [2] a million views. Many [3] have already shared it. I have [4] seen it. It [5] been a huge success.",
                answers: ["gone", "reached", "followers", "just", "has"]
            },
            {
                title: "Audio Script 4",
                audio: "I have been to the computer lab twice today. My brother has gone there too. He has worked on his project since the morning. We haven't finished our tasks yet. The lab has been very crowded lately.",
                text: "I have [1] to the lab twice today. My brother has [2] there too. He [3] worked since the morning. We [4] finished yet. The lab [5] been very crowded.",
                answers: ["been", "gone", "has", "haven't", "has"]
            },
            {
                title: "Audio Script 5",
                audio: "Have you ever tried virtual reality? No, I have never used a VR headset. It seems like a cool technology. I have already read about it online. I have always wanted to try it.",
                text: "[1] you ever [2] VR? No, I have [3] used a headset. I have [4] read about it. I [5] always wanted to try it.",
                answers: ["Have", "tried", "never", "already", "have"]
            },
            {
                title: "Audio Script 6",
                audio: "She has updated her profile recently. She has gained many new followers. She has already posted a new photo. I have just commented on it. Her feed has become very popular.",
                text: "She has [1] her profile. She [2] gained many followers. She has [3] posted a photo. I have [4] commented. Her feed [5] become popular.",
                answers: ["updated", "has", "already", "just", "has"]
            },
            {
                title: "Audio Script 7",
                audio: "How long have you lived here? I have lived in this city for five years. I have been to many different places. I have never seen a more beautiful park. I have had a great quality of life here.",
                text: "How [1] have you [2] here? I have lived here [3] five years. I have [4] seen a more beautiful park. I have [5] a great quality of life.",
                answers: ["long", "lived", "for", "never", "had"]
            },
            {
                title: "Audio Script 8",
                audio: "The app has crashed twice today. I have already contacted the support team. They haven't replied yet. I have just reinstalled the software. I hope it has solved the problem.",
                text: "The app [1] crashed twice. I have [2] contacted support. They [3] replied yet. I have [4] reinstalled it. I hope it [5] solved the problem.",
                answers: ["has", "already", "haven't", "just", "has"]
            },
            {
                title: "Audio Script 9",
                audio: "Millennials have grown up during a time of change. They have adapted to digital technology quickly. Most of them have used the internet since their childhood. They have always been connected. They have seen the world change completely.",
                text: "Millennials [1] grown up during change. They [2] adapted quickly. Most [3] used the internet [4] their childhood. They [5] seen the world change.",
                answers: ["have", "have", "have", "since", "have"]
            },
            {
                title: "Audio Script 10",
                audio: "I have just finished my digital detox. I have been offline since last Monday. I have already noticed an improvement in my well-being. I have read many books this week. I haven't felt this relaxed for years.",
                text: "I have [1] finished my detox. I have [2] offline [3] last Monday. I have [4] read many books. I haven't felt this relaxed [5] years.",
                answers: ["just", "been", "since", "already", "for"]
            }
        ]
    }
});