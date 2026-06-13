/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-4-11.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em1-4-11", 
    grade: "High School 1st Grade",       
    bimester: "4",   
    chapter: "11",    
    chapterTitle: "A Healthy Life: Feeling Good Inside and Out", 
    
    steps:[
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss [health](tooltip:health) and [well-being](tooltip:well-being).<br>• Use the [Passive Voice](tooltip:passive-voice) across different tenses.<br>• Master the [Causative Form](tooltip:causative-form) to talk about services.<br>• Differentiate between [Gerunds](tooltip:gerunds) and [Infinitives](tooltip:infinitives).<br>• Use Linking Words of [Condition](tooltip:condition) for possibilities.<br>• Describe actions using [Prepositions of Movement](tooltip:prepositions-of-movement).",
            welcome: "Hello, champions of [wellness](tooltip:wellness)! I'm Mr. D!<br>What does it truly mean to be healthy? Is it just about not being sick? Not at all! Today, we are opening the door to a [balanced](tooltip:balanced) life. We will explore how to [manage](tooltip:manage) [stress](tooltip:stress) and find joy, while mastering advanced grammar like the Passive Voice. You'll learn how to describe your [gym](tooltip:gym) routine as you walk through the park or run around the block. It’s time to feel good inside and out! Let’s get our bodies and minds moving!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss health and well-being. Use the Passive Voice across different tenses. Master the Causative Form to talk about services. Differentiate between Gerunds and Infinitives. Use Linking Words of Condition for possibilities. Describe actions using Prepositions of Movement.",
                welcome: "TTS: Hello, champions of wellness! I'm Mr. D! What does it truly mean to be healthy? Is it just about not being sick? Not at all! Today, we are opening the door to a balanced life. We will explore how to manage stress and find joy, while mastering advanced grammar like the Passive Voice. You'll learn how to describe your gym routine as you walk through the park or run around the block. It’s time to feel good inside and out! Let’s get our bodies and minds moving!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Albert and Celine are in the school garden during a break. Albert is sitting on a bench looking at his phone, while Celine is stretching and drinking water.", 
            contextAudio: "audio/em1-4-11/step1.mp3",
            dialogue:[
                { 
                    speaker: "Celine", 
                    text: "Hi Albert! You look a bit [anxious](tooltip:anxious). I just came back from a walk [around](tooltip:around) the lake. It was great for my [well-being](tooltip:well-being)!" 
                },
                { 
                    speaker: "Albert", 
                    text: "I [feel](tooltip:feel) a bit [overwhelmed](tooltip:overwhelmed). A lot of information about [mental health](tooltip:mental-health) is being [shared](tooltip:shared) online lately. It makes me think about my own [habits](tooltip:habit)." 
                },
                { 
                    speaker: "Celine", 
                    text: "[Managing](tooltip:manage) [stress](tooltip:stress) is a crucial [step](tooltip:step), Albert. If you feel tired, you should try to [relax](tooltip:relax). I got my mom to come with me last week, and she loved it." 
                },
                { 
                    speaker: "Albert", 
                    text: "My dad had a [meditation center](tooltip:meditation-center) [built](tooltip:built) in our [neighborhood](tooltip:neighborhood) last year. He says [altruism](tooltip:altruism) is [known](tooltip:known) to be a [benefit](tooltip:benefit) to the [body](tooltip:body) too." 
                },
                { 
                    speaker: "Celine", 
                    text: "He’s right! Helping others is a great way to feel better. I will [go for a hike](tooltip:go-for-a-hike) tomorrow [unless](tooltip:unless) it rains. Do you want to [come along](tooltip:come-along)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "I'd like to, [provided that](tooltip:provided-that) I finish my project. I need to [improve](tooltip:improve) my [health](tooltip:health). I had my stress levels [checked](tooltip:checked) by a doctor yesterday, and he [suggested](tooltip:suggested) [exercising](tooltip:exercise) more." 
                },
                { 
                    speaker: "Celine", 
                    text: "Perfect! We can [go through](tooltip:go-through) the forest path. It’s [healthy](tooltip:healthy) and very [calm](tooltip:calm)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Great! Let's go [towards](tooltip:towards) a better [lifestyle](tooltip:lifestyle) then!" 
                }
            ]
        },

        // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
        // ======================================================
        {
            title: "Say the word",
            subPages:[
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],

            // 2A: Vocabulary Lists (Tabbed)
            areas:[
                {
                    title: "Verbs (Health)",
                    audio: "TTS: To exercise. To feel. To manage. To relax. To improve.",
                    items:[
                        { term: "To exercise", trans: "Exercitar-se" },
                        { term: "To feel", trans: "Sentir-se" },
                        { term: "To manage", trans: "Gerenciar / Lidar com" },
                        { term: "To relax", trans: "Relaxar" },
                        { term: "To improve", trans: "Melhorar" }
                    ]
                },
                {
                    title: "Wellness & Mind",
                    audio: "TTS: Health. Well-being. Mental Health. Stress. Depression. Altruism. Active. Benefit. Healthy. Step. Pet. Body. Anxious. Calm. Habit.",
                    items:[
                        { term: "Health", trans: "Saúde" },
                        { term: "Well-being", trans: "Bem-estar" },
                        { term: "Mental Health", trans: "Saúde Mental" },
                        { term: "Stress", trans: "Estresse" },
                        { term: "Depression", trans: "Depressão" },
                        { term: "Altruism", trans: "Altruísmo" },
                        { term: "Active", trans: "Ativo(a)" },
                        { term: "Benefit", trans: "Benefício" },
                        { term: "Healthy", trans: "Saudável" },
                        { term: "Step", trans: "Passo" },
                        { term: "Pet", trans: "Animal de estimação" },
                        { term: "Body", trans: "Corpo" },
                        { term: "Anxious", trans: "Ansioso(a)" },
                        { term: "Calm", trans: "Calmo(a)" },
                        { term: "Habit", trans: "Hábito" }
                    ]
                },
                {
                    title: "Conditions",
                    audio: "TTS: If. Whether. In case. Unless. As long as. Provided that.",
                    items:[
                        { term: "If", trans: "Se" },
                        { term: "Whether", trans: "Se (escolha entre dois)" },
                        { term: "In case", trans: "No caso de" },
                        { term: "Unless", trans: "A menos que" },
                        { term: "As long as", trans: "Desde que" },
                        { term: "Provided that", trans: "Contanto que" }
                    ]
                },
                {
                    title: "Movement",
                    audio: "TTS: To. From. Into. Out of. Onto. Off. Up. Down. Along. Through. Across. Towards. Over. Under. Around. Past.",
                    items:[
                        { term: "To", trans: "Para (destino)" },
                        { term: "From", trans: "De (origem)" },
                        { term: "Into", trans: "Para dentro de" },
                        { term: "Out of", trans: "Para fora de" },
                        { term: "On(to)", trans: "Para cima de" },
                        { term: "Off", trans: "Para fora de (superfície)" },
                        { term: "Up", trans: "Para cima" },
                        { term: "Down", trans: "Para baixo" },
                        { term: "Along", trans: "Ao longo de" },
                        { term: "Through", trans: "Através de" },
                        { term: "Across", trans: "Através de / Cruzando" },
                        { term: "Towards", trans: "Em direção a" },
                        { term: "Over", trans: "Por cima de" },
                        { term: "Under", trans: "Por baixo de" },
                        { term: "Around", trans: "Ao redor de" },
                        { term: "Past", trans: "Passando por" }
                    ]
                },
                {
                    title: "Expressions",
                    audio: "TTS: Feeling good inside and out. Steps for better health. A lot of research has been done. I had my stress levels checked. I will go for a walk unless it rains. She let her friends help her. I enjoy walking through the park.",
                    items:[
                        { term: "Feeling good inside and out", trans: "Sentir-se bem por dentro e por fora" },
                        { term: "Steps for better health", trans: "Passos para uma saúde melhor" },
                        { term: "A lot of research has been done", trans: "Muitas pesquisas foram feitas" },
                        { term: "I had my stress levels checked", trans: "Eu tive meus níveis de estresse checados" },
                        { term: "I will go for a walk unless it rains", trans: "Eu vou caminhar, a menos que chova" },
                        { term: "She let her friends help her", trans: "Ela deixou seus amigos a ajudarem" },
                        { term: "I enjoy walking through the park", trans: "Eu gosto de caminhar pelo parque" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups:[
                {
                    title: "Verbs (Health)",
                    audio: "TTS: You should exercise at least three times a week. I feel very calm when I am in nature. It is hard to manage stress during exams. Take a deep breath to relax your mind. Eating well will improve your energy levels.",
                    items:[
                        { term: "To exercise", sent: "You should exercise at least three times a week.", trans: "<span style='color:#0077b6'>Você deveria se exercitar pelo menos três vezes por semana.</span>" },
                        { term: "To feel", sent: "I feel very calm when I am in nature.", trans: "<span style='color:#0077b6'>Eu me sinto muito calmo quando estou na natureza.</span>" },
                        { term: "To manage", sent: "It is hard to manage stress during exams.", trans: "<span style='color:#0077b6'>É difícil lidar com o estresse durante as provas.</span>" },
                        { term: "To relax", sent: "Take a deep breath to relax your mind.", trans: "<span style='color:#0077b6'>Respire fundo para relaxar sua mente.</span>" },
                        { term: "To improve", sent: "Eating well will improve your energy levels.", trans: "<span style='color:#0077b6'>Comer bem vai melhorar seus níveis de energia.</span>" }
                    ]
                },
                {
                    title: "Wellness & Mind",
                    audio: "TTS: Good health is our greatest wealth. Emotional well-being is just as important as physical health. We must talk openly about mental health. High stress can affect your body. Depression is a serious condition that needs treatment. Altruism can make you a happier person. He leads a very active lifestyle. One benefit of pets is reduced anxiety. Choose healthy snacks like fruits. Drinking water is the first step to hydration. My pet cat helps me relax. Listen to your body when you are tired. I feel anxious before big presentations. Meditation helps me stay calm. Running every morning is a great habit.",
                    items:[
                        { term: "Health", sent: "Good health is our greatest wealth.", trans: "<span style='color:#0077b6'>Boa saúde é nossa maior riqueza.</span>" },
                        { term: "Well-being", sent: "Emotional well-being is just as important as physical health.", trans: "<span style='color:#0077b6'>O bem-estar emocional é tão importante quanto a saúde física.</span>" },
                        { term: "Mental Health", sent: "We must talk openly about mental health.", trans: "<span style='color:#0077b6'>Devemos falar abertamente sobre saúde mental.</span>" },
                        { term: "Stress", sent: "High stress can affect your body.", trans: "<span style='color:#0077b6'>O alto estresse pode afetar seu corpo.</span>" },
                        { term: "Depression", sent: "Depression is a serious condition that needs treatment.", trans: "<span style='color:#0077b6'>A depressão é uma condição séria que precisa de tratamento.</span>" },
                        { term: "Altruism", sent: "Altruism can make you a happier person.", trans: "<span style='color:#0077b6'>O altruísmo pode fazer de você uma pessoa mais feliz.</span>" },
                        { term: "Active", sent: "He leads a very active lifestyle.", trans: "<span style='color:#0077b6'>Ele leva um estilo de vida muito ativo.</span>" },
                        { term: "Benefit", sent: "One benefit of pets is reduced anxiety.", trans: "<span style='color:#0077b6'>Um benefício dos animais de estimação é a redução da ansiedade.</span>" },
                        { term: "Healthy", sent: "Choose healthy snacks like fruits.", trans: "<span style='color:#0077b6'>Escolha lanches saudáveis como frutas.</span>" },
                        { term: "Step", sent: "Drinking water is the first step to hydration.", trans: "<span style='color:#0077b6'>Beber água é o primeiro passo para a hidratação.</span>" },
                        { term: "Pet", sent: "My pet cat helps me relax.", trans: "<span style='color:#0077b6'>Meu gato de estimação me ajuda a relaxar.</span>" },
                        { term: "Body", sent: "Listen to your body when you are tired.", trans: "<span style='color:#0077b6'>Escute seu corpo quando estiver cansado.</span>" },
                        { term: "Anxious", sent: "I feel anxious before big presentations.", trans: "<span style='color:#0077b6'>Sinto-me ansioso antes de grandes apresentações.</span>" },
                        { term: "Calm", sent: "Meditation helps me stay calm.", trans: "<span style='color:#0077b6'>A meditação me ajuda a ficar calmo.</span>" },
                        { term: "Habit", sent: "Running every morning is a great habit.", trans: "<span style='color:#0077b6'>Correr toda manhã é um ótimo hábito.</span>" }
                    ]
                },
                {
                    title: "Conditions",
                    audio: "TTS: If you study, you will pass. I don't know whether to go to the gym or the park. Take an umbrella in case it rains. I won't go unless you come with me. You can stay as long as you are quiet. You will succeed provided that you work hard.",
                    items:[
                        { term: "If", sent: "If you study, you will pass.", trans: "<span style='color:#0077b6'>Se você estudar, passará.</span>" },
                        { term: "Whether", sent: "I don't know whether to go to the gym or the park.", trans: "<span style='color:#0077b6'>Não sei se vou à academia ou ao parque.</span>" },
                        { term: "In case", sent: "Take an umbrella in case it rains.", trans: "<span style='color:#0077b6'>Leve um guarda-chuva no caso de chover.</span>" },
                        { term: "Unless", sent: "I won't go unless you come with me.", trans: "<span style='color:#0077b6'>Eu não irei a menos que você venha comigo.</span>" },
                        { term: "As long as", sent: "You can stay as long as you are quiet.", trans: "<span style='color:#0077b6'>Você pode ficar desde que esteja quieto.</span>" },
                        { term: "Provided that", sent: "You will succeed provided that you work hard.", trans: "<span style='color:#0077b6'>Você terá sucesso contanto que trabalhe duro.</span>" }
                    ]
                },
                {
                    title: "Movement",
                    audio: "TTS: I walked to school from my house. He jumped into the water and climbed out of the pool. The cat jumped onto the table and then off. We ran up the stairs and down the hill. We walked along the river. The path goes through the forest. Be careful when you walk across the street. He is walking towards the meditation center. The bird flew over the fence and the dog ran under the table. We ran around the park three times. Go past the hospital and turn left.",
                    items:[
                        { term: "To / From", sent: "I walked to school from my house.", trans: "<span style='color:#0077b6'>Eu caminhei para a escola da minha casa.</span>" },
                        { term: "Into / Out of", sent: "He jumped into the water and climbed out of the pool.", trans: "<span style='color:#0077b6'>Ele pulou para dentro da água e subiu para fora da piscina.</span>" },
                        { term: "On(to) / Off", sent: "The cat jumped onto the table and then off.", trans: "<span style='color:#0077b6'>O gato pulou para cima da mesa e depois para fora.</span>" },
                        { term: "Up / Down", sent: "We ran up the stairs and down the hill.", trans: "<span style='color:#0077b6'>Nós corremos para cima das escadas e para baixo da colina.</span>" },
                        { term: "Along", sent: "We walked along the river.", trans: "<span style='color:#0077b6'>Caminhamos ao longo do rio.</span>" },
                        { term: "Through", sent: "The path goes through the forest.", trans: "<span style='color:#0077b6'>O caminho passa através da floresta.</span>" },
                        { term: "Across", sent: "Be careful when you walk across the street.", trans: "<span style='color:#0077b6'>Tenha cuidado ao cruzar a rua.</span>" },
                        { term: "Towards", sent: "He is walking towards the meditation center.", trans: "<span style='color:#0077b6'>Ele está caminhando em direção ao centro de meditação.</span>" },
                        { term: "Over / Under", sent: "The bird flew over the fence and the dog ran under the table.", trans: "<span style='color:#0077b6'>O pássaro voou por cima da cerca e o cão correu por baixo da mesa.</span>" },
                        { term: "Around", sent: "We ran around the park three times.", trans: "<span style='color:#0077b6'>Corremos ao redor do parque três vezes.</span>" },
                        { term: "Past", sent: "Go past the hospital and turn left.", trans: "<span style='color:#0077b6'>Passe pelo hospital e vire à esquerda.</span>" }
                    ]
                },
                {
                    title: "Expressions",
                    audio: "TTS: Celine: You look radiant! Albert: Thanks! I'm finally feeling good inside and out. Mrs. Canales: What are the best steps for better health? Albert: Exercising and sleeping well are the main ones. Albert: Is meditation effective? Celine: Yes, a lot of research has been done on this topic. Celine: Why were you at the clinic? Albert: I had my stress levels checked by a professional. Albert: Do you have plans for the afternoon? Celine: I will go for a walk unless it rains. Albert: Was Julia okay with the group project? Celine: Yes, she let her friends help her manage the work. Celine: Where do you go to clear your head? Albert: I enjoy walking through the park near my house.",
                    items:[
                        { term: "Feeling good inside and out", sent: "\"Thanks! I'm finally feeling good inside and out.\"", trans: "<span style='color:#0077b6'>\"Obrigado! Estou finalmente me sentindo bem por dentro e por fora.\"</span>" },
                        { term: "Steps for better health", sent: "\"What are the best steps for better health?\"", trans: "<span style='color:#0077b6'>\"Quais são os melhores passos para uma saúde melhor?\"</span>" },
                        { term: "A lot of research has been done", sent: "\"Yes, a lot of research has been done on this topic.\"", trans: "<span style='color:#0077b6'>\"Sim, muitas pesquisas foram feitas sobre este assunto.\"</span>" },
                        { term: "I had my stress levels checked", sent: "\"I had my stress levels checked by a professional.\"", trans: "<span style='color:#0077b6'>\"Eu tive meus níveis de estresse checados por um profissional.\"</span>" },
                        { term: "I will go for a walk unless it rains", sent: "\"I will go for a walk unless it rains.\"", trans: "<span style='color:#0077b6'>\"Eu vou caminhar, a menos que chova.\"</span>" },
                        { term: "She let her friends help her", sent: "\"Yes, she let her friends help her manage the work.\"", trans: "<span style='color:#0077b6'>\"Sim, ela deixou seus amigos a ajudarem a gerenciar o trabalho.\"</span>" },
                        { term: "I enjoy walking through the park", sent: "\"I enjoy walking through the park near my house.\"", trans: "<span style='color:#0077b6'>\"Eu gosto de caminhar pelo parque perto de casa.\"</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (Tabbed Version - Exactly 48 Items)
            drillGroups:[
                {
                    title: "Verbs (Health)",
                    drills:[
                        { type: "mcq", q: "To make something better than it was before is to _______.", options:[{t: "relax", c: false}, {t: "improve", c: true}, {t: "manage", c: false}] },
                        { type: "mcq", q: "You should _______ at least three times a week.", options:[{t: "exercise", c: true}, {t: "feel", c: false}, {t: "manage", c: false}] },
                        { type: "mcq", q: "Take a deep breath to _______ your mind.", options:[{t: "improve", c: false}, {t: "relax", c: true}, {t: "exercise", c: false}] },
                        { type: "mcq", q: "It is hard to _______ stress during exams.", options:[{t: "manage", c: true}, {t: "feel", c: false}, {t: "improve", c: false}] },
                        { type: "mcq", q: "I _______ very calm when I am in nature.", options:[{t: "manage", c: false}, {t: "relax", c: false}, {t: "feel", c: true}] }
                    ]
                },
                {
                    title: "Wellness & Mind",
                    drills:[
                        { type: "mcq", q: "A good _______ like reading can help reduce stress.", options:[{t: "habit", c: true}, {t: "pet", c: false}, {t: "body", c: false}] },
                        { type: "mcq", q: "He feels _______ because he has too many exams this week.", options:[{t: "calm", c: false}, {t: "anxious", c: true}, {t: "healthy", c: false}] },
                        { type: "mcq", q: "One major _______ of altruism is feeling happier.", options:[{t: "tragedy", c: false}, {t: "benefit", c: true}, {t: "step", c: false}] },
                        { type: "mcq", q: "You should exercise daily to stay _______.", options:[{t: "active", c: true}, {t: "depressed", c: false}, {t: "anxious", c: false}] },
                        { type: "mcq", q: "Good _______ is our greatest wealth.", options:[{t: "health", c: true}, {t: "stress", c: false}, {t: "depression", c: false}] },
                        { type: "mcq", q: "Emotional _______ is just as important as physical health.", options:[{t: "stress", c: false}, {t: "well-being", c: true}, {t: "altruism", c: false}] },
                        { type: "mcq", q: "We must talk openly about _______ health.", options:[{t: "mental", c: true}, {t: "active", c: false}, {t: "calm", c: false}] },
                        { type: "mcq", q: "High _______ can affect your body negatively.", options:[{t: "benefit", c: false}, {t: "stress", c: true}, {t: "habit", c: false}] },
                        { type: "mcq", q: "_______ is a serious condition that needs treatment.", options:[{t: "Depression", c: true}, {t: "Health", c: false}, {t: "Altruism", c: false}] },
                        { type: "mcq", q: "_______ can make you a happier person.", options:[{t: "Stress", c: false}, {t: "Altruism", c: true}, {t: "Depression", c: false}] },
                        { type: "mcq", q: "Choose _______ snacks like fruits.", options:[{t: "healthy", c: true}, {t: "anxious", c: false}, {t: "active", c: false}] },
                        { type: "mcq", q: "Drinking water is the first _______ to hydration.", options:[{t: "body", c: false}, {t: "step", c: true}, {t: "pet", c: false}] },
                        { type: "mcq", q: "My _______ cat helps me relax.", options:[{t: "habit", c: false}, {t: "pet", c: true}, {t: "body", c: false}] },
                        { type: "mcq", q: "Listen to your _______ when you are tired.", options:[{t: "body", c: true}, {t: "pet", c: false}, {t: "step", c: false}] }
                    ]
                },
                {
                    title: "Conditions",
                    drills:[
                        { type: "mcq", q: "I will join the gym _______ I have enough money.", options:[{t: "unless", c: false}, {t: "provided that", c: true}, {t: "whether", c: false}] },
                        { type: "mcq", q: "You won't get better _______ you change your diet.", options:[{t: "if", c: false}, {t: "unless", c: true}, {t: "in case", c: false}] },
                        { type: "mcq", q: "Take some water _______ you get thirsty during the hike.", options:[{t: "in case", c: true}, {t: "whether", c: false}, {t: "unless", c: false}] },
                        { type: "mcq", q: "I will go running _______ it is hot or cold.", options:[{t: "if", c: false}, {t: "whether", c: true}, {t: "as long as", c: false}] },
                        { type: "mcq", q: "You can borrow my bike _______ you are careful.", options:[{t: "as long as", c: true}, {t: "in case", c: false}, {t: "whether", c: false}] },
                        { type: "mcq", q: "_______ you study, you will pass.", options:[{t: "Unless", c: false}, {t: "If", c: true}, {t: "In case", c: false}] }
                    ]
                },
                {
                    title: "Movement",
                    drills:[
                        { type: "mcq", q: "He jumped _______ the pool to cool down.", options:[{t: "out of", c: false}, {t: "into", c: true}, {t: "past", c: false}] },
                        { type: "mcq", q: "The cat jumped _______ the sofa to the floor.", options:[{t: "onto", c: false}, {t: "off", c: true}, {t: "through", c: false}] },
                        { type: "mcq", q: "We hiked _______ the forest to see the waterfall.", options:[{t: "across", c: false}, {t: "around", c: false}, {t: "through", c: true}] },
                        { type: "mcq", q: "Go _______ the library and turn right at the corner.", options:[{t: "past", c: true}, {t: "towards", c: false}, {t: "under", c: false}] },
                        { type: "mcq", q: "The dog ran _______ the table to hide.", options:[{t: "over", c: false}, {t: "under", c: true}, {t: "along", c: false}] },
                        { type: "mcq", q: "I walked to school _______ my house.", options:[{t: "from", c: true}, {t: "into", c: false}, {t: "onto", c: false}] },
                        { type: "mcq", q: "I walked _______ school from my house.", options:[{t: "out of", c: false}, {t: "to", c: true}, {t: "past", c: false}] },
                        { type: "mcq", q: "He climbed _______ the pool.", options:[{t: "out of", c: true}, {t: "into", c: false}, {t: "under", c: false}] },
                        { type: "mcq", q: "The cat jumped _______ the table.", options:[{t: "off", c: false}, {t: "onto", c: true}, {t: "past", c: false}] },
                        { type: "mcq", q: "We ran _______ the stairs.", options:[{t: "up", c: true}, {t: "down", c: false}, {t: "along", c: false}] },
                        { type: "mcq", q: "We ran _______ the hill.", options:[{t: "up", c: false}, {t: "down", c: true}, {t: "across", c: false}] },
                        { type: "mcq", q: "We walked _______ the river.", options:[{t: "along", c: true}, {t: "through", c: false}, {t: "past", c: false}] },
                        { type: "mcq", q: "Walk _______ the street carefully.", options:[{t: "across", c: true}, {t: "through", c: false}, {t: "into", c: false}] },
                        { type: "mcq", q: "He is walking _______ the center.", options:[{t: "towards", c: true}, {t: "past", c: false}, {t: "out of", c: false}] },
                        { type: "mcq", q: "The bird flew _______ the fence.", options:[{t: "over", c: true}, {t: "under", c: false}, {t: "through", c: false}] },
                        { type: "mcq", q: "We ran _______ the park three times.", options:[{t: "around", c: true}, {t: "across", c: false}, {t: "past", c: false}] }
                    ]
                },
                {
                    title: "Expressions",
                    drills:[
                        { type: "mcq", q: "'_______' means your mind and body are both healthy.", options:[{t: "Steps for better health", c: false}, {t: "Feeling good inside and out", c: true}] },
                        { type: "mcq", q: "Albert _______ last month to see if he was healthy.", options:[{t: "let her friends help", c: false}, {t: "had his stress levels checked", c: true}] },
                        { type: "mcq", q: "Yes, _______ on this topic.", options:[{t: "a lot of research has been done", c: true}, {t: "I enjoy walking through the park", c: false}] },
                        { type: "mcq", q: "What are the best _______?", options:[{t: "steps for better health", c: true}, {t: "feeling good inside and out", c: false}] },
                        { type: "mcq", q: "I will go for a walk _______.", options:[{t: "unless it rains", c: true}, {t: "let her friends help her", c: false}] },
                        { type: "mcq", q: "She _______ manage the work.", options:[{t: "let her friends help her", c: true}, {t: "enjoy walking through the park", c: false}] },
                        { type: "mcq", q: "I _______ near my house to clear my head.", options:[{t: "enjoy walking through the park", c: true}, {t: "had my stress levels checked", c: false}] }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 3: FOLLOW THE PATTERN (Grammar)
        // ======================================================
        {
            title: "Follow the Pattern",
            subPages:[
                { id: "step3a", label: "3A: Patterns" },
                { id: "step3b", label: "3B: Examples" },
                { id: "step3c", label: "3C: Practice" }
            ],

            // 3A: Explanations (Tabbed)
            patterns:[
                {
                    title: "Passive Voice",
                    audio: "TTS: We use the passive voice to focus on the action or the result, not on who performed it. Present Simple: am, is, or are plus past participle. Past Simple: was or were plus past participle. Future Simple: will be plus past participle. Present Continuous: am, is, or are plus being plus past participle. Past Continuous: was or were plus being plus past participle. Present Perfect: have or has been plus past participle.",
                    explanation: "We use the passive voice to focus on the action or the result, not on who performed it. The structure is always the verb <b>'to be' + Past Participle</b>.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos a voz passiva quando queremos focar na ação ou no resultado, não em quem realizou a ação. A estrutura é sempre o verbo <b>'to be' + Particípio Passado</b>.)</span>",
                    samples:[
                        { en: "<b>Present Simple:</b> Healthy foods <b>are sold</b> here.", pt: "<span style='color:#0077b6'>(Comidas saudáveis são vendidas aqui.)</span>" },
                        { en: "<b>Past Simple:</b> The plan <b>was created</b> by me.", pt: "<span style='color:#0077b6'>(O plano foi criado por mim.)</span>" },
                        { en: "<b>Future Simple:</b> Results <b>will be shared</b> soon.", pt: "<span style='color:#0077b6'>(Resultados serão compartilhados em breve.)</span>" },
                        { en: "<b>Present Continuous:</b> My body <b>is being evaluated</b>.", pt: "<span style='color:#0077b6'>(Meu corpo está sendo avaliado.)</span>" },
                        { en: "<b>Past Continuous:</b> The diet <b>was being discussed</b>.", pt: "<span style='color:#0077b6'>(A dieta estava sendo discutida.)</span>" },
                        { en: "<b>Present Perfect:</b> Research <b>has been done</b>.", pt: "<span style='color:#0077b6'>(Pesquisas foram feitas.)</span>" }
                    ]
                },
                {
                    title: "Active Causative Form",
                    audio: "TTS: The causative form shows that one person causes another to do something. Have means responsibility or request. Get means persuasion. Make means strong force. Let means permission. Note that 'get' uses 'to plus infinitive', while the others use the base verb.",
                    explanation: "The causative form shows that one person causes another to do something. <b>HAVE</b> (responsibility/request), <b>MAKE</b> (force/obligation), and <b>LET</b> (permission) use the <i>base verb</i>. <b>GET</b> (persuasion) uses <i>to + infinitive</i>.<br><br><span style='color:#0077b6; font-style:italic;'>(A forma causativa mostra que uma pessoa faz com que outra realize algo. <b>HAVE</b> (pedido), <b>MAKE</b> (força), e <b>LET</b> (permissão) usam o <i>verbo base</i>. <b>GET</b> (persuasão) usa <i>to + infinitivo</i>.)</span>",
                    samples:[
                        { en: "<b>HAVE:</b> I <b>had</b> the doctor <b>check</b> my eyes.", pt: "<span style='color:#0077b6'>(Pedi para o médico checar meus olhos.)</span>" },
                        { en: "<b>GET:</b> I <b>got</b> my friend <b>to join</b> the gym.", pt: "<span style='color:#0077b6'>(Convenci meu amigo a entrar na academia.)</span>" },
                        { en: "<b>MAKE:</b> She <b>made</b> her brother <b>eat</b> vegetables.", pt: "<span style='color:#0077b6'>(Ela obrigou o irmão dela a comer vegetais.)</span>" },
                        { en: "<b>LET:</b> My dad <b>lets</b> me <b>use</b> his pet.", pt: "<span style='color:#0077b6'>(Meu pai me deixa brincar com o animal de estimação dele.)</span>" }
                    ]
                },
                {
                    title: "Passive Causative Form",
                    audio: "TTS: The passive causative focuses on the service or result. Use have or get plus object plus Past Participle.",
                    explanation: "The passive causative focuses on the service or action finished, without mentioning who did it. Structure: <b>HAVE / GET + object + Past Participle</b>.<br><br><span style='color:#0077b6; font-style:italic;'>(A causativa passiva foca no serviço ou na ação concluída, sem mencionar quem a fez. Estrutura: <b>HAVE / GET + objeto + Particípio Passado</b>.)</span>",
                    samples:[
                        { en: "I <b>had</b> my blood pressure <b>checked</b>.", pt: "<span style='color:#0077b6'>(Eu tive minha pressão arterial checada.)</span>" },
                        { en: "She <b>got</b> her diet <b>reviewed</b>.", pt: "<span style='color:#0077b6'>(Ela teve sua dieta revisada.)</span>" }
                    ]
                },
                {
                    title: "Gerund vs. Infinitive",
                    audio: "TTS: Verbs follow patterns. Use Gerunds (verb plus -ing) after verbs like enjoy, avoid, and finish, or as the subject of a sentence. Use Infinitives (to plus verb) after verbs like want, need, and hope, or to express purpose.",
                    explanation: "Verbs follow patterns. Some require <b>Gerunds (-ing)</b> and others require <b>Infinitives (to + verb)</b>. Gerunds are also used as subjects, while Infinitives can explain 'why' (purpose).<br><br><span style='color:#0077b6; font-style:italic;'>(Verbos seguem padrões. Alguns exigem <b>Gerúndios (-ing)</b> e outros exigem <b>Infinitivos (to + verbo)</b>. Gerúndios também são usados como sujeito, enquanto Infinitivos explicam o 'porquê' (propósito).)</span>",
                    samples:[
                        { en: "<b>Gerund Only:</b> I <b>enjoy exercising</b>. <b>Avoid eating</b> sugar.", pt: "<span style='color:#0077b6'>(Curto me exercitar. Evite comer açúcar.)</span>" },
                        { en: "<b>Infinitive Only:</b> I <b>want to improve</b>. She <b>needs to relax</b>.", pt: "<span style='color:#0077b6'>(Quero melhorar. Ela precisa relaxar.)</span>" },
                        { en: "<b>Gerund as Subject:</b> <b>Managing</b> stress is vital.", pt: "<span style='color:#0077b6'>(Gerenciar o estresse é vital.)</span>" },
                        { en: "<b>Infinitive for Purpose:</b> I run <b>to feel</b> good.", pt: "<span style='color:#0077b6'>(Corro para me sentir bem.)</span>" }
                    ]
                },
                {
                    title: "Linking Words of Condition",
                    audio: "TTS: These words connect a condition with a result. If means a standard condition. Whether is used for alternatives. In case is doing something to prepare for a possibility. Unless means if not. As long as or provided that show strong conditions.",
                    explanation: "These words connect a condition with a result to show requirements.<br><br><span style='color:#0077b6; font-style:italic;'>(Estas palavras conectam uma condição a um resultado para mostrar requisitos.)</span>",
                    samples:[
                        { en: "<b>If:</b> <b>If</b> you sleep well, you have energy.", pt: "<span style='color:#0077b6'>(Se você dorme bem, você tem energia.)</span>" },
                        { en: "<b>Whether:</b> I don't know <b>whether</b> to run or walk.", pt: "<span style='color:#0077b6'>(Não sei se corro ou caminho.)</span>" },
                        { en: "<b>In case:</b> Take water <b>in case</b> you get thirsty.", pt: "<span style='color:#0077b6'>(Leve água caso você fique com sede.)</span>" },
                        { en: "<b>Unless:</b> You won't improve <b>unless</b> you exercise.", pt: "<span style='color:#0077b6'>(Você não vai melhorar a menos que se exercite.)</span>" },
                        { en: "<b>As long as:</b> You can stay healthy <b>as long as</b> you eat well.", pt: "<span style='color:#0077b6'>(Você pode ficar saudável contanto que coma bem.)</span>" }
                    ]
                },
                {
                    title: "Prepositions of Movement",
                    audio: "TTS: These words describe the direction of an action. To and From. Into and Out of. Onto and Off. Up and Down. Along. Through. Across. Towards. Over and Under. Around. Past.",
                    explanation: "These prepositions describe the direction or path of an action.<br><br><span style='color:#0077b6; font-style:italic;'>(Estas preposições descrevem a direção ou o caminho de uma ação.)</span>",
                    samples:[
                        { en: "<b>Into / Out of:</b> He jumped <b>into</b> the water and climbed <b>out of</b> the pool.", pt: "<span style='color:#0077b6'>(Entrando e saindo de um espaço.)</span>" },
                        { en: "<b>Through:</b> Hike <b>through</b> the forest.", pt: "<span style='color:#0077b6'>(Através de um espaço 3D.)</span>" },
                        { en: "<b>Across:</b> Walk <b>across</b> the street.", pt: "<span style='color:#0077b6'>(Cruzando de um lado para o outro.)</span>" },
                        { en: "<b>Towards:</b> Run <b>towards</b> the finish line.", pt: "<span style='color:#0077b6'>(Na direção de algo.)</span>" },
                        { en: "<b>Past:</b> Walk <b>past</b> the hospital.", pt: "<span style='color:#0077b6'>(Passando por um ponto específico.)</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups:[
                {
                    title: "Dialogue 1: Organizing Health (Causative & Passive)",
                    audio: "audio/em1-4-11/step3_dialogue1.mp3",
                    lines:[
                        { speaker: "Albert", text: "Celine, I [had my body evaluated](tooltip:causative-form) yesterday.", pt: "<span style='color:#0077b6'>(Celine, tive meu corpo avaliado ontem.)</span>" },
                        { speaker: "Celine", text: "That’s smart! New studies [are being done](tooltip:passive-voice) every day about [well-being](tooltip:well-being). You should [let the experts help](tooltip:causative-form) you.", pt: "<span style='color:#0077b6'>(Isso é inteligente! Novos estudos estão sendo feitos todos os dias sobre o bem-estar. Você deveria deixar os especialistas ajudarem você.)</span>" }
                    ]
                },
                {
                    title: "Dialogue 2: Choices and Purpose (Gerund/Infinitive & Condition)",
                    audio: "audio/em1-4-11/step3_dialogue2.mp3",
                    lines:[
                        { speaker: "Albert", text: "I [want to start](tooltip:infinitives) swimming, but I don't know [whether](tooltip:whether) I have time.", pt: "<span style='color:#0077b6'>(Quero começar a nadar, mas não sei se tenho tempo.)</span>" },
                        { speaker: "Celine", text: "I [suggest practicing](tooltip:gerunds) in the morning. You won't feel [active](tooltip:active) [unless](tooltip:unless) you try!", pt: "<span style='color:#0077b6'>(Sugiro praticar de manhã. Você não se sentirá ativo a menos que tente!)</span>" }
                    ]
                },
                {
                    title: "Dialogue 3: A Morning Run (Movement)",
                    audio: "audio/em1-4-11/step3_dialogue3.mp3",
                    lines:[
                        { speaker: "Albert", text: "I ran [across](tooltip:across) the bridge and [past](tooltip:past) the park today.", pt: "<span style='color:#0077b6'>(Eu corri pela ponte e passei pelo parque hoje.)</span>" },
                        { speaker: "Celine", text: "Wow! I usually walk [along](tooltip:along) the river [to relax](tooltip:infinitives) my mind.", pt: "<span style='color:#0077b6'>(Uau! Eu costumo caminhar ao longo do rio para relaxar minha mente.)</span>" }
                    ]
                }
            ],

            // 3C: Grammar Practice (Tabbed Version - Exactly 40 MCQs)
            grammarDrillGroups: [
                {
                    title: "Passive Voice",
                    drills:[
                        { type: "mcq", q: "Healthy foods _______ here every day.", options:[ {t: "are sold", c: true}, {t: "is sold", c: false}, {t: "sell", c: false} ] },
                        { type: "mcq", q: "The exercise plan _______ by me last week.", options:[ {t: "created", c: false}, {t: "is created", c: false}, {t: "was created", c: true} ] },
                        { type: "mcq", q: "New results _______ soon.", options:[ {t: "will share", c: false}, {t: "will be shared", c: true}, {t: "are shared", c: false} ] },
                        { type: "mcq", q: "My body _______ right now by the doctor.", options:[ {t: "is being evaluated", c: true}, {t: "is evaluated", c: false}, {t: "was evaluated", c: false} ] },
                        { type: "mcq", q: "The diet _______ when I arrived.", options:[ {t: "was discussing", c: false}, {t: "was being discussed", c: true}, {t: "is discussed", c: false} ] },
                        { type: "mcq", q: "A lot of research _______ on this topic recently.", options:[ {t: "has been done", c: true}, {t: "have done", c: false}, {t: "was do", c: false} ] },
                        { type: "mcq", q: "The gym _______ in 2010.", options:[ {t: "was built", c: true}, {t: "built", c: false}, {t: "has built", c: false} ] },
                        { type: "mcq", q: "The new rules _______ tomorrow.", options:[ {t: "are applying", c: false}, {t: "will apply", c: false}, {t: "will be applied", c: true} ] }
                    ]
                },
                {
                    title: "Causative Form",
                    drills:[
                        { type: "mcq", q: "My teacher _______ me finish my project today. (forced)", options:[ {t: "made", c: true}, {t: "got", c: false}, {t: "let", c: false} ] },
                        { type: "mcq", q: "I _______ my friend to join the yoga class. (persuaded)", options:[ {t: "had", c: false}, {t: "made", c: false}, {t: "got", c: true} ] },
                        { type: "mcq", q: "My parents _______ me get a new pet. (allowed)", options:[ {t: "let", c: true}, {t: "got", c: false}, {t: "made", c: false} ] },
                        { type: "mcq", q: "I _______ the doctor check my eyes.", options:[ {t: "let", c: false}, {t: "had", c: true}, {t: "got", c: false} ] },
                        { type: "mcq", q: "I need to have my stress levels _______.", options:[ {t: "check", c: false}, {t: "checking", c: false}, {t: "checked", c: true} ] },
                        { type: "mcq", q: "She got her diet _______ by a professional.", options:[ {t: "reviewing", c: false}, {t: "reviewed", c: true}, {t: "review", c: false} ] },
                        { type: "mcq", q: "I had my car _______ yesterday.", options:[ {t: "fix", c: false}, {t: "fixing", c: false}, {t: "fixed", c: true} ] },
                        { type: "mcq", q: "He _______ his sister to help him with the homework.", options:[ {t: "made", c: false}, {t: "got", c: true}, {t: "had", c: false} ] }
                    ]
                },
                {
                    title: "Gerunds & Infinitives",
                    drills:[
                        { type: "mcq", q: "_______ your time is a great habit.", options:[ {t: "Managing", c: true}, {t: "Manage", c: false}, {t: "To managing", c: false} ] },
                        { type: "mcq", q: "She avoided _______ anxious by meditating.", options:[ {t: "to feel", c: false}, {t: "feeling", c: true}, {t: "feel", c: false} ] },
                        { type: "mcq", q: "We decided _______ together to improve our health.", options:[ {t: "exercising", c: false}, {t: "to exercise", c: true}, {t: "exercise", c: false} ] },
                        { type: "mcq", q: "Do you mind _______ for a few minutes?", options:[ {t: "relaxing", c: true}, {t: "to relax", c: false}, {t: "relax", c: false} ] },
                        { type: "mcq", q: "I run _______ good.", options:[ {t: "feeling", c: false}, {t: "feel", c: false}, {t: "to feel", c: true} ] },
                        { type: "mcq", q: "I enjoy _______ through the park.", options:[ {t: "to walk", c: false}, {t: "walking", c: true}, {t: "walk", c: false} ] },
                        { type: "mcq", q: "She wants _______ early today.", options:[ {t: "leaving", c: false}, {t: "leave", c: false}, {t: "to leave", c: true} ] },
                        { type: "mcq", q: "_______ water is the first step to hydration.", options:[ {t: "To drinking", c: false}, {t: "Drinking", c: true}, {t: "Drink", c: false} ] }
                    ]
                },
                {
                    title: "Conditionals",
                    drills:[
                        { type: "mcq", q: "I will join the gym _______ I have enough money. (only if)", options:[ {t: "unless", c: false}, {t: "provided that", c: true}, {t: "in case", c: false} ] },
                        { type: "mcq", q: "You won't get better _______ you change your diet. (if not)", options:[ {t: "unless", c: true}, {t: "if", c: false}, {t: "whether", c: false} ] },
                        { type: "mcq", q: "Take some water _______ you get thirsty. (preparation)", options:[ {t: "unless", c: false}, {t: "in case", c: true}, {t: "provided that", c: false} ] },
                        { type: "mcq", q: "I will go running _______ it is hot or cold. (alternatives)", options:[ {t: "if", c: false}, {t: "unless", c: false}, {t: "whether", c: true} ] },
                        { type: "mcq", q: "You can borrow my bike _______ you are careful. (condition)", options:[ {t: "as long as", c: true}, {t: "in case", c: false}, {t: "whether", c: false} ] },
                        { type: "mcq", q: "_______ you study, you will pass.", options:[ {t: "If", c: true}, {t: "Unless", c: false}, {t: "In case", c: false} ] },
                        { type: "mcq", q: "I don't know _______ she likes altruism or not.", options:[ {t: "if", c: false}, {t: "whether", c: true}, {t: "unless", c: false} ] },
                        { type: "mcq", q: "I'll take an umbrella _______ it rains later.", options:[ {t: "in case", c: true}, {t: "provided that", c: false}, {t: "as long as", c: false} ] }
                    ]
                },
                {
                    title: "Movement Prepositions",
                    drills:[
                        { type: "mcq", q: "He jumped _______ the pool to cool down.", options:[ {t: "out of", c: false}, {t: "past", c: false}, {t: "into", c: true} ] },
                        { type: "mcq", q: "The cat jumped _______ the sofa to the floor.", options:[ {t: "off", c: true}, {t: "onto", c: false}, {t: "through", c: false} ] },
                        { type: "mcq", q: "We hiked _______ the forest to see the waterfall.", options:[ {t: "across", c: false}, {t: "through", c: true}, {t: "around", c: false} ] },
                        { type: "mcq", q: "Go _______ the library and turn right at the corner.", options:[ {t: "towards", c: false}, {t: "past", c: true}, {t: "under", c: false} ] },
                        { type: "mcq", q: "The dog ran _______ the table to hide.", options:[ {t: "over", c: false}, {t: "along", c: false}, {t: "under", c: true} ] },
                        { type: "mcq", q: "We walked _______ the river.", options:[ {t: "through", c: false}, {t: "along", c: true}, {t: "across", c: false} ] },
                        { type: "mcq", q: "He is walking _______ the meditation center.", options:[ {t: "past", c: false}, {t: "towards", c: true}, {t: "out of", c: false} ] },
                        { type: "mcq", q: "The bird flew _______ the fence.", options:[ {t: "over", c: true}, {t: "under", c: false}, {t: "through", c: false} ] }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 4: SHADOWING (Recording)
        // ======================================================
        {
            title: "Can you say that again?",
            sentences:[
                { 
                    text: "Celine, did you have your health checked?<br><small style='color:#0077b6'>(Celine, você teve sua saúde checada?)</small>", 
                    audio: "TTS: Celine, did you have your health checked?", 
                    arrow: "↗" 
                },
                { 
                    text: "Yes, I had my stress levels evaluated by a doctor.<br><small style='color:#0077b6'>(Sim, eu tive meus níveis de estresse avaliados por um médico.)</small>", 
                    audio: "TTS: Yes, I had my stress levels evaluated by a doctor.", 
                    arrow: "↘" 
                },
                { 
                    text: "Exercising is good for your well-being, isn't it?<br><small style='color:#0077b6'>(Exercitar-se é bom para o seu bem-estar, não é?)</small>", 
                    audio: "TTS: Exercising is good for your well-being, isn't it?", 
                    arrow: "↗" 
                },
                { 
                    text: "It is! I enjoy walking along the beach.<br><small style='color:#0077b6'>(É sim! Eu gosto de caminhar ao longo da praia.)</small>", 
                    audio: "TTS: It is! I enjoy walking along the beach.", 
                    arrow: "↘" 
                },
                { 
                    text: "I’ll go for a walk unless it rains.<br><small style='color:#0077b6'>(Eu vou caminhar, a menos que chova.)</small>", 
                    audio: "TTS: I’ll go for a walk unless it rains.", 
                    arrow: "↘" 
                },
                { 
                    text: "I’ll join you provided that you are calm.<br><small style='color:#0077b6'>(Eu me juntarei a você, contanto que você esteja calmo.)</small>", 
                    audio: "TTS: I’ll join you provided that you are calm.", 
                    arrow: "↘" 
                }
            ]
        },

        // ======================================================
        // STEP 5: LISTENING
        // ======================================================
        {
            title: "Are you following me?",
            drills:[
                // Drill 1: Typing
                {
                    type: "typing",
                    instruction: "Listen to the story about Celine's new routine and type the missing words.<br><small style='color:#0077b6'>(Ouça a história sobre a nova rotina da Celine e digite as palavras que faltam.)</small>",
                    audio: "TTS: Celine decided to adopt a pet last month to help with her mental health. Her dog, Rex, is being trained to help her relax when she feels anxious. Every morning, she walks Rex through the park. She suggests that everyone should find a habit that makes them feel healthy and happy.",
                    text: "Celine decided to [adopt] a [pet] last month to help with her[mental health]. Her dog, Rex, [is being] trained to help her [relax] when she feels [anxious]. Every morning, she walks Rex [through] the park. She [suggests] that everyone should find a[habit] that makes them [feel] [healthy] and happy."
                },
                // Drill 2: Dropdown (With randomized asterisk logic)
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue between Albert and Celine and choose the correct options.<br><small style='color:#0077b6'>(Ouça o diálogo entre Albert e Celine e escolha as opções corretas.)</small>",
                    audio: "audio/em1-4-11/step5_drill2.mp3",
                    questions:[
                        { q: "Albert: I need to [have | let | get*] my brother [exercise | exercising | to exercise*] with me.", a: "" },
                        { q: "Celine: That’s a good idea! You will feel [stressed | active* | anxious] as long as you keep a routine.", a: "" },
                        { q: "Albert: I also had my diet [review | reviewed* | reviewing] by a specialist.", a: "" },
                        { q: "Celine: Great! A new gym [builds | is built | is being built*] [past | around | across*] the street from my house.", a: "" }
                    ]
                },
                // Drill 3: Audio Choice
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the logical response.<br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta lógica.)</small>",
                    audio: "TTS: Where are they going for their hike?",
                    options:[
                        { t: "They are walking past the hospital.", c: false },
                        { t: "They are going through the forest path.", c: true },
                        { t: "I had my health checked yesterday.", c: false },
                        { t: "Yes, altruism is important.", c: false }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 6: READING
        // ======================================================
        {
            title: "Get the story",
            texts:[
                {
                    title: "6a: Narration - The Power of Altruism",
                    audio: "TTS: Many studies have been done on how altruism affects our mental health. It is proven that helping others reduces stress and improves well-being. When we are active in our community, we feel more connected. For example, a local cleanup was organized last year. Volunteers walked along the river and collected waste. This simple step is known to improve a person's mood. Exercising your kindness is a healthy habit for the body and the mind. || audio/em1-4-11/p6_text1.mp3",
                    body: "Many studies [have been done](tooltip:passive-voice) on how [altruism](tooltip:altruism) affects our [mental health](tooltip:mental-health). It is proven that helping others reduces [stress](tooltip:stress) and improves [well-being](tooltip:well-being). When we are [active](tooltip:active) in our community, we feel more connected. For example, a local cleanup was organized last year. Volunteers walked [along](tooltip:along) the river and collected waste. This simple [step](tooltip:step) is known to [improve](tooltip:improve) a person's mood. [Exercising](tooltip:exercise) your kindness is a [healthy](tooltip:healthy) [habit](tooltip:habit) for the [body](tooltip:body) and the mind.",
                    questions:[
                        { 
                            q: "What has been proven by many studies?", 
                            options:[ 
                                {t: "That stress is good for you.", c: false}, 
                                {t: "That helping others reduces stress.", c: true}, 
                                {t: "That cleanups are very expensive.", c: false} 
                            ] 
                        },
                        { 
                            q: "What happened during the cleanup last year?", 
                            options:[ 
                                {t: "People ran around a lake.", c: false}, 
                                {t: "Volunteers walked along a river.", c: true}, 
                                {t: "A new gym was built.", c: false} 
                            ] 
                        },
                        { 
                            q: "What is the main benefit mentioned about altruism?", 
                            options:[ 
                                {t: "It makes the body tired.", c: false}, 
                                {t: "It improves well-being and mood.", c: true}, 
                                {t: "It creates more waste.", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "6b: Dialogue - Planning a Workout",
                    audio: "audio/em1-4-11/p6_text2.mp3",
                    body: "<b>Albert:</b> I want to [improve](tooltip:improve) my lifestyle. I wonder [if](tooltip:if) you can help me, Celine.<br><b>Celine:</b> Sure! I [got my friend to join](tooltip:causative-form) the [gym](tooltip:gym) last week. We can go together.<br><b>Albert:</b> I’ll go [provided that](tooltip:provided-that) it’s not too difficult. I avoid [feeling](tooltip:feel) exhausted.<br><b>Celine:</b> Don't worry. We will walk [towards](tooltip:towards) the hill and then run down to the park.<br><b>Albert:</b> Okay. I need to get my water before we start.<br><b>Celine:</b> That’s a sensible [step](tooltip:step). I [had my health checked](tooltip:causative-form) by a doctor yesterday. He told me to drink more water.",
                    questions:[
                        { 
                            q: "Who did Celine get to join the gym last week?", 
                            options:[ 
                                {t: "Her mom.", c: false}, 
                                {t: "Her friend.", c: true}, 
                                {t: "Albert.", c: false} 
                            ] 
                        },
                        { 
                            q: "What is Albert’s condition for going to the gym?", 
                            options:[ 
                                {t: "As long as he finishes his homework.", c: false}, 
                                {t: "Provided that it is not too difficult.", c: true}, 
                                {t: "Unless it is at night.", c: false} 
                            ] 
                        },
                        { 
                            q: "What did Celine do yesterday?", 
                            options:[ 
                                {t: "She went hiking.", c: false}, 
                                {t: "She had her health checked.", c: true}, 
                                {t: "She ran over a bridge.", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "6c: Description - Julia's Change",
                    audio: "TTS: Julia was feeling very anxious because of stress. She decided to manage her routine better. A new meditation center was built in her area, and she goes there to relax. She walks past the bakery every morning and goes into the quiet room. She also had her diet reviewed by a professional. Now, she avoids eating junk food. Unless she is very busy, she always finds time for her well-being. || audio/em1-4-11/p6_text3.mp3",
                    body: "Julia was [feeling](tooltip:feel) very [anxious](tooltip:anxious) because of [stress](tooltip:stress). She decided to [manage](tooltip:manage) her routine better. A new [meditation center](tooltip:meditation-center) [was built](tooltip:passive-voice) in her area, and she goes there to [relax](tooltip:relax). She walks [past](tooltip:past) the bakery every morning and goes [into](tooltip:into) the quiet room. She also [had her diet reviewed](tooltip:causative-form) by a professional. Now, she avoids eating junk food. [Unless](tooltip:unless) she is very busy, she always finds time for her [well-being](tooltip:well-being).",
                    questions:[
                        { 
                            q: "Why was Julia feeling anxious?", 
                            options:[ 
                                {t: "Because of her pet.", c: false}, 
                                {t: "Because of stress.", c: true}, 
                                {t: "Because she was active.", c: false} 
                            ] 
                        },
                        { 
                            q: "Where does Julia go to relax?", 
                            options:[ 
                                {t: "To a new meditation center.", c: true}, 
                                {t: "To the bakery.", c: false}, 
                                {t: "To the hospital.", c: false} 
                            ] 
                        },
                        { 
                            q: "What is Julia’s current diet habit?", 
                            options:[ 
                                {t: "She enjoys eating unhealthy food.", c: false}, 
                                {t: "She avoids eating junk food.", c: true}, 
                                {t: "She is being evaluated today.", c: false} 
                            ] 
                        }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 7: QUICK DRILLS (Mixed Types - Flat Array, 40 Drills)
        // ======================================================
        {
            title: "Monkey see, Monkey do",
            drills:[
                // 1-5: Matching
                { type: "matching", instruction: "Match the preposition with the correct direction.<br><small style='color:#0077b6'>(Associe a preposição com a direção.)</small>", pairs:[ {left: "Into", right: "Para dentro", val: "1"}, {left: "Towards", right: "Em direção a", val: "2"}, {left: "Through", right: "Através de um espaço", val: "3"}, {left: "Along", right: "Ao longo de", val: "4"} ] },
                { type: "matching", instruction: "Match the linking word with its meaning.<br><small style='color:#0077b6'>(Associe o conectivo com seu significado.)</small>", pairs:[ {left: "Unless", right: "A menos que", val: "1"}, {left: "Provided that", right: "Contanto que", val: "2"}, {left: "In case", right: "No caso de", val: "3"}, {left: "Whether", right: "Se (alternativa)", val: "4"} ] },
                { type: "matching", instruction: "Match the wellness term to its translation.<br><small style='color:#0077b6'>(Associe o termo de bem-estar à sua tradução.)</small>", pairs:[ {left: "Well-being", right: "Bem-estar", val: "1"}, {left: "Health", right: "Saúde", val: "2"}, {left: "Habit", right: "Hábito", val: "3"}, {left: "Altruism", right: "Altruísmo", val: "4"} ] },
                { type: "matching", instruction: "Match the causative verb with its function.<br><small style='color:#0077b6'>(Associe o verbo causativo à sua função.)</small>", pairs:[ {left: "Make", right: "Force/Obligation", val: "1"}, {left: "Let", right: "Permission", val: "2"}, {left: "Get", right: "Persuasion (to + verb)", val: "3"}, {left: "Have", right: "Responsibility", val: "4"} ] },
                { type: "matching", instruction: "Match the verb with its pattern.<br><small style='color:#0077b6'>(Associe o verbo ao seu padrão.)</small>", pairs:[ {left: "Enjoy", right: "Gerund (-ing)", val: "1"}, {left: "Avoid", right: "Gerund (-ing)", val: "2"}, {left: "Want", right: "Infinitive (to + verb)", val: "3"}, {left: "Need", right: "Infinitive (to + verb)", val: "4"} ] },
                
                // 6-15: Dropdowns (with randomized * positions)
                { type: "dropdown", instruction: "Select the correct preposition.<br>He jumped _______ the pool.", questions: [{ q: "He jumped [past | into | out of] the pool.", a: "into" }] },
                { type: "dropdown", instruction: "Select the correct preposition.<br>We walked _______ the river.", questions: [{ q: "We walked[through | across | along] the river.", a: "along" }] },
                { type: "dropdown", instruction: "Select the correct linking word.<br>Take an umbrella _______ it rains.", questions: [{ q: "Take an umbrella[unless | in case | whether] it rains.", a: "in case" }] },
                { type: "dropdown", instruction: "Select the correct linking word.<br>You won't get better _______ you change your diet.", questions: [{ q: "You won't get better[unless | provided that | in case] you change your diet.", a: "unless" }] },
                { type: "dropdown", instruction: "Select the correct passive form.<br>Healthy foods _______ here.", questions: [{ q: "Healthy foods[are sold | is sold | sells] here.", a: "are sold" }] },
                { type: "dropdown", instruction: "Select the correct passive form.<br>The new gym _______ right now.", questions: [{ q: "The new gym[was built | is being built | builds] right now.", a: "is being built" }] },
                { type: "dropdown", instruction: "Select the correct causative form.<br>I _______ the doctor check my eyes.", questions: [{ q: "I [made | got | had] the doctor check my eyes.", a: "had" }] },
                { type: "dropdown", instruction: "Select the correct causative form.<br>She _______ her brother to join the gym.", questions: [{ q: "She[got | let | had] her brother to join the gym.", a: "got" }] },
                { type: "dropdown", instruction: "Select the correct gerund/infinitive.<br>I enjoy _______ in the morning.", questions:[{ q: "I enjoy [exercising | to exercise | exercise] in the morning.", a: "exercising" }] },
                { type: "dropdown", instruction: "Select the correct gerund/infinitive.<br>I want _______ my lifestyle.", questions:[{ q: "I want [improving | to improve | improve] my lifestyle.", a: "to improve" }] },

                // 16-22: Word Order
                { type: "word-order", instruction: "Unscramble the passive sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "built / gym / is / being / new / A / .", correct: "A new gym is being built ." },
                { type: "word-order", instruction: "Unscramble the passive sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "written / article / was / last / The / year / .", correct: "The article was written last year ." },
                { type: "word-order", instruction: "Unscramble the causative sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "had / blood / checked / I / my / pressure / .", correct: "I had my blood pressure checked ." },
                { type: "word-order", instruction: "Unscramble the causative sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "got / diet / reviewed / She / her / .", correct: "She got her diet reviewed ." },
                { type: "word-order", instruction: "Unscramble the gerund/infinitive sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "managing / is / vital / stress / .", correct: "managing stress is vital ." },
                { type: "word-order", instruction: "Unscramble the gerund/infinitive sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "decided / exercise / We / to / together / .", correct: "We decided to exercise together ." },
                { type: "word-order", instruction: "Unscramble the preposition sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "ran / park / around / We / the / .", correct: "We ran around the park ." },

                // 23-30: Clickable Error
                { type: "clickable-error", instruction: "Find the mistake in the passive sentence.<br><small style='color:#0077b6'>(Encontre o erro.)</small>", sentence: "The book [was](error:was) [wrote](error:written) by the doctor." },
                { type: "clickable-error", instruction: "Find the mistake in the passive sentence.<br><small style='color:#0077b6'>(Encontre o erro.)</small>", sentence: "My stress levels [is](error:are) being evaluated." },
                { type: "clickable-error", instruction: "Find the mistake in the active causative sentence.<br><small style='color:#0077b6'>(Encontre o erro.)</small>", sentence: "I got my friend [join](error:to_join) the gym." },
                { type: "clickable-error", instruction: "Find the mistake in the active causative sentence.<br><small style='color:#0077b6'>(Encontre o erro.)</small>", sentence: "She made her brother [to](error:) eat vegetables." },
                { type: "clickable-error", instruction: "Find the mistake in the passive causative sentence.<br><small style='color:#0077b6'>(Encontre o erro.)</small>", sentence: "I had my car [fix](error:fixed) yesterday." },
                { type: "clickable-error", instruction: "Find the mistake with the gerund/infinitive.<br><small style='color:#0077b6'>(Encontre o erro.)</small>", sentence: "I enjoy [to](error:) [walk](error:walking) through the park." },
                { type: "clickable-error", instruction: "Find the mistake with the gerund/infinitive.<br><small style='color:#0077b6'>(Encontre o erro.)</small>", sentence: "She wants [improving](error:to_improve) her health." },
                { type: "clickable-error", instruction: "Find the mistake with the conditional.<br><small style='color:#0077b6'>(Encontre o erro.)</small>", sentence: "I will go [unless](error:if) it rains, I love the rain!" },

                // 31-40: MCQs
                { type: "mcq", instruction: "Choose the correct option.<br>The dog ran _______ the table to hide.", q: "", options:[{t: "over", c: false}, {t: "under", c: true}, {t: "along", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>Go _______ the library and turn right.", q: "", options:[{t: "past", c: true}, {t: "towards", c: false}, {t: "under", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>I will go running _______ it is hot or cold.", q: "", options:[{t: "if", c: false}, {t: "unless", c: false}, {t: "whether", c: true}] },
                { type: "mcq", instruction: "Choose the correct option.<br>You can borrow my bike _______ you are careful.", q: "", options:[{t: "as long as", c: true}, {t: "in case", c: false}, {t: "whether", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>The article _______ last year.", q: "", options:[{t: "was written", c: true}, {t: "is written", c: false}, {t: "wrote", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>Research _______ on this topic recently.", q: "", options:[{t: "has been done", c: true}, {t: "have done", c: false}, {t: "was do", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>My parents _______ me get a new pet.", q: "", options:[{t: "let", c: true}, {t: "had to", c: false}, {t: "got", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>She got her diet _______ by a professional.", q: "", options:[{t: "reviewing", c: false}, {t: "reviewed", c: true}, {t: "review", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>_______ your time is a great habit.", q: "", options:[{t: "To manage", c: false}, {t: "Managing", c: true}, {t: "Manage", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>She avoided _______ anxious by meditating.", q: "", options:[{t: "to feel", c: false}, {t: "feeling", c: true}, {t: "feel", c: false}] }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn to talk about your health! Write a short paragraph (5-6 sentences) about your healthy habits.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas: Agora é a sua vez de falar sobre sua saúde! Escreva um pequeno parágrafo (5-6 frases) sobre seus hábitos saudáveis.)</span></small>",
            example: "\"I am trying to lead an active life. I enjoy running along the bike path every morning. Last month, I had my health checked by a doctor. I usually walk towards the park to start my workout. I go into the gym to improve my strength. I will stay healthy as long as I keep this habit.\"<br><br><small><span style='color:#0077b6'>(Exemplo: Eu estou tentando levar uma vida ativa. Eu gosto de correr ao longo da ciclovia toda manhã. No mês passado, tive minha saúde checada por um médico...)</span></small>",
            prompts: [
                "Mention an activity you [enjoy doing] (Gerund). <br><small><span style='color:#0077b6'>(Mencione uma atividade que você curte fazer usando Gerúndio.)</span></small>",
                "Mention a service you[had done] (Passive Causative). <br><small><span style='color:#0077b6'>(Mencione um serviço que você mandou fazer usando Causativa Passiva.)</span></small>",
                "Use at least two [Prepositions of Movement] (into, along, etc.). <br><small><span style='color:#0077b6'>(Use pelo menos duas Preposições de Movimento.)</span></small>",
                "Use one [Linking Word of Condition] (unless, provided that, etc.). <br><small><span style='color:#0077b6'>(Use uma Palavra de Ligação de Condição.)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Wrap it up",
            items:[
                // Verbs
                { term: "To exercise", definition: "To perform physical activity for health or fitness.", defTrans: "Exercitar-se", example: "You should exercise at least three times a week.", audioFront: "TTS: To exercise", audioBack: "TTS: You should exercise at least three times a week." },
                { term: "To feel", definition: "To experience a particular emotion or physical sensation.", defTrans: "Sentir-se", example: "I feel very calm when I am in nature.", audioFront: "TTS: To feel", audioBack: "TTS: I feel very calm when I am in nature." },
                { term: "To manage", definition: "To be in charge of or deal with a situation successfully.", defTrans: "Gerenciar / Lidar com", example: "It is hard to manage stress during exams.", audioFront: "TTS: To manage", audioBack: "TTS: It is hard to manage stress during exams." },
                { term: "To relax", definition: "To become less tense, anxious, or stressed.", defTrans: "Relaxar", example: "Take a deep breath to relax your mind.", audioFront: "TTS: To relax", audioBack: "TTS: Take a deep breath to relax your mind." },
                { term: "To improve", definition: "To make or become better than before.", defTrans: "Melhorar", example: "Eating well will improve your energy levels.", audioFront: "TTS: To improve", audioBack: "TTS: Eating well will improve your energy levels." },
                
                // Wellness & Mind
                { term: "Health", definition: "The state of being free from illness or injury.", defTrans: "Saúde", example: "Good health is our greatest wealth.", audioFront: "TTS: Health", audioBack: "TTS: Good health is our greatest wealth." },
                { term: "Well-being", definition: "The state of being comfortable, healthy, or happy.", defTrans: "Bem-estar", example: "Emotional well-being is just as important as physical health.", audioFront: "TTS: Well-being", audioBack: "TTS: Emotional well-being is just as important as physical health." },
                { term: "Mental Health", definition: "A person's condition regarding their psychological and emotional state.", defTrans: "Saúde Mental", example: "We must talk openly about mental health.", audioFront: "TTS: Mental Health", audioBack: "TTS: We must talk openly about mental health." },
                { term: "Stress", definition: "A state of mental or emotional strain or tension.", defTrans: "Estresse", example: "High stress can affect your body.", audioFront: "TTS: Stress", audioBack: "TTS: High stress can affect your body." },
                { term: "Depression", definition: "A mental health condition characterized by persistent low mood.", defTrans: "Depressão", example: "Depression is a serious condition that needs treatment.", audioFront: "TTS: Depression", audioBack: "TTS: Depression is a serious condition that needs treatment." },
                { term: "Altruism", definition: "The practice of selfless concern for the well-being of others.", defTrans: "Altruísmo", example: "Altruism can make you a happier person.", audioFront: "TTS: Altruism", audioBack: "TTS: Altruism can make you a happier person." },
                { term: "Active", definition: "Engaging in physical activity or exercise regularly.", defTrans: "Ativo(a)", example: "He leads a very active lifestyle.", audioFront: "TTS: Active", audioBack: "TTS: He leads a very active lifestyle." },
                { term: "Benefit", definition: "An advantage or profit gained from something.", defTrans: "Benefício", example: "One benefit of pets is reduced anxiety.", audioFront: "TTS: Benefit", audioBack: "TTS: One benefit of pets is reduced anxiety." },
                { term: "Healthy", definition: "In good health; promoting good health.", defTrans: "Saudável", example: "Choose healthy snacks like fruits.", audioFront: "TTS: Healthy", audioBack: "TTS: Choose healthy snacks like fruits." },
                { term: "Step", definition: "One of a series of actions taken to achieve a goal.", defTrans: "Passo", example: "Drinking water is the first step to hydration.", audioFront: "TTS: Step", audioBack: "TTS: Drinking water is the first step to hydration." },
                { term: "Pet", definition: "An animal kept for companionship and pleasure.", defTrans: "Animal de estimação", example: "My pet cat helps me relax.", audioFront: "TTS: Pet", audioBack: "TTS: My pet cat helps me relax." },
                { term: "Body", definition: "The physical structure of a person or animal.", defTrans: "Corpo", example: "Listen to your body when you are tired.", audioFront: "TTS: Body", audioBack: "TTS: Listen to your body when you are tired." },
                { term: "Anxious", definition: "Feeling worried, nervous, or uneasy about something.", defTrans: "Ansioso(a)", example: "I feel anxious before big presentations.", audioFront: "TTS: Anxious", audioBack: "TTS: I feel anxious before big presentations." },
                { term: "Calm", definition: "Not showing or feeling nervousness, anger, or other strong emotions.", defTrans: "Calmo(a)", example: "Meditation helps me stay calm.", audioFront: "TTS: Calm", audioBack: "TTS: Meditation helps me stay calm." },
                { term: "Habit", definition: "A settled or regular tendency or practice.", defTrans: "Hábito", example: "Running every morning is a great habit.", audioFront: "TTS: Habit", audioBack: "TTS: Running every morning is a great habit." },

                // Conditions
                { term: "If", definition: "Used to introduce a condition.", defTrans: "Se", example: "If you study, you will pass.", audioFront: "TTS: If", audioBack: "TTS: If you study, you will pass." },
                { term: "Whether", definition: "Used to express a doubt or choice between alternatives.", defTrans: "Se (escolha entre dois)", example: "I don't know whether to go to the gym or the park.", audioFront: "TTS: Whether", audioBack: "TTS: I don't know whether to go to the gym or the park." },
                { term: "In case", definition: "Doing something to prepare for a possible future event.", defTrans: "No caso de", example: "Take an umbrella in case it rains.", audioFront: "TTS: In case", audioBack: "TTS: Take an umbrella in case it rains." },
                { term: "Unless", definition: "Used to introduce a negative condition/requirement.", defTrans: "A menos que", example: "I won't go unless you come with me.", audioFront: "TTS: Unless", audioBack: "TTS: I won't go unless you come with me." },
                { term: "As long as", definition: "A linking word showing a strong condition for an action.", defTrans: "Desde que", example: "You can stay as long as you are quiet.", audioFront: "TTS: As long as", audioBack: "TTS: You can stay as long as you are quiet." },
                { term: "Provided that", definition: "A formal way to state a condition that must be met.", defTrans: "Contanto que", example: "You will succeed provided that you work hard.", audioFront: "TTS: Provided that", audioBack: "TTS: You will succeed provided that you work hard." },

                // Movement
                { term: "To / From", definition: "Prepositions used to indicate destination or origin.", defTrans: "Para / De", example: "I walked to school from my house.", audioFront: "TTS: To / From", audioBack: "TTS: I walked to school from my house." },
                { term: "Into / Out of", definition: "Moving to a position inside or outside of something.", defTrans: "Para dentro / Para fora", example: "He jumped into the water and climbed out of the pool.", audioFront: "TTS: Into / Out of", audioBack: "TTS: He jumped into the water and climbed out of the pool." },
                { term: "On(to) / Off", definition: "Moving to or away from a surface.", defTrans: "Para cima / Para fora", example: "The cat jumped onto the table and then off.", audioFront: "TTS: On / Off", audioBack: "TTS: The cat jumped onto the table and then off." },
                { term: "Up / Down", definition: "Moving from a lower to a higher position, or vice-versa.", defTrans: "Para cima / Para baixo", example: "We ran up the stairs and down the hill.", audioFront: "TTS: Up / Down", audioBack: "TTS: We ran up the stairs and down the hill." },
                { term: "Along", definition: "Moving in a line next to something long, like a river or path.", defTrans: "Ao longo de", example: "We walked along the river.", audioFront: "TTS: Along", audioBack: "TTS: We walked along the river." },
                { term: "Through", definition: "Moving in one side and out of the other side of a 3D space.", defTrans: "Através de", example: "The path goes through the forest.", audioFront: "TTS: Through", audioBack: "TTS: The path goes through the forest." },
                { term: "Across", definition: "Moving from one side to the other of a surface or line.", defTrans: "Através de / Cruzando", example: "Be careful when you walk across the street.", audioFront: "TTS: Across", audioBack: "TTS: Be careful when you walk across the street." },
                { term: "Towards", definition: "Moving in the general direction of someone or something.", defTrans: "Em direção a", example: "He is walking towards the meditation center.", audioFront: "TTS: Towards", audioBack: "TTS: He is walking towards the meditation center." },
                { term: "Over / Under", definition: "Moving at a level higher or lower than something.", defTrans: "Por cima / Por baixo", example: "The bird flew over the fence and the dog ran under the table.", audioFront: "TTS: Over / Under", audioBack: "TTS: The bird flew over the fence and the dog ran under the table." },
                { term: "Around", definition: "Moving in a circular path or surrounding something.", defTrans: "Ao redor de", example: "We ran around the park three times.", audioFront: "TTS: Around", audioBack: "TTS: We ran around the park three times." },
                { term: "Past", definition: "Moving in front of or by a specific point.", defTrans: "Passando por", example: "Go past the hospital and turn left.", audioFront: "TTS: Past", audioBack: "TTS: Go past the hospital and turn left." },

                // Expressions
                { term: "Feeling good inside and out", definition: "Expression meaning both mental and physical health are balanced.", defTrans: "Sentir-se bem por dentro e por fora", example: "Thanks! I'm finally feeling good inside and out.", audioFront: "TTS: Feeling good inside and out", audioBack: "TTS: Thanks! I'm finally feeling good inside and out." },
                { term: "Steps for better health", definition: "A phrase indicating actionable advice for wellness.", defTrans: "Passos para uma saúde melhor", example: "What are the best steps for better health?", audioFront: "TTS: Steps for better health", audioBack: "TTS: What are the best steps for better health?" },
                { term: "A lot of research has been done", definition: "A phrase indicating there is scientific backing.", defTrans: "Muitas pesquisas foram feitas", example: "Yes, a lot of research has been done on this topic.", audioFront: "TTS: A lot of research has been done", audioBack: "TTS: Yes, a lot of research has been done on this topic." },
                { term: "I had my stress levels checked", definition: "Example of the passive causative structure for a medical checkup.", defTrans: "Eu tive meus níveis de estresse checados", example: "I had my stress levels checked by a professional.", audioFront: "TTS: I had my stress levels checked", audioBack: "TTS: I had my stress levels checked by a professional." },
                { term: "I will go for a walk unless it rains", definition: "Expression showing a condition for an activity.", defTrans: "Eu vou caminhar, a menos que chova", example: "I will go for a walk unless it rains.", audioFront: "TTS: I will go for a walk unless it rains", audioBack: "TTS: I will go for a walk unless it rains." },
                { term: "She let her friends help her", definition: "Example of active causative structure for permission.", defTrans: "Ela deixou seus amigos a ajudarem", example: "Yes, she let her friends help her manage the work.", audioFront: "TTS: She let her friends help her", audioBack: "TTS: Yes, she let her friends help her manage the work." },
                { term: "I enjoy walking through the park", definition: "Expression using gerund after 'enjoy' and a movement preposition.", defTrans: "Eu gosto de caminhar pelo parque", example: "I enjoy walking through the park near my house.", audioFront: "TTS: I enjoy walking through the park", audioBack: "TTS: I enjoy walking through the park near my house." },

                // Grammar
                { term: "Passive Voice", definition: "Grammar used to focus on the receiver of an action rather than the doer.", defTrans: "Voz Passiva", example: "Healthy foods are sold here.", audioFront: "TTS: Passive Voice", audioBack: "TTS: Healthy foods are sold here." },
                { term: "Active Causative", definition: "Grammar used when we arrange for someone else to do something for us, naming the person.", defTrans: "Causativa Ativa", example: "I had the doctor check my eyes.", audioFront: "TTS: Active Causative", audioBack: "TTS: I had the doctor check my eyes." },
                { term: "Passive Causative", definition: "Grammar used when we arrange for a service, focusing on the result.", defTrans: "Causativa Passiva", example: "I had my blood pressure checked.", audioFront: "TTS: Passive Causative", audioBack: "TTS: I had my blood pressure checked." },
                { term: "Gerund (-ing)", definition: "Verb form used as a subject or after verbs like enjoy, avoid.", defTrans: "Gerúndio", example: "I enjoy exercising.", audioFront: "TTS: Gerund", audioBack: "TTS: I enjoy exercising." },
                { term: "Infinitive (to + verb)", definition: "Verb form used for purpose or after verbs like want, need.", defTrans: "Infinitivo", example: "She needs to relax.", audioFront: "TTS: Infinitive", audioBack: "TTS: She needs to relax." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (For Tooltips)
    // ======================================================
    glossary:[
        // --- TOPIC 1: CONTEXT TOOLTIPS ---
        { topic: "Context", term: "shared", definition: "Distributed or posted online for others to see.", translation: "Compartilhado" },
        { topic: "Context", term: "built", definition: "Constructed by putting parts or material together.", translation: "Construído" },
        { topic: "Context", term: "neighborhood", definition: "A district or community within a town or city.", translation: "Bairro / Vizinhança" },
        { topic: "Context", term: "known", definition: "Recognized, familiar, or within the scope of knowledge.", translation: "Conhecido(a)" },
        { topic: "Context", term: "checked", definition: "Examined to determine accuracy, quality, or condition.", translation: "Checado(a) / Verificado(a)" },
        { topic: "Context", term: "suggested", definition: "Put forward for consideration.", translation: "Sugeriu / Sugerido(a)" },
        { topic: "Context", term: "lifestyle", definition: "The way in which a person or group lives.", translation: "Estilo de vida" },
        { topic: "Context", term: "meditation-center", definition: "A place dedicated to the practice of meditation and mindfulness.", translation: "Centro de meditação" },
        { topic: "Context", term: "wellness", definition: "The state of being in good health, especially as an actively pursued goal.", translation: "Bem-estar" },
        { topic: "Context", term: "balanced", definition: "Keeping or showing a balance; arranged in good proportions.", translation: "Equilibrado(a)" },
        { topic: "Context", term: "gym", definition: "A place equipped for physical exercise.", translation: "Academia" },
        { topic: "Context", term: "overwhelmed", definition: "Feeling a strong emotional effect or too much to handle.", translation: "Sobrecarregado(a)" },
        { topic: "Context", term: "go-for-a-hike", definition: "To take a long walk in the countryside or woods for pleasure.", translation: "Fazer uma caminhada" },
        { topic: "Context", term: "come-along", definition: "To accompany someone on their journey or activity.", translation: "Vir junto" },
        { topic: "Context", term: "go-through", definition: "To experience or endure a difficult situation.", translation: "Passar por" },

        // --- TOPIC 2: VERBS (From 2A) ---
        { topic: "Verbs", term: "exercise", definition: "To perform physical activity for health or fitness.", translation: "Exercitar-se" },
        { topic: "Verbs", term: "feel", definition: "To experience a particular emotion or physical sensation.", translation: "Sentir-se" },
        { topic: "Verbs", term: "manage", definition: "To be in charge of or deal with a situation successfully.", translation: "Gerenciar / Lidar com" },
        { topic: "Verbs", term: "relax", definition: "To become less tense, anxious, or stressed.", translation: "Relaxar" },
        { topic: "Verbs", term: "improve", definition: "To make or become better than before.", translation: "Melhorar" },

        // --- TOPIC 3: WELLNESS & MIND (From 2A) ---
        { topic: "Wellness & Mind", term: "health", definition: "The state of being free from illness or injury.", translation: "Saúde" },
        { topic: "Wellness & Mind", term: "well-being", definition: "The state of being comfortable, healthy, or happy.", translation: "Bem-estar" },
        { topic: "Wellness & Mind", term: "mental-health", definition: "A person's condition regarding their psychological and emotional state.", translation: "Saúde Mental" },
        { topic: "Wellness & Mind", term: "stress", definition: "A state of mental or emotional strain or tension.", translation: "Estresse" },
        { topic: "Wellness & Mind", term: "depression", definition: "A mental health condition characterized by persistent low mood.", translation: "Depressão" },
        { topic: "Wellness & Mind", term: "altruism", definition: "The practice of selfless concern for the well-being of others.", translation: "Altruísmo" },
        { topic: "Wellness & Mind", term: "active", definition: "Engaging in physical activity or exercise regularly.", translation: "Ativo(a)" },
        { topic: "Wellness & Mind", term: "benefit", definition: "An advantage or profit gained from something.", translation: "Benefício" },
        { topic: "Wellness & Mind", term: "healthy", definition: "In good health; promoting good health.", translation: "Saudável" },
        { topic: "Wellness & Mind", term: "step", definition: "One of a series of actions taken to achieve a goal.", translation: "Passo" },
        { topic: "Wellness & Mind", term: "pet", definition: "An animal kept for companionship and pleasure.", translation: "Animal de estimação" },
        { topic: "Wellness & Mind", term: "body", definition: "The physical structure of a person or animal.", translation: "Corpo" },
        { topic: "Wellness & Mind", term: "anxious", definition: "Feeling worried, nervous, or uneasy about something.", translation: "Ansioso(a)" },
        { topic: "Wellness & Mind", term: "calm", definition: "Not showing or feeling nervousness, anger, or other strong emotions.", translation: "Calmo(a)" },
        { topic: "Wellness & Mind", term: "habit", definition: "A settled or regular tendency or practice.", translation: "Hábito" },

        // --- TOPIC 4: CONDITIONS (From 2A) ---
        { topic: "Conditions", term: "if", definition: "Used to introduce a condition.", translation: "Se" },
        { topic: "Conditions", term: "whether", definition: "Used to express a doubt or choice between alternatives.", translation: "Se (escolha entre dois)" },
        { topic: "Conditions", term: "in-case", definition: "Doing something to prepare for a possible future event.", translation: "No caso de" },
        { topic: "Conditions", term: "unless", definition: "Used to introduce a negative condition/requirement.", translation: "A menos que" },
        { topic: "Conditions", term: "as-long-as", definition: "A linking word showing a strong condition for an action.", translation: "Desde que" },
        { topic: "Conditions", term: "provided-that", definition: "A formal way to state a condition that must be met.", translation: "Contanto que" },

        // --- TOPIC 5: MOVEMENT (From 2A) ---
        { topic: "Movement", term: "to", definition: "Preposition used to indicate destination.", translation: "Para (destino)" },
        { topic: "Movement", term: "from", definition: "Preposition used to indicate origin.", translation: "De (origem)" },
        { topic: "Movement", term: "into", definition: "Moving to a position inside something.", translation: "Para dentro de" },
        { topic: "Movement", term: "out-of", definition: "Moving from inside a space to the outside.", translation: "Para fora de" },
        { topic: "Movement", term: "on", definition: "Moving to a position on a surface.", translation: "Para cima de" },
        { topic: "Movement", term: "off", definition: "Moving away from a surface.", translation: "Para fora de (superfície)" },
        { topic: "Movement", term: "up", definition: "Moving from a lower to a higher position.", translation: "Para cima" },
        { topic: "Movement", term: "down", definition: "Moving from a higher to a lower position.", translation: "Para baixo" },
        { topic: "Movement", term: "along", definition: "Moving in a line next to something long.", translation: "Ao longo de" },
        { topic: "Movement", term: "through", definition: "Moving in one side and out of the other side of a 3D space.", translation: "Através de" },
        { topic: "Movement", term: "across", definition: "Moving from one side to another.", translation: "Através de / Cruzando" },
        { topic: "Movement", term: "towards", definition: "Moving in the general direction of someone or something.", translation: "Em direção a" },
        { topic: "Movement", term: "over", definition: "Moving at a level higher than something without touching it.", translation: "Por cima de" },
        { topic: "Movement", term: "under", definition: "Moving or being in a lower position than something else.", translation: "Por baixo de" },
        { topic: "Movement", term: "around", definition: "Moving in a circular path or surrounding something.", translation: "Ao redor de" },
        { topic: "Movement", term: "past", definition: "Moving in front of or by a specific point.", translation: "Passando por" },

        // --- TOPIC 6: EXPRESSIONS (From 2A) ---
        { topic: "Expressions", term: "feeling-good-inside-and-out", definition: "Expression meaning both mental and physical health are balanced.", translation: "Sentir-se bem por dentro e por fora" },
        { topic: "Expressions", term: "steps-for-better-health", definition: "A phrase indicating actionable advice for wellness.", translation: "Passos para uma saúde melhor" },
        { topic: "Expressions", term: "a-lot-of-research-has-been-done", definition: "A phrase indicating there is scientific backing.", translation: "Muitas pesquisas foram feitas" },
        { topic: "Expressions", term: "i-had-my-stress-levels-checked", definition: "Example of the passive causative structure.", translation: "Eu tive meus níveis de estresse checados" },
        { topic: "Expressions", term: "i-will-go-for-a-walk-unless-it-rains", definition: "Expression showing a condition for an activity.", translation: "Eu vou caminhar, a menos que chova" },
        { topic: "Expressions", term: "she-let-her-friends-help-her", definition: "Example of active causative structure.", translation: "Ela deixou seus amigos a ajudarem" },
        { topic: "Expressions", term: "i-enjoy-walking-through-the-park", definition: "Expression using gerund and a movement preposition.", translation: "Eu gosto de caminhar pelo parque" },

        // --- TOPIC 7: GRAMMAR (From 3A) ---
        { topic: "Grammar", term: "passive-voice", definition: "Grammar used to focus on the receiver of an action rather than the doer.", translation: "Voz Passiva" },
        { topic: "Grammar", term: "causative-form", definition: "Grammar used when we arrange for someone else to do something for us.", translation: "Forma Causativa" },
        { topic: "Grammar", term: "gerunds", definition: "Verbs taking the -ing form, used as subjects or after specific verbs.", translation: "Gerúndios" },
        { topic: "Grammar", term: "infinitives", definition: "Verbs taking the to + verb form, used for purpose or after specific verbs.", translation: "Infinitivos" },
        { topic: "Grammar", term: "condition", definition: "A state or rule that must be met for a result to happen.", translation: "Condição" },
        { topic: "Grammar", term: "prepositions-of-movement", definition: "Words that describe the direction or path of an action.", translation: "Preposições de Movimento" }
    ]
});