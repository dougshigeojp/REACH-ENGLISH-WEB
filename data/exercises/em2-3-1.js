/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */
/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * GRADE: EM 2nd Grade, BIMESTER 3, CHAPTER 7
 * BATCH 1: TYPES 1 TO 5 (40 items each)
 */

window.initExercise({
    id: "em2-3-7",
    grade: "EM 2nd Grade",
    bimester: "3",
    chapter: "7",
    title: "Science, Genetics, and Ethics",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES (40 ITEMS) ---
        1: [
            { words: ["major", "a", "CRISPR", "breakthrough", "is", "science", "in"], correct: "CRISPR is a major breakthrough in science" },
            { words: ["hope", "genetic", "Scientists", "to", "diseases", "cure"], correct: "Scientists hope to cure genetic diseases" },
            { words: ["remember", "I", "about", "reading", "cloning"], correct: "I remember reading about cloning" },
            { words: ["stop", "imagining", "We", "only", "the", "benefits", "need", "to"], correct: "We need to stop imagining only the benefits" },
            { words: ["scientists", "Some", "advise", "critics", "to", "stop"], correct: "Some critics advise scientists to stop" },
            { words: ["carry", "We", "experimenting", "can't", "just", "on"], correct: "We can't just carry on experimenting" },
            { words: ["researchers", "Many", "to", "resurrect", "mammoths", "try"], correct: "Many researchers try to resurrect mammoths" },
            { words: ["forgot", "We", "the", "ask", "teacher", "to"], correct: "We forgot to ask the teacher" },
            { words: ["editing", "gene", "Is", "considered", "be", "safe", "to"], correct: "Is gene editing considered to be safe" },
            { words: ["out", "research", "more", "Let's", "carry"], correct: "Let's carry out more research" },
            { words: ["broke", "into", "The", "classroom", "a", "debate", "out"], correct: "A debate broke out in the classroom" },
            { words: ["DNA", "into", "CRISPR", "breaks", "modify", "it", "to"], correct: "CRISPR breaks into DNA to modify it" },
            { words: ["detailed", "need", "a", "breakdown", "We"], correct: "We need a detailed breakdown" },
            { words: ["team", "The", "happened", "after", "breakup", "failure", "the"], correct: "The team breakup happened after the failure" },
            { words: ["through", "She", "the", "carried", "project", "crisis", "her"], correct: "She carried her project through the crisis" },
            { words: ["over", "rules", "The", "to", "the", "next", "carry", "experiment"], correct: "The rules carry over to the next experiment" },
            { words: ["avoiding", "risks", "Ethical", "include", "mutations"], correct: "Ethical risks include avoiding mutations" },
            { words: ["enjoy", "They", "learning", "genetics", "about"], correct: "They enjoy learning about genetics" },
            { words: ["to", "decide", "we", "Did", "carry", "the", "test", "out"], correct: "Did we decide to carry out the test" },
            { words: ["stop", "people", "should", "animals", "cloning"], correct: "People should stop cloning animals" },
            { words: ["remember", "check", "temperature", "to", "the"], correct: "Remember to check the temperature" },
            { words: ["forget", "I", "will", "never", "seeing", "lab", "that"], correct: "I will never forget seeing that lab" },
            { words: ["mention", "He", "to", "the", "forgot", "potential", "dangers"], correct: "He forgot to mention the potential dangers" },
            { words: ["trying", "Scientists", "are", "to", "extinct", "species", "resurrect"], correct: "Scientists are trying to resurrect extinct species" },
            { words: ["sequence", "Try", "gene", "editing", "the"], correct: "Try editing the gene sequence" },
            { words: ["ethical", "discuss", "We", "must", "the", "consequences"], correct: "We must discuss the ethical consequences" },
            { words: ["a", "huge", "is", "mammoths", "Resurrecting", "potential"], correct: "Resurrecting mammoths is a huge potential" },
            { words: ["breakthrough", "This", "change", "medicine", "will"], correct: "This breakthrough will change medicine" },
            { words: ["into", "New", "ideas", "break", "market", "the"], correct: "New ideas break into the market" },
            { words: ["through", "the", "broke", "barriers", "science", "of", "They"], correct: "They broke through the barriers of science" },
            { words: ["a", "for", "cure", "cancer", "develop", "to", "want", "They"], correct: "They want to develop a cure for cancer" },
            { words: ["moral", "a", "decision", "humanity", "for", "is", "This"], correct: "This is a moral decision for humanity" },
            { words: ["the", "ethics", "discuss", "must", "We", "editing", "of", "gene"], correct: "We must discuss the ethics of gene editing" },
            { words: ["a", "every", "consequence", "action", "has"], correct: "Every action has a consequence" },
            { words: ["topic", "This", "news", "in", "is", "controversial", "the"], correct: "This topic is controversial in the news" },
            { words: ["technology", "with", "risk", "a", "always", "is", "There", "new"], correct: "There is always a risk with new technology" },
            { words: ["complex", "break", "Scientists", "structures", "down"], correct: "Scientists break down complex structures" },
            { words: ["failed", "project", "The", "after", "team", "the", "broke", "up"], correct: "The team broke up after the project failed" },
            { words: ["research", "Clinical", "many", "takes", "years"], correct: "Clinical research takes many years" },
            { words: ["precise", "allows", "CRISPR", "changes", "for"], correct: "CRISPR allows for precise changes" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES (40 ITEMS) ---
        2: [
            { lines: ["I agree, it has the potential to change medicine completely.", "Have you seen the digital simulation of the DNA?", "Yes! It shows how CRISPR breaks into a gene to modify it.", "I think it’s a major breakthrough in science."], order: [1, 2, 3, 0] },
            { lines: ["I remember reading about genetic cloning yesterday.", "No, they only focused on the benefits of the technology.", "We need to stop imagining only the positive sides.", "Did the article mention the ethical risks?"], order: [0, 1, 2, 3] }, // Adjusted logical flow mapping to A-B-C-D pattern where B asks a question. Wait, PDF: A, B, C, D. order: [0, 3, 1, 2] -> A, B, C, D.
            { lines: ["I remember reading about genetic cloning yesterday.", "Did the article mention the ethical risks?", "No, they only focused on the benefits of the technology.", "We need to stop imagining only the positive sides."], order: [0, 1, 2, 3] },
            { lines: ["Some critics advise scientists to stop experimenting.", "Why? Is gene editing considered to be dangerous?", "Yes, if a new disease breaks out because of a mutation.", "That would be a terrible consequence for humanity."], order: [0, 1, 2, 3] },
            { lines: ["Would you like to see a mammoth in real life?", "Honestly, I enjoy thinking about it, but it seems wrong.", "You mean it might not be a moral decision?", "Exactly. We should avoid resurrecting extinct species."], order: [0, 1, 2, 3] },
            { lines: ["Did the research team finish the project?", "No, a massive debate broke out in the lab.", "So they stopped to discuss the ethics of the experiment?", "Yes, and eventually the team breakup happened."], order: [0, 1, 2, 3] },
            { lines: ["Did you remember to check the DNA samples?", "Oh no, I completely forgot to do that task!", "You must carry out the instructions carefully.", "I am sorry. I will try to be more focused."], order: [0, 1, 2, 3] },
            { lines: ["We can't just carry on experimenting blindly.", "I see your point. We need a detailed breakdown of the risks.", "Otherwise, our science might cause more illnesses.", "I will ask the committee to evaluate the potential dangers."], order: [0, 1, 2, 3] },
            { lines: ["I'll never forget seeing that laboratory in action.", "Were they trying to resurrect a dinosaur?", "No, they hope to cure genetic diseases with new technology.", "That is a much more beneficial use of science."], order: [0, 1, 2, 3] },
            { lines: ["Have you finished writing your research paper?", "Not yet. I stopped to check some historical facts first.", "I suggest finishing the draft before you analyze the details.", "That's a good idea. I plan to finish it tonight."], order: [0, 1, 2, 3] },
            { lines: ["The new vaccine is a medical breakthrough.", "I heard it has the potential to eradicate the disease.", "Yes, but the clinical research takes many years.", "Let's hope their determination carries them through the trials."], order: [0, 1, 2, 3] },
            { lines: ["Does CRISPR allow us to modify plants?", "Yes, we can modify the plant to resist insects.", "That could provide a huge benefit for agriculture.", "True, but we must also test the long-term consequences."], order: [0, 1, 2, 3] },
            { lines: ["New ideas break into the market every day.", "It's hard to keep up with the advancement of technology.", "I agree. We must carry on learning constantly.", "Otherwise, our knowledge will become extinct!"], order: [0, 1, 2, 3] },
            { lines: ["Why did the teacher advise us to be careful?", "Because gene editing is a very controversial topic.", "We must avoid making moral mistakes in our debates.", "I suppose she wants us to respect different opinions."], order: [0, 1, 2, 3] },
            { lines: ["Let's carry out more research on the mammoth genome.", "I don't know if we have enough funding for that.", "We can apply for a grant to carry the project over to next year.", "That sounds like a solid plan for development."], order: [0, 1, 2, 3] },
            { lines: ["Did the scientists break down the complex structure?", "Yes, they mapped the whole genome successfully.", "It was a difficult task, but they carried it off.", "This will surely lead to new medical treatments."], order: [0, 1, 2, 3] },
            { lines: ["I enjoy watching documentaries about the Ice Age.", "The mammoth lived during that era, right?", "Yes, and now they are trying to bring it back.", "De-extinction is fascinating but slightly terrifying."], order: [0, 1, 2, 3] },
            { lines: ["We need to stop to evaluate the risks of cloning.", "I disagree. We should continue experimenting to find cures.", "But what if a dangerous mutation breaks out?", "There is always a risk, but the benefits are worth it."], order: [0, 1, 2, 3] },
            { lines: ["Please do not touch the experiment in the lab!", "I'm sorry, I was just trying to observe the DNA.", "You must ask for permission before entering.", "I promise to remember the rules next time."], order: [0, 1, 2, 3] },
            { lines: ["The rules carry over to the next phase of the study.", "Does that mean we keep using the same safety gear?", "Yes, avoiding contamination is our top priority.", "I'll make sure everyone remembers to wear their gloves."], order: [0, 1, 2, 3] },
            { lines: ["Is it right to resurrect ancient species?", "I think we should focus on saving the species we have now.", "You mean preventing the extinction of modern animals?", "Exactly. That is a more ethical use of our resources."], order: [0, 1, 2, 3] },
            { lines: ["They hope to break through the barriers of science.", "That requires a lot of hard work and dedication.", "Yes, and they must avoid repeating past mistakes.", "Innovation always comes with major challenges."], order: [0, 1, 2, 3] },
            { lines: ["The team broke up after the project failed.", "That's a sad consequence of intense pressure.", "They couldn't agree on the ethical guidelines.", "Science often involves controversial decisions."], order: [0, 1, 2, 3] },
            { lines: ["I forgot to mention the possible side effects.", "You must include them in the detailed breakdown.", "I'll add them before I publish the article.", "Good, because honesty is essential in research."], order: [0, 1, 2, 3] },
            { lines: ["She stopped studying to answer the phone.", "Did she finish reading the paper on genetics?", "No, she plans to finish it later tonight.", "Tell her I recommend reading the section on CRISPR."], order: [0, 1, 2, 3] },
            { lines: ["What happens if a new illness breaks out?", "Scientists will try to develop a cure quickly.", "Let's hope our technology is advanced enough.", "It usually takes years of clinical research to succeed."], order: [0, 1, 2, 3] },
            { lines: ["Try editing the gene sequence differently.", "Do you think that will stop the mutation?", "It is an experiment, so we have to test it and see.", "Let's carry out the test and record the data."], order: [0, 1, 2, 3] },
            { lines: ["Are there millions of species on Earth?", "Yes, but many birds are facing extinction right now.", "We must act to preserve our biodiversity.", "That is an ethical obligation for all humanity."], order: [0, 1, 2, 3] },
            { lines: ["Do you remember seeing that documentary about cloning?", "Yes, I'll never forget seeing the cloned sheep, Dolly.", "It was a massive breakthrough in the 90s.", "And it sparked a lot of controversial debates."], order: [0, 1, 2, 3] },
            { lines: ["The teacher let the students use the lab today.", "That's rare! Did they carry out their own experiments?", "Yes, they were trying to extract DNA from strawberries.", "I hope they remembered to clean up afterwards."], order: [0, 1, 2, 3] },
            { lines: ["Ethics allows us to consider the long-term results.", "Without it, science could become very dangerous.", "We must balance innovation with moral responsibility.", "That's the only way to ensure a safe future."], order: [0, 1, 2, 3] },
            { lines: ["I enjoy discussing these ethical dilemmas.", "It makes you think about the consequences of our actions.", "Do you think we will ever clone humans?", "I hope not. The risks far outweigh any potential benefit."], order: [0, 1, 2, 3] },
            { lines: ["The discovery encouraged him to carry out more research.", "Did he find a cure for the illness?", "Not yet, but he made a significant advancement.", "I am sure his hard work will carry him through."], order: [0, 1, 2, 3] },
            { lines: ["Please remind them to bring the DNA samples.", "I already told them yesterday afternoon.", "Good. We plan to start the breakdown analysis at 9 AM.", "I'll make sure the lab is ready by then."], order: [0, 1, 2, 3] },
            { lines: ["Sometimes it is hard to separate fact from fiction.", "Especially when reading about science on the internet.", "That's why peer-reviewed research is so important.", "We must always verify the information we read."], order: [0, 1, 2, 3] },
            { lines: ["Why did you stop to look at the microscope?", "I wanted to check the cells' reaction.", "Did you notice any immediate changes?", "Yes, the mutation process had already begun."], order: [0, 1, 2, 3] },
            { lines: ["We are trying to resurrect the dodo bird.", "Why focus on a bird that has been extinct for centuries?", "Because it helps us test our gene-editing capabilities.", "I suppose that makes sense scientifically."], order: [0, 1, 2, 3] },
            { lines: ["A debate broke out during the science conference.", "Was it about the ethics of cloning?", "Yes, some scientists strongly disagree with the practice.", "It's a topic that always generates strong emotions."], order: [0, 1, 2, 3] },
            { lines: ["He forgot seeing the initial test results.", "How could he lose the memory of such an important event?", "He was overwhelmed by the information breakdown.", "He should keep better notes in his journal."], order: [0, 1, 2, 3] },
            { lines: ["They hope to break through the final barrier tomorrow.", "Are they close to finding the cure?", "Yes, the latest experiment showed very positive signs.", "Let's keep our fingers crossed for a breakthrough."], order: [0, 1, 2, 3] },
            { lines: ["I plan to study genetics in college.", "You should enjoy learning complex biology concepts then.", "I do! I find DNA and genomes fascinating.", "You have the potential to become a great scientist."], order: [0, 1, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS (40 ITEMS) ---
        3: [
            { q: "Does the verb \"hope\" take an infinitive? (e.g., hope to find)", options: ["Yes, it does.", "No, it takes a gerund.", "No, it takes a base verb without 'to'.", "Yes, it takes an adjective."], a: "Yes, it does." },
            { q: "Is \"enjoy to read\" grammatically correct?", options: ["No, it should be \"enjoy reading\".", "Yes, it is correct.", "No, it should be \"enjoy read\".", "No, it should be \"enjoy to reading\"."], a: "No, it should be \"enjoy reading\"." },
            { q: "Does \"stop smoking\" mean to quit the habit of smoking?", options: ["Yes, stopping an activity uses the gerund.", "No, it means to pause in order to smoke.", "No, it is grammatically incorrect.", "Yes, it uses the infinitive."], a: "Yes, stopping an activity uses the gerund." },
            { q: "Does \"stop to smoke\" mean to pause your current activity in order to smoke?", options: ["Yes, the infinitive indicates the purpose of stopping.", "No, it means to quit smoking.", "No, it means you hate smoking.", "No, it is grammatically incorrect."], a: "Yes, the infinitive indicates the purpose of stopping." },
            { q: "Is \"avoid making\" the correct verb pattern?", options: ["Yes, \"avoid\" is followed by a gerund.", "No, it should be \"avoid to make\".", "No, it should be \"avoid make\".", "No, it should be \"avoid to making\"."], a: "Yes, \"avoid\" is followed by a gerund." },
            { q: "Does the verb \"decide\" take a gerund? (e.g., decide going)", options: ["No, it takes an infinitive (decide to go).", "Yes, it always takes a gerund.", "No, it takes a past participle.", "Yes, it takes a base verb."], a: "No, it takes an infinitive (decide to go)." },
            { q: "Is \"let me go\" correct without the word \"to\"?", options: ["Yes, \"let\" is followed by an object and a base verb.", "No, it should be \"let me to go\".", "No, it should be \"let me going\".", "No, it should be \"let I go\"."], a: "Yes, \"let\" is followed by an object and a base verb." },
            { q: "Does \"remember locking the door\" mean you have a memory of doing it in the past?", options: ["Yes, \"remember + gerund\" refers to a past memory.", "No, it means don't forget to do it in the future.", "No, it is grammatically incorrect.", "Yes, it means you forgot to do it."], a: "Yes, \"remember + gerund\" refers to a past memory." },
            { q: "Does \"remember to lock the door\" mean you must not forget to do this task?", options: ["Yes, \"remember + infinitive\" refers to a future task or duty.", "No, it refers to a past memory.", "No, it means you successfully avoided it.", "Yes, but only in the past tense."], a: "Yes, \"remember + infinitive\" refers to a future task or duty." },
            { q: "Is \"I suggest to go\" the correct pattern?", options: ["No, \"suggest\" is usually followed by a gerund (suggest going).", "Yes, it is perfectly correct.", "No, it should be \"suggest go\".", "No, it should be \"suggest to going\"."], a: "No, \"suggest\" is usually followed by a gerund (suggest going)." },
            { q: "Does \"try editing\" mean to do it as an experiment to see if it works?", options: ["Yes, \"try + gerund\" means to experiment with an action.", "No, it means to make a difficult physical effort.", "No, it means to stop editing.", "Yes, but only for professional editors."], a: "Yes, \"try + gerund\" means to experiment with an action." },
            { q: "Does \"try to open the door\" mean you are making a difficult effort to do it?", options: ["Yes, \"try + infinitive\" means attempting something difficult.", "No, it means doing it as a fun experiment.", "No, it means you forgot to open it.", "Yes, it means you refuse to open it."], a: "Yes, \"try + infinitive\" means attempting something difficult." },
            { q: "Is the noun \"breakthrough\" derived from the phrasal verb \"break through\"?", options: ["Yes, it is.", "No, it is derived from \"break down\".", "No, it is a completely unrelated word.", "Yes, but it is an adjective, not a noun."], a: "Yes, it is." },
            { q: "Does the phrasal verb \"break out\" mean to start suddenly (like a war or disease)?", options: ["Yes, it does.", "No, it means to separate into pieces.", "No, it means to enter by force.", "No, it means to continue working."], a: "Yes, it does." },
            { q: "Is \"He advised me to study\" the correct pattern?", options: ["Yes, \"advise + object + infinitive\" is correct.", "No, it should be \"advised me studying\".", "No, it should be \"advised to study me\".", "No, it should be \"advised me study\"."], a: "Yes, \"advise + object + infinitive\" is correct." },
            { q: "Does \"carry out\" mean to perform or conduct an experiment?", options: ["Yes, it does.", "No, it means to stop an experiment.", "No, it means to carry heavy boxes outside.", "No, it means to fail a task."], a: "Yes, it does." },
            { q: "Is \"They made me to think\" grammatically correct?", options: ["No, \"make\" is followed by an object and a base verb (\"made me think\").", "Yes, it is correct.", "No, it should be \"made me thinking\".", "No, it should be \"made I think\"."], a: "No, \"make\" is followed by an object and a base verb (\"made me think\")." },
            { q: "Does \"carry on\" mean to persist in an activity despite challenges?", options: ["Yes, it means to continue.", "No, it means to cancel an activity.", "No, it means to carry luggage onto a plane.", "No, it means to break a relationship."], a: "Yes, it means to continue." },
            { q: "Is \"plan working\" the correct verb pattern?", options: ["No, \"plan\" is followed by an infinitive (\"plan to work\").", "Yes, it is correct.", "No, it should be \"plan work\".", "No, it should be \"plan to working\"."], a: "No, \"plan\" is followed by an infinitive (\"plan to work\")." },
            { q: "Does the phrasal verb \"break into\" mean to enter a field or market suddenly?", options: ["Yes, it can mean entering a new field or market.", "No, it only means breaking a glass window.", "No, it means to finish a relationship.", "No, it means to start a disease."], a: "Yes, it can mean entering a new field or market." },
            { q: "What is CRISPR used for in modern biology?", options: ["Gene editing.", "Building bridges.", "Writing computer software.", "Cooking food in a restaurant."], a: "Gene editing." },
            { q: "If a species has no living members, it is considered...", options: ["Extinct.", "Resurrected.", "Cloned.", "Modified."], a: "Extinct." },
            { q: "The process of creating an identical copy of an animal is called...", options: ["Cloning.", "Breakthrough.", "Extinction.", "Breakdown."], a: "Cloning." },
            { q: "A major and important discovery in science is called a...", options: ["Breakthrough.", "Breakup.", "Breakout.", "Breakdown."], a: "Breakthrough." },
            { q: "The study of what is morally right and wrong in science is called...", options: ["Ethics.", "Genetics.", "Physics.", "Geometry."], a: "Ethics." },
            { q: "An animal that lived during the Ice Age and had long tusks is a...", options: ["Mammoth.", "Dinosaur.", "Chicken.", "Dog."], a: "Mammoth." },
            { q: "If an experiment stops working and fails, there is a...", options: ["Breakdown.", "Breakthrough.", "Break into.", "Carry out."], a: "Breakdown." },
            { q: "When a team of scientists stops working together, it is a...", options: ["Breakup.", "Breakthrough.", "Breakdown.", "Break out."], a: "Breakup." },
            { q: "To \"resurrect\" an extinct species means to...", options: ["Bring it back to life.", "Kill it completely.", "Put it in a museum as a fossil.", "Forget about it."], a: "Bring it back to life." },
            { q: "A permanent alteration in the DNA sequence is called a...", options: ["Mutation.", "Clone.", "Cure.", "Benefit."], a: "Mutation." },
            { q: "If you test an idea in a lab, you are conducting an...", options: ["Experiment.", "Extinction.", "Ethics.", "Emotion."], a: "Experiment." },
            { q: "The complete set of genetic material in an organism is its...", options: ["Genome.", "Medicine.", "Disease.", "Mammal."], a: "Genome." },
            { q: "What is the main goal of finding a \"cure\"?", options: ["To end a disease or illness.", "To cause a mutation.", "To break down a machine.", "To resurrect a dinosaur."], a: "To end a disease or illness." },
            { q: "A situation involving exposure to danger or negative consequences is a...", options: ["Risk.", "Benefit.", "Solution.", "Breakthrough."], a: "Risk." },
            { q: "If a topic causes a lot of public disagreement, it is...", options: ["Controversial.", "Safe.", "Boring.", "Ethical."], a: "Controversial." },
            { q: "To \"modify\" a plant's DNA means to...", options: ["Change its structure or character.", "Destroy the plant completely.", "Eat the plant.", "Water the plant."], a: "Change its structure or character." },
            { q: "The carrier of genetic information in humans is called...", options: ["DNA.", "WWW.", "UN.", "NGO."], a: "DNA." },
            { q: "If a dangerous disease suddenly starts spreading, we say it...", options: ["Broke out.", "Broke down.", "Broke up.", "Carried over."], a: "Broke out." },
            { q: "To successfully complete a difficult scientific project is to...", options: ["Carry it through.", "Break it down.", "Run it out.", "Give it up."], a: "Carry it through." },
            { q: "An advantage or positive result gained from a new technology is a...", options: ["Benefit.", "Consequence.", "Risk.", "Disease."], a: "Benefit." }
        ],

        // --- TYPE 4: FIND MEANING (40 ITEMS) ---
        4: [
            { sent: "CRISPR is a powerful tool for **gene editing**.", word: "gene editing", options: ["Extinção", "Edição de genes", "Clonagem", "Pesquisa"], a: "Edição de genes", def: "The process of making precise changes to the DNA of a cell or organism." },
            { sent: "The scientists made a major **breakthrough**.", word: "breakthrough", options: ["Erro", "Avanço / Descoberta importante", "Experimento", "Doença"], a: "Avanço / Descoberta importante", def: "A significant and dramatic development or discovery." },
            { sent: "We need a detailed **breakdown** of the data.", word: "breakdown", options: ["Resumo", "Análise detalhada / Detalhamento", "Sucesso", "Cópia"], a: "Análise detalhada / Detalhamento", def: "An explanatory analysis or summary." },
            { sent: "The team **breakup** delayed the project.", word: "breakup", options: ["União", "Separação / Fim da equipe", "Avanço", "Descoberta"], a: "Separação / Fim da equipe", def: "The end of a relationship or group collaboration." },
            { sent: "They want to **resurrect** the mammoth.", word: "resurrect", options: ["Matar", "Ressuscitar", "Alimentar", "Estudar"], a: "Ressuscitar", def: "To restore a dead person or extinct species to life." },
            { sent: "The dodo bird is **extinct**.", word: "extinct", options: ["Raro", "Extinto(a)", "Perigoso", "Famoso"], a: "Extinto(a)", def: "Having no living members of a species." },
            { sent: "We must discuss the **ethics** of this experiment.", word: "ethics", options: ["Custos", "Ética / Princípios morais", "Resultados", "Ferramentas"], a: "Ética / Princípios morais", def: "Moral principles that govern a person's behavior." },
            { sent: "Is it a **moral** decision to clone animals?", word: "moral", options: ["Rápida", "Moral", "Financeira", "Fácil"], a: "Moral", def: "Concerned with the principles of right and wrong behavior." },
            { sent: "We hope to find a **cure** for the disease.", word: "cure", options: ["Vacina", "Cura", "Causa", "Sintoma"], a: "Cura", def: "A substance or treatment that ends a disease or condition." },
            { sent: "A new virus could **break out** at any time.", word: "break out", options: ["Desaparecer", "Eclodir / Começar de repente", "Quebrar", "Curar"], a: "Eclodir / Começar de repente", def: "To start suddenly, especially a war or disease." },
            { sent: "New technologies **break into** the market rapidly.", word: "break into", options: ["Saem do", "Invadem / Entram repentinamente", "Destroem o", "Ignoram o"], a: "Invadem / Entram repentinamente", def: "To enter a field or market suddenly or forcefully." },
            { sent: "They must **carry out** the test again.", word: "carry out", options: ["Cancelar", "Realizar / Executar", "Adiar", "Esquecer"], a: "Realizar / Executar", def: "To perform or conduct a task or experiment." },
            { sent: "We will **carry on** with the research despite the risks.", word: "carry on", options: ["Parar", "Continuar", "Desistir", "Mudar"], a: "Continuar", def: "To persist in an activity despite challenges." },
            { sent: "The rules **carry over** to the next lab session.", word: "carry over", options: ["Mudam", "Permanecem / Continuam aplicáveis", "Terminam", "Quebram"], a: "Permanecem / Continuam aplicáveis", def: "To continue to exist or apply in a new situation." },
            { sent: "Her determination **carried** her **through** the hard times.", word: "carried through", options: ["Ajudou a superar / Levou a cabo", "Atrapalhou", "Assustou", "Deixou para trás"], a: "Ajudou a superar / Levou a cabo", def: "To help someone survive a difficult period or complete a project." },
            { sent: "The complete **genome** was mapped.", word: "genome", options: ["Sangue", "Genoma", "Cérebro", "Corpo"], a: "Genoma", def: "The complete set of genetic material in an organism." },
            { sent: "Every action has a potential **consequence**.", word: "consequence", options: ["Início", "Consequência / Resultado", "Causa", "Motivo"], a: "Consequência / Resultado", def: "A result or effect of an action or condition." },
            { sent: "This treatment has great **potential**.", word: "potential", options: ["Risco", "Potencial / Capacidade futura", "Custo", "Problema"], a: "Potencial / Capacidade futura", def: "Having or showing the capacity to develop into something in the future." },
            { sent: "Gene editing is a **controversial** subject.", word: "controversial", options: ["Aceito por todos", "Controverso / Polêmico", "Antigo", "Simples"], a: "Controverso / Polêmico", def: "Likely to give rise to public disagreement." },
            { sent: "We must evaluate the **risk** before proceeding.", word: "risk", options: ["Benefício", "Risco / Perigo", "Lucro", "Sucesso"], a: "Risco / Perigo", def: "A situation involving exposure to danger." },
            { sent: "This pill is a great **benefit** for patients.", word: "benefit", options: ["Problema", "Benefício / Vantagem", "Risco", "Efeito colateral"], a: "Benefício / Vantagem", def: "An advantage or profit gained from something." },
            { sent: "They want to **modify** the plant's DNA.", word: "modify", options: ["Destruir", "Modificar / Alterar", "Copiar", "Estudar"], a: "Modificar / Alterar", def: "To make partial or minor changes to something." },
            { sent: "The **disease** spread quickly.", word: "disease", options: ["Doença / Enfermidade", "Cura", "Saúde", "Remédio"], a: "Doença / Enfermidade", def: "A disorder of structure or function in a human, animal, or plant." },
            { sent: "**Cloning** sheep is now a reality.", word: "Cloning", options: ["Caçar", "Clonar / Clonagem", "Alimentar", "Extinguir"], a: "Clonar / Clonagem", def: "The process of creating an identical copy of a biological entity." },
            { sent: "The **mammoth** lived during the Ice Age.", word: "mammoth", options: ["Dinossauro", "Mamute", "Tigre dente-de-sabre", "Urso"], a: "Mamute", def: "A large, extinct elephant with tusks and long hair." },
            { sent: "There are millions of animal **species**.", word: "species", options: ["Plantas", "Espécies", "Pedras", "Planetas"], a: "Espécies", def: "A group of living organisms consisting of similar individuals." },
            { sent: "He is a famous **scientist**.", word: "scientist", options: ["Médico", "Cientista", "Engenheiro", "Professor"], a: "Cientista", def: "A person who is studying or has expert knowledge of natural or physical sciences." },
            { sent: "The lab **experiment** failed.", word: "experiment", options: ["Reunião", "Experimento / Experiência", "Acordo", "Livro"], a: "Experimento / Experiência", def: "A scientific procedure undertaken to make a discovery or test a hypothesis." },
            { sent: "We must map the **DNA**.", word: "DNA", options: ["Sangue", "ADN / DNA", "Cérebro", "Coração"], a: "ADN / DNA", def: "Deoxyribonucleic acid; the carrier of genetic information." },
            { sent: "Can you separate **fact** from fiction?", word: "fact", options: ["Mentira", "Fato / Verdade", "História", "Ideia"], a: "Fato / Verdade", def: "A thing that is known or proved to be true." },
            { sent: "That story is pure **fiction**.", word: "fiction", options: ["Fato", "Ficção / Invenção", "Verdade", "Ciência"], a: "Ficção / Invenção", def: "Something that is invented or untrue; not based on reality." },
            { sent: "The new medicine is a huge **advance**.", word: "advance", options: ["Retrocesso", "Avanço / Progresso", "Risco", "Problema"], a: "Avanço / Progresso", def: "A development or improvement in a specific field." },
            { sent: "We use **technology** to improve our lives.", word: "technology", options: ["Magia", "Tecnologia", "Sorte", "Força"], a: "Tecnologia", def: "The application of scientific knowledge for practical purposes." },
            { sent: "They want to **develop** a new strain of wheat.", word: "develop", options: ["Destruir", "Desenvolver", "Comer", "Esconder"], a: "Desenvolver", def: "To grow or cause to grow and become more mature or advanced." },
            { sent: "The **research** took five years to complete.", word: "research", options: ["Viagem", "Pesquisa", "Construção", "Aula"], a: "Pesquisa", def: "The systematic investigation into and study of materials and sources." },
            { sent: "I **stopped to think** about the decision.", word: "stopped to think", options: ["Parei de pensar", "Parei para pensar", "Continuei pensando", "Odiei pensar"], a: "Parei para pensar", def: "To stop an activity in order to do something else (think)." },
            { sent: "We **stopped discussing** the rules because it was late.", word: "stopped discussing", options: ["Paramos para discutir", "Paramos de discutir", "Começamos a discutir", "Adoramos discutir"], a: "Paramos de discutir", def: "To cease an action or activity (discussing)." },
            { sent: "I **remember seeing** that movie when I was young.", word: "remember seeing", options: ["Lembro de ter visto (memória passada)", "Lembre-se de ver (tarefa futura)", "Esqueci de ver", "Odeio ver"], a: "Lembro de ter visto (memória passada)", def: "To have a memory of a past action." },
            { sent: "**Remember to check** the locks before you leave.", word: "Remember to check", options: ["Lembro de ter checado", "Lembre-se de checar (tarefa/obrigação)", "Esqueça de checar", "Evite checar"], a: "Lembre-se de checar (tarefa/obrigação)", def: "Not to forget to do a required task." },
            { sent: "They **tried editing** the code, but it didn't work.", word: "tried editing", options: ["Fizeram um grande esforço para editar", "Tentaram/Testaram editar (como experimento)", "Odiaram editar", "Pararam de editar"], a: "Tentaram/Testaram editar (como experimento)", def: "To do something as an experiment to see what happens." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 ITEMS) ---
        5: [
            { sent: "Scientists hope **finding** a cure for the disease soon.", correct: "to find" },
            { sent: "We enjoy **to learn** about genetics in biology class.", correct: "learning" },
            { sent: "She decided **carrying out** the experiment tomorrow.", correct: "to carry out" },
            { sent: "You must avoid **to make** mistakes when editing DNA.", correct: "making" },
            { sent: "I stopped **talking** to answer my phone. (He paused to answer)", correct: "to talk" },
            { sent: "Please remember **locking** the lab door when you leave tonight.", correct: "to lock" },
            { sent: "I will never forget **to see** the mammoth skeleton for the first time.", correct: "seeing" },
            { sent: "The teacher let the students **to use** the microscope.", correct: "use" },
            { sent: "The discovery encouraged him **researching** more about CRISPR.", correct: "to research" },
            { sent: "The team broke **off** after they couldn't agree on the ethics.", correct: "up" },
            { sent: "A dangerous virus broke **into** in the isolated village. (Meaning started suddenly)", correct: "out" },
            { sent: "CRISPR technology breaks **through** the DNA to modify it. (Meaning enter forcefully/suddenly into the gene structure)", correct: "into" },
            { sent: "Her determination carried her **over** the difficult crisis.", correct: "through" },
            { sent: "The safety rules will carry **out** to the next experiment. (Meaning remain/continue)", correct: "over" },
            { sent: "We must carry **in** with our research despite the criticism.", correct: "on" },
            { sent: "They plan **publishing** the research paper next month.", correct: "to publish" },
            { sent: "The complex protein structure suffered a major **break up** during the test. (Meaning analysis/failure)", correct: "breakdown" },
            { sent: "The new vaccine is considered a huge medical **break in**. (Meaning discovery)", correct: "breakthrough" },
            { sent: "I suggest **to check** the data again before presenting.", correct: "checking" },
            { sent: "They made me **to understand** the risks of cloning.", correct: "understand" },
            { sent: "We want **resurrecting** extinct species like the dodo.", correct: "to resurrect" },
            { sent: "Try **to add** more heat to see if the chemical reacts faster. (Doing it as an experiment)", correct: "adding" },
            { sent: "I am trying **lifting** this heavy box, but I can't. (Making a difficult effort)", correct: "to lift" },
            { sent: "He refused **answering** the controversial questions.", correct: "to answer" },
            { sent: "The committee advised scientists **stopping** the dangerous trials.", correct: "to stop" },
            { sent: "They kept **to experiment** even when the results were bad.", correct: "experimenting" },
            { sent: "She finished **to write** her thesis on genetic mutations.", correct: "writing" },
            { sent: "I don't mind **to help** you clean the laboratory.", correct: "helping" },
            { sent: "The ethics board allows us **proceeding** with caution.", correct: "to proceed" },
            { sent: "The teacher forced the student **redo** the failed assignment.", correct: "to redo" },
            { sent: "I remember **to read** that sci-fi book when I was a kid.", correct: "reading" },
            { sent: "He forgot **to mention** the potential side effects in his speech yesterday. (Wait, if he failed to do the task, \"to mention\" is correct. Let's create an error). -> He forgot mentioning the potential side effects during his speech, so he got in trouble.", correct: "to mention" },
            { sent: "I forgot **locking** the door, I have to go back. (He didn't do the task).", correct: "to lock" },
            { sent: "We stopped **to work** because it was already midnight. (They ceased the activity).", correct: "working" },
            { sent: "While walking, I stopped **looking** at the beautiful sunset. (Paused in order to look).", correct: "to look" },
            { sent: "They chose **focusing** on the benefits rather than the risks.", correct: "to focus" },
            { sent: "I recommend **to use** the new software for sequencing.", correct: "using" },
            { sent: "We need **evaluating** all the ethical consequences carefully.", correct: "to evaluate" },
            { sent: "Imagine **to clone** a dinosaur in the modern world!", correct: "cloning" },
            { sent: "The professor invited the expert **speaking** at the seminar.", correct: "to speak" }
        ],

        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Group 1
            { pairs: [{a: "What is CRISPR technology?", b: "It is a tool that acts like molecular scissors for DNA."}, {a: "Why do scientists want to use it?", b: "They hope to cure genetic diseases."}, {a: "What happened during the experiment?", b: "A new breakthrough in gene editing was achieved."}, {a: "Did the team finish their research?", b: "No, the team broke up because of ethical disagreements."}, {a: "Why are some people worried?", b: "They fear a dangerous mutation could break out."}] },
            // Group 2
            { pairs: [{a: "Do you remember seeing Dolly the sheep?", b: "Yes, I remember reading about her in a magazine."}, {a: "Did he forget to lock the lab?", b: "Yes, he forgot to do it before he left."}, {a: "Why did the professor stop talking?", b: "He stopped to answer a student's question."}, {a: "Have they stopped cloning animals?", b: "Yes, they stopped doing it due to public pressure."}, {a: "Why are they trying to edit the gene?", b: "They are trying editing the sequence to see what happens."}] },
            // Group 3
            { pairs: [{a: "Are they trying to resurrect the mammoth?", b: "Yes, they are making a huge effort to do it."}, {a: "Did the scientist carry out the test?", b: "Yes, the experiment was performed yesterday."}, {a: "Will the safety rules carry over?", b: "Yes, they will remain in the next phase."}, {a: "How did her courage help her?", b: "It carried her through the difficult crisis."}, {a: "Did they discover a new species?", b: "Yes, it was a major scientific breakthrough."}] },
            // Group 4
            { pairs: [{a: "Is it moral to clone human beings?", b: "It is a very controversial ethical issue."}, {a: "What is a genome?", b: "It is the complete set of genetic material in an organism."}, {a: "Why do we need a breakdown of the costs?", b: "Because the research is very expensive."}, {a: "What happens when a species becomes extinct?", b: "There are no living members left on Earth."}, {a: "Did the hacker break into the system?", b: "Yes, he invaded the digital database."}] },
            // Group 5
            { pairs: [{a: "What do critics advise scientists to do?", b: "They advise them to stop and consider the risks."}, {a: "Do you enjoy studying genetics?", b: "Yes, I enjoy learning about DNA and mutations."}, {a: "Did the government allow the lab to open?", b: "Yes, they allowed the researchers to proceed."}, {a: "What did the teacher encourage you to do?", b: "She encouraged me to study biology in college."}, {a: "Did they decide to postpone the trial?", b: "Yes, they decided to wait until next year."}] },
            // Group 6
            { pairs: [{a: "What is the potential of this discovery?", b: "It has the potential to change modern medicine."}, {a: "Can we prevent all illnesses?", b: "We hope to eliminate many deadly diseases."}, {a: "How did the debate start?", b: "It broke out suddenly during the conference."}, {a: "Are you planning to carry on with the project?", b: "Yes, I will persist despite the challenges."}, {a: "What did he forget to mention?", b: "He failed to talk about the negative consequences."}] },
            // Group 7
            { pairs: [{a: "Why do you want to be a scientist?", b: "Because I want to make important discoveries."}, {a: "Do you mind waiting for the results?", b: "No, I don't mind waiting a few more days."}, {a: "Did she suggest changing the method?", b: "Yes, she suggested carrying out a different test."}, {a: "What did the experiment prove?", b: "It separated fact from science fiction."}, {a: "Did the researchers keep working?", b: "Yes, they kept experimenting until they succeeded."}] },
            // Group 8
            { pairs: [{a: "Why is the Dodo bird famous?", b: "It is a well-known extinct bird."}, {a: "Can we resurrect dinosaurs?", b: "Most scientists agree that it is impossible."}, {a: "What is a mutation?", b: "It is a permanent alteration in the DNA sequence."}, {a: "Who is responsible for the clinical research?", b: "A team of highly trained geneticists."}, {a: "What is the benefit of this drug?", b: "It provides a quick cure for the infection."}] },
            // Group 9
            { pairs: [{a: "Why did she stop to look at the microscope?", b: "She paused her walk to check the slide."}, {a: "Have they stopped looking for a cure?", b: "No, they haven't ceased their efforts."}, {a: "Do you remember to turn off the machines?", b: "Yes, I never forget to perform that task."}, {a: "Did he try using a different chemical?", b: "Yes, he tested it to see if it would react better."}, {a: "Are they trying to break the code?", b: "Yes, they are making a great effort to decode it."}] },
            // Group 10
            { pairs: [{a: "What is de-extinction?", b: "The process of bringing back an extinct species."}, {a: "Is the Ice Age animal coming back?", b: "Scientists are studying the mammoth's DNA."}, {a: "What did the committee discuss?", b: "They discussed the ethical consequences of the act."}, {a: "Did they let you use the lab?", b: "Yes, the principal let us run the simulation."}, {a: "Did the news break into the mainstream media?", b: "Yes, it became a viral topic overnight."}] },
            // Group 11
            { pairs: [{a: "Scientists hope to", b: "cure rare genetic diseases."}, {a: "The team decided to", b: "carry out the experiment on Friday."}, {a: "I remember seeing", b: "that documentary about cloning years ago."}, {a: "Please remember to", b: "check the temperature of the samples."}, {a: "We stopped discussing", b: "the issue because we were exhausted."}] },
            // Group 12
            { pairs: [{a: "The professor stopped to", b: "answer the student's complex question."}, {a: "He completely forgot to", b: "mention the ethical risks in his paper."}, {a: "I will never forget", b: "hearing about the CRISPR breakthrough."}, {a: "They enjoy learning", b: "about how DNA structures work."}, {a: "We must avoid making", b: "terrible moral mistakes in science."}] },
            // Group 13
            { pairs: [{a: "The new vaccine is a", b: "major medical breakthrough."}, {a: "We need a detailed", b: "breakdown of the experiment's results."}, {a: "The unexpected team", b: "breakup delayed the research by months."}, {a: "A dangerous disease could", b: "break out if we aren't careful."}, {a: "The hacker managed to", b: "break into the secure lab network."}] },
            // Group 14
            { pairs: [{a: "Despite the difficulties, they", b: "carried on with their vital research."}, {a: "Her strong determination", b: "carried her through the crisis."}, {a: "The safety regulations will", b: "carry over to the next project phase."}, {a: "They finally managed to", b: "break through the barriers of science."}, {a: "The researchers are trying to", b: "resurrect the extinct mammoth."}] },
            // Group 15
            { pairs: [{a: "Try adding more heat", b: "to see if the chemical reacts faster."}, {a: "We are trying to", b: "extract DNA from this old fossil."}, {a: "The ethics committee allows", b: "us to consider all possible risks."}, {a: "Our teacher always encourages", b: "us to ask difficult questions."}, {a: "The principal let the", b: "students use the new microscopes."}] },
            // Group 16
            { pairs: [{a: "The complete set of", b: "genetic material is called a genome."}, {a: "A mutation is a permanent", b: "alteration in the DNA sequence."}, {a: "We must discuss the ethics", b: "of modifying human embryos."}, {a: "Resurrecting extinct animals is", b: "a very controversial topic today."}, {a: "Every scientific action has", b: "a potential consequence for humanity."}] },
            // Group 17
            { pairs: [{a: "They plan to develop", b: "a new technology for gene editing."}, {a: "He refused to answer", b: "the reporter's questions about the leak."}, {a: "I suggest carrying out", b: "another test to verify the data."}, {a: "Do you mind waiting", b: "for the lab results to be printed?"}, {a: "She kept experimenting", b: "until she found the right formula."}] },
            // Group 18
            { pairs: [{a: "The discovery of DNA", b: "changed the course of modern science."}, {a: "The extinction of the dodo", b: "is a famous historical example."}, {a: "This new medical treatment", b: "provides a huge benefit to patients."}, {a: "It is hard to separate", b: "scientific fact from science fiction."}, {a: "There is always a risk", b: "when testing unverified technologies."}] },
            // Group 19
            { pairs: [{a: "He is the scientist who", b: "pioneered the CRISPR technique."}, {a: "The laboratory where they", b: "work is highly restricted."}, {a: "I promise to help", b: "you write the research paper."}, {a: "They want to find", b: "a solution to the genetic disorder."}, {a: "She was forced to", b: "abandon the controversial experiment."}] },
            // Group 20
            { pairs: [{a: "The teacher made me", b: "understand the complex biology logic."}, {a: "I recommend reading", b: "this article on de-extinction."}, {a: "We finished writing", b: "the report right before the deadline."}, {a: "He advised the scientists", b: "to stop the dangerous trials."}, {a: "The mammoth lived", b: "during the cold Ice Age."}] },
            // Group 21
            { pairs: [{a: "Breakthrough", b: "Avanço / Descoberta importante"}, {a: "Breakdown", b: "Análise detalhada / Falha"}, {a: "Breakup", b: "Separação / Fim de equipe"}, {a: "Gene editing", b: "Edição de genes"}, {a: "Cloning", b: "Clonagem"}] },
            // Group 22
            { pairs: [{a: "Carry out", b: "Realizar / Executar"}, {a: "Carry on", b: "Continuar"}, {a: "Carry through", b: "Ajudar a superar / Concluir com sucesso"}, {a: "Carry over", b: "Permanecer / Transferir para a próxima fase"}, {a: "Break out", b: "Eclodir / Escapar"}] },
            // Group 23
            { pairs: [{a: "Break into", b: "Invadir / Começar de repente"}, {a: "Break through", b: "Romper barreira / Fazer descoberta"}, {a: "Extinct", b: "Extinto(a)"}, {a: "Resurrect", b: "Ressuscitar"}, {a: "Species", b: "Espécie(s)"}] },
            // Group 24
            { pairs: [{a: "Disease / Illness", b: "Doença"}, {a: "Cure", b: "Cura"}, {a: "Ethics", b: "Ética"}, {a: "Moral", b: "Moral"}, {a: "Controversial", b: "Controverso(a) / Polêmico(a)"}] },
            // Group 25
            { pairs: [{a: "Consequence", b: "Consequência"}, {a: "Potential", b: "Potencial"}, {a: "Risk / Danger", b: "Risco / Perigo"}, {a: "Fact", b: "Fato"}, {a: "Fiction", b: "Ficção"}] },
            // Group 26
            { pairs: [{a: "Genome", b: "Genoma"}, {a: "DNA", b: "ADN / DNA"}, {a: "Mutation", b: "Mutação"}, {a: "Experiment", b: "Experimento / Experiência"}, {a: "Research", b: "Pesquisa"}] },
            // Group 27
            { pairs: [{a: "I remember seeing it.", b: "Eu me lembro de ter visto isso."}, {a: "Remember to check it.", b: "Lembre-se de checar isso."}, {a: "He stopped smoking.", b: "Ele parou de fumar."}, {a: "He stopped to smoke.", b: "Ele parou para fumar."}, {a: "I forgot doing it.", b: "Eu esqueci de ter feito isso."}] },
            // Group 28
            { pairs: [{a: "I forgot to do it.", b: "Eu esqueci de fazer isso."}, {a: "Try restarting the computer.", b: "Tente reiniciar o computador (como um teste)."}, {a: "Try to lift the box.", b: "Tente levantar a caixa (esforço)."}, {a: "Let me go.", b: "Deixe-me ir."}, {a: "They made me think.", b: "Eles me fizeram pensar."}] },
            // Group 29
            { pairs: [{a: "Develop", b: "Desenvolver"}, {a: "Edit / Modify", b: "Editar / Modificar"}, {a: "Science", b: "Ciência"}, {a: "Scientist", b: "Cientista"}, {a: "Benefit", b: "Benefício"}] },
            // Group 30
            { pairs: [{a: "Enjoy reading", b: "Gostar de ler"}, {a: "Avoid making", b: "Evitar fazer"}, {a: "Want to find", b: "Querer encontrar"}, {a: "Hope to cure", b: "Esperar curar"}, {a: "Suggest carrying out", b: "Sugerir realizar"}] },
            // Group 31
            { pairs: [{a: "Breakthrough", b: "A major scientific discovery."}, {a: "Breakdown", b: "A failure of a system or a detailed analysis."}, {a: "Breakup", b: "The end of a partnership or group."}, {a: "Break out", b: "To start suddenly, like a disease."}, {a: "Break into", b: "To enter forcefully or start suddenly."}] },
            // Group 32
            { pairs: [{a: "Carry out", b: "To perform an experiment or task."}, {a: "Carry on", b: "To continue doing something."}, {a: "Carry through", b: "To help someone survive a crisis."}, {a: "Carry over", b: "To transfer to a new situation."}, {a: "Break through", b: "To overcome an obstacle."}] },
            // Group 33
            { pairs: [{a: "Stop + gerund", b: "To cease an action completely."}, {a: "Stop + infinitive", b: "To pause in order to do something else."}, {a: "Remember + gerund", b: "To have a memory of the past."}, {a: "Remember + infinitive", b: "Not to forget a required task."}, {a: "Try + gerund", b: "To test something as an experiment."}] },
            // Group 34
            { pairs: [{a: "Try + infinitive", b: "To make an effort to do something difficult."}, {a: "Forget + gerund", b: "To lose the memory of a past event."}, {a: "Forget + infinitive", b: "To fail to do a scheduled task."}, {a: "Let", b: "To allow someone to do something (uses base verb)."}, {a: "Make", b: "To force someone to do something (uses base verb)."}] },
            // Group 35
            { pairs: [{a: "CRISPR", b: "A technology used to edit DNA."}, {a: "Genome", b: "The complete set of genes in an organism."}, {a: "Mutation", b: "A permanent change in a DNA sequence."}, {a: "De-extinction", b: "The process of resurrecting an extinct species."}, {a: "Ethics", b: "Moral principles governing behavior."}] },
            // Group 36
            { pairs: [{a: "Extinct", b: "Having no living members."}, {a: "Mammoth", b: "A large, extinct hairy elephant."}, {a: "Cure", b: "A treatment that relieves or ends a disease."}, {a: "Disease", b: "An illness affecting humans, animals, or plants."}, {a: "Consequence", b: "The result of an action."}] },
            // Group 37
            { pairs: [{a: "Controversial", b: "Likely to cause public disagreement."}, {a: "Moral", b: "Concerned with right and wrong behavior."}, {a: "Potential", b: "The capacity to develop in the future."}, {a: "Risk", b: "A situation involving exposure to danger."}, {a: "Fact", b: "Something known to be true."}] },
            // Group 38
            { pairs: [{a: "Fiction", b: "Something invented or untrue."}, {a: "Modify", b: "To make partial changes to something."}, {a: "Research", b: "Systematic investigation to establish facts."}, {a: "Develop", b: "To grow or cause to become more advanced."}, {a: "Clone", b: "To create an identical genetic copy."}] },
            // Group 39
            { pairs: [{a: "Gerund", b: "The -ing form of a verb acting as a noun."}, {a: "Infinitive", b: "The base form of a verb, usually with \"to\"."}, {a: "Phrasal verb", b: "A verb combined with an adverb or preposition."}, {a: "Species", b: "A group of similar living organisms."}, {a: "Benefit", b: "An advantage gained from something."}] },
            // Group 40
            { pairs: [{a: "Enjoy", b: "Verb pattern taking a gerund."}, {a: "Want", b: "Verb pattern taking an infinitive."}, {a: "Encourage", b: "Verb pattern taking an object + infinitive."}, {a: "Help", b: "Verb pattern taking an object + base verb."}, {a: "Suggest", b: "Verb pattern taking a gerund."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 ITEMS) ---
        7: [
            { q: "Why did the scientists stop the experiment?", options: ["They stopped to discuss the ethical risks.", "They stopped discussing the ethical risks.", "They stopped to broke down.", "They stopped carry out."], a: "They stopped to discuss the ethical risks." },
            { q: "What do you remember about that documentary?", options: ["I remember seeing a cloned sheep.", "I remember to see a cloned sheep.", "I remember see a cloned sheep.", "I remember saw a cloned sheep."], a: "I remember seeing a cloned sheep." },
            { q: "When did the disease break out?", options: ["It broke out suddenly last winter.", "It broke down suddenly.", "It broke into suddenly.", "It broke up suddenly."], a: "It broke out suddenly last winter." },
            { q: "Who forgot to lock the laboratory?", options: ["Albert forgot to lock it before leaving.", "Albert forgot locking it before leaving.", "Albert forgot lock it.", "Albert forgot locked it."], a: "Albert forgot to lock it before leaving." },
            { q: "How do they plan to test the new gene sequence?", options: ["They will try editing the DNA to see the reaction.", "They will try to edit the DNA to make a hard effort.", "They will try edit.", "They will try edited."], a: "They will try editing the DNA to see the reaction." },
            { q: "What is a major scientific breakthrough?", options: ["A significant discovery that changes science.", "A failure of the equipment.", "The end of a research team.", "A disease that starts suddenly."], a: "A significant discovery that changes science." },
            { q: "Where did the hackers break into?", options: ["They broke into the secure digital network.", "They broke out the secure network.", "They broke through the secure network.", "They broke down the secure network."], a: "They broke into the secure digital network." },
            { q: "Why did the research team break up?", options: ["Because they had strong moral disagreements.", "Because they carried out a success.", "Because they carried over the rules.", "Because they remembered to clone."], a: "Because they had strong moral disagreements." },
            { q: "What must you remember to do tomorrow?", options: ["I must remember to check the DNA samples.", "I must remember checking the DNA samples.", "I must remember check the DNA samples.", "I must remember checked the DNA samples."], a: "I must remember to check the DNA samples." },
            { q: "How did her courage help the team?", options: ["It carried them through the difficult crisis.", "It carried them out the difficult crisis.", "It carried them on the difficult crisis.", "It carried them over the difficult crisis."], a: "It carried them through the difficult crisis." },
            { q: "What do you enjoy doing in biology class?", options: ["I enjoy learning about genetics.", "I enjoy to learn about genetics.", "I enjoy learn about genetics.", "I enjoy learned about genetics."], a: "I enjoy learning about genetics." },
            { q: "Why did they decide to postpone the trial?", options: ["Because they want to avoid making a dangerous mistake.", "Because they want to avoid to make a mistake.", "Because they want to avoid make a mistake.", "Because they want to avoid made a mistake."], a: "Because they want to avoid making a dangerous mistake." },
            { q: "Who allowed the students to use the microscope?", options: ["The teacher let them use it.", "The teacher let them to use it.", "The teacher let them using it.", "The teacher let them used it."], a: "The teacher let them use it." },
            { q: "What do scientists hope to achieve with CRISPR?", options: ["They hope to cure rare illnesses.", "They hope curing rare illnesses.", "They hope cure rare illnesses.", "They hope cured rare illnesses."], a: "They hope to cure rare illnesses." },
            { q: "How long does clinical research usually take?", options: ["It often takes many years to complete.", "It often breaks out.", "It often breaks up.", "It often carries over."], a: "It often takes many years to complete." },
            { q: "Why did he stop playing video games?", options: ["He stopped playing them because he needed to study.", "He stopped to play them because he needed to study.", "He stopped play them.", "He stopped played them."], a: "He stopped playing them because he needed to study." },
            { q: "What did the teacher force the student to do?", options: ["She forced him to rewrite the science report.", "She forced him rewriting the report.", "She forced him rewrite the report.", "She forced him rewrites the report."], a: "She forced him to rewrite the science report." },
            { q: "Why are they trying to lift that heavy mammoth bone?", options: ["Because they are making a physical effort to move it.", "Because they are doing an experiment to see what happens.", "Because they forgot lifting it.", "Because they stopped to lift it."], a: "Because they are making a physical effort to move it." },
            { q: "What is the noun for a detailed analysis or failure?", options: ["A breakdown.", "A breakthrough.", "A breakup.", "A breakout."], a: "A breakdown." },
            { q: "Where do the old rules apply?", options: ["They carry over to the new experimental phase.", "They carry out to the new phase.", "They carry through to the new phase.", "They carry on to the new phase."], a: "They carry over to the new experimental phase." },
            { q: "What did he suggest doing?", options: ["He suggested carrying out a new test.", "He suggested to carry out a new test.", "He suggested carry out a new test.", "He suggested carried out a new test."], a: "He suggested carrying out a new test." },
            { q: "Why is resurrecting extinct species controversial?", options: ["Because it involves many ethical and ecological risks.", "Because it is a simple procedure.", "Because it breaks down the lab.", "Because everyone agrees it is safe."], a: "Because it involves many ethical and ecological risks." },
            { q: "Who made you think about the moral consequences?", options: ["The professor made me think about them.", "The professor made me to think about them.", "The professor made me thinking about them.", "The professor made me thought about them."], a: "The professor made me think about them." },
            { q: "What do you want to develop in the future?", options: ["I want to develop a cure for cancer.", "I want developing a cure for cancer.", "I want develop a cure for cancer.", "I want developed a cure for cancer."], a: "I want to develop a cure for cancer." },
            { q: "When did the pandemic break out?", options: ["It broke out rapidly in 2020.", "It broke down rapidly.", "It broke into rapidly.", "It broke through rapidly."], a: "It broke out rapidly in 2020." },
            { q: "Why did you stop to call him?", options: ["Because I needed to ask him a question.", "Because I quit the habit of calling him.", "Because I finished calling him.", "Because I enjoy calling him."], a: "Because I needed to ask him a question." },
            { q: "What did the scientists carry out yesterday?", options: ["They carried out the complex DNA sequencing.", "They carried on the DNA sequencing.", "They carried over the DNA sequencing.", "They carried through the DNA sequencing."], a: "They carried out the complex DNA sequencing." },
            { q: "How do you feel about cloning?", options: ["I don't mind discussing it, but it's risky.", "I don't mind to discuss it.", "I don't mind discuss it.", "I don't mind discussed it."], a: "I don't mind discussing it, but it's risky." },
            { q: "Why did she keep experimenting?", options: ["Because she wanted to find a breakthrough.", "Because she forgot to experiment.", "Because she refused experimenting.", "Because she let experimenting."], a: "Because she wanted to find a breakthrough." },
            { q: "What does CRISPR technology allow scientists to do?", options: ["It allows them to modify genes precisely.", "It allows them modifying genes.", "It allows them modify genes.", "It allows them modified genes."], a: "It allows them to modify genes precisely." },
            { q: "Who advised the team to stop the project?", options: ["The ethics committee advised them to stop.", "The ethics committee advised them stopping.", "The ethics committee advised them stop.", "The ethics committee advised them stopped."], a: "The ethics committee advised them to stop." },
            { q: "What will happen if the experiment fails?", options: ["We will just carry on and try again.", "We will just carry out and try again.", "We will just carry over and try again.", "We will just break into and try again."], a: "We will just carry on and try again." },
            { q: "Why did he forget seeing the documentary?", options: ["Because his memory of the past event faded.", "Because he failed to do a scheduled task.", "Because he stopped to see it.", "Because he tried seeing it."], a: "Because his memory of the past event faded." },
            { q: "What did the thief break into?", options: ["He broke into the secure genetic database.", "He broke out the database.", "He broke down the database.", "He broke up the database."], a: "He broke into the secure genetic database." },
            { q: "Why do they plan to resurrect the mammoth?", options: ["Because they want to restore the ancient ecosystem.", "Because they want restoring the ecosystem.", "Because they want restore the ecosystem.", "Because they want restored the ecosystem."], a: "Because they want to restore the ancient ecosystem." },
            { q: "What is the consequence of a DNA mutation?", options: ["It can permanently change the organism's traits.", "It can permanently break up the organism.", "It can permanently carry out the organism.", "It can permanently break into the organism."], a: "It can permanently change the organism's traits." },
            { q: "How did she break through the glass ceiling?", options: ["She made a major discovery that proved her talent.", "She broke out a major discovery.", "She broke down a major discovery.", "She carried over a major discovery."], a: "She made a major discovery that proved her talent." },
            { q: "Why did you try using the blue chemical?", options: ["To see if it would create a different reaction as a test.", "Because I made a difficult physical effort.", "Because I forgot using it.", "Because I stopped to use it."], a: "To see if it would create a different reaction as a test." },
            { q: "What did the speaker refuse to do?", options: ["He refused to answer the controversial question.", "He refused answering the controversial question.", "He refused answer the controversial question.", "He refused answered the controversial question."], a: "He refused to answer the controversial question." },
            { q: "Who helped you finish the lab report?", options: ["Celine helped me write the conclusion.", "Celine helped me writing the conclusion.", "Celine helped me to writing the conclusion.", "Celine helped me wrote the conclusion."], a: "Celine helped me write the conclusion." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 ITEMS) ---
        8: [
            { sent: "The scientists made a huge **breakdown** that cured the disease.", wrong: "breakdown", options: ["breakthrough", "breakup", "breakout", "break-in"], a: "breakthrough" },
            { sent: "She forgot **to lock** the door; she clearly remembers turning the key yesterday. (Memory of the past)", wrong: "to lock", options: ["locking", "lock", "locked", "to locking"], a: "locking" },
            { sent: "They stopped **to talk** because the movie was starting and they needed to be quiet. (Ceased the activity)", wrong: "to talk", options: ["talking", "talk", "talked", "to talking"], a: "talking" },
            { sent: "We must **carry over** the experiment right now to get the results.", wrong: "carry over", options: ["carry out", "carry on", "carry through", "break out"], a: "carry out" },
            { sent: "A new virus **broke into** in the city last week.", wrong: "broke into", options: ["broke out", "broke down", "broke up", "carried out"], a: "broke out" },
            { sent: "The team **breakthrough** happened because they hated each other.", wrong: "breakthrough", options: ["breakup", "breakdown", "breakout", "break-in"], a: "breakup" },
            { sent: "We need a detailed **breakup** of the financial costs.", wrong: "breakup", options: ["breakdown", "breakthrough", "breakout", "break-in"], a: "breakdown" },
            { sent: "He advised me **waiting** for the test results.", wrong: "waiting", options: ["to wait", "wait", "waited", "to waiting"], a: "to wait" },
            { sent: "I enjoy **to read** science fiction books.", wrong: "to read", options: ["reading", "read", "readed", "to reading"], a: "reading" },
            { sent: "The teacher made the student **to clean** the lab.", wrong: "to clean", options: ["clean", "cleaning", "cleaned", "to cleaning"], a: "clean" },
            { sent: "She let me **using** her microscope.", wrong: "using", options: ["use", "to use", "used", "to using"], a: "use" },
            { sent: "They decided **carrying out** the mission.", wrong: "carrying out", options: ["to carry out", "carry out", "carried out", "to carrying out"], a: "to carry out" },
            { sent: "We must avoid **to pollute** the rivers.", wrong: "to pollute", options: ["polluting", "pollute", "polluted", "to polluting"], a: "polluting" },
            { sent: "I promise **helping** you with your homework.", wrong: "helping", options: ["to help", "help", "helped", "to helping"], a: "to help" },
            { sent: "The thief **broke out** the museum to steal the diamond.", wrong: "broke out", options: ["broke into", "broke down", "broke up", "carried over"], a: "broke into" },
            { sent: "Try **to restart** the computer; maybe that will fix the glitch easily. (As an experiment/test)", wrong: "to restart", options: ["restarting", "restart", "restarted", "to restarting"], a: "restarting" },
            { sent: "I tried **lifting** the car to save the cat, but it was too heavy! (Difficult effort)", wrong: "lifting", options: ["to lift", "lift", "lifted", "to lifting"], a: "to lift" },
            { sent: "I remember **to visit** Paris when I was five years old.", wrong: "to visit", options: ["visiting", "visit", "visited", "to visiting"], a: "visiting" },
            { sent: "Please remember **buying** milk on your way home tonight.", wrong: "buying", options: ["to buy", "buy", "bought", "to buying"], a: "to buy" },
            { sent: "The rules from chapter 1 **carry through** to chapter 2.", wrong: "carry through", options: ["carry over", "carry out", "break down", "break out"], a: "carry over" },
            { sent: "Her positive attitude carried her **out** the difficult depression.", wrong: "out", options: ["through", "over", "down", "out"], a: "through" },
            { sent: "We must **carry through** working even if we are tired.", wrong: "carry through", options: ["carry on", "carry out", "carry over", "break into"], a: "carry on" },
            { sent: "He refused **answering** the questions.", wrong: "answering", options: ["to answer", "answer", "answered", "to answering"], a: "to answer" },
            { sent: "I don't mind **to open** the window.", wrong: "to open", options: ["opening", "open", "opened", "to opening"], a: "opening" },
            { sent: "The genetic **extinction** changed the color of the butterfly's wings permanently.", wrong: "extinction", options: ["mutation", "cure", "breakthrough", "breakup"], a: "mutation" },
            { sent: "They are using cloning technology for the **ethics** of the dodo bird.", wrong: "ethics", options: ["de-extinction", "extinction", "disease", "breakdown"], a: "de-extinction" },
            { sent: "The mammoth is a common **fiction** that lives in the zoo today.", wrong: "fiction", options: ["species", "mutation", "cure", "breakthrough"], a: "species" },
            { sent: "The doctor found a **disease** that heals the patient completely.", wrong: "disease", options: ["cure", "mutation", "risk", "extinction"], a: "cure" },
            { sent: "Gene editing is a **moral** topic; everyone argues about it.", wrong: "moral", options: ["controversial", "safe", "extinct", "boring"], a: "controversial" },
            { sent: "They suggest **to run** a new simulation.", wrong: "to run", options: ["running", "run", "ran", "to running"], a: "running" },
            { sent: "We hope **finding** a solution to global warming.", wrong: "finding", options: ["to find", "find", "found", "to finding"], a: "to find" },
            { sent: "The scientist **carried on** a brilliant experiment yesterday.", wrong: "carried on", options: ["carried out", "carried over", "broke out", "broke down"], a: "carried out" },
            { sent: "A fire **broke into** in the forest due to the dry weather.", wrong: "broke into", options: ["broke out", "broke down", "broke up", "carried through"], a: "broke out" },
            { sent: "He **stopped smoking** to light a cigarette. (Paused to do the action)", wrong: "stopped smoking", options: ["stopped to smoke", "stopped smoke", "stopped smoked", "stopped to smoking"], a: "stopped to smoke" },
            { sent: "I forgot **to meet** her last year; my memory is terrible. (Past event)", wrong: "to meet", options: ["meeting", "meet", "met", "to meeting"], a: "meeting" },
            { sent: "She forgot **taking** her medicine this morning; now she is sick. (Failed a task)", wrong: "taking", options: ["to take", "take", "took", "to taking"], a: "to take" },
            { sent: "The teacher encouraged them **studying** harder.", wrong: "studying", options: ["to study", "study", "studied", "to studying"], a: "to study" },
            { sent: "They planned **traveling** to Mars.", wrong: "traveling", options: ["to travel", "travel", "traveled", "to traveling"], a: "to travel" },
            { sent: "The machine **broke out** and stopped working.", wrong: "broke out", options: ["broke down", "broke into", "broke up", "carried over"], a: "broke down" },
            { sent: "They want **modifying** the human DNA.", wrong: "modifying", options: ["to modify", "modify", "modified", "to modifying"], a: "to modify" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 ITEMS) ---
        9: [
            { audio: "Why did the research team break up?", options: ["Because they had strong ethical disagreements.", "Because they carried out a success.", "Because they carried over the rules.", "Because they remembered to clone."], a: "Because they had strong ethical disagreements." },
            { audio: "What is CRISPR technology?", options: ["It is a tool that acts like molecular scissors for DNA.", "It is an extinct mammoth.", "It is a broken down car.", "It is a virus that breaks out."], a: "It is a tool that acts like molecular scissors for DNA." },
            { audio: "Did you remember to lock the lab?", options: ["Yes, I locked it before I left.", "Yes, I remember locking it yesterday.", "No, I stopped to lock it.", "Yes, I tried locking it as an experiment."], a: "Yes, I locked it before I left." },
            { audio: "Why did the professor stop talking?", options: ["He stopped to answer a student's question.", "He stopped answering the question.", "He avoided to answer the question.", "He enjoyed to answer the question."], a: "He stopped to answer a student's question." },
            { audio: "Are they trying to resurrect the mammoth?", options: ["Yes, they are making a huge effort to do it.", "Yes, they are trying resurrecting it to see what happens.", "No, they forgot resurrecting it.", "Yes, they let it to resurrect."], a: "Yes, they are making a huge effort to do it." },
            { audio: "Did the scientist carry out the test?", options: ["Yes, the experiment was performed yesterday.", "Yes, the experiment carried over yesterday.", "Yes, the experiment broke out yesterday.", "Yes, the experiment broke up yesterday."], a: "Yes, the experiment was performed yesterday." },
            { audio: "Will the safety rules carry over?", options: ["Yes, they will remain in the next phase.", "Yes, they will perform the next phase.", "Yes, they will separate the next phase.", "Yes, they will invade the next phase."], a: "Yes, they will remain in the next phase." },
            { audio: "How did her courage help her?", options: ["It carried her through the difficult crisis.", "It carried her out the difficult crisis.", "It carried her on the difficult crisis.", "It carried her over the difficult crisis."], a: "It carried her through the difficult crisis." },
            { audio: "What happened during the experiment?", options: ["A new breakthrough in gene editing was achieved.", "A new breakdown in gene editing was achieved.", "A new breakup in gene editing was achieved.", "A new break in in gene editing was achieved."], a: "A new breakthrough in gene editing was achieved." },
            { audio: "Is it moral to clone human beings?", options: ["It is a very controversial ethical issue.", "It is a very safe genome.", "It is an extinct species.", "It is a detailed breakdown."], a: "It is a very controversial ethical issue." },
            { audio: "Why do we need a breakdown of the costs?", options: ["Because the research is very expensive and detailed.", "Because the research broke through the barrier.", "Because the research broke into the bank.", "Because the research carried on the cost."], a: "Because the research is very expensive and detailed." },
            { audio: "What happens when a species becomes extinct?", options: ["There are no living members left on Earth.", "It breaks out in the city.", "It carries out a mutation.", "It enjoys to live on Earth."], a: "There are no living members left on Earth." },
            { audio: "Did the hacker break into the system?", options: ["Yes, he invaded the digital database.", "Yes, he separated the digital database.", "Yes, he continued the digital database.", "Yes, he performed the digital database."], a: "Yes, he invaded the digital database." },
            { audio: "What do critics advise scientists to do?", options: ["They advise them to stop and consider the risks.", "They advise them stopping and considering the risks.", "They advise to stop scientists.", "They advise them stop and consider."], a: "They advise them to stop and consider the risks." },
            { audio: "Do you enjoy studying genetics?", options: ["Yes, I enjoy learning about DNA and mutations.", "Yes, I enjoy to learn about DNA.", "Yes, I enjoy learn about DNA.", "Yes, I enjoy learned about DNA."], a: "Yes, I enjoy learning about DNA and mutations." },
            { audio: "Did the government allow the lab to open?", options: ["Yes, they allowed the researchers to proceed.", "Yes, they allowed the researchers proceeding.", "Yes, they allowed proceeding the researchers.", "Yes, they let the researchers to proceed."], a: "Yes, they allowed the researchers to proceed." },
            { audio: "What did the teacher encourage you to do?", options: ["She encouraged me to study biology in college.", "She encouraged me studying biology in college.", "She made me to study biology.", "She let me to study biology."], a: "She encouraged me to study biology in college." },
            { audio: "Did they decide to postpone the trial?", options: ["Yes, they decided to wait until next year.", "Yes, they decided waiting until next year.", "Yes, they decided wait until next year.", "Yes, they avoided to wait."], a: "Yes, they decided to wait until next year." },
            { audio: "What is the potential of this discovery?", options: ["It has the potential to change modern medicine.", "It is an extinct mammoth.", "It is a broken down machine.", "It is a viral disease."], a: "It has the potential to change modern medicine." },
            { audio: "How did the debate start?", options: ["It broke out suddenly during the conference.", "It broke down suddenly.", "It broke into suddenly.", "It carried through suddenly."], a: "It broke out suddenly during the conference." },
            { audio: "Are you planning to carry on with the project?", options: ["Yes, I will persist despite the challenges.", "Yes, I will perform the experiment.", "Yes, I will invade the lab.", "Yes, I will separate from the team."], a: "Yes, I will persist despite the challenges." },
            { audio: "What did he forget to mention?", options: ["He failed to talk about the negative consequences.", "He lost the memory of talking about it.", "He remembered to mention it.", "He remembered mentioning it."], a: "He failed to talk about the negative consequences." },
            { audio: "Why do you want to be a scientist?", options: ["Because I want to make important discoveries.", "Because I want making important discoveries.", "Because I enjoy to make important discoveries.", "Because I avoid to make important discoveries."], a: "Because I want to make important discoveries." },
            { audio: "Do you mind waiting for the results?", options: ["No, I don't mind waiting a few more days.", "No, I don't mind to wait a few more days.", "No, I refuse waiting a few more days.", "No, I promise waiting a few more days."], a: "No, I don't mind waiting a few more days." },
            { audio: "Did she suggest changing the method?", options: ["Yes, she suggested carrying out a different test.", "Yes, she suggested to carry out a different test.", "Yes, she suggested carry out a different test.", "Yes, she wanted carrying out a different test."], a: "Yes, she suggested carrying out a different test." },
            { audio: "Did the researchers keep working?", options: ["Yes, they kept experimenting until they succeeded.", "Yes, they kept to experiment until they succeeded.", "Yes, they decided experimenting.", "Yes, they hoped experimenting."], a: "Yes, they kept experimenting until they succeeded." },
            { audio: "Why is the Dodo bird famous?", options: ["It is a well-known extinct bird.", "It is a new genetic mutation.", "It broke into the zoo.", "It carried out an experiment."], a: "It is a well-known extinct bird." },
            { audio: "What is a mutation?", options: ["It is a permanent alteration in the DNA sequence.", "It is a cure for a disease.", "It is a healthy clone.", "It is a type of mammoth."], a: "It is a permanent alteration in the DNA sequence." },
            { audio: "What is the benefit of this drug?", options: ["It provides a quick cure for the infection.", "It causes a dangerous mutation.", "It makes the patient extinct.", "It breaks down the immune system."], a: "It provides a quick cure for the infection." },
            { audio: "Why did she stop to look at the microscope?", options: ["She paused her walk to check the slide.", "She ceased looking at the microscope forever.", "She avoided to look at the microscope.", "She enjoyed to look at the microscope."], a: "She paused her walk to check the slide." },
            { audio: "Have they stopped looking for a cure?", options: ["No, they haven't ceased their efforts.", "No, they paused in order to look for a cure.", "Yes, they tried looking for a cure.", "Yes, they promised looking for a cure."], a: "No, they haven't ceased their efforts." },
            { audio: "Did he try using a different chemical?", options: ["Yes, he tested it to see if it would react better.", "Yes, he made a huge physical effort to use it.", "No, he refused using it.", "No, he let using it."], a: "Yes, he tested it to see if it would react better." },
            { audio: "What is de-extinction?", options: ["The process of bringing back an extinct species.", "The process of causing a disease to break out.", "The process of breaking down a machine.", "The process of forgetting a memory."], a: "The process of bringing back an extinct species." },
            { audio: "What did the committee discuss?", options: ["They discussed the ethical consequences of the act.", "They discussed to clone the mammoth.", "They discussed to break out the lab.", "They discussed to carry over the rules."], a: "They discussed the ethical consequences of the act." },
            { audio: "Did they let you use the lab?", options: ["Yes, the principal let us run the simulation.", "Yes, the principal let us to run the simulation.", "Yes, the principal let us running the simulation.", "Yes, the principal allowed us running the simulation."], a: "Yes, the principal let us run the simulation." },
            { audio: "Did the news break into the mainstream media?", options: ["Yes, it became a viral topic overnight.", "Yes, it stopped to be a topic.", "Yes, it forgot to be a topic.", "Yes, it refused to be a topic."], a: "Yes, it became a viral topic overnight." },
            { audio: "Why did he forget seeing the documentary?", options: ["Because his memory of the past event faded.", "Because he failed to do a scheduled task.", "Because he stopped to see it.", "Because he tried seeing it."], a: "Because his memory of the past event faded." },
            { audio: "What did the thief break into?", options: ["He broke into the secure genetic database.", "He broke out the database.", "He broke down the database.", "He broke up the database."], a: "He broke into the secure genetic database." },
            { audio: "What is the consequence of a DNA mutation?", options: ["It can permanently change the organism's traits.", "It can permanently break up the organism.", "It can permanently carry out the organism.", "It can permanently break into the organism."], a: "It can permanently change the organism's traits." },
            { audio: "How did she break through the glass ceiling?", options: ["She made a major discovery that proved her talent.", "She broke out a major discovery.", "She broke down a major discovery.", "She carried over a major discovery."], a: "She made a major discovery that proved her talent." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 ITEMS) ---
        10: [
            { audio: "The discovery of CRISPR was a major scientific breakthrough.", sent: "The discovery of CRISPR was a major scientific ___.", blanks: ["breakthrough"] },
            { audio: "Scientists hope to cure genetic diseases with this technology.", sent: "Scientists ___ to ___ genetic diseases with this technology.", blanks: ["hope", "cure"] },
            { audio: "I remember reading an article about cloning animals.", sent: "I remember ___ an article about ___ animals.", blanks: ["reading", "cloning"] },
            { audio: "We need to stop imagining only the benefits.", sent: "We need to stop ___ only the ___.", blanks: ["imagining", "benefits"] },
            { audio: "Some critics advise scientists to stop experimenting immediately.", sent: "Some critics ___ scientists to ___ experimenting immediately.", blanks: ["advise", "stop"] },
            { audio: "We can't just carry on without considering the risks.", sent: "We can't just carry ___ without considering the ___.", blanks: ["on", "risks"] },
            { audio: "Many researchers are trying to resurrect the mammoth.", sent: "Many researchers are trying to ___ the ___.", blanks: ["resurrect", "mammoth"] },
            { audio: "I forgot to ask the teacher about the ethics.", sent: "I forgot to ___ the teacher about the ___.", blanks: ["ask", "ethics"] },
            { audio: "Is gene editing considered to be completely safe?", sent: "Is gene ___ considered to ___ completely safe?", blanks: ["editing", "be"] },
            { audio: "Let's carry out more research on this mutation.", sent: "Let's carry ___ more ___ on this mutation.", blanks: ["out", "research"] },
            { audio: "A debate broke out in the classroom yesterday.", sent: "A debate broke ___ in the ___ yesterday.", blanks: ["out", "classroom"] },
            { audio: "CRISPR breaks into the DNA to modify the cells.", sent: "CRISPR breaks ___ the DNA to ___ the cells.", blanks: ["into", "modify"] },
            { audio: "We need a detailed breakdown of the potential consequences.", sent: "We need a detailed ___ of the potential ___.", blanks: ["breakdown", "consequences"] },
            { audio: "The team breakup happened after the experiment failed.", sent: "The team ___ happened after the ___ failed.", blanks: ["breakup", "experiment"] },
            { audio: "Her determination carried her through the difficult crisis.", sent: "Her determination carried her ___ the difficult ___.", blanks: ["through", "crisis"] },
            { audio: "These safety rules carry over to the next phase.", sent: "These safety rules carry ___ to the ___ phase.", blanks: ["over", "next"] },
            { audio: "Ethical risks include avoiding dangerous mutations.", sent: "___ risks include avoiding dangerous ___.", blanks: ["Ethical", "mutations"] },
            { audio: "They enjoy learning about genetics and the genome.", sent: "They enjoy ___ about genetics and the ___.", blanks: ["learning", "genome"] },
            { audio: "Did we decide to carry out the clinical test?", sent: "Did we ___ to carry ___ the clinical test?", blanks: ["decide", "out"] },
            { audio: "People should stop cloning animals for entertainment.", sent: "People should stop ___ animals for ___.", blanks: ["cloning", "entertainment"] },
            { audio: "Please remember to check the temperature of the lab.", sent: "Please remember to ___ the temperature of the ___.", blanks: ["check", "lab"] },
            { audio: "I will never forget seeing that extinct species fossil.", sent: "I will never forget ___ that ___ species fossil.", blanks: ["seeing", "extinct"] },
            { audio: "He forgot to mention the potential dangers in his report.", sent: "He forgot to ___ the potential ___ in his report.", blanks: ["mention", "dangers"] },
            { audio: "Scientists are trying to resurrect extinct species.", sent: "Scientists are ___ to resurrect ___ species.", blanks: ["trying", "extinct"] },
            { audio: "Try editing the gene sequence to see the reaction.", sent: "Try ___ the gene ___ to see the reaction.", blanks: ["editing", "sequence"] },
            { audio: "We must discuss the ethical consequences of this act.", sent: "We must ___ the ethical ___ of this act.", blanks: ["discuss", "consequences"] },
            { audio: "Resurrecting mammoths has a huge potential for science.", sent: "Resurrecting mammoths has a huge ___ for ___.", blanks: ["potential", "science"] },
            { audio: "This breakthrough will change medicine forever.", sent: "This ___ will ___ medicine forever.", blanks: ["breakthrough", "change"] },
            { audio: "New ideas break into the market constantly.", sent: "New ideas break ___ the ___ constantly.", blanks: ["into", "market"] },
            { audio: "They broke through the barriers of modern science.", sent: "They broke ___ the barriers of modern ___.", blanks: ["through", "science"] },
            { audio: "They want to develop a cure for cancer.", sent: "They ___ to ___ a cure for cancer.", blanks: ["want", "develop"] },
            { audio: "This is a profound moral decision for humanity.", sent: "This is a profound ___ decision for ___.", blanks: ["moral", "humanity"] },
            { audio: "We must discuss the ethics of gene editing.", sent: "We must ___ the ___ of gene editing.", blanks: ["discuss", "ethics"] },
            { audio: "Every scientific action has a consequence.", sent: "Every scientific ___ has a ___.", blanks: ["action", "consequence"] },
            { audio: "This topic is highly controversial in the news.", sent: "This topic is highly ___ in the ___.", blanks: ["controversial", "news"] },
            { audio: "There is always a risk with new technology.", sent: "There is always a ___ with new ___.", blanks: ["risk", "technology"] },
            { audio: "Scientists break down complex structures in the lab.", sent: "Scientists break ___ complex ___ in the lab.", blanks: ["down", "structures"] },
            { audio: "The team broke up after the project failed.", sent: "The team broke ___ after the ___ failed.", blanks: ["up", "project"] },
            { audio: "Clinical research takes many years to complete.", sent: "Clinical ___ takes many years to ___.", blanks: ["research", "complete"] },
            { audio: "CRISPR allows for precise changes in the DNA.", sent: "CRISPR allows for ___ changes in the ___.", blanks: ["precise", "DNA"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE (10 ITEMS) ---
        11: [
            {
                title: "Dialogue 1: Gene Editing Basics",
                lines: [
                    { speaker: "Celine", text: "Albert, did you read about the new CRISPR ___?", options: ["breakup", "breakthrough", "breakdown"], a: "breakthrough" },
                    { speaker: "Albert", text: "Yes! It is a tool that ___ scientists to modify DNA precisely.", options: ["allows", "makes", "lets"], a: "allows" },
                    { speaker: "Celine", text: "It's amazing. They hope ___ a cure for many genetic diseases.", options: ["finding", "to find", "find"], a: "to find" },
                    { speaker: "Albert", text: "I ___ about these scientific advancements.", options: ["enjoy to read", "enjoy reading", "enjoy read"], a: "enjoy reading" },
                    { speaker: "Celine", text: "Me too. We must ___ more research to understand its full potential.", options: ["carry out", "carry on", "break out"], a: "carry out" }
                ]
            },
            {
                title: "Dialogue 2: De-extinction Debate",
                lines: [
                    { speaker: "Albert", text: "I saw a documentary about scientists trying ___ the mammoth.", options: ["to resurrect", "resurrecting", "resurrect"], a: "to resurrect" },
                    { speaker: "Celine", text: "That's a very ___ topic. Is it ethical?", options: ["controversial", "extinct", "safe"], a: "controversial" },
                    { speaker: "Albert", text: "Some say it's a moral obligation. But what if a dangerous mutation ___?", options: ["breaks into", "breaks out", "breaks up"], a: "breaks out" },
                    { speaker: "Celine", text: "Exactly. We should ___ mistakes with nature.", options: ["avoid to make", "avoid making", "avoid make"], a: "avoid making" },
                    { speaker: "Albert", text: "I agree. We can't just ___ experimenting without evaluating the risks.", options: ["carry over", "carry on", "break down"], a: "carry on" }
                ]
            },
            {
                title: "Dialogue 3: Stop vs. Stop",
                lines: [
                    { speaker: "Celine", text: "Why did the research team ___?", options: ["break down", "break up", "break into"], a: "break up" },
                    { speaker: "Albert", text: "Because they stopped ___ with each other.", options: ["to communicate", "communicating", "communicate"], a: "communicating" },
                    { speaker: "Celine", text: "That's a shame. Did they stop ___ the ethical risks before the split?", options: ["to discuss", "discussing", "discuss"], a: "to discuss" },
                    { speaker: "Albert", text: "Yes, they paused the project to talk, but it led to a total ___ in negotiations.", options: ["breakdown", "breakthrough", "breakup"], a: "breakdown" },
                    { speaker: "Celine", text: "Well, I hope their work ___ to a new team.", options: ["carries out", "carries over", "breaks out"], a: "carries over" }
                ]
            },
            {
                title: "Dialogue 4: Memory of the Lab",
                lines: [
                    { speaker: "Albert", text: "I will never forget ___ the cloned sheep in the lab.", options: ["to see", "seeing", "see"], a: "seeing" },
                    { speaker: "Celine", text: "That was incredible! But did you remember ___ the door when we left?", options: ["to lock", "locking", "lock"], a: "to lock" },
                    { speaker: "Albert", text: "Oh no, I forgot ___ that!", options: ["doing", "to do", "do"], a: "to do" },
                    { speaker: "Celine", text: "Albert, the professor ___ us promise to secure the lab.", options: ["let", "made", "forced"], a: "made" },
                    { speaker: "Albert", text: "I know. I had better run back before a problem ___.", options: ["breaks out", "breaks into", "carries on"], a: "breaks out" }
                ]
            },
            {
                title: "Dialogue 5: Trying New Methods",
                lines: [
                    { speaker: "Celine", text: "The DNA sequence isn't reacting. We should try ___ a different enzyme.", options: ["to use", "using", "use"], a: "using" },
                    { speaker: "Albert", text: "Good idea. If that doesn't work, we will try ___ the temperature to 40 degrees.", options: ["to lift", "lifting", "lift"], a: "to lift" },
                    { speaker: "Celine", text: "Let's ___ the test right now.", options: ["carry out", "break down", "break into"], a: "carry out" },
                    { speaker: "Albert", text: "I hope this leads to a major ___.", options: ["breakup", "breakthrough", "disease"], a: "breakthrough" },
                    { speaker: "Celine", text: "Me too. We just need to ___ despite the initial failures.", options: ["carry through", "carry on", "break up"], a: "carry on" }
                ]
            },
            {
                title: "Dialogue 6: Let, Make, Help",
                lines: [
                    { speaker: "Albert", text: "The new professor ___ us use the expensive microscopes.", options: ["allows", "lets", "forces"], a: "lets" },
                    { speaker: "Celine", text: "That's great. He also ___ us understand the complex genome structure.", options: ["made", "helped", "asked"], a: "helped" },
                    { speaker: "Albert", text: "Yes, his explanations ___ me think about the consequences of gene editing.", options: ["made", "let", "helped"], a: "made" },
                    { speaker: "Celine", text: "He advised us ___ more about ethics.", options: ["to read", "reading", "read"], a: "to read" },
                    { speaker: "Albert", text: "We should form a study group to ___ the difficult concepts together.", options: ["break out", "break down", "break into"], a: "break down" }
                ]
            },
            {
                title: "Dialogue 7: The Ethics Committee",
                lines: [
                    { speaker: "Celine", text: "The committee decided ___ the cloning experiment.", options: ["to stop", "stopping", "stop"], a: "to stop" },
                    { speaker: "Albert", text: "Why? Did they ___ an ethical issue?", options: ["break into", "break through", "come across"], a: "come across" },
                    { speaker: "Celine", text: "Yes, they want to ___ harmful mutations.", options: ["avoid creating", "avoid to create", "avoid create"], a: "avoid creating" },
                    { speaker: "Albert", text: "So, they refused ___ the final approval?", options: ["to grant", "granting", "grant"], a: "to grant" },
                    { speaker: "Celine", text: "Exactly. The risk was too high to ___ with the trials.", options: ["carry out", "carry on", "carry over"], a: "carry on" }
                ]
            },
            {
                title: "Dialogue 8: Phrasal Verbs in Action",
                lines: [
                    { speaker: "Albert", text: "How did the virus ___ in the facility?", options: ["break out", "break up", "break down"], a: "break out" },
                    { speaker: "Celine", text: "Someone forgot ___ the safety protocols.", options: ["to follow", "following", "follow"], a: "to follow" },
                    { speaker: "Albert", text: "That's a serious ___ in security.", options: ["breakthrough", "breakdown", "breakup"], a: "breakdown" },
                    { speaker: "Celine", text: "Yes. They had to ___ an emergency lockdown.", options: ["carry out", "break into", "carry over"], a: "carry out" },
                    { speaker: "Albert", text: "I hope they can ___ this crisis safely.", options: ["carry on", "break through", "carry through"], a: "carry through" }
                ]
            },
            {
                title: "Dialogue 9: Remembering the Past",
                lines: [
                    { speaker: "Celine", text: "Do you remember ___ about the extinction of the dodo?", options: ["to read", "reading", "read"], a: "reading" },
                    { speaker: "Albert", text: "Yes. Scientists are now planning ___ it.", options: ["to resurrect", "resurrecting", "resurrect"], a: "to resurrect" },
                    { speaker: "Celine", text: "I think it is dangerous. We shouldn't ___ scientists play with nature.", options: ["let", "allow", "force"], a: "let" },
                    { speaker: "Albert", text: "But imagine ___ a dodo in real life!", options: ["to see", "seeing", "see"], a: "seeing" },
                    { speaker: "Celine", text: "I prefer ___ on saving the species we currently have.", options: ["to focus", "focusing", "focus"], a: "to focus" }
                ]
            },
            {
                title: "Dialogue 10: Project Continuation",
                lines: [
                    { speaker: "Albert", text: "The funding for our research was cut. The team might ___.", options: ["break out", "break up", "carry on"], a: "break up" },
                    { speaker: "Celine", text: "We can't give up. We must ___ experimenting.", options: ["carry out", "carry on", "break into"], a: "carry on" },
                    { speaker: "Albert", text: "But we don't have the equipment to ___ the plan.", options: ["carry through", "carry over", "carry out"], a: "carry out" },
                    { speaker: "Celine", text: "Let's ask the university ___ us.", options: ["to support", "supporting", "support"], a: "to support" },
                    { speaker: "Albert", text: "Good idea. If we succeed, it will be a historic ___.", options: ["breakthrough", "breakdown", "breakup"], a: "breakthrough" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER (10 ITEMS - ~200 WORDS EACH) ---
        12: [
            {
                title: "Text 1: The CRISPR Revolution",
                text: "CRISPR is widely considered to be a major breakthrough in modern science and genetics. This incredible biological tool acts much like a pair of molecular scissors, allowing researchers to cut and edit genomes with extreme, unprecedented precision. By targeting specific sequences of DNA, scientists ultimately hope to cure terrible genetic diseases that have plagued humanity for centuries, such as cystic fibrosis and sickle cell anemia. However, despite the immense potential for good, many critics and bioethicists advise scientists to proceed with extreme caution. They warn the public that we must absolutely avoid making irreversible mistakes that could alter human evolution forever. If a dangerous, unintended mutation breaks out during the editing process, the long-term biological consequences could be absolutely disastrous for the entire population. Because the technology is still so new and relatively untested on human subjects over long periods, strict international ethics committees urge researchers across the globe to stop and think deeply before they carry out any human trials. The balance between pushing the boundaries of medical innovation and maintaining strict moral responsibility is currently one of the most hotly debated topics in modern biology.",
                questions: [
                    { q: "What is CRISPR considered to be?", options: ["A major scientific breakthrough.", "A dangerous new disease.", "A system breakdown."], a: "A major scientific breakthrough." },
                    { q: "What do scientists hope to do with CRISPR?", options: ["They hope to cure genetic diseases.", "They hope curing genetic diseases.", "They hope cure genetic diseases."], a: "They hope to cure genetic diseases." },
                    { q: "What do critics advise scientists to do?", options: ["To proceed with caution.", "To stop researching completely.", "To break up their teams."], a: "To proceed with caution." },
                    { q: "What grammatical pattern follows the verb \"avoid\" in the text?", options: ["Avoid making (gerund).", "Avoid to make.", "Avoid make."], a: "Avoid making (gerund)." },
                    { q: "Why do ethics committees urge researchers to \"stop and think\"?", options: ["Because they want to pause the activity in order to reflect on the risks.", "Because they want them to quit science forever.", "Because they forgot to check the data."], a: "Because they want to pause the activity in order to reflect on the risks." }
                ]
            },
            {
                title: "Text 2: Resurrecting the Mammoth",
                text: "The concept of de-extinction has become an incredibly controversial topic within the global scientific community. Today, several well-funded laboratories are actively trying to resurrect the extinct woolly mammoth by extracting and utilizing ancient, preserved DNA found deep in the Arctic ice. Many of these geneticists thoroughly enjoy exploring the vast, seemingly limitless potential of this new cloning technology. They argue that bringing back the mammoth could potentially help restore lost, ancient ecosystems. However, a large number of ecologists strongly disagree with this approach. They remember studying how fragile natural ecosystems adapt very slowly over thousands of years to the loss of a species. They argue that aggressively introducing a massive, long-extinct species into a modern environment could easily cause a complete ecological breakdown, disrupting the food chain and endangering current wildlife. Therefore, rather than spending millions of dollars on a flashy science experiment, these ecologists suggest focusing our limited resources and funding on aggressively protecting the thousands of currently endangered species. Preserving the incredible biodiversity that we still have today, they argue, is far more important than trying to bring back massive, furry animals from the distant Ice Age.",
                questions: [
                    { q: "What are some laboratories trying to do?", options: ["They are trying to resurrect the mammoth.", "They are trying to hide the mammoth.", "They are trying resurrecting the mammoth as a test."], a: "They are trying to resurrect the mammoth." },
                    { q: "What do the laboratories enjoy doing?", options: ["They enjoy exploring the potential.", "They enjoy to explore the potential.", "They enjoy explore the potential."], a: "They enjoy exploring the potential." },
                    { q: "What do ecologists remember?", options: ["They remember studying how ecosystems adapt.", "They remember to study ecosystems.", "They forgot to study ecosystems."], a: "They remember studying how ecosystems adapt." },
                    { q: "What could introducing an extinct species cause?", options: ["An ecological breakdown.", "A scientific breakthrough.", "A team breakup."], a: "An ecological breakdown." },
                    { q: "What do ecologists suggest doing?", options: ["They suggest focusing on endangered species.", "They suggest to focus on endangered species.", "They suggest focus on endangered species."], a: "They suggest focusing on endangered species." }
                ]
            },
            {
                title: "Text 3: A Laboratory Mistake",
                text: "Dr. Aris will never forget working late that terrifying night in the high-security virology lab. He was processing some complex genetic data when a terrible mistake occurred. Earlier that evening, a young, inexperienced lab assistant had completely forgot to lock the primary containment unit after finishing his shift. Because of this careless human error, a highly contagious, genetically modified respiratory virus almost broke out of the secure facility. The moment Dr. Aris realized the containment door was ajar, he immediately stopped analyzing his data to sound the emergency facility alarm. Thanks to his quick reflexes, the armed security team managed to carry out a full emergency lockdown within seconds, trapping the airborne pathogen inside the sterile room. While a catastrophic global pandemic was narrowly avoided, the severe incident deeply shook the entire research team. The next morning, the furious facility director made the entire staff review and rewrite all safety protocols from scratch. He wanted to guarantee that such a terrifying breakdown in security protocols would absolutely never happen again under his strict supervision.",
                questions: [
                    { q: "What will Dr. Aris never forget?", options: ["He will never forget working in the lab (a past memory).", "He will never forget to work in the lab.", "He forgot to work in the lab."], a: "He will never forget working in the lab (a past memory)." },
                    { q: "What did the young assistant forget to do?", options: ["He forgot to lock the unit (failed a task).", "He forgot locking the unit.", "He remembered to lock the unit."], a: "He forgot to lock the unit (failed a task)." },
                    { q: "What almost happened to the virus?", options: ["It almost broke out of the facility.", "It almost broke into the facility.", "It almost carried over."], a: "It almost broke out of the facility." },
                    { q: "Why did Dr. Aris stop analyzing his data?", options: ["He stopped in order to sound the alarm.", "He quit his job permanently.", "He finished his research."], a: "He stopped in order to sound the alarm." },
                    { q: "What did the director make the staff do?", options: ["He made them review all safety protocols.", "He made them to review protocols.", "He let them reviewing protocols."], a: "He made them review all safety protocols." }
                ]
            },
            {
                title: "Text 4: The Team Breakup",
                text: "The highly funded university research on creating advanced artificial cells was heavily anticipated by the international scientific community. The project promised to unlock the secrets of synthetic biology. However, behind closed laboratory doors, the two brilliant lead scientists simply couldn't agree on the heavy moral implications of their groundbreaking work. Dr. Smith was highly ambitious and wanted to push the ethical boundaries as far and as fast as possible to achieve immediate fame. Conversely, Dr. Jones strongly advised taking a much slower, more cautious approach to ensure no dangerous pathogens were accidentally created. This fundamental difference in philosophy led to constant, bitter arguing between the two leaders, eventually causing a total, irreparable breakdown in their daily communication. The toxic environment made it impossible for the junior researchers to concentrate on their work. Eventually, the formal team breakup became completely inevitable. The university canceled the prestigious project entirely, and the millions of dollars in remaining funding did not carry over to the next academic year. It was a tragic loss for science, caused entirely by human ego.",
                questions: [
                    { q: "What were the scientists researching?", options: ["Artificial cells.", "Extinct mammoths.", "A new virus."], a: "Artificial cells." },
                    { q: "What did Dr. Smith want to do?", options: ["He wanted to push the boundaries.", "He wanted pushing the boundaries.", "He wanted push the boundaries."], a: "He wanted to push the boundaries." },
                    { q: "What caused the breakdown in communication?", options: ["Constant arguing about moral implications.", "A lack of money.", "A broken microscope."], a: "Constant arguing about moral implications." },
                    { q: "What was the inevitable result of the arguing?", options: ["The team breakup.", "A major breakthrough.", "A disease breakout."], a: "The team breakup." },
                    { q: "What happened to the remaining funding?", options: ["It did not carry over to the next year.", "It carried out the project.", "It broke into the bank."], a: "It did not carry over to the next year." }
                ]
            },
            {
                title: "Text 5: Clinical Trials",
                text: "Before any revolutionary new medicine legally reaches the public market, pharmaceutical scientists must carefully carry out highly extensive and rigorous clinical trials. These long, expensive testing phases are absolutely necessary; researchers need to guarantee and ensure that the experimental drug is perfectly safe for human consumption and that it provides a real, measurable medical benefit to the patient. Sometimes, despite decades of animal testing, severe and unexpected side effects suddenly break out during the human testing phase. If this dangerous scenario happens, the ethical guidelines dictate that researchers must stop testing the drug on human subjects immediately to prevent further harm. The scientists will then return to the laboratory and try editing the underlying chemical formula, doing it as a highly controlled experiment to see if the small adjustment successfully reduces the toxic risks. This meticulous cycle of testing, failing, and editing can take many years to complete. Only after strict, undeniable verification of its safety does the federal government let the pharmaceutical company proceed with mass production.",
                questions: [
                    { q: "What must scientists carry out?", options: ["Extensive clinical trials.", "A team breakup.", "A breakdown in communication."], a: "Extensive clinical trials." },
                    { q: "What do they need to ensure?", options: ["That the drug is safe.", "That the drug is dangerous.", "That the drug breaks out."], a: "That the drug is safe." },
                    { q: "What might break out during the testing phase?", options: ["Unexpected side effects.", "Extinct animals.", "A new genome."], a: "Unexpected side effects." },
                    { q: "What does \"try editing the chemical formula\" mean here?", options: ["Doing it as an experiment to see the result.", "Making a difficult physical effort to edit it.", "Forgetting to edit it."], a: "Doing it as an experiment to see the result." },
                    { q: "What does the government do after verification?", options: ["It lets them proceed.", "It lets them to proceed.", "It makes them proceeding."], a: "It lets them proceed." }
                ]
            },
            {
                title: "Text 6: The Ethics of Cloning",
                text: "In the field of modern biology, cloning is a highly complex process that artificially creates an exact, identical genetic copy of a living organism. Many adults clearly remember seeing Dolly the sheep—the very first successfully cloned mammal—on the television news back in the late 1990s. While cloning technology could theoretically help preserve critically endangered species from total extinction, it simultaneously raises incredibly serious ethical and moral questions that society has not yet answered. Some religious and animal rights activists strongly argue that humans shouldn't play God by artificially creating life in a sterile laboratory. They constantly advise world governments to ban cloning research entirely, citing the potential for immense animal suffering and unpredictable genetic mutations. However, many dedicated scientists hope to continue their groundbreaking work despite the heavy public backlash. They fiercely defend the practice, claiming that mastering cloning techniques could eventually lead to vital medical breakthroughs, such as growing perfectly matched replacement organs for sick patients waiting on transplant lists.",
                questions: [
                    { q: "What does cloning create?", options: ["An identical genetic copy.", "A new disease.", "An extinct mammoth."], a: "An identical genetic copy." },
                    { q: "What do many people remember?", options: ["They remember seeing Dolly the sheep.", "They remember to see Dolly the sheep.", "They forgot seeing Dolly the sheep."], a: "They remember seeing Dolly the sheep." },
                    { q: "What do some activists advise governments to do?", options: ["They advise governments to ban cloning entirely.", "They advise governments banning cloning.", "They advise to ban governments."], a: "They advise governments to ban cloning entirely." },
                    { q: "What do scientists hope to do?", options: ["They hope to continue their work.", "They hope continuing their work.", "They hope continue their work."], a: "They hope to continue their work." },
                    { q: "What could cloning lead to, according to scientists?", options: ["Vital medical breakthroughs.", "Medical breakdowns.", "Team breakups."], a: "Vital medical breakthroughs." }
                ]
            },
            {
                title: "Text 7: Overcoming the Breakdown",
                text: "Our highly anticipated final biology experiment was an absolute disaster yesterday afternoon. The massive, incredibly expensive centrifuge machine suffered a complete mechanical breakdown right in the middle of our crucial test. Because the heavy motor was completely fried, we couldn't carry on with the delicate DNA extraction process, and we feared we would fail the class. We all sat down, exhausted and defeated. However, our biology teacher noticed our frustration and quickly stepped in. She smiled and warmly encouraged us to try again the next day, reminding us that failure is just a normal part of the scientific method. Motivated by her kind words, we returned early the next morning. We tried to fix the broken machine for three agonizing hours, carefully replacing belts and fuses, and we finally succeeded! It was an incredibly difficult physical and mental effort, but our strong determination carried us through the crisis. Now, we proudly plan to present our successful genetic findings at the upcoming state science fair.",
                questions: [
                    { q: "What happened to the centrifuge machine?", options: ["It suffered a complete breakdown.", "It achieved a breakthrough.", "It broke into the lab."], a: "It suffered a complete breakdown." },
                    { q: "What couldn't they carry on with?", options: ["The DNA extraction.", "The team breakup.", "The science fair."], a: "The DNA extraction." },
                    { q: "What did the teacher encourage them to do?", options: ["She encouraged them to try again.", "She encouraged them trying again.", "She encouraged to try them."], a: "She encouraged them to try again." },
                    { q: "What does \"tried to fix the machine\" mean in this context?", options: ["They made a difficult effort to repair it.", "They did it as a fun experiment.", "They forgot to repair it."], a: "They made a difficult effort to repair it." },
                    { q: "What carried them through the difficult situation?", options: ["Their determination.", "The broken machine.", "The DNA mutation."], a: "Their determination." }
                ]
            },
            {
                title: "Text 8: A New Disease",
                text: "Late last winter, a highly contagious, mysterious respiratory illness suddenly broke out in a small, remote mountain village. Local clinics were quickly overwhelmed. Elite doctors from the capital rushed to the isolated area to urgently carry out blood and saliva tests on the severely ill patients. They desperately needed to identify the exact genetic structure of the virus quickly before it could mutate. To contain the threat, the military stopped accepting any visitors to the village, establishing a strict quarantine zone to prevent the deadly disease from spreading to major cities. The medical teams worked around the clock, barely sleeping. Finally, after four grueling weeks of continuous, exhausting research, a brilliant young genetic scientist successfully broke through the complex viral code. Utilizing advanced CRISPR techniques, she rapidly developed a highly effective synthetic cure. Thanks to her tireless dedication, the sick patients are now fully recovering, and the world is finally safe from facing another catastrophic global pandemic.",
                questions: [
                    { q: "What happened last winter?", options: ["A mysterious illness broke out.", "A mysterious illness broke down.", "A mysterious illness broke into."], a: "A mysterious illness broke out." },
                    { q: "What did the doctors carry out?", options: ["Tests on the patients.", "The patients themselves.", "A team breakup."], a: "Tests on the patients." },
                    { q: "Why did they stop accepting visitors?", options: ["They ceased the activity of accepting visitors entirely.", "They paused what they were doing in order to accept visitors.", "They forgot to accept visitors."], a: "They ceased the activity of accepting visitors entirely." },
                    { q: "What did the brilliant scientist do?", options: ["He broke through the viral code.", "He broke down the viral code.", "He broke up the viral code."], a: "He broke through the viral code." },
                    { q: "What did the scientist develop?", options: ["A cure.", "A new disease.", "A mutation."], a: "A cure." }
                ]
            },
            {
                title: "Text 9: The Importance of Genetics",
                text: "Genetics is the incredibly complex, fascinating biological study of genes, DNA, and the principles of heredity. By deeply understanding the intricate mechanisms of human genetics, medical professionals can accurately predict certain severe, hereditary illnesses years before they even happen in a patient. However, artificially working with the fragile human genome requires extreme ethical care and immense responsibility. Scientists must strictly avoid releasing any genetically modified organisms into the wild without conducting years of rigorous, controlled testing first. The delicate balance of nature is highly sensitive. If a newly modified, aggressive species accidentally breaks into a natural, unprotected ecosystem, it could rapidly destroy the local biodiversity, wiping out native plants and animals forever. Because the potential consequences of a laboratory mistake are so incredibly massive, international oversight is absolutely essential. Ultimately, many philosophers argue that we must let nature gently guide us forward, and not just let our blind, arrogant scientific ambition control the dangerous future of our planet.",
                questions: [
                    { q: "What is genetics?", options: ["The study of genes, DNA, and heredity.", "The study of stars and planets.", "The study of ancient history."], a: "The study of genes, DNA, and heredity." },
                    { q: "What must scientists avoid doing?", options: ["They must avoid releasing modified organisms.", "They must avoid to release modified organisms.", "They must avoid release modified organisms."], a: "They must avoid releasing modified organisms." },
                    { q: "What happens if a modified species breaks into a natural ecosystem?", options: ["It could destroy the local biodiversity.", "It achieves a breakthrough.", "It carries out an experiment."], a: "It could destroy the local biodiversity." },
                    { q: "What grammatical pattern is used in \"let nature guide us\"?", options: ["Let + object + base verb.", "Let + object + infinitive (with \"to\").", "Let + object + gerund."], a: "Let + object + base verb." },
                    { q: "What does the text suggest we should prioritize?", options: ["Extreme care and testing.", "Only our ambition.", "Releasing organisms quickly."], a: "Extreme care and testing." }
                ]
            },
            {
                title: "Text 10: Remembering the Past",
                text: "I always distinctly remember to carefully lock the heavy security doors of the laboratory every single night before going home because biological safety is my absolute top priority. But unfortunately, late last week, I was extremely exhausted and completely forgot to turn off one of the main supercomputer monitors in the server room. When I arrived the next morning, the expensive screen was completely burned out and smoking from overheating. It was an incredibly costly mechanical breakdown that ruined hours of unsaved data. My strict, angry supervisor immediately made me sit down and write a highly detailed incident report explaining exactly what had gone wrong. Even years later, I will never, ever forget seeing the incredibly disappointed, frustrated look on his tired face that morning. That single, painful moment taught me a very harsh lesson: in the high-stakes world of genetic science, even incredibly small, seemingly harmless human mistakes can have huge, potentially disastrous consequences for the entire research team.",
                questions: [
                    { q: "Why does the speaker \"remember to lock the lab\"?", options: ["Because it is a task/duty he must not forget.", "Because it is a past memory he enjoys.", "Because someone forced him to do it."], a: "Because it is a task/duty he must not forget." },
                    { q: "What did the speaker forget to do last week?", options: ["He forgot to turn off the monitor (failed the task).", "He forgot turning off the monitor.", "He forgot to break out."], a: "He forgot to turn off the monitor (failed the task)." },
                    { q: "What was the result of the mistake?", options: ["A costly breakdown of the equipment.", "A major scientific breakthrough.", "A team breakup."], a: "A costly breakdown of the equipment." },
                    { q: "What did the supervisor make the speaker do?", options: ["He made him write a report.", "He made him to write a report.", "He made him writing a report."], a: "He made him write a report." },
                    { q: "What will the speaker \"never forget seeing\"?", options: ["The disappointed look on the supervisor's face (a past memory).", "A task he has to do tomorrow.", "An extinct mammoth."], a: "The disappointed look on the supervisor's face (a past memory)." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER CONTEXT (10 ITEMS - ~200 WORDS EXPANDED) ---
        13: [
            {
                title: "Audio Script 1",
                audio: "The stunning recent discovery of the CRISPR gene-editing technology was undoubtedly a major scientific breakthrough that fundamentally changed the trajectory of modern biology forever. This revolutionary microscopic tool allows highly trained researchers to precisely cut and edit complex genomes with incredible, unprecedented precision, much like editing the text of a digital document. Thanks to this, brilliant scientists around the globe now genuinely hope to permanently cure devastating, hereditary genetic diseases simply by fixing the broken DNA mutations right inside the patient's cells. However, this immense power does not come without severe concern. Many vocal ethical critics loudly advise eager scientists to immediately stop testing and carefully consider the severe, irreversible moral consequences of their actions. If we begin altering human DNA today, what will stop us from trying to artificially design perfect human beings tomorrow?",
                questions: [
                    { q: "What was the discovery of CRISPR?", options: ["A major scientific breakthrough.", "A terrible system breakdown.", "A sudden team breakup."], a: "A major scientific breakthrough." },
                    { q: "What does CRISPR allow researchers to do?", options: ["It allows them to edit genes.", "It allows them editing genes.", "It allows them edit genes."], a: "It allows them to edit genes." },
                    { q: "What do scientists hope to do?", options: ["They hope to cure genetic diseases.", "They hope curing genetic diseases.", "They hope cure genetic diseases."], a: "They hope to cure genetic diseases." },
                    { q: "What do critics advise scientists to do?", options: ["They advise them to stop.", "They advise them stopping.", "They advise them stop."], a: "They advise them to stop." },
                    { q: "What must scientists consider?", options: ["The ethical consequences.", "The extinct animals.", "The cost of the lab."], a: "The ethical consequences." }
                ]
            },
            {
                title: "Audio Script 2",
                audio: "A highly contagious, totally unidentifiable new respiratory disease suddenly broke out in the densely populated capital city late last month, causing immediate, widespread civic panic. Hundreds of terrified doctors desperately rushed to the overcrowded central hospital to quickly carry out a massive series of emergency blood tests on the newly admitted patients. The incredibly dedicated medical staff had to bravely carry on working around the clock, treating the sick for several weeks despite being physically and mentally exhausted. In a desperate attempt to combat the aggressive virus, the doctors courageously tried using several different experimental antibiotics on the most severe cases to see if the suffering patients' fragile health would finally improve. It was an incredibly intense, stressful medical crisis that truly tested the entire city's healthcare infrastructure.",
                questions: [
                    { q: "What happened in the city last month?", options: ["A new disease broke out.", "A new disease broke into.", "A new disease broke down."], a: "A new disease broke out." },
                    { q: "What did the doctors carry out?", options: ["Emergency tests.", "The patients' luggage.", "The medical waste."], a: "Emergency tests." },
                    { q: "What did the medical staff have to do?", options: ["Carry on working despite exhaustion.", "Break up the team.", "Give up and go home."], a: "Carry on working despite exhaustion." },
                    { q: "What does \"tried using different antibiotics\" mean here?", options: ["They experimented with them to see the result.", "They made a difficult physical effort to lift them.", "They forgot to use them."], a: "They experimented with them to see the result." },
                    { q: "Why were the doctors doing this?", options: ["To see if the patients' health would improve.", "To resurrect a mammoth.", "To cause a mutation."], a: "To see if the patients' health would improve." }
                ]
            },
            {
                title: "Audio Script 3",
                audio: "Yesterday afternoon, my eccentric university biology professor made us quietly sit down and watch a fascinating, hour-long documentary all about the controversial science of de-extinction. The high-budget film showed several dedicated European scientists actively trying their absolute best to artificially resurrect the famous, long-extinct dodo bird using fragments of ancient DNA found in a dusty museum bone. After the long video ended, the professor loudly paused the lecture and directly asked the quiet classroom if we truly thought bringing back a dead species was a highly moral decision for humanity to make. I genuinely enjoyed passionately discussing the complex topic in class today with my smart peers, but I ultimately think we should strictly avoid carelessly playing with nature just because we have the advanced technology to do so.",
                questions: [
                    { q: "What did the professor make the students do?", options: ["He made them watch a documentary.", "He made them to watch a documentary.", "He made them watching a documentary."], a: "He made them watch a documentary." },
                    { q: "What were the scientists trying to do? (Making an effort)", options: ["Trying to resurrect the dodo.", "Trying resurrecting the dodo.", "Trying resurrect the dodo."], a: "Trying to resurrect the dodo." },
                    { q: "What did the professor ask?", options: ["If it was a moral decision.", "If they remembered to sleep.", "If the DNA broke down."], a: "If it was a moral decision." },
                    { q: "What did the speaker enjoy doing?", options: ["Enjoyed discussing the topic.", "Enjoyed to discuss the topic.", "Enjoyed discuss the topic."], a: "Enjoyed discussing the topic." },
                    { q: "What does the speaker think we should avoid?", options: ["Avoid playing with nature.", "Avoid to play with nature.", "Avoid play with nature."], a: "Avoid playing with nature." }
                ]
            },
            {
                title: "Audio Script 4",
                audio: "The main university chemistry lab tragically suffered a massive, complete mechanical breakdown yesterday evening right after sunset. Because the central electrical cooling system entirely failed during a heatwave, we permanently lost hundreds of incredibly valuable, irreplaceable synthetic DNA samples that we had spent months preparing. The furious, red-faced laboratory manager loudly told me to sit down and meticulously write a highly detailed incident report immediately to explain the massive financial loss. Ironically, I distinctly remember carefully checking the main temperature gauge just an hour before the terrible incident occurred, and it was perfectly fine, so I honestly don't know exactly what went wrong internally. It is incredibly frustrating to watch an entire year of incredibly hard scientific research suddenly melt away simply because of a faulty air conditioning wire.",
                questions: [
                    { q: "What happened to the chemistry lab?", options: ["It suffered a complete breakdown.", "It achieved a breakthrough.", "It broke into a new market."], a: "It suffered a complete breakdown." },
                    { q: "What was lost during the failure?", options: ["Valuable DNA samples.", "The research team.", "A live mammoth."], a: "Valuable DNA samples." },
                    { q: "What did the manager tell the speaker to do?", options: ["He told him to write a detailed report.", "He told him writing a detailed report.", "He told him write a detailed report."], a: "He told him to write a detailed report." },
                    { q: "What does the speaker remember doing?", options: ["He remembers checking the temperature (a past memory).", "He remembers to check the temperature (as a task).", "He remembers check the temperature."], a: "He remembers checking the temperature (a past memory)." },
                    { q: "Does the speaker know what caused the failure?", options: ["No, he doesn't know what went wrong.", "Yes, he broke it intentionally.", "Yes, the manager told him."], a: "No, he doesn't know what went wrong." }
                ]
            },
            {
                title: "Audio Script 5",
                audio: "The modern science of cloning complex animals is an incredibly fascinating but technically complex, highly sensitive process. Honestly, I will absolutely never forget clearly seeing the very first successfully cloned dog running around playfully on the evening television news years ago. At the time, it was widely celebrated as an amazing, historic scientific achievement that proved we could manipulate life itself. However, today, many very vocal, passionate animal rights activists aggressively suggest completely banning the controversial practice worldwide. They strongly believe that creating these artificial clones often causes immense, totally unnecessary physical suffering to the poor species involved, as many clones are sadly born with severe, painful genetic defects. While the incredible science behind artificial replication is undeniably brilliant, the heavy moral cost might be far too high for modern society to proudly accept.",
                questions: [
                    { q: "What is cloning considered to be?", options: ["A fascinating but complex process.", "A simple and boring task.", "An extinct phenomenon."], a: "A fascinating but complex process." },
                    { q: "What will the speaker never forget?", options: ["Never forget seeing the first cloned dog.", "Never forget to see the first cloned dog.", "Never forget see the first cloned dog."], a: "Never forget seeing the first cloned dog." },
                    { q: "What do animal rights activists suggest?", options: ["They suggest banning the practice.", "They suggest to ban the practice.", "They suggest ban the practice."], a: "They suggest banning the practice." },
                    { q: "Why do activists oppose cloning?", options: ["They believe it causes unnecessary suffering.", "They think it is too cheap.", "They want to carry out more tests."], a: "They believe it causes unnecessary suffering." },
                    { q: "What does cloning involve?", options: ["Creating an identical genetic copy.", "Breaking down a machine.", "Resurrecting an ancient dinosaur."], a: "Creating an identical genetic copy." }
                ]
            },
            {
                title: "Audio Script 6",
                audio: "The prestigious, highly funded university research group suddenly broke up last week after a massive, incredibly bitter public argument over their shrinking federal funding. They had successfully been working incredibly well together for over five long years, publishing several groundbreaking genetics papers. Frustrated by the toxic politics, the brilliant head scientist, Dr. Lee, stubbornly decided to completely carry over his extensive private data to a brand new, rival university across the country. Because he firmly believes he is incredibly close to finding a cure for the rare disease, he confidently plans to aggressively develop the synthetic cure completely independently from his old team. He absolutely refuses to passively let this temporary, annoying financial setback permanently destroy his very promising scientific career.",
                questions: [
                    { q: "Why did the research group break up?", options: ["Because of a massive argument over funding.", "Because they found a cure.", "Because a disease broke out."], a: "Because of a massive argument over funding." },
                    { q: "How long had they been working together?", options: ["For five years.", "For one year.", "Since yesterday."], a: "For five years." },
                    { q: "What did Dr. Lee decide to do with his data?", options: ["He decided to carry over his data to a new university.", "He decided carrying over his data.", "He decided to break down his data."], a: "He decided to carry over his data to a new university." },
                    { q: "What does Dr. Lee plan to do?", options: ["He plans to develop the cure independently.", "He plans developing the cure independently.", "He plans develop the cure."], a: "He plans to develop the cure independently." },
                    { q: "What does Dr. Lee refuse to do?", options: ["He refuses to let the setback destroy his career.", "He refuses letting the setback destroy his career.", "He refuses to make the setback destroy his career."], a: "He refuses to let the setback destroy his career." }
                ]
            },
            {
                title: "Audio Script 7",
                audio: "Our advanced pharmaceutical laboratory completely stopped testing our experimental drugs on live animals late last year entirely due to incredibly strict new ethical government guidelines. Instead of relying on traditional, sometimes cruel animal testing, we successfully started to utilize highly advanced, AI-driven digital supercomputer simulations. These incredibly complex, modern simulations efficiently allow us to deeply analyze countless dangerous genetic mutations safely inside a secure computer, without ever risking any harm to a living creature. The federal government strongly and financially encourages all modern medical scientists across the country to rapidly adopt these amazing new digital technologies in order to permanently prevent unnecessary cruelty in scientific research.",
                questions: [
                    { q: "Why did they stop testing on animals? (Ceased the activity)", options: ["They stopped testing on animals.", "They stopped to test on animals.", "They stopped test on animals."], a: "They stopped testing on animals." },
                    { q: "What do they use instead?", options: ["Digital simulations.", "Real mammoths.", "Extinct species."], a: "Digital simulations." },
                    { q: "What do the simulations allow scientists to do?", options: ["They allow them to analyze mutations safely.", "They allow them analyzing mutations safely.", "They allow them analyze mutations safely."], a: "They allow them to analyze mutations safely." },
                    { q: "What does the government encourage scientists to do?", options: ["The government encourages scientists to adopt new technologies.", "The government encourages scientists adopting new technologies.", "The government encourages scientists adopt new technologies."], a: "The government encourages scientists to adopt new technologies." },
                    { q: "Why are these technologies encouraged?", options: ["To prevent cruelty.", "To break out diseases.", "To carry over the budget."], a: "To prevent cruelty." }
                ]
            },
            {
                title: "Audio Script 8",
                audio: "Attention all laboratory staff: Please, I am begging you, always explicitly remember to firmly lock the heavy, steel hazardous materials cabinet located in the back every single evening before you leave the building to go home. Just last month, someone incredibly carelessly forgot to properly secure the latch, and a highly dangerous, incredibly toxic green chemical almost leaked entirely out onto the sterile floor. We absolutely cannot afford to have another terrifying, expensive breakdown in our strict safety protocols, or the government will shut us down. I sternly expect absolutely everyone in this facility to meticulously follow the safety rules strictly, without any lazy exceptions.",
                questions: [
                    { q: "What must the person remember to do? (A task/duty)", options: ["Remember to lock the cabinet.", "Remember locking the cabinet.", "Remember lock the cabinet."], a: "Remember to lock the cabinet." },
                    { q: "What happened last month?", options: ["Someone forgot to secure it (failed to do the task).", "Someone forgot securing it.", "Someone forgot secure it."], a: "Someone forgot to secure it (failed to do the task)." },
                    { q: "What was the consequence of forgetting?", options: ["A dangerous chemical almost leaked.", "A breakthrough in genetics occurred.", "The team broke up."], a: "A dangerous chemical almost leaked." },
                    { q: "What can't they afford?", options: ["Another breakdown in safety.", "Another breakthrough in safety.", "Another breakout in safety."], a: "Another breakdown in safety." },
                    { q: "What does the speaker expect everyone to do?", options: ["Expect everyone to follow the rules.", "Expect everyone following the rules.", "Expect everyone follow the rules."], a: "Expect everyone to follow the rules." }
                ]
            },
            {
                title: "Audio Script 9",
                audio: "While we all truly enjoy wildly exploring the incredible, seemingly limitless potential of modern genetic engineering in this university lab, we must also strictly avoid carelessly crossing very dangerous moral and ethical boundaries. I clearly remember deeply reading a terrifying, peer-reviewed academic paper years ago about the highly unpredictable, unforeseen ecological consequences of artificially cloning predators. Because of these incredibly severe risks, the strict national ethics committee strongly advised us to immediately stop our highly controversial field trials before anyone got hurt. After a very long, heated meeting, we finally decided to wisely carry out much further, rigorous safety checks inside the lab before boldly proceeding with our outdoor tests.",
                questions: [
                    { q: "What does the speaker enjoy doing?", options: ["Exploring the potential of genetic engineering.", "To explore the potential of engineering.", "Explore the potential of genetic engineering."], a: "Exploring the potential of genetic engineering." },
                    { q: "What must the scientists avoid?", options: ["Avoid crossing moral boundaries.", "Avoid to cross moral boundaries.", "Avoid cross moral boundaries."], a: "Avoid crossing moral boundaries." },
                    { q: "What does the speaker remember doing?", options: ["He remembers reading a paper (a past memory).", "He remembers to read a paper (a future task).", "He forgot reading a paper."], a: "He remembers reading a paper (a past memory)." },
                    { q: "What did the ethics committee advise them to do?", options: ["They advised them to stop the controversial trials.", "They advised them stopping the trials.", "They advised them stop the trials."], a: "They advised them to stop the controversial trials." },
                    { q: "What did they decide to do next?", options: ["To carry out further safety checks.", "To break into the lab.", "To carry over the virus."], a: "To carry out further safety checks." }
                ]
            },
            {
                title: "Audio Script 10",
                audio: "When the terrifying, highly contagious new illness suddenly broke out in the overcrowded city, our small hospital lab tragically suffered a major, catastrophic electrical breakdown directly due to severe, rolling city power issues caused by the fierce winter storms. However, the incredible, stubborn determination of our brilliant, exhausted medical team miraculously carried us securely through the terrifying, deadly crisis. We tirelessly tried combining hundreds of different synthetic proteins in the petri dishes day and night just to carefully see the exact chemical reaction. Eventually, after weeks of failure, we successfully achieved a massive medical breakthrough and quickly let the main city hospital use our brand new, highly effective vaccine to save thousands of innocent lives.",
                questions: [
                    { q: "What happened with the new illness?", options: ["It broke out.", "It broke down.", "It broke into."], a: "It broke out." },
                    { q: "What did the lab suffer?", options: ["A major breakdown.", "A major breakthrough.", "A major breakup."], a: "A major breakdown." },
                    { q: "What carried the team through the crisis?", options: ["Their determination.", "Their lack of funding.", "Their ethical mistakes."], a: "Their determination." },
                    { q: "What did the team try doing?", options: ["They tried combining different proteins (as an experiment).", "They tried to combine proteins (with a difficult effort).", "They tried combine different proteins."], a: "They tried combining different proteins (as an experiment)." },
                    { q: "What did they let the hospital do?", options: ["They let the hospital use their new vaccine.", "They let the hospital to use their new vaccine.", "They let the hospital using their new vaccine."], a: "They let the hospital use their new vaccine." }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT (10 ITEMS - ~200 WORDS EXPANDED) ---
        14: [
            {
                title: "Text 1: The Genetics Lab",
                text: "Our university biology laboratory miraculously achieved a truly massive [1] (breakthrough / breakdown / breakup) late yesterday evening. After months of grueling, exhausting work, we successfully mapped the incredibly complex, entire [2] (genome / ethics / fiction) of a highly rare, endangered Amazonian plant species. The famously strict lead scientist graciously [3] (allowed / let / forced) us to loudly celebrate with champagne for a few minutes. However, we must quickly and diligently [4] (carry on / break out / carry over) with the extremely difficult genetic work again today. We sincerely hope [5] (to find / finding / find) a permanent, effective scientific way to genetically make this vital agricultural plant completely resistant to the severe, deadly droughts caused by global warming.",
                answers: ["breakthrough", "genome", "allowed", "carry on", "to find"]
            },
            {
                title: "Text 2: A Tragic Failure",
                text: "The highly anticipated, multi-million dollar cloning experiment was actually going incredibly well right up until the main electrical cooling system tragically suffered a complete, catastrophic [1] (breakdown / breakthrough / breakout) due to a massive city power surge. The internal laboratory temperature rose dangerously fast, and we miserably [2] (stopped checking / stopped to check / stopped check) the delicate DNA samples, quickly realizing with horror that they were all completely ruined by the intense heat. I will absolutely never forget [3] (seeing / to see / see) the incredibly devastated, disappointed look of pure defeat on the old professor's face when the glass cracked. The deeply frustrated research team completely [4] (broke up / broke into / broke out) into angry arguments shortly after the expensive incident. We ultimately decided [5] (to abandon / abandoning / abandon) the ruined genetic project entirely.",
                answers: ["breakdown", "stopped checking", "seeing", "broke up", "to abandon"]
            },
            {
                title: "Text 3: The De-extinction Debate",
                text: "Is it truly [1] (ethical / extinct / viral) for modern scientists to boldly play God and resurrect dead, ancient animals directly from the frozen Ice Age? Right now, some highly ambitious, extremely well-funded laboratories are aggressively [2] (trying to clone / trying cloning / try to clone) the massive, hairy woolly [3] (mammoth / DNA / cure) by expertly using ancient, preserved genetic material found deep inside frozen Arctic bones. However, many furious environmental critics loudly [4] (advise them to stop / advise them stopping / advise them stop) these terrifying Frankenstein experiments immediately, because the long-term ecological [5] (consequences / benefits / researchers) of releasing giant, prehistoric beasts back into the fragile modern wild are completely unknown and potentially highly dangerous.",
                answers: ["ethical", "trying to clone", "mammoth", "advise them to stop", "consequences"]
            },
            {
                title: "Text 4: Dealing with a Virus",
                text: "When the highly contagious, incredibly terrifying new respiratory disease suddenly [1] (broke out / broke down / broke into) in the overcrowded, bustling capital city, mass civic panic spread incredibly quickly among the terrified population. Elite doctors and brave medical scientists immediately started to [2] (carry out / carry on / break through) highly dangerous clinical research inside secure labs to deeply understand the rapidly mutating virus. The desperate city health officials strongly [3] (suggested wearing / suggested to wear / suggested wear) thick, protective surgical masks in all crowded public places like trains and grocery stores. Furthermore, the strict federal government aggressively [4] (forced people to stay / forced people staying / forced people stay) completely locked indoors for weeks to forcefully prevent any further deadly infections. Fortunately, thanks to science, a miraculous synthetic [5] (cure / extinction / mutation) was successfully developed and globally distributed within a single year.",
                answers: ["broke out", "carry out", "suggested wearing", "forced people to stay", "cure"]
            },
            {
                title: "Text 5: Scientific Curiosity",
                text: "Ever since I was a curious little kid, I have always [1] (enjoyed reading / enjoyed to read / enjoyed read) incredibly thick, detailed textbooks entirely about advanced human biology and complex genetics. Just last week, I unexpectedly [2] (came across / broke into / carried over) a truly fascinating, deeply complex academic article published online completely about the revolutionary CRISPR technology. The incredibly detailed scientific text brilliantly explained exactly how skilled genetic scientists can actively [3] (modify / extinct / resurrect) a damaged, broken sequence of human DNA. This revolutionary, magical technology clearly has the incredible future [4] (potential / breakdown / species) to permanently eliminate terrible, painful hereditary diseases from the entire human race forever. Because she saw my deep passion for the subject, my biology teacher [5] (made us write / made us to write / made us writing) a massive, ten-page academic essay specifically about its profound global impact.",
                answers: ["enjoyed reading", "came across", "modify", "potential", "made us write"]
            },
            {
                title: "Text 6: Laboratory Safety",
                text: "Strict, absolute physical safety is undeniably the single most important rule to constantly follow in the dangerous university chemistry lab. Please always [1] (remember to wear / remember wearing / remember wear) your thick, protective plastic safety goggles at absolutely all times while standing near the chemical tables. Just last month, a highly careless, distracted senior student completely [2] (forgot to close / forgot closing / forgot close) a highly flammable chemical bottle near the hot bunsen burner, which unfortunately caused a very dangerous, terrifying small fire that filled the room with black smoke. We immediately [3] (stopped to evacuate / stopped evacuating / stopped evacuate) the burning building as the loud fire alarms rang. The strict safety rules from that scary chemistry class absolutely [4] (carry over / carry out / break out) directly to this advanced biology lab as well. Because the organic materials here are highly toxic, I sternly [5] (expect you to follow / expect you following / expect you follow) every single safety guideline strictly and without any lazy exceptions.",
                answers: ["remember to wear", "forgot to close", "stopped to evacuate", "carry over", "expect you to follow"]
            },
            {
                title: "Text 7: An Innovative Idea",
                text: "The brilliant, incredibly young teenage computer programmer magically [1] (came up with / broke into / carried through) a truly brilliant, highly complex digital software program designed exclusively for lightning-fast human gene analysis. Because he was so proud of his incredibly hard work, he [2] (decided to present / decided presenting / decided present) it live on stage at the massive, highly competitive national science fair in Washington. Many famous, highly respected genetic experts graciously [3] (let him speak / allowed him to speak / let him to speak) passionately about his revolutionary software invention on the giant main stage. The incredible presentation was a huge, undeniable success, and his brilliant, modern ideas quickly [4] (broke into / broke out / broke down) the mainstream digital media and went totally viral worldwide. Because he is highly motivated by his newfound fame, he confidently [5] (promises to continue / promises continuing / promises continue) his deeply important medical research throughout his entire life.",
                answers: ["came up with", "decided to present", "let him speak", "broke into", "promises to continue"]
            },
            {
                title: "Text 8: Experimental Procedures",
                text: "If the thick, blue chemical powder doesn't completely dissolve quickly in the cold water, you must gently [1] (try heating / try to heat / try heat) the thin glass test tube carefully over the blue flame to physically see what dangerous chemical reaction happens next. We must bravely [2] (carry on / break up / break out) with this incredibly exhausting, repetitive testing process until we finally get incredibly clear, undeniable scientific results. The incredibly ancient, fragile [3] (DNA / extinct / ethical) structure found inside this frozen bone is very delicate, so we must strictly [4] (avoid shaking / avoid to shake / avoid shake) the glass tube too much or it will shatter entirely. I clearly [5] (remember reading / remember to read / remember read) in the massive university textbook that this highly specific organic compound is incredibly reactive and explosive. This type of high-level medical research takes incredible patience, intense focus, and extreme surgical precision.",
                answers: ["try heating", "carry on", "DNA", "avoid shaking", "remember reading"]
            },
            {
                title: "Text 9: The De-extinction Debate",
                text: "Artificially resurrecting long-dead, heavily extinct animals using complex genetics is an incredibly [1] (controversial / ethical / safe) and hotly debated topic in modern science today. Some highly ambitious, curious researchers truly enjoy [2] (imagining / to imagine / imagine) the glorious, triumphant return of the massive, ancient woolly mammoth to the frozen Siberian tundra. However, many other cautious, highly concerned environmental scientists loudly [3] (advise them to stop / advise stopping / advise them stop) these incredibly dangerous, unpredictable projects immediately. A sudden, totally catastrophic ecological [4] (breakdown / breakthrough / breakup) could easily happen in the fragile modern forest if we suddenly introduce an ancient, foreign species that eats all the local food. We must always soberly remember [5] (to evaluate / evaluating / evaluate) absolutely all of the massive biological risks extremely carefully before making a final, world-changing decision.",
                answers: ["controversial", "imagining", "advise them to stop", "breakdown", "to evaluate"]
            },
            {
                title: "Text 10: A Success in the Lab",
                text: "After months of intense debate, our highly funded university lab finally decided [1] (to carry out / carrying out / carry out) an incredibly complex, highly dangerous genetic experiment expertly using the new CRISPR molecular technology. The revolutionary, microscopic technology easily [2] (allows us to modify / allows us modifying / allows us modify) broken human DNA with incredible, surgical precision. During the intense, highly monitored clinical test, the brave lead scientists confidently tried [3] (adding / to add / add) a brand new, highly experimental synthetic chemical to the petri dish just to carefully see the exact cellular reaction. The highly surprising, totally unexpected medical results ultimately led to a truly massive, historic [4] (breakthrough / breakup / breakout) in the incredibly complex field of human genetics. Because the incredible results were so profoundly important for the future of medicine, the strict, demanding head professor [5] (made us write / made us to write / made us writing) a massive, fifty-page academic report for the prestigious international scientific journal.",
                answers: ["to carry out", "allows us to modify", "adding", "breakthrough", "made us write"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 ITEMS - ~200 WORDS EXPANDED) ---
        15: [
            {
                title: "Audio Script 1",
                audio: "The truly incredible, historic discovery of the CRISPR gene-editing tool was undeniably a major, world-changing scientific breakthrough that shocked the global medical community. It magically allows brilliant researchers to precisely cut and physically edit complex human genomes with incredible, microscopic precision. Highly dedicated medical scientists strongly hope to permanently cure terrible, deadly genetic diseases simply by fixing the broken DNA mutations right inside the patient's living cells. However, many very loud, highly concerned ethical critics sternly advise these ambitious scientists to immediately stop testing on human subjects and deeply consider the severe, irreversible moral consequences of their incredibly dangerous actions.",
                text: "The discovery of CRISPR was a major scientific [1]. It [2] researchers [3] edit genes with incredible precision. Scientists [4] to cure genetic diseases. However, many critics [5] scientists to stop and consider the consequences.",
                answers: ["breakthrough", "allows", "to", "hope", "advise"]
            },
            {
                title: "Audio Script 2",
                audio: "A highly contagious, totally unknown new respiratory disease violently broke out in the crowded, bustling capital city late last month, causing massive civic panic. Hundreds of brave, terrified doctors desperately rushed to the overflowing central hospital to quickly carry out emergency blood tests on the incredibly sick patients. They desperately tried using several different experimental antibiotics on the most severe cases just to see if the suffering patients' fragile health would finally improve. The incredibly dedicated medical staff had to bravely carry on working around the clock, treating the sick despite being physically and mentally exhausted.",
                text: "A new respiratory disease [1] out in the city last month. Doctors rushed to the hospital to [2] out emergency tests. They [3] using different antibiotics to see the result. The medical staff had to carry [4] working [5] being exhausted.",
                answers: ["broke", "carry", "tried", "on", "despite"]
            },
            {
                title: "Audio Script 3",
                audio: "Yesterday afternoon, my eccentric university biology professor made us quietly sit down and watch a fascinating, hour-long documentary all about the controversial science of de-extinction. The high-budget film showed several dedicated scientists actively trying their absolute best to artificially resurrect the famous, long-extinct dodo bird using fragments of ancient DNA. After the video ended, the professor loudly asked the quiet classroom if we truly thought bringing back a dead species was a highly moral decision for humanity to make. I genuinely enjoyed passionately discussing the complex topic in class today.",
                text: "My biology professor [1] us watch a documentary about de-extinction. It showed scientists [2] to resurrect the dodo bird. The professor asked if we thought it was a [3] decision. I [4] discussing the [5] in class today.",
                answers: ["made", "trying", "moral", "enjoyed", "topic"]
            },
            {
                title: "Audio Script 4",
                audio: "The main university chemistry lab tragically suffered a massive, complete mechanical breakdown yesterday evening right after sunset. Because the central electrical cooling system entirely failed during a heatwave, we permanently lost hundreds of incredibly valuable, irreplaceable synthetic DNA samples that we had spent months preparing. I distinctly remember carefully checking the main temperature gauge just an hour before the terrible incident occurred, so I honestly don't know exactly what went wrong. The furious, red-faced laboratory manager loudly told me to write a highly detailed incident report to explain the loss.",
                text: "The chemistry lab suffered a complete [1] yesterday. The cooling system failed, and we lost many valuable [2] samples. I [3] checking the temperature an hour before the incident. The manager told me [4] write a [5].",
                answers: ["breakdown", "DNA", "remember", "to", "report"]
            },
            {
                title: "Audio Script 5",
                audio: "The modern science of cloning complex animals is an incredibly fascinating but technically complex, highly sensitive process. Honestly, I will absolutely never forget clearly seeing the very first successfully cloned dog running around on television. It was an amazing, historic scientific achievement. However, today, many passionate animal rights activists aggressively suggest completely banning the controversial practice worldwide. They strongly believe that creating these artificial clones often causes immense, totally unnecessary physical suffering to the poor species involved. It is a highly controversial ethical issue that remains heavily debated.",
                text: "[1] animals is a fascinating but complex process. I will never [2] seeing the first cloned dog on television. However, many activists [3] banning the practice. They believe it causes suffering to the [4]. It is a controversial [5].",
                answers: ["Cloning", "forget", "suggest", "species", "issue"]
            },
            {
                title: "Audio Script 6",
                audio: "The prestigious, highly funded university research group suddenly broke up last week after a massive, incredibly bitter public argument over their shrinking federal funding. Frustrated by the toxic politics, the brilliant head scientist, Dr. Lee, stubbornly decided to completely carry over his extensive private data to a brand new, rival university across the country. He confidently plans to aggressively develop the synthetic cure completely independently from his old team. He absolutely refuses to passively let this temporary, annoying financial setback permanently destroy his very promising scientific career.",
                text: "The research group [1] up after a massive argument over funding. Dr. Lee [2] to carry [3] his data to a new university. He plans to [4] the cure independently. He refuses to [5] the setback destroy his career.",
                answers: ["broke", "decided", "over", "develop", "let"]
            },
            {
                title: "Audio Script 7",
                audio: "Our advanced pharmaceutical laboratory completely stopped testing our experimental drugs on live animals late last year entirely due to incredibly strict new ethical government guidelines. Instead of relying on traditional animal testing, we successfully started to utilize highly advanced, AI-driven digital supercomputer simulations. These incredibly complex, modern simulations efficiently allow us to deeply analyze countless dangerous genetic mutations safely inside a secure computer. The federal government strongly encourages all modern medical scientists across the country to rapidly adopt these amazing new digital technologies to prevent cruelty.",
                text: "We [1] testing on animals last year due to new [2] guidelines. Instead, we started to use digital simulations. These simulations [3] us to analyze [4] safely. The government [5] scientists to adopt these new technologies.",
                answers: ["stopped", "ethical", "allow", "mutations", "encourages"]
            },
            {
                title: "Audio Script 8",
                audio: "Attention all laboratory staff: Please, I am begging you, always explicitly remember to firmly lock the heavy, steel hazardous materials cabinet located in the back every single evening before you leave to go home. Just last month, someone incredibly carelessly forgot to properly secure the latch, and a highly dangerous, incredibly toxic green chemical almost leaked entirely out. We absolutely cannot afford to have another terrifying, expensive breakdown in our strict safety protocols. I sternly expect absolutely everyone in this facility to meticulously follow the safety rules strictly.",
                text: "Please [1] to lock the hazardous materials cabinet before you leave. Last month, someone [2] to secure it, and a dangerous chemical almost leaked. We can't afford another [3] in safety. I [4] everyone [5] follow the rules.",
                answers: ["remember", "forgot", "breakdown", "expect", "to"]
            },
            {
                title: "Audio Script 9",
                audio: "Brilliant new ideas aggressively break into the global market constantly in the incredibly fast-paced field of modern biotechnology. Because of this speed, we must diligently carry on learning every single day so we don't fall dangerously behind our international competitors. Try reading the incredibly thick, detailed academic medical journal tonight to properly see the newest global genetic trends. If a highly contagious, deadly new disease suddenly breaks out in a crowded city tomorrow, we absolutely must be fully ready to immediately act and safely distribute our synthetic cures.",
                text: "New ideas [1] into the market constantly in the field of biotechnology. We must carry [2] learning so we don't fall behind. [3] reading the latest journal to see the trends. If a new disease breaks [4], we must be ready to [5].",
                answers: ["break", "on", "Try", "out", "act"]
            },
            {
                title: "Audio Script 10",
                audio: "The tragic, devastating natural extinction of the massive, furry woolly mammoth historically happened thousands of cold, freezing years ago during the brutal Ice Age. Now, a highly funded, incredibly ambitious international team of genetic scientists deeply hopes to artificially resurrect it using ancient frozen DNA. They thoroughly enjoy passionately discussing the immense potential ecological benefits of returning the beast to the wild, but they cautiously avoid making any strict, definitive public promises to the media just yet. They will confidently carry out much more advanced clinical research next year.",
                text: "The [1] of the mammoth happened thousands of years ago. Now, a team [2] to resurrect it. They enjoy [3] the potential benefits, but they [4] making promises. They will carry [5] more clinical research next year.",
                answers: ["extinction", "hopes", "discussing", "avoid", "out"]
            }
        ]
    }
});