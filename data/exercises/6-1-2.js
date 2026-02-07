/**
 * REACH ENGLISH - EXERCISE DATA TEMPLATE
 * 
 * QUANTITY REQUIREMENTS:
 * - Types 1, 2, 3, 4, 5, 7, 8, 9, 10: 40 different items each.
 * - Type 6: 40 different sets (each set contains 5 pairs).
 * - Types 11, 12, 13, 14, 15: 10 different texts/contexts each.
 */

window.initExercise({
    id: "6-1-2",
    grade: "6th Grade",
    bimester: "1",
    chapter: "2",
    title: "Family and Professions",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {

        // --- TYPE 1: UNSCRAMBLE SENTENCES ---
        1: [
            { words: ["mother", "is", "This", "my"], correct: "This is my mother" },
            { words: ["name", "is", "Bob", "His"], correct: "His name is Bob" },
            { words: ["is", "father", "my", "That"], correct: "That is my father" },
            { words: ["are", "parents", "my", "These"], correct: "These are my parents" },
            { words: ["those", "Who", "are"], correct: "Who are those" },
            { words: ["is", "sister", "She", "my"], correct: "She is my sister" },
            { words: ["is", "firefighter", "He", "a"], correct: "He is a firefighter" },
            { words: ["is", "what", "job", "her"], correct: "What is her job" },
            { words: ["manager", "a", "Mary", "is"], correct: "Mary is a manager" },
            { words: ["those", "Are", "siblings", "your"], correct: "Are those your siblings" },
            { words: ["uncle", "is", "He", "my"], correct: "He is my uncle" },
            { words: ["doctor", "Is", "your", "father", "a"], correct: "Is your father a doctor" },
            { words: ["are", "cousins", "my", "These"], correct: "These are my cousins" },
            { words: ["is", "brother", "my", "This"], correct: "This is my brother" },
            { words: ["teacher", "a", "She", "is"], correct: "She is a teacher" },
            { words: ["their", "What", "names", "are"], correct: "What are their names" },
            { words: ["names", "are", "Their", "Rose", "Peter", "and"], correct: "Their names are Rose and Peter" },
            { words: ["aunt", "is", "My", "happy"], correct: "My aunt is happy" },
            { words: ["gamer", "a", "is", "He"], correct: "He is a gamer" },
            { words: ["your", "Is", "mother", "artist", "an"], correct: "Is your mother an artist" },
            { words: ["this", "Who", "is"], correct: "Who is this" },
            { words: ["are", "These", "books", "my"], correct: "These are my books" },
            { words: ["bus", "driver", "is", "a", "He"], correct: "He is a bus driver" },
            { words: ["family", "love", "my", "I"], correct: "I love my family" },
            { words: ["is", "nephew", "That", "my"], correct: "That is my nephew" },
            { words: ["she", "Does", "have", "siblings"], correct: "Does she have siblings" },
            { words: ["YouTuber", "a", "is", "She"], correct: "She is a YouTuber" },
            { words: ["grandparents", "are", "Those", "my"], correct: "Those are my grandparents" },
            { words: ["is", "his", "This", "dog"], correct: "This is his dog" },
            { words: ["name", "its", "What", "is"], correct: "What is its name" },
            { words: ["cousins", "our", "are", "These"], correct: "These are our cousins" },
            { words: ["police", "officer", "He", "a", "is"], correct: "He is a police officer" },
            { words: ["singer", "Is", "sister", "your", "a"], correct: "Is your sister a singer" },
            { words: ["are", "friends", "those", "my"], correct: "Those are my friends" },
            { words: ["son", "is", "Your", "cousin", "uncle's", "your"], correct: "Your uncle's son is your cousin" },
            { words: ["work", "parents", "My", "at", "school", "a"], correct: "My parents work at a school" },
            { words: ["professional", "is", "a", "He", "gamer"], correct: "He is a professional gamer" },
            { words: ["baby", "The", "is", "sleeping"], correct: "The baby is sleeping" },
            { words: ["influencer", "She", "digital", "is", "a"], correct: "She is a digital influencer" },
            { words: ["these", "Who", "people", "are"], correct: "Who are these people" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES ---
        2: [
            { lines: ["She is my mother.", "Who is this?", "Her name is Mary.", "What is her name?"], order: [1, 0, 3, 2] },
            { lines: ["He is a firefighter.", "What does your father do?", "Wow! That is a cool job.", "Yes, he helps people every day."], order: [1, 0, 2, 3] },
            { lines: ["No, these are my siblings.", "Are these your cousins?", "I have one brother and one sister.", "How many siblings do you have?"], order: [1, 0, 3, 2] },
            { lines: ["He is my uncle, Bob.", "Who is that man over there?", "He is a bus driver.", "What is his job?"], order: [1, 0, 3, 2] },
            { lines: ["Yes, she is an artist.", "Is that your grandmother?", "Her pictures are beautiful!", "She paints very well."], order: [1, 0, 3, 2] },
            { lines: ["They are my grandparents.", "Who are those people in the photo?", "Their names are Rose and Peter.", "What are their names?"], order: [1, 0, 3, 2] },
            { lines: ["I am a YouTuber.", "What is your job?", "I make videos for the internet.", "That is very modern!"], order: [1, 0, 2, 3] },
            { lines: ["No, he is my nephew.", "Is this your son?", "His name is Leo.", "What is his name?"], order: [1, 0, 3, 2] },
            { lines: ["She is my aunt.", "Who is that woman?", "She is a doctor in a hospital.", "Does she work in a school?"], order: [1, 0, 3, 2] },
            { lines: ["They are my cousins.", "Are these your friends?", "We are a big family.", "Oh, I see!"], order: [1, 0, 2, 3] },
            { lines: ["He is a pro gamer.", "Does your brother work?", "Yes, he plays video games.", "That is a fun profession!"], order: [1, 2, 0, 3] },
            { lines: ["It is my dog's ball.", "Whose ball is this?", "Its name is Max.", "What is the dog's name?"], order: [1, 0, 3, 2] },
            { lines: ["This is my sister.", "Who is she?", "She is a student.", "Is she a teacher?"], order: [1, 0, 2, 3] },
            { lines: ["Yes, they are very nice.", "Are those your parents?", "Their names are John and Mary.", "What are their names?"], order: [1, 0, 3, 2] },
            { lines: ["No, it is my cousin's book.", "Is this your book?", "His name is Arthur.", "Who is your cousin?"], order: [1, 0, 3, 2] },
            { lines: ["He is a farmer.", "What does your grandfather do?", "He works with a tractor.", "That is hard work!"], order: [1, 0, 2, 3] },
            { lines: ["She is my niece.", "Who is that little girl?", "She is five years old.", "How old is she?"], order: [1, 0, 3, 2] },
            { lines: ["Yes, he is a police officer.", "Is your uncle a firefighter?", "He protects the city.", "No, he is not."], order: [1, 3, 0, 2] },
            { lines: ["They are digital influencers.", "What do your cousins do?", "They have many followers!", "Wow, they are famous."], order: [1, 0, 2, 3] },
            { lines: ["This is my family tree.", "What is this?", "These are my parents and grandparents.", "It is very big!"], order: [1, 0, 2, 3] },
            { lines: ["He is a chef.", "Does your brother cook?", "Yes, he works in a restaurant.", "I want to eat his food!"], order: [1, 2, 0, 3] },
            { lines: ["Those are my cousins.", "Who are those children?", "Are they from Brazil?", "Yes, they are."], order: [1, 0, 2, 3] },
            { lines: ["She is a manager.", "What is your mother's job?", "She works at a big company.", "She is very busy."], order: [1, 0, 2, 3] },
            { lines: ["He is my brother.", "Is this your friend?", "No, he isn't.", "His name is Paul."], order: [1, 2, 0, 3] },
            { lines: ["They are singers.", "What do your sisters do?", "They have a beautiful voice.", "That is fantastic!"], order: [1, 0, 2, 3] },
            { lines: ["This is my cat.", "Is that a dog?", "No, it isn't.", "Its name is Mimi."], order: [1, 2, 0, 3] },
            { lines: ["He is a bus driver.", "What does your uncle do?", "He drives a big bus.", "Is he a good driver?"], order: [1, 0, 2, 3] },
            { lines: ["Those are my siblings.", "Who are those people?", "I have two brothers.", "They are very tall!"], order: [1, 0, 2, 3] },
            { lines: ["He is a YouTuber.", "Is your cousin a gamer?", "No, he is a streamer.", "He is very funny."], order: [1, 2, 0, 3] },
            { lines: ["Yes, she is a student.", "Is your sister a teacher?", "No, she is not.", "She is at school."], order: [1, 2, 0, 3] },
            { lines: ["This is my aunt, Rose.", "Who is this woman?", "She is a doctor.", "What is her job?"], order: [1, 0, 3, 2] },
            { lines: ["No, these are my cousins.", "Are these your brothers?", "I am an only child.", "Oh, okay!"], order: [1, 0, 2, 3] },
            { lines: ["He is my grandfather.", "Is that old man your father?", "No, he isn't.", "He is very kind."], order: [1, 2, 0, 3] },
            { lines: ["She is an artist.", "What does your niece do?", "She paints beautiful pictures.", "Is she a professional?"], order: [1, 0, 2, 3] },
            { lines: ["They are my parents.", "Who are those two people?", "Their names are Arthur and Mary.", "They look very happy!"], order: [1, 0, 2, 3] },
            { lines: ["This is my nephew.", "Is this a baby?", "Yes, he is one year old.", "He is so small!"], order: [1, 2, 0, 3] },
            { lines: ["She is a police officer.", "What is your aunt's job?", "She protects the neighborhood.", "That is a brave job."], order: [1, 0, 2, 3] },
            { lines: ["Those are our teachers.", "Who are those people?", "Are they nice?", "Yes, they are great."], order: [1, 0, 2, 3] },
            { lines: ["No, it is my sister's book.", "Is this your book?", "Her name is Celine.", "She is a student."], order: [1, 0, 2, 3] },
            { lines: ["He is a gamer.", "Is your brother a pro athlete?", "No, he is a pro gamer.", "He plays every day."], order: [1, 2, 0, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS ---
        3: [
            { q: "Is this your mother?", options: ["Yes, she is.", "Yes, she are.", "Yes, she am.", "Yes, her is."], a: "Yes, she is." },
            { q: "Are those your parents?", options: ["No, they aren't.", "No, they isn't.", "No, they am not.", "No, them are not."], a: "No, they aren't." },
            { q: "Is he your brother?", options: ["Yes, he is.", "Yes, him is.", "Yes, he are.", "Yes, he am."], a: "Yes, he is." },
            { q: "Are these your cousins?", options: ["No, they aren't.", "No, us are not.", "No, they isn't.", "No, these is not."], a: "No, they aren't." },
            { q: "Is she a doctor?", options: ["Yes, she is.", "Yes, she be.", "Yes, she are.", "Yes, she am."], a: "Yes, she is." },
            { q: "Are they firefighters?", options: ["No, they aren't.", "No, they isn't.", "No, they am not.", "No, them are not."], a: "No, they aren't." },
            { q: "Is that your grandfather?", options: ["No, he isn't.", "Yes, it is.", "Yes, he are.", "Yes, him is."], a: "No, he isn't." },
            { q: "Are you a student?", options: ["Yes, I am.", "Yes, I is.", "Yes, I are.", "Yes, me is."], a: "Yes, I am." },
            { q: "Is your aunt a manager?", options: ["No, she isn't.", "No, she aren't.", "No, her is not.", "No, she not is."], a: "No, she isn't." },
            { q: "Are those siblings?", options: ["Yes, they are.", "Yes, they is.", "Yes, them are.", "Yes, they am."], a: "Yes, they are." },
            { q: "Is his name John?", options: ["Yes, it is.", "Yes, he am.", "Yes, name are.", "Yes, it are."], a: "Yes, it is." },
            { q: "Are your cousins influencers?", options: ["No, they aren't.", "No, they isn't.", "No, us are not.", "No, them are not."], a: "No, they aren't." },
            { q: "Is her job fun?", options: ["Yes, it is.", "Yes, she is.", "Yes, job are.", "Yes, its is."], a: "Yes, it is." },
            { q: "Are we a family?", options: ["Yes, we are.", "Yes, we is.", "Yes, us are.", "Yes, we am."], a: "Yes, we are." },
            { q: "Is that baby sleeping?", options: ["No, he isn't.", "No, he aren't.", "No, it am not.", "No, he not."], a: "No, he isn't." },
            { q: "Are these your books?", options: ["Yes, they are.", "Yes, these is.", "Yes, them are.", "Yes, it is."], a: "Yes, they are." },
            { q: "Is your uncle a bus driver?", options: ["Yes, he is.", "Yes, him is.", "Yes, he are.", "Yes, he be."], a: "Yes, he is." },
            { q: "Are they professional gamers?", options: ["No, they aren't.", "No, they am not.", "No, they isn't.", "No, them is not."], a: "No, they aren't." },
            { q: "Is this your sister?", options: ["No, she isn't.", "No, she aren't.", "No, her is not.", "No, she am not."], a: "No, she isn't." },
            { q: "Are those firefighters brave?", options: ["Yes, they are.", "Yes, them are.", "Yes, those is.", "Yes, they is."], a: "Yes, they are." },
            { q: "Who is this?", options: ["This is my mother.", "He is a blue car.", "Yes, it is.", "I am twelve years old."], a: "This is my mother." },
            { q: "What does your father do?", options: ["He is a firefighter.", "He is my father.", "Yes, he is.", "He is at home."], a: "He is a firefighter." },
            { q: "Are those your siblings?", options: ["Yes, my brother and sister.", "No, they are fruits.", "It is a book.", "His name is Bob."], a: "Yes, my brother and sister." },
            { q: "Is she a teacher?", options: ["Yes, she works at a school.", "No, she is a cat.", "She is from Japan.", "Blue is her favorite color."], a: "Yes, she works at a school." },
            { q: "Where do your parents work?", options: ["They work at a hospital.", "They are my parents.", "Yes, they do.", "They are forty years old."], a: "They work at a hospital." },
            { q: "Is this his dog?", options: ["Yes, its name is Max.", "No, he is a doctor.", "It is a colorful map.", "I am from Brazil."], a: "Yes, its name is Max." },
            { q: "Who are those people?", options: ["They are my grandparents.", "They are blue.", "Yes, it is.", "I am fourteen."], a: "They are my grandparents." },
            { q: "Is your cousin a YouTuber?", options: ["Yes, he makes videos.", "No, he is a tractor.", "His name is Australia.", "It is ten o'clock."], a: "Yes, he makes videos." },
            { q: "What is your job?", options: ["I am a student.", "I am from Canada.", "My father is a chef.", "Yes, I am."], a: "I am a student." },
            { q: "Is that baby your brother?", options: ["Yes, he is very small.", "No, it is a globe.", "She is my aunt.", "I love school."], a: "Yes, he is very small." },
            { q: "How many cousins do you have?", options: ["I have fifteen cousins.", "I am from England.", "My favorite color is red.", "Yes, I do."], a: "I have fifteen cousins." },
            { q: "Is your uncle a police officer?", options: ["Yes, he protects the city.", "No, he is a house.", "He is twelve years old.", "My name is Albert."], a: "Yes, he protects the city." },
            { q: "Are these your books?", options: ["Yes, they are for my class.", "No, they are students.", "I am fine, thanks.", "It is a happy dog."], a: "Yes, they are for my class." },
            { q: "Who is your favorite aunt?", options: ["My aunt Rose is my favorite.", "She is a bus driver.", "I have two aunts.", "Yes, she is."], a: "My aunt Rose is my favorite." },
            { q: "What is his profession?", options: ["He is an artist.", "He is my brother.", "He is from China.", "He is fourteen."], a: "He is an artist." },
            { q: "Is the baby crying?", options: ["No, he is sleeping.", "Yes, he is a teacher.", "It is a big world.", "From the lockers."], a: "No, he is sleeping." },
            { q: "Are those firefighters?", options: ["Yes, they put out fires.", "No, they are siblings.", "It is a map.", "I am ready."], a: "Yes, they put out fires." },
            { q: "Whose name is Arthur?", options: ["My grandfather's name is Arthur.", "He is a manager.", "Yes, it is.", "I am twelve."], a: "My grandfather's name is Arthur." },
            { q: "Is your niece a student?", options: ["Yes, she is in 1st grade.", "No, she is a doctor.", "She is from Japan.", "It is a colorful globe."], a: "Yes, she is in 1st grade." },
            { q: "Are you and your brother gamers?", options: ["Yes, we play every day.", "No, we are parents.", "We are from France.", "It is a blue book."], a: "Yes, we play every day." }
        ],
        
        // --- TYPE 4: FIND MEANING ---
        4: [
            { sent: "This is my **mother**. Her name is Mary.", word: "mother", options: ["Mãe", "Pai", "Irmã", "Tia"], a: "Mãe", def: "A female parent." },
            { sent: "Arthur is my **father**.", word: "father", options: ["Avô", "Pai", "Tio", "Primo"], a: "Pai", def: "A male parent." },
            { sent: "Do you have **siblings**?", word: "siblings", options: ["Pais", "Avós", "Irmãos (em geral)", "Primos"], a: "Irmãos (em geral)", def: "Brothers and sisters." },
            { sent: "My **grandfather** is 70 years old.", word: "grandfather", options: ["Tio", "Pai", "Avô", "Sobrinho"], a: "Avô", def: "The father of one's father or mother." },
            { sent: "Rose is my **grandmother**.", word: "grandmother", options: ["Mãe", "Avó", "Tia", "Sobrinha"], a: "Avó", def: "The mother of one's father or mother." },
            { sent: "He is a **firefighter**. He puts out fires.", word: "firefighter", options: ["Policial", "Bombeiro", "Médico", "Motorista"], a: "Bombeiro", def: "A person whose job is to extinguish fires." },
            { sent: "My aunt is a **manager** at a big company.", word: "manager", options: ["Professora", "Gerente", "Artista", "Cantora"], a: "Gerente", def: "A person responsible for controlling or administering a company." },
            { sent: "My brother is a professional **gamer**.", word: "gamer", options: ["Atleta", "Jogador de videogame", "Professor", "Médico"], a: "Jogador de videogame", def: "A person who plays video games, especially professionally." },
            { sent: "My uncle is a **bus driver**.", word: "bus driver", options: ["Motorista de ônibus", "Piloto", "Fazendeiro", "Policial"], a: "Motorista de ônibus", def: "A person who drives a bus." },
            { sent: "That girl is my **niece**.", word: "niece", options: ["Sobrinha", "Sobrinho", "Filha", "Tia"], a: "Sobrinha", def: "The daughter of one's brother or sister." },
            { sent: "She is a **singer**. Her voice is beautiful.", word: "singer", options: ["Dançarina", "Cantora", "Atriz", "Gerente"], a: "Cantora", def: "A person who sings, especially professionally." },
            { sent: "I **love** my family.", word: "love", options: ["Odeio", "Amo", "Trabalho", "Brinco"], a: "Amo", def: "To have a strong affection or liking for someone." },
            { sent: "My uncle is a **farmer**. He has a tractor.", word: "farmer", options: ["Médico", "Fazendeiro", "Artista", "Cantor"], a: "Fazendeiro", def: "A person who owns or manages a farm." },
            { sent: "She is a digital **influencer**.", word: "influencer", options: ["Professora", "Influenciadora", "Estudante", "Gerente"], a: "Influenciadora", def: "A person with the ability to influence potential buyers on social media." },
            { sent: "He is a **police officer**.", word: "police officer", options: ["Bombeiro", "Policial", "Motorista", "Cantor"], a: "Policial", def: "A member of a police force." },
            { sent: "My **cousin** is my uncle's son.", word: "cousin", options: ["Irmão", "Primo", "Sobrinho", "Avô"], a: "Primo", def: "The child of one's aunt or uncle." },
            { sent: "He is a **doctor** in a big hospital.", word: "doctor", options: ["Professor", "Médico", "Artista", "Gerente"], a: "Médico", def: "A qualified practitioner of medicine." },
            { sent: "The **baby** is sleeping.", word: "baby", options: ["Criança", "Bebê", "Adolescente", "Adulto"], a: "Bebê", def: "A very young child." },
            { sent: "She is a great **artist**. She paints pictures.", word: "artist", options: ["Cantora", "Artista", "Médica", "Gerente"], a: "Artista", def: "A person who produces paintings or drawings." },
            { sent: "I **have** two brothers.", word: "have", options: ["Sou", "Tenho", "Amo", "Moro"], a: "Tenho", def: "To possess, own, or hold." },
            { sent: "I **work** at a school.", word: "work", options: ["Brinco", "Trabalho", "Estudo", "Moro"], a: "Trabalho", def: "To do a job or activity to earn money." },
            { sent: "We **live** in Brazil.", word: "live", options: ["Trabalhamos", "Moramos", "Amamos", "Brincamos"], a: "Moramos", def: "To remain alive or have one's home in a place." },
            { sent: "My cousins **play** soccer.", word: "play", options: ["Trabalham", "Jogam/Brincam", "Estudam", "Moram"], a: "Jogam/Brincam", def: "To engage in activity for enjoyment or sport." },
            { sent: "Who is your **aunt**?", word: "aunt", options: ["Mãe", "Tia", "Avó", "Irmã"], a: "Tia", def: "The sister of one's father or mother." },
            { sent: "He is my **nephew**.", word: "nephew", options: ["Primo", "Sobrinho", "Tio", "Irmão"], a: "Sobrinho", def: "The son of one's brother or sister." },
            { sent: "They are my **parents**.", word: "parents", options: ["Parentes", "Pais", "Avós", "Irmãos"], a: "Pais", def: "A father or mother." },
            { sent: "Who is your **uncle**?", word: "uncle", options: ["Pai", "Tio", "Avô", "Irmão"], a: "Tio", def: "The brother of one's father or mother." },
            { sent: "She is a **YouTuber**.", word: "YouTuber", options: ["Cantora", "YouTuber", "Médica", "Professora"], a: "YouTuber", def: "A person who creates and uploads videos on YouTube." },
            { sent: "He is a **chef** in a restaurant.", word: "chef", options: ["Médico", "Chef / Cozinheiro", "Motorista", "Fazendeiro"], a: "Chef / Cozinheiro", def: "A professional cook." },
            { sent: "She is a **streamer**.", word: "streamer", options: ["Cantora", "Streamer", "Artista", "Gerente"], a: "Streamer", def: "A person who broadcasts themselves online." },
            { sent: "These are my **grandparents**.", word: "grandparents", options: ["Pais", "Avós", "Tios", "Primos"], a: "Avós", def: "The parents of one's father or mother." },
            { sent: "He is my **brother**.", word: "brother", options: ["Irmão", "Irmã", "Primo", "Tio"], a: "Irmão", def: "A man or boy in relation to other children of his parents." },
            { sent: "She is my **sister**.", word: "sister", options: ["Irmão", "Irmã", "Prima", "Tia"], a: "Irmã", def: "A woman or girl in relation to other children of her parents." },
            { sent: "This is a **family** tree.", word: "family", options: ["Escola", "Família", "Trabalho", "Cidade"], a: "Família", def: "A group consisting of parents and children." },
            { sent: "My **son** is ten years old.", word: "son", options: ["Filha", "Filho", "Irmão", "Pai"], a: "Filho", def: "A male child." },
            { sent: "My **daughter** is five.", word: "daughter", options: ["Filho", "Filha", "Irmã", "Mãe"], a: "Filha", def: "A female child." },
            { sent: "This is **my** book.", word: "my", options: ["Seu", "Meu", "Dele", "Dela"], a: "Meu", def: "Belonging to or associated with the speaker." },
            { sent: "Is this **your** phone?", word: "your", options: ["Meu", "Seu", "Nosso", "Deles"], a: "Seu", def: "Belonging to or associated with the person addressed." },
            { sent: "**His** name is Bob.", word: "his", options: ["Dela", "Dele", "Meu", "Seu"], a: "Dele", def: "Belonging to or associated with a male person." },
            { sent: "**Her** name is Mary.", word: "her", options: ["Dele", "Dela", "Nosso", "Seu"], a: "Dela", def: "Belonging to or associated with a female person." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE ---
        5: [
            { sent: "I **has** two sisters.", correct: "have" },
            { sent: "She **have** a brother.", correct: "has" },
            { sent: "They **has** a happy family.", correct: "have" },
            { sent: "He **work** at a hospital.", correct: "works" },
            { sent: "My cousins **plays** soccer.", correct: "play" },
            { sent: "This is **I** mother.", correct: "my" },
            { sent: "Is this **you** phone?", correct: "your" },
            { sent: "**He** name is Albert.", correct: "His" },
            { sent: "**She** sister is nice.", correct: "Her" },
            { sent: "The cat is hungry. **It** food is here.", correct: "Its" },
            { sent: "**We** school is big.", correct: "Our" },
            { sent: "**They** parents are teachers.", correct: "Their" },
            { sent: "This is my father. **Her** name is John.", correct: "His" },
            { sent: "This is my mother. **His** name is Mary.", correct: "Her" },
            { sent: "We are brothers. **Your** parents are nice.", correct: "Our" },
            { sent: "**That** are my books here.", correct: "These" },
            { sent: "**This** are my cousins over there.", correct: "Those" },
            { sent: "Those **is** my brother.", correct: "That" },
            { sent: "These **is** my sister.", correct: "This" },
            { sent: "Who is **that** person here?", correct: "this" },
            { sent: "Who are **these** people far away?", correct: "those" },
            { sent: "**This** books are interesting.", correct: "These" },
            { sent: "**That** children are playing.", correct: "Those" },
            { sent: "He is a **firefight**.", correct: "firefighter" },
            { sent: "She is a **sing**.", correct: "singer" },
            { sent: "My uncle is a **bus drive**.", correct: "bus driver" },
            { sent: "My aunt is a **manage**.", correct: "manager" },
            { sent: "He is a **pro game**.", correct: "pro gamer" },
            { sent: "She is a **digital influence**.", correct: "digital influencer" },
            { sent: "Arthur is my **grandfather's**.", correct: "grandfather" },
            { sent: "Rose is my **grandmother's**.", correct: "grandmother" },
            { sent: "They are my **parent**.", correct: "parents" },
            { sent: "I have two **sibling**.", correct: "siblings" },
            { sent: "He is my **nephews**.", correct: "nephew" },
            { sent: "She is my **nieces**.", correct: "niece" },
            { sent: "Your uncle's son is your **brother**.", correct: "cousin" },
            { sent: "Your father's wife is your **aunt**.", correct: "mother" },
            { sent: "The baby **are** sleeping.", correct: "is" },
            { sent: "My parents **is** teachers.", correct: "are" },
            { sent: "**Who** is your job?", correct: "What" }
        ],

        
        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Group 1: Question to Answer
            { pairs: [{a: "Who is this?", b: "This is my mother."}, {a: "What is her name?", b: "Her name is Mary."}, {a: "Who are these people?", b: "These are my parents."}, {a: "What are their names?", b: "Their names are Rose and Peter."}, {a: "Who is that man?", b: "That is my grandfather."}] },
            // Group 2: Question to Answer
            { pairs: [{a: "What does your father do?", b: "He is a manager."}, {a: "Is she a teacher?", b: "Yes, she works at a school."}, {a: "What is his job?", b: "He is a pro gamer."}, {a: "Are they firefighters?", b: "Yes, they put out fires."}, {a: "Does he have a tractor?", b: "Yes, he is a farmer."}] },
            // Group 3: Question to Answer
            { pairs: [{a: "Is this your phone?", b: "No, it is my sister's phone."}, {a: "Are those your books?", b: "Yes, they are mine."}, {a: "Whose dog is this?", b: "It is my uncle's dog."}, {a: "Who is that girl?", b: "She is my niece."}, {a: "Is the baby sleeping?", b: "Yes, he is in the bedroom."}] },
            // Group 4: Question to Answer
            { pairs: [{a: "How many siblings do you have?", b: "I have one brother."}, {a: "Who is your father's wife?", b: "She is my mother."}, {a: "Is your aunt a doctor?", b: "No, she is an artist."}, {a: "Where do your parents work?", b: "They work at a big company."}, {a: "Are you a digital influencer?", b: "No, I am a YouTuber."}] },
            // Group 5: Question to Answer
            { pairs: [{a: "Who is your uncle's son?", b: "He is my cousin."}, {a: "Are these your cousins?", b: "Yes, they are my aunt's children."}, {a: "What do you do?", b: "I am a student."}, {a: "Who is that woman?", b: "She is my grandmother."}, {a: "Is he a bus driver?", b: "Yes, he drives a big bus."}] },
            // Group 6: Question to Answer
            { pairs: [{a: "Is his name Bob?", b: "Yes, he is my uncle."}, {a: "Who are those children?", b: "They are my siblings."}, {a: "Does she have a beautiful voice?", b: "Yes, she is a singer."}, {a: "What is the baby's name?", b: "His name is Leo."}, {a: "Is he a police officer?", b: "Yes, he protects the city."}] },
            // Group 7: Question to Answer
            { pairs: [{a: "Who is your mother's brother?", b: "He is my uncle."}, {a: "Are you twins?", b: "No, she is twelve and I am fourteen."}, {a: "What is your profession?", b: "I am a pro gamer."}, {a: "Who is that old man?", b: "He is my grandfather."}, {a: "Are those your friends?", b: "Yes, they are from my school."}] },
            // Group 8: Question to Answer
            { pairs: [{a: "Is this your family tree?", b: "Yes, look at my parents."}, {a: "Who is her brother?", b: "He is my uncle."}, {a: "What does a manager do?", b: "A manager controls a company."}, {a: "Are these your siblings?", b: "No, they are my cousins."}, {a: "Is your grandfather a farmer?", b: "Yes, he lives on a farm."}] },
            // Group 9: Question to Answer
            { pairs: [{a: "Who is the person in the photo?", b: "It is my nephew."}, {a: "Is he a pro athlete?", b: "No, he is a pro gamer."}, {a: "What is your aunt's job?", b: "She is a police officer."}, {a: "Are you a streamer?", b: "Yes, I broadcast online."}, {a: "Who are those two people?", b: "They are my parents."}] },
            // Group 10: Question to Answer
            { pairs: [{a: "Does your brother help people?", b: "Yes, he is a firefighter."}, {a: "What is that object?", b: "It is my sister's camera."}, {a: "Who is Mary?", b: "She is my mother."}, {a: "Are you happy?", b: "Yes, I love my family."}, {a: "Is that a firefighter?", b: "No, he is a police officer."}] },

            // Group 11: 1st half to 2nd half
            { pairs: [{a: "This is...", b: "...my mother Mary."}, {a: "That is...", b: "...my father Arthur."}, {a: "These are...", b: "...my cousins from Brazil."}, {a: "Those are...", b: "...my grandparents in the photo."}, {a: "He is...", b: "...a very good student."}] },
            // Group 12: 1st half to 2nd half
            { pairs: [{a: "My brother...", b: "...is a pro gamer."}, {a: "My sister...", b: "...is a talented singer."}, {a: "My parents...", b: "...work at a school."}, {a: "My uncle...", b: "...is a brave firefighter."}, {a: "My aunt...", b: "...is a professional artist."}] },
            // Group 13: 1st half to 2nd half
            { pairs: [{a: "His name...", b: "...is Bob and he is my uncle."}, {a: "Her job...", b: "...is to manage a company."}, {a: "Their house...", b: "...is very big and beautiful."}, {a: "Our family...", b: "...is very happy together."}, {a: "Its name...", b: "...is Max and it is a nice dog."}] },
            // Group 14: 1st half to 2nd half
            { pairs: [{a: "A firefighter...", b: "...puts out fires."}, {a: "A doctor...", b: "...helps sick people."}, {a: "A police officer...", b: "...protects the neighborhood."}, {a: "A YouTuber...", b: "...makes videos for the internet."}, {a: "A bus driver...", b: "...drives people to school."}] },
            // Group 15: 1st half to 2nd half
            { pairs: [{a: "My cousin is...", b: "...my aunt's son."}, {a: "My nephew is...", b: "...my brother's son."}, {a: "My niece is...", b: "...my sister's daughter."}, {a: "My grandfather is...", b: "...my father's father."}, {a: "My grandmother is...", b: "...my mother's mother."}] },
            // Group 16: 1st half to 2nd half
            { pairs: [{a: "I love...", b: "...my family very much."}, {a: "I have...", b: "...one brother and two sisters."}, {a: "I work...", b: "...at a big hospital."}, {a: "I live...", b: "...with my parents in Canada."}, {a: "I play...", b: "...video games with my cousins."}] },
            // Group 17: 1st half to 2nd half
            { pairs: [{a: "This brother...", b: "...is very funny."}, {a: "That manager...", b: "...is my aunt."}, {a: "These influencers...", b: "...are very famous."}, {a: "Those farmers...", b: "...have a big tractor."}, {a: "The baby...", b: "...is sleeping now."}] },
            // Group 18: 1st half to 2nd half
            { pairs: [{a: "What does...", b: "...your mother do?"}, {a: "Who is...", b: "...that man over there?"}, {a: "Where do...", b: "...your parents work?"}, {a: "How many...", b: "...siblings do you have?"}, {a: "Is she...", b: "...an artist or a singer?"}] },
            // Group 19: 1st half to 2nd half
            { pairs: [{a: "His uncle...", b: "...is a bus driver."}, {a: "Her aunt...", b: "...is a doctor."}, {a: "Their son...", b: "...is my cousin."}, {a: "Our teacher...", b: "...is very kind."}, {a: "Your daughter...", b: "...is a student."}] },
            // Group 20: 1st half to 2nd half
            { pairs: [{a: "A pro gamer...", b: "...plays games professionally."}, {a: "A digital influencer...", b: "...has many followers."}, {a: "A manager...", b: "...controls a business."}, {a: "A farmer...", b: "...works with animals."}, {a: "A chef...", b: "...cooks delicious food."}] },

            // Group 21: English to Portuguese
            { pairs: [{a: "This is my mother.", b: "Esta é minha mãe."}, {a: "That is my father.", b: "Aquele é meu pai."}, {a: "These are my siblings.", b: "Estes são meus irmãos."}, {a: "Those are my grandparents.", b: "Aqueles são meus avós."}, {a: "Who is this?", b: "Quem é este/esta?"}] },
            // Group 22: English to Portuguese
            { pairs: [{a: "His name is Bob.", b: "O nome dele é Bob."}, {a: "Her job is difficult.", b: "O trabalho dela é difícil."}, {a: "Their names are Rose.", b: "Os nomes deles são Rose..."}, {a: "Our family is big.", b: "Nossa família é grande."}, {a: "Its name is Max.", b: "O nome dele (animal) é Max."}] },
            // Group 23: English to Portuguese
            { pairs: [{a: "Firefighter", b: "Bombeiro"}, {a: "Police officer", b: "Policial"}, {a: "Bus driver", b: "Motorista de ônibus"}, {a: "Manager", b: "Gerente"}, {a: "Doctor", b: "Médico"}] },
            // Group 24: English to Portuguese
            { pairs: [{a: "YouTuber", b: "YouTuber"}, {a: "Pro gamer", b: "Jogador profissional"}, {a: "Digital influencer", b: "Influenciador digital"}, {a: "Streamer", b: "Streamer"}, {a: "Artist", b: "Artista"}] },
            // Group 25: English to Portuguese
            { pairs: [{a: "Nephew", b: "Sobrinho"}, {a: "Niece", b: "Sobrinha"}, {a: "Cousin", b: "Primo(a)"}, {a: "Grandson", b: "Neto"}, {a: "Uncle", b: "Tio"}] },
            // Group 26: English to Portuguese
            { pairs: [{a: "He is a farmer.", b: "Ele é um fazendeiro."}, {a: "She is a singer.", b: "Ela é uma cantora."}, {a: "My aunt is a chef.", b: "Minha tia é uma chef."}, {a: "What does he do?", b: "O que ele faz?"}, {a: "Is she a teacher?", b: "Ela é uma professora?"}] },
            // Group 27: English to Portuguese
            { pairs: [{a: "This book is mine.", b: "Este livro é meu."}, {a: "That phone is hers.", b: "Aquele telefone é dela."}, {a: "These photos are theirs.", b: "Estas fotos são deles."}, {a: "Those children are ours.", b: "Aquelas crianças são nossas."}, {a: "Is this your brother?", b: "Este é seu irmão?"}] },
            // Group 28: English to Portuguese
            { pairs: [{a: "The baby is sleeping.", b: "O bebê está dormindo."}, {a: "My father works hard.", b: "Meu pai trabalha duro."}, {a: "I love my cousins.", b: "Eu amo meus primos."}, {a: "We play soccer.", b: "Nós jogamos futebol."}, {a: "Who are those people?", b: "Quem são aquelas pessoas?"}] },
            // Group 29: English to Portuguese
            { pairs: [{a: "Family tree", b: "Árvore genealógica"}, {a: "Neighborhood", b: "Bairro/Vizinhança"}, {a: "Company", b: "Empresa"}, {a: "Profession", b: "Profissão"}, {a: "Siblings", b: "Irmãos (em geral)"}] },
            // Group 30: English to Portuguese
            { pairs: [{a: "He is a pro athlete.", b: "Ele é um atleta profissional."}, {a: "She makes videos.", b: "Ela faz vídeos."}, {a: "He drives a tractor.", b: "Ele dirige um trator."}, {a: "They help people.", b: "Eles ajudam pessoas."}, {a: "It is a cool job.", b: "É um trabalho legal."}] },

            // Group 31: Word to Definition (Portuguese)
            { pairs: [{a: "Father", b: "O progenitor masculino."}, {a: "Mother", b: "A progenitora feminina."}, {a: "Siblings", b: "Seus irmãos e irmãs."}, {a: "Parents", b: "Seu pai e sua mãe."}, {a: "Grandparents", b: "O pai e a mãe de seus pais."}] },
            // Group 32: Word to Definition (Portuguese)
            { pairs: [{a: "Uncle", b: "O irmão do seu pai ou mãe."}, {a: "Aunt", b: "A irmã do seu pai ou mãe."}, {a: "Cousin", b: "O filho ou filha de seu tio."}, {a: "Nephew", b: "O filho do seu irmão/irmã."}, {a: "Niece", b: "A filha do seu irmão/irmã."}] },
            // Group 33: Word to Definition (Portuguese)
            { pairs: [{a: "Firefighter", b: "Pessoa que apaga incêndios."}, {a: "Police officer", b: "Pessoa que protege a cidade."}, {a: "Doctor", b: "Pessoa que cuida de doentes."}, {a: "Nurse", b: "Pessoa que ajuda o médico."}, {a: "Professional", b: "Faz um trabalho como carreira."}] },
            // Group 34: Word to Definition (Portuguese)
            { pairs: [{a: "YouTuber", b: "Cria vídeos para o YouTube."}, {a: "Digital influencer", b: "Influencia seguidores online."}, {a: "Streamer", b: "Transmite ao vivo na internet."}, {a: "Pro gamer", b: "Joga profissionalmente."}, {a: "Gamer", b: "Gosta de jogar videogames."}] },
            // Group 35: Word to Definition (Portuguese)
            { pairs: [{a: "Manager", b: "Controla ou administra empresa."}, {a: "Teacher", b: "Ensina alunos em uma escola."}, {a: "Artist", b: "Cria pinturas ou desenhos."}, {a: "Singer", b: "Pessoa que canta."}, {a: "Chef", b: "Cozinheiro em restaurante."}] },
            // Group 36: Word to Definition (Portuguese)
            { pairs: [{a: "Farmer", b: "Cuida de fazenda e animais."}, {a: "Bus driver", b: "Dirige ônibus para passageiros."}, {a: "Pilot", b: "Pessoa que pilota aviões."}, {a: "Worker", b: "Alguém que realiza uma tarefa."}, {a: "Driver", b: "Pessoa que dirige um veículo."}] },
            // Group 37: Word to Definition (Portuguese)
            { pairs: [{a: "My", b: "Pertence a mim (Meu/Minha)."}, {a: "Your", b: "Pertence a você (Seu/Sua)."}, {a: "His", b: "Pertence a ele (Dele)."}, {a: "Her", b: "Pertence a ela (Dela)."}, {a: "Its", b: "Pertence a animal ou objeto."}] },
            // Group 38: Word to Definition (Portuguese)
            { pairs: [{a: "Our", b: "Pertence a nós (Nosso/Nossa)."}, {a: "Your (plural)", b: "Pertence a vocês (De vocês)."}, {a: "Their", b: "Pertence a eles ou elas."}, {a: "Belonging to", b: "Estar associado ou ser de algo."}, {a: "Ownership", b: "O ato de possuir algo."}] },
            // Group 39: Word to Definition (Portuguese)
            { pairs: [{a: "This", b: "Uma coisa que está perto."}, {a: "That", b: "Uma coisa que está longe."}, {a: "These", b: "...várias coisas perto."}, {a: "Those", b: "...várias coisas longe."}, {a: "Near and Far", b: "Conceitos de distância."}] },
            // Group 40: Word to Definition (Portuguese)
            { pairs: [{a: "Love", b: "Gostar muito de alguém."}, {a: "Have", b: "Possuir ou ter algo."}, {a: "Work", b: "Realizar atividade por dinheiro."}, {a: "Play", b: "Divertir-se com jogos."}, {a: "Baby", b: "Criança que ainda não fala."}] }
        ],
        
        
        // --- TYPE 7: BEST ANSWER (WH QUESTIONS) ---
        7: [
            { q: "Who is this woman in the photo?", options: ["She is my mother.", "It is a colorful map.", "I am from Canada.", "Yes, she is."], a: "She is my mother." },
            { q: "What is his job?", options: ["He is fifteen.", "He is a firefighter.", "In the hallway.", "His name is Bob."], a: "He is a firefighter." },
            { q: "Where do your grandparents live?", options: ["They are Rose and Peter.", "They live in Brazil.", "They are sixty years old.", "No, they aren't."], a: "They live in Brazil." },
            { q: "Who are those children?", options: ["They are my cousins.", "It is a blue locker.", "In the classroom.", "They are fine, thanks."], a: "They are my cousins." },
            { q: "What does your aunt do?", options: ["She is my father's sister.", "She is a manager.", "At the park.", "She is very happy."], a: "She is a manager." },
            { q: "How old is your nephew?", options: ["His name is Leo.", "He is five years old.", "He is a student.", "He is my brother's son."], a: "He is five years old." },
            { q: "Who is the man with the tractor?", options: ["That is a big tractor.", "That is my uncle.", "He is from Germany.", "On the farm."], a: "That is my uncle." },
            { q: "What are their names?", options: ["They are from England.", "Their names are Rose and Peter.", "They are my grandparents.", "Yes, they are."], a: "Their names are Rose and Peter." },
            { q: "Where is your brother now?", options: ["He is a pro gamer.", "He is in his bedroom.", "His name is Paul.", "He is twelve."], a: "He is in his bedroom." },
            { q: "Who is that girl near the lockers?", options: ["She is my sister.", "It is a new book.", "She is fifteen.", "From Australia."], a: "She is my sister." },
            { q: "What is your mother's profession?", options: ["She is Mary.", "She is an artist.", "At a big company.", "She is my father's wife."], a: "She is an artist." },
            { q: "How old are your siblings?", options: ["I have two siblings.", "They are ten and twelve.", "They are students.", "Their names are John and Sara."], a: "They are ten and twelve." },
            { q: "Who makes videos for the internet?", options: ["A police officer.", "A YouTuber.", "A farmer.", "A manager."], a: "A YouTuber." },
            { q: "What are these?", options: ["I am fine.", "These are my family photos.", "They are my cousins.", "Near the door."], a: "These are my family photos." },
            { q: "Where does the doctor work?", options: ["He helps people.", "He works in a hospital.", "He is a professional.", "His name is Arthur."], a: "He works in a hospital." },
            { q: "Who is your cousin?", options: ["He is my uncle's son.", "He is twelve years old.", "He is from Japan.", "He is a gamer."], a: "He is my uncle's son." },
            { q: "What is her job in the restaurant?", options: ["She is a singer.", "She is a chef.", "She is from Italy.", "She is Mary."], a: "She is a chef." },
            { q: "How old is the baby?", options: ["He is very small.", "He is one year old.", "His name is Paul.", "Yes, he is sleeping."], a: "He is one year old." },
            { q: "Who protects the city?", options: ["A bus driver.", "A police officer.", "A YouTuber.", "An artist."], a: "A police officer." },
            { q: "What color are your books?", options: ["They are in my locker.", "They are blue and red.", "They are new books.", "I have five books."], a: "They are blue and red." },
            { q: "Where are those students?", options: ["They are my friends.", "They are in the hallway.", "They are fifteen.", "No, they aren't."], a: "They are in the hallway." },
            { q: "Who is your father's mother?", options: ["She is my aunt.", "She is my grandmother.", "She is sixty years old.", "She is an artist."], a: "She is my grandmother." },
            { q: "What does a firefighter do?", options: ["He drives a bus.", "He puts out fires.", "He is very brave.", "He works at a school."], a: "He puts out fires." },
            { q: "How old is your grandfather?", options: ["He is a farmer.", "He is seventy years old.", "His name is Peter.", "He is from Brazil."], a: "He is seventy years old." },
            { q: "Who is the woman painting a picture?", options: ["It is a beautiful picture.", "That is my aunt, the artist.", "In the classroom.", "She is fine, thanks."], a: "That is my aunt, the artist." },
            { q: "What are those people doing?", options: ["They are my grandparents.", "They are chatting in the hallway.", "They are sixty years old.", "From Australia."], a: "They are chatting in the hallway." },
            { q: "Where is his new dog?", options: ["Its name is Max.", "It is in the yard.", "It is a small dog.", "Yes, it is."], a: "It is in the yard." },
            { q: "Who is your favorite digital influencer?", options: ["She has many followers.", "My favorite is Sara.", "On the internet.", "She is fifteen."], a: "My favorite is Sara." },
            { q: "What is the name of your neighborhood?", options: ["It is near the school.", "It is Green Garden.", "I live with my parents.", "It is a nice place."], a: "It is Green Garden." },
            { q: "How old is your sister?", options: ["She is a student.", "She is twelve.", "Her name is Celine.", "She is from Canada."], a: "She is twelve." },
            { q: "Who is the boy playing video games?", options: ["He is a pro gamer.", "That is my brother, Paul.", "In his bedroom.", "Yes, he is."], a: "That is my brother, Paul." },
            { q: "What is her favorite book?", options: ["She is a student.", "Her favorite book is about the world.", "It is on the table.", "From the library."], a: "Her favorite book is about the world." },
            { q: "Where is the bus driver?", options: ["He is a good driver.", "He is on the bus.", "His name is Bob.", "He is my uncle."], a: "He is on the bus." },
            { q: "How old are your cousins?", options: ["They are from Japan.", "They are ten and fourteen.", "They are my aunt's sons.", "They are students."], a: "They are ten and fourteen." },
            { q: "Who is talking on the internet?", options: ["In the classroom.", "That is the streamer.", "Yes, he is.", "It is a funny video."], a: "That is the streamer." },
            { q: "What is in that photo?", options: ["It is my family tree.", "I am fine, thanks.", "They are my parents.", "From Brazil."], a: "It is my family tree." },
            { q: "Where do you live?", options: ["I live with my family.", "I live in London.", "I am twelve years old.", "I am a student."], a: "I live in London." },
            { q: "How old is the baby girl?", options: ["She is my niece.", "She is six months old.", "Her name is Mary.", "She is sleeping."], a: "She is six months old." },
            { q: "Who is your uncle's wife?", options: ["She is my mother.", "She is my aunt.", "She is a manager.", "She is from Spain."], a: "She is my aunt." },
            { q: "What is that sound in the kitchen?", options: ["It is my mother, the chef.", "The kitchen is big.", "From the hallway.", "Yes, I hear it."], a: "It is my mother, the chef." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY ---
        8: [
            { sent: "My mother is an **artist**; she works in a big hospital and helps sick people.", wrong: "artist", options: ["manager", "doctor", "singer", "farmer"], a: "doctor" },
            { sent: "Arthur is my **grandmother**; he is a nice man.", wrong: "grandmother", options: ["mother", "grandfather", "sister", "aunt"], a: "grandfather" },
            { sent: "The firefighter uses a **tractor** to put out fires.", wrong: "tractor", options: ["bus", "hose/water", "book", "globe"], a: "hose/water" },
            { sent: "I have two **parents**; one brother and one sister.", wrong: "parents", options: ["cousins", "siblings", "grandparents", "uncles"], a: "siblings" },
            { sent: "My aunt is a **bus driver**; she manages a big company.", wrong: "bus driver", options: ["police officer", "manager", "doctor", "YouTuber"], a: "manager" },
            { sent: "My brother is a pro **farmer**; he plays video games for a living.", wrong: "farmer", options: ["artist", "gamer", "manager", "doctor"], a: "gamer" },
            { sent: "That baby is my **grandfather**; he is only one year old.", wrong: "grandfather", options: ["uncle", "nephew", "father", "parent"], a: "nephew" },
            { sent: "The **manager** drives a big bus for the school.", wrong: "manager", options: ["firefighter", "bus driver", "farmer", "artist"], a: "bus driver" },
            { sent: "Look at my **family tree**; it shows all the animals in the world.", wrong: "family tree", options: ["map", "people/members", "locker", "bell"], a: "map" },
            { sent: "My sister is a **police officer**; she sings beautiful songs.", wrong: "police officer", options: ["manager", "singer", "farmer", "doctor"], a: "singer" },
            { sent: "Your father's brother is your **niece**.", wrong: "niece", options: ["aunt", "uncle", "cousin", "mother"], a: "uncle" },
            { sent: "The **doctor** works on a farm with many animals.", wrong: "doctor", options: ["manager", "farmer", "singer", "artist"], a: "farmer" },
            { sent: "This is my **son**; she is a very nice girl.", wrong: "son", options: ["brother", "daughter", "father", "nephew"], a: "daughter" },
            { sent: "The **influencer** protects the city from bad people.", wrong: "influencer", options: ["artist", "police officer", "YouTuber", "chef"], a: "police officer" },
            { sent: "My **cousin** is my brother's daughter.", wrong: "cousin", options: ["nephew", "niece", "aunt", "mother"], a: "niece" },
            { sent: "The **artist** cooks delicious food in a restaurant.", wrong: "artist", options: ["manager", "chef", "farmer", "doctor"], a: "chef" },
            { sent: "Your mother's sister is your **uncle**.", wrong: "uncle", options: ["father", "aunt", "brother", "nephew"], a: "aunt" },
            { sent: "He is a **streamer**; he paints beautiful pictures on canvas.", wrong: "streamer", options: ["manager", "artist", "farmer", "police officer"], a: "artist" },
            { sent: "My **niece** is my sister's son.", wrong: "niece", options: ["cousin", "nephew", "uncle", "brother"], a: "nephew" },
            { sent: "The **YouTube** helps sick people in the hospital.", wrong: "YouTube", options: ["manager", "doctor", "artist", "farmer"], a: "doctor" },
            { sent: "I love my **parents**; they are my aunt and uncle.", wrong: "parents", options: ["grandparents", "relatives/family", "siblings", "teachers"], a: "relatives/family" },
            { sent: "The **manager** grows corn and has many cows.", wrong: "manager", options: ["doctor", "farmer", "artist", "singer"], a: "farmer" },
            { sent: "This is my **grandfather**; she is my mother's mother.", wrong: "grandfather", options: ["father", "grandmother", "aunt", "sister"], a: "grandmother" },
            { sent: "He is a **police officer**; he drives a tractor on the farm.", wrong: "police officer", options: ["manager", "farmer", "chef", "doctor"], a: "farmer" },
            { sent: "My **brother** is my female sibling.", wrong: "brother", options: ["cousin", "sister", "mother", "aunt"], a: "sister" },
            { sent: "The **singer** manages a team of workers in an office.", wrong: "singer", options: ["artist", "manager", "farmer", "doctor"], a: "manager" },
            { sent: "Your aunt's daughter is your **brother**.", wrong: "brother", options: ["nephew", "cousin", "uncle", "father"], a: "cousin" },
            { sent: "The **farmer** puts out fires in the neighborhood.", wrong: "farmer", options: ["manager", "firefighter", "doctor", "artist"], a: "firefighter" },
            { sent: "My **niece** is my brother's son.", wrong: "niece", options: ["cousin", "nephew", "uncle", "father"], a: "nephew" },
            { sent: "The **doctor** makes funny videos for her followers.", wrong: "doctor", options: ["manager", "digital influencer/YouTuber", "farmer", "artist"], a: "digital influencer/YouTuber" },
            { sent: "This is my **uncle**; she is my father's sister.", wrong: "uncle", options: ["brother", "aunt", "cousin", "mother"], a: "aunt" },
            { sent: "The **chef** protects the city and wears a blue uniform.", wrong: "chef", options: ["artist", "police officer", "manager", "farmer"], a: "police officer" },
            { sent: "My **siblings** are my father and mother.", wrong: "siblings", options: ["grandparents", "parents", "cousins", "uncles"], a: "parents" },
            { sent: "The **manager** paints portraits of famous people.", wrong: "manager", options: ["doctor", "artist", "farmer", "singer"], a: "artist" },
            { sent: "Your father's father is your **uncle**.", wrong: "uncle", options: ["brother", "grandfather", "nephew", "cousin"], a: "grandfather" },
            { sent: "The **YouTuber** works in a restaurant and makes pizza.", wrong: "YouTuber", options: ["manager", "chef", "doctor", "farmer"], a: "chef" },
            { sent: "My **cousin** is my mother's sister.", wrong: "cousin", options: ["niece", "aunt", "grandmother", "parent"], a: "aunt" },
            { sent: "The **firefighter** drives a bus for the city.", wrong: "firefighter", options: ["doctor", "bus driver", "artist", "farmer"], a: "bus driver" },
            { sent: "This is my **nephew**; she is my sister's daughter.", wrong: "nephew", options: ["brother", "niece", "cousin", "aunt"], a: "niece" },
            { sent: "The **police officer** creates videos about video games.", wrong: "police officer", options: ["manager", "YouTuber/Gamer", "farmer", "doctor"], a: "YouTuber/Gamer" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 items) ---
        9: [
            { audio: "Who is this?", options: ["This is my mother.", "It is a blue book.", "I am from Canada.", "Ten plus ten is twenty."], a: "This is my mother." },
            { audio: "What is her job?", options: ["She is a manager.", "Her name is Mary.", "She is from Spain.", "No, she isn't."], a: "She is a manager." },
            { audio: "Who are those people?", options: ["They are my grandparents.", "It is a colorful map.", "I am fine, thanks.", "From the hallway."], a: "They are my grandparents." },
            { audio: "Is he a firefighter?", options: ["Yes, he is.", "He is twelve.", "My name is Bob.", "It is a big tractor."], a: "Yes, he is." },
            { audio: "What are their names?", options: ["They are from Japan.", "Their names are Rose and Peter.", "Yes, they are.", "In the classroom."], a: "Their names are Rose and Peter." },
            { audio: "Who is that man over there?", options: ["It is a new locker.", "That is my uncle.", "I am fourteen.", "From Brazil."], a: "That is my uncle." },
            { audio: "Is she an artist?", options: ["No, she is a doctor.", "Her name is Celine.", "From Australia.", "It is blue."], a: "No, she is a doctor." },
            { audio: "What does your father do?", options: ["He is my father.", "He is a police officer.", "Yes, he does.", "He is forty years old."], a: "He is a police officer." },
            { audio: "Are these your siblings?", options: ["Yes, my brother and sister.", "No, they are fruits.", "It is ten o'clock.", "From England."], a: "Yes, my brother and sister." },
            { audio: "Who is the boy in the photo?", options: ["It is a globe.", "He is my nephew.", "I am twelve.", "Near the door."], a: "He is my nephew." },
            { audio: "Is your aunt a singer?", options: ["Yes, she has a beautiful voice.", "No, she is a bus.", "From Spain.", "Her name is Rose."], a: "Yes, she has a beautiful voice." },
            { audio: "What is his profession?", options: ["He is fifteen.", "He is a pro gamer.", "His name is Paul.", "In the hallway."], a: "He is a pro gamer." },
            { audio: "Who are you talking to?", options: ["From Canada.", "I am talking to my cousin.", "It is a cat.", "Yes, I am."], a: "I am talking to my cousin." },
            { audio: "Is that baby your brother?", options: ["Yes, he is very small.", "No, it is a map.", "She is my aunt.", "I love school."], a: "Yes, he is very small." },
            { audio: "Where do your parents work?", options: ["They are my parents.", "They work at a hospital.", "Yes, they do.", "They are forty."], a: "They work at a hospital." },
            { audio: "Whose book is this?", options: ["It is my sister's book.", "He is a student.", "Blue is a color.", "In the classroom."], a: "It is my sister's book." },
            { audio: "Who makes videos for YouTube?", options: ["A police officer.", "A YouTuber.", "A farmer.", "A manager."], a: "A YouTuber." },
            { audio: "Are those your cousins?", options: ["Yes, they are.", "It is a colorful globe.", "I am fine, thanks.", "From the hallway."], a: "Yes, they are." },
            { audio: "What is the dog's name?", options: ["It is a big dog.", "Its name is Max.", "He is from Italy.", "Yes, it is."], a: "Its name is Max." },
            { audio: "Who is the manager of the company?", options: ["It is a big company.", "My aunt is the manager.", "In the city.", "She is forty."], a: "My aunt is the manager." },
            { audio: "Is he a bus driver?", options: ["Yes, he drives for the school.", "No, he is a car.", "His name is Bob.", "He is fourteen."], a: "Yes, he drives for the school." },
            { audio: "Who is your father's brother?", options: ["She is my mother.", "He is my uncle.", "From Canada.", "It is blue."], a: "He is my uncle." },
            { audio: "What do digital influencers do?", options: ["They help sick people.", "They influence followers online.", "They drive tractors.", "They put out fires."], a: "They influence followers online." },
            { audio: "Is that woman an artist?", options: ["No, she is a police officer.", "Yes, it is a picture.", "She is from Japan.", "My name is Sara."], a: "No, she is a police officer." },
            { audio: "Who are your siblings?", options: ["They are Albert and Celine.", "They are my brother and sister.", "They are in the hallway.", "They are from Italy."], a: "They are my brother and sister." },
            { audio: "What is his favorite video game?", options: ["He is a pro gamer.", "His favorite is Minecraft.", "In his bedroom.", "Yes, he plays."], a: "His favorite is Minecraft." },
            { audio: "Is your grandfather a farmer?", options: ["Yes, he has a tractor.", "No, he is a grandmother.", "He is seventy years old.", "From Brazil."], a: "Yes, he has a tractor." },
            { audio: "Who is the singer in the band?", options: ["It is a beautiful song.", "My niece is the singer.", "In the restaurant.", "She is twelve."], a: "My niece is the singer." },
            { audio: "Where are your family photos?", options: ["They are my parents.", "They are in the album.", "They are happy.", "No, they aren't."], a: "They are in the album." },
            { audio: "Whose tractor is that?", options: ["It is my uncle's tractor.", "He is a farmer.", "On the farm.", "It is big."], a: "It is my uncle's tractor." },
            { audio: "Are you a pro gamer?", options: ["I am twelve.", "Yes, I play for a team.", "My name is Paul.", "From England."], a: "Yes, I play for a team." },
            { audio: "Who is the woman in the kitchen?", options: ["It is a big kitchen.", "That is the chef.", "From the hallway.", "Yes, she is."], a: "That is the chef." },
            { audio: "What is your father's job?", options: ["He is my father.", "He is a doctor.", "At the hospital.", "His name is Arthur."], a: "He is a doctor." },
            { audio: "Are those people famous?", options: ["They are my cousins.", "Yes, they are influencers.", "No, they am not.", "From the internet."], a: "Yes, they are influencers." },
            { audio: "Who is your niece?", options: ["She is my sister's daughter.", "She is five years old.", "She is a student.", "Her name is Mary."], a: "She is my sister's daughter." },
            { audio: "What is that person painting?", options: ["She is an artist.", "She is painting a tree.", "In the classroom.", "Yes, she is."], a: "She is painting a tree." },
            { audio: "Is your nephew a baby?", options: ["Yes, he is one year old.", "No, he is a grandmother.", "His name is Leo.", "He is from Canada."], a: "Yes, he is one year old." },
            { audio: "Who is your father's wife?", options: ["She is my mother.", "He is my uncle.", "In the classroom.", "Yes, she is."], a: "She is my mother." },
            { audio: "What does a police officer do?", options: ["He drives a bus.", "He protects the city.", "He makes videos.", "He is very brave."], a: "He protects the city." },
            { audio: "Are these your parents?", options: ["Yes, their names are John and Mary.", "No, they are siblings.", "It is a family tree.", "I am fourteen."], a: "Yes, their names are John and Mary." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (2 Blanks) ---
        10: [
            { audio: "This is my mother and her name is Mary.", sent: "This is my ___ and her name is ___.", blanks: ["mother", "Mary"] },
            { audio: "That is my father and he is a firefighter.", sent: "That is my ___ and he is a ___.", blanks: ["father", "firefighter"] },
            { audio: "These are my parents and their names are Rose and Peter.", sent: "These are my ___ and ___ names are Rose and Peter.", blanks: ["parents", "their"] },
            { audio: "Who is that man over there?", sent: "Who is ___ man over ___?", blanks: ["that", "there"] },
            { audio: "My brother is a pro gamer.", sent: "My ___ is a ___ gamer.", blanks: ["brother", "pro"] },
            { audio: "Her sister is a singer.", sent: "Her ___ is a ___.", blanks: ["sister", "singer"] },
            { audio: "Is this your nephew?", sent: "Is ___ your ___?", blanks: ["this", "nephew"] },
            { audio: "Those are my grandparents.", sent: "Those ___ my ___.", blanks: ["are", "grandparents"] },
            { audio: "His uncle is a bus driver.", sent: "His ___ is a ___ driver.", blanks: ["uncle", "bus"] },
            { audio: "My aunt is a manager.", sent: "My ___ is a ___.", blanks: ["aunt", "manager"] },
            { audio: "Are these your cousins?", sent: "Are ___ your ___?", blanks: ["these", "cousins"] },
            { audio: "She is a digital influencer with many followers.", sent: "She is a ___ influencer with many ___.", blanks: ["digital", "followers"] },
            { audio: "I love my family.", sent: "I ___ my ___.", blanks: ["love", "family"] },
            { audio: "What is his new job?", sent: "What is ___ new ___?", blanks: ["his", "job"] },
            { audio: "They work at a big hospital.", sent: "They ___ at a big ___.", blanks: ["work", "hospital"] },
            { audio: "Our teacher is very nice.", sent: "Our ___ is very ___.", blanks: ["teacher", "nice"] },
            { audio: "The baby is sleeping.", sent: "The ___ is ___.", blanks: ["baby", "sleeping"] },
            { audio: "He is a farmer and he has a tractor.", sent: "He is a ___ and he has a ___.", blanks: ["farmer", "tractor"] },
            { audio: "Your uncle's son is your cousin.", sent: "Your ___ son is your ___.", blanks: ["uncle's", "cousin"] },
            { audio: "Who are those people?", sent: "Who ___ those ___?", blanks: ["are", "people"] },
            { audio: "She is a great artist.", sent: "She ___ a great ___.", blanks: ["is", "artist"] },
            { audio: "My nephew is five years old.", sent: "My ___ is five ___ old.", blanks: ["nephew", "years"] },
            { audio: "What are their professions?", sent: "What ___ their ___?", blanks: ["are", "professions"] },
            { audio: "Is that your grandmother?", sent: "Is ___ your ___?", blanks: ["that", "grandmother"] },
            { audio: "My father is a police officer.", sent: "My ___ is a ___ officer.", blanks: ["father", "police"] },
            { audio: "I have two siblings.", sent: "I ___ two ___.", blanks: ["have", "siblings"] },
            { audio: "He is not a doctor.", sent: "He is ___ a ___.", blanks: ["not", "doctor"] },
            { audio: "This is my family tree.", sent: "This is ___ family ___.", blanks: ["my", "tree"] },
            { audio: "What is your favorite job?", sent: "What ___ your ___ job?", blanks: ["is", "favorite"] },
            { audio: "Those influencers are famous.", sent: "Those ___ are ___.", blanks: ["influencers", "famous"] },
            { audio: "Her brother is a YouTuber.", sent: "Her ___ is a ___.", blanks: ["brother", "YouTuber"] },
            { audio: "Is it its ball?", sent: "Is ___ its ___?", blanks: ["it", "ball"] },
            { audio: "We are happy together.", sent: "We ___ happy ___.", blanks: ["are", "together"] },
            { audio: "Who is your niece?", sent: "Who ___ your ___?", blanks: ["is", "niece"] },
            { audio: "The chef is in the kitchen.", sent: "The ___ is in the ___.", blanks: ["chef", "kitchen"] },
            { audio: "How many cousins do you have?", sent: "How ___ cousins do you have?", blanks: ["many"] },
            { audio: "He is a professional athlete.", sent: "He ___ a professional ___.", blanks: ["is", "athlete"] },
            { audio: "It is a cool world.", sent: "It ___ a cool ___.", blanks: ["is", "world"] },
            { audio: "Are you ready for the photo?", sent: "Are you ready for the ___?", blanks: ["photo"] },
            { audio: "Their names are Bob and Sara.", sent: "Their ___ are Bob and ___.", blanks: ["names", "Sara"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE ---
        11: [
            { title: "The Photo Album", lines: [
                { speaker: "Celine", text: "Albert, who is ___ man in the photo?", options: ["this", "these", "those"], a: "this" },
                { speaker: "Albert", text: "___ is my father. His name is Arthur.", options: ["He", "She", "It"], a: "He" },
                { speaker: "Celine", text: "Is he a ___?", options: ["firefighter", "fire", "firefighting"], a: "firefighter" },
                { speaker: "Albert", text: "Yes, he is. ___ job is very brave.", options: ["My", "His", "Her"], a: "His" },
                { speaker: "Celine", text: "Wow! And is this ___ mother?", options: ["your", "you", "yours"], a: "your" }
            ]},
            { title: "Meeting the Family", lines: [
                { speaker: "John", text: "Are ___ people your siblings?", options: ["this", "that", "these"], a: "these" },
                { speaker: "Sara", text: "Yes, they are. ___ names are Paul and Mary.", options: ["Our", "Their", "His"], a: "Their" },
                { speaker: "John", text: "Is Mary ___ artist?", options: ["a", "an", "the"], a: "an" },
                { speaker: "Sara", text: "No, she is a ___.", options: ["singer", "sing", "sings"], a: "singer" },
                { speaker: "John", text: "Cool! And Paul is a ___, right?", options: ["gamer", "game", "gaming"], a: "gamer" }
            ]},
            { title: "Professional Talk", lines: [
                { speaker: "Albert", text: "What ___ your aunt do?", options: ["do", "does", "is"], a: "does" },
                { speaker: "Celine", text: "She is a ___ at a company.", options: ["manage", "manager", "management"], a: "manager" },
                { speaker: "Albert", text: "___ does she work?", options: ["Where", "Who", "How"], a: "Where" },
                { speaker: "Celine", text: "She works in a big office. ___ work is very busy.", options: ["Her", "His", "Its"], a: "Her" },
                { speaker: "Albert", text: "My uncle is a ___. He drives every day.", options: ["bus driver", "bus", "drive"], a: "bus driver" }
            ]},
            { title: "Near and Far", lines: [
                { speaker: "Student A", text: "Look at ___ people over there near the tree.", options: ["this", "those", "these"], a: "those" },
                { speaker: "Student B", text: "Oh, they are my ___.", options: ["grandparents", "grandparent", "parent"], a: "grandparents" },
                { speaker: "Student A", text: "Is ___ woman your grandmother?", options: ["that", "this", "these"], a: "that" },
                { speaker: "Student B", text: "Yes, ___ is. Her name is Rose.", options: ["she", "he", "it"], a: "she" },
                { speaker: "Student A", text: "She looks very ___!", options: ["happy", "sad", "noisy"], a: "happy" }
            ]},
            { title: "The Digital World", lines: [
                { speaker: "Celine", text: "Is your cousin ___ YouTuber?", options: ["a", "an", "the"], a: "a" },
                { speaker: "Albert", text: "No, he is a ___.", options: ["stream", "streamer", "streaming"], a: "streamer" },
                { speaker: "Celine", text: "Does he have many ___?", options: ["follows", "followers", "following"], a: "followers" },
                { speaker: "Albert", text: "Yes, he is a ___ influencer.", options: ["digital", "digit", "digitally"], a: "digital" },
                { speaker: "Celine", text: "___ videos are very funny!", options: ["His", "Her", "Their"], a: "His" }
            ]},
            { title: "Helping People", lines: [
                { speaker: "Sara", text: "Is ___ mother a doctor?", options: ["your", "you", "yours"], a: "your" },
                { speaker: "John", text: "Yes, she is. She ___ sick people.", options: ["help", "helps", "helping"], a: "helps" },
                { speaker: "Sara", text: "___ is her hospital?", options: ["Where", "What", "Who"], a: "Where" },
                { speaker: "John", text: "___ is in the city.", options: ["It", "She", "He"], a: "It" },
                { speaker: "Sara", text: "My father is a ___. He protects the city.", options: ["police officer", "police", "officer"], a: "police officer" }
            ]},
            { title: "On the Farm", lines: [
                { speaker: "Albert", text: "Is ___ man far away your uncle?", options: ["that", "these", "this"], a: "that" },
                { speaker: "Celine", text: "Yes, he is a ___.", options: ["farmer", "farm", "farming"], a: "farmer" },
                { speaker: "Albert", text: "Does he ___ a tractor?", options: ["has", "have", "having"], a: "have" },
                { speaker: "Celine", text: "Yes, he ___.", options: ["do", "does", "is"], a: "does" },
                { speaker: "Albert", text: "___ farm is very big.", options: ["Our", "Their", "His"], a: "His" }
            ]},
            { title: "The New Baby", lines: [
                { speaker: "Mary", text: "Is ___ baby your nephew?", options: ["this", "these", "those"], a: "this" },
                { speaker: "Bob", text: "Yes, he is. ___ name is Leo.", options: ["My", "His", "Her"], a: "His" },
                { speaker: "Mary", text: "He is so ___!", options: ["small", "big", "old"], a: "small" },
                { speaker: "Bob", text: "Yes, he is only one ___ old.", options: ["year", "years", "years old"], a: "year" },
                { speaker: "Mary", text: "The baby is ___ now.", options: ["sleep", "sleeping", "sleeps"], a: "sleeping" }
            ]},
            { title: "The Busy Chef", lines: [
                { speaker: "Ana", text: "Who is ___ man in the kitchen?", options: ["this", "those", "these"], a: "this" },
                { speaker: "Leo", text: "He is my uncle. He is a ___.", options: ["chef", "firefighter", "bus driver"], a: "chef" },
                { speaker: "Ana", text: "Does he ___ at a restaurant?", options: ["work", "works", "working"], a: "work" },
                { speaker: "Leo", text: "Yes, ___ does.", options: ["he", "she", "it"], a: "he" },
                { speaker: "Ana", text: "Is his food ___? I want to eat now!", options: ["delicious", "sad", "noisy"], a: "delicious" }
            ]},
            { title: "Sibling Talk", lines: [
                { speaker: "Tom", text: "How ___ siblings do you have?", options: ["many", "much", "old"], a: "many" },
                { speaker: "Mia", text: "I have ___ brother.", options: ["one", "an", "they"], a: "one" },
                { speaker: "Tom", text: "Is he a ___ athlete?", options: ["pro", "professionalism", "profess"], a: "pro" },
                { speaker: "Mia", text: "No, he is a ___. He plays games.", options: ["gamer", "gaming", "game"], a: "gamer" },
                { speaker: "Tom", text: "___ is he?", options: ["How old", "Who", "Where"], a: "How old" }
            ]}
        ],

        // --- TYPE 12: READ AND ANSWER (10 texts) ---
        12: [
            { title: "Albert’s Amazing Family", text: "Albert has a very interesting family. His father, Arthur, is a firefighter. He helps people every day. His mother, Mary, is a manager at a big company. Albert also has a brother. His brother is a gamer; he plays video games very well. Albert loves his family. They are very happy together.", questions: [
                { q: "What is Albert's father's name?", options: ["Bob", "Arthur", "Leo"], a: "Arthur" },
                { q: "What is Arthur's job?", options: ["Manager", "Firefighter", "Gamer"], a: "Firefighter" },
                { q: "Where does Mary work?", options: ["At a school", "At a big company", "At a hospital"], a: "At a big company" },
                { q: "What does Albert's brother do?", options: ["He is a chef.", "He is a gamer.", "He is a teacher."], a: "He is a gamer." },
                { q: "Is Albert's family sad?", options: ["Yes, they are.", "No, they are happy.", "No, they are noisy."], a: "No, they are happy." }
            ]},
            { title: "Celine’s Grandparents", text: "Celine wants to tell you about her grandparents. Their names are Rose and Peter. They are very nice. Peter is her grandfather. He was a bus driver, but now he is at home. Rose is her grandmother. She is an artist. She paints beautiful pictures. Celine loves her grandparents very much.", questions: [
                { q: "Who are Rose and Peter?", options: ["Celine's siblings", "Celine's grandparents", "Celine's parents"], a: "Celine's grandparents" },
                { q: "What was Peter's job?", options: ["Teacher", "Bus driver", "Firefighter"], a: "Bus driver" },
                { q: "What does Rose do?", options: ["She is a doctor.", "She is an artist.", "She is a manager."], a: "She is an artist." },
                { q: "What does Rose paint?", options: ["Houses", "Beautiful pictures", "Tractors"], a: "Beautiful pictures" },
                { q: "Is Peter working now?", options: ["Yes, he is.", "No, he is at home.", "He is at a school."], a: "No, he is at home." }
            ]},
            { title: "The Family Tree", text: "Look at this family tree! This is me, Sara. These are my parents. My father is a doctor and my mother is a teacher. That man far away is my uncle. His name is Bob. He is a farmer. He has a big tractor. Those children over there are my cousins. We are a big family.", questions: [
                { q: "What is Sara's father's job?", options: ["Teacher", "Doctor", "Farmer"], a: "Doctor" },
                { q: "Who is Bob?", options: ["Sara's brother", "Sara's uncle", "Sara's father"], a: "Sara's uncle" },
                { q: "What does Bob have?", options: ["A big bus", "A big tractor", "A police car"], a: "A big tractor" },
                { q: "Who are the children far away?", options: ["Sara's siblings", "Sara's cousins", "Sara's parents"], a: "Sara's cousins" },
                { q: "Is Sara's mother a manager?", options: ["Yes, she is.", "No, she is a teacher.", "She is an artist."], a: "No, she is a teacher." }
            ]},
            { title: "Digital Professionals", text: "In my family, many people work with the internet. My sister is a YouTuber. She makes funny videos. My brother is a streamer. He broadcasts his games online. I have a cousin who is a digital influencer. She has many followers. Our grandfather thinks these jobs are very new!", questions: [
                { q: "What does the sister do?", options: ["She is a chef.", "She is a YouTuber.", "She is a doctor."], a: "She is a YouTuber." },
                { q: "What does the brother broadcast?", options: ["News", "His games", "Pictures"], a: "His games" },
                { q: "Who is the digital influencer?", options: ["The sister", "The cousin", "The brother"], a: "The cousin" },
                { q: "Does the influencer have many followers?", options: ["No, she doesn't.", "Yes, she does.", "Maybe."], a: "Yes, she does." },
                { q: "What does the grandfather think of these jobs?", options: ["They are old.", "They are new.", "They are boring."], a: "They are new." }
            ]},
            { title: "My Aunt and Uncle", text: "My aunt's name is Rose. She is a singer. Her voice is very beautiful. My uncle's name is John. He is a police officer. He protects our neighborhood. They have a small baby. My nephew is only six months old. He is very small and he sleeps a lot.", questions: [
                { q: "What is the aunt's name?", options: ["Mary", "Rose", "Sara"], a: "Rose" },
                { q: "What is Rose's job?", options: ["Artist", "Singer", "Manager"], a: "Singer" },
                { q: "What does John do?", options: ["He is a firefighter.", "He is a police officer.", "He is a bus driver."], a: "He is a police officer." },
                { q: "Who is the baby?", options: ["The speaker's brother", "The speaker's nephew", "The speaker's son"], a: "The speaker's nephew" },
                { q: "Is the baby big?", options: ["Yes, he is.", "No, he is very small.", "He is a teenager."], a: "No, he is very small." }
            ]},
            { title: "Cousins at Play", text: "These are my cousins. Their names are Leo and Mia. They live in Brazil. They love sports. Leo is a pro gamer and Mia is a student. Today, they are playing soccer in the park. My cousins are very active and happy. I love playing with them.", questions: [
                { q: "Where do the cousins live?", options: ["Canada", "Brazil", "Australia"], a: "Brazil" },
                { q: "What are the cousins' names?", options: ["Albert and Celine", "Leo and Mia", "Rose and Peter"], a: "Leo and Mia" },
                { q: "What is Leo's profession?", options: ["Student", "Pro gamer", "Farmer"], a: "Pro gamer" },
                { q: "What is Mia's job?", options: ["She is a teacher.", "She is a student.", "She is an artist."], a: "She is a student." },
                { q: "What are they doing today?", options: ["Playing video games", "Playing soccer", "Chatting at school"], a: "Playing soccer" }
            ]},
            { title: "The Brave Firefighter", text: "That man over there is Mr. Smith. He is my neighbor and a firefighter. He wears a red uniform. His job is very dangerous because he puts out fires. He is a hero in our city. My brother wants to be a firefighter, too.", questions: [
                { q: "Who is Mr. Smith?", options: ["A teacher", "A neighbor and firefighter", "A doctor"], a: "A neighbor and firefighter" },
                { q: "What color is his uniform?", options: ["Blue", "Red", "Green"], a: "Red" },
                { q: "Why is his job dangerous?", options: ["He drives a bus.", "He puts out fires.", "He works in an office."], a: "He puts out fires." },
                { q: "Is he a hero?", options: ["No, he isn't.", "Yes, he is.", "He is a gamer."], a: "Yes, he is." },
                { q: "Who wants to be a firefighter, too?", options: ["Celine", "The speaker's brother", "Mr. Smith"], a: "The speaker's brother" }
            ]},
            { title: "A Big Celebration", text: "Today is a big day. All my relatives are here. My parents, my siblings, my aunts, and my uncles. We are thirty people! My mother is the chef today. she is cooking delicious food. My father is a manager and he is helping with the chairs. We are a very happy family.", questions: [
                { q: "Who is at the celebration?", options: ["Only the parents", "All the relatives", "Only the students"], a: "All the relatives" },
                { q: "How many people are there?", options: ["Ten", "Twenty", "Thirty"], a: "Thirty" },
                { q: "Who is the chef today?", options: ["The aunt", "The mother", "The sister"], a: "The mother" },
                { q: "What is the father's job?", options: ["Manager", "Chef", "Firefighter"], a: "Manager" },
                { q: "Is the family happy?", options: ["No, they are sad.", "Yes, they are.", "They are noisy."], a: "Yes, they are." }
            ]},
            { title: "The New Neighborhood", text: "My family lives in a new neighborhood called Green Garden. My father is a bus driver and he drives for the city. My mother is a nurse in a small clinic. We have many neighbors. One neighbor is a professional athlete. He is very fast!", questions: [
                { q: "What is the neighborhood's name?", options: ["Green Garden", "Blue Park", "Red Hill"], a: "Green Garden" },
                { q: "What is the father's job?", options: ["Doctor", "Bus driver", "Police officer"], a: "Bus driver" },
                { q: "Where does the mother work?", options: ["At a school", "In a small clinic", "At a big hospital"], a: "In a small clinic" },
                { q: "Who is the neighbor?", options: ["A pro athlete", "A chef", "A manager"], a: "A pro athlete" },
                { q: "Is the neighbor slow?", options: ["Yes, he is.", "No, he is fast.", "We don't know."], a: "No, he is fast." }
            ]},
            { title: "The Talented Niece", text: "My niece Celine is very talented. She is only ten years old, but she is a singer. She has a YouTuber channel with many followers. My brother, who is her father, is very proud. He is a police officer and he protects her.", questions: [
                { q: "How old is Celine?", options: ["Five", "Ten", "Fifteen"], a: "Ten" },
                { q: "What is her talent?", options: ["Painting", "Singing", "Gaming"], a: "Singing" },
                { q: "What does she have?", options: ["A tractor", "A YouTuber channel", "A big company"], a: "A YouTuber channel" },
                { q: "What is her father's job?", options: ["Farmer", "Police officer", "Chef"], a: "Police officer" },
                { q: "Who is Celine to the speaker?", options: ["Daughter", "Niece", "Sister"], a: "Niece" }
            ]}
        ],

        // --- TYPE 13: LISTEN AND ANSWER (10 texts) ---
        13: [
            { title: "Paul's Neighborhood", audio: "My name is Paul. I have a big family. My father is a bus driver and my mother is a manager. I have two siblings. My brother is a pro gamer and my sister is a student. We live in a nice neighborhood.", questions: [
                { q: "What is Paul's father's job?", options: ["Manager", "Bus driver", "Police officer"], a: "Bus driver" },
                { q: "What is his mother's job?", options: ["Teacher", "Manager", "Artist"], a: "Manager" },
                { q: "How many siblings does Paul have?", options: ["One", "Two", "Three"], a: "Two" },
                { q: "What does his brother do?", options: ["He is a student.", "He is a pro gamer.", "He is a farmer."], a: "He is a pro gamer." },
                { q: "Where do they live?", options: ["In a city", "In a nice neighborhood", "On a farm"], a: "In a nice neighborhood" }
            ]},
            { title: "Hard-working Grandparents", audio: "Look at those people. They are my grandparents, Rose and Peter. Rose is an artist. She has many paintings. Peter is a farmer. He works with a big tractor every day. They are very hard-working.", questions: [
                { q: "Who are Rose and Peter?", options: ["Parents", "Grandparents", "Cousins"], a: "Grandparents" },
                { q: "What is Rose's profession?", options: ["Singer", "Artist", "Manager"], a: "Artist" },
                { q: "What does Rose have?", options: ["Many paintings", "Many tractors", "Many followers"], a: "Many paintings" },
                { q: "What is Peter's job?", options: ["Bus driver", "Farmer", "Police officer"], a: "Farmer" },
                { q: "What does Peter use for work?", options: ["A bus", "A tractor", "A hose"], a: "A tractor" }
            ]},
            { title: "Aunt Mary's Family", audio: "My aunt Mary is a doctor. She works at a big hospital. Her husband, Bob, is my uncle. He is a police officer. He protects people. They have a daughter. She is my cousin, Celine.", questions: [
                { q: "Who is Mary?", options: ["The grandmother", "The aunt", "The sister"], a: "The aunt" },
                { q: "Where does Mary work?", options: ["In a school", "In a big hospital", "In a restaurant"], a: "In a big hospital" },
                { q: "Who is Bob?", options: ["Mary's brother", "Mary's husband and the speaker's uncle", "A firefighter"], a: "Mary's husband and the speaker's uncle" },
                { q: "What is Bob's job?", options: ["Doctor", "Police officer", "Manager"], a: "Police officer" },
                { q: "Who is Celine?", options: ["The speaker's sister", "The speaker's cousin", "The teacher"], a: "The speaker's cousin" }
            ]},
            { title: "Brave Arthur", audio: "This is my brother, Arthur. He is a firefighter. He is very brave. He puts out fires in the city. He is also a digital influencer. He has fifty thousand followers on the internet!", questions: [
                { q: "What is the brother's name?", options: ["Bob", "Arthur", "Leo"], a: "Arthur" },
                { q: "What is Arthur's main job?", options: ["Police officer", "Firefighter", "Bus driver"], a: "Firefighter" },
                { q: "How is Arthur described?", options: ["Funny", "Brave", "Noisy"], a: "Brave" },
                { q: "What is his second job?", options: ["Teacher", "Digital influencer", "Farmer"], a: "Digital influencer" },
                { q: "How many followers does he have?", options: ["Ten thousand", "Fifty thousand", "One hundred thousand"], a: "Fifty thousand" }
            ]},
            { title: "Mia's Music", audio: "My sister, Mia, is a singer. She is a YouTuber, too. She makes music videos. Her videos are very popular. She is fifteen years old. I am her biggest fan!", questions: [
                { q: "What is the sister's name?", options: ["Rose", "Mia", "Celine"], a: "Mia" },
                { q: "What are her two jobs?", options: ["Artist and Manager", "Singer and YouTuber", "Doctor and Teacher"], a: "Singer and YouTuber" },
                { q: "What kind of videos does she make?", options: ["Game videos", "Music videos", "Farm videos"], a: "Music videos" },
                { q: "Are her videos popular?", options: ["No, they aren't.", "Yes, they are.", "She doesn't have videos."], a: "Yes, they are." },
                { q: "How old is Mia?", options: ["Twelve", "Fourteen", "Fifteen"], a: "Fifteen" }
            ]},
            { title: "Baby Leo", audio: "There is a baby in the family. He is my nephew. His name is Leo. He is only one year old. He is very small. My sister is his mother. We all love the baby.", questions: [
                { q: "Who is the baby?", options: ["The speaker's son", "The speaker's nephew", "The speaker's brother"], a: "The speaker's nephew" },
                { q: "What is the baby's name?", options: ["Arthur", "Leo", "Paul"], a: "Leo" },
                { q: "How old is Leo?", options: ["One month old", "One year old", "Two years old"], a: "One year old" },
                { q: "Who is Leo's mother?", options: ["The speaker's aunt", "The speaker's sister", "The speaker's grandmother"], a: "The speaker's sister" },
                { q: "Is the baby big?", options: ["Yes, he is.", "No, he is very small.", "He is a teenager."], a: "No, he is very small." }
            ]},
            { title: "Pro Gamer Mario", audio: "My cousin, Mario, is a pro gamer. He plays video games professionally. He works in an office with many computers. He is a streamer, too. Many people watch him play online.", questions: [
                { q: "Who is Mario?", options: ["The brother", "The cousin", "The uncle"], a: "The cousin" },
                { q: "What is Mario's job?", options: ["Artist", "Pro gamer", "Police officer"], a: "Pro gamer" },
                { q: "Where does he work?", options: ["On a farm", "In an office with computers", "In a hospital"], a: "In an office with computers" },
                { q: "Is he also a streamer?", options: ["No, he isn't.", "Yes, he is.", "He is a chef."], a: "Yes, he is." },
                { q: "Do people watch him online?", options: ["No, they don't.", "Yes, many people do.", "Only his family."], a: "Yes, many people do." }
            ]},
            { title: "Neighbor Carlos", audio: "Our neighbor is a chef. His name is Carlos. He works in a famous restaurant. He is very good at cooking. His favorite food is pizza. He is a very happy man.", questions: [
                { q: "Who is Carlos?", options: ["The father", "The neighbor and chef", "The bus driver"], a: "The neighbor and chef" },
                { q: "Where does Carlos work?", options: ["In a school", "In a famous restaurant", "On a farm"], a: "In a famous restaurant" },
                { q: "Is he good at cooking?", options: ["No, he is bad.", "Yes, he is very good.", "He doesn't cook."], a: "Yes, he is very good." },
                { q: "What is his favorite food?", options: ["Pasta", "Pizza", "Salad"], a: "Pizza" },
                { q: "How is his personality?", options: ["Sad", "Happy", "Noisy"], a: "Happy" }
            ]},
            { title: "The Busy Manager", audio: "My mother is a manager. She works at a big company in the city. She controls a team of twenty people. She is very busy every day, but she loves her job. She is a professional.", questions: [
                { q: "What is the mother's job?", options: ["Teacher", "Manager", "Doctor"], a: "Manager" },
                { q: "Where does she work?", options: ["At a school", "At a big company", "On a farm"], a: "At a big company" },
                { q: "How many people does she control?", options: ["Ten", "Fifteen", "Twenty"], a: "Twenty" },
                { q: "Is she busy?", options: ["No, she isn't.", "Yes, she is.", "She is at home."], a: "Yes, she is." },
                { q: "Does she like her job?", options: ["No, she hates it.", "Yes, she loves it.", "She wants to be a chef."], a: "Yes, she loves it." }
            ]},
            { title: "The School Bus", audio: "My uncle Bob is a bus driver. He drives a big yellow bus for the school. He is very careful and helpful. He has many friends at the school. His job is very important for the children.", questions: [
                { q: "Who is Bob?", options: ["The brother", "The uncle", "The father"], a: "The uncle" },
                { q: "What is his job?", options: ["Farmer", "Bus driver", "Police officer"], a: "Bus driver" },
                { q: "What color is the bus?", options: ["Red", "Blue", "Yellow"], a: "Yellow" },
                { q: "Who is the bus for?", options: ["Doctors", "Farmers", "The school"], a: "The school" },
                { q: "Is Bob careful?", options: ["No, he is fast.", "Yes, he is very careful.", "He is a pro gamer."], a: "Yes, he is very careful." }
            ]}
        ],

        // --- TYPE 14: COMPLETE TEXT (10 texts) ---
        14: [
            { title: "My Family Tree", text: "This is [1] (my/your/his) family tree. These are my [2] (parents/parent/relative), John and Mary. My father is a [3] (firefighter/fire/firefighting) and my mother is a manager. I [4] (have/has/am) one sister. [5] (Her/His/Its) name is Celine.", answers: ["my", "parents", "firefighter", "have", "Her"] },
            { title: "The Brave Uncle", text: "That man over there is [1] (my/our/their) uncle, Bob. He is a [2] (police officer/police/officer). He [3] (protect/protects/protecting) our neighborhood. Bob is very [4] (brave/sad/noisy). [5] (His/Her/Its) job is very important.", answers: ["my", "police officer", "protects", "brave", "His"] },
            { title: "Grandparents’ Home", text: "Those are my [1] (grandparents/grandparent/parent) names are Rose and Peter. My grandmother is [2] (Their/Our/His) names are Rose and Peter. My grandmother is a [3] (singer/artist/doctor); she paints pictures. My grandfather is a [4] (farmer/farm/farming). He has a big [5] (tractor/bus/car).", answers: ["grandparents", "Their", "artist", "farmer", "tractor"] },
            { title: "Digital Siblings", text: "I have two [1] (sibling/siblings/parents). My brother is a [2] (gamer/game/gaming) and my sister is a YouTuber. [3] (They/We/She) are very famous online. My sister makes [4] (videos/painting/tractor) for the internet. [5] (Our/Their/Her) followers love them!", answers: ["siblings", "gamer", "They", "videos", "Their"] },
            { title: "The Hospital", text: "My aunt is a [1] (doctor/student/artist). She [2] (work/works/working) at a big hospital. She [3] (help/helps/helping) sick people every day. [4] (Her/His/Its) job is very [5] (cool/sad/bad).", answers: ["doctor", "works", "helps", "Her", "cool"] },
            { title: "The Bus Driver", text: "This [1] (man/woman/children) is my uncle Arthur. He is a [2] (bus driver/bus/drive). He [3] (drive/drives/driving) a big yellow bus. He [4] (is/are/am) very careful. [5] (My/His/Her) uncle is a nice man.", answers: ["man", "bus driver", "drives", "is", "His"] },
            { title: "A New Baby", text: "Look at [1] (this/these/those) baby! He is my [2] (nephew/niece/brother). He is only six months [3] (old/age/years). He is very [4] (small/big/tall). The baby is [5] (sleep/sleeping/sleeps) now.", answers: ["this", "nephew", "old", "small", "sleeping"] },
            { title: "The Chef", text: "Mario is my [1] (cousin/parents/aunt). He is a [2] (chef/singer/artist). He [3] (cook/cooks/cooking) in a restaurant. He [4] (have/has/am) a white uniform. His food is [5] (delicious/bad/noisy).", answers: ["cousin", "chef", "cooks", "has", "delicious"] },
            { title: "Pro Athlete", text: "My [1] (uncle/brother/father) Bob is very fast. He is a [2] (professional/digital/small) athlete. He [3] (runs/works/cooks) every day at the park. He [4] (has/am/is) many medals. He is a [5] (happy/sad/noisy) person.", answers: ["uncle", "professional", "runs", "has"] },
            { title: "Streamer Life", text: "My sister is a [1] (streamer/singer/doctor). She [2] (broadcasts/paints/works) herself online. She [3] (is/has/am) a pro gamer, too. [4] (Her/His/Its) job is very [5] (modern/old/large).", answers: ["streamer", "[broadcasts herself online]", "[is]", "[Her]", "[modern]", "[her followers love her videos and games she plays online.]"] }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 items) ---
        15: [
            { title: "Text 1", audio: "My father is a firefighter. He is very brave. My mother is a manager. We are a happy family.", text: "My [1] is a firefighter. He is very [2]. My [3] is a [4]. We are a [5] family.", answers: ["father", "brave", "mother", "manager", "happy"] },
            { title: "Text 2", audio: "These are my grandparents. Their names are Rose and Peter. Rose is an artist. Peter is a farmer. They live in Brazil.", text: "These are my [1]. Their [2] are Rose and Peter. Rose is an [3]. Peter is a [4]. They [5] in Brazil.", answers: ["grandparents", "names", "artist", "farmer", "live"] },
            { title: "Text 3", audio: "I have two siblings. My brother is a pro gamer. My sister is a student. They are very nice.", text: "I have two [1]. My [2] is a pro [3]. My [4] is a student. They are very [5].", answers: ["siblings", "brother", "gamer", "sister", "nice"] },
            { title: "Text 4", audio: "My aunt is a singer. She is a YouTuber, too. She has many followers. Her voice is beautiful.", text: "My [1] is a [2]. She is a [3], too. She has many [4]. Her [5] is beautiful.", answers: ["aunt", "singer", "YouTuber", "followers", "voice"] },
            { title: "Text 5", audio: "My uncle is a police officer. He protects the city. He is a hero. His job is important.", text: "My [1] is a [2] officer. He [3] the city. He is a [4]. His [5] is important.", answers: ["uncle", "police", "protects", "hero", "job"] },
            { title: "Text 6", audio: "The baby is my nephew. He is very small. He is sleeping on the sofa. I love him.", text: "The [1] is my [2]. He is very [3]. He is [4] on the [5]. I love him.", answers: ["baby", "nephew", "small", "sleeping", "sofa"] },
            { title: "Text 7", audio: "That man is a bus driver. He drives a big bus. He is my cousin. His name is Arthur.", text: "That [1] is a [2] driver. He [3] a big bus. He is my [4]. His name is [5].", answers: ["man", "bus", "drives", "cousin", "Arthur"] },
            { title: "Text 8", audio: "My niece is an artist. She paints pictures. She is a student, too. She is fifteen years old.", text: "My [1] is an [2]. She paints [3]. She is a [4], too. She is [5] years old.", answers: ["niece", "artist", "pictures", "student", "fifteen"] },
            { title: "Text 9", audio: "My neighbor is a chef. He works in a restaurant. He cooks pizza. It is delicious.", text: "My [1] is a chef. He [2] in a [3]. He [4] pizza. It is [5].", answers: ["neighbor", "works", "restaurant", "cooks", "delicious"] },
            { title: "Text 10", audio: "I have a big family tree. My parents are Arthur and Mary. I have many relatives.", text: "I have a big [1] [2]. My [3] are Arthur and Mary. I [4] many [5].", answers: ["family", "tree", "parents", "have", "relatives"] }
        ]
    }
});