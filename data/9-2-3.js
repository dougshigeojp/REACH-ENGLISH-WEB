/**
 * REACH English - LESSON DATA 9-2-3
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "9-2-3", 
    grade: "9th Grade",       
    bimester: "2",   
    chapter: "3",    
    chapterTitle: "Your Future Calling", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Talk about jobs and career paths.<br>• Use adjectives to describe work skills and personality.<br>• Use modals for possibility (may, might, could, must, can't).<br>• Use modals for advice (should, ought to).<br>• Understand the structure of a cover letter.",
            welcome: "Hello, Future Professionals! It's Mr. D!<br><br>Welcome to \"Your Future Calling\"! Have you ever thought about what you want to be when you grow up? Today, we are going to explore the world of work. We'll learn about different professions, the skills you need, and how to talk about your future possibilities. We will also learn how to give good advice to friends who are deciding on their careers. Let's get ready for the future!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about jobs and career paths. Use adjectives to describe work skills and personality. Use modals for possibility: may, might, could, must, can't. Use modals for advice: should, ought to. Understand the structure of a cover letter.",
                welcome: "TTS: Hello, Future Professionals! It's Mr. D! Welcome to Your Future Calling! Have you ever thought about what you want to be when you grow up? Today, we are going to explore the world of work. We'll learn about different professions, the skills you need, and how to talk about your future possibilities. We will also learn how to give good advice to friends who are deciding on their careers. Let's get ready for the future!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of a school bell ringing and students chatting. Celine and Albert are walking to class.", 
            contextAudio: "audio/9-2-3/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Albert, have you thought about your [future](tooltip:future)? What do you [want to be](tooltip:want-to-be)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "I [might](tooltip:might) be an [engineer](tooltip:engineer). I like building things." 
                },
                { 
                    speaker: "Celine", 
                    text: "That sounds great! You [must](tooltip:must) be good at math." 
                },
                { 
                    speaker: "Albert", 
                    text: "Yes, I am. What about you?" 
                },
                { 
                    speaker: "Celine", 
                    text: "I [could](tooltip:could) become a [journalist](tooltip:journalist). I love writing." 
                },
                { 
                    speaker: "Albert", 
                    text: "You [should](tooltip:should) write for the school newspaper! It would be good [experience](tooltip:experience)." 
                },
                { 
                    speaker: "Celine", 
                    text: "That's a good idea. I [ought to](tooltip:ought-to) talk to the editor." 
                },
                { 
                    speaker: "Albert", 
                    text: "You [may](tooltip:may) need to write a [cover letter](tooltip:cover-letter) first." 
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
                    title: "Jobs & Professions",
                    audio: "TTS: Doctor. Nurse. Teacher. Engineer. Lawyer. Artist. Musician. Designer. Programmer. Scientist. Journalist. Chef. Mechanic. Veterinarian. Architect. Businessperson. Police Officer. Firefighter.",
                    items: [
                        { term: "Doctor", trans: "Médico(a)" },
                        { term: "Nurse", trans: "Enfermeiro(a)" },
                        { term: "Teacher", trans: "Professor(a)" },
                        { term: "Engineer", trans: "Engenheiro(a)" },
                        { term: "Lawyer", trans: "Advogado(a)" },
                        { term: "Artist", trans: "Artista" },
                        { term: "Musician", trans: "Músico(a)" },
                        { term: "Designer", trans: "Designer" },
                        { term: "Programmer", trans: "Programador(a)" },
                        { term: "Scientist", trans: "Cientista" },
                        { term: "Journalist", trans: "Jornalista" },
                        { term: "Chef", trans: "Chef / Cozinheiro(a)" },
                        { term: "Mechanic", trans: "Mecânico(a)" },
                        { term: "Veterinarian (Vet)", trans: "Veterinário(a)" },
                        { term: "Architect", trans: "Arquiteto(a)" },
                        { term: "Businessperson", trans: "Empresário(a)" },
                        { term: "Police Officer", trans: "Policial" },
                        { term: "Firefighter", trans: "Bombeiro(a)" }
                    ]
                },
                {
                    title: "Career & Work",
                    audio: "TTS: Career. Resume. CV. Cover Letter. Interview. Skill. Experience. Salary. Company. Apply. Employer. Employee.",
                    items: [
                        { term: "Career", trans: "Carreira" },
                        { term: "Resume / CV", trans: "Currículo" },
                        { term: "Cover Letter", trans: "Carta de Apresentação" },
                        { term: "Interview", trans: "Entrevista" },
                        { term: "Skill", trans: "Habilidade / Competência" },
                        { term: "Experience", trans: "Experiência" },
                        { term: "Salary", trans: "Salário" },
                        { term: "Company", trans: "Empresa" },
                        { term: "Apply", trans: "Candidatar-se" },
                        { term: "Employer", trans: "Empregador(a)" },
                        { term: "Employee", trans: "Empregado(a) / Funcionário(a)" }
                    ]
                },
                {
                    title: "Adjectives (Characteristics)",
                    audio: "TTS: Hard-working. Creative. Organized. Punctual. Responsible. Reliable. Communicative. Patient. Flexible. Independent. Team player. Confident. Ambitious. Polite.",
                    items: [
                        { term: "Hard-working", trans: "Trabalhador(a) / Esforçado(a)" },
                        { term: "Creative", trans: "Criativo(a)" },
                        { term: "Organized", trans: "Organizado(a)" },
                        { term: "Punctual", trans: "Pontual" },
                        { term: "Responsible", trans: "Responsável" },
                        { term: "Reliable", trans: "Confiável" },
                        { term: "Communicative", trans: "Comunicativo(a)" },
                        { term: "Patient", trans: "Paciente" },
                        { term: "Flexible", trans: "Flexível" },
                        { term: "Independent", trans: "Independente" },
                        { term: "Team player", trans: "Colaborador(a) / Bom de equipe" },
                        { term: "Confident", trans: "Confiante" },
                        { term: "Ambitious", trans: "Ambicioso(a)" },
                        { term: "Polite", trans: "Educado(a)" }
                    ]
                },
                {
                    title: "Modals",
                    audio: "TTS: May. Might. Could. Must. Can't. Should. Ought to.",
                    items: [
                        { term: "May", trans: "Pode / Talvez (Possibilidade)" },
                        { term: "Might", trans: "Poderia / Talvez (Possibilidade menor)" },
                        { term: "Could", trans: "Poderia (Possibilidade)" },
                        { term: "Must", trans: "Deve (Certeza lógica)" },
                        { term: "Can't", trans: "Não pode (Impossibilidade)" },
                        { term: "Should", trans: "Deveria (Conselho)" },
                        { term: "Ought to", trans: "Devia (Conselho formal)" }
                    ]
                }
            ],

            // 2B: Context Examples (Expanded & Grouped)
            exampleGroups: [
                {
                    title: "Jobs & Professions",
                    audio: "TTS: The doctor helps sick people. My teacher is very smart. An engineer builds bridges. The lawyer defends people in court. The artist paints beautiful pictures. The musician plays the guitar well. She designs fashionable clothes. The programmer writes code for the app. The scientist does experiments in the lab. The journalist interviews people for news. The chef cooks delicious meals. The mechanic fixed my car engine. The vet takes care of sick animals. The architect draws plans for buildings. The businessperson runs a big company. The police officer keeps the city safe. The firefighter saves people from fires.",
                    items: [
                        { term: "Doctor", sent: "The doctor helps sick people.", trans: "<span style='color:#0077b6'>O médico ajuda pessoas doentes.</span>" },
                        { term: "Nurse", sent: "The nurse cares for patients.", trans: "<span style='color:#0077b6'>O enfermeiro cuida dos pacientes.</span>" },
                        { term: "Teacher", sent: "My teacher is very smart.", trans: "<span style='color:#0077b6'>Meu professor é muito inteligente.</span>" },
                        { term: "Engineer", sent: "An engineer builds bridges.", trans: "<span style='color:#0077b6'>Um engenheiro constrói pontes.</span>" },
                        { term: "Lawyer", sent: "The lawyer defends people in court.", trans: "<span style='color:#0077b6'>O advogado defende pessoas no tribunal.</span>" },
                        { term: "Artist", sent: "The artist paints beautiful pictures.", trans: "<span style='color:#0077b6'>O artista pinta quadros bonitos.</span>" },
                        { term: "Musician", sent: "The musician plays the guitar well.", trans: "<span style='color:#0077b6'>O músico toca violão bem.</span>" },
                        { term: "Designer", sent: "She designs fashionable clothes.", trans: "<span style='color:#0077b6'>Ela desenha roupas da moda.</span>" },
                        { term: "Programmer", sent: "The programmer writes code for the app.", trans: "<span style='color:#0077b6'>O programador escreve código para o aplicativo.</span>" },
                        { term: "Scientist", sent: "The scientist does experiments in the lab.", trans: "<span style='color:#0077b6'>O cientista faz experimentos no laboratório.</span>" },
                        { term: "Journalist", sent: "The journalist interviews people for news.", trans: "<span style='color:#0077b6'>O jornalista entrevista pessoas para as notícias.</span>" },
                        { term: "Chef", sent: "The chef cooks delicious meals.", trans: "<span style='color:#0077b6'>O chef cozinha refeições deliciosas.</span>" },
                        { term: "Mechanic", sent: "The mechanic fixed my car engine.", trans: "<span style='color:#0077b6'>O mecânico consertou o motor do meu carro.</span>" },
                        { term: "Veterinarian", sent: "The vet takes care of sick animals.", trans: "<span style='color:#0077b6'>O veterinário cuida de animais doentes.</span>" },
                        { term: "Architect", sent: "The architect draws plans for buildings.", trans: "<span style='color:#0077b6'>O arquiteto desenha plantas para edifícios.</span>" },
                        { term: "Businessperson", sent: "The businessperson runs a big company.", trans: "<span style='color:#0077b6'>O empresário dirige uma grande empresa.</span>" },
                        { term: "Police Officer", sent: "The police officer keeps the city safe.", trans: "<span style='color:#0077b6'>O policial mantém a cidade segura.</span>" },
                        { term: "Firefighter", sent: "The firefighter saves people from fires.", trans: "<span style='color:#0077b6'>O bombeiro salva pessoas de incêndios.</span>" }
                    ]
                },
                {
                    title: "Career & Work",
                    audio: "TTS: Choosing a career is important. Send your resume to the company. I wrote a cover letter to explain my skills. I have a job interview today. Drawing is a useful skill. She has five years of experience. The job pays a high salary. He works for a tech company. Did you apply for the job? The employer hires new staff. The employee works hard every day.",
                    items: [
                        { term: "Career", sent: "Choosing a career is important.", trans: "<span style='color:#0077b6'>Escolher uma carreira é importante.</span>" },
                        { term: "Resume / CV", sent: "Send your resume to the company.", trans: "<span style='color:#0077b6'>Envie seu currículo para a empresa.</span>" },
                        { term: "Cover Letter", sent: "I wrote a cover letter to explain my skills.", trans: "<span style='color:#0077b6'>Escrevi uma carta de apresentação para explicar minhas habilidades.</span>" },
                        { term: "Interview", sent: "I have a job interview today.", trans: "<span style='color:#0077b6'>Tenho uma entrevista de emprego hoje.</span>" },
                        { term: "Skill", sent: "Drawing is a useful skill.", trans: "<span style='color:#0077b6'>Desenhar é uma habilidade útil.</span>" },
                        { term: "Experience", sent: "She has five years of experience.", trans: "<span style='color:#0077b6'>Ela tem cinco anos de experiência.</span>" },
                        { term: "Salary", sent: "The job pays a high salary.", trans: "<span style='color:#0077b6'>O emprego paga um salário alto.</span>" },
                        { term: "Company", sent: "He works for a tech company.", trans: "<span style='color:#0077b6'>Ele trabalha para uma empresa de tecnologia.</span>" },
                        { term: "Apply", sent: "Did you apply for the job?", trans: "<span style='color:#0077b6'>Você se candidatou ao emprego?</span>" },
                        { term: "Employer", sent: "The employer hires new staff.", trans: "<span style='color:#0077b6'>O empregador contrata novos funcionários.</span>" },
                        { term: "Employee", sent: "The employee works hard every day.", trans: "<span style='color:#0077b6'>O funcionário trabalha duro todos os dias.</span>" }
                    ]
                },
                {
                    title: "Adjectives",
                    audio: "TTS: She is very hard-working. Artists are usually creative. He keeps his desk organized. Always be punctual for work. Be responsible with your tasks. My friend is very reliable. She is very communicative and likes talking. Doctors need to be patient. My schedule is flexible. He likes working alone, he is independent. Employers look for a good team player. She felt confident during the interview. He is ambitious and wants to be a manager. Always be polite to customers.",
                    items: [
                        { term: "Hard-working", sent: "She is very hard-working.", trans: "<span style='color:#0077b6'>Ela é muito trabalhadora.</span>" },
                        { term: "Creative", sent: "Artists are usually creative.", trans: "<span style='color:#0077b6'>Artistas geralmente são criativos.</span>" },
                        { term: "Organized", sent: "He keeps his desk organized.", trans: "<span style='color:#0077b6'>Ele mantém a mesa dele organizada.</span>" },
                        { term: "Punctual", sent: "Always be punctual for work.", trans: "<span style='color:#0077b6'>Sempre seja pontual para o trabalho.</span>" },
                        { term: "Responsible", sent: "Be responsible with your tasks.", trans: "<span style='color:#0077b6'>Seja responsável com suas tarefas.</span>" },
                        { term: "Reliable", sent: "My friend is very reliable.", trans: "<span style='color:#0077b6'>Meu amigo é muito confiável.</span>" },
                        { term: "Communicative", sent: "She is very communicative.", trans: "<span style='color:#0077b6'>Ela é muito comunicativa.</span>" },
                        { term: "Patient", sent: "Doctors need to be patient.", trans: "<span style='color:#0077b6'>Médicos precisam ser pacientes.</span>" },
                        { term: "Flexible", sent: "My schedule is flexible.", trans: "<span style='color:#0077b6'>Meu horário é flexível.</span>" },
                        { term: "Independent", sent: "He likes working alone; he is independent.", trans: "<span style='color:#0077b6'>Ele gosta de trabalhar sozinho; ele é independente.</span>" },
                        { term: "Team player", sent: "Employers look for a good team player.", trans: "<span style='color:#0077b6'>Empregadores procuram alguém que saiba trabalhar em equipe.</span>" },
                        { term: "Confident", sent: "She felt confident during the interview.", trans: "<span style='color:#0077b6'>Ela se sentiu confiante durante a entrevista.</span>" },
                        { term: "Ambitious", sent: "He is ambitious and wants to be a manager.", trans: "<span style='color:#0077b6'>Ele é ambicioso e quer ser gerente.</span>" },
                        { term: "Polite", sent: "Always be polite to customers.", trans: "<span style='color:#0077b6'>Sempre seja educado com os clientes.</span>" }
                    ]
                },
                {
                    title: "Modals",
                    audio: "TTS: It may rain later. I might become a doctor. That could be true. He is wearing a uniform. He must be a policeman. She hates math. She can't be an accountant. You should study more. You ought to listen to your parents.",
                    items: [
                        { term: "May", sent: "It may rain later.", trans: "<span style='color:#0077b6'>Pode chover mais tarde.</span>" },
                        { term: "Might", sent: "I might become a doctor.", trans: "<span style='color:#0077b6'>Eu talvez me torne um médico.</span>" },
                        { term: "Could", sent: "That could be true.", trans: "<span style='color:#0077b6'>Isso poderia ser verdade.</span>" },
                        { term: "Must", sent: "He must be a policeman.", trans: "<span style='color:#0077b6'>Ele deve ser um policial.</span>" },
                        { term: "Can't", sent: "She can't be an accountant.", trans: "<span style='color:#0077b6'>Ela não pode ser contadora.</span>" },
                        { term: "Should", sent: "You should study more.", trans: "<span style='color:#0077b6'>Você deveria estudar mais.</span>" },
                        { term: "Ought to", sent: "You ought to listen to your parents.", trans: "<span style='color:#0077b6'>Você devia ouvir seus pais.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills
            drills: [
                // JOBS & PROFESSIONS (1-6)
                {
                    type: "mcq",
                    q: "Who designs buildings and supervises their construction?",
                    options: [
                        { t: "Mechanic", c: false },
                        { t: "Architect", c: true },
                        { t: "Chef", c: false },
                        { t: "Programmer", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Who is a professional cook in a restaurant or hotel?",
                    options: [
                        { t: "Nurse", c: false },
                        { t: "Scientist", c: false },
                        { t: "Chef", c: true },
                        { t: "Lawyer", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which professional is qualified to treat diseased or injured animals?",
                    options: [
                        { t: "Veterinarian", c: true },
                        { t: "Firefighter", c: false },
                        { t: "Journalist", c: false },
                        { t: "Designer", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Who repairs and maintains vehicle engines?",
                    options: [
                        { t: "Engineer", c: false },
                        { t: "Programmer", c: false },
                        { t: "Mechanic", c: true },
                        { t: "Businessperson", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Who writes computer programs and code?",
                    options: [
                        { t: "Teacher", c: false },
                        { t: "Artist", c: false },
                        { t: "Musician", c: false },
                        { t: "Programmer", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Who writes for newspapers or news websites?",
                    options: [
                        { t: "Journalist", c: true },
                        { t: "Doctor", c: false },
                        { t: "Architect", c: false },
                        { t: "Chef", c: false }
                    ]
                },

                // ADJECTIVES (7-12)
                {
                    type: "mcq",
                    q: "Someone who always arrives at the agreed time is:",
                    options: [
                        { t: "Creative", c: false },
                        { t: "Patient", c: false },
                        { t: "Punctual", c: true },
                        { t: "Flexible", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Someone who works well as a member of a group is a:",
                    options: [
                        { t: "Independent", c: false },
                        { t: "Team player", c: true },
                        { t: "Ambitious", c: false },
                        { t: "Polite", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Someone who is able to plan their activities efficiently is:",
                    options: [
                        { t: "Organized", c: true },
                        { t: "Communicative", c: false },
                        { t: "Hard-working", c: false },
                        { t: "Reliable", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A person who is consistently good in quality and can be trusted is:",
                    options: [
                        { t: "Independent", c: false },
                        { t: "Polite", c: false },
                        { t: "Confident", c: false },
                        { t: "Reliable", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Someone who works with energy and commitment is:",
                    options: [
                        { t: "Hard-working", c: true },
                        { t: "Flexible", c: false },
                        { t: "Creative", c: false },
                        { t: "Patient", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A person who is self-assured and feels sure of their abilities is:",
                    options: [
                        { t: "Ambitious", c: false },
                        { t: "Confident", c: true },
                        { t: "Punctual", c: false },
                        { t: "Independent", c: false }
                    ]
                },

                // CAREER & WORK (13-18)
                {
                    type: "mcq",
                    q: "What document lists your work history and education?",
                    options: [
                        { t: "Cover Letter", c: false },
                        { t: "Interview", c: false },
                        { t: "Resume / CV", c: true },
                        { t: "Salary", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "What do you call a formal meeting to see if you are right for a job?",
                    options: [
                        { t: "Company", c: false },
                        { t: "Interview", c: true },
                        { t: "Skill", c: false },
                        { t: "Apply", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The fixed regular payment you receive for your work is a:",
                    options: [
                        { t: "Salary", c: true },
                        { t: "Resume", c: false },
                        { t: "Career", c: false },
                        { t: "Experience", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A letter explaining why you are interested in a specific job is a:",
                    options: [
                        { t: "Contract", c: false },
                        { t: "Resume", c: false },
                        { t: "Cover Letter", c: true },
                        { t: "Skill", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The person or organization that hires and pays people is the:",
                    options: [
                        { t: "Employee", c: false },
                        { t: "Architect", c: false },
                        { t: "Skill", c: false },
                        { t: "Employer", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "To make a formal request for a job is to:",
                    options: [
                        { t: "Apply", c: true },
                        { t: "Review", c: false },
                        { t: "Design", c: false },
                        { t: "Nurse", c: false }
                    ]
                },

                // MODALS (19-24)
                {
                    type: "mcq",
                    q: "Possibility (perhaps 30%): 'I am not sure where he is. He _____ be in the library.'",
                    options: [
                        { t: "must", c: false },
                        { t: "can't", c: false },
                        { t: "might", c: true },
                        { t: "ought to", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Advice: 'You look very tired. You _____ sleep more.'",
                    options: [
                        { t: "can't", c: false },
                        { t: "should", c: true },
                        { t: "might", c: false },
                        { t: "may", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Deduction (almost 100% sure): 'He has a Ferrari. He _____ be very rich.'",
                    options: [
                        { t: "must", c: true },
                        { t: "might", c: false },
                        { t: "shouldn't", c: false },
                        { t: "might not", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Impossibility: 'That _____ be the new boss. He is only 15 years old!'",
                    options: [
                        { t: "must", c: false },
                        { t: "can't", c: true },
                        { t: "should", c: false },
                        { t: "might", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Formal Advice: 'You _____ research the company before the interview.'",
                    options: [
                        { t: "can't", c: false },
                        { t: "may", c: false },
                        { t: "ought to", c: true },
                        { t: "mustn't", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possibility (perhaps 50%): 'It is cloudy. It _____ rain later today.'",
                    options: [
                        { t: "may", c: true },
                        { t: "can't", c: false },
                        { t: "should", c: false },
                        { t: "must", c: false }
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
                    title: "Modals: Possibility & Deduction",
                    audio: "TTS: We use modals to say how sure we are about something. Must is for 100% deduction. May, might, and could are for possibility. Can't is for 100% impossibility. For example: He must be the boss. It could rain. That can't be true.",
                    explanation: "We use these modals to say how sure we are about something in the present or future.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos estes modais para dizer o quão certos estamos sobre algo no presente ou futuro.)</span>",
                    samples: [
                        { en: "<b>MUST</b> (100% sure): He must be the boss. He is wearing a suit.", pt: "<span style='color:#0077b6'>Ele deve ser o chefe. Ele está vestindo um terno.</span>" },
                        { en: "<b>MAY / MIGHT / COULD</b> (Possible): It could rain later.", pt: "<span style='color:#0077b6'>Poderia/Talvez chova mais tarde.</span>" },
                        { en: "<b>CAN'T</b> (100% sure negative): That can't be true! It's impossible.", pt: "<span style='color:#0077b6'>Isso não pode ser verdade! É impossível.</span>" }
                    ]
                },
                {
                    title: "Modals: Advice",
                    audio: "TTS: Use should and ought to to give recommendations or say what is the right thing to do. Should is common. Ought to is formal. For example: You should study more. They ought to be polite.",
                    explanation: "We use these to give recommendations or say what is the right thing to do.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos estes para dar recomendações ou dizer o que é a coisa certa a fazer.)</span>",
                    samples: [
                        { en: "<b>SHOULD</b> (Common): You should study more for the test.", pt: "<span style='color:#0077b6'>Você deveria estudar mais para o teste.</span>" },
                        { en: "<b>OUGHT TO</b> (Formal): We ought to save money.", pt: "<span style='color:#0077b6'>Nós devíamos economizar dinheiro.</span>" }
                    ]
                },
                {
                    title: "Adjective + Preposition",
                    audio: "TTS: To describe skills and feelings, we often use an adjective followed by a preposition. If a verb follows the preposition, it must end in I-N-G. For example: I am good at math. She is interested in learning English. He is afraid of failure.",
                    explanation: "To describe skills and feelings, we often use an adjective followed by a specific preposition. <b>Rule:</b> If a verb follows the preposition, it must end in <b>-ING</b>.<br><br><span style='color:#0077b6; font-style:italic;'>(Para descrever habilidades e sentimentos, usamos um adjetivo seguido de uma preposição específica. Se um verbo segue a preposição, ele deve terminar em -ING.)</span>",
                    samples: [
                        { en: "<b>Good at / Bad at:</b> I am good at math.", pt: "<span style='color:#0077b6'>Eu sou bom em matemática.</span>" },
                        { en: "<b>Interested in:</b> She is interested in learn<b>ing</b> English.", pt: "<span style='color:#0077b6'>Ela está interessada em aprender inglês.</span>" },
                        { en: "<b>Responsible for:</b> You are responsible for the team.", pt: "<span style='color:#0077b6'>Você é responsável pela equipe.</span>" },
                        { en: "<b>Afraid of:</b> He is afraid of failure.", pt: "<span style='color:#0077b6'>Ele tem medo do fracasso.</span>" }
                    ]
                },
                {
                    title: "Structure: Cover Letter",
                    audio: "TTS: A cover letter introduces you to an employer. The structure includes: One, Salutation. Two, The Opening, stating the job. Three, The Hook, explaining your skills. Four, The Closing. Five, Sign-off.",
                    explanation: "A cover letter introduces you to an employer. Here is the standard structure:<br><br><span style='color:#0077b6; font-style:italic;'>(Uma carta de apresentação apresenta você a um empregador. Aqui está a estrutura padrão:)</span>",
                    samples: [
                        { en: "<b>1. Salutation:</b> Dear Mr./Ms. [Name],", pt: "<span style='color:#0077b6'>Prezado Sr./Sra. [Nome],</span>" },
                        { en: "<b>2. Opening:</b> I am writing to apply for the position of...", pt: "<span style='color:#0077b6'>Estou escrevendo para me candidatar à posição de...</span>" },
                        { en: "<b>3. The Hook:</b> I am good at solving problems and have experience in...", pt: "<span style='color:#0077b6'>Eu sou bom em resolver problemas e tenho experiência em...</span>" },
                        { en: "<b>4. Closing:</b> I look forward to hearing from you.", pt: "<span style='color:#0077b6'>Aguardo seu retorno.</span>" }
                    ]
                }
            ],

            // 3B: Natural Examples (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Modals of Possibility & Deduction",
                    audio: "audio/9-2-3/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Look at that man in the white coat. He must be a doctor.", 
                            pt: "<span style='color:#0077b6'>Olhe aquele homem de jaleco branco. Ele deve ser um médico.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Or he might be a scientist. Or he could be a chef!", 
                            pt: "<span style='color:#0077b6'>Ou ele pode ser um cientista. Ou ele poderia ser um chef!</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "He can't be a chef. He is holding a stethoscope.", 
                            pt: "<span style='color:#0077b6'>Ele não pode ser um chef. Ele está segurando um estetoscópio.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Advice (Should / Ought to)",
                    audio: "audio/9-2-3/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "I have a job interview tomorrow. I am nervous.", 
                            pt: "<span style='color:#0077b6'>Tenho uma entrevista de emprego amanhã. Estou nervoso.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "You should relax. You ought to sleep early tonight.", 
                            pt: "<span style='color:#0077b6'>Você deveria relaxar. Você devia dormir cedo hoje à noite.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "What should I wear?", 
                            pt: "<span style='color:#0077b6'>O que eu deveria vestir?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "You should wear a shirt and a tie.", 
                            pt: "<span style='color:#0077b6'>Você deveria vestir uma camisa e uma gravata.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Adjective + Preposition (Skills)",
                    audio: "audio/9-2-3/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Interviewer", 
                            text: "Tell me about your skills.", 
                            pt: "<span style='color:#0077b6'>Fale-me sobre suas habilidades.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Well, I am good at solving problems. I am also interested in technology.", 
                            pt: "<span style='color:#0077b6'>Bem, sou bom em resolver problemas. Também sou interessado em tecnologia.</span>" 
                        },
                        { 
                            speaker: "Interviewer", 
                            text: "Are you good at working in a team?", 
                            pt: "<span style='color:#0077b6'>Você é bom em trabalhar em equipe?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes. But I am bad at public speaking.", 
                            pt: "<span style='color:#0077b6'>Sim. Mas sou ruim em falar em público.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ (Expanded to 24 Questions)
            grammarDrills: [
                // MODALS: DEDUCTION & POSSIBILITY (1-8)
                {
                    type: "mcq",
                    q: "Deduction: 'He is wearing a white coat and working in a hospital. He ____ be a doctor.'",
                    options: [
                        { t: "might", c: false },
                        { t: "must", c: true },
                        { t: "can't", c: false },
                        { t: "should", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Impossibility: 'Look at his ID! He is only 12. He ____ be a university student.'",
                    options: [
                        { t: "must", c: false },
                        { t: "should", c: false },
                        { t: "can't", c: true },
                        { t: "might", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Weak Possibility (30%): 'I don't know where Sarah is. She ____ be at the office, but I'm not sure.'",
                    options: [
                        { t: "might", c: true },
                        { t: "must", c: false },
                        { t: "can't", c: false },
                        { t: "ought to", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Theoretical Possibility: 'This is a great startup idea. It ____ change the industry.'",
                    options: [
                        { t: "must", c: false },
                        { t: "can't", c: false },
                        { t: "could", c: true },
                        { t: "ought to", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Stronger Possibility (50%): 'The sky is grey. It ____ rain this afternoon.'",
                    options: [
                        { t: "can't", c: false },
                        { t: "may", c: true },
                        { t: "must", c: false },
                        { t: "should", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Deduction: 'She hasn't eaten all day. She ____ be starving.'",
                    options: [
                        { t: "can't", c: false },
                        { t: "should", c: false },
                        { t: "might", c: false },
                        { t: "must", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Impossibility: 'The car is still here. They ____ have left yet.'",
                    options: [
                        { t: "can't", c: true },
                        { t: "must", c: false },
                        { t: "might", c: false },
                        { t: "should", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possibility: 'Be careful with that glass! It ____ break.'",
                    options: [
                        { t: "can't", c: false },
                        { t: "could", c: true },
                        { t: "must", c: false },
                        { t: "should", c: false }
                    ]
                },

                // MODALS: ADVICE (9-12)
                {
                    type: "mcq",
                    q: "Advice: 'If you want to get that job, you ____ update your resume.'",
                    options: [
                        { t: "should", c: true },
                        { t: "can't", c: false },
                        { t: "must not", c: false },
                        { t: "might", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Formal Advice: 'Employees ____ be punctual for the meeting.'",
                    options: [
                        { t: "may", c: false },
                        { t: "ought to", c: true },
                        { t: "might", c: false },
                        { t: "can't", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Negative Advice: 'You ____ quit your current job until you find a new one.'",
                    options: [
                        { t: "shouldn't", c: true },
                        { t: "can't", c: false },
                        { t: "might not", c: false },
                        { t: "must", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Meaning: Which sentence has the same meaning as 'You should be polite'?",
                    options: [
                        { t: "You can be polite.", c: false },
                        { t: "You must be polite.", c: false },
                        { t: "You ought to be polite.", c: true },
                        { t: "You might be polite.", c: false }
                    ]
                },

                // ADJECTIVE + PREPOSITION (13-20)
                {
                    type: "mcq",
                    q: "Ability: 'Celine is very good ____ writing articles.'",
                    options: [
                        { t: "in", c: false },
                        { t: "for", c: false },
                        { t: "at", c: true },
                        { t: "with", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Interest: 'Are you interested ____ joining the school newspaper?'",
                    options: [
                        { t: "at", c: false },
                        { t: "in", c: true },
                        { t: "about", c: false },
                        { t: "for", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Duty: 'The manager is responsible ____ hiring new employees.'",
                    options: [
                        { t: "for", c: true },
                        { t: "with", c: false },
                        { t: "at", c: false },
                        { t: "to", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Fear: 'He is afraid ____ losing his job during the crisis.'",
                    options: [
                        { t: "with", c: false },
                        { t: "about", c: false },
                        { t: "of", c: true },
                        { t: "at", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Enthusiasm: 'They are very excited ____ the new project.'",
                    options: [
                        { t: "about", c: true },
                        { t: "at", c: false },
                        { t: "in", c: false },
                        { t: "for", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Exhaustion: 'She is tired ____ waiting for a response from the company.'",
                    options: [
                        { t: "with", c: false },
                        { t: "of", c: true },
                        { t: "at", c: false },
                        { t: "for", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Reputation: 'This company is famous ____ its innovation.'",
                    options: [
                        { t: "at", c: false },
                        { t: "in", c: false },
                        { t: "for", c: true },
                        { t: "about", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Preparation: 'I am not ready ____ the interview yet.'",
                    options: [
                        { t: "at", c: false },
                        { t: "for", c: true },
                        { t: "in", c: false },
                        { t: "of", c: false }
                    ]
                },

                // VERBS AFTER PREPOSITIONS & COVER LETTER (21-24)
                {
                    type: "mcq",
                    q: "Verb Form: 'He is bad at ____ (organize) his time.'",
                    options: [
                        { t: "organize", c: false },
                        { t: "organized", c: false },
                        { t: "organizes", c: false },
                        { t: "organizing", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Verb Form: 'She is interested in ____ (become) a scientist.'",
                    options: [
                        { t: "become", c: false },
                        { t: "becoming", c: true },
                        { t: "to become", c: false },
                        { t: "becomes", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Cover Letter: Which phrase is used for the sign-off?",
                    options: [
                        { t: "Dear Mr. Smith,", c: false },
                        { t: "I am writing to apply...", c: false },
                        { t: "Sincerely, John Doe.", c: true },
                        { t: "I am good at coding.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Cover Letter: Which phrase is used for the closing?",
                    options: [
                        { t: "I look forward to hearing from you.", c: true },
                        { t: "Dear Ms. Jones,", c: false },
                        { t: "I am responsible for the team.", c: false },
                        { t: "I am interested in AI.", c: false }
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
                    text: "I might become an engineer.<br><small style='color:#0077b6'>(Eu talvez me torne um engenheiro.)</small>", 
                    audio: "TTS: I might become an engineer.", 
                    arrow: "↘" 
                },
                { 
                    text: "You should study harder.<br><small style='color:#0077b6'>(Você deveria estudar mais.)</small>", 
                    audio: "TTS: You should study harder.", 
                    arrow: "↘" 
                },
                { 
                    text: "He must be the manager.<br><small style='color:#0077b6'>(Ele deve ser o gerente.)</small>", 
                    audio: "TTS: He must be the manager.", 
                    arrow: "↘" 
                },
                { 
                    text: "She is good at drawing.<br><small style='color:#0077b6'>(Ela é boa em desenhar.)</small>", 
                    audio: "TTS: She is good at drawing.", 
                    arrow: "↘" 
                },
                { 
                    text: "That can't be true!<br><small style='color:#0077b6'>(Isso não pode ser verdade!)</small>", 
                    audio: "TTS: That can't be true!", 
                    arrow: "↗" 
                },
                { 
                    text: "We are interested in technology.<br><small style='color:#0077b6'>(Nós estamos interessados em tecnologia.)</small>", 
                    audio: "TTS: We are interested in technology.", 
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
                    instruction: "Listen to Albert talking about his skills. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre suas habilidades. Digite as palavras que faltam.)</small>",
                    audio: "TTS: I am good at math and physics. I think I might become an architect in the future. I need to study a lot.",
                    text: "I am [good at] math and physics. I think I [might] become an [architect] in the future. I need to [study] a lot."
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation about a job and choose the correct options.<br><small style='color:#0077b6'>(Ouça a conversa sobre um emprego e escolha as opções corretas.)</small>",
                    audio: "audio/9-2-3/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: Look at this [job | school] offer. They need a writer.", a: "job" },
                        { q: "Albert: You [should | can't] apply, Celine. You are great at writing.", a: "should" },
                        { q: "Celine: I [might | must] do it.", a: "might" },
                        { q: "Celine: I need to write a [cover letter | resume] first.", a: "cover letter" }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the description and choose the correct profession.<br><small style='color:#0077b6'>(Ouça a descrição e escolha a profissão correta.)</small>",
                    audio: "TTS: I work in a kitchen. I cook delicious meals for customers. I must be very organized and clean.",
                    options: [
                        { t: "A doctor", c: false },
                        { t: "A chef", c: true },
                        { t: "A mechanic", c: false },
                        { t: "A teacher", c: false }
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
                    title: "Narration: The Job Interview",
                    audio: "TTS: Yesterday, Sarah had a job interview at a big tech company. She was nervous, but she prepared well. She wore formal clothes to look professional. The interviewer asked about her skills. Sarah said she is good at coding and works well in a team. She also mentioned she is interested in AI. The interviewer seemed impressed. Sarah thinks she might get the job. || audio/9-2-3/p6_text1.mp3",
                    body: "Yesterday, Sarah had a job interview at a big tech company. She was nervous, but she prepared well. She wore formal clothes to look professional. The interviewer asked about her skills. Sarah said she is good at coding and works well in a team. She also mentioned she is interested in AI. The interviewer seemed impressed. Sarah thinks she might get the job.",
                    questions: [
                        { 
                            q: "Where was the interview?", 
                            options: [ 
                                {t: "At a hospital", c: false}, 
                                {t: "At a tech company", c: true}, 
                                {t: "At a school", c: false},
                                {t: "At a restaurant", c: false}
                            ] 
                        },
                        { 
                            q: "What is Sarah good at?", 
                            options: [ 
                                {t: "Cooking", c: false}, 
                                {t: "Drawing", c: false}, 
                                {t: "Coding", c: true},
                                {t: "Driving", c: false}
                            ] 
                        },
                        { 
                            q: "What does Sarah think about the result?", 
                            options: [ 
                                {t: "She failed", c: false}, 
                                {t: "She won't get the job", c: false}, 
                                {t: "She might get the job", c: true},
                                {t: "She doesn't want the job", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: Future Plans",
                    audio: "audio/9-2-3/p6_text2.mp3",
                    body: "<b>Albert:</b> What do you want to be, Celine?<br><b>Celine:</b> I am not sure yet. I might be a teacher because I like helping people learn.<br><b>Albert:</b> That is a good choice. You are very patient.<br><b>Celine:</b> Thanks. What about you?<br><b>Albert:</b> I could be a pilot. I love traveling and planes.<br><b>Celine:</b> Wow! But you must have perfect vision for that.<br><b>Albert:</b> I know. I ought to check my eyes soon.",
                    questions: [
                        { 
                            q: "Why might Celine be a teacher?", 
                            options: [ 
                                {t: "She likes traveling", c: false}, 
                                {t: "She likes helping people learn", c: true}, 
                                {t: "She likes math", c: false},
                                {t: "She likes planes", c: false}
                            ] 
                        },
                        { 
                            q: "What does Albert want to be?", 
                            options: [ 
                                {t: "A doctor", c: false}, 
                                {t: "A pilot", c: true}, 
                                {t: "A teacher", c: false},
                                {t: "A chef", c: false}
                            ] 
                        },
                        { 
                            q: "What does Albert need to do to reach his goal?", 
                            options: [ 
                                {t: "Buy a plane", c: false}, 
                                {t: "Study history", c: false}, 
                                {t: "Check his eyes", c: true},
                                {t: "Learn to cook", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: The Ideal Employee",
                    audio: "TTS: Companies look for specific qualities in an employee. They want someone who is reliable and punctual. You must arrive on time every day. It is also important to be a team player. You should be able to work well with others. Being communicative is a big plus. If you are organized and creative, you might get a promotion quickly. Employers value hard work. || audio/9-2-3/p6_text3.mp3",
                    body: "Companies look for specific qualities in an employee. They want someone who is reliable and punctual. You must arrive on time every day. It is also important to be a team player. You should be able to work well with others. Being communicative is a big plus. If you are organized and creative, you might get a promotion quickly. Employers value hard work.",
                    questions: [
                        { 
                            q: "What does 'punctual' mean in this context?", 
                            options: [ 
                                {t: "Working hard", c: false}, 
                                {t: "Arriving on time", c: true}, 
                                {t: "Being creative", c: false},
                                {t: "Talking a lot", c: false}
                            ] 
                        },
                        { 
                            q: "What is a 'team player'?", 
                            options: [ 
                                {t: "Someone who works alone", c: false}, 
                                {t: "Someone who plays sports", c: false}, 
                                {t: "Someone who works well with others", c: true},
                                {t: "Someone who is the boss", c: false}
                            ] 
                        },
                        { 
                            q: "What might happen if you are organized and creative?", 
                            options: [ 
                                {t: "You might get fired", c: false}, 
                                {t: "You might get a promotion", c: true}, 
                                {t: "You might be late", c: false},
                                {t: "You might leave", c: false}
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
                // Drill 1: Matching (Adjective + Preposition)
                {
                    type: "matching",
                    instruction: "Match the adjective to the correct preposition.<br><small style='color:#0077b6'>(Combine o adjetivo com a preposição correta.)</small>",
                    pairs: [
                        { left: "Good", right: "at", val: "1" },
                        { left: "Interested", right: "in", val: "2" },
                        { left: "Responsible", right: "for", val: "3" },
                        { left: "Afraid", right: "of", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Unscramble)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "be / He / boss / must / the / .",
                    correct: "He must be the boss ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "study / should / more / You / .",
                    correct: "You should study more ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "at / good / am / I / math / .",
                    correct: "I am good at math ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "might / rain / It / later / .",
                    correct: "It might rain later ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Doctor", c: false },
                        { t: "Nurse", c: false },
                        { t: "Hospital", c: true },
                        { t: "Engineer", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "May", c: false },
                        { t: "Can", c: false },
                        { t: "Should", c: false },
                        { t: "Job", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Creative", c: false },
                        { t: "Punctual", c: false },
                        { t: "Responsible", c: false },
                        { t: "Salary", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Resume", c: false },
                        { t: "Interview", c: false },
                        { t: "Cover Letter", c: false },
                        { t: "Chef", c: true }
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Choose the correct modal verb to complete the sentence.<br><small style='color:#0077b6'>(Escolha o verbo modal correto para completar a frase.)</small>",
                    questions: [
                        { q: "You look sick. You [should | must | can't | might] see a doctor.", a: "should" },
                        { q: "He is driving a Ferrari. He [must | can't | should | might] be rich.", a: "must" },
                        { q: "I am not sure. I [might | must | can't | should] go to the party.", a: "might" },
                        { q: "That [can't | must | should | might] be true! It's impossible.", a: "can't" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Now it's your turn! Write about your dream job. <br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Agora é a sua vez! Escreva sobre o emprego dos seus sonhos.)</span></small>",
            example: "\"I want to be a graphic designer because I am interested in art. I am good at drawing and using computers. I should study design at college to learn more.\" <br><br><small><span style='color:#0077b6'>(\"Eu quero ser um designer gráfico porque me interesso por arte. Sou bom em desenhar e usar computadores. Devo estudar design na faculdade para aprender mais.\")</span></small>",
            prompts: [
                "What job do you want? (I want to be a...) <br><small><span style='color:#0077b6'>(Qual trabalho você quer?)</span></small>",
                "Why? (Because I am interested in...) <br><small><span style='color:#0077b6'>(Por quê?)</span></small>",
                "What skills are you good at? (I am good at...) <br><small><span style='color:#0077b6'>(Em quais habilidades você é bom?)</span></small>",
                "What should you do to get this job? (I should study...) <br><small><span style='color:#0077b6'>(O que você deveria fazer para conseguir esse emprego?)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Jobs & Professions)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                { term: "Doctor", definition: "A qualified practitioner of medicine.", defTrans: "Médico(a)", example: "The doctor works at the hospital.", audioFront: "TTS: Doctor", audioBack: "TTS: The doctor works at the hospital." },
                { term: "Nurse", definition: "A person trained to care for the sick.", defTrans: "Enfermeiro(a)", example: "The nurse helps the patients.", audioFront: "TTS: Nurse", audioBack: "TTS: The nurse helps the patients." },
                { term: "Teacher", definition: "A person who teaches in a school.", defTrans: "Professor(a)", example: "My teacher is very smart.", audioFront: "TTS: Teacher", audioBack: "TTS: My teacher is very smart." },
                { term: "Engineer", definition: "A person who designs or builds machines.", defTrans: "Engenheiro(a)", example: "An engineer designs bridges.", audioFront: "TTS: Engineer", audioBack: "TTS: An engineer designs bridges." },
                { term: "Lawyer", definition: "A person who practices law.", defTrans: "Advogado(a)", example: "The lawyer knows the law.", audioFront: "TTS: Lawyer", audioBack: "TTS: The lawyer knows the law." },
                { term: "Artist", definition: "A person who produces paintings or drawings.", defTrans: "Artista", example: "The artist paints beautiful pictures.", audioFront: "TTS: Artist", audioBack: "TTS: The artist paints beautiful pictures." },
                { term: "Musician", definition: "A person who plays a musical instrument.", defTrans: "Músico(a)", example: "He is a talented musician.", audioFront: "TTS: Musician", audioBack: "TTS: He is a talented musician." },
                { term: "Designer", definition: "A person who plans the look of things.", defTrans: "Designer", example: "She is a fashion designer.", audioFront: "TTS: Designer", audioBack: "TTS: She is a fashion designer." },
                { term: "Programmer", definition: "A person who writes computer code.", defTrans: "Programador(a)", example: "A programmer writes code.", audioFront: "TTS: Programmer", audioBack: "TTS: A programmer writes code." },
                { term: "Scientist", definition: "A person studying natural sciences.", defTrans: "Cientista", example: "The scientist works in a lab.", audioFront: "TTS: Scientist", audioBack: "TTS: The scientist works in a lab." },
                { term: "Journalist", definition: "A person who writes for newspapers.", defTrans: "Jornalista", example: "The journalist writes news.", audioFront: "TTS: Journalist", audioBack: "TTS: The journalist writes news." },
                { term: "Chef", definition: "A professional cook.", defTrans: "Chef / Cozinheiro(a)", example: "The chef cooks delicious food.", audioFront: "TTS: Chef", audioBack: "TTS: The chef cooks delicious food." },
                { term: "Mechanic", definition: "A person who repairs vehicle engines.", defTrans: "Mecânico(a)", example: "The mechanic fixed my car.", audioFront: "TTS: Mechanic", audioBack: "TTS: The mechanic fixed my car." },
                { term: "Veterinarian", definition: "A person who treats animals.", defTrans: "Veterinário(a)", example: "The vet treats sick animals.", audioFront: "TTS: Veterinarian", audioBack: "TTS: The vet treats sick animals." },
                { term: "Architect", definition: "A person who designs buildings.", defTrans: "Arquiteto(a)", example: "The architect drew the house plans.", audioFront: "TTS: Architect", audioBack: "TTS: The architect drew the house plans." },
                { term: "Businessperson", definition: "A person who works in commerce.", defTrans: "Empresário(a)", example: "She is a successful businessperson.", audioFront: "TTS: Businessperson", audioBack: "TTS: She is a successful businessperson." },
                { term: "Police Officer", definition: "A member of a police force.", defTrans: "Policial", example: "The police officer protects us.", audioFront: "TTS: Police Officer", audioBack: "TTS: The police officer protects us." },
                { term: "Firefighter", definition: "A person whose job is to extinguish fires.", defTrans: "Bombeiro(a)", example: "The firefighter put out the fire.", audioFront: "TTS: Firefighter", audioBack: "TTS: The firefighter put out the fire." },
                // --- Topic 2: Career & Work Vocabulary ---
                { term: "Career", definition: "An occupation undertaken for a significant period.", defTrans: "Carreira", example: "Choose a career you love.", audioFront: "TTS: Career", audioBack: "TTS: Choose a career you love." },
                { term: "Resume / CV", definition: "A document that lists your work history.", defTrans: "Currículo", example: "Send your resume to the company.", audioFront: "TTS: Resume or CV", audioBack: "TTS: Send your resume to the company." },
                { term: "Cover Letter", definition: "A letter sent with a resume explaining your interest.", defTrans: "Carta de Apresentação", example: "Write a good cover letter.", audioFront: "TTS: Cover Letter", audioBack: "TTS: Write a good cover letter." },
                { term: "Interview", definition: "A formal meeting to assess a candidate for a job.", defTrans: "Entrevista", example: "I have a job interview tomorrow.", audioFront: "TTS: Interview", audioBack: "TTS: I have a job interview tomorrow." },
                { term: "Skill", definition: "The ability to do something well.", defTrans: "Habilidade / Competência", example: "Computer programming is a useful skill.", audioFront: "TTS: Skill", audioBack: "TTS: Computer programming is a useful skill." },
                { term: "Experience", definition: "Knowledge or skill that comes from doing things.", defTrans: "Experiência", example: "Do you have work experience?", audioFront: "TTS: Experience", audioBack: "TTS: Do you have work experience?" },
                { term: "Salary", definition: "A fixed regular payment for work.", defTrans: "Salário", example: "The job pays a good salary.", audioFront: "TTS: Salary", audioBack: "TTS: The job pays a good salary." },
                { term: "Company", definition: "A commercial business.", defTrans: "Empresa", example: "He works for a big company.", audioFront: "TTS: Company", audioBack: "TTS: He works for a big company." },
                { term: "Apply", definition: "To make a formal application or request.", defTrans: "Candidatar-se", example: "I will apply for the job.", audioFront: "TTS: Apply", audioBack: "TTS: I will apply for the job." },
                { term: "Employer", definition: "A person or organization that employs people.", defTrans: "Empregador(a)", example: "The employer hires people.", audioFront: "TTS: Employer", audioBack: "TTS: The employer hires people." },
                { term: "Employee", definition: "A person employed for wages.", defTrans: "Empregado(a) / Funcionário(a)", example: "She is a good employee.", audioFront: "TTS: Employee", audioBack: "TTS: She is a good employee." },

                // --- Topic 3: Characteristics (Adjectives) ---
                { term: "Hard-working", definition: "Tending to work with energy and commitment.", defTrans: "Trabalhador(a) / Esforçado(a)", example: "He is a hard-working student.", audioFront: "TTS: Hard-working", audioBack: "TTS: He is a hard-working student." },
                { term: "Creative", definition: "Relating to or involving imagination.", defTrans: "Criativo(a)", example: "You need to be creative to draw.", audioFront: "TTS: Creative", audioBack: "TTS: You need to be creative to draw." },
                { term: "Organized", definition: "Able to plan one's activities efficiently.", defTrans: "Organizado(a)", example: "Keep your desk organized.", audioFront: "TTS: Organized", audioBack: "TTS: Keep your desk organized." },
                { term: "Punctual", definition: "Doing something at the agreed time; on time.", defTrans: "Pontual", example: "Always be punctual for meetings.", audioFront: "TTS: Punctual", audioBack: "TTS: Always be punctual for meetings." },
                { term: "Responsible", definition: "Having an obligation or control over something.", defTrans: "Responsável", example: "She is responsible for the project.", audioFront: "TTS: Responsible", audioBack: "TTS: She is responsible for the project." },
                { term: "Reliable", definition: "Consistently good in quality; able to be trusted.", defTrans: "Confiável", example: "My friend is very reliable.", audioFront: "TTS: Reliable", audioBack: "TTS: My friend is very reliable." },
                { term: "Communicative", definition: "Willing or able to talk or impart information.", defTrans: "Comunicativo(a)", example: "A teacher must be communicative.", audioFront: "TTS: Communicative", audioBack: "TTS: A teacher must be communicative." },
                { term: "Patient", definition: "Able to accept delays or problems without becoming annoyed.", defTrans: "Paciente", example: "Doctors need to be patient.", audioFront: "TTS: Patient", audioBack: "TTS: Doctors need to be patient." },
                { term: "Flexible", definition: "Ready and able to change to adapt to circumstances.", defTrans: "Flexível", example: "Be flexible with your time.", audioFront: "TTS: Flexible", audioBack: "TTS: Be flexible with your time." },
                { term: "Independent", definition: "Capable of thinking or acting for oneself.", defTrans: "Independente", example: "He likes to be independent.", audioFront: "TTS: Independent", audioBack: "TTS: He likes to be independent." },
                { term: "Team player", definition: "A person who works well as a member of a group.", defTrans: "Colaborador(a) / Bom de equipe", example: "Employers like a team player.", audioFront: "TTS: Team player", audioBack: "TTS: Employers like a team player." },
                { term: "Confident", definition: "Feeling or showing confidence in oneself.", defTrans: "Confiante", example: "Be confident in the interview.", audioFront: "TTS: Confident", audioBack: "TTS: Be confident in the interview." },
                { term: "Ambitious", definition: "Having a strong desire and determination to succeed.", defTrans: "Ambicioso(a)", example: "She is ambitious and wants to be boss.", audioFront: "TTS: Ambitious", audioBack: "TTS: She is ambitious and wants to be boss." },
                { term: "Polite", definition: "Showing behavior that is respectful of others.", defTrans: "Educado(a)", example: "Always be polite to customers.", audioFront: "TTS: Polite", audioBack: "TTS: Always be polite to customers." },
                // --- Topic 4: Grammar Points - Modals ---
                { term: "Must (Deduction)", definition: "Used to express a logical deduction or strong belief.", defTrans: "Deve (Certeza Lógica)", example: "He must be rich.", audioFront: "TTS: Must for deduction", audioBack: "TTS: He must be rich." },
                { term: "May / Might", definition: "Used to express possibility (50% or 30%).", defTrans: "Pode / Talvez", example: "It might rain today.", audioFront: "TTS: May or Might", audioBack: "TTS: It might rain today." },
                { term: "Could (Possibility)", definition: "Used to indicate a general or theoretical possibility.", defTrans: "Poderia / Talvez", example: "That could be true.", audioFront: "TTS: Could for possibility", audioBack: "TTS: That could be true." },
                { term: "Can't (Impossibility)", definition: "Used to express a logical impossibility.", defTrans: "Não pode (Impossível)", example: "That can't be the answer.", audioFront: "TTS: Can't for impossibility", audioBack: "TTS: That can't be the answer." },
                { term: "Should (Advice)", definition: "Used to give advice or make recommendations.", defTrans: "Deveria (Conselho)", example: "You should sleep more.", audioFront: "TTS: Should for advice", audioBack: "TTS: You should sleep more." },
                { term: "Ought to (Advice)", definition: "Used to give advice (more formal than should).", defTrans: "Devia (Conselho Formal)", example: "You ought to study.", audioFront: "TTS: Ought to", audioBack: "TTS: You ought to study." },

                // --- Topic 5: Grammar Points - Adjectives + Prepositions ---
                { term: "Good at", definition: "Capable or skillful in a particular activity.", defTrans: "Bom em (Habilidade)", example: "I am good at math.", audioFront: "TTS: Good at", audioBack: "TTS: I am good at math." },
                { term: "Bad at", definition: "Lacking skill in a particular activity.", defTrans: "Ruim em", example: "He is bad at cooking.", audioFront: "TTS: Bad at", audioBack: "TTS: He is bad at cooking." },
                { term: "Interested in", definition: "Showing curiosity or concern about something.", defTrans: "Interessado em", example: "She is interested in art.", audioFront: "TTS: Interested in", audioBack: "TTS: She is interested in art." },
                { term: "Responsible for", definition: "Having control over or care for.", defTrans: "Responsável por", example: "I am responsible for the dog.", audioFront: "TTS: Responsible for", audioBack: "TTS: I am responsible for the dog." },
                { term: "Afraid of", definition: "Feeling fear or anxiety.", defTrans: "Com medo de", example: "He is afraid of spiders.", audioFront: "TTS: Afraid of", audioBack: "TTS: He is afraid of spiders." },
                { term: "Proud of", definition: "Feeling deep pleasure or satisfaction as a result of achievements.", defTrans: "Orgulhoso de", example: "I am proud of you.", audioFront: "TTS: Proud of", audioBack: "TTS: I am proud of you." },
                { term: "Excited about", definition: "Very enthusiastic and eager.", defTrans: "Animado com", example: "We are excited about the trip.", audioFront: "TTS: Excited about", audioBack: "TTS: We are excited about the trip." },
                { term: "Tired of", definition: "Bored or impatient with.", defTrans: "Cansado de", example: "I am tired of waiting.", audioFront: "TTS: Tired of", audioBack: "TTS: I am tired of waiting." },
                { term: "Famous for", definition: "Known about by many people because of something.", defTrans: "Famoso por", example: "Brazil is famous for soccer.", audioFront: "TTS: Famous for", audioBack: "TTS: Brazil is famous for soccer." },
                { term: "Ready for", definition: "Fully prepared for.", defTrans: "Pronto para", example: "Are you ready for the test?", audioFront: "TTS: Ready for", audioBack: "TTS: Are you ready for the test?" }
            ]
        }
    ], // Closes steps array

    // ======================================================
    // GLOSSARY (Complete & Paginated)
    // ======================================================
    glossary: [
        // PAGE 1: CONTEXT (Step 1 Tooltips)
        { topic: "Context", term: "future", definition: "The time or a period of time following the moment of speaking or writing.", translation: "Futuro" },
        { topic: "Context", term: "want-to-be", definition: "To have a desire to have a specific profession or state in the future.", translation: "Querer ser" },
        { topic: "Context", term: "experience", definition: "Knowledge or skill that comes from having done certain things.", translation: "Experiência" },
        { topic: "Context", term: "cover-letter", definition: "A letter sent with a resume to introduce yourself to an employer.", translation: "Carta de apresentação" },
        { topic: "Context", term: "journalist", definition: "A person who writes for newspapers, magazines, or news websites.", translation: "Jornalista" },
        { topic: "Context", term: "engineer", definition: "A person who designs, builds, or maintains engines and machines.", translation: "Engenheiro(a)" },

        // PAGE 2: PROFESSIONS (A-L)
        { topic: "Professions (A-L)", term: "Architect", definition: "A person who designs buildings and supervises their construction.", translation: "Arquiteto(a)" },
        { topic: "Professions (A-L)", term: "Artist", definition: "A person who produces paintings or drawings as a profession.", translation: "Artista" },
        { topic: "Professions (A-L)", term: "Chef", definition: "A professional cook, typically the chief cook in a restaurant.", translation: "Chef / Cozinheiro(a)" },
        { topic: "Professions (A-L)", term: "Designer", definition: "A person who plans the form or look of something before it is made.", translation: "Designer" },
        { topic: "Professions (A-L)", term: "Doctor", definition: "A qualified practitioner of medicine; a physician.", translation: "Médico(a)" },
        { topic: "Professions (A-L)", term: "Lawyer", definition: "A person who practices or studies law; an attorney.", translation: "Advogado(a)" },

        // PAGE 3: PROFESSIONS (M-Z)
        { topic: "Professions (M-Z)", term: "Mechanic", definition: "A skilled worker who repairs and maintains vehicle engines.", translation: "Mecânico(a)" },
        { topic: "Professions (M-Z)", term: "Musician", definition: "A person who plays a musical instrument or is musically talented.", translation: "Músico(a)" },
        { topic: "Professions (M-Z)", term: "Nurse", definition: "A person trained to care for the sick, especially in a hospital.", translation: "Enfermeiro(a)" },
        { topic: "Professions (M-Z)", term: "Programmer", definition: "A person who writes computer programs or code.", translation: "Programador(a)" },
        { topic: "Professions (M-Z)", term: "Scientist", definition: "A person studying or having expert knowledge of natural sciences.", translation: "Cientista" },
        { topic: "Professions (M-Z)", term: "Veterinarian", definition: "A person qualified to treat diseased or injured animals.", translation: "Veterinário(a)" },

        // PAGE 4: CAREER & WORK
        { topic: "Career & Work", term: "career", definition: "An occupation undertaken for a significant period of a person's life.", translation: "Carreira" },
        { topic: "Career & Work", term: "resume", definition: "A brief account of a person’s education and qualifications.", translation: "Currículo" },
        { topic: "Career & Work", term: "interview", definition: "A meeting of people face to face to assess a candidate for a job.", translation: "Entrevista" },
        { topic: "Career & Work", term: "skill", definition: "The ability to do something well; expertise.", translation: "Habilidade" },
        { topic: "Career & Work", term: "salary", definition: "A fixed regular payment, typically paid on a monthly basis.", translation: "Salário" },
        { topic: "Career & Work", term: "employer", definition: "A person or organization that employs people.", translation: "Empregador(a)" },
        { topic: "Career & Work", term: "employee", definition: "A person employed for wages or salary.", translation: "Empregado(a)" },

        // PAGE 5: ADJECTIVES
        { topic: "Adjectives", term: "hard-working", definition: "Tending to work with energy and commitment; diligent.", translation: "Trabalhador(a)" },
        { topic: "Adjectives", term: "organized", definition: "Able to plan one's activities efficiently.", translation: "Organizado(a)" },
        { topic: "Adjectives", term: "punctual", definition: "Happening or doing something at the agreed or proper time.", translation: "Pontual" },
        { topic: "Adjectives", term: "reliable", definition: "Consistently good in quality or performance; able to be trusted.", translation: "Confiável" },
        { topic: "Adjectives", term: "team-player", definition: "A person who works well as a member of a group or team.", translation: "Bom de equipe" },
        { topic: "Adjectives", term: "confident", definition: "Feeling or showing confidence in oneself; self-assured.", translation: "Confiante" },

        // PAGE 6: MODALS
        { topic: "Modals", term: "must", definition: "Used to express a logical deduction or strong belief.", translation: "Deve (certeza)" },
        { topic: "Modals", term: "may", definition: "Used to express possibility (approx. 50% chance).", translation: "Pode / Talvez" },
        { topic: "Modals", term: "might", definition: "Used to express possibility (approx. 30% chance).", translation: "Poderia / Talvez" },
        { topic: "Modals", term: "could", definition: "Used to indicate a general or theoretical possibility.", translation: "Poderia" },
        { topic: "Modals", term: "can't", definition: "Used to express a logical impossibility.", translation: "Não pode" },
        { topic: "Modals", term: "should", definition: "Used to give advice or make recommendations.", translation: "Deveria" },
        { topic: "Modals", term: "ought-to", definition: "Used to give advice (formal version of should).", translation: "Devia" },

        // PAGE 7: PHRASES (ADJ + PREP)
        { topic: "Phrases", term: "good-at", definition: "Capable or skillful in a particular activity.", translation: "Bom em" },
        { topic: "Phrases", term: "bad-at", definition: "Lacking skill in a particular activity.", translation: "Ruim em" },
        { topic: "Phrases", term: "interested-in", definition: "Showing curiosity or concern about something.", translation: "Interessado em" },
        { topic: "Phrases", term: "responsible-for", definition: "Having control over or care for someone or something.", translation: "Responsável por" },
        { topic: "Phrases", term: "afraid-of", definition: "Feeling fear or anxiety about something.", translation: "Com medo de" },
        { topic: "Phrases", term: "famous-for", definition: "Known about by many people because of a quality or achievement.", translation: "Famoso por" },

        // PAGE 8: COVER LETTER
        { topic: "Cover Letter", term: "salutation", definition: "A gesture of greeting, typically at the start of a letter.", translation: "Saudação" },
        { topic: "Cover Letter", term: "hook", definition: "The part of the letter that grabs the employer's attention.", translation: "O atrativo (gancho)" },
        { topic: "Cover Letter", term: "closing", definition: "The final part of a letter before the signature.", translation: "Encerramento" },
        { topic: "Cover Letter", term: "sign-off", definition: "The words used to end a letter (e.g., Sincerely).", translation: "Despedida" }
    ]
});