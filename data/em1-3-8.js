/**
 * REACH English - LESSON DATA em1-3-8
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em1-3-8", 
    grade: "High School 1st Grade",       
    bimester: "3",   
    chapter: "8",    
    chapterTitle: "Born This Way: Embracing Diversity with Respect and Empathy", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss the importance of [diversity](tooltip:diversity) and [respect](tooltip:respect) in our world.<br>• Recognize and combat [prejudice](tooltip:prejudice), [stereotypes](tooltip:stereotype), and [discrimination](tooltip:discrimination).<br>• Use [comparatives](tooltip:comparatives) and [superlatives](tooltip:superlatives) to describe qualities.<br>• Apply the correct [adjective order](tooltip:adjective-order) (OSASCOMP).<br>• Master [phrasal verbs](tooltip:phrasal-verbs) with BREAK and MAKE.<br>• Identify tricky [false cognates](tooltip:false-cognates).",
            welcome: "Hello, champions of inclusion! I'm Mr. D!<br>Our world is like a massive, beautiful puzzle where every piece is different. Today, we’re going to talk about what makes us unique—our [ethnicity](tooltip:ethnicity), our abilities, and our beliefs. We will explore how to build a [welcoming environment](tooltip:welcoming-environment) where [everyone](tooltip:everyone) feels valued. We'll dive into the grammar of comparison to say who is the [most famous](tooltip:superlatives) [advocate](tooltip:advocate) or which [initiative](tooltip:initiative) is [more impactful](tooltip:comparatives). It’s time to [break down](tooltip:break-down) barriers and be the change! Let’s celebrate our differences!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss the importance of diversity and respect in our world. Recognize and combat prejudice, stereotypes, and discrimination. Use comparatives and superlatives to describe qualities. Apply the correct adjective order, OSASCOMP. Master phrasal verbs with BREAK and MAKE. Identify tricky false cognates.",
                welcome: "TTS: Hello, champions of inclusion! I'm Mr. D! Our world is like a massive, beautiful puzzle where every piece is different. Today, we’re going to talk about what makes us unique—our ethnicity, our abilities, and our beliefs. We will explore how to build a welcoming environment where everyone feels valued. We'll dive into the grammar of comparison to say who is the most famous advocate or which initiative is more impactful. It’s time to break down barriers and be the change! Let’s celebrate our differences!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "(Albert and Celine are preparing a presentation for the school's 'Diversity Week'. Celine is looking at a photo of Malala Yousafzai, while Albert is writing keywords on a whiteboard.)", 
            contextAudio: "audio/em1-3-8/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Albert, look at this photo. Malala is one of [the bravest](tooltip:superlatives) women in history. Her message of [equality](tooltip:equality) and [acceptance](tooltip:acceptance) is [as important as](tooltip:as-important-as) the Global Goals." 
                },
                { 
                    speaker: "Albert", 
                    text: "I agree. Her work is [more impactful](tooltip:comparatives) than many speeches. She [faced](tooltip:face) incredible [hardship](tooltip:hardship) but remained optimistic. We need to [make up for](tooltip:make-up-for) the [lack of integration](tooltip:lack-of-integration) in our own community." 
                },
                { 
                    speaker: "Celine", 
                    text: "[Actually](tooltip:actually), some students were making fun of Pedro's accent earlier. That kind of [intolerance](tooltip:intolerance) is [worse than](tooltip:worse-than) just being unkind; it’s a [microaggression](tooltip:microaggression)." 
                },
                { 
                    speaker: "Albert", 
                    text: "That's awful! Pedro is [more proactive](tooltip:comparatives) than most people. We [ought to](tooltip:ought-to) [break down](tooltip:break-down) those [stereotypes](tooltip:stereotype). Judging a group is [less sensible than](tooltip:less-sensible-than) getting to know the individual." 
                },
                { 
                    speaker: "Celine", 
                    text: "Exactly. We should support him and show respect. Showing respect is the least we can do. Ana, who uses a [wheelchair](tooltip:wheelchair), also faced [ableism](tooltip:ableism) yesterday." 
                },
                { 
                    speaker: "Albert", 
                    text: "We must create a more [inclusive](tooltip:inclusive) school. Diversity makes life more interesting. Let's make a point of welcoming everyone." 
                },
                { 
                    speaker: "Celine", 
                    text: "I'm with you. Let's [break the ice](tooltip:break-the-ice) with a [joke](tooltip:joke) and then share these [points of view](tooltip:points-of-view) with the class. [Empathy](tooltip:empathy) is [as crucial as](tooltip:as-crucial-as) intelligence." 
                },
                { 
                    speaker: "Albert", 
                    text: "Perfect. Let's [be the change](tooltip:be-the-change) and [make a difference](tooltip:make-a-difference) today!" 
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
                    title: "Verbs A-L",
                    audio: "TTS: Accept. Agree. Avoid. Believe. Break down. Break through. Break up. Build. Campaign. Challenge. Change. Compare. Compensate. Constitute. Create. Deserve. Do. Endure. Feel. Find. Focus on. Give. Hear. Help. Inspire. Invent. Judge. Know. Laugh. Lead to. Learn. Live.",
                    items: [
                        { term: "Accept", trans: "aceitar" },
                        { term: "Agree", trans: "concordar" },
                        { term: "Avoid", trans: "evitar" },
                        { term: "Believe", trans: "acreditar" },
                        { term: "Break down", trans: "romper / derrubar" },
                        { term: "Break through", trans: "romper (barreira)" },
                        { term: "Break up", trans: "separar (grupo)" },
                        { term: "Build", trans: "construir" },
                        { term: "Campaign", trans: "fazer campanha" },
                        { term: "Challenge", trans: "desafiar" },
                        { term: "Change", trans: "mudar" },
                        { term: "Compare", trans: "comparar" },
                        { term: "Compensate", trans: "compensar" },
                        { term: "Constitute", trans: "constituir" },
                        { term: "Create", trans: "criar" },
                        { term: "Deserve", trans: "merecer" },
                        { term: "Do", trans: "fazer" },
                        { term: "Endure", trans: "suportar / aguentar" },
                        { term: "Feel", trans: "sentir" },
                        { term: "Find", trans: "encontrar" },
                        { term: "Focus on", trans: "focar em" },
                        { term: "Give", trans: "dar" },
                        { term: "Hear", trans: "ouvir" },
                        { term: "Help", trans: "ajudar" },
                        { term: "Inspire", trans: "inspirar" },
                        { term: "Invent", trans: "inventar" },
                        { term: "Judge", trans: "julgar" },
                        { term: "Know", trans: "saber / conhecer" },
                        { term: "Laugh", trans: "rir" },
                        { term: "Lead to", trans: "levar a" },
                        { term: "Learn", trans: "aprender" },
                        { term: "Live", trans: "viver" }
                    ]
                },
                {
                    title: "Verbs M-W",
                    audio: "TTS: Make. Make fun of. Make up. Make up for. Mean. Mention. Move. Need. Neglect. Offer. Overcome. Pass. Praise. Promote. Recognize. Reconcile. Remain. Respect. See. Seek. Separate. Share. Show. Sigh. Speak. Stand. Stay. Stimulate. Stop. Succeed. Suggest. Support. Think. Touch upon. Travel. Turn. Try. Understand. Value. Welcome. Work.",
                    items: [
                        { term: "Make", trans: "fazer / criar" },
                        { term: "Make fun of", trans: "zombar de" },
                        { term: "Make up", trans: "fazer as pazes / inventar" },
                        { term: "Make up for", trans: "compensar por" },
                        { term: "Mean", trans: "significar" },
                        { term: "Mention", trans: "mencionar" },
                        { term: "Move", trans: "mudar-se / mover" },
                        { term: "Need", trans: "precisar" },
                        { term: "Neglect", trans: "negligenciar" },
                        { term: "Notice", trans: "notar" },
                        { term: "Offer", trans: "oferecer" },
                        { term: "Overcome", trans: "superar" },
                        { term: "Pass", trans: "passar" },
                        { term: "Praise", trans: "elogiar" },
                        { term: "Promote", trans: "promover" },
                        { term: "Recognize", trans: "reconhecer" },
                        { term: "Reconcile", trans: "reconciliar" },
                        { term: "Remain", trans: "permanecer" },
                        { term: "Respect", trans: "respeitar" },
                        { term: "See", trans: "ver" },
                        { term: "Seek", trans: "buscar" },
                        { term: "Separate", trans: "separar" },
                        { term: "Share", trans: "compartilhar" },
                        { term: "Show", trans: "mostrar" },
                        { term: "Sigh", trans: "suspirar" },
                        { term: "Speak", trans: "falar" },
                        { term: "Stand", trans: "estar em pé / suportar" },
                        { term: "Stay", trans: "ficar" },
                        { term: "Stimulate", trans: "estimular" },
                        { term: "Stop", trans: "parar" },
                        { term: "Succeed", trans: "ter sucesso" },
                        { term: "Suggest", trans: "sugerir" },
                        { term: "Support", trans: "apoiar" },
                        { term: "Think", trans: "pensar" },
                        { term: "Touch upon", trans: "tocar em (assunto)" },
                        { term: "Travel", trans: "viajar" },
                        { term: "Try", trans: "tentar" },
                        { term: "Turn", trans: "virar / tornar-se" },
                        { term: "Understand", trans: "entender" },
                        { term: "Value", trans: "valorizar" },
                        { term: "Welcome", trans: "acolher / dar as boas-vindas" },
                        { term: "Work", trans: "trabalhar" }
                    ]
                },
                {
                    title: "Identity & Society",
                    audio: "TTS: Difference. Diversity. Respect. Empathy. Ethnicity. Identity. Individual. Way of life. Wheelchair.",
                    items: [
                        { term: "Difference", trans: "diferença" },
                        { term: "Diversity", trans: "diversidade" },
                        { term: "Respect", trans: "respeito" },
                        { term: "Empathy", trans: "empatia" },
                        { term: "Ethnicity", trans: "etnia" },
                        { term: "Identity", trans: "identidade" },
                        { term: "Individual", trans: "indivíduo" },
                        { term: "Way of life", trans: "estilo de vida" },
                        { term: "Wheelchair", trans: "cadeira de rodas" }
                    ]
                },
                {
                    title: "Positive Concepts",
                    audio: "TTS: Acceptance. Advocate. Inclusion. Inclusive. Equality. Resilience. Optimism. Reconciliation.",
                    items: [
                        { term: "Acceptance", trans: "aceitação" },
                        { term: "Advocate", trans: "defensor(a)" },
                        { term: "Inclusion", trans: "inclusão" },
                        { term: "Inclusive", trans: "inclusivo(a)" },
                        { term: "Equality", trans: "igualdade" },
                        { term: "Resilience", trans: "resiliência" },
                        { term: "Optimism", trans: "otimismo" },
                        { term: "Reconciliation", trans: "reconciliação" }
                    ]
                },
                {
                    title: "Challenges & Negatives",
                    audio: "TTS: Prejudice. Stereotype. Discrimination. Racism. Racist. Ableism. Ableist. Xenophobia. Intolerance. Hatred. Segregation. Microaggression.",
                    items: [
                        { term: "Prejudice", trans: "preconceito" },
                        { term: "Stereotype", trans: "estereótipo" },
                        { term: "Discrimination", trans: "discriminação" },
                        { term: "Racism / Racist", trans: "racismo / racista" },
                        { term: "Ableism / Ableist", trans: "capacitismo / capacitista" },
                        { term: "Xenophobia", trans: "xenofobia" },
                        { term: "Intolerance", trans: "intolerância" },
                        { term: "Hatred", trans: "ódio" },
                        { term: "Segregation", trans: "segregação" },
                        { term: "Microaggression", trans: "microagressão" }
                    ]
                },
                {
                    title: "False Cognates & Phrases",
                    audio: "TTS: Sensible. Actually. Eventually. Support. Library. Parents. Fabric. Break down barriers. As important as. Worse than. The kindest person. More inclusive than. Make up for discrimination. A welcoming environment. Points of view. The day before. A few people.",
                    items: [
                        { term: "Sensible", trans: "sensato / razoável (não sensível)" },
                        { term: "Actually", trans: "na verdade / realmente (não atualmente)" },
                        { term: "Eventually", trans: "finalmente / por fim (não eventualmente)" },
                        { term: "Support", trans: "apoiar (não suportar)" },
                        { term: "Library", trans: "biblioteca (não livraria)" },
                        { term: "Parents", trans: "pais (não parentes)" },
                        { term: "Fabric", trans: "tecido (não fábrica)" },
                        { term: "Break down barriers", trans: "romper barreiras" },
                        { term: "As important as", trans: "tão importante quanto" },
                        { term: "Worse than", trans: "pior do que" },
                        { term: "The kindest person", trans: "a pessoa mais gentil" },
                        { term: "More inclusive than", trans: "mais inclusivo do que" },
                        { term: "Make up for discrimination", trans: "compensar pela discriminação" },
                        { term: "A welcoming environment", trans: "um ambiente acolhedor" },
                        { term: "Points of view", trans: "pontos de vista" },
                        { term: "The day before", trans: "o dia anterior" },
                        { term: "A few people", trans: "algumas pessoas" }

                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                // --- PART 4.1: STEP 2B - VERBS A-L (EXHAUSTIVE) ---
{
    title: "Verbs A-L (Full List)",
    audio: "TTS: We must accept our differences. I agree with your point. We should avoid harmful stereotypes. I believe everyone deserves a chance. Education helps to break down barriers. They managed to break through the silence. Prejudice can break up a community. Let's build a more inclusive world. She campaigned for girls' rights. You should challenge unfair comments. Small actions can change the environment. Don't compare your life to others. We must compensate for past injustices. Different cultures constitute our nation. We want to create a welcoming space. Every human being deserves respect. What can we do to stop ableism? She endured many hardships to succeed. I feel happy when everyone is included. You can find great info in the library. We need to focus on empathy today. Give others the respect you want to receive. I heard a very inclusive speech yesterday. Friends help each other get smarter. Her resilience inspires millions. He invented a new way to help. Don't judge a person by appearance. I know the importance of diversity. We laughed together at the joke. Intolerance can lead to segregation. We learn new things every day. I want to live in a fair society.",
    items: [
        { term: "Accept", sent: "We must accept our differences to live in peace.", trans: "<span style='color:#0077b6'>Devemos aceitar nossas diferenças para viver em paz.</span>" },
        { term: "Agree", sent: "I agree with your point about equality.", trans: "<span style='color:#0077b6'>Eu concordo com seu ponto sobre igualdade.</span>" },
        { term: "Avoid", sent: "We should avoid using harmful stereotypes.", trans: "<span style='color:#0077b6'>Devemos evitar o uso de estereótipos prejudiciais.</span>" },
        { term: "Believe", sent: "I believe that everyone deserves a chance.", trans: "<span style='color:#0077b6'>Eu acredito que todos merecem uma chance.</span>" },
        { term: "Break down", sent: "Education helps to break down social barriers.", trans: "<span style='color:#0077b6'>A educação ajuda a derrubar barreiras sociais.</span>" },
        { term: "Break through", sent: "They managed to break through the silence.", trans: "<span style='color:#0077b6'>Eles conseguiram romper o silêncio.</span>" },
        { term: "Break up", sent: "Prejudice can break up a strong community.", trans: "<span style='color:#0077b6'>O preconceito pode separar uma comunidade forte.</span>" },
        { term: "Build", sent: "Let's build a more inclusive world.", trans: "<span style='color:#0077b6'>Vamos construir um mundo mais inclusivo.</span>" },
        { term: "Campaign", sent: "She campaigned for girls' rights for years.", trans: "<span style='color:#0077b6'>Ela fez campanha pelos direitos das meninas por anos.</span>" },
        { term: "Challenge", sent: "You should challenge unfair comments.", trans: "<span style='color:#0077b6'>Você deve desafiar comentários injustos.</span>" },
        { term: "Change", sent: "Small actions can change the environment.", trans: "<span style='color:#0077b6'>Pequenas ações podem mudar o ambiente.</span>" },
        { term: "Compare", sent: "Don't compare your life to social media profiles.", trans: "<span style='color:#0077b6'>Não compare sua vida com perfis de redes sociais.</span>" },
        { term: "Compensate", sent: "We must compensate for past injustices.", trans: "<span style='color:#0077b6'>Devemos compensar as injustiças do passado.</span>" },
        { term: "Constitute", sent: "Different cultures constitute our nation.", trans: "<span style='color:#0077b6'>Diferentes culturas constituem nossa nação.</span>" },
        { term: "Create", sent: "We want to create a welcoming space.", trans: "<span style='color:#0077b6'>Queremos criar um espaço acolhedor.</span>" },
        { term: "Deserve", sent: "Every human being deserves respect.", trans: "<span style='color:#0077b6'>Todo ser humano merece respeito.</span>" },
        { term: "Do", sent: "What can we do to stop ableism?", trans: "<span style='color:#0077b6'>O que podemos fazer para parar o capacitismo?</span>" },
        { term: "Endure", sent: "She endured many hardships to succeed.", trans: "<span style='color:#0077b6'>Ela suportou muitas dificuldades para ter sucesso.</span>" },
        { term: "Feel", sent: "I feel happy when everyone is included.", trans: "<span style='color:#0077b6'>Sinto-me feliz quando todos estão incluídos.</span>" },
        { term: "Find", sent: "Did you find a solution for the problem?", trans: "<span style='color:#0077b6'>Você encontrou uma solução para o problema?</span>" },
        { term: "Focus on", sent: "We need to focus on empathy today.", trans: "<span style='color:#0077b6'>Precisamos focar na empatia hoje.</span>" },
        { term: "Give", sent: "Give others the respect you want to receive.", trans: "<span style='color:#0077b6'>Dê aos outros o respeito que você deseja receber.</span>" },
        { term: "Hear", sent: "I heard a very inclusive speech yesterday.", trans: "<span style='color:#0077b6'>Ouvi um discurso muito inclusivo ontem.</span>" },
        { term: "Help", sent: "Can you help me organize the fair?", trans: "<span style='color:#0077b6'>Você pode me ajudar a organizar a feira?</span>" },
        { term: "Inspire", sent: "Her resilience inspires millions of people.", trans: "<span style='color:#0077b6'>A resiliência dela inspira milhões de pessoas.</span>" },
        { term: "Invent", sent: "He invented a new way to help the community.", trans: "<span style='color:#0077b6'>Ele inventou uma nova maneira de ajudar a comunidade.</span>" },
        { term: "Judge", sent: "Don't judge a person by their appearance.", trans: "<span style='color:#0077b6'>Não julgue uma pessoa pela aparência dela.</span>" },
        { term: "Know", sent: "I know the importance of diversity.", trans: "<span style='color:#0077b6'>Eu sei a importância da diversidade.</span>" },
        { term: "Laugh", sent: "We laughed together at the funny joke.", trans: "<span style='color:#0077b6'>Rimos juntos da piada engraçada.</span>" },
        { term: "Lead to", sent: "Intolerance can lead to segregation.", trans: "<span style='color:#0077b6'>A intolerância pode levar à segregação.</span>" },
        { term: "Learn", sent: "We learned about different ethnicities.", trans: "<span style='color:#0077b6'>Aprendemos sobre diferentes etnias.</span>" },
        { term: "Live", sent: "I want to live in a fair society.", trans: "<span style='color:#0077b6'>Eu quero viver em uma sociedade justa.</span>" }
    ]
},
                // --- PART 4.2: STEP 2B - VERBS M-W (EXHAUSTIVE) ---
{
    title: "Verbs M-W (Full List)",
    audio: "TTS: Let's make a positive impact today. Never make fun of someone's accent. They argued, but they made up quickly. I want to make up for my late arrival. What does inclusion mean to you? Celine mentioned a study group earlier. Challenges motivate me to work harder. Exercise helps you move and stay healthy. We need more empathetic leaders. Never neglect your mental health. I noticed he was feeling excluded. Always offer support to your friends. She overcame many obstacles in life. If you focus, you will pass the test. Mrs. Canales praised Albert's progress. You must practice so that you can succeed. We should promote respect at school. Celine loves to read psychology books. It’s important to recognize our privileges. The groups decided to reconcile. He remained optimistic during the crisis. You must respect everyone's way of life. I see diversity as a great strength. We shouldn't separate people by background. Please share your point of view with us. Show empathy to those who are suffering. He sighed because he was tired of waiting. We need to speak up against racism. We must stand together for justice. Please stay calm during the discussion. We need to stop the microaggressions. I need to study for my final grade. You will succeed if you are persistent. I suggest we work on our project together. I support the fight for gender equality. I think empathy is the most vital trait. We should try to understand others. I understand why inclusion is important. We value every individual in this team. I want to get smarter in math. We welcome new students with a smile. We work hard on our school project.",
    items: [
        { term: "Make", sent: "Let's make a positive impact today.", trans: "<span style='color:#0077b6'>Vamos causar um impacto positivo hoje.</span>" },
        { term: "Make fun of", sent: "Never make fun of someone's accent.", trans: "<span style='color:#0077b6'>Nunca zombe do sotaque de alguém.</span>" },
        { term: "Make up", sent: "They argued, but they made up quickly.", trans: "<span style='color:#0077b6'>Eles discutiram, mas fizeram as pazes rapidamente.</span>" },
        { term: "Make up for", sent: "I want to make up for my late arrival.", trans: "<span style='color:#0077b6'>Eu quero compensar pelo meu atraso.</span>" },
        { term: "Mean", sent: "What does inclusion mean to you?", trans: "<span style='color:#0077b6'>O que inclusão significa para você?</span>" },
        { term: "Mention", sent: "Celine mentioned a study group earlier.", trans: "<span style='color:#0077b6'>Celine mencionou um grupo de estudos mais cedo.</span>" },
        { term: "Motivate", sent: "Challenges motivate me to work harder.", trans: "<span style='color:#0077b6'>Desafios me motivam a trabalhar mais duro.</span>" },
        { term: "Move", sent: "Exercise helps you move and stay healthy.", trans: "<span style='color:#0077b6'>O exercício ajuda você a se mexer e a se manter saudável.</span>" },
        { term: "Need", sent: "We need more empathetic leaders.", trans: "<span style='color:#0077b6'>Precisamos de mais líderes empáticos.</span>" },
        { term: "Neglect", sent: "Never neglect your mental health.", trans: "<span style='color:#0077b6'>Nunca negligencie sua saúde mental.</span>" },
        { term: "Notice", sent: "I noticed he was feeling excluded.", trans: "<span style='color:#0077b6'>Eu notei que ele estava se sentindo excluído.</span>" },
        { term: "Offer", sent: "Always offer support to your friends.", trans: "<span style='color:#0077b6'>Sempre ofereça apoio aos seus amigos.</span>" },
        { term: "Overcome", sent: "She overcame many obstacles in life.", trans: "<span style='color:#0077b6'>Ela superou muitos obstáculos na vida.</span>" },
        { term: "Pass", sent: "If you focus, you will pass the test.", trans: "<span style='color:#0077b6'>Se você se focar, você passará no teste.</span>" },
        { term: "Praise", sent: "Mrs. Canales praised Albert's progress.", trans: "<span style='color:#0077b6'>A Sra. Canales elogiou o progresso do Albert.</span>" },
        { term: "Practice", sent: "You must practice so that you can succeed.", trans: "<span style='color:#0077b6'>Você deve praticar para que possa ter sucesso.</span>" },
        { term: "Promote", sent: "We should promote respect at school.", trans: "<span style='color:#0077b6'>Devemos promover o respeito na escola.</span>" },
        { term: "Read", sent: "Celine loves to read psychology books.", trans: "<span style='color:#0077b6'>Celine adora ler livros de psicologia.</span>" },
        { term: "Recognize", sent: "It’s important to recognize our privileges.", trans: "<span style='color:#0077b6'>É importante reconhecer nossos privilégios.</span>" },
        { term: "Reconcile", sent: "The groups decided to reconcile.", trans: "<span style='color:#0077b6'>Os grupos decidiram se reconciliar.</span>" },
        { term: "Remain", sent: "He remained optimistic during the crisis.", trans: "<span style='color:#0077b6'>Ele permaneceu otimista durante a crise.</span>" },
        { term: "Respect", sent: "You must respect everyone's way of life.", trans: "<span style='color:#0077b6'>Você deve respeitar o estilo de vida de todos.</span>" },
        { term: "See", sent: "I see diversity as a great strength.", trans: "<span style='color:#0077b6'>Eu vejo a diversidade como uma grande força.</span>" },
        { term: "Separate", sent: "We shouldn't separate people by background.", trans: "<span style='color:#0077b6'>Não devemos separar as pessoas por sua origem.</span>" },
        { term: "Share", sent: "Please share your point of view with us.", trans: "<span style='color:#0077b6'>Por favor, compartilhe seu ponto de vista conosco.</span>" },
        { term: "Show", sent: "Show empathy to those who are suffering.", trans: "<span style='color:#0077b6'>Mostre empatia por aqueles que estão sofrendo.</span>" },
        { term: "Sigh", sent: "He sighed because he was tired of waiting.", trans: "<span style='color:#0077b6'>Ele suspirou porque estava cansado de esperar.</span>" },
        { term: "Speak", sent: "We need to speak up against racism.", trans: "<span style='color:#0077b6'>Precisamos falar contra o racismo.</span>" },
        { term: "Stand", sent: "We must stand together for justice.", trans: "<span style='color:#0077b6'>Devemos estar juntos pela justiça.</span>" },
        { term: "Stay", sent: "Please stay calm during the discussion.", trans: "<span style='color:#0077b6'>Por favor, mantenha a calma durante a discussão.</span>" },
        { term: "Stop", sent: "We need to stop the microaggressions.", trans: "<span style='color:#0077b6'>Precisamos parar as microagressões.</span>" },
        { term: "Study", sent: "I need to study for my final grade.", trans: "<span style='color:#0077b6'>Eu preciso estudar para minha nota final.</span>" },
        { term: "Succeed", sent: "You will succeed if you are persistent.", trans: "<span style='color:#0077b6'>Você terá sucesso se for persistente.</span>" },
        { term: "Suggest", sent: "I suggest we work on our project together.", trans: "<span style='color:#0077b6'>Eu sugiro que trabalhemos em nosso projeto juntos.</span>" },
        { term: "Support", sent: "I support the fight for gender equality.", trans: "<span style='color:#0077b6'>Eu apoio a luta pela igualdade de gênero.</span>" },
        { term: "Think", sent: "I think empathy is the most vital trait.", trans: "<span style='color:#0077b6'>Acho que a empatia é a característica mais vital.</span>" },
        { term: "Try", sent: "We should try to understand others.", trans: "<span style='color:#0077b6'>Devemos tentar entender os outros.</span>" },
        { term: "Understand", sent: "I understand why inclusion is important.", trans: "<span style='color:#0077b6'>Eu entendo por que a inclusão é importante.</span>" },
        { term: "Value", sent: "We value every individual in this team.", trans: "<span style='color:#0077b6'>Valorizamos cada indivíduo nesta equipe.</span>" },
        { term: "Want", sent: "I want to get smarter in math.", trans: "<span style='color:#0077b6'>Eu quero ficar mais inteligente em matemática.</span>" },
        { term: "Welcome", sent: "We welcome new students with a smile.", trans: "<span style='color:#0077b6'>Damos as boas-vindas aos novos alunos com um sorriso.</span>" },
        { term: "Work", sent: "We work hard on our school project.", trans: "<span style='color:#0077b6'>Trabalhamos duro em nosso projeto escolar.</span>" }
    ]
},
                // --- PART 4.3: STEP 2B - CONCEPTS, CHALLENGES, & TRICKY WORDS (EXHAUSTIVE) ---
{
    title: "Identity & Positive Concepts",
    audio: "TTS: Diversity makes our culture much richer. Empathy is the ability to share feelings. Your identity is unique to you. Respect is a fundamental human right. Gender equality is a global goal. Inclusion means everyone feels welcome. She showed great resilience after the fall. Optimism helps us face difficult times. We value the difference between cultures. People of every ethnicity are welcome. Treat every individual with kindness. We respect your way of life. The school installed a ramp for wheelchairs. Acceptance is the first step toward peace. Malala is a famous advocate for education. The groups worked toward reconciliation.",
    items: [
        { term: "Diversity", sent: "Diversity makes our culture much richer.", trans: "<span style='color:#0077b6'>A diversidade torna nossa cultura muito mais rica.</span>" },
        { term: "Empathy", sent: "Empathy is the ability to share feelings.", trans: "<span style='color:#0077b6'>Empatia é a habilidade de compartilhar sentimentos.</span>" },
        { term: "Identity", sent: "Your identity is unique to you.", trans: "<span style='color:#0077b6'>Sua identidade é única para você.</span>" },
        { term: "Respect", sent: "Respect is a fundamental human right.", trans: "<span style='color:#0077b6'>O respeito é um direito humano fundamental.</span>" },
        { term: "Equality", sent: "Gender equality is a global goal.", trans: "<span style='color:#0077b6'>Igualdade de gênero é uma meta global.</span>" },
        { term: "Inclusion", sent: "Inclusion means everyone feels welcome.", trans: "<span style='color:#0077b6'>Inclusão significa que todos se sentem bem-vindos.</span>" },
        { term: "Resilience", sent: "She showed great resilience after the fall.", trans: "<span style='color:#0077b6'>Ela mostrou grande resiliência após a queda.</span>" },
        { term: "Optimism", sent: "Optimism helps us face difficult times.", trans: "<span style='color:#0077b6'>O otimismo nos ajuda a enfrentar tempos difíceis.</span>" }
    ]
},
{
    title: "Challenges & Negatives",
    audio: "TTS: We must fight against prejudice every day. A stereotype is an unfair fixed idea. Discrimination at work is illegal. Racism is a serious form of hatred. Ableism affects people with disabilities. Xenophobia is the fear of foreigners. Intolerance can destroy a community. Love is much stronger than hatred. The fence felt like a wall of segregation. A subtle insult is often a microaggression.",
    items: [
        { term: "Prejudice", sent: "We must fight against prejudice every day.", trans: "<span style='color:#0077b6'>Devemos lutar contra o preconceito todos os dias.</span>" },
        { term: "Stereotype", sent: "A stereotype is an unfair fixed idea.", trans: "<span style='color:#0077b6'>Um estereótipo é uma ideia fixa injusta.</span>" },
        { term: "Discrimination", sent: "Discrimination at work is illegal.", trans: "<span style='color:#0077b6'>Discriminação no trabalho é ilegal.</span>" },
        { term: "Racism", sent: "Racism is a serious form of hatred.", trans: "<span style='color:#0077b6'>O racismo é uma forma séria de ódio.</span>" },
        { term: "Ableism", sent: "Ableism affects people with disabilities.", trans: "<span style='color:#0077b6'>O capacitismo afeta pessoas com deficiências.</span>" },
        { term: "Xenophobia", sent: "Xenophobia is the fear of foreigners.", trans: "<span style='color:#0077b6'>Xenofobia é o medo de estrangeiros.</span>" },
        { term: "Intolerance", sent: "Intolerance can destroy a community.", trans: "<span style='color:#0077b6'>A intolerância pode destruir uma comunidade.</span>" },
        { term: "Segregation", sent: "The fence felt like a wall of segregation.", trans: "<span style='color:#0077b6'>A cerca parecia um muro de segregação.</span>" },
        { term: "Microaggression", sent: "A subtle insult is often a microaggression.", trans: "<span style='color:#0077b6'>Um insulto sutil é muitas vezes uma microagressão.</span>" }
    ]
},
{
    title: "Tricky Words & Phrases",
    audio: "TTS: Actually, I prefer the blue t-shirt. They eventually finished the long project. Choosing to cycle was a sensible decision. I am going to the library to study. My parents are coming to the meeting. This shirt is made of cotton fabric. Education helps to break down barriers. Diversity is as important as respect. Racism is worse than simple rudeness. He is the kindest person I know. We must make up for past discrimination. Let's look at different points of view.",
    items: [
        { term: "Actually", sent: "Actually, I prefer the blue t-shirt.", trans: "<span style='color:#0077b6'>Na verdade, eu prefiro a camiseta azul.</span>" },
        { term: "Eventually", sent: "They eventually finished the long project.", trans: "<span style='color:#0077b6'>Eles finalmente terminaram o longo projeto.</span>" },
        { term: "Sensible", sent: "Choosing to cycle was a sensible decision.", trans: "<span style='color:#0077b6'>Escolher andar de bicicleta foi uma decisão sensata.</span>" },
        { term: "Library", sent: "I'm going to the library to study.", trans: "<span style='color:#0077b6'>Vou à biblioteca para estudar.</span>" },
        { term: "Parents", sent: "My parents are coming to the meeting.", trans: "<span style='color:#0077b6'>Meus pais virão à reunião.</span>" },
        { term: "Fabric", sent: "This shirt is made of cotton fabric.", trans: "<span style='color:#0077b6'>Esta camisa é feita de tecido de algodão.</span>" },
        { term: "Break down barriers", sent: "Education helps to break down barriers.", trans: "<span style='color:#0077b6'>A educação ajuda a romper barreiras.</span>" },
        { term: "As important as", sent: "Diversity is as important as respect.", trans: "<span style='color:#0077b6'>A diversidade é tão importante quanto o respeito.</span>" },
        { term: "Worse than", sent: "Racism is worse than simple rudeness.", trans: "<span style='color:#0077b6'>O racismo é pior do que a simples grosseria.</span>" },
        { term: "Make up for", sent: "We must make up for past discrimination.", trans: "<span style='color:#0077b6'>Devemos compensar pela discriminação passada.</span>" },
        { term: "Points of view", sent: "Let's look at different points of view.", trans: "<span style='color:#0077b6'>Vamos olhar para diferentes pontos de vista.</span>" }
    ]
}
            ],

            // 2C: Practice Drills (Tabbed - Part 5.1)
            drillGroups: [
                {
                    title: "Verbs A-L",
                    drills: [
                        { q: "We must _______ our differences to live in a peaceful society.", options: [{t: "accept", c: true}, {t: "avoid", c: false}, {t: "build", c: false}, {t: "ignore", c: false}], type: "mcq" },
                        { q: "I _______ with your point about equality and human rights.", options: [{t: "agree", c: true}, {t: "judge", c: false}, {t: "laugh", c: false}, {t: "face", c: false}], type: "mcq" },
                        { q: "It is better to _______ using harmful stereotypes when meeting new people.", options: [{t: "accept", c: false}, {t: "avoid", c: true}, {t: "learn", c: false}, {t: "hear", c: false}], type: "mcq" },
                        { q: "I _______ that every person has a hidden talent.", options: [{t: "believe", c: true}, {t: "break up", c: false}, {t: "find", c: false}, {t: "do", c: false}], type: "mcq" },
                        { q: "Education helps us _______ the walls of prejudice.", options: [{t: "break up", c: false}, {t: "break down", c: true}, {t: "build", c: false}, {t: "change", c: false}], type: "mcq" },
                        { q: "The protesters managed to _______ the barrier of silence.", options: [{t: "break up", c: false}, {t: "break down", c: false}, {t: "break through", c: true}, {t: "build", c: false}], type: "mcq" },
                        { q: "Intolerance and hatred can _______ a strong community.", options: [{t: "break up", c: true}, {t: "build", c: false}, {t: "accept", c: false}, {t: "find", c: false}], type: "mcq" },
                        { q: "Let's _______ a more inclusive world for our children.", options: [{t: "build", c: true}, {t: "change", c: false}, {t: "do", c: false}, {t: "hear", c: false}], type: "mcq" },
                        { q: "Malala _______ for girls' right to education for many years.", options: [{t: "campaign", c: false}, {t: "campaigned", c: true}, {t: "changed", c: false}, {t: "judged", c: false}], type: "mcq" },
                        { q: "You should _______ unfair comments whenever you hear them.", options: [{t: "accept", c: false}, {t: "agree", c: false}, {t: "challenge", c: true}, {t: "find", c: false}], type: "mcq" },
                        { q: "Small daily actions can _______ the environment of our school.", options: [{t: "change", c: true}, {t: "endure", c: false}, {t: "hear", c: false}, {t: "laugh", c: false}], type: "mcq" },
                        { q: "Do not _______ your potential to others; you are unique.", options: [{t: "compare", c: true}, {t: "agree", c: false}, {t: "invent", c: false}, {t: "live", c: false}], type: "mcq" },
                        { q: "The company must _______ the victims for the past discrimination.", options: [{t: "constitute", c: false}, {t: "compensate", c: true}, {t: "create", c: false}, {t: "give", c: false}], type: "mcq" },
                        { q: "People of many different backgrounds _______ our great nation.", options: [{t: "constitute", c: true}, {t: "deserve", c: false}, {t: "find", c: false}, {t: "help", c: false}], type: "mcq" },
                        { q: "We want to _______ a welcoming space for all students.", options: [{t: "create", c: true}, {t: "do", c: false}, {t: "invent", c: false}, {t: "laugh", c: false}], type: "mcq" },
                        { q: "Every human being _______ respect and kindness.", options: [{t: "deserves", c: true}, {t: "does", c: false}, {t: "hears", c: false}, {t: "lives", c: false}], type: "mcq" },
                        { q: "What can we _______ to stop ableism in our community?", options: [{t: "do", c: true}, {t: "make", c: false}, {t: "feel", c: false}, {t: "hear", c: false}], type: "mcq" },
                        { q: "She _______ many hardships before she finally succeeded.", options: [{t: "endured", c: true}, {t: "changed", c: false}, {t: "gave", c: false}, {t: "lived", c: false}], type: "mcq" },
                        { q: "I _______ very happy when everyone is included in the group.", options: [{t: "feel", c: true}, {t: "find", c: false}, {t: "hear", c: false}, {t: "judge", c: false}], type: "mcq" },
                        { q: "Did you _______ a solution for the logical puzzle?", options: [{t: "find", c: true}, {t: "know", c: false}, {t: "do", c: false}, {t: "hear", c: false}], type: "mcq" },
                        { q: "We need to _______ on empathy and respect today.", options: [{t: "focus", c: true}, {t: "find", c: false}, {t: "laugh", c: false}, {t: "live", c: false}], type: "mcq" },
                        { q: "Always _______ others the respect you want to receive yourself.", options: [{t: "give", c: true}, {t: "know", c: false}, {t: "find", c: false}, {t: "hear", c: false}], type: "mcq" },
                        { q: "I _______ a very inclusive speech at the conference yesterday.", options: [{t: "heard", c: true}, {t: "knew", c: false}, {t: "lived", c: false}, {t: "found", c: false}], type: "mcq" },
                        { q: "In a diverse school, friends _______ each other to get smarter.", options: [{t: "help", c: true}, {t: "judge", c: false}, {t: "ignore", c: false}, {t: "find", c: false}], type: "mcq" },
                        { q: "Her resilience in the face of adversity _______ millions of people.", options: [{t: "inspires", c: true}, {t: "laughs", c: false}, {t: "hears", c: false}, {t: "finds", c: false}], type: "mcq" },
                        { q: "He _______ a new way to help the elderly in his community.", options: [{t: "invented", c: true}, {t: "judged", c: false}, {t: "found", c: false}, {t: "lived", c: false}], type: "mcq" },
                        { q: "Don't _______ a person until you have walked in their shoes.", options: [{t: "judge", c: true}, {t: "agree", c: false}, {t: "hear", c: false}, {t: "laugh", c: false}], type: "mcq" },
                        { q: "I _______ the importance of diversity in the workplace.", options: [{t: "know", c: true}, {t: "do", c: false}, {t: "find", c: false}, {t: "hear", c: false}], type: "mcq" },
                        { q: "We _______ together at the funny joke Celine told us.", options: [{t: "laughed", c: true}, {t: "hears", c: false}, {t: "found", c: false}, {t: "lived", c: false}], type: "mcq" },
                        { q: "Intolerance can easily _______ segregation and pain.", options: [{t: "lead to", c: true}, {t: "find", c: false}, {t: "give", c: false}, {t: "know", c: false}], type: "mcq" },
                        { q: "We _______ new things about different cultures every single day.", options: [{t: "learn", c: true}, {t: "live", c: false}, {t: "find", c: false}, {t: "hear", c: false}], type: "mcq" },
                        { q: "I want to _______ in a society where everyone is treated fairly.", options: [{t: "live", c: true}, {t: "do", c: false}, {t: "know", c: false}, {t: "hear", c: false}], type: "mcq" },
                        { q: "Celine _______ the study group during our last conversation.", options: [{t: "mentioned", c: true}, {t: "neglected", c: false}, {t: "heard", c: false}, {t: "found", c: false}], type: "mcq" },
                        { q: "Never _______ your education; it is your path to the future.", options: [{t: "neglect", c: true}, {t: "focus", c: false}, {t: "accept", c: false}, {t: "live", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs M-W",
                    drills: [
                        { q: "Let's _______ a positive impact on our community today.", options: [{t: "make", c: true}, {t: "mean", c: false}, {t: "move", c: false}, {t: "sigh", c: false}], type: "mcq" },
                        { q: "It is extremely disrespectful to _______ someone because of their accent.", options: [{t: "make fun of", c: true}, {t: "make up", c: false}, {t: "praise", c: false}, {t: "support", c: false}], type: "mcq" },
                        { q: "After the long argument about the project, the two friends finally _______.", options: [{t: "made up", c: true}, {t: "moved", c: false}, {t: "noticed", c: false}, {t: "sighed", c: false}], type: "mcq" },
                        { q: "We must work hard to _______ for the lack of integration in the past.", options: [{t: "make up for", c: true}, {t: "make up", c: false}, {t: "remain", c: false}, {t: "stay", c: false}], type: "mcq" },
                        { q: "What does the word 'empathy' _______ to you in this context?", options: [{t: "mean", c: true}, {t: "move", c: false}, {t: "show", c: false}, {t: "value", c: false}], type: "mcq" },
                        { q: "Physical activity helps you _______ your body and clear your mind.", options: [{t: "move", c: true}, {t: "mean", c: false}, {t: "offer", c: false}, {t: "stop", c: false}], type: "mcq" },
                        { q: "Our school _______ more empathetic leaders to combat prejudice.", options: [{t: "needs", c: true}, {t: "notices", c: false}, {t: "praises", c: false}, {t: "thinks", c: false}], type: "mcq" },
                        { q: "I _______ that some students were feeling left out during the break.", options: [{t: "noticed", c: true}, {t: "praisied", c: false}, {t: "respected", c: false}, {t: "stayed", c: false}], type: "mcq" },
                        { q: "We should always _______ support to those who face discrimination.", options: [{t: "offer", c: true}, {t: "omit", c: false}, {t: "sigh", c: false}, {t: "stand", c: false}], type: "mcq" },
                        { q: "Through resilience, we can _______ many obstacles in our lives.", options: [{t: "overcome", c: true}, {t: "offer", c: false}, {t: "promote", c: false}, {t: "separate", c: false}], type: "mcq" },
                        { q: "If you focus and study hard, you will certainly _______ the exam.", options: [{t: "pass", c: true}, {t: "praise", c: false}, {t: "show", c: false}, {t: "value", c: false}], type: "mcq" },
                        { q: "The principal _______ the students for their inclusive initiative.", options: [{t: "praised", c: true}, {t: "passed", c: false}, {t: "sighed", c: false}, {t: "wanted", c: false}], type: "mcq" },
                        { q: "The goal of this week is to _______ respect and diversity in every class.", options: [{t: "promote", c: true}, {t: "reconcile", c: false}, {t: "remain", c: false}, {t: "stop", c: false}], type: "mcq" },
                        { q: "We need to _______ our own privileges to understand others better.", options: [{t: "recognize", c: true}, {t: "respect", c: false}, {t: "see", c: false}, {t: "work", c: false}], type: "mcq" },
                        { q: "After the conflict, the two groups decided to _______ and work together.", options: [{t: "reconcile", c: true}, {t: "remain", c: false}, {t: "separate", c: false}, {t: "stop", c: false}], type: "mcq" },
                        { q: "Malala _______ optimistic even after facing incredible hardship.", options: [{t: "remained", c: true}, {t: "praisied", c: false}, {t: "sighed", c: false}, {t: "thought", c: false}], type: "mcq" },
                        { q: "You must _______ everyone's way of life, even if it's different from yours.", options: [{t: "respect", c: true}, {t: "separate", c: false}, {t: "show", c: false}, {t: "value", c: false}], type: "mcq" },
                        { q: "I _______ diversity as the greatest strength of our community.", options: [{t: "see", c: true}, {t: "speak", c: false}, {t: "stand", c: false}, {t: "stay", c: false}], type: "mcq" },
                        { q: "Resilient people always _______ their own path to success.", options: [{t: "seek", c: true}, {t: "show", c: false}, {t: "stop", c: false}, {t: "think", c: false}], type: "mcq" },
                        { q: "We should not _______ people based on their background or ethnicity.", options: [{t: "separate", c: true}, {t: "support", c: false}, {t: "understand", c: false}, {t: "value", c: false}], type: "mcq" },
                        { q: "Please _______ your points of view with the rest of the class.", options: [{t: "share", c: true}, {t: "speak", c: false}, {t: "stay", c: false}, {t: "try", c: false}], type: "mcq" },
                        { q: "Your actions _______ that you truly care about inclusion.", options: [{t: "show", c: true}, {t: "sigh", c: false}, {t: "stand", c: false}, {t: "work", c: false}], type: "mcq" },
                        { q: "He _______ deeply because he was tired of seeing so much injustice.", options: [{t: "sighed", c: true}, {t: "stayed", c: false}, {t: "thought", c: false}, {t: "wanted", c: false}], type: "mcq" },
                        { q: "We need to _______ up against racism and bullying whenever we see them.", options: [{t: "speak", c: true}, {t: "stand", c: false}, {t: "stay", c: false}, {t: "stop", c: false}], type: "mcq" },
                        { q: "In a democracy, we must _______ together for justice and equality.", options: [{t: "stand", c: true}, {t: "stay", c: false}, {t: "stop", c: false}, {t: "try", c: false}], type: "mcq" },
                        { q: "Please _______ calm while we discuss these sensitive topics.", options: [{t: "stay", c: true}, {t: "stop", c: false}, {t: "support", c: false}, {t: "think", c: false}], type: "mcq" },
                        { q: "If we want to create a fair school, we must _______ the microaggressions.", options: [{t: "stop", c: true}, {t: "stay", c: false}, {t: "support", c: false}, {t: "think", c: false}], type: "mcq" },
                        { q: "I fully _______ the fight for equal rights for all individuals.", options: [{t: "support", c: true}, {t: "see", c: false}, {t: "think", c: false}, {t: "work", c: false}], type: "mcq" },
                        { q: "I _______ that empathy is the most important trait a human can have.", options: [{t: "think", c: true}, {t: "try", c: false}, {t: "value", c: false}, {t: "work", c: false}], type: "mcq" },
                        { q: "You should _______ to understand others' feelings before judging them.", options: [{t: "try", c: true}, {t: "value", c: false}, {t: "welcome", c: false}, {t: "work", c: false}], type: "mcq" },
                        { q: "We must _______ the unique mind of every student in this classroom.", options: [{t: "value", c: true}, {t: "welcome", c: false}, {t: "work", c: false}, {t: "mean", c: false}], type: "mcq" },
                        { q: "We _______ new students with open arms and a friendly smile.", options: [{t: "welcome", c: true}, {t: "work", c: false}, {t: "mean", c: false}, {t: "move", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Identity & Positive Concepts",
                    drills: [
                        { q: "Our school's _______ makes our culture much richer and more interesting.", options: [{t: "diversity", c: true}, {t: "hatred", c: false}, {t: "segregation", c: false}, {t: "prejudice", c: false}], type: "mcq" },
                        { q: "We must value the _______ between cultures instead of fearing them.", options: [{t: "difference", c: true}, {t: "racism", c: false}, {t: "ableism", c: false}, {t: "intolerance", c: false}], type: "mcq" },
                        { q: "Showing _______ is a fundamental human right for every individual.", options: [{t: "respect", c: true}, {t: "hatred", c: false}, {t: "stereotypes", c: false}, {t: "xenophobia", c: false}], type: "mcq" },
                        { q: "_______ is the ability to understand and share the feelings of another person.", options: [{t: "Empathy", c: true}, {t: "Intelligence", c: false}, {t: "Identity", c: false}, {t: "Ethnicity", c: false}], type: "mcq" },
                        { q: "People of every _______ and background are welcome in this inclusive school.", options: [{t: "ethnicity", c: true}, {t: "wheelchair", c: false}, {t: "hatred", c: false}, {t: "intolerance", c: false}], type: "mcq" },
                        { q: "Your _______ is unique to you; it should never be a reason for exclusion.", options: [{t: "identity", c: true}, {t: "ethnicity", c: false}, {t: "resilience", c: false}, {t: "difference", c: false}], type: "mcq" },
                        { q: "It is important to get to know the _______ before judging a whole group.", options: [{t: "individual", c: true}, {t: "community", c: false}, {t: "ethnicity", c: false}, {t: "way of life", c: false}], type: "mcq" },
                        { q: "We must respect every student's _______, even if it is different from ours.", options: [{t: "way of life", c: true}, {t: "ethnicity", c: false}, {t: "resilience", c: false}, {t: "difference", c: false}], type: "mcq" },
                        { q: "The school installed a ramp to help students who use a _______.", options: [{t: "wheelchair", c: true}, {t: "way of life", c: false}, {t: "identity", c: false}, {t: "ethnicity", c: false}], type: "mcq" },
                        { q: "Malala's message of _______ is as important as the Global Goals.", options: [{t: "acceptance", c: true}, {t: "intolerance", c: false}, {t: "hatred", c: false}, {t: "segregation", c: false}], type: "mcq" },
                        { q: "An _______ is a person who speaks publicly to support a cause like education.", options: [{t: "advocate", c: true}, {t: "influencer", c: false}, {t: "individual", c: false}, {t: "expert", c: false}], type: "mcq" },
                        { q: "_______ means the practice of providing equal access to opportunities for all.", options: [{t: "Inclusion", c: true}, {t: "Prejudice", c: false}, {t: "Racism", c: false}, {t: "Xenophobia", c: false}], type: "mcq" },
                        { q: "A truly _______ society ensures that everyone has the same rights.", options: [{t: "inclusive", c: true}, {t: "biased", c: false}, {t: "passive", c: false}, {t: "negative", c: false}], type: "mcq" },
                        { q: "Gender _______ is a global goal that promotes fairness for men and women.", options: [{t: "equality", c: true}, {t: "discrimination", c: false}, {t: "prejudice", c: false}, {t: "hatred", c: false}], type: "mcq" },
                        { q: "Showing _______ after a difficult situation is a sign of great strength.", options: [{t: "resilience", c: true}, {t: "optimism", c: false}, {t: "apology", c: false}, {t: "hatred", c: false}], type: "mcq" },
                        { q: "_______ helps us look at the bright side and face difficult times.", options: [{t: "Optimism", c: true}, {t: "Resilience", c: false}, {t: "Intelligence", c: false}, {t: "Difference", c: false}], type: "mcq" },
                        { q: "After the conflict, the two groups worked toward _______ to restore peace.", options: [{t: "reconciliation", c: true}, {t: "discrimination", c: false}, {t: "segregation", c: false}, {t: "intolerance", c: false}], type: "mcq" },
                        { q: "Diversity in a classroom is as _______ as intelligence.", options: [{t: "crucial", c: true}, {t: "worse", c: false}, {t: "least", c: false}, {t: "bad", c: false}], type: "mcq" },
                        { q: "Empathy is the ability to _______ feelings with other people.", options: [{t: "share", c: true}, {t: "separate", c: false}, {t: "move", c: false}, {t: "sigh", c: false}], type: "mcq" },
                        { q: "Being _______ means you are hopeful and confident about the future.", options: [{t: "optimistic", c: true}, {t: "negative", c: false}, {t: "tired", c: false}, {t: "frustrated", c: false}], type: "mcq" },
                        { q: "Malala is one of the _______ women in history.", options: [{t: "bravest", c: true}, {t: "worst", c: false}, {t: "least", c: false}, {t: "weakest", c: false}], type: "mcq" },
                        { q: "Treating everyone fairly is the _______ of a just society.", options: [{t: "foundation", c: true}, {t: "tragedy", c: false}, {t: "setback", c: false}, {t: "hardship", c: false}], type: "mcq" },
                        { q: "Building a _______ environment helps everyone feel safe and valued.", options: [{t: "welcoming", c: true}, {t: "harmful", c: false}, {t: "exclusive", c: false}, {t: "difficult", c: false}], type: "mcq" },
                        { q: "When employees show empathy, they achieve _______ results together.", options: [{t: "better", c: true}, {t: "worse", c: false}, {t: "badder", c: false}, {t: "the worst", c: false}], type: "mcq" },
                        { q: "Integration is the _______ of segregation and isolation.", options: [{t: "opposite", c: true}, {t: "example", c: false}, {t: "result", c: false}, {t: "reason", c: false}], type: "mcq" },
                        { q: "A resilient person is someone who _______ after a fall or setback.", options: [{t: "bounces back", c: true}, {t: "gives up", c: false}, {t: "sighs", c: false}, {t: "remains silent", c: false}], type: "mcq" },
                        { q: "In a diverse group, everyone should have a _______ to speak.", options: [{t: "chance", c: true}, {t: "prejudice", c: false}, {t: "stereotype", c: false}, {t: "hardship", c: false}], type: "mcq" },
                        { q: "Empathy helps us recognize the _______ of every human being.", options: [{t: "value", c: true}, {t: "hatred", c: false}, {t: "intolerance", c: false}, {t: "segregation", c: false}], type: "mcq" },
                        { q: "Inclusion is not just a dream; it is a global _______.", options: [{t: "goal", c: true}, {t: "problem", c: false}, {t: "hardship", c: false}, {t: "tragedy", c: false}], type: "mcq" },
                        { q: "We must _______ to be the change we want to see in the world.", options: [{t: "strive", c: true}, {t: "fail", c: false}, {t: "complain", c: false}, {t: "ignore", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Challenges, Cognates & Phrases",
                    drills: [
                        { q: "A _______ is a fixed and often unfair idea about a specific group of people.", options: [{t: "stereotype", c: true}, {t: "resilience", c: false}, {t: "advocate", c: false}, {t: "reconciliation", c: false}], type: "mcq" },
                        { q: "Fighting against _______ means ensuring people with disabilities are treated fairly.", options: [{t: "ableism", c: true}, {t: "racism", c: false}, {t: "xenophobia", c: false}, {t: "intolerance", c: false}], type: "mcq" },
                        { q: "_______ is the unfair treatment of someone based on their ethnicity or background.", options: [{t: "Discrimination", c: true}, {t: "Empathy", c: false}, {t: "Inclusion", c: false}, {t: "Acceptance", c: false}], type: "mcq" },
                        { q: "Making a quiet, unkind comment about someone's culture is an example of a _______.", options: [{t: "microaggression", c: true}, {t: "breakthrough", c: false}, {t: "reconciliation", c: false}, {t: "partnership", c: false}], type: "mcq" },
                        { q: "Fear or dislike of people from other countries is known as _______.", options: [{t: "xenophobia", c: true}, {t: "racism", c: false}, {t: "prejudice", c: false}, {t: "ableism", c: false}], type: "mcq" },
                        { q: "The old metal fence felt like a wall of _______ in the neighborhood.", options: [{t: "segregation", c: true}, {t: "integration", c: false}, {t: "innovation", c: false}, {t: "diversity", c: false}], type: "mcq" },
                        { q: "_______ is an intense dislike or ill will towards a group or individual.", options: [{t: "Hatred", c: true}, {t: "Respect", c: false}, {t: "Empathy", c: false}, {t: "Optimism", c: false}], type: "mcq" },
                        { q: "Unwillingness to accept views or behaviors that differ from one's own is _______.", options: [{t: "intolerance", c: true}, {t: "acceptance", c: false}, {t: "resilience", c: false}, {t: "inclusion", c: false}], type: "mcq" },
                        { q: "A _______ is an unfair opinion formed without enough knowledge or facts.", options: [{t: "prejudice", c: true}, {t: "sensible", c: false}, {t: "support", c: false}, {t: "fact", c: false}], type: "mcq" },
                        { q: "We must combat _______ because it is a serious form of hatred directed at race.", options: [{t: "racism", c: true}, {t: "ableism", c: false}, {t: "optimism", c: false}, {t: "sensibility", c: false}], type: "mcq" },
                        { q: "My _______ (pais) always encourage me to be open-minded.", options: [{t: "parents", c: true}, {t: "relatives", c: false}, {t: "fabric", c: false}, {t: "library", c: false}], type: "mcq" },
                        { q: "_______ (Na verdade), I don't think that comment was intended to be mean.", options: [{t: "Actually", c: true}, {t: "Currently", c: false}, {t: "Eventually", c: false}, {t: "Finally", c: false}], type: "mcq" },
                        { q: "We need to be _______ (sensatos) and talk about our problems calmly.", options: [{t: "sensible", c: true}, {t: "sensitive", c: false}, {t: "emotional", c: false}, {t: "heroic", c: false}], type: "mcq" },
                        { q: "He went to the _______ (biblioteca) to research the civil rights movement.", options: [{t: "library", c: true}, {t: "bookstore", c: false}, {t: "factory", c: false}, {t: "parents", c: false}], type: "mcq" },
                        { q: "I will _______ (apoiar) your initiative because I believe in equality.", options: [{t: "support", c: true}, {t: "endure", c: false}, {t: "prejudice", c: false}, {t: "accept", c: false}], type: "mcq" },
                        { q: "They _______ (finalmente) finished the project after many difficulties.", options: [{t: "eventually", c: true}, {t: "actually", c: false}, {t: "presently", c: false}, {t: "sensibly", c: false}], type: "mcq" },
                        { q: "This shirt is made of a very comfortable cotton _______ (tecido).", options: [{t: "fabric", c: true}, {t: "factory", c: false}, {t: "material", c: false}, {t: "cloth", c: false}], type: "mcq" },
                        { q: "It is wrong to _______ people because of how they speak or dress.", options: [{t: "make fun of", c: true}, {t: "make up", c: false}, {t: "break up", c: false}, {t: "break through", c: false}], type: "mcq" },
                        { q: "We need to _______ for discrimination by creating fair policies.", options: [{t: "make up for", c: true}, {t: "make fun of", c: false}, {t: "break down", c: false}, {t: "make up", c: false}], type: "mcq" },
                        { q: "The new laws helped to _______ the social barriers in the city.", options: [{t: "break down", c: true}, {t: "make out", c: false}, {t: "break into", c: false}, {t: "make for", c: false}], type: "mcq" },
                        { q: "Equality is _______ justice in a democratic society.", options: [{t: "as important as", c: true}, {t: "worse than", c: false}, {t: "the least", c: false}, {t: "more inclusive", c: false}], type: "mcq" },
                        { q: "That was _______ I have ever heard! He is so empathetic.", options: [{t: "the kindest person", c: true}, {t: "the worst comment", c: false}, {t: "more inclusive than", c: false}, {t: "as important as", c: false}], type: "mcq" },
                        { q: "This new school project is _______ the one we had last year.", options: [{t: "more inclusive than", c: true}, {t: "the day before", c: false}, {t: "a few people", c: false}, {t: "as crucial as", c: false}], type: "mcq" },
                        { q: "Ignorance is _______ almost any other challenge we face.", options: [{t: "worse than", c: true}, {t: "as important as", c: false}, {t: "the kindest", c: false}, {t: "a few people", c: false}], type: "mcq" },
                        { q: "Our principal is working hard to create a _______ for everyone.", options: [{t: "welcoming environment", c: true}, {t: "long way to go", c: false}, {t: "points of view", c: false}, {t: "the day before", c: false}], type: "mcq" },
                        { q: "Let's share our different _______ with the rest of the class.", options: [{t: "points of view", c: true}, {t: "welcoming environments", c: false}, {t: "long ways to go", c: false}, {t: "the day before", c: false}], type: "mcq" },
                        { q: "We started the presentation _______ it actually began.", options: [{t: "the day before", c: true}, {t: "a few people", c: false}, {t: "worse than", c: false}, {t: "as important as", c: false}], type: "mcq" },
                        { q: "Only _______ in my class have experienced segregation.", options: [{t: "a few people", c: true}, {t: "the most", c: false}, {t: "actually", c: false}, {t: "sensible", c: false}], type: "mcq" },
                        { q: "We still have a _______ until we reach total equality.", options: [{t: "long way to go", c: true}, {t: "welcoming environment", c: false}, {t: "point of view", c: false}, {t: "day before", c: false}], type: "mcq" },
                        { q: "It's better to _______ with a joke before starting a hard discussion.", options: [{t: "break the ice", c: true}, {t: "break down", c: false}, {t: "make fun of", c: false}, {t: "make up", c: false}], type: "mcq" }
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
                    title: "Comparatives (Equality & Superiority)",
                    audio: "TTS: We use comparatives to compare two people, things, or ideas. Equality uses as, adjective, as. For superiority with short adjectives, add e r. For long adjectives, use more. For example: Empathy is as important as respect. Albert is braver than people think. Our project is more inclusive than yours.",
                    explanation: "We use comparatives to compare two people, things, or ideas.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos comparativos para comparar duas pessoas, coisas ou ideias.)</span>",
                    samples: [
                        { en: "<b>Equality (as + adj + as)</b>: Empathy is <b>as important as</b> respect.", pt: "<span style='color:#0077b6'>(A empatia é tão importante quanto o respeito.)</span>" },
                        { en: "<b>Superiority Short (adj + -er)</b>: Albert is <b>braver than</b> people think.", pt: "<span style='color:#0077b6'>(Albert é mais corajoso do que as pessoas pensam.)</span>" },
                        { en: "<b>Superiority Long (more + adj)</b>: Our project is <b>more inclusive than</b> yours.", pt: "<span style='color:#0077b6'>(Nosso projeto é mais inclusivo que o seu.)</span>" }
                    ]
                },
                {
                    title: "Comparatives (Irregular & Inferiority)",
                    audio: "TTS: Good and bad have special forms. Good becomes better, and bad becomes worse. To show inferiority, use less and than regardless of the adjective length. For example: Racism is worse than simple rudeness. This response was less empathetic than the last one.",
                    explanation: "Special forms for 'good' and 'bad', and how to show that something has 'less' of a quality.<br><br><span style='color:#0077b6; font-style:italic;'>(Formas especiais para 'bom' e 'mau', e como mostrar que algo tem 'menos' de uma qualidade.)</span>",
                    samples: [
                        { en: "<b>Irregular</b>: Racism is <b>worse than</b> simple rudeness.", pt: "<span style='color:#0077b6'>(O racismo é pior que a simples grosseria.)</span>" },
                        { en: "<b>Irregular</b>: A positive outlook is <b>better than</b> despair.", pt: "<span style='color:#0077b6'>(Uma perspectiva positiva é melhor que o desespero.)</span>" },
                        { en: "<b>Inferiority (less + adj + than)</b>: This response was <b>less empathetic than</b> the last one.", pt: "<span style='color:#0077b6'>(Esta resposta foi menos empática que a última.)</span>" }
                    ]
                },
                {
                    title: "Superlatives",
                    audio: "TTS: We use superlatives to compare one person or thing against a whole group. Short adjectives add e s t. Long adjectives use the most. Irregular forms are the best and the worst. For inferiority, use the least. For example: Malala is the bravest young advocate. He is the most understanding person I know. Discrimination is the worst form of intolerance.",
                    explanation: "We use superlatives to compare one person or thing against a whole group.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos superlativos para comparar uma pessoa ou coisa com um grupo inteiro.)</span>",
                    samples: [
                        { en: "<b>Short (the + adj + -est)</b>: Malala is <b>the bravest</b> young advocate.", pt: "<span style='color:#0077b6'>(Malala é a jovem defensora mais corajosa.)</span>" },
                        { en: "<b>Long (the most + adj)</b>: He is <b>the most understanding</b> person I know.", pt: "<span style='color:#0077b6'>(Ele é a pessoa mais compreensiva que eu conheço.)</span>" },
                        { en: "<b>Irregular</b>: Discrimination is <b>the worst</b> form of intolerance.", pt: "<span style='color:#0077b6'>(A discriminação é a pior forma de intolerância.)</span>" },
                        { en: "<b>Inferiority (the least + adj)</b>: This is <b>the least effective</b> solution.", pt: "<span style='color:#0077b6'>(Esta é a solução menos eficaz.)</span>" }
                    ]
                },
                {
                    title: "Adjective Order (OSASCOMP)",
                    audio: "TTS: When we use many adjectives together, they follow a specific order: Opinion, Size, Age, Shape, Color, Origin, Material, and Purpose. For example: A lovely small round gift or a beautiful long dark hair.",
                    explanation: "When we use many adjectives together, they follow a specific sequence: <b>O</b>pinion, <b>S</b>ize, <b>A</b>ge, <b>S</b>hape, <b>C</b>olor, <b>O</b>rigin, <b>M</b>aterial, <b>P</b>urpose.<br><br><span style='color:#0077b6; font-style:italic;'>(Quando usamos muitos adjetivos juntos, eles seguem uma sequência específica.)</span>",
                    samples: [
                        { en: "<b>Opinion-Size-Shape</b>: A <b>lovely small round</b> gift.", pt: "<span style='color:#0077b6'>(Um lindo e pequeno presente redondo.)</span>" },
                        { en: "<b>Opinion-Age-Origin</b>: A <b>beautiful nostalgic Brazilian</b> memory.", pt: "<span style='color:#0077b6'>(Uma bela e nostálgica memória brasileira.)</span>" },
                        { en: "<b>Opinion-Age-Material</b>: Those <b>ugly old metal</b> barriers.", pt: "<span style='color:#0077b6'>(Aquelas velhas e feias barreiras de metal.)</span>" },
                        { en: "<b>Color-Material-Purpose</b>: A <b>blue cotton school</b> uniform.", pt: "<span style='color:#0077b6'>(Um uniforme escolar de algodão azul.)</span>" }
                    ]
                }
            ],

            // 3B: Natural Examples (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Comparing Advocates (Comparatives)",
                    audio: "audio/em1-3-8/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Albert, I think Nelson Mandela’s impact was **greater than** most leaders'.", 
                            pt: "<span style='color:#0077b6'>(Albert, eu acho que o impacto de Nelson Mandela foi maior do que o da maioria dos líderes.)</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I agree. However, Malala’s message is **as powerful as** his for our generation.", 
                            pt: "<span style='color:#0077b6'>(Eu concordo. No entanto, a mensagem de Malala é tão poderosa quanto a dele para a nossa geração.)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: The Best Qualities (Superlatives)",
                    audio: "audio/em1-3-8/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Mrs. Canales", 
                            text: "Class, what is **the most important** trait for inclusion?", 
                            pt: "<span style='color:#0077b6'>(Classe, qual é a característica mais importante para a inclusão?)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "I believe kindness is **the best** way to start, even if it feels like **the least** difficult action.", 
                            pt: "<span style='color:#0077b6'>(Eu acredito que a gentileza é a melhor maneira de começar, mesmo que pareça a ação menos difícil.)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Describing a Friend (Adjective Order)",
                    audio: "audio/em1-3-8/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Did you see the new student? She has **beautiful long dark** hair.", 
                            pt: "<span style='color:#0077b6'>(Você viu a aluna nova? Ela tem um lindo cabelo longo e escuro.)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Yes! And she wears a **nice blue cotton** uniform. She seems very sensible.", 
                            pt: "<span style='color:#0077b6'>(Sim! E ela usa um belo uniforme de algodão azul. Ela parece ser muito sensata.)</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice (Exhaustive - 30 items)
            grammarDrillGroups: [
                {
                    title: "Comparatives",
                    drills: [
                        { q: "Fighting prejudice is _______ staying silent.", options: [{t: "as important", c: false}, {t: "more important than", c: true}, {t: "the most important", c: false}, {t: "important than", c: false}] },
                        { q: "My old school was _______ this one.", options: [{t: "less inclusive", c: false}, {t: "less inclusive than", c: true}, {t: "the least inclusive", c: false}, {t: "more inclusive", c: false}] },
                        { q: "Is diversity _______ equality?", options: [{t: "so valuable as", c: false}, {t: "as valuable as", c: true}, {t: "more valuable", c: false}, {t: "the most valuable", c: false}] },
                        { q: "Her English is getting _______ mine every day.", options: [{t: "gooder than", c: false}, {t: "better than", c: true}, {t: "the best", c: false}, {t: "more good than", c: false}] },
                        { q: "This microaggression is _______ the one from yesterday.", options: [{t: "worse than", c: true}, {t: "badder than", c: false}, {t: "the worst than", c: false}, {t: "more bad than", c: false}] },
                        { q: "A welcoming environment is _______ an exclusive one.", options: [{t: "more better than", c: false}, {t: "better than", c: true}, {t: "the best than", c: false}, {t: "as better as", c: false}] },
                        { q: "Is your new neighborhood _______ your old one?", options: [{t: "most diverse", c: false}, {t: "more diverse than", c: true}, {t: "as diverse than", c: false}, {t: "diverser than", c: false}] },
                        { q: "Showing empathy is _______ being indifferent.", options: [{t: "more crucial than", c: true}, {t: "the most crucial", c: false}, {t: "as crucial than", c: false}, {t: "crucialer than", c: false}] },
                        { q: "This task is _______ the first one we did.", options: [{t: "less difficult than", c: true}, {t: "least difficult than", c: false}, {t: "more difficult as", c: false}, {t: "as difficult than", c: false}] },
                        { q: "Education is _______ money for our future.", options: [{t: "as essential than", c: false}, {t: "the most essential", c: false}, {t: "more essential than", c: true}, {t: "essentialer than", c: false}] }
                    ]
                },
                {
                    title: "Superlatives",
                    drills: [
                        { q: "That was _______ comment in the whole discussion.", options: [{t: "less empathetic", c: false}, {t: "the least empathetic", c: true}, {t: "more empathetic than", c: false}, {t: "least empathetic", c: false}] },
                        { q: "He is _______ student in our community.", options: [{t: "the most brave", c: false}, {t: "the bravest", c: true}, {t: "braver than", c: false}, {t: "most brave", c: false}] },
                        { q: "Xenophobia is one of _______ challenges in the world.", options: [{t: "more difficult", c: false}, {t: "the most difficult", c: true}, {t: "difficulter than", c: false}, {t: "the difficulter", c: false}] },
                        { q: "Today was _______ day for our initiative!", options: [{t: "the goodest", c: false}, {t: "the best", c: true}, {t: "better than", c: false}, {t: "best", c: false}] },
                        { q: "Ignoring discrimination is _______ thing you can do.", options: [{t: "the worst", c: true}, {t: "worse than", c: false}, {t: "the baddest", c: false}, {t: "badder", c: false}] },
                        { q: "Malala is one of _______ women in history.", options: [{t: "the bravest", c: true}, {t: "the most brave", c: false}, {t: "braver than", c: false}, {t: "bravest", c: false}] },
                        { q: "What is _______ way to promote inclusion?", options: [{t: "the better", c: false}, {t: "the best", c: true}, {t: "better than", c: false}, {t: "best", c: false}] },
                        { q: "This is _______ problem we have faced this month.", options: [{t: "the least serious", c: true}, {t: "less serious than", c: false}, {t: "least serious", c: false}, {t: "the less serious", c: false}] },
                        { q: "She is _______ person I have ever met.", options: [{t: "the kindest", c: true}, {t: "the most kind", c: false}, {t: "kinder than", c: false}, {t: "kindest", c: false}] },
                        { q: "That was _______ experience of my life.", options: [{t: "the most inspiring", c: true}, {t: "more inspiring than", c: false}, {t: "inspiringer", c: false}, {t: "the inspiringest", c: false}] }
                    ]
                },
                {
                    title: "Adjective Order",
                    drills: [
                        { q: "She gave me a _______ gift.", options: [{t: "lovely small round", c: true}, {t: "small lovely round", c: false}, {t: "round small lovely", c: false}, {t: "lovely round small", c: false}] },
                        { q: "We need an _______ system.", options: [{t: "educational inclusive new", c: false}, {t: "inclusive new educational", c: true}, {t: "new inclusive educational", c: false}, {t: "educational new inclusive", c: false}] },
                        { q: "Look at those _______ barriers.", options: [{t: "metal ugly old", c: false}, {t: "old metal ugly", c: false}, {t: "ugly old metal", c: true}, {t: "ugly metal old", c: false}] },
                        { q: "He wears a _______ jacket.", options: [{t: "blue large nice", c: false}, {t: "nice large blue", c: true}, {t: "large nice blue", c: false}, {t: "blue nice large", c: false}] },
                        { q: "It was a _______ memory.", options: [{t: "Brazilian nostalgic beautiful", c: false}, {t: "beautiful nostalgic Brazilian", c: true}, {t: "nostalgic Brazilian beautiful", c: false}, {t: "beautiful Brazilian nostalgic", c: false}] },
                        { q: "She has _______ hair.", options: [{t: "long beautiful dark", c: false}, {t: "beautiful long dark", c: true}, {t: "dark beautiful long", c: false}, {t: "long dark beautiful", c: false}] },
                        { q: "He owns a _______ car.", options: [{t: "red expensive small", c: false}, {t: "expensive small red", c: true}, {t: "small expensive red", c: false}, {t: "red small expensive", c: false}] },
                        { q: "I found a _______ box.", options: [{t: "wooden old square", c: false}, {t: "old square wooden", c: true}, {t: "square old wooden", c: false}, {t: "wooden square old", c: false}] },
                        { q: "They live in a _______ house.", options: [{t: "modern big white", c: false}, {t: "big modern white", c: true}, {t: "white big modern", c: false}, {t: "big white modern", c: false}] },
                        { q: "We wear a _______ uniform.", options: [{t: "cotton blue nice", c: false}, {t: "nice blue cotton", c: true}, {t: "blue nice cotton", c: false}, {t: "cotton nice blue", c: false}] }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 4: SHADOWING
        // ======================================================
        {
            title: "Can you say that again?",
            sentences: [
                { text: "I believe diversity is as important as respect.<br><small style='color:#0077b6'>(Eu acredito que a diversidade é tão importante quanto o respeito.)</small>", audio: "TTS: I believe diversity is as important as respect.", arrow: "↘" },
                { text: "Racism is the worst form of intolerance.<br><small style='color:#0077b6'>(O racismo é a pior forma de intolerância.)</small>", audio: "TTS: Racism is the worst form of intolerance.", arrow: "↘" },
                { text: "We must break down these stereotypes to be more inclusive.<br><small style='color:#0077b6'>(Nós devemos romper esses estereótipos para sermos mais inclusivos.)</small>", audio: "TTS: We must break down these stereotypes to be more inclusive.", arrow: "↘" },
                { text: "Is he the most understanding person in the class?<br><small style='color:#0077b6'>(Ele é a pessoa mais compreensiva da aula?)</small>", audio: "TTS: Is he the most understanding person in the class?", arrow: "↗" },
                { text: "Judging others is less sensible than getting to know them.<br><small style='color:#0077b6'>(Julgar os outros é menos sensato do que conhecê-los.)</small>", audio: "TTS: Judging others is less sensible than getting to know them.", arrow: "↘" },
                { text: "Let's help everyone feel welcome in this nice new inclusive school.<br><small style='color:#0077b6'>(Vamos ajudar todos a se sentirem bem-vindos nesta escola legal, nova e inclusiva.)</small>", audio: "TTS: Let's help everyone feel welcome in this nice new inclusive school.", arrow: "↘" }
            ]
        },

        // ======================================================
        // STEP 5: LISTENING
        // ======================================================
        {
            title: "Are you following me?",
            drills: [
                // Drill 1: Albert describing a memory (Typing)
                {
                    type: "typing",
                    instruction: "Listen to Albert describing a memory and type the missing words.<br><small style='color:#0077b6'>(Ouça Albert descrevendo uma memória e digite as palavras que faltam.)</small>",
                    audio: "TTS: I remember the day before the project started. I actually thought discrimination was a small problem, but it is worse than I imagined. We need to break through the silence and speak up. He is the kindest person I know, and he deserves respect.",
                    text: "I remember the day before the project started. I [actually] thought [discrimination] was a small problem, but it is [worse than] I imagined. We need to [break through] the silence and speak up. He is [the kindest person] I know, and he [deserves] [respect]."
                },
                // Drill 2: Dialogue (Dropdown) - 2 Characters: Mrs. Canales and Celine
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation and choose the correct options.<br><small style='color:#0077b6'>(Ouça a conversa e escolha as opções corretas.)</small>",
                    audio: "audio/em1-3-8/step5_drill2.mp3",
                    questions: [
                        { q: "Mrs. Canales: Celine, why is this environment [more inclusive than* | as inclusive as | the most inclusive] before?", a: "more inclusive than" },
                        { q: "Celine: Because we decided to [break down* | break up | make up] the barriers.", a: "break down" },
                        { q: "Mrs. Canales: That is [the best* | better than | as good as] initiative I’ve seen!", a: "the best" },
                        { q: "Celine: Thanks! We want [everyone* | a few people | nobody] to feel safe here.", a: "everyone" }
                    ]
                },
                // Drill 3: Logical Response (Audio Choice)
                {
                    type: "audio-choice",
                    instruction: "Listen and choose the correct answer based on the lesson logic.<br><small style='color:#0077b6'>(Ouça e escolha a resposta correta baseada na lógica da lição.)</small>",
                    audio: "TTS: Is it okay to make fun of people because they are different?",
                    options: [
                        { t: "Yes, it's as important as respect.", c: false },
                        { t: "No, making fun of others is the least acceptable behavior.", c: true },
                        { t: "Actually, my parents are sensitive.", c: false },
                        { t: "He works in a library.", c: false }
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
                    title: "Narration - Workplace Diversity",
                    audio: "TTS: In many companies today, diversity is more valued than it was in the past. Managers realize that a diverse international creative team finds solutions faster. Actually, inclusive businesses are often the most successful ones. They work hard to make up for past discrimination by creating new fair hiring policies. When employees show empathy, they break through cultural barriers and achieve better results together. || audio/em1-3-8/p6_text1.mp3",
                    body: "In many companies today, [diversity](tooltip:diversity) is [more valued than](tooltip:comparatives) it was in the past. Managers realize that a [diverse](tooltip:diverse) international [creative](tooltip:creative) team finds [solutions](tooltip:solution) faster. [Actually](tooltip:actually), [inclusive](tooltip:inclusive) businesses are often [the most successful](tooltip:superlatives) ones. They work hard to [make up for](tooltip:make-up-for) past [discrimination](tooltip:discrimination) by creating new [fair](tooltip:fair) hiring policies. When employees show [empathy](tooltip:empathy), they [break through](tooltip:break-through) cultural barriers and [achieve](tooltip:achieve) better results together.",
                    questions: [
                        { q: "How do modern companies feel about diversity compared to the past?", options: [{t: "It is less valued now.", c: false}, {t: "It is more valued now.", c: true}, {t: "It is the same as before.", c: false}, {t: "It is not important at all.", c: false}] },
                        { q: "What kind of teams find solutions faster?", options: [{t: "Teams that are very similar.", c: false}, {t: "Diverse, international, and creative teams.", c: true}, {t: "Teams that avoid innovation.", c: false}, {t: "Small teams only.", c: false}] },
                        { q: "What do employees achieve when they show empathy?", options: [{t: "They create more stereotypes.", c: false}, {t: "They achieve better results together.", c: true}, {t: "They find the library.", c: false}, {t: "They face job loss.", c: false}] }
                    ]
                },
                {
                    title: "Dialogue - Challenging Stereotypes",
                    audio: "audio/em1-3-8/p6_text2.mp3",
                    body: "<b>Albert:</b> Celine, look at that old metal fence. It feels like a wall of [segregation](tooltip:segregation).<br><b>Celine:</b> I [agree](tooltip:agree). It makes our [community](tooltip:community) feel [less welcoming than](tooltip:comparatives) it should be.<br><b>Albert:</b> Some people have horrible [unfair](tooltip:unfair) fixed ideas about our neighborhood.<br><b>Celine:</b> Those are just [stereotypes](tooltip:stereotype). [Actually](tooltip:actually), we are [the kindest](tooltip:superlatives) group of people I know.<br><b>Albert:</b> We [ought to](tooltip:ought-to) [campaign](tooltip:campaign) to [break down](tooltip:break-down) these ideas.<br><b>Celine:</b> Let’s do it! Showing the truth is [better than](tooltip:comparatives) staying silent.",
                    questions: [
                        { q: "What is Albert's opinion of the fence?", options: [{t: "It looks beautiful and new.", c: false}, {t: "It feels like a wall of segregation.", c: true}, {t: "It is made of plastic.", c: false}, {t: "It is very proactive.", c: false}] },
                        { q: "What does Celine say about the people in their neighborhood?", options: [{t: "They are the most famous people.", c: false}, {t: "They are the kindest people she knows.", c: true}, {t: "They are very sensible.", c: false}, {t: "They face hardship.", c: false}] },
                        { q: "What is their plan for the future?", options: [{t: "To stay silent.", c: false}, {t: "To campaign and break down stereotypes.", c: true}, {t: "To move to a different city.", c: false}, {t: "To take a loan.", c: false}] }
                    ]
                },
                {
                    title: "Description - An Inclusive Leader",
                    audio: "TTS: Malala Yousafzai is the most famous advocate for girls' education today. She believes that a student's identity should never be a reason for exclusion. Her short powerful moving speeches have inspired millions. Eventually, her resilience helped her overcome great hardship. She is braver than many world leaders because she fights for equality every year. She wants to create a world where everyone is as free as they can be. || audio/em1-3-8/p6_text3.mp3",
                    body: "Malala Yousafzai is [the most famous](tooltip:superlatives) [advocate](tooltip:advocate) for girls' [education](tooltip:education) today. She believes that a student's [identity](tooltip:identity) should never be a reason for exclusion. Her short powerful moving [speeches](tooltip:speech) have [inspired](tooltip:inspire) millions. [Eventually](tooltip:eventually), her [resilience](tooltip:resilience) helped her [overcome](tooltip:overcome) great [hardship](tooltip:hardship). She is [braver than](tooltip:comparatives) many world leaders because she fights for [equality](tooltip:equality) every year. She wants to [create](tooltip:create) a world where [everyone](tooltip:everyone) is as free as they can be.",
                    questions: [
                        { q: "What is Malala Yousafzai's main cause?", options: [{t: "Building new factories.", c: false}, {t: "Girls' education.", c: true}, {t: "Learning to use a wheelchair.", c: false}, {t: "Digital marketing.", c: false}] },
                        { q: "How are her speeches described?", options: [{t: "Long, boring, and old.", c: false}, {t: "Short, powerful, and moving.", c: true}, {t: "Brazilian and nostalgic.", c: false}, {t: "Sensible and quiet.", c: false}] },
                        { q: "Why is she considered braver than many leaders?", options: [{t: "Because she is the most famous.", c: false}, {t: "Because she fights for equality every year.", c: true}, {t: "Because she has many parents.", c: false}, {t: "Because she likes cotton.", c: false}] }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 7: MONKEY SEE, MONKEY DO (Mixed Interactive Types)
        // ======================================================
        {
            title: "Monkey see, Monkey do",
            drills: [
                // 1. Matching (Phrasal Verbs)
                {
                    type: "matching",
                    instruction: "Match the phrasal verb with its meaning in the context of diversity.<br><small style='color:#0077b6'>(Associe o verbo frasal ao seu significado no contexto de diversidade.)</small>",
                    pairs: [
                        { left: "Break down", right: "To destroy a social barrier", val: "A" },
                        { left: "Make up for", right: "To compensate for past mistakes", val: "B" },
                        { left: "Break through", right: "To pass a barrier or make a discovery", val: "C" },
                        { left: "Get over", right: "To recover from an insult or problem", val: "D" }
                    ]
                },
                // 2. Word Order (Adjective Order)
                {
                    type: "word-order",
                    instruction: "Put the adjectives in the correct order (OSASCOMP).<br><small style='color:#0077b6'>(Coloque os adjetivos na ordem correta.)</small>",
                    sentence: "inclusive / new / school",
                    correct: "inclusive new school"
                },
                {
                    type: "word-order",
                    instruction: "Put the adjectives in the correct order (OSASCOMP).<br><small style='color:#0077b6'>(Coloque os adjetivos na ordem correta.)</small>",
                    sentence: "comfortable / blue / cotton",
                    correct: "comfortable blue cotton"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in order to form a resilient thought.",
                    sentence: "is / important / as / as / Empathy / respect / .",
                    correct: "Empathy is as important as respect ."
                },
                // 5. Clickable Error (Comparatives & Superlatives)
                {
                    type: "clickable-error",
                    instruction: "Identify and click on the incorrect word in the sentence.<br><small style='color:#0077b6'>(Identifique e clique na palavra incorreta na frase.)</small>",
                    sentence: "Prejudice is the [baddest](error:worst) thing in our society."
                },
                {
                    type: "clickable-error",
                    instruction: "Find the grammatical mistake.",
                    sentence: "Empathy is more important [that](error:than) intelligence."
                },
                {
                    type: "clickable-error",
                    instruction: "Find the grammatical mistake.",
                    sentence: "Pedro is [proactiver](error:more_proactive) than most people."
                },
                {
                    type: "clickable-error",
                    instruction: "Find the grammatical mistake.",
                    sentence: "Racism is [more](error:) [bad](error:worse) than simple rudeness."
                },
                {
                    type: "clickable-error",
                    instruction: "Find the grammatical mistake.",
                    sentence: "Showing respect is the [less](error:least) we can do."
                },
                {
                    type: "clickable-error",
                    instruction: "Find the grammatical mistake.",
                    sentence: "She is the [most](error:) [brave](error:bravest) woman in history."
                },
                // ADD TO STEP 7 -> drills: []

                // 11. Odd One Out (Contextual Logic)
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that doesn't belong to the group of positive traits.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo de características positivas.)</small>",
                    options: [
                        { t: "Respect", c: false },
                        { t: "Empathy", c: false },
                        { t: "Xenophobia", c: true },
                        { t: "Kindness", c: false }
                    ]
                },
                // 12. Odd One Out (False Cognates)
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that is NOT a false cognate from this chapter.",
                    options: [
                        { t: "Parents", c: false },
                        { t: "Fabric", c: false },
                        { t: "Library", c: false },
                        { t: "Classroom", c: true }
                    ]
                },
                // 13. Matching (Grammar: Comparison Types)
                {
                    type: "matching",
                    instruction: "Match the comparative or superlative form with its adjective.<br><small style='color:#0077b6'>(Relacione a forma comparativa ou superlativa com seu adjetivo.)</small>",
                    pairs: [
                        { left: "Better", right: "Comparative of Good", val: "1" },
                        { left: "Worse", right: "Comparative of Bad", val: "2" },
                        { left: "Bravest", right: "Superlative of Brave", val: "3" },
                        { left: "Least", right: "Superlative of Inferiority", val: "4" }
                    ]
                },
                // 14. Word Order (Phrasal Verbs)
                {
                    type: "word-order",
                    instruction: "Put the words in order to form a sentence about social change.<br><small style='color:#0077b6'>(Coloque as palavras em ordem para formar uma frase sobre mudança social.)</small>",
                    sentence: "break / down / barriers / must / We / .",
                    correct: "We must break down barriers ."
                },
                // 15. Clickable Error (Relative Clauses)
                {
                    type: "clickable-error",
                    instruction: "Click on the relative pronoun that is used incorrectly.<br><small style='color:#0077b6'>(Clique no pronome relativo usado incorretamente.)</small>",
                    sentence: "The man [which](error:who) owns the shop is resilient."
                },
                {
                    type: "clickable-error",
                    instruction: "Find the grammatical mistake.",
                    sentence: "That is the year [where](error:when) the pandemic began."
                },
                // 17. Odd One Out (Grammar Consistency)
                {
                    type: "odd-one-out",
                    instruction: "Choose the comparative form among superlatives.",
                    options: [
                        { t: "The kindest", c: false },
                        { t: "The bravest", c: false },
                        { t: "Worse", c: true },
                        { t: "The most impactful", c: false }
                    ]
                },
                // 18. True or False (Vocabulary Logic)
                {
                    type: "true-false",
                    instruction: "Decide if the statement is True or False based on the lesson definitions.<br><small style='color:#0077b6'>(Decida se a afirmação é verdadeira ou falsa.)</small>",
                    questions: [
                        { text: "Prejudice is an unfair opinion formed without facts.", correct: "true" },
                        { text: "'Actually' means 'atualmente' in Portuguese.", correct: "false" }
                    ]
                },
                // 19. Matching (Social Concepts)
                {
                    type: "matching",
                    instruction: "Match the concept with its social definition.<br><small style='color:#0077b6'>(Relacione o conceito com sua definição social.)</small>",
                    pairs: [
                        { left: "Inclusion", right: "Equal access for all", val: "X" },
                        { left: "Resilience", right: "Recovering from setbacks", val: "Y" },
                        { left: "Diversity", right: "Variety of individuals", val: "Z" },
                        { left: "Ableism", right: "Discrimination against disabled", val: "W" }
                    ]
                },
                // 20. Word Order (Adjective Order - Advanced)
                {
                    type: "word-order",
                    instruction: "Put the adjectives in the correct order to describe hair.",
                    sentence: "beautiful / long / dark",
                    correct: "beautiful long dark"
                },
                // ADD TO STEP 7 -> drills: []

                // 21. Clickable Error (Indefinite Pronouns)
                {
                    type: "clickable-error",
                    instruction: "Identify and click on the incorrect verb form.<br><small style='color:#0077b6'>(Identifique e clique na forma verbal incorreta.)</small>",
                    sentence: "Everyone [are](error:is) online in the cafeteria right now."
                },
                // 22. Word Order (Superlatives)
                {
                    type: "word-order",
                    instruction: "Put the words in order to describe Celine's personality.<br><small style='color:#0077b6'>(Coloque as palavras em ordem para descrever a personalidade da Celine.)</small>",
                    sentence: "most / She / person / is / optimistic / the / .",
                    correct: "She is the most optimistic person ."
                },
                // 23. Matching (Phrasal Verbs with MAKE)
                {
                    type: "matching",
                    instruction: "Match the phrasal verb with its meaning.<br><small style='color:#0077b6'>(Relacione o verbo frasal com seu significado.)</small>",
                    pairs: [
                        { left: "Make up for", right: "To compensate", val: "M1" },
                        { left: "Make fun of", right: "To mock or tease", val: "M2" },
                        { left: "Make up", right: "To restore relations", val: "M3" },
                        { left: "Make", right: "To form or produce", val: "M4" }
                    ]
                },
                // 24. Odd One Out (Contextual Logic - 4 alternatives)
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that doesn't belong to the group of negative concepts.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo de conceitos negativos.)</small>",
                    options: [
                        { t: "Intolerance", c: false },
                        { t: "Prejudice", c: false },
                        { t: "Discrimination", c: false },
                        { t: "Empathy", c: true }
                    ]
                },
                // 25. Clickable Error (Adjective Order)
                {
                    type: "clickable-error",
                    instruction: "Click on the adjectives that are in the wrong order.<br><small style='color:#0077b6'>(Clique nos adjetivos que estão na ordem incorreta.)</small>",
                    sentence: "Celine wears a [cotton](error:blue) [cotton](error:blue) school uniform."
                },
                // 26. Word Order (Phrasal Verbs)
                {
                    type: "word-order",
                    instruction: "Put the words in order to form a rule for the classroom.",
                    sentence: "Never / make / of / fun / accent / his / .",
                    correct: "Never make fun of his accent ."
                },
                // 27. Odd One Out (Irregular Adjectives - 4 alternatives)
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that is NOT an irregular comparison form.",
                    options: [
                        { t: "Better", c: false },
                        { t: "Worse", c: false },
                        { t: "Further", c: false },
                        { t: "Goodest", c: true }
                    ]
                },
                // 28. Matching (Adjective Categories)
                {
                    type: "matching",
                    instruction: "Match the adjective with its OSASCOMP category.<br><small style='color:#0077b6'>(Relacione o adjetivo com sua categoria OSASCOMP.)</small>",
                    pairs: [
                        { left: "Lovely", right: "Opinion", val: "cat1" },
                        { left: "Small", right: "Size", val: "cat2" },
                        { left: "Brazilian", right: "Origin", val: "cat3" },
                        { left: "Cotton", right: "Material", val: "cat4" }
                    ]
                },
                // 29. Clickable Error (Comparatives of Inferiority)
                {
                    type: "clickable-error",
                    instruction: "Identify and click on the incorrect word in the sentence.",
                    sentence: "Showing respect is the [less](error:least) we can do to help."
                },
                // 30. Word Order (General Knowledge)
                {
                    type: "word-order",
                    instruction: "Put the words in order to complete the lesson thought.",
                    sentence: "makes / Diversity / interesting / life / more / .",
                    correct: "Diversity makes life more interesting ."
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn to be an advocate for inclusion! Write a short introduction (5-6 sentences) about yourself or someone you admire.<br><br><small><span style='color:#0077b6'>(Agora é a sua vez de ser um defensor da inclusão! Escreva uma pequena introdução (5-6 frases) sobre você ou alguém que você admira.)</span></small>",
            example: "\"I admire my friend Pedro. He is **more proactive than** most students. He is **the kindest** person I know. He always wears a **nice red cotton** hat. He helps me **break through** my fears about speaking English. We believe diversity makes our class better!\"<br><br><small><span style='color:#0077b6'>(Exemplo: Eu admiro meu amigo Pedro. Ele é mais proativo do que a maioria dos estudantes. Ele é a pessoa mais gentil que eu conheço. Ele sempre usa um belo chapéu vermelho de algodão...)</span></small>",
            prompts: [
                "Use [Comparatives] to compare two qualities. <br><small><span style='color:#0077b6'>(Use Comparativos para comparar duas qualidades.)</span></small>",
                "Use one [Superlative] to describe the best trait. <br><small><span style='color:#0077b6'>(Use um Superlativo para descrever a melhor característica.)</span></small>",
                "Use one sentence with correct [Adjective Order] (OSASCOMP). <br><small><span style='color:#0077b6'>(Use uma frase com a Ordem dos Adjetivos correta.)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Verbs A-L)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                { term: "Accept", definition: "To recognize or take on a new idea or condition.", defTrans: "aceitar", example: "We must accept our differences to live in peace.", exTrans: "<span style='color:#0077b6'>(Devemos aceitar nossas diferenças para viver em paz.)</span>", audioFront: "TTS: Accept", audioBack: "TTS: We must accept our differences to live in peace." },
                { term: "Agree", definition: "To have the same opinion as another person.", defTrans: "concordar", example: "I agree with your point about equality.", exTrans: "<span style='color:#0077b6'>(Eu concordo com seu ponto sobre igualdade.)</span>", audioFront: "TTS: Agree", audioBack: "TTS: I agree with your point about equality." },
                { term: "Apologize", definition: "To say sorry for a mistake.", defTrans: "desculpar-se", example: "Albert apologized for disturbing the study group.", exTrans: "<span style='color:#0077b6'>(Albert se desculpou por perturbar o grupo de estudos.)</span>", audioFront: "TTS: Apologize", audioBack: "TTS: Albert apologized for disturbing the study group." },
                { term: "Ask", definition: "To say something to get information or a request.", defTrans: "perguntar / pedir", example: "Please ask Mrs. Canales if you have questions.", exTrans: "<span style='color:#0077b6'>(Por favor, pergunte à Sra. Canales se tiver dúvidas.)</span>", audioFront: "TTS: Ask", audioBack: "TTS: Please ask Mrs. Canales if you have questions." },
                { term: "Be", definition: "The most fundamental verb of identity and state.", defTrans: "ser / estar", example: "Intelligence is more than a simple grade.", exTrans: "<span style='color:#0077b6'>(A inteligência é mais do que uma simples nota.)</span>", audioFront: "TTS: Be", audioBack: "TTS: Intelligence is more than a simple grade." },
                { term: "Believe", definition: "To accept that something is true or possible.", defTrans: "acreditar", example: "I believe everyone has a hidden talent.", exTrans: "<span style='color:#0077b6'>(Acredito que todos têm um talento oculto.)</span>", audioFront: "TTS: Believe", audioBack: "TTS: I believe everyone has a hidden talent." },
                { term: "Break down", definition: "To destroy a barrier or an unfair structure.", defTrans: "romper / derrubar", example: "Education helps to break down social barriers.", exTrans: "<span style='color:#0077b6'>(A educação ajuda a derrubar barreiras sociais.)</span>", audioFront: "TTS: Break down", audioBack: "TTS: Education helps to break down social barriers." },
                { term: "Break through", definition: "To move through an obstacle or make a discovery.", defTrans: "romper (barreira) / superar", example: "They managed to break through the silence.", exTrans: "<span style='color:#0077b6'>(Eles conseguiram romper o silêncio.)</span>", audioFront: "TTS: Break through", audioBack: "TTS: They managed to break through the silence." },
                { term: "Break up", definition: "To cause a group or relationship to stop being together.", defTrans: "separar (grupo)", example: "Prejudice can break up a strong community.", exTrans: "<span style='color:#0077b6'>(O preconceito pode separar uma comunidade forte.)</span>", audioFront: "TTS: Break up", audioBack: "TTS: Prejudice can break up a strong community." },
                { term: "Build", definition: "To construct or create something.", defTrans: "construir", example: "Let's build a more inclusive world.", exTrans: "<span style='color:#0077b6'>(Vamos construir um mundo mais inclusivo.)</span>", audioFront: "TTS: Build", audioBack: "TTS: Let's build a more inclusive world." },
                { term: "Campaign", definition: "To work in an organized way toward a goal.", defTrans: "fazer campanha", example: "She campaigned for girls' rights for years.", exTrans: "<span style='color:#0077b6'>(Ela fez campanha pelos direitos das meninas por anos.)</span>", audioFront: "TTS: Campaign", audioBack: "TTS: She campaigned for girls' rights for years." },
                { term: "Challenge", definition: "To dispute the truth or validity of something.", defTrans: "desafiar", example: "You should challenge unfair comments.", exTrans: "<span style='color:#0077b6'>(Você deve desafiar comentários injustos.)</span>", audioFront: "TTS: Challenge", audioBack: "TTS: You should challenge unfair comments." },
                { term: "Change", definition: "To make or become different.", defTrans: "mudar", example: "Small actions can change the environment.", exTrans: "<span style='color:#0077b6'>(Pequenas ações podem mudar o ambiente.)</span>", audioFront: "TTS: Change", audioBack: "TTS: Small actions can change the environment." },
                { term: "Compare", definition: "To note the similarity or dissimilarity between things.", defTrans: "comparar", example: "Do not compare your potential to others.", exTrans: "<span style='color:#0077b6'>(Não compare o seu potencial com o dos outros.)</span>", audioFront: "TTS: Compare", audioBack: "TTS: Do not compare your potential to others." },
                { term: "Compensate", definition: "To give someone something in recognition of loss.", defTrans: "compensar", example: "We must compensate for past injustices.", exTrans: "<span style='color:#0077b6'>(Devemos compensar as injustiças do passado.)</span>", audioFront: "TTS: Compensate", audioBack: "TTS: We must compensate for past injustices." },
                { term: "Constitute", definition: "To be a part of a whole.", defTrans: "constituir", example: "Different cultures constitute our nation.", exTrans: "<span style='color:#0077b6'>(Diferentes culturas constituem nossa nação.)</span>", audioFront: "TTS: Constitute", audioBack: "TTS: Different cultures constitute our nation." },
                { term: "Create", definition: "To bring something into existence.", defTrans: "criar", example: "Let's create a new analysis of the results.", exTrans: "<span style='color:#0077b6'>(Vamos criar uma nova análise dos resultados.)</span>", audioFront: "TTS: Create", audioBack: "TTS: Let's create a new analysis of the results." },
                { term: "Deserve", definition: "To be worthy of something, like respect.", defTrans: "merecer", example: "Every human being deserves respect.", exTrans: "<span style='color:#0077b6'>(Todo ser humano merece respeito.)</span>", audioFront: "TTS: Deserve", audioBack: "TTS: Every human being deserves respect." },
                { term: "Do", definition: "To perform an action or task.", defTrans: "fazer", example: "Albert does logic puzzles in his free time.", exTrans: "<span style='color:#0077b6'>(Albert faz quebra-cabeças de lógica em seu tempo livre.)</span>", audioFront: "TTS: Do", audioBack: "TTS: Albert does logic puzzles in his free time." },
                { term: "Endure", definition: "To suffer something painful or difficult patiently.", defTrans: "suportar / aguentar", example: "She endured many hardships to succeed.", exTrans: "<span style='color:#0077b6'>(Ela suportou muitas dificuldades para ter sucesso.)</span>", audioFront: "TTS: Endure", audioBack: "TTS: She endured many hardships to succeed." },
                { term: "Feel", definition: "To experience an emotion or physical sensation.", defTrans: "sentir", example: "I feel happy when everyone is included.", exTrans: "<span style='color:#0077b6'>(Sinto-me feliz quando todos estão incluídos.)</span>", audioFront: "TTS: Feel", audioBack: "TTS: I feel happy when everyone is included." },
                { term: "Find", definition: "To discover or identify something.", defTrans: "encontrar", example: "Did you find a solution for the problem?", exTrans: "<span style='color:#0077b6'>(Você encontrou uma solução para o problema?)</span>", audioFront: "TTS: Find", audioBack: "TTS: Did you find a solution for the problem?" },
                { term: "Focus", definition: "To pay particular attention to one thing.", defTrans: "focar", example: "I need to focus on my linguistic intelligence.", exTrans: "<span style='color:#0077b6'>(Eu preciso focar na minha inteligência linguística.)</span>", audioFront: "TTS: Focus", audioBack: "TTS: I need to focus on my linguistic intelligence." },
                { term: "Give", definition: "To freely transfer possession to someone.", defTrans: "dar", example: "Give others the respect you want to receive.", exTrans: "<span style='color:#0077b6'>(Dê aos outros o respeito que você deseja receber.)</span>", audioFront: "TTS: Give", audioBack: "TTS: Give others the respect you want to receive." },
                { term: "Hear", definition: "To perceive with the ear.", defTrans: "ouvir", example: "I heard a very inclusive speech yesterday.", exTrans: "<span style='color:#0077b6'>(Ouvi um discurso muito inclusivo ontem.)</span>", audioFront: "TTS: Hear", audioBack: "TTS: I heard a very inclusive speech yesterday." },
                { term: "Help", definition: "To make it easier for someone to do something.", defTrans: "ajudar", example: "Friends help each other get smarter.", exTrans: "<span style='color:#0077b6'>(Amigos ajudam uns aos outros a ficarem mais espertos.)</span>", audioFront: "TTS: Help", audioBack: "TTS: Friends help each other get smarter." },
                { term: "Ignore", definition: "To refuse to take notice of or acknowledge.", defTrans: "ignorar", example: "Ignore the noise and concentrate.", exTrans: "<span style='color:#0077b6'>(Ignore o barulho e concentre-se.)</span>", audioFront: "TTS: Ignore", audioBack: "TTS: Ignore the noise and concentrate." },
                { term: "Imagine", definition: "To form a mental image or concept of.", defTrans: "imaginar", example: "Imagine your potential in the future!", exTrans: "<span style='color:#0077b6'>(Imagine seu potencial no futuro!)</span>", audioFront: "TTS: Imagine", audioBack: "TTS: Imagine your potential in the future!" },
                { term: "Improve", definition: "To make or become better.", defTrans: "melhorar", example: "I study in order to improve my skills.", exTrans: "<span style='color:#0077b6'>(Eu estudo para melhorar minhas habilidades.)</span>", audioFront: "TTS: Improve", audioBack: "TTS: I study in order to improve my skills." },
                { term: "Invent", definition: "To create or design something that has not existed before.", defTrans: "inventar", example: "I want to invent a new learning app.", exTrans: "<span style='color:#0077b6'>(Quero inventar um novo aplicativo de aprendizagem.)</span>", audioFront: "TTS: Invent", audioBack: "TTS: I want to invent a new learning app." },
                { term: "Join", definition: "To become a member or part of a group.", defTrans: "juntar-se", example: "Albert decided to join the study group.", exTrans: "<span style='color:#0077b6'>(Albert decidiu se juntar ao grupo de estudos.)</span>", audioFront: "TTS: Join", audioBack: "TTS: Albert decided to join the study group." },
                { term: "Keep", definition: "To continue a course of action.", defTrans: "manter / guardar", example: "Keep practicing and you will succeed.", exTrans: "<span style='color:#0077b6'>(Continue praticando e você terá sucesso.)</span>", audioFront: "TTS: Keep", audioBack: "TTS: Keep practicing and you will succeed." },
                { term: "Know", definition: "To be aware of through information or experience.", defTrans: "saber / conhecer", example: "I know how the brain works now.", exTrans: "<span style='color:#0077b6'>(Eu sei como o cérebro funciona agora.)</span>", audioFront: "TTS: Know", audioBack: "TTS: I know how the brain works now." },
                { term: "Lead to", definition: "To cause or result in something.", defTrans: "levar a", example: "Hard work leads to success.", exTrans: "<span style='color:#0077b6'>(O trabalho duro leva ao sucesso.)</span>", audioFront: "TTS: Lead to", audioBack: "TTS: Hard work leads to success." },
                { term: "Learn", definition: "To gain or acquire knowledge or skill.", defTrans: "aprender", example: "We learn new things every single day.", exTrans: "<span style='color:#0077b6'>(Aprendemos coisas novas todos os dias.)</span>", audioFront: "TTS: Learn", audioBack: "TTS: We learn new things every single day." },
                // ADD THESE TO STEP 9 -> items: []
// ======================================================
// PART 10.2: FLASHCARDS (Verbs M-S)
// ======================================================
{ 
    term: "To make", 
    definition: "To form or produce something by putting parts together.", 
    defTrans: "fazer / criar",
    example: "Let's make a positive impact today.", 
    exTrans: "<span style='color:#0077b6'>(Vamos causar um impacto positivo hoje.)</span>",
    audioFront: "TTS: To make",
    audioBack: "TTS: Let's make a positive impact today." 
},
{ 
    term: "To make fun of", 
    definition: "To mock or tease someone unkindly.", 
    defTrans: "zombar de",
    example: "Never make fun of someone's accent.", 
    exTrans: "<span style='color:#0077b6'>(Nunca zombe do sotaque de alguém.)</span>",
    audioFront: "TTS: To make fun of",
    audioBack: "TTS: Never make fun of someone's accent." 
},
{ 
    term: "To make up", 
    definition: "To restore friendly relations after an argument.", 
    defTrans: "fazer as pazes / inventar",
    example: "They argued, but they made up quickly.", 
    exTrans: "<span style='color:#0077b6'>(Eles discutiram, mas fizeram as pazes rapidamente.)</span>",
    audioFront: "TTS: To make up",
    audioBack: "TTS: They argued, but they made up quickly." 
},
{ 
    term: "To make up for", 
    definition: "To do something that corrects a bad situation or mistake.", 
    defTrans: "compensar por",
    example: "I want to make up for my late arrival.", 
    exTrans: "<span style='color:#0077b6'>(Eu quero compensar pelo meu atraso.)</span>",
    audioFront: "TTS: To make up for",
    audioBack: "TTS: I want to make up for my late arrival." 
},
{ 
    term: "To mean", 
    definition: "To have as its explanation or interpretation.", 
    defTrans: "significar",
    example: "What does inclusion mean to you?", 
    exTrans: "<span style='color:#0077b6'>(O que inclusão significa para você?)</span>",
    audioFront: "TTS: To mean",
    audioBack: "TTS: What does inclusion mean to you?" 
},
{ 
    term: "To mention", 
    definition: "To refer to something briefly and without going into detail.", 
    defTrans: "mencionar",
    example: "Celine mentioned a study group earlier.", 
    exTrans: "<span style='color:#0077b6'>(Celine mencionou um grupo de estudos mais cedo.)</span>",
    audioFront: "TTS: To mention",
    audioBack: "TTS: Celine mentioned a study group earlier." 
},
{ 
    term: "To motivate", 
    definition: "To provide someone with a reason for doing something.", 
    defTrans: "motivar",
    example: "Challenges motivate me to work harder.", 
    exTrans: "<span style='color:#0077b6'>(Desafios me motivam a trabalhar mais duro.)</span>",
    audioFront: "TTS: To motivate",
    audioBack: "TTS: Challenges motivate me to work harder." 
},
{ 
    term: "To move", 
    definition: "To change position or cause something to change position.", 
    defTrans: "mover-se",
    example: "Exercise helps you move and stay healthy.", 
    exTrans: "<span style='color:#0077b6'>(O exercício ajuda você a se mexer e a se manter saudável.)</span>",
    audioFront: "TTS: To move",
    audioBack: "TTS: Exercise helps you move and stay healthy." 
},
{ 
    term: "To need", 
    definition: "To require something because it is essential.", 
    defTrans: "precisar",
    example: "We need more empathetic leaders.", 
    exTrans: "<span style='color:#0077b6'>(Precisamos de mais líderes empáticos.)</span>",
    audioFront: "TTS: To need",
    audioBack: "TTS: We need more empathetic leaders." 
},
{ 
    term: "To neglect", 
    definition: "To fail to care for properly.", 
    defTrans: "negligenciar",
    example: "Never neglect your mental health.", 
    exTrans: "<span style='color:#0077b6'>(Nunca negligencie sua saúde mental.)</span>",
    audioFront: "TTS: To neglect",
    audioBack: "TTS: Never neglect your mental health." 
},
{ 
    term: "To notice", 
    definition: "To become aware of something.", 
    defTrans: "notar",
    example: "I noticed he was feeling excluded.", 
    exTrans: "<span style='color:#0077b6'>(Eu notei que ele estava se sentindo excluído.)</span>",
    audioFront: "TTS: To notice",
    audioBack: "TTS: I noticed he was feeling excluded." 
},
{ 
    term: "To offer", 
    definition: "To present or proffer something for someone to accept or reject.", 
    defTrans: "oferecer",
    example: "Always offer support to your friends.", 
    exTrans: "<span style='color:#0077b6'>(Sempre ofereça apoio aos seus amigos.)</span>",
    audioFront: "TTS: To offer",
    audioBack: "TTS: Always offer support to your friends." 
},
{ 
    term: "To overcome", 
    definition: "To succeed in dealing with a problem or difficulty.", 
    defTrans: "superar",
    example: "She overcame many obstacles in life.", 
    exTrans: "<span style='color:#0077b6'>(Ela superou muitos obstáculos na vida.)</span>",
    audioFront: "TTS: To overcome",
    audioBack: "TTS: She overcame many obstacles in life." 
},
{ 
    term: "To pass", 
    definition: "To be successful in an examination or test.", 
    defTrans: "passar",
    example: "If you focus, you will pass the test.", 
    exTrans: "<span style='color:#0077b6'>(Se você se focar, você passará no teste.)</span>",
    audioFront: "TTS: To pass",
    audioBack: "TTS: If you focus, you will pass the test." 
},
{ 
    term: "To praise", 
    definition: "To express warm approval or admiration of.", 
    defTrans: "elogiar",
    example: "Mrs. Canales praised Albert's progress.", 
    exTrans: "<span style='color:#0077b6'>(A Sra. Canales elogiou o progresso do Albert.)</span>",
    audioFront: "TTS: To praise",
    audioBack: "TTS: Mrs. Canales praised Albert's progress." 
},
{ 
    term: "To practice", 
    definition: "To perform an activity repeatedly to improve proficiency.", 
    defTrans: "praticar",
    example: "You must practice so that you can succeed.", 
    exTrans: "<span style='color:#0077b6'>(Você deve praticar para que possa ter sucesso.)</span>",
    audioFront: "TTS: To practice",
    audioBack: "TTS: You must practice so that you can succeed." 
},
{ 
    term: "To promote", 
    definition: "To further the progress of something; to support or encourage.", 
    defTrans: "promover",
    example: "We should promote respect at school.", 
    exTrans: "<span style='color:#0077b6'>(Devemos promover o respeito na escola.)</span>",
    audioFront: "TTS: To promote",
    audioBack: "TTS: We should promote respect at school." 
},
{ 
    term: "To read", 
    definition: "To look at and comprehend the meaning of written matter.", 
    defTrans: "ler",
    example: "Celine loves to read psychology books.", 
    exTrans: "<span style='color:#0077b6'>(Celine adora ler livros de psicologia.)</span>",
    audioFront: "TTS: To read",
    audioBack: "TTS: Celine loves to read psychology books." 
},
{ 
    term: "To recognize", 
    definition: "To identify someone or something from having encountered them before.", 
    defTrans: "reconhecer",
    example: "It’s important to recognize our privileges.", 
    exTrans: "<span style='color:#0077b6'>(É importante reconhecer nossos privilégios.)</span>",
    audioFront: "TTS: To recognize",
    audioBack: "TTS: It’s important to recognize our privileges." 
},
{ 
    term: "To reconcile", 
    definition: "To restore friendly relations between.", 
    defTrans: "reconciliar",
    example: "The groups decided to reconcile.", 
    exTrans: "<span style='color:#0077b6'>(Os grupos decidiram se reconciliar.)</span>",
    audioFront: "TTS: To reconcile",
    audioBack: "TTS: The groups decided to reconcile." 
},
{ 
    term: "To remain", 
    definition: "To continue to exist or be in the same state.", 
    defTrans: "permanecer",
    example: "He remained optimistic during the crisis.", 
    exTrans: "<span style='color:#0077b6'>(Ele permaneceu otimista durante a crise.)</span>",
    audioFront: "TTS: To remain",
    audioBack: "TTS: He remained optimistic during the crisis." 
},
{ 
    term: "To remember", 
    definition: "To bring a fact, event, or situation back into one's mind.", 
    defTrans: "lembrar",
    example: "Remember to turn in your homework.", 
    exTrans: "<span style='color:#0077b6'>(Lembre-se de entregar sua lição de casa.)</span>",
    audioFront: "TTS: To remember",
    audioBack: "TTS: Remember to turn in your homework." 
},
{ 
    term: "To respect", 
    definition: "To have deep admiration for someone elicited by their qualities.", 
    defTrans: "respeitar",
    example: "You must respect everyone's way of life.", 
    exTrans: "<span style='color:#0077b6'>(Você deve respeitar o estilo de vida de todos.)</span>",
    audioFront: "TTS: To respect",
    audioBack: "TTS: You must respect everyone's way of life." 
},
{ 
    term: "To see", 
    definition: "To perceive with the eyes.", 
    defTrans: "ver",
    example: "I see your potential, Albert!", 
    exTrans: "<span style='color:#0077b6'>(Eu vejo o seu potencial, Albert!)</span>",
    audioFront: "TTS: To see",
    audioBack: "TTS: I see your potential, Albert!" 
},
{ 
    term: "To seek", 
    definition: "To attempt to find or desire to obtain something.", 
    defTrans: "buscar",
    example: "Always seek new knowledge.", 
    exTrans: "<span style='color:#0077b6'>(Busque sempre novos conhecimentos.)</span>",
    audioFront: "TTS: To seek",
    audioBack: "TTS: Always seek new knowledge." 
},
{ 
    term: "To separate", 
    definition: "To move or be apart.", 
    defTrans: "separar",
    example: "We shouldn't separate people by background.", 
    exTrans: "<span style='color:#0077b6'>(Não devemos separar as pessoas por sua origem.)</span>",
    audioFront: "TTS: To separate",
    audioBack: "TTS: We shouldn't separate people by background." 
},
{ 
    term: "To share", 
    definition: "To give a portion of something to another or others.", 
    defTrans: "compartilhar",
    example: "Please share your point of view with us.", 
    exTrans: "<span style='color:#0077b6'>(Por favor, compartilhe seu ponto de vista conosco.)</span>",
    audioFront: "TTS: To share",
    audioBack: "TTS: Please share your point of view with us." 
},
{ 
    term: "To show", 
    definition: "To allow or cause something to be visible; to demonstrate.", 
    defTrans: "mostrar",
    example: "Show empathy to those who are suffering.", 
    exTrans: "<span style='color:#0077b6'>(Mostre empatia por aqueles que estão sofrendo.)</span>",
    audioFront: "TTS: To show",
    audioBack: "TTS: Show empathy to those who are suffering." 
},
{ 
    term: "To sigh", 
    definition: "To emit a long, deep, audible breath expressing sadness or relief.", 
    defTrans: "suspirar",
    example: "He sighed because he was tired of waiting.", 
    exTrans: "<span style='color:#0077b6'>(Ele suspirou porque estava cansado de esperar.)</span>",
    audioFront: "TTS: To sigh",
    audioBack: "TTS: He sighed because he was tired of waiting." 
},
{ 
    term: "To speak", 
    definition: "To say something in order to convey information or an opinion.", 
    defTrans: "falar",
    example: "We need to speak up against racism.", 
    exTrans: "<span style='color:#0077b6'>(Precisamos falar contra o racismo.)</span>",
    audioFront: "TTS: To speak",
    audioBack: "TTS: We need to speak up against racism." 
},
{ 
    term: "To stand", 
    definition: "To be in an upright position; to tolerate.", 
    defTrans: "estar em pé / suportar",
    example: "We must stand together for justice.", 
    exTrans: "<span style='color:#0077b6'>(Devemos estar juntos pela justiça.)</span>",
    audioFront: "TTS: To stand",
    audioBack: "TTS: We must stand together for justice." 
},
{ 
    term: "To stay", 
    definition: "To remain in a same place.", 
    defTrans: "ficar",
    example: "Please stay calm during the discussion.", 
    exTrans: "<span style='color:#0077b6'>(Por favor, mantenha a calma durante a discussão.)</span>",
    audioFront: "TTS: To stay",
    audioBack: "TTS: Please stay calm during the discussion." 
},
{ 
    term: "To stop", 
    definition: "To cause an action or event to come to an end.", 
    defTrans: "parar",
    example: "We need to stop the microaggressions.", 
    exTrans: "<span style='color:#0077b6'>(Precisamos parar as microagressões.)</span>",
    audioFront: "TTS: To stop",
    audioBack: "TTS: We need to stop the microaggressions." 
},
// ADD THESE TO STEP 9 -> items: []
// ======================================================
// PART 10.3: FLASHCARDS (Verbs T-W & Identity)
// ======================================================
{ 
    term: "To support", 
    definition: "To give assistance to, especially financially or emotionally.", 
    defTrans: "apoiar",
    example: "I support the fight for gender equality.", 
    exTrans: "<span style='color:#0077b6'>(Eu apoio a luta pela igualdade de gênero.)</span>",
    audioFront: "TTS: To support",
    audioBack: "TTS: I support the fight for gender equality." 
},
{ 
    term: "To think", 
    definition: "To have a particular belief or idea.", 
    defTrans: "pensar / achar",
    example: "I think empathy is the most vital trait.", 
    exTrans: "<span style='color:#0077b6'>(Acho que a empatia é a característica mais vital.)</span>",
    audioFront: "TTS: To think",
    audioBack: "TTS: I think empathy is the most vital trait." 
},
{ 
    term: "To try", 
    definition: "To make an attempt or effort to do something.", 
    defTrans: "tentar",
    example: "We should try to understand others.", 
    exTrans: "<span style='color:#0077b6'>(Devemos tentar entender os outros.)</span>",
    audioFront: "TTS: To try",
    audioBack: "TTS: We should try to understand others." 
},
{ 
    term: "To understand", 
    definition: "To perceive the intended meaning of something.", 
    defTrans: "entender",
    example: "I understand why inclusion is important.", 
    exTrans: "<span style='color:#0077b6'>(Eu entendo por que a inclusão é importante.)</span>",
    audioFront: "TTS: To understand",
    audioBack: "TTS: I understand why inclusion is important." 
},
{ 
    term: "To value", 
    definition: "To consider someone or something to be important or beneficial.", 
    defTrans: "valorizar",
    example: "We value every individual in this team.", 
    exTrans: "<span style='color:#0077b6'>(Valorizamos cada indivíduo nesta equipe.)</span>",
    audioFront: "TTS: To value",
    audioBack: "TTS: We value every individual in this team." 
},
{ 
    term: "To welcome", 
    definition: "To greet someone in a polite or friendly way.", 
    defTrans: "acolher / dar as boas-vindas",
    example: "We welcome new students with a smile.", 
    exTrans: "<span style='color:#0077b6'>(Damos as boas-vindas aos novos alunos com um sorriso.)</span>",
    audioFront: "TTS: To welcome",
    audioBack: "TTS: We welcome new students with a smile." 
},
{ 
    term: "To work", 
    definition: "To be engaged in physical or mental activity to achieve a result.", 
    defTrans: "trabalhar",
    example: "We work hard on our school project.", 
    exTrans: "<span style='color:#0077b6'>(Trabalhamos duro em nosso projeto escolar.)</span>",
    audioFront: "TTS: To work",
    audioBack: "TTS: We work hard on our school project." 
},

// --- Identity & Society ---
{ 
    term: "Difference", 
    definition: "The way in which two or more things are not the same.", 
    defTrans: "diferença",
    example: "We celebrate the difference between cultures.", 
    exTrans: "<span style='color:#0077b6'>(Nós celebramos a diferença entre as culturas.)</span>",
    audioFront: "TTS: Difference",
    audioBack: "TTS: We celebrate the difference between cultures." 
},
{ 
    term: "Diversity", 
    definition: "The state of being diverse; a range of different things or people.", 
    defTrans: "diversidade",
    example: "Diversity makes our culture much richer.", 
    exTrans: "<span style='color:#0077b6'>(A diversidade torna nossa cultura muito mais rica.)</span>",
    audioFront: "TTS: Diversity",
    audioBack: "TTS: Diversity makes our culture much richer." 
},
{ 
    term: "Respect", 
    definition: "A feeling of deep admiration for someone.", 
    defTrans: "respeito",
    example: "You must respect everyone's way of life.", 
    exTrans: "<span style='color:#0077b6'>(Você deve respeitar o estilo de vida de todos.)</span>",
    audioFront: "TTS: Respect",
    audioBack: "TTS: You must respect everyone's way of life." 
},
{ 
    term: "Empathy", 
    definition: "The ability to understand and share the feelings of another.", 
    defTrans: "empatia",
    example: "Empathy is the ability to share feelings.", 
    exTrans: "<span style='color:#0077b6'>(Empatia é a habilidade de compartilhar sentimentos.)</span>",
    audioFront: "TTS: Empathy",
    audioBack: "TTS: Empathy is the ability to share feelings." 
},
{ 
    term: "Ethnicity", 
    definition: "Fact of belonging to a social group with a common national tradition.", 
    defTrans: "etnia",
    example: "People of every ethnicity are welcome here.", 
    exTrans: "<span style='color:#0077b6'>(Pessoas de todas as etnias são bem-vindas aqui.)</span>",
    audioFront: "TTS: Ethnicity",
    audioBack: "TTS: People of every ethnicity are welcome here." 
},
{ 
    term: "Identity", 
    definition: "The fact of being who or what a person is.", 
    defTrans: "identidade",
    example: "Your identity is unique to you.", 
    exTrans: "<span style='color:#0077b6'>(Sua identidade é única para você.)</span>",
    audioFront: "TTS: Identity",
    audioBack: "TTS: Your identity is unique to you." 
},
{ 
    term: "Individual", 
    definition: "A single human being as distinct from a group.", 
    defTrans: "indivíduo",
    example: "We value every individual in this team.", 
    exTrans: "<span style='color:#0077b6'>(Valorizamos cada indivíduo nesta equipe.)</span>",
    audioFront: "TTS: Individual",
    audioBack: "TTS: We value every individual in this team." 
},
{ 
    term: "Way of life", 
    definition: "The typical way of living of an individual or group.", 
    defTrans: "estilo de vida",
    example: "We must respect their way of life.", 
    exTrans: "<span style='color:#0077b6'>(Devemos respeitar o estilo de vida deles.)</span>",
    audioFront: "TTS: Way of life",
    audioBack: "TTS: We must respect their way of life." 
},
{ 
    term: "Wheelchair", 
    definition: "A chair with wheels for use by a person who is unable to walk.", 
    defTrans: "cadeira de rodas",
    example: "The school is accessible for wheelchairs.", 
    exTrans: "<span style='color:#0077b6'>(A escola é acessível para cadeiras de rodas.)</span>",
    audioFront: "TTS: Wheelchair",
    audioBack: "TTS: The school is accessible for wheelchairs." 
},
// ADD THESE TO STEP 9 -> items: []
// ======================================================
// PART 10.4: FLASHCARDS (Positive Concepts & Challenges)
// ======================================================
{ 
    term: "Acceptance", 
    definition: "The action of consenting to receive or undertake something offered.", 
    defTrans: "aceitação",
    example: "Acceptance is the first step toward peace.", 
    exTrans: "<span style='color:#0077b6'>(A aceitação é o primeiro passo para a paz.)</span>",
    audioFront: "TTS: Acceptance",
    audioBack: "TTS: Acceptance is the first step toward peace." 
},
{ 
    term: "Advocate", 
    definition: "A person who publicly supports or recommends a particular cause.", 
    defTrans: "defensor(a)",
    example: "Malala is a famous advocate for education.", 
    exTrans: "<span style='color:#0077b6'>(Malala é uma famosa defensora da educação.)</span>",
    audioFront: "TTS: Advocate",
    audioBack: "TTS: Malala is a famous advocate for education." 
},
{ 
    term: "Inclusion", 
    definition: "The practice of providing equal access to opportunities for all.", 
    defTrans: "inclusão",
    example: "Inclusion means everyone feels welcome.", 
    exTrans: "<span style='color:#0077b6'>(Inclusão significa que todos se sentem bem-vindos.)</span>",
    audioFront: "TTS: Inclusion",
    audioBack: "TTS: Inclusion means everyone feels welcome." 
},
{ 
    term: "Inclusive", 
    definition: "Including or covering all the services, facilities, or items normally expected.", 
    defTrans: "inclusivo(a)",
    example: "We must create a more inclusive school.", 
    exTrans: "<span style='color:#0077b6'>(Devemos criar uma escola mais inclusiva.)</span>",
    audioFront: "TTS: Inclusive",
    audioBack: "TTS: We must create a more inclusive school." 
},
{ 
    term: "Equality", 
    definition: "The state of being equal, especially in status, rights, and opportunities.", 
    defTrans: "igualdade",
    example: "Gender equality is a global goal.", 
    exTrans: "<span style='color:#0077b6'>(A igualdade de gênero é uma meta global.)</span>",
    audioFront: "TTS: Equality",
    audioBack: "TTS: Gender equality is a global goal." 
},
{ 
    term: "Resilience", 
    definition: "The capacity to recover quickly from difficulties; toughness.", 
    defTrans: "resiliência",
    example: "She showed great resilience after the fall.", 
    exTrans: "<span style='color:#0077b6'>(Ela mostrou grande resiliência após a queda.)</span>",
    audioFront: "TTS: Resilience",
    audioBack: "TTS: She showed great resilience after the fall." 
},
{ 
    term: "Optimism", 
    definition: "Hopefulness and confidence about the future.", 
    defTrans: "otimismo",
    example: "Optimism helps us face difficult times.", 
    exTrans: "<span style='color:#0077b6'>(O otimismo nos ajuda a enfrentar tempos difíceis.)</span>",
    audioFront: "TTS: Optimism",
    audioBack: "TTS: Optimism helps us face difficult times." 
},
{ 
    term: "Reconciliation", 
    definition: "The restoration of friendly relations.", 
    defTrans: "reconciliação",
    example: "The groups worked toward reconciliation.", 
    exTrans: "<span style='color:#0077b6'>(Os grupos trabalharam pela reconciliação.)</span>",
    audioFront: "TTS: Reconciliation",
    audioBack: "TTS: The groups worked toward reconciliation." 
},
{ 
    term: "Prejudice", 
    definition: "Preconceived opinion that is not based on reason or actual experience.", 
    defTrans: "preconceito",
    example: "We must fight against prejudice every day.", 
    exTrans: "<span style='color:#0077b6'>(Devemos lutar contra o preconceito todos os dias.)</span>",
    audioFront: "TTS: Prejudice",
    audioBack: "TTS: We must fight against prejudice every day." 
},
{ 
    term: "Stereotype", 
    definition: "A widely held but oversimplified image of a particular person or thing.", 
    defTrans: "estereótipo",
    example: "A stereotype is an unfair fixed idea.", 
    exTrans: "<span style='color:#0077b6'>(Um estereótipo é uma ideia fixa injusta.)</span>",
    audioFront: "TTS: Stereotype",
    audioBack: "TTS: A stereotype is an unfair fixed idea." 
},
{ 
    term: "Discrimination", 
    definition: "The unjust or prejudicial treatment of different categories of people.", 
    defTrans: "discriminação",
    example: "Discrimination at work is illegal.", 
    exTrans: "<span style='color:#0077b6'>(A discriminação no trabalho é ilegal.)</span>",
    audioFront: "TTS: Discrimination",
    audioBack: "TTS: Discrimination at work is illegal." 
},
{ 
    term: "Racism / Racist", 
    definition: "Prejudice or antagonism directed against someone of a different race.", 
    defTrans: "racismo / racista",
    example: "Racism is a serious form of hatred.", 
    exTrans: "<span style='color:#0077b6'>(O racismo é uma forma séria de ódio.)</span>",
    audioFront: "TTS: Racism or Racist",
    audioBack: "TTS: Racism is a serious form of hatred." 
},
{ 
    term: "Ableism / Ableist", 
    definition: "Discrimination in favor of able-bodied people.", 
    defTrans: "capacitismo / capacitista",
    example: "Ableism affects people with disabilities.", 
    exTrans: "<span style='color:#0077b6'>(O capacitismo afeta pessoas com deficiências.)</span>",
    audioFront: "TTS: Ableism or Ableist",
    audioBack: "TTS: Ableism affects people with disabilities." 
},
{ 
    term: "Xenophobia", 
    definition: "Dislike of or prejudice against people from other countries.", 
    defTrans: "xenofobia",
    example: "Xenophobia is the fear of foreigners.", 
    exTrans: "<span style='color:#0077b6'>(Xenofobia é o medo de estrangeiros.)</span>",
    audioFront: "TTS: Xenophobia",
    audioBack: "TTS: Xenophobia is the fear of foreigners." 
},
{ 
    term: "Intolerance", 
    definition: "Unwillingness to accept views or behavior that differ from one's own.", 
    defTrans: "intolerância",
    example: "Intolerance can destroy a community.", 
    exTrans: "<span style='color:#0077b6'>(A intolerância pode destruir uma comunidade.)</span>",
    audioFront: "TTS: Intolerance",
    audioBack: "TTS: Intolerance can destroy a community." 
},
{ 
    term: "Hatred", 
    definition: "Intense dislike or ill will.", 
    defTrans: "ódio",
    example: "Love is much stronger than hatred.", 
    exTrans: "<span style='color:#0077b6'>(O amor é muito mais forte que o ódio.)</span>",
    audioFront: "TTS: Hatred",
    audioBack: "TTS: Love is much stronger than hatred." 
},
{ 
    term: "Segregation", 
    definition: "The action of setting someone or something apart from others.", 
    defTrans: "segregação",
    example: "The fence felt like a wall of segregation.", 
    exTrans: "<span style='color:#0077b6'>(A cerca parecia um muro de segregação.)</span>",
    audioFront: "TTS: Segregation",
    audioBack: "TTS: The fence felt like a wall of segregation." 
},
{ 
    term: "Microaggression", 
    definition: "A statement or action regarded as indirect or subtle discrimination.", 
    defTrans: "microagressão",
    example: "A subtle insult is often a microaggression.", 
    exTrans: "<span style='color:#0077b6'>(Um insulto sutil é muitas vezes uma microagressão.)</span>",
    audioFront: "TTS: Microaggression",
    audioBack: "TTS: A subtle insult is often a microaggression." 
},
// ADD THESE TO STEP 9 -> items: []
// ======================================================
// PART 10.5: FLASHCARDS (False Cognates & Grammar)
// ======================================================
// --- False Cognates (Tricky Words) ---
{ 
    term: "Actually (False Cognate)", 
    definition: "Used to provide more detail or correct a statement.", 
    defTrans: "na verdade / realmente (não 'atualmente')",
    example: "Actually, I prefer the blue t-shirt.", 
    exTrans: "<span style='color:#0077b6'>(Na verdade, eu prefiro a camiseta azul.)</span>",
    audioFront: "TTS: Actually",
    audioBack: "TTS: Actually, I prefer the blue t-shirt." 
},
{ 
    term: "Eventually (False Cognate)", 
    definition: "In the end, especially after a long time or a lot of effort.", 
    defTrans: "finalmente / por fim (não 'eventualmente')",
    example: "They eventually finished the long project.", 
    exTrans: "<span style='color:#0077b6'>(Eles finalmente terminaram o longo projeto.)</span>",
    audioFront: "TTS: Eventually",
    audioBack: "TTS: They eventually finished the long project." 
},
{ 
    term: "Sensible (False Cognate)", 
    definition: "Done or chosen in accordance with wisdom or prudence.", 
    defTrans: "sensato / razoável (não 'sensível')",
    example: "Choosing to cycle was a sensible decision.", 
    exTrans: "<span style='color:#0077b6'>(Escolher andar de bicicleta foi uma decisão sensata.)</span>",
    audioFront: "TTS: Sensible",
    audioBack: "TTS: Choosing to cycle was a sensible decision." 
},
{ 
    term: "Support (False Cognate)", 
    definition: "To give help, encouragement, or assistance to someone.", 
    defTrans: "apoiar (não 'suportar/aguentar')",
    example: "My parents support my career choice.", 
    exTrans: "<span style='color:#0077b6'>(Meus pais apoiam minha escolha de carreira.)</span>",
    audioFront: "TTS: Support",
    audioBack: "TTS: My parents support my career choice." 
},
{ 
    term: "Library (False Cognate)", 
    definition: "A building or room containing collections of books for use or borrowing.", 
    defTrans: "biblioteca (não 'livraria')",
    example: "He went to the library to research the civil rights movement.", 
    exTrans: "<span style='color:#0077b6'>(Ele foi à biblioteca para pesquisar o movimento dos direitos civis.)</span>",
    audioFront: "TTS: Library",
    audioBack: "TTS: He went to the library to research the civil rights movement." 
},
{ 
    term: "Parents (False Cognate)", 
    definition: "A person's father or mother.", 
    defTrans: "pais (não 'parentes')",
    example: "My parents are coming to the meeting.", 
    exTrans: "<span style='color:#0077b6'>(Meus pais virão à reunião.)</span>",
    audioFront: "TTS: Parents",
    audioBack: "TTS: My parents are coming to the meeting." 
},
{ 
    term: "Fabric (False Cognate)", 
    definition: "Cloth or other material produced by weaving or knitting fibers.", 
    defTrans: "tecido (não 'fábrica')",
    example: "This shirt is made of cotton fabric.", 
    exTrans: "<span style='color:#0077b6'>(Esta camisa é feita de tecido de algodão.)</span>",
    audioFront: "TTS: Fabric",
    audioBack: "TTS: This shirt is made of cotton fabric." 
},

// --- Grammar: Comparison & Order ---
{ 
    term: "Comparative of Equality", 
    definition: "Structure: as + adjective + as.", 
    defTrans: "tão + adjetivo + quanto",
    example: "Empathy is as important as intelligence.", 
    exTrans: "<span style='color:#0077b6'>(A empatia é tão importante quanto a inteligência.)</span>",
    audioFront: "TTS: Comparative of Equality",
    audioBack: "TTS: Empathy is as important as intelligence." 
},
{ 
    term: "Comparative (Superiority - Short)", 
    definition: "Structure: adjective + -er + than.", 
    defTrans: "adjetivo curto + -er + do que",
    example: "Pedro is kinder than he seems.", 
    exTrans: "<span style='color:#0077b6'>(Pedro é mais gentil do que parece.)</span>",
    audioFront: "TTS: Comparative of Superiority with short adjectives",
    audioBack: "TTS: Pedro is kinder than he seems." 
},
{ 
    term: "Comparative (Superiority - Long)", 
    definition: "Structure: more + adjective + than.", 
    defTrans: "mais + adjetivo longo + do que",
    example: "This school is more inclusive than mine.", 
    exTrans: "<span style='color:#0077b6'>(Esta escola é mais inclusiva que a minha.)</span>",
    audioFront: "TTS: Comparative of Superiority with long adjectives",
    audioBack: "TTS: This school is more inclusive than mine." 
},
{ 
    term: "Comparative of Inferiority", 
    definition: "Structure: less + adjective + than.", 
    defTrans: "menos + adjetivo + do que",
    example: "He is less sensible than his brother.", 
    exTrans: "<span style='color:#0077b6'>(Ele é menos sensato do que seu irmão.)</span>",
    audioFront: "TTS: Comparative of Inferiority",
    audioBack: "TTS: He is less sensible than his brother." 
},
{ 
    term: "Superlative (Superiority - Short)", 
    definition: "Structure: the + adjective + -est.", 
    defTrans: "o/a + adjetivo curto + -est",
    example: "She is the bravest girl in the world.", 
    exTrans: "<span style='color:#0077b6'>(Ela é a menina mais corajosa do mundo.)</span>",
    audioFront: "TTS: Superlative of Superiority with short adjectives",
    audioBack: "TTS: She is the bravest girl in the world." 
},
{ 
    term: "Superlative (Superiority - Long)", 
    definition: "Structure: the most + adjective.", 
    defTrans: "o/a mais + adjetivo longo",
    example: "This is the most impactful work.", 
    exTrans: "<span style='color:#0077b6'>(Este é o trabalho mais impactante.)</span>",
    audioFront: "TTS: Superlative of Superiority with long adjectives",
    audioBack: "TTS: This is the most impactful work." 
},
{ 
    term: "Superlative of Inferiority", 
    definition: "Structure: the least + adjective.", 
    defTrans: "o/a menos + adjetivo",
    example: "That was the least helpful comment.", 
    exTrans: "<span style='color:#0077b6'>(Aquele foi o comentário menos útil.)</span>",
    audioFront: "TTS: Superlative of Inferiority",
    audioBack: "TTS: That was the least helpful comment." 
},
{ 
    term: "Adjective Order (OSASCOMP)", 
    definition: "Sequence: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose.", 
    defTrans: "A ordem correta dos adjetivos",
    example: "She has beautiful long dark hair.", 
    exTrans: "<span style='color:#0077b6'>(Ela tem um lindo cabelo longo e escuro.)</span>",
    audioFront: "TTS: Adjective Order, OSASCOMP",
    audioBack: "TTS: She has beautiful long dark hair." 
}

            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Part 1: Context, Identity, and Positive Concepts)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { topic: "Context", term: "as-important-as", definition: "An expression of equality used to compare two things.", translation: "tão importante quanto" },
        { topic: "Context", term: "welcoming-environment", definition: "A place where everyone feels accepted and valued.", translation: "ambiente acolhedor" },
        { topic: "Context", term: "everyone", definition: "Used to refer to all the people in a group.", translation: "todos" },
        { topic: "Context", term: "impactful", definition: "Having a major impact or effect.", translation: "impactante" },
        { topic: "Context", term: "solution", definition: "A means of solving a problem or dealing with a difficult situation.", translation: "solução" },
        { topic: "Context", term: "initiative", definition: "An act or strategy intended to resolve a difficulty.", translation: "iniciativa" },
        { topic: "Context", term: "face", definition: "To confront and deal with a difficult situation.", translation: "encarar / enfrentar" },
        { topic: "Context", term: "hardship", definition: "Severe suffering or privation.", translation: "dificuldade / privação" },
        { topic: "Context", term: "make-up-for", definition: "To do something that corrects a bad situation or mistake.", translation: "compensar por" },
        { topic: "Context", term: "lack-of-integration", definition: "A situation where a group is not fully included in a community.", translation: "falta de integração" },
        { topic: "Context", term: "actually", definition: "A false cognate used to express the truth of a situation; means 'really'.", translation: "na verdade / realmente" },
        { topic: "Context", term: "intolerance", definition: "Unwillingness to accept views or behavior that differ from one's own.", translation: "intolerância" },
        { topic: "Context", term: "worse-than", definition: "The irregular comparative form of the adjective 'bad'.", translation: "pior do que" },
        { topic: "Context", term: "microaggression", definition: "A statement or action regarded as indirect or subtle discrimination.", translation: "microagressão" },
        { topic: "Context", term: "proactive", definition: "Creating or controlling a situation rather than just responding to it.", translation: "proativo(a)" },
        { topic: "Context", term: "ought-to", definition: "Used to indicate duty or correctness, typically when giving advice.", translation: "deveria" },
        { topic: "Context", term: "break-down", definition: "To destroy a barrier or an unfair social structure.", translation: "romper / derrubar" },
        { topic: "Context", term: "break-through", definition: "To achieve a significant development or discovery.", translation: "conquistar um avanço" },
        { topic: "Context", term: "less-sensible-than", definition: "Showing less wisdom or prudence than another option.", translation: "menos sensato do que" },
        { topic: "Context", term: "diverse", definition: "Showing a great deal of variety; very different.", translation: "diverso(a)" },
        { topic: "Context", term: "inclusive", definition: "Including or covering all services or people normally expected.", translation: "inclusivo(a)" },
        { topic: "Context", term: "break-the-ice", definition: "An idiom meaning to do or say something to relieve tension.", translation: "quebrar o gelo" },
        { topic: "Context", term: "creative", definition: "Having the ability to create or invent something original.", translation: "criativo(a)" },
        { topic: "Context", term: "joke", definition: "A thing that someone says to cause amusement or laughter.", translation: "piada" },
        { topic: "Context", term: "speech", definition: "A formal address or discourse delivered to an audience.", translation: "discurso" },
        { topic: "Context", term: "points-of-view", definition: "Particular attitudes or ways of considering a matter.", translation: "pontos de vista" },
        { topic: "Context", term: "as-crucial-as", definition: "An expression of equality meaning something is of identical importance.", translation: "tão crucial quanto" },
        { topic: "Context", term: "be-the-change", definition: "An inspirational phrase encouraging individual action to improve the world.", translation: "seja a mudança" },
        { topic: "Context", term: "make-a-difference", definition: "To have a positive effect on a person or situation.", translation: "fazer a diferença" },

        // --- TOPIC 2: IDENTITY & SOCIETY ---
        { topic: "Identity & Society", term: "difference", definition: "The way in which two or more things are not the same.", translation: "diferença" },
        { topic: "Identity & Society", term: "diversity", definition: "The state of being diverse; a range of different things or people.", translation: "diversidade" },
        { topic: "Identity & Society", term: "respect", definition: "A feeling of deep admiration for someone elicited by their qualities.", translation: "respeito" },
        { topic: "Identity & Society", term: "empathy", definition: "The ability to understand and share the feelings of another.", translation: "empatia" },
        { topic: "Identity & Society", term: "ethnicity", definition: "Fact of belonging to a social group with a common national tradition.", translation: "etnia" },
        { topic: "Identity & Society", term: "identity", definition: "The fact of being who or what a person or thing is.", translation: "identidade" },
        { topic: "Identity & Society", term: "individual", definition: "A single human being as distinct from a group.", translation: "indivíduo" },
        { topic: "Identity & Society", term: "community", definition: "A group of people living in the same place or having a particular characteristic in common.", translation: "comunidade" },
        { topic: "Identity & Society", term: "education", definition: "The process of receiving or giving systematic instruction.", translation: "educação" },
        { topic: "Identity & Society", term: "fair", definition: "Treating people equally without favoritism or discrimination.", translation: "justo(a)" },
        { topic: "Identity & Society", term: "unfair", definition: "Not based on or behaving according to the principles of equality and justice.", translation: "injusto(a)" },
        { topic: "Identity & Society", term: "way-of-life", definition: "The typical way of living of an individual or group.", translation: "estilo de vida" },
        { topic: "Identity & Society", term: "wheelchair", definition: "A chair fitted with wheels for use as a means of transport.", translation: "cadeira de rodas" },

        // --- TOPIC 3: POSITIVE CONCEPTS ---
        { topic: "Positive Concepts", term: "acceptance", definition: "The action of consenting to receive or undertake something offered.", translation: "aceitação" },
        { topic: "Positive Concepts", term: "advocate", definition: "A person who publicly supports or recommends a particular cause.", translation: "defensor(a)" },
        { topic: "Positive Concepts", term: "inclusion", definition: "The practice of providing equal access to opportunities for all.", translation: "inclusão" },
        { topic: "Positive Concepts", term: "equality", definition: "The state of being equal, especially in status and rights.", translation: "igualdade" },
        { topic: "Positive Concepts", term: "resilience", definition: "The capacity to recover quickly from difficulties; toughness.", translation: "resiliência" },
        { topic: "Positive Concepts", term: "optimism", definition: "Hopefulness and confidence about the future.", translation: "otimismo" },
        { topic: "Positive Concepts", term: "reconciliation", definition: "The restoration of friendly relations.", translation: "reconciliação" },
        // --- TOPIC 4: CHALLENGES & NEGATIVES ---
        { topic: "Challenges", term: "prejudice", definition: "A preconceived opinion that is not based on reason or actual experience.", translation: "preconceito" },
        { topic: "Challenges", term: "stereotype", definition: "A widely held but oversimplified image or idea of a particular group.", translation: "estereótipo" },
        { topic: "Challenges", term: "discrimination", definition: "The unjust or prejudicial treatment of different categories of people.", translation: "discriminação" },
        { topic: "Challenges", term: "racism", definition: "Prejudice or antagonism directed against someone of a different race.", translation: "racismo" },
        { topic: "Challenges", term: "racist", definition: "A person who is prejudiced against or antagonistic toward people on the basis of their membership in a particular racial or ethnic group.", translation: "racista" },
        { topic: "Challenges", term: "ableism", definition: "Discrimination in favor of able-bodied people.", translation: "capacitismo" },
        { topic: "Challenges", term: "ableist", definition: "A person who discriminates against people with disabilities.", translation: "capacitista" },
        { topic: "Challenges", term: "xenophobia", definition: "Dislike of or prejudice against people from other countries.", translation: "xenofobia" },
        { topic: "Challenges", term: "intolerance", definition: "Unwillingness to accept views, beliefs, or behavior that differ from one's own.", translation: "intolerância" },
        { topic: "Challenges", term: "hatred", definition: "Intense dislike or ill will.", translation: "ódio" },
        { topic: "Challenges", term: "segregation", definition: "The action or state of setting someone or something apart from other people.", translation: "segregação" },
        { topic: "Challenges", term: "microaggression", definition: "A statement or action regarded as an instance of indirect, subtle, or unintentional discrimination.", translation: "microagressão" },

        // --- TOPIC 5: FALSE COGNATES (TRICKY WORDS!) ---
        { topic: "False Cognates", term: "prejudice-cognate", definition: "Actual: Preconceito. (It does NOT mean 'prejudicar'.)", translation: "preconceito" },
        { topic: "False Cognates", term: "sensible", definition: "Actual: Sensato / Razoável. (It does NOT mean 'sensível'.)", translation: "sensato / razoável" },
        { topic: "False Cognates", term: "actually", definition: "Actual: Na verdade / Realmente. (It does NOT mean 'atualmente'.)", translation: "na verdade / realmente" },
        { topic: "False Cognates", term: "eventually", definition: "Actual: Finalmente / Por fim. (It does NOT mean 'eventualmente'.)", translation: "finalmente / por fim" },
        { topic: "False Cognates", term: "support-cognate", definition: "Actual: Apoiar. (It does NOT mean 'suportar / aguentar'.)", translation: "apoiar" },
        { topic: "False Cognates", term: "library", definition: "Actual: Biblioteca. (It does NOT mean 'livraria'.)", translation: "biblioteca" },
        { topic: "False Cognates", term: "parents", definition: "Actual: Pais. (It does NOT mean 'parentes'.)", translation: "pais" },
        { topic: "False Cognates", term: "fabric", definition: "Actual: Tecido. (It does NOT mean 'fábrica'.)", translation: "tecido" },
        // --- TOPIC 6: VERBS (Action & Resilience) ---
        { topic: "Verbs", term: "accept", definition: "To recognize or take on a new idea or condition.", translation: "aceitar" },
        { topic: "Verbs", term: "achieve", definition: "To successfully bring about or reach a desired objective.", translation: "alcançar / conquistar" },
        { topic: "Verbs", term: "agree", definition: "To have the same opinion as another person.", translation: "concordar" },
        { topic: "Verbs", term: "apologize", definition: "To say sorry for a mistake or for disturbing someone.", translation: "desculpar-se" },
        { topic: "Verbs", term: "believe", definition: "To accept that something is true or possible.", translation: "acreditar" },
        { topic: "Verbs", term: "build", definition: "To construct or create a community or structure.", translation: "construir" },
        { topic: "Verbs", term: "campaign", definition: "To work in an organized and active way toward a particular goal.", translation: "fazer campanha" },
        { topic: "Verbs", term: "challenge", definition: "To dispute the truth or validity of something.", translation: "desafiar" },
        { topic: "Verbs", term: "change", definition: "To make or become different.", translation: "mudar" },
        { topic: "Verbs", term: "compare", definition: "To note the similarity or dissimilarity between things.", translation: "comparar" },
        { topic: "Verbs", term: "create", definition: "To bring something into existence.", translation: "criar" },
        { topic: "Verbs", term: "deserve", definition: "To be worthy of something, like a reward or respect.", translation: "merecer" },
        { topic: "Verbs", term: "endure", definition: "To suffer something painful or difficult patiently.", translation: "suportar / aguentar" },
        { topic: "Verbs", term: "inspire", definition: "To fill someone with the ability to do or feel something creative.", translation: "inspirar" },
        { topic: "Verbs", term: "overcome", definition: "To succeed in dealing with a problem or difficulty.", translation: "superar" },
        { topic: "Verbs", term: "promote", definition: "To further the progress of something; to support.", translation: "promover" },
        { topic: "Verbs", term: "recognize", definition: "To identify someone or something from having encountered them before.", translation: "reconhecer" },
        { topic: "Verbs", term: "reconcile", definition: "To restore friendly relations between groups.", translation: "reconciliar" },
        { topic: "Verbs", term: "remain", definition: "To continue to exist or be in the same state.", translation: "permanecer" },
        { topic: "Verbs", term: "respect", definition: "A feeling of deep admiration elicited by qualities.", translation: "respeitar" },
        { topic: "Verbs", term: "separate", definition: "To move or be apart.", translation: "separar" },
        { topic: "Verbs", term: "show", definition: "To allow something to be visible; to demonstrate.", translation: "mostrar" },
        { topic: "Verbs", term: "speak", definition: "To say something in order to convey information.", translation: "falar" },
        { topic: "Verbs", term: "stand", definition: "To be in an upright position; to tolerate.", translation: "estar em pé / suportar" },
        { topic: "Verbs", term: "support", definition: "To give help or encouragement to someone.", translation: "apoiar" },
        { topic: "Verbs", term: "understand", definition: "To perceive the intended meaning of something.", translation: "entender" },
        { topic: "Verbs", term: "value", definition: "To consider someone or something to be important.", translation: "valorizar" },

        // --- TOPIC 7: GRAMMAR REFERENCE ---
        { topic: "Grammar", term: "comparatives", definition: "Structures used to compare two things (e.g., better than, more inclusive than).", translation: "comparativos" },
        { topic: "Grammar", term: "superlatives", definition: "Structures used to describe the highest degree (e.g., the best, the most brave).", translation: "superlativos" },
        { topic: "Grammar", term: "equality", definition: "The comparison 'as + adjective + as' showing two things are the same.", translation: "igualdade" },
        { topic: "Grammar", term: "superiority", definition: "The comparison showing one thing is 'more' than another.", translation: "superioridade" },
        { topic: "Grammar", term: "inferiority", definition: "The comparison showing one thing is 'less' or 'the least' of a quality.", translation: "inferioridade" },
        { topic: "Grammar", term: "adjective-order", definition: "The specific OSASCOMP sequence of adjectives before a noun.", translation: "ordem dos adjetivos" },
        { topic: "Grammar", term: "false-cognates", definition: "Words that look similar in two languages but have different meanings.", translation: "falsos cognatos" },
        { topic: "Grammar", term: "phrasal-verbs", definition: "A verb combined with a particle that changes its meaning (e.g., break down).", translation: "verbos frasais" }
    ]
});