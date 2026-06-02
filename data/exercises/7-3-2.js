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
 * GRADE 7, BIMESTER 3, CHAPTER 6
 * BATCH 1: TYPES 1 TO 5 (40 items each)
 */

window.initExercise({
    id: "7-3-6",
    grade: "7th Grade",
    bimester: "3",
    chapter: "6",
    title: "Overcoming Obstacles and Past Continuous",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES (40 ITEMS) ---
        1: [
            { words: ["was", "studying", "I", "last", "night"], correct: "I was studying last night" },
            { words: ["they", "playing", "were", "soccer"], correct: "Were they playing soccer" },
            { words: ["she", "not", "was", "sleeping"], correct: "She was not sleeping" },
            { words: ["when", "was", "he", "cooking", "arrived", "I"], correct: "He was cooking when I arrived" },
            { words: ["while", "rained", "it", "we", "walking", "were"], correct: "It rained while we were walking" },
            { words: ["determined", "win", "was", "she", "to"], correct: "She was determined to win" },
            { words: ["gave", "they", "never", "up"], correct: "They never gave up" },
            { words: ["overcame", "he", "the", "difficulty"], correct: "He overcame the difficulty" },
            { words: ["achieved", "her", "she", "goal"], correct: "She achieved her goal" },
            { words: ["dreaming", "I", "was", "about", "future", "the"], correct: "I was dreaming about the future" },
            { words: ["were", "they", "hard", "working"], correct: "They were working hard" },
            { words: ["was", "feeling", "nervous", "Celine"], correct: "Celine was feeling nervous" },
            { words: ["you", "what", "doing", "were"], correct: "What were you doing" },
            { words: ["while", "I", "was", "studying", "I", "listened", "to", "music"], correct: "While I was studying I listened to music" },
            { words: ["faced", "she", "many", "obstacles"], correct: "She faced many obstacles" },
            { words: ["proud", "was", "my", "dad", "me", "of"], correct: "My dad was proud of me" },
            { words: ["not", "were", "listening", "they"], correct: "They were not listening" },
            { words: ["was", "raining", "it", "all", "day"], correct: "It was raining all day" },
            { words: ["we", "practicing", "were", "guitar", "the"], correct: "We were practicing the guitar" },
            { words: ["when", "stopped", "it", "dark", "was", "getting", "they"], correct: "It was getting dark when they stopped" },
            { words: ["he", "succeeded", "his", "in", "project"], correct: "He succeeded in his project" },
            { words: ["she", "hopeful", "felt", "the", "about", "future"], correct: "She felt hopeful about the future" },
            { words: ["was", "looking", "surprising", "it"], correct: "It was looking surprising" },
            { words: ["were", "you", "where", "going"], correct: "Where were you going" },
            { words: ["he", "failed", "but", "tried", "again"], correct: "He failed but tried again" },
            { words: ["life", "story", "his", "incredible", "was"], correct: "His life story was incredible" },
            { words: ["were", "waiting", "they", "for", "bus", "the"], correct: "They were waiting for the bus" },
            { words: ["she", "was", "reading", "a", "book"], correct: "She was reading a book" },
            { words: ["the", "was", "amazing", "view"], correct: "The view was amazing" },
            { words: ["while", "I", "was", "eating", "he", "called"], correct: "While I was eating he called" },
            { words: ["they", "were", "not", "laughing"], correct: "They were not laughing" },
            { words: ["what", "was", "she", "thinking"], correct: "What was she thinking" },
            { words: ["overcoming", "were", "we", "challenges"], correct: "We were overcoming challenges" },
            { words: ["was", "an", "inspiration", "he", "to", "us"], correct: "He was an inspiration to us" },
            { words: ["determined", "students", "the", "were"], correct: "The students were determined" },
            { words: ["I", "was", "not", "crying"], correct: "I was not crying" },
            { words: ["were", "they", "discussing", "plans", "their"], correct: "They were discussing their plans" },
            { words: ["she", "succeeded", "because", "she", "worked", "hard"], correct: "She succeeded because she worked hard" },
            { words: ["it", "was", "an", "amazing", "success"], correct: "It was an amazing success" },
            { words: ["when", "the", "phone", "rang", "I", "was", "sleeping"], correct: "When the phone rang I was sleeping" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES (40 ITEMS) ---
        2: [
            { lines: ["What were you doing?", "I was reading a book.", "Was it good?", "Yes, it was an inspiration."], order: [0, 1, 2, 3] },
            { lines: ["Did you give up?", "No, I was determined.", "Did you succeed?", "Yes, I achieved my goal."], order: [0, 1, 2, 3] },
            { lines: ["While I was training, I fell.", "Oh no! Were you hurt?", "Yes, but I kept trying.", "You are so brave!"], order: [0, 1, 2, 3] },
            { lines: ["Why was she crying?", "She failed her test.", "Is she okay now?", "Yes, she is feeling hopeful."], order: [0, 1, 2, 3] },
            { lines: ["They were practicing for weeks.", "Did they win the race?", "Yes, the energy was amazing.", "I am proud of them."], order: [0, 1, 2, 3] },
            { lines: ["What was he inventing?", "He was working on a robot.", "Did it work?", "No, it was a failure at first."], order: [0, 1, 2, 3] },
            { lines: ["I was dreaming about being a pilot.", "That is a great goal.", "I am studying hard now.", "You will achieve it!"], order: [0, 1, 2, 3] },
            { lines: ["We were walking when the storm started.", "Were you scared?", "Yes, we found an obstacle.", "But you overcame it!"], order: [0, 1, 2, 3] },
            { lines: ["Why look surprised?", "I saw a famous athlete!", "Was she training?", "Yes, she was running fast."], order: [0, 1, 2, 3] },
            { lines: ["He faced his fears.", "Was he nervous?", "Yes, his hands were shaking.", "But he was very determined."], order: [0, 1, 2, 3] },
            { lines: ["Were you listening to me?", "Sorry, I was thinking.", "About what?", "About my life story."], order: [0, 1, 2, 3] },
            { lines: ["She achieved her dream.", "Was it difficult?", "Yes, she faced many obstacles.", "Now she is successful."], order: [0, 1, 2, 3] },
            { lines: ["We were dancing when it rained.", "Did you stop?", "No, we were enjoying it.", "That sounds fun!"], order: [0, 1, 2, 3] },
            { lines: ["He was working hard all day.", "Is he tired now?", "Yes, he is sleeping.", "He deserves a rest."], order: [0, 1, 2, 3] },
            { lines: ["While she was eating, she heard a noise.", "Was she scared?", "Yes, she was worried.", "It was just her cat."], order: [0, 1, 2, 3] },
            { lines: ["I am proud of my brother.", "Why?", "He overcame his difficulty.", "He is an inspiration."], order: [0, 1, 2, 3] },
            { lines: ["Were they playing music?", "Yes, they were practicing drums.", "Was it loud?", "Yes, I was trying to study!"], order: [0, 1, 2, 3] },
            { lines: ["It was an incredible view.", "Where were you?", "I was climbing a mountain.", "You were very brave."], order: [0, 1, 2, 3] },
            { lines: ["She failed the first time.", "Did she give up?", "No, she tried again.", "Now she is a success."], order: [0, 1, 2, 3] },
            { lines: ["I was feeling sad yesterday.", "Why?", "My project was a failure.", "Don't worry, keep trying."], order: [0, 1, 2, 3] },
            { lines: ["Were you working at 8 PM?", "Yes, I was finishing a report.", "You work too much.", "I want to achieve my goals."], order: [0, 1, 2, 3] },
            { lines: ["He was dreaming of this day.", "Is he happy?", "Yes, he is smiling big.", "He was very determined."], order: [0, 1, 2, 3] },
            { lines: ["While they were talking, they found a solution.", "Was it a big problem?", "Yes, it was a huge obstacle.", "Teamwork is the best."], order: [0, 1, 2, 3] },
            { lines: ["I was looking for my keys.", "Did you find them?", "Yes, they were under the table.", "I am glad you found them."], order: [0, 1, 2, 3] },
            { lines: ["She was giving a speech.", "Was she nervous?", "Yes, but she was brave.", "Everyone clapped for her."], order: [0, 1, 2, 3] },
            { lines: ["We were cleaning the park.", "Why?", "There was a lot of trash.", "That is a great initiative."], order: [0, 1, 2, 3] },
            { lines: ["He was practicing piano.", "Is he good?", "Yes, he is very talented.", "He practices every day."], order: [0, 1, 2, 3] },
            { lines: ["While she was running, she saw a dog.", "Was it a scary dog?", "No, it was very small.", "Oh, I see."], order: [0, 1, 2, 3] },
            { lines: ["Why were they shouting?", "They were celebrating a goal.", "Did they win the game?", "Yes, it was a success."], order: [0, 1, 2, 3] },
            { lines: ["I was reading a biography.", "Was it inspirational?", "Yes, he overcame many things.", "I want to read it too."], order: [0, 1, 2, 3] },
            { lines: ["Were you sleeping when I called?", "No, I was studying.", "You are very dedicated.", "I want a good grade."], order: [0, 1, 2, 3] },
            { lines: ["She was feeling proud.", "Why?", "She finished her project.", "She worked very hard."], order: [0, 1, 2, 3] },
            { lines: ["He was facing a challenge.", "Did he succeed?", "Yes, he was very determined.", "He is an example for us."], order: [0, 1, 2, 3] },
            { lines: ["While we were driving, we got lost.", "Did you have a map?", "No, it was an obstacle.", "But you arrived safely!"], order: [0, 1, 2, 3] },
            { lines: ["I was dreaming about the beach.", "Do you want to go?", "Yes, but it is raining.", "We can go next week."], order: [0, 1, 2, 3] },
            { lines: ["She was practicing her steps.", "For the dance show?", "Yes, she was working hard.", "She will be amazing."], order: [0, 1, 2, 3] },
            { lines: ["Why was the house quiet?", "Everyone was sleeping.", "It was a peaceful moment.", "I enjoyed the silence."], order: [0, 1, 2, 3] },
            { lines: ["He was trying to fix the car.", "Did he succeed?", "Yes, he is a good mechanic.", "He never gives up."], order: [0, 1, 2, 3] },
            { lines: ["While I was studying, the lights went out.", "Was it dark?", "Yes, I was scared.", "But you finished, right?"], order: [0, 1, 2, 3] },
            { lines: ["They were watching a movie.", "Was it a tragedy?", "No, it was a success story.", "I love those movies."], order: [0, 1, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS (40 ITEMS) ---
        3: [
            { q: "Were you studying at 10 PM?", options: ["Yes, I was.", "Yes, I were.", "Yes, I was been.", "Yes, I did."], a: "Yes, I was." },
            { q: "Was she sleeping?", options: ["No, she wasn't.", "No, she weren't.", "No, she didn't.", "No, she doesn't."], a: "No, she wasn't." },
            { q: "Were they playing?", options: ["Yes, they were.", "Yes, they was.", "Yes, they are.", "Yes, they did."], a: "Yes, they were." },
            { q: "Was I dreaming?", options: ["Yes, you were.", "Yes, you was.", "Yes, I was.", "Yes, you am."], a: "Yes, you were." },
            { q: "Were we working?", options: ["No, we weren't.", "No, we wasn't.", "No, we don't.", "No, we aren't."], a: "No, we weren't." },
            { q: "Was he eating?", options: ["Yes, he was.", "Yes, he were.", "Yes, he is.", "Yes, he did."], a: "Yes, he was." },
            { q: "Were you listening?", options: ["No, I wasn't.", "No, I weren't.", "No, I didn't.", "No, I don't."], a: "No, I wasn't." },
            { q: "Was it raining?", options: ["Yes, it was.", "Yes, it were.", "Yes, it is.", "Yes, it did."], a: "Yes, it was." },
            { q: "Were the kids crying?", options: ["No, they weren't.", "No, they wasn't.", "No, they isn't.", "No, they don't."], a: "No, they weren't." },
            { q: "Was the cat barking?", options: ["No, it wasn't.", "No, it weren't.", "No, it doesn't.", "No, it didn't."], a: "No, it wasn't." },
            { q: "Were you and Albert talking?", options: ["Yes, we were.", "Yes, we was.", "Yes, we are.", "Yes, we did."], a: "Yes, we were." },
            { q: "Was Celine dancing?", options: ["Yes, she was.", "Yes, she were.", "Yes, she is.", "Yes, she did."], a: "Yes, she was." },
            { q: "Were we waiting?", options: ["No, we weren't.", "No, we wasn't.", "No, we don't.", "No, we aren't."], a: "No, we weren't." },
            { q: "Was he calling you?", options: ["Yes, he was.", "Yes, he were.", "Yes, he is.", "Yes, he did."], a: "Yes, he was." },
            { q: "Were you feeling sad?", options: ["No, I wasn't.", "No, I weren't.", "No, I don't.", "No, I am not."], a: "No, I wasn't." },
            { q: "Was the teacher talking?", options: ["Yes, she was.", "Yes, she were.", "Yes, she is.", "Yes, she did."], a: "Yes, she was." },
            { q: "Were they studying?", options: ["No, they weren't.", "No, they wasn't.", "No, they don't.", "No, they aren't studying."], a: "No, they weren't." },
            { q: "Was I helping?", options: ["Yes, you were.", "Yes, you was.", "Yes, I was.", "Yes, I am."], a: "Yes, you were." },
            { q: "Were you making noise?", options: ["No, I wasn't.", "No, I wasn't.", "No, I don't.", "No, I am not."], a: "No, I wasn't." },
            { q: "Was the sun shining?", options: ["Yes, it was.", "Yes, it were.", "Yes, it is.", "Yes, it did."], a: "Yes, it was." },
            { q: "If you are determined, you...", options: ["Keep trying", "Give up easily", "Sleep all day", "Cry"], a: "Keep trying" },
            { q: "An obstacle is something that...", options: ["Blocks your way", "Helps you", "Is a gift", "Is a fruit"], a: "Blocks your way" },
            { q: "To overcome a difficulty means to...", options: ["Solve it", "Fail", "Run away", "Forget it"], a: "Solve it" },
            { q: "If you achieve a goal, you feel...", options: ["Proud", "Scared", "Tired", "Sad"], a: "Proud" },
            { q: "Thomas Edison was...", options: ["An inventor", "A failure", "A nurse", "A pilot"], a: "An inventor" },
            { q: "A 'life story' is about...", options: ["A person's life", "Animals", "Cooking", "Math"], a: "A person's life" },
            { q: "When you are nervous, you might...", options: ["Sweat or shake", "Smile", "Sleep", "Eat sushi"], a: "Sweat or shake" },
            { q: "An inspiration is someone who...", options: ["Motivates you", "Makes you angry", "Is boring", "Is invisible"], a: "Motivates you" },
            { q: "To 'give up' is a synonym for...", options: ["Quit", "Succeed", "Practice", "Dream"], a: "Quit" },
            { q: "If a view is 'amazing,' it is...", options: ["Incredible", "Terrible", "Boring", "Small"], a: "Incredible" },
            { q: "You need 'support' when you...", options: ["Need help", "Are happy", "Are sleeping", "Are eating"], a: "Need help" },
            { q: "A 'goal' is something you...", options: ["Want to achieve", "Throw away", "Forget", "Eat"], a: "Want to achieve" },
            { q: "Resilience is the ability to...", options: ["Bounce back", "Fail", "Give up", "Cry"], a: "Bounce back" },
            { q: "If you are 'brave,' you...", options: ["Face your fears", "Are scared of everything", "Run away", "Hide"], a: "Face your fears" },
            { q: "A 'dream' is something you...", options: ["Want to happen", "Did yesterday", "Ate for lunch", "Lost"], a: "Want to happen" },
            { q: "If you 'work hard,' you...", options: ["Put in effort", "Are lazy", "Sleep", "Play games"], a: "Put in effort" },
            { q: "A 'failure' is the opposite of...", options: ["Success", "Mistake", "Obstacle", "Goal"], a: "Success" },
            { q: "If you are 'hopeful,' you...", options: ["Expect good things", "Expect bad things", "Are angry", "Are bored"], a: "Expect good things" },
            { q: "You 'practice' to...", options: ["Get better", "Get worse", "Forget", "Fail"], a: "Get better" },
            { q: "'Incredible' means...", options: ["Impossible to believe", "Normal", "Boring", "Bad"], a: "Impossible to believe" }
        ],

        // --- TYPE 4: FIND MEANING (40 ITEMS) ---
        4: [
            { sent: "He had to **overcome** his fear of heights.", word: "overcome", options: ["Superar", "Fugir", "Cair", "Esquecer"], a: "Superar", def: "To succeed in dealing with a problem." },
            { sent: "She finally **achieved** her dream.", word: "achieved", options: ["Alcançou", "Perdeu", "Vendeu", "Escondeu"], a: "Alcançou", def: "To reach a desired objective by effort." },
            { sent: "It was a big **obstacle** in his life.", word: "obstacle", options: ["Obstáculo", "Ajuda", "Presente", "Caminho"], a: "Obstáculo", def: "Something that blocks your way." },
            { sent: "The project was a huge **success**.", word: "success", options: ["Sucesso", "Falha", "Início", "Teste"], a: "Sucesso", def: "The accomplishment of an aim." },
            { sent: "She is very **proud** of her work.", word: "proud", options: ["Orgulhosa", "Triste", "Brava", "Cansada"], a: "Orgulhosa", def: "Feeling deep pleasure from achievements." },
            { sent: "Don't **give up** on your goals.", word: "give up", options: ["Desistir", "Continuar", "Tentar", "Sonhar"], a: "Desistir", def: "To cease making an effort." },
            { sent: "He was feeling **nervous** before the speech.", word: "nervous", options: ["Nervoso", "Feliz", "Calmo", "Forte"], a: "Nervoso", def: "Easily agitated or alarmed." },
            { sent: "Her **life story** is very moving.", word: "life story", options: ["História de vida", "Aula", "Comida", "Roupa"], a: "História de vida", def: "The series of events in a person's life." },
            { sent: "He is a **brave** firefighter.", word: "brave", options: ["Corajoso", "Tímido", "Medroso", "Lento"], a: "Corajoso", def: "Showing courage." },
            { sent: "We found **inspiration** in her words.", word: "inspiration", options: ["Inspiração", "Medo", "Tédio", "Raiva"], a: "Inspiração", def: "The process of being mentally stimulated." },
            { sent: "The mountain was a difficult **challenge**.", word: "challenge", options: ["Desafio", "Jogo", "Plano", "Mapa"], a: "Desafio", def: "A task that tests someone's abilities." },
            { sent: "I was **determined** to finish the task.", word: "determined", options: ["Determinado", "Preguiçoso", "Triste", "Incerto"], a: "Determinado", def: "Having made a firm decision." },
            { sent: "He **failed** the exam.", word: "failed", options: ["Falhou", "Passou", "Estudou", "Ganhou"], a: "Falhou", def: "To be unsuccessful in achieving a goal." },
            { sent: "She is **hopeful** for a better tomorrow.", word: "hopeful", options: ["Esperançosa", "Zangada", "Sem esperança", "Surpresa"], a: "Esperançosa", def: "Feeling optimism about the future." },
            { sent: "He showed great **resilience**.", word: "resilience", options: ["Resiliência", "Fraqueza", "Pressa", "Sono"], a: "Resiliência", def: "Capacity to recover from difficulties." },
            { sent: "The view from the top is **amazing**.", word: "amazing", options: ["Incrível", "Comum", "Ruim", "Escuro"], a: "Incrível", def: "Causing great surprise or wonder." },
            { sent: "It was an **incredible** discovery.", word: "incredible", options: ["Incrível", "Chato", "Normal", "Velho"], a: "Incrível", def: "Impossible to believe; extraordinary." },
            { sent: "My parents **support** my decisions.", word: "support", options: ["Apoiam", "Ignoram", "Brigam", "Esquecem"], a: "Apoiam", def: "To give assistance or encouragement." },
            { sent: "He **faced** many problems.", word: "faced", options: ["Encarou", "Fugiu", "Criou", "Gostou"], a: "Encarou", def: "To confront and deal with." },
            { sent: "I have a **dream** to be a singer.", word: "dream", options: ["Sonho", "Pesadelo", "Trabalho", "Carro"], a: "Sonho", def: "A cherished aspiration or ambition." },
            { sent: "We must **practice** every day.", word: "practice", options: ["Praticar", "Dormir", "Comer", "Olhar"], a: "Praticar", def: "To perform an activity repeatedly to improve." },
            { sent: "He is very **hard-working**.", word: "hard-working", options: ["Trabalhador", "Preguiçoso", "Rico", "Pobre"], a: "Trabalhador", def: "Tending to work with energy and commitment." },
            { sent: "I felt **surprised** by the party.", word: "surprised", options: ["Surpreso", "Entediado", "Triste", "Bravo"], a: "Surpreso", def: "Feeling or showing surprise." },
            { sent: "She felt **excited** about the trip.", word: "excited", options: ["Empolgada", "Cansada", "Calma", "Séria"], a: "Empolgada", def: "Very enthusiastic and eager." },
            { sent: "He was **tired** after the race.", word: "tired", options: ["Cansado", "Animado", "Feliz", "Forte"], a: "Cansado", def: "In need of sleep or rest." },
            { sent: "They felt **sad** when they lost.", word: "sad", options: ["Tristes", "Felizes", "Surpresos", "Nervosos"], a: "Tristes", def: "Feeling sorrow; unhappy." },
            { sent: "She was **happy** to win.", word: "happy", options: ["Feliz", "Triste", "Brava", "Lenta"], a: "Feliz", def: "Feeling pleasure or contentment." },
            { sent: "He is **worried** about the future.", word: "worried", options: ["Preocupado", "Calmo", "Animado", "Orgulhoso"], a: "Preocupado", def: "Anxious or troubled." },
            { sent: "I am **confident** in my skills.", word: "confident", options: ["Confiante", "Inseguro", "Medroso", "Novo"], a: "Confiante", def: "Feeling confidence in oneself." },
            { sent: "We had a **difficulty** solving the math.", word: "difficulty", options: ["Dificuldade", "Facilidade", "Ajuda", "Sorte"], a: "Dificuldade", def: "A thing that is hard to accomplish." },
            { sent: "The **hero** saved the day.", word: "hero", options: ["Herói", "Vilão", "Vítima", "Rei"], a: "Herói", def: "A person admired for courage or achievements." },
            { sent: "**Never give up** on your dreams.", word: "Never give up", options: ["Nunca desista", "Tente sempre", "Esqueça tudo", "Pare agora"], a: "Nunca desista", def: "Do not stop trying." },
            { sent: "**Believe in yourself**.", word: "Believe in yourself", options: ["Acredite em si mesmo", "Duvide de tudo", "Peça ajuda", "Corra"], a: "Acredite em si mesmo", def: "To have confidence in your abilities." },
            { sent: "**While** I was reading, I learned a lot.", word: "While", options: ["Enquanto", "Quando", "Depois", "Porque"], a: "Enquanto", def: "During the time that." },
            { sent: "**When** she arrived, we started.", word: "When", options: ["Quando", "Onde", "Como", "Por que"], a: "Quando", def: "At or during the time that." },
            { sent: "I **strived** to be the best.", word: "strived", options: ["Tentei muito", "Desisti", "Brinquei", "Olhei"], a: "Tentei muito", def: "Make great efforts to achieve something." },
            { sent: "The **recess** was short.", word: "recess", options: ["Intervalo", "Aula", "Prova", "Lição"], a: "Intervalo", def: "A period of time when work stops." },
            { sent: "His **legacy** will continue.", word: "legacy", options: ["Legado", "Carro", "Nome", "Livro"], a: "Legado", def: "Something handed down from the past." },
            { sent: "She showed **grit** in the race.", word: "grit", options: ["Garra / Firmeza", "Medo", "Sono", "Preguiça"], a: "Garra / Firmeza", def: "Courage and resolve; strength of character." },
            { sent: "He is an **optimist**.", word: "optimist", options: ["Otimista", "Pessimista", "Ator", "Cantor"], a: "Otimista", def: "A person who expects the best." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 ITEMS) ---
        5: [
            { sent: "I **was study** all night.", correct: "was studying" },
            { sent: "They **was** playing soccer.", correct: "were" },
            { sent: "She **not was** working.", correct: "was not" },
            { sent: "Were you **sleep**?", correct: "sleeping" },
            { sent: "He **practice** every day last month.", correct: "practiced" },
            { sent: "I **overcomed** the obstacle.", correct: "overcame" },
            { sent: "She **win** the race yesterday.", correct: "won" },
            { sent: "We **was dreaming** together.", correct: "were dreaming" },
            { sent: "He **tryed** to help me.", correct: "tried" },
            { sent: "While I **was cook**, the phone rang.", correct: "was cooking" },
            { sent: "They did not **gave up**.", correct: "give up" },
            { sent: "I **feled** proud.", correct: "felt" },
            { sent: "She **was read** a life story.", correct: "was reading" },
            { sent: "Were they **dance**?", correct: "dancing" },
            { sent: "He **facing** his fears now.", correct: "is facing" },
            { sent: "I **was work hard** last year.", correct: "worked hard" },
            { sent: "It **was rain** all morning.", correct: "was raining" },
            { sent: "She **achieve** her goal.", correct: "achieved" },
            { sent: "We **was feel** nervous.", correct: "were feeling" },
            { sent: "He **fail** the test yesterday.", correct: "failed" },
            { sent: "I **was not cry**.", correct: "was not crying" },
            { sent: "They **was laughing** at him.", correct: "were laughing" },
            { sent: "While she **is train**, she hurt her leg.", correct: "was training" },
            { sent: "We **was** excited for the trip.", correct: "were" },
            { sent: "He **is** very brave yesterday.", correct: "was" },
            { sent: "I **was study hard** to win.", correct: "was studying hard" },
            { sent: "She never **give up** in the past.", correct: "gave up" },
            { sent: "Were they **listen** to the music?", correct: "listening" },
            { sent: "It is **a** amazing view.", correct: "an" },
            { sent: "I **was look** for my book.", correct: "was looking" },
            { sent: "He **overcome** his past.", correct: "overcame" },
            { sent: "We **was** very hopeful.", correct: "were" },
            { sent: "She **cryed** after the news.", correct: "cried" },
            { sent: "They **was** determined to finish.", correct: "were" },
            { sent: "While I **was clean**, I found money.", correct: "was cleaning" },
            { sent: "He **dream** of being a doctor.", correct: "dreamed" },
            { sent: "I **am feel** proud of you.", correct: "feel" },
            { sent: "She **was work** in the kitchen.", correct: "was working" },
            { sent: "We **was playing** basketball.", correct: "were playing" },
            { sent: "He **succeed** in the end.", correct: "succeeded" }
        ],
        
        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Group 1
            { pairs: [{a: "What were you doing?", b: "I was reading."}, {a: "Was it raining?", b: "Yes, it was."}, {a: "Did she give up?", b: "No, she was determined."}, {a: "Why were they laughing?", b: "They saw a funny dog."}, {a: "Who was practicing?", b: "Lucas was."}] },
            // Group 2
            { pairs: [{a: "Where were you going?", b: "To the park."}, {a: "Was she feeling sad?", b: "No, she was happy."}, {a: "What happened while you studied?", b: "The lights went out."}, {a: "Were they playing soccer?", b: "Yes, they were."}, {a: "How did he overcome it?", b: "He worked hard."}] },
            // Group 3
            { pairs: [{a: "What was he inventing?", b: "The lightbulb."}, {a: "Did you succeed?", b: "Yes, I achieved my goal."}, {a: "Were you nervous?", b: "Yes, my hands were shaking."}, {a: "Who was crying?", b: "The little girl was."}, {a: "Was the view amazing?", b: "Yes, it was incredible."}] },
            // Group 4
            { pairs: [{a: "Why were you running?", b: "I was training for a race."}, {a: "Did they face obstacles?", b: "Yes, many."}, {a: "Was he dreaming?", b: "Yes, about being a pilot."}, {a: "What was she wearing?", b: "A colorful costume."}, {a: "Were we winning?", b: "No, we were losing."}] },
            // Group 5
            { pairs: [{a: "Did you believe in yourself?", b: "Yes, always."}, {a: "What were they discussing?", b: "Their future plans."}, {a: "Was the music loud?", b: "Yes, it was very noisy."}, {a: "Who supported you?", b: "My parents did."}, {a: "How was his life story?", b: "It was an inspiration."}] },
            // Group 6
            { pairs: [{a: "Were you sleeping at 8 PM?", b: "No, I was working."}, {a: "What was Sarah doing?", b: "She was running."}, {a: "Did she win?", b: "Yes, she achieved her aim."}, {a: "Why was he surprised?", b: "He heard the news."}, {a: "Was it a failure?", b: "No, it was a success."}] },
            // Group 7
            { pairs: [{a: "What were the kids doing?", b: "They were playing."}, {a: "Was she practicing?", b: "Yes, the violin."}, {a: "Did you see the hero?", b: "Yes, he was being brave."}, {a: "Were you proud?", b: "Yes, very proud."}, {a: "Why was it difficult?", b: "It was a big challenge."}] },
            // Group 8
            { pairs: [{a: "Where was he staying?", b: "In a small cabin."}, {a: "Did you try the food?", b: "Yes, it was delicious."}, {a: "Was she determined?", b: "Yes, she never gave up."}, {a: "What were we looking for?", b: "Our lost keys."}, {a: "Did they clap?", b: "Yes, everyone clapped."}] },
            // Group 9
            { pairs: [{a: "Why were you tired?", b: "I had been working hard."}, {a: "Did he fail?", b: "Yes, but he tried again."}, {a: "Was the storm scary?", b: "Yes, it was terrifying."}, {a: "What was she reading?", b: "A famous biography."}, {a: "Were we dreaming?", b: "No, it was real."}] },
            // Group 10
            { pairs: [{a: "Who was helping?", b: "The coach was."}, {a: "Was he confident?", b: "Yes, he faced his fears."}, {a: "Did you achieve the goal?", b: "Yes, finally!"}, {a: "What was happening?", b: "A big parade."}, {a: "Were they dancing?", b: "Yes, when the music started."}] },
            // Group 11
            { pairs: [{a: "I was studying...", b: "...when you called."}, {a: "While she was training...", b: "...she hurt her leg."}, {a: "They were playing soccer...", b: "...when it started to rain."}, {a: "He was working...", b: "...on a new invention."}, {a: "We were walking...", b: "...in the park."}] },
            // Group 12
            { pairs: [{a: "She achieved her goal...", b: "...after much practice."}, {a: "Because he was determined...", b: "...he succeeded."}, {a: "While we were sleeping...", b: "...the alarm rang."}, {a: "He was feeling nervous...", b: "...on the stage."}, {a: "They never gave up...", b: "...on their dreams."}] },
            // Group 13
            { pairs: [{a: "The hero was brave...", b: "...and saved the cat."}, {a: "While I was reading...", b: "...I saw Celine."}, {a: "They were practicing...", b: "...every weekend."}, {a: "It was an amazing...", b: "...life story."}, {a: "He faced many...", b: "...difficult obstacles."}] },
            // Group 14
            { pairs: [{a: "She was crying because...", b: "...she failed the test."}, {a: "While he was cooking...", b: "...the lights went out."}, {a: "The view was...", b: "...absolutely incredible."}, {a: "We felt very proud...", b: "...of our success."}, {a: "It was a difficult...", b: "...challenge to overcome."}] },
            // Group 15
            { pairs: [{a: "People were laughing...", b: "...at the funny clown."}, {a: "While she was dancing...", b: "...she fell."}, {a: "I was dreaming...", b: "...about being a pilot."}, {a: "He overcame his...", b: "...fear of heights."}, {a: "They were looking...", b: "...for a solution."}] },
            // Group 16
            { pairs: [{a: "The teacher was explaining...", b: "...the new rules."}, {a: "While we were waiting...", b: "...we talked."}, {a: "She was feeling hopeful...", b: "...about the future."}, {a: "He is an inspiration...", b: "...to all of us."}, {a: "It was a successful...", b: "...science project."}] },
            // Group 17
            { pairs: [{a: "My dad supported me...", b: "...during the crisis."}, {a: "While I was studying...", b: "...I listened to music."}, {a: "They were shouting...", b: "...with great joy."}, {a: "She was determined...", b: "...to win the race."}, {a: "He achieved first...", b: "...place in the contest."}] },
            // Group 18
            { pairs: [{a: "The house was quiet...", b: "...while they slept."}, {a: "While she was moving...", b: "...her friend arrived."}, {a: "He was trying to...", b: "...fix the broken car."}, {a: "We were overcoming...", b: "...many challenges."}, {a: "It was a magical...", b: "...moment in time."}] },
            // Group 19
            { pairs: [{a: "She was practicing the violin...", b: "...all afternoon."}, {a: "While the wind was blowing...", b: "...the trees moved."}, {a: "I felt very confident...", b: "...during the interview."}, {a: "He failed many times...", b: "...before he succeeded."}, {a: "They were enjoying...", b: "...the beautiful parade."}] },
            // Group 20
            { pairs: [{a: "The student was giving...", b: "...a presentation."}, {a: "While they were discussing...", b: "...they found a way."}, {a: "She was looking for...", b: "...a biography."}, {a: "He was being...", b: "...very brave."}, {a: "We were happy...", b: "...to be together."}] },
            // Group 21
            { pairs: [{a: "Overcome", b: "Superar"}, {a: "Succeed", b: "Ter sucesso"}, {a: "Achieve", b: "Alcançar"}, {a: "Practice", b: "Praticar"}, {a: "Give up", b: "Desistir"}] },
            // Group 22
            { pairs: [{a: "Challenge", b: "Desafio"}, {a: "Obstacle", b: "Obstáculo"}, {a: "Goal", b: "Meta"}, {a: "Success", b: "Sucesso"}, {a: "Failure", b: "Fracasso"}] },
            // Group 23
            { pairs: [{a: "Proud", b: "Orgulhoso"}, {a: "Determined", b: "Determinado"}, {a: "Nervous", b: "Nervoso"}, {a: "Scared", b: "Assustado"}, {a: "Excited", b: "Empolgado"}] },
            // Group 24
            { pairs: [{a: "Life story", b: "História de vida"}, {a: "Inspiration", b: "Inspiração"}, {a: "Amazing", b: "Incrível"}, {a: "Incredible", b: "Inacreditável"}, {a: "Brave", b: "Corajoso"}] },
            // Group 25
            { pairs: [{a: "While", b: "Enquanto"}, {a: "When", b: "Quando"}, {a: "I was working", b: "Eu estava trabalhando"}, {a: "They were playing", b: "Eles estavam jogando"}, {a: "Was she sleeping?", b: "Ela estava dormindo?"}] },
            // Group 26
            { pairs: [{a: "Difficulty", b: "Dificuldade"}, {a: "Problem", b: "Problema"}, {a: "Support", b: "Apoio"}, {a: "Dream", b: "Sonho"}, {a: "Face", b: "Enfrentar"}] },
            // Group 27
            { pairs: [{a: "Hopeful", b: "Esperançoso"}, {a: "Confident", b: "Confiante"}, {a: "Worried", b: "Preocupado"}, {a: "Surprised", b: "Surpreso"}, {a: "Tired", b: "Cansado"}] },
            // Group 28
            { pairs: [{a: "Never give up", b: "Nunca desista"}, {a: "Believe in yourself", b: "Acredite em si mesmo"}, {a: "What were you doing?", b: "O que você estava fazendo?"}, {a: "She hurt her leg", b: "Ela machucou a perna"}, {a: "It was raining", b: "Estava chovendo"}] },
            // Group 29
            { pairs: [{a: "I felt happy", b: "Eu me senti feliz"}, {a: "She was crying", b: "Ela estava chorando"}, {a: "He succeeded", b: "Ele teve sucesso"}, {a: "Amazing view", b: "Vista incrível"}, {a: "Big success", b: "Grande sucesso"}] },
            // Group 30
            { pairs: [{a: "Hard-working", b: "Trabalhador"}, {a: "Talent", b: "Talento"}, {a: "Patience", b: "Paciência"}, {a: "Experience", b: "Experiência"}, {a: "Skill", b: "Habilidade"}] },
            // Group 31
            { pairs: [{a: "Overcome", b: "To solve a problem."}, {a: "Success", b: "Achieving an aim."}, {a: "Failure", b: "Lack of success."}, {a: "Obstacle", b: "Something that blocks you."}, {a: "Goal", b: "What you want to do."}] },
            // Group 32
            { pairs: [{a: "Brave", b: "Facing fear."}, {a: "Nervous", b: "Feeling worried or shaky."}, {a: "Proud", b: "Happy with achievement."}, {a: "Determined", b: "Won't stop trying."}, {a: "Tired", b: "Needing rest."}] },
            // Group 33
            { pairs: [{a: "Amazing", b: "Surprising and good."}, {a: "Incredible", b: "Hard to believe."}, {a: "Sad", b: "Feeling sorrow."}, {a: "Happy", b: "Feeling pleasure."}, {a: "Scared", b: "Feeling fear."}] },
            // Group 34
            { pairs: [{a: "Practice", b: "To do something repeatedly."}, {a: "Believe", b: "To have confidence in."}, {a: "Give up", b: "To stop trying."}, {a: "Support", b: "To help someone."}, {a: "Dream", b: "An ambition."}] },
            // Group 35
            { pairs: [{a: "Life story", b: "Events of a life."}, {a: "Inspiration", b: "Motivating example."}, {a: "Challenge", b: "A test of ability."}, {a: "Difficulty", b: "Something hard to do."}, {a: "Hero", b: "Admired person."}] },
            // Group 36
            { pairs: [{a: "While", b: "During the same time."}, {a: "When", b: "At that time."}, {a: "Confident", b: "Sure of oneself."}, {a: "Worried", b: "Thinking of problems."}, {a: "Surprised", b: "Feeling shock."}] },
            // Group 37
            { pairs: [{a: "Resilience", b: "Bouncing back."}, {a: "Strive", b: "Making effort."}, {a: "Grit", b: "Strength of character."}, {a: "Success", b: "Reaching a peak."}, {a: "Hopeful", b: "Optimistic."}] },
            // Group 38
            { pairs: [{a: "Hard-working", b: "Putting in effort."}, {a: "Lazy", b: "Not working."}, {a: "Nervous", b: "Shaking."}, {a: "Calm", b: "Peaceful."}, {a: "Proud", b: "Self-satisfied."}] },
            // Group 39
            { pairs: [{a: "Biography", b: "Written life story."}, {a: "Goal", b: "Target."}, {a: "Dream", b: "Hope."}, {a: "Success", b: "Win."}, {a: "Failure", b: "Loss."}] },
            // Group 40
            { pairs: [{a: "Brave", b: "Fearless."}, {a: "Determined", b: "Firm decision."}, {a: "Inspiration", b: "Spark."}, {a: "Achievement", b: "Goal reached."}, {a: "Obstacle", b: "Barrier."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 ITEMS) ---
        7: [
            { q: "What were you doing at 10 PM?", options: ["I was sleeping.", "I was a student.", "At the park.", "Yes, I did."], a: "I was sleeping." },
            { q: "Where were they playing soccer?", options: ["In the yard.", "At 5 PM.", "Because they like it.", "No, they weren't."], a: "In the yard." },
            { q: "Why was she crying?", options: ["Because she failed the test.", "With her mom.", "Yesterday.", "Yes, she was."], a: "Because she failed the test." },
            { q: "Who was practicing the violin?", options: ["My sister.", "At the bedroom.", "While I was eating.", "No, I was."], a: "My sister." },
            { q: "How were you feeling?", options: ["I was feeling nervous.", "By car.", "At 8 o'clock.", "Yes, I feel."], a: "I was feeling nervous." },
            { q: "When did the lights go out?", options: ["While I was studying.", "In the kitchen.", "My dad.", "Because it was dark."], a: "While I was studying." },
            { q: "What were they discussing?", options: ["Their future goals.", "On the table.", "With the teacher.", "No, they aren't."], a: "Their future goals." },
            { q: "Why were her hands shaking?", options: ["Because she was nervous.", "To help her.", "Red and blue.", "At the cinema."], a: "Because she was nervous." },
            { q: "Where was he working last year?", options: ["At a restaurant.", "Very hard.", "With pride.", "Yesterday morning."], a: "At a restaurant." },
            { q: "What were you dreaming about?", options: ["About being a doctor.", "Fast.", "When I arrived.", "No, I'm not."], a: "About being a doctor." },
            { q: "Who was telling stories?", options: ["My grandfather.", "In the dark.", "Because it was fun.", "Yes, he was."], a: "My grandfather." },
            { q: "Why was it hard to concentrate?", options: ["Because it was noisy.", "In the library.", "English.", "No, it wasn't."], a: "Because it was noisy." },
            { q: "When were they dancing?", options: ["When the music started.", "At the party.", "Lucas.", "With joy."], a: "When the music started." },
            { q: "How was she running?", options: ["Very fast.", "In the park.", "To win.", "Yes, she was."], a: "Very fast." },
            { q: "What were you looking for?", options: ["My lost keys.", "Under the sofa.", "Yesterday.", "Because I am lazy."], a: "My lost keys." },
            { q: "Why was he looking surprised?", options: ["He heard the news.", "At the mall.", "With Albert.", "No, he wasn't."], a: "He heard the news." },
            { q: "Where were you waiting?", options: ["At the bus stop.", "For an hour.", "To go home.", "Yes, we were."], a: "At the bus stop." },
            { q: "Who was giving the speech?", options: ["The principal.", "Loudly.", "At noon.", "Because he is brave."], a: "The principal." },
            { q: "What was the cat doing?", options: ["It was sleeping.", "On the mat.", "Because it's a cat.", "Yes, it was."], a: "It was sleeping." },
            { q: "Why were they cleaning the beach?", options: ["Because there was trash.", "On Saturday.", "With bags.", "No, they weren't."], a: "Because there was trash." },
            { q: "When was it raining?", options: ["All day yesterday.", "In the sky.", "Wet.", "Yes, it was."], a: "All day yesterday." },
            { q: "What was he inventing?", options: ["A new machine.", "In the garage.", "With his hands.", "No, he didn't."], a: "A new machine." },
            { q: "Who was shouting?", options: ["The fans.", "Loudly.", "Because of the goal.", "Yes, they are."], a: "The fans." },
            { q: "Where were we staying?", options: ["In a nice hotel.", "Last week.", "For a month.", "Yes, we were."], a: "In a nice hotel." },
            { q: "Why was the room quiet?", options: ["Everyone was sleeping.", "Because it was small.", "In the house.", "No, it isn't."], a: "Everyone was sleeping." },
            { q: "What were you thinking about?", options: ["My life story.", "Smart.", "Yesterday.", "No, I was."], a: "My life story." },
            { q: "Who was winning the game?", options: ["Our team.", "At the stadium.", "Because we practiced.", "Yes, they did."], a: "Our team." },
            { q: "How were they helping?", options: ["They were carrying boxes.", "To the car.", "Friendly.", "No, they don't."], a: "They were carrying boxes." },
            { q: "When were you training?", options: ["Every morning.", "In the forest.", "To be strong.", "Yes, I am."], a: "Every morning." },
            { q: "What was she reading?", options: ["A biography.", "In the library.", "Because she likes it.", "No, she wasn't."], a: "A biography." },
            { q: "Why were you feeling nervous?", options: ["I had a big test.", "In the class.", "Shaking.", "Yes, I am."], a: "I had a big test." },
            { q: "Where was the sun shining?", options: ["At the beach.", "Today.", "Hot.", "Yes, it is."], a: "At the beach." },
            { q: "Who was making the noise?", options: ["The neighbors.", "At night.", "Loudly.", "No, they aren't."], a: "The neighbors." },
            { q: "What were they discussing?", options: ["The science project.", "On Monday.", "Together.", "No, they won't."], a: "The science project." },
            { q: "Why was he crying?", options: ["He was feeling sad.", "At home.", "For hours.", "Yes, he was."], a: "He was feeling sad." },
            { q: "When were you leaving?", options: ["When the phone rang.", "To the city.", "Fast.", "No, I'm staying."], a: "When the phone rang." },
            { q: "What was the baby doing?", options: ["It was playing.", "In the crib.", "Happy.", "Yes, it is."], a: "It was playing." },
            { q: "Who was supporting the athlete?", options: ["Her father.", "With water.", "Always.", "No, she is."], a: "Her father." },
            { q: "Why were the students clapping?", options: ["They achieved their goal.", "At school.", "Loudly.", "Yes, they were."], a: "They achieved their goal." },
            { q: "How was he overcoming the obstacle?", options: ["By practicing every day.", "On the wall.", "Brave.", "No, he didn't."], a: "By practicing every day." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 ITEMS) ---
        8: [
            { sent: "She was feeling **proud** because she failed the exam.", wrong: "proud", options: ["sad / disappointed", "happy", "excited", "brave"], a: "sad / disappointed" },
            { sent: "An **inspiration** is something that blocks your path.", wrong: "inspiration", options: ["obstacle", "goal", "success", "dream"], a: "obstacle" },
            { sent: "He was very **lazy**; he practiced guitar for six hours.", wrong: "lazy", options: ["hard-working", "scared", "nervous", "proud"], a: "hard-working" },
            { sent: "I am proud of you for **losing** the competition.", wrong: "losing", options: ["winning / achieving", "failing", "crying", "forgetting"], a: "winning / achieving" }, // Adjusted slightly from PDF for clarity "ashamed/sad" didn't fit the verb spot well
            { sent: "The view was **terrible**; it was the most beautiful thing I saw.", wrong: "terrible", options: ["amazing / incredible", "boring", "sad", "loud"], a: "amazing / incredible" },
            { sent: "I feel **excited** because I have a very boring test.", wrong: "excited", options: ["nervous / worried", "happy", "proud", "brave"], a: "nervous / worried" },
            { sent: "A **failure** is when you reach your goal perfectly.", wrong: "failure", options: ["success", "obstacle", "dream", "challenge"], a: "success" },
            { sent: "He was **brave** when he ran away from the small spider.", wrong: "brave", options: ["scared / afraid", "proud", "determined", "confident"], a: "scared / afraid" },
            { sent: "While I was **sleeping**, I watched the entire movie.", wrong: "sleeping", options: ["awake / watching", "dreaming", "crying", "studying"], a: "awake / watching" },
            { sent: "She was determined to **stop trying**.", wrong: "stop trying", options: ["keep trying / succeed", "fail", "give up", "cry"], a: "keep trying / succeed" },
            { sent: "The electricity went **on** suddenly, so it was dark.", wrong: "on", options: ["out", "up", "in", "over"], a: "out" },
            { sent: "I had a **dream** about eating a very real pizza for lunch.", wrong: "dream", options: ["pizza / meal", "nightmare", "goal", "success"], a: "pizza / meal" },
            { sent: "He **faced** his fears by hiding under the bed.", wrong: "faced", options: ["avoided / escaped", "achieved", "practiced", "overcame"], a: "avoided / escaped" },
            { sent: "My **life story** is a book about how to cook pasta.", wrong: "life story", options: ["cookbook", "biography", "obstacle", "goal"], a: "cookbook" },
            { sent: "I feel **relaxed** because I am very stressed about work.", wrong: "relaxed", options: ["worried / tired", "happy", "proud", "brave"], a: "worried / tired" },
            { sent: "She **succeeded** in failing the test.", wrong: "succeeded", options: ["failed", "achieved", "practiced", "tried"], a: "failed" },
            { sent: "It was an **amazing** tragedy; everyone was crying.", wrong: "amazing", options: ["terrible / sad", "incredible", "funny", "proud"], a: "terrible / sad" },
            { sent: "You should **give up** to achieve your dreams.", wrong: "give up", options: ["keep trying / work hard", "quit", "fail", "sleep"], a: "keep trying / work hard" },
            { sent: "He was **nervous** and calm during the presentation.", wrong: "nervous", options: ["confident", "worried", "scared", "tired"], a: "confident" },
            { sent: "The goal was to **fail** the race.", wrong: "fail", options: ["win", "stop", "cry", "sleep"], a: "win" },
            { sent: "I was **studying** while I was sleeping in my bed.", wrong: "studying", options: ["dreaming", "working", "running", "shouting"], a: "dreaming" },
            { sent: "She showed grit by **quitting** the team immediately.", wrong: "quitting", options: ["staying on / helping", "failing", "crying", "sleeping"], a: "staying on / helping" },
            { sent: "The **obstacle** helped him cross the street easily.", wrong: "obstacle", options: ["bridge / crosswalk", "mountain", "failure", "dream"], a: "bridge / crosswalk" },
            { sent: "He is an **optimist**; he always thinks bad things will happen.", wrong: "optimist", options: ["pessimist", "hero", "doctor", "teacher"], a: "pessimist" },
            { sent: "My hands were **shaking** because I was very bored.", wrong: "shaking", options: ["still / resting", "happy", "proud", "brave"], a: "still / resting" },
            { sent: "We clapped for the **failure** of the project.", wrong: "failure", options: ["success", "obstacle", "challenge", "goal"], a: "success" },
            { sent: "I am hopeful that the storm will **destroy** our house.", wrong: "destroy", options: ["pass / miss", "hit", "break", "ruin"], a: "pass / miss" },
            { sent: "He **overcame** his success and became a failure.", wrong: "overcame", options: ["ruined / lost", "achieved", "won", "gained"], a: "ruined / lost" },
            { sent: "She was **proud** of her mistake.", wrong: "proud", options: ["ashamed", "happy", "excited", "brave"], a: "ashamed" },
            { sent: "The **parade** was very quiet; there was no music.", wrong: "parade", options: ["library", "festival", "party", "stadium"], a: "library" },
            { sent: "While she was **training**, she sat on the sofa all day.", wrong: "training", options: ["resting / being lazy", "running", "practicing", "working"], a: "resting / being lazy" },
            { sent: "I was **surprised** by the news I already knew.", wrong: "surprised", options: ["unimpressed", "shocked", "happy", "proud"], a: "unimpressed" },
            { sent: "He is determined to **fail**.", wrong: "fail", options: ["succeed", "quit", "cry", "sleep"], a: "succeed" },
            { sent: "The **hero** stole the money from the bank.", wrong: "hero", options: ["thief / villain", "athlete", "scientist", "teacher"], a: "thief / villain" },
            { sent: "I was **crying** because I was so funny.", wrong: "crying", options: ["laughing", "sleeping", "working", "studying"], a: "laughing" },
            { sent: "The **dream** was a nightmare about monsters.", wrong: "dream", options: ["nightmare", "success", "goal", "achievement"], a: "nightmare" },
            { sent: "He **worked hard** by doing nothing at all.", wrong: "worked hard", options: ["was lazy", "practiced", "succeeded", "overcame"], a: "was lazy" },
            { sent: "She felt **confident** because she didn't know anything.", wrong: "confident", options: ["insecure", "proud", "happy", "brave"], a: "insecure" },
            { sent: "The **inspiration** made me want to quit.", wrong: "inspiration", options: ["discouragement", "dream", "goal", "success"], a: "discouragement" },
            { sent: "He achieved his **failure** of winning the gold medal.", wrong: "failure", options: ["goal", "obstacle", "challenge", "dream"], a: "goal" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 ITEMS) ---
        9: [
            { audio: "What were you doing when the phone rang?", options: ["I was sleeping.", "At 5 PM.", "Yes, I was.", "Because I'm tired."], a: "I was sleeping." },
            { audio: "Why was Celine looking so surprised?", options: ["She saw a ghost.", "In the library.", "To help us.", "No, she wasn't."], a: "She saw a ghost." },
            { audio: "Were they practicing the drums all afternoon?", options: ["Yes, they were.", "No, they doesn't.", "They are loud.", "Tomorrow."], a: "Yes, they were." },
            { audio: "How was she feeling before the race?", options: ["She was feeling nervous.", "She was running.", "In the park.", "By herself."], a: "She was feeling nervous." },
            { audio: "What happened while you were walking home?", options: ["I ran into my teacher.", "I am happy.", "To the school.", "Because it's far."], a: "I ran into my teacher." },
            { audio: "Was it raining during the festival?", options: ["Yes, it was raining hard.", "No, it isn't.", "At the stadium.", "With my friends."], a: "Yes, it was raining hard." },
            { audio: "Who was helping you with the project?", options: ["My brother was.", "Hard work.", "Yesterday.", "Yes, I do."], a: "My brother was." },
            { audio: "Why were the students shouting?", options: ["They were celebrating.", "Loudly.", "At school.", "No, they aren't."], a: "They were celebrating." },
            { audio: "What was he inventing in his garage?", options: ["He was inventing a robot.", "Because he is smart.", "Last year.", "Yes, he did."], a: "He was inventing a robot." },
            { audio: "Were you dreaming about the future?", options: ["Yes, I was.", "No, I don't.", "It was amazing.", "Tomorrow."], a: "Yes, I was." },
            { audio: "What was she reading in the library?", options: ["A life story.", "Very quiet.", "To learn.", "No, she didn't."], a: "A life story." },
            { audio: "Why were your hands shaking?", options: ["I was very scared.", "To the left.", "My gloves.", "Yes, they are."], a: "I was very scared." },
            { audio: "Where were they playing music?", options: ["At the new club.", "Jazz and Rock.", "At midnight.", "No, they weren't."], a: "At the new club." },
            { audio: "Was he working hard on his goal?", options: ["Yes, he was determined.", "No, he is lazy.", "To win.", "Yesterday."], a: "Yes, he was determined." },
            { audio: "Who was crying at the end of the movie?", options: ["Everyone was.", "It was sad.", "At the cinema.", "No, I'm not."], a: "Everyone was." },
            { audio: "What were we looking for under the table?", options: ["We were looking for the keys.", "It is small.", "Because we lost them.", "Yes, we did."], a: "We were looking for the keys." },
            { audio: "Were the kids making a lot of noise?", options: ["Yes, they were playing.", "No, they isn't.", "In the room.", "Quietly."], a: "Yes, they were playing." },
            { audio: "Why was she feeling proud?", options: ["She achieved her dream.", "For her mom.", "Yesterday.", "No, she doesn't."], a: "She achieved her dream." },
            { audio: "What was happening when the lights went out?", options: ["We were studying.", "It was dark.", "My sister.", "No, it didn't."], a: "We were studying." },
            { audio: "Who was dancing in the parade?", options: ["Colorful dancers.", "Beautifully.", "On the street.", "Yes, they were."], a: "Colorful dancers." },
            { audio: "Were you listening to the radio?", options: ["No, I was listening to a CD.", "Yes, I do.", "It is loud.", "Yesterday."], a: "No, I was listening to a CD." },
            { audio: "Why was he running so fast?", options: ["He was late for work.", "In the park.", "Very energetic.", "No, he isn't."], a: "He was late for work." },
            { audio: "What was the teacher explaining?", options: ["The history lesson.", "Clearly.", "In the classroom.", "Yes, she was."], a: "The history lesson." },
            { audio: "Was the sun shining this morning?", options: ["Yes, it was a beautiful day.", "No, it don't.", "At 7 AM.", "Brightly."], a: "Yes, it was a beautiful day." },
            { audio: "Who was using the computer?", options: ["Albert was.", "For my project.", "In his room.", "Yes, he is."], a: "Albert was." },
            { audio: "Why were you feeling worried?", options: ["I failed my test.", "At school.", "Because of math.", "No, I'm fine."], a: "I failed my test." },
            { audio: "What were they discussing in the meeting?", options: ["The new budget.", "For two hours.", "With the boss.", "No, they didn't."], a: "The new budget." },
            { audio: "Was she practicing the piano?", options: ["Yes, she was.", "No, she practiced.", "It is an instrument.", "Every day."], a: "Yes, she was." },
            { audio: "Where was he going at midnight?", options: ["He was going home.", "Because he was tired.", "By taxi.", "No, he was."], a: "He was going home." },
            { audio: "What was the baby doing in the photo?", options: ["It was smiling.", "With its dad.", "Last year.", "Yes, it was."], a: "It was smiling." },
            { audio: "Who was singing at the party?", options: ["Celine was.", "Beautifully.", "On the stage.", "No, she didn't."], a: "Celine was." },
            { audio: "Why were they laughing at him?", options: ["He told a joke.", "At the park.", "Funny.", "No, they aren't."], a: "He told a joke." },
            { audio: "Was it snowing in the mountains?", options: ["Yes, everything was white.", "No, it isn't.", "Last winter.", "Cold."], a: "Yes, everything was white." },
            { audio: "What were you wearing?", options: ["A blue jacket.", "At the party.", "Because it was cold.", "Yes, I was."], a: "A blue jacket." },
            { audio: "Who was waiting for the bus?", options: ["Many people were.", "At the stop.", "For ten minutes.", "No, they won't."], a: "Many people were." },
            { audio: "Why was the dog barking?", options: ["It saw a cat.", "Outside.", "Loudly.", "No, it didn't."], a: "It saw a cat." },
            { audio: "What were they building?", options: ["A new school.", "With bricks.", "Downtown.", "Yes, they were."], a: "A new school." },
            { audio: "Was she feeling hopeful?", options: ["Yes, she believed in her dream.", "No, she is sad.", "About the future.", "Always."], a: "Yes, she believed in her dream." },
            { audio: "Where was the hero going?", options: ["To the burning building.", "Because he is brave.", "Quickly.", "No, he wasn't."], a: "To the burning building." },
            { audio: "What was happening at 9 AM?", options: ["We were having breakfast.", "In the kitchen.", "My mom.", "Yes, it did."], a: "We were having breakfast." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 ITEMS) ---
        10: [
            { audio: "I was studying math when the phone rang.", sent: "I ___ studying math when the phone ___.", blanks: ["was", "rang"] },
            { audio: "They were playing soccer while it was raining.", sent: "They ___ playing soccer while it ___ raining.", blanks: ["were", "was"] },
            { audio: "She was crying because she failed the test.", sent: "She ___ crying because she ___ the test.", blanks: ["was", "failed"] },
            { audio: "He was working hard to achieve his goal.", sent: "He ___ working hard to ___ his goal.", blanks: ["was", "achieve"] },
            { audio: "We were walking home when we saw a cat.", sent: "We ___ walking home ___ we saw a cat.", blanks: ["were", "when"] },
            { audio: "While I was cooking, my sister arrived.", sent: "___ I was cooking, my sister ___.", blanks: ["While", "arrived"] },
            { audio: "She was feeling nervous before the presentation.", sent: "She ___ feeling ___ before the presentation.", blanks: ["was", "nervous"] },
            { audio: "He was practicing the violin all night.", sent: "He ___ practicing the ___ all night.", blanks: ["was", "violin"] },
            { audio: "They were laughing because the movie was funny.", sent: "They ___ laughing because the movie ___ funny.", blanks: ["were", "was"] },
            { audio: "Was she sleeping when you called her?", sent: "___ she ___ when you called her?", blanks: ["Was", "sleeping"] },
            { audio: "I was dreaming about being a famous musician.", sent: "I ___ dreaming about being a ___ musician.", blanks: ["was", "famous"] },
            { audio: "We were cleaning the park because it was dirty.", sent: "We ___ cleaning the park because it ___ dirty.", blanks: ["were", "was"] },
            { audio: "While they were talking, the teacher entered.", sent: "While they ___ talking, the teacher ___.", blanks: ["were", "entered"] },
            { audio: "He was feeling proud of his amazing success.", sent: "He ___ feeling ___ of his amazing success.", blanks: ["was", "proud"] },
            { audio: "Were you working at the hospital last year?", sent: "___ you ___ at the hospital last year?", blanks: ["Were", "working"] },
            { audio: "She was determined to overcome every obstacle.", sent: "She ___ determined to ___ every obstacle.", blanks: ["was", "overcome"] },
            { audio: "It was raining while we were waiting for the bus.", sent: "It ___ raining while we ___ waiting for the bus.", blanks: ["was", "were"] },
            { audio: "He was inventing a new robot in his room.", sent: "He ___ inventing a new ___ in his room.", blanks: ["was", "robot"] },
            { audio: "I was feeling surprised when I heard the news.", sent: "I ___ feeling ___ when I heard the news.", blanks: ["was", "surprised"] },
            { audio: "They were dancing when the band started playing.", sent: "They ___ dancing when the band ___ playing.", blanks: ["were", "started"] },
            { audio: "Was he shouting because he was angry?", sent: "___ he ___ because he was angry?", blanks: ["Was", "shouting"] },
            { audio: "I was looking for my book when I found money.", sent: "I ___ looking for my book when I ___ money.", blanks: ["was", "found"] },
            { audio: "She was wearing a costume for the big parade.", sent: "She ___ wearing a ___ for the big parade.", blanks: ["was", "costume"] },
            { audio: "We were discussing our dreams for the future.", sent: "We ___ discussing our ___ for the future.", blanks: ["were", "dreams"] },
            { audio: "While the sun was shining, we went outside.", sent: "While the sun ___ shining, we ___ outside.", blanks: ["was", "went"] },
            { audio: "He was being very brave during the storm.", sent: "He ___ being very ___ during the storm.", blanks: ["was", "brave"] },
            { audio: "Were they listening to the inspirational life story?", sent: "___ they ___ to the inspirational life story?", blanks: ["Were", "listening"] },
            { audio: "I was finishing my homework at midnight.", sent: "I ___ finishing my ___ at midnight.", blanks: ["was", "homework"] },
            { audio: "She was feeling hopeful about the new project.", sent: "She ___ feeling ___ about the new project.", blanks: ["was", "hopeful"] },
            { audio: "The dog was barking while we were sleeping.", sent: "The dog ___ barking while we ___ sleeping.", blanks: ["was", "were"] },
            { audio: "He was practicing his dance steps for weeks.", sent: "He ___ practicing his ___ steps for weeks.", blanks: ["was", "dance"] },
            { audio: "Was she crying because she was tired?", sent: "___ she ___ because she was tired?", blanks: ["Was", "crying"] },
            { audio: "I was taking a photo when the hero arrived.", sent: "I ___ taking a ___ when the hero arrived.", blanks: ["was", "photo"] },
            { audio: "They were staying in a small cabin in the mountains.", sent: "They ___ staying in a small ___ in the mountains.", blanks: ["were", "cabin"] },
            { audio: "While I was eating, my brother called me.", sent: "___ I was eating, my brother ___ me.", blanks: ["While", "called"] },
            { audio: "The view was amazing while we were climbing.", sent: "The view ___ amazing while we ___ climbing.", blanks: ["was", "were"] },
            { audio: "He was feeling confident after he practiced hard.", sent: "He ___ feeling ___ after he practiced hard.", blanks: ["was", "confident"] },
            { audio: "Were you watching the parade yesterday morning?", sent: "___ you ___ the parade yesterday morning?", blanks: ["Were", "watching"] },
            { audio: "She was reading a book about Thomas Edison.", sent: "She ___ reading a ___ about Thomas Edison.", blanks: ["was", "book"] },
            { audio: "I was cleaning my room when the lights went out.", sent: "I ___ cleaning my ___ when the lights went out.", blanks: ["was", "room"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE (10 ITEMS) ---
        11: [
            {
                title: "Dialogue 1: An Emotional Book",
                lines: [
                    { speaker: "Albert", text: "Hey Celine. What ___? You look emotional.", options: ["were you reading", "was you reading", "did you read"], a: "were you reading" },
                    { speaker: "Celine", text: "I ___ a life story about a famous athlete.", options: ["was reading", "read", "reads"], a: "was reading" },
                    { speaker: "Albert", text: "Really? What happened?", options: ["happened", "was happening", "happens"], a: "happened" }, // Filler
                    { speaker: "Celine", text: "She ___ many obstacles.", options: ["faced", "was facing", "faces"], a: "faced" },
                    { speaker: "Albert", text: "Wow. While she ___ for the Olympics, she broke her leg.", options: ["was training", "trained", "trains"], a: "was training" }
                ]
            },
            {
                title: "Dialogue 2: Overcoming Difficulties",
                lines: [
                    { speaker: "Albert", text: "Did she give up after the accident?", options: ["Yes", "No", "Maybe"], a: "No" }, // Filler
                    { speaker: "Celine", text: "No! She ___ sad, but she kept trying.", options: ["was feeling", "felt", "feel"], a: "was feeling" },
                    { speaker: "Albert", text: "She ___ the difficulty.", options: ["overcame", "was overcoming", "overcomes"], a: "overcame" },
                    { speaker: "Celine", text: "That is incredible. She was very ___.", options: ["determined", "tired", "scared"], a: "determined" },
                    { speaker: "Albert", text: "Yes. She ___ her goal in the end. I am so proud of her.", options: ["achieved", "was achieving", "achieve"], a: "achieved" }
                ]
            },
            {
                title: "Dialogue 3: Thomas Edison",
                lines: [
                    { speaker: "Celine", text: "I read a book about Thomas Edison. He ___ the lightbulb.", options: ["was inventing", "invented", "invent"], a: "was inventing" },
                    { speaker: "Albert", text: "I heard he ___ many times before he succeeded.", options: ["failed", "was failing", "fails"], a: "failed" },
                    { speaker: "Celine", text: "True. People ___ at him...", options: ["were laughing", "laughed", "laugh"], a: "were laughing" },
                    { speaker: "Celine", text: "...while he ___.", options: ["was working", "worked", "works"], a: "was working" },
                    { speaker: "Albert", text: "He didn't care. He ___ very brave and focused.", options: ["was", "were", "did"], a: "was" }
                ]
            },
            {
                title: "Dialogue 4: A Noisy Afternoon",
                lines: [
                    { speaker: "Celine", text: "What ___ yesterday afternoon?", options: ["were you doing", "did you do", "was you doing"], a: "were you doing" },
                    { speaker: "Albert", text: "I ___ to study for my math test, but it was hard.", options: ["was trying", "tried", "try"], a: "was trying" },
                    { speaker: "Celine", text: "Why? ___ your brothers making noise?", options: ["Were", "Was", "Did"], a: "Were" },
                    { speaker: "Albert", text: "Yes! They ___ the drums...", options: ["were practicing", "practiced", "practice"], a: "were practicing" },
                    { speaker: "Albert", text: "...while I ___.", options: ["was studying", "studied", "study"], a: "was studying" }
                ]
            },
            {
                title: "Dialogue 5: The Local Hero",
                lines: [
                    { speaker: "Albert", text: "Did you see the news about the local hero?", options: ["Yes", "No", "Maybe"], a: "Yes" }, // Filler
                    { speaker: "Celine", text: "Yes! He ___ home...", options: ["was walking", "walked", "walks"], a: "was walking" },
                    { speaker: "Celine", text: "...when he ___ a fire.", options: ["saw", "was seeing", "sees"], a: "saw" },
                    { speaker: "Albert", text: "He ___ a cat from the building!", options: ["saved", "was saving", "save"], a: "saved" },
                    { speaker: "Celine", text: "He was very ___. Everyone was shouting with joy.", options: ["brave", "nervous", "surprised"], a: "brave" }
                ]
            },
            {
                title: "Dialogue 6: A Sad Story",
                lines: [
                    { speaker: "Teacher", text: "Why ___ during the movie?", options: ["were you crying", "did you cry", "was you crying"], a: "were you crying" },
                    { speaker: "Student", text: "It ___ a very sad life story, teacher.", options: ["was", "were", "did"], a: "was" },
                    { speaker: "Teacher", text: "I understand. The main character ___ to achieve her dream.", options: ["was struggling", "struggled", "struggle"], a: "was struggling" },
                    { speaker: "Student", text: "Yes, but she ___ in the end.", options: ["succeeded", "was succeeding", "succeed"], a: "succeeded" },
                    { speaker: "Teacher", text: "It gave me ___.", options: ["hope", "obstacle", "failure"], a: "hope" }
                ]
            },
            {
                title: "Dialogue 7: Playing in the Rain",
                lines: [
                    { speaker: "Celine", text: "Look at this photo. We ___ soccer when it started to rain.", options: ["were playing", "played", "play"], a: "were playing" },
                    { speaker: "Albert", text: "I remember! We ___ all very surprised.", options: ["were", "was", "did"], a: "were" },
                    { speaker: "Albert", text: "We were very ___.", options: ["surprised", "determined", "tired"], a: "surprised" },
                    { speaker: "Celine", text: "While we ___ to the house, Albert fell.", options: ["were running", "ran", "run"], a: "were running" },
                    { speaker: "Albert", text: "But I ___ the pain and kept laughing!", options: ["overcame", "was overcoming", "overcome"], a: "overcame" }
                ]
            },
            {
                title: "Dialogue 8: The Piano Concert",
                lines: [
                    { speaker: "Albert", text: "How did you feel during your first piano concert?", options: ["Good", "Bad", "Okay"], a: "Good" }, // Filler
                    { speaker: "Celine", text: "I ___ very nervous.", options: ["was", "were", "did"], a: "was" },
                    { speaker: "Celine", text: "My hands ___.", options: ["were shaking", "shook", "shake"], a: "were shaking" },
                    { speaker: "Albert", text: "But you ___ for months!", options: ["practiced", "were practicing", "practice"], a: "practiced" },
                    { speaker: "Celine", text: "I know. I ___ much better when the audience clapped.", options: ["felt", "was feeling", "feel"], a: "felt" }
                ]
            },
            {
                title: "Dialogue 9: The Morning Run",
                lines: [
                    { speaker: "Celine", text: "Sarah ___ in the park at 6 AM yesterday.", options: ["was running", "ran", "runs"], a: "was running" },
                    { speaker: "Albert", text: "She is so ___ to win the race.", options: ["determined", "worried", "scared"], a: "determined" },
                    { speaker: "Celine", text: "While her friends ___, she was training.", options: ["were sleeping", "slept", "sleep"], a: "were sleeping" },
                    { speaker: "Albert", text: "She ___ a great time in the practice.", options: ["achieved", "was achieving", "achieve"], a: "achieved" },
                    { speaker: "Celine", text: "Yes, she is an inspiration.", options: ["Yes", "No", "Maybe"], a: "Yes" } // Filler
                ]
            },
            {
                title: "Dialogue 10: Lights Out",
                lines: [
                    { speaker: "Celine", text: "The electricity ___ out while we were studying.", options: ["went", "was going", "go"], a: "went" },
                    { speaker: "Albert", text: "It ___ very dark.", options: ["was", "were", "did"], a: "was" },
                    { speaker: "Celine", text: "I ___ scared for a second.", options: ["felt", "was feeling", "feel"], a: "felt" },
                    { speaker: "Albert", text: "But then we found a flashlight and kept working!", options: ["Yes", "No", "Maybe"], a: "Yes" }, // Filler
                    { speaker: "Celine", text: "We were very ___ to finish the project.", options: ["determined", "lazy", "tired"], a: "determined" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER (10 ITEMS) ---
        12: [
            {
                title: "Text 1: The Determined Artist",
                text: "Last year, Pablo was living in a small apartment. He wanted to be a famous artist, but he had a big obstacle: he didn't have money for paints. While he was working at a restaurant, he was saving every cent. He faced many difficulties, but he was determined. One day, a gallery owner saw his drawings on a napkin. Now, Pablo is successful. He is very proud of his journey.",
                questions: [
                    { q: "What was Pablo's dream?", options: ["To own a restaurant.", "To be a famous artist.", "To buy a big house."], a: "To be a famous artist." },
                    { q: "What was his obstacle?", options: ["He was lazy.", "He didn't have money for paints.", "He was scared of art."], a: "He didn't have money for paints." },
                    { q: "What was he doing at the restaurant?", options: ["He was eating.", "He was working and saving money.", "He was painting walls."], a: "He was working and saving money." },
                    { q: "How did the gallery owner see his work?", options: ["On a napkin.", "In a museum.", "On TV."], a: "On a napkin." },
                    { q: "How does Pablo feel now?", options: ["Sad.", "Proud.", "Worried."], a: "Proud." }
                ]
            },
            {
                title: "Text 2: Wilma's Victory",
                text: "Wilma Rudolph faced a huge challenge as a child. She had a disease and couldn't walk. But she was hopeful. While other kids were playing outside, she was practicing her steps with her family's support. She was very determined to succeed. In 1960, she overcame her past and won three gold medals in the Olympics. Her life story is an inspiration to everyone.",
                questions: [
                    { q: "What was Wilma's challenge?", options: ["She was blind.", "She couldn't walk.", "She was poor."], a: "She couldn't walk." },
                    { q: "What were the other kids doing while she practiced?", options: ["They were sleeping.", "They were playing outside.", "They were studying."], a: "They were playing outside." },
                    { q: "Did Wilma have help?", options: ["No, she was alone.", "Yes, she had her family's support.", "Yes, from a doctor."], a: "Yes, she had her family's support." },
                    { q: "How many gold medals did she achieve?", options: ["One.", "Two.", "Three."], a: "Three." },
                    { q: "What does the text say about her life story?", options: ["It is a failure.", "It is an inspiration.", "It is boring."], a: "It is an inspiration." }
                ]
            },
            {
                title: "Text 3: A Busy Afternoon",
                text: "Yesterday was chaotic at my house. My mom was cooking dinner while my brother was practicing the drums. I was trying to study for a history test, but the house was too noisy. It was a difficult obstacle to concentrate. Suddenly, the electricity went out. While we were sitting in the dark, my dad started telling us stories about his childhood. It was an amazing moment.",
                questions: [
                    { q: "What was the mom doing?", options: ["Practicing drums.", "Cooking dinner.", "Studying history."], a: "Cooking dinner." },
                    { q: "Why was it hard to study?", options: ["Because it was dark.", "Because it was noisy.", "Because the author was tired."], a: "Because it was noisy." },
                    { q: "What happened suddenly?", options: ["The phone rang.", "The electricity went out.", "The brother stopped."], a: "The electricity went out." },
                    { q: "What was the family doing when the dad started telling stories?", options: ["They were eating.", "They were sitting in the dark.", "They were sleeping."], a: "They were sitting in the dark." },
                    { q: "How was the moment described?", options: ["Terrible.", "Amazing.", "Boring."], a: "Amazing." }
                ]
            },
            {
                title: "Text 4: Thomas Edison's Light",
                text: "Thomas Edison is a symbol of determination. While he was inventing the lightbulb, he failed thousands of times. He didn't see these as failures, but as lessons. He was facing a lot of pressure from the public. However, he never gave up. He believed in himself when nobody else did. His success changed the world forever.",
                questions: [
                    { q: "What was Edison doing when he failed many times?", options: ["He was sleeping.", "He was inventing the lightbulb.", "He was teaching."], a: "He was inventing the lightbulb." },
                    { q: "How did he see his failures?", options: ["As a tragedy.", "As lessons.", "As a mistake."], a: "As lessons." },
                    { q: "What was he facing?", options: ["A lot of pressure.", "An illness.", "A traffic jam."], a: "A lot of pressure." },
                    { q: "Did he give up?", options: ["Yes, once.", "No, never.", "The text doesn't say."], a: "No, never." },
                    { q: "Why did he succeed?", options: ["Because he was lucky.", "Because he believed in himself.", "Because he was rich."], a: "Because he believed in himself." }
                ]
            },
            {
                title: "Text 5: The Mountain Climber",
                text: "Last summer, a group of friends was climbing a high mountain. While they were reaching the top, a storm started. They were feeling scared and cold. They faced a dangerous obstacle: the path was slippery. But the leader was very confident. He supported the group, and they finally achieved the peak. They felt very proud when they saw the view.",
                questions: [
                    { q: "Where were the friends?", options: ["In a forest.", "On a mountain.", "At the beach."], a: "On a mountain." },
                    { q: "What happened while they were reaching the top?", options: ["They found gold.", "A storm started.", "They saw an athlete."], a: "A storm started." },
                    { q: "What was the obstacle?", options: ["A big wall.", "A slippery path.", "A broken leg."], a: "A slippery path." },
                    { q: "How was the leader described?", options: ["Nervous.", "Confident.", "Sad."], a: "Confident." },
                    { q: "When did they feel proud?", options: ["When the storm started.", "When they saw the view.", "When they arrived home."], a: "When they saw the view." }
                ]
            },
            {
                title: "Text 6: A Life of Hope",
                text: "When Samuel was young, his family moved to a new country. He didn't speak the language. It was a big difficulty. While he was attending school, he was learning new words every day. He felt nervous at first, but his teachers were patient. He was determined to learn. Today, he is a translator. He overcame his fear and achieved his dream.",
                questions: [
                    { q: "What was Samuel's difficulty?", options: ["He was sick.", "He didn't speak the language.", "He didn't like school."], a: "He didn't speak the language." },
                    { q: "What was he doing while he attended school?", options: ["He was playing.", "He was learning new words.", "He was working."], a: "He was learning new words." },
                    { q: "How did he feel at first?", options: ["Proud.", "Nervous.", "Excited."], a: "Nervous." },
                    { q: "How were the teachers?", options: ["Rude.", "Patient.", "Scared."], a: "Patient." },
                    { q: "What is Samuel's job today?", options: ["Teacher.", "Translator.", "Doctor."], a: "Translator." }
                ]
            },
            {
                title: "Text 7: The Broken Dream",
                text: "A young dancer was preparing for a big show. While she was dancing, she fell and hurt her ankle. She was feeling devastated. \"My career is over,\" she thought. But while she was recovering, she started teaching children. She discovered a new passion. She realized that failure can be a new beginning. She is very happy now.",
                questions: [
                    { q: "What was the dancer doing when she fell?", options: ["She was eating.", "She was dancing.", "She was sleeping."], a: "She was dancing." },
                    { q: "How did she feel after the accident?", options: ["Excited.", "Devastated.", "Proud."], a: "Devastated." },
                    { q: "What did she do while she was recovering?", options: ["She gave up.", "She started teaching children.", "She cried all day."], a: "She started teaching children." },
                    { q: "What did she realize?", options: ["That she was bad.", "That failure can be a new beginning.", "That dancing is boring."], a: "That failure can be a new beginning." },
                    { q: "Is she sad now?", options: ["Yes, she is.", "No, she is very happy.", "The text doesn't say."], a: "No, she is very happy." }
                ]
            },
            {
                title: "Text 8: Facing the Storm",
                text: "Yesterday, a small boat was sailing in the ocean. While the crew was working, the wind became very strong. Huge waves were hitting the boat. It was a terrifying obstacle. The captain was determined to keep everyone safe. While the storm was raging, he was directing the crew with courage. They overcame the storm and returned to the port safely.",
                questions: [
                    { q: "Where was the boat?", options: ["On a river.", "In the ocean.", "In a lake."], a: "In the ocean." },
                    { q: "What were the waves doing?", options: ["They were disappearing.", "They were hitting the boat.", "They were calm."], a: "They were hitting the boat." },
                    { q: "Who was determined to keep everyone safe?", options: ["The cook.", "The captain.", "A passenger."], a: "The captain." },
                    { q: "What was the captain doing while the storm was raging?", options: ["He was sleeping.", "He was directing the crew.", "He was crying."], a: "He was directing the crew." },
                    { q: "Did they return safely?", options: ["Yes, they did.", "No, they didn't.", "Only the captain."], a: "Yes, they did." }
                ]
            },
            {
                title: "Text 9: The Science Project",
                text: "Last month, our team was working hard on a science project. While we were testing our robot, it broke. We felt very frustrated and worried. It was a major failure. But we didn't give up. While we were fixing the robot, we learned more about engineering. On the day of the fair, the robot worked perfectly. We were so proud!",
                questions: [
                    { q: "What was the team doing last month?", options: ["Playing games.", "Working on a science project.", "Planting trees."], a: "Working on a science project." },
                    { q: "What happened while they were testing the robot?", options: ["It won a prize.", "It broke.", "It started talking."], a: "It broke." },
                    { q: "How did they feel?", options: ["Happy and excited.", "Frustrated and worried.", "Bored."], a: "Frustrated and worried." },
                    { q: "What did they learn while they were fixing it?", options: ["About biology.", "About engineering.", "About history."], a: "About engineering." },
                    { q: "When did they feel proud?", options: ["When the robot broke.", "On the day of the fair.", "Last month."], a: "On the day of the fair." }
                ]
            },
            {
                title: "Text 10: The Brave Student",
                text: "Julia was a shy girl. She was always afraid of speaking in public. Last week, she had to give a presentation. While she was standing in front of the class, her heart was beating fast. She was feeling very nervous. But she remembered her goal. She spoke clearly and faced her fear. The class clapped. Julia achieved her goal and felt very confident.",
                questions: [
                    { q: "How was Julia described?", options: ["Brave and loud.", "Shy.", "Determined and happy."], a: "Shy." },
                    { q: "What was she afraid of?", options: ["Spiders.", "Speaking in public.", "Writing."], a: "Speaking in public." },
                    { q: "What was happening while she stood in front of the class?", options: ["She was laughing.", "Her heart was beating fast.", "She was sleeping."], a: "Her heart was beating fast." },
                    { q: "Did she give up?", options: ["Yes, she sat down.", "No, she faced her fear.", "She started crying."], a: "No, she faced her fear." },
                    { q: "How did she feel at the end?", options: ["Scared.", "Confident.", "Sad."], a: "Confident." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER CONTEXT (10 ITEMS) ---
        13: [
            {
                title: "Audio Script 1",
                audio: "I was walking in the park yesterday when I saw an old man. He was trying to carry a heavy box. It was a big obstacle for him. I decided to support him. While we were walking to his house, he told me his life story. He was a brave soldier. I felt very proud to help him.",
                questions: [
                    { q: "What was the old man doing?", options: ["He was running.", "He was trying to carry a heavy box.", "He was sleeping."], a: "He was trying to carry a heavy box." },
                    { q: "What was the box for him?", options: ["A gift.", "An obstacle.", "A seat."], a: "An obstacle." },
                    { q: "When did the man tell his life story?", options: ["First.", "While they were walking.", "Finally."], a: "While they were walking." },
                    { q: "What was the man's profession in the past?", options: ["Doctor.", "Soldier.", "Teacher."], a: "Soldier." },
                    { q: "How did the speaker feel?", options: ["Sad.", "Proud.", "Nervous."], a: "Proud." }
                ]
            },
            {
                title: "Audio Script 2",
                audio: "Last night, I was studying for my exams. It was 11 PM. While I was reading, I heard a loud noise. I felt very scared. My dog was barking at the door. I walked slowly to the window. It was just a cat! I felt relieved and went back to work. I was determined to finish my studies.",
                questions: [
                    { q: "What was the speaker doing at 11 PM?", options: ["Sleeping.", "Studying.", "Watching TV."], a: "Studying." },
                    { q: "How did the speaker feel when they heard a noise?", options: ["Excited.", "Scared.", "Proud."], a: "Scared." },
                    { q: "What was the dog doing?", options: ["Sleeping.", "Barking.", "Running away."], a: "Barking." },
                    { q: "What was the noise?", options: ["A ghost.", "A thief.", "A cat."], a: "A cat." },
                    { q: "Was the speaker determined?", options: ["Yes, to finish studies.", "No, they went to sleep.", "The audio doesn't say."], a: "Yes, to finish studies." }
                ]
            },
            {
                title: "Audio Script 3",
                audio: "Sarah was a dedicated student. While she was preparing for the science fair, she faced many challenges. Her first experiment failed. She was feeling sad, but she didn't give up. She was working every weekend. Finally, she achieved first place. She felt very happy and proud.",
                questions: [
                    { q: "What was Sarah doing?", options: ["Preparing for a science fair.", "Playing soccer.", "Traveling."], a: "Preparing for a science fair." },
                    { q: "What happened to her first experiment?", options: ["It was a success.", "It failed.", "It was stolen."], a: "It failed." },
                    { q: "How did she feel when it failed?", options: ["Happy.", "Sad.", "Determined."], a: "Sad." },
                    { q: "When was she working?", options: ["Every morning.", "Every weekend.", "At night."], a: "Every weekend." },
                    { q: "What did she achieve?", options: ["Second place.", "First place.", "A new book."], a: "First place." }
                ]
            },
            {
                title: "Audio Script 4",
                audio: "While my family was traveling last year, our car broke down. We were in the middle of nowhere. My parents were worried, but I was hopeful. We were waiting for two hours when a kind man arrived. He helped us fix the car. We overcame that difficulty together.",
                questions: [
                    { q: "When did the car break down?", options: ["While they were traveling.", "Yesterday.", "Finally."], a: "While they were traveling." },
                    { q: "Where were they?", options: ["In the city.", "In the middle of nowhere.", "At a hotel."], a: "In the middle of nowhere." },
                    { q: "How did the parents feel?", options: ["Happy.", "Worried.", "Scared."], a: "Worried." },
                    { q: "How long were they waiting when the man arrived?", options: ["One hour.", "Two hours.", "All day."], a: "Two hours." },
                    { q: "Did they overcome the difficulty?", options: ["Yes.", "No.", "Only the man did."], a: "Yes." }
                ]
            },
            {
                title: "Audio Script 5",
                audio: "I saw a very incredible movie last night. It was about a boy who wanted to be a musician. His parents were against it. While he was practicing in secret, he felt very determined. He faced many obstacles, but he achieved his dream. I was crying at the end because it was so beautiful.",
                questions: [
                    { q: "What was the movie about?", options: ["An athlete.", "A boy who wanted to be a musician.", "A doctor."], a: "A boy who wanted to be a musician." },
                    { q: "What were the parents doing?", options: ["They were supporting him.", "They were against it.", "They were dancing."], a: "They were against it." },
                    { q: "How did the boy feel while practicing in secret?", options: ["Scared.", "Determined.", "Bored."], a: "Determined." },
                    { q: "Was the movie incredible?", options: ["Yes.", "No.", "It was boring."], a: "Yes." },
                    { q: "What did the speaker do at the end?", options: ["Laughed.", "Cried.", "Slept."], a: "Cried." }
                ]
            },
            {
                title: "Audio Script 6",
                audio: "Last Sunday, I was practicing basketball. While I was shooting the ball, I fell. My knee was hurting a lot. I felt frustrated because I had a game the next day. But my coach said, 'Don't give up'. I was resting all afternoon. On Monday, I played and our team won!",
                questions: [
                    { q: "What was the speaker doing last Sunday?", options: ["Playing soccer.", "Practicing basketball.", "Watching a movie."], a: "Practicing basketball." },
                    { q: "What happened while they were shooting the ball?", options: ["They scored.", "They fell.", "They saw a friend."], a: "They fell." },
                    { q: "How did they feel?", options: ["Proud.", "Frustrated.", "Happy."], a: "Frustrated." },
                    { q: "What did the coach say?", options: ["Go home.", "Don't give up.", "You are bad."], a: "Don't give up." },
                    { q: "Did the team win on Monday?", options: ["Yes.", "No.", "The game was cancelled."], a: "Yes." }
                ]
            },
            {
                title: "Audio Script 7",
                audio: "While we were visiting the museum, we learned about an amazing woman. She was a scientist. She was working in a lab when she discovered a new medicine. She faced a lot of prejudice because she was a woman. But she was brave and determined. She is a great inspiration.",
                questions: [
                    { q: "Where were they?", options: ["At school.", "At a museum.", "At a hospital."], a: "At a museum." },
                    { q: "What was the woman's job?", options: ["Teacher.", "Scientist.", "Nurse."], a: "Scientist." },
                    { q: "What was she doing when she discovered the medicine?", options: ["She was sleeping.", "She was working in a lab.", "She was eating."], a: "She was working in a lab." },
                    { q: "What did she face?", options: ["A storm.", "Prejudice.", "A fire."], a: "Prejudice." },
                    { q: "How is she described at the end?", options: ["As a failure.", "As a great inspiration.", "As a shy person."], a: "As a great inspiration." }
                ]
            },
            {
                title: "Audio Script 8",
                audio: "My life story started in a small village. We were very poor. While my father was working in the fields, my mother was teaching us at home. We had no books, but we were hopeful. I was studying every night by a candle. I overcame the poverty and became a doctor. I am very proud of my parents.",
                questions: [
                    { q: "Where did the story start?", options: ["In a big city.", "In a small village.", "In a hospital."], a: "In a small village." },
                    { q: "What was the father doing?", options: ["Teaching.", "Working in the fields.", "Sleeping."], a: "Working in the fields." },
                    { q: "How was the speaker studying?", options: ["With a computer.", "By a candle.", "In a library."], a: "By a candle." },
                    { q: "What did the speaker become?", options: ["Teacher.", "Doctor.", "Farmer."], a: "Doctor." },
                    { q: "How does the speaker feel about their parents?", options: ["Worried.", "Proud.", "Angry."], a: "Proud." }
                ]
            },
            {
                title: "Audio Script 9",
                audio: "Yesterday morning, Sarah was preparing for an interview. She was feeling very nervous. While she was waiting, she was reading her notes. She faced the interviewer with a smile. She was very confident. In the afternoon, they called her. She got the job! She achieved her goal.",
                questions: [
                    { q: "When was Sarah preparing for the interview?", options: ["Yesterday morning.", "Yesterday afternoon.", "Last week."], a: "Yesterday morning." },
                    { q: "How was she feeling?", options: ["Proud.", "Nervous.", "Sad."], a: "Nervous." },
                    { q: "What was she doing while she was waiting?", options: ["Sleeping.", "Reading her notes.", "Eating."], a: "Reading her notes." },
                    { q: "How did she face the interviewer?", options: ["With a cry.", "With a smile.", "With a shout."], a: "With a smile." },
                    { q: "Did she get the job?", options: ["Yes.", "No.", "She is still waiting."], a: "Yes." }
                ]
            },
            {
                title: "Audio Script 10",
                audio: "While I was growing up, I had many dreams. I wanted to be an astronaut. I was studying science all the time. But when I was fifteen, I discovered music. It changed my life. I was practicing the guitar every day. Now, I am a musician. I overcame many obstacles to be here.",
                questions: [
                    { q: "What was the dream when the speaker was growing up?", options: ["To be a doctor.", "To be an astronaut.", "To be a musician."], a: "To be an astronaut." },
                    { q: "What happened when the speaker was fifteen?", options: ["They failed school.", "They discovered music.", "They moved away."], a: "They discovered music." },
                    { q: "What was the speaker practicing every day?", options: ["Science.", "The guitar.", "Basketball."], a: "The guitar." },
                    { q: "Is the speaker a musician now?", options: ["Yes.", "No.", "He is a teacher."], a: "Yes." },
                    { q: "Did he face obstacles?", options: ["Yes, many.", "No, it was easy.", "The audio doesn't say."], a: "Yes, many." }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT (10 ITEMS) ---
        14: [
            {
                title: "Text 1",
                text: "Last year, I [1] (was living / lived / live) in Japan. While I was there, I [2] (faced / was facing / face) many challenges. I didn't speak the language, but I was [3] (determined / scared / tired). I [4] (studied / was studying / study) every night. Finally, I [5] (achieved / was achieving / achieve) my goal.",
                answers: ["was living", "faced", "determined", "studied", "achieved"]
            },
            {
                title: "Text 2",
                text: "Sarah [1] (was training / trained / train) for a marathon. One day, while she [2] (was running / ran / run), she fell. She [3] (felt / was feeling / feel) very [4] (worried / proud / happy) about her leg. But she [5] (overcame / was overcoming / overcome) the pain and finished the race.",
                answers: ["was training", "was running", "felt", "worried", "overcame"]
            },
            {
                title: "Text 3",
                text: "Thomas Edison [1] (was / were / did) a great inventor. While he [2] (was working / worked / works) on the lightbulb, he failed many times. He was very [3] (determined / nervous / surprised). He never [4] (gave up / succeeded / achieved) on his dream. Today, we remember his [5] (success / failure / obstacle).",
                answers: ["was", "was working", "determined", "gave up", "success"]
            },
            {
                title: "Text 4",
                text: "While the sun [1] (was shining / shone / shines) yesterday, I [2] (was walking / walked / walk) in the park. I [3] (saw / was seeing / sees) a small dog. It was [4] (scared / proud / hopeful) of the loud cars. I [5] (helped / was helping / help) the dog find its owner.",
                answers: ["was shining", "was walking", "saw", "scared", "helped"]
            },
            {
                title: "Text 5",
                text: "I [1] (was trying / tried / try) to sleep last night, but my neighbors [2] (were making / made / make) a lot of noise. They [3] (were having / had / have) a party. I felt [4] (nervous / proud / happy) because I had a test the next day. While they [5] (were dancing / danced / dance), I was covering my ears!",
                answers: ["was trying", "were making", "were having", "nervous", "were dancing"]
            },
            {
                title: "Text 6",
                text: "During the class, the students [1] (were listening / listened / listen) to an [2] (inspirational / boring / scary) story. It was about a man who [3] (overcame / was overcoming / overcome) poverty. While he [4] (was talking / talked / talks), everyone was quiet. We felt very [5] (proud / worried / tired) of him.",
                answers: ["were listening", "inspirational", "overcame", "was talking", "proud"]
            },
            {
                title: "Text 7",
                text: "My sister [1] (was practicing / practiced / practice) the violin while I [2] (was doing / did / do) my homework. Suddenly, we [3] (heard / were hearing / hear) a sound. We [4] (felt / were feeling / feel) [5] (surprised / determined / proud). It was just our cat!",
                answers: ["was practicing", "was doing", "heard", "felt", "surprised"]
            },
            {
                title: "Text 8",
                text: "While I [1] (was growing / grew / grow) up, my parents [2] (were always supporting / always supported / always support) me. They [3] (were / was / did) very [4] (hopeful / scared / worried) about my future. I [5] (achieved / was achieving / achieve) my dreams because of them.",
                answers: ["was growing", "were always supporting", "were", "hopeful", "achieved"]
            },
            {
                title: "Text 9",
                text: "Yesterday afternoon, it [1] (was raining / rained / rains) hard. While I [2] (was waiting / waited / wait) for the bus, I [3] (saw / was seeing / sees) my teacher. She [4] (was carrying / carried / carry) a lot of books. I [5] (helped / was helping / help) her.",
                answers: ["was raining", "was waiting", "saw", "was carrying", "helped"]
            },
            {
                title: "Text 10",
                text: "Lucas [1] (was feeling / felt / feel) very [2] (proud / nervous / sad) because he [3] (achieved / was achieving / achieve) a perfect score. He [4] (was studying / studied / study) while his friends [5] (were playing / played / play). Hard work brings success!",
                answers: ["was feeling", "proud", "achieved", "was studying", "were playing"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 ITEMS) ---
        15: [
            {
                title: "Audio Script 1",
                audio: "I was studying in the library yesterday. While I was reading, I saw Celine. She was looking for a biography. She was very determined to find it.",
                text: "I [1] in the library yesterday. While I [2], I [3] Celine. She [4] for a biography. She was very [5] to find it.",
                answers: ["was studying", "was reading", "saw", "was looking", "determined"]
            },
            {
                title: "Audio Script 2",
                audio: "Last night, it was raining. While I was watching TV, the lights went out. I felt a bit scared. I was looking for a candle when my mom arrived.",
                text: "Last night, it [1]. While I [2] TV, the lights [3] out. I [4] a bit scared. I [5] for a candle when my mom arrived.",
                answers: ["was raining", "was watching", "went", "felt", "was looking"]
            },
            {
                title: "Audio Script 3",
                audio: "My brother was practicing soccer in the yard. While he was playing, he hurt his foot. He felt very sad. But he didn't give up.",
                text: "My brother [1] soccer in the yard. While he [2], he [3] his foot. He [4] very sad. But he [5] give up.",
                answers: ["was practicing", "was playing", "hurt", "felt", "didn't"]
            },
            {
                title: "Audio Script 4",
                audio: "The student was giving a presentation. While she was speaking, she felt nervous. Her voice was shaking. She was very proud at the end.",
                text: "The student [1] a presentation. While she [2], she [3] nervous. Her voice [4]. She was very [5] at the end.",
                answers: ["was giving", "was speaking", "felt", "was shaking", "proud"]
            },
            {
                title: "Audio Script 5",
                audio: "While I was walking home, I ran into my teacher. He was carrying a lot of papers. We were talking about the math test. I felt hopeful.",
                text: "While I [1] home, I [2] into my teacher. He [3] a lot of papers. We [4] about the math test. I [5] hopeful.",
                answers: ["was walking", "ran", "was carrying", "were talking", "felt"]
            },
            {
                title: "Audio Script 6",
                audio: "Last summer, I was visiting my grandparents. While I was staying there, I learned to fish. I was trying every day. I was so excited!",
                text: "Last summer, I [1] my grandparents. While I [2] there, I [3] to fish. I [4] every day. I was so [5]!",
                answers: ["was visiting", "was staying", "learned", "was trying", "excited"]
            },
            {
                title: "Audio Script 7",
                audio: "The team was working on the project. While they were discussing the ideas, they found a solution. They achieved their goal on Friday. Everyone celebrated together.",
                text: "The team [1] on the project. While they [2] the ideas, they [3] a solution. They [4] their goal on Friday. Everyone [5] together.",
                answers: ["was working", "were discussing", "found", "achieved", "celebrated"]
            },
            {
                title: "Audio Script 8",
                audio: "I was dreaming about being a doctor. While I was sleeping, I saw myself in a hospital. I felt very proud. When I woke up, I was determined.",
                text: "I [1] about being a doctor. While I [2], I [3] myself in a hospital. I [4] very proud. When I [5] up, I was determined.",
                answers: ["was dreaming", "was sleeping", "saw", "felt", "woke"]
            },
            {
                title: "Audio Script 9",
                audio: "Celine was dancing at the party. While she was moving, her friend arrived. They were laughing and talking. The music was playing loud.",
                text: "Celine [1] at the party. While she [2], her friend [3]. They [4] and talking. The music [5] loud.",
                answers: ["was dancing", "was moving", "arrived", "were laughing", "was playing"]
            },
            {
                title: "Audio Script 10",
                audio: "While the wind was blowing, the trees were moving. It was a scary storm. We were staying inside. We were relieved.",
                text: "While the wind [1], the trees [2]. It [3] a scary storm. We [4] inside. We [5] relieved.",
                answers: ["was blowing", "were moving", "was", "were staying", "were"]
            }
        ]
    }
});