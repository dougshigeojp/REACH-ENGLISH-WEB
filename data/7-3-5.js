/**
 * REACH English - LESSON DATA 7-3-5
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "7-3-5", 
    grade: "7th Grade",       
    bimester: "3",   
    chapter: "5",    
    chapterTitle: "Travel Tales", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Talk about travel, festivals, and customs.<br>• Use the Simple Past tense (regular verbs).<br>• Use time expressions (yesterday, last week).<br>• Connect past actions with \"when\" clauses.<br>• Organize stories with sequencers (first, then, finally).",
            welcome: "Hello, Adventurers! It's Mr. D!<br><br>Welcome to \"Travel Tales\"! Do you love exploring new places? Today, we are going on a journey around the world. We'll learn how to share our amazing travel stories, describe fun festivals, and talk about unique customs. We'll master the Simple Past tense to tell everyone what we did and use special words to organize our adventures. Let's pack our bags and get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about travel, festivals, and customs. Use the Simple Past tense with regular verbs. Use time expressions like yesterday and last week. Connect past actions with when clauses. Organize stories with sequencers like first, then, and finally.",
                welcome: "TTS: Hello, Adventurers! It's Mr. D! Welcome to Travel Tales! Do you love exploring new places? Today, we are going on a journey around the world. We'll learn how to share our amazing travel stories, describe fun festivals, and talk about unique customs. We'll master the Simple Past tense to tell everyone what we did and use special words to organize our adventures. Let's pack our bags and get started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of festive music and people cheering. Albert and Celine are looking at photos on a camera.", 
            contextAudio: "audio/7-3-5/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "Wow, Celine! Where did you go?" 
                },
                { 
                    speaker: "Celine", 
                    text: "I [travelled](tooltip:travelled) to Japan [last month](tooltip:last-month). I [visited](tooltip:visited) a [festival](tooltip:festival)." 
                },
                { 
                    speaker: "Albert", 
                    text: "That looks amazing! What happened?" 
                },
                { 
                    speaker: "Celine", 
                    text: "First, we [watched](tooltip:watched) a [parade](tooltip:parade). The [costumes](tooltip:costume) were beautiful." 
                },
                { 
                    speaker: "Albert", 
                    text: "And then?" 
                },
                { 
                    speaker: "Celine", 
                    text: "Then, we [danced](tooltip:danced) [when](tooltip:when) the [music](tooltip:music) [started](tooltip:started)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Did you [try](tooltip:try) the [food](tooltip:food)?" 
                },
                { 
                    speaker: "Celine", 
                    text: "Yes! I [tried](tooltip:tried) sushi. I [liked](tooltip:liked) it because it was [delicious](tooltip:delicious)." 
                },
                { 
                    speaker: "Albert", 
                    text: "I want to go there too!" 
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
                    title: "Travel & Festival Verbs (Regular)",
                    audio: "TTS: Travel - Travelled. Visit - Visited. Arrive - Arrived. Stay - Stayed. Dance - Danced. Enjoy - Enjoyed. Learn - Learned. Watch - Watched. Try - Tried. Listen - Listened. Like - Liked. Love - Loved. Play - Played. Start - Started. Stop - Stopped. Study - Studied. Walk - Walked. Want - Wanted.",
                    items: [
                        { term: "Travel - Travelled", trans: "Viajar - Viajou" },
                        { term: "Visit - Visited", trans: "Visitar - Visitou" },
                        { term: "Arrive - Arrived", trans: "Chegar - Chegou" },
                        { term: "Stay - Stayed", trans: "Ficar/Hospedar-se - Ficou" },
                        { term: "Dance - Danced", trans: "Dançar - Dançou" },
                        { term: "Enjoy - Enjoyed", trans: "Aproveitar/Gostar - Aproveitou" },
                        { term: "Learn - Learned", trans: "Aprender - Aprendeu" },
                        { term: "Watch - Watched", trans: "Assistir - Assistiu" },
                        { term: "Try - Tried", trans: "Experimentar/Tentar - Experimentou" },
                        { term: "Listen - Listened", trans: "Ouvir - Ouviu" },
                        { term: "Like - Liked", trans: "Gostar - Gostou" },
                        { term: "Love - Loved", trans: "Amar - Amou" },
                        { term: "Play - Played", trans: "Tocar - Tocou" },
                        { term: "Start - Started", trans: "Começar - Começou" },
                        { term: "Stop - Stopped", trans: "Parar - Parou" },
                        { term: "Study - Studied", trans: "Estudar - Estudou" },
                        { term: "Walk - Walked", trans: "Caminhar - Caminhou" },
                        { term: "Want - Wanted", trans: "Querer - Quis" }
                    ]
                },
                {
                    title: "Travel & Festivals Vocabulary",
                    audio: "TTS: Trip or Journey. Festival. Parade. Music. Costume. Food. Culture. Custom or Tradition. Country. City. Place.",
                    items: [
                        { term: "Trip / Journey", trans: "Viagem / Jornada" },
                        { term: "Festival", trans: "Festival / Festa" },
                        { term: "Parade", trans: "Desfile / Parada" },
                        { term: "Music", trans: "Música" },
                        { term: "Costume", trans: "Fantasia / Traje" },
                        { term: "Food", trans: "Comida" },
                        { term: "Culture", trans: "Cultura" },
                        { term: "Custom / Tradition", trans: "Costume / Tradição" },
                        { term: "Country", trans: "País" },
                        { term: "City", trans: "Cidade" },
                        { term: "Place", trans: "Lugar" }
                    ]
                },
                {
                    title: "Sequencers & Connectors",
                    audio: "TTS: First or Firstly. Then. Next. After that. Finally or Lastly. And. Also. But. Because. So. For example.",
                    items: [
                        { term: "First / Firstly", trans: "Primeiro / Primeiramente" },
                        { term: "Then", trans: "Então / Depois" },
                        { term: "Next", trans: "Próximo / Em seguida" },
                        { term: "After that", trans: "Depois disso" },
                        { term: "Finally / Lastly", trans: "Finalmente / Por último" },
                        { term: "And", trans: "E" },
                        { term: "Also", trans: "Também" },
                        { term: "But", trans: "Mas / Porém" },
                        { term: "Because", trans: "Porque" },
                        { term: "So", trans: "Então / Por isso" },
                        { term: "For example", trans: "Por exemplo" }
                    ]
                },
                {
                    title: "Time Expressions (Past)",
                    audio: "TTS: Yesterday. Last night. Last week. Last month. Last year. Two days ago. A long time ago. In 2022.",
                    items: [
                        { term: "Yesterday", trans: "Ontem" },
                        { term: "Last night", trans: "Ontem à noite" },
                        { term: "Last week", trans: "Semana passada" },
                        { term: "Last month", trans: "Mês passado" },
                        { term: "Last year", trans: "Ano passado" },
                        { term: "Two days ago", trans: "Dois dias atrás" },
                        { term: "A long time ago", trans: "Há muito tempo" },
                        { term: "In 2022", trans: "Em 2022" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Travel & Festival Verbs",
                    audio: "TTS: I travelled to France. We visited a museum. He arrived late. She stayed in a hotel. They danced all night. We enjoyed the party. I learned English. He watched a movie. She tried sushi. We listened to the band. I liked the food. They loved the trip. He played guitar. The show started at 8. The bus stopped here. I studied history before the trip. We walked around the city. She wanted to go home.",
                    items: [
                        { term: "Travelled", sent: "I travelled to France.", trans: "<span style='color:#0077b6'>Eu viajei para a França.</span>" },
                        { term: "Visited", sent: "We visited a museum.", trans: "<span style='color:#0077b6'>Nós visitamos um museu.</span>" },
                        { term: "Arrived", sent: "He arrived late.", trans: "<span style='color:#0077b6'>Ele chegou atrasado.</span>" },
                        { term: "Stayed", sent: "She stayed in a hotel.", trans: "<span style='color:#0077b6'>Ela ficou em um hotel.</span>" },
                        { term: "Danced", sent: "They danced all night.", trans: "<span style='color:#0077b6'>Eles dançaram a noite toda.</span>" },
                        { term: "Enjoyed", sent: "We enjoyed the party.", trans: "<span style='color:#0077b6'>Nós aproveitamos a festa.</span>" },
                        { term: "Learned", sent: "I learned English.", trans: "<span style='color:#0077b6'>Eu aprendi inglês.</span>" },
                        { term: "Watched", sent: "He watched a movie.", trans: "<span style='color:#0077b6'>Ele assistiu um filme.</span>" },
                        { term: "Tried", sent: "She tried sushi.", trans: "<span style='color:#0077b6'>Ela experimentou sushi.</span>" },
                        { term: "Listened", sent: "We listened to the band.", trans: "<span style='color:#0077b6'>Nós ouvimos a banda.</span>" },
                        { term: "Liked", sent: "I liked the food.", trans: "<span style='color:#0077b6'>Eu gostei da comida.</span>" },
                        { term: "Loved", sent: "They loved the trip.", trans: "<span style='color:#0077b6'>Eles amaram a viagem.</span>" },
                        { term: "Played", sent: "He played guitar.", trans: "<span style='color:#0077b6'>Ele tocou guitarra.</span>" },
                        { term: "Started", sent: "The show started at 8.", trans: "<span style='color:#0077b6'>O show começou às 8.</span>" },
                        { term: "Stopped", sent: "The bus stopped here.", trans: "<span style='color:#0077b6'>O ônibus parou aqui.</span>" },
                        { term: "Studied", sent: "I studied history before the trip.", trans: "<span style='color:#0077b6'>Eu estudei história antes da viagem.</span>" },
                        { term: "Walked", sent: "We walked around the city.", trans: "<span style='color:#0077b6'>Nós caminhamos pela cidade.</span>" },
                        { term: "Wanted", sent: "She wanted to go home.", trans: "<span style='color:#0077b6'>Ela queria ir para casa.</span>" }
                    ]
                },
                {
                    title: "Travel & Festivals Vocab",
                    audio: "TTS: It was a long journey. The festival was crowded. The parade had many floats. I love traditional music. Your costume is beautiful. The local food is spicy. We learned about Japanese culture. It is a local custom to bow. Which country did you visit? Tokyo is a big city. This is a nice place.",
                    items: [
                        { term: "Trip / Journey", sent: "It was a long journey.", trans: "<span style='color:#0077b6'>Foi uma longa jornada.</span>" },
                        { term: "Festival", sent: "The festival was crowded.", trans: "<span style='color:#0077b6'>O festival estava lotado.</span>" },
                        { term: "Parade", sent: "The parade had many floats.", trans: "<span style='color:#0077b6'>O desfile teve muitos carros alegóricos.</span>" },
                        { term: "Music", sent: "I love traditional music.", trans: "<span style='color:#0077b6'>Eu amo música tradicional.</span>" },
                        { term: "Costume", sent: "Your costume is beautiful.", trans: "<span style='color:#0077b6'>Sua fantasia é linda.</span>" },
                        { term: "Food", sent: "The local food is spicy.", trans: "<span style='color:#0077b6'>A comida local é apimentada.</span>" },
                        { term: "Culture", sent: "We learned about Japanese culture.", trans: "<span style='color:#0077b6'>Nós aprendemos sobre a cultura japonesa.</span>" },
                        { term: "Custom", sent: "It is a local custom to bow.", trans: "<span style='color:#0077b6'>É um costume local se curvar.</span>" },
                        { term: "Country", sent: "Which country did you visit?", trans: "<span style='color:#0077b6'>Qual país você visitou?</span>" },
                        { term: "City", sent: "Tokyo is a big city.", trans: "<span style='color:#0077b6'>Tóquio é uma cidade grande.</span>" },
                        { term: "Place", sent: "This is a nice place.", trans: "<span style='color:#0077b6'>Este é um lugar legal.</span>" }
                    ]
                },
                {
                    title: "Sequencers & Connectors",
                    audio: "TTS: First, we bought the tickets. Then, we entered the museum. Next, we saw the paintings. After that, we ate lunch. Finally, we went home. I like music and dance. I also visited the park. It was cold, but sunny. I stayed home because I was sick. I was tired, so I slept. I like fruits, for example, apples.",
                    items: [
                        { term: "First", sent: "First, we bought the tickets.", trans: "<span style='color:#0077b6'>Primeiro, nós compramos os ingressos.</span>" },
                        { term: "Then", sent: "Then, we entered the museum.", trans: "<span style='color:#0077b6'>Então, entramos no museu.</span>" },
                        { term: "Next", sent: "Next, we saw the paintings.", trans: "<span style='color:#0077b6'>Em seguida, vimos as pinturas.</span>" },
                        { term: "After that", sent: "After that, we ate lunch.", trans: "<span style='color:#0077b6'>Depois disso, almoçamos.</span>" },
                        { term: "Finally", sent: "Finally, we went home.", trans: "<span style='color:#0077b6'>Finalmente, fomos para casa.</span>" },
                        { term: "And", sent: "I like music and dance.", trans: "<span style='color:#0077b6'>Eu gosto de música e dança.</span>" },
                        { term: "Also", sent: "I also visited the park.", trans: "<span style='color:#0077b6'>Eu também visitei o parque.</span>" },
                        { term: "But", sent: "It was cold, but sunny.", trans: "<span style='color:#0077b6'>Estava frio, mas ensolarado.</span>" },
                        { term: "Because", sent: "I stayed home because I was sick.", trans: "<span style='color:#0077b6'>Fiquei em casa porque estava doente.</span>" },
                        { term: "So", sent: "I was tired, so I slept.", trans: "<span style='color:#0077b6'>Eu estava cansado, então dormi.</span>" },
                        { term: "For example", sent: "I like fruits, for example, apples.", trans: "<span style='color:#0077b6'>Eu gosto de frutas, por exemplo, maçãs.</span>" }
                    ]
                },
                {
                    title: "Time Expressions (Past)",
                    audio: "TTS: I saw him yesterday. We watched a movie last night. She arrived last week. We travelled last month. I visited Spain last year. He called two days ago. It happened a long time ago. I was born in 2010.",
                    items: [
                        { term: "Yesterday", sent: "I saw him yesterday.", trans: "<span style='color:#0077b6'>Eu o vi ontem.</span>" },
                        { term: "Last night", sent: "We watched a movie last night.", trans: "<span style='color:#0077b6'>Nós assistimos um filme ontem à noite.</span>" },
                        { term: "Last week", sent: "She arrived last week.", trans: "<span style='color:#0077b6'>Ela chegou semana passada.</span>" },
                        { term: "Last month", sent: "We travelled last month.", trans: "<span style='color:#0077b6'>Nós viajamos mês passado.</span>" },
                        { term: "Last year", sent: "I visited Spain last year.", trans: "<span style='color:#0077b6'>Eu visitei a Espanha ano passado.</span>" },
                        { term: "Two days ago", sent: "He called two days ago.", trans: "<span style='color:#0077b6'>Ele ligou dois dias atrás.</span>" },
                        { term: "A long time ago", sent: "It happened a long time ago.", trans: "<span style='color:#0077b6'>Aconteceu há muito tempo.</span>" },
                        { term: "In [year]", sent: "I was born in 2010.", trans: "<span style='color:#0077b6'>Eu nasci em 2010.</span>" }
                    ]
                }
            ], // This closes the exampleGroups array

            // 2C: Practice Drills (Part 1: 1-12)
            drills: [
                {
                    type: "mcq",
                    q: "Choose the correct past form of 'Visit':",
                    options: [
                        { t: "Visit", c: false },
                        { t: "Visiting", c: false },
                        { t: "Visited", c: true },
                        { t: "Visits", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past form of 'Try':",
                    options: [
                        { t: "Tryed", c: false },
                        { t: "Tried", c: true },
                        { t: "Trying", c: false },
                        { t: "Trys", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past form of 'Stop':",
                    options: [
                        { t: "Stoped", c: false },
                        { t: "Stopped", c: true },
                        { t: "Stops", c: false },
                        { t: "Stopping", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A public celebration with music and costumes:",
                    options: [
                        { t: "Trip", c: false },
                        { t: "Museum", c: false },
                        { t: "Festival", c: true },
                        { t: "Library", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Clothes worn to look like someone else:",
                    options: [
                        { t: "Uniform", c: false },
                        { t: "Costume", c: true },
                        { t: "Suitcase", c: false },
                        { t: "Ticket", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: '_______, we bought the tickets. Then, we entered.'",
                    options: [
                        { t: "Finally", c: false },
                        { t: "First", c: true },
                        { t: "But", c: false },
                        { t: "Because", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I liked the trip _______ it was fun.'",
                    options: [
                        { t: "but", c: false },
                        { t: "so", c: false },
                        { t: "because", c: true },
                        { t: "then", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'It rained, _______ we stayed inside.'",
                    options: [
                        { t: "so", c: true },
                        { t: "because", c: false },
                        { t: "but", c: false },
                        { t: "first", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'We travelled _______ week.'",
                    options: [
                        { t: "yesterday", c: false },
                        { t: "last", c: true },
                        { t: "ago", c: false },
                        { t: "in", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I arrived two days _______.'",
                    options: [
                        { t: "last", c: false },
                        { t: "yesterday", c: false },
                        { t: "ago", c: true },
                        { t: "when", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past form of 'Travel':",
                    options: [
                        { t: "Travels", c: false },
                        { t: "Travelled", c: true },
                        { t: "Traveling", c: false },
                        { t: "Traveled (US)", c: false } 
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I wanted to go, _______ I was tired.'",
                    options: [
                        { t: "so", c: false },
                        { t: "because", c: false },
                        { t: "but", c: true },
                        { t: "first", c: false }
                    ]
                },
                // 2C: Practice Drills (Part 2: 13-24)
                {
                    type: "mcq",
                    q: "Spelling Rule (Consonant + y): What is the past of 'Study'?",
                    options: [
                        { t: "Studyed", c: false },
                        { t: "Studied", c: true },
                        { t: "Studyd", c: false },
                        { t: "Studys", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "People marching and celebrating in the street is a:",
                    options: [
                        { t: "Museum", c: false },
                        { t: "Ticket", c: false },
                        { t: "Parade", c: true },
                        { t: "Library", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I didn't go to school _______.'",
                    options: [
                        { t: "yesterday", c: true },
                        { t: "tomorrow", c: false },
                        { t: "next week", c: false },
                        { t: "now", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: '_______, we went home tired but happy.'",
                    options: [
                        { t: "First", c: false },
                        { t: "Finally", c: true },
                        { t: "But", c: false },
                        { t: "Because", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past form of 'Play':",
                    options: [
                        { t: "Playd", c: false },
                        { t: "Plaied", c: false },
                        { t: "Played", c: true },
                        { t: "Plays", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What do you wear at a costume party?",
                    options: [
                        { t: "A costume", c: true },
                        { t: "A suitcase", c: false },
                        { t: "A ticket", c: false },
                        { t: "A map", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'He was hungry, _______ he ate a sandwich.'",
                    options: [
                        { t: "because", c: false },
                        { t: "but", c: false },
                        { t: "so", c: true },
                        { t: "first", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past form of 'Dance':",
                    options: [
                        { t: "Danceed", c: false },
                        { t: "Dancing", c: false },
                        { t: "Danced", c: true },
                        { t: "Danct", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'We arrived _______ night.'",
                    options: [
                        { t: "yesterday", c: false },
                        { t: "ago", c: false },
                        { t: "last", c: true },
                        { t: "in", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I was born _______ 2010.'",
                    options: [
                        { t: "on", c: false },
                        { t: "at", c: false },
                        { t: "in", c: true },
                        { t: "ago", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'We ate dinner. _______, we watched TV.'",
                    options: [
                        { t: "First", c: false },
                        { t: "After that", c: true },
                        { t: "Because", c: false },
                        { t: "But", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct past form of 'Want':",
                    options: [
                        { t: "Wanten", c: false },
                        { t: "Wanting", c: false },
                        { t: "Wanted", c: true },
                        { t: "Wants", c: false }
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
                    title: "Regular Verb Spelling Rules",
                    audio: "TTS: Most regular verbs add ed in the simple past. Visit becomes visited. If a verb ends in e, just add d, like liked. If it ends in a consonant and y, change y to ied, like studied. For short verbs ending in consonant-vowel-consonant, double the last letter, like stopped.",
                    explanation: "Most verbs just add <b>-ed</b> in the Simple Past, but some have special spelling rules depending on how they end.<br><br><span style='color:#0077b6; font-style:italic;'>(A maioria dos verbos apenas recebe -ed no Simple Past, mas alguns têm regras especiais de escrita dependendo de como as palavras terminam.)</span>",
                    samples: [
                        { en: "General Rule (+ed): visit -> visited / watch -> watched", pt: "<span style='color:#0077b6'>Regra Geral</span>" },
                        { en: "Ends in -e (+d): like -> liked / arrive -> arrived", pt: "<span style='color:#0077b6'>Terminados em -e</span>" },
                        { en: "Consonant + y (-y +ied): try -> tried / study -> studied", pt: "<span style='color:#0077b6'>Consoante + y</span>" },
                        { en: "CVC Rule (Double letter): stop -> stopped / plan -> planned", pt: "<span style='color:#0077b6'>Consoante-Vogal-Consoante</span>" }
                    ]
                },
                {
                    title: "Simple Past with 'WHEN'",
                    audio: "TTS: We use when to connect two actions in the past. It often shows that one action happened immediately after another. I arrived when the party started. When the music stopped, they clapped.",
                    explanation: "We use <b>when</b> to connect two actions in the past. It often shows that one action happened immediately after another, or at the same time.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos when para conectar duas ações no passado. Frequentemente mostra que uma ação aconteceu imediatamente após a outra, ou ao mesmo tempo.)</span>",
                    samples: [
                        { en: "I arrived when the party started.", pt: "<span style='color:#0077b6'>Eu cheguei quando a festa começou.</span>" },
                        { en: "When the music stopped, they clapped.", pt: "<span style='color:#0077b6'>Quando a música parou, eles aplaudiram.</span>" },
                        { en: "She fell when she ran.", pt: "<span style='color:#0077b6'>Ela caiu quando correu.</span>" },
                        { en: "We danced when the music started.", pt: "<span style='color:#0077b6'>Nós dançamos quando a música começou.</span>" }
                    ]
                },
                {
                    title: "Sequencers & Connectors",
                    audio: "TTS: Use sequencers to organize events. First, then, next, and finally. Use connectors to link ideas. But shows contrast. Because explains reason. So shows the result.",
                    explanation: "To tell a story clearly, we use <b>sequencers</b> to organize events and <b>connectors</b> to link ideas.<br><br><span style='color:#0077b6; font-style:italic;'>(Para contar uma história claramente, usamos sequenciadores para organizar os eventos e conectores para ligar as ideias.)</span>",
                    samples: [
                        { en: "First / Firstly: Primeiro", pt: "<span style='color:#0077b6'>Introduction</span>" },
                        { en: "Then / Next / After that: Então / Próximo", pt: "<span style='color:#0077b6'>Sequence</span>" },
                        { en: "Finally / Lastly: Finalmente", pt: "<span style='color:#0077b6'>Conclusion</span>" },
                        { en: "But: Mas (Contrast)", pt: "<span style='color:#0077b6'>I liked the trip, but it rained.</span>" },
                        { en: "Because: Porque (Reason)", pt: "<span style='color:#0077b6'>I stayed home because I was sick.</span>" },
                        { en: "So: Então (Result)", pt: "<span style='color:#0077b6'>I was tired, so I slept.</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Regular Verbs Spelling",
                    audio: "audio/7-3-5/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Did you study for the test, Celine?", 
                            pt: "<span style='color:#0077b6'>Você estudou para a prova, Celine?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Yes, I studied all night. I planned my schedule and tried to memorize everything.", 
                            pt: "<span style='color:#0077b6'>Sim, eu estudei a noite toda. Eu planejei meu horário e tentei memorizar tudo.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Good job. My brother played video games and stopped studying early.", 
                            pt: "<span style='color:#0077b6'>Bom trabalho. Meu irmão jogou videogame e parou de estudar cedo.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Using 'When'",
                    audio: "audio/7-3-5/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "When did you arrive at the festival?", 
                            pt: "<span style='color:#0077b6'>Quando você chegou ao festival?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "We arrived when the parade started. It was perfect timing!", 
                            pt: "<span style='color:#0077b6'>Nós chegamos quando o desfile começou. Foi na hora perfeita!</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "The rain stopped when I entered the tent.", 
                            pt: "<span style='color:#0077b6'>A chuva parou quando eu entrei na barraca.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Sequencers & Connectors",
                    audio: "audio/7-3-5/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Tell me about your trip!", 
                            pt: "<span style='color:#0077b6'>Conte-me sobre sua viagem!</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "First, we travelled by train. Then, we visited a castle. It rained, but we enjoyed it.", 
                            pt: "<span style='color:#0077b6'>Primeiro, viajamos de trem. Depois, visitamos um castelo. Choveu, mas nós aproveitamos.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Why did you stay in a hotel?", 
                            pt: "<span style='color:#0077b6'>Por que vocês ficaram em um hotel?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Because it was late. Finally, we returned home yesterday.", 
                            pt: "<span style='color:#0077b6'>Porque era tarde. Finalmente, retornamos para casa ontem.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice (Part 1: 1-12)
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Spelling - Y rule: Complete: 'She _______ (cry) at the end of the movie.'",
                    options: [
                        { t: "cryed", c: false },
                        { t: "cried", c: true },
                        { t: "cries", c: false },
                        { t: "cryied", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling - CVC rule: 'The car _______ (stop) at the light.'",
                    options: [
                        { t: "stoped", c: false },
                        { t: "stopped", c: true },
                        { t: "stoppt", c: false },
                        { t: "stoping", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling - E rule: 'We _______ (dance) all night.'",
                    options: [
                        { t: "danced", c: true },
                        { t: "danceed", c: false },
                        { t: "dancied", c: false },
                        { t: "dancing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When Clause: 'They cheered _______ the band started playing.'",
                    options: [
                        { t: "but", c: false },
                        { t: "so", c: false },
                        { t: "when", c: true },
                        { t: "first", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Connectors - Contrast: 'I wanted to buy the souvenir, _______ it was too expensive.'",
                    options: [
                        { t: "so", c: false },
                        { t: "because", c: false },
                        { t: "but", c: true },
                        { t: "then", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Connectors - Result: 'I was tired, _______ I stayed at the hotel.'",
                    options: [
                        { t: "because", c: false },
                        { t: "but", c: false },
                        { t: "so", c: true },
                        { t: "first", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Sequencers: '_______, we packed our bags. Then, we called a taxi.'",
                    options: [
                        { t: "Finally", c: false },
                        { t: "First", c: true },
                        { t: "But", c: false },
                        { t: "Because", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Connectors - Reason: 'He learned Japanese _______ he loves anime.'",
                    options: [
                        { t: "so", c: false },
                        { t: "but", c: false },
                        { t: "because", c: true },
                        { t: "then", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Subject Pronouns + Verbs: '_______ (They) _______ (travel) by bus.'",
                    options: [
                        { t: "They traveled", c: true },
                        { t: "They travels", c: false },
                        { t: "They traveling", c: false },
                        { t: "Them traveled", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Structure: Choose the correct order.",
                    options: [
                        { t: "When arrived I, the bus left.", c: false },
                        { t: "The bus left when I arrived.", c: true },
                        { t: "The bus when left I arrived.", c: false },
                        { t: "Left the bus when I arrived.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling - Regular: 'We _______ (arrive) at the hotel very late.'",
                    options: [
                        { t: "arrives", c: false },
                        { t: "arrived", c: true },
                        { t: "arriven", c: false },
                        { t: "arriveed", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When Clause: 'We visited a museum _______ the rain stopped.'",
                    options: [
                        { t: "when", c: true },
                        { t: "but", c: false },
                        { t: "first", c: false },
                        { t: "because", c: false }
                    ]
                },
                // 3C: Grammar Practice (Part 2: 13-24)
                {
                    type: "mcq",
                    q: "Spelling - Regular: 'They _______ (plan) a great trip last year.'",
                    options: [
                        { t: "planed", c: false },
                        { t: "planned", c: true },
                        { t: "plannied", c: false },
                        { t: "plans", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Sequencers: 'First, we visited the castle. _______, we ate lunch.'",
                    options: [
                        { t: "Then", c: true },
                        { t: "Finally", c: false },
                        { t: "Because", c: false },
                        { t: "But", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When Clause: 'I was happy _______ I saw the parade.'",
                    options: [
                        { t: "but", c: false },
                        { t: "so", c: false },
                        { t: "when", c: true },
                        { t: "first", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Connectors: 'I like Japan, _______ I also like France.'",
                    options: [
                        { t: "and", c: true },
                        { t: "but", c: false },
                        { t: "because", c: false },
                        { t: "first", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Time Expressions: 'We arrived in Tokyo _______.'",
                    options: [
                        { t: "next month", c: false },
                        { t: "last night", c: true },
                        { t: "tomorrow", c: false },
                        { t: "now", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling - Regular: 'She _______ (love) the local food.'",
                    options: [
                        { t: "loveed", c: false },
                        { t: "loved", c: true },
                        { t: "loves", c: false },
                        { t: "loving", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Sequencers: '_______, the festival ended with a beautiful parade.'",
                    options: [
                        { t: "First", c: false },
                        { t: "Because", c: false },
                        { t: "Finally", c: true },
                        { t: "Next", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When Clause: 'The music started _______ we arrived at the festival.'",
                    options: [
                        { t: "when", c: true },
                        { t: "then", c: false },
                        { t: "so", c: false },
                        { t: "finally", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Time Expressions: 'I visited my grandmother a long time _______.'",
                    options: [
                        { t: "last", c: false },
                        { t: "ago", c: true },
                        { t: "yesterday", c: false },
                        { t: "when", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Connectors: 'It was a long journey, _______ it was very fun.'",
                    options: [
                        { t: "because", c: false },
                        { t: "but", c: true },
                        { t: "so", c: false },
                        { t: "next", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Spelling - Regular: 'The student _______ (study) for the test.'",
                    options: [
                        { t: "studys", c: false },
                        { t: "studied", c: true },
                        { t: "studyed", c: false },
                        { t: "studyied", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Structure: Choose the correct sentence.",
                    options: [
                        { t: "They danced when the music started.", c: true },
                        { t: "They danced when started the music.", c: false },
                        { t: "They when music started danced.", c: false },
                        { t: "Danced they when the music started.", c: false }
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
                    text: "I visited Japan last year.<br><small style='color:#0077b6'>(Eu visitei o Japão ano passado.)</small>", 
                    audio: "TTS: I visited Japan last year.", 
                    arrow: "↘" 
                },
                { 
                    text: "We danced when the music started.<br><small style='color:#0077b6'>(Nós dançamos quando a música começou.)</small>", 
                    audio: "TTS: We danced when the music started.", 
                    arrow: "↘" 
                },
                { 
                    text: "Did you enjoy the festival?<br><small style='color:#0077b6'>(Você gostou do festival?)</small>", 
                    audio: "TTS: Did you enjoy the festival?", 
                    arrow: "↗" 
                },
                { 
                    text: "First, we watched the parade.<br><small style='color:#0077b6'>(Primeiro, nós assistimos ao desfile.)</small>", 
                    audio: "TTS: First, we watched the parade.", 
                    arrow: "↘" 
                },
                { 
                    text: "It rained, but we stayed.<br><small style='color:#0077b6'>(Choveu, mas nós ficamos.)</small>", 
                    audio: "TTS: It rained, but we stayed.", 
                    arrow: "↘" 
                },
                { 
                    text: "She arrived two days ago.<br><small style='color:#0077b6'>(Ela chegou dois dias atrás.)</small>", 
                    audio: "TTS: She arrived two days ago.", 
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
                    instruction: "Listen to Albert describing his vacation and type the missing words.<br><small style='color:#0077b6'>(Ouça Albert descrevendo suas férias e digite as palavras que faltam.)</small>",
                    audio: "TTS: Last summer, I travelled to Italy. I visited Rome and I loved the food. It was a great trip.",
                    text: "Last summer, I [travelled] to Italy. I [visited] Rome and I [loved] the food. It [was] a great trip."
                },
                // Drill 2: Dropdown (MP3) - Combined context to prevent engine crash
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about a concert and choose the correct option.<br><small style='color:#0077b6'>(Ouça o diálogo sobre um show e escolha a opção correta.)</small>",
                    audio: "audio/7-3-5/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Celine: When did the concert [start | stop]?", 
                            a: "start" 
                        },
                        { 
                            q: "Albert: It [started | start] at 8 PM.", 
                            a: "started" 
                        },
                        { 
                            q: "Celine: Did you [like | watch] the band?", 
                            a: "like" 
                        },
                        { 
                            q: "Albert: Yes, I [shouted | cried] when they played my favorite song.", 
                            a: "shouted" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the sequence of events and choose the correct order.<br><small style='color:#0077b6'>(Ouça a sequência de eventos e escolha a ordem correta.)</small>",
                    audio: "TTS: First, we arrived at the hotel. Then, we walked to the beach.",
                    options: [
                        { t: "1. Walked to beach, 2. Arrived at hotel.", c: false },
                        { t: "1. Arrived at hotel, 2. Walked to beach.", c: true },
                        { t: "1. Arrived at beach, 2. Walked to hotel.", c: false },
                        { t: "1. Walked to hotel, 2. Arrived at beach.", c: false }
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
                    title: "The Lantern Festival",
                    audio: "TTS: Last month, my family and I travelled to a beautiful city for the Lantern Festival. First, we arrived at the park in the evening. It was dark, but the lanterns were bright and colorful. Then, the music started. Everyone watched the parade. I tasted traditional food and it was delicious. Finally, we released our own lanterns into the sky. It was a magical night. || audio/7-3-5/p6_text1.mp3",
                    body: "Last month, my family and I travelled to a beautiful city for the Lantern Festival. First, we arrived at the park in the evening. It was dark, but the lanterns were bright and colorful. Then, the music started. Everyone watched the parade. I tasted traditional food and it was delicious. Finally, we released our own lanterns into the sky. It was a magical night.",
                    questions: [
                        { 
                            q: "When did they travel?", 
                            options: [ 
                                {t: "Last month", c: true}, 
                                {t: "Yesterday", c: false}, 
                                {t: "Last year", c: false}, 
                                {t: "Two days ago", c: false} 
                            ] 
                        },
                        { 
                            q: "What did they do first?", 
                            options: [ 
                                {t: "Released lanterns", c: false}, 
                                {t: "Arrived at the park", c: true}, 
                                {t: "Tasted traditional food", c: false}, 
                                {t: "Danced", c: false} 
                            ] 
                        },
                        { 
                            q: "How was the night described?", 
                            options: [ 
                                {t: "Boring", c: false}, 
                                {t: "Scary", c: false}, 
                                {t: "Magical", c: true}, 
                                {t: "Cold", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "A Trip to Spain",
                    audio: "audio/7-3-5/p6_text2.mp3",
                    body: "<b>Albert:</b> Hi Celine! I didn't see you last week.<br><b>Celine:</b> Hi Albert! I was in Spain. I travelled there with my parents.<br><b>Albert:</b> Wow! Did you learn Spanish?<br><b>Celine:</b> Yes, I learned some words when I visited Madrid.<br><b>Albert:</b> What did you do there?<br><b>Celine:</b> We visited museums and walked around the city. It rained one day, but we visited a castle anyway.<br><b>Albert:</b> That sounds fun!",
                    questions: [
                        { 
                            q: "Where did Celine go?", 
                            options: [ 
                                {t: "France", c: false}, 
                                {t: "Spain", c: true}, 
                                {t: "Italy", c: false}, 
                                {t: "Brazil", c: false} 
                            ] 
                        },
                        { 
                            q: "When did she learn some Spanish words?", 
                            options: [ 
                                {t: "When she visited Madrid", c: true}, 
                                {t: "Before the trip", c: false}, 
                                {t: "Yesterday", c: false}, 
                                {t: "When she arrived home", c: false} 
                            ] 
                        },
                        { 
                            q: "What happened one day?", 
                            options: [ 
                                {t: "It snowed", c: false}, 
                                {t: "The bus stopped", c: false}, 
                                {t: "It rained", c: true}, 
                                {t: "She lost her bag", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "Carnival in My City",
                    audio: "TTS: My city has a huge Carnival celebration every year. Last year, I participated in the parade. I wore a colorful costume with feathers. I practiced the dance for weeks. On the day of the parade, I was nervous, but I started dancing when I heard the drums. The energy was amazing. People clapped and shouted. I loved every minute of it. || audio/7-3-5/p6_text3.mp3",
                    body: "My city has a huge Carnival celebration every year. Last year, I participated in the parade. I wore a colorful costume with feathers. I practiced the dance for weeks. On the day of the parade, I was nervous, but I started dancing when I heard the drums. The energy was amazing. People clapped and shouted. I loved every minute of it.",
                    questions: [
                        { 
                            q: "What did the writer wear?", 
                            options: [ 
                                {t: "A uniform", c: false}, 
                                {t: "A colorful costume", c: true}, 
                                {t: "A suit", c: false}, 
                                {t: "Jeans", c: false} 
                            ] 
                        },
                        { 
                            q: "What did the writer do for weeks?", 
                            options: [ 
                                {t: "Travelled", c: false}, 
                                {t: "Practiced the dance", c: true}, 
                                {t: "Cooked food", c: false}, 
                                {t: "Slept", c: false} 
                            ] 
                        },
                        { 
                            q: "When did the writer start dancing?", 
                            options: [ 
                                {t: "When he arrived", c: false}, 
                                {t: "When he heard the drums", c: true}, 
                                {t: "When he saw his friends", c: false}, 
                                {t: "When the parade stopped", c: false} 
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
                    instruction: "Match the sequencer with its Portuguese translation.<br><small style='color:#0077b6'>(Combine o sequenciador com sua tradução em português.)</small>",
                    pairs: [
                        { left: "First", right: "Primeiro", val: "1" },
                        { left: "Then", right: "Então / Depois", val: "2" },
                        { left: "Finally", right: "Finalmente", val: "3" },
                        { left: "After that", right: "Depois disso", val: "4" }
                    ]
                },
                // Drill 2: Word Order
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "visited / yesterday / We / museum / the / .",
                    correct: "We visited the museum yesterday ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "arrived / started / We / the / when / movie / .",
                    correct: "We arrived when the movie started ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "liked / because / I / trip / fun / the / it / was / .",
                    correct: "I liked the trip because it was fun ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "rained / went / It / so / home / we / .",
                    correct: "It rained so we went home ."
                },
                // Drill 3: Odd One Out (4 Alternatives each)
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Travelled", c: false },
                        { t: "Visited", c: false },
                        { t: "Go", c: true },
                        { t: "Played", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Yesterday", c: false },
                        { t: "Last night", c: false },
                        { t: "Tomorrow", c: true },
                        { t: "Two days ago", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "First", c: false },
                        { t: "Then", c: false },
                        { t: "Finally", c: false },
                        { t: "House", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Festival", c: false },
                        { t: "Parade", c: false },
                        { t: "Costume", c: false },
                        { t: "Tried", c: true }
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown with 4 alternatives)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.<br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "I [was | were | when | while] sleeping at 10 PM.", a: "was" },
                        { q: "They [were | was | when | while] playing soccer.", a: "were" },
                        { q: "She arrived [when | while | was | were] I was leaving.", a: "when" },
                        { q: "He studied [while | when | was | were] I cooked.", a: "while" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: A past trip or event. Now it's your turn! Write a short story about a past trip or event.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Uma viagem ou evento passado. Agora é a sua vez! Escreva uma pequena história sobre uma viagem ou evento passado.)</span></small>",
            example: "\"Last year, I visited my grandmother. First, I arrived at her house and we hugged. Then, we cooked lunch together. We ate cake when my cousins arrived. It was a happy day.\"<br><br><small><span style='color:#0077b6'>(\"Ano passado, visitei minha avó. Primeiro, cheguei na casa dela e nos abraçamos. Depois, cozinhamos o almoço juntos. Comemos bolo quando meus primos chegaram. Foi um dia feliz.\")</span></small>",
            prompts: [
                "Where did you go? (I went to...) <br><small><span style='color:#0077b6'>(Para onde você foi?)</span></small>",
                "When did you go? (Last year, yesterday...) <br><small><span style='color:#0077b6'>(Quando você foi?)</span></small>",
                "What did you do first? (First, I...) <br><small><span style='color:#0077b6'>(O que você fez primeiro?)</span></small>",
                "What happened then? (Then, we...) <br><small><span style='color:#0077b6'>(O que aconteceu depois?)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Regular Verbs)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                { 
                    term: "Travel - Travelled", 
                    definition: "To make a journey, typically of some length or abroad.", 
                    defTrans: "Viajar - Viajou",
                    example: "I travelled to Japan last year.", 
                    audioFront: "TTS: Travel, Travelled",
                    audioBack: "TTS: I travelled to Japan last year." 
                },
                { 
                    term: "Visit - Visited", 
                    definition: "To go to see and spend time with a person or at a place.", 
                    defTrans: "Visitar - Visitou",
                    example: "We visited a museum yesterday.", 
                    audioFront: "TTS: Visit, Visited",
                    audioBack: "TTS: We visited a museum yesterday." 
                },
                { 
                    term: "Arrive - Arrived", 
                    definition: "To reach a place at the end of a journey.", 
                    defTrans: "Chegar - Chegou",
                    example: "She arrived late last night.", 
                    audioFront: "TTS: Arrive, Arrived",
                    audioBack: "TTS: She arrived late last night." 
                },
                { 
                    term: "Stay - Stayed", 
                    definition: "To live somewhere temporarily as a visitor or guest.", 
                    defTrans: "Ficar / Hospedar-se - Ficou",
                    example: "We stayed in a nice hotel.", 
                    audioFront: "TTS: Stay, Stayed",
                    audioBack: "TTS: We stayed in a nice hotel." 
                },
                { 
                    term: "Dance - Danced", 
                    definition: "To move rhythmically to music.", 
                    defTrans: "Dançar - Dançou",
                    example: "They danced at the party.", 
                    audioFront: "TTS: Dance, Danced",
                    audioBack: "TTS: They danced at the party." 
                },
                { 
                    term: "Enjoy - Enjoyed", 
                    definition: "To take delight or pleasure in an activity or occasion.", 
                    defTrans: "Aproveitar / Gostar - Aproveitou",
                    example: "I really enjoyed the festival.", 
                    audioFront: "TTS: Enjoy, Enjoyed",
                    audioBack: "TTS: I really enjoyed the festival." 
                },
                { 
                    term: "Learn - Learned", 
                    definition: "To gain or acquire knowledge or skill.", 
                    defTrans: "Aprender - Aprendeu",
                    example: "He learned a new language.", 
                    audioFront: "TTS: Learn, Learned",
                    audioBack: "TTS: He learned a new language." 
                },
                { 
                    term: "Watch - Watched", 
                    definition: "To look at or observe attentively.", 
                    defTrans: "Assistir - Assistiu",
                    example: "We watched the parade together.", 
                    audioFront: "TTS: Watch, Watched",
                    audioBack: "TTS: We watched the parade together." 
                },
                { 
                    term: "Try - Tried", 
                    definition: "To make an attempt or effort to do something.", 
                    defTrans: "Experimentar / Tentar - Experimentou",
                    example: "She tried sushi for the first time.", 
                    audioFront: "TTS: Try, Tried",
                    audioBack: "TTS: She tried sushi for the first time." 
                },
                { 
                    term: "Listen - Listened", 
                    definition: "To give attention to a sound.", 
                    defTrans: "Ouvir - Ouviu",
                    example: "We listened to the music.", 
                    audioFront: "TTS: Listen, Listened",
                    audioBack: "TTS: We listened to the music." 
                },
                { 
                    term: "Like - Liked", 
                    definition: "To find agreeable, enjoyable, or satisfactory.", 
                    defTrans: "Gostar - Gostou",
                    example: "I liked the costumes.", 
                    audioFront: "TTS: Like, Liked",
                    audioBack: "TTS: I liked the costumes." 
                },
                { 
                    term: "Love - Loved", 
                    definition: "To feel deep affection for or enjoy very much.", 
                    defTrans: "Amar - Amou",
                    example: "He loved the trip.", 
                    audioFront: "TTS: Love, Loved",
                    audioBack: "TTS: He loved the trip." 
                },
                { 
                    term: "Play - Played", 
                    definition: "To engage in activity for enjoyment; to perform on an instrument.", 
                    defTrans: "Tocar - Tocou",
                    example: "The band played all night.", 
                    audioFront: "TTS: Play, Played",
                    audioBack: "TTS: The band played all night." 
                },
                { 
                    term: "Start - Started", 
                    definition: "To begin or cause to begin.", 
                    defTrans: "Começar - Começou",
                    example: "The show started at 8 PM.", 
                    audioFront: "TTS: Start, Started",
                    audioBack: "TTS: The show started at 8 PM." 
                },
                { 
                    term: "Stop - Stopped", 
                    definition: "To come to an end; cease to happen.", 
                    defTrans: "Parar - Parou",
                    example: "The rain stopped suddenly.", 
                    audioFront: "TTS: Stop, Stopped",
                    audioBack: "TTS: The rain stopped suddenly." 
                },
                { 
                    term: "Study - Studied", 
                    definition: "To devote time and attention to acquiring knowledge.", 
                    defTrans: "Estudar - Estudou",
                    example: "I studied history before the trip.", 
                    audioFront: "TTS: Study, Studied",
                    audioBack: "TTS: I studied history before the trip." 
                },
                { 
                    term: "Walk - Walked", 
                    definition: "To move at a regular pace by lifting and setting down each foot.", 
                    defTrans: "Caminhar - Caminhou",
                    example: "We walked around the city.", 
                    audioFront: "TTS: Walk, Walked",
                    audioBack: "TTS: We walked around the city." 
                },
                { 
                    term: "Want - Wanted", 
                    definition: "To have a desire to possess or do something.", 
                    defTrans: "Querer - Quis",
                    example: "She wanted to go home.", 
                    audioFront: "TTS: Want, Wanted",
                    audioBack: "TTS: She wanted to go home." 
                },
                // --- Travel & Festivals Vocabulary ---
                { 
                    term: "Trip / Journey", 
                    definition: "An act of going to a place and returning; traveling from one place to another.", 
                    defTrans: "Viagem / Jornada",
                    example: "It was a long journey.", 
                    audioFront: "TTS: Trip or Journey",
                    audioBack: "TTS: It was a long journey." 
                },
                { 
                    term: "Festival", 
                    definition: "A day or period of celebration.", 
                    defTrans: "Festival / Festa",
                    example: "The festival was crowded.", 
                    audioFront: "TTS: Festival",
                    audioBack: "TTS: The festival was crowded." 
                },
                { 
                    term: "Parade", 
                    definition: "A public procession, especially one celebrating a special day or event.", 
                    defTrans: "Desfile / Parada",
                    example: "The parade had many floats.", 
                    audioFront: "TTS: Parade",
                    audioBack: "TTS: The parade had many floats." 
                },
                { 
                    term: "Music", 
                    definition: "Vocal or instrumental sounds combined to produce beauty of form.", 
                    defTrans: "Música",
                    example: "I love traditional music.", 
                    audioFront: "TTS: Music",
                    audioBack: "TTS: I love traditional music." 
                },
                { 
                    term: "Costume", 
                    definition: "A set of clothes in a style typical of a particular country or period.", 
                    defTrans: "Fantasia / Traje",
                    example: "Your costume is beautiful.", 
                    audioFront: "TTS: Costume",
                    audioBack: "TTS: Your costume is beautiful." 
                },
                { 
                    term: "Food", 
                    definition: "Any nutritious substance that people or animals eat or drink.", 
                    defTrans: "Comida",
                    example: "The local food is spicy.", 
                    audioFront: "TTS: Food",
                    audioBack: "TTS: The local food is spicy." 
                },
                { 
                    term: "Culture", 
                    definition: "The ideas, customs, and social behavior of a particular people or society.", 
                    defTrans: "Cultura",
                    example: "We learned about Japanese culture.", 
                    audioFront: "TTS: Culture",
                    audioBack: "TTS: We learned about Japanese culture." 
                },
                { 
                    term: "Custom / Tradition", 
                    definition: "A traditional and widely accepted way of behaving or doing something.", 
                    defTrans: "Costume / Tradição",
                    example: "It is a local custom to bow.", 
                    audioFront: "TTS: Custom or Tradition",
                    audioBack: "TTS: It is a local custom to bow." 
                },
                { 
                    term: "Country", 
                    definition: "A nation with its own government, occupying a particular territory.", 
                    defTrans: "País",
                    example: "Which country did you visit?", 
                    audioFront: "TTS: Country",
                    audioBack: "TTS: Which country did you visit?" 
                },
                { 
                    term: "City", 
                    definition: "A large town.", 
                    defTrans: "Cidade",
                    example: "Tokyo is a big city.", 
                    audioFront: "TTS: City",
                    audioBack: "TTS: Tokyo is a big city." 
                },
                { 
                    term: "Place", 
                    definition: "A particular position or point in space.", 
                    defTrans: "Lugar",
                    example: "This is a nice place.", 
                    audioFront: "TTS: Place",
                    audioBack: "TTS: This is a nice place." 
                },

                // --- Sequencers & Connectors ---
                { 
                    term: "First / Firstly", 
                    definition: "Before anything else.", 
                    defTrans: "Primeiro / Primeiramente",
                    example: "First, we bought the tickets.", 
                    audioFront: "TTS: First or Firstly",
                    audioBack: "TTS: First, we bought the tickets." 
                },
                { 
                    term: "Then", 
                    definition: "After that; next; afterward.", 
                    defTrans: "Então / Depois",
                    example: "Then, we entered the museum.", 
                    audioFront: "TTS: Then",
                    audioBack: "TTS: Then, we entered the museum." 
                },
                { 
                    term: "Next", 
                    definition: "Coming immediately after the time of writing or speaking.", 
                    defTrans: "Próximo / Em seguida",
                    example: "Next, we saw the paintings.", 
                    audioFront: "TTS: Next",
                    audioBack: "TTS: Next, we saw the paintings." 
                },
                { 
                    term: "After that", 
                    definition: "Following a previous event.", 
                    defTrans: "Depois disso",
                    example: "After that, we ate lunch.", 
                    audioFront: "TTS: After that",
                    audioBack: "TTS: After that, we ate lunch." 
                },
                { 
                    term: "Finally / Lastly", 
                    definition: "Used to introduce a final point or reason.", 
                    defTrans: "Finalmente / Por último",
                    example: "Finally, we went home.", 
                    audioFront: "TTS: Finally or Lastly",
                    audioBack: "TTS: Finally, we went home." 
                },
                { 
                    term: "And", 
                    definition: "Used to connect words of the same part of speech or sentences.", 
                    defTrans: "E",
                    example: "I like music and dance.", 
                    audioFront: "TTS: And",
                    audioBack: "TTS: I like music and dance." 
                },
                { 
                    term: "Also", 
                    definition: "In addition; too.", 
                    defTrans: "Também",
                    example: "I also visited the park.", 
                    audioFront: "TTS: Also",
                    audioBack: "TTS: I also visited the park." 
                },
                { 
                    term: "But", 
                    definition: "Used to introduce a phrase or clause contrasting with what has been mentioned.", 
                    defTrans: "Mas / Porém",
                    example: "It was cold, but sunny.", 
                    audioFront: "TTS: But",
                    audioBack: "TTS: It was cold, but sunny." 
                },
                { 
                    term: "Because", 
                    definition: "For the reason that; since.", 
                    defTrans: "Porque",
                    example: "I stayed home because I was sick.", 
                    audioFront: "TTS: Because",
                    audioBack: "TTS: I stayed home because I was sick." 
                },
                { 
                    term: "So", 
                    definition: "And for this reason; therefore.", 
                    defTrans: "Então / Por isso",
                    example: "I was tired, so I slept.", 
                    audioFront: "TTS: So",
                    audioBack: "TTS: I was tired, so I slept." 
                },
                { 
                    term: "For example", 
                    definition: "Used to introduce an illustration or example.", 
                    defTrans: "Por exemplo",
                    example: "I like fruits, for example, apples.", 
                    audioFront: "TTS: For example",
                    audioBack: "TTS: I like fruits, for example, apples." 
                },
                // --- Time Expressions (Past) ---
                { 
                    term: "Yesterday", 
                    definition: "On the day before today.", 
                    defTrans: "Ontem",
                    example: "I saw him yesterday.", 
                    audioFront: "TTS: Yesterday",
                    audioBack: "TTS: I saw him yesterday." 
                },
                { 
                    term: "Last night", 
                    definition: "The night before the present day.", 
                    defTrans: "Ontem à noite",
                    example: "We watched a movie last night.", 
                    audioFront: "TTS: Last night",
                    audioBack: "TTS: We watched a movie last night." 
                },
                { 
                    term: "Last week", 
                    definition: "The week before the current one.", 
                    defTrans: "Semana passada",
                    example: "She arrived last week.", 
                    audioFront: "TTS: Last week",
                    audioBack: "TTS: She arrived last week." 
                },
                { 
                    term: "Last month", 
                    definition: "The month before the current one.", 
                    defTrans: "Mês passado",
                    example: "We travelled last month.", 
                    audioFront: "TTS: Last month",
                    audioBack: "TTS: We travelled last month." 
                },
                { 
                    term: "Last year", 
                    definition: "The year before the current one.", 
                    defTrans: "Ano passado",
                    example: "I visited Spain last year.", 
                    audioFront: "TTS: Last year",
                    audioBack: "TTS: I visited Spain last year." 
                },
                { 
                    term: "Two days ago", 
                    definition: "48 hours before the present time.", 
                    defTrans: "Dois dias atrás",
                    example: "He called two days ago.", 
                    audioFront: "TTS: Two days ago",
                    audioBack: "TTS: He called two days ago." 
                },
                { 
                    term: "A long time ago", 
                    definition: "In the distant past.", 
                    defTrans: "Há muito tempo",
                    example: "It happened a long time ago.", 
                    audioFront: "TTS: A long time ago",
                    audioBack: "TTS: It happened a long time ago." 
                },
                { 
                    term: "In [year]", 
                    definition: "Used to specify a year in the past.", 
                    defTrans: "Em [ano]",
                    example: "I was born in 2010.", 
                    audioFront: "TTS: In 2010",
                    audioBack: "TTS: I was born in 2010." 
                },

                // --- Grammar Points ---
                { 
                    term: "Simple Past (Regular Rule)", 
                    definition: "Verb tense for finished actions; formed by adding -ed.", 
                    defTrans: "Passado Simples (Regra Geral)",
                    example: "I played soccer yesterday.", 
                    audioFront: "TTS: Simple Past Regular Rule",
                    audioBack: "TTS: I played soccer yesterday." 
                },
                { 
                    term: "Simple Past (Spelling -e)", 
                    definition: "Verbs ending in -e receive only -d.", 
                    defTrans: "Passado Simples (Terminados em -e)",
                    example: "She liked the film.", 
                    audioFront: "TTS: Simple Past Spelling E",
                    audioBack: "TTS: She liked the film." 
                },
                { 
                    term: "Simple Past (Spelling -y)", 
                    definition: "Verbs ending in consonant + y change to -ied.", 
                    defTrans: "Passado Simples (Consoante + y)",
                    example: "He studied hard.", 
                    audioFront: "TTS: Simple Past Spelling Y",
                    audioBack: "TTS: He studied hard." 
                },
                { 
                    term: "Simple Past (Spelling CVC)", 
                    definition: "Double the last consonant before adding -ed.", 
                    defTrans: "Passado Simples (CVC)",
                    example: "The car stopped.", 
                    audioFront: "TTS: Simple Past Spelling CVC",
                    audioBack: "TTS: The car stopped." 
                },
                { 
                    term: "When (Connector)", 
                    definition: "Used to connect two actions, often showing sequence.", 
                    defTrans: "Quando (Conector)",
                    example: "We danced when the music started.", 
                    audioFront: "TTS: When connector",
                    audioBack: "TTS: We danced when the music started." 
                }
            ]
        }
    ], // Closes steps array

    // ======================================================
    // GLOSSARY (Part 1: Context, Verbs & Vocabulary)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "travelled", 
            definition: "Past form of travel; made a journey.", 
            translation: "Viajei / Viajou" 
        },
        { 
            topic: "Context", 
            term: "last-month", 
            definition: "The month before the current one.", 
            translation: "Mês passado" 
        },
        { 
            topic: "Context", 
            term: "visited", 
            definition: "Past form of visit; went to see a person or place.", 
            translation: "Visitei / Visitou" 
        },
        { 
            topic: "Context", 
            term: "festival", 
            definition: "A day or period of celebration.", 
            translation: "Festival / Festa" 
        },
        { 
            topic: "Context", 
            term: "watched", 
            definition: "Past form of watch; looked at attentively.", 
            translation: "Assisti / Assistiu" 
        },
        { 
            topic: "Context", 
            term: "parade", 
            definition: "A public procession, especially one celebrating a special day.", 
            translation: "Desfile / Parada" 
        },
        { 
            topic: "Context", 
            term: "costume", 
            definition: "A set of clothes in a style typical of a particular country or period.", 
            translation: "Fantasia / Traje" 
        },
        { 
            topic: "Context", 
            term: "danced", 
            definition: "Past form of dance; moved rhythmically to music.", 
            translation: "Dancei / Dançou" 
        },
        { 
            topic: "Context", 
            term: "when", 
            definition: "Used to connect two actions in the past.", 
            translation: "Quando" 
        },
        { 
            topic: "Context", 
            term: "music", 
            definition: "Vocal or instrumental sounds combined to produce beauty.", 
            translation: "Música" 
        },
        { 
            topic: "Context", 
            term: "started", 
            definition: "Past form of start; began.", 
            translation: "Começou" 
        },
        { 
            topic: "Context", 
            term: "try", 
            definition: "To make an attempt or effort; to test something.", 
            translation: "Experimentar / Tentar" 
        },
        { 
            topic: "Context", 
            term: "tried", 
            definition: "Past form of try.", 
            translation: "Experimentou / Tentou" 
        },
        { 
            topic: "Context", 
            term: "liked", 
            definition: "Past form of like; found agreeable or satisfactory.", 
            translation: "Gostei / Gostou" 
        },
        { 
            topic: "Context", 
            term: "delicious", 
            definition: "Highly pleasant to the taste.", 
            translation: "Delicioso" 
        },

        // --- TOPIC 2: TRAVEL VERBS ---
        { 
            topic: "Travel Verbs", 
            term: "travel", 
            definition: "To make a journey, typically over a distance.", 
            translation: "Viajar" 
        },
        { 
            topic: "Travel Verbs", 
            term: "arrive", 
            definition: "To reach a place at the end of a journey.", 
            translation: "Chegar" 
        },
        { 
            topic: "Travel Verbs", 
            term: "stay", 
            definition: "To live somewhere temporarily as a visitor.", 
            translation: "Ficar / Hospedar-se" 
        },
        { 
            topic: "Travel Verbs", 
            term: "dance", 
            definition: "To move rhythmically to music.", 
            translation: "Dançar" 
        },
        { 
            topic: "Travel Verbs", 
            term: "enjoy", 
            definition: "To take delight or pleasure in something.", 
            translation: "Aproveitar / Gostar" 
        },
        { 
            topic: "Travel Verbs", 
            term: "learn", 
            definition: "To gain or acquire knowledge or skill.", 
            translation: "Aprender" 
        },

        // --- TOPIC 3: TRAVEL & FESTIVAL VOCABULARY ---
        { 
            topic: "Vocabulary", 
            term: "trip", 
            definition: "An act of going to a place and returning.", 
            translation: "Viagem" 
        },
        { 
            topic: "Vocabulary", 
            term: "food", 
            definition: "Any nutritious substance that people eat.", 
            translation: "Comida" 
        },
        { 
            topic: "Vocabulary", 
            term: "culture", 
            definition: "The ideas, customs, and behavior of a society.", 
            translation: "Cultura" 
        },
        { 
            topic: "Vocabulary", 
            term: "tradition", 
            definition: "A long-established custom or belief.", 
            translation: "Tradição" 
        },
        { 
            topic: "Vocabulary", 
            term: "country", 
            definition: "A nation with its own government.", 
            translation: "País" 
        },
        { 
            topic: "Vocabulary", 
            term: "city", 
            definition: "A large town.", 
            translation: "Cidade" 
        },
        { 
            topic: "Vocabulary", 
            term: "place", 
            definition: "A particular position or point in space.", 
            translation: "Lugar" 
        },
        // --- TOPIC 4: SEQUENCERS & CONNECTORS ---
        { 
            topic: "Sequencers", 
            term: "first", 
            definition: "Before anything else in a series.", 
            translation: "Primeiro" 
        },
        { 
            topic: "Sequencers", 
            term: "then", 
            definition: "After that; next; afterward.", 
            translation: "Então / Depois" 
        },
        { 
            topic: "Sequencers", 
            term: "next", 
            definition: "Coming immediately after the time of writing or speaking.", 
            translation: "Próximo / Em seguida" 
        },
        { 
            topic: "Sequencers", 
            term: "after-that", 
            definition: "Following a previous event.", 
            translation: "Depois disso" 
        },
        { 
            topic: "Sequencers", 
            term: "finally", 
            definition: "Used to introduce a final point or the end of a story.", 
            translation: "Finalmente / Por último" 
        },
        { 
            topic: "Connectors", 
            term: "but", 
            definition: "Used to introduce a phrase or clause contrasting with what has been mentioned.", 
            translation: "Mas / Porém" 
        },
        { 
            topic: "Connectors", 
            term: "because", 
            definition: "For the reason that; since.", 
            translation: "Porque" 
        },
        { 
            topic: "Connectors", 
            term: "so", 
            definition: "And for this reason; therefore.", 
            translation: "Então / Por isso" 
        },
        { 
            topic: "Connectors", 
            term: "for-example", 
            definition: "Used to introduce an illustration or instance of something.", 
            translation: "Por exemplo" 
        },

        // --- TOPIC 5: TIME EXPRESSIONS (PAST) ---
        { 
            topic: "Time Expressions", 
            term: "yesterday", 
            definition: "On the day before today.", 
            translation: "Ontem" 
        },
        { 
            topic: "Time Expressions", 
            term: "last-night", 
            definition: "The night before the present day.", 
            translation: "Ontem à noite" 
        },
        { 
            topic: "Time Expressions", 
            term: "last-week", 
            definition: "The week before the current one.", 
            translation: "Semana passada" 
        },
        { 
            topic: "Time Expressions", 
            term: "last-year", 
            definition: "The year before the current one.", 
            translation: "Ano passado" 
        },
        { 
            topic: "Time Expressions", 
            term: "ago", 
            definition: "Before the present; in the past.", 
            translation: "Atrás" 
        },
        { 
            topic: "Time Expressions", 
            term: "a-long-time-ago", 
            definition: "In the distant past.", 
            translation: "Há muito tempo" 
        },

        // --- TOPIC 6: GRAMMAR POINTS ---
        { 
            topic: "Grammar", 
            term: "simple-past", 
            definition: "The tense used to talk about actions that started and finished in the past.", 
            translation: "Passado simples" 
        },
        { 
            topic: "Grammar", 
            term: "regular-verbs", 
            definition: "Verbs that form the past tense by adding -ed to the base form.", 
            translation: "Verbos regulares" 
        },
        { 
            topic: "Grammar", 
            term: "did-you-try", 
            definition: "Question form used to ask about a past experience.", 
            translation: "Você experimentou / Tentou?" 
        },
        { 
            topic: "Grammar", 
            term: "what-happened", 
            definition: "Question asking about a past event or problem.", 
            translation: "O que aconteceu?" 
        }
    ]
});