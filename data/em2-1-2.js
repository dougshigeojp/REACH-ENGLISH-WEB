/**
 * REACH English - LESSON DATA em2-1-2
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em2-1-2", 
    grade: "High School 2nd Grade",       
    bimester: "1",   
    chapter: "2",    
    chapterTitle: "The Future, AI and Robotics", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss the evolution and impact of Artificial Intelligence and Robotics.<br>• Master Conditional Sentences (Zero, First, Second, and Third) to talk about facts and possibilities.<br>• Use advanced Linking Words for contrast, consequence, and addition.<br>• Understand and apply the Three Laws of Robotics.",
            welcome: "Hello, tech explorers! I'm Mr. D!<br>Welcome to the digital frontier! Have you ever wondered what our world would look like if robots controlled our lives? Today, we are opening the door to the fascinating realm of AI. We'll learn how to express complex ideas about technology using \"if\" sentences—from scientific facts to imaginary pasts. We will explore how automation changes our society and what advancements are waiting for us in the future. Get ready to give your English a high-tech edge! Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss the evolution and impact of Artificial Intelligence and Robotics. Master Conditional Sentences (Zero, First, Second, and Third) to talk about facts and possibilities. Use advanced Linking Words for contrast, consequence, and addition. Understand and apply the Three Laws of Robotics.",
                welcome: "TTS: Hello, tech explorers! I'm Mr. D! Welcome to the digital frontier! Have you ever wondered what our world would look like if robots controlled our lives? Today, we are opening the door to the fascinating realm of AI. We'll learn how to express complex ideas about technology using 'if' sentences—from scientific facts to imaginary pasts. We will explore how automation changes our society and what advancements are waiting for us in the future. Get ready to give your English a high-tech edge! Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Albert and Celine are in the school's computer lab. Albert is trying to fix a small programmable robot, while Celine is reading a news article about a new AI language model.", 
            contextAudio: "audio/em2-1-2/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "I finally finished the code! If you [turn on](tooltip:turn on) the power, the [robot](tooltip:robot) starts moving. It's a simple [algorithm](tooltip:algorithm), but it works!" 
                },
                { 
                    speaker: "Celine", 
                    text: "That's cool! If AI [develops](tooltip:develop) further, it will [automate](tooltip:automate) almost every type of work. I just read that some companies might [lay off](tooltip:lay off) workers because of new [software](tooltip:software)." 
                },
                { 
                    speaker: "Albert", 
                    text: "I know. [However](tooltip:however), it could make life way easier for everyone. [If we had](tooltip:if we had) robot-companions at home today, life [would be](tooltip:would be) much more comfortable, wouldn't it?" 
                },
                { 
                    speaker: "Celine", 
                    text: "[On the other hand](tooltip:on the other hand), it might be dangerous. [If scientists hadn't created](tooltip:if hadn't created) the laws, we [would have had](tooltip:would have had) many more problems with safety by now!" 
                },
                { 
                    speaker: "Albert", 
                    text: "True. We must [improve](tooltip:improve) our laws regarding [technological advances](tooltip:technological-advance). [Consequently](tooltip:consequently), the whole system may become unfair if we don't act." 
                },
                { 
                    speaker: "Celine", 
                    text: "Exactly. We need to [invest](tooltip:invest) in human resources [so that](tooltip:so that) people can learn to [control](tooltip:control) the machines." 
                },
                { 
                    speaker: "Albert", 
                    text: "I [believe](tooltip:believe) that [innovation](tooltip:innovation) should benefit humanity. [Moreover](tooltip:moreover), we need to [focus](tooltip:focus) on ethical [data](tooltip:data) use." 
                },
                { 
                    speaker: "Celine", 
                    text: "[What if](tooltip:What if...?) robots [evolve](tooltip:evolve) to have emotions? I wonder if that [would change](tooltip:would change) everything." 
                },
                { 
                    speaker: "Albert", 
                    text: "That's a deep question! [Shall we](tooltip:shall we) [discuss](tooltip:discuss) this with the teacher?" 
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
                    title: "Verbs (A-L)",
                    audio: "TTS: Achieve. Act. Add. Automate. Be. Believe. Change. Consider. Continue. Control. Could. Create. Develop. Did. Discuss. Do. Enjoy. Evolve. Exist. Explore. Fall down. Focus. Get. Give. Go. Happen. Have. Help. Imagine. Impact. Implement. Improve. Increase. Invest. Keep. Know. Lay off. Leave. Look. Lose.",
                    items: [
                        { term: "Achieve", trans: "Alcançar / Conquistar" },
                        { term: "Act", trans: "Agir" },
                        { term: "Add", trans: "Adicionar" },
                        { term: "Automate", trans: "Automatizar" },
                        { term: "Be", trans: "Ser / Estar" },
                        { term: "Believe", trans: "Acreditar" },
                        { term: "Change", trans: "Mudar" },
                        { term: "Consider", trans: "Considerar" },
                        { term: "Continue", trans: "Continuar" },
                        { term: "Control", trans: "Controlar" },
                        { term: "Could", trans: "Poderia" },
                        { term: "Create", trans: "Criar" },
                        { term: "Develop", trans: "Desenvolver" },
                        { term: "Did", trans: "Fez" },
                        { term: "Discuss", trans: "Discutir" },
                        { term: "Do", trans: "Fazer" },
                        { term: "Enjoy", trans: "Curtir / Desfrutar" },
                        { term: "Evolve", trans: "Evoluir" },
                        { term: "Exist", trans: "Existir" },
                        { term: "Explore", trans: "Explorar" },
                        { term: "Fall down", trans: "Cair / Fracassar" },
                        { term: "Focus", trans: "Focar" },
                        { term: "Get", trans: "Conseguir / Obter" },
                        { term: "Give", trans: "Dar" },
                        { term: "Go", trans: "Ir" },
                        { term: "Happen", trans: "Acontecer" },
                        { term: "Have", trans: "Ter" },
                        { term: "Help", trans: "Ajudar" },
                        { term: "Imagine", trans: "Imaginar" },
                        { term: "Impact", trans: "Impactar" },
                        { term: "Implement", trans: "Implementar" },
                        { term: "Improve", trans: "Melhorar" },
                        { term: "Increase", trans: "Aumentar" },
                        { term: "Invest", trans: "Investir" },
                        { term: "Keep", trans: "Manter / Guardar" },
                        { term: "Know", trans: "Saber / Conhecer" },
                        { term: "Lay off", trans: "Demitir" },
                        { term: "Leave", trans: "Sair / Deixar" },
                        { term: "Look", trans: "Olhar / Parecer" },
                        { term: "Lose", trans: "Perder" }
                    ]
                },
                {
                    title: "Verbs (O-W)",
                    audio: "TTS: Overheat. Play. Prefer. Produce. Provide. Read. Reduce. Regulate. See. Speak. Stop. Study. Suppose. Take. Think. Train. Use. Would.",
                    items: [
                        { term: "Overheat", trans: "Superaquecer" },
                        { term: "Play", trans: "Jogar / Brincar" },
                        { term: "Prefer", trans: "Preferir" },
                        { term: "Produce", trans: "Produzir" },
                        { term: "Provide", trans: "Fornecer" },
                        { term: "Read", trans: "Ler" },
                        { term: "Reduce", trans: "Reduzir" },
                        { term: "Regulate", trans: "Regular / Controlar" },
                        { term: "See", trans: "Ver" },
                        { term: "Speak", trans: "Falar" },
                        { term: "Stop", trans: "Parar" },
                        { term: "Study", trans: "Estudar" },
                        { term: "Suppose", trans: "Supor" },
                        { term: "Take", trans: "Tomar / Pegar" },
                        { term: "Think", trans: "Pensar" },
                        { term: "Train", trans: "Treinar" },
                        { term: "Use", trans: "Usar" },
                        { term: "Would", trans: "Iria / Faria" }
                    ]
                },
                {
                    title: "Robotics & AI Vocab",
                    audio: "TTS: Artificial Intelligence. Robotics. Machine learning. Algorithm. Automation. Robot. Neural network. Software. Hardware. Data. Innovation. Technological advance. Virtual reality. Advancement.",
                    items: [
                        { term: "Artificial Intelligence (AI)", trans: "Inteligência Artificial" },
                        { term: "Robotics", trans: "Robótica" },
                        { term: "Machine learning", trans: "Aprendizado de máquina" },
                        { term: "Algorithm", trans: "Algoritmo" },
                        { term: "Automation", trans: "Automação" },
                        { term: "Robot", trans: "Robô" },
                        { term: "Neural network", trans: "Rede neural" },
                        { term: "Software", trans: "Software" },
                        { term: "Hardware", trans: "Hardware" },
                        { term: "Data", trans: "Dados" },
                        { term: "Innovation", trans: "Inovação" },
                        { term: "Technological advance", trans: "Avanço tecnológico" },
                        { term: "Virtual reality", trans: "Realidade virtual" },
                        { term: "Advancement", trans: "Avanço" }
                    ]
                },
                {
                    title: "Expressions & Links",
                    audio: "TTS: If this happens, then that happens. If we develop AI further. If we invest in robotics. If we could have robot-companions. Could reduce work. Has dramatically evolved. Has rapidly increased. Moreover. Consequently. In order to. So that. As a result. On the other hand. Do you think if...? What if...? Could there be? However.",
                    items: [
                        { term: "If this happens, then that happens", trans: "Se isso acontece, então aquilo acontece" },
                        { term: "If we develop AI further", trans: "Se desenvolvermos ainda mais a IA" },
                        { term: "If we invest in robotics", trans: "Se investirmos em robótica" },
                        { term: "If we could have robot-companions", trans: "Se pudéssemos ter robôs como companheiros" },
                        { term: "Could reduce work", trans: "Poderia reduzir o trabalho" },
                        { term: "Has dramatically evolved", trans: "Evoluiu drasticamente" },
                        { term: "Has rapidly increased", trans: "Aumentou rapidamente" },
                        { term: "Moreover", trans: "Além disso" },
                        { term: "Consequently", trans: "Consequentemente" },
                        { term: "In order to / So that", trans: "Para que" },
                        { term: "As a result", trans: "Como resultado" },
                        { term: "On the other hand", trans: "Por outro lado" },
                        { term: "Do you think if...?", trans: "Você acha que se...?" },
                        { term: "What if...?", trans: "E se...?" },
                        { term: "Could there be?", trans: "Poderia haver?" },
                        { term: "However", trans: "No entanto / Contudo" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Verbs (A-L)",
                    audio: "TTS: We can achieve great things with AI. Governments must act to regulate technology. Please add more data to the neural network. Robots automate dangerous tasks in factories. AI is an essential part of modern life. Many experts believe that AI will help medicine. Technology will change the job market. You should consider the ethical impact of AI. We must continue to explore virtual reality. Who will control the super-intelligent machines? Robots could do all the housework for us. Developers create new apps every day. Engineers develop faster processors for hardware. Who did the research on neural networks? Let's discuss the future of automation. What can a robot do better than a human? People enjoy using virtual reality games. AI will evolve to understand complex human emotions. Does a perfect algorithm exist? We want to explore outer space with robots. If a robot falls down, it needs to stand up alone. Scientists focus on improving machine learning. Students get a lot of information online. Technology gives us many advantages. Many manual jobs will go away in the future. What will happen if robots go rogue? Computers have more processing power now. AI can help us solve climate change. Can you imagine a teacher who is a robot? High-tech devices impact our behavior. We need to implement safety rules for AI. Innovation will improve the quality of life. Use of robots will increase production speed. Countries invest millions in robotics research. Always keep your software updated. I know how to code a basic program. The factory had to lay off workers due to automation. Don't leave your data unprotected online. Future robots will look like humans. We might lose some privacy because of AI.",
                    items: [
                        { term: "Achieve", sent: "We can achieve great things with AI.", trans: "<span style='color:#0077b6'>Podemos alcançar grandes coisas com IA.</span>" },
                        { term: "Act", sent: "Governments must act to regulate technology.", trans: "<span style='color:#0077b6'>Governos devem agir para regular a tecnologia.</span>" },
                        { term: "Add", sent: "Please add more data to the neural network.", trans: "<span style='color:#0077b6'>Por favor, adicione mais dados à rede neural.</span>" },
                        { term: "Automate", sent: "Robots automate dangerous tasks in factories.", trans: "<span style='color:#0077b6'>Robôs automatizam tarefas perigosas em fábricas.</span>" },
                        { term: "Be", sent: "AI is an essential part of modern life.", trans: "<span style='color:#0077b6'>A IA é uma parte essencial da vida moderna.</span>" },
                        { term: "Believe", sent: "Many experts believe that AI will help medicine.", trans: "<span style='color:#0077b6'>Muitos especialistas acreditam que a IA ajudará a medicina.</span>" },
                        { term: "Change", sent: "Technology will change the job market.", trans: "<span style='color:#0077b6'>A tecnologia mudará o mercado de trabalho.</span>" },
                        { term: "Consider", sent: "You should consider the ethical impact of AI.", trans: "<span style='color:#0077b6'>Você deve considerar o impacto ético da IA.</span>" },
                        { term: "Continue", sent: "We must continue to explore virtual reality.", trans: "<span style='color:#0077b6'>Devemos continuar a explorar a realidade virtual.</span>" },
                        { term: "Control", sent: "Who will control the super-intelligent machines?", trans: "<span style='color:#0077b6'>Quem controlará as máquinas super inteligentes?</span>" },
                        { term: "Could", sent: "Robots could do all the housework for us.", trans: "<span style='color:#0077b6'>Robôs poderiam fazer todo o trabalho doméstico para nós.</span>" },
                        { term: "Create", sent: "Developers create new apps every day.", trans: "<span style='color:#0077b6'>Desenvolvedores criam novos apps todos os dias.</span>" },
                        { term: "Develop", sent: "Engineers develop faster processors for hardware.", trans: "<span style='color:#0077b6'>Engenheiros desenvolvem processadores mais rápidos para hardware.</span>" },
                        { term: "Did", sent: "Who did the research on neural networks?", trans: "<span style='color:#0077b6'>Quem fez a pesquisa sobre redes neurais?</span>" },
                        { term: "Discuss", sent: "Let's discuss the future of automation.", trans: "<span style='color:#0077b6'>Vamos discutir o futuro da automação.</span>" },
                        { term: "Do", sent: "What can a robot do better than a human?", trans: "<span style='color:#0077b6'>O que um robô pode fazer melhor que um humano?</span>" },
                        { term: "Enjoy", sent: "People enjoy using virtual reality games.", trans: "<span style='color:#0077b6'>As pessoas curtem usar jogos de realidade virtual.</span>" },
                        { term: "Evolve", sent: "AI will evolve to understand complex human emotions.", trans: "<span style='color:#0077b6'>A IA evoluirá para entender emoções humanas complexas.</span>" },
                        { term: "Exist", sent: "Does a perfect algorithm exist?", trans: "<span style='color:#0077b6'>Existe um algoritmo perfeito?</span>" },
                        { term: "Explore", sent: "We want to explore outer space with robots.", trans: "<span style='color:#0077b6'>Queremos explorar o espaço sideral com robôs.</span>" },
                        { term: "Fall down", sent: "If a robot falls down, it needs to stand up alone.", trans: "<span style='color:#0077b6'>Se um robô cair, ele precisa se levantar sozinho.</span>" },
                        { term: "Focus", sent: "Scientists focus on improving machine learning.", trans: "<span style='color:#0077b6'>Cientistas focam em melhorar o aprendizado de máquina.</span>" },
                        { term: "Get", sent: "Students get a lot of information online.", trans: "<span style='color:#0077b6'>Estudantes obtêm muita informação online.</span>" },
                        { term: "Give", sent: "Technology gives us many advantages.", trans: "<span style='color:#0077b6'>A tecnologia nos dá muitas vantagens.</span>" },
                        { term: "Go", sent: "Many manual jobs will go away in the future.", trans: "<span style='color:#0077b6'>Muitos empregos manuais desaparecerão no futuro.</span>" },
                        { term: "Happen", sent: "What will happen if robots go rogue?", trans: "<span style='color:#0077b6'>O que acontecerá se os robôs ficarem fora de controle?</span>" },
                        { term: "Have", sent: "Computers have more processing power now.", trans: "<span style='color:#0077b6'>Computadores têm mais poder de processamento agora.</span>" },
                        { term: "Help", sent: "AI can help us solve climate change.", trans: "<span style='color:#0077b6'>A IA pode nos ajudar a resolver a mudança climática.</span>" },
                        { term: "Imagine", sent: "Can you imagine a teacher who is a robot?", trans: "<span style='color:#0077b6'>Consegue imaginar um professor que é um robô?</span>" },
                        { term: "Impact", sent: "High-tech devices impact our behavior.", trans: "<span style='color:#0077b6'>Dispositivos de alta tecnologia impactam nosso comportamento.</span>" },
                        { term: "Implement", sent: "We need to implement safety rules for AI.", trans: "<span style='color:#0077b6'>Precisamos implementar regras de segurança para a IA.</span>" },
                        { term: "Improve", sent: "Innovation will improve the quality of life.", trans: "<span style='color:#0077b6'>A inovação melhorará a qualidade de vida.</span>" },
                        { term: "Increase", sent: "Use of robots will increase production speed.", trans: "<span style='color:#0077b6'>O uso de robôs aumentará a velocidade de produção.</span>" },
                        { term: "Invest", sent: "Countries invest millions in robotics research.", trans: "<span style='color:#0077b6'>Países investem milhões em pesquisa robótica.</span>" },
                        { term: "Keep", sent: "Always keep your software updated.", trans: "<span style='color:#0077b6'>Sempre mantenha seu software atualizado.</span>" },
                        { term: "Know", sent: "I know how to code a basic program.", trans: "<span style='color:#0077b6'>Eu sei como codificar um programa básico.</span>" },
                        { term: "Lay off", sent: "The factory had to lay off workers due to automation.", trans: "<span style='color:#0077b6'>A fábrica teve que demitir trabalhadores devido à automação.</span>" },
                        { term: "Leave", sent: "Don't leave your data unprotected online.", trans: "<span style='color:#0077b6'>Não deixe seus dados desprotegidos online.</span>" },
                        { term: "Look", sent: "Future robots will look like humans.", trans: "<span style='color:#0077b6'>Robôs futuros parecerão com humanos.</span>" },
                        { term: "Lose", sent: "We might lose some privacy because of AI.", trans: "<span style='color:#0077b6'>Podemos perder um pouco de privacidade por causa da IA.</span>" }
                    ]
                },
                {
                    title: "Verbs (O-W)",
                    audio: "TTS: If you use it too much, the hardware will overheat. Kids like to play with robot toys. Many users prefer using voice assistants. 3D printers can produce many objects. AI provides personalized learning for students. A computer can read a book in seconds. Automation will reduce the cost of production. Laws must regulate tech advancements. I can see the future through new technologies. Some robots can speak multiple languages. We cannot stop the digital revolution. You should study how neural networks function. Suppose you had a robot today, what would you do? Machines will take many manual jobs soon. Can machines actually think like humans? Engineers train AI models with huge data sets. Everyone will use AI in the future. Life would be different if we lived with robots.",
                    items: [
                        { term: "Overheat", sent: "If you use it too much, the hardware will overheat.", trans: "<span style='color:#0077b6'>Se você usar demais, o hardware vai superaquecer.</span>" },
                        { term: "Play", sent: "Kids like to play with robot toys.", trans: "<span style='color:#0077b6'>Crianças gostam de brincar com robôs de brinquedo.</span>" },
                        { term: "Prefer", sent: "Many users prefer using voice assistants.", trans: "<span style='color:#0077b6'>Muitos usuários preferem usar assistentes de voz.</span>" },
                        { term: "Produce", sent: "3D printers can produce many objects.", trans: "<span style='color:#0077b6'>Impressoras 3D podem produzir muitos objetos.</span>" },
                        { term: "Provide", sent: "AI provides personalized learning for students.", trans: "<span style='color:#0077b6'>A IA fornece aprendizado personalizado para os estudantes.</span>" },
                        { term: "Read", sent: "A computer can read a book in seconds.", trans: "<span style='color:#0077b6'>Um computador pode ler um livro em segundos.</span>" },
                        { term: "Reduce", sent: "Automation will reduce the cost of production.", trans: "<span style='color:#0077b6'>A automação reduzirá o custo de produção.</span>" },
                        { term: "Regulate", sent: "Laws must regulate tech advancements.", trans: "<span style='color:#0077b6'>As leis devem regular os avanços tecnológicos.</span>" },
                        { term: "See", sent: "I can see the future through new technologies.", trans: "<span style='color:#0077b6'>Consigo ver o futuro através das novas tecnologias.</span>" },
                        { term: "Speak", sent: "Some robots can speak multiple languages.", trans: "<span style='color:#0077b6'>Alguns robôs podem falar várias línguas.</span>" },
                        { term: "Stop", sent: "We cannot stop the digital revolution.", trans: "<span style='color:#0077b6'>Não podemos parar a revolução digital.</span>" },
                        { term: "Study", sent: "You should study how neural networks function.", trans: "<span style='color:#0077b6'>Você deve estudar como as redes neurais funcionam.</span>" },
                        { term: "Suppose", sent: "Suppose you had a robot today, what would you do?", trans: "<span style='color:#0077b6'>Suponha que você tivesse um robô hoje, o que você faria?</span>" },
                        { term: "Take", sent: "Machines will take many manual jobs soon.", trans: "<span style='color:#0077b6'>As máquinas assumirão muitos empregos manuais em breve.</span>" },
                        { term: "Think", sent: "Can machines actually think like humans?", trans: "<span style='color:#0077b6'>As máquinas podem realmente pensar como humanos?</span>" },
                        { term: "Train", sent: "Engineers train AI models with huge data sets.", trans: "<span style='color:#0077b6'>Engenheiros treinam modelos de IA com grandes conjuntos de dados.</span>" },
                        { term: "Use", sent: "Everyone will use AI in the future.", trans: "<span style='color:#0077b6'>Todo mundo usará IA no futuro.</span>" },
                        { term: "Would", sent: "Life would be different if we lived with robots.", trans: "<span style='color:#0077b6'>A vida seria diferente se vivêssemos com robôs.</span>" }
                    ]
                },
                {
                    title: "Robotics & AI Vocab",
                    audio: "TTS: AI can analyze data faster than any human. My brother is studying robotics at university. Machine learning helps computers improve over time. A social media algorithm chooses what you see. Automation increases factory efficiency. This small robot can vacuum the whole floor. A neural network works like a human brain. You need to download the latest software. The computer's hardware is very powerful. Scientists analyze huge amounts of data. Constant innovation is necessary in the tech world. Every technological advance brings new challenges. I felt like I was in a movie using virtual reality. The advancement of science is inevitable.",
                    items: [
                        { term: "AI", sent: "AI can analyze data faster than any human.", trans: "<span style='color:#0077b6'>A IA pode analisar dados mais rápido que qualquer humano.</span>" },
                        { term: "Robotics", sent: "My brother is studying robotics at university.", trans: "<span style='color:#0077b6'>Meu irmão está estudando robótica na universidade.</span>" },
                        { term: "Machine learning", sent: "Machine learning helps computers improve over time.", trans: "<span style='color:#0077b6'>O aprendizado de máquina ajuda os computadores a melhorarem com o tempo.</span>" },
                        { term: "Algorithm", sent: "A social media algorithm chooses what you see.", trans: "<span style='color:#0077b6'>Um algoritmo de rede social escolhe o que você vê.</span>" },
                        { term: "Automation", sent: "Automation increases factory efficiency.", trans: "<span style='color:#0077b6'>A automação aumenta a eficiência da fábrica.</span>" },
                        { term: "Robot", sent: "This small robot can vacuum the whole floor.", trans: "<span style='color:#0077b6'>Este pequeno robô pode aspirar o chão inteiro.</span>" },
                        { term: "Neural network", sent: "A neural network works like a human brain.", trans: "<span style='color:#0077b6'>Uma rede neural funciona como um cérebro humano.</span>" },
                        { term: "Software", sent: "You need to download the latest software.", trans: "<span style='color:#0077b6'>Você precisa baixar o software mais recente.</span>" },
                        { term: "Hardware", sent: "The computer's hardware is very powerful.", trans: "<span style='color:#0077b6'>O hardware do computador é muito potente.</span>" },
                        { term: "Data", sent: "Scientists analyze huge amounts of data.", trans: "<span style='color:#0077b6'>Cientistas analisam enormes quantidades de dados.</span>" },
                        { term: "Innovation", sent: "Constant innovation is necessary in the tech world.", trans: "<span style='color:#0077b6'>Inovação constante é necessária no mundo da tecnologia.</span>" },
                        { term: "Technological advance", sent: "Every technological advance brings new challenges.", trans: "<span style='color:#0077b6'>Todo avanço tecnológico traz novos desafios.</span>" },
                        { term: "Virtual reality", sent: "I felt like I was in a movie using virtual reality.", trans: "<span style='color:#0077b6'>Senti como se estivesse em um filme usando realidade virtual.</span>" },
                        { term: "Advancement", sent: "The advancement of science is inevitable.", trans: "<span style='color:#0077b6'>O avanço da ciência é inevitável.</span>" }
                    ]
                },
                {
                    title: "Expressions & Links",
                    audio: "TTS: If this happens, then that happens automatically. I study hard in order to learn about coding. On the other hand, we need to protect our jobs. What if robots do everything for us?",
                    items: [
                        { term: "If this happens, then that happens", sent: "Albert: If this happens, then that happens automatically. Celine: Yes, that's how the program works!", trans: "<span style='color:#0077b6'>Se isso acontece, então aquilo acontece automaticamente.</span>" },
                        { term: "In order to", sent: "I study hard in order to learn about coding.", trans: "<span style='color:#0077b6'>Estudo muito a fim de aprender sobre programação.</span>" },
                        { term: "On the other hand", sent: "AI is great. On the other hand, we need to protect our jobs.", trans: "<span style='color:#0077b6'>IA é ótima. Por outro lado, precisamos proteger nossos empregos.</span>" },
                        { term: "What if...?", sent: "What if robots do everything for us?", trans: "<span style='color:#0077b6'>E se os robôs fizessem tudo por nós?</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills
            drills: [
                // Exercise Set 1: Verbs
                {
                    type: "mcq",
                    q: "To _______ means to make something operate automatically by using machines.",
                    options: [
                        { t: "Automate", c: true },
                        { t: "Overheat", c: false },
                        { t: "Read", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If we don't _______ our resources, we will lose them.",
                    options: [
                        { t: "Regulate", c: true },
                        { t: "Fall down", c: false },
                        { t: "Give up", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Engineers _______ AI models with large amounts of data.",
                    options: [
                        { t: "Play", c: false },
                        { t: "Train", c: true },
                        { t: "Leave", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The factory had to _______ 50 workers because of the new robots.",
                    options: [
                        { t: "Achieve", c: false },
                        { t: "Lay off", c: true },
                        { t: "Improve", c: false }
                    ]
                },

                // Exercise Set 2: Vocabularies
                {
                    type: "mcq",
                    q: "The physical parts of a computer are called _______.",
                    options: [
                        { t: "Software", c: false },
                        { t: "Hardware", c: true },
                        { t: "Algorithm", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A system that mimics the human brain is a _______.",
                    options: [
                        { t: "Neural network", c: true },
                        { t: "Virtual reality", c: false },
                        { t: "Robot", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ allows machines to learn from experience.",
                    options: [
                        { t: "Innovation", c: false },
                        { t: "Machine learning", c: true },
                        { t: "Data", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "A set of rules that a computer follows is an _______.",
                    options: [
                        { t: "Algorithm", c: true },
                        { t: "Advancement", c: false },
                        { t: "Robotics", c: false }
                    ]
                },

                // Exercise Set 3: Expressions & Logic
                {
                    type: "mcq",
                    q: "'_______ we develop AI further, we will face more risks.'",
                    options: [
                        { t: "If", c: true },
                        { t: "However", c: false },
                        { t: "Moreover", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "AI is useful. _______, it can be dangerous if not regulated.",
                    options: [
                        { t: "Consequently", c: false },
                        { t: "However", c: true },
                        { t: "In order to", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "We need better laws _______ protect our privacy.",
                    options: [
                        { t: "In order to", c: true },
                        { t: "As a result", c: false },
                        { t: "On the other hand", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Technology _______ in recent years.",
                    options: [
                        { t: "has dramatically evolved", c: true },
                        { t: "could reduce work", c: false },
                        { t: "if this happens", c: false }
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
                    title: "Zero & First Conditionals",
                    audio: "TTS: Zero conditional is for general truths and habits. If a machine overheats, it stops working. First conditional is for real future possibilities. If we invest in robotics, production will increase.",
                    explanation: "Conditionals describe the result of a certain condition.<br><br><b>Zero Conditional (If + Present, Present):</b> Used for things that are always true (facts, habits).<br><b>First Conditional (If + Present, Will):</b> Used for likely situations in the future.<br><br><span style='color:#0077b6; font-style:italic;'>(Condicionais descrevem o resultado de uma certa condição.<br><br><b>Zero Conditional:</b> Usado para coisas que são sempre verdadeiras.<br><b>First Conditional:</b> Usado para situações prováveis no futuro.)</span>",
                    samples: [
                        { en: "(Zero) If a machine overheats, it stops working.", pt: "<span style='color:#0077b6'>(Se uma máquina superaquece, ela para de funcionar.)</span>" },
                        { en: "(First) If we invest in robotics, production will increase.", pt: "<span style='color:#0077b6'>(Se investirmos em robótica, a produção aumentará.)</span>" }
                    ]
                },
                {
                    title: "Second & Third Conditionals",
                    audio: "TTS: Second and Third conditionals are for imaginary situations. Second Conditional is for hypothetical present or future. If I were you, I would study. Third Conditional is for unreal past regrets. If I had known, I would have invested.",
                    explanation: "These are used for imaginary situations or past regrets.<br><br><b>Second Conditional (If + Past, Would):</b> Dreams about things that are NOT true now.<br><b>Third Conditional (If + Past Perfect, Would Have):</b> Imagining how a past event could have been different.<br><br><span style='color:#0077b6; font-style:italic;'>(Estes são usados para situações imaginárias ou arrependimentos do passado.<br><br><b>Second Conditional:</b> Sonhando com coisas que NÃO são verdade agora.<br><b>Third Conditional:</b> Imaginando como um evento passado poderia ter sido diferente.)</span>",
                    samples: [
                        { en: "(Second) If I were you, I would study machine learning.", pt: "<span style='color:#0077b6'>(Se eu fosse você, eu estudaria aprendizado de máquina.)</span>" },
                        { en: "(Third) If I had known about the advancement, I would have invested earlier.", pt: "<span style='color:#0077b6'>(Se eu soubesse do avanço, teria investido antes.)</span>" }
                    ]
                },
                {
                    title: "Linking Words (Contrast)",
                    audio: "TTS: We use linking words to show contrast. However. On the other hand. Nevertheless.",
                    explanation: "These words connect ideas to show contrast.<br><br><span style='color:#0077b6; font-style:italic;'>(Estas palavras ligam ideias para mostrar contraste.)</span>",
                    samples: [
                        { en: "AI is very fast. <b>However</b>, it lacks human creativity.", pt: "<span style='color:#0077b6'>A IA é muito rápida. No entanto, lhe falta criatividade humana.</span>" },
                        { en: "Automation saves time. <b>On the other hand</b>, it might take jobs.", pt: "<span style='color:#0077b6'>A automação economiza tempo. Por outro lado, pode tirar empregos.</span>" },
                        { en: "The hardware is expensive. <b>Nevertheless</b>, it is a good investment.", pt: "<span style='color:#0077b6'>O hardware é caro. Contudo, é um bom investimento.</span>" }
                    ]
                },
                {
                    title: "Linking Words (Consequence)",
                    audio: "TTS: We use linking words to show consequence. Therefore. As a result. Consequently. So that.",
                    explanation: "These words connect a cause with its result.<br><br><span style='color:#0077b6; font-style:italic;'>(Estas palavras conectam uma causa com seu resultado.)</span>",
                    samples: [
                        { en: "The battery is low; <b>therefore</b>, the robot must stop.", pt: "<span style='color:#0077b6'>A bateria está baixa; portanto, o robô deve parar.</span>" },
                        { en: "We lost the data. <b>As a result</b>, the experiment failed.", pt: "<span style='color:#0077b6'>Perdemos os dados. Como resultado, o experimento falhou.</span>" },
                        { en: "The software was updated. <b>Consequently</b>, it works better.", pt: "<span style='color:#0077b6'>O software foi atualizado. Consequentemente, funciona melhor.</span>" }
                    ]
                },
                {
                    title: "Linking Words (Addition)",
                    audio: "TTS: We use linking words to add information. Moreover. Furthermore. Also. In addition. Besides.",
                    explanation: "These words add more information to an idea.<br><br><span style='color:#0077b6; font-style:italic;'>(Estas palavras adicionam mais informação a uma ideia.)</span>",
                    samples: [
                        { en: "This algorithm is efficient. <b>Moreover</b>, it is very secure.", pt: "<span style='color:#0077b6'>Este algoritmo é eficiente. Além disso, é muito seguro.</span>" },
                        { en: "Tech is changing fast. <b>Furthermore</b>, it is everywhere.", pt: "<span style='color:#0077b6'>A tecnologia está mudando rápido. Além do mais, está em todo lugar.</span>" },
                        { en: "<b>Besides</b> being smart, this robot is helpful.", pt: "<span style='color:#0077b6'>Além de ser inteligente, este robô é prestativo.</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Second Conditional",
                    audio: "audio/em2-1-2/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Celine, if you could have a robot-companion, what would it do?", 
                            pt: "<span style='color:#0077b6'>Celine, se você pudesse ter um robô-companheiro, o que ele faria?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "If I had one, it would automate all my chores. Moreover, it would help me study.", 
                            pt: "<span style='color:#0077b6'>Se eu tivesse um, ele automatizaria minhas tarefas. Além disso, me ajudaria a estudar.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Third Conditional",
                    audio: "audio/em2-1-2/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "If the company had implemented innovation sooner, they wouldn't have lost money.", 
                            pt: "<span style='color:#0077b6'>Se a empresa tivesse implementado inovação antes, não teria perdido dinheiro.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "True. Consequently, they wouldn't have laid off so many workers.", 
                            pt: "<span style='color:#0077b6'>Verdade. Consequentemente, não teriam demitido tantos trabalhadores.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Zero & First Conditionals",
                    audio: "audio/em2-1-2/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "If the CPU overheats, the hardware stops. It's a safety rule.", 
                            pt: "<span style='color:#0077b6'>Se a CPU superaquece, o hardware para. É uma regra de segurança.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "I see. If we train the neural network correctly, it will improve the system next week!", 
                            pt: "<span style='color:#0077b6'>Entendo. Se treinarmos a rede neural corretamente, ela melhorará o sistema semana que vem!</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ
            grammarDrills: [
                // Exercise Set 1: Zero & First Conditionals
                {
                    type: "mcq",
                    q: "If you _______ (delete) the software, the computer _______ (not/work).",
                    options: [
                        { t: "deleted / wouldn't work", c: false },
                        { t: "delete / doesn't work", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "If the robot _______ (see) a human in danger, it _______ (act) to help.",
                    options: [
                        { t: "saw / would act", c: false },
                        { t: "sees / will act", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "If they _______ (invest) in innovation now, they _______ (achieve) more results next year.",
                    options: [
                        { t: "invested / achieved", c: false },
                        { t: "invest / will achieve", c: true }
                    ]
                },

                // Exercise Set 2: Second & Third Conditionals
                {
                    type: "mcq",
                    q: "If I _______ (be) a robot, I _______ (read) 100 books a day.",
                    options: [
                        { t: "am / will read", c: false },
                        { t: "were / would read", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "If technology _______ (not/exist), life _______ (be) very different today.",
                    options: [
                        { t: "doesn't exist / is", c: false },
                        { t: "didn't exist / would be", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "If I _______ (save) the data before, I _______ (not/lose) my work yesterday.",
                    options: [
                        { t: "saved / didn't lose", c: false },
                        { t: "had saved / wouldn't have lost", c: true }
                    ]
                },

                // Exercise Set 3: Linking Words
                {
                    type: "mcq",
                    q: "AI is efficient. _______, it lacks human emotions.",
                    options: [
                        { t: "Therefore", c: false },
                        { t: "However", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "The robot fell down. _______, its internal sensors broke.",
                    options: [
                        { t: "As a result", c: true },
                        { t: "Moreover", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "We need powerful hardware. _______, we need complex software.",
                    options: [
                        { t: "Nevertheless", c: false },
                        { t: "In addition", c: true }
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
                    text: "If you press the button, the robot starts.<br><small style='color:#0077b6'>(Se você aperta o botão, o robô começa.)</small>", 
                    audio: "TTS: If you press the button, the robot starts.", 
                    arrow: "↘" 
                },
                { 
                    text: "If we develop AI further, it will automate work.<br><small style='color:#0077b6'>(Se desenvolvermos mais a IA, ela automatizará o trabalho.)</small>", 
                    audio: "TTS: If we develop AI further, it will automate work.", 
                    arrow: "↘" 
                },
                { 
                    text: "If I were a scientist, I would create a companion.<br><small style='color:#0077b6'>(Se eu fosse cientista, eu criaria um companheiro.)</small>", 
                    audio: "TTS: If I were a scientist, I would create a companion.", 
                    arrow: "↘" 
                },
                { 
                    text: "If they had invested more, would they have succeeded?<br><small style='color:#0077b6'>(Se eles tivessem investido mais, eles teriam tido sucesso?)</small>", 
                    audio: "TTS: If they had invested more, would they have succeeded?", 
                    arrow: "↗" 
                },
                { 
                    text: "AI is useful; nevertheless, it has many risks.<br><small style='color:#0077b6'>(A IA é útil; contudo, ela tem muitos riscos.)</small>", 
                    audio: "TTS: AI is useful; nevertheless, it has many risks.", 
                    arrow: "↘" 
                },
                { 
                    text: "What if robots do everything for us in the future?<br><small style='color:#0077b6'>(E se os robôs fizerem tudo por nós no futuro?)</small>", 
                    audio: "TTS: What if robots do everything for us in the future?", 
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
                    instruction: "Listen to Albert describing a futuristic scenario and type the missing words.<br><small style='color:#0077b6'>(Ouça Albert descrevendo um cenário futurista e digite as palavras que faltam.)</small>",
                    audio: "TTS: I was thinking about the future of robotics. If we had robot-companions today, our lives would be much easier. However, if scientists hadn't created the Three Laws of Robotics, we would have had safety issues. We need to improve our software so that it benefits everyone.",
                    text: "I was thinking about the future of [robotics]. [If] we [had] robot-companions today, our lives [would] be much easier. [However], if scientists [hadn't] created the Three Laws of [Robotics], we would have [had] safety issues. We need to [improve] our [software] [so that] it benefits everyone."
                },
                // Drill 2: Listen and Complete (Dropdown) - CORRECTED & NEW FORMAT
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue between Celine and a Lab Researcher and choose the correct options.<br><small style='color:#0077b6'>(Ouça o diálogo entre Celine e um Pesquisador de Laboratório e escolha as opções corretas.)</small>",
                    audio: "audio/em2-1-2/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "<b>Celine:</b> Do you think the [algorithm*|software|data] [will change*|changes|changed] if we add more [data*|hardware|innovation]?"
                        },
                        { 
                            q: "<b>Researcher:</b> Yes. [Consequently*|Moreover|Besides], the system [will become*|became|would become] more efficient." 
                        },
                        { 
                            q: "<b>Celine:</b> [Suppose*|If|What if] you [had*|have|will have] more resources, [would*|will|have] you [automate*|automated|automating] the whole lab?"
                        },
                        { 
                            q: "<b>Researcher:</b> Definitely! [Innovation*|Automation|Hardware] is our priority." 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the logical response based on the conditionals.<br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta lógica baseada nos condicionais estudados.)</small>",
                    audio: "TTS: What would have happened if they hadn't updated the software yesterday?",
                    options: [
                        { t: "If they update it, it works.", c: false },
                        { t: "It will automate the work next week.", c: false },
                        { t: "The system would have crashed immediately.", c: true },
                        { t: "I prefer using virtual reality.", c: false }
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
                    title: "6a: Narration - The AI Revolution",
                    audio: "TTS: The world of Artificial Intelligence has dramatically evolved in recent years. Many factories now use automation to increase production. If a company invests in new hardware, its efficiency increases automatically. This is a technological advance that helps the economy. However, it can also lead to job loss. If governments don't act to regulate these advancements, society will face difficult challenges. We must train human resources so that people can work together with machines.",
                    body: "The world of Artificial Intelligence has dramatically evolved in recent years. Many factories now use automation to increase production. If a company invests in new hardware, its efficiency increases automatically. This is a technological advance that helps the economy. However, it can also lead to job loss. If governments don't act to regulate these advancements, society will face difficult challenges. We must train human resources so that people can work together with machines.",
                    questions: [
                        { q: "What happens if a company invests in new hardware?", options: [ {t:"Its efficiency decreases.", c:false}, {t:"Its efficiency increases automatically.", c:true}, {t:"It will lay off all workers today.", c:false} ] },
                        { q: "What is the consequence if governments don't act?", options: [ {t:"Society will face challenges.", c:true}, {t:"Technology would have stopped.", c:false}, {t:"The algorithm is perfect.", c:false} ] },
                        { q: "What is the purpose of training human resources?", options: [ {t:"In order to stop innovation.", c:false}, {t:"So that people can work with machines.", c:true}, {t:"To overheat the software.", c:false} ] }
                    ]
                },
                {
                    title: "6b: Dialogue - Ethics and Robots",
                    audio: "audio/em2-1-2/p6_text2.mp3",
                    body: "<b>Albert:</b> Celine, if you were a developer, would you create an emotional robot?<br><b>Celine:</b> I'm not sure. On the other hand, if robots had feelings, they would be better companions.<br><b>Albert:</b> I agree. But if a robot had felt angry yesterday, it might have broken the Second Law of Robotics.<br><b>Celine:</b> True. Nevertheless, we need innovation. Suppose we hadn't developed machine learning yet; medicine would be much slower.<br><b>Albert:</b> You're right. As a result of our research, we are moving forward.",
                    questions: [
                        { q: "What is Albert's hypothetical question?", options: [ {t:"If Celine is a robot.", c:false}, {t:"If Celine would create an emotional robot.", c:true}, {t:"If the software failed.", c:false} ] },
                        { q: "What is the consequence of not having machine learning?", options: [ {t:"Medicine would be slower.", c:true}, {t:"Robots will automate everything.", c:false}, {t:"The data had been lost.", c:false} ] },
                        { q: "What linking word does Celine use to show contrast?", options: [ {t:"Moreover.", c:false}, {t:"Consequently.", c:false}, {t:"Nevertheless.", c:true} ] }
                    ]
                },
                {
                    title: "6c: Description - The Smart Factory",
                    audio: "TTS: This is an analysis of a modern smart factory. Everything is controlled by a central neural network. If any part of the hardware overheats, the software shuts it down immediately. Last year, the system would have failed if the engineers hadn't implemented a new algorithm. Furthermore, the factory uses virtual reality to train new workers. As a result, the number of accidents has rapidly decreased. It is a perfect example of innovation.",
                    body: "This is an analysis of a modern smart factory. Everything is controlled by a central neural network. If any part of the hardware overheats, the software shuts it down immediately. Last year, the system would have failed if the engineers hadn't implemented a new algorithm. Furthermore, the factory uses virtual reality to train new workers. As a result, the number of accidents has rapidly decreased. It is a perfect example of innovation.",
                    questions: [
                        { q: "What controls the smart factory?", options: [ {t:"A human manager.", c:false}, {t:"A central neural network.", c:true}, {t:"A robot-companion.", c:false} ] },
                        { q: "What would have happened without the new algorithm?", options: [ {t:"The system would have failed.", c:true}, {t:"The data will be safe.", c:false}, {t:"Workers would enjoy more time.", c:false} ] },
                        { q: "What is the result of using virtual reality for training?", options: [ {t:"Accidents have rapidly increased.", c:false}, {t:"Accidents have rapidly decreased.", c:true}, {t:"The software overheats.", c:false} ] }
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
                // Drill 1: Multiple Choice (Linking Words)
                {
                    type: "mcq",
                    instruction: "Choose the best linking word to complete the logic.",
                    q: "AI can help us save energy. _______, it can optimize traffic in big cities.",
                    options: [
                        { t: "However", c: false },
                        { t: "Moreover", c: true },
                        { t: "Consequently", c: false }
                    ]
                },
                {
                    type: "mcq",
                    instruction: "Choose the best linking word.",
                    q: "The robot's battery died; _______, it stopped moving in the middle of the hall.",
                    options: [
                        { t: "Therefore", c: true },
                        { t: "Nevertheless", c: false },
                        { t: "Although", c: false }
                    ]
                },
                // Drill 2: Word Order (Conditionals)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a Second Conditional sentence.",
                    sentence: "robots / we / had / if / work / wouldn't / we / .",
                    correct: "If we had robots we wouldn't work ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "I / you / if / were / study / I / would / robotics / .",
                    correct: "If I were you I would study robotics ."
                },
                // Drill 3: Find the Mistake (Clickable Error)
                {
                    type: "clickable-error",
                    instruction: "Find the mistake in the Third Conditional sentence.",
                    sentence: "If I [have](error:had) known about the AI course, I would have joined it."
                },
                {
                    type: "clickable-error",
                    instruction: "Find the mistake.",
                    sentence: "We would have succeeded if we [train](error:had trained) the algorithm better."
                },
                // Drill 4: Dialogue Scramble
                {
                    type: "dialogue-scramble",
                    instruction: "Order the sentences to create a logical conversation.",
                    items: [
                        "If I had a robot, I would ask it to clean my room.",
                        "What would you do if you won a high-tech android?",
                        "That's a good one! I would also use it to study.",
                        "Moreover, it could help me with my coding homework."
                    ],
                    correctOrder: [
                        "What would you do if you won a high-tech android?",
                        "If I had a robot, I would ask it to clean my room.",
                        "That's a good one! I would also use it to study.",
                        "Moreover, it could help me with my coding homework."
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Now it's your turn to imagine the future! Write a short paragraph (5-7 sentences) about a robot you would like to have. What would it be like? What would it do?<br><br><small><span style='color:#0077b6'>(Agora é a sua vez de imaginar o futuro! Escreva um pequeno parágrafo (5-7 frases) sobre um robô que você gostaria de ter. Como ele seria? O que ele faria?)</span></small>",
            example: "\"If I had a robot, it would look like a small metallic dog. I would name it 'Cyber'. Moreover, it would help me organize my [data] and files. If I were tired, it would provide me with music to relax. However, I wouldn't let it do my homework because I want to learn. It would be the best innovation in my life!\"<br><br><small><span style='color:#0077b6'>(\"Se eu tivesse um robô, ele pareceria um cachorrinho metálico. Eu o chamaria de 'Cyber'. Além disso, ele me ajudaria a organizar meus dados e arquivos. Se eu estivesse cansado, ele me forneceria música para relaxar. No entanto, eu não o deixaria fazer minha lição de casa porque quero aprender. Seria a melhor inovação da minha vida!\")</span></small>",
            prompts: [
                "Use at least one [Second Conditional] sentence.<br><small><span style='color:#0077b6'>(Use pelo menos uma frase no Second Conditional.)</span></small>",
                "Use at least two [Linking Words] (e.g., Moreover, However).<br><small><span style='color:#0077b6'>(Use pelo menos dois Conectivos. Ex: Moreover, However).</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Verbs A-L)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Verbs (A-L) ---
                { term: "Achieve", definition: "To successfully bring about a desired objective.", defTrans: "Alcançar / Conquistar", example: "We can achieve great things with AI.", audioFront: "TTS: Achieve", audioBack: "TTS: We can achieve great things with AI." },
                { term: "Act", definition: "To take action or do something for a purpose.", defTrans: "Agir", example: "Governments must act to regulate technology.", audioFront: "TTS: Act", audioBack: "TTS: Governments must act to regulate technology." },
                { term: "Add", definition: "To join something to something else.", defTrans: "Adicionar", example: "Please add more data to the neural network.", audioFront: "TTS: Add", audioBack: "TTS: Please add more data to the neural network." },
                { term: "Automate", definition: "To make a process operate by largely automatic equipment.", defTrans: "Automatizar", example: "Robots automate dangerous tasks in factories.", audioFront: "TTS: Automate", audioBack: "TTS: Robots automate dangerous tasks in factories." },
                { term: "Be", definition: "To exist or occupy a position.", defTrans: "Ser / Estar", example: "AI is an essential part of modern life.", audioFront: "TTS: Be", audioBack: "TTS: AI is an essential part of modern life." },
                { term: "Believe", definition: "To accept that something is true, especially without proof.", defTrans: "Acreditar", example: "Many experts believe that AI will help medicine.", audioFront: "TTS: Believe", audioBack: "TTS: Many experts believe that AI will help medicine." },
                { term: "Change", definition: "To make or become different over time.", defTrans: "Mudar", example: "Technology will change the job market.", audioFront: "TTS: Change", audioBack: "TTS: Technology will change the job market." },
                { term: "Consider", definition: "To think carefully about something before making a decision.", defTrans: "Considerar", example: "You should consider the ethical impact of AI.", audioFront: "TTS: Consider", audioBack: "TTS: You should consider the ethical impact of AI." },
                { term: "Continue", definition: "To persist in an activity or process.", defTrans: "Continuar", example: "We must continue to explore virtual reality.", audioFront: "TTS: Continue", audioBack: "TTS: We must continue to explore virtual reality." },
                { term: "Control", definition: "The power to influence or direct people's behavior.", defTrans: "Controlar", example: "Who will control the super-intelligent machines?", audioFront: "TTS: Control", audioBack: "TTS: Who will control the super-intelligent machines?" },
                { term: "Could", definition: "Used to indicate possibility or past ability.", defTrans: "Poderia", example: "Robots could do all the housework for us.", audioFront: "TTS: Could", audioBack: "TTS: Robots could do all the housework for us." },
                { term: "Create", definition: "To bring something into existence.", defTrans: "Criar", example: "Developers create new apps every day.", audioFront: "TTS: Create", audioBack: "TTS: Developers create new apps every day." },
                { term: "Develop", definition: "To grow or cause to grow and become more mature.", defTrans: "Desenvolver", example: "Engineers develop faster processors for hardware.", audioFront: "TTS: Develop", audioBack: "TTS: Engineers develop faster processors for hardware." },
                { term: "Did", definition: "Past tense of 'do'.", defTrans: "Fez", example: "Who did the research on neural networks?", audioFront: "TTS: Did", audioBack: "TTS: Who did the research on neural networks?" },
                { term: "Discuss", definition: "To talk about something with another person or group.", defTrans: "Discutir", example: "Let's discuss the future of automation.", audioFront: "TTS: Discuss", audioBack: "TTS: Let's discuss the future of automation." },
                { term: "Do", definition: "To perform an action.", defTrans: "Fazer", example: "What can a robot do better than a human?", audioFront: "TTS: Do", audioBack: "TTS: What can a robot do better than a human?" },
                { term: "Enjoy", definition: "To take delight or pleasure in.", defTrans: "Curtir / Desfrutar", example: "People enjoy using virtual reality games.", audioFront: "TTS: Enjoy", audioBack: "TTS: People enjoy using virtual reality games." },
                { term: "Evolve", definition: "To develop gradually to a more complex form.", defTrans: "Evoluir", example: "AI will evolve to understand complex human emotions.", audioFront: "TTS: Evolve", audioBack: "TTS: AI will evolve to understand complex human emotions." },
                { term: "Exist", definition: "To have objective reality or being.", defTrans: "Existir", example: "Does a perfect algorithm exist?", audioFront: "TTS: Exist", audioBack: "TTS: Does a perfect algorithm exist?" },
                { term: "Explore", definition: "To travel in or through an unfamiliar area to learn about it.", defTrans: "Explorar", example: "We want to explore outer space with robots.", audioFront: "TTS: Explore", audioBack: "TTS: We want to explore outer space with robots." },
                { term: "Fall down", definition: "To drop to the ground / to fail in an attempt.", defTrans: "Cair / Fracassar", example: "If a robot falls down, it needs to stand up alone.", audioFront: "TTS: Fall down", audioBack: "TTS: If a robot falls down, it needs to stand up alone." },
                { term: "Focus", definition: "To be the center of interest or activity.", defTrans: "Focar", example: "Scientists focus on improving machine learning.", audioFront: "TTS: Focus", audioBack: "TTS: Scientists focus on improving machine learning." },
                { term: "Get", definition: "To come to have or hold something; receive.", defTrans: "Conseguir / Obter", example: "Students get a lot of information online.", audioFront: "TTS: Get", audioBack: "TTS: Students get a lot of information online." },
                { term: "Give", definition: "To freely transfer the possession of something to someone.", defTrans: "Dar", example: "Technology gives us many advantages.", audioFront: "TTS: Give", audioBack: "TTS: Technology gives us many advantages." },
                { term: "Go", definition: "To move from one place to another.", defTrans: "Ir", example: "Many manual jobs will go away in the future.", audioFront: "TTS: Go", audioBack: "TTS: Many manual jobs will go away in the future." },
                { term: "Happen", definition: "To take place; occur.", defTrans: "Acontecer", example: "What will happen if robots go rogue?", audioFront: "TTS: Happen", audioBack: "TTS: What will happen if robots go rogue?" },
                { term: "Have", definition: "To possess, own, or hold.", defTrans: "Ter", example: "Computers have more processing power now.", audioFront: "TTS: Have", audioBack: "TTS: Computers have more processing power now." },
                { term: "Help", definition: "To make it easier for someone by offering one's services.", defTrans: "Ajudar", example: "AI can help us solve climate change.", audioFront: "TTS: Help", audioBack: "TTS: AI can help us solve climate change." },
                { term: "Imagine", definition: "To form a mental image or concept of.", defTrans: "Imaginar", example: "Can you imagine a teacher who is a robot?", audioFront: "TTS: Imagine", audioBack: "TTS: Can you imagine a teacher who is a robot?" },
                { term: "Impact", definition: "To have a strong effect or influence on a situation.", defTrans: "Impactar", example: "High-tech devices impact our behavior.", audioFront: "TTS: Impact", audioBack: "TTS: High-tech devices impact our behavior." },
                { term: "Implement", definition: "To put a decision, plan, or agreement into effect.", defTrans: "Implementar", example: "We need to implement safety rules for AI.", audioFront: "TTS: Implement", audioBack: "TTS: We need to implement safety rules for AI." },
                { term: "Improve", definition: "To make or become better.", defTrans: "Melhorar", example: "Innovation will improve the quality of life.", audioFront: "TTS: Improve", audioBack: "TTS: Innovation will improve the quality of life." },
                { term: "Increase", definition: "To become or make something greater in size or amount.", defTrans: "Aumentar", example: "Use of robots will increase production speed.", audioFront: "TTS: Increase", audioBack: "TTS: Use of robots will increase production speed." },
                { term: "Invest", definition: "To expend money or effort with the expectation of a result.", defTrans: "Investir", example: "Countries invest millions in robotics research.", audioFront: "TTS: Invest", audioBack: "TTS: Countries invest millions in robotics research." },
                { term: "Keep", definition: "To have or retain possession of.", defTrans: "Manter / Guardar", example: "Always keep your software updated.", audioFront: "TTS: Keep", audioBack: "TTS: Always keep your software updated." },
                { term: "Know", definition: "To be aware of through observation or information.", defTrans: "Saber / Conhecer", example: "I know how to code a basic program.", audioFront: "TTS: Know", audioBack: "TTS: I know how to code a basic program." },
                { term: "Lay off", definition: "To discharge a worker temporarily or permanently.", defTrans: "Demitir", example: "The factory had to lay off workers.", audioFront: "TTS: Lay off", audioBack: "TTS: The factory had to lay off workers." },
                { term: "Leave", definition: "To go away from.", defTrans: "Sair / Deixar", example: "Don't leave your data unprotected online.", audioFront: "TTS: Leave", audioBack: "TTS: Don't leave your data unprotected online." },
                { term: "Look", definition: "To direct one's gaze toward someone or something.", defTrans: "Olhar / Parecer", example: "Future robots will look like humans.", audioFront: "TTS: Look", audioBack: "TTS: Future robots will look like humans." },
                { term: "Lose", definition: "To be deprived of or cease to have or retain something.", defTrans: "Perder", example: "We might lose some privacy because of AI.", audioFront: "TTS: Lose", audioBack: "TTS: We might lose some privacy because of AI." },
                // --- Verbs (O-W) ---
                { term: "Overheat", definition: "To make or become too hot.", defTrans: "Superaquecer", example: "If you use it too much, the hardware will overheat.", audioFront: "TTS: Overheat", audioBack: "TTS: If you use it too much, the hardware will overheat." },
                { term: "Play", definition: "To engage in activity for enjoyment and recreation.", defTrans: "Jogar / Brincar", example: "Kids like to play with robot toys.", audioFront: "TTS: Play", audioBack: "TTS: Kids like to play with robot toys." },
                { term: "Prefer", definition: "To like one thing or person better than another or others.", defTrans: "Preferir", example: "Many users prefer using voice assistants.", audioFront: "TTS: Prefer", audioBack: "TTS: Many users prefer using voice assistants." },
                { term: "Produce", definition: "To make or manufacture from components or raw materials.", defTrans: "Produzir", example: "3D printers can produce many objects.", audioFront: "TTS: Produce", audioBack: "TTS: 3D printers can produce many objects." },
                { term: "Provide", definition: "To make available for use; supply.", defTrans: "Fornecer", example: "AI provides personalized learning for students.", audioFront: "TTS: Provide", audioBack: "TTS: AI provides personalized learning for students." },
                { term: "Read", definition: "To look at and comprehend the meaning of written matter.", defTrans: "Ler", example: "A computer can read a book in seconds.", audioFront: "TTS: Read", audioBack: "TTS: A computer can read a book in seconds." },
                { term: "Reduce", definition: "To make smaller or less in amount, degree, or size.", defTrans: "Reduzir", example: "Automation will reduce the cost of production.", audioFront: "TTS: Reduce", audioBack: "TTS: Automation will reduce the cost of production." },
                { term: "Regulate", definition: "To control or maintain the rate or speed of a machine.", defTrans: "Regular / Controlar", example: "Laws must regulate tech advancements.", audioFront: "TTS: Regulate", audioBack: "TTS: Laws must regulate tech advancements." },
                { term: "See", definition: "To perceive with the eyes.", defTrans: "Ver", example: "I can see the future through new technologies.", audioFront: "TTS: See", audioBack: "TTS: I can see the future through new technologies." },
                { term: "Speak", definition: "To say something in order to convey information.", defTrans: "Falar", example: "Some robots can speak multiple languages.", audioFront: "TTS: Speak", audioBack: "TTS: Some robots can speak multiple languages." },
                { term: "Stop", definition: "To come to an end; cease to happen.", defTrans: "Parar", example: "We cannot stop the digital revolution.", audioFront: "TTS: Stop", audioBack: "TTS: We cannot stop the digital revolution." },
                { term: "Study", definition: "To devote time and attention to acquiring knowledge.", defTrans: "Estudar", example: "You should study how neural networks function.", audioFront: "TTS: Study", audioBack: "TTS: You should study how neural networks function." },
                { term: "Suppose", definition: "To assume that something is the case on the basis of evidence.", defTrans: "Supor", example: "Suppose you had a robot today, what would you do?", audioFront: "TTS: Suppose", audioBack: "TTS: Suppose you had a robot today, what would you do?" },
                { term: "Take", definition: "To lay hold of something with one's hands; to assume.", defTrans: "Tomar / Pegar / Assumir", example: "Machines will take many manual jobs soon.", audioFront: "TTS: Take", audioBack: "TTS: Machines will take many manual jobs soon." },
                { term: "Think", definition: "To have a particular belief or idea.", defTrans: "Pensar", example: "Can machines actually think like humans?", audioFront: "TTS: Think", audioBack: "TTS: Can machines actually think like humans?" },
                { term: "Train", definition: "To teach a person or animal a particular skill or type of behavior.", defTrans: "Treinar", example: "Engineers train AI models with huge data sets.", audioFront: "TTS: Train", audioBack: "TTS: Engineers train AI models with huge data sets." },
                { term: "Use", definition: "To take, hold, or deploy something as a means of accomplishing a purpose.", defTrans: "Usar", example: "Everyone will use AI in the future.", audioFront: "TTS: Use", audioBack: "TTS: Everyone will use AI in the future." },
                { term: "Would", definition: "Auxiliary verb used to indicate a hypothetical consequence.", defTrans: "Iria / Faria (auxiliar)", example: "Life would be different if we lived with robots.", audioFront: "TTS: Would", audioBack: "TTS: Life would be different if we lived with robots." },
                // --- Nouns & Concepts ---
                { term: "Artificial Intelligence (AI)", definition: "The theory and development of computer systems that normally require human intelligence.", defTrans: "Inteligência Artificial", example: "AI can analyze data faster than any human.", audioFront: "TTS: Artificial Intelligence", audioBack: "TTS: AI can analyze data faster than any human." },
                { term: "Robotics", definition: "The branch of technology that deals with the design, construction, and application of robots.", defTrans: "Robótica", example: "My brother is studying robotics at university.", audioFront: "TTS: Robotics", audioBack: "TTS: My brother is studying robotics at university." },
                { term: "Machine learning", definition: "Computer systems that are able to learn and adapt without following explicit instructions.", defTrans: "Aprendizado de máquina", example: "Machine learning helps computers improve over time.", audioFront: "TTS: Machine learning", audioBack: "TTS: Machine learning helps computers improve over time." },
                { term: "Algorithm", definition: "A process or set of rules to be followed in calculations.", defTrans: "Algoritmo", example: "A social media algorithm chooses what you see.", audioFront: "TTS: Algorithm", audioBack: "TTS: A social media algorithm chooses what you see." },
                { term: "Automation", definition: "The use of automatic equipment in a manufacturing or production process.", defTrans: "Automação", example: "Automation increases factory efficiency.", audioFront: "TTS: Automation", audioBack: "TTS: Automation increases factory efficiency." },
                { term: "Robot", definition: "A machine capable of carrying out a complex series of actions automatically.", defTrans: "Robô", example: "This small robot can vacuum the whole floor.", audioFront: "TTS: Robot", audioBack: "TTS: This small robot can vacuum the whole floor." },
                { term: "Neural network", definition: "A computer system modeled on the human brain and nervous system.", defTrans: "Rede neural", example: "A neural network works like a human brain.", audioFront: "TTS: Neural network", audioBack: "TTS: A neural network works like a human brain." },
                { term: "Software", definition: "The programs and other operating information used by a computer.", defTrans: "Software", example: "You need to download the latest software.", audioFront: "TTS: Software", audioBack: "TTS: You need to download the latest software." },
                { term: "Hardware", definition: "The physical components of a computer system.", defTrans: "Hardware", example: "The computer's hardware is very powerful.", audioFront: "TTS: Hardware", audioBack: "TTS: The computer's hardware is very powerful." },
                { term: "Data", definition: "Facts and statistics collected together for reference or analysis.", defTrans: "Dados", example: "Scientists analyze huge amounts of data.", audioFront: "TTS: Data", audioBack: "TTS: Scientists analyze huge amounts of data." },
                { term: "Innovation", definition: "A new method, idea, or product.", defTrans: "Inovação", example: "Constant innovation is necessary in the tech world.", audioFront: "TTS: Innovation", audioBack: "TTS: Constant innovation is necessary in the tech world." },
                { term: "Technological advance", definition: "Progress and innovation within the field of technology.", defTrans: "Avanço tecnológico", example: "Every technological advance brings new challenges.", audioFront: "TTS: Technological advance", audioBack: "TTS: Every technological advance brings new challenges." },
                { term: "Virtual reality", definition: "The computer-generated simulation of a three-dimensional image or environment.", defTrans: "Realidade virtual", example: "I felt like I was in a movie using virtual reality.", audioFront: "TTS: Virtual reality", audioBack: "TTS: I felt like I was in a movie using virtual reality." },
                { term: "Advancement", definition: "An act of moving forward in a process or the state of being advanced.", defTrans: "Avanço", example: "The advancement of science is inevitable.", audioFront: "TTS: Advancement", audioBack: "TTS: The advancement of science is inevitable." },

                // --- Expressions & Links ---
                { term: "If this happens...", definition: "Used to introduce a Zero Conditional fact or truth.", defTrans: "Se isso acontece...", example: "If you overheat a machine, it stops working.", audioFront: "TTS: If this happens", audioBack: "TTS: If you overheat a machine, it stops working." },
                { term: "If we develop AI further...", definition: "Used to introduce a First Conditional real possibility.", defTrans: "Se desenvolvermos mais a IA...", example: "If we develop AI further, it will automate work.", audioFront: "TTS: If we develop AI further", audioBack: "TTS: If we develop AI further, it will automate work." },
                { term: "If we could have robot-companions...", definition: "Used to introduce a Second Conditional hypothetical situation.", defTrans: "Se pudéssemos ter robôs como companheiros...", example: "If I were a robot, I would read fast.", audioFront: "TTS: If we could have robot companions", audioBack: "TTS: If I were a robot, I would read fast." },
                { term: "Moreover", definition: "Used for addition. (As a further matter; besides.)", defTrans: "Além disso", example: "Robots can clean. Moreover, they can cook.", audioFront: "TTS: Moreover", audioBack: "TTS: Robots can clean. Moreover, they can cook." },
                { term: "Consequently", definition: "Used for consequence. (As a result of something.)", defTrans: "Consequentemente", example: "The system was updated. Consequently, it works better.", audioFront: "TTS: Consequently", audioBack: "TTS: The system was updated. Consequently, it works better." },
                { term: "In order to / So that", definition: "Used to explain the purpose of an action.", defTrans: "Para que / A fim de", example: "We train the AI so that it can solve problems.", audioFront: "TTS: In order to. So that.", audioBack: "TTS: We train the AI so that it can solve problems." },
                { term: "On the other hand", definition: "Used to present an alternative or contrasting point of view.", defTrans: "Por outro lado", example: "AI is great. On the other hand, we need to protect jobs.", audioFront: "TTS: On the other hand", audioBack: "TTS: AI is great. On the other hand, we need to protect jobs." },
                { term: "However", definition: "Used to introduce a statement that contrasts with or contradicts something that has been said.", defTrans: "No entanto / Contudo", example: "AI is useful; however, it has many risks.", audioFront: "TTS: However", audioBack: "TTS: AI is useful; however, it has many risks." }
            ] // This closes the items array
        } // This closes the Step 9 object
    ], // This closes the steps array

    // ======================================================
    // GLOSSARY (Complete & Paginated)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT & EXPRESSIONS ---
        { topic: "Context/Expressions", term: "turn on", definition: "To start or activate a machine or device.", translation: "Ligar / Acionar"},
        { topic: "Context/Expressions", term: "always", definition: "At all times; on all occasions; 100% of the time.", translation: "Sempre"},
        { topic: "Context/Expressions", term: "usually", definition: "Under normal conditions; generally.", translation: "Geralmente"},
        { topic: "Context/Expressions", term: "method", definition: "A particular form of procedure for accomplishing something.", translation: "Método"},
        { topic: "Context/Expressions", term: "currently", definition: "At the present time; now.", translation: "Atualmente"},
        { topic: "Context/Expressions", term: "article", definition: "A piece of writing included with others in a newspaper or magazine.", translation: "Artigo"},
        { topic: "Context/Expressions", term: "rarely", definition: "Not often; seldom; almost never.", translation: "Raramente"},
        { topic: "Context/Expressions", term: "learning-style", definition: "An individual's unique approach to learning.", translation: "Estilo de aprendizagem" },
        { topic: "Context/Expressions", term: "What if...?", definition: "Question used to open a discussion about hypothetical consequences.", translation: "E se...?" },
        { topic: "Context/Expressions", term: "shall we", definition: "Used to make a suggestion or proposal (often ends in a question mark).", translation: "Nós devemos / Vamos...?"},
        

        // --- TOPIC 2: VERBS (A-H) ---
        { topic: "Verbs (A-H)", term: "Achieve", definition: "To successfully bring about a desired objective or result by effort or skill.", translation: "Alcançar / Conquistar" },
        { topic: "Verbs (A-H)", term: "Act", definition: "To take action or do something for a particular purpose.", translation: "Agir" },
        { topic: "Verbs (A-H)", term: "Add", definition: "To join something to something else so as to increase the size, number, or amount.", translation: "Adicionar" },
        { topic: "Verbs (A-H)", term: "Automate", definition: "To make a process or facility operate by largely automatic equipment.", translation: "Automatizar" },
        { topic: "Verbs (A-H)", term: "Be", definition: "To exist or occupy a position.", translation: "Ser / Estar" },
        { topic: "Verbs (A-H)", term: "Believe", definition: "To accept that something is true, especially without proof.", translation: "Acreditar" },
        { topic: "Verbs (A-H)", term: "Change", definition: "To make or become different over time.", translation: "Mudar" },
        { topic: "Verbs (A-H)", term: "Consider", definition: "To think carefully about something, typically before making a decision.", translation: "Considerar" },
        { topic: "Verbs (A-H)", term: "Continue", definition: "To persist in an activity or process.", translation: "Continuar" },
        { topic: "Verbs (A-H)", term: "Control", definition: "The power to influence or direct people's behavior or the course of events.", translation: "Controlar" },
        { topic: "Verbs (A-H)", term: "Could", definition: "Used to indicate possibility or past ability.", translation: "Poderia" },
        { topic: "Verbs (A-H)", term: "Create", definition: "To bring something into existence.", translation: "Criar" },
        { topic: "Verbs (A-H)", term: "Develop", definition: "To grow or cause to grow and become more mature, advanced, or elaborate.", translation: "Desenvolver" },
        { topic: "Verbs (A-H)", term: "Discuss", definition: "To talk about something with another person or group.", translation: "Discutir" },
        { topic: "Verbs (A-H)", term: "Do", definition: "To perform an action, the precise nature of which is often unspecified.", translation: "Fazer" },
        { topic: "Verbs (A-H)", term: "Enjoy", definition: "To take delight or pleasure in.", translation: "Curtir / Desfrutar" },
        { topic: "Verbs (A-H)", term: "Evolve", definition: "To develop gradually, especially from a simple to a more complex form.", translation: "Evoluir" },
        { topic: "Verbs (A-H)", term: "Exist", definition: "To have objective reality or being.", translation: "Existir" },
        { topic: "Verbs (A-H)", term: "Explore", definition: "To travel in or through an unfamiliar area in order to learn about it.", translation: "Explorar" },
        { topic: "Verbs (A-H)", term: "Fall down", definition: "To drop to the ground / to fail in an attempt.", translation: "Cair / Fracassar" },
        { topic: "Verbs (A-H)", term: "Focus", definition: "To be the center of interest or activity.", translation: "Focar" },
        { topic: "Verbs (A-H)", term: "Get", definition: "To come to have or hold something; receive.", translation: "Conseguir / Obter" },
        { topic: "Verbs (A-H)", term: "Give", definition: "To freely transfer the possession of something to someone.", translation: "Dar" },
        { topic: "Verbs (A-H)", term: "Go", definition: "To move from one place to another.", translation: "Ir" },
        { topic: "Verbs (A-H)", term: "Happen", definition: "To take place; occur.", translation: "Acontecer" },
        { topic: "Verbs (A-H)", term: "Have", definition: "To possess, own, or hold.", translation: "Ter" },
        { topic: "Verbs (A-H)", term: "Help", definition: "To make it easier for someone to do something by offering one's services.", translation: "Ajudar" },
        
        // --- TOPIC 3: VERBS (I-W) ---
        { topic: "Verbs (I-W)", term: "Imagine", definition: "To form a mental image or concept of.", translation: "Imaginar" },
        { topic: "Verbs (I-W)", term: "Impact", definition: "To have a strong effect or influence on a situation.", translation: "Impactar" },
        { topic: "Verbs (I-W)", term: "Implement", definition: "To put a decision, plan, or agreement into effect.", translation: "Implementar" },
        { topic: "Verbs (I-W)", term: "Improve", definition: "To make or become better.", translation: "Melhorar" },
        { topic: "Verbs (I-W)", term: "Increase", definition: "To become or make something greater in size, amount, intensity, or degree.", translation: "Aumentar" },
        { topic: "Verbs (I-W)", term: "Invest", definition: "To expend money or effort with the expectation of a result.", translation: "Investir" },
        { topic: "Verbs (I-W)", term: "Keep", definition: "To have or retain possession of.", translation: "Manter / Guardar" },
        { topic: "Verbs (I-W)", term: "Know", definition: "To be aware of through observation, inquiry, or information.", translation: "Saber / Conhecer" },
        { topic: "Verbs (I-W)", term: "Lay off", definition: "To discharge a worker temporarily or permanently because of economic reasons.", translation: "Demitir" },
        { topic: "Verbs (I-W)", term: "Leave", definition: "To go away from.", translation: "Sair / Deixar" },
        { topic: "Verbs (I-W)", term: "Look", definition: "To direct one's gaze toward someone or something.", translation: "Olhar / Parecer" },
        { topic: "Verbs (I-W)", term: "Lose", definition: "To be deprived of or cease to have or retain something.", translation: "Perder" },
        { topic: "Verbs (I-W)", term: "memorize", definition: "To commit to memory; learn by heart.", translation: "Memorizar"},
        { topic: "Verbs (I-W)", term: "Overheat", definition: "To make or become too hot.", translation: "Superaquecer" },
        { topic: "Verbs (I-W)", term: "Play", definition: "To engage in activity for enjoyment and recreation.", translation: "Jogar / Brincar" },
        { topic: "Verbs (I-W)", term: "Prefer", definition: "To like one thing or person better than another or others.", translation: "Preferir" },
        { topic: "Verbs (I-W)", term: "Produce", definition: "To make or manufacture from components or raw materials.", translation: "Produzir" },
        { topic: "Verbs (I-W)", term: "Provide", definition: "To make available for use; supply.", translation: "Fornecer" },
        { topic: "Verbs (I-W)", term: "Read", definition: "To look at and comprehend the meaning of written matter.", translation: "Ler" },
        { topic: "Verbs (I-W)", term: "Reduce", definition: "To make smaller or less in amount, degree, or size.", translation: "Reduzir" },
        { topic: "Verbs (I-W)", term: "Regulate", definition: "To control or maintain the rate or speed of a machine or process.", translation: "Regular / Controlar" },
        { topic: "Verbs (I-W)", term: "review", definition: "To examine or assess something formally with the possibility of change.", translation: "Revisar"},
        { topic: "Verbs (I-W)", term: "See", definition: "To perceive with the eyes.", translation: "Ver" },
        { topic: "Verbs (I-W)", term: "Speak", definition: "To say something in order to convey information, an opinion, or a feeling.", translation: "Falar" },
        { topic: "Verbs (I-W)", term: "Stop", definition: "To come to an end; cease to happen.", translation: "Parar" },
        { topic: "Verbs (I-W)", term: "Study", definition: "To devote time and attention to acquiring knowledge on an academic subject.", translation: "Estudar" },
        { topic: "Verbs (I-W)", term: "Suppose", definition: "To assume that something is the case on the basis of evidence or probability.", translation: "Supor" },
        { topic: "Verbs (I-W)", term: "Take", definition: "To lay hold of something with one's hands; to reach for.", translation: "Tomar / Pegar / Assumir" },
        { topic: "Verbs (I-W)", term: "Think", definition: "To have a particular belief or idea.", translation: "Pensar" },
        { topic: "Verbs (I-W)", term: "Train", definition: "To teach a person or animal a particular skill or type of behavior.", translation: "Treinar" },
        { topic: "Verbs (I-W)", term: "Use", definition: "To take, hold, or deploy something as a means of accomplishing a purpose.", translation: "Usar" },
        
        // --- TOPIC 4: LINKS & AUXILIARIES ---
        { topic: "Links/Auxiliaries", term: "Moreover", definition: "Used for addition. (As a further matter; besides.)", translation: "Além disso" },
        { topic: "Links/Auxiliaries", term: "Consequently", definition: "Used for consequence. (As a result of something; therefore.)", translation: "Consequentemente" },
        { topic: "Links/Auxiliaries", term: "In order to / So that", definition: "Used to explain the purpose of an action.", translation: "Para que / A fim de" },
        { topic: "Links/Auxiliaries", term: "As a result", definition: "Used to introduce the consequence of a previous action.", translation: "Como resultado" },
        { topic: "Links/Auxiliaries", term: "However", definition: "Used to introduce a statement that contrasts with or contradicts something that has been said.", translation: "No entanto / Contudo" },
        { topic: "Links/Auxiliaries", term: "Nevertheless", definition: "In spite of that; notwithstanding; all the same.", translation: "Todavia / Contudo" },
        { topic: "Links/Auxiliaries", term: "Also", definition: "In addition; too.", translation: "Também" },
        { topic: "Links/Auxiliaries", term: "Although", definition: "Even though; in spite of the fact that.", translation: "Embora" },
        { topic: "Links/Auxiliaries", term: "Besides", definition: "In addition to; apart from.", translation: "Além de" },
        { topic: "Links/Auxiliaries", term: "On the other hand", definition: "Used to present an alternative or contrasting point of view.", translation: "Por outro lado" },
        { topic: "Links/Auxiliaries", term: "so that", definition: "A linking word used to introduce the purpose or reason for an action.", translation: "Para que / A fim de que"},

        
        // --- TOPIC 5: GRAMMAR & CONDITIONALS ---
        { topic: "Grammar/Conditionals", term: "Zero Conditional", definition: "Grammar used for general truths: If + Present Simple, Present Simple.", translation: "Condicional Zero" },
        { topic: "Grammar/Conditionals", term: "First Conditional", definition: "Grammar used for real future possibilities: If + Present, Will + Verb.", translation: "Primeira Condicional" },
        { topic: "Grammar/Conditionals", term: "Second Conditional", definition: "Grammar used for hypothetical present/future situations: If + Past, Would + Verb.", translation: "Segunda Condicional" },
        { topic: "Grammar/Conditionals", term: "Third Conditional", definition: "Grammar used for unreal past regrets: If + Past Perfect, Would have + P.P.", translation: "Terceira Condicional" },
        { topic: "Grammar/Conditionals", term: "If we invest in robotics", definition: "Conditional phrase focusing on economic and scientific support for tech.", translation: "Se investirmos em robótica" },
        { topic: "Grammar/Conditionals", term: "If we could have robot-companions", definition: "Hypothetical second conditional phrase about social robotics.", translation: "Se pudéssemos ter robôs como companheiros" },
        { topic: "Grammar/Conditionals", term: "If this happens, then that happens", definition: "Used for general truths: If + Present Simple, Present Simple.", translation: "Se isso acontece, então aquilo acontece" },
        { topic: "Context/Expressions", term: "if we had", definition: "The condition clause of the Second Conditional, referring to an imaginary present/future.", translation: "Se nós tivéssemos"},
        { topic: "Context/Expressions", term: "would be", definition: "The result clause of the Second Conditional, referring to a hypothetical outcome.", translation: "Seria / Estaria"},
        { topic: "Context/Expressions", term: "if hadn't created", definition: "The condition clause of the Third Conditional, referring to an unreal past event (regret/consequence).", translation: "Se não tivéssemos criado"},
        { topic: "Context/Expressions", term: "would have had", definition: "The result clause of the Third Conditional, referring to the hypothetical past consequence.", translation: "Teríamos tido"},
        { topic: "Context/Expressions", term: "would change", definition: "The verb 'change' used with the auxiliary 'would' to form a conditional statement.", translation: "Mudaria"},
        { topic: "Context/Expressions", term: "Would", definition: "Auxiliary verb used to indicate a hypothetical consequence.", translation: "Faria / Iria (auxiliar)" },
        { topic: "Grammar/Conditionals", term: "Could there be?", definition: "Question used to discuss possibilities in hypothetical scenarios.", translation: "Poderia haver?" },
        { topic: "Grammar/Conditionals", term: "Do you think if...?", definition: "Question structure used to ask for an opinion on a conditional result.", translation: "Você acha que se...?" },
        { topic: "Grammar/Conditionals", term: "Passive Voice", definition: "Grammar structure where the object of an action becomes the subject of the sentence.", translation: "Voz Passiva" },
        
        // --- TOPIC 6: AI TERMS & OTHER NOUNS ---
        { topic: "AI/Other Nouns", term: "Artificial Intelligence (AI)", definition: "The theory and development of computer systems able to perform tasks that normally require human intelligence.", translation: "Inteligência Artificial" },
        { topic: "AI/Other Nouns", term: "Robotics", definition: "The branch of technology that deals with the design, construction, and application of robots.", translation: "Robótica" },
        { topic: "AI/Other Nouns", term: "Machine learning", definition: "The use and development of computer systems that are able to learn and adapt without following explicit instructions.", translation: "Aprendizado de máquina" },
        { topic: "AI/Other Nouns", term: "Neural network", definition: "A computer system modeled on the human brain and nervous system.", translation: "Rede neural" },
        { topic: "AI/Other Nouns", term: "algorithm", definition: "A process or set of rules to be followed in calculations.", translation: "Algoritmo" },
        { topic: "AI/Other Nouns", term: "automation", definition: "The use of automatic equipment in a production process.", translation: "Automação" },
        { topic: "AI/Other Nouns", term: "robot", definition: "A machine capable of carrying out a complex series of actions automatically.", translation: "Robô" },
        { topic: "AI/Other Nouns", term: "software", definition: "The programs and other operating information used by a computer.", translation: "Software" },
        { topic: "AI/Other Nouns", term: "hardware", definition: "The physical components of a computer system.", translation: "Hardware" },
        { topic: "AI/Other Nouns", term: "data", definition: "Facts and statistics collected together for reference or analysis.", translation: "Dados" },
        { topic: "AI/Other Nouns", term: "innovation", definition: "A new method, idea, or product.", translation: "Inovação" },
        { topic: "AI/Other Nouns", term: "technological-advance", definition: "Progress and innovation within the field of technology.", translation: "Avanço tecnológico" },
        { topic: "AI/Other Nouns", term: "virtual-reality", definition: "The computer-generated simulation of a three-dimensional image or environment.", translation: "Realidade virtual" },
        { topic: "AI/Other Nouns", term: "advancement", definition: "An act of moving forward in a process or the state of being advanced.", translation: "Avanço" },
        { topic: "AI/Other Nouns", term: "Three Laws of Robotics", definition: "A set of rules devised by Isaac Asimov to ensure robot safety.", translation: "Três Leis da Robótica" },
        { topic: "AI/Other Nouns", term: "Overheat", definition: "To make or become too hot.", translation: "Superaquecer" }
    ]
});