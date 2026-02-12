/**
 * REACH English - LESSON DATA 6-2-4
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "6-2-4", 
    grade: "6th Grade",       
    bimester: "2",   
    chapter: "4",    
    chapterTitle: "Celebrating the Year", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "In this lesson, you will learn to:<br><br>• Name common holidays in Brazil and around the world.<br>• Say the months of the year and the four seasons.<br>• Use ordinal numbers (1st, 2nd, 3rd...) for dates.<br>• Use the prepositions \"IN\" and \"ON\" for time.<br>• Ask about dates and birthdays.<br>• Use \"Whose\" and possessive pronouns (mine, yours...).",
            welcome: "Hello, party people! It's Mr. D!<br><br>Welcome to \"Celebrating the Year\"! Do you love parties and holidays? Today, we are going to learn how to talk about the best days of the year, like Christmas, Carnival, and your own birthday! We will master the calendar, learn how to say dates perfectly in English, and talk about our favorite seasons. Let's get the party started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Name common holidays in Brazil and around the world. Say the months of the year and the four seasons. Use ordinal numbers for dates. Use the prepositions IN and ON for time. Ask about dates and birthdays. Use Whose and possessive pronouns.",
                welcome: "TTS: Hello, party people! It's Mr. D! Welcome to Celebrating the Year! Do you love parties and holidays? Today, we are going to learn how to talk about the best days of the year, like Christmas, Carnival, and your own birthday! We will master the calendar, learn how to say dates perfectly in English, and talk about our favorite seasons. Let's get the party started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of festive music and people chatting. Celine and Albert are looking at a calendar on the school wall.", 
            contextAudio: "audio/6-2-4/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Albert, when is your [birthday](tooltip:birthday)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "It is on [May](tooltip:may) [15th](tooltip:fifteenth). My favorite [holiday](tooltip:holiday) is [Labor Day](tooltip:labor-day), because we don't have school!" 
                },
                { 
                    speaker: "Celine", 
                    text: "That is funny! My [birthday](tooltip:birthday) is in [December](tooltip:december). I love [Christmas](tooltip:christmas)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Me too! I love the [decorations](tooltip:decoration) and the [gifts](tooltip:gift)." 
                },
                { 
                    speaker: "Celine", 
                    text: "[Whose](tooltip:whose-q) [costume](tooltip:costume) is that in the picture? Is it [yours](tooltip:yours)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "No, it is not [mine](tooltip:mine). It is my sister's. She loves [Halloween](tooltip:halloween)." 
                },
                { 
                    speaker: "Celine", 
                    text: "The [costume](tooltip:costume) is very [scary](tooltip:scary)!" 
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
                    title: "Verbs",
                    audio: "TTS: Celebrate. Happen. Decorate. Get together. Wear. Watch. Give. Receive. Find. Ask. Say. Use. Love. Go. Eat. Learn.",
                    items: [
                        { term: "Celebrate", trans: "comemorar / celebrar" },
                        { term: "Happen", trans: "acontecer" },
                        { term: "Decorate", trans: "decorar" },
                        { term: "Get together", trans: "reunir-se" },
                        { term: "Wear", trans: "vestir / usar (roupa)" },
                        { term: "Watch", trans: "assistir" },
                        { term: "Give", trans: "dar" },
                        { term: "Receive", trans: "receber" },
                        { term: "Find", trans: "encontrar" },
                        { term: "Ask", trans: "perguntar / pedir" },
                        { term: "Say", trans: "dizer" },
                        { term: "Use", trans: "usar" },
                        { term: "Love", trans: "amar" },
                        { term: "Go", trans: "ir" },
                        { term: "Eat", trans: "comer" },
                        { term: "Learn", trans: "aprender" }
                    ]
                },
                {
                    title: "Time & Calendar",
                    audio: "TTS: Date. Month. Year. Season.",
                    items: [
                        { term: "Date", trans: "data" },
                        { term: "Month", trans: "mês" },
                        { term: "Year", trans: "ano" },
                        { term: "Season", trans: "estação do ano" }
                    ]
                },
                {
                    title: "Seasons of the Year",
                    audio: "TTS: Summer. Winter. Autumn. Fall. Spring.",
                    items: [
                        { term: "Summer", trans: "Verão" },
                        { term: "Winter", trans: "Inverno" },
                        { term: "Autumn / Fall", trans: "Outono" },
                        { term: "Spring", trans: "Primavera" }
                    ]
                },
                {
                    title: "Holidays & Celebrations",
                    audio: "TTS: Holiday. Birthday. Christmas. Carnival. Easter. Halloween. New Year's Eve. New Year's Day. Independence Day. Children's Day. Labor Day. All Souls' Day. Republic Proclamation Day.",
                    items: [
                        { term: "Holiday", trans: "Feriado" },
                        { term: "Birthday", trans: "Aniversário" },
                        { term: "Christmas", trans: "Natal" },
                        { term: "Carnival", trans: "Carnaval" },
                        { term: "Easter", trans: "Páscoa" },
                        { term: "Halloween", trans: "Halloween / Dia das Bruxas" },
                        { term: "New Year's Eve", trans: "Véspera de Ano Novo" },
                        { term: "New Year's Day", trans: "Dia de Ano Novo" },
                        { term: "Independence Day", trans: "Dia da Independência" },
                        { term: "Children's Day", trans: "Dia das Crianças" },
                        { term: "Labor Day", trans: "Dia do Trabalho" },
                        { term: "All Souls' Day", trans: "Dia de Finados" },
                        { term: "Republic Proclamation Day", trans: "Proclamação da República" }
                    ]
                },
                {
                    title: "Party Items & Traditions",
                    audio: "TTS: Party. Gift. Present. Costume. Decoration. Fireworks. Food. Tradition. Backpack. Book.",
                    items: [
                        { term: "Party", trans: "festa" },
                        { term: "Gift / Present", trans: "presente" },
                        { term: "Costume", trans: "fantasia" },
                        { term: "Decoration", trans: "decoração" },
                        { term: "Fireworks", trans: "fogos de artifício" },
                        { term: "Food", trans: "comida" },
                        { term: "Tradition", trans: "tradição" },
                        { term: "Backpack", trans: "mochila" },
                        { term: "Book", trans: "livro" }
                    ]
                },
                {
                    title: "Months of the Year",
                    audio: "TTS: January. February. March. April. May. June. July. August. September. October. November. December.",
                    items: [
                        { term: "January", trans: "Janeiro" },
                        { term: "February", trans: "Fevereiro" },
                        { term: "March", trans: "Março" },
                        { term: "April", trans: "Abril" },
                        { term: "May", trans: "Maio" },
                        { term: "June", trans: "Junho" },
                        { term: "July", trans: "Julho" },
                        { term: "August", trans: "Agosto" },
                        { term: "September", trans: "Setembro" },
                        { term: "October", trans: "Outubro" },
                        { term: "November", trans: "Novembro" },
                        { term: "December", trans: "Dezembro" }
                    ]
                },
                {
                    title: "Ordinal Numbers (1st - 31st)",
                    audio: "TTS: First. Second. Third. Fourth. Fifth. Sixth. Seventh. Eighth. Ninth. Tenth. Eleventh. Twelfth. Thirteenth. Fourteenth. Fifteenth. Sixteenth. Seventeenth. Eighteenth. Nineteenth. Twentieth. Twenty-first. Twenty-second. Twenty-third. Twenty-fourth. Twenty-fifth. Twenty-sixth. Twenty-seventh. Twenty-eighth. Twenty-ninth. Thirtieth. Thirty-first.",
                    items: [
                        { term: "First (1st)", trans: "Primeiro" },
                        { term: "Second (2nd)", trans: "Segundo" },
                        { term: "Third (3rd)", trans: "Terceiro" },
                        { term: "Fourth (4th)", trans: "Quarto" },
                        { term: "Fifth (5th)", trans: "Quinto" },
                        { term: "Sixth (6th)", trans: "Sexto" },
                        { term: "Seventh (7th)", trans: "Sétimo" },
                        { term: "Eighth (8th)", trans: "Oitavo" },
                        { term: "Ninth (9th)", trans: "Nono" },
                        { term: "Tenth (10th)", trans: "Décimo" },
                        { term: "Eleventh (11th)", trans: "Décimo primeiro" },
                        { term: "Twelfth (12th)", trans: "Décimo segundo" },
                        { term: "Thirteenth (13th)", trans: "Décimo terceiro" },
                        { term: "Fourteenth (14th)", trans: "Décimo quarto" },
                        { term: "Fifteenth (15th)", trans: "Décimo quinto" },
                        { term: "Sixteenth (16th)", trans: "Décimo sexto" },
                        { term: "Seventeenth (17th)", trans: "Décimo sétimo" },
                        { term: "Eighteenth (18th)", trans: "Décimo oitavo" },
                        { term: "Nineteenth (19th)", trans: "Décimo nono" },
                        { term: "Twentieth (20th)", trans: "Vigésimo" },
                        { term: "Twenty-first (21st)", trans: "Vigésimo primeiro" },
                        { term: "Twenty-second (22nd)", trans:"Vigésimo segundo"},
                        { term: "Twenty-third (23rd)", trans:"Vigésimo terceiro"},
                        { term:"Twenty-fourth(24th)" , trans:"Vigésimo quarto"},
                        { term:"Twenty-fifth(25th)" , trans:"Vigésimo quinto"},
                        { term:"Twenty-sixth(26th)" , trans:"Vigésimo sexto"},
                        { term:"Twenty-seventh(27th)" , trans:"Vigésimo sétimo"},
                        { term:"Twenty-eighth(28th)" , trans:"Vigésimo oitavo"},
                        { term:"Twenty-ninth(29th)" , trans:"Vigésimo nono"},
                        { term:"Thirtieth(30th)" , trans:"Trigésimo"},
                        { term:"Thirty-first(31st)" , trans:"Trigésimo primeiro"}
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Happy Birthday! Merry Christmas! Happy New Year! When is your birthday? What's the date today? My favorite holiday is... Whose is this? Of course.",
                    items: [
                        { term: "Happy Birthday!", trans: "Feliz Aniversário!" },
                        { term: "Merry Christmas!", trans: "Feliz Natal!" },
                        { term: "Happy New Year!", trans: "Feliz Ano Novo!" },
                        { term: "When is your birthday?", trans: "Quando é seu aniversário?" },
                        { term: "What's the date today?", trans: "Qual a data de hoje?" },
                        { term: "My favorite holiday is...", trans: "Meu feriado favorito é..." },
                        { term: "Whose is this?", trans: "De quem é isto?" },
                        { term: "Of course", trans: "É claro / Com certeza" }
                    ]
                }
            ], // This closes the areas array

            // 2B: Context Examples (Grouped & Tabbed) - PART 1
            exampleGroups: [
                {
                    title: "Verbs",
                    audio: "TTS: We celebrate my birthday with a cake. The festival happens in June. We decorate the tree for Christmas. Families get together on holidays. I wear a costume on Halloween. We watch fireworks on New Year's Eve. I give gifts to my friends. I receive many cards. Can you find the date on the calendar? Ask the teacher for help. Say Happy Birthday to her. We use decorations for the party. I love holidays! We go to the beach in summer. We eat chocolate on Easter. We learn about history.",
                    items: [
                        { term: "Celebrate", sent: "We celebrate my birthday with a cake.", trans: "<span style='color:#0077b6'>Nós comemoramos meu aniversário com um bolo.</span>" },
                        { term: "Happen", sent: "The festival happens in June.", trans: "<span style='color:#0077b6'>O festival acontece em junho.</span>" },
                        { term: "Decorate", sent: "We decorate the tree for Christmas.", trans: "<span style='color:#0077b6'>Nós decoramos a árvore para o Natal.</span>" },
                        { term: "Get together", sent: "Families get together on holidays.", trans: "<span style='color:#0077b6'>Famílias se reúnem nos feriados.</span>" },
                        { term: "Wear", sent: "I wear a costume on Halloween.", trans: "<span style='color:#0077b6'>Eu uso uma fantasia no Halloween.</span>" },
                        { term: "Watch", sent: "We watch fireworks on New Year's Eve.", trans: "<span style='color:#0077b6'>Nós assistimos aos fogos na véspera de ano novo.</span>" },
                        { term: "Give", sent: "I give gifts to my friends.", trans: "<span style='color:#0077b6'>Eu dou presentes aos meus amigos.</span>" },
                        { term: "Receive", sent: "I receive many cards.", trans: "<span style='color:#0077b6'>Eu recebo muitos cartões.</span>" },
                        { term: "Find", sent: "Can you find the date on the calendar?", trans: "<span style='color:#0077b6'>Você consegue encontrar a data no calendário?</span>" },
                        { term: "Ask", sent: "Ask the teacher for help.", trans: "<span style='color:#0077b6'>Peça ajuda ao professor.</span>" },
                        { term: "Say", sent: "Say 'Happy Birthday' to her.", trans: "<span style='color:#0077b6'>Diga 'Feliz Aniversário' para ela.</span>" },
                        { term: "Use", sent: "We use decorations for the party.", trans: "<span style='color:#0077b6'>Nós usamos decorações para a festa.</span>" },
                        { term: "Love", sent: "I love holidays!", trans: "<span style='color:#0077b6'>Eu amo feriados!</span>" },
                        { term: "Go", sent: "We go to the beach in summer.", trans: "<span style='color:#0077b6'>Nós vamos à praia no verão.</span>" },
                        { term: "Eat", sent: "We eat chocolate on Easter.", trans: "<span style='color:#0077b6'>Nós comemos chocolate na Páscoa.</span>" },
                        { term: "Learn", sent: "We learn about history.", trans: "<span style='color:#0077b6'>Nós aprendemos sobre história.</span>" }
                    ]
                },
                {
                    title: "Time & Calendar",
                    audio: "TTS: What is the date? December is a cold month in the USA. There are 12 months in a year. My favorite season is summer.",
                    items: [
                        { term: "Date", sent: "What is the date?", trans: "<span style='color:#0077b6'>Qual é a data?</span>" },
                        { term: "Month", sent: "December is a cold month in the USA.", trans: "<span style='color:#0077b6'>Dezembro é um mês frio nos EUA.</span>" },
                        { term: "Year", sent: "There are 12 months in a year.", trans: "<span style='color:#0077b6'>Tem 12 meses em um ano.</span>" },
                        { term: "Season", sent: "My favorite season is summer.", trans: "<span style='color:#0077b6'>Minha estação favorita é o verão.</span>" }
                    ]
                },
                {
                    title: "Seasons of the Year",
                    audio: "TTS: It is hot in the summer. It is cold in the winter. Leaves fall in the autumn. Flowers grow in the spring.",
                    items: [
                        { term: "Summer", sent: "It is hot in the summer.", trans: "<span style='color:#0077b6'>É quente no verão.</span>" },
                        { term: "Winter", sent: "It is cold in the winter.", trans: "<span style='color:#0077b6'>É frio no inverno.</span>" },
                        { term: "Autumn / Fall", sent: "Leaves fall in the autumn.", trans: "<span style='color:#0077b6'>As folhas caem no outono.</span>" },
                        { term: "Spring", sent: "Flowers grow in the spring.", trans: "<span style='color:#0077b6'>As flores crescem na primavera.</span>" }
                    ]
                },
                {
                    title: "Holidays & Celebrations",
                    audio: "TTS: Today is a holiday. Happy Birthday! Christmas is in December. Carnival is popular in Brazil. We hunt eggs on Easter. Kids love Halloween. We party on New Year's Eve. Independence Day is important. Children's Day is fun. No school on Labor Day.",
                    items: [
                        { term: "Holiday", sent: "Today is a holiday.", trans: "<span style='color:#0077b6'>Hoje é feriado.</span>" },
                        { term: "Birthday", sent: "Happy Birthday!", trans: "<span style='color:#0077b6'>Feliz aniversário!</span>" },
                        { term: "Christmas", sent: "Christmas is in December.", trans: "<span style='color:#0077b6'>O Natal é em dezembro.</span>" },
                        { term: "Carnival", sent: "Carnival is popular in Brazil.", trans: "<span style='color:#0077b6'>O Carnaval é popular no Brasil.</span>" },
                        { term: "Easter", sent: "We hunt eggs on Easter.", trans: "<span style='color:#0077b6'>Nós caçamos ovos na Páscoa.</span>" },
                        { term: "Halloween", sent: "Kids love Halloween.", trans: "<span style='color:#0077b6'>Crianças amam o Halloween.</span>" },
                        { term: "New Year's Eve", sent: "We party on New Year's Eve.", trans: "<span style='color:#0077b6'>Nós festejamos na Véspera de Ano Novo.</span>" },
                        { term: "Independence Day", sent: "Independence Day is important.", trans: "<span style='color:#0077b6'>O Dia da Independência é importante.</span>" },
                        { term: "Children's Day", sent: "Children's Day is fun.", trans: "<span style='color:#0077b6'>O Dia das Crianças é divertido.</span>" },
                        { term: "Labor Day", sent: "No school on Labor Day.", trans: "<span style='color:#0077b6'>Sem escola no Dia do Trabalho.</span>" }
                    ]
                },
                {
                    title: "Party Items & Traditions",
                    audio: "TTS: Let's have a party! This gift is for you. I have a superhero costume. The decoration is beautiful. Look at the fireworks! The holiday food is delicious. It is a family tradition. Put the book in the backpack. Read the book.",
                    items: [
                        { term: "Party", sent: "Let's have a party!", trans: "<span style='color:#0077b6'>Vamos fazer uma festa!</span>" },
                        { term: "Gift", sent: "This gift is for you.", trans: "<span style='color:#0077b6'>Este presente é para você.</span>" },
                        { term: "Costume", sent: "I have a superhero costume.", trans: "<span style='color:#0077b6'>Eu tenho uma fantasia de super-herói.</span>" },
                        { term: "Decoration", sent: "The decoration is beautiful.", trans: "<span style='color:#0077b6'>A decoração é bonita.</span>" },
                        { term: "Fireworks", sent: "Look at the fireworks!", trans: "<span style='color:#0077b6'>Olhe os fogos de artifício!</span>" },
                        { term: "Food", sent: "The holiday food is delicious.", trans: "<span style='color:#0077b6'>A comida do feriado é deliciosa.</span>" },
                        { term: "Tradition", sent: "It is a family tradition.", trans: "<span style='color:#0077b6'>É uma tradição familiar.</span>" },
                        { term: "Backpack", sent: "Put the book in the backpack.", trans: "<span style='color:#0077b6'>Coloque o livro na mochila.</span>" },
                        { term: "Book", sent: "Read the book.", trans: "<span style='color:#0077b6'>Leia o livro.</span>" }
                    ]
                },
                {
                    title: "Months of the Year",
                    audio: "TTS: January is the first month. December is the last month.",
                    items: [
                        { term: "January", sent: "January is the first month.", trans: "<span style='color:#0077b6'>Janeiro é o primeiro mês.</span>" },
                        { term: "December", sent: "December is the last month.", trans: "<span style='color:#0077b6'>Dezembro é o último mês.</span>" }
                    ]
                },
                {
                    title: "Ordinal Numbers",
                    audio: "TTS: This is my first class. February is the second month. He came in third place.",
                    items: [
                        { term: "First (1st)", sent: "This is my first class.", trans: "<span style='color:#0077b6'>Esta é minha primeira aula.</span>" },
                        { term: "Second (2nd)", sent: "February is the second month.", trans: "<span style='color:#0077b6'>Fevereiro é o segundo mês.</span>" },
                        { term: "Third (3rd)", sent: "He came in third place.", trans: "<span style='color:#0077b6'>Ele ficou em terceiro lugar.</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Happy Birthday! Thank you. Merry Christmas! And to you too! When is your birthday? It is today! What is the date today? It is July 4th. My favorite holiday is Carnival. Whose phone is this? It is mine. Of course.",
                    items: [
                        { term: "Happy Birthday!", sent: "'Happy Birthday!' 'Thank you!'", trans: "<span style='color:#0077b6'>'Feliz Aniversário!' 'Obrigado!'</span>" },
                        { term: "Merry Christmas!", sent: "'Merry Christmas!' 'And to you too!'", trans: "<span style='color:#0077b6'>'Feliz Natal!' 'E para você também!'</span>" },
                        { term: "When is...?", sent: "'When is your birthday?' 'It's today!'", trans: "<span style='color:#0077b6'>'Quando é seu aniversário?' 'É hoje!'</span>" },
                        { term: "What's the date...?", sent: "'What's the date today?' 'It's July 4th.'", trans: "<span style='color:#0077b6'>'Qual a data hoje?' 'É 4 de julho.'</span>" },
                        { term: "My favorite...", sent: "My favorite holiday is Carnival.", trans: "<span style='color:#0077b6'>Meu feriado favorito é Carnaval.</span>" },
                        { term: "Whose...?", sent: "Whose phone is this? It's mine.", trans: "<span style='color:#0077b6'>De quem é este telefone? É meu.</span>" },
                        { term: "Of course", sent: "Of course.", trans: "<span style='color:#0077b6'>Com certeza / É claro.</span>" }
                    ]
                }
            ],

            // 2C: Practice MCQ Drills
            drills: [
                {
                    type: "mcq",
                    q: "Choose the correct translation for 'Celebrate':",
                    options: [
                        { t: "Decorar", c: false },
                        { t: "Comemorar", c: true },
                        { t: "Viajar", c: false },
                        { t: "Comer", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'We _______ a costume on Halloween.'",
                    options: [
                        { t: "eat", c: false },
                        { t: "wear", c: true },
                        { t: "sing", c: false },
                        { t: "go", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "How many months are in a year?",
                    options: [
                        { t: "Ten", c: false },
                        { t: "Seven", c: false },
                        { t: "Twelve", c: true },
                        { t: "Thirty", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "In which season is it very hot?",
                    options: [
                        { t: "Winter", c: false },
                        { t: "Summer", c: true },
                        { t: "Autumn", c: false },
                        { t: "Spring", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When do we see Santa Claus?",
                    options: [
                        { t: "Easter", c: false },
                        { t: "Christmas", c: true },
                        { t: "Carnival", c: false },
                        { t: "Halloween", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which holiday is celebrated on October 31st?",
                    options: [
                        { t: "Christmas", c: false },
                        { t: "Halloween", c: true },
                        { t: "Labor Day", c: false },
                        { t: "Children's Day", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "We watch these in the sky on New Year's Eve:",
                    options: [
                        { t: "Gifts", c: false },
                        { t: "Decorations", c: false },
                        { t: "Fireworks", c: true },
                        { t: "Costumes", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What is the first month of the year?",
                    options: [
                        { t: "December", c: false },
                        { t: "January", c: true },
                        { t: "March", c: false },
                        { t: "July", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What comes after 'Second' (2nd)?",
                    options: [
                        { t: "First", c: false },
                        { t: "Fourth", c: false },
                        { t: "Third", c: true },
                        { t: "Fifth", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: '_______ is your birthday?'",
                    options: [
                        { t: "Who", c: false },
                        { t: "Where", c: false },
                        { t: "When", c: true },
                        { t: "What", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: '_______ costume is this?'",
                    options: [
                        { t: "Who", c: false },
                        { t: "Whose", c: true },
                        { t: "Where", c: false },
                        { t: "When", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What is the correct response to 'Merry Christmas!'?",
                    options: [
                        { t: "Happy Birthday!", c: false },
                        { t: "Merry Christmas!", c: true },
                        { t: "I am fine.", c: false },
                        { t: "Yes, I am.", c: false }
                    ]
                },
                // --- Expanded Exercises ---
                {
                    type: "mcq",
                    q: "What month comes after April?",
                    options: [
                        { t: "March", c: false },
                        { t: "June", c: false },
                        { t: "May", c: true },
                        { t: "August", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct spelling for 12th:",
                    options: [
                        { t: "Twelveth", c: false },
                        { t: "Twelfth", c: true },
                        { t: "Twelth", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "In which season do the leaves fall from the trees?",
                    options: [
                        { t: "Spring", c: false },
                        { t: "Summer", c: false },
                        { t: "Autumn / Fall", c: true },
                        { t: "Winter", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which month is the last month of the year?",
                    options: [
                        { t: "January", c: false },
                        { t: "November", c: false },
                        { t: "December", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "How do you say 21st?",
                    options: [
                        { t: "Twenty-one", c: false },
                        { t: "Twenty-first", c: true },
                        { t: "Twentieth-one", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete the sentence: 'We _______ the house with lights for the party.'",
                    options: [
                        { t: "eat", c: false },
                        { t: "find", c: false },
                        { t: "decorate", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "September 7th is a holiday in Brazil. It is _______ Day.",
                    options: [
                        { t: "Labor", c: false },
                        { t: "Independence", c: true },
                        { t: "Children's", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "How do you say 31st?",
                    options: [
                        { t: "Thirty-one", c: false },
                        { t: "Thirty-first", c: true },
                        { t: "Thirtieth-one", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'My birthday is on _______ 1st.'",
                    options: [
                        { t: "February", c: true },
                        { t: "One", c: false },
                        { t: "First", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which verb means to meet with people?",
                    options: [
                        { t: "Get together", c: true },
                        { t: "Watch", c: false },
                        { t: "Find", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "In the spring, the _______ grow.",
                    options: [
                        { t: "Snow", c: false },
                        { t: "Flowers", c: true },
                        { t: "Ice", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I receive many _______ for my birthday.'",
                    options: [
                        { t: "Decorations", c: false },
                        { t: "Gifts", c: true },
                        { t: "Months", c: false }
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
                    title: "The Definite Article 'THE'",
                    audio: "TTS: We use THE to talk about specific or unique things, and before ordinal numbers in dates. The sky is blue. The party was fun. My birthday is on the fifth of May.",
                    explanation: "We use 'THE' to talk about specific things, unique things (like the sun, the moon), and usually before ordinal numbers when saying dates.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos 'THE' para falar de coisas específicas, coisas únicas (como o sol, a lua) e geralmente antes de números ordinais ao dizer datas.)</span>",
                    samples: [
                        { en: "The sky is blue. / The party was fun.", pt: "<span style='color:#0077b6'>O céu é azul. / A festa foi divertida.</span>" },
                        { en: "My birthday is on the fifth of May.", pt: "<span style='color:#0077b6'>Meu aniversário é no dia cinco de maio.</span>" },
                        { en: "The sun is hot in the summer.", pt: "<span style='color:#0077b6'>O sol é quente no verão.</span>" }
                    ]
                },
                {
                    title: "Prepositions: IN vs. ON",
                    audio: "TTS: Use IN for long periods like months, years, and seasons. Use ON for specific dates, days of the week, or holidays with the word Day. In December. In winter. On Monday. On Christmas Day.",
                    explanation: "We use different prepositions depending on the time period.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos preposições diferentes dependendo do período de tempo.)</span>",
                    samples: [
                        { en: "IN + Months / Years / Seasons. (e.g., in December, in 2025, in winter).", pt: "<span style='color:#0077b6'>(Para meses, anos, estações).</span>" },
                        { en: "ON + Specific Dates / Days / Holidays with 'Day'. (e.g., on December 25th, on Monday, on Christmas Day).", pt: "<span style='color:#0077b6'>(Para datas específicas, dias da semana, feriados com 'Day').</span>" }
                    ]
                },
                {
                    title: "Possessive Pronouns",
                    audio: "TTS: These words show ownership and replace the noun. They stand alone at the end of a phrase. Mine, yours, his, hers, ours, theirs. This gift is mine.",
                    explanation: "These words show ownership (who something belongs to) and replace the noun. They stand alone at the end of a phrase.<br><br><span style='color:#0077b6; font-style:italic;'>(Estas palavras mostram posse e substituem o substantivo. Elas ficam sozinhas no final de uma frase.)</span>",
                    samples: [
                        { en: "This is my gift. -> This gift is mine.", pt: "<span style='color:#0077b6'>Este presente é meu.</span>" },
                        { en: "Is this book yours?", pt: "<span style='color:#0077b6'>Este livro é seu?</span>" },
                        { en: "It is not mine. Maybe it is hers?", pt: "<span style='color:#0077b6'>Não é minha. Talvez seja dela?</span>" }
                    ]
                },
                {
                    title: "Question Word 'Whose'",
                    audio: "TTS: We use Whose to ask who owns something. It means De quem. Whose birthday is it? Whose pen is this?",
                    explanation: "We use 'Whose' to ask who owns something. It means 'De quem'.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos 'Whose' para perguntar quem é o dono de algo. Significa 'De quem'.)</span>",
                    samples: [
                        { en: "Whose + noun + is this/that?", pt: "<span style='color:#0077b6'>(Estrutura: De quem + substantivo + é este/aquele?)</span>" },
                        { en: "Whose birthday is it?", pt: "<span style='color:#0077b6'>De quem é o aniversário?</span>" },
                        { en: "Whose costume is this?", pt: "<span style='color:#0077b6'>De quem é esta fantasia?</span>" }
                    ]
                },
                {
                    title: "Ordinal Numbers (Dates)",
                    audio: "TTS: For dates, we change Cardinal numbers to Ordinal numbers. One becomes First. Two becomes Second. Three becomes Third. For most others, add T H.",
                    explanation: "For dates and positions, we change Cardinal numbers (1, 2, 3) to Ordinal numbers (1st, 2nd, 3rd).<br><br><span style='color:#0077b6; font-style:italic;'>(Para datas e posições, mudamos números Cardinais para Ordinais.)</span>",
                    samples: [
                        { en: "1st (First), 2nd (Second), 3rd (Third).", pt: "<span style='color:#0077b6'>(Os três irregulares).</span>" },
                        { en: "Add -th: 4th (Fourth), 10th (Tenth).", pt: "<span style='color:#0077b6'>(Regra padrão).</span>" },
                        { en: "Spelling changes: 5th (Fifth), 9th (Ninth), 12th (Twelfth), 20th (Twentieth).", pt: "<span style='color:#0077b6'>(Mudanças na escrita).</span>" }
                    ]
                }
            ],

            // 3B: Natural Examples (Dialogues Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Prepositions (IN/ON) + THE",
                    audio: "audio/6-2-4/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "When is Carnival? Is it in January?", 
                            pt: "<span style='color:#0077b6'>Quando é o Carnaval? É em janeiro?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Sometimes. But this year it is on March 5th. The parade is beautiful!", 
                            pt: "<span style='color:#0077b6'>Às vezes. Mas este ano é no dia 5 de março. O desfile é lindo!</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Possessive Pronouns + Whose",
                    audio: "audio/6-2-4/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Look at this costume. Whose costume is this?", 
                            pt: "<span style='color:#0077b6'>Olhe para esta fantasia. De quem é esta fantasia?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "It is not mine. My costume is green. Maybe it is hers?", 
                            pt: "<span style='color:#0077b6'>Não é minha. Minha fantasia é verde. Talvez seja dela?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Yes, it is Sarah's. It is theirs (the family's).", 
                            pt: "<span style='color:#0077b6'>Sim, é da Sarah. É deles (da família).</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Ordinal Numbers",
                    audio: "audio/6-2-4/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Is today the first of April?", 
                            pt: "<span style='color:#0077b6'>Hoje é primeiro de abril?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, today is the second (2nd). My party is on the twelfth (12th).", 
                            pt: "<span style='color:#0077b6'>Não, hoje é dia dois. Minha festa é no dia doze.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ Drills
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Definite Article: Choose the correct sentence.",
                    options: [
                        { t: "I see a sun.", c: false },
                        { t: "I see the sun.", c: true },
                        { t: "I see an sun.", c: false },
                        { t: "I see sun.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions: Complete: 'My birthday is _____ July.'",
                    options: [
                        { t: "on", c: false },
                        { t: "at", c: false },
                        { t: "in", c: true },
                        { t: "the", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions: Complete: 'The party is _____ Saturday.'",
                    options: [
                        { t: "in", c: false },
                        { t: "on", c: true },
                        { t: "at", c: false },
                        { t: "the", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Pronouns: 'This is not my cake. It is _______ (your cake).'",
                    options: [
                        { t: "your", c: false },
                        { t: "my", c: false },
                        { t: "yours", c: true },
                        { t: "you", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Question Word: '_______ bag is this?' 'It's mine.'",
                    options: [
                        { t: "Who", c: false },
                        { t: "What", c: false },
                        { t: "Whose", c: true },
                        { t: "When", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Ordinal Numbers: What is the ordinal number for 'One'?",
                    options: [
                        { t: "Oneth", c: false },
                        { t: "First", c: true },
                        { t: "Once", c: false },
                        { t: "One", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Ordinal Numbers: What is the ordinal number for 'Seven'?",
                    options: [
                        { t: "Seven", c: false },
                        { t: "Seventh", c: true },
                        { t: "Sevnth", c: false },
                        { t: "Seventy", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling: Choose the correct spelling for '12th':",
                    options: [
                        { t: "Twelveth", c: false },
                        { t: "Twelth", c: false },
                        { t: "Twelfth", c: true },
                        { t: "Twelve", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Compounds: How do you say '22nd'?",
                    options: [
                        { t: "Twenty-two", c: false },
                        { t: "Twentieth-second", c: false },
                        { t: "Twenty-second", c: true },
                        { t: "Second-twenty", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Usage: Complete: 'New Year's Day is on January _______.'",
                    options: [
                        { t: "one", c: false },
                        { t: "first", c: true },
                        { t: "once", c: false },
                        { t: "oneth", c: false }
                    ]
                },
                // --- Expanded Exercises ---
                {
                    type: "mcq",
                    q: "Prepositions: 'I was born _______ 2012.'",
                    options: [
                        { t: "in", c: true },
                        { t: "on", c: false },
                        { t: "at", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions: 'Independence Day in Brazil is _______ September 7th.'",
                    options: [
                        { t: "in", c: false },
                        { t: "on", c: true },
                        { t: "at", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Prepositions: 'We go to the beach _______ summer.'",
                    options: [
                        { t: "on", c: false },
                        { t: "at", c: false },
                        { t: "in", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Pronouns: 'This is her costume. It is _______.'",
                    options: [
                        { t: "hers", c: true },
                        { t: "her", c: false },
                        { t: "she", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Pronouns: 'Is that your backpack? No, it's _______ (my backpack).'",
                    options: [
                        { t: "my", c: false },
                        { t: "mine", c: true },
                        { t: "me", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Pronouns: 'This is our house. The house is _______.'",
                    options: [
                        { t: "our", c: false },
                        { t: "ours", c: true },
                        { t: "we", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Whose: '_______ birthday is in May?' 'Albert's birthday.'",
                    options: [
                        { t: "Who", c: false },
                        { t: "Whose", c: true },
                        { t: "What", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Definite Article: '_______ moon is very beautiful tonight.'",
                    options: [
                        { t: "A", c: false },
                        { t: "An", c: false },
                        { t: "The", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Ordinal Numbers: Choose the correct spelling for '5th':",
                    options: [
                        { t: "Fiveth", c: false },
                        { t: "Fifth", c: true },
                        { t: "Fivth", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Ordinal Numbers: Choose the correct spelling for '9th':",
                    options: [
                        { t: "Nineth", c: false },
                        { t: "Ninth", c: true },
                        { t: "Nine", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Ordinal Numbers: Choose the correct spelling for '20th':",
                    options: [
                        { t: "Twentieth", c: true },
                        { t: "Twentyth", c: false },
                        { t: "Twenty", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Cardinal vs Ordinal: 'I have _______ (3) sisters.'",
                    options: [
                        { t: "third", c: false },
                        { t: "three", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Cardinal vs Ordinal: 'Christmas is on the _______ (25) of December.'",
                    options: [
                        { t: "twenty-five", c: false },
                        { t: "twenty-fifth", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Whose: '_______ presents are these?' 'They are mine.'",
                    options: [
                        { t: "Whose", c: true },
                        { t: "Who", c: false },
                        { t: "Which", c: false }
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
                    text: "My birthday is in July.<br><small style='color:#0077b6'>(Meu aniversário é em julho.)</small>", 
                    audio: "TTS: My birthday is in July.", 
                    arrow: "↘" 
                },
                { 
                    text: "When is the party?<br><small style='color:#0077b6'>(Quando é a festa?)</small>", 
                    audio: "TTS: When is the party?", 
                    arrow: "↘" 
                },
                { 
                    text: "It is on December 25th.<br><small style='color:#0077b6'>(É no dia 25 de dezembro.)</small>", 
                    audio: "TTS: It is on December 25th.", 
                    arrow: "↘" 
                },
                { 
                    text: "Whose gift is this?<br><small style='color:#0077b6'>(De quem é este presente?)</small>", 
                    audio: "TTS: Whose gift is this?", 
                    arrow: "↘" 
                },
                { 
                    text: "It is mine.<br><small style='color:#0077b6'>(É meu.)</small>", 
                    audio: "TTS: It is mine.", 
                    arrow: "↘" 
                },
                { 
                    text: "I love the summer.<br><small style='color:#0077b6'>(Eu amo o verão.)</small>", 
                    audio: "TTS: I love the summer.", 
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
                    instruction: "Listen to Albert talking about his favorite holiday. Type the missing words. <br><small style='color:#0077b6'>(Ouça Albert falando sobre seu feriado favorito. Digite as palavras que faltam.)</small>",
                    audio: "TTS: My favorite holiday is Christmas. It is in December. We celebrate on the 25th. I love the presents!",
                    text: "My favorite holiday is [Christmas]. It is in [December]. We celebrate on the [25th]. I love the [presents]!"
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation about a birthday. Choose the correct option. <br><small style='color:#0077b6'>(Ouça a conversa sobre um aniversário. Escolha a opção correta.)</small>",
                    audio: "audio/6-2-4/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Celine: Is your birthday in [March | April]?", 
                            a: "March" 
                        },
                        { 
                            q: "Albert: No, it is in [May | June].", 
                            a: "May" 
                        },
                        { 
                            q: "Celine: What [date | day]?", 
                            a: "date" 
                        },
                        { 
                            q: "Albert: It is on May [15th | 5th].", 
                            a: "15th" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer. <br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta correta.)</small>",
                    audio: "TTS: Whose costume is this?",
                    options: [
                        { t: "It is on October 31st.", c: false },
                        { t: "It is mine.", c: true },
                        { t: "I love Halloween.", c: false },
                        { t: "It is in the winter.", c: false }
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
                    title: "Narration: Christmas in Brazil",
                    audio: "TTS: Christmas in Brazil is very different from cold countries. It happens in December, but it is not winter. It is summer! The weather is hot and sunny. Families get together on Christmas Eve, December 24th. They eat a big dinner at midnight. They decorate their houses with lights and a tree. It is a happy time for everyone. || audio/6-2-4/p6_text1.mp3",
                    body: "Christmas in Brazil is very different from cold countries. It happens in December, but it is not winter. It is summer! The weather is hot and sunny. Families get together on Christmas Eve, December 24th. They eat a big dinner at midnight. They decorate their houses with lights and a tree. It is a happy time for everyone.",
                    questions: [
                        { 
                            q: "When is Christmas in Brazil?", 
                            options: [ 
                                {t: "In the winter", c: false}, 
                                {t: "In the summer", c: true}, 
                                {t: "In the spring", c: false},
                                {t: "In the autumn", c: false}
                            ] 
                        },
                        { 
                            q: "What happens on December 24th?", 
                            options: [ 
                                {t: "They go to school.", c: false}, 
                                {t: "They sleep early.", c: false}, 
                                {t: "Families get together.", c: true},
                                {t: "It snows.", c: false}
                            ] 
                        },
                        { 
                            q: "What do they decorate?", 
                            options: [ 
                                {t: "The beach", c: false}, 
                                {t: "Their houses", c: true}, 
                                {t: "The school", c: false},
                                {t: "The car", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: The Costume Party",
                    audio: "audio/6-2-4/p6_text2.mp3",
                    body: "<b>Celine:</b> Hi Albert! Are you ready for the Halloween party?<br><b>Albert:</b> Yes! It is on October 31st. I have a great costume.<br><b>Celine:</b> Whose costume is scary? Is it yours?<br><b>Albert:</b> No, mine is funny. I am a banana!<br><b>Celine:</b> Haha! Mine is a witch costume. It is black and purple.<br><b>Albert:</b> Cool! I love parties in the autumn.",
                    questions: [
                        { 
                            q: "When is the party?", 
                            options: [ 
                                {t: "On October 1st", c: false}, 
                                {t: "On October 31st", c: true}, 
                                {t: "In November", c: false},
                                {t: "In December", c: false}
                            ] 
                        },
                        { 
                            q: "What is Albert's costume?", 
                            options: [ 
                                {t: "A witch", c: false}, 
                                {t: "A ghost", c: false}, 
                                {t: "A banana", c: true},
                                {t: "A superhero", c: false}
                            ] 
                        },
                        { 
                            q: "Whose costume is a witch?", 
                            options: [ 
                                {t: "Albert's", c: false}, 
                                {t: "Celine's", c: true}, 
                                {t: "Mr. D's", c: false},
                                {t: "Nobody's", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: My Favorite Season",
                    audio: "TTS: My favorite season is spring. It comes after winter. In the spring, the weather is warm but not too hot. The flowers bloom, and the trees are green again. I love to go to the park and read a book under a tree. In my country, spring starts in September. It is a beautiful time of the year. || audio/6-2-4/p6_text3.mp3",
                    body: "My favorite season is spring. It comes after winter. In the spring, the weather is warm but not too hot. The flowers bloom, and the trees are green again. I love to go to the park and read a book under a tree. In my country, spring starts in September. It is a beautiful time of the year.",
                    questions: [
                        { 
                            q: "What is the favorite season?", 
                            options: [ 
                                {t: "Winter", c: false}, 
                                {t: "Summer", c: false}, 
                                {t: "Spring", c: true},
                                {t: "Autumn", c: false}
                            ] 
                        },
                        { 
                            q: "What happens in spring?", 
                            options: [ 
                                {t: "It snows.", c: false}, 
                                {t: "Leaves fall.", c: false}, 
                                {t: "Flowers bloom.", c: true},
                                {t: "It is very cold.", c: false}
                            ] 
                        },
                        { 
                            q: "When does spring start in the text?", 
                            options: [ 
                                {t: "In December", c: false}, 
                                {t: "In March", c: false}, 
                                {t: "In September", c: true},
                                {t: "In January", c: false}
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
                // Drill 1: Matching (Holiday -> Month)
                {
                    type: "matching",
                    instruction: "Match the holiday to the month it usually happens. <br><small style='color:#0077b6'>(Combine o feriado com o mês em que geralmente acontece.)</small>",
                    pairs: [
                        { left: "Christmas", right: "December", val: "1" },
                        { left: "Halloween", right: "October", val: "2" },
                        { left: "Independence Day (USA)", right: "July", val: "3" },
                        { left: "New Year's Day", right: "January", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Unscramble)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence. <br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "birthday / on / My / is / May 1st.",
                    correct: "My birthday is on May 1st."
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the question.",
                    sentence: "yours / Is / this / gift / ?",
                    correct: "Is this gift yours ?"
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the sentence.",
                    sentence: "in / We / celebrate / winter / don't / .",
                    correct: "We don't celebrate in winter ."
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the question.",
                    sentence: "favorite / is / season / What / your / ?",
                    correct: "What is your favorite season ?"
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group. <br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "January", c: false },
                        { t: "February", c: false },
                        { t: "Summer", c: true }, // Season vs Months
                        { t: "March", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "First", c: false },
                        { t: "Second", c: false },
                        { t: "Three", c: true }, // Cardinal vs Ordinal
                        { t: "Fourth", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Mine", c: false },
                        { t: "Yours", c: false },
                        { t: "My", c: true }, // Possessive Adjective vs Pronoun
                        { t: "Hers", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Christmas", c: false },
                        { t: "Party", c: true }, // Event type vs Holiday Name
                        { t: "Easter", c: false },
                        { t: "Carnival", c: false }
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Select the correct preposition or article. <br><small style='color:#0077b6'>(Selecione a preposição ou artigo correto.)</small>",
                    questions: [
                        { q: "My birthday is [in | on | the] July.", a: "in" },
                        { q: "The party is [on | in | the] Saturday.", a: "on" },
                        { q: "Look at [the | in | on] moon!", a: "the" },
                        { q: "That bag is [mine | my | me].", a: "mine" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: My favorite holiday. Now it's your turn! Write about your favorite holiday.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Meu feriado favorito. Agora é a sua vez! Escreva sobre o seu feriado favorito.)</span></small>",
            example: "\"My favorite holiday is Christmas. It is on December 25th. I love the decorations. I eat turkey and chocolate. I open gifts with my family.\"<br><br><small><span style='color:#0077b6'>(\"Meu feriado favorito é o Natal. É no dia 25 de dezembro. Eu amo as decorações. Eu como peru e chocolate. Eu abro presentes com minha família.\")</span></small>",
            prompts: [
                "What is your favorite holiday? <br><small><span style='color:#0077b6'>(Qual é o seu feriado favorito?)</span></small>",
                "When is it? (Use \"It is in...\" or \"It is on...\") <br><small><span style='color:#0077b6'>(Quando ele é? Use \"It is in...\" ou \"It is on...\")</span></small>",
                "What do you do? (I eat..., I wear..., I see...) <br><small><span style='color:#0077b6'>(O que você faz? Eu como..., eu visto..., eu vejo...)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Verbs, Time & Holidays)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Verbs ---
                { 
                    term: "Celebrate", 
                    definition: "To do something special for an important event.", 
                    defTrans: "comemorar / celebrar",
                    example: "We celebrate my birthday today.", 
                    audioFront: "TTS: Celebrate",
                    audioBack: "TTS: We celebrate my birthday today." 
                },
                { 
                    term: "Happen", 
                    definition: "To take place; to occur.", 
                    defTrans: "acontecer",
                    example: "When does the party happen?", 
                    audioFront: "TTS: Happen",
                    audioBack: "TTS: When does the party happen?" 
                },
                { 
                    term: "Decorate", 
                    definition: "To make something look more attractive.", 
                    defTrans: "decorar",
                    example: "We decorate the house for Christmas.", 
                    audioFront: "TTS: Decorate",
                    audioBack: "TTS: We decorate the house for Christmas." 
                },
                { 
                    term: "Get together", 
                    definition: "To meet and spend time with people.", 
                    defTrans: "reunir-se",
                    example: "Families get together on holidays.", 
                    audioFront: "TTS: Get together",
                    audioBack: "TTS: Families get together on holidays." 
                },
                { 
                    term: "Wear", 
                    definition: "To have clothing or a costume on your body.", 
                    defTrans: "vestir / usar (roupa)",
                    example: "I wear a costume on Halloween.", 
                    audioFront: "TTS: Wear",
                    audioBack: "TTS: I wear a costume on Halloween." 
                },
                { 
                    term: "Watch", 
                    definition: "To look at or observe attentively.", 
                    defTrans: "assistir",
                    example: "We watch the fireworks.", 
                    audioFront: "TTS: Watch",
                    audioBack: "TTS: We watch the fireworks." 
                },
                { 
                    term: "Give", 
                    definition: "To present voluntarily without expecting compensation.", 
                    defTrans: "dar",
                    example: "I give you a gift.", 
                    audioFront: "TTS: Give",
                    audioBack: "TTS: I give you a gift." 
                },
                { 
                    term: "Receive", 
                    definition: "To get or be given something.", 
                    defTrans: "receber",
                    example: "I receive many cards.", 
                    audioFront: "TTS: Receive",
                    audioBack: "TTS: I receive many cards." 
                },
                { 
                    term: "Find", 
                    definition: "To discover something by looking.", 
                    defTrans: "encontrar",
                    example: "Can you find the date?", 
                    audioFront: "TTS: Find",
                    audioBack: "TTS: Can you find the date?" 
                },
                { 
                    term: "Ask", 
                    definition: "To say something in order to obtain an answer.", 
                    defTrans: "perguntar / pedir",
                    example: "Ask the teacher.", 
                    audioFront: "TTS: Ask",
                    audioBack: "TTS: Ask the teacher." 
                },
                { 
                    term: "Say", 
                    definition: "To speak words.", 
                    defTrans: "dizer",
                    example: "Say 'Happy New Year'!", 
                    audioFront: "TTS: Say",
                    audioBack: "TTS: Say Happy New Year!" 
                },
                { 
                    term: "Use", 
                    definition: "To take or deploy something as a means of accomplishing a purpose.", 
                    defTrans: "usar",
                    example: "We use candles on the cake.", 
                    audioFront: "TTS: Use",
                    audioBack: "TTS: We use candles on the cake." 
                },
                { 
                    term: "Love", 
                    definition: "To like something very much.", 
                    defTrans: "amar",
                    example: "I love holidays.", 
                    audioFront: "TTS: Love",
                    audioBack: "TTS: I love holidays." 
                },
                { 
                    term: "Go", 
                    definition: "To move from one place to another.", 
                    defTrans: "ir",
                    example: "We go to the beach.", 
                    audioFront: "TTS: Go",
                    audioBack: "TTS: We go to the beach." 
                },
                { 
                    term: "Eat", 
                    definition: "To consume food.", 
                    defTrans: "comer",
                    example: "We eat chocolate eggs.", 
                    audioFront: "TTS: Eat",
                    audioBack: "TTS: We eat chocolate eggs." 
                },
                { 
                    term: "Learn", 
                    definition: "To gain knowledge or skill.", 
                    defTrans: "aprender",
                    example: "We learn about history.", 
                    audioFront: "TTS: Learn",
                    audioBack: "TTS: We learn about history." 
                },

                // --- Time & Seasons ---
                { 
                    term: "Date", 
                    definition: "A specific day of the month or year.", 
                    defTrans: "data",
                    example: "What is the date today?", 
                    audioFront: "TTS: Date",
                    audioBack: "TTS: What is the date today?" 
                },
                { 
                    term: "Month", 
                    definition: "Each of the twelve named periods of a year.", 
                    defTrans: "mês",
                    example: "July is a month.", 
                    audioFront: "TTS: Month",
                    audioBack: "TTS: July is a month." 
                },
                { 
                    term: "Year", 
                    definition: "The time taken for the earth to orbit the sun.", 
                    defTrans: "ano",
                    example: "Next year I will be 13.", 
                    audioFront: "TTS: Year",
                    audioBack: "TTS: Next year I will be 13." 
                },
                { 
                    term: "Season", 
                    definition: "Each of the four divisions of the year.", 
                    defTrans: "estação do ano",
                    example: "What is your favorite season?", 
                    audioFront: "TTS: Season",
                    audioBack: "TTS: What is your favorite season?" 
                },
                { 
                    term: "Summer", 
                    definition: "The warmest season of the year.", 
                    defTrans: "Verão",
                    example: "It is hot in the summer.", 
                    audioFront: "TTS: Summer",
                    audioBack: "TTS: It is hot in the summer." 
                },
                { 
                    term: "Winter", 
                    definition: "The coldest season of the year.", 
                    defTrans: "Inverno",
                    example: "It is cold in the winter.", 
                    audioFront: "TTS: Winter",
                    audioBack: "TTS: It is cold in the winter." 
                },
                { 
                    term: "Autumn / Fall", 
                    definition: "The season after summer and before winter.", 
                    defTrans: "Outono",
                    example: "Leaves fall in the autumn.", 
                    audioFront: "TTS: Autumn or Fall",
                    audioBack: "TTS: Leaves fall in the autumn." 
                },
                { 
                    term: "Spring", 
                    definition: "The season after winter and before summer.", 
                    defTrans: "Primavera",
                    example: "I love the flowers in spring.", 
                    audioFront: "TTS: Spring",
                    audioBack: "TTS: I love the flowers in spring." 
                },

                // --- Holidays ---
                { 
                    term: "Holiday", 
                    definition: "A day of festivity or recreation when no work is done.", 
                    defTrans: "Feriado",
                    example: "Today is a holiday.", 
                    audioFront: "TTS: Holiday",
                    audioBack: "TTS: Today is a holiday." 
                },
                { 
                    term: "Birthday", 
                    definition: "The anniversary of the day on which a person was born.", 
                    defTrans: "Aniversário",
                    example: "Happy Birthday!", 
                    audioFront: "TTS: Birthday",
                    audioBack: "TTS: Happy Birthday!" 
                },
                { 
                    term: "Christmas", 
                    definition: "Festival celebrating Christ's birth on December 25th.", 
                    defTrans: "Natal",
                    example: "Christmas is in December.", 
                    audioFront: "TTS: Christmas",
                    audioBack: "TTS: Christmas is in December." 
                },
                { 
                    term: "Carnival", 
                    definition: "A period of public revelry and parades.", 
                    defTrans: "Carnaval",
                    example: "Carnival is a big party.", 
                    audioFront: "TTS: Carnival",
                    audioBack: "TTS: Carnival is a big party." 
                },
                // --- Holidays (Continued) ---
                { 
                    term: "Easter", 
                    definition: "Holiday associated with eggs and bunnies.", 
                    defTrans: "Páscoa",
                    example: "We eat chocolate on Easter.", 
                    audioFront: "TTS: Easter",
                    audioBack: "TTS: We eat chocolate on Easter." 
                },
                { 
                    term: "Halloween", 
                    definition: "Holiday on October 31st involving costumes and candy.", 
                    defTrans: "Halloween / Dia das Bruxas",
                    example: "Halloween is scary!", 
                    audioFront: "TTS: Halloween",
                    audioBack: "TTS: Halloween is scary!" 
                },
                { 
                    term: "New Year's Eve", 
                    definition: "The last day of the year, December 31st.", 
                    defTrans: "Véspera de Ano Novo",
                    example: "We party on New Year's Eve.", 
                    audioFront: "TTS: New Year's Eve",
                    audioBack: "TTS: We party on New Year's Eve." 
                },
                { 
                    term: "Independence Day", 
                    definition: "A national holiday celebrating freedom from another country.", 
                    defTrans: "Dia da Independência",
                    example: "September 7th is Independence Day.", 
                    audioFront: "TTS: Independence Day",
                    audioBack: "TTS: September 7th is Independence Day." 
                },
                { 
                    term: "Children's Day", 
                    definition: "A holiday to celebrate children.", 
                    defTrans: "Dia das Crianças",
                    example: "Children's Day is in October.", 
                    audioFront: "TTS: Children's Day",
                    audioBack: "TTS: Children's Day is in October." 
                },
                { 
                    term: "Labor Day", 
                    definition: "A holiday honoring working people.", 
                    defTrans: "Dia do Trabalho",
                    example: "We don't work on Labor Day.", 
                    audioFront: "TTS: Labor Day",
                    audioBack: "TTS: We don't work on Labor Day." 
                },

                // --- Party Items & Traditions ---
                { 
                    term: "Party", 
                    definition: "A social gathering of invited guests.", 
                    defTrans: "festa",
                    example: "Let's go to the party.", 
                    audioFront: "TTS: Party",
                    audioBack: "TTS: Let's go to the party." 
                },
                { 
                    term: "Costume", 
                    definition: "Clothes worn to look like someone or something else.", 
                    defTrans: "fantasia",
                    example: "I like your pirate costume.", 
                    audioFront: "TTS: Costume",
                    audioBack: "TTS: I like your pirate costume." 
                },
                { 
                    term: "Decoration", 
                    definition: "Items used to make something look festive.", 
                    defTrans: "decoração",
                    example: "The Christmas decoration is nice.", 
                    audioFront: "TTS: Decoration",
                    audioBack: "TTS: The Christmas decoration is nice." 
                },
                { 
                    term: "Tradition", 
                    definition: "A custom or belief passed down through generations.", 
                    defTrans: "tradição",
                    example: "It is a family tradition.", 
                    audioFront: "TTS: Tradition",
                    audioBack: "TTS: It is a family tradition." 
                },

                // --- Months (Selection) ---
                { 
                    term: "January", 
                    definition: "The first month of the year.", 
                    defTrans: "Janeiro",
                    example: "January is the first month.", 
                    audioFront: "TTS: January",
                    audioBack: "TTS: January is the first month." 
                },
                { 
                    term: "December", 
                    definition: "The last month of the year.", 
                    defTrans: "Dezembro",
                    example: "Christmas is in December.", 
                    audioFront: "TTS: December",
                    audioBack: "TTS: Christmas is in December." 
                },

                // --- Ordinal Numbers ---
                { 
                    term: "First (1st)", 
                    definition: "Coming before all others in time or order.", 
                    defTrans: "Primeiro",
                    example: "This is the first day.", 
                    audioFront: "TTS: First",
                    audioBack: "TTS: This is the first day." 
                },
                { 
                    term: "Twentieth (20th)", 
                    definition: "Ordinal number for 20.", 
                    defTrans: "Vigésimo",
                    example: "It is the twentieth century.", 
                    audioFront: "TTS: Twentieth",
                    audioBack: "TTS: It is the twentieth century." 
                },

                // --- Phrases & Expressions ---
                { 
                    term: "Whose is this?", 
                    definition: "Question asking about the owner of an object.", 
                    defTrans: "De quem é isto?",
                    example: "Whose is this? It's mine.", 
                    audioFront: "TTS: Whose is this?",
                    audioBack: "TTS: Whose is this? It's mine." 
                },

                // --- Grammar Points ---
                { 
                    term: "The", 
                    definition: "Definite article used for specific or unique things.", 
                    defTrans: "O, A, Os, As (Específico)",
                    example: "Look at the moon.", 
                    audioFront: "TTS: The",
                    audioBack: "TTS: Look at the moon." 
                },
                { 
                    term: "IN", 
                    definition: "Preposition used for months, years, and seasons.", 
                    defTrans: "Em (Meses, Anos, Estações)",
                    example: "My birthday is in July.", 
                    audioFront: "TTS: I N",
                    audioBack: "TTS: My birthday is in July." 
                },
                { 
                    term: "ON", 
                    definition: "Preposition used for days and specific dates.", 
                    defTrans: "Em (Dias, Datas Específicas)",
                    example: "The party is on Saturday.", 
                    audioFront: "TTS: O N",
                    audioBack: "TTS: The party is on Saturday." 
                },
                { 
                    term: "Possessive Pronouns", 
                    definition: "Words that show ownership and replace a noun (mine, yours).", 
                    defTrans: "Pronomes Possessivos",
                    example: "This bag is mine.", 
                    audioFront: "TTS: Possessive Pronouns",
                    audioBack: "TTS: This bag is mine." 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Part 1: Context, Verbs, and Time)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "birthday", 
            definition: "The anniversary of the day on which a person was born.", 
            translation: "Aniversário" 
        },
        { 
            topic: "Context", 
            term: "may", 
            definition: "The fifth month of the year.", 
            translation: "Maio" 
        },
        { 
            topic: "Context", 
            term: "fifteenth", 
            definition: "The ordinal number for 15.", 
            translation: "Décimo quinto" 
        },
        { 
            topic: "Context", 
            term: "holiday", 
            definition: "A day of festivity or recreation when no work is done.", 
            translation: "Feriado" 
        },
        { 
            topic: "Context", 
            term: "labor-day", 
            definition: "A holiday honoring working people.", 
            translation: "Dia do Trabalho" 
        },
        { 
            topic: "Context", 
            term: "december", 
            definition: "The twelfth month of the year.", 
            translation: "Dezembro" 
        },
        { 
            topic: "Context", 
            term: "christmas", 
            definition: "Festival celebrating Christ's birth on December 25th.", 
            translation: "Natal" 
        },
        { 
            topic: "Context", 
            term: "decoration", 
            definition: "Items used to make something look festive or beautiful.", 
            translation: "Decoração" 
        },
        { 
            topic: "Context", 
            term: "gift", 
            definition: "A thing given willingly to someone without payment.", 
            translation: "Presente" 
        },
        { 
            topic: "Context", 
            term: "whose-q", 
            definition: "Question word used to ask about ownership.", 
            translation: "De quem" 
        },
        { 
            topic: "Context", 
            term: "costume", 
            definition: "Clothes worn to look like someone or something else.", 
            translation: "Fantasia" 
        },
        { 
            topic: "Context", 
            term: "yours", 
            definition: "Possessive pronoun used to indicate something belongs to 'you'.", 
            translation: "Seu / Sua" 
        },
        { 
            topic: "Context", 
            term: "mine", 
            definition: "Possessive pronoun used to indicate something belongs to 'me'.", 
            translation: "Meu / Minha" 
        },
        { 
            topic: "Context", 
            term: "halloween", 
            definition: "Holiday on October 31st involving costumes and candy.", 
            translation: "Halloween / Dia das Bruxas" 
        },
        { 
            topic: "Context", 
            term: "scary", 
            definition: "Something that causes fear or fright.", 
            translation: "Assustador" 
        },

        // --- TOPIC 2: VERBS ---
        { 
            topic: "Verbs", 
            term: "celebrate", 
            definition: "To do something special for an important event or holiday.", 
            translation: "comemorar / celebrar" 
        },
        { 
            topic: "Verbs", 
            term: "happen", 
            definition: "To take place; to occur.", 
            translation: "acontecer" 
        },
        { 
            topic: "Verbs", 
            term: "decorate", 
            definition: "To make something look more attractive by adding items to it.", 
            translation: "decorar" 
        },
        { 
            topic: "Verbs", 
            term: "get-together", 
            definition: "To meet and spend time with people.", 
            translation: "reunir-se" 
        },
        { 
            topic: "Verbs", 
            term: "wear", 
            definition: "To have clothing, accessories, or a costume on your body.", 
            translation: "vestir / usar (roupa)" 
        },
        { 
            topic: "Verbs", 
            term: "watch", 
            definition: "To look at or observe attentively.", 
            translation: "assistir" 
        },
        { 
            topic: "Verbs", 
            term: "give", 
            definition: "To present voluntarily and without expecting compensation.", 
            translation: "dar" 
        },
        { 
            topic: "Verbs", 
            term: "receive", 
            definition: "To get or be given something.", 
            translation: "receber" 
        },
        { 
            topic: "Verbs", 
            term: "find", 
            definition: "To discover something by looking.", 
            translation: "encontrar" 
        },
        { 
            topic: "Verbs", 
            term: "ask", 
            definition: "To say something in order to obtain an answer or information.", 
            translation: "perguntar / pedir" 
        },
        { 
            topic: "Verbs", 
            term: "say", 
            definition: "To speak words.", 
            translation: "dizer" 
        },
        { 
            topic: "Verbs", 
            term: "use", 
            definition: "To take, hold, or deploy something as a means of accomplishing a purpose.", 
            translation: "usar" 
        },
        { 
            topic: "Verbs", 
            term: "love", 
            definition: "To like something very much.", 
            translation: "amar" 
        },
        { 
            topic: "Verbs", 
            term: "go", 
            definition: "To move from one place to another.", 
            translation: "ir" 
        },
        { 
            topic: "Verbs", 
            term: "eat", 
            definition: "To consume food.", 
            translation: "comer" 
        },
        { 
            topic: "Verbs", 
            term: "learn", 
            definition: "To gain knowledge or skill.", 
            translation: "aprender" 
        },

        // --- TOPIC 3: TIME & SEASONS ---
        { 
            topic: "Time & Seasons", 
            term: "date", 
            definition: "A specific day of the month or year.", 
            translation: "data" 
        },
        { 
            topic: "Time & Seasons", 
            term: "month", 
            definition: "Each of the twelve named periods into which a year is divided.", 
            translation: "mês" 
        },
        { 
            topic: "Time & Seasons", 
            term: "year", 
            definition: "The time taken by the earth to make one revolution around the sun.", 
            translation: "ano" 
        },
        { 
            topic: "Time & Seasons", 
            term: "season", 
            definition: "Each of the four divisions of the year (spring, summer, autumn, winter).", 
            translation: "estação do ano" 
        },
        { 
            topic: "Time & Seasons", 
            term: "summer", 
            definition: "The warmest season of the year.", 
            translation: "Verão" 
        },
        { 
            topic: "Time & Seasons", 
            term: "winter", 
            definition: "The coldest season of the year.", 
            translation: "Inverno" 
        },
        { 
            topic: "Time & Seasons", 
            term: "autumn", 
            definition: "The season after summer and before winter, when leaves fall.", 
            translation: "Outono" 
        },
        { 
            topic: "Time & Seasons", 
            term: "spring", 
            definition: "The season after winter and before summer, when flowers bloom.", 
            translation: "Primavera" 
        },
        // --- TOPIC 4: HOLIDAYS ---
        { 
            topic: "Holidays", 
            term: "holiday", 
            definition: "A day of festivity or recreation when no work is done.", 
            translation: "Feriado" 
        },
        { 
            topic: "Holidays", 
            term: "birthday", 
            definition: "The anniversary of the day on which a person was born.", 
            translation: "Aniversário" 
        },
        { 
            topic: "Holidays", 
            term: "christmas", 
            definition: "The annual Christian festival celebrating Christ's birth, on December 25th.", 
            translation: "Natal" 
        },
        { 
            topic: "Holidays", 
            term: "carnival", 
            definition: "A period of public revelry and parades, popular in Brazil.", 
            translation: "Carnaval" 
        },
        { 
            topic: "Holidays", 
            term: "easter", 
            definition: "A holiday celebrating resurrection, often associated with eggs and bunnies.", 
            translation: "Páscoa" 
        },
        { 
            topic: "Holidays", 
            term: "halloween", 
            definition: "A holiday on October 31st involving costumes and candy.", 
            translation: "Halloween / Dia das Bruxas" 
        },
        { 
            topic: "Holidays", 
            term: "new-years-eve", 
            definition: "The last day of the year, December 31st.", 
            translation: "Véspera de Ano Novo" 
        },
        { 
            topic: "Holidays", 
            term: "new-years-day", 
            definition: "The first day of the year, January 1st.", 
            translation: "Dia de Ano Novo" 
        },
        { 
            topic: "Holidays", 
            term: "independence-day", 
            definition: "A national holiday celebrating freedom from another country.", 
            translation: "Dia da Independência" 
        },
        { 
            topic: "Holidays", 
            term: "childrens-day", 
            definition: "A holiday to celebrate children.", 
            translation: "Dia das Crianças" 
        },
        { 
            topic: "Holidays", 
            term: "labor-day", 
            definition: "A holiday honoring working people.", 
            translation: "Dia do Trabalho" 
        },
        { 
            topic: "Holidays", 
            term: "all-souls-day", 
            definition: "A day to remember those who have died.", 
            translation: "Dia de Finados" 
        },
        { 
            topic: "Holidays", 
            term: "republic-proclamation-day", 
            definition: "A Brazilian holiday celebrating the end of the Empire and beginning of the Republic.", 
            translation: "Proclamação da República" 
        },

        // --- TOPIC 5: PARTY ITEMS & TRADITIONS ---
        { 
            topic: "Party & Traditions", 
            term: "party", 
            definition: "A social gathering of invited guests.", 
            translation: "festa" 
        },
        { 
            topic: "Party & Traditions", 
            term: "gift-present", 
            definition: "A thing given willingly to someone without payment.", 
            translation: "presente" 
        },
        { 
            topic: "Party & Traditions", 
            term: "costume", 
            definition: "A set of clothes worn to look like someone or something else.", 
            translation: "fantasia" 
        },
        { 
            topic: "Party & Traditions", 
            term: "decoration", 
            definition: "Items used to make something look festive or beautiful.", 
            translation: "decoração" 
        },
        { 
            topic: "Party & Traditions", 
            term: "fireworks", 
            definition: "Explosive devices used for display, producing loud noises and bright lights.", 
            translation: "fogos de artifício" 
        },
        { 
            topic: "Party & Traditions", 
            term: "food", 
            definition: "Any nutritious substance that people or animals eat.", 
            translation: "comida" 
        },
        { 
            topic: "Party & Traditions", 
            term: "tradition", 
            definition: "A custom or belief passed down from generation to generation.", 
            translation: "tradição" 
        },
        { 
            topic: "Party & Traditions", 
            term: "backpack", 
            definition: "A bag with shoulder straps, carried on the back.", 
            translation: "mochila" 
        },
        { 
            topic: "Party & Traditions", 
            term: "book", 
            definition: "A written or printed work consisting of pages.", 
            translation: "livro" 
        },
        // --- TOPIC 6: MONTHS ---
        { 
            topic: "Months", 
            term: "january", 
            definition: "The 1st month of the year.", 
            translation: "Janeiro" 
        },
        { 
            topic: "Months", 
            term: "february", 
            definition: "The 2nd month of the year.", 
            translation: "Fevereiro" 
        },
        { 
            topic: "Months", 
            term: "march", 
            definition: "The 3rd month of the year.", 
            translation: "Março" 
        },
        { 
            topic: "Months", 
            term: "april", 
            definition: "The 4th month of the year.", 
            translation: "Abril" 
        },
        { 
            topic: "Months", 
            term: "may", 
            definition: "The 5th month of the year.", 
            translation: "Maio" 
        },
        { 
            topic: "Months", 
            term: "june", 
            definition: "The 6th month of the year.", 
            translation: "Junho" 
        },
        { 
            topic: "Months", 
            term: "july", 
            definition: "The 7th month of the year.", 
            translation: "Julho" 
        },
        { 
            topic: "Months", 
            term: "august", 
            definition: "The 8th month of the year.", 
            translation: "Agosto" 
        },
        { 
            topic: "Months", 
            term: "september", 
            definition: "The 9th month of the year.", 
            translation: "Setembro" 
        },
        { 
            topic: "Months", 
            term: "october", 
            definition: "The 10th month of the year.", 
            translation: "Outubro" 
        },
        { 
            topic: "Months", 
            term: "november", 
            definition: "The 11th month of the year.", 
            translation: "Novembro" 
        },
        { 
            topic: "Months", 
            term: "december", 
            definition: "The 12th month of the year.", 
            translation: "Dezembro" 
        },

        // --- TOPIC 7: ORDINAL NUMBERS ---
        { 
            topic: "Numbers", 
            term: "first-1st", 
            definition: "Ordinal number for 1.", 
            translation: "Primeiro" 
        },
        { 
            topic: "Numbers", 
            term: "second-2nd", 
            definition: "Ordinal number for 2.", 
            translation: "Segundo" 
        },
        { 
            topic: "Numbers", 
            term: "third-3rd", 
            definition: "Ordinal number for 3.", 
            translation: "Terceiro" 
        },
        { 
            topic: "Numbers", 
            term: "fourth-4th", 
            definition: "Ordinal number for 4.", 
            translation: "Quarto" 
        },
        { 
            topic: "Numbers", 
            term: "fifth-5th", 
            definition: "Ordinal number for 5.", 
            translation: "Quinto" 
        },
        { 
            topic: "Numbers", 
            term: "sixth-6th", 
            definition: "Ordinal number for 6.", 
            translation: "Sexto" 
        },
        { 
            topic: "Numbers", 
            term: "seventh-7th", 
            definition: "Ordinal number for 7.", 
            translation: "Sétimo" 
        },
        { 
            topic: "Numbers", 
            term: "eighth-8th", 
            definition: "Ordinal number for 8.", 
            translation: "Oitavo" 
        },
        { 
            topic: "Numbers", 
            term: "ninth-9th", 
            definition: "Ordinal number for 9.", 
            translation: "Nono" 
        },
        { 
            topic: "Numbers", 
            term: "tenth-10th", 
            definition: "Ordinal number for 10.", 
            translation: "Décimo" 
        },
        { 
            topic: "Numbers", 
            term: "eleventh-11th", 
            definition: "Ordinal number for 11.", 
            translation: "Décimo primeiro" 
        },
        { 
            topic: "Numbers", 
            term: "twelfth-12th", 
            definition: "Ordinal number for 12.", 
            translation: "Décimo segundo" 
        },
        { 
            topic: "Numbers", 
            term: "thirteenth-13th", 
            definition: "Ordinal number for 13.", 
            translation: "Décimo terceiro" 
        },
        { 
            topic: "Numbers", 
            term: "fourteenth-14th", 
            definition: "Ordinal number for 14.", 
            translation: "Décimo quarto" 
        },
        { 
            topic: "Numbers", 
            term: "fifteenth-15th", 
            definition: "Ordinal number for 15.", 
            translation: "Décimo quinto" 
        },
        { 
            topic: "Numbers", 
            term: "sixteenth-16th", 
            definition: "Ordinal number for 16.", 
            translation: "Décimo sexto" 
        },
        { 
            topic: "Numbers", 
            term: "seventeenth-17th", 
            definition: "Ordinal number for 17.", 
            translation: "Décimo sétimo" 
        },
        { 
            topic: "Numbers", 
            term: "eighteenth-18th", 
            definition: "Ordinal number for 18.", 
            translation: "Décimo oitavo" 
        },
        { 
            topic: "Numbers", 
            term: "nineteenth-19th", 
            definition: "Ordinal number for 19.", 
            translation: "Décimo nono" 
        },
        { 
            topic: "Numbers", 
            term: "twentieth-20th", 
            definition: "Ordinal number for 20.", 
            translation: "Vigésimo" 
        },
        { 
            topic: "Numbers", 
            term: "twenty-first-21st", 
            definition: "Ordinal number for 21.", 
            translation: "Vigésimo primeiro" 
        },
        { 
            topic: "Numbers", 
            term: "twenty-second-22nd", 
            definition: "Ordinal number for 22.", 
            translation: "Vigésimo segundo" 
        },
        { 
            topic: "Numbers", 
            term: "twenty-third-23rd", 
            definition: "Ordinal number for 23.", 
            translation: "Vigésimo terceiro" 
        },
        { 
            topic: "Numbers", 
            term: "twenty-fourth-24th", 
            definition: "Ordinal number for 24.", 
            translation: "Vigésimo quarto" 
        },
        { 
            topic: "Numbers", 
            term: "twenty-fifth-25th", 
            definition: "Ordinal number for 25.", 
            translation: "Vigésimo quinto" 
        },
        { 
            topic: "Numbers", 
            term: "twenty-sixth-26th", 
            definition: "Ordinal number for 26.", 
            translation: "Vigésimo sexto" 
        },
        { 
            topic: "Numbers", 
            term: "twenty-seventh-27th", 
            definition: "Ordinal number for 27.", 
            translation: "Vigésimo sétimo" 
        },
        { 
            topic: "Numbers", 
            term: "twenty-eighth-28th", 
            definition: "Ordinal number for 28.", 
            translation: "Vigésimo oitavo" 
        },
        { 
            topic: "Numbers", 
            term: "twenty-ninth-29th", 
            definition: "Ordinal number for 29.", 
            translation: "Vigésimo nono" 
        },
        { 
            topic: "Numbers", 
            term: "thirtieth-30th", 
            definition: "Ordinal number for 30.", 
            translation: "Trigésimo" 
        },
        { 
            topic: "Numbers", 
            term: "thirty-first-31st", 
            definition: "Ordinal number for 31.", 
            translation: "Trigésimo primeiro" 
        },

        // --- TOPIC 8: PHRASES & GRAMMAR ---
        { 
            topic: "Phrases & Grammar", 
            term: "happy-birthday", 
            definition: "Greeting used on someone's birthday.", 
            translation: "Feliz Aniversário!" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "merry-christmas", 
            definition: "Greeting used during Christmas time.", 
            translation: "Feliz Natal!" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "happy-new-year", 
            definition: "Greeting used at the start of a new year.", 
            translation: "Feliz Ano Novo!" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "whats-the-date-today", 
            definition: "Question asking for the current date.", 
            translation: "Qual a data de hoje?" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "of-course", 
            definition: "Phrase expressing certainty or agreement.", 
            translation: "É claro / Com certeza" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "the-definite-article", 
            definition: "Used to specify a particular person or thing, or something unique.", 
            translation: "O, A, Os, As (Artigo Definido)" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "preposition-in", 
            definition: "Preposition used for months, years, and seasons.", 
            translation: "Em (para meses, anos, estações)" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "preposition-on", 
            definition: "Preposition used for days and specific dates.", 
            translation: "Em (para dias e datas)" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "possessive-pronouns", 
            definition: "Words that show ownership and replace a noun (mine, yours, his, hers, ours, theirs).", 
            translation: "Pronomes Possessivos" 
        },
        { 
            topic: "Phrases & Grammar", 
            term: "whose", 
            definition: "A question word used to ask about ownership.", 
            translation: "De quem" 
        }
    ] // This closes the glossary array
}); // This closes the window.initLesson object