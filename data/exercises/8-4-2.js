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
 * GRADE 8, BIMESTER 4, CHAPTER 8
 * BATCH 1: TYPES 1 TO 5 (40 items each)
 */

window.initExercise({
    id: "8-4-8",
    grade: "8th Grade",
    bimester: "4",
    chapter: "8",
    title: "Food, Nutrition, and Pronouns",

    // ==========================================================
    // SIMPLE POOL (40 ITEMS PER TYPE)
    // ==========================================================
    simplePool: {
        
        // --- TYPE 1: UNSCRAMBLE SENTENCES (40 ITEMS) ---
        1: [
            { words: ["healthy", "Wow,", "looks", "lunch", "your", "!"], correct: "Wow, your lunch looks healthy!" },
            { words: ["made", "mom", "My", "for", "me", "it"], correct: "My mom made it for me" },
            { words: ["sandwich", "a", "I", "brought"], correct: "I brought a sandwich" },
            { words: ["not", "mine", "It", "is"], correct: "It is not mine" },
            { words: ["an", "apple", "gave", "She", "me"], correct: "She gave me an apple" },
            { words: ["belongs", "to", "This", "us", "house"], correct: "This house belongs to us" },
            { words: ["food", "their", "is", "This"], correct: "This is their food" },
            { words: ["cake", "piece", "test", "The", "was", "of", "a"], correct: "The test was a piece of cake" },
            { words: ["about", "nuts", "I", "chocolate", "am"], correct: "I am nuts about chocolate" },
            { words: ["movies", "my", "Horror", "cup", "tea", "of", "are", "not"], correct: "Horror movies are not my cup of tea" },
            { words: ["over", "milk", "Don't", "spilled", "cry"], correct: "Don't cry over spilled milk" },
            { words: ["eye", "She", "apple", "of", "the", "his", "is"], correct: "She is the apple of his eye" },
            { words: ["egg", "bad", "a", "He", "is"], correct: "He is a bad egg" },
            { words: ["nutshell", "a", "need", "In", "we", "to", "eat", "better"], correct: "In a nutshell, we need to eat better" },
            { words: ["food", "live", "We", "to", "need"], correct: "We need food to live" },
            { words: ["important", "Breakfast", "meal", "an", "is"], correct: "Breakfast is an important meal" },
            { words: ["snack", "Fruit", "healthy", "a", "is"], correct: "Fruit is a healthy snack" },
            { words: ["soda", "is", "unhealthy", "Too", "much"], correct: "Too much soda is unhealthy" },
            { words: ["nutrients", "Vegetables", "many", "have"], correct: "Vegetables have many nutrients" },
            { words: ["much", "sugar", "eat", "Don't", "too"], correct: "Don't eat too much sugar" },
            { words: ["vegetables", "We", "organic", "buy"], correct: "We buy organic vegetables" },
            { words: ["plate", "the", "Put", "on", "food", "your"], correct: "Put the food on your plate" },
            { words: ["balanced", "has", "a", "She", "diet"], correct: "She has a balanced diet" },
            { words: ["meat", "eat", "doesn't", "He"], correct: "He doesn't eat meat" },
            { words: ["products", "vegan", "animal", "diet", "A", "no", "has"], correct: "A vegan diet has no animal products" },
            { words: ["school", "nut-free", "This", "is"], correct: "This school is nut-free" },
            { words: ["gluten-free", "bread", "is", "This"], correct: "This bread is gluten-free" },
            { words: ["ours", "kitchen", "The", "is"], correct: "The kitchen is ours" },
            { words: ["hungry", "They", "feed", "are", "them"], correct: "They are hungry, feed them" },
            { words: ["water", "hers", "The", "is"], correct: "The water is hers" },
            { words: ["gym", "I", "at", "her", "the", "saw"], correct: "I saw her at the gym" },
            { words: ["recipe", "asked", "a", "him", "for", "I"], correct: "I asked him for a recipe" },
            { words: ["lunch", "his", "is", "This"], correct: "This is his lunch" },
            { words: ["apple", "mine", "The", "is"], correct: "The apple is mine" },
            { words: ["cheese", "dairy", "Milk", "products", "are", "and"], correct: "Milk and cheese are dairy products" },
            { words: ["delicious", "Apples", "fruits", "are"], correct: "Apples are delicious fruits" },
            { words: ["of", "grain", "Rice", "a", "type", "is"], correct: "Rice is a type of grain" },
            { words: ["player", "the", "He", "best", "is"], correct: "He is the best player" },
            { words: ["team", "plays", "My", "well"], correct: "My team plays well" },
            { words: ["sandwich", "made", "a", "I", "you", "for"], correct: "I made a sandwich for you" }
        ],

        // --- TYPE 2: UNSCRAMBLE DIALOGUES (40 ITEMS) ---
        2: [
            { lines: ["Wow, Celine, your lunch looks healthy!", "Yes, it is. My mom made it for me.", "Cool! I brought a sandwich.", "Is it yours? Can you share it with me?"], order: [0, 1, 2, 3] },
            { lines: ["Whose cookie is this? Is it yours?", "No, it's not mine.", "Maybe it's his.", "Let's ask him!"], order: [0, 1, 2, 3] },
            { lines: ["I made a sandwich for you.", "Thank you! It looks delicious. Did you make it alone?", "No, my mom helped me.", "She is a great cook!"], order: [0, 1, 2, 3] },
            { lines: ["Albert, is this your water bottle?", "No, my bottle is blue. That one is green.", "Maybe it is her bottle.", "Yes, I think it is hers."], order: [0, 1, 2, 3] },
            { lines: ["Whose chips are these? Are they yours?", "No, they aren't mine.", "I think they are his.", "Or maybe they are theirs!"], order: [0, 1, 2, 3] },
            { lines: ["How was the math test?", "It was a piece of cake!", "Really? I thought it was very hard.", "No, it was very easy for me."], order: [0, 1, 2, 3] },
            { lines: ["I bought a chocolate cake for dessert.", "I am nuts about chocolate!", "I know, it is your favorite.", "Thank you for buying it for us."], order: [0, 1, 2, 3] },
            { lines: ["Do you want to watch a horror movie?", "Horror movies are not my cup of tea.", "What do you prefer?", "I prefer comedies."], order: [0, 1, 2, 3] },
            { lines: ["I dropped my ice cream on the floor!", "Don't cry over spilled milk.", "But it was my favorite flavor!", "I will buy you another one."], order: [0, 1, 2, 3] },
            { lines: ["She is the apple of his eye.", "Yes, he loves his daughter very much.", "He always buys her toys.", "He is a very good father to her."], order: [0, 1, 2, 3] },
            { lines: ["He lied to the teacher today.", "I am not surprised, he is a bad egg.", "We shouldn't trust him anymore.", "I agree, he is not a good friend."], order: [0, 1, 2, 3] },
            { lines: ["Our school basketball team won the championship!", "They are the cream of the crop.", "Yes, they practiced very hard.", "We should celebrate with them."], order: [0, 1, 2, 3] },
            { lines: ["Who is the principal of the school?", "Mr. Davis is the big cheese here.", "Does he make all the important rules?", "Yes, he makes all the decisions for us."], order: [0, 1, 2, 3] },
            { lines: ["Can you explain the lesson to me?", "In a nutshell, we need to eat better.", "That makes sense.", "Yes, it is very simple."], order: [0, 1, 2, 3] },
            { lines: ["I hate romantic movies.", "Why? They are beautiful.", "I think they are too cheesy.", "I disagree, I love them."], order: [0, 1, 2, 3] },
            { lines: ["Are you a vegetarian?", "Yes, I am. I don't eat meat.", "Do you eat eggs and dairy?", "Yes, I do. Only vegans avoid them."], order: [0, 1, 2, 3] },
            { lines: ["My brother is on a vegan diet.", "What does he eat?", "He eats lots of grains, fruits, and vegetables.", "That sounds very healthy for him."], order: [0, 1, 2, 3] },
            { lines: ["This school is nut-free.", "Why is that?", "Because some students have severe allergies.", "We must be careful to protect them."], order: [0, 1, 2, 3] },
            { lines: ["Is this bread gluten-free?", "Yes, it is safe for you to eat.", "Thank you, my stomach hurts when I eat gluten.", "I am glad I bought it for you."], order: [0, 1, 2, 3] },
            { lines: ["Do you eat a lot of sugar?", "No, I avoid added sugar.", "That is a great eating style.", "It helps me stay healthy."], order: [0, 1, 2, 3] },
            { lines: ["We need food to live.", "Yes, meals give us energy.", "I love breakfast the most.", "It is a very important meal."], order: [0, 1, 2, 3] },
            { lines: ["Fruit is a healthy snack.", "I agree, I love apples and bananas.", "But too much soda is unhealthy.", "We should drink more water instead."], order: [0, 1, 2, 3] },
            { lines: ["Vegetables have many nutrients.", "I eat a big salad every day.", "That provides a lot of vitamins.", "Yes, my doctor is proud of me."], order: [0, 1, 2, 3] },
            { lines: ["Avocado has good fat.", "I didn't know fat could be good!", "Yes, natural fats are essential.", "I will add avocado to my diet."], order: [0, 1, 2, 3] },
            { lines: ["We buy organic vegetables at the market.", "Are they better than regular ones?", "Yes, they don't have dangerous chemicals.", "I will ask my mom to buy them for us."], order: [0, 1, 2, 3] },
            { lines: ["Put the food on your plate.", "This looks like a balanced diet.", "I made it especially for you.", "Thank you, I am very hungry!"], order: [0, 1, 2, 3] },
            { lines: ["Steak, chicken, and fish are proteins.", "Yes, and eggs too.", "Do you eat meat every day?", "No, sometimes I eat only vegetables."], order: [0, 1, 2, 3] },
            { lines: ["Milk and cheese are dairy products.", "I love yogurt for breakfast.", "Dairy is good for your bones.", "My sister is allergic, so she avoids it."], order: [0, 1, 2, 3] },
            { lines: ["Bread, rice, and wheat are grains.", "I eat rice and beans every day.", "They are the base of the food pyramid.", "They give us a lot of energy."], order: [0, 1, 2, 3] },
            { lines: ["Candy and cake are sweets.", "We should eat them rarely.", "Too much sugar is bad for our teeth.", "I know, but they are so delicious!"], order: [0, 1, 2, 3] },
            { lines: ["I eat.", "She helps me.", "The pronoun 'I' is a subject.", "The pronoun 'me' is an object."], order: [0, 1, 2, 3] },
            { lines: ["You cook.", "I help you.", "'You' can be both a subject and an object.", "Yes, the form does not change."], order: [0, 1, 2, 3] },
            { lines: ["He runs fast.", "I saw him at the park.", "We use 'him' after the verb.", "Yes, because he receives the action."], order: [0, 1, 2, 3] },
            { lines: ["She sings beautifully.", "I heard her on the radio.", "'She' is the subject pronoun.", "And 'her' is the object pronoun."], order: [0, 1, 2, 3] },
            { lines: ["We play soccer on weekends.", "Join us tomorrow!", "'Us' refers to you and your friends?", "Yes, it is the object pronoun for 'we'."], order: [0, 1, 2, 3] },
            { lines: ["They eat a lot.", "I feed them every day.", "'They' are the dogs in the yard.", "You take good care of them!"], order: [0, 1, 2, 3] },
            { lines: ["This is my apple.", "The apple is mine.", "Possessive pronouns replace the noun.", "Yes, they usually stand alone."], order: [0, 1, 2, 3] },
            { lines: ["Is this your bag?", "Yes, the bag is yours.", "'Your' is an adjective, it needs a noun.", "'Yours' is a pronoun, it stands alone."], order: [0, 1, 2, 3] },
            { lines: ["That is his car.", "The car is his.", "The form 'his' is the same for both!", "Yes, it is an adjective and a pronoun."], order: [0, 1, 2, 3] },
            { lines: ["It is her recipe.", "The recipe is hers.", "We add an 's' to make it a pronoun.", "Exactly, like 'ours' and 'theirs'."], order: [0, 1, 2, 3] }
        ],

        // --- TYPE 3: QUICK QUESTIONS (40 ITEMS) ---
        3: [
            { q: "\"I helped she.\" Is this sentence correct?", options: ["No, it should be \"her\".", "Yes, it is correct.", "No, it should be \"hers\".", "No, it should be \"he\"."], a: "No, it should be \"her\"." },
            { q: "\"This is mine book.\" Is this sentence correct?", options: ["No, it should be \"my book\".", "Yes, it is correct.", "No, it should be \"I book\".", "No, it should be \"me book\"."], a: "No, it should be \"my book\"." },
            { q: "\"The food is theirs.\" Is this sentence correct?", options: ["Yes, it is correct.", "No, it should be \"their\".", "No, it should be \"them\".", "No, it should be \"they\"."], a: "Yes, it is correct." },
            { q: "\"He cooks for we.\" Is this sentence correct?", options: ["No, it should be \"us\".", "Yes, it is correct.", "No, it should be \"our\".", "No, it should be \"ours\"."], a: "No, it should be \"us\"." },
            { q: "\"She gave the apple to me.\" Is \"me\" an object pronoun here?", options: ["Yes, it is.", "No, it is a subject pronoun.", "No, it is a possessive adjective.", "No, it is a possessive pronoun."], a: "Yes, it is." },
            { q: "\"That car is his.\" Can \"his\" be a possessive pronoun?", options: ["Yes, it can.", "No, it is only an adjective.", "No, it should be \"hises\".", "No, it is an object pronoun."], a: "Yes, it can." },
            { q: "\"The cat drank its milk.\" Is \"its\" a possessive adjective?", options: ["Yes, it is.", "No, it is an object pronoun.", "No, it is a subject pronoun.", "No, it is a verb."], a: "Yes, it is." },
            { q: "\"Our dinner is ready.\" Does \"our\" show ownership?", options: ["Yes, it does.", "No, it shows action.", "No, it replaces a noun.", "No, it is a subject."], a: "Yes, it does." },
            { q: "\"The lunch is hers.\" Does \"hers\" need a noun after it?", options: ["No, possessive pronouns stand alone.", "Yes, it needs a noun.", "Yes, it needs an adjective.", "Yes, it needs a verb."], a: "No, possessive pronouns stand alone." },
            { q: "\"They are hungry.\" Is \"They\" an object pronoun?", options: ["No, it is a subject pronoun.", "Yes, it is.", "No, it is a possessive pronoun.", "No, it is a possessive adjective."], a: "No, it is a subject pronoun." },
            { q: "\"I saw him.\" Is \"him\" the receiver of the action?", options: ["Yes, it is.", "No, he is doing the action.", "No, it is a possessive adjective.", "No, it is a subject pronoun."], a: "Yes, it is." },
            { q: "\"This is your.\" Is this sentence grammatically correct?", options: ["No, it should be \"yours\".", "Yes, it is correct.", "No, it should be \"you\".", "No, it should be \"your's\"."], a: "No, it should be \"yours\"." },
            { q: "\"Mom feeds me.\" Does \"me\" come after the verb?", options: ["Yes, it does.", "No, it comes before the verb.", "No, it comes before the subject.", "No, it is the verb."], a: "Yes, it does." },
            { q: "\"We invited them.\" Is \"them\" the correct object pronoun for \"they\"?", options: ["Yes, it is.", "No, it should be \"their\".", "No, it should be \"theirs\".", "No, it should be \"us\"."], a: "Yes, it is." },
            { q: "\"Her juice is cold.\" Is \"Her\" a subject pronoun here?", options: ["No, it is a possessive adjective.", "Yes, it is.", "No, it is an object pronoun.", "No, it is a possessive pronoun."], a: "No, it is a possessive adjective." },
            { q: "\"My brother is a vegan.\" Is \"My\" followed by a noun?", options: ["Yes, it is followed by \"brother\".", "No, it stands alone.", "No, it is followed by a verb.", "No, it is followed by an object."], a: "Yes, it is followed by \"brother\"." },
            { q: "\"The kitchen is ours.\" Is \"ours\" a possessive pronoun?", options: ["Yes, it is.", "No, it is a possessive adjective.", "No, it is a subject pronoun.", "No, it is an object pronoun."], a: "Yes, it is." },
            { q: "\"It tastes good.\" Is \"It\" a subject pronoun?", options: ["Yes, it is.", "No, it is an object pronoun.", "No, it is a possessive adjective.", "No, it is a possessive pronoun."], a: "Yes, it is." },
            { q: "\"He visited her.\" Is \"her\" the correct object pronoun for \"she\"?", options: ["Yes, it is.", "No, it should be \"hers\".", "No, it should be \"him\".", "No, it should be \"she\"."], a: "Yes, it is." },
            { q: "\"This apple is my.\" Is this sentence correct?", options: ["No, it should be \"mine\".", "Yes, it is correct.", "No, it should be \"me\".", "No, it should be \"I\"."], a: "No, it should be \"mine\"." },
            { q: "What does the idiom \"a piece of cake\" mean?", options: ["Something that is very easy to do.", "A difficult math test.", "A healthy vegetable.", "A type of dairy product."], a: "Something that is very easy to do." },
            { q: "If you are \"nuts about\" something, you...", options: ["Like it very much.", "Are allergic to it.", "Think it is boring.", "Cry over it."], a: "Like it very much." },
            { q: "When you say something is \"not my cup of tea,\" it means...", options: ["You don't like it or are not interested in it.", "You want to drink it.", "You are very thirsty.", "You love it."], a: "You don't like it or are not interested in it." },
            { q: "What does \"don't cry over spilled milk\" advise you to do?", options: ["Don't be upset about something that has already happened.", "Clean the kitchen floor.", "Buy more milk at the store.", "Always drink water instead of milk."], a: "Don't be upset about something that has already happened." },
            { q: "If someone is the \"apple of your eye,\" you...", options: ["Are extremely fond and proud of them.", "Think they are a bad person.", "Want to eat them.", "Think they are a vegetable."], a: "Are extremely fond and proud of them." },
            { q: "A \"bad egg\" is an idiom for someone who is...", options: ["Dishonest or unreliable.", "Very healthy and organic.", "The best in the class.", "Full of nutrients."], a: "Dishonest or unreliable." },
            { q: "The phrase \"cream of the crop\" refers to...", options: ["The best of a particular group.", "Dairy products that have gone bad.", "People who are not very good.", "Spilled milk on the floor."], a: "The best of a particular group." },
            { q: "A \"big cheese\" is someone who...", options: ["Is a very important or powerful person.", "Loves eating dairy products.", "Is very small and quiet.", "Is a piece of cake."], a: "Is a very important or powerful person." },
            { q: "To say something \"in a nutshell\" means to...", options: ["Summarize it in the fewest possible words.", "Hide a secret in a tree.", "Be allergic to nuts.", "Talk for a very long time."], a: "Summarize it in the fewest possible words." },
            { q: "If a movie is described as \"cheesy,\" it is...", options: ["Cliché, predictable, or overly sentimental.", "Made of dairy products.", "Very healthy and nutritious.", "The cream of the crop."], a: "Cliché, predictable, or overly sentimental." },
            { q: "A vegetarian diet does not include...", options: ["Meat.", "Vegetables.", "Fruits.", "Grains."], a: "Meat." },
            { q: "A vegan diet avoids...", options: ["All animal products, including dairy and eggs.", "Only red meat.", "Only sugar.", "Only vegetables."], a: "All animal products, including dairy and eggs." },
            { q: "If a school is \"nut-free,\" it means...", options: ["It is safe for people with nut allergies.", "They only serve nuts for lunch.", "Everyone is crazy.", "They don't teach math."], a: "It is safe for people with nut allergies." },
            { q: "A person who avoids bread and pasta might be on a...", options: ["Gluten-free or low-carb diet.", "Sugar-free diet.", "Dairy-free diet.", "Vegan diet."], a: "Gluten-free or low-carb diet." },
            { q: "The base of the food pyramid usually consists of...", options: ["Grains and cereals.", "Fats and oils.", "Sweets and candies.", "Meat and fish."], a: "Grains and cereals." },
            { q: "\"Organic food\" is produced...", options: ["Without the use of artificial chemicals or pesticides.", "Only in fast-food restaurants.", "With lots of added sugar.", "By bad eggs."], a: "Without the use of artificial chemicals or pesticides." },
            { q: "Eating \"too much sugar\" is considered...", options: ["Unhealthy.", "Essential for survival.", "The cream of the crop.", "A balanced diet."], a: "Unhealthy." },
            { q: "Vitamins and minerals in food are called...", options: ["Nutrients.", "Sweets.", "Empty calories.", "Allergies."], a: "Nutrients." },
            { q: "Milk, cheese, and yogurt belong to which food group?", options: ["Dairy.", "Poultry.", "Grains.", "Sweets."], a: "Dairy." },
            { q: "Apples, bananas, and grapes belong to which food group?", options: ["Fruits.", "Vegetables.", "Fats.", "Meat."], a: "Fruits." }
        ],

        // --- TYPE 4: FIND MEANING (40 ITEMS) ---
        4: [
            { sent: "Please read the **menu**.", word: "menu", options: ["Cardápio / Menu", "Conta", "Garçom", "Prato"], a: "Cardápio / Menu", def: "A list of dishes available in a restaurant." },
            { sent: "The **waiter** is bringing our food.", word: "waiter", options: ["Cozinheiro", "Cliente", "Garçom", "Gerente"], a: "Garçom", def: "A man whose job is to serve customers at their tables." },
            { sent: "Dad paid the **bill**.", word: "bill", options: ["Gorjeta", "Conta", "Pedido", "Preço"], a: "Conta", def: "A printed statement of the money owed for goods or services." },
            { sent: "We left a **tip** on the table.", word: "tip", options: ["Prato", "Garfo", "Gorjeta", "Xícara"], a: "Gorjeta", def: "A sum of money given to someone as a reward for their services." },
            { sent: "Use a **fork** to eat pasta.", word: "fork", options: ["Faca", "Colher", "Garfo", "Tigela"], a: "Garfo", def: "An implement with two or more prongs used for lifting food to the mouth." },
            { sent: "Cut the meat with a **knife**.", word: "knife", options: ["Faca", "Colher", "Prato", "Tigela"], a: "Faca", def: "An instrument composed of a blade fixed into a handle, used for cutting." },
            { sent: "Use a **spoon** for the soup.", word: "spoon", options: ["Garfo", "Faca", "Colher", "Guardanapo"], a: "Colher", def: "An implement consisting of a small, shallow oval bowl on a long handle." },
            { sent: "Use a **napkin** to clean your mouth.", word: "napkin", options: ["Toalha", "Guardanapo", "Prato", "Copo"], a: "Guardanapo", def: "A square piece of cloth or paper used at a meal to wipe the lips or protect garments." },
            { sent: "Tomato **soup** is hot.", word: "soup", options: ["Sopa", "Salada", "Suco", "Carne"], a: "Sopa", def: "A liquid dish, typically made by boiling meat, fish, or vegetables." },
            { sent: "**Salad** is healthy.", word: "Salad", options: ["Sopa", "Salada", "Arroz", "Feijão"], a: "Salada", def: "A cold dish of various mixtures of raw or cooked vegetables." },
            { sent: "**Rice** and beans are popular.", word: "Rice", options: ["Arroz", "Macarrão", "Pão", "Carne"], a: "Arroz", def: "A swamp grass that is widely cultivated as a source of food." },
            { sent: "I like black **beans**.", word: "beans", options: ["Arroz", "Feijão", "Batata", "Carne"], a: "Feijão", def: "Edible seeds that grow in long pods." },
            { sent: "Italian **pasta** is famous.", word: "pasta", options: ["Pizza", "Massa / Macarrão", "Pão", "Carne"], a: "Massa / Macarrão", def: "A dish consisting of dough made from durum wheat and water." },
            { sent: "Let's order a **pizza**.", word: "pizza", options: ["Hambúrguer", "Pizza", "Sanduíche", "Batata frita"], a: "Pizza", def: "A dish of Italian origin consisting of a flat, round base of dough baked with toppings." },
            { sent: "This **hamburger** is huge.", word: "hamburger", options: ["Pizza", "Hambúrguer", "Sanduíche", "Carne"], a: "Hambúrguer", def: "A round patty of ground beef, fried or grilled and typically served on a bun." },
            { sent: "I love salty **french fries**.", word: "french fries", options: ["Batatas fritas", "Batatas cozidas", "Arroz", "Legumes"], a: "Batatas fritas", def: "Potatoes cut into strips and deep-fried." },
            { sent: "Eat your **vegetables**!", word: "vegetables", options: ["Frutas", "Legumes / Verduras", "Carnes", "Doces"], a: "Legumes / Verduras", def: "A plant or part of a plant used as food." },
            { sent: "What **drink** do you want?", word: "drink", options: ["Bebida", "Comida", "Sobremesa", "Entrada"], a: "Bebida", def: "A liquid that can be swallowed as refreshment." },
            { sent: "**Water** is good for you.", word: "Water", options: ["Suco", "Refrigerante", "Água", "Café"], a: "Água", def: "A colorless, transparent, odorless liquid." },
            { sent: "Orange **juice** is sweet.", word: "juice", options: ["Chá", "Café", "Suco", "Leite"], a: "Suco", def: "The liquid obtained from or present in fruit or vegetables." },
            { sent: "Don't drink too much **soda**.", word: "soda", options: ["Refrigerante", "Água", "Chá", "Café"], a: "Refrigerante", def: "A sweet, carbonated drink." },
            { sent: "Chocolate cake is a great **dessert**.", word: "dessert", options: ["Entrada", "Prato principal", "Sobremesa", "Bebida"], a: "Sobremesa", def: "The sweet course eaten at the end of a meal." },
            { sent: "Vanilla **ice cream** is cold.", word: "ice cream", options: ["Bolo", "Torta", "Sorvete", "Pudim"], a: "Sorvete", def: "A soft frozen food made with sweetened and flavored milk fat." },
            { sent: "An apple is a **fruit**.", word: "fruit", options: ["Legume", "Fruta", "Doce", "Carne"], a: "Fruta", def: "The sweet and fleshy product of a tree or other plant." },
            { sent: "I ate a bar of **chocolate**.", word: "chocolate", options: ["Chocolate", "Bolo", "Doce", "Açúcar"], a: "Chocolate", def: "A food preparation in the form of a paste or solid block made from cacao seeds." },
            { sent: "**Beef** comes from cows.", word: "Beef", options: ["Frango", "Porco", "Carne bovina", "Peixe"], a: "Carne bovina", def: "The flesh of a cow, bull, or ox used as food." },
            { sent: "**Chicken** is tasty.", word: "Chicken", options: ["Carne bovina", "Carne de porco", "Frango", "Peixe"], a: "Frango", def: "A domestic fowl kept for its eggs or meat." },
            { sent: "**Pork** is meat from a pig.", word: "Pork", options: ["Carne bovina", "Carne de porco", "Cordeiro", "Peixe"], a: "Carne de porco", def: "The flesh of a pig used as food." },
            { sent: "**Fish** live in water.", word: "Fish", options: ["Carne bovina", "Frango", "Peixe", "Porco"], a: "Peixe", def: "A limbless cold-blooded vertebrate animal with gills and fins." },
            { sent: "I would like the **steak**, please.", word: "steak", options: ["Bife / Filé", "Peixe", "Salada", "Sopa"], a: "Bife / Filé", def: "High-quality beef cut into thick slices." },
            { sent: "I order a slice of **cake**.", word: "cake", options: ["Torta", "Bolo", "Pudim", "Fruta"], a: "Bolo", def: "An item of soft, sweet food made from flour, sugar, and eggs." },
            { sent: "My grandma makes apple **pie**.", word: "pie", options: ["Bolo", "Torta (doce)", "Pudim", "Sorvete"], a: "Torta (doce)", def: "A baked dish of fruit, typically with a top and base of pastry." },
            { sent: "This **pudding** is soft.", word: "pudding", options: ["Pudim", "Torta", "Bolo", "Sorvete"], a: "Pudim", def: "A dessert with a creamy consistency." },
            { sent: "We **ordered** nachos as an appetizer.", word: "ordered", options: ["Pedimos", "Comemos", "Bebemos", "Pagamos"], a: "Pedimos", def: "Past form of order; requested for food or drink." },
            { sent: "The **chef** cooks delicious meals.", word: "chef", options: ["Garçom", "Cozinheiro(a) / Chef", "Cliente", "Gerente"], a: "Cozinheiro(a) / Chef", def: "A professional cook, typically the chief cook." },
            { sent: "I finished my **meal**.", word: "meal", options: ["Refeição", "Bebida", "Conta", "Mesa"], a: "Refeição", def: "An occasion when food is eaten, such as breakfast or dinner." },
            { sent: "Put the food on the **plate**.", word: "plate", options: ["Tigela", "Prato", "Xícara", "Copo"], a: "Prato", def: "A flat dish from which food is eaten." },
            { sent: "My **cup** of coffee is empty.", word: "cup", options: ["Xícara", "Tigela", "Copo", "Prato"], a: "Xícara", def: "A small bowl-shaped container for drinking from, typically having a handle." },
            { sent: "I eat soup in a **bowl**.", word: "bowl", options: ["Prato", "Xícara", "Tigela", "Copo"], a: "Tigela", def: "A round, deep dish used for food or liquid." },
            { sent: "Can I have a **glass** of water?", word: "glass", options: ["Xícara", "Copo", "Tigela", "Garrafa"], a: "Copo", def: "A drinking container made of glass." }
        ],

        // --- TYPE 5: CORRECT THE SENTENCE (40 ITEMS) ---
        5: [
            { sent: "This is **mine** apple.", correct: "my" },
            { sent: "The food is **their**.", correct: "theirs" },
            { sent: "I made a sandwich for **she**.", correct: "her" },
            { sent: "**Us** are hungry today.", correct: "We" },
            { sent: "Mom cooks for **we**.", correct: "us" },
            { sent: "That is **him** car.", correct: "his" },
            { sent: "The dog ate **it's** food.", correct: "its" },
            { sent: "She gave **I** a gift.", correct: "me" },
            { sent: "The house is **our**.", correct: "ours" },
            { sent: "I invited **they** to the party.", correct: "them" },
            { sent: "Is this **yours** plate?", correct: "your" },
            { sent: "The recipe is **her**.", correct: "hers" },
            { sent: "**Them** are going to the cinema.", correct: "They" },
            { sent: "This book belongs to **my**.", correct: "me" },
            { sent: "He is the apple of **mine** eye.", correct: "my" },
            { sent: "The test was a piece of **cakes**.", correct: "cake" },
            { sent: "I am **nut** about chocolate.", correct: "nuts" },
            { sent: "That is not my **glass** of tea.", correct: "cup" },
            { sent: "Don't cry over spilled **water**.", correct: "milk" },
            { sent: "In a **nut**, we need to eat better.", correct: "nutshell" },
            { sent: "He is a bad **apple**.", correct: "egg" },
            { sent: "She is the **cheese** of the crop.", correct: "cream" },
            { sent: "The principal is the big **milk** here.", correct: "cheese" },
            { sent: "The movie was too **cheese**.", correct: "cheesy" },
            { sent: "My brother is a **vegetable**; he doesn't eat meat.", correct: "vegetarian" },
            { sent: "A **veg** diet has no animal products.", correct: "vegan" },
            { sent: "This school is **nuts-free**.", correct: "nut-free" },
            { sent: "The bread is **glutens-free**.", correct: "gluten-free" },
            { sent: "I eat a lot of **dairies** products.", correct: "dairy" },
            { sent: "Rice is a type of **fruit**.", correct: "grain" },
            { sent: "Apples are delicious **vegetables**.", correct: "fruits" },
            { sent: "Too much **sugars** is unhealthy.", correct: "sugar" },
            { sent: "Avocado has good **fats**.", correct: "fat" },
            { sent: "We buy **organics** food.", correct: "organic" },
            { sent: "Put the food on your **cup**.", correct: "plate" },
            { sent: "She has a balanced **eating**.", correct: "diet" },
            { sent: "**Me** like apples.", correct: "I" },
            { sent: "She cooks well. I asked **he** for a recipe.", correct: "her" },
            { sent: "The lunch is **hises**.", correct: "his" },
            { sent: "Feed **they**.", correct: "them" }
        ],
    

        // --- TYPE 6: MATCH SENTENCES (40 SETS of 5 pairs) ---
        6: [
            // Group 1
            { pairs: [{a: "Whose sandwich is this?", b: "It is mine."}, {a: "Did you make the salad for him?", b: "Yes, I made it for him."}, {a: "Is she a vegetarian?", b: "Yes, she doesn't eat meat."}, {a: "What is your favorite food?", b: "My favorite food is pizza."}, {a: "Are these cookies yours?", b: "No, they are his."}] },
            // Group 2
            { pairs: [{a: "Who is the big cheese here?", b: "The principal is the big cheese."}, {a: "Do you like horror movies?", b: "No, they are not my cup of tea."}, {a: "Why is the baby crying?", b: "Because he dropped his ice cream. Don't cry over spilled milk!"}, {a: "What is a vegan diet?", b: "A diet that has no animal products."}, {a: "Is this bread gluten-free?", b: "Yes, it is safe for you to eat."}] },
            // Group 3
            { pairs: [{a: "Whose water bottle is green?", b: "That one is hers."}, {a: "Did they bring their own lunch?", b: "Yes, the food is theirs."}, {a: "Are you nuts about chocolate?", b: "Yes, I love it so much!"}, {a: "What do grains give us?", b: "They give us energy."}, {a: "Who cooks for us?", b: "Our mom cooks for us every day."}] },
            // Group 4
            { pairs: [{a: "Where should I put the food?", b: "Put it on your plate."}, {a: "Is avocado a healthy fat?", b: "Yes, it has good nutrients."}, {a: "Why is the school nut-free?", b: "Because some students have allergies."}, {a: "Was the math test hard?", b: "No, it was a piece of cake."}, {a: "Who is the apple of his eye?", b: "His little daughter is."}] },
            // Group 5
            { pairs: [{a: "Do you eat dairy products?", b: "Yes, I drink milk every morning."}, {a: "Are these vegetables organic?", b: "Yes, they are grown without chemicals."}, {a: "Whose dog is this?", b: "It is ours."}, {a: "Did she help you with the project?", b: "Yes, she helped me yesterday."}, {a: "Is he a reliable friend?", b: "No, he is a bad egg."}] },
            // Group 6
            { pairs: [{a: "What does the food pyramid show?", b: "It shows how to have a balanced diet."}, {a: "Are sweets healthy?", b: "No, too much sugar is unhealthy."}, {a: "Who are the cream of the crop?", b: "Our basketball team, they always win."}, {a: "Did you invite them to dinner?", b: "Yes, we invited them."}, {a: "Is that my juice?", b: "No, the juice is his."}] },
            // Group 7
            { pairs: [{a: "What did you say in a nutshell?", b: "I said we need to eat better."}, {a: "Do they sell gluten-free pasta?", b: "Yes, they have a special menu."}, {a: "Who is eating my fries?", b: "He is eating them."}, {a: "Are you tired of cheesy movies?", b: "Yes, they are too predictable."}, {a: "Whose house is this?", b: "The house is theirs."}] },
            // Group 8
            { pairs: [{a: "Did the coach train the players?", b: "Yes, he trained them well."}, {a: "Why do we need food?", b: "We need food to live and get energy."}, {a: "Are apples fruits or vegetables?", b: "They are delicious fruits."}, {a: "Do you eat meat every day?", b: "No, I sometimes eat plant-based meals."}, {a: "Whose backpack is on the chair?", b: "It is yours."}] },
            // Group 9
            { pairs: [{a: "Did you share the pizza with her?", b: "Yes, I shared it with her."}, {a: "What are dairy products?", b: "Foods like milk, cheese, and yogurt."}, {a: "Why is he crying over spilled milk?", b: "Because he is upset about a past mistake."}, {a: "Is your sister a vegan?", b: "Yes, she avoids all animal products."}, {a: "Who won the gold medal?", b: "The best athlete won it."}] },
            // Group 10
            { pairs: [{a: "Did you ask him for a recipe?", b: "Yes, I asked him."}, {a: "Are you ready for the meal?", b: "Yes, I am very hungry."}, {a: "What is a healthy snack?", b: "An apple is a healthy snack."}, {a: "Whose turn is it to wash the dishes?", b: "It is my turn."}, {a: "Is the cake nut-free?", b: "Yes, there are no peanuts in it."}] },
            // Group 11
            { pairs: [{a: "I am nuts", b: "about chocolate cake."}, {a: "Horror movies are not", b: "my cup of tea."}, {a: "The test was a piece", b: "of cake for me."}, {a: "She is the apple", b: "of her father's eye."}, {a: "There is no use crying", b: "over spilled milk."}] },
            // Group 12
            { pairs: [{a: "He is dishonest, he is a", b: "bad egg."}, {a: "Our team is the cream", b: "of the crop."}, {a: "The principal is the big", b: "cheese in this school."}, {a: "In a nutshell, we must", b: "eat healthier food."}, {a: "That romantic comedy was too", b: "cheesy for my taste."}] },
            // Group 13
            { pairs: [{a: "This is my book, and that is", b: "yours."}, {a: "She forgot her lunch, so I shared", b: "mine."}, {a: "We bought this house, so it is", b: "ours."}, {a: "The red car belongs to him, it is", b: "his."}, {a: "They paid for the food, so it is", b: "theirs."}] },
            // Group 14
            { pairs: [{a: "I made a delicious sandwich", b: "for you."}, {a: "She is a great cook, she helps", b: "us."}, {a: "They are very hungry, please feed", b: "them."}, {a: "He was thirsty, so I gave water to", b: "him."}, {a: "I love my mom, I bought a gift for", b: "her."}] },
            // Group 15
            { pairs: [{a: "A vegetarian does not eat", b: "any meat or poultry."}, {a: "A vegan diet avoids all", b: "animal products."}, {a: "If you have an allergy, eat", b: "nut-free food."}, {a: "People with celiac disease need", b: "gluten-free bread."}, {a: "To lose weight, some people try a", b: "low-carb or keto diet."}] },
            // Group 16
            { pairs: [{a: "Milk, cheese, and yogurt are", b: "dairy products."}, {a: "Apples, bananas, and grapes are", b: "healthy fruits."}, {a: "Carrots, broccoli, and lettuce are", b: "fresh vegetables."}, {a: "Bread, rice, and wheat belong to the", b: "grains group."}, {a: "Steak, chicken, and fish are types of", b: "meat."}] },
            // Group 17
            { pairs: [{a: "You should avoid eating too much", b: "sugar and fat."}, {a: "Organic food is grown without", b: "artificial chemicals."}, {a: "A balanced diet provides essential", b: "nutrients for the body."}, {a: "Put the healthy food on your", b: "plate and enjoy the meal."}, {a: "Good nutrition helps maintain", b: "excellent health."}] },
            // Group 18
            { pairs: [{a: "\"I\" is a subject pronoun, while \"me\" is", b: "an object pronoun."}, {a: "\"We\" do the action, and the action happens to", b: "\"us\"."}, {a: "\"She\" cooks the meal, and we thank", b: "\"her\"."}, {a: "\"He\" is the big cheese, so listen to", b: "\"him\"."}, {a: "\"They\" brought the pizza, so the pizza is", b: "\"theirs\"."}] },
            // Group 19
            { pairs: [{a: "My water bottle is green, but", b: "hers is blue."}, {a: "Your lunch looks healthy, but", b: "mine is just fast food."}, {a: "Our team won the game, so the gold medal is", b: "ours."}, {a: "Their project was the best, the victory is", b: "theirs."}, {a: "His dog is very playful, I love playing with", b: "it."}] },
            // Group 20
            { pairs: [{a: "Too much soda is", b: "very unhealthy."}, {a: "Breakfast is considered an", b: "important meal of the day."}, {a: "We need food to", b: "live and have energy."}, {a: "Let's explore the delicious", b: "world of food today."}, {a: "Eating right is not a piece", b: "of cake, but it's important."}] },
            // Group 21
            { pairs: [{a: "Food", b: "Comida / Alimento"}, {a: "Meal", b: "Refeição"}, {a: "Healthy", b: "Saudável"}, {a: "Unhealthy", b: "Não saudável"}, {a: "Nutrients", b: "Nutrientes"}] },
            // Group 22
            { pairs: [{a: "Nutrition", b: "Nutrição"}, {a: "Sugar", b: "Açúcar"}, {a: "Fat", b: "Gordura"}, {a: "Organic food", b: "Comida orgânica"}, {a: "Plate", b: "Prato"}] },
            // Group 23
            { pairs: [{a: "Health", b: "Saúde"}, {a: "Diet", b: "Dieta / Regime"}, {a: "Meat", b: "Carne"}, {a: "Dairy", b: "Laticínios"}, {a: "Grains", b: "Grãos / Cereais"}] },
            // Group 24
            { pairs: [{a: "Fruits", b: "Frutas"}, {a: "Vegetables", b: "Vegetais / Legumes"}, {a: "Sweets", b: "Doces"}, {a: "Vegetarian", b: "Vegetariano(a)"}, {a: "Vegan", b: "Vegano(a)"}] },
            // Group 25
            { pairs: [{a: "Nut-free", b: "Sem nozes / castanhas"}, {a: "Gluten-free", b: "Sem glúten"}, {a: "I / Me", b: "Eu / Mim (me)"}, {a: "He / Him", b: "Ele / O (lhe)"}, {a: "She / Her", b: "Ela / A (lhe)"}] },
            // Group 26
            { pairs: [{a: "We / Us", b: "Nós / Nos"}, {a: "They / Them", b: "Eles (elas) / Os (as)"}, {a: "My / Mine", b: "Meu (minha) / O meu"}, {a: "Your / Yours", b: "Seu (sua) / O seu"}, {a: "Our / Ours", b: "Nosso (nossa) / O nosso"}] },
            // Group 27
            { pairs: [{a: "Their / Theirs", b: "Deles (delas) / O deles"}, {a: "His / His", b: "Dele / O dele"}, {a: "Her / Hers", b: "Dela / O dela"}, {a: "A piece of cake", b: "Moleza (algo muito fácil)"}, {a: "Nuts about", b: "Louco(a) por"}] },
            // Group 28
            { pairs: [{a: "My cup of tea", b: "Minha praia (o que eu gosto)"}, {a: "Cry over spilled milk", b: "Chorar pelo leite derramado"}, {a: "Apple of one's eye", b: "A menina dos olhos de alguém"}, {a: "A bad egg", b: "Uma má pessoa (ovelha negra)"}, {a: "Cream of the crop", b: "A nata (o melhor do grupo)"}] },
            // Group 29
            { pairs: [{a: "A big cheese", b: "Um chefão (pessoa importante)"}, {a: "In a nutshell", b: "Em resumo"}, {a: "Cheesy", b: "Brega / Clichê"}, {a: "Added sugar", b: "Açúcar adicionado"}, {a: "Eating style", b: "Estilo de alimentação"}] },
            // Group 30
            { pairs: [{a: "I like apples.", b: "Eu gosto de maçãs."}, {a: "She gave me an apple.", b: "Ela me deu uma maçã."}, {a: "This is my apple.", b: "Esta é minha maçã."}, {a: "The apple is mine.", b: "A maçã é minha."}, {a: "We eat together.", b: "Nós comemos juntos."}] },
            // Group 31
            { pairs: [{a: "Food", b: "O que comemos para viver (comida)."}, {a: "Meal", b: "O café da manhã, almoço ou jantar (refeição)."}, {a: "Healthy", b: "Comida que faz bem para o corpo (saudável)."}, {a: "Unhealthy", b: "Comida que faz mal, como muito doce (não saudável)."}, {a: "Sugar", b: "O pó doce que colocamos no bolo ou café (açúcar)."}] },
            // Group 32
            { pairs: [{a: "Organic", b: "Comida plantada sem produtos químicos (orgânica)."}, {a: "Plate", b: "Onde colocamos a comida para comer na mesa (prato)."}, {a: "Diet", b: "O tipo de comida que uma pessoa costuma comer (dieta)."}, {a: "Meat", b: "Bife, frango ou porco (carne)."}, {a: "Dairy", b: "Coisas feitas de leite, como queijo e iogurte (laticínios)."}] },
            // Group 33
            { pairs: [{a: "Grains", b: "Arroz, trigo e pão (grãos/cereais)."}, {a: "Fruits", b: "Maçã, banana, laranja (frutas)."}, {a: "Vegetables", b: "Alface, brócolis, cenoura (vegetais/legumes)."}, {a: "Vegetarian", b: "Quem não come carne, mas come ovo e queijo (vegetariano)."}, {a: "Vegan", b: "Quem não come nada que vem de animais (vegano)."}] },
            // Group 34
            { pairs: [{a: "Nut-free", b: "Comida que não tem amendoim ou nozes (sem castanhas)."}, {a: "Gluten-free", b: "Comida sem trigo, boa para quem tem alergia (sem glúten)."}, {a: "I", b: "Pronome usado quando eu faço a ação (eu)."}, {a: "Me", b: "Pronome usado quando a ação acontece comigo (mim/me)."}, {a: "Mine", b: "Pronome que significa que a coisa é minha e de mais ninguém (o meu)."}] },
            // Group 35
            { pairs: [{a: "He", b: "Pronome usado quando um menino faz a ação (ele)."}, {a: "Him", b: "Pronome usado quando a ação acontece com um menino (ele/o)."}, {a: "His", b: "Pronome que mostra que a coisa é de um menino (dele)."}, {a: "She", b: "Pronome usado quando uma menina faz a ação (ela)."}, {a: "Her", b: "Pronome usado quando a ação acontece com uma menina (ela/a)."}] },
            // Group 36
            { pairs: [{a: "Hers", b: "Pronome que mostra que a coisa é de uma menina, fica no final (o dela)."}, {a: "We", b: "Pronome usado quando nós fazemos a ação (nós)."}, {a: "Us", b: "Pronome usado quando a ação acontece com a gente (nós/nos)."}, {a: "Ours", b: "Pronome que mostra que a coisa é da nossa turma (o nosso)."}, {a: "They", b: "Pronome usado quando outras pessoas fazem a ação (eles/elas)."}] },
            // Group 37
            { pairs: [{a: "Them", b: "Pronome usado quando a ação acontece com outras pessoas (eles/os)."}, {a: "Theirs", b: "Pronome que mostra que a coisa é de outras pessoas (o deles)."}, {a: "A piece of cake", b: "Expressão para algo que é muito fácil de fazer (moleza)."}, {a: "Nuts about", b: "Expressão para quando você gosta muito de algo (louco por)."}, {a: "My cup of tea", b: "Expressão para o tipo de coisa que você gosta (minha praia)."}] },
            // Group 38
            { pairs: [{a: "Cry over spilled milk", b: "Ficar triste por algo ruim que já passou e não tem volta (chorar pelo leite derramado)."}, {a: "Apple of one's eye", b: "A pessoa favorita de alguém (a menina dos olhos)."}, {a: "A bad egg", b: "Uma pessoa que não é boa ou honesta (ovelha negra)."}, {a: "Cream of the crop", b: "Os melhores de um grupo (a nata)."}, {a: "A big cheese", b: "O chefe ou pessoa mais importante (um chefão)."}] },
            // Group 39
            { pairs: [{a: "In a nutshell", b: "Falar algo de forma bem curta e rápida (em resumo)."}, {a: "Cheesy", b: "Algo muito exagerado, romântico demais ou clichê (brega)."}, {a: "Fat", b: "A gordura que vem no óleo ou abacate (gordura)."}, {a: "Nutrients", b: "As vitaminas que deixam nosso corpo forte (nutrientes)."}, {a: "Health", b: "Como está o nosso corpo, se estamos bem ou doentes (saúde)."}] },
            // Group 40
            { pairs: [{a: "Sweets", b: "Balas, bolos e chocolates (doces)."}, {a: "My", b: "Adjetivo que vem antes da palavra para dizer que é meu (meu/minha)."}, {a: "Your", b: "Adjetivo que vem antes da palavra para dizer que é seu (seu/sua)."}, {a: "Yours", b: "Pronome que fica sozinho para dizer que a coisa é sua (o seu/a sua)."}, {a: "Their", b: "Adjetivo que vem antes da palavra para dizer que é deles (deles)."}] }
        ],

        // --- TYPE 7: BEST ANSWER (40 ITEMS) ---
        7: [
            { q: "Whose sandwich is on the table?", options: ["It is mine.", "It is me.", "I am a sandwich.", "It is healthy."], a: "It is mine." },
            { q: "What is your favorite food group?", options: ["I love fruits and vegetables.", "I am a piece of cake.", "It is a bad egg.", "I cry over spilled milk."], a: "I love fruits and vegetables." },
            { q: "Who made this delicious salad?", options: ["My mom made it for us.", "The salad is green.", "It is a big cheese.", "In a nutshell."], a: "My mom made it for us." },
            { q: "Why is she on a gluten-free diet?", options: ["Because she is allergic to wheat.", "Because she is the apple of his eye.", "Because she is a piece of cake.", "Because it is mine."], a: "Because she is allergic to wheat." },
            { q: "Where can we buy organic food?", options: ["At the local farmers' market.", "In a bad egg.", "It is theirs.", "We are nuts about it."], a: "At the local farmers' market." },
            { q: "What does a vegan avoid eating?", options: ["Meat, dairy, and eggs.", "Fruits and vegetables.", "Only sugar and fat.", "Nuts and grains."], a: "Meat, dairy, and eggs." },
            { q: "How do you feel about horror movies?", options: ["They are not my cup of tea.", "They are the cream of the crop.", "They are a piece of cake.", "They are spilled milk."], a: "They are not my cup of tea." },
            { q: "Whose team won the championship?", options: ["Ours won the game!", "We won the game!", "Us won the game!", "Our won the game!"], a: "Ours won the game!" },
            { q: "Why is Mr. Davis called the \"big cheese\"?", options: ["Because he is the principal and makes the rules.", "Because he eats a lot of dairy.", "Because he is a bad egg.", "Because he is nuts about pizza."], a: "Because he is the principal and makes the rules." },
            { q: "What does \"a piece of cake\" mean?", options: ["It means something is very easy.", "It means a slice of chocolate dessert.", "It means a healthy diet.", "It means an object pronoun."], a: "It means something is very easy." },
            { q: "Who is the apple of her father's eye?", options: ["His youngest daughter.", "His favorite fruit.", "His lunchbox.", "His big cheese."], a: "His youngest daughter." },
            { q: "Which pronoun replaces the noun in \"The book is my book\"?", options: ["The book is mine.", "The book is me.", "The book is my.", "The book is I."], a: "The book is mine." },
            { q: "Why shouldn't you cry over spilled milk?", options: ["Because you cannot change what already happened.", "Because milk is a dairy product.", "Because you should drink water.", "Because it is a piece of cake."], a: "Because you cannot change what already happened." },
            { q: "What did she give him for his birthday?", options: ["She gave him a new book.", "She gave he a new book.", "She gave his a new book.", "She gave himself a new book."], a: "She gave him a new book." },
            { q: "Whose jacket is on the chair?", options: ["I think it is hers.", "I think it is her.", "I think it is she.", "I think it is she's."], a: "I think it is hers." },
            { q: "Why are vegetables important for nutrition?", options: ["Because they are full of vitamins and nutrients.", "Because they are a bad egg.", "Because they are a piece of cake.", "Because they are my cup of tea."], a: "Because they are full of vitamins and nutrients." },
            { q: "What is the problem with too much sugar?", options: ["It is very unhealthy.", "It is organic.", "It is gluten-free.", "It is the cream of the crop."], a: "It is very unhealthy." },
            { q: "Who should we invite to the party?", options: ["Let's invite them.", "Let's invite they.", "Let's invite their.", "Let's invite theirs."], a: "Let's invite them." },
            { q: "What is the definition of \"in a nutshell\"?", options: ["To summarize something in a few words.", "To eat nuts on a diet.", "To be crazy about something.", "To cry over a mistake."], a: "To summarize something in a few words." },
            { q: "Whose dogs are barking outside?", options: ["They are theirs.", "They are their.", "They are them.", "They are they."], a: "They are theirs." },
            { q: "Why did you call him a \"bad egg\"?", options: ["Because he lied and cheated on the test.", "Because he ate a rotten breakfast.", "Because he is the cream of the crop.", "Because he is the apple of my eye."], a: "Because he lied and cheated on the test." },
            { q: "What do you call a person who doesn't eat meat?", options: ["A vegetarian.", "A big cheese.", "A bad egg.", "A nutrient."], a: "A vegetarian." },
            { q: "Which food group includes bread and rice?", options: ["Grains and cereals.", "Meat and poultry.", "Dairy products.", "Fats and oils."], a: "Grains and cereals." },
            { q: "Who cooked this amazing meal for us?", options: ["My father cooked it.", "My father cooked he.", "My father cooked his.", "My father cooked him."], a: "My father cooked it." },
            { q: "What are you nuts about?", options: ["I am nuts about playing video games.", "I am an allergy.", "I am a piece of cake.", "I am spilled milk."], a: "I am nuts about playing video games." },
            { q: "Whose idea was it to order pizza?", options: ["It was his idea.", "It was him idea.", "It was he idea.", "It was himself idea."], a: "It was his idea." },
            { q: "Why is she the cream of the crop?", options: ["Because she is the smartest and hardest worker.", "Because she drinks a lot of milk.", "Because she is a bad egg.", "Because she is a piece of cake."], a: "Because she is the smartest and hardest worker." },
            { q: "What kind of diet is low in carbohydrates?", options: ["A keto or low-carb diet.", "A vegan diet.", "A high-sugar diet.", "A nut-free diet."], a: "A keto or low-carb diet." },
            { q: "Which pronoun receives the action of a verb?", options: ["An object pronoun (like me, him, us).", "A subject pronoun (like I, he, we).", "A possessive adjective (like my, his, our).", "A possessive pronoun (like mine, his, ours)."], a: "An object pronoun (like me, him, us)." },
            { q: "Whose water is this?", options: ["It is yours.", "It is your.", "It is you.", "It is yourself."], a: "It is yours." },
            { q: "What is considered a healthy snack?", options: ["A fresh apple.", "A large soda.", "A chocolate cake.", "A bag of candy."], a: "A fresh apple." },
            { q: "Why is the romantic movie \"cheesy\"?", options: ["Because it is full of clichés and predictable lines.", "Because they eat cheese in it.", "Because it is a piece of cake.", "Because it is a bad egg."], a: "Because it is full of clichés and predictable lines." },
            { q: "Who gave them the gold medal?", options: ["The coach gave it to them.", "The coach gave it to they.", "The coach gave it to their.", "The coach gave it to theirs."], a: "The coach gave it to them." },
            { q: "What belongs at the top of the food pyramid?", options: ["Fats, oils, and sweets.", "Fruits and vegetables.", "Grains and cereals.", "Water and juice."], a: "Fats, oils, and sweets." },
            { q: "Whose parents are coming to the meeting?", options: ["Ours are coming.", "Our are coming.", "Us are coming.", "We are coming."], a: "Ours are coming." },
            { q: "Why do we need a balanced diet?", options: ["In order to maintain good health and get nutrients.", "In a nutshell to cry.", "Because it is a piece of cake.", "To be a bad egg."], a: "In order to maintain good health and get nutrients." },
            { q: "What did she say in a nutshell?", options: ["She said that the project was cancelled.", "She ate a nut.", "She became a vegan.", "She poured a cup of tea."], a: "She said that the project was cancelled." },
            { q: "Which pronoun completes the sentence: \"I help ___\"?", options: ["him", "he", "his", "he's"], a: "him" },
            { q: "Who is your favorite teacher?", options: ["Mr. D is my favorite; he is the cream of the crop.", "Mr. D is my favorite; he is a piece of cake.", "Mr. D is my favorite; he is a bad egg.", "Mr. D is my favorite; he is spilled milk."], a: "Mr. D is my favorite; he is the cream of the crop." },
            { q: "What is the difference between \"my\" and \"mine\"?", options: ["\"My\" needs a noun after it, \"mine\" stands alone.", "\"My\" is plural, \"mine\" is singular.", "\"My\" is for boys, \"mine\" is for girls.", "There is no difference at all."], a: "\"My\" needs a noun after it, \"mine\" stands alone." }
        ],

        // --- TYPE 8: INCORRECT VOCABULARY (40 ITEMS) ---
        8: [
            { sent: "The test was so easy, it was a **bad egg**.", wrong: "bad egg", options: ["piece of cake", "big cheese", "cup of tea", "spilled milk"], a: "piece of cake" },
            { sent: "She is the best player on the team; she is the **nutshell**.", wrong: "nutshell", options: ["cream of the crop", "spilled milk", "bad egg", "piece of cake"], a: "cream of the crop" },
            { sent: "He lied to the teacher and cheated on the exam; he is a **big cheese**.", wrong: "big cheese", options: ["bad egg", "piece of cake", "cup of tea", "apple of my eye"], a: "bad egg" },
            { sent: "Action movies are loud and violent, they are not my **cream of the crop**.", wrong: "cream of the crop", options: ["cup of tea", "piece of cake", "nutshell", "bad egg"], a: "cup of tea" },
            { sent: "I accidentally deleted the file, but I won't cry over **piece of cake**.", wrong: "piece of cake", options: ["spilled milk", "a bad egg", "the big cheese", "my cup of tea"], a: "spilled milk" },
            { sent: "The principal makes all the important decisions; he is the **bad egg** here.", wrong: "bad egg", options: ["big cheese", "spilled milk", "nutshell", "cup of tea"], a: "big cheese" },
            { sent: "She loves her grandson so much; he is the **cream** of her eye.", wrong: "cream", options: ["apple", "cheese", "egg", "cake"], a: "apple" },
            { sent: "I don't want to hear the whole long story; just tell me in a **teacup**.", wrong: "teacup", options: ["nutshell", "eggshell", "piece of cake", "cheese"], a: "nutshell" },
            { sent: "I am **milk** about the new video game; I play it every day!", wrong: "milk", options: ["nuts", "apples", "cheeses", "cakes"], a: "nuts" },
            { sent: "The romantic poem he wrote was very **salty** and predictable.", wrong: "salty", options: ["cheesy", "nutty", "milky", "fruity"], a: "cheesy" },
            { sent: "She gave the book to **I**.", wrong: "I", options: ["me", "my", "mine", "myself"], a: "me" },
            { sent: "This is not your pencil, it is **my**.", wrong: "my", options: ["mine", "me", "I", "myself"], a: "mine" },
            { sent: "**Us** are going to the cafeteria for lunch.", wrong: "Us", options: ["We", "Our", "Ours", "Ourselves"], a: "We" },
            { sent: "The teacher explained the lesson to **they**.", wrong: "they", options: ["them", "their", "theirs", "themselves"], a: "them" },
            { sent: "Is this backpack **your**?", wrong: "your", options: ["yours", "you", "yourself", "yours'"], a: "yours" },
            { sent: "I saw **he** at the organic market yesterday.", wrong: "he", options: ["him", "his", "himself", "he's"], a: "him" },
            { sent: "The house on the corner is **their**.", wrong: "their", options: ["theirs", "them", "they", "themselves"], a: "theirs" },
            { sent: "**Her** is a very talented chef who cooks vegan meals.", wrong: "Her", options: ["She", "Hers", "Herself", "She's"], a: "She" },
            { sent: "The dog chased **it's** tail in the yard.", wrong: "it's", options: ["its", "it", "itself", "its'"], a: "its" },
            { sent: "This delicious recipe is **her**.", wrong: "her", options: ["hers", "she", "herself", "she's"], a: "hers" },
            { sent: "A **carnivore** diet has no animal products like meat or dairy.", wrong: "carnivore", options: ["vegan", "vegetarian", "paleo", "keto"], a: "vegan" },
            { sent: "Apples and bananas are healthy **vegetables**.", wrong: "vegetables", options: ["fruits", "grains", "dairy", "meats"], a: "fruits" },
            { sent: "Milk, cheese, and yogurt belong to the **sweets** food group.", wrong: "sweets", options: ["dairy", "grains", "fats", "poultry"], a: "dairy" },
            { sent: "Broccoli and carrots are nutritious **grains**.", wrong: "grains", options: ["vegetables", "fruits", "dairy", "sweets"], a: "vegetables" },
            { sent: "Bread and rice give us energy because they are **dairy**.", wrong: "dairy", options: ["grains", "fruits", "fats", "meats"], a: "grains" },
            { sent: "To be healthy, avoid eating too much **nutrition** like candy and cake.", wrong: "nutrition", options: ["sugar / sweets", "organic food", "vegetables", "water"], a: "sugar / sweets" },
            { sent: "A person who doesn't eat meat but eats eggs is a **vegan**.", wrong: "vegan", options: ["vegetarian", "carnivore", "paleo", "gluten-free"], a: "vegetarian" },
            { sent: "The top of the food **plate** shows fats, oils, and sweets.", wrong: "plate", options: ["pyramid", "diet", "meal", "menu"], a: "pyramid" },
            { sent: "Avocado contains good **sugar** that our brain needs.", wrong: "sugar", options: ["fat", "dairy", "grain", "sweet"], a: "fat" },
            { sent: "If you are allergic to peanuts, you need a **dairy-free** diet.", wrong: "dairy-free", options: ["nut-free", "gluten-free", "sugar-free", "low-carb"], a: "nut-free" },
            { sent: "Food grown without chemicals is called **unhealthy** food.", wrong: "unhealthy", options: ["organic", "fast", "sweet", "artificial"], a: "organic" },
            { sent: "You eat soup from a shallow **plate**.", wrong: "plate", options: ["bowl", "cup", "glass", "fork"], a: "bowl" },
            { sent: "We use a **spoon** to cut our steak at dinner.", wrong: "spoon", options: ["knife", "fork", "napkin", "cup"], a: "knife" },
            { sent: "A balanced **pyramid** is important for maintaining good health and weight.", wrong: "pyramid", options: ["diet", "meal", "dish", "plate"], a: "diet" },
            { sent: "The teacher told **we** to study for the science test.", wrong: "we", options: ["us", "our", "ours", "ourselves"], a: "us" },
            { sent: "I want to share my lunch with **she**.", wrong: "she", options: ["her", "hers", "herself", "she's"], a: "her" },
            { sent: "This project is **our**, we worked very hard on it.", wrong: "our", options: ["ours", "us", "we", "ourselves"], a: "ours" },
            { sent: "He told a lie, so everyone thinks he is a piece of **cake**.", wrong: "cake", options: ["a bad egg", "a big cheese", "spilled milk", "a nutshell"], a: "a bad egg" },
            { sent: "The test was not my cup of **coffee**, I found it very difficult.", wrong: "coffee", options: ["tea", "milk", "juice", "water"], a: "tea" },
            { sent: "They asked **I** to bring the organic salad to the picnic.", wrong: "I", options: ["me", "my", "mine", "myself"], a: "me" }
        ],

        // --- TYPE 9: LISTEN AND ANSWER (40 ITEMS) ---
        9: [
            { audio: "Are those cookies yours?", options: ["Yes, they are mine.", "Yes, they are me.", "Yes, they are my.", "Yes, they are I."], a: "Yes, they are mine." },
            { audio: "Who did the teacher give the apple to?", options: ["She gave it to him.", "She gave it to he.", "She gave it to his.", "She gave it to himself."], a: "She gave it to him." },
            { audio: "Whose sandwich is on the table?", options: ["It is hers.", "It is her.", "It is she.", "It is she's."], a: "It is hers." },
            { audio: "Did they invite us to the dinner party?", options: ["Yes, they invited us.", "Yes, they invited we.", "Yes, they invited our.", "Yes, they invited ours."], a: "Yes, they invited us." },
            { audio: "What does a vegan avoid eating?", options: ["A vegan avoids all animal products, like meat and dairy.", "A vegan avoids all fruits and vegetables.", "A vegan avoids all nuts and grains.", "A vegan avoids all organic foods."], a: "A vegan avoids all animal products, like meat and dairy." },
            { audio: "Why is he called the big cheese?", options: ["Because he is the most important person in the company.", "Because he eats a lot of dairy.", "Because he is a bad egg.", "Because he is spilled milk."], a: "Because he is the most important person in the company." },
            { audio: "How was the math exam today?", options: ["It was a piece of cake, very easy!", "It was a bad egg, very easy!", "It was the apple of my eye, very easy!", "It was my cup of tea, very easy!"], a: "It was a piece of cake, very easy!" },
            { audio: "Do you like watching horror movies?", options: ["No, they are not my cup of tea.", "No, they are the cream of the crop.", "No, they are a piece of cake.", "No, they are in a nutshell."], a: "No, they are not my cup of tea." },
            { audio: "Why shouldn't I be sad about the broken plate?", options: ["Because there's no use crying over spilled milk.", "Because it is a piece of cake.", "Because it is a bad egg.", "Because it is the big cheese."], a: "Because there's no use crying over spilled milk." },
            { audio: "Why do you buy organic vegetables?", options: ["Because they are grown without artificial chemicals.", "Because they are full of added sugar.", "Because they are unhealthy fast food.", "Because they are a type of dairy."], a: "Because they are grown without artificial chemicals." },
            { audio: "Which food group gives us the most energy?", options: ["Grains and cereals give us energy.", "Sweets and candies give us energy.", "Water and juice give us energy.", "Knives and forks give us energy."], a: "Grains and cereals give us energy." },
            { audio: "What pronoun replaces 'my brother and I' as a subject?", options: ["We.", "Us.", "Our.", "Ours."], a: "We." },
            { audio: "What pronoun replaces 'the students' as an object?", options: ["Them.", "They.", "Their.", "Theirs."], a: "Them." },
            { audio: "Is this classroom ours?", options: ["Yes, the classroom is ours.", "Yes, the classroom is our.", "Yes, the classroom is us.", "Yes, the classroom is we."], a: "Yes, the classroom is ours." },
            { audio: "Why is she considered the cream of the crop?", options: ["Because she is the best athlete on the team.", "Because she is a bad egg.", "Because she cries over spilled milk.", "Because she is allergic to dairy."], a: "Because she is the best athlete on the team." },
            { audio: "What does the expression 'in a nutshell' mean?", options: ["It means to summarize something briefly.", "It means to be allergic to peanuts.", "It means to eat healthy snacks.", "It means to be crazy about something."], a: "It means to summarize something briefly." },
            { audio: "Are you nuts about video games?", options: ["Yes, I absolutely love playing them.", "Yes, I am allergic to them.", "Yes, they are a piece of cake.", "Yes, they are a bad egg."], a: "Yes, I absolutely love playing them." },
            { audio: "What belongs at the top of the food pyramid?", options: ["Fats, oils, and sweets belong at the top.", "Fruits and vegetables belong at the top.", "Grains and cereals belong at the top.", "Meat and dairy belong at the top."], a: "Fats, oils, and sweets belong at the top." },
            { audio: "Did the chef prepare this meal for me?", options: ["Yes, he prepared it for you.", "Yes, he prepared it for your.", "Yes, he prepared it for yours.", "Yes, he prepared it for yourself."], a: "Yes, he prepared it for you." },
            { audio: "Why is he the apple of his mother's eye?", options: ["Because she loves and cherishes him deeply.", "Because he eats a lot of fruit.", "Because he is a bad egg.", "Because he is the big cheese."], a: "Because she loves and cherishes him deeply." },
            { audio: "Who does the red bicycle belong to?", options: ["It is his.", "It is he.", "It is him.", "It is himself."], a: "It is his." },
            { audio: "Does a vegetarian eat chicken?", options: ["No, a vegetarian does not eat any meat.", "Yes, a vegetarian only eats chicken.", "No, a vegetarian does not eat vegetables.", "Yes, a vegetarian eats a piece of cake."], a: "No, a vegetarian does not eat any meat." },
            { audio: "Why does she need a gluten-free diet?", options: ["Because her body cannot process wheat properly.", "Because she is the cream of the crop.", "Because she doesn't like dairy products.", "Because she is nuts about sugar."], a: "Because her body cannot process wheat properly." },
            { audio: "What do you use a knife for at the dinner table?", options: ["I use it to cut my meat.", "I use it to drink soup.", "I use it to wipe my mouth.", "I use it to serve drinks."], a: "I use it to cut my meat." },
            { audio: "Did the principal talk to them?", options: ["Yes, he talked to them yesterday.", "Yes, he talked to they yesterday.", "Yes, he talked to their yesterday.", "Yes, he talked to theirs yesterday."], a: "Yes, he talked to them yesterday." },
            { audio: "Is that romantic movie cheesy?", options: ["Yes, it is full of clichés and very predictable.", "Yes, it is full of dairy products.", "No, it is a bad egg.", "No, it is a piece of cake."], a: "Yes, it is full of clichés and very predictable." },
            { audio: "Why is he considered a bad egg?", options: ["Because he is dishonest and causes trouble.", "Because he is the best player on the team.", "Because he is a healthy breakfast.", "Because he is nuts about sports."], a: "Because he is dishonest and causes trouble." },
            { audio: "What do fruits and vegetables provide?", options: ["They provide essential vitamins and nutrients.", "They provide too much added sugar.", "They provide bad fats and oils.", "They provide dairy and grains."], a: "They provide essential vitamins and nutrients." },
            { audio: "Whose project won first place?", options: ["Theirs won first place.", "Their won first place.", "Them won first place.", "They won first place."], a: "Theirs won first place." },
            { audio: "Did she buy this gift for us?", options: ["Yes, she bought it for us.", "Yes, she bought it for we.", "Yes, she bought it for our.", "Yes, she bought it for ours."], a: "Yes, she bought it for us." },
            { audio: "Are you on a nut-free diet?", options: ["Yes, I am highly allergic to peanuts.", "Yes, I am a big cheese.", "Yes, I cry over spilled milk.", "Yes, I am the apple of my eye."], a: "Yes, I am highly allergic to peanuts." },
            { audio: "Is this your jacket or my jacket?", options: ["That one is yours, and this one is mine.", "That one is your, and this one is my.", "That one is you, and this one is I.", "That one is yours, and this one is my."], a: "That one is yours, and this one is mine." },
            { audio: "What is the function of an object pronoun?", options: ["It receives the action of the verb.", "It performs the action of the verb.", "It shows ownership before a noun.", "It describes a type of food."], a: "It receives the action of the verb." },
            { audio: "Does he like eating sweets?", options: ["Yes, he eats too much added sugar.", "Yes, he eats only organic vegetables.", "No, he is a bad egg.", "No, he is the big cheese."], a: "Yes, he eats too much added sugar." },
            { audio: "Did you feed the dogs?", options: ["Yes, I fed them an hour ago.", "Yes, I fed they an hour ago.", "Yes, I fed their an hour ago.", "Yes, I fed theirs an hour ago."], a: "Yes, I fed them an hour ago." },
            { audio: "What is a healthy eating style?", options: ["Having a balanced diet with lots of nutrients.", "Eating fast food and drinking soda every day.", "Being a bad egg.", "Crying over spilled milk."], a: "Having a balanced diet with lots of nutrients." },
            { audio: "Is that car his or hers?", options: ["It is his. He bought it yesterday.", "It is him. He bought it yesterday.", "It is he. He bought it yesterday.", "It is himself. He bought it yesterday."], a: "It is his. He bought it yesterday." },
            { audio: "What does 'my cup of tea' mean when you use it negatively?", options: ["It means it is not something I enjoy or prefer.", "It means the tea is cold.", "It means it is very easy to do.", "It means someone is a bad person."], a: "It means it is not something I enjoy or prefer." },
            { audio: "Who is the new CEO of the company?", options: ["Mrs. Smith is the big cheese now.", "Mrs. Smith is a piece of cake now.", "Mrs. Smith is spilled milk now.", "Mrs. Smith is a bad egg now."], a: "Mrs. Smith is the big cheese now." },
            { audio: "How would you explain the food pyramid in a nutshell?", options: ["It shows we should eat more grains and veggies, and fewer sweets.", "It shows we should eat only meat and dairy.", "It shows we should eat a lot of sugar and fat.", "It shows we should eat bad eggs."], a: "It shows we should eat more grains and veggies, and fewer sweets." }
        ],

        // --- TYPE 10: COMPLETE SENTENCES (40 ITEMS) ---
        10: [
            { audio: "I brought an apple for my lunch. It is mine.", sent: "I brought an apple for ___ lunch. It is ___.", blanks: ["my", "mine"] },
            { audio: "She is a vegan, so she doesn't eat meat or dairy.", sent: "She is a ___, so she doesn't eat ___ or dairy.", blanks: ["vegan", "meat"] },
            { audio: "The test was very easy. It was a piece of cake.", sent: "The test was very easy. It was a ___ of ___.", blanks: ["piece", "cake"] },
            { audio: "We invited them to dinner, and they thanked us.", sent: "We invited ___ to dinner, and they thanked ___.", blanks: ["them", "us"] },
            { audio: "He is the big cheese of the company; he makes all decisions.", sent: "He is the big ___ of the company; he makes all ___.", blanks: ["cheese", "decisions"] },
            { audio: "Her diet is gluten-free because she has an allergy.", sent: "Her diet is ___ because she has an ___.", blanks: ["gluten-free", "allergy"] },
            { audio: "This sandwich is not yours. It belongs to him.", sent: "This sandwich is not ___. It belongs to ___.", blanks: ["yours", "him"] },
            { audio: "Don't cry over spilled milk. We can fix the mistake.", sent: "Don't cry over spilled ___. We can fix the ___.", blanks: ["milk", "mistake"] },
            { audio: "Fruits and vegetables have many nutrients for your health.", sent: "Fruits and ___ have many nutrients for your ___.", blanks: ["vegetables", "health"] },
            { audio: "Our basketball team is the cream of the crop.", sent: "Our basketball team is the ___ of the ___.", blanks: ["cream", "crop"] },
            { audio: "He is a bad egg. He always lies to the teacher.", sent: "He is a bad ___. He always ___ to the teacher.", blanks: ["egg", "lies"] },
            { audio: "I love reading books. I am nuts about literature.", sent: "I love reading books. I am ___ about ___.", blanks: ["nuts", "literature"] },
            { audio: "They buy organic food at the local market.", sent: "They buy ___ food at the local ___.", blanks: ["organic", "market"] },
            { audio: "That romantic movie was too cheesy for my taste.", sent: "That romantic movie was too ___ for my ___.", blanks: ["cheesy", "taste"] },
            { audio: "The water bottle is hers, not his.", sent: "The water bottle is ___, not ___.", blanks: ["hers", "his"] },
            { audio: "In a nutshell, we must follow a balanced diet.", sent: "In a ___, we must follow a balanced ___.", blanks: ["nutshell", "diet"] },
            { audio: "Milk and cheese belong to the dairy food group.", sent: "Milk and cheese belong to the ___ food ___.", blanks: ["dairy", "group"] },
            { audio: "She is the apple of her grandfather's eye.", sent: "She is the ___ of her grandfather's ___.", blanks: ["apple", "eye"] },
            { audio: "I don't eat much sugar because it is unhealthy.", sent: "I don't eat much ___ because it is ___.", blanks: ["sugar", "unhealthy"] },
            { audio: "The chef cooked a delicious meal for us tonight.", sent: "The ___ cooked a delicious ___ for us tonight.", blanks: ["chef", "meal"] },
            { audio: "Horror movies are not my cup of tea.", sent: "Horror movies are not my ___ of ___.", blanks: ["cup", "tea"] },
            { audio: "They are hungry. Please feed them some bread.", sent: "They are hungry. Please ___ them some ___.", blanks: ["feed", "bread"] },
            { audio: "A vegetarian does not eat poultry or fish.", sent: "A ___ does not eat poultry or ___.", blanks: ["vegetarian", "fish"] },
            { audio: "This project is ours. We worked hard on it.", sent: "This project is ___. We worked ___ on it.", blanks: ["ours", "hard"] },
            { audio: "Use a fork to eat your salad from the plate.", sent: "Use a ___ to eat your salad from the ___.", blanks: ["fork", "plate"] },
            { audio: "Avocado has good fat that provides energy.", sent: "Avocado has good ___ that provides ___.", blanks: ["fat", "energy"] },
            { audio: "Their house is bigger than ours.", sent: "___ house is bigger than ___.", blanks: ["Their", "ours"] },
            { audio: "He asked me to give the book to her.", sent: "He asked ___ to give the book to ___.", blanks: ["me", "her"] },
            { audio: "Sweets and candies are at the top of the pyramid.", sent: "___ and candies are at the top of the ___.", blanks: ["Sweets", "pyramid"] },
            { audio: "We need food to live and grow strong.", sent: "We need ___ to live and grow ___.", blanks: ["food", "strong"] },
            { audio: "This school is nut-free to protect students with allergies.", sent: "This school is ___ to protect students with ___.", blanks: ["nut-free", "allergies"] },
            { audio: "The dog wagged its tail when I fed it.", sent: "The dog wagged ___ tail when I fed ___.", blanks: ["its", "it"] },
            { audio: "She told him to wipe his mouth with a napkin.", sent: "She told ___ to wipe his mouth with a ___.", blanks: ["him", "napkin"] },
            { audio: "Grains like rice and wheat are very common.", sent: "___ like rice and wheat are very ___.", blanks: ["Grains", "common"] },
            { audio: "I see your point, but the decision is mine.", sent: "I see your ___, but the decision is ___.", blanks: ["point", "mine"] },
            { audio: "Are those keys yours or his?", sent: "Are those keys ___ or ___?", blanks: ["yours", "his"] },
            { audio: "A balanced eating style improves your health.", sent: "A balanced eating ___ improves your ___.", blanks: ["style", "health"] },
            { audio: "He is a talented player; he is the cream of the crop.", sent: "He is a talented ___; he is the ___ of the crop.", blanks: ["player", "cream"] },
            { audio: "We bought organic tomatoes at the farmers' market.", sent: "We bought ___ tomatoes at the farmers' ___.", blanks: ["organic", "market"] },
            { audio: "I gave them the tickets yesterday afternoon.", sent: "I gave ___ the tickets yesterday ___.", blanks: ["them", "afternoon"] }
        ]
    },

    // ==========================================================
    // CONTEXT POOL (10 ITEMS PER TYPE)
    // ==========================================================
    contextPool: {

        // --- TYPE 11: COMPLETE DIALOGUE (10 ITEMS) ---
        11: [
            {
                title: "Dialogue 1: Ordering Lunch",
                lines: [
                    { speaker: "Waiter", text: "Good afternoon. Are you ___?", options: ["ready to order", "ready to pay", "ready to cook"], a: "ready to order" },
                    { speaker: "Albert", text: "Yes, I ___ the steak with french fries, please.", options: ["would like", "like", "want"], a: "would like" },
                    { speaker: "Waiter", text: "Certainly. Would you like ___ salad as a side dish?", options: ["any", "some", "many"], a: "some" },
                    { speaker: "Albert", text: "Yes, please. And how ___ soda is in a large glass?", options: ["much", "many", "lot"], a: "much" },
                    { speaker: "Waiter", text: "It is 500ml, sir.", options: ["Yes", "No", "Okay"], a: "Okay" }, // Filler to maintain flow
                    { speaker: "Albert", text: "Perfect. I ___ a large soda too.", options: ["would like", "like", "am"], a: "would like" }
                ]
            },
            {
                title: "Dialogue 2: At the Cafe",
                lines: [
                    { speaker: "Celine", text: "This cafe is lovely. Look at the ___!", options: ["menu", "bill", "tip"], a: "menu" },
                    { speaker: "Albert", text: "It has ___ delicious options.", options: ["many", "much", "any"], a: "many" },
                    { speaker: "Celine", text: "I’m not very hungry. I think I will have ___ soup.", options: ["some", "any", "a lot"], a: "some" },
                    { speaker: "Albert", text: "Do they have ___ vegetarian soups?", options: ["any", "some", "much"], a: "any" },
                    { speaker: "Celine", text: "Yes, the tomato soup. I ___ to try that.", options: ["would like", "liked", "want"], a: "would like" }
                ]
            },
            {
                title: "Dialogue 3: Discussing Healthy Food",
                lines: [
                    { speaker: "Teacher", text: "How ___ fruit do you eat every day?", options: ["much", "many", "any"], a: "much" },
                    { speaker: "Student", text: "I eat ___ apples and bananas.", options: ["a lot of", "many", "much"], a: "a lot of" },
                    { speaker: "Teacher", text: "That's good. Do you drink ___ soda?", options: ["any", "some", "many"], a: "any" },
                    { speaker: "Student", text: "No, I don't drink ___ soda...", options: ["much", "many", "a lot"], a: "much" },
                    { speaker: "Student", text: "...because it has too ___ sugar.", options: ["much", "many", "some"], a: "much" }
                ]
            },
            {
                title: "Dialogue 4: The Family Dinner",
                lines: [
                    { speaker: "Dad", text: "Is there ___ milk in the fridge?", options: ["any", "some", "many"], a: "any" },
                    { speaker: "Mom", text: "No, there isn't ___. We need to buy more.", options: ["any", "some", "many"], a: "any" },
                    { speaker: "Dad", text: "Okay. How ___ money do we need for the grocery store?", options: ["much", "many", "any"], a: "much" },
                    { speaker: "Mom", text: "Not ___. Just twenty dollars.", options: ["much", "many", "some"], a: "much" },
                    { speaker: "Dad", text: "Great. I ___ to go now before it closes.", options: ["would like", "like", "am"], a: "would like" }
                ]
            },
            {
                title: "Dialogue 5: Pizza Toppings",
                lines: [
                    { speaker: "Albert", text: "Let’s order a pizza! ___ toppings should we get?", options: ["How many", "How much", "Any"], a: "How many" },
                    { speaker: "Celine", text: "I ___ some cheese, tomatoes, and beans.", options: ["would like", "want", "like"], a: "would like" },
                    { speaker: "Albert", text: "Beans on a pizza? That's ___ beans!", options: ["a lot of", "many", "much"], a: "a lot of" },
                    { speaker: "Celine", text: "It’s a local tradition! Do you want ___ onions?", options: ["any", "some", "much"], a: "any" },
                    { speaker: "Albert", text: "No, I don't want ___ onions, thank you.", options: ["any", "some", "many"], a: "any" }
                ]
            },
            {
                title: "Dialogue 6: The Busy Waitress",
                lines: [
                    { speaker: "Customer", text: "Excuse me, ___, can we see the menu?", options: ["Waitress", "Waiter", "Chef"], a: "Waitress" },
                    { speaker: "Waitress", text: "Of course. I'm sorry, there are ___ customers today.", options: ["many", "much", "any"], a: "many" },
                    { speaker: "Customer", text: "That's okay. We ___ to order two hamburgers.", options: ["would like", "like", "wants"], a: "would like" },
                    { speaker: "Waitress", text: "Would you like ___ fries with those?", options: ["some", "any", "many"], a: "some" },
                    { speaker: "Customer", text: "Yes, ___ fries, please!", options: ["a lot of", "much", "any"], a: "a lot of" }
                ]
            },
            {
                title: "Dialogue 7: Paying the Bill",
                lines: [
                    { speaker: "Albert", text: "That was a delicious ___.", options: ["meal", "menu", "tip"], a: "meal" },
                    { speaker: "Celine", text: "Yes, the chef is great. Can we ask for the ___?", options: ["bill", "plate", "fork"], a: "bill" },
                    { speaker: "Albert", text: "Waiter! ___ is the total?", options: ["How much", "How many", "Which"], a: "How much" },
                    { speaker: "Waiter", text: "It is thirty dollars, sir.", options: ["Yes", "No", "Okay"], a: "Okay" }, // Filler
                    { speaker: "Albert", text: "Here is the money. We should leave a ___ for the good service.", options: ["tip", "napkin", "bowl"], a: "tip" }
                ]
            },
            {
                title: "Dialogue 8: Preparing a Party",
                lines: [
                    { speaker: "Mom", text: "How ___ people are coming to your birthday?", options: ["many", "much", "any"], a: "many" },
                    { speaker: "Son", text: "Ten friends are coming. We need ___ snacks.", options: ["a lot of", "much", "any"], a: "a lot of" },
                    { speaker: "Mom", text: "Do we have ___ juice in the kitchen?", options: ["any", "some", "many"], a: "any" },
                    { speaker: "Son", text: "We have ___ orange juice, but no soda.", options: ["some", "any", "much"], a: "some" },
                    { speaker: "Mom", text: "Okay. I ___ to buy some more cupcakes too.", options: ["would like", "like", "want"], a: "would like" }
                ]
            },
            {
                title: "Dialogue 9: The Restaurant Bill",
                lines: [
                    { speaker: "Waiter", text: "Did you enjoy your ___?", options: ["meal", "plate", "menu"], a: "meal" },
                    { speaker: "Albert", text: "Yes, the steak was delicious. Can we have the ___, please?", options: ["bill", "tip", "order"], a: "bill" },
                    { speaker: "Waiter", text: "Of course. Here it is. Will you pay with cash or card?", options: ["Yes", "No", "Okay"], a: "Okay" }, // Filler
                    { speaker: "Albert", text: "I will use my card. The service was great, so I will leave a generous ___...", options: ["tip", "napkin", "bowl"], a: "tip" },
                    { speaker: "Albert", text: "...for ___.", options: ["you", "your", "yours"], a: "you" },
                    { speaker: "Waiter", text: "Thank ___ very much! Have a nice evening.", options: ["you", "your", "yours"], a: "you" }
                ]
            },
            {
                title: "Dialogue 10: Food Preferences",
                lines: [
                    { speaker: "Celine", text: "I love drinking ___, but I know it has too much sugar.", options: ["soda", "water", "juice"], a: "soda" },
                    { speaker: "Albert", text: "You should drink more water. It is better for ___ health.", options: ["your", "yours", "you"], a: "your" },
                    { speaker: "Celine", text: "I know. Sometimes I feel like a bad ___ when I eat junk food.", options: ["egg", "apple", "cheese"], a: "egg" },
                    { speaker: "Albert", text: "Don't worry. Just try to eat a balanced ___.", options: ["diet", "menu", "recipe"], a: "diet" },
                    { speaker: "Celine", text: "You are right. In a ___, I need to change my habits.", options: ["nutshell", "cup of tea", "piece of cake"], a: "nutshell" }
                ]
            }
        ],

        // --- TYPE 12: READ AND ANSWER (10 ITEMS) ---
        12: [
            {
                title: "Text 1: The Vegan Diet",
                text: "Leo decided to become a vegan last year. A vegan diet has no animal products. That means he doesn't eat meat, poultry, fish, eggs, or dairy. Instead, he eats a lot of grains, fruits, and vegetables. He gets his nutrients from plants. Some people think it is hard, but Leo says it is a piece of cake. His health has improved, and he feels very energetic. His favorite meal is a large organic salad.",
                questions: [
                    { q: "What does a vegan diet avoid?", options: ["Animal products.", "Fruits and vegetables.", "Grains and water."], a: "Animal products." },
                    { q: "What does Leo eat a lot of?", options: ["Meat and dairy.", "Grains, fruits, and vegetables.", "Sweets and fats."], a: "Grains, fruits, and vegetables." },
                    { q: "Where does he get his nutrients?", options: ["From meat.", "From dairy.", "From plants."], a: "From plants." },
                    { q: "What idiom does Leo use to say his diet is easy?", options: ["Cry over spilled milk.", "A piece of cake.", "A bad egg."], a: "A piece of cake." },
                    { q: "What is his favorite meal?", options: ["A hamburger.", "An organic salad.", "A slice of pizza."], a: "An organic salad." }
                ]
            },
            {
                title: "Text 2: Whose Lunch Is It?",
                text: "It is lunchtime at school. Albert, Celine, and Sarah are sitting together. Albert has a sandwich. It is his. Celine has a salad with quinoa. It is hers. Sarah forgot her lunchbox at home, so she is sad. \"Don't cry over spilled milk,\" Celine tells her. \"We can share our food with you.\" Albert gives her half of his sandwich, and Celine gives her some fruit. Sarah is very happy to have friends like them.",
                questions: [
                    { q: "Whose sandwich is it?", options: ["It is Celine's.", "It is his (Albert's).", "It is hers (Sarah's)."], a: "It is his (Albert's)." },
                    { q: "What does Celine have for lunch?", options: ["A sandwich.", "A salad with quinoa.", "Nothing."], a: "A salad with quinoa." },
                    { q: "Why is Sarah sad?", options: ["She forgot her lunchbox.", "She doesn't like salad.", "She dropped her sandwich."], a: "She forgot her lunchbox." },
                    { q: "What idiom does Celine use to tell Sarah not to be upset?", options: ["A piece of cake.", "Don't cry over spilled milk.", "Apple of my eye."], a: "Don't cry over spilled milk." },
                    { q: "What do Albert and Celine do for Sarah?", options: ["They laugh at her.", "They share their food with her.", "They buy her a pizza."], a: "They share their food with her." }
                ]
            },
            {
                title: "Text 3: The Food Pyramid",
                text: "The food pyramid helps us understand nutrition. At the bottom, we have grains like bread and rice. We need them for energy. Next are fruits and vegetables, which give us vitamins. Above them are dairy and proteins like meat, fish, and eggs. We should eat them in moderation. At the very top are fats, oils, and sweets. We should eat very little of these because too much sugar and fat is unhealthy.",
                questions: [
                    { q: "What is at the bottom of the food pyramid?", options: ["Sweets.", "Meat and dairy.", "Grains like bread and rice."], a: "Grains like bread and rice." },
                    { q: "Why do we need fruits and vegetables?", options: ["To get vitamins.", "To get fat.", "To get sugar."], a: "To get vitamins." },
                    { q: "What is included in the protein group?", options: ["Bread and rice.", "Meat, fish, and eggs.", "Apples and bananas."], a: "Meat, fish, and eggs." },
                    { q: "Where are fats and sweets located on the pyramid?", options: ["At the bottom.", "In the middle.", "At the very top."], a: "At the very top." },
                    { q: "Why should we eat very little sugar and fat?", options: ["Because they are expensive.", "Because they are unhealthy.", "Because they are organic."], a: "Because they are unhealthy." }
                ]
            },
            {
                title: "Text 4: A Sweet Mistake",
                text: "Yesterday, Albert tried to bake a chocolate cake for Celine's birthday. He is nuts about chocolate! He mixed the flour, eggs, and sugar. But he accidentally used salt instead of sugar! When Celine tasted it, her face turned red. \"This is terrible!\" she said. Albert was very embarrassed. \"Well,\" Celine smiled, \"it's the thought that counts. Don't cry over spilled milk. Let's just buy a cake from the bakery.\"",
                questions: [
                    { q: "What was Albert trying to bake?", options: ["A pie.", "A chocolate cake.", "A loaf of bread."], a: "A chocolate cake." },
                    { q: "What idiom shows that Albert loves chocolate?", options: ["He is a bad egg.", "He is nuts about chocolate.", "It's not his cup of tea."], a: "He is nuts about chocolate." },
                    { q: "What mistake did Albert make?", options: ["He burned the cake.", "He used salt instead of sugar.", "He forgot the eggs."], a: "He used salt instead of sugar." },
                    { q: "How did Celine react when she tasted it?", options: ["She said it was delicious.", "Her face turned red and she said it was terrible.", "She asked for more."], a: "Her face turned red and she said it was terrible." },
                    { q: "What did they decide to do at the end?", options: ["Bake another cake.", "Buy a cake from the bakery.", "Eat the salty cake."], a: "Buy a cake from the bakery." }
                ]
            },
            {
                title: "Text 5: Food Allergies",
                text: "Many people have special diets because of food allergies. For example, my brother cannot eat gluten. His diet is gluten-free. He eats special bread and pasta. My friend Lily is allergic to peanuts. Her meals must be strictly nut-free. If she eats a nut, she gets very sick. It is important to read the labels on food packaging to check the ingredients. In a nutshell, we must be careful to protect our health.",
                questions: [
                    { q: "Why do some people have special diets?", options: ["Because they don't like food.", "Because of food allergies.", "Because food is expensive."], a: "Because of food allergies." },
                    { q: "What kind of diet does the author's brother follow?", options: ["Vegan.", "Gluten-free.", "Dairy-free."], a: "Gluten-free." },
                    { q: "What is Lily allergic to?", options: ["Milk.", "Peanuts.", "Apples."], a: "Peanuts." },
                    { q: "What is important to do to protect our health?", options: ["Eat lots of sugar.", "Read the labels on food packaging.", "Never eat bread."], a: "Read the labels on food packaging." },
                    { q: "What idiom means \"to summarize briefly\"?", options: ["In a nutshell.", "A piece of cake.", "My cup of tea."], a: "In a nutshell." }
                ]
            },
            {
                title: "Text 6: The Cream of the Crop",
                text: "Our school's basketball team is amazing. They won the championship last week. The captain, Marcos, is the cream of the crop. He is the best player we have. However, there is one player, Julian, who is a bad egg. He never passes the ball to us and he argues with the coach. Our coach told him, \"Teamwork is essential. You must play with them, not against them!\"",
                questions: [
                    { q: "How good is the school's basketball team?", options: ["They are very bad.", "They are amazing.", "They are boring."], a: "They are amazing." },
                    { q: "What idiom is used to describe Marcos as the best player?", options: ["The cream of the crop.", "A bad egg.", "A piece of cake."], a: "The cream of the crop." },
                    { q: "Who is described as a \"bad egg\"?", options: ["The coach.", "Marcos.", "Julian."], a: "Julian." },
                    { q: "What does Julian do wrong?", options: ["He passes the ball too much.", "He never passes the ball and argues.", "He doesn't come to practice."], a: "He never passes the ball and argues." },
                    { q: "What pronoun does the coach use to refer to the team?", options: ["Me.", "Them.", "Mine."], a: "Them." }
                ]
            },
            {
                title: "Text 7: Organic Farming",
                text: "My uncle has a farm. He grows organic food. This means he doesn't use chemicals or pesticides on his vegetables. He says organic farming is better for the environment and our health. The tomatoes from his farm are delicious. They are full of nutrients. I love visiting him and eating fresh carrots right from the ground. His lifestyle is very healthy, and his farm is the apple of his eye.",
                questions: [
                    { q: "What kind of food does the uncle grow?", options: ["Fast food.", "Organic food.", "Unhealthy food."], a: "Organic food." },
                    { q: "What does organic farming avoid?", options: ["Water and sunlight.", "Chemicals and pesticides.", "Seeds and dirt."], a: "Chemicals and pesticides." },
                    { q: "Why is organic farming good?", options: ["It is faster.", "It is better for the environment and health.", "It makes food taste bad."], a: "It is better for the environment and health." },
                    { q: "What are the tomatoes full of?", options: ["Sugar.", "Nutrients.", "Fat."], a: "Nutrients." },
                    { q: "What idiom shows that the uncle loves his farm very much?", options: ["It is his cup of tea.", "It is the apple of his eye.", "It is a piece of cake."], a: "It is the apple of his eye." }
                ]
            },
            {
                title: "Text 8: Not My Cup of Tea",
                text: "Celine invited Albert to a horror movie marathon. Albert doesn't like scary movies. \"Thanks for the invitation, Celine, but horror movies are not my cup of tea,\" he said. \"I prefer comedies or action films.\" Celine understood. \"That's okay! We can watch a comedy instead. I have a new movie. It is mine, but we can watch it together.\" They watched the comedy and had a great time eating popcorn.",
                questions: [
                    { q: "What did Celine invite Albert to do?", options: ["Go to a restaurant.", "Watch a horror movie marathon.", "Bake a cake."], a: "Watch a horror movie marathon." },
                    { q: "How does Albert express that he doesn't like horror movies?", options: ["He says they are a bad egg.", "He says they are not his cup of tea.", "He says he is nuts about them."], a: "He says they are not his cup of tea." },
                    { q: "What kind of movies does Albert prefer?", options: ["Comedies or action films.", "Dramas.", "Sci-Fi movies."], a: "Comedies or action films." },
                    { q: "Whose new comedy movie is it?", options: ["It is his (Albert's).", "It is hers (Celine's).", "It belongs to the cinema."], a: "It is hers (Celine's)." },
                    { q: "What did they eat while watching the movie?", options: ["Salad.", "Popcorn.", "Apples."], a: "Popcorn." }
                ]
            },
            {
                title: "Text 9: The Big Cheese",
                text: "Mr. Davis is the principal of our school. Everyone respects him. He is the big cheese around here. Yesterday, he visited our cafeteria. He noticed that students were eating too many sweets. He decided to change the menu. Now, the cafeteria offers more fruits, grains, and salads. Some students were unhappy, but Mr. Davis told them, \"Nutrition is important for your brains. You will thank me later.\"",
                questions: [
                    { q: "Who is Mr. Davis?", options: ["A student.", "The principal of the school.", "The cafeteria chef."], a: "The principal of the school." },
                    { q: "What idiom means Mr. Davis is the boss or most important person?", options: ["The cream of the crop.", "The big cheese.", "A bad egg."], a: "The big cheese." },
                    { q: "What problem did Mr. Davis notice in the cafeteria?", options: ["Students were eating too many sweets.", "The food was too expensive.", "There was no water."], a: "Students were eating too many sweets." },
                    { q: "What does the cafeteria offer now?", options: ["More hamburgers and fries.", "More fruits, grains, and salads.", "Only vegan food."], a: "More fruits, grains, and salads." },
                    { q: "Why did Mr. Davis change the menu?", options: ["Because nutrition is important for the brain.", "Because sweets are too cheap.", "Because he hates chocolate."], a: "Because nutrition is important for the brain." }
                ]
            },
            {
                title: "Text 10: Understanding Pronouns",
                text: "Pronouns are very useful in English. Instead of saying \"Maria ate Maria's apple,\" we can say \"She ate her apple.\" Subject pronouns like 'I', 'you', and 'they' do the action. Object pronouns like 'me', 'us', and 'them' receive the action. For example, \"The teacher helped us.\" We also use possessive pronouns to show ownership without repeating the noun. \"This book is mine\" is much better than \"This book is my book.\"",
                questions: [
                    { q: "Why are pronouns helpful?", options: ["They replace nouns so we don't repeat them.", "They make food taste better.", "They are hard to spell."], a: "They replace nouns so we don't repeat them." },
                    { q: "Which pronoun does the action in a sentence?", options: ["Object pronoun.", "Subject pronoun.", "Possessive pronoun."], a: "Subject pronoun." },
                    { q: "In the sentence \"The teacher helped us,\" what is \"us\"?", options: ["A subject pronoun.", "An object pronoun.", "A possessive adjective."], a: "An object pronoun." },
                    { q: "What do possessive pronouns show?", options: ["Action.", "Ownership.", "Time."], a: "Ownership." },
                    { q: "Which sentence uses a possessive pronoun correctly?", options: ["This is mine book.", "This book is mine.", "This book is me."], a: "This book is mine." }
                ]
            }
        ],

        // --- TYPE 13: LISTEN AND ANSWER CONTEXT (10 ITEMS) ---
        13: [
            {
                title: "Audio Script 1",
                audio: "Are those cookies yours? Yes, they are mine. My mom packed them for me. She makes the best chocolate chip cookies. I can share some with you if you want.",
                questions: [
                    { q: "Whose cookies are on the table?", options: ["They are his.", "They are mine.", "They are hers."], a: "They are mine." },
                    { q: "Who packed the cookies?", options: ["The speaker's mom.", "The speaker.", "The teacher."], a: "The speaker's mom." },
                    { q: "What kind of cookies are they?", options: ["Oatmeal.", "Chocolate chip.", "Peanut butter."], a: "Chocolate chip." },
                    { q: "Does the speaker's mom bake well?", options: ["No, she is terrible.", "Yes, she makes the best cookies.", "She never bakes."], a: "Yes, she makes the best cookies." },
                    { q: "What does the speaker offer?", options: ["To eat them all.", "To share some.", "To sell them."], a: "To share some." }
                ]
            },
            {
                title: "Audio Script 2",
                audio: "Are these carrots yours? No, they aren't mine. They are hers. She is on a strict diet. She eats a lot of organic vegetables. I prefer eating fruit.",
                questions: [
                    { q: "Are the carrots the speaker's?", options: ["Yes, they are.", "No, they aren't mine.", "They belong to the teacher."], a: "No, they aren't mine." },
                    { q: "Whose carrots are they?", options: ["His.", "Theirs.", "Hers."], a: "Hers." },
                    { q: "Why does she eat carrots?", options: ["She is on a strict diet.", "She loves orange food.", "She wants to see better."], a: "She is on a strict diet." },
                    { q: "What kind of vegetables does she eat?", options: ["Canned vegetables.", "Organic vegetables.", "Frozen vegetables."], a: "Organic vegetables." },
                    { q: "What does the speaker prefer?", options: ["Eating meat.", "Eating fruit.", "Drinking juice."], a: "Eating fruit." }
                ]
            },
            {
                title: "Audio Script 3",
                audio: "What does a vegan diet omit? A vegan diet has no animal products like meat or dairy. It relies heavily on grains, fruits, and vegetables. It is very healthy if you do it right.",
                questions: [
                    { q: "What does a vegan diet omit?", options: ["A vegan diet has no animal products like meat or dairy.", "A vegan diet has no gluten or grains.", "A vegan diet has no fruits or vegetables."], a: "A vegan diet has no animal products like meat or dairy." },
                    { q: "What does a vegan diet rely heavily on?", options: ["Meat and cheese.", "Grains, fruits, and vegetables.", "Fast food and soda."], a: "Grains, fruits, and vegetables." },
                    { q: "Is a vegan diet healthy?", options: ["No, it is dangerous.", "Yes, if you do it right.", "Only for athletes."], a: "Yes, if you do it right." },
                    { q: "Does a vegan eat dairy?", options: ["Yes, sometimes.", "No, never.", "Only milk."], a: "No, never." },
                    { q: "Does a vegan eat grains?", options: ["Yes, heavily.", "No, never.", "Only wheat."], a: "Yes, heavily." }
                ]
            },
            {
                title: "Audio Script 4",
                audio: "Is baking a cake difficult for you? No, it's a piece of cake! I love cooking. I bake for my family every weekend. My specialty is apple pie.",
                questions: [
                    { q: "Is baking a cake difficult for the speaker?", options: ["Yes, very hard.", "No, it's a piece of cake!", "They hate baking."], a: "No, it's a piece of cake!" },
                    { q: "How does the speaker feel about cooking?", options: ["I love cooking.", "It is boring.", "It is stressful."], a: "I love cooking." },
                    { q: "When does the speaker bake?", options: ["Every morning.", "Every weekend.", "Once a year."], a: "Every weekend." },
                    { q: "Who does the speaker bake for?", options: ["Friends.", "Family.", "The teacher."], a: "Family." },
                    { q: "What is the speaker's specialty?", options: ["Chocolate cake.", "Apple pie.", "Vanilla ice cream."], a: "Apple pie." }
                ]
            },
            {
                title: "Audio Script 5",
                audio: "Who did the teacher help? She helped us with our nutrition project. We didn't know how to organize the food pyramid. She explained everything clearly. She is a great teacher.",
                questions: [
                    { q: "Who did the teacher help?", options: ["She helped us with our nutrition project.", "She helped the principal.", "She helped them."], a: "She helped us with our nutrition project." },
                    { q: "What was the project about?", options: ["Math.", "Nutrition.", "History."], a: "Nutrition." },
                    { q: "What didn't the students know how to do?", options: ["Cook a meal.", "Organize the food pyramid.", "Bake a cake."], a: "Organize the food pyramid." },
                    { q: "How did the teacher explain things?", options: ["Confusingly.", "Quietly.", "Clearly."], a: "Clearly." },
                    { q: "What is the speaker's opinion of the teacher?", options: ["She is a bad egg.", "She is a great teacher.", "She is very strict."], a: "She is a great teacher." }
                ]
            },
            {
                title: "Audio Script 6",
                audio: "What is your favorite food group? I am nuts about dairy, especially cheese! I eat cheese with my eggs in the morning. Sometimes I drink milk before bed.",
                questions: [
                    { q: "What is the speaker's favorite food group?", options: ["I am nuts about dairy, especially cheese!", "Fruits.", "Grains."], a: "I am nuts about dairy, especially cheese!" },
                    { q: "What does the speaker eat with eggs?", options: ["Bread.", "Cheese.", "Bacon."], a: "Cheese." },
                    { q: "When does the speaker eat eggs?", options: ["In the morning.", "At noon.", "At night."], a: "In the morning." },
                    { q: "What does the speaker sometimes drink?", options: ["Juice.", "Soda.", "Milk."], a: "Milk." },
                    { q: "When do they drink it?", options: ["Before school.", "Before bed.", "At lunch."], a: "Before bed." }
                ]
            },
            {
                title: "Audio Script 7",
                audio: "Why is he eating an apple? Because it is a healthy snack full of nutrients. He is trying to avoid junk food. He wants to have a balanced diet.",
                questions: [
                    { q: "Why is he eating an apple?", options: ["Because it is a healthy snack full of nutrients.", "Because it is an unhealthy fat.", "Because it is a dairy product."], a: "Because it is a healthy snack full of nutrients." },
                    { q: "What is he trying to avoid?", options: ["Vegetables.", "Junk food.", "Water."], a: "Junk food." },
                    { q: "What does he want to have?", options: ["A bad egg.", "A piece of cake.", "A balanced diet."], a: "A balanced diet." },
                    { q: "Is an apple healthy?", options: ["Yes, very healthy.", "No, it has too much sugar.", "It is bad for teeth."], a: "Yes, very healthy." },
                    { q: "What is the apple full of?", options: ["Fat.", "Nutrients.", "Dairy."], a: "Nutrients." }
                ]
            },
            {
                title: "Audio Script 8",
                audio: "Are you sad about dropping your ice cream? Yes, but my dad told me not to cry over spilled milk. It was an accident. We are going to buy another one now.",
                questions: [
                    { q: "Are you sad about dropping your ice cream?", options: ["Yes, but my dad told me not to cry over spilled milk.", "Yes, but my dad told me it's not my cup of tea.", "Yes, but my dad told me I am a bad egg."], a: "Yes, but my dad told me not to cry over spilled milk." },
                    { q: "What did the speaker drop?", options: ["Ice cream.", "A piece of cake.", "A cup of coffee."], a: "Ice cream." },
                    { q: "Who comforted the speaker?", options: ["Mom.", "The teacher.", "Dad."], a: "Dad." },
                    { q: "Was it done on purpose?", options: ["Yes.", "No, it was an accident.", "Maybe."], a: "No, it was an accident." },
                    { q: "What are they going to do now?", options: ["Go home.", "Buy another one.", "Cry."], a: "Buy another one." }
                ]
            },
            {
                title: "Audio Script 9",
                audio: "Does your brother eat wheat? No, he follows a strict gluten-free diet. He has an allergy. It is hard sometimes, but he feels much better when he avoids it.",
                questions: [
                    { q: "Does your brother eat wheat?", options: ["No, he follows a strict gluten-free diet.", "No, he follows a strict nut-free diet.", "No, he follows a strict dairy-free diet."], a: "No, he follows a strict gluten-free diet." },
                    { q: "Why doesn't he eat wheat?", options: ["He doesn't like it.", "He has an allergy.", "He is a vegan."], a: "He has an allergy." },
                    { q: "Is the diet easy for him?", options: ["Yes, it is a piece of cake.", "It is hard sometimes.", "He hates it."], a: "It is hard sometimes." },
                    { q: "How does he feel when he avoids wheat?", options: ["Sick.", "Tired.", "Much better."], a: "Much better." },
                    { q: "What kind of diet is it?", options: ["Vegan.", "Gluten-free.", "Dairy-free."], a: "Gluten-free." }
                ]
            },
            {
                title: "Audio Script 10",
                audio: "Who is the boss of the restaurant? Mr. Smith is the big cheese around here. He makes sure everything runs smoothly. The staff respects him a lot because he is fair.",
                questions: [
                    { q: "Who is the boss of the restaurant?", options: ["Mr. Smith is the big cheese around here.", "Mr. Smith is the apple of my eye.", "Mr. Smith is the cream of the crop."], a: "Mr. Smith is the big cheese around here." },
                    { q: "What does Mr. Smith do?", options: ["He cooks the food.", "He washes dishes.", "He makes sure everything runs smoothly."], a: "He makes sure everything runs smoothly." },
                    { q: "How does the staff feel about him?", options: ["They respect him a lot.", "They hate him.", "They ignore him."], a: "They respect him a lot." },
                    { q: "Why do they respect him?", options: ["Because he pays well.", "Because he is fair.", "Because he is scary."], a: "Because he is fair." },
                    { q: "Is he important?", options: ["Yes, he is the big cheese.", "No, he is a bad egg.", "He is just a waiter."], a: "Yes, he is the big cheese." }
                ]
            }
        ],

        // --- TYPE 14: COMPLETE TEXT (10 ITEMS) ---
        14: [
            {
                title: "Text 1: A Healthy Choice",
                text: "My doctor told [1] (I / my / me) that I need to improve my [2] (nutrition / sugar / fast food). In a [3] (nutshell / cake / egg), I have to stop eating junk food. I promised [4] (him / his / he) that I would start eating more [5] (vegetables / fats / sweets).",
                answers: ["me", "nutrition", "nutshell", "him", "vegetables"]
            },
            {
                title: "Text 2: The Best Team",
                text: "Our soccer team is the cream of the [1] (crop / milk / cheese). [2] (We / Us / Our) practice every day after school. The coach is very strict with [3] (us / we / our), but he is a great leader. He tells us that \"no pain, no [4] (gain / game / goal).\" The gold medal is [5] (ours / our / we) to win this year!",
                answers: ["crop", "We", "us", "gain", "ours"]
            },
            {
                title: "Text 3: Sharing Dessert",
                text: "At the restaurant, I ordered a chocolate [1] (cake / apple / carrot) for dessert. It was huge! I couldn't eat it all by [2] (myself / mine / me). I asked my friend if he wanted a piece. \"Is it [3] (yours / your / you) to share?\" he asked. \"Yes, it is [4] (mine / my / me),\" I replied. I gave [5] (him / his / he) a large slice.",
                answers: ["cake", "myself", "yours", "mine", "him"]
            },
            {
                title: "Text 4: A Diet Preference",
                text: "Sarah is a [1] (vegetarian / meat / dairy); she doesn't eat beef or chicken. However, she loves [2] (dairy / vegan / nut-free) products like cheese and yogurt. Eating raw fish like sushi is not her cup of [3] (tea / milk / coffee). Her favorite [4] (meal / bill / menu) is a large organic salad. She says it is good for [5] (her / she / hers) health.",
                answers: ["vegetarian", "dairy", "tea", "meal", "her"]
            },
            {
                title: "Text 5: The Food Pyramid",
                text: "If you look at the food [1] (pyramid / plate / glass), you will see what you should eat. At the base, there are [2] (grains / meats / sweets) like rice and wheat. In the middle, you find [3] (fruits / fats / sugars) and vegetables. At the very top, there are [4] (fats / dairies / proteins) and oils. You shouldn't eat too much of [5] (them / they / their) to stay healthy.",
                answers: ["pyramid", "grains", "fruits", "fats", "them"]
            },
            {
                title: "Text 6: The Supermarket Run",
                text: "My mom sent [1] (me / I / my) to the store to buy groceries. She gave me a list. \"Don't forget the [2] (organic / bad egg / spilled milk) tomatoes,\" she said. I also bought some [3] (nut-free / fast / cheese) cookies for my brother's allergy. When I went to pay the [4] (bill / menu / tip), I realized I forgot my wallet! I had to run back to get [5] (it / them / its).",
                answers: ["me", "organic", "nut-free", "bill", "it"]
            },
            {
                title: "Text 7: The Difficult Boss",
                text: "The manager of our office is the big [1] (cheese / egg / cake). Everyone is a bit afraid of [2] (him / his / he). Yesterday, he yelled at an employee for a small mistake. The manager was acting like a bad [3] (egg / apple / nut). The employee was the [4] (apple / cream / milk) of everyone's eye, so we felt bad for [5] (her / she / hers).",
                answers: ["cheese", "him", "egg", "apple", "her"]
            },
            {
                title: "Text 8: A Clumsy Mistake",
                text: "While I was pouring milk into my [1] (glass / plate / knife), I dropped the carton. Milk went everywhere on the kitchen floor! My sister laughed at [2] (me / I / my) and said, \"Don't cry over spilled [3] (milk / water / tea).\" We used paper [4] (napkins / forks / spoons) to clean up the mess. It wasn't a big deal, and we quickly forgot about [5] (it / them / its).",
                answers: ["glass", "me", "milk", "napkins", "it"]
            },
            {
                title: "Text 9: The Busy Waitress",
                text: "The [1] (waitress / menu / plate) in the cafe was very busy today. She brought us the [2] (menu / kitchen / fork) so we could order. She accidentally dropped a [3] (plate / tip / nutrition) on the floor. I told her not to worry. We left a nice [4] (tip / bill / grain) for her because she was kind to [5] (us / we / our).",
                answers: ["waitress", "menu", "plate", "tip", "us"]
            },
            {
                title: "Text 10: Cooking Dinner",
                text: "My dad is the [1] (chef / waiter / menu) in our house. He always cooks in the [2] (kitchen / restaurant / cafe). He used a sharp [3] (knife / spoon / glass) to cut the steak. The food was so [4] (delicious / unhealthy / bad) that we ate everything. He cooked it just for [5] (us / we / our).",
                answers: ["chef", "kitchen", "knife", "delicious", "us"]
            }
        ],

        // --- TYPE 15: LISTEN AND COMPLETE TEXT (10 ITEMS) ---
        15: [
            {
                title: "Audio Script 1",
                audio: "I try to follow a healthy diet. I eat a lot of organic vegetables and avoid fast food. In a nutshell, good nutrition gives me energy. My doctor is very proud of me.",
                text: "I try to follow a healthy [1]. I eat a lot of [2] vegetables and avoid fast food. In a [3], good [4] gives me energy. My doctor is very proud of [5].",
                answers: ["diet", "organic", "nutshell", "nutrition", "me"]
            },
            {
                title: "Audio Script 2",
                audio: "We went to a restaurant for dinner. The waiter brought us the menu. I ordered a steak for my main course. When we finished, my dad paid the bill and left a generous tip.",
                text: "We went to a restaurant for dinner. The [1] brought [2] the menu. I ordered a steak for my main [3]. When we finished, my dad paid the [4] and left a generous [5].",
                answers: ["waiter", "us", "course", "bill", "tip"]
            },
            {
                title: "Audio Script 3",
                audio: "My sister is a vegan, so she doesn't eat dairy products like cheese or milk. Her meals are full of grains and fruits. Cooking for her is a piece of cake because she loves simple salads.",
                text: "My sister is a [1], so she doesn't eat [2] products like cheese or milk. Her meals are full of [3] and fruits. Cooking for [4] is a piece of [5] because she loves simple salads.",
                answers: ["vegan", "dairy", "grains", "her", "cake"]
            },
            {
                title: "Audio Script 4",
                audio: "Are these books yours? No, they aren't mine. I think they are his. He left them on the chair. I will give them to him when he comes back.",
                text: "Are these books [1]? No, they aren't [2]. I think they are [3]. He left them on the chair. I will give [4] to [5] when he comes back.",
                answers: ["yours", "mine", "his", "them", "him"]
            },
            {
                title: "Audio Script 5",
                audio: "I am allergic to peanuts, so my school is completely nut-free. I must read the labels to check for added sugar and nuts. This helps protect my health. The teachers always watch out for us. It is important for me.",
                text: "I am allergic to peanuts, so my school is completely [1]. I must read the labels to check for added [2] and nuts. This helps protect my [3]. The teachers always watch out for [4]. It is important for [5].",
                answers: ["nut-free", "sugar", "health", "us", "me"]
            },
            {
                title: "Audio Script 6",
                audio: "The principal is the big cheese at our school. He makes all the important rules. Yesterday, he caught a student cheating. That student is a bad egg. The principal told him that honesty is essential.",
                text: "The principal is the big [1] at our school. He makes all the important rules. Yesterday, he caught a student cheating. That student is a bad [2]. The principal told [3] that honesty is essential. We must respect [4] and [5] rules.",
                answers: ["cheese", "egg", "him", "him", "his"]
            },
            {
                title: "Audio Script 7",
                audio: "I dropped my plate and the food went everywhere. I was so upset, but my mom said, 'Don't cry over spilled milk.' We used a napkin to clean it up. Then she made me another sandwich.",
                text: "I dropped my [1] and the food went everywhere. I was so upset, but my mom said, 'Don't cry over spilled [2].' We used a [3] to clean it up. Then [4] made [5] another sandwich.",
                answers: ["plate", "milk", "napkin", "she", "me"]
            },
            {
                title: "Audio Script 8",
                audio: "I don't like horror movies; they are not my cup of tea. I prefer comedies because I love to laugh. My friend invited me to the cinema, but I told her I would rather stay home. She said the choice was mine. I thanked her.",
                text: "I don't like horror movies; they are not my cup of [1]. I prefer comedies because I love to laugh. My friend invited [2] to the cinema, but I told [3] I would rather stay home. She said the choice was [4]. I thanked [5].",
                answers: ["tea", "me", "her", "mine", "her"]
            },
            {
                title: "Audio Script 9",
                audio: "His diet is very strict because he is an athlete. He needs lots of protein, so he eats chicken and eggs. He doesn't eat junk food because it is bad for him. Following his routine would not be a piece of cake for me. I am nuts about sweets!",
                text: "[1] diet is very strict because he is an athlete. He needs lots of protein, so he eats chicken and eggs. He doesn't eat junk food because it is bad for [2]. Following his routine would not be a piece of [3] for [4]. I am nuts [5] sweets!",
                answers: ["His", "him", "cake", "me", "about"]
            },
            {
                title: "Audio Script 10",
                audio: "This is our house, and that house is theirs. We invited them over for a healthy dinner. We prepared a big salad and some fish. They loved the meal and thanked us. We are planning to visit their house next week for a barbecue.",
                text: "This is our house, and that house is [1]. [2] invited [3] over for a healthy dinner. We prepared a big salad and some fish. They loved the meal and thanked [4]. We are planning to visit [5] house next week for a barbecue.",
                answers: ["theirs", "We", "them", "us", "their"]
            }
        ]
    }
});