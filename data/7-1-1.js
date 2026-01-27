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
                // Drill 1: Typing
                {
                    type: "typing",
                    instruction: "Listen to Albert talking about his talents. Type the missing words.",
                    audio: "TTS: I have many talents. I can swim very fast. I can also play the piano, but I can't dance.",
                    text: "I have many talents. I [can] swim very [fast]. I [can] also [play] the piano, but I [can't] dance."
                },
                // Drill 2: Dropdown
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation between Celine and a teacher. Choose the correct option.",
                    audio: "audio/7-1-1/step5_drill2.mp3",
                    questions: [
                        { q: "Teacher: Celine, can you [draw | dance]?", a: "draw" },
                        { q: "Celine: Yes, I can draw [well | badly].", a: "well" },
                        { q: "Teacher: Can you [paint | cook]?", a: "paint" },
                        { q: "Celine: No, I [can't | can] paint at all.", a: "can't" }
                    ]
                },
                // Drill 3: Audio Choice
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer.",
                    audio: "TTS: How well does he play football?",
                    options: [
                        { t: "He plays the guitar.", c: false },
                        { t: "He plays very well.", c: true },
                        { t: "Yes, he can.", c: false },
                        { t: "No, he can't.", c: false }
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
                    title: "Narration: The School Talent Show",
                    audio: "TTS: Today is the talent show at school. Many students are showing their skills. Sarah can sing beautifully. She is singing a pop song. Mike can play the drums very fast. Everyone is clapping. But poor Tom can't find his guitar. He wants to play rock music, but he can't without his instrument. The teacher helps him find it. Now, Tom can play too! || audio/7-1-1/p6_text1.mp3",
                    body: "Today is the talent show at school. Many students are showing their skills. Sarah can sing beautifully. She is singing a pop song. Mike can play the drums very fast. Everyone is clapping. But poor Tom can't find his guitar. He wants to play rock music, but he can't without his instrument. The teacher helps him find it. Now, Tom can play too!",
                    questions: [
                        { 
                            q: "How does Sarah sing?", 
                            options: [ {t: "Badly", c: false}, {t: "Beautifully", c: true}, {t: "Fast", c: false}, {t: "Slowly", c: false} ] 
                        },
                        { 
                            q: "What instrument does Mike play?", 
                            options: [ {t: "The guitar", c: false}, {t: "The piano", c: false}, {t: "The drums", c: true}, {t: "The violin", c: false} ] 
                        },
                        { 
                            q: "Why can't Tom play at first?", 
                            options: [ {t: "He can't find his guitar.", c: true}, {t: "He can't play well.", c: false}, {t: "He is tired.", c: false}, {t: "He is sad.", c: false} ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: Forming a Band",
                    audio: "audio/7-1-1/p6_text2.mp3",
                    body: "<b>Albert:</b> Hey Celine, let's start a rock band!<br><b>Celine:</b> That sounds fun. I can play the bass. What can you do?<br><b>Albert:</b> I can play the electric guitar.<br><b>Celine:</b> Great. Can you sing?<br><b>Albert:</b> No, I can't sing well. Can you?<br><b>Celine:</b> Yes, I can sing! We need a drummer now.<br><b>Albert:</b> My brother can play the drums. Let's ask him.",
                    questions: [
                        { 
                            q: "What instrument can Celine play?", 
                            options: [ {t: "The electric guitar", c: false}, {t: "The drums", c: false}, {t: "The bass", c: true}, {t: "The piano", c: false} ] 
                        },
                        { 
                            q: "Can Albert sing well?", 
                            options: [ {t: "Yes, he can.", c: false}, {t: "No, he can't.", c: true}, {t: "He sings beautifully.", c: false}, {t: "He loves singing.", c: false} ] 
                        },
                        { 
                            q: "Who can play the drums?", 
                            options: [ {t: "Celine", c: false}, {t: "Albert", c: false}, {t: "Albert's brother", c: true}, {t: "The teacher", c: false} ] 
                        }
                    ]
                },
                {
                    title: "Description: My Super Brother",
                    audio: "TTS: My brother, Leo, is very talented. He loves sports. He can run very fast and he plays soccer well. He is also good at music. He can play the piano and the violin. But there is one thing he can't do. He can't cook! Last week, he tried to make pasta, but it was terrible. He cooks very badly. || audio/7-1-1/p6_text3.mp3",
                    body: "My brother, Leo, is very talented. He loves sports. He can run very fast and he plays soccer well. He is also good at music. He can play the piano and the violin. But there is one thing he can't do. He can't cook! Last week, he tried to make pasta, but it was terrible. He cooks very badly.",
                    questions: [
                        { 
                            q: "What sports can Leo do?", 
                            options: [ {t: "Swim and tennis", c: false}, {t: "Run and soccer", c: true}, {t: "Volleyball and basketball", c: false}, {t: "Skateboarding and cycling", c: false} ] 
                        },
                        { 
                            q: "What instruments can he play?", 
                            options: [ {t: "Piano and violin", c: true}, {t: "Guitar and drums", c: false}, {t: "Flute and bass", c: false}, {t: "Keyboard and cello", c: false} ] 
                        },
                        { 
                            q: "What does he do badly?", 
                            options: [ {t: "Run", c: false}, {t: "Play soccer", c: false}, {t: "Cook", c: true}, {t: "Play music", c: false} ] 
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
                    instruction: "Match the activity to its correct category.<br><small style='color:#0077b6'>(Combine a atividade com sua categoria correta.)</small>",
                    pairs: [
                        { left: "Football", right: "Sport", val: "1" },
                        { left: "Violin", right: "Musical Instrument", val: "2" },
                        { left: "French", right: "Language", val: "3" },
                        { left: "Cooking", right: "Skill/Activity", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Unscramble)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "speak / I / Italian / can / .",
                    correct: "I can speak Italian ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "you / play / Can / tennis / ?",
                    correct: "Can you play tennis ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "swim / well / She / very / can / .",
                    correct: "She can swim very well ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "can't / drive / We / car / a / .",
                    correct: "We can't drive a car ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Guitar", c: false },
                        { t: "Piano", c: false },
                        { t: "Soccer", c: true }, // Sport, others are instruments
                        { t: "Drums", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Fast", c: false },
                        { t: "Well", c: false },
                        { t: "Badly", c: false },
                        { t: "Run", c: true } // Verb, others are adverbs
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Speak", c: false },
                        { t: "Read", c: false },
                        { t: "Write", c: false },
                        { t: "Bike", c: true } // Noun, others are language skill verbs
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Spanish", c: false },
                        { t: "English", c: false },
                        { t: "Japan", c: true }, // Country, others are languages
                        { t: "German", c: false }
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.<br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "I [can | well | the | can't] swim. It is easy.", a: "can" },
                        { q: "He plays [the | can | well | can't] guitar in a band.", a: "the" },
                        { q: "She cooks very [well | the | can | can't]. Her food is delicious.", a: "well" },
                        { q: "A fish [can't | can | well | the] fly.", a: "can't" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn! Write about your talents and abilities.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas: Agora é a sua vez! Escreva sobre seus talentos e habilidades.)</span></small>",
            example: "\"I can play basketball very well. I play on Saturdays. I can speak Portuguese and a little English. I can't play the piano, but I want to learn. I can also cook pasta.\"<br><br><small><span style='color:#0077b6'>(\"Eu consigo jogar basquete muito bem. Eu jogo aos sábados. Eu consigo falar português e um pouco de inglês. Eu não consigo tocar piano, mas eu quero aprender. Eu também consigo cozinhar macarrão.\")</span></small>",
            prompts: [
                "What can you do well? (I can...) <br><span style='color:#0077b6'>(O que você consegue fazer bem?)</span>",
                "What can't you do? (I can't...) <br><span style='color:#0077b6'>(O que você não consegue fazer?)</span>",
                "Can you play an instrument or a sport? Which one? <br><span style='color:#0077b6'>(Você consegue tocar um instrumento ou praticar um esporte? Qual?)</span>",
                "What languages can you speak? <br><span style='color:#0077b6'>(Quais idiomas você consegue falar?)</span>"
            ]
        },
        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Verbs)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                { 
                    term: "Can", 
                    definition: "A modal verb used to express ability or possibility.", 
                    defTrans: "Poder / Conseguir (habilidade)",
                    example: "I can swim well.", 
                    audioFront: "TTS: Can",
                    audioBack: "TTS: I can swim well." 
                },
                { 
                    term: "Sing", 
                    definition: "To make musical sounds with the voice.", 
                    defTrans: "Cantar",
                    example: "She sings in a band.", 
                    audioFront: "TTS: Sing",
                    audioBack: "TTS: She sings in a band." 
                },
                { 
                    term: "Dance", 
                    definition: "To move rhythmically to music.", 
                    defTrans: "Dançar",
                    example: "Can you dance tango?", 
                    audioFront: "TTS: Dance",
                    audioBack: "TTS: Can you dance tango?" 
                },
                { 
                    term: "Draw", 
                    definition: "To produce a picture or diagram by making lines and marks on paper.", 
                    defTrans: "Desenhar",
                    example: "He draws funny cartoons.", 
                    audioFront: "TTS: Draw",
                    audioBack: "TTS: He draws funny cartoons." 
                },
                { 
                    term: "Paint", 
                    definition: "To produce a picture using paint.", 
                    defTrans: "Pintar",
                    example: "We paint pictures in art class.", 
                    audioFront: "TTS: Paint",
                    audioBack: "TTS: We paint pictures in art class." 
                },
                { 
                    term: "Cook", 
                    definition: "To prepare food by heating it.", 
                    defTrans: "Cozinhar",
                    example: "My dad cooks dinner.", 
                    audioFront: "TTS: Cook",
                    audioBack: "TTS: My dad cooks dinner." 
                },
                { 
                    term: "Play", 
                    definition: "To perform on a musical instrument.", 
                    defTrans: "Tocar (instrumento)",
                    example: "I play the guitar.", 
                    audioFront: "TTS: Play",
                    audioBack: "TTS: I play the guitar." 
                },
                { 
                    term: "Read", 
                    definition: "To look at and comprehend the meaning of written or printed matter.", 
                    defTrans: "Ler",
                    example: "I read books every day.", 
                    audioFront: "TTS: Read",
                    audioBack: "TTS: I read books every day." 
                },
                { 
                    term: "Write", 
                    definition: "To mark letters, words, or other symbols on a surface.", 
                    defTrans: "Escrever",
                    example: "Write your name here.", 
                    audioFront: "TTS: Write",
                    audioBack: "TTS: Write your name here." 
                },
                { 
                    term: "Speak", 
                    definition: "To say words in order to convey information or express a language.", 
                    defTrans: "Falar (um idioma)",
                    example: "Do you speak English?", 
                    audioFront: "TTS: Speak",
                    audioBack: "TTS: Do you speak English?" 
                },
                { 
                    term: "Swim", 
                    definition: "To propel the body through water using limbs.", 
                    defTrans: "Nadar",
                    example: "Ducks can swim.", 
                    audioFront: "TTS: Swim",
                    audioBack: "TTS: Ducks can swim." 
                },
                { 
                    term: "Run", 
                    definition: "To move at a speed faster than walking.", 
                    defTrans: "Correr",
                    example: "Run fast to win.", 
                    audioFront: "TTS: Run",
                    audioBack: "TTS: Run fast to win." 
                },
                { 
                    term: "Ride", 
                    definition: "To sit on and control the movement of a vehicle (like a bike).", 
                    defTrans: "Andar (de bicicleta/moto/cavalo)",
                    example: "I ride my bike to school.", 
                    audioFront: "TTS: Ride",
                    audioBack: "TTS: I ride my bike to school." 
                },
                { 
                    term: "Use", 
                    definition: "To take, hold, or deploy something as a means of accomplishing a purpose.", 
                    defTrans: "Usar",
                    example: "Use a pencil to draw.", 
                    audioFront: "TTS: Use",
                    audioBack: "TTS: Use a pencil to draw." 
                },
                { 
                    term: "Help", 
                    definition: "To make it easier for someone to do something.", 
                    defTrans: "Ajudar",
                    example: "Can you help me?", 
                    audioFront: "TTS: Help",
                    audioBack: "TTS: Can you help me?" 
                },
                { 
                    term: "Give", 
                    definition: "To freely transfer the possession of something to someone.", 
                    defTrans: "Dar",
                    example: "Please give me the ball.", 
                    audioFront: "TTS: Give",
                    audioBack: "TTS: Please give me the ball." 
                },
                { 
                    term: "Solve", 
                    definition: "To find an answer to, explanation for, or means of dealing with a problem.", 
                    defTrans: "Resolver",
                    example: "I can solve the problem.", 
                    audioFront: "TTS: Solve",
                    audioBack: "TTS: I can solve the problem." 
                },
                { 
                    term: "Move", 
                    definition: "To go in a specified direction or manner; change position.", 
                    defTrans: "Mover / Mexer",
                    example: "Don't move!", 
                    audioFront: "TTS: Move",
                    audioBack: "TTS: Don't move!" 
                },
                // --- Sports ---
                { 
                    term: "Football / Soccer", 
                    definition: "A team game played with a ball between two teams of 11 players.", 
                    defTrans: "Futebol",
                    example: "Brazil loves soccer.", 
                    audioFront: "TTS: Football Soccer",
                    audioBack: "TTS: Brazil loves soccer." 
                },
                { 
                    term: "Basketball", 
                    definition: "A game played by two teams of five players who score points by throwing a ball through a netted hoop.", 
                    defTrans: "Basquete",
                    example: "He plays basketball at school.", 
                    audioFront: "TTS: Basketball",
                    audioBack: "TTS: He plays basketball at school." 
                },
                { 
                    term: "Volleyball", 
                    definition: "A game for two teams in which a large ball is hit by hand over a high net.", 
                    defTrans: "Vôlei",
                    example: "We play volleyball on the beach.", 
                    audioFront: "TTS: Volleyball",
                    audioBack: "TTS: We play volleyball on the beach." 
                },
                { 
                    term: "Tennis", 
                    definition: "A game in which two or four players strike a ball with rackets over a net.", 
                    defTrans: "Tênis",
                    example: "She needs a racket for tennis.", 
                    audioFront: "TTS: Tennis",
                    audioBack: "TTS: She needs a racket for tennis." 
                },
                { 
                    term: "Swimming (Sport)", 
                    definition: "The sport or activity of propelling oneself through water.", 
                    defTrans: "Natação",
                    example: "Swimming is good exercise.", 
                    audioFront: "TTS: Swimming",
                    audioBack: "TTS: Swimming is good exercise." 
                },
                { 
                    term: "Running (Sport)", 
                    definition: "The activity of running as a sport or for exercise.", 
                    defTrans: "Corrida",
                    example: "Usain Bolt is famous for running.", 
                    audioFront: "TTS: Running",
                    audioBack: "TTS: Usain Bolt is famous for running." 
                },
                { 
                    term: "Cycling", 
                    definition: "The sport or activity of riding a bicycle.", 
                    defTrans: "Ciclismo",
                    example: "Cycling is fun in the park.", 
                    audioFront: "TTS: Cycling",
                    audioBack: "TTS: Cycling is fun in the park." 
                },
                { 
                    term: "Gymnastics", 
                    definition: "Exercises developing or displaying physical agility and coordination.", 
                    defTrans: "Ginástica",
                    example: "She practices gymnastics.", 
                    audioFront: "TTS: Gymnastics",
                    audioBack: "TTS: She practices gymnastics." 
                },
                { 
                    term: "Skateboarding", 
                    definition: "The sport or pastime of riding on a skateboard.", 
                    defTrans: "Skate",
                    example: "He goes skateboarding with friends.", 
                    audioFront: "TTS: Skateboarding",
                    audioBack: "TTS: He goes skateboarding with friends." 
                },
                { 
                    term: "Badminton", 
                    definition: "A game with rackets in which a shuttlecock is played back and forth across a net.", 
                    defTrans: "Badminton",
                    example: "Let's play badminton.", 
                    audioFront: "TTS: Badminton",
                    audioBack: "TTS: Let's play badminton." 
                },

                // --- Musical Instruments ---
                { 
                    term: "Electric guitar", 
                    definition: "A guitar with a built-in pickup requiring an amplifier to be heard.", 
                    defTrans: "Guitarra elétrica",
                    example: "Rock stars play the electric guitar.", 
                    audioFront: "TTS: Electric guitar",
                    audioBack: "TTS: Rock stars play the electric guitar." 
                },
                { 
                    term: "Piano", 
                    definition: "A large keyboard musical instrument with a wooden case and metal strings.", 
                    defTrans: "Piano",
                    example: "The piano has black and white keys.", 
                    audioFront: "TTS: Piano",
                    audioBack: "TTS: The piano has black and white keys." 
                },
                { 
                    term: "Violin", 
                    definition: "A stringed musical instrument played with a horsehair bow.", 
                    defTrans: "Violino",
                    example: "She plays the violin well.", 
                    audioFront: "TTS: Violin",
                    audioBack: "TTS: She plays the violin well." 
                },
                { 
                    term: "Guitar", 
                    definition: "A stringed musical instrument played by plucking or strumming (usually acoustic).", 
                    defTrans: "Violão",
                    example: "He sings and plays the guitar.", 
                    audioFront: "TTS: Guitar",
                    audioBack: "TTS: He sings and plays the guitar." 
                },
                { 
                    term: "Drums", 
                    definition: "Percussion instruments sounded by being struck with sticks or the hands.", 
                    defTrans: "Bateria",
                    example: "The drums are very loud.", 
                    audioFront: "TTS: Drums",
                    audioBack: "TTS: The drums are very loud." 
                },
                { 
                    term: "Flute", 
                    definition: "A high-pitched woodwind instrument.", 
                    defTrans: "Flauta",
                    example: "She plays the flute in the band.", 
                    audioFront: "TTS: Flute",
                    audioBack: "TTS: She plays the flute in the band." 
                },
                { 
                    term: "Keyboard", 
                    definition: "A set of keys on a piano or similar electronic musical instrument.", 
                    defTrans: "Teclado",
                    example: "I have a keyboard at home.", 
                    audioFront: "TTS: Keyboard",
                    audioBack: "TTS: I have a keyboard at home." 
                },
                { 
                    term: "Bass", 
                    definition: "A stringed instrument playing in the lowest range.", 
                    defTrans: "Baixo",
                    example: "He plays the bass guitar.", 
                    audioFront: "TTS: Bass",
                    audioBack: "TTS: He plays the bass guitar." 
                },
                // --- Languages ---
                { 
                    term: "English", 
                    definition: "The language of England, the US, and many other countries.", 
                    defTrans: "Inglês",
                    example: "We are learning English.", 
                    audioFront: "TTS: English",
                    audioBack: "TTS: We are learning English." 
                },
                { 
                    term: "Portuguese", 
                    definition: "The language of Portugal and Brazil.", 
                    defTrans: "Português",
                    example: "I speak Portuguese.", 
                    audioFront: "TTS: Portuguese",
                    audioBack: "TTS: I speak Portuguese." 
                },
                { 
                    term: "Spanish", 
                    definition: "The language of Spain and much of Central and South America.", 
                    defTrans: "Espanhol",
                    example: "Hola is Spanish.", 
                    audioFront: "TTS: Spanish",
                    audioBack: "TTS: Hola is Spanish." 
                },
                { 
                    term: "French", 
                    definition: "The language of France.", 
                    defTrans: "Francês",
                    example: "She speaks French.", 
                    audioFront: "TTS: French",
                    audioBack: "TTS: She speaks French." 
                },
                { 
                    term: "German", 
                    definition: "The language of Germany, Austria, and parts of Switzerland.", 
                    defTrans: "Alemão",
                    example: "He is learning German.", 
                    audioFront: "TTS: German",
                    audioBack: "TTS: He is learning German." 
                },
                { 
                    term: "Italian", 
                    definition: "The language of Italy.", 
                    defTrans: "Italiano",
                    example: "Italian is similar to Portuguese.", 
                    audioFront: "TTS: Italian",
                    audioBack: "TTS: Italian is similar to Portuguese." 
                },
                { 
                    term: "Japanese", 
                    definition: "The language of Japan.", 
                    defTrans: "Japonês",
                    example: "Anime is in Japanese.", 
                    audioFront: "TTS: Japanese",
                    audioBack: "TTS: Anime is in Japanese." 
                },
                { 
                    term: "Chinese", 
                    definition: "The language of China.", 
                    defTrans: "Chinês",
                    example: "He speaks Chinese.", 
                    audioFront: "TTS: Chinese",
                    audioBack: "TTS: He speaks Chinese." 
                },
                { 
                    term: "Korean", 
                    definition: "The language of Korea.", 
                    defTrans: "Coreano",
                    example: "K-pop is in Korean.", 
                    audioFront: "TTS: Korean",
                    audioBack: "TTS: K-pop is in Korean." 
                },

                // --- Phrases & Adverbs ---
                { 
                    term: "I can...", 
                    definition: "Statement used to express ability.", 
                    defTrans: "Eu posso / Eu consigo...",
                    example: "I can jump high.", 
                    audioFront: "TTS: I can",
                    audioBack: "TTS: I can jump high." 
                },
                { 
                    term: "I can't...", 
                    definition: "Statement used to express inability.", 
                    defTrans: "Eu não posso / Eu não consigo...",
                    example: "I can't speak Italian.", 
                    audioFront: "TTS: I can't",
                    audioBack: "TTS: I can't speak Italian." 
                },
                { 
                    term: "Can you...?", 
                    definition: "Question used to ask about someone's ability.", 
                    defTrans: "Você pode / Você consegue...?",
                    example: "Can you help me?", 
                    audioFront: "TTS: Can you",
                    audioBack: "TTS: Can you help me?" 
                },
                { 
                    term: "How well...?", 
                    definition: "Question used to ask about the degree of quality or skill.", 
                    defTrans: "Quão bem...?",
                    example: "How well do you cook?", 
                    audioFront: "TTS: How well",
                    audioBack: "TTS: How well do you cook?" 
                },
                { 
                    term: "Very well", 
                    definition: "In a very good or satisfactory way.", 
                    defTrans: "Muito bem",
                    example: "She sings very well.", 
                    audioFront: "TTS: Very well",
                    audioBack: "TTS: She sings very well." 
                },
                { 
                    term: "Well", 
                    definition: "In a good or satisfactory way.", 
                    defTrans: "Bem",
                    example: "He plays tennis well.", 
                    audioFront: "TTS: Well",
                    audioBack: "TTS: He plays tennis well." 
                },
                { 
                    term: "Badly", 
                    definition: "In an unsatisfactory, inadequate, or unsuccessful way.", 
                    defTrans: "Mal",
                    example: "I draw badly.", 
                    audioFront: "TTS: Badly",
                    audioBack: "TTS: I draw badly." 
                },
                { 
                    term: "Fast", 
                    definition: "At high speed.", 
                    defTrans: "Rápido",
                    example: "Don't run so fast.", 
                    audioFront: "TTS: Fast",
                    audioBack: "TTS: Don't run so fast." 
                },
                { 
                    term: "Slowly", 
                    definition: "At a slow speed; not quickly.", 
                    defTrans: "Lentamente",
                    example: "Please speak slowly.", 
                    audioFront: "TTS: Slowly",
                    audioBack: "TTS: Please speak slowly." 
                },
                { 
                    term: "Easily", 
                    definition: "Without difficulty or effort.", 
                    defTrans: "Facilmente",
                    example: "I can do it easily.", 
                    audioFront: "TTS: Easily",
                    audioBack: "TTS: I can do it easily." 
                },
                { 
                    term: "Carefully", 
                    definition: "In a way that avoids harm or errors; cautiously.", 
                    defTrans: "Cuidadosamente",
                    example: "Listen carefully.", 
                    audioFront: "TTS: Carefully",
                    audioBack: "TTS: Listen carefully." 
                },
                { 
                    term: "At all", 
                    definition: "In any way; to any extent (used with negatives).", 
                    defTrans: "De jeito nenhum / nem um pouco",
                    example: "I can't dance at all.", 
                    audioFront: "TTS: At all",
                    audioBack: "TTS: I can't dance at all." 
                },
                { 
                    term: "CAN (Affirmative)", 
                    definition: "Using the modal verb 'can' to state ability.", 
                    defTrans: "Sujeito + CAN + Verbo (Base)",
                    example: "She can swim.", 
                    audioFront: "TTS: CAN Affirmative",
                    audioBack: "TTS: She can swim." 
                },
                { 
                    term: "CAN (Negative)", 
                    definition: "Using 'cannot' or 'can't' to state lack of ability.", 
                    defTrans: "Sujeito + CAN'T + Verbo (Base)",
                    example: "He can't fly.", 
                    audioFront: "TTS: CAN Negative",
                    audioBack: "TTS: He can't fly." 
                },
                { 
                    term: "CAN (Interrogative)", 
                    definition: "Using 'can' at the start of a sentence to ask about ability.", 
                    defTrans: "CAN + Sujeito + Verbo...?",
                    example: "Can they play?", 
                    audioFront: "TTS: CAN Interrogative",
                    audioBack: "TTS: Can they play?" 
                },
                { 
                    term: "Adverbs of Manner (-ly)", 
                    definition: "Words that describe how an action is performed.", 
                    defTrans: "Adjetivo + ly (Quick -> Quickly)",
                    example: "He walks quickly.", 
                    audioFront: "TTS: Adverbs of Manner",
                    audioBack: "TTS: He walks quickly." 
                },
                { 
                    term: "Irregular Adverbs (Good/Fast)", 
                    definition: "Adverbs that do not follow the -ly rule.", 
                    defTrans: "Good -> Well, Fast -> Fast",
                    example: "She plays well.", 
                    audioFront: "TTS: Irregular Adverbs",
                    audioBack: "TTS: She plays well." 
                },
                { 
                    term: "Play + THE + Instrument", 
                    definition: "The rule of using 'the' before musical instruments.", 
                    defTrans: "Usar 'THE' com instrumentos",
                    example: "I play the piano.", 
                    audioFront: "TTS: Play THE Instrument",
                    audioBack: "TTS: I play the piano." 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Part 1: Context & Verbs A-L)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "can", 
            definition: "A modal verb used to express ability or possibility.", 
            translation: "Poder / Conseguir" 
        },
        { 
            topic: "Context", 
            term: "play", 
            definition: "To perform on a musical instrument or engage in a sport.", 
            translation: "Tocar / Jogar" 
        },
        { 
            topic: "Context", 
            term: "guitar", 
            definition: "A stringed musical instrument played with the fingers or a plectrum.", 
            translation: "Violão" 
        },
        { 
            topic: "Context", 
            term: "cant", 
            definition: "The negative form of can; used to show a lack of ability.", 
            translation: "Não poder / Não conseguir" 
        },
        { 
            topic: "Context", 
            term: "well", 
            definition: "In a good or satisfactory way.", 
            translation: "Bem" 
        },
        { 
            topic: "Context", 
            term: "at-all", 
            definition: "In any way; to any extent (used in negative sentences for emphasis).", 
            translation: "De jeito nenhum / Nem um pouco" 
        },
        { 
            topic: "Context", 
            term: "do", 
            definition: "To perform an action or activity.", 
            translation: "Fazer" 
        },
        { 
            topic: "Context", 
            term: "skate", 
            definition: "To move on roller skates or a skateboard.", 
            translation: "Andar de skate / patinar" 
        },
        { 
            topic: "Context", 
            term: "fast", 
            definition: "Moving or capable of moving at high speed.", 
            translation: "Rápido / Veloz" 
        },
        { 
            topic: "Context", 
            term: "french", 
            definition: "The language of France.", 
            translation: "Francês" 
        },
        { 
            topic: "Context", 
            term: "help", 
            definition: "To make it easier for someone to do something.", 
            translation: "Ajudar" 
        },
        { 
            topic: "Context", 
            term: "homework", 
            definition: "Schoolwork that a student is given to do at home.", 
            translation: "Lição de casa" 
        },
        { 
            topic: "Context", 
            term: "teach", 
            definition: "To impart knowledge or to show someone how to do something.", 
            translation: "Ensinar" 
        },
        { 
            topic: "Context", 
            term: "learn", 
            definition: "To gain or acquire knowledge or skill in something.", 
            translation: "Aprender" 
        },

        // --- TOPIC 2: VERBS (A-L) ---
        { 
            topic: "Verbs (A-L)", 
            term: "Cook", 
            definition: "To prepare food by heating it.", 
            translation: "Cozinhar" 
        },
        { 
            topic: "Verbs (A-L)", 
            term: "Dance", 
            definition: "To move rhythmically to music, typically following a set steps.", 
            translation: "Dançar" 
        },
        { 
            topic: "Verbs (A-L)", 
            term: "Draw", 
            definition: "To produce a picture or diagram by making lines and marks on paper.", 
            translation: "Desenhar" 
        },
        { 
            topic: "Verbs (A-L)", 
            term: "Give", 
            definition: "To freely transfer the possession of something to someone.", 
            translation: "Dar" 
        },
        { 
            topic: "Verbs (A-L)", 
            term: "Help", 
            definition: "To provide someone with something that makes it easier to do a task.", 
            translation: "Ajudar" 
        },
        // --- TOPIC 3: VERBS (M-W) ---
        { 
            topic: "Verbs (M-W)", 
            term: "Move", 
            definition: "To go in a specified direction or manner; change position.", 
            translation: "Mover / Mexer" 
        },
        { 
            topic: "Verbs (M-W)", 
            term: "Paint", 
            definition: "To produce a picture or decorate a surface using paint.", 
            translation: "Pintar" 
        },
        { 
            topic: "Verbs (M-W)", 
            term: "Read", 
            definition: "To look at and comprehend the meaning of written or printed matter.", 
            translation: "Ler" 
        },
        { 
            topic: "Verbs (M-W)", 
            term: "Ride", 
            definition: "To sit on and control the movement of an animal or a vehicle like a bicycle.", 
            translation: "Andar (de bicicleta/moto/cavalo)" 
        },
        { 
            topic: "Verbs (M-W)", 
            term: "Sing", 
            definition: "To make musical sounds with the voice, especially a tune with words.", 
            translation: "Cantar" 
        },
        { 
            topic: "Verbs (M-W)", 
            term: "Solve", 
            definition: "To find an answer to, explanation for, or means of dealing with a problem.", 
            translation: "Resolver" 
        },
        { 
            topic: "Verbs (M-W)", 
            term: "Speak", 
            definition: "To say words in order to convey information, an opinion, or a feeling.", 
            translation: "Falar" 
        },
        { 
            topic: "Verbs (M-W)", 
            term: "Swim", 
            definition: "To propel the body through water by using the limbs.", 
            translation: "Nadar" 
        },
        { 
            topic: "Verbs (M-W)", 
            term: "Use", 
            definition: "To take, hold, or deploy something as a means of accomplishing a purpose.", 
            translation: "Usar" 
        },
        { 
            topic: "Verbs (M-W)", 
            term: "Write", 
            definition: "To mark letters, words, or other symbols on a surface with a pen or pencil.", 
            translation: "Escrever" 
        },

        // --- TOPIC 4: SPORTS ---
        { 
            topic: "Sports", 
            term: "Football / Soccer", 
            definition: "A team game played with a ball between two teams of 11 players.", 
            translation: "Futebol" 
        },
        { 
            topic: "Sports", 
            term: "Basketball", 
            definition: "A game played by two teams who score points by throwing a ball through a hoop.", 
            translation: "Basquete" 
        },
        { 
            topic: "Sports", 
            term: "Volleyball", 
            definition: "A game for two teams in which a large ball is hit by hand over a high net.", 
            translation: "Vôlei" 
        },
        { 
            topic: "Sports", 
            term: "Tennis", 
            definition: "A game in which players strike a ball with rackets over a net.", 
            translation: "Tênis" 
        },
        { 
            topic: "Sports", 
            term: "Swimming", 
            definition: "The sport or activity of propelling oneself through water.", 
            translation: "Natação" 
        },
        { 
            topic: "Sports", 
            term: "Running", 
            definition: "The activity of running as a sport or for exercise.", 
            translation: "Corrida" 
        },
        { 
            topic: "Sports", 
            term: "Cycling", 
            definition: "The sport or activity of riding a bicycle.", 
            translation: "Ciclismo" 
        },
        { 
            topic: "Sports", 
            term: "Gymnastics", 
            definition: "Exercises developing or displaying physical agility and coordination.", 
            translation: "Ginástica" 
        },
        { 
            topic: "Sports", 
            term: "Skateboarding", 
            definition: "The sport or pastime of riding on a skateboard.", 
            translation: "Skate" 
        },
        { 
            topic: "Sports", 
            term: "Badminton", 
            definition: "A game with rackets in which a shuttlecock is played across a net.", 
            translation: "Badminton" 
        },
        // --- TOPIC 5: MUSICAL INSTRUMENTS ---
        { 
            topic: "Musical Instruments", 
            term: "Electric guitar", 
            definition: "A guitar with a built-in pickup requiring an amplifier to be heard.", 
            translation: "Guitarra elétrica" 
        },
        { 
            topic: "Musical Instruments", 
            term: "Piano", 
            definition: "A large keyboard musical instrument with a wooden case enclosing a soundboard and metal strings.", 
            translation: "Piano" 
        },
        { 
            topic: "Musical Instruments", 
            term: "Violin", 
            definition: "A stringed musical instrument of treble pitch, played with a horsehair bow.", 
            translation: "Violino" 
        },
        { 
            topic: "Musical Instruments", 
            term: "Guitar", 
            definition: "A stringed musical instrument played by plucking or strumming (usually acoustic).", 
            translation: "Violão" 
        },
        { 
            topic: "Musical Instruments", 
            term: "Drums", 
            definition: "Percussion instruments sounded by being struck with sticks or the hands.", 
            translation: "Bateria" 
        },
        { 
            topic: "Musical Instruments", 
            term: "Flute", 
            definition: "A high-pitched woodwind instrument.", 
            translation: "Flauta" 
        },
        { 
            topic: "Musical Instruments", 
            term: "Keyboard", 
            definition: "A set of keys on a piano or similar musical instrument; an electronic musical instrument.", 
            translation: "Teclado" 
        },
        { 
            topic: "Musical Instruments", 
            term: "Bass", 
            definition: "A stringed instrument playing in the lowest range.", 
            translation: "Baixo" 
        },

        // --- TOPIC 6: LANGUAGES ---
        { 
            topic: "Languages", 
            term: "English", 
            definition: "The language of England, the US, and many other countries.", 
            translation: "Inglês" 
        },
        { 
            topic: "Languages", 
            term: "Portuguese", 
            definition: "The language of Portugal and Brazil.", 
            translation: "Português" 
        },
        { 
            topic: "Languages", 
            term: "Spanish", 
            definition: "The language of Spain and much of Central and South America.", 
            translation: "Espanhol" 
        },
        { 
            topic: "Languages", 
            term: "French", 
            definition: "The language of France.", 
            translation: "Francês" 
        },
        { 
            topic: "Languages", 
            term: "German", 
            definition: "The language of Germany, Austria, and parts of Switzerland.", 
            translation: "Alemão" 
        },
        { 
            topic: "Languages", 
            term: "Italian", 
            definition: "The language of Italy.", 
            translation: "Italiano" 
        },
        { 
            topic: "Languages", 
            term: "Japanese", 
            definition: "The language of Japan.", 
            translation: "Japonês" 
        },
        { 
            topic: "Languages", 
            term: "Chinese", 
            definition: "The language of China.", 
            translation: "Chinês" 
        },
        { 
            topic: "Languages", 
            term: "Korean", 
            definition: "The language of Korea.", 
            translation: "Coreano" 
        },
        // --- TOPIC 7: PHRASES & ADVERBS ---
        { 
            topic: "Phrases & Adverbs", 
            term: "Slowly", 
            definition: "At a slow speed; not quickly.", 
            translation: "Lentamente" 
        },
        { 
            topic: "Phrases & Adverbs", 
            term: "Easily", 
            definition: "Without difficulty or effort.", 
            translation: "Facilmente" 
        },
        { 
            topic: "Phrases & Adverbs", 
            term: "Carefully", 
            definition: "In a way that avoids harm or errors; cautiously.", 
            translation: "Cuidadosamente" 
        },
        { 
            topic: "Phrases & Adverbs", 
            term: "Badly", 
            definition: "In an unsatisfactory, inadequate, or unsuccessful way.", 
            translation: "Mal" 
        },
        { 
            topic: "Phrases & Adverbs", 
            term: "Fast", 
            definition: "At high speed.", 
            translation: "Rápido / Rapidamente" 
        },
        { 
            topic: "Phrases & Adverbs", 
            term: "Well", 
            definition: "In a good or satisfactory way.", 
            translation: "Bem" 
        },
        { 
            topic: "Phrases & Adverbs", 
            term: "Very well", 
            definition: "In a very good or satisfactory way.", 
            translation: "Muito bem" 
        },
        { 
            topic: "Phrases & Adverbs", 
            term: "At all", 
            definition: "In any way; to any extent (used with negatives).", 
            translation: "De jeito nenhum / Nem um pouco" 
        },

        // --- TOPIC 8: GRAMMAR POINTS ---
        { 
            topic: "Grammar Summary", 
            term: "CAN (Affirmative)", 
            definition: "Using the modal verb 'can' to state ability.", 
            translation: "CAN (Afirmativa - Poder/Conseguir)" 
        },
        { 
            topic: "Grammar Summary", 
            term: "CAN (Negative)", 
            definition: "Using 'cannot' or 'can't' to state lack of ability.", 
            translation: "CAN (Negativa - Não poder/conseguir)" 
        },
        { 
            topic: "Grammar Summary", 
            term: "CAN (Interrogative)", 
            definition: "Using 'can' at the start of a sentence to ask about ability.", 
            translation: "CAN (Interrogativa)" 
        },
        { 
            topic: "Grammar Summary", 
            term: "Adverbs of Manner", 
            definition: "Words that describe how an action is performed (usually ending in -ly).", 
            translation: "Advérbios de Modo" 
        },
        { 
            topic: "Grammar Summary", 
            term: "Play + THE + Instrument", 
            definition: "The rule of using 'the' before the names of musical instruments.", 
            translation: "Tocar + THE + Instrumento" 
        }
    ] // Closes glossary array
}); // Closes initLesson object