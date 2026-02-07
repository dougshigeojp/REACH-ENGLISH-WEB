/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */

window.initExercise({
    id: "em1-1-3",
    grade: "EM 1st Grade",
    bimester: "1",
    chapter: "3",
    title: "Innovation and Discoveries",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES (40 ITEMS) ---
        1: [
            { words: ["experimenting", "night", "with", "was", "Celine", "software", "last"], correct: "Celine was experimenting with software last night" },
            { words: ["only", "artists", "we", "to", "believe", "creative", "used", "were"], correct: "We used to believe only artists were creative" },
            { words: ["penicillin", "Fleming", "discovered", "accident", "by"], correct: "Fleming discovered penicillin by accident" },
            { words: ["was", "when", "I", "working", "he", "discovery", "a", "made"], correct: "While I was working, he made a discovery" },
            { words: ["think", "I", "to", "used", "boring", "engineering", "was"], correct: "I used to think engineering was boring" },
            { words: ["doing", "what", "last", "were", "you", "night"], correct: "What were you doing last night" },
            { words: ["breakthrough", "amazing", "an", "had", "they", "month", "last"], correct: "Last month they had an amazing breakthrough" },
            { words: ["not", "the", "answer", "phone", "did", "you", "why"], correct: "Why did you not answer the phone" },
            { words: ["prototype", "creating", "was", "she", "a", "her", "project", "for"], correct: "She was creating a prototype for her project" },
            { words: ["outside", "the", "box", "used", "thinking", "to", "be", "rare"], correct: "Thinking outside the box used to be rare" },
            { words: ["lecture", "attend", "the", "did", "you", "yesterday"], correct: "Did you attend the lecture yesterday" },
            { words: ["was", "while", "he", "studying", "the", "lights", "out", "went"], correct: "While he was studying, the lights went out" },
            { words: ["complicated", "bureaucracy", "the", "be", "to", "used", "more"], correct: "The bureaucracy used to be more complicated" },
            { words: ["discovery", "fire", "of", "changed", "history", "the", "human"], correct: "The discovery of fire changed human history" },
            { words: ["writing", "down", "was", "I", "when", "the", "idea", "sparked", "words"], correct: "I was writing down words when the idea sparked" },
            { words: ["used", "the", "scientist", "in", "to", "work", "laboratory", "the"], correct: "The scientist used to work in the laboratory" },
            { words: ["progress", "we", "making", "good", "were", "yesterday"], correct: "We were making good progress yesterday" },
            { words: ["educated", "speaker", "the", "very", "was"], correct: "The speaker was very educated" },
            { words: ["experiment", "a", "success", "the", "was"], correct: "The experiment was a success" },
            { words: ["used", "to", "have", "we", "computers", "not"], correct: "We used not to have computers" },
            { words: ["watching", "they", "were", "a", "movie", "when", "called", "he"], correct: "They were watching a movie when he called" },
            { words: ["college", "my", "sister", "to", "goes", "in", "São Paulo"], correct: "My sister goes to college in São Paulo" },
            { words: ["fabric", "soft", "this", "is", "made", "of"], correct: "This is made of soft fabric" },
            { words: ["how", "work", "the", "did", "machine"], correct: "How did the machine work" },
            { words: ["studying", "was", "he", "when", "the", "found", "he", "solution"], correct: "He was studying when he found the solution" },
            { words: ["used", "to", "believe", "in", "people", "monsters"], correct: "People used to believe in monsters" },
            { words: ["a", "great", "had", "I", "for", "idea", "an", "app"], correct: "I had a great idea for an app" },
            { words: ["looking", "we", "at", "were", "a", "screen", "the", "in", "lab"], correct: "We were looking at a screen in the lab" },
            { words: ["the", "design", "did", "like", "you"], correct: "Did you like the design" },
            { words: ["creativity", "and", "observation", "lives", "millions", "of", "saved"], correct: "Creativity and observation saved millions of lives" },
            { words: ["used", "to", "heavy", "be", "mobile", "phones"], correct: "Mobile phones used to be heavy" },
            { words: ["what", "Fleming", "doing", "was", "his", "before", "vacation"], correct: "What was Fleming doing before his vacation" },
            { words: ["prototype", "they", "a", "built", "to", "the", "test", "engine"], correct: "They built a prototype to test the engine" },
            { words: ["using", "was", "I", "my", "phone", "while", "walking"], correct: "I was using my phone while walking" },
            { words: ["innovation", "key", "is", "to", "modern", "solving", "problems"], correct: "Innovation is key to solving modern problems" },
            { words: ["used", "to", "read", "she", "comics", "every", "day"], correct: "She used to read comics every day" },
            { words: ["an", "important", "skill", "is", "listening"], correct: "Listening is an important skill" },
            { words: ["did", "hear", "you", "the", "news"], correct: "Did you hear the news" },
            { words: ["was", "growing", "mold", "in", "the", "dish"], correct: "Mold was growing in the dish" },
            { words: ["a", "great", "invention", "telephone", "the", "was"], correct: "The telephone was a great invention" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES (40 ITEMS) ---
        2: [
            { lines: ["Sorry! I was experimenting with a new design software.", "What were you doing last night, Celine?", "I wanted to create a prototype for my project.", "You didn't answer your phone!"], order: [1, 3, 0, 2] },
            { lines: ["Really? That's great!", "Last month, we had an amazing breakthrough in my engineering class.", "The power of imagination leads to creativity.", "We designed better options to collect water."], order: [1, 0, 3, 2] },
            { lines: ["I used to think engineering was boring.", "Exactly. We used to believe only artists were creative.", "But now I see it's all about creativity.", "But scientists need it too."], order: [0, 2, 1, 3] },
            { lines: ["By the way, did you attend the lecture about AI yesterday?", "Yes, the speaker was very educated.", "No, I missed it. Was it good?", "It was excellent! He explained complex ideas easily."], order: [0, 2, 1, 3] },
            { lines: ["What was Fleming doing in his laboratory?", "He was experimenting with bacteria.", "Did he discover penicillin then?", "Yes, he discovered it by accident after his vacation."], order: [0, 1, 2, 3] },
            { lines: ["What is Albert's dad holding in this old photo?", "It's an old mobile phone. It looks like a brick!", "They used to be so huge and heavy.", "Technology progresses so fast, doesn't it?"], order: [0, 1, 2, 3] },
            { lines: ["Leonardo da Vinci was a true genius.", "He used to draw sketches of machines that didn't exist yet.", "Like helicopters and tanks, right?", "Yes. He had a very vivid imagination."], order: [0, 1, 2, 3] },
            { lines: ["Why is the floor wet?", "It was raining while I was walking home.", "Did you use your umbrella?", "No, I had forgotten it at school."], order: [0, 1, 2, 3] },
            { lines: ["I was using my phone to edit a movie earlier.", "While you were walking here?", "Yes! Technology is amazing today.", "It definitely is. Everything is so mobile."], order: [0, 1, 2, 3] },
            { lines: ["What did people use to do before penicillin?", "They used to die from simple infections.", "That's right. It was a very dangerous time.", "Innovation really saved millions of lives."], order: [0, 1, 2, 3] },
            { lines: ["Did you find your keys?", "Yes, I found them while I was cleaning the house.", "Where were they?", "They were under the sofa the whole time!"], order: [0, 2, 1, 3] },
            { lines: ["I used to play the piano every day.", "Why did you stop?", "Because I started studying for college.", "You should practice again sometimes."], order: [0, 1, 2, 3] },
            { lines: ["One question sparked a great debate in class.", "What was the topic?", "Whether AI will replace human creativity.", "That sounds like a very modern challenge."], order: [0, 1, 2, 3] },
            { lines: ["My sister goes to college in São Paulo.", "What is she studying?", "She is studying textile engineering.", "Oh, she probably knows a lot about fabric!"], order: [0, 1, 2, 3] },
            { lines: ["Don't be afraid to fail.", "I am nervous about my new prototype.", "Every experiment is an opportunity to learn.", "You're right. I need to stay motivated."], order: [1, 0, 2, 3] },
            { lines: ["Look at this blueprint!", "Who created this design?", "A very famous architect from Brasília.", "It's beautiful and very innovative."], order: [0, 1, 2, 3] },
            { lines: ["Did you see the news about the new discovery?", "No, I was sleeping when it happened.", "A scientist found a solution for plastic pollution!", "That is a massive breakthrough!"], order: [0, 1, 2, 3] },
            { lines: ["Why didn't you finish the task?", "My computer crashed while I was writing the code.", "Did you save your progress?", "No, I hadn't. I lost everything."], order: [0, 1, 2, 3] },
            { lines: ["I didn't use to like vegetables.", "And now?", "Now I love them! I learned how to cook.", "Learning to cook is a useful skill."], order: [0, 1, 2, 3] },
            { lines: ["What were you doing at 8 PM?", "I was studying anatomy and flight.", "Like Leonardo da Vinci?", "Yes, his imagination inspires me."], order: [0, 1, 2, 3] },
            { lines: ["Did you enjoy the lecture yesterday?", "Yes, it was very effective for my studies.", "Was the speaker the guy from the YouTube channel?", "No, it was a different professor from the college."], order: [0, 1, 2, 3] },
            { lines: ["We must fight against prejudice.", "I agree. Respect is essential.", "Our school is starting a new campaign.", "That is a great initiative for progress."], order: [0, 1, 2, 3] },
            { lines: ["Did you use a pencil to draw this?", "No, I used a digital tool on my tablet.", "It looks so traditional!", "Thanks. I spent hours on the design."], order: [0, 1, 2, 3] },
            { lines: ["How did the robot move?", "It was walking while we were watching it.", "Did it fall down?", "No, it was very efficient."], order: [0, 1, 2, 3] },
            { lines: ["Don't reinvent the wheel.", "I am trying to build a new type of computer.", "Use the existing blueprints first.", "You have a point. I will review them."], order: [1, 0, 2, 3] },
            { lines: ["I heard a loud noise last night.", "What were you doing?", "I was reading a book about the universe.", "Maybe it was just the wind from the storm."], order: [0, 1, 2, 3] },
            { lines: ["Is this fabric made of cotton?", "Yes, it was created in a textile factory.", "It's very soft and comfortable.", "I bought it for my new costume."], order: [0, 1, 2, 3] },
            { lines: ["Did you know that Columbus didn't discover America first?", "Really? Who did then?", "I read an article about other explorers today.", "History is full of surprises!"], order: [0, 1, 2, 3] },
            { lines: ["What is a prototype?", "It's a first model of an invention.", "Correct. Why do we need it?", "To test if the idea works in reality."], order: [0, 1, 2, 3] },
            { lines: ["I wish I could fly.", "Humans used to dream of that for centuries.", "And now we have airplanes and rockets.", "Innovation truly changes everything."], order: [0, 1, 2, 3] },
            { lines: ["Was the experiment a success?", "Yes! We found a solution to the problem.", "While you were working in the lab?", "Yes, we were testing new chemicals all afternoon."], order: [0, 1, 2, 3] },
            { lines: ["Why were you late for the meeting?", "I was waiting for the bus when it started raining.", "Did you have your coat?", "No, I had left it at home."], order: [0, 1, 2, 3] },
            { lines: ["I used to be very shy.", "What changed your mind?", "I started taking drama classes.", "That was a great strategy to improve!"], order: [0, 1, 2, 3] },
            { lines: ["Did you write down the words?", "Yes, while the professor was talking.", "Is your pronunciation getting better?", "Yes, I am practicing every day."], order: [0, 1, 2, 3] },
            { lines: ["I had a lightbulb moment!", "Tell me more!", "I know how to fix the broken machine.", "You are very resourceful, Celine."], order: [0, 1, 2, 3] },
            { lines: ["Did you buy this car?", "Yes, I bought it last week.", "Did it use to belong to a collector?", "Yes, it is a very rare model."], order: [0, 1, 2, 3] },
            { lines: ["Why are your eyes red?", "I was coding for ten hours straight.", "You need to take care of yourself!", "I know, but I wanted to finish the software."], order: [0, 1, 2, 3] },
            { lines: ["Do you understand the grammar?", "Not yet. I was sleeping during that part of the lecture.", "You should review the book tonight.", "I will. I want to pass the exam."], order: [0, 1, 2, 3] },
            { lines: ["This building is centuries ahead of its time.", "Who designed it?", "A very innovative architect from the 1800s.", "It's amazing that it's still standing."], order: [0, 1, 2, 3] },
            { lines: ["Did you find your phone?", "Yes, I found it while I was looking for my pen.", "Where was it?", "In the pocket of my old jacket."], order: [0, 1, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS (40 ITEMS) ---
        3: [
            { q: "Were you experimenting with software last night?", options: ["Yes, I was.", "Yes, I were.", "Yes, I was been.", "Yes, I am."], a: "Yes, I was." },
            { q: "Did he use to like engineering?", options: ["No, he didn't use to.", "No, he didn't used to.", "No, he wasn't.", "No, he used not."], a: "No, he didn't use to." },
            { q: "Was the mold growing in the dish?", options: ["Yes, it was.", "Yes, it were.", "Yes, it grew.", "Yes, it were growing."], a: "Yes, it was." },
            { q: "Did Fleming discover penicillin?", options: ["Yes, he did.", "Yes, he discovered.", "Yes, he discovers.", "Yes, he was discover."], a: "Yes, he did." },
            { q: "Were they watching a movie when you called?", options: ["Yes, they were.", "Yes, they was.", "Yes, they did.", "Yes, they was watching."], a: "Yes, they were." },
            { q: "Did you use to have a brick phone?", options: ["No, I didn't use to.", "No, I used not.", "No, I don't use to.", "No, I haven't."], a: "No, I didn't use to." },
            { q: "Was she creating a prototype?", options: ["Yes, she was.", "Yes, she is.", "Yes, she were.", "Yes, she creating."], a: "Yes, she was." },
            { q: "Did the Wright Brothers fly the plane in 1903?", options: ["Yes, they did.", "Yes, they flew.", "Yes, they fly.", "Yes, they was flew."], a: "Yes, they did." },
            { q: "Was it raining while he was walking?", options: ["Yes, it was.", "Yes, it were.", "Yes, he was.", "Yes, it is."], a: "Yes, it was." },
            { q: "Did scientists use to think only artists were creative?", options: ["Yes, they did.", "Yes, they used.", "Yes, they were.", "Yes, they use to."], a: "Yes, they did." },
            { q: "Were we making progress yesterday?", options: ["Yes, we were.", "Yes, we was.", "Yes, us was.", "Yes, we did."], a: "Yes, we were." },
            { q: "Did you attend the lecture?", options: ["Yes, I did.", "Yes, I attended.", "Yes, I was.", "Yes, I do."], a: "Yes, I did." },
            { q: "Was the machine working correctly?", options: ["No, it wasn't.", "No, it didn't.", "No, it not was.", "No, it aren't."], a: "No, it wasn't." },
            { q: "Did you find your keys?", options: ["Yes, I found.", "Yes, I did.", "Yes, I find.", "Yes, I was found."], a: "Yes, I did." },
            { q: "Were the students discussing the project?", options: ["Yes, they were.", "Yes, they was.", "Yes, they did.", "Yes, them were."], a: "Yes, they were." },
            { q: "Did mobile phones use to be heavy?", options: ["Yes, they did.", "Yes, they used to be.", "Yes, they were.", "Yes, they use to."], a: "Yes, they did." },
            { q: "Was Da Vinci studying anatomy?", options: ["Yes, he was.", "Yes, he were.", "Yes, he did.", "Yes, him was."], a: "Yes, he was." },
            { q: "Did the experiment was a success?", options: ["Yes, it was.", "Yes, it did.", "Yes, it is.", "Yes, it were."], a: "Yes, it was." },
            { q: "Were you sleeping at 8 PM?", options: ["No, I wasn't.", "No, I weren't.", "No, I don't.", "No, I not was."], a: "No, I wasn't." },
            { q: "Did she write the code?", options: ["Yes, she did.", "Yes, she wrote.", "Yes, she writes.", "Yes, she was wrote."], a: "Yes, she did." },
            { q: "What were you doing last night?", options: ["I was experimenting with software.", "I am a blue sandwich.", "Today is Thursday.", "I used to have a cat."], a: "I was experimenting with software." },
            { q: "What did Fleming discover?", options: ["He discovered penicillin by accident.", "He discovered the moon on his plate.", "He discovered a talking robot.", "He discovered a college made of fabric."], a: "He discovered penicillin by accident." },
            { q: "Who flew the first airplane?", options: ["The Wright Brothers flew it in 1903.", "Alexander Graham Bell flew it.", "A visual learner flew it.", "Whoever creates technology flew it."], a: "The Wright Brothers flew it in 1903." },
            { q: "What is a breakthrough?", options: ["A significant development or discovery.", "A piece of soft fabric.", "A very tall building.", "A heavy mobile phone."], a: "A significant development or discovery." },
            { q: "Why did he use a prototype?", options: ["To test his invention before the final version.", "To eat a delicious burger.", "To play soccer on the pitch.", "Because it was raining."], a: "To test his invention before the final version." },
            { q: "What does reinvent the wheel mean?", options: ["To waste time doing something already done.", "To build a new car with five wheels.", "To study the history of circles.", "To buy a new laptop."], a: "To waste time doing something already done." },
            { q: "Is fabric a place where things are made?", options: ["No, it means cloth or material.", "Yes, it's a synonym for factory.", "It is a type of college.", "It is a scientific lecture."], a: "No, it means cloth or material." },
            { q: "What was Da Vinci doing while others were painting?", options: ["He was studying anatomy and flight.", "He was sleeping in his bed.", "He was eating a sandwich.", "He was watching a YouTuber."], a: "He was studying anatomy and flight." },
            { q: "What is a lightbulb moment?", options: ["A sudden moment of inspiration.", "A very bright room.", "A broken lamp.", "A traditional house."], a: "A sudden moment of inspiration." },
            { q: "Is a lecture something you do in a book?", options: ["No, it is a formal talk to an audience.", "Yes, it is the same as reading.", "It is a type of soft fabric.", "It is a computer code."], a: "No, it is a formal talk to an audience." },
            { q: "Why was the phone called a brick?", options: ["Because it used to be huge and heavy.", "Because it was made of red clay.", "Because you could build houses with it.", "Because it didn't have a screen."], a: "Because it used to be huge and heavy." },
            { q: "What is prejudice?", options: ["An unfair opinion formed without facts.", "A financial loss or damage.", "A great invention.", "A successful experiment."], a: "An unfair opinion formed without facts." },
            { q: "What did Alexander Graham Bell invent?", options: ["He invented the telephone.", "He invented the airplane.", "He invented the lightbulb.", "He invented the refrigerator."], a: "He invented the telephone." },
            { q: "What does educated mean in English?", options: ["Having a lot of knowledge and schooling.", "Being very polite and well-mannered only.", "Being a new student.", "Working in a factory."], a: "Having a lot of knowledge and schooling." },
            { q: "What is a blueprint?", options: ["A technical drawing of a project.", "A blue book about the universe.", "A type of ancient software.", "A very fast car."], a: "A technical drawing of a project." },
            { q: "Why did the computer crash?", options: ["Because of a technical error in the code.", "Because it was hungry.", "Because it wanted to go on vacation.", "Because of the fabric."], a: "Because of a technical error in the code." },
            { q: "What is innovation?", options: ["The creation of new methods or ideas.", "A traditional way of living.", "A type of old equipment.", "A heavy mobile phone."], a: "The creation of new methods or ideas." },
            { q: "Is college the same as high school?", options: ["No, it refers to university-level education.", "Yes, it is for 15-year-old students.", "It is a place to buy fabric.", "It is a type of experiment."], a: "No, it refers to university-level education." },
            { q: "What did Leonardo da Vinci sketches show?", options: ["Machines that didn't exist yet.", "Photos of the Renaissance.", "Blueprints for a burger shop.", "The lyrics of a song."], a: "Machines that didn't exist yet." },
            { q: "What is resourcefulness?", options: ["The ability to find clever ways to solve problems.", "Having a lot of natural resources like oil.", "Being very lucky.", "Watching a lot of videos."], a: "The ability to find clever ways to solve problems." }
        ],

        // --- TYPE 4: FIND MEANING (40 ITEMS) ---
        4: [
            { sent: "The telephone was a revolutionary **invention**.", word: "invention", options: ["Fábrica", "Invenção", "Investimento", "Intenção"], a: "Invenção", def: "A unique or novel device, method, or process. (Invenção)" },
            { sent: "This new dress is made of high-quality **fabric**.", word: "fabric", options: ["Fábrica", "Tecido", "Tijolo", "Fibra"], a: "Tecido", def: "Cloth or material produced by weaving or knitting. (Tecido)" },
            { sent: "My brother is studying medicine at a famous **college**.", word: "college", options: ["Colégio", "Faculdade", "Escritório", "Curso"], a: "Faculdade", def: "An educational institution providing higher education. (Faculdade)" },
            { sent: "The professor gave a brilliant **lecture**.", word: "lecture", options: ["Leitura", "Palestra", "Legenda", "Lição"], a: "Palestra", def: "An educational talk delivered to an audience. (Palestra)" },
            { sent: "He is a very **educated** person.", word: "educated", options: ["Educado (polido)", "Instruído / Culto", "Formado", "Atencioso"], a: "Instruído / Culto", def: "Showing a high standard of culture and learning. (Instruído/Culto)" },
            { sent: "We must work together to eliminate **prejudice**.", word: "prejudice", options: ["Prejuízo", "Preconceito", "Orgulho", "Julgamento"], a: "Preconceito", def: "Preconceived opinion not based on reason. (Preconceito)" },
            { sent: "Scientists made a major **breakthrough**.", word: "breakthrough", options: ["Descoberta pequena", "Avanço significativo", "Erro técnico", "Plano inicial"], a: "Avanço significativo", def: "A sudden, dramatic, and important discovery. (Avanço significativo)" },
            { sent: "He discovered penicillin by **accident**.", word: "accident", options: ["Acaso / Acidente", "Plano", "Vontade", "Erro"], a: "Acaso / Acidente", def: "An event that happens by chance. (Acaso/Acidente)" },
            { sent: "The engineer is creating a **prototype**.", word: "prototype", options: ["Desenho", "Protótipo", "Motor", "Código"], a: "Protótipo", def: "A first typical or preliminary model of something. (Protótipo)" },
            { sent: "**Creativity** is essential for solving problems.", word: "creativity", options: ["Criatividade", "Inteligência", "Memória", "Curiosidade"], a: "Criatividade", def: "The use of imagination or original ideas in work. (Criatividade)" },
            { sent: "Humans **used to** dream of flying.", word: "used to", options: ["Costumavam", "Queriam", "Precisavam", "Conseguiam"], a: "Costumavam", def: "Referring to something that happened in the past. (Costumavam)" },
            { sent: "The designer looked at the **blueprint**.", word: "blueprint", options: ["Planta / Projeto", "Livro", "Tela", "Ferramenta"], a: "Planta / Projeto", def: "A technical drawing or design plan. (Planta/Projeto)" },
            { sent: "One simple question can **spark** a debate.", word: "spark", options: ["Apagar", "Desencadear / Provocar", "Resolver", "Ignorar"], a: "Desencadear / Provocar", def: "To provide the stimulus for a sudden activity. (Desencadear/Provocar)" },
            { sent: "We must **innovate** to find new ways.", word: "innovate", options: ["Inovar", "Repetir", "Copiar", "Vender"], a: "Inovar", def: "To make changes by introducing new methods. (Inovar)" },
            { sent: "Her **resourcefulness** helped her fix it.", word: "resourcefulness", options: ["Engenhosidade / Iniciativa", "Sorte", "Riqueza", "Memória"], a: "Engenhosidade / Iniciativa", def: "Ability to find quick and clever ways to solve things. (Engenhosidade)" },
            { sent: "The **discovery** of fire was a turning point.", word: "discovery", options: ["Invenção", "Descoberta", "Construção", "Viagem"], a: "Descoberta", def: "The action or process of finding something. (Descoberta)" },
            { sent: "He had a **vivid** imagination as a child.", word: "vivid", options: ["Tímida", "Vívida / Intensa", "Fraca", "Triste"], a: "Vívida / Intensa", def: "Producing powerful feelings or clear images. (Vívida/Intensa)" },
            { sent: "The scientist was **experimenting** with bacteria.", word: "experimenting", options: ["Experimentando / Testando", "Dormindo", "Falando", "Comendo"], a: "Experimentando / Testando", def: "To perform a scientific procedure to test ideas. (Experimentando)" },
            { sent: "They are making good **progress**.", word: "progress", options: ["Sucesso", "Progresso", "Dinheiro", "Erro"], a: "Progresso", def: "Forward or onward movement toward a goal. (Progresso)" },
            { sent: "It's not **rocket science** to use this app.", word: "rocket science", options: ["Não é bicho de sete cabeças", "É muito perigoso", "É um estudo de foguetes", "É uma ideia antiga"], a: "Não é bicho de sete cabeças", def: "Used to say that something is not difficult. (Fácil)" },
            { sent: "Da Vinci was **ahead of his time**.", word: "ahead of his time", options: ["Atrasado", "À frente de seu tempo", "No tempo certo", "Fora de época"], a: "À frente de seu tempo", def: "Having ideas too advanced for contemporaries. (À frente do tempo)" },
            { sent: "We don't need to **reinvent the wheel**.", word: "reinvent the wheel", options: ["Reinventar a roda", "Consertar o carro", "Criar algo novo", "Fugir do problema"], a: "Reinventar a roda", def: "To waste time creating something already done. (Reinventar a roda)" },
            { sent: "I had a **lightbulb moment** and solved it.", word: "lightbulb moment", options: ["Momento de inspiração", "Momento de escuridão", "Momento de raiva", "Momento de cansaço"], a: "Momento de inspiração", def: "A moment of sudden inspiration or revelation. (Inspiração)" },
            { sent: "She **found** the answer in an old book.", word: "found", options: ["Perdeu", "Encontrou / Achou", "Escreveu", "Leu"], a: "Encontrou / Achou", def: "To discover or perceive by chance. (Encontrou)" },
            { sent: "The Wright Brothers **flew** the first plane.", word: "flew", options: ["Construíram", "Voaram", "Compraram", "Venderam"], a: "Voaram", def: "To move through the air using wings. (Voaram)" },
            { sent: "He **wrote** the code for the software.", word: "wrote", options: ["Leu", "Escreveu", "Apagou", "Viu"], a: "Escreveu", def: "To mark letters or symbols on a surface. (Escreveu)" },
            { sent: "The laboratory **equipment** is very delicate.", word: "equipment", options: ["Mobília", "Equipamento", "Ferramenta", "Material"], a: "Equipamento", def: "The necessary items for a particular purpose. (Equipamento)" },
            { sent: "Innovation requires thinking **outside the box**.", word: "outside the box", options: ["Dentro da caixa", "Fora da caixa", "Rápido", "Sozinho"], a: "Fora da caixa", def: "To think in an original or creative way. (Fora da caixa)" },
            { sent: "The **universe** is expanding every second.", word: "universe", options: ["Galáxia", "Universo", "Estrela", "Planeta"], a: "Universo", def: "All existing matter and space as a whole. (Universo)" },
            { sent: "I **missed** the lecture yesterday.", word: "missed", options: ["Perdi", "Assisti", "Vi", "Li"], a: "Perdi", def: "To fail to attend or catch something. (Perder/Faltar)" },
            { sent: "A **solution** to the problem was found.", word: "solution", options: ["Problema", "Solução", "Dúvida", "Resposta"], a: "Solução", def: "A means of solving a problem. (Solução)" },
            { sent: "The scientist was **educated** at Oxford.", word: "educated", options: ["Instruído / Formado", "Mal-educado", "Chamado", "Visto"], a: "Instruído / Culto", def: "Showing a high level of schooling. (Instruído)" },
            { sent: "We had a **challenge** to complete.", word: "challenge", options: ["Presente", "Desafio", "Acordo", "Tópico"], a: "Desafio", def: "A task that tests someone's abilities. (Desafio)" },
            { sent: "This machine is very **complex**.", word: "complex", options: ["Simples", "Complexa / Difícil", "Rápida", "Barata"], a: "Complexa / Difícil", def: "Consisting of many different connected parts. (Complexo)" },
            { sent: "The **mold** killed the bacteria.", word: "mold", options: ["Fungo / Bolor", "Água", "Veneno", "Tinta"], a: "Fungo / Bolor", def: "A furry growth of fungi in moist conditions. (Fungo)" },
            { sent: "He used his **imagination** to create stories.", word: "imagination", options: ["Imaginação", "Inteligência", "Razão", "Memória"], a: "Imaginação", def: "The faculty of forming new ideas or mental images. (Imaginação)" },
            { sent: "Technology **progresses** faster every year.", word: "progresses", options: ["Falha", "Progride / Avança", "Para", "Muda"], a: "Progride / Avança", def: "To move forward or develop to a higher state. (Progredir)" },
            { sent: "The **discovery** of fire was vital.", word: "discovery", options: ["Invenção", "Descoberta", "Escrita", "Guerra"], a: "Descoberta", def: "Finding something that was not known before. (Descoberta)" },
            { sent: "I am **reading** about the Revolution.", word: "reading", options: ["Escrevendo", "Lendo", "Falando", "Pensando"], a: "Lendo", def: "Look at and comprehend written matter. (Lendo)" },
            { sent: "They **built** a powerful robot.", word: "built", options: ["Construíram", "Destruíram", "Compraram", "Venderam"], a: "Construíram", def: "To construct something by putting parts together. (Construir)" }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 ITEMS) ---
        5: [
            { sent: "Last night, I **was experimented** with new bacteria.", correct: "was experimenting" },
            { sent: "They **use to believe** only artists were creative.", correct: "used to believe" },
            { sent: "Fleming **is discovering** penicillin in 1928.", correct: "discovered" },
            { sent: "What **was you doing** when I called you?", correct: "were you doing" },
            { sent: "I **didn't used to** study engineering.", correct: "didn't use to" },
            { sent: "While she **writes** the code, the computer crashed.", correct: "was writing" },
            { sent: "Da Vinci **used to drawing** sketches of helicopters.", correct: "used to draw" },
            { sent: "They **was making** good progress all week.", correct: "were making" },
            { sent: "Alexander Bell **invents** the telephone long ago.", correct: "invented" },
            { sent: "**Was you attending** the lecture yesterday?", correct: "Were you attending" },
            { sent: "I **use to think** math was boring.", correct: "used to think" },
            { sent: "The scientist **study** anatomy when he made the discovery.", correct: "was studying" },
            { sent: "The Wright Brothers **flied** their first plane in 1903.", correct: "flew" },
            { sent: "We **didn't used to have** smartphones.", correct: "didn't use to have" },
            { sent: "It **was rain** all day yesterday.", correct: "was raining" },
            { sent: "I **seeing** a movie when the lights went out.", correct: "was watching" },
            { sent: "They **use to work** in a textile factory.", correct: "used to work" },
            { sent: "Who **invent** the lightbulb?", correct: "invented" },
            { sent: "She **was read** an article when the phone rang.", correct: "was reading" },
            { sent: "Did you **used to live** in London?", correct: "use to live" },
            { sent: "I **was work** in the lab all morning.", correct: "was working" },
            { sent: "We **use to go** to college together.", correct: "used to go" },
            { sent: "He **makes** a breakthrough last month.", correct: "made" },
            { sent: "They **was creating** a prototype yesterday.", correct: "were creating" },
            { sent: "Innovation **don't use to be** so fast.", correct: "didn't use to be" },
            { sent: "I **was think** about the solution all night.", correct: "was thinking" },
            { sent: "The professor **give** a lecture yesterday.", correct: "gave" },
            { sent: "**Were she studying** at 10 PM?", correct: "Was she studying" },
            { sent: "We **didn't use to has** computers.", correct: "didn't use to have" },
            { sent: "While they **coding**, the power failure happened.", correct: "were coding" },
            { sent: "I **forget** my umbrella at school yesterday.", correct: "forgot" },
            { sent: "Sarah **was always study** in the evening.", correct: "used to study" },
            { sent: "What did you **was doing**?", correct: "were you doing" },
            { sent: "He **use to be** very shy.", correct: "used to be" },
            { sent: "The robot **was move** perfectly.", correct: "was moving" },
            { sent: "They **builded** a city in 1999.", correct: "built" },
            { sent: "I **was listen** to music while studying.", correct: "was listening" },
            { sent: "Did he **used to play** the piano?", correct: "use to play" },
            { sent: "She **teached** herself to code.", correct: "taught" },
            { sent: "We **was looking** at a screen in the lab.", correct: "were looking" }
        ],


        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Group 1: Past Actions (Question to Answer)
            { pairs: [{a: "What were you doing last night at 8 PM?", b: "I was experimenting with a new design software."}, {a: "Did you attend the lecture about AI?", b: "Yes, the speaker was very educated and clear."}, {a: "Was the scientist experimenting with bacteria?", b: "Yes, he was working in his laboratory all day."}, {a: "How did the Wright Brothers change history?", b: "They flew the first powered airplane in 1903."}, {a: "Why didn't you answer my phone call?", b: "Sorry! I was busy creating a prototype for class."}] },
            // Group 2: Past Habits & States
            { pairs: [{a: "Did people use to believe that only artists were creative?", b: "Yes, but now we know that scientists need creativity too."}, {a: "Did you use to think that engineering was boring?", b: "Yes, but now I see it is all about innovation."}, {a: "What did scientists use to do before penicillin?", b: "They used to die from simple infections and mold."}, {a: "Was the bureaucracy more complicated in the past?", b: "Yes, it used to take months to get a simple result."}, {a: "Did they use to have internet on those old phones?", b: "No, they didn't use to have anything but basic calls."}] },
            // Group 3: Interruptions & Simultaneity
            { pairs: [{a: "What happened while you were studying anatomy?", b: "I had a real lightbulb moment about my project."}, {a: "Were you coding when the computer crashed?", b: "Yes, and unfortunately I lost all my progress."}, {a: "Did the idea spark while you were walking?", b: "Yes, I suddenly found the solution to the problem."}, {a: "Was Sarah reading while Mike was playing the drums?", b: "No, she was trying to concentrate in silence."}, {a: "Did you find your keys while you were cleaning?", b: "Yes, I found them hidden under the old sofa."}] },
            // Group 4: Innovation & Breakthroughs
            { pairs: [{a: "Who created the blueprint for this new machine?", b: "A very resourceful engineer from the college."}, {a: "Was the experiment a success last week?", b: "Yes, we finally found a solution to the error."}, {a: "What was the breakthrough in cancer research?", b: "Scientists found a way to stop the cells from growing."}, {a: "Is it rocket science to use this new software?", b: "No, it is actually quite simple and efficient."}, {a: "Who discovered penicillin by accident?", b: "Alexander Fleming discovered it in his lab."}] },
            // Group 5: False Cognates (Context Questions)
            { pairs: [{a: "Is your sister going to college next year?", b: "Yes, she is studying history in São Paulo."}, {a: "Is this shirt made of natural fabric?", b: "Yes, it is 100% cotton from a local factory."}, {a: "Was the professor very educated?", b: "Yes, he has a lot of knowledge about the universe."}, {a: "Did you enjoy the lecture yesterday?", b: "Yes, I learned many new study strategies."}, {a: "Do we need to fight against prejudice?", b: "Absolutely, respect is essential for progress."}] },
            // Group 6: Technical Details
            { pairs: [{a: "Did they build a prototype to test the engine?", b: "Yes, and it worked better than the first design."}, {a: "How long was the first flight of the Flyer?", b: "It lasted for 12 seconds in December 1903."}, {a: "What does the AI model do exactly?", b: "It analyzes data to find new creative solutions."}, {a: "Was the equipment expensive to buy?", b: "Yes, the laboratory spent a lot of money on it."}, {a: "Did you save the code before the storm?", b: "No, the electricity went out and I lost the file."}] },
            // Group 7: Idioms in Context
            { pairs: [{a: "Why did you say 'don't reinvent the wheel'?", b: "Because you should use the existing methods instead."}, {a: "Was Leonardo da Vinci ahead of his time?", b: "Yes, he designed helicopters centuries ago."}, {a: "When did you have that lightbulb moment?", b: "While I was reading an article about innovation."}, {a: "Is it rocket science to learn these verbs?", b: "No, you just need to practice every day."}, {a: "How did the discovery of fire help humans?", b: "It allowed them to cook and stay warm at night."}] },
            // Group 8: Narrative Sequence
            { pairs: [{a: "What was Fleming doing before his vacation?", b: "He was experimenting with bacteria in his dish."}, {a: "What did he notice when he returned?", b: "He noticed that something strange was growing."}, {a: "Did the mold kill the bacteria?", b: "Yes, it was a very effective discovery."}, {a: "Were people dying from infections before 1928?", b: "Yes, they didn't have any effective medicine."}, {a: "Did his creativity save millions of lives?", b: "Yes, he is one of the greatest creators in history."}] },
            // Group 9: Media & Technology
            { pairs: [{a: "What is Albert holding in that old photo?", b: "He is holding an old mobile phone from the 90s."}, {a: "Did mobile phones use to be heavy?", b: "Yes, they used to look like a heavy brick."}, {a: "Was Celine using her phone to edit a movie?", b: "Yes, she was doing it while she was walking."}, {a: "Do we have smartphones with touch screens now?", b: "Yes, innovation never stops in our world."}, {a: "Does technology progress very fast?", b: "Yes, it changes every single day."}] },
            // Group 10: Career & Future
            { pairs: [{a: "Are you considering a career in engineering?", b: "Yes, I am very motivated by technology."}, {a: "Which path will you choose for your future?", b: "I will choose whichever allows me to be creative."}, {a: "Does your sister go to college in the morning?", b: "No, she usually attends lectures at night."}, {a: "Why is resourcefulness a key skill?", b: "Because it helps you find quick solutions to problems."}, {a: "What is the topic of your final essay?", b: "It is about the evolution of communication."}] },
            
            // Group 11: Past Continuous Completion
            { pairs: [{a: "Celine was experimenting...", b: "...with new software last night."}, {a: "While I was reading...", b: "...the lights suddenly went out."}, {a: "The Wright Brothers flew...", b: "...the first airplane in 1903."}, {a: "Albert taught himself...", b: "...how to code using tutorials."}, {a: "They were looking at...", b: "...a screen in the computer lab."}] },
            // Group 12: Used to vs. Simple Past
            { pairs: [{a: "We used to believe...", b: "...only artists were creative."}, {a: "He didn't use to...", b: "...like studying engineering at college."}, {a: "Computers used to...", b: "...be much larger and heavier."}, {a: "Did she use to...", b: "...read comics every single day?"}, {a: "People used to...", b: "...die from simple bacterial infections."}] },
            // Group 13: Discovery & Innovation
            { pairs: [{a: "He discovered penicillin...", b: "...by accident in his laboratory."}, {a: "The experiment was...", b: "...a success despite the difficulties."}, {a: "Writing down words...", b: "...is a very effective strategy."}, {a: "Innovation is key...", b: "...to solving modern global problems."}, {a: "They built a prototype...", b: "...to test the new engine design."}] },
            // Group 14: Genius & Tools
            { pairs: [{a: "Da Vinci was ahead...", b: "...of his time with his designs."}, {a: "It is not rocket...", b: "...science to use this software."}, {a: "Don't reinvent the...", b: "...wheel; use the existing tools."}, {a: "He had a lightbulb...", b: "...moment while he was studying."}, {a: "Thinking outside the...", b: "...box is necessary for innovation."}] },
            // Group 15: Academic Contexts
            { pairs: [{a: "My sister goes to...", b: "...college to study medicine."}, {a: "This dress is made...", b: "...of very soft cotton fabric."}, {a: "The speaker was very...", b: "...educated and well-informed."}, {a: "We must fight against...", b: "...prejudice and discrimination."}, {a: "He gave a long...", b: "...lecture at the local museum."}] },
            // Group 16: Interruption Contexts
            { pairs: [{a: "The computer crashed while...", b: "...I was writing the binary code."}, {a: "It was raining when...", b: "...he was walking to the lab."}, {a: "I was sleeping when...", b: "...the breakthrough was announced."}, {a: "She was painting while...", b: "...he was drawing the blueprint."}, {a: "The robot was moving...", b: "...while we were taking photos."}] },
            // Group 17: Human Achievement
            { pairs: [{a: "Resourcefulness helped her...", b: "...fix the machine without tools."}, {a: "Millions of lives...", b: "...were saved by Fleming's work."}, {a: "The universe is much...", b: "...bigger than we can imagine."}, {a: "A significant breakthrough...", b: "...happened in the science class."}, {a: "Every challenge is an...", b: "...opportunity to learn and grow."}] },
            // Group 18: Decisions & Change
            { pairs: [{a: "I used to think...", b: "...that math was very boring."}, {a: "She realized that...", b: "...innovation never stops."}, {a: "They were making...", b: "...good progress on the project."}, {a: "Whoever creates...", b: "...technology must know English."}, {a: "Whichever course...", b: "...you choose, study very hard."}] },
            // Group 19: Accidental Discovery
            { pairs: [{a: "The mold was growing...", b: "...in the open dish by mistake."}, {a: "He had a great...", b: "...idea for a new mobile app."}, {a: "Take care of...", b: "...yourself while experimenting."}, {a: "I found my...", b: "...keys while I was cleaning."}, {a: "The telephone was...", b: "...a truly great invention."}] },
            // Group 20: Robot & Logic
            { pairs: [{a: "He didn't answer...", b: "...because he was working."}, {a: "The phone looks...", b: "...like a brick in that photo."}, {a: "We should review...", b: "...the lesson together sometime."}, {a: "It's all about...", b: "...creativity and observation."}, {a: "The robot can...", b: "...walk and talk like a human."}] },
            
            // Group 21: False Cognates Translation
            { pairs: [{a: "Fabric", b: "Tecido."}, {a: "College", b: "Faculdade."}, {a: "Lecture", b: "Palestra."}, {a: "Educated", b: "Instruído/Culto."}, {a: "Prejudice", b: "Preconceito."}] },
            // Group 22: Verb Translation
            { pairs: [{a: "To spark an idea.", b: "Desencadear uma ideia."}, {a: "To innovate.", b: "Inovar."}, {a: "To experiment.", b: "Experimentar."}, {a: "To discover.", b: "Descobrir."}, {a: "To succeed.", b: "Ter sucesso."}] },
            // Group 23: Tense Translation
            { pairs: [{a: "I was studying.", b: "Eu estava estudando."}, {a: "I studied.", b: "Eu estudei."}, {a: "I used to study.", b: "Eu costumava estudar."}, {a: "Did you study?", b: "Você estudou?"}, {a: "I didn't study.", b: "Eu não estudei."}] },
            // Group 24: Idioms Translation
            { pairs: [{a: "Lightbulb moment.", b: "Momento de inspiração."}, {a: "Reinvent the wheel.", b: "Reinventar a roda."}, {a: "Ahead of his time.", b: "À frente do seu tempo."}, {a: "Not rocket science.", b: "Não é bicho de sete cabeças."}, {a: "Outside the box.", b: "Fora da caixa."}] },
            // Group 25: Noun Translation
            { pairs: [{a: "Breakthrough.", b: "Avanço significativo."}, {a: "Blueprint.", b: "Planta/projeto técnico."}, {a: "Prototype.", b: "Protótipo."}, {a: "Resourcefulness.", b: "Engenhosidade."}, {a: "Progress.", b: "Progresso."}] },
            // Group 26: Tech & Science Translation
            { pairs: [{a: "Software and code.", b: "Software e código."}, {a: "Equipment and tools.", b: "Equipamento e ferramentas."}, {a: "Machine and robot.", b: "Máquina e robô."}, {a: "Laboratory and museum.", b: "Laboratório e museu."}, {a: "Universe and AI models.", b: "Universo e modelos de IA."}] },
            // Group 27: Actions Translation
            { pairs: [{a: "He flew a plane.", b: "Ele voou um avião."}, {a: "She built a house.", b: "Ela construiu uma casa."}, {a: "They made a mistake.", b: "Eles cometeram um erro."}, {a: "I found the solution.", b: "Eu encontrei a solução."}, {a: "We understood the lesson.", b: "Nós entendemos a lição."}] },
            // Group 28: Habit Translation
            { pairs: [{a: "I didn't use to like it.", b: "Eu não costumava gostar."}, {a: "Did she use to read?", b: "Ela costumava ler?"}, {a: "They used to be heavy.", b: "Eles costumavam ser pesados."}, {a: "He used to be shy.", b: "Ele costumava ser tímido."}, {a: "We used to live there.", b: "Nós costumávamos morar lá."}] },
            // Group 29: Simultaneity Translation
            { pairs: [{a: "While I was working.", b: "Enquanto eu estava trabalhando."}, {a: "When the phone rang.", b: "Quando o telefone tocou."}, {a: "While she was dancing.", b: "Enquanto ela estava dançando."}, {a: "When the storm began.", b: "Quando a tempestade começou."}, {a: "While he was sleeping.", b: "Enquanto ele estava dormindo."}] },
            // Group 30: Creativity Translation
            { pairs: [{a: "Vivid imagination.", b: "Imaginação vívida."}, {a: "Creative mind.", b: "Mente criativa."}, {a: "Great invention.", b: "Grande invenção."}, {a: "Amazing breakthrough.", b: "Avanço incrível."}, {a: "Successful experiment.", b: "Experimento bem-sucedido."}] },

            // Group 31: Invention Basics (Definition)
            { pairs: [{a: "Invention", b: "A completely new thing or method."}, {a: "Creator", b: "The person who makes something new."}, {a: "Blueprint", b: "A technical drawing of a plan."}, {a: "Prototype", b: "The first model of an invention."}, {a: "Discovery", b: "Finding something that already existed."}] },
            // Group 32: Science & Tech (Definition)
            { pairs: [{a: "Experiment", b: "A test to see if a theory is true."}, {a: "Laboratory", b: "A room where scientists work."}, {a: "Equipment", b: "The tools needed for a specific task."}, {a: "Software", b: "Programs that run on a computer."}, {a: "AI models", b: "Programs that simulate human intelligence."}] },
            // Group 33: Metacognition & Effort (Definition)
            { pairs: [{a: "Strategy", b: "A long-term plan to achieve a goal."}, {a: "Method", b: "A specific way of doing something."}, {a: "Skill", b: "An ability that comes from practice."}, {a: "Resourcefulness", b: "Being good at solving problems quickly."}, {a: "Progress", b: "Moving forward or getting better."}] },
            // Group 34: Academic Context (Definition)
            { pairs: [{a: "College", b: "A place for higher education (university)."}, {a: "Lecture", b: "A formal talk given to students."}, {a: "Article", b: "A piece of writing in a journal."}, {a: "Essay", b: "A short piece of writing on a topic."}, {a: "Research", b: "The study of materials to find facts."}] },
            // Group 35: Human Factors (Definition)
            { pairs: [{a: "Creativity", b: "Using original ideas to make art."}, {a: "Imagination", b: "The ability to form mental images."}, {a: "Prejudice", b: "An unfair opinion not based on facts."}, {a: "Educated", b: "Having a high level of learning."}, {a: "Failure", b: "Not reaching the desired goal."}] },
            // Group 36: Verbs of Creation (Definition)
            { pairs: [{a: "To spark", b: "To trigger or start an idea."}, {a: "To innovate", b: "To make changes to improve things."}, {a: "To design", b: "To plan the look and function of something."}, {a: "To build", b: "To construct something physical."}, {a: "To develop", b: "To grow or make something more advanced."}] },
            // Group 37: Irregular Past (Definition)
            { pairs: [{a: "Flew", b: "Past tense of fly."}, {a: "Built", b: "Past tense of build."}, {a: "Taught", b: "Past tense of teach."}, {a: "Thought", b: "Past tense of think."}, {a: "Caught", b: "Past tense of catch."}] },
            // Group 38: Idioms (Definition)
            { pairs: [{a: "Lightbulb moment", b: "A sudden flash of inspiration."}, {a: "Not rocket science", b: "Something that is easy to understand."}, {a: "Ahead of his time", b: "Ideas too advanced for the present."}, {a: "Outside the box", b: "Creative and non-traditional thinking."}, {a: "Reinvent the wheel", b: "Wasting time on established things."}] },
            // Group 39: General Objects (Definition)
            { pairs: [{a: "Fabric", b: "Cloth used for making clothes."}, {a: "Machine", b: "Apparatus using power to work."}, {a: "Robot", b: "Machine that does complex tasks."}, {a: "Tool", b: "Handheld device for fixing things."}, {a: "Universe", b: "All existing matter and space."}] },
            // Group 40: Logical Connectors (Definition)
            { pairs: [{a: "When", b: "At a specific point in time."}, {a: "While", b: "During a period of time."}, {a: "Used to", b: "A past habit or state."}, {a: "Accident", b: "Something that happens without a plan."}, {a: "Solution", b: "The answer to a difficult problem."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 ITEMS) ---
        7: [
            { q: "Why did Alexander Fleming leave his laboratory in 1928?", options: ["Because he was going on vacation.", "It is a soft cotton fabric.", "He used to be a robot.", "Under the soccer pitch."], a: "Because he was going on vacation." },
            { q: "What were the Wright Brothers doing for years before 1903?", options: ["They had been experimenting with gliders.", "They are studying at college now.", "It is not rocket science.", "Whoever creates technology."], a: "They had been experimenting with gliders." },
            { q: "When did the discovery of fire change human history?", options: ["It happened thousands of years ago.", "It was a lightbulb moment for the cat.", "Due to the lack of integration.", "Whenever it rains."], a: "It happened thousands of years ago." },
            { q: "Who used to draw sketches of helicopters during the Renaissance?", options: ["Leonardo da Vinci used to draw them.", "My sister goes to college.", "Whatever I decide to do.", "By myself."], a: "Leonardo da Vinci used to draw them." },
            { q: "Where was Fleming working when he discovered penicillin?", options: ["He was working in his laboratory in London.", "He was ahead of his time.", "In my opinion, it is essential.", "Twenty miles away."], a: "He was working in his laboratory in London." },
            { q: "How did people use to communicate before the telephone?", options: ["They used to send letters and telegrams.", "They used to be very tall buildings.", "It was a successful experiment.", "Because of the storm."], a: "They used to send letters and telegrams." },
            { q: "What happened while the programmer was writing the code?", options: ["The computer suddenly crashed.", "He is an educated speaker.", "To reinvent the wheel.", "Since last Monday."], a: "The computer suddenly crashed." },
            { q: "Why were the early mobile phones called bricks?", options: ["Because they used to be heavy and large.", "Because they were made of fabric.", "At 7:00 AM.", "Yes, I did."], a: "Because they used to be heavy and large." },
            { q: "Which invention did Graham Bell receive a patent for in 1876?", options: ["The telephone.", "He used to believe in monsters.", "A colorful blueprint.", "Whoever finishes first."], a: "The telephone." },
            { q: "How long did the first flight of the Wright Brothers last?", options: ["It lasted for exactly twelve seconds.", "It was 300 meters tall.", "Owing to the wind.", "By 10 PM."], a: "It lasted for exactly twelve seconds." },
            { q: "What was Celine doing while Albert was trying to call her?", options: ["She was experimenting with new software.", "She is a visual learner.", "In the science museum.", "No, she wasn't."], a: "She was experimenting with new software." },
            { q: "Who discovered that mold was killing bacteria by accident?", options: ["Alexander Fleming did.", "Leonardo da Vinci did.", "The principal of the college.", "Whoever is smart."], a: "Alexander Fleming did." },
            { q: "Why did you miss the lecture about AI?", options: ["Because I was studying for my exam.", "Because it is not rocket science.", "At 9:00 AM.", "With a pencil."], a: "Because I was studying for my exam." },
            { q: "What did scientists use to believe about creativity?", options: ["They used to believe only artists were creative.", "They used to have a lightbulb moment.", "In the hallway.", "Since 2010."], a: "They used to believe only artists were creative." },
            { q: "Where were the students when the idea for the project sparked?", options: ["They were looking at a screen in the computer lab.", "They were ahead of their time.", "It is a successful prototype.", "For two hours."], a: "They were looking at a screen in the computer lab." },
            { q: "How did the experiment end?", options: ["It ended as a total success for the team.", "It ended with a blue sandwich.", "Due to the bureaucracy.", "Whichever you prefer."], a: "It ended as a total success for the team." },
            { q: "What kind of fabric did she use for the prototype?", options: ["She used a very soft and resistant material.", "She used a technical blueprint.", "To the laboratory.", "By herself."], a: "She used a very soft and resistant material." },
            { q: "Why did the lights go out while you were studying?", options: ["Because of a heavy storm.", "Because I am a digital native.", "At 8 o'clock.", "Yes, it makes sense."], a: "Because of a heavy storm." },
            { q: "Who was the speaker at the science conference?", options: ["It was a very educated professor.", "It was a brick phone.", "In conclusion.", "Whatever you want."], a: "It was a very educated professor." },
            { q: "What did people use to do before electricity?", options: ["They used to use candles and oil lamps.", "They used to be 100 meters tall.", "Since 1903.", "By themselves."], a: "They used to use candles and oil lamps." },
            { q: "How did the team feel after the breakthrough?", options: ["They felt highly motivated and excited.", "They felt like a technical drawing.", "On Saturdays.", "Wherever they go."], a: "They felt highly motivated and excited." },
            { q: "When did you realize the solution was simple?", options: ["I realized it while reviewing the code.", "It is a global company.", "Since yesterday.", "Whoever calls me."], a: "I realized it while reviewing the code." },
            { q: "Why is it wrong to reinvent the wheel?", options: ["Because it is more efficient to use existing resources.", "Because the wheel is round.", "In the museum gift shop.", "By yourself."], a: "Because it is more efficient to use existing resources." },
            { q: "What were they discussing when the principal arrived?", options: ["They were discussing new strategies to fight prejudice.", "They were discussing a hamburger.", "Due to the rain.", "Whenever possible."], a: "They were discussing new strategies to fight prejudice." },
            { q: "Who taught Albert how to use the design software?", options: ["He taught himself by watching tutorials.", "He is a famous creator.", "Last month.", "It is rocket science."], a: "He taught himself by watching tutorials." },
            { q: "Where did you find the evidence for your essay?", options: ["I found it while reading an academic article.", "I found it in my opinion.", "To the pitch.", "No, I am not."], a: "I found it while reading an academic article." },
            { q: "How did the robot react to the command?", options: ["It moved its arms and started walking.", "It reacted owing to the storm.", "In the future.", "Yes, it did."], a: "It moved its arms and started walking." },
            { q: "Why did you use to think engineering was boring?", options: ["Because I didn't understand the creative part.", "Because I was a prototype.", "At noon.", "No, he wasn't."], a: "Because I didn't understand the creative part." },
            { q: "What was the topic of the lecture you attended?", options: ["The topic was the evolution of the universe.", "The topic was a blue costume.", "Since 10 AM.", "Whichever student."], a: "The topic was the evolution of the universe." },
            { q: "When did innovation start to progress so fast?", options: ["It started progressing after the Industrial Revolution.", "It started in my backpack.", "Because of the mirror.", "Yes, it is."], a: "It started progressing after the Industrial Revolution." },
            { q: "Who was the owner of that traditional house?", options: ["It used to belong to a famous inventor.", "It is ahead of its time.", "On Fridays.", "By themselves."], a: "It used to belong to a famous inventor." },
            { q: "Why did the experiment fail the first time?", options: ["Because the equipment wasn't properly calibrated.", "Because the cat was sleeping.", "In the morning.", "No, it isn't."], a: "Because the equipment wasn't properly calibrated." },
            { q: "What were the researchers doing at midnight?", options: ["They were testing a new prototype.", "They were eating a blueprint.", "Since 2015.", "By themselves."], a: "They were testing a new prototype." },
            { q: "Where did the Wright Brothers go to fly their plane?", options: ["They went to a place called Kitty Hawk.", "They went to a textile factory.", "It takes 12 seconds.", "No, they didn't."], a: "They went to a place called Kitty Hawk." },
            { q: "How did you feel when you saw the first robot?", options: ["I was completely surprised and fascinated.", "I was a computer code.", "On Tuesday.", "Whenever I speak."], a: "I was completely surprised and fascinated." },
            { q: "Why is it important to think outside the box?", options: ["Because it leads to true innovation.", "Because the box is small.", "At 8:00 PM.", "Yes, I do."], a: "Because it leads to true innovation." },
            { q: "Who used to help you with your homework?", options: ["My father used to help me every night.", "He is a digital native.", "Whatever happens.", "By himself."], a: "My father used to help me every night." },
            { q: "What was growing in the dish when Fleming returned?", options: ["A strange blue-green mold was growing there.", "A new career path was growing.", "Since his vacation.", "No, it wasn't."], a: "A strange blue-green mold was growing there." },
            { q: "When did you have your last lightbulb moment?", options: ["I had one yesterday while I was coding.", "I had one in the science museum.", "In the afternoon.", "It is rocket science."], a: "I had one yesterday while I was coding." },
            { q: "How much progress did you make on the essay?", options: ["I wrote three pages while I was in the library.", "I made progress owing to the storm.", "Whichever topic.", "In conclusion."], a: "I wrote three pages while I was in the library." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 ITEMS) ---
        8: [
            { sent: "My sister is studying medicine at a famous **factory** downtown.", wrong: "factory", options: ["college", "fabric", "lecture", "prejudice"], a: "college" },
            { sent: "I bought some beautiful **college** to make a new dress.", wrong: "college", options: ["fabric", "factory", "lecture", "educated"], a: "fabric" },
            { sent: "The professor gave a very long **reading** about the future.", wrong: "reading", options: ["lecture", "fabric", "college", "breakthrough"], a: "lecture" },
            { sent: "He is a very **polite** person because he knows many books.", wrong: "polite", options: ["educated", "fabric", "lecture", "breakthrough"], a: "educated" },
            { sent: "We must fight against **pretext** in our school.", wrong: "pretext", options: ["prejudice", "innovation", "prototype", "blueprint"], a: "prejudice" },
            { sent: "It's **rocket science**; you can learn this app in two minutes!", wrong: "rocket science", options: ["not rocket science", "reinventing the wheel", "ahead of its time", "a lightbulb moment"], a: "not rocket science" },
            { sent: "I was **reinventing the wheel** when I suddenly understood.", wrong: "reinventing the wheel", options: ["having a lightbulb moment", "studying a lecture", "drawing a fabric", "losing the college"], a: "having a lightbulb moment" },
            { sent: "The architect showed us the **code** for the new school.", wrong: "code", options: ["blueprint", "fabric", "lecture", "airplane"], a: "blueprint" },
            { sent: "I **use to** watch cartoons when I was a child.", wrong: "use to", options: ["used to", "was using", "using to", "am used to"], a: "used to" },
            { sent: "The **universe** of the computer tells the machine how to work.", wrong: "universe", options: ["software/code", "fabric", "college", "storm"], a: "software/code" },
            { sent: "Albert was **experimenting** the car while Celine took photos.", wrong: "experimenting", options: ["driving", "innovating", "telling", "knowing"], a: "driving" },
            { sent: "Innovation requires thinking **inside the box** to find ideas.", wrong: "inside the box", options: ["outside the box", "through the box", "under the box", "around the box"], a: "outside the box" },
            { sent: "The Wright Brothers **builded** the first airplane.", wrong: "builded", options: ["built", "flew", "discovered", "sparked"], a: "built" },
            { sent: "I was **listening** a book when the lights went out.", wrong: "listening", options: ["reading", "speaking", "hearing", "telling"], a: "reading" },
            { sent: "He is a very successful **prototype** of the new software.", wrong: "prototype", options: ["creator/inventor", "breakthrough", "blueprint", "fabric"], a: "creator/inventor" },
            { sent: "My mom **teached** herself how to code.", wrong: "teached", options: ["taught", "thought", "caught", "bought"], a: "taught" },
            { sent: "We need more **fabric** to perform scientific tests.", wrong: "fabric", options: ["equipment/tools", "college", "lecture", "prejudice"], a: "equipment/tools" },
            { sent: "He **didn't used to** like engineering at all.", wrong: "didn't used to", options: ["didn't use to", "used not to", "was not used to", "hasn't used to"], a: "didn't use to" },
            { sent: "The **discovery** of the telephone happened in 1876.", wrong: "discovery", options: ["invention", "fabric", "lecture", "prototype"], a: "invention" },
            { sent: "I had a **storm** moment and finally finished the project.", wrong: "storm", options: ["lightbulb", "blueprint", "college", "fabric"], a: "lightbulb" },
            { sent: "Da Vinci was **behind his time** with his amazing designs.", wrong: "behind his time", options: ["ahead of his time", "out of time", "on time", "about time"], a: "ahead of his time" },
            { sent: "We were **coding** a movie when the phone rang.", wrong: "coding", options: ["watching", "reading", "speaking", "hearing"], a: "watching" },
            { sent: "The **mold** of fire was a great step for humanity.", wrong: "mold", options: ["discovery", "invention", "fabric", "college"], a: "discovery" },
            { sent: "Don't reinvent the **bicycle**; use the existing method.", wrong: "bicycle", options: ["wheel", "code", "blueprint", "machine"], a: "wheel" },
            { sent: "I was **hearing** a sandwich while he was talking.", wrong: "hearing", options: ["eating", "reading", "watching", "experimenting"], a: "eating" },
            { sent: "He is very **rude**; he knows almost everything about science.", wrong: "rude", options: ["educated/knowledgeable", "traditional", "complex", "broken"], a: "educated/knowledgeable" },
            { sent: "The **blueprint** killed the bacteria in the lab.", wrong: "blueprint", options: ["mold/penicillin", "fabric", "college", "robot"], a: "mold/penicillin" },
            { sent: "The first **telephone** flew for only 12 seconds.", wrong: "telephone", options: ["airplane", "robot", "machine", "tool"], a: "airplane" },
            { sent: "I **am working** in the lab yesterday at 5 PM.", wrong: "am working", options: ["was working", "were working", "had been working", "did work"], a: "was working" },
            { sent: "We **use to** have very large computers.", wrong: "use to", options: ["used to", "was using", "had used", "are using"], a: "used to" },
            { sent: "The scientist made a **pretext** in cancer research.", wrong: "pretext", options: ["breakthrough", "prejudice", "fabric", "lecture"], a: "breakthrough" },
            { sent: "I was **telling** a podcast while I was driving.", wrong: "telling", options: ["listening to", "reading", "watching", "experimenting"], a: "listening to" },
            { sent: "She **forget** her keys at the college this morning.", wrong: "forget", options: ["forgot", "was forgetting", "had forgotten", "forgets"], a: "forgot" },
            { sent: "This **machine** is very soft and comfortable.", wrong: "machine", options: ["fabric/material", "code", "blueprint", "rocket science"], a: "fabric/material" },
            { sent: "Were they **speaking** the new robot in the hallway?", wrong: "speaking", options: ["watching/seeing", "reading", "eating", "experimenting"], a: "watching/seeing" },
            { sent: "I **flied** to London last year.", wrong: "flied", options: ["flew", "flown", "fly", "was flying"], a: "flew" },
            { sent: "He had a **blueprint** moment and solved the mystery.", wrong: "blueprint", options: ["lightbulb", "lecture", "college", "prejudice"], a: "lightbulb" },
            { sent: "The **universe** consists of all the tools in the drawer.", wrong: "universe", options: ["workshop/toolbox", "code", "fabric", "college"], a: "workshop/toolbox" },
            { sent: "It's **not rocket science**; it's extremely difficult.", wrong: "not rocket science", options: ["rocket science", "a lightbulb moment", "reinventing the wheel", "a breakthrough"], a: "rocket science" },
            { sent: "They **was studying** anatomy when the bell rang.", wrong: "was studying", options: ["were studying", "been studying", "did study", "are studying"], a: "were studying" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 ITEMS) ---
        9: [
            { audio: "What were you doing at 8 PM last night?", options: ["I was experimenting with a new prototype.", "I used to live in Brasília.", "Innovation never stops.", "No, he isn't."], a: "I was experimenting with a new prototype." },
            { audio: "Did Fleming discover penicillin by accident or on purpose?", options: ["He discovered it by accident after his vacation.", "It is not rocket science.", "At the science museum.", "My name is Albert."], a: "He discovered it by accident after his vacation." },
            { audio: "What did people use to do before the invention of the telephone?", options: ["They used to communicate with letters for centuries.", "They are visual learners.", "For two weeks.", "Yes, it did."], a: "They used to communicate with letters for centuries." },
            { audio: "Who flew the first powered airplane in 1903?", options: ["The Wright Brothers flew it at Kitty Hawk.", "Leonardo da Vinci drew the blueprint.", "In the laboratory.", "All night long."], a: "The Wright Brothers flew it at Kitty Hawk." },
            { audio: "Why was the scientist so exhausted this morning?", options: ["Because he was working on the project all night.", "Because he is an educated man.", "Since 2010.", "No, he wasn't."], a: "Because he was working on the project all night." },
            { audio: "Did you used to like studying engineering at college?", options: ["No, I used to think it was very boring.", "Yes, it is a soft fabric.", "With a digital tool.", "Yes, he did."], a: "No, I used to think it was very boring." },
            { audio: "What happened while you were walking to school today?", options: ["It started raining, and I didn't have my coat.", "I used to have a brick phone.", "The lecture was very interesting.", "No, thank you."], a: "It started raining, and I didn't have my coat." },
            { audio: "Was the speaker at the conference well-informed?", options: ["Yes, he was a very educated and successful man.", "It was a real breakthrough.", "For a long time.", "In the laboratory."], a: "Yes, he was a very educated and successful man." },
            { audio: "How did you find your missing keys yesterday?", options: ["I found them while I was cleaning under the sofa.", "I have been reading all day.", "Since Monday.", "No, I haven't."], a: "I found them while I was cleaning under the sofa." },
            { audio: "What were the students discussing in the computer lab?", options: ["They were debating whether AI will replace artists.", "They had driven a bus before.", "The code is fast.", "Yes, he has."], a: "They were debating whether AI will replace artists." },
            { audio: "Did you attend the lecture about Artificial Intelligence?", options: ["Yes, I was listening to the professor all afternoon.", "I am a programmer.", "The computer is on the desk.", "All morning."], a: "Yes, I was listening to the professor all afternoon." },
            { audio: "Who used to draw blueprints for helicopters in the 15th century?", options: ["Leonardo da Vinci used to draw them.", "It was a lightbulb moment.", "In the museum.", "Yes, they have."], a: "Leonardo da Vinci used to draw them." },
            { audio: "Why were you late for the team meeting?", options: ["I was waiting for the bus when the storm started.", "Because I am an inventor.", "The ground is wet.", "No, it isn't."], a: "I was waiting for the bus when the storm started." },
            { audio: "What was the result of the experiment in the laboratory?", options: ["It was a major breakthrough for the science team.", "I go by train.", "Since January.", "My name is Paul."], a: "It was a major breakthrough for the science team." },
            { audio: "Is it rocket science to use this new software?", options: ["No, it’s actually quite simple once you learn it.", "I had read it before.", "The fabric is blue.", "Yes, I have."], a: "No, it’s actually quite simple once you learn it." },
            { audio: "What did Albert's dad use to hold in the old photo?", options: ["He used to hold an old mobile phone that looked like a brick.", "She is my friend.", "At school.", "For two hours."], a: "He used to hold an old mobile phone that looked like a brick." },
            { audio: "When did you have that lightbulb moment about the code?", options: ["While I was reading an article online this morning.", "Because I am a student.", "Since 7 AM.", "No, I wasn't."], a: "While I was reading an article online this morning." },
            { audio: "Did she used to work in a textile factory?", options: ["Yes, she used to spend all day working with fabric.", "It is a new app.", "On the screen.", "Yes, it did."], a: "Yes, she used to spend all day working with fabric." },
            { audio: "Was the mold killing the bacteria in the dish?", options: ["Yes, that’s how Fleming discovered penicillin.", "He was building it.", "The robot is smart.", "By tomorrow."], a: "Yes, that’s how Fleming discovered penicillin." },
            { audio: "What were you doing when the computer crashed?", options: ["I was writing a long essay for my history class.", "It had been cold.", "The fabric is white.", "No, it isn't."], a: "I was writing a long essay for my history class." },
            { audio: "Did you enjoy yourself at the museum exhibit?", options: ["Yes, I was looking at the old airplanes all day.", "I am eating a sandwich.", "In the kitchen.", "All afternoon."], a: "Yes, I was looking at the old airplanes all day." },
            { audio: "Why must we fight against prejudice?", options: ["Because respect is essential for a safe community.", "I had seen it before.", "The news is interesting.", "Yes, I have."], a: "Because respect is essential for a safe community." },
            { audio: "How did the scientist find the solution?", options: ["Through hard work, creativity, and observation.", "It has been shining.", "The sun is hot.", "By 6 PM."], a: "Through hard work, creativity, and observation." },
            { audio: "What did humans used to dream of for centuries?", options: ["They used to dream of soaring through the clouds.", "I am studying English.", "The bell is loud.", "No, I hadn't."], a: "They used to dream of soaring through the clouds." },
            { audio: "Why was the laboratory so messy yesterday?", options: ["Because the team was experimenting with new chemicals.", "I had done my homework.", "Technology is fast.", "Yes, I am."], a: "Because the team was experimenting with new chemicals." },
            { audio: "Did your sister used to go to college in Brasília?", options: ["No, she used to go to college in São Paulo.", "She is working hard.", "At school.", "All week."], a: "No, she used to go to college in São Paulo." },
            { audio: "Why did the idea spark suddenly?", options: ["Because I was thinking about the problem in a new way.", "Because they are inventors.", "Since 2010.", "No, it isn't."], a: "Because I was thinking about the problem in a new way." },
            { audio: "Was the robot moving efficiently during the test?", options: ["Yes, it was walking perfectly across the room.", "It is a strong machine.", "In the factory.", "For an hour."], a: "Yes, it was walking perfectly across the room." },
            { audio: "How long were you waiting for the lecture to start?", options: ["I was waiting for thirty minutes when the speaker arrived.", "They had seen the stars.", "The universe is infinite.", "Yes, they have."], a: "I was waiting for thirty minutes when the speaker arrived." },
            { audio: "Did you used to believe in monsters when you were young?", options: ["Yes, I used to hide under the bed every night!", "I have been looking at robots.", "It is in the museum.", "All morning."], a: "Yes, I used to hide under the bed every night!" },
            { audio: "What were you doing when the lights went out?", options: ["I was reading an article about innovation.", "Because they were studying.", "On Fridays.", "No, they aren't."], a: "I was reading an article about innovation." },
            { audio: "Is this fabric made of natural cotton?", options: ["Yes, it was created in a traditional way.", "She has been saving money.", "The file is large.", "By 10 o'clock."], a: "Yes, it was created in a traditional way." },
            { audio: "Why was Da Vinci ahead of his time?", options: ["Because he designed machines that didn't exist yet.", "He had used a different one before.", "The app is free.", "Yes, he has."], a: "Because he designed machines that didn't exist yet." },
            { audio: "What were the Wright Brothers doing at Kitty Hawk?", options: ["They were testing their first airplane design.", "They are my friends.", "On the phone.", "Since noon."], a: "They were testing their first airplane design." },
            { audio: "Did you used to have a favorite study strategy?", options: ["Yes, I used to write every word down five times.", "I had finished my tasks.", "It is Wednesday.", "Yes, I have."], a: "Yes, I used to write every word down five times." },
            { audio: "Why were you cleaning the laboratory?", options: ["Because the equipment was covered in dust.", "They are from Ohio.", "The airplane is small.", "By 1903."], a: "Because the equipment was covered in dust." },
            { audio: "What was the YouTuber teaching in the video?", options: ["He was explaining how to use a new design app.", "Because I had already finished my work.", "Laughter is healthy.", "No, I wasn't."], a: "He was explaining how to use a new design app." },
            { audio: "Was Sarah studying anatomy at the library?", options: ["Yes, she was preparing for her college entrance exam.", "It is a lightning bolt.", "In our homes.", "All night."], a: "Yes, she was preparing for her college entrance exam." },
            { audio: "Did you used to play in the park after school?", options: ["Yes, we used to play soccer on the pitch every day.", "She had found it last year.", "She is a scientist.", "Since morning."], a: "Yes, we used to play soccer on the pitch every day." },
            { audio: "What were they looking at in the museum?", options: ["They were looking at an old airplane from 1903.", "I have been writing all day.", "The letter is on the desk.", "No, I haven't."], a: "They were looking at an old airplane from 1903." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 ITEMS) ---
        10: [
            { audio: "Fleming was experimenting in his lab when he discovered penicillin.", sent: "Fleming was ___ in his lab when he ___ penicillin.", blanks: ["experimenting", "discovered"] },
            { audio: "I used to believe that only artists were creative.", sent: "I ___ to believe that only ___ were creative.", blanks: ["used", "artists"] },
            { audio: "They were watching the robot while it was walking.", sent: "They were ___ the robot while it was ___.", blanks: ["watching", "walking"] },
            { audio: "The Wright Brothers flew the first plane in 1903.", sent: "The Wright Brothers ___ the first plane in ___.", blanks: ["flew", "1903"] },
            { audio: "I didn't use to like engineering.", sent: "I ___ use to like ___.", blanks: ["didn't", "engineering"] },
            { audio: "While I was studying, the lights suddenly went out.", sent: "While I was ___, the lights ___ went out.", blanks: ["studying", "suddenly"] },
            { audio: "Da Vinci used to draw sketches of helicopters.", sent: "Da Vinci ___ to draw sketches of ___.", blanks: ["used", "helicopters"] },
            { audio: "Innovation is key to solving modern problems.", sent: "Innovation is ___ to solving ___ problems.", blanks: ["key", "modern"] },
            { audio: "He was writing the code when the computer crashed.", sent: "He was ___ the code when the computer ___.", blanks: ["writing", "crashed"] },
            { audio: "People used to communicate with letters.", sent: "People ___ to communicate with ___.", blanks: ["used", "letters"] },
            { audio: "I was waiting for the bus when it started raining.", sent: "I was ___ for the bus when it ___ raining.", blanks: ["waiting", "started"] },
            { audio: "The fabric of this dress is very soft.", sent: "The ___ of this dress is very ___.", blanks: ["fabric", "soft"] },
            { audio: "He is studying medicine at a famous college.", sent: "He is studying ___ at a famous ___.", blanks: ["medicine", "college"] },
            { audio: "The professor gave a brilliant lecture.", sent: "The professor ___ a brilliant ___.", blanks: ["gave", "lecture"] },
            { audio: "We must fight against all forms of prejudice.", sent: "We must ___ against all forms of ___.", blanks: ["fight", "prejudice"] },
            { audio: "It’s not rocket science to use this app.", sent: "It’s not ___ science to use this ___.", blanks: ["rocket", "app"] },
            { audio: "I had a lightbulb moment while I was reading.", sent: "I had a ___ moment while I was ___.", blanks: ["lightbulb", "reading"] },
            { audio: "The robot looks like a human and it can talk.", sent: "The robot ___ like a human and it can ___.", blanks: ["looks", "talk"] },
            { audio: "They built a new prototype last month.", sent: "They ___ a new ___ last month.", blanks: ["built", "prototype"] },
            { audio: "Celine was editing a movie on her smartphone.", sent: "Celine was ___ a movie on her ___.", blanks: ["editing", "smartphone"] },
            { audio: "I used to be very shy at school.", sent: "I ___ to be very shy at ___.", blanks: ["used", "school"] },
            { audio: "The universe is much bigger than we think.", sent: "The ___ is much ___ than we think.", blanks: ["universe", "bigger"] },
            { audio: "She was painting a picture when I arrived.", sent: "She was ___ a picture when I ___.", blanks: ["painting", "arrived"] },
            { audio: "Don't reinvent the wheel; use the existing method.", sent: "Don't ___ the wheel; use the existing ___.", blanks: ["reinvent", "method"] },
            { audio: "I found my keys while I was cleaning.", sent: "I ___ my keys while I was ___.", blanks: ["found", "cleaning"] },
            { audio: "He is a very educated and successful man.", sent: "He is a very ___ and ___ man.", blanks: ["educated", "successful"] },
            { audio: "The discovery of fire was a great breakthrough.", sent: "The ___ of fire was a great ___.", blanks: ["discovery", "breakthrough"] },
            { audio: "Was the experiment a success in the lab?", sent: "Was the ___ a success in the ___?", blanks: ["experiment", "lab"] },
            { audio: "I used to think that science was difficult.", sent: "I ___ to think that science was ___.", blanks: ["used", "difficult"] },
            { audio: "Sarah was recording her voice to check pronunciation.", sent: "Sarah was ___ her voice to check ___.", blanks: ["recording", "pronunciation"] },
            { audio: "We should review the topics for the test.", sent: "We ___ review the ___ for the test.", blanks: ["should", "topics"] },
            { audio: "The blueprints show the design of the robot.", sent: "The ___ show the ___ of the robot.", blanks: ["blueprints", "design"] },
            { audio: "He taught himself to code using tutorials.", sent: "He ___ himself to ___ using tutorials.", blanks: ["taught", "code"] },
            { audio: "The old mobile phone was as heavy as a brick.", sent: "The old ___ phone was as heavy as a ___.", blanks: ["mobile", "brick"] },
            { audio: "Did you attend the lecture yesterday afternoon?", sent: "Did you ___ the ___ yesterday afternoon?", blanks: ["attend", "lecture"] },
            { audio: "I was sleeping when the breakthrough happened.", sent: "I was ___ when the ___ happened.", blanks: ["sleeping", "breakthrough"] },
            { audio: "He made a big mistake in the code.", sent: "He ___ a big ___ in the code.", blanks: ["made", "mistake"] },
            { audio: "She used to read comics every day.", sent: "She ___ to read ___ every day.", blanks: ["used", "comics"] },
            { audio: "Technology progresses fast owing to innovation.", sent: "Technology ___ fast owing to ___.", blanks: ["progresses", "innovation"] },
            { audio: "The creativity of the inventor is amazing.", sent: "The ___ of the ___ is amazing.", blanks: ["creativity", "inventor"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE (10 ITEMS) ---
        11: [
            {
                title: "At the Science Museum",
                lines: [
                    { speaker: "Albert", text: "Look at these blueprints! ___ designed these machines?", options: ["Whoever", "Whichever"], a: "Whoever" },
                    { speaker: "Celine", text: "It was Da Vinci. He ___ sketches of helicopters centuries ago.", options: ["used to draw", "was drawing"], a: "used to draw" },
                    { speaker: "Albert", text: "He was truly ___.", options: ["ahead of his time", "reinventing the wheel"], a: "ahead of his time" },
                    { speaker: "Celine", text: "Yes. While he ___ anatomy, others focused on traditional art.", options: ["was studying", "studied"], a: "was studying" },
                    { speaker: "Albert", text: "His ___ still inspires inventors today.", options: ["creativity", "fabric"], a: "creativity" }
                ]
            },
            {
                title: "The Invention of the Telephone",
                lines: [
                    { speaker: "Sarah", text: "Did you know Bell ___ on the phone for years?", options: ["was working", "used to work"], a: "was working" },
                    { speaker: "John", text: "Yes, he ___ all his money on laboratory equipment.", options: ["used to spend", "was spending"], a: "used to spend" },
                    { speaker: "Sarah", text: "The idea ___ during a long night of research.", options: ["sparked", "was sparking"], a: "sparked" },
                    { speaker: "John", text: "It wasn't ___ , it was pure hard work.", options: ["rocket science", "a breakthrough"], a: "rocket science" },
                    { speaker: "Sarah", text: "True. He finally ___ in 1876.", options: ["succeeded", "failed"], a: "succeeded" }
                ]
            },
            {
                title: "Old Technology vs. New",
                lines: [
                    { speaker: "Albert", text: "My grandfather ___ a phone that looked like a brick!", options: ["used to have", "was having"], a: "used to have" },
                    { speaker: "Celine", text: "They ___ touch screens back then.", options: ["didn't use to have", "weren't having"], a: "didn't use to have" },
                    { speaker: "Albert", text: "While he ___ a simple call, the battery died.", options: ["was making", "used to make"], a: "was making" },
                    { speaker: "Celine", text: "Technology ___ so much in the last few decades.", options: ["progressed", "was progressing"], a: "progressed" },
                    { speaker: "Albert", text: "Now we use our phones to ___ entire movies!", options: ["design", "innovate"], a: "design" }
                ]
            },
            {
                title: "The Accidental Discovery",
                lines: [
                    { speaker: "Teacher", text: "How did Fleming discover penicillin?", options: ["Was he experimenting", "Did he use to experiment"], a: "Was he experimenting" },
                    { speaker: "Student", text: "He noticed that mold ___ in a dish.", options: ["was growing", "used to grow"], a: "was growing" },
                    { speaker: "Student", text: "It ___ the bacteria.", options: ["was killing", "used to kill"], a: "was killing" },
                    { speaker: "Teacher", text: "Exactly. It was a major ___ for medicine.", options: ["breakthrough", "prejudice"], a: "breakthrough" },
                    { speaker: "Student", text: "What a great ___ to happen by accident!", options: ["discovery", "prototype"], a: "discovery" }
                ]
            },
            {
                title: "Studying for College",
                lines: [
                    { speaker: "Sarah", text: "My sister ___ at a famous medical college.", options: ["is currently studying", "used to study"], a: "is currently studying" },
                    { speaker: "Mary", text: "Did she ___ study a lot in high school?", options: ["use to", "was"], a: "use to" },
                    { speaker: "Sarah", text: "Yes, she was very ___ and dedicated.", options: ["educated", "polite"], a: "educated" },
                    { speaker: "Mary", text: "I remember she ___ her own essays every night.", options: ["was writing", "used to write"], a: "was writing" },
                    { speaker: "Sarah", text: "She says that ___ is the key to passing.", options: ["resourcefulness", "prejudice"], a: "resourcefulness" }
                ]
            },
            {
                title: "The Broken Prototype",
                lines: [
                    { speaker: "Leo", text: "Why did you stop the test?", options: ["Did the prototype", "Was the prototype"], a: "Did the prototype" },
                    { speaker: "Mike", text: "It broke while I ___ the motor.", options: ["was testing", "used to test"], a: "was testing" },
                    { speaker: "Leo", text: "That is a difficult ___.", options: ["challenge", "breakthrough"], a: "challenge" },
                    { speaker: "Mike", text: "I ___ at the blueprint when you arrived.", options: ["was looking", "used to look"], a: "was looking" },
                    { speaker: "Leo", text: "Don't ___; just check the manual.", options: ["reinvent the wheel", "fail"], a: "reinvent the wheel" }
                ]
            },
            {
                title: "Fashion and Fabric",
                lines: [
                    { speaker: "Celine", text: "Is this ___ made of natural cotton?", options: ["fabric", "factory"], a: "fabric" },
                    { speaker: "Albert", text: "Yes, it’s from a very ___ textile factory.", options: ["traditional", "modern"], a: "traditional" },
                    { speaker: "Celine", text: "I ___ synthetic materials, but now I prefer this.", options: ["used to wear", "was wearing"], a: "used to wear" },
                    { speaker: "Albert", text: "Did you ___ the pattern yourself?", options: ["design", "was designing"], a: "design" },
                    { speaker: "Celine", text: "Yes, I ___ sketches for weeks.", options: ["was drawing", "used to draw"], a: "was drawing" }
                ]
            },
            {
                title: "The Science Lecture",
                lines: [
                    { speaker: "John", text: "Did you attend the ___ about the universe?", options: ["lecture", "college"], a: "lecture" },
                    { speaker: "Sarah", text: "Yes, I ___ to the professor for two hours.", options: ["was listening", "used to listen"], a: "was listening" },
                    { speaker: "John", text: "Was he ___?", options: ["educated", "polite"], a: "educated" },
                    { speaker: "Sarah", text: "Very. He ___ the laws of physics quite easily.", options: ["explained", "was explaining"], a: "explained" },
                    { speaker: "John", text: "I missed it because I ___ on my code.", options: ["was working", "used to work"], a: "was working" }
                ]
            },
            {
                title: "Modern Breakthroughs",
                lines: [
                    { speaker: "A", text: "Did you hear about the new ___ in energy?", options: ["breakthrough", "prejudice"], a: "breakthrough" },
                    { speaker: "B", text: "No, what ___?", options: ["happened", "was happening"], a: "happened" },
                    { speaker: "A", text: "A young student ___ a more efficient solar panel.", options: ["designed", "was designing"], a: "designed" },
                    { speaker: "B", text: "That is ___; simple and effective.", options: ["not rocket science", "reinventing the wheel"], a: "not rocket science" },
                    { speaker: "A", text: "Exactly. We ___ to rely on old methods only.", options: ["used", "were"], a: "used" }
                ]
            },
            {
                title: "The Coding Challenge",
                lines: [
                    { speaker: "A", text: "How is your new ___ for the project?", options: ["prototype", "fabric"], a: "prototype" },
                    { speaker: "B", text: "It's hard. I ___ it for five hours yesterday.", options: ["was coding", "used to code"], a: "was coding" },
                    { speaker: "A", text: "Did you use a ___ to plan it?", options: ["blueprint", "lecture"], a: "blueprint" },
                    { speaker: "B", text: "Yes, but I ___ a big mistake in the logic.", options: ["made", "was making"], a: "made" },
                    { speaker: "A", text: "Don't worry, every error is a way to ___.", options: ["innovate", "miss"], a: "innovate" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER (10 ITEMS) ---
        12: [
            {
                title: "The Accidental Breakthrough",
                text: "In 1928, Alexander Fleming was working in his laboratory in London. He was experimenting with a type of bacteria when he decided to go on vacation. He accidentally left a dish of bacteria open on his desk. While he was traveling, a strange mold started growing in the dish. When he returned, he noticed that the mold was killing the bacteria. He discovered penicillin! This breakthrough changed medicine forever.",
                questions: [
                    { q: "What was Fleming doing before vacation?", options: ["Experimenting with bacteria.", "Building a robot.", "Cleaning his lab."], a: "Experimenting with bacteria." },
                    { q: "What happened while he was away?", options: ["A strange mold grew in the dish.", "The lab was closed.", "A student stole his notes."], a: "A strange mold grew in the dish." },
                    { q: "What did he notice upon return?", options: ["The mold was killing bacteria.", "The bacteria were stronger.", "The dish was missing."], a: "The mold was killing bacteria." },
                    { q: "What was the name of the discovery?", options: ["Penicillin.", "Textile.", "A brick."], a: "Penicillin." },
                    { q: "Was the breakthrough intentional?", options: ["No, it was an accident.", "Yes, he planned it.", "Maybe."], a: "No, it was an accident." }
                ]
            },
            {
                title: "Leonardo’s Imagination",
                text: "Leonardo da Vinci was not only a painter but also a brilliant inventor. He used to draw detailed sketches of machines that didn't exist in his time, such as helicopters and tanks. Leonardo had a very vivid imagination and believed that art and science were connected. While other artists were only painting portraits, Leonardo was studying anatomy and the mechanics of flight. His designs were centuries ahead of his time.",
                questions: [
                    { q: "How is Da Vinci described?", options: ["Painter, inventor, and scientist.", "Only a painter.", "A computer programmer."], a: "Painter, inventor, and scientist." },
                    { q: "What did he draw in his journals?", options: ["Futuristic machines.", "The weather.", "Song lyrics."], a: "Futuristic machines." },
                    { q: "What was he doing while others painted?", options: ["Studying anatomy and flight.", "Sleeping.", "Working in a factory."], a: "Studying anatomy and flight." },
                    { q: "Were his designs common in his time?", options: ["No, they were ahead of his time.", "Yes, everyone built them.", "They were boring."], a: "No, they were ahead of his time." },
                    { q: "What do his blueprints represent today?", options: ["Modern engineering foundations.", "Software code.", "Car instructions."], a: "Modern engineering foundations." }
                ]
            },
            {
                title: "The First Airplane",
                text: "In the early 1900s, the Wright Brothers were experimenting with gliders at Kitty Hawk. They were trying to understand how to control a machine in the air. Finally, in 1903, they built the 'Flyer'. On a cold December day, Orville Wright flew the plane for 12 seconds. It was a short flight, but it proved that human flight was possible. Technology has been progressing so fast since then that we now travel the universe.",
                questions: [
                    { q: "What had humans dreamed of for centuries?", options: ["Flying like birds.", "Building robots.", "Going to the moon."], a: "Flying like birds." },
                    { q: "What were the brothers doing at Kitty Hawk?", options: ["Experimenting with gliders.", "Building a college.", "Fixing a phone."], a: "Experimenting with gliders." },
                    { q: "When did the first flight occur?", options: ["In 1903.", "In 1876.", "In 1928."], a: "In 1903." },
                    { q: "How long did the flight last?", options: ["12 seconds.", "12 minutes.", "12 hours."], a: "12 seconds." },
                    { q: "What did the invention prove?", options: ["Human flight was possible.", "Innovation stopped.", "Phones are heavy."], a: "Human flight was possible." }
                ]
            },
            {
                title: "False Friends in Science",
                text: "When studying science in English, you must be careful with 'false cognates.' For example, many people think 'fabric' means 'fábrica,' but it actually means 'tecido.' My sister works in a textile factory, but she is also studying at a medical college. In English, 'college' means university, not 'colégio.' Another common mistake is the word 'lecture.' A 'lecture' is a formal talk given by an educated professor.",
                questions: [
                    { q: "What is a false cognate?", options: ["A word looking like Portuguese but with different meaning.", "A synonym.", "A computer code."], a: "A word looking like Portuguese but with different meaning." },
                    { q: "What does 'fabric' mean in English?", options: ["Material or cloth.", "A place where machines are built.", "A blueprint."], a: "Material or cloth." },
                    { q: "What is 'college' in the text?", options: ["University-level education.", "High School.", "A factory."], a: "University-level education." },
                    { q: "What is a 'lecture'?", options: ["A formal talk to an audience.", "Reading a book quietly.", "A type of fabric."], a: "A formal talk to an audience." },
                    { q: "What does 'educated' mean here?", options: ["Knowledgeable and schooled.", "Polite.", "Working in a lab."], a: "Knowledgeable and schooled." }
                ]
            },
            {
                title: "The Evolution of Phones",
                text: "Mobile phones used to be very different thirty years ago. In an old photo, my dad is holding a phone that looks like a brick. It was huge and heavy, and it didn't use to have a touch screen or internet. While people were using those phones, they could only make voice calls. There were no apps or cameras. Innovation changed everything. We moved from 'bricks' to powerful pocket computers.",
                questions: [
                    { q: "How were phones thirty years ago?", options: ["Huge and heavy like a brick.", "Small and light.", "Colorful."], a: "Huge and heavy like a brick." },
                    { q: "What didn't they use to have?", options: ["Touch screens or internet.", "Buttons.", "Antennas."], a: "Touch screens or internet." },
                    { q: "What could people do with old phones?", options: ["Only make voice calls.", "Take photos.", "Use AI."], a: "Only make voice calls." },
                    { q: "How fast is technology changing?", options: ["Progressing very fast.", "Slowly stopping.", "Innovation stopped."], a: "Progressing very fast." },
                    { q: "What are phones compared to today?", options: ["Powerful pocket computers.", "Traditional tools.", "Bricks."], a: "Powerful pocket computers." }
                ]
            },
            {
                title: "The Innovation Process",
                text: "Creating something new is a long process. First, an inventor has an idea. Then, they must create a blueprint to show the design. After that, they build a prototype to test if the machine works. Many inventors used to fail hundreds of times before a successful breakthrough. Thomas Edison experimented with thousands of materials before he found the right one. This requires resourcefulness and patience.",
                questions: [
                    { q: "What is the second step?", options: ["Creating a blueprint.", "Having an idea.", "Selling the product."], a: "Creating a blueprint." },
                    { q: "Why is a prototype important?", options: ["To test the invention in reality.", "To make it expensive.", "To surprise the principal."], a: "To test the invention in reality." },
                    { q: "How often did inventors use to fail?", options: ["Hundreds of times.", "Never.", "Only once."], a: "Hundreds of times." },
                    { q: "What quality did Edison need?", options: ["Resourcefulness and patience.", "Laziness.", "Luck only."], a: "Resourcefulness and patience." },
                    { q: "What does 'reinvent the wheel' mean?", options: ["Waste time on things already done.", "Build cars.", "Use round objects."], a: "Waste time on things already done." }
                ]
            },
            {
                title: "The Science of Communication",
                text: "Before the 1870s, people used to communicate using letters. It used to take weeks for a message to arrive. Then, Alexander Graham Bell had a lightbulb moment. He was studying how sound travels through wires when he discovered the telephone! This invention sparked a revolution. Today, we use complex software and satellites to talk to people instantly.",
                questions: [
                    { q: "How did people communicate before 1870?", options: ["Using letters.", "Using smartphones.", "Using robots."], a: "Using letters." },
                    { q: "What was Bell doing when he found the solution?", options: ["Studying sound through wires.", "Sleeping.", "Flying a plane."], a: "Studying sound through wires." },
                    { q: "What idiom describes his sudden idea?", options: ["A lightbulb moment.", "A storm moment.", "Rocket science."], a: "A lightbulb moment." },
                    { q: "What was the effect of the telephone?", options: ["Sparked a revolution.", "Made letters popular.", "Smaller universe."], a: "Sparked a revolution." },
                    { q: "What do we use for instant talk today?", options: ["Software and satellites.", "Bricks.", "Only blueprints."], a: "Software and satellites." }
                ]
            },
            {
                title: "Thinking Outside the Box",
                text: "In High School, we learn that innovation is not just for scientists. Everyone can be a creator. To innovate, you must think outside the box. This means finding creative solutions to common problems. For example, some students used to struggle with vocabulary until they discovered digital flashcards. While they were practicing, their grades improved. Don't let prejudice about your abilities stop you.",
                questions: [
                    { q: "Who can be a creator?", options: ["Everyone.", "Only doctors.", "Only artists."], a: "Everyone." },
                    { q: "What does 'thinking outside the box' mean?", options: ["Finding creative solutions.", "Staying inside a room.", "Building a box."], a: "Finding creative solutions." },
                    { q: "What tool helped with vocabulary?", options: ["Digital flashcards.", "Sleeping more.", "Lyrics."], a: "Digital flashcards." },
                    { q: "What happened while they practiced?", options: ["Grades improved significantly.", "They failed.", "It rained."], a: "Grades improved significantly." },
                    { q: "What shouldn't stop a student?", options: ["Prejudice about abilities.", "Innovation.", "Soft fabric."], a: "Prejudice about abilities." }
                ]
            },
            {
                title: "The Industrial Revolution",
                text: "The Industrial Revolution transformed work. Families used to make clothes using traditional methods. Then, engineers were developing steam engines. While factories were opening, workers were learning to use complex machines. This was a massive breakthrough, but life used to be difficult in crowded cities.",
                questions: [
                    { q: "How did families get clothes before?", options: ["Using traditional methods.", "At the mall.", "3D printers."], a: "Using traditional methods." },
                    { q: "What were engineers developing?", options: ["Steam engines.", "Blueprints for planes.", "Lectures."], a: "Steam engines." },
                    { q: "What were workers doing while factories opened?", options: ["Learning to use machines.", "Going on vacation.", "Coding."], a: "Learning to use machines." },
                    { q: "Why was life difficult then?", options: ["Crowded and polluted cities.", "Because of fabric.", "They were educated."], a: "Crowded and polluted cities." },
                    { q: "Was it a breakthrough?", options: ["Yes, in productivity.", "No.", "Only for artists."], a: "Yes, in productivity." }
                ]
            },
            {
                title: "The Evolution of Flight",
                text: "Humans used to dream of soaring through clouds. Many inventors were testing prototypes, but they faced dangerous crashes. While technology was progressing slowly, the Wright Brothers never gave up. Their success showed that resourcefulness is essential. Today, rockets are ahead of their time, and we explore the universe.",
                questions: [
                    { q: "What did humans used to dream of?", options: ["Soaring through clouds.", "Studying English.", "Loud bells."], a: "Soaring through clouds." },
                    { q: "What were inventors testing?", options: ["Prototypes.", "Bicycle shops.", "New fabrics."], a: "Prototypes." },
                    { q: "Did they face difficulties?", options: ["Yes, dangerous crashes.", "No.", "They made money."], a: "Yes, dangerous crashes." },
                    { q: "What quality was essential?", options: ["Resourcefulness.", "Laziness.", "Luck."], a: "Resourcefulness." },
                    { q: "What is mentioned about today?", options: ["We explore the universe.", "Innovation stopped.", "Bricks are popular."], a: "We explore the universe." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER CONTEXT (10 ITEMS) ---
        13: [
            {
                title: "The Menlo Park Laboratory",
                audio: "Thomas Edison was a creator who understood persistence. In his laboratory, he and his team were always experimenting with new ideas. Edison used to spend almost twenty hours a day in the lab. In 1879, while he was testing materials for the lightbulb, he encountered over a thousand failures. He used to say he was simply discovering ways that didn't work.",
                questions: [
                    { q: "Where did Edison conduct experiments?", options: ["Menlo Park laboratory.", "Textile factory.", "Medical college."], a: "Menlo Park laboratory." },
                    { q: "How long did he use to spend in the lab?", options: ["Nearly twenty hours.", "Eight hours.", "Two hours."], a: "Nearly twenty hours." },
                    { q: "What was he doing when he faced failures?", options: ["Testing lightbulb materials.", "Flying an airplane.", "Writing code."], a: "Testing lightbulb materials." },
                    { q: "What did he say about his failures?", options: ["He was discovering ways that didn't work.", "He was bored.", "It was rocket science."], a: "He was discovering ways that didn't work." },
                    { q: "Was the world changing at that time?", options: ["Yes, rapidly.", "No, technology stopped.", "Everyone was sleeping."], a: "Yes, rapidly." }
                ]
            },
            {
                title: "Fleming’s Holiday Discovery",
                audio: "In 1928, Fleming was working on bacteria. Before his vacation, he used to keep his lab organized, but one day he left a dish open. While he was enjoying his time away, a rare mold started to grow. When he returned, he noticed the mold was killing the bacteria. This accidental discovery led to penicillin. Before this, infections used to be a death sentence.",
                questions: [
                    { q: "What was Fleming researching?", options: ["Bacteria.", "AI models.", "Flying machines."], a: "Bacteria." },
                    { q: "What mistake did he make?", options: ["Left a culture dish open.", "Broke a machine.", "Lost a blueprint."], a: "Left a culture dish open." },
                    { q: "What happened while he was away?", options: ["A rare mold grew.", "A fire started.", "A student stole notes."], a: "A rare mold grew." },
                    { q: "What was the mold doing?", options: ["Killing the bacteria.", "Growing bacteria.", "Turning into fabric."], a: "Killing the bacteria." },
                    { q: "How were infections viewed before this?", options: ["A death sentence for millions.", "Easy to fix.", "Rocket science."], a: "A death sentence for millions." }
                ]
            },
            {
                title: "Leonardo’s Futuristic Sketches",
                audio: "Leonardo da Vinci used to fill his notebooks with incredible drawings. While he was working as a painter, he was also studying the anatomy of birds. He drew blueprints for helicopters long before engines were invented. People in the 15th century didn't use to understand his ideas. While he was sketching, he was actually designing the future.",
                questions: [
                    { q: "When did Leonardo live?", options: ["Renaissance.", "Industrial Revolution.", "1903."], a: "Renaissance." },
                    { q: "What did he use to do in notebooks?", options: ["Draw futuristic machines.", "Write lyrics.", "Plan groceries."], a: "Draw futuristic machines." },
                    { q: "What was he studying while painting?", options: ["Bird anatomy and flight.", "History of fabric.", "Computer software."], a: "Bird anatomy and flight." },
                    { q: "Did people understand him then?", options: ["No, they didn't use to understand.", "Yes, they were rocket scientists.", "They thought he was an actor."], a: "No, they didn't use to understand." },
                    { q: "What was he doing while sketching?", options: ["Designing the future.", "Repeating the past.", "Failing exams."], a: "Designing the future." }
                ]
            },
            {
                title: "The Wright Brothers at Kitty Hawk",
                audio: "Before 1903, the Wright Brothers used to own a bicycle shop. They were constantly experimenting with wing designs. In December 1903, while the wind was blowing strongly, Orville flew for 12 seconds. While they were testing their prototype, they faced dangerous crashes. Their success proved that thinking outside the box can lead to the impossible.",
                questions: [
                    { q: "What business did they use to own?", options: ["A bicycle shop.", "A textile factory.", "A medical college."], a: "A bicycle shop." },
                    { q: "Where were they in 1903?", options: ["Kitty Hawk.", "London.", "São Paulo."], a: "Kitty Hawk." },
                    { q: "What was the weather like?", options: ["Wind was blowing strongly.", "Very hot.", "Raining mold."], a: "Wind was blowing strongly." },
                    { q: "What did humans use to believe?", options: ["Only birds could soar.", "Flight was rocket science.", "Planes were bricks."], a: "Only birds could soar." },
                    { q: "What happened during testing?", options: ["Dangerous crashes.", "Made a lot of money.", "Found new fabric."], a: "Dangerous crashes." }
                ]
            },
            {
                title: "The Evolution of Communication",
                audio: "In the past, people used to write long letters. There didn't use to be any instant messaging. Everything changed in 1876 when Bell successfully tested the telephone. He was researching sound transmission when the idea sparked. While the world was adjusting, researchers were already thinking about the next step. Mobile phones used to be huge, like a brick.",
                questions: [
                    { q: "How did people communicate in the past?", options: ["By writing long letters.", "Using AI.", "Watching YouTubers."], a: "By writing long letters." },
                    { q: "What happened in 1876?", options: ["Bell tested the telephone.", "Wright Brothers flew.", "Penicillin was found."], a: "Bell tested the telephone." },
                    { q: "What was Bell doing when the idea sparked?", options: ["Researching sound transmission.", "Attending a lecture.", "Buying fabric."], a: "Researching sound transmission." },
                    { q: "How are old mobile phones described?", options: ["Huge and heavy like a brick.", "Stylish and light.", "Not rocket science."], a: "Huge and heavy like a brick." },
                    { q: "How is technology moving today?", options: ["Faster than we imagine.", "Progressing slowly.", "Stopped completely."], a: "Faster than we imagine." }
                ]
            },
            {
                title: "The Industrial Revolution Breakthrough",
                audio: "Before the 18th century, families used to make clothes using traditional methods. People used to work in small workshops. Then, everything changed when engineers were developing steam engines. While factories were opening, workers were learning to operate machines. However, life used to be difficult because cities were crowded and polluted.",
                questions: [
                    { q: "How were clothes made before?", options: ["Traditional methods.", "Bought at the mall.", "3D printed."], a: "Traditional methods." },
                    { q: "What were engineers developing?", options: ["Steam engines.", "Blueprints for planes.", "Lectures."], a: "Steam engines." },
                    { q: "What were workers doing during factory openings?", options: ["Learning to operate machines.", "Going on vacation.", "Coding."], a: "Learning to operate machines." },
                    { q: "Why was life difficult?", options: ["Crowded and polluted cities.", "Because of fabric.", "They were educated."], a: "Crowded and polluted cities." },
                    { q: "What was technology creating?", options: ["New social challenges.", "No innovation.", "Trips to the moon."], a: "New social challenges." }
                ]
            },
            {
                title: "The Journey to College",
                audio: "My sister Sarah used to study in a small school. While she was preparing for exams, she was also working in a textile factory. She didn't use to have much free time. She used to read her books during lunch breaks. While she was attending her first lecture, she felt a great sense of pride. She realized her hard work was finally paying off.",
                questions: [
                    { q: "What was Sarah's life like during prep?", options: ["Studying and working in a factory.", "On vacation.", "A famous YouTuber."], a: "Studying and working in a factory." },
                    { q: "What didn't she use to have?", options: ["Much free time.", "A computer.", "A sister."], a: "Much free time." },
                    { q: "When did she use to read her books?", options: ["During lunch breaks.", "While sleeping.", "At the museum."], a: "During lunch breaks." },
                    { q: "How did she feel at her first lecture?", options: ["A great sense of pride.", "Prejudiced.", "Boring."], a: "A great sense of pride." },
                    { q: "What is the key to progress?", options: ["Determination.", "Expensive fabric.", "Not rocket science."], a: "Determination." }
                ]
            },
            {
                title: "Thinking Outside the Box",
                audio: "In the past, companies didn't use to value creativity. They used to focus only on efficiency. However, everything changed when leaders realized best ideas come from thinking outside the box. While employees were sharing perspectives, companies saw breakthroughs. Solving problems is not rocket science; it requires imagination and courage.",
                questions: [
                    { q: "What did companies focus on in the past?", options: ["Efficiency and rules.", "Creativity.", "Fabric and fashion."], a: "Efficiency and rules." },
                    { q: "What is the key to best ideas?", options: ["Thinking outside the box.", "Thinking inside the box.", "Not thinking."], a: "Thinking outside the box." },
                    { q: "What happened while employees shared perspectives?", options: ["Companies saw breakthroughs.", "The company failed.", "Lights went out."], a: "Companies saw breakthroughs." },
                    { q: "When did the speaker have a lightbulb moment?", options: ["Discussing an idea with a colleague.", "While sleeping.", "At the mall."], a: "Discussing an idea with a colleague." },
                    { q: "What is required to solve problems?", options: ["Imagination and courage.", "Rocket science.", "Impossible tasks."], a: "Imagination and courage." }
                ]
            },
            {
                title: "Resourceful Inventions",
                audio: "Resourcefulness is the ability to find quick solutions. Inventors used to struggle with lack of equipment. While they were building prototypes, they used everyday objects. For example, some used to use old bicycle parts for engines. This thinking outside the box led to breakthroughs in transportation. Innovation happens when you use what you have efficiently.",
                questions: [
                    { q: "What is resourcefulness?", options: ["Ability to find quick solutions.", "Having a lot of oil.", "Being lucky."], a: "Ability to find quick solutions." },
                    { q: "What did inventors struggle with?", options: ["Lack of equipment.", "A digital native.", "Whatever happens."], a: "Lack of equipment." },
                    { q: "What did they use while building prototypes?", options: ["Everyday objects.", "Blueprints.", "Lectures."], a: "Everyday objects." },
                    { q: "What did some use for engines?", options: ["Old bicycle parts.", "Textile fabric.", "Software."], a: "Old bicycle parts." },
                    { q: "When does innovation happen?", options: ["When using things efficiently.", "During vacation.", "Owing to a storm."], a: "When using things efficiently." }
                ]
            },
            {
                title: "The Power of Blueprints",
                audio: "Blueprints are technical drawings. Architects used to draw them by hand. While they were designing buildings, they had to be very precise. Today, we use software, which is a massive breakthrough. It is not rocket science to understand the importance of a plan. A prototype is much better when the blueprint is perfect.",
                questions: [
                    { q: "What are blueprints?", options: ["Technical drawings.", "Blue books.", "Software."], a: "Technical drawings." },
                    { q: "How did architects use to draw them?", options: ["By hand.", "Using AI.", "With fabric."], a: "By hand." },
                    { q: "What were they doing while designing?", options: ["Being very precise.", "Sleeping.", "Taking photos."], a: "Being very precise." },
                    { q: "What is the modern breakthrough in this field?", options: ["Using software.", "Reinventing wheels.", "Crowded cities."], a: "Using software." },
                    { q: "When is a prototype better?", options: ["When the blueprint is perfect.", "When it's expensive.", "During a storm."], a: "When the blueprint is perfect." }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT (10 ITEMS) ---
        14: [
            {
                title: "The Accidental Scientist",
                text: "Alexander Fleming [1] (was working / used to work) in his laboratory when he made a mistake. He [2] (didn't use to / wasn't) be a messy person, but he left a dish open. While he [3] (was traveling / traveled), a strange mold grew. This [4] (discovery / prototype) of penicillin saved millions. It wasn't [5] (rocket science / a blueprint); it was a result of observation.",
                answers: ["was working", "didn't use to", "was traveling", "discovery", "rocket science"]
            },
            {
                title: "Leonardo’s Vision",
                text: "Leonardo da Vinci [1] (used to / was) have a very vivid imagination. While he [2] (was painting / use to paint) the Mona Lisa, he [3] (was also designing / also designed) blueprints for flying machines. His ideas were [4] (ahead of his time / a pretext) by centuries. He [5] (used to / was) study nature to improve his designs.",
                answers: ["used to", "was painting", "was also designing", "ahead of his time", "used to"]
            },
            {
                title: "The First Flight",
                text: "Before 1903, humans [1] (used to / were) dream of soaring. The Wright Brothers [2] (were experimenting / use to experiment) with gliders for years. While the wind [3] (was blowing / is blowing), they successfully flew. This [4] (breakthrough / prejudice) changed travel. Innovation [5] (progresses / progressed) so much that now we explore space.",
                answers: ["used to", "were experimenting", "was blowing", "breakthrough", "progresses"]
            },
            {
                title: "False Cognates in the Lab",
                text: "I [1] (used to / am) think that 'fabric' meant 'fábrica'. However, while I [2] (was attending / use to attend) a [3] (lecture / reading) at my university, the professor explained the difference. He said that my sister, who is [4] (educated / polite), works in a textile factory making soft [5] (fabric / college).",
                answers: ["used to", "was attending", "lecture", "educated", "fabric"]
            },
            {
                title: "Communication Breakthrough",
                text: "In the 19th century, people [1] (used to / were) communicate using long letters. While Graham Bell [2] (was researching / use to research) sound, he had a [3] (lightbulb moment / storm). He [4] (invented / use to invent) the telephone in 1876. This [5] (invention / discovery) sparked a global revolution.",
                answers: ["used to", "was researching", "lightbulb moment", "invented", "invention"]
            },
            {
                title: "Designing a Prototype",
                text: "The engineer [1] (was looking / use to look) at the [2] (blueprint / fabric) when the idea [3] (sparked / was sparking). He [4] (used to / was) build small models, but now he was creating a real [5] (prototype / breakthrough). It was a difficult [6] (challenge / accident).",
                answers: ["was looking", "blueprint", "sparked", "used to", "prototype", "challenge"]
            },
            {
                title: "A Change in Habits",
                text: "I [1] (used to / am) believe that only scientists could innovate. While I [2] (was studying / use to study) at [3] (college / factory), I realized that anyone can be a [4] (creator / software). Now, I [5] (always / rarely) try to think outside the box.",
                answers: ["used to", "was studying", "college", "creator", "always"]
            },
            {
                title: "Progress and Creativity",
                text: "Technology [1] (progresses / progressed) fast because of human [2] (creativity / prejudice). In the past, computers [3] (didn't use to / hasn't) be so small. While engineers [4] (were developing / use to develop) new [5] (software / airplane), they found many ways to improve lives.",
                answers: ["progresses", "creativity", "didn't use to", "were developing", "software"]
            },
            {
                title: "The Industrial Change",
                text: "Workers [1] (used to / were) work on farms before factories. While engineers [2] (were developing / use to develop) the steam engine, everything [3] (changed / was changing). It was a major [4] (breakthrough / prejudice). However, people [5] (used to / were) live in crowded cities.",
                answers: ["used to", "were developing", "changed", "breakthrough", "used to"]
            },
            {
                title: "The Scientific Method",
                text: "Inventors [1] (used to / are) follow a strict method. While they [2] (were testing / use to test) a [3] (prototype / fabric), they took notes. If a project [4] (failed / was failing), they didn't stop. They knew that persistence is [5] (essential / boring) for success.",
                answers: ["used to", "were testing", "prototype", "failed", "essential"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 ITEMS) ---
        15: [
            {
                title: "Text 1",
                audio: "Alexander Fleming was experimenting with bacteria when he discovered penicillin. He had a lightbulb moment after his vacation. This breakthrough saved millions of lives.",
                text: "Alexander Fleming was [1] with bacteria when he [2] penicillin. He had a [3] moment after his [4]. This [5] saved millions of lives.",
                answers: ["experimenting", "discovered", "lightbulb", "vacation", "breakthrough"]
            },
            {
                title: "Text 2",
                audio: "Leonardo da Vinci used to draw sketches of helicopters. While he was studying anatomy, he was also innovating. His designs were ahead of his time.",
                text: "Leonardo da Vinci [1] to draw sketches of [2]. While he was [3] anatomy, he was also [4]. His designs were [5] of his time.",
                answers: ["used", "helicopters", "studying", "innovating", "ahead"]
            },
            {
                title: "Text 3",
                audio: "The Wright Brothers flew the first airplane in 1903. They were experimenting with gliders for years. They didn't reinvent the wheel; they created the future.",
                text: "The Wright Brothers [1] the first airplane in [2]. They [3] experimenting with [4] for years. They didn't [5] the wheel; they created the future.",
                answers: ["flew", "1903", "were", "gliders", "reinvent"]
            },
            {
                title: "Text 4",
                audio: "I used to think that engineering was boring. But while I was attending a lecture, I realized it's all about creativity.",
                text: "I [1] to think that [2] was boring. But while I was [3] a [4], I realized it's all about [5].",
                answers: ["used", "engineering", "attending", "lecture", "creativity"]
            },
            {
                title: "Text 5",
                audio: "My sister goes to college to study medicine. She is a very educated person. She used to work in a factory to pay for her studies.",
                text: "My sister goes to [1] to study [2]. She is a very [3] person. She [4] to work in a [5] to pay for her studies.",
                answers: ["college", "medicine", "educated", "used", "factory"]
            },
            {
                title: "Text 6",
                audio: "The engineer was looking at the blueprint while he was building the prototype. He didn't want to fail. He was very resourceful.",
                text: "The engineer was [1] at the [2] while he was building the [3]. He didn't want to [4]. He was very [5].",
                answers: ["looking", "blueprint", "prototype", "fail", "resourceful"]
            },
            {
                title: "Text 7",
                audio: "Mobile phones used to be as heavy as a brick. While people were making calls, they didn't have internet. Innovation never stops.",
                text: "Mobile phones [1] to be as heavy as a [2]. While people [3] making calls, they [4] have internet. Innovation never [5].",
                answers: ["used", "brick", "were", "didn't", "stops"]
            },
            {
                title: "Text 8",
                audio: "We must fight against prejudice. Every discovery starts with an idea. While we are learning, we are making progress in our universe.",
                text: "We must fight against [1]. Every [2] starts with an [3]. While we are [4], we are making [5] in our universe.",
                answers: ["prejudice", "discovery", "idea", "learning", "progress"]
            },
            {
                title: "Text 9",
                audio: "Resourceful scientists used to build their own tools. While they were working, they made many discoveries. Innovation is key.",
                text: "Resourceful [1] [2] to build their own tools. While they [3] working, they made many [4]. Innovation is [5].",
                answers: ["scientists", "used", "were", "discoveries", "key"]
            },
            {
                title: "Text 10",
                audio: "The Industrial Revolution transformed the world. While technology was progressing, life was changing. It was an amazing breakthrough.",
                text: "The Industrial [1] transformed the world. While [2] was [3], life was [4]. It was an amazing [5].",
                answers: ["Revolution", "technology", "progressing", "changing", "breakthrough"]
            }
        ]
    }
});