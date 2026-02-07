/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */

window.initExercise({
    id: "9-1-1",
    grade: "9th Grade",
    bimester: "1",
    chapter: "1",
    title: "Technology and Inventions",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES ---
        1: [
            { words: ["they", "had", "dreamed", "of", "flying", "before", "they", "invented", "the", "airplane"], correct: "Before they invented the airplane they had dreamed of flying" },
            { words: ["long", "how", "have", "you", "been", "studying", "inventions"], correct: "How long have you been studying inventions" },
            { words: ["Graham Bell", "had", "worked", "on", "the", "telephone", "for", "years"], correct: "Graham Bell had worked on the telephone for years" },
            { words: ["technology", "has", "been", "changing", "so", "fast", "lately"], correct: "Technology has been changing so fast lately" },
            { words: ["been", "reading", "I", "have", "about", "creators", "all", "morning"], correct: "I have been reading about creators all morning" },
            { words: ["already", "the", "error", "discovered", "had", "scientists", "the"], correct: "The scientists had already discovered the error" },
            { words: ["moment", "he", "had", "a", "lightbulb", "when", "saw", "the", "code"], correct: "He had a lightbulb moment when he saw the code" },
            { words: ["have", "coding", "since", "been", "9 AM", "we"], correct: "We have been coding since 9 AM" },
            { words: ["seen", "have", "the", "robot", "new", "exhibit", "you"], correct: "Have you seen the new robot exhibit" },
            { words: ["reinvent", "don't", "the", "wheel", "use", "existing", "tools"], correct: "Don't reinvent the wheel just use existing tools" },
            { words: ["arrived", "before", "had", "the", "machine", "she", "broken"], correct: "The machine had broken before she arrived" },
            { words: ["working", "they", "been", "have", "on", "the", "blueprint", "all", "week"], correct: "They have been working on the blueprint all week" },
            { words: ["time", "Da Vinci", "was", "ahead", "of", "his"], correct: "Da Vinci was ahead of his time" },
            { words: ["had", "they", "built", "the", "robot", "before", "the", "presentation"], correct: "They had built the robot before the presentation" },
            { words: ["been", "developing", "has", "she", "software", "for", "months"], correct: "She has been developing software for months" },
            { words: ["rocket", "science", "it", "not", "is", "to", "computer", "use", "a"], correct: "It is not rocket science to use a computer" },
            { words: ["forgotten", "had", "I", "to", "save", "the", "file"], correct: "I had forgotten to save the file" },
            { words: ["since", "have", "studying", "AI", "they", "been", "2020"], correct: "They have been studying AI since 2020" },
            { words: ["Wright Brothers", "the", "airplane", "the", "flew", "in", "1903"], correct: "The Wright Brothers flew the airplane in 1903" },
            { words: ["successful", "had", "he", "tried", "many", "times", "before", "he", "was"], correct: "He had tried many times before he was successful" },
            { words: ["looking", "how", "long", "have", "you", "been", "for", "the", "tool"], correct: "How long have you been looking for the tool" },
            { words: ["had", "they", "left", "when", "the", "electricity", "went", "out"], correct: "They had left when the electricity went out" },
            { words: ["raining", "has", "it", "been", "since", "morning"], correct: "It has been raining since morning" },
            { words: ["creator", "the", "had", "finished", "project", "the"], correct: "The creator had finished the project" },
            { words: ["all", "she", "been", "has", "researching", "a", "cure", "day"], correct: "She has been researching a cure all day" },
            { words: ["discovered", "he", "had", "the", "answer", "before", "class"], correct: "He had discovered the answer before class" },
            { words: ["playing", "how", "long", "have", "you", "been", "this", "game"], correct: "How long have you been playing this game" },
            { words: ["already", "the", "movie", "started", "had", "when", "I", "arrived"], correct: "The movie had already started when I arrived" },
            { words: ["been", "driving", "he", "has", "for", "hours"], correct: "He has been driving for hours" },
            { words: ["written", "she", "had", "the", "code", "before", "the", "computer", "crashed"], correct: "She had written the code before the computer crashed" },
            { words: ["innovation", "have", "following", "been", "we", "latest", "the"], correct: "We have been following the latest innovation" },
            { words: ["seen", "movie", "had", "that", "they", "before"], correct: "They had seen that movie before" },
            { words: ["working", "has", "the", "equipment", "been", "well"], correct: "Has the equipment been working well" },
            { words: ["had", "she", "eaten", "dinner", "by", "8 PM"], correct: "She had eaten dinner by 8 PM" },
            { words: ["waiting", "we", "have", "been", "all", "day", "for", "the", "robot"], correct: "We have been waiting all day for the robot" },
            { words: ["electricity", "had", "people", "discovered", "before", "they", "invented", "gadgets"], correct: "People had discovered electricity before they invented gadgets" },
            { words: ["long", "how", "has", "she", "been", "creating", "the", "app"], correct: "How long has she been creating the app" },
            { words: ["had", "begun", "the", "class", "before", "the", "bell", "rang"], correct: "The class had begun before the bell rang" },
            { words: ["been", "using", "software", "have", "you", "this", "since", "June"], correct: "You have been using this software since June" },
            { words: ["had", "they", "built", "the", "city", "before", "the", "war"], correct: "They had built the city before the war" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES ---
        2: [
            { lines: ["Technology has been changing so fast.", "Wow, look at this old airplane!", "True. Before they invented it, people had dreamed of flying for centuries.", "The Wright Brothers flew it in 1903."], order: [1, 3, 0, 2] },
            { lines: ["I have been reading about him.", "Alexander Graham Bell invented the telephone.", "He had worked on it for years before it worked.", "Innovation never stops!"], order: [1, 0, 2, 3] },
            { lines: ["I had already finished half of it when my computer crashed.", "Have you finished your science project?", "Oh no! That is terrible.", "I have been working on it all day."], order: [1, 0, 2, 3] },
            { lines: ["The movie had already started.", "I am so sorry. I had missed the bus.", "Why were you late for the cinema?", "That's okay, but you missed the best part."], order: [2, 1, 0, 3] },
            { lines: ["I have been studying since 8 AM.", "You look very tired, Celine.", "How long have you been studying?", "I have been reading about the Industrial Revolution."], order: [1, 2, 0, 3] },
            { lines: ["It's not rocket science. Just follow the manual.", "I can't understand how this machine works.", "I had tried that before I asked you.", "Let me help you with the code then."], order: [1, 0, 2, 3] },
            { lines: ["Da Vinci was really ahead of his time.", "Did you see the new blueprints in the museum?", "Yes, he had designed flying machines centuries ago.", "It's amazing how much he knew about science."], order: [1, 2, 0, 3] },
            { lines: ["No, it has been raining all day.", "I wish I had brought my umbrella.", "Did you go to the park today?", "I have been waiting for the sun since morning."], order: [2, 0, 3, 1] },
            { lines: ["I have been developing a new app for months.", "That is a great invention!", "What have you been doing lately?", "I hope it becomes successful."], order: [2, 0, 1, 3] },
            { lines: ["They had already discovered the error before they built it.", "Why did the robot stop working?", "It didn't stop. They turned it off.", "Oh, they were very careful then."], order: [1, 2, 0, 3] },
            { lines: ["I had forgotten to save the code.", "Why are you starting the program again?", "That is a common mistake.", "I have been writing it for two hours!"], order: [1, 0, 3, 2] },
            { lines: ["I had been waiting for twenty minutes when he finally arrived.", "Was he late for the meeting?", "Yes, he had lost his keys.", "At least he found them eventually."], order: [1, 2, 0, 3] },
            { lines: ["It was a real lightbulb moment for me.", "How did you solve the puzzle?", "I had been thinking about it all week.", "Then suddenly, I saw the answer."], order: [1, 2, 3, 0] },
            { lines: ["No, I have been using this one since 2010.", "Your laptop looks very old.", "You should buy a more modern one.", "I know, but it has all my software."], order: [1, 0, 2, 3] },
            { lines: ["They had already eaten when I called them.", "Were your parents at home for dinner?", "So they weren't hungry.", "No, they had gone to a restaurant."], order: [1, 3, 0, 2] },
            { lines: ["I have been researching this AI model for years.", "Do you think it will change the world?", "Yes, it has the potential to solve many problems.", "That is an amazing goal."], order: [0, 1, 2, 3] },
            { lines: ["The thief had already escaped.", "What happened when the police arrived?", "He had taken all the equipment.", "How did he get out so fast?"], order: [1, 0, 2, 3] },
            { lines: ["I have been waiting for you!", "I'm sorry. I had fallen asleep.", "Where were you?", "I had a very long day at work."], order: [2, 3, 0, 1] },
            { lines: ["Don't reinvent the wheel.", "I am trying to create a new way to send messages.", "But I want to make it better.", "Use the existing software; it is very good."], order: [1, 2, 0, 3] },
            { lines: ["I had seen that movie before, so I didn't watch it.", "Did you like the film last night?", "What did you do instead?", "I studied the universe on my computer."], order: [1, 0, 2, 3] },
            { lines: ["She had finished the project before the deadline.", "Was the teacher happy with her work?", "Yes, she had done an excellent job.", "She has been working very hard lately."], order: [0, 1, 2, 3] },
            { lines: ["No, it had stopped raining when we went out.", "Was the ground wet?", "Yes, it had been raining for hours.", "I'm glad you didn't get wet."], order: [1, 0, 2, 3] },
            { lines: ["How long has he been driving?", "He has been driving for six hours.", "He should stop and rest.", "He had planned to arrive by noon."], order: [0, 1, 3, 2] },
            { lines: ["I had already seen the robot exhibit.", "Why didn't you go with Albert?", "Did you like it?", "Yes, it was ahead of its time."], order: [1, 0, 2, 3] },
            { lines: ["I have been reading this book for two weeks.", "Is it about a time machine?", "Yes, a scientist had built one in the story.", "I want to read that next!"], order: [0, 1, 2, 3] },
            { lines: ["The train had already left.", "Were you on time for the trip?", "No, I had gotten to the station late.", "That is too bad."], order: [1, 2, 0, 3] },
            { lines: ["He had already discovered the cure.", "Why was the scientist so famous?", "He had been researching for decades.", "He changed the history of medicine."], order: [1, 2, 0, 3] },
            { lines: ["I have been using this app all day.", "Is it useful for your homework?", "Yes, it helps me translate languages.", "Technology is amazing."], order: [0, 1, 2, 3] },
            { lines: ["I had made a big mistake in the code.", "Why is the machine making that noise?", "Can you fix it now?", "Yes, I have been working on the solution."], order: [1, 0, 2, 3] },
            { lines: ["We had already finished lunch.", "Do you want some pizza?", "No, thank you.", "You should have come earlier!"], order: [1, 2, 0, 3] },
            { lines: ["I had broken my glasses.", "Why couldn't you see the screen?", "I have been waiting for new ones.", "Can you use your smartphone instead?"], order: [1, 0, 2, 3] },
            { lines: ["She has been working here since 2015.", "Is she a good engineer?", "Yes, she had built many machines before she joined us.", "She has a lot of experience."], order: [1, 2, 0, 3] },
            { lines: ["I had lived there for two years.", "Had you been to London before?", "Did you like the city?", "Yes, it was an incredible experience."], order: [1, 0, 2, 3] },
            { lines: ["I had already bought the tickets.", "Why didn't you tell me?", "I wanted to surprise you!", "Well, I am definitely surprised."], order: [1, 2, 0, 3] },
            { lines: ["It has been loading for ten minutes.", "Is the software ready?", "No, the internet is very slow.", "I had expected it to be faster."], order: [1, 2, 0, 3] },
            { lines: ["I had lost my way in the museum.", "Where were you? I couldn't find you.", "Did you see the airplane exhibit?", "No, I had left before I saw it."], order: [1, 0, 2, 3] },
            { lines: ["They had already won the game.", "Were they happy?", "Yes, they had been practicing all week.", "They deserved the victory."], order: [1, 2, 0, 3] },
            { lines: ["I have been listening to this song for an hour.", "Do you like it that much?", "Yes, I had never heard it before today.", "It is a very good song."], order: [0, 1, 2, 3] },
            { lines: ["He had built the robot by himself.", "Who helped the inventor?", "Wow, that is impressive.", "He had been studying mechanics for years."], order: [1, 0, 3, 2] },
            { lines: ["I had brought my charger, luckily.", "My phone is dead.", "Can I borrow yours?", "Yes, here it is."], order: [1, 2, 0, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS ---
        3: [
            { q: "Had they built the airplane before 1900?", options: ["No, they hadn't.", "No, they had build not.", "No, they had building.", "No, they wasn't."], a: "No, they hadn't." },
            { q: "Have you been working all day?", options: ["Yes, I have been.", "Yes, I having.", "Yes, I was been.", "Yes, I am been."], a: "Yes, I have been." },
            { q: "Had she already seen the exhibit?", options: ["Yes, she had.", "Yes, she already.", "Yes, she has did.", "Yes, she seen."], a: "Yes, she had." },
            { q: "Has it been raining since morning?", options: ["Yes, it has.", "Yes, it been has.", "Yes, it have been.", "Yes, its raining."], a: "Yes, it has." },
            { q: "Had you eaten before you left?", options: ["No, I hadn't.", "No, I wasn't.", "No, I hadn't ate.", "No, I haven't."], a: "No, I hadn't." },
            { q: "Have they been developing the app?", options: ["Yes, they have.", "Yes, they was.", "Yes, they has been.", "Yes, them are."], a: "Yes, they have." },
            { q: "Had the machine broken before?", options: ["Yes, it had.", "Yes, it broken.", "Yes, it has.", "Yes, it was did."], a: "Yes, it had." },
            { q: "Have you been reading that book?", options: ["No, I haven't.", "No, I'm not been.", "No, I wasn't been.", "No, I haven't been."], a: "No, I haven't." },
            { q: "Had he finished the code?", options: ["Yes, he had.", "Yes, he finish.", "Yes, he has.", "Yes, he was."], a: "Yes, he had." },
            { q: "Has she been researching for years?", options: ["Yes, she has.", "Yes, she been has.", "Yes, she is been.", "Yes, her has."], a: "Yes, she has." },
            { q: "Had the bell rung when you arrived?", options: ["Yes, it had.", "Yes, it rung.", "Yes, it was did.", "Yes, it has."], a: "Yes, it had." },
            { q: "Have we been waiting too long?", options: ["Yes, we have.", "Yes, us have.", "Yes, we were.", "Yes, we has."], a: "Yes, we have." },
            { q: "Had they discovered the error already?", options: ["No, they had not.", "No, they not had.", "No, they hadn't did.", "No, they wasn't."], a: "No, they had not." },
            { q: "Has he been driving for hours?", options: ["Yes, he has.", "Yes, he having.", "Yes, him has.", "Yes, he been."], a: "Yes, he has." },
            { q: "Had you seen the blueprints before?", options: ["No, I hadn't.", "No, I was not.", "No, I hadn't saw.", "No, I haven't."], a: "No, I hadn't." },
            { q: "Have the inventors been working hard?", options: ["Yes, they have.", "Yes, they was.", "Yes, they has.", "Yes, them have."], a: "Yes, they have." },
            { q: "Had she known the answer?", options: ["Yes, she had.", "Yes, she know.", "Yes, she has.", "Yes, her did."], a: "Yes, she had." },
            { q: "Has the software been loading?", options: ["Yes, it has.", "Yes, it was.", "Yes, its been.", "Yes, it been has."], a: "Yes, it has." },
            { q: "Had the bus left at 8 AM?", options: ["No, it hadn't.", "No, it was not.", "No, it didn't had.", "No, it wasn't."], a: "No, it hadn't." },
            { q: "Have you been using the new computer?", options: ["Yes, I have.", "Yes, I was.", "Yes, me have.", "Yes, I am been."], a: "Yes, I have." },
            { q: "How long has he been working?", options: ["He has been working since 9 AM.", "He had a blue car.", "He invented the sun.", "Yes, he is."], a: "He has been working since 9 AM." },
            { q: "Why was he so happy?", options: ["Because he had won the game.", "Because he is a machine.", "At 10 o'clock.", "No, he wasn't."], a: "Because he had won the game." },
            { q: "What has Celine been doing?", options: ["She has been reading about Graham Bell.", "She is a telephone.", "In 1903.", "Yes, she has."], a: "She has been reading about Graham Bell." },
            { q: "When did the airplane fly?", options: ["It flew in 1903.", "It had been raining books.", "Before the telephone was a robot.", "Yes, it did."], a: "It flew in 1903." },
            { q: "What is a lightbulb moment?", options: ["A sudden moment of inspiration.", "A very heavy piece of equipment.", "A type of ancient software.", "My name is Mr. D."], a: "A sudden moment of inspiration." },
            { q: "Why was the lab messy?", options: ["Because the equipment had broken.", "Because the robot was cooking pasta.", "All day.", "No, it isn't."], a: "Because the equipment had broken." },
            { q: "What have you been developing?", options: ["I have been developing a new app.", "I have been developing the Wright Brothers.", "Since yesterday morning.", "Yes, I have."], a: "I have been developing a new app." },
            { q: "Is it rocket science?", options: ["No, it's actually quite simple.", "Yes, it's a blue t-shirt.", "In the universe.", "Before he died."], a: "No, it's actually quite simple." },
            { q: "How long had they been experimenting?", options: ["They had been experimenting for years.", "They had been experimenting for 5 PM.", "They had been experimenting with the moon.", "No, they hadn't."], a: "They had been experimenting for years." },
            { q: "Who is the creator?", options: ["The person who invented the software.", "The machine on the desk.", "In the science museum.", "Yes, I am."], a: "The person who invented the software." },
            { q: "Why was she tired?", options: ["Because she had been studying all day.", "Because she is a blueprint.", "Since 2010.", "No, she wasn't."], a: "Because she had been studying all day." },
            { q: "What is a robot?", options: ["A machine capable of automatic actions.", "A person from 1903.", "A type of irregular verb.", "I have been waiting."], a: "A machine capable of automatic actions." },
            { q: "When did they see the robot?", options: ["They saw it after they had entered the museum.", "They saw it since two hours.", "They saw it in the code.", "Yes, they did."], a: "They saw it after they had entered the museum." },
            { q: "What does 'reinvent the wheel' mean?", options: ["To waste time doing something already done.", "To build a new car.", "To study the Industrial Revolution.", "No, thank you."], a: "To waste time doing something already done." },
            { q: "Why did the computer crash?", options: ["Because the software had an error.", "Because the mouse was hungry.", "At noon.", "Yes, it did."], a: "Because the software had an error." },
            { q: "How long have we been waiting?", options: ["We have been waiting for an hour.", "We have been waiting for the telephone.", "We have been waiting in 1879.", "No, we haven't."], a: "We have been waiting for an hour." },
            { q: "What had he done before 10 PM?", options: ["He had finished all his homework.", "He had been a robot.", "He had flown to the sun.", "Yes, he had."], a: "He had finished all his homework." },
            { q: "Is he ahead of his time?", options: ["Yes, his ideas are very advanced.", "No, he is behind the desk.", "At 8 o'clock.", "I have been reading."], a: "Yes, his ideas are very advanced." },
            { q: "What is a blueprint?", options: ["A technical drawing of a project.", "A blue book about history.", "A type of electric guitar.", "No, it isn't."], a: "A technical drawing of a project." },
            { q: "Why did she fail?", options: ["Because she hadn't studied enough.", "Because she is a machine.", "Since January.", "Yes, she did."], a: "Because she hadn't studied enough." }
        ],

        // --- TYPE 4: FIND MEANING ---
        4: [
            { sent: "Thomas Edison is the **creator** of many famous inventions.", word: "creator", options: ["Criador", "Vendedor", "Professor", "Estudante"], a: "Criador", def: "A person or thing that brings something into existence." },
            { sent: "They are developing new **AI models** for the computer.", word: "AI models", options: ["Modelos de IA", "Peças de metal", "Jogos de vídeo", "Cabos elétricos"], a: "Modelos de IA", def: "Artificial Intelligence programs designed to perform specific tasks." },
            { sent: "The engineer looked at the **blueprint** before building the machine.", word: "blueprint", options: ["Planta / Projeto", "Ferramenta", "Código", "Manual"], a: "Planta / Projeto", def: "A design plan or other technical drawing." },
            { sent: "He spent hours writing the **code** for the new app.", word: "code", options: ["Código", "Texto", "Desenho", "Livro"], a: "Código", def: "Program instructions written by a programmer." },
            { sent: "This laboratory has very expensive **equipment**.", word: "equipment", options: ["Equipamento", "Mobília", "Janelas", "Paredes"], a: "Equipamento", def: "The necessary items for a particular purpose." },
            { sent: "I had a **lightbulb moment** and solved the problem.", word: "lightbulb moment", options: ["Momento de inspiração", "Momento de raiva", "Momento de sono", "Momento de dúvida"], a: "Momento de inspiração", def: "A moment of sudden inspiration or realization." },
            { sent: "Don't **reinvent the wheel**; use the existing software.", word: "reinvent the wheel", options: ["Reinventar a roda", "Quebrar a máquina", "Comprar o produto", "Estudar o código"], a: "Reinventar a roda", def: "To waste time creating something that already exists." },
            { sent: "Da Vinci was truly **ahead of his time**.", word: "ahead of his time", options: ["À frente do seu tempo", "Atrasado", "Fora de moda", "No tempo certo"], a: "À frente do seu tempo", def: "Having ideas that are too advanced for the current period." },
            { sent: "Learning to use this app is not **rocket science**.", word: "rocket science", options: ["Não é bicho de sete cabeças", "É muito difícil", "É perigoso", "É chato"], a: "Não é bicho de sete cabeças", def: "Used to say that something is not difficult to do or understand." },
            { sent: "The **universe** is much bigger than we can imagine.", word: "universe", options: ["Universo", "Planeta", "Satélite", "Estrela"], a: "Universo", def: "All existing matter and space considered as a whole." },
            { sent: "The team has **been** working on the project since 2022.", word: "been", options: ["Estado/Sido", "Feito", "Ido", "Visto"], a: "Estado/Sido", def: "Past participle of the verb 'to be'." },
            { sent: "The scientist has **become** famous for his discovery.", word: "become", options: ["Tornado-se", "Começado", "Terminado", "Fugido"], a: "Tornado-se", def: "Past participle of the verb 'to become'." },
            { sent: "The robot has **begun** its first task.", word: "begun", options: ["Começado", "Parado", "Quebrado", "Terminado"], a: "Começado", def: "Past participle of the verb 'to begin'." },
            { sent: "They have **built** a very powerful machine.", word: "built", options: ["Construído", "Destruído", "Comprado", "Vendido"], a: "Construído", def: "Past participle of the verb 'to build'." },
            { sent: "She has **chosen** the best software for the task.", word: "chosen", options: ["Escolhido", "Criado", "Baixado", "Enviado"], a: "Escolhido", def: "Past participle of the verb 'to choose'." },
            { sent: "I have **done** all the research for the exam.", word: "done", options: ["Feito", "Visto", "Lido", "Escrito"], a: "Feito", def: "Past participle of the verb 'to do'." },
            { sent: "He has **driven** the new electric car.", word: "driven", options: ["Dirigido", "Pilotado", "Comprado", "Lavado"], a: "Dirigido", def: "Past participle of the verb 'to drive'." },
            { sent: "We had **found** the error before the test.", word: "found", options: ["Encontrado", "Criado", "Ignorado", "Perdido"], a: "Encontrado", def: "Past participle of the verb 'to find'." },
            { sent: "The airplane has **flown** across the ocean.", word: "flown", options: ["Voado", "Caído", "Corrido", "Nadado"], a: "Voado", def: "Past participle of the verb 'to fly'." },
            { sent: "I have **known** her for ten years.", word: "known", options: ["Conhecido", "Amado", "Visto", "Chamado"], a: "Conhecido", def: "Past participle of the verb 'to know'." },
            { sent: "He has **made** a very important discovery.", word: "made", options: ["Feito", "Lido", "Falado", "Pensado"], a: "Feito", def: "Past participle of the verb 'to make'." },
            { sent: "Have you **seen** the new robot exhibit?", word: "seen", options: ["Visto", "Ouvido", "Tocado", "Comprado"], a: "Visto", def: "Past participle of the verb 'to see'." },
            { sent: "She has **spoken** to the inventor.", word: "spoken", options: ["Falado", "Escrito", "Gritado", "Mentido"], a: "Falado", def: "Past participle of the verb 'to speak'." },
            { sent: "We have **spent** a lot of money on technology.", word: "spent", options: ["Gasto", "Ganho", "Guardado", "Achado"], a: "Gasto", def: "Past participle of the verb 'to spend'." },
            { sent: "He has **taken** the bus to the museum.", word: "taken", options: ["Pegado/Levado", "Dirigido", "Perdido", "Esperado"], a: "Pegado/Levado", def: "Past participle of the verb 'to take'." },
            { sent: "I have **written** a letter to the creator.", word: "written", options: ["Escrito", "Lido", "Enviado", "Rasgado"], a: "Escrito", def: "Past participle of the verb 'to write'." },
            { sent: "The machine has **broken** down again.", word: "broken", options: ["Quebrado", "Funcionando", "Parado", "Fugido"], a: "Quebrado", def: "Past participle of the verb 'to break'." },
            { sent: "He has been studying **since** 8 AM.", word: "since", options: ["Desde", "Por", "Durante", "Até"], a: "Desde", def: "Used to indicate a starting point in time." },
            { sent: "I have been working here **for** three years.", word: "for", options: ["Por", "Desde", "Durante", "No"], a: "Por", def: "Used to indicate a duration of time." },
            { sent: "It has been raining **all day**.", word: "all day", options: ["O dia todo", "Ontem", "Amanhã", "Hoje de manhã"], a: "O dia todo", def: "Throughout the entire day." },
            { sent: "I have been using this **software** for months.", word: "software", options: ["Software / Programa", "Hardware", "Teclado", "Mouse"], a: "Software / Programa", def: "The programs and information used by a computer." },
            { sent: "The **airplane** was a great invention in 1903.", word: "airplane", options: ["Avião", "Carro", "Trem", "Navio"], a: "Avião", def: "A powered flying vehicle with fixed wings." },
            { sent: "She has been waiting **all week** for the results.", word: "all week", options: ["A semana toda", "O dia todo", "Mês que vem", "Ano passado"], a: "A semana toda", def: "Throughout the entire week." },
            { sent: "**How long** have you been coding?", word: "how long", options: ["Há quanto tempo", "Onde", "Por que", "Quem"], a: "Há quanto tempo", def: "Used to ask about duration." },
            { sent: "The **machine** is making a strange noise.", word: "machine", options: ["Máquina", "Lâmpada", "Caneta", "Cadeira"], a: "Máquina", def: "An apparatus using mechanical power to perform a task." },
            { sent: "He has **brought** his laptop to school.", word: "brought", options: ["Trazido", "Levado", "Comprado", "Esquecido"], a: "Trazido", def: "Past participle of the verb 'to bring'." },
            { sent: "I have **given** him the instructions.", word: "given", options: ["Dado", "Tirado", "Falado", "Visto"], a: "Dado", def: "Past participle of the verb 'to give'." },
            { sent: "They have **sent** the blueprint to the factory.", word: "sent", options: ["Enviado", "Recebido", "Perdido", "Rasgado"], a: "Enviado", def: "Past participle of the verb 'to send'." },
            { sent: "She has **taught** science for twenty years.", word: "taught", options: ["Ensinado", "Estudado", "Lido", "Escrito"], a: "Ensinado", def: "Past participle of the verb 'to teach'." },
            { sent: "He has **won** the prize for the best invention.", word: "won", options: ["Vencido / Ganho", "Perdido", "Dado", "Vendido"], a: "Vencido / Ganho", def: "Past participle of the verb 'to win'." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE ---
        5: [
            { sent: "I have **being** working all morning.", correct: "been" },
            { sent: "She had **finish** the code before I arrived.", correct: "finished" },
            { sent: "They have been **study** AI for years.", correct: "studying" },
            { sent: "When I woke up, the sun **has** already risen.", correct: "had" },
            { sent: "He has been **research** a cure all day.", correct: "researching" },
            { sent: "We had **forgetten** to save the file.", correct: "forgotten" },
            { sent: "How long have you **being** waiting?", correct: "been" },
            { sent: "She has **teaching** English since 2010.", correct: "been teaching" },
            { sent: "They had **build** the robot before the deadline.", correct: "built" },
            { sent: "It has **being** raining all week.", correct: "been" },
            { sent: "I had **saw** the blueprint before.", correct: "seen" },
            { sent: "He **have** been coding since 9 AM.", correct: "has" },
            { sent: "We had already **discovery** the error.", correct: "discovered" },
            { sent: "She has **being** developing software for months.", correct: "been" },
            { sent: "By the time he arrived, I **have** already left.", correct: "had" },
            { sent: "How long **has** you been living here?", correct: "have" },
            { sent: "They had **went** to the museum before it closed.", correct: "gone" },
            { sent: "I have been **read** about inventors all night.", correct: "reading" },
            { sent: "She realized she **has** lost her keys earlier.", correct: "had" },
            { sent: "It had **stop** raining when we went out.", correct: "stopped" },
            { sent: "I have been **work** on this machine for days.", correct: "working" },
            { sent: "They had already **choose** the best option.", correct: "chosen" },
            { sent: "He has **being** driving for six hours.", correct: "been" },
            { sent: "Before the bell rang, the class **has** begun.", correct: "had" },
            { sent: "We have been **useing** this app lately.", correct: "using" },
            { sent: "I had already **wrote** the letter.", correct: "written" },
            { sent: "She has **being** waiting for the bus since 8:00.", correct: "been" },
            { sent: "They had **builded** a city.", correct: "built" },
            { sent: "He **have** been following the news all day.", correct: "has" },
            { sent: "I realized I had **did** a mistake.", correct: "made" },
            { sent: "She has **being** studying for three hours.", correct: "been" },
            { sent: "The sun had **setten** before we arrived.", correct: "set" },
            { sent: "We have been **wait** for the robot.", correct: "waiting" },
            { sent: "He had already **drank** all the water.", correct: "drunk" },
            { sent: "I have **being** listening to that song.", correct: "been" },
            { sent: "They had already **broke** the machine.", correct: "broken" },
            { sent: "She has **being** researching since January.", correct: "been" },
            { sent: "I had already **speaken** to him.", correct: "spoken" },
            { sent: "We have been **play** this game all week.", correct: "playing" },
            { sent: "He had **forget** the password.", correct: "forgotten" }
        ],


        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Type 6.1: Question to Answer (Groups 1-10)
            { pairs: [{a:"Had the movie started when you arrived?",b:"Yes, it had already begun."}, {a:"How long have you been studying English?",b:"I have been studying it for five years."}, {a:"Who had invented the telephone before 1880?",b:"Alexander Graham Bell had invented it."}, {a:"Have you been working on the code all day?",b:"Yes, I have been coding since 9 AM."}, {a:"Had they already discovered the error?",b:"No, they found it much later."}] },
            { pairs: [{a:"Had you ever seen a robot before today?",b:"No, I had never seen one in person."}, {a:"How long has it been raining?",b:"It has been raining since last night."}, {a:"What had the Wright Brothers done by 1903?",b:"They had built and flown the first plane."}, {a:"Has she been researching the cure for long?",b:"Yes, she has been doing it for a decade."}, {a:"Had you finished the project before the deadline?",b:"Yes, I had finished it two days earlier."}] },
            { pairs: [{a:"Why were you so tired yesterday?",b:"Because I had been working all night."}, {a:"Had the machine broken before he used it?",b:"Yes, it had already stopped working."}, {a:"What have the scientists been developing?",b:"They have been developing new AI models."}, {a:"Had she eaten dinner by 8 PM?",b:"Yes, she had already finished her meal."}, {a:"How long had you known him before he moved?",b:"I had known him for several years."}] },
            { pairs: [{a:"Had the train left when she got to the station?",b:"Yes, it had already departed."}, {a:"What have you been doing in the lab?",b:"I have been testing the new equipment."}, {a:"Who had designed the blueprint?",b:"The head engineer had designed it."}, {a:"Has the software been loading slowly?",b:"Yes, it has been loading for ten minutes."}, {a:"Had they already won the game by halftime?",b:"Yes, they had scored many points already."}] },
            { pairs: [{a:"Had you heard that song before today?",b:"No, I had never heard it before."}, {a:"How long has he been driving that car?",b:"He has been driving it for three hours."}, {a:"What had they built before the war started?",b:"They had built a huge bridge."}, {a:"Have you been following the news lately?",b:"Yes, I have been reading about AI."}, {a:"Had she forgotten her bag at school?",b:"Yes, she realized it when she got home."}] },
            { pairs: [{a:"Had the sun set before you arrived?",b:"Yes, it had already disappeared."}, {a:"How long have they been waiting for us?",b:"They have been waiting all week."}, {a:"What had he done with the old computer?",b:"He had sold it to a friend."}, {a:"Has she been teaching here since 2010?",b:"Yes, she has been a teacher here for years."}, {a:"Had you ever flown in an airplane before?",b:"No, that was my very first flight."}] },
            { pairs: [{a:"Why was the ground so wet?",b:"Because it had been raining all morning."}, {a:"Had you studied the code before the test?",b:"Yes, I had read it twice."}, {a:"What have the inventors been seeking?",b:"They have been seeking a new energy source."}, {a:"Has the robot been moving correctly?",b:"Yes, it has been walking perfectly."}, {a:"Had they already eaten when you called?",b:"Yes, they had already finished lunch."}] },
            { pairs: [{a:"Had the teacher arrived before the bell rang?",b:"No, she arrived after it had rung."}, {a:"How long have you been using this app?",b:"I have been using it since January."}, {a:"What had she created by the age of twenty?",b:"She had created her first software program."}, {a:"Has he been feeling better since Monday?",b:"Yes, he has been recovering well."}, {a:"Had you seen the blueprint before today?",b:"No, I had never seen the project plans."}] },
            { pairs: [{a:"Had they discovered electricity by 1800?",b:"Yes, scientists had already found it."}, {a:"How long has the baby been sleeping?",b:"The baby has been sleeping for two hours."}, {a:"What had you forgotten to bring?",b:"I had forgotten my laptop charger."}, {a:"Have you been studying for the exam?",b:"Yes, I have been studying all night."}, {a:"Had the computer crashed before you saved?",b:"Yes, I lost all the work I had done."}] },
            { pairs: [{a:"Had you met the creator before the show?",b:"No, I met him after it had finished."}, {a:"How long have they been coding the AI?",b:"They have been coding it for months."}, {a:"What had happened to the old machine?",b:"It had broken down completely."}, {a:"Has it been snowing all week?",b:"Yes, the streets have been white for days."}, {a:"Had he finished his homework by 9 PM?",b:"Yes, he had done it earlier."}] },

            // Type 6.2: 1st half to 2nd half of a sentence (Groups 11-20)
            { pairs: [{a:"I had already finished the code...",b:"...before the manager asked for it."}, {a:"She has been studying AI...",b:"...since she started university."}, {a:"By the time the police arrived...",b:"...the thief had already escaped."}, {a:"Technology has been changing...",b:"...so fast in the last decade."}, {a:"They had dreamed of flying...",b:"...for centuries before the first plane."}] },
            { pairs: [{a:"We have been waiting here...",b:"...for more than two hours."}, {a:"He realized he had lost...",b:"...his keys after he had left."}, {a:"Alexander Graham Bell had worked...",b:"...on the telephone for many years."}, {a:"I have been reading books...",b:"...about great inventors all day."}, {a:"The Wright Brothers had tested gliders...",b:"...before they built the first airplane."}] },
            { pairs: [{a:"Because it had been raining...",b:"...the grass was very wet."}, {a:"She has been developing...",b:"...a new mobile app lately."}, {a:"I wish I had brought...",b:"...my umbrella this morning."}, {a:"They had already discovered...",b:"...the error before they launched."}, {a:"He has been driving...",b:"...for six hours without a break."}] },
            { pairs: [{a:"After he had finished school...",b:"...he became a famous scientist."}, {a:"I have been using this software...",b:"...since I bought my new laptop."}, {a:"The computer crashed because...",b:"...I had opened too many files."}, {a:"She has been researching...",b:"...a cure for the disease all year."}, {a:"They had already seen...",b:"...the exhibit before I arrived."}] },
            { pairs: [{a:"It is not rocket science...",b:"...to learn how to use an app."}, {a:"Da Vinci was ahead...",b:"...of his time with his designs."}, {a:"Don't reinvent the wheel...",b:"...just use the existing tools."}, {a:"He had a lightbulb moment...",b:"...while he was walking in the park."}, {a:"The universe has been expanding...",b:"...for billions of years."}] },
            { pairs: [{a:"I had never seen a robot...",b:"...until I visited the museum."}, {a:"How long have you...",b:"...been working on this blueprint?"}, {a:"Before they invented the wheel...",b:"...people had used different tools."}, {a:"She has been waiting...",b:"...for the results all week."}, {a:"By the time I arrived...",b:"...the meeting had already started."}] },
            { pairs: [{a:"He has been following...",b:"...the latest innovation in tech."}, {a:"I realized I had made...",b:"...a big mistake in the code."}, {a:"They had already built...",b:"...the robot before the deadline."}, {a:"We have been coding...",b:"...since nine o'clock this morning."}, {a:"The airplane had taken off...",b:"...before we got to the airport."}] },
            { pairs: [{a:"She has been teaching...",b:"...at this school since 2015."}, {a:"I had eaten my lunch...",b:"...before the class began."}, {a:"They have been exploring...",b:"...the galaxy for several years."}, {a:"He had already found...",b:"...the answer to the problem."}, {a:"The machine had broken...",b:"...down three times before today."}] },
            { pairs: [{a:"How long has it...",b:"...been snowing in the mountains?"}, {a:"I had forgotten to...",b:"...save the important document."}, {a:"She has been writing...",b:"...the same letter all afternoon."}, {a:"They had left the lab...",b:"...before the electricity went out."}, {a:"We have been studying...",b:"...the history of inventions all week."}] },
            { pairs: [{a:"He has been looking...",b:"...for the right tool for hours."}, {a:"I had already seen...",b:"...that movie twice before."}, {a:"The blueprint had been...",b:"...lost for several weeks."}, {a:"We have been waiting...",b:"...since the museum opened."}, {a:"They had already won...",b:"...the prize before the final game."}] },

            // Type 6.3: English to Portuguese translation (Groups 21-30)
            { pairs: [{a:"I had finished my work.",b:"Eu tinha terminado meu trabalho."}, {a:"I have been working.",b:"Eu tenho trabalhado."}, {a:"She had already left.",b:"Ela já tinha saído."}, {a:"She has been waiting.",b:"Ela tem esperado/está esperando."}, {a:"They had seen the robot.",b:"Eles tinham visto o robô."}] },
            { pairs: [{a:"Ahead of one's time.",b:"À frente do seu tempo."}, {a:"Lightbulb moment.",b:"Momento de inspiração."}, {a:"Not rocket science.",b:"Não é bicho de sete cabeças."}, {a:"Reinvent the wheel.",b:"Reinventar a roda."}, {a:"Innovation never stops.",b:"A inovação nunca para."}] },
            { pairs: [{a:"Invention and creator.",b:"Invenção e criador."}, {a:"Blueprint and code.",b:"Planta/projeto e código."}, {a:"Equipment and tools.",b:"Equipamento e ferramentas."}, {a:"Machine and software.",b:"Máquina e software."}, {a:"Universe and AI models.",b:"Universo e modelos de IA."}] },
            { pairs: [{a:"Since 9 AM.",b:"Desde as 9 da manhã."}, {a:"For two hours.",b:"Por duas horas."}, {a:"All day long.",b:"O dia todo."}, {a:"How long?",b:"Há quanto tempo?"}, {a:"Since 2010.",b:"Desde 2010."}] },
            { pairs: [{a:"The plane had flown.",b:"O avião tinha voado."}, {a:"I have been reading.",b:"Eu tenho lido / estou lendo."}, {a:"He had already eaten.",b:"Ele já tinha comido."}, {a:"We have been waiting.",b:"Nós temos esperado / estamos esperando."}, {a:"They had built a city.",b:"Eles tinham construído uma cidade."}] },
            { pairs: [{a:"I have been coding.",b:"Eu tenho programado."}, {a:"He has been driving.",b:"Ele tem dirigido."}, {a:"It has been raining.",b:"Tem chovido."}, {a:"We have been studying.",b:"Nós temos estudado."}, {a:"They have been exploring.",b:"Eles têm explorado."}] },
            { pairs: [{a:"Before I arrived.",b:"Antes de eu chegar."}, {a:"When the bell rang.",b:"Quando o sino tocou."}, {a:"By the time he left.",b:"Na hora que ele saiu."}, {a:"Until last week.",b:"Até a semana passada."}, {a:"Already discovered.",b:"Já descoberto."}] },
            { pairs: [{a:"Technical drawing.",b:"Desenho técnico."}, {a:"Scientific research.",b:"Pesquisa científica."}, {a:"Industrial Revolution.",b:"Revolução Industrial."}, {a:"Computer binary code.",b:"Código binário de computador."}, {a:"Artificial Intelligence.",b:"Inteligência Artificial."}] },
            { pairs: [{a:"Fly - Flew - Flown.",b:"Voar."}, {a:"Write - Wrote - Written.",b:"Escrever."}, {a:"Build - Built - Built.",b:"Construir."}, {a:"Know - Knew - Known.",b:"Saber/Conhecer."}, {a:"See - Saw - Seen.",b:"Ver."}] },
            { pairs: [{a:"I have been using this.",b:"Eu tenho usado isto."}, {a:"They had tried many times.",b:"Eles tinham tentado muitas vezes."}, {a:"She has been researching.",b:"Ela tem pesquisado."}, {a:"We had forgotten the file.",b:"Nós tínhamos esquecido o arquivo."}, {a:"He has been following it.",b:"Ele tem acompanhado isto."}] },

            // Type 6.4: Word to Simple Definition in English (Groups 31-40)
            { pairs: [{a:"Invention",b:"A completely new thing created by someone."}, {a:"Creator",b:"The person who made something exist."}, {a:"Software",b:"Programs and data used by a computer."}, {a:"Hardware",b:"The physical parts of a computer."}, {a:"AI models",b:"Advanced programs that act like human brains."}] },
            { pairs: [{a:"Blueprint",b:"A technical drawing of a project or building."}, {a:"Code",b:"The special language used to program computers."}, {a:"Equipment",b:"A set of items needed for a specific job."}, {a:"Machine",b:"An apparatus that uses power to do work."}, {a:"Tool",b:"A handheld object used to fix or build things."}] },
            { pairs: [{a:"Past Perfect",b:"Tense used for the 'past of the past'."}, {a:"Simple Past",b:"Tense used for finished actions in the past."}, {a:"Present Perfect Continuous",b:"Tense used for an action that continues to now."}, {a:"Duration",b:"The length of time that something lasts."}, {a:"Timeline",b:"A visual representation of when events happened."}] },
            { pairs: [{a:"Lightbulb moment",b:"When you suddenly get a brilliant idea."}, {a:"Rocket science",b:"Something that is very difficult to understand."}, {a:"Reinvent the wheel",b:"Doing something that has already been done well."}, {a:"Ahead of his time",b:"When someone’s ideas are too advanced for today."}, {a:"Innovation",b:"A new method, idea, or product."}] },
            { pairs: [{a:"Robot",b:"A machine that can perform complex tasks alone."}, {a:"Computer",b:"An electronic device for storing and processing data."}, {a:"Smartphone",b:"A mobile phone that can access the internet."}, {a:"Airplane",b:"A machine that flies through the air with wings."}, {a:"Telephone",b:"A device used to talk to people far away."}] },
            { pairs: [{a:"Scientist",b:"A person who studies the natural world."}, {a:"Engineer",b:"A person who designs and builds machines."}, {a:"Inventor",b:"A person who creates new things."}, {a:"Programmer",b:"A person who writes instructions for computers."}, {a:"Researcher",b:"A person who looks for new information or cures."}] },
            { pairs: [{a:"To succeed",b:"To achieve the desired result or goal."}, {a:"To fail",b:"To not reach the goal or to stop working."}, {a:"To develop",b:"To grow or make something more advanced."}, {a:"To explore",b:"To travel through a place to learn about it."}, {a:"To discover",b:"To find something for the first time."}] },
            { pairs: [{a:"Since",b:"Indicates a specific starting point in the past."}, {a:"For",b:"Indicates a specific period or length of time."}, {a:"Already",b:"Used when something happened sooner than expected."}, {a:"Before",b:"At an earlier time than something else."}, {a:"Lately",b:"In the recently finished period of time."}] },
            { pairs: [{a:"Laboratory",b:"A place for scientific experiments."}, {a:"Museum",b:"A building where historical objects are kept."}, {a:"Workshop",b:"A room where things are built or repaired."}, {a:"Factory",b:"A large building where products are manufactured."}, {a:"Office",b:"A room where people work at desks."}] },
            { pairs: [{a:"Experiment",b:"A scientific test to find new information."}, {a:"Discovery",b:"Finding something that was not known before."}, {a:"Solution",b:"The answer to a problem or mistake."}, {a:"Error",b:"A mistake or something that is not correct."}, {a:"Data",b:"Facts or information collected for analysis."}] }
        ],

        // --- TYPE 7: BEST ANSWER (WH QUESTIONS) ---
        7: [
            { q: "How long had the Wright Brothers been experimenting before they succeeded?", options: ["They had been experimenting for years with gliders.", "They fly in 1903.", "Yes, it was a robot.", "In the science museum."], a: "They had been experimenting for years with gliders." },
            { q: "What had you done before the computer crashed?", options: ["I had already saved the important code.", "I have been reading all day.", "The mouse is on the desk.", "Since 2010."], a: "I had already saved the important code." },
            { q: "Why was she so exhausted when she arrived?", options: ["Because she had been working on the blueprint all night.", "Because she is an inventor.", "Tomorrow at 8 AM.", "No, she hadn't."], a: "Because she had been working on the blueprint all night." },
            { q: "Who had already discovered the error before the presentation?", options: ["The head programmer had already found it.", "It was a lightbulb moment.", "In the laboratory.", "For two hours."], a: "The head programmer had already found it." },
            { q: "How long have you been researching AI models?", options: ["I have been researching them since last summer.", "I had seen the robot before.", "It is not rocket science.", "Alexander Graham Bell."], a: "I have been researching them since last summer." },
            { q: "What had happened to the machine before you touched it?", options: ["It had already broken down.", "It has been raining all week.", "I am a creator.", "To reinvent the wheel."], a: "It had already broken down." },
            { q: "Where had they hidden the blueprints?", options: ["They had hidden them in a secret safe.", "They have been looking for hours.", "It is a very large airplane.", "Yes, they had."], a: "They had hidden them in a secret safe." },
            { q: "Why did the lights go out?", options: ["Because the equipment had failed.", "Because he has been coding.", "All day long.", "By 10 PM."], a: "Because the equipment had failed." },
            { q: "How many times had he tried before he finally succeeded?", options: ["He had tried hundreds of times.", "He has been trying since noon.", "He is an engineer.", "No, he hasn't."], a: "He had tried hundreds of times." },
            { q: "When had the class begun?", options: ["It had begun before the teacher arrived.", "It has been beginning for years.", "The bell is ringing.", "In the universe."], a: "It had begun before the teacher arrived." },
            { q: "What has Celine been doing in the museum?", options: ["She has been looking at the robot exhibit.", "She had seen the airplane before.", "It is a very old telephone.", "To the library."], a: "She has been looking at the robot exhibit." },
            { q: "Who has been following the latest innovations lately?", options: ["The students have been following them closely.", "Innovation never stops.", "It was invented in 1879.", "Yes, I have."], a: "The students have been following them closely." },
            { q: "How long had they known about the discovery?", options: ["They had known about it for weeks.", "They have been knowing it.", "It is a small tool.", "Since Monday."], a: "They had known about it for weeks." },
            { q: "Why was the floor wet?", options: ["Because it had been raining all afternoon.", "Because I had eaten lunch.", "Because the robot is blue.", "No, it isn't."], a: "Because it had been raining all afternoon." },
            { q: "What had you forgotten to bring to the lab?", options: ["I had forgotten the new software.", "I have been bringing tools.", "Since 9 AM.", "He is a great inventor."], a: "I had forgotten the new software." },
            { q: "Where has he been driving for the last three hours?", options: ["He has been driving through the city.", "He had driven to work.", "It is a fast airplane.", "Yes, he has."], a: "He has been driving through the city." },
            { q: "Which code had she written before the power failure?", options: ["She had written the security code.", "She has been writing all morning.", "The computer is broken.", "All week."], a: "She had written the security code." },
            { q: "How long has the sun been shining today?", options: ["It has been shining since 6 AM.", "It had already set when I arrived.", "The universe is huge.", "No, it hasn't."], a: "It has been shining since 6 AM." },
            { q: "Who had already left when the meeting started?", options: ["The manager had already left for the airport.", "I have been waiting for you.", "In the science museum.", "By tomorrow."], a: "The manager had already left for the airport." },
            { q: "Why have you been studying the Industrial Revolution?", options: ["Because I have a history test tomorrow.", "Because I had studied math before.", "It was ahead of its time.", "Yes, I have."], a: "Because I have a history test tomorrow." },
            { q: "What had the inventor seen in his dream?", options: ["He had seen a machine that could fly.", "He has been seeing robots.", "Since 1903.", "With a hammer."], a: "He had seen a machine that could fly." },
            { q: "How long have we been using the internet?", options: ["We have been using it for a few decades.", "We had used letters before.", "It is not rocket science.", "Yes, we have."], a: "We have been using it for a few decades." },
            { q: "Who had built the first robot in the story?", options: ["A lonely scientist had built it.", "He has been building it all day.", "It is made of metal.", "In the future."], a: "A lonely scientist had built it." },
            { q: "Why were you crying when I saw you?", options: ["Because I had been cutting onions.", "Because I had already finished my work.", "The onion is a vegetable.", "No, I wasn't."], a: "Because I had been cutting onions." },
            { q: "When had the sun risen?", options: ["It had already risen when I woke up.", "It has been rising since 5 AM.", "The sun is a star.", "Yes, it did."], a: "It had already risen when I woke up." },
            { q: "What have they been developing in the workshop?", options: ["They have been developing a new AI model.", "They had developed a telephone.", "In 1879.", "To succeed."], a: "They have been developing a new AI model." },
            { q: "How long had she been waiting for the bus?", options: ["She had been waiting for twenty minutes when it arrived.", "She has been waiting since 8:00.", "The bus is yellow.", "No, she hadn't."], a: "She had been waiting for twenty minutes when it arrived." },
            { q: "Who has been using my computer?", options: ["Your brother has been using it all afternoon.", "I had already turned it off.", "The computer has 16GB of RAM.", "Since yesterday."], a: "Your brother has been using it all afternoon." },
            { q: "Where had you been before you came home?", options: ["I had been to the science museum.", "I have been coming home.", "I am an inventor.", "Yes, I had."], a: "I had been to the science museum." },
            { q: "Why was the code so difficult to read?", options: ["Because the programmer had made many errors.", "Because it has been raining.", "It is a blueprint.", "No, it wasn't."], a: "Because the programmer had made many errors." },
            { q: "How long has he been teaching coding?", options: ["He has been teaching it for ten years.", "He had taught math before.", "Coding is fun.", "In the classroom."], a: "He has been teaching it for ten years." },
            { q: "What had they eaten before the flight?", options: ["They had eaten some sandwiches.", "They have been eating for an hour.", "The airplane is big.", "By 5 PM."], a: "They had eaten some sandwiches." },
            { q: "Who have you been talking to?", options: ["I have been talking to the creator of the app.", "I had spoken to him yesterday.", "He is a very smart man.", "Yes, I have."], a: "I have been talking to the creator of the app." },
            { q: "Why was the lab closed?", options: ["Because the scientists had finished their experiment.", "Because they have been researching.", "In the morning.", "No, it wasn't."], a: "Because the scientists had finished their experiment." },
            { q: "How long has it been snowing in the mountains?", options: ["It has been snowing for three days.", "It had already stopped when we arrived.", "Snow is cold.", "Since January."], a: "It has been snowing for three days." },
            { q: "What had you discovered in the old box?", options: ["I had discovered an ancient blueprint.", "I have been discovering things.", "It is a wooden box.", "Yes, I had."], a: "I had discovered an ancient blueprint." },
            { q: "Who has been waiting for you since 9 AM?", options: ["My classmates have been waiting for me.", "I had been waiting too.", "They are in the hallway.", "No, they haven't."], a: "My classmates have been waiting for me." },
            { q: "Why did the car stop?", options: ["Because it had run out of electricity.", "Because it has been driving fast.", "It is a modern car.", "All day."], a: "Because it had run out of electricity." },
            { q: "When had you seen that robot before?", options: ["I had seen it at last year's exhibit.", "I have been seeing it all day.", "The robot can walk.", "Yes, I have."], a: "I had seen it at last year's exhibit." },
            { q: "How long have we been following this innovation?", options: ["We have been following it since it was launched.", "We had followed it before.", "Innovation is important.", "No, we haven't."], a: "We have been following it since it was launched." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY ---
        8: [
            { sent: "Thomas Edison used a **hammer** to invent the lightbulb in 1879.", wrong: "hammer", options: ["Electricity", "Experiment", "Creator", "Blueprint"], a: "Experiment" },
            { sent: "The Wright Brothers flew the first **smartphone** in 1903.", wrong: "smartphone", options: ["Airplane", "Robot", "AI model", "Code"], a: "Airplane" },
            { sent: "Before the telephone, people used **robots** to communicate for centuries.", wrong: "robots", options: ["Letters", "Equipment", "Computers", "Blueprints"], a: "Letters" },
            { sent: "It’s **rocket science**; it's very easy to understand this code.", wrong: "rocket science", options: ["Not rocket science", "A lightbulb moment", "Reinventing the wheel", "Ahead of its time"], a: "Not rocket science" },
            { sent: "I had a **machine** moment and finally realized how to fix the app.", wrong: "machine", options: ["Lightbulb", "Universe", "Code", "Equipment"], a: "Lightbulb" },
            { sent: "Please look at the **airplane** to see the technical drawing of the house.", wrong: "airplane", options: ["Blueprint", "Software", "Electricity", "Tool"], a: "Blueprint" },
            { sent: "We must not reinvent the **code**; the existing tools are perfect.", wrong: "code", options: ["Wheel", "Robot", "Creator", "Airplane"], a: "Wheel" },
            { sent: "Alexander Graham Bell invented the **airplane** for people to talk far away.", wrong: "airplane", options: ["Telephone", "Computer", "AI model", "Software"], a: "Telephone" },
            { sent: "The scientist was **behind his time** because his ideas were too modern.", wrong: "behind his time", options: ["Ahead of his time", "In his time", "About his time", "After his time"], a: "Ahead of his time" },
            { sent: "Computer **electricity** tells the machine what to do.", wrong: "electricity", options: ["Code", "Hardware", "Robot", "Universe"], a: "Code" },
            { sent: "A **creator** is a machine that can perform automatic tasks.", wrong: "creator", options: ["Robot", "Tool", "Blueprint", "Software"], a: "Robot" },
            { sent: "I have been using this **equipment** to write emails on the internet.", wrong: "equipment", options: ["Software/App", "Airplane", "Hammer", "Blueprint"], a: "Software/App" },
            { sent: "The **equipment** consists of all the stars in space.", wrong: "equipment", options: ["Universe", "Machine", "Code", "Blueprint"], a: "Universe" },
            { sent: "We need to update the **airplane** on our computers.", wrong: "airplane", options: ["Software", "Hardware", "Electricity", "Creator"], a: "Software" },
            { sent: "The **robot** created the new machine in 1879.", wrong: "robot", options: ["Inventor/Creator", "Code", "AI model", "Blueprint"], a: "Inventor/Creator" },
            { sent: "I used a **smartphone** to hit the nail into the wood.", wrong: "smartphone", options: ["Hammer/Tool", "Computer", "Software", "Airplane"], a: "Hammer/Tool" },
            { sent: "AI models are powered by **wood and water**.", wrong: "wood and water", options: ["Electricity", "Software", "Code", "Equipment"], a: "Electricity" },
            { sent: "He is the **machine** of this new technology.", wrong: "machine", options: ["Creator/Inventor", "Code", "AI model", "Airplane"], a: "Creator/Inventor" },
            { sent: "We have been waiting **since** two hours for the results.", wrong: "since", options: ["For", "During", "At", "In"], a: "For" },
            { sent: "I have been working here **for** 2010.", wrong: "for", options: ["Since", "From", "Ago", "By"], a: "Since" },
            { sent: "I had a **blueprint** moment when the answer finally came to me.", wrong: "blueprint", options: ["Lightbulb", "Rocket", "Wheel", "Tool"], a: "Lightbulb" },
            { sent: "Leonardo da Vinci was a great **robot**.", wrong: "robot", options: ["Inventor/Creator", "Software", "Code", "Airplane"], a: "Inventor/Creator" },
            { sent: "The **telephone** flies through the air to carry passengers.", wrong: "telephone", options: ["Airplane", "Robot", "Code", "Blueprint"], a: "Airplane" },
            { sent: "Don't reinvent the **bicycle**; the solution already exists.", wrong: "bicycle", options: ["Wheel", "Code", "App", "Tool"], a: "Wheel" },
            { sent: "The **software** of the car needs to be repaired after the crash.", wrong: "software", options: ["Machine/Equipment", "Code", "AI model", "Invention"], a: "Machine/Equipment" },
            { sent: "I am reading a book about the **AI model** of the earth.", wrong: "AI model", options: ["History/Innovation", "Software", "Code", "Machine"], a: "History/Innovation" },
            { sent: "He is very smart; learning math is **rocket science** for him.", wrong: "rocket science", options: ["Not rocket science", "A lightbulb moment", "Reinventing the wheel", "Ahead of his time"], a: "Not rocket science" },
            { sent: "The **creator** is huge and contains billions of galaxies.", wrong: "creator", options: ["Universe", "Laboratory", "Machine", "Blueprint"], a: "Universe" },
            { sent: "Use this **airplane** to fix the broken door.", wrong: "airplane", options: ["Tool", "Software", "Code", "App"], a: "Tool" },
            { sent: "The **telephone** was invented to fly over the Atlantic Ocean.", wrong: "telephone", options: ["Airplane", "Robot", "Smartphone", "Code"], a: "Airplane" },
            { sent: "I have been coding **lately** day.", wrong: "lately", options: ["All", "Since", "For", "In"], a: "All" },
            { sent: "He was ahead of his **code** with his futuristic designs.", wrong: "code", options: ["Ahead of his time", "Ahead of his robot", "Ahead of his wheel", "Ahead of his tool"], a: "Ahead of his time" },
            { sent: "We need more **electricity** to perform the scientific tests.", wrong: "electricity", options: ["Equipment/Tools", "Software", "Code", "Blueprints"], a: "Equipment/Tools" },
            { sent: "The **robot** is the person who makes the invention.", wrong: "robot", options: ["Inventor/Creator", "AI model", "Machine", "Code"], a: "Inventor/Creator" },
            { sent: "I have been using this **telephone** to surf the web and use apps.", wrong: "telephone", options: ["Smartphone", "Airplane", "Machine", "Code"], a: "Smartphone" },
            { sent: "Look at this **code**; it shows the plan for the new school.", wrong: "code", options: ["Blueprint", "Software", "Electricity", "Machine"], a: "Blueprint" },
            { sent: "It has been raining **for** Monday.", wrong: "for", options: ["Since", "In", "At", "All"], a: "Since" },
            { sent: "He had a **rocket science** moment and solved the mystery.", wrong: "rocket science", options: ["Lightbulb", "Wheel", "Time", "Tool"], a: "Lightbulb" },
            { sent: "The **airplane** had already been invented by 1800.", wrong: "airplane", options: ["Airplane", "Telephone", "Smartphone", "Software"], a: "Telephone" },
            { sent: "I have been waiting **since** an hour.", wrong: "since", options: ["For", "All", "Lately", "In"], a: "For" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 items) ---
        9: [
            { audio: "How long have you been working in the lab?", options: ["I have been working since 8 AM.", "I had finished the project.", "The lab is big.", "No, it isn't."], a: "I have been working since 8 AM." },
            { audio: "Had the airplane taken off before you arrived?", options: ["Yes, it had already left the ground.", "I fly in 1903.", "Since yesterday.", "My name is Albert."], a: "Yes, it had already left the ground." },
            { audio: "What have the creators been developing lately?", options: ["They have been developing a new AI model.", "They are inventors.", "For three years.", "Yes, they are."], a: "They have been developing a new AI model." },
            { audio: "Had she seen the blueprint before the meeting?", options: ["No, she had never seen it before.", "She is an engineer.", "In the office.", "All week."], a: "No, she had never seen it before." },
            { audio: "Why was he so tired?", options: ["Because he had been coding all night.", "Because he is a robot.", "Since 2010.", "No, he wasn't."], a: "Because he had been coding all night." },
            { audio: "Had the machine broken before he used it?", options: ["Yes, it had already stopped working.", "He is a mechanic.", "With a tool.", "Yes, he did."], a: "Yes, it had already stopped working." },
            { audio: "How long has it been raining?", options: ["It has been raining all day.", "It had rained yesterday.", "The rain is wet.", "No, thank you."], a: "It has been raining all day." },
            { audio: "Had they already discovered the cure by then?", options: ["Yes, they had already found the solution.", "They are researchers.", "For a long time.", "In the laboratory."], a: "Yes, they had already found the solution." },
            { audio: "What had you forgotten at home?", options: ["I had forgotten my computer charger.", "I have been bringing my bag.", "Since Monday.", "No, I haven't."], a: "I had forgotten my computer charger." },
            { audio: "How long has he been driving that car?", options: ["He has been driving it for six hours.", "He had driven a bus before.", "The car is fast.", "Yes, he has."], a: "He has been driving it for six hours." },
            { audio: "Had you finished the code before the crash?", options: ["No, I hadn't finished it yet.", "I am a programmer.", "The computer is on.", "All morning."], a: "No, I hadn't finished it yet." },
            { audio: "Who has been waiting for you since noon?", options: ["My parents have been waiting for me.", "I had been waiting too.", "In the hallway.", "Yes, they have."], a: "My parents have been waiting for me." },
            { audio: "Why was the ground wet?", options: ["Because it had been raining for hours.", "Because I had eaten an apple.", "The ground is brown.", "No, it isn't."], a: "Because it had been raining for hours." },
            { audio: "Had the train left at 8:00?", options: ["Yes, it had already departed.", "I go by train.", "Since January.", "My name is Paul."], a: "Yes, it had already departed." },
            { audio: "What have you been reading lately?", options: ["I have been reading about the Wright Brothers.", "I had read it before.", "The book is blue.", "Yes, I have."], a: "I have been reading about the Wright Brothers." },
            { audio: "Had she known him for long?", options: ["Yes, she had known him since 2015.", "She is my friend.", "At school.", "For two hours."], a: "Yes, she had known him since 2015." },
            { audio: "Why were you late?", options: ["Because I had missed my bus.", "Because I am a student.", "Since 7 AM.", "No, I wasn't."], a: "Because I had missed my bus." },
            { audio: "Has the software been loading slowly?", options: ["Yes, it has been loading for ten minutes.", "It is a new app.", "On the screen.", "Yes, it did."], a: "Yes, it has been loading for ten minutes." },
            { audio: "Had he built the robot by himself?", options: ["Yes, he had done it all alone.", "He has been building it.", "The robot is smart.", "By tomorrow."], a: "Yes, he had done it all alone." },
            { audio: "How long has it been snowing?", options: ["It has been snowing all week.", "It had been cold.", "The snow is white.", "No, it isn't."], a: "It has been snowing all week." },
            { audio: "Had you eaten before you left?", options: ["No, I hadn't eaten anything.", "I have been eating pizza.", "In the kitchen.", "All afternoon."], a: "No, I hadn't eaten anything." },
            { audio: "Who has been following the news?", options: ["Everyone has been following the innovation news.", "I had seen it before.", "The news is interesting.", "Yes, I have."], a: "Everyone has been following the innovation news." },
            { audio: "Had the sun set when you arrived?", options: ["Yes, it had already gone down.", "It has been shining.", "The sun is hot.", "By 6 PM."], a: "Yes, it had already gone down." },
            { audio: "How long had you been studying before the bell?", options: ["I had been studying for three hours.", "I have been studying English.", "The bell is loud.", "No, I hadn't."], a: "I had been studying for three hours." },
            { audio: "What have you been doing since 9 AM?", options: ["I have been coding the new software.", "I had done my homework.", "Technology is fast.", "Yes, I am."], a: "I have been coding the new software." },
            { audio: "Had she finished the project by Monday?", options: ["Yes, she had finished it on Sunday.", "She is working hard.", "At school.", "All week."], a: "Yes, she had finished it on Sunday." },
            { audio: "Why was the laboratory so messy?", options: ["Because the scientists had been experimenting all day.", "Because they are inventors.", "Since 2010.", "No, it isn't."], a: "Because the scientists had been experimenting all day." },
            { audio: "Had the machine broken down before?", options: ["No, it had never happened before.", "It is a strong machine.", "In the factory.", "For an hour."], a: "No, it had never happened before." },
            { audio: "How long have they been exploring the universe?", options: ["They have been exploring it for centuries.", "They had seen the stars.", "The universe is infinite.", "Yes, they have."], a: "They have been exploring it for centuries." },
            { audio: "Had you seen the new exhibit yet?", options: ["Yes, I had seen it twice before today.", "I have been looking at robots.", "It is in the museum.", "All morning."], a: "Yes, I had seen it twice before today." },
            { audio: "Why were the students excited?", options: ["Because the school had bought new equipment.", "Because they have been studying.", "On Fridays.", "No, they aren't."], a: "Because the school had bought new equipment." },
            { audio: "Had she forgotten to save the file?", options: ["Yes, she realized it after she had closed the laptop.", "She has been saving money.", "The file is large.", "By 10 o'clock."], a: "Yes, she realized it after she had closed the laptop." },
            { audio: "How long has he been using that app?", options: ["He has been using it since it was launched.", "He had used a different one before.", "The app is free.", "Yes, he has."], a: "He has been using it since it was launched." },
            { audio: "Had they already left when you called?", options: ["Yes, they had already gone out.", "They are my friends.", "On the phone.", "Since noon."], a: "Yes, they had already gone out." },
            { audio: "What have you been doing all week?", options: ["I have been preparing for the presentation.", "I had finished my tasks.", "It is Wednesday.", "Yes, I have."], a: "I have been preparing for the presentation." },
            { audio: "Had the Wright Brothers experimented much?", options: ["Yes, they had tested gliders for many years.", "They are from Ohio.", "The airplane is small.", "By 1903."], a: "Yes, they had tested gliders for many years." },
            { audio: "Why were you laughing?", options: ["Because I had been watching a funny meme.", "Because I had already finished my work.", "Laughter is healthy.", "No, I wasn't."], a: "Because I had been watching a funny meme." },
            { audio: "Had the electricity gone out before the storm?", options: ["No, it went out after the storm had started.", "It is a lightning bolt.", "In our homes.", "All night."], a: "No, it went out after the storm had started." },
            { audio: "How long has she been researching the cure?", options: ["She has been researching it for her entire career.", "She had found it last year.", "She is a scientist.", "Since morning."], a: "She has been researching it for her entire career." },
            { audio: "Had you written the letter before the deadline?", options: ["Yes, I had written it two days early.", "I have been writing all day.", "The letter is on the desk.", "No, I haven't."], a: "Yes, I had written it two days early." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 items) ---
        10: [
            { audio: "I had finished the code before the computer crashed.", sent: "I had ___ the code before the computer ___.", blanks: ["finished", "crashed"] },
            { audio: "He has been working on this project since 2020.", sent: "He has been ___ on this project ___ 2020.", blanks: ["working", "since"] },
            { audio: "Technology has been changing so fast lately.", sent: "Technology has been ___ so ___ lately.", blanks: ["changing", "fast"] },
            { audio: "They had already built the robot before the deadline.", sent: "They had ___ built the robot before the ___.", blanks: ["already", "deadline"] },
            { audio: "I have been waiting for you for two hours.", sent: "I have been ___ for you for ___ hours.", blanks: ["waiting", "two"] },
            { audio: "She had dreamed of flying long before she became a pilot.", sent: "She had ___ of flying long before she ___ a pilot.", blanks: ["dreamed", "became"] },
            { audio: "How long have you been studying AI?", sent: "How long ___ you been ___ AI?", blanks: ["have", "studying"] },
            { audio: "We had forgotten to bring the blueprint to the meeting.", sent: "We had ___ to bring the ___ to the meeting.", blanks: ["forgotten", "blueprint"] },
            { audio: "It has been raining all day long.", sent: "It has been ___ all ___ long.", blanks: ["raining", "day"] },
            { audio: "The machine had broken before the technician arrived.", sent: "The machine had ___ before the technician ___.", blanks: ["broken", "arrived"] },
            { audio: "I have been reading about inventors all morning.", sent: "I have been ___ about inventors ___ morning.", blanks: ["reading", "all"] },
            { audio: "They had already discovered the cure by then.", sent: "They had ___ discovered the cure by ___.", blanks: ["already", "then"] },
            { audio: "He has been driving for six hours without a break.", sent: "He has been ___ for six ___ without a break.", blanks: ["driving", "hours"] },
            { audio: "Had you seen the robot before today?", sent: "Had you ___ the robot ___ today?", blanks: ["seen", "before"] },
            { audio: "She has been developing new software for months.", sent: "She has been ___ new ___ for months.", blanks: ["developing", "software"] },
            { audio: "By the time he arrived, the train had left.", sent: "By the time he ___, the train had ___.", blanks: ["arrived", "left"] },
            { audio: "We have been following the latest innovation in tech.", sent: "We have been ___ the latest ___ in tech.", blanks: ["following", "innovation"] },
            { audio: "I had taken the bus before I realized my mistake.", sent: "I had ___ the bus before I ___ my mistake.", blanks: ["taken", "realized"] },
            { audio: "How long has she been teaching at this school?", sent: "How long ___ she been ___ at this school?", blanks: ["has", "teaching"] },
            { audio: "The scientist had experimented many times before he succeeded.", sent: "The scientist had ___ many times before he ___.", blanks: ["experimented", "succeeded"] },
            { audio: "I have been using this app since January.", sent: "I have been ___ this ___ since January.", blanks: ["using", "app"] },
            { audio: "They had already eaten when the guest arrived.", sent: "They had ___ eaten when the ___ arrived.", blanks: ["already", "guest"] },
            { audio: "He has been coding all week to finish the job.", sent: "He has been ___ all ___ to finish the job.", blanks: ["coding", "week"] },
            { audio: "Had you heard that song before today?", sent: "Had you ___ that song ___ today?", blanks: ["heard", "before"] },
            { audio: "We have been exploring the universe with new telescopes.", sent: "We have been ___ the ___ with new telescopes.", blanks: ["exploring", "universe"] },
            { audio: "She had made a mistake in the code.", sent: "She had ___ a mistake in the ___.", blanks: ["made", "code"] },
            { audio: "How long have they been waiting for the results?", sent: "How long ___ they been ___ for the results?", blanks: ["have", "waiting"] },
            { audio: "The sun had set before the plane landed.", sent: "The sun had ___ before the ___ landed.", blanks: ["set", "plane"] },
            { audio: "I have been feeling much better lately.", sent: "I have been ___ much ___ lately.", blanks: ["feeling", "better"] },
            { audio: "Had they discovered electricity before the 19th century?", sent: "Had they ___ electricity ___ the 19th century?", blanks: ["discovered", "before"] },
            { audio: "She has been researching a cure for years.", sent: "She has been ___ a ___ for years.", blanks: ["researching", "cure"] },
            { audio: "By the time I called, they had left the house.", sent: "By the time I ___, they had ___ the house.", blanks: ["called", "left"] },
            { audio: "We have been studying the history of inventions.", sent: "We have been ___ the history of ___.", blanks: ["studying", "inventions"] },
            { audio: "Had you seen that blueprint before the project started?", sent: "Had you ___ that ___ before the project started?", blanks: ["seen", "blueprint"] },
            { audio: "It has been snowing since Monday.", sent: "It has been ___ since ___.", blanks: ["snowing", "Monday"] },
            { audio: "He had already won the prize when I saw him.", sent: "He had ___ won the ___ when I saw him.", blanks: ["already", "prize"] },
            { audio: "How long have you been using this computer?", sent: "How long ___ you been ___ this computer?", blanks: ["have", "using"] },
            { audio: "The class had begun before the bell rang.", sent: "The class had ___ before the bell ___.", blanks: ["begun", "rang"] },
            { audio: "I have been listening to this song for an hour.", sent: "I have been ___ to this ___ for an hour.", blanks: ["listening", "song"] },
            { audio: "They had built the city before the war.", sent: "They had ___ the city ___ the war.", blanks: ["built", "before"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE ---
        11: [
            {
                title: "The Wright Brothers Exhibit",
                lines: [
                    { speaker: "Albert", text: "Celine, look at the gliders! I ___ never realized how dangerous they were.", options: ["had", "have"], a: "had" },
                    { speaker: "Celine", text: "They ___ been experimenting for years before the engine was added.", options: ["had", "have"], a: "had" },
                    { speaker: "Albert", text: "Orville was the one who flew first, right?", options: ["Yes", "No"], a: "Yes" },
                    { speaker: "Celine", text: "Yes. By the time they succeeded, they ___ failed hundreds of times.", options: ["had", "have"], a: "had" },
                    { speaker: "Albert", text: "I ___ been reading about their childhood all morning.", options: ["have", "had"], a: "have" }
                ]
            },
            {
                title: "The Coding Crisis",
                lines: [
                    { speaker: "Sarah", text: "___ you been working on that AI model all night?", options: ["Have", "Had"], a: "Have" },
                    { speaker: "Mike", text: "Almost. I ___ been coding since 8:00 PM yesterday.", options: ["have", "had"], a: "have" },
                    { speaker: "Sarah", text: "Did the program run correctly on the first try?", options: ["Yes", "No"], a: "No" },
                    { speaker: "Mike", text: "No. I ___ already written a thousand lines when I found an error.", options: ["had", "have"], a: "had" },
                    { speaker: "Sarah", text: "___! That sounds like a nightmare.", options: ["OMG", "LOL"], a: "OMG" }
                ]
            },
            {
                title: "Telephone History",
                lines: [
                    { speaker: "Celine", text: "Bell ___ been researching sound waves for a long time.", options: ["had", "has"], a: "had" },
                    { speaker: "Albert", text: "Before the solution, he ___ spent most of his money.", options: ["had", "has"], a: "had" },
                    { speaker: "Celine", text: "Communication ___ been changing so much lately.", options: ["has", "had"], a: "has" },
                    { speaker: "Albert", text: "Using a smartphone is not rocket ___ today.", options: ["science", "art"], a: "science" },
                    { speaker: "Celine", text: "True. Innovation ___ stops.", options: ["never", "always"], a: "never" }
                ]
            },
            {
                title: "The New Robot Exhibit",
                lines: [
                    { speaker: "Leo", text: "Have you seen the new AI robot yet?", options: ["Yes", "No"], a: "No" },
                    { speaker: "Sarah", text: "Not yet, but I ___ been waiting for this exhibit for weeks.", options: ["have", "had"], a: "have" },
                    { speaker: "Leo", text: "The robot ___ been performing complex tasks all morning.", options: ["has", "had"], a: "has" },
                    { speaker: "Sarah", text: "Who is the ___ of this model?", options: ["creator", "blueprint"], a: "creator" },
                    { speaker: "Leo", text: "Engineers ___ already developed three models before this one.", options: ["had", "have"], a: "had" }
                ]
            },
            {
                title: "Da Vinci’s Dreams",
                lines: [
                    { speaker: "Albert", text: "Look at this ___ of a flying machine!", options: ["blueprint", "software"], a: "blueprint" },
                    { speaker: "Celine", text: "He was definitely ___ of his time.", options: ["ahead", "behind"], a: "ahead" },
                    { speaker: "Albert", text: "The technology for engines ___ been invented back then.", options: ["hadn't", "hasn't"], a: "hadn't" },
                    { speaker: "Celine", text: "He ___ dreamed of the sky long before the Wright Brothers.", options: ["had", "has"], a: "had" },
                    { speaker: "Albert", text: "Human curiosity ___ been driving innovation for centuries.", options: ["has", "had"], a: "has" }
                ]
            },
            {
                title: "Laboratory Accident",
                lines: [
                    { speaker: "Teacher", text: "Why is the floor wet? We ___ been testing the machine.", options: ["had", "have"], a: "had" },
                    { speaker: "Student", text: "___ you checked the pressure before you started?", options: ["Had", "Have"], a: "Had" },
                    { speaker: "Teacher", text: "Yes, we ___ already checked everything.", options: ["had", "have"], a: "had" },
                    { speaker: "Student", text: "Safety is not rocket ___; just follow instructions.", options: ["science", "science"], a: "science" },
                    { speaker: "Teacher", text: "We ___ been cleaning the mess since it happened.", options: ["have", "had"], a: "have" }
                ]
            },
            {
                title: "Software Development",
                lines: [
                    { speaker: "Mike", text: "I ___ been developing the interface all week.", options: ["have", "had"], a: "have" },
                    { speaker: "Albert", text: "___ you ever used this type of code before?", options: ["Had", "Have"], a: "Had" },
                    { speaker: "Mike", text: "No, I ___ only studied the theory until now.", options: ["had", "have"], a: "had" },
                    { speaker: "Albert", text: "Well, don't ___ the wheel. Use standard models.", options: ["reinvent", "invent"], a: "reinvent" },
                    { speaker: "Mike", text: "Good point. I ___ already considered that.", options: ["had", "have"], a: "had" }
                ]
            },
            {
                title: "Exploring the Museum",
                lines: [
                    { speaker: "Celine", text: "We ___ been walking through this museum for three hours.", options: ["have", "had"], a: "have" },
                    { speaker: "Albert", text: "They ___ already closed the gift shop.", options: ["had", "have"], a: "had" },
                    { speaker: "Celine", text: "I ___ never seen so many inventions in one place.", options: ["had", "have"], a: "had" },
                    { speaker: "Albert", text: "I ___ expected a small exhibit, but this is huge!", options: ["had", "have"], a: "had" },
                    { speaker: "Celine", text: "It feels like the ___ of knowledge is infinite.", options: ["universe", "software"], a: "universe" }
                ]
            },
            {
                title: "The Project Launch",
                lines: [
                    { speaker: "A", text: "The team ___ been preparing the launch for months.", options: ["has", "had"], a: "has" },
                    { speaker: "B", text: "___ they finished the final blueprint by yesterday?", options: ["Had", "Have"], a: "Had" },
                    { speaker: "A", text: "Yes, the creator ___ approved it before 5 PM.", options: ["had", "has"], a: "had" },
                    { speaker: "B", text: "I ___ been waiting for this moment all my life!", options: ["have", "had"], a: "have" },
                    { speaker: "A", text: "It's a real ___ moment for the whole company.", options: ["lightbulb", "rocket"], a: "lightbulb" }
                ]
            },
            {
                title: "Renewable Energy",
                lines: [
                    { speaker: "A", text: "Scientists ___ been researching solar power for decades.", options: ["have", "had"], a: "have" },
                    { speaker: "B", text: "___ people discovered its potential before the crisis?", options: ["Had", "Have"], a: "Had" },
                    { speaker: "A", text: "Yes, early inventors ___ already built basic panels.", options: ["had", "have"], a: "had" },
                    { speaker: "B", text: "Innovative technology ___ been evolving so fast.", options: ["has", "had"], a: "has" },
                    { speaker: "A", text: "We ___ been using these gadgets all year.", options: ["have", "had"], a: "have" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER ---
        12: [
            {
                title: "The Wright Brothers' Triumph",
                text: "By the time Wilbur and Orville Wright arrived at Kitty Hawk in 1903, they had already spent years studying the flights of birds and the designs of other inventors. They had been experimenting with gliders since 1899 to understand how to control a machine in the air. Many people at the time believed that human flight was impossible, but the brothers didn't listen to the skeptics. On December 17, 1903, Orville finally flew the 'Flyer' for 12 seconds. Although the flight was short, it changed the world forever. Before that day, humans had only dreamed of soaring through the clouds; after that day, the sky was no longer the limit.",
                questions: [
                    { q: "What had the brothers been doing since 1899?", options: ["Building an airport", "Experimenting with gliders", "Selling bicycles"], a: "Experimenting with gliders" },
                    { q: "What was the general opinion about flight before 1903?", options: ["It was easy", "It was impossible", "Everyone had seen a plane"], a: "It was impossible" },
                    { q: "How long did the first flight last?", options: ["12 minutes", "12 seconds", "12 hours"], a: "12 seconds" },
                    { q: "What had humans done for centuries before 1903?", options: ["Flown to the moon", "Dreamed of soaring", "Used smartphones"], a: "Dreamed of soaring" },
                    { q: "What does the text imply about the brothers?", options: ["Lucky beginners", "Persistent and ignored skeptics", "Invented the telephone"], a: "Persistent and ignored skeptics" }
                ]
            },
            {
                title: "Alexander Graham Bell’s Persistence",
                text: "Alexander Graham Bell is widely known as the creator of the telephone, but his journey to success was long and difficult. By 1876, the year he received his patent, he had been working on 'harmonic telegraphy' for several years. He had wanted to find a way to transmit the human voice through wires. Before his famous success, Bell had faced many technical failures. However, he had a 'lightbulb moment' when he realized that a current could represent sound waves. Since that day, communication technology has been changing at an incredible speed. Today, we have moved from landlines to AI-powered smartphones, but it all began with Bell’s determination.",
                questions: [
                    { q: "When did Bell receive his patent?", options: ["1903", "1876", "1879"], a: "1876" },
                    { q: "What had Bell been researching for several years?", options: ["AI models", "Harmonic telegraphy", "The Wright brothers"], a: "Harmonic telegraphy" },
                    { q: "What happened before Bell’s famous success?", options: ["Became a billionaire", "Faced many failures", "Moved to the moon"], a: "Faced many failures" },
                    { q: "What was Bell’s 'lightbulb moment'?", options: ["Invented the bulb", "Realized current represented sound", "Saw an airplane"], a: "Realized current represented sound" },
                    { q: "How has technology changed since then?", options: ["Stopped changing", "Changing at incredible speed", "Becoming traditional"], a: "Changing at incredible speed" }
                ]
            },
            {
                title: "The Visionary Blueprints of Da Vinci",
                text: "Leonardo da Vinci was a man who was truly ahead of his time. When modern scientists studied his journals centuries after his death, they discovered that he had designed blueprints for helicopters, tanks, and even a type of solar power. Da Vinci had been observing nature and the laws of physics with extreme precision his entire life. However, because the necessary materials and engines hadn't been developed in the 15th century, he could never build his most advanced machines. Nonetheless, his sketches show that he had understood the basic principles of aerodynamics long before the industrial revolution began.",
                questions: [
                    { q: "When did scientists discover the designs?", options: ["15th century", "Centuries after his death", "In 1903"], a: "Centuries after his death" },
                    { q: "What had Da Vinci been doing throughout his life?", options: ["Building robots", "Observing nature and physics", "Writing software"], a: "Observing nature and physics" },
                    { q: "Why couldn't he build his advanced machines?", options: ["No pen", "Materials weren't developed", "He was lazy"], a: "Materials weren't developed" },
                    { q: "What did his sketches prove?", options: ["Understood aerodynamics", "Invented the internet", "Had seen the future"], a: "Understood aerodynamics" },
                    { q: "Which idiom best describes Leonardo?", options: ["Ahead of his time", "Reinventing the wheel", "Rocket science"], a: "Ahead of his time" }
                ]
            },
            {
                title: "The Evolution of AI",
                text: "Artificial Intelligence (AI) is not as new as many people think. Computer scientists have been developing AI models for several decades. In the 1950s, early researchers had already begun to imagine machines that could 'think.' However, for a long time, the software was too simple and the equipment was too slow. By the time the 21st century arrived, the power of processors had increased significantly. Since then, AI has been evolving rapidly, and it is now integrated into our smartphones and apps. Today, we use AI to solve problems that we had once thought were impossible for machines to handle.",
                questions: [
                    { q: "How long has AI been developed?", options: ["One week", "Several decades", "Centuries"], a: "Several decades" },
                    { q: "What had researchers done by the 1950s?", options: ["Built a time machine", "Imagined thinking machines", "Invented the phone"], a: "Imagined thinking machines" },
                    { q: "What was the problem with early AI?", options: ["Too expensive", "Software too simple", "No electricity"], a: "Software too simple" },
                    { q: "What changed in the 21st century?", options: ["Stopped computers", "Processor power increased", "Wrights flew again"], a: "Processor power increased" },
                    { q: "How is AI used today?", options: ["Reinvent the wheel", "Solve complex problems", "Stop technology"], a: "Solve complex problems" }
                ]
            },
            {
                title: "Thomas Edison’s Laboratory",
                text: "Thomas Edison is often called the greatest inventor in history. Before he successfully created a long-lasting lightbulb in 1879, he had tried over a thousand different materials for the filament. He famously said that he hadn't failed, but that he had simply found a thousand ways that didn't work. Edison and his team had been working in his laboratory in Menlo Park for years before they achieved their breakthroughs. Since the invention of the lightbulb, electricity has been powering our homes and changing the way we live.",
                questions: [
                    { q: "What happened in 1879?", options: ["Edison flew", "Lightbulb created", "AI invented"], a: "Lightbulb created" },
                    { q: "How many materials had he tried?", options: ["Ten", "Over a thousand", "None"], a: "Over a thousand" },
                    { q: "What was his philosophy on failure?", options: ["Failure is the end", "Finding ways that didn't work", "Never failed"], a: "Finding ways that didn't work" },
                    { q: "How long had the team been working?", options: ["For years", "For one day", "Since 2010"], a: "For years" },
                    { q: "What has electricity been doing since then?", options: ["Disappearing", "Powering homes", "Reinventing the wheel"], a: "Powering homes" }
                ]
            },
            {
                title: "From Blueprints to Reality",
                text: "Every great machine starts with a blueprint. A blueprint is a detailed technical drawing that guides the construction process. For example, before engineers built the first modern computer, they had spent months designing the hardware and writing the basic code. Lately, software engineers have been using digital blueprints to create complex AI models more efficiently. These creators must think about every detail, from the tools they need to the potential errors they might encounter. If they didn't follow the blueprints, many of the gadgets we use today would have failed during development.",
                questions: [
                    { q: "What is a blueprint?", options: ["A blue car", "Technical drawing", "Computer virus"], a: "Technical drawing" },
                    { q: "What had engineers done before the first computer?", options: ["Went to the beach", "Designed hardware and code", "Saw a robot"], a: "Designed hardware and code" },
                    { q: "What have engineers used lately?", options: ["Paper only", "Digital blueprints", "Ancient tools"], a: "Digital blueprints" },
                    { q: "What must creators think about?", options: ["Price only", "Tools and potential errors", "Lunch"], a: "Tools and potential errors" },
                    { q: "What would happen without blueprints?", options: ["Stylish gadgets", "Gadgets would have failed", "Faster innovation"], a: "Gadgets would have failed" }
                ]
            },
            {
                title: "Ancient Inventions",
                text: "The Romans had developed complex systems for plumbing and architecture! However, some ancient gadgets remain a mystery. Take the Antikythera mechanism; it was an ancient computer designed to track the stars. It was so advanced that it was practically ahead of its time by a thousand years. Since its discovery, scientists have been trying to understand how the Greeks built such a complicated machine without modern tools. It reminds us that humanity has been innovating since the beginning of history.",
                questions: [
                    { q: "What did the Romans develop?", options: ["Smartphones", "Plumbing", "AI"], a: "Plumbing" },
                    { q: "What was the Antikythera mechanism?", options: ["Airplane", "Ancient computer", "Modern software"], a: "Ancient computer" },
                    { q: "Why was it 'ahead of its time'?", options: ["Built last year", "Incredibly advanced", "Made of gold"], a: "Incredibly advanced" },
                    { q: "What have scientists been doing?", options: ["Hiding it", "Trying to understand it", "Reinventing the wheel"], a: "Trying to understand it" },
                    { q: "What does the text say of humanity?", options: ["Innovated since 1903", "Innovating since the beginning", "Stopping innovation"], a: "Innovating since the beginning" }
                ]
            },
            {
                title: "The Speed of Change",
                text: "In the 21st century, technology has been changing so fast that it is sometimes difficult to keep up. Before the first smartphone was launched in 2007, people had used separate devices for music, photography, and calls. Now, all these tools are inside one small gadget. For young people, or 'digital natives,' using a computer is not rocket science; it is a natural part of life. Nonetheless, we must remember the creators who had worked in cold laboratories and small workshops centuries ago. Their 'lightbulb moments' were the foundation of our modern universe.",
                questions: [
                    { q: "How has technology changed in the 21st century?", options: ["Slowly", "Hard to keep up", "Hasn't changed"], a: "Hard to keep up" },
                    { q: "What had people done before 2007?", options: ["Used separate devices", "Lived in space", "Never spoken"], a: "Used separate devices" },
                    { q: "What characterizes our world?", options: ["Digital and connected", "Reinventing wheel", "19th century"], a: "Digital and connected" },
                    { q: "What does 'not rocket science' mean?", options: ["Using computers is easy", "They are scientists", "Don't like computers"], a: "Using computers is easy" },
                    { q: "Why remember past creators?", options: ["They were rich", "Foundations of our world", "Invented the wheel"], a: "Foundations of our world" }
                ]
            },
            {
                title: "The Future of Medicine",
                text: "Biotech companies have been using AI models to predict diseases before symptoms appear. By the time this technology becomes mainstream, doctors will have treated patients much more effectively. Before these innovations, medicine had been focusing on cure rather than prevention. Now, the blueprint for human health is more detailed than ever. It is not rocket science to see that digital health will be ahead of its time, providing a lightbulb moment for the medical universe.",
                questions: [
                    { q: "What have biotech companies been using?", options: ["Stethoscopes", "AI models", "Traditional tools"], a: "AI models" },
                    { q: "What had medicine focused on before?", options: ["Prevention", "Cure", "Computers"], a: "Cure" },
                    { q: "How is the blueprint for health described?", options: ["Missing", "Detailed", "Small"], a: "Detailed" },
                    { q: "What will digital health be?", options: ["Behind its time", "Ahead of its time", "Rocket science"], a: "Ahead of its time" },
                    { q: "What does the writer believe about digital health?", options: ["It's a failure", "It's a lightbulb moment", "It's boring"], a: "It's a lightbulb moment" }
                ]
            },
            {
                title: "Automation in Factories",
                text: "Factories have been evolving since the Industrial Revolution. Before modern robots were introduced, workers had performed every task by hand. This had been a very slow process for centuries. Recently, automation has been changing the global economy. Many creators have been designing software to control massive machines. While some fear that robots will reinvent the wheel, others believe that these tools are the most useful innovations in our timeline.",
                questions: [
                    { q: "When have factories been evolving?", options: ["Since 2007", "Since Industrial Revolution", "Since yesterday"], a: "Since Industrial Revolution" },
                    { q: "What had workers done before robots?", options: ["Performed tasks by hand", "Used AI", "Flew planes"], a: "Performed tasks by hand" },
                    { q: "What has been changing the economy lately?", options: ["Traditional tools", "Automation", "Blueprints"], a: "Automation" },
                    { q: "What have creators been designing?", options: ["Hand tools", "Software", "Manuals"], a: "Software" },
                    { q: "What is the status of these innovations?", options: ["Most useful", "Slowest", "Behind time"], a: "Most useful" }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER (10 items) ---
        13: [
            {
                title: "The Wright Brothers’ Success",
                audio: "Before the Wright Brothers flew their first powered airplane in 1903, they had spent years studying the flights of birds. They had been building and testing gliders since 1899 at Kitty Hawk. Many people had told them that human flight was impossible, but they didn't listen to the skeptics. By the time Orville finally took off, the brothers had already solved most of the control problems that other inventors had faced. Technology has been changing incredibly fast since then.",
                questions: [
                    { q: "What had the brothers been doing since 1899?", options: ["Traveling", "Building gliders", "Writing software"], a: "Building gliders" },
                    { q: "What had skeptics told them?", options: ["Too expensive", "Flight was impossible", "Birds couldn't fly"], a: "Flight was impossible" },
                    { q: "When did the first flight happen?", options: ["1899", "1903", "1876"], a: "1903" },
                    { q: "What had they done before takeoff?", options: ["Solved control problems", "Bought a computer", "Reinvented wheel"], a: "Solved control problems" },
                    { q: "How has technology changed since?", options: ["Stopped", "Changing incredibly fast", "Become traditional"], a: "Changing incredibly fast" }
                ]
            },
            {
                title: "Communication Evolution",
                audio: "Communication has undergone a massive transformation. For centuries, people had used letters and messengers to send information. By the time Alexander Graham Bell invented the telephone, he had been researching sound waves for over a decade. He had already developed the blueprint for the telephone when he had a lightbulb moment regarding electricity. Lately, we have been using the internet and smartphones for almost every interaction.",
                questions: [
                    { q: "What was used for centuries?", options: ["AI", "Letters/Messengers", "Telegrams"], a: "Letters/Messengers" },
                    { q: "How long had Bell researched sound?", options: ["One year", "Over a decade", "Two days"], a: "Over a decade" },
                    { q: "What had he developed first?", options: ["A computer", "The telephone blueprint", "New airplane"], a: "The telephone blueprint" },
                    { q: "What have we used lately?", options: ["Landlines", "Internet/Smartphones", "Blueprints"], a: "Internet/Smartphones" },
                    { q: "What was impossible before the 19th century?", options: ["Coding", "Hearing a voice from away", "Robots"], a: "Hearing a voice from away" }
                ]
            },
            {
                title: "The Lab Routine",
                audio: "The lead scientist looked very tired this morning. He had been working in the laboratory all night to finish the AI model. Before he took a break, he had already checked the code for errors five times. He realized that the equipment had broken down twice during the experiment. Since Monday, the team has been trying to find a solution. They have been seeking better tools to improve performance. It is not rocket science, but it requires patience.",
                questions: [
                    { q: "Why did he look tired?", options: ["Working all night", "Playing games", "Was at a party"], a: "Working all night" },
                    { q: "How many times was the code checked?", options: ["Once", "Five times", "One hundred"], a: "Five times" },
                    { q: "What happened to the equipment?", options: ["Finished task", "Broken down twice", "Flew away"], a: "Broken down twice" },
                    { q: "What has been done since Monday?", options: ["Looking for solution", "Sleeping", "Building house"], a: "Looking for solution" },
                    { q: "What is the scientist's opinion?", options: ["Impossible", "Not rocket science", "Too simple"], a: "Not rocket science" }
                ]
            },
            {
                title: "Da Vinci the Visionary",
                audio: "Leonardo da Vinci was a creator who was truly ahead of his time. He had designed complex machines long before the technology to build them existed. He had been observing the anatomy of birds and the laws of the universe with incredible detail. By the time he died, he had already drawn blueprints for a helicopter and a tank. Since the 20th century, engineers have been using his ideas to build real working models.",
                questions: [
                    { q: "Why was he 'ahead of his time'?", options: ["Was late", "Technology couldn't build it yet", "Lived in 1903"], a: "Technology couldn't build it yet" },
                    { q: "What had he observed?", options: ["AI", "Birds and laws of universe", "Code"], a: "Birds and laws of universe" },
                    { q: "What had he drawn?", options: ["Smartphone", "Helicopter/Tank blueprints", "Telephone"], a: "Helicopter/Tank blueprints" },
                    { q: "What happened in the 20th century?", options: ["Using his ideas", "Forgotten name", "Reinvented wheel"], a: "Using his ideas" },
                    { q: "Where can innovation start?", options: ["Only lab", "Simple drawing/dream", "Factory"], a: "Simple drawing/dream" }
                ]
            },
            {
                title: "The Software Update",
                audio: "The company has been developing this software since 2015. Before they launched the current version, they had already tested ten different AI models. The programmers had been writing the code for two years before they finally found the best solution. Lately, they have been following the latest trends. However, yesterday they realized they had forgotten to update the security protocols.",
                questions: [
                    { q: "How long has it been developed?", options: ["Since 1903", "Since 2015", "Yesterday"], a: "Since 2015" },
                    { q: "What happened before launch?", options: ["Tested ten AI models", "Sold company", "Built airplane"], a: "Tested ten AI models" },
                    { q: "How long was the code written?", options: ["Two months", "Two years", "Two decades"], a: "Two years" },
                    { q: "What was forgotten?", options: ["Buy computer", "Update security", "Eat lunch"], a: "Update security" },
                    { q: "What has the team done all day?", options: ["Fixed the error", "Celebrated", "Gone home"], a: "Fixed the error" }
                ]
            },
            {
                title: "Exploration and Discovery",
                audio: "Since the beginning of time, humanity has been exploring the unknown. Before we sent the first man to space, scientists had been studying the stars for centuries. They had already built powerful telescopes. By the time the first rocket left the Earth, researchers had already calculated the distance to the moon. Lately, space agencies have been sending robots to other planets to seek signs of life.",
                questions: [
                    { q: "How long have stars been studied?", options: ["Few decades", "Centuries", "Since 2020"], a: "Centuries" },
                    { q: "What was built before space flight?", options: ["Airplanes", "Powerful telescopes", "Smartwatches"], a: "Powerful telescopes" },
                    { q: "What was calculated first?", options: ["Price of moon", "Distance to moon", "Creator name"], a: "Distance to moon" },
                    { q: "What is happening lately?", options: ["Sending robots", "Stopped exploring", "Reinventing wheel"], a: "Sending robots" },
                    { q: "What is innovation according to text?", options: ["Difficult code", "Tool to dream big", "Lightbulb"], a: "Tool to dream big" }
                ]
            },
            {
                title: "The Industrial Revolution",
                audio: "The Industrial Revolution was a period of massive innovation. Before it began, people had worked mostly by hand in small workshops. They had been using simple tools for generations. Then, creators like James Watt invented the steam engine. By 1850, factories had already replaced many traditional methods. Since then, the world has been moving toward total automation.",
                questions: [
                    { q: "How did people work before?", options: ["AI", "By hand", "Factories"], a: "By hand" },
                    { q: "What was used for generations?", options: ["Computers", "Simple tools", "Airplanes"], a: "Simple tools" },
                    { q: "What happened by 1850?", options: ["Factories replaced methods", "Innovation stopped", "Smartphones started"], a: "Factories replaced methods" },
                    { q: "What has the world done since?", options: ["Moved toward automation", "Back to tools", "Reinvented wheel"], a: "Moved toward automation" },
                    { q: "Why was it a challenge?", options: ["Boredom", "Adapting to new environment", "Too slow"], a: "Adapting to new environment" }
                ]
            },
            {
                title: "The Ancient Computer",
                audio: "Did you know that the Greeks had built a computer over two thousand years ago? It is called the Antikythera mechanism. Before it was discovered in a shipwreck, scientists had no idea that such advanced equipment existed. The Greeks had been using it to track the movements of the planets. Since its discovery, researchers have been using X-rays to look inside the machine.",
                questions: [
                    { q: "When was it built?", options: ["1903", "Over 2000 years ago", "18th century"], a: "Over 2000 years ago" },
                    { q: "Where was it found?", options: ["Library", "Shipwreck", "Laboratory"], a: "Shipwreck" },
                    { q: "What was it used for?", options: ["Write code", "Track planets", "Fly"], a: "Track planets" },
                    { q: "What is used to study it lately?", options: ["Blueprints", "X-rays", "Smartwatches"], a: "X-rays" },
                    { q: "Why is it impressive?", options: ["Software", "Sophisticated without modern tools", "AI"], a: "Sophisticated without modern tools" }
                ]
            },
            {
                title: "The Birth of the Internet",
                audio: "Before the World Wide Web became popular in the 1990s, scientists had been sharing data through closed networks for years. They had already developed the basic communication protocols in the 1970s. Lately, developers have been creating decentralized systems. It is not rocket science to understand that the internet has been changing everything since its inception.",
                questions: [
                    { q: "When did the Web become popular?", options: ["1970s", "1990s", "2007"], a: "1990s" },
                    { q: "What had scientists been doing before?", options: ["Gaming", "Sharing data in closed networks", "Building robots"], a: "Sharing data in closed networks" },
                    { q: "When were protocols developed?", options: ["1990s", "1970s", "1876"], a: "1970s" },
                    { q: "What are developers doing lately?", options: ["Landlines", "Decentralized systems", "Manual blueprints"], a: "Decentralized systems" },
                    { q: "What has the internet been doing?", options: ["Stopping", "Changing everything", "Ending innovation"], a: "Changing everything" }
                ]
            },
            {
                title: "Modern Lab Safety",
                audio: "Safety standards have been increasing since the last accident. Before the new rules were implemented, the staff had been working without helmets. They had already experienced a minor gas leak before the manager changed the protocols. Now, sensors have been monitoring the environment all day to prevent errors.",
                questions: [
                    { q: "What has been increasing lately?", options: ["Accidents", "Safety standards", "Errors"], a: "Safety standards" },
                    { q: "What had been missing before?", options: ["Computers", "Helmets", "Software"], a: "Helmets" },
                    { q: "What happened before the protocol change?", options: ["Minor gas leak", "Robot built", "Flight took off"], a: "Minor gas leak" },
                    { q: "What has been monitoring the lab?", options: ["Humans", "Sensors", "Blueprints"], a: "Sensors" },
                    { q: "How long have they monitored?", options: ["One hour", "All day", "Since 1903"], a: "All day" }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT ---
        14: [
            {
                title: "My Science Project",
                text: "I am very proud of my science project. I [1] (have been working / had been working) on it all week. Before the presentation today, I [2] (had already tested / have already tested) the robot ten times. My teacher was surprised because she [3] (had never seen / has never seen) a project so detailed. I explained that I [4] (had researched / have been researching) AI models for months. It was not [5] (rocket science / reinventing the wheel), but it was difficult!",
                answers: ["have been working", "had already tested", "had never seen", "had researched", "rocket science"]
            },
            {
                title: "The History of Flight",
                text: "The Wright Brothers are legendary. By the time they built the 'Flyer', they [1] (had been experimenting / have been experimenting) with gliders for a long time. They [2] (had failed / have failed) many times before they finally succeeded. Since that day in 1903, the way we travel [3] (has been changing / had been changing) fast. Before their invention, people [4] (had only dreamed / have only dreamed) of flying. They were truly [5] (ahead of their time / rocket science).",
                answers: ["had been experimenting", "had failed", "has been changing", "had only dreamed", "ahead of their time"]
            },
            {
                title: "The Broken Machine",
                text: "We had a problem yesterday. The main [1] (machine / universe) had broken down. We [2] (had been waiting / have been waiting) for the results all afternoon when it happened. The engineer realized that he [3] (had forgotten / has forgotten) to check the electricity. Lately, the [4] (equipment / blueprint) has been giving us many problems. We need to find a [5] (solution / creator) soon!",
                answers: ["machine", "had been waiting", "had forgotten", "equipment", "solution"]
            },
            {
                title: "A Moment of Inspiration",
                text: "Thomas Edison [1] (had tried / has tried) many materials before he invented the lightbulb. He [2] (had been researching / has been researching) for years in his lab. Suddenly, he had a [3] (lightbulb moment / rocket science) and found the right filament. Since then, his [4] (invention / creator) has been changing the world. It’s amazing how [5] (innovation / creativity) can power our homes today.",
                answers: ["had tried", "had been researching", "lightbulb moment", "invention", "innovation"]
            },
            {
                title: "Software Development",
                text: "My sister is a programmer. She [1] (has been coding / had been coding) a new game since January. Before she started this project, she [2] (had developed / has developed) three other apps. She says it is not [3] (rocket science / reinventing the wheel), but she still works hard. She [4] (had already written / has already written) most of the code, but she still needs to test the [5] (software / hardware) for errors.",
                answers: ["has been coding", "had developed", "rocket science", "had already written", "software"]
            },
            {
                title: "The Architect's Blueprint",
                text: "The engineer looked at the [1] (blueprint / code) carefully. He [2] (had been designing / has been designing) the building for months. Before he began, he [3] (had already consulted / have already consulted) other experts. Lately, he [4] (has been using / had been using) new AI models. He doesn't want to [5] (reinvent the wheel / be ahead of his time); he just wants to do a good job.",
                answers: ["blueprint", "had been designing", "had already consulted", "has been using", "reinvent the wheel"]
            },
            {
                title: "Exploring the Universe",
                text: "Humans [1] (have been exploring / had been exploring) the stars for a long time. Before we had modern telescopes, astronomers [2] (had studied / have studied) the sky with simple tools. They [3] (had already discovered / have already discovered) many planets before the 20th century. Lately, technology [4] (has been evolving / had been evolving) so fast. It makes you feel like the [5] (universe / software) is infinite.",
                answers: ["have been exploring", "had studied", "had already discovered", "has been evolving", "universe"]
            },
            {
                title: "Alexander Graham Bell",
                text: "When Alexander Graham Bell [1] (invented / has invented) the telephone, he changed history. He [2] (had been working / has been working) on the project for years. Many other [3] (creators / blueprints) had failed before. Since his discovery, communication [4] (has been connecting / had been connecting) people everywhere. It was a true [5] (lightbulb moment / rocket science) for humanity.",
                answers: ["invented", "had been working", "creators", "has been connecting", "lightbulb moment"]
            },
            {
                title: "Digital Evolution",
                text: "The world [1] (has been moving / had been moving) toward total automation since the internet was born. Before the first smartphone, people [2] (had used / have used) separate devices. Lately, we [3] (have been integrating / had been integrating) everything into one gadget. It is not [4] (rocket science / reinventing the wheel) to see that technology is [5] (ahead of its time / behind its time).",
                answers: ["has been moving", "had used", "have been integrating", "rocket science", "ahead of its time"]
            },
            {
                title: "Research and Cures",
                text: "Medical researchers [1] (have been seeking / had been seeking) a cure for the virus all year. Before the breakthrough, they [2] (had performed / have performed) thousands of tests. They [3] (had already analyzed / have already analyzed) the data before the funding arrived. The process [4] (has been improving / had been improving) lately. It is a vital part of our [5] (innovation / equipment) timeline.",
                answers: ["have been seeking", "had performed", "had already analyzed", "has been improving", "innovation"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT ---
        15: [
            {
                title: "Science Project Success",
                audio: "Albert had already finished the science project before Celine arrived. He has been studying all day long. He is very proud of the robot he built.",
                text: "Albert had already [1] the science project before Celine [2]. He has been [3] all day long. He is very proud of the [4] he [5].",
                answers: ["finished", "arrived", "studying", "robot", "built"]
            },
            {
                title: "Technological Speed",
                audio: "Technology has been changing very fast lately. Before 1903, the Wright Brothers had experimented with gliders. They had dreamed of flying for centuries. Now, we use modern software.",
                text: "Technology has been [1] very fast lately. Before 1903, the Wright Brothers had [2] with gliders. They had [3] of flying for [4]. Now, we use modern [5].",
                answers: ["changing", "experimented", "dreamed", "centuries", "software"]
            },
            {
                title: "Bell’s Invention",
                audio: "Alexander Graham Bell invented the telephone in 1876. He had worked on it for years. Lately, we have been using smartphones. Innovation never stops in our universe.",
                text: "Alexander Graham Bell [1] the telephone in 1876. He had [2] on it for years. Lately, we have been [3] smartphones. Innovation [4] stops in our [5].",
                answers: ["invented", "worked", "using", "never", "universe"]
            },
            {
                title: "The Bus Wait",
                audio: "I have been waiting for the bus since 8 AM. I had forgotten my umbrella at home. It has been raining all morning. I wish I had checked the weather.",
                text: "I have been [1] for the bus since 8 AM. I had [2] my umbrella at home. It has been [3] all morning. I wish I had [4] the [5].",
                answers: ["waiting", "forgotten", "raining", "checked", "weather"]
            },
            {
                title: "Building the Machine",
                audio: "The engineer had designed the blueprint before he built the machine. He has been coding for three hours. He had a lightbulb moment when he solved the problem.",
                text: "The engineer had [1] the [2] before he built the machine. He has been [3] for three hours. He had a [4] moment when he [5] the problem.",
                answers: ["designed", "blueprint", "coding", "lightbulb", "solved"]
            },
            {
                title: "The Cure Discovery",
                audio: "The scientist has been researching a cure since January. She had discovered the error before the test. She had tried many times. Now, she has succeeded in her work.",
                text: "The scientist has been [1] a cure since January. She had [2] the error before the [3]. She had [4] many times. Now, she has [5] in her work.",
                answers: ["researching", "discovered", "test", "tried", "succeeded"]
            },
            {
                title: "Rocket Science",
                audio: "It is not rocket science to use this equipment. You must follow the code. We have been exploring new ideas. We had already found the answer.",
                text: "It is not [1] science to use this [2]. You must follow the [3]. We have been [4] new ideas. We had [5] found the answer.",
                answers: ["rocket", "equipment", "code", "exploring", "already"]
            },
            {
                title: "Da Vinci’s Physics",
                audio: "Da Vinci was ahead of his time. He had drawn plans for a helicopter. Engineers have been studying his work. He had understood the laws of physics.",
                text: "Da Vinci was [1] of his time. He had [2] plans for a [3]. Engineers have been [4] his work. He had [5] the laws of physics.",
                answers: ["ahead", "drawn", "helicopter", "studying", "understood"]
            },
            {
                title: "AI Development",
                audio: "Computer scientists have been developing AI for decades. They had already imagined thinking machines in the 1950s. Since then, technology has been evolving quickly.",
                text: "Computer scientists [1] been developing AI for decades. They had [2] [3] thinking machines in the 1950s. Since then, technology has been [4] [5].",
                answers: ["have", "already", "imagined", "evolving", "quickly"]
            },
            {
                title: "Industrial Changes",
                audio: "Before the steam engine was invented, people had used simple tools for generations. Now, factories have been using automation all year. Innovation has been helping us grow.",
                text: "Before the steam engine was [1], people [2] used simple [3] for generations. Now, factories have been [4] automation [5] year.",
                answers: ["invented", "had", "tools", "using", "all"]
            }
        ]
    }
});