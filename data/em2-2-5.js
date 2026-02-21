/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em2-2-5", 
    grade: "High School 2nd Grade",       
    bimester: "2",   
    chapter: "5",    
    chapterTitle: "Winds of Change: Reporting on a Fast-Paced World", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss the impacts of globalization and technological advances.<br>• Use Reported Speech to share statements and questions from others.<br>• Master time and place shifts in indirect speech.<br>• Identify and discuss modern issues like the digital divide and information overload.<br>• Use linking words for condition and purpose.",
            welcome: "Hello, world-watchers! I'm Mr. D!<br>Welcome to the \"Winds of Change\"! Today, we are opening the door to our fast-paced, interconnected world. Have you noticed how technology develops rapidly? Or how a pandemic can change how the entire world interacts? We are going to learn how to report these big changes using Reported Speech. You’ll learn to tell others what experts claimed or what your friends asked. Get ready to navigate social media, global markets, and the future of society. Let's get the report started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss the impacts of globalization and technological advances. Use Reported Speech to share statements and questions from others. Master time and place shifts in indirect speech. Identify and discuss modern issues like the digital divide and information overload. Use linking words for condition and purpose.",
                welcome: "TTS: Hello, world-watchers! I'm Mr. D! Welcome to the Winds of Change! Today, we are opening the door to our fast-paced, interconnected world. Have you noticed how technology develops rapidly? Or how a pandemic can change how the entire world interacts? We are going to learn how to report these big changes using Reported Speech. You’ll learn to tell others what experts claimed or what your friends asked. Get ready to navigate social media, global markets, and the future of society. Let's get the report started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Albert and Celine are in the school cafeteria. Celine is showing Albert a video of a lecture by an expert on globalization. Albert looks impressed by the data on the screen.", 
            contextAudio: "audio/em2-2-5/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Albert, I watched this interview [last night](tooltip:last-night). The expert [said](tooltip:say) that [globalization](tooltip:globalization) had dramatically changed the world [economy](tooltip:economy)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Interesting! Did he [mention](tooltip:mention) any [drawbacks](tooltip:drawbacks)? I read an [article](tooltip:article) which [claimed](tooltip:claim) that [inequality](tooltip:inequality) was [increasing](tooltip:increase) in some [societies](tooltip:society)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Yes, he did. He [explained](tooltip:explain) that the [digital divide](tooltip:digital-divide) was still a big [challenge](tooltip:challenge). Then, a student [asked](tooltip:ask) if [international](tooltip:international) cooperation would [slow down](tooltip:slow-down) because of the [pandemic](tooltip:pandemic)." 
                },
                { 
                    speaker: "Albert", 
                    text: "That's a great question. What did he say in response?" 
                },
                { 
                    speaker: "Celine", 
                    text: "He [replied](tooltip:reply) that [interconnectedness](tooltip:interconnectedness) was likely [permanent](tooltip:permanent). He [warned](tooltip:warn) us that we [needed](tooltip:need) to improve how we [regulate](tooltip:regulate) technology [then](tooltip:then)." 
                },
                { 
                    speaker: "Albert", 
                    text: "I [worry](tooltip:worry) about [fake news](tooltip:fake-news) and [addiction](tooltip:addiction) to [devices](tooltip:device). My teacher [told](tooltip:tell) us [last week](tooltip:last-week) that [information overload](tooltip:information-overload) was becoming a serious [issue](tooltip:issue)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Exactly! He [asked](tooltip:ask) us why technology caused [isolation](tooltip:isolation) sometimes. He [suggested](tooltip:suggest) that we should [focus](tooltip:focus) more on real-world connections." 
                },
                { 
                    speaker: "Albert", 
                    text: "I [agree](tooltip:agree). We must use online platforms [wisely](tooltip:wisely) so that we don't lose our [privacy](tooltip:privacy)." 
                },
                { 
                    speaker: "Celine", 
                    text: "True. Our teacher [said](tooltip:say) we would [discuss](tooltip:discuss) the future of [work](tooltip:work) [the following week](tooltip:the-following-week). Are you ready?" 
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
                    title: "Verbs (Communication & Change)",
                    audio: "TTS: Admit. Affect. Agree. Ask. Be. Become. Believe. Bring. Change. Check. Claim. Connect. Consider. Continue. Create. Decrease. Develop. Discuss. End. Expect. Explain. Feel. Focus. Get. Grow. Happen. Have. Help. Hit. Impact. Increase. Interact. Interview. Lead to. Learn. Look into. Mention. Must. Need. Predict. Question. Read. Recall. Rely. Report. Research. Say. See. Share. Show. Slow down. Spread. Start. Study. Suggest. Talk. Tell. Think. Use. Warn. Worry.",
                    items: [
                        { term: "Admit", trans: "Admitir" },
                        { term: "Affect", trans: "Afetar" },
                        { term: "Agree", trans: "Concordar" },
                        { term: "Ask", trans: "Perguntar" },
                        { term: "Be", trans: "Ser / Estar" },
                        { term: "Become", trans: "Tornar-se" },
                        { term: "Believe", trans: "Acreditar" },
                        { term: "Bring", trans: "Trazer" },
                        { term: "Change", trans: "Mudar" },
                        { term: "Check", trans: "Checar / Verificar" },
                        { term: "Claim", trans: "Alegar / Afirmar" },
                        { term: "Connect", trans: "Conectar" },
                        { term: "Consider", trans: "Considerar" },
                        { term: "Continue", trans: "Continuar" },
                        { term: "Create", trans: "Criar" },
                        { term: "Decrease", trans: "Diminuir" },
                        { term: "Develop", trans: "Desenvolver" },
                        { term: "Discuss", trans: "Discutir" },
                        { term: "End", trans: "Terminar" },
                        { term: "Expect", trans: "Esperar (expectativa)" },
                        { term: "Explain", trans: "Explicar" },
                        { term: "Feel", trans: "Sentir" },
                        { term: "Focus", trans: "Focar" },
                        { term: "Get", trans: "Conseguir / Obter" },
                        { term: "Grow", trans: "Crescer" },
                        { term: "Happen", trans: "Acontecer" },
                        { term: "Have", trans: "Ter" },
                        { term: "Help", trans: "Ajudar" },
                        { term: "Hit", trans: "Atingir / Bater" },
                        { term: "Impact", trans: "Impactar" },
                        { term: "Increase", trans: "Aumentar" },
                        { term: "Interact", trans: "Interagir" },
                        { term: "Interview", trans: "Entrevistar" },
                        { term: "Lead to", trans: "Levar a" },
                        { term: "Learn", trans: "Aprender" },
                        { term: "Look into", trans: "Investigar / Olhar para" },
                        { term: "Mention", trans: "Mencionar" },
                        { term: "Must", trans: "Dever (obrigação)" },
                        { term: "Need", trans: "Precisar" },
                        { term: "Predict", trans: "Prever" },
                        { term: "Question", trans: "Questionar" },
                        { term: "Read", trans: "Ler" },
                        { term: "Recall", trans: "Recordar" },
                        { term: "Rely", trans: "Confiar / Depender" },
                        { term: "Report", trans: "Relatar / Reportar" },
                        { term: "Research", trans: "Pesquisar" },
                        { term: "Say", trans: "Dizer" },
                        { term: "See", trans: "Ver" },
                        { term: "Share", trans: "Compartilhar" },
                        { term: "Show", trans: "Mostrar" },
                        { term: "Slow down", trans: "Desacelerar" },
                        { term: "Spread", trans: "Espalhar" },
                        { term: "Start", trans: "Começar" },
                        { term: "Study", trans: "Estudar" },
                        { term: "Suggest", trans: "Sugerir" },
                        { term: "Talk", trans: "Falar / Conversar" },
                        { term: "Tell", trans: "Contar / Dizer para alguém" },
                        { term: "Think", trans: "Pensar" },
                        { term: "Use", trans: "Usar" },
                        { term: "Warn", trans: "Avisar / Alertar" },
                        { term: "Worry", trans: "Preocupar-se" }
                    ]
                },
                {
                    title: "World & Globalization",
                    audio: "TTS: Globalization. Global. International. Worldwide. Interconnectedness. Border. Exchange. Market. Company. Corporation. Economy. Growth. Development. Future. Society. Culture. Influence.",
                    items: [
                        { term: "Globalization", trans: "Globalização" },
                        { term: "Global", trans: "Global" },
                        { term: "International", trans: "Internacional" },
                        { term: "Worldwide", trans: "Mundial(mente)" },
                        { term: "Interconnectedness", trans: "Interconectividade" },
                        { term: "Border", trans: "Fronteira" },
                        { term: "Exchange", trans: "Troca / Intercâmbio" },
                        { term: "Market", trans: "Mercado" },
                        { term: "Company / Corporation", trans: "Empresa / Corporação" },
                        { term: "Economy", trans: "Economia" },
                        { term: "Growth", trans: "Crescimento" },
                        { term: "Development", trans: "Desenvolvimento" },
                        { term: "Future", trans: "Futuro" },
                        { term: "Society", trans: "Sociedade" },
                        { term: "Culture", trans: "Cultura" },
                        { term: "Influence", trans: "Influência" }
                    ]
                },
                {
                    title: "Technology & Issues",
                    audio: "TTS: Technology. Digital. Online. Internet. Device. Smartphone. Computer. App. Social Media. Information. Problem. Issue. Challenge. Solution. Pandemic. Virus. Addiction. Screen time. Information overload. Fake News. Misinformation. Privacy concerns. Cyberbullying. Isolation. Distraction. Dependence. Digital divide.",
                    items: [
                        { term: "Technology", trans: "Tecnologia" },
                        { term: "Digital", trans: "Digital" },
                        { term: "Online", trans: "Online" },
                        { term: "Internet", trans: "Internet" },
                        { term: "Device", trans: "Dispositivo / Aparelho" },
                        { term: "Smartphone", trans: "Smartphone" },
                        { term: "Computer", trans: "Computador" },
                        { term: "App", trans: "Aplicativo" },
                        { term: "Social Media", trans: "Mídia social" },
                        { term: "Information", trans: "Informação" },
                        { term: "Problem / Issue", trans: "Problema / Questão" },
                        { term: "Challenge", trans: "Desafio" },
                        { term: "Solution", trans: "Solução" },
                        { term: "Pandemic", trans: "Pandemia" },
                        { term: "Virus", trans: "Vírus" },
                        { term: "Addiction", trans: "Vício" },
                        { term: "Screen time", trans: "Tempo de tela" },
                        { term: "Information overload", trans: "Sobrecarga de informação" },
                        { term: "Fake News", trans: "Notícias falsas" },
                        { term: "Misinformation", trans: "Desinformação" },
                        { term: "Privacy concerns", trans: "Preocupações com privacidade" },
                        { term: "Cyberbullying", trans: "Cyberbullying" },
                        { term: "Isolation", trans: "Isolamento" },
                        { term: "Distraction", trans: "Distração" },
                        { term: "Dependence", trans: "Dependência" },
                        { term: "Digital divide", trans: "Exclusão digital" }
                    ]
                }
            ], // This closes the areas array for Step 2

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Verbs (Examples A-Z)",
                    audio: "TTS: He admitted that technology was addictive. How does the internet affect your study? I agree that we need more privacy. Celine asked if I was online. Globalization is a complex process. Remote work is becoming common. Experts believe the economy will grow. Innovation brings many benefits. The world changes every day. Always check your sources. Some articles claim that AI is dangerous. The internet connects everyone worldwide. We must consider the drawbacks. Tech growth will continue. New apps create new habits. The digital divide must decrease. Engineers develop new devices. Let's discuss privacy. When did the lockdown end? We expect a better future. Can you explain this issue? I feel overwhelmed by the news. Focus on the solution. How do you get reliable information? The global market is growing. Fast changes happen in society. Every corporation has a website. Technology helps medicine. The crisis hit the economy hard. The virus impacted global travel. Screen time increased lately. Students interact on social media. Reporters interview scientists. Misinformation can lead to isolation. We learn about culture online. Police look into cyberbullying. He mentioned the pandemic. We must be careful with fake news. People need a stable internet. Can we predict the next trend? Don't be afraid to question the news. I read about globalization. I recall a time without smartphones. We rely on digital communication. Journalists report worldwide events. Scientists research the virus. What did the expert say? I can see the digital divide here. Share the solution with us. Data shows that addiction is rising. Globalization didn't slow down. Fake news spreads fast. The meeting starts now. You should study economy. I suggest a digital detox. We talk about privacy. Tell me the truth about the issue. I think the future is digital. Which app do you use? She warned us about the drawbacks. Don't worry about the challenge.",
                    items: [
                        { term: "Admit", sent: "He admitted that technology was addictive.", trans: "<span style='color:#0077b6'>Ele admitiu que a tecnologia viciava.</span>" },
                        { term: "Affect", sent: "How does the internet affect your study?", trans: "<span style='color:#0077b6'>Como a internet afeta seu estudo?</span>" },
                        { term: "Agree", sent: "I agree that we need more privacy.", trans: "<span style='color:#0077b6'>Concordo que precisamos de mais privacidade.</span>" },
                        { term: "Ask", sent: "Celine asked if I was online.", trans: "<span style='color:#0077b6'>Celine perguntou se eu estava online.</span>" },
                        { term: "Be", sent: "Globalization is a complex process.", trans: "<span style='color:#0077b6'>A globalização é um processo complexo.</span>" },
                        { term: "Become", sent: "Remote work is becoming common.", trans: "<span style='color:#0077b6'>O trabalho remoto está se tornando comum.</span>" },
                        { term: "Believe", sent: "Experts believe the economy will grow.", trans: "<span style='color:#0077b6'>Especialistas acreditam que a economia crescerá.</span>" },
                        { term: "Bring", sent: "Innovation brings many benefits.", trans: "<span style='color:#0077b6'>A inovação traz muitos benefícios.</span>" },
                        { term: "Change", sent: "The world changes every day.", trans: "<span style='color:#0077b6'>O mundo muda todos os dias.</span>" },
                        { term: "Check", sent: "Always check your sources.", trans: "<span style='color:#0077b6'>Sempre verifique suas fontes.</span>" },
                        { term: "Claim", sent: "Some articles claim that AI is dangerous.", trans: "<span style='color:#0077b6'>Alguns artigos afirmam que a IA é perigosa.</span>" },
                        { term: "Connect", sent: "The internet connects everyone worldwide.", trans: "<span style='color:#0077b6'>A internet conecta todos mundialmente.</span>" },
                        { term: "Consider", sent: "We must consider the drawbacks.", trans: "<span style='color:#0077b6'>Devemos considerar as desvantagens.</span>" },
                        { term: "Continue", sent: "Tech growth will continue.", trans: "<span style='color:#0077b6'>O crescimento tecnológico continuará.</span>" },
                        { term: "Create", sent: "New apps create new habits.", trans: "<span style='color:#0077b6'>Novos apps criam novos hábitos.</span>" },
                        { term: "Decrease", sent: "The digital divide must decrease.", trans: "<span style='color:#0077b6'>A exclusão digital deve diminuir.</span>" },
                        { term: "Develop", sent: "Engineers develop new devices.", trans: "<span style='color:#0077b6'>Engenheiros desenvolvem novos dispositivos.</span>" },
                        { term: "Discuss", sent: "Let's discuss privacy.", trans: "<span style='color:#0077b6'>Vamos discutir privacidade.</span>" },
                        { term: "End", sent: "When did the lockdown end?", trans: "<span style='color:#0077b6'>Quando terminou o confinamento?</span>" },
                        { term: "Expect", sent: "We expect a better future.", trans: "<span style='color:#0077b6'>Esperamos um futuro melhor.</span>" },
                        { term: "Explain", sent: "Can you explain this issue?", trans: "<span style='color:#0077b6'>Pode explicar esta questão?</span>" },
                        { term: "Feel", sent: "I feel overwhelmed by the news.", trans: "<span style='color:#0077b6'>Sinto-me sobrecarregado pelas notícias.</span>" },
                        { term: "Focus", sent: "Focus on the solution.", trans: "<span style='color:#0077b6'>Foque na solução.</span>" },
                        { term: "Get", sent: "How do you get reliable information?", trans: "<span style='color:#0077b6'>Como você consegue informação confiável?</span>" },
                        { term: "Grow", sent: "The global market is growing.", trans: "<span style='color:#0077b6'>O mercado global está crescendo.</span>" },
                        { term: "Happen", sent: "Fast changes happen in society.", trans: "<span style='color:#0077b6'>Mudanças rápidas acontecem na sociedade.</span>" },
                        { term: "Have", sent: "Every corporation has a website.", trans: "<span style='color:#0077b6'>Toda corporação tem um site.</span>" },
                        { term: "Help", sent: "Technology helps medicine.", trans: "<span style='color:#0077b6'>A tecnologia ajuda a medicina.</span>" },
                        { term: "Hit", sent: "The crisis hit the economy hard.", trans: "<span style='color:#0077b6'>A crise atingiu a economia com força.</span>" },
                        { term: "Impact", sent: "The virus impacted global travel.", trans: "<span style='color:#0077b6'>O vírus impactou as viagens globais.</span>" },
                        { term: "Increase", sent: "Screen time increased lately.", trans: "<span style='color:#0077b6'>O tempo de tela aumentou ultimamente.</span>" },
                        { term: "Interact", sent: "Students interact on social media.", trans: "<span style='color:#0077b6'>Estudantes interagem nas mídias sociais.</span>" },
                        { term: "Interview", sent: "Reporters interview scientists.", trans: "<span style='color:#0077b6'>Repórteres entrevistam cientistas.</span>" },
                        { term: "Lead to", sent: "Misinformation can lead to isolation.", trans: "<span style='color:#0077b6'>A desinformação pode levar ao isolamento.</span>" },
                        { term: "Learn", sent: "We learn about culture online.", trans: "<span style='color:#0077b6'>Aprendemos sobre cultura online.</span>" },
                        { term: "Look into", sent: "Police look into cyberbullying.", trans: "<span style='color:#0077b6'>A polícia investiga o cyberbullying.</span>" },
                        { term: "Mention", sent: "He mentioned the pandemic.", trans: "<span style='color:#0077b6'>Ele mencionou a pandemia.</span>" },
                        { term: "Must", sent: "We must be careful with fake news.", trans: "<span style='color:#0077b6'>Devemos ser cuidadosos com notícias falsas.</span>" },
                        { term: "Need", sent: "People need a stable internet.", trans: "<span style='color:#0077b6'>As pessoas precisam de uma internet estável.</span>" },
                        { term: "Predict", sent: "Can we predict the next trend?", trans: "<span style='color:#0077b6'>Podemos prever a próxima tendência?</span>" },
                        { term: "Question", sent: "Don't be afraid to question the news.", trans: "<span style='color:#0077b6'>Não tenha medo de questionar as notícias.</span>" },
                        { term: "Read", sent: "I read about globalization.", trans: "<span style='color:#0077b6'>Eu li sobre globalização.</span>" },
                        { term: "Recall", sent: "I recall a time without smartphones.", trans: "<span style='color:#0077b6'>Eu recordo de um tempo sem smartphones.</span>" },
                        { term: "Rely", sent: "We rely on digital communication.", trans: "<span style='color:#0077b6'>Confiamos na comunicação digital.</span>" },
                        { term: "Report", sent: "Journalists report worldwide events.", trans: "<span style='color:#0077b6'>Jornalistas relatam eventos mundiais.</span>" },
                        { term: "Research", sent: "Scientists research the virus.", trans: "<span style='color:#0077b6'>Cientistas pesquisam o vírus.</span>" },
                        { term: "Say", sent: "What did the expert say?", trans: "<span style='color:#0077b6'>O que o especialista disse?</span>" },
                        { term: "See", sent: "I can see the digital divide here.", trans: "<span style='color:#0077b6'>Consigo ver a exclusão digital aqui.</span>" },
                        { term: "Share", sent: "Share the solution with us.", trans: "<span style='color:#0077b6'>Compartilhe a solução conosco.</span>" },
                        { term: "Show", sent: "Data shows that addiction is rising.", trans: "<span style='color:#0077b6'>Dados mostram que o vício está aumentando.</span>" },
                        { term: "Slow down", sent: "Globalization didn't slow down.", trans: "<span style='color:#0077b6'>A globalização não desacelerou.</span>" },
                        { term: "Spread", sent: "Fake news spreads fast.", trans: "<span style='color:#0077b6'>Notícias falsas se espalham rápido.</span>" },
                        { term: "Start", sent: "The meeting starts now.", trans: "<span style='color:#0077b6'>A reunião começa agora.</span>" },
                        { term: "Study", sent: "You should study economy.", trans: "<span style='color:#0077b6'>Você deveria estudar economia.</span>" },
                        { term: "Suggest", sent: "I suggest a digital detox.", trans: "<span style='color:#0077b6'>Sugiro um detox digital.</span>" },
                        { term: "Talk", sent: "We talk about privacy.", trans: "<span style='color:#0077b6'>Falamos sobre privacidade.</span>" },
                        { term: "Tell", sent: "Tell me the truth about the issue.", trans: "<span style='color:#0077b6'>Conte-me a verdade sobre a questão.</span>" },
                        { term: "Think", sent: "I think the future is digital.", trans: "<span style='color:#0077b6'>Acho que o futuro é digital.</span>" },
                        { term: "Use", sent: "Which app do you use?", trans: "<span style='color:#0077b6'>Qual app você usa?</span>" },
                        { term: "Warn", sent: "She warned us about the drawbacks.", trans: "<span style='color:#0077b6'>Ela nos alertou sobre as desvantagens.</span>" },
                        { term: "Worry", sent: "Don't worry about the challenge.", trans: "<span style='color:#0077b6'>Não se preocupe com o desafio.</span>" }
                    ]
                },
                {
                    title: "World & Globalization",
                    audio: "TTS: Globalization connects cultures around the world. We live in a global village today. International trade has increased significantly. The news spread worldwide in minutes. Technology increases the interconnectedness of our lives. Products cross every national border. Cultural exchange is a major benefit of travel. The global market is very volatile right now. That company is a huge multinational corporation. The world economy is changing fast. Economic growth is essential for development. We need sustainable development for the planet. The future of work will be mostly digital. Modern society relies on fast communication. We must respect every local culture. Social media has a huge influence on teenagers.",
                    items: [
                        { term: "Globalization", sent: "Globalization connects cultures around the world.", trans: "<span style='color:#0077b6'>A globalização conecta culturas ao redor do mundo.</span>" },
                        { term: "Global", sent: "We live in a global village today.", trans: "<span style='color:#0077b6'>Vivemos em uma aldeia global hoje.</span>" },
                        { term: "International", sent: "International trade has increased significantly.", trans: "<span style='color:#0077b6'>O comércio internacional aumentou significativamente.</span>" },
                        { term: "Worldwide", sent: "The news spread worldwide in minutes.", trans: "<span style='color:#0077b6'>As notícias se espalharam pelo mundo todo em minutos.</span>" },
                        { term: "Interconnectedness", sent: "Technology increases the interconnectedness of our lives.", trans: "<span style='color:#0077b6'>A tecnologia aumenta a interconectividade de nossas vidas.</span>" },
                        { term: "Border", sent: "Products cross every national border.", trans: "<span style='color:#0077b6'>Produtos cruzam todas as fronteiras nacionais.</span>" },
                        { term: "Exchange", sent: "Cultural exchange is a major benefit of travel.", trans: "<span style='color:#0077b6'>O intercâmbio cultural é um grande benefício das viagens.</span>" },
                        { term: "Market", sent: "The global market is very volatile right now.", trans: "<span style='color:#0077b6'>O mercado global está muito volátil agora.</span>" },
                        { term: "Company / Corporation", sent: "That company is a huge multinational corporation.", trans: "<span style='color:#0077b6'>Aquela empresa é uma enorme corporação multinacional.</span>" },
                        { term: "Economy", sent: "The world economy is changing fast.", trans: "<span style='color:#0077b6'>A economia mundial está mudando rápido.</span>" },
                        { term: "Growth", sent: "Economic growth is essential for development.", trans: "<span style='color:#0077b6'>O crescimento econômico é essencial para o desenvolvimento.</span>" },
                        { term: "Development", sent: "We need sustainable development for the planet.", trans: "<span style='color:#0077b6'>Precisamos de desenvolvimento sustentável para o planeta.</span>" },
                        { term: "Future", sent: "The future of work will be mostly digital.", trans: "<span style='color:#0077b6'>O futuro do trabalho será majoritariamente digital.</span>" },
                        { term: "Society", sent: "Modern society relies on fast communication.", trans: "<span style='color:#0077b6'>A sociedade moderna depende de comunicação rápida.</span>" },
                        { term: "Culture", sent: "We must respect every local culture.", trans: "<span style='color:#0077b6'>Devemos respeitar cada cultura local.</span>" },
                        { term: "Influence", sent: "Social media has a huge influence on teenagers.", trans: "<span style='color:#0077b6'>As redes sociais têm uma enorme influência nos adolescentes.</span>" }
                    ]
                },
                {
                    title: "Technology & Issues",
                    audio: "TTS: New technology improves our daily life. We use digital tools to study every day. Most classes moved online recently. The internet connects people everywhere. Every electronic device needs a battery. My smartphone is my main communication tool. He uses a computer for his research. Download the new app to stay updated. Social media is a powerful platform. We have access to too much information. This is a major technical problem. The digital divide is a big challenge. We need to find a creative solution. The pandemic affected global travel. The virus spread quickly through the city. Phone addiction is a real issue. You should limit your screen time. Too many emails cause information overload. Fake news spreads very fast online. Misinformation can be very dangerous. Apps often have privacy concerns. We must stop cyberbullying immediately. Technology can sometimes cause isolation. Constant notifications are a distraction. We have a growing dependence on technology. The digital divide is very unfair.",
                    items: [
                        { term: "Technology", sent: "New technology improves our daily life.", trans: "<span style='color:#0077b6'>A nova tecnologia melhora nossa vida diária.</span>" },
                        { term: "Digital", sent: "We use digital tools to study every day.", trans: "<span style='color:#0077b6'>Usamos ferramentas digitais para estudar todos os dias.</span>" },
                        { term: "Online", sent: "Most classes moved online recently.", trans: "<span style='color:#0077b6'>A maioria das aulas passou a ser online recentemente.</span>" },
                        { term: "Internet", sent: "The internet connects people everywhere.", trans: "<span style='color:#0077b6'>A internet conecta pessoas em todos os lugares.</span>" },
                        { term: "Device", sent: "Every electronic device needs a battery.", trans: "<span style='color:#0077b6'>Todo dispositivo eletrônico precisa de bateria.</span>" },
                        { term: "Smartphone", sent: "My smartphone is my main communication tool.", trans: "<span style='color:#0077b6'>Meu smartphone é minha principal ferramenta de comunicação.</span>" },
                        { term: "Computer", sent: "He uses a computer for his research.", trans: "<span style='color:#0077b6'>Ele usa um computador para sua pesquisa.</span>" },
                        { term: "App", sent: "Download the new app to stay updated.", trans: "<span style='color:#0077b6'>Baixe o novo aplicativo para ficar atualizado.</span>" },
                        { term: "Social Media", sent: "Social media is a powerful platform.", trans: "<span style='color:#0077b6'>As redes sociais são uma plataforma poderosa.</span>" },
                        { term: "Information", sent: "We have access to too much information.", trans: "<span style='color:#0077b6'>Temos acesso a informação demais.</span>" },
                        { term: "Problem / Issue", sent: "This is a major technical problem.", trans: "<span style='color:#0077b6'>Este é um grande problema técnico.</span>" },
                        { term: "Challenge", sent: "The digital divide is a big challenge.", trans: "<span style='color:#0077b6'>A exclusão digital é um grande desafio.</span>" },
                        { term: "Solution", sent: "We need to find a creative solution.", trans: "<span style='color:#0077b6'>Precisamos encontrar uma solução criativa.</span>" },
                        { term: "Pandemic", sent: "The pandemic affected global travel.", trans: "<span style='color:#0077b6'>A pandemia afetou as viagens globais.</span>" },
                        { term: "Virus", sent: "The virus spread quickly through the city.", trans: "<span style='color:#0077b6'>O vírus se espalhou rapidamente pela cidade.</span>" },
                        { term: "Addiction", sent: "Phone addiction is a real issue.", trans: "<span style='color:#0077b6'>O vício em celular é um problema real.</span>" },
                        { term: "Screen time", sent: "You should limit your screen time.", trans: "<span style='color:#0077b6'>Você deve limitar seu tempo de tela.</span>" },
                        { term: "Information overload", sent: "Too many emails cause information overload.", trans: "<span style='color:#0077b6'>Muitos e-mails causam sobrecarga de informação.</span>" },
                        { term: "Fake News", sent: "Fake news spreads very fast online.", trans: "<span style='color:#0077b6'>Notícias falsas se espalham muito rápido online.</span>" },
                        { term: "Misinformation", sent: "Misinformation can be very dangerous.", trans: "<span style='color:#0077b6'>A desinformação pode ser muito perigosa.</span>" },
                        { term: "Privacy concerns", sent: "Apps often have privacy concerns.", trans: "<span style='color:#0077b6'>Aplicativos costumam ter preocupações com a privacidade.</span>" },
                        { term: "Cyberbullying", sent: "We must stop cyberbullying immediately.", trans: "<span style='color:#0077b6'>Devemos parar o cyberbullying imediatamente.</span>" },
                        { term: "Isolation", sent: "Technology can sometimes cause isolation.", trans: "<span style='color:#0077b6'>A tecnologia às vezes pode causar isolamento.</span>" },
                        { term: "Distraction", sent: "Constant notifications are a distraction.", trans: "<span style='color:#0077b6'>Notificações constantes são uma distração.</span>" },
                        { term: "Dependence", sent: "We have a growing dependence on technology.", trans: "<span style='color:#0077b6'>Temos uma dependência crescente da tecnologia.</span>" },
                        { term: "Digital divide", sent: "The digital divide is very unfair.", trans: "<span style='color:#0077b6'>A exclusão digital é muito injusta.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (Expanded to 30 items)
            drills: [
                {
                    type: "mcq",
                    q: "The expert _______ that globalization had changed the world economy.",
                    options: [
                        {t: "said", c: true}, {t: "interacted", c: false}, {t: "decreased", c: false}, {t: "hit", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "How does the internet _______ your daily study habits?",
                    options: [
                        {t: "rely", c: false}, {t: "mention", c: false}, {t: "affect", c: true}, {t: "claim", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I _______ with the teacher; we need to use technology wisely.",
                    options: [
                        {t: "worry", c: false}, {t: "agree", c: true}, {t: "warn", c: false}, {t: "spread", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The article _______ that inequality was increasing in some societies.",
                    options: [
                        {t: "claimed", c: true}, {t: "started", c: false}, {t: "checked", c: false}, {t: "recalled", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "She _______ that the digital divide was still a major challenge.",
                    options: [
                        {t: "impacted", c: false}, {t: "explained", c: true}, {t: "brought", c: false}, {t: "interacted", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The student _______ if international cooperation would slow down.",
                    options: [
                        {t: "asked", c: true}, {t: "replied", c: false}, {t: "warned", c: false}, {t: "told", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "He _______ us that we needed to regulate technology better.",
                    options: [
                        {t: "suggested", c: false}, {t: "warned", c: true}, {t: "recounted", c: false}, {t: "researched", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I _______ about fake news and its impact on our society.",
                    options: [
                        {t: "focus", c: false}, {t: "believe", c: false}, {t: "worry", c: true}, {t: "happen", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Celine _______ that she should focus more on real-world connections.",
                    options: [
                        {t: "suggested", c: true}, {t: "decreased", c: false}, {t: "impacted", c: false}, {t: "checked", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The teacher _______ us that information overload was a serious issue.",
                    options: [
                        {t: "said", c: false}, {t: "told", c: true}, {t: "asked", c: false}, {t: "replied", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ connects different cultures and economies worldwide.",
                    options: [
                        {t: "Globalization", c: true}, {t: "Isolation", c: false}, {t: "Addiction", c: false}, {t: "Border", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We need _______ cooperation to solve global environmental issues.",
                    options: [
                        {t: "local", c: false}, {t: "international", c: true}, {t: "private", c: false}, {t: "internal", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The _______ of our lives has increased because of the internet.",
                    options: [
                        {t: "isolation", c: false}, {t: "interconnectedness", c: true}, {t: "border", c: false}, {t: "recession", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Many _______ now operate in several different countries.",
                    options: [
                        {t: "borders", c: false}, {t: "corporations", c: true}, {t: "viruses", c: false}, {t: "apps", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The rapid _______ of technology has changed the way we work.",
                    options: [
                        {t: "growth", c: true}, {t: "isolation", c: false}, {t: "addiction", c: false}, {t: "debt", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Too much data and news can lead to information _______.",
                    options: [
                        {t: "overload", c: true}, {t: "divide", c: false}, {t: "privacy", c: false}, {t: "economy", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The _______ divide refers to the gap in access to technology.",
                    options: [
                        {t: "global", c: false}, {t: "digital", c: true}, {t: "online", c: false}, {t: "social", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ is a major problem where people use the internet to bully.",
                    options: [
                        {t: "Cyberbullying", c: true}, {t: "Misinformation", c: false}, {t: "Addiction", c: false}, {t: "Isolation", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Users have many _______ concerns regarding how apps use their data.",
                    options: [
                        {t: "future", c: false}, {t: "privacy", c: true}, {t: "global", c: false}, {t: "economic", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ news spreads much faster than real news on social media.",
                    options: [
                        {t: "Old", c: false}, {t: "Fake", c: true}, {t: "Global", c: false}, {t: "Digital", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Scientists _______ that AI will be even more advanced in the future.",
                    options: [
                        {t: "predict", c: true}, {t: "recall", c: false}, {t: "hit", c: false}, {t: "check", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We must _______ on reliable sources for our information.",
                    options: [
                        {t: "rely", c: true}, {t: "warn", c: false}, {t: "impact", c: false}, {t: "bring", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The world is changing _______ due to technological advances.",
                    options: [
                        {t: "slowly", c: false}, {t: "fast", c: true}, {t: "rarely", c: false}, {t: "hardly", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Technology can sometimes cause _______ and lack of social contact.",
                    options: [
                        {t: "isolation", c: true}, {t: "interconnectedness", c: false}, {t: "growth", c: false}, {t: "exchange", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Social media _______ can affect a person's mental health.",
                    options: [
                        {t: "addiction", c: true}, {t: "border", c: false}, {t: "economy", c: false}, {t: "device", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "You should always _______ the accuracy of the news you read.",
                    options: [
                        {t: "check", c: true}, {t: "happen", c: false}, {t: "grow", c: false}, {t: "lose", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Did you _______ that the meeting was postponed until next week?",
                    options: [
                        {t: "mention", c: true}, {t: "expect", c: false}, {t: "spread", c: false}, {t: "interact", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "New apps often _______ new habits in our daily routines.",
                    options: [
                        {t: "create", c: true}, {t: "decrease", c: false}, {t: "warn", c: false}, {t: "reply", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The reporter _______ that the virus was spreading in several cities.",
                    options: [
                        {t: "reported", c: true}, {t: "asked", c: false}, {t: "brought", c: false}, {t: "suggested", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "People are spending more _______ on their smartphones than before.",
                    options: [
                        {t: "screen time", c: true}, {t: "digital divide", c: false}, {t: "fake news", c: false}, {t: "isolation", c: false}
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
                    title: "Reported Speech: Tense Backshift",
                    audio: "TTS: When we report what someone said, we move the verb tense one step back into the past. This is called backshift. Simple present becomes simple past. Present continuous becomes past continuous. Simple past and present perfect both become past perfect. Will becomes would, and can becomes could.",
                    explanation: "When we report what someone said, we usually move the verb tense one step back into the past. This is called <b>backshift</b>.<br><br><span style='color:#0077b6; font-style:italic;'>(Quando relatamos o que alguém disse, geralmente voltamos o tempo verbal um passo para o passado. Isso é chamado de 'backshift'.)</span>",
                    samples: [
                        { en: "Simple Present → Simple Past: 'I check sources' → He said he checked sources.", pt: "<span style='color:#0077b6'>Presente Simples → Passado Simples</span>" },
                        { en: "Present Continuous → Past Continuous: 'I am changing' → He said he was changing.", pt: "<span style='color:#0077b6'>Presente Contínuo → Passado Contínuo</span>" },
                        { en: "Simple Past / Present Perfect → Past Perfect: 'The virus hit hard' → She said the virus had hit hard.", pt: "<span style='color:#0077b6'>Passado Simples / Presente Perfeito → Passado Mais-que-perfeito</span>" },
                        { en: "Will → Would: 'Growth will continue' → Experts claimed growth would continue.", pt: "<span style='color:#0077b6'>Will → Would</span>" },
                        { en: "Can → Could: 'We can reduce inequality' → They believed they could reduce inequality.", pt: "<span style='color:#0077b6'>Can → Could</span>" }
                    ]
                },
                {
                    title: "Reported Questions",
                    audio: "TTS: To report a question, we use statement word order and remove the auxiliary verbs do, does, or did. For Yes or No questions, use if or whether. For Wh questions, keep the question word.",
                    explanation: "To report a question, use statement word order (Subject + Verb) and remove do/does/did. For Yes/No questions, use <b>if</b> or <b>whether</b>. For Wh- questions, keep the question word.<br><br><span style='color:#0077b6; font-style:italic;'>(Para relatar uma pergunta, usamos a ordem de afirmação (Sujeito + Verbo) e removemos os auxiliares. Para perguntas de Sim/Não, usamos 'if' ou 'whether'.)</span>",
                    samples: [
                        { en: "Yes/No Question: 'Does technology help?' → He asked whether technology helped.", pt: "<span style='color:#0077b6'>Pergunta de Sim/Não (Usa if/whether)</span>" },
                        { en: "Wh- Question: 'Where is the digital divide?' → She asked where the digital divide was.", pt: "<span style='color:#0077b6'>Pergunta com Wh- (Mantém a palavra interrogativa)</span>" },
                        { en: "Word Order: 'How did it start?' → He asked how it had started. (NOT: how did it start)", pt: "<span style='color:#0077b6'>Ordem das Palavras (Sujeito antes do Verbo)</span>" }
                    ]
                },
                {
                    title: "Shifting Adverbs & Proximity",
                    audio: "TTS: Because the time and place of the report are different from the original speech, we must shift these words. Now becomes then. Today becomes that day. Yesterday becomes the day before. Tomorrow becomes the next day. Here becomes there, and this becomes that.",
                    explanation: "Because the time and place of the report are different from the original speech, we must shift these words.<br><br><span style='color:#0077b6; font-style:italic;'>(Como o tempo e o lugar do relato são diferentes da fala original, devemos mudar essas palavras.)</span>",
                    samples: [
                        { en: "<b>Now</b> → Then / At that moment", pt: "<span style='color:#0077b6'>Agora → Então / Naquele momento</span>" },
                        { en: "<b>Today</b> → That day", pt: "<span style='color:#0077b6'>Hoje → Aquele dia</span>" },
                        { en: "<b>Yesterday</b> → The day before / The previous day", pt: "<span style='color:#0077b6'>Ontem → O dia anterior</span>" },
                        { en: "<b>Tomorrow</b> → The next day / The following day", pt: "<span style='color:#0077b6'>Amanhã → O dia seguinte</span>" },
                        { en: "<b>Here / This</b> → There / That", pt: "<span style='color:#0077b6'>Aqui / Este → Lá / Aquele</span>" }
                    ]
                },
                {
                    title: "Linking Words: Condition & Purpose",
                    audio: "TTS: We use specific markers to show a requirement or a goal. If and unless show conditions. In order to and so that show purpose. For example: I will share the report if it is reliable. We study the market in order to predict changes.",
                    explanation: "We use specific markers to show a requirement (condition) or a goal (purpose).<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos marcadores específicos para mostrar um requisito (condição) ou um objetivo (propósito).)</span>",
                    samples: [
                        { en: "<b>If</b>: I will share the report if it is reliable.", pt: "<span style='color:#0077b6'>Se: Eu compartilharei o relatório se ele for confiável.</span>" },
                        { en: "<b>Unless</b>: We won't succeed unless we work together.", pt: "<span style='color:#0077b6'>A menos que: Nós não teremos sucesso a menos que trabalhemos juntos.</span>" },
                        { en: "<b>As long as</b>: Technology is a benefit as long as we use it wisely.", pt: "<span style='color:#0077b6'>Contanto que: A tecnologia é um benefício contanto que a usemos com sabedoria.</span>" },
                        { en: "<b>In order to</b>: We study the market in order to predict changes.", pt: "<span style='color:#0077b6'>A fim de: Estudamos o mercado a fim de prever mudanças.</span>" },
                        { en: "<b>So that</b>: She uses a password so that her privacy is protected.", pt: "<span style='color:#0077b6'>Para que: Ela usa uma senha para que sua privacidade seja protegida.</span>" }
                    ]
                }
            ], // This closes the patterns array in Step 3

            // 3B: Natural Examples (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Reporting Global Issues",
                    audio: "audio/em2-2-5/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Celine, I interviewed an expert yesterday. He said that globalization impacted everyone.", 
                            pt: "<span style='color:#0077b6'>Celine, eu entrevistei um especialista ontem. Ele disse que a globalização impactava a todos.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "That's interesting! He also claimed that companies had increased their interconnectedness the week before.", 
                            pt: "<span style='color:#0077b6'>Que interessante! Ele também alegou que as empresas tinham aumentado sua interconectividade na semana anterior.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Asking about Technology",
                    audio: "audio/em2-2-5/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Albert, I asked the teacher if information overload was a serious issue.", 
                            pt: "<span style='color:#0077b6'>Albert, eu perguntei ao professor se a sobrecarga de informação era um problema sério.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "And what did he say? He asked me why I spent so much screen time that day.", 
                            pt: "<span style='color:#0077b6'>E o que ele disse? Ele me perguntou por que eu passava tanto tempo de tela naquele dia.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ (Expanded to 30 items)
            grammarDrills: [
                // --- Set 1: Reported Statements & Tense Backshift ---
                {
                    type: "mcq",
                    q: "Direct: 'The economy is growing.' → Reported: She said that the economy _______ growing.",
                    options: [
                        {t: "is", c: false}, {t: "was", c: true}, {t: "has been", c: false}, {t: "will be", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'I have finished the research.' → Reported: Albert said he _______ the research.",
                    options: [
                        {t: "finished", c: false}, {t: "has finished", c: false}, {t: "had finished", c: true}, {t: "was finishing", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'We will find a solution.' → Reported: They claimed they _______ find a solution.",
                    options: [
                        {t: "will", c: false}, {t: "would", c: true}, {t: "can", c: false}, {t: "shall", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'Technology can be a distraction.' → Reported: He warned that technology _______ be a distraction.",
                    options: [
                        {t: "can", c: false}, {t: "could", c: true}, {t: "might be", c: false}, {t: "is", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'The virus hit hard.' → Reported: The report said the virus _______ hard.",
                    options: [
                        {t: "hits", c: false}, {t: "was hitting", c: false}, {t: "had hit", c: true}, {t: "has hit", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'We are discussing globalization.' → Reported: They said they _______ globalization.",
                    options: [
                        {t: "are discussing", c: false}, {t: "were discussing", c: true}, {t: "discussed", c: false}, {t: "have discussed", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'You must verify the data.' → Reported: The teacher told us we _______ verify the data.",
                    options: [
                        {t: "must", c: false}, {t: "had to", c: true}, {t: "have to", c: false}, {t: "would", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'It may cause isolation.' → Reported: Celine said it _______ cause isolation.",
                    options: [
                        {t: "may", c: false}, {t: "might", c: true}, {t: "can", c: false}, {t: "will", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'Interconnectedness is permanent.' → Reported: He replied that it _______ permanent.",
                    options: [
                        {t: "is", c: false}, {t: "was", c: true}, {t: "had been", c: false}, {t: "would be", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'I worry about fake news.' → Reported: Albert said he _______ about fake news.",
                    options: [
                        {t: "worry", c: false}, {t: "worried", c: true}, {t: "is worrying", c: false}, {t: "had worried", c: false}
                    ]
                },

                // --- Set 2: Reported Questions (Yes/No & Wh-) ---
                {
                    type: "mcq",
                    q: "Direct: 'Do you use social media?' → Reported: She asked me _______ social media.",
                    options: [
                        {t: "if did I use", c: false}, {t: "whether I used", c: true}, {t: "if I use", c: false}, {t: "whether did I used", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'Did the virus spread fast?' → Reported: He asked _______ fast.",
                    options: [
                        {t: "if the virus spread", c: false}, {t: "if the virus had spread", c: true}, {t: "whether the virus spreads", c: false}, {t: "did the virus spread", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'Where is your smartphone?' → Reported: Albert asked me where my smartphone _______.",
                    options: [
                        {t: "is", c: false}, {t: "was", c: true}, {t: "had been", c: false}, {t: "were", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'Why have you started a detox?' → Reported: Celine asked why I _______ a detox.",
                    options: [
                        {t: "started", c: false}, {t: "had started", c: true}, {t: "have started", c: false}, {t: "was starting", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'Does technology help?' → Reported: He asked _______ technology helped.",
                    options: [
                        {t: "whether", c: true}, {t: "that", c: false}, {t: "if does", c: false}, {t: "what", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'How did the pandemic start?' → Reported: He asked how the pandemic _______.",
                    options: [
                        {t: "started", c: false}, {t: "had started", c: true}, {t: "did start", c: false}, {t: "has started", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'Can we solve this challenge?' → Reported: She asked if they _______ solve that challenge.",
                    options: [
                        {t: "can", c: false}, {t: "could", c: true}, {t: "will", c: false}, {t: "should", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'Are you ready for work?' → Reported: He asked Celine if she _______ ready for work.",
                    options: [
                        {t: "is", c: false}, {t: "was", c: true}, {t: "were", c: false}, {t: "has been", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'What did the expert say?' → Reported: Celine asked what the expert _______.",
                    options: [
                        {t: "says", c: false}, {t: "said", c: false}, {t: "had said", c: true}, {t: "was saying", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'Is the digital divide a challenge?' → Reported: He asked if the digital divide _______ a challenge.",
                    options: [
                        {t: "is", c: false}, {t: "was", c: true}, {t: "had been", c: false}, {t: "would be", c: false}
                    ]
                },

                // --- Set 3: Adverb Shifts & Linking Words ---
                {
                    type: "mcq",
                    q: "In indirect speech, 'today' usually changes to _______.",
                    options: [
                        {t: "yesterday", c: false}, {t: "that day", c: true}, {t: "then", c: false}, {t: "the day before", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'We met here.' → Reported: They said they had met _______.",
                    options: [
                        {t: "there", c: true}, {t: "here", c: false}, {t: "then", c: false}, {t: "that day", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'I'll see you tomorrow.' → Reported: He said he'd see me _______.",
                    options: [
                        {t: "tomorrow", c: false}, {t: "the next day", c: true}, {t: "then", c: false}, {t: "the day before", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Direct: 'I read this article yesterday.' → Reported: She said she had read that article _______.",
                    options: [
                        {t: "the day before", c: true}, {t: "yesterday", c: false}, {t: "then", c: false}, {t: "that day", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We must check the sources _______ we can avoid fake news.",
                    options: [
                        {t: "unless", c: false}, {t: "so that", c: true}, {t: "if", c: false}, {t: "in order to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The world will become more international _______ we stop international trade.",
                    options: [
                        {t: "unless", c: true}, {t: "so that", c: false}, {t: "as long as", c: false}, {t: "if", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "You will understand the digital divide _______ you study the data.",
                    options: [
                        {t: "if", c: true}, {t: "so that", c: false}, {t: "unless", c: false}, {t: "in order to", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We need better communication _______ solve this challenge.",
                    options: [
                        {t: "so that", c: false}, {t: "in order to", c: true}, {t: "if", c: false}, {t: "unless", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Technology is a benefit _______ we use it wisely.",
                    options: [
                        {t: "unless", c: false}, {t: "as long as", c: true}, {t: "in order to", c: false}, {t: "so that", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Indirect speech: 'Now' usually changes to _______.",
                    options: [
                        {t: "today", c: false}, {t: "then", c: true}, {t: "here", c: false}, {t: "the following week", c: false}
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
                    text: "He said that globalization had changed the world.<br><small style='color:#0077b6'>(Ele disse que a globalização tinha mudado o mundo.)</small>", 
                    audio: "TTS: He said that globalization had changed the world.", 
                    arrow: "↘" 
                },
                { 
                    text: "She asked me if I used social media a lot.<br><small style='color:#0077b6'>(Ela me perguntou se eu usava muito as mídias sociais.)</small>", 
                    audio: "TTS: She asked me if I used social media a lot.", 
                    arrow: "↗" 
                },
                { 
                    text: "The expert claimed that the digital divide was a big challenge.<br><small style='color:#0077b6'>(O especialista afirmou que a exclusão digital era um grande desafio.)</small>", 
                    audio: "TTS: The expert claimed that the digital divide was a big challenge.", 
                    arrow: "↘" 
                },
                { 
                    text: "He asked why technology caused isolation.<br><small style='color:#0077b6'>(Ele perguntou por que a tecnologia causava isolamento.)</small>", 
                    audio: "TTS: He asked why technology caused isolation.", 
                    arrow: "↘" 
                },
                { 
                    text: "We need rules so that we can protect our privacy.<br><small style='color:#0077b6'>(Precisamos de regras para que possamos proteger nossa privacidade.)</small>", 
                    audio: "TTS: We need rules so that we can protect our privacy.", 
                    arrow: "↘" 
                },
                { 
                    text: "Technology will continue to grow unless we stop innovation.<br><small style='color:#0077b6'>(A tecnologia continuará a crescer a menos que paremos a inovação.)</small>", 
                    audio: "TTS: Technology will continue to grow unless we stop innovation.", 
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
                    instruction: "Listen to Albert reporting on a news segment he watched and type the missing words.<br><small style='color:#0077b6'>(Ouça Albert relatando um segmento de notícias e digite as palavras.)</small>",
                    audio: "TTS: I watched the news last night. The reporter said that information overload was affecting many people. She explained that users needed to check their sources in order to avoid fake news. She also asked if we were ready for the future of work.",
                    text: "I watched the news [last night]. The reporter [said] that [information overload] was affecting many people. She [explained] that users [needed] to check their sources [in order to] avoid [fake news]. She also [asked] if we were ready for the [future] of [work]."
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue and choose the correct options.<br><small style='color:#0077b6'>(Ouça o diálogo e escolha as opções corretas.)</small>",
                    audio: "audio/em2-2-5/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Celine: Albert, the teacher [told us | asked us | said us] that the [pandemic | global | border] had changed [everything | anything | nothing].", 
                            a: "told us" 
                        },
                        { 
                            q: "Albert: I know. He [asked | said | claimed] [if | that | why] [interconnectedness | digital | divide] was permanent.", 
                            a: "asked" 
                        },
                        { 
                            q: "Celine: He also [suggested | warned | questioned] that we [should | would | could] limit our [screen time | social media | smartphone].", 
                            a: "suggested" 
                        },
                        { 
                            q: "Albert: I agree. We need balance [so that | unless | although] we don't become [addicted | isolated | online].", 
                            a: "so that" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the audio question and choose the logical response based on the lesson logic.<br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta lógica correta.)</small>",
                    audio: "TTS: What did the expert say about the digital divide yesterday?",
                    options: [
                        { t: "He asks why I am online.", c: false },
                        { t: "He said that it was a significant challenge that day.", c: true },
                        { t: "I will go there tomorrow.", c: false },
                        { t: "Unless we have internet, we are disconnected.", c: false }
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
                // 6a: Narration - The Interconnected World
                {
                    title: "Narration - The Interconnected World",
                    audio: "TTS: The world is changing fast. Last year, a global research showed that international trade had hit a record high. Experts reported that companies were using new technology in order to connect with markets worldwide. They claimed that globalization had brought many benefits, like cheaper devices. However, they also warned that inequality could increase unless governments implemented better solutions. It is a complex issue that requires cooperation. || audio/em2-2-5/p6_text1.mp3",
                    body: "The world is changing fast. Last year, a global research showed that international trade had hit a record high. Experts reported that companies were using new technology [in order to] connect with markets worldwide. They claimed that [globalization] had brought many benefits, like cheaper devices. However, they also [warned] that [inequality] could increase [unless] governments implemented better solutions. It is a complex [issue] that requires cooperation.",
                    questions: [
                        {
                            q: "What did the research show about international trade last year?",
                            options: [
                                { t: "It had decreased significantly.", c: false },
                                { t: "It had hit a record high.", c: true },
                                { t: "It would stop the following year.", c: false },
                                { t: "It was not affected by technology.", c: false }
                            ]
                        },
                        {
                            q: "Why are companies using new technology?",
                            options: [
                                { t: "So that they can cause isolation.", c: false },
                                { t: "In order to connect with global markets.", c: true },
                                { t: "Because they expect a pandemic.", c: false },
                                { t: "To decrease their economic growth.", c: false }
                            ]
                        },
                        {
                            q: "What is the condition mentioned to prevent increasing inequality?",
                            options: [
                                { t: "As long as technology stops developing.", c: false },
                                { t: "Unless governments implement better solutions.", c: true },
                                { t: "If people use more social media.", c: false },
                                { t: "In order to increase international trade.", c: false }
                            ]
                        }
                    ]
                },
                // 6b: Dialogue - Reporting a Lecture
                {
                    title: "Dialogue - Reporting a Lecture",
                    audio: "audio/em2-2-5/p6_text2.mp3",
                    body: "<b>Albert:</b> Celine, did you hear what Mrs. Canales said in the lecture yesterday?<br><b>Celine:</b> No, I was offline. What did she mention?<br><b>Albert:</b> She said that [information overload] was becoming a [problem].<br><b>Celine:</b> Did she suggest a [solution]?<br><b>Albert:</b> Yes. She told us that we [had to] [check] our sources. She also asked if we [were] [addicted] to our [smartphones].<br><b>Celine:</b> I admit I spend too much time [online]. I will start a detox if you help me!",
                    questions: [
                        {
                            q: "What did Mrs. Canales say was becoming a problem in her lecture?",
                            options: [
                                { t: "Globalization of the economy.", c: false },
                                { t: "Information overload.", c: true },
                                { t: "International trade barriers.", c: false },
                                { t: "The quality of digital cameras.", c: false }
                            ]
                        },
                        {
                            q: "What was Albert's report regarding checking sources?",
                            options: [
                                { t: "He asked Celine if she could check them.", c: false },
                                { t: "The teacher told them they had to check them.", c: true },
                                { t: "It was reported that sources were always real.", c: false },
                                { t: "He claimed that checking sources was impossible.", c: false }
                            ]
                        },
                        {
                            q: "Under what condition will Celine start a digital detox?",
                            options: [
                                { t: "Unless Albert helps her.", c: false },
                                { t: "If Albert helps her.", c: true },
                                { t: "As long as she has her smartphone.", c: false },
                                { t: "In order to find new sources.", c: false }
                            ]
                        }
                    ]
                },
                // 6c: Description - The Expert's Warning
                {
                    title: "Description - The Expert's Warning",
                    audio: "TTS: Professor Silva is a famous expert. In his last interview, he explained how the pandemic had affected globalization. He said that borders had become more important that year. He asked why we hadn't protected our privacy better in the past. Furthermore, he claimed that the digital divide was a serious issue for society. He believes that we need international communication so that we can solve these challenges. || audio/em2-2-5/p6_text3.mp3",
                    body: "Professor Silva is a famous expert. In his last interview, he explained how the [pandemic] had affected [globalization]. He said that borders had become more important [that year]. He asked why we hadn't protected our [privacy] better in the past. Furthermore, he claimed that the [digital divide] was a [serious issue] for [society]. He believes that we need [international] [communication] [so that] we can solve these [challenges].",
                    questions: [
                        {
                            q: "How did the pandemic affect the world according to Professor Silva?",
                            options: [
                                { t: "It made borders less important.", c: false },
                                { t: "It affected globalization and made borders more important.", c: true },
                                { t: "It had ended the digital divide entirely.", c: false },
                                { t: "It improved our privacy concerns.", c: false }
                            ]
                        },
                        {
                            q: "What question did the expert ask during the interview?",
                            options: [
                                { t: "Why we hadn't protected our privacy better.", c: true },
                                { t: "If the virus was digital or biological.", c: false },
                                { t: "Where the smartphone was invented.", c: false },
                                { t: "How often we check social media.", c: false }
                            ]
                        },
                        {
                            q: "What is needed to solve global challenges according to the expert?",
                            options: [
                                { t: "More information overload.", c: false },
                                { t: "International communication.", c: true },
                                { t: "Higher screen time for students.", c: false },
                                { t: "Closing all national borders.", c: false }
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
                // Drill 1: Matching (Economy & Crisis)
                {
                    type: "matching",
                    instruction: "Match the English term with its Portuguese meaning.<br><small style='color:#0077b6'>(Relacione o termo em inglês com seu significado em português.)</small>",
                    pairs: [
                        { left: "Cost of living", right: "Custo de vida", val: "1" },
                        { left: "Unemployment", right: "Desemprego", val: "2" },
                        { left: "Savings", right: "Economias", val: "3" },
                        { left: "Debt", right: "Dívida", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Adverb Shifts in Reported Speech)
                {
                    type: "word-order",
                    instruction: "Put the words in order to form a correct Reported Speech sentence.<br><small style='color:#0077b6'>(Coloque as palavras em ordem para formar uma frase de Discurso Indireto correta.)</small>",
                    sentence: "told / me / that / changing / he / was / then / the world / .",
                    correct: "He told me that the world was changing then ."
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the sentence based on the adverb shifts.",
                    sentence: "the day before / had / they / met / said / they / .",
                    correct: "They said they had met the day before ."
                },
                // Drill 3: Multiple Choice (Linking Words - Condition & Purpose)
                {
                    type: "mcq",
                    instruction: "We must study globalization _______ we can understand the world.",
                    options: [
                        { t: "unless", c: false },
                        { t: "so that", c: true },
                        { t: "as long as", c: false },
                        { t: "because", c: false }
                    ]
                },
                {
                    type: "mcq",
                    instruction: "You will feel isolated _______ you interact with real people.",
                    options: [
                        { t: "as long as", c: false },
                        { t: "unless", c: true },
                        { t: "so that", c: false },
                        { t: "currently", c: false }
                    ]
                },
                // Drill 4: Clickable Error (Tense Backshift)
                {
                    type: "clickable-error",
                    instruction: "Find the grammatical mistake in the reported sentence.<br><small style='color:#0077b6'>(Encontre o erro gramatical na frase reportada.)</small>",
                    // Original: Direct: "I have a smartphone." -> Reported: He said that he has a smartphone. (Mistake: has)
                    sentence: "He said that he [has](error:had) a smartphone.",
                },
                {
                    type: "clickable-error",
                    instruction: "Find the mistake.",
                    // Original: Direct: "We will interact." -> Reported: They said that they will interact. (Mistake: will)
                    sentence: "They said that they [will](error:would) interact.",
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn to be a reporter! Write a short text (5-7 sentences) about a conversation you had with a friend or teacher about technology. <br><br><small><span style='color:#0077b6'>(Agora é sua vez de ser um repórter! Escreva um pequeno texto (5-7 frases) sobre uma conversa que você teve com um amigo ou professor sobre tecnologia.)</span></small>",
            example: "\"Yesterday, I talked to Celine about our [digital] [habits]. I asked her if she felt [information overload] sometimes. She replied that she had been very tired [the week before] because of too much [screen time]. She said that she would start a detox in order to improve her [well-being]. I told her that I would join her so that we could stay healthy together!\" <br><br><small><span style='color:#0077b6'>(Exemplo: Ontem, conversei com Celine sobre nossos hábitos digitais. Perguntei se ela se sentia sobrecarregada de informações às vezes. Ela respondeu que se sentiu muito cansada na semana anterior...)</span></small>",
            prompts: [
                "Use [Reported Speech] to tell what they said or asked. <br><small><span style='color:#0077b6'>(Use o Discurso Indireto para contar o que eles disseram ou perguntaram.)</span></small>",
                "Include at least one [Linking Word] for purpose (so that / in order to). <br><small><span style='color:#0077b6'>(Inclua pelo menos um conectivo de propósito.)</span></small>",
                "Include two words from the [Technology Issues] list (e.g., isolation, addiction). <br><small><span style='color:#0077b6'>(Inclua duas palavras da lista de Problemas Tecnológicos.)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: WRAP IT UP (Flashcards - Part 1: Verbs A-D)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Vocabulary Flashcards: Area 1 (Verbs A-D) ---
                { 
                    term: "Admit", 
                    definition: "To confess to be true or to be the case.", 
                    defTrans: "Admitir",
                    example: "He admitted that technology was addictive.", 
                    audioFront: "TTS: Admit",
                    audioBack: "TTS: He admitted that technology was addictive." 
                },
                { 
                    term: "Affect", 
                    definition: "To have an effect on; make a difference to.", 
                    defTrans: "Afetar",
                    example: "How does the internet affect your study?", 
                    audioFront: "TTS: Affect",
                    audioBack: "TTS: How does the internet affect your study?" 
                },
                { 
                    term: "Agree", 
                    definition: "To have the same opinion about something.", 
                    defTrans: "Concordar",
                    example: "I agree that we need more privacy.", 
                    audioFront: "TTS: Agree",
                    audioBack: "TTS: I agree that we need more privacy." 
                },
                { 
                    term: "Ask", 
                    definition: "To say something in order to obtain information or a request.", 
                    defTrans: "Perguntar",
                    example: "Celine asked if I was online.", 
                    audioFront: "TTS: Ask",
                    audioBack: "TTS: Celine asked if I was online." 
                },
                { 
                    term: "Be (is, was, had been)", 
                    definition: "Verb indicating a state or identity; shows backshift in reported speech.", 
                    defTrans: "Ser / Estar",
                    example: "Globalization is a complex process.", 
                    audioFront: "TTS: Be",
                    audioBack: "TTS: Globalization is a complex process." 
                },
                { 
                    term: "Become", 
                    definition: "To begin to be.", 
                    defTrans: "Tornar-se",
                    example: "Remote work is becoming common.", 
                    audioFront: "TTS: Become",
                    audioBack: "TTS: Remote work is becoming common." 
                },
                { 
                    term: "Believe", 
                    definition: "To accept that something is true, especially without proof.", 
                    defTrans: "Acreditar",
                    example: "Experts believe the economy will grow.", 
                    audioFront: "TTS: Believe",
                    audioBack: "TTS: Experts believe the economy will grow." 
                },
                { 
                    term: "Bring", 
                    definition: "To take or carry someone or something to a place.", 
                    defTrans: "Trazer",
                    example: "Innovation brings many benefits.", 
                    audioFront: "TTS: Bring",
                    audioBack: "TTS: Innovation brings many benefits." 
                },
                { 
                    term: "Change", 
                    definition: "To make or become different.", 
                    defTrans: "Mudar",
                    example: "The world changes every day.", 
                    audioFront: "TTS: Change",
                    audioBack: "TTS: The world changes every day." 
                },
                { 
                    term: "Check", 
                    definition: "To examine something in order to determine its accuracy or quality.", 
                    defTrans: "Checar / Verificar",
                    example: "Always check your sources.", 
                    audioFront: "TTS: Check",
                    audioBack: "TTS: Always check your sources." 
                },
                { 
                    term: "Claim", 
                    definition: "To state that something is the case, typically without providing evidence.", 
                    defTrans: "Alegar / Afirmar",
                    example: "Some articles claim that AI is dangerous.", 
                    audioFront: "TTS: Claim",
                    audioBack: "TTS: Some articles claim that AI is dangerous." 
                },
                { 
                    term: "Connect", 
                    definition: "To bring together or into contact so that a real or notional link is established.", 
                    defTrans: "Conectar",
                    example: "The internet connects everyone worldwide.", 
                    audioFront: "TTS: Connect",
                    audioBack: "TTS: The internet connects everyone worldwide." 
                },
                { 
                    term: "Consider", 
                    definition: "To think carefully about something, typically before making a decision.", 
                    defTrans: "Considerar",
                    example: "We must consider the drawbacks.", 
                    audioFront: "TTS: Consider",
                    audioBack: "TTS: We must consider the drawbacks." 
                },
                { 
                    term: "Continue", 
                    definition: "To persist in an activity or process.", 
                    defTrans: "Continuar",
                    example: "Tech growth will continue.", 
                    audioFront: "TTS: Continue",
                    audioBack: "TTS: Tech growth will continue." 
                },
                { 
                    term: "Create", 
                    definition: "To bring something into existence.", 
                    defTrans: "Criar",
                    example: "New apps create new habits.", 
                    audioFront: "TTS: Create",
                    audioBack: "TTS: New apps create new habits." 
                },
                { 
                    term: "Decrease", 
                    definition: "To make or become smaller or fewer in amount.", 
                    defTrans: "Diminuir",
                    example: "The digital divide must decrease.", 
                    audioFront: "TTS: Decrease",
                    audioBack: "TTS: The digital divide must decrease." 
                },
                { 
                    term: "Develop", 
                    definition: "To grow or cause to grow and become more mature, advanced, or elaborate.", 
                    defTrans: "Desenvolver",
                    example: "Engineers develop new devices.", 
                    audioFront: "TTS: Develop",
                    audioBack: "TTS: Engineers develop new devices." 
                },
                { 
                    term: "Discuss", 
                    definition: "To talk about something with another person or group.", 
                    defTrans: "Discutir",
                    example: "Let's discuss privacy.", 
                    audioFront: "TTS: Discuss",
                    audioBack: "TTS: Let's discuss privacy." 
                },
                // --- Vocabulary Flashcards: Area 1 (Verbs E-M) ---
                { 
                    term: "End", 
                    definition: "A final part of something, especially a period of time or story.", 
                    defTrans: "Terminar",
                    example: "When did the lockdown end?", 
                    audioFront: "TTS: End",
                    audioBack: "TTS: When did the lockdown end?" 
                },
                { 
                    term: "Expect", 
                    definition: "To regard something as likely to happen.", 
                    defTrans: "Esperar (expectativa)",
                    example: "We expect a better future.", 
                    audioFront: "TTS: Expect",
                    audioBack: "TTS: We expect a better future." 
                },
                { 
                    term: "Explain", 
                    definition: "To make something clear to someone by describing it in detail.", 
                    defTrans: "Explicar",
                    example: "Can you explain this issue?", 
                    audioFront: "TTS: Explain",
                    audioBack: "TTS: Can you explain this issue?" 
                },
                { 
                    term: "Feel", 
                    definition: "To experience an emotion or physical sensation.", 
                    defTrans: "Sentir",
                    example: "I feel overwhelmed by the news.", 
                    audioFront: "TTS: Feel",
                    audioBack: "TTS: I feel overwhelmed by the news." 
                },
                { 
                    term: "Focus", 
                    definition: "The center of interest or activity.", 
                    defTrans: "Focar",
                    example: "Focus on the solution.", 
                    audioFront: "TTS: Focus",
                    audioBack: "TTS: Focus on the solution." 
                },
                { 
                    term: "Get", 
                    definition: "To come to have or hold something; receive.", 
                    defTrans: "Conseguir / Obter",
                    example: "How do you get reliable information?", 
                    audioFront: "TTS: Get",
                    audioBack: "TTS: How do you get reliable information?" 
                },
                { 
                    term: "Grow", 
                    definition: "To become larger or greater over a period of time; increase.", 
                    defTrans: "Crescer",
                    example: "The global market is growing.", 
                    audioFront: "TTS: Grow",
                    audioBack: "TTS: The global market is growing." 
                },
                { 
                    term: "Happen", 
                    definition: "To take place; occur.", 
                    defTrans: "Acontecer",
                    example: "Fast changes happen in society.", 
                    audioFront: "TTS: Happen",
                    audioBack: "TTS: Fast changes happen in society." 
                },
                { 
                    term: "Have (had)", 
                    definition: "To possess, own, or hold.", 
                    defTrans: "Ter",
                    example: "Every corporation has a website.", 
                    audioFront: "TTS: Have",
                    audioBack: "TTS: Every corporation has a website." 
                },
                { 
                    term: "Help", 
                    definition: "To make it easier for someone to do something.", 
                    defTrans: "Ajudar",
                    example: "Technology helps medicine.", 
                    audioFront: "TTS: Help",
                    audioBack: "TTS: Technology helps medicine." 
                },
                { 
                    term: "Hit", 
                    definition: "To reach a particular level or have a sudden negative impact.", 
                    defTrans: "Atingir / Bater",
                    example: "The crisis hit the economy hard.", 
                    audioFront: "TTS: Hit",
                    audioBack: "TTS: The crisis hit the economy hard." 
                },
                { 
                    term: "Impact", 
                    definition: "To have a strong effect on someone or something.", 
                    defTrans: "Impactar",
                    example: "The virus impacted global travel.", 
                    audioFront: "TTS: Impact",
                    audioBack: "TTS: The virus impacted global travel." 
                },
                { 
                    term: "Increase", 
                    definition: "To become or make greater in size, amount, intensity, or degree.", 
                    defTrans: "Aumentar",
                    example: "Screen time increased lately.", 
                    audioFront: "TTS: Increase",
                    audioBack: "TTS: Screen time increased lately." 
                },
                { 
                    term: "Interact", 
                    definition: "To act in such a way as to have an effect on another.", 
                    defTrans: "Interagir",
                    example: "Students interact on social media.", 
                    audioFront: "TTS: Interact",
                    audioBack: "TTS: Students interact on social media." 
                },
                { 
                    term: "Interview", 
                    definition: "A meeting of people face to face, especially for reporting.", 
                    defTrans: "Entrevistar",
                    example: "Reporters interview scientists.", 
                    audioFront: "TTS: Interview",
                    audioBack: "TTS: Reporters interview scientists." 
                },
                { 
                    term: "Lead to", 
                    definition: "To result in a particular outcome.", 
                    defTrans: "Levar a",
                    example: "Misinformation can lead to isolation.", 
                    audioFront: "TTS: Lead to",
                    audioBack: "TTS: Misinformation can lead to isolation." 
                },
                { 
                    term: "Learn", 
                    definition: "To acquire knowledge of or skill in something.", 
                    defTrans: "Aprender",
                    example: "We learn about culture online.", 
                    audioFront: "TTS: Learn",
                    audioBack: "TTS: We learn about culture online." 
                },
                { 
                    term: "Look into", 
                    definition: "To examine the facts about an issue or problem.", 
                    defTrans: "Investigar / Olhar para",
                    example: "Police look into cyberbullying.", 
                    audioFront: "TTS: Look into",
                    audioBack: "TTS: Police look into cyberbullying." 
                },
                { 
                    term: "Mention", 
                    definition: "To refer to something briefly and without going into detail.", 
                    defTrans: "Mencionar",
                    example: "He mentioned the pandemic.", 
                    audioFront: "TTS: Mention",
                    audioBack: "TTS: He mentioned the pandemic." 
                },
                // --- Vocabulary Flashcards: Area 1 (Verbs Must-Worry) ---
                { 
                    term: "Must", 
                    definition: "Used to express obligation or necessity.", 
                    defTrans: "Dever (obrigação)",
                    example: "We must be careful with fake news.", 
                    audioFront: "TTS: Must",
                    audioBack: "TTS: We must be careful with fake news." 
                },
                { 
                    term: "Need", 
                    definition: "To require something because it is essential or very important.", 
                    defTrans: "Precisar",
                    example: "People need a stable internet.", 
                    audioFront: "TTS: Need",
                    audioBack: "TTS: People need a stable internet." 
                },
                { 
                    term: "Predict", 
                    definition: "To say or estimate that a specified thing will happen in the future.", 
                    defTrans: "Prever",
                    example: "Can we predict the next trend?", 
                    audioFront: "TTS: Predict",
                    audioBack: "TTS: Can we predict the next trend?" 
                },
                { 
                    term: "Question", 
                    definition: "To feel or express doubt about something.", 
                    defTrans: "Questionar",
                    example: "Don't be afraid to question the news.", 
                    audioFront: "TTS: Question",
                    audioBack: "TTS: Don't be afraid to question the news." 
                },
                { 
                    term: "Read", 
                    definition: "To look at and comprehend the meaning of written matter.", 
                    defTrans: "Ler",
                    example: "I read about globalization.", 
                    audioFront: "TTS: Read",
                    audioBack: "TTS: I read about globalization." 
                },
                { 
                    term: "Recall", 
                    definition: "To bring a fact, event, or situation back into one's mind; remember.", 
                    defTrans: "Recordar",
                    example: "I recall a time without smartphones.", 
                    audioFront: "TTS: Recall",
                    audioBack: "TTS: I recall a time without smartphones." 
                },
                { 
                    term: "Rely", 
                    definition: "To depend on with full trust or confidence.", 
                    defTrans: "Confiar / Depender",
                    example: "We rely on digital communication.", 
                    audioFront: "TTS: Rely",
                    audioBack: "TTS: We rely on digital communication." 
                },
                { 
                    term: "Report", 
                    definition: "To give a spoken or written account of something.", 
                    defTrans: "Relatar / Reportar",
                    example: "Journalists report worldwide events.", 
                    audioFront: "TTS: Report",
                    audioBack: "TTS: Journalists report worldwide events." 
                },
                { 
                    term: "Research", 
                    definition: "The systematic investigation into and study of materials and sources.", 
                    defTrans: "Pesquisar",
                    example: "Scientists research the virus.", 
                    audioFront: "TTS: Research",
                    audioBack: "TTS: Scientists research the virus." 
                },
                { 
                    term: "Say (said)", 
                    definition: "To utter words so as to convey information.", 
                    defTrans: "Dizer",
                    example: "What did the expert say?", 
                    audioFront: "TTS: Say",
                    audioBack: "TTS: What did the expert say?" 
                },
                { 
                    term: "See", 
                    definition: "To perceive with the eyes.", 
                    defTrans: "Ver",
                    example: "I can see the digital divide here.", 
                    audioFront: "TTS: See",
                    audioBack: "TTS: I can see the digital divide here." 
                },
                { 
                    term: "Share", 
                    definition: "To post or repost content so that others can see it.", 
                    defTrans: "Compartilhar",
                    example: "Share the solution with us.", 
                    audioFront: "TTS: Share",
                    audioBack: "TTS: Share the solution with us." 
                },
                { 
                    term: "Show", 
                    definition: "To allow or cause something to be visible.", 
                    defTrans: "Mostrar",
                    example: "Data shows that addiction is rising.", 
                    audioFront: "TTS: Show",
                    audioBack: "TTS: Data shows that addiction is rising." 
                },
                { 
                    term: "Slow down", 
                    definition: "To reduce in speed or rate of activity.", 
                    defTrans: "Desacelerar",
                    example: "Globalization didn't slow down.", 
                    audioFront: "TTS: Slow down",
                    audioBack: "TTS: Globalization didn't slow down." 
                },
                { 
                    term: "Spread", 
                    definition: "To extend over a large area or among many people.", 
                    defTrans: "Espalhar",
                    example: "Fake news spreads fast.", 
                    audioFront: "TTS: Spread",
                    audioBack: "TTS: Fake news spreads fast." 
                },
                { 
                    term: "Start", 
                    definition: "To begin or be reckoned from a particular point in time or space.", 
                    defTrans: "Começar",
                    example: "The meeting starts now.", 
                    audioFront: "TTS: Start",
                    audioBack: "TTS: The meeting starts now." 
                },
                { 
                    term: "Study", 
                    definition: "To devote time and attention to acquiring knowledge on an academic subject.", 
                    defTrans: "Estudar",
                    example: "You should study economy.", 
                    audioFront: "TTS: Study",
                    audioBack: "TTS: You should study economy." 
                },
                { 
                    term: "Suggest", 
                    definition: "To put forward for consideration.", 
                    defTrans: "Sugerir",
                    example: "I suggest a digital detox.", 
                    audioFront: "TTS: Suggest",
                    audioBack: "TTS: I suggest a digital detox." 
                },
                { 
                    term: "Talk", 
                    definition: "To speak in order to give information or express ideas or feelings.", 
                    defTrans: "Falar / Conversar",
                    example: "We talk about privacy.", 
                    audioFront: "TTS: Talk",
                    audioBack: "TTS: We talk about privacy." 
                },
                { 
                    term: "Tell (told)", 
                    definition: "To communicate information to someone in spoken or written words.", 
                    defTrans: "Contar / Dizer para alguém",
                    example: "Tell me the truth about the issue.", 
                    audioFront: "TTS: Tell",
                    audioBack: "TTS: Tell me the truth about the issue." 
                },
                { 
                    term: "Think (thought)", 
                    definition: "To have a particular opinion, belief, or idea.", 
                    defTrans: "Pensar",
                    example: "I think the future is digital.", 
                    audioFront: "TTS: Think",
                    audioBack: "TTS: I think the future is digital." 
                },
                { 
                    term: "Use", 
                    definition: "To take, hold, or deploy something as a means of accomplishing a purpose.", 
                    defTrans: "Usar",
                    example: "Which app do you use?", 
                    audioFront: "TTS: Use",
                    audioBack: "TTS: Which app do you use?" 
                },
                { 
                    term: "Warn", 
                    definition: "To inform someone in advance of an impending or possible danger or problem.", 
                    defTrans: "Avisar / Alertar",
                    example: "She warned us about the drawbacks.", 
                    audioFront: "TTS: Warn",
                    audioBack: "TTS: She warned us about the drawbacks." 
                },
                { 
                    term: "Worry", 
                    definition: "To feel or cause to feel anxious or troubled about actual or potential problems.", 
                    defTrans: "Preocupar-se",
                    example: "Don't worry about the challenge.", 
                    audioFront: "TTS: Worry",
                    audioBack: "TTS: Don't worry about the challenge." 
                },
                // --- Vocabulary Flashcards: Area 2 (World & Globalization) ---
                { 
                    term: "Globalization", 
                    definition: "The process by which businesses or organizations develop international influence.", 
                    defTrans: "Globalização",
                    example: "Globalization connects cultures.", 
                    exTrans: "A globalização conecta culturas.",
                    audioFront: "TTS: Globalization",
                    audioBack: "TTS: Globalization connects cultures." 
                },
                { 
                    term: "Global", 
                    definition: "Relating to the whole world; worldwide.", 
                    defTrans: "Global",
                    example: "We live in a global village today.", 
                    exTrans: "Vivemos em uma aldeia global hoje.",
                    audioFront: "TTS: Global",
                    audioBack: "TTS: We live in a global village today." 
                },
                { 
                    term: "Worldwide", 
                    definition: "Extending or reaching throughout the whole world.", 
                    defTrans: "Mundial(mente)",
                    example: "The news spread worldwide in minutes.", 
                    exTrans: "As notícias se espalharam pelo mundo todo em minutos.",
                    audioFront: "TTS: Worldwide",
                    audioBack: "TTS: The news spread worldwide in minutes." 
                },
                { 
                    term: "Border", 
                    definition: "A line separating two political or geographical areas, especially countries.", 
                    defTrans: "Fronteira",
                    example: "Products cross every national border.", 
                    exTrans: "Produtos cruzam todas as fronteiras nacionais.",
                    audioFront: "TTS: Border",
                    audioBack: "TTS: Products cross every national border." 
                },
                { 
                    term: "Exchange", 
                    definition: "The act of giving one thing and receiving another in return.", 
                    defTrans: "Troca / Intercâmbio",
                    example: "Cultural exchange is a major benefit of travel.", 
                    exTrans: "O intercâmbio cultural é um grande benefício das viagens.",
                    audioFront: "TTS: Exchange",
                    audioBack: "TTS: Cultural exchange is a major benefit of travel." 
                },
                { 
                    term: "Market", 
                    definition: "The world of commercial activity where goods and services are bought and sold.", 
                    defTrans: "Mercado",
                    example: "The global market is very volatile right now.", 
                    exTrans: "O mercado global está muito volátil agora.",
                    audioFront: "TTS: Market",
                    audioBack: "TTS: The global market is very volatile right now." 
                },
                { 
                    term: "Company / Corporation", 
                    definition: "A commercial business or a large company.", 
                    defTrans: "Empresa / Corporação",
                    example: "That company is a huge multinational corporation.", 
                    exTrans: "Aquela empresa é uma enorme corporação multinacional.",
                    audioFront: "TTS: Company or Corporation",
                    audioBack: "TTS: That company is a huge multinational corporation." 
                },
                { 
                    term: "Growth", 
                    definition: "The process of increasing in amount, value, or importance.", 
                    defTrans: "Crescimento",
                    example: "Economic growth is essential for development.", 
                    exTrans: "O crescimento econômico é essencial para o desenvolvimento.",
                    audioFront: "TTS: Growth",
                    audioBack: "TTS: Economic growth is essential for development." 
                },
                { 
                    term: "Development", 
                    definition: "The process of developing or being developed.", 
                    defTrans: "Desenvolvimento",
                    example: "We need sustainable development for the planet.", 
                    exTrans: "Precisamos de desenvolvimento sustentável para o planeta.",
                    audioFront: "TTS: Development",
                    audioBack: "TTS: We need sustainable development for the planet." 
                },
                { 
                    term: "Future", 
                    definition: "The time or a period of time following the moment of speaking or writing.", 
                    defTrans: "Futuro",
                    example: "The future of work will be mostly digital.", 
                    exTrans: "O futuro do trabalho será majoritariamente digital.",
                    audioFront: "TTS: Future",
                    audioBack: "TTS: The future of work will be mostly digital." 
                },
                { 
                    term: "Culture", 
                    definition: "The customs, arts, and achievements of a particular nation or group.", 
                    defTrans: "Cultura",
                    example: "We must respect every local culture.", 
                    exTrans: "Devemos respeitar cada cultura local.",
                    audioFront: "TTS: Culture",
                    audioBack: "TTS: We must respect every local culture." 
                },
                { 
                    term: "Influence", 
                    definition: "The capacity to have an effect on the character, development, or behavior of someone.", 
                    defTrans: "Influência",
                    example: "Social media has a huge influence on teenagers.", 
                    exTrans: "Social media tem uma enorme influência nos adolescentes.",
                    audioFront: "TTS: Influence",
                    audioBack: "TTS: Social media has a huge influence on teenagers." 
                },
                { 
                    term: "Interconnectedness", 
                    definition: "The state of being connected with each other.", 
                    defTrans: "Interconectividade",
                    example: "Our interconnectedness is amazing.", 
                    exTrans: "Nossa interconectividade é incrível.",
                    audioFront: "TTS: Interconnectedness",
                    audioBack: "TTS: Our interconnectedness is amazing." 
                },
                { 
                    term: "International", 
                    definition: "Existing, occurring, or carried on between two or more nations.", 
                    defTrans: "Internacional",
                    example: "We need international cooperation.", 
                    exTrans: "Precisamos de cooperação internacional.",
                    audioFront: "TTS: International",
                    audioBack: "TTS: We need international cooperation." 
                },
                { 
                    term: "Economy", 
                    definition: "The state of a country or region in terms of production and consumption.", 
                    defTrans: "Economia",
                    example: "The global economy is changing fast.", 
                    exTrans: "A economia global está mudando rápido.",
                    audioFront: "TTS: Economy",
                    audioBack: "TTS: The global economy is changing fast." 
                },
                { 
                    term: "Society", 
                    definition: "The aggregate of people living together in a community.", 
                    defTrans: "Sociedade",
                    example: "Fast changes happen in society.", 
                    exTrans: "Mudanças rápidas acontecem na sociedade.",
                    audioFront: "TTS: Society",
                    audioBack: "TTS: Fast changes happen in society." 
                },

                // --- Vocabulary Flashcards: Area 3 (Technology & Issues) ---
                { 
                    term: "Technology", 
                    definition: "The application of scientific knowledge for practical purposes.", 
                    defTrans: "Tecnologia",
                    example: "New technology improves our daily life.", 
                    exTrans: "<span style='color:#0077b6'>A nova tecnologia melhora nossa vida diária.</span>",
                    audioFront: "TTS: Technology",
                    audioBack: "TTS: New technology improves our daily life." 
                },
                { 
                    term: "Digital", 
                    definition: "Relating to computer technology or the use of binary data.", 
                    defTrans: "Digital",
                    example: "We use digital tools to study every day.", 
                    exTrans: "<span style='color:#0077b6'>Usamos ferramentas digitais para estudar todos os dias.</span>",
                    audioFront: "TTS: Digital",
                    audioBack: "TTS: We use digital tools to study every day." 
                },
                { 
                    term: "Online", 
                    definition: "Controlled by or connected to a computer or to the internet.", 
                    defTrans: "Online",
                    example: "Most classes moved online recently.", 
                    exTrans: "<span style='color:#0077b6'>A maioria das aulas passou a ser online recentemente.</span>",
                    audioFront: "TTS: Online",
                    audioBack: "TTS: Most classes moved online recently." 
                },
                { 
                    term: "Internet", 
                    definition: "The global computer network providing a variety of information.", 
                    defTrans: "Internet",
                    example: "The internet connects people everywhere.", 
                    exTrans: "<span style='color:#0077b6'>A internet conecta pessoas em todos os lugares.</span>",
                    audioFront: "TTS: Internet",
                    audioBack: "TTS: The internet connects people everywhere." 
                },
                { 
                    term: "Device", 
                    definition: "A thing made or adapted for a particular purpose, especially an electronic one.", 
                    defTrans: "Dispositivo / Aparelho",
                    example: "Every electronic device needs a battery.", 
                    exTrans: "<span style='color:#0077b6'>Todo dispositivo eletrônico precisa de bateria.</span>",
                    audioFront: "TTS: Device",
                    audioBack: "TTS: Every electronic device needs a battery." 
                },
                { 
                    term: "Smartphone", 
                    definition: "A mobile phone that performs many of the functions of a computer.", 
                    defTrans: "Smartphone",
                    example: "My smartphone is my main communication tool.", 
                    exTrans: "<span style='color:#0077b6'>Meu smartphone é minha principal ferramenta de comunicação.</span>",
                    audioFront: "TTS: Smartphone",
                    audioBack: "TTS: My smartphone is my main communication tool." 
                },
                { 
                    term: "Computer", 
                    definition: "An electronic device for storing and processing data.", 
                    defTrans: "Computador",
                    example: "He uses a computer for his research.", 
                    exTrans: "<span style='color:#0077b6'>Ele usa um computador para sua pesquisa.</span>",
                    audioFront: "TTS: Computer",
                    audioBack: "TTS: He uses a computer for his research." 
                },
                { 
                    term: "App", 
                    definition: "A software program that runs on a computer or mobile device.", 
                    defTrans: "Aplicativo",
                    example: "Download the new app to stay updated.", 
                    exTrans: "<span style='color:#0077b6'>Baixe o novo aplicativo para ficar atualizado.</span>",
                    audioFront: "TTS: App",
                    audioBack: "TTS: Download the new app to stay updated." 
                },
                { 
                    term: "Social Media", 
                    definition: "Websites and applications that enable users to create and share content.", 
                    defTrans: "Mídia social",
                    example: "Social media is a powerful platform.", 
                    exTrans: "<span style='color:#0077b6'>As redes sociais são uma plataforma poderosa.</span>",
                    audioFront: "TTS: Social Media",
                    audioBack: "TTS: Social media is a powerful platform." 
                },
                { 
                    term: "Information", 
                    definition: "Facts provided or learned about something or someone.", 
                    defTrans: "Informação",
                    example: "We have access to too much information.", 
                    exTrans: "<span style='color:#0077b6'>Temos acesso a informação demais.</span>",
                    audioFront: "TTS: Information",
                    audioBack: "TTS: We have access to too much information." 
                },
                { 
                    term: "Problem / Issue", 
                    definition: "A matter or situation regarded as unwelcome or harmful.", 
                    defTrans: "Problema / Questão",
                    example: "This is a major technical problem.", 
                    exTrans: "<span style='color:#0077b6'>Este é um grande problema técnico.</span>",
                    audioFront: "TTS: Problem or Issue",
                    audioBack: "TTS: This is a major technical problem." 
                },
                { 
                    term: "Challenge", 
                    definition: "A task or situation that tests someone's abilities.", 
                    defTrans: "Desafio",
                    example: "The digital divide is a big challenge.", 
                    exTrans: "<span style='color:#0077b6'>A exclusão digital é um grande desafio.</span>",
                    audioFront: "TTS: Challenge",
                    audioBack: "TTS: The digital divide is a big challenge." 
                },
                { 
                    term: "Solution", 
                    definition: "A means of solving a problem or dealing with a difficult situation.", 
                    defTrans: "Solução",
                    example: "We need to find a creative solution.", 
                    exTrans: "<span style='color:#0077b6'>Precisamos encontrar uma solução criativa.</span>",
                    audioFront: "TTS: Solution",
                    audioBack: "TTS: We need to find a creative solution." 
                },
                { 
                    term: "Pandemic", 
                    definition: "An outbreak of a disease that occurs over a wide geographic area.", 
                    defTrans: "Pandemia",
                    example: "The pandemic affected global travel.", 
                    exTrans: "<span style='color:#0077b6'>A pandemia afetou as viagens globais.</span>",
                    audioFront: "TTS: Pandemic",
                    audioBack: "TTS: The pandemic affected global travel." 
                },
                { 
                    term: "Virus", 
                    definition: "An infective agent that typically consists of a nucleic acid molecule in a protein coat.", 
                    defTrans: "Vírus",
                    example: "The virus spread quickly through the city.", 
                    exTrans: "<span style='color:#0077b6'>O vírus se espalhou rapidamente pela cidade.</span>",
                    audioFront: "TTS: Virus",
                    audioBack: "TTS: The virus spread quickly through the city." 
                },
                { 
                    term: "Misinformation", 
                    definition: "False or inaccurate information, especially that which is intended to deceive.", 
                    defTrans: "Desinformação",
                    example: "Misinformation can be very dangerous.", 
                    exTrans: "<span style='color:#0077b6'>A desinformação pode ser muito perigosa.</span>",
                    audioFront: "TTS: Misinformation",
                    audioBack: "TTS: Misinformation can be very dangerous." 
                },
                { 
                    term: "Cyberbullying", 
                    definition: "The use of electronic communication to bully a person.", 
                    defTrans: "Cyberbullying",
                    example: "We must stop cyberbullying immediately.", 
                    exTrans: "<span style='color:#0077b6'>Devemos parar o cyberbullying imediatamente.</span>",
                    audioFront: "TTS: Cyberbullying",
                    audioBack: "TTS: We must stop cyberbullying immediately." 
                },
                { 
                    term: "Isolation", 
                    definition: "The process or fact of isolating or being isolated.", 
                    defTrans: "Isolamento",
                    example: "Technology can sometimes cause isolation.", 
                    exTrans: "<span style='color:#0077b6'>A tecnologia às vezes pode causar isolamento.</span>",
                    audioFront: "TTS: Isolation",
                    audioBack: "TTS: Technology can sometimes cause isolation." 
                },
                { 
                    term: "Distraction", 
                    definition: "A thing that prevents someone from giving full attention to something else.", 
                    defTrans: "Distração",
                    example: "Constant notifications are a distraction.", 
                    exTrans: "<span style='color:#0077b6'>Notificações constantes são uma distração.</span>",
                    audioFront: "TTS: Distraction",
                    audioBack: "TTS: Constant notifications are a distraction." 
                },
                { 
                    term: "Dependence", 
                    definition: "The state of relying on or being controlled by someone or something.", 
                    defTrans: "Dependência",
                    example: "We have a growing dependence on technology.", 
                    exTrans: "<span style='color:#0077b6'>Temos uma dependência crescente da tecnologia.</span>",
                    audioFront: "TTS: Dependence",
                    audioBack: "TTS: We have a growing dependence on technology." 
                },
                { 
                    term: "Screen time", 
                    definition: "The amount of time spent using a device with a screen.", 
                    defTrans: "Tempo de tela",
                    example: "You should limit your screen time.", 
                    exTrans: "<span style='color:#0077b6'>Você deve limitar seu tempo de tela.</span>",
                    audioFront: "TTS: Screen time",
                    audioBack: "TTS: You should limit your screen time." 
                },
                { 
                    term: "Digital divide", 
                    definition: "The gap between those who have ready access to computers and the internet, and those who do not.", 
                    defTrans: "Exclusão digital",
                    example: "The digital divide separates people.", 
                    exTrans: "A exclusão digital separa as pessoas.",
                    audioFront: "TTS: Digital divide",
                    audioBack: "TTS: The digital divide separates people." 
                },
                { 
                    term: "Information overload", 
                    definition: "Exposure to or provision of too much information or data.", 
                    defTrans: "Sobrecarga de informação",
                    example: "Too many emails cause information overload.", 
                    exTrans: "Muitos e-mails causam sobrecarga de informação.",
                    audioFront: "TTS: Information overload",
                    audioBack: "TTS: Too many emails cause information overload." 
                },
                { 
                    term: "Fake News", 
                    definition: "False stories that appear to be news, spread on the internet.", 
                    defTrans: "Notícias falsas",
                    example: "Don't share fake news.", 
                    exTrans: "Não compartilhe notícias falsas.",
                    audioFront: "TTS: Fake News",
                    audioBack: "TTS: Don't share fake news." 
                },
                { 
                    term: "Addiction", 
                    definition: "The condition of being physically and mentally dependent on a substance or activity.", 
                    defTrans: "Vício",
                    example: "He is fighting his phone addiction.", 
                    exTrans: "Ele está combatendo seu vício em celular.",
                    audioFront: "TTS: Addiction",
                    audioBack: "TTS: He is fighting his phone addiction." 
                },
                { 
                    term: "Privacy concerns", 
                    definition: "Worries regarding the safety and confidentiality of personal data.", 
                    defTrans: "Preocupações com privacidade",
                    example: "Users have many privacy concerns.", 
                    exTrans: "Usuários têm muitas preocupações com a privacidade.",
                    audioFront: "TTS: Privacy concerns",
                    audioBack: "TTS: Users have many privacy concerns." 
                },

                // --- Grammar Flashcards: Step 3 (Reported Speech & Adverbs) ---
                { 
                    term: "Tense Backshift", 
                    definition: "Rule: Simple Present becomes Past; Will becomes Would; Can becomes Could.", 
                    defTrans: "Recuo Temporal (Backshift)",
                    example: "'I am changing' becomes 'He said he was changing'.", 
                    exTrans: "'Eu estou mudando' torna-se 'Ele disse que estava mudando'.",
                    audioFront: "TTS: Reported Statements: Tense Backshift",
                    audioBack: "TTS: I am changing becomes He said he was changing." 
                },
                { 
                    term: "Reported Questions", 
                    definition: "Rule: No auxiliary (do/does/did), statement word order (S+V), use if/whether for Yes/No.", 
                    defTrans: "Perguntas Indiretas",
                    example: "'Where is it?' becomes 'She asked where it was'.", 
                    exTrans: "'Onde está?' torna-se 'Ela perguntou onde estava'.",
                    audioFront: "TTS: Reported Questions: Rules",
                    audioBack: "TTS: Where is it? becomes She asked where it was." 
                },
                { 
                    term: "Time Shift", 
                    definition: "Rule: Today becomes That day; Tomorrow becomes The next day.", 
                    defTrans: "Mudança de Tempo",
                    example: "'I'll go tomorrow' becomes 'He said he'd go the next day'.", 
                    exTrans: "'Irei amanhã' torna-se 'Ele disse que iria no dia seguinte'.",
                    audioFront: "TTS: Time Shift",
                    audioBack: "TTS: Today becomes That day, and Tomorrow becomes The next day." 
                },
                { 
                    term: "Place Shift", 
                    definition: "Rule: Here becomes There; This becomes That.", 
                    defTrans: "Mudança de Lugar",
                    example: "'I'm here' becomes 'She said she was there'.", 
                    exTrans: "'Estou aqui' torna-se 'Ela disse que estava lá'.",
                    audioFront: "TTS: Place Shift",
                    audioBack: "TTS: Here becomes There, and This becomes That." 
                },
                { 
                    term: "Linking Words (Purpose)", 
                    definition: "Unless (if not) / As long as (on the condition that).", 
                    defTrans: "Conectivos (A menos que / Contanto que)",
                    example: "We won't win unless we try.", 
                    exTrans: "Não venceremos a menos que tentemos.",
                    audioFront: "TTS: Linking Words: Unless and As long as.",
                    audioBack: "TTS: We won't win unless we try." 
                }
            ] // This closes the items array
        } // This closes the Step 9 object
    ], // This closes the steps array

    // ======================================================
    // GLOSSARY (Complete & Paginated)
    // ======================================================
    glossary: [
        // --- PAGE 1: CONTEXT & TIME SHIFTS ---
        { topic: "Context", term: "last-night", definition: "The night of the previous day.", translation: "Ontem à noite" },
        { topic: "Context", term: "then", definition: "At that time; the reported version of 'now'.", translation: "Então / Naquele momento" },
        { topic: "Context", term: "last-week", definition: "The week before the current one.", translation: "Semana passada" },
        { topic: "Context", term: "the-following-week", definition: "The week after a specific event; reported version of 'next week'.", translation: "Na semana seguinte" },
        { topic: "Context", term: "drawbacks", definition: "Disadvantages or negative parts of a situation.", translation: "Desvantagens / Pontos negativos" },
        { topic: "Context", term: "article", definition: "A piece of writing included in a publication.", translation: "Artigo" },
        { topic: "Context", term: "permanent", definition: "Lasting or intended to last or remain unchanged indefinitely.", translation: "Permanente" },
        { topic: "Context", term: "wisely", definition: "In a way that shows experience, knowledge, and good judgment.", translation: "Sabiamente / Com sabedoria" },
        { topic: "Context", term: "slow-down", definition: "A decline in speed or activity.", translation: "Desacelerar / Diminuir o ritmo" },

        // --- PAGE 2: GLOBALIZATION & SOCIETY ---
        { topic: "Globalization", term: "globalization", definition: "The process by which businesses develop international influence.", translation: "Globalização" },
        { topic: "Globalization", term: "economy", definition: "The state of a country or region in terms of production.", translation: "Economia" },
        { topic: "Globalization", term: "inequality", definition: "Difference in size, degree, or circumstances; lack of equality.", translation: "Desigualdade" },
        { topic: "Globalization", term: "international", definition: "Existing or carried on between two or more nations.", translation: "Internacional" },
        { topic: "Globalization", term: "interconnectedness", definition: "The state of being connected with each other.", translation: "Interconectividade" },
        { topic: "Globalization", term: "society", definition: "The aggregate of people living together in a community.", translation: "Sociedade" },
        { topic: "Globalization", term: "global", definition: "Relating to the whole world; worldwide.", translation: "Global" },
        { topic: "Globalization", term: "growth", definition: "The process of increasing in amount, value, or importance.", translation: "Crescimento" },
        { topic: "Globalization", term: "development", definition: "The process of starting to experience or possess something; a specified state of growth.", translation: "Desenvolvimento" },
        { topic: "Globalization", term: "border", definition: "A line separating two political or geographical areas, especially countries.", translation: "Fronteira" },
        { topic: "Globalization", term: "exchange", definition: "The act of giving one thing and receiving another in return.", translation: "Troca / Intercâmbio" },
        { topic: "Globalization", term: "market", definition: "The world of commercial activity where goods and services are bought and sold.", translation: "Mercado" },
        { topic: "Globalization", term: "corporation", definition: "A large company or group of companies authorized to act as a single entity.", translation: "Corporação / Empresa" },

        // --- PAGE 3: TECHNOLOGY & ISSUES ---
        { topic: "Technology", term: "digital-divide", definition: "The gap between those with and without internet access.", translation: "Exclusão digital" },
        { topic: "Technology", term: "information-overload", definition: "Exposure to too much information or data at once.", translation: "Sobrecarga de informação" },
        { topic: "Technology", term: "fake-news", definition: "False stories spread as if they were true news.", translation: "Notícias falsas" },
        { topic: "Technology", term: "addiction", definition: "Being physically and mentally dependent on a substance or activity.", translation: "Vício" },
        { topic: "Technology", term: "device", definition: "A thing made or adapted for a particular purpose (like a phone).", translation: "Dispositivo" },
        { topic: "Technology", term: "privacy", definition: "The state of being free from public attention.", translation: "Privacidade" },
        { topic: "Technology", term: "isolation", definition: "The process or fact of being isolated or alone.", translation: "Isolamento" },
        { topic: "Technology", term: "issue", definition: "An important topic or problem for debate.", translation: "Questão / Problema" },
        { topic: "Technology", term: "challenge", definition: "A task or situation that tests someone's abilities.", translation: "Desafio" },
        { topic: "Technology", term: "social-media", definition: "Websites and apps used for sharing content and interacting.", translation: "Mídias sociais" },
        { topic: "Technology", term: "smartphone", definition: "A mobile phone that performs many of the functions of a computer.", translation: "Smartphone" },
        { topic: "Technology", term: "computer", definition: "An electronic device for storing and processing data.", translation: "Computador" },
        { topic: "Technology", term: "app", definition: "A software program that runs on a computer or mobile device.", translation: "Aplicativo / App" },
        { topic: "Technology", term: "information", definition: "Facts provided or learned about something or someone.", translation: "Informação" },
        { topic: "Technology", term: "problem", definition: "A matter or situation regarded as unwelcome or harmful and needing to be dealt with.", translation: "Problema" },
        { topic: "Technology", term: "solution", definition: "A means of solving a problem or dealing with a difficult situation.", translation: "Solução" },
        { topic: "Technology", term: "pandemic", definition: "An outbreak of a disease that occurs over a wide geographic area.", translation: "Pandemia" },
        { topic: "Technology", term: "virus", definition: "An infective agent that typically consists of a nucleic acid molecule in a protein coat.", translation: "Vírus" },
        { topic: "Technology", term: "misinformation", definition: "False or inaccurate information, especially that which is intended to deceive.", translation: "Desinformação" },
        { topic: "Technology", term: "privacy-concerns", definition: "Worries regarding the safety and confidentiality of personal data.", translation: "Preocupações com privacidade" },
        { topic: "Technology", term: "cyberbullying", definition: "The use of electronic communication to bully a person.", translation: "Cyberbullying" },
        { topic: "Technology", term: "distraction", definition: "A thing that prevents someone from giving full attention to something else.", translation: "Distração" },
        { topic: "Technology", term: "dependence", definition: "The state of relying on or being controlled by someone or something.", translation: "Dependência" },
        { topic: "Technology", term: "screen-time", definition: "The amount of time spent using a device with a screen.", translation: "Tempo de tela" },

        // --- PAGE 4: REPORTING VERBS ---
        { topic: "Verbs", term: "say", definition: "To utter words so as to convey information.", translation: "Dizer" },
        { topic: "Verbs", term: "mention", definition: "To refer to something briefly and without detail.", translation: "Mencionar" },
        { topic: "Verbs", term: "claim", definition: "To state that something is the case without providing evidence.", translation: "Alegar / Afirmar" },
        { topic: "Verbs", term: "explain", definition: "To make an idea clear by describing it in detail.", translation: "Explicar" },
        { topic: "Verbs", term: "ask", definition: "To say something in order to obtain information.", translation: "Perguntar" },
        { topic: "Verbs", term: "reply", definition: "To say something as a response to a question.", translation: "Responder" },
        { topic: "Verbs", term: "warn", definition: "To inform someone in advance of a possible danger.", translation: "Alertar / Avisar" },
        { topic: "Verbs", term: "tell", definition: "To communicate information to someone.", translation: "Contar / Dizer" },
        { topic: "Verbs", term: "suggest", definition: "To put forward an idea for consideration.", translation: "Sugerir" },
        { topic: "Verbs", term: "discuss", definition: "To talk about something with another person.", translation: "Discutir" },
        { topic: "Verbs", term: "increase", definition: "To become or make greater in size or amount.", translation: "Aumentar" },
        { topic: "Verbs", term: "regulate", definition: "To control or maintain the rate or speed of something.", translation: "Regular / Controlar" },
        { topic: "Verbs", term: "worry", definition: "To feel anxious or troubled about problems.", translation: "Preocupar-se" },
        { topic: "Verbs", term: "focus", definition: "To pay particular attention to.", translation: "Focar" },
        { topic: "Verbs", term: "agree", definition: "To have the same opinion about something.", translation: "Concordar" },
        { topic: "Verbs", term: "interact", definition: "To act in such a way as to have an effect on another.", translation: "Interagir" },

        // --- PAGE 5: GRAMMAR & LOGIC ---
        { topic: "Grammar", term: "reported-speech", definition: "A speaker's words reported in the past tense with shifts.", translation: "Discurso Indireto" },
        { topic: "Grammar", term: "adverb-shifts", definition: "The process of changing time and place words in reports.", translation: "Mudança de Advérbios" },
        { topic: "Grammar", term: "linking-words", definition: "Words used to connect ideas (condition and purpose).", translation: "Conectivos" }
    ]
});