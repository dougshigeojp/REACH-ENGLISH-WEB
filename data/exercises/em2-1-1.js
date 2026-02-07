/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */

window.initExercise({
    id: "em2-1-1",
    grade: "EM 2nd Grade",
    bimester: "1",
    chapter: "1",
    title: "Evolution and Genetics",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES (40 ITEMS) ---
        1: [
            { words: ["never", "such", "detailed", "model", "DNA", "seen", "I", "have", "a"], correct: "I have never seen such a detailed DNA model" },
            { words: ["species", "evolved", "much", "have", "over", "time", "how", "crazy", "it's"], correct: "It's crazy how much species have evolved over time" },
            { words: ["had", "fossils", "discovered", "scientists", "already", "these"], correct: "Scientists had already discovered these fossils" },
            { words: ["by", "time", "we", "learned", "finish", "will", "have", "much", "so"], correct: "By the time we finish we will have learned so much" },
            { words: ["wouldn't", "developed", "if", "tools", "understood", "we", "hadn't", "have"], correct: "If we hadn't developed tools we wouldn't have understood" },
            { words: ["learned", "just", "have", "I", "about", "selection", "natural"], correct: "I have just learned about natural selection" },
            { words: ["species", "gone", "have", "extinction", "many", "into"], correct: "Many species have gone into extinction" },
            { words: ["been", "evolution", "how", "protect", "we", "has", "there", "an", "in"], correct: "Has there been an evolution in how we protect" },
            { words: ["dramatically", "technology", "changed", "has", "years", "in", "recent"], correct: "Technology has changed dramatically in recent years" },
            { words: ["already", "the", "genome", "sequenced", "they", "had"], correct: "They had already sequenced the genome" },
            { words: ["genetic", "similarity", "primates", "other", "to", "shows", "evidence"], correct: "Evidence shows genetic similarity to other primates" },
            { words: ["millions", "for", "changed", "life", "has", "years", "of"], correct: "Life has changed for millions of years" },
            { words: ["studied", "extensively", "lately", "biodiversity", "been", "has"], correct: "Biodiversity has been studied extensively lately" },
            { words: ["traits", "environment", "the", "to", "adaptations", "are"], correct: "Traits are actually adaptations to the environment" },
            { words: ["would", "survived", "if", "moved", "they", "had"], correct: "Would they have survived if they had moved" },
            { words: ["saved", "not", "every", "yet", "species", "have", "we"], correct: "We have not saved every species yet" },
            { words: ["believed", "life", "in", "started", "is", "water", "it"], correct: "It is believed life started in water" },
            { words: ["by", "year", "next", "mapped", "will", "code", "have", "we", "the"], correct: "By next year we will have mapped the code" },
            { words: ["been", "mutation", "a", "have", "if", "there", "I", "would", "seen", "had"], correct: "If I had been there I would have seen a mutation" },
            { words: ["ancestor", "common", "life", "all", "a", "evolved", "from", "has"], correct: "All life has evolved from a common ancestor" },
            { words: ["fossils", "studied", "decades", "have", "been", "for", "Brazil", "in"], correct: "Fossils have been studied for decades in Brazil" },
            { words: ["had", "realized", "not", "how", "much", "changed", "species", "we"], correct: "We had not realized how much species changed" },
            { words: ["climate", "adapted", "not", "if", "animals", "had", "the", "to"], correct: "If animals had not adapted to the climate" },
            { words: ["mutation", "unique", "found", "have", "I", "a", "DNA", "their", "in"], correct: "I have found a unique mutation in their DNA" },
            { words: ["finish", "analysis", "the", "will", "week", "next", "have", "they"], correct: "They will have finished the analysis next week" },
            { words: ["evidence", "fossil", "experts", "studied", "has", "by", "been"], correct: "Fossil evidence has been studied by experts" },
            { words: ["ever", "real", "you", "seen", "have", "fossil", "a"], correct: "Have you ever seen a real fossil" },
            { words: ["already", "visited", "have", "museum", "you", "the"], correct: "Have you already visited the museum" },
            { words: ["just", "mutations", "about", "learned", "have", "I"], correct: "I have just learned about mutations" },
            { words: ["would", "extinction", "avoided", "have", "they"], correct: "They would have avoided extinction" },
            { words: ["genetic", "contains", "instructions", "DNA", "the"], correct: "DNA contains the genetic instructions" },
            { words: ["been", "through", "studies", "discovered", "it", "has"], correct: "It has been discovered through studies" },
            { words: ["traits", "hereditary", "color", "eye", "is", "a"], correct: "Eye color is a hereditary trait" },
            { words: ["by", "2050", "found", "will", "a", "cure", "have", "scientists"], correct: "Scientists will have found a cure by 2050" },
            { words: ["developed", "new", "medicine", "in", "adaptations", "have", "scientists"], correct: "Scientists have developed new adaptations in medicine" },
            { words: ["been", "an", "evolution", "has", "tools", "there", "in"], correct: "Has there been an evolution in tools" },
            { words: ["millions", "dinosaurs", "for", "of", "ruled", "years"], correct: "Dinosaurs ruled for millions of years" },
            { words: ["species", "many", "discovered", "had", "Darwin"], correct: "Darwin had discovered many species" },
            { words: ["not", "yet", "found", "solution", "have", "we", "a"], correct: "We have not found a solution yet" },
            { words: ["genome", "sequence", "had", "they", "before", "started"], correct: "They had started before they sequenced the genome" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES (40 ITEMS) ---
        2: [
            { lines: ["It’s crazy how much species have evolved over time.", "It really is, Albert!", "Wow, Celine! Look at this DNA helix model.", "By the time we finish this tour, we will have learned so much."], order: [2, 0, 1, 3] },
            { lines: ["Through genetic studies, we now know how natural selection works.", "I read that scientists had already discovered many fossils.", "Exactly. If we hadn't developed tools, we wouldn't have understood mutations.", "Technology has changed dramatically in recent years."], order: [1, 3, 0, 2] },
            { lines: ["Has there been an evolution in how we protect these species?", "It’s sad that many species have gone into extinction.", "Biodiversity is essential for a healthy planet.", "I hope so! We have not saved every species yet."], order: [1, 2, 0, 3] },
            { lines: ["I have just finished reading a book about it!", "Have you ever studied natural selection?", "It explains how traits are adaptations to the environment.", "That is a fascinating topic, isn't it?"], order: [1, 0, 2, 3] },
            { lines: ["No, I had only heard about DNA on the news.", "Albert, had you read about the common ancestor before class?", "But now I understand the genetic code better.", "Great, we will have explored more evidence by noon."], order: [1, 0, 2, 3] },
            { lines: ["Do you think we will have found a cure for all diseases by 2050?", "I hope so! Scientists have developed many new adaptations.", "Medicine has changed dramatically lately.", "Yes, because the genome has been studied extensively."], order: [0, 1, 2, 3] },
            { lines: ["Would the mammoth have survived if it had moved south?", "It’s possible! It would have avoided extinction.", "But the climate had changed too fast.", "That is why adaptation is so important."], order: [0, 1, 2, 3] },
            { lines: ["I have never seen such a large bone!", "It must belong to a whale.", "Scientists had already identified it as a prehistoric fossil.", "Wow, the history of species is amazing."], order: [0, 1, 2, 3] },
            { lines: ["I have just learned that eye color is a hereditary trait.", "Yes, it is written in our DNA.", "Had you known that before today?", "No, I had never thought about it."], order: [0, 1, 2, 3] },
            { lines: ["Have you already visited the Natural History Museum?", "No, but I will have visited it by the end of the week.", "You should go! They have a great evolution display.", "I had planned to go last month, but I was busy."], order: [0, 1, 2, 3] },
            { lines: ["Had Darwin collected many species before he became famous?", "Yes, he had collected samples in the Galapagos.", "His theory of evolution has been studied for years.", "It has changed our understanding of ancestry."], order: [0, 1, 2, 3] },
            { lines: ["If only we had protected the forest, those animals wouldn't have died.", "It is a sad case of extinction.", "We have not realized the impact of our actions yet.", "But biodiversity can still be saved if we act now."], order: [0, 1, 2, 3] },
            { lines: ["By next year, we will have sequenced the entire genome of this plant.", "That is an incredible breakthrough!", "We have been working on this mutation for months.", "I wish I had your laboratory equipment."], order: [0, 1, 2, 3] },
            { lines: ["Had the lecture already begun when you arrived?", "Yes, it had already started ten minutes before.", "I have not heard the professor's introduction yet.", "Don't worry, the content has been recorded."], order: [0, 1, 2, 3] },
            { lines: ["I've never seen a polar bear in real life.", "Their thick fur is a perfect adaptation to the snow.", "Have scientists always known that?", "Yes, it has been studied for a long time."], order: [0, 1, 2, 3] },
            { lines: ["I have just discovered a new fossil in my backyard!", "Really? Have you already called the museum?", "No, I had not thought about that yet.", "You must! It could be a common ancestor."], order: [0, 1, 2, 3] },
            { lines: ["Would you have studied genetics if you lived in the 19th century?", "No, because they hadn't discovered DNA yet!", "True, but they had already started looking at traits.", "But the technology would have been too simple."], order: [0, 1, 2, 3] },
            { lines: ["By the time you graduate, science will have progressed even more.", "I hope we will have found solutions for extinction.", "Have you already decided on your research topic?", "Yes, I have chosen to study biodiversity."], order: [0, 1, 2, 3] },
            { lines: ["Why are your eyes red, Celine?", "I have been studying the genetic code all night.", "You should have slept! You look exhausted.", "I know, but I had not finished the analysis."], order: [0, 1, 2, 3] },
            { lines: ["Evidence shows that we share a common ancestor with apes.", "Have you already seen the comparison charts?", "Yes, I had seen them in the museum yesterday.", "The similarity is quite dramatic, isn't it?"], order: [0, 1, 2, 3] },
            // --- Generated Variations to reach 40 items ---
            { lines: ["Has DNA research affected our medicine?", "Yes, it has improved our ability to cure diseases.", "I hope we will have cured everything soon.", "By 2050, researchers will have found more solutions."], order: [0, 1, 2, 3] },
            { lines: ["If scientists hadn't found that fossil, they wouldn't have understood the link.", "It had been hidden in the rock for millions of years.", "I have just learned how they use carbon dating.", "Technology will have improved even more by 2030."], order: [0, 1, 2, 3] },
            { lines: ["I have not received my DNA test results yet.", "Had you sent the sample last week?", "Yes, but the lab has been very busy lately.", "I am sure they will have finished it by Friday."], order: [0, 1, 2, 3] },
            { lines: ["I've never seen such a beautiful rainforest.", "The biodiversity here has evolved for millions of years.", "We must protect it so it doesn't go into extinction.", "Agreed. We have not done enough yet."], order: [0, 1, 2, 3] },
            { lines: ["Would the dodo have survived if humans hadn't arrived?", "Most likely. It hadn't developed a fear of predators.", "That was a sad failure of adaptation.", "Yes, and we have learned from that mistake."], order: [0, 1, 2, 3] },
            { lines: ["I have just learned about genetic mutations.", "Are they always harmful to the species?", "No, some have allowed animals to adapt better.", "Science has progressed dramatically in this area."], order: [0, 1, 2, 3] },
            { lines: ["By the time we grow up, will robots have evolved?", "AI models have already changed a lot this year.", "I wish I had been born in the future!", "But we are witnessing the breakthrough now."], order: [0, 1, 2, 3] },
            { lines: ["Have you ever wondered about your ancestors?", "Yes, I had done some research on my family tree.", "What had you found out?", "That my great-grandparents had come from Italy."], order: [0, 1, 2, 3] },
            { lines: ["Students, have you already finished the experiment?", "Not yet, we have been modifying the DNA strands.", "Had you followed all the safety steps?", "Yes, we had prepared everything carefully."], order: [0, 1, 2, 3] },
            { lines: ["It is believed that birds evolved from dinosaurs.", "I have already seen fossils that prove that.", "Had scientists always agreed on this?", "No, it has been debated for a long time."], order: [0, 1, 2, 3] },
            { lines: ["If only I had known about the biology test!", "I had told you about it yesterday morning.", "I have been so distracted lately.", "You will have learned the topics by tomorrow if you start now."], order: [0, 1, 2, 3] },
            { lines: ["Why has the species changed its color?", "It has adapted to the dark environment.", "Had the mutation occurred naturally?", "Yes, through natural selection over time."], order: [0, 1, 2, 3] },
            { lines: ["I have just sequenced a part of the genome.", "That is great! Had you used the new software?", "Yes, and it will have analyzed the rest by tonight.", "Innovation is making our work so much faster."], order: [0, 1, 2, 3] },
            { lines: ["I've never seen a trilobite fossil before.", "I had found one during the field trip last year.", "Did you give it to the museum?", "Yes, it has been studied by experts since then."], order: [0, 1, 2, 3] },
            { lines: ["Would we have discovered DNA without microscopes?", "Probably not. Technology allows us to see the invisible.", "We will have invented even better tools soon.", "I am confident science will continue to evolve."], order: [0, 1, 2, 3] },
            { lines: ["I have been reading about biodiversity all morning.", "Have you already finished the article?", "Yes, and I had never realized how many species are in danger.", "We have not protected our resources enough yet."], order: [0, 1, 2, 3] },
            { lines: ["Had the ice melted before the animals could cross?", "Yes, many had become isolated on the island.", "This has affected their evolution dramatically.", "They will have developed new traits in a few centuries."], order: [0, 1, 2, 3] },
            { lines: ["I have just heard that a new species was discovered in Brazil.", "That is amazing! Had they been looking for it?", "Yes, researchers have been exploring that cave for years.", "Their effort has finally been rewarded."], order: [0, 1, 2, 3] },
            { lines: ["Do you think the human brain will have changed by the year 3000?", "Evolution usually takes millions of years.", "But technology has accelerated the process.", "I wish I could see what happens!"], order: [0, 1, 2, 3] },
            { lines: ["If you hadn't studied the fossil, you wouldn't have passed.", "I know, I had forgotten how complex it was.", "But you have just proved your knowledge.", "Thank you! I will have mastered the topic by the final exam."], order: [0, 1, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS (40 ITEMS) ---
        3: [
            { q: "Have scientists discovered the genome yet?", options: ["Yes, they had.", "Yes, they have.", "Yes, they will.", "No, they hasn't."], a: "Yes, they have." },
            { q: "Had the species gone extinct before the laws were passed?", options: ["Yes, it has.", "Yes, it had.", "No, it wouldn't.", "Yes, it having."], a: "Yes, it had." },
            { q: "Will we have mapped the DNA by next month?", options: ["Yes, we will.", "Yes, we have.", "Yes, we would.", "No, we don't."], a: "Yes, we will." },
            { q: "Would they have survived if they had adapted?", options: ["Yes, they would.", "Yes, they will.", "No, they hadn't.", "Yes, they have."], a: "Yes, they would." },
            { q: "Has technology changed dramatically lately?", options: ["Yes, it has.", "Yes, it had.", "No, it haven't.", "Yes, it changed."], a: "Yes, it has." },
            { q: "Had you ever seen a fossil before today?", options: ["No, I haven't.", "No, I had never.", "No, I hadn't.", "Yes, I have."], a: "No, I hadn't." },
            { q: "Have we saved every species yet?", options: ["No, we haven't.", "No, we don't.", "Yes, we had.", "No, we hasn't."], a: "No, we haven't." },
            { q: "Had Darwin already published his theory in 1860?", options: ["Yes, he had.", "Yes, he has.", "No, he didn't.", "Yes, he would."], a: "Yes, he had." },
            { q: "Will you have finished the report by tomorrow?", options: ["Yes, I will.", "Yes, I have.", "No, I hadn't.", "Yes, I am."], a: "Yes, I will." },
            { q: "Would the mutation have been harmful if the environment were different?", options: ["Yes, it would.", "Yes, it will.", "No, it hadn't.", "Yes, it has."], a: "Yes, it would." },
            { q: "Has she just learned about traits?", options: ["Yes, she has.", "Yes, she had.", "No, she doesn't.", "Yes, she just."], a: "Yes, she has." },
            { q: "Had the power gone out while she was working?", options: ["Yes, it had.", "Yes, it was.", "No, it hasn't.", "Yes, it did."], a: "Yes, it had." },
            { q: "Have you already visited the Natural History Museum?", options: ["Yes, I have already.", "Yes, I am.", "No, I hadn't.", "Yes, I will."], a: "Yes, I have already." },
            { q: "Had researchers realized the complexity before?", options: ["No, they hadn't.", "No, they hasn't.", "Yes, they have.", "No, they wouldn't."], a: "No, they hadn't." },
            { q: "Will the project have been completed by Friday?", options: ["Yes, it will.", "Yes, it has.", "No, it hadn't.", "Yes, it is."], a: "Yes, it will." },
            { q: "Would he have helped if I had asked?", options: ["Yes, he would.", "Yes, he will.", "No, he hadn't.", "Yes, he would have."], a: "Yes, he would." },
            { q: "Have the traits been studied for years?", options: ["Yes, they have.", "Yes, they had.", "No, they hasn't.", "Yes, they was."], a: "Yes, they have." },
            { q: "Had the dinosaurs ruled for millions of years?", options: ["Yes, they had.", "Yes, they have.", "No, they didn't.", "Yes, they were."], a: "Yes, they had." },
            { q: "Has there been an evolution in technology?", options: ["Yes, there has.", "Yes, there had.", "No, there isn't.", "Yes, there have."], a: "Yes, there has." },
            { q: "Had you already eaten when I called?", options: ["Yes, I had.", "Yes, I have.", "No, I don't.", "Yes, I was."], a: "Yes, I had." },
            { q: "What has Celine just finished?", options: ["Reading about DNA.", "Being an ancestor.", "In the museum.", "Millions of years."], a: "Reading about DNA." },
            { q: "Why would the mammoth have died?", options: ["Couldn't adapt to climate.", "Had a smartphone.", "Yes, it will.", "Through genetic studies."], a: "Couldn't adapt to climate." },
            { q: "What will scientists have discovered by the end of the century?", options: ["Secrets in the code.", "A fossil.", "No, they haven't.", "It is a bird."], a: "Secrets in the code." },
            { q: "How long have dinosaurs been extinct?", options: ["65 million years.", "They rule now.", "Yes, they would.", "By the time we arrived."], a: "65 million years." },
            { q: "What is DNA?", options: ["Molecule with instructions.", "A common primate.", "No, I've never seen one.", "Changed dramatically."], a: "Molecule with instructions." },
            { q: "Why did the power go out?", options: ["Storm at the lab.", "Genome was similar.", "Yes, it had.", "Since 8 AM."], a: "Storm at the lab." },
            { q: "What does natural selection favor?", options: ["Strongest and best adapted.", "Fossils in the rock.", "Millions of years.", "No, not yet."], a: "Strongest and best adapted." },
            { q: "Have you ever seen a DNA model?", options: ["Yes, a detailed one.", "Finished the tour.", "It would survive.", "Ancestors are primates."], a: "Yes, a detailed one." },
            { q: "What is a mutation?", options: ["Change in the code.", "Scientist with microscope.", "Yes, they have.", "By 2050."], a: "Change in the code." },
            { q: "Is biodiversity important?", options: ["Essential for a healthy planet.", "No, it rule.", "I have just learned.", "Developed tools."], a: "Essential for a healthy planet." },
            { q: "What is an ancestor?", options: ["Person one is descended from.", "New species of cat.", "Evolved lately.", "In the Araripe Basin."], a: "Person one is descended from." },
            { q: "How has technology changed?", options: ["Dramatically in recent years.", "It is a fossil record.", "Yes, it would.", "By next week."], a: "Dramatically in recent years." },
            { q: "What are traits?", options: ["Genetically determined characteristics.", "Researchers in Brazil.", "No, they haven't.", "Since 2010."], a: "Genetically determined characteristics." },
            { q: "What happens during extinction?", options: ["Species dies out completely.", "DNA helix is mapped.", "Yes, I had.", "By 1903."], a: "Species dies out completely." },
            { q: "Why is the Araripe Basin important?", options: ["Found 100-million-year-old fossils.", "Famous medical college.", "No, she is studying.", "While lights were out."], a: "Found 100-million-year-old fossils." },
            { q: "Has the genome been sequenced?", options: ["Yes, completed years ago.", "Similar to primates.", "Dinosaurs rule.", "In the cafeteria."], a: "Yes, completed years ago." },
            { q: "What would have happened if they hadn't adapted?", options: ["Gone into extinction earlier.", "Studying lately.", "Believed to be true.", "By the end of semester."], a: "Gone into extinction earlier." },
            { q: "Are we similar to other primates?", options: ["Yes, genetic code is similar.", "No, discovered fossils.", "It has just been studied.", "For millions of years."], a: "Yes, genetic code is similar." },
            { q: "What are you doing in the museum?", options: ["Looking at human ancestry.", "Never seen such a bone.", "Yes, I have.", "By the time he arrives."], a: "Looking at human ancestry." },
            { q: "How long have you been waiting?", options: ["Waiting for twenty minutes.", "It has been raining.", "No, I haven't.", "If only I knew."], a: "Waiting for twenty minutes." }
        ],

        // --- TYPE 4: FIND MEANING (40 ITEMS) ---
        4: [
            { sent: "Genetic **mutations** can lead to new traits.", word: "mutations", options: ["Mutações", "Tradições", "Estabilizações", "Funções"], a: "Mutações", def: "Permanent alterations in the DNA sequence that make up a gene." },
            { sent: "Scientists have been studying the human **genome**.", word: "genome", options: ["Gênero", "Genoma", "Germe", "Geração"], a: "Genoma", def: "The complete set of genetic material present in a cell or organism." },
            { sent: "**Natural selection** ensures the best-adapted survive.", word: "natural selection", options: ["Seleção natural", "Coleção natural", "Proteção natural", "Evolução natural"], a: "Seleção natural", def: "The process whereby organisms better adapted to their environment tend to survive." },
            { sent: "We share a common **ancestor** with other primates.", word: "ancestor", options: ["Antigo parente", "Ancestral comum", "Amigo próximo", "Código genético"], a: "Ancestral comum", def: "An individual from whom two or more different species are descended." },
            { sent: "Many **species** have gone into extinction.", word: "species", options: ["Espécimes", "Espécies", "Espaços", "Especialistas"], a: "Espécies", def: "A group of living organisms consisting of similar individuals capable of exchanging genes." },
            { sent: "The discovery of ancient **fossils** provides evidence.", word: "fossils", options: ["Fósseis", "Rochas", "Ossos", "Ferramentas"], a: "Fósseis", def: "The remains or impression of a prehistoric organism preserved in petrified form." },
            { sent: "High **biodiversity** is essential for a stable ecosystem.", word: "biodiversity", options: ["Biologia", "Biodiversidade", "Biocombustível", "Bioética"], a: "Biodiversidade", def: "The variety of life in the world or in a particular habitat or ecosystem." },
            { sent: "Eye color is a hereditary **trait** passed down.", word: "trait", options: ["Traço / Característica", "Tratado", "Treinamento", "Trabalho"], a: "Traço / Característica", def: "A genetically determined characteristic or quality of an organism." },
            { sent: "The **extinction** of dinosaurs happened millions of years ago.", word: "extinction", options: ["Expansão", "Extinção", "Evolução", "Exaustão"], a: "Extinção", def: "The state or process of a species, family, or larger group being or becoming wiped out." },
            { sent: "Animals develop **adaptations** to survive.", word: "adaptations", options: ["Adoções", "Adaptações", "Atividades", "Adições"], a: "Adaptações", def: "The biological process by which a species becomes fitted to its environment." },
            { sent: "Technology **allows** us to sequence DNA faster.", word: "allows", options: ["Altera", "Permite / Deixa", "Aloca", "Ajuda"], a: "Permite / Deixa", def: "To give the necessary time, opportunity, or power to do something." },
            { sent: "Environmental factors can **affect** survival.", word: "affect", options: ["Afetar", "Efetuar", "Afastar", "Aceitar"], a: "Afetar", def: "To have an influence on someone or something, or to cause a change." },
            { sent: "We must **understand** the impact of humans on nature.", word: "understand", options: ["Entender", "Ultrapassar", "Unificar", "Utilizar"], a: "Entender", def: "To perceive the intended meaning or the nature of something." },
            { sent: "Species continue to **evolve** through selection.", word: "evolve", options: ["Envolver", "Evoluir", "Evidenciar", "Evitar"], a: "Evoluir", def: "To develop gradually, especially from a simple to a more complex form." },
            { sent: "Researchers **modify** crops to make them resistant.", word: "modify", options: ["Modelam", "Modificam", "Modernizam", "Mobilizam"], a: "Modificam", def: "To make partial or minor changes to something." },
            { sent: "The **genetic code** is identical across organisms.", word: "genetic code", options: ["Código genético", "Gasto genético", "Curso genético", "Cargo genético"], a: "Código genético", def: "The biochemical instructions that translate genetic information into proteins." },
            { sent: "**Paleontologists** study life that existed millions of years ago.", word: "paleontologists", options: ["Paleontólogos", "Patologistas", "Arqueólogos", "Geólogos"], a: "Paleontólogos", def: "Scientists who study fossils to understand the history of life on Earth." },
            { sent: "The **helix** structure of DNA was a breakthrough.", word: "helix", options: ["Hélice", "Herança", "História", "Hipótese"], a: "Hélice", def: "A spiral shape like a corkscrew or a staircase." },
            { sent: "We can track our **ancestry** through testing.", word: "ancestry", options: ["Acentuação", "Ancestralidade", "Amizade", "Aptidão"], a: "Ancestralidade", def: "One's family or ethnic descent." },
            { sent: "I have **just** learned about the theory of evolution.", word: "just", options: ["Justamente", "Acabar de", "Jamais", "Já"], a: "Acabar de", def: "Very recently; in the immediate past." },
            { sent: "We have **already** finished the DNA analysis.", word: "already", options: ["Ainda", "Já", "Recentemente", "Logo"], a: "Já", def: "Before now or before a particular time in the past." },
            { sent: "They have not discovered a cure **yet**.", word: "yet", options: ["Já", "Ainda", "Jamais", "Agora"], a: "Ainda", def: "Up to the present time; used in negative sentences." },
            { sent: "Have you **ever** seen a mutation in a cell?", word: "ever", options: ["Sempre", "Alguma vez", "Nunca", "Ultimamente"], a: "Alguma vez", def: "At any time." },
            { sent: "Technology has changed **dramatically**.", word: "dramatically", options: ["Dramaticamente", "Devagar", "Diariamente", "Dificilmente"], a: "Dramaticamente", def: "In a sudden, clear, and often surprising way." },
            { sent: "Evolution has been studied **extensively**.", word: "extensively", options: ["Extensivamente", "Externamente", "Exageradamente", "Exclusivamente"], a: "Extensivamente", def: "In a way that covers a wide area or has great detail." },
            { sent: "The Araripe **Basin** is a famous site for fossils.", word: "basin", options: ["Bacia", "Base", "Banco", "Bosque"], a: "Bacia", def: "A sedimentary basin known for geological deposits." },
            { sent: "Evidence **shows** that species adapt.", word: "shows", options: ["Mostra", "Esconde", "Para", "Pergunta"], a: "Mostra", def: "To allow something to be seen; to provide proof." },
            { sent: "It is **believed** that life began in the oceans.", word: "believed", options: ["Acreditado", "Duvidado", "Falado", "Escrito"], a: "Acreditado", def: "Accepted as true; thought to be a fact." },
            { sent: "We must **protect** the planet's biodiversity.", word: "protect", options: ["Proteger", "Poluir", "Pesquisar", "Praticar"], a: "Proteger", def: "To keep safe from harm or injury." },
            { sent: "**Paleontology** is a fascinating field.", word: "paleontology", options: ["Paleontologia", "Patologia", "Arqueologia", "Geologia"], a: "Paleontologia", def: "The branch of science concerned with fossil animals and plants." },
            { sent: "The process of **adaptation** takes a long time.", word: "adaptation", options: ["Adaptação", "Adoção", "Adição", "Atuação"], a: "Adaptação", def: "Process of change by which an organism becomes better suited to environment." },
            { sent: "Humans and monkeys have a **similar** genetic code.", word: "similar", options: ["Semelhante", "Diferente", "Superior", "Simples"], a: "Semelhante", def: "Having a resemblance in appearance, character, or quantity." },
            { sent: "Genetic **studies** provide information.", word: "studies", options: ["Estudos", "Estádios", "Estados", "Estradas"], a: "Estudos", def: "Detailed investigations or analyses of a subject." },
            { sent: "The **molecule** of DNA carries information.", word: "molecule", options: ["Molécula", "Máquina", "Medida", "Memória"], a: "Molécula", def: "A group of atoms bonded together." },
            { sent: "We are **visiting** the Natural History Museum.", word: "visiting", options: ["Visitando", "Vislumbrando", "Vendendo", "Viajando"], a: "Visitando", def: "Going to see and spend time in a place." },
            { sent: "A **discovery** can happen unexpectedly.", word: "discovery", options: ["Descoberta", "Invenção", "Decisão", "Discussão"], a: "Descoberta", def: "The act of finding or learning something for the first time." },
            { sent: "Life has changed **over time**.", word: "over time", options: ["Ao longo do tempo", "No tempo certo", "Fora de tempo", "Contra o tempo"], a: "Ao longo do tempo", def: "Gradually as a period of time passes." },
            { sent: "Science has **progressed** in recent years.", word: "progressed", options: ["Progredido", "Parado", "Perdido", "Pensado"], a: "Progredido", def: "Moved forward or developed toward a better state." },
            { sent: "We must **act** now to save these species.", word: "act", options: ["Agir", "Aceitar", "Achar", "Amar"], a: "Agir", def: "To take action; to do something." },
            { sent: "Fossils are found in **layers** of rock.", word: "layers", options: ["Camadas", "Lagos", "Lados", "Linhas"], a: "Camadas", def: "A sheet, quantity, or thickness of material covering a surface." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 ITEMS) ---
        5: [
            { sent: "I **have never saw** a DNA model before.", correct: "have never seen" },
            { sent: "Scientists **had already discover** the fossils.", correct: "had already discovered" },
            { sent: "By next year, we **will have map** the genome.", correct: "will have mapped" },
            { sent: "If I had been there, I **would have saw** it.", correct: "would have seen" },
            { sent: "Species **have evolve** over millions of years.", correct: "have evolved" },
            { sent: "Technology **has change** dramatically lately.", correct: "has changed" },
            { sent: "I **have just learn** that traits are adaptations.", correct: "have just learned" },
            { sent: "Many species **have go** into extinction.", correct: "have gone" },
            { sent: "**Has there be** an evolution in our tools?", correct: "Has there been" },
            { sent: "We **have not save** every species yet.", correct: "have not saved" },
            { sent: "It **is believe** that life started in water.", correct: "is believed" },
            { sent: "By the end, we **will have learn** a lot.", correct: "will have learned" },
            { lines: ["Scientists **had already found** the bone."], correct: "had already found" },
            { sent: "Our genetic code **is be** very similar.", correct: "has been" },
            { sent: "If we **hadn't develop** these tools, we wouldn't know.", correct: "hadn't developed" },
            { sent: "Through studies, we **have know** how it works.", correct: "have known" },
            { sent: "Biodiversity **has be** studied extensively lately.", correct: "has been" },
            { sent: "I **have never see** such a detailed molecule.", correct: "have never seen" },
            { sent: "They **would have avoid** extinction if they adapted.", correct: "would have avoided" },
            { sent: "We **will have sequence** the DNA by tomorrow.", correct: "will have sequenced" },
            { sent: "I **haven't receive** my results yet.", correct: "haven't received" },
            { sent: "Darwin **had collect** many samples.", correct: "had collected" },
            { sent: "By 2050, researchers **will have find** a cure.", correct: "will have found" },
            { sent: "If those animals **had not adapt**, they would be extinct.", correct: "had not adapted" },
            { sent: "Traits **have became** part of the code.", correct: "have become" },
            { sent: "I **have already visit** the museum twice.", correct: "have already visited" },
            { sent: "The lecture **had already begin** when we arrived.", correct: "had already begun" },
            { sent: "Science **has progress** in recent years.", correct: "has progressed" },
            { sent: "Humans **have evolve** differently from apes.", correct: "have evolved" },
            { sent: "I **have just hear** the news about the fossil.", correct: "have just heard" },
            { sent: "If he **had study** more, he would have understood.", correct: "had studied" },
            { sent: "By tonight, the computer **will have analyze** the data.", correct: "will have analyzed" },
            { sent: "Mutations **have affect** how animals look.", correct: "have affected" },
            { sent: "They **would have survive** if they moved south.", correct: "would have survived" },
            { sent: "The sun **had already rise** when we started.", correct: "had already risen" },
            { sent: "We **have not find** a solution yet.", correct: "have not found" },
            { sent: "The team **will have finish** the report by Friday.", correct: "will have finished" },
            { sent: "If I **had know** the rules, I would have followed.", correct: "had known" },
            { sent: "Biodiversity **has been study** by experts.", correct: "has been studied" },
            { sent: "I **have never feel** so excited before.", correct: "have never felt" }
        ],



        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Group 1: Question to Answer (General)
            { pairs: [{a: "Have you ever seen a DNA model?", b: "No, I have never seen one so detailed."}, {a: "Had the scientists found the fossil before the storm?", b: "Yes, they had already collected the samples."}, {a: "Will they have mapped the genome by next year?", b: "Yes, they will have finished the analysis by then."}, {a: "Would the species have survived if it had adapted?", b: "It’s possible, it would have avoided extinction."}, {a: "Has biodiversity been studied extensively lately?", b: "Yes, many researchers are investigating it now."}] },
            // Group 2: Research & Background
            { pairs: [{a: "Had Albert read about ancestors before the tour?", b: "No, he had only heard about it on the news."}, {a: "Have you just learned about natural selection?", b: "Yes, I have just finished a book about it."}, {a: "Will we have finished the museum tour by noon?", b: "Yes, we will have seen everything by then."}, {a: "Would you have gone if you had known the price?", b: "No, I would have stayed at the laboratory."}, {a: "Has technology changed dramatically recently?", b: "Yes, it has allowed for much faster research."}] },
            // Group 3: Species & Time
            { pairs: [{a: "Have species evolved much over time?", b: "Yes, they have changed for millions of years."}, {a: "Had the dinosaurs gone extinct before humans appeared?", b: "Yes, they had been dead for millions of years."}, {a: "Will scientists have found a cure by 2050?", b: "They hope they will have developed new medicine."}, {a: "Would the mutation have been helpful in the past?", b: "Yes, it would have allowed them to survive."}, {a: "Have you already visited the Araripe Basin?", b: "No, but I have already planned a trip there."}] },
            // Group 4: Genetics & Evidence
            { pairs: [{a: "Has eye color always been a hereditary trait?", b: "Yes, it has always been part of the genetic code."}, {a: "Had the power gone out while you were working?", b: "Yes, I had not finished the DNA analysis yet."}, {a: "Will the team have analyzed the data by tonight?", b: "Yes, the software will have completed it."}, {a: "Would the dodo have survived without predators?", b: "Yes, it would have lived longer on the island."}, {a: "Have researchers found many fossils in Brazil?", b: "Yes, they have studied that region for decades."}] },
            // Group 5: Adaptation & Evolution
            { pairs: [{a: "Have you ever wondered about common ancestors?", b: "Yes, I have always found it fascinating."}, {a: "Had they sequenced the genome before 2000?", b: "No, they had not developed the tools yet."}, {a: "Will humanity have evolved in another thousand years?", b: "Perhaps we will have developed new traits."}, {a: "Would you have studied genetics if you were a scientist?", b: "Yes, I would have explored the DNA structure."}, {a: "Has the climate affected species adaptation?", b: "Yes, it has forced many species to change."}] },
            // Group 6: Recent Breakthroughs
            { pairs: [{a: "Have you just heard the news about the breakthrough?", b: "Yes, a new species has just been discovered."}, {a: "Had the lecture begun when you arrived?", b: "Yes, it had already started ten minutes before."}, {a: "Will the species have recovered by next bimester?", b: "We hope they will have increased in number."}, {a: "Would the bird have flown if its wing were okay?", b: "Yes, it would have escaped the predator easily."}, {a: "Has natural selection been proven by evidence?", b: "Yes, it has been studied by experts since Darwin."}] },
            // Group 7: Environmental Impact
            { pairs: [{a: "Have scientists modified crops lately?", b: "Yes, they have made them more resistant."}, {a: "Had the mammoth moved south before the ice age?", b: "No, it had stayed in the cold North."}, {a: "Will you have mastered the perfect tenses by Friday?", b: "Yes, I will have finished all the exercises."}, {a: "Would the environment have changed if we hadn't acted?", b: "Yes, it would have become much more polluted."}, {a: "Has there been an evolution in medical tools?", b: "Yes, technology has progressed dramatically."}] },
            // Group 8: Fossil Records
            { pairs: [{a: "Have you ever seen a trilobite fossil?", b: "No, I have never seen one in real life."}, {a: "Had Darwin collected samples before his voyage ended?", b: "Yes, he had found many species in the Galapagos."}, {a: "Will they have protected the rainforest by 2030?", b: "They will have implemented new laws by then."}, {a: "Would the experiment have failed without the data?", b: "Yes, it would have been a total failure."}, {a: "Has DNA research affected our medicine?", b: "Yes, it has improved our ability to cure diseases."}] },
            // Group 9: Climate & Discovery
            { pairs: [{a: "Have you already received the genetic results?", b: "No, the lab hasn't sent them yet."}, {a: "Had the species adapted to the humid climate?", b: "Yes, otherwise they would have gone extinct."}, {a: "Will the sun have risen by the time we start?", b: "Yes, it will have been daylight for an hour."}, {a: "Would he have seen the mutation if he used the lens?", b: "Yes, he would have noticed the change in the cell."}, {a: "Has the Araripe Basin been explored recently?", b: "Yes, paleontologists have been working there."}] },
            // Group 10: Complexity & Habitats
            { pairs: [{a: "Have you ever studied the helix structure?", b: "Yes, I have seen models in the science class."}, {a: "Had the error been discovered before the launch?", b: "No, they only noticed it after the crash."}, {a: "Will the robot have vacuumed the floor by 5 PM?", b: "Yes, it will have finished the whole house."}, {a: "Would you have understood if I hadn't explained?", b: "No, I would have been very confused."}, {a: "Has biodiversity diminished in recent years?", b: "Yes, unfortunately, many habitats were destroyed."}] },
            
            // Group 11: Sentence Completion (Halves)
            { pairs: [{a: "If we hadn't developed these tools...", b: "...we wouldn't have understood mutations."}, {a: "By the time we finish this tour...", b: "...we will have learned so much."}, {a: "Scientists had already discovered the fossils...", b: "...before they could sequence the genome."}, {a: "I have just learned that some traits...", b: "...are actually adaptations to the environment."}, {a: "Technology has changed dramatically...", b: "...in the last few decades."}] },
            // Group 12: Conditional & Beliefs
            { pairs: [{a: "It is believed that biodiversity...", b: "...is essential for a healthy planet."}, {a: "Our understanding of evolution...", b: "...has been studied extensively lately."}, {a: "By next year, the researchers...", b: "...will have mapped the entire genetic code."}, {a: "If the mammoth had moved south...", b: "...it would have avoided extinction."}, {a: "Scientists have studied DNA...", b: "...to investigate our common ancestors."}] },
            // Group 13: Extinction & Evidence
            { pairs: [{a: "Many species have gone into extinction...", b: "...because they couldn't adapt fast enough."}, {a: "Evidence shows that our genetic code...", b: "...is very similar to other primates."}, {a: "Before the rain started yesterday...", b: "...they had already found the prehistoric bone."}, {a: "If I had been in the museum...", b: "...I would have seen the giant DNA model."}, {a: "We have not saved every...", b: "...endangered species in the world yet."}] },
            // Group 14: Survival Logic
            { pairs: [{a: "Through genetic studies, we now know...", b: "...how the process of natural selection works."}, {a: "By the end of the century, scientists...", b: "...will have discovered even more secrets."}, {a: "If those ancient animals hadn't adapted...", b: "...they would have died out much earlier."}, {a: "Mutations can affect...", b: "...how a specific organism looks and behaves."}, {a: "Natural selection favors...", b: "...the individuals that are strongest and best adapted."}] },
            // Group 15: Laboratory Context
            { pairs: [{a: "Since the project began in 2010...", b: "...the scientists have been modifying the data."}, {a: "If the lab had provided better instruments...", b: "...we would have finished the analysis already."}, {a: "By the time the professor arrived...", b: "...the students had already begun the experiment."}, {a: "Darwin had collected many species...", b: "...before he published his famous theory."}, {a: "We will have completed our research...", b: "...before the next international conference."}] },
            // Group 16: Evolution Dynamics
            { pairs: [{a: "Because the climate changed too fast...", b: "...the species failed to adapt and died."}, {a: "I have never seen such a large...", b: "...fossilized bone in my entire life."}, {a: "If they hadn't protected the forest...", b: "...many rare species would have disappeared."}, {a: "The traits of modern animals...", b: "...evolved from their common ancestors."}, {a: "By 2050, researchers...", b: "...will have found a cure for genetic diseases."}] },
            // Group 17: Scientific Discovery
            { pairs: [{a: "Scientists develop new theories...", b: "...every year based on new evidence."}, {a: "If you press the button...", b: "...the robot will have started its task."}, {a: "Had you already visited Brazil...", b: "...before you saw the Araripe fossils?"}, {a: "We have been exploring the cave...", b: "...for several years without finding a link."}, {a: "Technology will have progressed...", b: "...significantly by the end of the decade."}] },
            // Group 18: Hypotheses
            { pairs: [{a: "It is believed that life...", b: "...started in the water millions of years ago."}, {a: "If only I had known...", b: "...about the mutation before the test!"}, {a: "By the time we grow up...", b: "...AI models will have changed the world."}, {a: "The system would have crashed...", b: "...if they hadn't updated the software."}, {a: "I have just heard that...", b: "...a new species was discovered in the ocean."}] },
            // Group 19: Past Perfect Links
            { pairs: [{a: "Humans and chimpanzees evolved...", b: "...differently from a common ancestor."}, {a: "If we invest in robotics...", b: "...production will have increased by next year."}, {a: "Had they already eaten dinner...", b: "...by the time you called them?"}, {a: "We will have sequenced the DNA...", b: "...by the end of the bimester."}, {a: "The local flora has been...", b: "...disappearing due to the warm climate."}] },
            // Group 20: Completion Final
            { pairs: [{a: "If he had studied more...", b: "...he would have understood natural selection."}, {a: "By the end of the tour...", b: "...we will have seen the human ancestry display."}, {a: "Had you seen the model...", b: "...before you entered the main hall?"}, {a: "We have not yet found...", b: "...a solution to the extinction problem."}, {a: "The fossil has been studied...", b: "...extensively by the team of experts."}] },

            // Group 21: Translation (English to Port)
            { pairs: [{a: "I have never seen a DNA molecule.", b: "Eu nunca vi uma molécula de DNA."}, {a: "They had already discovered the fossil.", b: "Eles já tinham descoberto o fóssil."}, {a: "We will have learned about ancestors.", b: "Nós teremos aprendido sobre os ancestrais."}, {a: "I would have understood the impact.", b: "Eu teria entendido o impacto."}, {a: "Has there been an evolution?", b: "Houve uma evolução?"}] },
            // Group 22: Translation (B1+/B2 Sentences)
            { pairs: [{a: "Species have evolved over time.", b: "As espécies evoluíram ao longo do tempo."}, {a: "The climate has changed dramatically.", b: "O clima mudou drasticamente."}, {a: "Technology will have improved by then.", b: "A tecnologia terá melhorado até lá."}, {a: "If only I had known the truth.", b: "Se ao menos eu soubesse a verdade."}, {a: "We have not saved them yet.", b: "Nós ainda não os salvamos."}] },
            // Group 23: Concepts Translation
            { pairs: [{a: "Natural selection and biodiversity.", b: "Seleção natural e biodiversidade."}, {a: "Common ancestor and traits.", b: "Ancestral comum e traços."}, {a: "Genetic code and mutations.", b: "Código genético e mutações."}, {a: "Adaptation and extinction.", b: "Adaptação e extinção."}, {a: "Fossils and ancestry.", b: "Fósseis e ancestralidade."}] },
            // Group 24: Complex Translation
            { pairs: [{a: "Scientists have studied the genome.", b: "Cientistas estudaram o genoma."}, {a: "The team had already found the link.", b: "A equipe já tinha encontrado o elo."}, {a: "We will have mapped the cells soon.", b: "Nós teremos mapeado as células em breve."}, {a: "Would they have survived the winter?", b: "Eles teriam sobrevivido ao inverno?"}, {a: "I have just learned about genes.", b: "Acabei de aprender sobre genes."}] },
            // Group 25: Adverbs Translation
            { pairs: [{a: "Already and yet.", b: "Já e ainda."}, {a: "Just and ever.", b: "Acabar de e alguma vez."}, {a: "Since and for.", b: "Desde e por/durante."}, {a: "Never and always.", b: "Nunca e sempre."}, {a: "Lately and recently.", b: "Ultimamente e recentemente."}] },
            // Group 26: Beliefs Translation
            { pairs: [{a: "It is believed that life started here.", b: "Acredita-se que a vida começou aqui."}, {a: "Evidence shows the similarity.", b: "As evidências mostram a semelhança."}, {a: "The species went into extinction.", b: "A espécie entrou em extinção."}, {a: "They have been working all day.", b: "Eles têm trabalhado o dia todo."}, {a: "By the time we arrive at the lab.", b: "No momento em que chegarmos ao laboratório."}] },
            // Group 27: Verb Pairs Translation
            { pairs: [{a: "To modify and to change.", b: "Modificar e mudar."}, {a: "To allow and to permit.", b: "Deixar e permitir."}, {a: "To develop and to evolve.", b: "Desenvolver e evoluir."}, {a: "To discover and to find.", b: "Descobrir e encontrar."}, {a: "To understand and to perceive.", b: "Entender e perceber."}] },
            // Group 28: Logic Phrases Translation
            { pairs: [{a: "The dodo was not well adapted.", b: "O dodô não estava bem adaptado."}, {a: "Darwin’s theory is very famous.", b: "A teoria de Darwin é muito famosa."}, {a: "We share DNA with other primates.", b: "Compartilhamos DNA com outros primatas."}, {a: "The Araripe Basin has many fossils.", b: "A Bacia do Araripe tem muitos fósseis."}, {a: "Biodiversity is vital for the planet.", b: "A biodiversidade é vital para o planeta."}] },
            // Group 29: Timeline Translation
            { pairs: [{a: "By next year.", b: "Até o ano que vem."}, {a: "Before the rain started.", b: "Antes de a chuva começar."}, {a: "Millions of years ago.", b: "Milhões de anos atrás."}, {a: "In recent years.", b: "Nos últimos anos."}, {a: "Lately.", b: "Ultimamente."}] },
            // Group 30: Conditional Translation
            { pairs: [{a: "He would have seen the mutation.", b: "Ele teria visto a mutação."}, {a: "She has already visited the museum.", b: "Ela já visitou o museu."}, {a: "They will have finished the tour.", b: "Eles terão terminado o passeio."}, {a: "I have never felt so curious.", b: "Eu nunca me senti tão curioso."}, {a: "Had you read the article?", b: "Você tinha lido o artigo?"}] },

            // Group 31: Genetics (Word to Definition)
            { pairs: [{a: "DNA", b: "The molecule that carries genetic instructions."}, {a: "Gene", b: "A unit of heredity transferred from parent to child."}, {a: "Genome", b: "The complete set of genetic material in an organism."}, {a: "Mutation", b: "A permanent change in the DNA sequence."}, {a: "Genetic code", b: "The set of rules used to translate genetic info."}] },
            // Group 32: Evolution (Definition)
            { pairs: [{a: "Evolution", b: "The process of gradual development of organisms."}, {a: "Natural selection", b: "Process where best-adapted individuals survive."}, {a: "Common ancestor", b: "An individual from which different species descended."}, {a: "Ancestry", b: "Family or ethnic descent from the past."}, {a: "Species", b: "A group of similar organisms that can exchange genes."}] },
            // Group 33: Paleontology (Definition)
            { pairs: [{a: "Fossil", b: "Preserved remains of a prehistoric organism."}, {a: "Araripe Basin", b: "A famous site for fossils in Northeast Brazil."}, {a: "Extinction", b: "The moment when a whole species dies out."}, {a: "Biodiversity", b: "The variety of life found in an ecosystem."}, {a: "Adaptation", b: "A trait that helps an organism survive in its environment."}] },
            // Group 34: Perfect Tenses (Definition)
            { pairs: [{a: "Present Perfect", b: "Action starting in the past continuing to now."}, {a: "Past Perfect", b: "Action completed before another past action."}, {a: "Future Perfect", b: "Action that will be completed by a future point."}, {a: "Conditional Perfect", b: "Hypothetical past situations (would have)."}, {a: "Past Participle", b: "The verb form used with 'have', 'has', or 'had'."}] },
            // Group 35: Scientific Verbs (Definition)
            { pairs: [{a: "Study", b: "To devote time to gain knowledge on a subject."}, {a: "Affect", b: "To have an influence on or cause a change in."}, {a: "Allow", b: "To give the opportunity or permission for."}, {a: "Modify", b: "To make partial or minor changes to something."}, {a: "Evolve", b: "To develop gradually from simple to complex."}] },
            // Group 36: Time Adverbs (Definition)
            { pairs: [{a: "Already", b: "Used when something happened sooner than expected."}, {a: "Yet", b: "Used for actions expected up to the current moment."}, {a: "Just", b: "Used to describe an action finished very recently."}, {a: "Ever", b: "Used to ask about experiences at any point in life."}, {a: "Never", b: "Used to show that an action has not happened at any time."}] },
            // Group 37: Advanced Adverbs (Definition)
            { pairs: [{a: "Dramatically", b: "In a sudden, clear, and surprising way."}, {a: "Extensively", b: "In a way that covers a wide area or great detail."}, {a: "Lately", b: "In the period of time just before now."}, {a: "Recently", b: "Not long ago."}, {a: "Progressively", b: "Happening step by step over a period of time."}] },
            // Group 38: Concepts (Definition)
            { pairs: [{a: "Primates", b: "A group of mammals including monkeys and humans."}, {a: "Human ancestry", b: "The lineage of human beings through time."}, {a: "Traits", b: "Genetically determined characteristics."}, {a: "Hereditary", b: "Passed from parents to children through genes."}, {a: "Link", b: "A connection between two different things."}] },
            // Group 39: Grammar Markers (Definition)
            { pairs: [{a: "By the time", b: "Used to indicate a deadline or time limit."}, {a: "If", b: "Used to introduce a condition."}, {a: "Since", b: "Used to show the starting point of an action."}, {a: "For", b: "Used to show the duration of an action."}, {a: "Would", b: "Auxiliary used for hypothetical results."}] },
            // Group 40: Scientific Process (Definition)
            { pairs: [{a: "Discovery", b: "Finding or learning something for the first time."}, {a: "Experiment", b: "A scientific procedure to test a hypothesis."}, {a: "Evidence", b: "Facts or info indicating whether a belief is valid."}, {a: "Analysis", b: "Detailed examination of something complex."}, {a: "Theory", b: "A system of ideas intended to explain something."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 ITEMS) ---
        7: [
            { q: "Have scientists discovered the entire human genome?", options: ["Yes, they have.", "Yes, they will.", "No, they hasn't."], a: "Yes, they have." },
            { q: "Had the species gone extinct before the laws were passed?", options: ["Yes, it had.", "Yes, it has.", "No, it wouldn't."], a: "Yes, it had." },
            { q: "Will researchers have mapped the DNA by next year?", options: ["Yes, they will.", "Yes, they would.", "No, they don't."], a: "Yes, they will." },
            { q: "Would the mammoth have survived if it moved south?", options: ["Yes, it would.", "No, it hadn't.", "Yes, they will."], a: "Yes, it would." },
            { q: "Has technology changed dramatically in your field?", options: ["Yes, it has.", "Yes, it had.", "No, it haven't."], a: "Yes, it has." },
            { q: "Had you ever seen a DNA model before today?", options: ["No, I hadn't.", "No, I had never.", "Yes, I have."], a: "No, I hadn't." },
            { q: "Have we protected every endangered species yet?", options: ["No, we haven't.", "No, we don't.", "Yes, we had."], a: "No, we haven't." },
            { q: "Had Darwin already published his theory in 1860?", options: ["Yes, he had.", "Yes, he has.", "No, he didn't."], a: "Yes, he had." },
            { q: "Will you have finished the DNA analysis by tomorrow?", options: ["Yes, I will.", "Yes, I have.", "No, I hadn't."], a: "Yes, I will." },
            { q: "Would a mutation be harmful in a different environment?", options: ["Yes, it would.", "Yes, it will.", "No, it hadn't."], a: "Yes, it would." },
            { q: "What has Celine just finished reading?", options: ["A detailed book about DNA.", "A common ancestor.", "A million years."], a: "A detailed book about DNA." },
            { q: "Why would the mammoth have died out?", options: ["Because it couldn't adapt to climate change.", "Because it had a smartphone.", "Yes, it will."], a: "Because it couldn't adapt to climate change." },
            { q: "What will scientists have discovered by the end of the century?", options: ["Secrets in the genetic code.", "A new fossil.", "No, they haven't."], a: "Secrets in the genetic code." },
            { q: "How long have dinosaurs been extinct?", options: ["For about 65 million years.", "They rule the world.", "By the time we arrive."], a: "For about 65 million years." },
            { q: "What is DNA according to the text?", options: ["Molecule carrying genetic instructions.", "A common primate.", "It changed dramatically."], a: "Molecule carrying genetic instructions." },
            { q: "Why did the laboratory power go out?", options: ["Because there was a storm.", "Because the genome was similar.", "Yes, it had."], a: "Because there was a storm." },
            { q: "What does natural selection favor?", options: ["Strongest and best adapted individuals.", "Fossils in the rock.", "No, not yet."], a: "Strongest and best adapted individuals." },
            { q: "Have you ever seen a real prehistoric fossil?", options: ["Yes, I have seen a very detailed one.", "Ancestors are primates.", "I will have finished."], a: "Yes, I have seen a very detailed one." },
            { q: "What is a mutation in science?", options: ["A change in the genetic code.", "A scientist with a microscope.", "Yes, they have."], a: "A change in the genetic code." },
            { q: "Is biodiversity important for our future?", options: ["Yes, it is essential for a healthy planet.", "No, it rule for millions.", "I have learned."], a: "Yes, it is essential for a healthy planet." },
            { q: "What is an ancestor?", options: ["A person from whom one is descended.", "A new species of cat.", "It has evolved."], a: "A person from whom one is descended." },
            { q: "How has technology changed lately?", options: ["It has changed dramatically in recent years.", "It is a fossil record.", "Yes, it would."], a: "It has changed dramatically in recent years." },
            { q: "What are genetically determined characteristics called?", options: ["Hereditary traits.", "Researchers in Brazil.", "Since 2010."], a: "Hereditary traits." },
            { q: "What happens during a species extinction?", options: ["The whole species dies out completely.", "The helix is mapped.", "Yes, I had."], a: "The whole species dies out completely." },
            { q: "Why is the Araripe Basin important?", options: ["Because of its 100-million-year-old fossils.", "Because it's a medical college.", "No, she is studying."], a: "Because of its 100-million-year-old fossils." },
            { q: "Has the human genome been fully sequenced?", options: ["Yes, it was completed years ago.", "It is similar to primates.", "Dinosaurs rule."], a: "Yes, it was completed years ago." },
            { q: "What would have happened if they hadn't adapted?", options: ["They would have gone extinct earlier.", "Believed to be true.", "They were studying."], a: "They would have gone extinct earlier." },
            { q: "Are humans similar to other primates?", options: ["Yes, evidence shows our code is similar.", "No, we discovered fossils.", "Studied for years."], a: "Yes, evidence shows our code is similar." },
            { q: "What were you doing at the museum display?", options: ["Looking at a display about human ancestry.", "Yes, I have.", "By the time he arrives."], a: "Looking at a display about human ancestry." },
            { q: "How long have you been waiting for the results?", options: ["I have been waiting for twenty minutes.", "It has been raining.", "No, I haven't."], a: "I have been waiting for twenty minutes." },
            { q: "Had the ice melted before the migration?", options: ["Yes, it had melted already.", "Yes, it has.", "No, they wouldn't."], a: "Yes, it had melted already." },
            { q: "Will the project have finished by noon?", options: ["Yes, it will have finished by then.", "Yes, it has.", "No, it didn't."], a: "Yes, it will have finished by then." },
            { q: "Had researchers realized the complexity earlier?", options: ["No, they hadn't realized it yet.", "Yes, they have.", "No, they wouldn't."], a: "No, they hadn't realized it yet." },
            { q: "Has the environment changed much?", options: ["Yes, it has changed dramatically.", "Yes, it had.", "No, it haven't."], a: "Yes, it has changed dramatically." },
            { q: "Had they sequenced the genome before 2000?", options: ["No, they had not developed the tools yet.", "Yes, they have.", "Perhaps."], a: "No, they had not developed the tools yet." },
            { q: "Will humanity have evolved in a thousand years?", options: ["Perhaps we will have developed new traits.", "Yes, they have.", "No, we don't."], a: "Perhaps we will have developed new traits." },
            { q: "Have you just heard the breakthrough news?", options: ["Yes, a new species has just been discovered.", "Yes, it had started.", "No, they won't."], a: "Yes, a new species has just been discovered." },
            { q: "Had the lecture begun when you arrived?", options: ["Yes, it had already started ten minutes before.", "No, it hasn't.", "Yes, it will."], a: "Yes, it had already started ten minutes before." },
            { q: "Will the species have recovered by next bimester?", options: ["We hope they will have increased in number.", "No, they haven't.", "Yes, they would."], a: "We hope they will have increased in number." },
            { q: "Has natural selection been proven by evidence?", options: ["Yes, it has been studied since Darwin.", "Yes, it had.", "No, it won't."], a: "Yes, it has been studied since Darwin." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 ITEMS) ---
        8: [
            { sent: "My sister is studying medicine at a famous **factory** downtown.", wrong: "factory", options: ["college", "fabric", "lecture", "prejudice"], a: "college" },
            { sent: "I bought some beautiful **college** to make a new dress.", wrong: "college", options: ["fabric", "factory", "lecture", "educated"], a: "fabric" },
            { sent: "The professor gave a very long **reading** about genetics.", wrong: "reading", options: ["lecture", "fabric", "college", "breakthrough"], a: "lecture" },
            { sent: "He is a very **polite** person because he has read many books.", wrong: "polite", options: ["educated", "fabric", "lecture", "breakthrough"], a: "educated" },
            { sent: "We must fight against **pretext** in our school.", wrong: "pretext", options: ["prejudice", "innovation", "prototype", "blueprint"], a: "prejudice" },
            { sent: "It's **rocket science**; you can learn this app in two minutes!", wrong: "rocket science", options: ["not rocket science", "reinventing the wheel", "ahead of its time", "a lightbulb moment"], a: "not rocket science" },
            { sent: "I was **reinventing the wheel** when I suddenly found the solution.", wrong: "reinventing the wheel", options: ["having a lightbulb moment", "studying a lecture", "drawing a fabric", "losing the college"], a: "having a lightbulb moment" },
            { sent: "The architect showed us the **code** for the new school building.", wrong: "code", options: ["blueprint", "fabric", "lecture", "airplane"], a: "blueprint" },
            { sent: "I **use to** watch cartoons when I was a child.", wrong: "use to", options: ["used to", "was using", "using to", "am used to"], a: "used to" },
            { sent: "The **universe** of the computer tells the machine how to work.", wrong: "universe", options: ["software/code", "fabric", "college", "storm"], a: "software/code" },
            { sent: "Albert was **experimenting** the car while Celine took photos.", wrong: "experimenting", options: ["driving", "innovating", "telling", "knowing"], a: "driving" },
            { sent: "Innovation requires thinking **inside the box** to find new ideas.", wrong: "inside the box", options: ["outside the box", "through the box", "under the box", "around the box"], a: "outside the box" },
            { sent: "The Wright Brothers **builded** the first airplane.", wrong: "builded", options: ["built", "flew", "discovered", "sparked"], a: "built" },
            { sent: "I was **listening** a book when the lights went out.", wrong: "listening", options: ["reading", "speaking", "hearing", "telling"], a: "reading" },
            { sent: "He is a very successful **prototype** of the new software.", wrong: "prototype", options: ["creator/inventor", "breakthrough", "blueprint", "fabric"], a: "creator/inventor" },
            { sent: "My mom **teached** herself how to code.", wrong: "teached", options: ["taught", "thought", "caught", "bought"], a: "taught" },
            { sent: "We need more **fabric** to perform scientific tests in the lab.", wrong: "fabric", options: ["equipment/tools", "college", "lecture", "prejudice"], a: "equipment/tools" },
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
            { sent: "It's **not rocket science**; it's extremely difficult to solve.", wrong: "not rocket science", options: ["rocket science", "a lightbulb moment", "reinventing the wheel", "a breakthrough"], a: "rocket science" },
            { sent: "They **was studying** anatomy when the bell rang.", wrong: "was studying", options: ["were studying", "been studying", "did study", "are studying"], a: "were studying" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 ITEMS) ---
        9: [
            { audio: "Have scientists discovered the genome yet?", options: ["Yes, they have.", "Yes, they had.", "No, they hasn't.", "It is a fossil."], a: "Yes, they have." },
            { audio: "Had the species gone extinct before the laws were passed?", options: ["Yes, it had.", "Yes, it has.", "No, it wouldn't.", "Yes, it is."], a: "Yes, it had." },
            { audio: "Will we have mapped the DNA by next month?", options: ["Yes, we will.", "Yes, we have.", "No, we don't.", "It is huge."], a: "Yes, we will." },
            { audio: "Would they have survived if they had adapted?", options: ["Yes, they would.", "Yes, they will.", "No, they hadn't.", "Yes, they have."], a: "Yes, they would." },
            { audio: "Has technology changed dramatically lately?", options: ["Yes, it has.", "Yes, it had.", "No, it haven't.", "It changed."], a: "Yes, it has." },
            { audio: "Had you ever seen a fossil before today?", options: ["No, I hadn't.", "No, I had never.", "Yes, I have.", "It is old."], a: "No, I hadn't." },
            { audio: "Have we saved every species yet?", options: ["No, we haven't.", "No, we don't.", "Yes, we had.", "It is sad."], a: "No, we haven't." },
            { audio: "Had Darwin already published his theory in 1860?", options: ["Yes, he had.", "Yes, he has.", "No, he didn't.", "Yes, he would."], a: "Yes, he had." },
            { audio: "Will you have finished the report by tomorrow?", options: ["Yes, I will.", "Yes, I have.", "No, I hadn't.", "Yes, I am."], a: "Yes, I will." },
            { audio: "Would the mutation have been harmful in a different environment?", options: ["Yes, it would.", "Yes, it will.", "No, it hadn't.", "Yes, it has."], a: "Yes, it would." },
            { audio: "Has she just learned about traits?", options: ["Yes, she has.", "Yes, she had.", "No, she doesn't.", "She is smart."], a: "Yes, she has." },
            { audio: "Had the power gone out while she was working?", options: ["Yes, it had.", "Yes, it was.", "No, it hasn't.", "It went out."], a: "Yes, it had." },
            { audio: "Have you already visited the Natural History Museum?", options: ["Yes, I have already.", "Yes, I am.", "No, I hadn't.", "It is big."], a: "Yes, I have already." },
            { audio: "Had researchers realized the complexity before?", options: ["No, they hadn't.", "No, they hasn't.", "Yes, they have.", "It is complex."], a: "No, they hadn't." },
            { audio: "Will the project have been completed by Friday?", options: ["Yes, it will.", "Yes, it has.", "No, it hadn't.", "It is done."], a: "Yes, it will." },
            { audio: "Would he have helped if I had asked?", options: ["Yes, he would.", "Yes, he will.", "No, he hadn't.", "He helped."], a: "Yes, he would." },
            { audio: "Have the traits been studied for years?", options: ["Yes, they have.", "Yes, they had.", "No, they hasn't.", "They study."], a: "Yes, they have." },
            { audio: "Had the dinosaurs ruled for millions of years?", options: ["Yes, they had.", "Yes, they have.", "No, they didn't.", "They are big."], a: "Yes, they had." },
            { audio: "Has there been an evolution in technology?", options: ["Yes, there has.", "Yes, there had.", "No, there isn't.", "It evolved."], a: "Yes, there has." },
            { audio: "Had you already eaten when I called?", options: ["Yes, I had.", "Yes, I have.", "No, I don't.", "I ate."], a: "Yes, I had." },
            { audio: "What has Celine just finished?", options: ["Reading about DNA.", "A common ancestor.", "In the museum.", "A fossil."], a: "Reading about DNA." },
            { audio: "Why would the mammoth have died?", options: ["Couldn't adapt to climate.", "Had a smartphone.", "Yes, it will.", "By 2050."], a: "Couldn't adapt to climate." },
            { audio: "What will scientists have discovered by 2100?", options: ["Secrets in the code.", "A fossil.", "No, they haven't.", "A bird."], a: "Secrets in the code." },
            { audio: "How long have dinosaurs been extinct?", options: ["65 million years.", "They rule now.", "Yes, they would.", "Tomorrow."], a: "65 million years." },
            { audio: "What is DNA?", options: ["Molecule with instructions.", "A common primate.", "No, I've never seen one.", "A bone."], a: "Molecule with instructions." },
            { audio: "Why did the power go out?", options: ["Storm at the lab.", "Genome was similar.", "Yes, it had.", "The mutation."], a: "Storm at the lab." },
            { audio: "What does natural selection favor?", options: ["Strongest and best adapted.", "Fossils in the rock.", "Millions of years.", "Weakest."], a: "Strongest and best adapted." },
            { audio: "Have you ever seen a DNA model?", options: ["Yes, a detailed one.", "Finished the tour.", "It would survive.", "No, I didn't."], a: "Yes, a detailed one." },
            { audio: "What is a mutation?", options: ["Change in the code.", "Scientist with microscope.", "Yes, they have.", "A fossil."], a: "Change in the code." },
            { audio: "Is biodiversity important?", options: ["Essential for a healthy planet.", "No, it rule.", "I have just learned.", "It is bad."], a: "Essential for a healthy planet." },
            { audio: "What is an ancestor?", options: ["Person one is descended from.", "New species of cat.", "Evolved lately.", "A rock."], a: "Person one is descended from." },
            { audio: "How has technology changed?", options: ["Dramatically in recent years.", "It is a fossil record.", "Yes, it would.", "Slowly."], a: "Dramatically in recent years." },
            { audio: "What are traits?", options: ["Genetically determined characteristics.", "Researchers in Brazil.", "No, they haven't.", "Bones."], a: "Genetically determined characteristics." },
            { audio: "What happens during extinction?", options: ["Species dies out completely.", "DNA helix is mapped.", "Yes, I had.", "It adapts."], a: "Species dies out completely." },
            { audio: "Why is the Araripe Basin important?", options: ["Found 100-million-year-old fossils.", "Famous medical college.", "No, she is studying.", "It is new."], a: "Found 100-million-year-old fossils." },
            { audio: "Has the genome been sequenced?", options: ["Yes, completed years ago.", "Similar to primates.", "Dinosaurs rule.", "No, never."], a: "Yes, completed years ago." },
            { audio: "What would have happened if they hadn't adapted?", options: ["Gone into extinction earlier.", "Studying lately.", "Believed to be true.", "Nothing."], a: "Gone into extinction earlier." },
            { audio: "Are we similar to other primates?", options: ["Yes, genetic code is similar.", "No, discovered fossils.", "It has just been studied.", "Maybe."], a: "Yes, genetic code is similar." },
            { audio: "What are you doing in the museum?", options: ["Looking at human ancestry.", "Never seen such a bone.", "Yes, I have.", "Eating."], a: "Looking at human ancestry." },
            { audio: "How long have you been waiting?", options: ["Waiting for twenty minutes.", "It has been raining.", "No, I haven't.", "Tomorrow."], a: "Waiting for twenty minutes." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 ITEMS) ---
        10: [
            { audio: "I have never seen such a detailed DNA model.", sent: "I have ___ seen such a detailed DNA ___.", blanks: ["never", "model"] },
            { audio: "It's crazy how much species have evolved over time.", sent: "It's crazy how much ___ have ___ over time.", blanks: ["species", "evolved"] },
            { audio: "Scientists had already discovered these fossils.", sent: "Scientists had ___ discovered these ___.", blanks: ["already", "fossils"] },
            { audio: "By the time we finish we will have learned so much.", sent: "By the time we ___, we will have ___ so much.", blanks: ["finish", "learned"] },
            { audio: "If we hadn't developed tools we wouldn't have understood.", sent: "If we hadn't ___ tools we wouldn't have ___.", blanks: ["developed", "understood"] },
            { audio: "I have just learned about natural selection.", sent: "I have ___ learned about natural ___.", blanks: ["just", "selection"] },
            { audio: "Many species have gone into extinction.", sent: "Many species have ___ into ___.", blanks: ["gone", "extinction"] },
            { audio: "Has there been an evolution in how we protect?", sent: "Has there ___ an evolution in how we ___?", blanks: ["been", "protect"] },
            { audio: "Technology has changed dramatically in recent years.", sent: "Technology has ___ dramatically in recent ___.", blanks: ["changed", "years"] },
            { audio: "They had already sequenced the genome.", sent: "They had ___ sequenced the ___.", blanks: ["already", "genome"] },
            { audio: "Evidence shows genetic similarity to other primates.", sent: "Evidence shows ___ similarity to other ___.", blanks: ["genetic", "primates"] },
            { audio: "Life has changed for millions of years.", sent: "Life has ___ for millions of ___.", blanks: ["changed", "years"] },
            { audio: "Biodiversity has been studied extensively lately.", sent: "Biodiversity has been ___ extensively ___.", blanks: ["studied", "lately"] },
            { audio: "Traits are actually adaptations to the environment.", sent: "Traits are actually ___ to the ___.", blanks: ["adaptations", "environment"] },
            { audio: "Would they have survived if they had moved?", sent: "Would they have ___ if they had ___?", blanks: ["survived", "moved"] },
            { audio: "We have not saved every species yet.", sent: "We have not ___ every species ___.", blanks: ["saved", "yet"] },
            { audio: "It is believed life started in water.", sent: "It is ___ life started in ___.", blanks: ["believed", "water"] },
            { audio: "By next year we will have mapped the code.", sent: "By next ___ we will have mapped the ___.", blanks: ["year", "code"] },
            { audio: "If I had been there I would have seen a mutation.", sent: "If I had been there I would have ___ a ___.", blanks: ["seen", "mutation"] },
            { audio: "All life has evolved from a common ancestor.", sent: "All life has ___ from a common ___.", blanks: ["evolved", "ancestor"] },
            { audio: "Fossils have been studied for decades in Brazil.", sent: "Fossils have been ___ for decades in ___.", blanks: ["studied", "Brazil"] },
            { audio: "We had not realized how much species changed.", sent: "We had not ___ how much species ___.", blanks: ["realized", "changed"] },
            { audio: "If animals had not adapted to the climate.", sent: "If animals had not ___ to the ___.", blanks: ["adapted", "climate"] },
            { audio: "I have found a unique mutation in their DNA.", sent: "I have found a ___ mutation in their ___.", blanks: ["unique", "DNA"] },
            { audio: "They will have finished the analysis next week.", sent: "They will have ___ the analysis next ___.", blanks: ["finished", "week"] },
            { audio: "Fossil evidence has been studied by experts.", sent: "Fossil ___ has been studied by ___.", blanks: ["evidence", "experts"] },
            { audio: "Have you ever seen a real fossil?", sent: "Have you ___ seen a real ___?", blanks: ["ever", "fossil"] },
            { audio: "Have you already visited the museum?", sent: "Have you ___ visited the ___?", blanks: ["already", "museum"] },
            { audio: "I have just learned about mutations.", sent: "I have ___ learned about ___.", blanks: ["just", "mutations"] },
            { audio: "They would have avoided extinction.", sent: "They would have ___ ___.", blanks: ["avoided", "extinction"] },
            { audio: "DNA contains the genetic instructions.", sent: "DNA ___ the genetic ___.", blanks: ["contains", "instructions"] },
            { audio: "It has been discovered through studies.", sent: "It has been ___ through ___.", blanks: ["discovered", "studies"] },
            { audio: "Eye color is a hereditary trait.", sent: "Eye color is a ___ ___.", blanks: ["hereditary", "trait"] },
            { audio: "Scientists will have found a cure by 2050.", sent: "Scientists will have ___ a cure by ___.", blanks: ["found", "2050"] },
            { audio: "Scientists have developed new adaptations in medicine.", sent: "Scientists have ___ new adaptations in ___.", blanks: ["developed", "medicine"] },
            { audio: "Has there been an evolution in tools?", sent: "Has there ___ an evolution in ___?", blanks: ["been", "tools"] },
            { audio: "Dinosaurs ruled for millions of years.", sent: "Dinosaurs ___ for millions of ___.", blanks: ["ruled", "years"] },
            { audio: "Darwin had discovered many species.", sent: "Darwin had ___ many ___.", blanks: ["discovered", "species"] },
            { audio: "We have not found a solution yet.", sent: "We have not ___ a solution ___.", blanks: ["found", "yet"] },
            { audio: "They had started before they sequenced the genome.", sent: "They had ___ before they sequenced the ___.", blanks: ["started", "genome"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE (10 ITEMS) ---
        11: [
            {
                title: "Exploring Human Ancestry",
                lines: [
                    { speaker: "Albert", text: "I ___ such a complex reconstruction before.", options: ["have never seen", "had never seen"], a: "have never seen" },
                    { speaker: "Celine", text: "By the time we finish, we ___ a deeper understanding.", options: ["will have gained", "have gained"], a: "will have gained" },
                    { speaker: "Albert", text: "Scientists ___ most fossils before genetic analysis.", options: ["had already discovered", "have discovered"], a: "had already discovered" },
                    { speaker: "Celine", text: "Technology ___ dramatically since then.", options: ["has changed", "had changed"], a: "has changed" },
                    { speaker: "Albert", text: "I ___ that we share 98% of DNA with chimps.", options: ["have just learned", "had learned"], a: "have just learned" }
                ]
            },
            {
                title: "The Future of Genetics",
                lines: [
                    { speaker: "Researcher", text: "By 2030, we ___ the genomes of all endangered species.", options: ["will have mapped", "had mapped"], a: "will have mapped" },
                    { speaker: "Student", text: "___ any recent breakthrough?", options: ["Has there been", "Had there been"], a: "Has there been" },
                    { speaker: "Researcher", text: "Yes, we ___ a new technique lately.", options: ["have been studying", "had studied"], a: "have been studying" },
                    { speaker: "Student", text: "If you ___ AI, would it be slower?", options: ["hadn't developed", "haven't developed"], a: "hadn't developed" },
                    { speaker: "Researcher", text: "We ___ such precision without it.", options: ["wouldn't have achieved", "won't have achieved"], a: "wouldn't have achieved" }
                ]
            },
            {
                title: "Extinction and Adaptation",
                lines: [
                    { speaker: "Celine", text: "The dodo ___ if it had developed defenses.", options: ["would have survived", "will have survived"], a: "would have survived" },
                    { speaker: "Albert", text: "It ___ fast enough to humans.", options: ["had not adapted", "has not adapted"], a: "had not adapted" },
                    { speaker: "Celine", text: "Many species ___ into extinction recently.", options: ["have gone", "had gone"], a: "have gone" },
                    { speaker: "Albert", text: "___ the article about the project?", options: ["Have you already read", "Had you read"], a: "Have you already read" },
                    { speaker: "Celine", text: "Not ___, but I heard about it.", options: ["yet", "already"], a: "yet" }
                ]
            },
            {
                title: "The Araripe Basin Findings",
                lines: [
                    { speaker: "Albert", text: "I ___ that researchers found a new fossil.", options: ["have just heard", "had heard"], a: "have just heard" },
                    { speaker: "Celine", text: "___ such a complete skeleton before?", options: ["Had they ever found", "Have they found"], a: "Had they ever found" },
                    { speaker: "Albert", text: "This finding ___ extensively since last month.", options: ["has been studied", "had been studied"], a: "has been studied" },
                    { speaker: "Celine", text: "If the climate ___ so humid, it wouldn't have preserved.", options: ["hadn't been", "hasn't been"], a: "hadn't been" },
                    { speaker: "Albert", text: "We ___ a lot more by the final report.", options: ["will have learned", "had learned"], a: "will have learned" }
                ]
            },
            {
                title: "DNA and Heredity",
                lines: [
                    { speaker: "Teacher", text: "Albert, ___ the exercise?", options: ["have you already finished", "had you finished"], a: "have you already finished" },
                    { speaker: "Albert", text: "Yes. I ___ that eye color was simple.", options: ["had always believed", "have believed"], a: "had always believed" },
                    { speaker: "Teacher", text: "We ___ that many factors affect it.", options: ["have understood", "had understood"], a: "have understood" },
                    { speaker: "Albert", text: "If scientists ___ the double-helix, would we know?", options: ["hadn't discovered", "haven't discovered"], a: "hadn't discovered" },
                    { speaker: "Teacher", text: "No, we ___ the knowledge.", options: ["wouldn't have had", "won't have had"], a: "wouldn't have had" }
                ]
            },
            {
                title: "Natural Selection Debate",
                lines: [
                    { speaker: "A", text: "Evidence ___ that selection favors adaptation.", options: ["shows", "had shown"], a: "shows" },
                    { speaker: "B", text: "___ an evolution in humans lately?", options: ["Has there been", "Had there been"], a: "Has there been" },
                    { speaker: "A", text: "Our digestion ___ in recent millennia.", options: ["has evolved", "had evolved"], a: "has evolved" },
                    { speaker: "B", text: "I ___ about that before today.", options: ["had never thought", "have never thought"], a: "had never thought" },
                    { speaker: "A", text: "By graduation, we ___ more secrets.", options: ["will have explored", "had explored"], a: "will have explored" }
                ]
            },
            {
                title: "Biodiversity Conservation",
                lines: [
                    { speaker: "Celine", text: "We ___ the Amazon yet.", options: ["have not saved", "had not saved"], a: "have not saved" },
                    { speaker: "Albert", text: "If we ___ laws, more species would have died.", options: ["hadn't implemented", "haven't implemented"], a: "hadn't implemented" },
                    { speaker: "Celine", text: "I ___ that climate affects migration.", options: ["have just learned", "had learned"], a: "have just learned" },
                    { speaker: "Albert", text: "Their ___ are being tested.", options: ["adaptations", "fossils"], a: "adaptations" },
                    { speaker: "Celine", text: "I ___ we could do more.", options: ["wish", "have"], a: "wish" }
                ]
            },
            {
                title: "The Lab Report",
                lines: [
                    { speaker: "Celine", text: "___ the mutation results?", options: ["Have you seen", "Had you seen"], a: "Have you seen" },
                    { speaker: "Albert", text: "No, the power ___ out earlier.", options: ["had gone", "has gone"], a: "had gone" },
                    { speaker: "Celine", text: "___! Did we lose data?", options: ["OMG", "LOL"], a: "OMG" },
                    { speaker: "Albert", text: "The system ___ the progress.", options: ["had already saved", "has saved"], a: "had already saved" },
                    { speaker: "Celine", text: "We ___ the report by tomorrow then.", options: ["will have finished", "had finished"], a: "will have finished" }
                ]
            },
            {
                title: "The Mammoth's Fate",
                lines: [
                    { speaker: "Student", text: "If the mammoth ___ south, would it be alive?", options: ["had moved", "has moved"], a: "had moved" },
                    { speaker: "Teacher", text: "It ___ a chance.", options: ["would have had", "will have had"], a: "would have had" },
                    { speaker: "Student", text: "I ___ about the Ice Age lately.", options: ["have been reading", "had read"], a: "have been reading" },
                    { speaker: "Teacher", text: "By the end of the class, we ___ the causes.", options: ["will have analyzed", "have analyzed"], a: "will have analyzed" },
                    { speaker: "Student", text: "I ___ this topic was so complex.", options: ["hadn't realized", "haven't realized"], a: "hadn't realized" }
                ]
            },
            {
                title: "Medical Advances",
                lines: [
                    { speaker: "Doc", text: "We ___ a new therapy for the gene.", options: ["have just developed", "had developed"], a: "have just developed" },
                    { speaker: "Patient", text: "___ it on humans yet?", options: ["Have you tested", "Had you tested"], a: "Have you tested" },
                    { speaker: "Doc", text: "Not yet. If we ___ more funding, we would have started.", options: ["had received", "have received"], a: "had received" },
                    { speaker: "Patient", text: "I hope you ___ it by next year.", options: ["will have finished", "have finished"], a: "will have finished" },
                    { speaker: "Doc", text: "Science ___ dramatically recently.", options: ["has progressed", "had progressed"], a: "has progressed" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER (10 ITEMS) ---
        12: [
            {
                title: "The Genomic Revolution",
                text: "By the time the Human Genome Project was completed in 2003, researchers had already spent over a decade mapping our code. This breakthrough has allowed scientists to identify genes that cause diseases. However, the work is not finished yet. Currently, thousands of species are being studied to understand adaptations. It is believed that by 2050, we will have developed personalized medicines. If we hadn't invested in biotechnology, we wouldn't have understood mutations so clearly.",
                questions: [
                    { q: "When was the project completed?", options: ["In 2003.", "In 2050.", "Not yet."], a: "In 2003." },
                    { q: "What had happened before 2003?", options: ["Researchers had spent a decade mapping.", "We had developed medicine.", "Evolution stopped."], a: "Researchers had spent a decade mapping." },
                    { q: "Why are species being studied?", options: ["To understand adaptations.", "To reinvent the wheel.", "To find fossils."], a: "To understand adaptations." },
                    { q: "What is the prediction for 2050?", options: ["Personalized medicines.", "No more DNA.", "Flying cars."], a: "Personalized medicines." },
                    { q: "What if we hadn't invested?", options: ["We wouldn't have understood mutations.", "We would have finished earlier.", "Nothing."], a: "We wouldn't have understood mutations." }
                ]
            },
            {
                title: "Secrets of the Araripe Basin",
                text: "The Araripe Basin is a famous paleontological site in Brazil. Before findings became famous, people had not realized how much the landscape had changed. Evidence shows ancient species went into extinction because they had not adapted to the climate. Today, researchers have just started using 3D scanning. By next year, they will have uncovered more details about our ancestors.",
                questions: [
                    { q: "What is the Araripe Basin?", options: ["A famous fossil site in Brazil.", "A tech company.", "A mountain."], a: "A famous fossil site in Brazil." },
                    { q: "What had people not realized?", options: ["How the landscape had changed.", "That fossils exist.", "Where Brazil is."], a: "How the landscape had changed." },
                    { q: "Why did species go extinct?", options: ["They hadn't adapted.", "They moved south.", "They were bored."], a: "They hadn't adapted." },
                    { q: "What tech are researchers using?", options: ["3D scanning.", "Microscopes.", "Robots."], a: "3D scanning." },
                    { q: "What will happen by next year?", options: ["They will have uncovered more details.", "They will stop.", "Extinction ends."], a: "They will have uncovered more details." }
                ]
            },
            {
                title: "Natural Selection in Action",
                text: "Darwin proposed natural selection after he had visited the Galapagos. He observed birds had developed different beaks as adaptations. Recent data shows evolution can happen faster than Darwin had thought. If those birds hadn't modified their behavior, they would have died out. This process creates the biodiversity we see today.",
                questions: [
                    { q: "When did Darwin propose his theory?", options: ["After visiting the Galapagos.", "Before he was born.", "In 2003."], a: "After visiting the Galapagos." },
                    { q: "What had the birds developed?", options: ["Different beaks.", "New wings.", "Thick fur."], a: "Different beaks." },
                    { q: "What does recent data show?", options: ["Evolution can happen faster.", "Darwin was wrong.", "It stopped."], a: "Evolution can happen faster." },
                    { q: "What if birds hadn't modified behavior?", options: ["They would have died out.", "They would be humans.", "They would fly."], a: "They would have died out." },
                    { q: "What does this process create?", options: ["Biodiversity.", "Fossils.", "Pollution."], a: "Biodiversity." }
                ]
            },
            {
                title: "The Blueprint of Life",
                text: "DNA is the blueprint of life. Its double-helix was discovered in 1953. Since then, science has progressed to modify genes. If we hadn't understood inheritance, we wouldn't have performed transplants. By the time students become doctors, genetic editing will have become standard. We must use this to protect species.",
                questions: [
                    { q: "What is DNA?", options: ["The blueprint of life.", "A fossil.", "A lecture."], a: "The blueprint of life." },
                    { q: "What happened in 1953?", options: ["Double-helix was discovered.", "Darwin died.", "A storm."], a: "Double-helix was discovered." },
                    { q: "What if we hadn't understood inheritance?", options: ["No transplants.", "More fossils.", "Less DNA."], a: "No transplants." },
                    { q: "What will happen for future doctors?", options: ["Genetic editing will be standard.", "No more doctors.", "Robots rule."], a: "Genetic editing will be standard." },
                    { q: "What must we do?", options: ["Protect species.", "Stop science.", "Modify humans."], a: "Protect species." }
                ]
            },
            {
                title: "Evidence of the Past",
                text: "Paleontologists study fossils to understand history. They have found we share a common ancestor with mammals. If ancient creatures hadn't evolved traits like large brains, we wouldn't have become humans. By next century, we will have discovered the entire fossil record.",
                questions: [
                    { q: "What do paleontologists study?", options: ["Fossils.", "Stars.", "Cars."], a: "Fossils." },
                    { q: "What have they found?", options: ["A common ancestor.", "Aliens.", "Nothing."], a: "A common ancestor." },
                    { q: "What if creatures hadn't evolved traits?", options: ["We wouldn't be humans.", "We would be birds.", "Nothing changed."], a: "We wouldn't be humans." },
                    { q: "What enabled us to be humans?", options: ["Large brains.", "Sharp teeth.", "Fur."], a: "Large brains." },
                    { q: "What is expected by next century?", options: ["Discovering the entire fossil record.", "Time travel.", "End of world."], a: "Discovering the entire fossil record." }
                ]
            },
            {
                title: "Adaptation or Extinction",
                text: "Polar bears thrived because they had developed thick fur. However, the climate has changed so fast that ice is melting. If the ice hadn't melted, bears wouldn't have struggled. Scientists have warned that they might go into extinction unless they modify their habits.",
                questions: [
                    { q: "Why did bears thrive?", options: ["Developed thick fur.", "Liked heat.", "Ate plants."], a: "Developed thick fur." },
                    { q: "What has changed?", options: ["Climate.", "Gravity.", "DNA."], a: "Climate." },
                    { q: "What happened to the ice?", options: ["It is melting.", "It is growing.", "It is blue."], a: "It is melting." },
                    { q: "What if ice hadn't melted?", options: ["Bears wouldn't have struggled.", "They would die.", "They would fly."], a: "Bears wouldn't have struggled." },
                    { q: "What is the risk?", options: ["Extinction.", "Evolution.", "Adaptation."], a: "Extinction." }
                ]
            },
            {
                title: "The Journey of a Gene",
                text: "A mutation in the past would have changed the future. A mutation allowed fish to breathe air. Since then, life has been diversifying. By the time you read this, your body will have produced new cells. Science has just begun to understand this complexity.",
                questions: [
                    { q: "What can a mutation do?", options: ["Change the future.", "Stop time.", "Create gold."], a: "Change the future." },
                    { q: "What did a specific mutation allow?", options: ["Fish to breathe air.", "Birds to swim.", "Dogs to talk."], a: "Fish to breathe air." },
                    { q: "What has happened since then?", options: ["Life diversified.", "Life stopped.", "Extinction."], a: "Life diversified." },
                    { q: "What will your body have done?", options: ["Produced new cells.", "Stopped working.", "Evolved wings."], a: "Produced new cells." },
                    { q: "How much does science understand?", options: ["Just begun.", "Everything.", "Nothing."], a: "Just begun." }
                ]
            },
            {
                title: "Protecting the Future",
                text: "Humans didn't use to think about impact. We have lost traits. However, we have recently learned biodiversity is key. By 2030, countries will have implemented reforestation. If we had acted sooner, extinction would have been lower.",
                questions: [
                    { q: "What did humans ignore?", options: ["Environmental impact.", "Money.", "Food."], a: "Environmental impact." },
                    { q: "What have we lost?", options: ["Unique traits.", "Time.", "Fossils."], a: "Unique traits." },
                    { q: "What have we learned?", options: ["Biodiversity is key.", "Science is hard.", "Space is big."], a: "Biodiversity is key." },
                    { q: "What will happen by 2030?", options: ["Reforestation projects.", "End of world.", "Mars colony."], a: "Reforestation projects." },
                    { q: "What if we had acted sooner?", options: ["Lower extinction rate.", "More pollution.", "No humans."], a: "Lower extinction rate." }
                ]
            },
            {
                title: "The Human Genome Project",
                text: "The Human Genome Project was a massive international effort. By 2003, scientists had sequenced the entire code. If they hadn't collaborated, it would have taken decades longer. This data has transformed medicine. We have just started to use it for personalized cures.",
                questions: [
                    { q: "What was the project?", options: ["International effort.", "A local test.", "A game."], a: "International effort." },
                    { q: "What was achieved by 2003?", options: ["Sequenced entire code.", "Found aliens.", "Built a robot."], a: "Sequenced entire code." },
                    { q: "What if they hadn't collaborated?", options: ["Taken decades longer.", "Finished sooner.", "Failed."], a: "Taken decades longer." },
                    { q: "What has the data transformed?", options: ["Medicine.", "Transport.", "Food."], a: "Medicine." },
                    { q: "What have we started to use it for?", options: ["Personalized cures.", "Cloning dinosaurs.", "Making fabric."], a: "Personalized cures." }
                ]
            },
            {
                title: "Urban Evolution",
                text: "Cities are new environments. Some animals have adapted to urban life. For example, some birds have changed their song pitch to be heard over traffic. If they hadn't modified their behavior, they wouldn't have found mates. Scientists have been studying this phenomenon lately. It shows evolution happens fast.",
                questions: [
                    { q: "What are cities considered?", options: ["New environments.", "Forests.", "Deserts."], a: "New environments." },
                    { q: "How have birds adapted?", options: ["Changed song pitch.", "Grew bigger.", "Stopped flying."], a: "Changed song pitch." },
                    { q: "Why did they change?", options: ["To be heard over traffic.", "To scare humans.", "For fun."], a: "To be heard over traffic." },
                    { q: "What if they hadn't modified?", options: ["Wouldn't have found mates.", "Would be happy.", "Would move."], a: "Wouldn't have found mates." },
                    { q: "What does this show?", options: ["Evolution happens fast.", "Evolution stopped.", "Cities are bad."], a: "Evolution happens fast." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER CONTEXT (10 ITEMS) ---
        13: [
            {
                title: "The Discovery of the Genetic Code",
                audio: "Scientists had been searching for heredity's basis. In 1953, the double-helix was found. If researchers hadn't utilized X-ray, they wouldn't have discovered it. By the end of the century, we will have corrected mutations.",
                questions: [
                    { q: "What were scientists searching for?", options: ["Heredity's basis.", "Gold.", "Fossils."], a: "Heredity's basis." },
                    { q: "When was the helix found?", options: ["1953.", "2003.", "1800."], a: "1953." },
                    { q: "What tool was used?", options: ["X-ray diffraction.", "Microscope.", "Hammer."], a: "X-ray diffraction." },
                    { q: "What if they hadn't used X-ray?", options: ["Wouldn't have discovered it.", "Would be faster.", "Nothing."], a: "Wouldn't have discovered it." },
                    { q: "What will happen by century end?", options: ["Correct mutations.", "End of DNA.", "Flying cars."], a: "Correct mutations." }
                ]
            },
            {
                title: "Darwin’s Journey",
                audio: "Darwin traveled on the HMS Beagle. In the Galapagos, he observed traits. He realized if animals hadn't adapted, they would have died. This led to natural selection. Experts have already accepted his theory.",
                questions: [
                    { q: "Where did Darwin travel?", options: ["Galapagos.", "Brazil.", "Moon."], a: "Galapagos." },
                    { q: "What did he observe?", options: ["Traits.", "Buildings.", "Cars."], a: "Traits." },
                    { q: "What did he realize?", options: ["Adaptation prevents extinction.", "Fossils are rocks.", "Birds sing."], a: "Adaptation prevents extinction." },
                    { q: "What theory did this lead to?", options: ["Natural selection.", "Gravity.", "Relativity."], a: "Natural selection." },
                    { q: "Have experts accepted it?", options: ["Yes.", "No.", "Maybe."], a: "Yes." }
                ]
            },
            {
                title: "The Araripe Basin",
                audio: "The Araripe Basin is a fossil site. Researchers had already discovered soft tissues. If conditions hadn't been unique, details would have vanished. By next decade, we will have mapped the fossil record.",
                questions: [
                    { q: "What is the Araripe Basin?", options: ["Fossil site.", "A river.", "A city."], a: "Fossil site." },
                    { q: "What had they discovered?", options: ["Soft tissues.", "Gold.", "Oil."], a: "Soft tissues." },
                    { q: "Why were details preserved?", options: ["Unique conditions.", "Luck.", "Magic."], a: "Unique conditions." },
                    { q: "What would have happened otherwise?", options: ["Details vanished.", "Fossils grew.", "Nothing."], a: "Details vanished." },
                    { q: "What will happen by next decade?", options: ["Map fossil record.", "Close museum.", "Stop research."], a: "Map fossil record." }
                ]
            },
            {
                title: "The Polar Bear",
                audio: "Polar bears thrived due to fat and fur. Ice is melting fast. If bears don't modify habits, they will have lost population by 2050. They have moved to new territories. We have not found a solution yet.",
                questions: [
                    { q: "Why did bears thrive?", options: ["Fat and fur.", "Warmth.", "Sand."], a: "Fat and fur." },
                    { q: "What is happening to ice?", options: ["Melting.", "Freezing.", "Growing."], a: "Melting." },
                    { q: "What if habits don't change?", options: ["Lose population.", "Gain weight.", "Sleep."], a: "Lose population." },
                    { q: "Where have they moved?", options: ["New territories.", "The zoo.", "Cities."], a: "New territories." },
                    { q: "Have we found a solution?", options: ["No, not yet.", "Yes.", "Maybe."], a: "No, not yet." }
                ]
            },
            {
                title: "The Mystery of the Dodo",
                audio: "The dodo lived without predators. It hadn't developed flight. If it had evolved defenses, it would have survived. It had already disappeared when people realized. Scientists will have reconstructed its code soon.",
                questions: [
                    { q: "How did the dodo live?", options: ["Without predators.", "In fear.", "Flying."], a: "Without predators." },
                    { q: "What hadn't it developed?", options: ["Flight.", "Swimming.", "Eating."], a: "Flight." },
                    { q: "What would have saved it?", options: ["Defenses.", "Food.", "Water."], a: "Defenses." },
                    { q: "When did it disappear?", options: ["Before people realized.", "Yesterday.", "2050."], a: "Before people realized." },
                    { q: "What will scientists do?", options: ["Reconstruct code.", "Find a live one.", "Nothing."], a: "Reconstruct code." }
                ]
            },
            {
                title: "Future of Medicine",
                audio: "Genetics has progressed. By the time students are doctors, DNA sequencing will be routine. We have discovered links to hereditary traits. If we hadn't understood the helix, we wouldn't have therapies. We haven't answered ethical questions.",
                questions: [
                    { q: "What will be routine?", options: ["DNA sequencing.", "Surgery.", "Pills."], a: "DNA sequencing." },
                    { q: "What have we discovered?", options: ["Links to traits.", "New bones.", "Aliens."], a: "Links to traits." },
                    { q: "What enabled therapies?", options: ["Understanding the helix.", "Money.", "Time."], a: "Understanding the helix." },
                    { q: "What haven't we answered?", options: ["Ethical questions.", "Math problems.", "Nothing."], a: "Ethical questions." },
                    { q: "Has genetics progressed?", options: ["Yes.", "No.", "Stopped."], a: "Yes." }
                ]
            },
            {
                title: "Common Ancestry",
                audio: "Humans and primates share DNA. Before sequencing, scientists had suspected a relationship. If ancestors hadn't shared a path, we would be different. By next year, researchers will have identified language mutations.",
                questions: [
                    { q: "What do we share with primates?", options: ["DNA.", "Houses.", "Clothes."], a: "DNA." },
                    { q: "What had scientists suspected?", options: ["A relationship.", "Nothing.", "Extinction."], a: "A relationship." },
                    { q: "What if we hadn't shared a path?", options: ["We would be different.", "Same.", "Extinct."], a: "We would be different." },
                    { q: "What will be identified?", options: ["Language mutations.", "New bones.", "Colors."], a: "Language mutations." },
                    { q: "When will this happen?", options: ["By next year.", "Never.", "Yesterday."], a: "By next year." }
                ]
            },
            {
                title: "Amazon Biodiversity",
                audio: "The Amazon has been studied for a century. Biodiversity had remained stable. If we had protected it, we wouldn't have lost traits. By the next summit, they will have presented a plan. Understanding genes has grown.",
                questions: [
                    { q: "How long has it been studied?", options: ["A century.", "A week.", "A day."], a: "A century." },
                    { q: "What had remained stable?", options: ["Biodiversity.", "Weather.", "Prices."], a: "Biodiversity." },
                    { q: "What would protection have done?", options: ["Saved traits.", "Nothing.", "Cost money."], a: "Saved traits." },
                    { q: "What will happen at the summit?", options: ["Present a plan.", "Eat lunch.", "Sleep."], a: "Present a plan." },
                    { q: "What has grown?", options: ["Understanding genes.", "Trees.", "Rivers."], a: "Understanding genes." }
                ]
            },
            {
                title: "Carbon Dating",
                audio: "Carbon dating helps date fossils. Scientists have used it for decades. If we hadn't discovered this method, we wouldn't know the age of rocks. By 2030, the tech will have improved precision.",
                questions: [
                    { q: "What does carbon dating do?", options: ["Date fossils.", "Clean rocks.", "Find gold."], a: "Date fossils." },
                    { q: "How long has it been used?", options: ["Decades.", "Days.", "Centuries."], a: "Decades." },
                    { q: "What if we hadn't discovered it?", options: ["Wouldn't know ages.", "Would know more.", "Nothing."], a: "Wouldn't know ages." },
                    { q: "What will happen by 2030?", options: ["Improved precision.", "Stop working.", "New atoms."], a: "Improved precision." },
                    { q: "Is it useful?", options: ["Yes.", "No.", "Maybe."], a: "Yes." }
                ]
            },
            {
                title: "The Great Barrier Reef",
                audio: "The reef is dying. Coral had adapted to specific temperatures. Climate change has warmed the water. If the water hadn't warmed, coral wouldn't have bleached. Scientists have been monitoring it.",
                questions: [
                    { q: "What is happening to the reef?", options: ["Dying.", "Growing.", "Moving."], a: "Dying." },
                    { q: "What had coral adapted to?", options: ["Temperatures.", "Plastic.", "Fish."], a: "Temperatures." },
                    { q: "What caused the warming?", options: ["Climate change.", "The sun.", "Fish."], a: "Climate change." },
                    { q: "What if water hadn't warmed?", options: ["Wouldn't have bleached.", "Died anyway.", "Grown faster."], a: "Wouldn't have bleached." },
                    { q: "Who is monitoring it?", options: ["Scientists.", "Tourists.", "Fish."], a: "Scientists." }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT (10 ITEMS) ---
        14: [
            {
                title: "Laboratory Breakthrough",
                text: "The team [1] (has been working / had worked) on DNA. They [2] (had already analyzed / have analyzed) sequences. If we [3] (hadn't used / haven't used) software, we [4] (wouldn't have discovered / won't discover) the error. They [5] (will have completed / had completed) the project soon.",
                answers: ["has been working", "had already analyzed", "hadn't used", "wouldn't have discovered", "will have completed"]
            },
            {
                title: "The Evolution of Species",
                text: "It [1] (is believed / believed) life shares an ancestor. Species [2] (have evolved / had evolved) over time. Many [3] (have gone / had gone) extinct. If they [4] (had modified / have modified) traits, they [5] (would have survived / will survive).",
                answers: ["is believed", "have evolved", "have gone", "had modified", "would have survived"]
            },
            {
                title: "Paleontology in Brazil",
                text: "Paleontologists [1] (have been studying / had studied) the basin. They [2] (had already explored / have explored) many areas. This [3] (has allowed / had allowed) understanding. We [4] (have not uncovered / had not uncovered) every secret [5] (yet / already).",
                answers: ["have been studying", "had already explored", "has allowed", "have not uncovered", "yet"]
            },
            {
                title: "Genetic Mapping",
                text: "Researchers [1] (will have mapped / had mapped) the code next year. They [2] (have just found / had found) a gene. If scientists [3] (hadn't sequenced / haven't sequenced) the genome, they [4] (wouldn't have understood / won't understand) mutations. Science [5] (has progressed / had progressed).",
                answers: ["will have mapped", "have just found", "hadn't sequenced", "wouldn't have understood", "has progressed"]
            },
            {
                title: "Ancestry and Primates",
                text: "Evidence [1] (shows / showed) DNA similarity. Humans [2] (have developed / had developed) traits. We [3] (had already noticed / have noticed) similarities. If ancestors [4] (hadn't adapted / haven't adapted), we [5] (wouldn't have become / won't become) humans.",
                answers: ["shows", "have developed", "had already noticed", "hadn't adapted", "wouldn't have become"]
            },
            {
                title: "The Story of Extinction",
                text: "Species [1] (have disappeared / had disappeared) due to failure to adapt. The dodo [2] (would have lived / will live) if it [3] (had developed / has developed) fear. It [4] (had already gone / has gone) extinct. We [5] (have not learned / had not learned) yet.",
                answers: ["have disappeared", "would have lived", "had developed", "had already gone", "have not learned"]
            },
            {
                title: "Future Breakthroughs",
                text: "Scientists [1] (will have discovered / had discovered) cures by 2050. They [2] (have been researching / had researched) decades. If tech [3] (hadn't changed / haven't changed), we [4] (would still be / will be) looking. Biodiversity [5] (has been studied / had been studied) extensively.",
                answers: ["will have discovered", "have been researching", "hadn't changed", "would still be", "has been studied"]
            },
            {
                title: "Fossil Records",
                text: "Albert [1] (realized / had realized) he [2] (had never seen / have never seen) a fossil. He [3] (learned / had learned) they [4] (have been studied / had been studied) for years. He [5] (will have seen / would have seen) the model.",
                answers: ["realized", "had never seen", "learned", "have been studied", "will have seen"]
            },
            {
                title: "Darwin's Finches",
                text: "Darwin [1] (had visited / has visited) the islands before his theory. He [2] (noticed / had noticed) beak changes. If birds [3] (hadn't adapted / haven't adapted), they [4] (would have died / will die). Natural selection [5] (has been proven / had proven).",
                answers: ["had visited", "noticed", "hadn't adapted", "would have died", "has been proven"]
            },
            {
                title: "Genetic Engineering",
                text: "We [1] (have begun / had begun) editing genes. Scientists [2] (have developed / had developed) CRISPR. If we [3] (hadn't found / haven't found) this, cures [4] (would be / will be) impossible. By 2100, we [5] (will have cured / have cured) many diseases.",
                answers: ["have begun", "have developed", "hadn't found", "would be", "will have cured"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 ITEMS) ---
        15: [
            {
                title: "Text 1",
                audio: "Scientists have discovered a new species in Brazil. They had already found the fossils before the rain started. This discovery has changed our understanding of ancestry.",
                text: "Scientists [1] a new [2] in Brazil. They [3] the fossils before the [4] started. This discovery [5] our understanding of [6].",
                answers: ["have discovered", "species", "had already found", "rain", "has changed", "ancestry"]
            },
            {
                title: "Text 2",
                audio: "I have just learned that traits are adaptations. If the animals hadn't adapted, they would have gone into extinction. We have not saved every species yet.",
                text: "I [1] that traits are [2]. If the animals [3], they [4] into [5]. We [6] every species yet.",
                answers: ["have just learned", "adaptations", "hadn't adapted", "would have gone", "extinction", "have not saved"]
            },
            {
                title: "Text 3",
                audio: "By next year, we will have mapped the genome. We have been studying the genetic code for months. It is similar to other primates.",
                text: "By next year, we [1] the [2]. We [3] the [4] for months. It is [5] to other [6].",
                answers: ["will have mapped", "genome", "have been studying", "genetic code", "similar", "primates"]
            },
            {
                title: "Text 4",
                audio: "It is believed that life started in water. Species have evolved over millions of years. Technology has changed dramatically in recent years.",
                text: "It [1] that life [2] in water. Species [3] over [4] of years. Technology [5] dramatically in [6] years.",
                answers: ["is believed", "started", "have evolved", "millions", "has changed", "recent"]
            },
            {
                title: "Text 5",
                audio: "The mutation has affected the bird's wings. If we hadn't developed these tools, we wouldn't have understood the impact.",
                text: "The [1] has [2] the bird's [3]. If we [4] these tools, we [5] the [6].",
                answers: ["mutation", "affected", "wings", "hadn't developed", "wouldn't have understood", "impact"]
            },
            {
                title: "Text 6",
                audio: "Paleontologists have found fossils in the Araripe Basin. They had already discovered fossils that were over 100 million years old. Science has progressed lately.",
                text: "Paleontologists [1] fossils in the [2] Basin. They [3] fossils that [4] over [5] million years old. Science [6] lately.",
                answers: ["have found", "Araripe", "had already discovered", "were", "100", "has progressed"]
            },
            {
                title: "Text 7",
                audio: "I have never seen such a detailed DNA model. By the time we finish the tour, we will have learned about common ancestors. Evolution is fascinating.",
                text: "I [1] such a [2] DNA model. By the time we [3] the tour, we [4] about [5] ancestors. Evolution [6] fascinating.",
                answers: ["have never seen", "detailed", "finish", "will have learned", "common", "is"]
            },
            {
                title: "Text 8",
                audio: "Scientists will have found a cure by 2050. They have been researching biodiversity extensively. If only I had known about the breakthrough sooner.",
                text: "Scientists [1] a cure [2] 2050. They [3] biodiversity [4]. If only I [5] about the [6] sooner.",
                answers: ["will have found", "by", "have been researching", "extensively", "had known", "breakthrough"]
            },
            {
                title: "Text 9",
                audio: "Fossils form over millions of years. Layers of rock cover the bone. If the rock hadn't hardened, the fossil wouldn't have preserved.",
                text: "Fossils form over [1] of years. Layers of [2] cover the bone. If the rock [3], the fossil [4] [5].",
                answers: ["millions", "rock", "hadn't hardened", "wouldn't have", "preserved"]
            },
            {
                title: "Text 10",
                audio: "Climate change has affected adaptation. Species have moved to new areas. If they hadn't moved, they would have died.",
                text: "Climate change [1] [2]. Species [3] to new areas. If they [4], they [5] died.",
                answers: ["has", "affected", "have moved", "hadn't moved", "would have"]
            }
        ]
    }
});