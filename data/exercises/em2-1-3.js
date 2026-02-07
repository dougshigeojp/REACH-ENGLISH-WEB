/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */

window.initExercise({
    id: "em2-1-3",
    grade: "EM 2nd Grade",
    bimester: "1",
    chapter: "3",
    title: "Sustainability and Energy",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES (40 ITEMS) ---
        1: [
            { words: ["power", "whole", "project", "is", "by", "powered", "This", "wind"], correct: "This whole project is powered by wind power" },
            { words: ["installed", "year", "coast", "last", "on", "were", "the", "turbines", "The"], correct: "The turbines were installed last year on the coast" },
            { words: ["discussed", "energy", "seriously", "council", "being", "is", "renewable", "by", "the"], correct: "Renewable energy is being seriously discussed by the council" },
            { words: ["fossil", "due", "to", "abandoned", "must", "plants", "be", "old", "fuels"], correct: "Old plants must be abandoned due to fossil fuels" },
            { words: ["accelerated", "greenhouse", "emissions", "change", "has", "by", "been", "climate", "gas"], correct: "Climate change has been accelerated by greenhouse gas emissions" },
            { words: ["solution", "immediately", "implemented", "to", "a", "be", "has"], correct: "A solution has to be implemented immediately" },
            { words: ["waste", "energy", "is", "organic", "using", "produced"], correct: "Energy is produced using organic waste" },
            { words: ["footprint", "reduced", "significantly", "result", "carbon", "will", "as", "a", "be", "our"], correct: "As a result our carbon footprint will be reduced significantly" },
            { words: ["fauna", "will", "protected", "act", "now", "if", "we", "be", "our"], correct: "Our fauna will be protected if we act now" },
            { words: ["through", "generated", "energy", "flow", "is", "water", "the"], correct: "Energy is generated through the water flow" },
            { words: ["been", "neighborhood", "in", "recently", "installed", "have", "panels", "solar"], correct: "Solar panels have been installed in the neighborhood recently" },
            { words: ["diminished", "result", "our", "oil", "reliance", "on", "a", "will", "as"], correct: "As a result our reliance on oil will diminish" },
            { words: ["discussed", "UN", "is", "being", "the", "at", "law", "the"], correct: "The law is being seriously discussed at the UN" },
            { words: ["before", "been", "Germany", "had", "tried", "method", "in", "this"], correct: "This method had been tried in Germany before" },
            { words: ["problems", "science", "to", "use", "solve", "we"], correct: "We use science to solve problems" },
            { words: ["recycled", "months", "every", "are", "materials", "The"], correct: "The materials are recycled every month" },
            { words: ["year", "plan", "was", "the", "last", "implemented"], correct: "The plan was implemented last year" },
            { words: ["roof", "installed", "on", "will", "be", "panels", "more"], correct: "More panels will be installed on the roof" },
            { words: ["right", "being", "habitats", "many", "destroyed", "now", "are"], correct: "Many habitats are being destroyed right now" },
            { words: ["year", "turbines", "built", "being", "were", "all", "new"], correct: "New turbines were being built all year" },
            { words: ["created", "system", "the", "best", "has", "been"], correct: "The best system has been created" },
            { words: ["before", "explored", "been", "had", "area", "the"], correct: "The area had been explored before" },
            { words: ["resolved", "must", "change", "climate", "be"], correct: "Climate change must be resolved" },
            { words: ["successful", "project", "due", "was", "the", "to", "innovation"], correct: "The project was successful due to innovation" },
            { words: ["deforestation", "because", "homes", "losing", "are", "animals", "their", "of"], correct: "Animals are losing their homes because of deforestation" },
            { words: ["cleaner", "result", "air", "as", "a", "use", "is", "gasoline", "of", "lower"], correct: "Air is cleaner as a result of lower gasoline use" },
            { words: ["clean", "therefore", "power", "planet", "helps", "solar", "the", "is"], correct: "Solar power is clean therefore it helps the planet" },
            { words: ["pollution", "increased", "consequence", "as", "a"], correct: "As a consequence pollution increased" },
            { words: ["broken", "consequently", "city", "the", "lost", "turbines", "power", "were"], correct: "The turbines were broken consequently the city lost power" },
            { words: ["invest", "so", "we", "in", "sustainability"], correct: "So we invest in sustainability" },
            { words: ["waste", "reason", "reduces", "for", "this", "schools", "it", "use", "biomass"], correct: "Biomass reduces waste for this reason schools use it" },
            { words: ["wood", "using", "paper", "is", "recycled", "produced"], correct: "Paper is produced using recycled wood" },
            { words: ["now", "to", "be", "has", "plan", "implemented", "the"], correct: "The plan has to be implemented now" },
            { words: ["immediately", "taken", "must", "action", "be"], correct: "Action must be taken immediately" },
            { words: ["waterfalls", "through", "generated", "is", "power", "The"], correct: "The power is generated through the waterfalls" },
            { words: ["recycling", "by", "achieved", "be", "can", "change"], correct: "Change can be achieved by recycling" },
            { words: ["abandoned", "petroleum", "was", "Hierro", "El", "on"], correct: "Petroleum was abandoned on El Hierro" },
            { words: ["analyzed", "impact", "the", "environmental", "being", "is"], correct: "The environmental impact is being analyzed" },
            { words: ["Approval", "project", "budget", "delayed", "the", "due", "was", "to"], correct: "The project was delayed due to the budget" },
            { words: ["fauna", "flora", "and", "our", "protected", "be", "will"], correct: "Our fauna and flora will be protected" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES (40 ITEMS) ---
        2: [
            { lines: ["Yes! The turbines were installed last year on the coast.", "Celine, look! This whole project is powered by wind power.", "Renewable energy is being seriously discussed by our city council.", "It’s incredible."], order: [1, 0, 2, 3] },
            { lines: ["Due to the high environmental impact of fossil fuels, coal plants must be abandoned.", "I believe so.", "Therefore, a solution has to be implemented immediately.", "Because of the greenhouse gas emissions, climate change has been accelerated."], order: [0, 3, 2, 1] },
            { lines: ["It says energy is produced using organic waste.", "Look at this section about biomass.", "As a result of better recycling, we will reduce our carbon footprint.", "I wonder if this can be achieved in our school."], order: [1, 0, 3, 2] },
            { lines: ["Our fauna and flora will be protected if we act now.", "We should try!", "Let's ask the expert how it works!", "True. We must act for the Earth!"], order: [0, 3, 2, 1] },
            { lines: ["Energy is generated through the water flow.", "I read that the new dam was built last year.", "Because of this project, our community is safer.", "Yes! It’s a great example of hydropower."], order: [1, 0, 3, 2] },
            { lines: ["Solar panels have been installed recently.", "That's great! Therefore, our reliance on oil will diminish.", "We want a sustainable city.", "Indeed, and science helps us solve problems."], order: [0, 1, 2, 3] },
            { lines: ["At this moment, the environmental impact is being discussed.", "I missed the class, so I didn't see the video.", "Don't worry. The data were collected by the team yesterday.", "Great! Was the system created already?"], order: [0, 1, 2, 3] },
            { lines: ["Our flora will be protected if we follow the law.", "We need to recycle; consequently, we will reduce waste.", "The carbon footprint is high due to excessive consumption.", "I agree. We want a sustainable city."], order: [2, 1, 3, 0] },
            { lines: ["The ocean is polluted as a result of plastic waste.", "Therefore, we must invest in green tech.", "Is renewable energy being seriously discussed?", "Yes, it’s our best hope."], order: [0, 1, 2, 3] },
            { lines: ["A lot of research has been done on this topic.", "Can pollution be reduced by the community?", "Yes. More panels will be installed on the roof.", "Perfect. The fauna and flora must be protected."], order: [0, 1, 2, 3] },
            { lines: ["The plan had been implemented before the meeting.", "Was it a success?", "Yes. Thousands of tons of waste are being transformed.", "Innovation creates new solutions."], order: [0, 1, 2, 3] },
            { lines: ["Is this method new?", "No, it has been tried before in Germany.", "Can it be achieved by recycling more?", "Yes, it can be achieved by us."], order: [0, 1, 2, 3] },
            { lines: ["How do they make this paper?", "It is produced using recycled wood.", "Is the plan ready?", "Yes, it has to be implemented now."], order: [0, 1, 2, 3] },
            { lines: ["Is the situation urgent?", "Yes, action must be taken immediately.", "Where does the power come from?", "It’s generated through the waterfalls."], order: [0, 1, 2, 3] },
            { lines: ["Can we reach zero waste?", "It can be achieved by recycling more.", "Are leaders worried?", "Yes, it is being seriously discussed at the UN."], order: [0, 1, 2, 3] },
            { lines: ["El Hierro is a small island where sustainability is a reality.", "How is electricity produced there?", "Through wind and hydropower.", "Therefore, the environment is much cleaner."], order: [0, 1, 2, 3] },
            { lines: ["Due to this system, petroleum was abandoned.", "This successful model is being seriously discussed.", "It is believed that a zero-carbon future can be achieved.", "We should start with small steps."], order: [0, 1, 2, 3] },
            { lines: ["I heard that new solar panels will be installed past the gym.", "Finally! The project had been delayed because of the budget.", "Consequently, our school will be powered by renewable energy.", "Exactly. Moreover, the impact is being analyzed."], order: [0, 1, 2, 3] },
            { lines: ["Tackling climate change starts with small steps.", "I agree. The flora in our garden will be protected better.", "What are the students doing in science class?", "They are analyzing the environmental impact."], order: [0, 1, 2, 3] },
            { lines: ["GreenFuture is a startup that was created to solve waste problems.", "How are their products made?", "They are produced using 100% recycled plastic.", "As a result, waste is being transformed into furniture."], order: [0, 1, 2, 3] },
            // --- New items to reach 40 ---
            { lines: ["New methods are implemented to improve efficiency.", "The founders believe sustainability must be prioritized.", "Since they started, their carbon footprint has been kept low.", "That is a perfect example of a green business."], order: [0, 1, 2, 3] },
            { lines: ["Let’s tackle the climate crisis together!", "Solar and wind are types of renewable energy.", "CO2 is a common greenhouse gas.", "Reducing your carbon footprint helps the earth."], order: [0, 2, 1, 3] },
            { lines: ["The protection of plants is the protection of the flora.", "Recycling is the process of reusing materials.", "The new dam is powered by water pressure.", "This material is produced using plastic bottles."], order: [0, 1, 2, 3] },
            { lines: ["Strong measures must be taken by the government.", "This goal can be achieved by cooperation.", "This new system has to be implemented next month.", "I hope it is being discussed today."], order: [0, 1, 2, 3] },
            { lines: ["Windmills generate clean electricity.", "The city implemented a new law last year.", "How does plastic impact the ocean?", "It impacts the flora and fauna severely."], order: [0, 1, 2, 3] },
            { lines: ["Technology helps to improve life.", "Global temperatures increase every year.", "He will install the panels on the roof tomorrow.", "Experts investigate the causes of the floods."], order: [0, 1, 2, 3] },
            { lines: ["Factories shouldn't pollute the air.", "Solar energy can power your house.", "Trees produce fresh oxygen for us.", "The school promotes a green week annually."], order: [0, 1, 2, 3] },
            { lines: ["We must protect the local fauna.", "You can recycle paper and glass.", "We need to reform the energy system.", "Nature has the power to regenerate itself."], order: [0, 1, 2, 3] },
            { lines: ["How can we solve the water crisis?", "Let’s tackle the pollution problem first.", "Solar rays are transformed into energy.", "I wonder if we can save the planet."], order: [0, 1, 2, 3] },
            { lines: ["Petroleum is used to make gasoline.", "Factories pollute the water frequently.", "Solar power works even on cloudy days.", "This region is perfect for wind power."], order: [0, 1, 2, 3] },
            { lines: ["Hydropower is very common in Brazil.", "Geothermal energy comes from the earth.", "Biomass uses organic materials.", "I want to reduce my carbon footprint."], order: [0, 1, 2, 3] },
            { lines: ["Greenhouse gas is dangerous for the weather.", "Climate change affects world weather.", "Consider the environmental impact first.", "Water conservation is essential now."], order: [0, 1, 2, 3] },
            { lines: ["Recycling starts in your kitchen.", "Coal is a type of fossil fuel.", "Petroleum is used to make plastic.", "The turbine spins very fast today."], order: [0, 1, 2, 3] },
            { lines: ["What runs this car?", "It is powered by solar energy.", "How do they make this paper?", "It is produced using recycled wood."], order: [0, 1, 2, 3] },
            { lines: ["Is the plan ready?", "Yes, it has to be implemented now.", "Is the situation urgent?", "Yes, action must be taken."], order: [0, 1, 2, 3] },
            { lines: ["Where does the power come from?", "It’s generated through the waterfalls.", "Can we reach zero waste?", "It can be achieved by recycling more."], order: [0, 1, 2, 3] },
            { lines: ["Are leaders worried?", "Yes, it is being seriously discussed at the UN.", "Is this method new?", "No, it has been tried before."], order: [0, 1, 2, 3] },
            { lines: ["Why do we study science?", "To solve problems in our world.", "We must abandon the use of coal.", "Can we achieve our goals by 2030?"], order: [0, 1, 2, 3] },
            { lines: ["Scientists create new technologies every day.", "Pollution destroys the natural habitats.", "Let’s tackle the climate crisis.", "Solar and wind are types of renewable energy."], order: [0, 1, 2, 3] },
            { lines: ["CO2 is a common greenhouse gas.", "Reducing your carbon footprint helps.", "The protection of flowers is the protection of flora.", "Recycling is the process of reusing."], order: [0, 1, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS (40 ITEMS) ---
        3: [
            { q: "Is the city powered by wind power?", options: ["Yes, it is powered.", "Yes, it is powering.", "Yes, it powers.", "No, it isn't power."], a: "Yes, it is powered." },
            { q: "Were the turbines installed last year?", options: ["Yes, they were installed.", "No, they wasn't.", "Yes, them were installed.", "No, they installed."], a: "Yes, they were installed." },
            { q: "Is renewable energy being discussed now?", options: ["Yes, it is being discussed.", "Yes, it discusses.", "No, it isn't been discussed.", "Yes, it are being discussed."], a: "Yes, it is being discussed." },
            { q: "Has the plan been implemented yet?", options: ["Yes, it has been implemented.", "No, it hasn't being implemented.", "Yes, it have been.", "No, it wasn't implemented."], a: "Yes, it has been implemented." },
            { q: "Will the forest be protected by law?", options: ["Yes, it will be protected.", "No, it won't being.", "Yes, it is protected.", "No, it will protected."], a: "Yes, it will be protected." },
            { q: "Can the river be cleaned by volunteers?", options: ["Yes, it can be cleaned.", "No, it can't cleaning.", "Yes, it can be clean.", "No, it can't be clean."], a: "Yes, it can be cleaned." },
            { q: "Must the old coal plants be abandoned?", options: ["Yes, they must be abandoned.", "No, they must be abandon.", "Yes, they are abandoned.", "No, they mustn't abandoned."], a: "Yes, they must be abandoned." },
            { q: "Are the materials recycled every month?", options: ["Yes, they are recycled.", "No, they are recycling.", "Yes, them is recycled.", "No, it are recycled."], a: "Yes, they are recycled." },
            { q: "Was the discovery made by Fleming?", options: ["Yes, it was made.", "Yes, it was making.", "No, it didn't made.", "Yes, it were made."], a: "Yes, it was made." },
            { q: "Is the environmental impact being analyzed?", options: ["Yes, it is being analyzed.", "No, it is analyzed.", "Yes, it being analyze.", "No, it doesn't analyzed."], a: "Yes, it is being analyzed." },
            { q: "Has the carbon footprint been reduced?", options: ["Yes, it has been reduced.", "No, it hasn't be reduced.", "Yes, it have been reduced.", "No, it was reduced."], a: "Yes, it has been reduced." },
            { q: "Will more solar panels be installed?", options: ["Yes, they will be installed.", "No, they will installed.", "Yes, they are installed.", "No, them will be installed."], a: "Yes, they will be installed." },
            { q: "Had the method been tried before?", options: ["Yes, it had been tried.", "No, it has been tried.", "Yes, it was been.", "No, it hadn't tried."], a: "Yes, it had been tried." },
            { q: "Was the project delayed due to budget?", options: ["Yes, it was delayed.", "No, it wasn't delaying.", "Yes, it was delay.", "No, it didn't delayed."], a: "Yes, it was delayed." },
            { q: "Can zero waste be achieved by 2030?", options: ["Yes, it can be achieved.", "No, it can achieved.", "Yes, it could achieved.", "No, it isn't achieved."], a: "Yes, it can be achieved." },
            { q: "Is energy produced using biomass?", options: ["Yes, it is produced.", "No, it is producing.", "Yes, energy produces.", "No, it doesn't produced."], a: "Yes, it is produced." },
            { q: "Were the trees uprooted by the storm?", options: ["Yes, they were uprooted.", "No, they was uprooted.", "Yes, them were uprooted.", "No, it was uprooted."], a: "Yes, they were uprooted." },
            { q: "Is the flora in the garden being protected?", options: ["Yes, it is being protected.", "No, it is protecting.", "Yes, it being protect.", "No, it hasn't protected."], a: "Yes, it is being protected." },
            { q: "Has the paper been made from recycled wood?", options: ["Yes, it has been made.", "No, it hasn't made.", "Yes, it was made.", "No, it has being made."], a: "Yes, it has been made." },
            { q: "Will the climate crisis be tackled?", options: ["Yes, it will be tackled.", "No, it won't tackle.", "Yes, it is tackled.", "No, it will tackling."], a: "Yes, it will be tackled." },
            { q: "Why are solar panels used?", options: ["To generate clean electricity.", "They are delicious.", "To hide the moon.", "Robots sleep."], a: "To generate clean electricity." },
            { q: "What happens if a factory pollutes a river?", options: ["Local fauna and flora are destroyed.", "Factory turns to butterfly.", "Fish learn to fly.", "Water tastes like chocolate."], a: "Local fauna and flora are destroyed." },
            { q: "Why should we recycle plastic?", options: ["To diminish our carbon footprint.", "To reinvent the wheel.", "Plastic is a fossil bird.", "The sun stops shining."], a: "To diminish our carbon footprint." },
            { q: "What is renewable energy?", options: ["Energy from natural resources.", "A type of code.", "An experiment with burgers.", "A blueprint."], a: "Energy from natural resources." },
            { q: "Why was petroleum abandoned on El Hierro?", options: ["Due to wind and hydropower success.", "Oil was too shy.", "Robot won lottery.", "People wanted to live in 1903."], a: "Due to wind and hydropower success." },
            { q: "What does a turbine do?", options: ["It spins to generate power.", "It reads books.", "It helps cats.", "It cooks pasta."], a: "It spins to generate power." },
            { q: "Why is biodiversity important?", options: ["It is essential for a stable planet.", "It sequences the alphabet.", "To buy smartphones.", "Helps oven turn off."], a: "It is essential for a stable planet." },
            { q: "What is the consequence of high greenhouse gases?", options: ["Climate change is accelerated.", "Necklace prices drop.", "Wright Brothers fly.", "Turtle runs fast."], a: "Climate change is accelerated." },
            { q: "How can we reduce our carbon footprint?", options: ["By using renewable energy.", "By wearing boots.", "By telling secrets.", "By discovering bones."], a: "By using renewable energy." },
            { q: "What is biomass?", options: ["Energy from organic waste.", "A medical college.", "A skyscraper.", "An ancient telephone."], a: "Energy from organic waste." },
            { q: "Why must the Amazon be protected?", options: ["Because of its rich fauna and flora.", "Where robots are built.", "To find passwords.", "Principal said so."], a: "Because of its rich fauna and flora." },
            { q: "What is the result of using virtual reality for training?", options: ["Accidents have decreased.", "Workers are invisible.", "Factory is a museum.", "Blueprints are blue."], a: "Accidents have decreased." },
            { q: "Why is hydropower common in Brazil?", options: ["Due to abundance of rivers.", "Rain tastes like soda.", "Turtles walk fast.", "People swim in office."], a: "Due to abundance of rivers." },
            { q: "What is a carbon footprint?", options: ["Amount of CO2 released.", "A literal footprint.", "A black sneaker.", "Drawing software."], a: "Amount of CO2 released." },
            { q: "Why is the air cleaner today?", options: ["Lower gasoline use.", "Storm washed sun.", "Lack of homework.", "Watching YouTubers."], a: "Lower gasoline use." },
            { q: "What happens during reforestation?", options: ["Forest starts to regenerate.", "Trees turn to robots.", "Blueprints deleted.", "Mall closes."], a: "Forest starts to regenerate." },
            { q: "Why do we need environmental laws?", options: ["To regulate tech and protect nature.", "To buy sandwiches.", "Moon is too tall.", "It is not rocket science."], a: "To regulate tech and protect nature." },
            { q: "What is the objective of GreenFuture?", options: ["Solve waste problems.", "Build time machine.", "Study anatomy.", "Find ancestor."], a: "Solve waste problems." },
            { q: "Why was the project delayed?", options: ["Budget issues.", "Fossil was heavy.", "Cat jumped.", "Lecture was boring."], a: "Budget issues." },
            { q: "How is paper produced sustainably?", options: ["Using recycled wood.", "By a robot.", "Flying over ocean.", "Sun is colorful."], a: "Using recycled wood." }
        ],

        // --- TYPE 4: FIND MEANING (40 ITEMS) ---
        4: [
            { sent: "Global **sustainability** is the goal.", word: "sustainability", options: ["Sustentabilidade", "Poluição", "Economia", "Tecnologia"], a: "Sustentabilidade", def: "The ability to be maintained at a certain rate or level." },
            { sent: "The project is **powered** by solar energy.", word: "powered", options: ["Alimentado (energia)", "Construído", "Destruído", "Planejado"], a: "Alimentado (energia)", def: "To be supplied with mechanical or electrical energy." },
            { sent: "**Greenhouse gas** emissions must stop.", word: "greenhouse gas", options: ["Gás do efeito estufa", "Gás de cozinha", "Oxigênio", "Vapor"], a: "Gás do efeito estufa", def: "A gas that contributes to the greenhouse effect." },
            { sent: "We must **abandon** fossil fuels.", word: "abandon", options: ["Abandonar", "Aumentar", "Criar", "Proteger"], a: "Abandonar", def: "To cease to support or look after; to leave completely." },
            { sent: "Wind **turbines** were installed.", word: "turbines", options: ["Turbinas", "Baterias", "Represas", "Painéis"], a: "Turbinas", def: "Machines for producing continuous power from wind or water." },
            { sent: "Reduce your **carbon footprint**.", word: "carbon footprint", options: ["Pegada de carbono", "Caminho de floresta", "Marca de sapato", "Poluição"], a: "Pegada de carbono", def: "The amount of carbon dioxide released by a person or group." },
            { sent: "**Renewable** energy comes from nature.", word: "renewable", options: ["Renovável", "Nuclear", "Fóssil", "Elétrica"], a: "Renovável", def: "Energy from a source that is not depleted when used." },
            { sent: "We need to **tackle** the crisis.", word: "tackle", options: ["Enfrentar / Lidar com", "Ignorar", "Aumentar", "Esquecer"], a: "Enfrentar / Lidar com", def: "To make determined efforts to deal with a problem." },
            { sent: "The local **flora** is disappearing.", word: "flora", options: ["Flora (plantas)", "Fauna", "Solo", "Clima"], a: "Flora (plantas)", def: "The plants of a particular region or habitat." },
            { sent: "Protect the endangered **fauna**.", word: "fauna", options: ["Fauna (animais)", "Flora", "Rios", "Montanhas"], a: "Fauna (animais)", def: "The animals of a particular region or habitat." },
            { sent: "**Recycling** starts in your kitchen.", word: "recycling", options: ["Reciclagem", "Consumo", "Desperdício", "Fabricação"], a: "Reciclagem", def: "The action of converting waste into reusable material." },
            { sent: "**Hydropower** is common in Brazil.", word: "hydropower", options: ["Energia hidrelétrica", "Energia solar", "Energia eólica", "Energia térmica"], a: "Energia hidrelétrica", def: "Electricity produced from the energy of moving water." },
            { sent: "Coal is a **fossil fuel**.", word: "fossil fuel", options: ["Combustível fóssil", "Biocombustível", "Energia limpa", "Gás natural"], a: "Combustível fóssil", def: "A natural fuel formed in the past from living organisms." },
            { sent: "Technology helps to **diminish** impact.", word: "diminish", options: ["Diminuir", "Aumentar", "Manter", "Ignorar"], a: "Diminuir", def: "To make or become less." },
            { sent: "Nature can **regenerate** itself.", word: "regenerate", options: ["Regenerar", "Destruir", "Poluir", "Abandonar"], a: "Regenerar", def: "To regrow or be replaced by new tissue." },
            { sent: "The plan was **implemented**.", word: "implemented", options: ["Implementado", "Cancelado", "Esquecido", "Discutido"], a: "Implementado", def: "To put a decision or plan into effect." },
            { sent: "The **environmental impact** was huge.", word: "environmental impact", options: ["Impacto ambiental", "Crescimento", "Avanço", "Projeto"], a: "Impacto ambiental", def: "Any change to the environment resulting from activities." },
            { sent: "**Biomass** uses organic waste.", word: "biomass", options: ["Biomassa", "Petróleo", "Vento", "Sol"], a: "Biomassa", def: "Organic matter used as a fuel." },
            { sent: "The topic is being **discussed**.", word: "discussed", options: ["Discutido / Debatido", "Rejeitado", "Ignorado", "Esquecido"], a: "Discutido / Debatido", def: "To talk about something with another person or group." },
            { sent: "**Petroleum** creates plastic.", word: "petroleum", options: ["Petróleo", "Madeira", "Vidro", "Algodão"], a: "Petróleo", def: "A liquid mixture of hydrocarbons extracted from rock strata." },
            { sent: "Water **conservation** is essential.", word: "conservation", options: ["Conservação", "Desperdício", "Poluição", "Distribuição"], a: "Conservação", def: "The protection of valuable resources." },
            { sent: "Solar power works **even** on cloudy days.", word: "even", options: ["Até mesmo", "Apenas", "Nunca", "Raramente"], a: "Até mesmo", def: "Used to emphasize something surprising." },
            { sent: "The ocean is **polluted**.", word: "polluted", options: ["Poluído", "Limpo", "Protegido", "Criado"], a: "Poluído", def: "Contaminated with harmful substances." },
            { sent: "**Geothermal** energy comes from heat.", word: "geothermal", options: ["Geotérmica", "Solar", "Eólica", "Das marés"], a: "Geotérmica", def: "Heat energy generated and stored in the Earth." },
            { sent: "We must **defend** nature.", word: "defend", options: ["Defender", "Atacar", "Mudar", "Esquecer"], a: "Defender", def: "To protect from harm or danger." },
            { sent: "Waste is **transformed** into furniture.", word: "transformed", options: ["Transformado", "Queimado", "Escondido", "Comprado"], a: "Transformado", def: "To make a thorough or dramatic change in form." },
            { sent: "New **methods** are being tried.", word: "methods", options: ["Métodos", "Erros", "Problemas", "Custos"], a: "Métodos", def: "A particular form of procedure for accomplishing something." },
            { sent: "As a **consequence**, the air is clean.", word: "consequence", options: ["Consequência", "Causa", "Início", "Problema"], a: "Consequência", def: "A result or effect of an action or condition." },
            { sent: "Goals can be **achieved**.", word: "achieved", options: ["Alcançados", "Perdidos", "Ignorados", "Destruídos"], a: "Alcançados", def: "Successfully reached by effort or skill." },
            { sent: "We **wonder** if it will work.", word: "wonder", options: ["Perguntamo-nos / Imaginamos", "Sabemos", "Decidimos", "Esquecemos"], a: "Perguntamo-nos / Imaginamos", def: "To feel a doubt or curiosity about something." },
            { sent: "**Fossil fuels** must be abandoned.", word: "fossil fuels", options: ["Combustíveis fósseis", "Energias limpas", "Fontes renováveis", "Ventos"], a: "Combustíveis fósseis", def: "Natural resources like coal or oil that release carbon." },
            { sent: "They are **seriously** discussing it.", word: "seriously", options: ["Seriamente", "Engraçadamente", "Raramente", "Mal"], a: "Seriamente", def: "In a solemn or considered manner." },
            { sent: "Energy is **generated** by panels.", word: "generated", options: ["Gerada", "Perdida", "Gasta", "Bloqueada"], a: "Gerada", def: "Produced or created." },
            { sent: "The startup was **created** to help.", word: "created", options: ["Criada", "Destruída", "Vendida", "Fechada"], a: "Criada", def: "Brought into existence." },
            { sent: "The forest is **vital**.", word: "vital", options: ["Vital / Essencial", "Inútil", "Pequeno", "Chato"], a: "Vital / Essencial", def: "Absolutely necessary or important." },
            { sent: "**Recycled** paper is used.", word: "recycled", options: ["Reciclado", "Novo", "Sujo", "Caro"], a: "Reciclado", def: "Processed to be used again." },
            { sent: "**Wind power** is clean.", word: "wind power", options: ["Energia eólica", "Solar", "Das águas", "Térmica"], a: "Energia eólica", def: "Power obtained by harnessing the energy of the wind." },
            { sent: "**Deforestation** causes loss of habitat.", word: "deforestation", options: ["Desmatamento", "Reflorestamento", "Agricultura", "Mineração"], a: "Desmatamento", def: "The action of clearing a wide area of trees." },
            { sent: "We must **reform** the system.", word: "reform", options: ["Reformar", "Manter", "Quebrar", "Ignorar"], a: "Reformar", def: "To make changes in order to improve something." },
            { sent: "Climate change is **accelerated**.", word: "accelerated", options: ["Acelerada", "Parada", "Retardada", "Evitada"], a: "Acelerada", def: "Undergo a rapid increase in rate or speed." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 ITEMS) ---
        5: [
            { sent: "The turbines **was installed** last year.", correct: "were installed" },
            { sent: "Energy is **being discuss** by the council.", correct: "being discussed" },
            { sent: "Climate change **has be** accelerated.", correct: "has been" },
            { sent: "A solution has to **implemented** immediately.", correct: "be implemented" },
            { sent: "These materials **is recycled** every month.", correct: "are recycled" },
            { sent: "Many habitats **are be** destroyed.", correct: "are being" },
            { sent: "The project succeeded **therefore** innovation.", correct: "due to" },
            { sent: "We recycle; **because of**, we save the planet.", correct: "therefore" },
            { sent: "Our flora **will protected** if we act.", correct: "will be protected" },
            { sent: "Energy is **produce** using waste.", correct: "produced" },
            { sent: "The dam **was build** two years ago.", correct: "was built" },
            { sent: "Data **were collect** yesterday.", correct: "were collected" },
            { sent: "Solar panels **have been install** recently.", correct: "have been installed" },
            { sent: "The system **had been explore** before.", correct: "had been explored" },
            { sent: "Carbon footprint **must reduced**.", correct: "be reduced" },
            { sent: "The ocean is polluted **so** plastic waste.", correct: "due to" },
            { sent: "I missed class **owing to** I didn't see the video.", correct: "so" },
            { sent: "Turbines **were being build** all day.", correct: "were being built" },
            { sent: "The system **has been create** already.", correct: "has been created" },
            { sent: "Fossil fuels **must be abandon**.", correct: "must be abandoned" },
            { sent: "Air is cleaner **consequently** lower gas use.", correct: "due to" },
            { sent: "We invest in tech, **due to** nature is saved.", correct: "therefore" },
            { sent: "The law is **being seriously discuss**.", correct: "being seriously discussed" },
            { sent: "Paper is **produced use** wood.", correct: "produced using" },
            { sent: "The problem **can be solve**.", correct: "can be solved" },
            { sent: "Biodiversity **must prioritized**.", correct: "must be prioritized" },
            { sent: "Power was lost **consequently** the storm.", correct: "because of" },
            { sent: "Rays **are transform** into energy.", correct: "are transformed" },
            { sent: "The flora **is disappear**.", correct: "is disappearing" },
            { sent: "This method **has never tried**.", correct: "has never been tried" },
            { sent: "The project failed **therefore** the budget.", correct: "due to" },
            { sent: "We recycle; **as a result of** we save money.", correct: "consequently" },
            { sent: "Fauna **must be protect**.", correct: "must be protected" },
            { sent: "Zero-carbon **can achieved**.", correct: "can be achieved" },
            { sent: "Is energy **being produce**?", correct: "being produced" },
            { sent: "The plan **was implementation**.", correct: "was implemented" },
            { sent: "We use science **so that solve** problems.", correct: "so that we solve" },
            { sent: "Energy **is seriously discussing**.", correct: "is seriously discussed" },
            { sent: "Change **has accelerated** by humans.", correct: "has been accelerated" },
            { sent: "Trees **were uprooted to** the storm.", correct: "were uprooted by" }
        ],


        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Group 1: Energy Sources (Question to Answer)
            { pairs: [{a: "How is the city of El Hierro powered?", b: "It is powered by a combination of wind and water."}, {a: "Where were the wind turbines installed?", b: "They were installed last year on the coast."}, {a: "How is energy produced from organic waste?", b: "It is produced using biomass technology."}, {a: "What is being used to make gasoline?", b: "Petroleum is used to create it."}, {a: "Why are solar panels being installed?", b: "So that the school can use renewable energy."}] },
            // Group 2: Environmental Impacts (Question to Answer)
            { pairs: [{a: "Has climate change been accelerated?", b: "Yes, it has been accelerated by gas emissions."}, {a: "Why must the old coal plants be abandoned?", b: "Due to their high environmental impact."}, {a: "Is the local river being protected from pollution?", b: "Yes, it is being cleaned by volunteers every week."}, {a: "What happened to the trees during the storm?", b: "They were uprooted by the strong winds."}, {a: "Is the environmental impact being discussed?", b: "Yes, it is being seriously analyzed by experts."}] },
            // Group 3: Sustainability Projects (Question to Answer)
            { pairs: [{a: "Can zero waste be achieved by 2030?", b: "Yes, if better recycling methods are used."}, {a: "Was the GreenFuture startup created recently?", b: "Yes, it was created to solve waste problems."}, {a: "Has the new energy plan been implemented?", b: "Yes, it has been implemented in the whole city."}, {a: "Will our carbon footprint be reduced soon?", b: "Yes, as a result of better conservation."}, {a: "Had the area been explored by scientists before?", b: "Yes, it had been studied for many years."}] },
            // Group 4: Scientific Logic (Question to Answer)
            { pairs: [{a: "Why was the project delayed in the past?", b: "It was delayed due to budget issues."}, {a: "How is the water crisis being solved?", b: "It is being tackled through better management."}, {a: "Are greenhouse gases considered dangerous?", b: "Yes, they are seen as a major threat to the climate."}, {a: "Has this energy method ever been tried?", b: "Yes, it has been tried before in Germany."}, {a: "Will the fauna and flora be protected?", b: "Yes, they will be protected if we act now."}] },
            // Group 5: Recycling & Waste (Question to Answer)
            { pairs: [{a: "How is recycled paper produced?", b: "It is produced using recycled wood fibers."}, {a: "Why is the air cleaner in the city now?", b: "As a result of lower gasoline use."}, {a: "Are thousands of tons of waste being transformed?", b: "Yes, they are being turned into durable furniture."}, {a: "Must serious action be taken immediately?", b: "Yes, it must be taken to save the planet."}, {a: "Is sustainability prioritized by this business?", b: "Yes, it has been their goal since the start."}] },
            // Group 6: Passive Forms (Question to Answer)
            { pairs: [{a: "What is being built on the school roof?", b: "More solar panels are being installed there."}, {a: "Were the data collected yesterday?", b: "Yes, they were collected by the research team."}, {a: "Has the best system been created yet?", b: "Yes, it has been created to improve efficiency."}, {a: "Will more turbines be installed next year?", b: "Yes, they will be built on the coast."}, {a: "Was energy generated through the dam?", b: "Yes, it was generated by the water flow."}] },
            // Group 7: Cause and Effect (Question to Answer)
            { pairs: [{a: "Why are animals losing their habitats?", b: "They are being lost because of deforestation."}, {a: "What is a consequence of poor investment?", b: "The project failed due to the lack of money."}, {a: "Why did the city lose power yesterday?", b: "Consequently, because the turbines were broken."}, {a: "How do we reduce the carbon footprint?", b: "It is reduced through recycling and conservation."}, {a: "Why is biomass used by schools?", b: "For this reason, because it reduces waste."}] },
            // Group 8: Global Discussions (Question to Answer)
            { pairs: [{a: "Where is the climate crisis being discussed?", b: "It is being seriously discussed at the UN."}, {a: "Can a zero-carbon future be achieved?", b: "It is believed that small islands can achieve it first."}, {a: "Is geothermal energy used in this region?", b: "No, it is generated using wind power instead."}, {a: "Are leaders worried about greenhouse gases?", b: "Yes, therefore new laws have been implemented."}, {a: "What has been changed in our habits?", b: "Our ability to conserve water has improved."}] },
            // Group 9: Future Tech (Question to Answer)
            { pairs: [{a: "Will the river be cleaned by 2025?", b: "Yes, it will be cleaned by volunteers."}, {a: "Are new technologies created every day?", b: "Yes, they are created by innovative scientists."}, {a: "What will be implemented next month?", b: "A new energy system has to be implemented."}, {a: "Is virtual reality used for training?", b: "Yes, it is used so that accidents are reduced."}, {a: "How are the products of GreenFuture made?", b: "They are produced using 100% recycled plastic."}] },
            // Group 10: Natural Resources (Question to Answer)
            { pairs: [{a: "Is wind power considered clean?", b: "Yes, and it is powered by the force of wind."}, {a: "How is hydropower generated in Brazil?", b: "It is generated through the waterfalls and rivers."}, {a: "Is petroleum used to make plastic?", b: "Yes, and it is also used to make gasoline."}, {a: "What is being done to save the ocean?", b: "It is being protected from plastic waste."}, {a: "Has much research been done on this?", b: "Yes, a lot of research has been done lately."}] },
            
            // Group 11: Discourse Markers (Sentence Completion)
            { pairs: [{a: "The project was successful...", b: "...due to the new renewable energy source."}, {a: "Many animals are dying...", b: "...because of the rapid deforestation."}, {a: "The air is much cleaner...", b: "...as a result of lower gasoline use."}, {a: "We used too much oil;...", b: "...as a consequence, pollution increased."}, {a: "The turbines were broken;...", b: "...consequently, the city lost power."}] },
            // Group 12: Passive Voice - Mixed Tenses (Sentence Completion)
            { pairs: [{a: "The solar panels...", b: "...were installed in the neighborhood recently."}, {a: "The environmental impact...", b: "...is being seriously discussed by experts."}, {a: "Millions of fossils...", b: "...had been discovered before the project began."}, {a: "New solutions...", b: "...will be implemented by the government soon."}, {a: "The local flora...", b: "...must be protected by the entire community."}] },
            // Group 13: Greenhouse & Climate (Sentence Completion)
            { pairs: [{a: "Climate change...", b: "...has been accelerated by human activity."}, {a: "Carbon footprint...", b: "...can be reduced by better recycling."}, {a: "Solar power...", b: "...is generated through panels on the roof."}, {a: "Sustainability...", b: "...must be prioritized by every business."}, {a: "CO2...", b: "...is a dangerous greenhouse gas."}] },
            // Group 14: Innovation & Results (Sentence Completion)
            { pairs: [{a: "GreenFuture was created...", b: "...to solve problems related to waste."}, {a: "Waste is currently...", b: "...being transformed into durable furniture."}, {a: "New methods are...", b: "...implemented every year to improve efficiency."}, {a: "Success can...", b: "...be achieved through international cooperation."}, {a: "The project failed...", b: "...therefore the lack of proper investment."}] },
            // Group 15: Natural World (Sentence Completion)
            { pairs: [{a: "Our fauna and flora...", b: "...will be protected if we act immediately."}, {a: "The Amazon forest...", b: "...must be defended by all activists."}, {a: "Life is believed...", b: "...to have started in the water."}, {a: "The local river...", b: "...is being cleaned by a group of students."}, {a: "Endangered species...", b: "...had been studied before they vanished."}] },
            // Group 16: Technology & Energy (Sentence Completion)
            { pairs: [{a: "The city is...", b: "...powered by wind and water on the coast."}, {a: "Wind turbines...", b: "...were installed to provide renewable energy."}, {a: "Petroleum was...", b: "...abandoned due to the new green system."}, {a: "Clean electricity...", b: "...is generated through large turbines."}, {a: "Waterfalls...", b: "...are used to produce hydropower."}] },
            // Group 17: Logical Chains (Sentence Completion)
            { pairs: [{a: "Because of emissions,...", b: "...climate change has been accelerated."}, {a: "Due to the budget,...", b: "...the project was delayed for a year."}, {a: "Since it is late,...", b: "...we must act as fast as possible."}, {a: "So that we solve it,...", b: "...we train the algorithm with more data."}, {a: "For this reason,...", b: "...schools use biomass to reduce waste."}] },
            // Group 18: Active vs Passive (Sentence Completion)
            { pairs: [{a: "Scientists study the fauna,...", b: "...but the fauna is studied by experts."}, {a: "The team collected data,...", b: "...therefore the data were collected carefully."}, {a: "We will clean the river,...", b: "...so the river will be cleaned soon."}, {a: "People produce waste,...", b: "...consequently waste is being transformed."}, {a: "Leaders discuss laws,...", b: "...as a result the law is being discussed."}] },
            // Group 19: Geology & History (Sentence Completion)
            { pairs: [{a: "The 100-million-year-old fossil...", b: "...was found in a deep layer of rock."}, {a: "The Araripe Basin...", b: "...has been explored by paleontologists for years."}, {a: "Human ancestry...", b: "...is being researched through genetic studies."}, {a: "DNA molecules...", b: "...had already been sequenced by the team."}, {a: "Prehistoric bones...", b: "...were discovered before the museum tour."}] },
            // Group 20: Business & Sustainability (Sentence Completion)
            { pairs: [{a: "Low-waste lifestyles...", b: "...are being promoted by the school council."}, {a: "Ethical data use...", b: "...must be prioritized in AI development."}, {a: "Renewable resources...", b: "...will be used by the community soon."}, {a: "Economic growth...", b: "...can be achieved through green tech."}, {a: "Environmental laws...", b: "...have to be implemented by governments."}] },
            
            // Group 21: Translation (Passive)
            { pairs: [{a: "Is being seriously discussed", b: "Está sendo seriamente discutido."}, {a: "Has to be implemented", b: "Tem que ser implementado."}, {a: "Must be abandoned", b: "Deve ser abandonado."}, {a: "It can be achieved by", b: "Pode ser alcançado por."}, {a: "It is produced using", b: "É produzido usando."}] },
            // Group 22: Translation (Vocab)
            { pairs: [{a: "Carbon footprint", b: "Pegada de carbono."}, {a: "Greenhouse gas", b: "Gás do efeito estufa."}, {a: "Climate change", b: "Mudança climática."}, {a: "Natural resource", b: "Recurso natural."}, {a: "Renewable energy", b: "Energia renovável."}] },
            // Group 23: Translation (Energy Types)
            { pairs: [{a: "Wind power and solar power", b: "Energia eólica e solar."}, {a: "Hydropower and geothermal", b: "Energia hidrelétrica e geotérmica."}, {a: "Biomass and turbines", b: "Biomassa e turbinas."}, {a: "Fossil fuel and petroleum", b: "Combustível fóssil e petróleo."}, {a: "Fauna and flora", b: "Fauna e flora."}] },
            // Group 24: Translation (Connectors)
            { pairs: [{a: "Due to and because of", b: "Devido a e por causa de (Causa)."}, {a: "Therefore and consequently", b: "Portanto e consequentemente (Efeito)."}, {a: "As a result and as a consequence", b: "Como resultado e como consequência."}, {a: "For this reason and so", b: "Por esta razão e então."}, {a: "In fact and nevertheless", b: "Na verdade e todavia/no entanto."}] },
            // Group 25: Translation (Sentences)
            { pairs: [{a: "The materials are recycled", b: "Os materiais são reciclados."}, {a: "The plan was implemented", b: "O plano foi implementado."}, {a: "Panels will be installed", b: "Painéis serão instalados."}, {a: "Habitats are being destroyed", b: "Habitats estão sendo destruídos."}, {a: "The system has been created", b: "O sistema foi criado."}] },
            // Group 26: Translation (Concepts)
            { pairs: [{a: "Biodiversity is essential", b: "A biodiversidade é essencial."}, {a: "Environmental impact", b: "Impacto ambiental."}, {a: "Water conservation", b: "Conservação da água."}, {a: "Sustainable startup", b: "Startup sustentável."}, {a: "Genetic code", b: "Código genético."}] },
            // Group 27: Translation (Verbs)
            { pairs: [{a: "To tackle a problem", b: "Enfrentar um problema."}, {a: "To solve a crisis", b: "Resolver uma crise."}, {a: "To reduce waste", b: "Reduzir o lixo/desperdício."}, {a: "To protect nature", b: "Proteger a natureza."}, {a: "To explore sources", b: "Explorar fontes."}] },
            // Group 28: Translation (Passive Phrases)
            { pairs: [{a: "It is powered by", b: "É alimentado por."}, {a: "It's generated through", b: "É gerado através de."}, {a: "Has ever been tried", b: "Já foi testado."}, {a: "Was delayed because of", b: "Foi atrasado por causa de."}, {a: "Must be taken", b: "Deve ser tomado/feito."}] },
            // Group 29: Translation (Nouns)
            { pairs: [{a: "Recycled wood and plastic", b: "Madeira e plástico reciclados."}, {a: "Organic waste and coal", b: "Lixo orgânico e carvão."}, {a: "Clean air and water flow", b: "Ar limpo e fluxo de água."}, {a: "Windmill and dam", b: "Moinho de vento e represa."}, {a: "Layers of rock and fossils", b: "Camadas de rocha e fósseis."}] },
            // Group 30: Translation (Time)
            { pairs: [{a: "As fast as possible", b: "O mais rápido possível."}, {a: "Millions of years ago", b: "Milhões de anos atrás."}, {a: "By the end of the tour", b: "Ao final do passeio."}, {a: "Right now and currently", b: "Agora mesmo e atualmente."}, {a: "In recent years", b: "Nos últimos anos."}] },

            // Group 31: Definitions (Energy Terms)
            { pairs: [{a: "Renewable", b: "Energy that comes from sources that will not run out."}, {a: "Fossil", b: "A fuel like coal or oil formed from dead organisms."}, {a: "Biomass", b: "Energy produced from using organic waste material."}, {a: "Solar", b: "Electricity that is generated from the sun's rays."}, {a: "Hydropower", b: "Power created by the force of fast-moving water."}] },
            // Group 32: Definitions (Environmental Science)
            { pairs: [{a: "Sustainability", b: "The ability to continue over time with little damage."}, {a: "Biodiversity", b: "The variety of all living things in an environment."}, {a: "Greenhouse gas", b: "A gas that contributes to the warming of the Earth."}, {a: "Carbon footprint", b: "The amount of CO2 released by a person or group."}, {a: "Climate change", b: "A long-term change in the planet's temperature."}] },
            // Group 33: Definitions (Nature)
            { pairs: [{a: "Fauna", b: "A collective term for all the animals in a region."}, {a: "Flora", b: "A collective term for all the plants in a region."}, {a: "Habitat", b: "The natural home or environment of an organism."}, {a: "Conservation", b: "The protection of valuable natural resources."}, {a: "Deforestation", b: "The action of clearing or destroying wide areas of trees."}] },
            // Group 34: Definitions (Passive Voice Elements)
            { pairs: [{a: "Subject", b: "In passive voice, this person or thing is affected."}, {a: "Receiver", b: "The focus of a passive sentence (the recipient)."}, {a: "Past Participle", b: "The verb form ending in -ed or irregular like 'built'."}, {a: "Auxiliary Be", b: "The helping verb used to form the passive voice."}, {a: "Action", b: "The process happening to the subject."}] },
            // Group 35: Definitions (Discourse Markers - Causal)
            { pairs: [{a: "Due to", b: "A formal linking phrase used to show cause."}, {a: "Because of", b: "A common phrase used to introduce a reason."}, {a: "Owing to", b: "Used to explain that something happened because of a fact."}, {a: "Since", b: "A connector that links a reason to an action."}, {a: "As", b: "A shorter word used to indicate 'for the reason that'."}] },
            // Group 36: Definitions (Discourse Markers - Result)
            { pairs: [{a: "Therefore", b: "A formal word used to introduce a logical consequence."}, {a: "Consequently", b: "Used to show the effect of a specific action."}, {a: "As a result", b: "A phrase that presents the outcome of a situation."}, {a: "So", b: "A simple connector used to show 'for that reason'."}, {a: "Thus", b: "A very formal way to say 'as a consequence of this'."}] },
            // Group 37: Definitions (Technological Parts)
            { pairs: [{a: "Turbine", b: "A large machine with blades that spins to make power."}, {a: "Panel", b: "A flat surface used to catch energy from the sun."}, {a: "Dam", b: "A barrier built across a river to hold back water."}, {a: "Grid", b: "The network that carries electricity to our homes."}, {a: "Software", b: "The programs that control how a computer works."}] },
            // Group 38: Definitions (Actions for the Earth)
            { pairs: [{a: "Tackle", b: "To make a determined effort to deal with a crisis."}, {a: "Protect", b: "To keep someone or something safe from harm."}, {a: "Reform", b: "To make changes in a system to improve it."}, {a: "Regenerate", b: "The process of nature growing back again."}, {a: "Abandon", b: "To stop using something completely, like coal."}] },
            // Group 39: Definitions (Scientific Process)
            { pairs: [{a: "Analyze", b: "To examine data in detail to understand it."}, {a: "Implement", b: "To start using a new plan or energy system."}, {a: "Investigate", b: "To examine facts carefully to find the truth."}, {a: "Experiment", b: "A scientific test done to find out what happens."}, {a: "Evidence", b: "Facts or information that prove a theory is valid."}] },
            // Group 40: Definitions (General Terms)
            { pairs: [{a: "Impact", b: "A strong effect or influence on a situation."}, {a: "Solution", b: "The answer to a problem or difficult situation."}, {a: "Process", b: "A series of steps taken to achieve a result."}, {a: "Reality", b: "Something that is actually happening, not just a dream."}, {a: "Breakthrough", b: "A sudden and very important discovery."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 ITEMS) ---
        7: [
            { q: "Is the city powered by wind power?", options: ["Yes, it is powered.", "Yes, it is powering.", "No, it isn't power."], a: "Yes, it is powered." },
            { q: "Were the turbines installed last year?", options: ["Yes, they were installed.", "No, they wasn't.", "Yes, them were installed."], a: "Yes, they were installed." },
            { q: "Is renewable energy being discussed?", options: ["Yes, it is being discussed.", "Yes, it discusses.", "No, it isn't been discussed."], a: "Yes, it is being discussed." },
            { q: "Has the plan been implemented yet?", options: ["Yes, it has been implemented.", "No, it hasn't being.", "No, it wasn't."], a: "Yes, it has been implemented." },
            { q: "Will the forest be protected by law?", options: ["Yes, it will be protected.", "No, it won't being.", "Yes, it is protected."], a: "Yes, it will be protected." },
            { q: "Can the river be cleaned by volunteers?", options: ["Yes, it can be cleaned.", "No, it can't cleaning.", "Yes, it can be clean."], a: "Yes, it can be cleaned." },
            { q: "Must coal plants be abandoned?", options: ["Yes, they must be abandoned.", "No, they must be abandon.", "Yes, they are abandoned."], a: "Yes, they must be abandoned." },
            { q: "Are materials recycled every month?", options: ["Yes, they are recycled.", "No, they are recycling.", "No, it are recycled."], a: "Yes, they are recycled." },
            { q: "Was the discovery made by Fleming?", options: ["Yes, it was made.", "Yes, it was making.", "No, it didn't made."], a: "Yes, it was made." },
            { q: "Is the impact being analyzed?", options: ["Yes, it is being analyzed.", "No, it is analyzed.", "Yes, it being analyze."], a: "Yes, it is being analyzed." },
            { q: "Has the footprint been reduced?", options: ["Yes, it has been reduced.", "No, it hasn't be reduced.", "No, it was reduced."], a: "Yes, it has been reduced." },
            { q: "Will more panels be installed?", options: ["Yes, they will be installed.", "No, they will installed.", "Yes, they are installed."], a: "Yes, they will be installed." },
            { q: "Had the method been tried before?", options: ["Yes, it had been tried.", "No, it has been tried.", "Yes, it was been."], a: "Yes, it had been tried." },
            { q: "Was the project delayed due to budget?", options: ["Yes, it was delayed.", "No, it wasn't delaying.", "Yes, it was delay."], a: "Yes, it was delayed." },
            { q: "Can zero waste be achieved?", options: ["Yes, it can be achieved.", "No, it can achieved.", "No, it isn't achieved."], a: "Yes, it can be achieved." },
            { q: "Is energy produced using biomass?", options: ["Yes, it is produced.", "No, it is producing.", "Yes, energy produces."], a: "Yes, it is produced." },
            { q: "Were the trees uprooted?", options: ["Yes, they were uprooted.", "No, they was uprooted.", "No, it was uprooted."], a: "Yes, they were uprooted." },
            { q: "Is the flora being protected?", options: ["Yes, it is being protected.", "No, it is protecting.", "Yes, it being protect."], a: "Yes, it is being protected." },
            { q: "Has the paper been made from wood?", options: ["Yes, it has been made.", "No, it hasn't made.", "Yes, it was made."], a: "Yes, it has been made." },
            { q: "Will the crisis be tackled?", options: ["Yes, it will be tackled.", "No, it won't tackle.", "Yes, it is tackled."], a: "Yes, it will be tackled." },
            { q: "Why are solar panels used?", options: ["To generate clean electricity.", "Because they are pizza.", "To hide the moon."], a: "To generate clean electricity." },
            { q: "What happens if a factory pollutes?", options: ["Flora and fauna are destroyed.", "Factory turns to butterfly.", "Fish fly."], a: "Flora and fauna are destroyed." },
            { q: "Why should we recycle?", options: ["To diminish carbon footprint.", "To reinvent the wheel.", "Because plastic is a bird."], a: "To diminish carbon footprint." },
            { q: "What is renewable energy?", options: ["Energy that doesn't run out.", "Code used by sailors.", "A costume."], a: "Energy that doesn't run out." },
            { q: "Why was petroleum abandoned?", options: ["Due to wind and hydropower.", "Oil was too shy.", "Robot lottery."], a: "Due to wind and hydropower." },
            { q: "What does a turbine do?", options: ["Spins to generate power.", "Reads books.", "Helps cats."], a: "Spins to generate power." },
            { q: "Why is biodiversity important?", options: ["Essential for a stable planet.", "Sequences alphabet.", "Buys phones."], a: "Essential for a stable planet." },
            { q: "What is the consequence of emissions?", options: ["Climate change is accelerated.", "Prices drop.", "Turtles run."], a: "Climate change is accelerated." },
            { q: "How to reduce carbon footprint?", options: ["Using renewable energy.", "Wearing boots.", "Telling secrets."], a: "Using renewable energy." },
            { q: "What is biomass?", options: ["Energy from organic waste.", "A medical college.", "A skyscraper."], a: "Energy from organic waste." },
            { q: "Why protect the Amazon?", options: ["Because of its rich fauna.", "Where robots are built.", "To find passwords."], a: "Because of its rich fauna." },
            { q: "Result of VR training?", options: ["Accidents have decreased.", "Workers invisible.", "Factory is museum."], a: "Accidents have decreased." },
            { q: "Why is hydropower common?", options: ["Due to abundance of rivers.", "Rain is soda.", "Turtles walk."], a: "Due to abundance of rivers." },
            { q: "What is a carbon footprint?", options: ["Amount of CO2 released.", "A literal footprint.", "A sneaker."], a: "Amount of CO2 released." },
            { q: "Why is air cleaner?", options: ["Result of lower gasoline use.", "Storm washed sun.", "Lack of homework."], a: "Result of lower gasoline use." },
            { q: "What happens during reforestation?", options: ["Forest starts to regenerate.", "Trees turn to robots.", "Mall closes."], a: "Forest starts to regenerate." },
            { q: "Why need environmental laws?", options: ["To regulate tech and protect.", "To buy sandwiches.", "Moon is tall."], a: "To regulate tech and protect." },
            { q: "Objective of GreenFuture?", options: ["Solve waste problems.", "Build time machine.", "Study anatomy."], a: "Solve waste problems." },
            { q: "Why was the project delayed?", options: ["Due to budget issues.", "Fossil was heavy.", "Cat jumped."], a: "Due to budget issues." },
            { q: "How is paper produced?", options: ["Using recycled wood.", "By a robot.", "Flying over ocean."], a: "Using recycled wood." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 ITEMS) ---
        8: [
            { sent: "Solar power is clean; **however**, it helps the planet.", wrong: "however", options: ["therefore", "because", "nevertheless", "although"], a: "therefore" },
            { sent: "Protect the Amazon **flora** like jaguars.", wrong: "flora", options: ["fauna", "biodiversity", "resources", "fuel"], a: "fauna" },
            { sent: "Electricity is generated through **burgers**.", wrong: "burgers", options: ["waterfalls", "turbines", "biomass", "petroleum"], a: "waterfalls" },
            { sent: "Climate change has been **slowed** by emissions.", wrong: "slowed", options: ["accelerated", "improved", "protected", "recycled"], a: "accelerated" },
            { sent: "The **carbon footprint** of a bicycle is high.", wrong: "high", options: ["low", "green", "polluted", "sustainable"], a: "low" },
            { sent: "We need to **increase** reliance on petroleum.", wrong: "increase", options: ["reduce", "improve", "protect", "innovate"], a: "reduce" },
            { sent: "**Deforestation** is planting new trees.", wrong: "Deforestation", options: ["Reforestation", "Conservation", "Sustainability", "Extinction"], a: "Reforestation" },
            { sent: "The **petroleum** spins to generate wind power.", wrong: "petroleum", options: ["turbine", "panel", "dam", "fossil"], a: "turbine" },
            { sent: "Recycling starts in your **garage**.", wrong: "garage", options: ["kitchen", "school", "office", "museum"], a: "kitchen" },
            { sent: "**Fossil fuels** like sun are renewable.", wrong: "Fossil fuels", options: ["Renewable energy", "Greenhouse gases", "Carbon footprints", "Biodiversity"], a: "Renewable energy" },
            { sent: "Coal is a type of **clean** fuel.", wrong: "clean", options: ["fossil", "renewable", "sustainable", "green"], a: "fossil" },
            { sent: "Polluted **due to** we use plastic.", wrong: "due to", options: ["because", "therefore", "consequently", "result"], a: "because" },
            { sent: "We must **destroy** flora to build factories.", wrong: "destroy", options: ["protect", "implement", "recycle", "generate"], a: "protect" },
            { sent: "Geothermal energy uses **organic waste**.", wrong: "organic waste", options: ["heat", "solar", "wind", "hydro"], a: "heat" },
            { sent: "As a **cause**, the city lost power.", wrong: "cause", options: ["consequence", "reason", "impact", "innovation"], a: "consequence" },
            { sent: "We use **telescopes** to catch solar energy.", wrong: "telescopes", options: ["solar panels", "turbines", "dams", "batteries"], a: "solar panels" },
            { sent: "Sustainability **decreases** efficiency.", wrong: "decreases", options: ["increases", "pollutes", "abandons", "tackles"], a: "increases" },
            { sent: "The **fossil fuel** of a dodo was found.", wrong: "fossil fuel", options: ["fossil", "biodiversity", "footprint", "gas"], a: "fossil" },
            { sent: "We must **promote** coal use.", wrong: "promote", options: ["abandon", "implement", "protect", "tackle"], a: "abandon" },
            { sent: "**Recycling** is when a species dies out.", wrong: "Recycling", options: ["Extinction", "Evolution", "Adaptation", "Sustainability"], a: "Extinction" },
            { sent: "I missed class **due to** I didn't see the video.", wrong: "due to", options: ["so", "because of", "owing to", "result of"], a: "so" },
            { sent: "Wind power is **powered** by panels.", wrong: "powered", options: ["generated", "polluted", "abandoned", "discussed"], a: "generated" },
            { sent: "The **fauna** includes oak trees.", wrong: "fauna", options: ["flora", "biodiversity", "climate", "resources"], a: "flora" },
            { sent: "Greenhouse gases are **useful**.", wrong: "useful", options: ["dangerous", "sustainable", "renewable", "recycled"], a: "dangerous" },
            { sent: "Project failed **consequently** lack of budget.", wrong: "consequently", options: ["due to", "therefore", "thus", "so"], a: "due to" },
            { sent: "Reform the system to use **more** oil.", wrong: "more", options: ["less", "renewable", "sustainable", "innovative"], a: "less" },
            { sent: "Solar rays are **polluted** into energy.", wrong: "polluted", options: ["transformed", "abandoned", "destroyed", "discussed"], a: "transformed" },
            { sent: "The **turbine** of a person is CO2.", wrong: "turbine", options: ["carbon footprint", "biodiversity", "genetic code", "ancestry"], a: "carbon footprint" },
            { sent: "Hydropower is generated through the **sun**.", wrong: "sun", options: ["water", "wind", "biomass", "coal"], a: "water" },
            { sent: "**Sustainability** is the variety of life.", wrong: "Sustainability", options: ["Biodiversity", "Extinction", "Mutation", "Selection"], a: "Biodiversity" },
            { sent: "We must **recycle** endangered species.", wrong: "recycle", options: ["protect", "abandon", "generate", "implement"], a: "protect" },
            { sent: "Air is cleaner **so** lower gas use.", wrong: "so", options: ["due to", "therefore", "consequently", "thus"], a: "due to" },
            { sent: "El Hierro is a **traditional** island.", wrong: "traditional", options: ["sustainable", "ancient", "polluted", "industrial"], a: "sustainable" },
            { sent: "**Recycling** is produced using wood.", wrong: "Recycling", options: ["Paper", "Electricity", "Biomass", "Water"], a: "Paper" },
            { sent: "Greenhouse gas is **reduced**.", wrong: "reduced", options: ["increased", "biodiversity", "fauna", "flora"], a: "increased" },
            { sent: "We train AI **therefore** it solves problems.", wrong: "therefore", options: ["so that", "because of", "due to", "result"], a: "so that" },
            { sent: "A **dam** catches wind energy.", wrong: "dam", options: ["turbine", "panel", "biomass", "fossil"], a: "turbine" },
            { sent: "We must **abandon** reforestation.", wrong: "abandon", options: ["implement", "tackle", "destroy", "pollute"], a: "implement" },
            { sent: "The **genome** spins in the wind.", wrong: "genome", options: ["turbine", "model", "fossil", "blueprint"], a: "turbine" },
            { sent: "**Discrimination** is plants growing back.", wrong: "Discrimination", options: ["Regeneration", "Extinction", "Adaptation", "Biodiversity"], a: "Regeneration" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 ITEMS) ---
        9: [
            { audio: "How is the city of El Hierro powered?", options: ["It is powered by wind and hydropower.", "It is 300 years old.", "Because it is an island.", "No, thank you."], a: "It is powered by wind and hydropower." },
            { audio: "When were the solar panels installed on the roof?", options: ["They were installed last month.", "They are blue and shiny.", "In the science lab.", "Yes, they was."], a: "They were installed last month." },
            { audio: "Why must the old coal plants be abandoned?", options: ["Due to their high environmental impact.", "Because they are very small.", "I am a student.", "By the time he arrived."], a: "Due to their high environmental impact." },
            { audio: "Has the plan been implemented by the council yet?", options: ["Yes, it has already been put into effect.", "It is a colorful map.", "Since last Tuesday.", "No, he isn't."], a: "Yes, it has already been put into effect." },
            { audio: "Who is the environmental impact being analyzed by?", options: ["It is being analyzed by a group of experts.", "It is a hereditary trait.", "For millions of years.", "Already."], a: "It is being analyzed by a group of experts." },
            { audio: "What is energy produced from in a biomass plant?", options: ["It is produced using organic waste materials.", "It is produced in 1903.", "Through genetic studies.", "Yes, there has."], a: "It is produced using organic waste materials." },
            { audio: "Will the rainforest biodiversity be protected by law?", options: ["Yes, new regulations will be implemented soon.", "It is a very large fossil.", "For two hours.", "No, they hadn't."], a: "Yes, new regulations will be implemented soon." },
            { audio: "How can the carbon footprint be reduced effectively?", options: ["By using renewable energy and recycling more.", "It is a 100-million-year-old rock.", "With a high-tech microscope.", "Just."], a: "By using renewable energy and recycling more." },
            { audio: "Where were the data regarding pollution collected?", options: ["They were collected at several points along the river.", "They are similar to apes.", "On Thursday afternoon.", "Already."], a: "They were collected at several points along the river." },
            { audio: "Why was the renewable energy project delayed?", options: ["Due to budget issues and lack of proper funding.", "It is a humid climate.", "In the cafeteria.", "No, it am not."], a: "Due to budget issues and lack of proper funding." },
            { audio: "What is being discussed at the international summit?", options: ["The reduction of greenhouse gas emissions is being discussed.", "They already discovered the fossil.", "Because of natural selection.", "Yet."], a: "The reduction of greenhouse gas emissions is being discussed." },
            { audio: "How is recycled paper being produced in the factory?", options: ["It is being produced using 100% recycled wood fibers.", "It is a long journey.", "Since 2010.", "No, she doesn't."], a: "It is being produced using 100% recycled wood fibers." },
            { audio: "Will the local river be cleaned by volunteers next weekend?", options: ["Yes, a team has already been organized for the task.", "It is a tree of life.", "Millions of years.", "Yes, there has."], a: "Yes, a team has already been organized for the task." },
            { audio: "Were the trees in the neighborhood uprooted by the storm?", options: ["Yes, many were knocked down by the strong winds.", "They are from Ohio.", "The airplane is small.", "By 1903."], a: "Yes, many were knocked down by the strong winds." },
            { audio: "Why are the species in the Amazon being studied extensively?", options: ["To understand how to prevent their extinction.", "Because I had already finished my work.", "Laughter is healthy.", "No, I wasn't."], a: "To understand how to prevent their extinction." },
            { audio: "Can zero waste be achieved through international cooperation?", options: ["Yes, many experts believe it is possible by 2030.", "It is a detailed helix.", "By Friday.", "Just."], a: "Yes, many experts believe it is possible by 2030." },
            { audio: "Has much research been done on geothermal energy lately?", options: ["Yes, a lot of new data has been published recently.", "It is a natural resource.", "In the hallway.", "No, not yet."], a: "Yes, a lot of new data has been published recently." },
            { audio: "How is the air quality being improved in big cities?", options: ["It is being improved by reducing the use of petroleum.", "It is a healthy planet.", "On Saturdays.", "No, she doesn't."], a: "It is being improved by reducing the use of petroleum." },
            { audio: "Who were the first solar panels invented by?", options: ["They were developed by scientists in the mid-20th century.", "They are similar to apes.", "For six months.", "No, they hadn't."], a: "They were developed by scientists in the mid-20th century." },
            { audio: "Will the environmental impact of the project be analyzed?", options: ["Yes, it will be analyzed by a third-party organization.", "It favors the strongest.", "By Friday noon.", "Just."], a: "Yes, it will be analyzed by a third-party organization." },
            { audio: "Why are wind turbines being installed along the coast?", options: ["Because the wind is stronger and more consistent there.", "It is a blue textbook.", "At 7 o'clock.", "No, he isn't."], a: "Because the wind is stronger and more consistent there." },
            { audio: "What happens when greenhouse gases are released into the atmosphere?", options: ["Climate change is accelerated and temperatures rise.", "It is a hereditary trait.", "For millions of years.", "Since last Tuesday."], a: "Climate change is accelerated and temperatures rise." },
            { audio: "How is the water pressure being used in the new dam?", options: ["It is being used to spin turbines and generate power.", "It is a double-helix structure.", "In the science lab.", "No, they hasn't."], a: "It is being used to spin turbines and generate power." },
            { audio: "Has the use of coal been abandoned in your city?", options: ["Yes, it has been replaced by renewable energy sources.", "We already found the bone.", "Because of natural selection.", "Already."], a: "Yes, it has been replaced by renewable energy sources." },
            { audio: "Would the habitats have been destroyed if the law had existed?", options: ["No, they would have been protected by the government.", "It is a beautiful bird.", "Through genetic studies.", "No, thank you."], a: "No, they would have been protected by the government." },
            { audio: "Who are the reforestation workshops being attended by?", options: ["They are being attended by students from all grades.", "I am fifteen years old.", "In the museum.", "No, they hadn't."], a: "They are being attended by students from all grades." },
            { audio: "Why are solar rays being transformed into energy on the roof?", options: ["So that the building can be powered by green technology.", "It is a set of rules.", "For a healthy planet.", "By the time he arrived."], a: "So that the building can be powered by green technology." },
            { audio: "Has the local river been cleaned since the last inspection?", options: ["Yes, a lot of progress has been made recently.", "They are similar to apes.", "Since last month.", "Already."], a: "Yes, a lot of progress has been made recently." },
            { audio: "What is prioritized by the GreenFuture startup?", options: ["The transformation of waste into furniture is prioritized.", "It is a history book.", "In Brazil.", "No, they hadn't."], a: "The transformation of waste into furniture is prioritized." },
            { audio: "How long has the Amazon fauna been protected by activists?", options: ["It has been protected for over fifty years.", "It is a rainforest.", "With a microscope.", "Yes, it is."], a: "It has been protected for over fifty years." },
            { audio: "Were the new environmental laws discussed at the meeting?", options: ["Yes, they were seriously debated by the council members.", "She is an engineer.", "In the library.", "No, it am not."], a: "Yes, they were seriously debated by the council members." },
            { audio: "Why is sustainability so important for businesses now?", options: ["Because consumers prefer environmentally friendly companies.", "They already discovered the fossil.", "Because of natural selection.", "Yet."], a: "Because consumers prefer environmentally friendly companies." },
            { audio: "Is energy being produced using geothermal heat in that area?", options: ["Yes, the heat from the Earth is being utilized.", "They are extinct now.", "Already.", "No, they hasn't."], a: "Yes, the heat from the Earth is being utilized." },
            { audio: "How many hectares of forest will have been saved by 2030?", options: ["We hope that thousands of hectares will have been recovered.", "It is over 100 million years old.", "With a high-tech microscope.", "No, they hadn't."], a: "We hope that thousands of hectares will have been recovered." },
            { audio: "Why are fossil fuels considered dangerous?", options: ["Because their use contributes significantly to global warming.", "It is a hereditary trait.", "For two weeks.", "Already."], a: "Because their use contributes significantly to global warming." },
            { audio: "When will the report on biodiversity have been finished?", options: ["It will have been finished by the end of next week.", "It is a set of rules.", "In the science museum.", "No, they hadn't."], a: "It will have been finished by the end of next week." },
            { audio: "How is the environmental impact of the dam being monitored?", options: ["It is being monitored through constant satellite analysis.", "It is a double-helix structure.", "Millions of years ago.", "Yes, I have."], a: "It is being monitored through constant satellite analysis." },
            { audio: "Who was the first green energy project implemented by?", options: ["It was implemented by a small island community.", "It is a history book.", "Because of the mutation.", "Yet."], a: "It was implemented by a small island community." },
            { audio: "Will more wind turbines be built along the coast next year?", options: ["Yes, the plan has already been approved by the government.", "I already found the bone.", "On Thursday afternoon.", "Already."], a: "Yes, the plan has already been approved by the government." },
            { audio: "Has a zero-carbon future ever been tried before?", options: ["Yes, successful models have been implemented in small regions.", "It is a humid climate.", "In the cafeteria.", "No, they hadn't."], a: "Yes, successful models have been implemented in small regions." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 ITEMS) ---
        10: [
            { audio: "The project was successful due to the innovation.", sent: "The project ___ due to the ___.", blanks: ["was successful", "innovation"] },
            { audio: "Electricity is generated through solar power.", sent: "Electricity ___ through ___.", blanks: ["is generated", "solar power"] },
            { audio: "The turbines were installed on the coast last year.", sent: "The turbines ___ on the ___ last year.", blanks: ["were installed", "coast"] },
            { audio: "Renewable energy is being seriously discussed at the UN.", sent: "Renewable energy ___ seriously ___ at the UN.", blanks: ["is being", "discussed"] },
            { audio: "Old coal plants must be abandoned due to fossil fuels.", sent: "Old coal plants ___ abandoned ___ fossil fuels.", blanks: ["must be", "due to"] },
            { audio: "Climate change has been accelerated by emissions.", sent: "Climate change ___ accelerated by ___.", blanks: ["has been", "emissions"] },
            { audio: "A solution has to be implemented immediately.", sent: "A solution ___ be implemented ___.", blanks: ["has to", "immediately"] },
            { audio: "Energy is produced using organic waste.", sent: "Energy is ___ organic ___.", blanks: ["produced using", "waste"] },
            { audio: "Our carbon footprint will be reduced significantly.", sent: "Our ___ will be ___ significantly.", blanks: ["carbon footprint", "reduced"] },
            { audio: "Our fauna will be protected if we act now.", sent: "Our fauna ___ protected if we ___ now.", blanks: ["will be", "act"] },
            { audio: "Solar panels have been installed in the neighborhood.", sent: "Solar panels ___ installed in the ___.", blanks: ["have been", "neighborhood"] },
            { audio: "Reliance on oil will diminish as a result of green tech.", sent: "Reliance on oil ___ as a ___ of green tech.", blanks: ["will diminish", "result"] },
            { audio: "Environmental impact is being analyzed by experts.", sent: "Environmental impact ___ analyzed by ___.", blanks: ["is being", "experts"] },
            { audio: "Data were collected by the research team yesterday.", sent: "Data ___ by the research ___ yesterday.", blanks: ["were collected", "team"] },
            { audio: "The best system has been created to solve problems.", sent: "The best system ___ created to ___ problems.", blanks: ["has been", "solve"] },
            { audio: "The forest will be protected by new laws.", sent: "The forest ___ protected by ___ laws.", blanks: ["will be", "new"] },
            { audio: "The project was delayed due to budget issues.", sent: "The project ___ due to ___ issues.", blanks: ["was delayed", "budget"] },
            { audio: "Thousands of tons of waste are being transformed into furniture.", sent: "Thousands of tons of waste ___ transformed ___ furniture.", blanks: ["are being", "into"] },
            { audio: "Sustainability must be prioritized by every business.", sent: "Sustainability ___ prioritized by ___ business.", blanks: ["must be", "every"] },
            { audio: "The system had been explored before the launch.", sent: "The system ___ explored before the ___.", blanks: ["had been", "launch"] },
            { audio: "Windmills generate clean electricity.", sent: "Windmills ___ clean ___.", blanks: ["generate", "electricity"] },
            { audio: "The ocean is polluted by plastic waste.", sent: "The ocean ___ by ___ waste.", blanks: ["is polluted", "plastic"] },
            { audio: "Solar power works even on cloudy days.", sent: "Solar power works ___ on ___ days.", blanks: ["even", "cloudy"] },
            { audio: "The Amazon forest must be defended by activists.", sent: "The Amazon forest ___ defended by ___.", blanks: ["must be", "activists"] },
            { audio: "New turbines were being built all year.", sent: "New turbines ___ built all ___.", blanks: ["were being", "year"] },
            { audio: "Recycling starts in your kitchen.", sent: "Recycling ___ in your ___.", blanks: ["starts", "kitchen"] },
            { audio: "The law has to be implemented soon.", sent: "The law ___ be implemented ___.", blanks: ["has to", "soon"] },
            { audio: "Paper is produced using recycled wood.", sent: "Paper is ___ recycled ___.", blanks: ["produced using", "wood"] },
            { audio: "The river is being cleaned by volunteers.", sent: "The river ___ cleaned by ___.", blanks: ["is being", "volunteers"] },
            { audio: "We must recycle; consequently, we save money.", sent: "We must recycle; ___, we ___ money.", blanks: ["consequently", "save"] },
            { audio: "The air is cleaner as a result of lower gasoline use.", sent: "The air ___ as a ___ of lower gasoline use.", blanks: ["is cleaner", "result"] },
            { audio: "Climate change has been accelerated by human activity.", sent: "Climate change ___ accelerated by ___ activity.", blanks: ["has been", "human"] },
            { audio: "The factory uses virtual reality to train workers.", sent: "The factory ___ virtual reality to ___ workers.", blanks: ["uses", "train"] },
            { audio: "Hydropower is common in Brazil due to rivers.", sent: "Hydropower ___ common in Brazil ___ rivers.", blanks: ["is", "due to"] },
            { audio: "The turbines were broken; therefore, the city lost power.", sent: "The turbines ___; ___, the city lost power.", blanks: ["were broken", "therefore"] },
            { audio: "The fauna must be protected by all of us.", sent: "The fauna ___ protected by ___ of us.", blanks: ["must be", "all"] },
            { audio: "Solar rays are transformed into energy.", sent: "Solar rays ___ into ___.", blanks: ["are transformed", "energy"] },
            { audio: "We use science so that we solve problems.", sent: "We use science ___ that we ___ problems.", blanks: ["so", "solve"] },
            { audio: "Innovation is key to a sustainable future.", sent: "Innovation ___ key to a ___ future.", blanks: ["is", "sustainable"] },
            { audio: "Serious action must be taken immediately.", sent: "Serious action ___ taken ___.", blanks: ["must be", "immediately"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE (10 ITEMS) ---
        11: [
            {
                title: "The Wind Power Project",
                lines: [
                    { speaker: "Albert", text: "The new wind farm ___ last week.", options: ["was finally completed", "is completing"], a: "was finally completed" },
                    { speaker: "Celine", text: "Yes! The turbines ___ by an international team.", options: ["were installed", "are installing"], a: "were installed" },
                    { speaker: "Albert", text: "___ this project, our reliance on fossil fuels will decrease.", options: ["Due to", "Therefore"], a: "Due to" },
                    { speaker: "Celine", text: "Renewable energy ___ by the council.", options: ["is being discussed", "discusses"], a: "is being discussed" },
                    { speaker: "Albert", text: "I hope more projects ___ soon.", options: ["will be implemented", "were implemented"], a: "will be implemented" }
                ]
            },
            {
                title: "Innovation Fair",
                lines: [
                    { speaker: "Sarah", text: "Is it true that the school ___ by solar energy now?", options: ["is powered", "powers"], a: "is powered" },
                    { speaker: "Mike", text: "Yes, the panels ___ on the roof recently.", options: ["have been placed", "were placing"], a: "have been placed" },
                    { speaker: "Sarah", text: "___ of this change, our carbon footprint has reduced.", options: ["As a result", "Because of"], a: "As a result" },
                    { speaker: "Mike", text: "Organic waste ___ into biomass.", options: ["is being transformed", "transformed"], a: "is being transformed" },
                    { speaker: "Sarah", text: "I wonder if these methods ___ by every school.", options: ["can be achieved", "are achieved"], a: "can be achieved" }
                ]
            },
            {
                title: "Climate Change and Action",
                lines: [
                    { speaker: "Teacher", text: "Why has climate change ___ in the last century?", options: ["been accelerated", "accelerated"], a: "been accelerated" },
                    { speaker: "Albert", text: "It’s mainly ___ greenhouse gas emissions.", options: ["due to", "therefore"], a: "due to" },
                    { speaker: "Teacher", text: "Therefore, a global solution ___ immediately.", options: ["must be implemented", "must implement"], a: "must be implemented" },
                    { speaker: "Celine", text: "Is the local fauna ___ by rising temperatures?", options: ["being affected", "affected"], a: "being affected" },
                    { speaker: "Teacher", text: "Yes. Many habitats ___ already.", options: ["have been destroyed", "were destroyed"], a: "have been destroyed" }
                ]
            },
            {
                title: "Water Conservation",
                lines: [
                    { speaker: "John", text: "The new dam ___ to solve the water crisis.", options: ["was built", "is building"], a: "was built" },
                    { speaker: "Mary", text: "Is the energy ___ through waterfalls?", options: ["generated", "generating"], a: "generated" },
                    { speaker: "John", text: "Yes. ___, the water flow must be monitored.", options: ["Consequently", "Because of"], a: "Consequently" },
                    { speaker: "Mary", text: "I believe water ___ by everyone.", options: ["should be conserved", "should conserve"], a: "should be conserved" },
                    { speaker: "John", text: "If better recycling habits ___, we will save resources.", options: ["are adopted", "were adopting"], a: "are adopted" }
                ]
            },
            {
                title: "The GreenFuture Startup",
                lines: [
                    { speaker: "Albert", text: "This furniture ___ using 100% recycled plastic.", options: ["is produced", "was produced"], a: "is produced" },
                    { speaker: "Celine", text: "This startup ___ to tackle ocean pollution.", options: ["was created", "is creating"], a: "was created" },
                    { speaker: "Albert", text: "___, they received an innovation award.", options: ["For this reason", "Due to"], a: "For this reason" },
                    { speaker: "Celine", text: "Their methods ___ every year.", options: ["are being improved", "improved"], a: "are being improved" },
                    { speaker: "Albert", text: "Innovation like this ___ by the media.", options: ["must be promoted", "must promote"], a: "must be promoted" }
                ]
            },
            {
                title: "The Reforestation Project",
                lines: [
                    { speaker: "Sarah", text: "Thousands of trees ___ in the Araripe Basin.", options: ["were planted", "are planting"], a: "were planted" },
                    { speaker: "John", text: "Was the project ___ by the government?", options: ["funded", "funding"], a: "funded" },
                    { speaker: "Sarah", text: "Yes. ___ the investment, the forest is regenerating.", options: ["As a result of", "Because"], a: "As a result of" },
                    { speaker: "John", text: "___, the endangered fauna will find a home.", options: ["Therefore", "Due to"], a: "Therefore" },
                    { speaker: "Sarah", text: "I hope the new laws ___ by companies.", options: ["will be respected", "were respected"], a: "will be respected" }
                ]
            },
            {
                title: "Geothermal Energy",
                lines: [
                    { speaker: "Expert", text: "Energy ___ from the heat inside the Earth.", options: ["is generated", "generates"], a: "is generated" },
                    { speaker: "Student", text: "Is it ___ more stable than solar power?", options: ["considered", "considering"], a: "considered" },
                    { speaker: "Expert", text: "Yes. ___, the initial costs are very high.", options: ["However", "Consequently"], a: "However" },
                    { speaker: "Student", text: "___ the impact of fossil fuels, is it worth it?", options: ["Due to", "So"], a: "Due to" },
                    { speaker: "Expert", text: "Absolutely. A new plant ___ right now.", options: ["is being constructed", "constructed"], a: "is being constructed" }
                ]
            },
            {
                title: "Industrial Pollution",
                lines: [
                    { speaker: "Celine", text: "The local river ___ by nearby factories.", options: ["has been polluted", "polluted"], a: "has been polluted" },
                    { speaker: "Albert", text: "___, the fish population has diminished.", options: ["Consequently", "Because of"], a: "Consequently" },
                    { speaker: "Celine", text: "The problem ___ if regulations are stricter.", options: ["can be solved", "can solve"], a: "can be solved" },
                    { speaker: "Albert", text: "Action ___ by authorities immediately.", options: ["must be taken", "must take"], a: "must be taken" },
                    { speaker: "Celine", text: "Our environment ___ at all costs.", options: ["must be protected", "must protect"], a: "must be protected" }
                ]
            },
            {
                title: "Sustainable Transport",
                lines: [
                    { speaker: "A", text: "Electric buses ___ in our city next year.", options: ["will be introduced", "are introducing"], a: "will be introduced" },
                    { speaker: "B", text: "Are they ___ by solar energy?", options: ["powered", "powering"], a: "powered" },
                    { speaker: "A", text: "Yes. ___, air pollution will decrease.", options: ["Consequently", "Due to"], a: "Consequently" },
                    { speaker: "B", text: "Gasoline cars ___ from the center eventually.", options: ["will be banned", "banned"], a: "will be banned" },
                    { speaker: "A", text: "This change ___ by everyone.", options: ["is needed", "needs"], a: "is needed" }
                ]
            },
            {
                title: "Community Garden",
                lines: [
                    { speaker: "A", text: "A new garden ___ in the park.", options: ["is being created", "creating"], a: "is being created" },
                    { speaker: "B", text: "Will food ___ there?", options: ["be grown", "grow"], a: "be grown" },
                    { speaker: "A", text: "Yes. Organic waste ___ as fertilizer.", options: ["will be used", "will use"], a: "will be used" },
                    { speaker: "B", text: "___, we can eat healthy food.", options: ["As a result", "Because of"], a: "As a result" },
                    { speaker: "A", text: "The project ___ by local volunteers.", options: ["is supported", "supports"], a: "is supported" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER (10 ITEMS) ---
        12: [
            {
                title: "The Success of El Hierro",
                text: "El Hierro is a model for sustainability. Electricity is generated through wind turbines and hydropower. When wind is strong, excess energy pumps water into a reservoir. Due to this system, petroleum use was abandoned. Therefore, the carbon footprint has been reduced significantly. This model is being discussed by leaders at the UN.",
                questions: [
                    { q: "How is electricity generated?", options: ["Through wind and hydropower.", "By burning coal.", "By nuclear energy."], a: "Through wind and hydropower." },
                    { q: "What happens to excess energy?", options: ["Used to pump water.", "It is lost.", "Sold to others."], a: "Used to pump water." },
                    { q: "What was the consequence?", options: ["Petroleum was abandoned.", "Pollution increased.", "Turbines broke."], a: "Petroleum was abandoned." },
                    { q: "What happened to the carbon footprint?", options: ["Reduced significantly.", "Increased.", "Stayed same."], a: "Reduced significantly." },
                    { q: "Why is it discussed at the UN?", options: ["It's a successful model.", "It failed.", "It is expensive."], a: "It's a successful model." }
                ]
            },
            {
                title: "Challenges of Greenhouse Gases",
                text: "Climate change has been accelerated by human activity. Evidence shows temperatures rising due to greenhouse gases like CO2. These come from factories and fossil fuels. As a result, habitats are being destroyed. Flora and fauna are being forced to adapt. Renewable energy must be prioritized to ensure a future.",
                questions: [
                    { q: "What accelerated climate change?", options: ["Human activity and emissions.", "The sun.", "Volcanoes."], a: "Human activity and emissions." },
                    { q: "What are primary sources of CO2?", options: ["Factories and fossil fuels.", "Trees.", "Wind."], a: "Factories and fossil fuels." },
                    { q: "What is happening to habitats?", options: ["They are being destroyed.", "They are growing.", "They are safe."], a: "They are being destroyed." },
                    { q: "What is the consequence if no action is taken?", options: ["Impact will be irreversible.", "Planet will be safer.", "Nothing."], a: "Impact will be irreversible." },
                    { q: "What must be prioritized?", options: ["Renewable energy.", "Petroleum.", "Coal."], a: "Renewable energy." }
                ]
            },
            {
                title: "GreenFuture Startup",
                text: "GreenFuture was created to solve urban waste. Furniture is produced using 100% recycled plastic. Waste is collected from rivers. Materials are transformed into high-quality items. Owing to efficiency, the carbon footprint is low. Sustainability must be integrated into business. The model is being implemented in other cities.",
                questions: [
                    { q: "Why was GreenFuture created?", options: ["To solve waste problems.", "To sell wood.", "To build houses."], a: "To solve waste problems." },
                    { q: "How are products made?", options: ["Using 100% recycled plastic.", "Using new wood.", "Using metal."], a: "Using 100% recycled plastic." },
                    { q: "Where does waste come from?", options: ["Rivers and beaches.", "Mines.", "Space."], a: "Rivers and beaches." },
                    { q: "What is the environmental status?", options: ["Low carbon footprint.", "High pollution.", "No impact."], a: "Low carbon footprint." },
                    { q: "What is happening now?", options: ["Model is being implemented elsewhere.", "Company closing.", "Stopping production."], a: "Model is being implemented elsewhere." }
                ]
            },
            {
                title: "Hydropower in Brazil",
                text: "Hydropower is generated due to rivers and waterfalls. Dams were built in the 20th century. Environmental impact is being analyzed. Forests were flooded and fauna displaced. Therefore, new laws have to be implemented. Modern turbines are being installed to improve efficiency.",
                questions: [
                    { q: "Why is hydropower common?", options: ["Due to rivers and waterfalls.", "Due to wind.", "Due to coal."], a: "Due to rivers and waterfalls." },
                    { q: "When were dams built?", options: ["20th century.", "Last year.", "19th century."], a: "20th century." },
                    { q: "What was a negative impact?", options: ["Forests flooded and fauna displaced.", "Clean air.", "More land."], a: "Forests flooded and fauna displaced." },
                    { q: "Why are new laws needed?", options: ["Balance energy and conservation.", "Stop energy.", "Build more dams."], a: "Balance energy and conservation." },
                    { q: "Purpose of new turbines?", options: ["Improve efficiency.", "Look good.", "Use more water."], a: "Improve efficiency." }
                ]
            },
            {
                title: "Biomass and Waste",
                text: "Biomass is produced using organic waste. Plants have been installed in rural areas. Energy is generated through decomposition. This reduces waste sent to landfills. Furthermore, it diminishes reliance on fossil fuels. This method has been tried in Europe. It provides a sustainable solution.",
                questions: [
                    { q: "What is used for biomass?", options: ["Organic waste.", "Coal.", "Wind."], a: "Organic waste." },
                    { q: "Where are plants installed?", options: ["Rural communities.", "Cities.", "Deserts."], a: "Rural communities." },
                    { q: "Why is it beneficial?", options: ["Reduces landfill waste.", "Creates plastic.", "Uses oil."], a: "Reduces landfill waste." },
                    { q: "What is another benefit?", options: ["Diminishes fossil fuel reliance.", "Pollutes air.", "Expensive."], a: "Diminishes fossil fuel reliance." },
                    { q: "Where was it tried?", options: ["Europe.", "Mars.", "Nowhere."], a: "Europe." }
                ]
            },
            {
                title: "Protecting Amazon Biodiversity",
                text: "The Amazon is a vital lung. Fauna and flora are threatened by illegal activities. Trees are destroyed by logging. As a result, species are pushed to extinction. Scientists believe the forest can regenerate if conservation measures are taken. Impact is being monitored by satellites. Resources must be defended.",
                questions: [
                    { q: "What threatens the Amazon?", options: ["Illegal activities.", "Rain.", "Tourists."], a: "Illegal activities." },
                    { q: "What is the consequence of logging?", options: ["Species pushed to extinction.", "More trees.", "Better air."], a: "Species pushed to extinction." },
                    { q: "Can the forest regenerate?", options: ["Yes, if measures are taken.", "No, never.", "Maybe."], a: "Yes, if measures are taken." },
                    { q: "How is it monitored?", options: ["Using satellite technology.", "By foot.", "By plane."], a: "Using satellite technology." },
                    { q: "Why defend resources?", options: ["Maintain climate balance.", "Make money.", "Build cities."], a: "Maintain climate balance." }
                ]
            },
            {
                title: "Solar Power Initiatives",
                text: "Solar power is growing. Panels were installed on roofs last year. Energy is produced by sun rays transformed by cells. Cost has been reduced by 80%. Therefore, it is attractive for families. Excess energy is sold to the grid. Households earn money while being sustainable.",
                questions: [
                    { q: "What happened last year?", options: ["Panels installed on roofs.", "Sun stopped.", "Prices went up."], a: "Panels installed on roofs." },
                    { q: "How is energy created?", options: ["Sun rays transformed by cells.", "Wind.", "Coal."], a: "Sun rays transformed by cells." },
                    { q: "Why is it attractive?", options: ["Cost reduced by 80%.", "It is expensive.", "It is hard."], a: "Cost reduced by 80%." },
                    { q: "What happens to excess energy?", options: ["Sold to the grid.", "Lost.", "Stored in boxes."], a: "Sold to the grid." },
                    { q: "Why is it a win-win?", options: ["Save money and protect planet.", "Win a game.", "Get a trophy."], a: "Save money and protect planet." }
                ]
            },
            {
                title: "Away from Fossil Fuels",
                text: "Fossil fuel era is ending. World was powered by coal. Environmental cost is being analyzed. Pollution and warming are consequences. Old plants are being abandoned or transformed. Transition is difficult due to reliance on oil. Nevertheless, policies are being implemented to encourage green energy.",
                questions: [
                    { q: "What powered the world?", options: ["Coal and petroleum.", "Sun.", "Wind."], a: "Coal and petroleum." },
                    { q: "What are the consequences?", options: ["Pollution and global warming.", "Clean air.", "Health."], a: "Pollution and global warming." },
                    { q: "What is happening to plants?", options: ["Abandoned or transformed.", "Built new.", "Expanded."], a: "Abandoned or transformed." },
                    { q: "Why is transition difficult?", options: ["Reliance on oil.", "No sun.", "No wind."], a: "Reliance on oil." },
                    { q: "How can we achieve a cleaner world?", options: ["Support green policies.", "Use more oil.", "Do nothing."], a: "Support green policies." }
                ]
            },
            {
                title: "The Plastic Problem",
                text: "Plastic pollution is a crisis. Oceans are being filled with waste. Animals are harmed by plastic. It is estimated that plastic takes centuries to decompose. If action isn't taken, oceans will be dead. New cleanup technologies are being tested. We must reduce usage immediately.",
                questions: [
                    { q: "What is filling oceans?", options: ["Plastic waste.", "Fish.", "Sand."], a: "Plastic waste." },
                    { q: "What happens to animals?", options: ["They are harmed.", "They eat it.", "They like it."], a: "They are harmed." },
                    { q: "How long to decompose?", options: ["Centuries.", "Days.", "Weeks."], a: "Centuries." },
                    { q: "What is being tested?", options: ["Cleanup technologies.", "More plastic.", "Boats."], a: "Cleanup technologies." },
                    { q: "What must we do?", options: ["Reduce usage.", "Use more.", "Ignore it."], a: "Reduce usage." }
                ]
            },
            {
                title: "Wind Energy Efficiency",
                text: "Wind energy is clean. Turbines are placed in windy areas. Energy is generated when blades spin. Technology is being improved to make them quieter. Birds can be affected, so locations are chosen carefully. It is a key part of the future.",
                questions: [
                    { q: "Where are turbines placed?", options: ["Windy areas.", "Indoors.", "Underwater."], a: "Windy areas." },
                    { q: "How is energy generated?", options: ["Blades spin.", "Sun shines.", "Water flows."], a: "Blades spin." },
                    { q: "What is being improved?", options: ["Making them quieter.", "Making them louder.", "Removing them."], a: "Making them quieter." },
                    { q: "Why choose locations carefully?", options: ["To protect birds.", "For fun.", "To hide them."], a: "To protect birds." },
                    { q: "Is it part of the future?", options: ["Yes, key part.", "No.", "Maybe."], a: "Yes, key part." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER CONTEXT (10 ITEMS) ---
        13: [
            {
                title: "The El Hierro Model",
                audio: "El Hierro proves zero-carbon is possible. Project integrated wind and water. Most electricity is generated by renewables. Petroleum was abandoned. This model is being discussed globally. Similar systems will be implemented elsewhere.",
                questions: [
                    { q: "What was the project purpose?", options: ["Integrate wind and water.", "Burn coal.", "Build roads."], a: "Integrate wind and water." },
                    { q: "How is electricity generated?", options: ["Renewable sources.", "Nuclear.", "Oil."], a: "Renewable sources." },
                    { q: "What was a consequence?", options: ["Petroleum abandoned.", "More pollution.", "High costs."], a: "Petroleum abandoned." },
                    { q: "Who discusses this?", options: ["Environmentalists globally.", "Nobody.", "Local kids."], a: "Environmentalists globally." },
                    { q: "What is predicted?", options: ["Similar systems implemented.", "More oil.", "Failure."], a: "Similar systems implemented." }
                ]
            },
            {
                title: "Industrial Impact",
                audio: "Earth's climate has been affected by emissions. CO2 levels have been accelerated by factories. Habitats are being destroyed. Fauna is forced to migrate. If habits aren't changed, damage will be irreversible. Regulations must be taken.",
                questions: [
                    { q: "What affected the climate?", options: ["Emissions.", "Trees.", "Rain."], a: "Emissions." },
                    { q: "What happened to CO2?", options: ["Accelerated.", "Decreased.", "Stopped."], a: "Accelerated." },
                    { q: "Why are habitats destroyed?", options: ["Rising temperatures.", "Planting trees.", "Cold."], a: "Rising temperatures." },
                    { q: "What is happening to fauna?", options: ["Forced to migrate.", "Staying put.", "Growing."], a: "Forced to migrate." },
                    { q: "What is necessary?", options: ["Regulations.", "More factories.", "Nothing."], a: "Regulations." }
                ]
            },
            {
                title: "GreenFuture Success",
                audio: "GreenFuture tackles plastic crisis. Waste is transformed into furniture. 3D printing is used. Carbon footprint has been reduced to zero. Factory is powered by wind. Investment is being sought for expansion.",
                questions: [
                    { q: "Why created?", options: ["Solution to plastic crisis.", "Make money.", "Sell oil."], a: "Solution to plastic crisis." },
                    { q: "What happens to waste?", options: ["Transformed into furniture.", "Buried.", "Burned."], a: "Transformed into furniture." },
                    { q: "How are products made?", options: ["3D printing.", "By hand.", "Machines."], a: "3D printing." },
                    { q: "Why low footprint?", options: ["Powered by wind.", "No power.", "Solar."], a: "Powered by wind." },
                    { q: "Plan for next year?", options: ["Expand operations.", "Close.", "Stop."], a: "Expand operations." }
                ]
            },
            {
                title: "Hydropower in South America",
                audio: "Hydropower is vital. Dams were built recently. Impact is debated. Flora was lost. New conservation programs have been implemented. Modern turbines will be installed to improve efficiency without damage.",
                questions: [
                    { q: "When were dams built?", options: ["Last fifty years.", "Yesterday.", "Tomorrow."], a: "Last fifty years." },
                    { q: "Status of debate?", options: ["Still debated.", "Finished.", "Unknown."], a: "Still debated." },
                    { q: "What happened to flora?", options: ["Lost.", "Grew.", "Saved."], a: "Lost." },
                    { q: "What protects fauna?", options: ["Conservation programs.", "Nothing.", "Fences."], a: "Conservation programs." },
                    { q: "How to improve efficiency?", options: ["Install modern turbines.", "Build more dams.", "Use coal."], a: "Install modern turbines." }
                ]
            },
            {
                title: "Biomass Sustainability",
                audio: "Biomass is produced from organic waste. Plant was installed last month. Energy is generated by decomposition. Reduces reliance on fossil fuels. Carbon footprint diminished. Project is a success. More systems will be implemented.",
                questions: [
                    { q: "Source of biomass?", options: ["Organic waste.", "Sun.", "Wind."], a: "Organic waste." },
                    { q: "Reliance on fossil fuels?", options: ["Reduced.", "Increased.", "Same."], a: "Reduced." },
                    { q: "Perception of project?", options: ["Success.", "Failure.", "Bad."], a: "Success." },
                    { q: "Plan for rural areas?", options: ["Implement systems.", "Abandon them.", "Use oil."], a: "Implement systems." },
                    { q: "When transition achieved?", options: ["By 2030.", "Never.", "2050."], a: "By 2030." }
                ]
            },
            {
                title: "Reforestation Project",
                audio: "Reforestation is promoted. Initiative launched in Brazil. Trees were planted. Soil is regenerating. Life is being seen. Project will be expanded. Biodiversity will be recovered.",
                questions: [
                    { q: "Why promoted?", options: ["Tackle climate crisis.", "Make paper.", "Build houses."], a: "Tackle climate crisis." },
                    { q: "What happened last year?", options: ["Initiative launched.", "Fire.", "Nothing."], a: "Initiative launched." },
                    { q: "Why plant trees?", options: ["Replace destroyed ones.", "Sell wood.", "Look good."], a: "Replace destroyed ones." },
                    { q: "State of soil?", options: ["Regenerating.", "Dying.", "Dry."], a: "Regenerating." },
                    { q: "Long term goal?", options: ["Recover biodiversity.", "Sell land.", "Farm."], a: "Recover biodiversity." }
                ]
            },
            {
                title: "Geothermal Breakthrough",
                audio: "Geothermal is stable. Homes heated by Earth's heat. Country was dependent on coal. Impact reduced. New plants designed for industry. Model studied by nations prioritizing sustainability.",
                questions: [
                    { q: "Why stable?", options: ["Not affected by weather.", "Cheap.", "Windy."], a: "Not affected by weather." },
                    { q: "Previous dependency?", options: ["Imported coal.", "Solar.", "Wind."], a: "Imported coal." },
                    { q: "Environmental impact?", options: ["Reduced.", "High.", "Bad."], a: "Reduced." },
                    { q: "What is being designed?", options: ["Plants for industry.", "Houses.", "Cars."], a: "Plants for industry." },
                    { q: "Why study this model?", options: ["Prioritize sustainability.", "Buy coal.", "Travel."], a: "Prioritize sustainability." }
                ]
            },
            {
                title: "Clean Air Initiative",
                audio: "Air quality improved. Diesel buses replaced by electric. Solar panels installed. Emissions diminished by 25%. Impact analyzed by health department. Respiratory problems will be reduced. Green spaces will be created.",
                questions: [
                    { q: "Why improved?", options: ["Green measures.", "Rain.", "Wind."], a: "Green measures." },
                    { q: "Transport change?", options: ["Buses replaced.", "Cars banned.", "Trains stopped."], a: "Buses replaced." },
                    { q: "Emissions reduction?", options: ["25%.", "10%.", "50%."], a: "25%." },
                    { q: "Who analyzes impact?", options: ["Health department.", "Police.", "Teachers."], a: "Health department." },
                    { q: "Future action?", options: ["Create green spaces.", "Build roads.", "Sell cars."], a: "Create green spaces." }
                ]
            },
            {
                title: "The Electric Vehicle Shift",
                audio: "Cars are changing. Electric vehicles are being produced. Batteries are improved. Charging stations are installed. Gasoline cars will be banned. Air will be cleaner. This shift is supported by governments.",
                questions: [
                    { q: "What is being produced?", options: ["Electric vehicles.", "Diesel cars.", "Bicycles."], a: "Electric vehicles." },
                    { q: "What is improved?", options: ["Batteries.", "Tires.", "Windows."], a: "Batteries." },
                    { q: "What will happen to gas cars?", options: ["Banned.", "Sold.", "Kept."], a: "Banned." },
                    { q: "Result for air?", options: ["Cleaner.", "Dirtier.", "Same."], a: "Cleaner." },
                    { q: "Who supports this?", options: ["Governments.", "Nobody.", "Oil companies."], a: "Governments." }
                ]
            },
            {
                title: "Sustainable Fashion",
                audio: "Fashion industry is changing. Clothes are made from recycled materials. Water is saved. Chemicals are banned. Workers are protected. Consumers are choosing green brands. This trend is growing.",
                questions: [
                    { q: "What are clothes made from?", options: ["Recycled materials.", "New cotton.", "Plastic."], a: "Recycled materials." },
                    { q: "What is saved?", options: ["Water.", "Money.", "Time."], a: "Water." },
                    { q: "What happened to chemicals?", options: ["Banned.", "Used.", "Sold."], a: "Banned." },
                    { q: "Who chooses brands?", options: ["Consumers.", "Factories.", "Robots."], a: "Consumers." },
                    { q: "Is trend growing?", options: ["Yes.", "No.", "Maybe."], a: "Yes." }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT (10 ITEMS) ---
        14: [
            {
                title: "Sustainable Energy",
                text: "The island [1] (is powered / powers) by wind. Turbines [2] (were installed / install) last year. Due to this, fossil fuels [3] (were abandoned / abandon). As a result, the environment [4] (is being protected / protects). This model [5] (is discussed / discusses) globally.",
                answers: ["is powered", "were installed", "were abandoned", "is being protected", "is discussed"]
            },
            {
                title: "Tackling Climate Change",
                text: "Climate change [1] (has been accelerated / accelerated) by emissions. Therefore, solutions [2] (must be implemented / implement). Renewable energy [3] (is being discussed / discusses) now. If prioritized, our future [4] (will be / is) safer. Habitats [5] (are being destroyed / destroy).",
                answers: ["has been accelerated", "must be implemented", "is being discussed", "will be", "are being destroyed"]
            },
            {
                title: "Biomass Project",
                text: "Energy [1] (is produced / produces) using waste. This [2] (is achieved / achieves) through biomass. Consequently, footprint [3] (has been reduced / reduced). Project [4] (can be achieved / achieves) elsewhere. Waste [5] (is transformed / transforms).",
                answers: ["is produced", "is achieved", "has been reduced", "can be achieved", "is transformed"]
            },
            {
                title: "Amazonian Conservation",
                text: "Fauna [1] (must be defended / defend) by us. Because of deforestation, habitats [2] (have been destroyed / destroy). Impact [3] (is being monitored / monitors). If laws [4] (are implemented / implement), forest regenerates. Nature [5] (is protected / protects).",
                answers: ["must be defended", "have been destroyed", "is being monitored", "are implemented", "is protected"]
            },
            {
                title: "Green Tech",
                text: "Innovation [1] (is considered / considers) key. New tech [2] (is created / creates) daily. Owing to funding, panels [3] (will be installed / install). Advancements [4] (must be promoted / promote). Solutions [5] (are found / find).",
                answers: ["is considered", "is created", "will be installed", "must be promoted", "are found"]
            },
            {
                title: "Industrial Reform",
                text: "Plants [1] (were abandoned / abandon) recently. They [2] (are being transformed / transform) now. As a result, air [3] (has been improved / improves). Measures [4] (must be taken / take) for health. Pollution [5] (is reduced / reduces).",
                answers: ["were abandoned", "are being transformed", "has been improved", "must be taken", "is reduced"]
            },
            {
                title: "Water and Power",
                text: "Hydropower [1] (is generated / generates) by water. Dams [2] (were built / built) in past. However, ecosystems [3] (were affected / affected). Efficiency [4] (is being improved / improves) now. Nature [5] (is preserved / preserves).",
                answers: ["is generated", "were built", "were affected", "is being improved", "is preserved"]
            },
            {
                title: "Zero-Waste Startup",
                text: "Furniture [1] (is produced / produces) by startup. It [2] (is made / makes) from plastic. For this reason, company [3] (was awarded / awarded). Methods [4] (are being implemented / implement) to reduce waste. Trash [5] (is collected / collects).",
                answers: ["is produced", "is made", "was awarded", "are being implemented", "is collected"]
            },
            {
                title: "Smart Cities",
                text: "Cities [1] (are designed / design) for efficiency. Energy [2] (is saved / saves) by sensors. Traffic [3] (is controlled / controls) by AI. Pollution [4] (is reduced / reduces). Life [5] (is improved / improves).",
                answers: ["are designed", "is saved", "is controlled", "is reduced", "is improved"]
            },
            {
                title: "The Coral Reefs",
                text: "Reefs [1] (are protected / protect) by laws. Damage [2] (is caused / causes) by heat. Scientists [3] (are concerned / concern). Solutions [4] (must be found / find). Oceans [5] (are cleaned / clean).",
                answers: ["are protected", "is caused", "are concerned", "must be found", "are cleaned"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 ITEMS) ---
        15: [
            {
                title: "Text 1",
                audio: "The city is powered by wind energy. The turbines were installed last year on the coast. As a result, the carbon footprint has been reduced. Renewable energy is being discussed by the council.",
                text: "The city [1] by wind energy. The turbines [2] last year. As a result, the [3] has been [4]. Renewable energy [5] by the council.",
                answers: ["is powered", "were installed", "carbon footprint", "reduced", "is being discussed"]
            },
            {
                title: "Text 2",
                audio: "Climate change has been accelerated by emissions. Therefore, a solution has to be implemented now. Natural habitats are being destroyed by rising temperatures. We must act immediately.",
                text: "Climate change [1] by emissions. Therefore, a [2] has to be [3] now. Natural habitats [4] by rising temperatures. We [5] immediately.",
                answers: ["has been accelerated", "solution", "implemented", "are being destroyed", "must act"]
            },
            {
                title: "Text 3",
                audio: "Energy is produced using biomass. This project can be achieved by every school. Organic waste is being transformed in the lab. Consequently, our reliance on oil will diminish soon.",
                text: "Energy [1] using biomass. This project [2] by every school. Organic waste [3] in the lab. Consequently, our reliance on oil [4] [5].",
                answers: ["is produced", "can be achieved", "is being transformed", "will", "diminish"]
            },
            {
                title: "Text 4",
                audio: "The forest will be protected if we act now. Thousands of trees were planted last week. Reforestation helps nature to regenerate. The fauna must be defended by us.",
                text: "The forest [1] if we act now. Thousands of trees [2] last week. Reforestation helps nature to [3]. The fauna [4] [5] by us.",
                answers: ["will be protected", "were planted", "regenerate", "must", "be defended"]
            },
            {
                title: "Text 5",
                audio: "Solar panels have been installed recently. Electricity is generated through the sun. Technology helps to improve life. A zero-carbon future can be reached.",
                text: "Solar panels [1] recently. Electricity [2] through the sun. Technology helps to [3] life. A zero-carbon future [4] [5].",
                answers: ["have been installed", "is generated", "improve", "can", "be reached"]
            },
            {
                title: "Text 6",
                audio: "Hydropower is generated through waterfalls. Large dams were built in the past. Environmental impact is being analyzed by experts. New turbines are being installed now.",
                text: "Hydropower [1] through waterfalls. Large dams [2] in the past. Environmental impact [3] by experts. New turbines [4] [5] now.",
                answers: ["is generated", "were built", "is being analyzed", "are", "being installed"]
            },
            {
                title: "Text 7",
                audio: "The river is being cleaned by volunteers. Plastic waste must be removed from the water. As a result, the ocean will be protected. This method has been tried before.",
                text: "The river [1] by volunteers. Plastic waste [2] [3] from the water. As a result, the ocean [4]. This method [5] before.",
                answers: ["is being cleaned", "must", "be removed", "will be protected", "has been tried"]
            },
            {
                title: "Text 8",
                audio: "Fossil fuels must be abandoned soon. Greenhouse gases are produced by factories. Climate change has been accelerated dramatically. A new system has to be implemented.",
                text: "Fossil fuels [1] [2] soon. Greenhouse gases [3] by factories. Climate change [4] dramatically. A new system [5] [6].",
                answers: ["must", "be abandoned", "are produced", "has been accelerated", "has", "to be implemented"]
            },
            {
                title: "Text 9",
                audio: "Sustainable farming is practiced here. Crops are grown without chemicals. Soil is protected. Food is healthy. Nature is respected.",
                text: "Sustainable farming [1] here. Crops [2] without chemicals. Soil [3]. Food [4] healthy. Nature [5].",
                answers: ["is practiced", "are grown", "is protected", "is", "is respected"]
            },
            {
                title: "Text 10",
                audio: "Materials are separated at the center. Glass is recycled. Plastic is melted. Paper is reused. Nothing is wasted.",
                text: "Materials [1] at the center. Glass [2]. Plastic [3]. Paper [4]. Nothing [5].",
                answers: ["are separated", "is recycled", "is melted", "is reused", "is wasted"]
            }
        ]
    }
});