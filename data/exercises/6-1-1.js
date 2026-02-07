/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */

window.initExercise({
    id: "ex-6-1-1",
    grade: "6",
    bimester: "1",
    chapter: "1",
    title: "Greetings and Personal Information",

    // ==========================================================
    // SIMPLE POOL (1-10)
    // ==========================================================
    simplePool: {
        
        // TYPE 1: UNSCRAMBLE SENTENCES (Required: 40 items)
        1: [
            { words: ["am", "student", "a", "I", "."], correct: "I am a student." },
            { words: ["from", "is", "Canada", "He", "."], correct: "He is from Canada." },
            { words: ["are", "You", "late", "not", "."], correct: "You are not late." },
            { words: ["they", "Are", "friends", "?"], correct: "Are they friends?" },
            { words: ["is", "name", "My", "Celine", "."], correct: "My name is Celine." },
            { words: ["years", "fourteen", "old", "am", "I", "."], correct: "I am fourteen years old." },
            { words: ["not", "We", "ready", "are", "."], correct: "We are not ready." },
            { words: ["from", "Where", "you", "are", "?"], correct: "Where are you from?" },
            { words: ["teacher", "She", "a", "is", "."], correct: "She is a teacher." },
            { words: ["is", "Japan", "It", "from", "."], correct: "It is from Japan." },
            { words: ["fine", "am", "I", "thanks", ",", "."], correct: "I am fine, thanks." },
            { words: ["you", "How", "are", "old", "?"], correct: "How old are you?" },
            { words: ["Brazilian", "are", "They", "."], correct: "They are Brazilian." },
            { words: ["meet", "Nice", "you", "to", "."], correct: "Nice to meet you." },
            { words: ["name", "What", "your", "is", "?"], correct: "What is your name?" },
            { words: ["from", "are", "We", "England", "."], correct: "We are from England." },
            { words: ["not", "He", "American", "is", "."], correct: "He is not American." },
            { words: ["are", "school", "at", "You", "."], correct: "You are at school." },
            { words: ["is", "big", "world", "The", "."], correct: "The world is big." },
            { words: ["a", "is", "book", "It", "."], correct: "It is a book." },
            { words: ["students", "are", "They", "not", "."], correct: "They are not students." },
            { words: ["from", "you", "France", "Are", "?"], correct: "Are you from France?" },
            { words: ["happy", "am", "today", "I", "."], correct: "I am happy today." },
            { words: ["is", "Who", "that", "?"], correct: "Who is that?" },
            { words: ["old", "is", "How", "he", "?"], correct: "How old is he?" },
            { words: ["from", "are", "where", "They", "?"], correct: "Where are they from?" },
            { words: ["a", "friend", "is", "She", "."], correct: "She is a friend." },
            { words: ["not", "am", "sad", "I", "."], correct: "I am not sad." },
            { words: ["ready", "class", "for", "are", "We", "?"], correct: "Are we ready for class?" },
            { words: ["name", "his", "What", "is", "?"], correct: "What is his name?" },
            { words: ["from", "China", "is", "She", "."], correct: "She is from China." },
            { words: ["years", "twelve", "He", "old", "is", "."], correct: "He is twelve years old." },
            { words: ["is", "blue", "It", "not", "."], correct: "It is not blue." },
            { words: ["are", "from", "You", "Italy", "."], correct: "You are from Italy." },
            { words: ["a", "am", "teacher", "I", "?"], correct: "Am I a teacher?" },
            { words: ["hundred", "one", "is", "It", "."], correct: "It is one hundred." },
            { words: ["nice", "are", "People", "here", "."], correct: "People are nice here." },
            { words: ["nationality", "your", "What", "is", "?"], correct: "What is your nationality?" },
            { words: ["not", "they", "Are", "happy", "?"], correct: "Are they not happy?" },
            { words: ["from", "Spain", "am", "I", "."], correct: "I am from Spain." }
        ],

        // TYPE 2: UNSCRAMBLE DIALOGUES (Required: 40 items - Part 1/2)
        2: [
            { 
                lines: ["Hi, Albert! I am Celine.", "Hello! I am Albert.", "Nice to meet you, Celine.", "Nice to meet you, too!"], 
                order: [1, 0, 2, 3] 
            },
            { 
                lines: ["I am from Canada. And you?", "Where are you from?", "I am from Brazil.", "Cool! Brazil is beautiful."], 
                order: [1, 0, 2, 3] 
            },
            { 
                lines: ["How old are you?", "I am fifteen.", "I am fourteen years old. And you?", "We are young!"], 
                order: [0, 2, 1, 3] 
            },
            { 
                lines: ["Yes, I am. Are you?", "Yeah! Let's go to the classroom!", "Are you ready for class?", "Yes! I am ready."], 
                order: [2, 0, 3, 1] 
            },
            { 
                lines: ["He is my friend, John.", "Where is he from?", "Who is he?", "He is from England."], 
                order: [2, 0, 1, 3] 
            },
            { 
                lines: ["I am fine, thanks. What about you?", "Hi, Albert! How are you?", "I am good, too.", "Hello, Celine!"], 
                order: [3, 1, 0, 2] 
            },
            { 
                lines: ["No, she is a student.", "She is nice.", "Is she the teacher?", "Yes, she is funny too."], 
                order: [2, 0, 1, 3] 
            },
            { 
                lines: ["It is a book.", "Is it your book?", "What is this?", "Yes, it is."], 
                order: [2, 0, 1, 3] 
            },
            { 
                lines: ["My name is Mr. D.", "Hello! What is your name?", "Nice to meet you, Mr. D.", "You too. Welcome to the English class!"], 
                order: [1, 0, 2, 3] 
            },
            { 
                lines: ["Are they from Japan?", "No, they are from China.", "Oh! They are Chinese.", "Yeah, the world is big!"], 
                order: [0, 1, 2, 3] 
            },
            { 
                lines: ["I am 12.", "Look, that is John.", "Is he twelve years old?", "No, he is thirteen. And you?"], 
                order: [1, 2, 3, 0] 
            },
            { 
                lines: ["No, I am not.", "Are you a teacher?", "Oh, I am a student.", "Okay! Me too."], 
                order: [1, 0, 2, 3] 
            },
            { 
                lines: ["We are from Italy.", "Where are you and Albert from?", "Are you Italian?", "Yes, we are."], 
                order: [1, 0, 2, 3] 
            },
            { 
                lines: ["My turn… six, seven, eight, nine, and ten.", "Let’s count to ten!", "One, two, three, four, five...", "Great job guys!"], 
                order: [1, 2, 0, 3] 
            },
            { 
                lines: ["It is a cat.", "What is it?", "Is it small?", "Yes, it is very small."], 
                order: [1, 0, 2, 3] 
            },
            { 
                lines: ["Hi, Paul! My name is Sara.", "Hello! I am Paul.", "Nice to meet you, Sara.", "Nice to meet you, too."], 
                order: [1, 0, 2, 3] 
            },
            { 
                lines: ["Are you from the USA?", "Yes, I am.", "Are you American?", "Yes, I am American."], 
                order: [0, 1, 2, 3] 
            },
            { 
                lines: ["Oh yeah, It is fifty.", "What is the number?", "Is it fifteen?", "No, it is five-zero. Fifty."], 
                order: [1, 2, 3, 0] 
            },
            { 
                lines: ["See you tomorrow, ok?", "Goodbye, Celine!", "Bye, Albert!", "Ok! Have a nice day, Albert!"], 
                order: [1, 2, 0, 3] 
            },
            { 
                lines: ["Who is she?", "She is Mrs. Canales.", "Is she a teacher?", "Yes, she is a great teacher."], 
                order: [0, 1, 2, 3] 
            },
            { 
                lines: ["Is he Canadian?", "Oh! So, he is from Canada.", "Yes, he is.", "Look! He is my new friend."], 
                order: [3, 0, 2, 1] 
            },
            { 
                lines: ["I am twenty years old, hehe.", "You are not twenty!", "How old are you?", "Ok, I am fifteen."], 
                order: [2, 0, 1, 3] 
            },
            { 
                lines: ["Where is Albert?", "Is he ready for class?", "He is at school.", "Yes, he is in the classroom."], 
                order: [0, 2, 1, 3] 
            },
            { 
                lines: ["No, we are from France.", "Are you from England?", "So, you are French!", "Yes, we are."], 
                order: [1, 0, 2, 3] 
            },
            { 
                lines: ["One hundred!", "Wow! That is a big number.", "What is after ninety-nine?", "Yes, it is."], 
                order: [2, 0, 1, 3] 
            },
            { 
                lines: ["So, you are Australian. Is Australia big or small?", "Are you from Australia?", "Yes, I am.", "Yeah, I am, and Australia is a big country."], 
                order: [1, 2, 0, 3] 
            },
            { 
                lines: ["They are my friends.", "Who are they?", "Are they students?", "Yes, they are."], 
                order: [1, 0, 2, 3] 
            },
            { 
                lines: ["Eh? Is it a dog?", "Look at that!", "No, it is a cat.", "Oh! It is very happy."], 
                order: [1, 0, 2, 3] 
            },
            { 
                lines: ["Are you sad today?", "Why are you happy?", "No, I am not. I am happy!", "Because English is fun!"], 
                order: [0, 2, 1, 3] 
            },
            { 
                lines: ["My name is Celine.", "What is your name?", "Nice to meet you, Albert.", "I am Albert."], 
                order: [1, 0, 3, 2] 
            },
            { 
                lines: ["No, she is not.", "Is she from Germany?", "Oh, she is from Spain.", "Yeah, she is Spanish."], 
                order: [1, 0, 2, 3] 
            },
            { 
                lines: ["Is it time for class?", "Yes, it is.", "Let's go!", "Yes! We are late!"], 
                order: [0, 1, 2, 3] 
            },
            { 
                lines: ["I am from Brazil.", "Where are you from?", "Cool! You are Brazilian.", "And you are from Canada."], 
                order: [1, 0, 2, 3] 
            },
            { 
                lines: ["I am eleven.", "How old are you?", "I am twelve. Are you students?", "Yes. We are students."], 
                order: [1, 0, 2, 3] 
            },
            { 
                lines: ["Are you a teacher?", "So, you are a student. Who is your teacher?", "No, I am not.", "My teacher is Mrs. Canales."], 
                order: [0, 2, 1, 3] 
            },
            { 
                lines: ["Who is that boy?", "Is he your friend?", "That is Albert.", "Yes, he is."], 
                order: [0, 2, 1, 3] 
            },
            { 
                lines: ["Are you ready?", "Yes, I am.", "So, let's start the lesson!", "Great! I am happy."], 
                order: [0, 1, 2, 3] 
            },
            { 
                lines: ["What is your nationality?", "I am from Japan.", "So, you are Japanese.", "Yes, I am."], 
                order: [0, 1, 2, 3] 
            },
            { 
                lines: ["How are you?", "I am fine, thanks. What about you?", "Let’s go to the classroom.", "I am good, too."], 
                order: [0, 1, 3, 2] 
            },
            { 
                lines: ["Is the book big?", "Yes, it is.", "It is a world book.", "Wow, I want to read it."], 
                order: [0, 1, 2, 3] 
            }
        ],

        // TYPE 3: QUICK QUESTIONS (Required: 40 items)
        3: [
            { q: "Are you a student?", options: ["Yes, I am.", "Yes, I are.", "Yes, me is.", "Yes, I be."], a: "Yes, I am." },
            { q: "Is he from Canada?", options: ["No, he am not.", "No, he is not.", "No, he are not.", "No, him is not."], a: "No, he is not." },
            { q: "Are they friends?", options: ["Yes, they is.", "Yes, they am.", "Yes, they are.", "Yes, they be."], a: "Yes, they are." },
            { q: "Is she fifteen years old?", options: ["No, she not is.", "No, she am not.", "No, she isn't.", "No, she aren't."], a: "No, she isn't." },
            { q: "Are we ready for class?", options: ["Yes, we are.", "Yes, us are.", "Yes, we is.", "Yes, we am."], a: "Yes, we are." },
            { q: "Am I late?", options: ["No, you am not.", "No, you is not.", "No, you aren't.", "No, you be not."], a: "No, you aren't." },
            { q: "Is it a globe?", options: ["Yes, it are.", "Yes, it am.", "Yes, it is.", "Yes, it be."], a: "Yes, it is." },
            { q: "Are you from Brazil?", options: ["No, I is not.", "No, I am not.", "No, I are not.", "No, me is not."], a: "No, I am not." },
            { q: "Is Albert from Canada?", options: ["Yes, he is.", "Yes, he am.", "Yes, he are.", "Yes, him is."], a: "Yes, he is." },
            { q: "Are Celine and Sara students?", options: ["Yes, they are.", "Yes, they is.", "Yes, they am.", "Yes, them are."], a: "Yes, they are." },
            { q: "Is the cat on the sofa?", options: ["No, it are not.", "No, it isn't.", "No, it am not.", "No, it be not."], a: "No, it isn't." },
            { q: "Are the books colorful?", options: ["Yes, they are.", "Yes, it is.", "Yes, they is.", "Yes, them are."], a: "Yes, they are." },
            { q: "Is your name Albert?", options: ["No, it is not.", "No, I is not.", "No, it am not.", "No, me is not."], a: "No, it is not." },
            { q: "Are you fourteen?", options: ["Yes, I am.", "Yes, I is.", "Yes, I are.", "Yes, me is."], a: "Yes, I am." },
            { q: "Is Mrs. Canales the teacher?", options: ["Yes, she is.", "Yes, she am.", "Yes, she are.", "Yes, her is."], a: "Yes, she is." },
            { q: "Are we at school?", options: ["Yes, we are.", "Yes, we is.", "Yes, we am.", "Yes, us are."], a: "Yes, we are." },
            { q: "Is the world big?", options: ["Yes, it is.", "Yes, it are.", "Yes, they are.", "Yes, he is."], a: "Yes, it is." },
            { q: "Are they from England?", options: ["No, they isn't.", "No, they aren't.", "No, they am not.", "No, them are not."], a: "No, they aren't." },
            { q: "Am I your friend?", options: ["Yes, you are.", "Yes, you is.", "Yes, you am.", "Yes, you be."], a: "Yes, you are." },
            { q: "Is the dog happy?", options: ["Yes, it is.", "Yes, it are.", "Yes, he am.", "Yes, it be."], a: "Yes, it is." },
            { q: "Where are you from?", options: ["I am fifteen.", "I am fine, thanks.", "I am from Japan.", "My name is Celine."], a: "I am from Japan." },
            { q: "How old are you?", options: ["I am a student.", "I am twelve.", "I am from Italy.", "Nice to meet you."], a: "I am twelve." },
            { q: "What is your name?", options: ["I am fine.", "My name is Sara.", "Yes, I am.", "From Brazil."], a: "My name is Sara." },
            { q: "Who is that?", options: ["It is a book.", "That is my teacher.", "I am fourteen.", "Yes, it is."], a: "That is my teacher." },
            { q: "How are you?", options: ["I am twelve years old.", "I am from Canada.", "I am good, thanks.", "My name is Albert."], a: "I am good, thanks." },
            { q: "Is the book blue?", options: ["No, it is red.", "I am a student.", "Yes, I am.", "From England."], a: "No, it is red." },
            { q: "What is the number?", options: ["I am fifteen.", "It is twenty.", "Yes, I am.", "From France."], a: "It is twenty." },
            { q: "Are you ready?", options: ["Yes, let's go!", "I am from Germany.", "My name is John.", "It is a cat."], a: "Yes, let's go!" },
            { q: "Where is the cat?", options: ["It is on the sofa.", "I am twelve.", "Yes, it is.", "From China."], a: "It is on the sofa." },
            { q: "Is he your friend?", options: ["Yes, his name is Paul.", "I am from Spain.", "It is a globe.", "How old are you?"], a: "Yes, his name is Paul." },
            { q: "How old is she?", options: ["She is fourteen.", "She is from Japan.", "Yes, she is.", "My name is Celine."], a: "She is fourteen." },
            { q: "What is this?", options: ["It is a colorful map.", "I am fine.", "Yes, I am.", "From Brazil."], a: "It is a colorful map." },
            { q: "Are they from the USA?", options: ["No, they are from England.", "They are twelve.", "Yes, I am.", "My name is Albert."], a: "No, they are from England." },
            { q: "Who are you?", options: ["I am the new student.", "It is a book.", "From Italy.", "Yes, it is."], a: "I am the new student." },
            { q: "Where are they?", options: ["They are in the hallway.", "They are fifteen.", "Yes, they are.", "From Canada."], a: "They are in the hallway." },
            { q: "Is the map big?", options: ["Yes, it is very big.", "I am twelve.", "No, I am not.", "From France."], a: "Yes, it is very big." },
            { q: "What is after nineteen?", options: ["It is twenty.", "I am fine.", "Yes, I am.", "From England."], a: "It is twenty." },
            { q: "Are you a student?", options: ["Yes, I study at REACH.", "I am from Germany.", "It is red.", "Nice to meet you."], a: "Yes, I study at REACH." },
            { q: "How are you today?", options: ["I am very happy.", "I am from Italy.", "My name is John.", "It is a cat."], a: "I am very happy." },
            { q: "Is it your book?", options: ["Yes, it is my English book.", "I am twelve.", "No, I am from Brazil.", "From China."], a: "Yes, it is my English book." }
        ],

        // TYPE 4: FIND MEANING (Required: 40 items)
        4: [
            { sent: "I want to **meet** new people at school.", word: "meet", options: ["Conhecer", "Sair", "Estudar", "Olhar"], a: "Conhecer", def: "To see and speak to someone for the first time." },
            { sent: "The **children** are playing in the park.", word: "children", options: ["Professores", "Crianças", "Cachorros", "Livros"], a: "Crianças", def: "Young people; the plural of child." },
            { sent: "We live in a very big **world**.", word: "world", options: ["Casa", "Escola", "Mundo", "Sala"], a: "Mundo", def: "The earth, together with all of its countries and people." },
            { sent: "Celine is a new **student** at REACH school.", word: "student", options: ["Diretora", "Professora", "Colega", "Estudante"], a: "Estudante", def: "A person who is studying at a school or college." },
            { sent: "Albert is my best **friend**.", word: "friend", options: ["Irmão", "Amigo", "Pai", "Professor"], a: "Amigo", def: "A person whom one knows and likes well." },
            { sent: "Mrs. Canales is a great **teacher**.", word: "teacher", options: ["Aluna", "Secretária", "Professora", "Médica"], a: "Professora", def: "A person who teaches, especially in a school." },
            { sent: "What is your **name**?", word: "name", options: ["Idade", "Nome", "Endereço", "País"], a: "Nome", def: "A word by which a person or thing is known." },
            { sent: "The **cat** is sleeping on the sofa.", word: "cat", options: ["Cachorro", "Pássaro", "Gato", "Peixe"], a: "Gato", def: "A small domesticated animal with soft fur often kept as a pet." },
            { sent: "My **dog** is very happy today.", word: "dog", options: ["Gato", "Cachorro", "Coelho", "Leão"], a: "Cachorro", def: "A domesticated animal often used for companionship or guarding." },
            { sent: "This is my English **book**.", word: "book", options: ["Caneta", "Lápis", "Livro", "Caderno"], a: "Livro", def: "A written or printed work consisting of pages glued together." },
            { sent: "**Nice** to meet you, Albert!", word: "Nice", options: ["Ruim", "Prazer/Legal", "Triste", "Difícil"], a: "Prazer/Legal", def: "Pleasant; used in greetings to show kindness." },
            { sent: "I am **fine**, thank you.", word: "fine", options: ["Mal", "Bem", "Cansado", "Doente"], a: "Bem", def: "In good health or satisfactory condition." },
            { sent: "Are you **ready** for class?", word: "ready", options: ["Pronto", "Atrasado", "Dormindo", "Longe"], a: "Pronto", def: "Prepared to do something." },
            { sent: "The school **bell** is ringing.", word: "bell", options: ["Porta", "Sino/Campainha", "Janela", "Telefone"], a: "Sino/Campainha", def: "A hollow metal object that makes a ringing sound." },
            { sent: "I am **fourteen** years old.", word: "fourteen", options: ["Quatro", "Quarenta", "Catorze", "Quatrocentos"], a: "Catorze", def: "The number equivalent to 14." },
            { sent: "One **hundred** students are here.", word: "hundred", options: ["Dez", "Cinquenta", "Cem", "Mil"], a: "Cem", def: "The number equivalent to ten times ten; 100." },
            { sent: "He is from **France**.", word: "France", options: ["França", "Japão", "Itália", "China"], a: "França", def: "A country in Western Europe." },
            { sent: "She is **Japanese**.", word: "Japanese", options: ["Japonesa", "Chinesa", "Alemã", "Espanhola"], a: "Japonesa", def: "A person from or relating to Japan." },
            { sent: "**People** are chatting in the hallway.", word: "People", options: ["Animais", "Pessoas", "Objetos", "Prédios"], a: "Pessoas", def: "Human beings in general." },
            { sent: "What is your **nationality**?", word: "nationality", options: ["Idade", "Nacionalidade", "Cidade", "Profissão"], a: "Nacionalidade", def: "The status of belonging to a particular nation." },
            { sent: "He is **Brazilian**.", word: "Brazilian", options: ["Brasileiro", "Americano", "Inglês", "Francês"], a: "Brasileiro", def: "A person from or relating to Brazil." },
            { sent: "Is the map **blue**?", word: "blue", options: ["Amarelo", "Verde", "Azul", "Vermelho"], a: "Azul", def: "Having the color of the clear sky." },
            { sent: "**Who** is the teacher?", word: "Who", options: ["Onde", "Quem", "Quando", "Como"], a: "Quem", def: "Used to ask about the identity of a person." },
            { sent: "**Where** are you from?", word: "Where", options: ["Quem", "Onde", "Qual", "Por que"], a: "Onde", def: "Used to ask about a place or position." },
            { sent: "I am **fifteen** years old.", word: "fifteen", options: ["Cinco", "Cinquenta", "Quinze", "Quinhentos"], a: "Quinze", def: "The number equivalent to 15." },
            { sent: "He is my **new** friend.", word: "new", options: ["Velho", "Novo", "Grande", "Pequeno"], a: "Novo", def: "Recently created, found, or arrived." },
            { sent: "The classroom is **cool**.", word: "cool", options: ["Quente", "Legal/Fresco", "Triste", "Feio"], a: "Legal/Fresco", def: "Fashionable or attractive; also moderately cold." },
            { sent: "Let's **go** to class.", word: "go", options: ["Vir", "Ficar", "Ir", "Parar"], a: "Ir", def: "To move from one place to another." },
            { sent: "**Welcome** to our school!", word: "Welcome", options: ["Adeus", "Bem-vindo", "Olá", "Por favor"], a: "Bem-vindo", def: "A greeting for someone arriving." },
            { sent: "I am **happy** today.", word: "happy", options: ["Triste", "Feliz", "Bravo", "Cansado"], a: "Feliz", def: "Feeling or showing pleasure or contentment." },
            { sent: "He is **Italian**.", word: "Italian", options: ["Italiano", "Espanhol", "Alemão", "Inglês"], a: "Italiano", def: "A person from or relating to Italy." },
            { sent: "She is from **Spain**.", word: "Spain", options: ["Espanha", "Alemanha", "China", "Canadá"], a: "Espanha", def: "A country in Southwestern Europe." },
            { sent: "I have **one** book.", word: "one", options: ["Um", "Onze", "Cem", "Primeiro"], a: "Um", def: "The lowest cardinal number; 1." },
            { sent: "There are **twenty** students.", word: "twenty", options: ["Dois", "Doze", "Vinte", "Duzentos"], a: "Vinte", def: "The number equivalent to two times ten; 20." },
            { sent: "**How old** are you?", word: "How old", options: ["Onde você mora?", "Quantos anos você tem?", "Como você vai?", "Qual o seu nome?"], a: "Quantos anos você tem?", def: "Used to ask about someone's age." },
            { sent: "The **hallway** is full.", word: "hallway", options: ["Corredor", "Sala", "Banheiro", "Pátio"], a: "Corredor", def: "A passage in a building." },
            { sent: "Look at the **globe**.", word: "globe", options: ["Mapa", "Globo", "Quadro", "Mesa"], a: "Globo", def: "A spherical representation of the earth." },
            { sent: "He is **Canadian**.", word: "Canadian", options: ["Canadense", "Americano", "Mexicano", "Cubano"], a: "Canadense", def: "A person from or relating to Canada." },
            { sent: "**Today** is Monday.", word: "Today", options: ["Ontem", "Amanhã", "Hoje", "Agora"], a: "Hoje", def: "On this present day." },
            { sent: "**Goodbye**, Celine!", word: "Goodbye", options: ["Olá", "Tchau/Adeus", "Bom dia", "Com licença"], a: "Tchau/Adeus", def: "Used when leaving someone." }
        ],

        // TYPE 5: CORRECT THE SENTENCE (Required: 40 items)
        5: [
            { sent: "I **is** a student.", correct: "am" },
            { sent: "They **is** from Brazil.", correct: "are" },
            { sent: "She **am** fourteen years old.", correct: "is" },
            { sent: "We **is** ready for class.", correct: "are" },
            { sent: "He **are** a teacher.", correct: "is" },
            { sent: "You **am** my friend.", correct: "are" },
            { sent: "It **am** a blue book.", correct: "is" },
            { sent: "**Is** you from Canada?", correct: "Are" },
            { sent: "**Are** he a student?", correct: "Is" },
            { sent: "**Am** they happy today?", correct: "Are" },
            { sent: "Where **is** you from?", correct: "are" },
            { sent: "How old **am** he?", correct: "is" },
            { sent: "I **not am** sad.", correct: "am not" },
            { sent: "She **not is** Japanese.", correct: "is not" },
            { sent: "They **not are** from England.", correct: "are not" },
            { sent: "My name **are** Albert.", correct: "is" },
            { sent: "Celine and Albert **is** friends.", correct: "are" },
            { sent: "The children **is** in the hallway.", correct: "are" },
            { sent: "Ten and ten **is** twenty.", correct: "are" },
            { sent: "He is from **Japan-ese**.", correct: "Japan" },
            { sent: "She is **Spain**.", correct: "Spanish" },
            { sent: "We are from **Brazilian**.", correct: "Brazil" },
            { sent: "They are **Italy**.", correct: "Italian" },
            { sent: "**Who** are you from?", correct: "Where" },
            { sent: "**Where** is that boy?", correct: "Who" },
            { sent: "**How** is your name?", correct: "What" },
            { sent: "I am **fourteen years**.", correct: "fourteen years old" },
            { sent: "Albert **am** fourteen.", correct: "is" },
            { sent: "The world **are** big.", correct: "is" },
            { sent: "**Am** Celine a student?", correct: "Is" },
            { sent: "You and I **am** happy.", correct: "are" },
            { sent: "**It is not** a cat? (Interrogative)", correct: "Is it a" },
            { sent: "She is a **teach**.", correct: "teacher" },
            { sent: "He is a **studen**.", correct: "student" },
            { sent: "The map **are** colorful.", correct: "is" },
            { sent: "I **are** fifteen.", correct: "am" },
            { sent: "They **is** Chinese.", correct: "are" },
            { sent: "**What** old are you?", correct: "How" },
            { sent: "Nice **for** meet you.", correct: "to" },
            { sent: "Welcome **at** school.", correct: "to" }
        ],

        // TYPE 6: MATCH SENTENCES (Required: 40 sets - Part 1/4: Sets 1-10)
        6: [
            { 
                pairs: [
                    { a: "What is your name?", b: "My name is Celine." },
                    { a: "How are you?", b: "I am fine, thanks." },
                    { a: "Who is that?", b: "That is Mr. D." },
                    { a: "Nice to meet you!", b: "Nice to meet you, too!" },
                    { a: "Are you ready?", b: "Yes, I am ready!" }
                ] 
            },
            { 
                pairs: [
                    { a: "Where are you from?", b: "I am from Australia." },
                    { a: "Are you Brazilian?", b: "No, I am Italian." },
                    { a: "Is he from Canada?", b: "Yes, he is Canadian." },
                    { a: "Where is Albert?", b: "He is in the hallway." },
                    { a: "Are they students?", b: "Yes, they are in my class." }
                ] 
            },
            { 
                pairs: [
                    { a: "How old are you?", b: "I am fifteen." },
                    { a: "Is it a big school?", b: "Yes, REACH is a big school." },
                    { a: "What is this?", b: "It is a colorful globe." },
                    { a: "Are you and Albert friends?", b: "Yes, we are!" },
                    { a: "Is she fourteen?", b: "No, she is fifteen." }
                ] 
            },
            { 
                pairs: [
                    { a: "Who are you?", b: "I am the new student." },
                    { a: "Where is Celine from?", b: "She is from Australia." },
                    { a: "Is the cat on the sofa?", b: "Yes, it is sleeping." },
                    { a: "How old is Albert?", b: "He is fourteen years old." },
                    { a: "Are we late for class?", b: "No, the bell is ringing now." }
                ] 
            },
            { 
                pairs: [
                    { a: "What is your nationality?", b: "I am English." },
                    { a: "Is the map blue?", b: "No, it is very colorful." },
                    { a: "Who is the teacher?", b: "Mrs. Canales is the teacher." },
                    { a: "Are they from Japan?", b: "No, they are from China." },
                    { a: "Is it your book?", b: "Yes, it is my English book." }
                ] 
            },
            { 
                pairs: [
                    { a: "How is the world?", b: "The world is big and new." },
                    { a: "Are you happy today?", b: "Yes, I am very happy!" },
                    { a: "Where is the locker?", b: "It is in the hallway." },
                    { a: "Is it time for class?", b: "Yes, let's go!" },
                    { a: "What is the number?", b: "The number is fifty." }
                ] 
            },
            { 
                pairs: [
                    { a: "What is after nineteen?", b: "The number is twenty." },
                    { a: "Are you fourteen or fifteen?", b: "I am fifteen years old." },
                    { a: "Is the dog small?", b: "No, it is a big dog." },
                    { a: "Where is the teacher?", b: "She is in the classroom." },
                    { a: "Who is Celine?", b: "She is Albert's new friend." }
                ] 
            },
            { 
                pairs: [
                    { a: "Are you from England?", b: "No, I am from the USA." },
                    { a: "Is he a good student?", b: "Yes, he is great!" },
                    { a: "What is her name?", b: "Her name is Mary." },
                    { a: "Are we friends of the world?", b: "Yes, we are!" },
                    { a: "How are the people?", b: "They are very nice." }
                ] 
            },
            { 
                pairs: [
                    { a: "Is it a mirror?", b: "Yes, look at your reflection." },
                    { a: "Where is Japan?", b: "It is a country in Asia." },
                    { a: "Are you ready for the adventure?", b: "Yes, I am!" },
                    { a: "How old is the teacher?", b: "She is thirty years old." },
                    { a: "Is the school bell ringing?", b: "Yes, listen!" }
                ] 
            },
            { 
                pairs: [
                    { a: "What is after ninety-nine?", b: "It is one hundred." },
                    { a: "Is he American?", b: "No, he is Canadian." },
                    { a: "Are you a boy or a girl?", b: "I am a girl." },
                    { a: "Where are the students?", b: "They are at school." },
                    { a: "Who is the man in the photo?", b: "He is Mr. D." }
                ] 
            },
            { 
            pairs: [
                { a: "I am...", b: "a student at REACH." },
                { a: "You are...", b: "my new friend." },
                { a: "He is...", b: "from Canada." },
                { a: "She is...", b: "a nice teacher." },
                { a: "It is...", b: "a big world." }
            ] 
        },
        // Set 12: 1st half to 2nd half
        { 
            pairs: [
                { a: "We are...", b: "ready for class." },
                { a: "They are...", b: "from Japan." },
                { a: "My name...", b: "is Celine." },
                { a: "Your name...", b: "is Albert." },
                { a: "His name...", b: "is Mr. D." }
            ] 
        },
        // Set 13: 1st half to 2nd half (Negatives)
        { 
            pairs: [
                { a: "I am not...", b: "sad today." },
                { a: "You are not...", b: "late for school." },
                { a: "He is not...", b: "from the USA." },
                { a: "She is not...", b: "the teacher." },
                { a: "They are not...", b: "Brazilian." }
            ] 
        },
        // Set 14: 1st half to 2nd half (Questions)
        { 
            pairs: [
                { a: "Where are...", b: "you from?" },
                { a: "How old...", b: "are you?" },
                { a: "Who is...", b: "that boy?" },
                { a: "What is...", b: "your name?" },
                { a: "How are...", b: "you today?" }
            ] 
        },
        // Set 15: 1st half to 2nd half (Interaction)
        { 
            pairs: [
                { a: "Nice to...", b: "meet you." },
                { a: "Welcome to...", b: "REACH school!" },
                { a: "Let's...", b: "go to class." },
                { a: "Ready for...", b: "the adventure!" },
                { a: "See you...", b: "tomorrow!" }
            ] 
        },
        // Set 16: 1st half to 2nd half (Locations)
        { 
            pairs: [
                { a: "The world...", b: "is very big." },
                { a: "The cat...", b: "is on the sofa." },
                { a: "The students...", b: "are in the hallway." },
                { a: "The teacher...", b: "is in the classroom." },
                { a: "The map...", b: "is on the wall." }
            ] 
        },
        // Set 17: 1st half to 2nd half (Age)
        { 
            pairs: [
                { a: "I am fourteen...", b: "years old." },
                { a: "He is twelve...", b: "years old." },
                { a: "She is fifteen...", b: "years old." },
                { a: "They are ten...", b: "years old." },
                { a: "One hundred...", b: "is a big number." }
            ] 
        },
        // Set 18: 1st half to 2nd half (Interrogative)
        { 
            pairs: [
                { a: "Are you...", b: "a student?" },
                { a: "Is he...", b: "from Canada?" },
                { a: "Is she...", b: "your friend?" },
                { a: "Are they...", b: "happy today?" },
                { a: "Am I...", b: "late?" }
            ] 
        },
        // Set 19: 1st half to 2nd half (Origin)
        { 
            pairs: [
                { a: "I am from...", b: "Brazil." },
                { a: "She is from...", b: "Australia." },
                { a: "He is from...", b: "England." },
                { a: "They are from...", b: "Japan." },
                { a: "We are from...", b: "Germany." }
            ] 
        },
        // Set 20: 1st half to 2nd half (Numbers)
        { 
            pairs: [
                { a: "Eleven and one...", b: "is twelve." },
                { a: "Twenty and ten...", b: "is thirty." },
                { a: "Fifty and fifty...", b: "is one hundred." },
                { a: "Five and five...", b: "is ten." },
                { a: "Nineteen and one...", b: "is twenty." }
            ] 
        },
        // Set 21: English to Portuguese
        { 
            pairs: [
                { a: "I am a student.", b: "Eu sou um estudante." },
                { a: "You are my friend.", b: "Você é meu amigo." },
                { a: "He is from Canada.", b: "Ele é do Canadá." },
                { a: "She is a teacher.", b: "Ela é uma professora." },
                { a: "It is a book.", b: "Isto é um livro." }
            ] 
        },
        // Set 22: English to Portuguese
        { 
            pairs: [
                { a: "Where are you from?", b: "De onde você é?" },
                { a: "How old are you?", b: "Quantos anos você tem?" },
                { a: "What is your name?", b: "Qual é o seu nome?" },
                { a: "Nice to meet you.", b: "Prazer em conhecê-lo." },
                { a: "How are you?", b: "Como você está?" }
            ] 
        },
        // Set 23: English to Portuguese
        { 
            pairs: [
                { a: "I am from Brazil.", b: "Eu sou do Brasil." },
                { a: "He is American.", b: "Ele é americano." },
                { a: "She is Japanese.", b: "Ela é japonesa." },
                { a: "They are Chinese.", b: "Eles são chineses." },
                { a: "We are Italian.", b: "Nós somos italianos." }
            ] 
        },
        // Set 24: English to Portuguese (Numbers)
        { 
            pairs: [
                { a: "One hundred", b: "Cem" },
                { a: "Fifty", b: "Cinquenta" },
                { a: "Fourteen", b: "Catorze" },
                { a: "Twelve", b: "Doze" },
                { a: "Twenty", b: "Vinte" }
            ] 
        },
        // Set 25: English to Portuguese (Greetings)
        { 
            pairs: [
                { a: "Welcome!", b: "Bem-vindo!" },
                { a: "Goodbye!", b: "Adeus!" },
                { a: "Let's go!", b: "Vamos!" },
                { a: "See you later!", b: "Vejo você mais tarde!" },
                { a: "Ready?", b: "Pronto?" }
            ] 
        },
        // Set 26: English to Portuguese (Sentences)
        { 
            pairs: [
                { a: "The world is big.", b: "O mundo é grande." },
                { a: "The cat is small.", b: "O gato é pequeno." },
                { a: "I am happy.", b: "Eu estou feliz." },
                { a: "He is not sad.", b: "Ele não está triste." },
                { a: "Are they ready?", b: "Eles estão prontos?" }
            ] 
        },
        // Set 27: English to Portuguese (Objects)
        { 
            pairs: [
                { a: "Reflection", b: "Reflexo" },
                { a: "Mirror", b: "Espelho" },
                { a: "Hallway", b: "Corredor" },
                { a: "Globe", b: "Globo" },
                { a: "School bell", b: "Sino da escola" }
            ] 
        },
        // Set 28: English to Portuguese (Descriptors)
        { 
            pairs: [
                { a: "New people", b: "Novas pessoas" },
                { a: "Nice teacher", b: "Professora legal" },
                { a: "Good student", b: "Bom aluno" },
                { a: "Best friend", b: "Melhor amigo" },
                { a: "Young girl", b: "Garota jovem" }
            ] 
        },
        // Set 29: English to Portuguese (Age Phrases)
        { 
            pairs: [
                { a: "Fourteen years old", b: "Catorze anos de idade" },
                { a: "Twelve years old", b: "Doze anos de idade" },
                { a: "Fifteen years old", b: "Quinze anos de idade" },
                { a: "Ten years old", b: "Dez anos de idade" },
                { a: "One hundred years old", b: "Cem anos de idade" }
            ] 
        },
        // Set 30: English to Portuguese (Negative Sentences)
        { 
            pairs: [
                { a: "I am not late.", b: "Eu não estou atrasado." },
                { a: "You are not from Japan.", b: "Você não é do Japão." },
                { a: "He is not Italian.", b: "Ele não é italiano." },
                { a: "She is not ready.", b: "Ela não está pronta." },
                { a: "We are not students.", b: "Nós não somos estudantes." }
            ] 
        },
        // Set 31: Word to Portuguese Simple Definition (People)
        { 
            pairs: [
                { a: "Student", b: "Uma pessoa que estuda em uma escola." },
                { a: "Teacher", b: "Uma pessoa que ensina os alunos." },
                { a: "Friend", b: "Uma pessoa que você conhece e de quem gosta." },
                { a: "Children", b: "Pessoas jovens ou crianças." },
                { a: "People", b: "Seres humanos em geral." }
            ] 
        },
        // Set 32: Word to Portuguese Simple Definition (Places)
        { 
            pairs: [
                { a: "World", b: "O planeta Terra e todas as pessoas." },
                { a: "Country", b: "Uma nação como o Brasil ou o Japão." },
                { a: "School", b: "Um lugar onde você vai para aprender." },
                { a: "Hallway", b: "Um corredor longo entre as salas." },
                { a: "Classroom", b: "A sala onde você estuda." }
            ] 
        },
        // Set 33: Word to Portuguese Simple Definition (Objects)
        { 
            pairs: [
                { a: "Map", b: "Um desenho plano de um lugar." },
                { a: "Globe", b: "Um modelo redondo do mundo." },
                { a: "Mirror", b: "Algo que mostra o seu reflexo." },
                { a: "Book", b: "Páginas de texto usadas para leitura." },
                { a: "Locker", b: "Um armário para guardar coisas da escola." }
            ] 
        },
        // Set 34: Word to Portuguese Simple Definition (Numbers)
        { 
            pairs: [
                { a: "One", b: "O primeiro número cardinal." },
                { a: "Ten", b: "Duas vezes o número cinco." },
                { a: "Twenty", b: "Duas vezes o número dez." },
                { a: "Fifty", b: "Cinco vezes o número dez." },
                { a: "Hundred", b: "Dez vezes o número dez." }
            ] 
        },
        // Set 35: Word to Portuguese Simple Definition (Greetings)
        { 
            pairs: [
                { a: "Hello", b: "Uma palavra usada para dizer 'oi'." },
                { a: "Goodbye", b: "Uma palavra usada para dizer 'tchau'." },
                { a: "Welcome", b: "Uma saudação para quem acaba de chegar." },
                { a: "Meet", b: "Ver ou falar com alguém pela primeira vez." },
                { a: "Chat", b: "Conversar de forma amigável." }
            ] 
        },
        // Set 36: Word to Portuguese Simple Definition (Adjectives)
        { 
            pairs: [
                { a: "Happy", b: "Sentir-se bem e sorridente." },
                { a: "Sad", b: "Sentir-se infeliz ou para baixo." },
                { a: "Nice", b: "Alguém gentil ou agradável." },
                { a: "Ready", b: "Preparado para começar algo." },
                { a: "Late", b: "Chegar depois do horário correto." }
            ] 
        },
        // Set 37: Word to Portuguese Simple Definition (Pronouns)
        { 
            pairs: [
                { a: "I", b: "A pessoa que está falando (Eu)." },
                { a: "You", b: "A pessoa com quem se fala (Você)." },
                { a: "He", b: "Uma pessoa do sexo masculino (Ele)." },
                { a: "She", b: "Uma pessoa do sexo feminino (Ela)." },
                { a: "We", b: "Eu e outras pessoas (Nós)." }
            ] 
        },
        // Set 38: Word to Portuguese Simple Definition (Countries)
        { 
            pairs: [
                { a: "Brazil", b: "Um país na América do Sul." },
                { a: "USA", b: "Um país na América do Norte." },
                { a: "England", b: "Um país na Europa onde se fala inglês." },
                { a: "Japan", b: "Um país na Ásia." },
                { a: "China", b: "Um país muito grande na Ásia." }
            ] 
        },
        // Set 39: Word to Portuguese Simple Definition (Animals & Misc)
        { 
            pairs: [
                { a: "Dog", b: "Um animal de estimação que late." },
                { a: "Cat", b: "Um animal de estimação que mia." },
                { a: "Animal", b: "Um ser vivo como um gato ou um cão." },
                { a: "Reflection", b: "A imagem que você vê no espelho." },
                { a: "School bell", b: "O objeto que toca no início da aula." }
            ] 
        },
        // Set 40: Word to Portuguese Simple Definition (Personal Info)
        { 
            pairs: [
                { a: "Name", b: "Como as pessoas chamam você." },
                { a: "Age", b: "O tempo que você já viveu." },
                { a: "Nationality", b: "O país ou nação ao qual você pertence." },
                { a: "Number", b: "Um objeto matemático usado para contar." },
                { a: "Years old", b: "Expressão usada para dizer a idade." }
            ] 
        }            
        ],

        // TYPE 7: BEST ANSWER (Required: 40 items)
        7: [
            { q: "Where are you from?", options: ["I am from Brazil.", "I am fine, thanks.", "My name is Albert.", "I am fourteen years old."], a: "I am from Brazil." },
            { q: "How old is Celine?", options: ["She is from Australia.", "She is fifteen years old.", "Her name is Celine.", "She is a student."], a: "She is fifteen years old." },
            { q: "Who is that man?", options: ["It is a mirror.", "He is Mr. D.", "He is from Canada.", "He is very happy."], a: "He is Mr. D." },
            { q: "What is your name?", options: ["I am twelve.", "I am from Japan.", "My name is Sara.", "Yes, it is."], a: "My name is Sara." },
            { q: "Where is the cat?", options: ["It is black and white.", "It is on the sofa.", "It is a happy cat.", "It is two years old."], a: "It is on the sofa." },
            { q: "How old are you?", options: ["I am a new student.", "I am from England.", "I am fourteen.", "My name is Paul."], a: "I am fourteen." },
            { q: "Who are your friends?", options: ["They are in the hallway.", "They are Albert and Celine.", "They are from Italy.", "They are very nice."], a: "They are Albert and Celine." },
            { q: "What is in your locker?", options: ["I am at school.", "My books are in my locker.", "It is twelve o'clock.", "He is my friend."], a: "My books are in my locker." },
            { q: "Where is the school bell?", options: ["It is ringing.", "It is on the wall.", "It is loud.", "It is a bell."], a: "It is on the wall." },
            { q: "How old is the world?", options: ["It is very big.", "It is many years old.", "It is a globe.", "It is from the sun."], a: "It is many years old." },
            { q: "Who is the teacher?", options: ["She is from Spain.", "Mrs. Canales is the teacher.", "She is thirty years old.", "She is very nice."], a: "Mrs. Canales is the teacher." },
            { q: "What is after number nineteen?", options: ["It is number twenty.", "It is a student.", "It is from China.", "It is my friend."], a: "It is number twenty." },
            { q: "Where are Albert and Celine?", options: ["They are friends.", "They are in the classroom.", "They are fourteen.", "They are students."], a: "They are in the classroom." },
            { q: "How old is your dog?", options: ["It is from Germany.", "It is three years old.", "Its name is Rex.", "It is a big dog."], a: "It is three years old." },
            { q: "Who are you?", options: ["I am from the USA.", "I am the new English teacher.", "I am fine, thank you.", "I am happy today."], a: "I am the new English teacher." },
            { q: "What is your nationality?", options: ["I am from France.", "I am French.", "I am twelve.", "My name is Pierre."], a: "I am French." },
            { q: "Where is Canada?", options: ["It is a big country.", "It is in North America.", "It is cold there.", "I am from Canada."], a: "It is in North America." },
            { q: "How old is that book?", options: ["It is a colorful book.", "It is ten years old.", "It is on the table.", "It is my book."], a: "It is ten years old." },
            { q: "Who is the girl near the lockers?", options: ["She is from Japan.", "That is Celine.", "She is a student.", "She is fifteen."], a: "That is Celine." },
            { q: "What is on the table?", options: ["A globe is on the table.", "It is in the classroom.", "I am a student.", "He is my friend."], a: "A globe is on the table." },
            { q: "Where are the students?", options: ["They are chatting.", "They are in the hallway.", "They are nice people.", "They are from Brazil."], a: "They are in the hallway." },
            { q: "How old are your parents?", options: ["They are from Italy.", "They are forty years old.", "They are at home.", "They are happy."], a: "They are forty years old." },
            { q: "Who is the principal of the school?", options: ["He is from Canada.", "Mr. Smith is the principal.", "He is in his office.", "He is very old."], a: "Mr. Smith is the principal." },
            { q: "What is your favorite number?", options: ["My favorite number is seven.", "I am from Germany.", "Yes, I like numbers.", "It is a big number."], a: "My favorite number is seven." },
            { q: "Where is the map?", options: ["It is colorful.", "It is on the whiteboard.", "It is from England.", "It is a map of the world."], a: "It is on the whiteboard." },
            { q: "How old is the new student?", options: ["He is from China.", "He is twelve years old.", "His name is Lee.", "He is a good student."], a: "He is twelve years old." },
            { q: "Who is in the classroom?", options: ["It is a big room.", "The teacher is in the classroom.", "They are from Japan.", "Yes, I am."], a: "The teacher is in the classroom." },
            { q: "What is the color of the book?", options: ["It is from the library.", "It is blue.", "It is on the desk.", "It is a new book."], a: "It is blue." },
            { q: "Where is London?", options: ["It is a big city.", "It is in England.", "I am from London.", "It is very beautiful."], a: "It is in England." },
            { q: "How old are the twins?", options: ["They are from Spain.", "They are ten years old.", "They are brothers.", "They are students."], a: "They are ten years old." },
            { q: "Who is your best friend?", options: ["He is from Canada.", "Albert is my best friend.", "He is fourteen.", "He is at school."], a: "Albert is my best friend." },
            { q: "What is that sound?", options: ["It is in the hallway.", "It is the school bell.", "Yes, I hear it.", "It is loud."], a: "It is the school bell." },
            { q: "Where are you right now?", options: ["I am fine.", "I am in the library.", "I am a student.", "I am fourteen."], a: "I am in the library." },
            { q: "How old is the building?", options: ["It is from 1990.", "It is fifty years old.", "It is very big.", "It is a school."], a: "It is fifty years old." },
            { q: "Who is talking to the teacher?", options: ["They are from Brazil.", "Sara is talking to the teacher.", "In the classroom.", "Yes, she is."], a: "Sara is talking to the teacher." },
            { q: "What is the capital of Japan?", options: ["It is in Asia.", "Tokyo is the capital.", "It is a big city.", "I am from Tokyo."], a: "Tokyo is the capital." },
            { q: "Where is the bathroom?", options: ["It is clean.", "It is near the classroom.", "I am in the bathroom.", "Yes, it is."], a: "It is near the classroom." },
            { q: "How old is the universe?", options: ["It is very big.", "It is billions of years old.", "It is dark.", "It is full of stars."], a: "It is billions of years old." },
            { q: "Who are those people?", options: ["They are from France.", "They are new students.", "They are happy.", "In the park."], a: "They are new students." },
            { q: "What is the answer to question one?", options: ["It is a question.", "The answer is 'A'.", "I am a student.", "In the book."], a: "The answer is 'A'." }
        ],

        // TYPE 8: INCORRECT VOCABULARY (Required: 40 items)
        8: [
            { sent: "I am from Brazil; I am **Canada**.", wrong: "Canada", options: ["Japan", "Brazilian", "Student", "Teacher"], a: "Brazilian" },
            { sent: "The **school bell** is sleeping on the sofa.", wrong: "school bell", options: ["Teacher", "Cat", "World", "Map"], a: "Cat" },
            { sent: "Mrs. Canales is my **student**; she teaches English.", wrong: "student", options: ["Friend", "Teacher", "Dog", "Globe"], a: "Teacher" },
            { sent: "I have **one hundred** fingers on my two hands.", wrong: "one hundred", options: ["Fifty", "Ten", "Twelve", "One"], a: "Ten" },
            { sent: "Albert is fourteen years old; he is a **girl**.", wrong: "girl", options: ["boy", "teacher", "cat", "country"], a: "boy" },
            { sent: "Celine is from **Australian**; she is from Australia.", wrong: "Australian", options: ["England", "Australia", "Japan", "Brazil"], a: "Australia" },
            { sent: "Look at your reflection in the **book**.", wrong: "book", options: ["Window", "Mirror", "Locker", "Bell"], a: "Mirror" },
            { sent: "We live in a big **locker**.", wrong: "locker", options: ["World", "Pencil", "Name", "Dog"], a: "World" },
            { sent: "**My name** is fourteen years old.", wrong: "My name", options: ["Friend", "Brother", "I", "Dog"], a: "I" },
            { sent: "The **globe** is ringing; it is time for class.", wrong: "globe", options: ["Map", "School bell", "Teacher", "Student"], a: "School bell" },
            { sent: "Ten and ten is **fifty**.", wrong: "fifty", options: ["Twelve", "Twenty", "One hundred", "Fourteen"], a: "Twenty" },
            { sent: "He is from Japan; he is **Chinese**.", wrong: "Chinese", options: ["American", "Japanese", "Brazilian", "Italian"], a: "Japanese" },
            { sent: "The **students** are teaching the class.", wrong: "students", options: ["Cats", "Teacher", "Books", "Map"], a: "Teacher" },
            { sent: "I read my **globe** every day.", wrong: "globe", options: ["Mirror", "Book", "Locker", "Bell"], a: "Book" },
            { sent: "One **ten** is after ninety-nine.", wrong: "ten", options: ["Fifty", "Hundred", "Twelve", "Fourteen"], a: "Hundred" },
            { sent: "She is from **Spanish**; she is from Spain.", wrong: "Spanish", options: ["Italy", "Spain", "France", "China"], a: "Spain" },
            { sent: "Open the **mirror** to get your books.", wrong: "mirror", options: ["Bell", "Locker", "Dog", "Teacher"], a: "Locker" },
            { sent: "He is a **cat**; he studies at REACH school.", wrong: "cat", options: ["Teacher", "Student", "Map", "Globe"], a: "Student" },
            { sent: "Nice to **chat** you!", wrong: "chat", options: ["Meet", "See", "Look", "Bell"], a: "Meet" },
            { sent: "The **hallway** is a round model of the earth.", wrong: "hallway", options: ["Locker", "Globe", "Map", "Book"], a: "Globe" },
            { sent: "My **dog** is from Canada; he is a person.", wrong: "dog", options: ["Cat", "Friend", "Book", "Bell"], a: "Friend" },
            { sent: "I have **fifteen** fingers on one hand.", wrong: "fifteen", options: ["Ten", "Five", "Twenty", "Hundred"], a: "Five" },
            { sent: "She is **Brazilian**; she is from England.", wrong: "Brazilian", options: ["Japanese", "English", "American", "Italian"], a: "English" },
            { sent: "The **teacher** is barking in the yard.", wrong: "teacher", options: ["Student", "Dog", "Cat", "Bell"], a: "Dog" },
            { sent: "I am from the **American**; I am from the USA.", wrong: "American", options: ["Canada", "USA", "China", "Japan"], a: "USA" },
            { sent: "Today is my **number**; I am fourteen.", wrong: "number", options: ["Name", "Birthday", "World", "Map"], a: "Birthday" },
            { sent: "The **book** is a passage between classrooms.", wrong: "book", options: ["Locker", "Hallway", "Globe", "Mirror"], a: "Hallway" },
            { sent: "He is **Italian**; he is from China.", wrong: "Italian", options: ["Brazilian", "Chinese", "American", "English"], a: "Chinese" },
            { sent: "Look at the **bell** to see the countries.", wrong: "bell", options: ["Mirror", "Map", "Locker", "Student"], a: "Map" },
            { sent: "I have one hundred **head**.", wrong: "head", options: ["Fifty", "One", "Twelve", "Fourteen"], a: "One" },
            { sent: "She is my **dog**; her name is Mary.", wrong: "dog", options: ["Cat", "Sister/Friend", "Book", "Locker"], a: "Sister/Friend" },
            { sent: "The **teacher** is sixteen years old; he is in 6th grade.", wrong: "teacher", options: ["Parent", "Student", "Principal", "Animal"], a: "Student" },
            { sent: "He is **English**; he is from Germany.", wrong: "English", options: ["Japanese", "German", "Brazilian", "French"], a: "German" },
            { sent: "This is a **locker** of the city.", wrong: "locker", options: ["Bell", "Map", "Globe", "Cat"], a: "Map" },
            { sent: "I am from **French**; I am from France.", wrong: "French", options: ["Spain", "France", "Japan", "Italy"], a: "France" },
            { sent: "The **map** is ringing; class starts now.", wrong: "map", options: ["Teacher", "School bell", "Student", "Book"], a: "School bell" },
            { sent: "Ten and ten is **twelve**.", wrong: "twelve", options: ["Fifty", "Twenty", "Hundred", "Fourteen"], a: "Twenty" },
            { sent: "He is my **locker**; his name is John.", wrong: "locker", options: ["Bell", "Friend", "Map", "Globe"], a: "Friend" },
            { sent: "She is from **Japanese**; she is from Japan.", wrong: "Japanese", options: ["China", "Japan", "England", "Brazil"], a: "Japan" },
            { sent: "I have **fifty** eyes.", wrong: "fifty", options: ["Twelve", "Two", "Ten", "One"], a: "Two" }
        ],

        // TYPE 9: LISTEN AND ANSWER (Required: 40 items - Part 1/2)
        9: [
            { audio: "Where are you from?", options: ["I am from Canada.", "I am fourteen.", "My name is Albert.", "I am fine, thanks."], a: "I am from Canada." },
            { audio: "How old are you?", options: ["I am from Brazil.", "I am twelve years old.", "Yes, I am a student.", "It is a colorful book."], a: "I am twelve years old." },
            { audio: "What is your name?", options: ["I am from Australia.", "I am fifteen.", "My name is Celine.", "No, it isn't."], a: "My name is Celine." },
            { audio: "Are you ready for class?", options: ["I am from England.", "My name is Sara.", "Yes, I am ready!", "It is number fifty."], a: "Yes, I am ready!" },
            { audio: "Who is that boy?", options: ["It is blue.", "That is Albert.", "I am twelve.", "From Japan."], a: "That is Albert." },
            { audio: "What is this?", options: ["I am fine.", "It is a globe.", "She is the teacher.", "I am fourteen."], a: "It is a globe." },
            { audio: "Where are the students?", options: ["They are in the hallway.", "They are fifteen.", "Yes, they are.", "My name is Mr. D."], a: "They are in the hallway." },
            { audio: "How are you today?", options: ["I am from Canada.", "I am twelve.", "I am very happy!", "It is a cat."], a: "I am very happy!" },
            { audio: "Is the cat on the sofa?", options: ["My name is Celine.", "Yes, it is.", "I am from Italy.", "It is number twenty."], a: "Yes, it is." },
            { audio: "How old is the teacher?", options: ["She is from Spain.", "She is thirty years old.", "Her name is Mrs. Canales.", "Yes, she is nice."], a: "She is thirty years old." },
            { audio: "What is your nationality?", options: ["I am twelve.", "I am Brazilian.", "I am in the hallway.", "My name is Albert."], a: "I am Brazilian." },
            { audio: "Where is the map?", options: ["It is on the wall.", "It is colorful.", "Yes, it is.", "I am from China."], a: "It is on the wall." },
            { audio: "Who is the teacher?", options: ["It is a book.", "Mrs. Canales is the teacher.", "She is from France.", "I am fourteen."], a: "Mrs. Canales is the teacher." },
            { audio: "Are you a student?", options: ["I am twelve years old.", "Yes, I am.", "From the USA.", "My name is Sara."], a: "Yes, I am." },
            { audio: "What is the number after nineteen?", options: ["It is twenty.", "I am from Japan.", "It is a dog.", "She is my friend."], a: "It is twenty." },
            { audio: "How old is Celine?", options: ["She is from Australia.", "She is fifteen.", "Her name is Celine.", "Yes, she is."], a: "She is fifteen." },
            { audio: "Where is Japan?", options: ["It is in Asia.", "It is a big number.", "I am Japanese.", "My name is Albert."], a: "It is in Asia." },
            { audio: "Who are they?", options: ["They are in the hallway.", "They are my new friends.", "They are from Canada.", "They are twelve."], a: "They are my new friends." },
            { audio: "What color is the book?", options: ["It is blue.", "It is on the desk.", "It is my book.", "I am fourteen."], a: "It is blue." },
            { audio: "Is Albert from Canada?", options: ["I am twelve.", "Yes, he is.", "My name is Celine.", "From the lockers."], a: "Yes, he is." },
            { audio: "How are you?", options: ["I am from Germany.", "I am fine, thanks.", "My name is Paul.", "She is fourteen."], a: "I am fine, thanks." },
        { audio: "Where is the locker?", options: ["It is number ten.", "It is near the classroom.", "Yes, it is.", "I am a student."], a: "It is near the classroom." },
        { audio: "What is your favorite number?", options: ["My favorite number is seven.", "I am from Italy.", "I am very happy.", "Nice to meet you."], a: "My favorite number is seven." },
        { audio: "Who is in the classroom?", options: ["It is a big room.", "The students are in the classroom.", "From Brazil.", "It is twelve o'clock."], a: "The students are in the classroom." },
        { audio: "Are you fourteen years old?", options: ["My name is Albert.", "No, I am fifteen.", "From Canada.", "It is a colorful map."], a: "No, I am fifteen." },
        { audio: "Where is Albert?", options: ["He is fourteen.", "He is in the hallway.", "His name is Albert.", "Yes, he is."], a: "He is in the hallway." },
        { audio: "What is the capital of France?", options: ["It is a country.", "Paris is the capital.", "I am from France.", "She is French."], a: "Paris is the capital." },
        { audio: "How old is your dog?", options: ["It is from England.", "It is two years old.", "Its name is Rex.", "Yes, it is happy."], a: "It is two years old." },
        { audio: "Who is the principal?", options: ["He is in the office.", "Mr. Smith is the principal.", "It is a big school.", "I am a student."], a: "Mr. Smith is the principal." },
        { audio: "Is the globe colorful?", options: ["I am from Japan.", "Yes, it is very colorful.", "My name is Sara.", "It is number one hundred."], a: "Yes, it is very colorful." },
        { audio: "Where are they from?", options: ["They are students.", "They are from China.", "They are twelve.", "Yes, they are."], a: "They are from China." },
        { audio: "What is in the locker?", options: ["I am fine.", "My books are in the locker.", "She is my teacher.", "From Australia."], a: "My books are in the locker." },
        { audio: "How are the people here?", options: ["They are from Italy.", "They are very nice.", "They are fourteen.", "My name is Albert."], a: "They are very nice." },
        { audio: "Is the school bell ringing?", options: ["I am late.", "Yes, it is ringing now.", "From the hallway.", "It is number fifty."], a: "Yes, it is ringing now." },
        { audio: "What is your favorite color?", options: ["I am from Brazil.", "My favorite color is blue.", "I am twelve.", "Nice to meet you."], a: "My favorite color is blue." },
        { audio: "Where are we?", options: ["We are happy.", "We are at REACH school.", "We are students.", "We are fourteen."], a: "We are at REACH school." },
        { audio: "Who are you talking to?", options: ["From Canada.", "I am talking to Celine.", "It is a cat.", "Yes, I am."], a: "I am talking to Celine." },
        { audio: "How old is the world?", options: ["It is very big.", "It is billions of years old.", "It is a globe.", "From the lockers."], a: "It is billions of years old." },
        { audio: "What is the total of ten and ten?", options: ["It is twenty.", "I am fine.", "From Spain.", "My name is Paul."], a: "It is twenty." },
        { audio: "Are the books new?", options: ["I am from England.", "Yes, they are new.", "She is fourteen.", "It is a colorful map."], a: "Yes, they are new." }
    ],

    // TYPE 10: COMPLETE SENTENCES (Required: 40 items - Part 1/2)
    10: [
        { audio: "I am a student and I am from Brazil.", sent: "I am a ___ and I am from ___.", blanks: ["student", "Brazil"] },
        { audio: "He is fourteen years old.", sent: "He is ___ years ___.", blanks: ["fourteen", "old"] },
        { audio: "My name is Celine.", sent: "My ___ is ___.", blanks: ["name", "Celine"] },
        { audio: "They are friends from Canada.", sent: "They are ___ from ___.", blanks: ["friends", "Canada"] },
        { audio: "The cat is on the sofa.", sent: "The ___ is on the ___.", blanks: ["cat", "sofa"] },
        { audio: "Are you ready for class?", sent: "Are ___ ready for ___?", blanks: ["you", "class"] },
        { audio: "The world is very big.", sent: "The ___ is very ___.", blanks: ["world", "big"] },
        { audio: "I am fifteen and I am Australian.", sent: "I am ___ and I am ___.", blanks: ["fifteen", "Australian"] },
        { audio: "Mrs. Canales is a teacher.", sent: "Mrs. ___ is a ___.", blanks: ["Canales", "teacher"] },
        { audio: "The school bell is ringing.", sent: "The school ___ is ___.", blanks: ["bell", "ringing"] },
        { audio: "Where are you from?", sent: "Where ___ you ___?", blanks: ["are", "from"] },
        { audio: "How old is Albert?", sent: "How ___ is ___?", blanks: ["old", "Albert"] },
        { audio: "It is nice to meet you.", sent: "It is ___ to ___ you.", blanks: ["nice", "meet"] },
        { audio: "The map is very colorful.", sent: "The ___ is very ___.", blanks: ["map", "colorful"] },
        { audio: "We are happy today.", sent: "We ___ happy ___.", blanks: ["are", "today"] },
        { audio: "He is English and he is twelve.", sent: "He is ___ and he is ___.", blanks: ["English", "twelve"] },
        { audio: "I am not sad.", sent: "I ___ not ___.", blanks: ["am", "sad"] },
        { audio: "The globe is in the classroom.", sent: "The ___ is in the ___.", blanks: ["globe", "classroom"] },
        { audio: "Count from one to one hundred.", sent: "Count ___ one to one ___.", blanks: ["from", "hundred"] },
        { audio: "The hallway is near the lockers.", sent: "The ___ is near the ___.", blanks: ["hallway", "lockers"] },
        { audio: "She is from Japan.", sent: "She ___ from ___.", blanks: ["is", "Japan"] },
        { audio: "What is your nationality?", sent: "What is ___ ___?", blanks: ["your", "nationality"] },
        { audio: "It is a blue book.", sent: "It is a ___ ___.", blanks: ["blue", "book"] },
        { audio: "Are they happy at school?", sent: "Are ___ happy at ___?", blanks: ["they", "school"] },
        { audio: "Who is that boy?", sent: "Who ___ that ___?", blanks: ["is", "boy"] },
        { audio: "I am fine, thanks.", sent: "I ___ fine, ___.", blanks: ["am", "thanks"] },
        { audio: "He is not American.", sent: "He ___ not ___.", blanks: ["is", "American"] },
        { audio: "Look at your reflection.", sent: "Look ___ your ___.", blanks: ["at", "reflection"] },
        { audio: "Welcome to REACH school!", sent: "Welcome ___ REACH ___!", blanks: ["to", "school"] },
        { audio: "The number is fifty.", sent: "The ___ is ___.", blanks: ["number", "fifty"] },
        { audio: "You are my friend.", sent: "You ___ my ___.", blanks: ["are", "friend"] },
        { audio: "Is it time for lunch?", sent: "Is ___ time for ___?", blanks: ["it", "lunch"] },
        { audio: "I can count to ten.", sent: "I ___ count to ___.", blanks: ["can", "ten"] },
        { audio: "They are from China.", sent: "They ___ from ___.", blanks: ["are", "China"] },
        { audio: "The dog is very happy.", sent: "The ___ is very ___.", blanks: ["dog", "happy"] },
        { audio: "How are you today?", sent: "How ___ you ___?", blanks: ["are", "today"] },
        { audio: "She is fifteen years old.", sent: "She ___ fifteen ___ old.", blanks: ["is", "years"] },
        { audio: "It is a big world.", sent: "It is a ___ ___.", blanks: ["big", "world"] },
        { audio: "Are we ready to go?", sent: "Are ___ ready to ___?", blanks: ["we", "go"] },
        { audio: "One hundred is a big number.", sent: "One ___ is a big ___.", blanks: ["hundred", "number"] }
    ]
},

    // ==========================================================
    // CONTEXT POOL (11-15)
    // ==========================================================
    contextPool: {

        // TYPE 11: COMPLETE DIALOGUE (Required: 10 items)
        11: [
            {
                title: "At the Locker Area",
                lines: [
                    { speaker: "Albert", text: "Hello! I am ___ Albert.", options: ["are", "is", "am"], a: "am" },
                    { speaker: "Celine", text: "Hi! My ___ is Celine. Nice to meet you!", options: ["name", "world", "globe"], a: "name" },
                    { speaker: "Albert", text: "Nice to meet you, too. ___ are you from?", options: ["Who", "Where", "How"], a: "Where" },
                    { speaker: "Celine", text: "I am ___ Australia. I am Australian.", options: ["to", "from", "at"], a: "from" },
                    { speaker: "Albert", text: "Cool! I am from ___.", options: ["French", "Japanese", "Canada"], a: "Canada" }
                ]
            },
            {
                title: "Counting Challenge",
                lines: [
                    { speaker: "Student A", text: "Look! There are ___ students in the hallway.", options: ["many", "much", "one"], a: "many" },
                    { speaker: "Student A", text: "Wow, there are ___ students! No, wait, look over there.", options: ["sixty", "six", "sixteen"], a: "sixty" },
                    { speaker: "Student B", text: "You are right. There are ___ more.", options: ["forty", "four", "fourteen"], a: "forty" },
                    { speaker: "Student A", text: "So, sixty plus forty is ___!", options: ["ten", "twenty", "one hundred"], a: "one hundred" },
                    { speaker: "Student B", text: "We ___ very good at numbers!", options: ["is", "are", "am"], a: "are" }
                ]
            },
            {
                title: "Teacher and Student",
                lines: [
                    { speaker: "Mrs. Canales", text: "___ you the new student?", options: ["Is", "Are", "Am"], a: "Are" },
                    { speaker: "John", text: "Yes, I ___.", options: ["is", "are", "am"], a: "am" },
                    { speaker: "Mrs. Canales", text: "___ old are you?", options: ["What", "How", "Who"], a: "How" },
                    { speaker: "John", text: "I am ___.", options: ["twelve", "twelve years", "twelve years old"], a: "twelve years old" },
                    { speaker: "Mrs. Canales", text: "Great. ___ am Mrs. Canales, your teacher.", options: ["We", "They", "I"], a: "I" }
                ]
            },
            {
                title: "Nationalities",
                lines: [
                    { speaker: "Albert", text: "Celine, is your friend ___?", options: ["Japan", "Japanese", "Spain"], a: "Japanese" },
                    { speaker: "Celine", text: "No, she ___.", options: ["is not", "are not", "am not"], a: "is not" },
                    { speaker: "Albert", text: "___ is she from?", options: ["Where", "Who", "What"], a: "Where" },
                    { speaker: "Celine", text: "She is from ___.", options: ["Chinese", "China", "Chinas"], a: "China" },
                    { speaker: "Albert", text: "Oh! ___ is very nice.", options: ["He", "It", "She"], a: "She" }
                ]
            },
            {
                title: "Are you ready?",
                lines: [
                    { speaker: "Albert", text: "___ you ready for class?", options: ["Is", "Are", "Am"], a: "Are" },
                    { speaker: "Celine", text: "Yes, I ___.", options: ["am", "is", "are"], a: "am" },
                    { speaker: "Albert", text: "Is the ___ ringing?", options: ["bell", "globe", "mirror"], a: "bell" },
                    { speaker: "Celine", text: "Yes, listen! It is time ___ English.", options: ["to", "for", "at"], a: "for" },
                    { speaker: "Albert", text: "Let's go! We are ___ late.", options: ["not", "no", "none"], a: "not" }
                ]
            },
            {
                title: "Identifying Objects",
                lines: [
                    { speaker: "Student A", text: "___ is this?", options: ["What", "Who", "Where"], a: "What" },
                    { speaker: "Student B", text: "It ___ a globe.", options: ["are", "is", "am"], a: "is" },
                    { speaker: "Student A", text: "Is it a model of the ___?", options: ["school", "world", "hallway"], a: "world" },
                    { speaker: "Student B", text: "Yes, ___ is.", options: ["it is", "they are", "I am"], a: "it is" },
                    { speaker: "Student A", text: "The colors are very ___.", options: ["blue", "colorful", "sad"], a: "colorful" }
                ]
            },
            {
                title: "Negative Practice",
                lines: [
                    { speaker: "Albert", text: "Are ___ from the USA?", options: ["they", "we", "she"], a: "they" },
                    { speaker: "Celine", text: "No, they ___.", options: ["are", "is", "are not"], a: "are not" },
                    { speaker: "Albert", text: "Are they ___?", options: ["England", "English", "Spanish"], a: "English" },
                    { speaker: "Celine", text: "No. They are from Italy. They are ___.", options: ["Italian", "Italy", "Italians"], a: "Italian" },
                    { speaker: "Albert", text: "Oh, okay! They ___ new here.", options: ["am", "are", "is"], a: "are" }
                ]
            },
            {
                title: "Age and Names",
                lines: [
                    { speaker: "Celine", text: "Albert, ___ is that boy?", options: ["how", "who", "what"], a: "who" },
                    { speaker: "Albert", text: "That is my brother. ___ name is Paul.", options: ["His", "Her", "My"], a: "His" },
                    { speaker: "Celine", text: "Is ___ fourteen years old, too?", options: ["she", "he", "it"], a: "he" },
                    { speaker: "Albert", text: "No, he ___ twelve.", options: ["is", "are", "am"], a: "is" },
                    { speaker: "Celine", text: "He is very ___ in that photo!", options: ["happy", "sad", "old"], a: "happy" }
                ]
            },
            {
                title: "New Friends",
                lines: [
                    { speaker: "Paul", text: "Hi, ___ name is Paul.", options: ["my", "your", "his"], a: "my" },
                    { speaker: "Sara", text: "Hello Paul. I ___ Sara.", options: ["am", "is", "are"], a: "am" },
                    { speaker: "Paul", text: "Are you a ___ student?", options: ["new", "old", "bad"], a: "new" },
                    { speaker: "Sara", text: "Yes, I ___.", options: ["is", "am", "are"], a: "am" },
                    { speaker: "Paul", text: "Nice ___ meet you.", options: ["to", "for", "at"], a: "to" }
                ]
            },
            {
                title: "Class Objects",
                lines: [
                    { speaker: "A", text: "Is this ___ map?", options: ["a", "an", "the"], a: "a" },
                    { speaker: "B", text: "Yes, ___ is.", options: ["it", "he", "she"], a: "it" },
                    { speaker: "A", text: "Is it ___ the wall?", options: ["on", "in", "at"], a: "on" },
                    { speaker: "B", text: "No, it is ___ the desk.", options: ["on", "under", "next"], a: "on" },
                    { speaker: "A", text: "It is very ___.", options: ["big", "long", "tall"], a: "big" }
                ]
            }
        ],

        // TYPE 12: READ AND ANSWER (Required: 10 items)
        12: [
            {
                title: "Albert’s Profile",
                text: "Hello! I am Albert. I am fourteen years old. I am a student at REACH school. I am from Canada, so I am Canadian. I have a best friend named Celine. She is fifteen. We are very happy in our new school.",
                questions: [
                    { q: "How old is Albert?", options: ["Twelve", "Fourteen", "Fifteen"], a: "Fourteen" },
                    { q: "Where is Albert from?", options: ["Australia", "Canada", "The USA"], a: "Canada" },
                    { q: "Is Albert a teacher?", options: ["Yes, he is.", "No, he is a student.", "He is a principal."], a: "No, he is a student." },
                    { q: "Who is Celine?", options: ["Albert's teacher", "Albert's best friend", "Albert's sister"], a: "Albert's best friend" },
                    { q: "Are they happy at school?", options: ["No, they are sad.", "Yes, they are.", "They are late."], a: "Yes, they are." }
                ]
            },
            {
                title: "Celine’s New Life",
                text: "Celine is a new student. She is fifteen years old. She is from Australia. She is Australian. Now, she is in the hallway at REACH school. She sees a new face near the lockers. It is Albert. He is a nice boy from Canada.",
                questions: [
                    { q: "Is Celine a new teacher?", options: ["Yes, she is.", "No, she is a new student.", "No, she is a principal."], a: "No, she is a new student." },
                    { q: "What is Celine's nationality?", options: ["Canadian", "Australian", "American"], a: "Australian" },
                    { q: "Where is Celine now?", options: ["In the classroom", "In the hallway", "In Australia"], a: "In the hallway" },
                    { q: "Who does Celine see near the lockers?", options: ["Mrs. Canales", "Albert", "Her dog"], a: "Albert" },
                    { q: "Where is Albert from?", options: ["Australia", "Canada", "Japan"], a: "Canada" }
                ]
            },
            {
                title: "The Classroom",
                text: "The classroom is very big. There is a colorful map of the world on the wall. Mrs. Canales is the teacher. She is from Spain. There are twenty students in the class. They are all ready for the English adventure.",
                questions: [
                    { q: "Is the classroom small?", options: ["Yes, it is.", "No, it is very big.", "It is a hallway."], a: "No, it is very big." },
                    { q: "What is on the wall?", options: ["A mirror", "A colorful map", "A locker"], a: "A colorful map" },
                    { q: "Who is the teacher?", options: ["Celine", "Mrs. Canales", "Mr. D"], a: "Mrs. Canales" },
                    { q: "Where is the teacher from?", options: ["Italy", "Spain", "China"], a: "Spain" },
                    { q: "How many students are in the class?", options: ["Ten", "Twenty", "One hundred"], a: "Twenty" }
                ]
            },
            {
                title: "A New Friend",
                text: "My name is John. I am twelve years old. I am from England, so I am English. I am not at REACH school; I am at a school in London. I have a cat. It is very small and happy. My favorite number is ten.",
                questions: [
                    { q: "How old is John?", options: ["Ten", "Twelve", "Fourteen"], a: "Twelve" },
                    { q: "Where is John from?", options: ["England", "Canada", "Australia"], a: "England" },
                    { q: "What is John's nationality?", options: ["Canadian", "English", "American"], a: "English" },
                    { q: "Does John have a pet?", options: ["Yes, a dog.", "Yes, a small cat.", "No, he doesn't."], a: "Yes, a small cat." },
                    { q: "What is John's favorite number?", options: ["One", "Ten", "Twenty"], a: "Ten" }
                ]
            },
            {
                title: "REACH School",
                text: "REACH school is a great place. The hallway is noisy because the students are chatting. There are lockers for the books. The school bell is ringing. 'Are you ready for class?' asks Mr. D. He is a funny guide for the students.",
                questions: [
                    { q: "How is the hallway?", options: ["Quiet", "Noisy", "Small"], a: "Noisy" },
                    { q: "What are the students doing?", options: ["Sleeping", "Chatting", "Running"], a: "Chatting" },
                    { q: "What are the lockers for?", options: ["For cats", "For books", "For food"], a: "For books" },
                    { q: "What is ringing?", options: ["A phone", "The school bell", "A clock"], a: "The school bell" },
                    { q: "Who is Mr. D?", options: ["A student", "A funny guide", "A teacher from Spain"], a: "A funny guide" }
                ]
            },
            {
                title: "Nationalities in Class",
                text: "In our class, the students are from different countries. Sara is from Japan. She is Japanese. Pierre is from France. He is French. Mario is from Italy. He is Italian. We are all friends of the world.",
                questions: [
                    { q: "Where is Sara from?", options: ["China", "Japan", "France"], a: "Japan" },
                    { q: "What is Pierre's nationality?", options: ["Japanese", "French", "Italian"], a: "French" },
                    { q: "Who is from Italy?", options: ["Sara", "Pierre", "Mario"], a: "Mario" },
                    { q: "Is Mario Spanish?", options: ["Yes, he is.", "No, he is Italian.", "No, he is from Japan."], a: "No, he is Italian." },
                    { q: "Are the students friends?", options: ["No, they are not.", "Yes, they are friends of the world.", "They are teachers."], a: "Yes, they are friends of the world." }
                ]
            },
            {
                title: "Counting Practice",
                text: "I am in the classroom. I see many objects. There are ten books on the desk. There are five maps on the wall. I can count from one to one hundred! Today, I count the students. There are fifteen boys and ten girls.",
                questions: [
                    { q: "Where is the speaker?", options: ["In the hallway", "In the classroom", "At home"], a: "In the classroom" },
                    { q: "How many books are on the desk?", options: ["Five", "Ten", "Fifteen"], a: "Ten" },
                    { q: "What can the speaker do?", options: ["Sing a song", "Count to one hundred", "Speak Spanish"], a: "Count to one hundred" },
                    { q: "How many girls are in the class?", options: ["Five", "Ten", "Fifteen"], a: "Ten" },
                    { q: "What is the total number of students?", options: ["Twenty", "Twenty-five", "Thirty"], a: "Twenty-five" }
                ]
            },
            {
                title: "Mr. D’s Message",
                text: "Hello, my friends! I am Mr. D. Welcome to a new world. In this lesson, you can learn to introduce yourself. You can say where you are from. It is super fun to meet new people. Are you ready? Let's get started!",
                questions: [
                    { q: "Who is speaking?", options: ["Albert", "Mr. D", "Celine"], a: "Mr. D" },
                    { q: "What is the message about?", options: ["A new school building", "A new world of learning English", "A math test"], a: "A new world of learning English" },
                    { q: "What can you learn in this lesson?", options: ["To cook", "To introduce yourself", "To play soccer"], a: "To introduce yourself" },
                    { q: "Is it fun to meet new people?", options: ["No, it's boring.", "Yes, it is super fun.", "It is very sad."], a: "Yes, it is super fun." },
                    { q: "What does Mr. D ask at the end?", options: ["Where are you from?", "Are you ready?", "How old are you?"], a: "Are you ready?" }
                ]
            },
            {
                title: "Morning Routine",
                text: "It is 7:00 AM. The school bell is ringing. Albert is in the hallway. He is ready for English class. He has a new book and a colorful map. He is very happy today.",
                questions: [
                    { q: "What time is it?", options: ["7:00 AM", "8:00 AM", "9:00 AM"], a: "7:00 AM" },
                    { q: "Where is Albert?", options: ["In the classroom", "In the hallway", "At home"], a: "In the hallway" },
                    { q: "Is Albert ready?", options: ["Yes", "No", "Maybe"], a: "Yes" },
                    { q: "What does he have?", options: ["A cat", "A book and a map", "A lunch box"], a: "A book and a map" },
                    { q: "How is Albert feeling?", options: ["Sad", "Happy", "Tired"], a: "Happy" }
                ]
            },
            {
                title: "The School Hallway",
                text: "The hallway is long. There are many lockers here. The lockers are for the students' books. Celine is near her locker. She sees her friend Albert. They are ready for class.",
                questions: [
                    { q: "How is the hallway?", options: ["Short", "Long", "Small"], a: "Long" },
                    { q: "What is in the hallway?", options: ["Lockers", "Cats", "Dogs"], a: "Lockers" },
                    { q: "What are the lockers for?", options: ["Toys", "Books", "Food"], a: "Books" },
                    { q: "Where is Celine?", options: ["In the park", "Near her locker", "At home"], a: "Near her locker" },
                    { q: "Who does she see?", options: ["Her teacher", "Her friend Albert", "Her mother"], a: "Her friend Albert" }
                ]
            }
        ],

        // TYPE 13: LISTEN AND ANSWER (Required: 10 items)
        13: [
            {
                title: "Sara's Intro",
                audio: "Hello! I am Sara. I am twelve years old. I am a student at a small school. I am from England, so I am English. My favorite color is blue.",
                questions: [
                    { q: "What is the speaker's name?", options: ["Celine", "Sara", "Mary"], a: "Sara" },
                    { q: "How old is Sara?", options: ["Ten", "Twelve", "Fourteen"], a: "Twelve" },
                    { q: "What is her nationality?", options: ["American", "Canadian", "English"], a: "English" },
                    { q: "What is the size of her school?", options: ["Big", "Small", "New"], a: "Small" },
                    { q: "What is her favorite color?", options: ["Red", "Blue", "Green"], a: "Blue" }
                ]
            },
            {
                title: "The Classroom Scene",
                audio: "This is our classroom. It is very big and colorful. There is a map on the wall and a globe on the desk. Mrs. Canales is in the room. She is our teacher.",
                questions: [
                    { q: "How is the classroom?", options: ["Small and old", "Big and colorful", "Quiet and dark"], a: "Big and colorful" },
                    { q: "What is on the wall?", options: ["A locker", "A map", "A clock"], a: "A map" },
                    { q: "Where is the globe?", options: ["On the desk", "In the hallway", "On the sofa"], a: "On the desk" },
                    { q: "Who is in the room?", options: ["Albert", "Celine", "Mrs. Canales"], a: "Mrs. Canales" },
                    { q: "What is Mrs. Canales' job?", options: ["Student", "Teacher", "Principal"], a: "Teacher" }
                ]
            },
            {
                title: "A New Student",
                audio: "Albert has a new friend. Her name is Celine. She is fifteen years old. She is from Australia. They are happy to meet at REACH school today.",
                questions: [
                    { q: "Who is Albert's new friend?", options: ["Sara", "Celine", "Mary"], a: "Celine" },
                    { q: "How old is Celine?", options: ["Twelve", "Fourteen", "Fifteen"], a: "Fifteen" },
                    { q: "Where is Celine from?", options: ["Canada", "Australia", "Japan"], a: "Australia" },
                    { q: "Where are they today?", options: ["At the park", "At home", "At REACH school"], a: "At REACH school" },
                    { q: "How are they feeling?", options: ["Sad", "Happy", "Tired"], a: "Happy" }
                ]
            },
            {
                title: "The Hallway Count",
                audio: "Look at the hallway. There are many students near the lockers. I can count thirty boys and twenty girls. The total number of students is fifty.",
                questions: [
                    { q: "Where is the speaker looking?", options: ["At the classroom", "At the hallway", "At the park"], a: "At the hallway" },
                    { q: "Where are the students standing?", options: ["Near the lockers", "Near the desks", "Near the teacher"], a: "Near the lockers" },
                    { q: "How many boys are there?", options: ["Twenty", "Thirty", "Fifty"], a: "Thirty" },
                    { q: "How many girls are there?", options: ["Twenty", "Thirty", "Fifty"], a: "Twenty" },
                    { q: "What is the total number of students?", options: ["Thirty", "Fifty", "One hundred"], a: "Fifty" }
                ]
            },
            {
                title: "Fluffy the Cat",
                audio: "My cat is my best friend. It is very small. Its name is Fluffy. It is happy on the sofa. It is not a dog; it is a cat.",
                questions: [
                    { q: "What kind of animal is the pet?", options: ["A dog", "A cat", "A bird"], a: "A cat" },
                    { q: "Is the cat big?", options: ["Yes, it is.", "No, it is small.", "It is a globe."], a: "No, it is small." },
                    { q: "What is the cat's name?", options: ["Albert", "Fluffy", "Rex"], a: "Fluffy" },
                    { q: "Where is the cat?", options: ["In the hallway", "On the sofa", "On the desk"], a: "On the sofa" },
                    { q: "How is the cat feeling?", options: ["Sad", "Happy", "Angry"], a: "Happy" }
                ]
            },
            {
                title: "Meet Mr. D",
                audio: "Mr. D is a funny man. He is a guide at the school. Today, he is in the hallway. He says, 'Welcome to a new world! English is super fun!'",
                questions: [
                    { q: "Who is Mr. D?", options: ["A student", "A funny guide", "A teacher from Italy"], a: "A funny guide" },
                    { q: "Where is Mr. D today?", options: ["In the classroom", "In the hallway", "At home"], a: "In the hallway" },
                    { q: "Is English fun according to Mr. D?", options: ["No, it isn't.", "Yes, it is super fun.", "Maybe."], a: "Yes, it is super fun." },
                    { q: "What does he say to the students?", options: ["Goodbye!", "Welcome!", "How old are you?"], a: "Welcome!" },
                    { q: "What is the 'new world' he mentions?", options: ["A new country", "Learning English", "A new park"], a: "Learning English" }
                ]
            },
            {
                title: "Mario from Italy",
                audio: "Mario is a student from Italy. He is fourteen years old. He is very good at math. His favorite number is one hundred because it is big.",
                questions: [
                    { q: "Where is Mario from?", options: ["Spain", "Italy", "France"], a: "Italy" },
                    { q: "What is Mario's nationality?", options: ["Spanish", "Italian", "French"], a: "Italian" },
                    { q: "How old is Mario?", options: ["Twelve", "Fourteen", "Fifteen"], a: "Fourteen" },
                    { q: "What is he good at?", options: ["English", "Math", "Music"], a: "Math" },
                    { q: "What is his favorite number?", options: ["Ten", "Fifty", "One hundred"], a: "One hundred" }
                ]
            },
            {
                title: "The Loud School Bell",
                audio: "The school bell is ringing. It is very loud. Albert is not ready for class. He is in the hallway with a colorful book. He is late today.",
                questions: [
                    { q: "What is the school bell doing?", options: ["Sleeping", "Ringing", "Chatting"], a: "Ringing" },
                    { q: "Is the bell quiet?", options: ["Yes, it is.", "No, it is loud.", "No, it is blue."], a: "No, it is loud." },
                    { q: "Is Albert ready for class?", options: ["Yes, he is.", "No, he isn't.", "Maybe."], a: "No, he isn't." },
                    { q: "What does Albert have?", options: ["A globe", "A colorful book", "A cat"], a: "A colorful book" },
                    { q: "Is Albert early or late?", options: ["He is early.", "He is late.", "He is at home."], a: "He is late." }
                ]
            },
            {
                title: "Morning Greetings",
                audio: "Good morning! My name is Mrs. Canales. I am your teacher. I am from Spain. Today is a great day to learn English. Are you ready?",
                questions: [
                    { q: "Who is speaking?", options: ["A student", "Mrs. Canales", "Albert"], a: "Mrs. Canales" },
                    { q: "What is her job?", options: ["Principal", "Teacher", "Guide"], a: "Teacher" },
                    { q: "Where is she from?", options: ["Italy", "Spain", "France"], a: "Spain" },
                    { q: "How is the day?", options: ["Bad", "Great", "Sad"], a: "Great" },
                    { q: "What is the lesson?", options: ["Math", "English", "Music"], a: "English" }
                ]
            },
            {
                title: "Friendship",
                audio: "Celine and Albert are best friends. Celine is from Australia and Albert is from Canada. They are students at REACH school. They are fourteen and fifteen years old.",
                questions: [
                    { q: "Are they friends?", options: ["Yes, best friends.", "No, they are not.", "They are teachers."], a: "Yes, best friends." },
                    { q: "Where is Celine from?", options: ["Canada", "Australia", "Japan"], a: "Australia" },
                    { q: "Where is Albert from?", options: ["Canada", "Australia", "Japan"], a: "Canada" },
                    { q: "Where do they study?", options: ["At home", "At REACH school", "In London"], a: "At REACH school" },
                    { q: "How old are they?", options: ["10 and 11", "14 and 15", "20 and 21"], a: "14 and 15" }
                ]
            }
        ],

        // TYPE 14: COMPLETE TEXT - SELECTION (Required: 10 items)
        14: [
            {
                title: "My Profile",
                text: "Hello! My [1] (name/nationality/world) is Sara. I [2] (is/are/am) a student. I am fourteen years [3] (old/age/new). I am from [4] (English/England/Londoner). My favorite number [5] (am/are/is) ten.",
                answers: ["name", "am", "old", "England", "is"]
            },
            {
                title: "The New Girl",
                text: "Celine is a [1] (old/new/bad) student. She is from [2] (Australian/Australia/Australias). She is [3] (Australian/Australia/Japan). Today, she [4] (are/am/is) in the hallway. She is happy to [5] (meet/chat/look) Albert.",
                answers: ["new", "Australia", "Australian", "is", "meet"]
            },
            {
                title: "Class Objects",
                text: "In my [1] (hallway/classroom/locker), there are many things. On the wall, I see a [2] (map/cat/student). On the teacher's desk, there is a [3] (globe/mirror/bell). It is a model of the world. My [4] (book/name/cat) is blue. I am [5] (ready/late/sad) for class.",
                answers: ["classroom", "map", "globe", "book", "ready"]
            },
            {
                title: "Friendship",
                text: "Albert [1] (are/is/am) my friend. He is from Canada, so he is [2] (Canada/Canadian/Canadas). We [3] (is/am/are) fourteen years old. We are in the [4] (park/hallway/house) near the lockers. We [5] (is/am/are) happy students.",
                answers: ["is", "Canadian", "are", "hallway", "are"]
            },
            {
                title: "The Teacher",
                text: "Mrs. Canales [1] (am/are/is) our teacher. She is very [2] (nice/sad/noisy). She is from [3] (Spain/Spanish/Spains). She is [4] (Spain/Spanish/Italian). She is in the [5] (hallway/classroom/locker) now.",
                answers: ["is", "nice", "Spain", "Spanish", "classroom"]
            },
            {
                title: "Numbers and People",
                text: "Look! There [1] (is/am/are) one hundred people. They are in the [2] (hallway/book/cat). I can [3] (count/meet/ready) them. One, two, three... ten! The students are [4] (chatting/ringing/sleeping). They are [5] (not/no/none) sad.",
                answers: ["are", "hallway", "count", "chatting", "not"]
            },
            {
                title: "Nationalities",
                text: "The world is [1] (big/small/old). My friends are from different countries. Sara is from [2] (Japanese/Japan/Japans). Mario is [3] (Italy/Italian/Italies). Pierre is from France; he is [4] (French/France/Frances). We [5] (is/am/are) friends of the world.",
                answers: ["big", "Japan", "Italian", "French", "are"]
            },
            {
                title: "Mr. D's Adventure",
                text: "Welcome [1] (to/at/for) the English adventure! I [2] (is/am/are) Mr. D. Today, we [3] (am/are/is) ready to learn. [4] (What/How/Who) old are you? Say [5] (where/who/what) you are from. Let's go!",
                answers: ["to", "am", "are", "How", "where"]
            },
            {
                title: "School Morning",
                text: "It is 8:00 AM. The [1] (bell/map/cat) is ringing. Albert is [2] (not/no/is) late. He is [3] (at/on/in) school. He is [4] (ready/small/big) for class. His [5] (book/name/desk) is colorful.",
                answers: ["bell", "not", "at", "ready", "book"]
            },
            {
                title: "A Small Pet",
                text: "I have a [1] (cat/dog/bird). Its [2] (name/old/from) is Fluffy. It is [3] (very/many/are) small. It is [4] (happy/sad/late) on the sofa. It [5] (is/am/are) a nice pet.",
                answers: ["cat", "name", "very", "happy", "is"]
            }
        ],

        // TYPE 15: LISTEN AND COMPLETE - TYPING (Required: 10 items)
        15: [
            {
                title: "Albert's Profile",
                audio: "Albert is a student. He is fourteen years old. He is from Canada. Today, he is in the hallway. He is ready for class.",
                text: "Albert is a [1]. He is [2] years old. He is from [3]. Today, he is in the [4]. He is [5] for class.",
                answers: ["student", "fourteen", "Canada", "hallway", "ready"]
            },
            {
                title: "Celine's Intro",
                audio: "Celine is a new student. She is from Australia. She is fifteen years old. Her name is Celine. She is very happy.",
                text: "Celine is a [1] student. She is from [2]. She is [3] years old. Her [4] is Celine. She is very [5].",
                answers: ["new", "Australia", "fifteen", "name", "happy"]
            },
            {
                title: "Classroom Objects",
                audio: "Our classroom is big. There is a map on the wall. The globe is colorful. Mrs. Canales is the teacher. She is from Spain.",
                text: "Our [1] is big. There is a [2] on the wall. The [3] is colorful. Mrs. [4] is the teacher. She is from [5].",
                answers: ["classroom", "map", "globe", "Canales", "Spain"]
            },
            {
                title: "School Hallway",
                audio: "Look at the lockers. There are books inside. The school bell is ringing. Are you ready? Let's go to class.",
                text: "Look at the [1]. There are [2] inside. The [3] bell is ringing. [4] you ready? Let's [5] to class.",
                answers: ["lockers", "books", "school", "Are", "go"]
            },
            {
                title: "Numbers Practice",
                audio: "The world is big. I can count to one hundred. My favorite number is ten. It is a great day.",
                text: "The [1] is big. I can [2] to one [3]. My [4] number is [5]. It is a great day.",
                answers: ["world", "count", "hundred", "favorite", "ten"]
            },
            {
                title: "John's Nationality",
                audio: "John is English. He is from England. He is twelve years old. He is a good student. He is not late.",
                text: "John is [1]. He is from [2]. He is [3] years old. He is a [4] student. He is [5] late.",
                answers: ["English", "England", "twelve", "good", "not"]
            },
            {
                title: "Pets at Home",
                audio: "The cat is small. It is on the sofa. It is happy today. The dog is near the locker. They are friends.",
                text: "The [1] is small. It is on the [2]. It is [3] today. The [4] is near the locker. They are [5].",
                answers: ["cat", "sofa", "happy", "dog", "friends"]
            },
            {
                title: "Introduction",
                audio: "My name is Sara. I am from Japan. I am Japanese. I am fifteen years old. Nice to meet you.",
                text: "My [1] is Sara. I am [2] Japan. I am [3]. I am [4] years old. Nice to [5] you.",
                answers: ["name", "from", "Japanese", "fifteen", "meet"]
            },
            {
                title: "Morning Bell",
                audio: "The school bell is loud. It is seven o'clock. Albert is in the hallway. He is ready for class. He is a new student.",
                text: "The school [1] is loud. It is [2] o'clock. Albert is in the [3]. He is [4] for class. He is a [5] student.",
                answers: ["bell", "seven", "hallway", "ready", "new"]
            },
            {
                title: "The Map",
                audio: "Look at the map. It is very colorful. There are many countries. I can see Brazil. The world is big.",
                text: "Look at the [1]. It is very [2]. There are many [3]. I can [4] Brazil. The [5] is big.",
                answers: ["map", "colorful", "countries", "see", "world"]
            }
        ]
    }
});