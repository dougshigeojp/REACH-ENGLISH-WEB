/**
 * REACH English - Lesson Data: 6-1-1
 * Topic: Children all over the world / Introductions
 */

window.initLesson({
    lessonId: "6-1-1",
    grade: "6th Grade",
    bimester: "1",
    chapter: "1",
    chapterTitle: "Children all over the world",
    
    // --- STEPS 0-9 ---
    steps: [
        // STEP 0: UNIT COVER
        {
            title: "Unit Cover",
            objectives: "In this lesson, you will learn to:<br>• Introduce yourself and meet new people.<br>• Count from 1 to 100.<br>• Say where you are from and your nationality.<br>• Use the verb 'To Be' to describe things and people.<br>• Ask basic questions with Who, What, Where, and How old.",
            welcome: "Hello, my friend! I'm Mr. D!<br><br>Welcome to your very first English adventure! Today, we are going to open the door to a whole new world. You will learn how to make friends from all over the globe, say who you are, and even count all the way to 100!<br><br>It’s going to be super fun. Let's get started!",
            audio: {
                objectives: "audio/6-1-1/p0_objectives.mp3",
                welcome: "audio/6-1-1/p0_welcome.mp3"
            }
        },

        // STEP 1: WHAT'S UP TODAY?
        {
            title: "What’s up today?",
            context: "(Sound of a school bell ringing and students chatting in the hallway. Albert sees a new face near the lockers.)",
            contextAudio: "audio/6-1-1/p1_context.mp3",
            dialogue: [
                { speaker: "Albert", text: "[Hello](tooltip:hello)! [Nice to meet you](tooltip:nice-to-meet-you). I [am](tooltip:to-be) Albert." },
                { speaker: "Celine", text: "Hi! Nice to meet you, too. My [name](tooltip:name) is Celine." },
                { speaker: "Albert", text: "Welcome to REACH school! [Where](tooltip:where) are you [from](tooltip:from)?" },
                { speaker: "Celine", text: "I am from [Australia](tooltip:australia). I am [Australian](tooltip:australian). And you?" },
                { speaker: "Albert", text: "Cool! I am from [Canada](tooltip:canada). I am [Canadian](tooltip:canadian)." },
                { speaker: "Celine", text: "Wow! A [friend](tooltip:friend) from Canada! [How old](tooltip:how-old) are you?" },
                { speaker: "Albert", text: "I am [fourteen](tooltip:fourteen) [years old](tooltip:years-old). And you?" },
                { speaker: "Celine", text: "I am [fifteen](tooltip:fifteen). (Sound of the class bell ringing). Oh! Are you [ready](tooltip:ready) for class?" },
                { speaker: "Albert", text: "Yes! [We](tooltip:we) are ready! Let's go." }
            ]
        },

        // STEP 2: SAY THE WORD
        {
            title: "Say the word",
            audio2b: "audio/6-1-1/p2b_examples.mp3", 
            subPages: [
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],
            // 2A Content
            areas: [
                {
                    title: "Verbs",
                    audio: "audio/6-1-1/p2a_verbs.mp3",
                    items: [
                        { term: "To be", trans: "ser / estar" },
                        { term: "Meet", trans: "conhecer / encontrar" }
                    ]
                },
                {
                    title: "Vocabularies",
                    audio: "audio/6-1-1/p2a_vocab.mp3",
                    items: [
                        { term: "Children", trans: "crianças" },
                        { term: "People", trans: "pessoas" },
                        { term: "World", trans: "mundo" },
                        { term: "Student", trans: "estudante" },
                        { term: "Friend", trans: "amigo(a)" },
                        { term: "Teacher", trans: "professor(a)" },
                        { term: "Name", trans: "nome" },
                        { term: "Cat", trans: "gato" },
                        { term: "Dog", trans: "cachorro" },
                        { term: "Book", trans: "livro" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "audio/6-1-1/p2a_phrases.mp3",
                    items: [
                        { term: "Nice to meet you", trans: "Prazer em conhecer você." },
                        { term: "My name is...", trans: "Meu nome é..." },
                        { term: "How are you?", trans: "Como você está?" },
                        { term: "I am fine, thanks", trans: "Eu estou bem, obrigado(a)." },
                        { term: "Where are you from?", trans: "De onde você é?" },
                        { term: "I am from...", trans: "Eu sou de..." },
                        { term: "... years old", trans: "... anos de idade." },
                        { term: "Hello! / Hi!", trans: "Olá! / Oi!" },
                        { term: "Goodbye / Bye!", trans: "Adeus / Tchau!" }
                    ]
                },
                {
                    title: "Countries & Nationalities",
                    audio: "audio/6-1-1/p2a_countries.mp3",
                    items: [
                        { term: "Brazil - Brazilian", trans: "Brasil - Brasileiro(a)" },
                        { term: "USA - American", trans: "EUA - Americano(a)" },
                        { term: "England - English", trans: "Inglaterra - Inglês(a)" },
                        { term: "France - French", trans: "França - Francês(a)" },
                        { term: "Canada - Canadian", trans: "Canadá - Canadense" },
                        { term: "Germany - German", trans: "Alemanha - Alemão(ã)" },
                        { term: "China - Chinese", trans: "China - Chinês(a)" },
                        { term: "Japan - Japanese", trans: "Japão - Japonês(a)" },
                        { term: "Spain - Spanish", trans: "Espanha - Espanhol(a)" },
                        { term: "Italy - Italian", trans: "Itália - Italiano(a)" }
                    ]
                },
                {
                    title: "Numbers (1-100)",
                    audio: "audio/6-1-1/p2a_numbers.mp3",
                    items: [
                        { term: "1-10", trans: "One to Ten (Um a Dez)" },
                        { term: "11-20", trans: "Eleven to Twenty (Onze a Vinte)" },
                        { term: "Tens (30-90)", trans: "Thirty to Ninety (Trinta a Noventa)" },
                        { term: "100", trans: "One hundred (Cem)" }
                    ]
                },
                {
                    title: "Subject Pronouns",
                    audio: "audio/6-1-1/p2a_pronouns.mp3",
                    items: [
                        { term: "I", trans: "Eu" },
                        { term: "You", trans: "Você / Vocês" },
                        { term: "He", trans: "Ele" },
                        { term: "She", trans: "Ela" },
                        { term: "It", trans: "Ele/Ela (coisas/animais)" },
                        { term: "We", trans: "Nós" },
                        { term: "They", trans: "Eles / Elas" }
                    ]
                }
            ],
            // 2B Content
            examples: [
                { term: "To be", sent: "I am happy today.", trans: "Eu estou feliz hoje." },
                { term: "Meet", sent: "I want to meet my new neighbors.", trans: "Eu quero conhecer meus novos vizinhos." },
                { term: "Children", sent: "The children are playing.", trans: "As crianças estão brincando." },
                { term: "People", sent: "People are nice here.", trans: "As pessoas são legais aqui." },
                { term: "World", sent: "We live in a big world.", trans: "Nós vivemos em um mundo grande." },
                { term: "Student", sent: "She is a good student.", trans: "Ela é uma boa estudante." },
                { term: "Friend", sent: "Albert is my friend.", trans: "Albert é meu amigo." },
                { term: "Teacher", sent: "This is our teacher.", trans: "Esta é nossa professora." },
                { term: "Name", sent: "My name is Celine.", trans: "Meu nome é Celine." },
                { term: "Cat", sent: "The cat is small.", trans: "O gato é pequeno." },
                { term: "Dog", sent: "The dog is happy.", trans: "O cachorro está feliz." },
                { term: "Book", sent: "This is my English book.", trans: "Este é meu livro de inglês." },
                { term: "Nice to meet you", sent: "Nice to meet you, Albert!", trans: "Prazer em conhecer você, Albert!" },
                { term: "My name is", sent: "My name is Mr. D.", trans: "Meu nome é Sr. D." },
                { term: "How are you?", sent: "How are you? I am good.", trans: "Como você está? Eu estou bem." },
                { term: "I am fine, thanks", sent: "I am fine, thanks. And you?", trans: "Eu estou bem, obrigado. E você?" },
                { term: "Where are you from?", sent: "Where are you from? Brazil.", trans: "De onde você é? Brasil." },
                { term: "I am from...", sent: "I am from Japan.", trans: "Eu sou do Japão." },
                { term: "... years old", sent: "I am 12 years old.", trans: "Eu tenho 12 anos de idade." },
                { term: "Hello! / Hi!", sent: "Hello! Are you new?", trans: "Olá! Você é novo?" },
                { term: "Goodbye / Bye!", sent: "Goodbye! See you tomorrow.", trans: "Tchau! Vejo você amanhã." },
                { term: "Brazil - Brazilian", sent: "He is from Brazil. He is Brazilian.", trans: "Ele é do Brasil. Ele é brasileiro." },
                { term: "USA - American", sent: "She is from the USA. She is American.", trans: "Ela é dos EUA. Ela é americana." },
                { term: "1-100", sent: "I have ten pens. / She is twenty years old.", trans: "Eu tenho dez canetas. / Ela tem vinte anos." },
                { term: "Subject Pronouns", sent: "She is my sister. We are family.", trans: "Ela é minha irmã. Nós somos família." }
            ],
            // 2C Content (Drills)
            drills: [
                { type: "mcq", q: "Choose the correct translation for 'Meet'.", options: [ {t:"Ser", c:false}, {t:"Estar", c:false}, {t:"Conhecer/Encontrar", c:true}, {t:"Falar", c:false} ] },
                { type: "mcq", q: "Complete the sentence: 'I ____ a student.'", options: [ {t:"is", c:false}, {t:"are", c:false}, {t:"am", c:true}, {t:"be", c:false} ] },
                { type: "mcq", q: "Complete the sentence: 'Mrs. Canales is a _______.'", options: [ {t:"world", c:false}, {t:"number", c:false}, {t:"teacher", c:true}, {t:"country", c:false} ] },
                { type: "mcq", q: "Which word corresponds to the image of 'a person who learns at school'?", options: [ {t:"Teacher", c:false}, {t:"Student", c:true}, {t:"Book", c:false}, {t:"Dog", c:false} ] },
                { type: "mcq", q: "What is the answer to 'How are you?'", options: [ {t:"I am from Brazil.", c:false}, {t:"I am fine, thanks.", c:true}, {t:"Nice to meet you.", c:false}, {t:"My name is Albert.", c:false} ] },
                { type: "mcq", q: "Complete: 'Where _____ you from?'", options: [ {t:"is", c:false}, {t:"am", c:false}, {t:"are", c:true}, {t:"be", c:false} ] },
                { type: "mcq", q: "If I am from France, I am...", options: [ {t:"Spanish", c:false}, {t:"German", c:false}, {t:"French", c:true}, {t:"English", c:false} ] },
                { type: "mcq", q: "He is from China. He is...", options: [ {t:"Chinese", c:true}, {t:"Japanese", c:false}, {t:"American", c:false}, {t:"Canadian", c:false} ] },
                { type: "mcq", q: "What is the number after nineteen?", options: [ {t:"Eighteen", c:false}, {t:"Twenty", c:true}, {t:"Thirty", c:false}, {t:"Twelve", c:false} ] },
                { type: "mcq", q: "Choose the number 'Fifty'.", options: [ {t:"15", c:false}, {t:"50", c:true}, {t:"5", c:false}, {t:"150", c:false} ] },
                { type: "mcq", q: "Choose the correct pronoun for 'Albert and Celine'.", options: [ {t:"He", c:false}, {t:"We", c:false}, {t:"They", c:true}, {t:"She", c:false} ] },
                { type: "mcq", q: "Choose the correct pronoun for 'Mrs. Canales'.", options: [ {t:"He", c:false}, {t:"It", c:false}, {t:"They", c:false}, {t:"She", c:true} ] }
            ]
        },

        // STEP 3: FOLLOW THE PATTERN
        {
            title: "Follow the Pattern",
            audio3b: "audio/6-1-1/p3b_dialogues.mp3", 
            subPages: [
                { id: "step3a", label: "3A: New Patterns" },
                { id: "step3b", label: "3B: Examples" },
                { id: "step3c", label: "3C: Practice" }
            ],
            // 3A Content
            patterns: [
                {
                    title: "Subject Pronouns",
                    explanation: "Subject pronouns replace names to avoid repetition. They tell us who is doing the action. (<i>Pronomes sujeitos substituem nomes para evitar repetição. Eles nos dizem quem está fazendo a ação.</i>)",
                    samples: [
                        { en: "I (Eu)", pt: "Used for yourself." },
                        { en: "You (Você/Vocês)", pt: "Used for the person or people you are talking to." },
                        { en: "He (Ele)", pt: "Used for a boy or man." },
                        { en: "She (Ela)", pt: "Used for a girl or woman." },
                        { en: "It (Ele/Ela/Isto)", pt: "Used for an object or animal." },
                        { en: "We (Nós)", pt: "Used for yourself and others together." },
                        { en: "They (Eles/Elas)", pt: "Used for a group of people or things." },
                        { en: "Example: She is my friend.", pt: "Ela é minha amiga." }
                    ]
                },
                {
                    title: "Verb 'To Be' - Affirmative",
                    explanation: "We use the verb 'to be' (am, is, are) to describe people, things, and say where we are from. (<i>Usamos o verbo 'to be' para descrever pessoas, coisas e dizer de onde somos.</i>)",
                    samples: [
                        { en: "I am Mr. D.", pt: "Eu sou o Sr. D." },
                        { en: "He is from Canada.", pt: "Ele é do Canadá." },
                        { en: "She is Australian.", pt: "Ela é australiana." },
                        { en: "It is a book.", pt: "Isto é um livro." },
                        { en: "We are students.", pt: "Nós somos estudantes." },
                        { en: "Example: Albert is fourteen.", pt: "Albert tem quatorze anos." }
                    ]
                },
                {
                    title: "Verb 'To Be' - Negative",
                    explanation: "To make a sentence negative, we simply add <b>not</b> after the verb 'to be'. (<i>Para fazer uma frase negativa, adicionamos 'not' depois do verbo.</i>)",
                    samples: [
                        { en: "I am not sad.", pt: "Eu não estou triste." },
                        { en: "You are not / aren't late.", pt: "Você não está atrasado." },
                        { en: "He is not / isn't American.", pt: "Ele não é americano." },
                        { en: "Example: She is not American.", pt: "Ela não é americana." }
                    ]
                },
                {
                    title: "Verb 'To Be' - Interrogative",
                    explanation: "To ask questions, we switch the order: The verb comes <b>before</b> the subject. (<i>Para perguntar, trocamos a ordem: o verbo vem antes do sujeito.</i>)",
                    samples: [
                        { en: "Am I late?", pt: "Eu estou atrasado?" },
                        { en: "Are you Celine?", pt: "Você é a Celine?" },
                        { en: "Is he Albert?", pt: "Ele é o Albert?" },
                        { en: "Example: Are you a student?", pt: "Você é um estudante?" }
                    ]
                },
                {
                    title: "WH Questions (What, Who, Where, How old)",
                    explanation: "We use these words to ask for specific information. (<i>Usamos estas palavras para pedir informações específicas.</i>)",
                    samples: [
                        { en: "What is your name?", pt: "Qual é o seu nome?" },
                        { en: "Who is that?", pt: "Quem é aquele?" },
                        { en: "Where are you from?", pt: "De onde você é?" },
                        { en: "How old are you?", pt: "Quantos anos você tem?" },
                        { en: "Example: Where is he from?", pt: "De onde ele é?" }
                    ]
                }
            ],
            // 3B Content
            dialogueExamples: [
                { speaker: "Albert", text: "Look at Mrs. Canales. **She** is nice.", pt: "Olhe para a Sra. Canales. Ela é legal." },
                { speaker: "Celine", text: "Yes, **she** is a great teacher.", pt: "Sim, ela é uma ótima professora." },
                { speaker: "Albert", text: "I **am** from Canada.", pt: "Eu sou do Canadá." },
                { speaker: "Celine", text: "That is cool! We **are** students here.", pt: "Isso é legal! Nós somos estudantes aqui." },
                { speaker: "Albert", text: "Is he the teacher?", pt: "Ele é o professor?" },
                { speaker: "Celine", text: "No, he **is not**. He is a student.", pt: "Não, ele não é. Ele é um estudante." },
                { speaker: "Celine", text: "Are you happy today?", pt: "Você está feliz hoje?" },
                { speaker: "Albert", text: "Yes, I am! Is it time for lunch?", pt: "Sim, eu estou! É hora do almoço?" },
                { speaker: "Albert", text: "Where are you from, Celine?", pt: "De onde você é, Celine?" },
                { speaker: "Celine", text: "I am from Australia. How old are you?", pt: "Eu sou da Austrália. Quantos anos você tem?" }
            ],
            // 3C Content
            grammarDrills: [
                { type: "mcq", q: "Choose the correct pronoun for the underlined word: '<u>Mrs. Canales</u> is a teacher.'", options: [ {t:"He", c:false}, {t:"She", c:true}, {t:"It", c:false}, {t:"They", c:false} ] },
                { type: "mcq", q: "Choose the correct pronoun for: '<u>Albert and Celine</u> are friends.'", options: [ {t:"We", c:true}, {t:"They", c:false}, {t:"You", c:false}, {t:"She", c:false} ] },
                { type: "mcq", q: "Choose the correct pronoun for: '<u>The sky</u> is blue.'", options: [ {t:"He", c:false}, {t:"She", c:false}, {t:"It", c:true}, {t:"They", c:false} ] },
                { type: "mcq", q: "Choose the correct pronoun for: '<u>The students</u> are here.'", options: [ {t:"We", c:false}, {t:"He", c:false}, {t:"She", c:false}, {t:"They", c:true} ] },
                { type: "mcq", q: "Complete: 'I _____ from Brazil.'", options: [ {t:"is", c:false}, {t:"am", c:true}, {t:"are", c:false}, {t:"be", c:false} ] },
                { type: "mcq", q: "Complete: 'Celine _____ Australian.'", options: [ {t:"am", c:false}, {t:"are", c:false}, {t:"is", c:true}, {t:"be", c:false} ] },
                { type: "mcq", q: "Complete: 'We _____ ready for class.'", options: [ {t:"is", c:false}, {t:"am", c:false}, {t:"are", c:true}, {t:"be", c:false} ] },
                { type: "mcq", q: "Complete: 'Mr. D _____ very funny.'", options: [ {t:"is", c:true}, {t:"are", c:false}, {t:"am", c:false}, {t:"be", c:false} ] },
                { type: "mcq", q: "Choose the correct negative sentence for 'I am a teacher.'", options: [ {t:"I is not a teacher.", c:false}, {t:"I are not a teacher.", c:false}, {t:"I am not a teacher.", c:true}, {t:"I be not a teacher.", c:false} ] },
                { type: "mcq", q: "Choose the correct negative for 'They are from England.'", options: [ {t:"They is not from England.", c:false}, {t:"They am not from England.", c:false}, {t:"They aren't from England.", c:true}, {t:"They isn't from England.", c:false} ] },
                { type: "mcq", q: "Choose the correct negative for 'Albert is 15 years old.'", options: [ {t:"Albert aren't 15.", c:false}, {t:"Albert isn't 15.", c:true}, {t:"Albert am not 15.", c:false}, {t:"Albert not is 15.", c:false} ] },
                { type: "mcq", q: "Choose the correct negative for 'You are sad today.'", options: [ {t:"You isn't sad.", c:false}, {t:"You am not sad.", c:false}, {t:"You aren't sad.", c:true}, {t:"You not sad.", c:false} ] },
                { type: "mcq", q: "Choose the correct question order: (he / from / Is / China?)", options: [ {t:"He is from China?", c:false}, {t:"Is from he China?", c:false}, {t:"Is he from China?", c:true}, {t:"From is he China?", c:false} ] },
                { type: "mcq", q: "Choose the correct question order: (you / Are / a student?)", options: [ {t:"You are a student?", c:false}, {t:"Are you a student?", c:true}, {t:"Student a you are?", c:false}, {t:"Is you a student?", c:false} ] },
                { type: "mcq", q: "Choose the correct question order: (they / nice / Are?)", options: [ {t:"Are they nice?", c:true}, {t:"They are nice?", c:false}, {t:"Is they nice?", c:false}, {t:"Nice they are?", c:false} ] },
                { type: "mcq", q: "Choose the correct question order: (I / right / Am?)", options: [ {t:"I am right?", c:false}, {t:"Am I right?", c:true}, {t:"Are I right?", c:false}, {t:"Right am I?", c:false} ] },
                { type: "mcq", q: "Match the WH word: '_______ is your name?' (My name is Sara.)", options: [ {t:"Who", c:false}, {t:"What", c:true}, {t:"Where", c:false}, {t:"How old", c:false} ] },
                { type: "mcq", q: "Match the WH word: '_______ is he?' (He is my friend.)", options: [ {t:"What", c:false}, {t:"Who", c:true}, {t:"Where", c:false}, {t:"How old", c:false} ] },
                { type: "mcq", q: "Match the WH word: '_______ are you from?' (I am from Italy.)", options: [ {t:"What", c:false}, {t:"Who", c:false}, {t:"Where", c:true}, {t:"How old", c:false} ] },
                { type: "mcq", q: "Match the WH word: '_______ are you?' (I am 12.)", options: [ {t:"What", c:false}, {t:"Who", c:false}, {t:"Where", c:false}, {t:"How old", c:true} ] }
            ]
        },

        // STEP 4: CAN YOU SAY THAT AGAIN?
        {
            title: "Can you say that again?",
            sentences: [
                { text: "Hello! I am Albert.", audio: "audio/6-1-1/p4_shadow_0.mp3", arrow: "↘", trans: "Olá! Eu sou o Albert." },
                { text: "Nice to meet you.", audio: "audio/6-1-1/p4_shadow_1.mp3", arrow: "↘", trans: "Prazer em conhecer você." },
                { text: "Where are you from?", audio: "audio/6-1-1/p4_shadow_2.mp3", arrow: "↘", trans: "De onde você é?" },
                { text: "I am from Australia.", audio: "audio/6-1-1/p4_shadow_3.mp3", arrow: "↘", trans: "Eu sou da Austrália." },
                { text: "Are you a student?", audio: "audio/6-1-1/p4_shadow_4.mp3", arrow: "↗", trans: "Você é um estudante?" },
                { text: "Yes, I am.", audio: "audio/6-1-1/p4_shadow_5.mp3", arrow: "↘", trans: "Sim, eu sou." },
                { text: "This is my mother.", audio: "audio/6-1-1/p4_shadow_6.mp3", arrow: "↘", trans: "Esta é minha mãe." },
                { text: "That is my father.", audio: "audio/6-1-1/p4_shadow_7.mp3", arrow: "↘", trans: "Aquele é meu pai." },
                { text: "What does he do?", audio: "audio/6-1-1/p4_shadow_8.mp3", arrow: "↘", trans: "O que ele faz?" },
                { text: "He is a firefighter.", audio: "audio/6-1-1/p4_shadow_9.mp3", arrow: "↘", trans: "Ele é bombeiro." },
                { text: "These are my sisters.", audio: "audio/6-1-1/p4_shadow_10.mp3", arrow: "↘", trans: "Estas são minhas irmãs." },
                { text: "Those are my friends.", audio: "audio/6-1-1/p4_shadow_11.mp3", arrow: "↘", trans: "Aqueles são meus amigos." }
            ]
        },

        // STEP 5: ARE YOU FOLLOWING ME?
        {
            title: "Are you following me?",
            drills: [
                {
                    type: "typing",
                    instruction: "Listen to Albert and type the missing words. (Ouça Albert e digite as palavras que faltam).",
                    audio: "audio/6-1-1/p5_drill1.mp3",
                    text: "Look at this photo. This is my friend. He is [from] Japan. He is [Japanese]. He is [twelve] years old."
                },
                {
                    type: "dropdown",
                    instruction: "Listen and choose the correct option. (Escolha a opção correta).",
                    audio: "audio/6-1-1/p5_drill2.mp3",
                    questions: [
                        { q: "Mrs. Canales: Hello, [Celine | Albert].", a: "Celine" },
                        { q: "Celine: [Good morning | Goodbye], teacher.", a: "Good morning" },
                        { q: "Mrs. Canales: Are you [ready | sad] for the class?", a: "ready" },
                        { q: "Celine: Yes, I [am | is].", a: "am" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer. (Ouça e escolha a resposta correta).",
                    audio: "audio/6-1-1/p5_drill3.mp3", // "Where are you from?"
                    options: [ {t: "I am fine, thanks.", c: false}, {t: "My name is John.", c: false}, {t: "I am from Brazil.", c: true}, {t: "He is a student.", c: false} ]
                }
            ]
        },

        // STEP 6: GET THE STORY
        {
            title: "Get the story",
            texts: [
                {
                    title: "The New School Year (Text 1)",
                    body: "Today is the first day at REACH school. Albert is a student. He is fourteen years old. He is from Canada. He is very happy. He meets a new friend. Her name is Celine. She is from Australia. She is fifteen years old. Mrs. Canales is the teacher. She is American. Everyone is ready for a great year!",
                    questions: [
                        { q: "Where is Albert from?", options: [ {t:"Australia", c:false}, {t:"Canada", c:true}, {t:"USA", c:false}, {t:"Brazil", c:false} ] },
                        { q: "How old is Celine?", options: [ {t:"12", c:false}, {t:"14", c:false}, {t:"15", c:true}, {t:"100", c:false} ] },
                        { q: "Who is the teacher?", options: [ {t:"Albert", c:false}, {t:"Celine", c:false}, {t:"Mr. D", c:false}, {t:"Mrs. Canales", c:true} ] }
                    ]
                },
                {
                    title: "In the Library (Text 2)",
                    body: "Celine: Hello, Albert! <br> Albert: Hi, Celine. Look, this is a book about Brazil. <br> Celine: Wow! Brazil is a big country. <br> Albert: Yes, it is. Are you Brazilian? <br> Celine: No, I am not. I am Australian. But I like Brazil. <br> Albert: Me too! We are friends of the world.",
                    questions: [
                        { q: "What object are they looking at?", options: [ {t:"A map", c:false}, {t:"A book", c:true}, {t:"A cat", c:false}, {t:"A pen", c:false} ] },
                        { q: "Is Celine Brazilian?", options: [ {t:"Yes, she is.", c:false}, {t:"No, she is Australian.", c:true}, {t:"No, she is Canadian.", c:false}, {t:"Yes, she is from Brazil.", c:false} ] },
                        { q: "What does Albert say they are?", options: [ {t:"Teachers", c:false}, {t:"Friends of the world", c:true}, {t:"Sad", c:false}, {t:"From Brazil", c:false} ] }
                    ]
                },
                {
                    title: "My Friend John (Text 3)",
                    body: "This is my friend. His name is John. He is a good student. He is twelve years old. John is from England. He is English. His favorite book is blue. He is not sad; he is very excited today. We are in the same class.",
                    questions: [
                        { q: "Where is John from?", options: [ {t:"England", c:true}, {t:"France", c:false}, {t:"Spain", c:false}, {t:"China", c:false} ] },
                        { q: "Is John a teacher?", options: [ {t:"Yes, he is.", c:false}, {t:"No, he is a student.", c:true}, {t:"He is twelve.", c:false}, {t:"He is sad.", c:false} ] },
                        { q: "How is John feeling?", options: [ {t:"Sad", c:false}, {t:"Tired", c:false}, {t:"Excited", c:true}, {t:"Angry", c:false} ] }
                    ]
                }
            ]
        },

        // STEP 7: MONKEY SEE, MONKEY DO
        {
            title: "Monkey see, Monkey do",
            drills: [
                {
                    type: "matching",
                    instruction: "Match the country on the left with the correct nationality on the right. (Combine o país com a nacionalidade).",
                    pairs: [
                        { left: "France", right: "French", val: "1" },
                        { left: "China", right: "Chinese", val: "2" },
                        { left: "Italy", right: "Italian", val: "3" },
                        { left: "Germany", right: "German", val: "4" }
                    ]
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence. (Coloque as palavras na ordem correta).",
                    sentence: "is / name / My / Albert.",
                    correct: "My name is Albert."
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the question. (Coloque a pergunta na ordem correta).",
                    sentence: "you / from / Where / are / ?",
                    correct: "Where are you from ?"
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group. (Escolha a palavra que não pertence ao grupo).",
                    options: [ {t:"Teacher", c:false}, {t:"Student", c:false}, {t:"Book", c:false}, {t:"One", c:true} ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Which one is NOT a country? (Qual não é um país?).",
                    options: [ {t:"Brazil", c:false}, {t:"Spain", c:false}, {t:"Japanese", c:true}, {t:"Italy", c:false} ]
                },
                {
                    type: "memory-game",
                    instruction: "Memory Game: Match the English and Portuguese words. (Jogo da Memória: Combine as palavras em inglês com suas respectivas em português).",
                    cards: [
                        { match: "1", text: "Mother" }, { match: "1", text: "Mãe" },
                        { match: "2", text: "Firefighter" }, { match: "2", text: "Bombeiro" },
                        { match: "3", text: "Uncle" }, { match: "3", text: "Tio" },
                        { match: "4", text: "Nurse" }, { match: "4", text: "Enfermeira" }
                    ]
                },
                {
                    type: "word-order",
                    instruction: "Unscramble: (a / is / She / doctor).",
                    sentence: "a / is / She / doctor.",
                    correct: "She is a doctor."
                }
            ]
        },

        // STEP 8: TELL YOUR STORY
        {
            title: "Tell your story",
            instruction: "Language Island: Write a short introduction about three people in your family (or friends). (Agora é a sua vez! Escreva sobre três pessoas da sua família ou amigos).",
            example: "This is my family. My mother is Ana. She is a teacher. My father is Carlos. He is a bus driver. This is my brother. He is a student. I love my family!",
            prompts: ["Who are they? (This is my...)", "What are their names? (His/Her name is...)", "What do they do? (He/She is a...)"]
        },

        // STEP 9: WRAP IT UP
        {
            title: "Wrap it up",
            items: [
                { term: "To be", definition: "ser / estar", example: "I am happy today." },
                { term: "Meet", definition: "conhecer / encontrar", example: "Nice to meet you." },
                { term: "Children", definition: "crianças", example: "The children are playing." },
                { term: "People", definition: "pessoas", example: "People are nice here." },
                { term: "World", definition: "mundo", example: "We live in a big world." },
                { term: "Student", definition: "estudante", example: "She is a good student." },
                { term: "Friend", definition: "amigo(a)", example: "Albert is my friend." },
                { term: "Teacher", definition: "professor(a)", example: "Mrs. Canales is our teacher." },
                { term: "Name", definition: "nome", example: "My name is Celine." },
                { term: "Cat", definition: "gato", example: "The cat is small." },
                { term: "Dog", definition: "cachorro", example: "The dog is happy." },
                { term: "Book", definition: "livro", example: "This is my English book." },
                { term: "Brazil", definition: "Brasil", example: "I am from Brazil." },
                { term: "USA", definition: "EUA", example: "She is from the USA." },
                { term: "Fourteen", definition: "14", example: "I am fourteen years old." },
                { term: "Fifteen", definition: "15", example: "I am fifteen years old." }
            ]
        }
    ],

    // --- UNIT GLOSSARY ---
    glossary: [
        { term: "Hello", definition: "A common greeting used to say hi. (Olá)" },
        { term: "Nice-to-meet-you", definition: "A polite phrase used when meeting someone for the first time. (Prazer em conhecer você)" },
        { term: "To-be", definition: "The most important verb in English, used to describe states, identity, and origin. (ser / estar)" },
        { term: "Name", definition: "A word or set of words by which a person, animal, place, or thing is known. (nome)" },
        { term: "Where", definition: "Question word used to ask about a place. (Onde)" },
        { term: "From", definition: "Used to indicate the point in space at which a journey or action starts. (De / Origem)" },
        { term: "Australia", definition: "A country and continent in the Oceania region." },
        { term: "Australian", definition: "A person from Australia." },
        { term: "Canada", definition: "A country in North America." },
        { term: "Canadian", definition: "A person from Canada." },
        { term: "Friend", definition: "A person whom one knows and with whom one has a bond of mutual affection. (amigo)" },
        { term: "How-old", definition: "Question used to ask about age. (Quantos anos)" },
        { term: "Fourteen", definition: "The number 14." },
        { term: "Fifteen", definition: "The number 15." },
        { term: "Years-old", definition: "Used to express age. (anos de idade)" },
        { term: "Ready", definition: "In a suitable state for an activity or situation. (Pronto/a)" },
        { term: "We", definition: "Subject pronoun used for yourself and others together. (Nós)" },
        { term: "Children", definition: "Young people; plural of child. (crianças)" },
        { term: "People", definition: "Human beings in general or considered collectively. (pessoas)" },
        { term: "World", definition: "The earth, together with all of its countries and peoples. (mundo)" },
        { term: "Student", definition: "A person who is studying at a school or college. (estudante)" },
        { term: "Teacher", definition: "A person who teaches, especially in a school. (professor/a)" },
        { term: "Book", definition: "A written or printed work consisting of pages glued or sewn together. (livro)" }
    ]
});