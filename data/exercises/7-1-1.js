/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */

window.initExercise({
    id: "7-1-1",
    grade: "7th Grade",
    bimester: "1",
    chapter: "1",
    title: "Abilities and Manners",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES ---
        1: [
            { words: ["sing", "can", "She", "beautifully"], correct: "She can sing beautifully" },
            { words: ["play", "you", "Can", "guitar", "the"], correct: "Can you play the guitar" },
            { words: ["speak", "I", "well", "French", "can't"], correct: "I can't speak French well" },
            { words: ["very", "runs", "He", "fast"], correct: "He runs very fast" },
            { words: ["the", "can", "play", "They", "piano"], correct: "They can play the piano" },
            { words: ["can", "drive", "You", "carefully"], correct: "You can drive carefully" },
            { words: ["can", "Celine", "fast", "skate"], correct: "Celine can skate fast" },
            { words: ["well", "soccer", "play", "We", "can"], correct: "We can play soccer well" },
            { words: ["you", "help", "Can", "me"], correct: "Can you help me" },
            { words: ["dance", "can't", "at", "all", "I"], correct: "I can't dance at all" },
            { words: ["easily", "solve", "can", "She", "puzzles"], correct: "She can solve puzzles easily" },
            { words: ["play", "can", "Mike", "drums", "the"], correct: "Mike can play the drums" },
            { words: ["speak", "Portuguese", "Can", "they"], correct: "Can they speak Portuguese" },
            { words: ["badly", "guitar", "plays", "He", "the"], correct: "He plays the guitar badly" },
            { words: ["swim", "can't", "lake", "in", "the", "We"], correct: "We can't swim in the lake" },
            { words: ["write", "emails", "easily", "can", "You"], correct: "You can write emails easily" },
            { words: ["carefully", "the", "teacher", "Listen", "to"], correct: "Listen to the teacher carefully" },
            { words: ["can", "What", "do", "you"], correct: "What can you do" },
            { words: ["well", "speaks", "English", "Sarah"], correct: "Sarah speaks English well" },
            { words: ["ride", "bike", "a", "can't", "He"], correct: "He can't ride a bike" },
            { words: ["instruments", "play", "can", "many", "They"], correct: "They can play many instruments" },
            { words: ["help", "can", "French", "I", "you", "with"], correct: "I can help you with French" },
            { words: ["very", "The", "cheetah", "fast", "runs"], correct: "The cheetah runs very fast" },
            { words: ["play", "tennis", "Can", "well", "you"], correct: "Can you play tennis well" },
            { words: ["violin", "can", "She", "play", "the"], correct: "She can play the violin" },
            { words: ["move", "box", "the", "can't", "We"], correct: "We can't move the box" },
            { words: ["read", "Can", "this", "you"], correct: "Can you read this" },
            { words: ["pasta", "cook", "can", "dad", "My"], correct: "My dad can cook pasta" },
            { words: ["together", "can", "learn", "We"], correct: "We can learn together" },
            { words: ["at", "can't", "fly", "all", "Humans"], correct: "Humans can't fly at all" },
            { words: ["loudly", "can", "drums", "play", "He", "the"], correct: "He can play the drums loudly" },
            { words: ["basketball", "can", "play", "brother", "My"], correct: "My brother can play basketball" },
            { words: ["the", "play", "Can", "she", "flute"], correct: "Can she play the flute" },
            { words: ["draw", "well", "can", "Albert"], correct: "Albert can draw well" },
            { words: ["homework", "help", "you", "Can", "with", "my"], correct: "Can you help with my homework" },
            { words: ["speak", "Can", "Japanese", "Leo"], correct: "Can Leo speak Japanese" },
            { words: ["slowly", "turtle", "walks", "The"], correct: "The turtle walks slowly" },
            { words: ["any", "play", "I", "can't", "instrument"], correct: "I can't play any instrument" },
            { words: ["jump", "high", "can", "You"], correct: "You can jump high" },
            { words: ["solve", "problems", "can", "We", "easily"], correct: "We can solve problems easily" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES ---
        2: [
            { lines: ["No, I can't.", "Can you play the guitar?", "I can play the piano, though.", "That's cool! I can't play anything."], order: [1, 0, 2, 3] },
            { lines: ["I can speak French.", "What languages can you speak?", "Really? Can you help me with my homework?", "Of course I can!"], order: [1, 0, 2, 3] },
            { lines: ["He runs very fast.", "Is Leo good at sports?", "Can he play soccer well, too?", "Yes, he is a great player."], order: [1, 0, 2, 3] },
            { lines: ["Yes, but only a little.", "Can you swim?", "Can you swim fast?", "No, I swim very slowly."], order: [1, 0, 2, 3] },
            { lines: ["My brother can.", "Who can play the drums?", "Does he play well?", "Yes, he plays very well!"], order: [1, 0, 2, 3] },
            { lines: ["I can draw, but I can't paint.", "What can you do in art class?", "Can you draw cartoons?", "Yes, I can draw them easily."], order: [1, 0, 2, 3] },
            { lines: ["He is the new music teacher.", "Who is that man?", "Can he play the violin?", "Yes, he plays beautifully."], order: [1, 0, 2, 3] },
            { lines: ["Can you ride a bike?", "Yes, I ride to school every day.", "Do you ride fast?", "No, I ride carefully."], order: [0, 1, 2, 3] },
            { lines: ["I can cook pasta.", "Can you cook?", "Is it delicious?", "Yes, my friends love it!"], order: [1, 0, 2, 3] },
            { lines: ["I can speak Portuguese and English.", "How many languages can you speak?", "Can you speak Spanish, too?", "No, I can't speak Spanish at all."], order: [1, 0, 2, 3] },
            { lines: ["I can't find my guitar.", "What's wrong, Tom?", "Can the teacher help you?", "Yes, she can help me find it."], order: [1, 0, 2, 3] },
            { lines: ["Can you play tennis?", "Yes, but I play badly.", "Do you need a racket?", "Yes, please give me one."], order: [0, 1, 2, 3] },
            { lines: ["She can sing pop songs.", "What can Sarah do for the talent show?", "Does she sing well?", "Yes, she sings beautifully."], order: [1, 0, 2, 3] },
            { lines: ["No, it's too heavy.", "Can you move this box?", "Can Albert help you?", "Yes, he is very strong."], order: [1, 0, 2, 3] },
            { lines: ["Can you read this map?", "No, it is very difficult.", "Can you see the city?", "Yes, I can see it now."], order: [0, 1, 2, 3] },
            { lines: ["I can play the flute.", "What instrument do you want to learn?", "Is it hard to play?", "No, you can learn it easily."], order: [1, 0, 2, 3] },
            { lines: ["My dad can.", "Who can fix this computer?", "Can he fix it fast?", "No, he works very slowly."], order: [1, 0, 2, 3] },
            { lines: ["I can skate fast.", "What can you do on your new skates?", "Can you jump, too?", "No, I can't jump at all."], order: [1, 0, 2, 3] },
            { lines: ["Yes, he plays for the school team.", "Can your brother play basketball?", "Does he play well?", "Yes, he is very good."], order: [1, 0, 2, 3] },
            { lines: ["No, but I can write.", "Can you speak Italian?", "Can you write it well?", "No, I write it badly."], order: [1, 0, 2, 3] },
            { lines: ["She can dance tango.", "What can Celine do?", "Can she dance well?", "Yes, she dances beautifully."], order: [1, 0, 2, 3] },
            { lines: ["Yes, he is an expert.", "Can he solve this puzzle?", "Can he solve it easily?", "Yes, in two minutes!"], order: [1, 0, 2, 3] },
            { lines: ["One, two, three...", "Can you count to ten in German?", "That's great!", "I can count to one hundred, too."], order: [1, 0, 2, 3] },
            { lines: ["I use a pen.", "What do you use to draw?", "Can you draw well with a pen?", "No, I draw badly with it."], order: [1, 0, 2, 3] },
            { lines: ["We can play soccer.", "What can we do on Saturday?", "Can we play in the park?", "Yes, that's a good idea."], order: [1, 0, 2, 3] },
            { lines: ["I can play the electric guitar.", "What do you play in the band?", "Do you play loudly?", "Yes, my neighbors hate it!"], order: [1, 0, 2, 3] },
            { lines: ["No, she can't speak any.", "Can your sister speak Chinese?", "Can she learn it?", "Yes, she can learn easily."], order: [1, 0, 2, 3] },
            { lines: ["I can swim.", "Can you swim or dive?", "How well can you swim?", "I can swim very well."], order: [1, 0, 2, 3] },
            { lines: ["No, she can't.", "Can the baby walk yet?", "Can she move her arms?", "Yes, she can move them fast."], order: [1, 0, 2, 3] },
            { lines: ["I can play the keyboard.", "Do you play an instrument?", "Can you play 'Happy Birthday'?", "Yes, I can play it easily."], order: [1, 0, 2, 3] },
            { lines: ["No, I can't sing at all.", "Can you sing, Celine?", "Can Albert sing?", "Yes, he sings very well."], order: [1, 0, 2, 3] },
            { lines: ["I speak Japanese.", "What language can you speak?", "Can you speak it fast?", "No, I speak it slowly."], order: [1, 0, 2, 3] },
            { lines: ["Yes, he plays the bass.", "Is your brother in the band?", "Can he play well?", "Yes, he plays perfectly."], order: [1, 0, 2, 3] },
            { lines: ["I can bake cakes.", "What can you do in the kitchen?", "Can you bake them easily?", "Yes, it's a piece of cake!"], order: [1, 0, 2, 3] },
            { lines: ["Can you help me?", "Sure, what's up?", "Can you give me that book?", "Yes, here you are."], order: [0, 1, 2, 3] },
            { lines: ["No, I can't.", "Can you drive a car?", "Can you ride a horse?", "Yes, I can ride very well."], order: [1, 0, 2, 3] },
            { lines: ["We can play volleyball.", "What sport can we play at the beach?", "Can we play well?", "No, we play very badly."], order: [1, 0, 2, 3] },
            { lines: ["I can write poems.", "What can you write?", "Do you write them carefully?", "Yes, I take my time."], order: [1, 0, 2, 3] },
            { lines: ["Yes, he plays the violin.", "Can your cousin play music?", "Does he play well?", "No, he plays quite badly."], order: [1, 0, 2, 3] },
            { lines: ["I can jump high.", "Can you jump?", "How high can you jump?", "I can jump two meters!"], order: [1, 0, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS ---
        3: [
            { q: "Can you play the guitar?", options: ["Yes, I can.", "Yes, I cans.", "Yes, I can to.", "Yes, I am can."], a: "Yes, I can." },
            { q: "Can she speaks English?", options: ["No, she can't.", "No, she can't speaks.", "No, she not can.", "No, she cans not."], a: "No, she can't." },
            { q: "Can they swim well?", options: ["Yes, they can.", "Yes, they are.", "Yes, they can swim wellly.", "Yes, they cans."], a: "Yes, they can." },
            { q: "Can he dance?", options: ["No, he can't.", "No, he can't to dance.", "No, he doesn't can.", "No, he not can."], a: "No, he can't." },
            { q: "Can we go to the park?", options: ["Yes, we can.", "Yes, we can to go.", "Yes, we are can.", "Yes, we cans."], a: "Yes, we can." },
            { q: "Can it fly?", options: ["No, it can't.", "No, it can't to fly.", "No, it not can.", "No, its can't."], a: "No, it can't." },
            { q: "Can you help me?", options: ["Yes, I can.", "Yes, I can to help.", "Yes, I cans help.", "Yes, me can."], a: "Yes, I can." },
            { q: "Can Sarah sing?", options: ["Yes, she can.", "Yes, she can to sing.", "Yes, her can.", "Yes, she is can."], a: "Yes, she can." },
            { q: "Can the students write?", options: ["Yes, they can.", "Yes, they cans.", "Yes, they are can.", "Yes, them can."], a: "Yes, they can." },
            { q: "Can Mike play the drums?", options: ["No, he can't.", "No, he doesn't can.", "No, he can't to play.", "No, him can't."], a: "No, he can't." },
            { q: "Can you cook pasta?", options: ["Yes, I can.", "Yes, I am.", "Yes, I can cooks.", "Yes, me can."], a: "Yes, I can." },
            { q: "Can she ride a bike?", options: ["No, she can't.", "No, she can't to ride.", "No, she aren't can.", "No, her can't."], a: "No, she can't." },
            { q: "Can they speak French?", options: ["Yes, they can.", "Yes, they can to speak.", "Yes, they are can speak.", "Yes, they speak can."], a: "Yes, they can." },
            { q: "Can he run fast?", options: ["Yes, he can.", "Yes, he cans.", "Yes, him can.", "Yes, he can to run."], a: "Yes, he can." },
            { q: "Can we solve the problem?", options: ["No, we can't.", "No, us can't.", "No, we not can.", "No, we can't to solve."], a: "No, we can't." },
            { q: "Can it move?", options: ["Yes, it can.", "Yes, its can.", "Yes, it is can.", "Yes, it can to move."], a: "Yes, it can." },
            { q: "Can you draw cartoons?", options: ["No, I can't.", "No, I am not.", "No, I can't to draw.", "No, me can't."], a: "No, I can't." },
            { q: "Can Leo play soccer?", options: ["Yes, he can.", "Yes, he cans.", "Yes, him can.", "Yes, he is can."], a: "Yes, he can." },
            { q: "Can you and Albert skate?", options: ["Yes, we can.", "Yes, you can.", "Yes, they can.", "Yes, we are."], a: "Yes, we can." },
            { q: "Can she play the violin?", options: ["No, she can't.", "No, she can't plays.", "No, her can't.", "No, she not can."], a: "No, she can't." },
            { q: "What can you do?", options: ["I can skate fast.", "I am a blue book.", "Today is Monday.", "My name is Albert."], a: "I can skate fast." },
            { q: "Can you play the piano?", options: ["Yes, I play it every day.", "The piano is heavy.", "I like apples.", "He is twelve."], a: "Yes, I play it every day." },
            { q: "Can she speak French?", options: ["Yes, she is from France.", "French is a language.", "No, she is a teacher.", "I can't see the board."], a: "Yes, she is from France." },
            { q: "How well do you sing?", options: ["I sing very well.", "I sing on Fridays.", "Sing a song!", "I am fifteen."], a: "I sing very well." },
            { q: "Can you help me with homework?", options: ["Of course! I can help you.", "Homework is boring.", "I have a pen.", "She is my mother."], a: "Of course! I can help you." },
            { q: "Can a fish walk?", options: ["No, it can't. It swims.", "Fish is delicious.", "I can see the fish.", "The water is cold."], a: "No, it can't. It swims." },
            { q: "What instrument can Mike play?", options: ["He can play the drums.", "He is a new student.", "The drums are loud.", "He plays in the park."], a: "He can play the drums." },
            { q: "Can you run fast?", options: ["Yes, I am very fast.", "My shoes are red.", "I run to school.", "Athletes run."], a: "Yes, I am very fast." },
            { q: "Can you read this?", options: ["Yes, it is easy to read.", "I have a book.", "The book is blue.", "Read carefully."], a: "Yes, it is easy to read." },
            { q: "Can he play soccer?", options: ["No, he can't play any sport.", "Soccer is popular.", "He is my brother.", "We play on Saturdays."], a: "No, he can't play any sport." },
            { q: "Can you speak Japanese?", options: ["No, but I can speak Chinese.", "Japan is in Asia.", "I like anime.", "The teacher is nice."], a: "No, but I can speak Chinese." },
            { q: "Can you solve the puzzle?", options: ["Yes, I can solve it easily.", "Puzzles are fun.", "It is a puzzle.", "Give me a piece."], a: "Yes, I can solve it easily." },
            { q: "Can your dad cook?", options: ["Yes, he cooks very well.", "My dad is tall.", "I am hungry.", "Kitchens are big."], a: "Yes, he cooks very well." },
            { q: "Can you play the violin?", options: ["She is a musician.", "No, I play the flute.", "Violins are expensive.", "I can hear the music."], a: "No, I play the flute." },
            { q: "Can you dance?", options: ["Yes, I dance every night.", "I like music.", "The party is cool.", "They are dancing."], a: "Yes, I dance every night." },
            { q: "Can you ride a bike?", options: ["Yes, I ride it to school.", "My bike is new.", "Bikes have two wheels.", "I can't drive a car."], a: "Yes, I ride it to school." },
            { q: "Can you swim?", options: ["Swimming is good exercise.", "No, I am afraid of water.", "The pool is open.", "Ducks swim."], a: "No, I am afraid of water." },
            { q: "Can she draw cartoons?", options: ["Yes, she is a great artist.", "Cartoons are funny.", "I watch cartoons.", "She has a pencil."], a: "Yes, she is a great artist." },
            { q: "Can you jump high?", options: ["Yes, I am a good athlete.", "The sky is high.", "Jump now!", "I can run."], a: "Yes, I am a good athlete." },
            { q: "Can they speak Portuguese?", options: ["Yes, they are from Brazil.", "Portuguese is hard.", "Brazil is big.", "I speak English."], a: "Yes, they are from Brazil." }
        ],

       // --- TYPE 4: FIND MEANING (40 items) ---
        4: [
            { sent: "I **can** play the guitar.", word: "can", options: ["Poder/conseguir", "Querer", "Precisar", "Gostar"], a: "Poder/conseguir", def: "A modal verb used to express ability or possibility." },
            { sent: "She can **sing** very well.", word: "sing", options: ["Dançar", "Pintar", "Cantar", "Cozinhar"], a: "Cantar", def: "To make musical sounds with the voice." },
            { sent: "They **dance** at the party.", word: "dance", options: ["Falam", "Dançam", "Correm", "Pulam"], a: "Dançam", def: "To move rhythmically to music." },
            { sent: "He can **draw** cartoons.", word: "draw", options: ["Ler", "Escrever", "Desenhar", "Pintar"], a: "Desenhar", def: "To produce a picture or diagram by making lines on paper." },
            { sent: "We **paint** the wall in art class.", word: "paint", options: ["Desenhamos", "Pintamos", "Limpamos", "Quebramos"], a: "Pintamos", def: "To produce a picture or cover a surface using paint." },
            { sent: "My dad can **cook** Italian food.", word: "cook", options: ["Comer", "Lavar", "Cozinhar", "Servir"], a: "Cozinhar", def: "To prepare food by heating it." },
            { sent: "I play the **piano** every day.", word: "piano", options: ["Violão", "Teclado", "Piano", "Bateria"], a: "Piano", def: "A large keyboard musical instrument with a wooden case." },
            { sent: "Can you **read** this book?", word: "read", options: ["Ler", "Ver", "Ouvir", "Tocar"], a: "Ler", def: "To look at and comprehend the meaning of written matter." },
            { sent: "I **write** emails to my friends.", word: "write", options: ["Leio", "Envio", "Escrevo", "Recebo"], a: "Escrevo", def: "To mark letters or words on a surface." },
            { sent: "We **speak** English in class.", word: "speak", options: ["Estudamos", "Falamos", "Ouvimos", "Entendemos"], a: "Falamos", def: "To say words in order to convey information or express a language." },
            { sent: "Fish can **swim** in the lake.", word: "swim", options: ["Voar", "Correr", "Nadar", "Pular"], a: "Nadar", def: "To propel the body through water using limbs." },
            { sent: "Athletes **run** very fast.", word: "run", options: ["Caminham", "Correm", "Saltam", "Param"], a: "Correm", def: "To move at a speed faster than walking." },
            { sent: "I **ride** my bike to school.", word: "ride", options: ["Dirijo", "Ando/monto", "Carrego", "Empurro"], a: "Ando/monto", def: "To sit on and control the movement of a vehicle like a bike or horse." },
            { sent: "Can you **help** me with my homework?", word: "help", options: ["Dar", "Ajudar", "Ensinar", "Olhar"], a: "Ajudar", def: "To make it easier for someone to do something." },
            { sent: "He can **solve** the math problem.", word: "solve", options: ["Criar", "Copiar", "Resolver", "Excluir"], a: "Resolver", def: "To find an answer to or explanation for a problem." },
            { sent: "Sarah plays **soccer** well.", word: "soccer", options: ["Basquete", "Futebol", "Vôlei", "Tênis"], a: "Futebol", def: "A team game played with a ball between two teams of 11 players." },
            { sent: "He is good at **basketball**.", word: "basketball", options: ["Futebol", "Basquete", "Ciclismo", "Tênis"], a: "Basquete", def: "A game where players throw a ball through a netted hoop." },
            { sent: "They play **volleyball** on the beach.", word: "volleyball", options: ["Futebol", "Basquete", "Vôlei", "Natação"], a: "Vôlei", def: "A game for two teams in which a ball is hit by hand over a net." },
            { sent: "She needs a racket for **tennis**.", word: "tennis", options: ["Futebol", "Natação", "Tênis", "Ciclismo"], a: "Tênis", def: "A game in which players strike a ball with rackets over a net." },
            { sent: "**Swimming** is good exercise.", word: "swimming", options: ["Corrida", "Natação", "Ciclismo", "Ginástica"], a: "Natação", def: "The sport or activity of propelling oneself through water." },
            { sent: "**Cycling** is fun in the park.", word: "cycling", options: ["Corrida", "Natação", "Ciclismo", "Skate"], a: "Ciclismo", def: "The sport or activity of riding a bicycle." },
            { sent: "She practices **gymnastics** at the club.", word: "gymnastics", options: ["Natação", "Ginástica", "Vôlei", "Basquete"], a: "Ginástica", def: "Exercises developing or displaying physical agility." },
            { sent: "He goes **skateboarding** with friends.", word: "skateboarding", options: ["Nadar", "Correr", "Andar de skate", "Pedalar"], a: "Andar de skate", def: "The sport or pastime of riding on a skateboard." },
            { sent: "Let's play **badminton**.", word: "badminton", options: ["Tênis", "Badminton", "Futebol", "Vôlei"], a: "Badminton", def: "A game with rackets and a shuttlecock played across a net." },
            { sent: "Rock stars play the **electric guitar**.", word: "electric guitar", options: ["Violão", "Piano", "Guitarra elétrica", "Violino"], a: "Guitarra elétrica", def: "A guitar with a built-in pickup requiring an amplifier." },
            { sent: "She plays the **violin** beautifully.", word: "violin", options: ["Piano", "Bateria", "Violino", "Flauta"], a: "Violino", def: "A stringed musical instrument played with a bow." },
            { sent: "He sings and plays the **guitar**.", word: "guitar", options: ["Violão", "Baixo", "Piano", "Bateria"], a: "Violão", def: "A stringed musical instrument played by plucking or strumming." },
            { sent: "The **drums** are very loud.", word: "drums", options: ["Teclado", "Bateria", "Violão", "Flauta"], a: "Bateria", def: "Percussion instruments sounded by being struck with sticks." },
            { sent: "She plays the **flute** in the band.", word: "flute", options: ["Teclado", "Flauta", "Guitarra", "Baixo"], a: "Flauta", def: "A high-pitched woodwind instrument." },
            { sent: "I have a **keyboard** at home.", word: "keyboard", options: ["Piano", "Bateria", "Teclado", "Violino"], a: "Teclado", def: "A set of keys on a piano or electronic musical instrument." },
            { sent: "He plays the **bass** guitar.", word: "bass", options: ["Violão", "Guitarra", "Baixo", "Bateria"], a: "Baixo", def: "A stringed instrument playing in the lowest range." },
            { sent: "He walks **slowly**.", word: "slowly", options: ["Lentamente", "Rapidamente", "Bem", "Mal"], a: "Lentamente", def: "At a slow speed; not quickly." },
            { sent: "Run **fast** to win!", word: "fast", options: ["Lentamente", "Cuidadosamente", "Rapidamente/rápido", "Mal"], a: "Rapidamente/rápido", def: "At high speed." },
            { sent: "She sings **well**.", word: "well", options: ["Mal", "Bem", "Rapidamente", "Facilmente"], a: "Bem", def: "In a good or satisfactory way." },
            { sent: "He plays tennis **badly**.", word: "badly", options: ["Bem", "Mal", "Facilmente", "Rapidamente"], a: "Mal", def: "In an unsatisfactory or unsuccessful way." },
            { sent: "I can do it **easily**.", word: "easily", options: ["Lentamente", "Facilmente", "Cuidadosamente", "Mal"], a: "Facilmente", def: "Without difficulty or effort." },
            { sent: "Listen **carefully** to the teacher.", word: "carefully", options: ["Rapidamente", "Cuidadosamente", "Facilmente", "Mal"], a: "Cuidadosamente", def: "In a way that avoids harm or errors." },
            { sent: "I can't dance **at all**.", word: "at all", options: ["Muito bem", "De jeito nenhum", "Facilmente", "Rápido"], a: "De jeito nenhum", def: "In any way; to any extent (used with negatives)." },
            { sent: "She can speak **Portuguese**.", word: "Portuguese", options: ["Inglês", "Espanhol", "Português", "Francês"], a: "Português", def: "The language of Portugal and Brazil." },
            { sent: "He can speak **French**.", word: "French", options: ["Alemão", "Italiano", "Chinês", "Francês"], a: "Francês", def: "The language of France." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 items) ---
        5: [
            { sent: "I can **to** swim.", correct: "swim" },
            { sent: "He **cans** sing very well.", correct: "can" },
            { sent: "She can **speaks** English.", correct: "speak" },
            { sent: "**Do you** can play the piano?", correct: "Can you" },
            { sent: "I **no can** dance.", correct: "can't" },
            { sent: "They can play **guitar**.", correct: "the guitar" },
            { sent: "He runs **good**.", correct: "well" },
            { sent: "She is a good singer. She sings **beautiful**.", correct: "beautifully" },
            { sent: "The turtle walks **fastly**.", correct: "slowly" },
            { sent: "Can he **to** help me?", correct: "help" },
            { sent: "You can drive **careful**.", correct: "carefully" },
            { sent: "I play the violin **bad**.", correct: "badly" },
            { sent: "We can **solves** the problem easily.", correct: "solve" },
            { sent: "Can the students **writes**?", correct: "write" },
            { sent: "Sarah can sing **wellly**.", correct: "well" },
            { sent: "I can't play **a** drums.", correct: "the drums" },
            { sent: "He can **rides** a bike.", correct: "ride" },
            { sent: "**Cans you** speak French?", correct: "Can you" },
            { sent: "She can paint **easy**.", correct: "easily" },
            { sent: "He plays the electric guitar **loud**.", correct: "loudly" },
            { sent: "I can't speak Japanese **at all not**.", correct: "at all" },
            { sent: "**Does he can** cook pasta?", correct: "Can he" },
            { sent: "We **can to** learn together.", correct: "can" },
            { sent: "She **not can** fly.", correct: "can't" },
            { sent: "The cheetah runs **fastly**.", correct: "fast" },
            { sent: "Listen to the music **careful**.", correct: "carefully" },
            { sent: "Can they **plays** tennis?", correct: "play" },
            { sent: "I play **the** football.", correct: "football" },
            { sent: "He can jump **high-ly**.", correct: "high" },
            { sent: "She can dance **good**.", correct: "well" },
            { sent: "Can **you to** read this?", correct: "you" },
            { sent: "He can **speaks** Portuguese.", correct: "speak" },
            { sent: "They play the bass **bad**.", correct: "badly" },
            { sent: "I can write **easy**.", correct: "easily" },
            { sent: "**Are you can** skate fast?", correct: "Can you" },
            { sent: "She **can't to** sing.", correct: "can't" },
            { sent: "It can **flies**.", correct: "fly" },
            { sent: "He plays the keyboard **perfect**.", correct: "perfectly" },
            { sent: "Can Sarah **draws** cartoons?", correct: "draw" },
            { sent: "I can play **a** flute.", correct: "the flute" }
        ],


        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Type 6.1: Question to Answer (Groups 1-10)
            { pairs: [{a:"Can you play the guitar?",b:"Yes, I can play well."}, {a:"How well do you sing?",b:"I sing beautifully."}, {a:"What can you do, Celine?",b:"I can skate fast."}, {a:"Can you help me with homework?",b:"Of course! I can help."}, {a:"Can you speak French?",b:"No, I can't speak it at all."}] },
            { pairs: [{a:"Can Sarah dance?",b:"Yes, she dances perfectly."}, {a:"How well does he play soccer?",b:"He plays very well."}, {a:"Can the students write emails?",b:"Yes, they can write easily."}, {a:"What instrument can Mike play?",b:"He can play the drums."}, {a:"Can we learn together?",b:"Deal! We can learn now."}] },
            { pairs: [{a:"Can a fish walk?",b:"No, it can't. It swims."}, {a:"How well do they speak Japanese?",b:"They speak very badly."}, {a:"Can you run fast?",b:"Yes, I am a fast runner."}, {a:"What can Leo do?",b:"He can play the violin."}, {a:"Can you read this map?",b:"No, it is very difficult."}] },
            { pairs: [{a:"Can you play the piano?",b:"No, I play the keyboard."}, {a:"Who can fix the computer?",b:"My brother can fix it."}, {a:"Can she paint the wall?",b:"Yes, she paints well."}, {a:"How well does the band play?",b:"They play very loudly."}, {a:"Can you jump high?",b:"Yes, look at me!"}] },
            { pairs: [{a:"Can they speak Portuguese?",b:"Yes, they are from Brazil."}, {a:"How well do you cook?",b:"I cook very badly."}, {a:"Can you ride a bike to school?",b:"Yes, I ride carefully."}, {a:"What can those birds do?",b:"They can fly so high."}, {a:"Can Albert draw cartoons?",b:"Yes, he draws well."}] },
            { pairs: [{a:"Can we play tennis today?",b:"No, I don't have a racket."}, {a:"How well does Celine skate?",b:"She skates very fast."}, {a:"Can you solve this puzzle?",b:"Yes, it's very easy."}, {a:"What can you do in the kitchen?",b:"I can cook pasta."}, {a:"Can your sister sing pop?",b:"Yes, she sings pop well."}] },
            { pairs: [{a:"Can you move this big box?",b:"No, it's too heavy."}, {a:"How well do they play basketball?",b:"They play excellently."}, {a:"Can he drive a car?",b:"No, he is too young."}, {a:"What can you write with?",b:"I can write with a pen."}, {a:"Can you hear the music?",b:"Yes, it is very loud."}] },
            { pairs: [{a:"Can you speak three languages?",b:"Yes: English, French, and Spanish."}, {a:"Who can help me?",b:"Mrs. Canales can help."}, {a:"Can she play the flute?",b:"Yes, she is in the band."}, {a:"How well does Tom play guitar?",b:"He plays quite badly."}, {a:"Can a turtle run fast?",b:"No, it walks slowly."}] },
            { pairs: [{a:"Can you swim in the lake?",b:"No, I am afraid of water."}, {a:"How well does she draw?",b:"She draws beautifully."}, {a:"Can they play volleyball?",b:"Yes, on the beach."}, {a:"What can Mike play on the drums?",b:"He can play rock music."}, {a:"Can we start a rock band?",b:"Good idea! Let's go."}] },
            { pairs: [{a:"Can you count to one hundred?",b:"Yes: ten, twenty, thirty..."}, {a:"How well does he speak English?",b:"He speaks very well."}, {a:"Can she ride a horse?",b:"Yes, she rides fast."}, {a:"What can you do on Saturdays?",b:"I can play soccer."}, {a:"Can you see the board?",b:"Yes, I can see easily."}] },

            // Type 6.2: 1st half to 2nd half of a sentence (Groups 11-20)
            { pairs: [{a:"Sarah can sing...",b:"...very beautifully."}, {a:"The turtle walks...",b:"...very slowly."}, {a:"He can play...",b:"...the electric guitar."}, {a:"I can't speak...",b:"...French at all."}, {a:"You can solve...",b:"...the puzzle easily."}] },
            { pairs: [{a:"We can play...",b:"...soccer on Saturdays."}, {a:"Celine can skate...",b:"...very fast on the ground."}, {a:"My dad can...",b:"...cook delicious pasta."}, {a:"She can't play...",b:"...any instrument."}, {a:"They can speak...",b:"...Portuguese well."}] },
            { pairs: [{a:"Listen to the...",b:"...teacher very carefully."}, {a:"He plays the...",b:"...drums very loudly."}, {a:"I can't find...",b:"...my acoustic guitar."}, {a:"You can jump...",b:"...very high."}, {a:"They can fly...",b:"...so high in the sky."}] },
            { pairs: [{a:"Can you help...",b:"...me with my homework?"}, {a:"She is a...",b:"...good pop singer."}, {a:"I play the...",b:"...violin in the band."}, {a:"He runs very...",b:"...fast to win."}, {a:"We can learn...",b:"...English together."}] },
            { pairs: [{a:"I write emails...",b:"...to my friends easily."}, {a:"She needs a...",b:"...racket for tennis."}, {a:"Dolphins can swim...",b:"...very fast in water."}, {a:"Tom plays tennis...",b:"...very badly today."}, {a:"You can draw...",b:"...funny cartoons well."}] },
            { pairs: [{a:"Humans can't fly...",b:"...at all."}, {a:"My brother can...",b:"...fix my computer."}, {a:"She speaks French...",b:"...very well."}, {a:"The band plays...",b:"...music beautifully."}, {a:"I can read...",b:"...books in English."}] },
            { pairs: [{a:"Can they speak...",b:"...Japanese or Chinese?"}, {a:"He can't ride...",b:"...a bike yet."}, {a:"We can play...",b:"...volleyball on the beach."}, {a:"She can play...",b:"...the flute easily."}, {a:"You can use...",b:"...a pen to write."}] },
            { pairs: [{a:"Sarah sings pop...",b:"...beautifully."}, {a:"The cheetah runs...",b:"...fast."}, {a:"I can't dance...",b:"...tango."}, {a:"He can cook...",b:"...Italian food."}, {a:"They can solve...",b:"...math problems."}] },
            { pairs: [{a:"Can you count...",b:"...to one hundred?"}, {a:"She can play...",b:"...the piano well."}, {a:"I can't help...",b:"...you now."}, {a:"He plays basketball...",b:"...very well."}, {a:"We can go...",b:"...cycling in the park."}] },
            { pairs: [{a:"Celine can speak...",b:"...French and English."}, {a:"They can't move...",b:"...the heavy box."}, {a:"I play the...",b:"...bass guitar."}, {a:"You can learn...",b:"...very fast."}, {a:"He draws...",b:"...badly."}] },

            // Type 6.3: English word/sentence to Portuguese translation (Groups 21-30)
            { pairs: [{a:"I can swim well.",b:"Eu consigo nadar bem."}, {a:"She can't sing.",b:"Ela não consegue cantar."}, {a:"Can you help me?",b:"Você pode me ajudar?"}, {a:"They can play soccer.",b:"Eles conseguem jogar futebol."}, {a:"We can learn together.",b:"Nós podemos aprender juntos."}] },
            { pairs: [{a:"He runs very fast.",b:"Ele corre muito rápido."}, {a:"The turtle walks slowly.",b:"A tartaruga anda devagar."}, {a:"I can't dance at all.",b:"Eu não consigo dançar de jeito nenhum."}, {a:"She sings beautifully.",b:"Ela canta lindamente."}, {a:"You play badly.",b:"Você joga mal."}] },
            { pairs: [{a:"Play the guitar",b:"Tocar violão."}, {a:"Play the drums",b:"Tocar bateria."}, {a:"Play the piano",b:"Tocar piano."}, {a:"Play the violin",b:"Tocar violino."}, {a:"Play the flute",b:"Tocar flauta."}] },
            { pairs: [{a:"Speak French",b:"Falar francês."}, {a:"Speak English",b:"Falar inglês."}, {a:"Speak Portuguese",b:"Falar português."}, {a:"Speak Spanish",b:"Falar espanhol."}, {a:"Speak Japanese",b:"Falar japonês."}] },
            { pairs: [{a:"Ride a bike",b:"Andar de bicicleta."}, {a:"Drive a car",b:"Dirigir um carro."}, {a:"Fly a kite",b:"Empinar pipa."}, {a:"Climb a tree",b:"Subir em uma árvore."}, {a:"Fix a computer",b:"Consertar um computador."}] },
            { pairs: [{a:"I can draw cartoons.",b:"Eu consigo desenhar cartoons."}, {a:"She can paint pictures.",b:"Ela consegue pintar quadros."}, {a:"Can he cook pasta?",b:"Ele consegue cozinhar massa?"}, {a:"They can solve puzzles.",b:"Eles conseguem resolver quebra-cabeças."}, {a:"We can write emails.",b:"Nós conseguimos escrever e-mails."}] },
            { pairs: [{a:"High speed",b:"Alta velocidade."}, {a:"Very well",b:"Muito bem."}, {a:"Not at all",b:"De jeito nenhum."}, {a:"Carefully",b:"Cuidadosamente."}, {a:"Easily",b:"Facilmente."}] },
            { pairs: [{a:"Musical instruments",b:"Instrumentos musicais."}, {a:"Languages",b:"Idiomas."}, {a:"Sports",b:"Esportes."}, {a:"Talents and abilities",b:"Talentos e habilidades."}, {a:"Adverbs of manner",b:"Advérbios de modo."}] },
            { pairs: [{a:"The bell is ringing.",b:"O sino está tocando."}, {a:"Are you ready?",b:"Você está pronto?"}, {a:"Deal!",b:"Fechado!/Combinado!"}, {a:"That is awesome!",b:"Isso é incrível!"}, {a:"Really?",b:"Sério?"}] },
            { pairs: [{a:"Play the electric guitar",b:"Toco guitarra elétrica."}, {a:"Play the bass",b:"Toca baixo."}, {a:"Play the keyboard",b:"Toca teclado."}, {a:"Play acoustic guitar",b:"Tocam violão."}, {a:"Play the drums",b:"Tocamos bateria."}] },

            // Type 6.4: Word to Simple Definition in Portuguese (Groups 31-40)
            { pairs: [{a:"Guitar",b:"Instrumento de cordas (violão)."}, {a:"Drums",b:"Instrumento de percussão barulhento."}, {a:"Piano",b:"Instrumento grande com teclas."}, {a:"Violin",b:"Instrumento de cordas tocado com arco."}, {a:"Flute",b:"Instrumento de sopro de madeira."}] },
            { pairs: [{a:"Soccer",b:"Esporte jogado com os pés e uma bola."}, {a:"Basketball",b:"Esporte de jogar a bola na cesta."}, {a:"Tennis",b:"Esporte jogado com raquetes."}, {a:"Swimming",b:"Esporte praticado na água."}, {a:"Cycling",b:"Esporte de andar de bicicleta."}] },
            { pairs: [{a:"Sing",b:"Fazer música com a voz."}, {a:"Dance",b:"Mover o corpo no ritmo da música."}, {a:"Draw",b:"Fazer traços e figuras no papel."}, {a:"Paint",b:"Usar tintas para criar arte."}, {a:"Cook",b:"Preparar alimentos no fogo."}] },
            { pairs: [{a:"Speak",b:"Dizer palavras em um idioma."}, {a:"Read",b:"Entender palavras escritas."}, {a:"Write",b:"Marcar letras no papel ou tela."}, {a:"Help",b:"Facilitar algo para outra pessoa."}, {a:"Listen",b:"Prestar atenção a um som."}] },
            { pairs: [{a:"English",b:"Idioma falado nos EUA e Inglaterra."}, {a:"Portuguese",b:"Idioma falado no Brasil."}, {a:"French",b:"Idioma falado na França."}, {a:"German",b:"Idioma falado na Alemanha."}, {a:"Japanese",b:"Idioma falado no Japão."}] },
            { pairs: [{a:"Well",b:"De uma forma boa."}, {a:"Badly",b:"De uma forma ruim ou incorreta."}, {a:"Fast",b:"Com muita velocidade."}, {a:"Slowly",b:"Com pouca velocidade."}, {a:"Carefully",b:"Com muita atenção e cuidado."}] },
            { pairs: [{a:"Easily",b:"Sem nenhuma dificuldade."}, {a:"Loudly",b:"Com muito volume/som alto."}, {a:"Beautifully",b:"De uma forma muito bonita."}, {a:"Perfectly",b:"De forma ideal."}, {a:"At all",b:"Expressão usada para negar totalmente."}] },
            { pairs: [{a:"Instrument",b:"Objeto usado para fazer música."}, {a:"Language",b:"Sistema de comunicação de um país."}, {a:"Sport",b:"Atividade física competitiva."}, {a:"Adverb",b:"Palavra que descreve como a ação é feita."}, {a:"Modal verb",b:"Verbo como 'CAN' que indica habilidade."}] },
            { pairs: [{a:"Run",b:"Mover as pernas muito rápido."}, {a:"Swim",b:"Mover-se dentro da água."}, {a:"Jump",b:"Impulsionar o corpo para cima."}, {a:"Ride",b:"Andar de bike ou a cavalo."}, {a:"Skate",b:"Deslizar usando patins ou skate."}] },
            { pairs: [{a:"Solve",b:"Encontrar a resposta para um problema."}, {a:"Fix",b:"Consertar algo quebrado."}, {a:"Use",b:"Utilizar uma ferramenta ou objeto."}, {a:"Move",b:"Mudar algo de lugar."}, {a:"Learn",b:"Adquirir um novo conhecimento."}] }
        ],

        // --- TYPE 7: BEST ANSWER (WH QUESTIONS) (40 items) ---
        7: [
            { q: "How well can Sarah sing?", options: ["She sings beautifully.", "She is twelve.", "In the classroom.", "With a blue pen."], a: "She sings beautifully." },
            { q: "What instrument can Albert play?", options: ["He can play the guitar.", "He is from Canada.", "He plays very fast.", "Yes, he can."], a: "He can play the guitar." },
            { q: "Where can you play soccer?", options: ["We can play in the park.", "We play very well.", "Soccer is a sport.", "On Saturdays at 10 AM."], a: "We can play in the park." },
            { q: "Who can help me with my French homework?", options: ["Celine can help you.", "It is a difficult language.", "I can speak fast.", "In the library."], a: "Celine can help you." },
            { q: "What languages can you speak?", options: ["I can speak English and Portuguese.", "I can run fast.", "My name is Leo.", "I play the piano."], a: "I can speak English and Portuguese." },
            { q: "How does the turtle walk?", options: ["It walks very slowly.", "It is a green animal.", "In the garden.", "To the lake."], a: "It walks very slowly." },
            { q: "What can you do on your new skates?", options: ["I can skate very fast.", "They are blue and white.", "At the school.", "With my friends."], a: "I can skate very fast." },
            { q: "Who can play the drums in the band?", options: ["Mike’s brother can play them.", "The drums are very loud.", "In the garage.", "No, they can't."], a: "Mike’s brother can play them." },
            { q: "How well does he play the violin?", options: ["He plays it quite badly.", "He is a student.", "It is a string instrument.", "In the music room."], a: "He plays it quite badly." },
            { q: "Where can they practice gymnastics?", options: ["They can practice at the club.", "They are very flexible.", "On Mondays and Fridays.", "With a ribbon."], a: "They can practice at the club." },
            { q: "What does your dad cook?", options: ["He cooks delicious pasta.", "He cooks in the kitchen.", "He cooks very carefully.", "At 7 o'clock."], a: "He cooks delicious pasta." },
            { q: "Who can run faster than a horse?", options: ["A cheetah can.", "It runs very fast.", "In the savanna.", "To win the race."], a: "A cheetah can." },
            { q: "How do rock stars play the electric guitar?", options: ["They play very loudly.", "They are very famous.", "On a big stage.", "For the fans."], a: "They play very loudly." },
            { q: "What can you use to write an email?", options: ["I can use a laptop.", "I write beautifully.", "To my best friend.", "Every morning."], a: "I can use a laptop." },
            { q: "Where can we go cycling?", options: ["We can go to the bike path.", "We can ride fast.", "It is a healthy sport.", "With our helmets."], a: "We can go to the bike path." },
            { q: "Who can solve this difficult puzzle?", options: ["Leo can solve it easily.", "The puzzle has 1000 pieces.", "It is on the table.", "Because he is smart."], a: "Leo can solve it easily." },
            { q: "How well can you speak Japanese?", options: ["I can't speak it at all.", "Japan is in Asia.", "I like Japanese food.", "My teacher is Japanese."], a: "I can't speak it at all." },
            { q: "What sport needs a racket?", options: ["Tennis needs a racket.", "I play tennis well.", "In the court.", "To hit the ball."], a: "Tennis needs a racket." },
            { q: "Who can dance the tango?", options: ["My grandparents can.", "Tango is from Argentina.", "They dance beautifully.", "At the party."], a: "They dance beautifully." },
            { q: "How does the athlete run?", options: ["He runs very fast.", "He is a runner.", "In the stadium.", "To the finish line."], a: "He runs very fast." },
            { q: "What can a dolphin do in the water?", options: ["It can swim very fast.", "It is a blue animal.", "In the ocean.", "Because it has fins."], a: "It can swim very fast." },
            { q: "Where can I find a flute?", options: ["In the music store.", "It is a woodwind instrument.", "She plays the flute well.", "To play in the band."], a: "In the music store." },
            { q: "Who can ride a motorcycle?", options: ["My uncle can.", "The motorcycle is red.", "He rides carefully.", "On the street."], a: "My uncle can." },
            { q: "How well can they play basketball?", options: ["They play very well.", "They are on the team.", "In the gym.", "With a orange ball."], a: "They play very well." },
            { q: "What can you draw with a pencil?", options: ["I can draw a house.", "I draw every day.", "My pencil is sharp.", "On a piece of paper."], a: "I can draw a house." },
            { q: "Who can speak four languages?", options: ["The principal can.", "Languages are interesting.", "He speaks them perfectly.", "At the school."], a: "The principal can." },
            { q: "How do you study for the test?", options: ["I study very carefully.", "The test is on Tuesday.", "In my bedroom.", "To get a good grade."], a: "I study very carefully." },
            { q: "What instrument has black and white keys?", options: ["The piano has them.", "I can play the piano.", "It is in the classroom.", "For the concert."], a: "The piano has them." },
            { q: "Where can we go swimming?", options: ["At the public pool.", "We can swim well.", "It is a hot day.", "With our goggles."], a: "At the public pool." },
            { q: "How well can she paint?", options: ["She paints like a professional.", "She uses many colors.", "In her art studio.", "A picture of a flower."], a: "She paints like a professional." },
            { q: "What can humans not do?", options: ["Humans can't fly at all.", "Humans are mammals.", "In the sky.", "Because they don't have wings."], a: "Humans can't fly at all." },
            { q: "Who can jump two meters high?", options: ["That tall athlete can.", "Jumping is fun.", "He jumps easily.", "In the competition."], a: "That tall athlete can." },
            { q: "How does a professional driver drive?", options: ["He drives very safely and carefully.", "He has a fast car.", "On the racing track.", "To win the trophy."], a: "He drives very safely and carefully." },
            { q: "What can we do with a computer?", options: ["We can browse the internet.", "The computer is new.", "In the computer lab.", "At 8:00 PM."], a: "We can browse the internet." },
            { q: "Where can she play the bass guitar?", options: ["In a rock band.", "She plays very loudly.", "It is a heavy instrument.", "To make music."], a: "In a rock band." },
            { q: "Who can speak Portuguese in this room?", options: ["All the Brazilian students can.", "Portuguese is a beautiful language.", "They speak it well.", "Every day."], a: "All the Brazilian students can." },
            { q: "How well does the chef cook?", options: ["He cooks perfectly.", "He is a famous chef.", "In the restaurant kitchen.", "Pizza and pasta."], a: "He cooks perfectly." },
            { q: "What can a parrot do?", options: ["It can repeat words.", "It is a colorful bird.", "In the cage.", "To communicate."], a: "It can repeat words." },
            { q: "Where can you learn to play the violin?", options: ["At the music academy.", "It is a difficult instrument.", "I practice every night.", "With a teacher."], a: "At the music academy." },
            { q: "How do the students listen to the story?", options: ["They listen very attentively.", "The story is interesting.", "In the library.", "After lunch."], a: "They listen very attentively." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 items) ---
        8: [
            { sent: "I can speak **guitar** very well.", wrong: "guitar", options: ["French", "Soccer", "Slowly", "Red"], a: "French" },
            { sent: "She can **run** the piano beautifully.", wrong: "run", options: ["Play", "Cook", "Speak", "Swim"], a: "Play" },
            { sent: "The turtle walks very **fastly**.", wrong: "fastly", options: ["Slowly", "Loudly", "Badly", "Well"], a: "Slowly" },
            { sent: "My brother plays **basketball** on his violin.", wrong: "basketball", options: ["Music", "Soccer", "French", "Fast"], a: "Music" },
            { sent: "We need a **racket** to play the drums.", wrong: "racket", options: ["Drumsticks", "Ball", "Goggles", "Helmet"], a: "Drumsticks" },
            { sent: "He can swim very **loudly** in the pool.", wrong: "loudly", options: ["Fast", "Clearly", "Loud", "Blue"], a: "Fast" },
            { sent: "I can **cook** cartoons with my pencil.", wrong: "cook", options: ["Draw", "Speak", "Ride", "Jump"], a: "Draw" },
            { sent: "They can **speak** tennis fluently.", wrong: "speak", options: ["Play", "Portuguese", "Guitar", "Well"], a: "Play" },
            { sent: "The cheetah is very **slow**.", wrong: "slow", options: ["Fast", "Big", "Careful", "Loud"], a: "Fast" },
            { sent: "Can you **ride** a car?", wrong: "ride", options: ["Drive", "Play", "Speak", "Cook"], a: "Drive" },
            { sent: "She plays the **soccer** in the school band.", wrong: "soccer", options: ["Flute", "Basketball", "Spanish", "Fast"], a: "Flute" },
            { sent: "I can solve the **pasta** easily.", wrong: "pasta", options: ["Puzzle", "Swimming", "Piano", "Fast"], a: "Puzzle" },
            { sent: "The rock star plays the **violin** very loudly.", wrong: "violin", options: ["Electric guitar", "Soccer", "French", "Swimming"], a: "Electric guitar" },
            { sent: "We use **goggles** to play basketball.", wrong: "goggles", options: ["A ball", "A racket", "A flute", "A bicycle"], a: "A ball" },
            { sent: "He sings **badly**. Everyone loves his voice.", wrong: "badly", options: ["Beautifully", "Slowly", "Carefully", "Fast"], a: "Beautifully" },
            { sent: "My mother can **paint** delicious cakes.", wrong: "paint", options: ["Bake/Cook", "Draw", "Speak", "Play"], a: "Bake/Cook" },
            { sent: "Can you **play** German?", wrong: "play", options: ["Speak", "Run", "Jump", "Ride"], a: "Speak" },
            { sent: "He drives the bus very **beautifully**.", wrong: "beautifully", options: ["Carefully", "Loudly", "Clearly", "Softly"], a: "Carefully" },
            { sent: "I can **skate** a bike.", wrong: "skate", options: ["Ride", "Drive", "Play", "Speak"], a: "Ride" },
            { sent: "The student **paints** with a microphone.", wrong: "paints", options: ["Sings", "Cooks", "Swims", "Runs"], a: "Sings" },
            { sent: "We can **jump** the piano.", wrong: "jump", options: ["Play", "Speak", "Write", "Swim"], a: "Play" },
            { sent: "A fish can **fly** in the ocean.", wrong: "fly", options: ["Swim", "Walk", "Run", "Dance"], a: "Swim" },
            { sent: "I write emails **slowly** because I am in a hurry.", wrong: "slowly", options: ["Quickly/Fast", "Badly", "Loudly", "Quietly"], a: "Quickly/Fast" },
            { sent: "She can **speak** the violin well.", wrong: "speak", options: ["Play", "Run", "Cook", "Jump"], a: "Play" },
            { sent: "We play **cycling** on Saturdays.", wrong: "cycling", options: ["Soccer", "Piano", "French", "Well"], a: "Soccer" },
            { sent: "Can you **help** this math problem?", wrong: "help", options: ["Solve", "Sing", "Dance", "Ride"], a: "Solve" },
            { sent: "He plays the drums very **quietly**.", wrong: "quietly", options: ["Loudly", "Clearly", "Badly", "Fast"], a: "Loudly" },
            { sent: "My aunt can **speak** pictures.", wrong: "speak", options: ["Paint/Draw", "Cook", "Play", "Swim"], a: "Paint/Draw" },
            { sent: "I use a **racket** to go skateboarding.", wrong: "racket", options: ["Skateboard", "Ball", "Piano", "Pen"], a: "Skateboard" },
            { sent: "The teacher explains the lesson **loudly**. I can't hear her.", wrong: "loudly", options: ["Quietly/Softly", "Quickly", "Well", "Badly"], a: "Quietly/Softly" },
            { sent: "Can you **speak** the guitar?", wrong: "speak", options: ["Play", "Run", "Cook", "Jump"], a: "Play" },
            { sent: "He can **ride** a car to school.", wrong: "ride", options: ["Drive", "Play", "Sing", "Swim"], a: "Drive" },
            { sent: "She plays **volleyball** in the band.", wrong: "volleyball", options: ["The flute", "Soccer", "English", "Fast"], a: "The flute" },
            { sent: "I can **read** the computer.", wrong: "read", options: ["Use/Fix", "Speak", "Sing", "Dance"], a: "Use/Fix" },
            { sent: "The athletes run very **badly**. They win all the medals.", wrong: "badly", options: ["Fast/Well", "Slowly", "Carefully", "Loudly"], a: "Fast/Well" },
            { sent: "My brother can **play** French.", wrong: "play", options: ["Speak", "Cook", "Run", "Jump"], a: "Speak" },
            { sent: "We need a **ball** to go swimming.", wrong: "ball", options: ["Pool/Goggles", "Racket", "Piano", "Pen"], a: "Pool/Goggles" },
            { sent: "Can you **draw** a song?", wrong: "draw", options: ["Sing", "Cook", "Ride", "Jump"], a: "Sing" },
            { sent: "He can **cook** the piano easily.", wrong: "cook", options: ["Play", "Speak", "Run", "Swim"], a: "Play" },
            { sent: "I study the map **loudly**.", wrong: "loudly", options: ["Carefully", "Fastly", "Badly", "Well"], a: "Carefully" }
        ],

// --- TYPE 9: LISTEN AND ANSWER (40 items) ---
        9: [
            { audio: "Can you play the guitar?", options: ["Yes, I can.", "I am fourteen.", "It is blue.", "In the hallway."], a: "Yes, I can." },
            { audio: "How well does she sing?", options: ["She sings beautifully.", "She is from France.", "Yes, she does.", "At 8 o'clock."], a: "She sings beautifully." },
            { audio: "What languages can you speak?", options: ["I can speak French and English.", "I am a student.", "My favorite sport is soccer.", "No, I can't."], a: "I can speak French and English." },
            { audio: "Can you help me with my homework?", options: ["Of course I can!", "Homework is difficult.", "I have a green pen.", "My name is Celine."], a: "Of course I can!" },
            { audio: "How does the turtle walk?", options: ["It walks very slowly.", "It is a small animal.", "In the garden.", "Yes, it can."], a: "It walks very slowly." },
            { audio: "What instrument can Mike play?", options: ["He can play the drums.", "He is a new student.", "The drums are loud.", "In the music room."], a: "He can play the drums." },
            { audio: "Can they swim in the lake?", options: ["No, they can't.", "They are fifteen.", "The lake is cold.", "From Brazil."], a: "No, they can't." },
            { audio: "How well do you play tennis?", options: ["I play very badly.", "I have a racket.", "On the tennis court.", "Yes, I do."], a: "I play very badly." },
            { audio: "Can you ride a bike?", options: ["Yes, I ride to school.", "My bike is red.", "Bikes have two wheels.", "I am twelve years old."], a: "Yes, I ride to school." },
            { audio: "What can you do, Celine?", options: ["I can skate fast.", "I am a girl.", "Today is Tuesday.", "My name is Celine."], a: "I can skate fast." },
            { audio: "Can he speak Portuguese?", options: ["Yes, he is from Brazil.", "Portuguese is hard.", "No, he is a teacher.", "Blue is a color."], a: "Yes, he is from Brazil." },
            { audio: "How well does the band play?", options: ["They play very loudly.", "They are in the garage.", "Rock music is cool.", "Five people are in the band."], a: "They play very loudly." },
            { audio: "Can you solve this math problem?", options: ["Yes, it is very easy.", "Math is my favorite subject.", "I have a calculator.", "In the classroom."], a: "Yes, it is very easy." },
            { audio: "Who can play the piano?", options: ["Albert can play it.", "The piano is black.", "I like piano music.", "At the concert."], a: "Albert can play it." },
            { audio: "How do you run in the race?", options: ["I run very fast.", "The race is on Sunday.", "I want to win.", "With my new shoes."], a: "I run very fast." },
            { audio: "Can she draw cartoons?", options: ["Yes, she is an artist.", "Cartoons are funny.", "I watch cartoons.", "No, she is fifteen."], a: "Yes, she is an artist." },
            { audio: "What sport can we play at the beach?", options: ["We can play volleyball.", "The beach is beautiful.", "We can swim.", "On Saturdays."], a: "We can play volleyball." },
            { audio: "Can you read this Japanese book?", options: ["No, I can't read Japanese.", "The book is heavy.", "Japan is far away.", "I have a book."], a: "No, I can't read Japanese." },
            { audio: "How well does he play soccer?", options: ["He plays like a professional.", "He is on the team.", "Soccer is a team sport.", "In the stadium."], a: "He plays like a professional." },
            { audio: "Can humans fly at all?", options: ["No, they can't.", "Birds can fly.", "The sky is high.", "Yes, I am."], a: "No, they can't." },
            { audio: "Where can you go cycling?", options: ["In the park.", "I can ride fast.", "Cycling is fun.", "My bike is new."], a: "In the park." },
            { audio: "Can you speak three languages?", options: ["Yes: English, French, and Spanish.", "I like languages.", "My teacher speaks well.", "No, I am twelve."], a: "Yes: English, French, and Spanish." },
            { audio: "How do the students listen?", options: ["They listen carefully.", "They are in class.", "The lesson is long.", "Yes, they do."], a: "They listen carefully." },
            { audio: "Can you jump two meters?", options: ["No, I can't jump that high.", "Jumping is easy.", "I am a student.", "In the gym."], a: "No, I can't jump that high." },
            { audio: "What instrument has keys?", options: ["The piano has keys.", "I have my house keys.", "The violin is small.", "In the music store."], a: "The piano has keys." },
            { audio: "Can you fix my laptop?", options: ["Yes, I can fix it easily.", "My laptop is broken.", "I use it every day.", "To study English."], a: "Yes, I can fix it easily." },
            { audio: "How well do they speak English?", options: ["They speak it perfectly.", "They are from the USA.", "English is a language.", "No, they can't."], a: "They speak it perfectly." },
            { audio: "Can she play the flute?", options: ["No, she plays the violin.", "The flute is made of wood.", "She is in the band.", "Yes, she is happy."], a: "No, she plays the violin." },
            { audio: "What can a cheetah do?", options: ["It can run very fast.", "It is a big cat.", "In Africa.", "Because it has spots."], a: "It can run very fast." },
            { audio: "Can we start a band today?", options: ["Deal! We can start now.", "A band plays music.", "I like the drums.", "At school."], a: "Deal! We can start now." },
            { audio: "How well do you cook pasta?", options: ["I cook it very well.", "Pasta is Italian food.", "I am hungry.", "In the kitchen."], a: "I cook it very well." },
            { audio: "Can you move this box?", options: ["No, it is too heavy.", "The box is brown.", "My books are inside.", "Under the desk."], a: "No, it is too heavy." },
            { audio: "Who can speak Japanese?", options: ["Leo can speak it.", "Japan is in Asia.", "It is a difficult language.", "Yes, I am."], a: "Leo can speak it." },
            { audio: "How does the professional drive?", options: ["He drives carefully.", "He has a fast car.", "On the racing track.", "To win the trophy."], a: "He drives carefully." },
            { audio: "Can you see the board?", options: ["Yes, I can see clearly.", "The board is green.", "Write your name!", "I am in the front."], a: "Yes, I can see clearly." },
            { audio: "What sport uses a racket?", options: ["Tennis uses a racket.", "I play tennis well.", "In the court.", "To hit the ball."], a: "Tennis uses a racket." },
            { audio: "Can Sarah sing pop music?", options: ["Yes, she sings pop well.", "Pop music is popular.", "She is a student.", "No, I can't."], a: "Yes, she sings pop well." },
            { audio: "How well can you draw?", options: ["I can draw beautifully.", "I have a pencil.", "Drawing is fun.", "On a piece of paper."], a: "I can draw beautifully." },
            { audio: "Can you count to one hundred?", options: ["Yes: ten, twenty, thirty...", "One hundred is a big number.", "My favorite number is ten.", "I am fourteen."], a: "Yes: ten, twenty, thirty..." },
            { audio: "Can we learn together?", options: ["Yes, we can.", "We are students.", "English is a language.", "In the library."], a: "Yes, we can." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 items) ---
        10: [
            { audio: "I can play the guitar very well.", sent: "I can ___ the ___ very well.", blanks: ["play", "guitar"] },
            { audio: "She can sing beautifully in the band.", sent: "She can ___ beautifully in the ___. ", blanks: ["sing", "band"] },
            { audio: "He can run very fast to win.", sent: "He can ___ very ___ to win.", blanks: ["run", "fast"] },
            { audio: "Can you help me with my French?", sent: "Can you ___ me with my ___?", blanks: ["help", "French"] },
            { audio: "They can speak Portuguese and English.", sent: "They can ___ Portuguese and ___.", blanks: ["speak", "English"] },
            { audio: "I can't dance at all.", sent: "I can't ___ at ___.", blanks: ["dance", "all"] },
            { audio: "The turtle walks very slowly.", sent: "The ___ walks very ______.", blanks: ["turtle", "slowly"] },
            { audio: "Can you play the piano?", sent: "Can you ___ the ___?", blanks: ["play", "piano"] },
            { audio: "He can solve the problem easily.", sent: "He can ___ the ___ easily.", blanks: ["solve", "problem"] },
            { audio: "We can play soccer on Saturdays.", sent: "We can ___ soccer on ___.", blanks: ["play", "Saturdays"] },
            { audio: "She can paint the wall well.", sent: "She can ___ the ___ well.", blanks: ["paint", "wall"] },
            { audio: "Mike can play the drums loudly.", sent: "Mike can ___ the ___ loudly.", blanks: ["play", "drums"] },
            { audio: "You can write emails easily.", sent: "You can ___ emails ___.", blanks: ["write", "easily"] },
            { audio: "Can he ride a bike to school?", sent: "Can he ___ a ___ to school?", blanks: ["ride", "bike"] },
            { audio: "Listen carefully to the teacher.", sent: "Listen ___ to the ___.", blanks: ["carefully", "teacher"] },
            { audio: "I can't find my violin.", sent: "I can't ___ my ___.", blanks: ["find", "violin"] },
            { audio: "She plays tennis very badly.", sent: "She plays ___ very ___.", blanks: ["tennis", "badly"] },
            { audio: "Can we learn English together?", sent: "Can we ___ English ___?", blanks: ["learn", "together"] },
            { audio: "The cheetah runs very fast.", sent: "The ___ runs very ___.", blanks: ["cheetah", "fast"] },
            { audio: "He can play the flute well.", sent: "He can ___ the ___ well.", blanks: ["play", "flute"] },
            { audio: "I can speak Japanese a little.", sent: "I can ___ Japanese a ___.", blanks: ["speak", "little"] },
            { audio: "She can jump very high.", sent: "She can ___ very ___.", blanks: ["jump", "high"] },
            { audio: "Can you use a computer?", sent: "Can you ___ a ___?", blanks: ["use", "computer"] },
            { audio: "We can't move the box.", sent: "We can't ___ the ___.", blanks: ["move", "box"] },
            { audio: "He can cook delicious pasta.", sent: "He can ___ delicious ___.", blanks: ["cook", "pasta"] },
            { audio: "They can practice gymnastics at the club.", sent: "They can ___ gymnastics at the ___.", blanks: ["practice", "club"] },
            { audio: "Can she speak Spanish fluently?", sent: "Can she ___ Spanish ___?", blanks: ["speak", "fluently"] },
            { audio: "I can draw funny cartoons.", sent: "I can ___ funny ___.", blanks: ["draw", "cartoons"] },
            { audio: "He plays the electric guitar loudly.", sent: "He plays the ___ guitar ___.", blanks: ["electric", "loudly"] },
            { audio: "Can you read the map?", sent: "Can you ___ the ___.", blanks: ["read", "map"] },
            { audio: "We can go cycling in the park.", sent: "We can go ___ in the ___.", blanks: ["cycling", "park"] },
            { audio: "She can sing like a star.", sent: "She can ___ like a ___.", blanks: ["sing", "star"] },
            { audio: "Can you count to one hundred?", sent: "Can you ___ to one ___?", blanks: ["count", "hundred"] },
            { audio: "The turtle is very slow.", sent: "The ___ is very ___.", blanks: ["turtle", "slow"] },
            { audio: "He can fix my laptop.", sent: "He can ___ my ___.", blanks: ["fix", "laptop"] },
            { audio: "They can dance the tango.", sent: "They can ___ the ___.", blanks: ["dance", "tango"] },
            { audio: "I can't swim in the ocean.", sent: "I can't ___ in the ___.", blanks: ["swim", "ocean"] },
            { audio: "She can play the violin beautifully.", sent: "She can ___ the ___ beautifully.", blanks: ["play", "violin"] },
            { audio: "Can you hear the music?", sent: "Can you ___ the ___.", blanks: ["hear", "music"] },
            { audio: "We can start a band.", sent: "We can ___ a ___.", blanks: ["start", "band"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE (10 items) ---
        11: [
            {
                title: "Preparing for the Talent Show",
                lines: [
                    { speaker: "Celine", text: "Albert, the show is next week! ___ you play an instrument?", options: ["Can", "Do"], a: "Can" },
                    { speaker: "Albert", text: "Yes, I can play ___ guitar.", options: ["the", "a"], a: "the" },
                    { speaker: "Celine", text: "Can you play it ___?", options: ["well", "good"], a: "well" },
                    { speaker: "Albert", text: "Not yet, but I can learn ___.", options: ["easily", "easy"], a: "easily" },
                    { speaker: "Celine", text: "Great! Can you ___ pop music?", options: ["sing", "sings"], a: "sing" }
                ]
            },
            {
                title: "Sports and Speed",
                lines: [
                    { speaker: "Mike", text: "Hey Leo, ___ you run very fast now?", options: ["Can", "Cans"], a: "Can" },
                    { speaker: "Leo", text: "Yes, I can! I run ___.", options: ["fast", "fastly"], a: "fast" },
                    { speaker: "Mike", text: "Can you play ___ well, too?", options: ["soccer", "the soccer"], a: "soccer" },
                    { speaker: "Leo", text: "I play soccer ___, though.", options: ["badly", "bad"], a: "badly" },
                    { speaker: "Mike", text: "We can ___ together on Saturdays.", options: ["learn", "to learn"], a: "learn" }
                ]
            },
            {
                title: "Language Exchange",
                lines: [
                    { speaker: "Sarah", text: "Celine, I hear you can speak many ___.", options: ["languages", "sports"], a: "languages" },
                    { speaker: "Celine", text: "I can speak French ___.", options: ["perfectly", "perfect"], a: "perfectly" },
                    { speaker: "Sarah", text: "I can't speak it ___.", options: ["at all", "badly"], a: "at all" },
                    { speaker: "Celine", text: "Can you ___ in Spanish?", options: ["write", "writes"], a: "write" },
                    { speaker: "Sarah", text: "Yes, I write ___ to avoid mistakes.", options: ["carefully", "careful"], a: "carefully" }
                ]
            },
            {
                title: "Starting a Rock Band",
                lines: [
                    { speaker: "Albert", text: "Can your brother ___ the drums?", options: ["play", "plays"], a: "play" },
                    { speaker: "Celine", text: "Yes, he plays them very ___.", options: ["loudly", "loud"], a: "loudly" },
                    { speaker: "Albert", text: "I can play the ___ guitar.", options: ["electric", "guitar electric"], a: "electric" },
                    { speaker: "Celine", text: "Can Sarah ___ us?", options: ["join", "joins"], a: "join" },
                    { speaker: "Albert", text: "Yes, she learns ___.", options: ["easily", "easy"], a: "easily" }
                ]
            },
            {
                title: "Skills at Home",
                lines: [
                    { speaker: "Mom", text: "___ you help me in the kitchen?", options: ["Can", "Does"], a: "Can" },
                    { speaker: "Paul", text: "I ___ cook very well.", options: ["can't", "am"], a: "can't" },
                    { speaker: "Mom", text: "Can you ___ the knife?", options: ["use", "using"], a: "use" },
                    { speaker: "Paul", text: "I will cut the vegetables ___.", options: ["carefully", "fastly"], a: "carefully" },
                    { speaker: "Mom", text: "Please ___ the heavy pots for me.", options: ["move", "moves"], a: "move" }
                ]
            },
            {
                title: "PE Class Challenge",
                lines: [
                    { speaker: "Teacher", text: "Class, ___ you see the net?", options: ["Can", "Do"], a: "Can" },
                    { speaker: "Student A", text: "I can't play ___ at all.", options: ["volleyball", "the volleyball"], a: "volleyball" },
                    { speaker: "Teacher", text: "You can ___ if you try.", options: ["learn", "learning"], a: "learn" },
                    { speaker: "Student B", text: "I can ___ my friends.", options: ["help", "helping"], a: "help" },
                    { speaker: "Teacher", text: "Move ___ to the court!", options: ["quickly", "slow"], a: "quickly" }
                ]
            },
            {
                title: "Computer Problems",
                lines: [
                    { speaker: "Albert", text: "Celine, ___ you fix my laptop?", options: ["Can", "Are"], a: "Can" },
                    { speaker: "Celine", text: "I can't fix computers ___.", options: ["at all", "well"], a: "at all" },
                    { speaker: "Albert", text: "___ can help me then?", options: ["Who", "What"], a: "Who" },
                    { speaker: "Celine", text: "Leo can ___ software problems.", options: ["solve", "solves"], a: "solve" },
                    { speaker: "Albert", text: "He solves them very ___.", options: ["easily", "easyly"], a: "easily" }
                ]
            },
            {
                title: "Hobbies and Talents",
                lines: [
                    { speaker: "Friend A", text: "What ___ you do in your free time?", options: ["can", "is"], a: "can" },
                    { speaker: "Friend B", text: "I ___ draw funny cartoons.", options: ["can", "draw"], a: "can" },
                    { speaker: "Friend A", text: "You draw them ___!", options: ["beautifully", "beautiful"], a: "beautifully" },
                    { speaker: "Friend B", text: "I ___ paint, though.", options: ["can't", "not"], a: "can't" },
                    { speaker: "Friend A", text: "Can you ___ a bike fast?", options: ["ride", "skate"], a: "ride" }
                ]
            },
            {
                title: "The Music Lesson",
                lines: [
                    { speaker: "Teacher", text: "___ you play the flute, Mike?", options: ["Can", "Do"], a: "Can" },
                    { speaker: "Mike", text: "No, I play the ___.", options: ["drums", "drumming"], a: "drums" },
                    { speaker: "Teacher", text: "Do you play them ___?", options: ["loudly", "loud"], a: "loudly" },
                    { speaker: "Mike", text: "Yes, but I ___ read music yet.", options: ["can't", "not"], a: "can't" },
                    { speaker: "Teacher", text: "We can practice ___.", options: ["together", "togetherly"], a: "together" }
                ]
            },
            {
                title: "Beach Sports",
                lines: [
                    { speaker: "Ana", text: "___ we play volleyball here?", options: ["Can", "Are"], a: "Can" },
                    { speaker: "Beto", text: "Yes, I play ___ on the sand.", options: ["well", "good"], a: "well" },
                    { speaker: "Ana", text: "I ___ play at all.", options: ["can't", "no"], a: "can't" },
                    { speaker: "Beto", text: "I can ___ you.", options: ["teach", "teaches"], a: "teach" },
                    { speaker: "Ana", text: "Let's start ___!", options: ["quickly", "quick"], a: "quickly" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER ---
        12: [
            { title: "The School Talent Show", text: "REACH School is hosting its annual talent show tonight. Many students are excited because they can show their special skills. Sarah can sing like a professional pop star; she performs beautifully on stage. Mike can play the drums very loudly, and he never misses a beat. However, some students are nervous. Tom can play the acoustic guitar, but he can't find his instrument today. His friend Albert is helping him search the hallway. Even the teacher, Mrs. Canales, has a talent: she can speak four different languages fluently!", questions: [
                { q: "Why are the students excited?", options: ["Because it is a holiday.", "Because they can show their skills.", "Because they can sleep."], a: "Because they can show their skills." },
                { q: "How does Sarah sing?", options: ["Badly and quietly.", "Beautifully like a professional.", "She can't sing at all."], a: "Beautifully like a professional." },
                { q: "What is Mike's talent?", options: ["He can play the flute.", "He can play the drums loudly.", "He can dance tango."], a: "He can play the drums loudly." },
                { q: "What is Tom’s problem?", options: ["He can't sing well.", "He can't find his guitar.", "He can't speak French."], a: "He can't find his guitar." },
                { q: "What can Mrs. Canales do?", options: ["She can play the drums.", "She can speak four languages.", "She can run very fast."], a: "She can speak four languages." }
            ]},
            { title: "Celine’s Multicultural Skills", text: "Celine is a very talented student from Australia. Because her mother is French and her father is Brazilian, she can speak three languages perfectly: English, French, and Portuguese. Celine can also skate very fast on her roller skates, which she uses to go to school every day. Although she is good at languages and sports, she can't play any musical instruments. She wants to learn the piano, and her friend Albert says he can teach her if she helps him with his French homework.", questions: [
                { q: "Where is Celine from?", options: ["France", "Brazil", "Australia"], a: "Australia" },
                { q: "How many languages can Celine speak perfectly?", options: ["Two", "Three", "Four"], a: "Three" },
                { q: "How does Celine go to school?", options: ["She rides a bike.", "She skates fast.", "She drives a car."], a: "She skates fast." },
                { q: "What is Celine not able to do?", options: ["Speak Portuguese.", "Play musical instruments.", "Skate."], a: "Play musical instruments." },
                { q: "What is the deal between Albert and Celine?", options: ["He teaches her piano; she helps him with French.", "He teaches her French; she helps him with piano.", "They both play the guitar."], a: "He teaches her piano; she helps him with French." }
            ]},
            { title: "The Secret Talents of Leo", text: "Albert's brother, Leo, is famous at school for his many abilities. He is an excellent athlete; he can run fast and play basketball very well. In music class, Leo can play the violin beautifully, and the teacher says he has a natural gift. However, Leo has one major weakness: he can't cook at all! Last Sunday, he tried to cook pasta for the family, but he did it so badly that nobody could eat it. Now, he prefers to draw cartoons or play video games instead of going to the kitchen.", questions: [
                { q: "Who is Leo?", options: ["Albert's teacher", "Albert's brother", "Celine's cousin"], a: "Albert's brother" },
                { q: "What sports can Leo do well?", options: ["Swimming and tennis.", "Running and basketball.", "Cycling and gymnastics."], a: "Running and basketball." },
                { q: "What musical instrument can Leo play?", options: ["The drums", "The violin", "The electric guitar"], a: "The violin" },
                { q: "What is Leo's weakness?", options: ["He can't draw.", "He can't cook.", "He can't run."], a: "He can't cook." },
                { q: "How did Leo cook the pasta last Sunday?", options: ["Perfectly", "Very badly", "Quickly"], a: "Very badly" }
            ]},
            { title: "A Day at the Sports Club", text: "The local sports club is full of activity today. You can see many people practicing different things. On the court, a young girl can play tennis very carefully because she is learning how to use the racket. In the pool, the swimmers can move through the water very quickly. Near the track, some boys are practicing gymnastics; they can jump high and move their bodies with great coordination. However, some people can't do much. A small boy is crying because he can't ride his bike without help. His father is teaching him slowly.", questions: [
                { q: "Why is the girl playing tennis carefully?", options: ["Because she is tired.", "Because she is learning.", "Because she is old."], a: "Because she is learning." },
                { q: "How are the swimmers moving?", options: ["Slowly", "Very quickly", "Badly"], a: "Very quickly" },
                { q: "What can the boys in the gymnastics area do?", options: ["Play the drums.", "Jump high.", "Cook pasta."], a: "Jump high." },
                { q: "Why is the small boy crying?", options: ["He can't swim.", "He can't ride his bike alone.", "He can't find his ball."], a: "He can't ride his bike alone." },
                { q: "How is the father teaching the boy?", options: ["Fastly", "Slowly", "Loudly"], a: "Slowly" }
            ]},
            { title: "The World of Musical Instruments", text: "Music is a universal language. People can use different instruments to express themselves. Rock stars usually play the electric guitar or the bass very loudly to excite the crowd. In a classical orchestra, musicians can play the violin or the flute beautifully and softly. Some instruments are harder than others. For example, you can learn to play the drums easily if you have a good rhythm, but the piano requires you to read music and move your fingers independently. My friend Mike can play all of them!", questions: [
                { q: "What instruments do rock stars usually play?", options: ["Flute and piano.", "Electric guitar and bass.", "Violin and drums."], a: "Electric guitar and bass." },
                { q: "How do musicians in a classical orchestra play?", options: ["Loudly and badly.", "Beautifully and softly.", "Fastly and noisily."], a: "Beautifully and softly." },
                { q: "Which instrument is easy to learn with good rhythm?", options: ["The piano", "The drums", "The violin"], a: "The drums" },
                { q: "What does the piano require?", options: ["Using a racket.", "Moving fingers independently.", "Running fast."], a: "Moving fingers independently." },
                { q: "How many instruments can Mike play?", options: ["Only the drums.", "All of the mentioned instruments.", "None of them."], a: "All of the mentioned instruments." }
            ]},
            { title: "Animals and Their Abilities", text: "Nature is full of amazing abilities. The cheetah is the fastest land animal; it can run at 100 kilometers per hour to catch its prey. In the ocean, dolphins can swim extremely fast and jump high out of the water to communicate. Birds like eagles can fly very high in the sky and see small animals on the ground. However, not all animals are fast. The turtle walks very slowly, but it can live for more than one hundred years! Humans can't fly or breathe underwater, but we can build machines to help us do those things.", questions: [
                { q: "What can a cheetah do?", options: ["It can fly high.", "It can run very fast.", "It can swim well."], a: "It can run very fast." },
                { q: "Why do dolphins jump out of the water?", options: ["To catch birds.", "To communicate.", "To sleep."], a: "To communicate." },
                { q: "What is a special ability of eagles?", options: ["They can swim.", "They can see small things from the sky.", "They can talk."], a: "They can see small things from the sky." },
                { q: "What is the turtle's main characteristic?", options: ["It runs fast.", "It walks slowly but lives long.", "It can jump high."], a: "It walks slowly but lives long." },
                { q: "What can humans do if they can't fly naturally?", options: ["Nothing.", "Build machines to help.", "Learn to grow wings."], a: "Build machines to help." }
            ]},
            { title: "Learning a New Skill", text: "Learning a new skill takes time and patience. Last year, I couldn't speak English at all, but now I can speak it quite well. I practice by reading books and writing emails to my friends in Canada. I also want to learn to play the piano. At first, I played very badly and my hands hurt, but now I can play simple songs easily. My teacher says that if I listen carefully to the music, I can improve my style. Everyone can learn something new if they work hard!", questions: [
                { q: "Could the speaker speak English last year?", options: ["Yes, perfectly.", "No, not at all.", "Only a little."], a: "No, not at all." },
                { q: "How does the speaker practice English now?", options: ["Reading and writing.", "Playing the piano.", "Running in the park."], a: "Reading and writing." },
                { q: "How did the speaker play the piano at the beginning?", options: ["Beautifully", "Very badly", "Fast"], a: "Very badly" },
                { q: "What can the speaker play now?", options: ["Complex rock songs.", "Simple songs easily.", "Nothing at all."], a: "Simple songs easily." },
                { q: "What is the teacher’s advice for the piano?", options: ["Run fast.", "Listen carefully to the music.", "Cook more pasta."], a: "Listen carefully to the music." }
            ]},
            { title: "Mr. D’s Superpower Message", text: "Hello, superstars! It's Mr. D. I want you to know that everyone has a superpower. Maybe you can't fly or move objects with your mind, but you have real talents. Some of you can draw beautiful cartoons, and others can solve difficult math problems easily. Some can play sports well, and others can speak two or three languages perfectly. Your superpower is what you can do best! Discover your talent, practice it carefully, and you can change the world. Are you ready for the adventure?", questions: [
                { q: "Who is Mr. D?", options: ["A student", "A motivational guide", "A professional athlete"], a: "A motivational guide" },
                { q: "What does Mr. D say about superpowers?", options: ["They are only in movies.", "Everyone has a real talent.", "You must fly to have one."], a: "Everyone has a real talent." },
                { q: "What examples of 'superpowers' does he give?", options: ["Eating and sleeping.", "Drawing, math, sports, and languages.", "Driving and cooking."], a: "Drawing, math, sports, and languages." },
                { q: "How should you practice your talent?", options: ["Badly", "Carefully", "Fastly"], a: "Carefully" },
                { q: "What is the goal of discovering your talent?", options: ["To be rich.", "To change the world.", "To go to sleep."], a: "To change the world." }
            ]},
            { title: "The Fast Runner", text: "John is a professional athlete. He can run 100 meters in ten seconds. He practices every day at the stadium. He runs very fast because he wants to win the gold medal. He also eats healthy food and listens carefully to his coach. John thinks that if you work hard, you can achieve anything.", questions: [
                { q: "What is John's job?", options: ["A teacher", "A pro athlete", "A doctor"], a: "A pro athlete" },
                { q: "Where does he practice?", options: ["In the park", "At the stadium", "At school"], a: "At the stadium" },
                { q: "How does he run?", options: ["Slowly", "Very fast", "Badly"], a: "Very fast" },
                { q: "Who does he listen to?", options: ["His friends", "His coach", "The music"], a: "His coach" },
                { q: "What is John's goal?", options: ["To win a medal", "To sleep more", "To cook pasta"], a: "To win a medal" }
            ]},
            { title: "Musical Talents", text: "In my house, everyone can play an instrument. My sister plays the violin beautifully, and my brother plays the drums loudly. I can play the keyboard easily, but I can't sing at all. We practice together every Saturday in the living room. Our neighbors say we play very well.", questions: [
                { q: "What can the sister do?", options: ["Play drums", "Play violin beautifully", "Sing well"], a: "Play violin beautifully" },
                { q: "How does the brother play?", options: ["Quietly", "Loudly", "Slowly"], a: "Loudly" },
                { q: "What instrument does the speaker play?", options: ["Guitar", "Keyboard", "Flute"], a: "Keyboard" },
                { q: "When do they practice?", options: ["Every Monday", "Every Saturday", "Every night"], a: "Every Saturday" },
                { q: "Can the speaker sing?", options: ["Yes, very well", "No, not at all", "Only a little"], a: "No, not at all" }
            ]}
        ],

        // --- TYPE 13: LISTEN AND ANSWER (10 texts) ---
        13: [
            { title: "The Young Musician", audio: "My name is Mike, and I love music more than anything. I have a new electric guitar, and I can play the electric guitar very well because I practice every night in my bedroom. My neighbors sometimes complain because I play the electric guitar very loudly! I also want to learn the drums, but I play the drums very badly right now. I need a teacher to help me with my rhythm.", questions: [
                { q: "What is Mike’s favorite thing?", options: ["Sports", "Music", "Cooking"], a: "Music" },
                { q: "How well does Mike play the electric guitar?", options: ["Badly", "Very well", "Not at all"], a: "Very well" },
                { q: "Why do the neighbors complain?", options: ["He plays too loudly.", "He plays too slowly.", "He can't play at all."], a: "He plays too loudly." },
                { q: "What instrument does Mike play badly?", options: ["The piano", "The violin", "The drums"], a: "The drums" },
                { q: "What does Mike need to improve his drumming?", options: ["A new guitar", "A teacher", "A computer"], a: "A teacher" }
            ]},
            { title: "Animal Superpowers", audio: "In nature, animals have incredible skills that help them survive. The cheetah is a famous runner because it can run fast—over 100 kilometers per hour! In the sky, the eagle can fly very high and see small objects on the ground easily. In the ocean, dolphins can swim quickly and jump out of the water beautifully. However, some animals are different. The turtle walks very slowly, but it can hide in its shell for protection.", questions: [
                { q: "How fast can a cheetah run?", options: ["10 km/h", "50 km/h", "Over 100 km/h"], a: "Over 100 km/h" },
                { q: "What can an eagle do easily?", options: ["Swim in the lake.", "See small objects from high up.", "Play the flute."], a: "See small objects from high up." },
                { q: "How do dolphins jump out of the water?", options: ["Badly", "Beautifully", "Carefully"], a: "Beautifully" },
                { q: "Which animal is described as moving slowly?", options: ["The cheetah", "The dolphin", "The turtle"], a: "The turtle" },
                { q: "What is the turtle's method of protection?", options: ["Running fast.", "Hiding in its shell.", "Flying away."], a: "Hiding in its shell." }
            ]},
            { title: "A Talented Family", audio: "My family is full of talented people. My father is a chef, and he can cook Italian food perfectly; his pasta is delicious! My sister is an athlete, so she can run fast and play basketball very well. She is the star of her team. My brother, Leo, can draw funny cartoons with a pencil, but he can't paint at all because he hates messy brushes. As for me, I can speak three languages: English, Portuguese, and a little French.", questions: [
                { q: "What can the father cook perfectly?", options: ["French bread", "Italian food", "Japanese sushi"], a: "Italian food" },
                { q: "What sport does the sister play well?", options: ["Tennis", "Soccer", "Basketball"], a: "Basketball" },
                { q: "What is Leo’s skill?", options: ["Painting walls.", "Drawing cartoons.", "Cooking pasta."], a: "Drawing cartoons." },
                { q: "Why can't Leo paint?", options: ["He doesn't have paint.", "He hates messy brushes.", "He is too young."], a: "He hates messy brushes." },
                { q: "How many languages can the speaker speak?", options: ["One", "Two", "Three"], a: "Three" }
            ]},
            { title: "The Language Challenge", audio: "Sarah is learning Japanese because she loves anime. Japanese is a difficult language, so she speaks it very slowly and carefully to avoid mistakes. She can read some characters, but she can't write them easily yet. Her teacher, Mrs. Sato, helps her every Tuesday. Mrs. Sato says Sarah is a good student because she listens attentively and practices her pronunciation well.", questions: [
                { q: "Why is Sarah learning Japanese?", options: ["Because she lives in Japan.", "Because she loves anime.", "For a math test."], a: "Because she loves anime." },
                { q: "How does Sarah speak Japanese?", options: ["Fast and loudly.", "Slowly and carefully.", "Perfectly."], a: "Slowly and carefully." },
                { q: "What can't Sarah do easily yet?", options: ["Read characters.", "Write characters.", "Listen to music."], a: "Write characters." },
                { q: "Who is Mrs. Sato?", options: ["Sarah’s mother.", "Sarah’s teacher.", "Sarah’s sister."], a: "Sarah’s teacher." },
                { q: "When does Sarah have lessons?", options: ["On Mondays.", "On Tuesdays.", "On Fridays."], a: "On Tuesdays." }
            ]},
            { title: "P.E. Class Skills", audio: "Today in P.E. class, the students are practicing volleyball. Albert can jump very high, so he can hit the ball over the net easily. Celine can move quickly on the court, and she can help her teammates with good passes. However, some students find it hard. Tom can't play volleyball well because he is afraid of the ball hitting his face. The teacher says, 'Don't worry, Tom! You can learn if you practice carefully!'", questions: [
                { q: "What sport are the students practicing?", options: ["Basketball", "Volleyball", "Soccer"], a: "Volleyball" },
                { q: "Why can Albert hit the ball easily?", options: ["Because he has a racket.", "Because he can jump high.", "Because he is fast."], a: "Because he can jump high." },
                { q: "How does Celine move on the court?", options: ["Slowly", "Quickly", "Badly"], a: "Quickly" },
                { q: "Why is Tom struggling with the sport?", options: ["He is tired.", "He is afraid of the ball.", "He can't find his shoes."], a: "He is afraid of the ball." },
                { q: "What is the teacher’s advice to Tom?", options: ["Stop playing.", "Practice carefully.", "Go home."], a: "Practice carefully." }
            ]},
            { title: "The Art Contest", audio: "The school is having an art contest this Friday. I want to win, so I am practicing my drawing every day. I can draw animals beautifully, but I can't draw people very well. My friend Albert is the opposite; he can draw faces easily, but he can't draw landscapes. We decided to work together! We can create a giant poster for the contest. I think we can win the first prize because we are a great team.", questions: [
                { q: "When is the art contest?", options: ["This Friday.", "Next month.", "Today."], a: "This Friday." },
                { q: "What can the speaker draw beautifully?", options: ["People", "Animals", "Computers"], a: "Animals" },
                { q: "What is Albert's specialty?", options: ["Drawing faces.", "Drawing trees.", "Playing the piano."], a: "Drawing faces." },
                { q: "What is the plan for the contest?", options: ["To work alone.", "To work together on a poster.", "To play music."], a: "To work together on a poster." },
                { q: "Why does the speaker think they can win?", options: ["They are fast.", "They are a great team.", "The teacher is nice."], a: "They are a great team." }
            ]},
            { title: "Summer at the Lake", audio: "Every summer, my family goes to the lake. My brother and I love the water. He can swim very fast, but I prefer to move slowly and look at the fish. We can also ride a small boat on the lake. I can't drive the boat, but my father can drive it very safely. At night, we sit near the fire. My father can play the guitar and we all sing songs together under the stars.", questions: [
                { q: "Where does the family go in the summer?", options: ["To the beach", "To the lake", "To the mountains"], a: "To the lake" },
                { q: "How does the speaker swim compared to the brother?", options: ["Faster", "More slowly", "Better"], a: "More slowly" },
                { q: "What can't the speaker do on the lake?", options: ["Swim", "Drive the boat", "Look at fish"], a: "Drive the boat" },
                { q: "How does the father drive the boat?", options: ["Fast and dangerously.", "Very safely.", "Badly."], a: "Very safely." },
                { q: "What happens at night?", options: ["They go to sleep.", "They play soccer.", "They sing while the father plays guitar."], a: "They sing while the father plays guitar." }
            ]},
            { title: "Mr. D’s Talent Advice", audio: "Hello, superstars! It's Mr. D. I see many of you are worried about your talents. Remember, you don't need to do everything perfectly. Maybe you can't play the violin, but you can sing with passion. Maybe you can't run fast, but you can solve complex problems carefully. Every skill is important. My advice is simple: use your 'CAN' power every day. Practice what you love, and you will see that you can do amazing things!", questions: [
                { q: "Who is giving the advice?", options: ["Albert", "Mr. D", "Sarah"], a: "Mr. D" },
                { q: "Does Mr. D think you need to be perfect at everything?", options: ["Yes, absolutely.", "No, he doesn't.", "Only at sports."], a: "No, he doesn't." },
                { q: "What can someone do if they can't run fast?", options: ["Nothing.", "Solve problems carefully.", "Play the drums loudly."], a: "Solve problems carefully." },
                { q: "What is the 'power' Mr. D mentions?", options: ["Fire power", "CAN power", "Money power"], a: "CAN power" },
                { q: "What is the result of practicing what you love?", options: ["You will get tired.", "You will do amazing things.", "You will win a guitar."], a: "You will do amazing things." }
            ]},
            { title: "The Great Chef", audio: "My neighbor Carlos is a chef. He works in a famous restaurant in the city. He can cook many things, but he cooks pasta perfectly. He works very carefully to make delicious food. Everyone in our neighborhood loves his cooking. He says that if you practice, you can cook well too!", questions: [
                { q: "Who is Carlos?", options: ["A teacher", "A chef", "A bus driver"], a: "A chef" },
                { q: "Where does he work?", options: ["In a hospital", "In a restaurant", "On a farm"], a: "In a restaurant" },
                { q: "What does he cook perfectly?", options: ["Pizza", "Pasta", "Cake"], a: "Pasta" },
                { q: "How does he work?", options: ["Badly", "Carefully", "Quickly"], a: "Carefully" },
                { q: "What is his advice?", options: ["To run fast", "To practice cooking", "To play guitar"], a: "To practice cooking" }
            ]},
            { title: "At the Art Gallery", audio: "Today we are at the art gallery. Look at this painting! The artist can use colors beautifully. My friend Mia can draw faces easily, but she can't paint like this yet. She wants to learn to paint professionally. Her teacher says she needs to practice every day and listen carefully to instructions.", questions: [
                { q: "Where are they?", options: ["At school", "At the art gallery", "In the park"], a: "At the art gallery" },
                { q: "How does the artist use colors?", options: ["Badly", "Beautifully", "Slowly"], a: "Beautifully" },
                { q: "What can Mia do easily?", options: ["Paint portraits", "Draw faces", "Sing songs"], a: "Draw faces" },
                { q: "What does Mia want to learn?", options: ["To draw cartoons", "To paint professionally", "To play piano"], a: "To paint professionally" },
                { q: "What is the teacher's advice?", options: ["Practice every day", "Run fast", "Go home"], a: "Practice every day" }
            ]}
        ],

        // --- TYPE 14: COMPLETE TEXT ---
        14: [
            { title: "The School Band", text: "We want to start a rock band at REACH school. Albert [1] (can/cans/am) play the electric guitar very [2] (good/well/badly). My brother is the drummer; he can play the [3] (drums/drum/drumming) loudly. I can play the keyboard [4] (easy/easily/slow), but I [5] (can't/can/am) sing at all because my voice is terrible!", answers: ["can", "well", "drums", "easily", "can't"] },
            { title: "Global Communication", text: "In our modern world, people [1] (can/are/do) speak many different languages. My friend Sarah is from Japan, so she can speak [2] (Japan/Japanese/Japans) perfectly. She is also learning English; she speaks it [3] (slow/slowly/fastly) because she wants to be correct. I [4] (can/can't/not) speak Japanese at all, but I can help her with [5] (the/a/(nothing)) Portuguese.", answers: ["can", "Japanese", "slowly", "can't", "(nothing)"] },
            { title: "A Busy Saturday", text: "On Saturdays, I go to the sports club with my cousins. We [1] (can/do/are) play many sports there. Leo can play [2] (the tennis/tennis/a tennis) very well because he has a professional racket. My sister prefers the pool; she can [3] (swim/swims/swimming) [4] (fast/good/badly). I can't play sports well, but I [5] (can/can't/am) ride my bike carefully in the park.", answers: ["can", "tennis", "swim", "fast", "can"] },
            { title: "Technology Skills", text: "My laptop has a big problem, and I [1] (can't/can/am) fix it myself. I am very bad [2] (at/with/for) technology. Luckily, my friend Mike [3] (can/cans/is) solve computer problems [4] (easily/easy/slow). He can use different tools to repair the screen. He is very [5] (help/helpful/helping)!", answers: ["can't", "at", "can", "easily", "helpful"] },
            { title: "Art Class", text: "Today in art class, the teacher says we [1] (can/are/do) draw or paint. I choose to [2] (draw/drawing/draws) a picture of my dog. I can draw [3] (beautiful/beautifully/badly) with my new pencils. My friend can't draw, but he can [4] (paint/paints/painting) the wall with bright colors. We [5] (can/can't/are) create a great masterpiece together.", answers: ["can", "draw", "beautifully", "paint", "can"] },
            { title: "Flying and Swimming", text: "Nature is amazing! Birds like eagles [1] (can/do/are) fly very high in the sky. They [2] (can/can't/not) swim, but they can catch fish from the water. Dolphins are the opposite; they can't fly [3] (at all/well/badly), but they can [4] (move/moves/moving) through the ocean very [5] (quickly/quick/slow).", answers: ["can", "can't", "at all", "move", "quickly"] },
            { title: "Kitchen Talents", text: "My mother is a great cook. She [1] (can/am/is) make delicious pasta and pizza. I [2] (can't/can/do) cook well because I am still learning. I can [3] (use/using/uses) the stove only when my mother is near. I try to follow the recipes [4] (carefully/careful/fastly). My father can't cook [5] (at all/well/badly); he only knows how to eat!", answers: ["can", "can't", "use", "carefully", "at all"] },
            { title: "Music Lessons", text: "I want to play [1] (the violin/a violin/violin) in the school orchestra. My teacher says I [2] (can/cans/am) learn if I practice every day. Now, I play the notes very [3] (slowly/slow/fastly), but I want to play [4] (fast/goodly/badly) in the future. Music [5] (can/is/does) make people very happy.", answers: ["the violin", "can", "slowly", "fast", "can"] },
            { title: "The Fast Cheetah", text: "The cheetah is a very special animal. It [1] (can/is/does) run very [2] (fast/fastly/slow). It catches its food [3] (easily/easy/badly) on the savanna. However, it [4] (can't/can/is) climb trees very well. It is [5] (beautifully/beautiful/bad) to watch it run.", answers: ["can", "fast", "easily", "can't", "beautiful"] },
            { title: "Solving Puzzles", text: "My friend Leo is very smart. He [1] (can/cans/is) solve difficult puzzles [2] (easily/easy/slow). He [3] (can/can't/am) play the violin too. He practices [4] (carefully/careful/bad) every night. He is a very [5] (talented/talent/badly) boy.", answers: ["can", "easily", "can", "carefully", "talented"] }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT ---
        15: [
            { title: "The Band Plan", audio: "Albert can play the guitar very well. He wants to start a band with Celine. Celine can play the bass easily. They can practice in the garage.", text: "Albert can play the [1] very [2]. He wants to start a [3] with Celine. Celine can play the [4] easily. They can [5] in the garage.", answers: ["guitar", "well", "band", "bass", "practice"] },
            { title: "Language Student", audio: "Sarah can speak Japanese and English. She is a good student and she studies carefully. She can read many books in different languages.", text: "Sarah can speak [1] and [2]. She is a [3] student and she studies [4]. She can [5] many books in different languages.", answers: ["Japanese", "English", "good", "carefully", "read"] },
            { title: "Cheetah Facts", audio: "The cheetah is an animal that can run very fast. It can catch its food easily. However, it can't fly like a bird.", text: "The [1] is an animal that can [2] very [3]. It can catch its food [4]. However, it [5] fly like a bird.", answers: ["cheetah", "run", "fast", "easily", "can't"] },
            { title: "Musical Siblings", audio: "My brother can play the drums loudly. He is a rock star! I can play the piano beautifully. We can make music together.", text: "My [1] can play the [2] loudly. He is a [3] star! I can play the [4] beautifully. We can make [5] together.", answers: ["brother", "drums", "rock", "piano", "music"] },
            { title: "Homework Help", audio: "Can you help me with the homework? I can't solve this math problem. It is very difficult for me.", text: "Can you [1] me with the [2]? I [3] solve this [4] problem. It is very [5] for me.", answers: ["help", "homework", "can't", "math", "difficult"] },
            { title: "Summer Fun", audio: "In the summer, we go swimming in the lake. I can swim fast, but my sister swims slowly. We can see many fish in the water.", text: "In the [1], we go [2] in the lake. I can swim [3], but my sister swims [4]. We [5] see many fish in the water.", answers: ["summer", "swimming", "fast", "slowly", "can"] },
            { title: "Drawing Cartoons", audio: "Leo can draw funny cartoons with a pen. He can do it easily. But he can't paint because he doesn't like messy colors.", text: "Leo can [1] funny [2] with a pen. He can do it [3]. But he [4] paint because he doesn't like [5] colors.", answers: ["draw", "cartoons", "easily", "can't", "messy"] },
            { title: "Our Teacher", audio: "Mrs. Canales is our teacher. She can speak four languages fluently. She can teach us many things. She is a nice person.", text: "Mrs. [1] is our teacher. She can [2] four [3] fluently. She can [4] us many things. She is a [5] person.", answers: ["Canales", "speak", "languages", "teach", "nice"] },
            { title: "Swimming Practice", audio: "I can swim very well in the pool. My brother can't swim at all. He is afraid of water. I can help him learn to swim slowly.", text: "I can [1] very [2] in the pool. My brother [3] swim at all. He is [4] of water. I can help him learn to swim [5].", answers: ["swim", "well", "can't", "afraid", "slowly"] },
            { title: "Piano Lessons", audio: "I play the piano every morning. I can play simple songs perfectly. My teacher says I practice carefully. It makes me very happy.", text: "I [1] the piano every morning. I can play [2] songs [3]. My teacher says I practice [4]. It makes me very [5].", answers: ["play", "simple", "perfectly", "carefully", "happy"] }
        ]
    }
});