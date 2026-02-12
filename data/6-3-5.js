/**
 * REACH English - LESSON DATA 6-3-5
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "6-3-5", 
    grade: "6th Grade",       
    bimester: "3",   
    chapter: "5",    
    chapterTitle: "All About You", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "In this lesson, you will learn to:<br><br>• Name parts of the body.<br>• Use adjectives to describe physical appearance (tall, short, thin, etc.).<br>• Talk about hobbies and interests.<br>• Use the Simple Present tense for routines and facts.<br>• Ask questions like \"What does she look like?\" and \"What do you do?\".",
            welcome: "Hi everyone! It's Mr. D!<br><br>Welcome to \"All About You\"! Today, we're going to become experts at describing people. What do they look like? What do they love to do? We'll learn how to talk about our bodies, our appearances, and our favorite hobbies. Plus, we'll master the Simple Present tense to talk about our daily lives. Let's get personal!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Name parts of the body. Use adjectives to describe physical appearance. Talk about hobbies and interests. Use the Simple Present tense for routines and facts. Ask questions like: What does she look like? and What do you do?",
                welcome: "TTS: Hi everyone! It's Mr. D! Welcome to All About You! Today, we're going to become experts at describing people. What do they look like? What do they love to do? We'll learn how to talk about our bodies, our appearances, and our favorite hobbies. Plus, we'll master the Simple Present tense to talk about our daily lives. Let's get personal!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of pages turning in a sketchbook. Albert is drawing, and Celine is looking over his shoulder.", 
            contextAudio: "audio/6-3-5/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Wow, Albert! You [draw](tooltip:draw) very well! Who is this?" 
                },
                { 
                    speaker: "Albert", 
                    text: "[This is](tooltip:this-is) a character for my comic book. He [is](tooltip:is) a superhero." 
                },
                { 
                    speaker: "Celine", 
                    text: "He [looks](tooltip:look-like) [strong](tooltip:strong)! He [has](tooltip:has) big [muscles](tooltip:muscle) and long [hair](tooltip:hair). Does he have a name?" 
                },
                { 
                    speaker: "Albert", 
                    text: "Yes, his name is Titan. He [fights](tooltip:fight) bad guys." 
                },
                { 
                    speaker: "Celine", 
                    text: "Cool! What [does he do](tooltip:what-do-you-do) in his [free time](tooltip:free-time)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "He [likes](tooltip:like) to [play](tooltip:play) video games and [read](tooltip:read) [comics](tooltip:comic), just like me!" 
                },
                { 
                    speaker: "Celine", 
                    text: "[Do you play](tooltip:do-you-play) video games [every day](tooltip:every-day)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "No, I [study](tooltip:study) on [weekdays](tooltip:weekday). I [only play](tooltip:only-play) on [weekends](tooltip:weekend)." 
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
                    title: "Verbs (Simple Present)",
                    audio: "TTS: Look like. Have. Has. Do. Does. Like. Play. Watch. Listen. Read. Live. Go. Study. Work. Sing. Dance. Cook. Travel.",
                    items: [
                        { term: "Look like", trans: "parecer (fisicamente)" },
                        { term: "Have / Has", trans: "ter" },
                        { term: "Do / Does", trans: "fazer (auxiliar)" },
                        { term: "Like", trans: "gostar" },
                        { term: "Play", trans: "jogar / brincar / tocar" },
                        { term: "Watch", trans: "assistir" },
                        { term: "Listen", trans: "ouvir" },
                        { term: "Read", trans: "ler" },
                        { term: "Live", trans: "morar / viver" },
                        { term: "Go", trans: "ir" },
                        { term: "Study", trans: "estudar" },
                        { term: "Work", trans: "trabalhar" },
                        { term: "Sing", trans: "cantar" },
                        { term: "Dance", trans: "dançar" },
                        { term: "Cook", trans: "cozinhar" },
                        { term: "Travel", trans: "viajar" }
                    ]
                },
                {
                    title: "Parts of the Body",
                    audio: "TTS: Body. Head. Hair. Face. Eye. Ear. Nose. Mouth. Tooth. Teeth. Neck. Shoulder. Arm. Hand. Finger. Leg. Foot. Feet. Toe.",
                    items: [
                        { term: "Body", trans: "corpo" },
                        { term: "Head", trans: "cabeça" },
                        { term: "Hair", trans: "cabelo" },
                        { term: "Face", trans: "rosto" },
                        { term: "Eye(s)", trans: "olho(s)" },
                        { term: "Ear(s)", trans: "orelha(s)" },
                        { term: "Nose", trans: "nariz" },
                        { term: "Mouth", trans: "boca" },
                        { term: "Tooth / Teeth", trans: "dente / dentes" },
                        { term: "Neck", trans: "pescoço" },
                        { term: "Shoulder", trans: "ombro" },
                        { term: "Arm", trans: "braço" },
                        { term: "Hand", trans: "mão" },
                        { term: "Finger", trans: "dedo da mão" },
                        { term: "Leg", trans: "perna" },
                        { term: "Foot / Feet", trans: "pé / pés" },
                        { term: "Toe", trans: "dedo do pé" }
                    ]
                },
                {
                    title: "Adjectives (Appearance)",
                    audio: "TTS: Tall. Short. Young. Old. Big. Small. Long. Beautiful. Handsome. Pretty. Ugly. Slim. Thin. Fat. Chubby. Heavy. Light. Straight. Wavy. Curly. Bald.",
                    items: [
                        { term: "Tall", trans: "alto(a)" },
                        { term: "Short", trans: "baixo(a) / curto(a)" },
                        { term: "Young", trans: "jovem" },
                        { term: "Old", trans: "velho(a) / idoso(a)" },
                        { term: "Big", trans: "grande" },
                        { term: "Small", trans: "pequeno(a)" },
                        { term: "Long", trans: "longo(a) / comprido(a)" },
                        { term: "Beautiful", trans: "bonito(a) / lindo(a)" },
                        { term: "Handsome", trans: "bonito (para homens)" },
                        { term: "Pretty", trans: "bonita / linda" },
                        { term: "Ugly", trans: "feio(a)" },
                        { term: "Slim / Thin", trans: "magro(a) / fino(a)" },
                        { term: "Fat / Chubby", trans: "gordo(a) / gordinho(a)" },
                        { term: "Heavy", trans: "pesado(a)" },
                        { term: "Light", trans: "leve" },
                        { term: "Straight", trans: "liso (cabelo)" },
                        { term: "Wavy", trans: "ondulado" },
                        { term: "Curly", trans: "cacheado" },
                        { term: "Bald", trans: "careca" }
                    ]
                },
                {
                    title: "Colors (Hair/Eyes)",
                    audio: "TTS: Black. Brown. Blond. Red. Gray. White. Green. Blue. Hazel.",
                    items: [
                        { term: "Black", trans: "preto" },
                        { term: "Brown", trans: "castanho (cabelo/olhos) / marrom" },
                        { term: "Blond(e)", trans: "loiro(a)" },
                        { term: "Red", trans: "ruivo(a) (cabelo) / vermelho" },
                        { term: "Gray / White", trans: "grisalho / branco" },
                        { term: "Green", trans: "verde" },
                        { term: "Blue", trans: "azul" },
                        { term: "Hazel", trans: "cor de avelã" }
                    ]
                },
                {
                    title: "Hobbies & Interests",
                    audio: "TTS: Hobby. Soccer. Basketball. Volleyball. Video games. Movies. TV series. Music. Books. Comics. Guitar. Piano. Drawing. Painting.",
                    items: [
                        { term: "Hobby", trans: "hobby / passatempo" },
                        { term: "Soccer", trans: "futebol" },
                        { term: "Basketball", trans: "basquete" },
                        { term: "Volleyball", trans: "vôlei" },
                        { term: "Video games", trans: "videogame" },
                        { term: "Movies / TV series", trans: "filmes / séries de TV" },
                        { term: "Music", trans: "música" },
                        { term: "Books / Comics", trans: "livros / quadrinhos" },
                        { term: "Guitar / Piano", trans: "violão (guitarra) / piano" },
                        { term: "Drawing / Painting", trans: "desenho / pintura" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: What do you do? What does she look like? I like to. He plays. She doesn't like.",
                    items: [
                        { term: "What do you do?", trans: "O que você faz? (Profissão/Rotina)" },
                        { term: "What does she look like?", trans: "Como ela é? (Aparência)" },
                        { term: "I like to...", trans: "Eu gosto de..." },
                        { term: "He plays...", trans: "Ele joga/toca..." },
                        { term: "She doesn't like...", trans: "Ela não gosta de..." }
                    ]
                }
            ], // This closes the areas array

            // 2B: Context Examples (Grouped & Tabbed) - PART 1
            exampleGroups: [
                {
                    title: "Verbs (Simple Present)",
                    audio: "TTS: You look like your father. She has blue eyes. Do you like pizza? I like pop music. We play soccer on Sundays. He watches TV at night. I listen to music on the bus. She reads comics every day. They live in a big house. I go to school in the morning. We study English together. My mom works in an office. Can you sing? They love to dance. My dad cooks dinner. We travel in December.",
                    items: [
                        { term: "Look like", sent: "You look like your father.", trans: "<span style='color:#0077b6'><i>Você se parece com seu pai.</i></span>" },
                        { term: "Have/Has", sent: "She has blue eyes.", trans: "<span style='color:#0077b6'><i>Ela tem olhos azuis.</i></span>" },
                        { term: "Do/Does", sent: "Do you like pizza?", trans: "<span style='color:#0077b6'><i>Você gosta de pizza?</i></span>" },
                        { term: "Like", sent: "I like pop music.", trans: "<span style='color:#0077b6'><i>Eu gosto de música pop.</i></span>" },
                        { term: "Play", sent: "We play soccer on Sundays.", trans: "<span style='color:#0077b6'><i>Nós jogamos futebol aos domingos.</i></span>" },
                        { term: "Watch", sent: "He watches TV at night.", trans: "<span style='color:#0077b6'><i>Ele assiste TV à noite.</i></span>" },
                        { term: "Listen", sent: "I listen to music on the bus.", trans: "<span style='color:#0077b6'><i>Eu ouço música no ônibus.</i></span>" },
                        { term: "Read", sent: "She reads comics every day.", trans: "<span style='color:#0077b6'><i>Ela lê quadrinhos todo dia.</i></span>" },
                        { term: "Live", sent: "They live in a big house.", trans: "<span style='color:#0077b6'><i>Eles moram em uma casa grande.</i></span>" },
                        { term: "Go", sent: "I go to school in the morning.", trans: "<span style='color:#0077b6'><i>Eu vou para a escola de manhã.</i></span>" },
                        { term: "Study", sent: "We study English together.", trans: "<span style='color:#0077b6'><i>Nós estudamos inglês juntos.</i></span>" },
                        { term: "Work", sent: "My mom works in an office.", trans: "<span style='color:#0077b6'><i>Minha mãe trabalha em um escritório.</i></span>" },
                        { term: "Sing", sent: "Can you sing?", trans: "<span style='color:#0077b6'><i>Você sabe cantar?</i></span>" },
                        { term: "Dance", sent: "They love to dance.", trans: "<span style='color:#0077b6'><i>Eles amam dançar.</i></span>" },
                        { term: "Cook", sent: "My dad cooks dinner.", trans: "<span style='color:#0077b6'><i>Meu pai cozinha o jantar.</i></span>" },
                        { term: "Travel", sent: "We travel in December.", trans: "<span style='color:#0077b6'><i>Nós viajamos em dezembro.</i></span>" }
                    ]
                },
                {
                    title: "Parts of the Body",
                    audio: "TTS: Exercise is good for your body. Wear a hat on your head. She has long hair. Wash your face. Close your eyes. The rabbit has long ears. Touch your nose. Open your mouth. Brush your teeth. A scarf around the neck. Carry the bag on your shoulder. He has strong arms. Clap your hands. Use your finger to point. My legs are tired. Put shoes on your feet. Wiggle your toes.",
                    items: [
                        { term: "Body", sent: "Exercise is good for your body.", trans: "<span style='color:#0077b6'><i>Exercício é bom para seu corpo.</i></span>" },
                        { term: "Head", sent: "Wear a hat on your head.", trans: "<span style='color:#0077b6'><i>Use um chapéu na sua cabeça.</i></span>" },
                        { term: "Hair", sent: "She has long hair.", trans: "<span style='color:#0077b6'><i>Ela tem cabelo comprido.</i></span>" },
                        { term: "Face", sent: "Wash your face.", trans: "<span style='color:#0077b6'><i>Lave seu rosto.</i></span>" },
                        { term: "Eye", sent: "Close your eyes.", trans: "<span style='color:#0077b6'><i>Feche seus olhos.</i></span>" },
                        { term: "Ear", sent: "The rabbit has long ears.", trans: "<span style='color:#0077b6'><i>O coelho tem orelhas longas.</i></span>" },
                        { term: "Nose", sent: "Touch your nose.", trans: "<span style='color:#0077b6'><i>Toque seu nariz.</i></span>" },
                        { term: "Mouth", sent: "Open your mouth.", trans: "<span style='color:#0077b6'><i>Abra sua boca.</i></span>" },
                        { term: "Teeth", sent: "Brush your teeth.", trans: "<span style='color:#0077b6'><i>Escove seus dentes.</i></span>" },
                        { term: "Neck", sent: "A scarf around the neck.", trans: "<span style='color:#0077b6'><i>Um cachecol em volta do pescoço.</i></span>" },
                        { term: "Shoulder", sent: "Carry the bag on your shoulder.", trans: "<span style='color:#0077b6'><i>Carregue a bolsa no seu ombro.</i></span>" },
                        { term: "Arm", sent: "He has strong arms.", trans: "<span style='color:#0077b6'><i>Ele tem braços fortes.</i></span>" },
                        { term: "Hand", sent: "Clap your hands.", trans: "<span style='color:#0077b6'><i>Bata palmas.</i></span>" },
                        { term: "Finger", sent: "Use your finger to point.", trans: "<span style='color:#0077b6'><i>Use seu dedo para apontar.</i></span>" },
                        { term: "Leg", sent: "My legs are tired.", trans: "<span style='color:#0077b6'><i>Minhas pernas estão cansadas.</i></span>" },
                        { term: "Feet", sent: "Put shoes on your feet.", trans: "<span style='color:#0077b6'><i>Coloque sapatos nos seus pés.</i></span>" },
                        { term: "Toe", sent: "Wiggle your toes.", trans: "<span style='color:#0077b6'><i>Mexa os dedos do pé.</i></span>" }
                    ]
                },
                {
                    title: "Adjectives (Appearance)",
                    audio: "TTS: He is very tall. She is short. The teacher is young. My grandfather is old. Elephants are big. Ants are small. Rapunzel has long hair. The sunset is beautiful. The actor is handsome. That dress is pretty. The monster is ugly. Models are usually slim. The baby is chubby. This box is heavy. A feather is light. He has straight hair. Her hair is wavy. I have curly hair. My uncle is bald.",
                    items: [
                        { term: "Tall", sent: "He is very tall.", trans: "<span style='color:#0077b6'><i>Ele é muito alto.</i></span>" },
                        { term: "Short", sent: "She is short.", trans: "<span style='color:#0077b6'><i>Ela é baixa.</i></span>" },
                        { term: "Young", sent: "The teacher is young.", trans: "<span style='color:#0077b6'><i>A professora é jovem.</i></span>" },
                        { term: "Old", sent: "My grandfather is old.", trans: "<span style='color:#0077b6'><i>Meu avô é idoso.</i></span>" },
                        { term: "Big", sent: "Elephants are big.", trans: "<span style='color:#0077b6'><i>Elefantes são grandes.</i></span>" },
                        { term: "Small", sent: "Ants are small.", trans: "<span style='color:#0077b6'><i>Formigas são pequenas.</i></span>" },
                        { term: "Long", sent: "Rapunzel has long hair.", trans: "<span style='color:#0077b6'><i>Rapunzel tem cabelo longo.</i></span>" },
                        { term: "Beautiful", sent: "The sunset is beautiful.", trans: "<span style='color:#0077b6'><i>O pôr do sol é lindo.</i></span>" },
                        { term: "Handsome", sent: "The actor is handsome.", trans: "<span style='color:#0077b6'><i>O ator é bonito.</i></span>" },
                        { term: "Pretty", sent: "That dress is pretty.", trans: "<span style='color:#0077b6'><i>Aquele vestido é bonito.</i></span>" },
                        { term: "Ugly", sent: "The monster is ugly.", trans: "<span style='color:#0077b6'><i>O monstro é feio.</i></span>" },
                        { term: "Slim/Thin", sent: "Models are usually slim.", trans: "<span style='color:#0077b6'><i>Modelos são geralmente magras.</i></span>" },
                        { term: "Fat/Chubby", sent: "The baby is chubby.", trans: "<span style='color:#0077b6'><i>O bebê é gordinho.</i></span>" },
                        { term: "Heavy", sent: "This box is heavy.", trans: "<span style='color:#0077b6'><i>Esta caixa é pesada.</i></span>" },
                        { term: "Light", sent: "A feather is light.", trans: "<span style='color:#0077b6'><i>Uma pena é leve.</i></span>" },
                        { term: "Straight", sent: "He has straight hair.", trans: "<span style='color:#0077b6'><i>Ele tem cabelo liso.</i></span>" },
                        { term: "Wavy", sent: "Her hair is wavy.", trans: "<span style='color:#0077b6'><i>O cabelo dela é ondulado.</i></span>" },
                        { term: "Curly", sent: "I have curly hair.", trans: "<span style='color:#0077b6'><i>Eu tenho cabelo cacheado.</i></span>" },
                        { term: "Bald", sent: "My uncle is bald.", trans: "<span style='color:#0077b6'><i>Meu tio é careca.</i></span>" }
                    ]
                },
                {
                    title: "Colors (Hair/Eyes)",
                    audio: "TTS: He has black hair. She has brown eyes. He is blond. She has red hair. My dad has gray hair. The cat has green eyes. The baby has blue eyes. Her eyes are hazel.",
                    items: [
                        { term: "Black", sent: "He has black hair.", trans: "<span style='color:#0077b6'><i>Ele tem cabelo preto.</i></span>" },
                        { term: "Brown", sent: "She has brown eyes.", trans: "<span style='color:#0077b6'><i>Ela tem olhos castanhos.</i></span>" },
                        { term: "Blond", sent: "He is blond.", trans: "<span style='color:#0077b6'><i>Ele é loiro.</i></span>" },
                        { term: "Red", sent: "She has red hair.", trans: "<span style='color:#0077b6'><i>Ela tem cabelo ruivo.</i></span>" },
                        { term: "Gray", sent: "My dad has gray hair.", trans: "<span style='color:#0077b6'><i>Meu pai tem cabelo grisalho.</i></span>" },
                        { term: "Green", sent: "The cat has green eyes.", trans: "<span style='color:#0077b6'><i>O gato tem olhos verdes.</i></span>" },
                        { term: "Blue", sent: "The baby has blue eyes.", trans: "<span style='color:#0077b6'><i>O bebê tem olhos azuis.</i></span>" },
                        { term: "Hazel", sent: "Her eyes are hazel.", trans: "<span style='color:#0077b6'><i>Os olhos dela são cor de avelã.</i></span>" }
                    ]
                },
                {
                    title: "Hobbies & Interests",
                    audio: "TTS: Reading is my hobby. Brazil loves soccer. He plays basketball. We play volleyball on the beach. Do you play video games? I like action movies. She listens to music. I have many books. He plays the guitar. She is good at drawing.",
                    items: [
                        { term: "Hobby", sent: "Reading is my hobby.", trans: "<span style='color:#0077b6'><i>Ler é meu passatempo.</i></span>" },
                        { term: "Soccer", sent: "Brazil loves soccer.", trans: "<span style='color:#0077b6'><i>O Brasil ama futebol.</i></span>" },
                        { term: "Basketball", sent: "He plays basketball.", trans: "<span style='color:#0077b6'><i>Ele joga basquete.</i></span>" },
                        { term: "Volleyball", sent: "We play volleyball on the beach.", trans: "<span style='color:#0077b6'><i>Jogamos vôlei na praia.</i></span>" },
                        { term: "Video games", sent: "Do you play video games?", trans: "<span style='color:#0077b6'><i>Você joga videogame?</i></span>" },
                        { term: "Movies", sent: "I like action movies.", trans: "<span style='color:#0077b6'><i>Eu gosto de filmes de ação.</i></span>" },
                        { term: "Music", sent: "She listens to music.", trans: "<span style='color:#0077b6'><i>Ela ouve música.</i></span>" },
                        { term: "Books", sent: "I have many books.", trans: "<span style='color:#0077b6'><i>Eu tenho muitos livros.</i></span>" },
                        { term: "Guitar", sent: "He plays the guitar.", trans: "<span style='color:#0077b6'><i>Ele toca violão.</i></span>" },
                        { term: "Drawing", sent: "She is good at drawing.", trans: "<span style='color:#0077b6'><i>Ela é boa em desenhar.</i></span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: What do you do? I am a student. What does she look like? She is tall. I like to read. He plays the piano. She doesn't like spiders.",
                    items: [
                        { term: "What do you do?", sent: "'What do you do?' 'I am a student.'", trans: "<span style='color:#0077b6'><i>'O que você faz?' 'Sou estudante.'</i></span>" },
                        { term: "What does she look like?", sent: "'What does she look like?' 'She is tall.'", trans: "<span style='color:#0077b6'><i>'Como ela é?' 'Ela é alta.'</i></span>" },
                        { term: "I like to...", sent: "I like to read.", trans: "<span style='color:#0077b6'><i>Eu gosto de ler.</i></span>" },
                        { term: "He plays...", sent: "He plays the piano.", trans: "<span style='color:#0077b6'><i>Ele toca piano.</i></span>" },
                        { term: "She doesn't like...", sent: "She doesn't like spiders.", trans: "<span style='color:#0077b6'><i>Ela não gosta de aranhas.</i></span>" }
                    ]
                }
            ],

            // 2C: Practice MCQ Drills
            drills: [
                {
                    type: "mcq",
                    q: "Choose the correct translation for 'To look like':",
                    options: [
                        { t: "Gostar", c: false },
                        { t: "Parecer (fisicamente)", c: true },
                        { t: "Olhar", c: false },
                        { t: "Amar", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I _______ video games on weekends.'",
                    options: [
                        { t: "watch", c: false },
                        { t: "play", c: true },
                        { t: "listen", c: false },
                        { t: "cook", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What do you use to see?",
                    options: [
                        { t: "Nose", c: false },
                        { t: "Mouth", c: false },
                        { t: "Eyes", c: true },
                        { t: "Ears", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What do you use to hear?",
                    options: [
                        { t: "Hands", c: false },
                        { t: "Ears", c: true },
                        { t: "Feet", c: false },
                        { t: "Hair", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which part is NOT on the face?",
                    options: [
                        { t: "Nose", c: false },
                        { t: "Mouth", c: false },
                        { t: "Eye", c: false },
                        { t: "Shoulder", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "The opposite of 'Tall' is:",
                    options: [
                        { t: "Big", c: false },
                        { t: "Short", c: true },
                        { t: "Fat", c: false },
                        { t: "Young", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Someone with no hair is:",
                    options: [
                        { t: "Blond", c: false },
                        { t: "Bald", c: true },
                        { t: "Curly", c: false },
                        { t: "Straight", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A word for 'beautiful' (usually for women/girls) is:",
                    options: [
                        { t: "Handsome", c: false },
                        { t: "Pretty", c: true },
                        { t: "Ugly", c: false },
                        { t: "Old", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'He has _______ (loiro) hair.'",
                    options: [
                        { t: "black", c: false },
                        { t: "red", c: false },
                        { t: "blond", c: true },
                        { t: "brown", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'Her eyes are _______ (castanhos).'",
                    options: [
                        { t: "blue", c: false },
                        { t: "brown", c: true },
                        { t: "green", c: false },
                        { t: "gray", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Hobbies: 'I love stories. I read _______.'",
                    options: [
                        { t: "music", c: false },
                        { t: "books", c: true },
                        { t: "soccer", c: false },
                        { t: "food", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Hobbies: 'He plays the _______.'",
                    options: [
                        { t: "guitar", c: true },
                        { t: "basketball", c: false },
                        { t: "video game", c: false },
                        { t: "song", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Question: '_______ does he look like?' 'He is tall.'",
                    options: [
                        { t: "Who", c: false },
                        { t: "Where", c: false },
                        { t: "What", c: true },
                        { t: "When", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Question: 'What _______ you do?' 'I am a teacher.'",
                    options: [
                        { t: "are", c: false },
                        { t: "do", c: true },
                        { t: "is", c: false },
                        { t: "does", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative: 'She _______ like carrots.'",
                    options: [
                        { t: "don't", c: false },
                        { t: "isn't", c: false },
                        { t: "doesn't", c: true },
                        { t: "not", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which body part do you use to clap?",
                    options: [
                        { t: "Feet", c: false },
                        { t: "Hands", c: true },
                        { t: "Shoulders", c: false },
                        { t: "Eyes", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A feather is _______.",
                    options: [
                        { t: "Heavy", c: false },
                        { t: "Light", c: true },
                        { t: "Fat", c: false },
                        { t: "Big", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'My mom _______ dinner in the kitchen.'",
                    options: [
                        { t: "plays", c: false },
                        { t: "studies", c: false },
                        { t: "cooks", c: true },
                        { t: "lives", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The end part of your leg is your _______.",
                    options: [
                        { t: "Hand", c: false },
                        { t: "Foot", c: true },
                        { t: "Arm", c: false },
                        { t: "Neck", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A monster in a movie is usually _______.",
                    options: [
                        { t: "Beautiful", c: false },
                        { t: "Pretty", c: false },
                        { t: "Ugly", c: true },
                        { t: "Handsome", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Hobbies: 'Brazil loves _______.'",
                    options: [
                        { t: "Drawing", c: false },
                        { t: "Soccer", c: true },
                        { t: "Singing", c: false },
                        { t: "Cooking", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You use your _______ to point at a picture.",
                    options: [
                        { t: "Finger", c: true },
                        { t: "Toe", c: false },
                        { t: "Neck", c: false },
                        { t: "Ear", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Old people often have _______ (grisalho) hair.",
                    options: [
                        { t: "Black", c: false },
                        { t: "Gray", c: true },
                        { t: "Brown", c: false },
                        { t: "Red", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Do you _______ to music on the bus?",
                    options: [
                        { t: "read", c: false },
                        { t: "watch", c: false },
                        { t: "listen", c: true },
                        { t: "play", c: false }
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
                    title: "Simple Present (Affirmative)",
                    audio: "TTS: I play soccer. You study English. He plays soccer. She studies English. General rule: add s. Ends in o, ch, sh, x, or double s: add es. Consonant plus y: change to i e s. Irregular: Have becomes Has.",
                    explanation: "We use the Simple Present to talk about habits, routines, and facts. The verb changes depending on the subject.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos o Simple Present para falar de hábitos, rotinas e fatos. O verbo muda dependendo do sujeito.)</span>",
                    samples: [
                        { en: "I / You / We / They: Use the base verb (e.g., I play soccer).", pt: "<span style='color:#0077b6'>(Use o verbo base).</span>" },
                        { en: "He / She / It: Add -s, -es, or -ies (e.g., She studies English).", pt: "<span style='color:#0077b6'>(Adicione -s, -es ou -ies).</span>" },
                        { en: "General rule: live -> lives / play -> plays.", pt: "<span style='color:#0077b6'>(Regra geral).</span>" },
                        { en: "Ends in -o, -ch, -sh, -x, -ss: go -> goes / watch -> watches.", pt: "<span style='color:#0077b6'>(Terminados em som de s ou x).</span>" },
                        { en: "Consonant + y: cry -> cries / study -> studies.", pt: "<span style='color:#0077b6'>(Consoante + y).</span>" },
                        { en: "Irregular: Have -> Has.", pt: "<span style='color:#0077b6'>(Irregular).</span>" }
                    ]
                },
                {
                    title: "Simple Present (Negative)",
                    audio: "TTS: I don't like spiders. We don't live in Paris. He doesn't like spiders. She doesn't live in Paris. Remember to remove the s from the main verb after doesn't.",
                    explanation: "To make sentences negative, we use the helper verbs 'don't' or 'doesn't' before the main verb.<br><br><span style='color:#0077b6; font-style:italic;'>(Para fazer frases negativas, usamos os verbos auxiliares 'don't' ou 'doesn't' antes do verbo principal.)</span>",
                    samples: [
                        { en: "I / You / We / They: Use don't + Base Verb (e.g., I don't like spiders).", pt: "<span style='color:#0077b6'>(Use 'don't' + Verbo Base).</span>" },
                        { en: "He / She / It: Use doesn't + Base Verb (e.g., He doesn't like spiders).", pt: "<span style='color:#0077b6'>(Use 'doesn't' + Verbo Base - Remova o 's' do verbo!).</span>" }
                    ]
                },
                {
                    title: "Interrogative & Short Answers",
                    audio: "TTS: Do you play? Yes, I do. No, I don't. Does he play? Yes, he does. No, he doesn't. Does Celine study? Yes, she does.",
                    explanation: "To ask questions, we put 'Do' or 'Does' before the subject. We answer with Short Answers.<br><br><span style='color:#0077b6; font-style:italic;'>(Para fazer perguntas, colocamos 'Do' ou 'Does' antes do sujeito. Respondemos com Respostas Curtas.)</span>",
                    samples: [
                        { en: "Do + I / you / we / they...? -> Yes, I do. / No, I don't.", pt: "<span style='color:#0077b6'>(Pergunta com Do).</span>" },
                        { en: "Does + he / she / it...? -> Yes, he does. / No, he doesn't.", pt: "<span style='color:#0077b6'>(Pergunta com Does - Use o Verbo Base).</span>" }
                    ]
                },
                {
                    title: "Descriptions: Be vs. Have",
                    audio: "TTS: Use To Be for adjectives like height, age, and personality. She is tall. He is funny. Use To Have for specific body parts. She has blue eyes. He has long hair. Albert is short, but he has big feet.",
                    explanation: "We use different verbs for different types of descriptions.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos verbos diferentes para tipos diferentes de descrições.)</span>",
                    samples: [
                        { en: "To Be (am, is, are): Used for adjectives (height, age, personality).", pt: "<span style='color:#0077b6'>(Ex: She is tall. He is funny.)</span>" },
                        { en: "To Have (have, has): Used for body parts (hair, eyes, nose).", pt: "<span style='color:#0077b6'>(Ex: She has blue eyes. He has long hair.)</span>" }
                    ]
                }
            ],

            // 3B: Natural Examples (Dialogues Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Simple Present (Affirmative & Negative)",
                    audio: "audio/6-3-5/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "My sister loves music. She plays the guitar every day.", 
                            pt: "<span style='color:#0077b6'><i>Minha irmã ama música. Ela toca violão todo dia.</i></span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "That is cool. My brothers don't play instruments. They like video games.", 
                            pt: "<span style='color:#0077b6'><i>Isso é legal. Meus irmãos não tocam instrumentos. Eles gostam de videogames.</i></span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Simple Present (Interrogative & Short Answers)",
                    audio: "audio/6-3-5/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Does your sister sing too?", 
                            pt: "<span style='color:#0077b6'><i>A sua irmã canta também?</i></span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes, she does. She sings very well. Do you sing, Celine?", 
                            pt: "<span style='color:#0077b6'><i>Sim, ela canta. Ela canta muito bem. Você canta, Celine?</i></span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, I don't. I am terrible! But my parents sing in the car.", 
                            pt: "<span style='color:#0077b6'><i>Não, eu não canto. Eu sou terrível! Mas meus pais cantam no carro.</i></span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Describing People (To Be vs. Have)",
                    audio: "audio/6-3-5/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "What does your brother look like?", 
                            pt: "<span style='color:#0077b6'><i>Como é o seu irmão?</i></span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "He is tall and thin. He has curly brown hair and green eyes.", 
                            pt: "<span style='color:#0077b6'><i>Ele é alto e magro. Ele tem cabelo castanho cacheado e olhos verdes.</i></span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ Drills
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Affirmative: Complete: 'Celine _______ comics.'",
                    options: [
                        { t: "read", c: false },
                        { t: "reading", c: false },
                        { t: "reads", c: true },
                        { t: "reades", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative: Complete: 'We _______ go to school on Sundays.'",
                    options: [
                        { t: "doesn't", c: false },
                        { t: "don't", c: true },
                        { t: "not", c: false },
                        { t: "aren't", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Interrogative: '_______ Albert like chocolate?'",
                    options: [
                        { t: "Do", c: false },
                        { t: "Is", c: false },
                        { t: "Does", c: true },
                        { t: "Are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Short Answers: 'Do the students study?' 'Yes, _______.'",
                    options: [
                        { t: "they do", c: true },
                        { t: "they does", c: false },
                        { t: "they don't", c: false },
                        { t: "he does", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To Be vs. Have: Complete: 'My dog _______ big ears.'",
                    options: [
                        { t: "is", c: false },
                        { t: "has", c: true },
                        { t: "have", c: false },
                        { t: "are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To Be vs. Have: Complete: 'The teacher _______ very nice.'",
                    options: [
                        { t: "is", c: true },
                        { t: "has", c: false },
                        { t: "have", c: false },
                        { t: "does", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Subject Nouns: 'My mother _______ (cook) dinner.'",
                    options: [
                        { t: "cook", c: false },
                        { t: "cooks", c: true },
                        { t: "cooking", c: false },
                        { t: "cookes", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Subject Nouns: 'The boys _______ (play) soccer.'",
                    options: [
                        { t: "plays", c: false },
                        { t: "play", c: true },
                        { t: "playing", c: false },
                        { t: "played", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling (He/She/It): 'Titan _______ (fight) bad guys.'",
                    options: [
                        { t: "fight", c: false },
                        { t: "fights", c: true },
                        { t: "fightes", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling (He/She/It): 'Lucas _______ (go) to the park.'",
                    options: [
                        { t: "go", c: false },
                        { t: "gos", c: false },
                        { t: "goes", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling (He/She/It): 'The cat _______ (like) milk.'",
                    options: [
                        { t: "like", c: false },
                        { t: "likes", c: true },
                        { t: "likies", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling (He/She/It): 'She _______ (study) on weekdays.'",
                    options: [
                        { t: "studys", c: false },
                        { t: "studies", c: true },
                        { t: "studyes", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative: 'I _______ (not/dance) very well.'",
                    options: [
                        { t: "not dance", c: false },
                        { t: "doesn't dance", c: false },
                        { t: "don't dance", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative: 'He _______ (not/work) on weekends.'",
                    options: [
                        { t: "doesn't work", c: true },
                        { t: "don't work", c: false },
                        { t: "not works", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative: 'They _______ (not/have) long hair.'",
                    options: [
                        { t: "hasn't", c: false },
                        { t: "doesn't have", c: false },
                        { t: "don't have", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative: 'It _______ (not/rain) in the living room.'",
                    options: [
                        { t: "don't rain", c: false },
                        { t: "doesn't rain", c: true },
                        { t: "isn't rain", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Interrogative: '_______ you live in an apartment?'",
                    options: [
                        { t: "Do", c: true },
                        { t: "Does", c: false },
                        { t: "Are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Interrogative: '_______ Celine have a cat?'",
                    options: [
                        { t: "Do", c: false },
                        { t: "Does", c: true },
                        { t: "Is", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Interrogative: '_______ they watch movies together?'",
                    options: [
                        { t: "Do", c: true },
                        { t: "Does", c: false },
                        { t: "Are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To Be vs. Have: 'I _______ (be) short.'",
                    options: [
                        { t: "have", c: false },
                        { t: "am", c: true },
                        { t: "is", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To Be vs. Have: 'You _______ (have) beautiful eyes.'",
                    options: [
                        { t: "are", c: false },
                        { t: "has", c: false },
                        { t: "have", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "To Be vs. Have: 'Titan _______ (be) a superhero.'",
                    options: [
                        { t: "is", c: true },
                        { t: "has", c: false },
                        { t: "are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Short Answers: 'Does she like video games?' 'Yes, _______.'",
                    options: [
                        { t: "she does", c: true },
                        { t: "she do", c: false },
                        { t: "he does", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Short Answers: 'Do you sing?' 'No, _______.'",
                    options: [
                        { t: "I don't", c: true },
                        { t: "I doesn't", c: false },
                        { t: "you don't", c: false }
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
                    text: "What does she look like?<br><small style='color:#0077b6'>(Como ela é? / Qual a aparência dela?)</small>", 
                    audio: "TTS: What does she look like?", 
                    arrow: "↘" 
                },
                { 
                    text: "She has long brown hair.<br><small style='color:#0077b6'>(Ela tem cabelo castanho comprido.)</small>", 
                    audio: "TTS: She has long brown hair.", 
                    arrow: "↘" 
                },
                { 
                    text: "Do you play soccer?<br><small style='color:#0077b6'>(Você joga futebol?)</small>", 
                    audio: "TTS: Do you play soccer?", 
                    arrow: "↗" 
                },
                { 
                    text: "No, I don't. I play tennis.<br><small style='color:#0077b6'>(Não, eu não jogo. Eu jogo tênis.)</small>", 
                    audio: "TTS: No, I don't. I play tennis.", 
                    arrow: "↘" 
                },
                { 
                    text: "My brother is tall and handsome.<br><small style='color:#0077b6'>(Meu irmão é alto e bonito.)</small>", 
                    audio: "TTS: My brother is tall and handsome.", 
                    arrow: "↘" 
                },
                { 
                    text: "I listen to music every day.<br><small style='color:#0077b6'>(Eu ouço música todo dia.)</small>", 
                    audio: "TTS: I listen to music every day.", 
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
                    instruction: "Listen to Albert describing his sister. Type the missing words. <br><small style='color:#0077b6'>(Ouça Albert descrevendo a irmã dele. Digite as palavras que faltam.)</small>",
                    audio: "TTS: My sister is tall. She has blue eyes. She likes to read books.",
                    text: "My sister is [tall]. She has [blue] eyes. She likes to [read] books."
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation and choose the correct option. <br><small style='color:#0077b6'>(Ouça a conversa e escolha a opção correta.)</small>",
                    audio: "audio/6-3-5/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Celine: Do you [play | watch] video games, Albert?", 
                            a: "play" 
                        },
                        { 
                            q: "Albert: Yes, I [do | don't]. I play every weekend.", 
                            a: "do" 
                        },
                        { 
                            q: "Celine: [Does | Do] your brother play too?", 
                            a: "Does" 
                        },
                        { 
                            q: "Albert: No, he [don't | doesn't]. He likes music.", 
                            a: "doesn't" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer. <br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta correta.)</small>",
                    audio: "TTS: What does he do in his free time?",
                    options: [
                        { t: "He is tall and thin.", c: false },
                        { t: "He watches TV.", c: true },
                        { t: "He has short hair.", c: false },
                        { t: "He is a student.", c: false }
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
                    title: "Narration: The Basketball Player",
                    audio: "TTS: Michael is a basketball player. He is very tall and strong. He has short black hair and brown eyes. He exercises every day to stay fit. On weekends, he plays games with his team. He loves sports, but he doesn't like swimming. He is a very happy person. || audio/6-3-5/p6_text1.mp3",
                    body: "Michael is a basketball player. He is very tall and strong. He has short black hair and brown eyes. He exercises every day to stay fit. On weekends, he plays games with his team. He loves sports, but he doesn't like swimming. He is a very happy person.",
                    questions: [
                        { 
                            q: "What does Michael look like?", 
                            options: [ 
                                {t: "He is short and thin.", c: false}, 
                                {t: "He is tall and strong.", c: true}, 
                                {t: "He has long hair.", c: false},
                                {t: "He is fat.", c: false}
                            ] 
                        },
                        { 
                            q: "What does he do on weekends?", 
                            options: [ 
                                {t: "He swims.", c: false}, 
                                {t: "He reads books.", c: false}, 
                                {t: "He plays games with his team.", c: true},
                                {t: "He sleeps.", c: false}
                            ] 
                        },
                        { 
                            q: "Does he like swimming?", 
                            options: [ 
                                {t: "Yes, he does.", c: false}, 
                                {t: "No, he doesn't.", c: true}, 
                                {t: "He loves it.", c: false},
                                {t: "He swims every day.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: The New Neighbor",
                    audio: "audio/6-3-5/p6_text2.mp3",
                    body: "<b>Celine:</b> Albert, do you know the new neighbor?<br><b>Albert:</b> No, I don't. What does she look like?<br><b>Celine:</b> She is short and pretty. She has long blonde hair.<br><b>Albert:</b> Does she have hobbies?<br><b>Celine:</b> Yes, she plays the guitar. I hear music every afternoon.<br><b>Albert:</b> That is cool! I like music too.",
                    questions: [
                        { 
                            q: "What does the new neighbor look like?", 
                            options: [ 
                                {t: "Tall and thin.", c: false}, 
                                {t: "Short and pretty.", c: true}, 
                                {t: "Old and ugly.", c: false},
                                {t: "Bald and strong.", c: false}
                            ] 
                        },
                        { 
                            q: "What color is her hair?", 
                            options: [ 
                                {t: "Black", c: false}, 
                                {t: "Brown", c: false}, 
                                {t: "Red", c: false},
                                {t: "Blonde", c: true}
                            ] 
                        },
                        { 
                            q: "What does she do in the afternoon?", 
                            options: [ 
                                {t: "She plays soccer.", c: false}, 
                                {t: "She reads comics.", c: false}, 
                                {t: "She plays the guitar.", c: true},
                                {t: "She watches TV.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: My Sister Sophia",
                    audio: "TTS: My name is Lucas. I have a sister named Sophia. She is young, only 10 years old. Sophia is thin and has curly red hair. She has freckles on her face. Sophia loves animals. She has a cat and a dog. She doesn't like math, but she likes to draw and paint pictures. || audio/6-3-5/p6_text3.mp3",
                    body: "My name is Lucas. I have a sister named Sophia. She is young, only 10 years old. Sophia is thin and has curly red hair. She has freckles on her face. Sophia loves animals. She has a cat and a dog. She doesn't like math, but she likes to draw and paint pictures.",
                    questions: [
                        { 
                            q: "How old is Sophia?", 
                            options: [ 
                                {t: "She is 12.", c: false}, 
                                {t: "She is 10.", c: true}, 
                                {t: "She is 15.", c: false},
                                {t: "She is 8.", c: false}
                            ] 
                        },
                        { 
                            q: "What kind of hair does she have?", 
                            options: [ 
                                {t: "Straight black hair.", c: false}, 
                                {t: "Curly red hair.", c: true}, 
                                {t: "Short brown hair.", c: false},
                                {t: "Long blonde hair.", c: false}
                            ] 
                        },
                        { 
                            q: "What does Sophia like to do?", 
                            options: [ 
                                {t: "Study math.", c: false}, 
                                {t: "Play sports.", c: false}, 
                                {t: "Draw and paint.", c: true},
                                {t: "Cook dinner.", c: false}
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
                // Drill 1: Matching (Adjective Opposites)
                {
                    type: "matching",
                    instruction: "Match the adjective on the left with its opposite on the right. <br><small style='color:#0077b6'>(Combine o adjetivo à esquerda com seu oposto à direita.)</small>",
                    pairs: [
                        { left: "Tall", right: "Short", val: "1" },
                        { left: "Big", right: "Small", val: "2" },
                        { left: "Beautiful", right: "Ugly", val: "3" },
                        { left: "Young", right: "Old", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Unscramble)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence or question. <br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>",
                    sentence: "she / look / does / What / like / ?",
                    correct: "What does she look like ?"
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the sentence.",
                    sentence: "has / eyes / He / green / .",
                    correct: "He has green eyes ."
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the sentence.",
                    sentence: "play / don't / I / soccer / .",
                    correct: "I don't play soccer ."
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the question.",
                    sentence: "you / Do / comics / read / ?",
                    correct: "Do you read comics ?"
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group. <br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Leg", c: false },
                        { t: "Arm", c: false },
                        { t: "Hand", c: false },
                        { t: "Book", c: true } // Not a body part
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Tall", c: false },
                        { t: "Short", c: false },
                        { t: "Fat", c: false },
                        { t: "Sing", c: true } // Verb vs Adjectives
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Soccer", c: false },
                        { t: "Tennis", c: false },
                        { t: "Volleyball", c: false },
                        { t: "Eye", c: true } // Body part vs Sports
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Play", c: false },
                        { t: "Read", c: false },
                        { t: "Cook", c: false },
                        { t: "Happy", c: true } // Adjective vs Verbs
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence. <br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "She [is | has | does | play] beautiful.", a: "is" },
                        { q: "He [has | is | does | play] a big nose.", a: "has" },
                        { q: "What [does | has | is | play] he do?", a: "does" },
                        { q: "We [play | has | is | does] video games.", a: "play" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: A Friend or Family Member. Now it's your turn! Describe a friend or family member.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Um Amigo ou Membro da Família. Agora é sua vez! Descreva um amigo ou membro da família.)</span></small>",
            example: "\"This is my friend, Lucas. He is tall and thin. He has black hair and brown eyes. He likes to play soccer on Saturdays. He doesn't like to dance.\"<br><br><small><span style='color:#0077b6'>(\"Este é meu amigo, Lucas. Ele é alto e magro. Ele tem cabelo preto e olhos castanhos. Ele gosta de jogar futebol aos sábados. Ele não gosta de dançar.\")</span></small>",
            prompts: [
                "Who is the person? (Name/Relationship). <br><small><span style='color:#0077b6'>(Quem é a pessoa? Nome/Parentesco).</span></small>",
                "What does he/she look like? (Adjectives, Hair, Eyes). <br><small><span style='color:#0077b6'>(Como ele/ela é? Adjetivos, Cabelo, Olhos).</span></small>",
                "What does he/she like to do? (Hobbies). <br><small><span style='color:#0077b6'>(O que ele/ela gosta de fazer? Hobbies).</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Verbs and Body Parts)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Verbs (Simple Present) ---
                { 
                    term: "Look like", 
                    definition: "To have a similar appearance to someone or something.", 
                    defTrans: "parecer (fisicamente)",
                    example: "You look like your mother.", 
                    audioFront: "TTS: Look like",
                    audioBack: "TTS: You look like your mother." 
                },
                { 
                    term: "Have / Has", 
                    definition: "To possess, own, or hold.", 
                    defTrans: "ter",
                    example: "She has green eyes.", 
                    audioFront: "TTS: Have or Has",
                    audioBack: "TTS: She has green eyes." 
                },
                { 
                    term: "Do / Does", 
                    definition: "An auxiliary verb used for questions and negatives.", 
                    defTrans: "fazer (verbo auxiliar)",
                    example: "Do you like sports?", 
                    audioFront: "TTS: Do or Does",
                    audioBack: "TTS: Do you like sports?" 
                },
                { 
                    term: "Like", 
                    definition: "To find agreeable, enjoyable, or satisfactory.", 
                    defTrans: "gostar",
                    example: "I like chocolate.", 
                    audioFront: "TTS: Like",
                    audioBack: "TTS: I like chocolate." 
                },
                { 
                    term: "Play", 
                    definition: "To engage in activity for enjoyment or perform music.", 
                    defTrans: "jogar / brincar / tocar",
                    example: "They play soccer.", 
                    audioFront: "TTS: Play",
                    audioBack: "TTS: They play soccer." 
                },
                { 
                    term: "Watch", 
                    definition: "To look at or observe attentively.", 
                    defTrans: "assistir",
                    example: "We watch TV at night.", 
                    audioFront: "TTS: Watch",
                    audioBack: "TTS: We watch TV at night." 
                },
                { 
                    term: "Listen", 
                    definition: "To give attention to sound.", 
                    defTrans: "ouvir",
                    example: "I listen to pop music.", 
                    audioFront: "TTS: Listen",
                    audioBack: "TTS: I listen to pop music." 
                },
                { 
                    term: "Read", 
                    definition: "To look at and comprehend written words.", 
                    defTrans: "ler",
                    example: "He reads comics.", 
                    audioFront: "TTS: Read",
                    audioBack: "TTS: He reads comics." 
                },
                { 
                    term: "Live", 
                    definition: "To have one's home in a particular place.", 
                    defTrans: "morar / viver",
                    example: "We live in an apartment.", 
                    audioFront: "TTS: Live",
                    audioBack: "TTS: We live in an apartment." 
                },
                { 
                    term: "Go", 
                    definition: "To move from one place to another.", 
                    defTrans: "ir",
                    example: "I go to the park.", 
                    audioFront: "TTS: Go",
                    audioBack: "TTS: I go to the park." 
                },
                { 
                    term: "Study", 
                    definition: "To devote time and attention to acquiring knowledge.", 
                    defTrans: "estudar",
                    example: "She studies English.", 
                    audioFront: "TTS: Study",
                    audioBack: "TTS: She studies English." 
                },
                { 
                    term: "Work", 
                    definition: "To be engaged in physical or mental activity to achieve a result.", 
                    defTrans: "trabalhar",
                    example: "My father works hard.", 
                    audioFront: "TTS: Work",
                    audioBack: "TTS: My father works hard." 
                },
                { 
                    term: "Sing", 
                    definition: "To make musical sounds with the voice.", 
                    defTrans: "cantar",
                    example: "Can you sing?", 
                    audioFront: "TTS: Sing",
                    audioBack: "TTS: Can you sing?" 
                },
                { 
                    term: "Dance", 
                    definition: "To move rhythmically to music.", 
                    defTrans: "dançar",
                    example: "They love to dance.", 
                    audioFront: "TTS: Dance",
                    audioBack: "TTS: They love to dance." 
                },
                { 
                    term: "Cook", 
                    definition: "To prepare food by combining and heating ingredients.", 
                    defTrans: "cozinhar",
                    example: "My mom cooks well.", 
                    audioFront: "TTS: Cook",
                    audioBack: "TTS: My mom cooks well." 
                },
                { 
                    term: "Travel", 
                    definition: "To go from one place to another, typically over a distance.", 
                    defTrans: "viajar",
                    example: "We travel in the summer.", 
                    audioFront: "TTS: Travel",
                    audioBack: "TTS: We travel in the summer." 
                },

                // --- Parts of the Body ---
                { 
                    term: "Body", 
                    definition: "The physical structure of a person or animal.", 
                    defTrans: "corpo",
                    example: "Move your body.", 
                    audioFront: "TTS: Body",
                    audioBack: "TTS: Move your body." 
                },
                { 
                    term: "Head", 
                    definition: "The upper part of the body containing the brain.", 
                    defTrans: "cabeça",
                    example: "Touch your head.", 
                    audioFront: "TTS: Head",
                    audioBack: "TTS: Touch your head." 
                },
                { 
                    term: "Hair", 
                    definition: "The fine thread-like strands growing from the skin.", 
                    defTrans: "cabelo",
                    example: "She has long hair.", 
                    audioFront: "TTS: Hair",
                    audioBack: "TTS: She has long hair." 
                },
                { 
                    term: "Face", 
                    definition: "The front part of a person's head.", 
                    defTrans: "rosto",
                    example: "Wash your face.", 
                    audioFront: "TTS: Face",
                    audioBack: "TTS: Wash your face." 
                },
                { 
                    term: "Eye(s)", 
                    definition: "The organ of sight.", 
                    defTrans: "olho(s)",
                    example: "He has blue eyes.", 
                    audioFront: "TTS: Eyes",
                    audioBack: "TTS: He has blue eyes." 
                },
                { 
                    term: "Ear(s)", 
                    definition: "The organ of hearing.", 
                    defTrans: "orelha(s)",
                    example: "Listen with your ears.", 
                    audioFront: "TTS: Ears",
                    audioBack: "TTS: Listen with your ears." 
                },
                { 
                    term: "Nose", 
                    definition: "The part of the face used for smelling and breathing.", 
                    defTrans: "nariz",
                    example: "She has a small nose.", 
                    audioFront: "TTS: Nose",
                    audioBack: "TTS: She has a small nose." 
                },
                { 
                    term: "Mouth", 
                    definition: "The opening in the face used for eating and speaking.", 
                    defTrans: "boca",
                    example: "Open your mouth.", 
                    audioFront: "TTS: Mouth",
                    audioBack: "TTS: Open your mouth." 
                },
                { 
                    term: "Tooth / Teeth", 
                    definition: "Hard structures in the jaws used for biting.", 
                    defTrans: "dente / dentes",
                    example: "Brush your teeth.", 
                    audioFront: "TTS: Teeth",
                    audioBack: "TTS: Brush your teeth." 
                },
                { 
                    term: "Neck", 
                    definition: "The part connecting the head to the rest of the body.", 
                    defTrans: "pescoço",
                    example: "My neck hurts.", 
                    audioFront: "TTS: Neck",
                    audioBack: "TTS: My neck hurts." 
                },
                { 
                    term: "Shoulder", 
                    definition: "The joint where the arm connects to the torso.", 
                    defTrans: "ombro",
                    example: "Touch your shoulder.", 
                    audioFront: "TTS: Shoulder",
                    audioBack: "TTS: Touch your shoulder." 
                },
                { 
                    term: "Arm", 
                    definition: "The upper limb of the human body.", 
                    defTrans: "braço",
                    example: "He has strong arms.", 
                    audioFront: "TTS: Arm",
                    audioBack: "TTS: He has strong arms." 
                },
                { 
                    term: "Hand", 
                    definition: "The end part of a person's arm beyond the wrist.", 
                    defTrans: "mão",
                    example: "Clap your hands.", 
                    audioFront: "TTS: Hand",
                    audioBack: "TTS: Clap your hands." 
                },
                { 
                    term: "Finger", 
                    definition: "Each of the five digits on the hand.", 
                    defTrans: "dedo da mão",
                    example: "Point with your finger.", 
                    audioFront: "TTS: Finger",
                    audioBack: "TTS: Point with your finger." 
                },
                { 
                    term: "Leg", 
                    definition: "Each of the limbs on which a person walks.", 
                    defTrans: "perna",
                    example: "Run with your legs.", 
                    audioFront: "TTS: Leg",
                    audioBack: "TTS: Run with your legs." 
                },
                { 
                    term: "Foot / Feet", 
                    definition: "The lower extremity of the leg below the ankle.", 
                    defTrans: "pé / pés",
                    example: "Stomp your feet.", 
                    audioFront: "TTS: Feet",
                    audioBack: "TTS: Stomp your feet." 
                },
                { 
                    term: "Toe", 
                    definition: "Any of the five digits at the end of the human foot.", 
                    defTrans: "dedo do pé",
                    example: "I hurt my toe.", 
                    audioFront: "TTS: Toe",
                    audioBack: "TTS: I hurt my toe." 
                },
                                // --- Adjectives (Appearance) ---
                { 
                    term: "Tall", 
                    definition: "Of great or more than average height.", 
                    defTrans: "alto(a)",
                    example: "The player is very tall.", 
                    audioFront: "TTS: Tall",
                    audioBack: "TTS: The player is very tall." 
                },
                { 
                    term: "Short", 
                    definition: "Measuring a small distance from end to end; small in height.", 
                    defTrans: "baixo(a) / curto(a)",
                    example: "She is short.", 
                    audioFront: "TTS: Short",
                    audioBack: "TTS: She is short." 
                },
                { 
                    term: "Young", 
                    definition: "Having lived or existed for only a short time.", 
                    defTrans: "jovem",
                    example: "The students are young.", 
                    audioFront: "TTS: Young",
                    audioBack: "TTS: The students are young." 
                },
                { 
                    term: "Old", 
                    definition: "Having lived for a long time; no longer young.", 
                    defTrans: "velho(a) / idoso(a)",
                    example: "My grandfather is old.", 
                    audioFront: "TTS: Old",
                    audioBack: "TTS: My grandfather is old." 
                },
                { 
                    term: "Big", 
                    definition: "Of considerable size, extent, or intensity.", 
                    defTrans: "grande",
                    example: "He has big feet.", 
                    audioFront: "TTS: Big",
                    audioBack: "TTS: He has big feet." 
                },
                { 
                    term: "Small", 
                    definition: "Of a size that is less than normal or usual.", 
                    defTrans: "pequeno(a)",
                    example: "She has a small nose.", 
                    audioFront: "TTS: Small",
                    audioBack: "TTS: She has a small nose." 
                },
                { 
                    term: "Long", 
                    definition: "Measuring a great distance from end to end.", 
                    defTrans: "longo(a) / comprido(a)",
                    example: "I have long hair.", 
                    audioFront: "TTS: Long",
                    audioBack: "TTS: I have long hair." 
                },
                { 
                    term: "Beautiful", 
                    definition: "Pleasing the senses or mind aesthetically.", 
                    defTrans: "bonito(a) / lindo(a)",
                    example: "She is beautiful.", 
                    audioFront: "TTS: Beautiful",
                    audioBack: "TTS: She is beautiful." 
                },
                { 
                    term: "Handsome", 
                    definition: "Of a man, good-looking.", 
                    defTrans: "bonito (para homens)",
                    example: "He is handsome.", 
                    audioFront: "TTS: Handsome",
                    audioBack: "TTS: He is handsome." 
                },
                { 
                    term: "Pretty", 
                    definition: "Attractive in a delicate way without being truly beautiful.", 
                    defTrans: "bonita / linda",
                    example: "The girl is pretty.", 
                    audioFront: "TTS: Pretty",
                    audioBack: "TTS: The girl is pretty." 
                },
                { 
                    term: "Ugly", 
                    definition: "Unpleasant or repulsive, especially in appearance.", 
                    defTrans: "feio(a)",
                    example: "The monster is ugly.", 
                    audioFront: "TTS: Ugly",
                    audioBack: "TTS: The monster is ugly." 
                },
                { 
                    term: "Slim / Thin", 
                    definition: "Gracefully thin; having little flesh or fat.", 
                    defTrans: "magro(a) / fino(a)",
                    example: "He is tall and slim.", 
                    audioFront: "TTS: Slim or Thin",
                    audioBack: "TTS: He is tall and slim." 
                },
                { 
                    term: "Fat / Chubby", 
                    definition: "Having a large amount of excess flesh; plump.", 
                    defTrans: "gordo(a) / gordinho(a)",
                    example: "The baby is chubby.", 
                    audioFront: "TTS: Fat or Chubby",
                    audioBack: "TTS: The baby is chubby." 
                },
                { 
                    term: "Heavy", 
                    definition: "Of great weight; difficult to lift or move.", 
                    defTrans: "pesado(a)",
                    example: "This bag is heavy.", 
                    audioFront: "TTS: Heavy",
                    audioBack: "TTS: This bag is heavy." 
                },
                { 
                    term: "Light", 
                    definition: "Having little weight; not heavy.", 
                    defTrans: "leve",
                    example: "The box is light.", 
                    audioFront: "TTS: Light",
                    audioBack: "TTS: The box is light." 
                },
                { 
                    term: "Straight", 
                    definition: "Extending in one direction without a curve or bend.", 
                    defTrans: "liso (cabelo)",
                    example: "She has straight hair.", 
                    audioFront: "TTS: Straight",
                    audioBack: "TTS: She has straight hair." 
                },
                { 
                    term: "Wavy", 
                    definition: "Having a series of curves.", 
                    defTrans: "ondulado",
                    example: "His hair is wavy.", 
                    audioFront: "TTS: Wavy",
                    audioBack: "TTS: His hair is wavy." 
                },
                { 
                    term: "Curly", 
                    definition: "Having a spiral or curved shape.", 
                    defTrans: "cacheado",
                    example: "I have curly hair.", 
                    audioFront: "TTS: Curly",
                    audioBack: "TTS: I have curly hair." 
                },
                { 
                    term: "Bald", 
                    definition: "Having a scalp wholly or partly lacking hair.", 
                    defTrans: "careca",
                    example: "My uncle is bald.", 
                    audioFront: "TTS: Bald",
                    audioBack: "TTS: My uncle is bald." 
                },

                // --- Colors (Hair/Eyes) ---
                { 
                    term: "Black", 
                    definition: "Of the very darkest color.", 
                    defTrans: "preto",
                    example: "He has black hair.", 
                    audioFront: "TTS: Black",
                    audioBack: "TTS: He has black hair." 
                },
                { 
                    term: "Brown", 
                    definition: "Of a color produced by mixing red, yellow, and black.", 
                    defTrans: "castanho / marrom",
                    example: "She has brown eyes.", 
                    audioFront: "TTS: Brown",
                    audioBack: "TTS: She has brown eyes." 
                },
                { 
                    term: "Blond(e)", 
                    definition: "Fair or pale yellow (hair).", 
                    defTrans: "loiro(a)",
                    example: "He is blond.", 
                    audioFront: "TTS: Blond",
                    audioBack: "TTS: He is blond." 
                },
                { 
                    term: "Red (Hair)", 
                    definition: "Of a color at the end of the spectrum next to orange; ginger.", 
                    defTrans: "ruivo(a) / vermelho",
                    example: "She has red hair.", 
                    audioFront: "TTS: Red hair",
                    audioBack: "TTS: She has red hair." 
                },
                { 
                    term: "Gray / White", 
                    definition: "A color intermediate between black and white.", 
                    defTrans: "grisalho / branco",
                    example: "My dad has gray hair.", 
                    audioFront: "TTS: Gray or White",
                    audioBack: "TTS: My dad has gray hair." 
                },
                { 
                    term: "Green", 
                    definition: "Of the color between blue and yellow in the spectrum.", 
                    defTrans: "verde",
                    example: "The cat has green eyes.", 
                    audioFront: "TTS: Green",
                    audioBack: "TTS: The cat has green eyes." 
                },
                { 
                    term: "Blue", 
                    definition: "Of the color of the sky.", 
                    defTrans: "azul",
                    example: "The baby has blue eyes.", 
                    audioFront: "TTS: Blue",
                    audioBack: "TTS: The baby has blue eyes." 
                },
                { 
                    term: "Hazel", 
                    definition: "A reddish-brown or greenish-brown color, used for eyes.", 
                    defTrans: "cor de avelã",
                    example: "Her eyes are hazel.", 
                    audioFront: "TTS: Hazel",
                    audioBack: "TTS: Her eyes are hazel." 
                },
                // --- Hobbies & Interests ---
                { 
                    term: "Hobby", 
                    definition: "An activity done regularly in one's leisure time for pleasure.", 
                    defTrans: "hobby / passatempo",
                    example: "What is your hobby?", 
                    audioFront: "TTS: Hobby",
                    audioBack: "TTS: What is your hobby?" 
                },
                { 
                    term: "Soccer", 
                    definition: "A game played by two teams of eleven players with a round ball.", 
                    defTrans: "futebol",
                    example: "I play soccer.", 
                    audioFront: "TTS: Soccer",
                    audioBack: "TTS: I play soccer." 
                },
                { 
                    term: "Basketball", 
                    definition: "A game where goals are scored by throwing a ball through a netted hoop.", 
                    defTrans: "basquete",
                    example: "He plays basketball.", 
                    audioFront: "TTS: Basketball",
                    audioBack: "TTS: He plays basketball." 
                },
                { 
                    term: "Volleyball", 
                    definition: "A game for two teams in which a large ball is hit by hand over a high net.", 
                    defTrans: "vôlei",
                    example: "We play volleyball.", 
                    audioFront: "TTS: Volleyball",
                    audioBack: "TTS: We play volleyball." 
                },
                { 
                    term: "Video games", 
                    definition: "A game played by electronically manipulating images on a screen.", 
                    defTrans: "videogame",
                    example: "Do you play video games?", 
                    audioFront: "TTS: Video games",
                    audioBack: "TTS: Do you play video games?" 
                },
                { 
                    term: "Movies / TV series", 
                    definition: "Films or sets of television programs.", 
                    defTrans: "filmes / séries de TV",
                    example: "I watch movies.", 
                    audioFront: "TTS: Movies or TV series",
                    audioBack: "TTS: I watch movies." 
                },
                { 
                    term: "Music", 
                    definition: "Vocal or instrumental sounds combined to produce beauty of form.", 
                    defTrans: "música",
                    example: "She listens to music.", 
                    audioFront: "TTS: Music",
                    audioBack: "TTS: She listens to music." 
                },
                { 
                    term: "Books / Comics", 
                    definition: "Written or printed works; magazines that present stories using images.", 
                    defTrans: "livros / quadrinhos",
                    example: "He reads comics.", 
                    audioFront: "TTS: Books or Comics",
                    audioBack: "TTS: He reads comics." 
                },
                { 
                    term: "Guitar / Piano", 
                    definition: "Common musical instruments.", 
                    defTrans: "violão / piano",
                    example: "He plays the piano.", 
                    audioFront: "TTS: Guitar or Piano",
                    audioBack: "TTS: He plays the piano." 
                },
                { 
                    term: "Drawing / Painting", 
                    definition: "The art of producing images with pencils, pens, or paint.", 
                    defTrans: "desenho / pintura",
                    example: "She likes drawing.", 
                    audioFront: "TTS: Drawing or Painting",
                    audioBack: "TTS: She likes drawing." 
                },

                // --- Phrases & Expressions ---
                { 
                    term: "What do you do?", 
                    definition: "Question asking about someone's job or routine.", 
                    defTrans: "O que você faz?",
                    example: "What do you do on weekends?", 
                    audioFront: "TTS: What do you do?",
                    audioBack: "TTS: What do you do on weekends?" 
                },
                { 
                    term: "What does she look like?", 
                    definition: "Question asking about someone's physical appearance.", 
                    defTrans: "Como ela é?",
                    example: "What does she look like? She is tall.", 
                    audioFront: "TTS: What does she look like?",
                    audioBack: "TTS: What does she look like? She is tall." 
                },
                { 
                    term: "I like to...", 
                    definition: "Phrase used to express preference for an activity.", 
                    defTrans: "Eu gosto de...",
                    example: "I like to read books.", 
                    audioFront: "TTS: I like to...",
                    audioBack: "TTS: I like to read books." 
                },

                // --- Grammar Points ---
                { 
                    term: "Simple Present (Affirmative)", 
                    definition: "I/You/We/They (base verb) | He/She/It (verb + s).", 
                    defTrans: "Presente Simples (Afirmativo)",
                    example: "She plays tennis.", 
                    audioFront: "TTS: Simple Present Affirmative",
                    audioBack: "TTS: She plays tennis." 
                },
                { 
                    term: "Simple Present (Negative)", 
                    definition: "Use 'don't' or 'doesn't' before the base verb.", 
                    defTrans: "Presente Simples (Negativo)",
                    example: "He doesn't like coffee.", 
                    audioFront: "TTS: Simple Present Negative",
                    audioBack: "TTS: He doesn't like coffee." 
                },
                { 
                    term: "Short Answers", 
                    definition: "Yes, I do. / No, he doesn't.", 
                    defTrans: "Respostas Curtas",
                    example: "'Do you play?' 'Yes, I do.'", 
                    audioFront: "TTS: Short Answers",
                    audioBack: "TTS: Do you play? Yes, I do." 
                },
                { 
                    term: "To Be vs. Have", 
                    definition: "BE for adjectives (tall). HAVE for body parts (blue eyes).", 
                    defTrans: "Ser vs. Ter",
                    example: "He is tall. He has blue eyes.", 
                    audioFront: "TTS: To Be versus Have",
                    audioBack: "TTS: He is tall. He has blue eyes." 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Part 1: Context & Verbs)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "draw", 
            definition: "To produce a picture or diagram by making lines and marks on paper.", 
            translation: "Desenhar" 
        },
        { 
            topic: "Context", 
            term: "this-is", 
            definition: "Used to introduce or identify a person or thing.", 
            translation: "Isto é / Este é" 
        },
        { 
            topic: "Context", 
            term: "is", 
            definition: "Third-person singular present of 'be'.", 
            translation: "é / está" 
        },
        { 
            topic: "Context", 
            term: "strong", 
            definition: "Having the power to move heavy weights or perform other physically demanding tasks.", 
            translation: "Forte" 
        },
        { 
            topic: "Context", 
            term: "has", 
            definition: "Third-person singular present of 'have'.", 
            translation: "tem" 
        },
        { 
            topic: "Context", 
            term: "muscle", 
            definition: "A band or bundle of fibrous tissue in a human or animal body that has the ability to contract.", 
            translation: "Músculo" 
        },
        { 
            topic: "Context", 
            term: "fight", 
            definition: "To take part in a violent struggle involving the exchange of physical blows.", 
            translation: "Lutar / Combater" 
        },
        { 
            topic: "Context", 
            term: "free-time", 
            definition: "Time when one is not working or attending school; leisure time.", 
            translation: "Tempo livre" 
        },
        { 
            topic: "Context", 
            term: "comic", 
            definition: "A magazine or book that contains a set of stories told in pictures.", 
            translation: "Gibi / Quadrinho" 
        },
        { 
            topic: "Context", 
            term: "do-you-play", 
            definition: "Question used to ask about participation in a game or activity.", 
            translation: "Você joga? / Você brinca?" 
        },
        { 
            topic: "Context", 
            term: "every-day", 
            definition: "Happening or used each day; daily.", 
            translation: "Todos os dias" 
        },
        { 
            topic: "Context", 
            term: "weekday", 
            definition: "Any day of the week except Saturday and Sunday.", 
            translation: "Dia de semana" 
        },
        { 
            topic: "Context", 
            term: "only-play", 
            definition: "Used to indicate that the activity of playing is exclusive to a specific time.", 
            translation: "Só jogo / Só brinco" 
        },
        { 
            topic: "Context", 
            term: "weekend", 
            definition: "Saturday and Sunday.", 
            translation: "Fim de semana" 
        },

        // --- TOPIC 2: VERBS ---
        { 
            topic: "Verbs", 
            term: "look-like", 
            definition: "To have a similar appearance to someone or something.", 
            translation: "parecer (fisicamente)" 
        },
        { 
            topic: "Verbs", 
            term: "have-has", 
            definition: "To possess, own, or hold.", 
            translation: "ter" 
        },
        { 
            topic: "Verbs", 
            term: "do-does", 
            definition: "An auxiliary verb used to form questions and negatives in the simple present tense.", 
            translation: "fazer (verbo auxiliar)" 
        },
        { 
            topic: "Verbs", 
            term: "like", 
            definition: "To find agreeable, enjoyable, or satisfactory.", 
            translation: "gostar" 
        },
        { 
            topic: "Verbs", 
            term: "play", 
            definition: "To engage in activity for enjoyment; to take part in a sport; to perform music.", 
            translation: "jogar / brincar / tocar" 
        },
        { 
            topic: "Verbs", 
            term: "watch", 
            definition: "To look at or observe attentively over a period of time.", 
            translation: "assistir" 
        },
        { 
            topic: "Verbs", 
            term: "listen", 
            definition: "To give attention to a sound.", 
            translation: "ouvir" 
        },
        { 
            topic: "Verbs", 
            term: "read", 
            definition: "To look at and comprehend the meaning of written or printed matter.", 
            translation: "ler" 
        },
        { 
            topic: "Verbs", 
            term: "live", 
            definition: "To have one's home in a particular place.", 
            translation: "morar / viver" 
        },
        { 
            topic: "Verbs", 
            term: "go", 
            definition: "To move from one place to another.", 
            translation: "ir" 
        },
        { 
            topic: "Verbs", 
            term: "study", 
            definition: "To devote time and attention to acquiring knowledge.", 
            translation: "estudar" 
        },
        { 
            topic: "Verbs", 
            term: "work", 
            definition: "To engage in activity in order to achieve a result; to do a job.", 
            translation: "trabalhar" 
        },
        { 
            topic: "Verbs", 
            term: "sing", 
            definition: "To make musical sounds with the voice.", 
            translation: "cantar" 
        },
        { 
            topic: "Verbs", 
            term: "dance", 
            definition: "To move rhythmically to music.", 
            translation: "dançar" 
        },
        { 
            topic: "Verbs", 
            term: "cook", 
            definition: "To prepare food by combining, mixing, and heating ingredients.", 
            translation: "cozinhar" 
        },
        { 
            topic: "Verbs", 
            term: "travel", 
            definition: "To go from one place to another, typically over a distance.", 
            translation: "viajar" 
        },
        // --- TOPIC 3: PARTS OF THE BODY ---
        { 
            topic: "Body", 
            term: "body", 
            definition: "The physical structure of a person or animal.", 
            translation: "corpo" 
        },
        { 
            topic: "Body", 
            term: "head", 
            definition: "The upper part of the human body, containing the brain, eyes, ears, nose, and mouth.", 
            translation: "cabeça" 
        },
        { 
            topic: "Body", 
            term: "hair", 
            definition: "The fine thread-like strands growing from the skin of humans and other mammals.", 
            translation: "cabelo" 
        },
        { 
            topic: "Body", 
            term: "face", 
            definition: "The front part of a person's head from the forehead to the chin.", 
            translation: "rosto" 
        },
        { 
            topic: "Body", 
            term: "eye", 
            definition: "The organ of sight.", 
            translation: "olho(s)" 
        },
        { 
            topic: "Body", 
            term: "ear", 
            definition: "The organ of hearing.", 
            translation: "orelha(s)" 
        },
        { 
            topic: "Body", 
            term: "nose", 
            definition: "The part projecting above the mouth on the face, used for smelling and breathing.", 
            translation: "nariz" 
        },
        { 
            topic: "Body", 
            term: "mouth", 
            definition: "The opening in the lower part of the human face through which food is taken and speech is emitted.", 
            translation: "boca" 
        },
        { 
            topic: "Body", 
            term: "tooth-teeth", 
            definition: "Hard, calcified structures in the jaws used for biting and chewing.", 
            translation: "dente / dentes" 
        },
        { 
            topic: "Body", 
            term: "neck", 
            definition: "The part of a person's body connecting the head to the rest of the body.", 
            translation: "pescoço" 
        },
        { 
            topic: "Body", 
            term: "shoulder", 
            definition: "The joint where the arm connects to the torso.", 
            translation: "ombro" 
        },
        { 
            topic: "Body", 
            term: "arm", 
            definition: "The upper limb of the human body.", 
            translation: "braço" 
        },
        { 
            topic: "Body", 
            term: "hand", 
            definition: "The end part of a person's arm beyond the wrist.", 
            translation: "mão" 
        },
        { 
            topic: "Body", 
            term: "finger", 
            definition: "Each of the five digits on the hand.", 
            translation: "dedo da mão" 
        },
        { 
            topic: "Body", 
            term: "leg", 
            definition: "Each of the limbs on which a person or animal walks and stands.", 
            translation: "perna" 
        },
        { 
            topic: "Body", 
            term: "foot-feet", 
            definition: "The lower extremity of the leg below the ankle.", 
            translation: "pé / pés" 
        },
        { 
            topic: "Body", 
            term: "toe", 
            definition: "Any of the five digits at the end of the human foot.", 
            translation: "dedo do pé" 
        },

        // --- TOPIC 4: ADJECTIVES (APPEARANCE) ---
        { 
            topic: "Adjectives", 
            term: "tall", 
            definition: "Of great or more than average height.", 
            translation: "alto(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "short", 
            definition: "Measuring a small distance from end to end; small in height.", 
            translation: "baixo(a) / curto(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "young", 
            definition: "Having lived or existed for only a short time.", 
            translation: "jovem" 
        },
        { 
            topic: "Adjectives", 
            term: "old", 
            definition: "Having lived for a long time; no longer young.", 
            translation: "velho(a) / idoso(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "big", 
            definition: "Of considerable size, extent, or intensity.", 
            translation: "grande" 
        },
        { 
            topic: "Adjectives", 
            term: "small", 
            definition: "Of a size that is less than normal or usual.", 
            translation: "pequeno(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "long", 
            definition: "Measuring a great distance from end to end.", 
            translation: "longo(a) / comprido(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "beautiful", 
            definition: "Pleasing the senses or mind aesthetically.", 
            translation: "bonito(a) / lindo(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "handsome", 
            definition: "(Of a man) good-looking.", 
            translation: "bonito (para homens)" 
        },
        { 
            topic: "Adjectives", 
            term: "pretty", 
            definition: "Attractive in a delicate way without being truly beautiful.", 
            translation: "bonita / linda" 
        },
        { 
            topic: "Adjectives", 
            term: "ugly", 
            definition: "Unpleasant or repulsive, especially in appearance.", 
            translation: "feio(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "slim-thin", 
            definition: "Gracefully thin; having little flesh or fat.", 
            translation: "magro(a) / fino(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "fat-chubby", 
            definition: "Having a large amount of excess flesh; plump.", 
            translation: "gordo(a) / gordinho(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "heavy", 
            definition: "Of great weight; difficult to lift or move.", 
            translation: "pesado(a)" 
        },
        { 
            topic: "Adjectives", 
            term: "light", 
            definition: "Having little weight; not heavy.", 
            translation: "leve" 
        },
        { 
            topic: "Adjectives", 
            term: "straight", 
            definition: "Extending or moving uniformly in one direction only; without a curve or bend.", 
            translation: "liso (cabelo)" 
        },
        { 
            topic: "Adjectives", 
            term: "wavy", 
            definition: "Having a series of curves.", 
            translation: "ondulado" 
        },
        { 
            topic: "Adjectives", 
            term: "curly", 
            definition: "Having a spiral or curved shape.", 
            translation: "cacheado" 
        },
        { 
            topic: "Adjectives", 
            term: "bald", 
            definition: "Having a scalp wholly or partly lacking hair.", 
            translation: "careca" 
        },
        // --- TOPIC 5: COLORS (HAIR/EYES) ---
        { 
            topic: "Colors", 
            term: "black-color", 
            definition: "The darkest color, the result of the absence or complete absorption of visible light.", 
            translation: "preto" 
        },
        { 
            topic: "Colors", 
            term: "brown-color", 
            definition: "A color produced by mixing red, yellow, and black.", 
            translation: "castanho / marrom" 
        },
        { 
            topic: "Colors", 
            term: "blond", 
            definition: "Fair or pale yellow (usually referring to hair).", 
            translation: "loiro(a)" 
        },
        { 
            topic: "Colors", 
            term: "red-color", 
            definition: "Of a color at the end of the spectrum next to orange; ginger (referring to hair).", 
            translation: "ruivo(a) / vermelho" 
        },
        { 
            topic: "Colors", 
            term: "gray-white", 
            definition: "A color intermediate between black and white; lacking color.", 
            translation: "grisalho / branco" 
        },
        { 
            topic: "Colors", 
            term: "green-color", 
            definition: "Of the color between blue and yellow in the spectrum.", 
            translation: "verde" 
        },
        { 
            topic: "Colors", 
            term: "blue-color", 
            definition: "Of the color of the sky on a clear day.", 
            translation: "azul" 
        },
        { 
            topic: "Colors", 
            term: "hazel", 
            definition: "A reddish-brown or greenish-brown color, especially used to describe eyes.", 
            translation: "cor de avelã" 
        },

        // --- TOPIC 6: HOBBIES & INTERESTS ---
        { 
            topic: "Hobbies", 
            term: "hobby", 
            definition: "An activity done regularly in one's leisure time for pleasure.", 
            translation: "hobby / passatempo" 
        },
        { 
            topic: "Hobbies", 
            term: "soccer", 
            definition: "A game played by two teams of eleven players with a round ball.", 
            translation: "futebol" 
        },
        { 
            topic: "Hobbies", 
            term: "basketball", 
            definition: "A game played between two teams of five players in which goals are scored by throwing a ball through a netted hoop.", 
            translation: "basquete" 
        },
        { 
            topic: "Hobbies", 
            term: "volleyball", 
            definition: "A game for two teams in which a large ball is hit by hand over a high net.", 
            translation: "vôlei" 
        },
        { 
            topic: "Hobbies", 
            term: "video-games", 
            definition: "A game played by electronically manipulating images produced by a computer program on a screen.", 
            translation: "videogame" 
        },
        { 
            topic: "Hobbies", 
            term: "movies-tv", 
            definition: "Films or sets of television programs.", 
            translation: "filmes / séries de TV" 
        },
        { 
            topic: "Hobbies", 
            term: "music", 
            definition: "Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form and expression.", 
            translation: "música" 
        },
        { 
            topic: "Hobbies", 
            term: "books-comics", 
            definition: "Written or printed works; magazines that present stories using images and text.", 
            translation: "livros / quadrinhos" 
        },
        { 
            topic: "Hobbies", 
            term: "guitar-piano", 
            definition: "Common musical instruments used to play melodies or chords.", 
            translation: "violão / piano" 
        },
        { 
            topic: "Hobbies", 
            term: "drawing-painting", 
            definition: "The art of producing images with pencils, pens, or paint.", 
            translation: "desenho / pintura" 
        },

        // --- TOPIC 7: PHRASES & GRAMMAR ---
        { 
            topic: "Phrases & Grammar", 
            term: "what-do-you-do", 
            definition: "A question used to ask about someone's job or daily routine.", 
            translation: "O que você faz?" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "what-does-she-look-like", 
            definition: "A question used to ask about someone's physical appearance.", 
            translation: "Como ela é?" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "i-like-to", 
            definition: "A phrase used to express a preference for a specific activity.", 
            translation: "Eu gosto de..." 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "he-plays", 
            definition: "Phrase describing someone's activity with a game or instrument.", 
            translation: "Ele joga / Ele toca" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "she-doesnt-like", 
            definition: "Phrase expressing someone's dislike or lack of interest.", 
            translation: "Ela não gosta de..." 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "simple-present", 
            definition: "The tense used for habits, facts, and routines (e.g., I study, She eats).", 
            translation: "Presente Simples" 
        }
    ] // This closes the glossary array
}); // This closes the initLesson object