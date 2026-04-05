/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-4-10.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em1-4-10", 
    grade: "High School 1st Grade",       
    bimester: "4",   
    chapter: "10",    
    chapterTitle: "Carry On: Finding Strength in Adversity", 
    
    steps:[
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Use vocabulary related to [adversity](tooltip:adversity) and [persistence](tooltip:persistence).<br>• Master [phrasal verbs](tooltip:phrasal-verbs) with CARRY and CALL.<br>• Use [Reported Speech](tooltip:reported-speech) to share what others have said.<br>• Form [Embedded Questions](tooltip:embedded-questions) for polite and indirect communication.<br>• Use [Tag Questions](tooltip:tag-questions) to confirm information and keep conversations going.",
            welcome: "Hello, my friend! I'm Mr. D!<br>Welcome to a very special part of our journey. Life is like a long road with beautiful views but also some [steep](tooltip:steep) [hills](tooltip:hill). Today, we are going to learn how to talk about those \"hills\"—the [challenges](tooltip:challenge) and [adversities](tooltip:adversity) we face. You will learn how to share stories of [strength](tooltip:strength) and [resilience](tooltip:resilience). We’ll explore how to [report](tooltip:report) what people say and how to ask questions with elegance. It’s time to find your [inner power](tooltip:inner-power) and learn how to [carry on](tooltip:carry-on), [no matter what](tooltip:no-matter-what)! Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Use vocabulary related to adversity and persistence. Master phrasal verbs with CARRY and CALL. Use Reported Speech to share what others have said. Form Embedded Questions for polite and indirect communication. Use Tag Questions to confirm information and keep conversations going.",
                welcome: "TTS: Hello, my friend! I'm Mr. D! Welcome to a very special part of our journey. Life is like a long road with beautiful views but also some steep hills. Today, we are going to learn how to talk about those hills, the challenges and adversities we face. You will learn how to share stories of strength and resilience. We’ll explore how to report what people say and how to ask questions with elegance. It’s time to find your inner power and learn how to carry on, no matter what! Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Albert and Celine are sitting in the school courtyard. Albert looks a bit tired and is staring at a low grade on his math paper. Celine approaches him with an encouraging smile.", 
            contextAudio: "audio/em1-4-10/step1.mp3",
            dialogue:[
                { 
                    speaker: "Celine", 
                    text: "Hey Albert, you look a bit [overwhelmed](tooltip:overwhelmed). You haven't [given up](tooltip:give-up) on the math competition, have you?" 
                },
                { 
                    speaker: "Albert", 
                    text: "Honestly, Celine, I’m [struggling](tooltip:struggle). I [failed](tooltip:fail) the last mock test. I don't know where the problem is. This [setback](tooltip:setback) just makes me want to [call](tooltip:call-off) the whole thing [off](tooltip:call-off)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Don't say that! [Persistence is key](tooltip:persistence-is-key), isn't it? I was talking to Maria yesterday. She said that she had failed her driving test three times before passing. She [overcame](tooltip:overcome) her fear and [carried on](tooltip:carry-on)." 
                },
                { 
                    speaker: "Albert", 
                    text: "That’s impressive. Did she say how she did it?" 
                },
                { 
                    speaker: "Celine", 
                    text: "Yes. She told me that she had [focused on](tooltip:focus-on) her [mistakes](tooltip:mistake) instead of the [failure](tooltip:failure). She said that her mother had advised her tov[embrace](tooltip:embrace) those errors." 
                },
                { 
                    speaker: "Albert", 
                    text: "I suppose I should [call on](tooltip:call-on) my [resilience](tooltip:resilience) and [strive](tooltip:strive) for a better result next time. But it’s hard to [cope with](tooltip:cope-with) the pressure." 
                },
                { 
                    speaker: "Celine", 
                    text: "I understand. But [time is precious](tooltip:time-is-precious), isn't it? We shouldn't [waste](tooltip:waste) it feeling sad. I asked the teacher if I could help you with some exercises, and she said yes!" 
                },
                { 
                    speaker: "Albert", 
                    text: "You're a great friend, Celine. Could you tell me when you are free?" 
                },
                { 
                    speaker: "Celine", 
                    text: "I'll [call](tooltip:call-up) you [up](tooltip:call-up) tonight and we can plan a study session. We will [carry out](tooltip:carry-out) a great review together!" 
                },
                { 
                    speaker: "Albert", 
                    text: "Thanks, Celine. I feel better already. We have to [face](tooltip:face) our [challenges](tooltip:challenge), don't we?" 
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
                    title: "Verbs of Adversity",
                    audio: "TTS: To overcome. To strive. To embrace. To question. To focus on. To carry on. To cope with. To face. To struggle. To encourage. To achieve. To fail.",
                    items:[
                        { term: "To overcome", trans: "Superar" },
                        { term: "To strive", trans: "Lutar / Esforçar-se" },
                        { term: "To embrace", trans: "Abraçar / Aceitar" },
                        { term: "To question", trans: "Questionar" },
                        { term: "To focus (on)", trans: "Focar / Concentrar-se" },
                        { term: "To carry on", trans: "Continuar / Prosseguir" },
                        { term: "To cope with", trans: "Lidar com" },
                        { term: "To face", trans: "Encarar / Enfrentar" },
                        { term: "To struggle", trans: "Ter dificuldade / Lutar" },
                        { term: "To encourage", trans: "Encorajar / Incentivar" },
                        { term: "To achieve", trans: "Alcançar / Conquistar" },
                        { term: "To fail", trans: "Falhar / Fracassar" }
                    ]
                },
                {
                    title: "Words of Resilience",
                    audio: "TTS: Adversity. Hardship. Challenge. Persistence. Mistake. Setback. Tragedy. Strength. Resilience. Goal. Aim. Failure. Support. Precious. Overwhelmed.",
                    items:[
                        { term: "Adversity", trans: "Adversidade" },
                        { term: "Hardship", trans: "Dificuldade / Sofrimento" },
                        { term: "Challenge", trans: "Desafio" },
                        { term: "Persistence", trans: "Persistência" },
                        { term: "Mistake", trans: "Erro" },
                        { term: "Setback", trans: "Contratempo" },
                        { term: "Tragedy", trans: "Tragédia" },
                        { term: "Strength", trans: "Força" },
                        { term: "Resilience", trans: "Resiliência" },
                        { term: "Goal", trans: "Objetivo" },
                        { term: "Aim", trans: "Meta" },
                        { term: "Failure", trans: "Falha / Fracasso" },
                        { term: "Support", trans: "Apoio" },
                        { term: "Precious", trans: "Precioso(a)" },
                        { term: "Overwhelmed", trans: "Sobrecarregado(a)" }
                    ]
                },
                {
                    title: "Phrasal Verbs: CARRY",
                    audio: "TTS: Carry on. Carry out. Carry over. Carry away. Carry off. Carry through. Carry back. Carry forward.",
                    items:[
                        { term: "Carry on", trans: "Continuar" },
                        { term: "Carry out", trans: "Realizar / Executar" },
                        { term: "Carry over", trans: "Transferir / Levar para" },
                        { term: "Carry away", trans: "Empolgar-se / Deixar-se levar" },
                        { term: "Carry off", trans: "Realizar com sucesso" },
                        { term: "Carry through", trans: "Ajudar a superar" },
                        { term: "Carry back", trans: "Trazer de volta à memória" },
                        { term: "Carry forward", trans: "Transportar / Levar adiante" }
                    ]
                },
                {
                    title: "Phrasal Verbs: CALL",
                    audio: "TTS: Call on. Call off. Call for. Call back. Call in. Call up. Call out. Call around.",
                    items:[
                        { term: "Call on", trans: "Recorrer a / Pedir ajuda" },
                        { term: "Call off", trans: "Cancelar" },
                        { term: "Call for", trans: "Exigir / Pedir" },
                        { term: "Call back", trans: "Ligar de volta" },
                        { term: "Call in", trans: "Chamar (um especialista)" },
                        { term: "Call up", trans: "Ligar / Telefonar" },
                        { term: "Call out", trans: "Criticar / Desafiar" },
                        { term: "Call around", trans: "Ligar para vários lugares" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Persistence is key. I don't know where to start. Time is precious. Call the whole thing off. Give up on. Cope with the pressure. Face our challenges. Strive for a better result.",
                    items:[
                        { term: "Persistence is key", trans: "A persistência é a chave" },
                        { term: "I don't know where to start", trans: "Eu não sei por onde começar" },
                        { term: "Time is precious", trans: "O tempo é precioso" },
                        { term: "Call the whole thing off", trans: "Cancelar tudo" },
                        { term: "Give up on", trans: "Desistir de" },
                        { term: "Cope with the pressure", trans: "Lidar com a pressão" },
                        { term: "Face our challenges", trans: "Encarar nossos desafios" },
                        { term: "Strive for a better result", trans: "Esforçar-se por um resultado melhor" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups:[
                {
                    title: "Verbs of Adversity",
                    audio: "TTS: She had to overcome many obstacles. We must strive for excellence. It's important to embrace new challenges. Don't be afraid to question the rules. You need to focus on your studies. Even when tired, they carried on. How do you cope with stress? We are ready to face the truth. I struggle with math sometimes. My parents always encourage me. You can achieve your goals. It is okay to fail sometimes.",
                    items:[
                        { term: "To overcome", sent: "She had to overcome many obstacles.", trans: "<span style='color:#0077b6'>Ela teve que superar muitos obstáculos.</span>" },
                        { term: "To strive", sent: "We must strive for excellence.", trans: "<span style='color:#0077b6'>Devemos nos esforçar pela excelência.</span>" },
                        { term: "To embrace", sent: "It's important to embrace new challenges.", trans: "<span style='color:#0077b6'>É importante aceitar novos desafios.</span>" },
                        { term: "To question", sent: "Don't be afraid to question the rules.", trans: "<span style='color:#0077b6'>Não tenha medo de questionar as regras.</span>" },
                        { term: "To focus (on)", sent: "You need to focus on your studies.", trans: "<span style='color:#0077b6'>Você precisa focar nos seus estudos.</span>" },
                        { term: "To carry on", sent: "Even when tired, they carried on.", trans: "<span style='color:#0077b6'>Mesmo cansados, eles continuaram.</span>" },
                        { term: "To cope with", sent: "How do you cope with stress?", trans: "<span style='color:#0077b6'>Como você lida com o estresse?</span>" },
                        { term: "To face", sent: "We are ready to face the truth.", trans: "<span style='color:#0077b6'>Estamos prontos para encarar a verdade.</span>" },
                        { term: "To struggle", sent: "I struggle with math sometimes.", trans: "<span style='color:#0077b6'>Eu tenho dificuldade com matemática às vezes.</span>" },
                        { term: "To encourage", sent: "My parents always encourage me.", trans: "<span style='color:#0077b6'>Meus pais sempre me incentivam.</span>" },
                        { term: "To achieve", sent: "You can achieve your goals.", trans: "<span style='color:#0077b6'>Você pode alcançar seus objetivos.</span>" },
                        { term: "To fail", sent: "It is okay to fail sometimes.", trans: "<span style='color:#0077b6'>Está tudo bem fracassar às vezes.</span>" }
                    ]
                },
                {
                    title: "Words of Resilience",
                    audio: "TTS: Resilience is born from adversity. They experienced extreme hardship. This project is a big challenge. Her persistence led to success. Learn from your mistake. Every setback is a lesson. The community recovered from the tragedy. He has the strength to win. She showed great resilience. My main goal is to graduate. You must work hard for your aim. Don't let failure stop you. I need your support right now. Life is precious. I feel overwhelmed by the news.",
                    items:[
                        { term: "Adversity", sent: "Resilience is born from adversity.", trans: "<span style='color:#0077b6'>A resiliência nasce da adversidade.</span>" },
                        { term: "Hardship", sent: "They experienced extreme hardship.", trans: "<span style='color:#0077b6'>Eles vivenciaram dificuldades extremas.</span>" },
                        { term: "Challenge", sent: "This project is a big challenge.", trans: "<span style='color:#0077b6'>Este projeto é um grande desafio.</span>" },
                        { term: "Persistence", sent: "Her persistence led to success.", trans: "<span style='color:#0077b6'>A persistência dela levou ao sucesso.</span>" },
                        { term: "Mistake", sent: "Learn from your mistake.", trans: "<span style='color:#0077b6'>Aprenda com seu erro.</span>" },
                        { term: "Setback", sent: "Every setback is a lesson.", trans: "<span style='color:#0077b6'>Cada contratempo é uma lição.</span>" },
                        { term: "Tragedy", sent: "The community recovered from the tragedy.", trans: "<span style='color:#0077b6'>A comunidade se recuperou da tragédia.</span>" },
                        { term: "Strength", sent: "He has the strength to win.", trans: "<span style='color:#0077b6'>Ele tem a força para vencer.</span>" },
                        { term: "Resilience", sent: "She showed great resilience.", trans: "<span style='color:#0077b6'>Ela demonstrou grande resiliência.</span>" },
                        { term: "Goal", sent: "My main goal is to graduate.", trans: "<span style='color:#0077b6'>Meu principal objetivo é me formar.</span>" },
                        { term: "Aim", sent: "You must work hard for your aim.", trans: "<span style='color:#0077b6'>Você deve trabalhar duro por sua meta.</span>" },
                        { term: "Failure", sent: "Don't let failure stop you.", trans: "<span style='color:#0077b6'>Não deixe o fracasso te parar.</span>" },
                        { term: "Support", sent: "I need your support right now.", trans: "<span style='color:#0077b6'>Eu preciso do seu apoio agora.</span>" },
                        { term: "Precious", sent: "Life is precious.", trans: "<span style='color:#0077b6'>A vida é preciosa.</span>" },
                        { term: "Overwhelmed", sent: "I feel overwhelmed by the news.", trans: "<span style='color:#0077b6'>Eu me sinto sobrecarregado pelas notícias.</span>" }
                    ]
                },
                {
                    title: "Phrasal Verbs: CARRY",
                    audio: "TTS: Even when tired, they carried on. We will carry out the plan. The debt will carry over to next month. Don't get carried away with the victory. She carried off the award. His faith carried him through the dark times. This smell carries me back to my childhood. We must carry forward our values.",
                    items:[
                        { term: "Carry on", sent: "Even when tired, they carried on.", trans: "<span style='color:#0077b6'>Mesmo cansados, eles continuaram.</span>" },
                        { term: "Carry out", sent: "We will carry out the plan.", trans: "<span style='color:#0077b6'>Nós vamos executar o plano.</span>" },
                        { term: "Carry over", sent: "The debt will carry over to next month.", trans: "<span style='color:#0077b6'>A dívida será transferida para o mês que vem.</span>" },
                        { term: "Carry away", sent: "Don't get carried away with the victory.", trans: "<span style='color:#0077b6'>Não se empolgue demais com a vitória.</span>" },
                        { term: "Carry off", sent: "She carried off the award.", trans: "<span style='color:#0077b6'>Ela ganhou/levou o prêmio com sucesso.</span>" },
                        { term: "Carry through", sent: "His faith carried him through the dark times.", trans: "<span style='color:#0077b6'>A fé dele o ajudou a superar os tempos sombrios.</span>" },
                        { term: "Carry back", sent: "This smell carries me back to my childhood.", trans: "<span style='color:#0077b6'>Este cheiro me traz lembranças da minha infância.</span>" },
                        { term: "Carry forward", sent: "We must carry forward our values.", trans: "<span style='color:#0077b6'>Devemos levar adiante nossos valores.</span>" }
                    ]
                },
                {
                    title: "Phrasal Verbs: CALL",
                    audio: "TTS: You can call on me anytime. They had to call off the trip. This situation calls for calm. I will call you back in ten minutes. We should call in a doctor. I'll call up my sister tonight. He called them out for lying. I'll call around to find a better price.",
                    items:[
                        { term: "Call on", sent: "You can call on me anytime.", trans: "<span style='color:#0077b6'>Você pode recorrer a mim a qualquer momento.</span>" },
                        { term: "Call off", sent: "They had to call off the trip.", trans: "<span style='color:#0077b6'>Eles tiveram que cancelar a viagem.</span>" },
                        { term: "Call for", sent: "This situation calls for calm.", trans: "<span style='color:#0077b6'>Esta situação exige calma.</span>" },
                        { term: "Call back", sent: "I will call you back in ten minutes.", trans: "<span style='color:#0077b6'>Eu te ligo de volta em dez minutos.</span>" },
                        { term: "Call in", sent: "We should call in a doctor.", trans: "<span style='color:#0077b6'>Deveríamos chamar um médico.</span>" },
                        { term: "Call up", sent: "I'll call up my sister tonight.", trans: "<span style='color:#0077b6'>Vou ligar para minha irmã esta noite.</span>" },
                        { term: "Call out", sent: "He called them out for lying.", trans: "<span style='color:#0077b6'>Ele os criticou por estarem mentindo.</span>" },
                        { term: "Call around", sent: "I'll call around to find a better price.", trans: "<span style='color:#0077b6'>Vou ligar para vários lugares para encontrar um preço melhor.</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Don't quit now, persistence is key. The task is huge, I don't know where to start. Don't waste a second, time is precious. Due to the storm, we had to call the whole thing off. Never give up on your dreams. Meditation helps me cope with the pressure. Together we can face our challenges. Always strive for a better result.",
                    items:[
                        { term: "Persistence is key", sent: "Don't quit now, persistence is key.", trans: "<span style='color:#0077b6'>Não desista agora, a persistência é a chave.</span>" },
                        { term: "I don't know where to start", sent: "The task is huge, I don't know where to start.", trans: "<span style='color:#0077b6'>A tarefa é enorme, eu não sei por onde começar.</span>" },
                        { term: "Time is precious", sent: "Don't waste a second, time is precious.", trans: "<span style='color:#0077b6'>Não perca um segundo, o tempo é precioso.</span>" },
                        { term: "Call the whole thing off", sent: "Due to the storm, we had to call the whole thing off.", trans: "<span style='color:#0077b6'>Devido à tempestade, tivemos que cancelar tudo.</span>" },
                        { term: "Give up on", sent: "Never give up on your dreams.", trans: "<span style='color:#0077b6'>Nunca desista dos seus sonhos.</span>" },
                        { term: "Cope with the pressure", sent: "Meditation helps me cope with the pressure.", trans: "<span style='color:#0077b6'>A meditação me ajuda a lidar com a pressão.</span>" },
                        { term: "Face our challenges", sent: "Together we can face our challenges.", trans: "<span style='color:#0077b6'>Juntos podemos encarar nossos desafios.</span>" },
                        { term: "Strive for a better result", sent: "Always strive for a better result.", trans: "<span style='color:#0077b6'>Sempre se esforce por um resultado melhor.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (Tabbed Version)
            drillGroups:[
                {
                    title: "Verbs of Adversity",
                    drills:[
                        {
                            type: "mcq",
                            q: "To successfully deal with a difficult situation means to _______ it.",
                            options:[
                                {t: "overcome", c: true}, {t: "fail", c: false}, {t: "question", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "When you make great efforts to achieve something, you _______.",
                            options:[
                                {t: "strive", c: true}, {t: "cope with", c: false}, {t: "embrace", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Instead of avoiding problems, it is better to _______ them.",
                            options:[
                                {t: "fail", c: false}, {t: "embrace", c: true}, {t: "question", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "If something doesn't make sense, you should _______ it.",
                            options:[
                                {t: "encourage", c: false}, {t: "question", c: true}, {t: "achieve", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "To give all your attention to studying is to _______ on it.",
                            options:[
                                {t: "face", c: false}, {t: "carry on", c: false}, {t: "focus", c: true}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Even when things got hard, she decided to _______ and not stop.",
                            options:[
                                {t: "fail", c: false}, {t: "carry on", c: true}, {t: "question", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "He learned how to _______ stress by doing yoga every morning.",
                            options:[
                                {t: "cope with", c: true}, {t: "encourage", c: false}, {t: "achieve", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "We must _______ the truth, even if it is uncomfortable.",
                            options:[
                                {t: "embrace", c: false}, {t: "face", c: true}, {t: "strive", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Many students _______ with complex math problems at first.",
                            options:[
                                {t: "overcome", c: false}, {t: "achieve", c: false}, {t: "struggle", c: true}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Good teachers always _______ their students to try again.",
                            options:[
                                {t: "encourage", c: true}, {t: "fail", c: false}, {t: "face", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "If you work hard, you will definitely _______ your goals.",
                            options:[
                                {t: "struggle", c: false}, {t: "achieve", c: true}, {t: "question", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "It is perfectly normal to _______ on your first attempt.",
                            options:[
                                {t: "strive", c: false}, {t: "achieve", c: false}, {t: "fail", c: true}
                            ]
                        }
                    ]
                },
                {
                    title: "Words of Resilience",
                    drills:[
                        {
                            type: "mcq",
                            q: "She grew up in poverty and overcame terrible _______.",
                            options:[
                                {t: "support", c: false}, {t: "adversity", c: true}, {t: "goal", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The winter was a time of severe _______ for the small village.",
                            options:[
                                {t: "hardship", c: true}, {t: "resilience", c: false}, {t: "strength", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Climbing Mount Everest is considered a massive _______.",
                            options:[
                                {t: "setback", c: false}, {t: "tragedy", c: false}, {t: "challenge", c: true}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Her _______ paid off when she finally passed the test after five tries.",
                            options:[
                                {t: "persistence", c: true}, {t: "failure", c: false}, {t: "mistake", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "I realized I had made a huge _______ when I sent the wrong email.",
                            options:[
                                {t: "precious", c: false}, {t: "mistake", c: true}, {t: "support", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Losing the first match was a _______, but the team recovered.",
                            options:[
                                {t: "goal", c: false}, {t: "setback", c: true}, {t: "resilience", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The earthquake was a terrible _______ that affected the whole region.",
                            options:[
                                {t: "aim", c: false}, {t: "tragedy", c: true}, {t: "strength", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "You need physical and mental _______ to run a marathon.",
                            options:[
                                {t: "strength", c: true}, {t: "adversity", c: false}, {t: "failure", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The town showed incredible _______ by rebuilding in just one year.",
                            options:[
                                {t: "resilience", c: true}, {t: "hardship", c: false}, {t: "overwhelmed", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "My ultimate _______ is to become a successful doctor.",
                            options:[
                                {t: "goal", c: true}, {t: "mistake", c: false}, {t: "tragedy", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "His main _______ in life was to help the poor.",
                            options:[
                                {t: "setback", c: false}, {t: "aim", c: true}, {t: "failure", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Don't be afraid of _______; it is just a stepping stone to success.",
                            options:[
                                {t: "failure", c: true}, {t: "support", c: false}, {t: "strength", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "I couldn't have done it without the _______ of my friends and family.",
                            options:[
                                {t: "support", c: true}, {t: "adversity", c: false}, {t: "challenge", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Make sure you don't waste time, because it is extremely _______.",
                            options:[
                                {t: "precious", c: true}, {t: "overwhelmed", c: false}, {t: "setback", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "With so much homework and exams, I feel completely _______.",
                            options:[
                                {t: "resilience", c: false}, {t: "overwhelmed", c: true}, {t: "precious", c: false}
                            ]
                        }
                    ]
                },
                {
                    title: "Phrasal Verbs: CARRY",
                    drills:[
                        {
                            type: "mcq",
                            q: "Despite the noise, they managed to _______ with the lesson.",
                            options:[
                                {t: "carry on", c: true}, {t: "carry back", c: false}, {t: "carry off", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The scientists will _______ the experiment in the new lab.",
                            options:[
                                {t: "carry away", c: false}, {t: "carry out", c: true}, {t: "carry over", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Any unused vacation days will _______ to next year.",
                            options:[
                                {t: "carry over", c: true}, {t: "carry through", c: false}, {t: "carry on", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "He got _______ by the excitement and started shouting.",
                            options:[
                                {t: "carried back", c: false}, {t: "carried away", c: true}, {t: "carried off", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "It was a difficult speech, but she _______ it _______ perfectly.",
                            options:[
                                {t: "carried / off", c: true}, {t: "carried / back", c: false}, {t: "carried / away", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Her positive attitude _______ the team _______ the hard times.",
                            options:[
                                {t: "carried / over", c: false}, {t: "carried / through", c: true}, {t: "carried / on", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Hearing that old song _______ me _______ to my childhood.",
                            options:[
                                {t: "carries / off", c: false}, {t: "carries / out", c: false}, {t: "carries / back", c: true}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "We must _______ these important values to the next generation.",
                            options:[
                                {t: "carry forward", c: true}, {t: "carry away", c: false}, {t: "carry off", c: false}
                            ]
                        }
                    ]
                },
                {
                    title: "Phrasal Verbs: CALL",
                    drills:[
                        {
                            type: "mcq",
                            q: "If you need help moving the boxes, you can _______ me.",
                            options:[
                                {t: "call on", c: true}, {t: "call out", c: false}, {t: "call off", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Because of the heavy rain, they had to _______ the match.",
                            options:[
                                {t: "call back", c: false}, {t: "call off", c: true}, {t: "call up", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "An emergency like this _______ immediate action from the leaders.",
                            options:[
                                {t: "calls around", c: false}, {t: "calls in", c: false}, {t: "calls for", c: true}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "I can't talk right now, I will _______ you _______ later.",
                            options:[
                                {t: "call / off", c: false}, {t: "call / back", c: true}, {t: "call / for", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The situation was getting dangerous, so we had to _______ the police.",
                            options:[
                                {t: "call in", c: true}, {t: "call out", c: false}, {t: "call off", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "I miss my grandmother. I think I will _______ her _______ tonight.",
                            options:[
                                {t: "call / off", c: false}, {t: "call / around", c: false}, {t: "call / up", c: true}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The journalist _______ the politician _______ for lying to the public.",
                            options:[
                                {t: "called / out", c: true}, {t: "called / for", c: false}, {t: "called / off", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "To find the best price, I will have to _______ to different stores.",
                            options:[
                                {t: "call back", c: false}, {t: "call around", c: true}, {t: "call in", c: false}
                            ]
                        }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    drills:[
                        {
                            type: "mcq",
                            q: "If you want to achieve your dreams, remember that _______.",
                            options:[
                                {t: "persistence is key", c: true}, {t: "time is precious", c: false}, {t: "call the whole thing off", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "This assignment is so massive and confusing, _______.",
                            options:[
                                {t: "face our challenges", c: false}, {t: "I don't know where to start", c: true}, {t: "give up on", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Don't waste a single moment of your life; _______.",
                            options:[
                                {t: "strive for a better result", c: false}, {t: "cope with the pressure", c: false}, {t: "time is precious", c: true}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Since nobody showed up, we had to _______.",
                            options:[
                                {t: "call the whole thing off", c: true}, {t: "persistence is key", c: false}, {t: "give up on", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "No matter how hard it gets, you should never _______ your goals.",
                            options:[
                                {t: "give up on", c: true}, {t: "time is precious", c: false}, {t: "face our challenges", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Many professional athletes use meditation to help them _______.",
                            options:[
                                {t: "call the whole thing off", c: false}, {t: "cope with the pressure", c: true}, {t: "I don't know where to start", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Instead of running away, we need to stand strong and _______.",
                            options:[
                                {t: "time is precious", c: false}, {t: "give up on", c: false}, {t: "face our challenges", c: true}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Even if you did well, you must always _______.",
                            options:[
                                {t: "strive for a better result", c: true}, {t: "call the whole thing off", c: false}, {t: "I don't know where to start", c: false}
                            ]
                        }
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
                    title: "Embedded Questions (Rules & Wh- words)",
                    audio: "TTS: An embedded question is a question placed inside another statement or question. They use affirmative word order, meaning Subject plus Verb, instead of question word order. We do not use the auxiliaries do, does, or did. We use them to sound more polite or to express uncertainty. For example: I don't know where he is.",
                    explanation: "Embedded questions are questions placed inside another statement. They use <b>affirmative word order (Subject + Verb)</b>, and we drop the auxiliaries <i>do/does/did</i>. We use them to be polite or express uncertainty.<br><br><span style='color:#0077b6; font-style:italic;'>(Perguntas embutidas são perguntas dentro de outra frase. Elas usam a <b>ordem afirmativa (Sujeito + Verbo)</b> e não usam os auxiliares do/does/did. Nós as usamos para sermos educados ou expressar incerteza.)</span>",
                    samples:[
                        { en: "<b>Direct (Wh-):</b> Why is he struggling? <br><b>Embedded:</b> I don't know <b>why he is struggling</b>.", pt: "<span style='color:#0077b6'>(Eu não sei por que ele está tendo dificuldades.)</span>" },
                        { en: "<b>Direct (Wh- + do/does/did):</b> Where did she go? <br><b>Embedded:</b> I wonder <b>where she went</b>.", pt: "<span style='color:#0077b6'>(Eu me pergunto aonde ela foi. -> Note que o 'did' some e o verbo vai para o passado.)</span>" },
                        { en: "<b>Polite Request:</b> Where is the support group? <br><b>Embedded:</b> Could you tell me <b>where the support group is</b>?", pt: "<span style='color:#0077b6'>(Você poderia me dizer onde fica o grupo de apoio?)</span>" }
                    ]
                },
                {
                    title: "Embedded Questions (Yes/No & Infinitives)",
                    audio: "TTS: For Yes or No questions, we use 'if' or 'whether' instead of a question word. For example: I wonder if she passed the test. We can also use a Wh- word plus an infinitive to show a choice or action. For example: I don't know what to do.",
                    explanation: "For Yes/No questions, we use <b>if</b> or <b>whether</b> to connect the embedded clause. We can also use a Wh- word followed by an <b>infinitive (to + verb)</b> to express a choice or a dilemma.<br><br><span style='color:#0077b6; font-style:italic;'>(Para perguntas de Sim/Não, usamos <b>if</b> ou <b>whether (se)</b> para conectar. Também podemos usar uma palavra Wh- seguida de um <b>infinitivo (to + verbo)</b> para expressar uma escolha ou dilema.)</span>",
                    samples:[
                        { en: "<b>Yes/No:</b> Did she achieve the goal? <br><b>Embedded:</b> I wonder <b>if she achieved</b> the goal.", pt: "<span style='color:#0077b6'>(Eu me pergunto se ela alcançou a meta.)</span>" },
                        { en: "<b>Yes/No (Formal):</b> Is he coming? <br><b>Embedded:</b> Do you know <b>whether he is coming</b>?", pt: "<span style='color:#0077b6'>(Você sabe se ele vem?)</span>" },
                        { en: "<b>Infinitive (Choice):</b> I don't know <b>what to do</b> about this adversity.", pt: "<span style='color:#0077b6'>(Eu não sei o que fazer sobre esta adversidade.)</span>" },
                        { en: "<b>Infinitive (Direction):</b> Can you show me <b>where to go</b>?", pt: "<span style='color:#0077b6'>(Você pode me mostrar aonde ir?)</span>" }
                    ]
                },
                {
                    title: "Reported Speech: Tense Backshift",
                    audio: "TTS: When we report what someone said in the past, the verb usually jumps back one tense. Simple Present becomes Simple Past. Present Continuous becomes Past Continuous. Simple Past and Present Perfect become Past Perfect. Will becomes Would. Can becomes Could. May becomes Might. Must and Have to become Had to.",
                    explanation: "When reporting what someone said, we usually move the tense <b>one step back into the past</b>. Quotation marks are removed, and pronouns often change.<br><br><span style='color:#0077b6; font-style:italic;'>(Ao relatar o que alguém disse, geralmente recuamos o tempo verbal <b>um passo para o passado</b>. As aspas são removidas e os pronomes frequentemente mudam.)</span>",
                    samples:[
                        { en: "<b>Simple Present &rarr; Simple Past:</b> <br>\"I <b>strive</b> for success.\" &rarr; He said he <b>strove</b> for success.", pt: "<span style='color:#0077b6'>(\"Eu me esforço...\" &rarr; Ele disse que se esforçava...)</span>" },
                        { en: "<b>Present Cont. &rarr; Past Cont.:</b> <br>\"She <b>is facing</b> hardship.\" &rarr; He said she <b>was facing</b> hardship.", pt: "<span style='color:#0077b6'>(\"Ela está enfrentando...\" &rarr; Ele disse que ela estava enfrentando...)</span>" },
                        { en: "<b>Simple Past &rarr; Past Perfect:</b> <br>\"We <b>failed</b> the test.\" &rarr; She said they <b>had failed</b> the test.", pt: "<span style='color:#0077b6'>(\"Nós falhamos...\" &rarr; Ela disse que eles tinham falhado...)</span>" },
                        { en: "<b>Present Perfect &rarr; Past Perfect:</b> <br>\"I <b>have overcome</b> it.\" &rarr; He said he <b>had overcome</b> it.", pt: "<span style='color:#0077b6'>(\"Eu superei...\" &rarr; Ele disse que tinha superado...)</span>" },
                        { en: "<b>Modals (Will/Can/May/Must):</b> <br>\"I <b>will</b> carry on.\" &rarr; She said she <b>would</b> carry on.", pt: "<span style='color:#0077b6'>(\"Eu continuarei.\" &rarr; Ela disse que continuaria.)</span>" }
                    ]
                },
                {
                    title: "Reported Speech: Adverbs & Proximity",
                    audio: "TTS: We must change time and place words to match the new perspective. Now becomes Then or At that moment. Today becomes That day. Yesterday becomes The day before. Tomorrow becomes The next day. Last night becomes The night before. Here becomes There. This becomes That.",
                    explanation: "Words related to time, place, and proximity must change to reflect the new perspective of the speaker (since they are reporting it at a different time and place).<br><br><span style='color:#0077b6; font-style:italic;'>(Palavras relacionadas a tempo, lugar e proximidade devem mudar para refletir a nova perspectiva de quem fala.)</span>",
                    samples:[
                        { en: "<b>Now</b> &rarr; Then / At that moment <br>(\"Do it now\" &rarr; He said to do it <b>then</b>.)", pt: "<span style='color:#0077b6'>(agora &rarr; então / naquele momento)</span>" },
                        { en: "<b>Today</b> &rarr; That day <br>(\"I'm busy today\" &rarr; She said she was busy <b>that day</b>.)", pt: "<span style='color:#0077b6'>(hoje &rarr; aquele dia)</span>" },
                        { en: "<b>Yesterday</b> &rarr; The day before / The previous day <br>(\"I left yesterday\" &rarr; He said he had left <b>the day before</b>.)", pt: "<span style='color:#0077b6'>(ontem &rarr; o dia anterior)</span>" },
                        { en: "<b>Tomorrow</b> &rarr; The next day / The following day <br>(\"I'll see you tomorrow\" &rarr; She said she'd see me <b>the next day</b>.)", pt: "<span style='color:#0077b6'>(amanhã &rarr; o dia seguinte)</span>" },
                        { en: "<b>Last night</b> &rarr; The night before <br>(\"I slept last night\" &rarr; He said he had slept <b>the night before</b>.)", pt: "<span style='color:#0077b6'>(ontem à noite &rarr; a noite anterior)</span>" },
                        { en: "<b>Here / This</b> &rarr; There / That <br>(\"I like this here\" &rarr; He said he liked <b>that there</b>.)", pt: "<span style='color:#0077b6'>(aqui / este &rarr; lá / aquele)</span>" }
                    ]
                },
                {
                    title: "Tag Questions: Opposite Logic",
                    audio: "TTS: A tag question is a short question at the end of a sentence to confirm information. Positive statements take a negative tag, and negative statements take a positive tag. Use the same auxiliary verb. For example: You are strong, aren't you? He didn't fail, did he?",
                    explanation: "A tag question is a short question added to the end of a statement to ask for confirmation. The rule is <b>Opposite Logic</b>: Positive statements take negative tags, and negative statements take positive tags.<br><br><span style='color:#0077b6; font-style:italic;'>(Uma 'tag question' é uma pergunta curta para pedir confirmação. A regra é <b>Lógica Oposta</b>: frases positivas levam tags negativas, e frases negativas levam tags positivas.)</span>",
                    samples:[
                        { en: "<b>Positive &rarr; Negative:</b> Time is precious, <b>isn't it</b>?", pt: "<span style='color:#0077b6'>(O tempo é precioso, não é?)</span>" },
                        { en: "<b>Negative &rarr; Positive:</b> You aren't overwhelmed, <b>are you</b>?", pt: "<span style='color:#0077b6'>(Você não está sobrecarregado, está?)</span>" },
                        { en: "<b>Simple Present:</b> You like challenges, <b>don't you</b>?", pt: "<span style='color:#0077b6'>(Use do/does/don't/doesn't para Presente Simples.)</span>" },
                        { en: "<b>Simple Past:</b> He overcame the setback, <b>didn't he</b>?", pt: "<span style='color:#0077b6'>(Use did/didn't para Passado Simples.)</span>" },
                        { en: "<b>Modals:</b> She can carry on, <b>can't she</b>?", pt: "<span style='color:#0077b6'>(Use o próprio modal na tag.)</span>" }
                    ]
                },
                {
                    title: "Tag Questions: Special Cases",
                    audio: "TTS: There are a few exceptions in tag questions. The tag for 'I am' is 'aren't I'. For example: I am resilient, aren't I? For suggestions using 'Let's', the tag is 'shall we'. For example: Let's carry out the plan, shall we? For imperatives, we usually use 'will you'.",
                    explanation: "There are a few important exceptions and special forms for tag questions that do not follow the standard opposite logic perfectly.<br><br><span style='color:#0077b6; font-style:italic;'>(Existem algumas exceções e formas especiais para tag questions que não seguem perfeitamente a lógica oposta.)</span>",
                    samples:[
                        { en: "<b>'I am' exception:</b> I am resilient, <b>aren't I</b>?", pt: "<span style='color:#0077b6'>(A tag para 'I am' é sempre 'aren't I?', pois 'amn't' não existe formalmente.)</span>" },
                        { en: "<b>'Let's' (Suggestions):</b> Let's carry out the plan, <b>shall we</b>?", pt: "<span style='color:#0077b6'>(Sugestões com 'Let's' sempre usam 'shall we?'.)</span>" },
                        { en: "<b>Imperatives (Commands):</b> Open the door, <b>will you</b>?", pt: "<span style='color:#0077b6'>(Ordens e pedidos diretos usam 'will you?' ou 'would you?' para soar mais gentis.)</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups:[
                {
                    title: "Dialogue 1: Seeking Guidance (Embedded Questions)",
                    audio: "audio/em1-4-10/step3_dialogue1.mp3",
                    lines:[
                        { 
                            speaker: "Albert", 
                            text: "Celine, I am a bit lost. I wonder if you know where the counselor's office is.", 
                            pt: "<span style='color:#0077b6'>(Celine, estou um pouco perdido. Eu me pergunto se você sabe onde fica a sala do conselheiro.)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "I'm not sure, but could you tell me why you need to find it?", 
                            pt: "<span style='color:#0077b6'>(Não tenho certeza, mas você poderia me dizer por que precisa encontrá-la?)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Reporting Advice (Reported Speech)",
                    audio: "audio/em1-4-10/step3_dialogue2.mp3",
                    lines:[
                        { 
                            speaker: "Albert", 
                            text: "I talked to Mrs. Canales today. She told me that I had to embrace my mistakes.", 
                            pt: "<span style='color:#0077b6'>(Eu falei com a Sra. Canales hoje. Ela me disse que eu tinha que aceitar meus erros.)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "That’s wise. She also said that persistence would lead to success.", 
                            pt: "<span style='color:#0077b6'>(Isso é sábio. Ela também disse que a persistência levaria ao sucesso.)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Finding Strength (Tag Questions)",
                    audio: "audio/em1-4-10/step3_dialogue3.mp3",
                    lines:[
                        { 
                            speaker: "Celine", 
                            text: "You won't give up, will you?", 
                            pt: "<span style='color:#0077b6'>(Você não vai desistir, vai?)</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "No way! We have the strength to achieve our aims, don't we?", 
                            pt: "<span style='color:#0077b6'>(De jeito nenhum! Nós temos a força para alcançar nossos objetivos, não temos?)</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice (Tabbed Version - Exactly 40 MCQs)
            grammarDrillGroups: [
                {
                    title: "Embedded Questions",
                    drills:[
                        {
                            type: "mcq",
                            q: "Direct: 'Where is the station?' &rarr; Embedded: 'Do you know _______?'",
                            options:[ { t: "where is the station", c: false }, { t: "where the station is", c: true }, { t: "where station is", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "Direct: 'Why is he struggling?' &rarr; Embedded: 'I don't know _______.'",
                            options:[ { t: "why he is struggling", c: true }, { t: "why is he struggling", c: false }, { t: "why he struggling is", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "Direct: 'Did she pass the test?' &rarr; Embedded: 'I wonder _______.'",
                            options:[ { t: "did she pass the test", c: false }, { t: "if she passed the test", c: true }, { t: "if did she pass the test", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "Direct: 'What time does the class start?' &rarr; Embedded: 'Could you tell me _______?'",
                            options:[ { t: "what time does the class start", c: false }, { t: "what time the class starts", c: true }, { t: "what time starts the class", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "Direct: 'Is he coming to the party?' &rarr; Embedded: 'I am not sure _______.'",
                            options:[ { t: "is he coming", c: false }, { t: "whether he is coming", c: true }, { t: "if is he coming", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "Direct: 'How can I cope with this?' &rarr; Embedded: 'Do you know _______?'",
                            options:[ { t: "how can I cope with this", c: false }, { t: "how I can cope with this", c: true }, { t: "how do I cope with this", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "Direct: 'Where did she go?' &rarr; Embedded: 'I wonder _______.'",
                            options:[ { t: "where did she go", c: false }, { t: "where she went", c: true }, { t: "where went she", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "Direct: 'What did the teacher say?' &rarr; Embedded: 'Could you tell me _______?'",
                            options:[ { t: "what did the teacher say", c: false }, { t: "what the teacher said", c: true }, { t: "what said the teacher", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "Direct: 'Who is the new student?' &rarr; Embedded: 'I wonder _______.'",
                            options:[ { t: "who the new student is", c: true }, { t: "who is the new student", c: false }, { t: "who the new student", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "Direct: 'Does she need help?' &rarr; Embedded: 'I don't know _______.'",
                            options:[ { t: "does she need help", c: false }, { t: "if does she need help", c: false }, { t: "if she needs help", c: true } ]
                        }
                    ]
                },
                {
                    title: "Reported Speech (Tenses)",
                    drills:[
                        {
                            type: "mcq",
                            q: "'I strive for success.' &rarr; Albert said that he _______ for success.",
                            options:[ { t: "strives", c: false }, { t: "strove", c: true }, { t: "had striven", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'She is facing hardship.' &rarr; Celine said she _______ hardship.",
                            options:[ { t: "was facing", c: true }, { t: "is facing", c: false }, { t: "has faced", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'We failed the exam.' &rarr; They said they _______ the exam.",
                            options:[ { t: "failed", c: false }, { t: "have failed", c: false }, { t: "had failed", c: true } ]
                        },
                        {
                            type: "mcq",
                            q: "'I have overcome it.' &rarr; He said he _______ it.",
                            options:[ { t: "had overcome", c: true }, { t: "overcame", c: false }, { t: "has overcome", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'I will carry on.' &rarr; She said she _______ carry on.",
                            options:[ { t: "will", c: false }, { t: "would", c: true }, { t: "could", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'I can do it.' &rarr; He told me he _______ do it.",
                            options:[ { t: "can", c: false }, { t: "could", c: true }, { t: "would", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'I may need help.' &rarr; She said she _______ need help.",
                            options:[ { t: "might", c: true }, { t: "must", c: false }, { t: "can", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'You must focus.' &rarr; The teacher said I _______ focus.",
                            options:[ { t: "must to", c: false }, { t: "had to", c: true }, { t: "have to", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'I don't know the answer.' &rarr; He said he _______ the answer.",
                            options:[ { t: "didn't know", c: true }, { t: "doesn't know", c: false }, { t: "hadn't known", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'We are studying.' &rarr; They said they _______ studying.",
                            options:[ { t: "were", c: true }, { t: "are", c: false }, { t: "had been", c: false } ]
                        }
                    ]
                },
                {
                    title: "Reported Speech (Adverbs)",
                    drills:[
                        {
                            type: "mcq",
                            q: "'I will do it now.' &rarr; He said he would do it _______.",
                            options:[ { t: "now", c: false }, { t: "then", c: true }, { t: "today", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'The meeting is today.' &rarr; She said the meeting was _______.",
                            options:[ { t: "today", c: false }, { t: "that day", c: true }, { t: "the next day", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'I was struggling yesterday.' &rarr; He said he had been struggling _______.",
                            options:[ { t: "the day before", c: true }, { t: "yesterday", c: false }, { t: "that day", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'I'll see you tomorrow.' &rarr; She said she would see me _______.",
                            options:[ { t: "tomorrow", c: false }, { t: "the next day", c: true }, { t: "the previous day", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'I was tired last night.' &rarr; He said he had been tired _______.",
                            options:[ { t: "last night", c: false }, { t: "the night before", c: true }, { t: "the next night", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'Come here, Albert.' &rarr; Celine told Albert to go _______.",
                            options:[ { t: "here", c: false }, { t: "there", c: true }, { t: "that", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'Look at this setback.' &rarr; She told me to look at _______.",
                            options:[ { t: "that setback", c: true }, { t: "this setback", c: false }, { t: "the setback here", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'I bought these books.' &rarr; He said he had bought _______.",
                            options:[ { t: "these books", c: false }, { t: "those books", c: true }, { t: "that books", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'We are leaving tomorrow.' &rarr; They said they were leaving _______.",
                            options:[ { t: "the following day", c: true }, { t: "yesterday", c: false }, { t: "today", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "'I saw him yesterday.' &rarr; She said she had seen him _______.",
                            options:[ { t: "the previous day", c: true }, { t: "tomorrow", c: false }, { t: "that day", c: false } ]
                        }
                    ]
                },
                {
                    title: "Tag Questions",
                    drills:[
                        {
                            type: "mcq",
                            q: "Persistence isn't easy, _______?",
                            options:[ { t: "isn't it", c: false }, { t: "is it", c: true }, { t: "does it", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "You achieved your aim, _______?",
                            options:[ { t: "didn't you", c: true }, { t: "don't you", c: false }, { t: "did you", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "Let's carry on with the project, _______?",
                            options:[ { t: "don't we", c: false }, { t: "shall we", c: true }, { t: "will we", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "I am very persistent, _______?",
                            options:[ { t: "am I not", c: false }, { t: "aren't I", c: true }, { t: "don't I", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "You strive for your goals, _______?",
                            options:[ { t: "aren't you", c: false }, { t: "don't you", c: true }, { t: "didn't you", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "He overcame the adversity, _______?",
                            options:[ { t: "isn't he", c: false }, { t: "doesn't he", c: false }, { t: "didn't he", c: true } ]
                        },
                        {
                            type: "mcq",
                            q: "She won't call the whole thing off, _______?",
                            options:[ { t: "will she", c: true }, { t: "won't she", c: false }, { t: "does she", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "They focus on their mistakes, _______?",
                            options:[ { t: "don't they", c: true }, { t: "aren't they", c: false }, { t: "didn't they", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "We haven't failed, _______?",
                            options:[ { t: "haven't we", c: false }, { t: "have we", c: true }, { t: "are we", c: false } ]
                        },
                        {
                            type: "mcq",
                            q: "You will help me, _______?",
                            options:[ { t: "will you", c: false }, { t: "won't you", c: true }, { t: "don't you", c: false } ]
                        }
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
                    text: "Celine, you said that the project was difficult, didn't you?<br><small style='color:#0077b6'>(Celine, você disse que o projeto era difícil, não disse?)</small>", 
                    audio: "TTS: Celine, you said that the project was difficult, didn't you?", 
                    arrow: "↗" 
                },
                { 
                    text: "Yes, I did! I wonder if you know where the support group is.<br><small style='color:#0077b6'>(Sim! Eu me pergunto se você sabe onde fica o grupo de apoio.)</small>", 
                    audio: "TTS: Yes, I did! I wonder if you know where the support group is.", 
                    arrow: "↘" 
                },
                { 
                    text: "I'm not sure. But we must carry on with our goals, mustn't we?<br><small style='color:#0077b6'>(Não tenho certeza. Mas nós devemos continuar com nossos objetivos, não devemos?)</small>", 
                    audio: "TTS: I'm not sure. But we must carry on with our goals, mustn't we?", 
                    arrow: "↗" 
                },
                { 
                    text: "Exactly. My mother told me that time was precious.<br><small style='color:#0077b6'>(Exatamente. Minha mãe me disse que o tempo era precioso.)</small>", 
                    audio: "TTS: Exactly. My mother told me that time was precious.", 
                    arrow: "↘" 
                },
                { 
                    text: "Let's strive to overcome this challenge, shall we?<br><small style='color:#0077b6'>(Vamos nos esforçar para superar este desafio, vamos?)</small>", 
                    audio: "TTS: Let's strive to overcome this challenge, shall we?", 
                    arrow: "↗" 
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
                    instruction: "Listen to Albert describing a difficult week and type the missing words.<br><small style='color:#0077b6'>(Ouça Albert descrevendo uma semana difícil e digite as palavras que faltam.)</small>",
                    audio: "TTS: Last week was a big setback for me. I failed my history test and felt very overwhelmed. I didn't know where to start. However, my parents told me that I had to embrace my mistakes. They said that persistence was the key to success.",
                    text: "Last week was a big [setback] for me. I [failed] my history [test] and felt very [overwhelmed]. I[didn't know where to start]. However, my [parents] [told] me that I [had] to [embrace] my[mistakes]. They [said] that [persistence] [was] the key to [success]."
                },
                // Drill 2: Dropdown (Crash-proof format)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation and choose the correct options.<br><small style='color:#0077b6'>(Ouça a conversa e escolha as opções corretas.)</small>",
                    audio: "audio/em1-4-10/step5_drill2.mp3",
                    questions:[
                        { 
                            q: "Celine: Albert, [could you tell me why*| why you could tell me | do you know why] you are [struggling*| struggle | struggled]?", 
                            a: "could you tell me why" 
                        },
                        { 
                            q: "Albert: I don't know. The counselor [asked if*| asked that | asked me] I [needed* | need | needing] help.", 
                            a: "asked if" 
                        },
                        { 
                            q: "Celine: You [will carry on*| carry on | carried on], [won't you*| will you | don't you]?", 
                            a: "will carry on" 
                        },
                        { 
                            q: "Albert: Yes, I will. I won't [call off*| call back | call in] my dreams.", 
                            a: "call off" 
                        }
                    ]
                },
                // Drill 3: Audio Choice
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct logical answer.<br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta lógica correta.)</small>",
                    audio: "TTS: Did you tell Mrs. Canales that you were feeling stressed?",
                    options:[
                        { t: "Yes, I told her that I was feeling overwhelmed.", c: true },
                        { t: "Let's carry out the plan, shall we?", c: false },
                        { t: "I wonder where the teacher is.", c: false },
                        { t: "He said that he can swim.", c: false }
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
                    title: "6a: Narration - Overcoming the Silence",
                    audio: "TTS: Lucas is a student who lives with ADHD. Last month, he faced a major hardship when he failed his finals. He felt overwhelmed, but he decided to embrace the situation. He asked his teacher if he could try again. Mrs. Canales told him that he had to focus on his strengths. He started a study group and carried out a new plan. Now, Lucas is more optimistic. He realizes that persistence is key, isn't it? || audio/em1-4-10/p6_text1.mp3",
                    body: "Lucas is a student who lives with [ADHD](tooltip:adhd). Last month, he [faced](tooltip:face) a major [hardship](tooltip:hardship) when he [failed](tooltip:fail) his finals. He felt [overwhelmed](tooltip:overwhelmed), but he decided to [embrace](tooltip:embrace) the situation. He <b>asked his teacher if he could try again</b>. Mrs. Canales told him that he <b>had to focus on his strengths</b>. He started a study group and [carried out](tooltip:carry-out) a new plan. Now, Lucas is more optimistic. He realizes that [persistence is key](tooltip:persistence-is-key), isn't it?",
                    questions:[
                        { 
                            q: "What is Lucas's main challenge?", 
                            options:[ 
                                {t: "He failed his driving test.", c: false}, 
                                {t: "He is dealing with ADHD and failed his finals.", c: true}, 
                                {t: "He called off the meeting.", c: false} 
                            ] 
                        },
                        { 
                            q: "What did Mrs. Canales tell him?", 
                            options:[ 
                                {t: "She said he had to focus on his strengths.", c: true}, 
                                {t: "She asked where the problem was.", c: false}, 
                                {t: "She told him to give up.", c: false} 
                            ] 
                        },
                        { 
                            q: "What was the result of his new plan?", 
                            options:[ 
                                {t: "He became more overwhelmed.", c: false}, 
                                {t: "He is now more optimistic.", c: true}, 
                                {t: "He called around for help.", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "6b: Dialogue - The Power of Resilience",
                    audio: "audio/em1-4-10/p6_text2.mp3",
                    body: "<b>Celine:</b> Albert, <b>did you hear what the speaker said yesterday?</b><br><b>Albert:</b> No, I was busy. <b>Could you tell me what the topic was?</b><br><b>Celine:</b> He <b>said that [resilience](tooltip:resilience) was like a [muscle](tooltip:muscle)</b>. You have to train it.<br><b>Albert:</b> That makes sense. We [struggle](tooltip:struggle) to grow, don't we?<br><b>Celine:</b> Exactly. He told us that we <b>shouldn't get carried away by our failures</b>.<br><b>Albert:</b> I [agree](tooltip:agree). <b>[I wonder if](tooltip:I-wonder-if) I can [achieve](tooltip:achieve) my aim this year.</b>",
                    questions:[
                        { 
                            q: "What did the speaker compare resilience to?", 
                            options:[ 
                                {t: "A setback.", c: false}, 
                                {t: "A muscle.", c: true}, 
                                {t: "A tragedy.", c: false} 
                            ] 
                        },
                        { 
                            q: "What was the speaker's advice about failures?", 
                            options:[ 
                                {t: "We should forget them.", c: false}, 
                                {t: "We shouldn't get carried away by them.", c: true}, 
                                {t: "We should call them back.", c: false} 
                            ] 
                        },
                        { 
                            q: "What is Albert wondering about?", 
                            options:[ 
                                {t: "If he can achieve his goal.", c: true}, 
                                {t: "Where the speaker lives.", c: false}, 
                                {t: "Why Celine is laughing.", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "6c: Description - A Young Advocate",
                    audio: "TTS: Maria is a young activist. Two years ago, her community suffered a tragedy due to a flood. Many people wanted to give up, but Maria carried on. She asked the government if they could provide support. She called in experts to improve the infrastructure. She told the news that her people were strong. Maria is a true inspiration, isn't she? || audio/em1-4-10/p6_text3.mp3",
                    body: "Maria is a young activist. Two years ago, her community suffered a [tragedy](tooltip:tragedy) due to a [flood](tooltip:flood). Many people wanted to give up, but Maria [carried on](tooltip:carry-on). She <b>asked the government if they could [provide](tooltip:provide) [support](tooltip:support)</b>. She [called in](tooltip:call-in) experts to [improve](tooltip:improve) the infrastructure. She <b>told the news that her people were strong</b>. Maria is a true [inspiration](tooltip:inspiration), isn't she?",
                    questions:[
                        { 
                            q: "What happened to Maria's community?", 
                            options:[ 
                                {t: "They achieved success.", c: false}, 
                                {t: "They suffered a tragedy (flood).", c: true}, 
                                {t: "They called off the project.", c: false} 
                            ] 
                        },
                        { 
                            q: "Who did Maria call for help?", 
                            options:[ 
                                {t: "Her parents.", c: false}, 
                                {t: "Experts.", c: true}, 
                                {t: "A musician.", c: false} 
                            ] 
                        },
                        { 
                            q: "How does the text describe Maria?", 
                            options:[ 
                                {t: "As an inspiration.", c: true}, 
                                {t: "As someone overwhelmed.", c: false}, 
                                {t: "As a failure.", c: false} 
                            ] 
                        }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 7: QUICK DRILLS (Mixed Types - Expanded to 40)
        // ======================================================
        {
            title: "Monkey see, Monkey do",
            
                    drills:[
                        { type: "mcq", instruction:"Choose the correct phrasal verb.<br>Don't worry, just _______ and try again.", options: [{t: "call in", c: false}, {t: "carry on", c: true}, {t: "get away", c: false}] },
                        { type: "mcq", instruction:"Choose the correct phrasal verb.<br>The game was _______ due to rain.", options: [{t: "called off", c: true}, {t: "carried out", c: false}, {t: "called on", c: false}] },
                        { type: "mcq", instruction:"Choose the correct phrasal verb.<br>Scientists will _______ the experiment.", options: [{t: "carry away", c: false}, {t: "carry out", c: true}, {t: "call for", c: false}] },
                        { type: "mcq", instruction:"Choose the correct phrasal verb.<br>I need to _______ my inner strength.", options: [{t: "call off", c: false}, {t: "call on", c: true}, {t: "call out", c: false}] },
                        { type: "mcq", instruction:"Choose the correct phrasal verb.<br>I will _______ you _______ later.", options: [{t: "call / back", c: true}, {t: "carry / on", c: false}, {t: "call / for", c: false}] },
                        { type: "mcq", instruction:"Choose the correct phrasal verb.<br>That song _______ me _______ to my childhood.", options: [{t: "carries / back", c: true}, {t: "calls / up", c: false}, {t: "carries / out", c: false}] },
                        { type: "mcq", instruction:"Choose the correct phrasal verb.<br>Her support _______ him _______ the crisis.", options:[{t: "carried / through", c: true}, {t: "called / off", c: false}, {t: "carried / away", c:false}] },
                        { type: "mcq", instruction:"Choose the correct phrasal verb.<br>The hospital had to _______ a specialist.", options: [{t: "call in", c: true}, {t: "call on", c: false}, {t: "call up", c: false}] },
                        { type: "mcq", instruction:"Choose the correct phrasal verb.<br>This situation _______ for urgent action.", options: [{t: "calls for", c: true}, {t: "carries on", c: false}, {t: "calls out", c: false}] },
                        { type: "mcq", instruction:"Choose the correct phrasal verb.<br>I need to _______ to find a store.", options: [{t: "call around", c: true}, {t: "carry back", c: false}, {t: "call off", c: false}] },

                        { type: "word-order", instruction: "Unscramble the embedded question.", sentence: "problem / know / I / where / don't / the / is / .", correct: "I don't know where the problem is ." },
                        { type: "word-order", instruction: "Unscramble the embedded question.", sentence: "me / tell / how / could / did / you / it / you / ?", correct: "Could you tell me how you did it ?" },
                        { type: "word-order", instruction: "Unscramble the embedded question.", sentence: "is / she / why / I / asked / sad / .", correct: "I asked why she is sad ." },
                        { type: "clickable-error", instruction: "Find and correct the mistake.", sentence: "I wonder [did](error:if) [she](error:) [fail](error:failed) the test." },
                        { type: "clickable-error", instruction: "Find and correct the mistake.", sentence: "Can you tell me what [is](error:the) [the](error:problem) [problem](error:is) ?" },
                        { type: "typing", instruction: "Rewrite the direct question as an embedded question.", text: "Direct: Why is he struggling? <br> Embedded: I don't know [why he is struggling]." },
                        { type: "typing", instruction: "Rewrite the direct question as an embedded question.", text: "Direct: Did she pass? <br> Embedded: I'm not sure [if she passed]." },
                        { type: "typing", instruction: "Rewrite the direct question as an embedded question.", text: "Direct: Where did they go? <br> Embedded: Do you know [where they went]?" },
                        { type: "word-order", instruction: "Unscramble the embedded question.", sentence: "going / Ask / are / where / them / they / .", correct: "Ask them where they are going ." },
                        { type: "clickable-error", instruction: "Find and correct the mistake.", sentence: "He doesn't know what [does](error:) he [have](error:has) to do." },

                        { type: "matching", instruction: "Match the direct speech to its reported form.", pairs: [{ left: "\"I am struggling.\"", right: "He said he was struggling.", val: "1" }, { left: "\"I will carry on.\"", right: "He said he would carry on.", val: "2" }, { left: "\"I have failed.\"", right: "He said he had failed.", val: "3" }] },
                        { type: "mcq", instruction:"Choose the correct reported form.<br>'I saw him yesterday.' &rarr; She said she _______ him the day before.", options: [{t: "saw", c: false}, {t: "had seen", c: true}, {t: "has seen", c: false}] },
                        { type: "mcq", instruction:"Choose the correct reported form.<br>'We are leaving now.' &rarr; They said they were leaving _______.", options: [{t: "now", c: false}, {t: "then", c: true}, {t: "tomorrow", c: false}] },
                        { type: "mcq", instruction:"Choose the correct reported form.<br>'You must be quiet.' &rarr; The teacher told us we _______ to be quiet.", options: [{t: "must", c: false}, {t: "had to", c: true}, {t: "have to", c: false}] },
                        { type: "typing", instruction:"Rewrite the sentence in reported speech.", text: "Direct: \"I am fine today.\" <br> Reported: She said she was fine [that day]." },
                        { type: "typing", instruction:"Rewrite the sentence in reported speech.", text: "Direct: \"I will call you tomorrow.\" <br> Reported: He said he would call me [the next day]." },
                        { type: "typing", instruction:"Rewrite the sentence in reported speech.", text: "Direct: \"I have finished.\" <br> Reported: She said she [had finished]." },
                        { type: "matching", instruction: "Match the direct speech to its reported form.", pairs: [{ left: "\"I can help.\"", right: "He said he could help.", val: "A" }, { left: "\"I may go.\"", right: "He said he might go.", val: "B" }, { left: "\"I was working.\"", right: "He said he had been working.", val: "C" }] },
                        { type: "mcq", instruction:"Choose the correct reported form.<br>'Come here.' &rarr; He told me to go _______.", options: [{t: "here", c: false}, {t: "there", c: true}, {t: "that", c: false}] },
                        { type: "mcq", instruction:"Choose the correct reported form.<br>'This is my book.' &rarr; She said that was _______ book.", options: [{t: "my", c: false}, {t: "her", c: true}, {t: "this", c: false}] },

                        { type: "clickable-error", instruction: "Find and correct the mistake.", sentence: "You strive for your goals, [aren't](error:don't) you?" },
                        { type: "clickable-error", instruction: "Find and correct the mistake.", sentence: "He overcame the adversity, [hasn't](error:didn't) he?" },
                        { type: "mcq", instruction:"Choose the correct tag question.<br>She is resilient, _______?", options: [{t: "isn't she", c: true}, {t: "is she", c: false}, {t: "doesn't she", c: false}] },
                        { type: "mcq", instruction:"Choose the correct tag question.<br>They didn't give up, _______?", options: [{t: "didn't they", c: false}, {t: "did they", c: true}, {t: "do they", c: false}] },
                        { type: "mcq", instruction:"Choose the correct tag question.<br>He works hard, _______?", options: [{t: "don't he", c: false}, {t: "doesn't he", c: true}, {t: "is he", c: false}] },
                        { type: "mcq", instruction:"Choose the correct tag question.<br>I am right, _______?", options: [{t: "am I not", c: false}, {t: "aren't I", c: true}, {t: "don't I", c: false}] },
                        { type: "mcq", instruction:"Choose the correct tag question.<br>Let's start now, _______?", options: [{t: "shall we", c: true}, {t: "will we", c: false}, {t: "do we", c: false}] },
                        { type: "mcq", instruction:"Choose the correct tag question.<br>You won't fail, _______?", options: [{t: "won't you", c: false}, {t: "will you", c: true}, {t: "do you", c: false}] },
                        { type: "mcq", instruction:"Choose the correct tag question.<br>We should help, _______?", options:[{t: "should we", c: false}, {t: "shouldn't we", c:true}, {t: "do we", c:false}] },
                        { type: "mcq", instruction:"Choose the correct tag question.<br>Listen to me, _______?", options:[{t:"don't you", c:false}, {t:"shall you", c:false}, {t:"will you", c:true}] }
                    ]

        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn! Life has challenges, doesn't it? Write a short text (5-7 sentences) about a time you faced a setback or adversity. Explain how you coped with it and what you did to overcome it.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas: Agora é a sua vez! A vida tem desafios, não tem? Escreva um pequeno texto (5-7 frases) sobre uma vez que você enfrentou um contratempo ou adversidade. Explique como você lidou com isso e o que fez para superar.)</span></small>",
            example: "\"Last year, I failed a music audition. It was a difficult tragedy for me. My teacher said that I should embrace my mistakes. I decided to carry on and strive for better results. I carried out a practice plan every day. Persistence is key, isn't it? Eventually, I passed the next one!\"<br><br><small><span style='color:#0077b6'>(\"No ano passado, eu falhei em um teste de música. Foi uma tragédia difícil para mim. Meu professor disse que eu deveria abraçar meus erros. Decidi continuar e me esforçar por resultados melhores. Executei um plano de prática todos os dias. A persistência é a chave, não é? Eventualmente, passei no próximo!\")</span></small>",
            prompts: [
                "Use at least one [Reported Speech] sentence. <br><small><span style='color:#0077b6'>(Use pelo menos uma frase no Discurso Indireto.)</span></small>",
                "Use one [Tag Question]. <br><small><span style='color:#0077b6'>(Use uma Tag Question.)</span></small>",
                "Use two [Phrasal Verbs]. <br><small><span style='color:#0077b6'>(Use dois Verbos Frasais.)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Wrap it up",
            items:[
                // --- Vocabulary: Adversity & Persistence ---
                { 
                    term: "To overcome", 
                    definition: "To successfully reach a desired objective or result.", 
                    defTrans: "Superar",
                    example: "She had to overcome many obstacles to win.", 
                    audioFront: "TTS: To overcome",
                    audioBack: "TTS: She had to overcome many obstacles to win." 
                },
                { 
                    term: "To strive", 
                    definition: "To make great efforts to achieve or obtain something.", 
                    defTrans: "Lutar / Esforçar-se",
                    example: "We must strive for excellence every day.", 
                    audioFront: "TTS: To strive",
                    audioBack: "TTS: We must strive for excellence every day." 
                },
                { 
                    term: "To embrace", 
                    definition: "To accept something willingly or enthusiastically.", 
                    defTrans: "Abraçar / Aceitar",
                    example: "It's important to embrace your mistakes.", 
                    audioFront: "TTS: To embrace",
                    audioBack: "TTS: It's important to embrace your mistakes." 
                },
                { 
                    term: "To question", 
                    definition: "To feel or express doubt about something.", 
                    defTrans: "Questionar",
                    example: "Don't be afraid to question the status quo.", 
                    audioFront: "TTS: To question",
                    audioBack: "TTS: Don't be afraid to question the status quo." 
                },
                { 
                    term: "To focus (on)", 
                    definition: "To give all your attention to a particular person or thing.", 
                    defTrans: "Focar / Concentrar-se (em)",
                    example: "You need to focus on the solution.", 
                    audioFront: "TTS: To focus on",
                    audioBack: "TTS: You need to focus on the solution." 
                },
                { 
                    term: "To carry on", 
                    definition: "To continue doing something despite difficulties.", 
                    defTrans: "Continuar / Prosseguir",
                    example: "Even when tired, they carried on.", 
                    audioFront: "TTS: To carry on",
                    audioBack: "TTS: Even when tired, they carried on." 
                },
                { 
                    term: "To cope with", 
                    definition: "To deal effectively with something difficult.", 
                    defTrans: "Lidar com",
                    example: "How do you cope with difficult news?", 
                    audioFront: "TTS: To cope with",
                    audioBack: "TTS: How do you cope with difficult news?" 
                },
                { 
                    term: "To face", 
                    definition: "To confront a difficult situation directly.", 
                    defTrans: "Encarar / Enfrentar",
                    example: "We are ready to face the truth.", 
                    audioFront: "TTS: To face",
                    audioBack: "TTS: We are ready to face the truth." 
                },
                { 
                    term: "To struggle", 
                    definition: "To have difficulty with a task.", 
                    defTrans: "Ter dificuldade / Lutar",
                    example: "I struggle with math, but I keep trying.", 
                    audioFront: "TTS: To struggle",
                    audioBack: "TTS: I struggle with math, but I keep trying." 
                },
                { 
                    term: "To encourage", 
                    definition: "To give support, confidence, or hope to someone.", 
                    defTrans: "Encorajar / Incentivar",
                    example: "My parents always encourage my dreams.", 
                    audioFront: "TTS: To encourage",
                    audioBack: "TTS: My parents always encourage my dreams." 
                },
                { 
                    term: "To achieve", 
                    definition: "To successfully reach a desired objective.", 
                    defTrans: "Alcançar / Conquistar",
                    example: "You can achieve your goals with hard work.", 
                    audioFront: "TTS: To achieve",
                    audioBack: "TTS: You can achieve your goals with hard work." 
                },
                { 
                    term: "To fail", 
                    definition: "To be unsuccessful in achieving a goal.", 
                    defTrans: "Falhar / Fracassar",
                    example: "It is okay to fail as long as you learn.", 
                    audioFront: "TTS: To fail",
                    audioBack: "TTS: It is okay to fail as long as you learn." 
                },
                { 
                    term: "Adversity / Hardship", 
                    definition: "A difficult or unpleasant situation; misfortune.", 
                    defTrans: "Adversidade / Dificuldade",
                    example: "Resilience is born from adversity.", 
                    audioFront: "TTS: Adversity, Hardship",
                    audioBack: "TTS: Resilience is born from adversity." 
                },
                { 
                    term: "Challenge", 
                    definition: "A task or situation that tests someone's abilities.", 
                    defTrans: "Desafio",
                    example: "This project is a big challenge for us.", 
                    audioFront: "TTS: Challenge",
                    audioBack: "TTS: This project is a big challenge for us." 
                },
                { 
                    term: "Persistence", 
                    definition: "The quality of continuing to do something despite difficulties.", 
                    defTrans: "Persistência",
                    example: "Her persistence led to her success.", 
                    audioFront: "TTS: Persistence",
                    audioBack: "TTS: Her persistence led to her success." 
                },
                { 
                    term: "Mistake / Setback", 
                    definition: "A reversal or check in progress; an error.", 
                    defTrans: "Erro / Contratempo",
                    example: "Every setback is a chance to grow.", 
                    audioFront: "TTS: Mistake, Setback",
                    audioBack: "TTS: Every setback is a chance to grow." 
                },
                { 
                    term: "Tragedy", 
                    definition: "An event causing great suffering or destruction.", 
                    defTrans: "Tragédia",
                    example: "The community recovered from the tragedy.", 
                    audioFront: "TTS: Tragedy",
                    audioBack: "TTS: The community recovered from the tragedy." 
                },
                { 
                    term: "Strength / Resilience", 
                    definition: "The capacity to recover quickly from difficulties.", 
                    defTrans: "Força / Resiliência",
                    example: "He has the internal strength to win.", 
                    audioFront: "TTS: Strength, Resilience",
                    audioBack: "TTS: He has the internal strength to win." 
                },
                { 
                    term: "Goal / Aim", 
                    definition: "A result that one is attempting to achieve.", 
                    defTrans: "Objetivo / Meta",
                    example: "My main goal is to graduate.", 
                    audioFront: "TTS: Goal, Aim",
                    audioBack: "TTS: My main goal is to graduate." 
                },
                { 
                    term: "Failure", 
                    definition: "The state of not meeting a desirable objective.", 
                    defTrans: "Falha / Fracasso",
                    example: "Don't let failure stop your journey.", 
                    audioFront: "TTS: Failure",
                    audioBack: "TTS: Don't let failure stop your journey." 
                },
                { 
                    term: "Support", 
                    definition: "Help or encouragement given to someone.", 
                    defTrans: "Apoio",
                    example: "I need your support right now.", 
                    audioFront: "TTS: Support",
                    audioBack: "TTS: I need your support right now." 
                },
                { 
                    term: "Precious", 
                    definition: "Something of great value that should not be wasted.", 
                    defTrans: "Precioso(a)",
                    example: "Life is precious, so enjoy every moment.", 
                    audioFront: "TTS: Precious",
                    audioBack: "TTS: Life is precious, so enjoy every moment." 
                },
                { 
                    term: "Overwhelmed", 
                    definition: "Feeling like you have too much to deal with.", 
                    defTrans: "Sobrecarregado(a)",
                    example: "I feel overwhelmed by my homework.", 
                    audioFront: "TTS: Overwhelmed",
                    audioBack: "TTS: I feel overwhelmed by my homework." 
                },

                // --- Phrasal Verbs (GET, CARRY, CALL) ---
                { 
                    term: "Get up", 
                    definition: "To rise from bed.", 
                    defTrans: "Levantar-se",
                    example: "I get up early to study.", 
                    audioFront: "TTS: Get up",
                    audioBack: "TTS: I get up early to study." 
                },
                { 
                    term: "Get along (with)", 
                    definition: "To have a good relationship with.", 
                    defTrans: "Dar-se bem (com)",
                    example: "I get along well with my team.", 
                    audioFront: "TTS: Get along with",
                    audioBack: "TTS: I get along well with my team." 
                },
                { 
                    term: "Get over", 
                    definition: "To recover from.", 
                    defTrans: "Superar / Recuperar-se",
                    example: "It's hard to get over a major failure.", 
                    audioFront: "TTS: Get over",
                    audioBack: "TTS: It's hard to get over a major failure." 
                },
                { 
                    term: "Get through", 
                    definition: "To finish or survive a difficult situation.", 
                    defTrans: "Passar por / Concluir",
                    example: "We will get through this together.", 
                    audioFront: "TTS: Get through",
                    audioBack: "TTS: We will get through this together." 
                },
                { 
                    term: "Get away (with)", 
                    definition: "To escape blame or punishment.", 
                    defTrans: "Sair impune / Escapar",
                    example: "They didn't get away with cheating.", 
                    audioFront: "TTS: Get away with",
                    audioBack: "TTS: They didn't get away with cheating." 
                },
                { 
                    term: "Get back", 
                    definition: "To return.", 
                    defTrans: "Voltar",
                    example: "When did you get back home?", 
                    audioFront: "TTS: Get back",
                    audioBack: "TTS: When did you get back home?" 
                },
                { 
                    term: "Get together", 
                    definition: "To meet or gather.", 
                    defTrans: "Reunir-se",
                    example: "Let's get together to study.", 
                    audioFront: "TTS: Get together",
                    audioBack: "TTS: Let's get together to study." 
                },
                { 
                    term: "Carry out", 
                    definition: "To perform a task or research.", 
                    defTrans: "Realizar / Executar",
                    example: "We will carry out the plan tomorrow.", 
                    audioFront: "TTS: Carry out",
                    audioBack: "TTS: We will carry out the plan tomorrow." 
                },
                { 
                    term: "Carry over", 
                    definition: "To continue to exist in a new or different situation.", 
                    defTrans: "Transferir / Levar para",
                    example: "Stress can carry over into your sleep.", 
                    audioFront: "TTS: Carry over",
                    audioBack: "TTS: Stress can carry over into your sleep." 
                },
                { 
                    term: "Carry away", 
                    definition: "To lose self-control because of excitement. To make someone lose control.", 
                    defTrans: "Empolgar-se / Deixar-se levar",
                    example: "Don't get carried away by the victory.", 
                    audioFront: "TTS: Carry away",
                    audioBack: "TTS: Don't get carried away by the victory." 
                },
                { 
                    term: "Carry off", 
                    definition: "To succeed in doing something difficult.", 
                    defTrans: "Realizar com sucesso",
                    example: "She carried off the presentation perfectly.", 
                    audioFront: "TTS: Carry off",
                    audioBack: "TTS: She carried off the presentation perfectly." 
                },
                { 
                    term: "Carry through", 
                    definition: "To help someone survive a difficult period.", 
                    defTrans: "Ajudar a superar",
                    example: "His family carried him through the crisis.", 
                    audioFront: "TTS: Carry through",
                    audioBack: "TTS: His family carried him through the crisis." 
                },
                { 
                    term: "Carry back", 
                    definition: "To make someone remember a time in the past.", 
                    defTrans: "Trazer de volta à memória",
                    example: "This song carries me back to 2010.", 
                    audioFront: "TTS: Carry back",
                    audioBack: "TTS: This song carries me back to 2010." 
                },
                { 
                    term: "Carry forward", 
                    definition: "To include something in a subsequent stage.", 
                    defTrans: "Transportar / Levar adiante",
                    example: "We must carry forward these lessons.", 
                    audioFront: "TTS: Carry forward",
                    audioBack: "TTS: We must carry forward these lessons." 
                },
                { 
                    term: "Call on", 
                    definition: "To ask someone for help or to use a specific quality.", 
                    defTrans: "Recorrer a / Pedir ajuda",
                    example: "You can call on me anytime.", 
                    audioFront: "TTS: Call on",
                    audioBack: "TTS: You can call on me anytime." 
                },
                { 
                    term: "Call off", 
                    definition: "To decide that a planned event will not happen.", 
                    defTrans: "Cancelar",
                    example: "They had to call off the match.", 
                    audioFront: "TTS: Call off",
                    audioBack: "TTS: They had to call off the match." 
                },
                { 
                    term: "Call for", 
                    definition: "To require or demand something as necessary.", 
                    defTrans: "Exigir / Pedir",
                    example: "This crisis calls for urgent action.", 
                    audioFront: "TTS: Call for",
                    audioBack: "TTS: This crisis calls for urgent action." 
                },
                { 
                    term: "Call back", 
                    definition: "To return a phone call.", 
                    defTrans: "Ligar de volta",
                    example: "I will call you back later.", 
                    audioFront: "TTS: Call back",
                    audioBack: "TTS: I will call you back later." 
                },
                { 
                    term: "Call in", 
                    definition: "To ask someone with specific skills to come and help.", 
                    defTrans: "Chamar (especialista)",
                    example: "We need to call in an expert.", 
                    audioFront: "TTS: Call in",
                    audioBack: "TTS: We need to call in an expert." 
                },
                { 
                    term: "Call up", 
                    definition: "To make a phone call to someone.", 
                    defTrans: "Ligar / Telefonar",
                    example: "I'll call up my grandmother.", 
                    audioFront: "TTS: Call up",
                    audioBack: "TTS: I'll call up my grandmother." 
                },
                { 
                    term: "Call out", 
                    definition: "To criticize someone's behavior publicly.", 
                    defTrans: "Criticar / Desafiar",
                    example: "She called him out for his rudeness.", 
                    audioFront: "TTS: Call out",
                    audioBack: "TTS: She called him out for his rudeness." 
                },
                { 
                    term: "Call around", 
                    definition: "To telephone several people or places to get information.", 
                    defTrans: "Ligar para vários lugares",
                    example: "I'll call around to find a new desk.", 
                    audioFront: "TTS: Call around",
                    audioBack: "TTS: I'll call around to find a new desk." 
                },

                // --- Expressions ---
                { 
                    term: "Persistence is key", 
                    definition: "Meaning that continuing to try is essential for success.", 
                    defTrans: "A persistência é a chave",
                    example: "Never give up; persistence is key.", 
                    audioFront: "TTS: Persistence is key",
                    audioBack: "TTS: Never give up; persistence is key." 
                },
                { 
                    term: "I don't know where to start", 
                    definition: "Expression used when a task feels overwhelming.", 
                    defTrans: "Eu não sei por onde começar",
                    example: "This task is so big I don't know where to start.", 
                    audioFront: "TTS: I don't know where to start",
                    audioBack: "TTS: This task is so big I don't know where to start." 
                },
                { 
                    term: "Time is precious", 
                    definition: "Expression encouraging someone to use their time wisely.", 
                    defTrans: "O tempo é precioso",
                    example: "Don't waste a second; time is precious.", 
                    audioFront: "TTS: Time is precious",
                    audioBack: "TTS: Don't waste a second; time is precious." 
                },

                // --- Grammar: Reported Speech & Adverbs ---
                { 
                    term: "Reported Speech: Simple Present", 
                    definition: "Changes to Simple Past.", 
                    defTrans: "Muda para Simple Past",
                    example: "\"I work\" becomes He said he worked.", 
                    audioFront: "TTS: Reported Speech: Simple Present",
                    audioBack: "TTS: He said he worked." 
                },
                { 
                    term: "Reported Speech: Present Continuous", 
                    definition: "Changes to Past Continuous.", 
                    defTrans: "Muda para Past Continuous",
                    example: "\"I'm going\" becomes She said she was going.", 
                    audioFront: "TTS: Reported Speech: Present Continuous",
                    audioBack: "TTS: She said she was going." 
                },
                { 
                    term: "Reported Speech: Simple Past", 
                    definition: "Changes to Past Perfect.", 
                    defTrans: "Muda para Past Perfect",
                    example: "\"I failed\" becomes He said he had failed.", 
                    audioFront: "TTS: Reported Speech: Simple Past",
                    audioBack: "TTS: He said he had failed." 
                },
                { 
                    term: "Reported Speech: Present Perfect", 
                    definition: "Changes to Past Perfect.", 
                    defTrans: "Muda para Past Perfect",
                    example: "\"I have seen\" becomes She said she had seen.", 
                    audioFront: "TTS: Reported Speech: Present Perfect",
                    audioBack: "TTS: She said she had seen." 
                },
                { 
                    term: "Reported Speech: Will / Can / May", 
                    definition: "Changes to Would / Could / Might.", 
                    defTrans: "Muda para Would / Could / Might",
                    example: "\"I will stay\" becomes He said he would stay.", 
                    audioFront: "TTS: Reported Speech: Will, Can, May",
                    audioBack: "TTS: He said he would stay." 
                },
                { 
                    term: "Reported Speech: Must / Have to", 
                    definition: "Changes to Had to.", 
                    defTrans: "Muda para Had to",
                    example: "\"You must go\" becomes She said I had to go.", 
                    audioFront: "TTS: Reported Speech: Must, Have to",
                    audioBack: "TTS: She said I had to go." 
                },
                { 
                    term: "Adverb Change: Now", 
                    definition: "Changes to Then / At that moment.", 
                    defTrans: "Muda para Then ou At that moment",
                    example: "\"Do it now\" becomes He said to do it then.", 
                    audioFront: "TTS: Adverb Change: Now",
                    audioBack: "TTS: He said to do it then." 
                },
                { 
                    term: "Adverb Change: Today", 
                    definition: "Changes to That day.", 
                    defTrans: "Muda para That day",
                    example: "\"I'm busy today\" becomes She said she was busy that day.", 
                    audioFront: "TTS: Adverb Change: Today",
                    audioBack: "TTS: She said she was busy that day." 
                },
                { 
                    term: "Adverb Change: Yesterday", 
                    definition: "Changes to The day before / The previous day.", 
                    defTrans: "Muda para The day before",
                    example: "\"I left yesterday\" becomes He said he had left the day before.", 
                    audioFront: "TTS: Adverb Change: Yesterday",
                    audioBack: "TTS: He said he had left the day before." 
                },
                { 
                    term: "Adverb Change: Tomorrow", 
                    definition: "Changes to The next day / The following day.", 
                    defTrans: "Muda para The next day",
                    example: "\"I'll see you tomorrow\" becomes She said she'd see me the next day.", 
                    audioFront: "TTS: Adverb Change: Tomorrow",
                    audioBack: "TTS: She said she'd see me the next day." 
                },
                { 
                    term: "Proximity Change: Here / This", 
                    definition: "Changes to There / That.", 
                    defTrans: "Muda para There ou That",
                    example: "\"I like this\" becomes He said he liked that.", 
                    audioFront: "TTS: Proximity Change: Here and This",
                    audioBack: "TTS: He said he liked that." 
                },

                // --- Grammar: Embedded & Tag Questions ---
                { 
                    term: "Embedded Questions: Wh- word", 
                    definition: "Use statement order (S+V). No do/does/did.", 
                    defTrans: "Ordem afirmativa, sem auxiliar",
                    example: "Could you tell me where the office is?", 
                    audioFront: "TTS: Embedded Questions with Wh- words",
                    audioBack: "TTS: Could you tell me where the office is?" 
                },
                { 
                    term: "Embedded Questions: Yes/No", 
                    definition: "Use 'if' or 'whether'.", 
                    defTrans: "Usa if ou whether",
                    example: "I wonder if she passed the test.", 
                    audioFront: "TTS: Embedded Questions Yes or No",
                    audioBack: "TTS: I wonder if she passed the test." 
                },
                { 
                    term: "Tag Questions: Positive Statement", 
                    definition: "Use a negative tag.", 
                    defTrans: "Frase positiva, tag negativa",
                    example: "You are strong, aren't you?", 
                    audioFront: "TTS: Tag Questions Positive Statement",
                    audioBack: "TTS: You are strong, aren't you?" 
                },
                { 
                    term: "Tag Questions: Negative Statement", 
                    definition: "Use a positive tag.", 
                    defTrans: "Frase negativa, tag positiva",
                    example: "He isn't failing, is he?", 
                    audioFront: "TTS: Tag Questions Negative Statement",
                    audioBack: "TTS: He isn't failing, is he?" 
                },
                { 
                    term: "Tag Questions: Simple Present", 
                    definition: "Use don't / doesn't.", 
                    defTrans: "Usa don't ou doesn't",
                    example: "She strives for her goals, doesn't she?", 
                    audioFront: "TTS: Tag Questions Simple Present",
                    audioBack: "TTS: She strives for her goals, doesn't she?" 
                },
                { 
                    term: "Tag Questions: Simple Past", 
                    definition: "Use didn't.", 
                    defTrans: "Usa didn't",
                    example: "They carried on, didn't they?", 
                    audioFront: "TTS: Tag Questions Simple Past",
                    audioBack: "TTS: They carried on, didn't they?" 
                },
                { 
                    term: "Tag Questions: Exception 'I am'", 
                    definition: "The tag is 'aren't I?'.", 
                    defTrans: "A tag é aren't I",
                    example: "I am resilient, aren't I?", 
                    audioFront: "TTS: Tag Questions Exception I am",
                    audioBack: "TTS: I am resilient, aren't I?" 
                },
                { 
                    term: "Tag Questions: Exception 'Let's'", 
                    definition: "The tag is 'shall we?'.", 
                    defTrans: "A tag é shall we",
                    example: "Let's work together, shall we?", 
                    audioFront: "TTS: Tag Questions Exception Let's",
                    audioBack: "TTS: Let's work together, shall we?" 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (For Tooltips)
    // ======================================================
    glossary:[
        // --- TOPIC 1: CONTEXT TOOLTIPS (Keys mapped exactly from Step 1) ---
        { topic: "Context", term: "overwhelmed", definition: "Feeling like you have too much to deal with.", translation: "Sobrecarregado(a)" },
        { topic: "Context", term: "give-up", definition: "To stop doing something, especially a habit or goal.", translation: "Desistir" },
        { topic: "Context", term: "struggle", definition: "To have difficulty with a task.", translation: "Ter dificuldade / Lutar" },
        { topic: "Context", term: "fail", definition: "To be unsuccessful in achieving a goal or passing a test.", translation: "Falhar" },
        { topic: "Context", term: "setback", definition: "A reversal or check in progress; a temporary problem.", translation: "Contratempo" },
        { topic: "Context", term: "call-off", definition: "To decide that a planned event will not happen; cancel.", translation: "Cancelar" },
        { topic: "Context", term: "persistence-is-key", definition: "Expression meaning that continuing to try is essential for success.", translation: "A persistência é a chave" },
        { topic: "Context", term: "overcome", definition: "To succeed in dealing with a problem or difficulty.", translation: "Superar" },
        { topic: "Context", term: "carry-on", definition: "To continue doing something despite difficulties.", translation: "Continuar / Prosseguir" },
        { topic: "Context", term: "focus-on", definition: "To give all your attention to a particular person or thing.", translation: "Focar / Concentrar-se em" },
        { topic: "Context", term: "mistake", definition: "An action or judgment that is misguided or wrong.", translation: "Erro" },
        { topic: "Context", term: "failure", definition: "The state or condition of not meeting a desirable or intended objective.", translation: "Falha / Fracasso" },
        { topic: "Context", term: "embrace", definition: "To accept something, like a mistake or change, willingly.", translation: "Abraçar / Aceitar" },
        { topic: "Context", term: "call-on", definition: "To ask someone for help or to use a specific quality you have.", translation: "Recorrer a / Pedir ajuda" },
        { topic: "Context", term: "resilience", definition: "The capacity to recover quickly from difficulties.", translation: "Resiliência" },
        { topic: "Context", term: "strive", definition: "To make great efforts to achieve or obtain something.", translation: "Esforçar-se / Lutar" },
        { topic: "Context", term: "cope-with", definition: "To deal effectively with something difficult.", translation: "Lidar com" },
        { topic: "Context", term: "time-is-precious", definition: "Expression encouraging someone to use their time wisely.", translation: "O tempo é precioso" },
        { topic: "Context", term: "call-up", definition: "To make a phone call to someone.", translation: "Ligar / Telefonar" },
        { topic: "Context", term: "carry-out", definition: "To perform a task or research.", translation: "Realizar / Executar" },
        { topic: "Context", term: "face", definition: "To confront a difficult situation directly.", translation: "Encarar / Enfrentar" },
        { topic: "Context", term: "challenge", definition: "A task or situation that tests someone's abilities.", translation: "Desafio" },
        { topic: "Context", term: "steep", definition: "A very difficult or challenging situation.", translation: "Íngreme / Difícil" },
        { topic: "Context", term: "hill", definition: "A metaphor for a difficult challenge or obstacle.", translation: "Colina / Desafio" },
        { topic: "Context", term: "report", definition: "To give an account of something that has been observed, heard, done, or investigated.", translation: "Relatar / Reportar" },
        { topic: "Context", term: "inner-power", definition: "The strength and resilience that comes from within oneself.", translation: "Força interior" },
        { topic: "Context", term: "no-matter-what", definition: "Expression meaning regardless of the circumstances.", translation: "Não importa o que aconteça" },
        { topic: "Context", term: "waste", definition: "To use or expend carelessly, extravagantly, or to no purpose.", translation: "Desperdiçar" },
        { topic: "Context", term: "adhd", definition: "Attention Deficit Hyperactivity Disorder, a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity.", translation: "TDAH" },
        { topic: "Context", term: "muscle", definition: "A band of fibrous tissue that has the ability to contract, producing movement in the body.", translation: "Músculo" },
        { topic: "Context", term: "I-wonder-if", definition: "Expression used to introduce a question or express curiosity about something.", translation: "Eu me pergunto se" },
        { topic: "Context", term: "flood", definition: "A large amount of something, such as information or emotions, that comes suddenly and overwhelms.", translation: "Inundação / Enchente" },
        { topic: "Context", term: "provide", definition: "To make available for use; to supply.", translation: "Fornecer / Prover" },

        // --- TOPIC 2: VOCABULARY ---
        { topic: "Vocabulary", term: "achieve", definition: "To successfully reach a desired objective or result by effort.", translation: "Alcançar / Conquistar" },
        { topic: "Vocabulary", term: "adversity", definition: "A difficult or unpleasant situation; misfortune.", translation: "Adversidade" },
        { topic: "Vocabulary", term: "aim", definition: "A result that one is attempting to achieve.", translation: "Meta / Objetivo" },
        { topic: "Vocabulary", term: "goal", definition: "A result that one is attempting to achieve.", translation: "Objetivo" },
        { topic: "Vocabulary", term: "tragedy", definition: "An event causing great suffering, destruction, and distress.", translation: "Tragédia" },
        { topic: "Vocabulary", term: "strength", definition: "The quality or state of being physically or mentally strong.", translation: "Força" },
        { topic: "Vocabulary", term: "support", definition: "Help or encouragement given to someone.", translation: "Apoio" },
        { topic: "Vocabulary", term: "precious", definition: "Something of great value that should not be wasted.", translation: "Precioso(a)" },
        { topic: "Vocabulary", term: "persistence", definition: "The quality of continuing to do something despite difficulties or opposition.", translation: "Persistência" },
        { topic: "Vocabulary", term: "question", definition: "To feel or express doubt about something; to ask a question.", translation: "Questionar" },
        { topic: "Vocabulary", term: "hardship", definition: "Severe suffering or privation.", translation: "Dificuldade" },
        { topic: "Vocabulary", term: "encourage", definition: "To give support, confidence, or hope to someone.", translation: "Encorajar / Incentivar" },
        { topic: "Vocabulary", term: "improve", definition: "To make or become better.", translation: "Melhorar" },

        // --- TOPIC 3: PHRASAL VERBS ---
        { topic: "Phrasal Verbs", term: "phrasal-verbs", definition: "Phrasal verbs are combinations of a verb and one or more particles (prepositions or adverbs) that create a meaning different from the original verb.", translation: "Phrasal Verbs" },
        { topic: "Phrasal Verbs", term: "call-around", definition: "To telephone several people or places to get information.", translation: "Ligar para vários lugares" },
        { topic: "Phrasal Verbs", term: "call-back", definition: "To return a phone call to someone.", translation: "Ligar de volta" },
        { topic: "Phrasal Verbs", term: "call-for", definition: "To require or demand something as necessary.", translation: "Exigir / Pedir" },
        { topic: "Phrasal Verbs", term: "call-in", definition: "To ask someone with specific skills to come and help.", translation: "Chamar (especialista)" },
        { topic: "Phrasal Verbs", term: "call-out", definition: "To criticize someone’s behavior publicly or challenge them.", translation: "Criticar / Desafiar" },
        { topic: "Phrasal Verbs", term: "carry-away", definition: "To lose self-control because of excitement. To make someone lose control.", translation: "Empolgar-se / Deixar-se levar" },
        { topic: "Phrasal Verbs", term: "carry-back", definition: "To make someone remember a time in the past.", translation: "Trazer de volta à memória" },
        { topic: "Phrasal Verbs", term: "carry-forward", definition: "To include something in a subsequent stage or page.", translation: "Transportar / Levar adiante" },
        { topic: "Phrasal Verbs", term: "carry-off", definition: "To succeed in doing something difficult.", translation: "Realizar com sucesso" },
        { topic: "Phrasal Verbs", term: "carry-over", definition: "To continue to exist in a new or different situation.", translation: "Transferir / Levar para" },
        { topic: "Phrasal Verbs", term: "carry-through", definition: "To help someone survive a difficult period.", translation: "Ajudar a superar" },
        { topic: "Phrasal Verbs", term: "get-up", definition: "To rise from bed.", translation: "Levantar-se" },
        { topic: "Phrasal Verbs", term: "get-along", definition: "To have a good relationship with.", translation: "Dar-se bem" },
        { topic: "Phrasal Verbs", term: "get-over", definition: "To recover from an illness or failure.", translation: "Superar / Recuperar-se" },
        { topic: "Phrasal Verbs", term: "get-through", definition: "To finish or survive a difficult situation.", translation: "Passar por / Concluir" },
        { topic: "Phrasal Verbs", term: "get-away", definition: "To escape blame or punishment.", translation: "Sair impune / Escapar" },
        { topic: "Phrasal Verbs", term: "get-back", definition: "To return to a place.", translation: "Voltar" },
        { topic: "Phrasal Verbs", term: "get-together", definition: "To meet or gather with people.", translation: "Reunir-se" },

        // --- TOPIC 4: GRAMMAR & EXPRESSIONS ---
        { topic: "Grammar & Expressions", term: "as-if", definition: "Linking words used to describe how something appears or feels.", translation: "Como se" },
        { topic: "Grammar & Expressions", term: "as-though", definition: "Linking words used to describe how something appears or feels.", translation: "Como se" },
        { topic: "Grammar & Expressions", term: "in-fact", definition: "Linking words used to emphasize a statement or provide more detail.", translation: "Na verdade / De fato" },
        { topic: "Grammar & Expressions", term: "indeed", definition: "Linking words used to emphasize a statement or provide more detail.", translation: "Na verdade / De fato" },
        { topic: "Grammar & Expressions", term: "embedded-questions", definition: "A question placed inside another statement or question to be more polite.", translation: "Perguntas Embutidas" },
        { topic: "Grammar & Expressions", term: "reported-speech", definition: "Grammar used to report what someone else has said, usually involving a tense shift.", translation: "Discurso Indireto" },
        { topic: "Grammar & Expressions", term: "tag-questions", definition: "Short questions at the end of a statement used to confirm information.", translation: "Perguntas de Confirmação" },
        { topic: "Grammar & Expressions", term: "tense-backshift", definition: "The process of moving a verb tense back into the past when using reported speech.", translation: "Mudança de tempo verbal para o passado" },
        { topic: "Grammar & Expressions", term: "i-dont-know-where-to-start", definition: "Expression used when a task feels overwhelming.", translation: "Eu não sei por onde começar" }
    ]
});