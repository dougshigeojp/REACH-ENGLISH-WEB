/**
 * REACH English - LESSON DATA 9-3-6
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "9-3-6", 
    grade: "9th Grade",       
    bimester: "3",   
    chapter: "6",    
    chapterTitle: "What If...?", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss unsolved mysteries and supernatural events.<br>• Use vocabulary for strange phenomena (UFOs, ghosts, legends).<br>• Use idiomatic expressions related to fear and secrets.<br>• Use the Second Conditional to talk about hypothetical situations.<br>• Ask \"What would you do?\" questions.",
            welcome: "Hello, Mystery Hunters! It's Mr. D!<br><br>Welcome to \"What If...?\"! Today, we are stepping into the unknown. Have you ever wondered about the Bermuda Triangle, or if ghosts really exist? We are going to explore these spooky topics and learn how to talk about imaginary situations. We'll also learn some \"chilling\" idioms to describe fear and secrets. Turn on your flashlights, and let's investigate!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss unsolved mysteries and supernatural events. Use vocabulary for strange phenomena. Use idiomatic expressions related to fear and secrets. Use the Second Conditional to talk about hypothetical situations. Ask 'What would you do?' questions.",
                welcome: "TTS: Hello, Mystery Hunters! It's Mr. D! Welcome to What If...?! Today, we are stepping into the unknown. Have you ever wondered about the Bermuda Triangle, or if ghosts really exist? We are going to explore these spooky topics and learn how to talk about imaginary situations. We'll also learn some chilling idioms to describe fear and secrets. Turn on your flashlights, and let's investigate!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of wind howling and a creaky door opening. Albert and Celine are standing in front of an old, dark house.", 
            contextAudio: "audio/9-3-6/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "Look at that house, Celine. People say it is [haunted](tooltip:haunted)." 
                },
                { 
                    speaker: "Celine", 
                    text: "I don't [believe in](tooltip:believe-in) ghosts, Albert. It is just a [legend](tooltip:legend)." 
                },
                { 
                    speaker: "Albert", 
                    text: "But [what would you do if](tooltip:what-would-you-do-if) you saw a [strange](tooltip:strange) light inside?" 
                },
                { 
                    speaker: "Celine", 
                    text: "[If I saw](tooltip:if-i-saw) a light, I would [investigate](tooltip:investigate). I am not [afraid](tooltip:afraid)." 
                },
                { 
                    speaker: "Albert", 
                    text: "You are brave! [If I were you](tooltip:if-i-were-you), I would run away. This place [gives me the creeps](tooltip:gives-me-the-creeps)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Shh! Did you hear that? My [heart just skipped a beat](tooltip:skipped-a-beat)." 
                },
                { 
                    speaker: "Albert", 
                    text: "[Over my dead body](tooltip:over-my-dead-body) am I going in there! Let's go home!" 
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
                    title: "Mystery & Supernatural Nouns",
                    audio: "TTS: Mystery. Account. Ghost. Haunted House. UFO. Alien. Bermuda Triangle. Evidence. Clue. Legend. Theory. Phenomenon.",
                    items: [
                        { term: "Mystery", trans: "Mistério" },
                        { term: "Account", trans: "Relato / História" },
                        { term: "Ghost", trans: "Fantasma" },
                        { term: "Haunted House", trans: "Casa mal-assombrada" },
                        { term: "UFO", trans: "OVNI (Objeto Voador Não Identificado)" },
                        { term: "Alien", trans: "Alienígena / Extraterrestre" },
                        { term: "Bermuda Triangle", trans: "Triângulo das Bermudas" },
                        { term: "Evidence", trans: "Evidência" },
                        { term: "Clue", trans: "Pista / Indício" },
                        { term: "Legend", trans: "Lenda" },
                        { term: "Theory", trans: "Teoria" },
                        { term: "Phenomenon", trans: "Fenômeno" }
                    ]
                },
                {
                    title: "Adjectives",
                    audio: "TTS: Unsolved. Strange. Weird. Supernatural. Pale.",
                    items: [
                        { term: "Unsolved", trans: "Não solucionado" },
                        { term: "Strange", trans: "Estranho" },
                        { term: "Weird", trans: "Esquisito" },
                        { term: "Supernatural", trans: "Sobrenatural" },
                        { term: "Pale", trans: "Pálido" }
                    ]
                },
                {
                    title: "Verbs (Investigation & Reaction)",
                    audio: "TTS: Disappear. Investigate. Explore. Search for. Believe in. Doubt. Imagine. Wonder. Frighten. Scare.",
                    items: [
                        { term: "Disappear", trans: "Desaparecer" },
                        { term: "Investigate", trans: "Investigar" },
                        { term: "Explore", trans: "Explorar" },
                        { term: "Search (for)", trans: "Procurar (por)" },
                        { term: "Believe (in)", trans: "Acreditar (em)" },
                        { term: "Doubt", trans: "Duvidar" },
                        { term: "Imagine", trans: "Imaginar" },
                        { term: "Wonder", trans: "Imaginar / Perguntar-se" },
                        { term: "Frighten / Scare", trans: "Assustar" }
                    ]
                },
                {
                    title: "Idiomatic Expressions",
                    audio: "TTS: Dig one's own grave. Keep skeletons in the closet. As pale as a ghost. Witch hunt. Over my dead body. Skip a beat. Give someone the creeps. Make one's blood run cold.",
                    items: [
                        { term: "Dig one's own grave", trans: "Cavar a própria cova (prejudicar-se)" },
                        { term: "Keep skeletons in the closet", trans: "Ter segredos obscuros" },
                        { term: "As pale as a ghost", trans: "Pálido como cera / um fantasma" },
                        { term: "Witch hunt", trans: "Caça às bruxas (perseguição injusta)" },
                        { term: "Over my dead body", trans: "Só por cima do meu cadáver (de jeito nenhum)" },
                        { term: "Skip a beat", trans: "(Coração) disparar / dar um pulo" },
                        { term: "Give someone the creeps", trans: "Dar arrepios / calafrios" },
                        { term: "Make one's blood run cold", trans: "Gelar o sangue (medo extremo)" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Mystery & Supernatural Nouns",
                    audio: "TTS: The disappearance is a mystery. I read an account of a UFO sighting. The old castle has a ghost. They visited a haunted house. He claims he saw a UFO. Do aliens exist? Planes vanish in the Bermuda Triangle. There is no evidence of magic. The detective found a clue. It is an old urban legend. I have a theory about that. Lightning is a natural phenomenon.",
                    items: [
                        { term: "Mystery", sent: "The disappearance is a mystery.", trans: "<span style='color:#0077b6'>O desaparecimento é um mistério.</span>" },
                        { term: "Account", sent: "I read an account of a UFO sighting.", trans: "<span style='color:#0077b6'>Li um relato de um avistamento de OVNI.</span>" },
                        { term: "Ghost", sent: "The old castle has a ghost.", trans: "<span style='color:#0077b6'>O castelo velho tem um fantasma.</span>" },
                        { term: "Haunted House", sent: "They visited a haunted house.", trans: "<span style='color:#0077b6'>Eles visitaram uma casa mal-assombrada.</span>" },
                        { term: "UFO", sent: "He claims he saw a UFO.", trans: "<span style='color:#0077b6'>Ele alega que viu um OVNI.</span>" },
                        { term: "Alien", sent: "Do aliens exist?", trans: "<span style='color:#0077b6'>Alienígenas existem?</span>" },
                        { term: "Bermuda Triangle", sent: "Planes vanish in the Bermuda Triangle.", trans: "<span style='color:#0077b6'>Aviões somem no Triângulo das Bermudas.</span>" },
                        { term: "Evidence", sent: "There is no evidence of magic.", trans: "<span style='color:#0077b6'>Não há evidência de mágica.</span>" },
                        { term: "Clue", sent: "The detective found a clue.", trans: "<span style='color:#0077b6'>O detetive encontrou uma pista.</span>" },
                        { term: "Legend", sent: "It is an old urban legend.", trans: "<span style='color:#0077b6'>É uma lenda urbana antiga.</span>" },
                        { term: "Theory", sent: "I have a theory about that.", trans: "<span style='color:#0077b6'>Eu tenho uma teoria sobre isso.</span>" },
                        { term: "Phenomenon", sent: "Lightning is a natural phenomenon.", trans: "<span style='color:#0077b6'>Relâmpago é um fenômeno natural.</span>" }
                    ]
                },
                {
                    title: "Adjectives",
                    audio: "TTS: The case remains unsolved. That is a strange noise. I had a weird dream. Ghosts are supernatural beings. He looked pale with fear.",
                    items: [
                        { term: "Unsolved", sent: "The case remains unsolved.", trans: "<span style='color:#0077b6'>O caso permanece não solucionado.</span>" },
                        { term: "Strange", sent: "That is a strange noise.", trans: "<span style='color:#0077b6'>Aquele é um barulho estranho.</span>" },
                        { term: "Weird", sent: "I had a weird dream.", trans: "<span style='color:#0077b6'>Eu tive um sonho esquisito.</span>" },
                        { term: "Supernatural", sent: "Ghosts are supernatural beings.", trans: "<span style='color:#0077b6'>Fantasmas são seres sobrenaturais.</span>" },
                        { term: "Pale", sent: "He looked pale with fear.", trans: "<span style='color:#0077b6'>Ele ficou pálido com medo.</span>" }
                    ]
                },
                {
                    title: "Verbs (Investigation & Reaction)",
                    audio: "TTS: The magician made the coin disappear. We must investigate the truth. Let's explore the forest. I searched for my keys. Do you believe in luck? I doubt he will come. Imagine if you could fly. I wonder what happened. The movie frightened me.",
                    items: [
                        { term: "Disappear", sent: "The magician made the coin disappear.", trans: "<span style='color:#0077b6'>O mágico fez a moeda desaparecer.</span>" },
                        { term: "Investigate", sent: "We must investigate the truth.", trans: "<span style='color:#0077b6'>Devemos investigar a verdade.</span>" },
                        { term: "Explore", sent: "Let's explore the forest.", trans: "<span style='color:#0077b6'>Vamos explorar a floresta.</span>" },
                        { term: "Search (for)", sent: "I searched for my keys.", trans: "<span style='color:#0077b6'>Eu procurei minhas chaves.</span>" },
                        { term: "Believe (in)", sent: "Do you believe in luck?", trans: "<span style='color:#0077b6'>Você acredita em sorte?</span>" },
                        { term: "Doubt", sent: "I doubt he will come.", trans: "<span style='color:#0077b6'>Duvido que ele venha.</span>" },
                        { term: "Imagine", sent: "Imagine if you could fly.", trans: "<span style='color:#0077b6'>Imagine se você pudesse voar.</span>" },
                        { term: "Wonder", sent: "I wonder what happened.", trans: "<span style='color:#0077b6'>Eu me pergunto o que aconteceu.</span>" },
                        { term: "Frighten", sent: "The movie frightened me.", trans: "<span style='color:#0077b6'>O filme me assustou.</span>" }
                    ]
                },
                {
                    title: "Idiomatic Expressions",
                    audio: "TTS: Lying to the police is digging your own grave. Everyone has skeletons in the closet. You are as pale as a ghost! The media created a witch hunt. You will drive that car over my dead body. When I saw him, my heart skipped a beat. That doll gives me the creeps. The scream made my blood run cold.",
                    items: [
                        { term: "Dig one's own grave", sent: "Lying to the police is digging your own grave.", trans: "<span style='color:#0077b6'>Mentir para a polícia é cavar a própria cova.</span>" },
                        { term: "Keep skeletons in the closet", sent: "Everyone has skeletons in the closet.", trans: "<span style='color:#0077b6'>Todo mundo tem segredos obscuros.</span>" },
                        { term: "As pale as a ghost", sent: "You are as pale as a ghost!", trans: "<span style='color:#0077b6'>Você está pálido como um fantasma!</span>" },
                        { term: "Witch hunt", sent: "The media created a witch hunt.", trans: "<span style='color:#0077b6'>A mídia criou uma caça às bruxas.</span>" },
                        { term: "Over my dead body", sent: "You will drive that car over my dead body.", trans: "<span style='color:#0077b6'>Você vai dirigir aquele carro só por cima do meu cadáver.</span>" },
                        { term: "Skip a beat", sent: "When I saw him, my heart skipped a beat.", trans: "<span style='color:#0077b6'>Quando o vi, meu coração disparou.</span>" },
                        { term: "Give someone the creeps", sent: "That doll gives me the creeps.", trans: "<span style='color:#0077b6'>Aquela boneca me dá arrepios.</span>" },
                        { term: "Make one's blood run cold", sent: "The scream made my blood run cold.", trans: "<span style='color:#0077b6'>O grito fez meu sangue gelar.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (Expanded to 24 Questions)
            drills: [
                // NOUNS: MYSTERY & SUPERNATURAL (1-6)
                {
                    type: "mcq",
                    q: "An object in the sky that cannot be identified is a:",
                    options: [
                        { t: "Ghost", c: false },
                        { t: "UFO", c: true },
                        { t: "Evidence", c: false },
                        { t: "Clue", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A report or description of an event or experience is an:",
                    options: [
                        { t: "Mystery", c: false },
                        { t: "Account", c: true },
                        { t: "Theory", c: false },
                        { t: "Legend", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "An apparition of a dead person is usually called a:",
                    options: [
                        { t: "Alien", c: false },
                        { t: "Phenomenon", c: false },
                        { t: "Ghost", c: true },
                        { t: "Clue", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A traditional story from the past that might not be true is a:",
                    options: [
                        { t: "Fact", c: false },
                        { t: "Legend", c: true },
                        { t: "Theory", c: false },
                        { t: "Evidence", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A piece of information used to solve a mystery is a:",
                    options: [
                        { t: "Mystery", c: false },
                        { t: "Phenomenon", c: false },
                        { t: "Clue", c: true },
                        { t: "Fact", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A person or being from another world is an:",
                    options: [
                        { t: "Ghost", c: false },
                        { t: "Monster", c: false },
                        { t: "Alien", c: true },
                        { t: "Legend", c: false }
                    ]
                },

                // ADJECTIVES (7-12)
                {
                    type: "mcq",
                    q: "Something that is not solved or explained is:",
                    options: [
                        { t: "Supernatural", c: false },
                        { t: "Weird", c: false },
                        { t: "Unsolved", c: true },
                        { t: "Strange", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Another word for 'Strange' or 'Uncanny' is:",
                    options: [
                        { t: "Normal", c: false },
                        { t: "Weird", c: true },
                        { t: "Common", c: false },
                        { t: "Real", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Attributed to forces beyond scientific understanding means:",
                    options: [
                        { t: "Strange", c: false },
                        { t: "Normal", c: false },
                        { t: "Supernatural", c: true },
                        { t: "Unsolved", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When a person's face goes very white due to fear, they look:",
                    options: [
                        { t: "Rosy", c: false },
                        { t: "Pale", c: true },
                        { t: "Red", c: false },
                        { t: "Blushing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "An unusual or surprising thing that is unsettling is:",
                    options: [
                        { t: "Normal", c: false },
                        { t: "Strange", c: true },
                        { t: "Familiar", c: false },
                        { t: "Clear", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The Bermuda Triangle is known for its _______ disappearances.",
                    options: [
                        { t: "Simple", c: false },
                        { t: "Clear", c: false },
                        { t: "Mysterious", c: true },
                        { t: "Explained", c: false }
                    ]
                },

                // VERBS: INVESTIGATION & REACTION (13-18)
                {
                    type: "mcq",
                    q: "To look carefully into a situation to find the truth is to:",
                    options: [
                        { t: "Disappear", c: false },
                        { t: "Frighten", c: false },
                        { t: "Investigate", c: true },
                        { t: "Imagine", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To stop being visible is to:",
                    options: [
                        { t: "Appear", c: false },
                        { t: "Disappear", c: true },
                        { t: "Explore", c: false },
                        { t: "Search", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To desire or be curious to know something is to:",
                    options: [
                        { t: "Know", c: false },
                        { t: "Wonder", c: true },
                        { t: "Believe", c: false },
                        { t: "Scare", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To try to find something by looking carefully is to _______ (for it).",
                    options: [
                        { t: "Look into", c: false },
                        { t: "Look out", c: false },
                        { t: "Search", c: true },
                        { t: "Believe in", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To make someone afraid or anxious is to:",
                    options: [
                        { t: "Imagine", c: false },
                        { t: "Frighten", c: true },
                        { t: "Doubt", c: false },
                        { t: "Explore", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To feel uncertain about something is to:",
                    options: [
                        { t: "Confirm", c: false },
                        { t: "Believe", c: false },
                        { t: "Doubt", c: true },
                        { t: "Know", c: false }
                    ]
                },

                // IDIOMATIC EXPRESSIONS (19-24)
                {
                    type: "mcq",
                    q: "If something makes you feel very uncomfortable and scared, it:",
                    options: [
                        { t: "digs a grave", c: false },
                        { t: "gives you the creeps", c: true },
                        { t: "is a witch hunt", c: false },
                        { t: "is a skeleton", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If you are extremely scared, your blood might:",
                    options: [
                        { t: "boil", c: false },
                        { t: "run cold", c: true },
                        { t: "stop", c: false },
                        { t: "skip", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Keeping secrets that could be embarrassing is like:",
                    options: [
                        { t: "Digging a grave", c: false },
                        { t: "Keeping skeletons in the closet", c: true },
                        { t: "Hunting witches", c: false },
                        { t: "Being pale", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If you say \"I will never allow that!\" you mean:",
                    options: [
                        { t: "Over my dead body", c: true },
                        { t: "Pale as a ghost", c: false },
                        { t: "Skip a beat", c: false },
                        { t: "Blood run cold", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When a campaign unjustly targets a person or group, it's a:",
                    options: [
                        { t: "Ghost hunt", c: false },
                        { t: "Witch hunt", c: true },
                        { t: "Monster search", c: false },
                        { t: "Secret mission", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When your heart beats very fast due to shock or fear, it:",
                    options: [
                        { t: "skips a beat", c: true },
                        { t: "runs cold", c: false },
                        { t: "digs its own grave", c: false },
                        { t: "is a witch hunt", c: false }
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
                    title: "Second Conditional (Unreal)",
                    audio: "TTS: We use the Second Conditional for imaginary, impossible, or unlikely situations in the present or future. Structure: If plus Subject plus Simple Past, comma, Subject plus would plus Base Verb. For example: If I had money, I would travel. If you saw a ghost, you would scream.",
                    explanation: "We use the Second Conditional to talk about imaginary, impossible, or unlikely situations in the present or future. It describes 'what would happen' if the reality were different.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos a Segunda Condicional para falar de situações imaginárias, impossíveis ou improváveis no presente ou futuro. Descreve 'o que aconteceria' se a realidade fosse diferente.)</span>",
                    samples: [
                        { en: "If I <b>knew</b> the secret, I <b>would tell</b> you.", pt: "<span style='color:#0077b6'>Se eu soubesse o segredo, eu te contaria.</span>" },
                        { en: "If you <b>saw</b> a ghost, you <b>would scream</b>.", pt: "<span style='color:#0077b6'>Se você visse um fantasma, você gritaria.</span>" },
                        { en: "If he <b>lived</b> in the Bermuda Triangle, he <b>would be</b> scared.", pt: "<span style='color:#0077b6'>Se ele morasse no Triângulo das Bermudas, ele ficaria com medo.</span>" }
                    ]
                },
                {
                    title: "Second Conditional (Special Rules)",
                    audio: "TTS: In the If clause, we usually use WERE for all subjects for the verb To Be in formal English. Was is used in informal speech. We use If I were you, I would, to give advice. For example: If I were you, I would study. If she were here, she would help us.",
                    explanation: "In the 'If' clause, we usually use <b>WERE</b> for all subjects (I, He, She, It) in formal English. 'Was' is used in informal speech, but 'Were' is safer for tests! We also use 'If I were you, I would...' to give advice.<br><br><span style='color:#0077b6; font-style:italic;'>(Na oração 'If', geralmente usamos WERE para todos os sujeitos no inglês formal. 'Was' é usado na fala informal, mas 'Were' é mais seguro para testes! Usamos 'Se eu fosse você, eu...' para dar conselhos.)</span>",
                    samples: [
                        { en: "If I <b>were</b> you, I <b>would tell</b> the truth.", pt: "<span style='color:#0077b6'>Se eu fosse você, eu contaria a verdade.</span>" },
                        { en: "If she <b>were</b> here, she <b>would help</b> us.", pt: "<span style='color:#0077b6'>Se ela estivesse aqui, ela nos ajudaria.</span>" },
                        { en: "If it <b>were</b> real, nobody <b>would visit</b>.", pt: "<span style='color:#0077b6'>Se fosse real, ninguém visitaria.</span>" }
                    ]
                },
                {
                    title: "Phrasal Verbs (Intro)",
                    audio: "TTS: A phrasal verb is a verb plus a particle, which is a preposition or adverb. The meaning is often different from the original verb. For example: Look out means be careful. Get over means recover. Turn into means transform.",
                    explanation: "A phrasal verb is a Verb + Particle (preposition or adverb). The meaning is often different from the original verb.<br><br><span style='color:#0077b6; font-style:italic;'>(Um phrasal verb é um Verbo + Partícula. O significado é frequentemente diferente do verbo original.)</span>",
                    samples: [
                        { en: "<b>Literal:</b> She <b>looked out</b> the window.", pt: "<span style='color:#0077b6'>Ela olhou pela janela.</span>" },
                        { en: "<b>Idiomatic:</b> She <b>looked after</b> the baby.", pt: "<span style='color:#0077b6'>Ela cuidou do bebê.</span>" },
                        { en: "<b>LOOK OUT!</b> A ghost!", pt: "<span style='color:#0077b6'>Cuidado! Um fantasma!</span>" }
                    ]
                },
                {
                    title: "Common Phrasal Verbs",
                    audio: "TTS: Here are common phrasal verbs: Look for, to search. Look into, to investigate. Look out, to be careful. Get away, to escape. Get over, to recover. Get back, to return. Put on, to wear. Put away, to store. Put off, to postpone. Take off, to leave ground. Take over, to take control. Take after, to resemble. Turn into, to transform. Turn up, to appear unexpectedly. Turn on or off, to start or stop a machine.",
                    explanation: "Here are common phrasal verbs used in mysteries and daily life.<br><br><span style='color:#0077b6; font-style:italic;'>(Aqui estão phrasal verbs comuns usados em mistérios e no dia a dia.)</span>",
                    samples: [
                        { en: "<b>Look for:</b> I am looking for clues.", pt: "<span style='color:#0077b6'>Estou procurando por pistas.</span>" },
                        { en: "<b>Get away:</b> The alien got away.", pt: "<span style='color:#0077b6'>O alien escapou.</span>" },
                        { en: "<b>Put on:</b> Put on your jacket.", pt: "<span style='color:#0077b6'>Vista sua jaqueta.</span>" },
                        { en: "<b>Take off:</b> The plane took off.", pt: "<span style='color:#0077b6'>O avião decolou.</span>" },
                        { en: "<b>Turn into:</b> The story turned into a legend.", pt: "<span style='color:#0077b6'>A história se transformou em uma lenda.</span>" }
                    ]
                }
            ],

            // 3B: Natural Examples (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Second Conditional (Hypothetical)",
                    audio: "audio/9-3-6/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "If you found a million dollars, what would you do?", 
                            pt: "<span style='color:#0077b6'>Se você encontrasse um milhão de dólares, o que você faria?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "If I found it, I would keep it a secret. I wouldn't tell anyone!", 
                            pt: "<span style='color:#0077b6'>Se eu encontrasse, eu manteria segredo. Eu não contaria a ninguém!</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Second Conditional (Advice - If I were you)",
                    audio: "audio/9-3-6/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "I am scared of that house.", 
                            pt: "<span style='color:#0077b6'>Estou com medo daquela casa.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "If I were you, I wouldn't go near it. It looks dangerous.", 
                            pt: "<span style='color:#0077b6'>Se eu fosse você, eu não chegaria perto. Parece perigoso.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Phrasal Verbs (Mystery Context)",
                    audio: "audio/9-3-6/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Detective", 
                            text: "We need to look into (investigate) this disappearance.", 
                            pt: "<span style='color:#0077b6'>Precisamos investigar este desaparecimento.</span>" 
                        },
                        { 
                            speaker: "Witness", 
                            text: "I saw a strange light turn into (transform) a ball of fire! Then it took off (flew away) very fast.", 
                            pt: "<span style='color:#0077b6'>Eu vi uma luz estranha se transformar em uma bola de fogo! Então ela decolou muito rápido.</span>" 
                        },
                        { 
                            speaker: "Detective", 
                            text: "Interesting. We will find out (discover) the truth.", 
                            pt: "<span style='color:#0077b6'>Interessante. Nós vamos descobrir a verdade.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ (Expanded to 24 Questions)
            grammarDrills: [
                // SECOND CONDITIONAL (Structure & Usage) - Questions 1-12
                {
                    type: "mcq",
                    q: "Second Conditional: 'If I _______ (have) a spaceship, I _______ (go) to the moon.'",
                    options: [
                        { t: "have / will go", c: false },
                        { t: "had / would go", c: true },
                        { t: "had / will go", c: false },
                        { t: "have / would go", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Second Conditional: 'If she _______ (be) here, she would help us.'",
                    options: [
                        { t: "is", c: false },
                        { t: "was", c: false },
                        { t: "were", c: true },
                        { t: "are", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Second Conditional: 'If he _______ (live) in a haunted house, he would be scared.'",
                    options: [
                        { t: "lives", c: false },
                        { t: "lived", c: true },
                        { t: "will live", c: false },
                        { t: "live", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Second Conditional: 'What would you do if you _______ (find) a treasure?'",
                    options: [
                        { t: "find", c: false },
                        { t: "found", c: true },
                        { t: "will find", c: false },
                        { t: "are finding", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Second Conditional: 'If I _______ (be) you, I wouldn't go there.'",
                    options: [
                        { t: "was", c: false },
                        { t: "am", c: false },
                        { t: "were", c: true },
                        { t: "be", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Second Conditional: 'If she _______ (see) a ghost, she would scream.'",
                    options: [
                        { t: "sees", c: false },
                        { t: "saw", c: true },
                        { t: "will see", c: false },
                        { t: "is seeing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Second Conditional: 'If it _______ (rain) gold, we would be rich.'",
                    options: [
                        { t: "rains", c: false },
                        { t: "rained", c: true },
                        { t: "will rain", c: false },
                        { t: "is raining", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Second Conditional (Negative): 'If he _______ (not/be) scared, he would enter the house.'",
                    options: [
                        { t: "wasn't", c: false },
                        { t: "weren't", c: true },
                        { t: "isn't", c: false },
                        { t: "didn't be", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Second Conditional (Question): 'What _______ you do if you _______ (see) a ghost?'",
                    options: [
                        { t: "will you do / see", c: false },
                        { t: "would you do / saw", c: true },
                        { t: "did you do / see", c: false },
                        { t: "would you do / see", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Second Conditional (Question): 'If I _______ you, I would call the police.'",
                    options: [
                        { t: "am", c: false },
                        { t: "was", c: false },
                        { t: "were", c: true },
                        { t: "be", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Second Conditional (Neg. Question): 'If she _______ (not/know) the secret, she wouldn't tell.'",
                    options: [
                        { t: "doesn't know", c: false },
                        { t: "didn't know", c: true },
                        { t: "wouldn't know", c: false },
                        { t: "isn't knowing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Second Conditional: 'If we _______ (have) a spaceship, we would explore Mars.'",
                    options: [
                        { t: "have", c: false },
                        { t: "had", c: true },
                        { t: "will have", c: false },
                        { t: "are having", c: false }
                    ]
                },

                // PHRASAL VERBS (Structure & Meaning) - Questions 13-24
                {
                    type: "mcq",
                    q: "Phrasal Verbs - Look: 'Please help me _______ (search for) my keys.'",
                    options: [
                        { t: "look after", c: false },
                        { t: "look for", c: true },
                        { t: "look out", c: false },
                        { t: "look into", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Phrasal Verbs - Turn: 'The story _______ (transformed) into a legend.'",
                    options: [
                        { t: "turned on", c: false },
                        { t: "turned off", c: false },
                        { t: "turned into", c: true },
                        { t: "turned up", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Phrasal Verbs - Give: 'Don't _______ (stop trying). Keep searching!'",
                    options: [
                        { t: "give in", c: false },
                        { t: "give away", c: false },
                        { t: "give up", c: true },
                        { t: "give back", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Phrasal Verbs - Take: 'The plane will _______ (leave ground) in five minutes.'",
                    options: [
                        { t: "take off", c: true },
                        { t: "take over", c: false },
                        { t: "take after", c: false },
                        { t: "take out", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Meaning: What does 'look into' mean?",
                    options: [
                        { t: "Search", c: false },
                        { t: "Investigate", c: true },
                        { t: "Be careful", c: false },
                        { t: "Escape", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Meaning: What does 'get over' mean?",
                    options: [
                        { t: "Escape", c: false },
                        { t: "Recover from", c: true },
                        { t: "Return", c: false },
                        { t: "Store", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Meaning: What does 'put on' mean?",
                    options: [
                        { t: "Store", c: false },
                        { t: "Postpone", c: false },
                        { t: "Wear / Place on body", c: true },
                        { t: "Return", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Meaning: What does 'take after' mean?",
                    options: [
                        { t: "Leave ground", c: false },
                        { t: "Assume control", c: false },
                        { t: "Resemble family", c: true },
                        { t: "Remove clothes", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Phrasal Verbs: 'The police will _______ (investigate) the case.'",
                    options: [
                        { t: "look for", c: false },
                        { t: "look into", c: true },
                        { t: "look out", c: false },
                        { t: "get away", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Phrasal Verbs: 'Don't _______ (postpone) your work.'",
                    options: [
                        { t: "put on", c: false },
                        { t: "put away", c: false },
                        { t: "put off", c: true },
                        { t: "put back", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Phrasal Verbs: 'The lost ring _______ (appeared unexpectedly) in the garden.'",
                    options: [
                        { t: "turned off", c: false },
                        { t: "turned into", c: false },
                        { t: "turned up", c: true },
                        { t: "turned on", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Phrasal Verbs: 'Please _______ (start) the light.'",
                    options: [
                        { t: "turn off", c: false },
                        { t: "turn up", c: false },
                        { t: "turn on", c: true },
                        { t: "turn into", c: false }
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
                    text: "If I saw a ghost, I would scream.<br><small style='color:#0077b6'>(Se eu visse um fantasma, eu gritaria.)</small>", 
                    audio: "TTS: If I saw a ghost, I would scream.", 
                    arrow: "↘" 
                },
                { 
                    text: "What would you do if you found a UFO?<br><small style='color:#0077b6'>(O que você faria se encontrasse um OVNI?)</small>", 
                    audio: "TTS: What would you do if you found a UFO?", 
                    arrow: "↗" 
                },
                { 
                    text: "She is looking for clues.<br><small style='color:#0077b6'>(Ela está procurando por pistas.)</small>", 
                    audio: "TTS: She is looking for clues.", 
                    arrow: "↘" 
                },
                { 
                    text: "If I were you, I wouldn't go there.<br><small style='color:#0077b6'>(Se eu fosse você, eu não iria lá.)</small>", 
                    audio: "TTS: If I were you, I wouldn't go there.", 
                    arrow: "↘" 
                },
                { 
                    text: "The plane took off and disappeared.<br><small style='color:#0077b6'>(O avião decolou e desapareceu.)</small>", 
                    audio: "TTS: The plane took off and disappeared.", 
                    arrow: "↘" 
                },
                { 
                    text: "That story gives me the creeps.<br><small style='color:#0077b6'>(Aquela história me dá arrepios.)</small>", 
                    audio: "TTS: That story gives me the creeps.", 
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
                    instruction: "Listen to Albert talking about a hypothetical situation. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre uma situação hipotética. Digite as palavras que faltam.)</small>",
                    audio: "TTS: If I found a secret map, I would look for the treasure. I wouldn't give up until I found it. It would be an amazing adventure.",
                    text: "If I [found] a secret map, I [would look] for the treasure. I wouldn't [give up] until I found it. It [would be] an amazing adventure."
                },
                // Drill 2: Listen and Complete (Dropdown) - MP3
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation about a haunted house. Choose the correct option.<br><small style='color:#0077b6'>(Ouça a conversa sobre uma casa mal-assombrada. Escolha a opção correta.)</small>",
                    audio: "audio/9-3-6/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: Would you spend a night in that old [house | hotel]?", a: "house" },
                        { q: "Albert: No way! If I [went | go] in, I [would be | will be] terrified.", a: "went" },
                        { q: "Celine: Really? I [would | will] investigate it.", a: "would" }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the description and choose the correct idiom.<br><small style='color:#0077b6'>(Ouça a descrição e escolha a expressão idiomática correta.)</small>",
                    audio: "TTS: When I saw the shadow move, my face went very white because I was so scared.",
                    options: [
                        { t: "I dug my own grave.", c: false },
                        { t: "It was a witch hunt.", c: false },
                        { t: "I was as pale as a ghost.", c: true },
                        { t: "I kept a skeleton in the closet.", c: false }
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
                    title: "Narration: The Mystery of Flight 19",
                    audio: "TTS: In 1945, five airplanes took off from Florida. They were flying over the Bermuda Triangle. The weather was fine, but suddenly, the pilots got lost. Their compasses stopped working. They sent strange messages to the base. Then, they disappeared. No one ever found them. If we knew what happened, it would solve one of the biggest mysteries of aviation. Some say aliens took them; others say it was a magnetic storm. || audio/9-3-6/p6_text1.mp3",
                    body: "In 1945, five airplanes took off from Florida. They were flying over the Bermuda Triangle. The weather was fine, but suddenly, the pilots got lost. Their compasses stopped working. They sent strange messages to the base. Then, they disappeared. No one ever found them. If we knew what happened, it would solve one of the biggest mysteries of aviation. Some say aliens took them; others say it was a magnetic storm.",
                    questions: [
                        { 
                            q: "What happened to the airplanes?", 
                            options: [ 
                                {t: "They landed safely.", c: false}, 
                                {t: "They disappeared.", c: true}, 
                                {t: "They flew to Europe.", c: false},
                                {t: "They crashed in Florida.", c: false}
                            ] 
                        },
                        { 
                            q: "Where were they flying?", 
                            options: [ 
                                {t: "Over a mountain", c: false}, 
                                {t: "Over the Bermuda Triangle", c: true}, 
                                {t: "Over a city", c: false},
                                {t: "Over the desert", c: false}
                            ] 
                        },
                        { 
                            q: "What stopped working?", 
                            options: [ 
                                {t: "The engine", c: false}, 
                                {t: "The radio", c: false}, 
                                {t: "The compasses", c: true},
                                {t: "The lights", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: The Strange Sound",
                    audio: "audio/9-3-6/p6_text2.mp3",
                    body: "<b>Albert:</b> Did you hear that noise?<br><b>Celine:</b> Yes. It sounded like footsteps upstairs.<br><b>Albert:</b> But we are alone in the house.<br><b>Celine:</b> If I were brave, I would go look.<br><b>Albert:</b> I am curious. I will look into it.<br><b>Celine:</b> Be careful! What if it is a ghost?<br><b>Albert:</b> If it were a ghost, it wouldn't make noise. It's probably just the cat.<br><b>Celine:</b> Oh, look! The cat just turned up in the hallway. You were right.",
                    questions: [
                        { 
                            q: "What did they hear?", 
                            options: [ 
                                {t: "A scream", c: false}, 
                                {t: "Footsteps", c: true}, 
                                {t: "Music", c: false},
                                {t: "The wind", c: false}
                            ] 
                        },
                        { 
                            q: "What would Celine do if she were brave?", 
                            options: [ 
                                {t: "Run away", c: false}, 
                                {t: "Call the police", c: false}, 
                                {t: "Go look", c: true},
                                {t: "Hide", c: false}
                            ] 
                        },
                        { 
                            q: "What was making the noise?", 
                            options: [ 
                                {t: "A ghost", c: false}, 
                                {t: "A burglar", c: false}, 
                                {t: "The cat", c: true},
                                {t: "The dog", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: The Loch Ness Monster",
                    audio: "TTS: Loch Ness is a large, deep lake in Scotland. There is a legend that a giant creature lives there. People call it Nessie. Some people claim they have seen a long neck coming out of the water. Scientists have looked for evidence, but they haven't found any proof yet. If Nessie existed, it would be a prehistoric dinosaur. Many tourists go there hoping to take a photo of the mystery. || audio/9-3-6/p6_text3.mp3",
                    body: "Loch Ness is a large, deep lake in Scotland. There is a legend that a giant creature lives there. People call it \"Nessie\". Some people claim they have seen a long neck coming out of the water. Scientists have looked for evidence, but they haven't found any proof yet. If Nessie existed, it would be a prehistoric dinosaur. Many tourists go there hoping to take a photo of the mystery.",
                    questions: [
                        { 
                            q: "Where is Loch Ness?", 
                            options: [ 
                                {t: "In Ireland", c: false}, 
                                {t: "In Scotland", c: true}, 
                                {t: "In the USA", c: false},
                                {t: "In Brazil", c: false}
                            ] 
                        },
                        { 
                            q: "What is 'Nessie'?", 
                            options: [ 
                                {t: "A ghost", c: false}, 
                                {t: "A UFO", c: false}, 
                                {t: "A giant creature", c: true},
                                {t: "A scientist", c: false}
                            ] 
                        },
                        { 
                            q: "Is there proof that Nessie exists?", 
                            options: [ 
                                {t: "Yes, a lot.", c: false}, 
                                {t: "No, there isn't any proof yet.", c: true}, 
                                {t: "Yes, a clear photo.", c: false},
                                {t: "Yes, scientists found it.", c: false}
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
                // Drill 1: Matching (Phrasal Verbs)
                {
                    type: "matching",
                    instruction: "Match the phrasal verb with its definition.<br><small style='color:#0077b6'>(Combine o phrasal verb com sua definição.)</small>",
                    pairs: [
                        { left: "Look for", right: "Search", val: "1" },
                        { left: "Give up", right: "Stop trying", val: "2" },
                        { left: "Turn into", right: "Become / Transform", val: "3" },
                        { left: "Find out", right: "Discover information", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Second Conditional)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a Second Conditional sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase na Segunda Condicional.)</small>",
                    sentence: "saw / If / a / I / UFO / scream / would / I / .",
                    correct: "If I saw a UFO I would scream ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "you / do / What / would / rich / if / were / you / ?",
                    correct: "What would you do if you were rich ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "fly / If / I / could / I / travel / would / .",
                    correct: "If I could fly I would travel ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "were / If / you / I / wouldn't / go / I / .",
                    correct: "If I were you I wouldn't go ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Ghost", c: false },
                        { t: "Alien", c: false },
                        { t: "Monster", c: false },
                        { t: "Table", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Investigate", c: false },
                        { t: "Search", c: false },
                        { t: "Look into", c: false },
                        { t: "Sleep", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "If", c: false },
                        { t: "Would", c: false },
                        { t: "Were", c: false },
                        { t: "Will", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Scared", c: false },
                        { t: "Frightened", c: false },
                        { t: "Terrified", c: false },
                        { t: "Happy", c: true }
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Drag the correct particle to complete the phrasal verb.<br><small style='color:#0077b6'>(Arraste a partícula correta para completar o phrasal verb.)</small>",
                    questions: [
                        { q: "I am looking [for | up | into | after] my keys.", a: "for" },
                        { q: "He takes [after | up | into | for] his father.", a: "after" },
                        { q: "The prince turned [into | up | for | after] a frog.", a: "into" },
                        { q: "Don't give [up | into | for | after]!", a: "up" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Now it's your turn! Imagine a mysterious situation. <br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Agora é a sua vez! Imagine uma situação misteriosa.)</span></small>",
            example: "\"If I found a secret door in my house, I would open it. I would be scared, but curious. If there were a ghost inside, I would run away very fast!\" <br><br><small><span style='color:#0077b6'>(\"Se eu encontrasse uma porta secreta na minha casa, eu a abriria. Eu ficaria assustado, mas curioso. Se houvesse um fantasma lá dentro, eu fugiria muito rápido!\")</span></small>",
            prompts: [
                "What is the situation? (Imagine you saw a UFO / found a secret door...) <br><small><span style='color:#0077b6'>(Qual é a situação? Imagine que você viu um OVNI / encontrou uma porta secreta...)</span></small>",
                "What would you do? (If I saw..., I would...) <br><small><span style='color:#0077b6'>(O que você faria? Se eu visse..., eu faria...)</span></small>",
                "How would you feel? (I would be...) <br><small><span style='color:#0077b6'>(Como você se sentiria? Eu me sentiria...)</span></small>"
            ]
        },
        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Mystery & Supernatural Nouns)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Topic 1: Mystery & Supernatural Nouns ---
                { term: "Mystery", definition: "Something that is difficult to understand or explain.", defTrans: "Mistério", example: "The case remains a mystery.", audioFront: "TTS: Mystery", audioBack: "TTS: The case remains a mystery." },
                { term: "Account / Story", definition: "A report or description of an event or experience.", defTrans: "Relato / História", example: "He gave an account of the event.", audioFront: "TTS: Account or Story", audioBack: "TTS: He gave an account of the event." },
                { term: "Ghost", definition: "An apparition of a dead person.", defTrans: "Fantasma", example: "People say a ghost lives here.", audioFront: "TTS: Ghost", audioBack: "TTS: People say a ghost lives here." },
                { term: "Haunted House", definition: "A house believed to be visited by ghosts.", defTrans: "Casa mal-assombrada", example: "I am afraid of the haunted house.", audioFront: "TTS: Haunted House", audioBack: "TTS: I am afraid of the haunted house." },
                { term: "UFO", definition: "Unidentified Flying Object.", defTrans: "OVNI", example: "I saw a UFO in the sky.", audioFront: "TTS: UFO", audioBack: "TTS: I saw a UFO in the sky." },
                { term: "Alien", definition: "A being from another world; extraterrestrial.", defTrans: "Alienígena / Extraterrestre", example: "The alien had green skin.", audioFront: "TTS: Alien", audioBack: "TTS: The alien had green skin." },
                { term: "Bermuda Triangle", definition: "An area where ships and planes are said to disappear mysteriously.", defTrans: "Triângulo das Bermudas", example: "Ships vanish in the Bermuda Triangle.", audioFront: "TTS: Bermuda Triangle", audioBack: "TTS: Ships vanish in the Bermuda Triangle." },
                { term: "Evidence", definition: "The available body of facts indicating whether a belief is true.", defTrans: "Evidência / Prova", example: "There is no evidence of the crime.", audioFront: "TTS: Evidence", audioBack: "TTS: There is no evidence of the crime." },
                { term: "Clue", definition: "A piece of evidence or information used in solving a mystery.", defTrans: "Pista / Indício", example: "The detective found a clue.", audioFront: "TTS: Clue", audioBack: "TTS: The detective found a clue." },
                { term: "Legend", definition: "A traditional story sometimes regarded as historical but unauthenticated.", defTrans: "Lenda", example: "The legend says a dragon sleeps here.", audioFront: "TTS: Legend", audioBack: "TTS: The legend says a dragon sleeps here." },
                { term: "Theory", definition: "A supposition or system of ideas intended to explain something.", defTrans: "Teoria", example: "I have a theory about ghosts.", audioFront: "TTS: Theory", audioBack: "TTS: I have a theory about ghosts." },
                { term: "Phenomenon", definition: "A fact or situation that is observed to exist or happen.", defTrans: "Fenômeno", example: "Lightning is a natural phenomenon.", audioFront: "TTS: Phenomenon", audioBack: "TTS: Lightning is a natural phenomenon." },
                // --- Topic 2: Adjectives ---
                { term: "Unsolved", definition: "Not solved or explained.", defTrans: "Não solucionado", example: "It is an unsolved mystery.", audioFront: "TTS: Unsolved", audioBack: "TTS: It is an unsolved mystery." },
                { term: "Strange", definition: "Unusual or surprising in a way that is unsettling.", defTrans: "Estranho", example: "I heard a strange noise.", audioFront: "TTS: Strange", audioBack: "TTS: I heard a strange noise." },
                { term: "Weird", definition: "Suggesting something supernatural; uncanny; very strange.", defTrans: "Esquisito", example: "That is a weird story.", audioFront: "TTS: Weird", audioBack: "TTS: That is a weird story." },
                { term: "Supernatural", definition: "Attributed to some force beyond scientific understanding.", defTrans: "Sobrenatural", example: "Vampires are supernatural creatures.", audioFront: "TTS: Supernatural", audioBack: "TTS: Vampires are supernatural creatures." },
                { term: "Pale", definition: "Light in color; used to describe a person's face when scared.", defTrans: "Pálido", example: "He looked pale with fear.", audioFront: "TTS: Pale", audioBack: "TTS: He looked pale with fear." },

                // --- Topic 3: Verbs (Investigation & Reaction) ---
                { term: "Disappear", definition: "To cease to be visible.", defTrans: "Desaparecer", example: "The plane disappeared.", audioFront: "TTS: Disappear", audioBack: "TTS: The plane disappeared." },
                { term: "Investigate", definition: "To carry out research or study into so as to discover facts.", defTrans: "Investigar", example: "We must investigate the truth.", audioFront: "TTS: Investigate", audioBack: "TTS: We must investigate the truth." },
                { term: "Explore", definition: "To travel in or through an unfamiliar area to learn about it.", defTrans: "Explorar", example: "Let's explore the cave.", audioFront: "TTS: Explore", audioBack: "TTS: Let's explore the cave." },
                { term: "Search (for)", definition: "To try to find something by looking carefully.", defTrans: "Procurar (por)", example: "I am looking for my keys.", audioFront: "TTS: Search for", audioBack: "TTS: I am looking for my keys." },
                { term: "Believe (in)", definition: "To accept something as true; feel sure of the truth of.", defTrans: "Acreditar (em)", example: "I believe in magic.", audioFront: "TTS: Believe in", audioBack: "TTS: I believe in magic." },
                { term: "Doubt", definition: "To feel uncertain about something.", defTrans: "Duvidar", example: "I doubt he will come.", audioFront: "TTS: Doubt", audioBack: "TTS: I doubt he will come." },
                { term: "Imagine", definition: "To form a mental image or concept of something.", defTrans: "Imaginar", example: "Imagine if you could fly.", audioFront: "TTS: Imagine", audioBack: "TTS: Imagine if you could fly." },
                { term: "Wonder", definition: "To desire or be curious to know something.", defTrans: "Imaginar / Perguntar-se", example: "I wonder where he is.", audioFront: "TTS: Wonder", audioBack: "TTS: I wonder where he is." },
                { term: "Frighten / Scare", definition: "To make someone afraid or anxious.", defTrans: "Assustar", example: "Don't scare me like that!", audioFront: "TTS: Frighten or Scare", audioBack: "TTS: Don't scare me like that!" },

                // --- Topic 4: Idiomatic Expressions ---
                { term: "Dig one's own grave", definition: "To do something that causes one's own failure or downfall.", defTrans: "Cavar a própria cova (prejudicar-se)", example: "Lying is digging your own grave.", audioFront: "TTS: Dig one's own grave", audioBack: "TTS: Lying is digging your own grave." },
                { term: "Keep skeletons in the closet", definition: "To have an embarrassing or damaging secret from the past.", defTrans: "Ter segredos obscuros", example: "Everyone has skeletons in the closet.", audioFront: "TTS: Keep skeletons in the closet", audioBack: "TTS: Everyone has skeletons in the closet." },
                { term: "As pale as a ghost", definition: "Extremely pale, usually due to fear or shock.", defTrans: "Pálido como cera / um fantasma", example: "You look as pale as a ghost.", audioFront: "TTS: As pale as a ghost", audioBack: "TTS: You look as pale as a ghost." },
                { term: "Witch hunt", definition: "A campaign directed against a person or group holding unpopular views.", defTrans: "Caça às bruxas (perseguição injusta)", example: "The investigation became a witch hunt.", audioFront: "TTS: Witch hunt", audioBack: "TTS: The investigation became a witch hunt." },
                { term: "Over my dead body", definition: "Used to say that you will do everything you can to prevent something.", defTrans: "Só por cima do meu cadáver", example: "You will go there over my dead body.", audioFront: "TTS: Over my dead body", audioBack: "TTS: You will go there over my dead body." },
                { term: "Skip a beat", definition: "To stop momentarily (used of the heart due to emotion or shock).", defTrans: "(Coração) disparar / dar um pulo", example: "My heart skipped a beat.", audioFront: "TTS: Skip a beat", audioBack: "TTS: My heart skipped a beat." },
                { term: "Give someone the creeps", definition: "To cause someone to feel afraid or disgusted.", defTrans: "Dar arrepios / calafrios", example: "Spiders give me the creeps.", audioFront: "TTS: Give someone the creeps", audioBack: "TTS: Spiders give me the creeps." },
                { term: "Make one's blood run cold", definition: "To cause someone to feel extreme fear or horror.", defTrans: "Gelar o sangue (medo extremo)", example: "The scream made my blood run cold.", audioFront: "TTS: Make one's blood run cold", audioBack: "TTS: The scream made my blood run cold." },
                // --- Topic 5: Phrasal Verbs ---
                { term: "Look for", definition: "To search for something.", defTrans: "Procurar", example: "I am looking for my keys.", audioFront: "TTS: Look for", audioBack: "TTS: I am looking for my keys." },
                { term: "Look into", definition: "To investigate.", defTrans: "Investigar", example: "Police will look into the case.", audioFront: "TTS: Look into", audioBack: "TTS: Police will look into the case." },
                { term: "Look out", definition: "To be vigilant and take notice; be careful.", defTrans: "Ter cuidado", example: "Look out! A car!", audioFront: "TTS: Look out", audioBack: "TTS: Look out! A car!" },
                { term: "Get away", definition: "To escape.", defTrans: "Escapar", example: "The thief got away.", audioFront: "TTS: Get away", audioBack: "TTS: The thief got away." },
                { term: "Get over", definition: "To recover from an ailment or upsetting experience.", defTrans: "Recuperar-se / Superar", example: "She got over the flu.", audioFront: "TTS: Get over", audioBack: "TTS: She got over the flu." },
                { term: "Get back", definition: "To return.", defTrans: "Voltar", example: "When will you get back?", audioFront: "TTS: Get back", audioBack: "TTS: When will you get back?" },
                { term: "Put on", definition: "To place a garment, jewelry, etc., on part of one's body.", defTrans: "Vestir / Colocar", example: "Put on your shoes.", audioFront: "TTS: Put on", audioBack: "TTS: Put on your shoes." },
                { term: "Put away", definition: "To store something in its usual place.", defTrans: "Guardar", example: "Put away your toys.", audioFront: "TTS: Put away", audioBack: "TTS: Put away your toys." },
                { term: "Put off", definition: "To postpone something.", defTrans: "Adiar", example: "Don't put off your work.", audioFront: "TTS: Put off", audioBack: "TTS: Don't put off your work." },
                { term: "Take off", definition: "(Of an aircraft) to become airborne; to remove clothing.", defTrans: "Decolar / Tirar (roupa)", example: "The plane took off.", audioFront: "TTS: Take off", audioBack: "TTS: The plane took off." },
                { term: "Take over", definition: "To assume control of something.", defTrans: "Assumir o controle", example: "Robots will take over.", audioFront: "TTS: Take over", audioBack: "TTS: Robots will take over." },
                { term: "Take after", definition: "To resemble a parent or ancestor.", defTrans: "Puxar a / Parecer com", example: "He takes after his dad.", audioFront: "TTS: Take after", audioBack: "TTS: He takes after his dad." },
                { term: "Turn into", definition: "To be transformed into or become.", defTrans: "Transformar-se em", example: "The prince turned into a frog.", audioFront: "TTS: Turn into", audioBack: "TTS: The prince turned into a frog." },
                { term: "Turn up", definition: "To appear or arrive; to be found.", defTrans: "Aparecer (do nada)", example: "The lost ring turned up.", audioFront: "TTS: Turn up", audioBack: "TTS: The lost ring turned up." },
                { term: "Turn on/off", definition: "To start or stop the operation of (a device).", defTrans: "Ligar / Desligar", example: "Turn on the light.", audioFront: "TTS: Turn on or off", audioBack: "TTS: Turn on the light." },

                // --- Topic 6: Grammar Points (Second Conditional) ---
                { term: "Second Conditional", definition: "Structure for impossible, imaginary, or unlikely situations (If + Past, ... Would + Verb).", defTrans: "Segunda Condicional (Situações Irreais)", example: "If I had money, I would travel.", audioFront: "TTS: Second Conditional", audioBack: "TTS: If I had money, I would travel." },
                { term: "If I were you...", definition: "Phrase used to give advice in hypothetical situations.", defTrans: "Se eu fosse você...", example: "If I were you, I would study.", audioFront: "TTS: If I were you", audioBack: "TTS: If I were you, I would study." },
                { term: "Were (To Be in Conditional)", definition: "Form of 'to be' used for all subjects in the 'if' clause of the Second Conditional.", defTrans: "Forma usada para todos os sujeitos", example: "If she were here, she would know.", audioFront: "TTS: Were for the verb to be in conditional", audioBack: "TTS: If she were here, she would know." }
            ]
        }
    ], // Closes steps array

    // ======================================================
    // GLOSSARY (Complete & Paginated)
    // ======================================================
    glossary: [
        // PAGE 1: CONTEXT (Step 1 Tooltips)
        { topic: "Context", term: "haunted", definition: "Visited by a ghost; full of ghosts.", translation: "Assombrado(a)" },
        { topic: "Context", term: "believe-in", definition: "To accept that something is true or exists.", translation: "Acreditar (em)" },
        { topic: "Context", term: "legend", definition: "A traditional story from the past, sometimes unauthenticated.", translation: "Lenda" },
        { topic: "Context", term: "what-would-you-do-if", definition: "A question about a hypothetical situation.", translation: "O que você faria se" },
        { topic: "Context", term: "strange", definition: "Unusual or surprising in a way that is unsettling.", translation: "Estranho" },
        { topic: "Context", term: "if-i-saw", definition: "Hypothetical condition in the past tense.", translation: "Se eu visse" },
        { topic: "Context", term: "investigate", definition: "To carry out research or study into so as to discover facts.", translation: "Investigar" },
        { topic: "Context", term: "afraid", definition: "Feeling fear or anxiety; scared.", translation: "Com medo" },
        { topic: "Context", term: "if-i-were-you", definition: "A phrase used to give advice in a hypothetical situation.", translation: "Se eu fosse você" },
        { topic: "Context", term: "gives-me-the-creeps", definition: "To cause someone to feel afraid or disgusted.", translation: "Me dá arrepios" },
        { topic: "Context", term: "skipped-a-beat", definition: "To stop momentarily (used of the heart due to emotion or shock).", translation: "(Coração) disparou / deu um pulo" },
        { topic: "Context", term: "over-my-dead-body", definition: "Used to say that you will do everything you can to prevent something from happening.", translation: "Só por cima do meu cadáver" },

        // PAGE 2: MYSTERY & SUPERNATURAL NOUNS
        { topic: "Mystery Nouns", term: "Mystery", definition: "Something that is difficult or impossible to understand or explain.", translation: "Mistério" },
        { topic: "Mystery Nouns", term: "Account", definition: "A report or description of an event or experience.", translation: "Relato / História" },
        { topic: "Mystery Nouns", term: "Ghost", definition: "An apparition of a dead person; a spirit.", translation: "Fantasma" },
        { topic: "Mystery Nouns", term: "Haunted House", definition: "A house believed to be visited by ghosts.", translation: "Casa mal-assombrada" },
        { topic: "Mystery Nouns", term: "UFO", definition: "Unidentified Flying Object; a mysterious object seen in the sky.", translation: "OVNI" },
        { topic: "Mystery Nouns", term: "Alien", definition: "A being from another world; extraterrestrial.", translation: "Alienígena / Extraterrestre" },
        { topic: "Mystery Nouns", term: "Bermuda Triangle", definition: "An area where ships and planes are said to have disappeared mysteriously.", translation: "Triângulo das Bermudas" },
        { topic: "Mystery Nouns", term: "Evidence", definition: "The available body of facts indicating whether a belief is true.", translation: "Evidência / Prova" },
        { topic: "Mystery Nouns", term: "Clue", definition: "A piece of evidence or information used in solving a mystery.", translation: "Pista / Indício" },
        { topic: "Mystery Nouns", term: "Legend", definition: "A traditional story from the past, unauthenticated.", translation: "Lenda" },
        { topic: "Mystery Nouns", term: "Theory", definition: "A supposition or a system of ideas intended to explain something.", translation: "Teoria" },
        { topic: "Mystery Nouns", term: "Phenomenon", definition: "A fact or situation that is observed to exist or happen.", translation: "Fenômeno" },

        // PAGE 3: ADJECTIVES
        { topic: "Adjectives", term: "Unsolved", definition: "Not solved or explained.", translation: "Não solucionado" },
        { topic: "Adjectives", term: "Strange", definition: "Unusual or surprising in a way that is unsettling.", translation: "Estranho" },
        { topic: "Adjectives", term: "Weird", definition: "Suggesting something supernatural; very strange.", translation: "Esquisito" },
        { topic: "Adjectives", term: "Supernatural", definition: "Attributed to some force beyond scientific understanding.", translation: "Sobrenatural" },
        { topic: "Adjectives", term: "Pale", definition: "Light in color; describing a person's face when scared.", translation: "Pálido" },

        // PAGE 4: VERBS (INVESTIGATION & REACTION)
        { topic: "Verbs", term: "Disappear", definition: "To cease to be visible.", translation: "Desaparecer" },
        { topic: "Verbs", term: "Investigate", definition: "To carry out research to discover facts.", translation: "Investigar" },
        { topic: "Verbs", term: "Explore", definition: "To travel in an unfamiliar area to learn about it.", translation: "Explorar" },
        { topic: "Verbs", term: "Search (for)", definition: "To try to find something by looking carefully.", translation: "Procurar (por)" },
        { topic: "Verbs", term: "Believe (in)", definition: "To accept something as true; feel sure of its truth.", translation: "Acreditar (em)" },
        { topic: "Verbs", term: "Doubt", definition: "To feel uncertain about something.", translation: "Duvidar" },
        { topic: "Verbs", term: "Imagine", definition: "To form a mental image or concept of something.", translation: "Imaginar" },
        { topic: "Verbs", term: "Wonder", definition: "To desire or be curious to know something.", translation: "Imaginar / Perguntar-se" },
        { topic: "Verbs", term: "Frighten / Scare", definition: "To make someone afraid or anxious.", translation: "Assustar" },

        // PAGE 5: IDIOMATIC EXPRESSIONS
        { topic: "Idioms", term: "Dig one's own grave", definition: "To do something that causes one's own failure or downfall.", translation: "Cavar a própria cova (prejudicar-se)" },
        { topic: "Idioms", term: "Keep skeletons in the closet", definition: "To have an embarrassing or damaging secret from the past.", translation: "Ter segredos obscuros" },
        { topic: "Idioms", term: "As pale as a ghost", definition: "Extremely pale, usually due to fear or shock.", translation: "Pálido como cera / um fantasma" },
        { topic: "Idioms", term: "Witch hunt", definition: "A campaign directed against a person or group holding unpopular views.", translation: "Caça às bruxas (perseguição injusta)" },
        { topic: "Idioms", term: "Over my dead body", definition: "Used to say that you will do everything you can to prevent something from happening.", translation: "Só por cima do meu cadáver (de jeito nenhum)" },
        { topic: "Idioms", term: "Skip a beat", definition: "To stop momentarily (used of the heart due to emotion or shock).", translation: "(Coração) disparar / dar um pulo" },
        { topic: "Idioms", term: "Give someone the creeps", definition: "To cause someone to feel afraid or disgusted.", translation: "Dar arrepios / calafrios" },
        { topic: "Idioms", term: "Make one's blood run cold", definition: "To cause someone to feel extreme fear or horror.", translation: "Gelar o sangue (medo extremo)" },

        // PAGE 6: PHRASAL VERBS
        { topic: "Phrasal Verbs", term: "Look for", definition: "To search for something.", translation: "Procurar" },
        { topic: "Phrasal Verbs", term: "Look into", definition: "To investigate.", translation: "Investigar" },
        { topic: "Phrasal Verbs", term: "Look out", definition: "To be vigilant and take notice; be careful.", translation: "Ter cuidado" },
        { topic: "Phrasal Verbs", term: "Get away", definition: "To escape.", translation: "Escapar" },
        { topic: "Phrasal Verbs", term: "Get over", definition: "To recover from an ailment or upsetting experience.", translation: "Recuperar-se / Superar" },
        { topic: "Phrasal Verbs", term: "Get back", definition: "To return.", translation: "Voltar" },
        { topic: "Phrasal Verbs", term: "Put on", definition: "To place a garment, jewelry, etc., on part of one's body.", translation: "Vestir / Colocar" },
        { topic: "Phrasal Verbs", term: "Put away", definition: "To store something in its usual place.", translation: "Guardar" },
        { topic: "Phrasal Verbs", term: "Put off", definition: "To postpone something.", translation: "Adiar" },
        { topic: "Phrasal Verbs", term: "Take off", definition: "(Of an aircraft) to become airborne; to remove clothing.", translation: "Decolar / Tirar (roupa)" },
        { topic: "Phrasal Verbs", term: "Take over", definition: "To assume control of something.", translation: "Assumir o controle" },
        { topic: "Phrasal Verbs", term: "Take after", definition: "To resemble a parent or ancestor.", translation: "Puxar a / Parecer com" },
        { topic: "Phrasal Verbs", term: "Turn into", definition: "To be transformed into or become.", translation: "Transformar-se em" },
        { topic: "Phrasal Verbs", term: "Turn up", definition: "To appear or arrive; to be found.", translation: "Aparecer (do nada)" },
        { topic: "Phrasal Verbs", term: "Turn on/off", definition: "To start or stop the operation of (a device).", translation: "Ligar / Desligar" },

        // PAGE 7: GRAMMAR POINTS
        { topic: "Grammar", term: "Second Conditional", definition: "Structure for impossible, imaginary, or unlikely situations (If + Past, ... Would + Verb).", translation: "Segunda Condicional (Situações Irreais)" },
        { topic: "Grammar", term: "If I were you...", definition: "Phrase used to give advice in hypothetical situations.", translation: "Se eu fosse você..." },
        { topic: "Grammar", term: "Were (To Be in Conditional)", definition: "Form of 'to be' used for all subjects in the 'if' clause of the Second Conditional.", translation: "Forma usada para todos os sujeitos" },
        { topic: "Grammar", term: "Would", definition: "Modal verb used to express a hypothetical result.", translation: "(Usado para formar o futuro do pretérito)" }
    ]
});