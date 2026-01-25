/**
 * REACH English - LESSON DATA 6-1-2
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "6-1-2", 
    grade: "6th Grade",       
    bimester: "1",   
    chapter: "2",    
    chapterTitle: "My Family and Friends!", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Name family members and friends.<br>• Identify and name 15 popular professions.<br>• Use Possessive Adjectives (my, your, his, her...).<br>• Use Demonstrative Pronouns (this, that, these, those).<br>• Ask questions about people and their jobs.",
            welcome: "Hello again, my friend! It's Mr. D!<br><br>Welcome back! Today, we are going to talk about the most important people in our lives: our family and friends! We will build a family tree, learn cool names for jobs like \"Gamer\" and \"YouTuber,\" and learn how to point out people near and far. It’s going to be a lovely adventure. Let's go!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Name family members and friends. Identify and name 15 popular professions. Use Possessive Adjectives. Use Demonstrative Pronouns. And ask questions about people and their jobs.",
                welcome: "TTS: Hello again, my friend! It's Mr. D! Welcome back! Today, we are going to talk about the most important people in our lives: our family and friends! We will build a family tree, learn cool names for jobs like Gamer and YouTuber, and learn how to point out people near and far. It’s going to be a lovely adventure. Let's go!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of pages turning in a photo album. Albert and Celine are sitting on a bench at school looking at Albert's phone/album.", 
            contextAudio: "audio/6-1-2/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Albert, [who is this](tooltip:who-is-this)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "This is my [mother](tooltip:mother). Her name is Mary." 
                },
                { 
                    speaker: "Celine", 
                    text: "She is beautiful! [What does she do](tooltip:what-does-she-do)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "She is a [manager](tooltip:manager). And [that is](tooltip:that-is) my [father](tooltip:father). He is a [firefighter](tooltip:firefighter)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Wow! A [firefighter](tooltip:firefighter)? That is cool! And [who are these](tooltip:who-are-these)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "[These are](tooltip:these-are) my [siblings](tooltip:siblings). My [brother](tooltip:brother) is a [gamer](tooltip:gamer), and my [sister](tooltip:sister) is a [student](tooltip:student)." 
                },
                { 
                    speaker: "Celine", 
                    text: "You have a lovely family! [Those are](tooltip:those-are) my [grandparents](tooltip:grandparents) in this photo here." 
                },
                { 
                    speaker: "Albert", 
                    text: "They look very kind!" 
                }
            ]
        },

        // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
        // ======================================================
        {
            title: "Say the word",
            subPages: [
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],

            // 2A: Vocabulary Lists (Tabbed)
            areas: [
                {
                    title: "Verbs",
                    audio: "TTS: Have. Work. Love. Play. Live.",
                    items: [
                        { term: "Have", trans: "<small style='color:#0077b6'>ter</small>" },
                        { term: "Work", trans: "<small style='color:#0077b6'>trabalhar</small>" },
                        { term: "Love", trans: "<small style='color:#0077b6'>amar</small>" },
                        { term: "Play", trans: "<small style='color:#0077b6'>brincar / jogar</small>" },
                        { term: "Live", trans: "<small style='color:#0077b6'>morar / viver</small>" }
                    ]
                },
                {
                    title: "Family Members",
                    audio: "TTS: Mother. Mom. Father. Dad. Parents. Brother. Sister. Siblings. Grandmother. Grandfather. Grandparents. Aunt. Uncle. Cousin. Child. Children. Baby. Nephew. Niece.",
                    items: [
                        { term: "Mother / Mom", trans: "<small style='color:#0077b6'>Mãe</small>" },
                        { term: "Father / Dad", trans: "<small style='color:#0077b6'>Pai</small>" },
                        { term: "Parents", trans: "<small style='color:#0077b6'>Pais</small>" },
                        { term: "Brother", trans: "<small style='color:#0077b6'>Irmão</small>" },
                        { term: "Sister", trans: "<small style='color:#0077b6'>Irmã</small>" },
                        { term: "Siblings", trans: "<small style='color:#0077b6'>Irmãos (em geral)</small>" },
                        { term: "Grandmother", trans: "<small style='color:#0077b6'>Avó</small>" },
                        { term: "Grandfather", trans: "<small style='color:#0077b6'>Avô</small>" },
                        { term: "Grandparents", trans: "<small style='color:#0077b6'>Avós</small>" },
                        { term: "Aunt", trans: "<small style='color:#0077b6'>Tia</small>" },
                        { term: "Uncle", trans: "<small style='color:#0077b6'>Tio</small>" },
                        { term: "Cousin", trans: "<small style='color:#0077b6'>Primo(a)</small>" },
                        { term: "Child / Children", trans: "<small style='color:#0077b6'>Criança / Crianças</small>" },
                        { term: "Baby", trans: "<small style='color:#0077b6'>Bebê</small>" },
                        { term: "Nephew", trans: "<small style='color:#0077b6'>Sobrinho</small>" },
                        { term: "Niece", trans: "<small style='color:#0077b6'>Sobrinha</small>" }
                    ]
                },
                {
                    title: "Professions",
                    audio: "TTS: Teacher. Doctor. Student. Singer. Chef. Artist. Police Officer. Firefighter. Bus Driver. Farmer. YouTuber. Gamer. Influencer. Streamer. Manager.",
                    items: [
                        { term: "Teacher", trans: "<small style='color:#0077b6'>Professor(a)</small>" },
                        { term: "Doctor", trans: "<small style='color:#0077b6'>Médico(a)</small>" },
                        { term: "Student", trans: "<small style='color:#0077b6'>Estudante</small>" },
                        { term: "Singer", trans: "<small style='color:#0077b6'>Cantor(a)</small>" },
                        { term: "Chef", trans: "<small style='color:#0077b6'>Chef / Cozinheiro(a)</small>" },
                        { term: "Artist", trans: "<small style='color:#0077b6'>Artista</small>" },
                        { term: "Police Officer", trans: "<small style='color:#0077b6'>Policial</small>" },
                        { term: "Firefighter", trans: "<small style='color:#0077b6'>Bombeiro(a)</small>" },
                        { term: "Bus Driver", trans: "<small style='color:#0077b6'>Motorista de Ônibus</small>" },
                        { term: "Farmer", trans: "<small style='color:#0077b6'>Fazendeiro(a)</small>" },
                        { term: "YouTuber", trans: "<small style='color:#0077b6'>YouTuber</small>" },
                        { term: "Gamer", trans: "<small style='color:#0077b6'>Jogador(a) de Videogame</small>" },
                        { term: "Influencer", trans: "<small style='color:#0077b6'>Influenciador(a)</small>" },
                        { term: "Streamer", trans: "<small style='color:#0077b6'>Streamer</small>" },
                        { term: "Manager", trans: "<small style='color:#0077b6'>Gerente</small>" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Verbs",
                    audio: "TTS: I have two brothers. My father works at a school. I love my family. My cousins play soccer. We live in Brazil.",
                    items: [
                        { term: "Have", sent: "I have two brothers.", trans: "<span style='color:#0077b6'>Eu tenho dois irmãos.</span>" },
                        { term: "Work", sent: "My father works at a school.", trans: "<span style='color:#0077b6'>Meu pai trabalha em uma escola.</span>" },
                        { term: "Love", sent: "I love my family.", trans: "<span style='color:#0077b6'>Eu amo minha família.</span>" },
                        { term: "Play", sent: "My cousins play soccer.", trans: "<span style='color:#0077b6'>Meus primos jogam futebol.</span>" },
                        { term: "Live", sent: "We live in Brazil.", trans: "<span style='color:#0077b6'>Nós moramos no Brasil.</span>" }
                    ]
                },
                {
                    title: "Family Members",
                    audio: "TTS: This is my mother. My father is tall. My parents are nice. He is my brother. She is my sister. Do you have siblings? My grandmother cooks well. My grandfather is old. I visit my grandparents. My aunt is happy. My uncle is funny. He is my favorite cousin. The children are at school. The baby is sleeping. My nephew is five years old. My niece likes dolls.",
                    items: [
                        { term: "Mother", sent: "This is my mother.", trans: "<span style='color:#0077b6'>Esta é minha mãe.</span>" },
                        { term: "Father", sent: "My father is tall.", trans: "<span style='color:#0077b6'>Meu pai é alto.</span>" },
                        { term: "Parents", sent: "My parents are nice.", trans: "<span style='color:#0077b6'>Meus pais são legais.</span>" },
                        { term: "Brother", sent: "He is my brother.", trans: "<span style='color:#0077b6'>Ele é meu irmão.</span>" },
                        { term: "Sister", sent: "She is my sister.", trans: "<span style='color:#0077b6'>Ela é minha irmã.</span>" },
                        { term: "Siblings", sent: "Do you have siblings?", trans: "<span style='color:#0077b6'>Você tem irmãos?</span>" },
                        { term: "Grandmother", sent: "My grandmother cooks well.", trans: "<span style='color:#0077b6'>Minha avó cozinha bem.</span>" },
                        { term: "Grandfather", sent: "My grandfather is old.", trans: "<span style='color:#0077b6'>Meu avô é velho.</span>" },
                        { term: "Grandparents", sent: "I visit my grandparents.", trans: "<span style='color:#0077b6'>Eu visito meus avós.</span>" },
                        { term: "Aunt", sent: "My aunt is happy.", trans: "<span style='color:#0077b6'>Minha tia é feliz.</span>" },
                        { term: "Uncle", sent: "My uncle is funny.", trans: "<span style='color:#0077b6'>Meu tio é engraçado.</span>" },
                        { term: "Cousin", sent: "He is my favorite cousin.", trans: "<span style='color:#0077b6'>Ele é meu primo favorito.</span>" },
                        { term: "Children", sent: "The children are at school.", trans: "<span style='color:#0077b6'>As crianças estão na escola.</span>" },
                        { term: "Baby", sent: "The baby is sleeping.", trans: "<span style='color:#0077b6'>O bebê está dormindo.</span>" },
                        { term: "Nephew", sent: "My nephew is 5 years old.", trans: "<span style='color:#0077b6'>Meu sobrinho tem 5 anos.</span>" },
                        { term: "Niece", sent: "My niece likes dolls.", trans: "<span style='color:#0077b6'>Minha sobrinha gosta de bonecas.</span>" }
                    ]
                },
                {
                    title: "Professions",
                    audio: "TTS: She is a teacher. He is a doctor. I am a student. My sister is a singer. My uncle is a chef. She is a great artist. He is a police officer. My dad is a firefighter. The bus driver is here. He is a farmer. I want to be a YouTuber. He is a pro gamer. She is a digital influencer. He is a streamer. My mom is a manager.",
                    items: [
                        { term: "Teacher", sent: "She is a teacher.", trans: "<span style='color:#0077b6'>Ela é uma professora.</span>" },
                        { term: "Doctor", sent: "He is a doctor.", trans: "<span style='color:#0077b6'>Ele é um médico.</span>" },
                        { term: "Student", sent: "I am a student.", trans: "<span style='color:#0077b6'>Eu sou um estudante.</span>" },
                        { term: "Singer", sent: "My sister is a singer.", trans: "<span style='color:#0077b6'>Minha irmã é cantora.</span>" },
                        { term: "Chef", sent: "My uncle is a chef.", trans: "<span style='color:#0077b6'>Meu tio é chef.</span>" },
                        { term: "Artist", sent: "She is a great artist.", trans: "<span style='color:#0077b6'>Ela é uma grande artista.</span>" },
                        { term: "Police Officer", sent: "He is a police officer.", trans: "<span style='color:#0077b6'>Ele é um policial.</span>" },
                        { term: "Firefighter", sent: "My dad is a firefighter.", trans: "<span style='color:#0077b6'>Meu pai é bombeiro.</span>" },
                        { term: "Bus Driver", sent: "The bus driver is here.", trans: "<span style='color:#0077b6'>O motorista de ônibus está aqui.</span>" },
                        { term: "Farmer", sent: "He is a farmer.", trans: "<span style='color:#0077b6'>Ele é um fazendeiro.</span>" },
                        { term: "YouTuber", sent: "I want to be a YouTuber.", trans: "<span style='color:#0077b6'>Eu quero ser um YouTuber.</span>" },
                        { term: "Gamer", sent: "He is a pro gamer.", trans: "<span style='color:#0077b6'>Ele é um jogador profissional.</span>" },
                        { term: "Influencer", sent: "She is a digital influencer.", trans: "<span style='color:#0077b6'>Ela é uma influenciadora digital.</span>" },
                        { term: "Streamer", sent: "He is a streamer.", trans: "<span style='color:#0077b6'>Ele é um streamer.</span>" },
                        { term: "Manager", sent: "My mom is a manager.", trans: "<span style='color:#0077b6'>Minha mãe é gerente.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (20 MCQ Exercises)
            drills: [
                { 
                    type: "mcq", 
                    q: "Choose the correct translation for the verb 'Have':", 
                    options: [ {t: "Trabalhar", c: false}, {t: "Ter", c: true}, {t: "Amar", c: false}, {t: "Viver", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: 'I _____ with my cousins.'", 
                    options: [ {t: "live", c: false}, {t: "play", c: true}, {t: "have", c: false}, {t: "brother", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Your father's wife is your...", 
                    options: [ {t: "Sister", c: false}, {t: "Aunt", c: false}, {t: "Mother", c: true}, {t: "Grandmother", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Your uncle's son is your...", 
                    options: [ {t: "Brother", c: false}, {t: "Cousin", c: true}, {t: "Nephew", c: false}, {t: "Father", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Choose the correct plural of 'Child':", 
                    options: [ {t: "Childs", c: false}, {t: "Children", c: true}, {t: "Babies", c: false}, {t: "Siblings", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Who works in a hospital?", 
                    options: [ {t: "Teacher", c: false}, {t: "Doctor", c: true}, {t: "Farmer", c: false}, {t: "Gamer", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Who puts out fires?", 
                    options: [ {t: "Police Officer", c: false}, {t: "Manager", c: false}, {t: "Firefighter", c: true}, {t: "Artist", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Who makes videos for the internet?", 
                    options: [ {t: "YouTuber", c: true}, {t: "Bus Driver", c: false}, {t: "Chef", c: false}, {t: "Doctor", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: '_______ is this?' 'It's my brother.'", 
                    options: [ {t: "What", c: false}, {t: "Who", c: true}, {t: "Where", c: false}, {t: "How", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: '_______ are my parents.'", 
                    options: [ {t: "This", c: false}, {t: "That", c: false}, {t: "These", c: true}, {t: "It", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Your mother's sister is your...", 
                    options: [ {t: "Aunt", c: true}, {t: "Niece", c: false}, {t: "Cousin", c: false}, {t: "Grandmother", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "A person who plays video games professionally is a...", 
                    options: [ {t: "Streamer", c: false}, {t: "Gamer", c: true}, {t: "Singer", c: false}, {t: "Manager", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: 'We _____ in a big house in Canada.'", 
                    options: [ {t: "live", c: true}, {t: "play", c: false}, {t: "love", c: false}, {t: "work", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Your grandmother's husband is your...", 
                    options: [ {t: "Uncle", c: false}, {t: "Grandfather", c: true}, {t: "Father", c: false}, {t: "Nephew", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Where does a Farmer work?", 
                    options: [ {t: "In an office", c: false}, {t: "On a farm", c: true}, {t: "In a hospital", c: false}, {t: "In a school", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: 'Who are _____ people over there?'", 
                    options: [ {t: "this", c: false}, {t: "those", c: true}, {t: "these", c: false}, {t: "that", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Your brother's daughter is your...", 
                    options: [ {t: "Nephew", c: false}, {t: "Niece", c: true}, {t: "Cousin", c: false}, {t: "Sister", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "A person who maintains public order and safety is a...", 
                    options: [ {t: "Police Officer", c: true}, {t: "Firefighter", c: false}, {t: "Chef", c: false}, {t: "Farmer", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "Complete: '_______ does he do?' 'He is a pilot.'", 
                    options: [ {t: "Who", c: false}, {t: "Where", c: false}, {t: "What", c: true}, {t: "How", c: false} ] 
                },
                { 
                    type: "mcq", 
                    q: "The father and mother of your parents are your...", 
                    options: [ {t: "Siblings", c: false}, {t: "Grandparents", c: true}, {t: "Cousins", c: false}, {t: "Aunts", c: false} ] 
                }
            ]
        },

        // ======================================================
        // STEP 3: FOLLOW THE PATTERN (Grammar)
        // ======================================================
        {
            title: "Follow the Pattern",
            subPages: [
                { id: "step3a", label: "3A: Patterns" },
                { id: "step3b", label: "3B: Examples" },
                { id: "step3c", label: "3C: Practice" }
            ],

            // 3A: Explanations (Tabbed Grammar Boxes)
            patterns: [
                {
                    title: "Possessive Adjectives",
                    audio: "TTS: We use possessive adjectives before a noun to show belonging. My, Your, His, Her, Its, Our, Their. This is my mother. That is your book. His sister is nice. Our school is big.",
                    explanation: "We use possessive adjectives before a noun (person or thing) to show who it belongs to or the relationship between people.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos adjetivos possessivos antes de um substantivo para mostrar a quem pertence ou a relação entre as pessoas.)</span>",
                    samples: [
                        { en: "I -> My", pt: "<span style='color:#0077b6'>Meu, Minha</span>" },
                        { en: "You -> Your", pt: "<span style='color:#0077b6'>Teu, Tua, Seu, Sua</span>" },
                        { en: "He -> His", pt: "<span style='color:#0077b6'>Dele</span>" },
                        { en: "She -> Her", pt: "<span style='color:#0077b6'>Dela</span>" },
                        { en: "It -> Its", pt: "<span style='color:#0077b6'>Dele, Dela (animal/coisa)</span>" },
                        { en: "We -> Our", pt: "<span style='color:#0077b6'>Nosso, Nossa</span>" },
                        { en: "They -> Their", pt: "<span style='color:#0077b6'>Deles, Delas</span>" }
                    ]
                },
                {
                    title: "Demonstratives (Singular)",
                    audio: "TTS: We use these words to point at people or things. This is for one person or thing that is near. That is for one person or thing that is far. This is my brother. That is my teacher.",
                    explanation: "We use these words to point at specific people or things based on distance (near or far).<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos estas palavras para apontar pessoas ou coisas específicas com base na distância: perto ou longe.)</span>",
                    samples: [
                        { en: "This (Near)", pt: "<span style='color:#0077b6'>Este, Esta, Isto (Perto)</span>" },
                        { en: "That (Far)", pt: "<span style='color:#0077b6'>Aquele, Aquela, Aquilo (Longe)</span>" },
                        { en: "This is my brother (here).", pt: "<span style='color:#0077b6'>Este é meu irmão (aqui).</span>" },
                        { en: "That is my teacher (over there).", pt: "<span style='color:#0077b6'>Aquele é meu professor (ali).</span>" }
                    ]
                },
                {
                    title: "Demonstratives (Plural)",
                    audio: "TTS: These is for two or more people or things that are near. Those is for two or more people or things that are far. These are my parents. Those are my cousins.",
                    explanation: "We use these words to point at more than one person or thing based on distance.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos estas palavras para apontar mais de uma pessoa ou coisa com base na distância.)</span>",
                    samples: [
                        { en: "These (Near)", pt: "<span style='color:#0077b6'>Estes, Estas (Perto)</span>" },
                        { en: "Those (Far)", pt: "<span style='color:#0077b6'>Aqueles, Aquelas (Longe)</span>" },
                        { en: "These are my parents (here).", pt: "<span style='color:#0077b6'>Estes são meus pais (aqui).</span>" },
                        { en: "Those are my cousins (over there).", pt: "<span style='color:#0077b6'>Aqueles são meus primos (ali).</span>" }
                    ]
                }
            ],

            // ======================================================
            // 3B: Natural Examples (Dialogues Grouped in Boxes)
            // ======================================================
            dialogueGroups: [
                {
                    title: "Dialogue 1: Possessive Adjectives",
                    audio: "audio/6-1-2/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Celine, is that your phone?", 
                            pt: "<span style='color:#0077b6'>Celine, aquele é o seu telefone?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, it is not my phone. It is his phone. It belongs to the teacher.", 
                            pt: "<span style='color:#0077b6'>Não, não é meu telefone. É o telefone dele. Pertence ao professor.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Demonstratives (Singular)",
                    audio: "audio/6-1-2/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Who is that in the photo?", 
                            pt: "<span style='color:#0077b6'>Quem é aquele na foto?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "That is my grandfather. And this is me when I was a baby!", 
                            pt: "<span style='color:#0077b6'>Aquele é meu avô. E este sou eu quando eu era um bebê!</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Demonstratives (Plural)",
                    audio: "audio/6-1-2/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Are those your books on the table?", 
                            pt: "<span style='color:#0077b6'>Aqueles são seus livros na mesa?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, those are library books. These books in my hand are mine.", 
                            pt: "<span style='color:#0077b6'>Não, aqueles são livros da biblioteca. Estes livros na minha mão são meus.</span>" 
                        }
                    ]
                }
            ],

            // ======================================================
            // 3C: Grammar Practice (24 MCQ Exercises)
            // ======================================================
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Complete: 'I am Albert. This is _____ sister.'",
                    options: [ {t: "your", c: false}, {t: "my", c: true}, {t: "his", c: false}, {t: "their", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'Celine is my friend. _____ family is Australian.'",
                    options: [ {t: "His", c: false}, {t: "My", c: false}, {t: "Her", c: true}, {t: "Our", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'Mr. D is a teacher. _____ class is fun.'",
                    options: [ {t: "Her", c: false}, {t: "Their", c: false}, {t: "Its", c: false}, {t: "His", c: true} ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'We are brothers. _____ parents are nice.'",
                    options: [ {t: "Our", c: true}, {t: "Your", c: false}, {t: "Their", c: false}, {t: "We", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'They are doctors. _____ job is important.'",
                    options: [ {t: "Our", c: false}, {t: "His", c: false}, {t: "Their", c: true}, {t: "Your", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'The cat is hungry. _____ food is in the kitchen.'",
                    options: [ {t: "His", c: false}, {t: "Her", c: false}, {t: "Its", c: true}, {t: "My", c: false} ]
                },
                {
                    type: "mcq",
                    q: "(Pointing to a book in hand) '_____ is my favorite book.'",
                    options: [ {t: "That", c: false}, {t: "This", c: true}, {t: "These", c: false}, {t: "Those", c: false} ]
                },
                {
                    type: "mcq",
                    q: "(Pointing to a car far away) '_____ is my father's car.'",
                    options: [ {t: "This", c: false}, {t: "That", c: true}, {t: "These", c: false}, {t: "Those", c: false} ]
                },
                {
                    type: "mcq",
                    q: "(Holding two photos) 'Look! _____ are my cousins.'",
                    options: [ {t: "This", c: false}, {t: "That", c: false}, {t: "These", c: true}, {t: "Those", c: false} ]
                },
                {
                    type: "mcq",
                    q: "(Pointing to birds in the sky) '_____ are beautiful birds.'",
                    options: [ {t: "This", c: false}, {t: "That", c: false}, {t: "These", c: false}, {t: "Those", c: true} ]
                },
                {
                    type: "mcq",
                    q: "Near: 'Who is _____?' 'She is _____ aunt.'",
                    options: [ {t: "that / my", c: false}, {t: "this / my", c: true}, {t: "these / your", c: false}, {t: "those / his", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Far: 'Are _____ your parents?' 'Yes, _____ names are John and Mary.'",
                    options: [ {t: "these / his", c: false}, {t: "that / her", c: false}, {t: "those / their", c: true}, {t: "this / our", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'I have a dog. _____ name is Max.'",
                    options: [ {t: "His", c: false}, {t: "Its", c: true}, {t: "My", c: false}, {t: "Her", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'You have a new car. _____ car is red.'",
                    options: [ {t: "Your", c: true}, {t: "You", c: false}, {t: "Our", c: false}, {t: "His", c: false} ]
                },
                {
                    type: "mcq",
                    q: "(Pointing to a person near) '_____ is my brother, Lucas.'",
                    options: [ {t: "This", c: true}, {t: "That", c: false}, {t: "These", c: false}, {t: "Those", c: false} ]
                },
                {
                    type: "mcq",
                    q: "(Pointing to trees far away) '_____ trees are very tall.'",
                    options: [ {t: "These", c: false}, {t: "Those", c: true}, {t: "This", c: false}, {t: "That", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'She is an artist. _____ paintings are beautiful.'",
                    options: [ {t: "His", c: false}, {t: "Its", c: false}, {t: "Her", c: true}, {t: "Their", c: false} ]
                },
                {
                    type: "mcq",
                    q: "(Holding pens in your hand) '_____ pens are blue.'",
                    options: [ {t: "These", c: true}, {t: "Those", c: false}, {t: "This", c: false}, {t: "That", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'We live here. _____ house is small but nice.'",
                    options: [ {t: "Our", c: true}, {t: "We", c: false}, {t: "Us", c: false}, {t: "Their", c: false} ]
                },
                {
                    type: "mcq",
                    q: "(Pointing to a plane far away in the sky) '_____ plane is very high.'",
                    options: [ {t: "This", c: false}, {t: "That", c: true}, {t: "These", c: false}, {t: "Those", c: false} ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'They are gamers. _____ favorite game is Minecraft.'",
                    options: [ {t: "Our", c: false}, {t: "His", c: false}, {t: "Her", c: false}, {t: "Their", c: true} ]
                },
                {
                    type: "mcq",
                    q: "Near: 'Is _____ your pencil?' 'No, it's _____ pencil.'",
                    options: [ {t: "this / his", c: true}, {t: "that / his", c: false}, {t: "these / her", c: false}, {t: "those / my", c: false} ]
                },
                {
                    type: "mcq",
                    q: "(Pointing to people standing near you) '_____ are the new students.'",
                    options: [ {t: "This", c: false}, {t: "That", c: false}, {t: "These", c: true}, {t: "Those", c: false} ]
                },
                {
                    type: "mcq",
                    q: "(Pointing to a star far away) '_____ star is very bright.'",
                    options: [ {t: "This", c: false}, {t: "That", c: true}, {t: "These", c: false}, {t: "Those", c: false} ]
                }
            ]
        },

        // ======================================================
        // STEP 4: SHADOWING (Recording)
        // ======================================================
        {
            title: "Can you say that again?",
            sentences: [
                { 
                    text: "This is my mother.<br><small style='color:#0077b6'>(Esta é minha mãe.)</small>", 
                    audio: "TTS: This is my mother.", 
                    arrow: "↘" 
                },
                { 
                    text: "That is my father.<br><small style='color:#0077b6'>(Aquele é meu pai.)</small>", 
                    audio: "TTS: That is my father.", 
                    arrow: "↘" 
                },
                { 
                    text: "What does he do?<br><small style='color:#0077b6'>(O que ele faz?)</small>", 
                    audio: "TTS: What does he do?", 
                    arrow: "↘" 
                },
                { 
                    text: "He is a firefighter.<br><small style='color:#0077b6'>(Ele é bombeiro.)</small>", 
                    audio: "TTS: He is a firefighter.", 
                    arrow: "↘" 
                },
                { 
                    text: "These are my sisters.<br><small style='color:#0077b6'>(Estas são minhas irmãs.)</small>", 
                    audio: "TTS: These are my sisters.", 
                    arrow: "↘" 
                },
                { 
                    text: "Those are my friends.<br><small style='color:#0077b6'>(Aqueles são meus amigos.)</small>", 
                    audio: "TTS: Those are my friends.", 
                    arrow: "↘" 
                }
            ]
        },

        // ======================================================
        // STEP 5: LISTENING
        // ======================================================
        {
            title: "Are you following me?",
            drills: [
                // Drill 1: Typing
                {
                    type: "typing",
                    instruction: "Albert is talking about his family photo. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre a foto de sua família. Digite as palavras que faltam.)</small>",
                    audio: "TTS: Hi! Look at this photo. This is my family. This is my mother. She is a manager. And this is my father. He is a firefighter.",
                    text: "Hi! Look at this photo. This is my [family]. This is my [mother]. She is a [manager]. And this is my [father]. He is a [firefighter]."
                },
                // Drill 2: Dropdown
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation between Celine and Albert. Choose the correct option.<br><small style='color:#0077b6'>(Ouça a conversa entre Celine e Albert. Escolha a opção correta.)</small>",
                    audio: "TTS: Celine: Who is that? Albert: That is my uncle. His name is Bob. Celine: What does he do? Albert: He is a farmer.",
                    questions: [
                        { q: "Celine: Who is [that | this]?", a: "that" },
                        { q: "Albert: That is my [uncle | aunt]. [His | Her] name is Bob.", a: "uncle" },
                        { q: "Celine: What does [he | she] do?", a: "he" },
                        { q: "Albert: He is a [farmer | doctor].", a: "farmer" }
                    ]
                },
                // Drill 3: Audio Choice
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the correct answer.<br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta correta.)</small>",
                    audio: "TTS: Are those your parents?",
                    options: [
                        { t: "Yes, this is my mother.", c: false },
                        { t: "Yes, they are.", c: true },
                        { t: "No, he isn't.", c: false },
                        { t: "That is my brother.", c: false }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 6: READING
        // ======================================================
        {
            title: "Get the story",
            texts: [
                // Text 1: Narration
                {
                    title: "Albert's Amazing Family",
                    audio: "TTS: Albert has a very interesting family. His father, Arthur, is a firefighter. He helps people every day. His mother, Mary, is a manager at a big company. Albert also has a brother. His brother is a gamer; he plays video games very well. Albert loves his family. They are very happy together. || audio/6-1-2/p6_text1.mp3",
                    body: "Albert has a very interesting family. His father, Arthur, is a firefighter. He helps people every day. His mother, Mary, is a manager at a big company. Albert also has a brother. His brother is a gamer; he plays video games very well. Albert loves his family. They are very happy together.",
                    questions: [
                        { 
                            q: "What does Albert's father do?", 
                            options: [ 
                                {t: "He is a manager.", c: false}, 
                                {t: "He is a gamer.", c: false}, 
                                {t: "He is a firefighter.", c: true}, 
                                {t: "He is a student.", c: false} 
                            ] 
                        },
                        { 
                            q: "What is his mother's job?", 
                            options: [ 
                                {t: "She is a doctor.", c: false}, 
                                {t: "She is a manager.", c: true}, 
                                {t: "She is a teacher.", c: false}, 
                                {t: "She is a firefighter.", c: false} 
                            ] 
                        },
                        { 
                            q: "Who is a gamer?", 
                            options: [ 
                                {t: "Albert", c: false}, 
                                {t: "Mary", c: false}, 
                                {t: "Arthur", c: false}, 
                                {t: "Albert's brother", c: true} 
                            ] 
                        }
                    ]
                },
                // Text 2: Dialogue
                {
                    title: "Looking at the Album",
                    audio: "audio/6-1-2/p6_text2.mp3",
                    body: "<b>Celine:</b> Albert, look at this photo. Who are these?<br><b>Albert:</b> These are my cousins. They live in Canada.<br><b>Celine:</b> Nice! And who is that woman over there?<br><b>Albert:</b> That is my aunt. She is a singer.<br><b>Celine:</b> Wow! A singer? That is fantastic.<br><b>Albert:</b> Yes, her voice is beautiful.",
                    questions: [
                        { 
                            q: "Who are the people in the photo?", 
                            options: [ 
                                {t: "Albert's parents", c: false}, 
                                {t: "Albert's cousins", c: true}, 
                                {t: "Celine's friends", c: false}, 
                                {t: "The teachers", c: false} 
                            ] 
                        },
                        { 
                            q: "Where do the cousins live?", 
                            options: [ 
                                {t: "Brazil", c: false}, 
                                {t: "USA", c: false}, 
                                {t: "Canada", c: true}, 
                                {t: "Australia", c: false} 
                            ] 
                        },
                        { 
                            q: "What does the aunt do?", 
                            options: [ 
                                {t: "She is a singer.", c: true}, 
                                {t: "She is a manager.", c: false}, 
                                {t: "She is a farmer.", c: false}, 
                                {t: "She is a doctor.", c: false} 
                            ] 
                        }
                    ]
                },
                // Text 3: Description
                {
                    title: "My Grandparents",
                    audio: "TTS: Hello, I am Celine. I want to tell you about my grandparents. Their names are Rose and Peter. They are very nice. Peter is my grandfather. He was a bus driver, but now he is at home. Rose is my grandmother. She is an artist. She paints beautiful pictures. I love my grandparents very much. || audio/6-1-2/p6_text3.mp3",
                    body: "Hello, I am Celine. I want to tell you about my grandparents. Their names are Rose and Peter. They are very nice. Peter is my grandfather. He was a bus driver, but now he is at home. Rose is my grandmother. She is an artist. She paints beautiful pictures. I love my grandparents very much.",
                    questions: [
                        { 
                            q: "What are the names of the grandparents?", 
                            options: [ 
                                {t: "Mary and John", c: false}, 
                                {t: "Rose and Peter", c: true}, 
                                {t: "Celine and Albert", c: false}, 
                                {t: "Anna and Bob", c: false} 
                            ] 
                        },
                        { 
                            q: "What does Rose do?", 
                            options: [ 
                                {t: "She is a bus driver.", c: false}, 
                                {t: "She is a doctor.", c: false}, 
                                {t: "She is an artist.", c: true}, 
                                {t: "She is a manager.", c: false} 
                            ] 
                        },
                        { 
                            q: "What was Peter's job?", 
                            options: [ 
                                {t: "Bus driver", c: true}, 
                                {t: "Gamer", c: false}, 
                                {t: "Artist", c: false}, 
                                {t: "Firefighter", c: false} 
                            ] 
                        }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 7: QUICK DRILLS (Mixed Types)
        // ======================================================
        {
            title: "Monkey see, Monkey do",
            drills: [
                // Drill 1: Matching (Family & Professions)
                {
                    type: "matching",
                    instruction: "Match the word on the left with the correct translation on the right.<br><small style='color:#0077b6'>(Combine a palavra à esquerda com a tradução correta à direita.)</small>",
                    pairs: [
                        { left: "Mother", right: "Mãe", val: "1" },
                        { left: "Firefighter", right: "Bombeiro", val: "2" },
                        { left: "Uncle", right: "Tio", val: "3" },
                        { left: "Nurse", right: "Enfermeira", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Unscramble)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "is / mother / This / my / .",
                    correct: "This is my mother ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.",
                    sentence: "are / Those / cousins / my / .",
                    correct: "Those are my cousins ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.",
                    sentence: "is / job / What / his / ?",
                    correct: "What is his job ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.",
                    sentence: "a / is / She / doctor / .",
                    correct: "She is a doctor ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Father", c: false },
                        { t: "Mother", c: false },
                        { t: "Teacher", c: true },
                        { t: "Sister", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Doctor", c: false },
                        { t: "Gamer", c: false },
                        { t: "Chef", c: false },
                        { t: "Brother", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "My", c: false },
                        { t: "Your", c: false },
                        { t: "His", c: false },
                        { t: "She", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "This", c: false },
                        { t: "That", c: false },
                        { t: "These", c: false },
                        { t: "The", c: true }
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.<br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "I am Albert. [My | Her | This | Those] name is Albert.", a: "My" },
                        { q: "She is Celine. [Her | My | This | Those] family is Australian.", a: "Her" },
                        { q: "[This | Those | My | Her] is my pen (here).", a: "This" },
                        { q: "[Those | This | My | Her] are my friends (there).", a: "Those" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Now it's your turn! Write about three people in your family (or friends).<br><small style='color:#0077b6'>(Ilha de Idiomas: Agora é a sua vez! Escreva sobre três pessoas da sua família ou amigos.)</small>",
            example: "This is my family. My mother is Ana. She is a teacher. My father is Carlos. He is a bus driver. This is my brother. He is a student. I love my family!",
            prompts: [
                "Who are they? (This is my...) <br><small style='color:#0077b6'>(Quem são eles? - Este é meu...)</small>",
                "What are their names? (His/Her name is...) <br><small style='color:#0077b6'>(Quais são os nomes deles? - O nome dele/dela é...)</small>",
                "What do they do? (He/She is a...) <br><small style='color:#0077b6'>(O que eles fazem? - Ele/Ela é um...)</small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Verbs & Family Members)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Verbs ---
                { 
                    term: "Have", 
                    definition: "Have", 
                    defTrans: "<span style='color:#0077b6'>Ter</span>",
                    example: "I have two brothers.", 
                    audioFront: "TTS: Have",
                    audioBack: "TTS: I have two brothers." 
                },
                { 
                    term: "Work", 
                    definition: "Work", 
                    defTrans: "<span style='color:#0077b6'>Trabalhar</span>",
                    example: "My father works at a school.", 
                    audioFront: "TTS: Work",
                    audioBack: "TTS: My father works at a school." 
                },
                { 
                    term: "Love", 
                    definition: "Love", 
                    defTrans: "<span style='color:#0077b6'>Amar</span>",
                    example: "I love my family.", 
                    audioFront: "TTS: Love",
                    audioBack: "TTS: I love my family." 
                },
                { 
                    term: "Play", 
                    definition: "Play", 
                    defTrans: "<span style='color:#0077b6'>Brincar / Jogar</span>",
                    example: "My cousins play soccer.", 
                    audioFront: "TTS: Play",
                    audioBack: "TTS: My cousins play soccer." 
                },
                { 
                    term: "Live", 
                    definition: "Live", 
                    defTrans: "<span style='color:#0077b6'>Morar / Viver</span>",
                    example: "We live in Brazil.", 
                    audioFront: "TTS: Live",
                    audioBack: "TTS: We live in Brazil." 
                },

                // --- Family Members ---
                { 
                    term: "Mother", 
                    definition: "Mother / Mom", 
                    defTrans: "<span style='color:#0077b6'>Mãe</span>",
                    example: "She is my mother.", 
                    audioFront: "TTS: Mother",
                    audioBack: "TTS: She is my mother." 
                },
                { 
                    term: "Father", 
                    definition: "Father / Dad", 
                    defTrans: "<span style='color:#0077b6'>Pai</span>",
                    example: "He is my father.", 
                    audioFront: "TTS: Father",
                    audioBack: "TTS: He is my father." 
                },
                { 
                    term: "Parents", 
                    definition: "Parents", 
                    defTrans: "<span style='color:#0077b6'>Pais</span>",
                    example: "They are my parents.", 
                    audioFront: "TTS: Parents",
                    audioBack: "TTS: They are my parents." 
                },
                { 
                    term: "Brother", 
                    definition: "Brother", 
                    defTrans: "<span style='color:#0077b6'>Irmão</span>",
                    example: "I have one brother.", 
                    audioFront: "TTS: Brother",
                    audioBack: "TTS: I have one brother." 
                },
                { 
                    term: "Sister", 
                    definition: "Sister", 
                    defTrans: "<span style='color:#0077b6'>Irmã</span>",
                    example: "She is my sister.", 
                    audioFront: "TTS: Sister",
                    audioBack: "TTS: She is my sister." 
                },
                { 
                    term: "Siblings", 
                    definition: "Siblings", 
                    defTrans: "<span style='color:#0077b6'>Irmãos (em geral)</span>",
                    example: "Do you have siblings?", 
                    audioFront: "TTS: Siblings",
                    audioBack: "TTS: Do you have siblings?" 
                },
                { 
                    term: "Grandmother", 
                    definition: "Grandmother", 
                    defTrans: "<span style='color:#0077b6'>Avó</span>",
                    example: "My grandmother is nice.", 
                    audioFront: "TTS: Grandmother",
                    audioBack: "TTS: My grandmother is nice." 
                },
                { 
                    term: "Grandfather", 
                    definition: "Grandfather", 
                    defTrans: "<span style='color:#0077b6'>Avô</span>",
                    example: "My grandfather is old.", 
                    audioFront: "TTS: Grandfather",
                    audioBack: "TTS: My grandfather is old." 
                },
                { 
                    term: "Grandparents", 
                    definition: "Grandparents", 
                    defTrans: "<span style='color:#0077b6'>Avós</span>",
                    example: "I visit my grandparents.", 
                    audioFront: "TTS: Grandparents",
                    audioBack: "TTS: I visit my grandparents." 
                },
                { 
                    term: "Aunt", 
                    definition: "Aunt", 
                    defTrans: "<span style='color:#0077b6'>Tia</span>",
                    example: "She is my aunt.", 
                    audioFront: "TTS: Aunt",
                    audioBack: "TTS: She is my aunt." 
                },
                { 
                    term: "Uncle", 
                    definition: "Uncle", 
                    defTrans: "<span style='color:#0077b6'>Tio</span>",
                    example: "He is my uncle.", 
                    audioFront: "TTS: Uncle",
                    audioBack: "TTS: He is my uncle." 
                },
                { 
                    term: "Cousin", 
                    definition: "Cousin", 
                    defTrans: "<span style='color:#0077b6'>Primo(a)</span>",
                    example: "He is my favorite cousin.", 
                    audioFront: "TTS: Cousin",
                    audioBack: "TTS: He is my favorite cousin." 
                },
                { 
                    term: "Child", 
                    definition: "Child", 
                    defTrans: "<span style='color:#0077b6'>Criança / Filho(a)</span>",
                    example: "The child is happy.", 
                    audioFront: "TTS: Child",
                    audioBack: "TTS: The child is happy." 
                },
                { 
                    term: "Children", 
                    definition: "Children", 
                    defTrans: "<span style='color:#0077b6'>Crianças / Filhos(as)</span>",
                    example: "The children are at school.", 
                    audioFront: "TTS: Children",
                    audioBack: "TTS: The children are at school." 
                },
                { 
                    term: "Baby", 
                    definition: "Baby", 
                    defTrans: "<span style='color:#0077b6'>Bebê</span>",
                    example: "The baby is sleeping.", 
                    audioFront: "TTS: Baby",
                    audioBack: "TTS: The baby is sleeping." 
                },
                { 
                    term: "Nephew", 
                    definition: "Nephew", 
                    defTrans: "<span style='color:#0077b6'>Sobrinho</span>",
                    example: "My nephew is five years old.", 
                    audioFront: "TTS: Nephew",
                    audioBack: "TTS: My nephew is five years old." 
                },
                { 
                    term: "Niece", 
                    definition: "Niece", 
                    defTrans: "<span style='color:#0077b6'>Sobrinha</span>",
                    example: "My niece likes dolls.", 
                    audioFront: "TTS: Niece",
                    audioBack: "TTS: My niece likes dolls." 
                },
                // --- Professions ---
                { 
                    term: "Teacher", 
                    definition: "Teacher", 
                    defTrans: "<span style='color:#0077b6'>Professor(a)</span>",
                    example: "She is a teacher.", 
                    audioFront: "TTS: Teacher",
                    audioBack: "TTS: She is a teacher." 
                },
                { 
                    term: "Doctor", 
                    definition: "Doctor", 
                    defTrans: "<span style='color:#0077b6'>Médico(a)</span>",
                    example: "He is a doctor.", 
                    audioFront: "TTS: Doctor",
                    audioBack: "TTS: He is a doctor." 
                },
                { 
                    term: "Student", 
                    definition: "Student", 
                    defTrans: "<span style='color:#0077b6'>Estudante</span>",
                    example: "I am a student.", 
                    audioFront: "TTS: Student",
                    audioBack: "TTS: I am a student." 
                },
                { 
                    term: "Singer", 
                    definition: "Singer", 
                    defTrans: "<span style='color:#0077b6'>Cantor(a)</span>",
                    example: "My sister is a singer.", 
                    audioFront: "TTS: Singer",
                    audioBack: "TTS: My sister is a singer." 
                },
                { 
                    term: "Chef", 
                    definition: "Chef", 
                    defTrans: "<span style='color:#0077b6'>Chef / Cozinheiro(a)</span>",
                    example: "My uncle is a chef.", 
                    audioFront: "TTS: Chef",
                    audioBack: "TTS: My uncle is a chef." 
                },
                { 
                    term: "Artist", 
                    definition: "Artist", 
                    defTrans: "<span style='color:#0077b6'>Artista</span>",
                    example: "She is a great artist.", 
                    audioFront: "TTS: Artist",
                    audioBack: "TTS: She is a great artist." 
                },
                { 
                    term: "Police Officer", 
                    definition: "Police Officer", 
                    defTrans: "<span style='color:#0077b6'>Policial</span>",
                    example: "He is a police officer.", 
                    audioFront: "TTS: Police Officer",
                    audioBack: "TTS: He is a police officer." 
                },
                { 
                    term: "Firefighter", 
                    definition: "Firefighter", 
                    defTrans: "<span style='color:#0077b6'>Bombeiro(a)</span>",
                    example: "My dad is a firefighter.", 
                    audioFront: "TTS: Firefighter",
                    audioBack: "TTS: My dad is a firefighter." 
                },
                { 
                    term: "Bus Driver", 
                    definition: "Bus Driver", 
                    defTrans: "<span style='color:#0077b6'>Motorista de Ônibus</span>",
                    example: "The bus driver is here.", 
                    audioFront: "TTS: Bus Driver",
                    audioBack: "TTS: The bus driver is here." 
                },
                { 
                    term: "Farmer", 
                    definition: "Farmer", 
                    defTrans: "<span style='color:#0077b6'>Fazendeiro(a)</span>",
                    example: "He is a farmer.", 
                    audioFront: "TTS: Farmer",
                    audioBack: "TTS: He is a farmer." 
                },
                { 
                    term: "YouTuber", 
                    definition: "YouTuber", 
                    defTrans: "<span style='color:#0077b6'>YouTuber</span>",
                    example: "I want to be a YouTuber.", 
                    audioFront: "TTS: YouTuber",
                    audioBack: "TTS: I want to be a YouTuber." 
                },
                { 
                    term: "Gamer", 
                    definition: "Gamer", 
                    defTrans: "<span style='color:#0077b6'>Jogador(a) de Videogame</span>",
                    example: "He is a pro gamer.", 
                    audioFront: "TTS: Gamer",
                    audioBack: "TTS: He is a pro gamer." 
                },
                { 
                    term: "Influencer", 
                    definition: "Influencer", 
                    defTrans: "<span style='color:#0077b6'>Influenciador(a)</span>",
                    example: "She is a digital influencer.", 
                    audioFront: "TTS: Influencer",
                    audioBack: "TTS: She is a digital influencer." 
                },
                { 
                    term: "Streamer", 
                    definition: "Streamer", 
                    defTrans: "<span style='color:#0077b6'>Streamer</span>",
                    example: "He is a streamer.", 
                    audioFront: "TTS: Streamer",
                    audioBack: "TTS: He is a streamer." 
                },
                { 
                    term: "Manager", 
                    definition: "Manager", 
                    defTrans: "<span style='color:#0077b6'>Gerente</span>",
                    example: "My mom is a manager.", 
                    audioFront: "TTS: Manager",
                    audioBack: "TTS: My mom is a manager." 
                },

                // --- Phrases & Expressions ---
                { 
                    term: "Who is this?", 
                    definition: "Who is this?", 
                    defTrans: "<span style='color:#0077b6'>Quem é este(a)?</span>",
                    example: "Who is this? It's my dad.", 
                    audioFront: "TTS: Who is this?",
                    audioBack: "TTS: Who is this? It's my dad." 
                },
                { 
                    term: "Who are these?", 
                    definition: "Who are these?", 
                    defTrans: "<span style='color:#0077b6'>Quem são estes(as)?</span>",
                    example: "Who are these? My friends.", 
                    audioFront: "TTS: Who are these?",
                    audioBack: "TTS: Who are these? My friends." 
                },
                { 
                    term: "This is my...", 
                    definition: "This is my...", 
                    defTrans: "<span style='color:#0077b6'>Este(a) é meu/minha...</span>",
                    example: "This is my mother.", 
                    audioFront: "TTS: This is my...",
                    audioBack: "TTS: This is my mother." 
                },
                { 
                    term: "These are my...", 
                    definition: "These are my...", 
                    defTrans: "<span style='color:#0077b6'>Estes(as) são meus/minhas...</span>",
                    example: "These are my brothers.", 
                    audioFront: "TTS: These are my...",
                    audioBack: "TTS: These are my brothers." 
                },
                { 
                    term: "What does he do?", 
                    definition: "What does he do?", 
                    defTrans: "<span style='color:#0077b6'>O que ele faz? (Profissão)</span>",
                    example: "What does he do? He is a pilot.", 
                    audioFront: "TTS: What does he do?",
                    audioBack: "TTS: What does he do? He is a pilot." 
                },

                // --- Grammar Points ---
                { 
                    term: "Possessive Adjectives", 
                    definition: "My, Your, His, Her, Its, Our, Their", 
                    defTrans: "<span style='color:#0077b6'>Meu, Seu, Dele, Dela, Dele/Dela, Nosso, Deles/Delas</span>",
                    example: "This is my book.", 
                    audioFront: "TTS: Possessive Adjectives",
                    audioBack: "TTS: This is my book." 
                },
                { 
                    term: "This", 
                    definition: "This (Singular, Near)", 
                    defTrans: "<span style='color:#0077b6'>Este / Esta / Isto (Perto)</span>",
                    example: "This is my pen.", 
                    audioFront: "TTS: This",
                    audioBack: "TTS: This is my pen." 
                },
                { 
                    term: "That", 
                    definition: "That (Singular, Far)", 
                    defTrans: "<span style='color:#0077b6'>Aquele / Aquela / Aquilo (Longe)</span>",
                    example: "That is my house.", 
                    audioFront: "TTS: That",
                    audioBack: "TTS: That is my house." 
                },
                { 
                    term: "These", 
                    definition: "These (Plural, Near)", 
                    defTrans: "<span style='color:#0077b6'>Estes / Estas (Perto)</span>",
                    example: "These are my keys.", 
                    audioFront: "TTS: These",
                    audioBack: "TTS: These are my keys." 
                },
                { 
                    term: "Those", 
                    definition: "Those (Plural, Far)", 
                    defTrans: "<span style='color:#0077b6'>Aqueles / Aquelas (Longe)</span>",
                    example: "Those are birds.", 
                    audioFront: "TTS: Those",
                    audioBack: "TTS: Those are birds." 
                }
            ]
        }
    ], // Closes Steps array

    // ======================================================
    // GLOSSARY (Part 1: Context & Family Members)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "who-is-this", 
            definition: "Question used to ask about the identity of a person nearby.", 
            translation: "Quem é este(a)?" 
        },
        { 
            topic: "Context", 
            term: "what-does-she-do", 
            definition: "Question used to ask about someone's job or profession.", 
            translation: "O que ela faz?" 
        },
        { 
            topic: "Context", 
            term: "that-is", 
            definition: "Phrase used to point at one person or thing that is far.", 
            translation: "Aquele(a) é..." 
        },
        { 
            topic: "Context", 
            term: "who-are-these", 
            definition: "Question used to ask about the identity of multiple people nearby.", 
            translation: "Quem são estes(as)?" 
        },
        { 
            topic: "Context", 
            term: "these-are", 
            definition: "Phrase used to introduce multiple people or things that are near.", 
            translation: "Estes(as) são..." 
        },
        { 
            topic: "Context", 
            term: "those-are", 
            definition: "Phrase used to point at multiple people or things that are far.", 
            translation: "Aqueles(as) são..." 
        },

        // --- TOPIC 2: FAMILY MEMBERS ---
        { 
            topic: "Family", 
            term: "mother", 
            definition: "A female parent.", 
            translation: "Mãe" 
        },
        { 
            topic: "Family", 
            term: "father", 
            definition: "A male parent.", 
            translation: "Pai" 
        },
        { 
            topic: "Family", 
            term: "parents", 
            definition: "A father and mother.", 
            translation: "Pais" 
        },
        { 
            topic: "Family", 
            term: "brother", 
            definition: "A male sibling.", 
            translation: "Irmão" 
        },
        { 
            topic: "Family", 
            term: "sister", 
            definition: "A female sibling.", 
            translation: "Irmã" 
        },
        { 
            topic: "Family", 
            term: "siblings", 
            definition: "Brothers and sisters in general.", 
            translation: "Irmãos (em geral)" 
        },
        { 
            topic: "Family", 
            term: "grandmother", 
            definition: "The mother of one's father or mother.", 
            translation: "Avó" 
        },
        { 
            topic: "Family", 
            term: "grandfather", 
            definition: "The father of one's father or mother.", 
            translation: "Avô" 
        },
        { 
            topic: "Family", 
            term: "grandparents", 
            definition: "The parents of one's father or mother.", 
            translation: "Avós" 
        },
        { 
            topic: "Family", 
            term: "aunt", 
            definition: "The sister of one's father or mother.", 
            translation: "Tia" 
        },
        { 
            topic: "Family", 
            term: "uncle", 
            definition: "The brother of one's father or mother.", 
            translation: "Tio" 
        },
        { 
            topic: "Family", 
            term: "cousin", 
            definition: "The child of one's aunt or uncle.", 
            translation: "Primo(a)" 
        },
        { 
            topic: "Family", 
            term: "child", 
            definition: "A young human being below the age of puberty.", 
            translation: "Criança / Filho(a)" 
        },
        { 
            topic: "Family", 
            term: "baby", 
            definition: "A very young child, one who has not yet begun to walk or talk.", 
            translation: "Bebê" 
        },
        { 
            topic: "Family", 
            term: "nephew", 
            definition: "The son of one's brother or sister.", 
            translation: "Sobrinho" 
        },
        { 
            topic: "Family", 
            term: "niece", 
            definition: "The daughter of one's brother or sister.", 
            translation: "Sobrinha" 
        },
        // --- TOPIC 3: PROFESSIONS ---
        { 
            topic: "Professions", 
            term: "teacher", 
            definition: "A person who teaches, especially in a school.", 
            translation: "Professor(a)" 
        },
        { 
            topic: "Professions", 
            term: "doctor", 
            definition: "A qualified practitioner of medicine.", 
            translation: "Médico(a)" 
        },
        { 
            topic: "Professions", 
            term: "student", 
            definition: "A person who is studying at a school or college.", 
            translation: "Estudante" 
        },
        { 
            topic: "Professions", 
            term: "singer", 
            definition: "A person who sings, especially professionally.", 
            translation: "Cantor(a)" 
        },
        { 
            topic: "Professions", 
            term: "chef", 
            definition: "A professional cook, typically the chief cook in a restaurant or hotel.", 
            translation: "Chef / Cozinheiro(a)" 
        },
        { 
            topic: "Professions", 
            term: "artist", 
            definition: "A person who produces paintings or drawings as a profession or hobby.", 
            translation: "Artista" 
        },
        { 
            topic: "Professions", 
            term: "police-officer", 
            definition: "A member of a police force.", 
            translation: "Policial" 
        },
        { 
            topic: "Professions", 
            term: "firefighter", 
            definition: "A person whose job is to extinguish fires.", 
            translation: "Bombeiro(a)" 
        },
        { 
            topic: "Professions", 
            term: "bus-driver", 
            definition: "A person who drives a bus.", 
            translation: "Motorista de Ônibus" 
        },
        { 
            topic: "Professions", 
            term: "farmer", 
            definition: "A person who owns or manages a farm.", 
            translation: "Fazendeiro(a)" 
        },
        { 
            topic: "Professions", 
            term: "youtuber", 
            definition: "A person who creates and uploads videos on YouTube.", 
            translation: "YouTuber" 
        },
        { 
            topic: "Professions", 
            term: "gamer", 
            definition: "A person who plays video games or participates in role-playing games.", 
            translation: "Jogador(a) de Videogame" 
        },
        { 
            topic: "Professions", 
            term: "influencer", 
            definition: "A person with the ability to influence potential buyers on social media.", 
            translation: "Influenciador(a)" 
        },
        { 
            topic: "Professions", 
            term: "streamer", 
            definition: "A person who broadcasts themselves online through a live stream.", 
            translation: "Streamer" 
        },
        { 
            topic: "Professions", 
            term: "manager", 
            definition: "A person responsible for controlling or administering a company.", 
            translation: "Gerente" 
        },

        // --- TOPIC 4: GRAMMAR & MISC ---
        { 
            topic: "Grammar & Misc", 
            term: "what-does-he-do", 
            definition: "Question used to ask about someone's profession.", 
            translation: "O que ele faz? (Profissão)" 
        },
        { 
            topic: "Grammar & Misc", 
            term: "this-is-my", 
            definition: "Phrase used to introduce someone close to you.", 
            translation: "Este(a) é meu/minha..." 
        },
        { 
            topic: "Grammar & Misc", 
            term: "these-are-my", 
            definition: "Phrase used to introduce a group of people close to you.", 
            translation: "Estes(as) são meus/minhas..." 
        },
        { 
            topic: "Grammar & Misc", 
            term: "possessive-adjectives", 
            definition: "Words used to show ownership (my, your, his, her, its, our, their).", 
            translation: "Adjetivos Possessivos" 
        },
        { 
            topic: "Grammar & Misc", 
            term: "demonstrative-pronouns", 
            definition: "Words used to point to specific things (this, that, these, those).", 
            translation: "Pronomes Demonstrativos" 
        }
    ] // Closes glossary array
}); // Closes initLesson object