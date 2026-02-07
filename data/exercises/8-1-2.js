/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */

window.initExercise({
    id: "8-1-2",
    grade: "8th Grade",
    bimester: "1",
    chapter: "2",
    title: "Feelings and Social Responsibility",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES ---
        1: [
            { words: ["going", "to", "report", "am", "the", "I", "comments", "mean"], correct: "I am going to report the mean comments" },
            { words: ["usually", "help", "I", "my", "friends", "school", "at"], correct: "I usually help my friends at school" },
            { words: ["is", "Sarah", "meeting", "at", "me", "tomorrow", "2 PM"], correct: "Sarah is meeting me tomorrow at 2 PM" },
            { words: ["feels", "He", "lonely", "today", "because", "he", "new", "is"], correct: "He feels lonely today because he is new" },
            { words: ["not", "going", "to", "hide", "We", "are", "the", "problem"], correct: "We are not going to hide the problem" },
            { words: ["is", "everything", "to", "going", "okay", "be"], correct: "Everything is going to be okay" },
            { words: ["don't", "bullying", "We", "accept", "school", "this", "at"], correct: "We don't accept bullying at this school" },
            { words: ["are", "you", "meeting", "counselor", "the", "when"], correct: "When are you meeting the counselor" },
            { words: ["am", "feeling", "I", "confident", "about", "project", "the"], correct: "I am feeling confident about the project" },
            { words: ["is", "going", "rain", "it", "to", "later"], correct: "It is going to rain later" },
            { words: ["usually", "they", "have", "lunch", "at", "noon"], correct: "They usually have lunch at noon" },
            { words: ["is", "posting", "Someone", "mean", "things", "online"], correct: "Someone is posting mean things online" },
            { words: ["are", "flying", "We", "to", "Paris", "month", "next"], correct: "We are flying to Paris next month" },
            { words: ["you", "must", "talk", "with", "someone", "trust", "you"], correct: "You must talk with someone you trust" },
            { words: ["are", "you", "How", "feeling", "today"], correct: "How are you feeling today" },
            { words: ["going", "He", "isn't", "to", "tolerate", "cyberbullying"], correct: "He isn't going to tolerate cyberbullying" },
            { words: ["usually", "she", "finishes", "school", "at", "3 PM"], correct: "She usually finishes school at 3 PM" },
            { words: ["are", "having", "We", "a", "campaign", "next", "week"], correct: "We are having a campaign next week" },
            { words: ["worried", "Albert", "looks", "because", "of", "the", "message"], correct: "Albert looks worried because of the message" },
            { words: ["going", "to", "support", "I", "am", "my", "best", "friend"], correct: "I am going to support my best friend" },
            { words: ["usually", "I", "do", "my", "homework", "in", "the", "evening"], correct: "I usually do my homework in the evening" },
            { words: ["are", "you", "doing", "anything", "tonight"], correct: "Are you doing anything tonight" },
            { words: ["going", "is", "the", "principal", "to", "talk", "to", "us"], correct: "The principal is going to talk to us" },
            { words: ["feel", "frustrated", "I", "with", "my", "math", "grade"], correct: "I feel frustrated with my math grade" },
            { words: ["not", "accepting", "she", "is", "his", "apology", "now"], correct: "She is not accepting his apology now" },
            { words: ["you", "Are", "going", "to", "tell", "your", "parents"], correct: "Are you going to tell your parents" },
            { words: ["meeting", "Celine", "Sarah", "is", "at", "park", "the"], correct: "Celine is meeting Sarah at the park" },
            { words: ["bullying", "hurts", "and", "safe", "not", "is"], correct: "Bullying hurts and is not safe" },
            { words: ["going", "we", "Are", "to", "have", "test", "a", "tomorrow"], correct: "Are we going to have a test tomorrow" },
            { words: ["trust", "I", "my", "teacher", "and", "parents"], correct: "I trust my teacher and my parents" },
            { words: ["often", "How", "do", "you", "check", "messages", "your"], correct: "How often do you check your messages" },
            { words: ["going", "It", "is", "to", "be", "fun", "event", "a"], correct: "It is going to be a fun event" },
            { words: ["feeling", "better", "a", "little", "I", "am", "now"], correct: "I am feeling a little better now" },
            { words: ["usually", "we", "relax", "on", "Sundays"], correct: "We usually relax on Sundays" },
            { words: ["report", "You", "should", "mean", "behavior", "always"], correct: "You should always report mean behavior" },
            { words: ["tonight", "they", "watching", "Are", "movie", "a"], correct: "Are they watching a movie tonight" },
            { words: ["going", "She", "to", "stop", "is", "the", "fighting"], correct: "She is going to stop the fighting" },
            { words: ["scared", "The", "cat", "is", "of", "the", "dog"], correct: "The cat is scared of the dog" },
            { words: ["soon", "call", "I", "will", "you"], correct: "I will call you soon" },
            { words: ["going", "to", "visit", "My", "parents", "are", "school", "the"], correct: "My parents are going to visit the school" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES ---
        2: [
            { lines: ["Someone is posting mean comments about me.", "Hi Albert. How are you feeling?", "That is cyberbullying! You must report it.", "I am sad. Look at this message."], order: [1, 3, 0, 2] },
            { lines: ["I am going to talk to Mrs. Canales tomorrow.", "I know. I need help.", "Good idea. I am going to support you.", "Are you going to tell your teacher?"], order: [3, 0, 1, 2] },
            { lines: ["Everything is going to be okay.", "Thanks, Celine. I am feeling a little better now.", "Don't worry. We don't accept bullying here.", "Let's go to class and stay focused."], order: [2, 0, 1, 3] },
            { lines: ["I am meeting Sarah at the park.", "Are you doing anything this weekend?", "No, we are going to relax.", "Are you going to study for the test?"], order: [1, 0, 3, 2] },
            { lines: ["I feel frustrated with math.", "You seem quiet today, Albert. Are you okay?", "You shouldn't deal with this alone.", "I failed the test and I am worried."], order: [1, 3, 0, 2] },
            { lines: ["We are going to have special classes about respect.", "What is the 'Kindness First' campaign?", "We are feeling hopeful that it will help.", "The principal is going to speak tomorrow."], order: [1, 0, 3, 2] },
            { lines: ["He created a new account to bully me.", "That is terrible. Did you block him?", "You must report the new account too.", "Yes, but it didn't stop."], order: [1, 0, 3, 2] },
            { lines: ["I usually wake up at 7 AM.", "How do you start your morning?", "I get up immediately and have breakfast.", "Then I go to school by bus."], order: [1, 0, 2, 3] },
            { lines: ["Look at those dark clouds!", "Oh no! I am going to get wet.", "It is going to rain.", "I didn't bring my umbrella today."], order: [0, 2, 1, 3] },
            { lines: ["I'm feeling great. How are you?", "Good morning, Sarah. How are you feeling?", "I'm a bit nervous about the assembly.", "Don't be afraid. You are confident!"], order: [1, 0, 2, 3] },
            { lines: ["I am sad about the news.", "Why do you look so down?", "Is it about the school project?", "No, my best friend is moving away."], order: [1, 0, 2, 3] },
            { lines: ["No, I am going to see him tonight.", "Have you talked to your father?", "I am going to tell him everything.", "Trust him. He will support you."], order: [1, 0, 2, 3] },
            { lines: ["We are watching a movie tonight.", "What are your plans for tonight?", "Is Celine coming with us?", "Yes, she is meeting us at 8 PM."], order: [1, 0, 2, 3] },
            { lines: ["I feel lonely at the new school.", "It's hard to be the new student.", "I am going to introduce you to my friends.", "Really? That would make me happy."], order: [0, 1, 2, 3] },
            { lines: ["Someone is spreading a rumor about me.", "That isn't ok. Who is doing it?", "It's a student in my 8th grade class.", "We have to stop this behavior now."], order: [0, 1, 2, 3] },
            { lines: ["I usually finish school at 3 PM.", "What time do you finish school?", "Do you go home immediately?", "No, I stay for the soccer practice."], order: [1, 0, 2, 3] },
            { lines: ["I am confident in myself now.", "You look much better today.", "Thanks for the talk yesterday.", "You're welcome. Friends support each other."], order: [1, 2, 3, 0] },
            { lines: ["My parents are going to visit the school.", "Why is your dad here today?", "Is he going to talk to the principal?", "Yes, they are launching the new project."], order: [1, 0, 2, 3] },
            { lines: ["He feels frustrated and angry.", "How does Lucas feel this week?", "People are posting mean things on his photos.", "We must help him report the cyberbullying."], order: [1, 0, 2, 3] },
            { lines: ["We are flying to London next Friday.", "Are you traveling next week?", "Wow! That is a long trip.", "Yes, and I am very excited."], order: [1, 0, 2, 3] },
            { lines: ["I usually have dinner at 8 PM.", "What is your evening routine?", "I do my homework before that.", "And then I go to bed at 10 PM."], order: [1, 0, 2, 3] },
            { lines: ["I blocked the rude user.", "Did you stop the mean messages?", "Did it solve the problem?", "Yes, I feel much safer now."], order: [1, 0, 2, 3] },
            { lines: ["I'm feeling great.", "How are you feeling, Sarah?", "That's good to hear.", "I am excited for the weekend."], order: [1, 0, 2, 3] },
            { lines: ["The cat is scared of the dark.", "Why is the cat under the bed?", "Look! Its eyes are very big.", "Poor thing. It needs a hug."], order: [1, 0, 2, 3] },
            { lines: ["I am going to report it tonight.", "Someone sent me a mean message.", "You shouldn't ignore cyberbullying.", "You're right. I need to take action."], order: [1, 2, 3, 0] },
            { lines: ["We are meeting at 7 o'clock.", "What time are we meeting?", "Is it at the mall?", "No, we are meeting at Sarah's house."], order: [1, 0, 2, 3] },
            { lines: ["I usually play soccer on Saturdays.", "What do you do on the weekend?", "But this Saturday I am resting.", "Good. You work very hard."], order: [1, 0, 2, 3] },
            { lines: ["I'm feeling worried about the test.", "You look like you're thinking hard.", "It's a very difficult subject.", "I can help you study later."], order: [1, 0, 2, 3] },
            { lines: ["I am meeting Sarah later today.", "Are you busy this afternoon?", "Are you going to play games?", "No, we are going to talk to the teacher."], order: [1, 0, 2, 3] },
            { lines: ["I feel lonely at home.", "Why don't you come to my house?", "We can watch a movie together.", "That is a great idea, thanks."], order: [0, 1, 2, 3] },
            { lines: ["The principal is going to speak.", "What is happening at the assembly?", "Is it about the bullying project?", "Yes, she is going to launch it today."], order: [1, 0, 2, 3] },
            { lines: ["I usually have lunch at noon.", "What time is lunch at your school?", "Do you eat with your friends?", "Yes, we always sit together."], order: [1, 0, 2, 3] },
            { lines: ["I am going to buy a gift soon.", "It is my mom's birthday next week.", "Are you going to the mall?", "Yes, I am going there tonight."], order: [1, 0, 2, 3] },
            { lines: ["Bullying is wrong and dangerous.", "We must stop the bullies at school.", "I agree. Respect is very important.", "Let's support everyone."], order: [0, 1, 2, 3] },
            { lines: ["I am feeling confident today.", "You look very happy!", "I am going to give a presentation.", "You are going to do great."], order: [1, 0, 2, 3] },
            { lines: ["I am meeting the teacher at 2 PM.", "When are you going to report the incident?", "Is your mom going with you?", "No, I am going with Celine."], order: [1, 0, 2, 3] },
            { lines: ["I usually play in the afternoon.", "Do you play soccer every day?", "But today I am helping my brother.", "You are a very supportive sibling."], order: [1, 0, 2, 3] },
            { lines: ["I am going to talk to someone I trust.", "This isn't ok. You look frustrated.", "Who are you going to talk to?", "I am going to see the counselor."], order: [1, 2, 0, 3] },
            { lines: ["We are having a party next month.", "Is it for your birthday?", "Yes, and you are invited!", "Awesome! I am going to be there."], order: [0, 1, 2, 3] },
            { lines: ["I am going to support the victim.", "I saw a student being mean to Lucas.", "That is bullying. We must stop it.", "You are right. Let's talk to him."], order: [1, 2, 0, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS ---
        3: [
            { q: "Are you meeting the counselor tomorrow?", options: ["Yes, I am.", "Yes, I meeting.", "Yes, I am meeting tomorrow yes.", "Yes, I go to meet."], a: "Yes, I am." },
            { q: "Does he usually helps his friends?", options: ["No, he don't.", "No, he doesn't.", "No, he not helps.", "No, he isn't."], a: "No, he doesn't." },
            { q: "Is she going to report the message?", options: ["Yes, she is.", "Yes, she going.", "Yes, she does.", "Yes, her is."], a: "Yes, she is." },
            { q: "Are we feeling happy today?", options: ["Yes, we are.", "Yes, we feeling.", "Yes, we do.", "Yes, us are."], a: "Yes, we are." },
            { q: "Do you usually wake up at 7 AM?", options: ["Yes, I do.", "Yes, I am.", "Yes, I wake.", "Yes, me do."], a: "Yes, I do." },
            { q: "Is it going to rain tonight?", options: ["Yes, it is.", "Yes, it going.", "Yes, it does.", "No, it not."], a: "Yes, it is." },
            { q: "Are they watching a movie right now?", options: ["No, they aren't.", "No, they don't.", "No, they not watching.", "No, them are not."], a: "No, they aren't." },
            { q: "Does Sarah bullies people?", options: ["No, she doesn't.", "No, she isn't.", "No, she not bullies.", "No, her doesn't."], a: "No, she doesn't." },
            { q: "Am I going to be okay?", options: ["Yes, you are.", "Yes, you going.", "Yes, you am.", "Yes, you will."], a: "Yes, you are." },
            { q: "Are the teachers helping the students?", options: ["Yes, they are.", "Yes, they helping.", "Yes, they do.", "Yes, them are."], a: "Yes, they are." },
            { q: "Do we accept bullying here?", options: ["No, we don't.", "No, we aren't.", "No, we hasn't.", "No, we not."], a: "No, we don't." },
            { q: "Is Albert feeling better now?", options: ["Yes, he is.", "Yes, he feeling.", "Yes, he does.", "Yes, him is."], a: "Yes, he is." },
            { q: "Are you meeting him next week?", options: ["No, I'm not.", "No, I don't.", "No, I not meeting.", "No, me am not."], a: "No, I'm not." },
            { q: "Does the school starts at 8 AM?", options: ["Yes, it does.", "Yes, it starts.", "Yes, it is.", "Yes, school do."], a: "Yes, it does." },
            { q: "Is it raining later?", options: ["Yes, it is.", "Yes, it raining.", "Yes, it does.", "No, it don't."], a: "Yes, it is." },
            { q: "Are you going to hide the problem?", options: ["No, I'm not.", "No, I don't.", "No, me not going.", "No, I am not to hide."], a: "No, I'm not." },
            { q: "Does she feels frustrated?", options: ["Yes, she does.", "Yes, she feels.", "Yes, she is.", "Yes, her does."], a: "Yes, she does." },
            { q: "Are they flying to Paris soon?", options: ["Yes, they are.", "Yes, they flying.", "Yes, they do.", "Yes, them are."], a: "Yes, they are." },
            { q: "Do you trust your parents?", options: ["Yes, I do.", "Yes, I am.", "Yes, me trust.", "Yes, I trusts."], a: "Yes, I do." },
            { q: "Is the bully creating a new account?", options: ["Yes, he is.", "Yes, he does.", "Yes, him is.", "Yes, he creating."], a: "Yes, he is." },
            { q: "How are you feeling today?", options: ["I am feeling confident.", "Today is tomorrow.", "At 7 o'clock.", "In the hallway."], a: "I am feeling confident." },
            { q: "What are you going to do about the bully?", options: ["I am going to report him.", "I am going to be a cat.", "Yesterday was fun.", "My phone is blue."], a: "I am going to report him." },
            { q: "When are you meeting the teacher?", options: ["I am meeting her tomorrow.", "I am meeting a sandwich.", "With a pencil.", "Because I am happy."], a: "I am meeting her tomorrow." },
            { q: "Why are you sad?", options: ["Because someone sent a mean message.", "Because the sky is up.", "Yes, I am.", "At noon."], a: "Because someone sent a mean message." },
            { q: "Are you doing anything tonight?", options: ["Yes, I'm watching a movie.", "No, I'm a student.", "In October.", "My name is Albert."], a: "Yes, I'm watching a movie." },
            { q: "Who do you trust?", options: ["I trust my best friend.", "I trust the pizza.", "Every day.", "It is a mirror."], a: "I trust my best friend." },
            { q: "Is everything going to be okay?", options: ["Yes, don't worry.", "No, it is a laptop.", "In the morning.", "I have two brothers."], a: "Yes, don't worry." },
            { q: "What is the principal going to do?", options: ["She is going to speak about safety.", "She is going to fly to the moon.", "At 8 AM.", "Yes, she is."], a: "She is going to speak about safety." },
            { q: "How often do you feel frustrated?", options: ["Only when I lose a game.", "I feel frustrated with a spoon.", "Blue is my favorite color.", "No, I don't."], a: "Only when I lose a game." },
            { q: "Are you going to tell your parents?", options: ["Yes, I am going to tell them tonight.", "No, I am a doctor.", "Because it is rain.", "My cat is sleeping."], a: "Yes, I am going to tell them tonight." },
            { q: "When does the assembly start?", options: ["It starts at 9:00 AM.", "It starts in my shoes.", "Yes, it does.", "I am happy."], a: "It starts at 9:00 AM." },
            { q: "What are you doing right now?", options: ["I am supporting my friend.", "I am usually a student.", "On Friday.", "To the mall."], a: "I am supporting my friend." },
            { q: "Why is the cat scared?", options: ["Because the dog is barking.", "Because the sun is hot.", "No, it isn't.", "In the garden."], a: "Because the dog is barking." },
            { q: "Are we meeting later?", options: ["Yes, at the park at 4 PM.", "No, we are parents.", "In January.", "My brother is a gamer."], a: "Yes, at the park at 4 PM." },
            { q: "What does bullying do?", options: ["It hurts people's feelings.", "It makes delicious pasta.", "It is a smartphone.", "On Mondays."], a: "It hurts people's feelings." },
            { q: "How do you feel about the campaign?", options: ["I feel very hopeful.", "I feel with my hands.", "At REACH school.", "Yes, I do."], a: "I feel very hopeful." },
            { q: "What is 'cyberbullying'?", options: ["It is bullying that happens online.", "It is a new type of computer.", "I am going to the mall.", "She is my mother."], a: "It is bullying that happens online." },
            { q: "Are you going to visit the school?", options: ["Yes, next month.", "No, I am a jacket.", "Because I am sad.", "It is very stylish."], a: "Yes, next month." },
            { q: "What is a rumor?", options: ["A story that might not be true.", "A room in the house.", "I wake up at 7.", "No, thank you."], a: "A story that might not be true." },
            { q: "Can I help you?", options: ["Yes, please. I am feeling worried.", "No, you are a teacher.", "In the afternoon.", "It's too expensive."], a: "Yes, please. I am feeling worried." }
        ],

        // --- TYPE 4: FIND MEANING ---
        4: [
            { sent: "It is wrong to **bully** your classmates.", word: "bully", options: ["Intimidar", "Apoiar", "Ignorar", "Perdoar"], a: "Intimidar", def: "To seek to harm or intimidate those who are perceived as vulnerable." },
            { sent: "Mean words can **hurt** people's feelings.", word: "hurt", options: ["Machucar/Magoar", "Ajudar", "Alegrar", "Curar"], a: "Machucar/Magoar", def: "To cause physical pain or injury, or mental pain and distress." },
            { sent: "We must **stop** the fighting immediately.", word: "stop", options: ["Começar", "Parar", "Continuar", "Assistir"], a: "Parar", def: "To come to an end or to cease from happening." },
            { sent: "Friends should always **support** each other.", word: "support", options: ["Apoiar", "Criticar", "Abandonar", "Esquecer"], a: "Apoiar", def: "To give assistance, encouragement, or approval to someone." },
            { sent: "You should **report** mean comments.", word: "report", options: ["Ignorar", "Denunciar / Reportar", "Deletar", "Responder"], a: "Denunciar / Reportar", def: "To give a spoken or written account of something observed or heard." },
            { sent: "Albert looks very **worried** today.", word: "worried", options: ["Feliz", "Preocupado", "Calmo", "Animado"], a: "Preocupado", def: "Anxious or troubled about actual or potential problems." },
            { sent: "I feel **frustrated** with this problem.", word: "frustrated", options: ["Frustrado", "Confiante", "Surpreso", "Solitário"], a: "Frustrado", def: "Feeling distress and annoyance because of inability to achieve something." },
            { sent: "Don't be **angry** with him.", word: "angry", options: ["Triste", "Bravo / Com raiva", "Assustado", "Cansado"], a: "Bravo / Com raiva", def: "Having a strong feeling of annoyance, displeasure, or hostility." },
            { sent: "Lucas is feeling **lonely**.", word: "lonely", options: ["Solitário", "Acompanhado", "Orgulhoso", "Corajoso"], a: "Solitário", def: "Sad because one has no friends or company." },
            { sent: "We are **excited** for the trip.", word: "excited", options: ["Nervosos", "Animados / Empolgados", "Com sono", "Frustrados"], a: "Animados / Empolgados", def: "Very enthusiastic and eager about something." },
            { sent: "You need to stay **calm**.", word: "calm", options: ["Calmo", "Agitado", "Barulhento", "Triste"], a: "Calmo", def: "Not showing or feeling nervousness, anger, or other strong emotions." },
            { sent: "I was **surprised** by the gift.", word: "surprised", options: ["Entediado", "Surpreso", "Preparado", "Bravo"], a: "Surpreso", def: "Feeling or showing surprise because something unexpected happened." },
            { sent: "You should be **confident**.", word: "confident", options: ["Confiante", "Tímido", "Fraco", "Inseguro"], a: "Confiante", def: "Feeling or showing confidence in oneself; self-assured." },
            { sent: "I will see the doctor **tomorrow**.", word: "tomorrow", options: ["Ontem", "Amanhã", "Hoje", "Agora"], a: "Amanhã", def: "On the day after today." },
            { sent: "Watch a movie **tonight**.", word: "tonight", options: ["Hoje de manhã", "Hoje à noite", "Amanhã cedo", "Ontem à noite"], a: "Hoje à noite", def: "On the evening or night of the present day." },
            { sent: "The internet is a **safe** place.", word: "safe", options: ["Perigoso", "Seguro", "Caro", "Lento"], a: "Seguro", def: "Protected from or not exposed to danger or risk." },
            { sent: "**Cyberbullying** happens online.", word: "cyberbullying", options: ["Apoio virtual", "Bullying virtual", "Amizade digital", "Pesquisa online"], a: "Bullying virtual", def: "The use of electronic communication to bully a person." },
            { sent: "Don't spread a **rumor**.", word: "rumor", options: ["Fato", "Boato / Fofoca", "Verdade", "Segredo"], a: "Boato / Fofoca", def: "A currently circulating story or report of uncertain or doubtful truth." },
            { sent: "We should **respect** everyone.", word: "respect", options: ["Respeitar", "Criticar", "Ignorar", "Atacar"], a: "Respeitar", def: "To have due regard for the feelings, wishes, or rights of others." },
            { sent: "I **trust** my parents.", word: "trust", options: ["Duvido", "Confio", "Minto", "Temo"], a: "Confio", def: "To believe in the reliability, truth, or ability of someone." },
            { sent: "I **usually** wake up at 7 AM.", word: "usually", options: ["Raramente", "Geralmente / Costumo", "Nunca", "Sempre"], a: "Geralmente / Costumo", def: "Under normal conditions; generally." },
            { sent: "Please **accept** my apology.", word: "accept", options: ["Recuse", "Aceite", "Esqueça", "Repita"], a: "Aceite", def: "To believe or come to recognize an opinion or explanation as valid." },
            { sent: "I'm going to **talk** with the counselor.", word: "talk", options: ["Conversar / Falar", "Gritar", "Escrever", "Brigar"], a: "Conversar / Falar", def: "To speak in order to give information or express ideas." },
            { sent: "This is very **dangerous**.", word: "dangerous", options: ["Calmo", "Perigoso", "Seguro", "Útil"], a: "Perigoso", def: "Able or likely to cause harm or injury." },
            { sent: "We need a **solution** **soon**.", word: "soon", options: ["Em breve / Logo", "Tarde", "Nunca", "Ontem"], a: "Em breve / Logo", def: "In or after a short time." },
            { sent: "I will finish it **later**.", word: "later", options: ["Agora", "Mais tarde", "Cedo", "Imediatamente"], a: "Mais tarde", def: "At a time in the near future; after the present." },
            { sent: "The **principal** is speaking.", word: "principal", options: ["Professor", "Diretor(a)", "Aluno", "Zelador"], a: "Diretor(a)", def: "The head of a school." },
            { sent: "The cat is **scared**.", word: "scared", options: ["Feliz", "Assustado / Com medo", "Bravo", "Animado"], a: "Assustado / Com medo", def: "Fearful; frightened." },
            { sent: "Starting a new **campaign**.", word: "campaign", options: ["Jogo", "Campanha", "Teste", "Aula"], a: "Campanha", def: "An organized course of action to achieve a goal." },
            { sent: "We must show **empathy**.", word: "empathy", options: ["Empatia", "Raiva", "Medo", "Alegria"], a: "Empatia", def: "The ability to understand and share the feelings of another." },
            { sent: "I'm **feeling** much better.", word: "feeling", options: ["Pensando", "Sentindo", "Olhando", "Falando"], a: "Sentindo", def: "Experiencing an emotion or physical sensation." },
            { sent: "The school **counselor** helps us.", word: "counselor", options: ["Diretor", "Conselheiro(a)", "Professor", "Secretário"], a: "Conselheiro(a)", def: "A person trained to give guidance on psychological problems." },
            { sent: "I sent a **message**.", word: "message", options: ["Foto", "Mensagem", "Ligação", "Vídeo"], a: "Mensagem", def: "A verbal, written, or recorded communication sent to a recipient." },
            { sent: "Stop! This **isn't ok**.", word: "isn't ok", options: ["Está tudo bem", "Não está certo", "É muito legal", "É proibido"], a: "Não está certo", def: "A statement that a situation is unacceptable." },
            { sent: "We are **meeting** the teacher.", word: "meeting", options: ["Encontrando", "Fugindo de", "Ligando para", "Escrevendo para"], a: "Encontrando", def: "To come together with someone at a particular time and place." },
            { sent: "I am going to **tell** my parents.", word: "tell", options: ["Contar / Dizer", "Esconder", "Ouvir", "Perguntar"], a: "Contar / Dizer", def: "To communicate information to someone." },
            { sent: "The **assembly** is in the gym.", word: "assembly", options: ["Recreio", "Assembleia / Reunião", "Aula", "Almoço"], a: "Assembleia / Reunião", def: "A gathering of people in a school for a shared purpose." },
            { sent: "Everything will be **okay**.", word: "okay", options: ["Ruim", "Bem / Tudo certo", "Diferente", "Difícil"], a: "Bem / Tudo certo", def: "Satisfactory; in a good state." },
            { sent: "I blocked the **rude** user.", word: "rude", options: ["Educado", "Rude / Mal-educado", "Engraçado", "Inteligente"], a: "Rude / Mal-educado", def: "Offensively impolite or bad-mannered." },
            { sent: "Friends **support** each other.", word: "support", options: ["Apoiar", "Criticar", "Ignorar", "Atacar"], a: "Apoiar", def: "To give assistance or encouragement to someone." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE ---
        5: [
            { sent: "I **going** to talk to the teacher.", correct: "am going" },
            { sent: "She **is meet** Sarah at 2 PM.", correct: "is meeting" },
            { sent: "We **usually are helping** our friends.", correct: "usually help" },
            { sent: "They **is feeling** happy today.", correct: "are feeling" },
            { sent: "He **don't going** to hide the problem.", correct: "isn't going" },
            { sent: "I **meeting** the counselor later.", correct: "am meeting" },
            { sent: "**Do** he usually report the bullies?", correct: "Does" },
            { sent: "We **going study** tonight.", correct: "are going to study" },
            { sent: "It **is go** to rain later.", correct: "is going to" },
            { sent: "Are you **do** anything next week?", correct: "doing" },
            { sent: "She never **bully** people.", correct: "bullies" },
            { sent: "We **have** a campaign next Monday.", correct: "are having" },
            { sent: "I **feeling** a little better now.", correct: "am feeling" },
            { sent: "**Is** you going to tell your parents?", correct: "Are" },
            { sent: "He usually **post** photos every day.", correct: "posts" },
            { sent: "They **flying** to Paris next month.", correct: "are flying" },
            { sent: "I am **go to support** my friend.", correct: "am going to" },
            { sent: "Does she **feels** lonely?", correct: "feel" },
            { sent: "We **not are** going to accept this.", correct: "are not" },
            { sent: "What **is** you doing right now?", correct: "are" },
            { sent: "Sarah **is visit** the school tomorrow.", correct: "is visiting" },
            { sent: "I **am meet** him at 5 o'clock.", correct: "am meeting" },
            { sent: "They **don't going** to come.", correct: "aren't going" },
            { sent: "**Are** the principal going to speak?", correct: "Is" },
            { sent: "He **is play** in the match on Sunday.", correct: "is playing" },
            { sent: "I usually **am waking up** at 7 AM.", correct: "wake up" },
            { sent: "We **going to being** okay.", correct: "are going to be" },
            { sent: "She **not is** feeling Great.", correct: "is not" },
            { sent: "**Do** you meeting Sarah later?", correct: "Are" },
            { sent: "I am **go to report** this.", correct: "am going to report" },
            { sent: "They usually **are chatting** in the hallway.", correct: "chat" },
            { sent: "He is **goes** to bed at 10 PM.", correct: "goes" },
            { sent: "We **having** a party tonight.", correct: "are having" },
            { sent: "I **not am** going to cry.", correct: "am not" },
            { sent: "Sarah **studies** right now.", correct: "is studying" },
            { sent: "**Does** they going to help?", correct: "Are" },
            { sent: "We are **go to talk** soon.", correct: "going to" },
            { sent: "He **posting** a mean comment now.", correct: "is posting" },
            { sent: "I **going to tell** him tonight.", correct: "am going to tell" },
            { sent: "They usually **plays** soccer.", correct: "play" }
        ],


        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Type 6.1: Question to Answer (Groups 1-10)
            { pairs: [{a: "How are you feeling today?", b: "I am feeling great, thanks."}, {a: "Why are you so worried?", b: "Because someone posted mean comments."}, {a: "Can I help you with that?", b: "Yes, please. I need your support."}, {a: "Who are you going to talk to?", b: "I am going to talk to my parents."}, {a: "Is Albert feeling better now?", b: "Yes, he is feeling a little better."}] },
            { pairs: [{a: "What are you going to do tomorrow?", b: "I am going to visit the school counselor."}, {a: "Is she going to report the bully?", b: "Yes, she is going to tell the teacher."}, {a: "Are we going to be okay?", b: "Yes, everything is going to be okay."}, {a: "When is the principal going to speak?", b: "She is going to speak later today."}, {a: "Are they going to support their friend?", b: "Yes, they are going to help him."}] },
            { pairs: [{a: "What are you doing tonight?", b: "I am watching a movie with my family."}, {a: "Who is Sarah meeting tomorrow?", b: "She is meeting the counselor at 2 PM."}, {a: "Are we having the assembly next week?", b: "No, we are having it on Monday."}, {a: "Is he playing in the match on Sunday?", b: "Yes, he is playing in the afternoon."}, {a: "When are they flying to Paris?", b: "They are flying next month."}] },
            { pairs: [{a: "What is cyberbullying?", b: "It is bullying that happens online."}, {a: "Did you block the rude user?", b: "Yes, I blocked him immediately."}, {a: "Why is bullying wrong?", b: "Because it hurts everyone."}, {a: "What should you do with mean messages?", b: "You should report them to an adult."}, {a: "Do you accept this behavior at school?", b: "No, we have to stop the bullies."}] },
            { pairs: [{a: "What time do you usually wake up?", b: "I usually wake up at 7 AM."}, {a: "Do you usually go to school by bus?", b: "Yes, but today I am walking."}, {a: "How often do you do your homework?", b: "I do it every day after school."}, {a: "When do you usually have dinner?", b: "I usually have dinner at 8 PM."}, {a: "Do you study every day?", b: "Yes, I study very hard."}] },
            { pairs: [{a: "You look frustrated. What's up?", b: "I feel frustrated with my math test."}, {a: "Why is the cat so scared?", b: "Because of the loud noise."}, {a: "Is it going to rain later?", b: "Yes, look at those dark clouds."}, {a: "Why are they talking in the hallway?", b: "They are discussing the new campaign."}, {a: "Are you doing anything this weekend?", b: "No, I am just going to relax."}] },
            { pairs: [{a: "Are you confident in yourself?", b: "Yes, I feel very self-assured."}, {a: "Why is Sarah so excited?", b: "Because she is going to the party."}, {a: "Is he lonely at the new school?", b: "Yes, he doesn't have many friends yet."}, {a: "Why are you angry?", b: "Because this situation isn't ok."}, {a: "Are you surprised by the gift?", b: "Yes, I didn't expect it at all!"}] },
            { pairs: [{a: "What is the name of the project?", b: "It is called 'Kindness First'."}, {a: "Are you meeting Mrs. Canales later?", b: "Yes, I am meeting her at 3 PM."}, {a: "Who is going to launch the project?", b: "The principal is going to speak."}, {a: "When do they usually have assembly?", b: "They usually have it on Mondays."}, {a: "How are you feeling about the project?", b: "We are feeling very hopeful."}] },
            { pairs: [{a: "When do you get up?", b: "I get up immediately after my alarm."}, {a: "Do you have lunch at noon?", b: "Yes, usually with my classmates."}, {a: "What are you doing right now?", b: "I am writing a message to Albert."}, {a: "Are you going to bed now?", b: "Yes, it's 10 PM. Goodnight!"}, {a: "Do you trust your friends?", b: "Yes, I trust them completely."}] },
            { pairs: [{a: "Do you feel lonely?", b: "No, I have many friends here."}, {a: "Why are you so calm?", b: "Because I practiced and I'm ready."}, {a: "Are you worried about the test?", b: "Yes, I didn't study enough."}, {a: "Do you feel better now?", b: "Yes, thanks for your support."}, {a: "Why are you sad?", b: "Because someone was mean to me."}] },

            // Type 6.2: 1st half to 2nd half of a sentence (Groups 11-20)
            { pairs: [{a: "I am helping...", b: "...Albert with his problem now."}, {a: "You are listening...", b: "...to me very carefully."}, {a: "He is posting...", b: "...a photo on his profile."}, {a: "She is bullying...", b: "...someone, and it must stop."}, {a: "They are talking...", b: "...in the school hallway."}] },
            { pairs: [{a: "I am going to...", b: "...report the mean comments tonight."}, {a: "You are going to...", b: "...be okay, don't worry."}, {a: "He is going to...", b: "...talk to the principal tomorrow."}, {a: "We are going to...", b: "...start a new campaign soon."}, {a: "They are going to...", b: "...support their classmates."}] },
            { pairs: [{a: "I usually wake...", b: "...up at 7 o'clock."}, {a: "She always helps...", b: "...her friends at school."}, {a: "We don't accept...", b: "...bullying in this classroom."}, {a: "They usually have...", b: "...lunch at the cafeteria."}, {a: "He never bullies...", b: "...anyone at REACH school."}] },
            { pairs: [{a: "Albert is worried...", b: "...because of a mean message."}, {a: "Lucas feels lonely...", b: "...at his new school."}, {a: "I feel frustrated...", b: "...with my math homework."}, {a: "Sarah is excited...", b: "...for the trip next week."}, {a: "The cat is scared...", b: "...of the dark room."}] },
            { pairs: [{a: "Mean words can...", b: "...hurt people's feelings."}, {a: "You should always...", b: "...report bad behavior."}, {a: "Cyberbullying happens...", b: "...online and on social media."}, {a: "Spreading a rumor...", b: "...is a type of bullying."}, {a: "We have to stop...", b: "...the bullies immediately."}] },
            { pairs: [{a: "We are meeting...", b: "...the counselor tomorrow morning."}, {a: "I am going to...", b: "...tell my parents tonight."}, {a: "The principal is...", b: "...speaking at the assembly soon."}, {a: "We are flying...", b: "...to London next month."}, {a: "I will call...", b: "...you a little bit later."}] },
            { pairs: [{a: "I wake up...", b: "...at 7:00 AM."}, {a: "We have class...", b: "...on Mondays and Tuesdays."}, {a: "My birthday is...", b: "...in October."}, {a: "I relax...", b: "...in the afternoon."}, {a: "We sleep...", b: "...at night."}] },
            { pairs: [{a: "I am seeing...", b: "...the doctor at 2 PM."}, {a: "She is having...", b: "...a party this Saturday."}, {a: "He is playing...", b: "...in the match on Sunday."}, {a: "We are visiting...", b: "...my grandmother next week."}, {a: "They are coming...", b: "...to dinner tonight."}] },
            { pairs: [{a: "You shouldn't deal...", b: "...with this problem alone."}, {a: "Talk with someone...", b: "...you can really trust."}, {a: "Don't be afraid...", b: "...to speak up for yourself."}, {a: "Trust your...", b: "...parents and your teachers."}, {a: "Everything is going...", b: "...to be just fine."}] },
            { pairs: [{a: "Our school starts...", b: "...a new project next month."}, {a: "We are going to...", b: "...have classes about respect."}, {a: "Respect is very...", b: "...important for a happy school."}, {a: "Empathy helps us...", b: "...understand other people."}, {a: "We are feeling...", b: "...hopeful about the future."}] },

            // Type 6.3: English word/sentence to Portuguese translation (Groups 21-30)
            { pairs: [{a: "Don't bully your classmates.", b: "Não intimide seus colegas."}, {a: "We must stop cyberbullying.", b: "Nós devemos parar o bullying virtual."}, {a: "Friends support each other.", b: "Amigos apoiam uns aos outros."}, {a: "You should report it.", b: "Você deveria denunciar."}, {a: "I blocked the rude user.", b: "Eu bloqueei o usuário rude."}] },
            { pairs: [{a: "I am feeling great.", b: "Eu estou me sentindo ótimo."}, {a: "Albert looks worried.", b: "Albert parece preocupado."}, {a: "I feel frustrated with math.", b: "Eu me sinto frustrado com matemática."}, {a: "He feels lonely here.", b: "Ele se sente sozinho aqui."}, {a: "We are excited for the trip.", b: "Nós estamos animados para a viagem."}] },
            { pairs: [{a: "I am helping Albert now.", b: "Eu estou ajudando o Albert agora."}, {a: "Someone is posting mean comments.", b: "Alguém está postando comentários maldosos."}, {a: "Are you listening to me?", b: "Você está me ouvindo?"}, {a: "They are talking in the hallway.", b: "Eles estão conversando no corredor."}, {a: "It is raining right now.", b: "Está chovendo agora mesmo."}] },
            { pairs: [{a: "I am going to tell my parents.", b: "Eu vou contar para os meus pais."}, {a: "Everything is going to be okay.", b: "Tudo vai ficar bem."}, {a: "He is going to talk to the teacher.", b: "Ele vai falar com a professora."}, {a: "Are you going to study tonight?", b: "Você vai estudar hoje à noite?"}, {a: "They are going to support him.", b: "Eles vão apoiá-lo."}] },
            { pairs: [{a: "I wake up at 7 AM.", b: "Eu acordo às 7 da manhã."}, {a: "She goes to school by bus.", b: "Ela vai para a escola de ônibus."}, {a: "We have lunch at noon.", b: "Nós almoçamos ao meio-dia."}, {a: "He does homework after school.", b: "Ele faz o dever de casa depois da escola."}, {a: "They go to bed at 10 PM.", b: "Eles vão para a cama às 10 da noite."}] },
            { pairs: [{a: "How are you feeling?", b: "Como você está se sentindo?"}, {a: "What are you doing?", b: "O que você está fazendo?"}, {a: "Don't be afraid.", b: "Não tenha medo."}, {a: "This isn't ok.", b: "Isso não está certo."}, {a: "Talk with someone you trust.", b: "Converse com alguém em quem você confia."}] },
            { pairs: [{a: "I am meeting Sarah tomorrow.", b: "Vou encontrar a Sarah amanhã."}, {a: "We are having a party tonight.", b: "Teremos uma festa hoje à noite."}, {a: "She is seeing the doctor at 2.", b: "Ela tem médico às 2."}, {a: "We are flying next month.", b: "Nós vamos viajar de avião mês que vem."}, {a: "They are coming to dinner.", b: "Eles virão para o jantar."}] },
            { pairs: [{a: "Spreading a rumor.", b: "Espalhar um boato."}, {a: "Safe place.", b: "Lugar seguro."}, {a: "Dangerous behavior.", b: "Comportamento perigoso."}, {a: "Mean message.", b: "Mensagem maldosa."}, {a: "Respect everyone.", b: "Respeitar a todos."}] },
            { pairs: [{a: "Stay calm and breathe.", b: "Fique calmo e respire."}, {a: "I was surprised by the gift.", b: "Fiquei surpreso com o presente."}, {a: "Be confident in yourself.", b: "Seja confiante em si mesmo."}, {a: "The cat is scared.", b: "O gato está com medo."}, {a: "I feel better now.", b: "Eu me sinto melhor agora."}] },
            { pairs: [{a: "Tomorrow morning.", b: "Amanhã de manhã."}, {a: "Next week.", b: "Próxima semana."}, {a: "Soon and Later.", b: "Em breve e Mais tarde."}, {a: "Next year.", b: "Ano que vem."}, {a: "Tonight.", b: "Hoje à noite."}] },

            // Type 6.4: Word to Simple Definition in Portuguese (Groups 31-40)
            { pairs: [{a: "Help", b: "Ajudar alguém com um problema."}, {a: "Support", b: "Dar apoio e encorajamento."}, {a: "Trust", b: "Confiar na honestidade de alguém."}, {a: "Respect", b: "Tratar os outros com consideração."}, {a: "Accept", b: "Receber bem ou concordar com algo."}] },
            { pairs: [{a: "Bully", b: "Intimidar ou ser mau com alguém."}, {a: "Hurt", b: "Causar dor física ou emocional."}, {a: "Stop", b: "Fazer algo chegar ao fim."}, {a: "Report", b: "Contar um problema para uma autoridade."}, {a: "Block", b: "Impedir alguém de te contactar online."}] },
            { pairs: [{a: "Happy", b: "Sentir prazer ou contentamento."}, {a: "Sad", b: "Sentir infelicidade ou tristeza."}, {a: "Angry", b: "Sentir muita raiva ou irritação."}, {a: "Scared", b: "Sentir medo de algo."}, {a: "Worried", b: "Pensar muito em problemas."}] },
            { pairs: [{a: "Frustrated", b: "Sentir-se incapaz de conseguir algo."}, {a: "Lonely", b: "Sentir-se sozinho, sem amigos."}, {a: "Excited", b: "Estar muito animado com algo."}, {a: "Calm", b: "Estar tranquilo, sem nervosismo."}, {a: "Confident", b: "Acreditar na sua própria capacidade."}] },
            { pairs: [{a: "Tomorrow", b: "O dia depois de hoje."}, {a: "Tonight", b: "A noite do dia de hoje."}, {a: "Soon", b: "Em pouco tempo a partir de agora."}, {a: "Later", b: "Em um momento no futuro."}, {a: "Next month", b: "O mês que vem depois deste."}] },
            { pairs: [{a: "Wake up", b: "Parar de dormir e abrir os olhos."}, {a: "Get up", b: "Sair fisicamente da cama."}, {a: "Have breakfast", b: "Fazer a primeira refeição do dia."}, {a: "Go to school", b: "Sair de casa para o local de ensino."}, {a: "Study", b: "Dedicar tempo para aprender algo."}] },
            { pairs: [{a: "Cyberbullying", b: "Bullying feito através da internet."}, {a: "Rumor", b: "Uma história que pode não ser verdade."}, {a: "Message", b: "Texto enviado para alguém."}, {a: "Comment", b: "Uma resposta curta em uma foto."}, {a: "Post", b: "Uma publicação nas redes sociais."}] },
            { pairs: [{a: "Safe", b: "Lugar ou situação sem perigo."}, {a: "Dangerous", b: "Algo que pode causar ferimentos."}, {a: "Counselor", b: "Pessoa que ajuda alunos com problemas."}, {a: "Principal", b: "A autoridade máxima da escola."}, {a: "Assembly", b: "Reunião de todos os alunos no pátio."}] },
            { pairs: [{a: "Rude", b: "Pessoa mal-educada."}, {a: "Hopeful", b: "Ter esperança no futuro."}, {a: "Better", b: "Sentir-se mais saudável ou feliz."}, {a: "Surprised", b: "Reação a algo inesperado."}, {a: "Supportive", b: "Pessoa que gosta de ajudar."}] },
            { pairs: [{a: "Usually", b: "Indica uma rotina ou hábito."}, {a: "Right now", b: "Indica uma ação no momento."}, {a: "Going to", b: "Estrutura para planos futuros."}, {a: "Arrangements", b: "Planos fixos com hora e local."}, {a: "Intentions", b: "Coisas que você planeja fazer."}] }
        ],

        // --- TYPE 7: BEST ANSWER ---
        7: [
            { q: "How are you feeling about the new school campaign?", options: ["I am feeling very hopeful.", "My name is Lucas.", "In the hallway.", "It is a smartphone."], a: "I am feeling very hopeful." },
            { q: "Why is Albert so worried today?", options: ["Because someone is posting mean comments.", "At 8 o’clock.", "Yes, he is.", "With a pencil."], a: "Because someone is posting mean comments." },
            { q: "What are you going to do tomorrow morning?", options: ["I am going to report the bullying.", "Yesterday was Tuesday.", "I have two brothers.", "No, I am not."], a: "I am going to report the bullying." },
            { q: "Who are you meeting after school?", options: ["I am meeting Sarah to study.", "I am fine, thanks.", "It is a blue locker.", "Because I am sad."], a: "I am meeting Sarah to study." },
            { q: "When is the principal going to speak?", options: ["She is going to speak tonight at 7 PM.", "She is very nice and helpful.", "In her office.", "No, she isn't."], a: "She is going to speak tonight at 7 PM." },
            { q: "How often do you feel frustrated with homework?", options: ["Only when I don't understand the exercise.", "I am studying right now.", "In my bedroom.", "Yes, I do."], a: "Only when I don't understand the exercise." },
            { q: "Where are you going to hide if you are scared?", options: ["I am going to ask for help.", "Because I am confident.", "Tomorrow afternoon.", "It is a safe place."], a: "I am going to ask for help." },
            { q: "Why did you block that specific account?", options: ["Because it was spreading rumors about me.", "I am using my tablet.", "At noon.", "Yes, I blocked it."], a: "Because it was spreading rumors about me." },
            { q: "What is 'Kindness First'?", options: ["It is the name of our anti-bullying campaign.", "I am feeling great today.", "At REACH school.", "No, it isn't."], a: "It is the name of our anti-bullying campaign." },
            { q: "Who do you talk to when you feel lonely?", options: ["I talk to someone I trust, like my mother.", "I am twelve years old.", "Blue is my favorite color.", "On Sundays."], a: "I talk to someone I trust, like my mother." },
            { q: "When are we having the next assembly?", options: ["We are having it next Tuesday.", "It is in the gym.", "We are very excited.", "Yes, we are."], a: "We are having it next Tuesday." },
            { q: "How is everything going to be?", options: ["Everything is going to be okay.", "I am at school.", "My birthday is in October.", "No, it don't."], a: "Everything is going to be okay." },
            { q: "Why are the students so excited?", options: ["Because they are launching a project soon.", "They usually go to school by bus.", "In the classroom.", "Yes, they are."], a: "Because they are launching a project soon." },
            { q: "What time are you going to bed tonight?", options: ["I am going to bed at 10:00 PM.", "I am sleeping now.", "Because I am tired.", "In the bedroom."], a: "I am going to bed at 10:00 PM." },
            { q: "Who is posting those mean messages?", options: ["We don't know yet, but we are investigating.", "It is a dangerous message.", "On Instagram.", "No, he isn't."], a: "We don't know yet, but we are investigating." },
            { q: "Where are they flying next month?", options: ["They are flying to London.", "They are flying very fast.", "With their parents.", "On Friday."], a: "They are flying to London." },
            { q: "What does cyberbullying mean?", options: ["It means bullying that happens online.", "It is a student at REACH.", "I am going to tell the teacher.", "Yes, I know."], a: "It means bullying that happens online." },
            { q: "Why should you report bad behavior?", options: ["Because we must stop the bullies.", "I am reporting it now.", "To the counselor.", "Yes, you should."], a: "Because we must stop the bullies." },
            { q: "How do you feel when friends support you?", options: ["I feel much more confident.", "I am at home.", "Every day.", "No, I am not."], a: "I feel much more confident." },
            { q: "When do you usually have breakfast?", options: ["I usually have breakfast at 7:30 AM.", "I am having breakfast now.", "In the kitchen.", "With my brother."], a: "I usually have breakfast at 7:30 AM." },
            { q: "What are you doing right now?", options: ["I am writing a message of support.", "I usually write at night.", "Tomorrow morning.", "My name is Celine."], a: "I am writing a message of support." },
            { q: "Who is the person you trust the most?", options: ["I trust my best friend Celine.", "I am very happy today.", "She is fifteen.", "From Australia."], a: "I trust my best friend Celine." },
            { q: "Why is the cat scared of the dark?", options: ["Because it cannot see well.", "It is a small cat.", "Under the sofa.", "Yes, it is."], a: "Because it cannot see well." },
            { q: "Where is the counselor's office?", options: ["It is next to the principal's room.", "She is very helpful.", "I am going there later.", "At 10 o'clock."], a: "It is next to the principal's room." },
            { q: "What are the teachers going to do about the rumor?", options: ["They are going to investigate and stop it.", "Rumors are very dangerous.", "In the hallway.", "Yes, they are."], a: "They are going to investigate and stop it." },
            { q: "How do you feel when someone is rude to you?", options: ["I feel angry and frustrated.", "I am a student.", "At noon.", "With my hands."], a: "I feel angry and frustrated." },
            { q: "When are you going to visit your grandmother?", options: ["I am visiting her this Saturday.", "She lives in Brazil.", "She is seventy years old.", "No, I am not."], a: "I am visiting her this Saturday." },
            { q: "Why is respect so important at school?", options: ["Because it makes everyone feel safe.", "Respect is a long word.", "At 8:00 AM.", "Yes, it is."], a: "Because it makes everyone feel safe." },
            { q: "What is your plan for next week?", options: ["I am going to start a new hobby.", "I usually play soccer.", "Last week was fun.", "My brother is a gamer."], a: "I am going to start a new hobby." },
            { q: "Who is going to launch the project?", options: ["The principal is going to launch it.", "It is a great project.", "Tomorrow morning.", "Yes, she is."], a: "The principal is going to launch it." },
            { q: "How are you going to help Albert?", options: ["I am going to support and listen to him.", "He is my best friend.", "At school.", "No, he doesn't."], a: "I am going to support and listen to him." },
            { q: "When does the rain usually start in summer?", options: ["It usually starts in the afternoon.", "I am getting wet.", "It is going to rain later.", "Yes, it does."], a: "It usually starts in the afternoon." },
            { q: "Why do you look so surprised?", options: ["Because I didn't expect this gift!", "I am a student.", "In January.", "My name is Sara."], a: "Because I didn't expect this gift!" },
            { q: "What is the principal speaking about?", options: ["She is speaking about internet safety.", "She is the head of the school.", "At the assembly.", "No, she isn't."], a: "She is speaking about internet safety." },
            { q: "Where can we talk about our feelings?", options: ["We can talk in the counselor's room.", "We are feeling better now.", "On Monday.", "Because it's important."], a: "We can talk in the counselor's room." },
            { q: "Who is posting mean comments?", options: ["A bully from another class.", "The comments are very mean.", "On social media.", "Yes, he is."], a: "A bully from another class." },
            { q: "How often do you go to the park?", options: ["I go there every weekend.", "I am going there now.", "It is a big park.", "To play soccer."], a: "I go there every weekend." },
            { q: "When are you finishing your project?", options: ["I am finishing it tonight.", "I am a hard worker.", "It is a science project.", "No, I am not."], a: "I am finishing it tonight." },
            { q: "Why is this situation not ok?", options: ["Because bullying hurts people.", "I am frustrated.", "At school.", "Yes, it is."], a: "Because bullying hurts people." },
            { q: "What are they having for dinner tonight?", options: ["They are having delicious pasta.", "They usually have dinner at 8.", "In the kitchen.", "With their parents."], a: "They are having delicious pasta." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY ---
        8: [
            { sent: "I am **downloading** a video to YouTube so my friends can see it.", wrong: "downloading", options: ["Uploading", "Tagging", "Blocking", "Sleeping"], a: "Uploading" },
            { sent: "My birthday is **at** January.", wrong: "at", options: ["In", "On", "Under", "By"], a: "In" },
            { sent: "Use the **laptop** to listen to music privately.", wrong: "laptop", options: ["Headphones", "Tablet", "Wifi", "Account"], a: "Headphones" },
            { sent: "I usually **wake up** from my bed at 7:15 after the alarm rings.", wrong: "wake up", options: ["Get up", "Sleep", "Post", "Like"], a: "Get up" },
            { sent: "He is **scrolling** through his laptop to find the keys.", wrong: "scrolling", options: ["Looking", "Password", "Meme", "Story"], a: "Looking" },
            { sent: "I am **liking** a new video to my channel now.", wrong: "liking", options: ["Uploading", "Following", "Blocking", "Downloading"], a: "Uploading" },
            { sent: "The wifi is **online**, so I cannot connect to the internet.", wrong: "online", options: ["Offline/Down", "Working", "Fast", "Blue"], a: "Offline/Down" },
            { sent: "I need to **comment** my friends in this funny photo.", wrong: "comment", options: ["Tag", "Share", "Download", "Unfollow"], a: "Tag" },
            { sent: "Sarah usually **is wearing** glasses, but today she has contacts.", wrong: "is wearing", options: ["Wears", "Wearing", "Wear", "Wore"], a: "Wears" },
            { sent: "The class starts **on** 8:00 AM.", wrong: "on", options: ["At", "In", "To", "For"], a: "At" },
            { sent: "I am **reading** a message on WhatsApp to my best friend.", wrong: "reading", options: ["Sending/Writing", "Tagging", "Blocking", "Downloading"], a: "Sending/Writing" },
            { sent: "This **hashtag** of the dancing dog is going viral.", wrong: "hashtag", options: ["Video/Meme", "Profile", "Account", "Wifi"], a: "Video/Meme" },
            { sent: "I am **offline** right now because I am chatting with you.", wrong: "offline", options: ["Online", "Busy", "Downloading", "Sleeping"], a: "Online" },
            { sent: "We have school **in** Mondays and Wednesdays.", wrong: "in", options: ["On", "At", "By", "For"], a: "On" },
            { sent: "I **unfollow** my favorite singer because I love her songs.", wrong: "unfollow", options: ["Follow", "Block", "Tag", "Share"], a: "Follow" },
            { sent: "My mom is **calling** a photo on Instagram.", wrong: "calling", options: ["Posting", "Ringing", "Chatting", "Recording"], a: "Posting" },
            { sent: "I use my **headphones** to do my homework and type essays.", wrong: "headphones", options: ["Laptop/Computer", "Smartphone", "Tablet", "Router"], a: "Laptop/Computer" },
            { sent: "He **blocks** everyone he knows because he is very friendly.", wrong: "blocks", options: ["Follows/Tags", "Unfollows", "Downloads", "Uploads"], a: "Follows/Tags" },
            { sent: "I am **checking** a story on my phone right now for my followers.", wrong: "checking", options: ["Recording/Posting", "Reading", "Blocking", "Deleting"], a: "Recording/Posting" },
            { sent: "The **notification** is on the desk; it is a portable computer.", wrong: "notification", options: ["Laptop", "Feed", "Message", "Story"], a: "Laptop" },
            { sent: "I usually **am chatting** with my friends at night.", wrong: "am chatting", options: ["Chat", "Chatting", "Chats", "To chat"], a: "Chat" },
            { sent: "My sister is a famous **follower**; she has one million fans.", wrong: "follower", options: ["Influencer", "Account", "Hashtag", "Meme"], a: "Influencer" },
            { sent: "I sleep **on** night.", wrong: "on", options: ["At", "In", "By", "To"], a: "At" },
            { sent: "Don't forget to **feed** your new video so people can see it.", wrong: "feed", options: ["Post/Upload", "Like", "Follow", "Download"], a: "Post/Upload" },
            { sent: "I am **tagging** through my feed to see the latest news.", wrong: "tagging", options: ["Scrolling", "Sending", "Blocking", "Downloading"], a: "Scrolling" },
            { sent: "We are having breakfast **in** 7:30 AM.", wrong: "in", options: ["At", "On", "In", "For"], a: "At" },
            { sent: "This **smartphone** has a 10-inch screen and a pen.", wrong: "smartphone", options: ["Tablet", "Laptop", "Headphones", "Desktop"], a: "Tablet" },
            { sent: "I am **sharing** a joke, so I am laughing out loud.", wrong: "sharing", options: ["Reading/Hearing", "Posting", "Blocking", "Tagging"], a: "Reading/Hearing" },
            { sent: "The **password** is ringing; someone is calling you.", wrong: "password", options: ["Smartphone/Phone", "Notification", "Wifi", "Laptop"], a: "Smartphone/Phone" },
            { sent: "I use **OMG** when I don't know the answer to a question.", wrong: "OMG", options: ["IDK", "LOL", "BRB", "TBT"], a: "IDK" },
            { sent: "I am **studying** a video on YouTube for fun.", wrong: "studying", options: ["Watching", "Uploading", "Downloading", "Tagging"], a: "Watching" },
            { sent: "My laptop is **online**, so I am working in the park without wifi.", wrong: "online", options: ["Offline", "Working", "Fast", "New"], a: "Offline" },
            { sent: "I **always am** checking my notifications.", wrong: "always am", options: ["Am always", "Checking always", "Always check", "Checks always"], a: "Am always" },
            { sent: "I'm going to the bathroom, **IDK**.", wrong: "IDK", options: ["BRB", "LOL", "OMG", "TBT"], a: "BRB" },
            { sent: "The **story** is turned off, so I don't hear when I get a message.", wrong: "story", options: ["Sound/Notification", "Profile", "Feed", "Account"], a: "Sound/Notification" },
            { sent: "I usually **post** my friends when I see them at school.", wrong: "post", options: ["Chat with / Meet", "Tag", "Like", "Follow"], a: "Chat with / Meet" },
            { sent: "We are **uploading** a game from the App Store.", wrong: "uploading", options: ["Downloading", "Sharing", "Tagging", "Blocking"], a: "Downloading" },
            { sent: "He is **recording** a letter to his grandmother.", wrong: "recording", options: ["Writing", "Posting", "Sending", "Tagging"], a: "Writing" },
            { sent: "I am **tagging** a funny photo for TBT today.", wrong: "tagging", options: ["Posting/Sharing", "Downloading", "Blocking", "Unfollowing"], a: "Posting/Sharing" },
            { sent: "The **account** is very slow today; I can't browse any pages.", wrong: "account", options: ["Internet/Wifi", "Smartphone", "Laptop", "Router"], a: "Internet/Wifi" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 items) ---
        9: [
            { audio: "How are you feeling today?", options: ["I am feeling confident.", "Today is tomorrow.", "At 7 o'clock.", "In the hallway."], a: "I am feeling confident." },
            { audio: "What are you going to do about the bully?", options: ["I am going to report him.", "I am going to be a cat.", "Yesterday was fun.", "My phone is blue."], a: "I am going to report him." },
            { audio: "When are you meeting the teacher?", options: ["I am meeting her tomorrow.", "I am meeting a sandwich.", "With a pencil.", "Because I am happy."], a: "I am meeting her tomorrow." },
            { audio: "Why are you so frustrated?", options: ["Because I cannot solve this math problem.", "Yesterday was Monday.", "I have a new laptop.", "At noon."], a: "Because I cannot solve this math problem." },
            { audio: "When is your birthday?", options: ["It is in October.", "I am fifteen years old.", "On the desk.", "Happy birthday!"], a: "It is in October." },
            { audio: "Are you going to tell your parents about the message?", options: ["Yes, I am going to tell them tonight.", "No, they are teachers.", "Because it is rain.", "My cat is sleeping."], a: "Yes, I am going to tell them tonight." },
            { audio: "Where do you usually study?", options: ["I usually study in the library.", "I am studying English now.", "On Tuesdays.", "With my friends."], a: "I usually study in the library." },
            { audio: "What time does school finish?", options: ["It finishes at 3 PM.", "It is a big school.", "In the afternoon.", "Yes, it does."], a: "It finishes at 3 PM." },
            { audio: "How often do you check your notifications?", options: ["I check them every ten minutes.", "I am checking them now.", "Because I have many messages.", "On my phone."], a: "I check them every ten minutes." },
            { audio: "Why is the cat so scared?", options: ["Because the dog is barking loudly.", "It is a black cat.", "At night.", "Yes, it is."], a: "Because the dog is barking loudly." },
            { audio: "Who is going to help us with the campaign?", options: ["Mrs. Canales is going to help us.", "It is a very important project.", "Tomorrow morning.", "No, thank you."], a: "Mrs. Canales is going to help us." },
            { audio: "What are you doing tonight?", options: ["I am watching a movie with my family.", "I usually watch TV.", "In the living room.", "My name is Paul."], a: "I am watching a movie with my family." },
            { audio: "When are they flying to Paris?", options: ["They are flying next month.", "Paris is a beautiful city.", "By plane.", "Yes, they are."], a: "They are flying next month." },
            { audio: "Why is bullying wrong?", options: ["Because it hurts people's feelings.", "It happens at school.", "Stop it now!", "I am a student."], a: "Because it hurts people's feelings." },
            { audio: "How do you usually go to school?", options: ["I usually go by bus.", "I am going to school now.", "At 8:00 AM.", "To learn English."], a: "I usually go by bus." },
            { audio: "Who do you trust when you have a problem?", options: ["I trust my parents and my teachers.", "I am feeling better now.", "Every day.", "It is a safe place."], a: "I trust my parents and my teachers." },
            { audio: "What is the principal going to say?", options: ["She is going to talk about respect.", "She is in the gym.", "At 9:00 AM.", "Yes, she is."], a: "She is going to talk about respect." },
            { audio: "How is Albert feeling now?", options: ["He is feeling a little better.", "He is a student.", "In the classroom.", "No, he isn't."], a: "He is feeling a little better." },
            { audio: "When do you usually have dinner?", options: ["I usually have dinner at 8 PM.", "I am having dinner now.", "In the kitchen.", "With my family."], a: "I usually have dinner at 8 PM." },
            { audio: "Why are you taking your umbrella?", options: ["Because it is going to rain.", "It is a black umbrella.", "In my hand.", "No, I am not."], a: "Because it is going to rain." },
            { audio: "What are you recording with your phone?", options: ["I am recording a video for the project.", "I usually record stories.", "At the park.", "Yes, I am."], a: "I am recording a video for the project." },
            { audio: "Who is the bully in your class?", options: ["I am not going to say his name here.", "Bullying is wrong.", "In the 8th grade.", "Yes, he is."], a: "I am not going to say his name here." },
            { audio: "How are you going to stop the cyberbullying?", options: ["I am going to block the user and report it.", "It is very dangerous.", "Tonight.", "No, I can't."], a: "I am going to block the user and report it." },
            { audio: "Where are you meeting your friends later?", options: ["We are meeting at the shopping mall.", "We are going to have fun.", "At 4 o'clock.", "Yes, we are."], a: "We are meeting at the shopping mall." },
            { audio: "What is the new campaign about?", options: ["It is about empathy and respect.", "It starts next week.", "The principal is speaking.", "No, it isn't."], a: "It is about empathy and respect." },
            { audio: "Why is Sarah so excited?", options: ["Because she is going to a concert tonight.", "She is a talented singer.", "In her bedroom.", "Yes, she is."], a: "Because she is going to a concert tonight." },
            { audio: "When are you seeing the doctor?", options: ["I am seeing him at 2 PM today.", "He is a very good doctor.", "At the hospital.", "No, I am not."], a: "I am seeing him at 2 PM today." },
            { audio: "Who is spreading the rumor?", options: ["Someone from the other school.", "The rumor is not true.", "In the hallway.", "Yes, they are."], a: "Someone from the other school." },
            { audio: "How often do you talk with your counselor?", options: ["I talk with her once a month.", "I am talking with her now.", "She is very kind.", "In her office."], a: "I talk with her once a month." },
            { audio: "What are you having for lunch today?", options: ["I am having a sandwich and an apple.", "I usually have lunch at noon.", "In the cafeteria.", "With my classmates."], a: "I am having a sandwich and an apple." },
            { audio: "Where is the safest place at school?", options: ["The library is the quietest and safest.", "I feel safe here.", "On Fridays.", "Because of the cameras."], a: "The library is the quietest and safest." },
            { audio: "Why are you looking for Mrs. Canales?", options: ["Because I need to report a problem.", "She is my teacher.", "In the classroom.", "Yes, I am."], a: "Because I need to report a problem." },
            { audio: "How do you usually feel on Monday mornings?", options: ["I usually feel a bit sleepy.", "I am waking up now.", "At 7:00 AM.", "At school."], a: "I usually feel a bit sleepy." },
            { audio: "When are we having dinner together?", options: ["We are having dinner this Sunday.", "Dinner is delicious.", "In the dining room.", "No, we aren't."], a: "We are having dinner this Sunday." },
            { audio: "What are the bullies doing now?", options: ["They are waiting in the hallway.", "They usually bully everyone.", "Because they are mean.", "No, they aren't."], a: "They are waiting in the hallway." },
            { audio: "Who is going to support Lucas?", options: ["All his friends are going to support him.", "He is feeling very lonely.", "Tonight.", "Yes, they are."], a: "All his friends are going to support him." },
            { audio: "Why are you staying home tonight?", options: ["Because I am going to study for math.", "I am staying in my bedroom.", "At 8 o'clock.", "No, I'm not."], a: "Because I am going to study for math." },
            { audio: "Where is it going to rain?", options: ["It is going to rain in the city center.", "It is a very heavy rain.", "Later today.", "Yes, it is."], a: "It is going to rain in the city center." },
            { audio: "How many students are joining the campaign?", options: ["Fifty students are joining today.", "They are very hopeful.", "In the gym.", "Yes, they are."], a: "Fifty students are joining today." },
            { audio: "What is your favorite time of day?", options: ["My favorite time is the evening.", "I usually go to bed at 10.", "Because it is quiet.", "No, it isn't."], a: "My favorite time is the evening." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 items) ---
        10: [
            { audio: "I am going to talk to the counselor tomorrow.", sent: "I am ___ to talk to the ___ tomorrow.", blanks: ["going", "counselor"] },
            { audio: "Albert feels worried because of the message.", sent: "Albert feels ___ because of the ___.", blanks: ["worried", "message"] },
            { audio: "We are having a meeting tonight.", sent: "We are ___ a ___ tonight.", blanks: ["having", "meeting"] },
            { audio: "Everything is going to be okay.", sent: "Everything is ___ to be ___.", blanks: ["going", "okay"] },
            { audio: "She usually helps her friends at school.", sent: "She ___ ___ her friends at school.", blanks: ["usually", "helps"] },
            { audio: "Are you meeting Sarah at the park?", sent: "Are you ___ Sarah at the ___?", blanks: ["meeting", "park"] },
            { audio: "I am feeling a little better now.", sent: "I am ___ a little ___ now.", blanks: ["feeling", "better"] },
            { audio: "The principal is going to speak later.", sent: "The principal is ___ to ___ later.", blanks: ["going", "speak"] },
            { audio: "Don't be afraid to ask for help.", sent: "Don't be ___ to ask for ___.", blanks: ["afraid", "help"] },
            { audio: "We don't accept bullying here.", sent: "We don't ___ ___ here.", blanks: ["accept", "bullying"] },
            { audio: "He is posting a photo on Instagram.", sent: "He is ___ a ___ on Instagram.", blanks: ["posting", "photo"] },
            { audio: "I usually wake up at seven o'clock.", sent: "I ___ wake ___ at seven o'clock.", blanks: ["usually", "up"] },
            { audio: "Are they flying to Paris next month?", sent: "Are they ___ to Paris ___ month?", blanks: ["flying", "next"] },
            { audio: "You must talk with someone you trust.", sent: "You must ___ with someone you ___.", blanks: ["talk", "trust"] },
            { audio: "I am feeling very confident today.", sent: "I am ___ very ___ today.", blanks: ["feeling", "confident"] },
            { audio: "It is going to rain later.", sent: "It is ___ to ___ later.", blanks: ["going", "rain"] },
            { audio: "They are spreading a bad rumor.", sent: "They are ___ a bad ___.", blanks: ["spreading", "rumor"] },
            { audio: "I blocked the rude user online.", sent: "I ___ the ___ user online.", blanks: ["blocked", "rude"] },
            { audio: "We are launching a new campaign soon.", sent: "We are ___ a new ___ soon.", blanks: ["launching", "campaign"] },
            { audio: "Sarah is watching a movie tonight.", sent: "Sarah is ___ a ___ tonight.", blanks: ["watching", "movie"] },
            { audio: "He feels frustrated with the test.", sent: "He ___ ___ with the test.", blanks: ["feels", "frustrated"] },
            { audio: "I usually have lunch at noon.", sent: "I ___ have ___ at noon.", blanks: ["usually", "lunch"] },
            { audio: "Are you doing anything this weekend?", sent: "Are you ___ anything this ___?", blanks: ["doing", "weekend"] },
            { audio: "Bullying hurts and is not safe.", sent: "Bullying ___ and is not ___.", blanks: ["hurts", "safe"] },
            { audio: "I am going to tell my parents.", sent: "I am ___ to ___ my parents.", blanks: ["going", "tell"] },
            { audio: "The cat is scared of the dog.", sent: "The cat is ___ of the ___.", blanks: ["scared", "dog"] },
            { audio: "We are meeting at eight o'clock.", sent: "We are ___ at eight ___.", blanks: ["meeting", "o'clock"] },
            { audio: "She usually studies in the afternoon.", sent: "She ___ ___ in the afternoon.", blanks: ["usually", "studies"] },
            { audio: "Is he going to report the bully?", sent: "Is he ___ to ___ the bully?", blanks: ["going", "report"] },
            { audio: "I will call you later.", sent: "I ___ ___ you later.", blanks: ["will", "call"] },
            { audio: "We are visiting our grandparents soon.", sent: "We are ___ our ___ soon.", blanks: ["visiting", "grandparents"] },
            { audio: "He never bullies his classmates.", sent: "He ___ ___ his classmates.", blanks: ["never", "bullies"] },
            { audio: "I am feeling excited about the trip.", sent: "I am ___ ___ about the trip.", blanks: ["feeling", "excited"] },
            { audio: "She is going to be a teacher.", sent: "She is ___ to be a ___.", blanks: ["going", "teacher"] },
            { audio: "They usually play soccer on Saturdays.", sent: "They ___ play ___ on Saturdays.", blanks: ["usually", "soccer"] },
            { audio: "I trust my best friend.", sent: "I ___ my ___ friend.", blanks: ["trust", "best"] },
            { audio: "We are having dinner at home.", sent: "We are ___ ___ at home.", blanks: ["having", "dinner"] },
            { audio: "Is everything going to be fine?", sent: "Is everything ___ to be ___?", blanks: ["going", "fine"] },
            { audio: "I always respect my teachers.", sent: "I ___ ___ my teachers.", blanks: ["always", "respect"] },
            { audio: "Sarah is meeting the counselor now.", sent: "Sarah is ___ the ___ now.", blanks: ["meeting", "counselor"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE ---
        11: [
            {
                title: "Reporting Cyberbullying",
                lines: [
                    { speaker: "Celine", text: "Hi Albert. You look very ___ today. Is everything okay?", options: ["worried", "happy"], a: "worried" },
                    { speaker: "Albert", text: "Someone is posting ___ comments on my photos.", options: ["mean", "nice"], a: "mean" },
                    { speaker: "Celine", text: "That is cyberbullying! You ___ report it to an adult.", options: ["must", "usually"], a: "must" },
                    { speaker: "Albert", text: "I ___ Mrs. Canales tomorrow morning to talk.", options: ["am meeting", "meet"], a: "am meeting" },
                    { speaker: "Celine", text: "That is a good ___. I am going to support you.", options: ["decision", "routine"], a: "decision" }
                ]
            },
            {
                title: "Future Arrangements",
                lines: [
                    { speaker: "Sarah", text: "Hey Mike! ___ anything special this weekend?", options: ["Are you doing", "Do you do"], a: "Are you doing" },
                    { speaker: "Mike", text: "Yes! I ___ visit my grandparents.", options: ["am going to", "am usually"], a: "am going to" },
                    { speaker: "Sarah", text: "Are you ___ there?", options: ["flying", "fly"], a: "flying" },
                    { speaker: "Mike", text: "No, we ___ on Saturday morning by car.", options: ["are leaving", "leave"], a: "are leaving" },
                    { speaker: "Sarah", text: "I hope you have a ___ trip!", options: ["safe", "rude"], a: "safe" }
                ]
            },
            {
                title: "The Kindness First Campaign",
                lines: [
                    { speaker: "Leo", text: "The school ___ a new campaign next week.", options: ["is starting", "starts"], a: "is starting" },
                    { speaker: "Celine", text: "It is ___ be very successful.", options: ["going to", "usually"], a: "going to" },
                    { speaker: "Leo", text: "We ___ a special assembly on Tuesday.", options: ["are having", "have"], a: "are having" },
                    { speaker: "Celine", text: "The principal ___ speak about respect.", options: ["is going to", "am going to"], a: "is going to" },
                    { speaker: "Leo", text: "I am feeling very ___ that the bullying will stop.", options: ["hopeful", "scared"], a: "hopeful" }
                ]
            },
            {
                title: "Dealing with a Bully",
                lines: [
                    { speaker: "Albert", text: "I still feel ___ that he might find my new account.", options: ["scared", "happy"], a: "scared" },
                    { speaker: "Celine", text: "Don't be ___, Albert. You shouldn't deal with this alone.", options: ["afraid", "brave"], a: "afraid" },
                    { speaker: "Albert", text: "I ___ tell my parents everything tonight.", options: ["am going to", "usually"], a: "am going to" },
                    { speaker: "Celine", text: "Good. You can ___ them to help you.", options: ["trust", "bullying"], a: "trust" },
                    { speaker: "Albert", text: "I am ___ a little better now.", options: ["feeling", "feel"], a: "feeling" }
                ]
            },
            {
                title: "Comparing Routines and Plans",
                lines: [
                    { speaker: "Mom", text: "Paul, you ___ in your room at this time.", options: ["usually study", "are usually studying"], a: "usually study" },
                    { speaker: "Paul", text: "I am ___ a quick snack, Mom.", options: ["having", "have"], a: "having" },
                    { speaker: "Mom", text: "___ Sarah later to finish the project?", options: ["Are you meeting", "Do you meet"], a: "Are you meeting" },
                    { speaker: "Paul", text: "Yes, she ___ here at 4 PM.", options: ["is coming", "comes"], a: "is coming" },
                    { speaker: "Mom", text: "Okay. I ___ bake some cookies for you both.", options: ["am going to", "go"], a: "am going to" }
                ]
            },
            {
                title: "The School Counselor",
                lines: [
                    { speaker: "Student", text: "Mrs. Canales, I am feeling very ___ in my new class.", options: ["lonely", "excited"], a: "lonely" },
                    { speaker: "Counselor", text: "I ___ help you meet some nice people.", options: ["am going to", "usually"], a: "am going to" },
                    { speaker: "Student", text: "___ are you going to do that?", options: ["How", "When"], a: "How" },
                    { speaker: "Counselor", text: "We ___ a group lunch for new students tomorrow.", options: ["are having", "have"], a: "are having" },
                    { speaker: "Student", text: "I'm feeling more ___ now.", options: ["confident", "angry"], a: "confident" }
                ]
            },
            {
                title: "Spreading Rumors",
                lines: [
                    { speaker: "Sarah", text: "Someone is ___ a rumor that Mike is moving.", options: ["spreading", "starting"], a: "spreading" },
                    { speaker: "Leo", text: "That ___ ok. Rumors hurt feelings.", options: ["isn't", "is"], a: "isn't" },
                    { speaker: "Sarah", text: "I ___ ask Mike if it is true.", options: ["am going to", "usually"], a: "am going to" },
                    { speaker: "Leo", text: "Good. We must ___ the gossip in our class.", options: ["stop", "bully"], a: "stop" },
                    { speaker: "Sarah", text: "I am ___ him at lunch to talk.", options: ["meeting", "meet"], a: "meeting" }
                ]
            },
            {
                title: "Night Routines and Plans",
                lines: [
                    { speaker: "Albert", text: "What time ___ to bed usually, Celine?", options: ["do you go", "are you going"], a: "do you go" },
                    { speaker: "Celine", text: "I go to bed ___ 10 PM, but tonight is different.", options: ["at", "in"], a: "at" },
                    { speaker: "Albert", text: "Are you ___ a movie?", options: ["watching", "watch"], a: "watching" },
                    { speaker: "Celine", text: "No, I ___ wake up very early tomorrow for a trip.", options: ["am going to", "am flying"], a: "am going to" },
                    { speaker: "Albert", text: "___ tomorrow morning?", options: ["Are you going", "Do you go"], a: "Are you going" }
                ]
            },
            {
                title: "Reporting an Incident",
                lines: [
                    { speaker: "A", text: "I saw a student being ___ to Lucas.", options: ["rude", "supportive"], a: "rude" },
                    { speaker: "B", text: "That is bullying. We ___ report it.", options: ["must", "always"], a: "must" },
                    { speaker: "A", text: "___ you going to tell the teacher?", options: ["Are", "Do"], a: "Are" },
                    { speaker: "B", text: "Yes, I am ___ her now.", options: ["meeting", "meet"], a: "meeting" },
                    { speaker: "A", text: "I am going to ___ you.", options: ["support", "block"], a: "support" }
                ]
            },
            {
                title: "The Weekend Forecast",
                lines: [
                    { speaker: "A", text: "Look at those clouds! It is ___ rain.", options: ["going to", "usually"], a: "going to" },
                    { speaker: "B", text: "Oh no! I ___ bring an umbrella today.", options: ["didn't", "don't"], a: "didn't" },
                    { speaker: "A", text: "We are ___ wet if we stay outside.", options: ["getting", "get"], a: "getting" },
                    { speaker: "B", text: "I ___ stay in the library until it stops.", options: ["am going to", "usually"], a: "am going to" },
                    { speaker: "A", text: "That is a ___ idea.", options: ["safe", "dangerous"], a: "safe" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER ---
        12: [
            {
                title: "Lucas and the Cyberbullying Incident",
                text: "Lucas is generally a very happy and outgoing student at REACH school, but this week his behavior changed completely. He is feeling lonely and sad because a group of students is posting mean comments on his social media photos. This is a clear case of cyberbullying, which can be very dangerous for a person's mental health. Lucas knows that he shouldn't hide or ignore the situation. Tomorrow, he is going to report the mean comments to the school counselor. He believes that talking with someone he trusts is the first step to making everything okay again.",
                questions: [
                    { q: "How is Lucas's personality described normally?", options: ["Lonely and sad.", "Happy and outgoing.", "Rude and angry."], a: "Happy and outgoing." },
                    { q: "Why is Lucas feeling sad this week?", options: ["Failed a test.", "Mean comments online.", "Moving to a new school."], a: "Mean comments online." },
                    { q: "What term is used for the bad behavior?", options: ["A rumor.", "Cyberbullying.", "A campaign."], a: "Cyberbullying." },
                    { q: "What is Lucas's plan for tomorrow?", options: ["Hide in his room.", "Report to the counselor.", "Post mean comments back."], a: "Report to the counselor." },
                    { q: "Who does Lucas believe he should talk to?", options: ["The bullies.", "Someone he trusts.", "No one."], a: "Someone he trusts." }
                ]
            },
            {
                title: "Supporting Albert",
                text: "Celine noticed that Albert was looking very worried during the break today. When she approached him, he explained that a bully created a new account just to send him mean messages. Albert felt frustrated because he already blocked the first account. Celine told him, 'You are not alone, Albert. Friends support each other.' They are meeting Mrs. Canales later this afternoon to discuss the problem. Albert is also going to tell his parents about the situation tonight. He is feeling a little more confident now because he has Celine’s support.",
                questions: [
                    { q: "How did Albert feel when Celine saw him?", options: ["Excited.", "Worried and frustrated.", "Calm."], a: "Worried and frustrated." },
                    { q: "What did the bully do after being blocked?", options: ["Apologized.", "Created a new account.", "Stopped the bullying."], a: "Created a new account." },
                    { q: "What is Celine’s role in this story?", options: ["She is the bully.", "Supporting her friend.", "The counselor."], a: "Supporting her friend." },
                    { q: "Who are Albert and Celine meeting this afternoon?", options: ["Parents.", "Mrs. Canales.", "The principal."], a: "Mrs. Canales." },
                    { q: "When is Albert going to talk to his parents?", options: ["Tomorrow.", "Tonight.", "Next week."], a: "Tonight." }
                ]
            },
            {
                title: "The 'Kindness First' Campaign",
                text: "Next month, our school is going to launch a very important project called 'Kindness First.' The goal of this campaign is to teach students about respect, empathy, and safety. Usually, we have assembly on Monday mornings, but next week we are meeting on Tuesday to officially start the project. The principal is going to speak about the dangers of rumors and bullying. All the teachers are going to support the students and help them feel safe. We are feeling very hopeful that our school will become a much kinder place for everyone.",
                questions: [
                    { q: "What is the name of the new school project?", options: ["Safety First.", "Kindness First.", "Respect for All."], a: "Kindness First." },
                    { q: "What are the main topics of the campaign?", options: ["Math and Science.", "Respect and empathy.", "Sports and games."], a: "Respect and empathy." },
                    { q: "When is the special assembly next week?", options: ["Monday.", "Tuesday.", "Wednesday."], a: "Tuesday." },
                    { q: "What is the principal going to talk about?", options: ["Uniforms.", "Dangers of rumors.", "A trip to Paris."], a: "Dangers of rumors." },
                    { q: "How do the students/staff feel?", options: ["Scared.", "Hopeful.", "Angry."], a: "Hopeful." }
                ]
            },
            {
                title: "Sarah’s Future Plans",
                text: "Sarah is a very busy 8th-grade student. She usually studies hard from Monday to Friday, but this week she is thinking about her future arrangements. Tonight, she is watching a documentary about France because she is flying to Paris next month with her family. They are visiting many traditional museums and modern buildings. Sarah is also going to start a French course soon to improve her speaking skills. She is feeling very excited and a bit nervous about the trip, but she knows everything is going to be an amazing adventure.",
                questions: [
                    { q: "What grade is Sarah in?", options: ["6th.", "7th.", "8th."], a: "8th." },
                    { q: "What is Sarah doing tonight?", options: ["Flying.", "Watching a documentary.", "Studying math."], a: "Watching a documentary." },
                    { q: "When is Sarah’s trip?", options: ["Next week.", "Next month.", "Next year."], a: "Next month." },
                    { q: "Why is Sarah starting a French course?", options: ["Help her brother.", "Improve speaking.", "Teacher is French."], a: "Improve speaking." },
                    { q: "How is Sarah feeling?", options: ["Frustrated.", "Excited and nervous.", "Calm."], a: "Excited and nervous." }
                ]
            },
            {
                title: "Managing Emotions",
                text: "Learning how to manage emotions is a part of growing up. Many teenagers feel angry or frustrated when things don't go as planned. For example, if you fail a test, you might feel sad and worried. However, it is important to stay calm and breathe. You shouldn't deal with strong feelings alone. At REACH school, the counselor is always going to listen to you. If you are feeling lonely, you can join one of the school clubs to meet new friends. Remember, being confident in yourself is the best way to face any challenge.",
                questions: [
                    { q: "When do teenagers feel angry?", options: ["When things go right.", "When things don't go as planned.", "Never."], a: "When things don't go as planned." },
                    { q: "What should you do if you feel sad?", options: ["Hide.", "Stay calm and breathe.", "Bully others."], a: "Stay calm and breathe." },
                    { q: "Should you deal with feelings alone?", options: ["Yes.", "No.", "Only if brave."], a: "No." },
                    { q: "How can you meet new friends?", options: ["Home.", "Joining clubs.", "Spreading rumors."], a: "Joining clubs." },
                    { q: "What is the best way to face challenges?", options: ["Being rude.", "Being confident.", "Being scared."], a: "Being confident." }
                ]
            },
            {
                title: "The Problem with Rumors",
                text: "Spreading a rumor is a form of bullying that happens very often in school hallways. A rumor is a story that is currently circulating but is not necessarily true. Rumors can be very dangerous because they can hurt a student's reputation and make them feel lonely and excluded. At our school, we have a rule: if you hear a rumor, don't repeat it. Instead, you should report the behavior to a teacher you trust. We are going to have a workshop next Friday to talk about being truthful.",
                questions: [
                    { q: "Where do rumors usually happen?", options: ["Online.", "Hallways.", "Library."], a: "Hallways." },
                    { q: "What is a rumor?", options: ["True fact.", "Story that might not be true.", "Project."], a: "Story that might not be true." },
                    { q: "Why are rumors dangerous?", options: ["Too long.", "Hurt reputation.", "Funny."], a: "Hurt reputation." },
                    { q: "What is the school rule?", options: ["Repeat them.", "Don't repeat them.", "Post online."], a: "Don't repeat them." },
                    { q: "What is happening next Friday?", options: ["Soccer.", "Workshop.", "English test."], a: "Workshop." }
                ]
            },
            {
                title: "A Change in Routine",
                text: "Usually, my brother Leo gets up at 7:00 AM and eats breakfast slowly. He goes to school by bus and studies hard all day. But today is a special day! He is not going to school because his class is visiting a science museum. Right now, he is waiting for the school bus at the gate. He is feeling very excited because he is going to see a dinosaur exhibit. Tonight, he is meeting his friends to talk about the museum. His daily routine is changing for one day, and he is very happy about it!",
                questions: [
                    { q: "What time does Leo usually get up?", options: ["6:00 AM.", "7:00 AM.", "8:00 AM."], a: "7:00 AM." },
                    { q: "Why is Leo not in class today?", options: ["Sick.", "Visiting a museum.", "Saturday."], a: "Visiting a museum." },
                    { q: "What is Leo doing now?", options: ["Eating.", "Waiting for the bus.", "Seeing dinosaurs."], a: "Waiting for the bus." },
                    { q: "What is Leo doing tonight?", options: ["Study.", "Meet friends.", "Bed early."], a: "Meet friends." },
                    { q: "How does Leo feel?", options: ["Frustrated.", "Happy and excited.", "Scared."], a: "Happy and excited." }
                ]
            },
            {
                title: "Mr. D’s Message on Safety",
                text: "Today I am speaking to you about safety. We want everyone to feel safe in our school and also online. Cyberbullying is wrong, and it is something we must stop together. If someone is mean to you, don't be afraid to speak up. I am going to support every student who needs help. Next week, we are starting a mentoring program where older students help younger ones. Trust your teachers and your friends. Everything is going to be okay if we respect each other!",
                questions: [
                    { q: "What is the main topic?", options: ["Math.", "Safety and cyberbullying.", "Mall."], a: "Safety and cyberbullying." },
                    { q: "What does Mr. D say about cyberbullying?", options: ["Okay.", "Wrong/Must be stopped.", "Funny."], a: "Wrong/Must be stopped." },
                    { q: "What should a student do if someone is mean?", options: ["Hide.", "Speak up.", "Post mean things."], a: "Speak up." },
                    { q: "What starts next week?", options: ["Soccer.", "Mentoring program.", "French course."], a: "Mentoring program." },
                    { q: "What is the condition for things being okay?", options: ["Study hard.", "Respect each other.", "School closes."], a: "Respect each other." }
                ]
            },
            {
                title: "The Lunchroom Incident",
                text: "Today during lunch, Lucas was sitting alone when he saw a student blocking his friend. Lucas is not a rude person, so he decided to help. He told the student that bullying isn't ok at our school. Now, Lucas is going to the principal's office to report what happened. He is feeling a bit nervous, but he knows he made the right decision. His teachers always support students who speak up against mean behavior.",
                questions: [
                    { q: "Where was Lucas sitting?", options: ["Hallway.", "Lunchroom.", "Classroom."], a: "Lunchroom." },
                    { q: "What did Lucas see?", options: ["Friend studying.", "Student blocking a friend.", "Principal speaking."], a: "Student blocking a friend." },
                    { q: "Is Lucas a rude person?", options: ["Yes.", "No.", "Unknown."], a: "No." },
                    { q: "Where is Lucas going now?", options: ["Home.", "Principal's office.", "Library."], a: "Principal's office." },
                    { q: "How is Lucas feeling?", options: ["Happy.", "Nervous.", "Confident."], a: "Nervous." }
                ]
            },
            {
                title: "Online Reputation",
                text: "Celine is learning about her online reputation. She knows that once you post a message, everyone can see it. She usually checks her privacy settings every week. Today, she is unfollowing a page that spreads rumors. Celine says: 'Respect starts online too.' She is going to talk to her classmates about digital safety next Wednesday. She is feeling very confident about her presentation.",
                questions: [
                    { q: "What is Celine learning about?", options: ["Coding.", "Online reputation.", "Calculus."], a: "Online reputation." },
                    { q: "How often does she check settings?", options: ["Every day.", "Every week.", "Monthly."], a: "Every week." },
                    { q: "What is she doing today?", options: ["Posting a photo.", "Unfollowing a rumor page.", "Gaming."], a: "Unfollowing a rumor page." },
                    { q: "When is her presentation?", options: ["Tomorrow.", "Next Wednesday.", "Friday."], a: "Next Wednesday." },
                    { q: "How does she feel about the presentation?", options: ["Worried.", "Confident.", "Bored."], a: "Confident." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER (10 items) ---
        13: [
            {
                title: "The Morning Routine",
                audio: "Hello! My name is Sarah. I usually wake up at 6:30 AM on weekdays. I immediately check my smartphone for new notifications. Today is Tuesday, and right now I am having breakfast. I am not watching TV; I am scrolling through my Instagram feed to see my friends' stories. I usually go online for thirty minutes before school starts at 8:00 AM.",
                questions: [
                    { q: "What time does Sarah usually wake up?", options: ["6:30 AM", "8:00 AM", "7:00 AM"], a: "6:30 AM" },
                    { q: "What does she check immediately?", options: ["Laptop", "Notifications", "Homework"], a: "Notifications" },
                    { q: "What is Sarah doing right now?", options: ["Watching TV", "Having breakfast", "Sleeping"], a: "Having breakfast" },
                    { q: "Which social media is she using?", options: ["TikTok", "WhatsApp", "Instagram"], a: "Instagram" },
                    { q: "When does her school start?", options: ["12:00 PM", "8:00 AM", "7:30 AM"], a: "8:00 AM" }
                ]
            },
            {
                title: "The Viral Video",
                audio: "Albert is in the computer lab at REACH school. He usually studies history on Monday afternoons, but today he is excited. He is watching a video that is going viral on the internet. It is a meme of a cat playing the piano! Albert is laughing out loud (LOL) and tagging his friend Celine in the comments. The video already has two million views!",
                questions: [
                    { q: "Where is Albert right now?", options: ["Home", "Computer lab", "Library"], a: "Computer lab" },
                    { q: "What does he usually do on Monday afternoons?", options: ["Games", "Studies history", "Stories"], a: "Studies history" },
                    { q: "What is happening to the video?", options: ["Deleted", "Going viral", "Loading slowly"], a: "Going viral" },
                    { q: "What slang does Albert use?", options: ["OMG", "BRB", "LOL"], a: "LOL" },
                    { q: "Who is Albert tagging?", options: ["Teacher", "Celine", "Mom"], a: "Celine" }
                ]
            },
            {
                title: "Digital Influencers",
                audio: "My sister Mia is a famous digital influencer. She has over five hundred thousand followers on TikTok. She usually posts three videos every week, mostly on Wednesdays and Fridays. Right now, she is very busy in her bedroom. She is recording a new story to thank her fans for the likes. She says, 'OMG, I love my followers!' She is always online during the day.",
                questions: [
                    { q: "What is Mia’s profession?", options: ["Teacher", "Digital influencer", "Doctor"], a: "Digital influencer" },
                    { q: "How many followers does she have?", options: ["50,000", "500,000", "5,000,000"], a: "500,000" },
                    { q: "When does she usually post?", options: ["Mondays", "Wednesdays/Fridays", "Weekends"], a: "Wednesdays/Fridays" },
                    { q: "What is she doing at this moment?", options: ["Sleeping", "Recording a story", "Checking feed"], a: "Recording a story" },
                    { q: "Is Mia offline right now?", options: ["Yes", "No", "IDK"], a: "No" }
                ]
            },
            {
                title: "Tech Problems",
                audio: "Mike is trying to do his homework on his laptop, but he has a problem. The wifi in his house is not working well today. The files are loading very slowly. He is sending a message to his teacher on WhatsApp to explain the situation. He writes: 'BRB, I am going to my cousin's house to use his internet.' Mike usually finishes his work at 5:00 PM, but today he is late.",
                questions: [
                    { q: "What device is Mike using?", options: ["Tablet", "Laptop", "Smartphone"], a: "Laptop" },
                    { q: "What is the problem?", options: ["Too fast", "Wifi not working well", "No password"], a: "Wifi not working well" },
                    { q: "How is Mike communicating?", options: ["Email", "WhatsApp", "Post"], a: "WhatsApp" },
                    { q: "Where is Mike going?", options: ["School", "Cousin's house", "Park"], a: "Cousin's house" },
                    { q: "Is Mike on time today?", options: ["Yes", "No", "Early"], a: "No" }
                ]
            },
            {
                title: "Weekend Habits",
                audio: "On Saturdays, Celine usually goes to the beach with her family. She loves to swim, but she always leaves her smartphone in the car. She prefers to be offline during the weekend. However, this Saturday is different because it is raining. Right now, Celine is sitting on the sofa with her tablet. She is downloading a new movie to watch with her brother. They are having a great time together.",
                questions: [
                    { q: "Where does Celine usually go?", options: ["School", "Beach", "Mall"], a: "Beach" },
                    { q: "What is her phone habit?", options: ["Always online", "Prefers being offline", "Records stories"], a: "Prefers being offline" },
                    { q: "Why is this Saturday different?", options: ["Traveling", "Raining", "Birthday"], a: "Raining" },
                    { q: "What is Celine doing now?", options: ["Swimming", "Downloading a movie", "Tagging friends"], a: "Downloading a movie" },
                    { q: "Who is Celine with?", options: ["Cousins", "Brother", "Teacher"], a: "Brother" }
                ]
            },
            {
                title: "Throwback Thursday",
                audio: "Today is Thursday, so it is TBT day! Many people are posting old photos on social media. Sarah is looking at her photo gallery right now. She is choosing a picture from her trip to France in 2023. She is editing the photo with a beautiful filter. She is writing a caption with the hashtag #TBT and #France. She usually gets many comments on her TBT posts because her photos are very professional.",
                questions: [
                    { q: "Why is today special?", options: ["New Year", "TBT day", "Holiday"], a: "TBT day" },
                    { q: "What is Sarah doing now?", options: ["New photo", "Looking at gallery", "TikTok"], a: "Looking at gallery" },
                    { q: "Where was the photo taken?", options: ["Brazil", "France", "Australia"], a: "France" },
                    { q: "What is she doing to the photo?", options: ["Deleting", "Editing with filter", "Printing"], a: "Editing with filter" },
                    { q: "What does she include?", options: ["Link", "Hashtags", "Wifi password"], a: "Hashtags" }
                ]
            },
            {
                title: "The Online Gamer",
                audio: "Leo is a pro gamer. He usually plays video games for five hours every day. He has an expensive desktop computer with two monitors. At this moment, he is not playing; he is broadcasting a live stream to his followers. He is wearing his headphones and chatting with people from all over the world. He often uses slang like 'OMG' when something exciting happens in the stream.",
                questions: [
                    { q: "What is Leo’s hobby?", options: ["YouTuber", "Pro gamer", "Student"], a: "Pro gamer" },
                    { q: "How long does he play?", options: ["1 hour", "5 hours", "All night"], a: "5 hours" },
                    { q: "What is Leo doing now?", options: ["Offline", "Broadcasting", "Sleeping"], a: "Broadcasting" },
                    { q: "What is he wearing?", options: ["Uniform", "Headphones", "Glasses"], a: "Headphones" },
                    { q: "Who is he chatting with?", options: ["Brother", "People worldwide", "Teacher"], a: "People worldwide" }
                ]
            },
            {
                title: "Mr. D’s Digital Life",
                audio: "Hello again! It's Mr. D. I am a digital native, but I also like the real world. I usually check my email at 9:00 AM and then I work on my laptop. In the afternoon, I often go for a walk and stay offline for two hours. Right now, I am sitting in a cafe. I am using the public wifi to upload a new lesson for you. I hope you are studying carefully! See you online!",
                questions: [
                    { q: "When does he check email?", options: ["7:00 AM", "9:00 AM", "Night"], a: "9:00 AM" },
                    { q: "What device does he use?", options: ["Tablet", "Laptop", "Smartphone"], a: "Laptop" },
                    { q: "What does he do to stay offline?", options: ["TV", "Go for a walk", "Games"], a: "Go for a walk" },
                    { q: "Where is Mr. D now?", options: ["Classroom", "Cafe", "Home"], a: "Cafe" },
                    { q: "What is he doing right now?", options: ["Lunch", "Uploading a lesson", "Recording story"], a: "Uploading a lesson" }
                ]
            },
            {
                title: "Parental Support",
                audio: "My parents are very supportive. They always listen when I have a problem. Tonight, they are meeting me to talk about my feelings. I usually feel much more confident after our talks. We are going to have a long dinner together. I trust them completely.",
                questions: [
                    { q: "How are the parents described?", options: ["Strict", "Supportive", "Angry"], a: "Supportive" },
                    { q: "When are they meeting the speaker?", options: ["Tomorrow", "Tonight", "Never"], a: "Tonight" },
                    { q: "How does the speaker feel after?", options: ["Frustrated", "Confident", "Lonely"], a: "Confident" },
                    { q: "What are they going to do?", options: ["Play soccer", "Have a long dinner", "Fly to Paris"], a: "Have a long dinner" },
                    { q: "Does the speaker trust them?", options: ["Yes", "No", "Sometimes"], a: "Yes" }
                ]
            },
            {
                title: "The School Dance",
                audio: "We are having a school dance next Friday! Sarah is feeling very excited. She is going to buy a new dress tomorrow. She is meeting her friends at the mall at 4 PM. Usually, she stays home on Fridays, but this week is special. Everything is going to be fun!",
                questions: [
                    { q: "What is happening next Friday?", options: ["Test", "School dance", "Assembly"], a: "School dance" },
                    { q: "How is Sarah feeling?", options: ["Worried", "Excited", "Sad"], a: "Excited" },
                    { q: "What is she buying tomorrow?", options: ["Laptop", "New dress", "Tablet"], a: "New dress" },
                    { q: "Where is she meeting friends?", options: ["Park", "Mall", "School"], a: "Mall" },
                    { q: "What does she usually do on Fridays?", options: ["Gathers with friends", "Stays home", "Plays soccer"], a: "Stays home" }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT ---
        14: [
            {
                title: "My Social Media Habits",
                text: "I am a very active user. I [1] (usually / am usually) post two photos every week. I love when my friends [2] (like / likes) my pictures. Right now, I [3] (am sharing / share) a funny video. It is [4] (going / goes) viral fast! I am also [5] (tagging / tag) my sister.",
                answers: ["usually", "like", "am sharing", "going", "tagging"]
            },
            {
                title: "Technology at Home",
                text: "My father [1] (uses / is using) a desktop computer for work. My sister has a [2] (tablet / story) with a big screen. Right now, she [3] (is watching / watches) a series. I am using my [4] (laptop / headphones) to do my homework. I am [5] (online / offline) at the moment.",
                answers: ["uses", "tablet", "is watching", "laptop", "online"]
            },
            {
                title: "Routine vs. Now",
                text: "Sarah [1] (usually wears / is usually wearing) glasses when she [2] (studies / is studying). But today she [3] (is wearing / wears) contact lenses. She is also [4] (recording / records) a story for Instagram right now. Her friends [5] (are commenting / comment) on how beautiful she looks.",
                answers: ["usually wears", "studies", "is wearing", "recording", "are commenting"]
            },
            {
                title: "Prepositions of Time",
                text: "I check my notifications [1] (in / at) the morning, right after I wake up [2] (at / on) 7:15. I usually post photos [3] (on / in) Saturdays. My birthday is [4] (in / at) May. [5] (At / On) night, I always turn off my wifi.",
                answers: ["in", "at", "on", "in", "At"]
            },
            {
                title: "Internet Slang",
                text: "I am chatting with Albert. He sent me a [1] (meme / laptop) and it is funny! I wrote [2] (LOL / IDK) because I am laughing. Then I saw a strange message. [3] (OMG / BRB), look at this! I [4] (IDK / LOL) what to do. My brother says: '[5] (BRB / TBT), I am going to the kitchen.'",
                answers: ["meme", "LOL", "OMG", "IDK", "BRB"]
            },
            {
                title: "Managing My Profile",
                text: "Celine is careful with her [1] (profile / hashtag). She [2] (usually blocks / is usually blocking) spam accounts. She [3] (follows / is following) only her real friends. Right now, she [4] (is unfollowing / unfollows) a page. She likes to keep her [5] (feed / login) clean.",
                answers: ["profile", "usually blocks", "follows", "is unfollowing", "feed"]
            },
            {
                title: "The Life Online",
                text: "Being a digital [1] (native / meme) is fun! We are always [2] (online / offline). But it is important to be [3] (offline / download) sometimes. I [4] (usually stay / am usually staying) away from my phone [5] (on / at) Sundays.",
                answers: ["native", "online", "offline", "usually stay", "on"]
            },
            {
                title: "Loading Problems",
                text: "The wifi at school is [1] (slow / fast). I am trying to [2] (download / tag) an app, but the file is [3] (loading / load) slowly. Albert [4] (is uploading / upload) his project right now. We [5] (usually use / are usually using) the computer lab when the wifi is bad.",
                answers: ["slow", "download", "loading", "is uploading", "usually use"]
            },
            {
                title: "Cyber Safety",
                text: "I usually [1] (change / am changing) my password every six months. Right now, I [2] (am updating / updates) my settings. My brother is [3] (helping / help) me. He says: 'Don't [4] (share / report) your data with [5] (strangers / friends) online.'",
                answers: ["change", "am updating", "helping", "share", "strangers"]
            },
            {
                title: "Presentation Prep",
                text: "Next week, I [1] (am going to / usually) give a speech. I [2] (am feeling / feel) a bit nervous today. I [3] (am meeting / meet) my group tonight to practice. We [4] (usually study / are usually studying) in the library. Everything is [5] (going to / usually) be okay.",
                answers: ["am going to", "am feeling", "am meeting", "usually study", "going to"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT ---
        15: [
            {
                title: "Text 1",
                audio: "I am posting a new photo on Instagram. I usually check my feed in the morning. Right now, I am tagging my best friends.",
                text: "I am [1] a new photo on [2]. I usually [3] my feed in the [4]. Right now, I am [5] my best friends.",
                answers: ["posting", "Instagram", "check", "morning", "tagging"]
            },
            {
                title: "Text 2",
                audio: "The wifi is not working well at the moment. I am uploading a video, but it is loading very slowly.",
                text: "The [1] is not working well at the [2]. I am [3] a video, but it is [4] very [5].",
                answers: ["wifi", "at", "uploading", "loading", "slowly"]
            },
            {
                title: "Text 3",
                audio: "Sarah usually wears glasses at school. But today she is wearing contact lenses for the party.",
                text: "Sarah [1] wears [2] at school. But [3] she is wearing contact [4] for the [5].",
                answers: ["usually", "glasses", "today", "lenses", "party"]
            },
            {
                title: "Text 4",
                audio: "My birthday is in October. I usually have a party on Saturday at 7:00 PM.",
                text: "My [1] is in [2]. I usually [3] a party on [4] at [5] 7:00 PM.",
                answers: ["birthday", "October", "have", "Saturday", "at"]
            },
            {
                title: "Text 5",
                audio: "He is a famous digital influencer. He has many followers. He is recording a new story right now.",
                text: "He is a [1] digital [2]. He has many [3]. He is [4] a new [5] right now.",
                answers: ["famous", "influencer", "followers", "recording", "story"]
            },
            {
                title: "Text 6",
                audio: "I use internet slang like LOL and OMG. I am chatting with my friends on WhatsApp.",
                text: "I use [1] slang like [2] and [3]. I am [4] with my [5] on WhatsApp.",
                answers: ["internet", "LOL", "OMG", "chatting", "friends"]
            },
            {
                title: "Text 7",
                audio: "I am offline on the weekend. I usually go to the park to play soccer.",
                text: "I am [1] on the [2]. I [3] go to the [4] to play [5].",
                answers: ["offline", "weekend", "usually", "park", "soccer"]
            },
            {
                title: "Text 8",
                audio: "Please don't share fake news. You should block spam accounts on your profile.",
                text: "Please don't [1] [2] news. You should [3] [4] accounts on your [5].",
                answers: ["share", "fake", "block", "spam", "profile"]
            },
            {
                title: "Text 9",
                audio: "We must find a solution together. I am going to talk to a person I trust. Help is important.",
                text: "We must find a [1] together. I am [2] to [3] to a person I [4]. Help is [5].",
                answers: ["solution", "going", "talk", "trust", "important"]
            },
            {
                title: "Text 10",
                audio: "Lucas is feeling better now. He is meeting Sarah at the park tonight. He usually feels happy.",
                text: "Lucas is [1] better [2]. He is [3] Sarah at the [4] tonight. He [5] feels happy.",
                answers: ["feeling", "now", "meeting", "park", "usually"]
            }
        ]
    }
});