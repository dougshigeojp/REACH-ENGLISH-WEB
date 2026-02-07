/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */

window.initExercise({
    id: "9-1-2",
    grade: "9th Grade",
    bimester: "1",
    chapter: "2",
    title: "Migration and Human Rights",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES ---
        1: [
            { words: ["refugee", "a", "must", "find", "safe", "home", "The"], correct: "The refugee must find a safe home" },
            { words: ["have", "show", "to", "you", "your", "immigration", "passport", "at"], correct: "You have to show your passport at immigration" },
            { words: ["speak", "wish", "I", "language", "could", "his", "I"], correct: "I wish I could speak his language" },
            { words: ["only", "If", "he", "arrived", "had", "earlier"], correct: "If only he had arrived earlier" },
            { words: ["adapt", "newcomers", "to", "must", "environment", "new", "the"], correct: "Newcomers must adapt to the new environment" },
            { words: ["Does", "she", "have", "apply", "to", "for", "a", "visa"], correct: "Does she have to apply for a visa" },
            { words: ["wish", "I", "I", "known", "had", "about", "culture", "the", "shock"], correct: "I wish I had known about the culture shock" },
            { words: ["mustn't", "people", "Discriminate", "we", "against"], correct: "We mustn't discriminate against people" },
            { words: ["help", "seek", "Asylum", "seekers", "must"], correct: "Asylum seekers must seek help" },
            { words: ["don't", "have", "We", "leave", "to", "country", "our"], correct: "We don't have to leave our country" },
            { words: ["only", "If", "I", "studied", "had", "harder"], correct: "If only I had studied harder" },
            { words: ["wishes", "she", "she", "were", "home", "at"], correct: "She wishes she were at home" },
            { words: ["to", "migrants", "Many", "move", "work", "find", "to"], correct: "Many migrants move to find work" },
            { words: ["barrier", "the", "wish", "I", "language", "smaller", "were"], correct: "I wish the language barrier were smaller" },
            { words: ["must", "Everyone", "respect", "rules", "border", "the"], correct: "Everyone must respect the border rules" },
            { words: ["had", "more", "they", "money", "wish", "They"], correct: "They wish they had more money" },
            { words: ["to", "he", "Does", "have", "the", "report", "conflict"], correct: "Does he have to report the conflict" },
            { words: ["only", "If", "we", "known", "had", "the", "truth"], correct: "If only we had known the truth" },
            { words: ["adapt", "to", "difficult", "It", "is", "to", "bureaucracy"], correct: "It is difficult to adapt to bureaucracy" },
            { words: ["must", "We", "fight", "against", "discrimination"], correct: "We must fight against discrimination" },
            { words: ["only", "If", "I", "could", "fly"], correct: "If only I could fly" },
            { words: ["has", "Ahmed", "to", "for", "wait", "visa", "his"], correct: "Ahmed has to wait for his visa" },
            { words: ["wish", "I", "weren't", "I", "homesick"], correct: "I wish I weren't homesick" },
            { words: ["mustn't", "cross", "you", "without", "border", "the", "papers"], correct: "You mustn't cross the border without papers" },
            { words: ["only", "If", "they", "escaped", "had", "sooner"], correct: "If only they had escaped sooner" },
            { words: ["to", "do", "What", "have", "we", "to", "do"], correct: "What do we have to do" },
            { words: ["wish", "I", "more", "I", "work", "had", "experience"], correct: "I wish I had more work experience" },
            { words: ["newcomers", "welcome", "must", "We", "our"], correct: "We must welcome our newcomers" },
            { words: ["to", "have", "they", "Do", "flee", "danger", "the"], correct: "Do they have to flee the danger" },
            { words: ["only", "If", "she", "spoken", "had", "English"], correct: "If only she had spoken English" },
            { words: ["a", "better", "deserves", "life", "Everyone"], correct: "Everyone deserves a better life" },
            { words: ["must", "You", "be", "adapt", "patient", "to"], correct: "You must be patient to adapt" },
            { words: ["wish", "I", "had", "I", "more", "opportunities"], correct: "I wish I had more opportunities" },
            { words: ["don't", "have", "We", "to", "stay", "here"], correct: "We don't have to stay here" },
            { words: ["only", "If", "I", "were", "rich"], correct: "If only I were rich" },
            { words: ["has", "to", "Every", "migrant", "adapt"], correct: "Every migrant has to adapt" },
            { words: ["must", "Refugees", "find", "support"], correct: "Refugees must find support" },
            { words: ["wish", "I", "hadn't", "I", "my", "country", "left"], correct: "I wish I hadn't left my country" },
            { words: ["to", "have", "you", "Do", "sign", "the", "document"], correct: "Do you have to sign the document" },
            { words: ["only", "If", "the", "simpler", "were", "process"], correct: "If only the process were simpler" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES ---
        2: [
            { lines: ["He is a refugee. He had to flee his country.", "Have you met the newcomer, Ahmed?", "That is so sad. He must feel very lonely.", "Yes, I saw him in the cafeteria today."], order: [1, 3, 0, 2] },
            { lines: ["I wish I could speak his language to help him.", "Ahmed is struggling with the language barrier.", "He needs time to adapt to our culture.", "Me too. We have to be very patient."], order: [1, 0, 2, 3] },
            { lines: ["If only I had studied Japanese before I moved!", "Are you facing culture shock in Tokyo?", "Yes, there are so many different rules.", "Don't worry, you will adapt soon."], order: [1, 2, 0, 3] },
            { lines: ["No, it’s a rule. You have to have a visa.", "Can I enter the country without a permit?", "Then I must apply for one immediately.", "That’s right. The bureaucracy takes time."], order: [1, 0, 2, 3] },
            { lines: ["I feel very homesick during the holidays.", "I wish my family were here with me.", "Why do you look so sad, Maria?", "If only you had planned their trip earlier."], order: [2, 0, 1, 3] },
            { lines: ["You must respect the local laws here.", "Is it an internal obligation or a legal rule?", "Both. But you have to show your ID if the police ask.", "I understand. I don't want any visa issues."], order: [0, 1, 2, 3] },
            { lines: ["I wish I had more work experience.", "Are you seeking new opportunities abroad?", "Yes, but job scarcity is a big problem.", "You should improve your skills first."], order: [1, 2, 0, 3] },
            { lines: ["No, we don't have to wear them on Fridays.", "Do we have to wear a uniform tomorrow?", "That's great! I wish I had a new shirt.", "If only I had bought one at the mall yesterday."], order: [1, 0, 2, 3] },
            { lines: ["It’s because of the lack of integration.", "Why are some migrants feeling isolated?", "We must fight against discrimination.", "I agree. Everyone deserves a better life."], order: [1, 0, 2, 3] },
            { lines: ["He has to wait for his asylum papers.", "Why can't the newcomer start working?", "I wish the process were much faster.", "Me too. Bureaucracy is a real challenge."], order: [1, 0, 2, 3] },
            { lines: ["I wish I hadn't spent all my money.", "Are you going to the party tonight?", "No, I have to stay home and study.", "If only you had saved some last week!"], order: [1, 2, 0, 3] },
            { lines: ["You must talk with someone you trust.", "I am feeling very lonely at school.", "I wish I had more friends in my class.", "I will go see the counselor tomorrow."], order: [1, 2, 0, 3] },
            { lines: ["You have to show your passport at the border.", "Is that a strict law for everyone?", "Yes, and you mustn't carry prohibited items.", "I will check my luggage carefully then."], order: [0, 1, 2, 3] },
            { lines: ["I wish I were taller to play basketball.", "You are already a very good player.", "If only I had practiced more last year!", "You can still improve your potential now."], order: [0, 1, 2, 3] },
            { lines: ["He had to flee from the war zone.", "How did the refugee get to the border?", "He had been walking for days.", "He must be exhausted and hungry."], order: [1, 0, 2, 3] },
            { lines: ["No, you don't have to pay if you are a student.", "Do I have to pay for the museum entry?", "Really? I wish I had my ID card here.", "If only you hadn't left it in your locker!"], order: [1, 0, 2, 3] },
            { lines: ["I am struggling with the language barrier.", "How is your new life in Germany?", "I wish I spoke German fluently.", "You must practice every day to adapt."], order: [1, 0, 2, 3] },
            { lines: ["It’s about respect and empathy.", "What is the 'Kindness First' campaign?", "We must stop bullying at school.", "I hope everyone joins the project."], order: [1, 0, 2, 3] },
            { lines: ["I wish I had known about the visa issues.", "Why did you return from Canada so soon?", "If only I had consulted a lawyer first!", "That is a difficult lesson to learn."], order: [1, 0, 2, 3] },
            { lines: ["You mustn't smoke in the school.", "Is it a strict prohibition?", "Yes, it is a very important rule.", "Sorry, I didn't see the sign."], order: [0, 1, 2, 3] },
            { lines: ["I wish I had seen the documentary.", "Did you learn about refugees in class?", "Yes, it was a very moving story.", "If only you hadn't missed school yesterday!"], order: [1, 2, 0, 3] },
            { lines: ["You have to have a permit to work here.", "Can I start my job tomorrow?", "Where can I get that document?", "You must go to the immigration office."], order: [1, 0, 2, 3] },
            { lines: ["I wish I were at the beach right now.", "Why are you looking out the window?", "Because I am tired of this bureaucracy.", "Me too. We need a long vacation."], order: [1, 2, 0, 3] },
            { lines: ["He wishes he hadn't left his family behind.", "How is the migrant worker feeling?", "He feels very lonely in this new city.", "We should invite him for dinner."], order: [1, 2, 0, 3] },
            { lines: ["You must be careful with your password.", "Why did you block that account?", "Because I didn't want any cyberbullying.", "Good decision. Safety is vital."], order: [1, 2, 0, 3] },
            { lines: ["I wish I had taken that opportunity.", "Did you apply for the job in London?", "No, I was too scared of the move.", "If only you had been more confident!"], order: [1, 2, 0, 3] },
            { lines: ["No, she doesn't have to work on Sundays.", "Does your mother have to work today?", "I wish she were here to play with us.", "If only she didn't have such a busy job!"], order: [1, 0, 2, 3] },
            { lines: ["I wish I knew the answer to this.", "Are you struggling with culture shock?", "Yes, I don't understand the social cues.", "You must observe how people behave."], order: [1, 2, 0, 3] },
            { lines: ["You mustn't leave your luggage unattended.", "Why is that a rule at the airport?", "Because it is a security risk.", "Oh, I see. I will keep it with me."], order: [0, 1, 2, 3] },
            { lines: ["I wish I had brought my jacket.", "Is it cold in this new country?", "Yes, I am not adapted to the climate.", "If only you had checked the weather!"], order: [1, 2, 0, 3] },
            { lines: ["We have to register at the front desk.", "What do we do when we arrive at school?", "Is that a new rule for visitors?", "Yes, the principal wants to improve safety."], order: [1, 0, 2, 3] },
            { lines: ["I wish I were a better student.", "Why are you frustrated with your grades?", "Because I didn't study for the exam.", "If only you had managed your time better!"], order: [1, 2, 0, 3] },
            { lines: ["You must report any discrimination you see.", "Is it my responsibility to tell the teacher?", "Yes, we all must support each other.", "I will remember that."], order: [0, 1, 2, 3] },
            { lines: ["I wish I spoke French fluently.", "Are you moving to Paris next year?", "Yes, and I am worried about the barrier.", "You have to start practicing now."], order: [1, 2, 0, 3] },
            { lines: ["No, you don't have to sign it today.", "Must I sign this contract now?", "Great. I wish I had more time to read it.", "Take your time. Decisions are important."], order: [1, 0, 2, 3] },
            { lines: ["He wishes he were back in his country.", "Why is the newcomer crying?", "He misses his friends and his home.", "We should talk to him and be kind."], order: [1, 0, 2, 3] },
            { lines: ["You mustn't park your car here.", "Is this a prohibited zone?", "Yes, look at the 'No Parking' sign.", "Sorry, I will move it later... no, now!"], order: [0, 1, 2, 3] },
            { lines: ["I wish I had seen the border before.", "Have you ever traveled to another country?", "No, this is my first time crossing.", "It’s a very exciting experience!"], order: [1, 2, 0, 3] },
            { lines: ["No, we don't have to finish it tonight.", "Do we have to finish the project now?", "I wish I hadn't left it for the last minute.", "Me too. If only we had started earlier!"], order: [1, 0, 2, 3] },
            { lines: ["You must follow the safety instructions.", "What do I do in case of an emergency?", "Don't be afraid, just stay calm.", "I will try my best."], order: [1, 0, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS ---
        3: [
            { q: "Does she have to have a visa to travel?", options: ["Yes, she does.", "Yes, she has.", "Yes, she have.", "No, she haven't."], a: "Yes, she does." },
            { q: "Must we respect the border rules?", options: ["Yes, we must.", "Yes, we musts.", "No, we mustn't to.", "Yes, us must."], a: "Yes, we must." },
            { q: "Do I have to show my passport?", options: ["Yes, you do.", "Yes, you have.", "No, you don't have.", "Yes, you must to."], a: "Yes, you do." },
            { q: "Is he going to flee the conflict?", options: ["Yes, he is.", "Yes, he are.", "No, he not is.", "Yes, him is."], a: "Yes, he is." },
            { q: "Do you wish you were home?", options: ["Yes, I do.", "Yes, I wish.", "No, I am not wish.", "Yes, me do."], a: "Yes, I do." },
            { q: "Mustn't they smoke here?", options: ["No, they mustn't.", "Yes, they must.", "No, they don't must.", "No, they not must."], a: "No, they mustn't." },
            { q: "Did he have to leave his house?", options: ["Yes, he did.", "Yes, he had.", "No, he didn't had.", "Yes, he has."], a: "Yes, he did." },
            { q: "If only I had studied harder! Is this a regret?", options: ["Yes, it is.", "No, it isn't.", "Yes, I had.", "No, I didn't."], a: "Yes, it is." },
            { q: "Do we have to follow the rules?", options: ["Yes, we do.", "Yes, we have.", "No, us don't.", "Yes, we musts."], a: "Yes, we do." },
            { q: "Does he wish he had more money?", options: ["Yes, he does.", "Yes, he do.", "No, he doesn't has.", "Yes, him does."], a: "Yes, he does." },
            { q: "Must the newcomer register today?", options: ["Yes, he must.", "No, he doesn't must.", "Yes, he musts.", "Yes, he has to."], a: "Yes, he must." },
            { q: "Do they have to seek asylum?", options: ["Yes, they do.", "Yes, them do.", "No, they hasn't.", "Yes, they have to."], a: "Yes, they do." },
            { q: "Are you homesick?", options: ["Yes, I am.", "Yes, I do.", "No, me am not.", "Yes, I are."], a: "Yes, I am." },
            { q: "Did she wish she spoke French?", options: ["Yes, she did.", "Yes, she wish.", "No, she not did.", "Yes, her did."], a: "Yes, she did." },
            { q: "Has he to pay the bureaucracy fee?", options: ["Yes, he does.", "Yes, he has.", "No, he haven't.", "Yes, he have to."], a: "Yes, he does." },
            { q: "If only it were simpler! Is this a present desire?", options: ["Yes, it is.", "No, it was.", "Yes, it were.", "No, it isn't."], a: "Yes, it is." },
            { q: "Mustn't you cross the line?", options: ["No, I mustn't.", "Yes, I must.", "No, I don't must.", "Yes, you mustn't."], a: "No, I mustn't." },
            { q: "Do many migrants move for work?", options: ["Yes, they do.", "Yes, they are.", "No, they don't move.", "Yes, them do."], a: "Yes, they do." },
            { q: "Is cyberbullying dangerous?", options: ["Yes, it is.", "Yes, it does.", "No, it aren't.", "Yes, its is."], a: "Yes, it is." },
            { q: "Did they have to flee the war?", options: ["Yes, they did.", "Yes, they had.", "No, they didn't had.", "Yes, them did."], a: "Yes, they did." },
            { q: "What is a refugee?", options: ["A person fleeing danger.", "A type of delicious cake.", "A color in the rainbow.", "A tool for the garden."], a: "A person fleeing danger." },
            { q: "Why are you homesick?", options: ["Because I miss my family.", "Because my laptop is new.", "At 7 o'clock.", "Yes, I am."], a: "Because I miss my family." },
            { q: "What does 'Must' mean?", options: ["A strong obligation.", "A piece of clothing.", "A fast airplane.", "No, thank you."], a: "A strong obligation." },
            { q: "If only I had brought my umbrella!", options: ["You are probably wet now.", "It is a sunny day.", "My name is Albert.", "No, I didn't."], a: "You are probably wet now." },
            { q: "What is a language barrier?", options: ["Difficulty in communicating.", "A wall between houses.", "A delicious fruit.", "A fast car."], a: "Difficulty in communicating." },
            { q: "Why do you have to have a visa?", options: ["It’s a legal requirement.", "To play video games.", "Because it is red.", "In the morning."], a: "It’s a legal requirement." },
            { q: "What is culture shock?", options: ["Confusion in a new country.", "An electric device.", "A famous robot.", "No, it isn't."], a: "Confusion in a new country." },
            { q: "I wish I were a bird!", options: ["You want to fly.", "You are a cat.", "In the museum.", "Yes, I was."], a: "You want to fly." },
            { q: "What is bureaucracy?", options: ["Complex official procedures.", "A type of furniture.", "A musical instrument.", "Every Saturday."], a: "Complex official procedures." },
            { q: "Who is an asylum seeker?", options: ["Someone looking for protection.", "A famous pop star.", "A construction worker.", "Yes, he is."], a: "Someone looking for protection." },
            { q: "Why must we stop bullying?", options: ["Because it hurts people.", "Because it's a blue book.", "At 10 PM.", "No, we aren't."], a: "Because it hurts people." },
            { q: "What do you do at a border?", options: ["Show your identification.", "Cook a pizza.", "Sleep on the sofa.", "I am twelve."], a: "Show your identification." },
            { q: "I wish I had studied more!", options: ["You failed the test.", "You are a teacher.", "In January.", "Yes, you did."], a: "You failed the test." },
            { q: "What is discrimination?", options: ["Unfair treatment of others.", "A technical blueprint.", "A fast running shoe.", "No, thank you."], a: "Unfair treatment of others." },
            { q: "Why do people emigrate?", options: ["To leave their country.", "To buy a new mouse.", "Because it's Monday.", "Yes, they do."], a: "To leave their country." },
            { q: "What is empathy?", options: ["Understanding feelings.", "A type of energy.", "A school building.", "No, I don't."], a: "Understanding feelings." },
            { q: "If only he were here!", options: ["You miss someone.", "He is in the room.", "At 8 o'clock.", "No, he wasn't."], a: "You miss someone." },
            { q: "What is a migrant?", options: ["Someone moving for work.", "A part of a computer.", "A dangerous animal.", "In the sky."], a: "Someone moving for work." },
            { q: "Why are you frustrated?", options: ["I can't solve this.", "My birthday is in May.", "Because it is a cat.", "Yes, I am."], a: "I can't solve this." },
            { q: "What is a newcomer?", options: ["A person who just arrived.", "An old invention.", "A rocket scientist.", "No, it's not."], a: "A person who just arrived." }
        ],

       // --- TYPE 4: FIND MEANING (40 items) ---
        4: [
            { sent: "The **refugee** arrived at the center looking for safety.", word: "refugee", options: ["Refugiado", "Turista", "Soldado", "Guia"], a: "Refugiado", def: "A person who has been forced to leave their country to escape war or persecution." },
            { sent: "She felt a strong **culture shock** when she moved to Japan.", word: "culture shock", options: ["Alegria cultural", "Choque cultural", "Viagem cultural", "Herança cultural"], a: "Choque cultural", def: "The feeling of disorientation experienced by someone in an unfamiliar culture." },
            { sent: "There is too much **bureaucracy** to get a work permit.", word: "bureaucracy", options: ["Liberdade", "Burocracia", "Ajuda", "Rapidez"], a: "Burocracia", def: "Excessively complicated administrative procedure or set of rules." },
            { sent: "He is an **asylum seeker** waiting for his legal papers.", word: "asylum seeker", options: ["Solicitante de asilo", "Agente de viagens", "Advogado", "Residente"], a: "Solicitante de asilo", def: "A person who has left their home country as a political refugee and is seeking protection in another." },
            { sent: "The **language barrier** makes it difficult to find a job.", word: "language barrier", options: ["Facilidade linguística", "Barreira linguística", "Escola de idiomas", "Tradução automática"], a: "Barreira linguística", def: "A barrier to communication between people who are unable to speak a common language." },
            { sent: "Many people feel **homesick** when they live abroad.", word: "homesick", options: ["Com saudades de casa", "Doentes no hospital", "Felizes com a mudança", "Cansados de viajar"], a: "Com saudades de casa", def: "Experiencing a longing for one's home during a period of absence from it." },
            { sent: "We must fight against all forms of **discrimination**.", word: "discrimination", options: ["Igualdade", "Discriminação", "Integração", "Aceitação"], a: "Discriminação", def: "The unjust or prejudicial treatment of different categories of people." },
            { sent: "They had to **flee** their country because of the war.", word: "flee", options: ["Visitar", "Fugir", "Comprar", "Governar"], a: "Fugir", def: "To run away from a place or situation of danger." },
            { sent: "The **border** between the two countries is strictly controlled.", word: "border", options: ["Fronteira", "Centro", "Estrada", "Ponte"], a: "Fronteira", def: "A line separating two political or geographical areas." },
            { sent: "A **migrant** moves from one place to another to find work.", word: "migrant", options: ["Migrante", "Turista", "Policial", "Estudante"], a: "Migrante", def: "A person who moves from one place to another, especially in order to find work or better living conditions." },
            { sent: "You **must** follow the safety rules.", word: "must", options: ["Pode", "Deveria", "Deve (Obrigação)", "Quer"], a: "Deve (Obrigação)", def: "Used to express an internal obligation or something necessary." },
            { sent: "I **wish** I could speak five languages.", word: "wish", options: ["Desejo / Quem dera", "Espero", "Tenho que", "Consigo"], a: "Desejo / Quem dera", def: "Used to express a strong desire for something that is not currently true." },
            { sent: "We need to improve **integration** at school.", word: "integration", options: ["Integração", "Competição", "Divisão", "Solidão"], a: "Integração", def: "The process of uniting or bringing together different groups of people." },
            { sent: "**Emigration** happens when people leave their own country.", word: "emigration", options: ["Imigração", "Emigração (Saída)", "Turismo", "Exploração"], a: "Emigração (Saída)", def: "The act of leaving one's own country to settle permanently in another." },
            { sent: "I feel **lonely** in this new city.", word: "lonely", options: ["Acompanhado", "Sozinho / Solitário", "Bravo", "Animado"], a: "Sozinho / Solitário", def: "Sad because one has no friends or company." },
            { sent: "The **newcomer** was welcomed by the students.", word: "newcomer", options: ["Recém-chegado", "Professor antigo", "Diretor", "Inspetor"], a: "Recém-chegado", def: "A person or thing that has recently arrived in a place or joined a group." },
            { sent: "He is **adapting** well to the new environment.", word: "adapting", options: ["Fugindo", "Adaptando-se", "Brigando", "Reclamando"], a: "Adaptando-se", def: "Becoming adjusted to new conditions." },
            { sent: "The **conflict** destroyed many homes.", word: "conflict", options: ["Acordo", "Conflito / Guerra", "Comércio", "Festival"], a: "Conflito / Guerra", def: "A serious disagreement or argument; a prolonged armed struggle." },
            { sent: "I feel **frustrated** with the visa process.", word: "frustrated", options: ["Contente", "Frustrado", "Calmo", "Confiante"], a: "Frustrado", def: "Feeling annoyed or less confident because you cannot achieve what you want." },
            { sent: "We must show **empathy** to refugees.", word: "empathy", options: ["Raiva", "Empatia", "Desprezo", "Medo"], a: "Empatia", def: "The ability to understand and share the feelings of another." },
            { sent: "It is a **safe** place for your family.", word: "safe", options: ["Perigoso", "Seguro", "Caro", "Lento"], a: "Seguro", def: "Protected from or not exposed to danger or risk." },
            { sent: "This country has many natural **resources**.", word: "resources", options: ["Problemas", "Recursos", "Desertos", "Leis"], a: "Recursos", def: "A stock or supply of money, materials, or assets." },
            { sent: "He is **seeking** a better life for his children.", word: "seeking", options: ["Buscando / Procurando", "Evitando", "Esquecendo", "Perdendo"], a: "Buscando / Procurando", def: "Attempting to find or get something." },
            { sent: "**Immigration** officers check everyone's ID.", word: "immigration", options: ["Imigração", "Exportação", "Correios", "Escola"], a: "Imigração", def: "The action of coming to live permanently in a foreign country." },
            { sent: "The **principal** spoke about school rules.", word: "principal", options: ["Professor", "Diretor", "Aluno", "Pais"], a: "Diretor", def: "The head of a school." },
            { sent: "I am **confident** that things will improve.", word: "confident", options: ["Preocupado", "Confiante", "Assustado", "Triste"], a: "Confiante", def: "Feeling or showing confidence in oneself." },
            { sent: "**Respect** is vital for integration.", word: "respect", options: ["Respeito", "Briga", "Fofoca", "Dinheiro"], a: "Respeito", def: "Due regard for the feelings, wishes, or rights of others." },
            { sent: "She is a very **brave** woman.", word: "brave", options: ["Tímida", "Corajosa", "Fraca", "Brava (raiva)"], a: "Corajosa", def: "Ready to face and endure danger or pain; showing courage." },
            { sent: "He feels **isolated** without his friends.", word: "isolated", options: ["Isolado", "Feliz", "Barulhento", "Calmo"], a: "Isolado", def: "Having minimal contact or little in common with others." },
            { sent: "The **process** is very long and complex.", word: "process", options: ["Processo", "Resultado", "Início", "Problema"], a: "Processo", def: "A series of actions or steps taken in order to achieve a particular end." },
            { sent: "We need to provide more **support** to newcomers.", word: "support", options: ["Apoio / Suporte", "Crítica", "Comida", "Trabalho"], a: "Apoio / Suporte", def: "Assistance or encouragement." },
            { sent: "There is a **job scarcity** in the region.", word: "job scarcity", options: ["Abundância de empregos", "Escassez de empregos", "Fábrica", "Salário alto"], a: "Escassez de empregos", def: "A situation where there are not enough jobs available." },
            { sent: "She is **struggling** with culture shock.", word: "struggling", options: ["Lutando / Tendo dificuldade", "Brincando", "Aprendendo facilmente", "Viajando"], a: "Lutando / Tendo dificuldade", def: "Making forceful efforts to get free of restraint or constriction." },
            { sent: "He **left** his country ten years ago.", word: "left", options: ["Deixou / Saiu", "Voltou", "Construiu", "Vendeu"], a: "Deixou / Saiu", def: "To go away from a place." },
            { sent: "The **laws** here are different.", word: "laws", options: ["Leis", "Roupas", "Comidas", "Jogos"], a: "Leis", def: "The system of rules which a particular country or community recognizes." },
            { sent: "It is an **urgent** matter.", word: "urgent", options: ["Urgente", "Lento", "Antigo", "Normal"], a: "Urgente", def: "Requiring immediate action or attention." },
            { sent: "She wants a **better** life.", word: "better", options: ["Melhor", "Pior", "Igual", "Curta"], a: "Melhor", def: "Of a higher standard, or more effective than other things." },
            { sent: "They are **hopeful** about the future.", word: "hopeful", options: ["Esperançosos", "Tristes", "Raivosos", "Cansados"], a: "Esperançosos", def: "Feeling or inspiring optimism about a future event." },
            { sent: "A **workshop** about being truthful.", word: "workshop", options: ["Oficina / Workshop", "Festa", "Viagem", "Almoço"], a: "Oficina / Workshop", def: "A meeting at which a group of people engage in intensive discussion and activity." },
            { sent: "A **documentary** about refugees.", word: "documentary", options: ["Documentário", "Desenho animado", "Novela", "Música"], a: "Documentário", def: "A movie or television program that provides a factual record or report." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 items) ---
        5: [
            { sent: "He **musts** show his passport.", correct: "must" },
            { sent: "You **don't must** smoke here.", correct: "mustn't" },
            { sent: "I wish I **am** rich.", correct: "were / was" },
            { sent: "If only I **have** seen him yesterday.", correct: "had seen" },
            { sent: "Does she **has** to study?", correct: "have to" },
            { sent: "We must **to be** careful.", correct: "be" },
            { sent: "I wish I **spoke** French last year.", correct: "had spoken" },
            { sent: "They **haven't to** pay today.", correct: "don't have to" },
            { sent: "He **mustn't to** leave the room.", correct: "mustn't" },
            { sent: "If only we **know** the answer then!", correct: "had known" },
            { sent: "She wishes she **has** more time.", correct: "had" },
            { sent: "**Do** he have to wear a uniform?", correct: "Does" },
            { sent: "I wish you **are** here with me.", correct: "were" },
            { sent: "You **mustn't to** discriminate.", correct: "mustn't" },
            { sent: "If only it **is** simpler!", correct: "were / was" },
            { sent: "He **don't have to** work today.", correct: "doesn't have to" },
            { sent: "I wish I **studied** more last year.", correct: "had studied" },
            { sent: "**Has** you to go now?", correct: "Do you have" },
            { sent: "They **musts** respect the rules.", correct: "must" },
            { sent: "If only he **isn't** so rude!", correct: "weren't / wasn't" },
            { sent: "I **has to** apply for a visa.", correct: "have to" },
            { sent: "She wishes she **doesn't have to** go.", correct: "didn't have to" },
            { sent: "You **don't must** to shout.", correct: "mustn't" },
            { sent: "If only they **found** a safe place sooner.", correct: "had found" },
            { sent: "I **must to** finish this project.", correct: "must" },
            { sent: "I wish I **can** fly.", correct: "could" },
            { sent: "Does Ahmed **has to** wait?", correct: "have to" },
            { sent: "We **mustn't to** spread rumors.", correct: "mustn't" },
            { sent: "If only I **didn't spent** all my money!", correct: "hadn't spent" },
            { sent: "She wishes she **is** at the beach now.", correct: "were" },
            { sent: "You **haven't to** come if you are busy.", correct: "don't have to" },
            { sent: "I **musts** talk to the counselor.", correct: "must" },
            { sent: "I wish I **heard** the news earlier.", correct: "had heard" },
            { sent: "If only she **don't** leave!", correct: "didn't / wouldn't" },
            { sent: "They **has to** show their ID.", correct: "have to" },
            { sent: "I wish it **is** easier to adapt.", correct: "were" },
            { sent: "You **mustn't to** ignore bullying.", correct: "mustn't" },
            { sent: "If only we **had planned** better today.", correct: "planned" },
            { sent: "She **have to** follow the rules.", correct: "has to" },
            { sent: "I wish I **had known** her now.", correct: "knew" }
        ],


        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Type 6.1: Question to Answer (Groups 1-10)
            { pairs: [{a: "Does a refugee have to register at the border?", b: "Yes, it is a legal requirement."}, {a: "Why must we follow the immigration laws?", b: "Because they ensure everyone's safety."}, {a: "Do you have to show your passport now?", b: "No, I have to show it at the gate."}, {a: "Must she apply for a visa before traveling?", b: "Yes, she must get it from the embassy."}, {a: "Do we have to pay a fee for the documents?", b: "No, the process is free for students."}] },
            { pairs: [{a: "How does it feel to experience culture shock?", b: "It feels confusing and very disorienting."}, {a: "Why do you feel so homesick today?", b: "Because I miss my friends and family."}, {a: "Are you struggling with the language barrier?", b: "Yes, I wish I spoke the language better."}, {a: "Why is there so much bureaucracy here?", b: "Because the system is very old and complex."}, {a: "How do you deal with discrimination?", b: "I report it and seek help from adults."}] },
            { pairs: [{a: "What do you wish were different now?", b: "I wish I were back in my home country."}, {a: "Does he wish he lived in a bigger house?", b: "Yes, his current apartment is very small."}, {a: "Do they wish they had more work experience?", b: "Yes, to find a better job opportunity."}, {a: "What does she wish she could do?", b: "She wishes she could fly home for the holidays."}, {a: "Do you wish the process were simpler?", b: "Yes, there is too much paperwork to sign."}] },
            { pairs: [{a: "What do you regret about your journey?", b: "I wish I had brought more belongings."}, {a: "Does she wish she had studied more?", b: "Yes, if only she had passed the exam."}, {a: "If only he had known the truth earlier?", b: "He would have made a different decision."}, {a: "Had they found a safe place before the war?", b: "No, they wish they had escaped sooner."}, {a: "Do you wish you hadn't spent all your money?", b: "Yes, I am completely broke now."}] },
            { pairs: [{a: "Why did the family have to flee?", b: "Because of the dangerous conflict in their city."}, {a: "What is an asylum seeker looking for?", b: "They are seeking legal protection and safety."}, {a: "Where is the newcomer from?", b: "He is a refugee from a war zone."}, {a: "How many migrants are seeking work?", b: "Thousands move across the border every year."}, {a: "Why must we fight against discrimination?", b: "Because everyone deserves a better life."}] },
            { pairs: [{a: "Must I finish this report tonight?", b: "Yes, it's a very strong personal obligation."}, {a: "Do we have to wear uniforms tomorrow?", b: "No, you don't have to wear them on Fridays."}, {a: "Does she have to leave the country?", b: "Yes, her visa is going to expire soon."}, {a: "Mustn't we smoke inside the school?", b: "No, it is strictly prohibited."}, {a: "Do I have to sign this document?", b: "No, it is an optional registration."}] },
            { pairs: [{a: "What can we do to help the newcomers?", b: "We can welcome them to our class."}, {a: "Why is lack of integration a problem?", b: "Because it causes isolation and sadness."}, {a: "How can we show empathy to refugees?", b: "By listening and trying to understand them."}, {a: "Is job scarcity affecting the migrants?", b: "Yes, it is hard for them to find work."}, {a: "Why must we respect different cultures?", b: "To build a more peaceful and safe world."}] },
            { pairs: [{a: "I wish I were rich!", b: "I would buy a house for my parents."}, {a: "If only I spoke French fluently!", b: "I would seek a job in Paris."}, {a: "I wish I had more friends here.", b: "I feel a bit isolated lately."}, {a: "If only he had listened to the advice!", b: "He is facing many legal issues now."}, {a: "I wish the weather were better.", b: "Yes, and I wish I had my umbrella."}] },
            { pairs: [{a: "Where do I have to go to get a visa?", b: "You must visit the national consulate."}, {a: "Must we cross the border at night?", b: "No, it is safer to cross during the day."}, {a: "Have you seen the immigration officer?", b: "Yes, he is checking the passports now."}, {a: "Do they have to seek asylum immediately?", b: "Yes, they need protection from the conflict."}, {a: "Is the process difficult for migrants?", b: "Yes, because of the heavy bureaucracy."}] },
            { pairs: [{a: "Do you wish you had a new laptop?", b: "Yes, mine is very slow and old."}, {a: "If only the school started later!", b: "I usually wake up at 6 AM."}, {a: "Does she wish she knew the answer?", b: "Yes, she is very frustrated with the test."}, {a: "I wish I hadn't lost my phone.", b: "It was a brand new smartphone."}, {a: "If only we had more natural resources!", b: "It makes development very hard."}] },

            // Type 6.2: 1st half to 2nd half of a sentence (Groups 11-20)
            { pairs: [{a: "You must be very careful...", b: "...when you talk to the principal."}, {a: "We have to show our passports...", b: "...to the immigration officer."}, {a: "He mustn't forget to...", b: "...renew his visa next month."}, {a: "They don't have to pay...", b: "...for the school lunch today."}, {a: "Every student has to...", b: "...follow the safety rules."}] },
            { pairs: [{a: "I wish I spoke...", b: "...German fluently to find a job."}, {a: "She wishes she were...", b: "...at home with her family now."}, {a: "We wish we had...", b: "...more opportunities in our city."}, {a: "They wish they knew...", b: "...the way to the refugee center."}, {a: "He wishes he could...", b: "...flee the dangerous conflict."}] },
            { pairs: [{a: "If only I had studied...", b: "...more for the history exam."}, {a: "If only she had arrived...", b: "...earlier to catch the bus."}, {a: "If only they had known...", b: "...about the bureaucracy issues."}, {a: "If only we hadn't spent...", b: "...all our money on the trip."}, {a: "If only he had seen...", b: "...the warning sign at the border."}] },
            { pairs: [{a: "Many refugees flee...", b: "...their homes because of war."}, {a: "The language barrier makes...", b: "...it hard to communicate with locals."}, {a: "Culture shock is common...", b: "...when you move to a new country."}, {a: "Discrimination can cause...", b: "...deep emotional hurt and sadness."}, {a: "Lack of integration often...", b: "...leads to social isolation."}] },
            { pairs: [{a: "Do you have to...", b: "...apply for a work permit?"}, {a: "She must report...", b: "...the mean comments to the teacher."}, {a: "We don't have to...", b: "...hide our feelings from our friends."}, {a: "Must the newcomer...", b: "...register at the front desk?"}, {a: "He doesn't have to...", b: "...work during the national holiday."}] },
            { pairs: [{a: "I wish I were...", b: "...taller to reach the top shelf."}, {a: "You wish you were...", b: "...more confident during the speech."}, {a: "She wishes she were...", b: "...an engineer like her father."}, {a: "We wish we were...", b: "...at the beach right now."}, {a: "They wish they were...", b: "...safe in a different country."}] },
            { pairs: [{a: "I am going to...", b: "...talk to the counselor tomorrow."}, {a: "We are meeting...", b: "...at the park later this afternoon."}, {a: "He is flying...", b: "...to Canada next Friday morning."}, {a: "She is seeing...", b: "...the doctor at 2 PM today."}, {a: "They are starting...", b: "...a new campaign next month."}] },
            { pairs: [{a: "He feels lonely because...", b: "...he has no friends at school."}, {a: "I am frustrated because...", b: "...the bureaucracy is very slow."}, {a: "She is excited because...", b: "...she got her new visa."}, {a: "We are worried because...", b: "...of the conflict near the border."}, {a: "They are happy because...", b: "...they found a better life."}] },
            { pairs: [{a: "Seeking opportunities is...", b: "...important for every migrant."}, {a: "Career development helps...", b: "...you get a better job."}, {a: "Culture shock causes...", b: "...confusion and disorientation."}, {a: "Language barriers are...", b: "...challenges for communication."}, {a: "Personal growth takes...", b: "...a long time and a lot of effort."}] },
            { pairs: [{a: "You mustn't smoke...", b: "...inside the hospital building."}, {a: "I wish I had...", b: "...more resources for the project."}, {a: "We must respect...", b: "...the local laws and rules."}, {a: "He has to...", b: "...wait for his documents to arrive."}, {a: "If only she...", b: "...were here to support us."}] },

            // Type 6.3: English word/sentence to Portuguese translation (Groups 21-30)
            { pairs: [{a: "Refugee and asylum seeker.", b: "Refugiado e solicitante de asilo."}, {a: "Migrant and immigrant.", b: "Migrante e imigrante."}, {a: "Emigration and immigration.", b: "Emigração e imigração."}, {a: "Newcomer and foreigner.", b: "Recém-chegado e estrangeiro."}, {a: "Resident and citizen.", b: "Residente e cidadão."}] },
            { pairs: [{a: "I must study harder.", b: "Eu devo estudar mais (vontade própria)."}, {a: "I have to study harder.", b: "Eu tenho que estudar mais (obrigação externa)."}, {a: "I don't have to study.", b: "Eu não preciso estudar."}, {a: "I mustn't study here.", b: "Eu não devo/estou proibido de estudar aqui."}, {a: "Do I have to study?", b: "Eu tenho que estudar?"}] },
            { pairs: [{a: "Culture shock.", b: "Choque cultural."}, {a: "Language barrier.", b: "Barreira linguística."}, {a: "Job scarcity.", b: "Escassez de empregos."}, {a: "Social isolation.", b: "Isolamento social."}, {a: "Safe environment.", b: "Ambiente seguro."}] },
            { pairs: [{a: "I wish I were rich.", b: "Quem dera eu fosse rico."}, {a: "I wish I had more time.", b: "Eu queria ter mais tempo."}, {a: "I wish I spoke English.", b: "Eu queria falar inglês."}, {a: "I wish I knew the answer.", b: "Eu queria saber a resposta."}, {a: "I wish I could fly.", b: "Eu queria poder voar."}] },
            { pairs: [{a: "If only I had studied.", b: "Se ao menos eu tivesse estudado."}, {a: "If only he had arrived.", b: "Se ao menos ele tivesse chegado."}, {a: "If only we had seen it.", b: "Se ao menos nós tivéssemos visto."}, {a: "If only they had left.", b: "Se ao menos eles tivessem saído."}, {a: "If only she had known.", b: "Se ao menos ela soubesse."}] },
            { pairs: [{a: "To flee from danger.", b: "Fugir do perigo."}, {a: "To seek asylum.", b: "Buscar asilo."}, {a: "To adapt to change.", b: "Adaptar-se à mudança."}, {a: "To cross the border.", b: "Cruzar a fronteira."}, {a: "To find a better life.", b: "Encontrar uma vida melhor."}] },
            { pairs: [{a: "Loneliness and isolation.", b: "Solidão e isolamento."}, {a: "Discrimination and respect.", b: "Discriminação e respeito."}, {a: "Empathy and support.", b: "Empatia e apoio."}, {a: "Conflict and safety.", b: "Conflito e segurança."}, {a: "Bureaucracy and rules.", b: "Burocracia e regras."}] },
            { pairs: [{a: "Homesick and lonely.", b: "Com saudades de casa e solitário."}, {a: "Worried and frustrated.", b: "Preocupado e frustrado."}, {a: "Excited and confident.", b: "Animado e confiante."}, {a: "Scared and surprised.", b: "Assustado e surpreso."}, {a: "Calm and hopeful.", b: "Calmo e esperançoso."}] },
            { pairs: [{a: "Tomorrow and tonight.", b: "Amanhã e hoje à noite."}, {a: "Soon and later.", b: "Em breve e mais tarde."}, {a: "Next week and next month.", b: "Semana que vem e mês que vem."}, {a: "In the morning.", b: "De manhã."}, {a: "In the evening.", b: "À noite."}] },
            { pairs: [{a: "Everything will be okay.", b: "Tudo vai dar certo."}, {a: "You shouldn't be alone.", b: "Você não deveria estar sozinho."}, {a: "Talk to someone you trust.", b: "Fale com alguém em quem você confia."}, {a: "Don't spread rumors.", b: "Não espalhe boatos."}, {a: "We must stop this.", b: "Nós devemos parar isto."}] },

            // Type 6.4: Word to Simple Definition in English (Groups 31-40)
            { pairs: [{a: "Refugee", b: "A person forced to leave their country due to war."}, {a: "Asylum", b: "Protection granted by a nation to a refugee."}, {a: "Conflict", b: "A serious disagreement or a state of war."}, {a: "Flee", b: "To run away from a dangerous situation quickly."}, {a: "Border", b: "The line that separates two different countries."}] },
            { pairs: [{a: "Bureaucracy", b: "Complicated rules and processes in a government."}, {a: "Discrimination", b: "Unfair treatment of people based on their category."}, {a: "Barrier", b: "Something that prevents movement or communication."}, {a: "Isolation", b: "The state of being alone or separated from others."}, {a: "Scarcity", b: "A situation where there is not enough of something."}] },
            { pairs: [{a: "Homesick", b: "Missing your home and family very much."}, {a: "Frustrated", b: "Feeling annoyed because you cannot achieve a goal."}, {a: "Confident", b: "Feeling sure about your own abilities or a situation."}, {a: "Empathy", b: "The ability to understand how someone else feels."}, {a: "Hopeful", b: "Feeling that good things will happen in the future."}] },
            { pairs: [{a: "Must", b: "Used for strong personal necessity or advice."}, {a: "Have to", b: "Used for rules or laws coming from outside."}, {a: "Mustn't", b: "Used to say that something is strictly prohibited."}, {a: "Don't have to", b: "Used to say that something is not necessary."}, {a: "Obligation", b: "A duty or commitment that you are required to do."}] },
            { pairs: [{a: "Wish", b: "To want something that is not real in the present."}, {a: "If only", b: "An intensive way to express a wish or a regret."}, {a: "Regret", b: "Feeling sad about something you did or didn't do."}, {a: "Desire", b: "A strong feeling of wanting to have something."}, {a: "Imaginary", b: "Something that exists only in the mind, not in reality."}] },
            { pairs: [{a: "Adapt", b: "To change your behavior to fit a new situation."}, {a: "Integrate", b: "To become a full member of a new group or society."}, {a: "Potential", b: "The possibility of becoming something great."}, {a: "Resource", b: "A supply of something useful like money or skills."}, {a: "Career", b: "A profession or job that you do for a long time."}] },
            { pairs: [{a: "Newcomer", b: "A person who has just arrived in a place."}, {a: "Migrant", b: "A person moving to another place to find work."}, {a: "Principal", b: "The person who is the leader of the school."}, {a: "Counselor", b: "A person who gives advice and support to students."}, {a: "Classmate", b: "A person who is in the same class as you at school."}] },
            { pairs: [{a: "Support", b: "To give help and encouragement to a friend."}, {a: "Respect", b: "To treat others with kindness and consideration."}, {a: "Trust", b: "To believe that someone is honest and reliable."}, {a: "Report", b: "To tell an authority about a problem or crime."}, {a: "Block", b: "To stop someone from contacting you on the web."}] },
            { pairs: [{a: "Assembly", b: "A meeting of all the students and teachers."}, {a: "Campaign", b: "A series of actions intended to achieve a goal."}, {a: "Workshop", b: "A meeting where people learn and practice skills."}, {a: "Presentation", b: "Giving a speech or showing a project to others."}, {a: "Arrangement", b: "A plan that has been organized for the future."}] },
            { pairs: [{a: "Past Simple", b: "Tense for finished actions at a specific time."}, {a: "Past Perfect", b: "Tense for the 'past of the past' (had done)."}, {a: "Present Simple", b: "Tense for habits and general daily routines."}, {a: "Continuous", b: "Form of the verb ending in -ing for actions in progress."}, {a: "Auxiliary", b: "A helping verb like 'do', 'have', or 'must'."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 items) ---
        7: [
            { q: "Why did Ahmed have to flee his country?", options: ["Because of the dangerous conflict there.", "I wish I were rich.", "Tomorrow at 8 AM.", "He is a new smartphone."], a: "Because of the dangerous conflict there." },
            { q: "What must a refugee do when they cross the border?", options: ["They must register with the authorities.", "It is a delicious cake.", "Since last Monday.", "No, thank you."], a: "They must register with the authorities." },
            { q: "Where do you have to apply for a visa?", options: ["At the national consulate or embassy.", "I feel very homesick today.", "Because it is red.", "Yes, I do."], a: "At the national consulate or embassy." },
            { q: "Who is the newcomer in your classroom?", options: ["His name is Ahmed.", "It is a technical blueprint.", "In the science museum.", "To reinvent the wheel."], a: "His name is Ahmed." },
            { q: "When are you going to talk to the school counselor?", options: ["I am meeting her tomorrow morning.", "She is very kind and supportive.", "Because I am lonely.", "No, she isn't."], a: "I am meeting her tomorrow morning." },
            { q: "What do you wish you had done before moving abroad?", options: ["I wish I had studied the language more.", "I am studying history now.", "In 1903.", "With a hammer."], a: "I wish I had studied the language more." },
            { q: "How is your cousin adapting to the new environment?", options: ["He is struggling with culture shock.", "He is a famous inventor.", "At the park.", "Yes, he is."], a: "He is struggling with culture shock." },
            { q: "Why is discrimination prohibited at school?", options: ["Because everyone deserves respect and safety.", "It is a blue book.", "Since January.", "By 10 PM."], a: "Because everyone deserves respect and safety." },
            { q: "What kind of support do asylum seekers need?", options: ["They need legal help and a safe place to stay.", "They are flying to Paris.", "It is not rocket science.", "Alexander Graham Bell."], a: "They need legal help and a safe place to stay." },
            { q: "Where does the principal speak about the campaign?", options: ["At the school assembly in the gym.", "She is the head of the school.", "Tomorrow.", "No, she doesn't."], a: "At the school assembly in the gym." },
            { q: "Who must we talk to if we see bullying?", options: ["We must tell a teacher or an adult we trust.", "It is a dangerous conflict.", "In the hallway.", "For two hours."], a: "We must tell a teacher or an adult we trust." },
            { q: "What is the biggest challenge for a migrant?", options: ["Often it is the language barrier.", "He is an engineer.", "Since 2010.", "Yes, it is."], a: "Often it is the language barrier." },
            { q: "When did they cross the border?", options: ["They crossed it at night to be safe.", "The border is a line.", "To find work.", "No, they hadn't."], a: "They crossed it at night to be safe." },
            { q: "Why do you feel so homesick?", options: ["Because I miss my family and my home.", "Because I have a new laptop.", "In the afternoon.", "Yes, I am."], a: "Because I miss my family and my home." },
            { q: "What does 'bureaucracy' mean?", options: ["It refers to complex official rules and procedures.", "It is a type of robot.", "I have been waiting.", "No, it isn't."], a: "It refers to complex official rules and procedures." },
            { q: "Who is seeking asylum in Europe?", options: ["Many refugees from the war zone are.", "Asylum is a safe place.", "Since Monday.", "Yes, they are."], a: "Many refugees from the war zone are." },
            { q: "How can we help Ahmed adapt?", options: ["By being patient and showing empathy.", "He is a refugee.", "In the classroom.", "With a pencil."], a: "By being patient and showing empathy." },
            { q: "Why must you show your ID at the immigration office?", options: ["Because it is a legal requirement.", "I wish I had one.", "Yesterday morning.", "No, I don't."], a: "Because it is a legal requirement." },
            { q: "What do you wish were different about the process?", options: ["I wish it were much simpler.", "I am an inventor.", "Since yesterday.", "No, I didn't."], a: "I wish it were much simpler." },
            { q: "Who is going to support the new student?", options: ["Albert and Celine are going to support him.", "He feels lonely.", "In the cafeteria.", "All morning."], a: "Albert and Celine are going to support him." },
            { q: "When must the document be signed?", options: ["It must be signed by Friday afternoon.", "It is an important contract.", "In the office.", "Yes, it must."], a: "It must be signed by Friday afternoon." },
            { q: "Why is empathy vital in a multicultural school?", options: ["To help different people understand each other.", "It is a big school.", "Since October.", "No, it isn't."], a: "To help different people understand each other." },
            { q: "What had the migrants done before arriving?", options: ["They had traveled for many days.", "They are seeking work.", "At the border.", "Yes, they did."], a: "They had traveled for many days." },
            { q: "Who is responsible for the 'Kindness First' project?", options: ["The school board and the principal are.", "It is a great campaign.", "Next week.", "No, thank you."], a: "The school board and the principal are." },
            { q: "How long have you been living abroad?", options: ["I have been living here for three years.", "I had lived in Brazil before.", "It is a new environment.", "Yes, I have."], a: "I have been living here for three years." },
            { q: "Why is he frustrated with the visa papers?", options: ["Because there is too much bureaucracy.", "He is a migrant.", "In the bag.", "No, he isn't."], a: "Because there is too much bureaucracy." },
            { q: "What do you regret about the past?", options: ["If only I had known how hard it would be!", "I am going to the mall.", "Since 2020.", "Yes, I did."], a: "If only I had known how hard it would be!" },
            { q: "Where can refugees find safe resources?", options: ["At the local community center.", "They are very brave.", "For six months.", "No, they can't."], a: "At the local community center." },
            { q: "Who is struggling with culture shock?", options: ["Maria is, because everything is new to her.", "Culture is interesting.", "In the library.", "Yes, she is."], a: "Maria is, because everything is new to her." },
            { q: "Why must we respect local laws?", options: ["To ensure a safe and integrated society.", "The laws are in a book.", "Every day.", "No, we aren't."], a: "To ensure a safe and integrated society." },
            { q: "When did the conflict begin?", options: ["It began three years ago.", "The conflict is dangerous.", "In the city center.", "Yes, it did."], a: "It began three years ago." },
            { q: "What do you have to do to get a work permit?", options: ["You have to submit a formal application.", "I want to find a job.", "In the morning.", "No, I don't."], a: "You have to submit a formal application." },
            { q: "Who do you trust at REACH school?", options: ["I trust my best friend and the counselor.", "It is a safe place.", "Since January.", "Yes, I am."], a: "I trust my best friend and the counselor." },
            { q: "Why is discrimination prohibited?", options: ["Because it causes isolation and hurt.", "It is an 8th-grade project.", "In the hallway.", "No, it isn't."], a: "Because it causes isolation and hurt." },
            { q: "What do they wish they could change now?", options: ["They wish the language barrier were gone.", "They are learning English.", "At 4 PM.", "Yes, they do."], a: "They wish the language barrier were gone." },
            { q: "Where are the asylum seekers waiting?", options: ["They are waiting at the registration desk.", "They have been waiting for hours.", "To be safe.", "Yes, they are."], a: "They are waiting at the registration desk." },
            { q: "How do you feel about your personal growth?", options: ["I am feeling very confident and hopeful.", "It takes time.", "In the future.", "No, I don't."], a: "I am feeling very confident and hopeful." },
            { q: "Why did they flee at night?", options: ["To escape the danger unseen.", "The night is dark.", "At the border.", "Yes, they did."], a: "To escape the danger unseen." },
            { q: "What is the goal of the 'Kindness First' project?", options: ["To stop bullying and rumors.", "It starts next Monday.", "With the principal.", "No, it isn't."], a: "To stop bullying and rumors." },
            { q: "Who is helping the newcomers adapt?", options: ["The student mentors are helping them.", "Adaptation is hard.", "In the gym.", "Yes, they are."], a: "The student mentors are helping them." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 items) ---
        8: [
            { sent: "Ahmed is a **tourist** who had to flee his country because of war.", wrong: "tourist", options: ["Refugee", "Citizen", "Robot", "Blueprint"], a: "Refugee" },
            { sent: "We have to show our **backpacks** at the border to enter the country.", wrong: "backpacks", options: ["Passports", "Blueprints", "Machines", "Puzzles"], a: "Passports" },
            { sent: "Sarah felt a strong **electricity** shock when she arrived in Japan.", wrong: "electricity", options: ["Culture", "Lightbulb", "Rocket", "Software"], a: "Culture" },
            { sent: "There is too much **software** to get a visa; there are too many forms.", wrong: "software", options: ["Bureaucracy", "Hardware", "Code", "Universe"], a: "Bureaucracy" },
            { sent: "I feel **excited** because I miss my family back home.", wrong: "excited", options: ["Homesick", "Confident", "Powerful", "Useful"], a: "Homesick" },
            { sent: "We must **encourage** discrimination against newcomers.", wrong: "encourage", options: ["Fight/Stop", "Invent", "Write", "Build"], a: "Fight/Stop" },
            { sent: "The language **bridge** makes it difficult for him to talk to us.", wrong: "bridge", options: ["Barrier", "Blueprint", "Machine", "Robot"], a: "Barrier" },
            { sent: "You **don't have to** steal; it is a crime and a rule.", wrong: "don't have to", options: ["Mustn't", "Wish", "If only", "Had to"], a: "Mustn't" },
            { sent: "He is a **migrant** who travels for one week for vacation.", wrong: "migrant", options: ["Tourist", "Refugee", "Inventor", "Creator"], a: "Tourist" },
            { sent: "The **principal** separates two different countries on the map.", wrong: "principal", options: ["Border", "Counselor", "Newcomer", "Refugee"], a: "Border" },
            { sent: "I wish I **am** in my country right now.", wrong: "am", options: ["Were/Was", "Had been", "Have been", "Be"], a: "Were/Was" },
            { sent: "If only I **have** known about the rules before I came!", wrong: "have", options: ["Had", "Was", "Been", "Did"], a: "Had" },
            { sent: "The refugee center provides **conflict** to all families in need.", wrong: "conflict", options: ["Support/Help", "Bureaucracy", "Discrimination", "Rumor"], a: "Support/Help" },
            { sent: "We must show **discrimination** to understand how others feel.", wrong: "discrimination", options: ["Empathy", "Isolation", "Scarcity", "Barrier"], a: "Empathy" },
            { sent: "I feel very **confident** at the new school because I have no friends.", wrong: "confident", options: ["Lonely/Isolated", "Excited", "Happy", "Safe"], a: "Lonely/Isolated" },
            { sent: "You **mustn't** pay for the bus; it is free for refugees.", wrong: "mustn't", options: ["Don't have to", "Must", "Have to", "Should"], a: "Don't have to" },
            { sent: "He had to **smile** from his home because it was a war zone.", wrong: "smile", options: ["Flee/Escape", "Build", "Buy", "Read"], a: "Flee/Escape" },
            { sent: "Spreading a **campaign** about your classmates can hurt them.", wrong: "campaign", options: ["Rumor", "Solution", "Potential", "Resource"], a: "Rumor" },
            { sent: "He is an asylum **runner** seeking protection in Canada.", wrong: "runner", options: ["Seeker", "Creator", "Scientist", "Engineer"], a: "Seeker" },
            { sent: "I wish the process **is** faster than it is now.", wrong: "is", options: ["Were/Was", "Had been", "Being", "Are"], a: "Were/Was" },
            { sent: "Lack of **isolation** makes people feel very lonely.", wrong: "isolation", options: ["Integration", "Empathy", "Potential", "Resource"], a: "Integration" },
            { sent: "Newcomers must **flee** to the local customs to be happy.", wrong: "flee", options: ["Adapt", "Seek", "Block", "Leave"], a: "Adapt" },
            { sent: "You **don't have to** smoke in the hospital; it is forbidden.", wrong: "don't have to", options: ["Mustn't", "Must", "Have to", "Wish"], a: "Mustn't" },
            { sent: "If only he **isn't** so rude to the migrants!", wrong: "isn't", options: ["Weren't/Wasn't", "Hadn't been", "Doesn't", "Not"], a: "Weren't/Wasn't" },
            { sent: "The **visa** separates the North from the South.", wrong: "visa", options: ["Border", "Bureaucracy", "Conflict", "Process"], a: "Border" },
            { sent: "I am **seeking** for my family because I miss them.", wrong: "seeking", options: ["Homesick", "Confident", "Excited", "Calm"], a: "Homesick" },
            { sent: "We must fight against **integration** at our school.", wrong: "integration", options: ["Discrimination/Bullying", "Empathy", "Support", "Respect"], a: "Discrimination/Bullying" },
            { sent: "He has a lot of **discrimination** to become a great doctor.", wrong: "discrimination", options: ["Potential", "Bureaucracy", "Conflict", "Barrier"], a: "Potential" },
            { sent: "You **have to** bring a knife to school; it is very dangerous.", wrong: "have to", options: ["Mustn't", "Don't have to", "Wish", "Had"], a: "Mustn't" },
            { sent: "I wish I **did go** to the party last night!", wrong: "did go", options: ["Had gone", "Went", "Were", "Go"], a: "Had gone" },
            { sent: "**Emigration** is the act of coming into a new country to live.", wrong: "Emigration", options: ["Immigration", "Empathy", "Integration", "Isolation"], a: "Immigration" },
            { sent: "The school **counselor** is the head of the whole school.", wrong: "counselor", options: ["Principal", "Newcomer", "Migrant", "Refugee"], a: "Principal" },
            { sent: "It is **safe** to walk in a war zone.", wrong: "safe", options: ["Dangerous", "Stylish", "Easy", "Cheap"], a: "Dangerous" },
            { sent: "If only I **study** more before the exam!", wrong: "study", options: ["Had studied", "Studied", "Was studying", "Am studying"], a: "Had studied" },
            { sent: "We are seeking **discrimination** to improve our lives.", wrong: "discrimination", options: ["Opportunities", "Barriers", "Conflicts", "Rumors"], a: "Opportunities" },
            { sent: "You **don't have to** have a passport to travel abroad.", wrong: "don't have to", options: ["Have to", "Mustn't", "Wish", "If only"], a: "Have to" },
            { sent: "I feel **angry** for her because she has no one to talk to.", wrong: "angry", options: ["Sorry/Sad", "Confident", "Surprised", "Excited"], a: "Sorry/Sad" },
            { sent: "The **bureaucracy** between the US and Mexico is long.", wrong: "bureaucracy", options: ["Border", "Visa", "Conflict", "Process"], a: "Border" },
            { sent: "She wishes she **is** taller.", wrong: "is", options: ["Were/Was", "Are", "Been", "Has been"], a: "Were/Was" },
            { sent: "We **mustn't** wait for the bus; we can walk if we want.", wrong: "mustn't", options: ["Don't have to", "Must", "Have to", "Shouldn't"], a: "Don't have to" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 items) ---
        9: [
            { audio: "Why did the refugees have to flee?", options: ["Because of the war in their country.", "I have two brothers.", "In the science museum.", "They are rich."], a: "Because of the war in their country." },
            { audio: "Do you have to show a passport at the border?", options: ["Yes, it is a legal requirement.", "I fly in 1903.", "No, it's a robot.", "I wish I were rich."], a: "Yes, it is a legal requirement." },
            { audio: "What do you wish were different now?", options: ["I wish the process were simpler.", "I am a student.", "For three years.", "Yes, I do."], a: "I wish the process were simpler." },
            { audio: "Why are you so homesick?", options: ["Because I miss my family very much.", "She is an engineer.", "In the office.", "Every Saturday."], a: "Because I miss my family very much." },
            { audio: "What must we do about discrimination?", options: ["We must fight against it.", "Because he is a robot.", "Since 2010.", "Yes, I am."], a: "We must fight against it." },
            { audio: "Had the family escaped before the conflict started?", options: ["Yes, they had already found safety.", "He is a mechanic.", "With a tool.", "No, I didn't."], a: "Yes, they had already found safety." },
            { audio: "How long has she been waiting for her visa?", options: ["She has been waiting for six months.", "It had rained yesterday.", "The visa is blue.", "I am twelve."], a: "She has been waiting for six months." },
            { audio: "Do you have to wear a uniform to school?", options: ["Yes, it is a school rule.", "They are researchers.", "For a long time.", "It fits in my pocket."], a: "Yes, it is a school rule." },
            { audio: "What do you regret about the journey?", options: ["I wish I had brought more food.", "I have been bringing my bag.", "Since Monday.", "No, I am not."], a: "I wish I had brought more food." },
            { audio: "Why is there so much bureaucracy?", options: ["Because the rules are very complex.", "He had driven a bus before.", "The car is fast.", "Yes, he has."], a: "Because the rules are very complex." },
            { audio: "If only I had studied harder! Why do I say this?", options: ["Because you failed the test.", "I am a programmer.", "The computer is on.", "In January."], a: "Because you failed the test." },
            { audio: "Who is the newcomer in your class?", options: ["A refugee student named Ahmed.", "I had been waiting too.", "In the hallway.", "Yes, they have."], a: "A refugee student named Ahmed." },
            { audio: "Why are you feeling so frustrated?", options: ["Because of the language barrier.", "Because I had eaten an apple.", "The ground is brown.", "No, it isn't."], a: "Because of the language barrier." },
            { audio: "Must we respect the local laws?", options: ["Yes, everyone must follow them.", "I go by train.", "Since January.", "My name is Paul."], a: "Yes, everyone must follow them." },
            { audio: "What are you seeking in this new country?", options: ["I am seeking better opportunities.", "I had read it before.", "The book is blue.", "Yes, I have."], a: "I am seeking better opportunities." },
            { audio: "Do you wish you could speak French?", options: ["Yes, it would help me adapt.", "She is my friend.", "At school.", "For two hours."], a: "Yes, it would help me adapt." },
            { audio: "When are you meeting the counselor?", options: ["Tomorrow at 10 AM.", "Because I am a student.", "Since 7 AM.", "No, I wasn't."], a: "Tomorrow at 10 AM." },
            { audio: "Mustn't we park here?", options: ["No, it is a prohibited zone.", "It is a new app.", "On the screen.", "Yes, it did."], a: "No, it is a prohibited zone." },
            { audio: "Is everything going to be okay?", options: ["Yes, don't worry, we are safe.", "He has been building it.", "The robot is smart.", "By tomorrow."], a: "Yes, don't worry, we are safe." },
            { audio: "How long has it been raining at the border?", options: ["It has been raining all week.", "It had been cold.", "The snow is white.", "No, it isn't."], a: "It has been raining all week." },
            { audio: "Did you have to leave your belongings behind?", options: ["Yes, we had no space in the car.", "I have been eating pizza.", "In the kitchen.", "All afternoon."], a: "Yes, we had no space in the car." },
            { audio: "Who is the principal talking to?", options: ["She is talking to a migrant family.", "I had seen it before.", "The news is interesting.", "Yes, I have."], a: "She is talking to a migrant family." },
            { audio: "Do you feel isolated at school?", options: ["A little, because of the culture shock.", "It has been shining.", "The sun is hot.", "By 6 PM."], a: "A little, because of the culture shock." },
            { audio: "Must you sign the papers now?", options: ["Yes, it is an urgent obligation.", "I have been studying English.", "The bell is loud.", "No, I hadn't."], a: "Yes, it is an urgent obligation." },
            { audio: "What do you wish your parents knew?", options: ["I wish they knew how much I miss them.", "I had done my homework.", "Technology is fast.", "Yes, I am."], a: "I wish they knew how much I miss them." },
            { audio: "Is job scarcity a problem here?", options: ["Yes, many people are looking for work.", "She is working hard.", "At school.", "All week."], a: "Yes, many people are looking for work." },
            { audio: "Why are you so surprised?", options: ["Because I didn't expect to see you!", "Because they are inventors.", "Since 2010.", "No, it isn't."], a: "Because I didn't expect to see you!" },
            { audio: "Had he already found a job when he arrived?", options: ["No, he had been seeking one for months.", "It is a strong machine.", "In the factory.", "For an hour."], a: "No, he had been seeking one for months." },
            { audio: "How long have they been struggling?", options: ["They have been struggling since the war began.", "They had seen the stars.", "The universe is infinite.", "Yes, they have."], a: "They have been struggling since the war began." },
            { audio: "Do you have to pay the entry fee?", options: ["No, students don't have to pay.", "I have been looking at robots.", "It is in the museum.", "All morning."], a: "No, students don't have to pay." },
            { audio: "If only I were back home! What does this mean?", options: ["That you are currently abroad and sad.", "Because they have been studying.", "On Fridays.", "No, they aren't."], a: "That you are currently abroad and sad." },
            { audio: "Must we stop the bullies?", options: ["Yes, it is our duty to support others.", "She has been saving money.", "The file is large.", "By 10 o'clock."], a: "Yes, it is our duty to support others." },
            { audio: "How long has he been driving his taxi?", options: ["He has been driving for ten hours.", "He had used a different one before.", "The app is free.", "Yes, he has."], a: "He has been driving for ten hours." },
            { audio: "Do you wish you hadn't left your country?", options: ["Sometimes, when I feel lonely.", "They are my friends.", "On the phone.", "Since noon."], a: "Sometimes, when I feel lonely." },
            { audio: "What is the principal going to speak about?", options: ["She is going to talk about internet safety.", "I had finished my tasks.", "It is Wednesday.", "Yes, I have."], a: "She is going to talk about internet safety." },
            { audio: "Had they already visited the border center?", options: ["Yes, they had been there last week.", "They are from Ohio.", "The airplane is small.", "By 1903."], a: "Yes, they had been there last week." },
            { audio: "Why were you crying?", options: ["Because I was feeling homesick.", "Because I had already finished my work.", "Laughter is healthy.", "No, I wasn't."], a: "Because I was feeling homesick." },
            { audio: "Must she wear a uniform to the meeting?", options: ["No, she doesn't have to.", "It is a lightning bolt.", "In our homes.", "All night."], a: "No, she doesn't have to." },
            { audio: "How long has she been researching the laws?", options: ["She has been researching them all week.", "She had found it last year.", "She is a scientist.", "Since morning."], a: "She has been researching them all week." },
            { audio: "Had you written the application before the deadline?", options: ["Yes, I had finished it on Monday.", "I have been writing all day.", "The letter is on the desk.", "No, I haven't."], a: "Yes, I had finished it on Monday." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (Listening) ---
        10: [
            { audio: "The refugee needs a safe place.", sent: "The ___ needs a ___ place.", blanks: ["refugee", "safe"] },
            { audio: "I wish I spoke his language.", sent: "I ___ I ___ his language.", blanks: ["wish", "spoke"] },
            { audio: "You have to show your passport.", sent: "You ___ to ___ your passport.", blanks: ["have", "show"] },
            { audio: "If only he had arrived earlier.", sent: "If ___ he ___ arrived earlier.", blanks: ["only", "had"] },
            { audio: "We must fight against discrimination.", sent: "We ___ fight ___ discrimination.", blanks: ["must", "against"] },
            { audio: "I have been working here since 2010.", sent: "I have been ___ here ___ 2010.", blanks: ["working", "since"] },
            { audio: "He mustn't smoke in the hospital.", sent: "He ___ smoke in the ___.", blanks: ["mustn't", "hospital"] },
            { audio: "She wishes she had more money.", sent: "She wishes she ___ more ___.", blanks: ["had", "money"] },
            { audio: "I don't have to work today.", sent: "I ___ have to ___ today.", blanks: ["don't", "work"] },
            { audio: "The asylum seeker is waiting for papers.", sent: "The ___ seeker is ___ for papers.", blanks: ["asylum", "waiting"] },
            { audio: "We wish you were here with us.", sent: "We ___ you ___ here with us.", blanks: ["wish", "were"] },
            { audio: "If only they had found safety.", sent: "If ___ they ___ found safety.", blanks: ["only", "had"] },
            { audio: "You have to follow the rules.", sent: "You ___ to ___ the rules.", blanks: ["have", "follow"] },
            { audio: "He must study harder to succeed.", sent: "He ___ study ___ to succeed.", blanks: ["must", "harder"] },
            { audio: "She has been struggling with culture shock.", sent: "She has been ___ with ___ shock.", blanks: ["struggling", "culture"] },
            { audio: "I wish I had studied more.", sent: "I ___ I ___ studied more.", blanks: ["wish", "had"] },
            { audio: "They had to flee the conflict.", sent: "They ___ to ___ the conflict.", blanks: ["had", "flee"] },
            { audio: "The language barrier is a challenge.", sent: "The ___ barrier is a ___.", blanks: ["language", "challenge"] },
            { audio: "He feels lonely and homesick.", sent: "He ___ lonely and ___.", blanks: ["feels", "homesick"] },
            { audio: "You mustn't ignore bad behavior.", sent: "You ___ ignore ___ behavior.", blanks: ["mustn't", "bad"] },
            { audio: "I don't have to pay now.", sent: "I ___ have to ___ now.", blanks: ["don't", "pay"] },
            { audio: "Everything is going to be okay.", sent: "Everything is ___ to be ___.", blanks: ["going", "okay"] },
            { audio: "He wishes he knew the answer.", sent: "He ___ he ___ the answer.", blanks: ["wishes", "knew"] },
            { audio: "We have to respect everyone.", sent: "We ___ to ___ everyone.", blanks: ["have", "respect"] },
            { audio: "If only I weren't so tired.", sent: "If ___ I ___ so tired.", blanks: ["only", "weren't"] },
            { audio: "The newcomer is adapting well.", sent: "The ___ is ___ well.", blanks: ["newcomer", "adapting"] },
            { audio: "I have been waiting for an hour.", sent: "I have been ___ for an ___.", blanks: ["waiting", "hour"] },
            { audio: "She must talk to her parents.", sent: "She ___ talk to her ___.", blanks: ["must", "parents"] },
            { audio: "You have to sign the document.", sent: "You ___ to ___ the document.", blanks: ["have", "sign"] },
            { audio: "I wish I hadn't said that.", sent: "I ___ I ___ said that.", blanks: ["wish", "hadn't"] },
            { audio: "They mustn't cross the border.", sent: "They ___ cross the ___.", blanks: ["mustn't", "border"] },
            { audio: "He doesn't have to leave.", sent: "He ___ have to ___.", blanks: ["doesn't", "leave"] },
            { audio: "I wish it were simpler.", sent: "I ___ it ___ simpler.", blanks: ["wish", "were"] },
            { audio: "We must stop the cyberbullying.", sent: "We ___ stop the ___.", blanks: ["must", "cyberbullying"] },
            { audio: "If only she had stayed.", sent: "If ___ she ___ stayed.", blanks: ["only", "had"] },
            { audio: "I have been seeking work.", sent: "I ___ been ___ work.", blanks: ["have", "seeking"] },
            { audio: "You must be patient.", sent: "You ___ be ___.", blanks: ["must", "patient"] },
            { audio: "She has to apply today.", sent: "She ___ to ___ today.", blanks: ["has", "apply"] },
            { audio: "I wish I could fly.", sent: "I ___ I ___ fly.", blanks: ["wish", "could"] },
            { audio: "We had already eaten.", sent: "We ___ already ___.", blanks: ["had", "eaten"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE ---
        11: [
            {
                title: "Meeting Ahmed",
                lines: [
                    { speaker: "Celine", text: "Albert, ___ the newcomer yet? His name is Ahmed.", options: ["have you met", "did you meet"], a: "have you met" },
                    { speaker: "Albert", text: "Yes, he is a refugee who ___ flee his country because of conflict.", options: ["had to", "must"], a: "had to" },
                    { speaker: "Celine", text: "He ___ feel very lonely in such a different environment.", options: ["must feel", "wish feels"], a: "must feel" },
                    { speaker: "Albert", text: "He is currently struggling with the language ___ and culture shock.", options: ["barrier", "scarcity"], a: "barrier" },
                    { speaker: "Celine", text: "I ___ I could speak his language fluently to make him feel welcome.", options: ["wish", "if only"], a: "wish" }
                ]
            },
            {
                title: "School Rules and Uniforms",
                lines: [
                    { speaker: "Sarah", text: "Do we ___ wear a formal uniform for the assembly tomorrow?", options: ["have to", "must"], a: "have to" },
                    { speaker: "Mike", text: "Yes. You ___ wear sneakers or jeans.", options: ["mustn't", "don't have to"], a: "mustn't" },
                    { speaker: "Sarah", text: "___ I had bought a new pair of trousers last weekend!", options: ["If only", "I wish"], a: "If only" },
                    { speaker: "Mike", text: "You can borrow some. My brother ___ attend the morning session.", options: ["doesn't have to", "mustn't"], a: "doesn't have to" },
                    { speaker: "Sarah", text: "Thanks, Mike! I ___ I were as organized as you are.", options: ["wish", "must"], a: "wish" }
                ]
            },
            {
                title: "Adapting to Japan",
                lines: [
                    { speaker: "Albert", text: "How is your cousin adapting? He ___ take off his shoes everywhere.", options: ["has to", "must"], a: "has to" },
                    { speaker: "Celine", text: "He says, '___ I had studied Japanese more before I left.'", options: ["If only", "Must I"], a: "If only" },
                    { speaker: "Albert", text: "Culture ___ is a real challenge for everyone.", options: ["shock", "scarcity"], a: "shock" },
                    { speaker: "Celine", text: "He ___ be patient because integration takes time.", options: ["must", "wishes"], a: "must" },
                    { speaker: "Albert", text: "I ___ he finds some good friends soon to help him.", options: ["wish", "have to"], a: "wish" }
                ]
            },
            {
                title: "Seeking Asylum",
                lines: [
                    { speaker: "Lawyer", text: "To stay here, you ___ apply for asylum immediately.", options: ["must", "wish"], a: "must" },
                    { speaker: "Client", text: "___ provide all these documents today?", options: ["Do I have to", "If only"], a: "Do I have to" },
                    { speaker: "Lawyer", text: "Yes. I ___ the process were simpler, but it isn't.", options: ["wish", "must"], a: "wish" },
                    { speaker: "Client", text: "You ___ lose hope. Your case is strong.", options: ["mustn't", "don't have to"], a: "mustn't" },
                    { speaker: "Lawyer", text: "___ I had brought my original birth certificate!", options: ["If only", "I have to"], a: "If only" }
                ]
            },
            {
                title: "Work Opportunities Abroad",
                lines: [
                    { speaker: "Maria", text: "I am ___ a job in Canada for my career.", options: ["seeking", "fleeing"], a: "seeking" },
                    { speaker: "John", text: "You ___ get a specific work visa first, right?", options: ["have to", "don't must"], a: "have to" },
                    { speaker: "Maria", text: "I ___ I had more work experience in my field.", options: ["wish", "if only"], a: "wish" },
                    { speaker: "John", text: "You have great ___. Just keep trying.", options: ["potential", "conflict"], a: "potential" },
                    { speaker: "Maria", text: "___ the government would make the process easier.", options: ["If only", "I must"], a: "If only" }
                ]
            },
            {
                title: "Feelings of Homesickness",
                lines: [
                    { speaker: "Lucas", text: "I feel so ___ today. I miss the food from my country.", options: ["homesick", "confident"], a: "homesick" },
                    { speaker: "Sara", text: "I ___ I could cook something traditional for you.", options: ["wish", "have to"], a: "wish" },
                    { speaker: "Lucas", text: "___ I hadn't left my favorite recipe book behind!", options: ["If only", "Must I"], a: "If only" },
                    { speaker: "Sara", text: "You ___ feel lonely; we are your new family.", options: ["don't have to", "mustn't"], a: "don't have to" },
                    { speaker: "Lucas", text: "I ___ try harder to adapt to this environment.", options: ["must", "if only"], a: "must" }
                ]
            },
            {
                title: "Anti-Bullying Campaign",
                lines: [
                    { speaker: "Celine", text: "The principal says we ___ treat everyone with respect.", options: ["must", "don't have to"], a: "must" },
                    { speaker: "Albert", text: "We ___ allow discrimination in our school.", options: ["mustn't", "have to"], a: "mustn't" },
                    { speaker: "Celine", text: "___ everyone understood how much mean words can hurt.", options: ["If only", "Must I"], a: "If only" },
                    { speaker: "Albert", text: "We ___ participate in the workshops next week.", options: ["have to", "wish"], a: "have to" },
                    { speaker: "Celine", text: "I ___ our school were always this focused on safety.", options: ["wish", "have to"], a: "wish" }
                ]
            },
            {
                title: "Career Development",
                lines: [
                    { speaker: "Student", text: "Do I ___ choose my career path now?", options: ["have to", "must"], a: "have to" },
                    { speaker: "Counselor", text: "No, you ___ decide yet, but you should explore.", options: ["don't have to", "mustn't"], a: "don't have to" },
                    { speaker: "Student", text: "I ___ I knew what I was good at.", options: ["wish", "must"], a: "wish" },
                    { speaker: "Counselor", text: "___ you had joined the science club last year!", options: ["If only", "Must I"], a: "If only" },
                    { speaker: "Student", text: "I ___ be more proactive from now on.", options: ["must", "have to"], a: "must" }
                ]
            },
            {
                title: "Border Security",
                lines: [
                    { speaker: "Guard", text: "You ___ present your travel documents.", options: ["must", "wish"], a: "must" },
                    { speaker: "Traveler", text: "I ___ I had checked the expiration date earlier.", options: ["wish", "must"], a: "wish" },
                    { speaker: "Guard", text: "You ___ wait here while we verify your ID.", options: ["have to", "don't have to"], a: "have to" },
                    { speaker: "Traveler", text: "___ the queue were moving faster!", options: ["If only", "Must"], a: "If only" },
                    { speaker: "Guard", text: "Please be patient; we ___ ensure safety.", options: ["must", "don't have to"], a: "must" }
                ]
            },
            {
                title: "New Community Center",
                lines: [
                    { speaker: "Volunteer", text: "Newcomers ___ feel welcome here.", options: ["must", "don't have to"], a: "must" },
                    { speaker: "Director", text: "I ___ we had more resources to help them.", options: ["wish", "have to"], a: "wish" },
                    { speaker: "Volunteer", text: "Do they ___ register to receive support?", options: ["have to", "mustn't"], a: "have to" },
                    { speaker: "Director", text: "___ more people volunteered their time.", options: ["If only", "Must"], a: "If only" },
                    { speaker: "Volunteer", text: "We ___ promote integration and respect.", options: ["must", "wish"], a: "must" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER ---
        12: [
            {
                title: "Layla’s Long Journey",
                text: "Layla is a refugee who arrived in Europe six months ago. Last year, she had to flee her home because a violent conflict destroyed her neighborhood. Now, Layla is living in a new environment, but she faces many challenges. She is struggling with a significant language barrier. 'I wish I had learned English more seriously when I was younger,' she says. Layla is determined to adapt and is seeking new opportunities for her children's education.",
                questions: [
                    { q: "Why did Layla leave her home country?", options: ["Long vacation", "Violent conflict", "Better job"], a: "Violent conflict" },
                    { q: "What did Layla have to do to find safety?", options: ["Stay home", "Cross borders", "Buy an airplane"], a: "Cross borders" },
                    { q: "What is Layla’s main challenge?", options: ["Too rich", "Language barrier", "No children"], a: "Language barrier" },
                    { q: "What is Layla’s regret about the past?", options: ["She hadn't moved", "Hadn't studied English more", "Too many children"], a: "Hadn't studied English more" },
                    { q: "What is Layla's attitude toward her new life?", options: ["Giving up", "Determined to adapt", "Wants to return"], a: "Determined to adapt" }
                ]
            },
            {
                title: "Maria’s Career Ambition",
                text: "Maria is a talented engineer who wants to work abroad. She believes that she must improve her technical skills. Currently, she is seeking a job in Canada. However, the immigration process is not simple. Maria has to deal with bureaucracy and obtain a specific work visa. 'I wish the laws were less complicated,' she sighs. Maria also feels homesick whenever she thinks about her parents.",
                questions: [
                    { q: "What is Maria’s profession?", options: ["Teacher", "Engineer", "Counselor"], a: "Engineer" },
                    { q: "Why does Maria want to move to Canada?", options: ["Escape war", "Career opportunities", "Learn language"], a: "Career opportunities" },
                    { q: "What is an obstacle in Maria's journey?", options: ["Lack of skills", "Bureaucracy and visas", "Discrimination"], a: "Bureaucracy and visas" },
                    { q: "What is Maria’s wish regarding the laws?", options: ["More expensive", "Less complicated", "Take more time"], a: "Less complicated" },
                    { q: "How does Maria feel about her parents?", options: ["Angry", "Homesick", "Doesn't trust them"], a: "Homesick" }
                ]
            },
            {
                title: "The Reality of Culture Shock",
                text: "When John moved to Tokyo, he immediately experienced severe culture shock. In Japan, there are many social rules that he didn't know. For instance, he has to take off his shoes before entering many buildings. John is also struggling with loneliness. 'I wish I were more confident in my social skills,' he admits. If only he had researched the local customs more deeply before arriving!",
                questions: [
                    { q: "Where did John move to?", options: ["London", "Tokyo", "Paris"], a: "Tokyo" },
                    { q: "What was John’s first major challenge?", options: ["Job scarcity", "Culture shock", "Broken laptop"], a: "Culture shock" },
                    { q: "Name one rule John must follow.", options: ["Speak loudly", "Take off shoes", "No internet"], a: "Take off shoes" },
                    { q: "Why does John feel lonely?", options: ["He is rude", "Hard to integrate", "Hates technology"], a: "Hard to integrate" },
                    { q: "What is John’s regret?", options: ["Wishes more money", "Hadn't researched customs", "Wish he were doctor"], a: "Hadn't researched customs" }
                ]
            },
            {
                title: "Respect at REACH School",
                text: "At REACH school, the principal says: 'We must respect everyone.' Next week, the school is launching the 'Kindness First' campaign. Students have to participate in empathy exercises. For example, some students have been feeling isolated because of language barriers. 'I wish every student felt safe here,' the counselor says. If only we had started this campaign years ago!",
                questions: [
                    { q: "What is the principal’s main rule?", options: ["Study math", "Respect others", "Wear boots"], a: "Respect others" },
                    { q: "What is the name of the new campaign?", options: ["Safety First", "Kindness First", "Blueprints"], a: "Kindness First" },
                    { q: "Why are some students feeling isolated?", options: ["Language barriers", "Job scarcity", "Rich"], a: "Language barriers" },
                    { q: "What is the counselor’s wish?", options: ["Be principal", "Every student safe", "More tests"], a: "Every student safe" },
                    { q: "What 'mustn't' students do?", options: ["Study hard", "Ignore bullying", "Talk to adults"], a: "Ignore bullying" }
                ]
            },
            {
                title: "Seeking Opportunities",
                text: "Many migrants leave their countries to seek better resources and education. This is called economic migration. These people face obstacles like job scarcity and lack of integration. 'I wish I had more support when I arrived,' says Carlos, from Mexico. He has been working two jobs. He believes education is the key. Carlos has to work long hours, and he mustn't give up.",
                questions: [
                    { q: "Why do economic migrants move?", options: ["Flee war", "Better resources", "Vacation"], a: "Better resources" },
                    { q: "What are some obstacles mentioned?", options: ["Too many friends", "Job scarcity", "Excellent weather"], a: "Job scarcity" },
                    { q: "What is Carlos’s wish?", options: ["More support", "Faster car", "Be a robot"], a: "More support" },
                    { q: "What must Carlos do for his daughter?", options: ["Play soccer", "Work long hours", "Write code"], a: "Work long hours" },
                    { q: "Why is Carlos feeling hopeful?", options: ["Moving again", "Daughter is succeeding", "Found a blueprint"], a: "Daughter is succeeding" }
                ]
            },
            {
                title: "The Language Barrier Dilemma",
                text: "Sarah is a new student who recently emigrated from Italy. She is intelligent, but she is struggling because of the language barrier. She has to translate everything in her head. 'If only I had studied English more before I came!' she thinks. Her teacher tells her that she mustn't be frustrated and that she must be patient with herself.",
                questions: [
                    { q: "Where did Sarah emigrate from?", options: ["France", "Italy", "Japan"], a: "Italy" },
                    { q: "What is Sarah’s main problem?", options: ["Doesn't like history", "Language barrier", "No books"], a: "Language barrier" },
                    { q: "What is Sarah’s past regret?", options: ["Stayed in Italy", "Hadn't studied English", "Wish had cat"], a: "Hadn't studied English" },
                    { q: "What is the teacher’s advice?", options: ["Study more", "Mustn't be frustrated", "Leave class"], a: "Mustn't be frustrated" },
                    { q: "How is the school helping?", options: ["More tests", "Bilingual mentor", "Ignoring her"], a: "Bilingual mentor" }
                ]
            },
            {
                title: "Bureaucracy and Dreams",
                text: "Ahmed’s family has been waiting for permanent residency for over a year. The bureaucracy is incredibly slow. Ahmed’s father is a doctor, but he can't work because he has to wait for his degree to be recognized. 'I wish I could help people here,' he says. If only the process were faster, they could contribute more to their community.",
                questions: [
                    { q: "How long has the family been waiting?", options: ["One week", "Over a year", "Ten years"], a: "Over a year" },
                    { q: "Why is the family stressed?", options: ["Weather", "Slow bureaucracy", "Lost keys"], a: "Slow bureaucracy" },
                    { q: "What is the father’s background?", options: ["Teacher", "Doctor", "Engineer"], a: "Doctor" },
                    { q: "What is the father’s wish?", options: ["Help people here", "Be YouTuber", "More sleep"], a: "Help people here" },
                    { q: "What is Ahmed’s attitude?", options: ["Giving up", "Staying focused", "Angry"], a: "Staying focused" }
                ]
            },
            {
                title: "The Importance of Empathy",
                text: "Empathy is the ability to understand others' feelings. At our school, many students are refugees and migrants. 'I wish I knew how to help them more,' Sarah says. The 'Kindness First' campaign teaches us that we don't have to be perfect, but we must be supportive. If only everyone showed more empathy, our school would be safer.",
                questions: [
                    { q: "What is empathy?", options: ["Run fast", "Understand feelings", "Write code"], a: "Understand feelings" },
                    { q: "Who are the newcomers?", options: ["Robots", "Refugees/Migrants", "Teachers"], a: "Refugees/Migrants" },
                    { q: "What is Sarah’s wish?", options: ["Be rich", "Know how to help", "Home"], a: "Know how to help" },
                    { q: "What 'must' we be?", options: ["Perfect", "Supportive", "Silent"], a: "Supportive" },
                    { q: "What is the condition for safety?", options: ["More homework", "Show more empathy", "Mall opens"], a: "Show more empathy" }
                ]
            },
            {
                title: "Digital Integration",
                text: "In our 9th grade class, the principal is using technology to help integration. Newcomers have to use translation apps on their tablets. 'I wish the internet were more reliable,' one student admits. If only they had provided these gadgets last semester! Now, everyone must learn to communicate through these digital resources.",
                questions: [
                    { q: "Who is using technology to help?", options: ["The principal", "The newcomers", "The neighbors"], a: "The principal" },
                    { q: "What must newcomers use?", options: ["Hardcover books", "Translation apps", "Blueprints"], a: "Translation apps" },
                    { q: "What is the present wish?", options: ["Reliable internet", "New laptop", "Better coffee"], a: "Reliable internet" },
                    { q: "What is the regret?", options: ["Moved away", "Didn't have gadgets earlier", "Studied math"], a: "Didn't have gadgets earlier" },
                    { q: "What must everyone learn?", options: ["To code", "To communicate digitally", "To build machines"], a: "To communicate digitally" }
                ]
            },
            {
                title: "The Legal Journey",
                text: "Seeking legal protection is an obligation for every newcomer. They have to present their case to the counselor. 'I wish I had known about the specific laws,' Maria says after her meeting. If only she had asked for help sooner! Now she has to be patient while her potential is evaluated by the local board.",
                questions: [
                    { q: "What is an obligation for newcomers?", options: ["Buying a house", "Legal protection", "Traveling"], a: "Legal protection" },
                    { q: "Who do they present the case to?", options: ["Principal", "Counselor", "Refugee"], a: "Counselor" },
                    { q: "What does Maria wish?", options: ["Knew about laws", "Was an inventor", "Had more time"], a: "Knew about laws" },
                    { q: "What is the regret?", options: ["Moving abroad", "Didn't ask for help sooner", "Studied less"], a: "Didn't ask for help sooner" },
                    { q: "What must she be now?", options: ["Frustrated", "Patient", "Brave"], a: "Patient" }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER (Context) ---
        13: [
            {
                title: "Ahmed’s New Beginning",
                audio: "Ahmed arrived as a refugee. He had to flee because conflict made it unsafe. Now, he faces a language barrier. He says, 'I wish I spoke English perfectly.' His parents are dealing with bureaucracy for work permits. Ahmed knows he must be patient.",
                questions: [
                    { q: "Why did Ahmed leave his home?", options: ["Travel world", "Conflict was unsafe", "Better school"], a: "Conflict was unsafe" },
                    { q: "What is his biggest struggle?", options: ["Food", "Language barrier", "Teachers"], a: "Language barrier" },
                    { q: "What is his present wish?", options: ["Be rich", "Speak English perfectly", "New car"], a: "Speak English perfectly" },
                    { q: "What are his parents doing?", options: ["Visiting mall", "Dealing with bureaucracy", "Teaching"], a: "Dealing with bureaucracy" },
                    { q: "What is the feeling about the process?", options: ["Easy", "Needs to be faster", "Not necessary"], a: "Needs to be faster" }
                ]
            },
            {
                title: "Maria’s Challenge",
                audio: "Maria moved to Canada for better opportunities. She has to follow many rules. The bureaucracy is very slow. She thought, 'If only I had researched the visa requirements!' She feels homesick every evening. She believes she must improve her integration.",
                questions: [
                    { q: "Why move to Canada?", options: ["Escape war", "Better opportunities", "Visit family"], a: "Better opportunities" },
                    { q: "What is her external obligation?", options: ["Cook", "Follow many rules", "Fly back"], a: "Follow many rules" },
                    { q: "What is her past regret?", options: ["Hadn't moved", "Hadn't researched visas", "Be teacher"], a: "Hadn't researched visas" },
                    { q: "When is she homesick?", options: ["Morning", "Evening", "Weekends"], a: "Evening" },
                    { q: "How will she improve things?", options: ["Leave Canada", "Improve integration", "Sleep more"], a: "Improve integration" }
                ]
            },
            {
                title: "The Workshop",
                audio: "Next Friday, REACH school is organizing a mandatory workshop. Students have to attend. They are going to learn how to identify discrimination. Mrs. Canales says, 'You mustn't ignore rumors.' Sarah wishes everyone understood the impact of words. If only the project had started earlier!",
                questions: [
                    { q: "Is the workshop optional?", options: ["Yes", "No, it's mandatory", "Only for new kids"], a: "No, it's mandatory" },
                    { q: "What will they learn?", options: ["Build robot", "Identify discrimination", "Speak Japanese"], a: "Identify discrimination" },
                    { q: "What is the prohibition?", options: ["Talk in class", "Ignore rumors", "Use computer"], a: "Ignore rumors" },
                    { q: "What does Sarah wish for?", options: ["Holidays", "Understanding word impact", "Smartphone"], a: "Understanding word impact" },
                    { q: "What is the regret?", options: ["Project started earlier", "School smaller", "No homework"], a: "Project started earlier" }
                ]
            },
            {
                title: "Adapting",
                audio: "Adapting takes time. Many face a lack of integration. I have been in Germany for a year. Sometimes I feel frustrated. I wish I were back in my old neighborhood. I have to keep practicing the language. If only I had realized how important empathy was!",
                questions: [
                    { q: "How long in Germany?", options: ["6 months", "1 year", "10 years"], a: "1 year" },
                    { q: "What does lack of integration lead to?", options: ["Jobs", "Loneliness", "Fast learning"], a: "Loneliness" },
                    { q: "What is the present wish?", options: ["Be back in old neighborhood", "New laptop", "Friday"], a: "Be back in old neighborhood" },
                    { q: "What is the daily obligation?", options: ["Sleep", "Practice language", "Soccer"], a: "Practice language" },
                    { q: "What is the regret?", options: ["Ignore them", "Empathy importance", "Math teacher"], a: "Empathy importance" }
                ]
            },
            {
                title: "Migration Bureaucracy",
                audio: "Legal immigration is slowed by bureaucracy. Asylum seekers wait for months. They mustn't leave the city. Many feel anxious. One refugee said, 'If only the laws were simpler!' These people seek a better life.",
                questions: [
                    { q: "What slows the process?", options: ["Interest", "Bureaucracy", "Weather"], a: "Bureaucracy" },
                    { q: "What is a prohibition?", options: ["Eat together", "Leave city", "Speak"], a: "Leave city" },
                    { q: "What is the common wish?", options: ["More resources", "Be tourists", "More games"], a: "More resources" },
                    { q: "What is the specific regret?", options: ["Laws simpler", "Have robot", "Be inventor"], a: "Laws simpler" },
                    { q: "What are they seeking?", options: ["Vacation", "Better life", "Blueprint"], a: "Better life" }
                ]
            },
            {
                title: "Overcoming Discrimination",
                audio: "At REACH, we must practice respect every day. Last year, students were spreading a rumor about a newcomer. She felt isolated. If only someone had reported it sooner! Now, the school has a strict policy: you must report bad behavior.",
                questions: [
                    { q: "Is respect an option?", options: ["Yes", "No, must practice it", "Only teachers"], a: "No, must practice it" },
                    { q: "What caused pain?", options: ["Test", "Rumor", "Broken tool"], a: "Rumor" },
                    { q: "How did the student feel?", options: ["Excited", "Isolated/Sad", "Confident"], a: "Isolated/Sad" },
                    { q: "What is the policy?", options: ["Work alone", "Report bad behavior", "Talk to principal"], a: "Report bad behavior" },
                    { q: "What is the final wish?", options: ["Fewer classes", "Students speak up", "Move school"], a: "Students speak up" }
                ]
            },
            {
                title: "The Dream of Education",
                audio: "Migration families believe kids deserve a better life through education. I interviewed a boy from a conflict zone. He said, 'I wish I had brought my books, but we had to flee quickly.' He has to study twice as hard. He is determined to succeed.",
                questions: [
                    { q: "Why move?", options: ["Cheap clothes", "Education for a better life", "Reinvent wheel"], a: "Education for a better life" },
                    { q: "What is the boy's regret?", options: ["Smartphone", "Brought books", "Be teacher"], a: "Brought books" },
                    { q: "Why leave quickly?", options: ["Late", "Flee conflict", "Wanted to fly"], a: "Flee conflict" },
                    { q: "What is the challenge?", options: ["Bureaucracy", "Language barrier", "Discrimination"], a: "Language barrier" },
                    { q: "What is the obligation?", options: ["Mustn't study", "Study twice as hard", "Wish could sleep"], a: "Study twice as hard" }
                ]
            },
            {
                title: "Global Citizenship",
                audio: "Global citizens have empathy. Newcomers seek safety. If only everyone were more welcoming, integration would be simpler. We don't have to be experts to help. I wish our community were more aware.",
                questions: [
                    { q: "What does it mean?", options: ["Travel", "Have empathy", "5 languages"], a: "Have empathy" },
                    { q: "Why are newcomers here?", options: ["Vacation", "Forced to leave/seek safety", "Buy gadgets"], a: "Forced to leave/seek safety" },
                    { q: "What makes it simpler?", options: ["Everyone welcoming", "More money", "Bigger mall"], a: "Everyone welcoming" },
                    { q: "What don't we have to be?", options: ["Students", "Experts in laws", "Nice"], a: "Experts in laws" },
                    { q: "What is the wish?", options: ["New job", "Community awareness", "Friday"], a: "Community awareness" }
                ]
            },
            {
                title: "Newcomer Support",
                audio: "Our class has a new student. He feels frustrated because he must learn English quickly. I wish I could support him more. If only the language barrier weren't so high! We have to be kind and respect his journey.",
                questions: [
                    { q: "Who is in class?", options: ["A new student", "A robot", "The principal"], a: "A new student" },
                    { q: "Why is he frustrated?", options: ["Lost his bag", "Must learn English quickly", "Hates school"], a: "Must learn English quickly" },
                    { q: "What is the speaker's wish?", options: ["Support him more", "Go to the mall", "Be rich"], a: "Support him more" },
                    { q: "What is the regret?", options: ["Moved away", "Language barrier weren't high", "Failed test"], a: "Language barrier weren't high" },
                    { q: "What must we do?", options: ["Be kind/respect", "Ignore him", "Flee"], a: "Be kind/respect" }
                ]
            },
            {
                title: "Safety Rules",
                audio: "Everyone must follow the safety rules at the border. You have to show your ID and you mustn't carry prohibited items. I wish the process were faster. If only they had more resources to help everyone!",
                questions: [
                    { q: "What must everyone do?", options: ["Study", "Follow safety rules", "Run"], a: "Follow safety rules" },
                    { q: "What do you have to show?", options: ["Laptop", "ID", "Recipe book"], a: "ID" },
                    { q: "What is the prohibition?", options: ["Eat", "Carry prohibited items", "Talk"], a: "Carry prohibited items" },
                    { q: "What is the present wish?", options: ["Process were faster", "New car", "Be a bird"], a: "Process were faster" },
                    { q: "What is the regret?", options: ["Hadn't moved", "Had more resources", "Known truth"], a: "Had more resources" }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT ---
        14: [
            {
                title: "Ahmed's Arrival",
                text: "Ahmed is a [1] (newcomer / tourist) at our school. He is a [2] (refugee / engineer) who had to [3] (flee / build) his country because of a dangerous conflict. Currently, he is experiencing [4] (culture shock / innovation) because everything in this country is different. He [5] (must / wishes) feel very lonely, so we should support him.",
                answers: ["newcomer", "refugee", "flee", "culture shock", "must"]
            },
            {
                title: "Legal Challenges",
                text: "Moving to another country is not easy. You [1] (have to / wish) show your passport at the [2] (border / blueprint). There is often a lot of [3] (bureaucracy / resources) to get a work permit. Maria [4] (wishes / must) the laws were simpler. [5] (If only / Must I) she had known how long the process takes!",
                answers: ["have to", "border", "bureaucracy", "wishes", "If only"]
            },
            {
                title: "Dealing with Regret",
                text: "Lucas is feeling very [1] (frustrated / excited) today. He failed his English test because of the [2] (language barrier / resource). He thinks, '[3] (If only / I wish) I had studied more last weekend!' He [4] (wishes / must) he were more confident. His teacher says he [5] (must / wishes) be patient.",
                answers: ["frustrated", "language barrier", "If only", "wishes", "must"]
            },
            {
                title: "School Campaign",
                text: "Next week, our school is [1] (launching / seeking) a new campaign called 'Kindness First'. We [2] (have to / wish) attend a special assembly on Tuesday. The principal is going to talk about [3] (discrimination / electricity) and how it hurts people. I [4] (wish / must) every student showed more [5] (empathy / scarcity) to their classmates.",
                answers: ["launching", "have to", "discrimination", "wish", "empathy"]
            },
            {
                title: "Seeking a New Life",
                text: "Many [1] (migrants / creators) move to other countries to [2] (seek / build) better opportunities. They often face [3] (job scarcity / code) and a lack of [4] (integration / conflict). I [5] (wish / must) they all find the support they need to succeed.",
                answers: ["migrants", "seek", "job scarcity", "integration", "wish"]
            },
            {
                title: "Strict Rules",
                text: "In this office, you [1] (must / wish) follow the safety protocols. You [2] (mustn't / have to) share your login details with anyone. I [3] (wish / if only) I [4] (hadn't forgotten / won't forget) my ID badge today! Now I [5] (have to / wish) wait for the manager.",
                answers: ["must", "mustn't", "wish", "hadn't forgotten", "have to"]
            },
            {
                title: "Homesickness",
                text: "Celine feels [1] (homesick / powerful) when she thinks about Australia. She [2] (wishes / has to) her friends [3] (were / are) here with her. [4] (If only / Must I) she [5] (had brought / bring) more photos from home! She is going to call her parents tonight.",
                answers: ["homesick", "wishes", "were", "If only", "had brought"]
            },
            {
                title: "Overcoming Isolation",
                text: "[1] (Lack of integration / Code) can make newcomers feel very [2] (lonely / brave). We [3] (must / wish) fight against [4] (discrimination / empathy) at REACH school. I [5] (wish / have to) everyone felt safe and respected.",
                answers: ["Lack of integration", "lonely", "must", "discrimination", "wish"]
            },
            {
                title: "The Resource Center",
                text: "Refugees [1] (have to / mustn't) visit the center to find [2] (resources / conflicts). The staff [3] (must / wishes) provide legal advice. I [4] (wish / must) the queue [5] (were / were not) smaller so everyone could get help quickly.",
                answers: ["have to", "resources", "must", "wish", "were"]
            },
            {
                title: "Future Plans",
                text: "I [1] (wish / must) I could move to a new country. I am [2] (seeking / fleeing) a [3] (career / rumor) in architecture. I [4] (have to / mustn't) learn the language first. [5] (If only / Must I) it were as easy as it looks!",
                answers: ["wish", "seeking", "career", "have to", "If only"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE ---
        15: [
            {
                title: "Ahmed's Barrier",
                audio: "Ahmed is a refugee who had to flee his country. He is struggling with the language barrier. He wishes he could speak English better. He must be patient to adapt.",
                text: "Ahmed is a [1] who had to [2] his country. He is struggling with the [3] barrier. He [4] he could speak English better. He [5] be patient to adapt.",
                answers: ["refugee", "flee", "language", "wishes", "must"]
            },
            {
                title: "Maria's Bureaucracy",
                audio: "Maria is seeking a job in Canada. She has to deal with a lot of bureaucracy. She wishes the process were simpler. If only she had known the rules earlier.",
                text: "Maria is [1] a job in Canada. She has to deal with a lot of [2]. She [3] the process were [4]. If only she [5] known the rules earlier.",
                answers: ["seeking", "bureaucracy", "wishes", "simpler", "had"]
            },
            {
                title: "Respect and Empathy",
                audio: "We must respect everyone at school. You mustn't spread a bad rumor. We need to show empathy to others. If only everyone were kinder.",
                text: "We [1] respect everyone at school. You [2] spread a bad [3]. We need to show [4] to others. If only everyone were [5].",
                answers: ["must", "mustn't", "rumor", "empathy", "kinder"]
            },
            {
                title: "Homesick Desires",
                audio: "I feel homesick because I miss my family. I wish they were here tonight. If only I had saved more money for their trip.",
                text: "I feel [1] because I miss my family. I [2] they [3] here tonight. If only I [4] saved more [5] for their trip.",
                answers: ["homesick", "wish", "were", "had", "money"]
            },
            {
                title: "Border Safety",
                audio: "You have to show your passport at the border. You mustn't carry dangerous items. Safety is a legal obligation for all migrants.",
                text: "You [1] have to show your [2] at the border. You [3] carry [4] items. Safety is a [5] obligation for all migrants.",
                answers: ["have", "passport", "mustn't", "dangerous", "legal"]
            },
            {
                title: "Integration Challenges",
                audio: "The newcomer felt isolated due to a lack of integration. He wished he had more friends. We must support him during this challenge.",
                text: "The newcomer felt [1] due to a lack of [2]. He [3] he had more [4]. We must [5] him during this challenge.",
                answers: ["isolated", "integration", "wished", "friends", "support"]
            },
            {
                title: "Job Scarcity",
                audio: "There is a job scarcity in the new city. Many migrants are looking for work. They must improve their skills to find a career.",
                text: "There is a [1] scarcity in the new city. Many [2] are looking for [3]. They [4] improve their [5] to find a career.",
                answers: ["job", "migrants", "work", "must", "skills"]
            },
            {
                title: "Culture Shock",
                audio: "If only I had studied more Japanese! I am struggling with culture shock. I wish I understood the local customs better.",
                text: "If only I [1] studied more [2]! I am struggling with [3] shock. I [4] I [5] the local customs better.",
                answers: ["had", "Japanese", "culture", "wish", "understood"]
            },
            {
                title: "Classmate Empathy",
                audio: "My classmate had to move quickly from a conflict zone. I wish I had brought him some clothes. We have to be supportive and kind.",
                text: "My [1] had to move quickly from a [2] zone. I [3] I had brought him some clothes. We [4] to be [5] and kind.",
                answers: ["classmate", "conflict", "wish", "have", "supportive"]
            },
            {
                title: "Emigration Facts",
                audio: "Emigration is when you leave your country. Many wish they had more opportunities. If only they could find a safe environment!",
                text: "[1] is when you [2] your country. Many [3] they had more [4]. If only they could find a safe [5]!",
                answers: ["Emigration", "leave", "wish", "opportunities", "environment"]
            }
        ]
    }
});