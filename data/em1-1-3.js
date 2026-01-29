/**
 * REACH English - LESSON DATA em1-1-3
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em1-1-3", 
    grade: "High School 1st Grade",       
    bimester: "1",   
    chapter: "3",    
    chapterTitle: "Innovation: Past Breakthroughs", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Talk about innovation, creativity, and past breakthroughs.<br>• Use verbs related to inventing and discovering.<br>• Identify and use false cognates (words that look like Portuguese but aren't!).<br>• Use the Simple Past for finished actions.<br>• Use the Past Continuous for actions in progress in the past.<br>• Use \"Used to\" to talk about past habits.",
            welcome: "Hello, my friend! I'm Mr. D!<br>Welcome to the world of innovation! Have you ever thought about how the things we use today were created? It took a lot of creativity and thinking \"outside the box\"! Today, we will travel back in time to talk about the breakthroughs that changed history. We'll learn the words for invention and discovery, and we'll master the grammar to tell stories about the past. We'll see how to describe what happened, what was happening, and what used to happen. Let's activate our creativity!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about innovation, creativity, and past breakthroughs. Use verbs related to inventing and discovering. Identify and use false cognates. Use the Simple Past for finished actions. Use the Past Continuous for actions in progress in the past. Use Used to to talk about past habits.",
                welcome: "TTS: Hello, my friend! I'm Mr. D! Welcome to the world of innovation! Have you ever thought about how the things we use today were created? It took a lot of creativity and thinking outside the box! Today, we will travel back in time to talk about the breakthroughs that changed history. We'll learn the words for invention and discovery, and we'll master the grammar to tell stories about the past. We'll see how to describe what happened, what was happening, and what used to happen. Let's activate our creativity!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of typing on a keyboard and a \"ping\" sound from a computer. Albert and Celine are looking at a screen in the computer lab.", 
            contextAudio: "audio/em1-1-3/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "What were you [doing](tooltip:doing) last night, Celine? You didn't [answer](tooltip:answer) your phone!" 
                },
                { 
                    speaker: "Celine", 
                    text: "Sorry! I was [experimenting](tooltip:experimenting) with a new [design](tooltip:design) software. I wanted to [create](tooltip:create) a [prototype](tooltip:prototype) for my project." 
                },
                { 
                    speaker: "Albert", 
                    text: "Cool. Last month, we had an amazing [breakthrough](tooltip:breakthrough) in my engineering class. We [designed](tooltip:design) better options to [collect](tooltip:collect) water." 
                },
                { 
                    speaker: "Celine", 
                    text: "Really? That's great! The power of [imagination](tooltip:imagination) may lead you to make even more [breakthroughs](tooltip:breakthrough). I [used to think](tooltip:used-to-think) engineering was boring, but now I see it's all about [creativity](tooltip:creativity)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Exactly. We [used to believe](tooltip:used-to-believe) only artists were creative, but scientists need it too." 
                },
                { 
                    speaker: "Celine", 
                    text: "True. [Discovering](tooltip:discovering) new solutions requires [thinking outside the box](tooltip:thinking-outside-the-box)! By the way, did you attend the [lecture](tooltip:lecture) about AI yesterday?" 
                },
                { 
                    speaker: "Albert", 
                    text: "No, I missed it. Was it good?" 
                },
                { 
                    speaker: "Celine", 
                    text: "Yes, the speaker was very [educated](tooltip:educated)." 
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
                    title: "Innovation & Creativity",
                    audio: "TTS: Innovation. Creativity. Invention. Idea. Breakthrough. Design. Prototype. Experiment. Solution. Discovery. Imagination. Challenge. Resourcefulness. Progress.",
                    items: [
                        { term: "Innovation", trans: "Inovação" },
                        { term: "Creativity", trans: "Criatividade" },
                        { term: "Invention", trans: "Invenção" },
                        { term: "Idea", trans: "Ideia" },
                        { term: "Breakthrough", trans: "Avanço Significativo" },
                        { term: "Design", trans: "Design / Projeto" },
                        { term: "Prototype", trans: "Protótipo" },
                        { term: "Experiment", trans: "Experimento" },
                        { term: "Solution", trans: "Solução" },
                        { term: "Discovery", trans: "Descoberta" },
                        { term: "Imagination", trans: "Imaginação" },
                        { term: "Challenge", trans: "Desafio" },
                        { term: "Resourcefulness", trans: "Engenhosidade / Iniciativa" },
                        { term: "Progress", trans: "Progresso" }
                    ]
                },
                {
                    title: "False Cognates",
                    audio: "TTS: Fabric. College. Educated. Lecture. Prejudice.",
                    items: [
                        { term: "Fabric", trans: "Tecido (NOT fábrica)" },
                        { term: "College", trans: "Faculdade (NOT colégio)" },
                        { term: "Educated", trans: "Culto / Instruído (NOT apenas educado/polido)" },
                        { term: "Lecture", trans: "Palestra (NOT leitura)" },
                        { term: "Prejudice", trans: "Preconceito (NOT prejuízo)" }
                    ]
                },
                {
                    title: "Verbs of Action & Change",
                    audio: "TTS: To spark. To discover. To innovate. To experiment. To think.",
                    items: [
                        { term: "To spark", trans: "Desencadear / Provocar (uma ideia)" },
                        { term: "To discover", trans: "Descobrir" },
                        { term: "To innovate", trans: "Inovar" },
                        { term: "To experiment", trans: "Experimentar (testar)" },
                        { term: "To think", trans: "Pensar" }
                    ]
                }
            ], // This closes the areas array

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Innovation & Creativity",
                    audio: "TTS: Innovation is key to solving modern problems. Painting requires a lot of creativity. The telephone was a great invention. I have a great idea for a new app. Scientists made a breakthrough in cancer research. I like the design of this chair. They built a prototype to test the engine. The experiment was a success. We need to find a solution quickly. The discovery of fire changed human history. Use your imagination to write the story. Climbing the mountain was a big challenge. Her resourcefulness helped us fix the car without tools. We are making good progress on the project.",
                    items: [
                        { term: "Innovation", sent: "Innovation is key to solving modern problems.", trans: "<span style='color:#0077b6'>Inovação é a chave para resolver problemas modernos.</span>" },
                        { term: "Creativity", sent: "Painting requires a lot of creativity.", trans: "<span style='color:#0077b6'>Pintar requer muita criatividade.</span>" },
                        { term: "Invention", sent: "The telephone was a great invention.", trans: "<span style='color:#0077b6'>O telefone foi uma grande invenção.</span>" },
                        { term: "Idea", sent: "I have a great idea for a new app.", trans: "<span style='color:#0077b6'>Eu tenho uma ótima ideia para um novo aplicativo.</span>" },
                        { term: "Breakthrough", sent: "Scientists made a breakthrough in cancer research.", trans: "<span style='color:#0077b6'>Cientistas fizeram um avanço significativo na pesquisa do câncer.</span>" },
                        { term: "Design", sent: "I like the design of this chair.", trans: "<span style='color:#0077b6'>Eu gosto do design desta cadeira.</span>" },
                        { term: "Prototype", sent: "They built a prototype to test the engine.", trans: "<span style='color:#0077b6'>Eles construíram um protótipo para testar o motor.</span>" },
                        { term: "Experiment", sent: "The experiment was a success.", trans: "<span style='color:#0077b6'>O experimento foi um sucesso.</span>" },
                        { term: "Solution", sent: "We need to find a solution quickly.", trans: "<span style='color:#0077b6'>Precisamos encontrar uma solução rapidamente.</span>" },
                        { term: "Discovery", sent: "The discovery of fire changed human history.", trans: "<span style='color:#0077b6'>A descoberta do fogo mudou a história humana.</span>" },
                        { term: "Imagination", sent: "Use your imagination to write the story.", trans: "<span style='color:#0077b6'>Use sua imaginação para escrever a história.</span>" },
                        { term: "Challenge", sent: "Climbing the mountain was a big challenge.", trans: "<span style='color:#0077b6'>Escalar a montanha foi um grande desafio.</span>" },
                        { term: "Resourcefulness", sent: "Her resourcefulness helped us fix the car without tools.", trans: "<span style='color:#0077b6'>A engenhosidade dela nos ajudou a consertar o carro sem ferramentas.</span>" },
                        { term: "Progress", sent: "We are making good progress on the project.", trans: "<span style='color:#0077b6'>Estamos fazendo um bom progresso no projeto.</span>" }
                    ]
                },
                {
                    title: "False Cognates",
                    audio: "TTS: This dress is made of soft fabric. My sister goes to college in São Paulo. He is a very educated man. The professor gave an interesting lecture. We must fight against prejudice.",
                    items: [
                        { term: "Fabric", sent: "This dress is made of soft fabric.", trans: "<span style='color:#0077b6'>Este vestido é feito de tecido macio.</span>" },
                        { term: "College", sent: "My sister goes to college in São Paulo.", trans: "<span style='color:#0077b6'>Minha irmã vai para a faculdade em São Paulo.</span>" },
                        { term: "Educated", sent: "He is a very educated man.", trans: "<span style='color:#0077b6'>Ele é um homem muito culto.</span>" },
                        { term: "Lecture", sent: "The professor gave an interesting lecture.", trans: "<span style='color:#0077b6'>O professor deu uma palestra interessante.</span>" },
                        { term: "Prejudice", sent: "We must fight against prejudice.", trans: "<span style='color:#0077b6'>Devemos lutar contra o preconceito.</span>" }
                    ]
                },
                {
                    title: "Verbs (Action & Change)",
                    audio: "TTS: One question can spark a great debate. Columbus didn't discover America first. Companies need to innovate to survive. Don't be afraid to experiment with new colors. I used to think math was boring.",
                    items: [
                        { term: "To spark", sent: "One question can spark a great debate.", trans: "<span style='color:#0077b6'>Uma pergunta pode desencadear um grande debate.</span>" },
                        { term: "To discover", sent: "Columbus didn't discover America first.", trans: "<span style='color:#0077b6'>Colombo não descobriu a América primeiro.</span>" },
                        { term: "To innovate", sent: "Companies need to innovate to survive.", trans: "<span style='color:#0077b6'>Empresas precisam inovar para sobreviver.</span>" },
                        { term: "To experiment", sent: "Don't be afraid to experiment with new colors.", trans: "<span style='color:#0077b6'>Não tenha medo de experimentar com novas cores.</span>" },
                        { term: "To think", sent: "I used to think math was boring.", trans: "<span style='color:#0077b6'>Eu costumava pensar que matemática era chata.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills
            drills: [
                {
                    type: "mcq",
                    q: "Choose the correct word for 'Avanço Significativo':",
                    options: [
                        { t: "Idea", c: false },
                        { t: "Breakthrough", c: true },
                        { t: "Design", c: false },
                        { t: "Progress", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What is the correct translation for 'College'?",
                    options: [
                        { t: "Colégio", c: false },
                        { t: "Escola", c: false },
                        { t: "Faculdade", c: true },
                        { t: "Colega", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'We need to _____ new solutions.'",
                    options: [
                        { t: "discover", c: true },
                        { t: "fabric", c: false },
                        { t: "lecture", c: false },
                        { t: "educated", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'Using your mind to create images' is:",
                    options: [
                        { t: "Reality", c: false },
                        { t: "Imagination", c: true },
                        { t: "Prototype", c: false },
                        { t: "Experiment", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'Fabric' means:",
                    options: [
                        { t: "Fábrica", c: false },
                        { t: "Tijolo", c: false },
                        { t: "Tecido", c: true },
                        { t: "Fabricar", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A first model of something new is a:",
                    options: [
                        { t: "Prototype", c: true },
                        { t: "Discovery", c: false },
                        { t: "Challenge", c: false },
                        { t: "Prejudice", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A formal talk given to an audience is a:",
                    options: [
                        { t: "Lecture", c: true },
                        { t: "Reading", c: false },
                        { t: "Lesson", c: false },
                        { t: "Chat", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'To try something new to see what happens' is to:",
                    options: [
                        { t: "Innovate", c: false },
                        { t: "Experiment", c: true },
                        { t: "Think", c: false },
                        { t: "Spark", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The answer to a problem is a:",
                    options: [
                        { t: "Challenge", c: false },
                        { t: "Solution", c: true },
                        { t: "Design", c: false },
                        { t: "College", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Someone who has learned a lot and read many books is:",
                    options: [
                        { t: "Educated", c: true },
                        { t: "Polite", c: false },
                        { t: "Rich", c: false },
                        { t: "Creative", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'Prejudice' translates to:",
                    options: [
                        { t: "Prejuízo", c: false },
                        { t: "Preconceito", c: true },
                        { t: "Preço", c: false },
                        { t: "Orgulho", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'Resourcefulness' is related to:",
                    options: [
                        { t: "Having a lot of money.", c: false },
                        { t: "Solving problems with what you have.", c: true },
                        { t: "Reading books.", c: false },
                        { t: "Building factories.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'To spark' an idea means to:",
                    options: [
                        { t: "Stop it.", c: false },
                        { t: "Start or trigger it.", c: true },
                        { t: "Forget it.", c: false },
                        { t: "Write it.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A difficult task is a:",
                    options: [
                        { t: "Challenge", c: true },
                        { t: "Solution", c: false },
                        { t: "Comfort", c: false },
                        { t: "Fabric", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'Moving forward or improving' is:",
                    options: [
                        { t: "Progress", c: true },
                        { t: "Regress", c: false },
                        { t: "Past", c: false },
                        { t: "Stop", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'A new method or idea' is:",
                    options: [
                        { t: "Innovation", c: true },
                        { t: "Tradition", c: false },
                        { t: "History", c: false },
                        { t: "Copy", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "'To create something that didn't exist before' is to:",
                    options: [
                        { t: "Invent", c: true },
                        { t: "Discover", c: false },
                        { t: "Find", c: false },
                        { t: "Buy", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "In 'she works in a textile factory,' textile refers to:",
                    options: [
                        { t: "College", c: false },
                        { t: "Fabric", c: true },
                        { t: "Lecture", c: false },
                        { t: "Design", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A plan or drawing produced to show the look of something:",
                    options: [
                        { t: "Design", c: true },
                        { t: "Accident", c: false },
                        { t: "Luck", c: false },
                        { t: "Mess", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Thinking differently from others is often called thinking:",
                    options: [
                        { t: "in the box", c: false },
                        { t: "outside the box", c: true },
                        { t: "under the box", c: false },
                        { t: "without a box", c: false }
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
                    title: "Simple Past",
                    audio: "TTS: We use the Simple Past to talk about actions that started and finished at a specific time in the past. She created a prototype. They went to the lab. I didn't know the answer. Did you see the news?",
                    explanation: "We use the Simple Past to talk about actions that started and finished at a specific time in the past. It focuses on the completed event.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos o Passado Simples para falar de ações que começaram e terminaram em um momento específico no passado. O foco é no evento concluído.)</span>",
                    samples: [
                        { en: "She created a prototype.", pt: "<span style='color:#0077b6'>Ela criou um protótipo.</span>" },
                        { en: "They went to the lab.", pt: "<span style='color:#0077b6'>Eles foram para o laboratório.</span>" },
                        { en: "I didn't know the answer.", pt: "<span style='color:#0077b6'>Eu não sabia a resposta.</span>" },
                        { en: "Did you see the news?", pt: "<span style='color:#0077b6'>Você viu as notícias?</span>" }
                    ]
                },
                {
                    title: "Past Continuous",
                    audio: "TTS: We use the Past Continuous to describe actions that were in progress at a specific moment in the past. I was studying at 8 PM. They were testing the machine. She wasn't listening. Were you sleeping?",
                    explanation: "We use the Past Continuous to describe actions that were in progress at a specific moment in the past. It emphasizes the duration of the action.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos o Passado Contínuo para descrever ações que estavam em progresso em um momento específico no passado. Enfatiza a duração da ação.)</span>",
                    samples: [
                        { en: "I was studying at 8 PM.", pt: "<span style='color:#0077b6'>Eu estava estudando às 20h.</span>" },
                        { en: "They were testing the machine.", pt: "<span style='color:#0077b6'>Eles estavam testando a máquina.</span>" },
                        { en: "She wasn't listening.", pt: "<span style='color:#0077b6'>Ela não estava ouvindo.</span>" },
                        { en: "Were you sleeping?", pt: "<span style='color:#0077b6'>Você estava dormindo?</span>" }
                    ]
                },
                {
                    title: "Past Simple vs. Continuous",
                    audio: "TTS: We often use both tenses together. The Past Continuous sets the scene, and the Simple Past tells what interrupted it. I was reading when the lights went out. He arrived while we were eating.",
                    explanation: "We use both tenses together to tell a story. The Past Continuous is the long action (the scene), and the Simple Past is the short action that interrupts it.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos ambos os tempos juntos para contar uma história. O Passado Contínuo é a ação longa e o Passado Simples é a ação curta que a interrompe.)</span>",
                    samples: [
                        { en: "I was reading when the lights went out.", pt: "<span style='color:#0077b6'>Eu estava lendo quando as luzes apagaram.</span>" },
                        { en: "He arrived while we were eating.", pt: "<span style='color:#0077b6'>Ele chegou enquanto estávamos comendo.</span>" },
                        { en: "She was drawing while he was painting.", pt: "<span style='color:#0077b6'>Ela estava desenhando enquanto ele estava pintando.</span>" }
                    ]
                },
                {
                    title: "Used To (Past Habits)",
                    audio: "TTS: We use Used To to talk about past habits or states that are no longer true today. People used to send letters. I used to be shy. We didn't use to have internet.",
                    explanation: "We use \"Used to\" to talk about past habits or states that are no longer true today. It emphasizes that things have changed.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos 'Used to' para falar sobre hábitos ou estados passados que não são mais verdadeiros hoje. Enfatiza que as coisas mudaram.)</span>",
                    samples: [
                        { en: "People used to send letters.", pt: "<span style='color:#0077b6'>As pessoas costumavam enviar cartas.</span>" },
                        { en: "I used to be shy.", pt: "<span style='color:#0077b6'>Eu costumava ser tímido.</span>" },
                        { en: "We didn't use to have internet.", pt: "<span style='color:#0077b6'>Nós não costumávamos ter internet.</span>" },
                        { en: "Did you use to play outside?", pt: "<span style='color:#0077b6'>Você costumava brincar lá fora?</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Simple Past",
                    audio: "audio/em1-1-3/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Did you hear about the first computer?", 
                            pt: "<span style='color:#0077b6'>Você ouviu falar sobre o primeiro computador?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Yes. Engineers built it in the 1940s. It was huge and didn't work very fast.", 
                            pt: "<span style='color:#0077b6'>Sim. Engenheiros o construíram na década de 1940. Era enorme e não funcionava muito rápido.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Past Continuous",
                    audio: "audio/em1-1-3/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Why didn't you answer my call yesterday?", 
                            pt: "<span style='color:#0077b6'>Por que você não atendeu minha ligação ontem?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Sorry! I was designing a new logo all afternoon. My phone was charging in the other room.", 
                            pt: "<span style='color:#0077b6'>Desculpe! Eu estava desenhando um novo logotipo a tarde toda. Meu telefone estava carregando no outro quarto.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Mixed Tenses (When/While)",
                    audio: "audio/em1-1-3/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "How did you break your glasses?", 
                            pt: "<span style='color:#0077b6'>Como você quebrou seus óculos?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "It happened while I was cleaning them. I dropped them when the cat jumped on me.", 
                            pt: "<span style='color:#0077b6'>Aconteceu enquanto eu os estava limpando. Eu os derrubei quando o gato pulou em mim.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 4: Used To",
                    audio: "audio/em1-1-3/step3_dialogue4.mp3",
                    lines: [
                        { 
                            speaker: "Mrs. Canales", 
                            text: "Technology changes everything. We used to go to the library to find information.", 
                            pt: "<span style='color:#0077b6'>A tecnologia muda tudo. Nós costumávamos ir à biblioteca para encontrar informações.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Really? I didn't use to like reading, but now I do because of e-books.", 
                            pt: "<span style='color:#0077b6'>Sério? Eu não costumava gostar de ler, mas agora eu gosto por causa dos e-books.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Simple Past: 'Alexander Graham Bell _____ the telephone, but he didn't _____ the internet.'",
                    options: [
                        { t: "invent / invent", c: false },
                        { t: "invented / invented", c: false },
                        { t: "invented / invent", c: true },
                        { t: "invents / invents", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Past Continuous: 'At 10 AM yesterday, they _____ a lecture.'",
                    options: [
                        { t: "watched", c: false },
                        { t: "were watching", c: true },
                        { t: "was watching", c: false },
                        { t: "are watching", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Past Simple vs. Continuous: 'She _____ (cook) when the lights _____ (go) out.'",
                    options: [
                        { t: "cooked / went", c: false },
                        { t: "was cooking / were going", c: false },
                        { t: "was cooking / went", c: true },
                        { t: "cooked / was going", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Used To (Affirmative): 'Before cars, people _____ horses.'",
                    options: [
                        { t: "used ride", c: false },
                        { t: "used to ride", c: true },
                        { t: "use to ride", c: false },
                        { t: "using to ride", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Used To (Negative): 'I _____ like math, but now I do.'",
                    options: [
                        { t: "not used to", c: false },
                        { t: "didn't used to", c: false },
                        { t: "didn't use to", c: true },
                        { t: "don't use to", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Used To (Question): '_____ you _____ live in this city?'",
                    options: [
                        { t: "Do / use to", c: false },
                        { t: "Did / used to", c: false },
                        { t: "Did / use to", c: true },
                        { t: "Were / using to", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When vs. While: '_____ I was walking to school, I found a wallet.'",
                    options: [
                        { t: "While", c: true },
                        { t: "When", c: false },
                        { t: "Where", c: false },
                        { t: "Why", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Time Expressions: 'We finished the project _____.'",
                    options: [
                        { t: "now", c: false },
                        { t: "tomorrow", c: false },
                        { t: "last night", c: true },
                        { t: "at the moment", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Context - Past Actions: 'What _____ you _____ when I called you?'",
                    options: [
                        { t: "did / do", c: false },
                        { t: "were / doing", c: true },
                        { t: "are / doing", c: false },
                        { t: "do / did", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative Past: 'He _____ to the party because he was sick.'",
                    options: [
                        { t: "didn't went", c: false },
                        { t: "didn't go", c: true },
                        { t: "wasn't go", c: false },
                        { t: "not went", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Simultaneous Actions: 'I was reading _____ he was playing video games.'",
                    options: [
                        { t: "when", c: false },
                        { t: "while", c: true },
                        { t: "during", c: false },
                        { t: "after", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Past State: 'This building _____ be a school.'",
                    options: [
                        { t: "used to", c: true },
                        { t: "use to", c: false },
                        { t: "was using to", c: false },
                        { t: "used", c: false }
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
                    text: "Thomas Edison invented the lightbulb.<br><small style='color:#0077b6'>(Thomas Edison inventou a lâmpada.)</small>", 
                    audio: "TTS: Thomas Edison invented the lightbulb.", 
                    arrow: "↘" 
                },
                { 
                    text: "I was designing a new logo all day.<br><small style='color:#0077b6'>(Eu estava desenhando um novo logotipo o dia todo.)</small>", 
                    audio: "TTS: I was designing a new logo all day.", 
                    arrow: "↘" 
                },
                { 
                    text: "People used to write letters, but now they send emails.<br><small style='color:#0077b6'>(As pessoas costumavam escrever cartas, mas agora enviam e-mails.)</small>", 
                    audio: "TTS: People used to write letters, but now they send emails.", 
                    arrow: "↘" 
                },
                { 
                    text: "The professor gave an amazing lecture.<br><small style='color:#0077b6'>(O professor deu uma palestra incrível.)</small>", 
                    audio: "TTS: The professor gave an amazing lecture.", 
                    arrow: "↘" 
                },
                { 
                    text: "While I was sleeping, I had a great idea.<br><small style='color:#0077b6'>(Enquanto eu estava dormindo, tive uma ótima ideia.)</small>", 
                    audio: "TTS: While I was sleeping, I had a great idea.", 
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
                // Drill 1: Typing (TTS)
                {
                    type: "typing",
                    instruction: "Listen to the audio and type the missing words in the blanks.",
                    audio: "TTS: I was reading about the telephone yesterday. Alexander Graham Bell invented it in 1876. Before that, people used to send telegrams. It was a huge breakthrough in communication. While he was working, he made the first call to his assistant.",
                    text: "I was reading about the telephone yesterday. Alexander Graham Bell [invented] it in 1876. Before that, people [used to] send telegrams. It was a huge [breakthrough] in communication. While he was working, he [made] the first call to his assistant."
                },
                // Drill 2: Listen and Complete (Dropdown) - COMPLETE VERSION
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue and choose the correct option.<br><small style='color:#0077b6'>(Ouça o diálogo e escolha a opção correta.)</small>",
                    audio: "audio/em1-1-3/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Mrs. Canales: It's beautiful. I love the [fabric | factory | fabrication]. Is it silk?", 
                            a: "fabric" 
                        },
                        { 
                            q: "Celine: Yes. I [bought | buy | was buying] it yesterday.", 
                            a: "bought" 
                        },
                        { 
                            q: "Mrs. Canales: Didn't you make it yourself? <br> Celine: No, I [didn't use to | used to | use to] sew, but I stopped.", 
                            a: "didn't use to" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the sentence and choose the correct meaning.",
                    audio: "TTS: I used to think math was boring.",
                    options: [
                        { t: "I think math is boring now.", c: false },
                        { t: "I thought math was boring in the past, but now I like it.", c: true },
                        { t: "I was thinking about math.", c: false },
                        { t: "I am used to math.", c: false }
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
                    title: "Narration (The Accidental Discovery)",
                    audio: "TTS: Many great inventions happened by accident. In 1928, Alexander Fleming was experimenting with bacteria in his laboratory. He went on vacation and left a dish of bacteria open. When he returned, he noticed something strange. Mold was growing in the dish, and it was killing the bacteria. He discovered penicillin! This breakthrough changed medicine forever. Before this, people used to die from simple infections. Fleming's creativity and observation saved millions of lives.",
                    body: "Many great inventions happened by accident. In 1928, Alexander Fleming was experimenting with bacteria in his laboratory. He went on vacation and left a dish of bacteria open. When he returned, he noticed something strange. Mold (fungo) was growing in the dish, and it was killing the bacteria. He discovered penicillin! This breakthrough changed medicine forever. Before this, people used to die from simple infections. Fleming's creativity and observation saved millions of lives.",
                    questions: [
                        { 
                            q: "What was Fleming doing before his vacation?", 
                            options: [ 
                                {t: "He was experimenting with bacteria.", c: true}, 
                                {t: "He was cleaning his lab.", c: false}, 
                                {t: "He was buying mold.", c: false},
                                {t: "He was sleeping.", c: false}
                            ] 
                        },
                        { 
                            q: "What happened when he returned?", 
                            options: [ 
                                {t: "The bacteria was growing everywhere.", c: false}, 
                                {t: "He found a new dish.", c: false}, 
                                {t: "He noticed mold was killing the bacteria.", c: true},
                                {t: "He lost his notes.", c: false}
                            ] 
                        },
                        { 
                            q: "What did people use to do before penicillin?", 
                            options: [ 
                                {t: "They used to live longer.", c: false}, 
                                {t: "They used to die from simple infections.", c: true}, 
                                {t: "They used to eat mold.", c: false},
                                {t: "They used to experiment more.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue (Old Tech)",
                    audio: "audio/em1-1-3/p6_text2.mp3",
                    body: "<b>Albert:</b> Hey Celine, look at this old photo of my dad. What is he holding?<br><b>Celine:</b> It looks like a brick!<br><b>Albert:</b> Haha, no. That is an old mobile phone. They used to be huge and heavy.<br><b>Celine:</b> Wow. Did they have touch screens?<br><b>Albert:</b> No way! They didn't use to have internet or cameras either. You could only make calls.<br><b>Celine:</b> That's crazy. I was using my phone to edit a movie while walking here today. Technology progresses so fast!",
                    questions: [
                        { 
                            q: "What is Albert's dad holding in the photo?", 
                            options: [ 
                                {t: "A brick.", c: false}, 
                                {t: "An old mobile phone.", c: true}, 
                                {t: "A camera.", c: false},
                                {t: "A laptop.", c: false}
                            ] 
                        },
                        { 
                            q: "What does Albert say about old phones?", 
                            options: [ 
                                {t: "They used to have great cameras.", c: false}, 
                                {t: "They used to be small.", c: false}, 
                                {t: "They used to be huge and heavy.", c: true},
                                {t: "They used to have internet.", c: false}
                            ] 
                        },
                        { 
                            q: "What was Celine doing while walking?", 
                            options: [ 
                                {t: "Making a call.", c: false}, 
                                {t: "Editing a movie on her phone.", c: true}, 
                                {t: "Carrying a brick.", c: false},
                                {t: "Taking photos.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description (The Creative Mind)",
                    audio: "TTS: Leonardo da Vinci was a true genius. He lived during the Renaissance. He was not only a painter but also an inventor and scientist. He used to draw sketches of machines that didn't exist yet, like helicopters and tanks. He had a very vivid imagination. While others were painting portraits, Leonardo was studying anatomy and flight. He believed that art and science were connected. His designs were centuries ahead of his time. He shows us that innovation comes from curiosity.",
                    body: "Leonardo da Vinci was a true genius. He lived during the Renaissance. He was not only a painter but also an inventor and scientist. He used to draw sketches of machines that didn't exist yet, like helicopters and tanks. He had a very vivid imagination. While others were painting portraits, Leonardo was studying anatomy and flight. He believed that art and science were connected. His designs were centuries ahead of his time. He shows us that innovation comes from curiosity.",
                    questions: [
                        { 
                            q: "What did Leonardo use to draw?", 
                            options: [ 
                                {t: "Only portraits.", c: false}, 
                                {t: "Sketches of machines like helicopters.", c: true}, 
                                {t: "Buildings in New York.", c: false},
                                {t: "Maps of the internet.", c: false}
                            ] 
                        },
                        { 
                            q: "What was Leonardo doing while others were painting portraits?", 
                            options: [ 
                                {t: "He was sleeping.", c: false}, 
                                {t: "He was studying anatomy and flight.", c: true}, 
                                {t: "He was fighting in a war.", c: false},
                                {t: "He was building a car.", c: false}
                            ] 
                        },
                        { 
                            q: "What does Leonardo's story teach us?", 
                            options: [ 
                                {t: "That innovation comes from curiosity.", c: true}, 
                                {t: "That painting is easy.", c: false}, 
                                {t: "That helicopters are old.", c: false},
                                {t: "That science is boring.", c: false}
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
                    instruction: "Match the word to its definition.<br><small style='color:#0077b6'>(Combine a palavra com sua definição.)</small>",
                    pairs: [
                        { left: "Breakthrough", right: "A sudden, important discovery", val: "1" },
                        { left: "Prototype", right: "The first model of something", val: "2" },
                        { left: "Fabric", right: "Material for making clothes", val: "3" },
                        { left: "Prejudice", right: "Unfair opinion without facts", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Unscramble)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>",
                    sentence: "used to / play / I / the / piano / .",
                    correct: "I used to play the piano ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "was / cooking / She / when / called / he / .",
                    correct: "She was cooking when he called ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "invented / Who / telephone / the / ?",
                    correct: "Who invented the telephone ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "fabric / soft / This / is / very / .",
                    correct: "This fabric is very soft ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not fit the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Fabric", c: false },
                        { t: "Factory", c: true },
                        { t: "Material", c: false },
                        { t: "Cloth", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not fit the group.",
                    options: [
                        { t: "College", c: false },
                        { t: "University", c: false },
                        { t: "High School", c: false },
                        { t: "Colleague", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not fit the group.",
                    options: [
                        { t: "Invented", c: false },
                        { t: "Created", c: false },
                        { t: "Designed", c: false },
                        { t: "Sleeping", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not fit the group.",
                    options: [
                        { t: "While", c: false },
                        { t: "When", c: false },
                        { t: "Yesterday", c: false },
                        { t: "Prototype", c: true }
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.<br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "The scientist made a huge [breakthrough | lecture | used to | was] in medicine.", a: "breakthrough" },
                        { q: "I attended an interesting [lecture | breakthrough | used to | was] at the university.", a: "lecture" },
                        { q: "He [used to | breakthrough | lecture | was] live in London, but now he lives here.", a: "used to" },
                        { q: "It [was | breakthrough | lecture | used to] raining when we left the house.", a: "was" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: A Past Invention or Habit. Now it's your turn! Write a short text (3-4 sentences) about a technology you used to use or a story about something you were doing when something else happened.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Uma Invenção ou Hábito do Passado. Agora é sua vez! Escreva um pequeno texto (3-4 frases) sobre uma tecnologia que você costumava usar ou uma história sobre algo que você estava fazendo quando algo mais aconteceu.)</span></small>",
            example: "\"When I was a child, I used to watch cartoons on a big TV. One day, while I was watching my favorite show, the electricity went out. I was so sad!\"<br><br><small><span style='color:#0077b6'>(\"Quando eu era criança, eu costumava assistir desenhos em uma TV grande. Um dia, enquanto eu estava assistindo meu programa favorito, a energia acabou. Eu fiquei tão triste!\")</span></small>",
            prompts: [
                "Use Simple Past (e.g., I bought, I played). <br><small><span style='color:#0077b6'>(Use o Passado Simples. Ex: eu comprei, eu joguei).</span></small>",
                "Use Used to (e.g., I used to have). <br><small><span style='color:#0077b6'>(Use 'Used to'. Ex: eu costumava ter).</span></small>",
                "Use Past Continuous (e.g., I was playing). <br><small><span style='color:#0077b6'>(Use o Passado Contínuo. Ex: eu estava jogando).</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Innovation & False Cognates)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Topic 1: Innovation & Creativity ---
                { 
                    term: "Innovation", 
                    definition: "A new method, idea, product, etc.", 
                    defTrans: "Inovação",
                    example: "Innovation changes the world.", 
                    audioFront: "TTS: Innovation",
                    audioBack: "TTS: Innovation changes the world." 
                },
                { 
                    term: "Creativity", 
                    definition: "The use of imagination to create original ideas.", 
                    defTrans: "Criatividade",
                    example: "Art requires a lot of creativity.", 
                    audioFront: "TTS: Creativity",
                    audioBack: "TTS: Art requires a lot of creativity." 
                },
                { 
                    term: "Invention", 
                    definition: "The action of inventing something, typically a process or device.", 
                    defTrans: "Invenção",
                    example: "The lightbulb was a great invention.", 
                    audioFront: "TTS: Invention",
                    audioBack: "TTS: The lightbulb was a great invention." 
                },
                { 
                    term: "Idea", 
                    definition: "A thought or suggestion as to a possible course of action.", 
                    defTrans: "Ideia",
                    example: "I have a new idea.", 
                    audioFront: "TTS: Idea",
                    audioBack: "TTS: I have a new idea." 
                },
                { 
                    term: "Breakthrough", 
                    definition: "A sudden, dramatic, and important discovery or development.", 
                    defTrans: "Avanço significativo",
                    example: "Scientists made a major breakthrough.", 
                    audioFront: "TTS: Breakthrough",
                    audioBack: "TTS: Scientists made a major breakthrough." 
                },
                { 
                    term: "Design", 
                    definition: "A plan or drawing produced to show the look and function of something.", 
                    defTrans: "Design / Projeto",
                    example: "I like the design of this car.", 
                    audioFront: "TTS: Design",
                    audioBack: "TTS: I like the design of this car." 
                },
                { 
                    term: "Prototype", 
                    definition: "A first, typical or preliminary model of something.", 
                    defTrans: "Protótipo",
                    example: "They tested the prototype.", 
                    audioFront: "TTS: Prototype",
                    audioBack: "TTS: They tested the prototype." 
                },
                { 
                    term: "Experiment", 
                    definition: "A scientific procedure undertaken to make a discovery.", 
                    defTrans: "Experimento",
                    example: "The experiment was successful.", 
                    audioFront: "TTS: Experiment",
                    audioBack: "TTS: The experiment was successful." 
                },
                { 
                    term: "Solution", 
                    definition: "A means of solving a problem or dealing with a difficult situation.", 
                    defTrans: "Solução",
                    example: "We found a solution to the problem.", 
                    audioFront: "TTS: Solution",
                    audioBack: "TTS: We found a solution to the problem." 
                },
                { 
                    term: "Discovery", 
                    definition: "The action or process of discovering or being discovered.", 
                    defTrans: "Descoberta",
                    example: "The discovery of fire changed history.", 
                    audioFront: "TTS: Discovery",
                    audioBack: "TTS: The discovery of fire changed history." 
                },
                { 
                    term: "Imagination", 
                    definition: "The faculty or action of forming new ideas or images.", 
                    defTrans: "Imaginação",
                    example: "Use your imagination to write.", 
                    audioFront: "TTS: Imagination",
                    audioBack: "TTS: Use your imagination to write." 
                },
                { 
                    term: "Challenge", 
                    definition: "A task or situation that tests someone's abilities.", 
                    defTrans: "Desafio",
                    example: "This puzzle is a big challenge.", 
                    audioFront: "TTS: Challenge",
                    audioBack: "TTS: This puzzle is a big challenge." 
                },
                { 
                    term: "Resourcefulness", 
                    definition: "The ability to find quick and clever ways to overcome difficulties.", 
                    defTrans: "Engenhosidade / Iniciativa",
                    example: "Her resourcefulness helped us fix it.", 
                    audioFront: "TTS: Resourcefulness",
                    audioBack: "TTS: Her resourcefulness helped us fix it." 
                },
                { 
                    term: "Progress", 
                    definition: "Forward or onward movement toward a destination.", 
                    defTrans: "Progresso",
                    example: "We are making good progress.", 
                    audioFront: "TTS: Progress",
                    audioBack: "TTS: We are making good progress." 
                },

                // --- Topic 2: False Cognates ---
                { 
                    term: "Fabric", 
                    definition: "Cloth or other material produced by weaving or knitting fibers.", 
                    defTrans: "Tecido",
                    example: "This shirt is made of cotton fabric.", 
                    audioFront: "TTS: Fabric",
                    audioBack: "TTS: This shirt is made of cotton fabric." 
                },
                { 
                    term: "College", 
                    definition: "An educational institution providing higher education.", 
                    defTrans: "Faculdade",
                    example: "My brother is studying at college.", 
                    audioFront: "TTS: College",
                    audioBack: "TTS: My brother is studying at college." 
                },
                { 
                    term: "Educated", 
                    definition: "Having been educated; showing a high standard of culture.", 
                    defTrans: "Culto / Instruído",
                    example: "He is a very educated man.", 
                    audioFront: "TTS: Educated",
                    audioBack: "TTS: He is a very educated man." 
                },
                { 
                    term: "Lecture", 
                    definition: "An educational talk to an audience, especially to students.", 
                    defTrans: "Palestra",
                    example: "The professor gave a long lecture.", 
                    audioFront: "TTS: Lecture",
                    audioBack: "TTS: The professor gave a long lecture." 
                },
                { 
                    term: "Prejudice", 
                    definition: "Preconceived opinion that is not based on reason or experience.", 
                    defTrans: "Preconceito",
                    example: "We must fight against prejudice.", 
                    audioFront: "TTS: Prejudice",
                    audioBack: "TTS: We must fight against prejudice." 
                },
                // --- Topic 3: Verbs ---
                { 
                    term: "To spark", 
                    definition: "To trigger or initiate an idea or event.", 
                    defTrans: "Desencadear / Provocar",
                    example: "The question sparked a debate.", 
                    audioFront: "TTS: To spark",
                    audioBack: "TTS: The question sparked a debate." 
                },
                { 
                    term: "To discover", 
                    definition: "To find something unexpectedly during a search.", 
                    defTrans: "Descobrir",
                    example: "Who discovered this place?", 
                    audioFront: "TTS: To discover",
                    audioBack: "TTS: Who discovered this place?" 
                },
                { 
                    term: "To innovate", 
                    definition: "To make changes by introducing new methods or ideas.", 
                    defTrans: "Inovar",
                    example: "Companies need to innovate to survive.", 
                    audioFront: "TTS: To innovate",
                    audioBack: "TTS: Companies need to innovate to survive." 
                },
                { 
                    term: "To experiment", 
                    definition: "To perform a scientific procedure to determine something.", 
                    defTrans: "Experimentar (testar)",
                    example: "Don't be afraid to experiment with new colors.", 
                    audioFront: "TTS: To experiment",
                    audioBack: "TTS: Don't be afraid to experiment with new colors." 
                },
                { 
                    term: "To think", 
                    definition: "To have a particular opinion, belief, or idea.", 
                    defTrans: "Pensar",
                    example: "I think it is a good idea.", 
                    audioFront: "TTS: To think",
                    audioBack: "TTS: I think it is a good idea." 
                },

                // --- Topic 4: Grammar Points ---
                { 
                    term: "Simple Past", 
                    definition: "Tense used to talk about finished actions in the past.", 
                    defTrans: "Passado Simples",
                    example: "She created a new app.", 
                    audioFront: "TTS: Simple Past",
                    audioBack: "TTS: She created a new app." 
                },
                { 
                    term: "Past Continuous", 
                    definition: "Tense used for actions that were in progress in the past.", 
                    defTrans: "Passado Contínuo",
                    example: "I was studying at 8 PM.", 
                    audioFront: "TTS: Past Continuous",
                    audioBack: "TTS: I was studying at 8 PM." 
                },
                { 
                    term: "Used to", 
                    definition: "Used to describe past habits that are no longer true.", 
                    defTrans: "Costumava (hábito passado)",
                    example: "I used to play the piano.", 
                    audioFront: "TTS: Used to",
                    audioBack: "TTS: I used to play the piano." 
                },
                { 
                    term: "When (clause)", 
                    definition: "Used to indicate a specific point in time or an interruption.", 
                    defTrans: "Quando (Interrupção)",
                    example: "I was reading when the lights went out.", 
                    audioFront: "TTS: When clause",
                    audioBack: "TTS: I was reading when the lights went out." 
                },
                { 
                    term: "While (clause)", 
                    definition: "Used to indicate a period of time during which something was happening.", 
                    defTrans: "Enquanto (Duração)",
                    example: "While I was working, he called.", 
                    audioFront: "TTS: While clause",
                    audioBack: "TTS: While I was working, he called." 
                }
            ] // This closes the items array
        } // This closes the Step 9 object
    ], // This closes the steps array

// ======================================================
    // GLOSSARY (Part 1: Context & Innovation)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "doing", 
            definition: "The act of performing an activity or task.", 
            translation: "Fazendo / Realizando" 
        },
        { 
            topic: "Context", 
            term: "answer", 
            definition: "To respond to a phone call or a question.", 
            translation: "Atender / Responder" 
        },
        { 
            topic: "Context", 
            term: "create", 
            definition: "To bring something into existence.", 
            translation: "Criar" 
        },
        { 
            topic: "Context", 
            term: "experimenting", 
            definition: "Testing new ideas, methods, or activities.", 
            translation: "Experimentando" 
        },
        { 
            topic: "Context", 
            term: "collect", 
            definition: "To gather together items or information from various sources.", 
            translation: "Coletar / Recolher" 
        },
        { 
            topic: "Context", 
            term: "used-to-think", 
            definition: "Used to describe a past opinion that is no longer held.", 
            translation: "Costumava pensar" 
        },
        { 
            topic: "Context", 
            term: "used-to-believe", 
            definition: "Used to describe a past conviction that has changed.", 
            translation: "Costumava acreditar" 
        },
        { 
            topic: "Context", 
            term: "discovering", 
            definition: "The process of finding or learning something for the first time.", 
            translation: "Descobrindo" 
        },
        { 
            topic: "Context", 
            term: "thinking-outside-the-box", 
            definition: "Thinking in an original, creative, and non-traditional way.", 
            translation: "Pensar fora da caixa" 
        },

        // --- TOPIC 2: INNOVATION & CREATIVITY ---
        { 
            topic: "Innovation", 
            term: "Innovation", 
            definition: "A new method, idea, product, or way of doing something.", 
            translation: "Inovação" 
        },
        { 
            topic: "Innovation", 
            term: "Creativity", 
            definition: "The use of imagination or original ideas to create something.", 
            translation: "Criatividade" 
        },
        { 
            topic: "Innovation", 
            term: "Invention", 
            definition: "The action of inventing something, typically a process or device.", 
            translation: "Invenção" 
        },
        { 
            topic: "Innovation", 
            term: "Idea", 
            definition: "A thought or suggestion as to a possible course of action.", 
            translation: "Ideia" 
        },
        { 
            topic: "Innovation", 
            term: "Breakthrough", 
            definition: "A sudden, dramatic, and important discovery or development.", 
            translation: "Avanço significativo" 
        },
        { 
            topic: "Innovation", 
            term: "Design", 
            definition: "A plan or drawing produced to show the look of something.", 
            translation: "Design / Projeto" 
        },
        { 
            topic: "Innovation", 
            term: "Prototype", 
            definition: "A first, typical or preliminary model of something.", 
            translation: "Protótipo" 
        },
        { 
            topic: "Innovation", 
            term: "Experiment", 
            definition: "A scientific procedure undertaken to make a discovery.", 
            translation: "Experimento" 
        },
        { 
            topic: "Innovation", 
            term: "Solution", 
            definition: "A means of solving a problem or dealing with a difficult situation.", 
            translation: "Solução" 
        },
        { 
            topic: "Innovation", 
            term: "Discovery", 
            definition: "The action or process of discovering or being discovered.", 
            translation: "Descoberta" 
        },
        { 
            topic: "Innovation", 
            term: "Imagination", 
            definition: "The faculty or action of forming new ideas or images.", 
            translation: "Imaginação" 
        },
        { 
            topic: "Innovation", 
            term: "Challenge", 
            definition: "A task or situation that tests someone's abilities.", 
            translation: "Desafio" 
        },
        { 
            topic: "Innovation", 
            term: "Resourcefulness", 
            definition: "The ability to find quick and clever ways to overcome difficulties.", 
            translation: "Engenhosidade / Iniciativa" 
        },
        { 
            topic: "Innovation", 
            term: "Progress", 
            definition: "Forward or onward movement toward a destination.", 
            translation: "Progresso" 
        },
        // --- TOPIC 3: FALSE COGNATES ---
        { 
            topic: "False Cognates", 
            term: "fabric", 
            definition: "Cloth or other material produced by weaving or knitting fibers.", 
            translation: "Tecido (não fábrica)" 
        },
        { 
            topic: "False Cognates", 
            term: "college", 
            definition: "An educational institution providing higher education (University).", 
            translation: "Faculdade (não colégio)" 
        },
        { 
            topic: "False Cognates", 
            term: "educated", 
            definition: "Having been educated; showing a high standard of culture.", 
            translation: "Culto / Instruído" 
        },
        { 
            topic: "False Cognates", 
            term: "lecture", 
            definition: "An educational talk given to an audience.", 
            translation: "Palestra" 
        },
        { 
            topic: "False Cognates", 
            term: "prejudice", 
            definition: "Preconceived opinion not based on reason or experience.", 
            translation: "Preconceito" 
        },

        // --- TOPIC 4: VERBS ---
        { 
            topic: "Verbs", 
            term: "to-spark", 
            definition: "To trigger or initiate an idea or event.", 
            translation: "Desencadear / Provocar" 
        },
        { 
            topic: "Verbs", 
            term: "to-discover", 
            definition: "To find something unexpectedly during a search.", 
            translation: "Descobrir" 
        },
        { 
            topic: "Verbs", 
            term: "to-innovate", 
            definition: "To make changes by introducing new methods or ideas.", 
            translation: "Inovar" 
        },
        { 
            topic: "Verbs", 
            term: "to-experiment", 
            definition: "To perform a scientific procedure to determine something.", 
            translation: "Experimentar (testar)" 
        },
        { 
            topic: "Verbs", 
            term: "to-think", 
            definition: "To have a particular opinion, belief, or idea.", 
            translation: "Pensar" 
        },

        // --- TOPIC 5: GRAMMAR POINTS ---
        { 
            topic: "Grammar", 
            term: "simple-past", 
            definition: "The tense used to talk about finished actions in the past.", 
            translation: "Passado simples" 
        },
        { 
            topic: "Grammar", 
            term: "past-continuous", 
            definition: "The tense used for actions that were in progress in the past.", 
            translation: "Passado contínuo" 
        },
        { 
            topic: "Grammar", 
            term: "used-to", 
            definition: "A structure used to describe past habits that are no longer true.", 
            translation: "Costumava (hábito passado)" 
        },
        { 
            topic: "Grammar", 
            term: "when", 
            definition: "Used to indicate a specific point in time, often interrupting an action.", 
            translation: "Quando" 
        },
        { 
            topic: "Grammar", 
            term: "while", 
            definition: "Used to indicate a period of time during which an action was happening.", 
            translation: "Enquanto" 
        },
        // --- TOPIC 6: GENERAL REFERENCE ---
        { 
            topic: "General", 
            term: "brick", 
            definition: "A small rectangular block used in building; also slang for a heavy old mobile phone.", 
            translation: "Tijolo" 
        },
        { 
            topic: "General", 
            term: "factory", 
            definition: "A building where goods are manufactured or assembled.", 
            translation: "Fábrica" 
        },
        { 
            topic: "General", 
            term: "colleague", 
            definition: "A person with whom one works in a profession or business.", 
            translation: "Colega (de trabalho)" 
        },
        { 
            topic: "General", 
            term: "luck", 
            definition: "Success or failure brought by chance rather than through one's own actions.", 
            translation: "Sorte" 
        },
        { 
            topic: "General", 
            term: "mess", 
            definition: "A dirty or untidy state of things or of a place.", 
            translation: "Bagunça" 
        }
    ] // This closes the glossary array
}); // This closes the initLesson object