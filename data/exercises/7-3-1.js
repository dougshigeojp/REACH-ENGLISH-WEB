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
 * GRADE 7, BIMESTER 3, CHAPTER 5
 * BATCH 1: TYPES 1 TO 5 (40 items each)
 */

window.initExercise({
    id: "7-3-5",
    grade: "7th Grade",
    bimester: "3",
    chapter: "5",
    title: "Travel, Events, and Sequencing (Simple Past)",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES (40 ITEMS) ---
        1: [
            { words: ["travelled", "to", "France", "I", "year", "last"], correct: "I travelled to France last year" },
            { words: ["visited", "We", "a", "yesterday", "museum"], correct: "We visited a museum yesterday" },
            { words: ["arrived", "He", "late", "night", "last"], correct: "He arrived late last night" },
            { words: ["stayed", "She", "in", "hotel", "a"], correct: "She stayed in a hotel" },
            { words: ["danced", "all", "They", "night"], correct: "They danced all night" },
            { words: ["enjoyed", "party", "We", "the"], correct: "We enjoyed the party" },
            { words: ["learned", "English", "I"], correct: "I learned English" },
            { words: ["watched", "He", "movie", "a"], correct: "He watched a movie" },
            { words: ["tried", "sushi", "She"], correct: "She tried sushi" },
            { words: ["listened", "to", "band", "We", "the"], correct: "We listened to the band" },
            { words: ["liked", "food", "I", "the"], correct: "I liked the food" },
            { words: ["loved", "trip", "They", "the"], correct: "They loved the trip" },
            { words: ["played", "guitar", "He"], correct: "He played guitar" },
            { words: ["started", "The", "show", "at", "8"], correct: "The show started at 8" },
            { words: ["stopped", "bus", "The", "here"], correct: "The bus stopped here" },
            { words: ["fun", "trip", "The", "was"], correct: "The trip was fun" },
            { words: ["festival", "The", "colorful", "was"], correct: "The festival was colorful" },
            { words: ["saw", "a", "parade", "big", "I"], correct: "I saw a big parade" },
            { words: ["loud", "music", "The", "was"], correct: "The music was loud" },
            { words: ["scary", "costume", "Her", "was"], correct: "Her costume was scary" },
            { words: ["culture", "Japanese", "interesting", "is"], correct: "Japanese culture is interesting" },
            { words: ["First,", "ate", "we", "breakfast"], correct: "First, we ate breakfast" },
            { words: ["Then,", "went", "we", "out"], correct: "Then, we went out" },
            { words: ["rained", "It", "but", "fun", "had", "we"], correct: "It rained, but we had fun" },
            { words: ["stayed", "home", "I", "because", "sick", "was", "I"], correct: "I stayed home because I was sick" },
            { words: ["saw", "him", "I", "yesterday"], correct: "I saw him yesterday" },
            { words: ["went", "there", "We", "year", "last"], correct: "We went there last year" },
            { words: ["arrived", "when", "We", "parade", "started", "the"], correct: "We arrived when the parade started" },
            { words: ["stopped", "rain", "The", "entered", "tent", "when", "I", "the"], correct: "The rain stopped when I entered the tent" },
            { words: ["packed", "bags", "We", "our", "finally"], correct: "Finally, we packed our bags" },
            { words: ["called", "a", "taxi", "Then,", "we"], correct: "Then, we called a taxi" },
            { words: ["learned", "Japanese", "He", "because", "loves", "he", "anime"], correct: "He learned Japanese because he loves anime" },
            { words: ["travelled", "by", "They", "bus"], correct: "They travelled by bus" },
            { words: ["visited", "castle", "We", "a"], correct: "We visited a castle" },
            { words: ["returned", "home", "yesterday", "Finally,", "we"], correct: "Finally, we returned home yesterday" },
            { words: ["studied", "I", "all", "night"], correct: "I studied all night" },
            { words: ["planned", "my", "schedule", "I"], correct: "I planned my schedule" },
            { words: ["brother", "My", "played", "games", "video"], correct: "My brother played video games" },
            { words: ["stopped", "early", "studying", "He"], correct: "He stopped studying early" },
            { words: ["happened", "It", "a", "long", "time", "ago"], correct: "It happened a long time ago" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES (40 ITEMS) ---
        2: [
            { lines: ["Wow, Celine! Where did you go?", "I travelled to Japan last month. I visited a festival.", "That looks amazing! What happened?", "First, we watched a parade. The costumes were beautiful."], order: [0, 1, 2, 3] },
            { lines: ["And then?", "Then, we danced when the music started.", "Did you try the food?", "Yes! I tried sushi. I liked it because it was delicious."], order: [0, 1, 2, 3] },
            { lines: ["Did you study for the test, Celine?", "Yes, I studied all night.", "I planned my schedule and tried to memorize everything.", "Good job. My brother played video games and stopped studying early."], order: [0, 1, 2, 3] },
            { lines: ["When did you arrive at the festival?", "We arrived when the parade started.", "It was perfect timing!", "Yes, we loved it."], order: [0, 1, 2, 3] },
            { lines: ["Oh no, did it rain?", "Yes, but the rain stopped when I entered the tent.", "That was lucky.", "After that, we listened to the band."], order: [0, 1, 2, 3] },
            { lines: ["Tell me about your trip!", "First, we travelled by train. Then, we visited a castle.", "Did you have fun?", "It rained, but we enjoyed it."], order: [0, 1, 2, 3] },
            { lines: ["Why did you stay in a hotel?", "Because it was late.", "Did you come back today?", "Finally, we returned home yesterday."], order: [0, 1, 2, 3] },
            { lines: ["First, we packed our bags.", "What did you do next?", "Then, we called a taxi.", "Finally, we arrived at the airport."], order: [0, 1, 2, 3] },
            { lines: ["I visited a museum two days ago.", "Did you like it?", "Yes, I learned a lot about Japanese culture.", "That sounds very interesting."], order: [0, 1, 2, 3] },
            { lines: ["What happened last night?", "The music started at 8 PM.", "Did you dance?", "Yes, we danced all night."], order: [0, 1, 2, 3] },
            { lines: ["We tried the local food yesterday.", "Did you like it?", "Yes, it was very good.", "I want to try it too!"], order: [0, 1, 2, 3] },
            { lines: ["Where did he travel last year?", "He travelled to France.", "Did he visit the Eiffel Tower?", "Yes, he loved the city."], order: [0, 1, 2, 3] },
            { lines: ["Why did you stop?", "I stopped because I was tired.", "Did you walk a lot?", "Yes, we walked around the city all day."], order: [0, 1, 2, 3] },
            { lines: ["What did you watch last night?", "We watched a scary movie.", "Did you like it?", "No, I didn't enjoy it."], order: [0, 1, 2, 3] },
            { lines: ["The festival was very colorful.", "Did you see the parade?", "Yes, the costumes were beautiful.", "I wanted to go!"], order: [0, 1, 2, 3] },
            { lines: ["I learned English a long time ago.", "How did you learn it?", "I studied with a great teacher.", "Your English is very good now."], order: [0, 1, 2, 3] },
            { lines: ["Why did she stay home?", "She stayed home because she was sick.", "Oh, I hope she feels better.", "She rested and watched TV."], order: [0, 1, 2, 3] },
            { lines: ["We arrived late.", "Why?", "Because the car stopped on the road.", "That is a big problem."], order: [0, 1, 2, 3] },
            { lines: ["First, he played the guitar.", "Then what happened?", "Then, she sang a beautiful song.", "They are very talented."], order: [0, 1, 2, 3] },
            { lines: ["I listened to the band yesterday.", "Did you like the music?", "Yes, I enjoyed the rhythm.", "I want to listen to them too."], order: [0, 1, 2, 3] },
            { lines: ["When did the movie start?", "It started when we arrived.", "So you didn't miss anything.", "Exactly, it was perfect."], order: [0, 1, 2, 3] },
            { lines: ["Next, we visited a nice place.", "Was it a park?", "No, it was a traditional Japanese garden.", "I love learning about their customs."], order: [0, 1, 2, 3] },
            { lines: ["Did he play video games yesterday?", "Yes, he played for hours.", "Did he study?", "No, he stopped studying early."], order: [0, 1, 2, 3] },
            { lines: ["We travelled to many countries.", "Which country was your favorite?", "I loved Japan the most.", "The culture there is amazing."], order: [0, 1, 2, 3] },
            { lines: ["First, we bought the tickets.", "After that, we entered the museum.", "What did you see?", "We saw old paintings and costumes."], order: [0, 1, 2, 3] },
            { lines: ["I was tired, so I slept.", "Did you enjoy the trip?", "Yes, but we walked a lot.", "You needed the rest."], order: [0, 1, 2, 3] },
            { lines: ["He learned Japanese last year.", "Why did he study it?", "Because he loves anime.", "That is a fun way to learn."], order: [0, 1, 2, 3] },
            { lines: ["Did they try the sushi?", "Yes, they tried it at the festival.", "Did they like it?", "They loved the food."], order: [0, 1, 2, 3] },
            { lines: ["When did the rain stop?", "It stopped when we entered the hotel.", "That is good.", "Yes, we stayed inside and relaxed."], order: [0, 1, 2, 3] },
            { lines: ["What did you do two days ago?", "I stayed at home and studied.", "Did you finish?", "Finally, I closed the book at midnight."], order: [0, 1, 2, 3] },
            { lines: ["We visited the city last month.", "Did you see the parade?", "Yes, it was a great tradition.", "I want to visit that place next year."], order: [0, 1, 2, 3] },
            { lines: ["Did you talk to him?", "Yes, I talked to him yesterday.", "What did he say?", "He said he enjoyed the festival."], order: [0, 1, 2, 3] },
            { lines: ["I wanted to buy the souvenir.", "Why didn't you?", "But it was too expensive.", "That is a shame."], order: [0, 1, 2, 3] },
            { lines: ["First, we listened to the music.", "Then, we danced in the park.", "Did you have fun?", "Yes, we really liked it."], order: [0, 1, 2, 3] },
            { lines: ["When did you pack your bags?", "I packed my bags last night.", "Are you ready for the journey?", "Yes, I am very excited."], order: [0, 1, 2, 3] },
            { lines: ["He arrived when the party started.", "Did he bring the food?", "Yes, he brought pizza.", "We ate and played games."], order: [0, 1, 2, 3] },
            { lines: ["I didn't enjoy the movie.", "Why not?", "Because it was very boring.", "Next time, we will watch a comedy."], order: [0, 1, 2, 3] },
            { lines: ["We walked around the city.", "Did you visit the museum?", "Yes, and we also visited the castle.", "You had a busy day!"], order: [0, 1, 2, 3] },
            { lines: ["She stayed in a hotel.", "Was it a nice place?", "Yes, she liked the room.", "That is good to hear."], order: [0, 1, 2, 3] },
            { lines: ["Did you play the piano yesterday?", "No, I played the guitar.", "Did you learn a new song?", "Yes, I learned a pop song."], order: [0, 1, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS (40 ITEMS) ---
        3: [
            { q: "Did you visit the museum yesterday?", options: ["Yes, I did.", "Yes, I do.", "Yes, I visited.", "Yes, did I."], a: "Yes, I did." },
            { q: "Did she play video games last night?", options: ["No, she didn't.", "No, she doesn't.", "No, she didn't played.", "No, she not played."], a: "No, she didn't." },
            { q: "Did they travel to Japan last year?", options: ["Yes, they did.", "Yes, they travelled.", "Yes, they travel.", "Yes, they do."], a: "Yes, they did." },
            { q: "Did he study for the test?", options: ["Yes, he did.", "Yes, he studied.", "Yes, he do.", "Yes, he is."], a: "Yes, he did." },
            { q: "Did we arrive late?", options: ["No, we didn't.", "No, we don't.", "No, we aren't.", "No, didn't we."], a: "No, we didn't." },
            { q: "Did it rain during the festival?", options: ["Yes, it did.", "Yes, it rained.", "Yes, it does.", "Yes, it was."], a: "Yes, it did." },
            { q: "Did you try the sushi?", options: ["Yes, I did.", "Yes, I tried.", "Yes, I try.", "Yes, I do."], a: "Yes, I did." },
            { q: "Did she like the costumes?", options: ["Yes, she did.", "Yes, she liked.", "Yes, she does.", "Yes, she like."], a: "Yes, she did." },
            { q: "Did they stop the car?", options: ["No, they didn't.", "No, they don't.", "No, they didn't stopped.", "No, they not stop."], a: "No, they didn't." },
            { q: "Did he dance all night?", options: ["Yes, he did.", "Yes, he danced.", "Yes, he do.", "Yes, he dance."], a: "Yes, he did." },
            { q: "Did you enjoy the trip?", options: ["Yes, I did.", "Yes, I enjoyed.", "Yes, I do.", "Yes, I am."], a: "Yes, I did." },
            { q: "Did we watch a movie two days ago?", options: ["Yes, we did.", "Yes, we watched.", "Yes, we do.", "Yes, we were."], a: "Yes, we did." },
            { q: "Did the music start at 8 PM?", options: ["Yes, it did.", "Yes, it started.", "Yes, it does.", "Yes, it is."], a: "Yes, it did." },
            { q: "Did she learn English a long time ago?", options: ["Yes, she did.", "Yes, she learned.", "Yes, she does.", "Yes, she learn."], a: "Yes, she did." },
            { q: "Did they pack their bags?", options: ["Yes, they did.", "Yes, they packed.", "Yes, they pack.", "Yes, they do."], a: "Yes, they did." },
            { q: "Did you walk around the city?", options: ["No, I didn't.", "No, I don't.", "No, I didn't walked.", "No, I didn't walk."], a: "No, I didn't." },
            { q: "Did he stay in a hotel?", options: ["Yes, he did.", "Yes, he stayed.", "Yes, he do.", "Yes, he stay."], a: "Yes, he did." },
            { q: "Did she plan her schedule?", options: ["Yes, she did.", "Yes, she planned.", "Yes, she does.", "Yes, she plan."], a: "Yes, she did." },
            { q: "Did it happen last month?", options: ["Yes, it did.", "Yes, it happened.", "Yes, it does.", "Yes, it happen."], a: "Yes, it did." },
            { q: "Did you listen to the band?", options: ["Yes, I did.", "Yes, I listened.", "Yes, I do.", "Yes, I listen."], a: "Yes, I did." },
            { q: "What do you do to learn a new language?", options: ["You study.", "You travel.", "You dance.", "You stop."], a: "You study." },
            { q: "If you go to a different country, you...", options: ["Travel.", "Stay.", "Watch.", "Play."], a: "Travel." },
            { q: "People wear these at a festival or parade...", options: ["Costumes.", "Books.", "Hotels.", "Castles."], a: "Costumes." },
            { q: "If a trip was very good, you say you...", options: ["Enjoyed it.", "Stopped it.", "Tried it.", "Arrived it."], a: "Enjoyed it." },
            { q: "What word means \"the day before today\"?", options: ["Yesterday.", "Tomorrow.", "Last week.", "Next month."], a: "Yesterday." },
            { q: "Which word is used to show a reason?", options: ["Because.", "But.", "First.", "Finally."], a: "Because." },
            { q: "If you want to connect two opposite ideas, you use...", options: ["But.", "Because.", "So.", "First."], a: "But." },
            { q: "Which word is a sequencer used at the end of a story?", options: ["Finally.", "First.", "Then.", "Next."], a: "Finally." },
            { q: "What do you use to show the result of an action?", options: ["So.", "Because.", "First.", "But."], a: "So." },
            { q: "If an event happened in the past, which time expression do you use?", options: ["Last year.", "Next year.", "Tomorrow.", "Later."], a: "Last year." },
            { q: "Where do people usually sleep when they travel to a different city?", options: ["A hotel.", "A parade.", "A festival.", "A museum."], a: "A hotel." },
            { q: "What do you call a big event with music and celebrations?", options: ["A festival.", "A journey.", "A classroom.", "A schedule."], a: "A festival." },
            { q: "What do you call people walking together in the street to celebrate?", options: ["A parade.", "A custom.", "A museum.", "A hotel."], a: "A parade." },
            { q: "To go to a place and see things is to...", options: ["Visit.", "Learn.", "Stop.", "Try."], a: "Visit." },
            { q: "The past tense of \"stop\" is...", options: ["Stopped.", "Stoped.", "Stops.", "Stopping."], a: "Stopped." },
            { q: "If you want to taste a new food, you...", options: ["Try it.", "Study it.", "Listen to it.", "Play it."], a: "Try it." },
            { q: "A long trip to another place is called a...", options: ["Journey.", "Parade.", "Costume.", "Custom."], a: "Journey." },
            { q: "The ideas, customs, and social behavior of a society is its...", options: ["Culture.", "Music.", "Food.", "Country."], a: "Culture." },
            { q: "The past tense of \"study\" is...", options: ["Studied.", "Studyed.", "Studies.", "Studying."], a: "Studied." },
            { q: "If you are tired, you...", options: ["Sleep.", "Dance.", "Travel.", "Walk."], a: "Sleep." }
        ],

        // --- TYPE 4: FIND MEANING (40 ITEMS) ---
        4: [
            { sent: "I **travelled** to France.", word: "travelled", options: ["Visitei", "Viajar / Viajou", "Cheguei", "Fiquei"], a: "Viajar / Viajou", def: "To go from one place to another, typically over a distance." },
            { sent: "We **visited** a museum.", word: "visited", options: ["Visitar / Visitou", "Viajou", "Dançou", "Estudou"], a: "Visitar / Visitou", def: "To go to see and spend time in a place." },
            { sent: "He **arrived** late.", word: "arrived", options: ["Chegou / Chegar", "Partiu", "Ficou", "Viajou"], a: "Chegou / Chegar", def: "To reach a place at the end of a journey." },
            { sent: "She **stayed** in a hotel.", word: "stayed", options: ["Chegou", "Ficou / Hospedar-se", "Dançou", "Visitou"], a: "Ficou / Hospedar-se", def: "To live somewhere temporarily as a guest." },
            { sent: "They **danced** all night.", word: "danced", options: ["Dançar / Dançou", "Cantou", "Brincou", "Estudou"], a: "Dançar / Dançou", def: "To move rhythmically to music." },
            { sent: "We **enjoyed** the party.", word: "enjoyed", options: ["Odiou", "Aproveitar / Gostar", "Viajou", "Parou"], a: "Aproveitar / Gostar", def: "To take delight or pleasure in an activity." },
            { sent: "I **learned** English.", word: "learned", options: ["Ensinei", "Aprender / Aprendeu", "Estudei", "Escutei"], a: "Aprender / Aprendeu", def: "To gain or acquire knowledge or skill." },
            { sent: "He **watched** a movie.", word: "watched", options: ["Assistir / Assistiu", "Ouviu", "Viu", "Leu"], a: "Assistir / Assistiu", def: "To look at or observe attentively." },
            { sent: "She **tried** sushi.", word: "tried", options: ["Comeu", "Experimentar / Tentar", "Fez", "Parou"], a: "Experimentar / Tentar", def: "To use, test, or do something new." },
            { sent: "We **listened** to the band.", word: "listened", options: ["Falar", "Ouvir / Ouviu", "Assistir", "Cantar"], a: "Ouvir / Ouviu", def: "To give attention to sound." },
            { sent: "I **liked** the food.", word: "liked", options: ["Gostar / Gostou", "Amar", "Odiar", "Comer"], a: "Gostar / Gostou", def: "To find agreeable or enjoyable." },
            { sent: "They **loved** the trip.", word: "loved", options: ["Gostar", "Amar / Amou", "Odiar", "Chorar"], a: "Amar / Amou", def: "To feel deep affection or enjoy very much." },
            { sent: "He **played** guitar.", word: "played", options: ["Tocar / Jogar / Brincar", "Trabalhar", "Estudar", "Ouvir"], a: "Tocar / Jogar / Brincar", def: "To engage in activity for enjoyment or perform on an instrument." },
            { sent: "The show **started** at 8.", word: "started", options: ["Parou", "Começar / Começou", "Terminou", "Continuou"], a: "Começar / Começou", def: "To begin or cause to begin." },
            { sent: "The bus **stopped** here.", word: "stopped", options: ["Começou", "Parar / Parou", "Andou", "Correu"], a: "Parar / Parou", def: "To come to an end; cease to happen." },
            { sent: "I **studied** history.", word: "studied", options: ["Ler", "Estudar / Estudou", "Escrever", "Aprender"], a: "Estudar / Estudou", def: "To devote time to acquiring knowledge." },
            { sent: "We **walked** around the city.", word: "walked", options: ["Correr", "Caminhar / Andar", "Voar", "Pular"], a: "Caminhar / Andar", def: "To move at a regular pace by lifting and setting down each foot." },
            { sent: "She **wanted** to go home.", word: "wanted", options: ["Precisar", "Querer / Quis", "Gostar", "Amar"], a: "Querer / Quis", def: "To have a desire to possess or do something." },
            { sent: "It was a long **trip**.", word: "trip", options: ["Viagem / Jornada", "Festa", "Desfile", "País"], a: "Viagem / Jornada", def: "An act of going to a place and returning." },
            { sent: "The **festival** was crowded.", word: "festival", options: ["Desfile", "Festival / Festa", "Concerto", "Museu"], a: "Festival / Festa", def: "A day or period of celebration." },
            { sent: "I saw a big **parade**.", word: "parade", options: ["Concerto", "Desfile / Parada", "Festa", "Viagem"], a: "Desfile / Parada", def: "A public procession celebrating a special day or event." },
            { sent: "I love traditional **music**.", word: "music", options: ["Música", "Banda", "Instrumento", "Canção"], a: "Música", def: "Vocal or instrumental sounds combined to produce beauty of form." },
            { sent: "Your **costume** is beautiful.", word: "costume", options: ["Fantasia / Traje", "Roupa", "Uniforme", "Chapéu"], a: "Fantasia / Traje", def: "A set of clothes in a style typical of a particular country or historical period." },
            { sent: "The local **food** is spicy.", word: "food", options: ["Bebida", "Comida", "Sobremesa", "Água"], a: "Comida", def: "Any nutritious substance that people or animals eat." },
            { sent: "We learned about Japanese **culture**.", word: "culture", options: ["Tradição", "Cultura", "Costume", "País"], a: "Cultura", def: "The ideas, customs, and social behavior of a particular people." },
            { sent: "It is a local **custom** to bow.", word: "custom", options: ["Cultura", "Costume / Tradição", "Regra", "Hábito"], a: "Costume / Tradição", def: "A traditional and widely accepted way of behaving." },
            { sent: "Which **country** did you visit?", word: "country", options: ["Cidade", "País", "Estado", "Continente"], a: "País", def: "A nation with its own government." },
            { sent: "Tokyo is a big **city**.", word: "city", options: ["País", "Cidade", "Bairro", "Lugar"], a: "Cidade", def: "A large town." },
            { sent: "This is a nice **place**.", word: "place", options: ["Cidade", "Lugar", "País", "Festival"], a: "Lugar", def: "A particular position or point in space." },
            { sent: "**First**, we bought the tickets.", word: "First", options: ["Depois", "Primeiro / Primeiramente", "Finalmente", "Em seguida"], a: "Primeiro / Primeiramente", def: "Before anything else." },
            { sent: "**Then**, we entered the museum.", word: "Then", options: ["Primeiro", "Então / Depois", "Finalmente", "Por que"], a: "Então / Depois", def: "After that; next." },
            { sent: "**Next**, we saw the paintings.", word: "Next", options: ["Finalmente", "Próximo / Em seguida", "Primeiro", "Mas"], a: "Próximo / Em seguida", def: "Coming immediately after the time of writing or speaking." },
            { sent: "**Finally**, we went home.", word: "Finally", options: ["Primeiro", "Finalmente / Por último", "Depois", "Em seguida"], a: "Finalmente / Por último", def: "Used to introduce a final point or reason." },
            { sent: "I saw him **yesterday**.", word: "yesterday", options: ["Hoje", "Ontem", "Amanhã", "Semana passada"], a: "Ontem", def: "On the day before today." },
            { sent: "We watched a movie **last night**.", word: "last night", options: ["Ontem à noite", "Semana passada", "Mês passado", "Ano passado"], a: "Ontem à noite", def: "The night before the present day." },
            { sent: "She arrived **last week**.", word: "last week", options: ["Mês passado", "Semana passada", "Ano passado", "Dois dias atrás"], a: "Semana passada", def: "The week before the current one." },
            { sent: "He called **two days ago**.", word: "two days ago", options: ["Há muito tempo", "Dois dias atrás", "Ontem", "Semana passada"], a: "Dois dias atrás", def: "48 hours before the present time." },
            { sent: "It happened **a long time ago**.", word: "a long time ago", options: ["Ontem", "Há muito tempo", "Dois dias atrás", "Ano passado"], a: "Há muito tempo", def: "In the distant past." },
            { sent: "I stayed home **because** I was sick.", word: "because", options: ["Mas", "Porque", "Então", "E"], a: "Porque", def: "For the reason that; since." },
            { sent: "It was cold, **but** sunny.", word: "but", options: ["Porque", "Mas / Porém", "E", "Então"], a: "Mas / Porém", def: "Used to introduce a phrase contrasting with what was mentioned." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 ITEMS) ---
        5: [
            { sent: "She **cryed** at the end of the movie.", correct: "cried" },
            { sent: "I **playyed** soccer yesterday.", correct: "played" },
            { sent: "He **stoped** the car at the light.", correct: "stopped" },
            { sent: "We **studyed** history before the trip.", correct: "studied" },
            { sent: "They **danceed** all night.", correct: "danced" },
            { sent: "I **visitted** a museum.", correct: "visited" },
            { sent: "The train **ariveed** late.", correct: "arrived" },
            { sent: "She **likked** the food.", correct: "liked" },
            { sent: "He **tryed** sushi for the first time.", correct: "tried" },
            { sent: "We **enjoyyed** the party.", correct: "enjoyed" },
            { sent: "I travelled to France **ago last year**.", correct: "last year" },
            { sent: "We watched a movie **yesterday night**.", correct: "last night" },
            { sent: "He called **ago two days**.", correct: "two days ago" },
            { sent: "Finally, we went home. **First**, we bought tickets.", correct: "Finally" },
            { sent: "I wanted to buy the souvenir, **because** it was too expensive.", correct: "but" },
            { sent: "I was tired, **but** I stayed at the hotel.", correct: "so" },
            { sent: "He learned Japanese **so** he loves anime.", correct: "because" },
            { sent: "**When arrived I**, the bus left.", correct: "When I arrived" },
            { sent: "We arrived **then** the parade started.", correct: "when" },
            { sent: "I walked around the city **in** yesterday.", correct: "yesterday" },
            { sent: "She **stayyed** in a nice hotel.", correct: "stayed" },
            { sent: "The festival **startted** at 8 PM.", correct: "started" },
            { sent: "They **listen** to the band yesterday.", correct: "listened to" },
            { sent: "He **walkked** in the park.", correct: "walked" },
            { sent: "I **loveed** the trip to Japan.", correct: "loved" },
            { sent: "She **wantted** to go home.", correct: "wanted" },
            { sent: "We **learnned** a lot about Japanese culture.", correct: "learned" },
            { sent: "The music was loud **so** we liked it anyway.", correct: "but" },
            { sent: "I stayed home **but** I was sick.", correct: "because" },
            { sent: "Then, we packed our bags. **First**, we called a taxi.", correct: "First" },
            { sent: "I visited Spain **in last year**.", correct: "last year" },
            { sent: "The rain **stoping** when I entered the tent.", correct: "stopped" },
            { sent: "He **plaied** guitar all night at the party.", correct: "played" },
            { sent: "We **visit** a castle two days ago.", correct: "visited" },
            { sent: "She **arrive** late last night because of the traffic.", correct: "arrived" },
            { sent: "They **tryied** the local food at the festival.", correct: "tried" },
            { sent: "I was born **on** 2010.", correct: "in" },
            { sent: "**Because** it rained, we stayed inside.", correct: "But" },
            { sent: "We **traveling** by bus last week.", correct: "travelled" },
            { sent: "I **study** English yesterday night for the test.", correct: "studied" }
        ],

        
        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Group 1
            { pairs: [{a: "Where did you travel last year?", b: "I travelled to France."}, {a: "When did you visit the museum?", b: "We visited it yesterday."}, {a: "Did you like the local food?", b: "Yes, I liked it a lot."}, {a: "Why did you stay home?", b: "Because I was sick."}, {a: "What did you do first?", b: "First, we packed our bags."}] },
            // Group 2
            { pairs: [{a: "Did he arrive late?", b: "Yes, he arrived last night."}, {a: "What happened then?", b: "Then, we walked around the city."}, {a: "Did you try sushi?", b: "Yes, she tried sushi and loved it."}, {a: "When did the rain stop?", b: "It stopped when we entered the tent."}, {a: "How was the festival?", b: "The festival was colorful."}] },
            // Group 3
            { pairs: [{a: "Did they dance at the party?", b: "Yes, they danced all night."}, {a: "Why was the trip fun?", b: "Because we enjoyed the parade."}, {a: "Did you learn Spanish?", b: "Yes, I learned some words in Madrid."}, {a: "When did the music start?", b: "It started two days ago."}, {a: "What did you watch?", b: "We watched a scary movie."}] },
            // Group 4
            { pairs: [{a: "Did she study for the test?", b: "Yes, she studied all night."}, {a: "Why did the bus stop?", b: "Because of the traffic."}, {a: "Did you listen to the band?", b: "Yes, we listened to them."}, {a: "What happened finally?", b: "Finally, we returned home."}, {a: "When did he call?", b: "He called two days ago."}] },
            // Group 5
            { pairs: [{a: "Where did she stay?", b: "She stayed in a nice hotel."}, {a: "Did you enjoy the trip?", b: "Yes, we loved the journey."}, {a: "What did you want?", b: "I wanted to buy a souvenir."}, {a: "Why did you call a taxi?", b: "So we could go to the airport."}, {a: "Did you play the guitar?", b: "Yes, he played the guitar."}] },
            // Group 6
            { pairs: [{a: "When did you arrive?", b: "We arrived when the parade started."}, {a: "What did they wear?", b: "They wore beautiful costumes."}, {a: "Did you like Japanese culture?", b: "Yes, their customs are interesting."}, {a: "What did you do next?", b: "Next, we saw the paintings."}, {a: "Did it rain?", b: "It rained, but we had fun."}] },
            // Group 7
            { pairs: [{a: "When did the show start?", b: "The show started at 8 PM."}, {a: "Why did he stop studying?", b: "Because he was tired."}, {a: "Did you walk a lot?", b: "Yes, we walked all day."}, {a: "What did you visit?", b: "We visited a castle."}, {a: "Did you learn English?", b: "Yes, I learned English a long time ago."}] },
            // Group 8
            { pairs: [{a: "Did she like the parade?", b: "Yes, she enjoyed the music."}, {a: "When did you pack your bags?", b: "I packed my bags last night."}, {a: "Why did you go to the museum?", b: "Because I love history."}, {a: "What happened after that?", b: "After that, we ate lunch."}, {a: "Did you try the traditional food?", b: "Yes, for example, we ate spicy noodles."}] },
            // Group 9
            { pairs: [{a: "Where did you travel last month?", b: "I travelled to Japan."}, {a: "When did they dance?", b: "They danced when the music started."}, {a: "Did you watch the festival?", b: "Yes, the festival was crowded."}, {a: "Did he arrive on time?", b: "No, he arrived two hours late."}, {a: "Why did you stay inside?", b: "Because it rained."}] },
            // Group 10
            { pairs: [{a: "What did you do yesterday?", b: "I studied history."}, {a: "Did she want to go home?", b: "Yes, she wanted to sleep."}, {a: "Was the trip expensive?", b: "Yes, but we enjoyed it."}, {a: "When did you visit the city?", b: "We visited the city in 2022."}, {a: "Did you listen to the guide?", b: "Yes, we listened carefully."}] },
            // Group 11
            { pairs: [{a: "First, we travelled", b: "by train."}, {a: "Then, we visited", b: "a castle."}, {a: "It rained, but", b: "we enjoyed it."}, {a: "Because it was late,", b: "we stayed in a hotel."}, {a: "Finally, we returned", b: "home yesterday."}] },
            // Group 12
            { pairs: [{a: "I wanted to buy the souvenir,", b: "but it was too expensive."}, {a: "I was tired,", b: "so I slept."}, {a: "We arrived when", b: "the parade started."}, {a: "The rain stopped when", b: "I entered the tent."}, {a: "She stayed home because", b: "she was sick."}] },
            // Group 13
            { pairs: [{a: "He learned Japanese because", b: "he loves anime."}, {a: "Next, we saw", b: "the beautiful paintings."}, {a: "After that, we", b: "ate lunch at a cafe."}, {a: "I like fruits, for example,", b: "apples and bananas."}, {a: "I saw him", b: "yesterday afternoon."}] },
            // Group 14
            { pairs: [{a: "We watched a movie", b: "last night."}, {a: "She arrived", b: "last week."}, {a: "We travelled", b: "last month."}, {a: "I visited Spain", b: "last year."}, {a: "He called", b: "two days ago."}] },
            // Group 15
            { pairs: [{a: "It happened", b: "a long time ago."}, {a: "I was born", b: "in 2010."}, {a: "The car stopped", b: "at the red light."}, {a: "We danced", b: "all night long."}, {a: "They cheered when", b: "the band started playing."}] },
            // Group 16
            { pairs: [{a: "I studied all night", b: "for the English test."}, {a: "My brother played", b: "video games yesterday."}, {a: "He stopped studying", b: "early because he was tired."}, {a: "She tried sushi", b: "for the first time."}, {a: "We listened to", b: "the music on the radio."}] },
            // Group 17
            { pairs: [{a: "They loved the", b: "trip to the capital city."}, {a: "He played the guitar", b: "at the festival."}, {a: "The show started", b: "exactly at 8 PM."}, {a: "The festival was", b: "very colorful and loud."}, {a: "I saw a big", b: "parade in the street."}] },
            // Group 18
            { pairs: [{a: "Her costume was", b: "very scary."}, {a: "Japanese culture is", b: "very interesting."}, {a: "First, we ate", b: "a big breakfast."}, {a: "We packed our bags", b: "and called a taxi."}, {a: "I liked the food", b: "because it was delicious."}] },
            // Group 19
            { pairs: [{a: "The bus stopped", b: "here for ten minutes."}, {a: "We walked around", b: "the city all day."}, {a: "She wanted to go", b: "home early."}, {a: "The trip was", b: "very long but fun."}, {a: "It is a local custom", b: "to bow when greeting."}] },
            // Group 20
            { pairs: [{a: "Which country did", b: "you visit last year?"}, {a: "Tokyo is a", b: "very big city."}, {a: "This is a nice", b: "place to relax."}, {a: "I studied history", b: "before the trip."}, {a: "We visited a museum", b: "yesterday morning."}] },
            // Group 21
            { pairs: [{a: "Travelled", b: "Viajou / Viajaram"}, {a: "Visited", b: "Visitou / Visitaram"}, {a: "Arrived", b: "Chegou / Chegaram"}, {a: "Stayed", b: "Ficou / Ficaram"}, {a: "Danced", b: "Dançou / Dançaram"}] },
            // Group 22
            { pairs: [{a: "Enjoyed", b: "Aproveitou / Aproveitaram"}, {a: "Learned", b: "Aprendeu / Aprenderam"}, {a: "Watched", b: "Assistiu / Assistiram"}, {a: "Tried", b: "Experimentou / Tentou"}, {a: "Listened", b: "Ouviu / Ouviram"}] },
            // Group 23
            { pairs: [{a: "Liked", b: "Gostou / Gostaram"}, {a: "Loved", b: "Amou / Amaram"}, {a: "Played", b: "Tocou / Jogou"}, {a: "Started", b: "Começou / Começaram"}, {a: "Stopped", b: "Parou / Pararam"}] },
            // Group 24
            { pairs: [{a: "Studied", b: "Estudou / Estudaram"}, {a: "Walked", b: "Caminhou / Caminharam"}, {a: "Wanted", b: "Quis / Queriam"}, {a: "Trip / Journey", b: "Viagem / Jornada"}, {a: "Festival", b: "Festival / Festa"}] },
            // Group 25
            { pairs: [{a: "Parade", b: "Desfile / Parada"}, {a: "Music", b: "Música"}, {a: "Costume", b: "Fantasia / Traje"}, {a: "Food", b: "Comida"}, {a: "Culture", b: "Cultura"}] },
            // Group 26
            { pairs: [{a: "Custom / Tradition", b: "Costume / Tradição"}, {a: "Country", b: "País"}, {a: "City", b: "Cidade"}, {a: "Place", b: "Lugar"}, {a: "First / Firstly", b: "Primeiro / Primeiramente"}] },
            // Group 27
            { pairs: [{a: "Then", b: "Então / Depois"}, {a: "Next", b: "Próximo / Em seguida"}, {a: "After that", b: "Depois disso"}, {a: "Finally / Lastly", b: "Finalmente / Por último"}, {a: "And", b: "E"}] },
            // Group 28
            { pairs: [{a: "Also", b: "Também"}, {a: "But", b: "Mas / Porém"}, {a: "Because", b: "Porque"}, {a: "So", b: "Então / Por isso"}, {a: "For example", b: "Por exemplo"}] },
            // Group 29
            { pairs: [{a: "Yesterday", b: "Ontem"}, {a: "Last night", b: "Ontem à noite"}, {a: "Last week", b: "Semana passada"}, {a: "Last month", b: "Mês passado"}, {a: "Last year", b: "Ano passado"}] },
            // Group 30
            { pairs: [{a: "Two days ago", b: "Dois dias atrás"}, {a: "A long time ago", b: "Há muito tempo"}, {a: "In [year]", b: "Em[ano]"}, {a: "When", b: "Quando"}, {a: "Simple Past", b: "Passado Simples"}] },
            // Group 31
            { pairs: [{a: "Travel", b: "To go from one place to another. Viajar."}, {a: "Visit", b: "To go to see and spend time in a place. Visitar."}, {a: "Arrive", b: "To reach a place at the end of a journey. Chegar."}, {a: "Stay", b: "To live somewhere temporarily as a guest. Ficar / Hospedar-se."}, {a: "Dance", b: "To move rhythmically to music. Dançar."}] },
            // Group 32
            { pairs: [{a: "Enjoy", b: "To take delight or pleasure in an activity. Aproveitar / Gostar."}, {a: "Learn", b: "To gain or acquire knowledge or skill. Aprender."}, {a: "Watch", b: "To look at or observe attentively. Assistir."}, {a: "Try", b: "To use, test, or do something new. Experimentar / Tentar."}, {a: "Listen", b: "To give attention to sound. Ouvir."}] },
            // Group 33
            { pairs: [{a: "Like", b: "To find agreeable or enjoyable. Gostar."}, {a: "Love", b: "To feel deep affection for or enjoy very much. Amar."}, {a: "Play", b: "To perform on an instrument or engage in a game. Tocar / Jogar."}, {a: "Start", b: "To begin or cause to begin. Começar."}, {a: "Stop", b: "To come to an end; cease to happen. Parar."}] },
            // Group 34
            { pairs: [{a: "Study", b: "To devote time to acquiring knowledge. Estudar."}, {a: "Walk", b: "To move at a regular pace on foot. Caminhar."}, {a: "Want", b: "To have a desire to possess or do something. Querer."}, {a: "Trip", b: "A journey or excursion. Viagem."}, {a: "Festival", b: "A day or period of celebration. Festival."}] },
            // Group 35
            { pairs: [{a: "Parade", b: "A public procession celebrating a special day. Desfile."}, {a: "Music", b: "Vocal or instrumental sounds. Música."}, {a: "Costume", b: "A set of clothes in a typical style. Fantasia."}, {a: "Food", b: "Nutritious substance that people eat. Comida."}, {a: "Culture", b: "The customs and social behavior of a society. Cultura."}] },
            // Group 36
            { pairs: [{a: "Custom", b: "A traditional way of behaving. Costume / Tradição."}, {a: "Country", b: "A nation with its own government. País."}, {a: "City", b: "A large town. Cidade."}, {a: "First", b: "Before anything else. Primeiro."}, {a: "Then", b: "After that; next. Então / Depois."}] },
            // Group 37
            { pairs: [{a: "Next", b: "Coming immediately after. Próximo / Em seguida."}, {a: "Finally", b: "Used to introduce a final point. Finalmente."}, {a: "And", b: "Used to connect words or clauses. E."}, {a: "Also", b: "In addition; too. Também."}, {a: "But", b: "Used to introduce a contrasting phrase. Mas / Porém."}] },
            // Group 38
            { pairs: [{a: "Because", b: "For the reason that. Porque."}, {a: "So", b: "And for this reason; therefore. Então / Por isso."}, {a: "Yesterday", b: "On the day before today. Ontem."}, {a: "Last night", b: "The night before the present day. Ontem à noite."}, {a: "Last week", b: "The week before the current one. Semana passada."}] },
            // Group 39
            { pairs: [{a: "Last month", b: "The month before the current one. Mês passado."}, {a: "Last year", b: "The year before the current one. Ano passado."}, {a: "Two days ago", b: "48 hours before the present time. Dois dias atrás."}, {a: "A long time ago", b: "In the distant past. Há muito tempo."}, {a: "When", b: "Used to connect two past actions. Quando."}] },
            // Group 40
            { pairs: [{a: "Simple Past", b: "Verb tense for finished actions. Passado Simples."}, {a: "Regular Verb", b: "A verb that adds -ed in the past tense. Verbo regular."}, {a: "Spelling rule (-y)", b: "Change 'y' to 'i' and add 'ed' (studied). Regra ortográfica (-y)."}, {a: "Spelling rule (CVC)", b: "Double the last consonant and add 'ed' (stopped). Regra ortográfica (CVC)."}, {a: "Sequencer", b: "A word used to organize a story (First, Then). Sequenciador."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 ITEMS) ---
        7: [
            { q: "Where did you travel last year?", options: ["I travelled to Japan.", "Yesterday.", "Because I wanted to.", "A museum."], a: "I travelled to Japan." },
            { q: "When did you visit the museum?", options: ["I visited it yesterday.", "Because it was late.", "First, we packed.", "In a hotel."], a: "I visited it yesterday." },
            { q: "What did you watch?", options: ["We watched a parade.", "I liked the food.", "Because it was fun.", "In the city."], a: "We watched a parade." },
            { q: "Why did you stay in a hotel?", options: ["Because it was late.", "Yesterday night.", "First, we danced.", "A long time ago."], a: "Because it was late." },
            { q: "What happened when the music started?", options: ["We danced when the music started.", "We packed our bags.", "We travelled by train.", "We returned home."], a: "We danced when the music started." },
            { q: "Where did the bus stop?", options: ["The bus stopped here.", "Two days ago.", "Because it rained.", "Next, we visited."], a: "The bus stopped here." },
            { q: "When did the show start?", options: ["It started at 8 PM.", "We tried sushi.", "A beautiful costume.", "I studied history."], a: "It started at 8 PM." },
            { q: "Why did he learn Japanese?", options: ["Because he loves anime.", "Last month.", "In a castle.", "Finally, he slept."], a: "Because he loves anime." },
            { q: "What did she try for the first time?", options: ["She tried sushi.", "She travelled to France.", "Because it was delicious.", "Last year."], a: "She tried sushi." },
            { q: "When did they return home?", options: ["They returned yesterday.", "Because they were tired.", "A colorful festival.", "They played guitar."], a: "They returned yesterday." },
            { q: "Where did you go two days ago?", options: ["I visited a park.", "Because it rained.", "Then, we ate.", "I studied all night."], a: "I visited a park." },
            { q: "Why did you study all night?", options: ["Because I had a test.", "Last week.", "In Japan.", "I liked the music."], a: "Because I had a test." },
            { q: "What did you do after that?", options: ["After that, we ate lunch.", "Yesterday afternoon.", "Because we were hungry.", "A long journey."], a: "After that, we ate lunch." },
            { q: "When did it rain?", options: ["It rained last night.", "But we enjoyed it.", "A big parade.", "We danced."], a: "It rained last night." },
            { q: "Where did they dance?", options: ["They danced at the festival.", "A long time ago.", "First, they walked.", "Because they loved music."], a: "They danced at the festival." },
            { q: "What did he play?", options: ["He played the guitar.", "He visited a city.", "In 2022.", "Because it was fun."], a: "He played the guitar." },
            { q: "Why did the car stop?", options: ["Because of the red light.", "Two days ago.", "In the museum.", "Next, we walked."], a: "Because of the red light." },
            { q: "When was he born?", options: ["He was born in 2010.", "Because he is young.", "A local custom.", "First, we arrived."], a: "He was born in 2010." },
            { q: "What did you like about the trip?", options: ["I liked the culture and the food.", "Yesterday morning.", "We stayed in a hotel.", "Because it rained."], a: "I liked the culture and the food." },
            { q: "Where did she stay?", options: ["She stayed in a hotel.", "Last month.", "She learned English.", "Because she was tired."], a: "She stayed in a hotel." },
            { q: "Why did you call a taxi?", options: ["So we could go to the airport.", "Then, we arrived.", "Last year.", "In France."], a: "So we could go to the airport." },
            { q: "What happened a long time ago?", options: ["We visited that castle.", "Because it is old.", "Finally, we returned.", "I enjoy festivals."], a: "We visited that castle." },
            { q: "When did the rain stop?", options: ["It stopped when I entered the tent.", "Because I was wet.", "A colorful costume.", "We listened to the band."], a: "It stopped when I entered the tent." },
            { q: "Where did you walk?", options: ["We walked around the city.", "Last week.", "First, we studied.", "Because we wanted to see it."], a: "We walked around the city." },
            { q: "What did they wear?", options: ["They wore scary costumes.", "They danced all night.", "Yesterday.", "Because it was a parade."], a: "They wore scary costumes." },
            { q: "Why did she want to go home?", options: ["Because she was sick.", "Two days ago.", "In the place.", "Then, we packed."], a: "Because she was sick." },
            { q: "When did you pack your bags?", options: ["I packed them last night.", "Because I travelled.", "A fun trip.", "Next, we called."], a: "I packed them last night." },
            { q: "What did the guide talk about?", options: ["He talked about local traditions.", "In the museum.", "Yesterday.", "Because we learned."], a: "He talked about local traditions." },
            { q: "Where did you try the food?", options: ["I tried it at the festival.", "Because it was spicy.", "Last month.", "After that, we walked."], a: "I tried it at the festival." },
            { q: "Why was the festival crowded?", options: ["Because it is a famous event.", "We arrived late.", "In 2022.", "First, we watched."], a: "Because it is a famous event." },
            { q: "What did you listen to?", options: ["We listened to a local band.", "Yesterday evening.", "Because we like music.", "In the park."], a: "We listened to a local band." },
            { q: "When did you arrive?", options: ["We arrived when the parade started.", "Because we ran.", "A big city.", "Then, we ate."], a: "We arrived when the parade started." },
            { q: "Where did they travel by train?", options: ["They travelled to France.", "Last year.", "Because it was fast.", "Finally, they stopped."], a: "They travelled to France." },
            { q: "What did my brother do?", options: ["He played video games.", "Two days ago.", "Because he stopped studying.", "In his room."], a: "He played video games." },
            { q: "Why did you enjoy the museum?", options: ["Because the paintings were beautiful.", "Yesterday.", "First, we entered.", "In Japan."], a: "Because the paintings were beautiful." },
            { q: "When did you see him?", options: ["I saw him yesterday.", "Because he is my friend.", "A long journey.", "Next, we talked."], a: "I saw him yesterday." },
            { q: "What did you learn?", options: ["I learned about Japanese culture.", "Last month.", "Because I visited Tokyo.", "Finally, we returned."], a: "I learned about Japanese culture." },
            { q: "Where is the castle?", options: ["It is in the city center.", "Last week.", "Because it is old.", "We visited it."], a: "It is in the city center." },
            { q: "Why did you sleep early?", options: ["Because I was tired.", "Last night.", "In the hotel.", "Then, I woke up."], a: "Because I was tired." },
            { q: "What did you do finally?", options: ["Finally, we returned home.", "Yesterday.", "Because the trip ended.", "First, we packed."], a: "Finally, we returned home." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 ITEMS) ---
        8: [
            { sent: "She **cried** at the end of the movie because it was sad.", wrong: "cried", options: ["cried", "cries", "crying", "cry"], a: "cried" },
            { sent: "I **played** the guitar at the festival last week.", wrong: "played", options: ["played", "plaied", "plays", "playing"], a: "played" },
            { sent: "The bus **stopped** at the station ten minutes ago.", wrong: "stopped", options: ["stopped", "stops", "stopping", "stopt"], a: "stopped" },
            { sent: "We **studied** Japanese culture before our trip.", wrong: "studied", options: ["studied", "studys", "studying", "studyied"], a: "studied" },
            { sent: "They **danced** all night when the music started.", wrong: "danced", options: ["danced", "dancied", "dances", "dancing"], a: "danced" },
            { sent: "I **visited** a beautiful museum yesterday.", wrong: "visited", options: ["visited", "visits", "visiting", "visityed"], a: "visited" },
            { sent: "The train **arrived** very late last night.", wrong: "arrived", options: ["arrived", "arrives", "arriving", "arrivved"], a: "arrived" },
            { sent: "She **liked** the traditional food we tried.", wrong: "liked", options: ["liked", "likes", "liking", "lick"], a: "liked" },
            { sent: "He **tried** sushi for the first time in Japan.", wrong: "tried", options: ["tried", "trys", "trying", "tryied"], a: "tried" },
            { sent: "We **enjoyed** the parade and the colorful costumes.", wrong: "enjoyed", options: ["enjoyed", "enjoys", "enjoying", "enjoied"], a: "enjoyed" },
            { sent: "I travelled to France **last year**.", wrong: "last year", options: ["last year", "in last year", "year ago", "last years"], a: "last year" },
            { sent: "We watched a great movie **last night**.", wrong: "last night", options: ["last night", "in last night", "yesterday evening", "night yesterday"], a: "last night" },
            { sent: "He called me on the phone **two days ago**.", wrong: "two days ago", options: ["two days ago", "last two days", "in two days", "two days last"], a: "two days ago" },
            { sent: "**First**, we went home. Finally, we bought tickets. (Logically swapped)", wrong: "First", options: ["Finally", "Then", "But", "Because"], a: "Finally" },
            { sent: "I wanted to buy the souvenir, **but** it was too expensive.", wrong: "but", options: ["but", "so", "then", "finally"], a: "but" },
            { sent: "I was tired, **so** I slept in the hotel.", wrong: "so", options: ["so", "because", "first", "next"], a: "so" },
            { sent: "He learned Japanese **because** he loves anime.", wrong: "because", options: ["because", "but", "then", "finally"], a: "because" },
            { sent: "**When I arrived**, the bus had already left.", wrong: "When I arrived", options: ["When I arrived", "Arrived when I", "I when arrived", "When arrive I"], a: "When I arrived" },
            { sent: "We arrived **when** the parade started; it was perfect timing!", wrong: "when", options: ["when", "but", "because", "so"], a: "when" },
            { sent: "I walked around the city **yesterday**.", wrong: "yesterday", options: ["yesterday", "on yesterday", "at yesterday", "for yesterday"], a: "yesterday" },
            { sent: "She **stayed** in a nice hotel during her vacation.", wrong: "stayed", options: ["stayed", "staied", "stays", "staying"], a: "stayed" },
            { sent: "The festival **started** at exactly 8 PM.", wrong: "started", options: ["started", "starts", "starting", "startied"], a: "started" },
            { sent: "They **listened to** the band yesterday evening.", wrong: "listened to", options: ["listened to", "listening to", "listens to", "listend to"], a: "listened to" },
            { sent: "He **walked** around the park for two hours.", wrong: "walked", options: ["walked", "walks", "walking", "walkied"], a: "walked" },
            { sent: "I **loved** the trip to Japan; it was amazing.", wrong: "loved", options: ["loved", "loves", "loving", "lovved"], a: "loved" },
            { sent: "She **wanted** to go home because she was tired.", wrong: "wanted", options: ["wanted", "wants", "wanting", "wantied"], a: "wanted" },
            { sent: "We **learned** a lot about Japanese culture.", wrong: "learned", options: ["learned", "learns", "learning", "learnied"], a: "learned" },
            { sent: "The music was loud **but** we liked it anyway.", wrong: "but", options: ["but", "because", "then", "first"], a: "but" },
            { sent: "I stayed home **because** I was sick.", wrong: "because", options: ["because", "so", "then", "finally"], a: "because" },
            { sent: "**First**, we packed our bags. Then, we called a taxi. (Logically swapped)", wrong: "First", options: ["First", "But", "Because", "Finally"], a: "First" },
            { sent: "I visited Spain **last year**.", wrong: "last year", options: ["last year", "on last year", "at last year", "year ago"], a: "last year" },
            { sent: "The rain **stopped** when I entered the tent.", wrong: "stopped", options: ["stopped", "stops", "stopt", "stoped"], a: "stopped" },
            { sent: "He **played** guitar all night at the party.", wrong: "played", options: ["played", "plays", "playing", "playyed"], a: "played" },
            { sent: "We **visited** a castle two days ago.", wrong: "visited", options: ["visited", "visits", "visiting", "visitted"], a: "visited" },
            { sent: "She **arrived** late last night because of the traffic.", wrong: "arrived", options: ["arrived", "arrives", "arriving", "ariveed"], a: "arrived" },
            { sent: "They **tried** the local food at the festival.", wrong: "tried", options: ["tried", "trys", "trying", "tryed"], a: "tried" },
            { sent: "I was born **in** 2010.", wrong: "in", options: ["in", "at", "for", "since"], a: "in" },
            { sent: "**But** it rained, we stayed inside. (This sentence is grammatically correct. Let's provide an error).", wrong: "But", options: ["Because / As", "So", "Then", "First"], a: "Because / As" },
            { sent: "We **travelled** by bus last week to the city.", wrong: "travelled", options: ["travelled / traveled", "travels", "travel", "travelied"], a: "travelled / traveled" },
            { sent: "I **studied** English yesterday night for the test.", wrong: "studied", options: ["studied", "studies", "studying", "studyed"], a: "studied" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 ITEMS) ---
        9: [
            { audio: "Where did Celine travel last month?", options: ["She travelled to Japan.", "She travelled tomorrow.", "She visited a museum.", "Because she wanted to."], a: "She travelled to Japan." },
            { audio: "What happened first at the festival?", options: ["First, they watched a parade.", "Then, they danced.", "Finally, they went home.", "Because it rained."], a: "First, they watched a parade." },
            { audio: "When did the music start?", options: ["It started when they arrived.", "Last year.", "It stopped.", "She tried sushi."], a: "It started when they arrived." },
            { audio: "Did she like the food?", options: ["Yes, she liked it because it was delicious.", "No, she danced.", "She travelled by train.", "First, we packed."], a: "Yes, she liked it because it was delicious." },
            { audio: "What did the brother do yesterday?", options: ["He played video games.", "He stopped studying.", "He visited a castle.", "He wore a costume."], a: "He played video games." },
            { audio: "Did she study all night?", options: ["Yes, she studied and planned her schedule.", "No, she danced.", "She travelled to France.", "Because it was late."], a: "Yes, she studied and planned her schedule." },
            { audio: "When did the rain stop?", options: ["It stopped when I entered the tent.", "It rained yesterday.", "But we had fun.", "Finally, we called a taxi."], a: "It stopped when I entered the tent." },
            { audio: "Why did they stay in a hotel?", options: ["Because it was very late.", "So they visited a museum.", "First, they packed.", "Then, they returned home."], a: "Because it was very late." },
            { audio: "What did you visit last year?", options: ["We visited a beautiful castle.", "We stayed in a hotel.", "We travelled by bus.", "Because we wanted to."], a: "We visited a beautiful castle." },
            { audio: "When did you arrive at the airport?", options: ["I arrived two hours ago.", "I arrived last night.", "I arrived tomorrow.", "I arrived because it rained."], a: "I arrived two hours ago." },
            { audio: "Did they enjoy the parade?", options: ["Yes, the costumes were amazing.", "No, they studied.", "They travelled last month.", "First, they danced."], a: "Yes, the costumes were amazing." },
            { audio: "What happened after you bought the tickets?", options: ["After that, we entered the museum.", "First, we called a taxi.", "Finally, we went home.", "Because we were tired."], a: "After that, we entered the museum." },
            { audio: "Why did she stay home yesterday?", options: ["Because she was sick.", "So she slept.", "But she studied.", "Then she walked."], a: "Because she was sick." },
            { audio: "Did he learn a new language?", options: ["Yes, he learned Japanese a long time ago.", "No, he played video games.", "He visited Spain.", "Because he loves anime."], a: "Yes, he learned Japanese a long time ago." },
            { audio: "What did you do finally?", options: ["Finally, we returned home.", "First, we packed our bags.", "Then, we called a taxi.", "Next, we visited a park."], a: "Finally, we returned home." },
            { audio: "Did the car stop at the light?", options: ["Yes, the car stopped.", "Yes, the car stoped.", "Yes, the car stopping.", "Yes, the car stops."], a: "Yes, the car stopped." },
            { audio: "When did you listen to the band?", options: ["We listened to them last night.", "We listened to them tomorrow.", "Because they played well.", "But it rained."], a: "We listened to them last night." },
            { audio: "Did she try the sushi?", options: ["Yes, she tried it and loved it.", "No, she tryed it.", "Yes, she trying it.", "Yes, she trys it."], a: "Yes, she tried it and loved it." },
            { audio: "What did you do next?", options: ["Next, we saw the beautiful paintings.", "First, we arrived.", "Finally, we went to sleep.", "Because we were happy."], a: "Next, we saw the beautiful paintings." },
            { audio: "Did you travel by train or by bus?", options: ["We travelled by train.", "We walked.", "We visited a castle.", "Last year."], a: "We travelled by train." },
            { audio: "Why were you tired?", options: ["Because I walked around the city all day.", "So I slept.", "But I had fun.", "Then I ate."], a: "Because I walked around the city all day." },
            { audio: "Did he play the guitar at the festival?", options: ["Yes, he played it very well.", "No, he plaied it.", "Yes, he playing it.", "Yes, he plays it tomorrow."], a: "Yes, he played it very well." },
            { audio: "When were you born?", options: ["I was born in 2010.", "I was born last week.", "I was born yesterday.", "I was born next year."], a: "I was born in 2010." },
            { audio: "What did the teacher say?", options: ["She said the test was tomorrow.", "She asked a question.", "She whispered a secret.", "She played video games."], a: "She said the test was tomorrow." },
            { audio: "Did they dance at the party?", options: ["Yes, they danced all night.", "No, they danceed.", "Yes, they dancing.", "Yes, they dances."], a: "Yes, they danced all night." },
            { audio: "Why did he stop studying?", options: ["Because he wanted to play games.", "So he slept.", "But he was tired.", "Then he watched TV."], a: "Because he wanted to play games." },
            { audio: "What happened when the rain stopped?", options: ["When it stopped, we went outside.", "First, it rained.", "Finally, we stayed inside.", "Because we had an umbrella."], a: "When it stopped, we went outside." },
            { audio: "Did she like the custom?", options: ["Yes, she thought the tradition was interesting.", "No, she liked the food.", "She travelled to Japan.", "She visited a museum."], a: "Yes, she thought the tradition was interesting." },
            { audio: "What did you do two days ago?", options: ["I stayed home and studied.", "I will go to the park.", "Because I was busy.", "Then I called him."], a: "I stayed home and studied." },
            { audio: "Did the show start on time?", options: ["Yes, it started exactly at 8 PM.", "No, it startted late.", "Yes, it starting now.", "Yes, it starts tomorrow."], a: "Yes, it started exactly at 8 PM." },
            { audio: "Why did you call a taxi?", options: ["Because we packed our bags and needed to go.", "So we stayed home.", "But it was expensive.", "First, we walked."], a: "Because we packed our bags and needed to go." },
            { audio: "Did you visit the city last month?", options: ["Yes, we visited it and saw the skyline.", "No, we visitted it.", "Yes, we visiting it.", "Yes, we visits it."], a: "Yes, we visited it and saw the skyline." },
            { audio: "What did you want to do?", options: ["I wanted to try the local food.", "I want to sleep.", "I wanting to play.", "I wantted to go."], a: "I wanted to try the local food." },
            { audio: "Did they enjoy the music?", options: ["Yes, they enjoyed the rhythm and danced.", "No, they enjoyyed it.", "Yes, they enjoying it.", "Yes, they enjoys it."], a: "Yes, they enjoyed the rhythm and danced." },
            { audio: "Where did he travel a long time ago?", options: ["He travelled to a beautiful country in Europe.", "He travelled yesterday.", "Because he wanted to.", "Then he returned."], a: "He travelled to a beautiful country in Europe." },
            { audio: "Did she cry at the end of the movie?", options: ["Yes, she cried because it was sad.", "Yes, she cryed.", "No, she cries.", "No, she crying."], a: "Yes, she cried because it was sad." },
            { audio: "What happened first?", options: ["First, we bought the tickets.", "Finally, we entered.", "Next, we saw the show.", "After that, we ate."], a: "First, we bought the tickets." },
            { audio: "Why was the festival crowded?", options: ["Because it is a very popular tradition.", "So we went home.", "But it rained.", "Then we danced."], a: "Because it is a very popular tradition." },
            { audio: "Did you learn a lot on the trip?", options: ["Yes, I learned about a new culture.", "No, I learnned nothing.", "Yes, I learning now.", "Yes, I learns a lot."], a: "Yes, I learned about a new culture." },
            { audio: "When did she arrive?", options: ["She arrived last night.", "She arrived tomorrow.", "Because she was late.", "But she called."], a: "She arrived last night." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 ITEMS) ---
        10: [
            { audio: "I travelled to Japan last month.", sent: "I ___ to Japan last ___.", blanks: ["travelled", "month"] },
            { audio: "First, we watched a beautiful parade.", sent: "___, we ___ a beautiful parade.", blanks: ["First", "watched"] },
            { audio: "Then, we danced when the music started.", sent: "___, we ___ when the music started.", blanks: ["Then", "danced"] },
            { audio: "I tried the sushi because it was delicious.", sent: "I ___ the sushi ___ it was delicious.", blanks: ["tried", "because"] },
            { audio: "She studied all night for the test.", sent: "She ___ all ___ for the test.", blanks: ["studied", "night"] },
            { audio: "My brother played video games yesterday.", sent: "My brother ___ video games ___.", blanks: ["played", "yesterday"] },
            { audio: "He stopped studying early because he was tired.", sent: "He ___ studying early ___ he was tired.", blanks: ["stopped", "because"] },
            { audio: "We arrived when the parade started.", sent: "We ___ ___ the parade started.", blanks: ["arrived", "when"] },
            { audio: "The rain stopped when I entered the tent.", sent: "The rain ___ ___ I entered the tent.", blanks: ["stopped", "when"] },
            { audio: "Finally, we returned home two days ago.", sent: "___, we returned home two days ___.", blanks: ["Finally", "ago"] },
            { audio: "We visited a castle and enjoyed the trip.", sent: "We ___ a castle and ___ the trip.", blanks: ["visited", "enjoyed"] },
            { audio: "I stayed in a hotel last week.", sent: "I ___ in a hotel last ___.", blanks: ["stayed", "week"] },
            { audio: "He learned Japanese a long time ago.", sent: "He ___ Japanese a long time ___.", blanks: ["learned", "ago"] },
            { audio: "The festival was crowded, but we had fun.", sent: "The festival was crowded, ___ we ___ fun.", blanks: ["but", "had"] },
            { audio: "I walked around the city all day.", sent: "I ___ around the ___ all day.", blanks: ["walked", "city"] },
            { audio: "She wanted to buy a souvenir.", sent: "She ___ to buy a ___.", blanks: ["wanted", "souvenir"] },
            { audio: "We listened to the band last night.", sent: "We ___ to the band last ___.", blanks: ["listened", "night"] },
            { audio: "I liked the costumes at the parade.", sent: "I ___ the costumes at the ___.", blanks: ["liked", "parade"] },
            { audio: "They loved the food because it was spicy.", sent: "They ___ the food ___ it was spicy.", blanks: ["loved", "because"] },
            { audio: "He played the guitar when the show started.", sent: "He ___ the guitar ___ the show started.", blanks: ["played", "when"] },
            { audio: "I cried at the end of the movie.", sent: "I ___ at the end of the ___.", blanks: ["cried", "movie"] },
            { audio: "The car stopped at the red light.", sent: "The car ___ at the red ___.", blanks: ["stopped", "light"] },
            { audio: "Next, we saw the beautiful paintings.", sent: "___, we saw the beautiful ___.", blanks: ["Next", "paintings"] },
            { audio: "After that, we called a taxi.", sent: "After ___, we ___ a taxi.", blanks: ["that", "called"] },
            { audio: "I was sick, so I stayed home.", sent: "I was sick, ___ I ___ home.", blanks: ["so", "stayed"] },
            { audio: "For example, I tried traditional Japanese food.", sent: "For ___, I ___ traditional Japanese food.", blanks: ["example", "tried"] },
            { audio: "We travelled by train to the city.", sent: "We ___ by train to the ___.", blanks: ["travelled", "city"] },
            { audio: "She arrived when the music stopped.", sent: "She ___ ___ the music stopped.", blanks: ["arrived", "when"] },
            { audio: "I was born in 2010.", sent: "I was born ___ ___.", blanks: ["in", "2010"] },
            { audio: "The journey was long, but exciting.", sent: "The ___ was long, ___ exciting.", blanks: ["journey", "but"] },
            { audio: "We learned about a new culture today.", sent: "We ___ about a new ___ today.", blanks: ["learned", "culture"] },
            { audio: "First, we packed our bags.", sent: "___, we ___ our bags.", blanks: ["First", "packed"] },
            { audio: "Then, we entered the museum.", sent: "___, we ___ the museum.", blanks: ["Then", "entered"] },
            { audio: "I saw him yesterday afternoon.", sent: "I saw him ___ ___.", blanks: ["yesterday", "afternoon"] },
            { audio: "He called two days ago.", sent: "He ___ two days ___.", blanks: ["called", "ago"] },
            { audio: "The custom is very old and interesting.", sent: "The ___ is very old and ___.", blanks: ["custom", "interesting"] },
            { audio: "I wanted to go, but it rained.", sent: "I ___ to go, ___ it rained.", blanks: ["wanted", "but"] },
            { audio: "She danced all night at the party.", sent: "She ___ all night at the ___.", blanks: ["danced", "party"] },
            { audio: "We enjoyed the colorful festival.", sent: "We ___ the colorful ___.", blanks: ["enjoyed", "festival"] },
            { audio: "He studied hard because he had a test.", sent: "He ___ hard ___ he had a test.", blanks: ["studied", "because"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE (10 ITEMS) ---
        11: [
            {
                title: "Dialogue 1",
                lines: [
                    { speaker: "Albert", text: "Where did you go last night?", options: ["Okay", "Yes", "No"], a: "Okay" }, // Filler
                    { speaker: "Celine", text: "I ___ my grandmother. We stayed for dinner.", options: ["visited", "visit", "visiting"], a: "visited" },
                    { speaker: "Albert", text: "___ did you arrive home?", options: ["When", "What", "Where"], a: "When" },
                    { speaker: "Celine", text: "I arrived home ___ the movie started.", options: ["when", "because", "but"], a: "when" },
                    { speaker: "Albert", text: "___, did you like the food?", options: ["First", "Finally", "But"], a: "First" }
                ]
            },
            {
                title: "Dialogue 2",
                lines: [
                    { speaker: "Albert", text: "Did you ___ the food at the festival?", options: ["tried", "try", "tries"], a: "try" },
                    { speaker: "Celine", text: "Yes! ___, I tried the sushi. It was great.", options: ["Firstly", "Finally", "But"], a: "Firstly" }, // Note: Adjusted slightly from "try / Firstly / then / Then / like" to fit dropdown context better.
                    { speaker: "Albert", text: "What happened ___?", options: ["then", "finally", "yesterday"], a: "then" },
                    { speaker: "Celine", text: "___, we watched the parade.", options: ["Then", "First", "Because"], a: "Then" },
                    { speaker: "Albert", text: "Did you ___ the costumes?", options: ["liked", "like", "likes"], a: "like" }
                ]
            },
            {
                title: "Dialogue 3",
                lines: [
                    { speaker: "Celine", text: "I ___ to Italy last year.", options: ["travelled", "travel", "travelling"], a: "travelled" },
                    { speaker: "Albert", text: "Did you ___ in a big hotel?", options: ["stayed", "stay", "stays"], a: "stay" },
                    { speaker: "Celine", text: "No, we stayed in a small house ___ it was cheaper.", options: ["because", "so", "then"], a: "because" },
                    { speaker: "Albert", text: "Did you ___ Italian?", options: ["learned", "learn", "learning"], a: "learn" },
                    { speaker: "Celine", text: "I ___ some words when I visited Rome.", options: ["learned", "learn", "learns"], a: "learned" }
                ]
            },
            {
                title: "Dialogue 4",
                lines: [
                    { speaker: "Albert", text: "The ___ yesterday was very loud.", options: ["parade", "trip", "country"], a: "parade" },
                    { speaker: "Celine", text: "I agree. The ___ was very high.", options: ["music", "costume", "city"], a: "music" },
                    { speaker: "Albert", text: "___ did you leave the street?", options: ["When", "While", "Finally"], a: "When" },
                    { speaker: "Celine", text: "We ___ away when the rain started.", options: ["walked", "walk", "walking"], a: "walked" },
                    { speaker: "Albert", text: "___, we arrived at the cafe.", options: ["Finally", "Then", "First"], a: "Finally" } // Adjusted from original answer key "Then / First / Lastly" -> Finally
                ]
            },
            {
                title: "Dialogue 5",
                lines: [
                    { speaker: "Celine", text: "Why did the bus ___?", options: ["stopped", "stop", "stops"], a: "stop" },
                    { speaker: "Albert", text: "It stopped ___ there was a dog in the street.", options: ["because", "but", "so"], a: "because" },
                    { speaker: "Celine", text: "Did you ___ late to school?", options: ["arrive", "arrived", "arriving"], a: "arrive" },
                    { speaker: "Albert", text: "Yes. ___, I talked to the teacher.", options: ["First", "Then", "Finally"], a: "First" },
                    { speaker: "Celine", text: "___, did she listen to you?", options: ["Then", "First", "Lastly"], a: "Then" }
                ]
            },
            {
                title: "Dialogue 6",
                lines: [
                    { speaker: "Albert", text: "I ___ to go to the museum yesterday.", options: ["wanted", "want", "wanting"], a: "wanted" },
                    { speaker: "Celine", text: "___ it was closed.", options: ["But", "So", "Because"], a: "But" },
                    { speaker: "Albert", text: "Yes. ___, I visited the park.", options: ["So", "First", "Then"], a: "So" },
                    { speaker: "Celine", text: "Did you ___ soccer there?", options: ["played", "play", "plays"], a: "play" },
                    { speaker: "Albert", text: "No, I ___ to music and relaxed.", options: ["listened", "listen", "listening"], a: "listened" }
                ]
            },
            {
                title: "Dialogue 7",
                lines: [
                    { speaker: "Celine", text: "___ did the band start playing?", options: ["When", "Where", "What"], a: "When" },
                    { speaker: "Albert", text: "They ___ when the sun went down.", options: ["started", "start", "starting"], a: "started" },
                    { speaker: "Celine", text: "Did the people ___?", options: ["danced", "dance", "dancing"], a: "dance" },
                    { speaker: "Albert", text: "Yes! Everyone ___ the show.", options: ["enjoyed", "enjoy", "enjoying"], a: "enjoyed" },
                    { speaker: "Celine", text: "___, we walked back to the car.", options: ["Finally", "First", "Next"], a: "Finally" }
                ]
            },
            {
                title: "Dialogue 8",
                lines: [
                    { speaker: "Albert", text: "How was your ___ to the beach?", options: ["trip", "costume", "custom"], a: "trip" },
                    { speaker: "Celine", text: "It was fun. ___, we arrived at 10 AM.", options: ["First", "Lastly", "But"], a: "First" },
                    { speaker: "Albert", text: "Did you ___ surfing?", options: ["try", "tried", "trys"], a: "try" },
                    { speaker: "Celine", text: "No, I ___ to walk on the sand.", options: ["preferred", "prefer", "prefers"], a: "preferred" },
                    { speaker: "Albert", text: "I ___ the photos you posted!", options: ["liked", "like", "liking"], a: "liked" }
                ]
            },
            {
                title: "Dialogue 9",
                lines: [
                    { speaker: "Celine", text: "I ___ about a new custom in class.", options: ["learned", "learn", "learning"], a: "learned" },
                    { speaker: "Albert", text: "Which one?", options: ["Yes", "No", "Okay"], a: "Okay" }, // Filler
                    { speaker: "Celine", text: "In Japan, people ___ to show respect.", options: ["bowed", "bow", "bows"], a: "bow" }, // Changed to present simple as it's a general fact. The OCR had 'bow', I'll use it as the answer.
                    { speaker: "Albert", text: "___ did you learn that?", options: ["When", "What", "Why"], a: "When" },
                    { speaker: "Celine", text: "___ we studied world cultures last week.", options: ["When", "Because", "Then"], a: "When" }
                ]
            },
            {
                title: "Dialogue 10",
                lines: [
                    { speaker: "Albert", text: "Did you ___ the parade last night?", options: ["watch", "watched", "watching"], a: "watch" },
                    { speaker: "Celine", text: "No, I ___ home.", options: ["stayed", "stay", "staying"], a: "stayed" },
                    { speaker: "Albert", text: "Why?", options: ["Yes", "No", "Okay"], a: "Okay" }, // Filler
                    { speaker: "Celine", text: "___ I studied for the test.", options: ["Because", "So", "Then"], a: "Because" },
                    { speaker: "Albert", text: "You are very dedicated!", options: ["Yes", "No", "Right"], a: "Right" } // Filler
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER (10 ITEMS) ---
        12: [
            {
                title: "Text 1: A Trip to France",
                text: "Last summer, Maria travelled to France with her family. First, they arrived in Paris and visited the Eiffel Tower. Then, they walked around the city and tried delicious bread. They stayed in a nice hotel for a week. Finally, they returned home yesterday. Maria liked the trip because the museums were amazing.",
                questions: [
                    { q: "Where did Maria go last summer?", options: ["Italy", "France", "Japan"], a: "France" },
                    { q: "What did they do first?", options: ["They returned home", "They arrived in Paris", "They tried the food"], a: "They arrived in Paris" },
                    { q: "How long did they stay in the hotel?", options: ["A day", "A month", "A week"], a: "A week" },
                    { q: "Why did Maria like the trip?", options: ["Because of the museums", "Because of the rain", "Because of the costumes"], a: "Because of the museums" },
                    { q: "When did they return home?", options: ["Last week", "Yesterday", "Last month"], a: "Yesterday" }
                ]
            },
            {
                title: "Text 2: The School Festival",
                text: "The students started a festival at school two days ago. First, they watched a big parade in the yard. Then, they danced when the music started. Lucas wore a colorful costume. Finally, they tried traditional food. Everyone enjoyed the day.",
                questions: [
                    { q: "When did the festival start?", options: ["Last month", "Yesterday", "Two days ago"], a: "Two days ago" },
                    { q: "What happened first?", options: ["They tried food", "They watched a parade", "They danced"], a: "They watched a parade" },
                    { q: "When did they dance?", options: ["When the music started", "When they arrived", "When it rained"], a: "When the music started" },
                    { q: "What did Lucas wear?", options: ["A uniform", "A colorful costume", "A hat"], a: "A colorful costume" },
                    { q: "What happened at the end (finally)?", options: ["They went home", "They tried traditional food", "They played soccer"], a: "They tried traditional food" }
                ]
            },
            {
                title: "Text 3: A Weekend in the Mountains",
                text: "Last weekend, my brother and I travelled to the mountains. We arrived at the cabin in the evening. First, we walked in the forest. Then, we started a fire because it was cold. We stayed there for two days. Finally, we returned home on Sunday night.",
                questions: [
                    { q: "Where did the author go?", options: ["The beach", "The mountains", "The city"], a: "The mountains" },
                    { q: "When did they arrive at the cabin?", options: ["In the morning", "In the afternoon", "In the evening"], a: "In the evening" },
                    { q: "Why did they start a fire?", options: ["Because it was dark", "Because it was cold", "To cook food"], a: "Because it was cold" },
                    { q: "How long did they stay?", options: ["Two days", "Two weeks", "One day"], a: "Two days" },
                    { q: "When did they return?", options: ["Saturday", "Sunday night", "Monday"], a: "Sunday night" }
                ]
            },
            {
                title: "Text 4: Learning Customs",
                text: "Pedro visited Mexico last month. He learned about a local custom called \"Day of the Dead\". First, he visited a market and bought flowers. Then, he watched a parade with many skeletons. He tried spicy food and liked it. He returned home last week.",
                questions: [
                    { q: "Which country did Pedro visit?", options: ["Spain", "Mexico", "Brazil"], a: "Mexico" },
                    { q: "What is the name of the custom?", options: ["Lantern Festival", "Carnival", "Day of the Dead"], a: "Day of the Dead" },
                    { q: "What did he do at the market?", options: ["He danced", "He bought flowers", "He tried food"], a: "He bought flowers" },
                    { q: "Did he like the spicy food?", options: ["Yes, he did", "No, he didn't", "He didn't try it"], a: "Yes, he did" },
                    { q: "When did he return home?", options: ["Yesterday", "Last month", "Last week"], a: "Last week" }
                ]
            },
            {
                title: "Text 5: A Rainy Trip",
                text: "I travelled to London last month. First, I arrived at the airport and called a taxi. Then, it started to rain. I stayed in the hotel and watched TV. I wanted to visit the palace, but it was too wet. Finally, the sun started to shine on the last day.",
                questions: [
                    { q: "Where did the author go?", options: ["London", "Paris", "New York"], a: "London" },
                    { q: "What did the author do first?", options: ["Watched TV", "Arrived at the airport", "Visited a palace"], a: "Arrived at the airport" },
                    { q: "Why did the author stay in the hotel?", options: ["Because he was tired", "Because it rained", "Because he was sick"], a: "Because it rained" },
                    { q: "What did he want to visit?", options: ["A museum", "A park", "A palace"], a: "A palace" },
                    { q: "When did the sun shine?", options: ["The first day", "The second day", "The last day"], a: "The last day" }
                ]
            },
            {
                title: "Text 6: The Music Show",
                text: "My friends and I visited a music show last night. First, we arrived at the stadium. Then, we waited for the band. When the band started, we danced and shouted. I liked the music because it was very energetic. Finally, the show stopped at midnight.",
                questions: [
                    { q: "When was the music show?", options: ["Last week", "Last night", "Yesterday"], a: "Last night" },
                    { q: "What did they do first?", options: ["They danced", "They arrived at the stadium", "They tried food"], a: "They arrived at the stadium" },
                    { q: "What did they do when the band started?", options: ["They slept", "They danced and shouted", "They left"], a: "They danced and shouted" },
                    { q: "Why did the author like the music?", options: ["It was slow", "It was energetic", "It was quiet"], a: "It was energetic" },
                    { q: "What time did the show stop?", options: ["10 PM", "Midnight", "8 PM"], a: "Midnight" }
                ]
            },
            {
                title: "Text 7: Exploring the Museum",
                text: "Last Tuesday, the class visited a history museum. First, the teacher explained the rules. Then, we walked to the Egyptian room. We learned about old customs. I watched a video about mummies. Finally, we returned to school at 3 PM.",
                questions: [
                    { q: "When did the class visit the museum?", options: ["Last Monday", "Last Tuesday", "Last Friday"], a: "Last Tuesday" },
                    { q: "What did the teacher do first?", options: ["Explained the rules", "Walked away", "Tried food"], a: "Explained the rules" },
                    { q: "Which room did they visit?", options: ["The Japanese room", "The Egyptian room", "The Art room"], a: "The Egyptian room" },
                    { q: "What did the author watch?", options: ["A parade", "A video about mummies", "A soccer game"], a: "A video about mummies" },
                    { q: "What time did they return to school?", options: ["Noon", "2 PM", "3 PM"], a: "3 PM" }
                ]
            },
            {
                title: "Text 8: The Carnival Parade",
                text: "Last year, I travelled to Rio for Carnival. First, I arrived at the hotel. Then, I visited the Sambadrome. I watched a big parade. The costumes were amazing and colorful. I danced when I heard the drums. Finally, I returned home exhausted but happy.",
                questions: [
                    { q: "Where did the author go?", options: ["Tokyo", "Rio", "Madrid"], a: "Rio" },
                    { q: "What did the author do first?", options: ["Arrived at the hotel", "Danced", "Watched a parade"], a: "Arrived at the hotel" },
                    { q: "How were the costumes?", options: ["Simple", "Amazing and colorful", "Scary"], a: "Amazing and colorful" },
                    { q: "When did the author dance?", options: ["When he arrived", "When he heard the drums", "Finally"], a: "When he heard the drums" },
                    { q: "How did the author feel at the end?", options: ["Sad", "Exhausted but happy", "Angry"], a: "Exhausted but happy" }
                ]
            },
            {
                title: "Text 9: A Long Journey",
                text: "My uncle travelled to China in 2022. It was a long journey. First, he arrived in Beijing. Then, he visited the Great Wall. He stayed in China for two weeks. He learned some Chinese words. Finally, he returned home and showed us his photos.",
                questions: [
                    { q: "When did the uncle travel to China?", options: ["2010", "2022", "Last year"], a: "2022" },
                    { q: "Where did he arrive first?", options: ["Shanghai", "Beijing", "Hong Kong"], a: "Beijing" },
                    { q: "How long did he stay?", options: ["Two days", "Two weeks", "Two months"], a: "Two weeks" },
                    { q: "What did he learn?", options: ["How to dance", "Some Chinese words", "A new custom"], a: "Some Chinese words" },
                    { q: "What did he do finally?", options: ["He visited a museum", "He showed his photos", "He bought a car"], a: "He showed his photos" }
                ]
            },
            {
                title: "Text 10: Tasting New Food",
                text: "Yesterday, I tried Indian food for the first time. First, I arrived at the restaurant with my sister. Then, the waiter explained the menu. I tried the curry and it was very spicy. I liked it because the flavors were new. Finally, we walked home under the moon.",
                questions: [
                    { q: "When did the author try Indian food?", options: ["Last week", "Last night", "Yesterday"], a: "Yesterday" },
                    { q: "Who did the author go with?", options: ["His brother", "His sister", "His mother"], a: "His sister" },
                    { q: "What did the waiter do?", options: ["He danced", "He explained the menu", "He watched a parade"], a: "He explained the menu" },
                    { q: "Why did the author like the food?", options: ["Because it was cheap", "Because the flavors were new", "Because it was cold"], a: "Because the flavors were new" },
                    { q: "What happened at the end?", options: ["They stayed at the hotel", "They walked home", "They travelled away"], a: "They walked home" }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER CONTEXT (10 ITEMS) ---
        13: [
            {
                title: "Audio Script 1",
                audio: "Last week, I travelled to a small village. First, I arrived at the train station. Then, I walked to the hotel. I stayed there for three nights. I visited a local festival and watched a parade. I liked the music and the people. Finally, I returned home on Friday.",
                questions: [
                    { q: "When did the speaker travel?", options: ["Yesterday", "Last week", "Last month"], a: "Last week" },
                    { q: "Where did the speaker arrive first?", options: ["The airport", "The hotel", "The train station"], a: "The train station" },
                    { q: "How long did the speaker stay?", options: ["Three nights", "One night", "Five nights"], a: "Three nights" },
                    { q: "What did the speaker watch at the festival?", options: ["A movie", "A parade", "A dance"], a: "A parade" },
                    { q: "When did the speaker return home?", options: ["Monday", "Wednesday", "Friday"], a: "Friday" }
                ]
            },
            {
                title: "Audio Script 2",
                audio: "Hi, I'm Lucas. Yesterday, I visited a science museum. First, I watched a video about planets. Then, I tried an experiment. I learned many new things. I stayed at the museum for four hours. Finally, I walked home when the sun started to set.",
                questions: [
                    { q: "Where did Lucas go yesterday?", options: ["A history museum", "A science museum", "A park"], a: "A science museum" },
                    { q: "What did he do first?", options: ["Tried an experiment", "Walked home", "Watched a video"], a: "Watched a video" },
                    { q: "What did he learn?", options: ["Spanish words", "Many new things", "How to dance"], a: "Many new things" },
                    { q: "How long did he stay?", options: ["Two hours", "Four hours", "All day"], a: "Four hours" },
                    { q: "When did he walk home?", options: ["In the morning", "When the sun set", "At midnight"], a: "When the sun set" }
                ]
            },
            {
                title: "Audio Script 3",
                audio: "My parents travelled to Portugal last year. First, they arrived in Lisbon. Then, they visited many old churches. They stayed in a house near the sea. They loved the food and the culture. Finally, they returned to Brazil in December.",
                questions: [
                    { q: "Where did the parents go?", options: ["Spain", "Portugal", "Italy"], a: "Portugal" },
                    { q: "Where did they arrive first?", options: ["Porto", "Lisbon", "Madrid"], a: "Lisbon" },
                    { q: "Where did they stay?", options: ["A hotel", "A house near the sea", "A cabin"], a: "A house near the sea" },
                    { q: "What did they love?", options: ["The rain", "The food and culture", "The parade"], a: "The food and culture" },
                    { q: "When did they return to Brazil?", options: ["Last week", "January", "December"], a: "December" }
                ]
            },
            {
                title: "Audio Script 4",
                audio: "I participated in a parade last month. First, I put on my costume. It was a blue cape. Then, I walked with the band. We danced when the music was loud. People clapped and cheered. Finally, the parade stopped at the city hall.",
                questions: [
                    { q: "When did the speaker participate in the parade?", options: ["Last week", "Last month", "Yesterday"], a: "Last month" },
                    { q: "What was the speaker's costume?", options: ["A red hat", "A blue cape", "A mask"], a: "A blue cape" },
                    { q: "What did the speaker do with the band?", options: ["Walked", "Slept", "Ate food"], a: "Walked" },
                    { q: "When did they dance?", options: ["First", "When the music was loud", "Finally"], a: "When the music was loud" },
                    { q: "Where did the parade stop?", options: ["The park", "The hotel", "The city hall"], a: "The city hall" }
                ]
            },
            {
                title: "Audio Script 5",
                audio: "Last night, I wanted to cook dinner. First, I visited the supermarket. Then, I returned home and started to cook pasta. I tried the sauce and it was delicious. My sister arrived when I finished the meal. Finally, we ate together.",
                questions: [
                    { q: "What did the speaker want to do last night?", options: ["Go out", "Cook dinner", "Watch a movie"], a: "Cook dinner" },
                    { q: "Where did the speaker go first?", options: ["The museum", "The supermarket", "The park"], a: "The supermarket" },
                    { q: "What did the speaker cook?", options: ["Rice", "Pizza", "Pasta"], a: "Pasta" },
                    { q: "When did the sister arrive?", options: ["First", "When he finished the meal", "Finally"], a: "When he finished the meal" },
                    { q: "What did they do finally?", options: ["They washed the dishes", "They ate together", "They went out"], a: "They ate together" }
                ]
            },
            {
                title: "Audio Script 6",
                audio: "Last Saturday, I stayed home because it was cold. First, I cleaned my room. Then, I studied for my English test. I practiced the past tense. I listened to some music too. Finally, I watched a movie with my dad.",
                questions: [
                    { q: "Why did the speaker stay home?", options: ["It was raining", "It was cold", "He was sick"], a: "It was cold" },
                    { q: "What did he do first?", options: ["Studied", "Cleaned his room", "Watched a movie"], a: "Cleaned his room" },
                    { q: "What did he study?", options: ["Math", "English", "History"], a: "English" },
                    { q: "What did he practice?", options: ["The present tense", "The future tense", "The past tense"], a: "The past tense" },
                    { q: "Who did he watch a movie with?", options: ["His sister", "His dad", "His friend"], a: "His dad" }
                ]
            },
            {
                title: "Audio Script 7",
                audio: "We travelled to a farm two days ago. First, we arrived and talked to the farmer. Then, we visited the animals. I liked the horses. We stayed there all day. Finally, we returned to the city when it got dark.",
                questions: [
                    { q: "When did they go to the farm?", options: ["Yesterday", "Last week", "Two days ago"], a: "Two days ago" },
                    { q: "Who did they talk to first?", options: ["The teacher", "The farmer", "The uncle"], a: "The farmer" },
                    { q: "What animals did the speaker like?", options: ["The cows", "The pigs", "The horses"], a: "The horses" },
                    { q: "How long did they stay?", options: ["One hour", "All day", "Two days"], a: "All day" },
                    { q: "When did they return to the city?", options: ["At noon", "When it got dark", "Next morning"], a: "When it got dark" }
                ]
            },
            {
                title: "Audio Script 8",
                audio: "Last month, I learned how to play a new game. First, my friend explained the rules. Then, we started the game. I failed the first time, but I tried again. I liked the game because it was fast. Finally, I won the third round.",
                questions: [
                    { q: "When did the speaker learn the game?", options: ["Yesterday", "Last month", "Last year"], a: "Last month" },
                    { q: "What happened first?", options: ["He won", "He tried again", "The friend explained the rules"], a: "The friend explained the rules" },
                    { q: "What happened the first time he played?", options: ["He won", "He failed", "He stopped"], a: "He failed" },
                    { q: "Why did he like the game?", options: ["It was slow", "It was fast", "It was easy"], a: "It was fast" },
                    { q: "Which round did he win?", options: ["The first", "The second", "The third"], a: "The third" }
                ]
            },
            {
                title: "Audio Script 9",
                audio: "I visited my cousins in Canada in 2021. First, we arrived at their house. Then, they showed me the city. We walked a lot. We visited a park when it was sunny. Finally, we returned home and tried a traditional cake.",
                questions: [
                    { q: "When did the speaker visit the cousins?", options: ["2019", "2020", "2021"], a: "2021" },
                    { q: "Where did they go first?", options: ["A museum", "Their house", "A hotel"], a: "Their house" },
                    { q: "What did they do in the city?", options: ["They drove", "They walked a lot", "They danced"], a: "They walked a lot" },
                    { q: "When did they visit the park?", options: ["When it was sunny", "When it rained", "Finally"], a: "When it was sunny" },
                    { q: "What did they try at the end?", options: ["Pizza", "Traditional cake", "Sushi"], a: "Traditional cake" }
                ]
            },
            {
                title: "Audio Script 10",
                audio: "Yesterday was my sister's birthday. First, we decorated the house. Then, we started the party at 6 PM. Many friends arrived with gifts. We danced and listened to music. Finally, she opened the presents and liked them all.",
                questions: [
                    { q: "When was the birthday?", options: ["Last week", "Yesterday", "Today"], a: "Yesterday" },
                    { q: "What did they do first?", options: ["Opened gifts", "Started the party", "Decorated the house"], a: "Decorated the house" },
                    { q: "What time did the party start?", options: ["6 PM", "8 PM", "Noon"], a: "6 PM" },
                    { q: "What did the friends bring?", options: ["Food", "Music", "Gifts"], a: "Gifts" },
                    { q: "What happened finally?", options: ["They danced", "She opened presents", "They cleaned"], a: "She opened presents" }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT (10 ITEMS) ---
        14: [
            {
                title: "Text 1",
                text: "Last summer, I [1] (travelled / travel / travelling) to a new city. [2] (First / Finally / But), I arrived at the hotel. [3] (Then / First / Lastly), I visited a museum. I [4] (liked / like / liking) the art because it was very old. [5] (Finally / Because / So), I returned home yesterday.",
                answers: ["travelled", "First", "Then", "liked", "Finally"]
            },
            {
                title: "Text 2",
                text: "My family [1] (visited / visit / visiting) a festival last month. We [2] (watched / watch / watching) a parade in the morning. [3] (Then / Finally / Because), we [4] (tried / try / trys) the local food. I [5] (liked / like / likes) the cakes!",
                answers: ["visited", "watched", "Then", "tried", "liked"]
            },
            {
                title: "Text 3",
                text: "Yesterday, I [1] (stayed / stay / stays) home. [2] (First / Finally / So), I [3] (cleaned / clean / cleaning) my bedroom. [4] (Then / First / Lastly), I [5] (listened / listen / listening) to my favorite band. I enjoyed the music very much.",
                answers: ["stayed", "First", "cleaned", "Then", "listened"]
            },
            {
                title: "Text 4",
                text: "We [1] (arrived / arrive / arriving) at the airport last night. [2] (First / Finally / Next), we [3] (waited / wait / waiting) for the bags. [4] (Then / First / Lastly), we [5] (called / call / calling) a taxi. We stayed in a nice place near the center.",
                answers: ["arrived", "First", "waited", "Then", "called"]
            },
            {
                title: "Text 5",
                text: "Two days ago, it [1] (rained / rain / rains). [2] (So / Because / But), I [3] (stayed / stay / stays) in the library. [4] (First / Next / Finally), I [5] (studied / study / studying) history. Then, I learned about old customs.",
                answers: ["rained", "So", "stayed", "First", "studied"]
            },
            {
                title: "Text 6",
                text: "Lucas [1] (travelled / travel / travelling) to Japan. [2] (First / Finally / Because), he [3] (visited / visit / visiting) Tokyo. He [4] (tried / try / trys) sushi and [5] (liked / like / likes) it. Then, he watched a parade.",
                answers: ["travelled", "First", "visited", "tried", "liked"]
            },
            {
                title: "Text 7",
                text: "Last week, we [1] (started / start / starting) a project. [2] (First / Finally / So), we [3] (talked / talk / talking) to the teacher. [4] (Then / First / Lastly), we [5] (walked / walk / walking) to the library. We studied all afternoon because we wanted a good grade.",
                answers: ["started", "First", "talked", "Then", "walked"]
            },
            {
                title: "Text 8",
                text: "My sister [1] (danced / dance / dancing) at the party last night. [2] (First / Finally / But), she [3] (arrived / arrive / arriving) at 8 PM. [4] (Then / First / Lastly), the music [5] (started / start / starting). She enjoyed the celebration.",
                answers: ["danced", "First", "arrived", "Then", "started"]
            },
            {
                title: "Text 9",
                text: "I [1] (wanted / want / wanting) a new [2] (costume / trip / city) for the parade. [3] (So / Because / But), I [4] (visited / visit / visiting) the shop yesterday. [5] (First / Finally / Next), I tried on a red hat. Then, I liked the blue one.",
                answers: ["wanted", "costume", "So", "visited", "First"]
            },
            {
                title: "Text 10",
                text: "Last year, my friend [1] (visited / visit / visiting) a farm. [2] (First / Finally / Next), he [3] (arrived / arrive / arriving) and [4] (talked / talk / talking) to his uncle. [5] (Then / First / Lastly), he watched the horses. He stayed there for a week.",
                answers: ["visited", "First", "arrived", "talked", "Then"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 ITEMS) ---
        15: [
            {
                title: "Audio Script 1",
                audio: "Last month, I travelled to New York. First, I arrived at the hotel. Then, I visited Central Park. I walked for hours and watched the people. I liked the energy of the city. Finally, I returned home.",
                text: "Last month, I [1] to New York. First, I [2] at the hotel. Then, I [3] Central Park. I [4] for hours and watched the people. I [5] the energy of the city.",
                answers: ["travelled", "arrived", "visited", "walked", "liked"]
            },
            {
                title: "Audio Script 2",
                audio: "Yesterday, my brother and I stayed at the library. First, he studied math. Then, I learned some English verbs. We practiced together. We liked the quiet room. Finally, we walked home when it rained.",
                text: "Yesterday, my brother and I [1] at the library. First, he [2] math. Then, I [3] some English verbs. We [4] together. Finally, we [5] home when it rained.",
                answers: ["stayed", "studied", "learned", "practiced", "walked"]
            },
            {
                title: "Audio Script 3",
                audio: "Last weekend was a festival in my town. First, we watched a parade. Then, we danced on the street. I tried a traditional cake and it was sweet. I liked the music. Finally, we stayed until midnight.",
                text: "Last weekend was a [1] in my town. First, we [2] a parade. Then, we [3] on the street. I [4] a traditional cake. Finally, we [5] until midnight.",
                answers: ["festival", "watched", "danced", "tried", "stayed"]
            },
            {
                title: "Audio Script 4",
                audio: "I visited a farm last year. First, I talked to my grandfather. Then, I walked to the river. I stayed there and watched the birds. I enjoyed the nature. Finally, I returned home yesterday.",
                text: "I [1] a farm last year. First, I [2] to my grandfather. Then, I [3] to the river. I [4] the nature. Finally, I [5] home yesterday.",
                answers: ["visited", "talked", "walked", "enjoyed", "returned"]
            },
            {
                title: "Audio Script 5",
                audio: "Last night, the show started at 8 PM. First, we arrived and found our seats. Then, the band played my favorite song. We clapped and shouted. I liked the costumes. Finally, we returned to the hotel.",
                text: "Last night, the show [1] at 8 PM. First, we [2] and found our seats. Then, the band [3] my favorite song. I [4] the costumes. Finally, we [5] to the hotel.",
                answers: ["started", "arrived", "played", "liked", "returned"]
            },
            {
                title: "Audio Script 6",
                audio: "I travelled to Spain last summer. First, I visited Madrid. Then, I learned some Spanish words. I stayed in a nice hotel. Finally, I returned to Brazil.",
                text: "I [1] to Spain last summer. First, I [2] Madrid. Then, I [3] some Spanish words. I [4] in a nice hotel. Finally, I [5] to Brazil.",
                answers: ["travelled", "visited", "learned", "stayed", "returned"]
            },
            {
                title: "Audio Script 7",
                audio: "Yesterday, we walked to the park. First, we played soccer. Then, it stopped raining and the sun started to shine. We enjoyed the fresh air. I talked to my friends. Finally, we arrived home at 6 PM.",
                text: "Yesterday, we [1] to the park. First, we [2] soccer. Then, the sun [3] to shine. We [4] the fresh air. Finally, we [5] home at 6 PM.",
                answers: ["walked", "played", "started", "enjoyed", "arrived"]
            },
            {
                title: "Audio Script 8",
                audio: "Last month, she participated in a contest. First, she practiced every day. Then, she performed her dance. The judges liked her style. She was very happy. Finally, she won the prize.",
                text: "Last month, she [1] in a contest. First, she [2] every day. Then, she [3] her dance. The judges [4] her style. Finally, she [5] the prize.",
                answers: ["participated", "practiced", "performed", "liked", "won"]
            },
            {
                title: "Audio Script 9",
                audio: "The trip to the beach was great. First, we arrived at the hotel. Then, we walked to the ocean. We stayed in the water for hours. I tried to swim. Finally, we returned home tired but happy.",
                text: "The [1] to the beach was great. First, we [2] at the hotel. Then, we [3] to the ocean. I [4] to swim. Finally, we [5] home tired.",
                answers: ["trip", "arrived", "walked", "tried", "returned"]
            },
            {
                title: "Audio Script 10",
                audio: "Last night, I visited my uncle. First, we watched a movie. Then, we talked about his childhood. I learned many stories. We enjoyed the time together. Finally, I walked home at 10 PM.",
                text: "Last night, I [1] my uncle. First, we [2] a movie. Then, we [3] about his childhood. I [4] many stories. Finally, I [5] home at 10 PM.",
                answers: ["visited", "watched", "talked", "learned", "walked"]
            }
        ]
    }
});