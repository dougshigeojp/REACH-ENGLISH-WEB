/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "8-4-8",
    grade: "8th Grade",
    bimester: "4",
    chapter: "8",
    chapterTitle: "Our World, Their Habits",
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "In this lesson, you will learn to:<br><br>• Talk about different cultures and traditions.<br>• Use vocabulary for beliefs, cuisine, and gestures.<br>• Use the Passive Voice to focus on actions.<br>• Talk about past habits with \"used to\".<br>• Use \"too\" and \"enough\" to describe limits.",
            welcome: "Hello, Global Citizens! It's Mr. D!<br><br>Welcome to \"Our World, Their Habits\"! Today, we are going to travel around the world without leaving our seats. We'll explore why people do things differently in different places—from the food they eat to the way they say hello. We'll learn how to talk about traditions using the Passive Voice and how to describe our own past habits with \"used to\". Let's open our minds to new cultures!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about different cultures and traditions. Use vocabulary for beliefs, cuisine, and gestures. Use the Passive Voice to focus on actions. Talk about past habits with used to. And use too and enough to describe limits.",
                welcome: "TTS: Hello, Global Citizens! It's Mr. D! Welcome to Our World, Their Habits! Today, we are going to travel around the world without leaving our seats. We'll explore why people do things differently in different places—from the food they eat to the way they say hello. We'll learn how to talk about traditions using the Passive Voice and how to describe our own past habits with used to. Let's open our minds to new cultures!"
            }
        },

        // ======================================================
        // STEP 1: WHAT'S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of international music and people chatting. Celine and Albert are at a cultural fair looking at different stands.", 
            contextAudio: "audio/8-4-8/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "Look, Celine! This food [is eaten](tooltip:eaten-passive) in Japan. It's called [sushi](tooltip:cuisine)." 
                },
                { 
                    speaker: "Celine", 
                    text: "I know! I [used to](tooltip:used-to-habit) eat sushi every week. It's [delicious](tooltip:delicious)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Really? I thought it was [too](tooltip:too-limit) spicy for you." 
                },
                { 
                    speaker: "Celine", 
                    text: "No, it's not spicy [enough](tooltip:enough-limit). In my [culture](tooltip:culture), we love spicy food." 
                },
                { 
                    speaker: "Albert", 
                    text: "Interesting! In my culture, [shaking hands](tooltip:shake-hands) [is considered](tooltip:considered-passive) [polite](tooltip:polite)." 
                },
                { 
                    speaker: "Celine", 
                    text: "But in some places, people [bow](tooltip:to-bow). [Gestures](tooltip:gesture) are different everywhere." 
                },
                { 
                    speaker: "Albert", 
                    text: "True. We can learn a lot if we are open to new [traditions](tooltip:tradition)." 
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
                    title: "Elements of Culture",
                    audio: "TTS: Culture. Habit. Custom. Tradition. Language. Cuisine. Religion. Belief. Festival. Background. Geography. Prejudice. Bias. Culture Shock.",
                    items: [
                        { term: "Culture", trans: "Cultura" },
                        { term: "Habit / Custom", trans: "Hábito / Costume" },
                        { term: "Tradition", trans: "Tradição" },
                        { term: "Language", trans: "Idioma / Língua" },
                        { term: "Cuisine", trans: "Culinária" },
                        { term: "Religion", trans: "Religião" },
                        { term: "Belief", trans: "Crença" },
                        { term: "Festival", trans: "Festival / Feriado" },
                        { term: "Background", trans: "Origem / Contexto" },
                        { term: "Geography", trans: "Geografia" },
                        { term: "Prejudice / Bias", trans: "Preconceito / Viés" },
                        { term: "Culture Shock", trans: "Choque Cultural" }
                    ]
                },
                {
                    title: "Collocations with MAKE",
                    audio: "TTS: Make a decision. Make a choice. Make a mistake. Make a difference. Make friends. Make sure. Make an effort.",
                    items: [
                        { term: "Make a decision", trans: "Tomar uma decisão" },
                        { term: "Make a choice", trans: "Fazer uma escolha" },
                        { term: "Make a mistake", trans: "Cometer um erro" },
                        { term: "Make a difference", trans: "Fazer a diferença" },
                        { term: "Make friends", trans: "Fazer amigos" },
                        { term: "Make sure", trans: "Ter certeza / Certificar-se" },
                        { term: "Make an effort", trans: "Fazer um esforço" }
                    ]
                },
                {
                    title: "Gestures",
                    audio: "TTS: To nod. To shake head. To wave. To hug. To point. Thumbs-up. To shake hands. To bow.",
                    items: [
                        { term: "To nod", trans: "Acenar com a cabeça (sim)" },
                        { term: "To shake head", trans: "Balançar a cabeça (não)" },
                        { term: "To wave", trans: "Acenar / Dar tchau" },
                        { term: "To hug", trans: "Abraçar" },
                        { term: "To point", trans: "Apontar" },
                        { term: "Thumbs-up", trans: "Joia / Polegar para cima" },
                        { term: "To shake hands", trans: "Apertar as mãos" },
                        { term: "To bow", trans: "Curvar-se / Reverenciar" }
                    ]
                },
                {
                    title: "Passive Voice Verbs",
                    audio: "TTS: Eaten. Celebrated. Made. Spoken. Considered. Taught. Built. Written. Given.",
                    items: [
                        { term: "Eaten", trans: "Comido (Particípio de Eat)" },
                        { term: "Celebrated", trans: "Celebrado" },
                        { term: "Made", trans: "Feito (Particípio de Make)" },
                        { term: "Spoken", trans: "Falado (Particípio de Speak)" },
                        { term: "Considered", trans: "Considerado" },
                        { term: "Taught", trans: "Ensinado (Particípio de Teach)" },
                        { term: "Built", trans: "Construído (Particípio de Build)" },
                        { term: "Written", trans: "Escrito (Particípio de Write)" },
                        { term: "Given", trans: "Dado (Particípio de Give)" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Too difficult. Old enough. In my culture. Used to.",
                    items: [
                        { term: "Too difficult", trans: "Difícil demais" },
                        { term: "Old enough", trans: "Idade suficiente" },
                        { term: "In my culture...", trans: "Na minha cultura..." },
                        { term: "Used to...", trans: "Costumava..." }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed) - PART 1
            exampleGroups: [
                {
                    title: "Elements of Culture",
                    audio: "TTS: Brazil has a rich culture. Shaking hands is a common custom. Carnival is a big tradition. English is a global language. I love Italian cuisine. People practice different religions. Respect everyone's belief. We went to a music festival. They come from a different background. We study world geography. We must fight against prejudice. I felt culture shock in Japan.",
                    items: [
                        { term: "Culture", sent: "Brazil has a rich culture.", trans: "<span style='color:#0077b6'>O Brasil tem uma cultura rica.</span>" },
                        { term: "Habit / Custom", sent: "Shaking hands is a common custom.", trans: "<span style='color:#0077b6'>Apertar as mãos é um costume comum.</span>" },
                        { term: "Tradition", sent: "Carnival is a big tradition.", trans: "<span style='color:#0077b6'>O Carnaval é uma grande tradição.</span>" },
                        { term: "Language", sent: "English is a global language.", trans: "<span style='color:#0077b6'>O inglês é uma língua global.</span>" },
                        { term: "Cuisine", sent: "I love Italian cuisine.", trans: "<span style='color:#0077b6'>Eu amo a culinária italiana.</span>" },
                        { term: "Religion", sent: "People practice different religions.", trans: "<span style='color:#0077b6'>As pessoas praticam religiões diferentes.</span>" },
                        { term: "Belief", sent: "Respect everyone's belief.", trans: "<span style='color:#0077b6'>Respeite a crença de todos.</span>" },
                        { term: "Festival", sent: "We went to a music festival.", trans: "<span style='color:#0077b6'>Nós fomos a um festival de música.</span>" },
                        { term: "Background", sent: "They come from a different background.", trans: "<span style='color:#0077b6'>Eles vêm de uma origem/contexto diferente.</span>" },
                        { term: "Geography", sent: "We study world geography.", trans: "<span style='color:#0077b6'>Nós estudamos geografia mundial.</span>" },
                        { term: "Prejudice / Bias", sent: "We must fight against prejudice.", trans: "<span style='color:#0077b6'>Devemos lutar contra o preconceito.</span>" },
                        { term: "Culture Shock", sent: "I felt culture shock in Japan.", trans: "<span style='color:#0077b6'>Eu senti choque cultural no Japão.</span>" }
                    ]
                },
                {
                    title: "Collocations with MAKE",
                    audio: "TTS: I need to make a decision now. Please make a choice. It's okay to make a mistake. You can make a difference. It is easy to make friends here. Make sure you are ready. Make an effort to learn.",
                    items: [
                        { term: "Make a decision", sent: "I need to make a decision now.", trans: "<span style='color:#0077b6'>Preciso tomar uma decisão agora.</span>" },
                        { term: "Make a choice", sent: "Please make a choice.", trans: "<span style='color:#0077b6'>Por favor, faça uma escolha.</span>" },
                        { term: "Make a mistake", sent: "It's okay to make a mistake.", trans: "<span style='color:#0077b6'>Tudo bem cometer um erro.</span>" },
                        { term: "Make a difference", sent: "You can make a difference.", trans: "<span style='color:#0077b6'>Você pode fazer a diferença.</span>" },
                        { term: "Make friends", sent: "It is easy to make friends here.", trans: "<span style='color:#0077b6'>É fácil fazer amigos aqui.</span>" },
                        { term: "Make sure", sent: "Make sure you are ready.", trans: "<span style='color:#0077b6'>Certifique-se de que você está pronto.</span>" },
                        { term: "Make an effort", sent: "Make an effort to learn.", trans: "<span style='color:#0077b6'>Faça um esforço para aprender.</span>" }
                    ]
                },
                {
                    title: "Gestures",
                    audio: "TTS: He nodded to show agreement. She shook her head to say no. Wave hello to your friend. I want to hug my parents. Don't point at people. He gave me a thumbs-up. They shake hands in business meetings. In Japan, people bow to show respect.",
                    items: [
                        { term: "To nod", sent: "He nodded to show agreement.", trans: "<span style='color:#0077b6'>Ele acenou com a cabeça para mostrar concordância.</span>" },
                        { term: "To shake head", sent: "She shook her head to say no.", trans: "<span style='color:#0077b6'>Ela balançou a cabeça para dizer não.</span>" },
                        { term: "To wave", sent: "Wave hello to your friend.", trans: "<span style='color:#0077b6'>Acene um 'olá' para o seu amigo.</span>" },
                        { term: "To hug", sent: "I want to hug my parents.", trans: "<span style='color:#0077b6'>Eu quero abraçar meus pais.</span>" },
                        { term: "To point", sent: "Don't point at people.", trans: "<span style='color:#0077b6'>Não aponte para as pessoas.</span>" },
                        { term: "Thumbs-up", sent: "He gave me a thumbs-up.", trans: "<span style='color:#0077b6'>Ele me deu um 'joia'.</span>" },
                        { term: "To shake hands", sent: "They shake hands in business meetings.", trans: "<span style='color:#0077b6'>Eles apertam as mãos em reuniões de negócios.</span>" },
                        { term: "To bow", sent: "In Japan, people bow to show respect.", trans: "<span style='color:#0077b6'>No Japão, as pessoas se curvam para mostrar respeito.</span>" }
                    ]
                },
                {
                    title: "Passive Voice Verbs",
                    audio: "TTS: Sushi is eaten in Japan. Carnival is celebrated in February. This cake was made by my mom. English is spoken worldwide. Shaking hands is considered polite. Math is taught every Monday. The bridge was built in 1950. The book was written in English. Gifts are given at Christmas.",
                    items: [
                        { term: "Eaten", sent: "Sushi is eaten in Japan.", trans: "<span style='color:#0077b6'>Sushi é comido no Japão.</span>" },
                        { term: "Celebrated", sent: "Carnival is celebrated in February.", trans: "<span style='color:#0077b6'>O Carnaval é celebrado em fevereiro.</span>" },
                        { term: "Made", sent: "This cake was made by my mom.", trans: "<span style='color:#0077b6'>Este bolo foi feito pela minha mãe.</span>" },
                        { term: "Spoken", sent: "English is spoken worldwide.", trans: "<span style='color:#0077b6'>Inglês é falado no mundo todo.</span>" },
                        { term: "Considered", sent: "Shaking hands is considered polite.", trans: "<span style='color:#0077b6'>Apertar as mãos é considerado educado.</span>" },
                        { term: "Taught", sent: "Math is taught every Monday.", trans: "<span style='color:#0077b6'>Matemática é ensinada toda segunda-feira.</span>" },
                        { term: "Built", sent: "The bridge was built in 1950.", trans: "<span style='color:#0077b6'>A ponte foi construída em 1950.</span>" },
                        { term: "Written", sent: "The book was written in English.", trans: "<span style='color:#0077b6'>O livro foi escrito em inglês.</span>" },
                        { term: "Given", sent: "Gifts are given at Christmas.", trans: "<span style='color:#0077b6'>Presentes são dados no Natal.</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: This problem is too difficult. He is not old enough to drive. In my culture, we eat late. I used to play soccer.",
                    items: [
                        { term: "Too difficult", sent: "This problem is too difficult.", trans: "<span style='color:#0077b6'>Este problema é difícil demais.</span>" },
                        { term: "Old enough", sent: "He is not old enough to drive.", trans: "<span style='color:#0077b6'>Ele não tem idade suficiente para dirigir.</span>" },
                        { term: "In my culture...", sent: "In my culture, we eat late.", trans: "<span style='color:#0077b6'>Na minha cultura, nós comemos tarde.</span>" },
                        { term: "Used to...", sent: "I used to play soccer.", trans: "<span style='color:#0077b6'>Eu costumava jogar futebol.</span>" }
                    ]
                }
            ], // This closes the exampleGroups array

            // 2C: Practice Drills
            drills: [
                {
                    type: "mcq",
                    q: "What do we call the specific style or method of cooking of a culture?",
                    options: [
                        { t: "Tradition", c: false },
                        { t: "Language", c: false },
                        { t: "Cuisine", c: true },
                        { t: "Belief", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To move your hand to say hello or goodbye is to:",
                    options: [
                        { t: "To nod", c: false },
                        { t: "To wave", c: true },
                        { t: "To bow", c: false },
                        { t: "To point", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete the collocation: 'Don't _______ a mistake on your test.'",
                    options: [
                        { t: "do", c: false },
                        { t: "have", c: false },
                        { t: "make", c: true },
                        { t: "take", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Portuguese is _______ in Brazil and Portugal.",
                    options: [
                        { t: "speak", c: false },
                        { t: "spoke", c: false },
                        { t: "spoken", c: true },
                        { t: "speaking", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I _______ live in Spain, but now I live in Brazil.\"",
                    options: [
                        { t: "use to", c: false },
                        { t: "used to", c: true },
                        { t: "using to", c: false },
                        { t: "uses to", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "This shirt is small. It is not big _______.",
                    options: [
                        { t: "too", c: false },
                        { t: "enough", c: true },
                        { t: "very", c: false },
                        { t: "much", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "I can't buy this laptop. It is _______ expensive.",
                    options: [
                        { t: "enough", c: false },
                        { t: "too", c: true },
                        { t: "many", c: false },
                        { t: "a lot", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "In some cultures, it is rude to _______ at people with your finger.",
                    options: [
                        { t: "point", c: true },
                        { t: "smile", c: false },
                        { t: "hug", c: false },
                        { t: "nod", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The decision was _______ by the committee yesterday.",
                    options: [
                        { t: "did", c: false },
                        { t: "maked", c: false },
                        { t: "made", c: true },
                        { t: "make", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Feeling confused and overwhelmed in a new country is called...",
                    options: [
                        { t: "Culture Shock", c: true },
                        { t: "Geography", c: false },
                        { t: "Festival", c: false },
                        { t: "Religion", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To move your head up and down to say 'yes' is to:",
                    options: [
                        { t: "shake", c: false },
                        { t: "wave", c: false },
                        { t: "nod", c: true },
                        { t: "bow", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "In Japan, it is a _______ to take off your shoes inside.",
                    options: [
                        { t: "custom", c: true },
                        { t: "mistake", c: false },
                        { t: "prejudice", c: false },
                        { t: "bias", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "It's important to _______ an effort to learn about new traditions.",
                    options: [
                        { t: "do", c: false },
                        { t: "give", c: false },
                        { t: "make", c: true },
                        { t: "stay", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "These ancient pyramids were _______ thousands of years ago.",
                    options: [
                        { t: "build", c: false },
                        { t: "builded", c: false },
                        { t: "built", c: true },
                        { t: "building", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "I _______ to play with dolls when I was five.",
                    options: [
                        { t: "used to", c: true },
                        { t: "use to", c: false },
                        { t: "was use to", c: false },
                        { t: "am using", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The coffee is _______ hot. I can't drink it yet.",
                    options: [
                        { t: "enough", c: false },
                        { t: "too", c: true },
                        { t: "many", c: false },
                        { t: "much", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Do we have _______ chairs for all the guests?",
                    options: [
                        { t: "enough", c: true },
                        { t: "too", c: false },
                        { t: "very", c: false },
                        { t: "lot", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To bend your body forward to show respect is to:",
                    options: [
                        { t: "point", c: false },
                        { t: "hug", c: false },
                        { t: "bow", c: true },
                        { t: "nod", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If you want to be successful, you must _______ a choice.",
                    options: [
                        { t: "do", c: false },
                        { t: "make", c: true },
                        { t: "take", c: false },
                        { t: "have", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "This famous book was _______ in 1950.",
                    options: [
                        { t: "write", c: false },
                        { t: "wrote", c: false },
                        { t: "written", c: true },
                        { t: "writing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "An unfair opinion formed without knowing the facts is:",
                    options: [
                        { t: "Cuisine", c: false },
                        { t: "Prejudice", c: true },
                        { t: "Festival", c: false },
                        { t: "Tradition", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To put your arms around someone to show affection is to:",
                    options: [
                        { t: "nod", c: false },
                        { t: "wave", c: false },
                        { t: "hug", c: true },
                        { t: "bow", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Please _______ sure that the door is locked.",
                    options: [
                        { t: "do", c: false },
                        { t: "have", c: false },
                        { t: "make", c: true },
                        { t: "get", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "We need to _______ a difference in our community.",
                    options: [
                        { t: "make", c: true },
                        { t: "do", c: false },
                        { t: "see", c: false },
                        { t: "give", c: false }
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
                    title: "Passive Voice (Present & Past)",
                    audio: "TTS: We use the Passive Voice to focus on the object or the action, not the person doing it. The Golden Rule is that the verb TO BE must agree with the new subject and the time. Structure: New Subject plus Verb To Be plus Past Participle. Present: English is spoken here. Past: The pyramids were built long ago.",
                    explanation: "We use the <b>Passive Voice</b> to focus on the <b>object</b> (receiver) or the <b>action</b>, not the person doing it (the agent).<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos a Voz Passiva para focar no objeto (quem recebe) ou na ação, e não na pessoa que a faz (o agente).)</span><br><br><b>The Golden Rule:</b> The verb 'TO BE' must agree with the NEW SUBJECT (Singular/Plural) and the TIME (Present/Past).<br><br><b>Structure:</b> New Subject + Verb TO BE (am/is/are/was/were) + Past Participle.",
                    samples: [
                        { en: "PRESENT: English is spoken here.", pt: "<span style='color:#0077b6'>Inglês é falado aqui. (Singular)</span>" },
                        { en: "PRESENT: Computers are used in schools.", pt: "<span style='color:#0077b6'>Computadores são usados nas escolas. (Plural)</span>" },
                        { en: "PAST: My bike was stolen.", pt: "<span style='color:#0077b6'>Minha bicicleta foi roubada. (Singular)</span>" },
                        { en: "PAST: The pyramids were built long ago.", pt: "<span style='color:#0077b6'>As pirâmides foram construídas há muito tempo. (Plural)</span>" }
                    ]
                },
                {
                    title: "Used to (Past Habits)",
                    audio: "TTS: We use used to for things that happened regularly in the past but do not happen now. Affirmative: I used to play with dolls. Negative: I didn't use to like sushi. Question: Did you use to live here? Remember to remove the D in negatives and questions.",
                    explanation: "We use <b>used to</b> for things that happened regularly in the past but do not happen now. It is also used for past states that are no longer true.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos 'used to' para coisas que aconteciam regularmente no passado, mas não acontecem agora. Também é usado para estados passados que não são mais verdadeiros.)</span>",
                    samples: [
                        { en: "AFFIRMATIVE: I used to play with dolls.", pt: "<span style='color:#0077b6'>Eu costumava brincar de bonecas.</span>" },
                        { en: "NEGATIVE: I didn't use to like sushi.", pt: "<span style='color:#0077b6'>Eu não costumava gostar de sushi. (Sem o 'd')</span>" },
                        { en: "QUESTION: Did you use to live here?", pt: "<span style='color:#0077b6'>Você costumava morar aqui? (Sem o 'd')</span>" }
                    ]
                },
                {
                    title: "Too / (Not) Enough",
                    audio: "TTS: These words talk about limits. Too means more than necessary and has a negative meaning. It goes before adjectives. For example, It is too hot. Enough means the necessary amount. It goes after adjectives, like tall enough, or before nouns, like enough food.",
                    explanation: "We use these words to talk about limits.<br><br><b>TOO:</b> Means 'more than necessary' (negative). Goes BEFORE adjectives.<br><b>ENOUGH:</b> Means 'the necessary amount'. Goes AFTER adjectives or BEFORE nouns.<br><br><span style='color:#0077b6; font-style:italic;'>(TOO: Significa 'mais que o necessário' (negativo). Vem ANTES de adjetivos. ENOUGH: Significa 'a quantidade necessária'. Vem DEPOIS de adjetivos ou ANTES de substantivos.)</span>",
                    samples: [
                        { en: "TOO: It is too hot.", pt: "<span style='color:#0077b6'>Está quente demais. (De um jeito ruim)</span>" },
                        { en: "ENOUGH (Adj): He is tall enough.", pt: "<span style='color:#0077b6'>Ele é alto o suficiente.</span>" },
                        { en: "ENOUGH (Noun): We have enough food.", pt: "<span style='color:#0077b6'>Temos comida suficiente.</span>" },
                        { en: "NEGATIVE: It isn't good enough.", pt: "<span style='color:#0077b6'>Não é bom o suficiente.</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Passive Voice (Focus on 'To Be')",
                    audio: "audio/8-4-8/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Look at these photos. Where were they taken?", 
                            pt: "<span style='color:#0077b6'>Olhe estas fotos. Onde elas foram tiradas? (Plural)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "This photo was taken in Japan. And this letter was written in French.", 
                            pt: "<span style='color:#0077b6'>Esta foto foi tirada no Japão. E esta carta foi escrita em francês. (Singular)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Used to (Past Habits)",
                    audio: "audio/8-4-8/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Did you use to have a hobby?", 
                            pt: "<span style='color:#0077b6'>Você costumava ter um hobby?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes. I used to collect stamps. But I didn't use to play sports. Now I play basketball.", 
                            pt: "<span style='color:#0077b6'>Sim. Eu costumava colecionar selos. Mas eu não costumava praticar esportes. Agora eu jogo basquete.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Too / Enough (Limits)",
                    audio: "audio/8-4-8/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Can we go to that restaurant?", 
                            pt: "<span style='color:#0077b6'>Podemos ir àquele restaurante?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, the line is too long. We don't have enough time.", 
                            pt: "<span style='color:#0077b6'>Não, a fila está longa demais. Nós não temos tempo suficiente.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "You're right. It is too late to wait.", 
                            pt: "<span style='color:#0077b6'>Você está certa. É tarde demais para esperar.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice Drills
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Passive Voice: \"The cars _______ (make) in Germany.\"",
                    options: [
                        {t: "is made", c: false},
                        {t: "are made", c: true},
                        {t: "was made", c: false},
                        {t: "made", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Passive Voice: \"The book _______ (write) in 1990.\"",
                    options: [
                        {t: "were written", c: false},
                        {t: "are written", c: false},
                        {t: "was written", c: true},
                        {t: "is written", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Used to (Negative): \"She _______ eat vegetables when she was a child.\"",
                    options: [
                        {t: "didn't used to", c: false},
                        {t: "didn't use to", c: true},
                        {t: "not used to", c: false},
                        {t: "no use to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Used to (Question): \"_______ they _______ travel a lot in the past?\"",
                    options: [
                        {t: "Did / used to", c: false},
                        {t: "Did / use to", c: true},
                        {t: "Do / use to", c: false},
                        {t: "Were / used to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Too (Position): \"This bag is _______.\"",
                    options: [
                        {t: "heavy too", c: false},
                        {t: "too heavy", c: true},
                        {t: "enough heavy", c: false},
                        {t: "heavy enough", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Enough (Adjective Position): \"Is the water _______?\"",
                    options: [
                        {t: "enough warm", c: false},
                        {t: "warm enough", c: true},
                        {t: "too warm", c: false},
                        {t: "warm too", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Enough (Noun Position): \"I don't have _______ to buy that car.\"",
                    options: [
                        {t: "money enough", c: false},
                        {t: "enough money", c: true},
                        {t: "too money", c: false},
                        {t: "money too", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Identification: Which sentence is in Passive Voice?",
                    options: [
                        {t: "People speak Spanish here.", c: false},
                        {t: "Spanish is spoken here.", c: true},
                        {t: "They are speaking Spanish.", c: false},
                        {t: "We spoke Spanish.", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Passive (Past Plural): \"The windows _______ (break) last night.\"",
                    options: [
                        {t: "was broken", c: false},
                        {t: "were broken", c: true},
                        {t: "are broken", c: false},
                        {t: "broke", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Used to (Affirmative): \"I _______ have long hair when I was younger.\"",
                    options: [
                        {t: "use to", c: false},
                        {t: "used to", c: true},
                        {t: "used", c: false},
                        {t: "was used to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Limits: \"He is not old _______ to drive a truck.\"",
                    options: [
                        {t: "too", c: false},
                        {t: "very", c: false},
                        {t: "enough", c: true},
                        {t: "much", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Passive (Present Singular): \"Coffee _______ (produce) in Brazil.\"",
                    options: [
                        {t: "is produced", c: true},
                        {t: "are produced", c: false},
                        {t: "was produced", c: false},
                        {t: "produces", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Used to (State): \"There _______ be a theater in this street.\"",
                    options: [
                        {t: "used to", c: true},
                        {t: "use to", c: false},
                        {t: "was used", c: false},
                        {t: "is used to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Too (Negative context): \"This movie is _______ boring. Let's leave.\"",
                    options: [
                        {t: "enough", c: false},
                        {t: "too", c: true},
                        {t: "very much", c: false},
                        {t: "lot of", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Enough (Noun): \"We have _______ chairs for everyone.\"",
                    options: [
                        {t: "chairs enough", c: false},
                        {t: "too chairs", c: false},
                        {t: "enough chairs", c: true},
                        {t: "many chairs", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Passive (Past Singular): \"The building _______ (destroy) by a fire.\"",
                    options: [
                        {t: "is destroyed", c: false},
                        {t: "was destroyed", c: true},
                        {t: "were destroyed", c: false},
                        {t: "destroyed", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Used to (Question): \"_______ you _______ play soccer at school?\"",
                    options: [
                        {t: "Did / used to", c: false},
                        {t: "Do / used to", c: false},
                        {t: "Did / use to", c: true},
                        {t: "Have / used to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Passive (Present Plural): \"Mobile phones _______ (sell) everywhere.\"",
                    options: [
                        {t: "is sold", c: false},
                        {t: "are sold", c: true},
                        {t: "was sold", c: false},
                        {t: "sold", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Limits: \"The tea is _______ hot to drink.\"",
                    options: [
                        {t: "enough", c: false},
                        {t: "too", c: true},
                        {t: "many", c: false},
                        {t: "a lot", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Used to (Negative): \"We _______ have internet 40 years ago.\"",
                    options: [
                        {t: "don't use to", c: false},
                        {t: "not use to", c: false},
                        {t: "didn't use to", c: true},
                        {t: "didn't used to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Passive (Agent): \"The cake was made _______ my grandmother.\"",
                    options: [
                        {t: "for", c: false},
                        {t: "to", c: false},
                        {t: "by", c: true},
                        {t: "with", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Enough (Adjective): \"This house is big _______ for ten people.\"",
                    options: [
                        {t: "too", c: false},
                        {t: "enough", c: true},
                        {t: "very", c: false},
                        {t: "a lot", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Used to (Habit): \"He _______ smoke, but he stopped last year.\"",
                    options: [
                        {t: "used to", c: true},
                        {t: "use to", c: false},
                        {t: "is used to", c: false},
                        {t: "was use to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Passive Voice: \"Letters _______ (deliver) every morning.\"",
                    options: [
                        {t: "is delivered", c: false},
                        {t: "was delivered", c: false},
                        {t: "are delivered", c: true},
                        {t: "delivered", c: false}
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
                    text: "Portuguese is spoken in Brazil.<br><small style='color:#0077b6'>(Português é falado no Brasil.)</small>", 
                    audio: "TTS: Portuguese is spoken in Brazil.", 
                    arrow: "↘" 
                },
                { 
                    text: "I used to live in a small town.<br><small style='color:#0077b6'>(Eu costumava morar em uma cidade pequena.)</small>", 
                    audio: "TTS: I used to live in a small town.", 
                    arrow: "↘" 
                },
                { 
                    text: "This coffee is too hot.<br><small style='color:#0077b6'>(Este café está quente demais.)</small>", 
                    audio: "TTS: This coffee is too hot.", 
                    arrow: "↘" 
                },
                { 
                    text: "Did you make a decision?<br><small style='color:#0077b6'>(Você tomou uma decisão?)</small>", 
                    audio: "TTS: Did you make a decision?", 
                    arrow: "↗" 
                },
                { 
                    text: "We didn't use to eat spicy food.<br><small style='color:#0077b6'>(Nós não costumávamos comer comida apimentada.)</small>", 
                    audio: "TTS: We didn't use to eat spicy food.", 
                    arrow: "↘" 
                },
                { 
                    text: "The song was written by her.<br><small style='color:#0077b6'>(A música foi escrita por ela.)</small>", 
                    audio: "TTS: The song was written by her.", 
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
                    instruction: "Listen to Albert talking about his childhood. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre sua infância. Digite as palavras que faltam.)</small>",
                    audio: "TTS: When I was young, I used to play outside every day. We didn't use to have video games. Life was very simple back then.",
                    text: "When I was young, I [used to] play outside every day. We [didn't] use to have video games. Life [was] very simple back then."
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the tour guide and choose the correct option.<br><small style='color:#0077b6'>(Ouça o guia turístico e escolha a opção correta.)</small>",
                    audio: "audio/8-4-8/step5_drill2.mp3",
                    questions: [
                        { q: "Guide: This castle [was built | built] in 1500.", a: "was built" },
                        { q: "Tourist: Who [lived | live] here?", a: "lived" },
                        { q: "Guide: It [was used | used] by the Royal Family. Now, it is [visited | visit] by tourists.", a: "was used" }
                    ]
                },
                // Drill 3: Audio Choice (MP3)
                {
                    type: "audio-choice",
                    instruction: "Listen to the description of a gesture and choose the correct meaning.<br><small style='color:#0077b6'>(Ouça a descrição de um gesto e escolha o significado correto.)</small>",
                    audio: "audio/8-4-8/step5_drill3.mp3",
                    options: [
                        { t: "To say 'No'.", c: false },
                        { t: "To say 'Yes'.", c: true },
                        { t: "To say 'Hello'.", c: false },
                        { t: "To say 'Goodbye'.", c: false }
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
                    title: "Narration: My Exchange Year",
                    audio: "TTS: My Exchange Year. Last year, I participated in an exchange program in Japan. At first, I felt a big culture shock. In Brazil, we hug our friends, but in Japan, people bow. It was too different for me! Also, shoes are not worn inside the house. I used to forget to take them off. But I made an effort to learn. The cuisine is delicious; rice is eaten with every meal. Now, I miss the traditions I learned there. || audio/8-4-8/p6_text1.mp3",
                    body: "Last year, I participated in an exchange program in Japan. At first, I felt a big culture shock. In Brazil, we hug our friends, but in Japan, people bow. It was too different for me! Also, shoes are not worn inside the house. I used to forget to take them off. But I made an effort to learn. The cuisine is delicious; rice is eaten with every meal. Now, I miss the traditions I learned there.",
                    questions: [
                        { 
                            q: "How do people greet each other in Japan?", 
                            options: [ 
                                {t: "They hug.", c: false}, 
                                {t: "They bow.", c: true}, 
                                {t: "They shake hands.", c: false},
                                {t: "They wave.", c: false}
                            ] 
                        },
                        { 
                            q: "What is a rule about shoes in Japan?", 
                            options: [ 
                                {t: "They are worn inside.", c: false}, 
                                {t: "They are too expensive.", c: false}, 
                                {t: "They are not worn inside.", c: true},
                                {t: "They are made of wood.", c: false}
                            ] 
                        },
                        { 
                            q: "What food is eaten with every meal?", 
                            options: [ 
                                {t: "Bread", c: false}, 
                                {t: "Rice", c: true}, 
                                {t: "Pizza", c: false},
                                {t: "Soup", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: The Local Festival",
                    audio: "audio/8-4-8/p6_text2.mp3",
                    body: "<b>Celine:</b> Look at this parade! It is beautiful.<br><b>Albert:</b> Yes. This festival is celebrated every year in my city.<br><b>Celine:</b> What is that food? It smells good.<br><b>Albert:</b> It's a special cake. It is made with corn and sugar.<br><b>Celine:</b> I want to buy one, but I don't have enough money.<br><b>Albert:</b> Don't worry. I will buy it for you.<br><b>Celine:</b> Thanks! In my country, we don't use to have festivals like this.",
                    questions: [
                        { 
                            q: "How often is the festival celebrated?", 
                            options: [ 
                                {t: "Every month", c: false}, 
                                {t: "Every year", c: true}, 
                                {t: "Every week", c: false},
                                {t: "Never", c: false}
                            ] 
                        },
                        { 
                            q: "What is the cake made with?", 
                            options: [ 
                                {t: "Chocolate and milk", c: false}, 
                                {t: "Corn and sugar", c: true}, 
                                {t: "Fruit and nuts", c: false},
                                {t: "Rice and beans", c: false}
                            ] 
                        },
                        { 
                            q: "Why can't Celine buy the cake?", 
                            options: [ 
                                {t: "It is too spicy.", c: false}, 
                                {t: "She doesn't have enough money.", c: true}, 
                                {t: "She doesn't like it.", c: false},
                                {t: "It is sold out.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: Gestures Around the World",
                    audio: "TTS: Gestures Around the World. Body language is fascinating. A gesture that is polite in one country can be rude in another. For example, the thumbs-up is used to say good in many places, but in some countries, it is offensive. In Bulgaria, nodding your head means no and shaking it means yes. It is too confusing for tourists! It is important to make sure you understand the local customs before you travel so you don't make a mistake. || audio/8-4-8/p6_text3.mp3",
                    body: "Body language is fascinating. A gesture that is polite in one country can be rude in another. For example, the \"thumbs-up\" is used to say \"good\" in many places, but in some countries, it is offensive. In Bulgaria, nodding your head means \"no\" and shaking it means \"yes\". It is too confusing for tourists! It is important to make sure you understand the local customs before you travel so you don't make a mistake.",
                    questions: [
                        { 
                            q: "Is the 'thumbs-up' always polite?", 
                            options: [ 
                                {t: "Yes, always.", c: false}, 
                                {t: "No, sometimes it is offensive.", c: true}, 
                                {t: "It means 'no'.", c: false},
                                {t: "It is never used.", c: false}
                            ] 
                        },
                        { 
                            q: "What does nodding mean in Bulgaria?", 
                            options: [ 
                                {t: "Yes", c: false}, 
                                {t: "No", c: true}, 
                                {t: "Hello", c: false},
                                {t: "Goodbye", c: false}
                            ] 
                        },
                        { 
                            q: "Why should tourists learn customs?", 
                            options: [ 
                                {t: "To make money.", c: false}, 
                                {t: "To avoid making a mistake.", c: true}, 
                                {t: "To buy food.", c: false},
                                {t: "To speak the language.", c: false}
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
                // Drill 1: Matching the Meanings (Gestures)
                {
                    type: "matching",
                    instruction: "Match the gesture with the action.<br><small style='color:#0077b6'>(Combine o gesto com a ação.)</small>",
                    pairs: [
                        { left: "Nod", right: "Move head up and down (Yes)", val: "1" },
                        { left: "Shake head", right: "Move head side to side (No)", val: "2" },
                        { left: "Wave", right: "Move hand to say hello/goodbye", val: "3" },
                        { left: "Bow", right: "Bend body forward", val: "4" }
                    ]
                },
                // Drill 2: Unscramble the Sentences
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "English / spoken / is / here / .",
                    correct: "English is spoken here ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "used to / I / play / dolls / with / .",
                    correct: "I used to play dolls with ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "hot / is / too / soup / The / .",
                    correct: "The soup is too hot ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "made / decision / The / yesterday / was / .",
                    correct: "The decision was made yesterday ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Culture", c: false },
                        { t: "Tradition", c: false },
                        { t: "Habit", c: false },
                        { t: "Apple", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Nod", c: false },
                        { t: "Wave", c: false },
                        { t: "Bow", c: false },
                        { t: "Speak", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Too", c: false },
                        { t: "Enough", c: false },
                        { t: "Very", c: false },
                        { t: "Make", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Was", c: false },
                        { t: "Were", c: false },
                        { t: "Is", c: false },
                        { t: "Used", c: true }
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.<br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "I am not old [enough | too | by | used] to drive.", a: "enough" },
                        { q: "This car was made [by | too | enough | used] robots.", a: "by" },
                        { q: "She [used | too | by | enough] to have a cat.", a: "used" },
                        { q: "This box is [too | by | enough | used] heavy.", a: "too" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: Family Traditions or Past Habits. Now it's your turn! Write about a tradition in your family or a habit you had in the past.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Tradições Familiares ou Hábitos Passados. Agora é a sua vez! Escreva sobre uma tradição na sua família ou um hábito que você tinha no passado.)</span></small>",
            example: "\"I used to watch cartoons every morning when I was a child. Now, I don't have enough time. In my family, Christmas is celebrated with a big dinner. Turkey is eaten by everyone.\"<br><br><small><span style='color:#0077b6'>(\"Eu costumava assistir desenhos todas as manhãs quando era criança. Agora, não tenho tempo suficiente. Na minha família, o Natal é celebrado com um grande jantar. O peru é comido por todos.\")</span></small>",
            prompts: [
                "What is the tradition or habit? (Ex: We celebrate... / I used to...). <br><small><span style='color:#0077b6'>(Qual é a tradição ou o hábito? Ex: Nós celebramos... / Eu costumava...).</span></small>",
                "What is done? (Use Passive Voice if possible: 'Gifts are exchanged...'). <br><small><span style='color:#0077b6'>(O que é feito? Use a Voz Passiva se possível: 'Presentes são trocados...').</span></small>",
                "Do you still do it? <br><small><span style='color:#0077b6'>(Você ainda faz isso?)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Culture, MAKE & Gestures)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Elements of Culture ---
                { 
                    term: "Culture", 
                    definition: "The ideas, customs, and social behavior of a particular people.", 
                    defTrans: "Cultura",
                    example: "Brazil has a rich culture.", 
                    audioFront: "TTS: Culture",
                    audioBack: "TTS: Brazil has a rich culture." 
                },
                { 
                    term: "Habit / Custom", 
                    definition: "A regular practice or routine behavior.", 
                    defTrans: "Hábito / Costume",
                    example: "It is a custom to take off shoes.", 
                    audioFront: "TTS: Habit. Custom.",
                    audioBack: "TTS: It is a custom to take off shoes." 
                },
                { 
                    term: "Tradition", 
                    definition: "The transmission of customs from generation to generation.", 
                    defTrans: "Tradição",
                    example: "Family traditions are important.", 
                    audioFront: "TTS: Tradition",
                    audioBack: "TTS: Family traditions are important." 
                },
                { 
                    term: "Language", 
                    definition: "The method of human communication, either spoken or written.", 
                    defTrans: "Idioma / Língua",
                    example: "English is a global language.", 
                    audioFront: "TTS: Language",
                    audioBack: "TTS: English is a global language." 
                },
                { 
                    term: "Cuisine", 
                    definition: "A style or method of cooking characteristic of a country or region.", 
                    defTrans: "Culinária",
                    example: "I love Italian cuisine.", 
                    audioFront: "TTS: Cuisine",
                    audioBack: "TTS: I love Italian cuisine." 
                },
                { 
                    term: "Religion", 
                    definition: "The belief in and worship of a superhuman controlling power.", 
                    defTrans: "Religião",
                    example: "They study different religions.", 
                    audioFront: "TTS: Religion",
                    audioBack: "TTS: They study different religions." 
                },
                { 
                    term: "Belief", 
                    definition: "An acceptance that a statement is true or that something exists.", 
                    defTrans: "Crença",
                    example: "Respect everyone's beliefs.", 
                    audioFront: "TTS: Belief",
                    audioBack: "TTS: Respect everyone's beliefs." 
                },
                { 
                    term: "Festival", 
                    definition: "A day or period of celebration, typically religious or cultural.", 
                    defTrans: "Festival / Feriado",
                    example: "The summer festival is fun.", 
                    audioFront: "TTS: Festival",
                    audioBack: "TTS: The summer festival is fun." 
                },
                { 
                    term: "Background", 
                    definition: "A person's education, experience, and social circumstances.", 
                    defTrans: "Origem / Contexto",
                    example: "People from different backgrounds live here.", 
                    audioFront: "TTS: Background",
                    audioBack: "TTS: People from different backgrounds live here." 
                },
                { 
                    term: "Geography", 
                    definition: "The nature and relative arrangement of places and physical features.", 
                    defTrans: "Geografia",
                    example: "Geography influences culture.", 
                    audioFront: "TTS: Geography",
                    audioBack: "TTS: Geography influences culture." 
                },
                { 
                    term: "Prejudice / Bias", 
                    definition: "Preconceived opinion that is not based on reason or experience.", 
                    defTrans: "Preconceito / Viés",
                    example: "We must fight against prejudice.", 
                    audioFront: "TTS: Prejudice. Bias.",
                    audioBack: "TTS: We must fight against prejudice." 
                },
                { 
                    term: "Culture Shock", 
                    definition: "Disorientation experienced by someone subjected to an unfamiliar culture.", 
                    defTrans: "Choque Cultural",
                    example: "Moving abroad can cause culture shock.", 
                    audioFront: "TTS: Culture Shock",
                    audioBack: "TTS: Moving abroad can cause culture shock." 
                },

                // --- Collocations with MAKE ---
                { 
                    term: "Make a decision", 
                    definition: "To decide something.", 
                    defTrans: "Tomar uma decisão",
                    example: "I need to make a decision now.", 
                    audioFront: "TTS: Make a decision",
                    audioBack: "TTS: I need to make a decision now." 
                },
                { 
                    term: "Make a choice", 
                    definition: "To choose between options.", 
                    defTrans: "Fazer uma escolha",
                    example: "Please make a choice.", 
                    audioFront: "TTS: Make a choice",
                    audioBack: "TTS: Please make a choice." 
                },
                { 
                    term: "Make a mistake", 
                    definition: "To do something wrong.", 
                    defTrans: "Cometer um erro",
                    example: "Don't worry if you make a mistake.", 
                    audioFront: "TTS: Make a mistake",
                    audioBack: "TTS: Don't worry if you make a mistake." 
                },
                { 
                    term: "Make a difference", 
                    definition: "To have a significant effect on a person or situation.", 
                    defTrans: "Fazer a diferença",
                    example: "Volunteering can make a difference.", 
                    audioFront: "TTS: Make a difference",
                    audioBack: "TTS: Volunteering can make a difference." 
                },
                { 
                    term: "Make friends", 
                    definition: "To become friendly with people.", 
                    defTrans: "Fazer amigos",
                    example: "It is easy to make friends at school.", 
                    audioFront: "TTS: Make friends",
                    audioBack: "TTS: It is easy to make friends at school." 
                },
                { 
                    term: "Make sure", 
                    definition: "To ensure that something is done or happens.", 
                    defTrans: "Ter certeza / Certificar-se",
                    example: "Make sure you lock the door.", 
                    audioFront: "TTS: Make sure",
                    audioBack: "TTS: Make sure you lock the door." 
                },
                { 
                    term: "Make an effort", 
                    definition: "To try hard to do something.", 
                    defTrans: "Fazer um esforço",
                    example: "Make an effort to learn.", 
                    audioFront: "TTS: Make an effort",
                    audioBack: "TTS: Make an effort to learn." 
                },

                // --- Gestures ---
                { 
                    term: "To nod", 
                    definition: "To lower and raise one's head briefly to say yes.", 
                    defTrans: "Acenar com a cabeça (sim)",
                    example: "He nodded to say yes.", 
                    audioFront: "TTS: To nod",
                    audioBack: "TTS: He nodded to say yes." 
                },
                { 
                    term: "To shake head", 
                    definition: "To turn one's head from side to side to say no.", 
                    defTrans: "Balançar a cabeça (não)",
                    example: "She shook her head to refuse.", 
                    audioFront: "TTS: To shake head",
                    audioBack: "TTS: She shook her head to refuse." 
                },
                { 
                    term: "To wave", 
                    definition: "To move one's hand to and fro in greeting.", 
                    defTrans: "Acenar / Dar tchau",
                    example: "I waved goodbye to him.", 
                    audioFront: "TTS: To wave",
                    audioBack: "TTS: I waved goodbye to him." 
                },
                { 
                    term: "To hug", 
                    definition: "To squeeze someone tightly in one's arms.", 
                    defTrans: "Abraçar",
                    example: "They hugged each other.", 
                    audioFront: "TTS: To hug",
                    audioBack: "TTS: They hugged each other." 
                },
                { 
                    term: "To point", 
                    definition: "To direct attention towards something with a finger.", 
                    defTrans: "Apontar",
                    example: "Don't point at people.", 
                    audioFront: "TTS: To point",
                    audioBack: "TTS: Don't point at people." 
                },
                { 
                    term: "Thumbs-up", 
                    definition: "A gesture showing approval or agreement.", 
                    defTrans: "Joia / Polegar para cima",
                    example: "He gave me a thumbs-up.", 
                    audioFront: "TTS: Thumbs up",
                    audioBack: "TTS: He gave me a thumbs-up." 
                },
                { 
                    term: "To shake hands", 
                    definition: "To clasp someone's right hand in one's own.", 
                    defTrans: "Apertar as mãos",
                    example: "People shake hands in business.", 
                    audioFront: "TTS: To shake hands",
                    audioBack: "TTS: People shake hands in business." 
                },
                { 
                    term: "To bow", 
                    definition: "To bend the head or upper part of the body as a sign of respect.", 
                    defTrans: "Curvar-se / Reverenciar",
                    example: "In Japan, people bow.", 
                    audioFront: "TTS: To bow",
                    audioBack: "TTS: In Japan, people bow." 
                },
                // --- TOPIC 4: PASSIVE VOICE VERBS (Participles) ---
                { 
                    term: "Eaten", 
                    definition: "The past participle of the verb 'eat'.", 
                    defTrans: "Comido",
                    example: "Sushi is eaten with chopsticks.", 
                    audioFront: "TTS: Eaten",
                    audioBack: "TTS: Sushi is eaten with chopsticks." 
                },
                { 
                    term: "Celebrated", 
                    definition: "The past participle of the verb 'celebrate'.", 
                    defTrans: "Celebrado",
                    example: "Carnival is celebrated in February.", 
                    audioFront: "TTS: Celebrated",
                    audioBack: "TTS: Carnival is celebrated in February." 
                },
                { 
                    term: "Made", 
                    definition: "The past participle of the verb 'make'.", 
                    defTrans: "Feito",
                    example: "This car was made in Germany.", 
                    audioFront: "TTS: Made",
                    audioBack: "TTS: This car was made in Germany." 
                },
                { 
                    term: "Spoken", 
                    definition: "The past participle of the verb 'speak'.", 
                    defTrans: "Falado",
                    example: "Portuguese is spoken in Brazil.", 
                    audioFront: "TTS: Spoken",
                    audioBack: "TTS: Portuguese is spoken in Brazil." 
                },
                { 
                    term: "Considered", 
                    definition: "The past participle of the verb 'consider'.", 
                    defTrans: "Considerado",
                    example: "It is considered rude to point.", 
                    audioFront: "TTS: Considered",
                    audioBack: "TTS: It is considered rude to point." 
                },
                { 
                    term: "Taught", 
                    definition: "The past participle of the verb 'teach'.", 
                    defTrans: "Ensinado",
                    example: "Math is taught at school.", 
                    audioFront: "TTS: Taught",
                    audioBack: "TTS: Math is taught at school." 
                },
                { 
                    term: "Built", 
                    definition: "The past participle of the verb 'build'.", 
                    defTrans: "Construído",
                    example: "The bridge was built last year.", 
                    audioFront: "TTS: Built",
                    audioBack: "TTS: The bridge was built last year." 
                },
                { 
                    term: "Written", 
                    definition: "The past participle of the verb 'write'.", 
                    defTrans: "Escrito",
                    example: "The letter was written by him.", 
                    audioFront: "TTS: Written",
                    audioBack: "TTS: The letter was written by him." 
                },
                { 
                    term: "Given", 
                    definition: "The past participle of the verb 'give'.", 
                    defTrans: "Dado",
                    example: "Gifts are given on birthdays.", 
                    audioFront: "TTS: Given",
                    audioBack: "TTS: Gifts are given on birthdays." 
                },

                // --- TOPIC 5: PHRASES & GRAMMAR POINTS ---
                { 
                    term: "Too difficult", 
                    definition: "Harder than one can manage or deal with.", 
                    defTrans: "Difícil demais",
                    example: "This problem is too difficult.", 
                    audioFront: "TTS: Too difficult",
                    audioBack: "TTS: This problem is too difficult." 
                },
                { 
                    term: "Old enough", 
                    definition: "Having reached the required age for something.", 
                    defTrans: "Idade suficiente",
                    example: "He is not old enough to drive.", 
                    audioFront: "TTS: Old enough",
                    audioBack: "TTS: He is not old enough to drive." 
                },
                { 
                    term: "In my culture...", 
                    definition: "Phrase used to introduce a custom from one's background.", 
                    defTrans: "Na minha cultura...",
                    example: "In my culture, we eat early.", 
                    audioFront: "TTS: In my culture",
                    audioBack: "TTS: In my culture, we eat early." 
                },
                { 
                    term: "Passive Voice (Present)", 
                    definition: "Focus on the object using 'is/are + participle'.", 
                    defTrans: "Voz Passiva (Presente)",
                    example: "English is spoken here.", 
                    audioFront: "TTS: Passive Voice Present",
                    audioBack: "TTS: English is spoken here." 
                },
                { 
                    term: "Passive Voice (Past)", 
                    definition: "Focus on the object using 'was/were + participle'.", 
                    defTrans: "Voz Passiva (Passado)",
                    example: "The phone was invented long ago.", 
                    audioFront: "TTS: Passive Voice Past",
                    audioBack: "TTS: The phone was invented long ago." 
                },
                { 
                    term: "Used to (Past Habits)", 
                    definition: "Used for things that happened regularly in the past but not now.", 
                    defTrans: "Costumava",
                    example: "I used to sleep late.", 
                    audioFront: "TTS: Used to",
                    audioBack: "TTS: I used to sleep late." 
                },
                { 
                    term: "Too (Excess)", 
                    definition: "To a higher degree than is desirable (goes before adjectives).", 
                    defTrans: "Demais (excesso)",
                    example: "It is too hot.", 
                    audioFront: "TTS: Too",
                    audioBack: "TTS: It is too hot." 
                },
                { 
                    term: "Enough (Sufficiency)", 
                    definition: "As much or as many as required (goes after adjectives).", 
                    defTrans: "Suficiente / O bastante",
                    example: "She is tall enough.", 
                    audioFront: "TTS: Enough",
                    audioBack: "TTS: She is tall enough." 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Complete & Paginated)
    // ======================================================
    glossary: [
        // PAGE 1: CONTEXT (Step 1 tooltips)
        { topic: "Context", term: "eaten-passive", definition: "Used when the focus is on the food being consumed.", translation: "é comido / são comidos" },
        { topic: "Context", term: "used-to-habit", definition: "Describes an action that was regular in the past but doesn't happen now.", translation: "costumava" },
        { topic: "Context", term: "too-limit", definition: "Indicates an excess that is usually negative.", translation: "demais" },
        { topic: "Context", term: "enough-limit", definition: "Indicates the sufficient or necessary amount.", translation: "o suficiente / o bastante" },
        { topic: "Context", term: "shake-hands", definition: "A common gesture for greeting or agreement.", translation: "apertar as mãos" },
        { topic: "Context", term: "considered-passive", definition: "When a behavior is viewed in a certain way by society.", translation: "é considerado" },
        { topic: "Context", term: "polite", definition: "Having or showing behavior that is respectful.", translation: "educado / polido" },
        { topic: "Context", term: "delicious", definition: "Highly pleasant to the taste.", translation: "delicioso" },
        { topic: "Context", term: "gesture", definition: "A movement of part of the body to express an idea or meaning.", translation: "gesto" },

        // PAGE 2: CULTURE & ELEMENTS
        { topic: "Culture", term: "culture", definition: "Ideas, customs, and social behavior of a group.", translation: "cultura" },
        { topic: "Culture", term: "habit-custom", definition: "A regular practice or routine behavior.", translation: "hábito / costume" },
        { topic: "Culture", term: "tradition", definition: "Transmission of customs through generations.", translation: "tradição" },
        { topic: "Culture", term: "cuisine", definition: "A specific style or method of cooking.", translation: "culinária" },
        { topic: "Culture", term: "religion", definition: "Belief in and worship of a higher power.", translation: "religião" },
        { topic: "Culture", term: "belief", definition: "Acceptance that a statement is true.", translation: "crença" },
        { topic: "Culture", term: "festival", definition: "A day or period of celebration.", translation: "festival / feriado" },
        { topic: "Culture", term: "prejudice", definition: "Unfair opinion formed without facts.", translation: "preconceito" },
        { topic: "Culture", term: "culture-shock", definition: "Feeling confused in a new country.", translation: "choque cultural" },

        // PAGE 3: GESTURES & ACTIONS
        { topic: "Gestures", term: "to-nod", definition: "Moving head up and down for 'yes'.", translation: "acenar com a cabeça (sim)" },
        { topic: "Gestures", term: "to-shake-head", definition: "Moving head side to side for 'no'.", translation: "balançar a cabeça (não)" },
        { topic: "Gestures", term: "to-wave", definition: "Moving hand to say hello or goodbye.", translation: "acenar / dar tchau" },
        { topic: "Gestures", term: "to-hug", definition: "Squeezing someone with arms for affection.", translation: "abraçar" },
        { topic: "Gestures", term: "to-point", definition: "Directing attention with a finger.", translation: "apontar" },
        { topic: "Gestures", term: "thumbs-up", definition: "Gesture showing approval.", translation: "joia / polegar para cima" },
        { topic: "Gestures", term: "to-bow", definition: "Bending forward to show respect.", translation: "curvar-se / reverenciar" },
        { topic: "Gestures", term: "make-effort", definition: "To try hard to do something.", translation: "fazer um esforço" },

        // PAGE 4: PASSIVE VOICE & VERBS
        { topic: "Passive & Verbs", term: "passive-voice", definition: "Grammar focus on the object/action, not the person.", translation: "voz passiva" },
        { topic: "Passive & Verbs", term: "built", definition: "Past participle of 'build'.", translation: "construído" },
        { topic: "Passive & Verbs", term: "written", definition: "Past participle of 'write'.", translation: "escrito" },
        { topic: "Passive & Verbs", term: "taught", definition: "Past participle of 'teach'.", translation: "ensinado" },
        { topic: "Passive & Verbs", term: "given", definition: "Past participle of 'give'.", translation: "dado" },
        { topic: "Passive & Verbs", term: "made", definition: "Past participle of 'make'.", translation: "feito" },
        { topic: "Passive & Verbs", term: "spoken", definition: "Past participle of 'speak'.", translation: "falado" },

        // PAGE 5: GRAMMAR (Used to / Limits)
        { topic: "Grammar", term: "used-to", definition: "Past habits that are no longer true.", translation: "costumava" },
        { topic: "Grammar", term: "too", definition: "More than necessary (negative).", translation: "demais" },
        { topic: "Grammar", term: "enough", definition: "The necessary amount.", translation: "suficiente / o bastante" },
        { topic: "Grammar", term: "too-difficult", definition: "Harder than one can manage.", translation: "difícil demais" },
        { topic: "Grammar", term: "old-enough", definition: "Reached the required age.", translation: "idade suficiente" }
    ]
});