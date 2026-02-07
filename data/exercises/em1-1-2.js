/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */

window.initExercise({
    id: "em1-1-2",
    grade: "EM 1st Grade",
    bimester: "1",
    chapter: "2",
    title: "Learning Strategies & Metacognition",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES (40 ITEMS) ---
        1: [
            { words: ["usually", "music", "I", "listen", "study", "to", "when", "I"], correct: "I usually listen to music when I study" },
            { words: ["working", "right", "you", "are", "on", "what", "now"], correct: "What are you working on right now" },
            { words: ["notes", "don't", "review", "forget", "your", "to", "before", "test", "the"], correct: "Don't forget to review your notes before the test" },
            { words: ["currently", "an", "reading", "I", "online", "am", "article"], correct: "I am currently reading an article online" },
            { words: ["pronunciation", "always", "my", "I", "practice", "before", "class"], correct: "I always practice my pronunciation before class" },
            { words: ["shadowing", "technique", "is", "a", "useful", "very"], correct: "Shadowing is a very useful technique" },
            { words: ["often", "silence", "I", "need", "to", "concentrate"], correct: "I often need silence to concentrate" },
            { words: ["never", "studies", "on", "Sarah", "Sundays"], correct: "Sarah never studies on Sundays" },
            { words: ["learning", "different", "everyone", "style", "a", "has"], correct: "Everyone has a different learning style" },
            { words: ["improve", "to", "want", "I", "grades", "my"], correct: "I want to improve my grades" },
            { words: ["efficient", "be", "with", "time", "your", "study"], correct: "Be efficient with your study time" },
            { words: ["memorizing", "lists", "long", "is", "difficult"], correct: "Memorizing long lists is difficult" },
            { words: ["works", "effectively", "what", "for", "you"], correct: "What works effectively for you" },
            { words: ["watching", "a", "video", "at", "moment", "the", "they", "are"], correct: "They are watching a video at the moment" },
            { words: ["helpful", "I", "find", "it", "record", "to", "voice", "my"], correct: "I find it helpful to record my voice" },
            { words: ["understand", "you", "do", "grammar", "the"], correct: "Do you understand the grammar" },
            { words: ["method", "effective", "this", "very", "is"], correct: "This method is very effective" },
            { words: ["twice", "month", "a", "we", "our", "review", "goals"], correct: "We review our goals twice a month" },
            { words: ["lyrics", "the", "read", "while", "listen", "you"], correct: "Read the lyrics while you listen" },
            { words: ["busy", "moment", "the", "at", "he", "is"], correct: "He is busy at the moment" },
            { words: ["rarely", "use", "I", "for", "videos", "study"], correct: "I rarely use videos for study" },
            { words: ["strategy", "writing", "down", "words", "good", "is", "a"], correct: "Writing words down is a good strategy" },
            { words: ["repeating", "words", "helps", "memorization"], correct: "Repeating words helps memorization" },
            { words: ["looking", "info", "we", "for", "are", "online", "currently"], correct: "We are currently looking for information online" },
            { words: ["interesting", "sounds", "that"], correct: "That sounds interesting" },
            { words: ["essay", "writing", "an", "is", "she", "now"], correct: "She is writing an essay now" },
            { words: ["every", "English", "day", "practice"], correct: "Practice English every day" },
            { words: ["always", "late", "he", "is", "for", "lectures"], correct: "He is always late for lectures" },
            { words: ["method", "your", "study", "what", "is"], correct: "What is your study method" },
            { words: ["improve", "skills", "listening", "my", "usually", "I"], correct: "I usually improve my listening skills" },
            { words: ["moment", "the", "at", "are", "we", "learning"], correct: "We are learning at the moment" },
            { words: ["effective", "app", "this", "is", "highly"], correct: "This app is highly effective" },
            { words: ["sometimes", "comics", "read", "I", "English", "in"], correct: "Sometimes I read comics in English" },
            { words: ["mouth", "memorize", "movements", "the", "carefully"], correct: "Memorize the mouth movements carefully" },
            { words: ["often", "how", "do", "you", "review"], correct: "How often do you review" },
            { words: ["busy", "I", "am", "currently", "project", "a", "on"], correct: "I am currently busy on a project" },
            { words: ["subtitles", "with", "watch", "movies", "always"], correct: "Always watch movies with subtitles" },
            { words: ["rarely", "he", "misses", "class", "a"], correct: "He rarely misses a class" },
            { words: ["strategy", "your", "change", "if", "it", "works", "not"], correct: "Change your strategy if it works not" },
            { words: ["itself", "grammar", "doesn't", "explain"], correct: "Grammar doesn't explain itself" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES (40 ITEMS) ---
        2: [
            { lines: ["Albert: I am watching a video by a famous YouTuber.", "Celine: Hey Albert! What are you working on right now?", "Albert: He teaches English pronunciation.", "Celine: That sounds interesting!"], order: [1, 0, 2, 3] },
            { lines: ["Celine: I usually just listen to music to improve my skills.", "Albert: That's a good method too.", "Celine: But currently, I am reading an article online.", "Albert: Everyone has a different learning style."], order: [0, 1, 2, 3] },
            { lines: ["Mrs. Canales: Albert, please open your book to page 10.", "Albert: Sorry, Mrs. Canales. I was just asking for a pen.", "Mrs. Canales: Don't talk to Celine right now.", "Albert: I need it to write down the strategy."], order: [0, 2, 1, 3] },
            { lines: ["Celine: I rarely use videos. I prefer to read.", "Albert: I always watch videos before class.", "Celine: We should review together sometime!", "Albert: Great idea! Let's make a plan."], order: [1, 0, 2, 3] },
            { lines: ["Sarah: I find it helpful to record my voice.", "John: Does it work for you?", "Sarah: Yes, it is very effective for pronunciation.", "John: I should try that technique this week."], order: [0, 1, 2, 3] },
            { lines: ["Teacher: Practice speaking every day to improve.", "Student: I try, but I am sometimes shy.", "Teacher: Don't be afraid to fail!", "Student: Thank you for the motivation."], order: [0, 1, 2, 3] },
            { lines: ["Celine: Are you using the dictionary right now?", "Albert: No, I am memorizing this list.", "Celine: Is it hard to remember all the words?", "Albert: Yes, but I review them twice a day."], order: [0, 1, 2, 3] },
            { lines: ["John: I always watch movies with subtitles.", "Mary: I prefer to read the lyrics of songs.", "John: Why do you choose that method?", "Mary: Because it helps me understand the pronunciation."], order: [0, 1, 2, 3] },
            { lines: ["Celine: What works for you when you study grammar?", "Albert: I usually write my own examples.", "Celine: I find it more efficient to use flashcards.", "Albert: That's a good strategy too."], order: [0, 1, 2, 3] },
            { lines: ["Mrs. Canales: Currently, we are focusing on frequency adverbs.", "Albert: Where do we put them in the sentence?", "Mrs. Canales: Usually before the main verb, but after To Be.", "Albert: I will memorize that rule now."], order: [0, 1, 2, 3] },
            { lines: ["Sarah: Are you reading that long article?", "Mary: Yes, I am currently studying for the essay.", "Sarah: I rarely read science topics.", "Mary: You should try; it's very informative."], order: [0, 1, 2, 3] },
            { lines: ["Celine: Don't forget to practice shadowing.", "Sarah: What is your technique exactly?", "Celine: I listen and repeat immediately.", "Sarah: That sounds like a great way to improve."], order: [0, 1, 2, 3] },
            { lines: ["Albert: I am busy at the moment.", "Celine: What are you doing?", "Albert: I am reviewing my notes for history.", "Celine: I will talk to you later then."], order: [1, 0, 2, 3] },
            { lines: ["John: Do you often use English outside of school?", "Paul: I never speak it at home.", "John: You need to practice more to be efficient.", "Paul: I will start watching YouTubers today."], order: [0, 1, 2, 3] },
            { lines: ["Teacher: Open your apps and start the exercise.", "Student: Mine is loading at the moment.", "Teacher: Be patient. The wifi is slow today.", "Student: Okay, it is working now!"], order: [0, 1, 2, 3] },
            { lines: ["Mary: How often do you go to the library?", "Sarah: I usually go twice a week.", "Mary: I rarely go there because I study online.", "Sarah: The library is better for concentration."], order: [0, 1, 2, 3] },
            { lines: ["Albert: I always listen to music while I study.", "Celine: Really? I never do that.", "Albert: It helps me focus on the task.", "Celine: I often need total silence."], order: [0, 1, 2, 3] },
            { lines: ["Mrs. Canales: Are you studying for the test?", "Student: Yes, I am currently reviewing the grammar.", "Mrs. Canales: Good. Don't leave it for the last minute.", "Student: I always start a week before."], order: [0, 1, 2, 3] },
            { lines: ["John: My learning style is visual.", "Mary: What does that mean exactly?", "John: I understand better with images and charts.", "Mary: I prefer auditory learning myself."], order: [0, 1, 2, 3] },
            { lines: ["Celine: I am writing an essay about technology.", "Albert: That sounds difficult!", "Celine: Not really, I am currently using a great website.", "Albert: Tell me more about it later."], order: [0, 1, 2, 3] },
            { lines: ["Sarah: Do you usually study in the morning?", "John: No, I am usually very sleepy then.", "Sarah: I always wake up early to read.", "John: I prefer the evening for concentration."], order: [0, 1, 2, 3] },
            { lines: ["Teacher: Learn these ten words by tomorrow.", "Student: That is a big challenge!", "Teacher: Use flashcards; they are very effective.", "Student: I will try that method tonight."], order: [0, 1, 2, 3] },
            { lines: ["Albert: Currently, I am looking for a new study strategy.", "Celine: What works for you usually?", "Albert: I always take notes, but I forget them.", "Celine: You should review them once a week."], order: [0, 1, 2, 3] },
            { lines: ["Mary: Look! The YouTuber is speaking very fast.", "Sarah: Turn on the subtitles to understand.", "Mary: That is a helpful tip, thanks!", "Sarah: Now we can follow the content easily."], order: [0, 1, 2, 3] },
            { lines: ["John: I rarely miss my pronunciation practice.", "Paul: Your accent is improving currently.", "John: Thanks. I find it helpful to repeat the lyrics.", "Paul: Music is a great media tool for that."], order: [0, 1, 2, 3] },
            { lines: ["Celine: Don't speak Portuguese in class!", "Albert: Sorry, I am currently explaining a word to John.", "Celine: Use English to explain it.", "Albert: I will try my best."], order: [0, 1, 2, 3] },
            { lines: ["Sarah: I always feel motivated after a good lecture.", "Mary: Me too. This professor is very efficient.", "Sarah: He uses a very modern teaching style.", "Mary: It definitely works for me."], order: [0, 1, 2, 3] },
            { lines: ["Teacher: What are you doing, Paul?", "Paul: I am memorizing the irregular verbs.", "Teacher: Good. You need them for your writing skill.", "Paul: I know. I am practicing every day."], order: [0, 1, 2, 3] },
            { lines: ["Celine: Is this app effective for vocabulary?", "Albert: Yes, I use it twice a day.", "Celine: I am currently downloading it.", "Albert: Great! It will help you improve."], order: [0, 1, 2, 3] },
            { lines: ["Sarah: I often study with my classmates.", "Mary: Is it not too distracting?", "Sarah: No, we help each other understand the topics.", "Mary: Maybe I should join you this week."], order: [0, 1, 2, 3] },
            { lines: ["Albert: I am writing a message to the YouTuber.", "Celine: Why are you doing that?", "Albert: To ask about his study method.", "Celine: That is a very proactive strategy!"], order: [0, 1, 2, 3] },
            { lines: ["Teacher: Review your essays before you submit them.", "Student: I am currently checking the grammar.", "Teacher: Don't forget to look at the pronunciation of key words.", "Student: I will do that right now."], order: [0, 1, 2, 3] },
            { lines: ["Mary: I always find it helpful to draw diagrams.", "Sarah: That sounds interesting!", "Mary: It helps me understand complex articles.", "Sarah: I prefer to write summaries myself."], order: [0, 1, 2, 3] },
            { lines: ["Celine: Are you listening to the podcast?", "Albert: Yes, I am currently practicing my comprehension.", "Celine: How often do you listen to it?", "Albert: I usually listen every morning on the bus."], order: [0, 1, 2, 3] },
            { lines: ["Teacher: Don't stay up too late studying.", "Student: But I need to improve my grades!", "Teacher: You need sleep to be efficient.", "Student: I understand. I will go to bed now."], order: [0, 1, 2, 3] },
            { lines: ["John: Whichever method you use, be consistent.", "Paul: I sometimes forget to practice.", "John: That is why you are not improving fast.", "Paul: I will make a schedule right now."], order: [0, 1, 2, 3] },
            { lines: ["Sarah: I am currently reading a book about strategies.", "Mary: Is it useful for our English project?", "Sarah: Yes, it explains many effective techniques.", "Mary: Can I borrow it after you?"], order: [0, 1, 2, 3] },
            { lines: ["Celine: What is Albert doing in the library?", "Sarah: He is currently looking for information for his essay.", "Celine: Does he usually study there?", "Sarah: Yes, he is always there after school."], order: [0, 1, 2, 3] },
            { lines: ["Albert: I rarely watch TV during the week.", "Celine: I am currently trying to do the same.", "Albert: It gives me more time to practice English.", "Celine: That is a very efficient decision."], order: [0, 1, 2, 3] },
            { lines: ["Teacher: Give your best in every task.", "Student: I am currently working very hard.", "Teacher: I can see that. Your skills are growing.", "Student: Thank you for your support!"], order: [0, 1, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS (40 ITEMS) ---
        3: [
            { q: "Does he usually study in the evening?", options: ["No, he doesn't.", "No, he isn't.", "No, he not study.", "No, he doesn't studies."], a: "No, he doesn't." },
            { q: "Are you working on your project right now?", options: ["Yes, I am.", "Yes, I working.", "Yes, I do.", "Yes, I am work."], a: "Yes, I am." },
            { q: "Do they always speak English?", options: ["No, they don't.", "No, they isn't.", "No, they always not.", "No, they doesn't."], a: "No, they don't." },
            { q: "Is Sarah reading an article currently?", options: ["Yes, she is.", "Yes, she reads.", "Yes, she is read.", "Yes, she does."], a: "Yes, she is." },
            { q: "Do we need silence to concentrate?", options: ["Yes, we do.", "Yes, we are.", "Yes, we need.", "Yes, us do."], a: "Yes, we do." },
            { q: "Am I improving my pronunciation?", options: ["Yes, you are.", "Yes, you am.", "Yes, you is.", "Yes, you improving."], a: "Yes, you are." },
            { q: "Does this app work well?", options: ["Yes, it does.", "Yes, it is.", "Yes, it work.", "Yes, it do."], a: "Yes, it does." },
            { q: "Are the students listening to the lyrics?", options: ["No, they aren't.", "No, they don't.", "No, they isn't.", "No, them are not."], a: "No, they aren't." },
            { q: "Do you rarely miss a class?", options: ["Yes, I do.", "Yes, I am.", "Yes, I rarely.", "No, I am not."], a: "Yes, I do." },
            { q: "Is the YouTuber speaking fast?", options: ["Yes, he is.", "Yes, he speaks.", "Yes, he does.", "Yes, him is."], a: "Yes, he is." },
            { q: "Does she always use flashcards?", options: ["No, she doesn't.", "No, she isn't.", "No, she doesn't use.", "No, her doesn't."], a: "No, she doesn't." },
            { q: "Are we learning new strategies now?", options: ["Yes, we are.", "Yes, we do.", "Yes, we learning.", "Yes, us are."], a: "Yes, we are." },
            { q: "Do you usually go to the library?", options: ["No, I don't.", "No, I'm not.", "No, me don't.", "No, I not go."], a: "No, I don't." },
            { q: "Is he currently writing an essay?", options: ["Yes, he is.", "Yes, he writes.", "Yes, he currently.", "Yes, him is."], a: "Yes, he is." },
            { q: "Do adverbs of frequency come after To Be?", options: ["Yes, they do.", "Yes, they are.", "Yes, they come.", "No, they doesn't."], a: "Yes, they do." },
            { q: "Are you enjoying the lecture?", options: ["Yes, I am.", "Yes, I do.", "Yes, I enjoying.", "Yes, me am."], a: "Yes, I am." },
            { q: "Does the strategy work?", options: ["Yes, it does.", "Yes, it is.", "Yes, it works.", "Yes, its do."], a: "Yes, it does." },
            { q: "Are they reviewing the lesson now?", options: ["No, they aren't.", "No, they don't.", "No, they not review.", "No, they isn't."], a: "No, they aren't." },
            { q: "Do you find it helpful to study?", options: ["Yes, I do.", "Yes, I am.", "Yes, I find.", "Yes, me do."], a: "Yes, I do." },
            { q: "Is the method effective?", options: ["Yes, it is.", "Yes, it does.", "Yes, it effective.", "Yes, he is."], a: "Yes, it is." },
            { q: "What are you doing right now?", options: ["I am practicing shadowing.", "I am a blue sandwich.", "I usually wake up at 7.", "My name is Mrs. Canales."], a: "I am practicing shadowing." },
            { q: "How often do you study English?", options: ["I study it every single day.", "I study it under the table.", "I am studying it now.", "English is a global language."], a: "I study it every single day." },
            { q: "What works for you when learning vocabulary?", options: ["Using flashcards works best.", "A purple storm works for me.", "Because I am a student.", "In the afternoon."], a: "Using flashcards works best." },
            { q: "Is the YouTuber funny?", options: ["Yes, his videos are hilarious!", "Yes, he is a laptop.", "No, he is currently raining.", "At the moment."], a: "Yes, his videos are hilarious!" },
            { q: "Why are you wearing headphones?", options: ["Because I am listening to a podcast.", "Because I am a strategy.", "Because it is 2025.", "Yes, I am."], a: "Because I am listening to a podcast." },
            { q: "What is your learning style?", options: ["My style is visual and auditory.", "My style is a ham sandwich.", "I am currently sleeping.", "At school."], a: "My style is visual and auditory." },
            { q: "Do you find it helpful to record your voice?", options: ["Yes, it helps me improve.", "No, it is a reflexive pronoun.", "Tomorrow morning.", "By myself."], a: "Yes, it helps me improve." },
            { q: "When do you usually review your notes?", options: ["I usually review them after school.", "I review them with a spoon.", "They are in my backpack.", "Yes, I do."], a: "I usually review them after school." },
            { q: "Are you busy at the moment?", options: ["Yes, I am writing an essay.", "No, I am a global company.", "I rarely miss a class.", "At 10 o'clock."], a: "Yes, I am writing an essay." },
            { q: "Is the app efficient?", options: ["Yes, it saves me a lot of time.", "No, it is a career path.", "In my opinion, it is a burger.", "Whatever you choose."], a: "Yes, it saves me a lot of time." },
            { q: "What is the topic of the lecture?", options: ["The topic is learning strategies.", "The topic is how far the airport is.", "The topic is a delicious costume.", "Whoever is speaking."], a: "The topic is learning strategies." },
            { q: "How important is pronunciation?", options: ["It is vital for being understood.", "It is 50 meters tall.", "It is due to the rain.", "No, it isn't."], a: "It is vital for being understood." },
            { q: "What are you currently reading?", options: ["I am reading an article about science.", "I am reading a reflexive mirror.", "I always read.", "By herself."], a: "I am reading an article about science." },
            { q: "Does she often practice shadowing?", options: ["Yes, it is her favorite technique.", "No, she is a subtitle.", "Currently, she is a desk.", "At school."], a: "Yes, it is her favorite technique." },
            { q: "Why do you need silence?", options: ["To concentrate on my studies.", "To eat a motivated burger.", "Because the pronoun is loud.", "On Sundays."], a: "To concentrate on my studies." },
            { q: "Is this method effective for you?", options: ["Yes, I am improving my grades.", "No, it is a global storm.", "I am a YouTuber.", "Wherever you go."], a: "Yes, I am improving my grades." },
            { q: "What are the students doing?", options: ["They are discussing the project.", "They are being a textbook.", "They usually study.", "In conclusion."], a: "They are discussing the project." },
            { q: "How often does he miss class?", options: ["He never misses a class.", "He misses class at 5 miles.", "He is currently a pen.", "No, he doesn't."], a: "He never misses a class." },
            { q: "What sounds interesting?", options: ["Learning with video games sounds interesting.", "A reflexive sandwich sounds interesting.", "How tall the pronoun is sounds interesting.", "Since it is raining."], a: "Learning with video games sounds interesting." },
            { q: "Are you making a plan?", options: ["Yes, to improve my writing skills.", "No, I am a strategy.", "Always.", "In the mirror."], a: "Yes, to improve my writing skills." }
        ],

        // --- TYPE 4: FIND MEANING (40 ITEMS) ---
        4: [
            { sent: "Having a good study **strategy** is the first step.", word: "strategy", options: ["Estratégia", "Sorte", "Memória", "Nota"], a: "Estratégia", def: "A plan of action designed to achieve a major or overall aim. (Estratégia)" },
            { sent: "You need to **improve** your listening skills.", word: "improve", options: ["Diminuir", "Ignorar", "Melhorar", "Esquecer"], a: "Melhorar", def: "To make or become better. (Melhorar)" },
            { sent: "**Shadowing** is a very useful technique for speaking.", word: "shadowing", options: ["Sombreamento", "Escrita", "Leitura", "Tradução"], a: "Sombreamento", def: "Language learning technique: repeat audio immediately. (Técnica de repetição)" },
            { sent: "This study method is very **effective**.", word: "effective", options: ["Lento", "Eficaz", "Difícil", "Inútil"], a: "Eficaz", def: "Successful in producing a desired result. (Eficaz)" },
            { sent: "Be **efficient** and don't waste time.", word: "efficient", options: ["Eficiente", "Preguiçoso", "Organizado", "Rápido"], a: "Eficiente", def: "Maximum productivity with minimum wasted effort. (Eficiente)" },
            { sent: "I always watch movies with **subtitles**.", word: "subtitles", options: ["Dublagem", "Legendas", "Som", "Imagens"], a: "Legendas", def: "Captions displayed at the bottom of a movie. (Legendas)" },
            { sent: "I learned the **lyrics** to my favorite song.", word: "lyrics", options: ["Ritmo", "Letra", "Melodia", "Instrumentos"], a: "Letra", def: "The words of a song. (Letra de música)" },
            { sent: "Reading a scientific **article** helps vocabulary.", word: "article", options: ["Livro", "Artigo", "Redação", "Jornal"], a: "Artigo", def: "A piece of writing included in a publication. (Artigo)" },
            { sent: "I have to write a five-page **essay**.", word: "essay", options: ["Redação", "Resumo", "Pergunta", "Tópico"], a: "Redação", def: "A short piece of writing on a particular subject. (Redação/Ensaio)" },
            { sent: "Critical thinking is a vital **skill**.", word: "skill", options: ["Matéria", "Habilidade", "Nota", "Tarefa"], a: "Habilidade", def: "The ability to do something well; expertise. (Habilidade/Perícia)" },
            { sent: "Her **pronunciation** is very clear.", word: "pronunciation", options: ["Escrita", "Leitura", "Pronúncia", "Gramática"], a: "Pronúncia", def: "The way in which a word is pronounced. (Pronúncia)" },
            { sent: "It is hard to **memorize** long lists.", word: "memorize", options: ["Memorizar", "Esquecer", "Escrever", "Copiar"], a: "Memorizar", def: "To commit to memory; learn by heart. (Memorizar)" },
            { sent: "Do you **understand** the difference?", word: "understand", options: ["Explica", "Entende", "Ouve", "Sabe"], a: "Entende", def: "To perceive the intended meaning. (Entender/Compreender)" },
            { sent: "I find it **helpful** to use flashcards.", word: "helpful", options: ["Útil", "Chato", "Difícil", "Caro"], a: "Útil", def: "Giving or ready to give help. (Útil/Ajuda)" },
            { sent: "**Currently**, I am focusing on my writing.", word: "currently", options: ["Raramente", "Atualmente", "Antigamente", "Geralmente"], a: "Atualmente", def: "At the present time. (Atualmente/No momento)" },
            { sent: "Please **review** your notes before the exam.", word: "review", options: ["Revisar", "Apagar", "Criar", "Perder"], a: "Revisar", def: "To examine or assess something formally. (Revisar)" },
            { sent: "Everyone has a unique learning **style**.", word: "style", options: ["Estilo", "Professor", "Escola", "Livro"], a: "Estilo", def: "An individual's unique approach to learning. (Estilo)" },
            { sent: "Constant **practice** leads to perfection.", word: "practice", options: ["Estudo", "Prática", "Preguiça", "Teoria"], a: "Prática", def: "The actual application or use of an idea or method. (Prática)" },
            { sent: "That sounds **interesting**!", word: "interesting", options: ["Chato", "Difícil", "Interessante", "Comum"], a: "Interessante", def: "Arousing curiosity or interest. (Interessante)" },
            { sent: "What **works** for you when you need to focus?", word: "works", options: ["Trabalha", "Funciona", "Corre", "Falha"], a: "Funciona", def: "To produce the desired effect or result. (Funciona)" },
            { sent: "I **always** do my homework after school.", word: "always", options: ["Sempre", "Nunca", "Às vezes", "Raramente"], a: "Sempre", def: "At all times; on all occasions. (Sempre)" },
            { sent: "He **never** misses a lecture.", word: "never", options: ["Sempre", "Frequentemente", "Nunca", "Geralmente"], a: "Nunca", def: "At no time in the past or future. (Nunca)" },
            { sent: "We **often** watch videos to learn English.", word: "often", options: ["Raramente", "Frequentemente", "Nunca", "Uma vez"], a: "Frequentemente", def: "Frequently; many times. (Frequentemente)" },
            { sent: "**Sometimes** I prefer to study in the library.", word: "sometimes", options: ["Sempre", "Nunca", "Às vezes", "Atualmente"], a: "Às vezes", def: "Occasionally; rather than all the time. (Às vezes)" },
            { sent: "She **rarely** uses a dictionary.", word: "rarely", options: ["Sempre", "Raramente", "Frequentemente", "Diariamente"], a: "Raramente", def: "Not often; seldom. (Raramente)" },
            { sent: "I am **reading** a long book this week.", word: "reading", options: ["Escrevendo", "Lendo", "Falando", "Ouvindo"], a: "Lendo", def: "Looking at and understanding written matter. (Lendo)" },
            { sent: "What are you **working** on?", word: "working", options: ["Estudando/Trabalhando", "Brincando", "Comendo", "Dormindo"], a: "Estudando/Trabalhando", def: "Engaged in physical or mental activity for a purpose. (Trabalhando)" },
            { sent: "The **method** she uses is very modern.", word: "method", options: ["Método", "Lugar", "Pretexto", "Plano"], a: "Método", def: "A particular form of procedure for accomplishing something. (Método)" },
            { sent: "You must **listen** carefully to the pronunciation.", word: "listen", options: ["Falar", "Escutar", "Ver", "Ler"], a: "Escutar", def: "To give one's attention to a sound. (Escutar)" },
            { sent: "This **technique** helps you speak more fluently.", word: "technique", options: ["Técnica", "Livro", "Matéria", "Prova"], a: "Técnica", def: "A way of carrying out a particular task. (Técnica)" },
            { sent: "I need a quiet **place** to concentrate.", word: "place", options: ["Lugar", "Tempo", "Amigo", "Caneta"], a: "Lugar", def: "A particular position or point in space. (Lugar)" },
            { sent: "My **goal** is to be fluent by the end of the year.", word: "goal", options: ["Medo", "Objetivo / Meta", "Problema", "Hobby"], a: "Objetivo / Meta", def: "The object of a person's ambition or effort. (Objetivo/Meta)" },
            { sent: "I use **flashcards** to study new verbs.", word: "flashcards", options: ["Cadernos", "Cartões de memória", "Computadores", "Canetas"], a: "Cartões de memória", def: "Cards used to memorize information. (Cartões de memória)" },
            { sent: "**Metacognition** means thinking about your thinking.", word: "metacognition", options: ["Metacognição", "Memória rápida", "Inteligência", "Estudo"], a: "Metacognição", def: "Awareness of one's own thought processes. (Metacognição)" },
            { sent: "I **usually** listen to podcasts in English.", word: "usually", options: ["Geralmente", "Atualmente", "Nunca", "Ontem"], a: "Geralmente", def: "Under normal conditions; generally. (Geralmente)" },
            { sent: "Don't be **afraid** to make mistakes.", word: "afraid", options: ["Feliz", "Com medo / receio", "Animado", "Cansado"], a: "Com medo / receio", def: "Feeling fear or anxiety; frightened. (Receio/Medo)" },
            { sent: "**Motivation** is key when you study.", word: "motivation", options: ["Motivação", "Disciplina", "Inteligência", "Dinheiro"], a: "Motivação", def: "The reason one has for acting in a particular way. (Motivação)" },
            { sent: "This **task** is very simple to complete.", word: "task", options: ["Tarefa", "Carreira", "Opinião", "Evidência"], a: "Tarefa", def: "A piece of work to be done or undertaken. (Tarefa)" },
            { sent: "I am **currently** looking for a study buddy.", word: "currently", options: ["Raramente", "Atualmente / No momento", "Sempre", "Nunca"], a: "Atualmente / No momento", def: "At the present time; now. (Atualmente)" },
            { sent: "It is **essential** to practice every day.", word: "essential", options: ["Essencial / Vital", "Chato", "Opcional", "Caro"], a: "Essencial / Vital", def: "Absolutely necessary; extremely important. (Essencial)" }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 ITEMS) ---
        5: [
            { sent: "**Always I** study in the library.", correct: "I always" },
            { sent: "She **is read** a book at the moment.", correct: "is reading" },
            { sent: "**To study** hard for your exam!", correct: "Study" },
            { sent: "We **study** right now, don't disturb us.", correct: "are studying" },
            { sent: "He **reads often** English articles.", correct: "often reads" },
            { sent: "I **usually am** happy.", correct: "am usually" },
            { sent: "**Not forget** your notebook!", correct: "Don't forget" },
            { sent: "They **are work** on a project currently.", correct: "are working" },
            { sent: "Sarah **don't** usually use videos.", correct: "doesn't" },
            { sent: "**Listen you** to the teacher!", correct: "Listen" },
            { sent: "What **you are** doing right now?", correct: "are you" },
            { sent: "I **speak never** Portuguese in class.", correct: "never speak" },
            { sent: "She **currently is** watching a YouTuber.", correct: "is currently" },
            { sent: "**Do** he usually repeat the words?", correct: "Does" },
            { sent: "We **are always study** in the morning.", correct: "always study" },
            { sent: "**Is raining** today, so stay home.", correct: "It is raining" },
            { sent: "I **am listen** to music every day.", correct: "listen" },
            { sent: "**Not be** afraid to fail.", correct: "Don't be" },
            { sent: "They **rarely are** late.", correct: "are rarely" },
            { sent: "**Is you** learning shadowing now?", correct: "Are you" },
            { sent: "I **usually am** busy at 8 PM.", correct: "am usually" },
            { sent: "**Reads** the text carefully!", correct: "Read" },
            { sent: "He **is study** French currently.", correct: "is studying" },
            { sent: "We **not are** working today.", correct: "are not" },
            { sent: "She **always is** helpful.", correct: "is always" },
            { sent: "**Do** the app work effectively?", correct: "Does" },
            { sent: "I **am not understanding** this rule.", correct: "don't understand" },
            { sent: "**Don't talking** while I am speaking!", correct: "Don't talk" },
            { sent: "They **visit often** the library.", correct: "often visit" },
            { sent: "**I am** doing this correctly?", correct: "Am I" },
            { sent: "I **no like** studying with noise.", correct: "don't like" },
            { sent: "Sarah **is watches** a movie right now.", correct: "is watching" },
            { sent: "**Practice you** your pronunciation!", correct: "Practice" },
            { sent: "He **never is** bored in class.", correct: "is never" },
            { sent: "We **usually are having** a meeting.", correct: "usually have" },
            { sent: "What **do he** doing at the moment?", correct: "is he" },
            { sent: "**No stop** practicing!", correct: "Don't stop" },
            { sent: "I **study currently** for my essay.", correct: "am currently studying" },
            { sent: "She **is always** late.", correct: "is always" },
            { sent: "They **sometimes are** tired.", correct: "are sometimes" }
        ],



        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Group 1: Current Actions (Question to Answer)
            { pairs: [{a: "What are you working on right now?", b: "I am writing an essay for my history class."}, {a: "Are you listening to the new podcast?", b: "No, I am watching a video by a YouTuber."}, {a: "Is Celine reading the article at the moment?", b: "Yes, she is studying the new vocabulary."}, {a: "Why are they wearing headphones in class?", b: "Because they are practicing the shadowing technique."}, {a: "Am I improving my English skills?", b: "Yes, your pronunciation is getting much better!"}] },
            // Group 2: Routines & Habits
            { pairs: [{a: "Do you always watch movies with subtitles?", b: "Yes, it is very effective for my learning."}, {a: "How often do you review your notes?", b: "I usually review them twice a week."}, {a: "Does Albert speak French at home?", b: "No, he rarely speaks it outside of school."}, {a: "What do you usually do before class?", b: "I usually watch a video to motivate myself."}, {a: "Do they often study in the library?", b: "Yes, they need silence to concentrate."}] },
            // Group 3: Learning Preferences
            { pairs: [{a: "What works for you when learning verbs?", b: "Using flashcards works very well for me."}, {a: "Do you find it helpful to record your voice?", b: "Yes, I can hear my mistakes and improve."}, {a: "Which learning style do you prefer?", b: "I prefer a visual style with charts and images."}, {a: "Why do you rarely use flashcards?", b: "Because I find them a bit distracting."}, {a: "Does Sarah enjoy studying by herself?", b: "Yes, she says she is more efficient alone."}] },
            // Group 4: Academic Advice (Imperatives)
            { pairs: [{a: "How can I improve my grades?", b: "Study hard and review your lessons every day!"}, {a: "Should I translate every word?", b: "No, try to understand the context instead."}, {a: "What is the best way to learn lyrics?", b: "Listen to the song and read at the same time."}, {a: "Can you help me with this task?", b: "Sure! Look at the board and follow my instructions."}, {a: "Is this study method effective?", b: "Yes, use it however you find most helpful."}] },
            // Group 5: Media & Tools
            { pairs: [{a: "Why are you reading the lyrics now?", b: "Because I want to sing along and practice speaking."}, {a: "Did you find the information for the essay?", b: "Yes, I am currently reading a great article online."}, {a: "Is that YouTuber funny?", b: "Yes, he is hilarious and very educated."}, {a: "How useful is this language app?", b: "It is highly effective for memorizing words."}, {a: "Are the subtitles in Portuguese or English?", b: "They are in English to help us learn faster."}] },
            // Group 6: Frequency & Time
            { pairs: [{a: "When is the next English lecture?", b: "Currently, it is scheduled for tomorrow morning."}, {a: "How often do we have school assemblies?", b: "We usually have them once a month."}, {a: "Are you busy at the moment?", b: "Yes, I am currently writing a long report."}, {a: "When do you usually wake up?", b: "I always wake up early, around 6:30 AM."}, {a: "Does he ever miss a class?", b: "No, he is never late and never misses school."}] },
            // Group 7: Metacognition & Strategy
            { pairs: [{a: "Do you understand the grammar rule?", b: "Not yet, I am currently reviewing the examples."}, {a: "What is your strategy for the test?", b: "I plan to review all my notes tonight."}, {a: "Are you thinking about your learning process?", b: "Yes, metacognition helps me study better."}, {a: "Why is discipline so important?", b: "Because it makes your study time more efficient."}, {a: "How do you memorize irregular verbs?", b: "I repeat them loudly until I remember them."}] },
            // Group 8: Pronunciation & Skills
            { pairs: [{a: "How is your pronunciation these days?", b: "It is improving because I practice every day."}, {a: "What is the most difficult skill for you?", b: "In my opinion, writing essays is the hardest."}, {a: "Are you practicing shadowing today?", b: "Yes, I am repeating the YouTuber's sentences now."}, {a: "Do you use videos to improve listening?", b: "Yes, I watch them twice a week."}, {a: "Why are you recording yourself?", b: "To check if my mouth movements are correct."}] },
            // Group 9: Motivation & Effort
            { pairs: [{a: "What motivates you to study?", b: "I want to have a successful global career."}, {a: "Are you trying your best in this task?", b: "Yes, I am working very carefully right now."}, {a: "Why do you like English so much?", b: "Because it connects me to the whole world."}, {a: "Does this strategy work for everyone?", b: "No, everyone has a different style."}, {a: "Is it hard to learn by yourself?", b: "It is a challenge, but it is very rewarding."}] },
            // Group 10: Comparison of States
            { pairs: [{a: "Why are you so quiet today?", b: "I am currently thinking about my future plans."}, {a: "Is the wifi working effectively now?", b: "No, it is currently loading very slowly."}, {a: "Are the students focused on the lecture?", b: "Yes, they are listening to the speaker attentively."}, {a: "Why is Sarah happy?", b: "Because she just improved her grades."}, {a: "Is this article useful for our project?", b: "Yes, it contains a lot of interesting evidence."}] },
            // Group 11: Habit vs. Now (Sentence Completion)
            { pairs: [{a: "I usually study in the library, but...", b: "...today I am studying at home."}, {a: "She always reads books, but...", b: "...currently she is watching a movie."}, {a: "They often play soccer, but...", b: "...right now they are doing homework."}, {a: "We usually listen to music, but...", b: "...at the moment we need silence."}, {a: "He never speaks in class, but...", b: "...now he is giving a great speech."}] },
            // Group 12: Adverb Position
            { pairs: [{a: "I am always...", b: "...ready to learn something new."}, {a: "She usually...", b: "...takes notes during the lecture."}, {a: "They are rarely...", b: "...late for the English class."}, {a: "He often...", b: "...practices his pronunciation at night."}, {a: "We never...", b: "...forget to review our goals."}] },
            // Group 13: Imperatives/Advice
            { pairs: [{a: "Don't forget to...", b: "...review your notes before the exam."}, {a: "Read the text...", b: "...carefully to find the main idea."}, {a: "Practice the...", b: "...shadowing technique every single day."}, {a: "Always watch...", b: "...movies with English subtitles."}, {a: "Use your...", b: "...imagination to write a creative essay."}] },
            // Group 14: Metacognition & Progress
            { pairs: [{a: "Metacognition helps you...", b: "...understand your own thinking process."}, {a: "Improving your skills...", b: "...requires constant and dedicated practice."}, {a: "Writing down words...", b: "...is a very effective study strategy."}, {a: "Recording your voice...", b: "...is a helpful way to improve."}, {a: "Everyone has...", b: "...a unique and different learning style."}] },
            // Group 15: Media & Tools
            { pairs: [{a: "The YouTuber explains...", b: "...the grammar rules very clearly."}, {a: "Reading an article...", b: "...is better than watching a movie."}, {a: "Listening to lyrics...", b: "...helps you learn popular expressions."}, {a: "Using an app...", b: "...makes learning more interactive and fun."}, {a: "Subtitles are helpful...", b: "...when you don't understand the audio."}] },
            // Group 16: Present Continuous
            { pairs: [{a: "Currently, I am...", b: "...focusing on my writing technique."}, {a: "At the moment, she is...", b: "...memorizing a long list of words."}, {a: "Right now, they are...", b: "...discussing the project in the hallway."}, {a: "We are currently...", b: "...looking for information online."}, {a: "Is the computer...", b: "...loading the video effectively?"}] },
            // Group 17: Frequency/Time
            { pairs: [{a: "I visit my grandma...", b: "...twice a month on weekends."}, {a: "The class starts...", b: "...at 8:00 AM every morning."}, {a: "I wake up...", b: "...at 7 o'clock every day."}, {a: "We have tests...", b: "...every week to check our progress."}, {a: "She reads...", b: "...comics once a week for fun."}] },
            // Group 18: Academic Concepts
            { pairs: [{a: "A good method...", b: "...produces a desired and successful result."}, {a: "An efficient student...", b: "...does not waste any study time."}, {a: "A difficult task...", b: "...requires a lot of concentration."}, {a: "Visual learners...", b: "...understand better with images and charts."}, {a: "Auditory learners...", b: "...prefer to listen to lectures and music."}] },
            // Group 19: Metacognition/Mental
            { pairs: [{a: "Try to memorize...", b: "...the mouth movements of the speaker."}, {a: "You must understand...", b: "...how the grammar works in context."}, {a: "I find it...", b: "...helpful to study in a quiet place."}, {a: "It is interesting...", b: "...to learn about different cultures."}, {a: "Motivation is...", b: "...the reason why we work so hard."}] },
            // Group 20: Simultaneous Actions
            { pairs: [{a: "While I am studying,...", b: "...I don't answer my phone."}, {a: "She is reading while...", b: "...she is waiting for the bus."}, {a: "They are talking while...", b: "...they are walking to the library."}, {a: "I am listening while...", b: "...I am taking notes in my book."}, {a: "We are learning while...", b: "...we are watching the YouTuber."}] },
            // Group 21: Translation A (Portuguese)
            { pairs: [{a: "I always do my homework.", b: "Eu sempre faço minha lição de casa."}, {a: "She usually studies here.", b: "Ela geralmente estuda aqui."}, {a: "We often watch movies.", b: "Nós frequentemente assistimos filmes."}, {a: "They sometimes read lyrics.", b: "Eles às vezes leem letras de música."}, {a: "He rarely misses a class.", b: "Ele raramente perde uma aula."}] },
            // Group 22: Translation B
            { pairs: [{a: "I am studying now.", b: "Eu estou estudando agora."}, {a: "She is sleeping right now.", b: "Ela está dormindo agora mesmo."}, {a: "They are working currently.", b: "Eles estão trabalhando atualmente."}, {a: "We are busy at the moment.", b: "Nós estamos ocupados no momento."}, {a: "Are you learning today?", b: "Você está aprendendo hoje?"}] },
            // Group 23: Translation C (Imperatives)
            { pairs: [{a: "Study hard!", b: "Estude muito!"}, {a: "Don't speak Portuguese.", b: "Não fale português."}, {a: "Read the article.", b: "Leia o artigo."}, {a: "Listen to the teacher.", b: "Escute o professor."}, {a: "Review your notes.", b: "Revise suas anotações."}] },
            // Group 24: Translation D
            { pairs: [{a: "What works for you?", b: "O que funciona para você?"}, {a: "That sounds interesting!", b: "Isso parece interessante!"}, {a: "I find it helpful to...", b: "Eu acho útil..."}, {a: "In my opinion.", b: "Na minha opinião."}, {a: "That makes sense.", b: "Isso faz sentido."}] },
            // Group 25: Translation E
            { pairs: [{a: "Shadowing technique.", b: "Técnica de sombreamento (repetição)."}, {a: "Learning style.", b: "Estilo de aprendizagem."}, {a: "Study method.", b: "Método de estudo."}, {a: "Effective strategy.", b: "Estratégia eficaz."}, {a: "Efficient time.", b: "Tempo eficiente."}] },
            // Group 26: Translation F (Adverbs)
            { pairs: [{a: "Once a week.", b: "Uma vez por semana."}, {a: "Twice a month.", b: "Duas vezes por mês."}, {a: "Every day.", b: "Todo dia."}, {a: "Every month.", b: "Todo mês."}, {a: "Frequently.", b: "Frequentemente."}] },
            // Group 27: Translation G
            { pairs: [{a: "Pronunciation and skill.", b: "Pronúncia e habilidade."}, {a: "Subtitle and lyrics.", b: "Legenda e letra (música)."}, {a: "Article and essay.", b: "Artigo e redação."}, {a: "Goal and plan.", b: "Meta e plano."}, {a: "Practice and review.", b: "Prática e revisão."}] },
            // Group 28: Translation H
            { pairs: [{a: "To memorize and to understand.", b: "Memorizar e entender."}, {a: "To improve and to grow.", b: "Melhorar e crescer."}, {a: "To listen and to speak.", b: "Escutar e falar."}, {a: "To write and to read.", b: "Escrever e ler."}, {a: "To focus and to learn.", b: "Focar e aprender."}] },
            // Group 29: Translation I
            { pairs: [{a: "Highly effective.", b: "Altamente eficaz."}, {a: "Very helpful.", b: "Muito útil."}, {a: "Quite distracting.", b: "Bastante distrativo."}, {a: "Extremely difficult.", b: "Extremamente difícil."}, {a: "Mostly silent.", b: "Principalmente silencioso."}] },
            // Group 30: Translation J
            { pairs: [{a: "I never use videos.", b: "Eu nunca uso vídeos."}, {a: "I currently prefer to read.", b: "Atualmente eu prefiro ler."}, {a: "It helps me focus.", b: "Isso me ajuda a focar."}, {a: "Don't be afraid to fail.", b: "Não tenha medo de falhar."}, {a: "Try a different technique.", b: "Tente uma técnica diferente."}] },
            // Group 31: Definitions A (English)
            { pairs: [{a: "Metacognition", b: "Thinking about your own learning process."}, {a: "Strategy", b: "A plan used to reach a specific objective."}, {a: "Skill", b: "The ability to do something well through practice."}, {a: "Goal", b: "Something you want to achieve in the future."}, {a: "Success", b: "Achieving the result you wanted."}] },
            // Group 32: Definitions B
            { pairs: [{a: "Shadowing", b: "A technique of repeating an audio immediately."}, {a: "Pronunciation", b: "The correct way to say a word."}, {a: "Flashcards", b: "Small cards used to memorize information."}, {a: "Subtitle", b: "The text shown at the bottom of a screen."}, {a: "Lyrics", b: "The words written for a song."}] },
            // Group 33: Definitions C
            { pairs: [{a: "Article", b: "A piece of non-fiction writing in a magazine."}, {a: "Essay", b: "A short piece of academic writing on a topic."}, {a: "Lecture", b: "A formal talk given by a teacher or expert."}, {a: "Summary", b: "A short version of a longer text."}, {a: "Review", b: "To look back at what you learned."}] },
            // Group 34: Definitions D
            { pairs: [{a: "Effective", b: "Producing the result that was intended."}, {a: "Efficient", b: "Achieving goals without wasting time or energy."}, {a: "Useful", b: "Something that helps you complete a task."}, {a: "Motivated", b: "Feeling eager and having a reason to act."}, {a: "Confident", b: "Feeling sure about your own abilities."}] },
            // Group 35: Definitions E (Adverbs)
            { pairs: [{a: "Always", b: "Happening 100% of the time."}, {a: "Usually", b: "Happening in most situations (around 90%)."}, {a: "Often", b: "Happening many times or frequently."}, {a: "Sometimes", b: "Happening occasionally (around 50%)."}, {a: "Never", b: "Happening 0% of the time."}] },
            // Group 36: Definitions F
            { pairs: [{a: "Currently", b: "Happening at the present time."}, {a: "Immediately", b: "Happening right now, without delay."}, {a: "Rarely", b: "Not happening very often; seldom."}, {a: "Carefully", b: "Doing something with great attention to detail."}, {a: "Effectively", b: "Doing something in a way that works well."}] },
            // Group 37: Definitions G (Styles)
            { pairs: [{a: "Visual style", b: "Learning best by seeing images and charts."}, {a: "Auditory style", b: "Learning best by listening to sounds."}, {a: "Kinesthetic style", b: "Learning best by doing physical actions."}, {a: "Individual style", b: "Learning best when working by yourself."}, {a: "Social style", b: "Learning best when working with a group."}] },
            // Group 38: Definitions H (Verbs)
            { pairs: [{a: "To improve", b: "To make something better than it was."}, {a: "To memorize", b: "To put information into long-term memory."}, {a: "To understand", b: "To know the meaning or reason of something."}, {a: "To practice", b: "To do an activity repeatedly to get better."}, {a: "To focus", b: "To give all your attention to one task."}] },
            // Group 39: Definitions I
            { pairs: [{a: "YouTuber", b: "A person who creates video content online."}, {a: "Podcast", b: "A digital audio program you can listen to."}, {a: "Tutorial", b: "A lesson that teaches you how to do something."}, {a: "Media", b: "Tools like TV, internet, and radio."}, {a: "Digital native", b: "A person who grew up using technology."}] },
            // Group 40: Definitions J
            { pairs: [{a: "Challenge", b: "A difficult task that tests your ability."}, {a: "Mistake", b: "Something done incorrectly or wrongly."}, {a: "Effort", b: "The physical or mental work you put in."}, {a: "Concentration", b: "Directing all your thought to one thing."}, {a: "Discipline", b: "The ability to follow rules and stay consistent."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 ITEMS) ---
        7: [
            { q: "How often do you use the shadowing technique?", options: ["I practice it almost every day.", "It is a very visual style.", "I am writing an essay."], a: "I practice it almost every day." },
            { q: "What are you currently working on to improve English?", options: ["I am reading an academic article.", "I always watch videos.", "My method is efficient."], a: "I am reading an academic article." },
            { q: "How effective is using flashcards for words?", options: ["It is highly effective for active recall.", "I use them twice a month.", "They are in my backpack."], a: "It is highly effective for active recall." },
            { q: "Who is teaching you the best strategies?", options: ["I am learning from a famous YouTuber.", "My pronunciation is getting better.", "It is a difficult task."], a: "I am learning from a famous YouTuber." },
            { q: "When do you usually review your notes?", options: ["I usually review them on Sunday evenings.", "I am reviewing them at the moment.", "My notes are very colorful."], a: "I usually review them on Sunday evenings." },
            { q: "How useful do you find it to record your own voice?", options: ["I find it helpful for identifying mistakes.", "I record it whenever I have free time.", "My voice sounds interesting."], a: "I find it helpful for identifying mistakes." },
            { q: "Why are you wearing headphones right now?", options: ["Because I am listening to a podcast.", "Because I always wear a costume.", "In the library near the pitch."], a: "Because I am listening to a podcast." },
            { q: "Which learning style works best for you?", options: ["The visual style is much better for me.", "I am choosing a new career path.", "Whoever studies hard succeeds."], a: "The visual style is much better for me." },
            { q: "How many hours a day do you spend studying?", options: ["I usually spend about three hours.", "I am working on a project.", "Motivation is essential."], a: "I usually spend about three hours." },
            { q: "How long does it take you to write an essay?", options: ["It usually takes me two or three hours.", "I am writing about science.", "Since I am very efficient."], a: "It usually takes me two or three hours." },
            { q: "Where are the students discussing strategies?", options: ["They are debating them in the library.", "They discuss them once a week.", "Their strategies are effective."], a: "They are debating them in the library." },
            { q: "How often does Sarah miss her practice?", options: ["She rarely misses it; she is dedicated.", "She is practicing at the moment.", "Her pronunciation is perfect."], a: "She rarely misses it; she is dedicated." },
            { q: "What is the most difficult task today?", options: ["I am trying to memorize a list of lyrics.", "I usually prefer to read articles.", "My task is very efficient."], a: "I am trying to memorize a list of lyrics." },
            { q: "Why is it helpful to watch movies with subtitles?", options: ["It helps connect sound to the written word.", "I am watching a movie now.", "It is a traditional method."], a: "It helps connect sound to the written word." },
            { q: "How important is metacognition for a student?", options: ["It is vital to understand your own learning.", "Metacognition is a pronoun.", "I am currently thinking about it."], a: "It is vital to understand your own learning." },
            { q: "Whose study method is more efficient?", options: ["I think mine is better; I use active recall.", "Albert is a digital native.", "We are studying together now."], a: "I think mine is better; I use active recall." },
            { q: "How often do you check your progress?", options: ["I usually check my stats every Sunday.", "The app is very effective.", "I am downloading the update."], a: "I usually check my stats every Sunday." },
            { q: "Why are you focusing on the mouth movements?", options: ["Because I am practicing shadowing.", "Because I like the costume.", "At the moment."], a: "Because I am practicing shadowing." },
            { q: "When is the best time for you to concentrate?", options: ["I find that I am most efficient at night.", "The essay is about global influence.", "I have to write it by myself."], a: "I find that I am most efficient at night." },
            { q: "How fast can you learn the lyrics to a song?", options: ["I can usually memorize them in two days.", "I am listening to music now.", "The lyrics are very interesting."], a: "I can usually memorize them in two days." },
            { q: "Who motivates you to study every day?", options: ["My teacher, Mrs. Canales, is my biggest motivation.", "I am very motivated currently.", "Because it is a global language."], a: "My teacher, Mrs. Canales, is my biggest motivation." },
            { q: "What works for you when you are distracted?", options: ["I put on headphones and listen to white noise.", "I am currently distracted.", "Technology is very useful."], a: "I put on headphones and listen to white noise." },
            { q: "How often do you review the grammar rules?", options: ["I rarely review them, which is a bad habit.", "They are currently on page 50.", "Because they are difficult."], a: "I rarely review them, which is a bad habit." },
            { q: "Why are you recording your speech today?", options: ["Because I want to improve my pronunciation.", "I am using an expensive microphone.", "At 9:00 AM."], a: "Because I want to improve my pronunciation." },
            { q: "How far have you come in your journey this year?", options: ["I have improved my speaking significantly.", "I am traveling to England soon.", "Because I study hard."], a: "I have improved my speaking significantly." },
            { q: "What are the students doing in the hallway?", options: ["They are currently discussing study plans.", "They usually have breakfast there.", "They are very educated people."], a: "They are currently discussing study plans." },
            { q: "How expensive is the new software?", options: ["It is expensive, but highly effective.", "I am using it right now.", "It has many interesting articles."], a: "It is expensive, but highly effective." },
            { q: "Who is currently giving the lecture?", options: ["A specialist in learning styles is speaking.", "The lecture is two hours long.", "Whoever wants to listen."], a: "A specialist in learning styles is speaking." },
            { q: "How long have you been practicing listening?", options: ["I have been listening for over an hour.", "My skills are improving lately.", "It is a very useful strategy."], a: "I have been listening for over an hour." },
            { q: "Why is discipline more important than talent?", options: ["Because consistent practice is how you grow.", "Because I am an auditory learner.", "On Fridays."], a: "Because consistent practice is how you grow." },
            { q: "How many new words do you memorize per week?", options: ["I try to memorize at least thirty words.", "I am using flashcards to help me.", "They are very useful for my essay."], a: "I try to memorize at least thirty words." },
            { q: "What sounds interesting about this method?", options: ["The fact that it uses games to teach grammar.", "I am currently learning it.", "It is very efficient."], a: "The fact that it uses games to teach grammar." },
            { q: "How often do you use English subtitles?", options: ["I always use them to avoid missing dialogue.", "They are at the bottom of the screen.", "I am watching a movie currently."], a: "I always use them to avoid missing dialogue." },
            { q: "Why is she currently reading the song lyrics?", options: ["Because she is trying to understand vocabulary.", "She usually listens to pop music.", "The lyrics are beautiful."], a: "Because she is trying to understand vocabulary." },
            { q: "Where do you find the most helpful articles?", options: ["I usually find them on educational websites.", "They are very long and difficult.", "I am reading one now."], a: "I usually find them on educational websites." },
            { q: "How useful is it to have a study buddy?", options: ["It is helpful for discussing difficult topics.", "I am currently looking for one.", "He is my best friend."], a: "It is helpful for discussing difficult topics." },
            { q: "Who are you working with on the group task?", options: ["I am currently working with Celine and Albert.", "The task is very challenging.", "We usually work in the library."], a: "I am currently working with Celine and Albert." },
            { q: "How often do you use your smartphone for study?", options: ["I use it several times a day to check my app.", "It has a very big screen.", "I am currently using it."], a: "I use it several times a day to check my app." },
            { q: "Why do you prefer the auditory learning style?", options: ["Because I remember things better when I hear them.", "I am listening to a lecture.", "It is very effective for me."], a: "Because I remember things better when I hear them." },
            { q: "How important is it to stay focused?", options: ["It is essential for understanding the main idea.", "The lecture is about innovation.", "I am staying focused now."], a: "It is essential for understanding the main idea." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 ITEMS) ---
        8: [
            { sent: "My teacher gave me a very interesting **sandwich** to read.", wrong: "sandwich", options: ["article", "pitch", "storm", "costume"], a: "article" },
            { sent: "I am currently **eating** a new strategy to improve grades.", wrong: "eating", options: ["using/trying", "hearing", "surprising", "sleeping"], a: "using/trying" },
            { sent: "Sarah is a visual learner; she prefers to study by **hearing** podcasts.", wrong: "hearing", options: ["watching/seeing", "tasting", "jumping", "raining"], a: "watching/seeing" },
            { sent: "I use **flashcards** to play soccer on the pitch.", wrong: "flashcards", options: ["sneakers/shoes", "lyrics", "adverbs", "subtitles"], a: "sneakers/shoes" },
            { sent: "Don't forget to turn on the **lyrics** to read dialogue in the movie.", wrong: "lyrics", options: ["subtitles", "strategy", "career", "pretext"], a: "subtitles" },
            { sent: "He is a very **lazy** student; he studies 5 hours every day.", wrong: "lazy", options: ["efficient/dedicated", "sleepy", "traditional", "rude"], a: "efficient/dedicated" },
            { sent: "I had a **storm** moment and finally understood the rule.", wrong: "storm", options: ["lightbulb", "career", "pitch", "burger"], a: "lightbulb" },
            { sent: "You must **ignore** your notes before the big exam.", wrong: "ignore", options: ["review", "lose", "forget", "hide"], a: "review" },
            { sent: "I am currently **writing** to music to help me concentrate.", wrong: "writing", options: ["listening", "speaking", "reading", "jumping"], a: "listening" },
            { sent: "The **pronunciation** of the book was 200 pages long.", wrong: "pronunciation", options: ["length/content", "subtitle", "lyrics", "frequency"], a: "length/content" },
            { sent: "**Metacognition** is the study of how birds fly in the sky.", wrong: "metacognition", options: ["Biology/Ornithology", "A burger", "A company", "A storm"], a: "Biology/Ornithology" },
            { sent: "I never use **flashcards**; I use them every day.", wrong: "never", options: ["always", "rarely", "currently", "today"], a: "always" },
            { sent: "The professor gave a long **burger** about English importance.", wrong: "burger", options: ["lecture/speech", "essay", "subtitle", "lyrics"], a: "lecture/speech" },
            { sent: "I am currently **studying** a movie on YouTube by a famous influencer.", wrong: "studying", options: ["watching", "hearing", "tasting", "raining"], a: "watching" },
            { sent: "Shadowing is a **cooking** technique for the kitchen.", wrong: "cooking", options: ["language/speaking", "visual", "stormy", "global"], a: "language/speaking" },
            { sent: "My learning style is a **ham and cheese sandwich**.", wrong: "ham and cheese sandwich", options: ["visual/auditory", "career path", "reflexive pronoun", "influence"], a: "visual/auditory" },
            { sent: "I use my **headphones** to type my essay faster on the computer.", wrong: "headphones", options: ["keyboard", "lyrics", "subtitles", "flashcards"], a: "keyboard" },
            { sent: "He is highly **ineffective**; he passed all his exams with a 10.", wrong: "ineffective", options: ["effective/efficient", "lazy", "traditional", "distracted"], a: "effective/efficient" },
            { sent: "Please **explain** me more about your study habits.", wrong: "explain", options: ["tell", "hear", "memorize", "agree"], a: "tell" },
            { sent: "I find it **helpful** to fail all my tests.", wrong: "helpful", options: ["terrible/useless", "interesting", "efficient", "effective"], a: "terrible/useless" },
            { sent: "I **currently** study every day at 7 AM; it is my routine.", wrong: "currently", options: ["usually/always", "rarely", "never", "at the moment"], a: "usually/always" },
            { sent: "I am **practicing** an essay for history class right now.", wrong: "practicing", options: ["writing/reading", "hearing", "tasting", "raining"], a: "writing/reading" },
            { sent: "Don't be **confident**; the test is very easy!", wrong: "confident", options: ["afraid/scared/worried", "happy", "efficient", "motivated"], a: "afraid/scared/worried" },
            { sent: "I use **subtitles** to study the lyrics of the new song.", wrong: "subtitles", options: ["flashcards", "essays", "careers", "storms"], a: "flashcards" },
            { sent: "The YouTuber **teaches** me how to make a burger in English class.", wrong: "teaches", options: ["pronunciation/grammar", "costume", "pitch", "storm"], a: "pronunciation/grammar" },
            { sent: "I am **currently** liking pop music since I was ten.", wrong: "currently", options: ["always/usually", "right now", "at the moment", "currently"], a: "always/usually" },
            { sent: "The **strategy** was very loud; I couldn't hear the teacher.", wrong: "strategy", options: ["noise/lecture", "article", "essay", "lyrics"], a: "noise/lecture" },
            { sent: "Use your **imagination** to hit the ball on the soccer pitch.", wrong: "imagination", options: ["foot/skill", "pronoun", "strategy", "method"], a: "foot/skill" },
            { sent: "It is **essential** to never study if you want to pass.", wrong: "essential", options: ["useless", "necessary", "effective", "efficient"], a: "useless" },
            { sent: "I am **recording** my voice to taste the new pizza.", wrong: "recording", options: ["check/improve", "watch", "read", "write"], a: "check/improve" },
            { sent: "A lot of people are currently studying reflexive **burgers**.", wrong: "burgers", options: ["pronouns/grammar", "strategies", "methods", "techniques"], a: "pronouns/grammar" },
            { sent: "My **pronunciation** is visual; I love looking at maps.", wrong: "pronunciation", options: ["learning style", "career path", "global influence", "essay"], a: "learning style" },
            { sent: "I **always** am study at 8:00 PM.", wrong: "always", options: ["am always studying", "study always", "always am", "studying always"], a: "am always studying" },
            { sent: "This study **method** is very delicious with cheese and tomato.", wrong: "method", options: ["sandwich/burger", "strategy", "technique", "style"], a: "sandwich/burger" },
            { sent: "I **rarely** go to school; I am there from Monday to Friday.", wrong: "rarely", options: ["always/usually", "sometimes", "never", "currently"], a: "always/usually" },
            { sent: "I am **currently** preferring coffee over tea.", wrong: "currently", options: ["usually prefer", "am liking", "am knowing", "am understanding"], a: "usually prefer" },
            { sent: "The teacher gave us a new **task** to eat for lunch.", wrong: "task", options: ["sandwich/burger", "essay", "strategy", "pronoun"], a: "sandwich/burger" },
            { sent: "Metacognition helps you improve your **cooking** skills in English.", wrong: "cooking", options: ["learning/academic", "stormy", "reflexive", "global"], a: "learning/academic" },
            { sent: "I find it **helpful** to lose my backpack every day.", wrong: "helpful", options: ["annoying/difficult", "efficient", "effective", "interesting"], a: "annoying/difficult" },
            { sent: "Review the text carefully to find the **burger**!", wrong: "burger", options: ["answer/main idea", "pronoun", "strategy", "method"], a: "answer/main idea" }
        ],


        // --- TYPE 9: LISTEN AND ANSWER (40 ITEMS) ---
        9: [
            { audio: "What are you working on right now?", options: ["I am writing an essay for my history class.", "I usually study in the library.", "It is a blue textbook.", "No, I am not."], a: "I am writing an essay for my history class." },
            { audio: "How often do you review your notes before a test?", options: ["I usually review them twice a week.", "I am reviewing them at the moment.", "They are in my backpack.", "Yes, I do."], a: "I usually review them twice a week." },
            { audio: "Is the YouTuber currently explaining the grammar rules?", options: ["Yes, he is showing some great examples now.", "He usually teaches pronunciation.", "He is very funny and educated.", "On YouTube."], a: "Yes, he is showing some great examples now." },
            { audio: "What is your favorite study strategy for new vocabulary?", options: ["I find that using flashcards is very effective.", "I am studying biology today.", "In the afternoon.", "By myself."], a: "I find that using flashcards is very effective." },
            { audio: "How important is it to practice shadowing every day?", options: ["It is vital for improving your speaking skill.", "I am practicing it right now.", "It sounds very interesting.", "No, it isn't."], a: "It is vital for improving your speaking skill." },
            { audio: "Are the students currently discussing the project in the hallway?", options: ["Yes, they are debating the best method.", "They usually study in the classroom.", "The project is about technology.", "Twice a month."], a: "Yes, they are debating the best method." },
            { audio: "How often do you listen to podcasts in English?", options: ["I listen to them whenever I am on the bus.", "I am listening to one at the moment.", "They are highly effective for me.", "No, thank you."], a: "I listen to them whenever I am on the bus." },
            { audio: "Why are you recording your own voice right now?", options: ["Because I want to check my pronunciation.", "I record it once a week.", "It is a very helpful technique.", "Yes, I am."], a: "Because I want to check my pronunciation." },
            { audio: "When do you usually do your homework?", options: ["I always do it in the evening after dinner.", "I am doing it at the moment.", "It is very difficult today.", "In my bedroom."], a: "I always do it in the evening after dinner." },
            { audio: "Is Sarah currently reading the song lyrics?", options: ["Yes, she is trying to memorize the words.", "She usually listens to music.", "The lyrics are in English.", "No, she doesn't."], a: "Yes, she is trying to memorize the words." },
            { audio: "How often do you go to the library to study?", options: ["I rarely go there because I prefer home.", "I am going to the library now.", "It is a very quiet place.", "Twice."], a: "I rarely go there because I prefer home." },
            { audio: "What are you reading currently?", options: ["I am reading an article about AI technology.", "I always read books before bed.", "It is a very interesting topic.", "By herself."], a: "I am reading an article about AI technology." },
            { audio: "How effective is the shadowing technique for you?", options: ["It is extremely effective for my fluency.", "I practice it every morning.", "It is a modern strategy.", "Yes, it is."], a: "It is extremely effective for my fluency." },
            { audio: "Do you usually study by yourself or with a group?", options: ["I usually prefer to study by myself.", "I am studying with Celine now.", "Group study is interesting.", "No, I don't."], a: "I usually prefer to study by myself." },
            { audio: "What is the teacher currently explaining to the class?", options: ["She is explaining the use of reflexive pronouns.", "She usually explains grammar rules.", "She is a very nice person.", "In the classroom."], a: "She is explaining the use of reflexive pronouns." },
            { audio: "How often do you watch videos to learn English?", options: ["I often watch them on my tablet at night.", "I am watching a video currently.", "YouTubers are very helpful.", "Yes, I do."], a: "I often watch them on my tablet at night." },
            { audio: "Are you busy at the moment?", options: ["Yes, I am currently writing a school essay.", "I am usually busy on Mondays.", "My essay is about success.", "In my opinion."], a: "Yes, I am currently writing a school essay." },
            { audio: "Why do you need total silence when you study?", options: ["To help me focus and be more efficient.", "I usually study in the library.", "Because the music is loud.", "No, I don't."], a: "To help me focus and be more efficient." },
            { audio: "When does the English lecture usually start?", options: ["It always starts at 9:00 AM sharp.", "It is starting right now.", "The topic is very interesting.", "In the auditorium."], a: "It always starts at 9:00 AM sharp." },
            { audio: "How do you memorize long lists of vocabulary?", options: ["I find that writing them down is a good strategy.", "I am memorizing them now.", "They are extremely difficult.", "Twice a week."], a: "I find that writing them down is a good strategy." },
            { audio: "Is the wifi working effectively right now?", options: ["No, the video is currently loading very slowly.", "It usually works well in the morning.", "I need it to research my topic.", "On my laptop."], a: "No, the video is currently loading very slowly." },
            { audio: "How often do you review your goals for this week?", options: ["I usually review them every Monday morning.", "I am reviewing them at the moment.", "My goals are very ambitious.", "Yes, I am."], a: "I usually review them every Monday morning." },
            { audio: "What is Sarah doing on her tablet at the moment?", options: ["She is currently making digital flashcards.", "She always uses her tablet for school.", "It is a very modern device.", "Her name is Sarah."], a: "She is currently making digital flashcards." },
            { audio: "How important is a good study method for your success?", options: ["In my opinion, it is the most essential factor.", "My method is very efficient.", "I am currently following a new plan.", "No, it isn't."], a: "In my opinion, it is the most essential factor." },
            { audio: "Why are you currently repeating the YouTuber's sentences?", options: ["Because I am practicing my pronunciation.", "I usually watch his videos.", "He speaks very fastly.", "Yes, I am."], a: "Because I am practicing my pronunciation." },
            { audio: "How often do you read academic articles?", options: ["I rarely read them because they are difficult.", "I am reading one at the moment.", "They have a lot of evidence.", "On my smartphone."], a: "I rarely read them because they are difficult." },
            { audio: "Are you following the instructions carefully?", options: ["Yes, I am currently reading every step.", "I usually follow the teacher.", "The instructions are on the board.", "No, I am not."], a: "Yes, I am currently reading every step." },
            { audio: "When do you usually take a break from studying?", options: ["I always take a break at 4:00 PM.", "I am taking a break right now.", "Breaks are very important.", "In the cafeteria."], a: "I always take a break at 4:00 PM." },
            { audio: "How useful is the dictionary app on your phone?", options: ["I find it very helpful for translating words.", "I am using it at the moment.", "It is a free app.", "On my phone."], a: "I find it very helpful for translating words." },
            { audio: "Who is currently helping you with the essay?", options: ["My sister is currently assisting me with the research.", "I usually write essays by myself.", "It is a very long essay.", "After school."], a: "My sister is currently assisting me with the research." },
            { audio: "How often do you practice speaking English at home?", options: ["I never practice at home, only at school.", "I am practicing with my brother now.", "Speaking is a key skill.", "Yes, I do."], a: "I never practice at home, only at school." },
            { audio: "What are the students currently learning in class?", options: ["They are currently focusing on frequency adverbs.", "They usually learn grammar on Tuesdays.", "The lesson is very effective.", "In the classroom."], a: "They are currently focusing on frequency adverbs." },
            { audio: "Why are you currently looking for a quiet place?", options: ["Because I need to focus on my writing.", "I usually study in the library.", "It is very noisy here.", "At the moment."], a: "Because I need to focus on my writing." },
            { audio: "How long is the study session today?", options: ["It is currently scheduled for two hours.", "I have been studying all day.", "It is very effective.", "No, it isn't."], a: "It is currently scheduled for two hours." },
            { audio: "How often do you use subtitles when you watch movies?", options: ["I always use them to improve my comprehension.", "They are at the bottom of the screen.", "I am watching a movie currently.", "Yes, I am."], a: "I always use them to improve my comprehension." },
            { audio: "Is Celine currently using a new study method?", options: ["Yes, she is trying a technique called shadowing.", "She usually studies with Albert.", "Her method is very efficient.", "No, she doesn't."], a: "Yes, she is trying a technique called shadowing." },
            { audio: "How often do you review the new vocabulary words?", options: ["I review them every single night before bed.", "I am reviewing them at the moment.", "They are in my notebook.", "Yes, I do."], a: "I review them every single night before bed." },
            { audio: "What are you doing to improve your listening skill currently?", options: ["I am currently listening to a podcast in English.", "I usually watch movies with subtitles.", "Listening is an important skill.", "At school."], a: "I am currently listening to a podcast in English." },
            { audio: "Why do you find flashcards so effective?", options: ["Because they help me memorize information quickly.", "I am using them right now.", "They are very colorful.", "Twice a week."], a: "Because they help me memorize information quickly." },
            { audio: "How often does Albert watch tutorials online?", options: ["He watches them whenever he needs to learn a new skill.", "He is watching a tutorial at the moment.", "They are very informative.", "On his laptop."], a: "He watches them whenever he needs to learn a new skill." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 ITEMS) ---
        10: [
            { audio: "I usually listen to music when I study.", sent: "I usually ___ to music when I ___.", blanks: ["listen", "study"] },
            { audio: "She is currently reading an article online.", sent: "She is ___ reading an ___ online.", blanks: ["currently", "article"] },
            { audio: "Don't forget to review your notes.", sent: "Don't ___ to review your ___.", blanks: ["forget", "notes"] },
            { audio: "He always watches videos before class.", sent: "He ___ watches videos ___ class.", blanks: ["always", "before"] },
            { audio: "They are working on a project at the moment.", sent: "They are ___ on a project at the ___.", blanks: ["working", "moment"] },
            { audio: "I find it helpful to record my voice.", sent: "I find it ___ to ___ my voice.", blanks: ["helpful", "record"] },
            { audio: "We are currently practicing the shadowing technique.", sent: "We are ___ practicing the ___ technique.", blanks: ["currently", "shadowing"] },
            { audio: "Sarah never studies on Sundays.", sent: "Sarah ___ studies on ___.", blanks: ["never", "Sundays"] },
            { audio: "This method is very effective for me.", sent: "This ___ is very ___ for me.", blanks: ["method", "effective"] },
            { audio: "Are you writing an essay right now?", sent: "Are ___ writing an ___ right now?", blanks: ["you", "essay"] },
            { audio: "I usually check my feed in the morning.", sent: "I ___ check my ___ in the morning.", blanks: ["usually", "feed"] },
            { audio: "He is currently following a famous YouTuber.", sent: "He is ___ following a ___ YouTuber.", blanks: ["currently", "famous"] },
            { audio: "We often need silence to concentrate.", sent: "We ___ need ___ to concentrate.", blanks: ["often", "silence"] },
            { audio: "Don't be afraid to fail.", sent: "Don't ___ afraid to ___.", blanks: ["be", "fail"] },
            { audio: "She is reading the lyrics of the song.", sent: "She is ___ the ___ of the song.", blanks: ["reading", "lyrics"] },
            { audio: "How long have you been learning English?", sent: "How ___ have you been ___ English?", blanks: ["long", "learning"] },
            { audio: "I rarely miss a class at school.", sent: "I ___ miss a ___ at school.", blanks: ["rarely", "class"] },
            { audio: "The wifi is currently loading very slowly.", sent: "The ___ is currently ___ very slowly.", blanks: ["wifi", "loading"] },
            { audio: "Everyone has a different learning style.", sent: "Everyone has a ___ learning ___.", blanks: ["different", "style"] },
            { audio: "I am reviewing the grammar right now.", sent: "I am ___ the ___ right now.", blanks: ["reviewing", "grammar"] },
            { audio: "Be efficient with your study time.", sent: "Be ___ with your study ___.", blanks: ["efficient", "time"] },
            { audio: "I always watch movies with subtitles.", sent: "I ___ watch movies with ___.", blanks: ["always", "subtitles"] },
            { audio: "They sometimes read comics for fun.", sent: "They ___ read ___ for fun.", blanks: ["sometimes", "comics"] },
            { audio: "We are learning new strategies today.", sent: "We are ___ new ___ today.", blanks: ["learning", "strategies"] },
            { audio: "I find it difficult to memorize long lists.", sent: "I find it ___ to ___ long lists.", blanks: ["difficult", "memorize"] },
            { audio: "He usually goes to the library after school.", sent: "He ___ goes to the ___ after school.", blanks: ["usually", "library"] },
            { audio: "Is she practicing speaking currently?", sent: "Is she ___ ___ currently?", blanks: ["practicing", "speaking"] },
            { audio: "Try to write down the words.", sent: "Try ___ write down the ___.", blanks: ["to", "words"] },
            { audio: "I am currently looking for information online.", sent: "I am ___ looking for ___ online.", blanks: ["currently", "information"] },
            { audio: "We review our goals twice a month.", sent: "We ___ our goals ___ a month.", blanks: ["review", "twice"] },
            { audio: "Your pronunciation is becoming perfect.", sent: "Your ___ is becoming ___.", blanks: ["pronunciation", "perfect"] },
            { audio: "I find it helpful to use flashcards.", sent: "I ___ it helpful to use ___.", blanks: ["find", "flashcards"] },
            { audio: "Are they discussing the topic currently?", sent: "Are ___ discussing the ___ currently?", blanks: ["they", "topic"] },
            { audio: "I never speak Portuguese in English class.", sent: "I ___ speak ___ in English class.", blanks: ["never", "Portuguese"] },
            { audio: "It is essential to practice every day.", sent: "It is ___ to ___ every day.", blanks: ["essential", "practice"] },
            { audio: "He is currently busy with an essay.", sent: "He is ___ busy with an ___.", blanks: ["currently", "essay"] },
            { audio: "What works effectively for you?", sent: "What ___ effectively for ___?", blanks: ["works", "you"] },
            { audio: "I usually wake up at six o'clock.", sent: "I ___ wake up at ___ o'clock.", blanks: ["usually", "six"] },
            { audio: "She is currently watching a tutorial.", sent: "She is ___ watching a ___.", blanks: ["currently", "tutorial"] },
            { audio: "Always review the lessons.", sent: "Always ___ the ___.", blanks: ["review", "lessons"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE (10 ITEMS) ---
        11: [
            {
                title: "Changing Strategies",
                lines: [
                    { speaker: "Albert", text: "What ___ are you doing?", options: ["are you doing", "do you do"], a: "are you doing" },
                    { speaker: "Celine", text: "I am ___ organizing my notes.", options: ["currently", "rarely"], a: "currently" },
                    { speaker: "Celine", text: "I ___ just one notebook, but now I prefer digital folders.", options: ["usually use", "am usually using"], a: "usually use" },
                    { speaker: "Albert", text: "It’s a much more ___ way to keep track.", options: ["efficient", "boring"], a: "efficient" },
                    { speaker: "Celine", text: "___ your work often if you want to succeed!", options: ["Review", "Explain"], a: "Review" }
                ]
            },
            {
                title: "The Shadowing Technique",
                lines: [
                    { speaker: "Sarah", text: "John, ___ to this YouTuber!", options: ["listen", "listening"], a: "listen" },
                    { speaker: "John", text: "I ___ his channel before my speaking practice.", options: ["always watch", "am always watching"], a: "always watch" },
                    { speaker: "Sarah", text: "I am ___ the shadowing technique.", options: ["currently practicing", "usually practice"], a: "currently practicing" },
                    { speaker: "John", text: "Does it really ___ your fluency?", options: ["improve", "improving"], a: "improve" },
                    { speaker: "Sarah", text: "Definitely. It helps me ___ the correct mouth movements.", options: ["memorize", "hear"], a: "memorize" }
                ]
            },
            {
                title: "Media for Learning",
                lines: [
                    { speaker: "Celine", text: "I find it ___ to read long articles online.", options: ["helpful", "lazy"], a: "helpful" },
                    { speaker: "Albert", text: "Really? I ___ physical books anymore.", options: ["rarely read", "am rarely reading"], a: "rarely read" },
                    { speaker: "Celine", text: "But right now I ___ an essay and I need total silence.", options: ["am writing", "write"], a: "am writing" },
                    { speaker: "Albert", text: "I ___ listen to lo-fi music to help me focus.", options: ["usually", "currently"], a: "usually" },
                    { speaker: "Celine", text: "___ studying without music today!", options: ["Try", "Trying"], a: "Try" }
                ]
            },
            {
                title: "High School Challenges",
                lines: [
                    { speaker: "Teacher", text: "Albert, ___ the grammar rule for frequency adverbs?", options: ["do you understand", "are you understanding"], a: "do you understand" },
                    { speaker: "Albert", text: "I think so, but I ___ with their position.", options: ["am currently struggling", "usually struggle"], a: "am currently struggling" },
                    { speaker: "Teacher", text: "Remember: the adverb ___ after To Be.", options: ["always comes", "is always coming"], a: "always comes" },
                    { speaker: "Albert", text: "Ah, thank you! I ___ my notes at the moment.", options: ["am reviewing", "review"], a: "am reviewing" },
                    { speaker: "Teacher", text: "Good. ___ afraid to ask for help.", options: ["Don't be", "Not be"], a: "Don't be" }
                ]
            },
            {
                title: "Developing a Style",
                lines: [
                    { speaker: "Sarah", text: "What is your learning ___, Mary?", options: ["style", "pronoun"], a: "style" },
                    { speaker: "Mary", text: "I am a visual learner. ___, I always use colorful flashcards.", options: ["Consequently", "Since"], a: "Consequently" },
                    { speaker: "Sarah", text: "Interesting! I ___ an auditory method myself.", options: ["am currently trying", "usually try"], a: "am currently trying" },
                    { speaker: "Mary", text: "___ me more about it. How does it work?", options: ["Tell", "Say"], a: "Tell" },
                    { speaker: "Sarah", text: "I record my own voice and listen to it while I ___ to school.", options: ["am walking", "walk"], a: "am walking" }
                ]
            },
            {
                title: "The Group Project",
                lines: [
                    { speaker: "Albert", text: "We are ___ looking for more evidence for our science essay.", options: ["currently", "rarely"], a: "currently" },
                    { speaker: "Celine", text: "___ at this article I found! It’s highly effective.", options: ["Look", "Looking"], a: "Look" },
                    { speaker: "Albert", text: "Great! ___ on the presentation tomorrow?", options: ["Are we working", "Do we work"], a: "Are we working" },
                    { speaker: "Celine", text: "Yes, we usually ___ in the library at 2 PM.", options: ["meet", "are meeting"], a: "meet" },
                    { speaker: "Albert", text: "Perfect. Let’s make this project ___!", options: ["successful", "noisy"], a: "successful" }
                ]
            },
            {
                title: "Effective Habits",
                lines: [
                    { speaker: "John", text: "I ___ a school lecture. It’s part of my strategy.", options: ["never miss", "am never missing"], a: "never miss" },
                    { speaker: "Sarah", text: "That’s very ___ of you. I sometimes arrive late.", options: ["efficient", "slow"], a: "efficient" },
                    { speaker: "John", text: "___ late tomorrow! The topic is very important.", options: ["Don't arrive", "Not arrive"], a: "Don't arrive" },
                    { speaker: "Sarah", text: "I know. I ___ a new schedule to be more organized.", options: ["am currently making", "usually make"], a: "am currently making" },
                    { speaker: "John", text: "That sounds like a good ___.", options: ["plan", "lyrics"], a: "plan" }
                ]
            },
            {
                title: "Vocabulary Skills",
                lines: [
                    { speaker: "Albert", text: "How ___ so many new words, Celine?", options: ["do you memorize", "are you memorizing"], a: "do you memorize" },
                    { speaker: "Celine", text: "I ___ them out loud until they sound natural.", options: ["usually repeat", "am usually repeating"], a: "usually repeat" },
                    { speaker: "Albert", text: "I am ___ a dictionary app, but it is too slow.", options: ["currently using", "usually use"], a: "currently using" },
                    { speaker: "Celine", text: "___ to flashcards; they are much more interactive.", options: ["Switch", "Switching"], a: "Switch" },
                    { speaker: "Albert", text: "I will. I want to ___ my vocabulary this bimester.", options: ["improve", "fail"], a: "improve" }
                ]
            },
            {
                title: "Active Recall",
                lines: [
                    { speaker: "Sarah", text: "Why are you ___ the textbook?", options: ["closing", "opening"], a: "closing" },
                    { speaker: "Paul", text: "I am ___ active recall to test myself.", options: ["practicing", "watching"], a: "practicing" },
                    { speaker: "Sarah", text: "That is a ___ study method.", options: ["superior", "useless"], a: "superior" },
                    { speaker: "Paul", text: "It ___ me remember the concepts faster.", options: ["helps", "works"], a: "helps" },
                    { speaker: "Sarah", text: "I should ___ it for my biology exam.", options: ["try", "ignore"], a: "try" }
                ]
            },
            {
                title: "Managing Time",
                lines: [
                    { speaker: "Mrs. Canales", text: "Don't ___ your time on social media.", options: ["waste", "save"], a: "waste" },
                    { speaker: "Student", text: "I am ___ trying to be more efficient.", options: ["currently", "rarely"], a: "currently" },
                    { speaker: "Mrs. Canales", text: "Use a ___ to plan your afternoon.", options: ["schedule", "subtitle"], a: "schedule" },
                    { speaker: "Student", text: "I ___ my tasks in my phone calendar.", options: ["usually organize", "am usually organizing"], a: "usually organize" },
                    { speaker: "Mrs. Canales", text: "That is an ___ decision.", options: ["excellent", "ineffective"], a: "excellent" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER (10 ITEMS) ---
        12: [
            {
                title: "The Power of Metacognition",
                text: "Metacognition is essentially 'thinking about thinking.' For High School students, this skill is vital for academic success. Instead of simply studying hard, efficient students usually analyze which strategies work best for them. For example, some find it helpful to use the shadowing technique to improve pronunciation, while others prefer reading a scientific article to expand their vocabulary. Currently, a lot of people are using digital tools to track their progress. Whichever method you choose, the goal is to become a more independent learner.",
                questions: [
                    { q: "What is the definition of metacognition?", options: ["Thinking about your own thinking.", "Studying for five hours.", "Memorizing long lists."], a: "Thinking about your own thinking." },
                    { q: "What do efficient students usually do?", options: ["They study in a traditional way.", "They analyze which strategies work.", "They never use digital tools."], a: "They analyze which strategies work." },
                    { q: "Which two techniques are mentioned?", options: ["Shadowing and reading articles.", "Running and swimming.", "Eating burgers and music."], a: "Shadowing and reading articles." },
                    { q: "What is the main goal mentioned?", options: ["To become an independent learner.", "To surprise the teacher.", "To reinvent the wheel."], a: "To become an independent learner." },
                    { q: "Is metacognition vital for success?", options: ["Yes, it is vital.", "No, it is useless.", "Only for sports."], a: "Yes, it is vital." }
                ]
            },
            {
                title: "Finding Your Learning Style",
                text: "Everyone has a unique learning style. Some students are visual learners; consequently, they understand information better through charts and images. Others are auditory learners and find it helpful to listen to a lecture or a podcast. Currently, researchers are discussing if students should focus only on one style or try different techniques. In my opinion, it is essential to be flexible. Whenever you encounter a difficult task, try to change your approach. Motivation increases when you find a method that truly works for you.",
                questions: [
                    { q: "Why do visual learners use charts?", options: ["They understand better.", "Because they are bored.", "It is a traditional pretext."], a: "They understand better." },
                    { q: "What is an tool for auditory learners?", options: ["A podcast or lecture.", "A colorful map.", "A burger."], a: "A podcast or lecture." },
                    { q: "What is the author's opinion?", options: ["It is essential to be flexible.", "Use only one style.", "Styles are not rocket science."], a: "It is essential to be flexible." },
                    { q: "What should you do for a difficult task?", options: ["Try to change your approach.", "Give up immediately.", "Stay in the hallway."], a: "Try to change your approach." },
                    { q: "Does motivation increase with good methods?", options: ["Yes, it does.", "No, it crashes.", "Only for teachers."], a: "Yes, it does." }
                ]
            },
            {
                title: "The Role of Media",
                text: "Technology has a massive influence on how we acquire knowledge today. Digital natives always use the internet to find evidence for their school projects. For example, a YouTuber can explain complex concepts in an interesting way. Currently, many classrooms are using these videos as a supplementary tool. However, it is also important to practice critical reading. Whichever media you use, you must evaluate the content carefully. In conclusion, combining traditional study with modern media makes the process more efficient.",
                questions: [
                    { q: "How do digital natives use the internet?", options: ["To find evidence for projects.", "Only to play games.", "To avoid writing essays."], a: "To find evidence for projects." },
                    { q: "Why are YouTubers mentioned?", options: ["They explain concepts interestingly.", "They wear funny costumes.", "They are always late."], a: "They explain concepts interestingly." },
                    { q: "What warning is given about media?", options: ["Evaluate the content carefully.", "Never use a laptop.", "Media is too expensive."], a: "Evaluate the content carefully." },
                    { q: "What is a 'digital native'?", options: ["A person who grew up using tech.", "A person who hates tech.", "A robot."], a: "A person who grew up using tech." },
                    { q: "What makes study more efficient?", options: ["Combining traditional and modern.", "Using only old books.", "Eating during lectures."], a: "Combining traditional and modern." }
                ]
            },
            {
                title: "Case Study: Sarah’s Success",
                text: "Sarah was rarely happy with her English grades last year. She realized her study strategy was quite ineffective. This bimester, she is trying something new. She usually studies for two hours every afternoon, but currently she is also attending an online conference about pronunciation. She finds it helpful to record herself and listen to the audio later. Sarah is also reading an essay about global companies. As a result of her effort, her confidence is growing. She now believes that achieving her goal is possible.",
                questions: [
                    { q: "How did Sarah feel last year?", options: ["She was rarely happy.", "She was very motivated.", "No opinion."], a: "She was rarely happy." },
                    { q: "What is Sarah's current routine?", options: ["Studies daily and attends conferences.", "Studies on Sundays.", "Never reviews notes."], a: "Studies daily and attends conferences." },
                    { q: "What technique does she use for pronunciation?", options: ["Records herself and listens.", "Asks whoever she sees.", "Looks in the mirror."], a: "Records herself and listens." },
                    { q: "What is she reading for her future?", options: ["An essay about global companies.", "A comic book.", "Song lyrics."], a: "An essay about global companies." },
                    { q: "What is the result of her new approach?", options: ["Her confidence is growing.", "She is failing tasks.", "She is a YouTuber."], a: "Her confidence is growing." }
                ]
            },
            {
                title: "Efficiency in the Library",
                text: "The school library is the best place for students who need silence to concentrate. Albert often goes there after school to finish his homework. At the moment, he is working on a difficult math task. He is using a new method he learned in a lecture last week. Although the library is usually quiet, it is currently a bit noisy due to the construction outside. Therefore, Albert is wearing his headphones to block the noise. He is being very efficient with his time because he wants to play soccer later.",
                questions: [
                    { q: "Why do students go to the library?", options: ["To concentrate in a quiet place.", "To find a costume.", "To eat a sandwich."], a: "To concentrate in a quiet place." },
                    { q: "What is Albert doing right now?", options: ["Working on a math task.", "Reading a comic.", "Memorizing lyrics."], a: "Working on a math task." },
                    { q: "Why is the library noisy today?", options: ["Due to construction outside.", "Because students are chatting.", "Because of a YouTuber."], a: "Due to construction outside." },
                    { q: "How is Albert dealing with the noise?", options: ["He is wearing headphones.", "He is leaving the library.", "He is calling his mom."], a: "He is wearing headphones." },
                    { q: "Why is Albert trying to be efficient?", options: ["He wants to play soccer later.", "He is a digital native.", "A storm is coming."], a: "He wants to play soccer later." }
                ]
            },
            {
                title: "Technology and Career Paths",
                text: "English and technology are perfectly connected. Currently, most software is developed in English. If you want to improve your chances in the job market, you must learn how to use modern tools effectively. Consequently, students are focusing more on digital content. Understanding how a computer works is not rocket science, but it requires discipline and constant practice.",
                questions: [
                    { q: "What two skills are connected?", options: ["English and technology.", "Cooking and sports.", "Art and music."], a: "English and technology." },
                    { q: "Why is English important for developers?", options: ["Most software is in English.", "The lyrics are beautiful.", "It is raining."], a: "Most software is in English." },
                    { q: "What is 'not rocket science' here?", options: ["Understanding how a computer works.", "Flying an airplane.", "Memorizing a list."], a: "Understanding how a computer works." },
                    { q: "What does a tech career require?", options: ["Discipline and practice.", "A colorful costume.", "A burger."], a: "Discipline and practice." },
                    { q: "What is the consequence for students?", options: ["Focusing on digital content.", "Prices are increasing.", "The oven turns off."], a: "Focusing on digital content." }
                ]
            },
            {
                title: "The Art of Memorization",
                text: "Is it possible to memorize a whole article? Technically, yes, but it is not very efficient. Instead, a better strategy is to understand the main ideas. When you review your notes, try to explain the topic to yourself in the mirror. This technique is highly effective for long-term memory. In conclusion, learning is about connecting new information to your own life and experiences.",
                questions: [
                    { q: "Is memorizing a whole article efficient?", options: ["No, it is not very efficient.", "Yes, it is the best.", "Depends on weather."], a: "No, it is not very efficient." },
                    { q: "What is a better approach?", options: ["Understanding the main ideas.", "Reading lyrics loudly.", "Buying a new pen."], a: "Understanding the main ideas." },
                    { q: "What should you do when you review?", options: ["Explain the topic to yourself.", "Ignore them.", "Eat a burger."], a: "Explain the topic to yourself." },
                    { q: "Why is this technique good?", options: ["Effective for long-term memory.", "It is a traditional costume.", "The storm is strong."], a: "Effective for long-term memory." },
                    { q: "What is the author's final conclusion?", options: ["Connect info to your own life.", "Learning is like a robot.", "Airport distance."], a: "Connect info to your own life." }
                ]
            },
            {
                title: "Advice for New Students",
                text: "Practice English every day to improve your skills. Don't be afraid to make mistakes. In my opinion, every fail is an opportunity to learn. Currently, we are offering a new course about study strategies. Remember: be efficient with your time and trust yourself. Everything makes sense when you have a clear goal.",
                questions: [
                    { q: "What is the first piece of advice?", options: ["Practice English every day.", "Eat a sandwich.", "Stay in the hallway."], a: "Practice English every day." },
                    { q: "How should students view mistakes?", options: ["Opportunity to learn.", "Reason to give up.", "As a pretext."], a: "Opportunity to learn." },
                    { q: "What is the current offer?", options: ["A new course about strategies.", "A free burger.", "A trip to the pitch."], a: "A new course about strategies." },
                    { q: "Who can join the new course?", options: ["Whoever wants to join.", "Only teachers.", "Only YouTubers."], a: "Whoever wants to join." },
                    { q: "What is necessary for things to make sense?", options: ["Having a clear goal.", "A tall building.", "A pronoun."], a: "Having a clear goal." }
                ]
            },
            {
                title: "The Importance of Sleep",
                text: "Studies show that your brain processes information while you sleep. Efficient learners never stay up too late before a big test. Instead, they usually review their notes early and go to bed. Currently, research suggests that eight hours of sleep is essential for memory consolidation. If you want to improve your grades, don't ignore your resting time.",
                questions: [
                    { q: "When does the brain process info?", options: ["While you sleep.", "During a lecture.", "At a burger shop."], a: "While you sleep." },
                    { q: "What do efficient learners avoid?", options: ["Staying up too late.", "Reading articles.", "Using flashcards."], a: "Staying up too late." },
                    { q: "What does research suggest?", options: ["Eight hours is essential.", "Sleep is a mistake.", "Subtitles help sleep."], a: "Eight hours is essential." },
                    { q: "How does sleep help the brain?", options: ["Memory consolidation.", "Making sandwiches.", "Improving wifi."], a: "Memory consolidation." },
                    { q: "What is the advice for grades?", options: ["Don't ignore resting time.", "Study 24 hours.", "Play soccer."], a: "Don't ignore resting time." }
                ]
            },
            {
                title: "Digital Distractions",
                text: "Technology is helpful, but it can also be a distraction. Many students find it difficult to stay focused when their phones are nearby. An effective strategy is to put your phone in another room while studying. This method is highly recommended by experts to increase efficiency. Always remember that discipline is more important than using the latest apps.",
                questions: [
                    { q: "What is the problem with technology?", options: ["It can be a distraction.", "It is too expensive.", "It makes no sense."], a: "It can be a distraction." },
                    { q: "What is an effective strategy mentioned?", options: ["Put the phone in another room.", "Buy a new smartphone.", "Record your voice."], a: "Put the phone in another room." },
                    { q: "Who recommends this method?", options: ["Experts.", "Famous YouTubers.", "No one."], a: "Experts." },
                    { q: "What is the goal of this method?", options: ["To increase efficiency.", "To save money.", "To find the bathroom."], a: "To increase efficiency." },
                    { q: "What is more important than apps?", options: ["Discipline.", "Coloring flashcards.", "Fast wifi."], a: "Discipline." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER CONTEXT (10 ITEMS) ---
        13: [
            {
                title: "The Science of Metacognition",
                audio: "Metacognition is an essential skill for High School students who want to become more independent learners. Essentially, it means being aware of your own thinking process. Efficient students usually analyze their performance after a task to see what works for them. Currently, many researchers are investigating how digital natives use technology to improve their focus. Although some people prefer total silence, others find it helpful to listen to lo-fi music. The key is to understand your own learning style and adjust your strategy accordingly.",
                questions: [
                    { q: "What is the focus of metacognition?", options: ["Being aware of your thinking.", "Memorizing long lists.", "Buying new technology."], a: "Being aware of your thinking." },
                    { q: "What do efficient students do after a task?", options: ["Analyze their performance.", "Take a long nap.", "Watch a movie."], a: "Analyze their performance." },
                    { q: "What are researchers investigating?", options: ["Tech and focus in digital natives.", "The history of airplanes.", "The price of burgers."], a: "Tech and focus in digital natives." },
                    { q: "What is a preference for studying?", options: ["Total silence or lo-fi music.", "Loud rock music.", "Studying in the rain."], a: "Total silence or lo-fi music." },
                    { q: "What is the key to success?", options: ["Understanding your style and adjusting.", "Using flashcards only.", "Always being late."], a: "Understanding your style and adjusting." }
                ]
            },
            {
                title: "The Shadowing Technique",
                audio: "Sarah is currently practicing a method called the shadowing technique. She usually watches a video by a famous YouTuber and repeats the sentences immediately after hearing them. This technique is highly effective for improving pronunciation because it forces the student to pay attention to mouth movements and rhythm. Sarah finds it helpful to record herself while she is practicing. Consequently, she can review the audio later and identify her mistakes. She believes that constant practice is the only way to reach her goal of fluency.",
                questions: [
                    { q: "Which technique is Sarah using?", options: ["The shadowing technique.", "Reading lyrics.", "Writing essays."], a: "The shadowing technique." },
                    { q: "How does she practice it?", options: ["Repeating sentences after a YouTuber.", "Writing down every word.", "By sleeping."], a: "Repeating sentences after a YouTuber." },
                    { q: "Why is it effective for pronunciation?", options: ["Focuses on mouth movements.", "It uses colorful pens.", "It is very cheap."], a: "Focuses on mouth movements." },
                    { q: "Why does she record her voice?", options: ["To review and identify mistakes.", "She gets tired.", "Her phone breaks."], a: "To review and identify mistakes." },
                    { q: "What is Sarah's ultimate goal?", options: ["To achieve fluency.", "To become a YouTuber.", "To buy a new laptop."], a: "To achieve fluency." }
                ]
            },
            {
                title: "Choosing a Study Method",
                audio: "Albert is considering a new study method because he rarely feels motivated by traditional lectures. He is a visual learner; therefore, he always uses diagrams and colorful flashcards to organize his ideas. Currently, he is working on a project about career paths in technology. He finds it helpful to discuss his strategies with Celine, who is an auditory learner. Celine prefers listening to podcasts or the lyrics of English songs. They both agree that flexibility is the most efficient way to handle the High School workload.",
                questions: [
                    { q: "Why is Albert changing methods?", options: ["Rarely motivated by lectures.", "He is a digital native.", "He failed math."], a: "Rarely motivated by lectures." },
                    { q: "What tools does Albert use?", options: ["Diagrams and flashcards.", "Loud music.", "Only textbooks."], a: "Diagrams and flashcards." },
                    { q: "What is Albert working on now?", options: ["A project about tech careers.", "A history essay.", "A burger recipe."], a: "A project about tech careers." },
                    { q: "How does Celine prefer to learn?", options: ["Listening to podcasts or lyrics.", "By writing.", "By drawing."], a: "Listening to podcasts or lyrics." },
                    { q: "What do they agree on?", options: ["Flexibility is most efficient.", "Technology is boring.", "They need more food."], a: "Flexibility is most efficient." }
                ]
            },
            {
                title: "Academic Discipline",
                audio: "Success in High School is not rocket science, but it requires a lot of discipline. You must be efficient with your time and never leave your tasks for the last minute. Mrs. Canales always says that students should review their notes at least twice a month. Currently, the class is learning how to write an academic essay. This task is difficult because it requires deep research and clear arguments. Whatever topic you choose, make sure you look for reliable evidence online. If you follow a good plan, you will see progress very soon.",
                questions: [
                    { q: "What does the speaker say about success?", options: ["Not rocket science; needs discipline.", "It is impossible.", "It is a pretext."], a: "Not rocket science; needs discipline." },
                    { q: "What is the advice regarding time?", options: ["Be efficient and don't delay tasks.", "Work slowly.", "Don't study."], a: "Be efficient and don't delay tasks." },
                    { q: "How often should you review notes?", options: ["Twice a month.", "Every day.", "Once a year."], a: "Twice a month." },
                    { q: "Why is writing an essay difficult?", options: ["Requires research and arguments.", "It is too short.", "It is in Portuguese."], a: "Requires research and arguments." },
                    { q: "What should you look for online?", options: ["Reliable evidence.", "Funny memes.", "New costumes."], a: "Reliable evidence." }
                ]
            },
            {
                title: "The Library Atmosphere",
                audio: "At the moment, the school library is very busy. A lot of people are working on their final assignments. Some students are reading long articles, while others are memorizing vocabulary for the entrance exam. Usually, this place is perfectly silent, but currently, there is a lot of whispering. Sarah is focusing on her pronunciation by using an app on her tablet. She finds it very effective, although she often needs to repeat the same word many times. She is being very efficient today because she wants to finish her task early.",
                questions: [
                    { q: "What is the state of the library?", options: ["Very busy with people working.", "It is empty.", "Closed for a storm."], a: "Very busy with people working." },
                    { q: "What are the students doing?", options: ["Reading articles and memorizing.", "Playing on the pitch.", "Eating sandwiches."], a: "Reading articles and memorizing." },
                    { q: "How is the atmosphere compared to usual?", options: ["Currently noisier due to whispering.", "Quieter than usual.", "It is very dark."], a: "Currently noisier due to whispering." },
                    { q: "What is Sarah using to improve?", options: ["An app on her tablet.", "A traditional book.", "A megaphone."], a: "An app on her tablet." },
                    { q: "Why is Sarah being efficient today?", options: ["To finish her task early.", "To impress the teacher.", "She is a YouTuber."], a: "To finish her task early." }
                ]
            },
            {
                title: "Digital Literacy and Career",
                audio: "In my opinion, digital literacy is the most important skill for the 21st-century career. Whoever understands how to use technology effectively has more opportunities in the global market. Currently, many companies are seeking employees who can motivate themselves and learn new techniques independently. For example, knowing how to find relevant content online is more important than simply memorizing facts. Consequently, schools are encouraging students to explore different media and develop their own learning style.",
                questions: [
                    { q: "What is the most important skill?", options: ["Digital literacy.", "Running.", "Cooking."], a: "Digital literacy." },
                    { q: "Who has more opportunities?", options: ["Whoever uses tech effectively.", "Whoever is rich.", "Whoever stays home."], a: "Whoever uses tech effectively." },
                    { q: "What kind of employees are companies seeking?", options: ["Self-motivated and independent learners.", "People who follow orders only.", "Costume lovers."], a: "Self-motivated and independent learners." },
                    { q: "What is more important than memorizing facts?", options: ["Finding relevant content online.", "Eating a burger.", "Watching the storm."], a: "Finding relevant content online." },
                    { q: "What are schools encouraging?", options: ["Exploring media and styles.", "Less study time.", "More holidays."], a: "Exploring media and styles." }
                ]
            },
            {
                title: "Motivation and Challenges",
                audio: "Learning a second language can be a significant challenge, but the result is very rewarding. Many students feel frustrated when they don't understand the grammar immediately. However, it is essential to stay motivated. I find it helpful to set small goals, like learning five new words every day. Currently, I am focusing on my listening skills by watching movies without subtitles. It was very difficult at first, but now it is becoming much more effective. Don't be afraid to fail; every mistake is a chance to improve.",
                questions: [
                    { q: "How do students often feel about grammar?", options: ["Frustrated if they don't understand.", "Excited.", "Bored."], a: "Frustrated if they don't understand." },
                    { q: "What is the advice for staying motivated?", options: ["Setting small daily goals.", "Buying a new laptop.", "Stopping the study."], a: "Setting small daily goals." },
                    { q: "What is the speaker currently doing?", options: ["Watching movies without subtitles.", "Reading an essay.", "Singing lyrics."], a: "Watching movies without subtitles." },
                    { q: "How has the experience changed over time?", options: ["It is becoming much more effective.", "It got worse.", "It is a pretext."], a: "It is becoming much more effective." },
                    { q: "What does the speaker say about mistakes?", options: ["They are a chance to improve.", "They are bad.", "They are rocket science."], a: "They are a chance to improve." }
                ]
            },
            {
                title: "Reviewing for the Final",
                audio: "The final exam is approaching, so we must be very organized. I usually start my review two weeks before the date. Right now, my study group is discussing the main topics in the hallway. We are sharing our flashcards and explaining the difficult rules to each other. I find this social learning style very helpful. Whenever someone has a doubt, we look for evidence in the textbook together. In conclusion, group study makes the process more interesting and less lonely. We are all feeling very confident about the future.",
                questions: [
                    { q: "When does the speaker start reviewing?", options: ["Two weeks before.", "The day before.", "In January."], a: "Two weeks before." },
                    { q: "Where is the study group meeting?", options: ["In the hallway.", "In the library.", "On the pitch."], a: "In the hallway." },
                    { q: "What are they sharing?", options: ["Flashcards.", "Burgers.", "Costumes."], a: "Flashcards." },
                    { q: "What do they do for a doubt?", options: ["Look for evidence in the textbook.", "They ignore it.", "Call the principal."], a: "Look for evidence in the textbook." },
                    { q: "What is the conclusion about group study?", options: ["It is interesting and builds confidence.", "It is a waste of time.", "It is too noisy."], a: "It is interesting and builds confidence." }
                ]
            },
            {
                title: "Goal Setting",
                audio: "A clear goal is like a map for your education. If you don't know where you are going, you will never arrive. Efficient students usually set long-term and short-term goals. For example, a short-term goal could be memorizing ten words today. A long-term goal might be achieving B2 level by December. Currently, I am writing my goals in a digital planner to track my progress.",
                questions: [
                    { q: "What is a clear goal compared to?", options: ["A map.", "A burger.", "A YouTuber."], a: "A map." },
                    { q: "What do efficient students do?", options: ["Set long and short-term goals.", "Only watch videos.", "Ignore the teacher."], a: "Set long and short-term goals." },
                    { q: "What is an example of a short-term goal?", options: ["Memorizing ten words.", "Graduating college.", "Buying a car."], a: "Memorizing ten words." },
                    { q: "What is an example of a long-term goal?", options: ["Achieving B2 by December.", "Eating lunch now.", "Closing a book."], a: "Achieving B2 by December." },
                    { q: "How is the speaker tracking progress?", options: ["With a digital planner.", "By yourself.", "On a billboard."], a: "With a digital planner." }
                ]
            },
            {
                title: "Kinesthetic Learning",
                audio: "Kinesthetic learners learn best by doing and moving. They find it helpful to walk while they memorize facts or to use physical objects to solve problems. While most classrooms focus on visual or auditory styles, it is also important to consider the physical aspect of learning. If you are a kinesthetic student, try using drama or building models to understand complex topics. Currently, many modern schools are including more movement in their daily routine.",
                questions: [
                    { q: "How do kinesthetic learners learn best?", options: ["By doing and moving.", "By listening only.", "By sleeping."], a: "By doing and moving." },
                    { q: "What is a helpful activity for them?", options: ["Walking while memorizing.", "Watching silent movies.", "Staying perfectly still."], a: "Walking while memorizing." },
                    { q: "What do most classrooms focus on?", options: ["Visual and auditory styles.", "Cooking classes.", "Soccer strategies."], a: "Visual and auditory styles." },
                    { q: "What should a kinesthetic student try?", options: ["Building models or drama.", "Reading without moving.", "Listening to loud music."], a: "Building models or drama." },
                    { q: "What are modern schools including now?", options: ["More movement.", "Less lunch time.", "More burgers."], a: "More movement." }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT (10 ITEMS) ---
        14: [
            {
                title: "My Study Routine",
                text: "I believe that being [1] (efficient / slow / traditional) is the key to success. I [2] (always / rarely / never) check my schedule in the morning. [3] (Currently / Yesterday / Last year), I [4] (am working / work / worked) on a new project for my science class. I find it [5] (helpful / difficult / boring) to use apps for organization.",
                answers: ["efficient", "always", "Currently", "am working", "helpful"]
            },
            {
                title: "Learning with Media",
                text: "Sarah [1] (usually / now / currently) watches videos to learn new things. She is [2] (currently / rarely / always) following a [3] (YouTuber / burger / storm) who explains history. She thinks this [4] (method / pitch / costume) is very [5] (effective / slow / ugly) for her learning style.",
                answers: ["usually", "currently", "YouTuber", "method", "effective"]
            },
            {
                title: "Focus in the Library",
                text: "We [1] (often / never / rarely) go to the library to study. [2] (At the moment / Always / Every day), we [3] (are reading / read / reads) a very long [4] (article / lyrics / sandwich). We need [5] (silence / noise / costumes) to concentrate on the complex topics.",
                answers: ["often", "At the moment", "are reading", "article", "silence"]
            },
            {
                title: "Vocabulary Strategies",
                text: "[1] (Memorizing / Failing / Raining) words is a big [2] (challenge / gift / burger). I [3] (usually / am usually / currently) use [4] (flashcards / subtitles / pitches) to help me. I am [5] (currently / always / never) reviewing my list for the test tomorrow.",
                answers: ["Memorizing", "challenge", "usually", "flashcards", "currently"]
            },
            {
                title: "Improving Pronunciation",
                text: "My [1] (pronunciation / essay / career) is [2] (currently / usually / rarely) improving. I [3] (always / never / sometimes) practice [4] (shadowing / cooking / sleeping). It is a very [5] (useful / difficult / old) technique for High School students.",
                answers: ["pronunciation", "currently", "always", "shadowing", "useful"]
            },
            {
                title: "Academic Tasks",
                text: "I [1] (usually / right now / currently) write an [2] (essay / lyrics / burger) every month. [3] (Currently / Always / Never), I [4] (am researching / research / researches) the [5] (topic / storm / pitch) of innovation.",
                answers: ["usually", "essay", "Currently", "am researching", "topic"]
            },
            {
                title: "Learning Styles",
                text: "[1] (Everyone / Whoever / Whatever) has a different learning [2] (style / pronoun / mirror). [3] (Since / While / Due to) I am a visual learner, I [4] (always / rarely / never) use images. My friend is [5] (currently / usually / always) trying an auditory method.",
                answers: ["Everyone", "style", "Since", "always", "currently"]
            },
            {
                title: "Advice for Success",
                text: "[1] (Study / Studying / To study) hard every day! [2] (Don't / Not / No) be afraid of a [3] (challenge / gift / burger). Be [4] (efficient / lazy / slow) with your time. [5] (Review / Reviewing / To review) your notes twice a month!",
                answers: ["Study", "Don't", "challenge", "efficient", "Review"]
            },
            {
                title: "Motivation",
                text: "To stay [1] (motivated / tired / sad), you should set [2] (goals / burgers / lyrics). I [3] (usually / rarely) plan my day in the morning. [4] (Currently / Never), I am achieving my [5] (objectives / mistakes / storms).",
                answers: ["motivated", "goals", "usually", "Currently", "objectives"]
            },
            {
                title: "Flashcard Benefits",
                text: "Using [1] (flashcards / subtitles / lyrics) is a great [2] (technique / failure / costume). They are [3] (highly / slowly) [4] (effective / boring / difficult) for active recall. I [5] (always / never) use them before exams.",
                answers: ["flashcards", "technique", "highly", "effective", "always"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 ITEMS) ---
        15: [
            {
                title: "Text 1",
                audio: "I am currently working on a project. I usually study in the library. It is a very efficient place.",
                text: "I am [1] working on a [2]. I [3] study in the [4]. It is a very [5] place.",
                answers: ["currently", "project", "usually", "library", "efficient"]
            },
            {
                title: "Text 2",
                audio: "Sarah always watches videos. She is currently learning about strategies. She thinks they are effective.",
                text: "Sarah [1] watches [2]. She is [3] learning about [4]. She thinks they are [5].",
                answers: ["always", "videos", "currently", "strategies", "effective"]
            },
            {
                title: "Text 3",
                audio: "We often use flashcards. They help us memorize the vocabulary. It is a good strategy.",
                text: "We [1] use [2]. They help us [3] the [4]. It is a good [5].",
                answers: ["often", "flashcards", "memorize", "vocabulary", "strategy"]
            },
            {
                title: "Text 4",
                audio: "I am writing an essay now. I usually prefer to read. I find it helpful.",
                text: "I am [1] an [2] now. I [3] prefer to [4]. I find it [5].",
                answers: ["writing", "essay", "usually", "read", "helpful"]
            },
            {
                title: "Text 5",
                audio: "The YouTuber is very funny. He teaches us pronunciation. I always watch him.",
                text: "The [1] is very [2]. He [3] us [4]. I [5] watch him.",
                answers: ["YouTuber", "funny", "teaches", "pronunciation", "always"]
            },
            {
                title: "Text 6",
                audio: "Currently, we are learning grammar. We must follow the instructions. Be careful!",
                text: "[1], we are [2] grammar. We [3] follow the [4]. Be [5]!",
                answers: ["Currently", "learning", "must", "instructions", "careful"]
            },
            {
                title: "Text 7",
                audio: "I find it useful to record my voice. It helps me improve. Practice every day!",
                text: "I [1] it useful to [2] my [3]. It helps me [4]. Practice [5]!",
                answers: ["find", "record", "voice", "improve", "every day"]
            },
            {
                title: "Text 8",
                audio: "Metacognition is about learning. Everyone has a style. Review your notes often.",
                text: "[1] is about [2]. Everyone has a [3]. [4] your [5] often.",
                answers: ["Metacognition", "learning", "style", "Review", "notes"]
            },
            {
                title: "Text 9",
                audio: "Group study is very interesting. We are discussing topics in the hallway. We feel confident.",
                text: "[1] study is very [2]. We are [3] topics in the [4]. We feel [5].",
                answers: ["Group", "interesting", "discussing", "hallway", "confident"]
            },
            {
                title: "Text 10",
                audio: "Reviewing is highly effective. You must understand the main ideas. Don't be a robot.",
                text: "[1] is highly [2]. You [3] understand the [4] ideas. Don't be a [5].",
                answers: ["Reviewing", "effective", "must", "main", "robot"]
            }
        ]
    }
});