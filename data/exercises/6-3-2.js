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
 * GRADE 6, BIMESTER 3, CHAPTER 6
 * BATCH 1: TYPES 1 TO 5 (40 items each)
 */

window.initExercise({
    id: "6-3-6",
    grade: "6th Grade",
    bimester: "3",
    chapter: "6",
    title: "Daily Routines, Time, and Frequency",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES (40 ITEMS) ---
        1: [
            { words: ["up", "wake", "I", "at", "6:00 AM"], correct: "I wake up at 6:00 AM" },
            { words: ["Sundays", "gets", "up", "She", "late", "on"], correct: "She gets up late on Sundays" },
            { words: ["breakfast", "We", "together", "have"], correct: "We have breakfast together" },
            { words: ["goes", "to", "He", "school", "bus", "by"], correct: "He goes to school by bus" },
            { words: ["study", "They", "English"], correct: "They study English" },
            { words: ["lunch", "have", "I", "at", "12:00"], correct: "I have lunch at 12:00" },
            { words: ["school", "After", "go", "I", "home"], correct: "After school, I go home" },
            { words: ["her", "does", "She", "homework", "room", "in", "her"], correct: "She does her homework in her room" },
            { words: ["watch", "We", "TV", "night", "at"], correct: "We watch TV at night" },
            { words: ["soccer", "plays", "He"], correct: "He plays soccer" },
            { words: ["listen", "I", "to", "rock", "music"], correct: "I listen to rock music" },
            { words: ["the", "use", "you", "Do", "computer"], correct: "Do you use the computer?" },
            { words: ["dinner", "have", "We", "at", "7 PM"], correct: "We have dinner at 7 PM" },
            { words: ["book", "reads", "She", "a", "bed", "in"], correct: "She reads a book in bed" },
            { words: ["sleep", "I", "early"], correct: "I sleep early" },
            { words: ["his", "brushes", "He", "teeth", "a", "day", "twice"], correct: "He brushes his teeth twice a day" },
            { words: ["take", "I", "shower", "a", "morning", "the", "in"], correct: "I take a shower in the morning" },
            { words: ["my", "help", "I", "mom"], correct: "I help my mom" },
            { words: ["gym", "have", "I", "Monday", "on"], correct: "I have gym on Monday" },
            { words: ["Tuesday", "after", "is", "Monday"], correct: "Tuesday is after Monday" },
            { words: ["eat", "We", "pizza", "Wednesday", "on"], correct: "We eat pizza on Wednesday" },
            { words: ["study", "I", "history", "Thursday", "on"], correct: "I study history on Thursday" },
            { words: ["favorite", "Friday", "day", "my", "is"], correct: "Friday is my favorite day" },
            { words: ["play", "I", "Saturday", "on"], correct: "I play on Saturday" },
            { words: ["Sunday", "relax", "We", "on"], correct: "We relax on Sunday" },
            { words: ["the", "love", "I", "weekend"], correct: "I love the weekend" },
            { words: ["always", "brush", "I", "teeth", "my"], correct: "I always brush my teeth" },
            { words: ["usually", "walks", "She", "school", "to"], correct: "She usually walks to school" },
            { words: ["often", "We", "eat", "pasta"], correct: "We often eat pasta" },
            { words: ["sometimes", "plays", "He", "games"], correct: "He sometimes plays games" },
            { words: ["drink", "rarely", "I", "soda"], correct: "I rarely drink soda" },
            { words: ["arrive", "never", "They", "late"], correct: "They never arrive late" },
            { words: ["study", "I", "day", "every"], correct: "I study every day" },
            { words: ["swim", "I", "a", "week", "once"], correct: "I swim once a week" },
            { words: ["time", "What", "it", "is"], correct: "What time is it?" },
            { words: ["2", "is", "It", "o'clock"], correct: "It is 2 o'clock" },
            { words: ["often", "How", "you", "do", "read"], correct: "How often do you read?" },
            { words: ["always", "is", "She", "punctual"], correct: "She is always punctual" },
            { words: ["busy", "a", "have", "I", "life"], correct: "I have a busy life" },
            { words: ["half", "is", "It", "past", "three"], correct: "It is half past three" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES (40 ITEMS) ---
        2: [
            { lines: ["What time is it?", "It is half past four.", "I have piano class at 5 PM.", "You should get ready to go!"], order: [0, 1, 2, 3] },
            { lines: ["How often do you clean your room?", "I usually clean it on Saturdays.", "What about your brother?", "He never cleans his room!"], order: [0, 1, 2, 3] },
            { lines: ["What time do you wake up?", "I always wake up at 6:00 AM.", "That is very early!", "Yes, I like the morning."], order: [0, 1, 2, 3] },
            { lines: ["Do you have classes on Sunday?", "No, I don't.", "What do you do on Sundays?", "I usually relax and watch TV."], order: [0, 1, 2, 3] },
            { lines: ["Why is Mrs. Canales here so early?", "She is always punctual.", "Does she ever arrive late?", "No, she is never late for class."], order: [0, 1, 2, 3] },
            { lines: ["What do you do after school?", "I go home and do my homework.", "Do you watch TV?", "Only after I finish my studies."], order: [0, 1, 2, 3] },
            { lines: ["How often do you play soccer?", "I play twice a week.", "Do you play on Mondays?", "No, I play on Tuesdays and Thursdays."], order: [0, 1, 2, 3] },
            { lines: ["I have a very busy life.", "What do you do every day?", "I go to school, study, and play sports.", "Wow, you really are busy!"], order: [0, 1, 2, 3] },
            { lines: ["What time does your dad cook dinner?", "He usually cooks at 7 o'clock.", "Do you help him at home?", "Yes, I sometimes help in the kitchen."], order: [0, 1, 2, 3] },
            { lines: ["Does she read comics?", "Yes, she reads a book or a comic in bed.", "How often does she read?", "She reads every night before sleep."], order: [0, 1, 2, 3] },
            { lines: ["What is your favorite day?", "Friday is my favorite day.", "Why do you love Friday?", "Because the weekend starts!"], order: [0, 1, 2, 3] },
            { lines: ["Do you take a shower in the morning?", "No, I take a shower at night.", "I always take a shower before I go to school.", "I prefer to sleep a little more."], order: [0, 1, 2, 3] },
            { lines: ["When do you have gym?", "I have gym on Monday.", "Do you like sports?", "Yes, I play volleyball and soccer."], order: [0, 1, 2, 3] },
            { lines: ["Do you eat pizza often?", "Yes, we eat pizza on Wednesdays.", "I rarely eat pizza.", "Really? It is my favorite food."], order: [0, 1, 2, 3] },
            { lines: ["How does he go to school?", "He goes to school by bus.", "Does he ever walk to school?", "Sometimes, when the weather is good."], order: [0, 1, 2, 3] },
            { lines: ["I usually study on weekdays.", "Do you study on the weekend?", "No, I only play video games on weekends.", "It is good to have time to relax."], order: [0, 1, 2, 3] },
            { lines: ["What time do you go to bed?", "I usually go to bed at 10:00 PM.", "Does your sister sleep early too?", "No, she sometimes sleeps at midnight."], order: [0, 1, 2, 3] },
            { lines: ["How often do you brush your teeth?", "I brush my teeth every day.", "That is a very good habit.", "I brush them after breakfast and dinner."], order: [0, 1, 2, 3] },
            { lines: ["I love listening to music.", "When do you listen to it?", "I always listen to music on the bus.", "I use my headphones every morning."], order: [0, 1, 2, 3] },
            { lines: ["Does your family have dinner together?", "Yes, we always have dinner at 8 PM.", "What do you usually eat?", "We often eat pasta and vegetables."], order: [0, 1, 2, 3] },
            { lines: ["Does your brother use the computer?", "Yes, he uses it to study.", "How often does he use it?", "He uses it every day."], order: [0, 1, 2, 3] },
            { lines: ["When do you play video games?", "I play on Saturday afternoons.", "Do you play alone?", "No, I usually play with my friends."], order: [0, 1, 2, 3] },
            { lines: ["Are you tired?", "Yes, I have a very busy schedule.", "You should rest on Sunday.", "I will sleep until late."], order: [0, 1, 2, 3] },
            { lines: ["Is she ever late?", "No, she is always punctual.", "How does she do it?", "She always wakes up early."], order: [0, 1, 2, 3] },
            { lines: ["What time is lunch at your school?", "We have lunch at half past twelve.", "Is the food good?", "It is okay, but I prefer my mom's cooking."], order: [0, 1, 2, 3] },
            { lines: ["What do you do on Thursday?", "I study history on Thursday.", "Is history difficult?", "Sometimes, but I find it interesting."], order: [0, 1, 2, 3] },
            { lines: ["How often do you go to the park?", "I go three times a year.", "That is very rarely!", "Yes, I prefer staying home."], order: [0, 1, 2, 3] },
            { lines: ["Do you get up early on weekends?", "No, I get up late on Sundays.", "What time?", "Around 10 o'clock."], order: [0, 1, 2, 3] },
            { lines: ["Do you drink soda?", "I rarely drink soda.", "What do you usually drink?", "I usually drink water or juice."], order: [0, 1, 2, 3] },
            { lines: ["Where does she do her homework?", "She does homework in her room.", "Is her room quiet?", "Yes, she needs a quiet place to study."], order: [0, 1, 2, 3] },
            { lines: ["Do you help at home?", "Yes, I wash the dishes.", "How often do you do that?", "I do it every day after dinner."], order: [0, 1, 2, 3] },
            { lines: ["Do they listen to rock music?", "No, they never listen to rock.", "What do they listen to?", "They usually listen to pop music."], order: [0, 1, 2, 3] },
            { lines: ["What time do you wake up?", "I always wake up at 7:00 AM.", "Do you take a shower right away?", "Yes, it wakes me up."], order: [0, 1, 2, 3] },
            { lines: ["How often do you swim?", "I swim once a week.", "Is the water cold?", "Sometimes, but I love swimming."], order: [0, 1, 2, 3] },
            { lines: ["Does he watch TV at night?", "Yes, he watches movies.", "Does he stay up late?", "Rarely, he usually sleeps early."], order: [0, 1, 2, 3] },
            { lines: ["What time is your English class?", "It is at 9 o'clock on Tuesdays.", "Are you ever late?", "No, I am always punctual."], order: [0, 1, 2, 3] },
            { lines: ["I have a lot of free time.", "You don't have a busy life?", "No, I only study in the morning.", "You are very lucky."], order: [0, 1, 2, 3] },
            { lines: ["Do you play soccer on Monday?", "No, I play on Wednesday.", "Who do you play with?", "I play with my school friends."], order: [0, 1, 2, 3] },
            { lines: ["What time does your mom go to work?", "She leaves at half past eight.", "Does she drive?", "Yes, she usually drives her car."], order: [0, 1, 2, 3] },
            { lines: ["Do you read every night?", "Yes, reading is my favorite hobby.", "What do you read?", "I usually read adventure books."], order: [0, 1, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS (40 ITEMS) ---
        3: [
            { q: "Do you wake up at 6:00 AM?", options: ["Yes, I do.", "Yes, I am.", "Yes, I does.", "Yes, I wake."], a: "Yes, I do." },
            { q: "Is she always punctual?", options: ["Yes, she is.", "Yes, she does.", "Yes, is she.", "Yes, she always."], a: "Yes, she is." },
            { q: "Does he go to school by bus?", options: ["Yes, he does.", "Yes, he do.", "Yes, he go.", "Yes, he is."], a: "Yes, he does." },
            { q: "Do they play video games on Sundays?", options: ["No, they don't.", "No, they doesn't.", "No, they aren't.", "No, they not play."], a: "No, they don't." },
            { q: "Are you usually late?", options: ["No, I am not.", "No, I don't.", "No, I aren't.", "No, I am never."], a: "No, I am not." },
            { q: "Does she do her homework in her room?", options: ["Yes, she does.", "Yes, she do.", "Yes, she is.", "Yes, she does homework."], a: "Yes, she does." },
            { q: "Do we have gym on Monday?", options: ["Yes, we do.", "Yes, we have.", "Yes, we are.", "Yes, we does."], a: "Yes, we do." },
            { q: "Is it half past three?", options: ["Yes, it is.", "Yes, it does.", "Yes, it has.", "Yes, it time."], a: "Yes, it is." },
            { q: "Does Albert study on weekends?", options: ["No, he doesn't.", "No, he don't.", "No, he isn't.", "No, he don't study."], a: "No, he doesn't." },
            { q: "Are they always busy?", options: ["Yes, they are.", "Yes, they do.", "Yes, they busy.", "Yes, they is."], a: "Yes, they are." },
            { q: "Do you watch TV at night?", options: ["Yes, I do.", "Yes, I watch.", "Yes, I am.", "Yes, I does."], a: "Yes, I do." },
            { q: "Does your mom cook dinner?", options: ["Yes, she does.", "Yes, she cook.", "Yes, she do.", "Yes, she is."], a: "Yes, she does." },
            { q: "Is the English class on Tuesday?", options: ["Yes, it is.", "Yes, it does.", "Yes, it class.", "Yes, it on Tuesday."], a: "Yes, it is." },
            { q: "Do you listen to music on the bus?", options: ["Yes, I do.", "Yes, I listen.", "Yes, I am.", "Yes, I does."], a: "Yes, I do." },
            { q: "Does he brush his teeth twice a day?", options: ["Yes, he does.", "Yes, he brush.", "Yes, he do.", "Yes, he is."], a: "Yes, he does." },
            { q: "Are we having pizza today?", options: ["Yes, we are.", "Yes, we do.", "Yes, we having.", "Yes, we have."], a: "Yes, we are." },
            { q: "Does she rarely drink soda?", options: ["Yes, she does.", "Yes, she rarely.", "Yes, she do.", "Yes, she is."], a: "Yes, she does." },
            { q: "Do they relax on the weekend?", options: ["Yes, they do.", "Yes, they relax.", "Yes, they are.", "Yes, they does."], a: "Yes, they do." },
            { q: "Is Friday your favorite day?", options: ["Yes, it is.", "Yes, it does.", "Yes, it favorite.", "Yes, it has."], a: "Yes, it is." },
            { q: "Do you take a shower in the morning?", options: ["Yes, I do.", "Yes, I take.", "Yes, I am.", "Yes, I does."], a: "Yes, I do." },
            { q: "What day comes after Monday?", options: ["Tuesday.", "Sunday.", "Friday.", "Thursday."], a: "Tuesday." },
            { q: "If you do something 100% of the time, you...", options: ["Always do it.", "Never do it.", "Rarely do it.", "Sometimes do it."], a: "Always do it." },
            { q: "What time is \"half past two\"?", options: ["2:30.", "2:00.", "3:30.", "1:30."], a: "2:30." },
            { q: "If someone is never late, they are...", options: ["Punctual.", "Lazy.", "Tired.", "Busy."], a: "Punctual." },
            { q: "Which days make up the weekend?", options: ["Saturday and Sunday.", "Monday and Tuesday.", "Thursday and Friday.", "Wednesday and Thursday."], a: "Saturday and Sunday." },
            { q: "What do you usually do in a bed?", options: ["Sleep.", "Cook dinner.", "Travel.", "Take a shower."], a: "Sleep." },
            { q: "If you do something 0% of the time, you...", options: ["Never do it.", "Always do it.", "Often do it.", "Usually do it."], a: "Never do it." },
            { q: "The first meal of the day is called...", options: ["Breakfast.", "Lunch.", "Dinner.", "Snack."], a: "Breakfast." },
            { q: "What do you do with a book?", options: ["Read it.", "Watch it.", "Listen to it.", "Eat it."], a: "Read it." },
            { q: "Where do students go to study?", options: ["School.", "The kitchen.", "The bathroom.", "The bus."], a: "School." },
            { q: "If you eat a meal at 12:00 PM (noon), it is...", options: ["Lunch.", "Breakfast.", "Dinner.", "Homework."], a: "Lunch." },
            { q: "What day comes before Friday?", options: ["Thursday.", "Wednesday.", "Saturday.", "Monday."], a: "Thursday." },
            { q: "What do you use to watch movies?", options: ["A TV.", "A book.", "A toothbrush.", "A shower."], a: "A TV." },
            { q: "If you have many things to do every day, you have a...", options: ["Busy life.", "Free time.", "Punctual life.", "Lazy day."], a: "Busy life." },
            { q: "How often do you usually brush your teeth?", options: ["Every day.", "Once a year.", "Never.", "Rarely."], a: "Every day." },
            { q: "Often means you do something...", options: ["Many times.", "Zero times.", "Only one time in your life.", "100% of the time without fail."], a: "Many times." },
            { q: "If you do something two times a month, you do it...", options: ["Twice a month.", "Once a week.", "Every day.", "Never."], a: "Twice a month." },
            { q: "The days from Monday to Friday are called...", options: ["Weekdays.", "Weekends.", "Hidays.", "Months."], a: "Weekdays." },
            { q: "To clean your body, you usually...", options: ["Take a shower.", "Watch TV.", "Play video games.", "Eat pizza."], a: "Take a shower." },
            { q: "If a clock says 5:00, it is...", options: ["5 o'clock.", "Half past five.", "5:30.", "Half past four."], a: "5 o'clock." }
        ],

        // --- TYPE 4: FIND MEANING (40 ITEMS) ---
        4: [
            { sent: "I **wake up** early every day.", word: "wake up", options: ["Durmo", "Acordar", "Estudo", "Como"], a: "Acordar", def: "To stop sleeping and open your eyes." },
            { sent: "She usually **gets up** at 7 AM.", word: "gets up", options: ["Senta-se", "Levantar-se", "Deita-se", "Come"], a: "Levantar-se", def: "To rise from bed after sleeping." },
            { sent: "We **have breakfast** in the kitchen.", word: "have breakfast", options: ["Jantamos", "Tomar café da manhã", "Almoçamos", "Estudamos"], a: "Tomar café da manhã", def: "To eat the first meal of the day." },
            { sent: "I **go to school** by bus.", word: "go to school", options: ["Ir para casa", "Ir para a escola", "Ir para o trabalho", "Ir para a cama"], a: "Ir para a escola", def: "To travel to the place where you study." },
            { sent: "They **study** English together.", word: "study", options: ["Brincam", "Estudar", "Cantam", "Dançam"], a: "Estudar", def: "To devote time to acquiring knowledge." },
            { sent: "I **have lunch** at noon.", word: "have lunch", options: ["Almoçar", "Jantar", "Tomar café", "Dormir"], a: "Almoçar", def: "To eat a meal in the middle of the day." },
            { sent: "After class, I **go home**.", word: "go home", options: ["Ir para a escola", "Ir para casa", "Ir dormir", "Ir trabalhar"], a: "Ir para casa", def: "To return to the place where you live." },
            { sent: "She **does homework** in her room.", word: "does homework", options: ["Assiste TV", "Fazer lição de casa", "Joga videogame", "Ouve música"], a: "Fazer lição de casa", def: "To do schoolwork at home." },
            { sent: "We **watch TV** at night.", word: "watch TV", options: ["Lemos livros", "Assistir TV", "Ouvimos música", "Brincamos"], a: "Assistir TV", def: "To look at television programs." },
            { sent: "He likes to **play** soccer.", word: "play", options: ["Estudar", "Jogar / Brincar / Tocar", "Trabalhar", "Dormir"], a: "Jogar / Brincar / Tocar", def: "To engage in games or sports." },
            { sent: "I **listen to music** on the bus.", word: "listen to music", options: ["Assisto filmes", "Ouvir música", "Leio livros", "Jogo"], a: "Ouvir música", def: "To pay attention to sounds or songs." },
            { sent: "Do you **use the computer**?", word: "use the computer", options: ["Usar o computador", "Assistir TV", "Ouvir rádio", "Ler livros"], a: "Usar o computador", def: "To operate a computer or browse the web." },
            { sent: "We **have dinner** at 7 PM.", word: "have dinner", options: ["Almoçamos", "Jantar", "Tomamos café", "Lanchamos"], a: "Jantar", def: "To eat the main meal of the evening." },
            { sent: "She **reads a book** before sleep.", word: "reads a book", options: ["Ouve música", "Ler um livro", "Assiste TV", "Joga videogame"], a: "Ler um livro", def: "To look at and comprehend written words in a book." },
            { sent: "I **go to bed** early.", word: "go to bed", options: ["Ir para a escola", "Ir para a cama / Dormir", "Ir para casa", "Levantar-se"], a: "Ir para a cama / Dormir", def: "To get into bed to rest or sleep." },
            { sent: "I **brush my teeth** every day.", word: "brush my teeth", options: ["Lavo o rosto", "Escovar os dentes", "Penteio o cabelo", "Tomo banho"], a: "Escovar os dentes", def: "To clean your teeth with a toothbrush." },
            { sent: "I **take a shower** in the morning.", word: "take a shower", options: ["Tomo café", "Tomar banho", "Acordo", "Estudo"], a: "Tomar banho", def: "To wash your body standing under a spray of water." },
            { sent: "I **help at home** on weekends.", word: "help at home", options: ["Brinco na rua", "Ajudar em casa", "Assisto TV", "Durmo muito"], a: "Ajudar em casa", def: "To assist with household chores." },
            { sent: "School starts on **Monday**.", word: "Monday", options: ["Terça-feira", "Segunda-feira", "Sexta-feira", "Domingo"], a: "Segunda-feira", def: "The first day of the working week." },
            { sent: "I have piano on **Tuesday**.", word: "Tuesday", options: ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira"], a: "Terça-feira", def: "The second day of the working week." },
            { sent: "We eat pizza on **Wednesday**.", word: "Wednesday", options: ["Terça-feira", "Quarta-feira", "Quinta-feira", "Sábado"], a: "Quarta-feira", def: "The third day of the working week." },
            { sent: "We play soccer on **Thursday**.", word: "Thursday", options: ["Terça-feira", "Quinta-feira", "Sexta-feira", "Domingo"], a: "Quinta-feira", def: "The fourth day of the working week." },
            { sent: "**Friday** is my favorite day.", word: "Friday", options: ["Quinta-feira", "Sexta-feira", "Sábado", "Segunda-feira"], a: "Sexta-feira", def: "The fifth day of the working week." },
            { sent: "I relax on **Saturday**.", word: "Saturday", options: ["Sexta-feira", "Sábado", "Domingo", "Quarta-feira"], a: "Sábado", def: "The sixth day of the week." },
            { sent: "We visit grandma on **Sunday**.", word: "Sunday", options: ["Sábado", "Domingo", "Segunda-feira", "Sexta-feira"], a: "Domingo", def: "The seventh day of the week." },
            { sent: "I study every day of the **week**.", word: "week", options: ["Fim de semana", "Semana", "Mês", "Ano"], a: "Semana", def: "A period of seven days." },
            { sent: "I love the **weekend**.", word: "weekend", options: ["Semana", "Fim de semana", "Feriado", "Dia de semana"], a: "Fim de semana", def: "Saturday and Sunday." },
            { sent: "I go to school on **weekdays**.", word: "weekdays", options: ["Fim de semana", "Dias de semana", "Feriados", "Domingos"], a: "Dias de semana", def: "The days from Monday to Friday." },
            { sent: "I **always** brush my teeth.", word: "always", options: ["Às vezes", "Sempre (100%)", "Nunca", "Raramente"], a: "Sempre (100%)", def: "At all times; on all occasions." },
            { sent: "She **usually** walks to school.", word: "usually", options: ["Nunca", "Geralmente / Usualmente (~90%)", "Sempre", "Raramente"], a: "Geralmente / Usualmente (~90%)", def: "Under normal conditions." },
            { sent: "We **often** eat pizza.", word: "often", options: ["Raramente", "Frequentemente (~70%)", "Nunca", "Às vezes"], a: "Frequentemente (~70%)", def: "Many times." },
            { sent: "He **sometimes** plays tennis.", word: "sometimes", options: ["Sempre", "Às vezes (~50%)", "Nunca", "Frequentemente"], a: "Às vezes (~50%)", def: "Occasionally; not all the time." },
            { sent: "I **rarely** watch horror movies.", word: "rarely", options: ["Sempre", "Raramente (~10%)", "Frequentemente", "Às vezes"], a: "Raramente (~10%)", def: "Not often; infrequently." },
            { sent: "They **never** arrive late.", word: "never", options: ["Sempre", "Nunca (0%)", "Às vezes", "Geralmente"], a: "Nunca (0%)", def: "At no time; not ever." },
            { sent: "I study English **every day**.", word: "every day", options: ["Uma vez por semana", "Todo dia / Todos os dias", "Nunca", "Aos fins de semana"], a: "Todo dia / Todos os dias", def: "Each day; daily." },
            { sent: "I swim **once** a week.", word: "once", options: ["Todo dia", "Uma vez por semana", "Duas vezes por mês", "Nunca"], a: "Uma vez por semana", def: "One time in a week." },
            { sent: "We visit them **twice** a month.", word: "twice", options: ["Todo mês", "Duas vezes por mês", "Uma vez por semana", "Três vezes por ano"], a: "Duas vezes por mês", def: "Two times in a month." },
            { sent: "We travel **three times** a year.", word: "three times", options: ["Uma vez por ano", "Três vezes por ano", "Todo mês", "Nunca"], a: "Três vezes por ano", def: "Occurring on three occasions within a year." },
            { sent: "It's 2 **o'clock**.", word: "o'clock", options: ["E meia", "Em ponto (hora exata)", "Faltam 15 para as", "Da manhã"], a: "Em ponto (hora exata)", def: "Used to state the exact hour." },
            { sent: "It's **half past** three.", word: "half past", options: ["Em ponto", "... e meia (30 minutos)", "Da noite", "Uma hora"], a: "... e meia (30 minutos)", def: "Used to state 30 minutes past the hour." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 ITEMS) ---
        5: [
            { sent: "I **plays** soccer on Saturdays.", correct: "play" },
            { sent: "She **walk usually** to school.", correct: "usually walks" },
            { sent: "We have gym **in** Monday.", correct: "on" },
            { sent: "I wake up **on** 7 o'clock.", correct: "at" },
            { sent: "He **always is** happy.", correct: "is always" },
            { sent: "They **doesn't** like pizza.", correct: "don't" },
            { sent: "Does she **plays** soccer?", correct: "play" },
            { sent: "He **brush** his teeth every night.", correct: "brushes" },
            { sent: "She **study** English in the afternoon.", correct: "studies" },
            { sent: "It is half **pass** two.", correct: "past" },
            { sent: "He **don't** have piano classes today.", correct: "doesn't" },
            { sent: "I go to bed **in** night.", correct: "at" },
            { sent: "They **never are** late for school.", correct: "are never" },
            { sent: "What time **do** he wake up?", correct: "does" },
            { sent: "I **rare** drink soda.", correct: "rarely" },
            { sent: "She **go** home at 4 PM.", correct: "goes" },
            { sent: "We **eats** lunch together.", correct: "eat" },
            { sent: "Do you **likes** video games?", correct: "like" },
            { sent: "He **watch** TV on weekends.", correct: "watches" },
            { sent: "I take a shower **at** the morning.", correct: "in" },
            { sent: "My dad **cook** dinner.", correct: "cooks" },
            { sent: "They **often plays** volleyball.", correct: "often play" },
            { sent: "**Do** he brush his teeth?", correct: "Does" },
            { sent: "I visit my grandma **once week**.", correct: "once a week" },
            { sent: "We travel three **time** a year.", correct: "times" },
            { sent: "She **do** her homework on Fridays.", correct: "does" },
            { sent: "**What time** often do you read?", correct: "How often" },
            { sent: "**Do** he have breakfast at 8:00 AM?", correct: "Does" },
            { sent: "I **am always** wake up early.", correct: "always" },
            { sent: "We play sports **at** Monday.", correct: "on" },
            { sent: "The bus **arrive** at 7:30 AM.", correct: "arrives" },
            { sent: "She is **a always** punctual student.", correct: "always a" },
            { sent: "I **listen** music on my phone.", correct: "listen to" },
            { sent: "He **wash** his face in the morning.", correct: "washes" },
            { sent: "**Are** you play basketball?", correct: "Do" },
            { sent: "They relax **in** Sundays.", correct: "on" },
            { sent: "I go to school **with** bus.", correct: "by" },
            { sent: "She **read** comics every day.", correct: "reads" },
            { sent: "What do you **does** in your free time?", correct: "do" },
            { sent: "It is 5 **o'clocks**.", correct: "o'clock" }
        ],

        
        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Group 1
            { pairs: [{a: "What does your brother look like?", b: "He is tall and thin."}, {a: "Does she have blue eyes?", b: "No, she has brown eyes."}, {a: "What do you do on weekends?", b: "I play soccer and relax."}, {a: "How often do you read books?", b: "I read books every day."}, {a: "What time is it?", b: "It is half past four."}] },
            // Group 2
            { pairs: [{a: "Does he play the guitar?", b: "Yes, he plays it very well."}, {a: "What color is her hair?", b: "She has long blond hair."}, {a: "Do you like video games?", b: "Yes, I love playing them."}, {a: "What time do you wake up?", b: "I usually wake up at 6:00 AM."}, {a: "Is your grandfather old?", b: "Yes, he is 75 years old."}] },
            // Group 3
            { pairs: [{a: "Do they watch TV at night?", b: "Yes, they always watch movies."}, {a: "What does she do in her free time?", b: "She likes to draw and paint."}, {a: "Is the baby chubby?", b: "Yes, he is fat and very cute."}, {a: "Do you take a shower in the morning?", b: "No, I take it at night."}, {a: "How often do you go to the park?", b: "I go once a week."}] },
            // Group 4
            { pairs: [{a: "Does your mom cook dinner?", b: "Yes, she cooks every evening."}, {a: "What day comes after Monday?", b: "Tuesday comes after Monday."}, {a: "Do you have a busy life?", b: "Yes, I have school and hobbies."}, {a: "Are you ever late for class?", b: "No, I am always punctual."}, {a: "What does the monster look like?", b: "It is big and ugly."}] },
            // Group 5
            { pairs: [{a: "Do you study on Sundays?", b: "No, I never study on Sundays."}, {a: "What time does the movie start?", b: "It starts at 8 o'clock."}, {a: "Does she have straight hair?", b: "No, she has curly red hair."}, {a: "Where do you live?", b: "I live in an apartment."}, {a: "Do you play basketball?", b: "Yes, I play on Thursdays."}] },
            // Group 6
            { pairs: [{a: "How often do you swim?", b: "I swim twice a month."}, {a: "What is your favorite hobby?", b: "My favorite hobby is music."}, {a: "Does he wear glasses?", b: "Yes, he wears them to read."}, {a: "Are your legs tired?", b: "Yes, I ran a lot today."}, {a: "What time do you have lunch?", b: "I have lunch at noon."}] },
            // Group 7
            { pairs: [{a: "Do you use the computer for homework?", b: "Yes, I always use it."}, {a: "What color are the cat's eyes?", b: "The cat has green eyes."}, {a: "Does she help at home?", b: "Yes, she cleans her room."}, {a: "What do you do on Friday?", b: "I go to the cinema."}, {a: "Is he handsome?", b: "Yes, he is a very handsome actor."}] },
            // Group 8
            { pairs: [{a: "Does the rabbit have short ears?", b: "No, it has very long ears."}, {a: "How often do you brush your teeth?", b: "I brush them three times a day."}, {a: "Do they travel in the summer?", b: "Yes, they go to the beach."}, {a: "What time do you go to bed?", b: "I usually go to bed at 10 PM."}, {a: "Who do you play video games with?", b: "I play with my friends."}] },
            // Group 9
            { pairs: [{a: "Does she have freckles?", b: "Yes, she has freckles on her face."}, {a: "What is your favorite day?", b: "Friday is my favorite day."}, {a: "Do you listen to music on the bus?", b: "Yes, I listen to rock music."}, {a: "Is your dad bald?", b: "No, he has short gray hair."}, {a: "Do we have gym today?", b: "No, we have gym on Wednesdays."}] },
            // Group 10
            { pairs: [{a: "What do you do on weekdays?", b: "I go to school and study."}, {a: "Does he like sports?", b: "Yes, he plays soccer and volleyball."}, {a: "How often do you visit your grandma?", b: "We visit her on Sundays."}, {a: "Is she young or old?", b: "She is young; she is 10 years old."}, {a: "Do you eat pizza?", b: "Yes, we often eat pizza for dinner."}] },
            // Group 11
            { pairs: [{a: "He is a character", b: "for my comic book."}, {a: "He looks strong and", b: "has big muscles."}, {a: "He likes to play", b: "video games and read comics."}, {a: "I study on weekdays and", b: "I only play on weekends."}, {a: "She is short and", b: "has long blonde hair."}] },
            // Group 12
            { pairs: [{a: "Sophia is thin and", b: "has curly red hair."}, {a: "She has freckles", b: "on her face."}, {a: "She doesn't like math,", b: "but she likes to draw."}, {a: "My sister loves music and", b: "she plays the guitar every day."}, {a: "My brothers don't play instruments,", b: "they like video games."}] },
            // Group 13
            { pairs: [{a: "He is tall and thin and", b: "he has curly brown hair."}, {a: "Exercise is good", b: "for your body."}, {a: "Wear a hat", b: "on your head."}, {a: "Use your finger", b: "to point."}, {a: "Put shoes on", b: "your feet."}] },
            // Group 14
            { pairs: [{a: "I always wake up", b: "at six o'clock."}, {a: "She gets up late", b: "on Sundays."}, {a: "We have breakfast", b: "together in the morning."}, {a: "He goes to school", b: "by bus every day."}, {a: "They study English", b: "together in the afternoon."}] },
            // Group 15
            { pairs: [{a: "I have lunch", b: "at twelve o'clock."}, {a: "After school, I", b: "go home to rest."}, {a: "She does homework", b: "in her room."}, {a: "We watch TV", b: "at night with my family."}, {a: "He plays soccer", b: "on the weekend."}] },
            // Group 16
            { pairs: [{a: "I listen to rock music", b: "on the bus."}, {a: "Do you use", b: "the computer for homework?"}, {a: "We have dinner", b: "at seven PM."}, {a: "She reads a book", b: "in bed before sleeping."}, {a: "He brushes his teeth", b: "twice a day."}] },
            // Group 17
            { pairs: [{a: "I take a shower", b: "in the morning."}, {a: "I help my mom", b: "on the weekends."}, {a: "I have gym class", b: "on Monday morning."}, {a: "Tuesday is the day", b: "after Monday."}, {a: "We eat pizza", b: "on Wednesday night."}] },
            // Group 18
            { pairs: [{a: "I study history", b: "on Thursday afternoon."}, {a: "Friday is my", b: "favorite day of the week."}, {a: "I play with my friends", b: "on Saturday."}, {a: "We relax and rest", b: "on Sunday."}, {a: "I love the", b: "weekend very much."}] },
            // Group 19
            { pairs: [{a: "I always brush", b: "my teeth after meals."}, {a: "She usually walks", b: "to school with her friend."}, {a: "We often eat", b: "pasta for dinner."}, {a: "He sometimes plays", b: "video games at night."}, {a: "I rarely drink", b: "soda because it is sweet."}] },
            // Group 20
            { pairs: [{a: "They never arrive", b: "late for their classes."}, {a: "I study English", b: "every day to learn more."}, {a: "I swim in the pool", b: "once a week."}, {a: "We visit our grandma", b: "twice a month."}, {a: "We travel to the beach", b: "three times a year."}] },
            // Group 21
            { pairs: [{a: "Look like", b: "Parecer (fisicamente)"}, {a: "Have / Has", b: "Ter"}, {a: "Do / Does", b: "Fazer (verbo auxiliar)"}, {a: "Like", b: "Gostar"}, {a: "Play", b: "Jogar / Brincar / Tocar"}] },
            // Group 22
            { pairs: [{a: "Watch", b: "Assistir"}, {a: "Listen", b: "Ouvir"}, {a: "Read", b: "Ler"}, {a: "Live", b: "Morar / Viver"}, {a: "Go", b: "Ir"}] },
            // Group 23
            { pairs: [{a: "Study", b: "Estudar"}, {a: "Work", b: "Trabalhar"}, {a: "Sing", b: "Cantar"}, {a: "Dance", b: "Dançar"}, {a: "Cook", b: "Cozinhar"}] },
            // Group 24
            { pairs: [{a: "Travel", b: "Viajar"}, {a: "Body", b: "Corpo"}, {a: "Head", b: "Cabeça"}, {a: "Hair", b: "Cabelo"}, {a: "Face", b: "Rosto"}] },
            // Group 25
            { pairs: [{a: "Eye(s)", b: "Olho(s)"}, {a: "Ear(s)", b: "Orelha(s)"}, {a: "Nose", b: "Nariz"}, {a: "Mouth", b: "Boca"}, {a: "Tooth / Teeth", b: "Dente / Dentes"}] },
            // Group 26
            { pairs: [{a: "Neck", b: "Pescoço"}, {a: "Shoulder", b: "Ombro"}, {a: "Arm", b: "Braço"}, {a: "Hand", b: "Mão"}, {a: "Finger", b: "Dedo da mão"}] },
            // Group 27
            { pairs: [{a: "Leg", b: "Perna"}, {a: "Foot / Feet", b: "Pé / Pés"}, {a: "Toe", b: "Dedo do pé"}, {a: "Tall", b: "Alto(a)"}, {a: "Short", b: "Baixo(a) / Curto(a)"}] },
            // Group 28
            { pairs: [{a: "Young", b: "Jovem"}, {a: "Old", b: "Velho(a) / Idoso(a)"}, {a: "Big", b: "Grande"}, {a: "Small", b: "Pequeno(a)"}, {a: "Long", b: "Longo(a) / Comprido(a)"}] },
            // Group 29
            { pairs: [{a: "Beautiful", b: "Bonito(a) / Lindo(a)"}, {a: "Handsome", b: "Bonito (para homens)"}, {a: "Pretty", b: "Bonita / Linda"}, {a: "Ugly", b: "Feio(a)"}, {a: "Slim / Thin", b: "Magro(a) / Fino(a)"}] },
            // Group 30
            { pairs: [{a: "Fat / Chubby", b: "Gordo(a) / Gordinho(a)"}, {a: "Heavy", b: "Pesado(a)"}, {a: "Light", b: "Leve"}, {a: "Straight", b: "Liso (cabelo)"}, {a: "Wavy", b: "Ondulado"}] },
            // Group 31
            { pairs: [{a: "Straight", b: "Cabelo liso, sem curvas."}, {a: "Wavy", b: "Cabelo ondulado, com ondas."}, {a: "Curly", b: "Cabelo cacheado, com espirais."}, {a: "Bald", b: "Uma pessoa careca, sem cabelo."}, {a: "Blond", b: "Cabelo de cor loira."}] },
            // Group 32
            { pairs: [{a: "Red (Hair)", b: "Cabelo de cor ruiva."}, {a: "Gray", b: "Cabelo grisalho (de pessoa mais velha)."}, {a: "Black", b: "Cor preta (cabelo ou olhos)."}, {a: "Brown", b: "Cor castanha (cabelo ou olhos)."}, {a: "Hazel", b: "Cor de avelã (para olhos)."}] },
            // Group 33
            { pairs: [{a: "Hobby", b: "Atividade que você faz por diversão no tempo livre."}, {a: "Soccer", b: "Esporte jogado com os pés e uma bola (futebol)."}, {a: "Basketball", b: "Esporte onde você joga a bola na cesta (basquete)."}, {a: "Volleyball", b: "Esporte onde você joga a bola por cima de uma rede (vôlei)."}, {a: "Video games", b: "Jogos eletrônicos jogados na TV ou computador."}] },
            // Group 34
            { pairs: [{a: "Movies", b: "Filmes que você assiste na TV ou no cinema."}, {a: "Music", b: "Música que você ouve para se divertir."}, {a: "Comics", b: "Revistas em quadrinhos com super-heróis."}, {a: "Guitar", b: "Instrumento musical de cordas (violão/guitarra)."}, {a: "Drawing", b: "A arte de fazer desenhos no papel."}] },
            // Group 35
            { pairs: [{a: "Brush teeth", b: "Limpar os dentes com uma escova."}, {a: "Help at home", b: "Ajudar a mãe ou o pai a limpar a casa."}, {a: "Play", b: "Brincar com amigos ou jogar um esporte."}, {a: "Watch", b: "Assistir a um programa na televisão."}, {a: "Listen", b: "Ouvir música ou alguém falando."}] },
            // Group 36
            { pairs: [{a: "Read", b: "Ler palavras em um livro ou revista."}, {a: "Study", b: "Estudar para aprender coisas novas."}, {a: "Work", b: "Trabalhar (o que os adultos fazem)."}, {a: "Sing", b: "Cantar uma música com a voz."}, {a: "Dance", b: "Dançar movendo o corpo com a música."}] },
            // Group 37
            { pairs: [{a: "Cook", b: "Preparar a comida na cozinha."}, {a: "Travel", b: "Fazer uma viagem para outra cidade ou país."}, {a: "Once a week", b: "Fazer algo apenas um dia na semana."}, {a: "Twice a month", b: "Fazer algo duas vezes no mês."}, {a: "Every day", b: "Fazer algo de segunda a domingo, sem faltar."}] },
            // Group 38
            { pairs: [{a: "O'clock", b: "Usado para dizer a hora exata (em ponto)."}, {a: "Half past", b: "Usado para dizer que passou trinta minutos (e meia)."}, {a: "Eye", b: "A parte do rosto que usamos para ver as coisas."}, {a: "Ear", b: "A parte da cabeça que usamos para escutar."}, {a: "Nose", b: "A parte do rosto que usamos para cheirar."}] },
            // Group 39
            { pairs: [{a: "Mouth", b: "A parte do rosto por onde comemos e falamos."}, {a: "Leg", b: "A parte longa do corpo que usamos para andar (perna)."}, {a: "Foot", b: "A parte do corpo que toca o chão (pé)."}, {a: "Hand", b: "A parte do corpo no fim do braço com cinco dedos."}, {a: "Finger", b: "Os dedinhos que ficam na nossa mão."}] },
            // Group 40
            { pairs: [{a: "Toe", b: "Os dedinhos que ficam no nosso pé."}, {a: "Shoulder", b: "A parte que liga o braço ao pescoço (ombro)."}, {a: "Big", b: "Algo de tamanho grande, como um elefante."}, {a: "Small", b: "Algo de tamanho pequeno, como uma formiga."}, {a: "Heavy", b: "Algo que pesa muito (pesado)."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 ITEMS) ---
        7: [
            { q: "What do you do on weekends?", options: ["I play soccer.", "She is tall.", "Because I like it.", "In the kitchen."], a: "I play soccer." },
            { q: "What does she look like?", options: ["She is short and pretty.", "She plays the guitar.", "She reads comics.", "She goes to school."], a: "She is short and pretty." },
            { q: "What color are his eyes?", options: ["He has green eyes.", "He is tall.", "He plays video games.", "He wakes up at 6 AM."], a: "He has green eyes." },
            { q: "Who is this character?", options: ["He is Titan, a superhero.", "He plays soccer.", "He has blue eyes.", "He wakes up early."], a: "He is Titan, a superhero." },
            { q: "When do you play video games?", options: ["I play on weekends.", "I am a student.", "She is pretty.", "He has big muscles."], a: "I play on weekends." },
            { q: "What time is it?", options: ["It is half past four.", "It is my brother.", "It is a comic book.", "It is green."], a: "It is half past four." },
            { q: "How often do you clean your room?", options: ["I usually clean it on Saturdays.", "I have a blue car.", "He is very tall.", "She has long hair."], a: "I usually clean it on Saturdays." },
            { q: "Where do you play volleyball?", options: ["We play on the beach.", "We play at 5 PM.", "We play on Sunday.", "We are tall."], a: "We play on the beach." },
            { q: "Why is she so punctual?", options: ["Because she always gets up early.", "Because she has blond hair.", "Because she is short.", "Because she plays the piano."], a: "Because she always gets up early." },
            { q: "What does your mom do?", options: ["She works in an office.", "She is very pretty.", "She has brown eyes.", "She wakes up at 6 AM."], a: "She works in an office." },
            { q: "Who cooks dinner in your house?", options: ["My dad cooks dinner.", "The dinner is at 7 PM.", "We have dinner.", "He is handsome."], a: "My dad cooks dinner." },
            { q: "When do you have gym class?", options: ["I have gym on Monday.", "I have blue eyes.", "I am a student.", "He is bald."], a: "I have gym on Monday." },
            { q: "How often does he brush his teeth?", options: ["He brushes his teeth twice a day.", "He has white teeth.", "He is young.", "He plays soccer."], a: "He brushes his teeth twice a day." },
            { q: "What does he do in his free time?", options: ["He likes to read comics.", "He is tall and thin.", "He has curly hair.", "He is ten years old."], a: "He likes to read comics." },
            { q: "What time do you go to bed?", options: ["I go to bed at 10 PM.", "I go to bed on Monday.", "I go to bed in the kitchen.", "I am tired."], a: "I go to bed at 10 PM." },
            { q: "Which sport do you play?", options: ["I play basketball.", "I have short hair.", "I am short.", "I watch TV."], a: "I play basketball." },
            { q: "What is your favorite day?", options: ["Friday is my favorite day.", "I like the weekend.", "I play guitar.", "She is beautiful."], a: "Friday is my favorite day." },
            { q: "How often do you swim?", options: ["I swim once a week.", "I swim at 8 AM.", "I am a swimmer.", "He swims well."], a: "I swim once a week." },
            { q: "Where do you do your homework?", options: ["I do it in my room.", "I do it at 7 PM.", "I do it on Tuesday.", "I do it twice a week."], a: "I do it in my room." },
            { q: "What does your grandfather look like?", options: ["He is old and bald.", "He reads the newspaper.", "He lives in a house.", "He walks in the park."], a: "He is old and bald." },
            { q: "Who is the new neighbor?", options: ["She is a young girl.", "She lives next door.", "She plays the piano.", "She is at home."], a: "She is a young girl." },
            { q: "When do you take a shower?", options: ["I take a shower in the morning.", "I use soap.", "The water is hot.", "I have short hair."], a: "I take a shower in the morning." },
            { q: "What time does the movie start?", options: ["It starts at 8 o'clock.", "It is an action movie.", "I like movies.", "It is on TV."], a: "It starts at 8 o'clock." },
            { q: "How often does she visit her grandma?", options: ["She visits her twice a month.", "She visits her in the city.", "She visits her by bus.", "She loves her grandma."], a: "She visits her twice a month." },
            { q: "Why do you like Fridays?", options: ["Because the weekend is starting!", "Because I have gym.", "Because it is a weekday.", "Because I study a lot."], a: "Because the weekend is starting!" },
            { q: "What kind of hair does she have?", options: ["She has long wavy hair.", "She is very tall.", "She has blue eyes.", "She likes music."], a: "She has long wavy hair." },
            { q: "How often do they travel?", options: ["They travel three times a year.", "They travel to the beach.", "They travel by airplane.", "They love to travel."], a: "They travel three times a year." },
            { q: "What do you use your fingers for?", options: ["I use my finger to point.", "I use my eyes to see.", "I use my ears to hear.", "I use my nose to smell."], a: "I use my finger to point." },
            { q: "Who plays the guitar in your family?", options: ["My sister plays the guitar.", "The guitar is acoustic.", "I play the piano.", "We listen to music."], a: "My sister plays the guitar." },
            { q: "When does the shop open?", options: ["The shop opens on Saturdays.", "The shop sells comics.", "The shop is big.", "I go to the shop."], a: "The shop opens on Saturdays." },
            { q: "What time does he have lunch?", options: ["He has lunch at noon.", "He eats a sandwich.", "He has lunch at school.", "He is hungry."], a: "He has lunch at noon." },
            { q: "Why are your legs tired?", options: ["Because I ran all morning.", "Because they are long.", "Because I have feet.", "Because I wear shoes."], a: "Because I ran all morning." },
            { q: "What do you do on Wednesday night?", options: ["We eat pizza on Wednesday.", "Wednesday is a weekday.", "It is half past eight.", "I like cheese pizza."], a: "We eat pizza on Wednesday." },
            { q: "How often do you read books?", options: ["I rarely read books.", "I read in my bedroom.", "I like comic books.", "The book is heavy."], a: "I rarely read books." },
            { q: "Who helps you with your homework?", options: ["My mom helps me.", "The homework is hard.", "I do my homework.", "I study math."], a: "My mom helps me." },
            { q: "What does the baby look like?", options: ["He is chubby and has blue eyes.", "He sleeps a lot.", "He drinks milk.", "He plays with toys."], a: "He is chubby and has blue eyes." },
            { q: "When do you brush your teeth?", options: ["I brush my teeth after meals.", "I use a toothbrush.", "My teeth are white.", "I have a mouth."], a: "I brush my teeth after meals." },
            { q: "How often does she arrive late?", options: ["She never arrives late.", "She goes by bus.", "She is punctual.", "She goes to school."], a: "She never arrives late." },
            { q: "What color is your dad's hair?", options: ["My dad has gray hair.", "My dad is tall.", "My dad works hard.", "My dad is old."], a: "My dad has gray hair." },
            { q: "Where do you live?", options: ["I live in an apartment.", "I live with my parents.", "I live in the morning.", "I live every day."], a: "I live in an apartment." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 ITEMS) ---
        8: [
            { sent: "My grandfather is very **young**; he is 85 years old.", wrong: "young", options: ["old", "tall", "short", "chubby"], a: "old" },
            { sent: "I use my **eyes** to hear the music.", wrong: "eyes", options: ["ears", "nose", "mouth", "hands"], a: "ears" },
            { sent: "The basketball player is very **short**.", wrong: "short", options: ["tall", "slim", "fat", "ugly"], a: "tall" },
            { sent: "She has a beautiful smile on her **shoulder**.", wrong: "shoulder", options: ["face", "arm", "leg", "neck"], a: "face" },
            { sent: "He brushes his **hair** with toothpaste every morning.", wrong: "hair", options: ["teeth", "toes", "fingers", "ears"], a: "teeth" },
            { sent: "A rabbit has very long **eyes**.", wrong: "eyes", options: ["ears", "noses", "hands", "feet"], a: "ears" },
            { sent: "I wear shoes on my **hands**.", wrong: "hands", options: ["feet", "head", "arms", "neck"], a: "feet" },
            { sent: "The sky is a beautiful **green** today.", wrong: "green", options: ["blue", "black", "brown", "hazel"], a: "blue" },
            { sent: "My hair is very **short**; it touches my back.", wrong: "short", options: ["long", "bald", "straight", "curly"], a: "long" },
            { sent: "The baby is very **slim** because he eats a lot.", wrong: "slim", options: ["chubby", "thin", "tall", "ugly"], a: "chubby" },
            { sent: "The monster in the movie is very **handsome**.", wrong: "handsome", options: ["ugly", "pretty", "beautiful", "light"], a: "ugly" },
            { sent: "I play soccer with my **head**.", wrong: "head", options: ["feet", "arms", "hands", "fingers"], a: "feet" },
            { sent: "She has **straight** hair, like springs or spirals.", wrong: "straight", options: ["curly", "wavy", "bald", "blond"], a: "curly" },
            { sent: "He is completely **hairy** on top of his head.", wrong: "hairy", options: ["bald", "blond", "gray", "brown"], a: "bald" },
            { sent: "I smell the flower with my **ear**.", wrong: "ear", options: ["nose", "eye", "mouth", "tooth"], a: "nose" },
            { sent: "My uncle lifts weights, so his **legs** are very strong for carrying things.", wrong: "legs", options: ["arms", "toes", "heads", "faces"], a: "arms" },
            { sent: "The feather is very **heavy**.", wrong: "heavy", options: ["light", "big", "fat", "tall"], a: "light" },
            { sent: "An elephant is a very **small** animal.", wrong: "small", options: ["big", "short", "thin", "young"], a: "big" },
            { sent: "She has **black** hair, the color of a lemon.", wrong: "black", options: ["blond", "red", "gray", "brown"], a: "blond" },
            { sent: "I watch movies on the **radio**.", wrong: "radio", options: ["TV", "book", "guitar", "piano"], a: "TV" },
            { sent: "I **read** a song on the radio.", wrong: "read", options: ["listen to", "watch", "play", "cook"], a: "listen to" },
            { sent: "We **cook** video games on the weekend.", wrong: "cook", options: ["play", "read", "listen", "study"], a: "play" },
            { sent: "She **sings** a book before going to sleep.", wrong: "sings", options: ["reads", "watches", "plays", "dances"], a: "reads" },
            { sent: "He **dances** the guitar in his free time.", wrong: "dances", options: ["plays", "sings", "cooks", "travels"], a: "plays" },
            { sent: "I **travel** my homework after school.", wrong: "travel", options: ["do", "play", "make", "read"], a: "do" },
            { sent: "My mom **listens** dinner for the family.", wrong: "listens", options: ["cooks", "reads", "watches", "plays"], a: "cooks" },
            { sent: "We **study** to the beach in the summer.", wrong: "study", options: ["travel", "read", "listen", "cook"], a: "travel" },
            { sent: "The sun sets and the moon comes out at **noon**.", wrong: "noon", options: ["night", "morning", "afternoon", "day"], a: "night" },
            { sent: "Saturday and Sunday are the **weekdays**.", wrong: "weekdays", options: ["weekend", "month", "year", "morning"], a: "weekend" },
            { sent: "I wake up early in the **evening**.", wrong: "evening", options: ["morning", "night", "afternoon", "weekend"], a: "morning" },
            { sent: "I **never** eat breakfast, so I eat it 100% of the time.", wrong: "never", options: ["always", "sometimes", "rarely", "often"], a: "always" },
            { sent: "He **always** arrives late; he is never on time (0% on time).", wrong: "always", options: ["never", "sometimes", "often", "usually"], a: "never" },
            { sent: "We go to school **once** a week, from Monday to Friday.", wrong: "once", options: ["five times", "twice", "rarely", "never"], a: "five times" },
            { sent: "I **sleep** up at 6:00 AM to get ready for school.", wrong: "sleep", options: ["wake", "get", "stand", "go"], a: "wake" },
            { sent: "I take a **book** in the bathroom every morning.", wrong: "book", options: ["shower", "homework", "game", "piano"], a: "shower" },
            { sent: "She has five **arms** on each hand.", wrong: "arms", options: ["fingers", "toes", "legs", "heads"], a: "fingers" },
            { sent: "A soccer player runs a lot, so his **arms** are tired.", wrong: "arms", options: ["legs", "hands", "heads", "ears"], a: "legs" },
            { sent: "Wrap a scarf around your **shoulder** when it's cold.", wrong: "shoulder", options: ["neck", "arm", "leg", "foot"], a: "neck" },
            { sent: "She puts lipstick on her **nose**.", wrong: "nose", options: ["mouth", "eye", "ear", "hair"], a: "mouth" },
            { sent: "He points at the map with his **toe**.", wrong: "toe", options: ["finger", "head", "nose", "ear"], a: "finger" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 ITEMS) ---
        9: [
            { audio: "What does he look like?", options: ["He is tall and thin.", "He plays soccer.", "He likes to read.", "He wakes up early."], a: "He is tall and thin." },
            { audio: "What color is her hair?", options: ["She has long blond hair.", "She has blue eyes.", "She is very young.", "She plays the guitar."], a: "She has long blond hair." },
            { audio: "Does he have big muscles?", options: ["Yes, he is very strong.", "Yes, he is short.", "Yes, he likes math.", "Yes, he reads comics."], a: "Yes, he is very strong." },
            { audio: "What do you do on weekends?", options: ["I play video games and relax.", "I have brown eyes.", "She is very pretty.", "I am tall."], a: "I play video games and relax." },
            { audio: "How often do you study English?", options: ["I study English every day.", "I study in my room.", "I like English class.", "My teacher is nice."], a: "I study English every day." },
            { audio: "What time is it?", options: ["It is half past four.", "It is my brother.", "It is on Monday.", "It is very tall."], a: "It is half past four." },
            { audio: "Does she play the piano?", options: ["Yes, she plays very well.", "Yes, she is tall.", "No, she doesn't like spiders.", "No, she has red hair."], a: "Yes, she plays very well." },
            { audio: "What do you use to see?", options: ["I use my eyes to see.", "I use my ears to hear.", "I use my nose to smell.", "I use my hands to touch."], a: "I use my eyes to see." },
            { audio: "Is your grandfather old?", options: ["Yes, he is 80 years old.", "Yes, he is a baby.", "Yes, he is young.", "Yes, he plays video games."], a: "Yes, he is 80 years old." },
            { audio: "Do you like to read comic books?", options: ["Yes, I love superhero comics.", "Yes, I have short hair.", "No, I am tall.", "No, he plays soccer."], a: "Yes, I love superhero comics." },
            { audio: "What time do you usually wake up?", options: ["I wake up at 6:00 AM.", "I go to bed at night.", "I have lunch at noon.", "I play on the weekend."], a: "I wake up at 6:00 AM." },
            { audio: "Does the baby have curly hair?", options: ["Yes, his hair is very curly.", "Yes, he is chubby.", "No, he has blue eyes.", "No, he doesn't play sports."], a: "Yes, his hair is very curly." },
            { audio: "Where do you play basketball?", options: ["I play at the school gym.", "I play twice a week.", "I play with a ball.", "I am tall."], a: "I play at the school gym." },
            { audio: "How often do you go to the movies?", options: ["I go once a month.", "I like action movies.", "I watch TV at home.", "It is 8 o'clock."], a: "I go once a month." },
            { audio: "Does your dad cook dinner?", options: ["Yes, he cooks every night.", "Yes, he is handsome.", "No, he doesn't read books.", "No, he has gray hair."], a: "Yes, he cooks every night." },
            { audio: "Are you a punctual person?", options: ["Yes, I am never late.", "Yes, I am always late.", "No, I am early.", "No, I am a student."], a: "Yes, I am never late." },
            { audio: "What do you do first in the morning?", options: ["I take a shower and have breakfast.", "I go to sleep and dream.", "I watch movies and relax.", "I play soccer and dance."], a: "I take a shower and have breakfast." },
            { audio: "Does she have freckles on her face?", options: ["Yes, she has freckles on her nose.", "Yes, she has long arms.", "No, she doesn't sing.", "No, she is short."], a: "Yes, she has freckles on her nose." },
            { audio: "Is your sister very tall?", options: ["No, she is very short.", "No, she has blond hair.", "Yes, she is young.", "Yes, she plays volleyball."], a: "No, she is very short." },
            { audio: "What do you use to hear music?", options: ["I use my ears.", "I use my mouth.", "I use my nose.", "I use my feet."], a: "I use my ears." },
            { audio: "Do you have a busy life during the week?", options: ["Yes, I have school and many hobbies.", "Yes, I am very lazy.", "No, I am tall and thin.", "No, I have brown eyes."], a: "Yes, I have school and many hobbies." },
            { audio: "What time do you usually have lunch?", options: ["I have lunch at 12 o'clock.", "I have lunch in the kitchen.", "I have lunch with my family.", "I have lunch on Sunday."], a: "I have lunch at 12 o'clock." },
            { audio: "Does he have a big beard?", options: ["Yes, he has a big gray beard.", "Yes, he is bald.", "No, he doesn't play guitar.", "No, he is short."], a: "Yes, he has a big gray beard." },
            { audio: "How often does she brush her teeth?", options: ["She brushes them twice a day.", "She brushes them in the bathroom.", "She has white teeth.", "She is young."], a: "She brushes them twice a day." },
            { audio: "What is your favorite day of the week?", options: ["Friday is my favorite day.", "I like the weekend.", "Monday is a weekday.", "I play soccer."], a: "Friday is my favorite day." },
            { audio: "Do you travel a lot in the summer?", options: ["Yes, we always go to the beach.", "Yes, we travel by plane.", "No, we don't have a car.", "No, we are tall."], a: "Yes, we always go to the beach." },
            { audio: "What color are your eyes?", options: ["I have hazel eyes.", "I have curly hair.", "I am slim.", "I play piano."], a: "I have hazel eyes." },
            { audio: "Does she like spiders or bugs?", options: ["No, she hates them.", "No, she has red hair.", "Yes, she is pretty.", "Yes, she reads books."], a: "No, she hates them." },
            { audio: "What do you use your fingers for?", options: ["I use them to point and touch things.", "I use them to walk and run.", "I use them to see and look.", "I use them to hear and listen."], a: "I use them to point and touch things." },
            { audio: "Is the baby chubby and cute?", options: ["Yes, he is very fat and cute.", "Yes, he is tall and strong.", "No, he is old.", "No, he plays basketball."], a: "Yes, he is very fat and cute." },
            { audio: "How often do you visit your grandma?", options: ["We visit her once a week.", "We visit her in her house.", "We visit her by bus.", "She is old."], a: "We visit her once a week." },
            { audio: "What do you do on Monday morning?", options: ["I go to school and study.", "I have brown hair.", "I am a student.", "I like pizza."], a: "I go to school and study." },
            { audio: "Does he sing well in the choir?", options: ["No, he is terrible at singing!", "No, he doesn't have a guitar.", "Yes, he is handsome.", "Yes, he listens to music."], a: "No, he is terrible at singing!" },
            { audio: "What time does the English class start?", options: ["It starts at 8 AM.", "It is English class.", "The teacher is young.", "I am punctual."], a: "It starts at 8 AM." },
            { audio: "Do you help your mom at home?", options: ["Yes, I help her wash the dishes.", "Yes, she cooks dinner.", "No, she works in an office.", "No, I have a brother."], a: "Yes, I help her wash the dishes." },
            { audio: "Is your uncle completely bald?", options: ["Yes, he has no hair at all.", "Yes, he has curly hair.", "No, he is tall.", "No, he plays sports."], a: "Yes, he has no hair at all." },
            { audio: "What does the ugly monster look like?", options: ["It is very big and scary.", "It is very handsome.", "It plays video games.", "It likes to read."], a: "It is very big and scary." },
            { audio: "How often do you watch TV at night?", options: ["I sometimes watch TV before bed.", "I watch TV in the living room.", "I like action movies.", "I have a big TV."], a: "I sometimes watch TV before bed." },
            { audio: "Do you have piano lessons today?", options: ["No, my lessons are on Tuesday.", "No, I play the guitar.", "Yes, I like music.", "Yes, she sings."], a: "No, my lessons are on Tuesday." },
            { audio: "What do you use to chew your food?", options: ["I use my teeth to chew.", "I use my nose to chew.", "I use my ears to chew.", "I use my hands to chew."], a: "I use my teeth to chew." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 ITEMS) ---
        10: [
            { audio: "He is tall and has big muscles.", sent: "He is ___ and has big ___.", blanks: ["tall", "muscles"] },
            { audio: "She has long blonde hair and blue eyes.", sent: "She has long ___ hair and ___ eyes.", blanks: ["blonde", "blue"] },
            { audio: "I like to play video games on weekends.", sent: "I like to ___ video games on ___.", blanks: ["play", "weekends"] },
            { audio: "What does your new neighbor look like?", sent: "What ___ your new neighbor ___ like?", blanks: ["does", "look"] },
            { audio: "He brushes his teeth twice a day.", sent: "He ___ his teeth ___ a day.", blanks: ["brushes", "twice"] },
            { audio: "I usually wake up at six o'clock.", sent: "I ___ wake up ___ six o'clock.", blanks: ["usually", "at"] },
            { audio: "My mom cooks dinner every evening.", sent: "My mom ___ dinner every ___.", blanks: ["cooks", "evening"] },
            { audio: "We play soccer on Saturdays.", sent: "We ___ soccer ___ Saturdays.", blanks: ["play", "on"] },
            { audio: "She is short, but she is very pretty.", sent: "She is ___, but she is very ___.", blanks: ["short", "pretty"] },
            { audio: "He never arrives late for class.", sent: "He ___ arrives ___ for class.", blanks: ["never", "late"] },
            { audio: "I listen to music on the bus.", sent: "I ___ to music ___ the bus.", blanks: ["listen", "on"] },
            { audio: "The rabbit has long ears and a small nose.", sent: "The rabbit has long ___ and a small ___.", blanks: ["ears", "nose"] },
            { audio: "She doesn't like spiders because they are ugly.", sent: "She ___ like spiders because they are ___.", blanks: ["doesn't", "ugly"] },
            { audio: "What time is it? It is half past three.", sent: "What ___ is it? It is ___ past three.", blanks: ["time", "half"] },
            { audio: "My grandfather is old and bald.", sent: "My grandfather is ___ and ___.", blanks: ["old", "bald"] },
            { audio: "I have gym class on Monday morning.", sent: "I have ___ class ___ Monday morning.", blanks: ["gym", "on"] },
            { audio: "Use your fingers to point and touch.", sent: "Use your ___ to point and ___.", blanks: ["fingers", "touch"] },
            { audio: "She reads comics in her free time.", sent: "She ___ comics in her ___ time.", blanks: ["reads", "free"] },
            { audio: "He is a handsome actor with brown eyes.", sent: "He is a ___ actor with ___ eyes.", blanks: ["handsome", "brown"] },
            { audio: "We travel to the beach once a year.", sent: "We ___ to the beach ___ a year.", blanks: ["travel", "once"] },
            { audio: "She has curly red hair and freckles.", sent: "She has ___ red hair and ___.", blanks: ["curly", "freckles"] },
            { audio: "I take a shower and have breakfast.", sent: "I take a ___ and have ___.", blanks: ["shower", "breakfast"] },
            { audio: "Does he play the guitar or the piano?", sent: "___ he play the guitar or the ___?", blanks: ["Does", "piano"] },
            { audio: "My legs are tired after the basketball game.", sent: "My ___ are tired after the ___ game.", blanks: ["legs", "basketball"] },
            { audio: "We often eat pizza on Wednesday night.", sent: "We ___ eat pizza ___ Wednesday night.", blanks: ["often", "on"] },
            { audio: "The baby is chubby and very cute.", sent: "The baby is ___ and very ___.", blanks: ["chubby", "cute"] },
            { audio: "I do my homework before I watch TV.", sent: "I do my ___ before I ___ TV.", blanks: ["homework", "watch"] },
            { audio: "She works in an office on weekdays.", sent: "She ___ in an office on ___.", blanks: ["works", "weekdays"] },
            { audio: "Touch your shoulders and your neck.", sent: "Touch your ___ and your ___.", blanks: ["shoulders", "neck"] },
            { audio: "He has straight hair, not wavy hair.", sent: "He has ___ hair, not ___ hair.", blanks: ["straight", "wavy"] },
            { audio: "What do you do? I am a student.", sent: "What ___ you do? I am a ___.", blanks: ["do", "student"] },
            { audio: "I rarely drink soda because I prefer water.", sent: "I ___ drink soda because I ___ water.", blanks: ["rarely", "prefer"] },
            { audio: "My brother is very strong and athletic.", sent: "My brother is very ___ and ___.", blanks: ["strong", "athletic"] },
            { audio: "Open your mouth to brush your teeth.", sent: "Open your ___ to brush your ___.", blanks: ["mouth", "teeth"] },
            { audio: "Friday is my favorite day of the week.", sent: "___ is my favorite day of the ___.", blanks: ["Friday", "week"] },
            { audio: "She likes to draw and paint pictures.", sent: "She likes to ___ and ___ pictures.", blanks: ["draw", "paint"] },
            { audio: "I always go to bed early.", sent: "I ___ go to ___ early.", blanks: ["always", "bed"] },
            { audio: "They live in a big house.", sent: "They ___ in a ___ house.", blanks: ["live", "big"] },
            { audio: "How often do you visit your grandma?", sent: "How ___ do you ___ your grandma?", blanks: ["often", "visit"] },
            { audio: "Put shoes on your feet before you go out.", sent: "Put shoes on your ___ before you go ___.", blanks: ["feet", "out"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE (10 ITEMS) ---
        11: [
            {
                title: "Dialogue 1: Physical Appearance",
                lines: [
                    { speaker: "Albert", text: "What does your brother ___, Celine?", options: ["look", "looking", "looks"], a: "look" },
                    { speaker: "Celine", text: "He ___ tall and thin.", options: ["is", "has", "does"], a: "is" },
                    { speaker: "Albert", text: "Does he ___ blue eyes like you?", options: ["have", "has", "is"], a: "have" },
                    { speaker: "Celine", text: "No, he ___ brown eyes. And he has curly hair.", options: ["has", "have", "is"], a: "has" },
                    { speaker: "Albert", text: "He sounds very handsome!", options: ["hair", "eyes", "nose"], a: "hair" } // The original text had "curly (hair / head / ear)". Merging to fit the 5 options logic.
                ]
            },
            {
                title: "Dialogue 1: Physical Appearance (Revised for exactly 5 blanks)",
                lines: [
                    { speaker: "Albert", text: "What does your brother ___, Celine?", options: ["look", "looking", "looks"], a: "look" },
                    { speaker: "Celine", text: "He ___ tall and thin.", options: ["is", "has", "does"], a: "is" },
                    { speaker: "Albert", text: "Does he ___ blue eyes like you?", options: ["have", "has", "is"], a: "have" },
                    { speaker: "Celine", text: "No, he ___ brown eyes.", options: ["has", "have", "is"], a: "has" },
                    { speaker: "Celine", text: "And he has curly ___.", options: ["hair", "head", "ear"], a: "hair" }
                ]
            },
            {
                title: "Dialogue 2: Hobbies and Free Time",
                lines: [
                    { speaker: "Celine", text: "What do you ___ in your free time, Albert?", options: ["do", "does", "doing"], a: "do" },
                    { speaker: "Albert", text: "I ___ video games and read comics.", options: ["play", "plays", "playing"], a: "play" },
                    { speaker: "Celine", text: "___ your sister play video games too?", options: ["Does", "Do", "Is"], a: "Does" },
                    { speaker: "Albert", text: "No, she ___. She prefers music.", options: ["doesn't", "don't", "isn't"], a: "doesn't" },
                    { speaker: "Celine", text: "That's cool. I love to ___ books on the weekend.", options: ["read", "reads", "reading"], a: "read" }
                ]
            },
            {
                title: "Dialogue 3: Morning Routine",
                lines: [
                    { speaker: "Albert", text: "What time ___ you wake up for school?", options: ["do", "does", "is"], a: "do" },
                    { speaker: "Celine", text: "I ___ up early, at 6:30 AM.", options: ["wake", "wakes", "waking"], a: "wake" },
                    { speaker: "Albert", text: "Do you take a ___ in the morning?", options: ["shower", "tooth", "face"], a: "shower" },
                    { speaker: "Celine", text: "Yes. I ___ take a shower and brush my teeth.", options: ["always", "never", "rarely"], a: "always" },
                    { speaker: "Albert", text: "Then we both have ___ before we take the bus.", options: ["breakfast", "dinner", "bed"], a: "breakfast" }
                ]
            },
            {
                title: "Dialogue 4: Adverbs of Frequency",
                lines: [
                    { speaker: "Celine", text: "How ___ do you study English?", options: ["often", "time", "much"], a: "often" },
                    { speaker: "Albert", text: "I study ___. I love English!", options: ["every day", "always", "never"], a: "every day" },
                    { speaker: "Celine", text: "Does your friend Lucas study every day ___?", options: ["too", "two", "to"], a: "too" },
                    { speaker: "Albert", text: "No, he ___ studies on weekends.", options: ["usually", "rarely", "never"], a: "rarely" },
                    { speaker: "Celine", text: "He prefers to ___ soccer on Saturdays, right?", options: ["play", "cook", "wash"], a: "play" }
                ]
            },
            {
                title: "Dialogue 5: Body Parts",
                lines: [
                    { speaker: "Albert", text: "Ouch! My ___ hurts.", options: ["leg", "hair", "eye"], a: "leg" },
                    { speaker: "Albert", text: "Yes, we played basketball. Now my ___ are tired too.", options: ["arms", "tooth", "nose"], a: "arms" },
                    { speaker: "Celine", text: "You should wash your ___ and relax.", options: ["face", "shoulder", "finger"], a: "face" },
                    { speaker: "Albert", text: "Okay. Can you give me a hand? Use your ___ to untie my shoelaces.", options: ["fingers", "toes", "teeth"], a: "fingers" },
                    { speaker: "Celine", text: "Sure. Then put your shoes on your ___ and let's go home.", options: ["feet", "hands", "ears"], a: "feet" }
                ]
            },
            {
                title: "Dialogue 6: Days and Time",
                lines: [
                    { speaker: "Albert", text: "What ___ is it, Celine?", options: ["time", "day", "often"], a: "time" },
                    { speaker: "Celine", text: "It is half ___ three.", options: ["past", "pass", "to"], a: "past" },
                    { speaker: "Albert", text: "Oh no! I have piano class on ___ at 4:00 PM.", options: ["Fridays", "Friday's", "Friday"], a: "Fridays" },
                    { speaker: "Celine", text: "You are never ___. You are always in a hurry!", options: ["punctual", "early", "late"], a: "punctual" },
                    { speaker: "Albert", text: "I know, I ___ arrive on time! I need to run.", options: ["always", "rarely", "never"], a: "rarely" }
                ]
            },
            {
                title: "Dialogue 7: Family Chores",
                lines: [
                    { speaker: "Celine", text: "Do you ___ your mom at home?", options: ["help", "helps", "helping"], a: "help" },
                    { speaker: "Albert", text: "Yes, I ___. I clean my room once a week.", options: ["do", "does", "am"], a: "do" },
                    { speaker: "Celine", text: "How often do you clean it?", options: ["once", "one", "two"], a: "once" }, // Fixed to fit 5 blanks
                    { speaker: "Celine", text: "Does your dad ___ dinner?", options: ["cook", "cooks", "cooking"], a: "cook" },
                    { speaker: "Albert", text: "Yes, he ___ very well. We have pizza on Wednesdays.", options: ["cooks", "cook", "cooking"], a: "cooks" }
                ]
            },
            {
                title: "Dialogue 8: Describing a Baby",
                lines: [
                    { speaker: "Celine", text: "___ the baby sleep all day?", options: ["Does", "Do", "Is"], a: "Does" },
                    { speaker: "Albert", text: "No, he ___. He plays in the afternoon.", options: ["doesn't", "don't", "isn't"], a: "doesn't" },
                    { speaker: "Celine", text: "What color ___ his eyes?", options: ["are", "is", "do"], a: "are" },
                    { speaker: "Albert", text: "He ___ beautiful blue eyes.", options: ["has", "have", "is"], a: "has" },
                    { speaker: "Celine", text: "He is very ___ and cute!", options: ["chubby", "long", "straight"], a: "chubby" }
                ]
            },
            {
                title: "Dialogue 9: The Music Band",
                lines: [
                    { speaker: "Albert", text: "Do you ___ to music on the bus?", options: ["listen", "watch", "play"], a: "listen" },
                    { speaker: "Celine", text: "Yes, I ___ listen to pop music.", options: ["usually", "never", "rarely"], a: "usually" },
                    { speaker: "Albert", text: "My brother ___ the guitar in a band.", options: ["plays", "play", "playing"], a: "plays" },
                    { speaker: "Celine", text: "Does he ___ too?", options: ["sing", "read", "sleep"], a: "sing" },
                    { speaker: "Albert", text: "No, he ___. The band only plays instruments.", options: ["doesn't", "don't", "isn't"], a: "doesn't" }
                ]
            },
            {
                title: "Dialogue 10: After School",
                lines: [
                    { speaker: "Celine", text: "What time do you go ___ after class?", options: ["home", "school", "bed"], a: "home" },
                    { speaker: "Albert", text: "I go home at half ___ twelve.", options: ["past", "to", "o'clock"], a: "past" },
                    { speaker: "Celine", text: "Do you do your ___ in the afternoon?", options: ["homework", "shower", "dinner"], a: "homework" },
                    { speaker: "Albert", text: "Yes, I always ___ from 2 PM to 4 PM.", options: ["study", "studies", "studying"], a: "study" },
                    { speaker: "Celine", text: "After that, I ___ watch TV series.", options: ["sometimes", "never", "rarely"], a: "sometimes" }
                ]
            }
        ].slice(1, 11), // Skips the unrevised version of Dialogue 1 to keep exactly 10 items.

        // --- TYPE 12: READ AND ANSWER (10 ITEMS) ---
        12: [
            {
                title: "Text 1: My Friend Tom",
                text: "This is my friend, Tom. He is 11 years old. Tom is very tall and handsome. He has short black hair and brown eyes. He is a very energetic boy. He plays soccer every Saturday with his team. In his free time, he likes to play video games. He doesn't like to read books, but he loves comic books.",
                questions: [
                    { q: "What does Tom look like?", options: ["He is short and thin.", "He is tall and handsome.", "He is old and bald."], a: "He is tall and handsome." },
                    { q: "What kind of hair does Tom have?", options: ["Long blond hair.", "Short black hair.", "Curly red hair."], a: "Short black hair." },
                    { q: "How often does he play soccer?", options: ["Every Saturday.", "Every day.", "Once a month."], a: "Every Saturday." },
                    { q: "What does Tom do in his free time?", options: ["He cooks dinner.", "He plays video games.", "He listens to music."], a: "He plays video games." },
                    { q: "Does Tom like to read books?", options: ["Yes, he loves books.", "No, he doesn't. He likes comics.", "He only reads on Sundays."], a: "No, he doesn't. He likes comics." }
                ]
            },
            {
                title: "Text 2: Celine's Morning Routine",
                text: "Celine has a very busy life. On weekdays, she always wakes up at 6:00 AM. First, she takes a shower and brushes her teeth. Then, she puts on her uniform. She has breakfast in the kitchen with her parents. She usually eats bread and drinks milk. After breakfast, she goes to school by bus. She is never late for class.",
                questions: [
                    { q: "What time does Celine wake up?", options: ["At 7:00 AM.", "At 6:00 AM.", "At 8:00 AM."], a: "At 6:00 AM." },
                    { q: "What does she do first?", options: ["She goes to school.", "She takes a shower and brushes her teeth.", "She does her homework."], a: "She takes a shower and brushes her teeth." },
                    { q: "Where does she have breakfast?", options: ["In the bedroom.", "In the kitchen.", "On the bus."], a: "In the kitchen." },
                    { q: "How does she go to school?", options: ["She walks.", "By bus.", "By car."], a: "By bus." },
                    { q: "Is Celine ever late for class?", options: ["No, she is never late.", "Yes, she is always late.", "She is sometimes late."], a: "No, she is never late." }
                ]
            },
            {
                title: "Text 3: My Sister Sophia",
                text: "My sister's name is Sophia. She is 15 years old. She is slim and very pretty. She has long wavy hair and green eyes. She loves music. She plays the guitar and sings very well. She practices the guitar twice a week, on Tuesdays and Thursdays. Sophia doesn't play sports because she prefers art. She draws beautiful landscapes in her sketchbook.",
                questions: [
                    { q: "How old is Sophia?", options: ["She is 10.", "She is 15.", "She is 12."], a: "She is 15." },
                    { q: "What color are her eyes?", options: ["Blue.", "Green.", "Hazel."], a: "Green." },
                    { q: "How often does she practice the guitar?", options: ["Every day.", "Twice a week.", "Once a month."], a: "Twice a week." },
                    { q: "What days does she practice?", options: ["Mondays and Wednesdays.", "Tuesdays and Thursdays.", "Saturdays and Sundays."], a: "Tuesdays and Thursdays." },
                    { q: "Why doesn't Sophia play sports?", options: ["Because she is tired.", "Because she prefers art.", "Because her legs hurt."], a: "Because she prefers art." }
                ]
            },
            {
                title: "Text 4: The Gym Class",
                text: "We have gym class on Mondays and Wednesdays. Our teacher is young and very tall. In gym class, we exercise our bodies. We use our hands and arms to play basketball. Sometimes, we use our feet and legs to play soccer. I love gym class, but my legs are always tired after we run. I drink a lot of water and relax.",
                questions: [
                    { q: "When do they have gym class?", options: ["On Tuesdays and Thursdays.", "On Mondays and Wednesdays.", "Every day."], a: "On Mondays and Wednesdays." },
                    { q: "What does the teacher look like?", options: ["Young and very tall.", "Old and short.", "Fat and bald."], a: "Young and very tall." },
                    { q: "What body parts do they use to play basketball?", options: ["Feet and legs.", "Hands and arms.", "Head and neck."], a: "Hands and arms." },
                    { q: "What do they use to play soccer?", options: ["Feet and legs.", "Ears and nose.", "Shoulders and arms."], a: "Feet and legs." },
                    { q: "How do the student's legs feel after running?", options: ["Energetic.", "Tired.", "Cold."], a: "Tired." }
                ]
            },
            {
                title: "Text 5: Grandpa Joe",
                text: "My grandfather, Joe, is 70 years old. He is old, but he is very active. He is bald and wears glasses on his face. He has a big nose and a gray beard. Grandpa Joe loves to cook. Every Sunday, he cooks a big dinner for the family. He makes pasta and salad. He never watches TV; he prefers to listen to the radio.",
                questions: [
                    { q: "How old is Grandpa Joe?", options: ["60 years old.", "70 years old.", "80 years old."], a: "70 years old." },
                    { q: "What does he wear on his face?", options: ["A hat.", "Glasses.", "A scarf."], a: "Glasses." },
                    { q: "What color is his beard?", options: ["Black.", "Gray.", "Blond."], a: "Gray." },
                    { q: "How often does he cook a big dinner?", options: ["Every Sunday.", "Every day.", "Once a month."], a: "Every Sunday." },
                    { q: "Does Grandpa Joe watch TV?", options: ["Yes, he watches it every night.", "No, he never watches TV.", "He sometimes watches TV."], a: "No, he never watches TV." }
                ]
            },
            {
                title: "Text 6: Weekend Fun",
                text: "I love the weekend! On Saturdays, I wake up at 9:00 AM. I don't go to school. In the morning, I draw and paint in my room. In the afternoon, I meet my friends and we ride our bikes. On Sundays, I spend time with my family. We watch movies or TV series in the living room. I rarely study on the weekend because I need to rest my brain.",
                questions: [
                    { q: "What time does the student wake up on Saturdays?", options: ["At 6:00 AM.", "At 9:00 AM.", "At 7:30 AM."], a: "At 9:00 AM." },
                    { q: "What does the student do on Saturday morning?", options: ["Plays soccer.", "Draws and paints.", "Cooks lunch."], a: "Draws and paints." },
                    { q: "What do the student and his friends do in the afternoon?", options: ["They study.", "They ride their bikes.", "They watch TV."], a: "They ride their bikes." },
                    { q: "Who does the student spend time with on Sundays?", options: ["His friends.", "His family.", "His teacher."], a: "His family." },
                    { q: "How often does the student study on the weekend?", options: ["Always.", "Rarely.", "Usually."], a: "Rarely." }
                ]
            },
            {
                title: "Text 7: The Comic Book Monster",
                text: "Albert is drawing a monster for his comic book. The monster is huge and ugly. It has a big head, three green eyes, and a very wide mouth. It has sharp teeth and no hair; it is completely bald. The monster has four short arms and heavy feet. It fights the superhero, Titan, in the big city. The monster always loses because Titan is very strong and fast.",
                questions: [
                    { q: "What is Albert drawing?", options: ["A superhero.", "A monster.", "A robot."], a: "A monster." },
                    { q: "How many eyes does the monster have?", options: ["Two blue eyes.", "Three green eyes.", "Four brown eyes."], a: "Three green eyes." },
                    { q: "Does the monster have hair?", options: ["Yes, it has long hair.", "No, it is completely bald.", "Yes, it has curly hair."], a: "No, it is completely bald." },
                    { q: "How many arms does the monster have?", options: ["Two long arms.", "Four short arms.", "Six arms."], a: "Four short arms." },
                    { q: "Why does the monster always lose?", options: ["Because it is small.", "Because Titan is very strong and fast.", "Because it runs away."], a: "Because Titan is very strong and fast." }
                ]
            },
            {
                title: "Text 8: Luna the Cat",
                text: "I have a pet cat. Her name is Luna. Luna is small and chubby. She has beautiful white hair and big blue eyes. She has a pink nose and long whiskers. Luna has a simple routine. She sleeps on my bed all morning. In the afternoon, she plays with a small ball. She eats her food twice a day. She rarely goes outside because she is a house cat.",
                questions: [
                    { q: "What is Luna?", options: ["A dog.", "A pet cat.", "A rabbit."], a: "A pet cat." },
                    { q: "What does Luna look like?", options: ["She is small and chubby.", "She is tall and thin.", "She is big and heavy."], a: "She is small and chubby." },
                    { q: "What color are Luna's eyes?", options: ["Green.", "Blue.", "Hazel."], a: "Blue." },
                    { q: "Where does Luna sleep?", options: ["On the sofa.", "On the bed.", "In the garden."], a: "On the bed." },
                    { q: "How often does Luna eat?", options: ["Once a day.", "Twice a day.", "Three times a day."], a: "Twice a day." }
                ]
            },
            {
                title: "Text 9: A Busy Teacher",
                text: "Mr. Davis is a math teacher. He is tall and has short curly hair. He wears glasses to read his books. He has a very busy life. He goes to school every weekday. He teaches five classes a day. He usually has lunch at school at 1:00 PM. In the evening, he corrects homework and prepares the next lesson. He never plays video games because he doesn't have time.",
                questions: [
                    { q: "What does Mr. Davis do?", options: ["He is a doctor.", "He is a math teacher.", "He is a student."], a: "He is a math teacher." },
                    { q: "Why does he wear glasses?", options: ["To watch TV.", "To read his books.", "To play sports."], a: "To read his books." },
                    { q: "When does he go to school?", options: ["On weekends.", "Every weekday.", "Only on Fridays."], a: "Every weekday." },
                    { q: "What time does he usually have lunch?", options: ["At 12:00 PM.", "At 1:00 PM.", "At 2:00 PM."], a: "At 1:00 PM." },
                    { q: "Does Mr. Davis play video games?", options: ["Yes, every night.", "No, he never plays video games.", "Sometimes, on the weekend."], a: "No, he never plays video games." }
                ]
            },
            {
                title: "Text 10: Playing Volleyball",
                text: "My friends and I love volleyball. We play volleyball on the beach on Saturday afternoons. We run, jump, and use our arms and hands to hit the ball. We don't use our feet! It is a great exercise for the body. Sometimes we play for two hours. After the game, we are very tired and thirsty, so we drink water. It is our favorite hobby.",
                questions: [
                    { q: "What sport do they love?", options: ["Basketball.", "Volleyball.", "Soccer."], a: "Volleyball." },
                    { q: "When do they play?", options: ["On Monday mornings.", "On Saturday afternoons.", "On Sundays."], a: "On Saturday afternoons." },
                    { q: "What body parts do they use to hit the ball?", options: ["Feet and legs.", "Arms and hands.", "Head and neck."], a: "Arms and hands." },
                    { q: "Do they use their feet to hit the ball?", options: ["Yes, they do.", "No, they don't.", "Only sometimes."], a: "No, they don't." },
                    { q: "How do they feel after the game?", options: ["Energetic.", "Tired and thirsty.", "Cold and hungry."], a: "Tired and thirsty." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER CONTEXT (10 ITEMS) ---
        13: [
            {
                title: "Audio Script 1",
                audio: "My brother, Lucas, is 14 years old. He is very tall and thin. He has short, straight brown hair and dark brown eyes. He doesn't like to read. He loves sports! He plays basketball every day after school.",
                questions: [
                    { q: "How old is Lucas?", options: ["He is 12 years old.", "He is 14 years old.", "He is 16 years old."], a: "He is 14 years old." },
                    { q: "What does Lucas look like?", options: ["He is short and chubby.", "He is tall and thin.", "He is old and bald."], a: "He is tall and thin." },
                    { q: "What kind of hair does he have?", options: ["Short, straight brown hair.", "Long, wavy blond hair.", "Curly black hair."], a: "Short, straight brown hair." },
                    { q: "Does Lucas like to read?", options: ["Yes, he loves books.", "No, he doesn't like to read.", "He reads comics."], a: "No, he doesn't like to read." },
                    { q: "How often does he play basketball?", options: ["Twice a week.", "Every day after school.", "Only on weekends."], a: "Every day after school." }
                ]
            },
            {
                title: "Audio Script 2",
                audio: "I have a very organized routine. I always get up at half past six. I brush my teeth and wash my face. I have breakfast at seven o'clock. Then, I go to school. I never arrive late!",
                questions: [
                    { q: "What kind of routine does the speaker have?", options: ["A lazy routine.", "A very organized routine.", "A messy routine."], a: "A very organized routine." },
                    { q: "What time does the speaker get up?", options: ["At 6:00 AM.", "At half past six (6:30 AM).", "At 7:00 AM."], a: "At half past six (6:30 AM)." },
                    { q: "What does the speaker do after getting up?", options: ["Plays video games.", "Brushes teeth and washes face.", "Does homework."], a: "Brushes teeth and washes face." },
                    { q: "What time does the speaker have breakfast?", options: ["At seven o'clock.", "At eight o'clock.", "At six o'clock."], a: "At seven o'clock." },
                    { q: "Does the speaker arrive late for school?", options: ["Yes, sometimes.", "No, never.", "Yes, always."], a: "No, never." }
                ]
            },
            {
                title: "Audio Script 3",
                audio: "My best friend is Clara. She is short and has long wavy red hair. She has beautiful green eyes and freckles on her nose. She likes art. She draws and paints in her free time. She doesn't play sports.",
                questions: [
                    { q: "Who is the speaker's best friend?", options: ["Celine.", "Clara.", "Sophia."], a: "Clara." },
                    { q: "What color is Clara's hair?", options: ["Blond.", "Red.", "Black."], a: "Red." },
                    { q: "What does Clara have on her nose?", options: ["Glasses.", "Freckles.", "A scar."], a: "Freckles." },
                    { q: "What does Clara like to do?", options: ["Play basketball.", "Draw and paint.", "Watch TV."], a: "Draw and paint." },
                    { q: "Does Clara play sports?", options: ["Yes, she plays soccer.", "No, she doesn't play sports.", "She swims."], a: "No, she doesn't play sports." }
                ]
            },
            {
                title: "Audio Script 4",
                audio: "We love the weekend! On Saturday, my family and I go to the park. We run and play volleyball. On Sunday, we usually stay at home. My dad cooks a big lunch. We watch movies in the afternoon and relax.",
                questions: [
                    { q: "What do they do on Saturday?", options: ["They go to school.", "They go to the park.", "They sleep all day."], a: "They go to the park." },
                    { q: "What sport do they play in the park?", options: ["Soccer.", "Volleyball.", "Tennis."], a: "Volleyball." },
                    { q: "Where do they usually stay on Sunday?", options: ["At the beach.", "At home.", "At the mall."], a: "At home." },
                    { q: "Who cooks lunch on Sunday?", options: ["The mom.", "The dad.", "The grandfather."], a: "The dad." },
                    { q: "What do they do in the afternoon?", options: ["They do homework.", "They watch movies and relax.", "They listen to music."], a: "They watch movies and relax." }
                ]
            },
            {
                title: "Audio Script 5",
                audio: "Look at this character I drew! His name is Rex. He is a bad guy. He is big and heavy. He is completely bald. He has one big red eye in the middle of his head. He fights the superheroes using his strong arms.",
                questions: [
                    { q: "What is the character's name?", options: ["Titan.", "Rex.", "Albert."], a: "Rex." },
                    { q: "Is Rex a good guy or a bad guy?", options: ["A good guy.", "A bad guy.", "A superhero."], a: "A bad guy." },
                    { q: "Does Rex have hair?", options: ["Yes, he has long hair.", "No, he is completely bald.", "Yes, he has curly hair."], a: "No, he is completely bald." },
                    { q: "How many eyes does Rex have?", options: ["Two eyes.", "One big red eye.", "Three eyes."], a: "One big red eye." },
                    { q: "What does Rex use to fight?", options: ["His feet.", "His strong arms.", "A sword."], a: "His strong arms." }
                ]
            },
            {
                title: "Audio Script 6",
                audio: "I am a student. I have English classes twice a week, on Tuesdays and Thursdays. The classes start at 3:00 PM. I always do my English homework on Wednesday. I like English, but I think math is difficult.",
                questions: [
                    { q: "What does the speaker do?", options: ["He is a teacher.", "He is a student.", "He is a doctor."], a: "He is a student." },
                    { q: "How often does he have English classes?", options: ["Every day.", "Twice a week.", "Once a month."], a: "Twice a week." },
                    { q: "What days are the English classes?", options: ["Mondays and Wednesdays.", "Tuesdays and Thursdays.", "Saturdays and Sundays."], a: "Tuesdays and Thursdays." },
                    { q: "When does he do his English homework?", options: ["On Monday.", "On Wednesday.", "On Friday."], a: "On Wednesday." },
                    { q: "What subject does he think is difficult?", options: ["English.", "Math.", "Science."], a: "Math." }
                ]
            },
            {
                title: "Audio Script 7",
                audio: "My mother works in a big office. She is very organized and punctual. She leaves home at 7:30 AM. She works on a computer all day. She usually comes home at 6:00 PM. She is tired, so I help her make dinner.",
                questions: [
                    { q: "Where does the mother work?", options: ["In a hospital.", "In a big office.", "In a school."], a: "In a big office." },
                    { q: "What time does she leave home?", options: ["At 7:00 AM.", "At 7:30 AM.", "At 8:00 AM."], a: "At 7:30 AM." },
                    { q: "What does she use all day at work?", options: ["A notebook.", "A computer.", "A telephone."], a: "A computer." },
                    { q: "When does she usually come home?", options: ["At 5:00 PM.", "At 6:00 PM.", "At 7:00 PM."], a: "At 6:00 PM." },
                    { q: "How does the speaker help the mother?", options: ["By washing the car.", "By helping her make dinner.", "By cleaning the house."], a: "By helping her make dinner." }
                ]
            },
            {
                title: "Audio Script 8",
                audio: "I have a baby sister. She is very small and light. She doesn't have teeth yet! She has chubby cheeks and a tiny nose. She sleeps a lot during the day. Sometimes, she cries when she is hungry.",
                questions: [
                    { q: "Who is the speaker talking about?", options: ["A grandmother.", "A baby sister.", "A pet dog."], a: "A baby sister." },
                    { q: "Does the baby have teeth?", options: ["Yes, many teeth.", "No, she doesn't have teeth yet.", "Yes, two teeth."], a: "No, she doesn't have teeth yet." },
                    { q: "What do the baby's cheeks look like?", options: ["Thin.", "Chubby.", "Red."], a: "Chubby." },
                    { q: "What does the baby do a lot during the day?", options: ["Plays.", "Sleeps.", "Eats."], a: "Sleeps." },
                    { q: "Why does she sometimes cry?", options: ["Because she is tired.", "Because she is hungry.", "Because she is scared."], a: "Because she is hungry." }
                ]
            },
            {
                title: "Audio Script 9",
                audio: "I love to read comics. I have a big collection. I usually read them in my bedroom after school. My favorite comic is about a superhero who runs very fast. He has strong legs. I rarely watch TV because I prefer reading.",
                questions: [
                    { q: "What does the speaker love to read?", options: ["Books about history.", "Comics.", "Newspapers."], a: "Comics." },
                    { q: "Where does the speaker read?", options: ["In the living room.", "In the bedroom.", "At school."], a: "In the bedroom." },
                    { q: "What is the favorite comic about?", options: ["A funny cat.", "A fast superhero.", "A strong monster."], a: "A fast superhero." },
                    { q: "What body part makes the superhero fast?", options: ["His strong arms.", "His strong legs.", "His big head."], a: "His strong legs." },
                    { q: "Why does the speaker rarely watch TV?", options: ["Because the TV is broken.", "Because he prefers reading.", "Because he doesn't have time."], a: "Because he prefers reading." }
                ]
            },
            {
                title: "Audio Script 10",
                audio: "We have a dog named Max. He is a big dog with short brown hair. He has long ears and a wet nose. Max loves to play. He runs in the yard every day. He always sleeps on my bed at night. I take him for a walk once a day.",
                questions: [
                    { q: "What kind of animal is Max?", options: ["A cat.", "A dog.", "A rabbit."], a: "A dog." },
                    { q: "What color is Max's hair?", options: ["Black.", "Brown.", "White."], a: "Brown." },
                    { q: "Does Max have short ears?", options: ["Yes, he does.", "No, he has long ears.", "He doesn't have ears."], a: "No, he has long ears." },
                    { q: "Where does Max sleep at night?", options: ["In the yard.", "On the bed.", "In the kitchen."], a: "On the bed." },
                    { q: "How often does the speaker walk Max?", options: ["Twice a day.", "Once a day.", "Never."], a: "Once a day." }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT (10 ITEMS) ---
        14: [
            {
                title: "Text 1: Physical Appearance",
                text: "My brother [1] (is / has / does) tall and strong. He [2] (have / is / has) big muscles because he exercises a lot. His hair [3] (is / has / do) short and blond. He [4] (has / is / does) blue eyes and a small nose. Everybody says he is very [5] (handsome / pretty / ugly).",
                answers: ["is", "has", "is", "has", "handsome"]
            },
            {
                title: "Text 2: Daily Routine",
                text: "I [1] (wake / wakes / waking) up at 6:30 AM every day. I [2] (brushes / brush / brushing) my teeth and wash my face. I [3] (have / has / does) breakfast with my family. Then, I [4] (go / goes / going) to school by bus. I am [5] (never / always / rarely) late for class; I am very punctual.",
                answers: ["wake", "brush", "have", "go", "never"]
            },
            {
                title: "Text 3: Hobbies",
                text: "Celine loves music. She [1] (play / plays / playing) the piano every afternoon. She also [2] (listen / listens / listening) to classical music in her room. She [3] (don't / isn't / doesn't) like sports very much. She [4] (rarely / usually / always) plays volleyball, almost never! Her favorite hobby [5] (is / has / does) reading books.",
                answers: ["plays", "listens", "doesn't", "rarely", "is"]
            },
            {
                title: "Text 4: Body Parts",
                text: "You use your [1] (eyes / ears / nose) to see the world. You use your [2] (legs / arms / hair) to walk and run. You have five [3] (fingers / toes / teeth) on each hand. You use your [4] (mouth / ear / shoulder) to eat and speak. Exercise is very important to keep your [5] (book / body / hobby) healthy and strong.",
                answers: ["eyes", "legs", "fingers", "mouth", "body"]
            },
            {
                title: "Text 5: Telling Time",
                text: "What [1] (day / time / often) is it? It is half [2] (past / to / at) four in the afternoon. My class starts at 5 [3] (o'clock / hour / time). I study English twice a [4] (day / week / month), on Tuesdays and Thursdays. Friday is my favorite day of the [5] (weekend / week / month) because the weekend is near!",
                answers: ["time", "past", "o'clock", "week", "week"]
            },
            {
                title: "Text 6: Family Descriptions",
                text: "My grandmother is 75 years old, so she is [1] (young / old / tall). She [2] (has / is / does) short gray hair. She wears glasses on her [3] (face / hands / feet) to read. She [4] (cook / cooks / cooking) delicious pies on Sundays. We [5] (always / never / rarely) visit her on the weekend because we love her very much.",
                answers: ["old", "has", "face", "cooks", "always"]
            },
            {
                title: "Text 7: Weekend Activities",
                text: "On the weekend, I [1] (don't / doesn't / isn't) go to school. On Saturdays, I usually [2] (watch / watches / watching) TV series in the morning. In the afternoon, I play [3] (video games / books / guitar) with my friends. On Sundays, we [4] (relax / relaxes / relaxing) at home. I [5] (never / always / sometimes) do my homework on Sunday night.",
                answers: ["don't", "watch", "video games", "relax", "sometimes"]
            },
            {
                title: "Text 8: Asking Questions",
                text: "[1] (Do / Does / Is) you play basketball? Yes, I [2] (do / does / play). [3] (What / Who / Where) does your coach look like? He is tall and bald. [4] (How / What / When) often do you practice? We practice three times a [5] (week / time / hour).",
                answers: ["Do", "do", "What", "How", "week"]
            },
            {
                title: "Text 9: Playing Music",
                text: "Albert [1] (have / has / is) a new guitar. He [2] (plays / play / playing) it every day. He wants to [3] (sing / draw / read) in a band. His sister [4] (don't / doesn't / isn't) like the noise. She [5] (usually / never / sometimes) closes her door when he practices.",
                answers: ["has", "plays", "sing", "doesn't", "usually"]
            },
            {
                title: "Text 10: Bedtime Routine",
                text: "It is 10 [1] (o'clock / time / past) at night. I am tired. I go to the bathroom and [2] (wash / watch / brush) my face. Then, I brush my [3] (eyes / teeth / toes). I [4] (put / go / have) to bed early. I sleep very well and I [5] (get / wake / watch) up at 7 AM.",
                answers: ["o'clock", "wash", "teeth", "go", "wake"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 ITEMS) ---
        15: [
            {
                title: "Audio Script 1",
                audio: "I wake up at six o'clock. I take a shower. I eat breakfast. I go to school by bus.",
                text: "I [1] up at six o'clock. I [2] a shower. I [3] breakfast. I [4] to [5] by bus.",
                answers: ["wake", "take", "eat", "go", "school"]
            },
            {
                title: "Audio Script 2",
                audio: "She is short and thin. She has wavy hair. She has blue eyes. She is very pretty.",
                text: "She is [1] and [2]. She has [3] hair. She has [4] [5]. She is very pretty.",
                answers: ["short", "thin", "wavy", "blue", "eyes"]
            },
            {
                title: "Audio Script 3",
                audio: "We play basketball twice a week. We play on Tuesdays and Thursdays. It is my favorite sport.",
                text: "We [1] [2] [3] a [4]. We play on Tuesdays and [5]. It is my favorite sport.",
                answers: ["play", "basketball", "twice", "week", "Thursdays"]
            },
            {
                title: "Audio Script 4",
                audio: "My grandfather is old. He is bald. He wears a hat on his head. He has gray hair on his beard.",
                text: "My grandfather is [1]. He is [2]. He [3] a [4] on his [5]. He has gray hair on his beard.",
                answers: ["old", "bald", "wears", "hat", "head"]
            },
            {
                title: "Audio Script 5",
                audio: "I do my homework in the afternoon. I usually watch movies at night. I never arrive late to class.",
                text: "I do my [1] in the [2]. I [3] watch [4] at [5]. I never arrive late to class.",
                answers: ["homework", "afternoon", "usually", "movies", "night"]
            },
            {
                title: "Audio Script 6",
                audio: "What time is it? It is half past two. I have a piano class. I am ready to play.",
                text: "What [1] is it? It is [2] [3] [4]. I have a piano [5]. I am ready to play.",
                answers: ["time", "half", "past", "two", "class"]
            },
            {
                title: "Audio Script 7",
                audio: "The baby is chubby. He has small hands and short legs. He sleeps a lot during the day.",
                text: "The baby is [1]. He has [2] [3] and [4] [5]. He sleeps a lot during the day.",
                answers: ["chubby", "small", "hands", "short", "legs"]
            },
            {
                title: "Audio Script 8",
                audio: "He doesn't like to read books. He likes to draw and paint. He is very creative with colors.",
                text: "He [1] like to [2] [3]. He likes to [4] and [5]. He is very creative with colors.",
                answers: ["doesn't", "read", "books", "draw", "paint"]
            },
            {
                title: "Audio Script 9",
                audio: "We have dinner at seven o'clock. My dad cooks the food. We eat vegetables and meat.",
                text: "We have [1] at seven [2]. My dad [3] the food. We eat [4] and [5].",
                answers: ["dinner", "o'clock", "cooks", "vegetables", "meat"]
            },
            {
                title: "Audio Script 10",
                audio: "Look at my new dog. He has long ears and a black nose. I play with him every day.",
                text: "Look at my new dog. He has [1] [2] and a black [3]. I [4] with him [5] day.",
                answers: ["long", "ears", "nose", "play", "every"]
            }
        ]
    }
});