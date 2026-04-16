/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em2-4-12.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em2-4-12", 
    grade: "High School 2nd Grade",       
    bimester: "4",   
    chapter: "12",    
    chapterTitle: "Finding Your Purpose: Life After High School", 
    
    steps:[
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Define life [purpose](tooltip:purpose) using concepts like [passion](tooltip:passion), [mission](tooltip:mission), [profession](tooltip:profession), and [vocation](tooltip:vocation).<br>• Discuss the characteristics and [values](tooltip:values) of different [generations](tooltip:generation) (Baby Boomers to Gen Alpha).<br>• Use [phrasal verbs](tooltip:phrasal-verbs) with TAKE (take up, take on, take after, etc.) in context.<br>• Identify practical [skills](tooltip:skill) and the 10 Steps to [Survive](tooltip:survive) Life After [High School](tooltip:high-school).<br>• Express [ability](tooltip:ability) in the past, present, and future using CAN, COULD, and BE ABLE TO.<br>• Ask for [permission](tooltip:permission) and make [requests](tooltip:request) politely using MAY, CAN, and COULD.<br>• Understand rules and [prohibitions](tooltip:prohibition) using MUST NOT.",
            welcome: "Hello, future leaders! I'm Mr. D!<br>Welcome to a very special journey! Today, we are going to look inside ourselves and ask the big question: \"What is my [purpose](tooltip:purpose)?\" It might seem scary, but it's actually an exciting adventure. We will look at how different [generations](tooltip:generation) view the world, discover words to describe your unique [talents](tooltip:talent), and explore the \"10 Steps to [Survive](tooltip:survive) Life After High School.\" Plus, we'll master the grammar you need to talk about your [skills](tooltip:skill) and [dreams](tooltip:dream). Let's open the door to your [future](tooltip:future)!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Define life purpose using concepts like passion, mission, profession, and vocation. Discuss the characteristics and values of different generations. Use phrasal verbs with TAKE in context. Identify practical skills and the 10 Steps to Survive Life After High School. Express ability in the past, present, and future using CAN, COULD, and BE ABLE TO. Ask for permission and make requests politely using MAY, CAN, and COULD. Understand rules and prohibitions using MUST NOT.",
                welcome: "TTS: Hello, future leaders! I'm Mr. D! Welcome to a very special journey! Today, we are going to look inside ourselves and ask the big question: What is my purpose? It might seem scary, but it's actually an exciting adventure. We will look at how different generations view the world, discover words to describe your unique talents, and explore the 10 Steps to Survive Life After High School. Plus, we'll master the grammar you need to talk about your skills and dreams. Let's open the door to your future!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of a busy school hallway. Albert and Celine are looking at a large poster titled '10 Steps to Survive Life After High School'.", 
            contextAudio: "audio/em2-4-12/step1.mp3",
            dialogue:[
                { 
                    speaker: "Albert", 
                    text: "(Sighs) Looking at this list makes me nervous, Celine. 'Manage your finances,' '[Build a network](tooltip:build-a-network)'... it’s a lot to [take on](tooltip:take-on)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Don't worry, Albert. You [can](tooltip:can-ability) do it! You’re amazing at drawing. Maybe that’s your [vocation](tooltip:vocation)." 
                },
                { 
                    speaker: "Albert", 
                    text: "My dad says I [must not](tooltip:must-not) focus only on art. He thinks I should choose a stable [profession](tooltip:profession). He says I need to be practical to [survive](tooltip:survive) in the real [world](tooltip:world)." 
                },
                { 
                    speaker: "Celine", 
                    text: "But [passion](tooltip:passion) is important too! A true [purpose](tooltip:purpose) is where passion meets [mission](tooltip:mission). You should try to find a [balance](tooltip:balance)." 
                },
                { 
                    speaker: "Albert", 
                    text: "You're right. [Could](tooltip:could-request) you help me look for a [mentor](tooltip:mentor)? Someone who works with design?" 
                },
                { 
                    speaker: "Celine", 
                    text: "Of course! We will [be able to](tooltip:be-able-to) find someone. Maybe you can [take up](tooltip:take-up) a graphic design [course](tooltip:course) online." 
                },
                { 
                    speaker: "Albert", 
                    text: "That’s a good idea. I hope I can [fulfill](tooltip:fulfill) my [potential](tooltip:potential)." 
                },
                { 
                    speaker: "Celine", 
                    text: "We both will! We just need to [figure out](tooltip:figure-out) our [next steps](tooltip:next-steps)." 
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
                    title: "Purpose & Vocation",
                    audio: "TTS: Purpose. Passion. Mission. Profession. Vocation. To belong. To evolve. To contribute. Contribution. To fulfill. Fulfilled. Authenticity.",
                    items:[
                        { term: "Purpose", trans: "Propósito" },
                        { term: "Passion", trans: "Paixão" },
                        { term: "Mission", trans: "Missão" },
                        { term: "Profession", trans: "Profissão" },
                        { term: "Vocation", trans: "Vocação" },
                        { term: "To belong", trans: "Pertencer" },
                        { term: "To evolve", trans: "Evoluir" },
                        { term: "To contribute", trans: "Contribuir" },
                        { term: "Contribution", trans: "Contribuição" },
                        { term: "To fulfill", trans: "Realizar / Preencher" },
                        { term: "Fulfilled", trans: "Realizado(a) / Satisfeito(a)" },
                        { term: "Authenticity", trans: "Autenticidade" }
                    ]
                },
                {
                    title: "Generations",
                    audio: "TTS: Baby Boomers. Generation X. Millennials. Generation Z. Generation Alpha. Generation Gap.",
                    items:[
                        { term: "Baby Boomers", trans: "Geração Baby Boomer (1946-1964)" },
                        { term: "Generation X", trans: "Geração X (1965-1980)" },
                        { term: "Millennials", trans: "Geração Y / Millennials (1981-1996)" },
                        { term: "Generation Z", trans: "Geração Z (1997-2012)" },
                        { term: "Generation Alpha", trans: "Geração Alpha (2013-Presente)" },
                        { term: "Generation Gap", trans: "Conflito de gerações" }
                    ]
                },
                {
                    title: "Phrasal Verbs: TAKE",
                    audio: "TTS: Take up. Take off. Take on. Take over. Take after. Take apart. Take back.",
                    items:[
                        { term: "Take up", trans: "Começar (um hobby ou atividade)" },
                        { term: "Take off", trans: "Decolar / Ter sucesso rápido" },
                        { term: "Take on", trans: "Assumir / Aceitar (um desafio)" },
                        { term: "Take over", trans: "Assumir o controle" },
                        { term: "Take after", trans: "Parecer-se com / Puxar a (alguém da família)" },
                        { term: "Take apart", trans: "Desmontar" },
                        { term: "Take back", trans: "Retirar o que disse / Devolver" }
                    ]
                },
                {
                    title: "Life Skills",
                    audio: "TTS: To manage. To learn. Learning. To take care. Network. To build a network. Mistake. To explore. Practical skills. To communicate. To be open. To understand.",
                    items:[
                        { term: "To manage", trans: "Gerenciar" },
                        { term: "To learn", trans: "Aprender" },
                        { term: "Learning", trans: "Aprendizado" },
                        { term: "To take care", trans: "Cuidar" },
                        { term: "Network", trans: "Rede de contatos" },
                        { term: "To build a network", trans: "Construir uma rede de contatos" },
                        { term: "Mistake", trans: "Erro" },
                        { term: "To explore", trans: "Explorar" },
                        { term: "Practical skills", trans: "Habilidades práticas" },
                        { term: "To communicate", trans: "Comunicar-se" },
                        { term: "To be open", trans: "Estar aberto (a mudanças)" },
                        { term: "To understand", trans: "Entender" }
                    ]
                },
                {
                    title: "Personal Development",
                    audio: "TTS: Ability. Skill. Talent. Awareness. Balance. Challenge. Character. Experience. Hobby. Stability. Success. Support. Value. Tech-savvy.",
                    items:[
                        { term: "Ability", trans: "Capacidade / Habilidade" },
                        { term: "Skill", trans: "Habilidade" },
                        { term: "Talent", trans: "Talento" },
                        { term: "Awareness", trans: "Consciência" },
                        { term: "Balance", trans: "Equilíbrio" },
                        { term: "Challenge", trans: "Desafio" },
                        { term: "Character", trans: "Caráter / Personalidade" },
                        { term: "Experience", trans: "Experiência" },
                        { term: "Hobby", trans: "Passatempo" },
                        { term: "Stability", trans: "Estabilidade" },
                        { term: "Success", trans: "Sucesso" },
                        { term: "Support", trans: "Apoio / Suporte" },
                        { term: "Value", trans: "Valor" },
                        { term: "Tech-savvy", trans: "Especialista em tecnologia" }
                    ]
                },
                {
                    title: "General Concepts",
                    audio: "TTS: Career. Career path. Application. Communicator. Course. High School. Job. Lesson. Mentor. Project. Responsibilities. Role. Student. Advice. Answer. Cause. Concept. Doubt. Economy. Fear. Future. Health. Information. Internet. Figure out. Next steps.",
                    items:[
                        { term: "Career", trans: "Carreira" },
                        { term: "Career path", trans: "Trajetória de carreira" },
                        { term: "Application", trans: "Inscrição / Candidatura" },
                        { term: "Communicator", trans: "Comunicador" },
                        { term: "Course", trans: "Curso" },
                        { term: "High School", trans: "Ensino Médio" },
                        { term: "Job", trans: "Emprego / Trabalho" },
                        { term: "Lesson", trans: "Lição" },
                        { term: "Mentor", trans: "Mentor / Guia" },
                        { term: "Project", trans: "Projeto" },
                        { term: "Responsibilities", trans: "Responsabilidades" },
                        { term: "Role", trans: "Papel / Função" },
                        { term: "Student", trans: "Estudante" },
                        { term: "Advice", trans: "Conselho" },
                        { term: "Answer", trans: "Resposta" },
                        { term: "Cause", trans: "Causa" },
                        { term: "Concept", trans: "Conceito" },
                        { term: "Doubt", trans: "Dúvida" },
                        { term: "Economy", trans: "Economia" },
                        { term: "Fear", trans: "Medo" },
                        { term: "Future", trans: "Futuro" },
                        { term: "Health", trans: "Saúde" },
                        { term: "Information", trans: "Informação" },
                        { term: "Internet", trans: "Internet" },
                        { term: "Figure out", trans: "Descobrir / Resolver" },
                        { term: "Next steps", trans: "Próximos passos" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups:[
                {
                    title: "Purpose & Vocation",
                    audio: "TTS: Finding your purpose is a lifelong journey. Her passion for art is inspiring. My mission is to help people in need. Engineering is a challenging profession. He found his vocation in teaching. We all want to belong somewhere. Society continues to evolve. We want to contribute to a better world. Your contribution is important. She worked hard to fulfill her potential. He feels fulfilled in his new job. Gen Z values authenticity in brands.",
                    items:[
                        { term: "Purpose", sent: "Finding your purpose is a lifelong journey.", trans: "<span style='color:#0077b6'>Encontrar seu propósito é uma jornada para a vida toda.</span>" },
                        { term: "Passion", sent: "Her passion for art is inspiring.", trans: "<span style='color:#0077b6'>A paixão dela pela arte é inspiradora.</span>" },
                        { term: "Mission", sent: "My mission is to help people in need.", trans: "<span style='color:#0077b6'>Minha missão é ajudar pessoas necessitadas.</span>" },
                        { term: "Profession", sent: "Engineering is a challenging profession.", trans: "<span style='color:#0077b6'>Engenharia é uma profissão desafiadora.</span>" },
                        { term: "Vocation", sent: "He found his vocation in teaching.", trans: "<span style='color:#0077b6'>Ele encontrou sua vocação no ensino.</span>" },
                        { term: "To belong", sent: "We all want to belong somewhere.", trans: "<span style='color:#0077b6'>Todos nós queremos pertencer a algum lugar.</span>" },
                        { term: "To evolve", sent: "Society continues to evolve.", trans: "<span style='color:#0077b6'>A sociedade continua a evoluir.</span>" },
                        { term: "To contribute", sent: "We want to contribute to a better world.", trans: "<span style='color:#0077b6'>Queremos contribuir para um mundo melhor.</span>" },
                        { term: "Contribution", sent: "Your contribution is important.", trans: "<span style='color:#0077b6'>Sua contribuição é importante.</span>" },
                        { term: "To fulfill", sent: "She worked hard to fulfill her potential.", trans: "<span style='color:#0077b6'>Ela trabalhou duro para realizar seu potencial.</span>" },
                        { term: "Fulfilled", sent: "He feels fulfilled in his new job.", trans: "<span style='color:#0077b6'>Ele se sente realizado em seu novo emprego.</span>" },
                        { term: "Authenticity", sent: "Gen Z values authenticity in brands.", trans: "<span style='color:#0077b6'>A Geração Z valoriza a autenticidade nas marcas.</span>" }
                    ]
                },
                {
                    title: "Generations",
                    audio: "TTS: Baby Boomers experienced great economic growth. Generation X values independence. Millennials adapted to the internet age. Generation Z is known for being tech-savvy. Generation Alpha is growing up with AI. The generation gap can cause misunderstandings.",
                    items:[
                        { term: "Baby Boomers", sent: "Baby Boomers experienced great economic growth.", trans: "<span style='color:#0077b6'>Os Baby Boomers vivenciaram um grande crescimento econômico.</span>" },
                        { term: "Generation X", sent: "Generation X values independence.", trans: "<span style='color:#0077b6'>A Geração X valoriza a independência.</span>" },
                        { term: "Millennials", sent: "Millennials adapted to the internet age.", trans: "<span style='color:#0077b6'>Os Millennials se adaptaram à era da internet.</span>" },
                        { term: "Generation Z", sent: "Generation Z is known for being tech-savvy.", trans: "<span style='color:#0077b6'>A Geração Z é conhecida por ter facilidade com a tecnologia.</span>" },
                        { term: "Generation Alpha", sent: "Generation Alpha is growing up with AI.", trans: "<span style='color:#0077b6'>A Geração Alpha está crescendo com IA.</span>" },
                        { term: "Generation Gap", sent: "The generation gap can cause misunderstandings.", trans: "<span style='color:#0077b6'>O conflito de gerações pode causar mal-entendidos.</span>" }
                    ]
                },
                {
                    title: "Phrasal Verbs: TAKE",
                    audio: "TTS: I decided to take up piano lessons. Her business started to take off last year. He is ready to take on more responsibility. She will take over the company next month. You take after your mother. He likes to take apart old clocks. I take back my rude comment.",
                    items:[
                        { term: "Take up", sent: "I decided to take up piano lessons.", trans: "<span style='color:#0077b6'>Eu decidi começar aulas de piano.</span>" },
                        { term: "Take off", sent: "Her business started to take off last year.", trans: "<span style='color:#0077b6'>O negócio dela começou a decolar no ano passado.</span>" },
                        { term: "Take on", sent: "He is ready to take on more responsibility.", trans: "<span style='color:#0077b6'>Ele está pronto para assumir mais responsabilidades.</span>" },
                        { term: "Take over", sent: "She will take over the company next month.", trans: "<span style='color:#0077b6'>Ela vai assumir o controle da empresa no próximo mês.</span>" },
                        { term: "Take after", sent: "You take after your mother.", trans: "<span style='color:#0077b6'>Você puxou à sua mãe.</span>" },
                        { term: "Take apart", sent: "He likes to take apart old clocks.", trans: "<span style='color:#0077b6'>Ele gosta de desmontar relógios velhos.</span>" },
                        { term: "Take back", sent: "I take back my rude comment.", trans: "<span style='color:#0077b6'>Eu retiro meu comentário rude.</span>" }
                    ]
                },
                {
                    title: "Life Skills",
                    audio: "TTS: It is hard to manage money in college. We must learn from our mistakes. Learning is a continuous process. Take care of your mental health. Your network is very important. Building a network is key for careers. This mistake was a good lesson. Explore different options before choosing. Cooking is a useful practical skill. We need to communicate clearly. Be open to new opportunities. Try to understand different perspectives.",
                    items:[
                        { term: "To manage", sent: "It is hard to manage money in college.", trans: "<span style='color:#0077b6'>É difícil gerenciar dinheiro na faculdade.</span>" },
                        { term: "To learn", sent: "We must learn from our mistakes.", trans: "<span style='color:#0077b6'>Devemos aprender com nossos erros.</span>" },
                        { term: "Learning", sent: "Learning is a continuous process.", trans: "<span style='color:#0077b6'>O aprendizado é um processo contínuo.</span>" },
                        { term: "To take care", sent: "Take care of your mental health.", trans: "<span style='color:#0077b6'>Cuide da sua saúde mental.</span>" },
                        { term: "Network", sent: "Your network is very important.", trans: "<span style='color:#0077b6'>Sua rede de contatos é muito importante.</span>" },
                        { term: "To build a network", sent: "Building a network is key for careers.", trans: "<span style='color:#0077b6'>Construir uma rede de contatos é fundamental para carreiras.</span>" },
                        { term: "Mistake", sent: "This mistake was a good lesson.", trans: "<span style='color:#0077b6'>Este erro foi uma boa lição.</span>" },
                        { term: "To explore", sent: "Explore different options before choosing.", trans: "<span style='color:#0077b6'>Explore opções diferentes antes de escolher.</span>" },
                        { term: "Practical skills", sent: "Cooking is a useful practical skill.", trans: "<span style='color:#0077b6'>Cozinhar é uma habilidade prática útil.</span>" },
                        { term: "To communicate", sent: "We need to communicate clearly.", trans: "<span style='color:#0077b6'>Precisamos nos comunicar com clareza.</span>" },
                        { term: "To be open", sent: "Be open to new opportunities.", trans: "<span style='color:#0077b6'>Esteja aberto a novas oportunidades.</span>" },
                        { term: "To understand", sent: "Try to understand different perspectives.", trans: "<span style='color:#0077b6'>Tente entender perspectivas diferentes.</span>" }
                    ]
                },
                {
                    title: "Personal Development",
                    audio: "TTS: She has a great ability to solve problems. Coding is a great skill. She has a natural talent for music. Global awareness is increasing. Try to find a balance between work and fun. I am ready for a new challenge. Honesty shows good character. Work experience is valuable. Reading is my favorite hobby. Some people prefer job stability. Hard work leads to success. I need your support to finish this. What values are important to you? She is very tech-savvy for her age.",
                    items:[
                        { term: "Ability", sent: "She has a great ability to solve problems.", trans: "<span style='color:#0077b6'>Ela tem uma grande capacidade de resolver problemas.</span>" },
                        { term: "Skill", sent: "Coding is a great skill.", trans: "<span style='color:#0077b6'>Programação é uma ótima habilidade.</span>" },
                        { term: "Talent", sent: "She has a natural talent for music.", trans: "<span style='color:#0077b6'>Ela tem um talento natural para a música.</span>" },
                        { term: "Awareness", sent: "Global awareness is increasing.", trans: "<span style='color:#0077b6'>A conscientização global está aumentando.</span>" },
                        { term: "Balance", sent: "Try to find a balance between work and fun.", trans: "<span style='color:#0077b6'>Tente encontrar um equilíbrio entre trabalho e diversão.</span>" },
                        { term: "Challenge", sent: "I am ready for a new challenge.", trans: "<span style='color:#0077b6'>Estou pronto para um novo desafio.</span>" },
                        { term: "Character", sent: "Honesty shows good character.", trans: "<span style='color:#0077b6'>A honestidade mostra um bom caráter.</span>" },
                        { term: "Experience", sent: "Work experience is valuable.", trans: "<span style='color:#0077b6'>Experiência de trabalho é valiosa.</span>" },
                        { term: "Hobby", sent: "Reading is my favorite hobby.", trans: "<span style='color:#0077b6'>Ler é meu passatempo favorito.</span>" },
                        { term: "Stability", sent: "Some people prefer job stability.", trans: "<span style='color:#0077b6'>Algumas pessoas preferem a estabilidade no emprego.</span>" },
                        { term: "Success", sent: "Hard work leads to success.", trans: "<span style='color:#0077b6'>O trabalho duro leva ao sucesso.</span>" },
                        { term: "Support", sent: "I need your support to finish this.", trans: "<span style='color:#0077b6'>Preciso do seu apoio para terminar isso.</span>" },
                        { term: "Value", sent: "What values are important to you?", trans: "<span style='color:#0077b6'>Quais valores são importantes para você?</span>" },
                        { term: "Tech-savvy", sent: "She is very tech-savvy for her age.", trans: "<span style='color:#0077b6'>Ela é muito perita em tecnologia para a idade dela.</span>" }
                    ]
                },
                {
                    title: "General Concepts",
                    audio: "TTS: He wants a career in medicine. Plan your career path carefully. I sent my application yesterday. A leader must be a good communicator. I signed up for an art course. Life after high school is exciting. She got a part-time job. That was a tough lesson. Find a mentor to guide you. We are working on a science project. Adults have many responsibilities. What is your role in the team? As a student, you must study hard. Can you give me some advice? I don't know the answer. They fight for a social cause. Purpose is a complex concept. If you have a doubt, ask. The global economy is changing. Don't let fear stop you. Think about your future goals. Health is wealth. We have access to a lot of information. The internet connects us all. We need to figure out a plan. What are your next steps?",
                    items:[
                        { term: "Career", sent: "He wants a career in medicine.", trans: "<span style='color:#0077b6'>Ele quer uma carreira na medicina.</span>" },
                        { term: "Career path", sent: "Plan your career path carefully.", trans: "<span style='color:#0077b6'>Planeje sua trajetória de carreira com cuidado.</span>" },
                        { term: "Application", sent: "I sent my application yesterday.", trans: "<span style='color:#0077b6'>Enviei minha candidatura ontem.</span>" },
                        { term: "Communicator", sent: "A leader must be a good communicator.", trans: "<span style='color:#0077b6'>Um líder deve ser um bom comunicador.</span>" },
                        { term: "Course", sent: "I signed up for an art course.", trans: "<span style='color:#0077b6'>Me inscrevi em um curso de arte.</span>" },
                        { term: "High School", sent: "Life after high school is exciting.", trans: "<span style='color:#0077b6'>A vida após o ensino médio é emocionante.</span>" },
                        { term: "Job", sent: "She got a part-time job.", trans: "<span style='color:#0077b6'>Ela conseguiu um emprego de meio período.</span>" },
                        { term: "Lesson", sent: "That was a tough lesson.", trans: "<span style='color:#0077b6'>Essa foi uma lição difícil.</span>" },
                        { term: "Mentor", sent: "Find a mentor to guide you.", trans: "<span style='color:#0077b6'>Encontre um mentor para guiá-lo.</span>" },
                        { term: "Project", sent: "We are working on a science project.", trans: "<span style='color:#0077b6'>Estamos trabalhando em um projeto de ciências.</span>" },
                        { term: "Responsibilities", sent: "Adults have many responsibilities.", trans: "<span style='color:#0077b6'>Adultos têm muitas responsabilidades.</span>" },
                        { term: "Role", sent: "What is your role in the team?", trans: "<span style='color:#0077b6'>Qual é o seu papel na equipe?</span>" },
                        { term: "Student", sent: "As a student, you must study hard.", trans: "<span style='color:#0077b6'>Como estudante, você deve estudar muito.</span>" },
                        { term: "Advice", sent: "Can you give me some advice?", trans: "<span style='color:#0077b6'>Você pode me dar um conselho?</span>" },
                        { term: "Answer", sent: "I don't know the answer.", trans: "<span style='color:#0077b6'>Eu não sei a resposta.</span>" },
                        { term: "Cause", sent: "They fight for a social cause.", trans: "<span style='color:#0077b6'>Eles lutam por uma causa social.</span>" },
                        { term: "Concept", sent: "Purpose is a complex concept.", trans: "<span style='color:#0077b6'>Propósito é um conceito complexo.</span>" },
                        { term: "Doubt", sent: "If you have a doubt, ask.", trans: "<span style='color:#0077b6'>Se você tiver uma dúvida, pergunte.</span>" },
                        { term: "Economy", sent: "The global economy is changing.", trans: "<span style='color:#0077b6'>A economia global está mudando.</span>" },
                        { term: "Fear", sent: "Don't let fear stop you.", trans: "<span style='color:#0077b6'>Não deixe o medo parar você.</span>" },
                        { term: "Future", sent: "Think about your future goals.", trans: "<span style='color:#0077b6'>Pense sobre seus objetivos futuros.</span>" },
                        { term: "Health", sent: "Health is wealth.", trans: "<span style='color:#0077b6'>Saúde é riqueza.</span>" },
                        { term: "Information", sent: "We have access to a lot of information.", trans: "<span style='color:#0077b6'>Temos acesso a muita informação.</span>" },
                        { term: "Internet", sent: "The internet connects us all.", trans: "<span style='color:#0077b6'>A internet conecta todos nós.</span>" },
                        { term: "Figure out", sent: "We need to figure out a plan.", trans: "<span style='color:#0077b6'>Precisamos descobrir um plano.</span>" },
                        { term: "Next steps", sent: "What are your next steps?", trans: "<span style='color:#0077b6'>Quais são seus próximos passos?</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (Tabbed Version - Exactly 53 MCQs mapping to 2A)
            drillGroups:[
                {
                    title: "Purpose & Vocation",
                    drills:[
                        { type: "mcq", q: "Finding your _______ is a lifelong journey of self-discovery.", options:[{t: "Purpose", c: true}, {t: "To belong", c: false}, {t: "To evolve", c: false}] },
                        { type: "mcq", q: "Her _______ for art makes her paint every single day.", options:[{t: "Passion", c: true}, {t: "Authenticity", c: false}, {t: "To contribute", c: false}] },
                        { type: "mcq", q: "My personal _______ in life is to help people in need.", options:[{t: "Mission", c: true}, {t: "To fulfill", c: false}, {t: "Fulfilled", c: false}] },
                        { type: "mcq", q: "Engineering is a challenging _______ that requires years of study.", options:[{t: "Profession", c: true}, {t: "To belong", c: false}, {t: "To evolve", c: false}] },
                        { type: "mcq", q: "He found his true _______ in teaching children.", options:[{t: "Vocation", c: true}, {t: "Contribution", c: false}, {t: "To contribute", c: false}] },
                        { type: "mcq", q: "We all want _______ somewhere and feel accepted by a group.", options:[{t: "To belong", c: true}, {t: "To fulfill", c: false}, {t: "To evolve", c: false}] },
                        { type: "mcq", q: "Society and technology continue _______ rapidly every year.", options:[{t: "To evolve", c: true}, {t: "To belong", c: false}, {t: "To contribute", c: false}] },
                        { type: "mcq", q: "We want _______ our skills to make a better world.", options:[{t: "To contribute", c: true}, {t: "To fulfill", c: false}, {t: "To belong", c: false}] },
                        { type: "mcq", q: "Your financial _______ is important for the project's success.", options:[{t: "Contribution", c: true}, {t: "Passion", c: false}, {t: "Authenticity", c: false}] },
                        { type: "mcq", q: "She worked hard _______ all the requirements of the program.", options:[{t: "To fulfill", c: true}, {t: "To evolve", c: false}, {t: "To belong", c: false}] },
                        { type: "mcq", q: "He feels completely _______ in his new job as a doctor.", options:[{t: "Fulfilled", c: true}, {t: "Purpose", c: false}, {t: "Vocation", c: false}] },
                        { type: "mcq", q: "Gen Z values real _______ in the brands they support.", options:[{t: "Authenticity", c: true}, {t: "Profession", c: false}, {t: "Mission", c: false}] }
                    ]
                },
                {
                    title: "Generations",
                    drills:[
                        { type: "mcq", q: "The _______ experienced great economic growth after the war.", options:[{t: "Baby Boomers", c: true}, {t: "Generation Z", c: false}, {t: "Generation Alpha", c: false}] },
                        { type: "mcq", q: "People in _______ often value independence and work-life balance.", options:[{t: "Generation X", c: true}, {t: "Generation Alpha", c: false}, {t: "Baby Boomers", c: false}] },
                        { type: "mcq", q: "The _______ were the first generation to adapt quickly to the internet age.", options:[{t: "Millennials", c: true}, {t: "Baby Boomers", c: false}, {t: "Generation Alpha", c: false}] },
                        { type: "mcq", q: "_______ is known for being extremely tech-savvy and pragmatic.", options:[{t: "Generation Z", c: true}, {t: "Baby Boomers", c: false}, {t: "Generation X", c: false}] },
                        { type: "mcq", q: "Children in _______ are growing up completely immersed in AI.", options:[{t: "Generation Alpha", c: true}, {t: "Millennials", c: false}, {t: "Generation X", c: false}] },
                        { type: "mcq", q: "The _______ between parents and children can cause misunderstandings.", options:[{t: "Generation Gap", c: true}, {t: "Generation Alpha", c: false}, {t: "Baby Boomers", c: false}] }
                    ]
                },
                {
                    title: "Phrasal Verbs (TAKE)",
                    drills:[
                        { type: "mcq", q: "I decided to _______ a new hobby to relax.", options:[{t: "Take up", c: true}, {t: "Take off", c: false}, {t: "Take apart", c: false}] },
                        { type: "mcq", q: "Her online business started to _______ quickly last year.", options:[{t: "Take off", c: true}, {t: "Take back", c: false}, {t: "Take on", c: false}] },
                        { type: "mcq", q: "He is ready to _______ more responsibility at work.", options:[{t: "Take on", c: true}, {t: "Take after", c: false}, {t: "Take apart", c: false}] },
                        { type: "mcq", q: "She will _______ the manager's role when he retires.", options:[{t: "Take over", c: true}, {t: "Take off", c: false}, {t: "Take back", c: false}] },
                        { type: "mcq", q: "You really _______ your father; you look just like him.", options:[{t: "Take after", c: true}, {t: "Take over", c: false}, {t: "Take on", c: false}] },
                        { type: "mcq", q: "He likes to _______ old clocks to see how they work.", options:[{t: "Take apart", c: true}, {t: "Take back", c: false}, {t: "Take up", c: false}] },
                        { type: "mcq", q: "I _______ my rude comment. I'm sorry.", options:[{t: "Take back", c: true}, {t: "Take off", c: false}, {t: "Take apart", c: false}] }
                    ]
                },
                {
                    title: "Life Skills",
                    drills:[
                        { type: "mcq", q: "It is hard _______ your money when you are in college.", options:[{t: "To manage", c: true}, {t: "To communicate", c: false}, {t: "To explore", c: false}] },
                        { type: "mcq", q: "We must all _______ from our past failures.", options:[{t: "To learn", c: true}, {t: "To be open", c: false}, {t: "To take care", c: false}] },
                        { type: "mcq", q: "Continuous _______ is essential for professional growth.", options:[{t: "Learning", c: true}, {t: "Mistake", c: false}, {t: "Network", c: false}] },
                        { type: "mcq", q: "You need _______ of your mental health during exams.", options:[{t: "To take care", c: true}, {t: "To manage", c: false}, {t: "To communicate", c: false}] },
                        { type: "mcq", q: "Your professional _______ is very important for finding jobs.", options:[{t: "Network", c: true}, {t: "Mistake", c: false}, {t: "Learning", c: false}] },
                        { type: "mcq", q: "_______ is key for building a successful career.", options:[{t: "To build a network", c: true}, {t: "To take care", c: false}, {t: "To manage", c: false}] },
                        { type: "mcq", q: "Every _______ is just a chance to learn something new.", options:[{t: "Mistake", c: true}, {t: "Network", c: false}, {t: "Learning", c: false}] },
                        { type: "mcq", q: "You should _______ different career options before choosing one.", options:[{t: "To explore", c: true}, {t: "To be open", c: false}, {t: "To communicate", c: false}] },
                        { type: "mcq", q: "Cooking and repairing things are useful _______.", options:[{t: "Practical skills", c: true}, {t: "Mistake", c: false}, {t: "Network", c: false}] },
                        { type: "mcq", q: "In a team, you need _______ clearly with others.", options:[{t: "To communicate", c: true}, {t: "To explore", c: false}, {t: "To manage", c: false}] },
                        { type: "mcq", q: "It is important _______ to new ideas and opportunities.", options:[{t: "To be open", c: true}, {t: "To take care", c: false}, {t: "To learn", c: false}] },
                        { type: "mcq", q: "Read the book carefully _______ the complex theory.", options:[{t: "To understand", c: true}, {t: "To communicate", c: false}, {t: "To explore", c: false}] }
                    ]
                },
                {
                    title: "Personal Development",
                    drills:[
                        { type: "mcq", q: "She has a great _______ to solve mathematical problems.", options:[{t: "Ability", c: true}, {t: "Hobby", c: false}, {t: "Stability", c: false}] },
                        { type: "mcq", q: "Coding is a very valuable _______ in today's market.", options:[{t: "Skill", c: true}, {t: "Balance", c: false}, {t: "Support", c: false}] },
                        { type: "mcq", q: "She has a natural _______ for playing the piano.", options:[{t: "Talent", c: true}, {t: "Awareness", c: false}, {t: "Experience", c: false}] },
                        { type: "mcq", q: "Global _______ of environmental issues is increasing.", options:[{t: "Awareness", c: true}, {t: "Hobby", c: false}, {t: "Success", c: false}] },
                        { type: "mcq", q: "Try to find a healthy _______ between work and fun.", options:[{t: "Balance", c: true}, {t: "Challenge", c: false}, {t: "Value", c: false}] },
                        { type: "mcq", q: "I am ready to face a new _______ at my job.", options:[{t: "Challenge", c: true}, {t: "Stability", c: false}, {t: "Awareness", c: false}] },
                        { type: "mcq", q: "Honesty and integrity show good _______.", options:[{t: "Character", c: true}, {t: "Tech-savvy", c: false}, {t: "Hobby", c: false}] },
                        { type: "mcq", q: "Years of work _______ make you a better professional.", options:[{t: "Experience", c: true}, {t: "Challenge", c: false}, {t: "Support", c: false}] },
                        { type: "mcq", q: "Reading sci-fi books is my favorite _______.", options:[{t: "Hobby", c: true}, {t: "Balance", c: false}, {t: "Stability", c: false}] },
                        { type: "mcq", q: "Some people prefer financial _______ over a risky business.", options:[{t: "Stability", c: true}, {t: "Hobby", c: false}, {t: "Awareness", c: false}] },
                        { type: "mcq", q: "Hard work and dedication usually lead to _______.", options:[{t: "Success", c: true}, {t: "Challenge", c: false}, {t: "Tech-savvy", c: false}] },
                        { type: "mcq", q: "I need your emotional _______ to finish this difficult task.", options:[{t: "Support", c: true}, {t: "Value", c: false}, {t: "Experience", c: false}] },
                        { type: "mcq", q: "What moral _______ are most important to you?", options:[{t: "Value", c: true}, {t: "Ability", c: false}, {t: "Hobby", c: false}] },
                        { type: "mcq", q: "Kids today are extremely _______; they understand computers easily.", options:[{t: "Tech-savvy", c: true}, {t: "Character", c: false}, {t: "Stability", c: false}] }
                    ]
                },
                {
                    title: "General Concepts",
                    drills:[
                        { type: "mcq", q: "He wants a long-term _______ in medicine.", options:[{t: "Career", c: true}, {t: "Course", c: false}, {t: "Fear", c: false}] },
                        { type: "mcq", q: "It is wise to plan your _______ carefully.", options:[{t: "Career path", c: true}, {t: "High School", c: false}, {t: "Doubt", c: false}] },
                        { type: "mcq", q: "I sent my job _______ yesterday.", options:[{t: "Application", c: true}, {t: "Economy", c: false}, {t: "Health", c: false}] },
                        { type: "mcq", q: "A good leader must be an excellent _______.", options:[{t: "Communicator", c: true}, {t: "Internet", c: false}, {t: "Project", c: false}] },
                        { type: "mcq", q: "I signed up for an online design _______.", options:[{t: "Course", c: true}, {t: "Role", c: false}, {t: "Answer", c: false}] },
                        { type: "mcq", q: "Life after _______ is an exciting new adventure.", options:[{t: "High School", c: true}, {t: "Internet", c: false}, {t: "Concept", c: false}] },
                        { type: "mcq", q: "She got a part-time _______ at the local café.", options:[{t: "Job", c: true}, {t: "Lesson", c: false}, {t: "Fear", c: false}] },
                        { type: "mcq", q: "That mistake was a tough but necessary _______.", options:[{t: "Lesson", c: true}, {t: "Health", c: false}, {t: "Information", c: false}] },
                        { type: "mcq", q: "Find an experienced _______ to guide your career.", options:[{t: "Mentor", c: true}, {t: "Project", c: false}, {t: "Economy", c: false}] },
                        { type: "mcq", q: "We are working on a science _______ together.", options:[{t: "Project", c: true}, {t: "Advice", c: false}, {t: "Doubt", c: false}] },
                        { type: "mcq", q: "Adults have many financial and social _______.", options:[{t: "Responsibilities", c: true}, {t: "Internet", c: false}, {t: "Cause", c: false}] },
                        { type: "mcq", q: "What is your specific _______ in this team?", options:[{t: "Role", c: true}, {t: "Health", c: false}, {t: "Future", c: false}] },
                        { type: "mcq", q: "As a _______, you must dedicate time to study.", options:[{t: "Student", c: true}, {t: "Economy", c: false}, {t: "Answer", c: false}] },
                        { type: "mcq", q: "Can you give me some _______ on how to study better?", options:[{t: "Advice", c: true}, {t: "Fear", c: false}, {t: "Internet", c: false}] },
                        { type: "mcq", q: "I don't know the _______ to this math problem.", options:[{t: "Answer", c: true}, {t: "Role", c: false}, {t: "High School", c: false}] },
                        { type: "mcq", q: "They protest and fight for a social _______.", options:[{t: "Cause", c: true}, {t: "Concept", c: false}, {t: "Job", c: false}] },
                        { type: "mcq", q: "'Purpose' is a very complex philosophical _______.", options:[{t: "Concept", c: true}, {t: "Internet", c: false}, {t: "Health", c: false}] },
                        { type: "mcq", q: "If you have a _______ about the lesson, ask the teacher.", options:[{t: "Doubt", c: true}, {t: "Future", c: false}, {t: "Economy", c: false}] },
                        { type: "mcq", q: "The global _______ is changing rapidly.", options:[{t: "Economy", c: true}, {t: "Fear", c: false}, {t: "Mentor", c: false}] },
                        { type: "mcq", q: "Don't let _______ stop you from trying new things.", options:[{t: "Fear", c: true}, {t: "Information", c: false}, {t: "Project", c: false}] },
                        { type: "mcq", q: "Think carefully about your _______ goals.", options:[{t: "Future", c: true}, {t: "Lesson", c: false}, {t: "Answer", c: false}] },
                        { type: "mcq", q: "Physical and mental _______ are very important.", options:[{t: "Health", c: true}, {t: "Internet", c: false}, {t: "Course", c: false}] },
                        { type: "mcq", q: "We have access to a lot of _______ online.", options:[{t: "Information", c: true}, {t: "Advice", c: false}, {t: "Role", c: false}] },
                        { type: "mcq", q: "The _______ connects us all globally.", options:[{t: "Internet", c: true}, {t: "High School", c: false}, {t: "Student", c: false}] },
                        { type: "mcq", q: "We need to _______ a plan to solve this issue.", options:[{t: "Figure out", c: true}, {t: "Next steps", c: false}, {t: "Job", c: false}] },
                        { type: "mcq", q: "What are your _______ for your career?", options:[{t: "Next steps", c: true}, {t: "Figure out", c: false}, {t: "Cause", c: false}] }
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
                    title: "Modals of Ability (CAN & COULD)",
                    audio: "TTS: We use modal verbs to express skills, talents, and what we are capable of doing. Use CAN to express general ability in the present. Use COULD to express general ability in the past, things you knew how to do when you were younger.",
                    explanation: "We use modal verbs to express skills, talents, and what we are capable of doing in the present and the past.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos verbos modais para expressar habilidades, talentos e o que somos capazes de fazer no presente e no passado.)</span>",
                    samples:[
                        { en: "<b>CAN (Present Ability):</b> I <b>can</b> speak English fluently.", pt: "<span style='color:#0077b6'>(Eu sei falar inglês fluentemente.)</span>" },
                        { en: "<b>CAN (Negative):</b> I <b>cannot (can't)</b> drive a car.", pt: "<span style='color:#0077b6'>(Eu não sei dirigir um carro.)</span>" },
                        { en: "<b>COULD (Past Ability):</b> He <b>could</b> swim when he was five.", pt: "<span style='color:#0077b6'>(Ele sabia nadar quando tinha cinco anos.)</span>" },
                        { en: "<b>COULD (Negative):</b> She <b>couldn't</b> read at that age.", pt: "<span style='color:#0077b6'>(Ela não conseguia ler naquela idade.)</span>" }
                    ]
                },
                {
                    title: "Modals of Ability (BE ABLE TO)",
                    audio: "TTS: BE ABLE TO is more formal than can. Crucially, because can does not have a future form, we cannot say will can. We must use will be able to to talk about future skills.",
                    explanation: "<b>BE ABLE TO</b> can be used in all tenses, but it is essential for the future. Because \"can\" does not have a future form (we cannot say \"will can\"), we <b>must</b> use \"will be able to\" to talk about future skills.<br><br><span style='color:#0077b6; font-style:italic;'>(<b>BE ABLE TO</b> pode ser usado em todos os tempos, mas é essencial para o futuro. Como \"can\" não tem forma futura (não podemos dizer \"will can\"), devemos usar \"will be able to\" para falar sobre habilidades futuras.)</span>",
                    samples:[
                        { en: "<b>Future Ability:</b> After this class, you <b>will be able to</b> write a cover letter.", pt: "<span style='color:#0077b6'>(Depois desta aula, você será capaz de escrever uma carta de apresentação.)</span>" },
                        { en: "<b>Future Negative:</b> I <b>won't be able to</b> attend the meeting.", pt: "<span style='color:#0077b6'>(Eu não serei capaz / não poderei ir à reunião.)</span>" },
                        { en: "<b>Present Formal:</b> She <b>is able to</b> manage multiple projects.", pt: "<span style='color:#0077b6'>(Ela é capaz de gerenciar vários projetos.)</span>" }
                    ]
                },
                {
                    title: "Permission & Prohibition (MAY, CAN, MUST NOT)",
                    audio: "TTS: We use specific modals to ask if we are allowed to do something or to state rules. Use CAN to ask for or give permission in an informal way. Use MAY to ask for or give permission in a formal way. Use MUST NOT to express prohibition.",
                    explanation: "We use specific modals to ask if we are allowed to do something (permission) or to state strict rules (prohibition).<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos modais específicos para perguntar se temos permissão para fazer algo ou para declarar regras rígidas.)</span>",
                    samples:[
                        { en: "<b>CAN (Informal Permission):</b> <b>Can</b> I borrow your pen?", pt: "<span style='color:#0077b6'>(Posso pegar sua caneta emprestada?)</span>" },
                        { en: "<b>MAY (Formal Permission):</b> <b>May</b> I leave the room, Mr. D?", pt: "<span style='color:#0077b6'>(Posso sair da sala, Sr. D?)</span>" },
                        { en: "<b>MUST NOT (Prohibition):</b> You <b>must not</b> smoke in the hospital.", pt: "<span style='color:#0077b6'>(Você não deve fumar no hospital. É contra as regras.)</span>" },
                        { en: "<b>MUST NOT (Contraction):</b> Students <b>mustn't</b> cheat on exams.", pt: "<span style='color:#0077b6'>(Os alunos não devem colar nas provas.)</span>" }
                    ]
                },
                {
                    title: "Modals for Requests (CAN & COULD)",
                    audio: "TTS: When we want someone else to do something for us, we use these modals. CAN is direct and informal. COULD is more polite and softer.",
                    explanation: "When we want someone else to do something for us, we use these modals. The difference is the level of politeness. Note: \"May\" is usually used to ask permission for yourself, not to request action from others.<br><br><span style='color:#0077b6; font-style:italic;'>(Quando queremos que outra pessoa faça algo por nós, usamos estes modais. A diferença é o nível de educação/formalidade.)</span>",
                    samples:[
                        { en: "<b>CAN (Informal Request):</b> <b>Can</b> you pass the salt?", pt: "<span style='color:#0077b6'>(Pode me passar o sal?)</span>" },
                        { en: "<b>MAY (Formal Request):</b> <b>May</b> I speak with the manager?", pt: "<span style='color:#0077b6'>(Posso falar com o gerente?)</span>" },
                        { en: "<b>COULD (Polite Request):</b> <b>Could</b> you help me with this project?", pt: "<span style='color:#0077b6'>(Você poderia me ajudar com este projeto?)</span>" },
                        { en: "<b>COULD (Professional):</b> <b>Could</b> you send me the application form?", pt: "<span style='color:#0077b6'>(Você poderia me enviar o formulário de inscrição?)</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups:[
                {
                    title: "Dialogue 1: Future Ambitions (Ability)",
                    audio: "audio/em2-4-12/step3_dialogue1.mp3",
                    lines:[
                        { 
                            speaker: "Albert", 
                            text: "I'm worried about the math exam. I [can](tooltip:can-ability) do the basic sums, but I struggle with algebra.", 
                            pt: "<span style='color:#0077b6'>(Estou preocupado com o exame de matemática. Eu consigo fazer as contas básicas, mas tenho dificuldade com álgebra.)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Don't worry. If you study this weekend, you[will be able to](tooltip:be-able-to) understand the formulas. Remember, last year you[couldn't](tooltip:could-ability) even do fractions, and now you are great at them!", 
                            pt: "<span style='color:#0077b6'>(Não se preocupe. Se você estudar neste fim de semana, você será capaz de entender as fórmulas. Lembre-se, no ano passado você não conseguia nem fazer frações, e agora você é ótimo nelas!)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: School Rules (Permission & Prohibition)",
                    audio: "audio/em2-4-12/step3_dialogue2.mp3",
                    lines:[
                        { 
                            speaker: "Mrs. Canales", 
                            text: "Attention students. You [must not](tooltip:must-not) use ChatGPT to write your essays. That is against the rules.", 
                            pt: "<span style='color:#0077b6'>(Atenção alunos. Vocês não devem usar o ChatGPT para escrever suas redações. Isso é contra as regras.)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Mrs. Canales, [may](tooltip:may-permission) I use the internet for research, though?", 
                            pt: "<span style='color:#0077b6'>(Sra. Canales, eu posso usar a internet para pesquisa, no entanto?)</span>" 
                        },
                        { 
                            speaker: "Mrs. Canales", 
                            text: "Yes, you [may](tooltip:may-permission), but you [must not](tooltip:must-not) copy and paste.", 
                            pt: "<span style='color:#0077b6'>(Sim, você pode, mas não deve copiar e colar.)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Asking for Help (Requests)",
                    audio: "audio/em2-4-12/step3_dialogue3.mp3",
                    lines:[
                        { 
                            speaker: "Albert", 
                            text: "Celine, I'm stuck on this drawing. [Could](tooltip:could-request) you show me how to shade the background?", 
                            pt: "<span style='color:#0077b6'>(Celine, estou travado neste desenho. Você poderia me mostrar como sombrear o fundo?)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Sure![Can](tooltip:can-request) you pass me that pencil first?", 
                            pt: "<span style='color:#0077b6'>(Claro! Pode me passar aquele lápis primeiro?)</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice (Tabbed Version - Exactly 40 MCQs)
            grammarDrillGroups:[
                {
                    title: "Ability (Present, Past, Future)",
                    drills:[
                        { type: "mcq", q: "When I was a baby, I ______ walk.", options:[{t: "cannot", c: false}, {t: "couldn't", c: true}, {t: "won't be able to", c: false}] },
                        { type: "mcq", q: "Next year, after my course, I ______ create my own video game.", options:[{t: "can", c: false}, {t: "could", c: false}, {t: "will be able to", c: true}] },
                        { type: "mcq", q: "My sister is very smart. She ______ solve difficult puzzles easily.", options:[{t: "can", c: true}, {t: "could", c: false}, {t: "shall", c: false}] },
                        { type: "mcq", q: "I ______ hear you very well. The music is too loud!", options:[{t: "can't", c: true}, {t: "couldn't", c: false}, {t: "not able to", c: false}] },
                        { type: "mcq", q: "In the 19th century, people ______ not travel by airplane.", options:[{t: "can", c: false}, {t: "could", c: true}, {t: "will be able to", c: false}] },
                        { type: "mcq", q: "I practiced a lot, so now I ______ play the guitar well.", options:[{t: "can", c: true}, {t: "could", c: false}, {t: "must not", c: false}] },
                        { type: "mcq", q: "If you save money, you ______ buy a car next year.", options:[{t: "can to", c: false}, {t: "will be able to", c: true}, {t: "could to", c: false}] },
                        { type: "mcq", q: "When he was five, he ______ swim like a fish.", options:[{t: "can", c: false}, {t: "could", c: true}, {t: "will be able to", c: false}] },
                        { type: "mcq", q: "Right now, I ______ understand this math problem.", options:[{t: "cannot", c: true}, {t: "couldn't", c: false}, {t: "will not be able to", c: false}] },
                        { type: "mcq", q: "I hope that one day I ______ speak three languages fluently.", options:[{t: "can", c: false}, {t: "could", c: false}, {t: "will be able to", c: true}] }
                    ]
                },
                {
                    title: "Permission & Prohibition",
                    drills:[
                        { type: "mcq", q: "You are talking to your strict boss. You want to leave early: '______ I leave early?'", options:[{t: "Can", c: false}, {t: "May", c: true}, {t: "Must", c: false}] },
                        { type: "mcq", q: "A sign at the zoo says: 'Visitors ______ feed the animals.' (It is forbidden).", options:[{t: "don't have to", c: false}, {t: "must not", c: true}, {t: "may not", c: false}] },
                        { type: "mcq", q: "Asking your best friend to use their charger: '______ I use your charger?'", options:[{t: "May", c: false}, {t: "Can", c: true}, {t: "Must", c: false}] },
                        { type: "mcq", q: "You ______ park here. It is a 'No Parking' zone.", options:[{t: "must not", c: true}, {t: "don't have to", c: false}, {t: "couldn't", c: false}] },
                        { type: "mcq", q: "______ I go to the restroom, Mrs. Canales?", options:[{t: "May", c: true}, {t: "Must", c: false}, {t: "Will", c: false}] },
                        { type: "mcq", q: "You ______ use your phone during the exam. It's against the rules.", options:[{t: "must not", c: true}, {t: "might not", c: false}, {t: "couldn't", c: false}] },
                        { type: "mcq", q: "You ______ forget your passport when you travel internationally.", options:[{t: "must not", c: true}, {t: "may not", c: false}, {t: "can", c: false}] },
                        { type: "mcq", q: "Hey John, ______ I borrow your notebook for a second?", options:[{t: "may", c: false}, {t: "can", c: true}, {t: "must", c: false}] },
                        { type: "mcq", q: "Students ______ run in the hallways. It's dangerous.", options:[{t: "must not", c: true}, {t: "may not", c: false}, {t: "can", c: false}] },
                        { type: "mcq", q: "Excuse me, sir, ______ I see your ID, please?", options:[{t: "can", c: false}, {t: "may", c: true}, {t: "must", c: false}] }
                    ]
                },
                {
                    title: "Requests & Politeness",
                    drills:[
                        { type: "mcq", q: "You are asking a stranger to take a photo of you: '______ you please take a photo of us?'", options:[{t: "Can", c: false}, {t: "Could", c: true}, {t: "Must", c: false}] },
                        { type: "mcq", q: "You are asking your brother to close the door: '______ you close the door?'", options:[{t: "May", c: false}, {t: "Can", c: true}, {t: "Must", c: false}] },
                        { type: "mcq", q: "You want to ask a waiter for the bill politely: '______ we have the bill, please?'", options:[{t: "Can", c: false}, {t: "Could", c: true}, {t: "Must", c: false}] },
                        { type: "mcq", q: "Which sentence uses 'May' correctly?", options:[{t: "May you help me?", c: false}, {t: "May I come in?", c: true}, {t: "May he drives the car?", c: false}] },
                        { type: "mcq", q: "'______ you pass the salt, please?' (To a friend at dinner)", options:[{t: "Could", c: false}, {t: "Can", c: true}, {t: "May", c: false}] },
                        { type: "mcq", q: "'______ you tell me the way to the station?' (To a police officer)", options:[{t: "Can", c: false}, {t: "Could", c: true}, {t: "May", c: false}] },
                        { type: "mcq", q: "Which modal is softer and more polite for a request?", options:[{t: "Can", c: false}, {t: "Could", c: true}, {t: "Must", c: false}] },
                        { type: "mcq", q: "Which modal is more direct and informal for a request?", options:[{t: "Could", c: false}, {t: "Can", c: true}, {t: "May", c: false}] },
                        { type: "mcq", q: "'______ I ask a question?' (To a professor during a lecture)", options:[{t: "Can", c: false}, {t: "May", c: true}, {t: "Must", c: false}] },
                        { type: "mcq", q: "'______ you turn down the music?' (To your roommate)", options:[{t: "Can", c: true}, {t: "Could", c: false}, {t: "May", c: false}] }
                    ]
                },
                {
                    title: "Mixed Modals",
                    drills:[
                        { type: "mcq", q: "I have a lot of free time today, so I ______ help you with the project.", options:[{t: "must not", c: false}, {t: "can", c: true}, {t: "could", c: false}] },
                        { type: "mcq", q: "You ______ enter the building without an ID badge.", options:[{t: "cannot", c: false}, {t: "must not", c: true}, {t: "may", c: false}] },
                        { type: "mcq", q: "When she was young, she ______ run very fast.", options:[{t: "can", c: false}, {t: "could", c: true}, {t: "will be able to", c: false}] },
                        { type: "mcq", q: "Excuse me, ______ you hold the door for me, please?", options:[{t: "could", c: true}, {t: "may", c: false}, {t: "must", c: false}] },
                        { type: "mcq", q: "Next month, they ______ finish the construction.", options:[{t: "can", c: false}, {t: "could", c: false}, {t: "will be able to", c: true}] },
                        { type: "mcq", q: "______ I use your phone to make a quick call? (Informal)", options:[{t: "May", c: false}, {t: "Can", c: true}, {t: "Must", c: false}] },
                        { type: "mcq", q: "Employees ______ share confidential information.", options:[{t: "must not", c: true}, {t: "cannot", c: false}, {t: "may not", c: false}] },
                        { type: "mcq", q: "If you practice, you ______ speak fluently soon.", options:[{t: "can", c: false}, {t: "could", c: false}, {t: "will be able to", c: true}] },
                        { type: "mcq", q: "I ______ solve this equation yesterday, but now I understand it.", options:[{t: "cannot", c: false}, {t: "couldn't", c: true}, {t: "must not", c: false}] },
                        { type: "mcq", q: "______ you explain that grammar rule to me again, Professor?", options:[{t: "Can", c: false}, {t: "Could", c: true}, {t: "May", c: false}] }
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
                    text: "I can define my life purpose clearly. ↘<br><small style='color:#0077b6'>(Eu consigo definir meu propósito de vida claramente.)</small>", 
                    audio: "TTS: I can define my life purpose clearly.", 
                    arrow: "↘" 
                },
                { 
                    text: "Could you help me find my vocation? ↗<br><small style='color:#0077b6'>(Você poderia me ajudar a encontrar minha vocação?)</small>", 
                    audio: "TTS: Could you help me find my vocation?", 
                    arrow: "↗" 
                },
                { 
                    text: "Next year, I will be able to choose my profession. ↘<br><small style='color:#0077b6'>(Ano que vem, eu serei capaz de escolher minha profissão.)</small>", 
                    audio: "TTS: Next year, I will be able to choose my profession.", 
                    arrow: "↘" 
                },
                { 
                    text: "You must not let fear stop you from evolving. ↘<br><small style='color:#0077b6'>(Você não deve deixar o medo te impedir de evoluir.)</small>", 
                    audio: "TTS: You must not let fear stop you from evolving.", 
                    arrow: "↘" 
                },
                { 
                    text: "May I ask a question about the generation gap? ↗<br><small style='color:#0077b6'>(Posso fazer uma pergunta sobre o conflito de gerações?)</small>", 
                    audio: "TTS: May I ask a question about the generation gap?", 
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
                    instruction: "Listen to Albert talking to his dad about his future skills and type the missing words.<br><small style='color:#0077b6'>(Ouça Albert conversando com seu pai sobre suas habilidades futuras e digite as palavras que faltam.)</small>",
                    audio: "TTS: Dad, I know you want me to be an engineer, but I really want to take up graphic design. I think I can be very successful. I promise I will manage my time well between school and my art course. In the future, I will be able to work with big companies!",
                    text: "Dad, I know you want me to be an engineer, but I really want to [take up] graphic design. I think I[can] be very successful. I promise I will [manage] my time well between school and my art course. In the future, I [will be able to] work with big companies!"
                },
                // Drill 2: Dropdown (with Randomized Asterisks)
                {
                    type: "dropdown",
                    instruction: "Listen to Mrs. Canales giving advice to the class and choose the correct options.<br><small style='color:#0077b6'>(Ouça a Sra. Canales dando conselhos à turma e escolha as opções corretas.)</small>",
                    audio: "audio/em2-4-12/step5_drill2.mp3",
                    questions:[
                        { q: "Mrs. Canales: Class, remember step number 4: Build a network.", a: "" },
                        { q: "Student:[How do we do that?* | Can we do that? | May we do that?]", a: "" },
                        { q: "Mrs. Canales: You[should* | must not | can't] talk to people who inspire you.", a: "" },
                        { q: "Student:[May* | Must | Will] I invite a professional to interview?", a: "" },
                        { q: "Mrs. Canales: Yes, you [can* | could | will]. That is a great way to learn!", a: "" }
                    ]
                },
                // Drill 3: Audio Choice
                {
                    type: "audio-choice",
                    instruction: "Listen to the audio question and choose the correct logical answer.<br><small style='color:#0077b6'>(Ouça a pergunta em áudio e escolha a resposta lógica correta.)</small>",
                    audio: "TTS: This area is for staff only. Students are not allowed here.",
                    options:[
                        { t: "Students can enter if they are quiet.", c: false },
                        { t: "Students must not enter this area.", c: true },
                        { t: "Students may enter with a teacher.", c: false },
                        { t: "Students should enter this area.", c: false }
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
                    title: "6a: Narration - Finding the Path",
                    audio: "TTS: Lucas was a typical Gen Z student: tech-savvy but unsure about his future. He felt pressure to choose a profession immediately. His father, a Gen X accountant, told him to pick something stable. But Lucas had a passion for music. He decided to take up the guitar. At first, he couldn't play very well, but he practiced every day. He realized his mission was to connect people through sound. Now, he creates digital music for video games. He found a way to combine his tech skills with his art. He feels truly fulfilled because he didn't give up on his dream. || audio/em2-4-12/p6_text1.mp3",
                    body: "Lucas was a typical [Generation Z](tooltip:generation-z) student: [tech-savvy](tooltip:tech-savvy) but unsure about his [future](tooltip:future). He felt pressure to choose a [profession](tooltip:profession) immediately. His father, a [Generation X](tooltip:generation-x) accountant, told him to pick something stable. But Lucas had a [passion](tooltip:passion) for music. He decided to [take up](tooltip:take-up) the guitar. At first, he [couldn't](tooltip:could-ability) play very well, but he practiced every day. He realized his [mission](tooltip:mission) was to connect people through sound. Now, he creates digital music for video games. He found a way to combine his tech [skills](tooltip:skill) with his art. He feels truly [fulfilled](tooltip:fulfilled) because he didn't give up on his dream.",
                    questions:[
                        { 
                            q: "What generation does Lucas belong to?", 
                            options:[ 
                                {t: "Baby Boomer", c: false}, 
                                {t: "Generation X", c: false}, 
                                {t: "Generation Z", c: true},
                                {t: "Millennial", c: false}
                            ] 
                        },
                        { 
                            q: "What did Lucas decide to do first?", 
                            options:[ 
                                {t: "He became an accountant.", c: false}, 
                                {t: "He took up the guitar.", c: true}, 
                                {t: "He gave up on music.", c: false},
                                {t: "He bought a video game.", c: false}
                            ] 
                        },
                        { 
                            q: "Why does Lucas feel fulfilled now?", 
                            options:[ 
                                {t: "Because he is rich.", c: false}, 
                                {t: "Because he combined his tech skills with his passion.", c: true},
                                {t: "Because he listened to his father's advice about stability.", c: false},
                                {t: "Because he stopped playing music.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "6b: Dialogue - The Interview",
                    audio: "audio/em2-4-12/p6_text2.mp3",
                    body: "<b>Interviewer:</b> Good morning, Sarah. Can you tell me why you want to [take on](tooltip:take-on) this [role](tooltip:role)?<br><b>Sarah:</b> Good morning. Yes, I believe I [can](tooltip:can-ability) [contribute](tooltip:contribute) a lot to this company. My [purpose](tooltip:purpose) is to create sustainable solutions.<br><b>Interviewer:</b> That's impressive. Are you able to work under pressure?<br><b>Sarah:</b> Yes, in my last internship, I had [to manage](tooltip:manage) several [projects](tooltip:project) at once. I [could](tooltip:could-ability) handle tight deadlines very well.<br><b>Interviewer:</b> Excellent. Do you have any questions for us?<br><b>Sarah:</b> [May](tooltip:may-permission) I ask about the team structure? I [value](tooltip:to-value) collaboration.<br><b>Interviewer:</b> Of course. We are a very collaborative team.",
                    questions:[
                        { 
                            q: "What is Sarah's purpose?", 
                            options:[ 
                                {t: "To make a lot of money.", c: false}, 
                                {t: "To create sustainable solutions.", c: true}, 
                                {t: "To work alone.", c: false},
                                {t: "To be famous.", c: false}
                            ] 
                        },
                        { 
                            q: "What ability did Sarah demonstrate in the past?", 
                            options:[ 
                                {t: "She could paint well.", c: false}, 
                                {t: "She could handle tight deadlines and manage projects.", c: true}, 
                                {t: "She could not work under pressure.", c: false},
                                {t: "She could sing in a choir.", c: false}
                            ] 
                        },
                        { 
                            q: "What does Sarah ask permission to do?", 
                            options:[ 
                                {t: "To leave early.", c: false}, 
                                {t: "To ask about the team structure.", c: true}, 
                                {t: "To take on a new role.", c: false},
                                {t: "To fulfill her potential.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "6c: Description - The Evolution of Work",
                    audio: "TTS: The concept of a career has evolved. For Baby Boomers, a career often meant staying in one company for 30 years to ensure stability. They valued loyalty. For Millennials and Gen Z, the focus has shifted. They look for a sense of belonging and a mission. They are not afraid to change jobs if they don't feel fulfilled. They want a profession that aligns with their personal values. While older generations had to be in the office from 9 to 5, younger generations utilize technology to work from anywhere. They believe they should have a healthy work-life balance. || audio/em2-4-12/p6_text3.mp3",
                    body: "The [concept](tooltip:concept) of a [career](tooltip:career) has [evolved](tooltip:evolve). For [Baby Boomers](tooltip:baby-boomers), a career often meant staying in one company for 30 years to ensure [stability](tooltip:stability). They valued loyalty. For [Millennials](tooltip:millennials) and [Gen Z](tooltip:generation-z), the focus has shifted. They look for a sense of [belonging](tooltip:belong) and a [mission](tooltip:mission). They are not afraid to change [jobs](tooltip:job) if they don't feel [fulfilled](tooltip:fulfilled). They want a [profession](tooltip:profession) that aligns with their personal [values](tooltip:values). While older generations had to be in the office from 9 to 5, younger generations utilize technology to work from anywhere. They believe they should have a healthy [work-life balance](tooltip:work-life-balance).",
                    questions:[
                        { 
                            q: "What did Baby Boomers value most in a career?", 
                            options:[ 
                                {t: "Technology", c: false}, 
                                {t: "Changing jobs often", c: false}, 
                                {t: "Stability and loyalty", c: true},
                                {t: "Working from home", c: false}
                            ] 
                        },
                        { 
                            q: "What do Millennials and Gen Z look for?", 
                            options:[ 
                                {t: "A job that aligns with their values and offers belonging.", c: true}, 
                                {t: "A job with no responsibilities.", c: false}, 
                                {t: "A job without technology.", c: false},
                                {t: "Staying in the same company forever.", c: false}
                            ] 
                        },
                        { 
                            q: "How has the work schedule changed?", 
                            options:[ 
                                {t: "Everyone works more hours now.", c: false}, 
                                {t: "Younger generations use technology to work from anywhere.", c: true}, 
                                {t: "People don't work anymore.", c: false},
                                {t: "Everyone works from 9 to 5 in an office.", c: false}
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
                // 1-4: Matching (Phrasal Verbs)
                { type: "matching", instruction: "Match the phrasal verb to its meaning.<br><small style='color:#0077b6'>(Associe o verbo frasal ao seu significado.)</small>", pairs:[ {left: "Take up", right: "Start a new hobby", val: "1"}, {left: "Take after", right: "Resemble a parent", val: "2"}, {left: "Take off", right: "Become successful quickly", val: "3"}, {left: "Take apart", right: "Disassemble", val: "4"} ] },
                { type: "matching", instruction: "Match the generation with its description.<br><small style='color:#0077b6'>(Associe a geração com sua descrição.)</small>", pairs:[ {left: "Gen Z", right: "Digital natives", val: "1"}, {left: "Baby Boomers", right: "Value stability", val: "2"}, {left: "Millennials", right: "Adapted to the internet", val: "3"}, {left: "Gen Alpha", right: "Immersed in AI", val: "4"} ] },
                { type: "matching", instruction: "Match the modal verb with its function.<br><small style='color:#0077b6'>(Associe o verbo modal com sua função.)</small>", pairs:[ {left: "Can", right: "Informal Permission", val: "1"}, {left: "May", right: "Formal Permission", val: "2"}, {left: "Must not", right: "Prohibition", val: "3"}, {left: "Could", right: "Polite Request", val: "4"} ] },
                { type: "matching", instruction: "Match the life concept to its definition.<br><small style='color:#0077b6'>(Associe o conceito de vida à sua definição.)</small>", pairs:[ {left: "Purpose", right: "Reason for existence", val: "1"}, {left: "Passion", right: "Strong enthusiasm", val: "2"}, {left: "Profession", right: "Paid occupation", val: "3"}, {left: "Vocation", right: "Feeling of suitability", val: "4"} ] },
                
                // 5-12: Word Order
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "help / me / you / Could / please / ?", correct: "Could you help me please ?" },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "not / telephones / must / use / You / class / in / .", correct: "You must not use telephones in class ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "able / to / be / will / drive / I / soon / .", correct: "I will be able to drive soon ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "I / May / window / open / the / ?", correct: "May I open the window ?" },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "decided / up / take / to / I / yoga / .", correct: "I decided to take up yoga ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "father / after / He / his / takes / .", correct: "He takes after his father ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "manage / hard / money / is / to / It / .", correct: "It is hard to manage money ." },
                { type: "word-order", instruction: "Unscramble the sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem.)</small>", sentence: "work / success / leads / Hard / to / .", correct: "Hard work leads to success ." },

                // 13-20: Dropdowns (with randomized * positions)
                { type: "dropdown", instruction: "Select the correct option.<br>I decided to _______ yoga to relax.", questions: [{ q: "I decided to[take off | take up | take apart] yoga to relax.", a: "take up" }] },
                { type: "dropdown", instruction: "Select the correct option.<br>He takes _______ his father; they both love cars.", questions: [{ q: "He takes[after | over | on] his father; they both love cars.", a: "after" }] },
                { type: "dropdown", instruction: "Select the correct option.<br>She is going to _______ more responsibility at work.", questions:[{ q: "She is going to [take back | take on | take apart] more responsibility at work.", a: "take on" }] },
                { type: "dropdown", instruction: "Select the correct option.<br>When I was five, I _______ not ride a bike.", questions: [{ q: "When I was five, I[can | will | could] not ride a bike.", a: "could" }] },
                { type: "dropdown", instruction: "Select the correct option.<br>_______ I have a glass of water?", questions: [{ q: "[Must | May | Will] I have a glass of water?", a: "May" }] },
                { type: "dropdown", instruction: "Select the correct option.<br>She is very smart, she _______ learn this quickly.", questions:[{ q: "She is very smart, she [can | will be able to | could] learn this quickly.", a: "can" }] },
                { type: "dropdown", instruction: "Select the correct option.<br>You _______ smoke in the hospital.", questions: [{ q: "You [might | could | must not] smoke in the hospital.", a: "must not" }] },
                { type: "dropdown", instruction: "Select the correct option.<br>It is hard to find a work-life _______ these days.", questions:[{ q: "It is hard to find a work-life [purpose | balance | network] these days.", a: "balance" }] },

                // 21-25: Clickable Error
                { type: "clickable-error", instruction: "Find the mistake in the sentence.<br><small style='color:#0077b6'>(Encontre o erro na frase.)</small>", sentence: "Next year, I will [can](error:will_be_able_to) drive a car." },
                { type: "clickable-error", instruction: "Find the mistake in the sentence.<br><small style='color:#0077b6'>(Encontre o erro na frase.)</small>", sentence: "You [don't](error:must) [have](error:not) [to](error:) use your phone during the exam." },
                { type: "clickable-error", instruction: "Find the mistake in the sentence.<br><small style='color:#0077b6'>(Encontre o erro na frase.)</small>", sentence: "[Must](error:May) I go to the restroom, Mr. D?" },
                { type: "clickable-error", instruction: "Find the mistake in the sentence.<br><small style='color:#0077b6'>(Encontre o erro na frase.)</small>", sentence: "Her business started to take [up](error:off) last year." },
                { type: "clickable-error", instruction: "Find the mistake in the sentence.<br><small style='color:#0077b6'>(Encontre o erro na frase.)</small>", sentence: "I decided to take [on](error:up) piano lessons." },

                // 26-30: Odd One Out
                { type: "odd-one-out", instruction: "Choose the word that doesn't fit the category (Generations vs Skills).<br><small style='color:#0077b6'>(Escolha a palavra que não pertence à categoria.)</small>", options:[{t: "Millennials", c: false}, {t: "Baby Boomers", c: false}, {t: "Gen Z", c: false}, {t: "Talent", c: true}] },
                { type: "odd-one-out", instruction: "Choose the word that doesn't fit the category (Modals of Ability vs Permission).<br><small style='color:#0077b6'>(Escolha a palavra que não pertence à categoria.)</small>", options:[{t: "Can", c: false}, {t: "Could", c: false}, {t: "Be able to", c: false}, {t: "Must not", c: true}] },
                { type: "odd-one-out", instruction: "Choose the word that doesn't fit the category (Phrasal Verbs with TAKE).<br><small style='color:#0077b6'>(Escolha a palavra que não pertence à categoria.)</small>", options:[{t: "Take up", c: false}, {t: "Take off", c: false}, {t: "Take after", c: false}, {t: "Take behind", c: true}] },
                { type: "odd-one-out", instruction: "Choose the word that doesn't fit the category (Life Purpose).<br><small style='color:#0077b6'>(Escolha a palavra que não pertence à categoria.)</small>", options:[{t: "Passion", c: false}, {t: "Mission", c: false}, {t: "Vocation", c: false}, {t: "Mistake", c: true}] },
                { type: "odd-one-out", instruction: "Choose the word that doesn't fit the category (Skills & Traits).<br><small style='color:#0077b6'>(Escolha a palavra que não pertence à categoria.)</small>", options:[{t: "Ability", c: false}, {t: "Talent", c: false}, {t: "Skill", c: false}, {t: "Tragedy", c: true}] },

                // 31-40: MCQs (Using <br> formatting inside instruction)
                { type: "mcq", instruction: "Choose the correct option.<br>We must _______ to the new changes in society.", q: "", options:[{t: "fail", c: false}, {t: "adapt", c: true}, {t: "stop", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>Being 'tech-savvy' means you are _______.", q: "", options:[{t: "afraid of technology", c: false}, {t: "an expert in technology", c: true}, {t: "tired of technology", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>You should ask for advice from a _______ if you have doubts.", q: "", options:[{t: "mentor", c: true}, {t: "rule", c: false}, {t: "mistake", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>To survive life after high school, you must build a _______.", q: "", options:[{t: "tragedy", c: false}, {t: "network", c: true}, {t: "setback", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>My little brother is so _______; he fixes my phone!", q: "", options:[{t: "tech-savvy", c: true}, {t: "overwhelmed", c: false}, {t: "precious", c: false}] },
                { type: "mcq", instruction: "Choose the correct option.<br>You need to learn to _______ your money.", q: "", options:[{t: "manage", c: true}, {t: "take up", c: false}, {t: "call off", c: false}] },
                { type: "mcq", q: "", instruction: "Choose the correct option.<br>My main _______ in life is to help others.", options:[{t: "mistake", c: false}, {t: "purpose", c: true}, {t: "rule", c: false}] },
                { type: "mcq", q: "", instruction: "Choose the correct option.<br>Robots will not _______ the world.", options:[{t: "take after", c: false}, {t: "take over", c: true}, {t: "take apart", c: false}] },
                { type: "mcq", q: "", instruction: "Choose the correct option.<br>I decided to _______ yoga to relax.", options:[{t: "take up", c: true}, {t: "take back", c: false}, {t: "take off", c: false}] },
                { type: "mcq", q: "", instruction: "Choose the correct option.<br>Please _______ what you said; it was rude.", options:[{t: "take over", c: false}, {t: "take back", c: true}, {t: "take on", c: false}] }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn! Write a short text (3-4 sentences) about what you think your future profession might be and what skills you have. Answer these questions in your text: What is a possible profession for you? What can you do well now (skills)? What will you be able to do in the future? What must you do to achieve this?<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas: Agora é sua vez! Escreva um pequeno texto (3-4 frases) sobre qual você acha que será sua futura profissão e quais habilidades você tem. Responda estas perguntas: Qual é uma profissão possível para você? O que você sabe fazer bem agora? O que você será capaz de fazer no futuro? O que você deve fazer para alcançar isso?)</span></small>",
            example: "\"I think I might become a graphic designer. I can draw very well and I am learning to use Photoshop. In the future, I will be able to create websites for big companies. I must study hard and practice every day.\"<br><br><small><span style='color:#0077b6'>(\"Acho que posso me tornar um designer gráfico. Sei desenhar muito bem e estou aprendendo a usar o Photoshop. No futuro, serei capaz de criar sites para grandes empresas. Devo estudar muito e praticar todos os dias.\")</span></small>",
            prompts:[
                "Use Modals of Ability (can, will be able to). <br><small><span style='color:#0077b6'>(Use Modais de Habilidade.)</span></small>",
                "Use Modals for Deductions/Rules (might, must). <br><small><span style='color:#0077b6'>(Use Modais de Dedução/Regras.)</span></small>",
                "Include vocabulary related to [skills] and [professions]. <br><small><span style='color:#0077b6'>(Inclua vocabulário relacionado a habilidades e profissões.)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Wrap it up",
            items:[
                // --- 2A: Purpose & Vocation ---
                { term: "Purpose", definition: "Reason for existence.", defTrans: "Propósito", example: "Finding your purpose is a journey.", audioFront: "TTS: Purpose", audioBack: "TTS: Finding your purpose is a journey." },
                { term: "Passion", definition: "Strong enthusiasm.", defTrans: "Paixão", example: "Music is her greatest passion.", audioFront: "TTS: Passion", audioBack: "TTS: Music is her greatest passion." },
                { term: "Mission", definition: "A goal or task.", defTrans: "Missão", example: "His mission is to help others.", audioFront: "TTS: Mission", audioBack: "TTS: His mission is to help others." },
                { term: "Profession", definition: "Paid occupation.", defTrans: "Profissão", example: "Engineering is a difficult profession.", audioFront: "TTS: Profession", audioBack: "TTS: Engineering is a difficult profession." },
                { term: "Vocation", definition: "A strong feeling of suitability for a career.", defTrans: "Vocação", example: "Nursing is a vocation, not just a job.", audioFront: "TTS: Vocation", audioBack: "TTS: Nursing is a vocation, not just a job." },
                { term: "To belong", definition: "To fit in.", defTrans: "Pertencer", example: "I feel I belong in this community.", audioFront: "TTS: To belong", audioBack: "TTS: I feel I belong in this community." },
                { term: "To evolve", definition: "To develop gradually.", defTrans: "Evoluir", example: "Ideas about work evolve over time.", audioFront: "TTS: To evolve", audioBack: "TTS: Ideas about work evolve over time." },
                { term: "To contribute", definition: "To give something.", defTrans: "Contribuir", example: "We want to contribute to a better world.", audioFront: "TTS: To contribute", audioBack: "TTS: We want to contribute to a better world." },
                { term: "To fulfill", definition: "To achieve or satisfy.", defTrans: "Realizar / Preencher", example: "She worked hard to fulfill her potential.", audioFront: "TTS: To fulfill", audioBack: "TTS: She worked hard to fulfill her potential." },
                { term: "Fulfilled", definition: "Satisfied.", defTrans: "Realizado(a)", example: "He feels fulfilled in his new job.", audioFront: "TTS: Fulfilled", audioBack: "TTS: He feels fulfilled in his new job." },
                { term: "Authenticity", definition: "Being real or true.", defTrans: "Autenticidade", example: "Gen Z values authenticity in brands.", audioFront: "TTS: Authenticity", audioBack: "TTS: Gen Z values authenticity in brands." },

                // --- 2A: Generations ---
                { term: "Baby Boomers", definition: "Generation born approx. 1946-1964.", defTrans: "Geração Baby Boomer", example: "Baby Boomers often value job stability.", audioFront: "TTS: Baby Boomers", audioBack: "TTS: Baby Boomers often value job stability." },
                { term: "Generation X", definition: "Generation born approx. 1965-1980.", defTrans: "Geração X", example: "Generation X saw the rise of personal computers.", audioFront: "TTS: Generation X", audioBack: "TTS: Generation X saw the rise of personal computers." },
                { term: "Millennials", definition: "Generation born approx. 1981-1996.", defTrans: "Millennials (Gen Y)", example: "Millennials adapted quickly to the internet.", audioFront: "TTS: Millennials", audioBack: "TTS: Millennials adapted quickly to the internet." },
                { term: "Generation Z", definition: "Generation born approx. 1997-2012.", defTrans: "Geração Z", example: "Generation Z members are digital natives.", audioFront: "TTS: Generation Z", audioBack: "TTS: Generation Z members are digital natives." },
                { term: "Generation Alpha", definition: "Generation born approx. 2013-Present.", defTrans: "Geração Alpha", example: "Generation Alpha is growing up with AI.", audioFront: "TTS: Generation Alpha", audioBack: "TTS: Generation Alpha is growing up with AI." },
                { term: "Generation Gap", definition: "Difference in attitudes between ages.", defTrans: "Conflito de gerações", example: "The generation gap can cause misunderstandings.", audioFront: "TTS: Generation Gap", audioBack: "TTS: The generation gap can cause misunderstandings." },

                // --- 2A: Phrasal Verbs (TAKE) ---
                { term: "Take up", definition: "Start a hobby/activity.", defTrans: "Começar", example: "I decided to take up piano lessons.", audioFront: "TTS: Take up", audioBack: "TTS: I decided to take up piano lessons." },
                { term: "Take off", definition: "Become successful quickly.", defTrans: "Decolar / Ter sucesso", example: "Her business started to take off last year.", audioFront: "TTS: Take off", audioBack: "TTS: Her business started to take off last year." },
                { term: "Take on", definition: "Accept a challenge or responsibility.", defTrans: "Assumir / Aceitar", example: "He is ready to take on more responsibility.", audioFront: "TTS: Take on", audioBack: "TTS: He is ready to take on more responsibility." },
                { term: "Take over", definition: "Assume control.", defTrans: "Assumir o controle", example: "She will take over the company next month.", audioFront: "TTS: Take over", audioBack: "TTS: She will take over the company next month." },
                { term: "Take after", definition: "Resemble a parent.", defTrans: "Parecer-se com", example: "You take after your mother.", audioFront: "TTS: Take after", audioBack: "TTS: You take after your mother." },
                { term: "Take apart", definition: "Disassemble.", defTrans: "Desmontar", example: "He likes to take apart old clocks.", audioFront: "TTS: Take apart", audioBack: "TTS: He likes to take apart old clocks." },
                { term: "Take back", definition: "Retract what was said / Return.", defTrans: "Retirar o que disse / Devolver", example: "I take back my rude comment.", audioFront: "TTS: Take back", audioBack: "TTS: I take back my rude comment." },

                // --- 2A: Life Skills & Personal Development ---
                { term: "To manage", definition: "To be in charge of (time, money).", defTrans: "Gerenciar", example: "It is hard to manage money in college.", audioFront: "TTS: To manage", audioBack: "TTS: It is hard to manage money in college." },
                { term: "To learn", definition: "To acquire knowledge.", defTrans: "Aprender", example: "We must learn from our mistakes.", audioFront: "TTS: To learn", audioBack: "TTS: We must learn from our mistakes." },
                { term: "To take care", definition: "To look after.", defTrans: "Cuidar", example: "Take care of your mental health.", audioFront: "TTS: To take care", audioBack: "TTS: Take care of your mental health." },
                { term: "Network", definition: "A group of interconnected people.", defTrans: "Rede de contatos", example: "Building a network is key for careers.", audioFront: "TTS: Network", audioBack: "TTS: Building a network is key for careers." },
                { term: "Mistake", definition: "An error.", defTrans: "Erro", example: "This mistake was a good lesson.", audioFront: "TTS: Mistake", audioBack: "TTS: This mistake was a good lesson." },
                { term: "To explore", definition: "To travel through or investigate.", defTrans: "Explorar", example: "Explore different options before choosing.", audioFront: "TTS: To explore", audioBack: "TTS: Explore different options before choosing." },
                { term: "Practical skills", definition: "Skills useful in real life.", defTrans: "Habilidades práticas", example: "Cooking is a useful practical skill.", audioFront: "TTS: Practical skills", audioBack: "TTS: Cooking is a useful practical skill." },
                { term: "To communicate", definition: "To share or exchange information.", defTrans: "Comunicar-se", example: "We need to communicate clearly.", audioFront: "TTS: To communicate", audioBack: "TTS: We need to communicate clearly." },
                { term: "To be open", definition: "To be receptive to new ideas.", defTrans: "Estar aberto", example: "Be open to new opportunities.", audioFront: "TTS: To be open", audioBack: "TTS: Be open to new opportunities." },
                { term: "To understand", definition: "To perceive the meaning of.", defTrans: "Entender", example: "Try to understand different perspectives.", audioFront: "TTS: To understand", audioBack: "TTS: Try to understand different perspectives." },
                { term: "Ability / Skill / Talent", definition: "Capacity to do something well.", defTrans: "Habilidade / Talento", example: "She has a natural talent for music.", audioFront: "TTS: Ability, Skill, Talent", audioBack: "TTS: She has a natural talent for music." },
                { term: "Awareness", definition: "Knowledge or perception of a situation.", defTrans: "Consciência", example: "Global awareness is increasing.", audioFront: "TTS: Awareness", audioBack: "TTS: Global awareness is increasing." },
                { term: "Balance", definition: "An even distribution.", defTrans: "Equilíbrio", example: "Try to find a balance between work and fun.", audioFront: "TTS: Balance", audioBack: "TTS: Try to find a balance between work and fun." },
                { term: "Challenge", definition: "A task that tests abilities.", defTrans: "Desafio", example: "I am ready for a new challenge.", audioFront: "TTS: Challenge", audioBack: "TTS: I am ready for a new challenge." },
                { term: "Character", definition: "The mental and moral qualities of an individual.", defTrans: "Caráter / Personalidade", example: "Honesty shows good character.", audioFront: "TTS: Character", audioBack: "TTS: Honesty shows good character." },
                { term: "Experience", definition: "Practical contact with and observation of facts.", defTrans: "Experiência", example: "Work experience is valuable.", audioFront: "TTS: Experience", audioBack: "TTS: Work experience is valuable." },
                { term: "Hobby", definition: "An activity done regularly in one's leisure time.", defTrans: "Passatempo", example: "Reading is my favorite hobby.", audioFront: "TTS: Hobby", audioBack: "TTS: Reading is my favorite hobby." },
                { term: "Stability", definition: "The state of being stable.", defTrans: "Estabilidade", example: "Some people prefer job stability.", audioFront: "TTS: Stability", audioBack: "TTS: Some people prefer job stability." },
                { term: "Success", definition: "The accomplishment of an aim or purpose.", defTrans: "Sucesso", example: "Hard work leads to success.", audioFront: "TTS: Success", audioBack: "TTS: Hard work leads to success." },
                { term: "Support", definition: "Assistance or encouragement.", defTrans: "Apoio", example: "I need your support to finish this.", audioFront: "TTS: Support", audioBack: "TTS: I need your support to finish this." },
                { term: "Value", definition: "Principles or standards of behavior.", defTrans: "Valor", example: "What values are important to you?", audioFront: "TTS: Value", audioBack: "TTS: What values are important to you?" },
                { term: "Tech-savvy", definition: "Well informed about or proficient in the use of modern technology.", defTrans: "Expert em tecnologia", example: "She is very tech-savvy for her age.", audioFront: "TTS: Tech-savvy", audioBack: "TTS: She is very tech-savvy for her age." },

                // --- 2A: General Concepts ---
                { term: "Career", definition: "An occupation undertaken for a significant period.", defTrans: "Carreira", example: "He wants a career in medicine.", audioFront: "TTS: Career", audioBack: "TTS: He wants a career in medicine." },
                { term: "Application", definition: "A formal request to an authority for something.", defTrans: "Inscrição / Candidatura", example: "I sent my application yesterday.", audioFront: "TTS: Application", audioBack: "TTS: I sent my application yesterday." },
                { term: "Communicator", definition: "A person who is able to convey information.", defTrans: "Comunicador", example: "A leader must be a good communicator.", audioFront: "TTS: Communicator", audioBack: "TTS: A leader must be a good communicator." },
                { term: "Course", definition: "A series of lectures or lessons.", defTrans: "Curso", example: "I signed up for an art course.", audioFront: "TTS: Course", audioBack: "TTS: I signed up for an art course." },
                { term: "High School", definition: "A school that typically comprises grades 9 through 12.", defTrans: "Ensino Médio", example: "Life after high school is exciting.", audioFront: "TTS: High School", audioBack: "TTS: Life after high school is exciting." },
                { term: "Job", definition: "A paid position of regular employment.", defTrans: "Emprego", example: "She got a part-time job.", audioFront: "TTS: Job", audioBack: "TTS: She got a part-time job." },
                { term: "Lesson", definition: "A period of learning or teaching.", defTrans: "Lição", example: "This mistake was a good lesson.", audioFront: "TTS: Lesson", audioBack: "TTS: This mistake was a good lesson." },
                { term: "Mentor", definition: "An experienced and trusted adviser.", defTrans: "Mentor", example: "Find a mentor to guide you.", audioFront: "TTS: Mentor", audioBack: "TTS: Find a mentor to guide you." },
                { term: "Project", definition: "An individual or collaborative enterprise.", defTrans: "Projeto", example: "We are working on a science project.", audioFront: "TTS: Project", audioBack: "TTS: We are working on a science project." },
                { term: "Responsibilities", definition: "The state or fact of having a duty to deal with something.", defTrans: "Responsabilidades", example: "Adults have many responsibilities.", audioFront: "TTS: Responsibilities", audioBack: "TTS: Adults have many responsibilities." },
                { term: "Role", definition: "The function assumed or part played by a person.", defTrans: "Papel / Função", example: "What is your role in the team?", audioFront: "TTS: Role", audioBack: "TTS: What is your role in the team?" },
                { term: "Student", definition: "A person who is studying at a school or college.", defTrans: "Estudante", example: "As a student, you must study hard.", audioFront: "TTS: Student", audioBack: "TTS: As a student, you must study hard." },
                { term: "Advice", definition: "Guidance or recommendations offered with regard to prudent future action.", defTrans: "Conselho", example: "Can you give me some advice?", audioFront: "TTS: Advice", audioBack: "TTS: Can you give me some advice?" },
                { term: "Answer", definition: "A thing said, written, or done to deal with a question.", defTrans: "Resposta", example: "I don't know the answer.", audioFront: "TTS: Answer", audioBack: "TTS: I don't know the answer." },
                { term: "Cause", definition: "A principle, aim, or movement that, because of a deep commitment, one is prepared to defend.", defTrans: "Causa", example: "They fight for a social cause.", audioFront: "TTS: Cause", audioBack: "TTS: They fight for a social cause." },
                { term: "Concept", definition: "An abstract idea.", defTrans: "Conceito", example: "Purpose is a complex concept.", audioFront: "TTS: Concept", audioBack: "TTS: Purpose is a complex concept." },
                { term: "Doubt", definition: "A feeling of uncertainty.", defTrans: "Dúvida", example: "If you have a doubt, ask.", audioFront: "TTS: Doubt", audioBack: "TTS: If you have a doubt, ask." },
                { term: "Economy", definition: "The wealth and resources of a country or region.", defTrans: "Economia", example: "The global economy is changing.", audioFront: "TTS: Economy", audioBack: "TTS: The global economy is changing." },
                { term: "Fear", definition: "An unpleasant emotion caused by the belief that someone or something is dangerous.", defTrans: "Medo", example: "Don't let fear stop you.", audioFront: "TTS: Fear", audioBack: "TTS: Don't let fear stop you." },
                { term: "Future", definition: "The time or a period of time following the moment of speaking.", defTrans: "Futuro", example: "Think about your future goals.", audioFront: "TTS: Future", audioBack: "TTS: Think about your future goals." },
                { term: "Health", definition: "The state of being free from illness or injury.", defTrans: "Saúde", example: "Health is wealth.", audioFront: "TTS: Health", audioBack: "TTS: Health is wealth." },
                { term: "Information", definition: "Facts provided or learned about something.", defTrans: "Informação", example: "We have access to a lot of information.", audioFront: "TTS: Information", audioBack: "TTS: We have access to a lot of information." },
                { term: "Internet", definition: "A global computer network.", defTrans: "Internet", example: "The internet connects us all.", audioFront: "TTS: Internet", audioBack: "TTS: The internet connects us all." },

                // --- 3A: Grammar (Modals) ---
                { term: "CAN (Ability)", definition: "Present Ability.", defTrans: "Saber / Conseguir", example: "I can speak English.", audioFront: "TTS: CAN for ability", audioBack: "TTS: I can speak English." },
                { term: "COULD (Ability)", definition: "Past Ability.", defTrans: "Sabia / Conseguia", example: "I could run fast when I was a kid.", audioFront: "TTS: COULD for ability", audioBack: "TTS: I could run fast when I was a kid." },
                { term: "BE ABLE TO", definition: "Ability (All tenses, especially Future).", defTrans: "Ser capaz de", example: "I will be able to drive next year.", audioFront: "TTS: BE ABLE TO", audioBack: "TTS: I will be able to drive next year." },
                { term: "MAY (Permission)", definition: "Formal Permission.", defTrans: "Poder (formal)", example: "May I use the restroom?", audioFront: "TTS: MAY for permission", audioBack: "TTS: May I use the restroom?" },
                { term: "CAN (Permission)", definition: "Informal Permission.", defTrans: "Poder (informal)", example: "Can I borrow your pen?", audioFront: "TTS: CAN for permission", audioBack: "TTS: Can I borrow your pen?" },
                { term: "MUST NOT", definition: "Prohibition.", defTrans: "Não dever (proibido)", example: "You must not text in class.", audioFront: "TTS: MUST NOT", audioBack: "TTS: You must not text in class." },
                { term: "COULD (Request)", definition: "Polite Request.", defTrans: "Poderia", example: "Could you help me, please?", audioFront: "TTS: COULD for request", audioBack: "TTS: Could you help me, please?" },
                { term: "CAN (Request)", definition: "Informal Request.", defTrans: "Pode", example: "Can you open the door?", audioFront: "TTS: CAN for request", audioBack: "TTS: Can you open the door?" }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (For Tooltips & Reference)
    // ======================================================
    glossary:[
        // --- TOPIC 1: CONTEXT TOOLTIPS ---
        { topic: "Context", term: "build-a-network", definition: "To develop professional and social contacts.", translation: "Construir uma rede de contatos" },
        { topic: "Context", term: "must-not", definition: "Modal used to express prohibition.", translation: "Não deve (proibição)" },
        { topic: "Context", term: "balance", definition: "A situation in which different elements are equal or in the correct proportions.", translation: "Equilíbrio" },
        { topic: "Context", term: "could-request", definition: "Modal used for polite requests.", translation: "Poderia (pedido educado)" },
        { topic: "Context", term: "be-able-to", definition: "Used to express ability in tenses where 'can' doesn't work (like the future).", translation: "Ser capaz de" },
        { topic: "Context", term: "course", definition: "A series of lectures or lessons in a particular subject.", translation: "Curso" },
        { topic: "Context", term: "figure-out", definition: "To solve or discover the cause of a problem.", translation: "Descobrir / Resolver" },
        { topic: "Context", term: "next-steps", definition: "The actions to be taken immediately following the current situation.", translation: "Próximos passos" },
        { topic: "Context", term: "can-ability", definition: "Modal used to express present ability.", translation: "Poder / Conseguir (habilidade)" },
        { topic: "Context", term: "could-ability", definition: "Modal used to express past ability.", translation: "Podia / Conseguia (habilidade no passado)" },
        { topic: "Context", term: "may-permission", definition: "Modal used to ask for or give formal permission.", translation: "Poder (permissão formal)" },
        { topic: "Context", term: "values", definition: "Principles or standards of behavior.", translation: "Valores" },
        { topic: "Context", term: "permission", definition: "The approval to do something.", translation: "Permissão" },
        { topic: "Context", term: "request", definition: "An act of asking politely or formally for something.", translation: "Pedido" },
        { topic: "Context", term: "prohibition", definition: "The action of forbidding something.", translation: "Proibição" },
        { topic: "Context", term: "dream", definition: "A cherished aspiration, ambition, or ideal.", translation: "Sonho" },
        { topic: "Context", term: "world", definition: "The earth, together with all of its countries and peoples.", translation: "Mundo" },
        { topic: "Context", term: "potential", definition: "Having or showing the capacity to develop into something in the future.", translation: "Potencial" },
        { topic: "Context", term: "to-value", definition: "To consider something to be important or beneficial.", translation: "Valorizar" },
        { topic: "Context", term: "work-life-balance", definition: "The equilibrium between personal life and career.", translation: "Equilíbrio entre vida pessoal e profissional" },

        // --- TOPIC 2: PURPOSE & VOCATION ---
        { topic: "Purpose & Vocation", term: "purpose", definition: "The reason for which something is done or created or for which something exists.", translation: "Propósito" },
        { topic: "Purpose & Vocation", term: "passion", definition: "Strong and barely controllable emotion or enthusiasm.", translation: "Paixão" },
        { topic: "Purpose & Vocation", term: "mission", definition: "An important assignment given to a person or group of people.", translation: "Missão" },
        { topic: "Purpose & Vocation", term: "profession", definition: "A paid occupation, especially one that involves prolonged training.", translation: "Profissão" },
        { topic: "Purpose & Vocation", term: "vocation", definition: "A strong feeling of suitability for a particular career or occupation.", translation: "Vocação" },
        { topic: "Purpose & Vocation", term: "belong", definition: "To be rightly placed in a specified position.", translation: "Pertencer" },
        { topic: "Purpose & Vocation", term: "evolve", definition: "To develop gradually.", translation: "Evoluir" },
        { topic: "Purpose & Vocation", term: "contribute", definition: "To give something in order to help achieve or provide something.", translation: "Contribuir" },
        { topic: "Purpose & Vocation", term: "contribution", definition: "A gift or payment to a common fund or collection.", translation: "Contribuição" },
        { topic: "Purpose & Vocation", term: "fulfill", definition: "To achieve or realize something desired, promised, or predicted.", translation: "Realizar / Preencher" },
        { topic: "Purpose & Vocation", term: "fulfilled", definition: "Satisfied or happy because of fully developing one's abilities or character.", translation: "Realizado(a)" },
        { topic: "Purpose & Vocation", term: "authenticity", definition: "The quality of being real or true.", translation: "Autenticidade" },

        // --- TOPIC 3: GENERATIONS ---
        { topic: "Generations", term: "generation", definition: "All of the people born and living at about the same time.", translation: "Geração" },
        { topic: "Generations", term: "baby-boomers", definition: "The generation born approximately between 1946 and 1964, often associated with stability.", translation: "Geração Baby Boomer" },
        { topic: "Generations", term: "generation-x", definition: "The generation born approximately between 1965 and 1980.", translation: "Geração X" },
        { topic: "Generations", term: "millennials", definition: "Generation Y; people born approximately between 1981 and 1996.", translation: "Millennials (Geração Y)" },
        { topic: "Generations", term: "generation-z", definition: "The generation born approximately between 1997 and 2012, known as digital natives.", translation: "Geração Z" },
        { topic: "Generations", term: "generation-alpha", definition: "The generation born from 2013 onwards, completely immersed in AI.", translation: "Geração Alpha" },
        { topic: "Generations", term: "generation-gap", definition: "A difference of attitudes between people of different generations.", translation: "Conflito de gerações" },

        // --- TOPIC 4: PHRASAL VERBS (TAKE) ---
        { topic: "Phrasal Verbs", term: "phrasal-verbs", definition: "A verb combined with a preposition or adverb that creates a meaning different from the original verb.", translation: "Phrasal Verbs" },
        { topic: "Phrasal Verbs", term: "take-up", definition: "To begin a new hobby or activity.", translation: "Começar" },
        { topic: "Phrasal Verbs", term: "take-off", definition: "To become successful or popular very quickly.", translation: "Decolar / Ter sucesso rápido" },
        { topic: "Phrasal Verbs", term: "take-on", definition: "To undertake or handle a challenge or responsibility.", translation: "Assumir / Aceitar" },
        { topic: "Phrasal Verbs", term: "take-over", definition: "To assume control of something.", translation: "Assumir o controle" },
        { topic: "Phrasal Verbs", term: "take-after", definition: "To resemble a parent or ancestor.", translation: "Parecer-se com" },
        { topic: "Phrasal Verbs", term: "take-apart", definition: "To dismantle or disassemble something.", translation: "Desmontar" },
        { topic: "Phrasal Verbs", term: "take-back", definition: "To retract a statement or return something.", translation: "Retirar o que disse / Devolver" },

        // --- TOPIC 5: LIFE SKILLS & DEVELOPMENT ---
        { topic: "Life Skills", term: "manage", definition: "To be in charge of (time, money, etc.).", translation: "Gerenciar" },
        { topic: "Life Skills", term: "learn", definition: "To acquire knowledge or skill.", translation: "Aprender" },
        { topic: "Life Skills", term: "learning", definition: "The acquisition of knowledge or skills through experience, study, or by being taught.", translation: "Aprendizado" },
        { topic: "Life Skills", term: "take-care", definition: "To keep someone or something safe, healthy, and in good condition.", translation: "Cuidar" },
        { topic: "Life Skills", term: "network", definition: "A group or system of interconnected people or things.", translation: "Rede de contatos" },
        { topic: "Life Skills", term: "mistake", definition: "An action or judgment that is misguided or wrong.", translation: "Erro" },
        { topic: "Life Skills", term: "explore", definition: "To travel through an unfamiliar area to learn about it; to inquire into or discuss.", translation: "Explorar" },
        { topic: "Life Skills", term: "practical-skills", definition: "Skills that are useful in real, everyday situations.", translation: "Habilidades práticas" },
        { topic: "Life Skills", term: "communicate", definition: "To share or exchange information, news, or ideas.", translation: "Comunicar-se" },
        { topic: "Life Skills", term: "open", definition: "Receptive to new ideas or changes.", translation: "Aberto(a)" },
        { topic: "Life Skills", term: "understand", definition: "To perceive the intended meaning of words or a speaker.", translation: "Entender" },
        { topic: "Life Skills", term: "ability", definition: "Possession of the means or skill to do something.", translation: "Capacidade / Habilidade" },
        { topic: "Life Skills", term: "skill", definition: "The ability to do something well; expertise.", translation: "Habilidade" },
        { topic: "Life Skills", term: "talent", definition: "Natural aptitude or skill.", translation: "Talento" },
        { topic: "Life Skills", term: "awareness", definition: "Knowledge or perception of a situation or fact.", translation: "Consciência" },
        { topic: "Life Skills", term: "challenge", definition: "A task or situation that tests someone's abilities.", translation: "Desafio" },
        { topic: "Life Skills", term: "character", definition: "The mental and moral qualities distinctive to an individual.", translation: "Caráter / Personalidade" },
        { topic: "Life Skills", term: "experience", definition: "Practical contact with and observation of facts or events.", translation: "Experiência" },
        { topic: "Life Skills", term: "hobby", definition: "An activity done regularly in one's leisure time for pleasure.", translation: "Passatempo" },
        { topic: "Life Skills", term: "stability", definition: "The state of being stable or secure.", translation: "Estabilidade" },
        { topic: "Life Skills", term: "success", definition: "The accomplishment of an aim or purpose.", translation: "Sucesso" },
        { topic: "Life Skills", term: "support", definition: "Help or encouragement given to someone.", translation: "Apoio / Suporte" },
        { topic: "Life Skills", term: "value", definition: "Principles or standards of behavior.", translation: "Valor" },
        { topic: "Life Skills", term: "tech-savvy", definition: "Well informed about or proficient in the use of modern technology.", translation: "Especialista em tecnologia" },

        // --- TOPIC 6: GENERAL CONCEPTS ---
        { topic: "General Concepts", term: "career", definition: "An occupation undertaken for a significant period of a person's life.", translation: "Carreira" },
        { topic: "General Concepts", term: "career-path", definition: "The sequence of jobs that make up your career plan.", translation: "Trajetória de carreira" },
        { topic: "General Concepts", term: "application", definition: "A formal request to an authority for something.", translation: "Inscrição / Candidatura" },
        { topic: "General Concepts", term: "communicator", definition: "A person who is able to convey information or ideas.", translation: "Comunicador" },
        { topic: "General Concepts", term: "high-school", definition: "A school that typically comprises grades 9 through 12.", translation: "Ensino Médio" },
        { topic: "General Concepts", term: "job", definition: "A paid position of regular employment.", translation: "Emprego / Trabalho" },
        { topic: "General Concepts", term: "lesson", definition: "A period of learning or teaching.", translation: "Lição" },
        { topic: "General Concepts", term: "mentor", definition: "An experienced and trusted adviser.", translation: "Mentor / Guia" },
        { topic: "General Concepts", term: "project", definition: "An individual or collaborative enterprise.", translation: "Projeto" },
        { topic: "General Concepts", term: "responsibilities", definition: "The state or fact of having a duty to deal with something.", translation: "Responsabilidades" },
        { topic: "General Concepts", term: "role", definition: "The function assumed or part played by a person.", translation: "Papel / Função" },
        { topic: "General Concepts", term: "advice", definition: "Guidance or recommendations offered with regard to prudent future action.", translation: "Conselho" },
        { topic: "General Concepts", term: "answer", definition: "A thing said, written, or done to deal with a question.", translation: "Resposta" },
        { topic: "General Concepts", term: "cause", definition: "A principle, aim, or movement that one is prepared to defend.", translation: "Causa" },
        { topic: "General Concepts", term: "concept", definition: "An abstract idea.", translation: "Conceito" },
        { topic: "General Concepts", term: "doubt", definition: "A feeling of uncertainty.", translation: "Dúvida" },
        { topic: "General Concepts", term: "economy", definition: "The wealth and resources of a country or region.", translation: "Economia" },
        { topic: "General Concepts", term: "fear", definition: "An unpleasant emotion caused by the belief that someone or something is dangerous.", translation: "Medo" },
        { topic: "General Concepts", term: "future", definition: "The time or a period of time following the moment of speaking.", translation: "Futuro" },
        { topic: "General Concepts", term: "health", definition: "The state of being free from illness or injury.", translation: "Saúde" },
        { topic: "General Concepts", term: "information", definition: "Facts provided or learned about something.", translation: "Informação" },
        { topic: "General Concepts", term: "internet", definition: "A global computer network.", translation: "Internet" },
        { topic: "General Concepts", term: "survive", definition: "To continue to live or exist, especially in spite of danger.", translation: "Sobreviver" },

        // --- TOPIC 7: GRAMMAR ---
        { topic: "Grammar", term: "can", definition: "Modal verb used for present ability, informal permission, or informal requests.", translation: "Poder / Conseguir" },
        { topic: "Grammar", term: "could", definition: "Modal verb used for past ability or polite requests.", translation: "Poderia / Sabia / Conseguia" },
        { topic: "Grammar", term: "may", definition: "Modal verb used for formal permission.", translation: "Poder (permissão formal)" }
    ]
});