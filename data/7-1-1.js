/**
 * REACH English - LESSON DATA 7-1-1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "7-1-1", 
    grade: "7th Grade",       
    bimester: "1",   
    chapter: "1",    
    chapterTitle: "What Can You Do?", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Talk about skills and talents (sing, dance, draw).<br>• Use the verb \"CAN\" to say what you can and can't do.<br>• Ask people about their abilities.<br>• Use adverbs like \"well\" and \"fast\" to describe how you do things.<br>• Name musical instruments and sports.",
            welcome: "Hello, Superstars! It's Mr. D!<br><br>Welcome to \"What Can You Do?\"! Everyone has a special talent. Maybe you can sing like a star, or run very fast! Today, we are going to learn how to talk about all the amazing things we can do. We will use the power word \"CAN\" and learn to describe our skills perfectly. Let's discover your superpowers!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about skills and talents. Use the verb CAN to say what you can and can't do. Ask people about their abilities. Use adverbs like well and fast to describe how you do things. And name musical instruments and sports.",
                welcome: "TTS: Hello, Superstars! It's Mr. D! Welcome to What Can You Do?! Everyone has a special talent. Maybe you can sing like a star, or run very fast! Today, we are going to learn how to talk about all the amazing things we can do. We will use the power word CAN and learn to describe our skills perfectly. Let's discover your superpowers!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "(Sound of upbeat music and kids playing. Albert is holding a guitar, and Celine is wearing roller skates.)", 
            contextAudio: "audio/7-1-1/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Wow, Albert! [Can](tooltip:can) you [play](tooltip:play) the [guitar](tooltip:guitar)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "Yes, I [can](tooltip:can). But I [can't](tooltip:cant) play very [well](tooltip:well)." 
                },
                { 
                    speaker: "Celine", 
                    text: "That is awesome! I [can't](tooltip:cant) play any [instrument](tooltip:instrument) [at all](tooltip:at-all)." 
                },
                { 
                    speaker: "Albert", 
                    text: "What [can](tooltip:can) you [do](tooltip:do), Celine?" 
                },
                { 
                    speaker: "Celine", 
                    text: "I can [skate](tooltip:skate) [fast](tooltip:fast)! And I can [speak](tooltip:speak) [French](tooltip:french)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Really? Can you [help](tooltip:help) me with my French [homework](tooltip:homework)?" 
                },
                { 
                    speaker: "Celine", 
                    text: "Of course! And maybe you can [teach](tooltip:teach) me the [guitar](tooltip:guitar)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "Deal! We can [learn](tooltip:learn) together." 
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
                    title: "Verbs (Talents & Abilities)",
                    audio: "TTS: Can. Sing. Dance. Draw. Paint. Cook. Play. Read. Write. Speak. Swim. Run. Ride. Use. Help. Give. Solve. Move.",
                    items: [
                        { term: "Can", trans: "<small style='color:#0077b6'>poder / conseguir (habilidade)</small>" },
                        { term: "Sing", trans: "<small style='color:#0077b6'>cantar</small>" },
                        { term: "Dance", trans: "<small style='color:#0077b6'>dançar</small>" },
                        { term: "Draw", trans: "<small style='color:#0077b6'>desenhar</small>" },
                        { term: "Paint", trans: "<small style='color:#0077b6'>pintar</small>" },
                        { term: "Cook", trans: "<small style='color:#0077b6'>cozinhar</small>" },
                        { term: "Play (an instrument)", trans: "<small style='color:#0077b6'>tocar (instrumento)</small>" },
                        { term: "Read", trans: "<small style='color:#0077b6'>ler</small>" },
                        { term: "Write", trans: "<small style='color:#0077b6'>escrever</small>" },
                        { term: "Speak", trans: "<small style='color:#0077b6'>falar (um idioma)</small>" },
                        { term: "Swim", trans: "<small style='color:#0077b6'>nadar</small>" },
                        { term: "Run", trans: "<small style='color:#0077b6'>correr</small>" },
                        { term: "Ride", trans: "<small style='color:#0077b6'>andar (de bicicleta/moto/cavalo)</small>" },
                        { term: "Use", trans: "<small style='color:#0077b6'>usar</small>" },
                        { term: "Help", trans: "<small style='color:#0077b6'>ajudar</small>" },
                        { term: "Give", trans: "<small style='color:#0077b6'>dar</small>" },
                        { term: "Solve", trans: "<small style='color:#0077b6'>resolver</small>" },
                        { term: "Move", trans: "<small style='color:#0077b6'>mover / mexer</small>" }
                    ]
                },
                {
                    title: "Sports",
                    audio: "TTS: Football. Soccer. Basketball. Volleyball. Tennis. Swimming. Running. Cycling. Gymnastics. Skateboarding. Badminton.",
                    items: [
                        { term: "Football / Soccer", trans: "<small style='color:#0077b6'>Futebol</small>" },
                        { term: "Basketball", trans: "<small style='color:#0077b6'>Basquete</small>" },
                        { term: "Volleyball", trans: "<small style='color:#0077b6'>Vôlei</small>" },
                        { term: "Tennis", trans: "<small style='color:#0077b6'>Tênis</small>" },
                        { term: "Swimming", trans: "<small style='color:#0077b6'>Natação</small>" },
                        { term: "Running", trans: "<small style='color:#0077b6'>Corrida</small>" },
                        { term: "Cycling", trans: "<small style='color:#0077b6'>Ciclismo</small>" },
                        { term: "Gymnastics", trans: "<small style='color:#0077b6'>Ginástica</small>" },
                        { term: "Skateboarding", trans: "<small style='color:#0077b6'>Skate</small>" },
                        { term: "Badminton", trans: "<small style='color:#0077b6'>Badminton</small>" }
                    ]
                },
                {
                    title: "Musical Instruments",
                    audio: "TTS: Electric guitar. Piano. Violin. Guitar. Drums. Flute. Keyboard. Bass.",
                    items: [
                        { term: "Electric guitar", trans: "<small style='color:#0077b6'>Guitarra elétrica</small>" },
                        { term: "Piano", trans: "<small style='color:#0077b6'>Piano</small>" },
                        { term: "Violin", trans: "<small style='color:#0077b6'>Violino</small>" },
                        { term: "Guitar", trans: "<small style='color:#0077b6'>Violão</small>" },
                        { term: "Drums", trans: "<small style='color:#0077b6'>Bateria</small>" },
                        { term: "Flute", trans: "<small style='color:#0077b6'>Flauta</small>" },
                        { term: "Keyboard", trans: "<small style='color:#0077b6'>Teclado</small>" },
                        { term: "Bass", trans: "<small style='color:#0077b6'>Baixo</small>" }
                    ]
                },
                {
                    title: "Languages",
                    audio: "TTS: English. Portuguese. Spanish. French. German. Italian. Japanese. Chinese. Korean.",
                    items: [
                        { term: "English", trans: "<small style='color:#0077b6'>Inglês</small>" },
                        { term: "Portuguese", trans: "<small style='color:#0077b6'>Português</small>" },
                        { term: "Spanish", trans: "<small style='color:#0077b6'>Espanhol</small>" },
                        { term: "French", trans: "<small style='color:#0077b6'>Francês</small>" },
                        { term: "German", trans: "<small style='color:#0077b6'>Alemão</small>" },
                        { term: "Italian", trans: "<small style='color:#0077b6'>Italiano</small>" },
                        { term: "Japanese", trans: "<small style='color:#0077b6'>Japonês</small>" },
                        { term: "Chinese", trans: "<small style='color:#0077b6'>Chinês</small>" },
                        { term: "Korean", trans: "<small style='color:#0077b6'>Coreano</small>" }
                    ]
                },
                {
                    title: "Phrases & Adverbs",
                    audio: "TTS: I can. I can't. Can you. How well. Very well. Well. Badly. Fast. Slowly. Easily. Carefully. At all.",
                    items: [
                        { term: "I can...", trans: "<small style='color:#0077b6'>Eu posso / Eu consigo...</small>" },
                        { term: "I can't...", trans: "<small style='color:#0077b6'>Eu não posso / Eu não consigo...</small>" },
                        { term: "Can you...?", trans: "<small style='color:#0077b6'>Você pode / Você consegue...?</small>" },
                        { term: "How well...?", trans: "<small style='color:#0077b6'>Quão bem...?</small>" },
                        { term: "Very well", trans: "<small style='color:#0077b6'>Muito bem</small>" },
                        { term: "Well", trans: "<small style='color:#0077b6'>Bem</small>" },
                        { term: "Badly", trans: "<small style='color:#0077b6'>Mal</small>" },
                        { term: "Fast", trans: "<small style='color:#0077b6'>Rápido</small>" },
                        { term: "Slowly", trans: "<small style='color:#0077b6'>Lentamente</small>" },
                        { term: "Easily", trans: "<small style='color:#0077b6'>Facilmente</small>" },
                        { term: "Carefully", trans: "<small style='color:#0077b6'>Cuidadosamente</small>" },
                        { term: "At all", trans: "<small style='color:#0077b6'>De jeito nenhum (com negativa)</small>" }
                    ]
                }
            ],

            // ======================================================
            // 2B: Context Examples (Grouped & Tabbed)
            // ======================================================
            exampleGroups: [
                {
                    title: "Verbs (Talents & Abilities)",
                    audio: "TTS: I can swim. She sings beautifully. They dance at the party. He draws cartoons. We paint the wall. My dad cooks pasta. I play the piano. Can you read this? I write emails. She speaks English. Ducks swim in the lake. Athletes run fast. I ride my bike to school. Use a pen to write. Can you help me? Please give me the book. He can solve the puzzle. Don't move!",
                    items: [
                        { term: "Can", sent: "I can swim.", trans: "<span style='color:#0077b6'>Eu consigo nadar.</span>" },
                        { term: "Sing", sent: "She sings beautifully.", trans: "<span style='color:#0077b6'>Ela canta lindamente.</span>" },
                        { term: "Dance", sent: "They dance at the party.", trans: "<span style='color:#0077b6'>Eles dançam na festa.</span>" },
                        { term: "Draw", sent: "He draws cartoons.", trans: "<span style='color:#0077b6'>Ele desenha cartoons.</span>" },
                        { term: "Paint", sent: "We paint the wall.", trans: "<span style='color:#0077b6'>Nós pintamos a parede.</span>" },
                        { term: "Cook", sent: "My dad cooks pasta.", trans: "<span style='color:#0077b6'>Meu pai cozinha macarrão.</span>" },
                        { term: "Play (instrument)", sent: "I play the piano.", trans: "<span style='color:#0077b6'>Eu toco piano.</span>" },
                        { term: "Read", sent: "Can you read this?", trans: "<span style='color:#0077b6'>Você consegue ler isto?</span>" },
                        { term: "Write", sent: "I write emails.", trans: "<span style='color:#0077b6'>Eu escrevo e-mails.</span>" },
                        { term: "Speak", sent: "She speaks English.", trans: "<span style='color:#0077b6'>Ela fala inglês.</span>" },
                        { term: "Swim", sent: "Ducks swim in the lake.", trans: "<span style='color:#0077b6'>Patos nadam no lago.</span>" },
                        { term: "Run", sent: "Athletes run fast.", trans: "<span style='color:#0077b6'>Atletas correm rápido.</span>" },
                        { term: "Ride", sent: "I ride my bike to school.", trans: "<span style='color:#0077b6'>Eu ando de bicicleta para a escola.</span>" },
                        { term: "Use", sent: "Use a pen to write.", trans: "<span style='color:#0077b6'>Use uma caneta para escrever.</span>" },
                        { term: "Help", sent: "Can you help me?", trans: "<span style='color:#0077b6'>Você pode me ajudar?</span>" },
                        { term: "Give", sent: "Please give me the book.", trans: "<span style='color:#0077b6'>Por favor, me dê o livro.</span>" },
                        { term: "Solve", sent: "He can solve the puzzle.", trans: "<span style='color:#0077b6'>Ele consegue resolver o quebra-cabeça.</span>" },
                        { term: "Move", sent: "Don't move!", trans: "<span style='color:#0077b6'>Não se mexa!</span>" }
                    ]
                },
                {
                    title: "Sports",
                    audio: "TTS: We play soccer on Saturdays. Basketball is popular. They like volleyball. She plays tennis well. Swimming is good exercise.",
                    items: [
                        { term: "Soccer", sent: "We play soccer on Saturdays.", trans: "<span style='color:#0077b6'>Nós jogamos futebol aos sábados.</span>" },
                        { term: "Basketball", sent: "Basketball is popular.", trans: "<span style='color:#0077b6'>Basquete é popular.</span>" },
                        { term: "Volleyball", sent: "They like volleyball.", trans: "<span style='color:#0077b6'>Eles gostam de vôlei.</span>" },
                        { term: "Tennis", sent: "She plays tennis well.", trans: "<span style='color:#0077b6'>Ela joga tênis bem.</span>" },
                        { term: "Swimming", sent: "Swimming is good exercise.", trans: "<span style='color:#0077b6'>Natação é um bom exercício.</span>" }
                    ]
                },
                {
                    title: "Musical Instruments",
                    audio: "TTS: He plays the electric guitar. The piano is black. She plays the violin.",
                    items: [
                        { term: "Electric guitar", sent: "He plays the electric guitar.", trans: "<span style='color:#0077b6'>Ele toca guitarra.</span>" },
                        { term: "Piano", sent: "The piano is black.", trans: "<span style='color:#0077b6'>O piano é preto.</span>" },
                        { term: "Violin", sent: "She plays the violin.", trans: "<span style='color:#0077b6'>Ela toca violino.</span>" }
                    ]
                },
                {
                    title: "Languages",
                    audio: "TTS: I speak English. We speak Portuguese.",
                    items: [
                        { term: "English", sent: "I speak English.", trans: "<span style='color:#0077b6'>Eu falo inglês.</span>" },
                        { term: "Portuguese", sent: "We speak Portuguese.", trans: "<span style='color:#0077b6'>Nós falamos português.</span>" }
                    ]
                },
                {
                    title: "Phrases & Adverbs",
                    audio: "TTS: I can jump high. I can't fly. Can you cook? Yes, I can. How well do you sing? Very well. She speaks Spanish very well. He plays badly. Run fast!",
                    items: [
                        { term: "I can...", sent: "I can jump high.", trans: "<span style='color:#0077b6'>Eu consigo pular alto.</span>" },
                        { term: "I can't...", sent: "I can't fly.", trans: "<span style='color:#0077b6'>Eu não consigo voar.</span>" },
                        { term: "Can you...?", sent: "Can you cook? Yes, I can.", trans: "<span style='color:#0077b6'>Você sabe cozinhar? Sim, eu sei.</span>" },
                        { term: "How well...", sent: "How well do you sing? Very well.", trans: "<span style='color:#0077b6'>Quão bem você canta? Muito bem.</span>" },
                        { term: "Very well", sent: "She speaks Spanish very well.", trans: "<span style='color:#0077b6'>Ela fala espanhol muito bem.</span>" },
                        { term: "Badly", sent: "He plays badly.", trans: "<span style='color:#0077b6'>Ele joga mal.</span>" },
                        { term: "Fast", sent: "Run fast!", trans: "<span style='color:#0077b6'>Corra rápido!</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (25 MCQ Exercises)
            drills: [
                { 
                    type: "mcq", 
                    q: "Choose the translation for 'Sing':", 
                    options: [ {t: "Dançar", c: false}, {t: "Cantar", c: true}, {t: "Pintar", c: false}, {t: "Correr", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete the sentence: 'I can _______ a bike.'", 
                    options: [ {t: "drive", c: false}, {t: "ride", c: true}, {t: "play", c: false}, {t: "speak", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Which sport uses a racket?", 
                    options: [ {t: "Soccer", c: false}, {t: "Basketball", c: false}, {t: "Tennis", c: true}, {t: "Swimming", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Which instrument has keys?", 
                    options: [ {t: "Guitar", c: false}, {t: "Piano", c: true}, {t: "Drums", c: false}, {t: "Violin", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "People in Brazil speak...", 
                    options: [ {t: "English", c: false}, {t: "Spanish", c: false}, {t: "Portuguese", c: true}, {t: "French", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: 'The turtle walks _______.'", 
                    options: [ {t: "fast", c: false}, {t: "slowly", c: true}, {t: "well", c: false}, {t: "badly", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: '_______ you help me?'", 
                    options: [ {t: "Are", c: false}, {t: "Can", c: true}, {t: "Do", c: false}, {t: "Is", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: 'I _______ swim. I am afraid of water.'", 
                    options: [ {t: "can", c: false}, {t: "can't", c: true}, {t: "do", c: false}, {t: "don't", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Adverbs: 'He is a good singer. He sings _______.'", 
                    options: [ {t: "good", c: false}, {t: "badly", c: false}, {t: "well", c: true}, {t: "slowly", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Phrases: 'How _______ can you speak English?'", 
                    options: [ {t: "well", c: true}, {t: "good", c: false}, {t: "fast", c: false}, {t: "many", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "You use a ball to play...", 
                    options: [ {t: "Swimming", c: false}, {t: "Basketball", c: true}, {t: "Cycling", c: false}, {t: "Gymnastics", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "To make food is to...", 
                    options: [ {t: "Cook", c: true}, {t: "Draw", c: false}, {t: "Paint", c: false}, {t: "Ride", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Adverbs: 'The test was easy. I finished it _______.'", 
                    options: [ {t: "slowly", c: false}, {t: "badly", c: false}, {t: "easily", c: true}, {t: "fastly", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "People in France speak...", 
                    options: [ {t: "French", c: true}, {t: "English", c: false}, {t: "Italian", c: false}, {t: "Spanish", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the correct ability: 'Birds _______ fly.'", 
                    options: [ {t: "can", c: true}, {t: "can't", c: false}, {t: "are", c: false}, {t: "is", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Grammar: 'She plays _______ electric guitar.'", 
                    options: [ {t: "a", c: false}, {t: "the", c: true}, {t: "an", c: false}, {t: "(nothing)", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Adverbs: 'He is a fast runner. He runs _______.'", 
                    options: [ {t: "fastly", c: false}, {t: "fast", c: true}, {t: "well", c: false}, {t: "carefully", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Language: 'Hello' is 'Hola' in...", 
                    options: [ {t: "Japanese", c: false}, {t: "Spanish", c: true}, {t: "French", c: false}, {t: "German", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Verb: 'Can you _______ the puzzle?'", 
                    options: [ {t: "solve", c: true}, {t: "move", c: false}, {t: "use", c: false}, {t: "give", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Instrument: This instrument has strings and you play it with a bow.", 
                    options: [ {t: "Drums", c: false}, {t: "Piano", c: false}, {t: "Violin", c: true}, {t: "Flute", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Adverbs: 'Please, write _______ so I can read it.'", 
                    options: [ {t: "carefully", c: true}, {t: "badly", c: false}, {t: "fast", c: false}, {t: "easily", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Sport: This sport is played in a swimming pool.", 
                    options: [ {t: "Running", c: false}, {t: "Soccer", c: false}, {t: "Swimming", c: true}, {t: "Tennis", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Ability: 'I _______ speak Chinese. It is too difficult.'", 
                    options: [ {t: "can", c: false}, {t: "can't", c: true}, {t: "am", c: false}, {t: "is", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Verb: To move your body to music is to...", 
                    options: [ {t: "Dance", c: true}, {t: "Draw", c: false}, {t: "Read", c: false}, {t: "Swim", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Manner: 'I don't like this song. They play _______.'", 
                    options: [ {t: "well", c: false}, {t: "beautifully", c: false}, {t: "badly", c: true}, {t: "fast", c: false} ] 
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

            // 3A: Explanations (Tabbed Grammar Boxes)
            patterns: [
                {
                    title: "CAN (Ability) - Affirmative",
                    audio: "TTS: We use the modal verb CAN to say that someone has the ability or skill to do something. The verb after can is always in the base form. I can swim. You can dance. He can cook. She can speak English. It can fly. We can run fast. They can play soccer. Albert can draw well.",
                    explanation: "We use the modal verb CAN to say that someone has the ability or skill to do something. The verb after \"can\" is always in the base form (without \"to\"). It is the same for all persons.<br><br><small style='color:#0077b6; font-style:italic;'>(Usamos o verbo modal CAN para dizer que alguém tem a habilidade ou capacidade de fazer algo. O verbo depois de \"can\" está sempre na forma base. Ele é o mesmo para todas as pessoas.)</small>",
                    samples: [
                        { en: "I can swim.", pt: "<small style='color:#0077b6'>Eu consigo nadar.</small>" },
                        { en: "You can dance.", pt: "<small style='color:#0077b6'>Você consegue dançar.</small>" },
                        { en: "He can cook.", pt: "<small style='color:#0077b6'>Ele consegue cozinhar.</small>" },
                        { en: "She can speak English.", pt: "<small style='color:#0077b6'>Ela consegue falar inglês.</small>" },
                        { en: "It can fly.", pt: "<small style='color:#0077b6'>Ele/Ela (o pássaro) consegue voar.</small>" },
                        { en: "We can run fast.", pt: "<small style='color:#0077b6'>Nós conseguimos correr rápido.</small>" },
                        { en: "They can play soccer.", pt: "<small style='color:#0077b6'>Eles conseguem jogar futebol.</small>" },
                        { en: "Albert can draw well.", pt: "<small style='color:#0077b6'>Albert consegue desenhar bem.</small>" }
                    ]
                },
                {
                    title: "CAN (Ability) - Negative",
                    audio: "TTS: To say someone does not have an ability, we add not. The short form is can't. I can't sing. You can't drive. He can't play tennis. She can't speak French. It can't swim. We can't hear you. They can't see the board. My sister can't ride a bike.",
                    explanation: "To say someone does not have an ability, we add not. The short form is can't (cannot).<br><br><small style='color:#0077b6; font-style:italic;'>(Para dizer que alguém não tem uma habilidade, adicionamos \"not\". A forma curta é \"can't\".)</small>",
                    samples: [
                        { en: "I can't sing.", pt: "<small style='color:#0077b6'>Eu não consigo cantar.</small>" },
                        { en: "You can't drive.", pt: "<small style='color:#0077b6'>Você não consegue dirigir.</small>" },
                        { en: "He can't play tennis.", pt: "<small style='color:#0077b6'>Ele não consegue jogar tênis.</small>" },
                        { en: "She can't speak French.", pt: "<small style='color:#0077b6'>Ela não consegue falar francês.</small>" },
                        { en: "It can't swim.", pt: "<small style='color:#0077b6'>Ele/Ela não consegue nadar.</small>" },
                        { en: "We can't hear you.", pt: "<small style='color:#0077b6'>Nós não conseguimos te ouvir.</small>" },
                        { en: "They can't see the board.", pt: "<small style='color:#0077b6'>Eles não conseguem ver o quadro.</small>" },
                        { en: "My sister can't ride a bike.", pt: "<small style='color:#0077b6'>Minha irmã não consegue andar de bicicleta.</small>" }
                    ]
                },
                {
                    title: "CAN (Interrogative & Short Answers)",
                    audio: "TTS: To ask about ability, we put Can before the subject. Can I help? Yes, you can. No, you can't. Can you cook? Can he dance? Can she read? Can it run? Can we go? Can they play? Can the students write?",
                    explanation: "To ask about ability, we put Can before the subject.<br><br><small style='color:#0077b6; font-style:italic;'>(Para perguntar sobre habilidade, colocamos \"Can\" antes do sujeito.)</small>",
                    samples: [
                        { en: "Can I help? -> Yes, you can. / No, you can't.", pt: "<small style='color:#0077b6'>Eu posso ajudar? -> Sim / Não.</small>" },
                        { en: "Can you cook? -> Yes, I can. / No, I can't.", pt: "<small style='color:#0077b6'>Você sabe cozinhar? -> Sim / Não.</small>" },
                        { en: "Can he dance?", pt: "<small style='color:#0077b6'>Ele consegue dançar?</small>" },
                        { en: "Can she read?", pt: "<small style='color:#0077b6'>Ela consegue ler?</small>" },
                        { en: "Can it run?", pt: "<small style='color:#0077b6'>Ele/Ela consegue correr?</small>" },
                        { en: "Can we go?", pt: "<small style='color:#0077b6'>Nós podemos ir?</small>" },
                        { en: "Can they play?", pt: "<small style='color:#0077b6'>Eles conseguem jogar?</small>" },
                        { en: "Can the students write? -> Yes, they can.", pt: "<small style='color:#0077b6'>Os alunos sabem escrever? -> Sim, eles sabem.</small>" }
                    ]
                },
                {
                    title: "Adverbs of Manner",
                    audio: "TTS: Adverbs describe how we do an action. They usually come after the verb. Slow becomes slowly. Quick becomes quickly. Careful becomes carefully. Bad becomes badly. Good becomes well. Fast remains fast. Hard remains hard. She sings well. He runs fast.",
                    explanation: "Adverbs describe how we do an action. They usually come after the verb. Most are formed by adding -ly to the adjective, but some are irregular.<br><br><small style='color:#0077b6; font-style:italic;'>(Advérbios descrevem como fazemos uma ação. Eles geralmente vêm depois do verbo. A maioria é formada adicionando -ly ao adjetivo.)</small>",
                    samples: [
                        { en: "Slow -> Slowly", pt: "<small style='color:#0077b6'>Lentamente</small>" },
                        { en: "Quick -> Quickly", pt: "<small style='color:#0077b6'>Rapidamente</small>" },
                        { en: "Careful -> Carefully", pt: "<small style='color:#0077b6'>Cuidadosamente</small>" },
                        { en: "Bad -> Badly", pt: "<small style='color:#0077b6'>Mal</small>" },
                        { en: "Good -> Well (Irregular)", pt: "<small style='color:#0077b6'>Bem</small>" },
                        { en: "Fast -> Fast (Irregular)", pt: "<small style='color:#0077b6'>Rápido</small>" },
                        { en: "Hard -> Hard (Irregular)", pt: "<small style='color:#0077b6'>Duro / Arduamente</small>" },
                        { en: "She sings well.", pt: "<small style='color:#0077b6'>Ela canta bem.</small>" },
                        { en: "He runs fast.", pt: "<small style='color:#0077b6'>Ele corre rápido.</small>" }
                    ]
                },
                {
                    title: "Definite Article 'The' with Instruments",
                    audio: "TTS: When we talk about playing a musical instrument, we use the before the instrument's name. Play plus the plus instrument. I play the piano. She plays the guitar.",
                    explanation: "When we talk about playing a musical instrument, we use the before the instrument's name.<br><br><small style='color:#0077b6; font-style:italic;'>(Quando falamos sobre tocar um instrumento musical, usamos \"the\" antes do nome do instrumento.)</small>",
                    samples: [
                        { en: "Play + the + instrument", pt: "<small style='color:#0077b6'>Tocar + o/a + instrumento</small>" },
                        { en: "I play the piano.", pt: "<small style='color:#0077b6'>Eu toco piano.</small>" },
                        { en: "She plays the guitar.", pt: "<small style='color:#0077b6'>Ela toca violão/guitarra.</small>" }
                    ]
                }
            ],

            // ======================================================
            // 3B: Natural Examples (Dialogues Grouped in Boxes)
            // ======================================================
            dialogueGroups: [
                {
                    title: "Dialogue 1: CAN - Affirmative",
                    audio: "audio/7-1-1/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Look at those birds. They can fly so high!", 
                            pt: "<span style='color:#0077b6'>Olhe aqueles pássaros. Eles conseguem voar tão alto!</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Yes! And we can run fast on the ground.", 
                            pt: "<span style='color:#0077b6'>Sim! E nós conseguimos correr rápido no chão.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: CAN - Negative",
                    audio: "audio/7-1-1/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Albert, can you fix my computer?", 
                            pt: "<span style='color:#0077b6'>Albert, você consegue consertar meu computador?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Sorry, I can't. My dad can't fix it either. We are bad at technology.", 
                            pt: "<span style='color:#0077b6'>Desculpe, eu não consigo. Meu pai não consegue consertar também. Nós somos ruins com tecnologia.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: CAN - Interrogative & Short Answers",
                    audio: "audio/7-1-1/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Mrs. Canales", 
                            text: "Can your brother swim, Celine?", 
                            pt: "<span style='color:#0077b6'>O seu irmão consegue nadar, Celine?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, he can't. But can you swim, Mrs. Canales?", 
                            pt: "<span style='color:#0077b6'>Não, ele não consegue. Mas a senhora consegue nadar, Sra. Canales?</span>" 
                        },
                        { 
                            speaker: "Mrs. Canales", 
                            text: "Yes, I can. I love swimming.", 
                            pt: "<span style='color:#0077b6'>Sim, eu consigo. Eu amo nadar.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 4: Adverbs of Manner",
                    audio: "audio/7-1-1/step3_dialogue4.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "You speak French very well, Celine.", 
                            pt: "<span style='color:#0077b6'>Você fala francês muito bem, Celine.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Thanks! But I play tennis badly. You play very fast.", 
                            pt: "<span style='color:#0077b6'>Obrigada! Mas eu jogo tênis mal. Você joga muito rápido.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 5: Play + The + Instrument",
                    audio: "audio/7-1-1/step3_dialogue5.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Do you want to start a band? I play the guitar.", 
                            pt: "<span style='color:#0077b6'>Você quer começar uma banda? Eu toco guitarra.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Good idea! I play the drums. Let's make music!", 
                            pt: "<span style='color:#0077b6'>Boa ideia! Eu toco bateria. Vamos fazer música!</span>" 
                        }
                    ]
                }
            ],

            // ======================================================
            // 3C: Grammar Practice (24 MCQ Exercises)
            // ======================================================
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Complete (Affirmative): 'My mother _______ cook Italian food.'",
                    options: [ {t: "cans", c: false}, {t: "can to", c: false}, {t: "can", c: true}, {t: "is can", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Complete (Negative): 'Fish _______ walk.'",
                    options: [ {t: "no can", c: false}, {t: "don't can", c: false}, {t: "can't", c: true}, {t: "isn't can", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Complete (Interrogative): '_______ they speak Japanese?'",
                    options: [ {t: "Do", c: false}, {t: "Are", c: false}, {t: "Can", c: true}, {t: "Is", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Short Answer: 'Can the dog run?' 'Yes, _______.'",
                    options: [ {t: "it can", c: true}, {t: "he does", c: false}, {t: "it is", c: false}, {t: "they can", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Adverb: 'He drives _______ (careful).'",
                    options: [ {t: "careful", c: false}, {t: "carefully", c: true}, {t: "carefuly", c: false}, {t: "carefull", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Adverb: 'She is a good singer. She sings _______.'",
                    options: [ {t: "good", c: false}, {t: "goodly", c: false}, {t: "well", c: true}, {t: "badly", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Instruments: 'I want to play _______ violin.'",
                    options: [ {t: "a", c: false}, {t: "an", c: false}, {t: "the", c: true}, {t: "(nothing)", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Adverb: 'The cheetah runs very _______.'",
                    options: [ {t: "fastly", c: false}, {t: "fast", c: true}, {t: "fasts", c: false}, {t: "quick", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Mixed: 'I _______ play the piano, but I _______ play the drums.'",
                    options: [ {t: "can / can't", c: true}, {t: "can't / can't", c: false}, {t: "am / am not", c: false}, {t: "can / can", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Ability: 'Babies _______ drive a car.'",
                    options: [ {t: "can", c: false}, {t: "can't", c: true}, {t: "don't", c: false}, {t: "no can", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Interrogative: '_______ you help me with my homework?'",
                    options: [ {t: "Are", c: false}, {t: "Do", c: false}, {t: "Can", c: true}, {t: "Is", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Short Answer: 'Can you swim?' 'No, I _______.'",
                    options: [ {t: "am not", c: false}, {t: "don't", c: false}, {t: "can't", c: true}, {t: "no can", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Adverb: 'He plays the guitar _______ (bad).'",
                    options: [ {t: "bad", c: false}, {t: "badly", c: true}, {t: "bads", c: false}, {t: "well", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Adverb: 'The turtle is slow. It moves _______.'",
                    options: [ {t: "slowly", c: true}, {t: "fast", c: false}, {t: "slow", c: false}, {t: "badly", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Adverb: 'To get good grades, you must study _______.'",
                    options: [ {t: "hardly", c: false}, {t: "hard", c: true}, {t: "well", c: false}, {t: "fast", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Instruments: 'Do you play _______ drums?'",
                    options: [ {t: "a", c: false}, {t: "the", c: true}, {t: "an", c: false}, {t: "(nothing)", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Grammar: 'She can _______ (dance) very well.'",
                    options: [ {t: "dances", c: false}, {t: "dancing", c: false}, {t: "dance", c: true}, {t: "to dance", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Grammar: 'Can your sister _______ (speak) French?'",
                    options: [ {t: "speaks", c: false}, {t: "speak", c: true}, {t: "speaking", c: false}, {t: "to speak", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Adverb: 'Please answer the question _______ (quick).'",
                    options: [ {t: "quick", c: false}, {t: "quickie", c: false}, {t: "quickly", c: true}, {t: "fast", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Ability: 'He _______ ride a bike, he is only 1 year old.'",
                    options: [ {t: "can", c: false}, {t: "can't", c: true}, {t: "isn't", c: false}, {t: "don't", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Ability: 'I am a pilot. I _______ fly a plane.'",
                    options: [ {t: "can", c: true}, {t: "can't", c: false}, {t: "am", c: false}, {t: "do", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Short Answer: 'Can they dance?' 'Yes, they _______.'",
                    options: [ {t: "are", c: false}, {t: "do", c: false}, {t: "can", c: true}, {t: "can't", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Adverb: 'You speak English very _______ (good).'",
                    options: [ {t: "well", c: true}, {t: "goodly", c: false}, {t: "good", c: false}, {t: "better", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Mixed: 'Can she play _______ piano?' 'Yes, she _______.'",
                    options: [ {t: "the / can", c: true}, {t: "a / can", c: false}, {t: "the / is", c: false}, {t: "(nothing) / can", c: false} ]
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
                    text: "I can play the guitar.<br><small style='color:#0077b6'>(Eu consigo tocar guitarra.)</small>", 
                    audio: "TTS: I can play the guitar.", 
                    arrow: "↘" 
                },
                { 
                    text: "Can you speak French?<br><small style='color:#0077b6'>(Você sabe falar francês?)</small>", 
                    audio: "TTS: Can you speak French?", 
                    arrow: "↗" 
                },
                { 
                    text: "No, I can't.<br><small style='color:#0077b6'>(Não, eu não sei/consigo.)</small>", 
                    audio: "TTS: No, I can't.", 
                    arrow: "↘" 
                },
                { 
                    text: "She sings very well.<br><small style='color:#0077b6'>(Ela canta muito bem.)</small>", 
                    audio: "TTS: She sings very well.", 
                    arrow: "↘" 
                },
                { 
                    text: "He runs fast.<br><small style='color:#0077b6'>(Ele corre rápido.)</small>", 
                    audio: "TTS: He runs fast.", 
                    arrow: "↘" 
                },
                { 
                    text: "Can they play tennis?<br><small style='color:#0077b6'>(Eles sabem jogar tênis?)</small>", 
                    audio: "TTS: Can they play tennis?", 
                    arrow: "↗" 
                }
            ]
        },

        // ======================================================
        // STEP 5: LISTENING
        // ======================================================
        {
            title: "Are you following me?",
            drills: [
                // TYPE: TYPING
                {
                    type: "typing",
                    instruction: "Instruction text.",
                    audio: "TTS: Full audio text.",
                    text: "The sky is [blue] today." // [answer]
                },
                // TYPE: DROPDOWN
                {
                    type: "dropdown",
                    instruction: "Choose the correct option.",
                    audio: "audio/INSERT_ID/step5.mp3",
                    questions: [
                        { q: "Choose [Option A | Option B].", a: "Option A" }
                    ]
                },
                // TYPE: AUDIO CHOICE
                {
                    type: "audio-choice",
                    instruction: "Listen and choose.",
                    audio: "TTS: Audio content.",
                    options: [
                        { t: "Option 1", c: true },
                        { t: "Option 2", c: false }
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
                    title: "INSERT_TITLE",
                    // Use || to separate TTS backup from MP3 file if needed
                    audio: "TTS: Text content... || audio/INSERT_ID/text1.mp3",
                    body: "Long text goes here...",
                    questions: [
                        { 
                            q: "Question?", 
                            options: [ {t:"Yes", c:true}, {t:"No", c:false} ] 
                        }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 7: QUICK DRILLS
        // ======================================================
        {
            title: "Monkey see, Monkey do",
            drills: [
                // Matching
                {
                    type: "matching",
                    instruction: "Match the pairs.",
                    pairs: [
                        { left: "Word", right: "Definition", val: "1" },
                        { left: "Word2", right: "Def2", val: "2" }
                    ]
                },
                // Word Order
                {
                    type: "word-order",
                    instruction: "Unscramble.",
                    sentence: "is / name / My / John",
                    correct: "My name is John"
                },
                // Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the odd one.",
                    options: [
                        { t: "Apple", c: false },
                        { t: "Banana", c: false },
                        { t: "Car", c: true }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "English Instruction.<br><small><span style='color:#0077b6'>(Instrução em Português)</span></small>",
            example: "English Example.<br><small><span style='color:#0077b6'>(Exemplo em Português)</span></small>",
            prompts: [
                "Prompt 1. <br><span style='color:#0077b6'>(Dica 1)</span>",
                "Prompt 2."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                { 
                    term: "INSERT_TERM", 
                    definition: "English Definition.", 
                    defTrans: "Tradução da Definição", // Appears in italics on back
                    example: "English Example sentence.", 
                    audioFront: "TTS: Term",
                    audioBack: "TTS: English Example sentence." 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (New Format)
    // ======================================================
    glossary: [
        { 
            topic: "Topic Name", // Used for pagination grouping
            term: "word-key", 
            definition: "English Definition.", 
            translation: "Tradução" // Appears in glossary list
        }
    ]
});