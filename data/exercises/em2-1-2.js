/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */

window.initExercise({
    id: "em2-1-2",
    grade: "EM 2nd Grade",
    bimester: "1",
    chapter: "2",
    title: "AI and Automation",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES (40 ITEMS) ---
        1: [
            { words: ["power", "the", "starts", "turn", "the", "if", "robot", "moving", "you", "on"], correct: "If you turn on the power, the robot starts moving" },
            { words: ["further", "if", "it", "work", "AI", "will", "develops", "almost", "every", "type", "of", "automate"], correct: "If AI develops further, it will automate almost every type of work" },
            { words: ["comfortable", "companions", "had", "if", "home", "we", "today", "robot", "would", "much", "more", "life", "be"], correct: "If we had robot-companions at home today, life would be much more comfortable" },
            { words: ["safety", "wouldn't", "have", "we", "created", "issues", "hadn't", "if", "the", "had", "laws", "scientists"], correct: "If scientists hadn't created the laws, we would have had safety issues" },
            { words: ["fast", "analyze", "AI", "human", "data", "any", "can", "than", "faster"], correct: "AI can analyze data faster than any human" },
            { words: ["overheats", "CPU", "the", "stops", "if", "hardware", "the"], correct: "If the CPU overheats, the hardware stops" },
            { words: ["it", "faster", "update", "if", "software", "you", "will", "run", "the"], correct: "If you update the software, it will run faster" },
            { words: ["been", "if", "seen", "the", "I", "had", "would", "error", "have", "I", "there"], correct: "If I had been there, I would have seen the error" },
            { words: ["robotics", "in", "invest", "if", "will", "production", "we", "increase"], correct: "If we invest in robotics, production will increase" },
            { words: ["human", "lacks", "fast", "is", "very", "however", "it", "creativity", "AI"], correct: "AI is very fast; however, it lacks human creativity" },
            { words: ["automation", "on", "might", "time", "other", "saves", "jobs", "take", "it", "the", "hand"], correct: "Automation saves time; on the other hand, it might take jobs" },
            { words: ["hardware", "investment", "is", "nevertheless", "good", "expensive", "it", "the", "a", "is"], correct: "The hardware is expensive; nevertheless, it is a good investment" },
            { words: ["robot", "must", "therefore", "low", "stop", "battery", "the", "is", "the"], correct: "The battery is low; therefore, the robot must stop" },
            { words: ["we", "so", "that", "can", "problems", "the", "train", "AI", "solve", "it"], correct: "We train the AI so that it can solve problems" },
            { words: ["efficient", "secure", "is", "moreover", "this", "it", "very", "algorithm", "is"], correct: "This algorithm is efficient; moreover, it is very secure" },
            { words: ["changing", "everywhere", "tech", "fast", "furthermore", "is", "is", "it"], correct: "Tech is changing fast; furthermore, it is everywhere" },
            { words: ["robots", "besides", "helpful", "smart", "being", "this", "is"], correct: "Besides being smart, this robot is helpful" },
            { words: ["ethical", "focus", "need", "data", "we", "on", "use", "moreover", "to"], correct: "Moreover, we need to focus on ethical data use" },
            { words: ["had", "algorithm", "the", "achieved", "they", "if", "used", "success", "they", "would", "have"], correct: "If they had used the algorithm, they would have achieved success" },
            { words: ["correctly", "train", "if", "will", "system", "we", "the", "improve", "we", "it"], correct: "If we train it correctly, we will improve the system" },
            { words: ["automation", "off", "workers", "to", "factory", "the", "had", "lay", "due", "to"], correct: "The factory had to lay off workers due to automation" },
            { words: ["evolved", "years", "dramatically", "intelligence", "has", "recent", "in", "artificial"], correct: "Artificial Intelligence has dramatically evolved in recent years" },
            { words: ["software", "if", "malfunctions", "the", "error", "shows", "the", "screen"], correct: "If the software malfunctions, the screen shows the error" },
            { words: ["will", "hardware", "new", "increases", "efficiency", "if", "invest", "company", "in", "a", "its"], correct: "If a company invests in new hardware, its efficiency will increase" },
            { words: ["don't", "if", "act", "governments", "society", "face", "will", "challenges"], correct: "If governments don't act, society will face challenges" },
            { words: ["machine", "if", "overheats", "shuts", "down", "software", "the", "the"], correct: "If the machine overheats, the software shuts it down" },
            { words: ["accidents", "as", "decreased", "a", "have", "result"], correct: "As a result, accidents have decreased" },
            { words: ["save", "help", "AI", "can", "energy", "us"], correct: "AI can help us save energy" },
            { words: ["battery", "the", "died", "stopped", "consequently", "moving", "robot", "the"], correct: "The battery died; consequently, the robot stopped moving" },
            { words: ["robotics", "I", "study", "were", "you", "would", "if", "I"], correct: "If I were you, I would study robotics" },
            { words: ["feelings", "if", "our", "would", "friend", "be", "the", "had", "robot", "it"], correct: "If the robot had feelings, it would be our friend" },
            { words: ["success", "better", "trained", "if", "achieved", "we", "have", "the", "would", "we", "AI"], correct: "If we had trained the AI better, we would have achieved success" },
            { words: ["future", "see", "through", "I", "new", "can", "the", "technologies"], correct: "I can see the future through new technologies" },
            { words: ["manual", "take", "soon", "jobs", "will", "machines", "many"], correct: "Machines will take many manual jobs soon" },
            { words: ["functions", "neural", "study", "how", "you", "should", "networks"], correct: "You should study how neural networks function" },
            { words: ["robots", "today", "do", "had", "what", "if", "you", "a", "you", "would"], correct: "Suppose you had a robot today, what would you do" },
            { words: ["priority", "innovation", "hardware", "are", "our"], correct: "Innovation and hardware are our priority" },
            { words: ["information", "students", "get", "online", "a", "of", "lot"], correct: "Students get a lot of information online" },
            { words: ["laws", "tech", "regulate", "must", "advancements"], correct: "Laws must regulate tech advancements" },
            { words: ["virtual", "explore", "we", "must", "reality", "continue", "to"], correct: "We must continue to explore virtual reality" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES (40 ITEMS) ---
        2: [
            { lines: ["If you turn on the power, the robot starts moving.", "That’s cool! It’s a simple algorithm, but it works.", "I finally finished the code!", "If AI develops further, it will automate every type of work."], order: [2, 0, 1, 3] },
            { lines: ["If scientists hadn't created the laws, we would have had safety problems!", "True. We must improve our laws regarding technological advances.", "On the other hand, it might be dangerous.", "Consequently, the whole system may become unfair if we don't act."], order: [2, 0, 1, 3] },
            { lines: ["Not yet. But we have just started the new experiment.", "Have you found any new glitches in the code?", "Definitely. Through genetic algorithms, everything becomes clearer.", "If we had more data, would we have understood the process faster?"], order: [1, 0, 3, 2] },
            { lines: ["If the CPU overheats, the hardware stops.", "I see. It's a safety rule, isn't it?", "Exactly. Moreover, if we train the neural network, it will improve.", "Innovation should definitely benefit humanity."], order: [0, 1, 2, 3] },
            { lines: ["If I were a robot, I would read 100 books a day.", "That would be amazing!", "However, I would also need a powerful battery.", "True. Besides, you wouldn't feel any human emotions."], order: [0, 1, 2, 3] },
            { lines: ["If they had used the algorithm, they would have achieved success.", "What happened to the project?", "It failed because the hardware overheated.", "Nevertheless, they can try again next week."], order: [1, 2, 0, 3] },
            { lines: ["If we develop AI further, will we face more risks?", "Yes, if we don't regulate it, society will face challenges.", "Therefore, we need ethical guidelines.", "Precisely. Moreover, we must train human resources."], order: [0, 1, 2, 3] },
            { lines: ["If I had a robot-companion, it would automate all my chores.", "Would it help you study as well?", "Yes. Moreover, it would provide me with music to relax.", "Life would be so much more comfortable then!"], order: [0, 1, 2, 3] },
            { lines: ["If the factory hadn't implemented innovation, they would have lost money.", "True. Consequently, they wouldn't have laid off so many workers.", "It’s a complex situation.", "Indeed. On the other hand, efficiency increases automatically."], order: [0, 1, 3, 2] },
            { lines: ["If you delete the software, the computer doesn't work.", "Why would anyone do that?", "It was just an example of a Zero Conditional.", "Oh, I see. It's a general truth."], order: [0, 1, 2, 3] },
            { lines: ["If the robot sees a human in danger, it acts to help.", "Is that the First Law of Robotics?", "Yes. Furthermore, it must obey human orders.", "Unless those orders conflict with the first law!"], order: [0, 1, 2, 3] },
            { lines: ["If I had known about the advancement, I would have invested earlier.", "Do you regret not buying the stocks?", "Yes. As a result, I lost a great opportunity.", "Don't worry. There will be new innovations soon."], order: [0, 1, 2, 3] },
            { lines: ["If the hardware overheats, the software shuts it down.", "That is a very efficient system.", "Moreover, it prevents the machine from breaking.", "Technology has dramatically evolved lately."], order: [0, 1, 2, 3] },
            { lines: ["If we invest now, the world will change.", "Do you believe in a green future?", "Yes. Consequently, pollution will decrease.", "That is a very hopeful perspective."], order: [1, 0, 2, 3] },
            { lines: ["If I were you, I would study machine learning.", "Is it the future of the job market?", "Absolutely. Furthermore, it allows machines to learn from experience.", "I will consider that career path."], order: [0, 1, 2, 3] },
            { lines: ["If we hadn't updated the software, the system would have crashed.", "We were lucky to do it yesterday.", "Therefore, everything is working perfectly now.", "Innovation is inevitable, but we must stay prepared."], order: [0, 1, 2, 3] },
            { lines: ["If robots evolve to have emotions, everything will change.", "I wonder if they would feel sadness.", "On the other hand, they might be more empathetic.", "That is a very deep question to discuss."], order: [0, 1, 2, 3] },
            { lines: ["If the battery is low, the robot must stop.", "Does it charge itself automatically?", "Yes, so that it can continue its work later.", "Besides being efficient, it is very independent."], order: [0, 1, 2, 3] },
            { lines: ["If those old machines hadn't adapted, they would have broken.", "Upgrading is a necessary process.", "Moreover, it saves the company money.", "Our code is a result of millions of lines of change."], order: [0, 1, 2, 3] },
            { lines: ["If scientists develop a new algorithm, productivity increases.", "Does it happen immediately?", "Yes, it's an automatic consequence.", "Innovation is the center of interest today."], order: [0, 1, 2, 3] },
            { lines: ["If I had more data, I would solve the water crisis.", "Do you need a neural network for that?", "Yes. Besides, I need more hardware resources.", "You have great potential, Mike."], order: [0, 1, 2, 3] },
            { lines: ["If the robot falls down, it needs to stand up alone.", "Is that part of its training?", "Yes. Consequently, it becomes more resilient.", "Machines are becoming more like humans every day."], order: [0, 1, 2, 3] },
            { lines: ["If you press the button, the machine starts.", "What if it overheats?", "Then the sensors detect the high temperature.", "And as a result, it shuts down safely."], order: [0, 1, 2, 3] },
            { lines: ["If I had been there, I would have seen the virtual reality demo.", "It was like being in a movie!", "Nevertheless, I can watch the recording later.", "True. Moreover, the quality is excellent."], order: [0, 1, 2, 3] },
            { lines: ["If governments act now, they can reduce job loss.", "How can they do that?", "By investing in human resources and education.", "That makes sense. Innovation should benefit everyone."], order: [0, 1, 2, 3] },
            { lines: ["If you use the hardware too much, it will overheat.", "I should install a cooling system then.", "That is a smart move. Besides, it will last longer.", "Thanks for the advice."], order: [0, 1, 2, 3] },
            { lines: ["If the algorithm finds a match, it shows the result.", "Is it used for social media?", "Yes, so that you see what you like.", "Technology is everywhere, isn't it?"], order: [0, 1, 2, 3] },
            { lines: ["If they hadn't used the new tools, medicine would have been slower.", "Science has progressively changed our lives.", "Furthermore, it allows us to understand our past.", "I agree completely."], order: [0, 1, 2, 3] },
            { lines: ["If I were a developer, I would create a companion robot.", "Why not a worker robot?", "Because companionship is more important for mental health.", "On the other hand, automation is better for the economy."], order: [0, 1, 2, 3] },
            { lines: ["If you don't regulate AI, it can be dangerous.", "Do we need new laws for that?", "Yes. Consequently, we can protect our privacy.", "Safety must be our number one priority."], order: [0, 1, 2, 3] },
            { lines: ["If you update the app, it runs faster.", "Does it work for my tablet?", "Yes. In addition, it uses less battery.", "I will do it right now then."], order: [0, 1, 2, 3] },
            { lines: ["If I had won the prize, I would have invested in robotics.", "You can still start your own company.", "True. Nevertheless, I need more experience.", "You should focus on machine learning first."], order: [0, 1, 2, 3] },
            { lines: ["If the robot moves, the sensors light up.", "Is it a Zero Conditional fact?", "Yes, it happens every time.", "That is a very simple mechanism."], order: [0, 1, 2, 3] },
            { lines: ["If we lived in the future, we would use virtual reality daily.", "I already use it for games!", "But in the future, it will be used for education too.", "That would be a great advancement for students."], order: [0, 1, 2, 3] },
            { lines: ["If the team hadn't implemented the new code, the project would have failed.", "I am glad they worked hard.", "As a result, efficiency increased by 50%.", "That is a perfect example of innovation."], order: [0, 1, 2, 3] },
            { lines: ["If you study hard, you will achieve your goals.", "I want to be an AI engineer.", "Moreover, you should learn about ethics in tech.", "I agree. It is a vital topic."], order: [0, 1, 2, 3] },
            { lines: ["If I were tired, the robot would provide me with music.", "That sounds very relaxing.", "Besides, it would clean my room.", "You really want a robot-companion!"], order: [0, 1, 2, 3] },
            { lines: ["If it rains, the robot stays inside.", "Is it not waterproof?", "No. Consequently, the hardware might damage.", "You should be more careful with your equipment."], order: [0, 1, 2, 3] },
            { lines: ["If they had trained the AI better, it wouldn't have made a mistake.", "It's hard to anticipate every scenario.", "Nevertheless, they can improve the algorithm now.", "That’s the path to progress."], order: [0, 1, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS (40 ITEMS) ---
        3: [
            { q: "If you press the button, does the robot start?", options: ["Yes, it starts.", "Yes, it will started.", "Yes, it starting.", "Yes, it start."], a: "Yes, it starts." },
            { q: "If we invest in robotics, will production increase?", options: ["Yes, it will.", "Yes, it increase.", "Yes, it would.", "Yes, it is increase."], a: "Yes, it will." },
            { q: "If I were you, would I study AI?", options: ["Yes, you would.", "Yes, you will.", "Yes, you are.", "Yes, you were."], a: "Yes, you would." },
            { q: "If they had used the algorithm, would they have succeeded?", options: ["Yes, they would have.", "Yes, they would had.", "Yes, they have.", "Yes, they will."], a: "Yes, they would have." },
            { q: "If the CPU overheats, does it stop?", options: ["Yes, it stops.", "Yes, it stopping.", "Yes, it will stops.", "Yes, it stop."], a: "Yes, it stops." },
            { q: "If AI develops further, will it automate work?", options: ["Yes, it will.", "Yes, it would.", "Yes, it automate.", "Yes, it does."], a: "Yes, it will." },
            { q: "If the robot had feelings, would it be our friend?", options: ["Yes, it would.", "Yes, it will.", "Yes, it is.", "Yes, it be."], a: "Yes, it would." },
            { q: "If scientists hadn't created laws, would we have had problems?", options: ["Yes, we would have.", "Yes, we will.", "Yes, we have.", "Yes, we had."], a: "Yes, we would have." },
            { q: "If you update the software, does it run faster?", options: ["Yes, it does.", "Yes, it is.", "Yes, it run.", "Yes, it will runs."], a: "Yes, it does." },
            { q: "If we lived in the future, would we use VR daily?", options: ["Yes, we would.", "Yes, we will.", "Yes, we are.", "Yes, we do."], a: "Yes, we would." },
            { q: "If she had been there, would she have seen the glitch?", options: ["Yes, she would have.", "Yes, she will have.", "Yes, she had.", "Yes, she would has."], a: "Yes, she would have." },
            { q: "If it rains, does the robot stop?", options: ["Yes, it does.", "Yes, it will stops.", "Yes, it is.", "Yes, it stop."], a: "Yes, it does." },
            { q: "If you study, will you pass?", options: ["Yes, I will.", "Yes, I would.", "Yes, I am.", "Yes, I do."], a: "Yes, I will." },
            { q: "If I had a robot, would it clean my room?", options: ["Yes, it would.", "Yes, it will.", "Yes, it cleans.", "Yes, it does."], a: "Yes, it would." },
            { q: "If the system hadn't updated, would it have crashed?", options: ["Yes, it would have.", "Yes, it had.", "Yes, it would.", "Yes, it will."], a: "Yes, it would have." },
            { q: "If an algorithm finds a match, does it show the result?", options: ["Yes, it does.", "Yes, it is.", "Yes, it shows.", "Yes, it will show."], a: "Yes, it does." },
            { q: "If we train the AI, will it improve?", options: ["Yes, it will.", "Yes, it would.", "Yes, it does.", "Yes, it improve."], a: "Yes, it will." },
            { q: "If I were a scientist, would I create a companion?", options: ["Yes, I would.", "Yes, I am.", "Yes, I will.", "Yes, I do."], a: "Yes, I would." },
            { q: "If they had invested more, would they have succeeded?", options: ["Yes, they would have.", "Yes, they would had.", "Yes, they had.", "Yes, they will."], a: "Yes, they would have." },
            { q: "If you delete the file, is it gone?", options: ["Yes, it is.", "Yes, it am.", "Yes, it are.", "Yes, it will been."], a: "Yes, it is." },
            { q: "What happens if the CPU overheats?", options: ["It stops working.", "It sings.", "It eats.", "It flies."], a: "It stops working." },
            { q: "Why do we need ethical guidelines?", options: ["To benefit humanity safely.", "To make computers heavy.", "To stop robots.", "To wear blue jeans."], a: "To benefit humanity safely." },
            { q: "What would you do if you were a pro gamer?", options: ["I would compete.", "I would eat laptops.", "I would sleep.", "I would be a robot."], a: "I would compete." },
            { q: "If robots automate all work, what might happen?", options: ["People might lose jobs.", "The sun will turn off.", "Students become robots.", "Oceans evaporate."], a: "People might lose jobs." },
            { q: "What is the result of updating software?", options: ["It runs more efficiently.", "It becomes a brick.", "It gives burgers.", "It rains."], a: "It runs more efficiently." },
            { q: "Why do we train AI models?", options: ["So they can learn.", "Because they are hungry.", "To reinvent wheels.", "To go to college."], a: "So they can learn." },
            { q: "If you had a robot-companion, what is a benefit?", options: ["It helps with chores.", "It eats homework.", "It becomes human.", "It sleeps."], a: "It helps with chores." },
            { q: "What happens if the battery is low?", options: ["It must stop and recharge.", "It runs faster.", "It becomes famous.", "It finds fossils."], a: "It must stop and recharge." },
            { q: "Why is machine learning important?", options: ["It allows adaptation.", "It creates hardware.", "It watches videos.", "It finishes tours."], a: "It allows adaptation." },
            { q: "Suppose you won an android, what would you use it for?", options: ["To help study coding.", "To play soccer.", "To make storms.", "To hide."], a: "To help study coding." },
            { q: "If a factory automates, what increases?", options: ["Efficiency.", "Ancestors.", "Prices.", "DNA."], a: "Efficiency." },
            { q: "What would have happened without the algorithm?", options: ["They would have failed.", "They would fly.", "They would eat.", "They would study."], a: "They would have failed." },
            { q: "Why do we use VR in training?", options: ["For a safe environment.", "To overheat hardware.", "To miss the bus.", "To scare cats."], a: "For a safe environment." },
            { q: "If you turn on the power, what is the result?", options: ["Machine starts operation.", "It becomes native.", "It tells secrets.", "It turns blue."], a: "Machine starts operation." },
            { q: "What is a neural network similar to?", options: ["A human brain.", "Sneakers.", "A jacket.", "Rain."], a: "A human brain." },
            { q: "Why must we regulate tech?", options: ["To ensure safety.", "To reinvent wheels.", "To play games.", "To be old."], a: "To ensure safety." },
            { q: "If I had known about the test, what would I have done?", options: ["Studied harder.", "Become a robot.", "Flown a plane.", "Lived in 1928."], a: "Studied harder." },
            { q: "What does 'lay off' mean?", options: ["Workers lose jobs.", "Robot sleeps.", "Software loads.", "Fossils are old."], a: "Workers lose jobs." },
            { q: "Why do researchers analyze data?", options: ["To find patterns.", "To go to the mall.", "To wear dresses.", "Because of battery."], a: "To find patterns." },
            { q: "What if a robot broke the laws?", options: ["Safety issues.", "It becomes a student.", "It turns to fabric.", "It goes to college."], a: "Safety issues." }
        ],

        // --- TYPE 4: FIND MEANING (40 ITEMS) ---
        4: [
            { sent: "An **algorithm** is a set of rules for a computer.", word: "algorithm", options: ["Algoritmo", "Alarme", "Aplicativo", "Armazenamento"], a: "Algoritmo", def: "A process or set of rules to be followed in calculations." },
            { sent: "Factories are moving toward **automation**.", word: "automation", options: ["Automação", "Autorização", "Autonomia", "Aceleração"], a: "Automação", def: "The use of automatic equipment in a manufacturing process." },
            { sent: "The **hardware** of this computer is powerful.", word: "hardware", options: ["Hardware (Físico)", "Software", "Rede", "Conexão"], a: "Hardware (Físico)", def: "The physical components of a computer system." },
            { sent: "We need new **software** to run the robot.", word: "software", options: ["Software (Programas)", "Ferramenta", "Peças", "Fiação"], a: "Software (Programas)", def: "The programs and other operating information used by a computer." },
            { sent: "A **neural network** works like a brain.", word: "neural network", options: ["Rede neural", "Rede de pesca", "Rede elétrica", "Rede social"], a: "Rede neural", def: "A computer system modeled on the human brain and nervous system." },
            { sent: "Engineers use **machine learning** to teach robots.", word: "machine learning", options: ["Aprendizado de máquina", "Mecânica", "Reparo", "Construção"], a: "Aprendizado de máquina", def: "Computer systems that are able to learn and adapt without explicit instructions." },
            { sent: "Technology has a huge **impact** on society.", word: "impact", options: ["Impacto", "Impulso", "Importância", "Impedimento"], a: "Impacto", def: "A strong effect on someone or something." },
            { sent: "We must **implement** safety rules.", word: "implement", options: ["Implementar", "Ignorar", "Imaginar", "Imprimir"], a: "Implementar", def: "To put a decision, plan, or agreement into effect." },
            { sent: "Innovation will **improve** our lives.", word: "improve", options: ["Melhorar", "Piorar", "Diminuir", "Manter"], a: "Melhorar", def: "To make or become better." },
            { sent: "Robots will **increase** production speed.", word: "increase", options: ["Aumentar", "Diminuir", "Parar", "Mudar"], a: "Aumentar", def: "To become or make greater in size, amount, or intensity." },
            { sent: "If the machine **overheats**, it stops.", word: "overheats", options: ["Superaquece", "Desliga", "Quebra", "Reinicia"], a: "Superaquece", def: "To make or become too hot." },
            { sent: "Scientists **train** AI models with data.", word: "train", options: ["Treinam", "Transportam", "Traduzem", "Testam"], a: "Treinam", def: "To teach a person or machine a particular skill." },
            { sent: "Companies might **lay off** workers.", word: "lay off", options: ["Demitir", "Contratar", "Treinar", "Promover"], a: "Demitir", def: "To discharge a worker because of economic reasons." },
            { sent: "**Moreover**, we need to focus on ethics.", word: "moreover", options: ["Além disso", "No entanto", "Portanto", "Porque"], a: "Além disso", def: "As a further matter; besides." },
            { sent: "AI is useful; **however**, it has risks.", word: "however", options: ["No entanto", "Além disso", "Consequentemente", "Por outro lado"], a: "No entanto", def: "Used to introduce a statement that contrasts with something said before." },
            { sent: "**Furthermore**, it must be regulated.", word: "furthermore", options: ["Além disso / Ademais", "Portanto", "Assim", "Por exemplo"], a: "Além disso / Ademais", def: "In addition; used to introduce a fresh consideration." },
            { sent: "**On the other hand**, it takes jobs.", word: "on the other hand", options: ["Por outro lado", "Além disso", "Portanto", "Consequentemente"], a: "Por outro lado", def: "Used to present an alternative or contrasting point of view." },
            { sent: "The battery is low; **therefore**, it stops.", word: "therefore", options: ["Portanto", "Além disso", "No entanto", "Porque"], a: "Portanto", def: "For that reason; consequently." },
            { sent: "**Nevertheless**, it is a good investment.", word: "nevertheless", options: ["Todavia / Não obstante", "Além disso", "Portanto", "Como resultado"], a: "Todavia / Não obstante", def: "In spite of that; notwithstanding." },
            { sent: "We train AI **so that** it helps us.", word: "so that", options: ["Para que", "Porque", "No entanto", "Além disso"], a: "Para que", def: "Used to explain the purpose of an action." },
            { sent: "Technology has **dramatically** evolved.", word: "dramatically", options: ["Drasticamente", "Devagar", "Mal", "Raramente"], a: "Drasticamente", def: "In a sudden, surprising, and impressive way." },
            { sent: "**Suppose** you had a robot.", word: "suppose", options: ["Suponha", "Sabendo", "Querendo", "Vendo"], a: "Suponha", def: "To assume that something is the case for discussion." },
            { sent: "We must **regulate** tech advancements.", word: "regulate", options: ["Regular / Controlar", "Ignorar", "Aumentar", "Inventar"], a: "Regular / Controlar", def: "To control or maintain the rate or speed of a process." },
            { sent: "Technological **advance** brings challenges.", word: "advance", options: ["Avanço", "Recuo", "Erro", "Lixo"], a: "Avanço", def: "Progress and innovation within a field." },
            { sent: "I felt like I was in **virtual reality**.", word: "virtual reality", options: ["Realidade virtual", "Realidade aumentada", "Inteligência artificial", "Ciência"], a: "Realidade virtual", def: "A computer-generated simulation of an environment." },
            { sent: "The **data** was analyzed by scientists.", word: "data", options: ["Dados", "Datas", "Peças", "Ferramentas"], a: "Dados", def: "Facts and statistics collected for analysis." },
            { sent: "AI can **achieve** great things.", word: "achieve", options: ["Alcançar / Conquistar", "Perder", "Ignorar", "Parar"], a: "Alcançar / Conquistar", def: "Successfully bring about or reach a desired objective." },
            { sent: "Governments must **act** now.", word: "act", options: ["Agir", "Dormir", "Falar", "Pensar"], a: "Agir", def: "To take action; to do something." },
            { sent: "Scientists **focus** on machine learning.", word: "focus", options: ["Focam / Concentram-se", "Fogem", "Falam", "Falham"], a: "Focam / Concentram-se", def: "To pay particular attention to." },
            { sent: "Robots could **automate** housework.", word: "automate", options: ["Automatizar", "Aumentar", "Apagar", "Arrumar"], a: "Automatizar", def: "To make a process operate automatically." },
            { sent: "If a robot **falls down**, it stands up.", word: "falls down", options: ["Cai", "Corre", "Pula", "Voa"], a: "Cai", def: "To drop to the ground." },
            { sent: "We must **continue** to explore.", word: "continue", options: ["Continuar", "Parar", "Começar", "Mudar"], a: "Continuar", def: "To persist in an activity or process." },
            { sent: "Robots will **take** manual jobs.", word: "take", options: ["Tomar / Pegar", "Dar", "Perder", "Criar"], a: "Tomar / Pegar", def: "To assume control or responsibility for something." },
            { sent: "The **Three Laws** ensure safety.", word: "three laws", options: ["Três Leis", "Três Caminhos", "Três Tipos", "Três Regras"], a: "Três Leis", def: "A set of rules to ensure robot safety." },
            { sent: "We need to **invest** in humans.", word: "invest", options: ["Investir", "Gastar", "Poupar", "Ignorar"], a: "Investir", def: "To put money or effort into something with expectation of result." },
            { sent: "**Consequently**, society faces risks.", word: "consequently", options: ["Consequentemente", "No entanto", "Além disso", "Mas"], a: "Consequentemente", def: "As a result of something." },
            { sent: "I **believe** innovation is good.", word: "believe", options: ["Acredito", "Duvido", "Sei", "Penso"], a: "Acredito", def: "To accept that something is true." },
            { sent: "AI can **analyze** data fast.", word: "analyze", options: ["Analisar", "Esconder", "Criar", "Apagar"], a: "Analisar", def: "To examine something in detail." },
            { sent: "This is a **hypothetical** situation.", word: "hypothetical", options: ["Hipotética", "Real", "Falsa", "Passada"], a: "Hipotética", def: "Based on a suggested idea or theory, not necessarily real." },
            { sent: "**Besides** being fast, it is safe.", word: "besides", options: ["Além de", "Apesar de", "Por causa de", "Ao invés de"], a: "Além de", def: "In addition to; apart from." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 ITEMS) ---
        5: [
            { sent: "If you turn on the power, the robot **start** moving.", correct: "starts" },
            { sent: "If AI **will develop** further, it will automate work.", correct: "develops" },
            { sent: "If we had robots, life **will** be easier.", correct: "would be" },
            { sent: "If they used the code yesterday, they **will have** succeeded.", correct: "would have" },
            { sent: "I would study robotics if I **am** you.", correct: "were" },
            { sent: "AI is fast. **Consequently**, it lacks creativity.", correct: "However" },
            { sent: "The battery died. **However**, the robot stopped.", correct: "Therefore" },
            { sent: "If the machine **overheat**, it stops.", correct: "overheats" },
            { sent: "If we **invest** more last year, we would have succeeded.", correct: "had invested" },
            { sent: "We train AI **therefore** it can solve problems.", correct: "so that" },
            { sent: "If the robot **see** a danger, it acts.", correct: "sees" },
            { sent: "If technology **don't** exist, life would be different.", correct: "didn't" },
            { sent: "If I had known, I **will** invest earlier.", correct: "would have invested" },
            { sent: "Robots clean. **Therefore**, they cook.", correct: "Moreover" },
            { sent: "The robot fell. **Moreover**, it broke.", correct: "Consequently" },
            { sent: "If you **will update** the software, it runs faster.", correct: "update" },
            { sent: "If the robot **has** feelings, it would be a friend.", correct: "had" },
            { sent: "We lost data **due** the crash.", correct: "due to" },
            { sent: "Animals die **because** deforestation.", correct: "because of" },
            { sent: "If you **deletes** the file, it is gone.", correct: "delete" },
            { sent: "If they **trained** the AI, it would have worked.", correct: "had trained" },
            { sent: "If I **was** a scientist, I would create it.", correct: "were" },
            { sent: "Tech is fast. **But**, it is everywhere.", correct: "Furthermore" },
            { sent: "I study hard **so** learn coding.", correct: "so as to" },
            { sent: "If the CPU overheats, the system **stop**.", correct: "stops" },
            { sent: "If we **not regulate** AI, it will be dangerous.", correct: "don't regulate" },
            { sent: "If I had a robot, I **will** name it Cyber.", correct: "would" },
            { sent: "If scientists **don't create** the laws, we would have had issues.", correct: "hadn't created" },
            { sent: "Automation saves time. **Consequently**, it takes jobs.", correct: "However" },
            { sent: "Hardware is expensive. **Therefore**, it is good.", correct: "Nevertheless" },
            { sent: "We need hardware **besides** we need software.", correct: "and" },
            { sent: "If you **will press** the button, it starts.", correct: "press" },
            { sent: "If I knew about the test, I **will** have studied.", correct: "would" },
            { sent: "If robots **will evolve**, I wonder if life changes.", correct: "evolve" },
            { sent: "If the system **hasn't** crashed, we would have finished.", correct: "hadn't" },
            { sent: "AI is useful. **Therefore**, it has risks.", correct: "However" },
            { sent: "I am busy **so that** I am working.", correct: "because" },
            { sent: "If we **won't** improve laws, it will be unfair.", correct: "don't" },
            { sent: "If I **have** more data, I would solve it.", correct: "had" },
            { sent: "If it **rain**, the robot stays inside.", correct: "rains" }
        ],


        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Group 1: Zero & First Conditionals (Question to Answer)
            { pairs: [{a: "What happens if you turn on the power?", b: "The robot starts moving immediately."}, {a: "If the CPU overheats, does the system stop?", b: "Yes, the hardware stops to prevent damage."}, {a: "Will AI automate work if it develops further?", b: "Yes, it will automate almost every type of work."}, {a: "If we invest in robotics, what will happen?", b: "Production will increase significantly."}, {a: "What will you do if you update the software?", b: "It will run faster and be more efficient."}] },
            // Group 2: Second & Third Conditionals (Question to Answer)
            { pairs: [{a: "If I were you, what would I study?", b: "You would study machine learning and robotics."}, {a: "What would happen if robots had feelings?", b: "They would probably be our best friends."}, {a: "Would life be better if we had robot-companions?", b: "Yes, it would be much more comfortable."}, {a: "If they had used the algorithm, would they have succeeded?", b: "Yes, they would have achieved success much faster."}, {a: "What would have happened if the machine hadn't broken?", b: "It would have produced more items yesterday."}] },
            // Group 3: Linking Words (Contrast Q&A)
            { pairs: [{a: "Is AI fast and efficient?", b: "Yes, however, it lacks human creativity."}, {a: "Does automation save a lot of time?", b: "True, on the other hand, it might take manual jobs."}, {a: "Is the computer hardware very expensive?", b: "Yes, nevertheless, it is a good investment."}, {a: "Should we use robots in factories?", b: "Yes, but we must focus on ethical data use."}, {a: "Do robots have high intelligence?", b: "Yes, besides, they don't get tired like humans."}] },
            // Group 4: Logic & Consequences (Question to Answer)
            { pairs: [{a: "Why must the robot stop now?", b: "Because the battery is low; therefore, it must stop."}, {a: "Why did the experiment fail yesterday?", b: "As a result of losing the data, it failed."}, {a: "Why did the city lose power suddenly?", b: "Consequently, because the turbines were broken."}, {a: "Why do we train the neural network?", b: "We train it so that it can solve problems."}, {a: "Why are companies laying off workers?", b: "It is due to the increase in automation."}] },
            // Group 5: Hypotheticals & Science (Question to Answer)
            { pairs: [{a: "What if robots evolve to have emotions?", b: "I wonder if that would change everything."}, {a: "Could there be a perfect algorithm?", b: "Perhaps, but it would need huge data sets."}, {a: "If you were a developer, would you create an android?", b: "Yes, I would design a helpful companion."}, {a: "What if the software malfunctions today?", b: "The screen will show an error message."}, {a: "Would you have joined the course if it were free?", b: "Yes, I would have joined it immediately."}] },
            // Group 6: Routines vs. Arrangements (Question to Answer)
            { pairs: [{a: "Do you usually study in the library?", b: "Yes, I always go there after school."}, {a: "Are you meeting Sarah at the park tomorrow?", b: "Yes, it is a fixed arrangement for the afternoon."}, {a: "What are you doing at the moment?", b: "I am currently working on a robotics project."}, {a: "Are you going to study for the test tonight?", b: "No, I am going to relax and watch a movie."}, {a: "Does the school usually have assembly on Mondays?", b: "Yes, but next week we are meeting on Tuesday."}] },
            // Group 7: Safety & Rules (Question to Answer)
            { pairs: [{a: "What are the Three Laws of Robotics for?", b: "They are a set of rules to ensure safety."}, {a: "What if a robot goes rogue?", b: "It would cause safety issues for society."}, {a: "Do we need better laws for technology?", b: "Yes, so that they can protect our privacy."}, {a: "How do high-tech devices affect us?", b: "They have a huge impact on our daily behavior."}, {a: "Why do we need ethical guidelines?", b: "Moreover, we need them to ensure fairness."}] },
            // Group 8: Future Possibilities (Question to Answer)
            { pairs: [{a: "Will robots take many manual jobs soon?", b: "Yes, they will take them in the near future."}, {a: "Can AI help us save energy in big cities?", b: "Yes, it can optimize traffic and usage."}, {a: "Will the system become more efficient?", b: "If we train it correctly, it will improve."}, {a: "Are machines becoming more like humans?", b: "Yes, they are evolving to understand emotions."}, {a: "Will you consider a career in AI?", b: "Yes, I believe innovation benefits humanity."}] },
            // Group 9: Past Regrets (Third Conditional Q&A)
            { pairs: [{a: "If I had known about the advancement earlier?", b: "I would have invested in the company."}, {a: "If only they had implemented the project!", b: "They would have avoided the current crisis."}, {a: "Would they have lost money?", b: "No, they wouldn't have if they had acted."}, {a: "If you had saved the data before the crash?", b: "I wouldn't have lost my work yesterday."}, {a: "If the CPU hadn't overheated?", b: "The hardware wouldn't have stopped."}] },
            // Group 10: Addition & Fresh Points (Question to Answer)
            { pairs: [{a: "Is this algorithm efficient?", b: "Yes, moreover, it is very secure."}, {a: "Is technology changing fast?", b: "Yes, furthermore, it is everywhere."}, {a: "Do you like robotics?", b: "Yes, also, I enjoy virtual reality."}, {a: "Does the factory use virtual reality?", b: "Yes, in addition, they have a green plan."}, {a: "Is this robot smart?", b: "Yes, besides, it is very helpful."}] },
            
            // Group 11: Zero & First Conditionals (Sentence Completion)
            { pairs: [{a: "If you press the red button...", b: "...the robot starts the sequence."}, {a: "If we develop AI further...", b: "...it will automate manual work."}, {a: "If the temperature rises...", b: "...the hardware overheats and stops."}, {a: "If they invest in innovation...", b: "...they will achieve better results."}, {a: "If you delete the software...", b: "...the computer doesn't work anymore."}] },
            // Group 12: Second & Third Conditionals (Sentence Completion)
            { pairs: [{a: "If I were a scientist...", b: "...I would create a robot-companion."}, {a: "If robots had feelings...", b: "...they would be better companions."}, {a: "If they had used the code...", b: "...they wouldn't have lost the data."}, {a: "If I had known the answer...", b: "...I would have passed the test."}, {a: "If we lived in the future...", b: "...we would use virtual reality daily."}] },
            // Group 13: Contrast Linking Words (Sentence Completion)
            { pairs: [{a: "AI is incredibly fast...", b: "...however, it lacks human creativity."}, {a: "Automation saves time...", b: "...on the other hand, it might take jobs."}, {a: "The hardware is expensive...", b: "...nevertheless, it is a good investment."}, {a: "Tech is very useful...", b: "...but it has many risks if not regulated."}, {a: "Robots are efficient...", b: "...yet they cannot feel human emotions."}] },
            // Group 14: Consequence Linking Words (Sentence Completion)
            { pairs: [{a: "The battery is low...", b: "...therefore, the robot must stop."}, {a: "We lost the files...", b: "...as a result, the experiment failed."}, {a: "The turbines were broken...", b: "...consequently, the city lost power."}, {a: "We train the algorithm...", b: "...so that it can solve problems."}, {a: "Biomass reduces waste...", b: "...for this reason, schools use it."}] },
            // Group 15: Addition Linking Words (Sentence Completion)
            { pairs: [{a: "This algorithm is efficient...", b: "...moreover, it is very secure."}, {a: "Technology is changing fast...", b: "...furthermore, it is everywhere."}, {a: "I like studying robotics...", b: "...also, I enjoy virtual reality."}, {a: "We need new laws...", b: "...in addition, we need guidelines."}, {a: "Besides being very smart...", b: "...this robot is extremely helpful."}] },
            // Group 16: Conditionals Mix (Sentence Completion)
            { pairs: [{a: "If the CPU overheats...", b: "...the hardware stops automatically."}, {a: "If we train the network...", b: "...it will improve the whole system."}, {a: "If I were you...", b: "...I would study machine learning."}, {a: "If she had been there...", b: "...she would have seen the mutation."}, {a: "If robots evolve...", b: "...life would be very different."}] },
            // Group 17: Time Expressions (Sentence Completion)
            { pairs: [{a: "Since the project started...", b: "...we have been modifying the data."}, {a: "By the time we finish...", b: "...we will have learned about ancestry."}, {a: "For millions of years...", b: "...species have been evolving slowly."}, {a: "In recent years...", b: "...technology has dramatically changed."}, {a: "By next year...", b: "...we will have mapped the genome."}] },
            // Group 18: Robot Actions (Sentence Completion)
            { pairs: [{a: "If a robot falls down...", b: "...it needs to stand up alone."}, {a: "When robots see danger...", b: "...they act to help the human."}, {a: "After the system updates...", b: "...it runs much more effectively."}, {a: "Before the robot starts...", b: "...you must turn on the power."}, {a: "If the load is too high...", b: "...the machine will eventually overheat."}] },
            // Group 19: Scientific Logic (Sentence Completion)
            { pairs: [{a: "Through genetic studies...", b: "...we know how selection works."}, {a: "Evidence shows that...", b: "...climate is changing dramatically."}, {a: "Biodiversity is essential...", b: "...for a healthy and safe planet."}, {a: "Natural selection favors...", b: "...the strongest and best adapted."}, {a: "Mutation is a change...", b: "...that occurs in the genetic code."}] },
            // Group 20: General Logic (Sentence Completion)
            { pairs: [{a: "In order to learn...", b: "...you should study every day."}, {a: "Suppose you had a robot...", b: "...what would you ask it to do?"}, {a: "I wonder if...", b: "...life will change by 2050."}, {a: "Shall we discuss...", b: "...this topic with the teacher?"}, {a: "It is believed that...", b: "...life started in the water."}] },
            
            // Group 21: Translation (AI Terms)
            { pairs: [{a: "Artificial Intelligence", b: "Inteligência Artificial."}, {a: "Machine learning", b: "Aprendizado de máquina."}, {a: "Neural network", b: "Rede neural."}, {a: "Augmented reality", b: "Realidade aumentada."}, {a: "Virtual reality", b: "Realidade virtual."}] },
            // Group 22: Translation (Tech Basics)
            { pairs: [{a: "Algorithm", b: "Algoritmo."}, {a: "Hardware", b: "Hardware (Componentes físicos)."}, {a: "Software", b: "Software (Programas)."}, {a: "Automation", b: "Automação."}, {a: "Innovation", b: "Inovação."}] },
            // Group 23: Translation (Connectors 1)
            { pairs: [{a: "Moreover", b: "Além disso / Além do mais."}, {a: "However", b: "No entanto / Contudo."}, {a: "Therefore", b: "Portanto."}, {a: "On the other hand", b: "Por outro lado."}, {a: "In order to", b: "Para que / A fim de."}] },
            // Group 24: Translation (Conditionals)
            { pairs: [{a: "If I were you", b: "Se eu fosse você."}, {a: "If I had known", b: "Se eu soubesse / tivesse sabido."}, {a: "If you turn on", b: "Se você ligar."}, {a: "If AI develops", b: "Se a IA se desenvolver."}, {a: "What if...?", b: "E se...?"}] },
            // Group 25: Translation (Verbs 1)
            { pairs: [{a: "To achieve", b: "Alcançar / Conquistar."}, {a: "To automate", b: "Automatizar."}, {a: "To control", b: "Controlar."}, {a: "To create", b: "Criar."}, {a: "To discover", b: "Descobrir."}] },
            // Group 26: Translation (Verbs 2)
            { pairs: [{a: "To fall down", b: "Cair."}, {a: "To focus", b: "Focar / Concentrar-se."}, {a: "To happen", b: "Acontecer."}, {a: "To improve", b: "Melhorar."}, {a: "To invest", b: "Investir."}] },
            // Group 27: Translation (Verbs 3)
            { pairs: [{a: "To lay off", b: "Demitir."}, {a: "To lose", b: "Perder."}, {a: "To overheat", b: "Superaquecer."}, {a: "To produce", b: "Produzir."}, {a: "To regulate", b: "Regular."}] },
            // Group 28: Translation (Verbs 4)
            { pairs: [{a: "To speak", b: "Falar."}, {a: "To study", b: "Estudar."}, {a: "To think", b: "Pensar."}, {a: "To train", b: "Treinar."}, {a: "To use", b: "Usar."}] },
            // Group 29: Translation (Concepts)
            { pairs: [{a: "Three Laws of Robotics", b: "Três Leis da Robótica."}, {a: "Technological advance", b: "Avanço tecnológico."}, {a: "Ethical data use", b: "Uso ético de dados."}, {a: "Center of interest", b: "Centro de interesse."}, {a: "Human resources", b: "Recursos humanos."}] },
            // Group 30: Translation (Connectors 2)
            { pairs: [{a: "As a result", b: "Como resultado."}, {a: "As a consequence", b: "Como consequência."}, {a: "For this reason", b: "Por esta razão."}, {a: "In addition", b: "Além disso."}, {a: "Besides", b: "Além de."}] },
            
            // Group 31: Definitions (Tech Concepts)
            { pairs: [{a: "Algorithm", b: "A set of rules followed by a computer."}, {a: "Automation", b: "Using machines to do work automatically."}, {a: "Hardware", b: "The physical parts of a computer system."}, {a: "Software", b: "The programs used by a computer."}, {a: "Data", b: "Facts and statistics collected for analysis."}] },
            // Group 32: Definitions (AI Terms)
            { pairs: [{a: "AI", b: "Computer systems performing human-like tasks."}, {a: "Machine learning", b: "Systems that learn from experience."}, {a: "Neural network", b: "Computer system modeled on the human brain."}, {a: "Robotics", b: "The design and construction of robots."}, {a: "Robot", b: "A machine capable of automatic complex actions."}] },
            // Group 33: Definitions (Social Impact)
            { pairs: [{a: "Lay off", b: "To discharge a worker due to automation."}, {a: "Regulation", b: "Rules to control how technology is used."}, {a: "Ethics", b: "Moral principles regarding technology use."}, {a: "Privacy", b: "The right to keep personal data safe."}, {a: "Displacement", b: "When machines take the place of humans."}] },
            // Group 34: Definitions (Action Verbs 1)
            { pairs: [{a: "Achieve", b: "To successfully reach a desired goal."}, {a: "Automate", b: "To make a process operate by machines."}, {a: "Control", b: "To influence or direct a machine's behavior."}, {a: "Develop", b: "To grow or create something more mature."}, {a: "Evolve", b: "To develop gradually from simple to complex."}] },
            // Group 35: Definitions (Action Verbs 2)
            { pairs: [{a: "Implement", b: "To put a plan or agreement into effect."}, {a: "Improve", b: "To make something better than before."}, {a: "Invest", b: "To expend money with expectation of profit."}, {a: "Regulate", b: "To maintain the rate or speed of a process."}, {a: "Train", b: "To teach a skill to a person or machine."}] },
            // Group 36: Definitions (Process States)
            { pairs: [{a: "Happen", b: "To take place or occur in time."}, {a: "Overheat", b: "To make or become excessively hot."}, {a: "Fall down", b: "To drop to the ground or fail in an attempt."}, {a: "Continue", b: "To persist in an activity without stopping."}, {a: "Exist", b: "To have objective reality or being."}] },
            // Group 37: Definitions (Conditionals Logic)
            { pairs: [{a: "Zero Conditional", b: "Used for general truths and facts."}, {a: "First Conditional", b: "Used for real possibilities in the future."}, {a: "Second Conditional", b: "Used for imaginary situations in the present."}, {a: "Third Conditional", b: "Used for regrets about the past."}, {a: "Hypothetical", b: "Something based on a suggested idea, not reality."}] },
            // Group 38: Definitions (Discourse Markers 1)
            { pairs: [{a: "However", b: "Introduces a statement that contrasts."}, {a: "Nevertheless", b: "In spite of that; notwithstanding."}, {a: "On the other hand", b: "Presents a contrasting point of view."}, {a: "Moreover", b: "As a further matter; in addition."}, {a: "Furthermore", b: "Used to introduce a fresh consideration."}] },
            // Group 39: Definitions (Discourse Markers 2)
            { pairs: [{a: "Therefore", b: "For that reason; as a consequence."}, {a: "Consequently", b: "Showing the effect of a previous action."}, {a: "As a result", b: "Phrase used to introduce a consequence."}, {a: "So that", b: "Used to explain the purpose of an action."}, {a: "Because of", b: "Used to introduce the cause of a situation."}] },
            // Group 40: Definitions (General Science)
            { pairs: [{a: "Discovery", b: "Finding something that already existed."}, {a: "Innovation", b: "Creating a new method, idea, or product."}, {a: "Advancement", b: "Moving forward in a process of progress."}, {a: "Research", b: "The systematic investigation of a subject."}, {a: "Evidence", b: "Available body of facts indicating a belief."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 ITEMS) ---
        7: [
            { q: "What happens if you turn on the power?", options: ["The robot starts moving.", "I am fifteen.", "The moon is green."], a: "The robot starts moving." },
            { q: "What would you do if you were a developer?", options: ["I would create a robot.", "I have a phone.", "It happened in 1903."], a: "I would create a robot." },
            { q: "Why do we need ethical guidelines?", options: ["To ensure safety.", "Because robots like jeans.", "The moon is cheese."], a: "To ensure safety." },
            { q: "What would you do if you were a gamer?", options: ["I would compete globally.", "I would eat a laptop.", "I would sleep on the field."], a: "I would compete globally." },
            { q: "If robots automate work, what might happen?", options: ["People might lose jobs.", "The sun turns off.", "Oceans evaporate."], a: "People might lose jobs." },
            { q: "What is the result of updating software?", options: ["It runs more efficiently.", "It becomes a brick.", "It flies away."], a: "It runs more efficiently." },
            { q: "Why do we train AI models?", options: ["So they can learn.", "Because they are hungry.", "To go to college."], a: "So they can learn." },
            { q: "If you had a robot-companion, what would happen?", options: ["It would help with chores.", "It would eat homework.", "It would live in a rock."], a: "It would help with chores." },
            { q: "What is the consequence of a low battery?", options: ["The robot must stop.", "It runs faster.", "It discovers fossils."], a: "The robot must stop." },
            { q: "Why is natural selection important?", options: ["It allows adaptation.", "It creates hardware.", "It watches videos."], a: "It allows adaptation." },
            { q: "Suppose you won an android, what would you do?", options: ["Use it to study coding.", "Use it as a ball.", "Use it to make storms."], a: "Use it to study coding." },
            { q: "If a factory automates, what increases?", options: ["Production efficiency.", "Human ancestors.", "Airplane prices."], a: "Production efficiency." },
            { q: "What would have happened without the algorithm?", options: ["They would have failed.", "They would fly.", "They would be students."], a: "They would have failed." },
            { q: "Why use virtual reality in training?", options: ["For a safe environment.", "To overheat hardware.", "To miss the bus."], a: "For a safe environment." },
            { q: "If you turn on the power, what is the result?", options: ["Machine starts.", "It becomes native.", "It turns blue."], a: "Machine starts." },
            { q: "What is a neural network similar to?", options: ["A human brain.", "Sneakers.", "A rainy day."], a: "A human brain." },
            { q: "Why regulate technological advances?", options: ["To ensure safety.", "To reinvent wheels.", "To play games."], a: "To ensure safety." },
            { q: "If I had known about the test, what would I have done?", options: ["Studied harder.", "Become a robot.", "Flown a plane."], a: "Studied harder." },
            { q: "What does 'lay off' mean?", options: ["Workers lose jobs.", "Robot sleeps.", "Software loads."], a: "Workers lose jobs." },
            { q: "Why analyze huge amounts of data?", options: ["To find patterns.", "To go to the mall.", "To wear dresses."], a: "To find patterns." },
            { q: "What if a robot broke the laws?", options: ["It would cause safety issues.", "It becomes a student.", "It turns to fabric."], a: "It would cause safety issues." },
            { q: "If the hardware shuts down, what happens?", options: ["The software stops.", "The screen shows pizza.", "It becomes successful."], a: "The software stops." },
            { q: "Why is biodiversity essential?", options: ["For a healthy planet.", "For a computer.", "For a robot."], a: "For a healthy planet." },
            { q: "If we invest in primates, what happens?", options: ["Nothing related to robotics.", "Production increases.", "Fossils appear."], a: "Nothing related to robotics." },
            { q: "What could robots automate soon?", options: ["Housework.", "Dreams.", "Evolution."], a: "Housework." },
            { q: "Who does natural selection favor?", options: ["The strongest.", "The smallest.", "The newest."], a: "The strongest." },
            { q: "If the robot sees a human in danger, what does it do?", options: ["It acts to help.", "It eats a pizza.", "It sleeps."], a: "It acts to help." },
            { q: "How did you feel using augmented reality?", options: ["Like in a movie.", "Like a machine.", "Like a genetic code."], a: "Like in a movie." },
            { q: "If you delete the software, what happens?", options: ["Computer stops working.", "It becomes happy.", "It flies."], a: "Computer stops working." },
            { q: "Why did the factory lay off robots?", options: ["They didn't, they laid off workers.", "Because of ancestors.", "Because of genes."], a: "They didn't, they laid off workers." },
            { q: "If scientists hadn't created laws, what would happen?", options: ["We would have problems.", "We would be fossils.", "We would be primates."], a: "We would have problems." },
            { q: "Why do we train the neural network?", options: ["So it can solve problems.", "So it can eat.", "So it can sleep."], a: "So it can solve problems." },
            { q: "If the CPU freezes, what happens?", options: ["Hardware stops.", "It melts.", "It sings."], a: "Hardware stops." },
            { q: "Automation saves time, but what is the risk?", options: ["It might take jobs.", "It adds more hours.", "It creates robots."], a: "It might take jobs." },
            { q: "We need hardware, and what else?", options: ["Software.", "Pizza.", "Shoes."], a: "Software." },
            { q: "If I am a robot, what would I do?", options: ["Read 100 books.", "Be a human.", "Sleep."], a: "Read 100 books." },
            { q: "What does the factory use to train workers?", options: ["Virtual reality.", "Fossils.", "Ancestors."], a: "Virtual reality." },
            { q: "If you update the software, what happens?", options: ["It runs faster.", "It breaks.", "It eats."], a: "It runs faster." },
            { q: "Has technology evolved dramatically?", options: ["Yes, recently.", "No, never.", "It died."], a: "Yes, recently." },
            { q: "If the robot sees a human, what starts?", options: ["Helping.", "Crying.", "Sleeping."], a: "Helping." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 ITEMS) ---
        8: [
            { sent: "An **asylum** is a set of rules for a computer.", wrong: "asylum", options: ["algorithm", "hardware", "mutation", "fossil"], a: "algorithm" },
            { sent: "If the CPU **overheats**, the computer becomes cold.", wrong: "cold", options: ["broken/shut down", "safe", "fast", "expensive"], a: "broken/shut down" },
            { sent: "Factories use **virtual reality** to build cars without people.", wrong: "virtual reality", options: ["automation", "data", "biodiversity", "ancestry"], a: "automation" },
            { sent: "A **neural network** is the physical part you touch.", wrong: "neural network", options: ["hardware", "software", "algorithm", "data"], a: "hardware" },
            { sent: "Engineers train AI by giving them a **pizza**.", wrong: "pizza", options: ["data", "fossil", "blueprint", "species"], a: "data" },
            { sent: "If you turn on the power, the robot starts **sleeping**.", wrong: "sleeping", options: ["moving", "dying", "evolving", "extinct"], a: "moving" },
            { sent: "Companies **lay off** workers when they hire more.", wrong: "hire", options: ["automate/fire", "achieve", "improve", "respect"], a: "automate/fire" },
            { sent: "Technology has **extinct** dramatically recently.", wrong: "extinct", options: ["evolved", "fallen", "overheated", "blocked"], a: "evolved" },
            { sent: "**Machine learning** allows robots to vacuum by itself.", wrong: "Machine learning", options: ["A robot", "An ancestor", "A gene", "A fossil"], a: "A robot" },
            { sent: "The Three Laws ensure human **extinction**.", wrong: "extinction", options: ["safety", "evolution", "mutation", "biodiversity"], a: "safety" },
            { sent: "If scientists hadn't created the **world**, we would have problems.", wrong: "world", options: ["laws", "species", "fossils", "primates"], a: "laws" },
            { sent: "AI is useful; **consequently**, it lacks creativity.", wrong: "consequently", options: ["however", "moreover", "furthermore", "in addition"], a: "however" },
            { sent: "The battery is low; **nevertheless**, it must stop.", wrong: "nevertheless", options: ["therefore", "on the other hand", "besides", "although"], a: "therefore" },
            { sent: "We train AI **however** it can solve problems.", wrong: "however", options: ["so that", "despite", "since", "as a result"], a: "so that" },
            { sent: "Algorithm is efficient. **Consequently**, it is secure.", wrong: "Consequently", options: ["Moreover", "However", "Nevertheless", "On the other hand"], a: "Moreover" },
            { sent: "If I were you, I would study **fossils**.", wrong: "fossils", options: ["robotics/AI", "history", "art", "biodiversity"], a: "robotics/AI" },
            { sent: "Suppose you had a **sandwich**, what would you do?", wrong: "sandwich", options: ["robot", "mutation", "genome", "primate"], a: "robot" },
            { sent: "If a robot falls, it needs to **fly**.", wrong: "fly", options: ["stand up", "sleep", "die", "mutate"], a: "stand up" },
            { sent: "**Digital Natives** hate using technology.", wrong: "hate", options: ["love/use", "fear", "block", "study"], a: "love/use" },
            { sent: "If hardware **malfunctions**, screen shows pizza.", wrong: "pizza", options: ["error", "success", "data", "algorithm"], a: "error" },
            { sent: "**Biodiversity** is essential for a computer.", wrong: "computer", options: ["planet", "hardware", "software", "robot"], a: "planet" },
            { sent: "If we invest in **primates**, production increases.", wrong: "primates", options: ["robotics/automation", "fossils", "extinction", "history"], a: "robotics/automation" },
            { sent: "Robots could automate all **homework**.", wrong: "homework", options: ["housework/tasks", "meals", "dreams", "evolution"], a: "housework/tasks" },
            { sent: "Natural selection favors the **weakest**.", wrong: "weakest", options: ["strongest", "smallest", "slowest", "newest"], a: "strongest" },
            { sent: "If robot sees **pizza** in danger, it helps.", wrong: "pizza", options: ["human", "bone", "fossil", "algorithm"], a: "human" },
            { sent: "I felt like in a movie using **augmented** reality.", wrong: "augmented", options: ["virtual", "machine", "data", "genetic"], a: "virtual" },
            { sent: "If you delete software, computer will be **happy**.", wrong: "happy", options: ["stop working", "run faster", "be new", "fly"], a: "stop working" },
            { sent: "Factory laid off **robots** because of workers.", wrong: "robots", options: ["workers", "ancestors", "genes", "fossils"], a: "workers" },
            { sent: "If scientists hadn't created the **moon**, we'd have problems.", wrong: "moon", options: ["laws", "species", "fossils", "primates"], a: "laws" },
            { sent: "We train neural network so it can **eat**.", wrong: "eat", options: ["solve problems", "sleep", "dream", "walk"], a: "solve problems" },
            { sent: "If CPU **freezes**, hardware stops.", wrong: "freezes", options: ["overheats", "melts", "smiles", "sings"], a: "overheats" },
            { sent: "Automation saves time. **Therefore**, it takes jobs.", wrong: "Therefore", options: ["On the other hand", "Moreover", "Furthermore", "In addition"], a: "On the other hand" },
            { sent: "We need powerful **software** like monitors.", wrong: "software", options: ["hardware", "algorithms", "neural networks", "data"], a: "hardware" },
            { sent: "If I **am** a robot, I would read.", wrong: "am", options: ["were", "will be", "had been", "been"], a: "were" },
            { sent: "Factory uses **ghosts** to train workers.", wrong: "ghosts", options: ["virtual reality", "fossils", "ancestors", "mutations"], a: "virtual reality" },
            { sent: "If you update the **pizza**, it runs faster.", wrong: "pizza", options: ["software", "hardware", "algorithm", "data"], a: "software" },
            { sent: "Technology has **extinct** dramatically.", wrong: "extinct", options: ["evolved", "died", "stopped", "failed"], a: "evolved" },
            { sent: "If robot sees human, it starts **crying**.", wrong: "crying", options: ["acting/helping", "sleeping", "eating", "laughing"], a: "acting/helping" },
            { sent: "We need ethical **blueprints** for AI.", wrong: "blueprints", options: ["guidelines/laws", "fossils", "species", "ancestors"], a: "guidelines/laws" },
            { sent: "If they **use** the algorithm yesterday, they would win.", wrong: "use", options: ["had used", "will use", "have used", "use"], a: "had used" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 ITEMS) ---
        9: [
            { audio: "What happens if you turn on the power to the robot?", options: ["The robot starts moving immediately.", "I am fifteen years old.", "In the science museum.", "No, he isn't."], a: "The robot starts moving immediately." },
            { audio: "What would you do if you were a developer?", options: ["I would create a helpful companion robot.", "Yes, I have a smartphone.", "It happened in 1903.", "Because I am tired."], a: "I would create a helpful companion robot." },
            { audio: "Why do we need ethical guidelines for AI?", options: ["To ensure that technology benefits humanity safely.", "Because robots like pizza.", "At 8 o'clock.", "Yes, they do."], a: "To ensure that technology benefits humanity safely." },
            { audio: "If the CPU overheats, what does the system do?", options: ["It stops working to prevent hardware damage.", "It starts singing loudly.", "In the computer lab.", "For two hours."], a: "It stops working to prevent hardware damage." },
            { audio: "What would have happened if they hadn't updated the software?", options: ["The system would have crashed immediately.", "They are digital natives.", "Since last week.", "No, thank you."], a: "The system would have crashed immediately." },
            { audio: "Who controls the smart factory's operations?", options: ["A central neural network controls everything.", "It is an old mobile phone.", "In the hallway.", "Yes, it is."], a: "A central neural network controls everything." },
            { audio: "If a robot sees a human in danger, how does it act?", options: ["It acts immediately to provide help.", "It is a set of rules.", "On the top floor.", "Tomorrow."], a: "It acts immediately to provide help." },
            { audio: "Why did the city lose power according to the news?", options: ["Because the turbines were broken.", "I am a student.", "It is red and blue.", "No, they hasn't."], a: "Because the turbines were broken." },
            { audio: "What if robots evolve to have human emotions?", options: ["I wonder if our society would change.", "It is a double-helix.", "In the kitchen.", "No, I don't."], a: "I wonder if our society would change." },
            { audio: "How does machine learning improve computer systems?", options: ["It allows them to learn from data over time.", "She is an engineer.", "In the library.", "No, it am not."], a: "It allows them to learn from data over time." },
            { audio: "What is the consequence of a low battery?", options: ["Therefore, the robot must stop and recharge.", "They already discovered the fossil.", "Since 2010.", "Yet."], a: "Therefore, the robot must stop and recharge." },
            { audio: "If we invest in robotics now, what will happen?", options: ["Production will increase significantly next year.", "They are extinct now.", "Already.", "No, they hasn't."], a: "Production will increase significantly next year." },
            { audio: "Suppose you won a high-tech android, what would you ask it?", options: ["I would ask it to help me with my chores.", "It is over 100 million years old.", "With a high-tech microscope.", "No, they hadn't."], a: "I would ask it to help me with my chores." },
            { audio: "Why are companies laying off manual workers?", options: ["Due to the rapid increase in automation.", "It is a hereditary trait.", "For two weeks.", "Already."], a: "Due to the rapid increase in automation." },
            { audio: "What would you have done if the power had gone out?", options: ["I would have used a flashlight.", "It is a set of rules.", "In the science museum.", "No, they hadn't."], a: "I would have used a flashlight." },
            { audio: "How do high-tech devices impact our behavior?", options: ["They change how we interact and communicate.", "It is a double-helix structure.", "Millions of years ago.", "Yes, I have."], a: "They change how we interact and communicate." },
            { audio: "If you turn on the power, does the robot move?", options: ["Yes, it starts moving right away.", "It is a history book.", "Because of the mutation.", "Yet."], a: "Yes, it starts moving right away." },
            { audio: "Why is virtual reality used in factory training?", options: ["So that workers can learn safely and effectively.", "I already found the bone.", "On Thursday afternoon.", "Already."], a: "So that workers can learn safely and effectively." },
            { audio: "What would have happened without the new algorithm?", options: ["The system would have failed its mission.", "It is a humid climate.", "In the cafeteria.", "No, they hadn't."], a: "The system would have failed its mission." },
            { audio: "If you delete the software, does the computer work?", options: ["No, it doesn't work without the instructions.", "It is a rainforest.", "Biodiversity is essential.", "No, thank you."], a: "No, it doesn't work without the instructions." },
            { audio: "Who is the creator of the Three Laws of Robotics?", options: ["They were devised by Isaac Asimov.", "I am a student.", "In the morning.", "By the time he arrived."], a: "They were devised by Isaac Asimov." },
            { audio: "What will happen if we don't act now?", options: ["The whole system may become unfair.", "I am fifteen years old.", "Through genetic studies.", "No, they hadn't."], a: "The whole system may become unfair." },
            { audio: "Why is innovation key in the modern world?", options: ["Because it creates solutions for global crises.", "It is a set of rules.", "In the laboratory.", "Already."], a: "Because it creates solutions for global crises." },
            { audio: "Suppose the robot falls down, what does it do?", options: ["It stands up alone to continue its task.", "They are similar to apes.", "Since last month.", "No, not yet."], a: "It stands up alone to continue its task." },
            { audio: "What is the priority for the lab researcher?", options: ["Technological innovation is the main priority.", "It is a detailed model.", "Paleontologists found them.", "Already."], a: "Technological innovation is the main priority." },
            { audio: "If the robot had feelings, would it be sad?", options: ["I'm not sure, but it might feel emotions.", "It is a hereditary trait.", "Because of natural selection.", "Yet."], a: "I'm not sure, but it might feel emotions." },
            { audio: "How long has technology been evolving dramatically?", options: ["It has been changing fast in recent years.", "It is a 100-million-year-old rock.", "In Brazil.", "Yes, he had."], a: "It has been changing fast in recent years." },
            { audio: "What if the CPU overheats during the tour?", options: ["Then the hardware stops automatically.", "They already found the link.", "In the afternoon.", "Already."], a: "Then the hardware stops automatically." },
            { audio: "Will machines take manual jobs in the future?", options: ["Yes, automation will replace many workers soon.", "He is an engineer.", "In the city center.", "Yes, they have."], a: "Yes, automation will replace many workers soon." },
            { audio: "Why do we need ethical data use?", options: ["To protect the privacy of all citizens.", "It is a genetic instruction.", "Through genetic studies.", "Already."], a: "To protect the privacy of all citizens." },
            { audio: "If I were a scientist, would I create an android?", options: ["Yes, you would probably design one.", "It is a dry desert.", "Millions of years ago.", "No, he hadn't."], a: "Yes, you would probably design one." },
            { audio: "What does a central neural network do?", options: ["It controls all parts of the smart system.", "It has thick fur.", "In the snow.", "No, I hadn't."], a: "It controls all parts of the smart system." },
            { audio: "If they had trained the AI better, would it have failed?", options: ["No, it wouldn't have made that mistake.", "It is a sad case of extinction.", "For two hours.", "Already."], a: "No, it wouldn't have made that mistake." },
            { audio: "Why is biodiversity essential for the planet?", options: ["It ensures a healthy and balanced ecosystem.", "I am a student at the college.", "Since 2010.", "Yet."], a: "It ensures a healthy and balanced ecosystem." },
            { audio: "What will happen if we add more data?", options: ["The algorithm will become more efficient.", "It is a change in the code.", "In the hallway.", "No, she doesn't."], a: "The algorithm will become more efficient." },
            { audio: "If the robot sees a human in danger, what law applies?", options: ["The First Law of Robotics applies.", "It is a tree of life.", "Millions of years.", "Yes, there has."], a: "The First Law of Robotics applies." },
            { audio: "What if the hardware crashes today?", options: ["We will have to use the backup system.", "It is a rainforest.", "Through natural selection.", "Already."], a: "We will have to use the backup system." },
            { audio: "Why must we improve school safety laws?", options: ["So that every student feels safe and protected.", "They are similar to apes.", "For six months.", "No, they hadn't."], a: "So that every student feels safe and protected." },
            { audio: "How would life be different without AI?", options: ["Life would be more manual and slower.", "It favors the strongest.", "By Friday noon.", "Just."], a: "Life would be more manual and slower." },
            { audio: "Are we going to discuss this with the teacher?", options: ["Yes, we shall talk about it in class.", "Technology has changed.", "In recent years.", "Yes, it would."], a: "Yes, we shall talk about it in class." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 ITEMS) ---
        10: [
            { audio: "If you turn on the power, the robot starts moving.", sent: "If you ___ on the power, the robot ___ moving.", blanks: ["turn", "starts"] },
            { audio: "If AI develops further, it will automate work.", sent: "If AI ___ further, it ___ automate work.", blanks: ["develops", "will"] },
            { audio: "If we had robots today, life would be easier.", sent: "If we ___ robots today, life ___ be easier.", blanks: ["had", "would"] },
            { audio: "If they had used the algorithm, they would have succeeded.", sent: "If they ___ used the algorithm, they ___ have succeeded.", blanks: ["had", "would"] },
            { audio: "If the CPU overheats, the hardware stops working.", sent: "If the CPU ___, the hardware ___ working.", blanks: ["overheats", "stops"] },
            { audio: "AI is fast; however, it lacks creativity.", sent: "AI is fast; ___, it ___ creativity.", blanks: ["however", "lacks"] },
            { audio: "Automation saves time; on the other hand, it takes jobs.", sent: "Automation saves time; ___ the other ___, it takes jobs.", blanks: ["on", "hand"] },
            { audio: "The hardware is expensive; nevertheless, it is a good investment.", sent: "The hardware is expensive; ___, it is a ___ investment.", blanks: ["nevertheless", "good"] },
            { audio: "The battery is low; therefore, the robot must stop.", sent: "The battery is low; ___, the robot ___ stop.", blanks: ["therefore", "must"] },
            { audio: "We train the AI so that it can solve problems.", sent: "We train the AI ___ that it ___ solve problems.", blanks: ["so", "can"] },
            { audio: "This algorithm is efficient; moreover, it is very secure.", sent: "This algorithm is efficient; ___, it is very ___.", blanks: ["moreover", "secure"] },
            { audio: "Technology is changing fast; furthermore, it is everywhere.", sent: "Technology is changing fast; ___, it is ___.", blanks: ["furthermore", "everywhere"] },
            { audio: "Besides being smart, this robot is helpful.", sent: "___ being smart, this robot is ___.", blanks: ["Besides", "helpful"] },
            { audio: "We must improve our laws; consequently, the system will be fairer.", sent: "We must improve our laws; ___, the system will be ___.", blanks: ["consequently", "fairer"] },
            { audio: "If I were you, I would study robotics.", sent: "If I ___ you, I ___ study robotics.", blanks: ["were", "would"] },
            { audio: "If the robot had feelings, it would be our friend.", sent: "If the robot ___ feelings, it ___ be our friend.", blanks: ["had", "would"] },
            { audio: "If we had trained the AI better, we would have succeeded.", sent: "If we ___ trained the AI better, we ___ have succeeded.", blanks: ["had", "would"] },
            { audio: "If you update the software, it will run faster.", sent: "If you ___ the software, it ___ run faster.", blanks: ["update", "will"] },
            { audio: "The system would have crashed if they hadn't updated it.", sent: "The system ___ have crashed if they ___ updated it.", blanks: ["would", "hadn't"] },
            { audio: "If the robot sees a human in danger, it acts.", sent: "If the robot ___ a human in danger, it ___.", blanks: ["sees", "acts"] },
            { audio: "We need better laws in order to protect privacy.", sent: "We need better laws ___ order ___ protect privacy.", blanks: ["in", "to"] },
            { audio: "The robot fell down; as a result, its sensors broke.", sent: "The robot fell down; ___ a ___, its sensors broke.", blanks: ["as", "result"] },
            { audio: "AI can analyze data faster than any human.", sent: "AI can analyze data ___ than any ___.", blanks: ["faster", "human"] },
            { audio: "Innovation should benefit humanity; moreover, we need focus.", sent: "Innovation should ___ humanity; ___, we need focus.", blanks: ["benefit", "moreover"] },
            { audio: "The factory uses virtual reality to train workers.", sent: "The factory uses ___ reality to ___ workers.", blanks: ["virtual", "train"] },
            { audio: "Technology has dramatically evolved in recent years.", sent: "Technology ___ dramatically evolved in ___ years.", blanks: ["has", "recent"] },
            { audio: "We must regulate technological advancements regarding safety.", sent: "We must regulate ___ advancements ___ safety.", blanks: ["technological", "regarding"] },
            { audio: "The system will become more efficient if we add data.", sent: "The system will ___ more efficient if we ___ data.", blanks: ["become", "add"] },
            { audio: "If robots evolve, I wonder if life will change.", sent: "If robots ___, I ___ if life will change.", blanks: ["evolve", "wonder"] },
            { audio: "Machines will take many manual jobs soon.", sent: "Machines ___ take many manual ___ soon.", blanks: ["will", "jobs"] },
            { audio: "If I had more data, I would solve the crisis.", sent: "If I ___ more data, I ___ solve the crisis.", blanks: ["had", "would"] },
            { audio: "The Three Laws of Robotics ensure robot safety.", sent: "The Three ___ of Robotics ensure robot ___.", blanks: ["Laws", "safety"] },
            { audio: "The factory had to lay off workers due to automation.", sent: "The factory had to ___ off workers ___ to automation.", blanks: ["lay", "due"] },
            { audio: "Everything is controlled by a central neural network.", sent: "Everything ___ controlled by a central ___ network.", blanks: ["is", "neural"] },
            { audio: "Innovation is necessary; nevertheless, it has risks.", sent: "Innovation is ___; ___, it has risks.", blanks: ["necessary", "nevertheless"] },
            { audio: "If you press the button, the machine starts.", sent: "If you ___ the button, the machine ___.", blanks: ["press", "starts"] },
            { audio: "It is believed that a zero-carbon future is possible.", sent: "It ___ believed that a zero-carbon ___ is possible.", blanks: ["is", "future"] },
            { audio: "The system would have worked if the algorithm were better.", sent: "The system ___ have worked if the ___ were better.", blanks: ["would", "algorithm"] },
            { audio: "We must act now so that we can protect nature.", sent: "We ___ act now ___ that we can protect nature.", blanks: ["must", "so"] },
            { audio: "Technology allows us to understand our past.", sent: "Technology ___ us to ___ our past.", blanks: ["allows", "understand"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE (10 ITEMS) ---
        11: [
            {
                title: "The Automation Debate",
                lines: [
                    { speaker: "Albert", text: "If a company ___ in new hardware, its efficiency increases.", options: ["invests", "will invest"], a: "invests" },
                    { speaker: "Celine", text: "___, it often leads to job loss for manual workers.", options: ["On the other hand", "Moreover"], a: "On the other hand" },
                    { speaker: "Albert", text: "If governments ___ this trend, we would have better laws.", options: ["hadn't ignored", "don't ignore"], a: "hadn't ignored" },
                    { speaker: "Celine", text: "We must train human resources ___ people can work with machines.", options: ["so that", "nevertheless"], a: "so that" },
                    { speaker: "Albert", text: "If I ___ a politician, I would prioritize digital education.", options: ["were", "am"], a: "were" }
                ]
            },
            {
                title: "Troubleshooting the Prototype",
                lines: [
                    { speaker: "Student", text: "Teacher, if I ___ this button, nothing happens.", options: ["press", "pressed"], a: "press" },
                    { speaker: "Teacher", text: "The algorithm ___ an error if it doesn't move.", options: ["usually has", "would have"], a: "usually has" },
                    { speaker: "Student", text: "If I ___ the network yesterday, I would have found it.", options: ["had checked", "check"], a: "had checked" },
                    { speaker: "Teacher", text: "___, don't be frustrated. Failure is part of it.", options: ["Nevertheless", "Consequently"], a: "Nevertheless" },
                    { speaker: "Student", text: "If we ___ the hardware today, will it be ready?", options: ["fix", "fixed"], a: "fix" }
                ]
            },
            {
                title: "Ethical AI",
                lines: [
                    { speaker: "A", text: "Our new AI model is fast. ___, it is very secure.", options: ["Moreover", "However"], a: "Moreover" },
                    { speaker: "B", text: "But what if the algorithm ___ to have bias?", options: ["evolves", "evolved"], a: "evolves" },
                    { speaker: "A", text: "If we ___ guidelines now, the system might be unfair.", options: ["don't implement", "didn't implement"], a: "don't implement" },
                    { speaker: "A", text: "If scientists ___ on ethics in the past, we wouldn't have issues.", options: ["had focused", "focus"], a: "had focused" },
                    { speaker: "A", text: "We ___ these safety issues today.", options: ["wouldn't have faced", "won't face"], a: "wouldn't have faced" }
                ]
            },
            {
                title: "Future Realities",
                lines: [
                    { speaker: "Celine", text: "If we ___ in a world of robots, would you be scared?", options: ["lived", "live"], a: "lived" },
                    { speaker: "Albert", text: "Not necessarily. ___, I would miss human interaction.", options: ["However", "Therefore"], a: "However" },
                    { speaker: "Celine", text: "___ being efficient, robots lack empathy.", options: ["Besides", "Nevertheless"], a: "Besides" },
                    { speaker: "Albert", text: "If technology ___ at this rate, we will see them soon.", options: ["continues", "continued"], a: "continues" },
                    { speaker: "Celine", text: "Our daily behavior ___ dramatically.", options: ["will change", "would change"], a: "will change" }
                ]
            },
            {
                title: "Smart Home Issues",
                lines: [
                    { speaker: "User", text: "If the smart oven ___, it shuts down, right?", options: ["overheats", "overheated"], a: "overheats" },
                    { speaker: "User", text: "If the sensors ___ properly, I wouldn't have burned dinner.", options: ["had worked", "work"], a: "had worked" },
                    { speaker: "Tech", text: "___ of the failure, we need to replace the hardware.", options: ["As a result", "Nevertheless"], a: "As a result" },
                    { speaker: "Tech", text: "___, it is a necessary investment.", options: ["However", "Consequently"], a: "However" },
                    { speaker: "User", text: "If I ___ the cheaper model, would I have this problem?", options: ["had bought", "buy"], a: "had bought" }
                ]
            },
            {
                title: "AI in Medicine",
                lines: [
                    { speaker: "Asst", text: "The machine learning ___ more accurate with data.", options: ["will become", "became"], a: "will become" },
                    { speaker: "Doc", text: "___, it will help us diagnose diseases.", options: ["Furthermore", "On the other hand"], a: "Furthermore" },
                    { speaker: "Asst", text: "If you ___ the head, would you replace nurses?", options: ["were", "are"], a: "were" },
                    { speaker: "Doc", text: "No. Robots automate tasks; ___, they lack comfort.", options: ["nevertheless", "consequently"], a: "nevertheless" },
                    { speaker: "Asst", text: "If researchers ___ this gene, we wouldn't be here.", options: ["hadn't discovered", "haven't discovered"], a: "hadn't discovered" }
                ]
            },
            {
                title: "Virtual Reality Training",
                lines: [
                    { speaker: "Manager", text: "If workers ___ VR, accidents will decrease.", options: ["use", "used"], a: "use" },
                    { speaker: "Trainer", text: "___, it reduces the cost of materials.", options: ["Moreover", "However"], a: "Moreover" },
                    { speaker: "Manager", text: "If we ___ this last year, we would have saved money.", options: ["had implemented", "implemented"], a: "had implemented" },
                    { speaker: "Trainer", text: "___, the team is much more confident.", options: ["Consequently", "Nevertheless"], a: "Consequently" },
                    { speaker: "Manager", text: "___ the hardware breaks during the session?", options: ["What if", "Suppose"], a: "What if" }
                ]
            },
            {
                title: "Final Thoughts on Progress",
                lines: [
                    { speaker: "Student", text: "If robots ___ all manual jobs, what would people do?", options: ["took", "take"], a: "took" },
                    { speaker: "Teacher", text: "___, they would have more free time.", options: ["On the other hand", "In addition"], a: "On the other hand" },
                    { speaker: "Student", text: "___, would the economy stay stable?", options: ["However", "Consequently"], a: "However" },
                    { speaker: "Teacher", text: "If governments ___ correctly, they would implement income.", options: ["acted", "act"], a: "acted" },
                    { speaker: "Student", text: "If only I ___ more about economics!", options: ["knew", "had known"], a: "knew" }
                ]
            },
            {
                title: "AI in Education",
                lines: [
                    { speaker: "Teacher", text: "If we ___ AI tools, grading will be faster.", options: ["use", "used"], a: "use" },
                    { speaker: "Student", text: "___, won't teachers lose their personal touch?", options: ["However", "Therefore"], a: "However" },
                    { speaker: "Teacher", text: "Not if we ___ it as an assistant.", options: ["treat", "treated"], a: "treat" },
                    { speaker: "Student", text: "If I ___ the developer, I would focus on tutoring.", options: ["were", "am"], a: "were" },
                    { speaker: "Teacher", text: "That is a great idea. ___, personalized learning is key.", options: ["Furthermore", "But"], a: "Furthermore" }
                ]
            },
            {
                title: "Cybersecurity Risks",
                lines: [
                    { speaker: "User", text: "If I ___ my password, is my data safe?", options: ["change", "changed"], a: "change" },
                    { speaker: "Admin", text: "Yes, but if hackers ___ the firewall, it won't matter.", options: ["breach", "breached"], a: "breach" },
                    { speaker: "User", text: "If I ___ that earlier, I would have been careful.", options: ["had known", "knew"], a: "had known" },
                    { speaker: "Admin", text: "___, we installed a new protocol today.", options: ["However", "Therefore"], a: "However" },
                    { speaker: "User", text: "So ___ I update, I am safe?", options: ["that", "if"], a: "that" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER (10 ITEMS) ---
        12: [
            {
                title: "The Asimov Legacy",
                text: "Isaac Asimov devised the 'Three Laws of Robotics' to ensure AI benefits humanity. A robot must not harm a human. If a robot were to break these laws today, it would create a global crisis. If scientists hadn't considered these ethics decades ago, we wouldn't have modern safety protocols. Therefore, implementing guidelines is a vital necessity.",
                questions: [
                    { q: "What was the purpose of the Three Laws?", options: ["Ensure robots benefit humanity.", "Make robots expensive.", "Help robots cook."], a: "Ensure robots benefit humanity." },
                    { q: "What is a current challenge?", options: ["Translating laws to algorithms.", "Building hardware.", "Finding fossils."], a: "Translating laws to algorithms." },
                    { q: "What if scientists hadn't discussed ethics?", options: ["No safety foundation today.", "Robots would be human.", "DNA would change."], a: "No safety foundation today." },
                    { q: "What is the consequence of no regulation?", options: ["Unpredictable challenges.", "Cheaper systems.", "Extinction."], a: "Unpredictable challenges." },
                    { q: "What is the conclusion?", options: ["Guidelines are vital.", "Optional rules.", "Rocket science."], a: "Guidelines are vital." }
                ]
            },
            {
                title: "Economic Impact of Automation",
                text: "AI has evolved, leading to a new industrial revolution. If a company invests in hardware, productivity increases. However, job displacement is a challenge. If robots automate manual work, people might be laid off. On the other hand, it creates tech opportunities. If governments had acted sooner, the transition would have been smoother.",
                questions: [
                    { q: "What happens if a company invests?", options: ["Productivity increases.", "Data is lost.", "Extinction."], a: "Productivity increases." },
                    { q: "What is the social challenge?", options: ["Job displacement.", "Lack of biodiversity.", "Smartphone cost."], a: "Job displacement." },
                    { q: "How can workers survive?", options: ["Transition to tech roles.", "Ignore machines.", "Move to Brazil."], a: "Transition to tech roles." },
                    { q: "What is the regret?", options: ["Governments didn't act sooner.", "Buying robots.", "Sequencing DNA."], a: "Governments didn't act sooner." },
                    { q: "Why discuss economic balance?", options: ["Balance innovation and stability.", "Gasoline price.", "Robot emotions."], a: "Balance innovation and stability." }
                ]
            },
            {
                title: "Neural Networks in Medicine",
                text: "Neural networks analyze data to find patterns. If a doctor uses AI, diagnosis accuracy increases. Scientists believe if they hadn't developed machine learning, we wouldn't understand mutations. Moreover, AI allows personalized treatments. If we modify treatment based on DNA, success is higher. Privacy is key.",
                questions: [
                    { q: "What are neural networks?", options: ["Modeled on human brain.", "Computer hardware.", "DNA helix."], a: "Modeled on human brain." },
                    { q: "What is an advantage?", options: ["Increases diagnosis accuracy.", "Slower process.", "No doctors."], a: "Increases diagnosis accuracy." },
                    { q: "What if machine learning wasn't developed?", options: ["Less understanding of mutations.", "More fossils.", "Overheating."], a: "Less understanding of mutations." },
                    { q: "Why personalized treatment?", options: ["Higher success chance.", "Cheaper.", "Less data."], a: "Higher success chance." },
                    { q: "What is the warning?", options: ["Prioritize cybersecurity.", "Delete data.", "Data useless."], a: "Prioritize cybersecurity." }
                ]
            },
            {
                title: "Virtual Reality in Education",
                text: "VR is essential for education. If a student uses a headset, they explore worlds. This allows immersive learning. Furthermore, it is effective for dangerous training like surgery. In VR, if a mistake is made, nobody gets hurt. If schools had implemented this earlier, students would be better prepared. Equipment is expensive, so we need investment.",
                questions: [
                    { q: "How is VR used?", options: ["Essential for education.", "Cooking.", "Building planes."], a: "Essential for education." },
                    { q: "What is a Zero Conditional fact?", options: ["Use headset, explore worlds.", "Buy VR, get rich.", "Screen breaks, cry."], a: "Use headset, explore worlds." },
                    { q: "Why good for surgery?", options: ["No physical harm in mistakes.", "Faster.", "Less electricity."], a: "No physical harm in mistakes." },
                    { q: "What is the regret?", options: ["Schools didn't implement earlier.", "Too cheap.", "More history."], a: "Schools didn't implement earlier." },
                    { q: "What is a barrier?", options: ["Expensive equipment.", "Students dislike.", "No content."], a: "Expensive equipment." }
                ]
            },
            {
                title: "Ethical Data Use",
                text: "Ethical data use is vital. If data is biased, the result is unfair. This affects hiring. Moreover, privacy is key. If a company collects too much, it violates rights. If leaders had established guidelines earlier, we wouldn't have legal conflicts. Governments must regulate to protect society.",
                questions: [
                    { q: "What if data is biased?", options: ["Result is unfair.", "Overheats.", "Falls down."], a: "Result is unfair." },
                    { q: "What is a hiring risk?", options: ["Discrimination.", "Too fast.", "No hardware."], a: "Discrimination." },
                    { q: "What is the privacy concern?", options: ["Violating rights.", "Not enough data.", "Easy passwords."], a: "Violating rights." },
                    { q: "What is the regret?", options: ["No early guidelines.", "Used robots.", "Ignored internet."], a: "No early guidelines." },
                    { q: "What is needed?", options: ["Regulation and transparency.", "Social media.", "Algorithms."], a: "Regulation and transparency." }
                ]
            },
            {
                title: "GreenFuture Tech",
                text: "Innovation should benefit the planet. If a factory uses renewable energy, carbon footprint decreases. Furthermore, recycling is common. If we don't reduce waste, resources will run out. If we had discovered efficient solar cells earlier, we would rely less on oil. Investing in wind power helps the economy. Therefore, analyze environmental impact.",
                questions: [
                    { q: "What is GreenFuture's goal?", options: ["Sustainability.", "Oil.", "Fast robots."], a: "Sustainability." },
                    { q: "What happens if renewable energy is used?", options: ["Carbon footprint decreases.", "Lose money.", "Factory closes."], a: "Carbon footprint decreases." },
                    { q: "Why reduce waste?", options: ["Resources will run out.", "Reinvent wheel.", "CPU speed."], a: "Resources will run out." },
                    { q: "What if solar cells were found earlier?", options: ["Less reliance on oil.", "More phones.", "Bigger basin."], a: "Less reliance on oil." },
                    { q: "What is the condition for clean future?", options: ["Invest in green energy.", "Stop innovation.", "Robots take jobs."], a: "Invest in green energy." }
                ]
            },
            {
                title: "Robotics in Practice",
                text: "Suppose you had a robot; most would ask for help with chores. However, we must consider the Three Laws. If a human orders danger, the robot must refuse. If developers hadn't followed principles, accidents would have happened. Moreover, we train machines in human context. If a robot doesn't understand, it acts incorrectly.",
                questions: [
                    { q: "What would people use robots for?", options: ["Chores.", "Video games.", "DNA."], a: "Chores." },
                    { q: "What must a robot do if ordered danger?", options: ["Refuse.", "Obey.", "Shut down."], a: "Refuse." },
                    { q: "What if principles weren't followed?", options: ["Accidents would happen.", "Success.", "Digital native."], a: "Accidents would happen." },
                    { q: "Why train in human context?", options: ["Avoid incorrect actions.", "Cook pasta.", "Speak French."], a: "Avoid incorrect actions." },
                    { q: "What does science require?", options: ["Hardware and ethics.", "Only hardware.", "Fewer laws."], a: "Hardware and ethics." }
                ]
            },
            {
                title: "Machine Learning Potential",
                text: "Machine learning allows computers to learn from experience. If we provide data, it recognizes patterns. This predicts weather and markets. If data is incorrect, it fails. If scientists had known about this in 1900, tech would be different. We focus on hardware now. If we improve, we will achieve the impossible.",
                questions: [
                    { q: "What does machine learning do?", options: ["Learns from experience.", "Sleeps.", "Ignores orders."], a: "Learns from experience." },
                    { q: "What happens with enough data?", options: ["Recognizes patterns.", "Turns off.", "Rains."], a: "Recognizes patterns." },
                    { q: "What if data is incorrect?", options: ["Failure.", "Efficiency.", "Fossil discovery."], a: "Failure." },
                    { q: "What is the regret?", options: ["Scientists didn't know earlier.", "Steam engines.", "Moved to Japan."], a: "Scientists didn't know earlier." },
                    { q: "What is the future perspective?", options: ["Achieve the impossible.", "Dangerous.", "Useless."], a: "Achieve the impossible." }
                ]
            },
            {
                title: "The Smart Grid",
                text: "Smart grids use AI to manage electricity. If demand rises, the grid adjusts supply automatically. This prevents blackouts. If cities hadn't adopted this, power failures would be frequent. Moreover, it integrates solar energy. Consequently, it is greener.",
                questions: [
                    { q: "What manages electricity?", options: ["Smart grids with AI.", "Robots.", "Manual labor."], a: "Smart grids with AI." },
                    { q: "What happens if demand rises?", options: ["Grid adjusts supply.", "Blackout.", "Fire."], a: "Grid adjusts supply." },
                    { q: "What if cities hadn't adopted it?", options: ["Frequent failures.", "Cheaper power.", "Nothing."], a: "Frequent failures." },
                    { q: "What does it integrate?", options: ["Solar energy.", "Coal.", "Oil."], a: "Solar energy." },
                    { q: "What is the result?", options: ["It is greener.", "More expensive.", "Slower."], a: "It is greener." }
                ]
            },
            {
                title: "Autonomous Vehicles",
                text: "Self-driving cars are coming. If a car detects a pedestrian, it stops. This technology relies on sensors. If engineers hadn't improved the sensors, the cars wouldn't be safe. However, there are ethical dilemmas. If an accident is inevitable, how does the car choose? We need laws for this.",
                questions: [
                    { q: "What happens if a car sees a pedestrian?", options: ["It stops.", "Speeds up.", "Honks."], a: "It stops." },
                    { q: "What does it rely on?", options: ["Sensors.", "Gas.", "Wind."], a: "Sensors." },
                    { q: "What if sensors weren't improved?", options: ["Not safe.", "Faster.", "Cheaper."], a: "Not safe." },
                    { q: "What is the problem?", options: ["Ethical dilemmas.", "Color.", "Sound."], a: "Ethical dilemmas." },
                    { q: "What do we need?", options: ["Laws.", "More cars.", "Less roads."], a: "Laws." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER CONTEXT (10 ITEMS) ---
        13: [
            {
                title: "The Automation Dilemma",
                audio: "If a modern factory implements automation, its efficiency increases instantly. However, this progress often comes with a human cost. If robots automate every manual task, many workers will lose their jobs. On the other hand, if we train these workers now, they will operate the new systems. If governments had established better labor laws in the 1990s, we wouldn't have faced such an unfair transition today. Nevertheless, innovation is inevitable. We must focus on human resources so that technology benefits everyone.",
                questions: [
                    { q: "What is a Zero Conditional fact about automation?", options: ["Efficiency increases instantly.", "Workers lose jobs.", "Robots sleep."], a: "Efficiency increases instantly." },
                    { q: "What is the First Conditional prediction?", options: ["Workers will lose jobs.", "Robots will become human.", "Factories will close."], a: "Workers will lose jobs." },
                    { q: "What is the Third Conditional regret?", options: ["If laws had been established, transition would be smoother.", "If robots were cheaper.", "If we had trained AI."], a: "If laws had been established, transition would be smoother." },
                    { q: "Which linking word introduces a positive view?", options: ["On the other hand.", "However.", "Consequently."], a: "On the other hand." },
                    { q: "What is the goal of focusing on resources?", options: ["Technology benefits everyone.", "To stop innovation.", "To build more factories."], a: "Technology benefits everyone." }
                ]
            },
            {
                title: "Ethical Algorithms",
                audio: "Suppose you were a developer. If you designed an algorithm today, would you prioritize profit or safety? Currently, algorithms maximize engagement. However, if an algorithm prioritizes clicks over truth, it will spread fake news. If developers had considered ethics at the beginning, we would have avoided many conflicts. Furthermore, we need to regulate advancements. Consequently, we are seeing a movement for transparency so that our digital environment remains safe.",
                questions: [
                    { q: "What is the hypothetical question asked?", options: ["Would you prioritize profit or safety?", "Are you a robot?", "Is code hard?"], a: "Would you prioritize profit or safety?" },
                    { q: "What happens if an algorithm prioritizes clicks?", options: ["It will spread fake news.", "It will save money.", "It will stop working."], a: "It will spread fake news." },
                    { q: "What is the regret about the past?", options: ["If ethics had been considered, conflicts would be avoided.", "If we had faster internet.", "If computers were cheaper."], a: "If ethics had been considered, conflicts would be avoided." },
                    { q: "Which linking word adds a new point?", options: ["Furthermore.", "However.", "If."], a: "Furthermore." },
                    { q: "What is the purpose of transparency?", options: ["To keep the environment safe.", "To make money.", "To learn coding."], a: "To keep the environment safe." }
                ]
            },
            {
                title: "The Smart Home Experiment",
                audio: "If a smart system detects smoke, it activates sprinklers. Last winter, Albert tested an AI companion. If the robot hadn't malfunctioned, it would have kept the temperature stable. Unfortunately, it failed. Albert realized that if he had updated the software, he would have prevented the damage. Nevertheless, he is optimistic. He believes that if he invests in high-quality hardware, the system will run perfectly. In addition, he plans to install a neural network.",
                questions: [
                    { q: "What happens if smoke is detected?", options: ["Sprinklers activate.", "The house burns.", "The robot sleeps."], a: "Sprinklers activate." },
                    { q: "What happened because the robot malfunctioned?", options: ["Temperature wasn't stable.", "It cooked dinner.", "It cleaned the room."], a: "Temperature wasn't stable." },
                    { q: "What was Albert's regret?", options: ["He should have updated the software.", "He should have moved.", "He should have bought a dog."], a: "He should have updated the software." },
                    { q: "What is the plan if he invests in hardware?", options: ["The system will run perfectly.", "It will break again.", "It will cost less."], a: "The system will run perfectly." },
                    { q: "What linking word introduces the neural network plan?", options: ["In addition.", "However.", "If."], a: "In addition." }
                ]
            },
            {
                title: "The Future of Robotics",
                audio: "If a robot falls down, it must stand up independently. If robots continue to improve, they will take over dangerous jobs. If I were an engineer, I would focus on the Three Laws of Robotics. We must remember that if researchers hadn't focused on machine learning, we wouldn't have achieved this automation. Moreover, we need to consider ethical impact. Consequently, advancement must be regulated so that we don't lose control.",
                questions: [
                    { q: "What must a robot do if it falls?", options: ["Stand up independently.", "Call for help.", "Shut down."], a: "Stand up independently." },
                    { q: "What will happen if robots improve?", options: ["They will take dangerous jobs.", "They will eat food.", "They will sleep."], a: "They will take dangerous jobs." },
                    { q: "What would the speaker do as an engineer?", options: ["Focus on the Three Laws.", "Build a car.", "Stop coding."], a: "Focus on the Three Laws." },
                    { q: "What enabled today's automation?", options: ["Focus on machine learning.", "Cheap metal.", "Accidents."], a: "Focus on machine learning." },
                    { q: "Why must advancement be regulated?", options: ["So we don't lose control.", "To make it slower.", "To save money."], a: "So we don't lose control." }
                ]
            },
            {
                title: "AI in Medical Diagnosis",
                audio: "If a neural network analyzes an image, it identifies patterns fast. However, if AI replaces human judgment, will patients feel cared for? On the other hand, if we use AI as a tool, we will save lives. If scientists hadn't discovered how to train models with data, we wouldn't have understood genetic mutations. Furthermore, we must protect privacy. Nevertheless, science is inevitable, and we must adapt.",
                questions: [
                    { q: "What is the advantage of neural networks?", options: ["Identify patterns fast.", "They are cheap.", "They have emotions."], a: "Identify patterns fast." },
                    { q: "What is the concern about AI replacement?", options: ["Patients might not feel cared for.", "It is too expensive.", "It is too slow."], a: "Patients might not feel cared for." },
                    { q: "What is the benefit of using AI as a tool?", options: ["Saving lives.", "Playing games.", "Writing emails."], a: "Saving lives." },
                    { q: "What enabled understanding of mutations?", options: ["Training models with data.", "Better microscopes.", "Luck."], a: "Training models with data." },
                    { q: "What is the warning about privacy?", options: ["We must protect it.", "It doesn't matter.", "Share it online."], a: "We must protect it." }
                ]
            },
            {
                title: "Space Exploration",
                audio: "If a rocket reaches high temperatures, the cooling system starts. If we send robots to Mars in 2030, we will discover if life existed. If I had a chance to travel to space, I would go. If early explorers hadn't been brave, we wouldn't have reached the moon. Moreover, we need software to control missions. Consequently, researchers focus on autonomous algorithms so that robots can make decisions.",
                questions: [
                    { q: "When does the cooling system start?", options: ["If temperature is high.", "If it rains.", "If it stops."], a: "If temperature is high." },
                    { q: "What is the goal for 2030?", options: ["Discover if life existed on Mars.", "Build a hotel.", "Fly to the sun."], a: "Discover if life existed on Mars." },
                    { q: "What would the speaker do?", options: ["Go to space.", "Stay home.", "Buy a telescope."], a: "Go to space." },
                    { q: "What enabled the moon landing?", options: ["Bravery of explorers.", "Better food.", "Luck."], a: "Bravery of explorers." },
                    { q: "Why focus on autonomous algorithms?", options: ["So robots make decisions.", "To save battery.", "To take photos."], a: "So robots make decisions." }
                ]
            },
            {
                title: "The Virtual Classroom",
                audio: "If you wear a VR headset, you enter a different world. If this technology improves, students will have global access. If I were the principal, I would implement VR in labs. However, it is expensive. Nevertheless, it is a good investment. If we hadn't used simulations during the pandemic, we would have lost study time. Besides being effective, it motivates students. Therefore, we must explore it.",
                questions: [
                    { q: "What happens with a VR headset?", options: ["Enter a different world.", "Get a headache.", "Sleep."], a: "Enter a different world." },
                    { q: "What will happen if tech improves?", options: ["Students have global access.", "Schools close.", "Books disappear."], a: "Students have global access." },
                    { q: "What would the speaker do as principal?", options: ["Implement VR in labs.", "Cancel class.", "Buy computers."], a: "Implement VR in labs." },
                    { q: "What saved study time during the pandemic?", options: ["Virtual simulations.", "Books.", "Radio."], a: "Virtual simulations." },
                    { q: "What is the conclusion?", options: ["We must explore it.", "It is too hard.", "Stop using it."], a: "We must explore it." }
                ]
            },
            {
                title: "Cybersecurity and Trust",
                audio: "If a system is secure, the user feels safe. If you share data online, you face risks. If I knew how to code perfectly, I would build a wall against hackers. On the other hand, technology is vulnerable. If hackers hadn't attacked that company, they wouldn't have realized the weakness. Furthermore, we need to talk about safety. Consequently, the school is launching a campaign so that everyone understands the laws.",
                questions: [
                    { q: "When does a user feel safe?", options: ["If the system is secure.", "If they have no data.", "If it is offline."], a: "If the system is secure." },
                    { q: "What happens if you share data?", options: ["You face risks.", "You get money.", "You become famous."], a: "You face risks." },
                    { q: "What would the speaker do if they could code?", options: ["Build a wall against hackers.", "Make a game.", "Delete files."], a: "Build a wall against hackers." },
                    { q: "What did the attack reveal?", options: ["Hardware weakness.", "New games.", "Faster internet."], a: "Hardware weakness." },
                    { q: "What is the school doing?", options: ["Launching a campaign.", "Closing down.", "Buying robots."], a: "Launching a campaign." }
                ]
            },
            {
                title: "The Autonomous Vehicle",
                audio: "Self-driving cars are the future. If a car detects a pedestrian, it stops immediately. If we had implemented this technology ten years ago, we would have saved many lives on the road. However, ethical questions remain. If an accident is inevitable, how does the algorithm choose? If I were a lawmaker, I would focus on these rules. Therefore, we need public debate before these cars are everywhere.",
                questions: [
                    { q: "What does the car do if it sees a pedestrian?", options: ["Stops immediately.", "Speeds up.", "Honks."], a: "Stops immediately." },
                    { q: "What is the regret about the past?", options: ["We could have saved lives.", "Cars were cheaper.", "Roads were better."], a: "We could have saved lives." },
                    { q: "What is the remaining problem?", options: ["Ethical questions.", "Battery life.", "Color of cars."], a: "Ethical questions." },
                    { q: "What would the speaker do as a lawmaker?", options: ["Focus on rules.", "Ban cars.", "Buy a Tesla."], a: "Focus on rules." },
                    { q: "What is needed before cars are everywhere?", options: ["Public debate.", "More gas stations.", "Less traffic."], a: "Public debate." }
                ]
            },
            {
                title: "The Universal Translator",
                audio: "Language barriers are disappearing. If you use this app, it translates speech instantly. If I spoke every language, I wouldn't need it. However, I don't. If developers hadn't collected massive voice data, this tool wouldn't exist. Moreover, it learns from accents. Consequently, communication becomes seamless. If we continue to improve this AI, we will understand anyone, anywhere in the world.",
                questions: [
                    { q: "What does the app do?", options: ["Translates speech instantly.", "Plays music.", "Writes books."], a: "Translates speech instantly." },
                    { q: "Why does the speaker need it?", options: ["They don't speak every language.", "They are lazy.", "They are a robot."], a: "They don't speak every language." },
                    { q: "What enabled this tool?", options: ["Collecting massive voice data.", "A dictionary.", "A fast CPU."], a: "Collecting massive voice data." },
                    { q: "What does the app learn from?", options: ["Accents.", "Pictures.", "Weather."], a: "Accents." },
                    { q: "What is the future goal?", options: ["Understand anyone anywhere.", "Learn one language.", "Stop talking."], a: "Understand anyone anywhere." }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT (10 ITEMS) ---
        14: [
            {
                title: "The Automation Dilemma",
                text: "If a factory [1] (uses / used) automation, efficiency [2] (increases / increased) instantly. If robots [3] (automate / automated) every task, workers [4] (will lose / lost) jobs. If we [5] (train / trained) them, they will operate the systems.",
                answers: ["uses", "increases", "automate", "will lose", "train"]
            },
            {
                title: "Ethical Algorithms",
                text: "Suppose you [1] (were / are) a developer. If you [2] (designed / design) an algorithm, [3] (would / will) you prioritize safety? If it [4] (prioritizes / prioritized) clicks, it [5] (will spread / spreads) fake news.",
                answers: ["were", "designed", "would", "prioritizes", "will spread"]
            },
            {
                title: "Smart Home Experiment",
                text: "If a system [1] (detects / detected) smoke, it activates. If the robot [2] (hadn't malfunctioned / didn't malfunction), it [3] (would have kept / will keep) the temperature. Albert realized if he [4] (had updated / updated), he [5] (would have prevented / will prevent) damage.",
                answers: ["detects", "hadn't malfunctioned", "would have kept", "had updated", "would have prevented"]
            },
            {
                title: "Future of Robotics",
                text: "If a robot [1] (falls / fell), it [2] (must / would) stand up. If I [3] (were / am) an engineer, I [4] (would focus / will focus) on safety. If we [5] (hadn't focused / didn't focus) on ML, we wouldn't be here.",
                answers: ["falls", "must", "were", "would focus", "hadn't focused"]
            },
            {
                title: "AI in Medicine",
                text: "If a network [1] (analyzes / analyzed) images, it [2] (identifies / identified) patterns. If AI [3] (replaces / replaced) doctors, [4] (will / would) patients feel safe? If we [5] (hadn't developed / didn't develop) ML, we wouldn't understand.",
                answers: ["analyzes", "identifies", "replaces", "will", "hadn't developed"]
            },
            {
                title: "Space Exploration",
                text: "If a rocket [1] (reaches / reached) high heat, cooling [2] (starts / started). If we [3] (send / sent) robots, we [4] (will discover / would discover) life. If early explorers [5] (hadn't been / weren't) brave, we wouldn't have reached the moon.",
                answers: ["reaches", "starts", "send", "will discover", "hadn't been"]
            },
            {
                title: "Virtual Classroom",
                text: "If you [1] (wear / wore) a headset, you [2] (enter / entered) a world. If tech [3] (improves / improved), students [4] (will have / had) access. If I [5] (were / am) principal, I would implement VR.",
                answers: ["wear", "enter", "improves", "will have", "were"]
            },
            {
                title: "Cybersecurity",
                text: "If a system [1] (is / was) secure, users [2] (feel / felt) safe. If I [3] (knew / know) code, I [4] (would build / will build) a wall. If hackers [5] (hadn't attacked / didn't attack), we wouldn't have known.",
                answers: ["is", "feel", "knew", "would build", "hadn't attacked"]
            },
            {
                title: "Smart Grid",
                text: "If demand [1] (rises / rose), the grid [2] (adjusts / adjusted). If we [3] (hadn't adopted / didn't adopt) it, failures [4] (would be / will be) frequent. [5] (Moreover / However), it is green.",
                answers: ["rises", "adjusts", "hadn't adopted", "would be", "Moreover"]
            },
            {
                title: "Autonomous Cars",
                text: "If a car [1] (detects / detected) a person, it [2] (stops / stopped). If engineers [3] (hadn't improved / didn't improve) sensors, it [4] (wouldn't be / won't be) safe. [5] (However / Therefore), dilemmas exist.",
                answers: ["detects", "stops", "hadn't improved", "wouldn't be", "However"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 ITEMS) ---
        15: [
            {
                title: "Text 1",
                audio: "If you turn on the power, the robot starts moving. If AI develops further, it will automate every job. Everything is going to be different.",
                text: "If you [1] on the power, the robot [2] moving. If AI [3] further, it [4] automate every job. Everything is [5] to be different.",
                answers: ["turn", "starts", "develops", "will", "going"]
            },
            {
                title: "Text 2",
                audio: "If I were a developer, I would create a companion. However, it might be dangerous. We must improve our laws for safety.",
                text: "If I [1] a developer, I [2] create a companion. However, it [3] be dangerous. We [4] improve our [5] for safety.",
                answers: ["were", "would", "might", "must", "laws"]
            },
            {
                title: "Text 3",
                audio: "If they had used the algorithm, they would have succeeded. Consequently, the project failed due to a hardware error.",
                text: "If they [1] used the algorithm, they [2] have succeeded. [3], the project failed [4] to a hardware [5].",
                answers: ["had", "would", "Consequently", "due", "error"]
            },
            {
                title: "Text 4",
                audio: "The factory uses virtual reality to train workers. Moreover, it is very safe. As a result, the accidents have decreased.",
                text: "The factory uses [1] reality to [2] workers. [3], it is very [4]. As a result, the [5] have decreased.",
                answers: ["virtual", "train", "Moreover", "safe", "accidents"]
            },
            {
                title: "Text 5",
                audio: "If the CPU overheats, the hardware stops. Therefore, we need a cooling system. It has to be implemented now.",
                text: "If the CPU [1], the hardware [2]. [3], we need a cooling [4]. It has to be [5] now.",
                answers: ["overheats", "stops", "Therefore", "system", "implemented"]
            },
            {
                title: "Text 6",
                audio: "We train the AI so that it can solve problems. Furthermore, it is highly efficient. It is a perfect example of innovation.",
                text: "We train the AI [1] that it [2] solve problems. [3], it is [4] efficient. It is a perfect [5] of innovation.",
                answers: ["so", "can", "Furthermore", "highly", "example"]
            },
            {
                title: "Text 7",
                audio: "If I had more data, I would find a solution. Nevertheless, the hardware is expensive. We need to invest more.",
                text: "If I [1] more data, I [2] find a solution. [3], the hardware is [4]. We need to [5] more.",
                answers: ["had", "would", "Nevertheless", "expensive", "invest"]
            },
            {
                title: "Text 8",
                audio: "If only I had known about the advancement earlier! I would have invested. Now, I must be more careful.",
                text: "If only I [1] known about the [2] earlier! I [3] have invested. Now, I must be [4] [5].",
                answers: ["had", "advancement", "would", "more", "careful"]
            },
            {
                title: "Text 9",
                audio: "If we don't regulate AI, society faces risks. On the other hand, it brings benefits. We must find balance.",
                text: "If we don't [1] AI, society faces [2]. On the other [3], it brings [4]. We must find [5].",
                answers: ["regulate", "risks", "hand", "benefits", "balance"]
            },
            {
                title: "Text 10",
                audio: "If scientists hadn't invented the internet, the world would be slower. We rely on data. Privacy is key.",
                text: "If scientists [1] invented the internet, the world [2] be slower. We rely on [3]. [4] is [5].",
                answers: ["hadn't", "would", "data", "Privacy", "key"]
            }
        ]
    }
});