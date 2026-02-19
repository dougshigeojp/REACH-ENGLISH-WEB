/**
 * REACH English - LESSON DATA 7-4-8
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "7-4-8", 
    grade: "7th Grade",       
    bimester: "4",   
    chapter: "8",    
    chapterTitle: "Are You Nuts?", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Talk about food, health, and nutrition.<br>• Identify different types of diets and food groups.<br>• Use subject and object pronouns correctly.<br>• Use possessive adjectives and pronouns correctly.<br>• Understand common food idioms.",
            welcome: "Hello, Foodies! It's Mr. D!<br><br>Welcome to \"Are You Nuts?\"! Today, we are going to explore the delicious world of food. We'll learn about healthy eating, different diets, and even some funny expressions about food. We will also become experts at using pronouns to talk about ourselves, others, and who things belong to. Let's make learning English a piece of cake!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about food, health, and nutrition. Identify different types of diets and food groups. Use subject and object pronouns correctly. Use possessive adjectives and pronouns correctly. Understand common food idioms.",
                welcome: "TTS: Hello, Foodies! It's Mr. D! Welcome to Are You Nuts! Today, we are going to explore the delicious world of food. We'll learn about healthy eating, different diets, and even some funny expressions about food. We will also become experts at using pronouns to talk about ourselves, others, and who things belong to. Let's make learning English a piece of cake!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Albert and Celine are sitting at a table in a cafeteria with their lunch trays. Sound of clattering plates and people talking.", 
            contextAudio: "audio/7-4-8/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "Wow, Celine, [your](tooltip:your) lunch looks [healthy](tooltip:healthy)! Is that [quinoa](tooltip:quinoa)?" 
                },
                { 
                    speaker: "Celine", 
                    text: "Yes, it is. My mom [made it for me](tooltip:made-it-for-me). She is very careful about [nutrition](tooltip:nutrition)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Cool! I [brought](tooltip:brought) a [sandwich](tooltip:sandwich). It's [mine](tooltip:mine), but I can [share](tooltip:share) with [you](tooltip:you)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Thanks! I love sandwiches. Is that an [apple](tooltip:apple)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "Yes, it is. An apple a day keeps the [doctor](tooltip:doctor) away!" 
                },
                { 
                    speaker: "Celine", 
                    text: "Haha. You are right. Healthy food gives [us](tooltip:us) [energy](tooltip:energy)." 
                },
                { 
                    speaker: "Albert", 
                    text: "[Whose](tooltip:whose) [cookie](tooltip:cookie) is this? Is it [yours](tooltip:yours)?" 
                },
                { 
                    speaker: "Celine", 
                    text: "No, it's not [mine](tooltip:mine). Maybe it's [his](tooltip:his) (pointing to a friend)." 
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
                    title: "Food & Health",
                    audio: "TTS: Food. Meal. Healthy. Unhealthy. Nutrients. Nutrition. Sugar. Fat. Organic food. Plate. Health. Diet. Added sugar. Eating style.",
                    items: [
                        { term: "Food", trans: "Comida / Alimento" },
                        { term: "Meal", trans: "Refeição" },
                        { term: "Healthy", trans: "Saudável" },
                        { term: "Unhealthy", trans: "Não saudável" },
                        { term: "Nutrients", trans: "Nutrientes" },
                        { term: "Nutrition", trans: "Nutrição" },
                        { term: "Sugar", trans: "Açúcar" },
                        { term: "Fat", trans: "Gordura" },
                        { term: "Organic food", trans: "Comida orgânica" },
                        { term: "Plate", trans: "Prato" },
                        { term: "Health", trans: "Saúde" },
                        { term: "Diet", trans: "Dieta / Regime" },
                        { term: "Added sugar", trans: "Açúcar adicionado" },
                        { term: "Eating style", trans: "Estilo de alimentação" }
                    ]
                },
                {
                    title: "Food Groups & The Food Pyramid",
                    audio: "TTS: Meat, Poultry, Fish, Eggs. Dairy. Grains, Cereals. Fruits. Vegetables. Fats, Oils. Sweets. Food Pyramid.",
                    items: [
                        { term: "Meat / Poultry / Fish / Eggs", trans: "Carne / Aves / Peixe / Ovos" },
                        { term: "Dairy", trans: "Laticínios" },
                        { term: "Grains / Cereals", trans: "Grãos / Cereais" },
                        { term: "Fruits", trans: "Frutas" },
                        { term: "Vegetables", trans: "Vegetais / Legumes" },
                        { term: "Fats / Oils", trans: "Gorduras / Óleos" },
                        { term: "Sweets", trans: "Doces" },
                        { term: "Food Pyramid", trans: "Pirâmide Alimentar" }
                    ]
                },
                {
                    title: "Diets & Meals",
                    audio: "TTS: Vegetarian. Vegan. Nut-free. Dairy-free. Gluten-free. Sugar-free. Keto or Low-carb. Paleo or Raw.",
                    items: [
                        { term: "Vegetarian", trans: "Vegetariano(a)" },
                        { term: "Vegan", trans: "Vegano(a)" },
                        { term: "Nut-free", trans: "Sem nozes/castanhas" },
                        { term: "Dairy-free", trans: "Sem laticínios" },
                        { term: "Gluten-free", trans: "Sem glúten" },
                        { term: "Sugar-free", trans: "Sem açúcar" },
                        { term: "Keto / Low-carb", trans: "Cetogênica / Baixo carboidrato" },
                        { term: "Paleo / Raw", trans: "Paleo / Comida crua" }
                    ]
                },
                {
                    title: "Pronouns",
                    audio: "TTS: I, Me, My, Mine. You, Your, Yours. He, Him, His. She, Her, Hers. It, Its. We, Us, Our, Ours. They, Them, Their, Theirs.",
                    items: [
                        { term: "I / Me / My / Mine", trans: "Eu / Mim / Meu / O meu" },
                        { term: "You / You / Your / Yours", trans: "Você / Você / Seu / O seu" },
                        { term: "He / Him / His / His", trans: "Ele / Ele / Dele / O dele" },
                        { term: "She / Her / Her / Hers", trans: "Ela / Ela / Dela / O dela" },
                        { term: "It / It / Its / Its", trans: "Ele(a) / Ele(a) / Dele(a)" },
                        { term: "We / Us / Our / Ours", trans: "Nós / Nos / Nosso / O nosso" },
                        { term: "They / Them / Their / Theirs", trans: "Eles(as) / Eles(as) / Deles(as) / O deles(as)" }
                    ]
                },
                {
                    title: "Food Idioms",
                    audio: "TTS: A piece of cake. Nuts about. My cup of tea. Cry over spilled milk. Apple of one's eye. A bad egg. Cream of the crop. A big cheese. In a nutshell. Cheesy.",
                    items: [
                        { term: "A piece of cake", trans: "Moleza (algo muito fácil)" },
                        { term: "Nuts about", trans: "Louco(a) por algo/alguém" },
                        { term: "My cup of tea", trans: "Minha praia (o que eu gosto)" },
                        { term: "Cry over spilled milk", trans: "Chorar pelo leite derramado" },
                        { term: "Apple of one's eye", trans: "A menina dos olhos" },
                        { term: "A bad egg", trans: "Uma má pessoa (ovelha negra)" },
                        { term: "Cream of the crop", trans: "A nata (o melhor do grupo)" },
                        { term: "A big cheese", trans: "Um chefão (pessoa importante)" },
                        { term: "In a nutshell", trans: "Em resumo" },
                        { term: "Cheesy", trans: "Brega / Clichê" }
                    ]
                }
            ], // This closes the areas array in Step 2

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Food & Health",
                    audio: "TTS: We need food to live. Breakfast is an important meal. Fruit is a healthy snack. Too much soda is unhealthy. Vegetables have many nutrients. Don't eat too much sugar. Avocado has good fat. We buy organic vegetables. Put the food on your plate. She has a balanced diet.",
                    items: [
                        { term: "Food", sent: "We need food to live.", trans: "<span style='color:#0077b6'>Precisamos de comida para viver.</span>" },
                        { term: "Meal", sent: "Breakfast is an important meal.", trans: "<span style='color:#0077b6'>O café da manhã é uma refeição importante.</span>" },
                        { term: "Healthy", sent: "Fruit is a healthy snack.", trans: "<span style='color:#0077b6'>Fruta é um lanche saudável.</span>" },
                        { term: "Unhealthy", sent: "Too much soda is unhealthy.", trans: "<span style='color:#0077b6'>Muito refrigerante não é saudável.</span>" },
                        { term: "Nutrients", sent: "Vegetables have many nutrients.", trans: "<span style='color:#0077b6'>Vegetais têm muitos nutrientes.</span>" },
                        { term: "Sugar", sent: "Don't eat too much sugar.", trans: "<span style='color:#0077b6'>Não coma muito açúcar.</span>" },
                        { term: "Fat", sent: "Avocado has good fat.", trans: "<span style='color:#0077b6'>Abacate tem gordura boa.</span>" },
                        { term: "Organic food", sent: "We buy organic vegetables.", trans: "<span style='color:#0077b6'>Nós compramos vegetais orgânicos.</span>" },
                        { term: "Plate", sent: "Put the food on your plate.", trans: "<span style='color:#0077b6'>Coloque a comida no seu prato.</span>" },
                        { term: "Diet", sent: "She has a balanced diet.", trans: "<span style='color:#0077b6'>Ela tem uma dieta equilibrada.</span>" }
                    ]
                },
                {
                    title: "Food Groups & The Food Pyramid",
                    audio: "TTS: Steak is a type of meat. Milk and cheese are dairy products. Rice is a type of grain. Apples are delicious fruits. Eat your vegetables! I love sweets like chocolate.",
                    items: [
                        { term: "Meat", sent: "Steak is a type of meat.", trans: "<span style='color:#0077b6'>Bife é um tipo de carne.</span>" },
                        { term: "Dairy", sent: "Milk and cheese are dairy products.", trans: "<span style='color:#0077b6'>Leite e queijo são laticínios.</span>" },
                        { term: "Grain", sent: "Rice is a type of grain.", trans: "<span style='color:#0077b6'>Arroz é um tipo de grão.</span>" },
                        { term: "Fruits", sent: "Apples are delicious fruits.", trans: "<span style='color:#0077b6'>Maçãs são frutas deliciosas.</span>" },
                        { term: "Vegetables", sent: "Eat your vegetables!", trans: "<span style='color:#0077b6'>Coma seus vegetais!</span>" },
                        { term: "Sweets", sent: "I love sweets like chocolate.", trans: "<span style='color:#0077b6'>Eu amo doces como chocolate.</span>" }
                    ]
                },
                {
                    title: "Diets & Meals",
                    audio: "TTS: He is a vegetarian; he doesn't eat meat. A vegan diet has no animal products. This school is nut-free. This bread is gluten-free. This meal is sugar-free. I follow a Keto diet. This is a Paleo meal.",
                    items: [
                        { term: "Vegetarian", sent: "He is a vegetarian; he doesn't eat meat.", trans: "<span style='color:#0077b6'>Ele é vegetariano; ele não come carne.</span>" },
                        { term: "Vegan", sent: "A vegan diet has no animal products.", trans: "<span style='color:#0077b6'>Uma dieta vegana não tem produtos animais.</span>" },
                        { term: "Nut-free", sent: "This school is nut-free.", trans: "<span style='color:#0077b6'>Esta escola é livre de nozes.</span>" },
                        { term: "Gluten-free", sent: "This bread is gluten-free.", trans: "<span style='color:#0077b6'>Este pão é sem glúten.</span>" },
                        { term: "Sugar-free", sent: "This meal is sugar-free.", trans: "<span style='color:#0077b6'>Esta refeição é sem açúcar.</span>" },
                        { term: "Keto / Low-carb", sent: "I follow a Keto diet.", trans: "<span style='color:#0077b6'>Eu sigo uma dieta Keto.</span>" },
                        { term: "Paleo / Raw", sent: "This is a Paleo meal.", trans: "<span style='color:#0077b6'>Esta é uma refeição Paleo.</span>" }
                    ]
                },
                {
                    title: "Pronouns",
                    audio: "TTS: I like apples. She gave me an apple. I eat. She helps me. You cook. I help you. He cooks well. I asked him for a recipe. He runs. I saw him. She is healthy. I saw her at the gym. Her water. The water is hers. We eat together. Mom cooks for us. Our kitchen. The kitchen is ours. They are hungry. Feed them. Their food. The food is theirs.",
                    items: [
                        { term: "I / Me", sent: "I like apples. She gave me an apple.", trans: "<span style='color:#0077b6'>Eu gosto de maçãs. Ela me deu uma maçã.</span>" },
                        { term: "I / Me (Context)", sent: "I eat. / She helps me.", trans: "<span style='color:#0077b6'>Eu como. / Ela me ajuda.</span>" },
                        { term: "You / You", sent: "You cook. / I help you.", trans: "<span style='color:#0077b6'>Você cozinha. / Eu te ajudo.</span>" },
                        { term: "He / Him", sent: "He cooks well. / I asked him for a recipe.", trans: "<span style='color:#0077b6'>Ele cozinha bem. / Eu pedi uma receita para ele.</span>" },
                        { term: "He / Him (Context)", sent: "He runs. / I saw him.", trans: "<span style='color:#0077b6'>Ele corre. / Eu o vi.</span>" },
                        { term: "She / Her", sent: "She is healthy. / I saw her at the gym.", trans: "<span style='color:#0077b6'>Ela é saudável. / Eu a vi na academia.</span>" },
                        { term: "Her / Hers", sent: "Her water. / The water is hers.", trans: "<span style='color:#0077b6'>A água dela. / A água é dela.</span>" },
                        { term: "We / Us", sent: "We eat together. / Mom cooks for us.", trans: "<span style='color:#0077b6'>Nós comemos juntos. / Mamãe cozinha para nós.</span>" },
                        { term: "Our / Ours", sent: "Our kitchen. / The kitchen is ours.", trans: "<span style='color:#0077b6'>Nossa cozinha. / A cozinha é nossa.</span>" },
                        { term: "They / Them", sent: "They are hungry. / Feed them.", trans: "<span style='color:#0077b6'>Eles estão com fome. / Alimente-os.</span>" },
                        { term: "Their / Theirs", sent: "Their food. / The food is theirs.", trans: "<span style='color:#0077b6'>A comida deles. / A comida é deles.</span>" }
                    ]
                },
                {
                    title: "Food Idioms",
                    audio: "TTS: The test was a piece of cake. I am nuts about chocolate. Horror movies are not my cup of tea. Don't cry over spilled milk. She is the apple of his eye. A bad egg. In a nutshell, eat healthy. Cheesy jokes.",
                    items: [
                        { term: "A piece of cake", sent: "The test was a piece of cake.", trans: "<span style='color:#0077b6'>A prova foi moleza.</span>" },
                        { term: "Nuts about", sent: "I am nuts about chocolate.", trans: "<span style='color:#0077b6'>Eu sou louco(a) por chocolate.</span>" },
                        { term: "My cup of tea", sent: "Horror movies are not my cup of tea.", trans: "<span style='color:#0077b6'>Filmes de terror não são minha praia.</span>" },
                        { term: "Cry over spilled milk", sent: "Don't cry over spilled milk.", trans: "<span style='color:#0077b6'>Não chore pelo leite derramado.</span>" },
                        { term: "Apple of one's eye", sent: "She is the apple of his eye.", trans: "<span style='color:#0077b6'>Ela é a menina dos olhos dele.</span>" },
                        { term: "A bad egg", sent: "He is a bad egg.", trans: "<span style='color:#0077b6'>Ele é uma má pessoa.</span>" },
                        { term: "Cream of the crop", sent: "They are the cream of the crop.", trans: "<span style='color:#0077b6'>Eles são a nata (o melhor do grupo).</span>" },
                        { term: "A big cheese", sent: "He thinks he is a big cheese.", trans: "<span style='color:#0077b6'>Ele acha que é um chefão.</span>" },
                        { term: "In a nutshell", sent: "In a nutshell, eat healthy.", trans: "<span style='color:#0077b6'>Em resumo, coma de forma saudável.</span>" },
                        { term: "Cheesy", sent: "I don't like cheesy jokes.", trans: "<span style='color:#0077b6'>Eu não gosto de piadas bregas.</span>" }
                    ]
                }
            ], // This closes the exampleGroups array

            // 2C: Practice Drills (Part 1: 1-12)
            drills: [
                {
                    type: "mcq",
                    q: "Food Vocabulary: Which one is a fruit?",
                    options: [
                        { t: "Carrot", c: false },
                        { t: "Banana", c: true },
                        { t: "Chicken", c: false },
                        { t: "Bread", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Diets: A person who does not eat any animal products is...",
                    options: [
                        { t: "Vegetarian", c: false },
                        { t: "Vegan", c: true },
                        { t: "Gluten-free", c: false },
                        { t: "Paleo", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Pronouns (Subject/Object): '_______ (She) helps _______ (I).'",
                    options: [
                        { t: "She / me", c: true },
                        { t: "Her / I", c: false },
                        { t: "She / my", c: false },
                        { t: "Her / me", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Pronouns: 'This is not your book. It is _______ (my book).'",
                    options: [
                        { t: "my", c: false },
                        { t: "me", c: false },
                        { t: "mine", c: true },
                        { t: "I", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Adjectives: 'Is that _______ (he) car?'",
                    options: [
                        { t: "him", c: false },
                        { t: "he", c: false },
                        { t: "his", c: true },
                        { t: "he's", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Idioms: 'The test was very easy. It was _______.'",
                    options: [
                        { t: "a bad egg", c: false },
                        { t: "a piece of cake", c: true },
                        { t: "cheesy", c: false },
                        { t: "nuts", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Idioms: 'I don't like horror movies. They are not my _______.'",
                    options: [
                        { t: "cup of tea", c: true },
                        { t: "piece of cake", c: false },
                        { t: "cream of the crop", c: false },
                        { t: "big cheese", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Pronouns (Plural): 'This house belongs to us. It is _______.'",
                    options: [
                        { t: "our", c: false },
                        { t: "ours", c: true },
                        { t: "us", c: false },
                        { t: "we", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Food Groups: Milk and cheese belong to which group?",
                    options: [
                        { t: "Grains", c: false },
                        { t: "Dairy", c: true },
                        { t: "Vegetables", c: false },
                        { t: "Meat", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Adjectives: Eating too much sugar is...",
                    options: [
                        { t: "Healthy", c: false },
                        { t: "Unhealthy", c: true },
                        { t: "Organic", c: false },
                        { t: "Nut-free", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "General Vocabulary: A sweet crystalline substance obtained from plants is...",
                    options: [
                        { t: "Sugar", c: true },
                        { t: "Fat", c: false },
                        { t: "Plate", c: false },
                        { t: "Nutrients", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Diets: This diet is based on what cavemen used to eat...",
                    options: [
                        { t: "Vegan", c: false },
                        { t: "Paleo", c: true },
                        { t: "Keto", c: false },
                        { t: "Gluten-free", c: false }
                    ]
                },
                // 2C: Practice Drills (Part 2: 13-24)
                {
                    type: "mcq",
                    q: "Idioms: A person who is extremely fond and proud of another is the...",
                    options: [
                        { t: "bad egg", c: false },
                        { t: "big cheese", c: false },
                        { t: "apple of their eye", c: true },
                        { t: "cream of the crop", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Food Groups: Rice, bread, and wheat belong to which group?",
                    options: [
                        { t: "Dairy", c: false },
                        { t: "Grains", c: true },
                        { t: "Fruits", c: false },
                        { t: "Vegetables", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Pronouns (Object): 'Can you help _______ (I) with the lunch tray?'",
                    options: [
                        { t: "my", c: false },
                        { t: "me", c: true },
                        { t: "mine", c: false },
                        { t: "I", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Idioms: 'I love pizza! I am _______ it!'",
                    options: [
                        { t: "nuts about", c: true },
                        { t: "cheesy with", c: false },
                        { t: "a bad egg to", c: false },
                        { t: "a piece of cake for", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Diets: A diet that excludes peanuts and walnuts is...",
                    options: [
                        { t: "Gluten-free", c: false },
                        { t: "Dairy-free", c: false },
                        { t: "Nut-free", c: true },
                        { t: "Paleo", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Pronouns (Possessive): 'Those sandwiches belong to the boys. They are _______.'",
                    options: [
                        { t: "their", c: false },
                        { t: "theirs", c: true },
                        { t: "them", c: false },
                        { t: "they", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Idioms: Don't be upset about something that already happened; don't _______.",
                    options: [
                        { t: "be a bad egg", c: false },
                        { t: "eat a piece of cake", c: false },
                        { t: "cry over spilled milk", c: true },
                        { t: "be cheesy", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Food Vocabulary: Food produced without the use of artificial chemicals is...",
                    options: [
                        { t: "Organic food", c: true },
                        { t: "Unhealthy food", c: false },
                        { t: "Fast food", c: false },
                        { t: "Added sugar", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Pronouns (Object): 'The waiter brought the pasta to _______ (he).'",
                    options: [
                        { t: "his", c: false },
                        { t: "him", c: true },
                        { t: "he", c: false },
                        { t: "he's", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Idioms: 'To summarize simply' means to put it _______.",
                    options: [
                        { t: "in a nutshell", c: true },
                        { t: "on a plate", c: false },
                        { t: "in a tea cup", c: false },
                        { t: "as a bad egg", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Food Groups: Carrots, broccoli, and lettuce are...",
                    options: [
                        { t: "Fruits", c: false },
                        { t: "Grains", c: false },
                        { t: "Vegetables", c: true },
                        { t: "Dairy", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Pronouns (Possessive Adjective): 'Sarah is eating _______ healthy breakfast.'",
                    options: [
                        { t: "hers", c: false },
                        { t: "she", c: false },
                        { t: "her", c: true },
                        { t: "herself", c: false }
                    ]
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

            // 3A: Explanations (Tabbed)
            patterns: [
                {
                    title: "Subject vs. Object Pronouns",
                    audio: "TTS: Subject pronouns perform the action and come before the verb. Object pronouns receive the action and come after the verb or a preposition. For example: I eat, but Mom feeds me. We share, but she cooks for us.",
                    explanation: "Pronouns replace nouns. The form changes depending on their job in the sentence.<br><br><span style='color:#0077b6; font-style:italic;'>(Pronomes substituem substantivos. A forma muda dependendo da função deles na frase.)</span>",
                    samples: [
                        { en: "Subject (before verb): I eat. / You cook. / He drinks.", pt: "<span style='color:#0077b6'>Sujeito: Eu como. / Você cozinha. / Ele bebe.</span>" },
                        { en: "Object (after verb/preposition): Mom feeds me. / I help you. / She cooks for us.", pt: "<span style='color:#0077b6'>Objeto: Mamãe me alimenta. / Eu te ajudo. / Ela cozinha para nós.</span>" },
                        { en: "The chef (He) cooks well. / I met him.", pt: "<span style='color:#0077b6'>O chef cozinha bem. / Eu o conheci.</span>" }
                    ]
                },
                {
                    title: "Possessive Adjectives",
                    audio: "TTS: Possessive adjectives show ownership and are always followed by a noun. My apple, your diet, his lunch, her juice, our dinner.",
                    explanation: "These words show ownership. They are ALWAYS followed by a noun.<br><br><span style='color:#0077b6; font-style:italic;'>(Estas palavras mostram posse. Elas são SEMPRE seguidas por um substantivo.)</span>",
                    samples: [
                        { en: "My apple is red.", pt: "<span style='color:#0077b6'>Minha maçã é vermelha.</span>" },
                        { en: "Your diet is healthy.", pt: "<span style='color:#0077b6'>Sua dieta é saudável.</span>" },
                        { en: "His lunch is big.", pt: "<span style='color:#0077b6'>O almoço dele é grande.</span>" },
                        { en: "Our dinner is ready.", pt: "<span style='color:#0077b6'>Nosso jantar está pronto.</span>" },
                        { en: "Their food is organic.", pt: "<span style='color:#0077b6'>A comida deles é orgânica.</span>" }
                    ]
                },
                {
                    title: "Possessive Pronouns",
                    audio: "TTS: Possessive pronouns also show ownership, but they replace the noun. They stand alone, usually at the end of the sentence. The apple is mine. The diet is yours. The lunch is his.",
                    explanation: "These words also show ownership, but they REPLACE the noun. They stand alone.<br><br><span style='color:#0077b6; font-style:italic;'>(Estas palavras também mostram posse, mas elas substituem o substantivo. Elas ficam sozinhas.)</span>",
                    samples: [
                        { en: "The apple is mine.", pt: "<span style='color:#0077b6'>A maçã é minha. (Substitui 'my apple')</span>" },
                        { en: "The diet is yours.", pt: "<span style='color:#0077b6'>A dieta é sua.</span>" },
                        { en: "The lunch is his.", pt: "<span style='color:#0077b6'>O almoço é dele.</span>" },
                        { en: "The juice is hers.", pt: "<span style='color:#0077b6'>O suco é dela.</span>" },
                        { en: "The dinner is ours.", pt: "<span style='color:#0077b6'>O jantar é nosso.</span>" }
                    ]
                },
                {
                    title: "Adjectives vs. Pronouns",
                    audio: "TTS: Remember: Adjectives need a noun, but pronouns stand alone. My food becomes mine. Your plate becomes yours. Their house becomes theirs.",
                    explanation: "Compare how we use them. Adjectives need a noun. Pronouns stand alone.<br><br><span style='color:#0077b6; font-style:italic;'>(Adjetivos precisam de um substantivo. Pronomes ficam sozinhos.)</span>",
                    samples: [
                        { en: "I: This is my food. -> This food is mine.", pt: "<span style='color:#0077b6'>Este é meu alimento. -> Este alimento é meu.</span>" },
                        { en: "You: Is this your plate? -> Is this plate yours?", pt: "<span style='color:#0077b6'>Este é seu prato? -> Este prato é seu?</span>" },
                        { en: "She: It is her recipe. -> The recipe is hers.", pt: "<span style='color:#0077b6'>É a receita dela. -> A receita é dela.</span>" },
                        { en: "They: That is their house. -> That house is theirs.", pt: "<span style='color:#0077b6'>Aquela é a casa deles. -> Aquela casa é deles.</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Subject vs. Object Pronouns",
                    audio: "audio/7-4-8/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "I made a sandwich for you.", 
                            pt: "<span style='color:#0077b6'>Eu fiz um sanduíche para você.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Thank you! It looks delicious. Did you make it alone?", 
                            pt: "<span style='color:#0077b6'>Obrigada! Parece delicioso. Você fez sozinho?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "No, my mom helped me.", 
                            pt: "<span style='color:#0077b6'>Não, minha mãe me ajudou.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Possessive Adjectives",
                    audio: "audio/7-4-8/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Albert, is this your water bottle?", 
                            pt: "<span style='color:#0077b6'>Albert, esta é a sua garrafa de água?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "No, my bottle is blue. That one is green. Maybe it is her bottle.", 
                            pt: "<span style='color:#0077b6'>Não, minha garrafa é azul. Aquela é verde. Talvez seja a garrafa dela.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Possessive Pronouns",
                    audio: "audio/7-4-8/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Whose chips are these? Are they yours?", 
                            pt: "<span style='color:#0077b6'>De quem são essas batatas? São suas?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, they aren't mine. I think they are his. Or maybe they are theirs.", 
                            pt: "<span style='color:#0077b6'>Não, não são minhas. Acho que são dele. Ou talvez sejam delas.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice (24 exercises, 4 alternatives each)
            grammarDrills: [
                {
                    type: "mcq",
                    q: "Subject Pronouns: '_______ likes vegetables.'",
                    options: [
                        { t: "Him", c: false },
                        { t: "He", c: true },
                        { t: "His", c: false },
                        { t: "Us", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Object Pronouns: 'The teacher gave the apple to _______.'",
                    options: [
                        { t: "we", c: false },
                        { t: "she", c: false },
                        { t: "I", c: false },
                        { t: "me", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Adjectives: 'She is eating _______ lunch.'",
                    options: [
                        { t: "hers", c: false },
                        { t: "her", c: true },
                        { t: "she", c: false },
                        { t: "mine", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Pronouns: 'This sandwich is not mine. It is _______.'",
                    options: [
                        { t: "yours", c: true },
                        { t: "your", c: false },
                        { t: "you", c: false },
                        { t: "my", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Mixed Pronouns: '_______ (We) invited _______ (they) to dinner.'",
                    options: [
                        { t: "Us / them", c: false },
                        { t: "We / they", c: false },
                        { t: "We / them", c: true },
                        { t: "Our / their", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Adjective vs. Pronoun: 'That is _______ (my) plate. The fork is _______ (your).'",
                    options: [
                        { t: "mine / your", c: false },
                        { t: "my / yours", c: true },
                        { t: "my / your", c: false },
                        { t: "mine / yours", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Object Pronouns - Plural: 'Vegetables are healthy. You should eat _______.'",
                    options: [
                        { t: "them", c: true },
                        { t: "they", c: false },
                        { t: "their", c: false },
                        { t: "it", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive - 3rd Person: 'The boy has a cookie. The cookie is _______.'",
                    options: [
                        { t: "he", c: false },
                        { t: "him", c: false },
                        { t: "his", c: true },
                        { t: "he's", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Subject/Object: '_______ (I) saw _______ (he) at the cafeteria.'",
                    options: [
                        { t: "Me / him", c: false },
                        { t: "I / his", c: false },
                        { t: "Me / he", c: false },
                        { t: "I / him", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Adjective: 'The students are eating _______ healthy snacks.'",
                    options: [
                        { t: "theirs", c: false },
                        { t: "them", c: false },
                        { t: "their", c: true },
                        { t: "they", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Pronoun: 'That water bottle belongs to me. It is _______.'",
                    options: [
                        { t: "mine", c: true },
                        { t: "my", c: false },
                        { t: "me", c: false },
                        { t: "I", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Object Pronoun: 'Our mom made a salad for _______.'",
                    options: [
                        { t: "we", c: false },
                        { t: "us", c: true },
                        { t: "our", c: false },
                        { t: "ours", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Subject Pronoun: '_______ are nuts about Italian food.'",
                    options: [
                        { t: "Them", c: false },
                        { t: "Their", c: false },
                        { t: "They", c: true },
                        { t: "Theirs", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Adjective: 'The dog is eating _______ food.'",
                    options: [
                        { t: "it", c: false },
                        { t: "it's", c: false },
                        { t: "its", c: true },
                        { t: "his", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Pronoun: 'I have my apple, and Celine has _______.'",
                    options: [
                        { t: "her", c: false },
                        { t: "hers", c: true },
                        { t: "she", c: false },
                        { t: "herself", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Object Pronoun: 'I love my sister. I bought a gift for _______.'",
                    options: [
                        { t: "she", c: false },
                        { t: "hers", c: false },
                        { t: "her", c: true },
                        { t: "her's", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Subject Pronoun: '_______ are a very good student.'",
                    options: [
                        { t: "You", c: true },
                        { t: "Your", c: false },
                        { t: "Yours", c: false },
                        { t: "Me", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Mixed Pronouns: '_______ (She) gives _______ (us) energy with healthy food.'",
                    options: [
                        { t: "She / our", c: false },
                        { t: "Her / us", c: false },
                        { t: "She / us", c: true },
                        { t: "Her / our", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Adjective: 'This is _______ new kitchen.'",
                    options: [
                        { t: "our", c: true },
                        { t: "ours", c: false },
                        { t: "us", c: false },
                        { t: "we", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Pronoun: 'This classroom is _______.'",
                    options: [
                        { t: "our", c: false },
                        { t: "us", c: false },
                        { t: "we", c: false },
                        { t: "ours", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Object Pronoun: 'Is that quinoa? Can I try _______?'",
                    options: [
                        { t: "it", c: true },
                        { t: "its", c: false },
                        { t: "them", c: false },
                        { t: "it's", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Subject Pronoun: '_______ always eat dinner together.'",
                    options: [
                        { t: "Us", c: false },
                        { t: "Our", c: false },
                        { t: "We", c: true },
                        { t: "Ours", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Adjective: 'Where is _______ lunch box?'",
                    options: [
                        { t: "you", c: false },
                        { t: "yours", c: false },
                        { t: "your", c: true },
                        { t: "me", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Possessive Pronoun: 'The decision was _______.'",
                    options: [
                        { t: "their", c: false },
                        { t: "theirs", c: true },
                        { t: "them", c: false },
                        { t: "they", c: false }
                    ]
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
                    text: "I love healthy food.<br><small style='color:#0077b6'>(Eu amo comida saudável.)</small>", 
                    audio: "TTS: I love healthy food.", 
                    arrow: "↘" 
                },
                { 
                    text: "She gave me an apple.<br><small style='color:#0077b6'>(Ela me deu uma maçã.)</small>", 
                    audio: "TTS: She gave me an apple.", 
                    arrow: "↘" 
                },
                { 
                    text: "Is this lunch yours?<br><small style='color:#0077b6'>(Este almoço é seu?)</small>", 
                    audio: "TTS: Is this lunch yours?", 
                    arrow: "↗" 
                },
                { 
                    text: "No, it is mine.<br><small style='color:#0077b6'>(Não, é meu.)</small>", 
                    audio: "TTS: No, it is mine.", 
                    arrow: "↘" 
                },
                { 
                    text: "They follow a vegan diet.<br><small style='color:#0077b6'>(Eles seguem uma dieta vegana.)</small>", 
                    audio: "TTS: They follow a vegan diet.", 
                    arrow: "↘" 
                },
                { 
                    text: "It is a piece of cake.<br><small style='color:#0077b6'>(É moleza / É muito fácil.)</small>", 
                    audio: "TTS: It is a piece of cake.", 
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
                // Drill 1: Typing (TTS)
                {
                    type: "typing",
                    instruction: "Listen to Albert describing his lunch box and type the missing words.<br><small style='color:#0077b6'>(Ouça Albert descrevendo sua lancheira e digite as palavras que faltam.)</small>",
                    audio: "TTS: Look at my lunch. I have a sandwich. It is mine. My mom made it for me. It is very healthy.",
                    text: "Look at my lunch. I have a [sandwich]. It is [mine]. My mom made it for [me]. It is very [healthy]."
                },
                // Drill 2: Dropdown (MP3) - Formatted for engine stability
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation about diets and choose the correct option.<br><small style='color:#0077b6'>(Ouça a conversa sobre dietas e escolha a opção correta.)</small>",
                    audio: "audio/7-4-8/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Celine: Do you eat [meat | fruit], Albert?", 
                            a: "meat" 
                        },
                        { 
                            q: "Albert: No, I don't. I am a [vegetarian | vegan].", 
                            a: "vegetarian" 
                        },
                        { 
                            q: "Celine: Is this salad [yours | you]?", 
                            a: "yours" 
                        },
                        { 
                            q: "Albert: Yes, it is [mine | my]. It has no meat.", 
                            a: "mine" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the idiom and choose the correct meaning.<br><small style='color:#0077b6'>(Ouça a expressão idiomática e escolha o significado correto.)</small>",
                    audio: "TTS: The math test was a piece of cake.",
                    options: [
                        { t: "It was delicious.", c: false },
                        { t: "It was very easy.", c: true },
                        { t: "It was difficult.", c: false },
                        { t: "It was unhealthy.", c: false }
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
                {
                    title: "The School Picnic",
                    audio: "TTS: Last Saturday, our class had a picnic. Everyone brought some food. Sarah brought fresh fruit salad. She said, This fruit is mine, but I will share it. Tom brought sandwiches. He made them himself. These are yours, he told us. We ate together. The teacher gave us juice. This juice is for you, she said. We thanked her. It was a great day with healthy food. || audio/7-4-8/p6_text1.mp3",
                    body: "Last Saturday, our class had a picnic. Everyone brought some food. Sarah brought fresh fruit salad. She said, \"This fruit is mine, but I will share it.\" Tom brought sandwiches. He made them himself. \"These are yours,\" he told us. We ate together. The teacher gave us juice. \"This juice is for you,\" she said. We thanked her. It was a great day with healthy food.",
                    questions: [
                        { 
                            q: "What did Sarah bring?", 
                            options: [ 
                                {t: "Sandwiches", c: false}, 
                                {t: "Juice", c: false}, 
                                {t: "Fruit salad", c: true}, 
                                {t: "Cake", c: false} 
                            ] 
                        },
                        { 
                            q: "Who made the sandwiches?", 
                            options: [ 
                                {t: "Sarah", c: false}, 
                                {t: "Tom", c: true}, 
                                {t: "The teacher", c: false}, 
                                {t: "Albert", c: false} 
                            ] 
                        },
                        { 
                            q: "Who received the juice?", 
                            options: [ 
                                {t: "Only Sarah", c: false}, 
                                {t: "Only Tom", c: false}, 
                                {t: "The students (us)", c: true}, 
                                {t: "The teacher", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "At the Restaurant",
                    audio: "audio/7-4-8/p6_text2.mp3",
                    body: "<b>Waiter:</b> Good evening. Are you ready to order?<br><b>Albert:</b> Yes. I would like the pasta, please.<br><b>Waiter:</b> And for her?<br><b>Albert:</b> She would like the salad.<br><b>Celine:</b> Excuse me, does the salad have nuts? I am allergic to them.<br><b>Waiter:</b> No, it is nut-free.<br><b>Celine:</b> Great. Can you bring us some water, too?<br><b>Waiter:</b> Of course. I will bring it to you right away.",
                    questions: [
                        { 
                            q: "What did Albert order?", 
                            options: [ 
                                {t: "Salad", c: false}, 
                                {t: "Pasta", c: true}, 
                                {t: "Pizza", c: false}, 
                                {t: "Soup", c: false} 
                            ] 
                        },
                        { 
                            q: "Why did Celine ask about nuts?", 
                            options: [ 
                                {t: "She loves them.", c: false}, 
                                {t: "She is allergic.", c: true}, 
                                {t: "She hates salad.", c: false}, 
                                {t: "It is a piece of cake.", c: false} 
                            ] 
                        },
                        { 
                            q: "Who will bring the water?", 
                            options: [ 
                                {t: "Albert", c: false}, 
                                {t: "Celine", c: false}, 
                                {t: "The waiter", c: true}, 
                                {t: "The chef", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "My Healthy Lifestyle",
                    audio: "TTS: Hi, I am Lucas. I care about my health. I follow a balanced diet. I eat a lot of vegetables and grains. I try to avoid added sugar because it is unhealthy. My sister is different. She loves sweets. She says chocolate is the apple of her eye! We respect our differences. My food is mine, and hers is hers, but we always eat dinner together. || audio/7-4-8/p6_text3.mp3",
                    body: "Hi, I am Lucas. I care about my health. I follow a balanced diet. I eat a lot of vegetables and grains. I try to avoid added sugar because it is unhealthy. My sister is different. She loves sweets. She says chocolate is the apple of her eye! We respect our differences. My food is mine, and hers is hers, but we always eat dinner together.",
                    questions: [
                        { 
                            q: "What does Lucas avoid?", 
                            options: [ 
                                {t: "Vegetables", c: false}, 
                                {t: "Grains", c: false}, 
                                {t: "Added sugar", c: true}, 
                                {t: "Water", c: false} 
                            ] 
                        },
                        { 
                            q: "What does his sister love?", 
                            options: [ 
                                {t: "Vegetables", c: false}, 
                                {t: "Sweets", c: true}, 
                                {t: "Fruit", c: false}, 
                                {t: "Meat", c: false} 
                            ] 
                        },
                        { 
                            q: "Do they eat dinner together?", 
                            options: [ 
                                {t: "No, never.", c: false}, 
                                {t: "Yes, always.", c: true}, 
                                {t: "Sometimes.", c: false}, 
                                {t: "Only on Sundays.", c: false} 
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
                // Drill 1: Matching (Idioms)
                {
                    type: "matching",
                    instruction: "Match the idiom with its meaning.<br><small style='color:#0077b6'>(Combine a expressão idiomática com seu significado.)</small>",
                    pairs: [
                        { left: "A piece of cake", right: "Very easy", val: "1" },
                        { left: "Nuts about", right: "Like a lot", val: "2" },
                        { left: "My cup of tea", right: "Something I like", val: "3" },
                        { left: "A bad egg", right: "A dishonest person", val: "4" }
                    ]
                },
                // Drill 2: Word Order
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "mine / is / This / apple / .",
                    correct: "This apple is mine ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "gave / me / She / gift / a / .",
                    correct: "She gave me a gift ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "yours / Is / book / that / ?",
                    correct: "Is that book yours ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "us / cooks / Mother / for / .",
                    correct: "Mother cooks for us ."
                },
                // Drill 3: Odd One Out (4 alternatives)
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "My", c: false },
                        { t: "Your", c: false },
                        { t: "His", c: false },
                        { t: "Mine", c: true } // Possessive Pronoun, others are Adjectives
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Me", c: false },
                        { t: "You", c: false },
                        { t: "He", c: true }, // Subject Pronoun, others are Object
                        { t: "Him", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Apple", c: false },
                        { t: "Banana", c: false },
                        { t: "Carrot", c: true }, // Vegetable, others are Fruits
                        { t: "Grape", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Healthy", c: false },
                        { t: "Nutritious", c: false },
                        { t: "Organic", c: false },
                        { t: "Unhealthy", c: true } // Negative meaning
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown with 4 alternatives)
                {
                    type: "dropdown",
                    instruction: "Drag the correct pronoun to complete the sentence.<br><small style='color:#0077b6'>(Arraste o pronome correto para completar a frase.)</small>",
                    questions: [
                        { q: "[She | her | hers | him] is my friend.", a: "She" },
                        { q: "I saw [him | she | her | hers] at the park.", a: "him" },
                        { q: "This is [her | she | hers | him] bag.", a: "her" },
                        { q: "The bag is [hers | she | her | him].", a: "hers" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: Your favorite meal. Now it's your turn! Describe your favorite meal.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Sua refeição favorita. Agora é a sua vez! Descreva sua refeição favorita.)</span></small>",
            example: "\"My favorite meal is breakfast. I usually eat toast and fruit. It is very healthy. My dad makes it for me every morning. I love it!\"<br><br><small><span style='color:#0077b6'>(\"Minha refeição favorita é o café da manhã. Eu geralmente como torrada e fruta. É muito saudável. Meu pai faz para mim todas as manhãs. Eu amo!\")</span></small>",
            prompts: [
                "What is your favorite meal (breakfast, lunch, dinner)? <br><small><span style='color:#0077b6'>(Qual é a sua refeição favorita: café da manhã, almoço ou jantar?)</span></small>",
                "What do you eat? (I eat...) <br><small><span style='color:#0077b6'>(O que você come?)</span></small>",
                "Is it healthy? <br><small><span style='color:#0077b6'>(É saudável?)</span></small>",
                "Who cooks it? (My mom/dad cooks it for me...) <br><small><span style='color:#0077b6'>(Quem cozinha? Minha mãe/meu pai cozinha para mim...)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Food & Health)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                { 
                    term: "Food", 
                    definition: "Any nutritious substance that people or animals eat or drink.", 
                    defTrans: "Comida / Alimento",
                    example: "We need food to live.", 
                    audioFront: "TTS: Food",
                    audioBack: "TTS: We need food to live." 
                },
                { 
                    term: "Meal", 
                    definition: "An occasion when food is eaten, such as breakfast or dinner.", 
                    defTrans: "Refeição",
                    example: "Breakfast is my favorite meal.", 
                    audioFront: "TTS: Meal",
                    audioBack: "TTS: Breakfast is my favorite meal." 
                },
                { 
                    term: "Healthy", 
                    definition: "Promoting good health.", 
                    defTrans: "Saudável",
                    example: "Fruit is a healthy snack.", 
                    audioFront: "TTS: Healthy",
                    audioBack: "TTS: Fruit is a healthy snack." 
                },
                { 
                    term: "Unhealthy", 
                    definition: "Harmful to health.", 
                    defTrans: "Não saudável",
                    example: "Too much sugar is unhealthy.", 
                    audioFront: "TTS: Unhealthy",
                    audioBack: "TTS: Too much sugar is unhealthy." 
                },
                { 
                    term: "Nutrients", 
                    definition: "Substances that provide nourishment essential for growth.", 
                    defTrans: "Nutrientes",
                    example: "Vegetables have many nutrients.", 
                    audioFront: "TTS: Nutrients",
                    audioBack: "TTS: Vegetables have many nutrients." 
                },
                { 
                    term: "Nutrition", 
                    definition: "The process of providing the food necessary for health and growth.", 
                    defTrans: "Nutrição",
                    example: "Good nutrition helps you grow.", 
                    audioFront: "TTS: Nutrition",
                    audioBack: "TTS: Good nutrition helps you grow." 
                },
                { 
                    term: "Sugar", 
                    definition: "A sweet crystalline substance obtained from various plants.", 
                    defTrans: "Açúcar",
                    example: "Candy has a lot of sugar.", 
                    audioFront: "TTS: Sugar",
                    audioBack: "TTS: Candy has a lot of sugar." 
                },
                { 
                    term: "Fat", 
                    definition: "A natural oily or greasy substance occurring in animal bodies.", 
                    defTrans: "Gordura",
                    example: "Some fat is good for you.", 
                    audioFront: "TTS: Fat",
                    audioBack: "TTS: Some fat is good for you." 
                },
                { 
                    term: "Organic food", 
                    definition: "Food produced without the use of artificial chemicals.", 
                    defTrans: "Comida orgânica",
                    example: "We buy organic food at the market.", 
                    audioFront: "TTS: Organic food",
                    audioBack: "TTS: We buy organic food at the market." 
                },
                { 
                    term: "Plate", 
                    definition: "A flat dish from which food is eaten or served.", 
                    defTrans: "Prato",
                    example: "Fill your plate with colors.", 
                    audioFront: "TTS: Plate",
                    audioBack: "TTS: Fill your plate with colors." 
                },
                { 
                    term: "Diet", 
                    definition: "The kinds of food that a person habitually eats.", 
                    defTrans: "Dieta / Regime",
                    example: "He follows a balanced diet.", 
                    audioFront: "TTS: Diet",
                    audioBack: "TTS: He follows a balanced diet." 
                },
                // --- Food Groups & Diets ---
                { 
                    term: "Meat", 
                    definition: "The flesh of an animal used as food.", 
                    defTrans: "Carne",
                    example: "Steak is a type of meat.", 
                    audioFront: "TTS: Meat",
                    audioBack: "TTS: Steak is a type of meat." 
                },
                { 
                    term: "Dairy", 
                    definition: "Food made from or containing milk.", 
                    defTrans: "Laticínios",
                    example: "Milk and cheese are dairy products.", 
                    audioFront: "TTS: Dairy",
                    audioBack: "TTS: Milk and cheese are dairy products." 
                },
                { 
                    term: "Grains", 
                    definition: "Wheat or any other cultivated cereal crop used as food.", 
                    defTrans: "Grãos",
                    example: "Rice is a type of grain.", 
                    audioFront: "TTS: Grains",
                    audioBack: "TTS: Rice is a type of grain." 
                },
                { 
                    term: "Fruits", 
                    definition: "The sweet product of a tree or plant that contains seed.", 
                    defTrans: "Frutas",
                    example: "Apples are delicious fruits.", 
                    audioFront: "TTS: Fruits",
                    audioBack: "TTS: Apples are delicious fruits." 
                },
                { 
                    term: "Vegetables", 
                    definition: "A plant or part of a plant used as food.", 
                    defTrans: "Vegetais / Legumes",
                    example: "Eat your vegetables!", 
                    audioFront: "TTS: Vegetables",
                    audioBack: "TTS: Eat your vegetables!" 
                },
                { 
                    term: "Sweets", 
                    definition: "Small shaped pieces of sweet food made with sugar.", 
                    defTrans: "Doces",
                    example: "I love sweets like chocolate.", 
                    audioFront: "TTS: Sweets",
                    audioBack: "TTS: I love sweets like chocolate." 
                },
                { 
                    term: "Vegetarian", 
                    definition: "A person who does not eat meat.", 
                    defTrans: "Vegetariano(a)",
                    example: "A vegetarian does not eat meat.", 
                    audioFront: "TTS: Vegetarian",
                    audioBack: "TTS: A vegetarian does not eat meat." 
                },
                { 
                    term: "Vegan", 
                    definition: "A person who does not eat or use animal products.", 
                    defTrans: "Vegano(a)",
                    example: "A vegan diet has no animal products.", 
                    audioFront: "TTS: Vegan",
                    audioBack: "TTS: A vegan diet has no animal products." 
                },
                { 
                    term: "Gluten-free", 
                    definition: "Food that does not contain gluten (protein in wheat).", 
                    defTrans: "Sem glúten",
                    example: "This bread is gluten-free.", 
                    audioFront: "TTS: Gluten-free",
                    audioBack: "TTS: This bread is gluten-free." 
                },
                { 
                    term: "Nut-free", 
                    definition: "Containing no nuts; safe for people with nut allergies.", 
                    defTrans: "Sem nozes/castanhas",
                    example: "This school is nut-free.", 
                    audioFront: "TTS: Nut-free",
                    audioBack: "TTS: This school is nut-free." 
                },

                // --- Food Idioms ---
                { 
                    term: "A piece of cake", 
                    definition: "Something very easy to do.", 
                    defTrans: "Moleza (muito fácil)",
                    example: "The test was a piece of cake.", 
                    audioFront: "TTS: A piece of cake",
                    audioBack: "TTS: The test was a piece of cake." 
                },
                { 
                    term: "Nuts about", 
                    definition: "To be very enthusiastic about something or someone.", 
                    defTrans: "Louco(a) por",
                    example: "I am nuts about pizza.", 
                    audioFront: "TTS: Nuts about",
                    audioBack: "TTS: I am nuts about pizza." 
                },
                { 
                    term: "My cup of tea", 
                    definition: "Something that one likes or is good at.", 
                    defTrans: "Minha praia (o que eu gosto)",
                    example: "Horror movies are not my cup of tea.", 
                    audioFront: "TTS: My cup of tea",
                    audioBack: "TTS: Horror movies are not my cup of tea." 
                },
                { 
                    term: "Cry over spilled milk", 
                    definition: "To be upset about something that has already happened and cannot be changed.", 
                    defTrans: "Chorar pelo leite derramado",
                    example: "Don't cry over spilled milk.", 
                    audioFront: "TTS: Cry over spilled milk",
                    audioBack: "TTS: Don't cry over spilled milk." 
                },
                { 
                    term: "Apple of one's eye", 
                    definition: "A person of whom one is extremely fond and proud.", 
                    defTrans: "A menina dos olhos (favorito)",
                    example: "She is the apple of his eye.", 
                    audioFront: "TTS: Apple of one's eye",
                    audioBack: "TTS: She is the apple of his eye." 
                },
                { 
                    term: "In a nutshell", 
                    definition: "In the fewest possible words; summarizing simply.", 
                    defTrans: "Em resumo",
                    example: "In a nutshell, eat healthy.", 
                    audioFront: "TTS: In a nutshell",
                    audioBack: "TTS: In a nutshell, eat healthy." 
                },
                // --- Subject vs. Object Pronouns ---
                { 
                    term: "I / Me", 
                    definition: "Subject pronoun (I) / Object pronoun (Me).", 
                    defTrans: "Eu (sujeito) / Mim (objeto)",
                    example: "I eat. / She helps me.", 
                    audioFront: "TTS: I and Me",
                    audioBack: "TTS: I eat. She helps me." 
                },
                { 
                    term: "You", 
                    definition: "Pronoun used as both subject and object.", 
                    defTrans: "Você (sujeito ou objeto)",
                    example: "You cook. / I help you.", 
                    audioFront: "TTS: You",
                    audioBack: "TTS: You cook. I help you." 
                },
                { 
                    term: "He / Him", 
                    definition: "Subject (He) / Object (Him) for a male person.", 
                    defTrans: "Ele (sujeito) / Ele (objeto)",
                    example: "He runs. / I saw him.", 
                    audioFront: "TTS: He and Him",
                    audioBack: "TTS: He runs. I saw him." 
                },
                { 
                    term: "She / Her", 
                    definition: "Subject (She) / Object (Her) for a female person.", 
                    defTrans: "Ela (sujeito) / Ela (objeto)",
                    example: "She sings. / I heard her.", 
                    audioFront: "TTS: She and Her",
                    audioBack: "TTS: She sings. I heard her." 
                },
                { 
                    term: "We / Us", 
                    definition: "Subject (We) / Object (Us) for the speaker and others.", 
                    defTrans: "Nós (sujeito) / Nós (objeto)",
                    example: "We play. / Join us.", 
                    audioFront: "TTS: We and Us",
                    audioBack: "TTS: We play. Join us." 
                },
                { 
                    term: "They / Them", 
                    definition: "Subject (They) / Object (Them) for people other than the speaker.", 
                    defTrans: "Eles ou Elas (sujeito) / Eles ou Elas (objeto)",
                    example: "They eat. / Feed them.", 
                    audioFront: "TTS: They and Them",
                    audioBack: "TTS: They eat. Feed them." 
                },

                // --- Possessives (Adjectives vs. Pronouns) ---
                { 
                    term: "My / Mine", 
                    definition: "Possessive adjective (My) / Possessive pronoun (Mine).", 
                    defTrans: "Meu or Minha (Adjetivo / Pronome)",
                    example: "It is my apple. / It is mine.", 
                    audioFront: "TTS: My and Mine",
                    audioBack: "TTS: It is my apple. It is mine." 
                },
                { 
                    term: "Your / Yours", 
                    definition: "Possessive adjective (Your) / Possessive pronoun (Yours).", 
                    defTrans: "Seu or Sua (Adjetivo / Pronome)",
                    example: "Is it your bag? / Is it yours?", 
                    audioFront: "TTS: Your and Yours",
                    audioBack: "TTS: Is it your bag? Is it yours?" 
                },
                { 
                    term: "His / His", 
                    definition: "Possessive form for a male (form is the same for both).", 
                    defTrans: "Dele (Adjetivo / Pronome)",
                    example: "It is his car. / It is his.", 
                    audioFront: "TTS: His and His",
                    audioBack: "TTS: It is his car. It is his." 
                },
                { 
                    term: "Her / Hers", 
                    definition: "Possessive adjective (Her) / Possessive pronoun (Hers).", 
                    defTrans: "Dela (Adjetivo / Pronome)",
                    example: "It is her book. / It is hers.", 
                    audioFront: "TTS: Her and Hers",
                    audioBack: "TTS: It is her book. It is hers." 
                },
                { 
                    term: "Our / Ours", 
                    definition: "Possessive adjective (Our) / Possessive pronoun (Ours).", 
                    defTrans: "Nosso or Nossa (Adjetivo / Pronome)",
                    example: "It is our house. / It is ours.", 
                    audioFront: "TTS: Our and Ours",
                    audioBack: "TTS: It is our house. It is ours." 
                },
                { 
                    term: "Their / Theirs", 
                    definition: "Possessive adjective (Their) / Possessive pronoun (Theirs).", 
                    defTrans: "Deles or Delas (Adjetivo / Pronome)",
                    example: "It is their dog. / It is theirs.", 
                    audioFront: "TTS: Their and Theirs",
                    audioBack: "TTS: It is their dog. It is theirs." 
                },

                // --- Grammar Points ---
                { 
                    term: "Subject Pronoun", 
                    definition: "A pronoun that performs the action of the verb (I, you, he...).", 
                    defTrans: "Pronome Sujeito",
                    example: "She loves music.", 
                    audioFront: "TTS: Subject Pronoun",
                    audioBack: "TTS: She loves music." 
                },
                { 
                    term: "Object Pronoun", 
                    definition: "A pronoun that receives the action of the verb (me, you, him...).", 
                    defTrans: "Pronome Objeto",
                    example: "Call me later.", 
                    audioFront: "TTS: Object Pronoun",
                    audioBack: "TTS: Call me later." 
                },
                { 
                    term: "Possessive Adjective", 
                    definition: "Word used to show ownership, always followed by a noun.", 
                    defTrans: "Adjetivo Possessivo",
                    example: "This is my car.", 
                    audioFront: "TTS: Possessive Adjective",
                    audioBack: "TTS: This is my car." 
                },
                { 
                    term: "Possessive Pronoun", 
                    definition: "Word used to show ownership, replaces the noun.", 
                    defTrans: "Pronome Possessivo",
                    example: "This car is mine.", 
                    audioFront: "TTS: Possessive Pronoun",
                    audioBack: "TTS: This car is mine." 
                }
            ]
        }
    ], // This closes the steps array

    // ======================================================
    // GLOSSARY (Part 1: Context, Health & Food Groups)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { 
            topic: "Context", 
            term: "quinoa", 
            definition: "A goosefoot plant from the Andes whose seeds are used as food.", 
            translation: "Quinua" 
        },
        { 
            topic: "Context", 
            term: "made-it-for-me", 
            definition: "Prepared something specifically for the benefit of the speaker.", 
            translation: "Fez para mim" 
        },
        { 
            topic: "Context", 
            term: "brought", 
            definition: "Past form of bring; to have come to a place with someone or something.", 
            translation: "Trouxe" 
        },
        { 
            topic: "Context", 
            term: "sandwich", 
            definition: "An item of food consisting of two pieces of bread with a filling between them.", 
            translation: "Sanduíche" 
        },
        { 
            topic: "Context", 
            term: "share", 
            definition: "To have a portion of something with another or others.", 
            translation: "Compartilhar" 
        },
        { 
            topic: "Context", 
            term: "apple", 
            definition: "The round fruit of a tree of the rose family, which typically has thin red or green skin.", 
            translation: "Maçã" 
        },
        { 
            topic: "Context", 
            term: "doctor", 
            definition: "A person who is qualified to treat people who are ill.", 
            translation: "Médico(a)" 
        },
        { 
            topic: "Context", 
            term: "energy", 
            definition: "The strength and vitality required for sustained physical or mental activity.", 
            translation: "Energia" 
        },
        { 
            topic: "Context", 
            term: "cookie", 
            definition: "A small sweet cake, typically round, flat, and crisp.", 
            translation: "Biscoito / Bolacha" 
        },

        // --- TOPIC 2: FOOD & HEALTH ---
        { 
            topic: "Food & Health", 
            term: "food", 
            definition: "Any nutritious substance that people or animals eat or drink.", 
            translation: "Comida / Alimento" 
        },
        { 
            topic: "Food & Health", 
            term: "meal", 
            definition: "An occasion when food is eaten, such as breakfast or dinner.", 
            translation: "Refeição" 
        },
        { 
            topic: "Food & Health", 
            term: "healthy", 
            definition: "Promoting good health.", 
            translation: "Saudável" 
        },
        { 
            topic: "Food & Health", 
            term: "unhealthy", 
            definition: "Harmful to health.", 
            translation: "Não saudável" 
        },
        { 
            topic: "Food & Health", 
            term: "nutrients", 
            definition: "Substances that provide nourishment essential for growth.", 
            translation: "Nutrientes" 
        },
        { 
            topic: "Food & Health", 
            term: "nutrition", 
            definition: "The process of providing or obtaining the food necessary for health.", 
            translation: "Nutrição" 
        },
        { 
            topic: "Food & Health", 
            term: "sugar", 
            definition: "A sweet crystalline substance obtained from various plants.", 
            translation: "Açúcar" 
        },
        { 
            topic: "Food & Health", 
            term: "fat", 
            definition: "A natural oily or greasy substance occurring in animal bodies.", 
            translation: "Gordura" 
        },
        { 
            topic: "Food & Health", 
            term: "organic-food", 
            definition: "Food produced without the use of artificial chemicals.", 
            translation: "Comida orgânica" 
        },
        { 
            topic: "Food & Health", 
            term: "plate", 
            definition: "A flat dish from which food is eaten or served.", 
            translation: "Prato" 
        },
        { 
            topic: "Food & Health", 
            term: "health", 
            definition: "The state of being free from illness or injury.", 
            translation: "Saúde" 
        },
        { 
            topic: "Food & Health", 
            term: "diet", 
            definition: "The kinds of food that a person or community habitually eats.", 
            translation: "Dieta / Regime" 
        },
        { 
            topic: "Food & Health", 
            term: "added-sugar", 
            definition: "Sugar that is added to food during processing or preparation.", 
            translation: "Açúcar adicionado" 
        },
        { 
            topic: "Food & Health", 
            term: "eating-style", 
            definition: "The manner in which an individual chooses and consumes food.", 
            translation: "Estilo de alimentação" 
        },

        // --- TOPIC 3: FOOD GROUPS & PYRAMID ---
        { 
            topic: "Food Groups", 
            term: "meat", 
            definition: "The flesh of an animal (especially a mammal) as food.", 
            translation: "Carne" 
        },
        { 
            topic: "Food Groups", 
            term: "dairy", 
            definition: "Food made from or containing milk.", 
            translation: "Laticínios" 
        },
        { 
            topic: "Food Groups", 
            term: "grains", 
            definition: "Wheat or any other cultivated cereal crop used as food.", 
            translation: "Grãos" 
        },
        { 
            topic: "Food Groups", 
            term: "fruits", 
            definition: "The sweet and fleshy product of a tree or plant that contains seed.", 
            translation: "Frutas" 
        },
        { 
            topic: "Food Groups", 
            term: "vegetables", 
            definition: "A plant or part of a plant used as food.", 
            translation: "Vegetais / Legumes" 
        },
        { 
            topic: "Food Groups", 
            term: "sweets", 
            definition: "Small shaped pieces of sweet food made with sugar.", 
            translation: "Doces" 
        },
        { 
            topic: "Food Groups", 
            term: "food-pyramid", 
            definition: "A diagram representing the optimal number of servings to be eaten each day.", 
            translation: "Pirâmide Alimentar" 
        },
        // --- TOPIC 4: DIETS & MEALS ---
        { 
            topic: "Diets", 
            term: "vegetarian", 
            definition: "A person who does not eat meat for moral, religious, or health reasons.", 
            translation: "Vegetariano(a)" 
        },
        { 
            topic: "Diets", 
            term: "vegan", 
            definition: "A person who does not eat or use any animal products.", 
            translation: "Vegano(a)" 
        },
        { 
            topic: "Diets", 
            term: "nut-free", 
            definition: "Food that does not contain any nuts; safe for those with allergies.", 
            translation: "Sem nozes / castanhas" 
        },
        { 
            topic: "Diets", 
            term: "dairy-free", 
            definition: "Food that does not contain any milk or milk products.", 
            translation: "Sem laticínios" 
        },
        { 
            topic: "Diets", 
            term: "gluten-free", 
            definition: "Food that does not contain gluten, a protein found in wheat.", 
            translation: "Sem glúten" 
        },
        { 
            topic: "Diets", 
            term: "sugar-free", 
            definition: "Food made without the addition of sugar.", 
            translation: "Sem açúcar" 
        },
        { 
            topic: "Diets", 
            term: "keto", 
            definition: "A high-fat, adequate-protein, low-carbohydrate diet.", 
            translation: "Cetogênica" 
        },
        { 
            topic: "Diets", 
            term: "paleo", 
            definition: "A diet based on foods similar to what might have been eaten during the Paleolithic era.", 
            translation: "Paleo / Dieta do homem das cavernas" 
        },

        // --- TOPIC 5: FOOD IDIOMS ---
        { 
            topic: "Idioms", 
            term: "piece-of-cake", 
            definition: "Something that is very easy to do.", 
            translation: "Moleza / Mamão com açúcar" 
        },
        { 
            topic: "Idioms", 
            term: "nuts-about", 
            definition: "To be very enthusiastic or in love with something or someone.", 
            translation: "Louco(a) por" 
        },
        { 
            topic: "Idioms", 
            term: "my-cup-of-tea", 
            definition: "Something that a person likes or is good at.", 
            translation: "Minha praia / Do meu agrado" 
        },
        { 
            topic: "Idioms", 
            term: "cry-over-spilled-milk", 
            definition: "To be upset about a past mistake that cannot be changed.", 
            translation: "Chorar pelo leite derramado" 
        },
        { 
            topic: "Idioms", 
            term: "apple-of-ones-eye", 
            definition: "Someone who is cherished above all others.", 
            translation: "A menina dos olhos" 
        },
        { 
            topic: "Idioms", 
            term: "bad-egg", 
            definition: "A person who is dishonest or ill-behaved.", 
            translation: "Uma má pessoa / Ovelha negra" 
        },
        { 
            topic: "Idioms", 
            term: "cream-of-the-crop", 
            definition: "The very best in a particular group.", 
            translation: "A nata / O melhor dos melhores" 
        },
        { 
            topic: "Idioms", 
            term: "big-cheese", 
            definition: "An important and influential person.", 
            translation: "Um chefão / Alguém importante" 
        },
        { 
            topic: "Idioms", 
            term: "in-a-nutshell", 
            definition: "To summarize something in a very brief way.", 
            translation: "Em resumo / Em poucas palavras" 
        },
        { 
            topic: "Idioms", 
            term: "cheesy", 
            definition: "Something that is silly, common, or of poor quality.", 
            translation: "Brega / Clichê" 
        },

        // --- TOPIC 6: PRONOUNS & GRAMMAR ---
        { 
            topic: "Grammar", 
            term: "subject-pronoun", 
            definition: "A pronoun used as the subject of a sentence (I, you, he, she, it, we, they).", 
            translation: "Pronome Sujeito" 
        },
        { 
            topic: "Grammar", 
            term: "object-pronoun", 
            definition: "A pronoun used as the object of a verb or preposition (me, you, him, her, it, us, them).", 
            translation: "Pronome Objeto" 
        },
        { 
            topic: "Grammar", 
            term: "possessive-adjective", 
            definition: "A word that shows ownership and is followed by a noun (my, your, his, her, its, our, their).", 
            translation: "Adjetivo Possessivo" 
        },
        { 
            topic: "Grammar", 
            term: "possessive-pronoun", 
            definition: "A word that shows ownership and stands alone (mine, yours, his, hers, ours, theirs).", 
            translation: "Pronome Possessivo" 
        },
        // Tooltip keys from Step 1 Dialogue
        { topic: "Grammar", term: "your", definition: "Possessive Adjective: Belonging to you.", translation: "Seu / Sua" },
        { topic: "Grammar", term: "mine", definition: "Possessive Pronoun: Belonging to me.", translation: "Meu / Minha" },
        { topic: "Grammar", term: "you", definition: "Object Pronoun: The person addressed.", translation: "Você / Te" },
        { topic: "Grammar", term: "us", definition: "Object Pronoun: The speaker and others.", translation: "Nós / Nos" },
        { topic: "Grammar", term: "whose", definition: "Question word used to ask about ownership.", translation: "De quem" },
        { topic: "Grammar", term: "yours", definition: "Possessive Pronoun: Belonging to you.", translation: "Seu / Sua" },
        { topic: "Grammar", term: "his", definition: "Possessive form: Belonging to him.", translation: "Dele" }
    ]
});