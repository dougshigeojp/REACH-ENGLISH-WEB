/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em2-2-6", 
    grade: "High School 2nd Grade",       
    bimester: "2",   
    chapter: "6",    
    chapterTitle: "Learning from Hard Times: Resilience and Optimism", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER (No tooltips per request)
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss financial crises and global recession.<br>• Use Relative Clauses (who, which, that, whose, where, when) to add detail.<br>• Differentiate between defining and non-defining relative clauses.<br>• Express concepts of resilience and optimism.<br>• Master vocabulary related to the economy and personal growth.",
            welcome: "Hello, champions of resilience! I'm Mr. D!<br>Life isn't always easy; sometimes it presents us with \"hard times.\" Whether it's a global recession or a personal challenge, the way we respond is what defines us. Today, we are going to open the door to a positive outlook! We will learn how to describe the people who inspire us and the situations where we found a silver lining. We'll master the grammar of details so you can tell powerful stories of strength. Are you ready to bounce back and look at the bright side? Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss financial crises and global recession. Use Relative Clauses to add detail. Differentiate between defining and non-defining relative clauses. Express concepts of resilience and optimism. Master vocabulary related to the economy and personal growth.",
                welcome: "TTS: Hello, champions of resilience! I'm Mr. D! Life isn't always easy; sometimes it presents us with hard times. Whether it's a global recession or a personal challenge, the way we respond is what defines us. Today, we are going to open the door to a positive outlook! We will learn how to describe the people who inspire us and the situations where we found a silver lining. We'll master the grammar of details so you can tell powerful stories of strength. Are you ready to bounce back and look at the bright side? Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Albert and Celine are sitting in the school library. Albert is looking at a news report about the global economy.", 
            contextAudio: "audio/em2-1-6/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "Celine, I was reading about the 2008 [financial crisis](tooltip:crisis) which [started](tooltip:start) in the US. It’s scary how much it [affected](tooltip:affect) the whole world." 
                },
                { 
                    speaker: "Celine", 
                    text: "It was a [hard time](tooltip:hard-times), Albert. My uncle, who [owns](tooltip:own) a small restaurant, nearly went [bankrupt](tooltip:bankrupt). He [struggled](tooltip:struggle) to pay his [debts](tooltip:debt) because [income](tooltip:income) [decreased](tooltip:decrease) so fast." 
                },
                { 
                    speaker: "Albert", 
                    text: "That sounds like a [tragedy](tooltip:tragedy). How did he [cope](tooltip:cope)? My parents, [whose](tooltip:whose) [savings](tooltip:savings) were [hit](tooltip:hit) during the [pandemic](tooltip:pandemic), always say that [money](tooltip:money) isn't guaranteed." 
                },
                { 
                    speaker: "Celine", 
                    text: "He showed great [resilience](tooltip:resilience)! He [developed](tooltip:develop) a delivery service, which actually [saved](tooltip:save) his business. He learned that he had to [adapt](tooltip:adapt)." 
                },
                { 
                    speaker: "Albert", 
                    text: "I [believe](tooltip:believe) that’s the only way to [overcome](tooltip:overcome) [adversity](tooltip:adversity). I [suppose](tooltip:suppose) the [market](tooltip:market) is a place where [difficulty](tooltip:difficulty) can lead to [innovation](tooltip:innovation)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Exactly! [Optimism](tooltip:optimism) is the feeling that helps us [bounce back](tooltip:bounce-back). Look at Malala Yousafzai; she is an [activist](tooltip:activist) who faced [hardship](tooltip:hardship) but remained [hopeful](tooltip:hope)." 
                },
                { 
                    speaker: "Albert", 
                    text: "She’s a true [inspiration](tooltip:inspiration). We need to focus on the [silver lining](tooltip:silver-lining). Let’s [discuss](tooltip:discuss) how our [community](tooltip:community) can [support](tooltip:support) those who [lost](tooltip:lose) their [jobs](tooltip:job-loss)." 
                },
                { 
                    speaker: "Celine", 
                    text: "I [agree](tooltip:agree). Let’s [propose](tooltip:propose) a [plan](tooltip:plan) where everyone [contributes](tooltip:contributes). It’s time to act!" 
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
                    audio: "TTS: Adapt. Affect. Agree. Be. Become. Begin. Believe. Bounce back. Buy. Change. Close. Come together. Connect. Cope. Cause. Decrease. Define. Demonstrate. Develop. Discover. Discuss. Emphasize. End. Experience. Face. Feel. Find. Focus. Force. Guarantee. Happen. Have. Help. Hit. Inspire. Interest. Interview. Invest. Keep. Learn. Lead to. Limit. Live. Lose. Love.",
                    items: [
                        { term: "To adapt", trans: "adaptar-se" },
                        { term: "To affect", trans: "afetar" },
                        { term: "To agree", trans: "concordar" },
                        { term: "To be", trans: "ser / estar" },
                        { term: "To become", trans: "tornar-se" },
                        { term: "To begin", trans: "começar" },
                        { term: "To believe", trans: "acreditar" },
                        { term: "To bounce back", trans: "recuperar-se / dar a volta por cima" },
                        { term: "To buy", trans: "comprar" },
                        { term: "To change", trans: "mudar" },
                        { term: "To close", trans: "fechar" },
                        { term: "To come together", trans: "unir-se / juntar-se" },
                        { term: "To connect", trans: "conectar" },
                        { term: "To cope", trans: "lidar com / suportar" },
                        { term: "To cause", trans: "causar" },
                        { term: "To decrease", trans: "diminuir" },
                        { term: "To define", trans: "definir" },
                        { term: "To demonstrate", trans: "demonstrar" },
                        { term: "To develop", trans: "desenvolver" },
                        { term: "To discover", trans: "descobrir" },
                        { term: "To discuss", trans: "discutir / debater" },
                        { term: "To emphasize", trans: "enfatizar" },
                        { term: "To end", trans: "terminar / acabar" },
                        { term: "To experience", trans: "vivenciar / passar por" },
                        { term: "To face", trans: "encarar / enfrentar" },
                        { term: "To feel", trans: "sentir" },
                        { term: "To find", trans: "encontrar" },
                        { term: "To focus", trans: "focar" },
                        { term: "To force", trans: "forçar / obrigar" },
                        { term: "To guarantee", trans: "garantir" },
                        { term: "To happen", trans: "acontecer" },
                        { term: "To have", trans: "ter" },
                        { term: "To help", trans: "ajudar" },
                        { term: "To hit", trans: "atingir" },
                        { term: "To inspire", trans: "inspirar" },
                        { term: "To interest", trans: "interessar" },
                        { term: "To interview", trans: "entrevistar" },
                        { term: "To invest", trans: "investir" },
                        { term: "To keep", trans: "manter / guardar" },
                        { term: "To learn", trans: "aprender" },
                        { term: "To lead to", trans: "levar a" },
                        { term: "To limit", trans: "limitar" },
                        { term: "To live", trans: "viver" },
                        { term: "To lose", trans: "perder" },
                        { term: "To love", trans: "amar" }
                    ]
                },
                {
                    title: "Verbs M-W",
                    audio: "TTS: Manage. Need. Omit. Overcome. Own. Present. Propose. Read. Receive. Rely on. Remember. Show. Speak. Start. Stop. Struggle. Study. Support. Suppose. Talk. Teach. Think. Want. Work.",
                    items: [
                        { term: "To manage", trans: "gerenciar / lidar com" },
                        { term: "To need", trans: "precisar" },
                        { term: "To omit", trans: "omitir" },
                        { term: "To overcome", trans: "superar" },
                        { term: "To own", trans: "possuir / ser dono de" },
                        { term: "To present", trans: "apresentar" },
                        { term: "To propose", trans: "propor" },
                        { term: "To read", trans: "ler" },
                        { term: "To receive", trans: "receber" },
                        { term: "To rely on", trans: "confiar em / depender de" },
                        { term: "To remember", trans: "lembrar" },
                        { term: "To show", trans: "mostrar" },
                        { term: "To speak", trans: "falar" },
                        { term: "To start", trans: "começar" },
                        { term: "To stop", trans: "parar" },
                        { term: "To struggle", trans: "lutar / ter dificuldade" },
                        { term: "To study", trans: "estudar" },
                        { term: "To support", trans: "apoiar" },
                        { term: "To suppose", trans: "supor / achar" },
                        { term: "To talk", trans: "conversar / falar" },
                        { term: "To teach", trans: "ensinar" },
                        { term: "To think", trans: "pensar / achar" },
                        { term: "To want", trans: "querer" },
                        { term: "To work", trans: "trabalhar" }
                    ]
                },
                {
                    title: "Crisis & Economy",
                    audio: "TTS: Financial. Crisis. Economy. Economic. Money. Debt. Budget. Income. Savings. Expense. Unemployment. Job loss. Salary. Wage. Investment. Bankruptcy. Recession. Market. Loan. Cost of living. Hard times. Difficulty. Challenge. Struggle. Problem. Pandemic. Lockdown. Resilience. Strength. Hope. Optimism. Positive outlook. Solution. Opportunity. Support. Silver lining.",
                    items: [
                        { term: "Financial", trans: "financeiro(a)" },
                        { term: "Crisis", trans: "crise" },
                        { term: "Economy", trans: "economia" },
                        { term: "Economic", trans: "econômico(a)" },
                        { term: "Money", trans: "dinheiro" },
                        { term: "Debt", trans: "dívida" },
                        { term: "Budget", trans: "orçamento" },
                        { term: "Income", trans: "renda" },
                        { term: "Savings", trans: "economias" },
                        { term: "Expense", trans: "despesa" },
                        { term: "Unemployment", trans: "desemprego" },
                        { term: "Job loss", trans: "perda de emprego" },
                        { term: "Salary / Wage", trans: "salário" },
                        { term: "Investment", trans: "investimento" },
                        { term: "Bankruptcy", trans: "falência" },
                        { term: "Recession", trans: "recessão" },
                        { term: "Market", trans: "mercado" },
                        { term: "Loan", trans: "empréstimo" },
                        { term: "Cost of living", trans: "custo de vida" },
                        { term: "Hard times", trans: "tempos difíceis" },
                        { term: "Difficulty", trans: "dificuldade" },
                        { term: "Challenge", trans: "desafio" },
                        { term: "Struggle", trans: "luta" },
                        { term: "Problem", trans: "problema" },
                        { term: "Pandemic", trans: "pandemia" },
                        { term: "Lockdown", trans: "confinamento" },
                        { term: "Resilience", trans: "resiliência" },
                        { term: "Strength", trans: "força" },
                        { term: "Hope", trans: "esperança" },
                        { term: "Optimism", trans: "otimismo" },
                        { term: "Positive outlook", trans: "perspectiva positiva" },
                        { term: "Solution", trans: "solução" },
                        { term: "Opportunity", trans: "oportunidade" },
                        { term: "Support", trans: "apoio" },
                        { term: "Silver lining", trans: "lado bom" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Verbs A-L (Examples)",
                    audio: "TTS: You must adapt to change. The recession affects prices. I agree with your outlook. Be hopeful about the future. She became an activist. Let's begin our budget. I believe in global peace. We will bounce back quickly. Don't buy what you don't need. The market changes daily. The factory closed today. We come together in hard times. The internet connects everyone. How do you cope with stress? Debt causes many problems. Income decreased this year. Success defines his life. He demonstrates great strength. We develop new solutions. Scientists discover new data. Let's discuss the recession. Always emphasize resilience. The lockdown finally ended. They experienced extreme hardship. We must face our difficulties. I feel optimistic now. Find the silver lining today. Focus on your savings. The crisis forced us to save. Hard work guarantees nothing. A recession happened in 2008. I have a new budget. Communities help the poor. The crisis hit the market hard. You inspire me to strive. Business interests my parents. He was interviewed for the job. Invest in your future self. Keep your money safe. Learn from your setbacks. Good habits lead to growth. Limit your monthly expenses. We live in a digital age. Many lost their jobs lately. I love showing optimism.",
                    items: [
                        { term: "Adapt", sent: "You must adapt to change.", trans: "<span style='color:#0077b6'>Você deve se adaptar à mudança.</span>" },
                        { term: "Affect", sent: "The recession affects prices.", trans: "<span style='color:#0077b6'>A recessão afeta os preços.</span>" },
                        { term: "Agree", sent: "I agree with your outlook.", trans: "<span style='color:#0077b6'>Eu concordo com sua perspectiva.</span>" },
                        { term: "Be", sent: "Be hopeful about the future.", trans: "<span style='color:#0077b6'>Tenha esperança sobre o futuro.</span>" },
                        { term: "Become", sent: "She became an activist.", trans: "<span style='color:#0077b6'>Ela se tornou uma ativista.</span>" },
                        { term: "Begin", sent: "Let's begin our budget.", trans: "<span style='color:#0077b6'>Vamos começar nosso orçamento.</span>" },
                        { term: "Believe", sent: "I believe in global peace.", trans: "<span style='color:#0077b6'>Eu acredito na paz global.</span>" },
                        { term: "Bounce back", sent: "We will bounce back quickly.", trans: "<span style='color:#0077b6'>Vamos nos recuperar rapidamente.</span>" },
                        { term: "Buy", sent: "Don't buy what you don't need.", trans: "<span style='color:#0077b6'>Não compre o que você não precisa.</span>" },
                        { term: "Change", sent: "The market changes daily.", trans: "<span style='color:#0077b6'>O mercado muda diariamente.</span>" },
                        { term: "Close", sent: "The factory closed today.", trans: "<span style='color:#0077b6'>A fábrica fechou hoje.</span>" },
                        { term: "Come together", sent: "We come together in hard times.", trans: "<span style='color:#0077b6'>Nós nos unimos em tempos difíceis.</span>" },
                        { term: "Connect", sent: "The internet connects everyone.", trans: "<span style='color:#0077b6'>A internet conecta todo mundo.</span>" },
                        { term: "Cope", sent: "How do you cope with stress?", trans: "<span style='color:#0077b6'>Como você lida com o estresse?</span>" },
                        { term: "Cause", sent: "Debt causes many problems.", trans: "<span style='color:#0077b6'>A dívida causa muitos problemas.</span>" },
                        { term: "Decrease", sent: "Income decreased this year.", trans: "<span style='color:#0077b6'>A renda diminuiu este ano.</span>" },
                        { term: "Define", sent: "Success defines his life.", trans: "<span style='color:#0077b6'>O sucesso define a vida dele.</span>" },
                        { term: "Demonstrate", sent: "He demonstrates great strength.", trans: "<span style='color:#0077b6'>Ele demonstra grande força.</span>" },
                        { term: "Develop", sent: "We develop new solutions.", trans: "<span style='color:#0077b6'>Nós desenvolvemos novas soluções.</span>" },
                        { term: "Discover", sent: "Scientists discover new data.", trans: "<span style='color:#0077b6'>Cientistas descobrem novos dados.</span>" },
                        { term: "Discuss", sent: "Let's discuss the recession.", trans: "<span style='color:#0077b6'>Vamos discutir a recessão.</span>" },
                        { term: "Emphasize", sent: "Always emphasize resilience.", trans: "<span style='color:#0077b6'>Sempre enfatize a resiliência.</span>" },
                        { term: "End", sent: "The lockdown finally ended.", trans: "<span style='color:#0077b6'>O confinamento finalmente acabou.</span>" },
                        { term: "Experience", sent: "They experienced extreme hardship.", trans: "<span style='color:#0077b6'>Eles vivenciaram extrema dificuldade.</span>" },
                        { term: "Face", sent: "We must face our difficulties.", trans: "<span style='color:#0077b6'>Devemos enfrentar nossas dificuldades.</span>" },
                        { term: "Feel", sent: "I feel optimistic now.", trans: "<span style='color:#0077b6'>Sinto-me otimista agora.</span>" },
                        { term: "Find", sent: "Find the silver lining today.", trans: "<span style='color:#0077b6'>Encontre o lado bom hoje.</span>" },
                        { term: "Focus", sent: "Focus on your savings.", trans: "<span style='color:#0077b6'>Foque em suas economias.</span>" },
                        { term: "Force", sent: "The crisis forced us to save.", trans: "<span style='color:#0077b6'>A crise nos forçou a economizar.</span>" },
                        { term: "Guarantee", sent: "Hard work guarantees nothing.", trans: "<span style='color:#0077b6'>Trabalho duro não garante nada.</span>" },
                        { term: "Happen", sent: "A recession happened in 2008.", trans: "<span style='color:#0077b6'>Uma recessão aconteceu em 2008.</span>" },
                        { term: "Have", sent: "I have a new budget.", trans: "<span style='color:#0077b6'>Eu tenho um novo orçamento.</span>" },
                        { term: "Help", sent: "Communities help the poor.", trans: "<span style='color:#0077b6'>Comunidades ajudam os pobres.</span>" },
                        { term: "Hit", sent: "The crisis hit the market hard.", trans: "<span style='color:#0077b6'>A crise atingiu o mercado com força.</span>" },
                        { term: "Inspire", sent: "You inspire me to strive.", trans: "<span style='color:#0077b6'>Você me inspira a me esforçar.</span>" },
                        { term: "Interest", sent: "Business interests my parents.", trans: "<span style='color:#0077b6'>Negócios interessam meus pais.</span>" },
                        { term: "Interview", sent: "He was interviewed for the job.", trans: "<span style='color:#0077b6'>Ele foi entrevistado para o emprego.</span>" },
                        { term: "Invest", sent: "Invest in your future self.", trans: "<span style='color:#0077b6'>Invista em seu eu futuro.</span>" },
                        { term: "Keep", sent: "Keep your money safe.", trans: "<span style='color:#0077b6'>Mantenha seu dinheiro seguro.</span>" },
                        { term: "Learn", sent: "Learn from your setbacks.", trans: "<span style='color:#0077b6'>Aprenda com seus contratempos.</span>" },
                        { term: "Lead to", sent: "Good habits lead to growth.", trans: "<span style='color:#0077b6'>Bons hábitos levam ao crescimento.</span>" },
                        { term: "Limit", sent: "Limit your monthly expenses.", trans: "<span style='color:#0077b6'>Limite suas despesas mensais.</span>" },
                        { term: "Live", sent: "We live in a digital age.", trans: "<span style='color:#0077b6'>Vivemos em uma era digital.</span>" },
                        { term: "Lose", sent: "Many lost their jobs lately.", trans: "<span style='color:#0077b6'>Muitos perderam seus empregos ultimamente.</span>" },
                        { term: "Love", sent: "I love showing optimism.", trans: "<span style='color:#0077b6'>Amo mostrar otimismo.</span>" }
                    ]
                },
                {
                    title: "Verbs M-W (Examples)",
                    audio: "TTS: Can you manage the debt? We need more support. Don't omit the information. We will overcome this problem. Who owns that bank? He presented a new strategy. I propose we save money. Read about resilience. They received a loan. I rely on my family. Remember the pandemic. Show me the silver lining. She speaks with strength. Let's start a new company. Stop spending all your money. He struggles with unemployment. Study the stock market. Neighbors supported us. I suppose you are right. Let's talk about the budget. Crises teach us a lot. Think about sustainability. I want to improve. He works for a large NGO.",
                    items: [
                        { term: "Manage", sent: "Can you manage the debt?", trans: "<span style='color:#0077b6'>Você consegue gerenciar a dívida?</span>" },
                        { term: "Need", sent: "We need more support.", trans: "<span style='color:#0077b6'>Precisamos de mais apoio.</span>" },
                        { term: "Omit", sent: "Don't omit the information.", trans: "<span style='color:#0077b6'>Não omita a informação.</span>" },
                        { term: "Overcome", sent: "We will overcome this problem.", trans: "<span style='color:#0077b6'>Nós vamos superar este problema.</span>" },
                        { term: "Own", sent: "Who owns that bank?", trans: "<span style='color:#0077b6'>Quem é o dono daquele banco?</span>" },
                        { term: "Present", sent: "He presented a new strategy.", trans: "<span style='color:#0077b6'>Ele apresentou uma nova estratégia.</span>" },
                        { term: "Propose", sent: "I propose we save money.", trans: "<span style='color:#0077b6'>Eu proponho que economizemos dinheiro.</span>" },
                        { term: "Read", sent: "Read about resilience.", trans: "<span style='color:#0077b6'>Leia sobre resiliência.</span>" },
                        { term: "Receive", sent: "They received a loan.", trans: "<span style='color:#0077b6'>Eles receberam um empréstimo.</span>" },
                        { term: "Rely on", sent: "I rely on my family.", trans: "<span style='color:#0077b6'>Eu confio na minha família.</span>" },
                        { term: "Remember", sent: "Remember the pandemic.", trans: "<span style='color:#0077b6'>Lembre-se da pandemia.</span>" },
                        { term: "Show", sent: "Show me the silver lining.", trans: "<span style='color:#0077b6'>Mostre-me o lado bom.</span>" },
                        { term: "Speak", sent: "She speaks with strength.", trans: "<span style='color:#0077b6'>Ela fala com força.</span>" },
                        { term: "Start", sent: "Let's start a new company.", trans: "<span style='color:#0077b6'>Vamos começar uma nova empresa.</span>" },
                        { term: "Stop", sent: "Stop spending all your money.", trans: "<span style='color:#0077b6'>Pare de gastar todo seu dinheiro.</span>" },
                        { term: "Struggle", sent: "He struggles with unemployment.", trans: "<span style='color:#0077b6'>Ele luta contra o desemprego.</span>" },
                        { term: "Study", sent: "Study the stock market.", trans: "<span style='color:#0077b6'>Estude o mercado de ações.</span>" },
                        { term: "Support", sent: "Neighbors supported us.", trans: "<span style='color:#0077b6'>Vizinhos nos apoiaram.</span>" },
                        { term: "Suppose", sent: "I suppose you are right.", trans: "<span style='color:#0077b6'>Suponho que você esteja certo.</span>" },
                        { term: "Talk", sent: "Let's talk about the budget.", trans: "<span style='color:#0077b6'>Vamos conversar sobre o orçamento.</span>" },
                        { term: "Teach", sent: "Crises teach us a lot.", trans: "<span style='color:#0077b6'>Crises nos ensinam muito.</span>" },
                        { term: "Think", sent: "Think about sustainability.", trans: "<span style='color:#0077b6'>Pense sobre sustentabilidade.</span>" },
                        { term: "Want", sent: "I want to improve.", trans: "<span style='color:#0077b6'>Eu quero melhorar.</span>" },
                        { term: "Work", sent: "He works for a large NGO.", trans: "<span style='color:#0077b6'>Ele trabalha para uma grande ONG.</span>" }
                    ]
                },
                {
                    title: "Crisis & Economy (Examples)",
                    audio: "TTS: It was a financial disaster. The world is in crisis. The economy is slow today. This is an economic issue. Save your money for later. National debt is rising. I have a monthly budget. Her income is very high. Use your savings wisely. Rent is my biggest expense. Unemployment is a problem. Job loss causes stress. My salary is paid on Friday. Gold is a safe investment. The company faced bankruptcy. Global recession is coming. The market is very volatile. I need a loan for the car. The cost of living is high. We are facing hard times. There is some difficulty. This is a new challenge. Life is a constant struggle. Is there a problem? The pandemic was global. We stayed home in lockdown. Show resilience every day. Find your inner strength. There is always hope. Use optimism to grow. I have a positive outlook. What is the best solution? Take every opportunity. I need family support. Look for the silver lining.",
                    items: [
                        { term: "Financial", sent: "It was a financial disaster.", trans: "<span style='color:#0077b6'>Foi um desastre financeiro.</span>" },
                        { term: "Crisis", sent: "The world is in crisis.", trans: "<span style='color:#0077b6'>O mundo está em crise.</span>" },
                        { term: "Economy", sent: "The economy is slow today.", trans: "<span style='color:#0077b6'>A economia está lenta hoje.</span>" },
                        { term: "Economic", sent: "This is an economic issue.", trans: "<span style='color:#0077b6'>Esta é uma questão econômica.</span>" },
                        { term: "Money", sent: "Save your money for later.", trans: "<span style='color:#0077b6'>Guarde seu dinheiro para depois.</span>" },
                        { term: "Debt", sent: "National debt is rising.", trans: "<span style='color:#0077b6'>A dívida nacional está aumentando.</span>" },
                        { term: "Budget", sent: "I have a monthly budget.", trans: "<span style='color:#0077b6'>Eu tenho um orçamento mensal.</span>" },
                        { term: "Income", sent: "Her income is very high.", trans: "<span style='color:#0077b6'>A renda dela é muito alta.</span>" },
                        { term: "Savings", sent: "Use your savings wisely.", trans: "<span style='color:#0077b6'>Use suas economias sabiamente.</span>" },
                        { term: "Expense", sent: "Rent is my biggest expense.", trans: "<span style='color:#0077b6'>O aluguel é minha maior despesa.</span>" },
                        { term: "Unemployment", sent: "Unemployment is a problem.", trans: "<span style='color:#0077b6'>O desemprego é um problema.</span>" },
                        { term: "Job loss", sent: "Job loss causes stress.", trans: "<span style='color:#0077b6'>A perda de emprego causa estresse.</span>" },
                        { term: "Salary / Wage", sent: "My salary is paid on Friday.", trans: "<span style='color:#0077b6'>Meu salário é pago na sexta.</span>" },
                        { term: "Investment", sent: "Gold is a safe investment.", trans: "<span style='color:#0077b6'>O ouro é um investimento seguro.</span>" },
                        { term: "Bankruptcy", sent: "The company faced bankruptcy.", trans: "<span style='color:#0077b6'>A empresa enfrentou falência.</span>" },
                        { term: "Recession", sent: "Global recession is coming.", trans: "<span style='color:#0077b6'>A recessão global está chegando.</span>" },
                        { term: "Market", sent: "The market is very volatile.", trans: "<span style='color:#0077b6'>O mercado está muito volátil.</span>" },
                        { term: "Loan", sent: "I need a loan for the car.", trans: "<span style='color:#0077b6'>Preciso de um empréstimo para o carro.</span>" },
                        { term: "Cost of living", sent: "The cost of living is high.", trans: "<span style='color:#0077b6'>O custo de vida é alto.</span>" },
                        { term: "Hard times", sent: "We are facing hard times.", trans: "<span style='color:#0077b6'>Estamos enfrentando tempos difíceis.</span>" },
                        { term: "Difficulty", sent: "There is some difficulty.", trans: "<span style='color:#0077b6'>Há alguma dificuldade.</span>" },
                        { term: "Challenge", sent: "This is a new challenge.", trans: "<span style='color:#0077b6'>Este é um novo desafio.</span>" },
                        { term: "Struggle", sent: "Life is a constant struggle.", trans: "<span style='color:#0077b6'>A vida é uma luta constante.</span>" },
                        { term: "Problem", sent: "Is there a problem?", trans: "<span style='color:#0077b6'>Existe algum problema?</span>" },
                        { term: "Pandemic", sent: "The pandemic was global.", trans: "<span style='color:#0077b6'>A pandemia foi global.</span>" },
                        { term: "Lockdown", sent: "We stayed home in lockdown.", trans: "<span style='color:#0077b6'>Ficamos em casa no confinamento.</span>" },
                        { term: "Resilience", sent: "Show resilience every day.", trans: "<span style='color:#0077b6'>Mostre resiliência todos os dias.</span>" },
                        { term: "Strength", sent: "Find your inner strength.", trans: "<span style='color:#0077b6'>Encontre sua força interior.</span>" },
                        { term: "Hope", sent: "There is always hope.", trans: "<span style='color:#0077b6'>Sempre há esperança.</span>" },
                        { term: "Optimism", sent: "Use optimism to grow.", trans: "<span style='color:#0077b6'>Use o otimismo para crescer.</span>" },
                        { term: "Positive outlook", sent: "I have a positive outlook.", trans: "<span style='color:#0077b6'>Tenho uma perspectiva positiva.</span>" },
                        { term: "Solution", sent: "What is the best solution?", trans: "<span style='color:#0077b6'>Qual é a melhor solução?</span>" },
                        { term: "Opportunity", sent: "Take every opportunity.", trans: "<span style='color:#0077b6'>Aproveite cada oportunidade.</span>" },
                        { term: "Support", sent: "I need family support.", trans: "<span style='color:#0077b6'>Eu preciso de apoio familiar.</span>" },
                        { term: "Silver lining", sent: "Look for the silver lining.", trans: "<span style='color:#0077b6'>Procure pelo lado bom.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (Tabbed Version)
            drillGroups: [
                {
                    title: "Verbs A-F",
                    drills: [
                        {
                            type: "mcq",
                            q: "In a fast-changing world, you must _______ to new rules at work.",
                            options: [
                                {t: "adapt", c: true}, {t: "close", c: false}, {t: "lose", c: false}, {t: "hit", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "How does the financial crisis _______ the global economy?",
                            options: [
                                {t: "face", c: false}, {t: "affect", c: true}, {t: "read", c: false}, {t: "love", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "I _______ that we will overcome this problem if we work together.",
                            options: [
                                {t: "agree", c: true}, {t: "cause", c: false}, {t: "hit", c: false}, {t: "force", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "It is important to _______ hopeful during a deep recession.",
                            options: [
                                {t: "be", c: true}, {t: "have", c: false}, {t: "do", c: false}, {t: "read", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "She _______ an activist last year to help her community.",
                            options: [
                                {t: "began", c: false}, {t: "became", c: true}, {t: "ended", c: false}, {t: "hit", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "When did the global recession _______ according to the report?",
                            options: [
                                {t: "begin", c: true}, {t: "close", c: false}, {t: "agree", c: false}, {t: "hit", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Do you _______ that a better future is possible?",
                            options: [
                                {t: "believe", c: true}, {t: "omit", c: false}, {t: "face", c: false}, {t: "force", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "A resilient company will _______ quickly after a financial loss.",
                            options: [
                                {t: "lose", c: false}, {t: "bounce back", c: true}, {t: "close", c: false}, {t: "fail", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "I need to _______ some groceries before the shop closes.",
                            options: [
                                {t: "buy", c: true}, {t: "own", c: false}, {t: "read", c: false}, {t: "study", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The world _______ every day because of new technology.",
                            options: [
                                {t: "changes", c: true}, {t: "hits", c: false}, {t: "forces", c: false}, {t: "loves", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The local factory _______ early on Fridays.",
                            options: [
                                {t: "closes", c: true}, {t: "opens", c: false}, {t: "starts", c: false}, {t: "acts", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Neighbors _______ during the pandemic to support each other.",
                            options: [
                                {t: "came together", c: true}, {t: "lost", c: false}, {t: "hit", c: false}, {t: "felt", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The internet _______ us to the rest of the world instantly.",
                            options: [
                                {t: "connects", c: true}, {t: "loses", c: false}, {t: "faces", c: false}, {t: "ends", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "It is difficult to _______ with sudden job loss and debt.",
                            options: [
                                {t: "cope", c: true}, {t: "create", c: false}, {t: "develop", c: false}, {t: "find", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Bad financial investments _______ the crisis in many countries.",
                            options: [
                                {t: "caused", c: true}, {t: "solved", c: false}, {t: "read", c: false}, {t: "spoke", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Production _______ significantly during the last recession.",
                            options: [
                                {t: "decreased", c: true}, {t: "increased", c: false}, {t: "hit", c: false}, {t: "moved", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "How do you _______ the concept of a silver lining?",
                            options: [
                                {t: "define", c: true}, {t: "lose", c: false}, {t: "hit", c: false}, {t: "work", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "She _______ great strength when she lost her restaurant.",
                            options: [
                                {t: "demonstrated", c: true}, {t: "omitted", c: false}, {t: "began", c: false}, {t: "hit", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The team must _______ a new financial plan to save the business.",
                            options: [
                                {t: "develop", c: true}, {t: "close", c: false}, {t: "lose", c: false}, {t: "hit", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Scientists often _______ hidden opportunities during difficult times.",
                            options: [
                                {t: "discover", c: true}, {t: "lose", c: false}, {t: "hit", c: false}, {t: "feel", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Let's _______ the budget details during the next meeting.",
                            options: [
                                {t: "discuss", c: true}, {t: "see", c: false}, {t: "feel", c: false}, {t: "act", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The teacher _______ the importance of staying optimistic.",
                            options: [
                                {t: "emphasized", c: true}, {t: "failed", c: false}, {t: "hit", c: false}, {t: "lost", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The long meeting finally _______ at 5 PM.",
                            options: [
                                {t: "ended", c: true}, {t: "started", c: false}, {t: "began", c: false}, {t: "hit", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Have you ever _______ extreme hardship in your life?",
                            options: [
                                {t: "experienced", c: true}, {t: "proposed", c: false}, {t: "hit", c: false}, {t: "lost", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "You must _______ your fears to become more resilient.",
                            options: [
                                {t: "face", c: true}, {t: "follow", c: false}, {t: "hit", c: false}, {t: "lose", c: false}
                            ]
                        }
                    ]
                },
                {
                    title: "Verbs F-P",
                    drills: [
                        {
                            type: "mcq",
                            q: "I _______ hopeful about the solution to our financial problems.",
                            options: [
                                {t: "feel", c: true}, {t: "know", c: false}, {t: "hit", c: false}, {t: "work", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Can you _______ the silver lining even in this difficult situation?",
                            options: [
                                {t: "find", c: true}, {t: "forget", c: false}, {t: "hit", c: false}, {t: "lose", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "You should _______ on the opportunity, not on the problem.",
                            options: [
                                {t: "Focus", c: true}, {t: "Work", c: false}, {t: "Hit", c: false}, {t: "Lose", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The sudden crisis _______ us to adapt to a new lifestyle.",
                            options: [
                                {t: "forced", c: true}, {t: "helped", c: false}, {t: "hit", c: false}, {t: "loved", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Hard work doesn't always _______ immediate success.",
                            options: [
                                {t: "guarantee", c: true}, {t: "struggle", c: false}, {t: "hit", c: false}, {t: "lose", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "What exactly _______ during the lockdown in your city?",
                            options: [
                                {t: "happened", c: true}, {t: "demonstrated", c: false}, {t: "hit", c: false}, {t: "lost", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Do you _______ a positive outlook despite the recent setbacks?",
                            options: [
                                {t: "have", c: true}, {t: "be", c: false}, {t: "hit", c: false}, {t: "work", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "My friends _______ me to cope with the stress of the exam.",
                            options: [
                                {t: "helped", c: true}, {t: "caused", c: false}, {t: "hit", c: false}, {t: "lost", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The recession _______ the local market very hard last year.",
                            options: [
                                {t: "hit", c: true}, {t: "lived", c: false}, {t: "felt", c: false}, {t: "worked", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Your success story _______ the whole community to keep trying.",
                            options: [
                                {t: "inspired", c: true}, {t: "limited", c: false}, {t: "hit", c: false}, {t: "lost", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Does the topic of global economics _______ you at all?",
                            options: [
                                {t: "interest", c: true}, {t: "talk", c: false}, {t: "hit", c: false}, {t: "lose", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "They _______ ten people for the job position yesterday.",
                            options: [
                                {t: "interviewed", c: true}, {t: "received", c: false}, {t: "hit", c: false}, {t: "felt", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "You should _______ in your own education for a better future.",
                            options: [
                                {t: "invest", c: true}, {t: "spend", c: false}, {t: "hit", c: false}, {t: "lose", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Try to _______ a positive mind even when things are difficult.",
                            options: [
                                {t: "Keep", c: true}, {t: "Omit", c: false}, {t: "Hit", c: false}, {t: "Lose", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "We must _______ how to budget our money more efficiently.",
                            options: [
                                {t: "learn", c: true}, {t: "teach", c: false}, {t: "hit", c: false}, {t: "work", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Chronic stress can _______ serious health problems.",
                            options: [
                                {t: "lead to", c: true}, {t: "close", c: false}, {t: "hit", c: false}, {t: "lose", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "We must _______ our expenses to save money for the future.",
                            options: [
                                {t: "limit", c: true}, {t: "develop", c: false}, {t: "hit", c: false}, {t: "lose", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Where exactly do you _______ right now?",
                            options: [
                                {t: "live", c: true}, {t: "stay", c: false}, {t: "hit", c: false}, {t: "work", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "He _______ his job last month during the economic downturn.",
                            options: [
                                {t: "lost", c: true}, {t: "won", c: false}, {t: "hit", c: false}, {t: "felt", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "They _______ their neighborhood because it is very resilient.",
                            options: [
                                {t: "love", c: true}, {t: "struggle", c: false}, {t: "hit", c: false}, {t: "feel", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Can you _______ the monthly budget without any help?",
                            options: [
                                {t: "manage", c: true}, {t: "fail", c: false}, {t: "hit", c: false}, {t: "lose", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "I _______ more support now than I did last year.",
                            options: [
                                {t: "need", c: true}, {t: "omit", c: false}, {t: "hit", c: false}, {t: "feel", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Don't _______ the small details when you write the report.",
                            options: [
                                {t: "omit", c: true}, {t: "show", c: false}, {t: "hit", c: false}, {t: "feel", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "We will _______ this challenge if we stay focused.",
                            options: [
                                {t: "overcome", c: true}, {t: "start", c: false}, {t: "hit", c: false}, {t: "feel", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "He _______ a small business in the center of the city.",
                            options: [
                                {t: "owns", c: true}, {t: "lives", c: false}, {t: "hits", c: false}, {t: "feels", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Let me _______ the solution to the board of directors.",
                            options: [
                                {t: "present", c: true}, {t: "receive", c: false}, {t: "hit", c: false}, {t: "feel", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "I _______ a new strategy to improve our sales performance.",
                            options: [
                                {t: "proposed", c: true}, {t: "discussed", c: false}, {t: "hit", c: false}, {t: "felt", c: false}
                            ]
                        }
                    ]
                },
                {
                    title: "Verbs R-W & Economy",
                    drills: [
                        {
                            type: "mcq",
                            q: "Did you _______ the news about the recession in the paper today?",
                            options: [
                                {t: "read", c: true}, {t: "talk", c: false}, {t: "hit", c: false}, {t: "feel", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Many small businesses _______ a bank loan to survive the lockdown.",
                            options: [
                                {t: "received", c: true}, {t: "gave", c: false}, {t: "hit", c: false}, {t: "felt", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "In difficult moments, you can always _______ your family for support.",
                            options: [
                                {t: "rely on", c: true}, {t: "focus", c: false}, {t: "hit", c: false}, {t: "feel", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Please _______ to find the silver lining even when you face a setback.",
                            options: [
                                {t: "remember", c: true}, {t: "forget", c: false}, {t: "hit", c: false}, {t: "feel", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Data _______ that the unemployment rate is rising in the city.",
                            options: [
                                {t: "shows", c: true}, {t: "omits", c: false}, {t: "hits", c: false}, {t: "feels", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "She _______ about resilience with great strength and confidence.",
                            options: [
                                {t: "speaks", c: true}, {t: "sees", c: false}, {t: "hits", c: false}, {t: "feels", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "When did the financial crisis _______ in the United States?",
                            options: [
                                {t: "start", c: true}, {t: "end", c: false}, {t: "hit", c: false}, {t: "feel", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "You should _______ wasting time and start your budget plan.",
                            options: [
                                {t: "stop", c: true}, {t: "begin", c: false}, {t: "hit", c: false}, {t: "feel", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "He _______ with unemployment for several months last year.",
                            options: [
                                {t: "struggled", c: true}, {t: "succeeded", c: false}, {t: "hit", c: false}, {t: "felt", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "We must _______ the global economy to understand these changes.",
                            options: [
                                {t: "study", c: true}, {t: "play", c: false}, {t: "hit", c: false}, {t: "feel", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The local community _______ each other during the hard times.",
                            options: [
                                {t: "supported", c: true}, {t: "disturbed", c: false}, {t: "hit", c: false}, {t: "felt", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "I _______ you are right; we need to be more sensible with money.",
                            options: [
                                {t: "suppose", c: true}, {t: "know", c: false}, {t: "hit", c: false}, {t: "feel", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Let's _______ about the future and how to improve our life.",
                            options: [
                                {t: "talk", c: true}, {t: "listen", c: false}, {t: "hit", c: false}, {t: "feel", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Experience _______ us that resilience is the key to success.",
                            options: [
                                {t: "teaches", c: true}, {t: "learns", c: false}, {t: "hits", c: false}, {t: "feels", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "I _______ we need a plan to manage our debts effectively.",
                            options: [
                                {t: "think", c: true}, {t: "mean", c: false}, {t: "hit", c: false}, {t: "feel", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "I _______ to improve my grades by studying more often.",
                            options: [
                                {t: "want", c: true}, {t: "need", c: false}, {t: "hit", c: false}, {t: "feel", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "He currently _______ at a large bank in the city center.",
                            options: [
                                {t: "works", c: true}, {t: "plays", c: false}, {t: "hits", c: false}, {t: "feels", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The 2008 crisis was a major _______ disaster for many nations.",
                            options: [
                                {t: "financial", c: true}, {t: "optimistic", c: false}, {t: "resilient", c: false}, {t: "hopeful", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The global _______ is very scary for new investors right now.",
                            options: [
                                {t: "crisis", c: true}, {t: "solution", c: false}, {t: "budget", c: false}, {t: "opportunity", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Students at this school _______ the world economy in detail.",
                            options: [
                                {t: "study", c: true}, {t: "tragedy", c: false}, {t: "income", c: false}, {t: "debt", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "This is a serious _______ issue that needs a political solution.",
                            options: [
                                {t: "economic", c: true}, {t: "resilience", c: false}, {t: "money", c: false}, {t: "savings", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "It is important to save your _______ for a rainy day.",
                            options: [
                                {t: "money", c: true}, {t: "debt", c: false}, {t: "loan", c: false}, {t: "expense", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Paying off a large _______ is very hard for a low-income family.",
                            options: [
                                {t: "debt", c: true}, {t: "savings", c: false}, {t: "investment", c: false}, {t: "salary", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "We have a very tight _______ this month, so no extra spending.",
                            options: [
                                {t: "budget", c: true}, {t: "salary", c: false}, {t: "wage", c: false}, {t: "market", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "High _______ is usually good for a family's quality of life.",
                            options: [
                                {t: "income", c: true}, {t: "expense", c: false}, {t: "debt", c: false}, {t: "bankruptcy", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "You should always use your _______ wisely during a recession.",
                            options: [
                                {t: "savings", c: true}, {t: "budget", c: false}, {t: "debts", c: false}, {t: "loans", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Reduce your daily _______ to save more money every month.",
                            options: [
                                {t: "expenses", c: true}, {t: "income", c: false}, {t: "salary", c: false}, {t: "wages", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "High _______ is a national issue that affects young people.",
                            options: [
                                {t: "unemployment", c: true}, {t: "job", c: false}, {t: "salary", c: false}, {t: "income", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "My _______ is paid monthly directly into my bank account.",
                            options: [
                                {t: "salary", c: true}, {t: "debt", c: false}, {t: "loan", c: false}, {t: "expense", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Buying gold is often considered a safe _______.",
                            options: [
                                {t: "investment", c: true}, {t: "expense", c: false}, {t: "debt", c: false}, {t: "recession", c: false}
                            ]
                        }
                    ]
                },
                {
                    title: "Resilience, Growth & Phrases",
                    drills: [
                        {
                            type: "mcq",
                            q: "After years of bad management, the company finally faced _______.",
                            options: [
                                {t: "growth", c: false}, {t: "bankruptcy", c: true}, {t: "investment", c: false}, {t: "solution", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The _______ lasted two years and caused many people to lose their savings.",
                            options: [
                                {t: "recession", c: true}, {t: "optimism", c: false}, {t: "silver lining", c: false}, {t: "opportunity", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Inflation increases the _______, making it harder for families to buy food.",
                            options: [
                                {t: "salary", c: false}, {t: "cost of living", c: true}, {t: "investment", c: false}, {t: "resilience", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Everyone faces _______ sometimes, but we must stay strong.",
                            options: [
                                {t: "hard times", c: true}, {t: "wealth", c: false}, {t: "bankruptcies", c: false}, {t: "lockdowns", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "We managed to overcome the _______ of the first few months.",
                            options: [
                                {t: "difficulty", c: true}, {t: "joy", c: false}, {t: "income", c: false}, {t: "budget", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Is there a _______ to the technical issue you mentioned?",
                            options: [
                                {t: "problem", c: false}, {t: "answer", c: true}, {t: "debt", c: false}, {t: "setback", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The _______ was global and affected every continent on Earth.",
                            options: [
                                {t: "pandemic", c: true}, {t: "party", c: false}, {t: "market", c: false}, {t: "loan", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Find your inner _______ to help you through this challenge.",
                            options: [
                                {t: "fear", c: false}, {t: "strength", c: true}, {t: "expense", c: false}, {t: "debt", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "There is always _______ for a better tomorrow.",
                            options: [
                                {t: "hope", c: true}, {t: "failure", c: false}, {t: "recession", c: false}, {t: "difficulty", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Use _______ to grow and learn from your mistakes.",
                            options: [
                                {t: "optimism", c: true}, {t: "sadness", c: false}, {t: "isolation", c: false}, {t: "poverty", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The crisis _______ started in 2008 affected everyone.",
                            options: [
                                {t: "who", c: false}, {t: "which", c: true}, {t: "where", c: false}, {t: "whose", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "_______ lost everything during the flood need our help.",
                            options: [
                                {t: "People who", c: true}, {t: "Items that", c: false}, {t: "Places where", c: false}, {t: "Times when", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "It was a _______ adapted to working from home.",
                            options: [
                                {t: "place where we", c: false}, {t: "time when we", c: true}, {t: "man who", c: false}, {t: "box that", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "This is the _______ support was offered to the victims.",
                            options: [
                                {t: "place where", c: true}, {t: "person who", c: false}, {t: "reason why", c: false}, {t: "time when", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "The _______ strategy failed had to close its doors.",
                            options: [
                                {t: "company whose", c: true}, {t: "man who", c: false}, {t: "problem which", c: false}, {t: "day when", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "It was the _______ nobody expected to work.",
                            options: [
                                {t: "solution that", c: true}, {t: "time when", c: false}, {t: "place where", c: false}, {t: "person who", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "My _______ very optimistic inspired me to start a garden.",
                            options: [
                                {t: "friend, who is", c: true}, {t: "box that is", c: false}, {t: "place where is", c: false}, {t: "time when is", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Financial _______ common, are very difficult to manage.",
                            options: [
                                {t: "problems, which are", c: true}, {t: "people who are", c: false}, {t: "times when are", c: false}, {t: "places where are", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Resilient leaders _______ hardship by staying focused.",
                            options: [
                                {t: "learn from", c: true}, {t: "buy some", c: false}, {t: "hit with", c: false}, {t: "lose the", c: false}
                            ]
                        },
                        {
                            type: "mcq",
                            q: "Always try to _______ the silver lining in every setback.",
                            options: [
                                {t: "find", c: true}, {t: "lose", c: false}, {t: "ignore", c: false}, {t: "hate", c: false}
                            ]
                        }
                    ]
                }
            ], // This closes the drillGroups array
        }, // This closes Step 2

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
                    title: "Relative Pronouns (Who, Whom, Which, That)",
                    audio: "TTS: We use relative pronouns to link two ideas and provide more information about a noun. Use WHO for people as subjects. Use WHOM for people as objects, which is more formal. Use WHICH for things or animals. Use THAT for both people and things in defining clauses.",
                    explanation: "We use these words to link two ideas and provide more information about a noun.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos estas palavras para ligar duas ideias e fornecer mais informações sobre um substantivo.)</span>",
                    samples: [
                        { en: "<b>WHO (People - Subject)</b>: The expert <b>who</b> gave the lecture was very optimistic.", pt: "<span style='color:#0077b6'>(O especialista que deu a palestra era muito otimista.)</span>" },
                        { en: "<b>WHOM (People - Object)</b>: The leader <b>whom</b> the community supported was resilient.", pt: "<span style='color:#0077b6'>(O líder a quem a comunidade apoiou era resiliente.)</span>" },
                        { en: "<b>WHICH (Things/Animals)</b>: The loan <b>which</b> the bank approved saved the company.", pt: "<span style='color:#0077b6'>(O empréstimo que o banco aprovou salvou a empresa.)</span>" },
                        { en: "<b>THAT (People/Things)</b>: It was the strength <b>that</b> helped us overcome the hardship.", pt: "<span style='color:#0077b6'>(Foi a força que nos ajudou a superar a dificuldade.)</span>" }
                    ]
                },
                {
                    title: "Relative Pronouns (Whose, Where, When)",
                    audio: "TTS: Use WHOSE to show possession. Use WHERE to refer to places. Use WHEN to refer to times and dates.",
                    explanation: "These pronouns help us specify details about ownership, location, and time.<br><br><span style='color:#0077b6; font-style:italic;'>(Estes pronomes nos ajudam a especificar detalhes sobre posse, lugar e tempo.)</span>",
                    samples: [
                        { en: "<b>WHOSE (Possession)</b>: I know a student <b>whose</b> parents lost their jobs.", pt: "<span style='color:#0077b6'>(Eu conheço um aluno cujos pais perderam seus empregos.)</span>" },
                        { en: "<b>WHERE (Places)</b>: This is the neighborhood <b>where</b> people bounced back.", pt: "<span style='color:#0077b6'>(Este é o bairro onde as pessoas se recuperaram.)</span>" },
                        { en: "<b>WHEN (Times)</b>: 2008 was the year <b>when</b> the financial crisis hit.", pt: "<span style='color:#0077b6'>(2008 foi o ano em que a crise financeira atingiu.)</span>" }
                    ]
                },
                {
                    title: "Defining vs. Non-Defining Clauses",
                    audio: "TTS: Defining clauses are essential to identify the noun and do not use commas. Non-defining clauses just add extra information and must be separated by commas.",
                    explanation: "<b>Defining clauses</b> are essential to identify the noun. <b>Non-defining clauses</b> just add extra information and must be separated by commas.<br><br><span style='color:#0077b6; font-style:italic;'>(Orações 'definidoras' são essenciais para identificar o substantivo. Orações 'não-definidoras' apenas adicionam informações extras e devem ser separadas por vírgulas.)</span>",
                    samples: [
                        { en: "<b>Defining (NO commas)</b>: The people <b>who lost their savings</b> were devastated.", pt: "<span style='color:#0077b6'>(Sem vírgulas: A frase fica incompleta sem a informação.)</span>" },
                        { en: "<b>Non-Defining (WITH commas)</b>: My aunt Maria<b>, who is an activist,</b> lives in Brasilia.", pt: "<span style='color:#0077b6'>(Com vírgulas: Já sabemos de qual pessoa específica estamos falando.)</span>" },
                        { en: "<b>Non-Defining</b>: The 2008 crisis<b>, which was global,</b> changed the economy.", pt: "<span style='color:#0077b6'>(A crise de 2008, que foi global, mudou a economia.)</span>" }
                    ]
                },
                // --- Part of Step 3A: Patterns (Continued) ---
                {
                    title: "Comparatives & Superlatives (Superiority)",
                    audio: "TTS: We use these to compare things or highlight the number one in a group. For short adjectives, add e r for comparatives and e s t for superlatives. If it ends in y, change it to i e r or i e s t. For long adjectives, use more or the most. For example: Albert is braver than before. He is the bravest student.",
                    explanation: "We use these to compare two things or highlight the \"number one\" in a group.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos estes para comparar duas coisas ou destacar o 'número um' em um grupo.)</span>",
                    samples: [
                        { en: "<b>Short (1 syll.)</b>: Albert is brav<b>er than</b> before. He is <b>the bravest</b> student.", pt: "<span style='color:#0077b6'>(Albert é mais corajoso que antes. Ele é o aluno mais corajoso.)</span>" },
                        { en: "<b>Short (-y)</b>: This year is happi<b>er than</b> last year. It is <b>the happiest</b> year.", pt: "<span style='color:#0077b6'>(Este ano está mais feliz que o ano passado. É o ano mais feliz.)</span>" },
                        { en: "<b>Long (2+ syll.)</b>: Resilience is <b>more important than</b> money. It is <b>the most important</b> trait.", pt: "<span style='color:#0077b6'>(Resiliência é mais importante que dinheiro. É a característica mais importante.)</span>" }
                    ]
                },
                {
                    title: "Irregular Adjectives",
                    audio: "TTS: Some adjectives are irregular and do not follow the standard rules. Good becomes better or the best. Bad becomes worse or the worst. Far becomes further or the furthest. For example: A positive outlook is better than despair. It is the best solution.",
                    explanation: "Some adjectives are irregular and have unique forms for comparison.<br><br><span style='color:#0077b6; font-style:italic;'>(Alguns adjetivos são irregulares e possuem formas únicas de comparação.)</span>",
                    samples: [
                        { en: "<b>Good</b> → Better than → The best", pt: "<span style='color:#0077b6'>(Bom → Melhor que → O melhor)</span>" },
                        { en: "<b>Bad</b> → Worse than → The worst", pt: "<span style='color:#0077b6'>(Mau/Ruim → Pior que → O pior)</span>" },
                        { en: "<b>Far</b> → Further than → The furthest", pt: "<span style='color:#0077b6'>(Longe → Mais longe que → O mais longe)</span>" },
                        { en: "<b>Example</b>: A positive outlook is <b>better than</b> despair. It is <b>the best</b> solution.", pt: "<span style='color:#0077b6'>(Uma perspectiva positiva é melhor que o desespero. É a melhor solução.)</span>" }
                    ]
                },
                {
                    title: "Comparatives & Superlatives (Inferiority)",
                    audio: "TTS: To show that something is less than another, we use less or the least regardless of the adjective length. For example: A loan is less difficult to get now. It is the least difficult option.",
                    explanation: "We use <b>less</b> or <b>the least</b> to show inferiority, regardless of the adjective's length.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos 'less' ou 'the least' para mostrar inferioridade, independentemente do tamanho do adjetivo.)</span>",
                    samples: [
                        { en: "<b>Comparative</b>: A loan is <b>less difficult than</b> spending savings.", pt: "<span style='color:#0077b6'>(Um empréstimo é menos difícil que gastar as economias.)</span>" },
                        { en: "<b>Superlative</b>: It is <b>the least difficult</b> option to face a crisis.", pt: "<span style='color:#0077b6'>(É a opção menos difícil para enfrentar uma crise.)</span>" }
                    ]
                }
            ], // This closes the patterns array in Step 3

            // 3B: Natural Examples (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Comparing Strength (Relative Clauses & Comparatives)",
                    audio: "audio/em2-1-6/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "My sister, who is younger than me, showed more resilience than I expected during the lockdown.", 
                            pt: "<span style='color:#0077b6'>(Minha irmã, que é mais nova que eu, mostrou mais resiliência do que eu esperava durante o confinamento.)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "That's amazing! People who are young are often more adaptable than adults.", 
                            pt: "<span style='color:#0077b6'>(Isso é incrível! Pessoas que são jovens costumam ser mais adaptáveis do que adultos.)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Finding the Best Path (Superlatives)",
                    audio: "audio/em2-1-6/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Joining an NGO was the best decision I ever made. It was the most inspiring experience of my life.", 
                            pt: "<span style='color:#0077b6'>(Entrar para uma ONG foi a melhor decisão que já tomei. Foi a experiência mais inspiradora da minha vida.)</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I agree. It's the least stressful way to face a crisis.", 
                            pt: "<span style='color:#0077b6'>(Concordo. É a maneira menos estressante de enfrentar uma crise.)</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ (Expanded to 30 items)
            grammarDrills: [
                // --- Set 1: Relative Pronouns & Clauses (15 items) ---
                {
                    type: "mcq",
                    q: "The financial crisis _______ affected the world in 2008 was devastating.",
                    options: [
                        {t: "who", c: false}, {t: "which", c: true}, {t: "where", c: false}, {t: "whom", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I know a family _______ income was cut in half last month.",
                    options: [
                        {t: "whom", c: false}, {t: "whose", c: true}, {t: "that", c: false}, {t: "which", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The bank _______ I received the loan from is downtown.",
                    options: [
                        {t: "where", c: true}, {t: "when", c: false}, {t: "who", c: false}, {t: "whose", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The people _______ were interviewed for the job were very hopeful.",
                    options: [
                        {t: "who", c: true}, {t: "whose", c: false}, {t: "which", c: false}, {t: "whom", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I remember the day _______ the recession officially began.",
                    options: [
                        {t: "where", c: false}, {t: "when", c: true}, {t: "who", c: false}, {t: "which", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The activist _______ you were talking to is very resilient.",
                    options: [
                        {t: "which", c: false}, {t: "whom", c: true}, {t: "whose", c: false}, {t: "where", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The silver lining _______ we found was a new opportunity.",
                    options: [
                        {t: "that", c: true}, {t: "who", c: false}, {t: "where", c: false}, {t: "whose", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the sentence that uses extra information (Non-defining):",
                    options: [
                        {t: "The students who are optimistic usually succeed.", c: false}, 
                        {t: "My teacher, who is very resilient, helped me cope.", c: true},
                        {t: "I need a budget that works for me.", c: false},
                        {t: "The place where we met was quiet.", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Which sentence correctly identifies a specific thing (Defining)?",
                    options: [
                        {t: "The problem that we have is financial.", c: true}, 
                        {t: "That problem, which we already solved, was difficult.", c: false},
                        {t: "My savings, which are in the bank, are safe.", c: false},
                        {t: "The crisis, which was global, changed the world.", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the sentence with CORRECT comma usage (Non-defining):",
                    options: [
                        {t: "The pandemic which was global changed everything.", c: false}, 
                        {t: "The pandemic, which was global, changed everything.", c: true},
                        {t: "The pandemic which was global, changed everything.", c: false},
                        {t: "The pandemic, which was global changed everything.", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "In which sentence can 'that' replace the relative pronoun?",
                    options: [
                        {t: "The savings _______ I kept are safe. (Defining)", c: true}, 
                        {t: "My savings, _______ are in the bank, are safe. (Non-defining)", c: false},
                        {t: "John, _______ is my cousin, lost his job.", c: false},
                        {t: "The bank, _______ closed yesterday, was very old.", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "In 'The city where I live is quiet,' the relative clause is:",
                    options: [
                        {t: "Defining (Essential)", c: true}, 
                        {t: "Non-defining (Extra)", c: false},
                        {t: "Superlative", c: false},
                        {t: "Causative", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The man _______ car was stolen is feeling very stressed.",
                    options: [
                        {t: "who", c: false}, {t: "whom", c: false}, {t: "whose", c: true}, {t: "which", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "This is the situation _______ resilience is most needed.",
                    options: [
                        {t: "when", c: true}, {t: "who", c: false}, {t: "whom", c: false}, {t: "which", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The books _______ you bought are on the table.",
                    options: [
                        {t: "that", c: true}, {t: "who", c: false}, {t: "whom", c: false}, {t: "whose", c: false}
                    ]
                },

                // --- Set 2: Comparatives & Superlatives (15 items) ---
                {
                    type: "mcq",
                    q: "This recession is _______ (bad) than the one in 1929.",
                    options: [
                        {t: "badder", c: false}, {t: "worse", c: true}, {t: "the worst", c: false}, {t: "more bad", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "She is _______ (optimistic) person in the class.",
                    options: [
                        {t: "the most optimistic", c: true}, {t: "more optimistic", c: false}, {t: "optimisticer", c: false}, {t: "most optimistic", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Paying a debt is _______ (difficult) than spending money.",
                    options: [
                        {t: "difficulter", c: false}, {t: "more difficult", c: true}, {t: "the most difficult", c: false}, {t: "less difficult", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The silver lining is _______ (good) thing about a setback.",
                    options: [
                        {t: "the goodest", c: false}, {t: "better", c: false}, {t: "the best", c: true}, {t: "the most good", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "He is _______ (brave) than any other student in school.",
                    options: [
                        {t: "more brave", c: false}, {t: "braver", c: true}, {t: "the bravest", c: false}, {t: "bravest", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A global crisis is _______ (scary) than a local problem.",
                    options: [
                        {t: "scarier", c: true}, {t: "more scary", c: false}, {t: "the scariest", c: false}, {t: "scaryer", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "That was _______ (helpful) advice I received. (Inferiority)",
                    options: [
                        {t: "the most helpful", c: false}, {t: "least helpful", c: false}, {t: "the least helpful", c: true}, {t: "less helpful", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The world economy is _______ (strong) today than last year.",
                    options: [
                        {t: "more strong", c: false}, {t: "stronger", c: true}, {t: "the strongest", c: false}, {t: "strongest", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "His situation is _______ (stable) than it was before.",
                    options: [
                        {t: "stabler", c: false}, {t: "more stable", c: true}, {t: "the most stable", c: false}, {t: "stable", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "This is _______ (hard) time we have ever faced.",
                    options: [
                        {t: "the harder", c: false}, {t: "the hardest", c: true}, {t: "hardest", c: false}, {t: "more hard", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "An irregular form: 'Far' becomes _______ in the comparative degree.",
                    options: [
                        {t: "farrer", c: false}, {t: "more far", c: false}, {t: "further", c: true}, {t: "furthest", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I am _______ (happy) now that I found a silver lining.",
                    options: [
                        {t: "happier", c: true}, {t: "more happy", c: false}, {t: "the happiest", c: false}, {t: "happyer", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Inflation is _______ (bad) this year than it was last decade.",
                    options: [
                        {t: "badder", c: false}, {t: "more bad", c: false}, {t: "worse", c: true}, {t: "worst", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Resilience is considered _______ (important) trait for an activist.",
                    options: [
                        {t: "the most important", c: true}, {t: "more important", c: false}, {t: "most important", c: false}, {t: "the importanter", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A small loan is _______ (expensive) than a big debt. (Inferiority)",
                    options: [
                        {t: "less expensive", c: true}, {t: "least expensive", c: false}, {t: "expensiver", c: false}, {t: "the least expensive", c: false}
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
                    text: "My parents, who were worried, started a budget.<br><small style='color:#0077b6'>(Meus pais, que estavam preocupados, começaram um orçamento.)</small>", 
                    audio: "TTS: My parents, who were worried, started a budget.", 
                    arrow: "↘" 
                },
                { 
                    text: "The recession is worse than we expected.<br><small style='color:#0077b6'>(A recessão está pior do que esperávamos.)</small>", 
                    audio: "TTS: The recession is worse than we expected.", 
                    arrow: "↘" 
                },
                { 
                    text: "Do you remember the year when the crisis hit?<br><small style='color:#0077b6'>(Você se lembra do ano em que a crise atingiu?)</small>", 
                    audio: "TTS: Do you remember the year when the crisis hit?", 
                    arrow: "↗" 
                },
                { 
                    text: "He is the most resilient person I have ever met.<br><small style='color:#0077b6'>(Ele é a pessoa mais resiliente que eu já conheci.)</small>", 
                    audio: "TTS: He is the most resilient person I have ever met.", 
                    arrow: "↘" 
                },
                { 
                    text: "This is the place where the community supports the poor.<br><small style='color:#0077b6'>(Este é o lugar onde a comunidade apoia os pobres.)</small>", 
                    audio: "TTS: This is the place where the community supports the poor.", 
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
                // Drill 1: Listen and Complete (Typing - TTS)
                {
                    type: "typing",
                    instruction: "Listen to the story about Albert’s hardship and type the missing words.<br><small style='color:#0077b6'>(Ouça a história sobre a dificuldade do Albert e digite as palavras que faltam.)</small>",
                    audio: "TTS: Last year was a very difficult period for my family. My father, who worked at a large factory, faced job loss because of the recession. Our income decreased, but we showed great resilience. We found a silver lining when we started a small garden together. It made us stronger than before.",
                    text: "Last year was a very [difficult] period for my family. My father, [who] worked at a large [factory], faced [job loss] because of the [recession]. Our [income] decreased, but we showed great [resilience]. We found a [silver lining] when we started a small garden together. It made us [stronger] than before."
                },
                // Drill 2: Listen and Complete (Dropdown - MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue and choose the correct options.<br><small style='color:#0077b6'>(Ouça o diálogo e escolha as opções corretas.)</small>",
                    audio: "audio/em2-1-6/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Celine: Albert, did you see the [financial | economic | global | social] news?", 
                            a: "financial" 
                        },
                        { 
                            q: "Albert: Yes. The market [which | who | where | whose] was stable last month is now in crisis.", 
                            a: "which" 
                        },
                        { 
                            q: "Celine: People [who | which | that | whose] stay [optimistic | sad | worried | angry] always bounce back.", 
                            a: "optimistic" 
                        },
                        { 
                            q: "Albert: True. We need to [manage | lose | buy | sell] our savings carefully.", 
                            a: "manage" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the logical response based on the lesson logic.<br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta lógica correta.)</small>",
                    audio: "TTS: What is the best way to cope with financial difficulty?",
                    options: [
                        { t: "You should spend all your money immediately.", c: false },
                        { t: "The solution is to find support and stay resilient.", c: true },
                        { t: "It was a tragedy that happened yesterday.", c: false },
                        { t: "He is the neighbor who owns the big bank.", c: false }
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
                // 6a: Narration - The 2008 Crisis
                {
                    title: "Narration - The 2008 Crisis",
                    audio: "TTS: The financial crisis of 2008, which started in the United States, affected the global economy for years. Many people who had invested in the market lost their savings. It was a time when unemployment was at its highest level. Families whose debt was too big struggled to keep their houses. However, this period also taught society about the importance of a budget. People learned that they had to be more sensible with their money than they were before. || audio/em2-1-6/p6_text1.mp3",
                    body: "The [financial crisis](tooltip:crisis) of 2008, which [started](tooltip:start) in the United States, [affected](tooltip:affect) the global [economy](tooltip:economy) for years. Many people who had [invested](tooltip:invest) in the [market](tooltip:market) lost their [savings](tooltip:savings). It was a time when [unemployment](tooltip:unemployment) was at its highest level. Families whose [debt](tooltip:debt) was too big [struggled](tooltip:struggle) to keep their houses. However, this period also taught [society](tooltip:society) about the importance of a [budget](tooltip:budget). People learned that they had to be more sensible with their [money](tooltip:money) than they were before.",
                    questions: [
                        {
                            q: "What does the text say about the 2008 crisis?",
                            options: [
                                { t: "It only affected the United States.", c: false },
                                { t: "It was a global event that started in the US.", c: true },
                                { t: "It was the best time for the global economy.", c: false },
                                { t: "It only lasted for a few weeks.", c: false }
                            ]
                        },
                        {
                            q: "Who struggled the most according to the text?",
                            options: [
                                { t: "People who had no debts.", c: false },
                                { t: "Families whose debt was too large.", c: true },
                                { t: "The activist groups in the city.", c: false },
                                { t: "People who didn't use banks.", c: false }
                            ]
                        },
                        {
                            q: "What was the main lesson learned from this crisis?",
                            options: [
                                { t: "To spend more income on luxury items.", c: false },
                                { t: "To be more sensible with money and budgets.", c: true },
                                { t: "To ignore economic problems entirely.", c: false },
                                { t: "To stop investing in any market.", c: false }
                            ]
                        }
                    ]
                },
                // 6b: Dialogue - Facing a Setback
                {
                    title: "Dialogue - Facing a Setback",
                    audio: "audio/em2-1-6/p6_text2.mp3",
                    body: "<b>Celine:</b> Albert, I heard your [parents](tooltip:parents) had to take a [loan](tooltip:loan). Is everything okay?<br><b>Albert:</b> Yes, but it's a bit [difficult](tooltip:difficulty). The [cost of living](tooltip:cost-of-living), which is [increasing](tooltip:increase) daily, makes it hard to save.<br><b>Celine:</b> I understand. My family, who faced a similar [setback](tooltip:setback) last year, had to [limit](tooltip:limit) all [expenses](tooltip:expense).<br><b>Albert:</b> How did you find the [strength](tooltip:strength) to [cope](tooltip:cope)?<br><b>Celine:</b> We looked for the [silver lining](tooltip:silver-lining). We started [working](tooltip:work) together on a small business. It was more rewarding than our old [jobs](tooltip:job-loss).<br><b>Albert:</b> That’s the most [inspiring](tooltip:inspire) thing I’ve heard today!",
                    questions: [
                        {
                            q: "What is Albert’s current concern regarding his family?",
                            options: [
                                { t: "His parents are traveling abroad.", c: false },
                                { t: "The increasing cost of living.", c: true },
                                { t: "He lost his favorite notebook.", c: false },
                                { t: "His sister is struggling at school.", c: false }
                            ]
                        },
                        {
                            q: "How did Celine’s family cope with their past setback?",
                            options: [
                                { t: "They took a large loan from Albert.", c: false },
                                { t: "They started a small business together.", c: true },
                                { t: "They closed their family restaurant.", c: false },
                                { t: "They moved to a different country.", c: false }
                            ]
                        },
                        {
                            q: "What is Celine's opinion of their new family business?",
                            options: [
                                { t: "It is worse than their old jobs.", c: false },
                                { t: "It is more rewarding than the old jobs.", c: true },
                                { t: "It is the least interesting option they had.", c: false },
                                { t: "It caused too much stress for the family.", c: false }
                            ]
                        }
                    ]
                },
                // 6c: Description - The Resilient Town
                {
                    title: "Description - The Resilient Town",
                    audio: "TTS: Hopeville is a small town where a major factory closed two years ago. This tragedy led to a recession in the area. However, the people, who refused to give up, created a community garden. They developed a system where they share their food. This initiative, which nobody expected to work, is now the best part of the town. The resilience they showed is greater than any challenge they faced. || audio/em2-1-6/p6_text3.mp3",
                    body: "\"Hopeville\" is a small town where a major [factory](tooltip:factory) [closed](tooltip:close) two years ago. This [tragedy](tooltip:tragedy) led to a [recession](tooltip:recession) in the area. However, the people, who refused to [give up](tooltip:give-up), created a [community](tooltip:community) garden. They [developed](tooltip:develop) a system where they [share](tooltip:share) their food. This initiative, which nobody expected to work, is now the best part of the town. The [resilience](tooltip:resilience) they showed is greater than any [challenge](tooltip:challenge) they faced.",
                    questions: [
                        {
                            q: "What happened in Hopeville two years ago that caused a recession?",
                            options: [
                                { t: "A new supermarket opened.", c: false },
                                { t: "A major factory closed down.", c: true },
                                { t: "The pandemic started in the town.", c: false },
                                { t: "The community garden was destroyed.", c: false }
                            ]
                        },
                        {
                            q: "How is the community garden initiative described?",
                            options: [
                                { t: "As the worst place in the whole town.", c: false },
                                { t: "As an initiative which worked unexpectedly well.", c: true },
                                { t: "As a major cause of the financial crisis.", c: false },
                                { t: "As a project that failed after one week.", c: false }
                            ]
                        },
                        {
                            q: "What is the main trait of the people in Hopeville?",
                            options: [
                                { t: "Laziness and lack of motivation.", c: false },
                                { t: "Resilience and refusal to give up.", c: true },
                                { t: "Despair and hopelessness.", c: false },
                                { t: "A lack of interest in the community.", c: false }
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
                // Drill 1: Match the Meanings (Economy & Crisis)
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
                // Drill 2: Unscramble the Sentences (Relative Clauses)
                {
                    type: "word-order",
                    instruction: "Put the words in order to form a correct sentence with a Relative Clause.<br><small style='color:#0077b6'>(Coloque as palavras em ordem para formar uma frase correta com uma Oração Relativa.)</small>",
                    sentence: "owns / uncle / My / who / is / restaurant / a / resilient / .",
                    correct: "My uncle who owns a restaurant is resilient ."
                },
                {
                    type: "word-order",
                    instruction: "Unscramble the sentence.",
                    sentence: "the / is / This / where / we / place / met / .",
                    correct: "This is the place where we met ."
                },
                // Drill 3: Odd One Out (Expanded to 4 options)
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that doesn't belong (Positive Traits vs. Negative Context).<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Optimism", c: false },
                        { t: "Resilience", c: false },
                        { t: "Hope", c: false },
                        { t: "Recession", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that doesn't belong (Financial security vs. Difficulty).",
                    options: [
                        { t: "Salary", c: false },
                        { t: "Income", c: false },
                        { t: "Savings", c: false },
                        { t: "Hardship", c: true }
                    ]
                },
                // Drill 4: Clickable Error (Find the Mistake - Comparatives/Superlatives)
                {
                    type: "clickable-error",
                    instruction: "Find the grammatical mistake in each sentence.<br><small style='color:#0077b6'>(Encontre o erro gramatical em cada frase.)</small>",
                    // Original: "Despair is gooder than optimism."
                    sentence: "Despair is [gooder](error:better) than optimism.",
                },
                {
                    type: "clickable-error",
                    instruction: "Find the mistake.",
                    // Original: "She is the most brave person I know."
                    sentence: "She is the [most](error:) [brave](error:bravest) person I know.",
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn to inspire! Write a short paragraph (5-7 sentences) about a time you faced a difficulty. <br><br><small><span style='color:#0077b6'>(Agora é a sua vez de inspirar! Escreva um pequeno texto (5-7 frases) sobre uma vez que você enfrentou uma dificuldade.)</span></small>",
            example: "\"Last year, I experienced a setback when I failed my math exam. It was the worst feeling of my childhood. My teacher, who is very patient, told me that effort is more important than a single grade. I started a study group where we helped each other. The silver lining was that I became stronger and more resilient!\"<br><br><small><span style='color:#0077b6'>(Exemplo: No ano passado, tive um contratempo quando reprovei no meu exame de matemática. Foi a pior sensação da minha infância. Meu professor, que é muito paciente...)</span></small>",
            prompts: [
                "Explain what the challenge was and who helped you. <br><small><span style='color:#0077b6'>(Explique qual foi o desafio e quem te ajudou.)</span></small>",
                "Use at least two [Relative Clauses] (who, which, whose, etc.). <br><small><span style='color:#0077b6'>(Use pelo menos duas Orações Relativas.)</span></small>",
                "Use at least one [Comparative] and one [Superlative]. <br><small><span style='color:#0077b6'>(Use pelo menos um Comparativo e um Superlativo.)</span></small>",
                "Mention what the [silver lining] was. <br><small><span style='color:#0077b6'>(Mencione qual foi o lado bom da situação.)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: WRAP IT UP (Flashcards - Part 1: Verbs A-F)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                { 
                    term: "To adapt", 
                    definition: "To become adjusted to new conditions.", 
                    defTrans: "adaptar-se",
                    example: "You must adapt to new situations to succeed.", 
                    exTrans: "Você deve se adaptar a novas situações para ter sucesso.",
                    audioFront: "TTS: To adapt",
                    audioBack: "TTS: You must adapt to new situations to succeed." 
                },
                { 
                    term: "To affect", 
                    definition: "To have an effect on; make a difference to.", 
                    defTrans: "afetar",
                    example: "A global crisis affects every part of the economy.", 
                    exTrans: "Uma crise global afeta todas as partes da economia.",
                    audioFront: "TTS: To affect",
                    audioBack: "TTS: A global crisis affects every part of the economy." 
                },
                { 
                    term: "To agree", 
                    definition: "To have the same opinion about something.", 
                    defTrans: "concordar",
                    example: "I agree that a positive outlook is vital.", 
                    exTrans: "Eu concordo que uma perspectiva positiva é vital.",
                    audioFront: "TTS: To agree",
                    audioBack: "TTS: I agree that a positive outlook is vital." 
                },
                { 
                    term: "To be", 
                    definition: "A fundamental verb indicating a state or identity.", 
                    defTrans: "ser / estar",
                    example: "Be resilient when you face a setback.", 
                    exTrans: "Seja resiliente quando você enfrentar um contratempo.",
                    audioFront: "TTS: To be",
                    audioBack: "TTS: Be resilient when you face a setback." 
                },
                { 
                    term: "To become", 
                    definition: "To begin to be; to turn into.", 
                    defTrans: "tornar-se",
                    example: "She became an expert after years of study.", 
                    exTrans: "Ela se tornou uma especialista após anos de estudo.",
                    audioFront: "TTS: To become",
                    audioBack: "TTS: She became an expert after years of study." 
                },
                { 
                    term: "To begin", 
                    definition: "To perform the first part of an action.", 
                    defTrans: "começar",
                    example: "We should begin our savings plan today.", 
                    exTrans: "Devemos começar nosso plano de economia hoje.",
                    audioFront: "TTS: To begin",
                    audioBack: "TTS: We should begin our savings plan today." 
                },
                { 
                    term: "To believe", 
                    definition: "To accept that a statement is true or that something exists.", 
                    defTrans: "acreditar",
                    example: "I believe we can overcome any hardship.", 
                    exTrans: "Eu acredito que podemos superar qualquer dificuldade.",
                    audioFront: "TTS: To believe",
                    audioBack: "TTS: I believe we can overcome any hardship." 
                },
                { 
                    term: "To bounce back", 
                    definition: "To recover quickly from a difficult situation.", 
                    defTrans: "recuperar-se / dar a volta por cima",
                    example: "It takes strength to bounce back after a loss.", 
                    exTrans: "É preciso força para se recuperar após uma perda.",
                    audioFront: "TTS: To bounce back",
                    audioBack: "TTS: It takes strength to bounce back after a loss." 
                },
                { 
                    term: "To buy", 
                    definition: "To obtain in exchange for payment.", 
                    defTrans: "comprar",
                    example: "Don't buy things you don't really need.", 
                    exTrans: "Não compre coisas que você realmente não precisa.",
                    audioFront: "TTS: To buy",
                    audioBack: "TTS: Don't buy things you don't really need." 
                },
                { 
                    term: "To change", 
                    definition: "To make or become different.", 
                    defTrans: "mudar",
                    example: "The world changes fast in a digital age.", 
                    exTrans: "O mundo muda rápido em uma era digital.",
                    audioFront: "TTS: To change",
                    audioBack: "TTS: The world changes fast in a digital age." 
                },
                { 
                    term: "To close", 
                    definition: "To move so as to cover an opening; to end operations.", 
                    defTrans: "fechar",
                    example: "The old factory closed during the recession.", 
                    exTrans: "A antiga fábrica fechou durante a recessão.",
                    audioFront: "TTS: To close",
                    audioBack: "TTS: The old factory closed during the recession." 
                },
                { 
                    term: "To come together", 
                    definition: "To join or meet to become a single unit.", 
                    defTrans: "unir-se / juntar-se",
                    example: "The community came together to help.", 
                    exTrans: "A comunidade se uniu para ajudar.",
                    audioFront: "TTS: To come together",
                    audioBack: "TTS: The community came together to help." 
                },
                { 
                    term: "To connect", 
                    definition: "To bring together into contact so that a link is established.", 
                    defTrans: "conectar",
                    example: "Technology connects people worldwide.", 
                    exTrans: "A tecnologia conecta pessoas no mundo todo.",
                    audioFront: "TTS: To connect",
                    audioBack: "TTS: Technology connects people worldwide." 
                },
                { 
                    term: "To cope", 
                    definition: "To deal effectively with something difficult.", 
                    defTrans: "lidar com / suportar",
                    example: "How do you cope with high stress?", 
                    exTrans: "Como você lida com o estresse alto?",
                    audioFront: "TTS: To cope",
                    audioBack: "TTS: How do you cope with high stress?" 
                },
                { 
                    term: "To cause", 
                    definition: "To make something happen.", 
                    defTrans: "causar",
                    example: "High debt often causes financial problems.", 
                    exTrans: "Dívidas altas frequentemente causam problemas financeiros.",
                    audioFront: "TTS: To cause",
                    audioBack: "TTS: High debt often causes financial problems." 
                },
                { 
                    term: "To decrease", 
                    definition: "To make or become smaller or fewer in amount.", 
                    defTrans: "diminuir",
                    example: "The family's income decreased recently.", 
                    exTrans: "A renda da família diminuiu recentemente.",
                    audioFront: "TTS: To decrease",
                    audioBack: "TTS: The family's income decreased recently." 
                },
                { 
                    term: "To define", 
                    definition: "To state or describe exactly the nature or scope of.", 
                    defTrans: "definir",
                    example: "How do you define the silver lining?", 
                    exTrans: "Como você define o lado bom?",
                    audioFront: "TTS: To define",
                    audioBack: "TTS: How do you define the silver lining?" 
                },
                { 
                    term: "To demonstrate", 
                    definition: "To clearly show the truth of something by giving proof.", 
                    defTrans: "demonstrar",
                    example: "He demonstrated great resilience yesterday.", 
                    exTrans: "Ele demonstrou grande resiliência ontem.",
                    audioFront: "TTS: To demonstrate",
                    audioBack: "TTS: He demonstrated great resilience yesterday." 
                },
                { 
                    term: "To develop", 
                    definition: "To grow or become more mature, advanced, or elaborate.", 
                    defTrans: "desenvolver",
                    example: "We must develop a better strategy.", 
                    exTrans: "Devemos desenvolver uma estratégia melhor.",
                    audioFront: "TTS: To develop",
                    audioBack: "TTS: We must develop a better strategy." 
                },
                { 
                    term: "To discover", 
                    definition: "To find unexpectedly or during a search.", 
                    defTrans: "descobrir",
                    example: "I discovered my potential during the crisis.", 
                    exTrans: "Eu descobri meu potencial durante a crise.",
                    audioFront: "TTS: To discover",
                    audioBack: "TTS: I discovered my potential during the crisis." 
                },
                { 
                    term: "To discuss", 
                    definition: "To talk about something with another person or group.", 
                    defTrans: "discutir / debater",
                    example: "Let's discuss the budget at the meeting.", 
                    exTrans: "Vamos discutir o orçamento na reunião.",
                    audioFront: "TTS: To discuss",
                    audioBack: "TTS: Let's discuss the budget at the meeting." 
                },
                { 
                    term: "To emphasize", 
                    definition: "To give special importance or prominence to something.", 
                    defTrans: "enfatizar",
                    example: "The report emphasizes economic growth.", 
                    exTrans: "O relatório enfatiza o crescimento econômico.",
                    audioFront: "TTS: To emphasize",
                    audioBack: "TTS: The report emphasizes economic growth." 
                },
                { 
                    term: "To end", 
                    definition: "To come to a finish.", 
                    defTrans: "terminar / acabar",
                    example: "The period of lockdown finally ended.", 
                    exTrans: "O período de confinamento finalmente acabou.",
                    audioFront: "TTS: To end",
                    audioBack: "TTS: The period of lockdown finally ended." 
                },
                { 
                    term: "To experience", 
                    definition: "To encounter or undergo an event or occurrence.", 
                    defTrans: "vivenciar / passar por",
                    example: "They experienced many challenges last year.", 
                    exTrans: "Eles vivenciaram muitos desafios no ano passado.",
                    audioFront: "TTS: To experience",
                    audioBack: "TTS: They experienced many challenges last year." 
                },
                { 
                    term: "To face", 
                    definition: "To confront and deal with.", 
                    defTrans: "encarar / enfrentar",
                    example: "We are ready to face the truth.", 
                    exTrans: "Estamos prontos para enfrentar a verdade.",
                    audioFront: "TTS: To face",
                    audioBack: "TTS: We are ready to face the truth." 
                },
                { 
                    term: "To feel", 
                    definition: "To experience an emotion or physical sensation.", 
                    defTrans: "sentir",
                    example: "I feel optimistic about the solution.", 
                    exTrans: "Eu me sinto otimista em relação à solução.",
                    audioFront: "TTS: To feel",
                    audioBack: "TTS: I feel optimistic about the solution." 
                },
                // --- Vocabulary Flashcards: Area 1 (Verbs G-L) ---
                { 
                    term: "To find", 
                    definition: "To discover by chance or effort.", 
                    defTrans: "encontrar",
                    example: "Can you find a job in this market?", 
                    exTrans: "Você consegue encontrar um emprego neste mercado?",
                    audioFront: "TTS: To find",
                    audioBack: "TTS: Can you find a job in this market?" 
                },
                { 
                    term: "To focus", 
                    definition: "To pay particular attention to something.", 
                    defTrans: "focar",
                    example: "Focus on the opportunity, not the problem.", 
                    exTrans: "Foque na oportunidade, não no problema.",
                    audioFront: "TTS: To focus",
                    audioBack: "TTS: Focus on the opportunity, not the problem." 
                },
                { 
                    term: "To force", 
                    definition: "To make someone do something against their will.", 
                    defTrans: "forçar / obrigar",
                    example: "The recession forced us to change.", 
                    exTrans: "A recessão nos obrigou a mudar.",
                    audioFront: "TTS: To force",
                    audioBack: "TTS: The recession forced us to change." 
                },
                { 
                    term: "To guarantee", 
                    definition: "To provide a formal assurance or promise.", 
                    defTrans: "garantir",
                    example: "No one can guarantee total success.", 
                    exTrans: "Ninguém pode garantir o sucesso total.",
                    audioFront: "TTS: To guarantee",
                    audioBack: "TTS: No one can guarantee total success." 
                },
                { 
                    term: "To happen", 
                    definition: "To take place; occur.", 
                    defTrans: "acontecer",
                    example: "What happened to the stock market?", 
                    exTrans: "O que aconteceu com o mercado de ações?",
                    audioFront: "TTS: To happen",
                    audioBack: "TTS: What happened to the stock market?" 
                },
                { 
                    term: "To have", 
                    definition: "To possess, own, or hold.", 
                    defTrans: "ter",
                    example: "Do you have enough support?", 
                    exTrans: "Você tem apoio suficiente?",
                    audioFront: "TTS: To have",
                    audioBack: "TTS: Do you have enough support?" 
                },
                { 
                    term: "To help", 
                    definition: "To make it easier for someone to do something.", 
                    defTrans: "ajudar",
                    example: "Support groups help people in need.", 
                    exTrans: "Grupos de apoio ajudam pessoas necessitadas.",
                    audioFront: "TTS: To help",
                    audioBack: "TTS: Support groups help people in need." 
                },
                { 
                    term: "To hit", 
                    definition: "To reach a particular level or point; to have a negative impact.", 
                    defTrans: "atingir",
                    example: "The financial crisis hit the city hard.", 
                    exTrans: "A crise financeira atingiu a cidade com força.",
                    audioFront: "TTS: To hit",
                    audioBack: "TTS: The financial crisis hit the city hard." 
                },
                { 
                    term: "To inspire", 
                    definition: "To fill someone with the urge or ability to do or feel something.", 
                    defTrans: "inspirar",
                    example: "Her story inspires everyone who hears it.", 
                    exTrans: "A história dela inspira todos que a ouvem.",
                    audioFront: "TTS: To inspire",
                    audioBack: "TTS: Her story inspires everyone who hears it." 
                },
                { 
                    term: "To interest", 
                    definition: "To excite the curiosity or attention of.", 
                    defTrans: "interessar",
                    example: "Does the topic of economics interest you?", 
                    exTrans: "O tema economia te interessa?",
                    audioFront: "TTS: To interest",
                    audioBack: "TTS: Does the topic of economics interest you?" 
                },
                { 
                    term: "To interview", 
                    definition: "To hold an interview with someone.", 
                    defTrans: "entrevistar",
                    example: "He was interviewed for the manager position.", 
                    exTrans: "Ele foi entrevistado para o cargo de gerente.",
                    audioFront: "TTS: To interview",
                    audioBack: "TTS: He was interviewed for the manager position." 
                },
                { 
                    term: "To invest", 
                    definition: "To expend money or effort with the expectation of a result.", 
                    defTrans: "investir",
                    example: "It is wise to invest in your education.", 
                    exTrans: "É sensato investir na sua educação.",
                    audioFront: "TTS: To invest",
                    audioBack: "TTS: It is wise to invest in your education." 
                },
                { 
                    term: "To keep", 
                    definition: "To continue or cause to continue in a specified state.", 
                    defTrans: "manter / guardar",
                    example: "Please keep a positive outlook.", 
                    exTrans: "Por favor, mantenha uma perspectiva positiva.",
                    audioFront: "TTS: To keep",
                    audioBack: "TTS: Please keep a positive outlook." 
                },
                { 
                    term: "To learn", 
                    definition: "To gain or acquire knowledge of or skill in something.", 
                    defTrans: "aprender",
                    example: "We learn many lessons from hardship.", 
                    exTrans: "Aprendemos muitas lições com a dificuldade.",
                    audioFront: "TTS: To learn",
                    audioBack: "TTS: We learn many lessons from hardship." 
                },
                { 
                    term: "To lead to", 
                    definition: "To cause or result in something.", 
                    defTrans: "levar a",
                    example: "Innovation often leads to growth.", 
                    exTrans: "A inovação muitas vezes leva ao crescimento.",
                    audioFront: "TTS: To lead to",
                    audioBack: "TTS: Innovation often leads to growth." 
                },
                { 
                    term: "To limit", 
                    definition: "To set or serve as a limit to.", 
                    defTrans: "limitar",
                    example: "We need to limit our daily expenses.", 
                    exTrans: "Precisamos limitar nossas despesas diárias.",
                    audioFront: "TTS: To limit",
                    audioBack: "TTS: We need to limit our daily expenses." 
                },
                { 
                    term: "To live", 
                    definition: "To have one's home in a particular place.", 
                    defTrans: "viver",
                    example: "Where do your parents live?", 
                    exTrans: "Onde seus pais moram?",
                    audioFront: "TTS: To live",
                    audioBack: "TTS: Where do your parents live?" 
                },
                { 
                    term: "To lose", 
                    definition: "To be deprived of or cease to retain something.", 
                    defTrans: "perder",
                    example: "Don't lose your optimism.", 
                    exTrans: "Não perca seu otimismo.",
                    audioFront: "TTS: To lose",
                    audioBack: "TTS: Don't lose your optimism." 
                },
                // --- Vocabulary Flashcards: Area 1 (Verbs M-W) ---
                { 
                    term: "To manage", 
                    definition: "To be in charge of; to succeed in surviving or attaining one's aims.", 
                    defTrans: "gerenciar / lidar com",
                    example: "She can manage a tight budget.", 
                    exTrans: "<span style='color:#0077b6'>(Ela consegue gerenciar um orçamento apertado.)</span>",
                    audioFront: "TTS: To manage",
                    audioBack: "TTS: She can manage a tight budget." 
                },
                { 
                    term: "To need", 
                    definition: "To require something because it is essential or very important.", 
                    defTrans: "precisar",
                    example: "We need support during difficult times.", 
                    exTrans: "<span style='color:#0077b6'>(Precisamos de apoio durante tempos difíceis.)</span>",
                    audioFront: "TTS: To need",
                    audioBack: "TTS: We need support during difficult times." 
                },
                { 
                    term: "To omit", 
                    definition: "To leave out or exclude someone or something.", 
                    defTrans: "omitir",
                    example: "Do not omit the important details.", 
                    exTrans: "<span style='color:#0077b6'>(Não omita os detalhes importantes.)</span>",
                    audioFront: "TTS: To omit",
                    audioBack: "TTS: Do not omit the important details." 
                },
                { 
                    term: "To overcome", 
                    definition: "To succeed in dealing with a problem or difficulty.", 
                    defTrans: "superar",
                    example: "We will overcome this challenge together.", 
                    exTrans: "<span style='color:#0077b6'>(Nós vamos superar este desafio juntos.)</span>",
                    audioFront: "TTS: To overcome",
                    audioBack: "TTS: We will overcome this challenge together." 
                },
                { 
                    term: "To own", 
                    definition: "To have something as one's own; possess.", 
                    defTrans: "possuir / ser dono de",
                    example: "My uncle owns a resilient company.", 
                    exTrans: "<span style='color:#0077b6'>(Meu tio é dono de uma empresa resiliente.)</span>",
                    audioFront: "TTS: To own",
                    audioBack: "TTS: My uncle owns a resilient company." 
                },
                { 
                    term: "To present", 
                    definition: "To give or show something to someone.", 
                    defTrans: "apresentar",
                    example: "He presented a solution to the problem.", 
                    exTrans: "<span style='color:#0077b6'>(Ele apresentou uma solução para o problema.)</span>",
                    audioFront: "TTS: To present",
                    audioBack: "TTS: He presented a solution to the problem." 
                },
                { 
                    term: "To propose", 
                    definition: "To put forward an idea or plan for consideration.", 
                    defTrans: "propor",
                    example: "Let's propose a plan for the cleanup.", 
                    exTrans: "<span style='color:#0077b6'>(Vamos propor um plano para a limpeza.)</span>",
                    audioFront: "TTS: To propose",
                    audioBack: "TTS: Let's propose a plan for the cleanup." 
                },
                { 
                    term: "To read", 
                    definition: "To look at and comprehend the meaning of written matter.", 
                    defTrans: "ler",
                    example: "I read about the recession in the news.", 
                    exTrans: "<span style='color:#0077b6'>(Eu li sobre a recessão nas notícias.)</span>",
                    audioFront: "TTS: To read",
                    audioBack: "TTS: I read about the recession in the news." 
                },
                { 
                    term: "To receive", 
                    definition: "To be given, presented with, or paid something.", 
                    defTrans: "receber",
                    example: "They received a bank loan recently.", 
                    exTrans: "<span style='color:#0077b6'>(Eles receberam um empréstimo bancário recentemente.)</span>",
                    audioFront: "TTS: To receive",
                    audioBack: "TTS: They received a bank loan recently." 
                },
                { 
                    term: "To rely on", 
                    definition: "To depend on with full trust or confidence.", 
                    defTrans: "confiar em / depender de",
                    example: "You can rely on your family.", 
                    exTrans: "<span style='color:#0077b6'>(Você pode confiar na sua família.)</span>",
                    audioFront: "TTS: To rely on",
                    audioBack: "TTS: You can rely on your family." 
                },
                { 
                    term: "To remember", 
                    definition: "To bring a fact, event, or situation back into one's mind.", 
                    defTrans: "lembrar",
                    example: "Remember to find the silver lining.", 
                    exTrans: "<span style='color:#0077b6'>(Lembre-se de encontrar o lado bom.)</span>",
                    audioFront: "TTS: To remember",
                    audioBack: "TTS: Remember to find the silver lining." 
                },
                { 
                    term: "To show", 
                    definition: "To allow or cause something to be visible.", 
                    defTrans: "mostrar",
                    example: "Data shows that unemployment is rising.", 
                    exTrans: "<span style='color:#0077b6'>(Dados mostram que o desemprego está aumentando.)</span>",
                    audioFront: "TTS: To show",
                    audioBack: "TTS: Data shows that unemployment is rising." 
                },
                { 
                    term: "To speak", 
                    definition: "To say something in order to convey information.", 
                    defTrans: "falar",
                    example: "She speaks about resilience with strength.", 
                    exTrans: "<span style='color:#0077b6'>(Ela fala sobre resiliência com força.)</span>",
                    audioFront: "TTS: To speak",
                    audioBack: "TTS: She speaks about resilience with strength." 
                },
                { 
                    term: "To start", 
                    definition: "To begin or be reckoned from a particular point in time or space.", 
                    defTrans: "começar",
                    example: "The financial struggle started last year.", 
                    exTrans: "<span style='color:#0077b6'>(A luta financeira começou no ano passado.)</span>",
                    audioFront: "TTS: To start",
                    audioBack: "TTS: The financial struggle started last year." 
                },
                { 
                    term: "To stop", 
                    definition: "To cease to happen.", 
                    defTrans: "parar",
                    example: "We must stop excessive consumption.", 
                    exTrans: "<span style='color:#0077b6'>(Devemos parar o consumo excessivo.)</span>",
                    audioFront: "TTS: To stop",
                    audioBack: "TTS: We must stop excessive consumption." 
                },
                { 
                    term: "To struggle", 
                    definition: "To make forceful efforts to get free; a difficulty.", 
                    defTrans: "lutar / ter dificuldade",
                    example: "Small shops struggled during lockdown.", 
                    exTrans: "<span style='color:#0077b6'>(Pequenas lojas lutaram durante o confinamento.)</span>",
                    audioFront: "TTS: To struggle",
                    audioBack: "TTS: Small shops struggled during lockdown." 
                },
                { 
                    term: "To study", 
                    definition: "To devote time and attention to acquiring knowledge on an academic subject.", 
                    defTrans: "estudar",
                    example: "He studies the global economy at school.", 
                    exTrans: "<span style='color:#0077b6'>(Ele estuda a economia global na escola.)</span>",
                    audioFront: "TTS: To study",
                    audioBack: "TTS: He studies the global economy at school." 
                },
                { 
                    term: "To support", 
                    definition: "To give assistance to, especially financially or emotionally.", 
                    defTrans: "apoiar",
                    example: "Neighbors support each other here.", 
                    exTrans: "<span style='color:#0077b6'>(Os vizinhos se apoiam aqui.)</span>",
                    audioFront: "TTS: To support",
                    audioBack: "TTS: Neighbors support each other here." 
                },
                { 
                    term: "To suppose", 
                    definition: "To think or assume that something is true or probable.", 
                    defTrans: "supor / achar",
                    example: "I suppose things will improve soon.", 
                    exTrans: "<span style='color:#0077b6'>(Suponho que as coisas vão melhorar logo.)</span>",
                    audioFront: "TTS: To suppose",
                    audioBack: "TTS: I suppose things will improve soon." 
                },
                { 
                    term: "To talk", 
                    definition: "To speak in order to give information or express ideas.", 
                    defTrans: "conversar / falar",
                    example: "Let's talk about your positive outlook.", 
                    exTrans: "<span style='color:#0077b6'>(Vamos conversar sobre sua perspectiva positiva.)</span>",
                    audioFront: "TTS: To talk",
                    audioBack: "TTS: Let's talk about your positive outlook." 
                },
                { 
                    term: "To teach", 
                    definition: "To impart knowledge to or instruct someone as to how to do something.", 
                    defTrans: "ensinar",
                    example: "Hard times teach us valuable lessons.", 
                    exTrans: "<span style='color:#0077b6'>(Tempos difíceis nos ensinam lições valiosas.)</span>",
                    audioFront: "TTS: To teach",
                    audioBack: "TTS: Hard times teach us valuable lessons." 
                },
                { 
                    term: "To think", 
                    definition: "To have a particular belief or idea.", 
                    defTrans: "pensar / achar",
                    example: "I think we need more innovation.", 
                    exTrans: "<span style='color:#0077b6'>(Acho que precisamos de mais inovação.)</span>",
                    audioFront: "TTS: To think",
                    audioBack: "TTS: I think we need more innovation." 
                },
                { 
                    term: "To want", 
                    definition: "To have a desire to possess or do something.", 
                    defTrans: "querer",
                    example: "They want to achieve their aims.", 
                    exTrans: "<span style='color:#0077b6'>(Eles querem alcançar seus objetivos.)</span>",
                    audioFront: "TTS: To want",
                    audioBack: "TTS: They want to achieve their aims." 
                },
                { 
                    term: "To work", 
                    definition: "To be engaged in physical or mental activity in order to achieve a purpose.", 
                    defTrans: "trabalhar",
                    example: "He works hard to pay his debts.", 
                    exTrans: "<span style='color:#0077b6'>(Ele trabalha duro para pagar suas dívidas.)</span>",
                    audioFront: "TTS: To work",
                    audioBack: "TTS: He works hard to pay his debts." 
                },
                // --- Vocabulary Flashcards: Area 2 (Crisis & Economy Nouns/Adjectives) ---
                { 
                    term: "Financial", 
                    definition: "Relating to finance or money matters.", 
                    defTrans: "financeiro(a)",
                    example: "A financial setback can be tough.", 
                    exTrans: "<span style='color:#0077b6'>(Um revés financeiro pode ser difícil.)</span>",
                    audioFront: "TTS: Financial",
                    audioBack: "TTS: A financial setback can be tough." 
                },
                { 
                    term: "Crisis", 
                    definition: "A time of intense difficulty, trouble, or danger.", 
                    defTrans: "crise",
                    example: "The world is facing a major crisis.", 
                    exTrans: "<span style='color:#0077b6'>(O mundo está enfrentando uma grande crise.)</span>",
                    audioFront: "TTS: Crisis",
                    audioBack: "TTS: The world is facing a major crisis." 
                },
                { 
                    term: "Economy", 
                    definition: "The state of a country or region in terms of production and consumption.", 
                    defTrans: "economia",
                    example: "The global economy is interconnected.", 
                    exTrans: "<span style='color:#0077b6'>(A economia global é interconectada.)</span>",
                    audioFront: "TTS: Economy",
                    audioBack: "TTS: The global economy is interconnected." 
                },
                { 
                    term: "Economic", 
                    definition: "Relating to economics or the economy.", 
                    defTrans: "econômico(a)",
                    example: "We are in an economic recession.", 
                    exTrans: "<span style='color:#0077b6'>(Estamos em uma recessão econômica.)</span>",
                    audioFront: "TTS: Economic",
                    audioBack: "TTS: We are in an economic recession." 
                },
                { 
                    term: "Money", 
                    definition: "A current medium of exchange in the form of coins and banknotes.", 
                    defTrans: "dinheiro",
                    example: "Manage your money wisely.", 
                    exTrans: "<span style='color:#0077b6'>(Gerencie seu dinheiro com sabedoria.)</span>",
                    audioFront: "TTS: Money",
                    audioBack: "TTS: Manage your money wisely." 
                },
                { 
                    term: "Debt", 
                    definition: "Something, typically money, that is owed or due.", 
                    defTrans: "dívida",
                    example: "He needs to pay off his debt.", 
                    exTrans: "<span style='color:#0077b6'>(Ele precisa quitar sua dívida.)</span>",
                    audioFront: "TTS: Debt",
                    audioBack: "TTS: He needs to pay off his debt." 
                },
                { 
                    term: "Budget", 
                    definition: "An estimate of income and expenditure for a set period of time.", 
                    defTrans: "orçamento",
                    example: "Check your monthly budget often.", 
                    exTrans: "<span style='color:#0077b6'>(Verifique seu orçamento mensal com frequência.)</span>",
                    audioFront: "TTS: Budget",
                    audioBack: "TTS: Check your monthly budget often." 
                },
                { 
                    term: "Income", 
                    definition: "Money received, especially on a regular basis, for work.", 
                    defTrans: "renda / rendimento",
                    example: "My income decreased after the job loss.", 
                    exTrans: "<span style='color:#0077b6'>(Minha renda diminuiu após a perda do emprego.)</span>",
                    audioFront: "TTS: Income",
                    audioBack: "TTS: My income decreased after the job loss." 
                },
                { 
                    term: "Savings", 
                    definition: "The money that a person has saved, especially in a bank.", 
                    defTrans: "economias / poupança",
                    example: "Keep your savings in a safe place.", 
                    exTrans: "<span style='color:#0077b6'>(Mantenha suas economias em um lugar seguro.)</span>",
                    audioFront: "TTS: Savings",
                    audioBack: "TTS: Keep your savings in a safe place." 
                },
                { 
                    term: "Expense", 
                    definition: "The cost required for something; the money spent on something.", 
                    defTrans: "despesa / gasto",
                    example: "Rent is a fixed expense.", 
                    exTrans: "<span style='color:#0077b6'>(O aluguel é uma despesa fixa.)</span>",
                    audioFront: "TTS: Expense",
                    audioBack: "TTS: Rent is a fixed expense." 
                },
                { 
                    term: "Unemployment", 
                    definition: "The state of being unemployed or not having a job.", 
                    defTrans: "desemprego",
                    example: "Unemployment is high in the city.", 
                    exTrans: "<span style='color:#0077b6'>(O desemprego está alto na cidade.)</span>",
                    audioFront: "TTS: Unemployment",
                    audioBack: "TTS: Unemployment is high in the city." 
                },
                { 
                    term: "Job loss", 
                    definition: "The state of no longer having a job.", 
                    defTrans: "perda de emprego",
                    example: "Job loss causes a lot of stress.", 
                    exTrans: "<span style='color:#0077b6'>(A perda de emprego causa muito estresse.)</span>",
                    audioFront: "TTS: Job loss",
                    audioBack: "TTS: Job loss causes a lot of stress." 
                },
                { 
                    term: "Salary / Wage", 
                    definition: "A fixed regular payment made by an employer to an employee.", 
                    defTrans: "salário",
                    example: "Is your salary paid every week?", 
                    exTrans: "<span style='color:#0077b6'>(Seu salário é pago toda semana?)</span>",
                    audioFront: "TTS: Salary or Wage",
                    audioBack: "TTS: Is your salary paid every week?" 
                },
                { 
                    term: "Investment", 
                    definition: "The action or process of investing money for profit or material result.", 
                    defTrans: "investimento",
                    example: "Education is the best investment.", 
                    exTrans: "<span style='color:#0077b6'>(A educação é o melhor investimento.)</span>",
                    audioFront: "TTS: Investment",
                    audioBack: "TTS: Education is the best investment." 
                },
                { 
                    term: "Bankrupt(cy)", 
                    definition: "The legal state of a person or entity that cannot repay debts.", 
                    defTrans: "falido(a) / falência",
                    example: "The company went bankrupt.", 
                    exTrans: "<span style='color:#0077b6'>(A empresa faliu.)</span>",
                    audioFront: "TTS: Bankruptcy",
                    audioBack: "TTS: The company went bankrupt." 
                },
                { 
                    term: "Recession", 
                    definition: "A period of temporary economic decline.", 
                    defTrans: "recessão",
                    example: "A recession leads to low growth.", 
                    exTrans: "<span style='color:#0077b6'>(Uma recessão leva ao baixo crescimento.)</span>",
                    audioFront: "TTS: Recession",
                    audioBack: "TTS: A recession leads to low growth." 
                },
                { 
                    term: "Market", 
                    definition: "The world of commercial activity where goods are bought and sold.", 
                    defTrans: "mercado",
                    example: "The stock market hit a record low.", 
                    exTrans: "<span style='color:#0077b6'>(O mercado de ações atingiu o nível mais baixo da história.)</span>",
                    audioFront: "TTS: Market",
                    audioBack: "TTS: The stock market hit a record low." 
                },
                { 
                    term: "Loan", 
                    definition: "A thing that is borrowed, especially a sum of money that is expected to be paid back.", 
                    defTrans: "empréstimo",
                    example: "I took a loan from the bank.", 
                    exTrans: "<span style='color:#0077b6'>(Eu peguei um empréstimo no banco.)</span>",
                    audioFront: "TTS: Loan",
                    audioBack: "TTS: I took a loan from the bank." 
                },
                { 
                    term: "Cost of living", 
                    definition: "The level of prices relating to a range of everyday items.", 
                    defTrans: "custo de vida",
                    example: "The cost of living is higher now.", 
                    exTrans: "<span style='color:#0077b6'>(O custo de vida está mais alto agora.)</span>",
                    audioFront: "TTS: Cost of living",
                    audioBack: "TTS: The cost of living is higher now." 
                },
                { 
                    term: "Hard times", 
                    definition: "Periods of hardship or difficulty.", 
                    defTrans: "tempos difíceis",
                    example: "We support each other in hard times.", 
                    exTrans: "<span style='color:#0077b6'>(Nós nos apoiamos em tempos difíceis.)</span>",
                    audioFront: "TTS: Hard times",
                    audioBack: "TTS: We support each other in hard times." 
                },
                { 
                    term: "Resilience / Resilient", 
                    definition: "The capacity to recover quickly from difficulties; toughness.", 
                    defTrans: "resiliência / resiliente",
                    example: "A resilient person never gives up.", 
                    exTrans: "<span style='color:#0077b6'>(Uma pessoa resiliente nunca desiste.)</span>",
                    audioFront: "TTS: Resilience or Resilient",
                    audioBack: "TTS: A resilient person never gives up." 
                },
                { 
                    term: "Silver lining", 
                    definition: "A consoling or hopeful prospect in the midst of a misfortune.", 
                    defTrans: "lado bom",
                    example: "Look for the silver lining in failure.", 
                    exTrans: "<span style='color:#0077b6'>(Procure pelo lado bom no fracasso.)</span>",
                    audioFront: "TTS: Silver lining",
                    audioBack: "TTS: Look for the silver lining in failure." 
                },
                // --- Vocabulary Flashcards: Chapter 6 Final Completion ---
                { 
                    term: "Actually", 
                    definition: "Used to provide more detail or correct a statement (False Cognate).", 
                    defTrans: "Na verdade / Realmente (não 'atualmente')",
                    example: "He developed a service which actually saved his business.", 
                    exTrans: "<span style='color:#0077b6'>(Ele desenvolveu um serviço que realmente salvou seu negócio.)</span>",
                    audioFront: "TTS: Actually",
                    audioBack: "TTS: He developed a service which actually saved his business." 
                },
                { 
                    term: "To save", 
                    definition: "To keep safe or rescue from harm or loss.", 
                    defTrans: "salvar / economizar",
                    example: "The delivery service actually saved his business.", 
                    exTrans: "<span style='color:#0077b6'>(O serviço de entrega realmente salvou o negócio dele.)</span>",
                    audioFront: "TTS: To save",
                    audioBack: "TTS: The delivery service actually saved his business." 
                },
                { 
                    term: "To contribute", 
                    definition: "To give something (money, time, help) to help achieve a goal.", 
                    defTrans: "contribuir",
                    example: "Let's propose a plan where everyone contributes.", 
                    exTrans: "<span style='color:#0077b6'>(Vamos propor um plano onde todos contribuam.)</span>",
                    audioFront: "TTS: To contribute",
                    audioBack: "TTS: Let's propose a plan where everyone contributes." 
                },
                { 
                    term: "Tragedy", 
                    definition: "An event causing great suffering, destruction, and distress.", 
                    defTrans: "tragédia",
                    example: "The financial crisis was a tragedy for many families.", 
                    exTrans: "<span style='color:#0077b6'>(A crise financeira foi uma tragédia para muitas famílias.)</span>",
                    audioFront: "TTS: Tragedy",
                    audioBack: "TTS: The financial crisis was a tragedy for many families." 
                },
                { 
                    term: "United Nations (UN)", 
                    definition: "An international organization formed to increase political and economic cooperation.", 
                    defTrans: "Nações Unidas (ONU)",
                    example: "The UN works to maintain global peace and security.", 
                    exTrans: "<span style='color:#0077b6'>(A ONU trabalha para manter a paz e a segurança global.)</span>",
                    audioFront: "TTS: United Nations",
                    audioBack: "TTS: The UN works to maintain global peace and security." 
                },
                { 
                    term: "Worse than", 
                    definition: "The irregular comparative form of the adjective 'bad'.", 
                    defTrans: "pior que",
                    example: "The recession is worse than we expected.", 
                    exTrans: "<span style='color:#0077b6'>(A recessão está pior do que esperávamos.)</span>",
                    audioFront: "TTS: Worse than",
                    audioBack: "TTS: The recession is worse than we expected." 
                },
                // --- Vocabulary Flashcards: Area 3 (Phrases & Relative Clauses) ---
            
                { 
                    term: "The crisis which started...", 
                    definition: "A phrase used to identify the beginning of a specific economic downturn.", 
                    defTrans: "A crise que começou...",
                    example: "The crisis which started in 2008 was bad.", 
                    exTrans: "<span style='color:#0077b6'>(A crise que começou em 2008 foi ruim.)</span>",
                    audioFront: "TTS: The crisis which started",
                    audioBack: "TTS: The crisis which started in 2008 was bad." 
                },
                { 
                    term: "People who lost everything", 
                    definition: "A defining clause specifying individuals who suffered total financial loss.", 
                    defTrans: "Pessoas que perderam tudo",
                    example: "We help people who lost everything.", 
                    exTrans: "<span style='color:#0077b6'>(Ajudamos pessoas que perderam tudo.)</span>",
                    audioFront: "TTS: People who lost everything",
                    audioBack: "TTS: We help people who lost everything." 
                },
                { 
                    term: "A time when we adapted", 
                    definition: "A phrase referring to a specific period of adjustment to new circumstances.", 
                    defTrans: "Um tempo em que nos adaptamos",
                    example: "Lockdown was a time when we adapted.", 
                    exTrans: "<span style='color:#0077b6'>(O confinamento foi um tempo em que nos adaptamos.)</span>",
                    audioFront: "TTS: A time when we adapted",
                    audioBack: "TTS: Lockdown was a time when we adapted." 
                },
                { 
                    term: "The place where support was offered", 
                    definition: "A phrase identifying the location where help was available.", 
                    defTrans: "O lugar onde apoio foi oferecido",
                    example: "That is the place where support was offered.", 
                    exTrans: "<span style='color:#0077b6'>(Aquele é o lugar onde apoio foi oferecido.)</span>",
                    audioFront: "TTS: The place where support was offered",
                    audioBack: "TTS: That is the place where support was offered." 
                },
                { 
                    term: "The company whose strategy failed", 
                    definition: "A phrase using a possessive relative clause to identify a specific failed business.", 
                    defTrans: "A empresa cuja estratégia falhou",
                    example: "The company whose strategy failed closed.", 
                    exTrans: "<span style='color:#0077b6'>(A empresa cuja estratégia falhou fechou.)</span>",
                    audioFront: "TTS: The company whose strategy failed",
                    audioBack: "TTS: The company whose strategy failed closed." 
                },
                { 
                    term: "The solution that nobody expected", 
                    definition: "A phrase referring to an effective but surprising answer to a problem.", 
                    defTrans: "A solução que ninguém esperava",
                    example: "It was the solution that nobody expected.", 
                    exTrans: "<span style='color:#0077b6'>(Foi a solução que ninguém esperava.)</span>",
                    audioFront: "TTS: The solution that nobody expected",
                    audioBack: "TTS: It was the solution that nobody expected." 
                },
                { 
                    term: "My friend, who is very optimistic", 
                    definition: "A non-defining clause adding extra information about a person's character.", 
                    defTrans: "Meu amigo, que é muito otimista",
                    example: "My friend, who is very optimistic, helps me.", 
                    exTrans: "<span style='color:#0077b6'>(Meu amigo, que é muito otimista, me ajuda.)</span>",
                    audioFront: "TTS: My friend, who is very optimistic",
                    audioBack: "TTS: My friend, who is very optimistic, helps me." 
                },
                { 
                    term: "Financial problems, which are common", 
                    definition: "A non-defining clause adding a general fact about monetary difficulties.", 
                    defTrans: "Problemas financeiros, que são comuns",
                    example: "Financial problems, which are common, are hard.", 
                    exTrans: "<span style='color:#0077b6'>(Problemas financeiros, que são comuns, são difíceis.)</span>",
                    audioFront: "TTS: Financial problems, which are common",
                    audioBack: "TTS: Financial problems, which are common, are hard." 
                },
                { 
                    term: "Learn from hardship", 
                    definition: "To gain wisdom or strength through difficult experiences.", 
                    defTrans: "Aprender com a dificuldade",
                    example: "We must learn from hardship.", 
                    exTrans: "<span style='color:#0077b6'>(Devemos aprender com a dificuldade.)</span>",
                    audioFront: "TTS: Learn from hardship",
                    audioBack: "TTS: We must learn from hardship." 
                },
                { 
                    term: "Show resilience", 
                    definition: "The act of demonstrating toughness and the ability to recover during a crisis.", 
                    defTrans: "Mostrar resiliência",
                    example: "You can show resilience today.", 
                    exTrans: "<span style='color:#0077b6'>(Você pode mostrar resiliência hoje.)</span>",
                    audioFront: "TTS: Show resilience",
                    audioBack: "TTS: You can show resilience today." 
                },
                { 
                    term: "Find the silver lining", 
                    definition: "To look for something positive in a negative situation.", 
                    defTrans: "Encontrar o lado bom",
                    example: "Always try to find the silver lining.", 
                    exTrans: "<span style='color:#0077b6'>(Sempre tente encontrar o lado bom.)</span>",
                    audioFront: "TTS: Find the silver lining",
                    audioBack: "TTS: Always try to find the silver lining." 
                },
                { 
                    term: "Overcome challenges", 
                    definition: "To succeed in dealing with obstacles or difficult situations.", 
                    defTrans: "Superar desafios",
                    example: "Together we overcome challenges.", 
                    exTrans: "<span style='color:#0077b6'>(Juntos superamos desafios.)</span>",
                    audioFront: "TTS: Overcome challenges",
                    audioBack: "TTS: Together we overcome challenges." 
                },
                { 
                    term: "Bounce back stronger", 
                    definition: "To recover from a setback with even more strength than before.", 
                    defTrans: "Recuperar-se mais forte",
                    example: "I will bounce back stronger!", 
                    exTrans: "<span style='color:#0077b6'>(Vou dar a volta por cima mais forte!)</span>",
                    audioFront: "TTS: Bounce back stronger",
                    audioBack: "TTS: I will bounce back stronger." 
                },
                // --- Grammar Flashcards: Step 3 (Relative Clauses & Comparison) ---
                { 
                    term: "WHO (Relative Pronoun)", 
                    definition: "Used to refer to people as the subject of the clause.", 
                    defTrans: "Usado para pessoas (Sujeito)",
                    example: "The man who owns the shop is very resilient.", 
                    exTrans: "<span style='color:#0077b6'>(O homem que é dono da loja é muito resiliente.)</span>",
                    audioFront: "TTS: Who relative pronoun",
                    audioBack: "TTS: The man who owns the shop is very resilient." 
                },
                { 
                    term: "WHOM (Relative Pronoun)", 
                    definition: "Used to refer to people as the object of the clause (formal).", 
                    defTrans: "Usado para pessoas (Objeto/Formal)",
                    example: "The leader whom we supported was very inspiring.", 
                    exTrans: "<span style='color:#0077b6'>(O líder a quem apoiamos era muito inspirador.)</span>",
                    audioFront: "TTS: Whom relative pronoun",
                    audioBack: "TTS: The leader whom we supported was very inspiring." 
                },
                { 
                    term: "WHICH (Relative Pronoun)", 
                    definition: "Used to refer to things or animals.", 
                    defTrans: "Usado para coisas ou animais",
                    example: "The crisis which hit the market was global.", 
                    exTrans: "<span style='color:#0077b6'>(A crise que atingiu o mercado foi global.)</span>",
                    audioFront: "TTS: Which relative pronoun",
                    audioBack: "TTS: The crisis which hit the market was global." 
                },
                { 
                    term: "THAT (Relative Pronoun)", 
                    definition: "Used for people or things in defining clauses.", 
                    defTrans: "Usado para pessoas ou coisas (restritivo)",
                    example: "The help that we received was essential.", 
                    exTrans: "<span style='color:#0077b6'>(A ajuda que recebemos foi essencial.)</span>",
                    audioFront: "TTS: That relative pronoun",
                    audioBack: "TTS: The help that we received was essential." 
                },
                { 
                    term: "WHOSE (Relative Pronoun)", 
                    definition: "Used to show possession (whose = cujo/a).", 
                    defTrans: "Usado para indicação de posse",
                    example: "The family whose house was sold moved away.", 
                    exTrans: "<span style='color:#0077b6'>(A família cuja casa foi vendida se mudou.)</span>",
                    audioFront: "TTS: Whose relative pronoun",
                    audioBack: "TTS: The family whose house was sold moved away." 
                },
                { 
                    term: "WHERE (Relative Pronoun)", 
                    definition: "Used to refer to a specific place.", 
                    defTrans: "Usado para lugares",
                    example: "The town where I grew up is quite small.", 
                    exTrans: "<span style='color:#0077b6'>(A cidade onde eu cresci é bem pequena.)</span>",
                    audioFront: "TTS: Where relative pronoun",
                    audioBack: "TTS: The town where I grew up is quite small." 
                },
                { 
                    term: "WHEN (Relative Pronoun)", 
                    definition: "Used to refer to a specific time or period.", 
                    defTrans: "Usado para tempo",
                    example: "The period when we were kids was easier.", 
                    exTrans: "<span style='color:#0077b6'>(O período em que éramos crianças era mais fácil.)</span>",
                    audioFront: "TTS: When relative pronoun",
                    audioBack: "TTS: The period when we were kids was easier." 
                },
                { 
                    term: "Defining Relative Clause", 
                    definition: "Essential information to identify the noun; no commas.", 
                    defTrans: "Informação essencial; sem vírgulas",
                    example: "The people who stay optimistic succeed.", 
                    exTrans: "<span style='color:#0077b6'>(As pessoas que permanecem otimistas têm sucesso.)</span>",
                    audioFront: "TTS: Defining Relative Clause",
                    audioBack: "TTS: The people who stay optimistic succeed." 
                },
                { 
                    term: "Non-Defining Relative Clause", 
                    definition: "Extra information about the noun; uses commas.", 
                    defTrans: "Informação extra; usa vírgulas",
                    example: "My uncle, who is resilient, owns a shop.", 
                    exTrans: "<span style='color:#0077b6'>(Meu tio, que é resiliente, é dono de uma loja.)</span>",
                    audioFront: "TTS: Non-Defining Relative Clause",
                    audioBack: "TTS: My uncle, who is resilient, owns a shop." 
                },
                { 
                    term: "Comparative (Short adj)", 
                    definition: "Rule: adj + -er + than.", 
                    defTrans: "Adjetivo curto + -er + do que",
                    example: "Albert is braver than me.", 
                    exTrans: "<span style='color:#0077b6'>(Albert é mais corajoso do que eu.)</span>",
                    audioFront: "TTS: Comparative with short adjectives",
                    audioBack: "TTS: Albert is braver than me." 
                },
                { 
                    term: "Comparative (Long adj)", 
                    definition: "Rule: more + adj + than.", 
                    defTrans: "more + adjetivo longo + do que",
                    example: "Resilience is more important than money.", 
                    exTrans: "<span style='color:#0077b6'>(Resiliência é mais importante do que dinheiro.)</span>",
                    audioFront: "TTS: Comparative with long adjectives",
                    audioBack: "TTS: Resilience is more important than money." 
                },
                { 
                    term: "Superlative (Short adj)", 
                    definition: "Rule: the + adj + -est.", 
                    defTrans: "the + adjetivo curto + -est",
                    example: "He is the bravest boy in class.", 
                    exTrans: "<span style='color:#0077b6'>(Ele é o menino mais corajoso da classe.)</span>",
                    audioFront: "TTS: Superlative with short adjectives",
                    audioBack: "TTS: He is the bravest boy in class." 
                },
                { 
                    term: "Superlative (Long adj)", 
                    definition: "Rule: the most + adj.", 
                    defTrans: "the most + adjetivo longo",
                    example: "She is the most optimistic girl I know.", 
                    exTrans: "<span style='color:#0077b6'>(Ela é a menina mais otimista que eu conheço.)</span>",
                    audioFront: "TTS: Superlative with long adjectives",
                    audioBack: "TTS: She is the most optimistic girl I know." 
                },
                { 
                    term: "Irregular Comparison", 
                    definition: "Unique forms: good -> better -> best; bad -> worse -> worst.", 
                    defTrans: "Formas irregulares: bom e mau",
                    example: "This situation is better than before.", 
                    exTrans: "<span style='color:#0077b6'>(Esta situação é melhor do que antes.)</span>",
                    audioFront: "TTS: Irregular Comparison",
                    audioBack: "TTS: This situation is better than before." 
                },
                { 
                    term: "Inferiority", 
                    definition: "Rule: less + adj + than / the least + adj.", 
                    defTrans: "Comparativo e Superlativo de Inferioridade",
                    example: "A loan is the least difficult option.", 
                    exTrans: "<span style='color:#0077b6'>(Um empréstimo é a opção menos difícil.)</span>",
                    audioFront: "TTS: Comparison of Inferiority",
                    audioBack: "TTS: A loan is the least difficult option." 
                }
            ] // This closes the items array
        } // This closes the Step 9 object
    ], // This closes the steps array

    // ======================================================
    // GLOSSARY (Part 1: Topics 1, 2, 3, and 4)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT & STEP 1 ---
        { topic: "Context", term: "hard-times", definition: "Periods of intense hardship or difficulty.", translation: "Tempos difíceis" },
        { topic: "Context", term: "tragedy", definition: "An event causing great suffering, destruction, and distress.", translation: "Tragédia" },
        { topic: "Context", term: "adversity", definition: "Difficulties or misfortune.", translation: "Adversidade" },
        { topic: "Context", term: "hardship", definition: "Severe suffering or privation.", translation: "Dificuldade / Privação" },
        { topic: "Context", term: "silver-lining", definition: "An idiom meaning to find something positive in a negative situation.", translation: "Lado bom" },
        { topic: "Context", term: "bounce-back", definition: "To recover quickly from a setback.", translation: "Dar a volta por cima" },
        { topic: "Context", term: "give-up", definition: "To stop making an effort; to quit.", translation: "Desistir" },
        { topic: "Context", term: "setback", definition: "A reversal or check on progress.", translation: "Contratempo / Revés" },
        { topic: "Context", term: "activist", definition: "A person who campaigns to bring about political or social change.", translation: "Ativista" },
        { topic: "Context", term: "inspiration", definition: "A person or thing that inspires.", translation: "Inspiração" },
        { topic: "Context", term: "innovation", definition: "The introduction of new ideas, methods, or products.", translation: "Inovação" },
        { topic: "Context", term: "plan", definition: "A detailed proposal for doing or achieving something.", translation: "Plano" },
        { topic: "Context", term: "lose", definition: "To be deprived of or cease to have something.", translation: "Perder" },

        // --- TOPIC 2: RESILIENCE VERBS (A-D) ---
        { topic: "Resilience Verbs", term: "adapt", definition: "To become adjusted to new conditions.", translation: "Adaptar-se" },
        { topic: "Resilience Verbs", term: "affect", definition: "To have an effect on; make a difference to.", translation: "Afetar" },
        { topic: "Resilience Verbs", term: "agree", definition: "To have the same opinion about something.", translation: "Concordar" },
        { topic: "Resilience Verbs", term: "believe", definition: "To accept that a statement is true.", translation: "Acreditar" },
        { topic: "Resilience Verbs", term: "become", definition: "To begin to be; to turn into.", translation: "Tornar-se" },
        { topic: "Resilience Verbs", term: "begin", definition: "To perform the first part of an action.", translation: "Começar" },
        { topic: "Resilience Verbs", term: "buy", definition: "To obtain in exchange for payment.", translation: "Comprar" },
        { topic: "Resilience Verbs", term: "change", definition: "To make or become different.", translation: "Mudar" },
        { topic: "Resilience Verbs", term: "close", definition: "To move so as to cover an opening; to end operations.", translation: "Fechar" },
        { topic: "Resilience Verbs", term: "connect", definition: "To bring together or into contact.", translation: "Conectar" },
        { topic: "Resilience Verbs", term: "cope", definition: "To deal effectively with something difficult.", translation: "Lidar com" },
        { topic: "Resilience Verbs", term: "cause", definition: "To make something happen.", translation: "Causar" },
        { topic: "Resilience Verbs", term: "decrease", definition: "To make or become smaller or fewer in amount.", translation: "Diminuir" },
        { topic: "Resilience Verbs", term: "define", definition: "To state or describe exactly the nature of.", translation: "Definir" },
        { topic: "Resilience Verbs", term: "demonstrate", definition: "To clearly show the truth of something.", translation: "Demonstrar" },
        { topic: "Resilience Verbs", term: "develop", definition: "To grow or become more mature or advanced.", translation: "Desenvolver" },
        { topic: "Resilience Verbs", term: "discover", definition: "To find unexpectedly or during a search.", translation: "Descobrir" },
        { topic: "Resilience Verbs", term: "discuss", definition: "To talk about something with another person.", translation: "Discutir" },

        // --- TOPIC 3: RESILIENCE VERBS (E-M) ---
        { topic: "Resilience Verbs", term: "emphasize", definition: "To give special importance or prominence to something.", translation: "Enfatizar" },
        { topic: "Resilience Verbs", term: "experience", definition: "To encounter or undergo an event.", translation: "Vivenciar" },
        { topic: "Resilience Verbs", term: "face", definition: "To confront and deal with.", translation: "Encarar" },
        { topic: "Resilience Verbs", term: "feel", definition: "To experience an emotion or physical sensation.", translation: "Sentir" },
        { topic: "Resilience Verbs", term: "find", definition: "To discover by chance or effort.", translation: "Encontrar" },
        { topic: "Resilience Verbs", term: "focus", definition: "To pay particular attention to.", translation: "Focar" },
        { topic: "Resilience Verbs", term: "force", definition: "To make someone do something against their will.", translation: "Forçar" },
        { topic: "Resilience Verbs", term: "guarantee", definition: "To provide a formal assurance.", translation: "Garantir" },
        { topic: "Resilience Verbs", term: "happen", definition: "To take place; occur.", translation: "Acontecer" },
        { topic: "Resilience Verbs", term: "help", definition: "To make it easier for someone to do something.", translation: "Ajudar" },
        { topic: "Resilience Verbs", term: "hit", definition: "To reach a particular level; to have a negative impact.", translation: "Atingir" },
        { topic: "Resilience Verbs", term: "inspire", definition: "To fill someone with the urge to do or feel something.", translation: "Inspirar" },
        { topic: "Resilience Verbs", term: "interest", definition: "To excite the curiosity or attention of.", translation: "Interessar" },
        { topic: "Resilience Verbs", term: "interview", definition: "To hold an interview with.", translation: "Entrevistar" },
        { topic: "Resilience Verbs", term: "invest", definition: "To expend money or effort with the expectation of a result.", translation: "Investir" },
        { topic: "Resilience Verbs", term: "keep", definition: "To continue or cause to continue in a specified state.", translation: "Manter" },
        { topic: "Resilience Verbs", term: "learn", definition: "To gain knowledge or skill.", translation: "Aprender" },
        { topic: "Resilience Verbs", term: "limit", definition: "To set or serve as a limit to.", translation: "Limitar" },

        // --- TOPIC 4: RESILIENCE VERBS (M-W) ---
        { topic: "Resilience Verbs", term: "manage", definition: "To be in charge of; to survive or attain aims.", translation: "Gerenciar / Lidar com" },
        { topic: "Resilience Verbs", term: "need", definition: "To require something because it is essential.", translation: "Precisar" },
        { topic: "Resilience Verbs", term: "omit", definition: "To leave out or exclude someone or something.", translation: "Omitir" },
        { topic: "Resilience Verbs", term: "overcome", definition: "To succeed in dealing with a problem.", translation: "Superar" },
        { topic: "Resilience Verbs", term: "own", definition: "To have something as one's own; possess.", translation: "Possuir" },
        { topic: "Resilience Verbs", term: "present", definition: "To give or show something to someone.", translation: "Apresentar" },
        { topic: "Resilience Verbs", term: "propose", definition: "To put forward an idea or plan.", translation: "Propor" },
        { topic: "Resilience Verbs", term: "read", definition: "To look at and comprehend written matter.", translation: "Ler" },
        { topic: "Resilience Verbs", term: "receive", definition: "To be given or paid something.", translation: "Receber" },
        { topic: "Resilience Verbs", term: "rely", definition: "To depend on with full trust or confidence.", translation: "Confiar" },
        { topic: "Resilience Verbs", term: "remember", definition: "To bring a fact or situation back into one's mind.", translation: "Lembrar" },
        { topic: "Resilience Verbs", term: "show", definition: "To allow or cause something to be visible.", translation: "Mostrar" },
        { topic: "Resilience Verbs", term: "speak", definition: "To say something in order to convey information.", translation: "Falar" },
        { topic: "Resilience Verbs", term: "start", definition: "To begin from a particular point in time.", translation: "Começar" },
        { topic: "Resilience Verbs", term: "stop", definition: "To cease to happen.", translation: "Parar" },
        { topic: "Resilience Verbs", term: "struggle", definition: "To make forceful efforts to get free; a difficulty.", translation: "Lutar / Ter dificuldade" },
        { topic: "Resilience Verbs", term: "study", definition: "To devote time and attention to acquiring knowledge.", translation: "Estudar" },
        { topic: "Resilience Verbs", term: "support", definition: "To give assistance to someone.", translation: "Apoiar" },
        { topic: "Resilience Verbs", term: "suppose", definition: "To think or assume that something is true.", translation: "Supor" },
        { topic: "Resilience Verbs", term: "talk", definition: "To speak in order to give information.", translation: "Conversar" },
        { topic: "Resilience Verbs", term: "teach", definition: "To impart knowledge to or instruct someone.", translation: "Ensinar" },
        { topic: "Resilience Verbs", term: "think", definition: "To have a particular belief or idea.", translation: "Pensar" },
        { topic: "Resilience Verbs", term: "want", definition: "To have a desire to possess or do something.", translation: "Querer" },
        { topic: "Resilience Verbs", term: "work", definition: "To be engaged in physical or mental activity.", translation: "Trabalhar" },
        // --- TOPIC 5: ECONOMY & CRISIS ---
        { topic: "Economy", term: "financial", definition: "Relating to finance or money matters.", translation: "Financeiro(a)" },
        { topic: "Economy", term: "crisis", definition: "A time of intense difficulty, trouble, or danger.", translation: "Crise" },
        { topic: "Economy", term: "economic", definition: "Relating to economics or the economy.", translation: "Econômico(a)" },
        { topic: "Economy", term: "money", definition: "A current medium of exchange in the form of coins and banknotes.", translation: "Dinheiro" },
        { topic: "Economy", term: "debt", definition: "Something, typically money, that is owed or due.", translation: "Dívida" },
        { topic: "Economy", term: "budget", definition: "An estimate of income and expenditure for a set period of time.", translation: "Orçamento" },
        { topic: "Economy", term: "income", definition: "Money received, especially on a regular basis, for work.", translation: "Renda / Rendimento" },
        { topic: "Economy", term: "savings", definition: "The money that a person has saved, especially in a bank.", translation: "Economias / Poupança" },
        { topic: "Economy", term: "expense", definition: "The cost required for something; the money spent on something.", translation: "Despesa / Gasto" },
        { topic: "Economy", term: "unemployment", definition: "The state of being unemployed or not having a job.", translation: "Desemprego" },
        { topic: "Economy", term: "job-loss", definition: "The state of no longer having a job.", translation: "Perda de emprego" },
        { topic: "Economy", term: "salary", definition: "A fixed regular payment made by an employer to an employee.", translation: "Salário" },
        { topic: "Economy", term: "investment", definition: "The process of investing money for profit or material result.", translation: "Investimento" },
        { topic: "Economy", term: "bankruptcy", definition: "The legal state of a person or entity that cannot repay debts.", translation: "Falência" },
        { topic: "Economy", term: "bankrupt", definition: "Unable to pay outstanding debts.", translation: "Falido(a)" },
        { topic: "Economy", term: "recession", definition: "A period of temporary economic decline.", translation: "Recessão" },
        { topic: "Economy", term: "market", definition: "The world of commercial activity where goods and services are traded.", translation: "Mercado" },
        { topic: "Economy", term: "loan", definition: "A sum of money that is borrowed and expected to be paid back.", translation: "Empréstimo" },
        { topic: "Economy", term: "cost-of-living", definition: "The level of prices relating to a range of everyday items.", translation: "Custo de vida" },

        // --- TOPIC 6: RESILIENCE & GROWTH ---
        { topic: "Resilience", term: "difficulty", definition: "The state or quality of being hard to do or to understand.", translation: "Dificuldade" },
        { topic: "Resilience", term: "challenge", definition: "A task or situation that tests someone's abilities.", translation: "Desafio" },
        { topic: "Resilience", term: "struggle", definition: "To make forceful efforts to get free of restraint; a difficulty.", translation: "Luta / Esforço" },
        { topic: "Resilience", term: "problem", definition: "A matter or situation regarded as unwelcome or harmful.", translation: "Problema" },
        { topic: "Resilience", term: "pandemic", definition: "An outbreak of a disease that occurs over a wide geographic area.", translation: "Pandemia" },
        { topic: "Resilience", term: "lockdown", definition: "The confining of people in their homes as a security measure.", translation: "Confinamento" },
        { topic: "Resilience", term: "resilience", definition: "The capacity to recover quickly from difficulties; toughness.", translation: "Resiliência" },
        { topic: "Resilience", term: "strength", definition: "The quality or state of being physically or mentally strong.", translation: "Força" },
        { topic: "Resilience", term: "hope", definition: "A feeling of expectation and desire for a certain thing to happen.", translation: "Esperança" },
        { topic: "Resilience", term: "optimism", definition: "Hopefulness and confidence about the future.", translation: "Otimismo" },
        { topic: "Resilience", term: "positive-outlook", definition: "A hopeful way of thinking about the future.", translation: "Perspectiva positiva" },
        { topic: "Resilience", term: "solution", definition: "A means of solving a problem or dealing with a difficult situation.", translation: "Solução" },
        { topic: "Resilience", term: "opportunity", definition: "A set of circumstances that makes it possible to do something.", translation: "Oportunidade" },
        { topic: "Resilience", term: "support", definition: "To give assistance to, especially financially or emotionally.", translation: "Apoio" },
        { topic: "Resilience", term: "community", definition: "A group of people living in the same place or having a trait in common.", translation: "Comunidade" },
        // --- TOPIC 9: SOCIAL ISSUES & GROWTH (Exhaustive Completion) ---
        { 
            topic: "Social & Growth", 
            term: "acceptance", 
            definition: "The action of consenting to receive or undertake something offered.", 
            translation: "Aceitação" 
        },
        { 
            topic: "Social & Growth", 
            term: "actually", 
            definition: "A false cognate used to correct a statement or provide detail; means 'really'.", 
            translation: "Na verdade / Realmente" 
        },
        { 
            topic: "Social & Growth", 
            term: "discrimination", 
            definition: "The unjust or prejudicial treatment of different categories of people.", 
            translation: "Discriminação" 
        },
        { 
            topic: "Social & Growth", 
            term: "empathy", 
            definition: "The ability to understand and share the feelings of another.", 
            translation: "Empatia" 
        },
        { 
            topic: "Social & Growth", 
            term: "equality", 
            definition: "The state of being equal, especially in status, rights, and opportunities.", 
            translation: "Igualdade" 
        },
        { 
            topic: "Social & Growth", 
            term: "justice", 
            definition: "Just behavior or treatment based on moral rightness.", 
            translation: "Justiça" 
        },
        { 
            topic: "Social & Growth", 
            term: "global-goals", 
            definition: "The 17 Sustainable Development Goals set by the United Nations.", 
            translation: "Metas Globais" 
        },
        { 
            topic: "Social & Growth", 
            term: "microaggression", 
            definition: "A statement or action regarded as indirect or subtle discrimination.", 
            translation: "Microagressão" 
        },
        { 
            topic: "Social & Growth", 
            term: "poverty", 
            definition: "The state of being extremely poor.", 
            translation: "Pobreza" 
        },
        { 
            topic: "Social & Growth", 
            term: "stereotype", 
            definition: "A widely held but oversimplified image or idea of a particular type of person.", 
            translation: "Estereótipo" 
        },
        { 
            topic: "Social & Growth", 
            term: "united-nations", 
            definition: "An international organization formed in 1945 to increase cooperation.", 
            translation: "Nações Unidas (ONU)" 
        },
        { 
            topic: "Social & Growth", 
            term: "save", 
            definition: "To keep safe or rescue from harm; also to keep money for future use.", 
            translation: "Salvar / Economizar" 
        },
        { 
            topic: "Social & Growth", 
            term: "contribute", 
            definition: "To give something in order to help achieve or provide something.", 
            translation: "Contribuir" 
        },

        // --- TOPIC 7: PHRASES & CONTEXT (Step 1 Remainder) ---
        { topic: "Phrases", term: "whose", definition: "Relative pronoun used to show possession (belonging to).", translation: "Cujo / Cuja" },
        { topic: "Phrases", term: "contributes", definition: "To give something (money, time) in order to help achieve or provide something.", translation: "Contribui" },
        { topic: "Phrases", term: "inspiration", definition: "The process of being mentally stimulated to do or feel something creative.", translation: "Inspiração" },
        { topic: "Phrases", term: "setback", definition: "A reversal or check on progress.", translation: "Revés / Contratempo" },
        { topic: "Phrases", term: "a-long-way-to-go", definition: "An expression meaning much work is still needed to reach a goal.", translation: "Um longo caminho a percorrer" },

        // --- TOPIC 8: GRAMMAR REFERENCE ---
        { topic: "Grammar", term: "relative-clauses", definition: "Clauses starting with relative pronouns to give more info about a noun.", translation: "Orações Relativas" },
        { topic: "Grammar", term: "defining-relative-clause", definition: "A clause that provides essential information to identify a noun.", translation: "Oração relativa definidora" },
        { topic: "Grammar", term: "non-defining-relative-clause", definition: "A clause that provides extra, non-essential information.", translation: "Oração relativa não-definidora" },
        { topic: "Grammar", term: "comparatives", definition: "Grammar structures used to compare two things (e.g., better than).", translation: "Comparativos" },
        { topic: "Grammar", term: "superlatives", definition: "Grammar structures used to describe the highest degree (e.g., the best).", translation: "Superlativos" },
        { topic: "Grammar", term: "inferiority", definition: "Comparison showing that something is 'less' or 'the least' of a quality.", translation: "Inferioridade" }
    ]
});