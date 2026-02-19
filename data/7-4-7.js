/**
 * REACH English - LESSON DATA 7-4-7
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "7-4-7", 
    grade: "7th Grade",       
    bimester: "4",   
    chapter: "7",    
    chapterTitle: "No Pain, No Gain", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Talk about sports and the Olympic Games.<br>• Use vocabulary for skills like discipline and teamwork.<br>• Use the Past Continuous tense (I was playing).<br>• Use the Simple Past tense (I played).<br>• Connect past actions using \"when\" and \"while\".<br>• Talk about ability with \"can\" and \"could\".",
            welcome: "Hello, Champions! It's Mr. D!<br><br>Welcome to \"No Pain, No Gain\"! Today, we enter the exciting arena of sports. We'll learn how games teach us about life, teamwork, and discipline. We will become time travelers, describing what we were doing in the past and what we did. We'll also talk about our superpowers—the things we can do now and could do in the past. Ready, set, go!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about sports and the Olympic Games. Use vocabulary for skills like discipline and teamwork. Use the Past Continuous tense. Use the Simple Past tense. Connect past actions using when and while. Talk about ability with can and could.",
                welcome: "TTS: Hello, Champions! It's Mr. D! Welcome to No Pain, No Gain! Today, we enter the exciting arena of sports. We'll learn how games teach us about life, teamwork, and discipline. We will become time travelers, describing what we were doing in the past and what we did. We'll also talk about our superpowers—the things we can do now and could do in the past. Ready, set, go!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of a basketball bouncing and sneakers squeaking on a court. Albert and Celine are taking a break.", 
            contextAudio: "audio/7-4-7/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "Phew! That was a tough [game](tooltip:game). I [was playing](tooltip:was-playing) hard." 
                },
                { 
                    speaker: "Celine", 
                    text: "You played well! You [scored](tooltip:scored) the winning [point](tooltip:point)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Thanks! I [was practicing](tooltip:was-practicing) all week. [Discipline](tooltip:discipline) is important." 
                },
                { 
                    speaker: "Celine", 
                    text: "True. [When the coach arrived](tooltip:when-coach-arrived), we [were losing](tooltip:were-losing)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Yes, but we used [teamwork](tooltip:teamwork). [Could you play](tooltip:could-play) basketball when you were a kid?" 
                },
                { 
                    speaker: "Celine", 
                    text: "No, I [couldn't](tooltip:couldn-t). I [can play](tooltip:can-play) now, but I prefer [swimming](tooltip:swimming)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Cool! Sports teach us a lot about [effort](tooltip:effort)." 
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
                    title: "General Sports Vocabulary",
                    audio: "TTS: Sport. Game. Team. Athlete. Coach. Player. Competition. Medal. Rules. Effort.",
                    items: [
                        { term: "Sport", trans: "Esporte" },
                        { term: "Game", trans: "Jogo" },
                        { term: "Team", trans: "Time / Equipe" },
                        { term: "Athlete", trans: "Atleta" },
                        { term: "Coach", trans: "Treinador(a)" },
                        { term: "Player", trans: "Jogador(a)" },
                        { term: "Competition", trans: "Competição" },
                        { term: "Medal", trans: "Medalha" },
                        { term: "Rules", trans: "Regras" },
                        { term: "Effort", trans: "Esforço" }
                    ]
                },
                {
                    title: "Sports Actions (Verbs)",
                    audio: "TTS: To Play. To Practice. To Watch. To Win. To Lose. To Score.",
                    items: [
                        { term: "To Play", trans: "Jogar / Brincar" },
                        { term: "To Practice", trans: "Praticar / Treinar" },
                        { term: "To Watch", trans: "Assistir" },
                        { term: "To Win", trans: "Vencer / Ganhar" },
                        { term: "To Lose", trans: "Perder" },
                        { term: "To Score", trans: "Marcar (um gol/ponto)" }
                    ]
                },
                {
                    title: "Olympic Sports",
                    audio: "TTS: The Olympic Games. Athletics. Swimming. Cycling. Judo. Skateboarding. Gymnastics. Basketball. Volleyball. Soccer or Football. Tennis. Surfing.",
                    items: [
                        { term: "The Olympic Games", trans: "Os Jogos Olímpicos" },
                        { term: "Athletics", trans: "Atletismo" },
                        { term: "Swimming", trans: "Natação" },
                        { term: "Cycling", trans: "Ciclismo" },
                        { term: "Judo", trans: "Judô" },
                        { term: "Skateboarding", trans: "Skate" },
                        { term: "Gymnastics", trans: "Ginástica" },
                        { term: "Basketball", trans: "Basquete" },
                        { term: "Volleyball", trans: "Vôlei" },
                        { term: "Soccer / Football", trans: "Futebol" },
                        { term: "Tennis", trans: "Tênis" },
                        { term: "Surfing", trans: "Surfe" }
                    ]
                },
                {
                    title: "Skills and Qualities",
                    audio: "TTS: Discipline. Teamwork. Focus. Strength. Mental Health. Leadership. Respect. Skill. Goal. Healthy.",
                    items: [
                        { term: "Discipline", trans: "Disciplina" },
                        { term: "Teamwork", trans: "Trabalho em equipe" },
                        { term: "Focus", trans: "Foco / Concentração" },
                        { term: "Strength", trans: "Força" },
                        { term: "Mental Health", trans: "Saúde Mental" },
                        { term: "Leadership", trans: "Liderança" },
                        { term: "Respect", trans: "Respeito" },
                        { term: "Skill", trans: "Habilidade" },
                        { term: "Goal (objective)", trans: "Objetivo / Meta" },
                        { term: "Healthy", trans: "Saudável" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: No pain, no gain. Practice makes perfect. Gold medal.",
                    items: [
                        { term: "No pain, no gain", trans: "Sem dor, sem ganho (Quem não se esforça, não consegue)" },
                        { term: "Practice makes perfect", trans: "A prática leva à perfeição" },
                        { term: "Gold medal", trans: "Medalha de ouro" }
                    ]
                }
            ], // This closes the areas array in Step 2

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "General Sports Vocabulary",
                    audio: "TTS: Soccer is a popular sport. We won the game. My team plays well. She is a famous athlete. The coach trains the players. He is the best player. The competition is fierce. He won a silver medal. Follow the rules of the game. Put effort into your practice.",
                    items: [
                        { term: "Sport", sent: "Soccer is a popular sport.", trans: "<span style='color:#0077b6'>Futebol é um esporte popular.</span>" },
                        { term: "Game", sent: "We won the game.", trans: "<span style='color:#0077b6'>Nós ganhamos o jogo.</span>" },
                        { term: "Team", sent: "My team plays well.", trans: "<span style='color:#0077b6'>Meu time joga bem.</span>" },
                        { term: "Athlete", sent: "She is a famous athlete.", trans: "<span style='color:#0077b6'>Ela é uma atleta famosa.</span>" },
                        { term: "Coach", sent: "The coach trains the players.", trans: "<span style='color:#0077b6'>O treinador treina os jogadores.</span>" },
                        { term: "Player", sent: "He is the best player.", trans: "<span style='color:#0077b6'>Ele é o melhor jogador.</span>" },
                        { term: "Competition", sent: "The competition is fierce.", trans: "<span style='color:#0077b6'>A competição é acirrada.</span>" },
                        { term: "Medal", sent: "He won a silver medal.", trans: "<span style='color:#0077b6'>Ele ganhou uma medalha de prata.</span>" },
                        { term: "Rules", sent: "Follow the rules of the game.", trans: "<span style='color:#0077b6'>Siga as regras do jogo.</span>" },
                        { term: "Effort", sent: "Put effort into your practice.", trans: "<span style='color:#0077b6'>Coloque esforço no seu treino.</span>" }
                    ]
                },
                {
                    title: "Sports Actions (Verbs)",
                    audio: "TTS: I play tennis on Sundays. We practice every day. I watch sports on TV. I want to win the race. Sometimes we lose. He scored a goal!",
                    items: [
                        { term: "Play", sent: "I play tennis on Sundays.", trans: "<span style='color:#0077b6'>Eu jogo tênis aos domingos.</span>" },
                        { term: "Practice", sent: "We practice every day.", trans: "<span style='color:#0077b6'>Nós praticamos todo dia.</span>" },
                        { term: "Watch", sent: "I watch sports on TV.", trans: "<span style='color:#0077b6'>Eu assisto esportes na TV.</span>" },
                        { term: "Win", sent: "I want to win the race.", trans: "<span style='color:#0077b6'>Eu quero vencer a corrida.</span>" },
                        { term: "Lose", sent: "Sometimes we lose.", trans: "<span style='color:#0077b6'>Às vezes nós perdemos.</span>" },
                        { term: "Score", sent: "He scored a goal!", trans: "<span style='color:#0077b6'>Ele marcou um gol!</span>" }
                    ]
                },
                {
                    title: "Olympic Sports",
                    audio: "TTS: The Olympics happen every four years. She runs in athletics. Swimming is great exercise. He goes cycling in the mountains. Judo requires discipline. Skateboarding is very cool. Gymnastics needs flexibility. I play basketball at school. We play volleyball on the beach. Soccer is famous in Brazil. Do you have a tennis racket? Surfing is fun in the summer.",
                    items: [
                        { term: "Olympics", sent: "The Olympics happen every four years.", trans: "<span style='color:#0077b6'>As Olimpíadas acontecem a cada quatro anos.</span>" },
                        { term: "Athletics", sent: "She runs in athletics.", trans: "<span style='color:#0077b6'>Ela corre no atletismo.</span>" },
                        { term: "Swimming", sent: "Swimming is great exercise.", trans: "<span style='color:#0077b6'>Natação é um ótimo exercício.</span>" },
                        { term: "Cycling", sent: "He goes cycling in the mountains.", trans: "<span style='color:#0077b6'>Ele vai pedalar nas montanhas.</span>" },
                        { term: "Judo", sent: "Judo requires discipline.", trans: "<span style='color:#0077b6'>Judô requer disciplina.</span>" },
                        { term: "Skateboarding", sent: "Skateboarding is very cool.", trans: "<span style='color:#0077b6'>Andar de skate é legal.</span>" },
                        { term: "Gymnastics", sent: "Gymnastics needs flexibility.", trans: "<span style='color:#0077b6'>Ginástica precisa de flexibilidade.</span>" },
                        { term: "Basketball", sent: "I play basketball at school.", trans: "<span style='color:#0077b6'>Eu jogo basquete na escola.</span>" },
                        { term: "Volleyball", sent: "We play volleyball on the beach.", trans: "<span style='color:#0077b6'>Jogamos vôlei na praia.</span>" },
                        { term: "Soccer", sent: "Soccer is famous in Brazil.", trans: "<span style='color:#0077b6'>Futebol é famoso no Brasil.</span>" },
                        { term: "Tennis", sent: "Do you have a tennis racket?", trans: "<span style='color:#0077b6'>Você tem uma raquete de tênis?</span>" },
                        { term: "Surfing", sent: "Surfing is fun in the summer.", trans: "<span style='color:#0077b6'>Surfar é divertido no verão.</span>" }
                    ]
                },
                {
                    title: "Skills and Qualities",
                    audio: "TTS: Sports teach discipline. Teamwork helps us win. Keep your focus on the ball. You need strength to lift weights. Sports are good for mental health. The captain shows leadership. Show respect to your opponent. Dribbling is a useful skill. My goal is to run a marathon. Eat healthy food.",
                    items: [
                        { term: "Discipline", sent: "Sports teach discipline.", trans: "<span style='color:#0077b6'>Esportes ensinam disciplina.</span>" },
                        { term: "Teamwork", sent: "Teamwork helps us win.", trans: "<span style='color:#0077b6'>Trabalho em equipe nos ajuda a vencer.</span>" },
                        { term: "Focus", sent: "Keep your focus on the ball.", trans: "<span style='color:#0077b6'>Mantenha seu foco na bola.</span>" },
                        { term: "Strength", sent: "You need strength to lift weights.", trans: "<span style='color:#0077b6'>Você precisa de força para levantar pesos.</span>" },
                        { term: "Mental Health", sent: "Sports are good for mental health.", trans: "<span style='color:#0077b6'>Esportes são bons para a saúde mental.</span>" },
                        { term: "Leadership", sent: "The captain shows leadership.", trans: "<span style='color:#0077b6'>O capitão mostra liderança.</span>" },
                        { term: "Respect", sent: "Show respect to your opponent.", trans: "<span style='color:#0077b6'>Mostre respeito ao seu oponente.</span>" },
                        { term: "Skill", sent: "Dribbling is a a useful skill.", trans: "<span style='color:#0077b6'>Driblar é uma habilidade útil.</span>" },
                        { term: "Goal", sent: "My goal is to run a marathon.", trans: "<span style='color:#0077b6'>Minha meta é correr uma maratona.</span>" },
                        { term: "Healthy", sent: "Eat healthy food.", trans: "<span style='color:#0077b6'>Coma comida saudável.</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Remember: no pain, no gain. Don't give up, practice makes perfect.",
                    items: [
                        { term: "No pain, no gain", sent: "Remember: no pain, no gain.", trans: "<span style='color:#0077b6'>Lembre-se: sem dor, sem ganho.</span>" },
                        { term: "Practice makes perfect", sent: "Don't give up, practice makes perfect.", trans: "<span style='color:#0077b6'>Não desista, a prática leva à perfeição.</span>" }
                    ]
                }
            ], // This closes the exampleGroups array

            // 2C: Practice Drills (Part 1: 1-12)
            drills: [
                {
                    type: "mcq",
                    q: "Choose the translation for 'To Win':",
                    options: [
                        { t: "Perder", c: false },
                        { t: "Vencer / Ganhar", c: true },
                        { t: "Jogar", c: false },
                        { t: "Assistir", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete the sentence: 'The player _______ a goal.'",
                    options: [
                        { t: "watched", c: false },
                        { t: "scored", c: true },
                        { t: "practiced", c: false },
                        { t: "lost", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which sport uses a racket?",
                    options: [
                        { t: "Soccer", c: false },
                        { t: "Basketball", c: false },
                        { t: "Tennis", c: true },
                        { t: "Swimming", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which sport is played in a pool?",
                    options: [
                        { t: "Cycling", c: false },
                        { t: "Swimming", c: true },
                        { t: "Judo", c: false },
                        { t: "Volleyball", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Working together with others is called...",
                    options: [
                        { t: "Discipline", c: false },
                        { t: "Teamwork", c: true },
                        { t: "Strength", c: false },
                        { t: "Focus", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Being able to control yourself and work hard is...",
                    options: [
                        { t: "Discipline", c: true },
                        { t: "Luck", c: false },
                        { t: "Fun", c: false },
                        { t: "Effort", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete the phrase: 'Practice makes _______.'",
                    options: [
                        { t: "perfect", c: true },
                        { t: "tired", c: false },
                        { t: "happy", c: false },
                        { t: "easy", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The person who trains the team is the...",
                    options: [
                        { t: "Athlete", c: false },
                        { t: "Coach", c: true },
                        { t: "Fan", c: false },
                        { t: "Referee", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "You get this when you win first place.",
                    options: [
                        { t: "Ball", c: false },
                        { t: "Medal", c: true },
                        { t: "Shoe", c: false },
                        { t: "Ticket", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Eating vegetables helps you stay...",
                    options: [
                        { t: "Healthy", c: true },
                        { t: "Tired", c: false },
                        { t: "Sad", c: false },
                        { t: "Lost", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which sport involves a net and a ball hit by hand?",
                    options: [
                        { t: "Basketball", c: false },
                        { t: "Tennis", c: false },
                        { t: "Volleyball", c: true },
                        { t: "Judo", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A person who is good at many sports is a great...",
                    options: [
                        { t: "Player", c: false },
                        { t: "Coach", c: false },
                        { t: "Athlete", c: true },
                        { t: "Fan", c: false }
                    ]
                },
                // 2C: Practice Drills (Part 2: 13-24)
                {
                    type: "mcq",
                    q: "The action of leading a team is called...",
                    options: [
                        { t: "Teamwork", c: false },
                        { t: "Discipline", c: false },
                        { t: "Leadership", c: true },
                        { t: "Effort", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the translation for 'Perder':",
                    options: [
                        { t: "To Win", c: false },
                        { t: "To Lose", c: true },
                        { t: "To Score", c: false },
                        { t: "To Play", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What does 'No pain, no gain' mean?",
                    options: [
                        { t: "It's easy to succeed.", c: false },
                        { t: "Hard work is necessary for success.", c: true },
                        { t: "Pain is always bad.", c: false },
                        { t: "Don't work too hard.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which sport is known for flexibility and coordination?",
                    options: [
                        { t: "Judo", c: false },
                        { t: "Athletics", c: false },
                        { t: "Gymnastics", c: true },
                        { t: "Skateboarding", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'Keep your _______ on the goal.'",
                    options: [
                        { t: "strength", c: false },
                        { t: "focus", c: true },
                        { t: "respect", c: false },
                        { t: "effort", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What is the translation for 'Marcar (um gol/ponto)'?",
                    options: [
                        { t: "To Win", c: false },
                        { t: "To Score", c: true },
                        { t: "To Lose", c: false },
                        { t: "To Play", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A game where two teams hit a ball over a net with their hands is:",
                    options: [
                        { t: "Basketball", c: false },
                        { t: "Volleyball", c: true },
                        { t: "Tennis", c: false },
                        { t: "Soccer", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What do you need to show your opponent?",
                    options: [
                        { t: "Strength", c: false },
                        { t: "Effort", c: false },
                        { t: "Respect", c: true },
                        { t: "Focus", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which sport involves riding a surfboard on waves?",
                    options: [
                        { t: "Swimming", c: false },
                        { t: "Cycling", c: false },
                        { t: "Surfing", c: true },
                        { t: "Skateboarding", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The mental and emotional well-being of a person is their...",
                    options: [
                        { t: "Strength", c: false },
                        { t: "Discipline", c: false },
                        { t: "Mental Health", c: true },
                        { t: "Effort", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To put a lot of determined attempt into something is to show...",
                    options: [
                        { t: "Skill", c: false },
                        { t: "Goal", c: false },
                        { t: "Effort", c: true },
                        { t: "Rules", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which sport is known for using a board with wheels?",
                    options: [
                        { t: "Judo", c: false },
                        { t: "Basketball", c: false },
                        { t: "Skateboarding", c: true },
                        { t: "Cycling", c: false }
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
                    title: "Simple Past vs. Past Continuous",
                    audio: "TTS: We use these two tenses to talk about the past. Simple Past for completed actions, telling us what happened. Past Continuous for actions in progress, telling us what was happening. I scored a goal. I was running fast.",
                    explanation: "We use these two tenses to talk about the past, but they have very different functions. We often use them to describe sports matches or stories.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos esses dois tempos verbais para falar do passado, mas eles têm funções muito diferentes. Frequentemente os usamos para descrever partidas esportivas ou histórias.)</span>",
                    samples: [
                        { en: "Simple Past (Completed Action): I scored a goal.", pt: "<span style='color:#0077b6'>Ações concluídas: Eu marquei um gol.</span>" },
                        { en: "Past Continuous (Action in Progress): I was running fast.", pt: "<span style='color:#0077b6'>Ações em progresso: Eu estava correndo rápido.</span>" }
                    ]
                },
                {
                    title: "Combining Past Tenses (When/While)",
                    audio: "TTS: We combine these tenses to tell a story. The Past Continuous sets the background scene, and the Simple Past is the event that interrupted it. I was playing tennis when it started to rain. They were watching when the power went out. She was skating when she fell.",
                    explanation: "We combine these tenses to tell a story. The Past Continuous sets the scene (the background activity), and the Simple Past is the specific event that interrupted it or happened during it.<br><br><span style='color:#0077b6; font-style:italic;'>(Combinamos esses tempos verbais para contar uma história. O Passado Contínuo define o cenário, e o Passado Simples é o evento específico que o interrompeu.)</span>",
                    samples: [
                        { en: "I was playing tennis WHEN it started to rain.", pt: "<span style='color:#0077b6'>Eu estava jogando tênis QUANDO começou a chover.</span>" },
                        { en: "They were watching the game WHEN the power went out.", pt: "<span style='color:#0077b6'>Eles estavam assistindo ao jogo QUANDO a energia acabou.</span>" },
                        { en: "She was skating WHEN she fell.", pt: "<span style='color:#0077b6'>Ela estava andando de skate QUANDO caiu.</span>" }
                    ]
                },
                {
                    title: "Modals of Ability - CAN (Present)",
                    audio: "TTS: We use CAN to express ability in the present. It is always followed by the base form of the verb. I can swim fast. He can jump high. My brother can play football. She can't surf.",
                    explanation: "We use <b>CAN</b> to express a skill, ability, or capacity in the present. It is a modal verb, so it never changes (no 's' for he/she/it) and is always followed by the base form of the main verb (without 'to').<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos CAN para expressar uma habilidade, capacidade ou aptidão no presente. É um verbo modal, então nunca muda e é sempre seguido pela forma base do verbo principal.)</span>",
                    samples: [
                        { en: "I / You / We / They can swim fast.", pt: "<span style='color:#0077b6'>Eu/Você... consigo/conseguem nadar rápido.</span>" },
                        { en: "He / She / It can jump high.", pt: "<span style='color:#0077b6'>Ele/Ela... consegue pular alto.</span>" },
                        { en: "My brother can play football.", pt: "<span style='color:#0077b6'>Meu irmão sabe jogar futebol.</span>" },
                        { en: "She can't surf.", pt: "<span style='color:#0077b6'>Ela não sabe surfar.</span>" }
                    ]
                },
                {
                    title: "Modals of Ability - COULD (Past)",
                    audio: "TTS: We use COULD to talk about a general ability in the past. It is the past form of can. I could run fast when I was young. He could do gymnastics. The athlete could lift heavy weights. I couldn't swim when I was 5.",
                    explanation: "We use <b>COULD</b> to talk about a general ability or skill in the past. It is the past form of \"can\". Like \"can\", it does not change form for different subjects.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos COULD para falar de uma habilidade ou capacidade geral no passado. É a forma passada de \"can\". Como \"can\", não muda de forma para sujeitos diferentes.)</span>",
                    samples: [
                        { en: "I / You / We / They could run fast (years ago).", pt: "<span style='color:#0077b6'>Eu/Você... conseguia/sabia correr rápido.</span>" },
                        { en: "He / She / It could do gymnastics.", pt: "<span style='color:#0077b6'>Ele/Ela... conseguia fazer ginástica.</span>" },
                        { en: "The athlete could lift heavy weights.", pt: "<span style='color:#0077b6'>O atleta conseguia levantar pesos pesados.</span>" },
                        { en: "I couldn't swim when I was 5.", pt: "<span style='color:#0077b6'>Eu não sabia nadar quando tinha 5 anos.</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Simple Past vs. Past Continuous",
                    audio: "audio/7-4-7/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Did you watch the game last night?", 
                            pt: "<span style='color:#0077b6'>Você assistiu ao jogo ontem à noite?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, I was studying for the math test when the game started.", 
                            pt: "<span style='color:#0077b6'>Não, eu estava estudando para o teste de matemática quando o jogo começou.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Combining Past Tenses (Interruption)",
                    audio: "audio/7-4-7/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Coach", 
                            text: "What happened to your leg, Leo?", 
                            pt: "<span style='color:#0077b6'>O que aconteceu com sua perna, Leo?</span>" 
                        },
                        { 
                            speaker: "Leo", 
                            text: "I was skateboarding in the park when I fell. It hurt a lot!", 
                            pt: "<span style='color:#0077b6'>Eu estava andando de skate no parque quando caí. Doeu muito!</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Ability (CAN vs. COULD)",
                    audio: "audio/7-4-7/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Can you surf, Albert?", 
                            pt: "<span style='color:#0077b6'>Você sabe surfar, Albert?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes, I can. I love it! Could you swim when you were five years old?", 
                            pt: "<span style='color:#0077b6'>Sim, eu sei. Eu amo! Você sabia nadar quando tinha cinco anos?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, I couldn't. I learned when I was ten.", 
                            pt: "<span style='color:#0077b6'>Não, eu não sabia. Eu aprendi quando tinha dez anos.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice (Part 1: 1-12)
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Past Tenses - Meaning: 'I was reading when he arrived.' Which action happened first and was in progress?",
                    options: [
                        { t: "He arrived", c: false },
                        { t: "I was reading", c: true },
                        { t: "They happened at the same time", c: false },
                        { t: "None of the above", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Simple Past vs. Continuous: 'She _______ (cook) dinner when the lights _______ (go) out.'",
                    options: [
                        { t: "cooked / went", c: false },
                        { t: "was cooking / going", c: false },
                        { t: "was cooking / went", c: true },
                        { t: "cooking / went", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Modals - Present Ability: 'He _______ play the guitar very well now.'",
                    options: [
                        { t: "can", c: true },
                        { t: "could", c: false },
                        { t: "cans", c: false },
                        { t: "can to", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Modals - Past Ability: 'Last year, I _______ speak French, but now I can.'",
                    options: [
                        { t: "can't", c: false },
                        { t: "couldn't", c: true },
                        { t: "not can", c: false },
                        { t: "didn't can", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Modals - Structure: Choose the correct sentence.",
                    options: [
                        { t: "She cans swim.", c: false },
                        { t: "She can swims.", c: false },
                        { t: "She can to swim.", c: false },
                        { t: "She can swim.", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Context - Past Ability: 'When my grandfather was young, he _______ run a marathon.'",
                    options: [
                        { t: "can", c: false },
                        { t: "could", c: true },
                        { t: "is able", c: false },
                        { t: "was", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Context - Interruption: 'They were training _______ it started to rain.'",
                    options: [
                        { t: "while", c: false },
                        { t: "when", c: true },
                        { t: "where", c: false },
                        { t: "what", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative Ability: 'I tried, but I _______ lift the heavy weight.'",
                    options: [
                        { t: "can't", c: false },
                        { t: "couldn't", c: true },
                        { t: "don't can", c: false },
                        { t: "no could", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Past Continuous (Affirmative): 'The team _______ (practice) for hours yesterday.'",
                    options: [
                        { t: "practiced", c: false },
                        { t: "was practicing", c: true },
                        { t: "is practicing", c: false },
                        { t: "were practicing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Simple Past (Negative): 'We _______ (not/win) the last game of the season.'",
                    options: [
                        { t: "didn't won", c: false },
                        { t: "didn't win", c: true },
                        { t: "not win", c: false },
                        { t: "weren't winning", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Modals (Present): 'A baby _______ (can/cannot) walk when it's born.'",
                    options: [
                        { t: "can walk", c: false },
                        { t: "cannot walk", c: true },
                        { t: "could walk", c: false },
                        { t: "couldn't walk", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Modals (Past): 'I _______ (could/couldn't) speak English well when I was five.'",
                    options: [
                        { t: "could spoke", c: false },
                        { t: "couldn't speak", c: true },
                        { t: "can't speak", c: false },
                        { t: "could speak", c: false }
                    ]
                },
                // 3C: Grammar Practice (Part 2: 13-24)
                {
                    type: "mcq",
                    q: "Combining Tenses: 'While I _______ (watch) the Olympics, my phone _______ (ring).'",
                    options: [
                        { t: "watched / rang", c: false },
                        { t: "was watching / rang", c: true },
                        { t: "watched / was ringing", c: false },
                        { t: "was watching / was ringing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Modals (Present Ability): 'My brother _______ (can/cannot) do a handstand yet.'",
                    options: [
                        { t: "can do", c: false },
                        { t: "cannot do", c: true },
                        { t: "could do", c: false },
                        { t: "can't doing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Interruption: 'I was running fast _______ I felt a pain in my leg.'",
                    options: [
                        { t: "while", c: false },
                        { t: "when", c: true },
                        { t: "but", c: false },
                        { t: "so", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Modals (Past Ability): 'When she was five, she _______ (could/couldn't) swim very well.'",
                    options: [
                        { t: "could swam", c: false },
                        { t: "couldn't swim", c: true },
                        { t: "can't swim", c: false },
                        { t: "could swim", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Simple Past (Irregular): 'Last week, my team _______ (lose) the game.'",
                    options: [
                        { t: "losed", c: false },
                        { t: "lost", c: true },
                        { t: "loosed", c: false },
                        { t: "loses", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative Ability: 'Even with practice, I _______ (can/cannot) score a goal in basketball.'",
                    options: [
                        { t: "couldn't", c: false },
                        { t: "can't", c: true },
                        { t: "don't can", c: false },
                        { t: "no can", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Simultaneous Actions: 'While my friends _______ (sleep), I _______ (run) in the park.'",
                    options: [
                        { t: "slept / ran", c: false },
                        { t: "were sleeping / was running", c: true },
                        { t: "slept / was running", c: false },
                        { t: "were sleeping / ran", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Question (Past Ability): '_______ you _______ (could/play) basketball when you were a kid?'",
                    options: [
                        { t: "Can / play", c: false },
                        { t: "Could / play", c: true },
                        { t: "Did / play", c: false },
                        { t: "Were / playing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Simple Past (Regular): 'The athlete _______ (train) hard for months.'",
                    options: [
                        { t: "trains", c: false },
                        { t: "train", c: false },
                        { t: "trained", c: true },
                        { t: "trainned", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Past Continuous (Negative): 'My team _______ (not/lose) the match easily.'",
                    options: [
                        { t: "wasn't losing", c: false },
                        { t: "weren't losing", c: true },
                        { t: "didn't lose", c: false },
                        { t: "not lose", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Modals (Present Ability): 'The gymnast _______ (can/cannot) do amazing flips.'",
                    options: [
                        { t: "can does", c: false },
                        { t: "can do", c: true },
                        { t: "could do", c: false },
                        { t: "can doing", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Combining Tenses: '_______ (while/when) I was watching him, he did a new trick.'",
                    options: [
                        { t: "When", c: false },
                        { t: "While", c: true },
                        { t: "But", c: false },
                        { t: "So", c: false }
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
                    text: "I was playing soccer.<br><small style='color:#0077b6'>(Eu estava jogando futebol.)</small>", 
                    audio: "TTS: I was playing soccer.", 
                    arrow: "↘" 
                },
                { 
                    text: "We scored a goal!<br><small style='color:#0077b6'>(Nós marcamos um gol!)</small>", 
                    audio: "TTS: We scored a goal!", 
                    arrow: "↘" 
                },
                { 
                    text: "She could run very fast.<br><small style='color:#0077b6'>(Ela conseguia correr muito rápido.)</small>", 
                    audio: "TTS: She could run very fast.", 
                    arrow: "↘" 
                },
                { 
                    text: "Can you play tennis?<br><small style='color:#0077b6'>(Você sabe jogar tênis?)</small>", 
                    audio: "TTS: Can you play tennis?", 
                    arrow: "↗" 
                },
                { 
                    text: "It started to rain when we were playing.<br><small style='color:#0077b6'>(Começou a chover quando estávamos jogando.)</small>", 
                    audio: "TTS: It started to rain when we were playing.", 
                    arrow: "↘" 
                },
                { 
                    text: "Discipline is important.<br><small style='color:#0077b6'>(Disciplina é importante.)</small>", 
                    audio: "TTS: Discipline is important.", 
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
                    instruction: "Listen to Albert talking about his basketball game and type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre seu jogo de basquete e digite as palavras que faltam.)</small>",
                    audio: "TTS: Last Saturday, I had a big game. I was playing well. I scored ten points. But sadly, my team lost the match.",
                    text: "Last Saturday, I [was playing] well. I [scored] ten points. But sadly, my team [lost] the match."
                },
                // Drill 2: Dropdown (MP3) - Combined context for engine stability
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation and choose the correct option.<br><small style='color:#0077b6'>(Ouça a conversa e escolha a opção correta.)</small>",
                    audio: "audio/7-4-7/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Dad: Celine, look at the TV. They are [swimming | running].", 
                            a: "swimming" 
                        },
                        { 
                            q: "Celine: Could you swim like that when you were [young | old]?", 
                            a: "young" 
                        },
                        { 
                            q: "Dad: No, I [couldn't | can]. I was good at running, not swimming.", 
                            a: "couldn't" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the description and choose the correct sport.<br><small style='color:#0077b6'>(Ouça a descrição e escolha o esporte correto.)</small>",
                    audio: "TTS: You need a racket and a small yellow ball. You hit the ball over a net.",
                    options: [
                        { t: "Soccer", c: false },
                        { t: "Tennis", c: true },
                        { t: "Basketball", c: false },
                        { t: "Swimming", c: false }
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
                    title: "The Big Marathon",
                    audio: "TTS: Last year, my uncle decided to run a marathon. He trained for months. He ran every morning before work. He needed a lot of discipline and strength. On the day of the race, he was running well when he felt a pain in his leg. He stopped for a minute, but he didn't give up. He started running again and finished the race. He didn't win a gold medal, but he was very proud. || audio/7-4-7/p6_text1.mp3",
                    body: "Last year, my uncle decided to run a marathon. He trained for months. He ran every morning before work. He needed a lot of discipline and strength. On the day of the race, he was running well when he felt a pain in his leg. He stopped for a minute, but he didn't give up. He started running again and finished the race. He didn't win a gold medal, but he was very proud.",
                    questions: [
                        { 
                            q: "What did the uncle need to train?", 
                            options: [ 
                                {t: "A car", c: false}, 
                                {t: "Discipline and strength", c: true}, 
                                {t: "A gold medal", c: false}, 
                                {t: "A bicycle", c: false} 
                            ] 
                        },
                        { 
                            q: "What happened while he was running?", 
                            options: [ 
                                {t: "It rained.", c: false}, 
                                {t: "He felt a pain in his leg.", c: true}, 
                                {t: "He won the race.", c: false}, 
                                {t: "He saw a friend.", c: false} 
                            ] 
                        },
                        { 
                            q: "Did he finish the race?", 
                            options: [ 
                                {t: "No, he stopped.", c: false}, 
                                {t: "Yes, he finished.", c: true}, 
                                {t: "No, he went home.", c: false}, 
                                {t: "Yes, he won gold.", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "Watching the Olympics",
                    audio: "audio/7-4-7/p6_text2.mp3",
                    body: "<b>Albert:</b> Celine, are you watching the gymnastics competition?<br><b>Celine:</b> Yes! The athletes are amazing. They have so much focus.<br><b>Albert:</b> I know. I tried to do a handstand yesterday, but I fell.<br><b>Celine:</b> Haha. Could you do gymnastics when you were little?<br><b>Albert:</b> No, never. I could only play football.<br><b>Celine:</b> Look! That athlete just won the gold medal. She looks so happy.",
                    questions: [
                        { 
                            q: "What sport are they watching?", 
                            options: [ 
                                {t: "Football", c: false}, 
                                {t: "Swimming", c: false}, 
                                {t: "Gymnastics", c: true}, 
                                {t: "Tennis", c: false} 
                            ] 
                        },
                        { 
                            q: "What happened when Albert tried a handstand?", 
                            options: [ 
                                {t: "He won a medal.", c: false}, 
                                {t: "He fell.", c: true}, 
                                {t: "He succeeded.", c: false}, 
                                {t: "He slept.", c: false} 
                            ] 
                        },
                        { 
                            q: "What could Albert do when he was little?", 
                            options: [ 
                                {t: "Gymnastics", c: false}, 
                                {t: "Play football", c: true}, 
                                {t: "Swim", c: false}, 
                                {t: "Nothing", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "Skateboarding Fun",
                    audio: "TTS: Skateboarding is a very popular sport in my city. You need good balance and a helmet for safety. My friend Leo is a great skateboarder. He practices at the park every afternoon. Yesterday, I was watching him when he did a new trick. It was awesome! He says that skateboarding teaches you to stand up after you fall. No pain, no gain, he always says. || audio/7-4-7/p6_text3.mp3",
                    body: "Skateboarding is a very popular sport in my city. You need good balance and a helmet for safety. My friend Leo is a great skateboarder. He practices at the park every afternoon. Yesterday, I was watching him when he did a new trick. It was awesome! He says that skateboarding teaches you to stand up after you fall. \"No pain, no gain,\" he always says.",
                    questions: [
                        { 
                            q: "What do you need for skateboarding?", 
                            options: [ 
                                {t: "A racket", c: false}, 
                                {t: "A ball", c: false}, 
                                {t: "Balance and a helmet", c: true}, 
                                {t: "A net", c: false} 
                            ] 
                        },
                        { 
                            q: "When does Leo practice?", 
                            options: [ 
                                {t: "Every morning", c: false}, 
                                {t: "Every afternoon", c: true}, 
                                {t: "Only on Sundays", c: false}, 
                                {t: "At night", c: false} 
                            ] 
                        },
                        { 
                            q: "What does Leo say?", 
                            options: [ 
                                {t: "Practice makes perfect.", c: false}, 
                                {t: "No pain, no gain.", c: true}, 
                                {t: "Time is money.", c: false}, 
                                {t: "I love swimming.", c: false} 
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
                // Drill 1: Matching (Sport -> Equipment)
                {
                    type: "matching",
                    instruction: "Match the sport with the equipment it uses.<br><small style='color:#0077b6'>(Combine o esporte com o equipamento que ele usa.)</small>",
                    pairs: [
                        { left: "Tennis", right: "Racket", val: "1" },
                        { left: "Soccer", right: "Ball and Goal", val: "2" },
                        { left: "Skateboarding", right: "Helmet", val: "3" },
                        { left: "Swimming", right: "Goggles", val: "4" }
                    ]
                },
                // Drill 2: Word Order
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "was / tennis / She / playing / .",
                    correct: "She was playing tennis ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "score / Did / goal / he / a / ?",
                    correct: "Did he score a goal ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "swim / couldn't / I / young / was / I / when / .",
                    correct: "I couldn't swim when I was young ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "arrived / We / the / when / started / game / .",
                    correct: "We arrived when the game started ."
                },
                // Drill 3: Odd One Out (4 Alternatives each)
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Played", c: false },
                        { t: "Scored", c: false },
                        { t: "Watched", c: false },
                        { t: "Winning", c: true } // Gerund, others are Simple Past
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Soccer", c: false },
                        { t: "Teamwork", c: true }, // Skill, others are sports
                        { t: "Basketball", c: false },
                        { t: "Judo", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Can", c: false },
                        { t: "Could", c: false },
                        { t: "Play", c: true }, // Main verb, others are modals
                        { t: "Must", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Gold", c: false },
                        { t: "Silver", c: false },
                        { t: "Bronze", c: false },
                        { t: "Ball", c: true } // Equipment, others are medal types
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown with 4 alternatives)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.<br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "I [was | were | can | could] running in the park.", a: "was" },
                        { q: "He fell [when | while | can | could] he jumped.", a: "when" },
                        { q: "I [can | could | was | were] play basketball now.", a: "can" },
                        { q: "She [could | can | was | were] read when she was four.", a: "could" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: Your favorite sport. Now it's your turn! Write about a sport or physical activity you did in the past.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Seu esporte favorito. Agora é sua vez! Escreva sobre um esporte ou atividade física que você fez no passado.)</span></small>",
            example: "\"Last Sunday, I played volleyball with my friends. We were playing when it started to rain. We stopped and ran home. I can play volleyball well, but I couldn't play in the rain!\"<br><br><small><span style='color:#0077b6'>(\"No último domingo, joguei vôlei com meus amigos. Estávamos jogando quando começou a chover. Paramos e corremos para casa. Eu sei jogar vôlei bem, mas não consegui jogar na chuva!\")</span></small>",
            prompts: [
                "What sport/activity did you do? (I played...) <br><small><span style='color:#0077b6'>(Que esporte/atividade você fez? Eu joguei...)</span></small>",
                "When did you do it? (Last week, yesterday...) <br><small><span style='color:#0077b6'>(Quando você fez isso? Semana passada, ontem...)</span></small>",
                "Did anything happen while you were doing it? (I was playing when...) <br><small><span style='color:#0077b6'>(Aconteceu algo enquanto você estava fazendo? Eu estava jogando quando...)</span></small>",
                "Can you still do it now? (I can/can't...) <br><small><span style='color:#0077b6'>(Você ainda consegue fazer isso agora? Eu consigo/não consigo...)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Sports Vocabulary & Actions)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- General Sports Vocabulary ---
                { 
                    term: "Sport", 
                    definition: "An activity involving physical exertion and skill.", 
                    defTrans: "Esporte",
                    example: "Soccer is a popular sport.", 
                    audioFront: "TTS: Sport",
                    audioBack: "TTS: Soccer is a popular sport." 
                },
                { 
                    term: "Game", 
                    definition: "A form of play or sport, especially a competitive one.", 
                    defTrans: "Jogo",
                    example: "The game starts at 3 PM.", 
                    audioFront: "TTS: Game",
                    audioBack: "TTS: The game starts at 3 PM." 
                },
                { 
                    term: "Team", 
                    definition: "A group of players forming one side in a competitive game.", 
                    defTrans: "Time / Equipe",
                    example: "Our team works together.", 
                    audioFront: "TTS: Team",
                    audioBack: "TTS: Our team works together." 
                },
                { 
                    term: "Athlete", 
                    definition: "A person who is proficient in sports.", 
                    defTrans: "Atleta",
                    example: "She is a strong athlete.", 
                    audioFront: "TTS: Athlete",
                    audioBack: "TTS: She is a strong athlete." 
                },
                { 
                    term: "Coach", 
                    definition: "An instructor or trainer in sport.", 
                    defTrans: "Treinador(a)",
                    example: "The coach teaches us new tricks.", 
                    audioFront: "TTS: Coach",
                    audioBack: "TTS: The coach teaches us new tricks." 
                },
                { 
                    term: "Player", 
                    definition: "A person taking part in a sport or game.", 
                    defTrans: "Jogador(a)",
                    example: "He is the best player.", 
                    audioFront: "TTS: Player",
                    audioBack: "TTS: He is the best player." 
                },
                { 
                    term: "Competition", 
                    definition: "The activity or condition of competing.", 
                    defTrans: "Competição",
                    example: "I am ready for the competition.", 
                    audioFront: "TTS: Competition",
                    audioBack: "TTS: I am ready for the competition." 
                },
                { 
                    term: "Medal", 
                    definition: "A metal disc awarded as the first prize in a competition.", 
                    defTrans: "Medalha",
                    example: "He won a gold medal.", 
                    audioFront: "TTS: Medal",
                    audioBack: "TTS: He won a gold medal." 
                },
                { 
                    term: "Rules", 
                    definition: "Regulations governing conduct within a particular activity.", 
                    defTrans: "Regras",
                    example: "You must follow the rules.", 
                    audioFront: "TTS: Rules",
                    audioBack: "TTS: You must follow the rules." 
                },
                { 
                    term: "Effort", 
                    definition: "A vigorous or determined attempt.", 
                    defTrans: "Esforço",
                    example: "Success requires effort.", 
                    audioFront: "TTS: Effort",
                    audioBack: "TTS: Success requires effort." 
                },

                // --- Sports Actions (Verbs) ---
                { 
                    term: "To Play", 
                    definition: "To engage in a game or sport.", 
                    defTrans: "Jogar / Brincar",
                    example: "I play volleyball.", 
                    audioFront: "TTS: To Play",
                    audioBack: "TTS: I play volleyball." 
                },
                { 
                    term: "To Practice", 
                    definition: "To perform an activity repeatedly or regularly.", 
                    defTrans: "Praticar / Treinar",
                    example: "We practice every day.", 
                    audioFront: "TTS: To Practice",
                    audioBack: "TTS: We practice every day." 
                },
                { 
                    term: "To Watch", 
                    definition: "To look at or observe attentively.", 
                    defTrans: "Assistir",
                    example: "I watch sports on TV.", 
                    audioFront: "TTS: To Watch",
                    audioBack: "TTS: I watch sports on TV." 
                },
                { 
                    term: "To Win", 
                    definition: "To be successful or victorious in a contest or conflict.", 
                    defTrans: "Vencer / Ganhar",
                    example: "We want to win the cup.", 
                    audioFront: "TTS: To Win",
                    audioBack: "TTS: We want to win the cup." 
                },
                { 
                    term: "To Lose", 
                    definition: "To fail to win a game or contest.", 
                    defTrans: "Perder",
                    example: "Don't be sad if you lose.", 
                    audioFront: "TTS: To Lose",
                    audioBack: "TTS: Don't be sad if you lose." 
                },
                { 
                    term: "To Score", 
                    definition: "To gain a point, goal, run, etc., in a competitive game.", 
                    defTrans: "Marcar (um gol/ponto)",
                    example: "She scored the winning point.", 
                    audioFront: "TTS: To Score",
                    audioBack: "TTS: She scored the winning point." 
                },
                // --- Olympic Sports ---
                { 
                    term: "The Olympic Games", 
                    definition: "A modern international sports competition held every four years.", 
                    defTrans: "Os Jogos Olímpicos",
                    example: "The Olympic Games are exciting.", 
                    audioFront: "TTS: The Olympic Games",
                    audioBack: "TTS: The Olympic Games are exciting." 
                },
                { 
                    term: "Athletics", 
                    definition: "Physical sports and games, often refers to track and field events.", 
                    defTrans: "Atletismo",
                    example: "Running is part of athletics.", 
                    audioFront: "TTS: Athletics",
                    audioBack: "TTS: Running is part of athletics." 
                },
                { 
                    term: "Swimming", 
                    definition: "The sport of propelling oneself through water using the limbs.", 
                    defTrans: "Natação",
                    example: "Swimming is good for your back.", 
                    audioFront: "TTS: Swimming",
                    audioBack: "TTS: Swimming is good for your back." 
                },
                { 
                    term: "Cycling", 
                    definition: "The sport or activity of riding a bicycle.", 
                    defTrans: "Ciclismo",
                    example: "He goes cycling on weekends.", 
                    audioFront: "TTS: Cycling",
                    audioBack: "TTS: He goes cycling on weekends." 
                },
                { 
                    term: "Judo", 
                    definition: "A sport of unarmed combat derived from jujitsu.", 
                    defTrans: "Judô",
                    example: "She learns discipline in judo.", 
                    audioFront: "TTS: Judo",
                    audioBack: "TTS: She learns discipline in judo." 
                },
                { 
                    term: "Skateboarding", 
                    definition: "The sport or pastime of riding on a skateboard.", 
                    defTrans: "Skate",
                    example: "Skateboarding is very cool.", 
                    audioFront: "TTS: Skateboarding",
                    audioBack: "TTS: Skateboarding is very cool." 
                },
                { 
                    term: "Gymnastics", 
                    definition: "Exercises developing physical agility and coordination.", 
                    defTrans: "Ginástica",
                    example: "Gymnastics requires balance.", 
                    audioFront: "TTS: Gymnastics",
                    audioBack: "TTS: Gymnastics requires balance." 
                },
                { 
                    term: "Basketball", 
                    definition: "A game played by two teams scoring points through a hoop.", 
                    defTrans: "Basquete",
                    example: "I love playing basketball.", 
                    audioFront: "TTS: Basketball",
                    audioBack: "TTS: I love playing basketball." 
                },
                { 
                    term: "Volleyball", 
                    definition: "A game for two teams in which a ball is hit over a high net.", 
                    defTrans: "Vôlei",
                    example: "We play volleyball at the beach.", 
                    audioFront: "TTS: Volleyball",
                    audioBack: "TTS: We play volleyball at the beach." 
                },
                { 
                    term: "Soccer / Football", 
                    definition: "A game played by two teams with a round ball, not touched by hands.", 
                    defTrans: "Futebol",
                    example: "Soccer is famous in Brazil.", 
                    audioFront: "TTS: Soccer or Football",
                    audioBack: "TTS: Soccer is famous in Brazil." 
                },
                { 
                    term: "Tennis", 
                    definition: "A game where players strike a ball with rackets over a net.", 
                    defTrans: "Tênis",
                    example: "You need a racket for tennis.", 
                    audioFront: "TTS: Tennis",
                    audioBack: "TTS: You need a racket for tennis." 
                },
                { 
                    term: "Surfing", 
                    definition: "The sport or pastime of riding a wave on a surfboard.", 
                    defTrans: "Surfe",
                    example: "Surfing big waves is dangerous.", 
                    audioFront: "TTS: Surfing",
                    audioBack: "TTS: Surfing big waves is dangerous." 
                },

                // --- Skills & Qualities ---
                { 
                    term: "Discipline", 
                    definition: "The practice of training people to obey rules or a code of behavior.", 
                    defTrans: "Disciplina",
                    example: "Discipline helps you improve.", 
                    audioFront: "TTS: Discipline",
                    audioBack: "TTS: Discipline helps you improve." 
                },
                { 
                    term: "Teamwork", 
                    definition: "The combined action of a group of people, especially when effective.", 
                    defTrans: "Trabalho em equipe",
                    example: "Teamwork is key to winning.", 
                    audioFront: "TTS: Teamwork",
                    audioBack: "TTS: Teamwork is key to winning." 
                },
                { 
                    term: "Focus", 
                    definition: "The center of interest; the state of having clear visual definition.", 
                    defTrans: "Foco / Concentração",
                    example: "Keep your focus on the game.", 
                    audioFront: "TTS: Focus",
                    audioBack: "TTS: Keep your focus on the game." 
                },
                { 
                    term: "Strength", 
                    definition: "The quality or state of being physically strong.", 
                    defTrans: "Força",
                    example: "You need strength to lift this.", 
                    audioFront: "TTS: Strength",
                    audioBack: "TTS: You need strength to lift this." 
                },
                { 
                    term: "Mental Health", 
                    definition: "A person's condition regarding their psychological and emotional well-being.", 
                    defTrans: "Saúde Mental",
                    example: "Sports are good for mental health.", 
                    audioFront: "TTS: Mental Health",
                    audioBack: "TTS: Sports are good for mental health." 
                },
                { 
                    term: "Leadership", 
                    definition: "The action of leading a group of people or an organization.", 
                    defTrans: "Liderança",
                    example: "The captain shows leadership.", 
                    audioFront: "TTS: Leadership",
                    audioBack: "TTS: The captain shows leadership." 
                },
                { 
                    term: "Respect", 
                    definition: "A feeling of deep admiration elicited by abilities, qualities, or achievements.", 
                    defTrans: "Respeito",
                    example: "Treat other players with respect.", 
                    audioFront: "TTS: Respect",
                    audioBack: "TTS: Treat other players with respect." 
                },
                { 
                    term: "Skill", 
                    definition: "The ability to do something well; expertise.", 
                    defTrans: "Habilidade",
                    example: "Dribbling is a soccer skill.", 
                    audioFront: "TTS: Skill",
                    audioBack: "TTS: Dribbling is a soccer skill." 
                },
                { 
                    term: "Goal (Objective)", 
                    definition: "The object of a person's ambition; an aim or desired result.", 
                    defTrans: "Objetivo / Meta",
                    example: "My goal is to be an athlete.", 
                    audioFront: "TTS: Goal or Objective",
                    audioBack: "TTS: My goal is to be an athlete." 
                },
                { 
                    term: "Healthy", 
                    definition: "In a good physical or mental condition; in good health.", 
                    defTrans: "Saudável",
                    example: "Eat healthy food.", 
                    audioFront: "TTS: Healthy",
                    audioBack: "TTS: Eat healthy food." 
                },
                // --- Phrases & Expressions ---
                { 
                    term: "No pain, no gain", 
                    definition: "An expression meaning that suffering or hard work is necessary to achieve something.", 
                    defTrans: "Sem dor, sem ganho (Quem não se esforça, não consegue)",
                    example: "Training is hard, but no pain, no gain.", 
                    audioFront: "TTS: No pain, no gain",
                    audioBack: "TTS: Training is hard, but no pain, no gain." 
                },
                { 
                    term: "Practice makes perfect", 
                    definition: "An expression meaning that if you practice something enough, you will eventually be able to do it perfectly.", 
                    defTrans: "A prática leva à perfeição",
                    example: "Don't give up. Practice makes perfect.", 
                    audioFront: "TTS: Practice makes perfect",
                    audioBack: "TTS: Don't give up. Practice makes perfect." 
                },
                { 
                    term: "Gold medal", 
                    definition: "A medal made of or plated with gold, awarded as the first prize in a competition.", 
                    defTrans: "Medalha de ouro",
                    example: "She wants the gold medal.", 
                    audioFront: "TTS: Gold medal",
                    audioBack: "TTS: She wants the gold medal." 
                },

                // --- Grammar Points ---
                { 
                    term: "Simple Past (Completed)", 
                    definition: "Verb tense used for actions that started and finished at a specific time in the past.", 
                    defTrans: "Passado Simples (Ação Completa)",
                    example: "I scored while I was playing.", 
                    audioFront: "TTS: Simple Past Completed",
                    audioBack: "TTS: I scored while I was playing." 
                },
                { 
                    term: "Past Continuous (In Progress)", 
                    definition: "Verb tense used for actions that were happening at a specific time in the past.", 
                    defTrans: "Passado Contínuo (Em progresso)",
                    example: "I was running when I fell.", 
                    audioFront: "TTS: Past Continuous In Progress",
                    audioBack: "TTS: I was running when I fell." 
                },
                { 
                    term: "When (Interruption)", 
                    definition: "Used to connect a continuous action with a sudden/short action.", 
                    defTrans: "Quando (Interrupção)",
                    example: "I was running when I fell.", 
                    audioFront: "TTS: When Interruption",
                    audioBack: "TTS: I was running when I fell." 
                },
                { 
                    term: "While (Background)", 
                    definition: "Used to connect two continuous actions or introduce the background action.", 
                    defTrans: "Enquanto (Fundo/Duração)",
                    example: "While I was training, it rained.", 
                    audioFront: "TTS: While Background",
                    audioBack: "TTS: While I was training, it rained." 
                },
                { 
                    term: "Can (Ability)", 
                    definition: "Modal verb used to express ability in the present.", 
                    defTrans: "Poder/Conseguir (Habilidade Presente)",
                    example: "I can swim fast.", 
                    audioFront: "TTS: Can Ability",
                    audioBack: "TTS: I can swim fast." 
                },
                { 
                    term: "Could (Past Ability)", 
                    definition: "Modal verb used to express ability in the past.", 
                    defTrans: "Podia/Conseguia (Habilidade Passada)",
                    example: "I could run fast when I was young.", 
                    audioFront: "TTS: Could Past Ability",
                    audioBack: "TTS: I could run fast when I was young." 
                }
            ]
        }
    ], // This closes the steps array

    // ======================================================
    // GLOSSARY (Part 1: Context, Sports Vocab, Sports & Olympics)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "game", 
            definition: "A competitive activity played according to rules.", 
            translation: "Jogo" 
        },
        { 
            topic: "Context", 
            term: "was-playing", 
            definition: "Past Continuous: action in progress in the past.", 
            translation: "Estava jogando" 
        },
        { 
            topic: "Context", 
            term: "scored", 
            definition: "Past tense of score; gained a point or goal.", 
            translation: "Marcou" 
        },
        { 
            topic: "Context", 
            term: "point", 
            definition: "A unit of score in a game or sport.", 
            translation: "Ponto" 
        },
        { 
            topic: "Context", 
            term: "was-practicing", 
            definition: "Past Continuous: action in progress in the past.", 
            translation: "Estava praticando" 
        },
        { 
            topic: "Context", 
            term: "discipline", 
            definition: "Training to obey rules or a code of behavior.", 
            translation: "Disciplina" 
        },
        { 
            topic: "Context", 
            term: "when-coach-arrived", 
            definition: "Simple Past: a short action interrupting a longer one.", 
            translation: "Quando o treinador chegou" 
        },
        { 
            topic: "Context", 
            term: "were-losing", 
            definition: "Past Continuous: action in progress in the past (negative).", 
            translation: "Estávamos perdendo" 
        },
        { 
            topic: "Context", 
            term: "teamwork", 
            definition: "Combined action of a group, especially when effective.", 
            translation: "Trabalho em equipe" 
        },
        { 
            topic: "Context", 
            term: "could-play", 
            definition: "Past ability: Had the capacity to play in the past.", 
            translation: "Conseguia jogar / Sabia jogar" 
        },
        { 
            topic: "Context", 
            term: "couldn-t", 
            definition: "Past negative ability: Did not have the capacity in the past.", 
            translation: "Não conseguia / Não sabia" 
        },
        { 
            topic: "Context", 
            term: "can-play", 
            definition: "Present ability: Has the capacity to play now.", 
            translation: "Consegue jogar / Sabe jogar" 
        },
        { 
            topic: "Context", 
            term: "swimming", 
            definition: "The sport of propelling oneself through water.", 
            translation: "Natação" 
        },
        { 
            topic: "Context", 
            term: "effort", 
            definition: "A vigorous or determined attempt.", 
            translation: "Esforço" 
        },

        // --- TOPIC 2: GENERAL SPORTS VOCABULARY ---
        { 
            topic: "General Sports", 
            term: "sport", 
            definition: "An activity involving physical exertion and skill.", 
            translation: "Esporte" 
        },
        { 
            topic: "General Sports", 
            term: "team", 
            definition: "A group of players forming one side in a game.", 
            translation: "Time / Equipe" 
        },
        { 
            topic: "General Sports", 
            term: "athlete", 
            definition: "A person proficient in sports.", 
            translation: "Atleta" 
        },
        { 
            topic: "General Sports", 
            term: "coach", 
            definition: "An instructor or trainer in sport.", 
            translation: "Treinador(a)" 
        },
        { 
            topic: "General Sports", 
            term: "player", 
            definition: "A person taking part in a sport or game.", 
            translation: "Jogador(a)" 
        },
        { 
            topic: "General Sports", 
            term: "competition", 
            definition: "The activity or condition of competing.", 
            translation: "Competição" 
        },
        { 
            topic: "General Sports", 
            term: "medal", 
            definition: "A metal disc awarded as a prize.", 
            translation: "Medalha" 
        },
        { 
            topic: "General Sports", 
            term: "rules", 
            definition: "Regulations governing conduct within an activity.", 
            translation: "Regras" 
        },
        
        // --- TOPIC 3: SPORTS ACTIONS & OLYMPIC SPORTS ---
        { 
            topic: "Sports Actions", 
            term: "to-play", 
            definition: "To engage in a game or sport.", 
            translation: "Jogar / Brincar" 
        },
        { 
            topic: "Sports Actions", 
            term: "to-practice", 
            definition: "To perform an activity repeatedly to improve.", 
            translation: "Praticar / Treinar" 
        },
        { 
            topic: "Sports Actions", 
            term: "to-watch", 
            definition: "To look at or observe attentively.", 
            translation: "Assistir" 
        },
        { 
            topic: "Sports Actions", 
            term: "to-win", 
            definition: "To be successful or victorious in a contest.", 
            translation: "Vencer / Ganhar" 
        },
        { 
            topic: "Sports Actions", 
            term: "to-lose", 
            definition: "To fail to win a game or contest.", 
            translation: "Perder" 
        },
        { 
            topic: "Sports Actions", 
            term: "to-score", 
            definition: "To gain a point, goal, run, etc., in a game.", 
            translation: "Marcar (um gol/ponto)" 
        },
        { 
            topic: "Olympic Sports", 
            term: "the-olympic-games", 
            definition: "A modern international sports competition held every four years.", 
            translation: "Os Jogos Olímpicos" 
        },
        { 
            topic: "Olympic Sports", 
            term: "athletics", 
            definition: "Physical sports and games, often track and field events.", 
            translation: "Atletismo" 
        },
        { 
            topic: "Olympic Sports", 
            term: "cycling", 
            definition: "The sport or activity of riding a bicycle.", 
            translation: "Ciclismo" 
        },
        { 
            topic: "Olympic Sports", 
            term: "judo", 
            definition: "A sport of unarmed combat derived from jujitsu.", 
            translation: "Judô" 
        },
        { 
            topic: "Olympic Sports", 
            term: "skateboarding", 
            definition: "The sport or pastime of riding on a skateboard.", 
            translation: "Skate" 
        },
        { 
            topic: "Olympic Sports", 
            term: "gymnastics", 
            definition: "Exercises developing physical agility and coordination.", 
            translation: "Ginástica" 
        },
        { 
            topic: "Olympic Sports", 
            term: "basketball", 
            definition: "A game played by two teams scoring points through a hoop.", 
            translation: "Basquete" 
        },
        { 
            topic: "Olympic Sports", 
            term: "volleyball", 
            definition: "A game for two teams in which a ball is hit over a high net.", 
            translation: "Vôlei" 
        },
        { 
            topic: "Olympic Sports", 
            term: "soccer", 
            definition: "A game played by two teams with a round ball, not touched by hands.", 
            translation: "Futebol" 
        },
        { 
            topic: "Olympic Sports", 
            term: "tennis", 
            definition: "A game where players strike a ball with rackets over a net.", 
            translation: "Tênis" 
        },
        { 
            topic: "Olympic Sports", 
            term: "surfing", 
            definition: "The sport or pastime of riding a wave on a surfboard.", 
            translation: "Surfe" 
        },
        // --- TOPIC 4: SKILLS & QUALITIES ---
        { 
            topic: "Skills & Qualities", 
            term: "discipline", 
            definition: "The practice of training people to obey rules or a code of behavior.", 
            translation: "Disciplina" 
        },
        { 
            topic: "Skills & Qualities", 
            term: "teamwork", 
            definition: "The combined action of a group of people, especially when effective and efficient.", 
            translation: "Trabalho em equipe" 
        },
        { 
            topic: "Skills & Qualities", 
            term: "focus", 
            definition: "The center of interest or activity; the state or quality of having clear visual definition.", 
            translation: "Foco / Concentração" 
        },
        { 
            topic: "Skills & Qualities", 
            term: "strength", 
            definition: "The quality or state of being physically strong.", 
            translation: "Força" 
        },
        { 
            topic: "Skills & Qualities", 
            term: "mental-health", 
            definition: "A person's condition with regard to their psychological and emotional well-being.", 
            translation: "Saúde Mental" 
        },
        { 
            topic: "Skills & Qualities", 
            term: "leadership", 
            definition: "The action of leading a group of people or an organization.", 
            translation: "Liderança" 
        },
        { 
            topic: "Skills & Qualities", 
            term: "respect", 
            definition: "A feeling of deep admiration for someone elicited by their abilities or achievements.", 
            translation: "Respeito" 
        },
        { 
            topic: "Skills & Qualities", 
            term: "skill", 
            definition: "The ability to do something well; expertise.", 
            translation: "Habilidade" 
        },
        { 
            topic: "Skills & Qualities", 
            term: "goal", 
            definition: "The object of a person's ambition or effort; an aim or desired result.", 
            translation: "Objetivo / Meta" 
        },
        { 
            topic: "Skills & Qualities", 
            term: "healthy", 
            definition: "In a good physical or mental condition; in good health.", 
            translation: "Saudável" 
        },

        // --- TOPIC 5: PHRASES & EXPRESSIONS ---
        { 
            topic: "Expressions", 
            term: "no-pain-no-gain", 
            definition: "An expression meaning that suffering or hard work is necessary to achieve something.", 
            translation: "Sem dor, sem ganho (Quem não se esforça, não consegue)" 
        },
        { 
            topic: "Expressions", 
            term: "practice-makes-perfect", 
            definition: "An expression meaning that if you practice something enough, you will eventually be able to do it perfectly.", 
            translation: "A prática leva à perfeição" 
        },
        { 
            topic: "Expressions", 
            term: "gold-medal", 
            definition: "A medal made of or plated with gold, awarded as the first prize in a competition.", 
            translation: "Medalha de ouro" 
        },

        // --- TOPIC 6: GRAMMAR POINTS ---
        { 
            topic: "Grammar", 
            term: "simple-past", 
            definition: "Verb tense used for actions that started and finished at a specific time in the past.", 
            translation: "Passado Simples" 
        },
        { 
            topic: "Grammar", 
            term: "past-continuous", 
            definition: "Verb tense used for actions that were happening at a specific time in the past.", 
            translation: "Passado Contínuo" 
        },
        { 
            topic: "Grammar", 
            term: "when", 
            definition: "Used to connect a continuous action with a sudden/short action (interruption).", 
            translation: "Quando (Interrupção)" 
        },
        { 
            topic: "Grammar", 
            term: "while", 
            definition: "Used to connect two continuous actions or introduce the background action.", 
            translation: "Enquanto (Fundo/Duração)" 
        },
        { 
            topic: "Grammar", 
            term: "can-ability", 
            definition: "Modal verb used to express ability in the present.", 
            translation: "Poder/Conseguir (Habilidade Presente)" 
        },
        { 
            topic: "Grammar", 
            term: "could-ability", 
            definition: "Modal verb used to express ability in the past.", 
            translation: "Podia/Conseguia (Habilidade Passada)" 
        }
    ]
});