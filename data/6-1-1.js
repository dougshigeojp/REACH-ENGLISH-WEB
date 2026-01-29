/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "6-1-1", 
    grade: "6th Grade",       
    bimester: "1",   
    chapter: "1",    
    chapterTitle: "Welcome and Introductions", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Introduce yourself and meet new people.<br>• Count from 1 to 100.<br>• Say where you are from and your nationality.<br>• Use the verb \"To Be\" to describe things and people.<br>• Ask basic questions with Who, What, Where, and How old.",
            welcome: "Hello, my friend! I'm Mr. D!<br><br>Welcome to your very first English adventure! Today, we are going to open the door to a whole new world. You will learn how to make friends from all over the globe, say who you are, and even count all the way to 100! It’s going to be super fun. Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Introduce yourself and meet new people. Count from 1 to 100. Say where you are from and your nationality. Use the verb To Be to describe things and people. And ask basic questions with Who, What, Where, and How old.",
                welcome: "TTS: Hello, my friend! I'm Mr. D! Welcome to your very first English adventure! Today, we are going to open the door to a whole new world. You will learn how to make friends from all over the globe, say who you are, and even count all the way to 100! It’s going to be super fun. Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT'S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of a school bell ringing and students chatting in the hallway. Albert sees a new face near the lockers.", 
            contextAudio: "audio/6-1-1/step1.mp3",
            dialogue: [
                { speaker: "Albert", text: "Hello! Nice to [meet](tooltip:meet) you. I am Albert." },
                { speaker: "Celine", text: "Hi! Nice to [meet](tooltip:meet) you, too. My [name](tooltip:name) is Celine." },
                { speaker: "Albert", text: "Welcome to REACH school! Where are you from?" },
                { speaker: "Celine", text: "I am from [Australia](tooltip:australia). I am [Australian](tooltip:australian). And you?" },
                { speaker: "Albert", text: "Cool! I am from [Canada](tooltip:canada). I am [Canadian](tooltip:canadian)." },
                { speaker: "Celine", text: "Wow! A [friend](tooltip:friend) from [Canada](tooltip:canada)! [How old are you](tooltip:how-old-are-you)?" },
                { speaker: "Albert", text: "I am [fourteen](tooltip:fourteen) [years old](tooltip:years-old). And you?" },
                { speaker: "Celine", text: "I am [fifteen](tooltip:fifteen). (Sound of the class bell ringing). Oh! Are you [ready](tooltip:ready) for class?" },
                { speaker: "Albert", text: "Yes! We are [ready](tooltip:ready)! Let's go." }
            ]
        },
    

        // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
        // ======================================================
        {
            title: "Say the word",
            audio2b: "TTS: I am happy today. I want to meet my new neighbors. The children are playing. People are nice here. We live in a big world. She is a good student. Albert is my friend. This is our teacher. My name is Celine. The cat is small. The dog is happy. This is my English book. Nice to meet you, Albert! My name is Mr. D. How are you? I am good. I am fine, thanks. And you? Where are you from? Brazil. I am from Japan. I am 12 years old. Hello! Are you new? Goodbye! See you tomorrow. He is from Brazil. He is Brazilian. She is from the USA. She is American. I have ten pens. She is twenty years old. She is my sister. We are family.",
            
            subPages: [
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],

            // 2A: Vocabulary Lists
            areas: [
                {
                    title: "Verbs",
                    audio: "TTS: To be. Meet.",
                    items: [
                        { term: "To be", trans: "ser / estar" },
                        { term: "Meet", trans: "conhecer / encontrar" }
                    ]
                },
                {
                    title: "Vocabularies",
                    audio: "TTS: Children. People. World. Student. Friend. Teacher. Name. Cat. Dog. Book.",
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
                    audio: "TTS: Nice to meet you. My name is... How are you? I am fine, thanks. Where are you from? I am from... years old. Hello! Hi! Goodbye! Bye!",
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
                    audio: "TTS: Brazil, Brazilian. USA, American. England, English. France, French. Canada, Canadian. Germany, German. China, Chinese. Japan, Japanese. Spain, Spanish. Italy, Italian.",
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
                    audio: "TTS: One. Two. Three. Four. Five. Six. Seven. Eight. Nine. Ten. Eleven. Twelve. Thirteen. Fourteen. Fifteen. Sixteen. Seventeen. Eighteen. Nineteen. Twenty. Thirty. Forty. Fifty. Sixty. Seventy. Eighty. Ninety. One hundred.",
                    items: [
                        { term: "1-10", trans: "One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten" },
                        { term: "11-20", trans: "Eleven, Twelve, Thirteen, Fourteen, Fifteen, Sixteen, Seventeen, Eighteen, Nineteen, Twenty" },
                        { term: "Tens (30-90)", trans: "Thirty, Forty, Fifty, Sixty, Seventy, Eighty, Ninety" },
                        { term: "100", trans: "One hundred" }
                    ]
                },
                {
                    title: "Subject Pronouns",
                    audio: "TTS: I. You. He. She. It. We. They.",
                    items: [
                        { term: "I", trans: "Eu (pointing to self)" },
                        { term: "You", trans: "Você / Vocês (pointing to you)" },
                        { term: "He", trans: "Ele (pointing to a boy)" },
                        { term: "She", trans: "Ela (pointing to a girl)" },
                        { term: "It", trans: "Ele/Ela (pointing to an object/animal)" },
                        { term: "We", trans: "Nós (group including self)" },
                        { term: "They", trans: "Eles / Elas (pointing to a group)" }
                    ]
                }
            ],

            // ======================================================
            // 2B: Context Examples (Expanded & Grouped)
            // ======================================================
            exampleGroups: [
                {
                    title: "Verbs",
                    audio: "TTS: I am happy today. I want to meet my new neighbors.",
                    items: [
                        { term: "To be", sent: "I am happy today.", trans: "<span style='color:#0077b6'>Eu estou feliz hoje.</span>" },
                        { term: "Meet", sent: "I want to meet my new neighbors.", trans: "<span style='color:#0077b6'>Eu quero conhecer meus novos vizinhos.</span>" }
                    ]
                },
                {
                    title: "Vocabularies",
                    audio: "TTS: The children are playing. People are nice here. We live in a big world. She is a good student. Albert is my friend. This is our teacher. My name is Celine. The cat is small. The dog is happy. This is my English book.",
                    items: [
                        { term: "Children", sent: "The children are playing.", trans: "<span style='color:#0077b6'>As crianças estão brincando.</span>" },
                        { term: "People", sent: "People are nice here.", trans: "<span style='color:#0077b6'>As pessoas são legais aqui.</span>" },
                        { term: "World", sent: "We live in a big world.", trans: "<span style='color:#0077b6'>Nós vivemos em um mundo grande.</span>" },
                        { term: "Student", sent: "She is a good student.", trans: "<span style='color:#0077b6'>Ela é uma boa estudante.</span>" },
                        { term: "Friend", sent: "Albert is my friend.", trans: "<span style='color:#0077b6'>Albert é meu amigo.</span>" },
                        { term: "Teacher", sent: "This is our teacher.", trans: "<span style='color:#0077b6'>Esta é nossa professora.</span>" },
                        { term: "Name", sent: "My name is Celine.", trans: "<span style='color:#0077b6'>Meu nome é Celine.</span>" },
                        { term: "Cat", sent: "The cat is small.", trans: "<span style='color:#0077b6'>O gato é pequeno.</span>" },
                        { term: "Dog", sent: "The dog is happy.", trans: "<span style='color:#0077b6'>O cachorro está feliz.</span>" },
                        { term: "Book", sent: "This is my English book.", trans: "<span style='color:#0077b6'>Este é meu livro de inglês.</span>" }
                    ]
                },
                {
                    title: "Countries & Nationalities",
                    audio: "TTS: He is from Brazil. He is Brazilian. She is from the USA. She is American. They are from England. They are English. We are from France. We are French. My friend is from Canada. He is Canadian. You are from Germany. You are German. Li is from China. She is Chinese. I am from Japan. I am Japanese. Pedro is from Spain. He is Spanish. Maria is from Italy. She is Italian.",
                    items: [
                        { term: "Brazil", sent: "He is from Brazil. He is Brazilian.", trans: "<span style='color:#0077b6'>Ele é do Brasil. Ele é brasileiro.</span>" },
                        { term: "USA", sent: "She is from the USA. She is American.", trans: "<span style='color:#0077b6'>Ela é dos EUA. Ela é americana.</span>" },
                        { term: "England", sent: "They are from England. They are English.", trans: "<span style='color:#0077b6'>Eles são da Inglaterra. Eles são ingleses.</span>" },
                        { term: "France", sent: "We are from France. We are French.", trans: "<span style='color:#0077b6'>Nós somos da França. Nós somos franceses.</span>" },
                        { term: "Canada", sent: "My friend is from Canada. He is Canadian.", trans: "<span style='color:#0077b6'>Meu amigo é do Canadá. Ele é canadense.</span>" },
                        { term: "Germany", sent: "You are from Germany. You are German.", trans: "<span style='color:#0077b6'>Você é da Alemanha. Você é alemão.</span>" },
                        { term: "China", sent: "Li is from China. She is Chinese.", trans: "<span style='color:#0077b6'>Li é da China. Ela é chinesa.</span>" },
                        { term: "Japan", sent: "I am from Japan. I am Japanese.", trans: "<span style='color:#0077b6'>Eu sou do Japão. Eu sou japonês.</span>" },
                        { term: "Spain", sent: "Pedro is from Spain. He is Spanish.", trans: "<span style='color:#0077b6'>Pedro é da Espanha. Ele é espanhol.</span>" },
                        { term: "Italy", sent: "Maria is from Italy. She is Italian.", trans: "<span style='color:#0077b6'>Maria é da Itália. Ela é italiana.</span>" }
                    ]
                },
                {
                    title: "Numbers & Age",
                    audio: "TTS: I am twelve years old. She is twenty years old. My father is thirty-eight years old. There are forty-four students in class. I have fifty-six books. My house is number seventy-seven. I have one hundred pens.",
                    items: [
                        { term: "12", sent: "I am twelve years old.", trans: "<span style='color:#0077b6'>Eu tenho doze anos de idade.</span>" },
                        { term: "20", sent: "She is twenty years old.", trans: "<span style='color:#0077b6'>Ela tem vinte anos de idade.</span>" },
                        { term: "38", sent: "My father is thirty-eight years old.", trans: "<span style='color:#0077b6'>Meu pai tem trinta e oito anos de idade.</span>" },
                        { term: "44", sent: "There are forty-four students in class.", trans: "<span style='color:#0077b6'>Há quarenta e quatro alunos na aula.</span>" },
                        { term: "56", sent: "I have fifty-six books.", trans: "<span style='color:#0077b6'>Eu tenho cinquenta e seis livros.</span>" },
                        { term: "77", sent: "My house is number seventy-seven.", trans: "<span style='color:#0077b6'>Minha casa é número setenta e sete.</span>" },
                        { term: "100", sent: "I have one hundred pens.", trans: "<span style='color:#0077b6'>Eu tenho cem canetas.</span>" }
                    ]
                },
                {
                    title: "Subject Pronouns",
                    audio: "TTS: I am a student. You are my friend. He is from Canada. She is nice. It is a book. We are ready for class. They are happy.",
                    items: [
                        { term: "I", sent: "I am a student.", trans: "<span style='color:#0077b6'>Eu sou um estudante.</span>" },
                        { term: "You", sent: "You are my friend.", trans: "<span style='color:#0077b6'>Você é meu amigo.</span>" },
                        { term: "He", sent: "He is from Canada.", trans: "<span style='color:#0077b6'>Ele é do Canadá.</span>" },
                        { term: "She", sent: "She is nice.", trans: "<span style='color:#0077b6'>Ela é legal.</span>" },
                        { term: "It", sent: "It is a book.", trans: "<span style='color:#0077b6'>(Ele/Isto) é um livro.</span>" },
                        { term: "We", sent: "We are ready for class.", trans: "<span style='color:#0077b6'>Nós estamos prontos para a aula.</span>" },
                        { term: "They", sent: "They are happy.", trans: "<span style='color:#0077b6'>Eles estão felizes.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills
            drills: [
                { 
                    type: "mcq", 
                    q: "Choose the correct translation for 'Meet':", 
                    options: [ {t: "Ser", c: false}, {t: "Estar", c: false}, {t: "Conhecer/Encontrar", c: true}, {t: "Falar", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete the sentence: 'I ____ a student.'", 
                    options: [ {t: "is", c: false}, {t: "are", c: false}, {t: "am", c: true}, {t: "be", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete the sentence: 'Mrs. Canales is a _______.'", 
                    options: [ {t: "world", c: false}, {t: "number", c: false}, {t: "teacher", c: true}, {t: "country", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Which word corresponds to 'a person who learns at school'?", 
                    options: [ {t: "Teacher", c: false}, {t: "Student", c: true}, {t: "Book", c: false}, {t: "Dog", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "What is the answer to 'How are you?'", 
                    options: [ {t: "I am from Brazil.", c: false}, {t: "I am fine, thanks.", c: true}, {t: "Nice to meet you.", c: false}, {t: "My name is Albert.", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: 'Where _____ you from?'", 
                    options: [ {t: "is", c: false}, {t: "am", c: false}, {t: "are", c: true}, {t: "be", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "If I am from France, I am...", 
                    options: [ {t: "Spanish", c: false}, {t: "German", c: false}, {t: "French", c: true}, {t: "English", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "He is from China. He is...", 
                    options: [ {t: "Chinese", c: true}, {t: "Japanese", c: false}, {t: "American", c: false}, {t: "Canadian", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "What is the number after nineteen?", 
                    options: [ {t: "Eighteen", c: false}, {t: "Twenty", c: true}, {t: "Thirty", c: false}, {t: "Twelve", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the number 'Fifty':", 
                    options: [ {t: "15", c: false}, {t: "50", c: true}, {t: "5", c: false}, {t: "150", c: false} ] 
                }, { 
                    type: "mcq", 
                    q: "Choose the correct word for the number 12:", 
                    options: [ {t: "Twelve", c: true}, {t: "Twenty", c: false}, {t: "Two", c: false}, {t: "Ten", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "How do you write the number 23?", 
                    options: [ {t: "Thirty-two", c: false}, {t: "Twenty-three", c: true}, {t: "Twenty-two", c: false}, {t: "Twelve", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the correct word for 38:", 
                    options: [ {t: "Eighty-three", c: false}, {t: "Thirteen", c: false}, {t: "Thirty-eight", c: true}, {t: "Eighteen", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Select the correct option for 404:", 
                    options: [ {t: "Four hundred and four", c: true}, {t: "Four hundred forty", c: false}, {t: "Four thousand four", c: false}, {t: "Forty-four", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "How do you say the number 60?", 
                    options: [ {t: "Sixteen", c: false}, {t: "Six", c: false}, {t: "Sixty", c: true}, {t: "Forty", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Which word corresponds to 84?", 
                    options: [ {t: "Forty-eight", c: false}, {t: "Eighty-four", c: true}, {t: "Eighteen", c: false}, {t: "Eighty", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the correct word for 140:", 
                    options: [ {t: "One hundred and forty", c: true}, {t: "Forty hundred", c: false}, {t: "One hundred four", c: false}, {t: "Fourteen hundred", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "How do you write 999?", 
                    options: [ {t: "Nine hundred and ninety-nine", c: true}, {t: "Nine hundred nineteen", c: false}, {t: "Nine thousand", c: false}, {t: "Ninety-nine", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Select the correct option for 485:", 
                    options: [ {t: "Four hundred fifty-eight", c: false}, {t: "Eight hundred forty-five", c: false}, {t: "Four hundred and eighty-five", c: true}, {t: "Five hundred eighty-four", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Which word corresponds to 56?", 
                    options: [ {t: "Sixty-five", c: false}, {t: "Fifty-six", c: true}, {t: "Fifteen", c: false}, {t: "Sixteen", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the correct word for 77:", 
                    options: [ {t: "Seventy-seven", c: true}, {t: "Seventeen", c: false}, {t: "Seventy", c: false}, {t: "Eleven", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the correct pronoun for 'Albert and Celine':", 
                    options: [ {t: "He", c: false}, {t: "We", c: false}, {t: "They", c: true}, {t: "She", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the correct pronoun for 'Mrs. Canales':", 
                    options: [ {t: "He", c: false}, {t: "It", c: false}, {t: "They", c: false}, {t: "She", c: true} ] 
                }
            ]
        },

        // ======================================================
        // STEP 3: FOLLOW THE PATTERN (Grammar)
        // ======================================================
        {
            title: "Follow the Pattern",
            audio3b: "",
            
            subPages: [
                { id: "step3a", label: "3A: Patterns" },
                { id: "step3b", label: "3B: Examples" },
                { id: "step3c", label: "3C: Practice" }
            ],

            // ======================================================
            // 3A: Explanations (Tabbed Grammar Boxes)
            // ======================================================
            patterns: [
                {
                    title: "Subject Pronouns",
                    audio: "TTS: I am Albert. You are my friend. He is from Canada. She is nice. It is a book. We are students. They are happy.",
                    explanation: "Subject pronouns replace names to avoid repetition. They tell us who is doing the action.<br><small style='color:#0077b6; font-style:italic;'>(Pronomes sujeitos substituem nomes para evitar repetição. Eles nos dizem quem está fazendo a ação.)</small>",
                    samples: [
                        { en: "I: I am Albert.", pt: "<small style='color:#0077b6'>Eu: Eu sou o Albert.</small>" },
                        { en: "You: You are my friend.", pt: "<small style='color:#0077b6'>Você: Você é meu amigo.</small>" },
                        { en: "He: He is from Canada.", pt: "<small style='color:#0077b6'>Ele: Ele é do Canadá.</small>" },
                        { en: "She: She is nice.", pt: "<small style='color:#0077b6'>Ela: Ela é legal.</small>" },
                        { en: "It: It is a book.", pt: "<small style='color:#0077b6'>Ele/Isto: Isto é um livro.</small>" },
                        { en: "We: We are students.", pt: "<small style='color:#0077b6'>Nós: Nós somos estudantes.</small>" },
                        { en: "They: They are happy.", pt: "<small style='color:#0077b6'>Eles: Eles estão felizes.</small>" }
                    ]

                },
                {
                    title: "Verb 'To Be' - Affirmative",
                    audio: "TTS: I am Mr. D. You are my friend. He is Albert. Celine is Australian. The school is big. Albert and I are happy. They are teachers.",
                    explanation: "We use the verb 'to be' (am, is, are) to describe people, things, and say where we are from.<br><small style='color:#0077b6; font-style:italic;'>(Usamos o verbo 'to be' (am, is, are) para descrever pessoas, coisas e dizer de onde somos.)</small>",
                    samples: [
                        { en: "I am Mr. D.", pt: "<small style='color:#0077b6'>Eu sou o Sr. D.</small>" },
                        { en: "You are my friend.", pt: "<small style='color:#0077b6'>Você é meu amigo.</small>" },
                        { en: "He is Albert.", pt: "<small style='color:#0077b6'>Ele é o Albert.</small>" },
                        { en: "Celine is Australian.", pt: "<small style='color:#0077b6'>Celine é australiana.</small>" },
                        { en: "The school is big.", pt: "<small style='color:#0077b6'>A escola é grande.</small>" },
                        { en: "Albert and I are happy.", pt: "<small style='color:#0077b6'>Albert e eu somos/estamos felizes.</small>" },
                        { en: "They are teachers.", pt: "<small style='color:#0077b6'>Eles são professores.</small>" }
                    ]

                },
                {
                    title: "Verb 'To Be' - Negative",
                    audio: "TTS: I am not sad. You aren't late. He isn't American. Albert isn't the teacher. She isn't from Brazil. Mrs. Canales isn't a student. It isn't a dog. We aren't at home. They aren't sad.",
                    explanation: "To make a sentence negative, we simply add 'not' after the verb 'to be'.<br><small style='color:#0077b6; font-style:italic;'>(Para fazer uma frase negativa, simplesmente adicionamos 'not' depois do verbo 'to be'.)</small>",
                    samples: [
                        { en: "I am not sad.", pt: "<small style='color:#0077b6'>Eu não estou triste.</small>" },
                        { en: "You aren't late.", pt: "<small style='color:#0077b6'>Você não está atrasado(a).</small>" },
                        { en: "He isn't American.", pt: "<small style='color:#0077b6'>Ele não é americano.</small>" },
                        { en: "Albert isn't the teacher.", pt: "<small style='color:#0077b6'>Albert não é o professor.</small>" },
                        { en: "She isn't from Brazil.", pt: "<small style='color:#0077b6'>Ela não é do Brasil.</small>" },
                        { en: "Mrs. Canales isn't a student.", pt: "<small style='color:#0077b6'>Sra. Canales não é uma estudante.</small>" },
                        { en: "It isn't a dog.", pt: "<small style='color:#0077b6'>Não é um cachorro.</small>" },
                        { en: "We aren't at home.", pt: "<small style='color:#0077b6'>Nós não estamos em casa.</small>" },
                        { en: "They aren't sad.", pt: "<small style='color:#0077b6'>Eles não estão tristes.</small>" }
                    ]
                },
                {
                    title: "Verb 'To Be' - Interrogative",
                    audio: "TTS: Am I late? Are you Celine? Is he Albert? Is Mrs. Canales nice? Are they friends? Are you a student?",
                    explanation: "To ask questions, we switch the order: The verb comes before the subject.<br><small style='color:#0077b6; font-style:italic;'>(Para fazer perguntas, trocamos a ordem: O verbo vem antes do sujeito.)</small>",
                    samples: [
                        { en: "Am I late?", pt: "<small style='color:#0077b6'>Eu estou atrasado?</small>" },
                        { en: "Are you Celine?", pt: "<small style='color:#0077b6'>Você é a Celine?</small>" },
                        { en: "Is he Albert?", pt: "<small style='color:#0077b6'>Ele é o Albert?</small>" },
                        { en: "Is Mrs. Canales nice?", pt: "<small style='color:#0077b6'>A Sra. Canales é legal?</small>" },
                        { en: "Are they friends?", pt: "<small style='color:#0077b6'>Eles são amigos?</small>" },
                        { en: "Are you a student?", pt: "<small style='color:#0077b6'>Você é um estudante?</small>" }
                    ]
                },
                {
                    title: "WH Questions",
                    audio: "TTS: What is your name? Who is that? Where are you from? How old are you?",
                    explanation: "We use these words to ask for specific information.<br><small style='color:#0077b6; font-style:italic;'>(Usamos estas palavras para pedir informações específicas.)</small>",
                    samples: [
                        { en: "What", pt: "<small style='color:#0077b6'>O que / Qual</small>" },
                        { en: "What is your name?", pt: "<small style='color:#0077b6'>Qual é o seu nome?</small>" },
                        { en: "Who", pt: "<small style='color:#0077b6'>Quem</small>" },
                        { en: "Who is that?", pt: "<small style='color:#0077b6'>Quem é aquele?</small>" },
                        { en: "Where", pt: "<small style='color:#0077b6'>Onde</small>" },
                        { en: "Where are you from?", pt: "<small style='color:#0077b6'>De onde você é?</small>" },
                        { en: "How old", pt: "<small style='color:#0077b6'>Quantos anos (idade)</small>"},
                        { en: "How old are you?", pt: "<small style='color:#0077b6'>Quantos anos você tem?</small>" }
                    ]
                }
            ],

            // ======================================================
            // 3B: Natural Examples (Dialogues Grouped in Boxes)
            // ======================================================
            dialogueGroups: [
                {
                    title: "Dialogue 1: Subject Pronouns",
                    audio: "audio/6-1-1/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Look at Mrs. Canales. She is nice.", 
                            pt: "<small style='color:#0077b6'>Olhe para a Sra. Canales. Ela é legal.</small>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Yes, she is a great teacher.", 
                            pt: "<small style='color:#0077b6'>Sim, ela é uma ótima professora.</small>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Verb 'To Be' - Affirmative",
                    audio: "audio/6-1-1/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "I am from Canada.", 
                            pt: "<small style='color:#0077b6'>Eu sou do Canadá.</small>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "That is cool! We are students here.", 
                            pt: "<small style='color:#0077b6'>Isso é legal! Nós somos estudantes aqui.</small>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Verb 'To Be' - Negative",
                    audio: "audio/6-1-1/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Is he the teacher?", 
                            pt: "<small style='color:#0077b6'>Ele é o professor?</small>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, he is not. He is a student.", 
                            pt: "<small style='color:#0077b6'>Não, ele não é. Ele é um estudante.</small>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 4: Verb 'To Be' - Interrogative",
                    audio: "audio/6-1-1/step3_dialogue4.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Are you happy today?", 
                            pt: "<small style='color:#0077b6'>Você está feliz hoje?</small>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes, I am! Is it time for lunch?", 
                            pt: "<small style='color:#0077b6'>Sim, eu estou! É hora do almoço?</small>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 5: WH Questions",
                    audio: "audio/6-1-1/step3_dialogue5.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Where are you from, Celine?", 
                            pt: "<small style='color:#0077b6'>De onde você é, Celine?</small>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "I am from Australia. How old are you?", 
                            pt: "<small style='color:#0077b6'>Eu sou da Austrália. Quantos anos você tem?</small>" 
                        }
                    ]
                }
            ],

            // ======================================================
            // 3C: Grammar Practice (Exercises 1-20)
            // ======================================================
            grammarDrills: [
                // Exercise 1: Subject Pronouns
                {
                    type: "mcq",
                    q: "Choose the correct pronoun: '_____ is a teacher.'",
                    options: [ {t: "He", c: false}, {t: "She", c: true}, {t: "It", c: false}, {t: "They", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct pronoun: '_____ are friends.'",
                    options: [ {t: "We", c: true}, {t: "They", c: false}, {t: "You", c: false}, {t: "She", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct pronoun: '_____ is blue.'",
                    options: [ {t: "He", c: false}, {t: "She", c: false}, {t: "It", c: true}, {t: "They", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct pronoun: '_____ are students.'",
                    options: [ {t: "We", c: false}, {t: "He", c: false}, {t: "She", c: false}, {t: "They", c: true} ]
                },
                // Exercise 2: To Be - Affirmative
                {
                    type: "mcq",
                    q: "Complete: 'I _____ from Brazil.'",
                    options: [ {t: "is", c: false}, {t: "am", c: true}, {t: "are", c: false}, {t: "be", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'Celine _____ Australian.'",
                    options: [ {t: "am", c: false}, {t: "are", c: false}, {t: "is", c: true}, {t: "be", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'We _____ ready for class.'",
                    options: [ {t: "is", c: false}, {t: "am", c: false}, {t: "are", c: true}, {t: "be", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'Mr. D _____ very funny.'",
                    options: [ {t: "is", c: true}, {t: "are", c: false}, {t: "am", c: false}, {t: "be", c: false} ]
                },
                // Exercise 3: To Be - Negative
                {
                    type: "mcq",
                    q: "Choose the correct negative: 'I _____ not a teacher.'",
                    options: [ {t: "is", c: false}, {t: "are", c: false}, {t: "am", c: true}, {t: "be", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct negative: 'They _____ from England.'",
                    options: [ {t: "is not", c: false}, {t: "am not", c: false}, {t: "aren't", c: true}, {t: "isn't", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct negative: 'Albert _____ 15 years old.'",
                    options: [ {t: "aren't", c: false}, {t: "isn't", c: true}, {t: "am not", c: false}, {t: "not is", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct negative: 'You _____ sad today.'",
                    options: [ {t: "isn't", c: false}, {t: "am not", c: false}, {t: "aren't", c: true}, {t: "not", c: false} ]
                },
                // Exercise 4: To Be - Interrogative (Question Order)
                {
                    type: "mcq",
                    q: "Choose the correct question: '(he / from / Is / China?)'",
                    options: [ {t: "He is from China?", c: false}, {t: "Is from he China?", c: false}, {t: "Is he from China?", c: true}, {t: "From is he China?", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct question: '(you / Are / a student?)'",
                    options: [ {t: "You are a student?", c: false}, {t: "Are you a student?", c: true}, {t: "Student a you are?", c: false}, {t: "Is you a student?", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct question: '(they / nice / Are?)'",
                    options: [ {t: "Are they nice?", c: true}, {t: "They are nice?", c: false}, {t: "Is they nice?", c: false}, {t: "Nice they are?", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct question: '(I / right / Am?)'",
                    options: [ {t: "I am right?", c: false}, {t: "Am I right?", c: true}, {t: "Are I right?", c: false}, {t: "Right am I?", c: false} ]
                },
                // Exercise 5: WH Questions
                {
                    type: "mcq",
                    q: "Match: '_______ is your name?' (My name is Sara.)",
                    options: [ {t: "Who", c: false}, {t: "What", c: true}, {t: "Where", c: false}, {t: "How old", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Match: '_______ is he?' (He is my friend.)",
                    options: [ {t: "What", c: false}, {t: "Who", c: true}, {t: "Where", c: false}, {t: "How old", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Match: '_______ are you from?' (I am from Italy.)",
                    options: [ {t: "What", c: false}, {t: "Who", c: false}, {t: "Where", c: true}, {t: "How old", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Match: '_______ are you?' (I am 12.)",
                    options: [ {t: "What", c: false}, {t: "Who", c: false}, {t: "Where", c: false}, {t: "How old", c: true} ]
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
                    text: "Hello! I am Albert.<br><small style='color:#0077b6'>(Olá! Eu sou o Albert.)</small>", 
                    audio: "TTS: Hello! I am Albert.", 
                    arrow: "↘" 
                },
                { 
                    text: "Nice to meet you.<br><small style='color:#0077b6'>(Prazer em conhecer você.)</small>", 
                    audio: "TTS: Nice to meet you.", 
                    arrow: "↘" 
                },
                { 
                    text: "Where are you from?<br><small style='color:#0077b6'>(De onde você é?)</small>", 
                    audio: "TTS: Where are you from?", 
                    arrow: "↘" 
                },
                { 
                    text: "I am from Australia.<br><small style='color:#0077b6'>(Eu sou da Austrália.)</small>", 
                    audio: "TTS: I am from Australia.", 
                    arrow: "↘" 
                },
                { 
                    text: "Are you a student?<br><small style='color:#0077b6'>(Você é um estudante?)</small>", 
                    audio: "TTS: Are you a student?", 
                    arrow: "↗" 
                },
                { 
                    text: "Yes, I am.<br><small style='color:#0077b6'>(Sim, eu sou.)</small>", 
                    audio: "TTS: Yes, I am.", 
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
                // Drill 1: Typing
                {
                    type: "typing",
                    instruction: "Albert is introducing a photo of his friend. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert apresentando uma foto de seu amigo. Digite as palavras que faltam.)</small>",
                    audio: "TTS: Look at this photo. This is my friend. He is from Japan. He is Japanese. He is twelve years old.",
                    text: "Look at this photo. This is my friend. He is [from] Japan. He is [Japanese]. He is [twelve] years old."
                },
                // Drill 2: Dropdown
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation between Mrs. Canales and Celine. Choose the correct option.<br><small style='color:#0077b6'>(Ouça a conversa entre a Sra. Canales e Celine. Escolha a opção correta.)</small>",
                    audio: "audio/6-1-1/p5_text2.mp3",
                    questions: [
                        { q: "Mrs. Canales: Hello, [Celine | Albert].", a: "Celine" },
                        { q: "Celine: [Good morning | Goodbye], teacher.", a: "Good morning" },
                        { q: "Mrs. Canales: Are you [ready | sad] for the class?", a: "ready" },
                        { q: "Celine: Yes, I [am | is].", a: "am" }
                    ]
                },
                // Drill 3: Audio Choice
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer.<br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta correta.)</small>",
                    audio: "TTS: Where are you from?",
                    options: [
                        { t: "I am fine, thanks.", c: false },
                        { t: "My name is John.", c: false },
                        { t: "I am from Brazil.", c: true },
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
                // Text 1: Narration
                {
                    title: "The New School Year",
                    audio: "TTS: Today is the first day at REACH school. Albert is a student. He is fourteen years old. He is from Canada. He is very happy. He meets a new friend. Her name is Celine. She is from Australia. She is fifteen years old. Mrs. Canales is the teacher. She is American. Everyone is ready for a great year!",
                    body: "Today is the first day at REACH school. Albert is a student. He is fourteen years old. He is from Canada. He is very happy. He meets a new friend. Her name is Celine. She is from Australia. She is fifteen years old. Mrs. Canales is the teacher. She is American. Everyone is ready for a great year!",
                    questions: [
                        { 
                            q: "Where is Albert from?", 
                            options: [ 
                                {t: "Australia", c: false}, 
                                {t: "Canada", c: true}, 
                                {t: "USA", c: false}, 
                                {t: "Brazil", c: false} 
                            ] 
                        },
                        { 
                            q: "How old is Celine?", 
                            options: [ 
                                {t: "12", c: false}, 
                                {t: "14", c: false}, 
                                {t: "15", c: true}, 
                                {t: "100", c: false} 
                            ] 
                        },
                        { 
                            q: "Who is the teacher?", 
                            options: [ 
                                {t: "Albert", c: false}, 
                                {t: "Celine", c: false}, 
                                {t: "Mr. D", c: false}, 
                                {t: "Mrs. Canales", c: true} 
                            ] 
                        }
                    ]
                },
                // Text 2: Dialogue
                {
                    title: "In the Library",
                    audio: "audio/6-1-1/p6_text2.mp3",
                    body: "<b>Celine:</b> Hello, Albert!<br><b>Albert:</b> Hi, Celine. Look, this is a book about Brazil.<br><b>Celine:</b> Wow! Brazil is a big country.<br><b>Albert:</b> Yes, it is. Are you Brazilian?<br><b>Celine:</b> No, I am not. I am Australian. But I like Brazil.<br><b>Albert:</b> Me too! We are friends of the world.",
                    questions: [
                        { 
                            q: "What object are they looking at?", 
                            options: [ 
                                {t: "A map", c: false}, 
                                {t: "A book", c: true}, 
                                {t: "A cat", c: false}, 
                                {t: "A pen", c: false} 
                            ] 
                        },
                        { 
                            q: "Is Celine Brazilian?", 
                            options: [ 
                                {t: "Yes, she is.", c: false}, 
                                {t: "No, she is Australian.", c: true}, 
                                {t: "No, she is Canadian.", c: false}, 
                                {t: "Yes, she is from Brazil.", c: false} 
                            ] 
                        },
                        { 
                            q: "What does Albert say they are?", 
                            options: [ 
                                {t: "Teachers", c: false}, 
                                {t: "Friends of the world", c: true}, 
                                {t: "Sad", c: false}, 
                                {t: "From Brazil", c: false} 
                            ] 
                        }
                    ]
                },
                // Text 3: Description
                {
                    title: "My Friend John",
                    audio: "TTS: This is my friend. His name is John. He is a good student. He is twelve years old. John is from England. He is English. His favorite book is blue. He is not sad; he is very excited today. We are in the same class.",
                    body: "This is my friend. His name is John. He is a good student. He is twelve years old. John is from England. He is English. His favorite book is blue. He is not sad; he is very excited today. We are in the same class.",
                    questions: [
                        { 
                            q: "Where is John from?", 
                            options: [ 
                                {t: "England", c: true}, 
                                {t: "France", c: false}, 
                                {t: "Spain", c: false}, 
                                {t: "China", c: false} 
                            ] 
                        },
                        { 
                            q: "Is John a teacher?", 
                            options: [ 
                                {t: "Yes, he is.", c: false}, 
                                {t: "No, he is a student.", c: true}, 
                                {t: "He is twelve.", c: false}, 
                                {t: "He is sad.", c: false} 
                            ] 
                        },
                        { 
                            q: "How is John feeling?", 
                            options: [ 
                                {t: "Sad", c: false}, 
                                {t: "Tired", c: false}, 
                                {t: "Excited", c: true}, 
                                {t: "Angry", c: false} 
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
                // Drill 1: Matching
                {
                    type: "matching",
                    instruction: "Match the country on the left with the correct nationality on the right.<br><small style='color:#0077b6'>(Combine o país à esquerda com a nacionalidade correta à direita.)</small>",
                    pairs: [
                        { left: "France", right: "French", val: "1" },
                        { left: "China", right: "Chinese", val: "2" },
                        { left: "Italy", right: "Italian", val: "3" },
                        { left: "Germany", right: "German", val: "4" }
                    ]
                },
                // Drill 2: Word Order
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "is / name / My / Albert / .",
                    correct: "My name is Albert ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "you / from / Where / are / ?",
                    correct: "Where are you from ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "student / am / I / a / .",
                    correct: "I am a student ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "old / are / How / you / ?",
                    correct: "How old are you ?"
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Teacher", c: false },
                        { t: "Student", c: false },
                        { t: "Book", c: false },
                        { t: "One", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Brazil", c: false },
                        { t: "Spain", c: false },
                        { t: "Japanese", c: true },
                        { t: "Italy", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "He", c: false },
                        { t: "She", c: false },
                        { t: "They", c: false },
                        { t: "Meet", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Ten", c: false },
                        { t: "Twenty", c: false },
                        { t: "Blue", c: true },
                        { t: "Fifty", c: false }
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Select the correct verb 'to be' to complete the sentence.<br><small style='color:#0077b6'>(Selecione o verbo 'to be' correto para completar a frase.)</small>",
                    questions: [
                        { q: "I [am | is | are | not] a student.", a: "am" },
                        { q: "She [is | am | are | not] from Canada.", a: "is" },
                        { q: "They [are | is | am | not] my friends.", a: "are" },
                        { q: "He is [not | is | are | am] a teacher.", a: "not" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn! Write a short introduction about yourself using what you learned.<br><small style='color:#0077b6'>(Ilha de Idiomas: Agora é a sua vez! Escreva uma breve introdução sobre você usando o que aprendeu.)</small>",
            example: "Hello! My name is Mr. D. I am from the United States. I am American. I am 35 years old. Nice to meet you!",
            prompts: [
                "What is your name? <br><small style='color:#0077b6'>(Qual é o seu nome?)</small>",
                "Where are you from? <br><small style='color:#0077b6'>(De onde você é?)</small>",
                "What is your nationality? <br><small style='color:#0077b6'>(Qual é a sua nacionalidade?)</small>",
                "How old are you? <br><small style='color:#0077b6'>(Quantos anos você tem?)</small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Verbs, Vocab, Phrases)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Verbs ---
                { 
                    term: "To be", 
                    definition: "To be", 
                    defTrans: "Ser / Estar",
                    example: "I am happy today.", 
                    exTrans: "Eu estou feliz hoje.",
                    audioFront: "TTS: To be",
                    audioBack: "TTS: I am happy today." 
                },
                { 
                    term: "Meet", 
                    definition: "Meet", 
                    defTrans: "Conhecer / Encontrar",
                    example: "Nice to meet you.", 
                    exTrans: "Prazer em conhecer você.",
                    audioFront: "TTS: Meet",
                    audioBack: "TTS: Nice to meet you." 
                },

                // --- Vocabularies ---
                { 
                    term: "Children", 
                    definition: "Children", 
                    defTrans: "Crianças",
                    example: "The children are playing.", 
                    exTrans: "As crianças estão brincando.",
                    audioFront: "TTS: Children",
                    audioBack: "TTS: The children are playing." 
                },
                { 
                    term: "People", 
                    definition: "People", 
                    defTrans: "Pessoas",
                    example: "People are nice here.", 
                    exTrans: "As pessoas são legais aqui.",
                    audioFront: "TTS: People",
                    audioBack: "TTS: People are nice here." 
                },
                { 
                    term: "World", 
                    definition: "World", 
                    defTrans: "Mundo",
                    example: "We live in a big world.", 
                    exTrans: "Nós vivemos em um mundo grande.",
                    audioFront: "TTS: World",
                    audioBack: "TTS: We live in a big world." 
                },
                { 
                    term: "Student", 
                    definition: "Student", 
                    defTrans: "Estudante",
                    example: "She is a good student.", 
                    exTrans: "Ela é uma boa estudante.",
                    audioFront: "TTS: Student",
                    audioBack: "TTS: She is a good student." 
                },
                { 
                    term: "Friend", 
                    definition: "Friend", 
                    defTrans: "Amigo(a)",
                    example: "Albert is my friend.", 
                    exTrans: "Albert é meu amigo.",
                    audioFront: "TTS: Friend",
                    audioBack: "TTS: Albert is my friend." 
                },
                { 
                    term: "Teacher", 
                    definition: "Teacher", 
                    defTrans: "Professor(a)",
                    example: "Mrs. Canales is our teacher.", 
                    exTrans: "Sra. Canales é nossa professora.",
                    audioFront: "TTS: Teacher",
                    audioBack: "TTS: Mrs. Canales is our teacher." 
                },
                { 
                    term: "Name", 
                    definition: "Name", 
                    defTrans: "Nome",
                    example: "My name is Celine.", 
                    exTrans: "Meu nome é Celine.",
                    audioFront: "TTS: Name",
                    audioBack: "TTS: My name is Celine." 
                },

                // --- Phrases & Expressions ---
                { 
                    term: "Nice to meet you", 
                    definition: "Nice to meet you", 
                    defTrans: "Prazer em conhecer você",
                    example: "Nice to meet you, Albert!", 
                    exTrans: "Prazer em conhecer você, Albert!",
                    audioFront: "TTS: Nice to meet you",
                    audioBack: "TTS: Nice to meet you, Albert!" 
                },
                { 
                    term: "How are you?", 
                    definition: "How are you?", 
                    defTrans: "Como você está?",
                    example: "How are you? I am good.", 
                    exTrans: "Como você está? Eu estou bem.",
                    audioFront: "TTS: How are you?",
                    audioBack: "TTS: How are you? I am good." 
                },
                { 
                    term: "Where are you from?", 
                    definition: "Where are you from?", 
                    defTrans: "De onde você é?",
                    example: "Where are you from? Brazil.", 
                    exTrans: "De onde você é? Brasil.",
                    audioFront: "TTS: Where are you from?",
                    audioBack: "TTS: Where are you from? Brazil." 
                },
                // --- Countries & Nationalities (Part 2) ---
                { 
                    term: "Brazil", 
                    definition: "Brazil", 
                    defTrans: "Brasil",
                    example: "I am from Brazil.", 
                    exTrans: "Eu sou do Brasil.",
                    audioFront: "TTS: Brazil",
                    audioBack: "TTS: I am from Brazil." 
                },
                { 
                    term: "Brazilian", 
                    definition: "Brazilian", 
                    defTrans: "Brasileiro(a)",
                    example: "He is Brazilian.", 
                    exTrans: "Ele é brasileiro.",
                    audioFront: "TTS: Brazilian",
                    audioBack: "TTS: He is Brazilian." 
                },
                { 
                    term: "USA", 
                    definition: "USA", 
                    defTrans: "EUA",
                    example: "She is from the USA.", 
                    exTrans: "Ela é dos Estados Unidos.",
                    audioFront: "TTS: USA",
                    audioBack: "TTS: She is from the USA." 
                },
                { 
                    term: "American", 
                    definition: "American", 
                    defTrans: "Americano(a)",
                    example: "He is American.", 
                    exTrans: "Ele é americano.",
                    audioFront: "TTS: American",
                    audioBack: "TTS: He is American." 
                },
                { 
                    term: "England", 
                    definition: "England", 
                    defTrans: "Inglaterra",
                    example: "They are from England.", 
                    exTrans: "Eles são da Inglaterra.",
                    audioFront: "TTS: England",
                    audioBack: "TTS: They are from England." 
                },
                { 
                    term: "English", 
                    definition: "English", 
                    defTrans: "Inglês(a)",
                    example: "She is English.", 
                    exTrans: "Ela é inglesa.",
                    audioFront: "TTS: English",
                    audioBack: "TTS: She is English." 
                },
                { 
                    term: "France", 
                    definition: "France", 
                    defTrans: "França",
                    example: "He is from France.", 
                    exTrans: "Ele é da França.",
                    audioFront: "TTS: France",
                    audioBack: "TTS: He is from France." 
                },
                { 
                    term: "French", 
                    definition: "French", 
                    defTrans: "Francês(a)",
                    example: "She is French.", 
                    exTrans: "Ela é francesa.",
                    audioFront: "TTS: French",
                    audioBack: "TTS: She is French." 
                },
                { 
                    term: "Canada", 
                    definition: "Canada", 
                    defTrans: "Canadá",
                    example: "We are from Canada.", 
                    exTrans: "Nós somos do Canadá.",
                    audioFront: "TTS: Canada",
                    audioBack: "TTS: We are from Canada." 
                },
                { 
                    term: "Canadian", 
                    definition: "Canadian", 
                    defTrans: "Canadense",
                    example: "Albert is Canadian.", 
                    exTrans: "Albert é canadense.",
                    audioFront: "TTS: Canadian",
                    audioBack: "TTS: Albert is Canadian." 
                },
                { 
                    term: "Germany", 
                    definition: "Germany", 
                    defTrans: "Alemanha",
                    example: "He is from Germany.", 
                    exTrans: "Ele é da Alemanha.",
                    audioFront: "TTS: Germany",
                    audioBack: "TTS: He is from Germany." 
                },
                { 
                    term: "German", 
                    definition: "German", 
                    defTrans: "Alemão(ã)",
                    example: "She is German.", 
                    exTrans: "Ela é alemã.",
                    audioFront: "TTS: German",
                    audioBack: "TTS: She is German." 
                },
                { 
                    term: "China", 
                    definition: "China", 
                    defTrans: "China",
                    example: "I am from China.", 
                    exTrans: "Eu sou da China.",
                    audioFront: "TTS: China",
                    audioBack: "TTS: I am from China." 
                },
                { 
                    term: "Chinese", 
                    definition: "Chinese", 
                    defTrans: "Chinês(a)",
                    example: "He is Chinese.", 
                    exTrans: "Ele é chinês.",
                    audioFront: "TTS: Chinese",
                    audioBack: "TTS: He is Chinese." 
                },
                { 
                    term: "Japan", 
                    definition: "Japan", 
                    defTrans: "Japão",
                    example: "She is from Japan.", 
                    exTrans: "Ela é do Japão.",
                    audioFront: "TTS: Japan",
                    audioBack: "TTS: She is from Japan." 
                },
                { 
                    term: "Japanese", 
                    definition: "Japanese", 
                    defTrans: "Japonês(a)",
                    example: "He is Japanese.", 
                    exTrans: "Ele é japonês.",
                    audioFront: "TTS: Japanese",
                    audioBack: "TTS: He is Japanese." 
                },
                { 
                    term: "Spain", 
                    definition: "Spain", 
                    defTrans: "Espanha",
                    example: "We are from Spain.", 
                    exTrans: "Nós somos da Espanha.",
                    audioFront: "TTS: Spain",
                    audioBack: "TTS: We are from Spain." 
                },
                { 
                    term: "Spanish", 
                    definition: "Spanish", 
                    defTrans: "Espanhol(a)",
                    example: "She is Spanish.", 
                    exTrans: "Ela é espanhola.",
                    audioFront: "TTS: Spanish",
                    audioBack: "TTS: She is Spanish." 
                },
                // --- Countries, Numbers, Pronouns & Grammar (Part 3) ---
                { 
                    term: "Italy", 
                    definition: "Italy", 
                    defTrans: "Itália",
                    example: "He is from Italy.", 
                    exTrans: "Ele é da Itália.",
                    audioFront: "TTS: Italy",
                    audioBack: "TTS: He is from Italy." 
                },
                { 
                    term: "Italian", 
                    definition: "Italian", 
                    defTrans: "Italiano(a)",
                    example: "I am Italian.", 
                    exTrans: "Eu sou italiano.",
                    audioFront: "TTS: Italian",
                    audioBack: "TTS: I am Italian." 
                },
                { 
                    term: "Numbers 1-10", 
                    definition: "Numbers 1-10", 
                    defTrans: "Um a Dez",
                    example: "I have one cat and two dogs.", 
                    exTrans: "Eu tenho um gato e dois cachorros.",
                    audioFront: "TTS: Numbers one to ten",
                    audioBack: "TTS: I have one cat and two dogs." 
                },
                { 
                    term: "Numbers 11-20", 
                    definition: "Numbers 11-20", 
                    defTrans: "Onze a Vinte",
                    example: "She is twelve years old.", 
                    exTrans: "Ela tem doze anos de idade.",
                    audioFront: "TTS: Numbers eleven to twenty",
                    audioBack: "TTS: She is twelve years old." 
                },
                { 
                    term: "Tens (30-90)", 
                    definition: "Tens (30, 40... 90)", 
                    defTrans: "Dezenas (Trinta a Noventa)",
                    example: "My father is forty years old.", 
                    exTrans: "Meu pai tem quarenta anos de idade.",
                    audioFront: "TTS: Thirty, forty, fifty, sixty, seventy, eighty, ninety",
                    audioBack: "TTS: My father is forty years old." 
                },
                { 
                    term: "100", 
                    definition: "One hundred", 
                    defTrans: "Cem",
                    example: "I want to count to one hundred.", 
                    exTrans: "Eu quero contar até cem.",
                    audioFront: "TTS: One hundred",
                    audioBack: "TTS: I want to count to one hundred." 
                },
                { 
                    term: "I", 
                    definition: "I", 
                    defTrans: "Eu",
                    example: "I am a student.", 
                    exTrans: "Eu sou um estudante.",
                    audioFront: "TTS: I",
                    audioBack: "TTS: I am a student." 
                },
                { 
                    term: "You", 
                    definition: "You", 
                    defTrans: "Você / Vocês",
                    example: "You are my friend.", 
                    exTrans: "Você é meu amigo.",
                    audioFront: "TTS: You",
                    audioBack: "TTS: You are my friend." 
                },
                { 
                    term: "He", 
                    definition: "He", 
                    defTrans: "Ele",
                    example: "He is from Canada.", 
                    exTrans: "Ele é do Canadá.",
                    audioFront: "TTS: He",
                    audioBack: "TTS: He is from Canada." 
                },
                { 
                    term: "She", 
                    definition: "She", 
                    defTrans: "Ela",
                    example: "She is nice.", 
                    exTrans: "Ela é legal.",
                    audioFront: "TTS: She",
                    audioBack: "TTS: She is nice." 
                },
                { 
                    term: "It", 
                    definition: "It", 
                    defTrans: "Ele/Ela (animais/objetos)",
                    example: "It is a book.", 
                    exTrans: "Isto é um livro.",
                    audioFront: "TTS: It",
                    audioBack: "TTS: It is a book." 
                },
                { 
                    term: "We", 
                    definition: "We", 
                    defTrans: "Nós",
                    example: "We are happy.", 
                    exTrans: "Nós somos felizes.",
                    audioFront: "TTS: We",
                    audioBack: "TTS: We are happy." 
                },
                { 
                    term: "They", 
                    definition: "They", 
                    defTrans: "Eles / Elas",
                    example: "They are at school.", 
                    exTrans: "Eles estão na escola.",
                    audioFront: "TTS: They",
                    audioBack: "TTS: They are at school." 
                },
                { 
                    term: "Verb To Be (+)", 
                    definition: "Verb 'To Be' - Affirmative", 
                    defTrans: "Usado para afirmar (sou/estou)",
                    example: "I am Brazilian.", 
                    exTrans: "Eu sou brasileiro.",
                    audioFront: "TTS: Verb To Be Affirmative",
                    audioBack: "TTS: I am Brazilian." 
                },
                { 
                    term: "Verb To Be (-)", 
                    definition: "Verb 'To Be' - Negative", 
                    defTrans: "Usado para negar (+ not)",
                    example: "She is not American.", 
                    exTrans: "Ela não é americana.",
                    audioFront: "TTS: Verb To Be Negative",
                    audioBack: "TTS: She is not American." 
                },
                { 
                    term: "Verb To Be (?)", 
                    definition: "Verb 'To Be' - Interrogative", 
                    defTrans: "Verbo antes do sujeito",
                    example: "Are you a student?", 
                    exTrans: "Você é um estudante?",
                    audioFront: "TTS: Verb To Be Interrogative",
                    audioBack: "TTS: Are you a student?" 
                },
                { 
                    term: "WH Questions", 
                    definition: "WH Questions", 
                    defTrans: "Perguntas específicas (What, Who...)",
                    example: "Where are you from?", 
                    exTrans: "De onde você é?",
                    audioFront: "TTS: WH Questions",
                    audioBack: "TTS: Where are you from?" 
                }
            ]
        }
    ], // Closes Steps array

    // ======================================================
    // GLOSSARY (Part 1: Context, Vocab, Phrases)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT & VERBS ---
        { 
            topic: "Context & Verbs", 
            term: "To be", 
            definition: "The most important verb in English, used to describe states, identity, and origin.", 
            translation: "ser / estar" 
        },
        { 
            topic: "Context & Verbs", 
            term: "meet", 
            definition: "To see and speak to someone for the first time.", 
            translation: "conhecer / encontrar" 
        },
        { 
            topic: "Context & Verbs", 
            term: "how-old-are-you", 
            definition: "A question used to ask about someone's age.", 
            translation: "Quantos anos você tem?" 
        },
        { 
            topic: "Context & Verbs", 
            term: "years-old", 
            definition: "Used after a number to indicate age.", 
            translation: "Anos de idade" 
        },
        { 
            topic: "Context & Verbs", 
            term: "fourteen", 
            definition: "The number 14.", 
            translation: "Quatorze" 
        },
        { 
            topic: "Context & Verbs", 
            term: "fifteen", 
            definition: "The number 15.", 
            translation: "Quinze" 
        },
        { 
            topic: "Context & Verbs", 
            term: "ready", 
            definition: "Prepared for an action or event.", 
            translation: "Pronto / Preparado" 
        },

        // --- TOPIC 2: GENERAL VOCABULARY ---
        { 
            topic: "General Vocab", 
            term: "Children", 
            definition: "Young people; plural of child.", 
            translation: "crianças" 
        },
        { 
            topic: "General Vocab", 
            term: "People", 
            definition: "Human beings in general or considered collectively.", 
            translation: "pessoas" 
        },
        { 
            topic: "General Vocab", 
            term: "World", 
            definition: "The earth, together with all of its countries, peoples, and natural features.", 
            translation: "mundo" 
        },
        { 
            topic: "General Vocab", 
            term: "Student", 
            definition: "A person who is studying at a school or college.", 
            translation: "estudante" 
        },
        { 
            topic: "General Vocab", 
            term: "Friend", 
            definition: "A person whom one knows and with whom one has a bond of mutual affection.", 
            translation: "amigo(a)" 
        },
        { 
            topic: "General Vocab", 
            term: "Teacher", 
            definition: "A person who teaches, especially in a school.", 
            translation: "professor(a)" 
        },
        { 
            topic: "General Vocab", 
            term: "name", 
            definition: "A word or set of words by which a person, animal, place, or thing is known.", 
            translation: "nome" 
        },
        { 
            topic: "General Vocab", 
            term: "Cat", 
            definition: "A small domesticated carnivorous mammal with soft fur.", 
            translation: "gato" 
        },
        { 
            topic: "General Vocab", 
            term: "Dog", 
            definition: "A domesticated carnivorous mammal that typically has a long snout and barking voice.", 
            translation: "cachorro" 
        },
        { 
            topic: "General Vocab", 
            term: "Book", 
            definition: "A written or printed work consisting of pages glued or sewn together.", 
            translation: "livro" 
        },

        // --- TOPIC 3: PHRASES & EXPRESSIONS ---
        { 
            topic: "Phrases", 
            term: "Nice to meet you", 
            definition: "A polite phrase used when meeting someone for the first time.", 
            translation: "Prazer em conhecer você." 
        },
        { 
            topic: "Phrases", 
            term: "My name is...", 
            definition: "Used to introduce yourself.", 
            translation: "Meu nome é..." 
        },
        { 
            topic: "Phrases", 
            term: "How are you?", 
            definition: "A common greeting question to ask about someone's well-being.", 
            translation: "Como você está?" 
        },
        { 
            topic: "Phrases", 
            term: "I am fine, thanks", 
            definition: "A polite response to the greeting 'How are you?'.", 
            translation: "Eu estou bem, obrigado(a)." 
        },
        { 
            topic: "Phrases", 
            term: "Where are you from?", 
            definition: "A question used to ask about someone's origin or home country.", 
            translation: "De onde você é?" 
        },
        { 
            topic: "Phrases", 
            term: "I am from...", 
            definition: "Used to state your origin or country.", 
            translation: "Eu sou de..." 
        },
        { 
            topic: "Phrases", 
            term: "... years old", 
            definition: "Used to express age.", 
            translation: "... anos de idade." 
        },
        { 
            topic: "Phrases", 
            term: "Hello! / Hi!", 
            definition: "Common greetings used to say hello.", 
            translation: "Olá! / Oi!" 
        },
        { 
            topic: "Phrases", 
            term: "Goodbye / Bye!", 
            definition: "Words used when leaving or ending a conversation.", 
            translation: "Adeus / Tchau!" 
        },
        // --- TOPIC 4: COUNTRIES & NATIONALITIES (Split for Tooltips) ---
        { topic: "Nationalities", term: "Australia", definition: "A country and continent in the Oceania region.", translation: "Austrália" },
        { topic: "Nationalities", term: "Australian", definition: "A person from Australia.", translation: "Australiano(a)" },
        { topic: "Nationalities", term: "Brazil", definition: "The largest country in South America.", translation: "Brasil" },
        { topic: "Nationalities", term: "Brazilian", definition: "A person from Brazil.", translation: "Brasileiro(a)" },
        { topic: "Nationalities", term: "Canada", definition: "A country in North America.", translation: "Canadá" },
        { topic: "Nationalities", term: "Canadian", definition: "A person from Canada.", translation: "Canadense" },
        { topic: "Nationalities", term: "USA", definition: "United States of America.", translation: "EUA" },
        { topic: "Nationalities", term: "American", definition: "A person from the USA.", translation: "Americano(a)" },
        { topic: "Nationalities", term: "England", definition: "A country that is part of the United Kingdom.", translation: "Inglaterra" },
        { topic: "Nationalities", term: "English", definition: "A person from England.", translation: "Inglês(a)" },
        { topic: "Nationalities", term: "France", definition: "A country in Western Europe.", translation: "França" },
        { topic: "Nationalities", term: "French", definition: "A person from France.", translation: "Francês(a)" },
        { topic: "Nationalities", term: "Germany", definition: "A country in Central Europe.", translation: "Alemanha" },
        { topic: "Nationalities", term: "German", definition: "A person from Germany.", translation: "Alemão(ã)" },
        { topic: "Nationalities", term: "China", definition: "A country in East Asia.", translation: "China" },
        { topic: "Nationalities", term: "Chinese", definition: "A person from China.", translation: "Chinês(a)" },
        { topic: "Nationalities", term: "Japan", definition: "An island country in East Asia.", translation:"Japão" },
        { topic: "Nationalities", term: "Japanese", definition: "A person from Japan.", translation: "Japonês(a)" },
        { topic: "Nationalities", term: "Spain", definition: "A country on Europe’s Iberian Peninsula.", translation: "Espanha" },
        { topic: "Nationalities", term: "Spanish", definition: "A person from Spain.", translation: "Espanhol(a)" },
        { topic: "Nationalities", term: "Italy", definition: "A European country with a long Mediterranean coastline.", translation: "Itália" },
        { topic: "Nationalities", term: "Italian", definition: "A person from Italy.", translation: "Italiano(a)" },

        // --- TOPIC 5: NUMBERS ---
        { 
            topic: "Numbers", 
            term: "Numbers 1-100", 
            definition: "Mathematical objects used to count, measure, and label.", 
            translation: "Números (Um a Cem)" 
        },

        // --- TOPIC 6: SUBJECT PRONOUNS ---
        { 
            topic: "Pronouns", 
            term: "I", 
            definition: "Subject pronoun used by a speaker to refer to themselves.", 
            translation: "Eu" 
        },
        { 
            topic: "Pronouns", 
            term: "You", 
            definition: "Subject pronoun used to refer to the person or people being addressed.", 
            translation: "Você / Vocês" 
        },
        { 
            topic: "Pronouns", 
            term: "He", 
            definition: "Subject pronoun used to refer to a man, boy, or male animal.", 
            translation: "Ele" 
        },
        { 
            topic: "Pronouns", 
            term: "She", 
            definition: "Subject pronoun used to refer to a woman, girl, or female animal.", 
            translation: "Ela" 
        },
        { 
            topic: "Pronouns", 
            term: "It", 
            definition: "Subject pronoun used to refer to a thing, animal, situation, or idea.", 
            translation: "Ele/Ela (coisas/animais)" 
        },
        { 
            topic: "Pronouns", 
            term: "We", 
            definition: "Subject pronoun used by a speaker to refer to themselves and one or more others.", 
            translation: "Nós" 
        },
        { 
            topic: "Pronouns", 
            term: "They", 
            definition: "Subject pronoun used to refer to two or more people or things.", 
            translation: "Eles / Elas" 
        },

        // --- TOPIC 7: GRAMMAR POINTS ---
        { 
            topic: "Grammar", 
            term: "Verb To Be (+)", 
            definition: "Stating that something is true using am, is, or are.", 
            translation: "Verbo 'To Be' - Afirmativa" 
        },
        { 
            topic: "Grammar", 
            term: "Verb To Be (-)", 
            definition: "Stating that something is not true using am not, is not, or are not.", 
            translation: "Verbo 'To Be' - Negativa" 
        },
        { 
            topic: "Grammar", 
            term: "Verb To Be (?)", 
            definition: "Asking a question by placing the verb before the subject.", 
            translation: "Verbo 'To Be' - Interrogativa" 
        },
        { 
            topic: "Grammar", 
            term: "WH Questions", 
            definition: "Questions starting with What, Who, Where, How old to get information.", 
            translation: "Perguntas WH" 
        }
    ] // Closes glossary array
}); // Closes initLesson object