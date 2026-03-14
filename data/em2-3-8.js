/*/**
 * REACH English - LESSON DATA em2-3-8
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em2-3-8", 
    grade: "High School 2nd Grade",       
    bimester: "3",   
    chapter: "8",    
    chapterTitle: "Our Reshaped World: Looking Back with 'Wish'", 
    
    steps:[
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss the massive shifts of the [20th century](tooltip:20th-century) in [science](tooltip:science), [technology](tooltip:technology), and[society](tooltip:society).<br>• Use <b>WISH</b> to express regrets about the past ([Past Perfect](tooltip:past-perfect)).<br>• Use <b>WISH</b> to express desires for the present ([Simple Past](tooltip:simple-past)).<br>• Use <b>WISH + WOULD</b> for future changes or annoyances.<br>• Master [phrasal verbs](tooltip:phrasal-verb) with BRING and COME.<br>• Identify key [historical](tooltip:history) events and [human rights](tooltip:human-rights) milestones.",
            welcome: "Hello, [history](tooltip:history) explorers! I'm Mr. D!<br>Welcome to a journey through a [century](tooltip:century) that [changed](tooltip:change) everything! From the first [airplane](tooltip:airplane) to the [World Wide Web](tooltip:www), the 20th century was a time of explosive [innovation](tooltip:innovation). But it was also a time of [struggle](tooltip:struggle) for [equality](tooltip:equality) and [peace](tooltip:peace). Today, we are going to open the door to the past! You will learn how to [talk](tooltip:talk) about your dreams and [regrets](tooltip:regret) using the power of \"Wish.\" We’ll look at how [activists](tooltip:activist) [pushed for](tooltip:push-for) [suffrage](tooltip:suffrage) and how [globalization](tooltip:globalization) [reshaped](tooltip:reshape) our [world](tooltip:world). Are you ready to [travel](tooltip:travel) back in time? Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss the massive shifts of the 20th century in science, technology, and society. Use WISH to express regrets about the past using the Past Perfect. Use WISH to express desires for the present using the Simple Past. Use WISH plus WOULD for future changes or annoyances. Master phrasal verbs with BRING and COME. Identify key historical events and human rights milestones.",
                welcome: "TTS: Hello, history explorers! I'm Mr. D! Welcome to a journey through a century that changed everything! From the first airplane to the World Wide Web, the 20th century was a time of explosive innovation. But it was also a time of struggle for equality and peace. Today, we are going to open the door to the past! You will learn how to talk about your dreams and regrets using the power of Wish. We’ll look at how activists pushed for suffrage and how globalization reshaped our world. Are you ready to travel back in time? Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "(Albert and Celine are visiting a local museum, looking at how things were in the past.)", 
            contextAudio: "audio/em2-3-8/step1.mp3",
            dialogue:[
                { 
                    speaker: "Celine", 
                    text: "Wow, Albert! Look at this [television](tooltip:television) from the 1950s. It’s so huge and bulky. I [wish](tooltip:wish) I could [see](tooltip:see) it working in [real life](tooltip:real-life)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Me too. The [Digital Age](tooltip:digital-age) [came about](tooltip:come-about) [so fast](tooltip:so-fast). I [read](tooltip:read) that the first [computer](tooltip:computer) occupied a whole room. I [wish](tooltip:wish) [technology](tooltip:technology) had [developed](tooltip:develop) [a bit slower](tooltip:a-bit-slower) so we could [appreciate](tooltip:appreciate) each step more." 
                },
                { 
                    speaker: "Celine", 
                    text: "I disagree. If it were slower, we wouldn't have [antibiotics](tooltip:antibiotics) or modern [medicine](tooltip:medicine) yet. I [wish](tooltip:wish) people had [abolished](tooltip:abolish) [prejudice](tooltip:prejudice) [much earlier](tooltip:much-earlier) in the last [century](tooltip:century)." 
                },
                { 
                    speaker: "Albert", 
                    text: "True. Look at these [photos](tooltip:photo) of the [suffrage](tooltip:suffrage) [movement](tooltip:movement). Women [struggled](tooltip:struggle) so much for the [right](tooltip:right) to [vote](tooltip:vote). I [wish](tooltip:wish) [governments](tooltip:government) would [focus](tooltip:focus) more on [equality](tooltip:equality) even today." 
                },
                { 
                    speaker: "Celine", 
                    text: "Definitely. The [United Nations](tooltip:united-nations) [brought about](tooltip:bring-about) the [UDHR](tooltip:udhr), but we still [face](tooltip:face) [inequality](tooltip:inequality). I [wish](tooltip:wish) everyone [respected](tooltip:respect) [human rights](tooltip:human-rights) worldwide." 
                },
                { 
                    speaker: "Albert", 
                    text: "I [came across](tooltip:come-across) an [article](tooltip:article) saying that [face-to-face communication](tooltip:face-to-face) is [disappearing](tooltip:disappear) because of the [internet](tooltip:internet). I [wish](tooltip:wish) my [generation](tooltip:generation) [talked](tooltip:talk) more in person." 
                },
                { 
                    speaker: "Celine", 
                    text: "I understand. Hey, the [documentary](tooltip:documentary) about the [Cold War](tooltip:cold-war) is starting. I [wish](tooltip:wish) we hadn't missed the [beginning](tooltip:beginning)!" 
                },
                { 
                    speaker: "Albert", 
                    text: "Don't worry, we can [catch up](tooltip:catch-up)! Let's go!" 
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
                    title: "Verbs A-L",
                    audio: "TTS: Abolish. Access. Adapt. Addict. Admit. Adopt. Affect. Appreciate. Be. Bring. Cause. Change. Come. Continue. Create. Decrease. Desire. Develop. Disappear. Discuss. Do. Exist. Explode. Explore. Express. Face. Feel. Focus. Happen. Have. Invent. Know. Learn. Live. Look. Listen. Lose. Love.",
                    items:[
                        { term: "Abolish", trans: "abolir" },
                        { term: "Access", trans: "acessar" },
                        { term: "Adapt", trans: "adaptar-se" },
                        { term: "Addict", trans: "viciar" },
                        { term: "Admit", trans: "admitir" },
                        { term: "Adopt", trans: "adotar" },
                        { term: "Affect", trans: "afetar" },
                        { term: "Appreciate", trans: "apreciar" },
                        { term: "Be", trans: "ser / estar" },
                        { term: "Bring", trans: "trazer" },
                        { term: "Cause", trans: "causar" },
                        { term: "Change", trans: "mudar" },
                        { term: "Come", trans: "vir" },
                        { term: "Continue", trans: "continuar" },
                        { term: "Create", trans: "criar" },
                        { term: "Decrease", trans: "diminuir" },
                        { term: "Desire", trans: "desejar" },
                        { term: "Develop", trans: "desenvolver" },
                        { term: "Disappear", trans: "desaparecer" },
                        { term: "Discuss", trans: "discutir" },
                        { term: "Do", trans: "fazer" },
                        { term: "Exist", trans: "existir" },
                        { term: "Explode", trans: "explodir" },
                        { term: "Explore", trans: "explorar" },
                        { term: "Express", trans: "expressar" },
                        { term: "Face", trans: "encarar / enfrentar" },
                        { term: "Feel", trans: "sentir" },
                        { term: "Focus", trans: "focar" },
                        { term: "Happen", trans: "acontecer" },
                        { term: "Have", trans: "ter" },
                        { term: "Invent", trans: "inventar" },
                        { term: "Know", trans: "saber / conhecer" },
                        { term: "Learn", trans: "aprender" },
                        { term: "Live", trans: "viver" },
                        { term: "Look", trans: "olhar" },
                        { term: "Listen", trans: "ouvir" },
                        { term: "Lose", trans: "perder" },
                        { term: "Love", trans: "amar" }
                    ]
                },
                {
                    title: "Verbs M-W",
                    audio: "TTS: Move. Need. Push for. Read. Remember. Regret. Reshape. Respect. Save. See. Seem. Suffer. Stop. Take. Talk. Tell. Think. Transform. Travel. Use. Visit. Vote. Want. Wish. Work.",
                    items:[
                        { term: "Move", trans: "mover / mudar-se" },
                        { term: "Need", trans: "precisar" },
                        { term: "Push for", trans: "pressionar por / lutar por" },
                        { term: "Read", trans: "ler" },
                        { term: "Remember", trans: "lembrar" },
                        { term: "Regret", trans: "arrepender-se" },
                        { term: "Reshape", trans: "remoldar / dar nova forma" },
                        { term: "Respect", trans: "respeitar" },
                        { term: "Save", trans: "salvar / economizar" },
                        { term: "See", trans: "ver" },
                        { term: "Seem", trans: "parecer" },
                        { term: "Suffer", trans: "sofrer" },
                        { term: "Stop", trans: "parar" },
                        { term: "Take", trans: "tomar / pegar" },
                        { term: "Talk", trans: "conversar" },
                        { term: "Tell", trans: "contar / dizer" },
                        { term: "Think", trans: "pensar" },
                        { term: "Transform", trans: "transformar" },
                        { term: "Travel", trans: "viajar" },
                        { term: "Use", trans: "usar" },
                        { term: "Visit", trans: "visitar" },
                        { term: "Vote", trans: "votar" },
                        { term: "Want", trans: "querer" },
                        { term: "Wish", trans: "desejar / quem me dera" },
                        { term: "Work", trans: "trabalhar" }
                    ]
                },
                {
                    title: "Science & Tech",
                    audio: "TTS: Addiction. Airplane. Antibiotics. Automobile. Car. Computer. Convenience. Development. Invention. Internet. World Wide Web. Medicine. Plane. Radio. Science. Technology. Television. Transportation. Vaccine.",
                    items:[
                        { term: "Addiction", trans: "vício" },
                        { term: "Airplane / Plane", trans: "avião" },
                        { term: "Antibiotics", trans: "antibióticos" },
                        { term: "Automobile / Car", trans: "automóvel / carro" },
                        { term: "Computer", trans: "computador" },
                        { term: "Convenience", trans: "conveniência" },
                        { term: "Development", trans: "desenvolvimento" },
                        { term: "Invention", trans: "invenção" },
                        { term: "Internet / WWW", trans: "internet / rede mundial" },
                        { term: "Medicine", trans: "medicina" },
                        { term: "Radio", trans: "rádio" },
                        { term: "Science", trans: "ciência" },
                        { term: "Technology", trans: "tecnologia" },
                        { term: "Television (TV)", trans: "televisão" },
                        { term: "Transportation", trans: "transporte" },
                        { term: "Vaccine", trans: "vacina" }
                    ]
                },
                {
                    title: "Politics & Society",
                    audio: "TTS: Activist. Behavior. Change. Communication. Crisis. Document. Equality. Globalization. Government. History. Inequality. Interaction. Issue. Law. Movement. Peace. Politics. Politician. Prejudice. Progress. Rights. Society. Soldier. Suffrage. United Nations. War.",
                    items:[
                        { term: "Activist", trans: "ativista" },
                        { term: "Behavior", trans: "comportamento" },
                        { term: "Change", trans: "mudança" },
                        { term: "Communication", trans: "comunicação" },
                        { term: "Crisis", trans: "crise" },
                        { term: "Document", trans: "documento" },
                        { term: "Equality", trans: "igualdade" },
                        { term: "Globalization", trans: "globalização" },
                        { term: "Government", trans: "governo" },
                        { term: "History", trans: "história" },
                        { term: "Inequality", trans: "desigualdade" },
                        { term: "Interaction", trans: "interação" },
                        { term: "Issue", trans: "questão / problema" },
                        { term: "Law", trans: "lei" },
                        { term: "Movement (Civil Rights)", trans: "movimento (direitos civis)" },
                        { term: "Peace", trans: "paz" },
                        { term: "Politics", trans: "política" },
                        { term: "Politician", trans: "político" },
                        { term: "Prejudice", trans: "preconceito" },
                        { term: "Progress", trans: "progresso" },
                        { term: "Right(s)", trans: "direito(s)" },
                        { term: "Society", trans: "sociedade" },
                        { term: "Soldier", trans: "soldado" },
                        { term: "Suffrage (Women's)", trans: "sufrágio (voto feminino)" },
                        { term: "United Nations (UN)", trans: "ONU" },
                        { term: "War", trans: "guerra" }
                    ]
                },
                {
                    title: "Concepts & Phrasals",
                    audio: "TTS: Century. Concept. Danger. Economy. Effect. Era. Event. Exhibition. Generation. Health. Idea. Impact. Lesson. Life. Memories. News. Period. Perspective. Photo. Regret. Solution. Strategy. Time. Topic. World. Bring up. Bring about. Bring back. Bring down. Bring out. Come about. Come across. Come up with. Come out. Come back. Come along.",
                    items:[
                        { term: "Century", trans: "século" },
                        { term: "Concept", trans: "conceito" },
                        { term: "Danger", trans: "perigo" },
                        { term: "Economy", trans: "economia" },
                        { term: "Effect", trans: "efeito" },
                        { term: "Era", trans: "era / época" },
                        { term: "Event", trans: "evento" },
                        { term: "Exhibition", trans: "exposição" },
                        { term: "Generation", trans: "geração" },
                        { term: "Health", trans: "saúde" },
                        { term: "Idea", trans: "ideia" },
                        { term: "Impact", trans: "impacto" },
                        { term: "Lesson", trans: "lição" },
                        { term: "Life", trans: "vida" },
                        { term: "Memories", trans: "memórias" },
                        { term: "News", trans: "notícias" },
                        { term: "Period", trans: "período" },
                        { term: "Perspective", trans: "perspectiva" },
                        { term: "Photo", trans: "foto" },
                        { term: "Regret", trans: "arrependimento" },
                        { term: "Solution", trans: "solução" },
                        { term: "Strategy", trans: "estratégia" },
                        { term: "Time", trans: "tempo" },
                        { term: "Topic", trans: "tópico" },
                        { term: "World", trans: "mundo" },
                        { term: "Bring up", trans: "mencionar" },
                        { term: "Bring about", trans: "causar / provocar" },
                        { term: "Bring back", trans: "trazer de volta à memória" },
                        { term: "Bring down", trans: "derrubar / reduzir" },
                        { term: "Bring out", trans: "lançar / realçar" },
                        { term: "Come about", trans: "surgir / acontecer" },
                        { term: "Come across", trans: "encontrar por acaso" },
                        { term: "Come up with", trans: "criar / inventar" },
                        { term: "Come out", trans: "ser lançado" },
                        { term: "Come back", trans: "voltar" },
                        { term: "Come along", trans: "progredir / acompanhar" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: The 20th century. World Wide Web. United Nations. Universal Declaration of Human Rights. Civil Rights Movement. Women's Rights. Cold War. Digital Age. Catch up. Face-to-face communication. Much earlier. Much later. Last week. So fast. A bit slower.",
                    items:[
                        { term: "The 20th century", trans: "o século 20" },
                        { term: "World Wide Web (WWW)", trans: "rede mundial de computadores" },
                        { term: "United Nations (UN)", trans: "Nações Unidas" },
                        { term: "Universal Declaration of Human Rights", trans: "DUDH" },
                        { term: "Civil Rights Movement", trans: "movimento pelos direitos civis" },
                        { term: "Women's Rights / Suffrage", trans: "direitos das mulheres / sufrágio" },
                        { term: "Cold War", trans: "Guerra Fria" },
                        { term: "Digital Age", trans: "Era Digital" },
                        { term: "Catch up", trans: "alcançar / colocar o papo em dia" },
                        { term: "Face-to-face communication", trans: "comunicação cara a cara" },
                        { term: "Much earlier / Much later", trans: "muito antes / muito depois" },
                        { term: "Last week", trans: "semana passada" },
                        { term: "So fast", trans: "tão rápido" },
                        { term: "A bit slower", trans: "um pouco mais devagar" }
                    ]
                }
            ], // Closes areas

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups:[
                {
                    title: "Verbs A-L",
                    audio: "TTS: Many countries abolished slavery in the 19th century. Now, everyone can access information on the internet. Humans had to adapt to the Digital Age. Social media can addict young people easily. The politician admitted his mistake. The UN adopted the UDHR in 1948. The war affected the entire global economy. We must appreciate the progress we made. Life in the 1900s was very difficult. Science brought new vaccines to the world. Inequality causes many social crises. The invention of the car changed transportation. Positive changes usually come with hard work. We must continue to fight for equality. Tim Berners-Lee created the World Wide Web. Medical advancements decrease the death rate. Many people desire world peace. Engineers developed the first airplane. Some historical buildings disappeared over time. Let's discuss the Civil Rights Movement. What did you do during last week? Cell phones didn't exist 100 years ago. The population exploded in the 20th century. Astronauts explored space for the first time. Use your art to express your perspectives. Soldiers had to face many dangers in the war. I feel nostalgic when I see old photos. We should focus on finding a solution. The Cold War happened after World War II. She had many beautiful memories. Who invented the radio? Do you know much about your generation? We learn important lessons from the past. My grandmother lived through the 1940s. The first automobile looked like a carriage. Always listen to the news carefully. Don't lose your rights. People love the convenience of the Digital Age.",
                    items:[
                        { term: "Abolish", sent: "Many countries abolished slavery in the 19th century.", trans: "<span style='color:#0077b6'>Muitos países aboliram a escravidão no século 19.</span>" },
                        { term: "Access", sent: "Now, everyone can access information on the internet.", trans: "<span style='color:#0077b6'>Agora, todos podem acessar informações na internet.</span>" },
                        { term: "Adapt", sent: "Humans had to adapt to the Digital Age.", trans: "<span style='color:#0077b6'>Os humanos tiveram que se adaptar à Era Digital.</span>" },
                        { term: "Addict", sent: "Social media can addict young people easily.", trans: "<span style='color:#0077b6'>As redes sociais podem viciar jovens facilmente.</span>" },
                        { term: "Admit", sent: "The politician admitted his mistake.", trans: "<span style='color:#0077b6'>O político admitiu seu erro.</span>" },
                        { term: "Adopt", sent: "The UN adopted the UDHR in 1948.", trans: "<span style='color:#0077b6'>A ONU adotou a DUDH em 1948.</span>" },
                        { term: "Affect", sent: "The war affected the entire global economy.", trans: "<span style='color:#0077b6'>A guerra afetou toda a economia global.</span>" },
                        { term: "Appreciate", sent: "We must appreciate the progress we made.", trans: "<span style='color:#0077b6'>Devemos apreciar o progresso que fizemos.</span>" },
                        { term: "Be", sent: "Life in the 1900s was very difficult.", trans: "<span style='color:#0077b6'>A vida nos anos 1900 era muito difícil.</span>" },
                        { term: "Bring", sent: "Science brought new vaccines to the world.", trans: "<span style='color:#0077b6'>A ciência trouxe novas vacinas para o mundo.</span>" },
                        { term: "Cause", sent: "Inequality causes many social crises.", trans: "<span style='color:#0077b6'>A desigualdade causa muitas crises sociais.</span>" },
                        { term: "Change", sent: "The invention of the car changed transportation.", trans: "<span style='color:#0077b6'>A invenção do carro mudou o transporte.</span>" },
                        { term: "Come", sent: "Positive changes usually come with hard work.", trans: "<span style='color:#0077b6'>Mudanças positivas geralmente vêm com trabalho duro.</span>" },
                        { term: "Continue", sent: "We must continue to fight for equality.", trans: "<span style='color:#0077b6'>Devemos continuar a lutar por igualdade.</span>" },
                        { term: "Create", sent: "Tim Berners-Lee created the WWW.", trans: "<span style='color:#0077b6'>Tim Berners-Lee criou a WWW.</span>" },
                        { term: "Decrease", sent: "Medical advancements decrease the death rate.", trans: "<span style='color:#0077b6'>Avanços médicos diminuem a taxa de mortalidade.</span>" },
                        { term: "Desire", sent: "Many people desire world peace.", trans: "<span style='color:#0077b6'>Muitas pessoas desejam a paz mundial.</span>" },
                        { term: "Develop", sent: "Engineers developed the first airplane.", trans: "<span style='color:#0077b6'>Engenheiros desenvolveram o primeiro avião.</span>" },
                        { term: "Disappear", sent: "Some historical buildings disappeared over time.", trans: "<span style='color:#0077b6'>Alguns prédios históricos desapareceram com o tempo.</span>" },
                        { term: "Discuss", sent: "Let's discuss the Civil Rights Movement.", trans: "<span style='color:#0077b6'>Vamos discutir o Movimento dos Direitos Civis.</span>" },
                        { term: "Do", sent: "What did you do during last week?", trans: "<span style='color:#0077b6'>O que você fez durante a semana passada?</span>" },
                        { term: "Exist", sent: "Cell phones didn't exist 100 years ago.", trans: "<span style='color:#0077b6'>Celulares não existiam 100 anos atrás.</span>" },
                        { term: "Explode", sent: "The population exploded in the 20th century.", trans: "<span style='color:#0077b6'>A população explodiu no século 20.</span>" },
                        { term: "Explore", sent: "Astronauts explored space for the first time.", trans: "<span style='color:#0077b6'>Astronautas exploraram o espaço pela primeira vez.</span>" },
                        { term: "Express", sent: "Use your art to express your perspectives.", trans: "<span style='color:#0077b6'>Use sua arte para expressar suas perspectivas.</span>" },
                        { term: "Face", sent: "Soldiers had to face many dangers in the war.", trans: "<span style='color:#0077b6'>Os soldados tiveram que enfrentar muitos perigos na guerra.</span>" },
                        { term: "Feel", sent: "I feel nostalgic when I see old photos.", trans: "<span style='color:#0077b6'>Sinto-me nostálgico quando vejo fotos antigas.</span>" },
                        { term: "Focus", sent: "We should focus on finding a solution.", trans: "<span style='color:#0077b6'>Deveríamos focar em encontrar uma solução.</span>" },
                        { term: "Happen", sent: "The Cold War happened after World War II.", trans: "<span style='color:#0077b6'>A Guerra Fria aconteceu após a Segunda Guerra Mundial.</span>" },
                        { term: "Have", sent: "She had many beautiful memories.", trans: "<span style='color:#0077b6'>Ela tinha muitas memórias bonitas.</span>" },
                        { term: "Invent", sent: "Who invented the radio?", trans: "<span style='color:#0077b6'>Quem inventou o rádio?</span>" },
                        { term: "Know", sent: "Do you know much about your generation?", trans: "<span style='color:#0077b6'>Você sabe muito sobre sua geração?</span>" },
                        { term: "Learn", sent: "We learn important lessons from the past.", trans: "<span style='color:#0077b6'>Aprendemos lições importantes com o passado.</span>" },
                        { term: "Live", sent: "My grandmother lived through the 1940s.", trans: "<span style='color:#0077b6'>Minha avó viveu durante os anos 1940.</span>" },
                        { term: "Look", sent: "The first automobile looked like a carriage.", trans: "<span style='color:#0077b6'>O primeiro automóvel parecia uma carruagem.</span>" },
                        { term: "Listen", sent: "Always listen to the news carefully.", trans: "<span style='color:#0077b6'>Sempre ouça as notícias com cuidado.</span>" },
                        { term: "Lose", sent: "Don't lose your rights.", trans: "<span style='color:#0077b6'>Não perca seus direitos.</span>" },
                        { term: "Love", sent: "People love the convenience of the Digital Age.", trans: "<span style='color:#0077b6'>As pessoas amam a conveniência da Era Digital.</span>" }
                    ]
                },
                {
                    title: "Verbs M-W",
                    audio: "TTS: The activist moved the crowd with his speech. We need a better strategy for the economy. Women pushed for suffrage for decades. I read a book about 20th-century politics. I remember when the internet was slow. He regretted not voting in the election. Technology reshaped how we communicate. Always respect the law. Modern science saves lives. I can see the impact of globalization. The concept seems very simple now. Many people suffered during the crisis. We must stop the war. Take your time to study history. We should talk about inequality. Tell me a story about that era. I think the World Wide Web is amazing. Computers transformed the work environment. People travel much more now. Which device do you use most? Have you ever visited a history museum? It is your right to vote. I want to learn more about space exploration. I wish for world peace. My parents work at a tech company.",
                    items:[
                        { term: "Move", sent: "The activist moved the crowd with his speech.", trans: "<span style='color:#0077b6'>O ativista comoveu a multidão com seu discurso.</span>" },
                        { term: "Need", sent: "We need a better strategy for the economy.", trans: "<span style='color:#0077b6'>Precisamos de uma estratégia melhor para a economia.</span>" },
                        { term: "Push for", sent: "Women pushed for suffrage for decades.", trans: "<span style='color:#0077b6'>As mulheres lutaram pelo sufrágio por décadas.</span>" },
                        { term: "Read", sent: "I read a book about 20th-century politics.", trans: "<span style='color:#0077b6'>Li um livro sobre política do século 20.</span>" },
                        { term: "Remember", sent: "I remember when the internet was slow.", trans: "<span style='color:#0077b6'>Lembro-me de quando a internet era lenta.</span>" },
                        { term: "Regret", sent: "He regretted not voting in the election.", trans: "<span style='color:#0077b6'>Ele se arrependeu de não ter votado na eleição.</span>" },
                        { term: "Reshape", sent: "Technology reshaped how we communicate.", trans: "<span style='color:#0077b6'>A tecnologia remoldou como nos comunicamos.</span>" },
                        { term: "Respect", sent: "Always respect the law.", trans: "<span style='color:#0077b6'>Sempre respeite a lei.</span>" },
                        { term: "Save", sent: "Modern science saves lives.", trans: "<span style='color:#0077b6'>A ciência moderna salva vidas.</span>" },
                        { term: "See", sent: "I can see the impact of globalization.", trans: "<span style='color:#0077b6'>Consigo ver o impacto da globalização.</span>" },
                        { term: "Seem", sent: "The concept seems very simple now.", trans: "<span style='color:#0077b6'>O conceito parece muito simples agora.</span>" },
                        { term: "Suffer", sent: "Many people suffered during the crisis.", trans: "<span style='color:#0077b6'>Muitas pessoas sofreram durante a crise.</span>" },
                        { term: "Stop", sent: "We must stop the war.", trans: "<span style='color:#0077b6'>Devemos parar a guerra.</span>" },
                        { term: "Take", sent: "Take your time to study history.", trans: "<span style='color:#0077b6'>Tire seu tempo para estudar história.</span>" },
                        { term: "Talk", sent: "We should talk about inequality.", trans: "<span style='color:#0077b6'>Deveríamos conversar sobre a desigualdade.</span>" },
                        { term: "Tell", sent: "Tell me a story about that era.", trans: "<span style='color:#0077b6'>Conte-me uma história sobre aquela era.</span>" },
                        { term: "Think", sent: "I think the World Wide Web is amazing.", trans: "<span style='color:#0077b6'>Acho que a rede mundial é incrível.</span>" },
                        { term: "Transform", sent: "Computers transformed the work environment.", trans: "<span style='color:#0077b6'>Computadores transformaram o ambiente de trabalho.</span>" },
                        { term: "Travel", sent: "People travel much more now.", trans: "<span style='color:#0077b6'>As pessoas viajam muito mais agora.</span>" },
                        { term: "Use", sent: "Which device do you use most?", trans: "<span style='color:#0077b6'>Qual dispositivo você mais usa?</span>" },
                        { term: "Visit", sent: "Have you ever visited a history museum?", trans: "<span style='color:#0077b6'>Você já visitou um museu de história?</span>" },
                        { term: "Vote", sent: "It is your right to vote.", trans: "<span style='color:#0077b6'>É seu direito votar.</span>" },
                        { term: "Want", sent: "I want to learn more about space exploration.", trans: "<span style='color:#0077b6'>Quero aprender mais sobre exploração espacial.</span>" },
                        { term: "Wish", sent: "I wish for world peace.", trans: "<span style='color:#0077b6'>Desejo a paz mundial.</span>" },
                        { term: "Work", sent: "My parents work at a tech company.", trans: "<span style='color:#0077b6'>Meus pais trabalham em uma empresa de tecnologia.</span>" }
                    ]
                },
                {
                    title: "Science & Tech",
                    audio: "TTS: Smartphone addiction is a modern issue. The airplane made global travel possible. Antibiotics cure many bacterial infections. The automobile changed how cities were built. Early computers were the size of a whole room. We enjoy the convenience of modern gadgets. The development of vaccines saved millions. The radio was a great invention. The internet connects people worldwide. Modern medicine increased our life expectancy. Families used to gather around the radio. Science brought us to the moon. Technology reshapes our daily habits. The television brought news into the living room. Transportation is much faster today. The polio vaccine was a huge breakthrough.",
                    items:[
                        { term: "Addiction", sent: "Smartphone addiction is a modern issue.", trans: "<span style='color:#0077b6'>O vício em smartphones é um problema moderno.</span>" },
                        { term: "Airplane / Plane", sent: "The airplane made global travel possible.", trans: "<span style='color:#0077b6'>O avião tornou as viagens globais possíveis.</span>" },
                        { term: "Antibiotics", sent: "Antibiotics cure many bacterial infections.", trans: "<span style='color:#0077b6'>Antibióticos curam muitas infecções bacterianas.</span>" },
                        { term: "Automobile / Car", sent: "The automobile changed how cities were built.", trans: "<span style='color:#0077b6'>O automóvel mudou como as cidades eram construídas.</span>" },
                        { term: "Computer", sent: "Early computers were the size of a whole room.", trans: "<span style='color:#0077b6'>Os primeiros computadores tinham o tamanho de uma sala inteira.</span>" },
                        { term: "Convenience", sent: "We enjoy the convenience of modern gadgets.", trans: "<span style='color:#0077b6'>Aproveitamos a conveniência dos aparelhos modernos.</span>" },
                        { term: "Development", sent: "The development of vaccines saved millions.", trans: "<span style='color:#0077b6'>O desenvolvimento de vacinas salvou milhões.</span>" },
                        { term: "Invention", sent: "The radio was a great invention.", trans: "<span style='color:#0077b6'>O rádio foi uma grande invenção.</span>" },
                        { term: "Internet / WWW", sent: "The internet connects people worldwide.", trans: "<span style='color:#0077b6'>A internet conecta pessoas mundialmente.</span>" },
                        { term: "Medicine", sent: "Modern medicine increased our life expectancy.", trans: "<span style='color:#0077b6'>A medicina moderna aumentou nossa expectativa de vida.</span>" },
                        { term: "Radio", sent: "Families used to gather around the radio.", trans: "<span style='color:#0077b6'>As famílias costumavam se reunir ao redor do rádio.</span>" },
                        { term: "Science", sent: "Science brought us to the moon.", trans: "<span style='color:#0077b6'>A ciência nos levou à lua.</span>" },
                        { term: "Technology", sent: "Technology reshapes our daily habits.", trans: "<span style='color:#0077b6'>A tecnologia remolda nossos hábitos diários.</span>" },
                        { term: "Television (TV)", sent: "The television brought news into the living room.", trans: "<span style='color:#0077b6'>A televisão trouxe as notícias para a sala de estar.</span>" },
                        { term: "Transportation", sent: "Transportation is much faster today.", trans: "<span style='color:#0077b6'>O transporte é muito mais rápido hoje.</span>" },
                        { term: "Vaccine", sent: "The polio vaccine was a huge breakthrough.", trans: "<span style='color:#0077b6'>A vacina contra a poliomielite foi um enorme avanço.</span>" }
                    ]
                },
                {
                    title: "Politics & Society",
                    audio: "TTS: The activist fought for the environment. Human behavior changed with the internet. We need a change in the education system. Communication is easier now. The economic crisis affected many countries. The UDHR is a historical document. We must strive for equality in our society. Globalization connected the economies of the world. The government must protect its citizens. History teaches us valuable lessons. Inequality is a major issue in the world. Social interaction is different in the Digital Age. Climate change is a critical issue. The new law protects workers' rights. The Civil Rights Movement fought for justice. Everyone desires world peace. Politics shape how a country is run. The politician gave a speech about the economy. We must fight against prejudice. Technological progress is unstoppable. Human rights are universal. Society must adapt to new realities. The soldier fought bravely in the war. Women's suffrage was a major victory. The United Nations promotes global peace. The World War caused immense destruction.",
                    items:[
                        { term: "Activist", sent: "The activist fought for the environment.", trans: "<span style='color:#0077b6'>O ativista lutou pelo meio ambiente.</span>" },
                        { term: "Behavior", sent: "Human behavior changed with the internet.", trans: "<span style='color:#0077b6'>O comportamento humano mudou com a internet.</span>" },
                        { term: "Change", sent: "We need a change in the education system.", trans: "<span style='color:#0077b6'>Precisamos de uma mudança no sistema de educação.</span>" },
                        { term: "Communication", sent: "Communication is easier now.", trans: "<span style='color:#0077b6'>A comunicação é mais fácil agora.</span>" },
                        { term: "Crisis", sent: "The economic crisis affected many countries.", trans: "<span style='color:#0077b6'>A crise econômica afetou muitos países.</span>" },
                        { term: "Document", sent: "The UDHR is a historical document.", trans: "<span style='color:#0077b6'>A DUDH é um documento histórico.</span>" },
                        { term: "Equality", sent: "We must strive for equality in our society.", trans: "<span style='color:#0077b6'>Devemos lutar por igualdade em nossa sociedade.</span>" },
                        { term: "Globalization", sent: "Globalization connected the economies of the world.", trans: "<span style='color:#0077b6'>A globalização conectou as economias do mundo.</span>" },
                        { term: "Government", sent: "The government must protect its citizens.", trans: "<span style='color:#0077b6'>O governo deve proteger seus cidadãos.</span>" },
                        { term: "History", sent: "History teaches us valuable lessons.", trans: "<span style='color:#0077b6'>A história nos ensina lições valiosas.</span>" },
                        { term: "Inequality", sent: "Inequality is a major issue in the world.", trans: "<span style='color:#0077b6'>A desigualdade é um grande problema no mundo.</span>" },
                        { term: "Interaction", sent: "Social interaction is different in the Digital Age.", trans: "<span style='color:#0077b6'>A interação social é diferente na Era Digital.</span>" },
                        { term: "Issue", sent: "Climate change is a critical issue.", trans: "<span style='color:#0077b6'>As mudanças climáticas são uma questão crítica.</span>" },
                        { term: "Law", sent: "The new law protects workers' rights.", trans: "<span style='color:#0077b6'>A nova lei protege os direitos dos trabalhadores.</span>" },
                        { term: "Movement (Civil Rights)", sent: "The Civil Rights Movement fought for justice.", trans: "<span style='color:#0077b6'>O Movimento dos Direitos Civis lutou por justiça.</span>" },
                        { term: "Peace", sent: "Everyone desires world peace.", trans: "<span style='color:#0077b6'>Todos desejam a paz mundial.</span>" },
                        { term: "Politics", sent: "Politics shape how a country is run.", trans: "<span style='color:#0077b6'>A política molda como um país é administrado.</span>" },
                        { term: "Politician", sent: "The politician gave a speech about the economy.", trans: "<span style='color:#0077b6'>O político fez um discurso sobre a economia.</span>" },
                        { term: "Prejudice", sent: "We must fight against prejudice.", trans: "<span style='color:#0077b6'>Devemos lutar contra o preconceito.</span>" },
                        { term: "Progress", sent: "Technological progress is unstoppable.", trans: "<span style='color:#0077b6'>O progresso tecnológico é imparável.</span>" },
                        { term: "Right(s)", sent: "Human rights are universal.", trans: "<span style='color:#0077b6'>Os direitos humanos são universais.</span>" },
                        { term: "Society", sent: "Society must adapt to new realities.", trans: "<span style='color:#0077b6'>A sociedade deve se adaptar às novas realidades.</span>" },
                        { term: "Soldier", sent: "The soldier fought bravely in the war.", trans: "<span style='color:#0077b6'>O soldado lutou bravamente na guerra.</span>" },
                        { term: "Suffrage (Women's)", sent: "Women's suffrage was a major victory.", trans: "<span style='color:#0077b6'>O sufrágio feminino foi uma grande vitória.</span>" },
                        { term: "United Nations (UN)", sent: "The United Nations promotes global peace.", trans: "<span style='color:#0077b6'>A ONU promove a paz global.</span>" },
                        { term: "War", sent: "The World War caused immense destruction.", trans: "<span style='color:#0077b6'>A Guerra Mundial causou destruição imensa.</span>" }
                    ]
                },
                {
                    title: "Concepts & Phrasals",
                    audio: "TTS: The 20th century was full of changes. The concept of democracy is vital. Ignorance puts society in danger. The global economy is recovering. The internet had a massive effect on us. We live in the digital era. The moon landing was a historic event. I saw the computer exhibition at the museum. My generation loves technology. Good health is more important than money. I have a great idea for the project. His speech had a strong impact. History is a good lesson for the future. Life in the past was much simpler. Photos bring back good memories. Did you watch the news today? It was a difficult period in history. Everyone has a different perspective. This old photo is in black and white. She felt deep regret for her actions. We need a solution for this issue. They developed a new strategy. Time goes by so fast. The topic of the debate is equality. The world is constantly changing. She brought up the issue of prejudice. Technology brought about huge changes. This photo brings back many memories. The crisis brought down the economy. The company brought out a new computer. How did the Digital Age come about? I came across an old radio yesterday. Scientists came up with a new vaccine. When did that invention come out? Many soldiers didn't come back from the war. How is the project coming along?",
                    items:[
                        { term: "Century", sent: "The 20th century was full of changes.", trans: "<span style='color:#0077b6'>O século 20 foi cheio de mudanças.</span>" },
                        { term: "Concept", sent: "The concept of democracy is vital.", trans: "<span style='color:#0077b6'>O conceito de democracia é vital.</span>" },
                        { term: "Danger", sent: "Ignorance puts society in danger.", trans: "<span style='color:#0077b6'>A ignorância coloca a sociedade em perigo.</span>" },
                        { term: "Economy", sent: "The global economy is recovering.", trans: "<span style='color:#0077b6'>A economia global está se recuperando.</span>" },
                        { term: "Effect", sent: "The internet had a massive effect on us.", trans: "<span style='color:#0077b6'>A internet teve um efeito massivo sobre nós.</span>" },
                        { term: "Era", sent: "We live in the digital era.", trans: "<span style='color:#0077b6'>Vivemos na era digital.</span>" },
                        { term: "Event", sent: "The moon landing was a historic event.", trans: "<span style='color:#0077b6'>O pouso na lua foi um evento histórico.</span>" },
                        { term: "Exhibition", sent: "I saw the computer exhibition at the museum.", trans: "<span style='color:#0077b6'>Eu vi a exposição de computadores no museu.</span>" },
                        { term: "Generation", sent: "My generation loves technology.", trans: "<span style='color:#0077b6'>Minha geração ama tecnologia.</span>" },
                        { term: "Health", sent: "Good health is more important than money.", trans: "<span style='color:#0077b6'>Uma boa saúde é mais importante que dinheiro.</span>" },
                        { term: "Idea", sent: "I have a great idea for the project.", trans: "<span style='color:#0077b6'>Eu tenho uma ótima ideia para o projeto.</span>" },
                        { term: "Impact", sent: "His speech had a strong impact.", trans: "<span style='color:#0077b6'>O discurso dele teve um forte impacto.</span>" },
                        { term: "Lesson", sent: "History is a good lesson for the future.", trans: "<span style='color:#0077b6'>A história é uma boa lição para o futuro.</span>" },
                        { term: "Life", sent: "Life in the past was much simpler.", trans: "<span style='color:#0077b6'>A vida no passado era muito mais simples.</span>" },
                        { term: "Memories", sent: "Photos bring back good memories.", trans: "<span style='color:#0077b6'>Fotos trazem de volta boas memórias.</span>" },
                        { term: "News", sent: "Did you watch the news today?", trans: "<span style='color:#0077b6'>Você assistiu às notícias hoje?</span>" },
                        { term: "Period", sent: "It was a difficult period in history.", trans: "<span style='color:#0077b6'>Foi um período difícil na história.</span>" },
                        { term: "Perspective", sent: "Everyone has a different perspective.", trans: "<span style='color:#0077b6'>Cada um tem uma perspectiva diferente.</span>" },
                        { term: "Photo", sent: "This old photo is in black and white.", trans: "<span style='color:#0077b6'>Esta foto antiga é em preto e branco.</span>" },
                        { term: "Regret", sent: "She felt deep regret for her actions.", trans: "<span style='color:#0077b6'>Ela sentiu um profundo arrependimento por suas ações.</span>" },
                        { term: "Solution", sent: "We need a solution for this issue.", trans: "<span style='color:#0077b6'>Precisamos de uma solução para este problema.</span>" },
                        { term: "Strategy", sent: "They developed a new strategy.", trans: "<span style='color:#0077b6'>Eles desenvolveram uma nova estratégia.</span>" },
                        { term: "Time", sent: "Time goes by so fast.", trans: "<span style='color:#0077b6'>O tempo passa tão rápido.</span>" },
                        { term: "Topic", sent: "The topic of the debate is equality.", trans: "<span style='color:#0077b6'>O tópico do debate é a igualdade.</span>" },
                        { term: "World", sent: "The world is constantly changing.", trans: "<span style='color:#0077b6'>O mundo está em constante mudança.</span>" },
                        { term: "Bring up", sent: "She brought up the issue of prejudice.", trans: "<span style='color:#0077b6'>Ela mencionou a questão do preconceito.</span>" },
                        { term: "Bring about", sent: "Technology brought about huge changes.", trans: "<span style='color:#0077b6'>A tecnologia provocou grandes mudanças.</span>" },
                        { term: "Bring back", sent: "This photo brings back many memories.", trans: "<span style='color:#0077b6'>Esta foto traz de volta muitas memórias.</span>" },
                        { term: "Bring down", sent: "The crisis brought down the economy.", trans: "<span style='color:#0077b6'>A crise derrubou a economia.</span>" },
                        { term: "Bring out", sent: "The company brought out a new computer.", trans: "<span style='color:#0077b6'>A empresa lançou um novo computador.</span>" },
                        { term: "Come about", sent: "How did the Digital Age come about?", trans: "<span style='color:#0077b6'>Como a Era Digital surgiu?</span>" },
                        { term: "Come across", sent: "I came across an old radio yesterday.", trans: "<span style='color:#0077b6'>Encontrei um rádio antigo por acaso ontem.</span>" },
                        { term: "Come up with", sent: "Scientists came up with a new vaccine.", trans: "<span style='color:#0077b6'>Cientistas criaram/inventaram uma nova vacina.</span>" },
                        { term: "Come out", sent: "When did that invention come out?", trans: "<span style='color:#0077b6'>Quando essa invenção foi lançada?</span>" },
                        { term: "Come back", sent: "Many soldiers didn't come back from the war.", trans: "<span style='color:#0077b6'>Muitos soldados não voltaram da guerra.</span>" },
                        { term: "Come along", sent: "How is the project coming along?", trans: "<span style='color:#0077b6'>Como o projeto está progredindo?</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Was the 20th century a time of change? Tim Berners-Lee created the World Wide Web. The United Nations adopted the UDHR. The Universal Declaration of Human Rights protects us. The Civil Rights Movement fought for equality. Women's suffrage granted women the right to vote. The Cold War caused a lot of tension. We live in the Digital Age. Hurry up! You need to catch up with the group. I prefer face-to-face communication over texting. I wish people had abolished prejudice much earlier. What did you do during last week? I know, everything happens so fast! I wish technology had developed a bit slower.",
                    items:[
                        { term: "The 20th century", sent: "Was the 20th century a time of change?", trans: "<span style='color:#0077b6'>O século 20 foi uma época de mudanças?</span>" },
                        { term: "World Wide Web (WWW)", sent: "Tim Berners-Lee created the World Wide Web.", trans: "<span style='color:#0077b6'>Tim Berners-Lee criou a Rede Mundial de Computadores.</span>" },
                        { term: "United Nations (UN)", sent: "The United Nations adopted the UDHR.", trans: "<span style='color:#0077b6'>As Nações Unidas adotaram a DUDH.</span>" },
                        { term: "Universal Declaration of Human Rights", sent: "The Universal Declaration of Human Rights protects us.", trans: "<span style='color:#0077b6'>A Declaração Universal dos Direitos Humanos nos protege.</span>" },
                        { term: "Civil Rights Movement", sent: "The Civil Rights Movement fought for equality.", trans: "<span style='color:#0077b6'>O movimento pelos direitos civis lutou por igualdade.</span>" },
                        { term: "Women's Rights / Suffrage", sent: "Women's suffrage granted women the right to vote.", trans: "<span style='color:#0077b6'>O sufrágio feminino garantiu às mulheres o direito de votar.</span>" },
                        { term: "Cold War", sent: "The Cold War caused a lot of tension.", trans: "<span style='color:#0077b6'>A Guerra Fria causou muita tensão.</span>" },
                        { term: "Digital Age", sent: "We live in the Digital Age.", trans: "<span style='color:#0077b6'>Nós vivemos na Era Digital.</span>" },
                        { term: "Catch up", sent: "Hurry up! You need to catch up with the group.", trans: "<span style='color:#0077b6'>Apresse-se! Você precisa alcançar o grupo.</span>" },
                        { term: "Face-to-face communication", sent: "I prefer face-to-face communication over texting.", trans: "<span style='color:#0077b6'>Eu prefiro comunicação cara a cara do que mensagens de texto.</span>" },
                        { term: "Much earlier / Much later", sent: "I wish people had abolished prejudice much earlier.", trans: "<span style='color:#0077b6'>Eu gostaria que as pessoas tivessem abolido o preconceito muito antes.</span>" },
                        { term: "Last week", sent: "What did you do during last week?", trans: "<span style='color:#0077b6'>O que você fez durante a semana passada?</span>" },
                        { term: "So fast", sent: "I know, everything happens so fast!", trans: "<span style='color:#0077b6'>Eu sei, tudo acontece tão rápido!</span>" },
                        { term: "A bit slower", sent: "I wish technology had developed a bit slower.", trans: "<span style='color:#0077b6'>Eu gostaria que a tecnologia tivesse se desenvolvido um pouco mais devagar.</span>" }
                    ]
                }
            ], // This closes the exampleGroups array

            // ======================================================
            // 2C: Practice Drills (1 exercise per 2A item) - PART 1
            // ======================================================
            drillGroups:[
                {
                    title: "Verbs A-L",
                    drills:[
                        { q: "Many countries _______ slavery in the 19th century.", options:[{t: "abolished", c: true}, {t: "affected", c: false}, {t: "admitted", c: false}, {t: "accessed", c: false}], type: "mcq" },
                        { q: "Now, everyone can _______ information on the internet.", options:[{t: "access", c: true}, {t: "adapt", c: false}, {t: "admit", c: false}, {t: "addict", c: false}], type: "mcq" },
                        { q: "Humans had to _______ to the fast changes of the Digital Age.", options:[{t: "adapt", c: true}, {t: "abolish", c: false}, {t: "access", c: false}, {t: "appreciate", c: false}], type: "mcq" },
                        { q: "Social media can _______ young people easily.", options:[{t: "addict", c: true}, {t: "admit", c: false}, {t: "adopt", c: false}, {t: "affect", c: false}], type: "mcq" },
                        { q: "The politician finally _______ his mistake to the public.", options:[{t: "admitted", c: true}, {t: "adapted", c: false}, {t: "abolished", c: false}, {t: "accessed", c: false}], type: "mcq" },
                        { q: "The UN _______ the Universal Declaration of Human Rights in 1948.", options:[{t: "adopted", c: true}, {t: "addicted", c: false}, {t: "admitted", c: false}, {t: "affected", c: false}], type: "mcq" },
                        { q: "The war _______ the entire global economy.", options:[{t: "affected", c: true}, {t: "abolished", c: false}, {t: "accessed", c: false}, {t: "admitted", c: false}], type: "mcq" },
                        { q: "We must _______ the progress we made in human rights.", options:[{t: "appreciate", c: true}, {t: "addict", c: false}, {t: "abolish", c: false}, {t: "access", c: false}], type: "mcq" },
                        { q: "Life in the 1900s _______ very difficult compared to today.", options:[{t: "was", c: true}, {t: "brought", c: false}, {t: "caused", c: false}, {t: "changed", c: false}], type: "mcq" },
                        { q: "Science _______ new vaccines and cures to the world.", options:[{t: "brought", c: true}, {t: "was", c: false}, {t: "caused", c: false}, {t: "disappeared", c: false}], type: "mcq" },
                        { q: "Inequality _______ many social crises around the globe.", options:[{t: "causes", c: true}, {t: "comes", c: false}, {t: "continues", c: false}, {t: "creates", c: false}], type: "mcq" },
                        { q: "The invention of the car _______ transportation forever.", options:[{t: "changed", c: true}, {t: "came", c: false}, {t: "caused", c: false}, {t: "decreased", c: false}], type: "mcq" },
                        { q: "Positive changes usually _______ with hard work and dedication.", options:[{t: "come", c: true}, {t: "bring", c: false}, {t: "cause", c: false}, {t: "decrease", c: false}], type: "mcq" },
                        { q: "We must _______ to fight for equality and peace.", options:[{t: "continue", c: true}, {t: "create", c: false}, {t: "disappear", c: false}, {t: "decrease", c: false}], type: "mcq" },
                        { q: "Tim Berners-Lee _______ the World Wide Web.", options:[{t: "created", c: true}, {t: "continued", c: false}, {t: "came", c: false}, {t: "caused", c: false}], type: "mcq" },
                        { q: "Medical advancements _______ the global death rate.", options:[{t: "decrease", c: true}, {t: "desire", c: false}, {t: "develop", c: false}, {t: "disappear", c: false}], type: "mcq" },
                        { q: "Many people _______ world peace more than anything else.", options:[{t: "desire", c: true}, {t: "decrease", c: false}, {t: "disappear", c: false}, {t: "discuss", c: false}], type: "mcq" },
                        { q: "Engineers _______ the first airplane in the 20th century.", options:[{t: "developed", c: true}, {t: "desired", c: false}, {t: "decreased", c: false}, {t: "disappeared", c: false}], type: "mcq" },
                        { q: "Some historical buildings _______ over time due to modernization.", options:[{t: "disappeared", c: true}, {t: "developed", c: false}, {t: "discussed", c: false}, {t: "desired", c: false}], type: "mcq" },
                        { q: "Let's _______ the impact of the Civil Rights Movement.", options:[{t: "discuss", c: true}, {t: "disappear", c: false}, {t: "decrease", c: false}, {t: "develop", c: false}], type: "mcq" },
                        { q: "What did you _______ during your history class last week?", options:[{t: "do", c: true}, {t: "exist", c: false}, {t: "explode", c: false}, {t: "explore", c: false}], type: "mcq" },
                        { q: "Cell phones didn't _______ 100 years ago.", options:[{t: "exist", c: true}, {t: "explode", c: false}, {t: "express", c: false}, {t: "face", c: false}], type: "mcq" },
                        { q: "The global population _______ in the 20th century.", options:[{t: "exploded", c: true}, {t: "existed", c: false}, {t: "explored", c: false}, {t: "expressed", c: false}], type: "mcq" },
                        { q: "Astronauts _______ space for the first time in 1969.", options:[{t: "explored", c: true}, {t: "exploded", c: false}, {t: "existed", c: false}, {t: "expressed", c: false}], type: "mcq" },
                        { q: "Use your art to _______ your perspectives and feelings.", options:[{t: "express", c: true}, {t: "exist", c: false}, {t: "explode", c: false}, {t: "explore", c: false}], type: "mcq" },
                        { q: "Soldiers had to _______ many dangers in the war.", options:[{t: "face", c: true}, {t: "feel", c: false}, {t: "focus", c: false}, {t: "happen", c: false}], type: "mcq" },
                        { q: "I _______ nostalgic when I see old black-and-white photos.", options:[{t: "feel", c: true}, {t: "face", c: false}, {t: "focus", c: false}, {t: "happen", c: false}], type: "mcq" },
                        { q: "We should _______ on finding a solution to the crisis.", options:[{t: "focus", c: true}, {t: "face", c: false}, {t: "feel", c: false}, {t: "have", c: false}], type: "mcq" },
                        { q: "The Cold War _______ after World War II.", options:[{t: "happened", c: true}, {t: "faced", c: false}, {t: "felt", c: false}, {t: "focused", c: false}], type: "mcq" },
                        { q: "She _______ many beautiful memories of her childhood.", options:[{t: "had", c: true}, {t: "happened", c: false}, {t: "faced", c: false}, {t: "felt", c: false}], type: "mcq" },
                        { q: "Who _______ the radio in the late 19th century?", options:[{t: "invented", c: true}, {t: "knew", c: false}, {t: "learned", c: false}, {t: "lived", c: false}], type: "mcq" },
                        { q: "Do you _______ much about your grandparents' generation?", options:[{t: "know", c: true}, {t: "invent", c: false}, {t: "learn", c: false}, {t: "listen", c: false}], type: "mcq" },
                        { q: "We must _______ important lessons from the past.", options:[{t: "learn", c: true}, {t: "live", c: false}, {t: "look", c: false}, {t: "lose", c: false}], type: "mcq" },
                        { q: "My grandmother _______ through the 1940s and saw many changes.", options:[{t: "lived", c: true}, {t: "learned", c: false}, {t: "looked", c: false}, {t: "listened", c: false}], type: "mcq" },
                        { q: "The first automobile _______ like a horse-drawn carriage.", options:[{t: "looked", c: true}, {t: "lived", c: false}, {t: "learned", c: false}, {t: "lost", c: false}], type: "mcq" },
                        { q: "Always _______ to the news carefully to understand the world.", options:[{t: "listen", c: true}, {t: "look", c: false}, {t: "live", c: false}, {t: "lose", c: false}], type: "mcq" },
                        { q: "Don't _______ your rights by not participating in society.", options:[{t: "lose", c: true}, {t: "listen", c: false}, {t: "look", c: false}, {t: "live", c: false}], type: "mcq" },
                        { q: "People _______ the convenience of the Digital Age.", options:[{t: "love", c: true}, {t: "lose", c: false}, {t: "look", c: false}, {t: "listen", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs M-W",
                    drills: [
                        { q: "The activist _______ the crowd with his inspiring speech.", options:[{t: "moved", c: true}, {t: "needed", c: false}, {t: "read", c: false}, {t: "respected", c: false}], type: "mcq" },
                        { q: "We _______ a better strategy for the global economy.", options:[{t: "need", c: true}, {t: "move", c: false}, {t: "read", c: false}, {t: "regret", c: false}], type: "mcq" },
                        { q: "Women _______ suffrage for decades before winning the right to vote.", options:[{t: "pushed for", c: true}, {t: "read", c: false}, {t: "remembered", c: false}, {t: "respected", c: false}], type: "mcq" },
                        { q: "I _______ a book about 20th-century politics yesterday.", options:[{t: "read", c: true}, {t: "reshaped", c: false}, {t: "saved", c: false}, {t: "seemed", c: false}], type: "mcq" },
                        { q: "I _______ when the internet was very slow.", options:[{t: "remember", c: true}, {t: "regret", c: false}, {t: "respect", c: false}, {t: "save", c: false}], type: "mcq" },
                        { q: "He _______ not voting in the last election.", options:[{t: "regretted", c: true}, {t: "reshaped", c: false}, {t: "respected", c: false}, {t: "saved", c: false}], type: "mcq" },
                        { q: "Technology _______ how we communicate with each other.", options:[{t: "reshaped", c: true}, {t: "regretted", c: false}, {t: "remembered", c: false}, {t: "respected", c: false}], type: "mcq" },
                        { q: "We must always _______ the law and human rights.", options:[{t: "respect", c: true}, {t: "reshape", c: false}, {t: "regret", c: false}, {t: "read", c: false}], type: "mcq" },
                        { q: "Modern science and medicine _______ millions of lives.", options:[{t: "save", c: true}, {t: "seem", c: false}, {t: "suffer", c: false}, {t: "stop", c: false}], type: "mcq" },
                        { q: "I can _______ the impact of globalization in my city.", options:[{t: "see", c: true}, {t: "seem", c: false}, {t: "suffer", c: false}, {t: "save", c: false}], type: "mcq" },
                        { q: "The concept _______ very simple now, but it was revolutionary.", options:[{t: "seems", c: true}, {t: "sees", c: false}, {t: "suffers", c: false}, {t: "stops", c: false}], type: "mcq" },
                        { q: "Many people _______ during the economic crisis of the 1930s.", options:[{t: "suffered", c: true}, {t: "seemed", c: false}, {t: "saved", c: false}, {t: "saw", c: false}], type: "mcq" },
                        { q: "We must work together to _______ the war.", options:[{t: "stop", c: true}, {t: "suffer", c: false}, {t: "seem", c: false}, {t: "see", c: false}], type: "mcq" },
                        { q: "_______ your time to study history properly.", options:[{t: "Take", c: true}, {t: "Talk", c: false}, {t: "Tell", c: false}, {t: "Think", c: false}], type: "mcq" },
                        { q: "We should _______ about inequality in our society.", options:[{t: "talk", c: true}, {t: "take", c: false}, {t: "tell", c: false}, {t: "travel", c: false}], type: "mcq" },
                        { q: "_______ me a story about that historical era.", options:[{t: "Tell", c: true}, {t: "Talk", c: false}, {t: "Think", c: false}, {t: "Transform", c: false}], type: "mcq" },
                        { q: "I _______ the World Wide Web is an amazing invention.", options:[{t: "think", c: true}, {t: "tell", c: false}, {t: "talk", c: false}, {t: "take", c: false}], type: "mcq" },
                        { q: "Computers completely _______ the work environment.", options:[{t: "transformed", c: true}, {t: "traveled", c: false}, {t: "talked", c: false}, {t: "told", c: false}], type: "mcq" },
                        { q: "People _______ much more now thanks to airplanes.", options:[{t: "travel", c: true}, {t: "transform", c: false}, {t: "think", c: false}, {t: "tell", c: false}], type: "mcq" },
                        { q: "Which electronic device do you _______ the most?", options:[{t: "use", c: true}, {t: "visit", c: false}, {t: "vote", c: false}, {t: "want", c: false}], type: "mcq" },
                        { q: "Have you ever _______ a history museum to learn about the past?", options:[{t: "visited", c: true}, {t: "used", c: false}, {t: "voted", c: false}, {t: "wished", c: false}], type: "mcq" },
                        { q: "It is your democratic right to _______ in the elections.", options:[{t: "vote", c: true}, {t: "visit", c: false}, {t: "use", c: false}, {t: "want", c: false}], type: "mcq" },
                        { q: "I _______ to learn more about space exploration.", options:[{t: "want", c: true}, {t: "wish", c: false}, {t: "work", c: false}, {t: "visit", c: false}], type: "mcq" },
                        { q: "I _______ for world peace every single day.", options:[{t: "wish", c: true}, {t: "want", c: false}, {t: "work", c: false}, {t: "use", c: false}], type: "mcq" },
                        { q: "My parents _______ at a multinational tech company.", options:[{t: "work", c: true}, {t: "wish", c: false}, {t: "vote", c: false}, {t: "visit", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Science & Tech",
                    drills:[
                        { q: "Smartphone _______ is a modern issue for young people.", options:[{t: "addiction", c: true}, {t: "airplane", c: false}, {t: "antibiotics", c: false}, {t: "convenience", c: false}], type: "mcq" },
                        { q: "The _______ made global travel fast and possible.", options:[{t: "airplane", c: true}, {t: "antibiotic", c: false}, {t: "computer", c: false}, {t: "medicine", c: false}], type: "mcq" },
                        { q: "_______ cure many bacterial infections and save lives.", options:[{t: "Antibiotics", c: true}, {t: "Airplanes", c: false}, {t: "Radios", c: false}, {t: "Televisions", c: false}], type: "mcq" },
                        { q: "The _______ changed how cities and roads were built.", options:[{t: "automobile", c: true}, {t: "antibiotic", c: false}, {t: "internet", c: false}, {t: "vaccine", c: false}], type: "mcq" },
                        { q: "Early _______ models were the size of a whole room.", options:[{t: "computer", c: true}, {t: "airplane", c: false}, {t: "radio", c: false}, {t: "vaccine", c: false}], type: "mcq" },
                        { q: "We enjoy the _______ of having modern gadgets at home.", options:[{t: "convenience", c: true}, {t: "addiction", c: false}, {t: "antibiotic", c: false}, {t: "transportation", c: false}], type: "mcq" },
                        { q: "The _______ of vaccines saved millions from diseases.", options:[{t: "development", c: true}, {t: "convenience", c: false}, {t: "airplane", c: false}, {t: "internet", c: false}], type: "mcq" },
                        { q: "The radio was a great _______ that changed communication.", options:[{t: "invention", c: true}, {t: "addiction", c: false}, {t: "antibiotic", c: false}, {t: "convenience", c: false}], type: "mcq" },
                        { q: "The _______ connects people worldwide instantly.", options:[{t: "internet", c: true}, {t: "airplane", c: false}, {t: "automobile", c: false}, {t: "medicine", c: false}], type: "mcq" },
                        { q: "Modern _______ increased our life expectancy significantly.", options:[{t: "medicine", c: true}, {t: "transportation", c: false}, {t: "television", c: false}, {t: "internet", c: false}], type: "mcq" },
                        { q: "Families used to gather around the _______ to listen to the news.", options:[{t: "radio", c: true}, {t: "airplane", c: false}, {t: "antibiotic", c: false}, {t: "vaccine", c: false}], type: "mcq" },
                        { q: "_______ brought humanity to the moon in 1969.", options:[{t: "Science", c: true}, {t: "Transportation", c: false}, {t: "Convenience", c: false}, {t: "Addiction", c: false}], type: "mcq" },
                        { q: "New _______ reshapes our daily habits and work.", options:[{t: "technology", c: true}, {t: "medicine", c: false}, {t: "antibiotic", c: false}, {t: "vaccine", c: false}], type: "mcq" },
                        { q: "The _______ brought moving pictures and news into the living room.", options:[{t: "television", c: true}, {t: "airplane", c: false}, {t: "automobile", c: false}, {t: "antibiotic", c: false}], type: "mcq" },
                        { q: "Global _______ is much faster today because of planes and trains.", options:[{t: "transportation", c: true}, {t: "medicine", c: false}, {t: "science", c: false}, {t: "television", c: false}], type: "mcq" },
                        { q: "The polio _______ was a huge breakthrough in public health.", options:[{t: "vaccine", c: true}, {t: "airplane", c: false}, {t: "radio", c: false}, {t: "television", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Politics & Society",
                    drills:[
                        { q: "The passionate _______ fought tirelessly for the environment.", options:[{t: "activist", c: true}, {t: "document", c: false}, {t: "behavior", c: false}, {t: "change", c: false}], type: "mcq" },
                        { q: "Human _______ changed significantly with the rise of the internet.", options:[{t: "behavior", c: true}, {t: "history", c: false}, {t: "government", c: false}, {t: "peace", c: false}], type: "mcq" },
                        { q: "We urgently need a _______ in the global education system.", options:[{t: "change", c: true}, {t: "law", c: false}, {t: "crisis", c: false}, {t: "document", c: false}], type: "mcq" },
                        { q: "Global _______ is easier now thanks to smartphones.", options:[{t: "communication", c: true}, {t: "inequality", c: false}, {t: "prejudice", c: false}, {t: "history", c: false}], type: "mcq" },
                        { q: "The economic _______ of 2008 affected many countries.", options:[{t: "crisis", c: true}, {t: "peace", c: false}, {t: "progress", c: false}, {t: "equality", c: false}], type: "mcq" },
                        { q: "The UDHR is a highly important historical _______.", options:[{t: "document", c: true}, {t: "politician", c: false}, {t: "soldier", c: false}, {t: "behavior", c: false}], type: "mcq" },
                        { q: "We must strive for absolute _______ in our society.", options:[{t: "equality", c: true}, {t: "inequality", c: false}, {t: "prejudice", c: false}, {t: "crisis", c: false}], type: "mcq" },
                        { q: "_______ connected the economies and cultures of the world.", options:[{t: "Globalization", c: true}, {t: "Suffrage", c: false}, {t: "War", c: false}, {t: "Prejudice", c: false}], type: "mcq" },
                        { q: "The national _______ must protect its citizens at all times.", options:[{t: "government", c: true}, {t: "document", c: false}, {t: "behavior", c: false}, {t: "history", c: false}], type: "mcq" },
                        { q: "Studying _______ teaches us valuable lessons about the past.", options:[{t: "history", c: true}, {t: "law", c: false}, {t: "peace", c: false}, {t: "progress", c: false}], type: "mcq" },
                        { q: "Income _______ is a major issue in the modern world.", options:[{t: "inequality", c: true}, {t: "equality", c: false}, {t: "peace", c: false}, {t: "progress", c: false}], type: "mcq" },
                        { q: "Social _______ is very different in the Digital Age.", options:[{t: "interaction", c: true}, {t: "document", c: false}, {t: "politician", c: false}, {t: "law", c: false}], type: "mcq" },
                        { q: "Climate change is a critical _______ for our generation.", options:[{t: "issue", c: true}, {t: "soldier", c: false}, {t: "document", c: false}, {t: "peace", c: false}], type: "mcq" },
                        { q: "The new labor _______ protects workers' basic rights.", options:[{t: "law", c: true}, {t: "crisis", c: false}, {t: "prejudice", c: false}, {t: "war", c: false}], type: "mcq" },
                        { q: "The Civil Rights _______ fought for justice in the 1960s.", options:[{t: "Movement", c: true}, {t: "Government", c: false}, {t: "Document", c: false}, {t: "Law", c: false}], type: "mcq" },
                        { q: "Everyone desires world _______ instead of conflicts.", options:[{t: "peace", c: true}, {t: "war", c: false}, {t: "crisis", c: false}, {t: "prejudice", c: false}], type: "mcq" },
                        { q: "Global _______ shape how a country is run internally.", options:[{t: "politics", c: true}, {t: "soldiers", c: false}, {t: "documents", c: false}, {t: "behaviors", c: false}], type: "mcq" },
                        { q: "The _______ gave a speech about the local economy.", options:[{t: "politician", c: true}, {t: "document", c: false}, {t: "interaction", c: false}, {t: "law", c: false}], type: "mcq" },
                        { q: "We must fight against racial and social _______.", options:[{t: "prejudice", c: true}, {t: "peace", c: false}, {t: "equality", c: false}, {t: "progress", c: false}], type: "mcq" },
                        { q: "Technological _______ is unstoppable in the 21st century.", options:[{t: "progress", c: true}, {t: "prejudice", c: false}, {t: "crisis", c: false}, {t: "war", c: false}], type: "mcq" },
                        { q: "Basic human _______ are universal and must be respected.", options:[{t: "rights", c: true}, {t: "prejudices", c: false}, {t: "crises", c: false}, {t: "documents", c: false}], type: "mcq" },
                        { q: "Modern _______ must adapt to new digital realities.", options:[{t: "society", c: true}, {t: "soldier", c: false}, {t: "document", c: false}, {t: "issue", c: false}], type: "mcq" },
                        { q: "The brave _______ fought for his country in the war.", options:[{t: "soldier", c: true}, {t: "politician", c: false}, {t: "activist", c: false}, {t: "document", c: false}], type: "mcq" },
                        { q: "Women's _______ was a major victory for civil rights.", options:[{t: "suffrage", c: true}, {t: "prejudice", c: false}, {t: "crisis", c: false}, {t: "inequality", c: false}], type: "mcq" },
                        { q: "The _______ promotes global peace and cooperation.", options:[{t: "United Nations", c: true}, {t: "Cold War", c: false}, {t: "Digital Age", c: false}, {t: "World Wide Web", c: false}], type: "mcq" },
                        { q: "The World _______ caused immense destruction across Europe.", options:[{t: "War", c: true}, {t: "Peace", c: false}, {t: "Progress", c: false}, {t: "Equality", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Concepts & Phrasals",
                    drills:[
                        { q: "The 20th _______ was full of dramatic changes.", options:[{t: "century", c: true}, {t: "concept", c: false}, {t: "danger", c: false}, {t: "economy", c: false}], type: "mcq" },
                        { q: "The basic _______ of democracy is vital for society.", options:[{t: "concept", c: true}, {t: "century", c: false}, {t: "event", c: false}, {t: "photo", c: false}], type: "mcq" },
                        { q: "Ignorance puts the entire society in _______.", options:[{t: "danger", c: true}, {t: "solution", c: false}, {t: "strategy", c: false}, {t: "health", c: false}], type: "mcq" },
                        { q: "The global _______ is recovering from the recent crisis.", options:[{t: "economy", c: true}, {t: "exhibition", c: false}, {t: "memories", c: false}, {t: "photo", c: false}], type: "mcq" },
                        { q: "The internet had a massive _______ on how we work.", options:[{t: "effect", c: true}, {t: "era", c: false}, {t: "idea", c: false}, {t: "century", c: false}], type: "mcq" },
                        { q: "We currently live in the highly connected digital _______.", options:[{t: "era", c: true}, {t: "effect", c: false}, {t: "concept", c: false}, {t: "danger", c: false}], type: "mcq" },
                        { q: "The moon landing was a historic _______ in 1969.", options:[{t: "event", c: true}, {t: "economy", c: false}, {t: "effect", c: false}, {t: "idea", c: false}], type: "mcq" },
                        { q: "I saw the interesting computer _______ at the local museum.", options:[{t: "exhibition", c: true}, {t: "economy", c: false}, {t: "effect", c: false}, {t: "idea", c: false}], type: "mcq" },
                        { q: "My _______ loves using new technology every day.", options:[{t: "generation", c: true}, {t: "exhibition", c: false}, {t: "century", c: false}, {t: "event", c: false}], type: "mcq" },
                        { q: "Good physical _______ is more important than money.", options:[{t: "health", c: true}, {t: "danger", c: false}, {t: "regret", c: false}, {t: "effect", c: false}], type: "mcq" },
                        { q: "I have a great _______ for our next science project.", options:[{t: "idea", c: true}, {t: "era", c: false}, {t: "event", c: false}, {t: "impact", c: false}], type: "mcq" },
                        { q: "His powerful speech had a strong _______ on the crowd.", options:[{t: "impact", c: true}, {t: "idea", c: false}, {t: "event", c: false}, {t: "health", c: false}], type: "mcq" },
                        { q: "History is a good _______ for predicting the future.", options:[{t: "lesson", c: true}, {t: "life", c: false}, {t: "health", c: false}, {t: "era", c: false}], type: "mcq" },
                        { q: "Daily _______ in the past was much simpler without screens.", options:[{t: "life", c: true}, {t: "lesson", c: false}, {t: "idea", c: false}, {t: "event", c: false}], type: "mcq" },
                        { q: "Looking at old photos brings back good _______.", options:[{t: "memories", c: true}, {t: "news", c: false}, {t: "danger", c: false}, {t: "impact", c: false}], type: "mcq" },
                        { q: "Did you watch the evening _______ on TV today?", options:[{t: "news", c: true}, {t: "memories", c: false}, {t: "era", c: false}, {t: "lesson", c: false}], type: "mcq" },
                        { q: "It was a very difficult _______ in European history.", options:[{t: "period", c: true}, {t: "photo", c: false}, {t: "idea", c: false}, {t: "health", c: false}], type: "mcq" },
                        { q: "Everyone has a different _______ on political issues.", options:[{t: "perspective", c: true}, {t: "photo", c: false}, {t: "period", c: false}, {t: "event", c: false}], type: "mcq" },
                        { q: "This old _______ is printed in black and white.", options:[{t: "photo", c: true}, {t: "perspective", c: false}, {t: "period", c: false}, {t: "idea", c: false}], type: "mcq" },
                        { q: "She felt deep _______ for her bad actions.", options:[{t: "regret", c: true}, {t: "health", c: false}, {t: "news", c: false}, {t: "idea", c: false}], type: "mcq" },
                        { q: "We urgently need a _______ for this complex issue.", options:[{t: "solution", c: true}, {t: "regret", c: false}, {t: "photo", c: false}, {t: "memories", c: false}], type: "mcq" },
                        { q: "They developed a new _______ to win the game.", options:[{t: "strategy", c: true}, {t: "solution", c: false}, {t: "regret", c: false}, {t: "time", c: false}], type: "mcq" },
                        { q: "_______ goes by so fast when you are having fun.", options:[{t: "Time", c: true}, {t: "Topic", c: false}, {t: "World", c: false}, {t: "Strategy", c: false}], type: "mcq" },
                        { q: "The main _______ of the debate is gender equality.", options:[{t: "topic", c: true}, {t: "time", c: false}, {t: "world", c: false}, {t: "photo", c: false}], type: "mcq" },
                        { q: "The whole _______ is constantly changing.", options:[{t: "world", c: true}, {t: "topic", c: false}, {t: "time", c: false}, {t: "lesson", c: false}], type: "mcq" },
                        { q: "She _______ the issue of prejudice during the meeting.", options:[{t: "brought up", c: true}, {t: "brought down", c: false}, {t: "came across", c: false}, {t: "came out", c: false}], type: "mcq" },
                        { q: "Technology _______ huge changes in our daily routines.", options:[{t: "brought about", c: true}, {t: "brought back", c: false}, {t: "came up with", c: false}, {t: "came back", c: false}], type: "mcq" },
                        { q: "This old photo _______ many happy memories.", options:[{t: "brings back", c: true}, {t: "brings down", c: false}, {t: "comes across", c: false}, {t: "comes along", c: false}], type: "mcq" },
                        { q: "The financial crisis _______ the global economy.", options:[{t: "brought down", c: true}, {t: "brought out", c: false}, {t: "came out", c: false}, {t: "came about", c: false}], type: "mcq" },
                        { q: "The tech company _______ a new computer model.", options:[{t: "brought out", c: true}, {t: "brought up", c: false}, {t: "came back", c: false}, {t: "came across", c: false}], type: "mcq" },
                        { q: "How did the Digital Age exactly _______?", options:[{t: "come about", c: true}, {t: "bring down", c: false}, {t: "bring out", c: false}, {t: "come along", c: false}], type: "mcq" },
                        { q: "I _______ an old radio while cleaning the attic yesterday.", options:[{t: "came across", c: true}, {t: "came out", c: false}, {t: "brought back", c: false}, {t: "brought up", c: false}], type: "mcq" },
                        { q: "Scientists _______ a new vaccine in record time.", options:[{t: "came up with", c: true}, {t: "came back", c: false}, {t: "brought down", c: false}, {t: "brought out", c: false}], type: "mcq" },
                        { q: "When did that new smartphone invention _______?", options:[{t: "come out", c: true}, {t: "come back", c: false}, {t: "bring up", c: false}, {t: "bring down", c: false}], type: "mcq" },
                        { q: "Sadly, many brave soldiers didn't _______ from the war.", options:[{t: "come back", c: true}, {t: "come along", c: false}, {t: "bring out", c: false}, {t: "bring about", c: false}], type: "mcq" },
                        { q: "How is your school science project _______?", options:[{t: "coming along", c: true}, {t: "coming back", c: false}, {t: "bringing back", c: false}, {t: "bringing down", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    drills:[
                        { q: "Was _______ a time of massive societal change?", options:[{t: "the 20th century", c: true}, {t: "the Digital Age", c: false}, {t: "face-to-face communication", c: false}, {t: "much earlier", c: false}], type: "mcq" },
                        { q: "Tim Berners-Lee is credited with creating the _______.", options:[{t: "World Wide Web", c: true}, {t: "United Nations", c: false}, {t: "Civil Rights Movement", c: false}, {t: "Cold War", c: false}], type: "mcq" },
                        { q: "The _______ is an international organization formed to maintain peace.", options:[{t: "United Nations", c: true}, {t: "World Wide Web", c: false}, {t: "Cold War", c: false}, {t: "Digital Age", c: false}], type: "mcq" },
                        { q: "The _______ protects the basic freedoms of every human.", options:[{t: "Universal Declaration of Human Rights", c: true}, {t: "World Wide Web", c: false}, {t: "Cold War", c: false}, {t: "Digital Age", c: false}], type: "mcq" },
                        { q: "The _______ fought to end segregation and ensure equality.", options:[{t: "Civil Rights Movement", c: true}, {t: "United Nations", c: false}, {t: "Cold War", c: false}, {t: "World Wide Web", c: false}], type: "mcq" },
                        { q: "_______ granted women the legal right to vote.", options:[{t: "Women's suffrage", c: true}, {t: "The Cold War", c: false}, {t: "Face-to-face communication", c: false}, {t: "The Digital Age", c: false}], type: "mcq" },
                        { q: "The _______ caused a lot of political tension between superpowers.", options:[{t: "Cold War", c: true}, {t: "Digital Age", c: false}, {t: "World Wide Web", c: false}, {t: "Civil Rights Movement", c: false}], type: "mcq" },
                        { q: "We currently live in the _______, surrounded by computers.", options:[{t: "Digital Age", c: true}, {t: "Cold War", c: false}, {t: "20th century", c: false}, {t: "Civil Rights Movement", c: false}], type: "mcq" },
                        { q: "Hurry up! You need to _______ with the rest of the tour group.", options:[{t: "catch up", c: true}, {t: "a bit slower", c: false}, {t: "so fast", c: false}, {t: "much earlier", c: false}], type: "mcq" },
                        { q: "I prefer _______ rather than texting on my phone.", options:[{t: "face-to-face communication", c: true}, {t: "the Digital Age", c: false}, {t: "the 20th century", c: false}, {t: "the Cold War", c: false}], type: "mcq" },
                        { q: "I wish people had abolished prejudice _______.", options:[{t: "much earlier", c: true}, {t: "so fast", c: false}, {t: "a bit slower", c: false}, {t: "catch up", c: false}], type: "mcq" },
                        { q: "What did you do during _______?", options:[{t: "last week", c: true}, {t: "so fast", c: false}, {t: "a bit slower", c: false}, {t: "much earlier", c: false}], type: "mcq" },
                        { q: "I know, everything happens _______ nowadays!", options:[{t: "so fast", c: true}, {t: "much earlier", c: false}, {t: "a bit slower", c: false}, {t: "last week", c: false}], type: "mcq" },
                        { q: "I wish technology had developed _______ so we could adapt.", options:[{t: "a bit slower", c: true}, {t: "so fast", c: false}, {t: "much earlier", c: false}, {t: "catch up", c: false}], type: "mcq" }
                    ]
                }
            ] // This closes the drillGroups array
        }, // This closes Step 2 completely

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

            // 3A: Explanations (Detailed Tabbed Boxes)
            patterns:[
                {
                    title: "WISH + Simple Past (Present Wishes)",
                    audio: "TTS: We use wish followed by the Simple Past to express that we want a current situation to be different. It is used for unreal or impossible presents.",
                    explanation: "We use \"wish\" followed by the Simple Past to express that we want a current situation to be different. It is used for \"unreal\" or impossible presents.<br><span style='color:#0077b6; font-style:italic;'>(Usamos \"wish\" seguido pelo Simple Past para expressar que queremos que uma situação atual seja diferente. É usado para presentes \"irreais\" ou impossíveis.)</span>",
                    samples:[
                        { en: "<b>Rule for \"TO BE\"</b>: In formal English, use <b>WERE</b> for all subjects (I, you, he, she, it, we, they).", pt: "<span style='color:#0077b6'>(Regra para o verbo TO BE: No inglês formal, use WERE para todos os sujeitos.)</span>" },
                        { en: "Ex: I <b>wish</b> I <b>had</b> more free time to study history.", pt: "<span style='color:#0077b6'>(Eu desejo/queria que eu tivesse mais tempo livre para estudar história.)</span>" },
                        { en: "Ex: Albert <b>wishes</b> he <b>knew</b> how to fix that old radio.", pt: "<span style='color:#0077b6'>(Albert queria que ele soubesse como consertar aquele rádio antigo.)</span>" },
                        { en: "Ex: We <b>wish</b> technology <b>were</b> less addictive.", pt: "<span style='color:#0077b6'>(Nós desejamos que a tecnologia fosse menos viciante.)</span>" },
                        { en: "Ex: Celine <b>wishes</b> she <b>lived</b> in a world with total equality.", pt: "<span style='color:#0077b6'>(Celine queria que ela vivesse em um mundo com igualdade total.)</span>" }
                    ]
                },
                {
                    title: "WISH + Past Perfect (Past Regrets)",
                    audio: "TTS: We use wish followed by the Past Perfect to express regrets about things that happened or didn't happen in the past.",
                    explanation: "We use \"wish\" followed by the Past Perfect (had + past participle) to express regrets about things that happened or didn't happen in the past.<br><span style='color:#0077b6; font-style:italic;'>(Usamos \"wish\" seguido pelo Past Perfect para expressar arrependimentos sobre coisas que aconteceram ou não no passado.)</span>",
                    samples:[
                        { en: "Ex: I <b>wish</b> the World Wars <b>hadn't happened</b>.", pt: "<span style='color:#0077b6'>(Eu queria que as Guerras Mundiais não tivessem acontecido.)</span>" },
                        { en: "Ex: She <b>wishes</b> she <b>had visited</b> the exhibition last week.", pt: "<span style='color:#0077b6'>(Ela queria que ela tivesse visitado a exposição semana passada.)</span>" },
                        { en: "Ex: Albert <b>wishes</b> he <b>hadn't missed</b> the documentary.", pt: "<span style='color:#0077b6'>(Albert queria que ele não tivesse perdido o documentário.)</span>" },
                        { en: "Ex: They <b>wish</b> science <b>had developed</b> vaccines much earlier.", pt: "<span style='color:#0077b6'>(Eles desejam que a ciência tivesse desenvolvido vacinas muito antes.)</span>" }
                    ]
                },
                {
                    title: "WISH + WOULD (Future Changes & Annoyances)",
                    audio: "TTS: We use wish plus would to express a desire for someone else's behavior to change, or to complain about an annoying current situation.",
                    explanation: "We use \"wish + would\" to express a desire for someone else's behavior to change, or to complain about an annoying current situation.<br><span style='color:#0077b6; font-style:italic;'>(Usamos \"wish + would\" para expressar o desejo de que o comportamento de outra pessoa mude, ou para reclamar de uma situação atual irritante.)</span>",
                    samples:[
                        { en: "<b>Note</b>: You cannot use \"would\" if the subject of \"wish\" and \"would\" is the same person (e.g., \"I wish I would...\" is incorrect).", pt: "<span style='color:#0077b6'>(Nota: Você não pode usar \"would\" se o sujeito de \"wish\" e \"would\" for a mesma pessoa.)</span>" },
                        { en: "Ex: I <b>wish</b> the news <b>would stop</b> showing so much crisis.", pt: "<span style='color:#0077b6'>(Eu queria que as notícias parassem de mostrar tanta crise.)</span>" },
                        { en: "Ex: Celine <b>wishes</b> politicians <b>would focus</b> on peace.", pt: "<span style='color:#0077b6'>(Celine deseja que os políticos focassem na paz.)</span>" },
                        { en: "Ex: Albert <b>wishes</b> people <b>would use</b> the internet more responsibly.", pt: "<span style='color:#0077b6'>(Albert queria que as pessoas usassem a internet de forma mais responsável.)</span>" },
                        { en: "Ex: I <b>wish</b> the Digital Age <b>would slow down</b> a little bit.", pt: "<span style='color:#0077b6'>(Eu queria que a Era Digital desacelerasse um pouquinho.)</span>" }
                    ]
                },
                {
                    title: "Phrasal Verbs with BRING and COME",
                    audio: "TTS: These verbs change meaning based on the particle used. For example, bring about means to cause to happen, while come across means to find by chance.",
                    explanation: "These verbs change meaning based on the particle (preposition/adverb) used.<br><span style='color:#0077b6; font-style:italic;'>(Estes verbos mudam de significado com base na partícula usada.)</span>",
                    samples:[
                        { en: "<b>Bring about</b>: Cause to happen. Ex: Technology <b>brought about</b> huge changes.", pt: "<span style='color:#0077b6'>(Causar/provocar. Ex: A tecnologia provocou grandes mudanças.)</span>" },
                        { en: "<b>Bring up</b>: Mention a topic. Ex: She <b>brought up</b> the suffrage movement.", pt: "<span style='color:#0077b6'>(Mencionar algo. Ex: Ela mencionou o movimento pelo sufrágio.)</span>" },
                        { en: "<b>Bring back</b>: Return/Cause to remember. Ex: Old photos <b>bring back</b> happy memories.", pt: "<span style='color:#0077b6'>(Trazer de volta. Ex: Fotos antigas trazem de volta memórias felizes.)</span>" },
                        { en: "<b>Bring down</b>: Reduce/Cause to fall. Ex: The crisis <b>brought down</b> the economy.", pt: "<span style='color:#0077b6'>(Reduzir/Derrubar. Ex: A crise derrubou a economia.)</span>" },
                        { en: "<b>Bring out</b>: Release/Emphasize. Ex: They <b>brought out</b> a new computer.", pt: "<span style='color:#0077b6'>(Lançar/Realçar. Ex: Eles lançaram um novo computador.)</span>" },
                        { en: "<b>Come about</b>: Happen/Occur. Ex: How did the internet <b>come about</b>?", pt: "<span style='color:#0077b6'>(Acontecer/Surgir. Ex: Como a internet surgiu?)</span>" },
                        { en: "<b>Come across</b>: Find by chance. Ex: I <b>came across</b> a historical document.", pt: "<span style='color:#0077b6'>(Encontrar por acaso. Ex: Eu encontrei um documento histórico por acaso.)</span>" },
                        { en: "<b>Come up with</b>: Think of/Invent. Ex: Scientists <b>came up with</b> new vaccines.", pt: "<span style='color:#0077b6'>(Criar/Inventar. Ex: Cientistas inventaram novas vacinas.)</span>" },
                        { en: "<b>Come out</b>: Be published/Known. Ex: When did the UDHR <b>come out</b>?", pt: "<span style='color:#0077b6'>(Ser lançado/Publicado. Ex: Quando a DUDH foi lançada?)</span>" },
                        { en: "<b>Come along</b>: Progress/Accompany. Ex: The research is <b>coming along</b> well.", pt: "<span style='color:#0077b6'>(Progredir/Acompanhar. Ex: A pesquisa está progredindo bem.)</span>" }
                    ]
                }
            ],

            // 3B: Natural Examples (Grouped in Boxes)
            dialogueGroups:[
                {
                    title: "Dialogue 1: Present Wishes & Annoyances",
                    audio: "audio/em2-3-8/step3_dialogue1.mp3",
                    lines:[
                        { speaker: "Albert", text: "Celine, I wish I were better at face-to-face communication.", pt: "<span style='color:#0077b6'>(Celine, eu queria ser melhor em comunicação cara a cara.)</span>" },
                        { speaker: "Celine", text: "You are fine! But I wish you would stop checking your smartphone while we talk.", pt: "<span style='color:#0077b6'>(Você é ótimo! Mas eu queria que você parasse de checar seu smartphone enquanto conversamos.)</span>" },
                        { speaker: "Albert", text: "Sorry! I wish this device weren't so addictive.", pt: "<span style='color:#0077b6'>(Desculpe! Eu queria que este dispositivo não fosse tão viciante.)</span>" }
                    ]
                },
                {
                    title: "Dialogue 2: Past Regrets & Phrasal Verbs",
                    audio: "audio/em2-3-8/step3_dialogue2.mp3",
                    lines:[
                        { speaker: "Celine", text: "I wish I had seen the Civil Rights Movement in the 60s.", pt: "<span style='color:#0077b6'>(Eu queria ter visto o Movimento dos Direitos Civis nos anos 60.)</span>" },
                        { speaker: "Albert", text: "It brought about great progress. I wish more people had supported the activists then.", pt: "<span style='color:#0077b6'>(Isso provocou grande progresso. Eu queria que mais pessoas tivessem apoiado os ativistas na época.)</span>" },
                        { speaker: "Celine", text: "True. At least someone came up with the Universal Declaration of Human Rights.", pt: "<span style='color:#0077b6'>(Verdade. Pelo menos alguém criou a Declaração Universal dos Direitos Humanos.)</span>" }
                    ]
                },
                {
                    title: "Dialogue 3: The Impact of Technology",
                    audio: "audio/em2-3-8/step3_dialogue3.mp3",
                    lines:[
                        { speaker: "Albert", text: "The new virtual reality headset came out yesterday.", pt: "<span style='color:#0077b6'>(O novo fone de realidade virtual foi lançado ontem.)</span>" },
                        { speaker: "Celine", text: "I wish they would bring down the prices a bit, it's too expensive.", pt: "<span style='color:#0077b6'>(Eu queria que eles baixassem os preços um pouco, está muito caro.)</span>" }
                    ]
                },
                {
                    title: "Dialogue 4: Looking Back at History",
                    audio: "audio/em2-3-8/step3_dialogue4.mp3",
                    lines:[
                        { speaker: "Celine", text: "I wish the Cold War hadn't happened. It caused so much fear.", pt: "<span style='color:#0077b6'>(Eu queria que a Guerra Fria não tivesse acontecido. Ela causou muito medo.)</span>" },
                        { speaker: "Albert", text: "Me too. Looking at old documents brings back a lot of sad memories for older generations.", pt: "<span style='color:#0077b6'>(Eu também. Olhar documentos antigos traz de volta muitas memórias tristes para as gerações mais velhas.)</span>" }
                    ]
                }
            ],

            // 3C: Grammar Practice (Exhaustive - 40 items)
            grammarDrillGroups:[
                {
                    title: "1. WISH + Simple Past (Present Wishes)",
                    drills:[
                        { q: "I am very short. I wish I _______ taller.", options:[{t: "were", c: true}, {t: "am", c: false}, {t: "had been", c: false}, {t: "would be", c: false}], type: "mcq" },
                        { q: "Albert doesn't understand politics. He wishes he _______ it.", options:[{t: "understood", c: true}, {t: "understands", c: false}, {t: "would understand", c: false}, {t: "had understood", c: false}], type: "mcq" },
                        { q: "We live in a noisy city. I wish we _______ in the countryside.", options:[{t: "lived", c: true}, {t: "live", c: false}, {t: "would live", c: false}, {t: "had lived", c: false}], type: "mcq" },
                        { q: "You don't respect my rights. I wish you _______ them.", options:[{t: "respected", c: true}, {t: "respect", c: false}, {t: "had respected", c: false}, {t: "would respect", c: false}], type: "mcq" },
                        { q: "It's so hot today. I wish it _______ a little cooler.", options:[{t: "were", c: true}, {t: "was", c: false}, {t: "is", c: false}, {t: "had been", c: false}], type: "mcq" },
                        { q: "She doesn't know the answer. She wishes she _______ it.", options:[{t: "knew", c: true}, {t: "knows", c: false}, {t: "has known", c: false}, {t: "will know", c: false}], type: "mcq" },
                        { q: "They are always busy. They wish they _______ more free time.", options:[{t: "had", c: true}, {t: "have", c: false}, {t: "had had", c: false}, {t: "having", c: false}], type: "mcq" },
                        { q: "I can't speak French. I wish I _______ speak it.", options:[{t: "could", c: true}, {t: "can", c: false}, {t: "could have", c: false}, {t: "am able to", c: false}], type: "mcq" },
                        { q: "My phone battery dies so fast. I wish it _______ longer.", options:[{t: "lasted", c: true}, {t: "lasts", c: false}, {t: "has lasted", c: false}, {t: "would lasted", c: false}], type: "mcq" },
                        { q: "The internet is slow here. I wish it _______ faster.", options:[{t: "were", c: true}, {t: "is", c: false}, {t: "had been", c: false}, {t: "was being", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "2. WISH + Past Perfect (Past Regrets)",
                    drills:[
                        { q: "I didn't go to the exhibition. I wish I _______.", options:[{t: "had gone", c: true}, {t: "went", c: false}, {t: "would go", c: false}, {t: "have gone", c: false}], type: "mcq" },
                        { q: "The war happened in 1939. We wish it _______.", options:[{t: "hadn't happened", c: true}, {t: "didn't happen", c: false}, {t: "wouldn't happen", c: false}, {t: "hasn't happened", c: false}], type: "mcq" },
                        { q: "She didn't learn about century history. She wishes she _______.", options:[{t: "had studied", c: true}, {t: "studied", c: false}, {t: "would study", c: false}, {t: "has studied", c: false}], type: "mcq" },
                        { q: "They lost the historical document. They wish they _______ more careful.", options:[{t: "had been", c: true}, {t: "were", c: false}, {t: "would be", c: false}, {t: "have been", c: false}], type: "mcq" },
                        { q: "He crashed his new car. He wishes he _______ so fast.", options:[{t: "hadn't driven", c: true}, {t: "didn't drive", c: false}, {t: "wouldn't drive", c: false}, {t: "hasn't driven", c: false}], type: "mcq" },
                        { q: "I missed the documentary. I wish I _______ the TV earlier.", options:[{t: "had turned on", c: true}, {t: "turned on", c: false}, {t: "would turn on", c: false}, {t: "turn on", c: false}], type: "mcq" },
                        { q: "We didn't vote in the last election. We wish we _______.", options:[{t: "had voted", c: true}, {t: "voted", c: false}, {t: "would vote", c: false}, {t: "have voted", c: false}], type: "mcq" },
                        { q: "She ate too much candy. She wishes she _______ it.", options:[{t: "hadn't eaten", c: true}, {t: "didn't eat", c: false}, {t: "wouldn't eat", c: false}, {t: "hasn't eaten", c: false}], type: "mcq" },
                        { q: "They arrived late to the museum. They wish they _______ the train.", options:[{t: "had caught", c: true}, {t: "caught", c: false}, {t: "would catch", c: false}, {t: "catch", c: false}], type: "mcq" },
                        { q: "I didn't bring my camera. I wish I _______ it with me.", options:[{t: "had brought", c: true}, {t: "brought", c: false}, {t: "would bring", c: false}, {t: "bring", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "3. WISH + WOULD (Future Changes / Annoyances)",
                    drills:[
                        { q: "The news is always sad. I wish they _______ more peace.", options:[{t: "would show", c: true}, {t: "showed", c: false}, {t: "had shown", c: false}, {t: "show", c: false}], type: "mcq" },
                        { q: "It's raining during our trip. I wish it _______ raining!", options:[{t: "would stop", c: true}, {t: "stopped", c: false}, {t: "had stopped", c: false}, {t: "stops", c: false}], type: "mcq" },
                        { q: "You are talking too fast. I wish you _______ a bit slower.", options:[{t: "would speak", c: true}, {t: "spoke", c: false}, {t: "had spoken", c: false}, {t: "speak", c: false}], type: "mcq" },
                        { q: "Celine is always late. Albert wishes she _______ on time.", options:[{t: "would arrive", c: true}, {t: "arrived", c: false}, {t: "had arrived", c: false}, {t: "arrives", c: false}], type: "mcq" },
                        { q: "The dog keeps barking. I wish it _______ quiet.", options:[{t: "would be", c: true}, {t: "was", c: false}, {t: "had been", c: false}, {t: "is", c: false}], type: "mcq" },
                        { q: "My neighbor plays loud music. I wish he _______ the volume down.", options:[{t: "would turn", c: true}, {t: "turned", c: false}, {t: "had turned", c: false}, {t: "turns", c: false}], type: "mcq" },
                        { q: "People throw trash on the street. I wish they _______ the city clean.", options:[{t: "would keep", c: true}, {t: "kept", c: false}, {t: "had kept", c: false}, {t: "keep", c: false}], type: "mcq" },
                        { q: "The internet keeps disconnecting. I wish it _______ working properly.", options:[{t: "would start", c: true}, {t: "started", c: false}, {t: "had started", c: false}, {t: "starts", c: false}], type: "mcq" },
                        { q: "Politicians argue all the time. I wish they _______ on real issues.", options:[{t: "would focus", c: true}, {t: "focused", c: false}, {t: "had focused", c: false}, {t: "focus", c: false}], type: "mcq" },
                        { q: "You are always looking at your phone. I wish you _______ to me.", options:[{t: "would listen", c: true}, {t: "listened", c: false}, {t: "had listened", c: false}, {t: "listen", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "4. Phrasal Verbs (BRING & COME)",
                    drills:[
                        { q: "Scientists are trying to _______ a new solution for the crisis.", options:[{t: "come up with", c: true}, {t: "bring up", c: false}, {t: "come across", c: false}, {t: "come back", c: false}], type: "mcq" },
                        { q: "Looking at old photos always _______ many memories.", options:[{t: "brings back", c: true}, {t: "brings about", c: false}, {t: "comes out", c: false}, {t: "brings in", c: false}], type: "mcq" },
                        { q: "The Digital Age _______ rapidly because of the computer.", options:[{t: "came about", c: true}, {t: "brought up", c: false}, {t: "came across", c: false}, {t: "brought out", c: false}], type: "mcq" },
                        { q: "My teacher _______ the topic of suffrage in class today.", options:[{t: "brought up", c: true}, {t: "came out", c: false}, {t: "came along", c: false}, {t: "brought down", c: false}], type: "mcq" },
                        { q: "I _______ a fascinating article about the Cold War online.", options:[{t: "came across", c: true}, {t: "brought back", c: false}, {t: "came about", c: false}, {t: "brought up", c: false}], type: "mcq" },
                        { q: "The massive economic crisis _______ the entire global market.", options:[{t: "brought down", c: true}, {t: "came out", c: false}, {t: "brought out", c: false}, {t: "came across", c: false}], type: "mcq" },
                        { q: "When did the new smartphone model _______?", options:[{t: "come out", c: true}, {t: "bring out", c: false}, {t: "come along", c: false}, {t: "bring back", c: false}], type: "mcq" },
                        { q: "The tech company is going to _______ a revolutionary gadget soon.", options:[{t: "bring out", c: true}, {t: "come out", c: false}, {t: "bring down", c: false}, {t: "come about", c: false}], type: "mcq" },
                        { q: "The internet _______ massive changes in how we communicate.", options:[{t: "brought about", c: true}, {t: "came up with", c: false}, {t: "brought back", c: false}, {t: "came along", c: false}], type: "mcq" },
                        { q: "How is your history project _______? Are you almost finished?", options:[{t: "coming along", c: true}, {t: "bringing back", c: false}, {t: "coming out", c: false}, {t: "bringing up", c: false}], type: "mcq" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 4: SHADOWING
        // ======================================================
        {
            title: "Can you say that again?",
            sentences:[
                { text: "I wish I knew more about the 20th century. ↘<br><small style='color:#0077b6'>(Quem me dera saber mais sobre o século 20.)</small>", audio: "TTS: I wish I knew more about the 20th century.", arrow: "↘" },
                { text: "I wish the Digital Age would slow down. ↘<br><small style='color:#0077b6'>(Eu gostaria que a Era Digital desacelerasse.)</small>", audio: "TTS: I wish the Digital Age would slow down.", arrow: "↘" },
                { text: "Do you wish you had lived in a different time? ↗<br><small style='color:#0077b6'>(Você gostaria de ter vivido em uma época diferente?)</small>", audio: "TTS: Do you wish you had lived in a different time?", arrow: "↗" },
                { text: "I wish they had abolished prejudice earlier. ↘<br><small style='color:#0077b6'>(Eu gostaria que tivessem abolido o preconceito mais cedo.)</small>", audio: "TTS: I wish they had abolished prejudice earlier.", arrow: "↘" },
                { text: "If only people would use the internet responsibly! ↘<br><small style='color:#0077b6'>(Se ao menos as pessoas usassem a internet com responsabilidade!)</small>", audio: "TTS: If only people would use the internet responsibly!", arrow: "↘" },
                { text: "The invention of the car brought about huge changes. ↘<br><small style='color:#0077b6'>(A invenção do carro provocou grandes mudanças.)</small>", audio: "TTS: The invention of the car brought about huge changes.", arrow: "↘" },
                { text: "I wish the World Wars hadn't happened. ↘<br><small style='color:#0077b6'>(Eu queria que as Guerras Mundiais não tivessem acontecido.)</small>", audio: "TTS: I wish the World Wars hadn't happened.", arrow: "↘" },
                { text: "We wish technology were less addictive. ↘<br><small style='color:#0077b6'>(Desejamos que a tecnologia fosse menos viciante.)</small>", audio: "TTS: We wish technology were less addictive.", arrow: "↘" },
                { text: "I wish I had seen the suffrage movement. ↘<br><small style='color:#0077b6'>(Eu queria ter visto o movimento pelo sufrágio.)</small>", audio: "TTS: I wish I had seen the suffrage movement.", arrow: "↘" },
                { text: "Tim Berners-Lee came up with the World Wide Web. ↘<br><small style='color:#0077b6'>(Tim Berners-Lee criou a Rede Mundial de Computadores.)</small>", audio: "TTS: Tim Berners-Lee came up with the World Wide Web.", arrow: "↘" }
            ]
        },

        // ======================================================
        // STEP 5: LISTENING
        // ======================================================
        {
            title: "Are you following me?",
            drills:[
                {
                    type: "typing",
                    instruction: "Listen to Albert talking about his visit to the museum and type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre sua visita ao museu e digite as palavras que faltam.)</small>",
                    audio: "TTS: The exhibition was great, but I wish I had arrived earlier. I missed the section about space exploration. I came across a very old computer that occupied a whole room. I wish I could understand how people worked without the internet!",
                    text: "The [exhibition] was great, but I [wish] I[had] [arrived] earlier. I [missed] the section about space [exploration]. I [came across] a very old [computer] that [occupied] a whole room. I wish I [could] [understand] how people [worked] without the [internet]!"
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue between Celine and an Older Citizen and choose the correct options.<br><small style='color:#0077b6'>(Ouça o diálogo entre Celine e um Cidadão Idoso e escolha as opções corretas.)</small>",
                    audio: "audio/em2-3-8/p5_dialogue.mp3 | TTS: Celine: Sir, do you wish you lived in the Digital Age when you were young? Citizen: Not really. I wish young people would talk face-to-face more. Celine: I see. Technology brought about convenience, but also isolation. Citizen: Exactly. I wish we had kept some of the old behaviors.",
                    questions:[
                        { q: "Celine: Sir, do you wish you [lived* | had lived | would live] in the Digital Age when you were young?", a: "lived" },
                        { q: "Citizen: Not really. I wish young people[would talk* | talked | had talked] face-to-face more.", a: "would talk" },
                        { q: "Celine: I see. Technology [brought about* | brought up | brought in] convenience, but also isolation.", a: "brought about" },
                        { q: "Citizen: Exactly. I wish we [had kept* | keep | would keep] some of the old behaviors.", a: "had kept" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the audio question and choose the logical response based on the 'Wish' rules.<br><small style='color:#0077b6'>(Ouça a pergunta em áudio e escolha a resposta lógica baseada nas regras de 'Wish'.)</small>",
                    audio: "TTS: Celine looks upset about her grade. What does she say?",
                    options:[
                        { t: "I wish I know the answer now.", c: false },
                        { t: "I wish I had studied more last week.", c: true },
                        { t: "I wish the recession happened.", c: false },
                        { t: "I wish I am an activist.", c: false }
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
                    title: "Narration - A Century of Shifts",
                    audio: "audio/em2-3-8/p6_text1.mp3 | TTS: The 20th century was a period of explosive change. History brought about globalization and the rise of the internet. However, many people wish the world had focused more on peace than on war. The Universal Declaration of Human Rights came",
                    body: "The [20th century](tooltip:20th-century) was a[period](tooltip:period) of [explosive](tooltip:explosive) [change](tooltip:change).[History](tooltip:history) [brought about](tooltip:bring-about) [globalization](tooltip:globalization) and the rise of the [internet](tooltip:internet). However, many people [wish](tooltip:wish) the [world](tooltip:world) had [focused](tooltip:focus) more on [peace](tooltip:peace) than on [war](tooltip:war). The [Universal Declaration of Human Rights](tooltip:udhr) [came out](tooltip:come-out) in 1948, but [activists](tooltip:activist) still [wish](tooltip:wish) that [equality](tooltip:equality) were a reality for everyone. As we [explore](tooltip:explore) the [Digital Age](tooltip:digital-age), we must [remember](tooltip:remember) the [lessons](tooltip:lesson) of the past to [reshape](tooltip:reshape) our [future](tooltip:future).",
                    questions: [
                        { q: "When did the UDHR come out?", options:[{t: "In the 19th century.", c: false}, {t: "In 1948.", c: true}, {t: "Last week.", c: false}], type: "mcq" },
                        { q: "What is a common regret mentioned in the text?", options:[{t: "That the Digital Age was slow.", c: false}, {t: "That the world didn't focus more on peace.", c: true}, {t: "That globalization never happened.", c: false}], type: "mcq" },
                        { q: "What is the narrator's advice for the future?", options:[{t: "To forget the past.", c: false}, {t: "To vote more often.", c: false}, {t: "To remember past lessons to reshape the future.", c: true}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Time Travel Dreams",
                    audio: "audio/em2-3-8/p6_text2.mp3",
                    body: "<b>Albert:</b> Celine, if you had a time machine, would you [visit](tooltip:visit) the past?<br><b>Celine:</b> Definitely! I [wish](tooltip:wish) I could [see](tooltip:see) the [suffrage](tooltip:suffrage) [movement](tooltip:movement). I [wish](tooltip:wish) I had seen the first woman [voting](tooltip:vote).<br><b>Albert:</b> I [wish](tooltip:wish) I had witnessed the [invention](tooltip:invention) of the [airplane](tooltip:airplane). It [transformed](tooltip:transform) [transportation](tooltip:transportation) forever.<br><b>Celine:</b> True. But I [wish](tooltip:wish) the [Cold War](tooltip:cold-war) hadn't [caused](tooltip:cause) so much [danger](tooltip:danger).<br><b>Albert:</b> I agree. I [wish](tooltip:wish) [politicians](tooltip:politician) would [learn](tooltip:learn) from those [memories](tooltip:memories).",
                    questions:[
                        { q: "Which movement does Celine want to see?", options:[{t: "The Digital Age.", c: false}, {t: "The Women's suffrage movement.", c: true}, {t: "The invention of the radio.", c: false}], type: "mcq" },
                        { q: "What is Albert's wish about the past?", options:[{t: "He wishes he had seen the invention of the airplane.", c: true}, {t: "He wishes he had abolished the car.", c: false}, {t: "He wishes he were a soldier.", c: false}], type: "mcq" },
                        { q: "What is Albert's annoyance/wish for the future?", options:[{t: "That transportation would stop.", c: false}, {t: "That politicians would learn from history.", c: true}, {t: "That Celine would stop talking.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Description - The Great Inventor",
                    audio: "audio/em2-3-8/p6_text3.mp3 | TTS: Tim Berners-Le is the man who created the World Wide Web. He came up with the idea in the late 20th century. Before the WWW, global communication was much slower. Many people wish they had accessed this technology much earlier. Today, we love the convenience it provides, but some wish the addiction would decrease. It is an invention that reshaped our world completely.",
                    body: "Tim Berners-Lee is the man who [created](tooltip:create) the [World Wide Web](tooltip:www). He [came up with](tooltip:come-up-with) the [idea](tooltip:idea) in the late [20th century](tooltip:20th-century). Before the WWW, global [communication](tooltip:communication) was [much slower](tooltip:much-slower). Many people [wish](tooltip:wish) they had [accessed](tooltip:access) this [technology](tooltip:technology) [much earlier](tooltip:much-earlier). Today, we [love](tooltip:love) the [convenience](tooltip:convenience) it provides, but some [wish](tooltip:wish) the [addiction](tooltip:addiction) would [decrease](tooltip:decrease). It is an [invention](tooltip:invention) that [reshaped](tooltip:reshape) our [world](tooltip:world) completely.",
                    questions:[
                        { q: "What did Tim Berners-Lee create?", options:[{t: "The airplane.", c: false}, {t: "The World Wide Web.", c: true}, {t: "The radio.", c: false}], type: "mcq" },
                        { q: "How was communication before the WWW?", options:[{t: "Much faster.", c: false}, {t: "Much slower.", c: true}, {t: "It didn't exist.", c: false}], type: "mcq" },
                        { q: "What do some people wish for today?", options:[{t: "That the addiction would decrease.", c: true}, {t: "That the internet would disappear.", c: false}, {t: "That they had a new smartphone.", c: false}], type: "mcq" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 7: MONKEY SEE, MONKEY DO (30+ Exercises)
        // ======================================================
        {
            title: "Monkey see, Monkey do",
            drills:[
                // 1-4: Matching Phrasal Verbs
                { type: "matching", instruction: "Match the phrasal verb with its meaning.<br><small style='color:#0077b6'>(Relacione o verbo frasal com seu significado.)</small>", pairs:[
                    { left: "Bring about", right: "Causar / Provocar", val: "1" },
                    { left: "Come up with", right: "Criar / Inventar", val: "2" },
                    { left: "Bring up", right: "Mencionar um tópico", val: "3" },
                    { left: "Come across", right: "Encontrar por acaso", val: "4" }
                ]},
                // 5-8: Matching Phrasal Verbs (Part 2)
                { type: "matching", instruction: "Match the phrasal verb with its meaning.<br><small style='color:#0077b6'>(Relacione o verbo frasal com seu significado.)</small>", pairs:[
                    { left: "Bring down", right: "Derrubar / Reduzir", val: "5" },
                    { left: "Bring out", right: "Lançar / Realçar", val: "6" },
                    { left: "Come about", right: "Surgir / Acontecer", val: "7" },
                    { left: "Come out", right: "Ser lançado / Publicado", val: "8" }
                ]},
                // 9-13: Word Order (Wish & Expressions)
                { type: "word-order", instruction: "Put the words in the correct order.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>", sentence: "I / had / harder / I / studied / wish / .", correct: "I wish I had studied harder ." },
                { type: "word-order", instruction: "Put the words in the correct order.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>", sentence: "the / stop / wish / I / would / rain / .", correct: "I wish the rain would stop ." },
                { type: "word-order", instruction: "Put the words in the correct order.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>", sentence: "The / Age / Digital / came about / fast / so / .", correct: "The Digital Age came about so fast ." },
                { type: "word-order", instruction: "Put the words in the correct order.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>", sentence: "Celine / much earlier / arrived / .", correct: "Celine arrived much earlier ." },
                { type: "word-order", instruction: "Put the words in the correct order.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>", sentence: "everyone / respected / human / rights / I / wish / .", correct: "I wish everyone respected human rights ." },
                // 14-18: Clickable Error
                { type: "clickable-error", instruction: "Identify the incorrect word (Present Wish).<br><small style='color:#0077b6'>(Identifique a palavra incorreta.)</small>", sentence: "I wish I [was](error:were) better at face-to-face communication." },
                { type: "clickable-error", instruction: "Identify the incorrect word (Past Regret).<br><small style='color:#0077b6'>(Identifique a palavra incorreta.)</small>", sentence: "I wish I [didn't](error:hadn't) missed the beginning of the documentary." },
                { type: "clickable-error", instruction: "Identify the incorrect word (Annoyance).<br><small style='color:#0077b6'>(Identifique a palavra incorreta.)</small>", sentence: "I wish you [will](error:would) stop checking your smartphone." },
                { type: "clickable-error", instruction: "Identify the error in the phrasal verb.<br><small style='color:#0077b6'>(Identifique o erro no verbo frasal.)</small>", sentence: "They came [about](error:up with) a new vaccine for the disease." },
                { type: "clickable-error", instruction: "Identify the error in the past perfect form.<br><small style='color:#0077b6'>(Identifique o erro na forma do Past Perfect.)</small>", sentence: "I wish people had [abolish](error:abolished) prejudice much earlier." },
                // 19-23: Odd One Out
                { type: "odd-one-out", instruction: "Choose the word that doesn't fit the category (Science/Tech).<br><small style='color:#0077b6'>(Escolha a palavra que não se encaixa na categoria.)</small>", options:[{t: "Airplane", c: false}, {t: "Automobile", c: false}, {t: "Computer", c: false}, {t: "Peace", c: true}] },
                { type: "odd-one-out", instruction: "Choose the word that doesn't fit the category (Politics/Society).<br><small style='color:#0077b6'>(Escolha a palavra que não se encaixa na categoria.)</small>", options:[{t: "Equality", c: false}, {t: "Suffrage", c: false}, {t: "Government", c: false}, {t: "Vaccine", c: true}] },
                { type: "odd-one-out", instruction: "Choose the word that doesn't belong to the BRING phrasal verbs.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence aos verbos frasais com BRING.)</small>", options:[{t: "Bring up", c: false}, {t: "Bring about", c: false}, {t: "Bring back", c: false}, {t: "Bring behind", c: true}] },
                { type: "odd-one-out", instruction: "Choose the word that doesn't belong to the COME phrasal verbs.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence aos verbos frasais com COME.)</small>", options:[{t: "Come out", c: false}, {t: "Come along", c: false}, {t: "Come back", c: false}, {t: "Come ahead", c: true}] },
                { type: "odd-one-out", instruction: "Choose the word that doesn't fit the Time/Era concepts.<br><small style='color:#0077b6'>(Escolha a palavra que não se encaixa nos conceitos de Tempo/Era.)</small>", options:[{t: "Century", c: false}, {t: "Generation", c: false}, {t: "Period", c: false}, {t: "Medicine", c: true}] },
                // 24-28: Multiple Choice
                { type: "mcq", instruction: "Choose the best option to complete the Present Wish.<br><small style='color:#0077b6'>(Escolha a melhor opção para completar o Desejo Presente.)</small> <br>I _______ I had more time to study history.", options:[{t: "want", c: false}, {t: "need", c: false}, {t: "wish", c: true}, {t: "face", c: false}] },
                { type: "mcq", instruction: "Choose the best option to complete the Past Regret.<br><small style='color:#0077b6'>(Escolha a melhor opção para completar o Arrependimento Passado.)</small> <br>I didn't go to the exhibition. I wish I _______.", options:[{t: "had gone", c: true}, {t: "went", c: false}, {t: "would go", c: false}, {t: "have gone", c: false}] },
                { type: "mcq", instruction: "Choose the best option to express Future Annoyance.<br><small style='color:#0077b6'>(Escolha a melhor opção para expressar Irritação Futura.)</small> <br>It's raining during our trip. I wish it _______ raining!", options:[{t: "stopped", c: false}, {t: "would stop", c: true}, {t: "had stopped", c: false}, {t: "stops", c: false}] },
                { type: "mcq", instruction: "Choose the correct vocabulary word.<br><small style='color:#0077b6'>(Escolha a palavra de vocabulário correta.)</small> <br>The _______ was a global organization created to maintain peace.", options:[{t: "United Nations", c: true}, {t: "Cold War", c: false}, {t: "Digital Age", c: false}, {t: "Suffrage", c: false}] },
                { type: "mcq", instruction: "Choose the correct Phrasal Verb.<br><small style='color:#0077b6'>(Escolha o verbo frasal correto.)</small> <br>This old song _______ good memories of my childhood.", options:[{t: "comes along", c: false}, {t: "brings back", c: true}, {t: "comes about", c: false}, {t: "brings up", c: false}] },
                // 29-31: True/False & Categorize
                { type: "true-false", instruction: "Are these historical statements True or False?<br><small style='color:#0077b6'>(Estas afirmações históricas são Verdadeiras ou Falsas?)</small>", questions:[{text: "The UN adopted the UDHR in 1948.", correct: "true"}, {text: "The internet existed in the 19th century.", correct: "false"}] },
                { type: "categorize", instruction: "Drag the sentences to the correct Wish Tense category.<br><small style='color:#0077b6'>(Arraste as frases para a categoria correta do tempo verbal Wish.)</small>", 
                    categories:[{id: "pres", name: "Present Wish"}, {id: "past", name: "Past Regret"}],
                    items:[
                        {text: "I wish I were rich.", catId: "pres"}, 
                        {text: "Celine wishes she lived in the 60s.", catId: "pres"}, 
                        {text: "I wish I had seen the war end.", catId: "past"}, 
                        {text: "Albert wishes he hadn't lost his keys.", catId: "past"}
                    ] 
                },
                { type: "mcq", instruction: "Choose the correct vocabulary word.<br><small style='color:#0077b6'>(Escolha a palavra de vocabulário correta.)</small>", q: "_______ is the process of the world becoming more connected.", options:[{t: "Crisis", c: false}, {t: "Globalization", c: true}, {t: "Prejudice", c: false}, {t: "Suffrage", c: false}] }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn to reflect! The 20th century reshaped the world, but what about your world? Write a short paragraph (5-7 sentences) about things you wish were different in your life or things you wish you had done differently in the past.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas: Agora é a sua vez de refletir! O século 20 remoldou o mundo, mas e o seu mundo? Escreva um pequeno parágrafo (5-7 frases) sobre coisas que você gostaria que fossem diferentes na sua vida ou coisas que você gostaria de ter feito de forma diferente no passado.)</span></small>",
            example: "\"Sometimes I look at old photos and I <b>wish I had lived</b> in the Digital Age beginning. I <b>wish I had seen</b> how people <b>came up with</b> the first apps. Right now, I <b>wish I had</b> more free time for my hobbies. I also <b>wish my parents would stop</b> worrying about my grades so much! I need to <b>catch up</b> with my studies so that I can succeed.\"",
            prompts:[
                "Use at least one [Present Wish] (e.g., I wish I had...).<br><small><span style='color:#0077b6'>(Use pelo menos um Desejo Presente.)</span></small>",
                "Use at least one [Past Regret] (e.g., I wish I had seen...).<br><small><span style='color:#0077b6'>(Use pelo menos um Arrependimento Passado.)</span></small>",
                "Include at least two[Phrasal Verbs] from the lesson.<br><small><span style='color:#0077b6'>(Inclua pelo menos dois Verbos Frasais da lição.)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: WRAP IT UP (FLASHCARDS - PART 1: VERBS A-L)
        // ======================================================
        {
            title: "Wrap it up",
            items:[
                { term: "Abolish", definition: "To formally put an end to a system, practice, or institution.", defTrans: "Abolir", example: "Many countries abolished slavery in the 19th century.", exTrans: "<span style='color:#0077b6'>(Muitos países aboliram a escravidão no século 19.)</span>", audioFront: "TTS: Abolish", audioBack: "TTS: Many countries abolished slavery in the 19th century." },
                { term: "Access", definition: "To be able to use or enter something.", defTrans: "Acessar", example: "Now, everyone can access information on the internet.", exTrans: "<span style='color:#0077b6'>(Agora, todos podem acessar informações na internet.)</span>", audioFront: "TTS: Access", audioBack: "TTS: Now, everyone can access information on the internet." },
                { term: "Adapt", definition: "To become adjusted to new conditions.", defTrans: "Adaptar-se", example: "Humans had to adapt to the Digital Age.", exTrans: "<span style='color:#0077b6'>(Os humanos tiveram que se adaptar à Era Digital.)</span>", audioFront: "TTS: Adapt", audioBack: "TTS: Humans had to adapt to the Digital Age." },
                { term: "Addict", definition: "To cause someone to become physically or mentally dependent on something.", defTrans: "Viciar", example: "Social media can addict young people easily.", exTrans: "<span style='color:#0077b6'>(As redes sociais podem viciar jovens facilmente.)</span>", audioFront: "TTS: Addict", audioBack: "TTS: Social media can addict young people easily." },
                { term: "Admit", definition: "To confess to be true or to be the case.", defTrans: "Admitir", example: "The politician admitted his mistake.", exTrans: "<span style='color:#0077b6'>(O político admitiu seu erro.)</span>", audioFront: "TTS: Admit", audioBack: "TTS: The politician admitted his mistake." },
                { term: "Adopt", definition: "To legally take or start to use something as one's own.", defTrans: "Adotar", example: "The UN adopted the UDHR in 1948.", exTrans: "<span style='color:#0077b6'>(A ONU adotou a DUDH em 1948.)</span>", audioFront: "TTS: Adopt", audioBack: "TTS: The UN adopted the UDHR in 1948." },
                { term: "Affect", definition: "To have an effect on; make a difference to.", defTrans: "Afetar", example: "The war affected the entire global economy.", exTrans: "<span style='color:#0077b6'>(A guerra afetou toda a economia global.)</span>", audioFront: "TTS: Affect", audioBack: "TTS: The war affected the entire global economy." },
                { term: "Appreciate", definition: "To recognize the full worth or importance of something.", defTrans: "Apreciar", example: "We must appreciate the progress we made.", exTrans: "<span style='color:#0077b6'>(Devemos apreciar o progresso que fizemos.)</span>", audioFront: "TTS: Appreciate", audioBack: "TTS: We must appreciate the progress we made." },
                { term: "Be", definition: "A verb used to describe the state or identity of someone or something.", defTrans: "Ser / Estar", example: "Life in the 1900s was very difficult.", exTrans: "<span style='color:#0077b6'>(A vida nos anos 1900 era muito difícil.)</span>", audioFront: "TTS: Be", audioBack: "TTS: Life in the 1900s was very difficult." },
                { term: "Bring", definition: "To convey or take something to a place.", defTrans: "Trazer", example: "Science brought new vaccines to the world.", exTrans: "<span style='color:#0077b6'>(A ciência trouxe novas vacinas para o mundo.)</span>", audioFront: "TTS: Bring", audioBack: "TTS: Science brought new vaccines to the world." },
                { term: "Cause", definition: "To make something, especially something bad, happen.", defTrans: "Causar", example: "Inequality causes many social crises.", exTrans: "<span style='color:#0077b6'>(A desigualdade causa muitas crises sociais.)</span>", audioFront: "TTS: Cause", audioBack: "TTS: Inequality causes many social crises." },
                { term: "Change", definition: "The act or instance of making or becoming different.", defTrans: "Mudar", example: "The invention of the car changed transportation.", exTrans: "<span style='color:#0077b6'>(A invenção do carro mudou o transporte.)</span>", audioFront: "TTS: Change", audioBack: "TTS: The invention of the car changed transportation." },
                { term: "Come", definition: "To move towards a place or person.", defTrans: "Vir", example: "Positive changes usually come with hard work.", exTrans: "<span style='color:#0077b6'>(Mudanças positivas geralmente vêm com trabalho duro.)</span>", audioFront: "TTS: Come", audioBack: "TTS: Positive changes usually come with hard work." },
                { term: "Continue", definition: "To persist in an activity or process.", defTrans: "Continuar", example: "We must continue to fight for equality.", exTrans: "<span style='color:#0077b6'>(Devemos continuar a lutar por igualdade.)</span>", audioFront: "TTS: Continue", audioBack: "TTS: We must continue to fight for equality." },
                { term: "Create", definition: "To bring something into existence.", defTrans: "Criar", example: "Tim Berners-Lee created the WWW.", exTrans: "<span style='color:#0077b6'>(Tim Berners-Lee criou a WWW.)</span>", audioFront: "TTS: Create", audioBack: "TTS: Tim Berners-Lee created the WWW." },
                { term: "Decrease", definition: "To make or become smaller or fewer in size, amount, intensity, or degree.", defTrans: "Diminuir", example: "Medical advancements decrease the death rate.", exTrans: "<span style='color:#0077b6'>(Avanços médicos diminuem a taxa de mortalidade.)</span>", audioFront: "TTS: Decrease", audioBack: "TTS: Medical advancements decrease the death rate." },
                { term: "Desire", definition: "A strong feeling of wanting to have something or wishing for something to happen.", defTrans: "Desejar", example: "Many people desire world peace.", exTrans: "<span style='color:#0077b6'>(Muitas pessoas desejam a paz mundial.)</span>", audioFront: "TTS: Desire", audioBack: "TTS: Many people desire world peace." },
                { term: "Develop", definition: "To grow or cause to grow and become more mature, advanced, or elaborate.", defTrans: "Desenvolver", example: "Engineers developed the first airplane.", exTrans: "<span style='color:#0077b6'>(Engenheiros desenvolveram o primeiro avião.)</span>", audioFront: "TTS: Develop", audioBack: "TTS: Engineers developed the first airplane." },
                { term: "Disappear", definition: "To cease to be visible; to die out.", defTrans: "Desaparecer", example: "Some historical buildings disappeared over time.", exTrans: "<span style='color:#0077b6'>(Alguns prédios históricos desapareceram com o tempo.)</span>", audioFront: "TTS: Disappear", audioBack: "TTS: Some historical buildings disappeared over time." },
                { term: "Discuss", definition: "To talk about something with another person or group of people.", defTrans: "Discutir", example: "Let's discuss the Civil Rights Movement.", exTrans: "<span style='color:#0077b6'>(Vamos discutir o Movimento dos Direitos Civis.)</span>", audioFront: "TTS: Discuss", audioBack: "TTS: Let's discuss the Civil Rights Movement." },
                { term: "Do", definition: "To perform an action.", defTrans: "Fazer", example: "What did you do during last week?", exTrans: "<span style='color:#0077b6'>(O que você fez durante a semana passada?)</span>", audioFront: "TTS: Do", audioBack: "TTS: What did you do during last week?" },
                { term: "Exist", definition: "To have objective reality or being.", defTrans: "Existir", example: "Cell phones didn't exist 100 years ago.", exTrans: "<span style='color:#0077b6'>(Celulares não existiam 100 anos atrás.)</span>", audioFront: "TTS: Exist", audioBack: "TTS: Cell phones didn't exist 100 years ago." },
                { term: "Explode", definition: "To burst violently, or to increase suddenly.", defTrans: "Explodir", example: "The population exploded in the 20th century.", exTrans: "<span style='color:#0077b6'>(A população explodiu no século 20.)</span>", audioFront: "TTS: Explode", audioBack: "TTS: The population exploded in the 20th century." },
                { term: "Explore", definition: "To travel in or through an unfamiliar area in order to learn about it.", defTrans: "Explorar", example: "Astronauts explored space for the first time.", exTrans: "<span style='color:#0077b6'>(Astronautas exploraram o espaço pela primeira vez.)</span>", audioFront: "TTS: Explore", audioBack: "TTS: Astronauts explored space for the first time." },
                { term: "Express", definition: "To convey a thought or feeling in words or by gestures and conduct.", defTrans: "Expressar", example: "Use your art to express your perspectives.", exTrans: "<span style='color:#0077b6'>(Use sua arte para expressar suas perspectivas.)</span>", audioFront: "TTS: Express", audioBack: "TTS: Use your art to express your perspectives." },
                { term: "Face", definition: "To confront and deal with a difficult situation or person.", defTrans: "Encarar / Enfrentar", example: "Soldiers had to face many dangers in the war.", exTrans: "<span style='color:#0077b6'>(Os soldados tiveram que enfrentar muitos perigos na guerra.)</span>", audioFront: "TTS: Face", audioBack: "TTS: Soldiers had to face many dangers in the war." },
                { term: "Feel", definition: "To experience an emotion or physical sensation.", defTrans: "Sentir", example: "I feel nostalgic when I see old photos.", exTrans: "<span style='color:#0077b6'>(Sinto-me nostálgico quando vejo fotos antigas.)</span>", audioFront: "TTS: Feel", audioBack: "TTS: I feel nostalgic when I see old photos." },
                { term: "Focus", definition: "To pay particular attention to one thing.", defTrans: "Focar", example: "We should focus on finding a solution.", exTrans: "<span style='color:#0077b6'>(Deveríamos focar em encontrar uma solução.)</span>", audioFront: "TTS: Focus", audioBack: "TTS: We should focus on finding a solution." },
                { term: "Happen", definition: "To take place; occur.", defTrans: "Acontecer", example: "The Cold War happened after World War II.", exTrans: "<span style='color:#0077b6'>(A Guerra Fria aconteceu após a Segunda Guerra Mundial.)</span>", audioFront: "TTS: Happen", audioBack: "TTS: The Cold War happened after World War II." },
                { term: "Have", definition: "To possess, own, or hold.", defTrans: "Ter", example: "She had many beautiful memories.", exTrans: "<span style='color:#0077b6'>(Ela tinha muitas memórias bonitas.)</span>", audioFront: "TTS: Have", audioBack: "TTS: She had many beautiful memories." },
                { term: "Invent", definition: "To create or design something that has not existed before.", defTrans: "Inventar", example: "Who invented the radio?", exTrans: "<span style='color:#0077b6'>(Quem inventou o rádio?)</span>", audioFront: "TTS: Invent", audioBack: "TTS: Who invented the radio?" },
                { term: "Know", definition: "To be aware of through observation, inquiry, or information.", defTrans: "Saber / Conhecer", example: "Do you know much about your generation?", exTrans: "<span style='color:#0077b6'>(Você sabe muito sobre sua geração?)</span>", audioFront: "TTS: Know", audioBack: "TTS: Do you know much about your generation?" },
                { term: "Learn", definition: "To gain or acquire knowledge of or skill in something by study or experience.", defTrans: "Aprender", example: "We learn important lessons from the past.", exTrans: "<span style='color:#0077b6'>(Aprendemos lições importantes com o passado.)</span>", audioFront: "TTS: Learn", audioBack: "TTS: We learn important lessons from the past." },
                { term: "Live", definition: "To remain alive; to have one's home in a particular place.", defTrans: "Viver", example: "My grandmother lived through the 1940s.", exTrans: "<span style='color:#0077b6'>(Minha avó viveu durante os anos 1940.)</span>", audioFront: "TTS: Live", audioBack: "TTS: My grandmother lived through the 1940s." },
                { term: "Look", definition: "To direct one's gaze toward something.", defTrans: "Olhar", example: "The first automobile looked like a carriage.", exTrans: "<span style='color:#0077b6'>(O primeiro automóvel parecia uma carruagem.)</span>", audioFront: "TTS: Look", audioBack: "TTS: The first automobile looked like a carriage." },
                { term: "Listen", definition: "To give one's attention to a sound.", defTrans: "Ouvir", example: "Always listen to the news carefully.", exTrans: "<span style='color:#0077b6'>(Sempre ouça as notícias com cuidado.)</span>", audioFront: "TTS: Listen", audioBack: "TTS: Always listen to the news carefully." },
                { term: "Lose", definition: "To be deprived of or cease to have or retain something.", defTrans: "Perder", example: "Don't lose your rights.", exTrans: "<span style='color:#0077b6'>(Não perca seus direitos.)</span>", audioFront: "TTS: Lose", audioBack: "TTS: Don't lose your rights." },
                { term: "Love", definition: "To feel a deep romantic or sexual attachment to someone; to enjoy very much.", defTrans: "Amar", example: "People love the convenience of the Digital Age.", exTrans: "<span style='color:#0077b6'>(As pessoas amam a conveniência da Era Digital.)</span>", audioFront: "TTS: Love", audioBack: "TTS: People love the convenience of the Digital Age." },
                // --- PART 2: VERBS (M-W) & SCIENCE/TECH ---
                { term: "Move", definition: "To go from one place to another.", defTrans: "Mover / Mudar-se", example: "The activist moved the crowd with his speech.", exTrans: "<span style='color:#0077b6'>(O ativista comoveu a multidão com seu discurso.)</span>", audioFront: "TTS: Move", audioBack: "TTS: The activist moved the crowd with his speech." },
                { term: "Need", definition: "To require something because it is essential or very important.", defTrans: "Precisar", example: "We need a better strategy for the economy.", exTrans: "<span style='color:#0077b6'>(Precisamos de uma estratégia melhor para a economia.)</span>", audioFront: "TTS: Need", audioBack: "TTS: We need a better strategy for the economy." },
                { term: "Push for", definition: "To strongly encourage or campaign for something.", defTrans: "Pressionar por / Lutar por", example: "The groups pushed for new laws for decades.", exTrans: "<span style='color:#0077b6'>(Os grupos lutaram por novas leis por décadas.)</span>", audioFront: "TTS: Push for", audioBack: "TTS: The groups pushed for new laws for decades." },
                { term: "Read", definition: "To look at and comprehend the meaning of written or printed matter.", defTrans: "Ler", example: "I read a book about 20th-century politics.", exTrans: "<span style='color:#0077b6'>(Li um livro sobre política do século 20.)</span>", audioFront: "TTS: Read", audioBack: "TTS: I read a book about 20th-century politics." },
                { term: "Remember", definition: "To have in or be able to bring to one's mind an awareness of someone or something.", defTrans: "Lembrar", example: "I remember when the internet was slow.", exTrans: "<span style='color:#0077b6'>(Lembro-me de quando a internet era lenta.)</span>", audioFront: "TTS: Remember", audioBack: "TTS: I remember when the internet was slow." },
                { term: "Regret", definition: "A feeling of sadness or disappointment over something that has happened or been done.", defTrans: "Arrepender-se", example: "He regretted not voting in the election.", exTrans: "<span style='color:#0077b6'>(Ele se arrependeu de não ter votado na eleição.)</span>", audioFront: "TTS: Regret", audioBack: "TTS: He regretted not voting in the election." },
                { term: "Reshape", definition: "To shape again or differently.", defTrans: "Remoldar / Dar nova forma", example: "Technology reshaped how we communicate.", exTrans: "<span style='color:#0077b6'>(A tecnologia remoldou como nos comunicamos.)</span>", audioFront: "TTS: Reshape", audioBack: "TTS: Technology reshaped how we communicate." },
                { term: "Respect", definition: "To feel deep admiration for someone or something.", defTrans: "Respeitar", example: "Always respect the law.", exTrans: "<span style='color:#0077b6'>(Sempre respeite a lei.)</span>", audioFront: "TTS: Respect", audioBack: "TTS: Always respect the law." },
                { term: "Save", definition: "To keep safe or rescue from harm.", defTrans: "Salvar / Economizar", example: "Modern science saves lives.", exTrans: "<span style='color:#0077b6'>(A ciência moderna salva vidas.)</span>", audioFront: "TTS: Save", audioBack: "TTS: Modern science saves lives." },
                { term: "See", definition: "To perceive with the eyes.", defTrans: "Ver", example: "I can see the impact of globalization.", exTrans: "<span style='color:#0077b6'>(Consigo ver o impacto da globalização.)</span>", audioFront: "TTS: See", audioBack: "TTS: I can see the impact of globalization." },
                { term: "Seem", definition: "To give the impression or sensation of being something.", defTrans: "Parecer", example: "The concept seems very simple now.", exTrans: "<span style='color:#0077b6'>(O conceito parece muito simples agora.)</span>", audioFront: "TTS: Seem", audioBack: "TTS: The concept seems very simple now." },
                { term: "Suffer", definition: "To experience or be subjected to something bad or unpleasant.", defTrans: "Sofrer", example: "Many people suffered during the economic downturn.", exTrans: "<span style='color:#0077b6'>(Muitas pessoas sofreram durante a recessão econômica.)</span>", audioFront: "TTS: Suffer", audioBack: "TTS: Many people suffered during the economic downturn." },
                { term: "Stop", definition: "To cease to happen or to prevent something from happening.", defTrans: "Parar", example: "We must work to stop the conflict.", exTrans: "<span style='color:#0077b6'>(Devemos trabalhar para parar o conflito.)</span>", audioFront: "TTS: Stop", audioBack: "TTS: We must work to stop the conflict." },
                { term: "Take", definition: "To reach for and hold; to accept or receive.", defTrans: "Tomar / Pegar", example: "Take your time to study history.", exTrans: "<span style='color:#0077b6'>(Tire seu tempo para estudar história.)</span>", audioFront: "TTS: Take", audioBack: "TTS: Take your time to study history." },
                { term: "Talk", definition: "To speak in order to give information or express ideas.", defTrans: "Conversar", example: "We should talk about inequality.", exTrans: "<span style='color:#0077b6'>(Deveríamos conversar sobre a desigualdade.)</span>", audioFront: "TTS: Talk", audioBack: "TTS: We should talk about inequality." },
                { term: "Tell", definition: "To communicate information, facts, or news to someone.", defTrans: "Contar / Dizer", example: "Tell me a story about that era.", exTrans: "<span style='color:#0077b6'>(Conte-me uma história sobre aquela era.)</span>", audioFront: "TTS: Tell", audioBack: "TTS: Tell me a story about that era." },
                { term: "Think", definition: "To have a particular belief or idea.", defTrans: "Pensar", example: "I think the World Wide Web is amazing.", exTrans: "<span style='color:#0077b6'>(Acho que a rede mundial é incrível.)</span>", audioFront: "TTS: Think", audioBack: "TTS: I think the World Wide Web is amazing." },
                { term: "Transform", definition: "To make a thorough or dramatic change in the form, appearance, or character of.", defTrans: "Transformar", example: "Computers transformed the work environment.", exTrans: "<span style='color:#0077b6'>(Computadores transformaram o ambiente de trabalho.)</span>", audioFront: "TTS: Transform", audioBack: "TTS: Computers transformed the work environment." },
                { term: "Travel", definition: "To make a journey, typically of some length.", defTrans: "Viajar", example: "People travel much more now.", exTrans: "<span style='color:#0077b6'>(As pessoas viajam muito mais agora.)</span>", audioFront: "TTS: Travel", audioBack: "TTS: People travel much more now." },
                { term: "Use", definition: "To take, hold, or deploy something as a means of accomplishing a purpose.", defTrans: "Usar", example: "Which device do you use most?", exTrans: "<span style='color:#0077b6'>(Qual dispositivo você mais usa?)</span>", audioFront: "TTS: Use", audioBack: "TTS: Which device do you use most?" },
                { term: "Visit", definition: "To go to see and spend time with someone or in a place.", defTrans: "Visitar", example: "Have you ever visited a history museum?", exTrans: "<span style='color:#0077b6'>(Você já visitou um museu de história?)</span>", audioFront: "TTS: Visit", audioBack: "TTS: Have you ever visited a history museum?" },
                { term: "Vote", definition: "To give or register a vote.", defTrans: "Votar", example: "It is your right to vote.", exTrans: "<span style='color:#0077b6'>(É seu direito votar.)</span>", audioFront: "TTS: Vote", audioBack: "TTS: It is your right to vote." },
                { term: "Want", definition: "To have a desire to possess or do something; wish for.", defTrans: "Querer", example: "I want to learn more about space exploration.", exTrans: "<span style='color:#0077b6'>(Quero aprender mais sobre exploração espacial.)</span>", audioFront: "TTS: Want", audioBack: "TTS: I want to learn more about space exploration." },
                { term: "Wish", definition: "A feel or expression of a strong desire or hope for something.", defTrans: "Desejar / Quem me dera", example: "I wish for world peace.", exTrans: "<span style='color:#0077b6'>(Desejo a paz mundial.)</span>", audioFront: "TTS: Wish", audioBack: "TTS: I wish for world peace." },
                { term: "Work", definition: "To be engaged in physical or mental activity to achieve a result.", defTrans: "Trabalhar", example: "My parents work at a tech company.", exTrans: "<span style='color:#0077b6'>(Meus pais trabalham em uma empresa de tecnologia.)</span>", audioFront: "TTS: Work", audioBack: "TTS: My parents work at a tech company." },

                { term: "Addiction", definition: "A compulsive engagement in a rewarding stimuli, despite adverse consequences.", defTrans: "Vício", example: "Smartphone addiction is a modern issue.", exTrans: "<span style='color:#0077b6'>(O vício em smartphones é um problema moderno.)</span>", audioFront: "TTS: Addiction", audioBack: "TTS: Smartphone addiction is a modern issue." },
                { term: "Airplane", definition: "A powered flying vehicle with fixed wings.", defTrans: "Avião", example: "The airplane made global travel possible.", exTrans: "<span style='color:#0077b6'>(O avião tornou as viagens globais possíveis.)</span>", audioFront: "TTS: Airplane", audioBack: "TTS: The airplane made global travel possible." },
                { term: "Antibiotics", definition: "Medicine that inhibits the growth of or destroys microorganisms.", defTrans: "Antibióticos", example: "Antibiotics cure many bacterial infections.", exTrans: "<span style='color:#0077b6'>(Antibióticos curam muitas infecções bacterianas.)</span>", audioFront: "TTS: Antibiotics", audioBack: "TTS: Antibiotics cure many bacterial infections." },
                { term: "Automobile", definition: "A road vehicle, typically with four wheels, powered by an internal combustion engine.", defTrans: "Automóvel / Carro", example: "The automobile changed how cities were built.", exTrans: "<span style='color:#0077b6'>(O automóvel mudou como as cidades eram construídas.)</span>", audioFront: "TTS: Automobile", audioBack: "TTS: The automobile changed how cities were built." },
                { term: "Computer", definition: "An electronic device for storing and processing data.", defTrans: "Computador", example: "Early computers were the size of a whole room.", exTrans: "<span style='color:#0077b6'>(Os primeiros computadores tinham o tamanho de uma sala inteira.)</span>", audioFront: "TTS: Computer", audioBack: "TTS: Early computers were the size of a whole room." },
                { term: "Convenience", definition: "The state of being able to proceed with something with little effort or difficulty.", defTrans: "Conveniência", example: "We enjoy the convenience of modern gadgets.", exTrans: "<span style='color:#0077b6'>(Aproveitamos a conveniência dos aparelhos modernos.)</span>", audioFront: "TTS: Convenience", audioBack: "TTS: We enjoy the convenience of modern gadgets." },
                { term: "Development", definition: "The process of starting to experience or create something new.", defTrans: "Desenvolvimento", example: "The development of vaccines saved millions.", exTrans: "<span style='color:#0077b6'>(O desenvolvimento de vacinas salvou milhões.)</span>", audioFront: "TTS: Development", audioBack: "TTS: The development of vaccines saved millions." },
                { term: "Invention", definition: "The action of inventing something, typically a process or device.", defTrans: "Invenção", example: "The radio was a great invention.", exTrans: "<span style='color:#0077b6'>(O rádio foi uma grande invenção.)</span>", audioFront: "TTS: Invention", audioBack: "TTS: The radio was a great invention." },
                { term: "Internet", definition: "A global computer network providing a variety of information and communication facilities.", defTrans: "Internet / Rede mundial", example: "The internet connects people worldwide.", exTrans: "<span style='color:#0077b6'>(A internet conecta pessoas mundialmente.)</span>", audioFront: "TTS: Internet", audioBack: "TTS: The internet connects people worldwide." },
                { term: "Medicine", definition: "The science or practice of the diagnosis, treatment, and prevention of disease.", defTrans: "Medicina", example: "Modern medicine increased our life expectancy.", exTrans: "<span style='color:#0077b6'>(A medicina moderna aumentou nossa expectativa de vida.)</span>", audioFront: "TTS: Medicine", audioBack: "TTS: Modern medicine increased our life expectancy." },
                { term: "Radio", definition: "The transmission and reception of electromagnetic waves of radio frequency.", defTrans: "Rádio", example: "Families used to gather around the radio.", exTrans: "<span style='color:#0077b6'>(As famílias costumavam se reunir ao redor do rádio.)</span>", audioFront: "TTS: Radio", audioBack: "TTS: Families used to gather around the radio." },
                { term: "Science", definition: "The intellectual and practical activity encompassing the systematic study of the physical world.", defTrans: "Ciência", example: "Science brought us to the moon.", exTrans: "<span style='color:#0077b6'>(A ciência nos levou à lua.)</span>", audioFront: "TTS: Science", audioBack: "TTS: Science brought us to the moon." },
                { term: "Technology", definition: "The application of scientific knowledge for practical purposes.", defTrans: "Tecnologia", example: "Technology reshapes our daily habits.", exTrans: "<span style='color:#0077b6'>(A tecnologia remolda nossos hábitos diários.)</span>", audioFront: "TTS: Technology", audioBack: "TTS: Technology reshapes our daily habits." },
                { term: "Television", definition: "A system for transmitting visual images and sound that are reproduced on screens.", defTrans: "Televisão", example: "The television brought news into the living room.", exTrans: "<span style='color:#0077b6'>(A televisão trouxe as notícias para a sala de estar.)</span>", audioFront: "TTS: Television", audioBack: "TTS: The television brought news into the living room." },
                { term: "Transportation", definition: "The action of transporting someone or something or the process of being transported.", defTrans: "Transporte", example: "Transportation is much faster today.", exTrans: "<span style='color:#0077b6'>(O transporte é muito mais rápido hoje.)</span>", audioFront: "TTS: Transportation", audioBack: "TTS: Transportation is much faster today." },
                { term: "Vaccine", definition: "A substance used to stimulate the production of antibodies and provide immunity.", defTrans: "Vacina", example: "The polio vaccine was a huge breakthrough.", exTrans: "<span style='color:#0077b6'>(A vacina contra a poliomielite foi um enorme avanço.)</span>", audioFront: "TTS: Vaccine", audioBack: "TTS: The polio vaccine was a huge breakthrough." },
                // --- PART 3: POLITICS & SOCIETY / GENERAL CONCEPTS ---
                { term: "Activist", definition: "A person who campaigns to bring about political or social change.", defTrans: "Ativista", example: "The activist fought for the environment.", exTrans: "<span style='color:#0077b6'>(O ativista lutou pelo meio ambiente.)</span>", audioFront: "TTS: Activist", audioBack: "TTS: The activist fought for the environment." },
                { term: "Behavior", definition: "The way in which one acts or conducts oneself.", defTrans: "Comportamento", example: "Human behavior changed with the internet.", exTrans: "<span style='color:#0077b6'>(O comportamento humano mudou com a internet.)</span>", audioFront: "TTS: Behavior", audioBack: "TTS: Human behavior changed with the internet." },
                { term: "Change", definition: "An act or process through which something becomes different.", defTrans: "Mudança", example: "We need a change in the education system.", exTrans: "<span style='color:#0077b6'>(Precisamos de uma mudança no sistema de educação.)</span>", audioFront: "TTS: Change", audioBack: "TTS: We need a change in the education system." },
                { term: "Communication", definition: "The imparting or exchanging of information or news.", defTrans: "Comunicação", example: "Communication is easier now.", exTrans: "<span style='color:#0077b6'>(A comunicação é mais fácil agora.)</span>", audioFront: "TTS: Communication", audioBack: "TTS: Communication is easier now." },
                { term: "Crisis", definition: "A time of intense difficulty, trouble, or danger.", defTrans: "Crise", example: "The economic crisis affected many countries.", exTrans: "<span style='color:#0077b6'>(A crise econômica afetou muitos países.)</span>", audioFront: "TTS: Crisis", audioBack: "TTS: The economic crisis affected many countries." },
                { term: "Document", definition: "A piece of written, printed, or electronic matter that provides information.", defTrans: "Documento", example: "The UDHR is a historical document.", exTrans: "<span style='color:#0077b6'>(A DUDH é um documento histórico.)</span>", audioFront: "TTS: Document", audioBack: "TTS: The UDHR is a historical document." },
                { term: "Equality", definition: "The state of being equal, especially in status, rights, and opportunities.", defTrans: "Igualdade", example: "We must strive for equality in our society.", exTrans: "<span style='color:#0077b6'>(Devemos lutar por igualdade em nossa sociedade.)</span>", audioFront: "TTS: Equality", audioBack: "TTS: We must strive for equality in our society." },
                { term: "Globalization", definition: "The process by which businesses or other organizations develop international influence.", defTrans: "Globalização", example: "Globalization connected the economies of the world.", exTrans: "<span style='color:#0077b6'>(A globalização conectou as economias do mundo.)</span>", audioFront: "TTS: Globalization", audioBack: "TTS: Globalization connected the economies of the world." },
                { term: "Government", definition: "The governing body of a nation, state, or community.", defTrans: "Governo", example: "The government must protect its citizens.", exTrans: "<span style='color:#0077b6'>(O governo deve proteger seus cidadãos.)</span>", audioFront: "TTS: Government", audioBack: "TTS: The government must protect its citizens." },
                { term: "History", definition: "The study of past events, particularly in human affairs.", defTrans: "História", example: "History teaches us valuable lessons.", exTrans: "<span style='color:#0077b6'>(A história nos ensina lições valiosas.)</span>", audioFront: "TTS: History", audioBack: "TTS: History teaches us valuable lessons." },
                { term: "Inequality", definition: "Difference in size, degree, circumstances, etc.; lack of equality.", defTrans: "Desigualdade", example: "Inequality is a major issue in the world.", exTrans: "<span style='color:#0077b6'>(A desigualdade é um grande problema no mundo.)</span>", audioFront: "TTS: Inequality", audioBack: "TTS: Inequality is a major issue in the world." },
                { term: "Interaction", definition: "Reciprocal action or influence.", defTrans: "Interação", example: "Social interaction is different in the Digital Age.", exTrans: "<span style='color:#0077b6'>(A interação social é diferente na Era Digital.)</span>", audioFront: "TTS: Interaction", audioBack: "TTS: Social interaction is different in the Digital Age." },
                { term: "Issue", definition: "An important topic or problem for debate or discussion.", defTrans: "Questão / Problema", example: "Climate change is a critical issue.", exTrans: "<span style='color:#0077b6'>(As mudanças climáticas são uma questão crítica.)</span>", audioFront: "TTS: Issue", audioBack: "TTS: Climate change is a critical issue." },
                { term: "Law", definition: "The system of rules which a particular country or community recognizes as regulating the actions of its members.", defTrans: "Lei", example: "The new law protects workers' rights.", exTrans: "<span style='color:#0077b6'>(A nova lei protege os direitos dos trabalhadores.)</span>", audioFront: "TTS: Law", audioBack: "TTS: The new law protects workers' rights." },
                { term: "Movement", definition: "An organized effort by people to achieve a common social or political goal.", defTrans: "Movimento (direitos civis)", example: "The Civil Rights Movement fought for justice.", exTrans: "<span style='color:#0077b6'>(O Movimento dos Direitos Civis lutou por justiça.)</span>", audioFront: "TTS: Movement", audioBack: "TTS: The Civil Rights Movement fought for justice." },
                { term: "Peace", definition: "Freedom from disturbance; quiet and tranquility.", defTrans: "Paz", example: "Everyone desires world peace.", exTrans: "<span style='color:#0077b6'>(Todos desejam a paz mundial.)</span>", audioFront: "TTS: Peace", audioBack: "TTS: Everyone desires world peace." },
                { term: "Politics", definition: "The activities associated with the governance of a country.", defTrans: "Política", example: "Politics shape how a country is run.", exTrans: "<span style='color:#0077b6'>(A política molda como um país é administrado.)</span>", audioFront: "TTS: Politics", audioBack: "TTS: Politics shape how a country is run." },
                { term: "Politician", definition: "A person who is professionally involved in politics.", defTrans: "Político", example: "The politician gave a speech about the economy.", exTrans: "<span style='color:#0077b6'>(O político fez um discurso sobre a economia.)</span>", audioFront: "TTS: Politician", audioBack: "TTS: The politician gave a speech about the economy." },
                { term: "Prejudice", definition: "Preconceived opinion that is not based on reason or actual experience.", defTrans: "Preconceito", example: "We must fight against prejudice.", exTrans: "<span style='color:#0077b6'>(Devemos lutar contra o preconceito.)</span>", audioFront: "TTS: Prejudice", audioBack: "TTS: We must fight against prejudice." },
                { term: "Progress", definition: "Forward or onward movement toward a destination or a goal.", defTrans: "Progresso", example: "Technological progress is unstoppable.", exTrans: "<span style='color:#0077b6'>(O progresso tecnológico é imparável.)</span>", audioFront: "TTS: Progress", audioBack: "TTS: Technological progress is unstoppable." },
                { term: "Right(s)", definition: "A moral or legal entitlement to have or obtain something or to act in a certain way.", defTrans: "Direito(s)", example: "Human rights are universal.", exTrans: "<span style='color:#0077b6'>(Os direitos humanos são universais.)</span>", audioFront: "TTS: Rights", audioBack: "TTS: Human rights are universal." },
                { term: "Society", definition: "The aggregate of people living together in a more or less ordered community.", defTrans: "Sociedade", example: "Society must adapt to new realities.", exTrans: "<span style='color:#0077b6'>(A sociedade deve se adaptar às novas realidades.)</span>", audioFront: "TTS: Society", audioBack: "TTS: Society must adapt to new realities." },
                { term: "Soldier", definition: "A person who serves in an army.", defTrans: "Soldado", example: "The brave person served their country.", exTrans: "<span style='color:#0077b6'>(A pessoa corajosa serviu seu país.)</span>", audioFront: "TTS: Soldier", audioBack: "TTS: The brave person served their country." },
                { term: "Suffrage", definition: "The right of women to vote in elections.", defTrans: "Sufrágio (voto feminino)", example: "Women's suffrage was a major victory.", exTrans: "<span style='color:#0077b6'>(O sufrágio feminino foi uma grande vitória.)</span>", audioFront: "TTS: Suffrage", audioBack: "TTS: Women's suffrage was a major victory." },
                { term: "United Nations", definition: "An international organization formed in 1945 to increase political and economic cooperation.", defTrans: "Nações Unidas (ONU)", example: "The United Nations promotes global peace.", exTrans: "<span style='color:#0077b6'>(A ONU promove a paz global.)</span>", audioFront: "TTS: United Nations", audioBack: "TTS: The United Nations promotes global peace." },
                { term: "War", definition: "A state of armed conflict between different nations or states.", defTrans: "Guerra", example: "The major conflict caused immense destruction.", exTrans: "<span style='color:#0077b6'>(O grande conflito causou destruição imensa.)</span>", audioFront: "TTS: War", audioBack: "TTS: The major conflict caused immense destruction." },

                { term: "Century", definition: "A period of one hundred years.", defTrans: "Século", example: "The 20th century was full of changes.", exTrans: "<span style='color:#0077b6'>(O século 20 foi cheio de mudanças.)</span>", audioFront: "TTS: Century", audioBack: "TTS: The 20th century was full of changes." },
                { term: "Concept", definition: "An abstract idea; a general notion.", defTrans: "Conceito", example: "The concept of democracy is vital.", exTrans: "<span style='color:#0077b6'>(O conceito de democracia é vital.)</span>", audioFront: "TTS: Concept", audioBack: "TTS: The concept of democracy is vital." },
                { term: "Danger", definition: "The possibility of suffering harm or injury.", defTrans: "Perigo", example: "Ignoring warnings puts society in danger.", exTrans: "<span style='color:#0077b6'>(Ignorar avisos coloca a sociedade em perigo.)</span>", audioFront: "TTS: Danger", audioBack: "TTS: Ignoring warnings puts society in danger." },
                { term: "Economy", definition: "The state of a country or region in terms of the production and consumption of goods and services.", defTrans: "Economia", example: "The global economy is recovering.", exTrans: "<span style='color:#0077b6'>(A economia global está se recuperando.)</span>", audioFront: "TTS: Economy", audioBack: "TTS: The global economy is recovering." },
                { term: "Effect", definition: "A change which is a result or consequence of an action or other cause.", defTrans: "Efeito", example: "The internet had a massive effect on us.", exTrans: "<span style='color:#0077b6'>(A internet teve um efeito massivo sobre nós.)</span>", audioFront: "TTS: Effect", audioBack: "TTS: The internet had a massive effect on us." },
                { term: "Era", definition: "A long and distinct period of history with a particular feature or characteristic.", defTrans: "Era / Época", example: "We live in the digital era.", exTrans: "<span style='color:#0077b6'>(Vivemos na era digital.)</span>", audioFront: "TTS: Era", audioBack: "TTS: We live in the digital era." },
                { term: "Event", definition: "A thing that happens, especially one of importance.", defTrans: "Evento", example: "The moon landing was a historic event.", exTrans: "<span style='color:#0077b6'>(O pouso na lua foi um evento histórico.)</span>", audioFront: "TTS: Event", audioBack: "TTS: The moon landing was a historic event." },
                { term: "Exhibition", definition: "A public display of works of art or items of interest, held in a museum or gallery.", defTrans: "Exposição", example: "I saw the computer exhibition at the museum.", exTrans: "<span style='color:#0077b6'>(Eu vi a exposição de computadores no museu.)</span>", audioFront: "TTS: Exhibition", audioBack: "TTS: I saw the computer exhibition at the museum." },
                { term: "Generation", definition: "All of the people born and living at about the same time.", defTrans: "Geração", example: "My generation loves technology.", exTrans: "<span style='color:#0077b6'>(Minha geração ama tecnologia.)</span>", audioFront: "TTS: Generation", audioBack: "TTS: My generation loves technology." },
                { term: "Health", definition: "The state of being free from illness or injury.", defTrans: "Saúde", example: "Good health is more important than money.", exTrans: "<span style='color:#0077b6'>(Uma boa saúde é mais importante que dinheiro.)</span>", audioFront: "TTS: Health", audioBack: "TTS: Good health is more important than money." },
                { term: "Idea", definition: "A thought or suggestion as to a possible course of action.", defTrans: "Ideia", example: "I have a great idea for the project.", exTrans: "<span style='color:#0077b6'>(Eu tenho uma ótima ideia para o projeto.)</span>", audioFront: "TTS: Idea", audioBack: "TTS: I have a great idea for the project." },
                { term: "Impact", definition: "A marked effect or influence.", defTrans: "Impacto", example: "His speech had a strong impact.", exTrans: "<span style='color:#0077b6'>(O discurso dele teve um forte impacto.)</span>", audioFront: "TTS: Impact", audioBack: "TTS: His speech had a strong impact." },
                { term: "Lesson", definition: "A period of learning or teaching; a thing learned or to be learned.", defTrans: "Lição", example: "History is a good lesson for the future.", exTrans: "<span style='color:#0077b6'>(A história é uma boa lição para o futuro.)</span>", audioFront: "TTS: Lesson", audioBack: "TTS: History is a good lesson for the future." },
                { term: "Life", definition: "The existence of an individual human being or animal.", defTrans: "Vida", example: "Life in the past was much simpler.", exTrans: "<span style='color:#0077b6'>(A vida no passado era muito mais simples.)</span>", audioFront: "TTS: Life", audioBack: "TTS: Life in the past was much simpler." },
                { term: "Memories", definition: "The faculty by which the mind stores and remembers information.", defTrans: "Memórias", example: "Photos bring back good memories.", exTrans: "<span style='color:#0077b6'>(Fotos trazem de volta boas memórias.)</span>", audioFront: "TTS: Memories", audioBack: "TTS: Photos bring back good memories." },
                { term: "News", definition: "Newly received or noteworthy information, especially about recent or important events.", defTrans: "Notícias", example: "Did you watch the news today?", exTrans: "<span style='color:#0077b6'>(Você assistiu às notícias hoje?)</span>", audioFront: "TTS: News", audioBack: "TTS: Did you watch the news today?" },
                { term: "Period", definition: "A length or portion of time.", defTrans: "Período", example: "It was a difficult period in history.", exTrans: "<span style='color:#0077b6'>(Foi um período difícil na história.)</span>", audioFront: "TTS: Period", audioBack: "TTS: It was a difficult period in history." },
                { term: "Perspective", definition: "A particular attitude toward or way of regarding something; a point of view.", defTrans: "Perspectiva", example: "Everyone has a different perspective.", exTrans: "<span style='color:#0077b6'>(Cada um tem uma perspectiva diferente.)</span>", audioFront: "TTS: Perspective", audioBack: "TTS: Everyone has a different perspective." },
                { term: "Photo", definition: "A photograph.", defTrans: "Foto", example: "This old photo is in black and white.", exTrans: "<span style='color:#0077b6'>(Esta foto antiga é em preto e branco.)</span>", audioFront: "TTS: Photo", audioBack: "TTS: This old photo is in black and white." },
                { term: "Regret", definition: "A feeling of sadness or disappointment over something that has happened or been done.", defTrans: "Arrependimento", example: "She felt deep regret for her actions.", exTrans: "<span style='color:#0077b6'>(Ela sentiu um profundo arrependimento por suas ações.)</span>", audioFront: "TTS: Regret", audioBack: "TTS: She felt deep regret for her actions." },
                { term: "Solution", definition: "A means of solving a problem or dealing with a difficult situation.", defTrans: "Solução", example: "We need a solution for this issue.", exTrans: "<span style='color:#0077b6'>(Precisamos de uma solução para este problema.)</span>", audioFront: "TTS: Solution", audioBack: "TTS: We need a solution for this issue." },
                { term: "Strategy", definition: "A plan of action or policy designed to achieve a major or overall aim.", defTrans: "Estratégia", example: "They developed a new strategy.", exTrans: "<span style='color:#0077b6'>(Eles desenvolveram uma nova estratégia.)</span>", audioFront: "TTS: Strategy", audioBack: "TTS: They developed a new strategy." },
                { term: "Time", definition: "The indefinite continued progress of existence and events.", defTrans: "Tempo", example: "Time goes by so fast.", exTrans: "<span style='color:#0077b6'>(O tempo passa tão rápido.)</span>", audioFront: "TTS: Time", audioBack: "TTS: Time goes by so fast." },
                { term: "Topic", definition: "A matter dealt with in a text, discourse, or conversation; a subject.", defTrans: "Tópico", example: "The topic of the debate is equality.", exTrans: "<span style='color:#0077b6'>(O tópico do debate é a igualdade.)</span>", audioFront: "TTS: Topic", audioBack: "TTS: The topic of the debate is equality." },
                { term: "World", definition: "The earth, together with all of its countries, peoples, and natural features.", defTrans: "Mundo", example: "The world is constantly changing.", exTrans: "<span style='color:#0077b6'>(O mundo está em constante mudança.)</span>", audioFront: "TTS: World", audioBack: "TTS: The world is constantly changing." },
                // --- PART 4: PHRASAL VERBS, EXPRESSIONS, & GRAMMAR ---
                { term: "Bring up", definition: "To mention a topic.", defTrans: "Mencionar", example: "She brought up the issue of prejudice.", exTrans: "<span style='color:#0077b6'>(Ela mencionou a questão do preconceito.)</span>", audioFront: "TTS: Bring up", audioBack: "TTS: She brought up the issue of prejudice." },
                { term: "Bring about", definition: "To cause something to happen.", defTrans: "Causar / Provocar", example: "Technology brought about huge changes.", exTrans: "<span style='color:#0077b6'>(A tecnologia provocou grandes mudanças.)</span>", audioFront: "TTS: Bring about", audioBack: "TTS: Technology brought about huge changes." },
                { term: "Bring back", definition: "To cause someone to remember something.", defTrans: "Trazer de volta à memória", example: "This photo brings back many memories.", exTrans: "<span style='color:#0077b6'>(Esta foto traz de volta muitas memórias.)</span>", audioFront: "TTS: Bring back", audioBack: "TTS: This photo brings back many memories." },
                { term: "Bring down", definition: "To cause to fall or to reduce.", defTrans: "Derrubar / Reduzir", example: "The crisis brought down the economy.", exTrans: "<span style='color:#0077b6'>(A crise derrubou a economia.)</span>", audioFront: "TTS: Bring down", audioBack: "TTS: The crisis brought down the economy." },
                { term: "Bring out", definition: "To release a new product or make a quality more noticeable.", defTrans: "Lançar / Realçar", example: "The company brought out a new computer.", exTrans: "<span style='color:#0077b6'>(A empresa lançou um novo computador.)</span>", audioFront: "TTS: Bring out", audioBack: "TTS: The company brought out a new computer." },
                { term: "Come about", definition: "To happen or occur.", defTrans: "Surgir / Acontecer", example: "How did the Digital Age come about?", exTrans: "<span style='color:#0077b6'>(Como a Era Digital surgiu?)</span>", audioFront: "TTS: Come about", audioBack: "TTS: How did the Digital Age come about?" },
                { term: "Come across", definition: "To meet or find someone or something by chance.", defTrans: "Encontrar por acaso", example: "I came across an old radio yesterday.", exTrans: "<span style='color:#0077b6'>(Encontrei um rádio antigo por acaso ontem.)</span>", audioFront: "TTS: Come across", audioBack: "TTS: I came across an old radio yesterday." },
                { term: "Come up with", definition: "To think of or invent an idea or plan.", defTrans: "Criar / Inventar", example: "Scientists came up with a new vaccine.", exTrans: "<span style='color:#0077b6'>(Cientistas criaram/inventaram uma nova vacina.)</span>", audioFront: "TTS: Come up with", audioBack: "TTS: Scientists came up with a new vaccine." },
                { term: "Come out", definition: "To be published or made available to the public.", defTrans: "Ser lançado", example: "When did that invention come out?", exTrans: "<span style='color:#0077b6'>(Quando essa invenção foi lançada?)</span>", audioFront: "TTS: Come out", audioBack: "TTS: When did that invention come out?" },
                { term: "Come back", definition: "To return to a place.", defTrans: "Voltar", example: "Many soldiers didn't come back from the conflict.", exTrans: "<span style='color:#0077b6'>(Muitos soldados não voltaram do conflito.)</span>", audioFront: "TTS: Come back", audioBack: "TTS: Many soldiers didn't come back from the conflict." },
                { term: "Come along", definition: "To make progress or to arrive/go with someone.", defTrans: "Progredir / Acompanhar", example: "How is the project coming along?", exTrans: "<span style='color:#0077b6'>(Como o projeto está progredindo?)</span>", audioFront: "TTS: Come along", audioBack: "TTS: How is the project coming along?" },
                { term: "The 20th century", definition: "The period between 1901 and 2000.", defTrans: "O século 20", example: "Many things changed in the 20th century.", exTrans: "<span style='color:#0077b6'>(Muitas coisas mudaram no século 20.)</span>", audioFront: "TTS: The 20th century", audioBack: "TTS: Many things changed in the 20th century." },
                { term: "World Wide Web", definition: "An information system on the internet which allows documents to be connected.", defTrans: "Rede mundial de computadores", example: "The WWW connects the entire world.", exTrans: "<span style='color:#0077b6'>(A WWW conecta o mundo inteiro.)</span>", audioFront: "TTS: World Wide Web", audioBack: "TTS: The WWW connects the entire world." },
                { term: "Universal Declaration of Human Rights", definition: "A historic document outlining the rights and freedoms everyone is entitled to.", defTrans: "Declaração Universal dos Direitos Humanos", example: "The UDHR protects human rights.", exTrans: "<span style='color:#0077b6'>(A DUDH protege os direitos humanos.)</span>", audioFront: "TTS: Universal Declaration of Human Rights", audioBack: "TTS: The UDHR protects human rights." },
                { term: "Civil Rights Movement", definition: "The struggle for social justice and equal rights in the mid-20th century.", defTrans: "Movimento pelos direitos civis", example: "The Civil Rights Movement was crucial.", exTrans: "<span style='color:#0077b6'>(O Movimento dos Direitos Civis foi crucial.)</span>", audioFront: "TTS: Civil Rights Movement", audioBack: "TTS: The Civil Rights Movement was crucial." },
                { term: "Cold War", definition: "A state of political hostility between countries characterized by threats and propaganda.", defTrans: "Guerra Fria", example: "The Cold War lasted for decades.", exTrans: "<span style='color:#0077b6'>(A Guerra Fria durou décadas.)</span>", audioFront: "TTS: Cold War", audioBack: "TTS: The Cold War lasted for decades." },
                { term: "Digital Age", definition: "The present time, in which many activities are done using computers and the internet.", defTrans: "Era Digital", example: "We are living in the Digital Age.", exTrans: "<span style='color:#0077b6'>(Nós estamos vivendo na Era Digital.)</span>", audioFront: "TTS: Digital Age", audioBack: "TTS: We are living in the Digital Age." },
                { term: "Catch up", definition: "To succeed in reaching a person who is ahead or to learn the latest news.", defTrans: "Alcançar / Colocar o papo em dia", example: "I need to catch up with my studies.", exTrans: "<span style='color:#0077b6'>(Preciso colocar meus estudos em dia.)</span>", audioFront: "TTS: Catch up", audioBack: "TTS: I need to catch up with my studies." },
                { term: "Face-to-face communication", definition: "Direct conversation between people who are in the same place.", defTrans: "Comunicação cara a cara", example: "I prefer face-to-face communication.", exTrans: "<span style='color:#0077b6'>(Eu prefiro comunicação cara a cara.)</span>", audioFront: "TTS: Face-to-face communication", audioBack: "TTS: I prefer face-to-face communication." },

                // --- GRAMMAR PATTERNS ---
                { term: "WISH + Simple Past", definition: "To express an unreal present wish.", defTrans: "Desejo/Lamento Presente", example: "I wish I had more time now.", exTrans: "<span style='color:#0077b6'>(Quem me dera eu tivesse mais tempo agora.)</span>", audioFront: "TTS: Wish plus Simple Past", audioBack: "TTS: I wish I had more time now." },
                { term: "WISH + Past Perfect", definition: "To express a regret about the past.", defTrans: "Arrependimento Passado", example: "I wish I had studied more last week.", exTrans: "<span style='color:#0077b6'>(Quem me dera eu tivesse estudado mais semana passada.)</span>", audioFront: "TTS: Wish plus Past Perfect", audioBack: "TTS: I wish I had studied more last week." },
                { term: "WISH + WOULD", definition: "To express annoyance or desire for future change.", defTrans: "Mudança Futura / Irritação", example: "I wish it would stop raining.", exTrans: "<span style='color:#0077b6'>(Quem me dera parasse de chover.)</span>", audioFront: "TTS: Wish plus Would", audioBack: "TTS: I wish it would stop raining." },
                { term: "WISH + BE (Formal)", definition: "Use WERE for all subjects for present wishes.", defTrans: "Uso Formal de 'Were'", example: "He wishes he were an activist.", exTrans: "<span style='color:#0077b6'>(Ele gostaria que ele fosse um ativista.)</span>", audioFront: "TTS: Wish plus BE formal", audioBack: "TTS: He wishes he were an activist." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Complete for Chapter 8)
    // ======================================================
    glossary: [
        // --- TOPIC 1: VERBS (A-Z) ---
        { topic: "Verbs", term: "abolish", definition: "To formally put an end to a system, practice, or institution.", translation: "Abolir" },
        { topic: "Verbs", term: "access", definition: "The right or opportunity to use or see something.", translation: "Acessar" },
        { topic: "Verbs", term: "adapt", definition: "To become adjusted to new conditions.", translation: "Adaptar-se" },
        { topic: "Verbs", term: "addict", definition: "To cause someone to become physically or mentally dependent on something.", translation: "Viciar" },
        { topic: "Verbs", term: "admit", definition: "To confess to be true or to be the case.", translation: "Admitir" },
        { topic: "Verbs", term: "adopt", definition: "To legally take or start to use something as one's own.", translation: "Adotar" },
        { topic: "Verbs", term: "affect", definition: "To have an effect on; make a difference to.", translation: "Afetar" },
        { topic: "Verbs", term: "appreciate", definition: "To recognize the full worth or importance of something.", translation: "Apreciar" },
        { topic: "Verbs", term: "be", definition: "A verb used to describe the state or identity of someone or something.", translation: "Ser / Estar" },
        { topic: "Verbs", term: "bring", definition: "To convey or take something to a place.", translation: "Trazer" },
        { topic: "Verbs", term: "cause", definition: "To make something, especially something bad, happen.", translation: "Causar" },
        { topic: "Verbs", term: "change", definition: "To make or become different.", translation: "Mudar" },
        { topic: "Verbs", term: "come", definition: "To move towards a place or person.", translation: "Vir" },
        { topic: "Verbs", term: "continue", definition: "To persist in an activity or process.", translation: "Continuar" },
        { topic: "Verbs", term: "create", definition: "To bring something into existence.", translation: "Criar" },
        { topic: "Verbs", term: "decrease", definition: "To make or become smaller or fewer in size, amount, intensity, or degree.", translation: "Diminuir" },
        { topic: "Verbs", term: "desire", definition: "A strong feeling of wanting to have something or wishing for something to happen.", translation: "Desejar" },
        { topic: "Verbs", term: "develop", definition: "To grow or cause to grow and become more mature, advanced, or elaborate.", translation: "Desenvolver" },
        { topic: "Verbs", term: "disappear", definition: "To cease to be visible; to die out.", translation: "Desaparecer" },
        { topic: "Verbs", term: "discuss", definition: "To talk about something with another person or group of people.", translation: "Discutir" },
        { topic: "Verbs", term: "do", definition: "To perform an action.", translation: "Fazer" },
        { topic: "Verbs", term: "exist", definition: "To have objective reality or being.", translation: "Existir" },
        { topic: "Verbs", term: "explode", definition: "To increase suddenly and rapidly in number or extent.", translation: "Explodir" },
        { topic: "Verbs", term: "explore", definition: "To travel in or through an unfamiliar area in order to learn about it.", translation: "Explorar" },
        { topic: "Verbs", term: "express", definition: "To convey a thought or feeling in words or by gestures and conduct.", translation: "Expressar" },
        { topic: "Verbs", term: "face", definition: "To confront and deal with a difficult situation or person.", translation: "Encarar / Enfrentar" },
        { topic: "Verbs", term: "feel", definition: "To experience an emotion or physical sensation.", translation: "Sentir" },
        { topic: "Verbs", term: "focus", definition: "To pay particular attention to one thing.", translation: "Focar" },
        { topic: "Verbs", term: "happen", definition: "To take place; occur.", translation: "Acontecer" },
        { topic: "Verbs", term: "have", definition: "To possess, own, or hold.", translation: "Ter" },
        { topic: "Verbs", term: "invent", definition: "To create or design something that has not existed before.", translation: "Inventar" },
        { topic: "Verbs", term: "know", definition: "To be aware of through observation, inquiry, or information.", translation: "Saber / Conhecer" },
        { topic: "Verbs", term: "learn", definition: "To gain or acquire knowledge of or skill in something by study or experience.", translation: "Aprender" },
        { topic: "Verbs", term: "live", definition: "To remain alive; to have one's home in a particular place.", translation: "Viver" },
        { topic: "Verbs", term: "look", definition: "To direct one's gaze toward something.", translation: "Olhar" },
        { topic: "Verbs", term: "listen", definition: "To give one's attention to a sound.", translation: "Ouvir" },
        { topic: "Verbs", term: "lose", definition: "To be deprived of or cease to have or retain something.", translation: "Perder" },
        { topic: "Verbs", term: "love", definition: "To feel a deep romantic or sexual attachment to someone; to enjoy very much.", translation: "Amar" },
        { topic: "Verbs", term: "move", definition: "To go from one place to another.", translation: "Mover / Mudar-se" },
        { topic: "Verbs", term: "need", definition: "To require something because it is essential or very important.", translation: "Precisar" },
        { topic: "Verbs", term: "push-for", definition: "To strongly encourage or campaign for something.", translation: "Pressionar por / Lutar por" },
        { topic: "Verbs", term: "read", definition: "To look at and comprehend the meaning of written or printed matter.", translation: "Ler" },
        { topic: "Verbs", term: "remember", definition: "To have in or be able to bring to one's mind an awareness of someone or something.", translation: "Lembrar" },
        { topic: "Verbs", term: "reshape", definition: "To shape again or differently.", translation: "Remoldar / Dar nova forma" },
        { topic: "Verbs", term: "respect", definition: "To feel deep admiration for someone or something.", translation: "Respeitar" },
        { topic: "Verbs", term: "save", definition: "To keep safe or rescue from harm.", translation: "Salvar / Economizar" },
        { topic: "Verbs", term: "see", definition: "To perceive with the eyes.", translation: "Ver" },
        { topic: "Verbs", term: "seem", definition: "To give the impression or sensation of being something.", translation: "Parecer" },
        { topic: "Verbs", term: "suffer", definition: "To experience or be subjected to something bad or unpleasant.", translation: "Sofrer" },
        { topic: "Verbs", term: "stop", definition: "To cease to happen or to prevent something from happening.", translation: "Parar" },
        { topic: "Verbs", term: "take", definition: "To reach for and hold; to accept or receive.", translation: "Tomar / Pegar" },
        { topic: "Verbs", term: "talk", definition: "To speak in order to give information or express ideas.", translation: "Conversar" },
        { topic: "Verbs", term: "tell", definition: "To communicate information, facts, or news to someone.", translation: "Contar / Dizer" },
        { topic: "Verbs", term: "think", definition: "To have a particular belief or idea.", translation: "Pensar" },
        { topic: "Verbs", term: "transform", definition: "To make a thorough or dramatic change in the form, appearance, or character of.", translation: "Transformar" },
        { topic: "Verbs", term: "travel", definition: "To make a journey, typically of some length.", translation: "Viajar" },
        { topic: "Verbs", term: "use", definition: "To take, hold, or deploy something as a means of accomplishing a purpose.", translation: "Usar" },
        { topic: "Verbs", term: "visit", definition: "To go to see and spend time with someone or in a place.", translation: "Visitar" },
        { topic: "Verbs", term: "vote", definition: "To give or register a vote.", translation: "Votar" },
        { topic: "Verbs", term: "want", definition: "To have a desire to possess or do something; wish for.", translation: "Querer" },
        { topic: "Verbs", term: "wish", definition: "A feel or expression of a strong desire or hope for something.", translation: "Desejar / Quem me dera" },
        { topic: "Verbs", term: "work", definition: "To be engaged in physical or mental activity to achieve a result.", translation: "Trabalhar" },

        // --- TOPIC 2: SCIENCE & TECH ---
        { topic: "Science & Tech", term: "addiction", definition: "A compulsive engagement in a rewarding stimuli, despite adverse consequences.", translation: "Vício" },
        { topic: "Science & Tech", term: "airplane", definition: "A powered flying vehicle with fixed wings.", translation: "Avião" },
        { topic: "Science & Tech", term: "antibiotics", definition: "Medicine that inhibits the growth of or destroys microorganisms.", translation: "Antibióticos" },
        { topic: "Science & Tech", term: "automobile", definition: "A road vehicle, typically with four wheels, powered by an internal combustion engine.", translation: "Automóvel / Carro" },
        { topic: "Science & Tech", term: "computer", definition: "An electronic device for storing and processing data.", translation: "Computador" },
        { topic: "Science & Tech", term: "convenience", definition: "The state of being able to proceed with something with little effort or difficulty.", translation: "Conveniência" },
        { topic: "Science & Tech", term: "development", definition: "The process of starting to experience or create something new.", translation: "Desenvolvimento" },
        { topic: "Science & Tech", term: "invention", definition: "The action of inventing something, typically a process or device.", translation: "Invenção" },
        { topic: "Science & Tech", term: "internet", definition: "A global computer network providing a variety of information and communication facilities.", translation: "Internet / Rede mundial" },
        { topic: "Science & Tech", term: "medicine", definition: "The science or practice of the diagnosis, treatment, and prevention of disease.", translation: "Medicina" },
        { topic: "Science & Tech", term: "radio", definition: "The transmission and reception of electromagnetic waves of radio frequency.", translation: "Rádio" },
        { topic: "Science & Tech", term: "science", definition: "The intellectual and practical activity encompassing the systematic study of the physical world.", translation: "Ciência" },
        { topic: "Science & Tech", term: "technology", definition: "The application of scientific knowledge for practical purposes.", translation: "Tecnologia" },
        { topic: "Science & Tech", term: "television", definition: "A system for transmitting visual images and sound that are reproduced on screens.", translation: "Televisão" },
        { topic: "Science & Tech", term: "transportation", definition: "The action of transporting someone or something or the process of being transported.", translation: "Transporte" },
        { topic: "Science & Tech", term: "vaccine", definition: "A substance used to stimulate the production of antibodies and provide immunity.", translation: "Vacina" },

        // --- TOPIC 3: POLITICS & SOCIETY ---
        { topic: "Politics & Society", term: "activist", definition: "A person who campaigns to bring about political or social change.", translation: "Ativista" },
        { topic: "Politics & Society", term: "behavior", definition: "The way in which one acts or conducts oneself.", translation: "Comportamento" },
        { topic: "Politics & Society", term: "communication", definition: "The imparting or exchanging of information or news.", translation: "Comunicação" },
        { topic: "Politics & Society", term: "crisis", definition: "A time of intense difficulty, trouble, or danger.", translation: "Crise" },
        { topic: "Politics & Society", term: "document", definition: "A piece of written, printed, or electronic matter that provides information.", translation: "Documento" },
        { topic: "Politics & Society", term: "equality", definition: "The state of being equal, especially in status, rights, and opportunities.", translation: "Igualdade" },
        { topic: "Politics & Society", term: "globalization", definition: "The process by which businesses or other organizations develop international influence.", translation: "Globalização" },
        { topic: "Politics & Society", term: "government", definition: "The governing body of a nation, state, or community.", translation: "Governo" },
        { topic: "Politics & Society", term: "history", definition: "The study of past events, particularly in human affairs.", translation: "História" },
        { topic: "Politics & Society", term: "inequality", definition: "Difference in size, degree, circumstances, etc.; lack of equality.", translation: "Desigualdade" },
        { topic: "Politics & Society", term: "interaction", definition: "Reciprocal action or influence.", translation: "Interação" },
        { topic: "Politics & Society", term: "issue", definition: "An important topic or problem for debate or discussion.", translation: "Questão / Problema" },
        { topic: "Politics & Society", term: "law", definition: "The system of rules which a particular country or community recognizes as regulating the actions of its members.", translation: "Lei" },
        { topic: "Politics & Society", term: "movement", definition: "An organized effort by people to achieve a common social or political goal.", translation: "Movimento (direitos civis)" },
        { topic: "Politics & Society", term: "peace", definition: "Freedom from disturbance; quiet and tranquility.", translation: "Paz" },
        { topic: "Politics & Society", term: "politics", definition: "The activities associated with the governance of a country.", translation: "Política" },
        { topic: "Politics & Society", term: "politician", definition: "A person who is professionally involved in politics.", translation: "Político" },
        { topic: "Politics & Society", term: "prejudice", definition: "Preconceived opinion that is not based on reason or actual experience.", translation: "Preconceito" },
        { topic: "Politics & Society", term: "progress", definition: "Forward or onward movement toward a destination or a goal.", translation: "Progresso" },
        { topic: "Politics & Society", term: "right", definition: "A moral or legal entitlement to have or obtain something or to act in a certain way.", translation: "Direito(s)" },
        { topic: "Politics & Society", term: "society", definition: "The aggregate of people living together in a more or less ordered community.", translation: "Sociedade" },
        { topic: "Politics & Society", term: "soldier", definition: "A person who serves in an army.", translation: "Soldado" },
        { topic: "Politics & Society", term: "suffrage", definition: "The right to vote in political elections.", translation: "Sufrágio (voto feminino)" },
        { topic: "Politics & Society", term: "united-nations", definition: "An international organization formed in 1945 to increase political and economic cooperation.", translation: "Nações Unidas (ONU)" },
        { topic: "Politics & Society", term: "war", definition: "A state of armed conflict between different nations or states.", translation: "Guerra" },

        // --- TOPIC 4: CONCEPTS & PHRASALS ---
        { topic: "Concepts & Phrasals", term: "century", definition: "A period of one hundred years.", translation: "Século" },
        { topic: "Concepts & Phrasals", term: "concept", definition: "An abstract idea; a general notion.", translation: "Conceito" },
        { topic: "Concepts & Phrasals", term: "danger", definition: "The possibility of suffering harm or injury.", translation: "Perigo" },
        { topic: "Concepts & Phrasals", term: "economy", definition: "The state of a country or region in terms of the production and consumption of goods and services.", translation: "Economia" },
        { topic: "Concepts & Phrasals", term: "effect", definition: "A change which is a result or consequence of an action or other cause.", translation: "Efeito" },
        { topic: "Concepts & Phrasals", term: "era", definition: "A long and distinct period of history with a particular feature or characteristic.", translation: "Era / Época" },
        { topic: "Concepts & Phrasals", term: "event", definition: "A thing that happens, especially one of importance.", translation: "Evento" },
        { topic: "Concepts & Phrasals", term: "exhibition", definition: "A public display of works of art or items of interest, held in a museum or gallery.", translation: "Exposição" },
        { topic: "Concepts & Phrasals", term: "generation", definition: "All of the people born and living at about the same time.", translation: "Geração" },
        { topic: "Concepts & Phrasals", term: "health", definition: "The state of being free from illness or injury.", translation: "Saúde" },
        { topic: "Concepts & Phrasals", term: "idea", definition: "A thought or suggestion as to a possible course of action.", translation: "Ideia" },
        { topic: "Concepts & Phrasals", term: "impact", definition: "A marked effect or influence.", translation: "Impacto" },
        { topic: "Concepts & Phrasals", term: "lesson", definition: "A period of learning or teaching; a thing learned or to be learned.", translation: "Lição" },
        { topic: "Concepts & Phrasals", term: "life", definition: "The existence of an individual human being or animal.", translation: "Vida" },
        { topic: "Concepts & Phrasals", term: "memories", definition: "The faculty by which the mind stores and remembers information.", translation: "Memórias" },
        { topic: "Concepts & Phrasals", term: "news", definition: "Newly received or noteworthy information, especially about recent or important events.", translation: "Notícias" },
        { topic: "Concepts & Phrasals", term: "period", definition: "A length or portion of time.", translation: "Período" },
        { topic: "Concepts & Phrasals", term: "perspective", definition: "A particular attitude toward or way of regarding something; a point of view.", translation: "Perspectiva" },
        { topic: "Concepts & Phrasals", term: "photo", definition: "A photograph.", translation: "Foto" },
        { topic: "Concepts & Phrasals", term: "regret", definition: "A feeling of sadness or disappointment over something that has happened or been done.", translation: "Arrependimento" },
        { topic: "Concepts & Phrasals", term: "solution", definition: "A means of solving a problem or dealing with a difficult situation.", translation: "Solução" },
        { topic: "Concepts & Phrasals", term: "strategy", definition: "A plan of action or policy designed to achieve a major or overall aim.", translation: "Estratégia" },
        { topic: "Concepts & Phrasals", term: "time", definition: "The indefinite continued progress of existence and events.", translation: "Tempo" },
        { topic: "Concepts & Phrasals", term: "topic", definition: "A matter dealt with in a text, discourse, or conversation; a subject.", translation: "Tópico" },
        { topic: "Concepts & Phrasals", term: "world", definition: "The earth, together with all of its countries, peoples, and natural features.", translation: "Mundo" },
        { topic: "Concepts & Phrasals", term: "bring-up", definition: "To mention a topic.", translation: "Mencionar" },
        { topic: "Concepts & Phrasals", term: "bring-about", definition: "To cause something to happen.", translation: "Causar / Provocar" },
        { topic: "Concepts & Phrasals", term: "bring-back", definition: "To cause someone to remember something.", translation: "Trazer de volta à memória" },
        { topic: "Concepts & Phrasals", term: "bring-down", definition: "To cause to fall or to reduce.", translation: "Derrubar / Reduzir" },
        { topic: "Concepts & Phrasals", term: "bring-out", definition: "To release a new product or make a quality more noticeable.", translation: "Lançar / Realçar" },
        { topic: "Concepts & Phrasals", term: "come-about", definition: "To happen or occur.", translation: "Surgir / Acontecer" },
        { topic: "Concepts & Phrasals", term: "come-across", definition: "To meet or find someone or something by chance.", translation: "Encontrar por acaso" },
        { topic: "Concepts & Phrasals", term: "come-up-with", definition: "To think of or invent an idea or plan.", translation: "Criar / Inventar" },
        { topic: "Concepts & Phrasals", term: "come-out", definition: "To be published or made available to the public.", translation: "Ser lançado" },
        { topic: "Concepts & Phrasals", term: "come-back", definition: "To return to a place.", translation: "Voltar" },
        { topic: "Concepts & Phrasals", term: "come-along", definition: "To make progress or to arrive/go with someone.", translation: "Progredir / Acompanhar" },

        // --- TOPIC 5: PHRASES & EXPRESSIONS ---
        { topic: "Phrases & Expressions", term: "20th-century", definition: "The period between 1901 and 2000.", translation: "O século 20" },
        { topic: "Phrases & Expressions", term: "www", definition: "An information system on the internet which allows documents to be connected.", translation: "Rede mundial de computadores" },
        { topic: "Phrases & Expressions", term: "udhr", definition: "A historic document outlining the rights and freedoms everyone is entitled to.", translation: "Declaração Universal dos Direitos Humanos (DUDH)" },
        { topic: "Phrases & Expressions", term: "civil-rights-movement", definition: "The struggle for social justice and equal rights in the mid-20th century.", translation: "Movimento pelos direitos civis" },
        { topic: "Phrases & Expressions", term: "cold-war", definition: "A state of political hostility between countries characterized by threats and propaganda.", translation: "Guerra Fria" },
        { topic: "Phrases & Expressions", term: "digital-age", definition: "The present time, in which many activities are done using computers and the internet.", translation: "Era Digital" },
        { topic: "Phrases & Expressions", term: "catch-up", definition: "To succeed in reaching a person who is ahead or to learn the latest news.", translation: "Alcançar / Colocar o papo em dia" },
        { topic: "Phrases & Expressions", term: "face-to-face", definition: "Direct conversation between people who are in the same place.", translation: "Comunicação cara a cara" },
        { topic: "Phrases & Expressions", term: "much-earlier", definition: "A long time before.", translation: "Muito antes" },
        { topic: "Phrases & Expressions", term: "much-slower", definition: "At a much lower speed.", translation: "Muito mais devagar" },
        { topic: "Phrases & Expressions", term: "much-later", definition: "A long time after.", translation: "Muito depois" },
        { topic: "Phrases & Expressions", term: "last-week", definition: "The seven days previous to the current week.", translation: "Semana passada" },
        { topic: "Phrases & Expressions", term: "so-fast", definition: "At a very high speed.", translation: "Tão rápido" },
        { topic: "Phrases & Expressions", term: "a-bit-slower", definition: "At a lower speed than before.", translation: "Um pouco mais devagar" },
  
    // GLOSSARY (Part 5: Grammar - from 3A)
        { topic: "Grammar", term: "wish-simple-past", definition: "Used to express an unreal present wish or desire for a different situation.", translation: "Desejo/Lamento Presente" },
        { topic: "Grammar", term: "wish-past-perfect", definition: "Used to express a regret about something that did or did not happen in the past.", translation: "Arrependimento Passado" },
        { topic: "Grammar", term: "wish-would", definition: "Used to express annoyance about a current action or a desire for someone's behavior to change.", translation: "Irritação / Desejo de Mudança Futura" },
        { topic: "Grammar", term: "wish-were-formal", definition: "The formal structure using 'were' for all subjects (I, he, she, it) in present wishes.", translation: "Uso Formal de 'Were' com 'Wish'" },
        { topic: "Grammar", term: "bring-about", definition: "To cause something to happen.", translation: "Causar / Provocar" },
        { topic: "Grammar", term: "bring-up", definition: "To mention a topic.", translation: "Mencionar um tópico" },
        { topic: "Grammar", term: "bring-back", definition: "To return something or cause someone to remember something.", translation: "Trazer de volta / Relembrar" },
        { topic: "Grammar", term: "bring-down", definition: "To cause to fall or to reduce prices/levels.", translation: "Derrubar / Reduzir" },
        { topic: "Grammar", term: "bring-out", definition: "To release a new product or make a quality more noticeable.", translation: "Lançar / Realçar" },
        { topic: "Grammar", term: "come-about", definition: "To happen or take place.", translation: "Acontecer / Surgir" },
        { topic: "Grammar", term: "come-across", definition: "To meet or find someone or something by chance.", translation: "Encontrar por acaso" },
        { topic: "Grammar", term: "come-up-with", definition: "To think of or invent an idea or plan.", translation: "Criar / Inventar" },
        { topic: "Grammar", term: "come-out", definition: "When a film, book, or invention becomes available to the public.", translation: "Ser lançado / Publicado" },
        { topic: "Grammar", term: "come-along", definition: "To make progress or to arrive/go with someone.", translation: "Progredir / Acompanhar" },
        // --- TOPIC 6: CONTEXT (UNIQUE TOOLTIPS) ---
        { topic: "Context", term: "past-perfect", definition: "The grammar tense formed with 'had' + past participle, used for actions that happened before another past action.", translation: "Past Perfect (Pretérito Mais-que-Perfeito)" },
        { topic: "Context", term: "simple-past", definition: "The basic form of a past tense in English, used to talk about completed actions in the past.", translation: "Simple Past (Passado Simples)" },
        { topic: "Context", term: "phrasal-verb", definition: "A verb combined with a preposition or adverb.", translation: "Verbo frasal" },
        { topic: "Context", term: "historical", definition: "Concerning history or past events.", translation: "Histórico(a)" },
        { topic: "Context", term: "human-rights", definition: "A right that is believed to belong justifiably to every person.", translation: "Direitos humanos" },
        { topic: "Context", term: "future", definition: "The time yet to come.", translation: "Futuro" },
        { topic: "Context", term: "innovation", definition: "A new method, idea, or product.", translation: "Inovação" },
        { topic: "Context", term: "struggle", definition: "To make forceful efforts to get free of restraint or constriction.", translation: "Lutar / Ter dificuldade" },
        { topic: "Context", term: "explosive", definition: "Able to cause an explosion or to explode.", translation: "Explosivo(a)" },
        { topic: "Context", term: "real-life", definition: "Events occurring in the actual world as opposed to in fiction or the internet.", translation: "Vida real" },
        { topic: "Context", term: "documentary", definition: "A film or television program that provides a factual record or report.", translation: "Documentário" },
        { topic: "Context", term: "beginning", definition: "The point in time or space at which something starts.", translation: "Início" },
        { topic: "Context", term: "article", definition: "A piece of writing included with others in a newspaper, magazine, or other publication.", translation: "Artigo" }
    ]
});